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
            "bn": "আলাম তারা কাইফা ফা‘আলা রাব্বুকা বি‘আদ, ইরামা যাতিল ‘ইমাদ: তুমি কি দেখোনি, তোমার রব ‘আদের সঙ্গে কী করেছিলেন, স্তম্ভওয়ালা ইরামের সঙ্গে? দুই আয়াতে মোট নয়টি আরবি শব্দ, প্রথমটিতে ছয়টি, পরেরটিতে তিনটি। শপথগুলো আর ৮৯:৫ আয়াতের প্রশ্নের ঠিক পরেই এদের স্থান। এই মোড় ঘোরার কারণ ইবন কাসীর ব্যাখ্যা করেন। ইবাদত আর আনুগত্যের মানুষদের কথা বলার পর আল্লাহ এবার ‘আদের কথা আনেন। তারা ছিল বিদ্রোহী, উদ্ধত আর জালিম। তারা চলত তাঁর আনুগত্যের বাইরে, তাঁর রাসূলদের মিথ্যাবাদী বলত, তাঁর কিতাবগুলো অস্বীকার করত।"
          },
          {
            "en": "Who is asked to see, and with what? At-Tabari reads it as said to the Prophet ﷺ: have you not looked, Muhammad, with the eye of your heart? As-Sa'di says the same, with your heart and your insight. Al-Qurtubi calls it seeing of the heart, addressed to the Prophet ﷺ with a general intent, and notes that the story of 'Ad was well known to the first hearers, since 'Ad had lived in the lands of the Arabs. Al-Baghawi gives al-Farra': have you not been told? and az-Zajjaj: have you not known? The sense, he says, is wonder.",
            "bn": "কাকে দেখতে বলা হচ্ছে, আর কী দিয়ে? তাবারীর পাঠে কথাটা নবী ﷺ-কে বলা: হে মুহাম্মাদ, তুমি কি অন্তরের চোখে তাকিয়ে দেখোনি? সাদীও একই কথা বলেন, অন্তর আর অন্তর্দৃষ্টি দিয়ে দেখা। কুরতুবী একে অন্তরের দেখা বলেন। সম্বোধন নবী ﷺ-কে, কিন্তু উদ্দেশ্য সবাই। তিনি আরও বলেন, ‘আদের ঘটনা প্রথম শ্রোতাদের কাছে সুপরিচিত ছিল, কারণ ‘আদ আরবদের দেশেই বাস করত। বাগাভী ফাররার মত আনেন: তোমাকে কি জানানো হয়নি? আর যাজ্জাজের মত: তুমি কি জানো না? তাঁর মতে এখানে ভাবটা বিস্ময়ের।"
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
            "bn": "ইবন কাসীর বলেন, এরা প্রথম ‘আদ। ইবন ইসহাকের বর্ণনায় এদের বংশ: ‘আদ, ইরামের পুত্র, ইরাম আওসের পুত্র, আওস সামের পুত্র, সাম নূহের পুত্র। এরাই সেই জাতি, যাদের কাছে আল্লাহ তাঁর রাসূল হূদ (আঃ)-কে পাঠিয়েছিলেন। তারা তাঁকে মিথ্যাবাদী বলল, তাঁর বিরোধিতা করল। আল্লাহ তাঁকে আর তাঁর সঙ্গে ঈমান আনা লোকদের বাঁচালেন, বাকিদের ধ্বংস করলেন প্রচণ্ড ঝড়ো বাতাসে। এর প্রমাণে ইবন কাসীর ৬৯:৭ আর ৬৯:৮ আয়াত উদ্ধৃত করেন। তিনি আরও বলেন, কুরআনে আল্লাহ একাধিক জায়গায় তাদের কাহিনি বলেছেন, যাতে মুমিনেরা তাদের পতন থেকে শিক্ষা নেয়।"
          },
          {
            "en": "Why add Iram at all? Ma'arif al-Qur'an says Iram marks out which of two 'Ads is meant: the earlier, called 'Ad al-Ula, the first 'Ad, in 53:50. Al-Qurtubi gives the same picture as one view: there were two 'Ads, the first of them Iram, named after their ancestor, and those after them called the later 'Ad. On this account, the name ties the people to a known line.",
            "bn": "ইরাম নামটা যোগ হলো কেন? মাআরিফুল কুরআন বলে, দুই ‘আদের মধ্যে কোনটির কথা হচ্ছে, ইরাম তা আলাদা করে দেয়। এরা আগের দল, ৫৩:৫০ আয়াতে যাদের বলা হয়েছে ‘আদ আল-উলা, প্রথম ‘আদ। কুরতুবীও একটি মত হিসেবে একই ছবি দেন। ‘আদ ছিল দুটি, প্রথমটি ইরাম, তাদের পূর্বপুরুষের নামে ডাকা। পরে যারা এল, তাদের বলা হলো পরবর্তী ‘আদ। এ ব্যাখ্যায় ইরাম নামটি জাতিটিকে এক চেনা বংশধারার সঙ্গে বেঁধে দেয়।"
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
            "bn": "ইরাম কী ছিল? কেউ একে মানুষের নাম ধরেছেন। ইবন কাসীর ও তাবারীতে ইবন ইসহাকের দেওয়া বংশধারা: ‘আদ ইবন ইরাম, অর্থাৎ ইরাম ‘আদের পিতা। কুরতুবী আতার সূত্রে ইবন আব্বাস থেকেও একই কথা আনেন, আবার ইবন ইসহাক থেকে এ-ও আনেন যে ইরাম হলেন নূহের পুত্র সাম। বাগাভীর বর্ণনায় ইবন ইসহাক ইরামকে ‘আদের দাদা বলেছেন। বাগাভীতে কালবীর মত, ইরামের কাছে এসে ‘আদ আর সামূদের বংশধারা মিলেছে। লোকে বলত, ‘আদ ইরাম, সামূদ ইরাম। বংশতালিকার ক্রম একেক সূত্রে একেক রকম।"
          },
          {
            "en": "Others made it a people. Qatadah, in at-Tabari: we used to be told that Iram was a tribe of 'Ad, the royal house of 'Ad. Ibn Kathir quotes Qatadah and as-Suddi for the royal house and calls it a good, strong view. At-Tabari judges a tribe of 'Ad the likeliest meaning, as Qatadah said, and Allah knows best. Al-Muyassar reads the tribe of Iram, and as-Sa'di the well-known tribe in Yemen. Mujahid called Iram a nation, and in another report, the ancient one; al-Qurtubi adds a third report from him, the strong.",
            "bn": "অন্যরা একে একটি জাতি ধরেছেন। তাবারীতে কাতাদার কথা: আমাদের বলা হতো, ইরাম ‘আদের একটি গোত্র, ‘আদের রাজবংশ। ইবন কাসীর রাজবংশের কথাটা কাতাদা ও সুদ্দী থেকে এনে একে ভালো ও মজবুত মত বলেন। তাবারীর বিচারে সবচেয়ে সম্ভাব্য অর্থ ‘আদের একটি গোত্র, যেমন কাতাদা বলেছেন, আর আল্লাহই ভালো জানেন। মুয়াসসার পড়ে ইরাম গোত্র, সাদী বলেন ইয়েমেনের সুপরিচিত গোত্র। মুজাহিদ ইরামকে বলেছেন একটি উম্মত, আরেক বর্ণনায় প্রাচীন জাতি। কুরতুবী তাঁর থেকে তৃতীয় একটি বর্ণনা আনেন: শক্তিশালী।"
          },
          {
            "en": "A third group made Iram a city. Al-Maqburi, in at-Tabari, said Damascus, as did Sa'id ibn al-Musayyib and 'Ikrimah in al-Baghawi; al-Qurtubi adds Khalid ar-Rab'i and a report through Ibn Wahb and Ashhab from Malik. Ibn al-'Arabi, quoted by al-Qurtubi, chose Damascus. Muhammad ibn Ka'b al-Qurazi said Alexandria, in all three. A last view reads Iram as a word, not a name: Ibn Abbas and ad-Dahhak, in reports at-Tabari carries, take it as the destroyed, as one says arama banu fulan, such a clan perished.",
            "bn": "তৃতীয় একদল ইরামকে শহর বলেছেন। তাবারীতে মাকবুরীর মত, দামেস্ক। বাগাভীতে সাঈদ ইবনুল মুসাইয়িব ও ইকরিমারও একই মত। কুরতুবী এর সঙ্গে যোগ করেন খালিদ আর-রাব‘ঈ আর ইবন ওয়াহব ও আশহাবের সূত্রে মালিক থেকে একটি বর্ণনা। কুরতুবীর উদ্ধৃতিতে ইবনুল আরাবীও দামেস্ককেই বেছে নেন। মুহাম্মাদ ইবন কা‘ব কুরাযী বলেছেন আলেকজান্দ্রিয়া, তিনটি তাফসীরেই তা আছে। শেষ একটি মতে ইরাম কোনো নাম নয়, একটি শব্দ। তাবারীর আনা বর্ণনায় ইবন আব্বাস ও দাহহাক এর অর্থ করেন ধ্বংসপ্রাপ্ত। যেমন বলা হয়, আরামা বানু ফুলান, অমুক গোত্র ধ্বংস হয়ে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Left Without Tanwin",
          "bn": "তানবীন ছাড়া একটি নাম"
        },
        "p": [
          {
            "en": "Grammar carries part of the argument. Al-Qurtubi gives the reading of the generality as bi-'Adin, with tanwin on 'Ad, followed by Irama, left undeclined. On that reading Iram is the tribe's name and 'Ad their father's, and Iram stands as badal or 'atf bayan for 'Ad. Al-Hasan and Abu al-'Aliyah read bi-'Adi Irama, in construct; then Iram is their mother's name or their town's, meaning 'Ad, the people of Iram. Ibn Kathir calls Iram 'atf bayan, a further identification, and Ma'arif al-Qur'an allows either 'atf bayan or badal.",
            "bn": "যুক্তির একটা অংশ বহন করে ব্যাকরণ। কুরতুবী বলেন, অধিকাংশের পাঠ বি‘আদিন, ‘আদ শব্দে তানবীনসহ, তারপর ইরামা, যা পূর্ণ বিভক্তি নেয় না। এ পাঠে ইরাম গোত্রের নাম, ‘আদ তাদের পিতার নাম, আর ইরাম ‘আদের বদল কিংবা আতফে বায়ান। হাসান ও আবুল আলিয়া পড়েছেন বি‘আদি ইরামা, সম্বন্ধপদ করে। তখন ইরাম তাদের মায়ের নাম, কিংবা তাদের শহরের নাম। অর্থ দাঁড়ায়, ইরামবাসী ‘আদ। ইবন কাসীর ইরামকে বলেন আতফে বায়ান, পরিচয়টা আরও স্পষ্ট করার জন্য। মাআরিফুল কুরআন আতফে বায়ান বা বদল, দুটিই সম্ভব বলে।"
          },
          {
            "en": "At-Tabari uses the missing tanwin to decide. Had Iram meant the ancient, as reported from Mujahid, it would carry tanwin, so he calls that view meaningless. Had Iram been a town or 'Ad's ancestor, he says, the reading would put 'Ad in construct with it, as Arabs say 'Amr of Zubayd or A'sha of Hamdan. The readers, in his account, agreed on neither construct nor tanwin, and that points to a tribe. Al-Qurtubi, though, records al-Hasan and Abu al-'Aliyah reading the construct. Two accounts of the readings stand here side by side.",
            "bn": "তাবারী তানবীন না থাকাকেই মীমাংসার ভিত্তি করেন। মুজাহিদ থেকে বর্ণিত অর্থ, প্রাচীন, যদি উদ্দেশ্য হতো, তবে শব্দটিতে তানবীন থাকত। তাই এ মতকে তিনি অর্থহীন বলেন। তাঁর মতে ইরাম যদি শহর বা ‘আদের পূর্বপুরুষ হতো, তবে পাঠে ‘আদকে তার সঙ্গে সম্বন্ধপদ করা হতো, যেমন আরবরা বলে যুবাইদের আমর বা হামদানের আ‘শা। তাঁর বর্ণনায় কারীগণ সম্বন্ধপদ না করা আর তানবীন না দেওয়ায় একমত, আর এটাই গোত্রের দিকে ইঙ্গিত করে। অথচ কুরতুবী হাসান ও আবুল আলিয়ার সম্বন্ধপদের পাঠ উল্লেখ করেছেন। পাঠ নিয়ে দুজনের দুই বিবরণ এখানে পাশাপাশি রইল।"
          },
          {
            "en": "Al-Qurtubi lists further readings: Arama with two fathas, again from al-Hasan; Irm with a still ra; Iram in construct with dhat al-'imad; and Aram with a fatha on the hamza, from Mujahid, ad-Dahhak and Qatadah, Mujahid likening them to the aram, the landmarks. Ibn Kathir, for his part, says the city view does not hold together if Iram is badal or 'atf bayan, since the point is the destruction of the tribe called 'Ad, not news of a city or region.",
            "bn": "কুরতুবী আরও কয়েকটি পাঠের তালিকা দেন। হাসান থেকেই আরামা, দুই যবরসহ। রা-তে সাকিন দিয়ে ইরম। যাতিল ‘ইমাদের সঙ্গে ইরামের সম্বন্ধপদ। আর হামযায় যবর দিয়ে আরাম, মুজাহিদ, দাহহাক ও কাতাদা থেকে। মুজাহিদ এ পাঠে তাদের তুলনা করেছেন আরাম, অর্থাৎ পথচিহ্নের সঙ্গে। ইবন কাসীর অন্যদিকে বলেন, ইরাম যদি বদল বা আতফে বায়ান হয়, তবে শহরের মত খাপ খায় না। কারণ বক্তব্য হলো ‘আদ নামের গোত্রের ধ্বংস, কোনো শহর বা অঞ্চলের খবর নয়।"
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
            "bn": "যাতিল ‘ইমাদ, স্তম্ভওয়ালা, এ শব্দেও ব্যাখ্যা অনেক। তাবারীতে মুজাহিদ বলেন, তারা ছিল খুঁটির মানুষ, এক জায়গায় থিতু হতো না। কাতাদা বলেন, আমাদের জানানো হয়েছে, তারা খুঁটির মানুষ ছিল, স্থায়ী বসতি গড়ত না, ঘুরে বেড়াত। ইবন কাসীর বলেন, তারা থাকত পশমের তাঁবুতে, যা মজবুত খুঁটির উপর দাঁড় করানো হতো। কুরতুবী কাতাদার কথা আরও বিস্তারে দেন। তারা তাঁবু আর খুঁটির মানুষ, বৃষ্টি আর চারণভূমির খোঁজে ঘরবাড়ি নিয়ে সরে যেত, পরে আবার নিজেদের বসতিতে ফিরত।"
          },
          {
            "en": "Others read height. Ibn Abbas, in at-Tabari: their tallness was like pillars. Mujahid, in another report there, says they had bodies up in the sky. Abu 'Ubaydah, in al-Qurtubi, notes that Arabs call a tall man mu'ammad. Ma'arif al-Qur'an takes this reading: they were very tall in stature. Others read buildings. Ibn Zayd, in at-Tabari, says 'Ad, the people of Hud (AS), built it while they were in al-Ahqaf, which he places in Hadramawt. Al-Muyassar speaks of buildings raised on columns. Ad-Dahhak read strength and hardness, and as-Sa'di intense strength, insolence and tyranny.",
            "bn": "অন্যরা অর্থ করেছেন উচ্চতা। তাবারীতে ইবন আব্বাস বলেন, তাদের দৈর্ঘ্য ছিল স্তম্ভের মতো। সেখানেই আরেক বর্ণনায় মুজাহিদ বলেন, তাদের দেহ উঠে গিয়েছিল আকাশের দিকে। কুরতুবীতে আবু উবায়দা জানান, আরবরা লম্বা মানুষকে বলে মু‘আম্মাদ। মাআরিফুল কুরআন এ অর্থই নেয়: তারা ছিল খুব দীর্ঘদেহী। কেউ আবার অর্থ করেছেন দালান। তাবারীতে ইবন যায়দ বলেন, হূদ (আঃ)-এর জাতি ‘আদ তা নির্মাণ করেছিল আহকাফে থাকার সময়। আহকাফকে তিনি হাদরামাওতে বলে উল্লেখ করেন। মুয়াসসার বলে স্তম্ভের উপর দাঁড় করানো উঁচু দালানের কথা। দাহহাক অর্থ করেছেন শক্তি ও কাঠিন্য, আর সাদী প্রচণ্ড শক্তি, ঔদ্ধত্য আর স্বেচ্ছাচার।"
          },
          {
            "en": "At-Tabari chooses the tent-poles. In Arabic speech, he says, 'imad is known as the wood of tents and the posts that bear a building, and no building of theirs on columns is known by a sound report. Ibn Kathir notes that Ibn Jarir chose the first and rejected the height reading, and says he was right. Ma'arif and al-Muyassar read otherwise. Ibn Kathir closes on a point that holds either way: buildings, nomads' tent-poles, weapons or height, 'Ad were a tribe and a nation.",
            "bn": "তাবারী বেছে নেন তাঁবুর খুঁটির অর্থ। তাঁর কথা, আরবদের ভাষায় ‘ইমাদ বলতে বোঝায় তাঁবুর কাঠ আর দালান যে খুঁটির উপর দাঁড়ায়। তাদের কোনো স্তম্ভওয়ালা দালানের কথা কোনো সহীহ খবরে জানা যায় না। ইবন কাসীর জানান, ইবন জারীর প্রথম অর্থটি নিয়েছেন, উচ্চতার অর্থ নাকচ করেছেন, আর তিনি ঠিকই করেছেন। মাআরিফ ও মুয়াসসার অবশ্য ভিন্ন অর্থ নেয়। ইবন কাসীর শেষ করেন এমন এক কথায়, যা সব অর্থেই খাটে। স্তম্ভ মানে দালান হোক, যাযাবরের তাঁবুর খুঁটি হোক, অস্ত্র হোক বা উচ্চতা, ‘আদ ছিল একটি গোত্র, একটি উম্মত।"
          }
        ]
      },
      {
        "h": {
          "en": "Tall Tales, Weighed and Set Aside",
          "bn": "অতিরঞ্জিত কাহিনি: যাচাই করে বাদ"
        },
        "p": [
          {
            "en": "Al-Qurtubi carries reports of their height that climb fast: hundreds of cubits under Ibn Abbas's name through 'Ata', seventy in another report from him, and twelve from Qatadah, which al-Qurtubi introduces with the word claimed. The text gives no chain for any of them. Ibn al-'Arabi, quoted by al-Qurtubi, calls the seventy-cubit report false, because it is in the Sahih that Allah created Adam sixty cubits tall and that creation has kept decreasing since. The report is in Sahih al-Bukhari (3326), a general narration not attached to this verse. The page gives it in English as follows.",
            "bn": "কুরতুবী তাদের উচ্চতা নিয়ে এমন সব বর্ণনা আনেন, যা দ্রুত বাড়তে থাকে। আতার সূত্রে ইবন আব্বাসের নামে কয়েকশো হাত, তাঁর থেকে আরেক বর্ণনায় সত্তর হাত, আর কাতাদা থেকে ১২ হাত, যা কুরতুবী শুরু করেন ‘দাবি করেছেন’ শব্দে। এগুলোর কোনোটির সনদ লেখায় নেই। কুরতুবীর উদ্ধৃতিতে ইবনুল আরাবী সত্তর হাতের বর্ণনাকে বাতিল বলেন। কারণ সহীহতে আছে, আল্লাহ আদমকে ষাট হাত লম্বা করে সৃষ্টি করেছেন, আর তারপর থেকে সৃষ্টি ছোট হয়েই চলেছে। বর্ণনাটি সহীহ বুখারীতে আছে (৩৩২৬)। এটি একটি সাধারণ হাদিস, এ আয়াতের সঙ্গে যুক্ত নয়। পাতাটির ইংরেজি পাঠের বাংলা রূপ নিচে।"
          },
          {
            "en": "Narrated Abu Huraira: The Prophet (ﷺ) said, \"Allah created Adam, making him 60 cubits tall. When He created him, He said to him, \"Go and greet that group of angels, and listen to their reply, for it will be your greeting (salutation) and the greeting (salutations of your offspring.\" So, Adam said (to the angels), As-Salamu Alaikum (i.e. Peace be upon you). The angels said, \"As-salamu Alaika wa Rahmatu-l-lahi\" (i.e. Peace and Allah's Mercy be upon you). Thus the angels added to Adam's salutation the expression, 'Wa Rahmatu-l-lahi,' Any person who will enter Paradise will resemble Adam (in appearance and figure). People have been decreasing in stature since Adam's creation.",
            "bn": "আবু হুরায়রা (রাঃ) থেকে বর্ণিত: নবী ﷺ বলেছেন, “আল্লাহ আদমকে সৃষ্টি করলেন, তাঁর উচ্চতা ছিল ৬০ হাত। সৃষ্টি করে তাঁকে বললেন, যাও, ফেরেশতাদের ওই দলটিকে সালাম দাও, আর শোনো তারা কী জবাব দেয়। সেটাই হবে তোমার অভিবাদন, আর তোমার বংশধরদের অভিবাদন। আদম (ফেরেশতাদের) বললেন, আসসালামু আলাইকুম (অর্থাৎ আপনাদের উপর শান্তি)। ফেরেশতারা বললেন, আসসালামু আলাইকা ওয়া রাহমাতুল্লাহ (অর্থাৎ আপনার উপর শান্তি ও আল্লাহর রহমত)। এভাবে ফেরেশতারা আদমের সালামে ‘ওয়া রাহমাতুল্লাহ’ কথাটি যোগ করলেন। যে-ই জান্নাতে প্রবেশ করবে, সে আকৃতি ও গড়নে আদমের মতো হবে। আদমের সৃষ্টির পর থেকে মানুষের উচ্চতা কমেই চলেছে।”"
          },
          {
            "en": "Ma'arif al-Qur'an says the Qur'an left out their measurement as unnecessary, that Israelite traditions tell incredible things about their stature, and that the figure reported from Ibn Abbas and Muqatil also seems drawn from them. Ma'arif reports that some made Iram a paradise built by Shaddad son of 'Ad, and al-Qurtubi carries such accounts with no chain. Ibn Kathir warns against them explicitly, so that nobody is taken in: a city of gold and silver is a fable of the Israelites, and the tale of a Bedouin who came upon it has no sound chain.",
            "bn": "মাআরিফুল কুরআন বলে, তাদের মাপজোখ কুরআন বাদ রেখেছে, কারণ তার প্রয়োজন ছিল না। ইসরাঈলী বর্ণনাগুলো তাদের দৈহিক গড়ন নিয়ে অবিশ্বাস্য সব কথা বলে। ইবন আব্বাস ও মুকাতিল থেকে বর্ণিত মাপটিও সেখান থেকেই নেওয়া বলে মনে হয়। মাআরিফ জানায়, কেউ কেউ ইরামকে বলেছেন ‘আদের পুত্র শাদ্দাদের গড়া এক বেহেশত। কুরতুবী এমন বিবরণ আনেন কোনো সনদ ছাড়াই। কেউ যেন ধোঁকা না খায়, তাই ইবন কাসীর স্পষ্ট করে এসব থেকে সাবধান করেন। সোনা-রুপার শহরের বর্ণনা ইসরাঈলীদের কল্পকাহিনি, আর এক বেদুঈনের সেই শহরে গিয়ে পড়ার গল্পের সনদ সহীহ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Favour Turned Into Boast",
          "bn": "নিয়ামত যখন অহংকার"
        },
        "p": [
          {
            "en": "Ibn Kathir says they were the strongest people of their time in build and the mightiest in force. That, he says, is why Hud (AS) reminded them of the favour and directed them to spend it in obedience to the Lord who created them, and he cites 7:69: remember when He made you successors after the people of Nuh and increased you in stature. He sets beside it 41:15: as for 'Ad, they were arrogant in the land without right and said, who is mightier than us in strength?",
            "bn": "ইবন কাসীর বলেন, নিজেদের যুগে গড়নে তারা ছিল সবচেয়ে মজবুত, শক্তিতে সবচেয়ে প্রবল। এ কারণেই হূদ (আঃ) তাদের এই নিয়ামতের কথা মনে করিয়ে দেন, আর বলেন, যে রব তাদের সৃষ্টি করেছেন, তাঁর আনুগত্যে এ শক্তি খরচ করতে। প্রমাণে তিনি ৭:৬৯ আয়াত আনেন: স্মরণ করো, তিনি তোমাদের নূহের জাতির পর উত্তরসূরি বানিয়েছেন, আর দৈহিক গড়নে তোমাদের বাড়িয়ে দিয়েছেন। তার পাশে রাখেন ৪১:১৫ আয়াত: ‘আদ পৃথিবীতে অন্যায়ভাবে অহংকার করেছিল, বলেছিল, শক্তিতে আমাদের চেয়ে প্রবল কে?"
          },
          {
            "en": "Al-Qurtubi cites the same line of 41:15 for ad-Dahhak's reading of the pillars as strength. Al-Baghawi names the purpose: the verse makes the people of Makkah fear, for it tells how He destroyed those who lived longer and were stronger than they. The module's article on 7:69 reads the favour as an argument Hud (AS) made; these two verses show where the refusal ended. The gift was real, and so was the reminder. What turned it into ruin was the boast that nothing could match them.",
            "bn": "স্তম্ভকে শক্তি অর্থে নেওয়ার পক্ষে দাহহাকের দলিল হিসেবে কুরতুবী ৪১:১৫ আয়াতের এই অংশটিই আনেন। বাগাভী উদ্দেশ্যটা খুলে বলেন। আয়াতটি মক্কাবাসীকে ভয় দেখায়, কারণ এতে আছে, যারা তাদের চেয়ে বেশি দিন বাঁচত আর বেশি শক্তিশালী ছিল, তাদের তিনি কীভাবে ধ্বংস করেছিলেন। এই মডিউলে ৭:৬৯ আয়াতের প্রবন্ধ নিয়ামতকে দেখে হূদ (আঃ)-এর যুক্তি হিসেবে। এ দুই আয়াত দেখায়, প্রত্যাখ্যানের শেষ কোথায় গিয়ে ঠেকল। দানটা সত্যি ছিল, মনে করিয়ে দেওয়াও সত্যি। সর্বনাশ ডেকে আনল এই অহংকার যে, তাদের সমকক্ষ কেউ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "No Heirs Named Today",
          "bn": "আজকের কাউকে উত্তরসূরি বলা চলে না"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verses speak only of what they name: a people of the past named 'Ad, called by the name Iram, and what their Lord did with them. They license nothing against any living person or community. They give nobody standing to name a tribe, a nation or a town of today as Iram or as the heirs of 'Ad or to treat any place as cursed. Where Iram stood is among the questions the commentators answered differently, and this article leaves it with them.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত দুটি শুধু সেটুকুই বলে, যা কুরআনে আছে: অতীতের এক জাতি, যার নাম ‘আদ, যাদের ইরাম নামে ডাকা হয়েছে, আর তাদের রব তাদের সঙ্গে কী করেছিলেন। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো গোত্র, জাতি বা শহরকে ইরাম কিংবা ‘আদের উত্তরসূরি বলে দাগানোর অধিকার কাউকে দেয় না। কোনো জায়গাকে অভিশপ্ত ভাবারও না। ইরাম কোথায় ছিল, তার উত্তর তাফসীরকারেরা ভিন্ন ভিন্ন দিয়েছেন। এ প্রবন্ধ প্রশ্নটা তাঁদের কাছেই রেখে দেয়।"
          },
          {
            "en": "What the verses leave the reader is the question itself: have you not seen? A reader who has the health, the skill or the walls that his own age admires can ask it of himself. Do I treat what I have been given as proof that nothing can reach me? Have I been reminded of a favour and answered with a boast? Those who ask that honestly have seen what the verses asked them to see.",
            "bn": "আয়াত দুটি পাঠকের হাতে রেখে যায় প্রশ্নটাই: তুমি কি দেখোনি? যাঁর আছে স্বাস্থ্য, দক্ষতা কিংবা এমন দেয়াল, যা নিজের যুগের লোকেরা তারিফ করে, তিনি প্রশ্নটা নিজেকেই করতে পারেন। আমাকে যা দেওয়া হয়েছে, তা দেখে কি আমি ভাবি, কিছুই আমাকে ছুঁতে পারবে না? নিয়ামতের কথা মনে করিয়ে দেওয়া হলে আমি কি অহংকার দিয়ে জবাব দিয়েছি? যিনি সৎভাবে এ প্রশ্ন করেন, আয়াত দুটি যা দেখতে বলেছে, তিনি তা দেখেছেন।"
          }
        ]
      }
    ]
  },
  "89:18": {
    "sections": [
      {
        "h": {
          "en": "Five Words After a Refusal",
          "bn": "এক প্রত্যাখ্যানের পরে পাঁচ শব্দ"
        },
        "p": [
          {
            "en": "Wa la tahaddun 'ala ta'am al-miskin: and you do not urge each other to feed the poor. The verse has 5 Arabic words. Wa-la is and not. Tahaddun is a present-tense verb of the sixth form, addressed to a group of men, from the root h-d-d; the commentators gloss it as urging. 'Ala marks what the urging should be towards. Ta'am comes from the root t-'-m, and al-miskin from the root s-k-n, the poor or needy person. The last two words are joined, so that the phrase reads the ta'am of the poor.",
            "bn": "ওয়া লা তাহাদ্দূনা আলা তাআমিল মিসকীন: আর তোমরা অভাবীকে খাওয়ানোর জন্য পরস্পরকে উৎসাহ দাও না। আয়াতে আরবি শব্দ ৫টি। ওয়া লা মানে আর না। তাহাদ্দূন বর্তমান কালের ক্রিয়া, ষষ্ঠ রূপের, একদল পুরুষকে সামনাসামনি বলা। এর ধাতু হ-দ-দ (ح ض ض), আর তাফসীরকারেরা এর অর্থ করেন উৎসাহ দেওয়া, তাগিদ দেওয়া। আলা বোঝায় তাগিদটা কীসের দিকে। তাআম এসেছে ত-আ-ম (ط ع م) ধাতু থেকে, আর আল-মিসকীন স-ক-ন (س ك ن) ধাতু থেকে, মানে গরিব বা অভাবী মানুষ। শেষ দুটি শব্দ জোড়া লাগানো, তাই পুরো কথাটা দাঁড়ায় মিসকীনের তাআম।"
          },
          {
            "en": "The verse does not stand alone. 89:15 and 89:16 give a man's two readings of his own fortune: when his Lord tests him with honour and favour, he says my Lord has honoured me; when He tests him by measuring out his provision, he says my Lord has humiliated me. 89:17 answers with kalla, no, and then bal, rather: you do not honour the orphan. This verse follows on a single wa, and. It is the second item in that answer, and the list runs on into 89:19 and 89:20, which have entries of their own.",
            "bn": "আয়াতটি একা দাঁড়িয়ে নেই। ৮৯:১৫ ও ৮৯:১৬ আয়াতে এক মানুষ নিজের ভাগ্যকে দুইভাবে পড়ে। রব যখন তাকে সম্মান আর নিয়ামত দিয়ে পরীক্ষা করেন, সে বলে, আমার রব আমাকে সম্মানিত করেছেন। আর যখন রিযক মেপে দিয়ে পরীক্ষা করেন, সে বলে, আমার রব আমাকে লাঞ্ছিত করেছেন। ৮৯:১৭ জবাব দেয় কাল্লা দিয়ে, মানে কক্ষনো না, তারপর বাল, বরং: তোমরা ইয়াতীমকে সম্মান কর না। এ আয়াত আসে শুধু একটি ওয়া, আর, দিয়ে জুড়ে। এটি সেই জবাবের দ্বিতীয় দফা। তালিকাটা এগিয়ে যায় ৮৯:১৯ ও ৮৯:২০ আয়াতে, যাদের আলাদা আলোচনা এখানে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the No Corrects",
          "bn": "কাল্লা যে ভুল ভাঙায়"
        },
        "p": [
          {
            "en": "The commentators read this verse through the no that comes before it. The Muyassar, which treats 89:18 together with 89:19 and 89:20, begins there: the matter is not as this man supposes; rather, honour is by obedience to Allah and disgrace by disobeying Him. Then it lists the charges; for this verse, some of you do not urge others to feed the poor. Ibn Kathir, in the abridged English, makes the same correction from the other side: Allah gives wealth to those He loves and to those He does not love, and withholds it from both.",
            "bn": "তাফসীরকারেরা আয়াতটি পড়েন আগের কাল্লার আলোয়। মুয়াসসার ৮৯:১৮ আয়াতকে ৮৯:১৯ ও ৮৯:২০ আয়াতের সঙ্গে একসঙ্গে ব্যাখ্যা করে, আর শুরু করে সেখান থেকেই। ব্যাপারটা এই মানুষ যেমন ভাবছে তেমন নয়। সম্মান আসে আল্লাহর আনুগত্যে, লাঞ্ছনা আসে তাঁর নাফরমানিতে। এরপর মুয়াসসার অভিযোগগুলো গুনে যায়, এ আয়াতের বেলায়: তোমাদের কেউ অন্যকে মিসকীনকে খাওয়াতে উৎসাহ দেয় না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একই ভুল ভাঙায় অন্য দিক থেকে। আল্লাহ যাদের ভালোবাসেন তাদেরও সম্পদ দেন, যাদের ভালোবাসেন না তাদেরও দেন। আবার দুই দলের কাছ থেকেই তা আটকেও রাখেন।"
          },
          {
            "en": "The point, in Ibn Kathir's words, is that Allah should be obeyed in either circumstance: the wealthy should thank Allah, and the poor should be patient. Ma'arif al-Qur'an, commenting on 89:17 and this verse together, says the passage is apparently a rebuff to those who think wealth is an honour and poverty a dishonour. The verse does not tell anyone how rich they are. It points at what was done, or left unsaid, with what they had, which for the Muyassar is where honour and disgrace are actually decided.",
            "bn": "ইবন কাসীরের ভাষায় আসল কথা হলো, দুই অবস্থাতেই আল্লাহর আনুগত্য করতে হবে। ধনী হলে শুকরিয়া আদায় করবে, গরিব হলে সবর করবে। মাআরিফুল কুরআন ৮৯:১৭ আর এ আয়াত একসঙ্গে আলোচনা করে বলে, যারা ভাবে সম্পদ মানেই সম্মান আর দারিদ্র্য মানেই অপমান, এ অংশ বাহ্যত তাদের প্রতি এক ধমক। কে কত ধনী, আয়াত সে হিসাব দেয় না। আয়াতের আঙুল সেদিকে, যা হাতে ছিল তা দিয়ে কী করা হয়েছে, বা কোন কথাটা বলা হয়নি। মুয়াসসারের মতে সম্মান আর লাঞ্ছনার আসল ফয়সালা হয় সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Urging That Passes Between People",
          "bn": "মানুষে মানুষে চলা তাগিদ"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives two glosses. The first is plain: they do not command their households to feed a poor man who comes to them. The second explains the form. The Kufans, he says, read tahaddun with fatha on the ta and the ha, and with the alif: that is, some of them urge others. Its root form is tatahaddun, and one of the two ta sounds was dropped because the speech points to it. He adds that this reading was the choice of Abu 'Ubayd, and he defines al-hadd, the urging, as al-hathth, prompting.",
            "bn": "কুরতুবী দুটি ব্যাখ্যা দেন। প্রথমটা সাদামাটা: তারা নিজেদের পরিবারের লোকদের হুকুম করে না, যে মিসকীন তাদের কাছে আসে তাকে খাওয়াতে। দ্বিতীয়টা শব্দের গড়ন নিয়ে। তিনি বলেন, কুফার কারীরা তাহাদ্দূন পড়েছেন তা আর হা-তে যবর দিয়ে, মাঝে আলিফ রেখে, যার মানে তাদের একজন আরেকজনকে তাগিদ দেয়। শব্দটার আদি রূপ তাতাহাদ্দূন। দুটি তা-এর একটি বাদ পড়েছে, কারণ কথার ধারাই সেটা বুঝিয়ে দেয়। তিনি যোগ করেন, এই কিরাআত আবু উবাইদের পছন্দ। আর আল-হাদ্দ, অর্থাৎ তাগিদ, তাঁর সংজ্ঞায় আল-হাছছ, মানে উসকে দেওয়া।"
          },
          {
            "en": "The others divide between two verbs. Al-Baghawi first glosses the verse as you do not command his feeding, then notes the reading tahaddun, which he attributes to Abu Ja'far and the people of Kufa, meaning that some of you do not urge others to it. As-Sa'di keeps only the mutual sense: some of you do not urge others. Ibn Kathir's Arabic joins both: they do not command doing good to the poor and the needy, and do not urge each other to it. Urging and commanding sit side by side in the sources.",
            "bn": "বাকিরা দুটি ক্রিয়ার মাঝে ভাগ হয়ে যান। বাগাভী প্রথমে ব্যাখ্যা করেন: তোমরা তাকে খাওয়ানোর হুকুম কর না। তারপর তাহাদ্দূন কিরাআতের উল্লেখ করেন, যা তিনি আবু জা'ফর ও কুফাবাসীদের দিকে সম্বন্ধ করেন, যার অর্থ তোমাদের কেউ অন্যকে এর তাগিদ দেয় না। সা'দী শুধু পারস্পরিক অর্থটাই রাখেন: তোমাদের কেউ অন্যকে উৎসাহ দেয় না। ইবন কাসীরের আরবি পাঠে দুটোই একসঙ্গে আছে। তারা গরিব-মিসকীনের প্রতি সদাচরণের হুকুম করে না, আর এ ব্যাপারে একে অপরকে তাগিদও দেয় না। সূত্রগুলোতে তাগিদ আর হুকুম পাশাপাশি বসে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Readers of the Cities",
          "bn": "নগরে নগরে কারীদের পাঠ"
        },
        "p": [
          {
            "en": "At-Tabari begins by saying that the readers differed over this word, and he sets out where. Abu Ja'far among the people of Medina, and most of the readers of Kufa, read tahaddun, with the ta opened by fatha and the alif kept, in the sense that some of you do not urge others to feed the poor. Some readers of Mecca and most of the readers of Medina read tahuddun, with the ta opened and the alif dropped, in the sense that you do not command the feeding of the poor.",
            "bn": "তাবারী শুরুতেই বলেন, এ শব্দের পাঠ নিয়ে কারীদের মধ্যে মতভেদ আছে, তারপর খুলে দেখান কোথায়। মদীনাবাসীদের মধ্যে আবু জা'ফর আর কুফার অধিকাংশ কারী পড়েছেন তাহাদ্দূন। তা-তে যবর, মাঝে আলিফ বহাল। অর্থ: তোমাদের কেউ অন্যকে মিসকীনকে খাওয়াতে তাগিদ দেয় না। মক্কার কিছু কারী আর মদীনার অধিকাংশ কারী পড়েছেন তাহুদ্দূন। তা-তে যবর, আলিফ বাদ। অর্থ: তোমরা মিসকীনকে খাওয়ানোর হুকুম কর না।"
          },
          {
            "en": "Most of the readers of Basra read yahuddun, with ya and without the alif. That turns the address into a report: it is the men who said my Lord has honoured me and my Lord has humiliated me who do not honour the orphan and do not urge the feeding of the poor. Last, he records that it has been mentioned of some that they read tuhaddun, with the ta given damma and the alif kept, in the sense of wa la tuhafizun, roughly you do not keep guard.",
            "bn": "বসরার অধিকাংশ কারী পড়েছেন ইয়াহুদ্দূন, ইয়া দিয়ে, আলিফ ছাড়া। তাতে সম্বোধনটা বদলে হয়ে যায় অন্যের সম্পর্কে খবর। যারা বলেছিল আমার রব আমাকে সম্মানিত করেছেন, আমার রব আমাকে লাঞ্ছিত করেছেন, তারাই ইয়াতীমকে সম্মান করে না, মিসকীনকে খাওয়ানোর তাগিদ দেয় না। সবশেষে তিনি উল্লেখ করেন, কারও কারও সম্পর্কে বলা হয়েছে যে তাঁরা পড়েছেন তুহাদ্দূন। তা-তে পেশ, আলিফ বহাল, আর অর্থ ওয়া লা তুহাফিযূন, মোটামুটি: তোমরা পাহারা দাও না।"
          },
          {
            "en": "Al-Qurtubi also reports a reading tuhaddun, with damma on the ta, and gives it a chain of names: Ibrahim, ash-Shayzari from al-Kisa'i, and as-Sulami. At-Tabari then states his own verdict. These are known readings among the readers of the cities, he says; the three readings are sound in meaning, and whichever of them the reader recites, he is correct. So al-Qurtubi records that Abu 'Ubayd chose the Kufan reading, while at-Tabari declines to prefer any of the three. Neither is chosen here.",
            "bn": "কুরতুবীও তুহাদ্দূন পাঠের উল্লেখ করেন, তা-তে পেশ দিয়ে, আর এর সঙ্গে কয়েকটি নাম জুড়ে দেন: ইবরাহীম, কিসাঈ থেকে শাইযারী, আর সুলামী। এরপর তাবারী নিজের রায় দেন। তাঁর ভাষায়, এগুলো বিভিন্ন নগরের কারীদের কাছে পরিচিত কিরাআত। তিনটি কিরাআতের অর্থই সঠিক, পাঠক যেটাই পড়ুন, ঠিক পড়েছেন। তাহলে দাঁড়াল এই: কুরতুবী জানান, আবু উবাইদ কুফার পাঠটি বেছে নিয়েছিলেন, আর তাবারী তিনটির কোনোটিকেই অন্যটির উপর প্রাধান্য দেন না। এখানে কোনোটিকেই বেছে নেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "From Food to Feeding",
          "bn": "খাবার থেকে খাওয়ানো"
        },
        "p": [
          {
            "en": "The verse's noun is ta'am, and five of the Arabic commentaries consulted for it put it'am, feeding, in its place: at-Tabari in explaining tahuddun, al-Qurtubi, al-Baghawi, as-Sa'di and the Muyassar. Ma'arif al-Qur'an's English has to feed the needy. In these glosses the phrase names an act done for a poor person, the feeding, rather than the food itself. As-Sa'di also widens the people meant: al-mahawij min al-masakin wal-fuqara, those in need among the poor and the destitute.",
            "bn": "আয়াতের বিশেষ্যটি তাআম। অথচ এ আয়াতের জন্য আনা আরবি তাফসীরগুলোর ৫টি তার জায়গায় বসায় ইতআম, মানে খাওয়ানো: তাহুদ্দূন পাঠ ব্যাখ্যায় তাবারী, তারপর কুরতুবী, বাগাভী, সা'দী আর মুয়াসসার। মাআরিফুল কুরআনের ইংরেজিতেও আছে অভাবীকে খাওয়ানোর কথা। এসব ব্যাখ্যায় কথাটা খাবারের নাম নয়, অভাবী মানুষের জন্য করা একটা কাজের নাম: খাওয়ানো। সা'দী কাদের কথা, সেটাও বিস্তৃত করেন: আল-মাহাউইজ মিনাল মাসাকীন ওয়াল ফুকারা, মানে মিসকীন আর ফকীরদের মধ্যে যারা অভাবগ্রস্ত।"
          },
          {
            "en": "Al-Qurtubi's first gloss draws the circle small and close. Those at fault do not command ahlihim, their own households, to feed a miskin who comes to them. The poor man is at the door, and the instruction that was never given would have been given at home. Ibn Kathir's Arabic draws it wider: they do not command al-ihsan, doing good, to the poor and the needy. His abridged English says the same, that they do not command that the poor and the needy be treated with kindness.",
            "bn": "কুরতুবীর প্রথম ব্যাখ্যা বৃত্তটা ছোট আর কাছের করে আঁকে। দোষীরা নিজেদের আহল, মানে ঘরের লোকদের হুকুম করে না, যে মিসকীন তাদের কাছে আসে তাকে খাওয়াতে। গরিব মানুষটি দাঁড়িয়ে আছে দরজায়, আর যে নির্দেশটা কখনো দেওয়া হয়নি, তা দেওয়ার কথা ছিল ঘরের ভেতরেই। ইবন কাসীরের আরবি পাঠ বৃত্তটা বড় করে: তারা গরিব আর মিসকীনদের প্রতি ইহসান, মানে সদাচরণের হুকুম করে না। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণেও একই কথা: গরিব-মিসকীনের সঙ্গে সদয় আচরণ করতে তারা হুকুম করে না।"
          },
          {
            "en": "These are differences of reach rather than contradictions, and they are worth keeping apart. Al-Qurtubi pictures a householder and a caller at the door. As-Sa'di pictures people who fail to prompt each other. Ibn Kathir widens the object from food to kindness. Each reading is set out here under its author's name. The commentators do not rank them against each other, and neither does this article.",
            "bn": "এগুলো পরস্পরবিরোধী কথা নয়, পরিধির পার্থক্য। তবু আলাদা করে রাখা দরকার। কুরতুবীর ছবিতে আছেন এক গৃহকর্তা আর দরজায় আসা এক অভাবী। সা'দীর ছবিতে এমন মানুষজন, যারা একে অপরকে তাগিদ দেয় না। ইবন কাসীর বিষয়টা খাবার থেকে সদাচরণ পর্যন্ত বাড়িয়ে নেন। প্রতিটি ব্যাখ্যা এখানে তার লেখকের নামেই রাখা হলো। তাফসীরকারেরা এগুলোর মধ্যে কোনটা আগে কোনটা পরে, সে ক্রম ঠিক করেন না, এই লেখাও করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Urging Dries Up",
          "bn": "তাগিদ কেন শুকিয়ে যায়"
        },
        "p": [
          {
            "en": "As-Sa'di is the only commentator here who names a cause. Some of you do not urge others to feed the needy, he says, and that is because of shuhh, tight-fistedness, over this world, and the love of it, intense and settled firmly in the hearts. Offered as this article's reading of his gloss: the silence is not mere forgetfulness. A person who holds tightly to what he has finds it hard to tell another to loosen his grip. The love of wealth has a verse of its own at 89:20, and is left to it.",
            "bn": "এখানে কারণের কথা বলেন কেবল সা'দী। তাঁর ভাষায়, তোমাদের কেউ অন্যকে অভাবীকে খাওয়াতে তাগিদ দেয় না, কারণ দুনিয়ার ব্যাপারে আছে শুহ্হ, মানে কৃপণতা, আর দুনিয়ার প্রতি এমন তীব্র ভালোবাসা, যা অন্তরে শক্ত করে গেড়ে বসেছে। এই লেখার নিজের পাঠ হিসেবে বলা যায়: চুপ থাকাটা নিছক ভুলে যাওয়া নয়। যে নিজের জিনিস শক্ত মুঠিতে ধরে রাখে, অন্যকে মুঠি আলগা করতে বলা তার পক্ষে কঠিন। সম্পদের প্রতি ভালোবাসার জন্য আলাদা আয়াত আছে, ৮৯:২০। সে আলোচনা সেখানেই থাকুক।"
          },
          {
            "en": "Ma'arif al-Qur'an calls this the second evil trait of the unbelievers in the passage, and draws a rule from the way the verse condemns it: the style, it says, indicates that it is an obligation of the affluent to spend on the poor and indigent from their own wealth. Then it turns to those without means. Obviously, it says, the poor are unable to spend owing to lack of means, but they should at least encourage others to feed the needy. On this reading the verb of the verse leaves nobody outside it.",
            "bn": "মাআরিফুল কুরআন একে এ অংশে বর্ণিত অবিশ্বাসীদের দ্বিতীয় মন্দ স্বভাব বলে। আর আয়াত যে ভঙ্গিতে এর নিন্দা করে, তা থেকে একটা বিধান টানে। তার মতে এই ভঙ্গি বলে দেয়, নিজের সম্পদ থেকে গরিব-অভাবীদের জন্য খরচ করা সচ্ছলদের উপর দায়িত্ব। এরপর সে ফেরে যাদের সামর্থ্য নেই তাদের দিকে। স্পষ্টতই গরিবেরা অর্থের অভাবে খরচ করতে পারে না, সে বলে, কিন্তু অন্তত অন্যদের অভাবীকে খাওয়াতে উৎসাহ দেওয়া তাদের উচিত। এই পাঠে আয়াতের ক্রিয়াটি কাউকে বাইরে রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Beside a Line in al-Ma'un",
          "bn": "সূরা মাউনের এক লাইনের পাশে"
        },
        "p": [
          {
            "en": "Ibn Kathir, commenting on 107:3, sets this verse beside it. There the surah describes the man who denies the Recompense, and 107:3 reads wa la yahuddu 'ala ta'am al-miskin, and he does not urge the feeding of the poor. Ibn Kathir cites 89:17 and 89:18 as its parallel and then defines the miskin there: the poor man who has nothing to sustain him and suffice his needs. The module's entry on 107:1 takes up that surah.",
            "bn": "ইবন কাসীর ১০৭:৩ আয়াতের ব্যাখ্যায় এ আয়াতটিকে তার পাশে রাখেন। সেখানে সূরাটি বলছে প্রতিদান দিবস অস্বীকারকারী লোকের কথা। ১০৭:৩ আয়াতে আছে ওয়া লা ইয়াহুদ্দু আলা তাআমিল মিসকীন: আর সে মিসকীনকে খাওয়াতে তাগিদ দেয় না। ইবন কাসীর এর সমান্তরাল হিসেবে ৮৯:১৭ ও ৮৯:১৮ উদ্ধৃত করেন, তারপর সেখানে মিসকীনের সংজ্ঞা দেন: সেই গরিব, যার নিজেকে টিকিয়ে রাখার মতো, প্রয়োজন মেটানোর মতো কিছুই নেই। সূরাটি নিয়ে আলোচনা আছে এই মডিউলের ১০৭:১ অংশে।"
          },
          {
            "en": "Both verses have 5 Arabic words, and four of them are the same. The difference is the verb. In 107:3 it is yahuddu, the simple first form, singular and in the third person, said about one man. Here it is tahaddun, the sixth form, plural and addressed directly. Read side by side, as this article's own observation, the first describes a man who does not urge; the second describes a group in which nobody urges anybody. The failure in 89:18 belongs to the circle, and not only to each person in it.",
            "bn": "দুই আয়াতেই আরবি শব্দ ৫টি, তার চারটিই হুবহু এক। পার্থক্য শুধু ক্রিয়ায়। ১০৭:৩ আয়াতে তা ইয়াহুদ্দু, প্রথম রূপের সরল ক্রিয়া, একবচন, একজন মানুষের সম্পর্কে বলা। এখানে তাহাদ্দূন, ষষ্ঠ রূপ, বহুবচন, সরাসরি সম্বোধন। পাশাপাশি রেখে পড়লে, এই লেখার নিজের পর্যবেক্ষণে, প্রথমটি এমন এক লোকের ছবি, যে তাগিদ দেয় না। দ্বিতীয়টি এমন এক দলের ছবি, যেখানে কেউ কাউকে তাগিদ দেয় না। ৮৯:১৮ আয়াতের ব্যর্থতা তাই গোটা বৃত্তের, শুধু তার প্রত্যেক সদস্যের আলাদা আলাদা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Charge Stops",
          "bn": "অভিযোগের সীমানা"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse charges the people the passage addresses, those who read their fortune as their worth; Ma'arif al-Qur'an names them as the unbelievers, and the Muyassar speaks to them directly as you. It speaks only of what it names, and it licenses nothing against any living person or community. It names no group a reader may point at today, and it gives nobody a way of judging whether a neighbour's giving is enough or whether a family's wealth is clean.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতের অভিযোগ সেই লোকদের বিরুদ্ধে, যাদের এ অংশ সম্বোধন করছে, যারা নিজের ভাগ্যকেই নিজের মর্যাদা ভেবেছিল। মাআরিফুল কুরআন তাদের অবিশ্বাসী বলে চিহ্নিত করে, আর মুয়াসসার তাদের সরাসরি তোমরা বলে সম্বোধন করে। আয়াতটি ততটুকুই বর্ণনা করে, যতটুকু পাঠে আছে। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। আজকের কোনো দলকে আঙুল তুলে দেখানোর মতো নামও এতে নেই। প্রতিবেশীর দান যথেষ্ট কি না, কোনো পরিবারের সম্পদ হালাল কি না, সে রায় দেওয়ার উপায়ও কাউকে দেয় না।"
          },
          {
            "en": "No tafsir consulted for this verse attaches a hadith to it. The single narration in Ibn Kathir's grouped passage, on the guardian of the orphan, belongs to 89:17, so this article quotes none. The commentators' own correction also cuts against using the verse as a verdict on others: wealth, on Ibn Kathir's account, is given to those Allah loves and to those He does not, so it proves nothing about anyone's standing. The only person this article turns the verse towards is its reader.",
            "bn": "এ আয়াতের জন্য আনা কোনো তাফসীর এর সঙ্গে কোনো হাদিস যুক্ত করেনি। ইবন কাসীরের একসঙ্গে ব্যাখ্যা করা অংশে একটিমাত্র বর্ণনা আছে, ইয়াতীমের অভিভাবক নিয়ে, তবে সেটি ৮৯:১৭ আয়াতের। তাই এই লেখা কোনো হাদিস উদ্ধৃত করছে না। অন্যের উপর রায় দিতে আয়াতটি ব্যবহারের বিরুদ্ধে তাফসীরকারদের নিজেদের সংশোধনীও দাঁড়ায়। ইবন কাসীরের বর্ণনায়, আল্লাহ যাদের ভালোবাসেন তাদেরও সম্পদ দেন, যাদের ভালোবাসেন না তাদেরও। তাই সম্পদ কারও মর্যাদার প্রমাণ নয়। এই লেখা আয়াতটিকে ফেরায় কেবল পাঠকের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Invitation, Plainly Labelled",
          "bn": "এক আহ্বান, নিজের পাঠ বলে চিহ্নিত"
        },
        "p": [
          {
            "en": "What follows is this article's own reading, not a ruling the commentators give. The verse faults a silence. Al-Qurtubi's householder fails to give an instruction at home; as-Sa'di's people fail to prompt each other; and Ma'arif al-Qur'an asks even the poor, who cannot spend, to encourage others. In each, the weight falls on what was not said. That makes the verse a question every reader can put to himself without accusing anybody else: in my house and among my friends, is feeding the hungry ever spoken of, and by whom?",
            "bn": "এরপর যা বলা হচ্ছে, তা এই লেখার নিজের পাঠ, তাফসীরকারদের দেওয়া কোনো বিধান নয়। আয়াতটি এক নীরবতাকে দোষ দেয়। কুরতুবীর গৃহকর্তা ঘরে নির্দেশটা দেন না। সা'দীর মানুষজন একে অপরকে তাগিদ দেয় না। আর মাআরিফুল কুরআন এমনকি খরচ করতে অক্ষম গরিবকেও বলে অন্যদের উৎসাহ দিতে। সবখানেই ভার পড়ছে না-বলা কথার উপর। ফলে আয়াতটি এমন এক প্রশ্ন হয়ে ওঠে, যা যেকোনো পাঠক অন্য কাউকে দোষ না দিয়ে নিজেকেই করতে পারেন: আমার ঘরে, বন্ধুদের মাঝে ক্ষুধার্তকে খাওয়ানোর কথা কি কখনো ওঠে? উঠলে কে তোলে?"
          },
          {
            "en": "The urging is open to every reader. Some readers can give, and can ask others to give with them. Some cannot give much, and can still name the need to someone who can, which is what Ma'arif al-Qur'an asks of them. The passage moves on from here to inheritance and the love of wealth in 89:19 and 89:20. This verse's own share is smaller and nearer: the sentence that nobody in the room said.",
            "bn": "তাগিদ দেওয়ার সুযোগ প্রত্যেক পাঠকের আছে। কেউ নিজে দিতে পারেন, অন্যদেরও সঙ্গে নিয়ে দিতে বলতে পারেন। কেউ বেশি দিতে পারেন না, তবু যার সামর্থ্য আছে, তাকে প্রয়োজনের কথাটা জানাতে পারেন। মাআরিফুল কুরআন তাদের কাছে ঠিক এটুকুই চায়। এখান থেকে অংশটি এগিয়ে যায় উত্তরাধিকার আর সম্পদপ্রীতির দিকে, ৮৯:১৯ ও ৮৯:২০ আয়াতে। এ আয়াতের নিজের ভাগ ছোট, আর কাছের: ঘরের কেউ যে কথাটা মুখে আনেনি।"
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
            "bn": "ওয়া তুহিব্বূনাল মালা হুব্বান জাম্মা: আর তোমরা সম্পদকে ভালোবাস 'জাম্ম' ভালোবাসায়। আরবিতে আয়াতটি মাত্র চারটি শব্দ। ক্রিয়াপদ আর কর্মের পরের বিশেষ্যটি একই ধাতু থেকে এসেছে: ভালোবাস, ভালোবাসায়। ছোট্ট এক অভিযোগের ধারা এ আয়াতে এসে থামে। ঠিক আগে ৮৯:১৫ ও ৮৯:১৬ আয়াত মানুষের দাবিটা তুলে ধরে। রব তাকে দান করলে সে বলে, আমার রব আমাকে সম্মান দিয়েছেন। রিযক সংকুচিত হলে বলে, আমার রব আমাকে অপমান করেছেন। তারপর ৮৯:১৭ আয়াত শুরু হয় 'কাল্লা' দিয়ে, অর্থাৎ না, আর অভিযোগগুলো আসতে থাকে।"
          },
          {
            "en": "The charges run through three verses: you do not honour the orphan, you do not urge one another to feed the poor, and you devour inheritance with a greedy devouring. Those verses, 89:17 to 89:19, have their own treatment and are named here only as the setting. The Muyassar reads 89:18 to 89:20 as one passage and first answers the man's assumption: honour lies in obedience to Allah, and humiliation in disobedience to Him. Where the earlier charges name things done or left undone, this last one names a love.",
            "bn": "অভিযোগগুলো ছড়িয়ে আছে তিনটি আয়াতে: তোমরা ইয়াতীমকে সম্মান কর না, মিসকিনকে খাওয়াতে পরস্পরকে উৎসাহ দাও না, আর মিরাসের সম্পদ লোভে গোগ্রাসে খাও। ৮৯:১৭ থেকে ৮৯:১৯ পর্যন্ত এই আয়াতগুলোর আলোচনা আলাদা, এখানে শুধু প্রেক্ষাপট হিসেবে নাম আসছে। মুয়াসসার ৮৯:১৮ থেকে ৮৯:২০ পর্যন্ত একটি অংশ হিসেবে পড়ে, আর শুরুতেই মানুষের ধারণার জবাব দেয়: সম্মান আল্লাহর আনুগত্যে, অপমান তাঁর নাফরমানিতে। আগের অভিযোগগুলো বলে কী করা হয়েছে আর কী করা হয়নি। শেষেরটি বলে এক ভালোবাসার কথা।"
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
            "bn": "তাবারী নিজের ভাষায় আয়াতটির ব্যাখ্যা দেন: হে মানুষ, তোমরা সম্পদ জমানো আর তা নিজের করে রাখাকে ভালোবাস, অনেক বেশি ও তীব্র ভালোবাসায়। 'জাম্ম' শব্দটি তিনি নেন আরবদের এক কথা থেকে: কাদ জাম্মাল মাউ ফিল হাওদ, অর্থাৎ হাউজে পানি জমে উঠেছে। সাক্ষী হিসেবে তিনি যুহাইর ইবন আবী সুলমার একটি পঙক্তি আনেন। সেখানে একদল লোক এমন পানির ধারে নামে, যার জমে থাকা জলাশয়গুলো নীল। ছাপা সংস্করণের এক টীকা বলে, 'জিমাম' মানে যা জমে জমে বেড়ে উঠেছে। আর নীল রং পানির স্বচ্ছতার কারণে, কেননা তাদের আগে কেউ সে পানিতে নামেনি, কেউ তা ঘোলা করেনি।"
          },
          {
            "en": "Al-Qurtubi gives the same picture in more detail. Jamm is much; one says jamma al-shay'u yajimmu jumuman, and of water, that it jamma in the basin when it collected and grew much. A related noun names the place where water gathers. Al-jamum is a well with plenty of water, and jumum, read with the vowel u, is said of water that grows much and collects in a well after what was in it has been drawn out. Al-Baghawi keeps to the short form: one says jamma al-ma'u fi al-hawd when the water grew much and collected.",
            "bn": "কুরতুবী একই ছবি আরও খুঁটিয়ে আঁকেন। জাম্ম মানে অনেক। বলা হয় জাম্মাশ শাইউ ইয়াজিম্মু জুমূমান, আর পানির বেলায় বলা হয়, হাউজে পানি 'জাম্মা' করেছে, যখন তা জমে বেড়ে ওঠে। এই ধাতুর আরেকটি শব্দ বোঝায় সেই জায়গা, যেখানে পানি এসে জমে। 'জামূম' হলো প্রচুর পানির কূপ। আর পেশ দিয়ে পড়া 'জুমূম' বলা হয় তখন, যখন কূপ থেকে পানি তুলে নেওয়ার পর আবার তাতে পানি বেড়ে জমে ওঠে। বাগাভী ছোট করে বলেন: হাউজে পানি বেড়ে জমে উঠলে বলা হয় জাম্মাল মাউ ফিল হাওদ।"
          },
          {
            "en": "Al-Qurtubi also quotes a line of poetry, ascribed in his editor's brackets to Abu Khirash al-Hudhali: in taghfir allahumma taghfir jamma, wa ayyu 'abdin laka la alamma. If You forgive, O Allah, You forgive abundantly, and what servant of Yours has not fallen into some slight fault? There the same word praises the abundance of Allah's forgiveness. This article draws one observation from that: the word jamm carries no blame of itself. Any blame in the verse comes from what the abundance attaches to, a point Ma'arif al-Qur'an makes outright, as a later section shows.",
            "bn": "কুরতুবী একটি কবিতার পঙক্তিও উদ্ধৃত করেন। সম্পাদকের বন্ধনীতে তা আবু খিরাশ হুযালীর বলে উল্লেখ আছে: ইন তাগফির আল্লাহুম্মা তাগফির জাম্মা, ওয়া আইয়ু আবদিন লাকা লা আলাম্মা। হে আল্লাহ, আপনি ক্ষমা করলে অঢেল ক্ষমা করেন, আর আপনার এমন কোন বান্দা আছে, যে ছোটখাটো ভুলে জড়ায়নি? সেখানে এই একই শব্দ আল্লাহর ক্ষমার প্রাচুর্যের প্রশংসা করছে। এ লেখা সেখান থেকে একটি কথা টানে: 'জাম্ম' শব্দে নিজে থেকে কোনো নিন্দা নেই। আয়াতে যে নিন্দা, তা আসে প্রাচুর্যটা কিসের সঙ্গে জুড়েছে তা থেকে। মাআরিফুল কুরআন কথাটা সরাসরি বলে, পরের এক অংশে তা আসছে।"
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
            "bn": "এরপর তাবারী সনদসহ প্রথম যুগের ব্যাখ্যাগুলো তুলে ধরেন। সেগুলো দুটি ধারায় ভাগ হয়ে যায়। একটি ধারা তীব্রতার। একটি সনদে ইবন আব্বাস (রাঃ) বলেন, শাদীদ, অর্থাৎ তীব্র। কাতাদা বলেন, তীব্র ভালোবাসা। ইবন যাইদ বলেন, আল-জাম্ম মানে আশ-শাদীদ। অন্য ধারাটি পরিমাণের। মুজাহিদ বলেন, আল-জাম্ম মানে আল-কাসীর, অনেক। আর আরেক সনদে ইবন আব্বাস (রাঃ) এবং দাহহাক দুজনেই বলেন, তারা সম্পদের প্রাচুর্য ভালোবাসে। এতে 'অনেক' কথাটা ভালোবাসা থেকে সরে গিয়ে বসে সম্পদের গায়ে। তাবারীর নিজের ব্যাখ্যা দুটোকে একসঙ্গে ধরে রাখে: কাসীরান শাদীদান। তিনি বলেন, তাফসীরবিদেরাও এমনই বলেছেন।"
          },
          {
            "en": "The later commentators carry the same pair. Al-Qurtubi and al-Baghawi both say kathir, much, and as-Sa'di says kathiran shadidan, much and intense, as at-Tabari did. Ibn Kathir's Arabic, as consulted, says kathir and then records that some added fahish, gross or immoderate. The abridged English edition renders that clause differently: This increases some of them in their wickedness. The Muyassar says mufrit, excessive, and Ma'arif al-Qur'an says the word jamm means excessive. This article sets the glosses side by side and does not choose among them.",
            "bn": "পরের যুগের তাফসীরকারেরাও এই জোড়াটাই বহন করেন। কুরতুবী ও বাগাভী দুজনেই বলেন কাসীর, অনেক। সা'দী তাবারীর মতোই বলেন কাসীরান শাদীদান, অনেক ও তীব্র। ইবন কাসীরের আরবি পাঠে আছে কাসীর, তারপর লেখা: কেউ কেউ যোগ করেছেন 'ফাহিশ', অর্থাৎ বেহিসাব, মাত্রাছাড়া। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে বাক্যটি এসেছে অন্যভাবে: এটি তাদের কারও কারও দুষ্কর্ম বাড়িয়ে দেয়। মুয়াসসার বলে মুফরিত, সীমাছাড়া। মাআরিফুল কুরআন বলে, জাম্ম মানে অতিরিক্ত। এ লেখা ব্যাখ্যাগুলো পাশাপাশি রাখে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Love Fastens On",
          "bn": "ভালোবাসা আঁকড়ে ধরে কী"
        },
        "p": [
          {
            "en": "The commentators also differ slightly on what exactly is loved. The verse says al-mal, wealth. At-Tabari reads it as the gathering of wealth and its acquisition. Al-Baghawi says the same and adds a second verb: you love gathering wealth and are infatuated with it, tula'una bihi. Ibn 'Abbas in one report, and ad-Dahhak, speak of loving the abundance of wealth. So the object is read three ways in the sources: wealth itself, the act of amassing it, and the sheer amount of it. Here too the readings stand together, and none is set above the others.",
            "bn": "ভালোবাসার বিষয়টা ঠিক কী, তা নিয়েও তাফসীরকারদের কথায় সামান্য তফাত আছে। আয়াতে আছে 'আল-মাল', সম্পদ। তাবারী একে পড়েন সম্পদ জমানো আর নিজের করে রাখা হিসেবে। বাগাভীও তাই বলেন, সঙ্গে জোড়েন আরেকটি ক্রিয়া: তোমরা সম্পদ জমানো ভালোবাস আর তাতে মোহগ্রস্ত হয়ে থাক, তূলাঊনা বিহী। একটি বর্ণনায় ইবন আব্বাস (রাঃ), আর দাহহাকও, সম্পদের প্রাচুর্য ভালোবাসার কথা বলেন। ফলে উৎসগুলোতে বিষয়টা তিনটি দিক থেকে পড়া হয়েছে: সম্পদ নিজে, তা জমানোর কাজ, আর তার নিছক পরিমাণ। এখানেও পাঠগুলো পাশাপাশি থাকে, কোনোটিকে অন্যটির উপরে তোলা হয় না।"
          },
          {
            "en": "Al-Qurtubi adds a short phrase that widens the circle: kathiran, halalahu wa haramahu, much, its lawful and its unlawful. In his gloss the love takes in both kinds of wealth. The neighbouring verse, 89:19, speaks of devouring inheritance, and the abridged English Ibn Kathir says on that verse, however they can get it, whether lawful or forbidden. That clause belongs to 89:19 and is mentioned only to show the setting. On this verse, the lawful-and-unlawful phrase is al-Qurtubi's, and none of the other commentaries consulted for it repeats the point.",
            "bn": "কুরতুবী ছোট্ট একটি কথা যোগ করে পরিধিটা বাড়িয়ে দেন: কাসীরান, হালালাহু ওয়া হারামাহু, অর্থাৎ অনেক, তার হালালও, তার হারামও। তাঁর ব্যাখ্যায় ভালোবাসাটা দুই ধরনের সম্পদকেই জড়িয়ে নেয়। পাশের আয়াত ৮৯:১৯ মিরাস গিলে খাওয়ার কথা বলে। সেই আয়াতের আলোচনায় ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ বলে: যেভাবে পারে সেভাবেই, হালাল হোক বা হারাম। কথাটা ৮৯:১৯ আয়াতের, এখানে শুধু প্রেক্ষাপট দেখাতে আনা হলো। এই আয়াতের বেলায় হালাল-হারামের কথাটি কুরতুবীর। এ আয়াতের জন্য সংগৃহীত অন্য কোনো তাফসীরে তা আর আসেনি।"
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
            "bn": "আয়াতের সম্বোধন বহুবচনে, 'তোমরা'। এই 'তোমরা' কতটা বিস্তৃত, তাফসীরকারেরা তা ভিন্নভাবে দেখেন। তাবারীর ব্যাখ্যায় সম্বোধন 'আইয়ুহান নাস', হে মানুষ। তাতে অভিযোগটা সাধারণভাবে মানুষের প্রতি। মাআরিফুল কুরআন আয়াতটিকে বলে কাফিরদের চতুর্থ মন্দ স্বভাব, আর বলে, সম্পদের প্রতি তাদের ভালোবাসা কখনো মেটে না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৮৯:১৭ থেকে শুরু হওয়া অংশের শিরোনাম দেয়: সম্পদ নিয়ে বান্দা যে মন্দ কাজ করে। মুয়াসসার আগের আয়াতগুলোর মানুষটির কথা থেকে সোজা 'তোমরা'-তে চলে যায়। মতভেদটা এখানে মতভেদ হিসেবেই রইল।"
          },
          {
            "en": "The shape of the passage itself is plain from the text. In 89:15 and 89:16 the subject is al-insan, man, spoken of in the third person: he says, my Lord has honoured me. From 89:17 the verbs turn to the second person plural, you do not honour, and this verse keeps that address. The commentaries consulted here do not explain the turn, and this article does not supply a reason of its own. It notes only that a rebuke which was about someone becomes, in these verses, a rebuke spoken to someone's face.",
            "bn": "অংশটির গড়ন পাঠ থেকেই স্পষ্ট। ৮৯:১৫ ও ৮৯:১৬ আয়াতে কথা হচ্ছে মানুষকে নিয়ে, তার সম্পর্কে: সে বলে, আমার রব আমাকে সম্মান দিয়েছেন। ৮৯:১৭ থেকে ক্রিয়াগুলো সরাসরি সামনের লোকদের দিকে ঘুরে যায়: তোমরা সম্মান কর না। এ আয়াতও সেই সম্বোধন ধরে রাখে। সংগৃহীত তাফসীরগুলো এই মোড় ঘোরার কারণ ব্যাখ্যা করেনি, এ লেখাও নিজে থেকে কোনো কারণ বসায় না। শুধু এটুকু লক্ষ করে যে, যে তিরস্কার ছিল কারও সম্পর্কে, এই আয়াতগুলোতে তা উচ্চারিত হয় কারও মুখের ওপর।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fault Lies in Measure",
          "bn": "দোষ মাপে, বস্তুতে নয়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws the line most clearly. The word excessive, it says, indicates that love of wealth in itself, in a sober sense, is a natural instinct of man, and that has not been condemned here; what is denounced is the excessive or insatiable love of wealth. The Muyassar's mufrit points the same way, since it names a love that has passed its bound. Ibn Kathir, in the abridged English passage he groups with this verse, says that Allah gives wealth to those He loves and to those He does not love, and withholds it from both alike.",
            "bn": "রেখাটা সবচেয়ে স্পষ্ট করে টানে মাআরিফুল কুরআন। তার কথায়, 'অতিরিক্ত' শব্দটিই বুঝিয়ে দেয় যে সংযত অর্থে সম্পদের প্রতি ভালোবাসা মানুষের স্বভাবজাত, এখানে তার নিন্দা করা হয়নি। নিন্দা হয়েছে সম্পদের প্রতি মাত্রাছাড়া, কখনো না মেটা ভালোবাসার। মুয়াসসারের 'মুফরিত' শব্দও একই দিকে ইশারা করে, কারণ তা এমন ভালোবাসার নাম, যা সীমা পেরিয়ে গেছে। ইবন কাসীর এ আয়াতের সঙ্গে জুড়ে রাখা সংক্ষিপ্ত ইংরেজি অংশে বলেন, আল্লাহ যাদের ভালোবাসেন তাদেরও সম্পদ দেন, যাদের ভালোবাসেন না তাদেরও দেন। আবার দুই দলের কাছ থেকেই তা আটকেও রাখেন।"
          },
          {
            "en": "This verse speaks only of what it names: a love of wealth that the commentators call much, intense or excessive, set in a passage about people who left the orphan and the poor without their due. It licenses nothing against any living person or community, and it passes no sentence on wealth or on the people who have it. Nothing here names a group alive today, and no reader is entitled to fit the verse onto a neighbour, a class or a nation. Ibn Kathir's own conclusion keeps the matter personal: the wealthy should thank Allah, and the poor should be patient.",
            "bn": "আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: সম্পদের এমন ভালোবাসা, যাকে তাফসীরকারেরা বলেছেন অনেক, তীব্র বা মাত্রাছাড়া। আর তা এসেছে এমন এক অংশে, যেখানে কিছু মানুষ ইয়াতীম ও মিসকিনকে তাদের প্রাপ্য দেয়নি। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে আয়াতটি কোনো কিছুর অনুমতি দেয় না। সম্পদ বা সম্পদশালীদের বিরুদ্ধেও কোনো রায় দেয় না। আজকের কোনো দলের নাম এখানে নেই, আর প্রতিবেশী, কোনো শ্রেণি বা কোনো জাতির গায়ে আয়াতটি সেঁটে দেওয়ার অধিকার কোনো পাঠকের নেই। ইবন কাসীরের নিজের সিদ্ধান্তও কথাটাকে ব্যক্তির ভেতরেই রাখে: ধনী আল্লাহর শোকর করবে, গরিব সবর করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di's Companion Verses",
          "bn": "সা'দীর জোড়া আয়াত"
        },
        "p": [
          {
            "en": "As-Sa'di glosses jamm as much and intense and then adds that this is like His words: rather you prefer the life of this world, while the Hereafter is better and more lasting, at 87:16 and 87:17; and no, rather you love the immediate and leave the Hereafter, at 75:20 and 75:21. The second pair uses the same verb, tuhibbuna, you love, with a different object, al-'ajilah, the immediate. Both pairs have their own articles in this module, on 87:14 to 87:17 and on 75:20, and they are not retold here.",
            "bn": "সা'দী 'জাম্ম'-এর অর্থ করেন অনেক ও তীব্র, তারপর বলেন, এটি আল্লাহর এই বাণীর মতো: বরং তোমরা দুনিয়ার জীবনকে বেছে নাও, অথচ আখিরাত উত্তম ও স্থায়ী (৮৭:১৬ ও ৮৭:১৭)। আরও: কক্ষনো না, বরং তোমরা নগদকে ভালোবাস আর আখিরাতকে ছেড়ে দাও (৭৫:২০ ও ৭৫:২১)। দ্বিতীয় জোড়ায় একই ক্রিয়া, তুহিব্বূনা, তোমরা ভালোবাস। শুধু ভালোবাসার বিষয়টা আলাদা: আল-আজিলা, যা নগদ, হাতের কাছে। দুটি জোড়া নিয়েই এ বিভাগে আলাদা লেখা আছে, ৮৭:১৪ থেকে ৮৭:১৭ এবং ৭৫:২০ আয়াতের ওপর। সেগুলো এখানে আবার বলা হলো না।"
          },
          {
            "en": "No commentary consulted here on this verse attaches a hadith to it. Ibn Kathir's grouped passage does bring a narration from Abu Dawud, but it concerns the guardian of the orphan in 89:17, so it is left to that verse. What comes after is also left for later. Verse 89:21 opens with kalla once more, and Ma'arif al-Qur'an says that after describing these evil traits the passage returns to the main theme of the surah, the punishment of the Hereafter, beginning with the end of the world. The scenes that follow belong to their own verses.",
            "bn": "এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদিস যুক্ত করেনি। ইবন কাসীরের একসঙ্গে রাখা অংশে আবু দাউদের একটি বর্ণনা আছে বটে, তবে তা ৮৯:১৭ আয়াতের ইয়াতীমের অভিভাবক নিয়ে, তাই সেটি সেই আয়াতের জন্য রইল। পরে যা আসছে, তাও পরের জন্য রাখা হলো। ৮৯:২১ আয়াত আবার শুরু হয় 'কাল্লা' দিয়ে। মাআরিফুল কুরআন বলে, এই মন্দ স্বভাবগুলোর বর্ণনার পর অংশটি ফিরে যায় সূরার মূল বিষয়ে, আখিরাতের শাস্তিতে, আর শুরু করে দুনিয়ার সমাপ্তি দিয়ে। পরের দৃশ্যগুলো যার যার আয়াতের।"
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
            "bn": "এখান থেকে যা আসছে, তা এ লেখার নিজের পাঠ, কোনো তাফসীরকারের দাবি নয়। 'জাম্ম'-এর জন্য তাফসীরকারেরা যে ছবি দেন, তা হাউজে জমে ওঠা পানির, আর এমন কূপের, যা সেঁচে নেওয়ার পর অল্পক্ষণেই আবার ভরে যায়। সেই ছবির পাশে রাখলে আয়াতটি আয়নার মতো সামনে ধরা যায়। আমার ভেতরে কি এমন কিছু আছে, যা শুধু জমায়, বেরোনোর কোনো পথ নেই, ফলে যা আসে তার প্রায় সবই থেকে যায়? আর দানের পথে কিছু বেরিয়ে গেলে কি তা আবার পাওয়ার ইচ্ছা সঙ্গে সঙ্গে উঠে এসে খালি জায়গাটা ভরে দেয়, যেমন ভরা কূপের পানি আবার আগের উচ্চতায় উঠে আসে?"
          },
          {
            "en": "The same reading turns back to 89:15 and 89:16, where a man measured his honour by what he was given. Taking the Muyassar's line that honour lies in obedience to Allah, the question for the reader is not how much sits in the basin, but what the love of it has kept from reaching the orphan, the poor and the heir nearby. Ma'arif al-Qur'an leaves room for an ordinary, sober love of wealth, and condemns only its excess. The reader can ask, honestly and in private, on which side of that line the heart stands today.",
            "bn": "এই পাঠ আবার ফিরে যায় ৮৯:১৫ ও ৮৯:১৬ আয়াতে, যেখানে এক মানুষ নিজের সম্মান মেপেছিল কী পেয়েছে তা দিয়ে। মুয়াসসারের কথা ধরলে সম্মান আল্লাহর আনুগত্যে। তাহলে পাঠকের প্রশ্ন এই নয় যে হাউজে কতটা জমেছে। প্রশ্ন হলো, সেই ভালোবাসা কাছের ইয়াতীম, মিসকিন আর উত্তরাধিকারীর কাছে কী পৌঁছাতে দেয়নি। মাআরিফুল কুরআন সম্পদের প্রতি সাধারণ, সংযত ভালোবাসার জায়গা রেখেছে, নিন্দা করেছে শুধু তার বাড়াবাড়ির। আপনি নিজেকে সৎভাবে, নিভৃতে জিজ্ঞেস করতে পারেন, আজ আপনার মন সেই রেখার কোন পাশে দাঁড়িয়ে।"
          }
        ]
      }
    ]
  },
  "89:27-30": {
    "sections": [
      {
        "h": {
          "en": "After the Man Who Wished",
          "bn": "আফসোসকারীর পরেই এই ডাক"
        },
        "p": [
          {
            "en": "Ya ayyatuha an-nafsu al-mutma'innah, irji'i ila rabbiki radiyatan mardiyyah, fa-dkhuli fi 'ibadi, wa-dkhuli jannati: O soul at rest, return to your Lord, well-pleased and well-pleasing; enter among My servants, and enter My Garden. The four verses close al-Fajr straight after 89:23 to 89:26, where Hell is brought near, man remembers too late and wishes he had sent ahead for his life, and none punishes or binds as Allah does. Ibn Kathir's English abridgement says that part concerns the criminals and wrongdoers.",
            "bn": "ইয়া আইয়্যাতুহান নাফসুল মুতমাইন্নাহ, ইরজিঈ ইলা রাব্বিকি রাদিয়াতাম মারদিয়্যাহ, ফাদখুলী ফী ইবাদী, ওয়াদখুলী জান্নাতী: হে প্রশান্ত আত্মা, তোমার রবের দিকে ফিরে এসো সন্তুষ্ট হয়ে, সন্তোষভাজন হয়ে; আমার বান্দাদের মধ্যে শামিল হও, আর আমার জান্নাতে প্রবেশ করো। চারটি আয়াতে সূরা ফজর শেষ হয়। ঠিক আগে ৮৯:২৩ থেকে ৮৯:২৬ আয়াতের দৃশ্য: জাহান্নামকে কাছে আনা হয়েছে, মানুষ বড় দেরিতে উপলব্ধি করছে, আফসোস করছে, হায়, নিজের জীবনের জন্য যদি কিছু আগে পাঠাতাম! আর সেদিন আল্লাহর মতো শাস্তি কেউ দেবে না, তাঁর মতো বাঁধবেও না। ইবন কাসীরের ইংরেজি সংক্ষেপ বলে, এ অংশ অপরাধী ও জালিমদের নিয়ে।"
          },
          {
            "en": "Al-Qurtubi names the turn: having described the one whose concern was this world, who suspected Allah both in enriching him and in making him poor, the surah now describes the one whose soul rests in Allah, submits to His command and relies on Him. As-Sa'di frames it alike. Verses 89:23 to 89:26 describe what the text describes and license nothing against any living person or community. The surah's lines on 'Ad (89:6 and 89:7), on urging the poor's feeding (89:18) and on loving wealth (89:20) have pages of their own.",
            "bn": "মোড়টা কুরতুবী চিনিয়ে দেন। দুনিয়াই যার একমাত্র চিন্তা, যে আল্লাহ সচ্ছলতা দিলেও তাঁকে সন্দেহ করে, অভাব দিলেও, তার কথা বলার পর সূরা এবার বলছে সেই মানুষের কথা, যার মন আল্লাহতে স্থির হয়েছে, যে তাঁর হুকুম মেনে নিয়েছে, তাঁর উপর ভরসা রেখেছে। সা'দীও কথাটা এভাবেই সাজান। ৮৯:২৩ থেকে ৮৯:২৬ আয়াত কেবল সেটুকুই বর্ণনা করে যা পাঠে আছে। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এ আয়াতগুলো দেয় না। আদ জাতি (৮৯:৬ ও ৮৯:৭), গরিবকে খাওয়াতে উৎসাহ দেওয়া (৮৯:১৮) আর সম্পদের প্রতি ভালোবাসা (৮৯:২০) নিয়ে এ সূরার আয়াতগুলোর আলাদা পাতা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Settled on a Promise",
          "bn": "প্রতিশ্রুতিতে স্থির মন"
        },
        "p": [
          {
            "en": "At-Tabari opens by saying the verse reports what the angels say to Allah's friends on the Day of Resurrection. He defines al-mutma'innah as the soul that came to rest in Allah's promise of honour in the Hereafter, given to the people of faith in this world, and so believed it. Those he lists near that reading: Ibn 'Abbas, the believing soul; Qatadah, the believer whose soul rested in what Allah promised; Qatadah with al-Hasan, at rest in what Allah said and believing it.",
            "bn": "তাবারী শুরুতেই বলেন, আয়াতটি কিয়ামতের দিন আল্লাহর বন্ধুদের প্রতি ফেরেশতাদের কথার খবর দিচ্ছে। তাঁর ব্যাখ্যায় মুতমাইন্নাহ সেই আত্মা, যে আল্লাহর প্রতিশ্রুতিতে নিশ্চিন্ত হয়েছে। দুনিয়াতেই আল্লাহ ঈমানদারদের কথা দিয়েছিলেন আখিরাতে সম্মানের, আর এই আত্মা সে কথা সত্য বলে মেনেছে। এর কাছাকাছি যাঁরা বলেছেন, তাবারী তাঁদের নাম দেন। ইবন আব্বাস (রাঃ): বিশ্বাসী আত্মা। কাতাদা: সেই মুমিন, আল্লাহর ওয়াদায় যার মন স্থির হয়েছে। কাতাদা ও হাসান একসঙ্গে: আল্লাহ যা বলেছেন তাতে নিশ্চিন্ত, আর তা সত্য বলে মেনে নেওয়া আত্মা।"
          },
          {
            "en": "Others, at-Tabari says, took it as the soul certain that Allah is its Lord and yielding to whatever He does with it. Mujahid, through a string of chains, says it became certain that Allah is its Lord and steadied its heart for His command and obedience; one chain adds the turning, humbled soul. Ibn Kathir's Arabic gives three words: still, firm, and turning along with the truth. As-Sa'di: at rest in the remembrance of Allah, settled in His love, its eye cooled by Allah.",
            "bn": "তাবারী জানান, অন্যরা বুঝেছেন অন্যভাবে: যে আত্মা নিশ্চিত জানে আল্লাহই তার রব, আর তিনি তার সঙ্গে যা-ই করুন, মেনে নেয়। একাধিক সূত্রে মুজাহিদের কথা আসে: সে নিশ্চিত হয়েছে যে আল্লাহই তার রব, আর তাঁর হুকুম ও আনুগত্যের জন্য নিজের মনকে শক্ত করে বেঁধেছে। একটি সূত্রে যোগ হয়েছে: আল্লাহমুখী, বিনয়ে নত আত্মা। ইবন কাসীর আরবিতে তিনটি শব্দে বলেন: শান্ত, অটল, আর হকের সঙ্গে সঙ্গে ঘোরে এমন। সা'দীর কথায়: আল্লাহর জিকিরে নিশ্চিন্ত, তাঁর ভালোবাসায় থিতু, আল্লাহকে পেয়ে যার চোখ জুড়িয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Secure, Content, Sincere",
          "bn": "নিরাপদ, রাজি, একনিষ্ঠ"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi widen the list. Al-Qurtubi gives Ibn 'Abbas twice, at rest in Allah's reward and the believing soul; both give al-Hasan, believing and certain. Pleased with Allah's decree is Mujahid's in al-Qurtubi, who adds that it knew what missed it would never have struck it, and 'Atiyyah's in al-Baghawi. Secure from Allah's punishment is Muqatil's in al-Qurtubi and al-Kalbi's in al-Baghawi; at-Tabari and al-Qurtubi report Ubayy ibn Ka'b's reading, the secure, settled soul.",
            "bn": "কুরতুবী ও বাগাভী তালিকাটা আরও বড় করেন। কুরতুবী ইবন আব্বাস (রাঃ) থেকে দুটি কথা আনেন: আল্লাহর প্রতিদানে নিশ্চিন্ত আত্মা, আর মুমিন আত্মা। হাসানের কথা দুজনেই দেন: ঈমানদার, দৃঢ় বিশ্বাসী। আল্লাহর ফয়সালায় রাজি আত্মা, এ ব্যাখ্যা কুরতুবীতে মুজাহিদের, বাগাভীতে আতিয়্যার। কুরতুবীর মুজাহিদ আরও বলেন, সে জানত যা তাকে এড়িয়ে গেছে তা তাকে পাওয়ার ছিল না। আল্লাহর আজাব থেকে নিরাপদ আত্মা, এ কথা কুরতুবীতে মুকাতিলের, বাগাভীতে কালবীর। তাবারী ও কুরতুবী দুজনেই উবাই ইবন কা'ব (রাঃ)-এর কিরাআত উল্লেখ করেন: নিরাপদ, প্রশান্ত আত্মা।"
          },
          {
            "en": "Some, in both al-Qurtubi and al-Baghawi, read it as at rest in the remembrance of Allah and cite 13:28, which has its own deep page. Al-Muyassar joins remembrance and faith; Ma'arif al-Qur'an speaks of a soul made calm by remembrance and obedience, restless when it leaves them. Al-Qurtubi adds Ibn Kaysan: the sincere soul. He then reports from Buraydah that Hamzah's soul is meant, and answers that the sound view is that the verse is general, for every sincere, obedient believer.",
            "bn": "কুরতুবী ও বাগাভী দুজনের কাছেই আরেকটি মত আছে: আল্লাহর জিকিরে নিশ্চিন্ত আত্মা। প্রমাণ হিসেবে তাঁরা ১৩:২৮ আয়াত আনেন, যার আলাদা বিস্তারিত পাতা আছে। মুয়াসসার জিকির আর ঈমানকে একসঙ্গে ধরে। মাআরিফুল কুরআনের ভাষায়, জিকির ও আনুগত্যে এ আত্মা শান্ত হয়, আর তা ছেড়ে দিলে অস্থির হয়ে পড়ে। কুরতুবী ইবন কাইসানের মতও আনেন: একনিষ্ঠ আত্মা। এরপর তিনি বুরাইদা (রাঃ) থেকে বর্ণনা দেন যে এখানে হামজা (রাঃ)-এর আত্মার কথা বলা হয়েছে। জবাবে নিজেই বলেন, সঠিক কথা হলো আয়াতটি সাধারণ, প্রত্যেক একনিষ্ঠ, অনুগত মুমিনের আত্মার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Moments for One Address",
          "bn": "এক ডাক, তিন মুহূর্ত"
        },
        "p": [
          {
            "en": "When is this said? The commentators genuinely differ, and the sources keep the difference. One view puts it at death. At-Tabari reports, as something said, that these are the angel's words to the servant as his soul leaves, bringing news of his Lord's pleasure. Abu Salih divides the verses: return to your Lord is at death, enter among My servants is on the Day of Resurrection. At-Tabari and al-Baghawi carry both halves of his words; al-Qurtubi carries the first.",
            "bn": "কথাগুলো বলা হবে কখন? এ নিয়ে তাফসীরকারদের মধ্যে সত্যিকারের মতভেদ আছে, আর সূত্রগুলো সেই মতভেদ ধরে রেখেছে। একটি মতে, মৃত্যুর সময়। তাবারী 'বলা হয়েছে' বলে উল্লেখ করেন যে এগুলো ফেরেশতার কথা, বান্দার প্রাণ বের হওয়ার মুহূর্তে, রবের সন্তুষ্টির সুসংবাদ দিয়ে। আবু সালিহ আয়াতগুলো ভাগ করে দেন। 'তোমার রবের দিকে ফিরে এসো' মৃত্যুর সময়, আর 'আমার বান্দাদের মধ্যে শামিল হও' কিয়ামতের দিন। তাবারী ও বাগাভী তাঁর কথার দুই অংশই আনেন, কুরতুবী আনেন প্রথম অংশ।"
          },
          {
            "en": "A second view puts it at the Resurrection, when souls are returned to bodies. At-Tabari gives it from Ibn 'Abbas, ad-Dahhak and 'Ikrimah, and judges it the sounder of the two views because of the words that follow, enter among My servants and enter My Garden. A Kufan grammarian he cites places it when the believers receive their records in their right hands. Ma'arif al-Qur'an reports some who place it after the reckoning is over, arguing from the context.",
            "bn": "দ্বিতীয় মতে, পুনরুত্থানের দিন, যখন রুহগুলো দেহে ফিরিয়ে দেওয়া হবে। তাবারী এ মত আনেন ইবন আব্বাস (রাঃ), দাহহাক ও ইকরিমা থেকে। দুই মতের মধ্যে তিনি এটিকেই বেশি সঠিক বলেন, কারণ পরের কথাগুলো: আমার বান্দাদের মধ্যে শামিল হও, আমার জান্নাতে প্রবেশ করো। তিনি কুফার এক ব্যাকরণবিদের কথাও আনেন, যাঁর মতে মুমিনদের আমলনামা ডান হাতে দেওয়ার সময় এ কথা বলা হবে। মাআরিফুল কুরআন জানায়, কেউ কেউ বলেন হিসাব শেষ হওয়ার পর, আর তাঁরা যুক্তি দেন আয়াতের প্রসঙ্গ থেকে।"
          },
          {
            "en": "A third view keeps more than one moment. At-Tabari reports Usamah ibn Zayd from his father that the soul is given the good news of Paradise at death, on the Day of Gathering and at the raising; al-Qurtubi gives the same three from Ibn Zayd. Ibn Kathir says it is said at death and on the Day of Resurrection, as angels bring the believer good news at both; as-Sa'di agrees. Ma'arif calls the time unclear. This article picks none of these views.",
            "bn": "তৃতীয় মত একাধিক মুহূর্তকে একসঙ্গে রাখে। তাবারী উসামা ইবন যায়দ থেকে তাঁর বাবার কথা আনেন: এ আত্মাকে জান্নাতের সুসংবাদ দেওয়া হয় মৃত্যুর সময়, সমবেত হওয়ার দিনে, আর পুনরুত্থানের সময়। কুরতুবী একই তিনটি মুহূর্তের কথা আনেন ইবন যায়দ থেকে। ইবন কাসীর বলেন, কথাটা বলা হয় মৃত্যুর সময়, আবার কিয়ামতের দিনেও, যেমন দুই সময়েই ফেরেশতারা মুমিনকে সুসংবাদ দেন। সা'দীও একই কথা বলেন। মাআরিফুল কুরআন বলে, সময়টা স্পষ্ট নয়। এ লেখা এর কোনো মতকেই বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "To the Lord, or the Body",
          "bn": "রবের কাছে, না দেহে"
        },
        "p": [
          {
            "en": "The dispute shapes irji'i ila rabbiki too. Those who place the address at the raising read rabbiki as your companion, the body: al-Qurtubi gives it from Ibn 'Abbas, 'Ikrimah and 'Ata' and says at-Tabari chose it; al-Baghawi adds ad-Dahhak. Allah then commands the spirits back into the bodies. Ibn Kathir calls this strange and prefers the apparent sense, back to Allah's judgement and standing before Him, citing 6:62, they are returned to Allah, their true Master, and 40:43, our return is to Allah.",
            "bn": "ইরজিঈ ইলা রাব্বিকি, এ কথার অর্থও সেই মতভেদে বাঁধা। যাঁরা ডাকটাকে পুনরুত্থানের সময় ধরেন, তাঁরা রাব্বিকি পড়েন 'তোমার সঙ্গী', অর্থাৎ দেহ। কুরতুবী এ ব্যাখ্যা আনেন ইবন আব্বাস (রাঃ), ইকরিমা ও আতা থেকে, আর বলেন তাবারী এটিই গ্রহণ করেছেন। বাগাভী দাহহাকের নামও যোগ করেন। এ ব্যাখ্যায় আল্লাহ রুহগুলোকে দেহে ফিরে যেতে হুকুম দেন। ইবন কাসীর একে অপরিচিত মত বলেন। তাঁর মতে বাহ্যিক অর্থই ঠিক: আল্লাহর ফয়সালা আর তাঁর সামনে দাঁড়ানোর দিকে ফেরা। দলিল হিসেবে আনেন ৬:৬২, তারপর তাদের ফিরিয়ে দেওয়া হয় আল্লাহর কাছে, তাদের প্রকৃত মালিকের কাছে; আর ৪০:৪৩, আমাদের ফেরা আল্লাহরই কাছে।"
          },
          {
            "en": "Abu Salih, in al-Qurtubi: return to Allah, and this is at death. Al-Hasan, in al-Qurtubi and al-Baghawi: return to your Lord's reward and honour. Ibn Kathir's Arabic: to His nearness, His reward and what He prepared for His servants in His Garden. As-Sa'di dwells on the word Lord, the One who raised you with His blessing until you became one of His friends. Ma'arif al-Qur'an reads return as showing that the soul's first place was with its Lord, in 'Illiyyin.",
            "bn": "কুরতুবীতে আবু সালিহের কথা: আল্লাহর দিকে ফিরে এসো, আর এটা মৃত্যুর সময়। কুরতুবী ও বাগাভীতে হাসানের কথা: তোমার রবের প্রতিদান ও সম্মানের দিকে ফিরে এসো। ইবন কাসীর আরবিতে বলেন: তাঁর সান্নিধ্যে, তাঁর প্রতিদানের দিকে, আর জান্নাতে বান্দাদের জন্য তিনি যা প্রস্তুত রেখেছেন তার দিকে। সা'দী থামেন 'রব' শব্দে। তিনি সেই রব, যিনি নিজের নিয়ামত দিয়ে তোমাকে লালন করেছেন, এত অনুগ্রহ করেছেন যে তুমি তাঁর বন্ধুদের একজন হয়ে গেছ। মাআরিফুল কুরআন 'ফিরে এসো' কথাটি থেকে বোঝে, আত্মার প্রথম ঠিকানা ছিল তার রবের কাছে, ইল্লিয়্যীনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pleased, and Pleasing to Him",
          "bn": "রাজি, আর তাঁরও প্রিয়"
        },
        "p": [
          {
            "en": "Radiyatan mardiyyah sets two forms of one root side by side. Ibn Kathir: pleased within itself, and pleasing, meaning it is pleased with Allah, He is pleased with it, and He has made it content. As-Sa'di: pleased with Allah and with the reward He honoured it with, while Allah is pleased with it. Al-Baghawi: pleased with the reward, and approved. Al-Muyassar says much the same. Ma'arif al-Qur'an moves it into this life: pleasure with Allah's decrees and commands is a sign that He is pleased.",
            "bn": "রাদিয়াতাম মারদিয়্যাহ: একই ধাতুর দুটি রূপ পাশাপাশি। ইবন কাসীর বলেন, রাদিয়াহ মানে নিজের ভেতরে সন্তুষ্ট, আর মারদিয়্যাহ মানে সে আল্লাহর উপর রাজি, আল্লাহ তার উপর রাজি, আর তিনি তাকে খুশি করে দিয়েছেন। সা'দীর কথায়, সে আল্লাহর উপর রাজি, তিনি যে প্রতিদান দিয়ে তাকে সম্মানিত করেছেন তাতেও রাজি, আর আল্লাহও তার উপর রাজি। বাগাভী বলেন, প্রতিদানে খুশি, আর তাঁর কাছে পছন্দনীয়। মুয়াসসারও প্রায় একই কথা বলে। মাআরিফুল কুরআন কথাটাকে এই জীবনে টেনে আনে: আল্লাহর ফয়সালা ও বিধানে বান্দার রাজি থাকা এই নিদর্শন যে আল্লাহ তার উপর রাজি।"
          },
          {
            "en": "Al-Baghawi reports al-Hasan: when Allah wills to take the soul, it rests in Allah, pleased with Him, and He with it. He then reports from 'Abd Allah ibn 'Amr, where al-Qurtubi names 'Amr ibn al-'As, that two angels come to the dying believer with a gift from Paradise and say: come out, O soul at rest, to rest and fragrance, and your Lord is pleased with you. Both give it as a Companion's words, not the Prophet's ﷺ. Al-Qurtubi's wording puts the verse's two adjectives into the angels' mouths.",
            "bn": "বাগাভী হাসানের কথা আনেন: আল্লাহ যখন এ আত্মাকে তুলে নিতে চান, সে আল্লাহতে নিশ্চিন্ত হয়, তাঁর উপর রাজি হয়, আর তিনিও তার উপর রাজি। এরপর তিনি আবদুল্লাহ ইবন আমর (রাঃ) থেকে বর্ণনা দেন, যেখানে কুরতুবী নাম বলেন আমর ইবনুল আস (রাঃ)। মুমিনের মৃত্যুর সময় দুজন ফেরেশতা জান্নাতের এক উপহার নিয়ে আসেন আর বলেন: হে প্রশান্ত আত্মা, বেরিয়ে এসো আরাম আর সুগন্ধির দিকে, তোমার রব তোমার উপর রাজি। দুই কিতাবেই এটি একজন সাহাবির কথা, নবী ﷺ-এর নয়। কুরতুবীর বর্ণনায় আয়াতের ওই দুটি বিশেষণই ফেরেশতাদের মুখে উঠে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Among Many, or Into One",
          "bn": "বহুজনের দলে, না এক দেহে"
        },
        "p": [
          {
            "en": "Fa-dkhuli fi 'ibadi. Qatadah, in at-Tabari, says among My righteous servants, and at-Tabari adopts that. Ibn Kathir: into their ranks. Al-Muyassar: into the number of Allah's righteous servants, and with them into My Garden. Al-Qurtubi cites 29:9, We will surely admit them among the righteous; al-Baghawi cites Sulayman's (AS) prayer in 27:19, admit me by Your mercy among Your righteous servants. Lighter glosses: into My obedience (Muhammad ibn Muzahim, in at-Tabari), and into My party (al-Akhfash, in al-Qurtubi).",
            "bn": "ফাদখুলী ফী ইবাদী। তাবারীতে কাতাদা বলেন: আমার নেক বান্দাদের মধ্যে। তাবারী নিজেও এ অর্থ নেন। ইবন কাসীর বলেন: তাদের দলভুক্ত হয়ে। মুয়াসসারের কথায়: আল্লাহর নেক বান্দাদের সারিতে, আর তাদের সঙ্গে আমার জান্নাতে। কুরতুবী আনেন ২৯:৯, আমি অবশ্যই তাদের নেককারদের মধ্যে দাখিল করব। বাগাভী আনেন ২৭:১৯ আয়াতে সুলাইমান (আঃ)-এর দোয়া: তোমার রহমতে আমাকে তোমার নেক বান্দাদের মধ্যে দাখিল করো। হালকা আরও দুটি ব্যাখ্যা আছে। তাবারীতে মুহাম্মাদ ইবন মুযাহিম বলেন, আমার আনুগত্যে। কুরতুবীতে আখফাশ বলেন, আমার দলে।"
          },
          {
            "en": "There is a genuine difference of reading. At-Tabari reports that some early readers had fi 'abdi, singular, into My servant: Ibn 'Abbas, and a report through Abu ash-Shaykh al-Huna'i. Al-Kalbi takes it as the spirit returning into the body. Al-Qurtubi adds that Ibn Mas'ud read fi jasadi 'abdi, into My servant's body, and glosses the verse as into the bodies of My servants. At-Tabari rules that the right reading is fi 'ibadi, because the authoritative reciters agree on it. This article adds no ruling of its own.",
            "bn": "এখানে কিরাআতের সত্যিকারের একটি পার্থক্য আছে। তাবারী জানান, পূর্বসূরিদের কেউ কেউ পড়তেন ফী আবদী, একবচনে, অর্থাৎ আমার বান্দার মধ্যে। এ পাঠ এসেছে ইবন আব্বাস (রাঃ) থেকে, আর আবুশ শাইখ আল-হুনাঈর সূত্রে এক বর্ণনায়। কালবী এর অর্থ নেন: রুহ দেহে ফিরে যাচ্ছে। কুরতুবী যোগ করেন, ইবন মাসউদ (রাঃ) পড়তেন ফী জাসাদি আবদী, আমার বান্দার দেহে। সে ভিত্তিতে কুরতুবী আয়াতের ব্যাখ্যা দেন: আমার বান্দাদের দেহে। তাবারীর রায়, সঠিক কিরাআত ফী ইবাদী, কারণ প্রামাণ্য কারীগণ এতে একমত। এ লেখা নিজের কোনো রায় যোগ করছে না।"
          },
          {
            "en": "Wa-dkhuli jannati: and enter My Garden. Al-Qurtubi adds one word, with them; Muhammad ibn Muzahim glosses it as My mercy. Ma'arif al-Qur'an dwells on the possessive: Allah calls the Garden His own, a great honour, marking it as the place of His pleasure and not of comfort alone. Ma'arif reads the order as company before place, the fold of the righteous and then the Garden with them, and cites Yusuf's (AS) prayer in 12:101, join me to the righteous.",
            "bn": "ওয়াদখুলী জান্নাতী: আর আমার জান্নাতে প্রবেশ করো। কুরতুবী শুধু একটি শব্দ যোগ করেন: তাদের সঙ্গে। মুহাম্মাদ ইবন মুযাহিম এর ব্যাখ্যা দেন: আমার রহমতে। মাআরিফুল কুরআন থামে 'আমার' শব্দটিতে। আল্লাহ জান্নাতকে নিজের বলে উল্লেখ করেছেন, এ এক বিরাট সম্মান। এতে বোঝা যায়, জান্নাত শুধু চিরস্থায়ী আরামের জায়গা নয়, আল্লাহর সন্তুষ্টির জায়গা। মাআরিফ হুকুম দুটির ক্রম থেকে বোঝে, আগে সঙ্গ, পরে ঠিকানা: আগে নেককারদের দলে, তারপর তাদের সঙ্গে জান্নাতে। সঙ্গে আনে ১২:১০১ আয়াতে ইউসুফ (আঃ)-এর দোয়া: আমাকে নেককারদের সঙ্গে মিলিয়ে দাও।"
          }
        ]
      },
      {
        "h": {
          "en": "White Silk at the Deathbed",
          "bn": "মৃত্যুশয্যায় সাদা রেশম"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, for the view that the address comes at death, points to a long narration of Abu Hurairah in Ahmad's Musnad, an-Nasa'i and Ibn Majah. An-Nasa'i's wording, number 1833 in his Sunan, reads in the English on quranx.com: \"When the believer is dying, the angels of mercy come to him with white silk and [say]: 'Come out content and with the pleasure of Allah upon you to the mercy of Allah, fragrance and a Lord Who is not angry'; So it comes out like the best fragrance of musk.",
            "bn": "মৃত্যুর সময় এ ডাক আসে, এ মতের পক্ষে মাআরিফুল কুরআন আবু হুরায়রা (রাঃ)-এর একটি দীর্ঘ বর্ণনার কথা বলে, যা আছে আহমাদের মুসনাদ, নাসাঈ ও ইবন মাজাহয়। নাসাঈর সুনানে ১৮৩৩ নম্বরে এর ভাষা এই: \"মুমিনের মৃত্যু ঘনিয়ে এলে রহমতের ফেরেশতারা সাদা রেশমি কাপড় নিয়ে তার কাছে আসে আর বলে: 'বেরিয়ে এসো, সন্তুষ্ট হয়ে, তোমার উপর সন্তুষ্টি নিয়ে, আল্লাহর রহমত আর সুগন্ধির দিকে, এমন রবের দিকে যিনি রাগান্বিত নন।' তখন সে বেরিয়ে আসে মিশকের সবচেয়ে উৎকৃষ্ট সুগন্ধির মতো।"
          },
          {
            "en": "They pass him from one to another until they bring him to the gate of heaven, where they say: 'How good is this fragrance that has come to you from the Earth!' Then the souls of the believers come to him and they rejoice more over him than any one of you rejoices when his absent loved one comes to him. They ask him: 'What happened to so-and-so, what happened to so-and-so?' They say: 'Let him be, for he was in the hardship of the world.' When he says, 'Did he not come here?' They say: 'He was taken to the pit (of Hell).'",
            "bn": "ফেরেশতারা একে অন্যের হাতে তাকে তুলে দেয়, শেষে আসমানের দরজায় নিয়ে আসে। সেখানে বলা হয়: 'জমিন থেকে তোমাদের কাছে আসা এ সুগন্ধ কত মনোরম!' তারপর তাকে মুমিনদের রুহগুলোর কাছে আনা হয়। তোমাদের কোনো একজন দূরে থাকা প্রিয়জন ফিরে এলে যতটা খুশি হয়, তারা তাকে পেয়ে তার চেয়েও বেশি খুশি হয়। তারা জানতে চায়: 'অমুকের কী হলো? অমুকের কী হলো?' অন্যরা বলে: 'ওকে একটু থাকতে দাও, সে দুনিয়ার দুঃখের মধ্যে ছিল।' সে যখন বলে, 'সে কি তোমাদের কাছে আসেনি?' তারা বলে: 'তাকে নিয়ে যাওয়া হয়েছে তার ঠিকানা হাবিয়ায় (জাহান্নামে)।'"
          },
          {
            "en": "[And when the disbeliever is dying, the angels of punishment come to him with sackcloth and say:] 'Come out discontent, subject of Divine wrath, to the punishment of Allah, the Mighty and Sublime'; So it comes out like the foulest stench of a corpse. They bring him to the gates of the Earth, where they say: 'How foul is this stench!' Then they bring him to the souls of the disbelievers.\" The bracketed clause is in the Arabic but missing from the English page. An-Nasa'i records it with no grading of his own. Its Arabic command, ukhruji radiyatan mardiyyan 'anki, echoes 89:28.",
            "bn": "[আর কাফিরের মৃত্যু ঘনিয়ে এলে আজাবের ফেরেশতারা চটের কাপড় নিয়ে তার কাছে আসে আর বলে:] 'বেরিয়ে এসো, অসন্তুষ্ট হয়ে, তোমার উপর অসন্তোষ নিয়ে, মহান পরাক্রমশালী আল্লাহর আজাবের দিকে।' তখন সে বেরিয়ে আসে পচা লাশের সবচেয়ে বিকট দুর্গন্ধের মতো। তারা তাকে জমিনের দরজায় নিয়ে যায়, সেখানে বলা হয়: 'এ দুর্গন্ধ কত বিকট!' শেষে তাকে কাফিরদের রুহগুলোর কাছে নিয়ে যাওয়া হয়।\" বন্ধনীর অংশটি আরবিতে আছে, কুরানএক্সের ইংরেজি পাতায় বাদ পড়েছে। নাসাঈ বর্ণনাটির কোনো মান নিজে উল্লেখ করেননি। এর আরবি হুকুম, উখরুজী রাদিয়াতান মারদিয়্যান আনকি, ৮৯:২৮ আয়াতেরই প্রতিধ্বনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Named Souls, an Open Door",
          "bn": "নাম-জানা আত্মা, খোলা দরজা"
        },
        "p": [
          {
            "en": "The tafsirs also name whom the verses concern, and they disagree. Ibn Kathir gives ad-Dahhak from Ibn 'Abbas: 'Uthman ibn 'Affan, which al-Qurtubi ties to his endowing the well of Rumah; and Buraydah: Hamzah. Al-Qurtubi adds, as something said, Khubayb ibn 'Adi. In Ibn Kathir, Sa'id ibn Jubayr recited the verse before the Prophet ﷺ; Abu Bakr said how fine it is, and was told the angel will say it to him at death. Ibn Kathir calls this mursal hasan; at-Tabari has it too, al-Qurtubi through Sa'id ibn Zayd. This article picks none of these reports.",
            "bn": "আয়াতগুলো কাকে নিয়ে, সে বিষয়ে তাফসীরগুলোতে কয়েকটি নাম আসে, আর সেগুলো এক নয়। ইবন কাসীর দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে আনেন: উসমান ইবন আফফান (রাঃ)। কুরতুবী একে জুড়ে দেন রুমা কূপ ওয়াকফ করার ঘটনার সঙ্গে। বুরাইদা (রাঃ) থেকে আসে হামজা (রাঃ)-এর নাম। কুরতুবী 'বলা হয়' বলে যোগ করেন খুবাইব ইবন আদী (রাঃ)-কে। ইবন কাসীরে সাঈদ ইবন জুবাইর নবী ﷺ-এর সামনে আয়াতটি পড়েন। আবু বকর (রাঃ) বলেন, কী সুন্দর! তাঁকে বলা হয়, মৃত্যুর সময় ফেরেশতা তোমাকে এ কথা বলবে। ইবন কাসীর একে মুরসাল হাসান বলেন। তাবারীতেও এটি আছে, কুরতুবীতে সাঈদ ইবন যায়দের সূত্রে। এ লেখা এর কোনো বর্ণনাকেই বেছে নিচ্ছে না।"
          },
          {
            "en": "This article's own reading: set beside 89:24, the passage has two voices. One man says, would that I had sent ahead for my life; the other soul is told, return. The glosses gathered here describe that second soul by what it had done in this world: believed the promise, grew certain of its Lord, accepted His decree, kept His remembrance. Whatever the moment of the address, every reading the commentators give has the soul formed before it is called. That much a living reader can work on.",
            "bn": "এবার এ লেখার নিজের পাঠ। ৮৯:২৪ আয়াতের পাশে রাখলে পুরো অংশে দুটি কণ্ঠ শোনা যায়। একজন বলে, হায়, নিজের জীবনের জন্য যদি কিছু আগে পাঠাতাম! আরেক আত্মাকে বলা হয়, ফিরে এসো। এখানে জড়ো করা ব্যাখ্যাগুলো এই দ্বিতীয় আত্মার পরিচয় দেয় দুনিয়ায় সে যা করেছে তা দিয়ে: প্রতিশ্রুতিকে সত্য মেনেছে, রবের ব্যাপারে নিশ্চিত হয়েছে, তাঁর ফয়সালায় রাজি থেকেছে, তাঁর জিকির ধরে রেখেছে। ডাকটা যে মুহূর্তেই আসুক, তাফসীরকারদের প্রতিটি পাঠে আত্মাটি গড়ে ওঠে ডাক আসার আগেই। জীবিত পাঠকের হাতে কাজ করার জিনিস এটুকুই।"
          }
        ]
      }
    ]
  }
});
