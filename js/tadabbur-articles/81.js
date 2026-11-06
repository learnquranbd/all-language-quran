/**
 * Tadabbur long-form articles — surah 81.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "81:1": {
    "sections": [
      {
        "h": {
          "en": "A Surah Named for a Verb",
          "bn": "এক ক্রিয়াপদের নামে সূরা"
        },
        "p": [
          {
            "en": "Idha ash-shamsu kuwwirat: when the sun is wound up. The verse is three Arabic words: idha, when; ash-shamsu, the sun; and kuwwirat, a passive verb whose doer is not named. It opens Surat at-Takwir, and the surah's name is the verbal noun of that very verb, takwir; Ibn Kathir heads his commentary Tafsir Surat at-Takwir. Al-Qurtubi records that the surah is Makkan in the view of all the scholars, and that it has 29 verses, a count that matches the text.",
            "bn": "ইযাশ শামসু কুওভিরাত: যখন সূর্যকে গুটিয়ে নেওয়া হবে। আরবিতে আয়াতটি মাত্র তিনটি শব্দ। ইযা মানে যখন, আশ-শামসু মানে সূর্য, আর কুওভিরাত একটি কর্মবাচ্য ক্রিয়া, যার কর্তার নাম বলা হয়নি। এ আয়াত দিয়েই সূরা আত-তাকভীর শুরু, আর সূরার নামটাও ওই ক্রিয়ারই মাসদার (ক্রিয়াবাচক বিশেষ্য): তাকভীর। ইবন কাসীর তাঁর আলোচনার শিরোনাম দেন তাফসীরু সূরাতিত তাকভীর। কুরতুবী লেখেন, সব আলেমের কথাতেই সূরাটি মক্কী, আর এর আয়াত ২৯টি। পাঠের সঙ্গে এ সংখ্যা মিলে যায়।"
          },
          {
            "en": "A sentence that begins with idha promises more to come. When, and then what? The verse gives the condition and stops. The next verse, 81:2, adds another when, this time about the stars, and the surah keeps adding before it says what follows. This article stays with the sun alone, as the verse does, and leaves each later clause to its own entry. What the commentators reported about this first image is enough to fill the space.",
            "bn": "ইযা দিয়ে যে বাক্য শুরু হয়, তা জানিয়ে দেয়, সামনে আরও কথা আসছে। যখন এটা হবে, তখন কী? আয়াতটি শর্তটুকু বলে থেমে যায়। পরের আয়াত ৮১:২ আরেকটি যখন যোগ করে, এবার তারকাদের নিয়ে। এভাবে সূরা একের পর এক যোগ করে চলে, তারপর বলে এর পরিণাম কী। এ লেখাও আয়াতের মতো শুধু সূর্যের কথাতেই থাকবে। পরের প্রতিটি অংশের আলোচনা তার নিজের জায়গায়। প্রথম এই ছবিটি নিয়ে তাফসীরকারেরা যা বর্ণনা করেছেন, এ লেখার জন্য সেটুকুই যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "From Turban to Bundle",
          "bn": "পাগড়ি থেকে কাপড়ের পুঁটলি"
        },
        "p": [
          {
            "en": "At-Tabari defines the word from the speech of the Arabs: takwir is gathering the parts of a thing to each other. He gives two everyday pictures. The first is takwir al-'imamah, the winding of a turban, which is wrapping it around the head. The second is takwir al-karah, the bundle, which is gathering clothes together and wrapping them up. Ibn Kathir carries this explanation over in at-Tabari's name, nearly word for word, and adds nothing to the definition.",
            "bn": "তাবারী শব্দটির অর্থ বলেন আরবদের মুখের ভাষা থেকে। তাকভীর মানে কোনো জিনিসের অংশগুলো একটার সঙ্গে আরেকটা জড়ো করা। এর দুটি ঘরোয়া উদাহরণ তিনি দেন। প্রথমটি পাগড়ির তাকভীর, অর্থাৎ মাথার চারপাশে পাগড়ি প্যাঁচানো। দ্বিতীয়টি পুঁটলির তাকভীর, অর্থাৎ কাপড়চোপড় একসঙ্গে জড়ো করে বেঁধে ফেলা। ইবন কাসীর এই ব্যাখ্যা তাবারীর নামেই প্রায় হুবহু তুলে দেন, সংজ্ঞায় নতুন কিছু যোগ করেন না।"
          },
          {
            "en": "Al-Qurtubi, in his own voice, gives the root sense of takwir as gathering, taken from the phrase kara al-'imamata 'ala ra'sihi, he wound the turban upon his head, meaning he wrapped and gathered it. He also reports Abu 'Ubayda: kuwwirat is like the winding of a turban; it is wrapped and so effaced. Al-Baghawi quotes az-Zajjaj in the same register: it is wrapped as a turban is wrapped, for the Arabs say kawwartu al-'imamata 'ala ra'si, I wound the turban on my head. The image is ordinary and domestic, and the verse applies it to the sun.",
            "bn": "কুরতুবী নিজের কথায় বলেন, তাকভীরের মূল অর্থ জড়ো করা। কথাটা এসেছে আরবদের এই বাক্য থেকে: কারাল ইমামাতা আলা রা'সিহি, সে মাথায় পাগড়ি প্যাঁচাল, মানে পেঁচিয়ে গুছিয়ে নিল। আবু উবাইদার কথাও তিনি আনেন: কুওভিরাত পাগড়ি প্যাঁচানোর মতো, প্যাঁচানো হয়, ফলে মুছে যায়। বাগাভী একই সুরে যাজ্জাজের কথা উদ্ধৃত করেন। পাগড়ি যেভাবে প্যাঁচানো হয়, সূর্যকেও সেভাবে প্যাঁচানো হবে। আরবরা বলে, কাওওয়ারতুল ইমামাতা আলা রা'সী, আমি মাথায় পাগড়ি প্যাঁচালাম। ছবিটা একেবারে ঘরের, প্রতিদিনের। আয়াত সেটাকেই সূর্যের উপর বসিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Darkened, Faded, Gone",
          "bn": "আঁধার, ম্লান, বিলীন"
        },
        "p": [
          {
            "en": "Then come the readings. At-Tabari opens by saying that the people of interpretation differed, and his first group took the verse to mean that the sun's light went. In that group he places Ibn Abbas (RA), through Ali ibn Abi Talha: azlamat, it was darkened; and Ibn Abbas again, through al-'Awfi: dhahabat, it went away. Mujahid said: idmahallat wa-dhahabat, it faded out and went. Qatada said: its light went, so that it has no light. Ad-Dahhak said: as for the takwir of the sun, it is its going.",
            "bn": "এরপর ব্যাখ্যার পালা। তাবারী শুরুতেই জানিয়ে দেন, তাফসীরের আলেমরা এখানে ভিন্নমত করেছেন। প্রথম দলের মতে আয়াতের অর্থ, সূর্যের আলো চলে গেল। এ দলে তিনি রাখেন ইবনে আব্বাস (রাঃ)-কে, আলী ইবনে আবী তালহার সূত্রে: আযলামাত, অন্ধকার হয়ে গেল। আওফীর সূত্রে ইবনে আব্বাস (রাঃ) থেকেই আরেক বর্ণনা: যাহাবাত, চলে গেল। মুজাহিদ বলেছেন: ইদমাহাল্লাত ওয়া যাহাবাত, ক্ষীণ হতে হতে মিলিয়ে গেল। কাতাদা বলেছেন: তার আলো চলে গেল, আর কোনো আলো রইল না। দাহহাক বলেছেন: সূর্যের তাকভীর মানে তার চলে যাওয়া।"
          },
          {
            "en": "The other commentators repeat these names and add a few. Ibn Kathir lists the same glosses from Ibn Abbas, Mujahid, ad-Dahhak and Qatada. Al-Baghawi gives the gloss its light went, and names Muqatil and al-Kalbi alongside Qatada for it. Al-Qurtubi attributes the going of its light to al-Hasan, says that Qatada and Mujahid held it, and adds that it is also reported from Ibn Abbas. Ma'arif al-Qur'an says that the word denotes, for the sun, losing its light, and links that sense to Hasan al-Basri.",
            "bn": "অন্য তাফসীরকারেরা এই নামগুলোই আবার আনেন, সঙ্গে আরও কয়েকজনকে যোগ করেন। ইবন কাসীর ইবনে আব্বাস (রাঃ), মুজাহিদ, দাহহাক আর কাতাদার একই ব্যাখ্যাগুলো তুলে ধরেন। বাগাভী আনেন আলো চলে যাওয়ার ব্যাখ্যা, আর এ মতে কাতাদার পাশে মুকাতিল ও কালবীর নাম রাখেন। কুরতুবী আলো চলে যাওয়ার ব্যাখ্যাটি হাসানের নামে বলেন। তিনি জানান, কাতাদা ও মুজাহিদেরও এই মত, আর ইবনে আব্বাস (রাঃ) থেকেও তা বর্ণিত। মাআরিফুল কুরআন বলে, সূর্যের বেলায় শব্দটির অর্থ আলো হারানো। এ অর্থটি সেখানে হাসান বসরীর সঙ্গে যুক্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Cast Down and Overturned",
          "bn": "ছুড়ে ফেলা, উল্টে দেওয়া"
        },
        "p": [
          {
            "en": "At-Tabari's second group read the verse differently: rumiya biha, it was thrown. He cites ar-Rabi' ibn Khuthaym for exactly those words, and Abu Salih in two forms: nukkisat, it was turned upside down, and ulqiyat, it was cast down. Ibn Kathir reports the same from both men and adds Zayd ibn Aslam: it falls to the earth. Al-Qurtubi also cites ar-Rabi', and supports the sense from ordinary usage: kawwartuhu fa-takawwara, that is, I knocked him over and he fell.",
            "bn": "তাবারীর দ্বিতীয় দল আয়াতটি পড়েছেন অন্যভাবে: রুমিয়া বিহা, তাকে ছুড়ে ফেলা হলো। হুবহু এই কথাটি তিনি রবী ইবনে খুসাইমের নামে আনেন। আবু সালিহ থেকে আনেন দুটি রূপ: নুক্কিসাত, উল্টে দেওয়া হলো, আর উলকিয়াত, নিচে ফেলে দেওয়া হলো। ইবন কাসীরও এ দুজনের কাছ থেকে একই কথা বর্ণনা করেন, সঙ্গে যোগ করেন যায়েদ ইবনে আসলামের কথা: সূর্য মাটিতে পড়ে যাবে। কুরতুবীও রবীর কথা আনেন। আর আরবদের সাধারণ বুলি দিয়ে অর্থটা পোক্ত করেন: কাওওয়ারতুহু ফা-তাকাওওয়ারা, মানে আমি তাকে ফেলে দিলাম, সে পড়ে গেল।"
          },
          {
            "en": "Some glosses do not sit neatly in either group. Sa'id ibn Jubayr said ghuwwirat, which at-Tabari, Ibn Kathir and al-Baghawi all report; Ibn Kathir's English abridgement renders it as it will sink in. Al-Qurtubi's printed text gives his word with a different first letter, 'uwwirat. Al-Qurtubi also reports from Ibn Abbas (RA) a reading found nowhere else in these commentaries: its takwir is its being brought into the Throne. Each gloss stands on the name of whoever said it, and the commentators set them side by side.",
            "bn": "কিছু ব্যাখ্যা কোনো দলেই ঠিকঠাক বসে না। সাঈদ ইবনে জুবাইর বলেছেন গুওভিরাত। তাবারী, ইবন কাসীর ও বাগাভী তিনজনই কথাটি বর্ণনা করেন, আর ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ এর অনুবাদ করে: সূর্য ডুবে যাবে। কুরতুবীর ছাপা কিতাবে শব্দটির প্রথম অক্ষর ভিন্ন, সেখানে লেখা উওভিরাত। কুরতুবী ইবনে আব্বাস (রাঃ) থেকে আরেকটি ব্যাখ্যাও আনেন, যা এই তাফসীরগুলোর আর কোথাও নেই: সূর্যের তাকভীর মানে তাকে আরশের ভেতরে ঢুকিয়ে দেওয়া। প্রতিটি ব্যাখ্যা যিনি বলেছেন, তাঁর নামেই বর্ণিত। তাফসীরকারেরা এগুলো পাশাপাশি সাজিয়ে রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "At-Tabari Joins the Readings",
          "bn": "তাবারী দুই মত মেলান"
        },
        "p": [
          {
            "en": "At-Tabari then states his preference. The right course, he says, is to say kuwwirat as Allah said it, and takwir in the speech of the Arabs is gathering a thing's parts together. So the verse means that the sun is gathered together, then wrapped, then thrown, and once that is done to it, its light goes. He adds that on this explanation each of the two earlier sayings has a sound aspect, because when it is wound and thrown, its light departs. He does not pick a winner between the camps; he folds them into a single sequence.",
            "bn": "এরপর তাবারী নিজের পছন্দের কথা বলেন। তাঁর মতে ঠিক পথ হলো, আল্লাহ যেভাবে বলেছেন সেভাবেই কুওভিরাত বলা। আরবদের ভাষায় তাকভীর মানে কোনো জিনিসের অংশগুলো একসঙ্গে জড়ো করা। কাজেই আয়াতের অর্থ, সূর্যকে জড়ো করা হবে, তারপর প্যাঁচানো হবে, তারপর ছুড়ে ফেলা হবে, আর এমনটা হলে তার আলো চলে যাবে। তিনি যোগ করেন, এই ব্যাখ্যায় আগের দুটি মতেরই সঠিক দিক আছে। কারণ প্যাঁচিয়ে ছুড়ে ফেললে আলো তো চলেই যায়। তিনি কোনো দলকে জয়ী ঘোষণা করেন না, দুটিকে গেঁথে দেন একটানা ধারায়।"
          },
          {
            "en": "Others close in similar ways. Al-Qurtubi's own conclusion is that the sun is wound and its light effaced, then it is thrown into the sea, and he ends with wa-Allahu a'lam, and Allah knows best. Ma'arif al-Qur'an presents losing its light and being caused to fall as two interpretations that do not contradict each other: first its light will be put out, and then it may be thrown into the ocean. A footnote there adds that folding the sun means its function will come to an end and it will lose its light.",
            "bn": "অন্যরাও প্রায় একইভাবে কথা শেষ করেন। কুরতুবীর নিজের সিদ্ধান্ত হলো, সূর্যকে প্যাঁচানো হবে, তার আলো মুছে যাবে, তারপর তাকে সাগরে ছুড়ে ফেলা হবে। শেষে তিনি লেখেন ওয়াল্লাহু আ'লাম, আল্লাহই ভালো জানেন। মাআরিফুল কুরআন আলো হারানো আর নিচে ফেলে দেওয়া, এ দুটি ব্যাখ্যাকে পরস্পরবিরোধী মনে করে না। প্রথমে তার আলো নিভিয়ে দেওয়া হবে, তারপর হয়তো তাকে মহাসাগরে ফেলা হবে। সেখানকার একটি পাদটীকা যোগ করে, সূর্যকে গুটিয়ে নেওয়ার মানে তার কাজ ফুরিয়ে যাবে, আর সে আলো হারাবে।"
          },
          {
            "en": "The two short commentaries keep to the plain sense. The Muyassar says the sun was wrapped up and its light went. As-Sa'di says that on the Day of Resurrection the sun is gathered and wrapped, the moon is eclipsed, and both are cast into the Fire. So the readings lean different ways: some towards darkening, some towards being thrown, some towards wrapping. At-Tabari and Ma'arif al-Qur'an both say the sayings can stand together. This article reports them as the commentators gave them and does not choose among them.",
            "bn": "ছোট দুটি তাফসীর সরল অর্থেই থাকে। মুয়াসসার বলে, সূর্যকে প্যাঁচিয়ে নেওয়া হলো আর তার আলো চলে গেল। সা'দী বলেন, কিয়ামতের দিন সূর্যকে জড়ো করে প্যাঁচানো হবে, চাঁদ গ্রহণে ঢেকে যাবে, আর দুটিকেই আগুনে ফেলা হবে। তাহলে ব্যাখ্যাগুলোর ঝোঁক আলাদা। কোনোটি অন্ধকারের দিকে, কোনোটি ছুড়ে ফেলার দিকে, কোনোটি প্যাঁচানোর দিকে। তাবারী আর মাআরিফুল কুরআন দুজনেই বলেন, মতগুলো একসঙ্গে টিকে থাকতে পারে। এ লেখা তাফসীরকারেরা যেভাবে দিয়েছেন সেভাবেই মতগুলো তুলে ধরে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Folded Up With the Moon",
          "bn": "চাঁদসহ গুটিয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Ibn Kathir and al-Baghawi both bring, under this verse, a hadith that Bukhari recorded. In Sahih al-Bukhari, number 3200, Abu Hurayra (RA) reports that the Prophet ﷺ said: ash-shamsu wal-qamaru mukawwarani yawma al-qiyamah, the sun and the moon will be folded up on the Day of Resurrection. That is the whole of the wording. It stands in Bukhari's Sahih. Ibn Kathir notes that Bukhari alone recorded it, that he placed it in the Book of the Beginning of Creation, and that it would have been fitting for him to repeat it here.",
            "bn": "ইবন কাসীর ও বাগাভী দুজনেই এ আয়াতের আলোচনায় বুখারীর বর্ণিত একটি হাদিস আনেন। সহীহ বুখারীর ৩২০০ নম্বরে আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: আশ-শামসু ওয়াল কামারু মুকাওওয়ারানি ইয়াওমাল কিয়ামাহ, কিয়ামতের দিন সূর্য ও চাঁদকে গুটিয়ে নেওয়া হবে। হাদিসের পুরো ভাষ্য এটুকুই। এটি আছে বুখারীর সহীহ গ্রন্থে। ইবন কাসীর জানান, হাদিসটি শুধু বুখারীই এনেছেন, রেখেছেন সৃষ্টির সূচনা অধ্যায়ে। তাঁর মন্তব্য, এখানেও এটি আবার আনা বুখারীর পক্ষে মানানসই হতো।"
          },
          {
            "en": "Ibn Kathir also shows the care this subject asks for. He cites a version through Abu Ya'la that adds that the sun and moon will be in the Fire, judges it weak because a narrator in it, Yazid ar-Raqashi, is weak, and points back to Bukhari's version, which lacks the addition. This article quotes only what Bukhari recorded. Other narrations the commentaries carry under this verse, including a longer version through al-Bazzar and reports from Companions about the events of the end, could not be confirmed here and are left out.",
            "bn": "এ বিষয়ে কতটা সাবধান হতে হয়, ইবন কাসীর তা-ও দেখিয়ে দেন। আবু ইয়া'লার সূত্রে তিনি একটি বর্ণনা আনেন, যাতে একটি বাড়তি কথা আছে: সূর্য ও চাঁদ আগুনে থাকবে। তারপর বলেন, বর্ণনাটি দুর্বল, কারণ এর এক বর্ণনাকারী ইয়াযীদ আর-রাকাশী দুর্বল। এরপর তিনি বুখারীর বর্ণনাটির কথা মনে করিয়ে দেন, যেখানে ওই বাড়তি কথাটা নেই। এ লেখায় শুধু বুখারীর বর্ণনাটিই উদ্ধৃত হলো। তাফসীরগুলোতে এ আয়াতের নিচে আরও বর্ণনা আছে, যেমন বাযযারের দীর্ঘতর এক বর্ণনা, আর শেষ সময়ের ঘটনাবলি নিয়ে সাহাবীদের কিছু বক্তব্য। এখানে সেগুলো যাচাই করা যায়নি, তাই বাদ রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "As if Seen by the Eye",
          "bn": "যেন নিজের চোখে দেখা"
        },
        "p": [
          {
            "en": "A second narration attaches to this surah as a whole. Tirmidhi records, at number 3333, from Ibn Umar (RA) that the Messenger of Allah ﷺ said: whoever would be pleased to look at the Day of Resurrection as though it were seen by the eye, let him recite idha ash-shamsu kuwwirat, and idha as-sama'u infatarat, and idha as-sama'u inshaqqat. Those are the openings of this surah, of 82:1 and of 84:1. Tirmidhi's own grading follows the text: hadha hadithun hasanun gharib, this is a hasan gharib hadith.",
            "bn": "দ্বিতীয় একটি বর্ণনা গোটা সূরার সঙ্গে জড়িত। তিরমিযী ৩৩৩৩ নম্বরে ইবনে উমর (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: কিয়ামতের দিনকে যেন চোখের দেখায় দেখছে, এভাবে দেখতে যার ভালো লাগে, সে যেন পড়ে ইযাশ শামসু কুওভিরাত, আর ইযাস সামাউন ফাতারাত, আর ইযাস সামাউন শাক্কাত। এ তিনটি হলো এই সূরার, ৮২:১ আয়াতের ও ৮৪:১ আয়াতের শুরু। হাদিসের ঠিক পরে তিরমিযী নিজের মান নির্ণয় লিখে দেন: হাযা হাদিসুন হাসানুন গারীব, এটি হাসান গারীব হাদিস।"
          },
          {
            "en": "Tirmidhi adds that Hisham ibn Yusuf and others narrated it with the same chain, mentioning idha ash-shamsu kuwwirat and not the other two. Ibn Kathir cites the narration at the head of the surah, al-Qurtubi quotes it with Tirmidhi's grading, and al-Baghawi gives it through his own chain. What the hadith offers is not a reward counted out but a kind of seeing. These surahs are held up as a window onto the Day, and this verse is the place where the window opens.",
            "bn": "তিরমিযী আরও জানান, হিশাম ইবনে ইউসুফ ও অন্যরা একই সনদে হাদিসটি বর্ণনা করেছেন, তবে তাঁদের বর্ণনায় শুধু ইযাশ শামসু কুওভিরাত আছে, বাকি দুটির উল্লেখ নেই। ইবন কাসীর সূরার শুরুতেই বর্ণনাটি আনেন, কুরতুবী তা উদ্ধৃত করেন তিরমিযীর মান নির্ণয়সহ, আর বাগাভী আনেন নিজের সনদে। এ হাদিস কোনো গুনে দেওয়া সওয়াবের কথা বলে না, বলে এক রকম দেখার কথা। সূরাগুলো যেন কিয়ামতের দিকে খোলা জানালা, আর এই আয়াতেই সেই জানালা খোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Sentence Ends",
          "bn": "বাক্য ফুরোনোর আগে"
        },
        "p": [
          {
            "en": "What the commentaries consulted here say about the sun's end is what has been set out above: darkened, gone, faded, wrapped like a turban, thrown, overturned, cast down, brought into the Throne, folded up with the moon. They explain the words from the language of the Arabs and from reports, and none of them offers a mechanism. This article adds none either. The verse describes an event of the Day of Resurrection in the words Allah chose, and that restraint in the commentators is itself a lesson in how to read such a verse.",
            "bn": "সূর্যের পরিণতি নিয়ে এখানে দেখা তাফসীরগুলো যা বলে, তা ওপরেই সাজানো হয়েছে। অন্ধকার হওয়া, চলে যাওয়া, ম্লান হয়ে মিলিয়ে যাওয়া, পাগড়ির মতো প্যাঁচানো, ছুড়ে ফেলা, উল্টে দেওয়া, নিচে ফেলা, আরশে ঢুকিয়ে দেওয়া, চাঁদের সঙ্গে গুটিয়ে নেওয়া। তাঁরা শব্দের ব্যাখ্যা দেন আরবি ভাষা আর বর্ণনা থেকে। ঘটনাটা ঠিক কীভাবে ঘটবে, তার কলকবজার বিবরণ কেউ দেন না, এ লেখাও দেয় না। আয়াতটি আল্লাহর বাছাই করা শব্দে কিয়ামতের দিনের এক ঘটনার কথা বলে। তাফসীরকারদের এই সংযমই শেখায়, এমন আয়াত কীভাবে পড়তে হয়।"
          },
          {
            "en": "There is also the shape of the sentence. Idha opens a condition, and this verse supplies only its first part. A listener in Makkah heard the sun named, the sun he had watched rise all his life, and then had to wait through 81:2 and the verses after it to learn where the sentence was going. The waiting is part of the meaning. The most constant thing in his sky is set at the head of a sequence, and its turn comes first.",
            "bn": "বাক্যের গড়নটাও লক্ষ করার মতো। ইযা একটা শর্ত খুলে দেয়, আর এ আয়াত তার শুধু প্রথম অংশটুকু দেয়। মক্কার একজন শ্রোতা সূর্যের নাম শুনল, যে সূর্যকে সে সারা জীবন উঠতে দেখেছে। তারপর বাক্যটা কোথায় গিয়ে থামে জানতে তাকে অপেক্ষা করতে হলো ৮১:২ আর তার পরের আয়াতগুলো পর্যন্ত। এই অপেক্ষাও অর্থের অংশ। তার আকাশের সবচেয়ে স্থির জিনিসটিকে রাখা হলো সারির মাথায়, আর পালাটা আসে সবার আগে তারই।"
          },
          {
            "en": "For a reader now, the question is what follows in a life. The sun is the measure of every day, the thing by which prayers are timed and work is planned. The verse says plainly that it too will be wound up. Whatever a person leans on beneath it is more fragile still. Reading this verse slowly, as the hadith invites, is a way of seeing the Day before it arrives, while there is still daylight in which to act on what was seen.",
            "bn": "আজকের পাঠকের প্রশ্ন হলো, নিজের জীবনে এ আয়াত থেকে কী নেওয়ার আছে। সূর্যই প্রতিটি দিনের মাপকাঠি। এর হিসাবেই নামাজের ওয়াক্ত ঠিক হয়, কাজের পরিকল্পনা হয়। আয়াত পরিষ্কার বলে দেয়, তাকেও গুটিয়ে নেওয়া হবে। তার নিচে মানুষ যার উপর ভর দেয়, সে তো আরও ভঙ্গুর। হাদিস যেমন ডাকে, তেমনি ধীরে ধীরে এ আয়াত পড়া মানে দিনটা আসার আগেই তাকে দেখে নেওয়া। এখনো দিনের আলো আছে, যা দেখলেন সে অনুযায়ী আমল করার সময়ও আছে।"
          }
        ]
      }
    ]
  },
  "81:8": {
    "sections": [
      {
        "h": {
          "en": "A Small Figure Among Upheavals",
          "bn": "মহাপ্রলয়ের মাঝে ছোট্ট একজন"
        },
        "p": [
          {
            "en": "Wa-idha al-maw'udatu su'ilat: and when the girl buried alive is asked. In Arabic the clause is three words, and it stands in a run of clauses that each open with idha, when. Those before it in this surah speak of stars, mountains, pregnant camels, wild beasts, seas and souls. This one turns from the scale of the cosmos to a single small figure and says that she is asked. The next verse, 81:9, gives the content of the question, for what sin she was killed, and it has a place of its own.",
            "bn": "ওয়া ইযাল মাওঊদাতু সুইলাত: আর যখন জীবন্ত পুঁতে ফেলা মেয়েটিকে জিজ্ঞেস করা হবে। আরবিতে বাক্যটি মাত্র ৩টি শব্দের। এ সূরায় এর আগে একের পর এক বাক্য এসেছে, প্রতিটির শুরুতে ইযা, অর্থাৎ যখন। সেগুলোতে কথা হয়েছে তারকা, পাহাড়, গর্ভবতী উটনী, বন্য জন্তু, সাগর আর প্রাণের। এ বাক্যে এসে বিশাল বিশ্বজগৎ থেকে চোখ নেমে আসে একজন ছোট্ট মানুষের উপর, আর বলা হয় তাকে জিজ্ঞেস করা হবে। কী জিজ্ঞেস করা হবে, তা আছে পরের আয়াত ৮১:৯-এ: কোন অপরাধে তাকে হত্যা করা হলো। সে আয়াতের আলোচনা তার নিজের জায়গায়।"
          },
          {
            "en": "The Muyassar, which explains 81:1 to 81:10 in one paragraph, reads the whole run as a single scene of the Day of Resurrection and sets this clause in it plainly: the infant girl buried alive is asked on the Day of Resurrection. Ibn Kathir frames it the same way. Ma'arif al-Qur'an notes that the Day these verses describe is one on which every person is questioned about his deeds, and so asks why this single question is singled out. Its answer comes later in this article.",
            "bn": "মুয়াসসার ৮১:১ থেকে ৮১:১০ পর্যন্ত এক অনুচ্ছেদে ব্যাখ্যা করে। পুরো ধারাটিকে সে কিয়ামতের একটিই দৃশ্য হিসেবে পড়ে, আর এ বাক্যটিকে সাদামাটা ভাষায় সেখানে বসায়: জীবন্ত দাফন করা শিশুকন্যাকে কিয়ামতের দিন জিজ্ঞেস করা হবে। ইবন কাসীরও একই কাঠামোয় পড়েন। মাআরিফুল কুরআন মনে করিয়ে দেয়, এ আয়াতগুলো যে দিনের কথা বলছে, সেদিন প্রত্যেককেই তার আমল নিয়ে প্রশ্ন করা হবে। তাহলে শুধু এই একটি প্রশ্ন আলাদা করে বলা হলো কেন? তার জবাব এ লেখার পরের দিকে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Name al-Maw'uda Carries",
          "bn": "মাওঊদা নামের ভেতরের কথা"
        },
        "p": [
          {
            "en": "At-Tabari defines al-maw'uda as al-madfuna hayya, the one buried while alive, and gives the verb in its forms: wa'adahu, ya'iduhu, wa'dan. Al-Baghawi says she is the girl buried alive, and al-Qurtubi gives two glosses: al-maqtula, the one killed, and the girl buried while alive. Both al-Qurtubi and al-Baghawi explain the name from the earth thrown down on her, which weighs her down until she dies. The Muyassar uses the word tifla, a little girl, and Ma'arif al-Qur'an says she was buried as soon as she was born.",
            "bn": "তাবারী মাওঊদার অর্থ দেন আল-মাদফূনা হাইয়া, যাকে জীবিত অবস্থায় দাফন করা হয়েছে। ক্রিয়ার রূপগুলোও তিনি উল্লেখ করেন: ওয়াআদাহু, ইয়াইদুহু, ওয়া'দান। বাগাভী বলেন, সে সেই মেয়ে যাকে জীবন্ত মাটিচাপা দেওয়া হয়েছে। কুরতুবী দুটি অর্থ দেন: আল-মাকতূলা, অর্থাৎ নিহত, আর সেই মেয়ে যাকে জীবিত অবস্থায় পুঁতে ফেলা হয়েছে। নামটি কেন, কুরতুবী ও বাগাভী দুজনেই একই কারণ দেখান। তার উপর যে মাটি ফেলা হয়, তা তাকে ভারে চেপে ধরে, শেষে সে মারা যায়। মুয়াসসার ব্যবহার করে তিফলা শব্দ, অর্থাৎ ছোট্ট মেয়ে। মাআরিফুল কুরআন বলে, জন্মের পরপরই তাকে মাটিচাপা দেওয়া হতো।"
          },
          {
            "en": "Ibn Kathir's gloss names the motive inside the definition: she is the girl whom the people of the Jahiliyya would push down into the earth out of dislike for daughters. He also reports Ibn 'Abbas saying simply, she is the one buried. As-Sa'di folds his gloss into a description of the act: burying daughters while they were still alive. None of them dwells on the scene; they give the word its meaning and move to what the verse does with it.",
            "bn": "ইবন কাসীর সংজ্ঞার ভেতরেই কারণটা বলে দেন: সে সেই মেয়ে, জাহিলিয়াতের লোকেরা মেয়েসন্তানের প্রতি বিতৃষ্ণা থেকে যাকে মাটিতে গুঁজে দিত। ইবন আব্বাস (রাঃ)-এর ছোট্ট একটি কথাও তিনি আনেন: সে হলো দাফন করা মেয়েটি। সা'দী তাঁর ব্যাখ্যা জুড়ে দেন কাজটির বর্ণনার সঙ্গে: জীবিত অবস্থায় মেয়েদের দাফন করা। দৃশ্যটির উপর কেউই বেশিক্ষণ থামেন না। শব্দের অর্থ বলে তাঁরা চলে যান আয়াতটি তা দিয়ে কী করছে সেদিকে।"
          },
          {
            "en": "On the root itself there is a small difference. Al-Qurtubi links the verb to 2:255, wa-la ya'uduhu hifzuhuma, the keeping of the heavens and the earth does not weigh Him down, and so reads the name through the sense of weighing down. A note in al-Baghawi's text says the opposite: tracing it to that root, awd, is not sound in form, because al-maw'uda comes from wa'd, and he lists wa'ada, ya'idu, wa'dan, wa'id for the doer and maw'ud for the one done to. Both readings are kept here, with no choice between them.",
            "bn": "ধাতু নিয়ে ছোট একটি মতভেদ আছে। কুরতুবী ক্রিয়াটিকে ২:২৫৫-এর সঙ্গে মেলান: ওয়া লা ইয়াঊদুহু হিফযুহুমা, আসমান ও জমিনের রক্ষণাবেক্ষণ তাঁকে ক্লান্ত বা ভারাক্রান্ত করে না। ফলে তিনি নামটি বোঝেন ভার চাপানোর অর্থ দিয়ে। বাগাভীর পাঠে একটি টীকা উল্টো কথা বলে। শব্দটিকে আওদ ধাতুতে ফেরানো গঠনের দিক থেকে ঠিক নয়, কারণ মাওঊদা এসেছে ওয়া'দ থেকে। সেখানে রূপগুলোও দেওয়া আছে: ওয়াআদা, ইয়াইদু, ওয়া'দান, কর্তা ওয়াইদ আর যার উপর কাজটি হয় সে মাওঊদ। দুটি মতই এখানে রাখা হলো, কোনোটিকে বেছে নেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Motives as the Commentators Give Them",
          "bn": "তাফসীরে বলা কারণগুলো"
        },
        "p": [
          {
            "en": "The commentators do not give one reason, and their lists differ. Ibn Kathir names dislike of daughters. Al-Baghawi names fear of shame and of need. As-Sa'di says it was done without any cause except fear of poverty. Ma'arif al-Qur'an says the birth of a girl was taken as a matter of shame for her father. Al-Qurtubi gives two traits: first, they said the angels were daughters of Allah, and so they joined daughters to Him; second, fear of want and destitution, or fear of captivity and enslavement. He refers back to his fuller discussion at 16:59, am yadussuhu fi at-turab.",
            "bn": "তাফসীরকারেরা একটিমাত্র কারণ বলেন না, তাঁদের তালিকাও এক নয়। ইবন কাসীর বলেন মেয়েসন্তানের প্রতি বিতৃষ্ণার কথা। বাগাভী বলেন লজ্জা আর অভাবের ভয়ের কথা। সা'দী বলেন, দারিদ্র্যের ভয় ছাড়া এর পেছনে আর কোনো কারণ ছিল না। মাআরিফুল কুরআনের ভাষায়, মেয়ের জন্মকে বাবার জন্য লজ্জার বিষয় মনে করা হতো। কুরতুবী দুটি স্বভাবের কথা বলেন। প্রথমত, তারা বলত ফেরেশতারা আল্লাহর কন্যা, তাই মেয়েদের তারা তাঁর সঙ্গেই জুড়ে দিত। দ্বিতীয়ত, অভাব ও নিঃস্বতার ভয়, অথবা বন্দিত্ব ও দাসত্বের ভয়। বিস্তারিত আলোচনার জন্য তিনি ফিরে যেতে বলেন ১৬:৫৯-এ, আম ইয়াদুসসুহু ফিত তুরাব।"
          },
          {
            "en": "Qatada, in both at-Tabari and al-Qurtubi, puts the wrong in one contrast: a man would kill his daughter and feed his dog. At-Tabari reports that Allah faulted them for it; al-Qurtubi that He reproached them and warned them with this verse. Al-Qurtubi also records that people of standing among them refused the practice and stopped others from it, and that al-Farazdaq took pride in his grandfather Sa'sa'a, who would buy such girls from their fathers and had saved seventy by the time Islam came. Al-Qurtubi and al-Baghawi carry a report from Ibn 'Abbas on how it was done; its details are left aside here.",
            "bn": "কাতাদার একটি কথা তাবারী ও কুরতুবী দুজনেই আনেন। অন্যায়টাকে তিনি এক তুলনায় ধরেন: লোকটি নিজের মেয়েকে মেরে ফেলত, অথচ নিজের কুকুরকে খাইয়ে পালত। তাবারীর বর্ণনায় আল্লাহ তাদের এ কাজের নিন্দা করেছেন। কুরতুবীর বর্ণনায় তিনি তাদের তিরস্কার করেছেন আর এ আয়াত দিয়ে সতর্ক করেছেন। কুরতুবী এটাও লিখেছেন যে তাদের মধ্যে মর্যাদাবান লোকেরা এ কাজ করত না, অন্যদেরও বাধা দিত। কবি ফারাযদাক গর্ব করতেন তাঁর দাদা সা'সাআকে নিয়ে, যিনি এমন মেয়েদের তাদের বাবাদের কাছ থেকে কিনে নিতেন। ইসলাম আসার সময় পর্যন্ত তিনি সত্তরজনকে বাঁচিয়েছিলেন। কাজটি কীভাবে করা হতো, সে বিষয়ে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা কুরতুবী ও বাগাভী উল্লেখ করেছেন। তার খুঁটিনাটি এখানে আনা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked, or Herself Asking",
          "bn": "প্রশ্নের মুখে, না নিজেই প্রশ্নকারী"
        },
        "p": [
          {
            "en": "Ibn Kathir states that su'ilat, she is asked, is the reading of the majority. He then reports, through 'Ali ibn Abi Talha, that Ibn 'Abbas took su'ilat to mean sa'alat, she asked, and that Abu ad-Duha said the same: she asked, meaning she demanded her blood. He adds that the like is reported from as-Suddi and Qatada. In this sense the verb is passive in form, yet the girl is the one pressing her claim.",
            "bn": "ইবন কাসীর জানান, সুইলাত, অর্থাৎ তাকে জিজ্ঞেস করা হবে, এটিই অধিকাংশের পাঠ। তারপর আলী ইবন আবী তালহার সূত্রে তিনি বর্ণনা করেন, ইবন আব্বাস (রাঃ) সুইলাতের অর্থ নিয়েছেন সাআলাত, অর্থাৎ সে জিজ্ঞেস করবে। আবুদ দুহাও একই কথা বলেছেন: সে জিজ্ঞেস করবে, মানে নিজের রক্তের দাবি তুলবে। সুদ্দী ও কাতাদা থেকেও এমন বর্ণনা আছে বলে তিনি যোগ করেন। এ অর্থে ক্রিয়াটি গঠনে কর্মবাচ্য হলেও দাবি তুলছে মেয়েটি নিজেই।"
          },
          {
            "en": "At-Tabari sets out the difference among the readers. Abu ad-Duha, Muslim ibn Subayh, read sa'alat, meaning that the buried girl asks those who buried her for what sin they killed her; at-Tabari gives his glosses, she demanded her blood and she asked her killers. The general body of readers in the cities read su'ilat, she was asked. At-Tabari judges su'ilat the sounder of the two, because the authoritative readers agree on it. He also explains why the question then reports her killing in the third person: it is reported speech, as when someone says, 'Abdullah said: for what sin was he struck?",
            "bn": "কারীদের মতভেদ তাবারী সাজিয়ে দেখান। আবুদ দুহা, মুসলিম ইবন সুবাইহ, পড়েছেন সাআলাত। তখন অর্থ দাঁড়ায়, পুঁতে ফেলা মেয়েটি যারা তাকে পুঁতেছে তাদের জিজ্ঞেস করবে, কোন অপরাধে তারা তাকে মেরেছে। আবুদ দুহার ব্যাখ্যাও তাবারী আনেন: সে রক্তের দাবি তুলবে, সে তার হত্যাকারীদের প্রশ্ন করবে। শহরগুলোর সাধারণ কারীরা পড়েছেন সুইলাত, তাকে জিজ্ঞেস করা হবে। তাবারীর বিচারে দুই পাঠের মধ্যে সুইলাতই বেশি সঠিক, কারণ নির্ভরযোগ্য কারীরা এর উপর একমত। এ পাঠে প্রশ্নটা মেয়েটির মুখে, তবু তার হত্যার কথা কেন \"আমাকে\" না বলে \"তাকে\" বলে আসে, তাও তিনি ব্যাখ্যা করেন। কারণ এটি অন্যের কথা বর্ণনা করা, যেমন কেউ বলে: আবদুল্লাহ বলল, কোন অপরাধে তাকে মারা হলো?"
          },
          {
            "en": "Al-Qurtubi adds that Ibn 'Abbas used to read sa'alat, and that so it stands in the codex of Ubayy. In that reading, he reports from Ibn 'Abbas, the girl holds on to her father and asks him why she was killed, and he has no excuse. Al-Qurtubi also notes that the verb of the next verse has been read with a doubled middle letter, qutthilat, an intensive form. These readings belong to the next verse and are named here only for how they shape this clause.",
            "bn": "কুরতুবী যোগ করেন, ইবন আব্বাস (রাঃ) পড়তেন সাআলাত, আর উবাই (রাঃ)-এর মুসহাফেও এভাবেই আছে। এ পাঠে, ইবন আব্বাস (রাঃ)-এর বরাতে তিনি বলেন, মেয়েটি তার বাবাকে আঁকড়ে ধরে জানতে চাইবে, কেন তাকে মারা হলো। আর বাবার কাছে কোনো অজুহাত থাকবে না। কুরতুবী এটাও উল্লেখ করেন যে পরের আয়াতের ক্রিয়াটি মাঝের অক্ষরে তাশদীদ দিয়ে কুত্তিলাত পড়া হয়েছে, যা অর্থে আরও জোরালো। এ পাঠগুলো আসলে পরের আয়াতের বিষয়। এখানে শুধু নাম উল্লেখ করা হলো, কারণ এ বাক্যের অর্থে এগুলোর প্রভাব আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Meant for Another",
          "bn": "প্রশ্ন একজনকে, লক্ষ্য আরেকজন"
        },
        "p": [
          {
            "en": "Al-Qurtubi reads the asking as tawbikh, a rebuke aimed at her killer, the way a person asks a child who has been struck, why were you struck, what did you do? He cites al-Hasan: Allah meant to rebuke her killer, because she was killed for no sin. Al-Qurtubi says the majority hold this view, and compares 5:116, where Allah asks 'Isa (AS), did you say to the people, as rebuke and reproof to them. Asking her, he says, is more forceful than asking about her, because once it is plain she had no sin, the wrong is graver and the proof against her killer clearer.",
            "bn": "কুরতুবী এ প্রশ্নকে বলেন তাওবীখ, অর্থাৎ হত্যাকারীর প্রতি তিরস্কার। যেমন মার খাওয়া কোনো শিশুকে জিজ্ঞেস করা হয়, তোমাকে মারল কেন, তোমার দোষ কী? তিনি আল-হাসানের কথা আনেন: আল্লাহ তার হত্যাকারীকে তিরস্কার করতে চেয়েছেন, কারণ বিনা অপরাধে তাকে হত্যা করা হয়েছে। কুরতুবীর মতে অধিকাংশ আলেম এ মত পোষণ করেন। তিনি তুলনা টানেন ৫:১১৬-এর সঙ্গে, যেখানে আল্লাহ ঈসা (আঃ)-কে জিজ্ঞেস করেন, তুমি কি লোকদের বলেছিলে? সেখানে প্রশ্নটা ছিল ওই লোকদের প্রতি তিরস্কার ও ভর্ৎসনা। কুরতুবী বলেন, তার হত্যা সম্পর্কে অন্যকে না জিজ্ঞেস করে তাকেই জিজ্ঞেস করা বেশি জোরালো। যখন স্পষ্ট হয়ে যায় তার কোনো দোষ ছিল না, অন্যায়টা আরও ভারী হয়, আর হত্যাকারীর বিরুদ্ধে প্রমাণ আরও পরিষ্কার হয়।"
          },
          {
            "en": "Ibn Kathir calls the question a tahdid, a threat to her killer, and puts it in one line: if the one wronged is asked, what then will the wrongdoer expect? The Muyassar holds two aims together, tatyib, easing her heart, and tabkit, shaming the one who buried her. Al-Qurtubi also reports some scholars who take su'ilat as tulibat, demanded, as the blood of the slain is demanded, citing 33:15, wa-kana 'ahdu Allahi mas'ula, the covenant with Allah is to be answered for. On that reading she is sought from them, and they are told, where are your children?",
            "bn": "ইবন কাসীর প্রশ্নটিকে বলেন তাহদীদ, হত্যাকারীর প্রতি হুমকি। এক বাক্যেই তিনি কথাটা বলে দেন: মজলুমকেই যদি জিজ্ঞেস করা হয়, তাহলে জালিম কী আশা করবে? মুয়াসসার দুটি উদ্দেশ্য একসঙ্গে ধরে। একটি তাতয়ীব, মেয়েটির মন শান্ত করা। অন্যটি তাবকীত, যে তাকে পুঁতেছে তাকে লজ্জায় ফেলা। কুরতুবী কিছু আলেমের মতও আনেন, যাঁরা সুইলাতের অর্থ নেন তুলিবাত, অর্থাৎ দাবি করা হবে, যেমন নিহতের রক্তের দাবি করা হয়। তাঁরা দলিল দেন ৩৩:১৫ থেকে: ওয়া কানা আহদুল্লাহি মাসঊলা, আল্লাহর সঙ্গে করা অঙ্গীকারের জবাবদিহি করতে হবে। এ অর্থে মেয়েটিকে তাদের কাছে দাবি করা হবে, আর তাদের বলা হবে: তোমাদের সন্তানেরা কোথায়?"
          },
          {
            "en": "Ma'arif al-Qur'an keeps both directions open. Apparently, it says, the question is put to the girl herself, which gives her the chance to show her complete innocence, so that those who did it are brought before the Divine court. It is also possible, it adds, that the question is put to the killers, asking why they did it. These readings are not merged here, and the verse holds all of them: a question put to the girl who was wronged that lands on whoever wronged her.",
            "bn": "মাআরিফুল কুরআন দুটি দিকই খোলা রাখে। বাহ্যত মনে হয়, প্রশ্নটা করা হবে মেয়েটিকেই। এতে সে নিজের পুরো নির্দোষিতা দেখানোর সুযোগ পাবে, আর যারা কাজটি করেছে, তাদের আল্লাহর আদালতে দাঁড় করানো হবে। মাআরিফুল কুরআন আরও বলে, এমনও হতে পারে যে প্রশ্নটা করা হবে হত্যাকারীদের: কেন তারা এ কাজ করল। এখানে মতগুলো এক করে ফেলা হয়নি, আর আয়াতটি সবগুলোকেই ধারণ করে: প্রশ্ন করা হয় মজলুম মেয়েটিকে, আর আঘাত লাগে যে তার উপর জুলুম করেছে তার গায়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "No One to Bring Her Case",
          "bn": "যার নালিশ তোলার কেউ ছিল না"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an answers its own question, why this one case is singled out on a Day when every deed is questioned. Such a girl, it says, was the victim of her own parents' cruelty, so there was no one to raise a complaint against the act or demand retaliation, all the more when she was buried in secret with no evidence left. The verse therefore signifies, it says, that on the Day of Reckoning even those wrongdoers will be exposed against whom there was no evidence and no one to stand up for the victim. It closes: Allah knows best.",
            "bn": "যেদিন প্রতিটি আমলের প্রশ্ন হবে, সেদিন এই একটি মামলা আলাদা করে বলা হলো কেন? মাআরিফুল কুরআন নিজের প্রশ্নের জবাব নিজেই দেয়। এমন মেয়ে ছিল নিজের মা-বাবার নিষ্ঠুরতার শিকার। ফলে কাজটির বিরুদ্ধে নালিশ তোলার বা কিসাস দাবি করার কেউ ছিল না। আর তাকে যখন গোপনে দাফন করা হতো, কোনো প্রমাণও থাকত না। তাই মাআরিফুল কুরআনের মতে আয়াতটির ইঙ্গিত হলো, হিসাবের দিনে এমন অপরাধীরাও ধরা পড়বে, যাদের বিরুদ্ধে প্রমাণ ছিল না, আর ভুক্তভোগীর পক্ষে দাঁড়ানোর মতো কেউ ছিল না। কথাটি শেষ হয় এভাবে: আল্লাহই ভালো জানেন।"
          },
          {
            "en": "Al-Qurtubi draws a further point from the verse: that punishment is deserved only for a sin, and that the children of idolaters are not punished. Ibn Kathir reports Ibn 'Abbas, citing this verse, saying that the children of the idolaters are in Paradise. Ibn Kathir also gathers several narrations on the fate of the buried girl, and they do not all agree; he sets them out without settling the matter in this place. This article reports the difference without weighing it.",
            "bn": "কুরতুবী আয়াত থেকে আরেকটি কথা বের করেন: শাস্তি প্রাপ্য হয় কেবল অপরাধের কারণে, আর মুশরিকদের শিশুদের শাস্তি দেওয়া হবে না। ইবন কাসীর ইবন আব্বাস (রাঃ)-এর একটি কথা বর্ণনা করেন, যেখানে তিনি এ আয়াতকে দলিল হিসেবে এনে বলেন, মুশরিকদের শিশুরা জান্নাতে। পুঁতে ফেলা মেয়েটির পরিণতি নিয়ে ইবন কাসীর আরও কয়েকটি বর্ণনা একত্র করেন। সেগুলো সব একই কথা বলে না, আর এ জায়গায় তিনি বিষয়টির মীমাংসা না করে সেগুলো সাজিয়ে রাখেন। এ লেখা মতভেদটুকু জানিয়ে রাখছে, কোনো দিকে ভার দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Inside a Prophetic Report",
          "bn": "নবীজির ﷺ এক বাণীতে আয়াতটি"
        },
        "p": [
          {
            "en": "Muslim records in his Sahih (1442b) a report from Judama bint Wahb, sister of 'Ukkasha, which reads: I went to Allah's Messenger (ﷺ) along with some persons and he was saying: I intended to prohibit cohabitation with the suckling women, but I considered the Greeks and Persians, and saw that they suckle their children and this thing (cohabitation) does not do any harm to them (to the suckling women). Then they asked him about 'azl, whereupon he said: That is the secret (way of) burying alive, and Ubaidullah has made this addition in the hadith transmitted by al-Muqri and that is: When the one buried alive is asked.",
            "bn": "ইমাম মুসলিম তাঁর সহীহ গ্রন্থে (১৪৪২খ) উক্কাশার বোন জুদামা বিনতে ওয়াহব (রাঃ)-এর একটি বর্ণনা এনেছেন। তিনি বলেন, কিছু লোকের সঙ্গে আমি রাসূলুল্লাহ ﷺ-এর কাছে উপস্থিত হলাম। তিনি বলছিলেন: দুধ পান করানোর সময়ে স্ত্রীর সঙ্গে মিলন নিষেধ করার ইচ্ছা আমার হয়েছিল। তারপর রোম ও পারস্যের লোকদের দিকে তাকিয়ে দেখলাম, তারা সন্তানকে দুধ খাওয়ানোর সময়েও এমন করে, অথচ এতে তাদের কোনো ক্ষতি হয় না। এরপর লোকেরা তাঁকে আযল সম্পর্কে জিজ্ঞেস করল। তিনি বললেন: ওটা হলো গোপন জীবন্ত দাফন। বর্ণনাকারী উবাইদুল্লাহ মুকরির সূত্রে এর সঙ্গে যোগ করেছেন: আর তা হলো, ওয়া ইযাল মাওঊদাতু সুইলাত।"
          },
          {
            "en": "Ibn Kathir and Ma'arif al-Qur'an both cite this report. The words of the verse come in one transmission only, through Ubaydullah from al-Muqri, and Muslim's text says so. It stands in Muslim's Sahih, and Muslim gives no separate grading. The page's English adds '(to the suckling women)' after the words about harm; the Arabic, as al-Qurtubi quotes it, says it does not harm their children. Ma'arif al-Qur'an notes other hadith in which the Prophet ﷺ is reported to have allowed 'azl, or kept silent when asked, and limits its permissibility to genuine need. That ruling belongs to the jurists and is reported here, not weighed.",
            "bn": "ইবন কাসীর ও মাআরিফুল কুরআন দুজনেই এ বর্ণনাটি উল্লেখ করেছেন। আয়াতের শব্দগুলো এসেছে কেবল একটি সূত্রে, উবাইদুল্লাহর মাধ্যমে মুকরি থেকে, আর মুসলিমের পাঠেই সে কথা বলা আছে। এটি মুসলিমের সহীহ গ্রন্থে আছে, আর মুসলিম আলাদা কোনো মান উল্লেখ করেননি। সাইটের ইংরেজি অনুবাদে ক্ষতির কথার পর যোগ করা আছে '(to the suckling women)'; কুরতুবী আরবিতে যেভাবে উদ্ধৃত করেন, সেখানে বলা আছে এতে তাদের সন্তানদের ক্ষতি হয় না। মাআরিফুল কুরআন আরও কিছু হাদিসের কথা বলে, যেখানে বর্ণিত আছে যে নবীজি ﷺ আযলের অনুমতি দিয়েছেন, বা জিজ্ঞেস করা হলে চুপ থেকেছেন। তবে এর বৈধতা সে প্রকৃত প্রয়োজনের মধ্যে সীমিত রাখে। এ বিধান ফকিহদের আলোচনার বিষয়। এখানে শুধু জানিয়ে রাখা হলো, কোনো রায় দেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Charge Falls",
          "bn": "অভিযোগ কার দিকে যায়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks only of what it names: a wrong the commentators place in the Jahiliyya, done by some and, as al-Qurtubi records, refused and resisted by others among the same people. It licenses nothing against any living person or community, and gives no ground for naming any people, tribe or land today as heirs of that act. In every reading above, the blame falls on the one who did the wrong, and the honour of being heard falls on the girl. Neither is passed on to anyone who shares her language or her country.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ঠিক ততটুকুই বলে, যতটুকু পাঠে আছে। তাফসীরকারেরা এ অন্যায়কে জাহিলিয়াতের কাজ বলে চিহ্নিত করেন। কিছু লোক তা করত, আর কুরতুবীর বর্ণনা অনুযায়ী একই সমাজের অন্যরা তা প্রত্যাখ্যান করত ও ঠেকাত। এ আয়াত কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। আজকের কোনো জাতি, গোত্র বা দেশকে ওই কাজের উত্তরাধিকারী বলার কোনো ভিত্তিও দেয় না। ওপরের প্রতিটি পাঠে দোষ পড়ে যে অন্যায় করেছে তার উপর, আর কথা বলার মর্যাদা পায় মেয়েটি। এ দুটোর কোনোটিই তার ভাষা বা দেশের অন্য কারও ঘাড়ে যায় না।"
          },
          {
            "en": "What remains for the reader is the shape Ma'arif al-Qur'an pointed to. A wrong with no witness, no claimant and no evidence is still raised, and the one who could not speak is the one invited to speak. That reaches past one practice. Every household has someone with less voice than the rest: a child, an elder, a worker, a daughter. The verse does not ask the reader to judge others by it. It asks whether, on that Day, anyone in the reader's own care would have a question to put.",
            "bn": "পাঠকের জন্য যা থাকে, তা সেই ছবি, যার দিকে মাআরিফুল কুরআন ইঙ্গিত করেছে। যে অন্যায়ের কোনো সাক্ষী নেই, দাবিদার নেই, প্রমাণ নেই, সে অন্যায়ও তোলা হবে। আর যে কথা বলতে পারেনি, তাকেই বলার সুযোগ দেওয়া হবে। শিক্ষাটা একটি প্রথার গণ্ডি ছাড়িয়ে যায়। প্রতিটি ঘরেই এমন কেউ থাকে, যার কণ্ঠ বাকিদের চেয়ে দুর্বল: শিশু, বয়স্ক মানুষ, কাজের লোক, মেয়ে। এ আয়াত দিয়ে অন্যদের বিচার করতে বলা হয়নি। প্রশ্নটা পাঠকের নিজের কাছে: সেদিন তাঁর দায়িত্বে থাকা কারও কি তোলার মতো কোনো প্রশ্ন থাকবে?"
          }
        ]
      }
    ]
  },
  "81:12": {
    "sections": [
      {
        "h": {
          "en": "Three Words on the Fire",
          "bn": "আগুন নিয়ে তিনটি শব্দ"
        },
        "p": [
          {
            "en": "Wa-idha al-jahimu su''irat: and when Hellfire is set ablaze. The verse is three Arabic words. Wa-idha is and when; al-jahimu is the name the verse uses for the Fire; and su''irat is a passive verb in the feminine, set ablaze, with no doer named. The sentence shows the fire at the moment it is lit and says nothing more. It is the eleventh of the twelve clauses in this surah that open with the word idha, when, a run that began at 81:1.",
            "bn": "ওয়া ইযাল জাহীমু সু'ইরাত: আর যখন জাহান্নামকে উসকে দেওয়া হবে। আয়াতটি আরবিতে তিনটি শব্দ। ওয়া ইযা মানে আর যখন। আল-জাহীম সেই নাম, যে নামে আয়াতটি আগুনকে ডাকছে। আর সু'ইরাত স্ত্রীলিঙ্গের কর্মবাচ্য ক্রিয়া, অর্থ উসকে দেওয়া হলো, কর্তার নাম নেই। বাক্যটি আগুনকে দেখায় ঠিক জ্বলে ওঠার মুহূর্তে, এর বেশি কিছু বলে না। এ সূরায় ইযা, অর্থাৎ যখন, দিয়ে শুরু হওয়া বারোটি বাক্যের এটি এগারোতম। সেই ধারা শুরু হয়েছিল ৮১:১ আয়াতে।"
          },
          {
            "en": "None of these clauses is finished on its own. Each one says when, and the reader waits for then. The waiting runs past the buried girl of 81:8, the spread pages of 81:10 and the sky stripped away in 81:11, and it does not end here either. The next verse, 81:13, brings Paradise near, and only at 81:14 does the sentence arrive at what a soul will know. This article stays with the one clause about the fire, and with what the commentators consulted for it actually say.",
            "bn": "এ বাক্যগুলোর কোনোটিই একা সম্পূর্ণ নয়। প্রতিটি বলে যখন, আর পাঠক অপেক্ষা করে তখন শোনার জন্য। ৮১:৮ আয়াতের জীবন্ত পুঁতে ফেলা কন্যা, ৮১:১০ আয়াতের খুলে ধরা আমলনামা, ৮১:১১ আয়াতে সরিয়ে ফেলা আসমান, সবকিছু পার হয়ে অপেক্ষা চলতেই থাকে। এখানেও শেষ হয় না। পরের আয়াত ৮১:১৩ জান্নাতকে কাছে আনে। কেবল ৮১:১৪ আয়াতে এসে বাক্যটি পৌঁছায় সেই কথায়, যা প্রতিটি প্রাণ জানতে পারবে। এই লেখা থাকবে আগুনের এই একটি বাক্যের সঙ্গে, আর এর ব্যাখ্যায় তাফসীরকারেরা আসলে যা বলেছেন তার সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Heated, Kindled, Made to Flare",
          "bn": "তপ্ত, প্রজ্বলিত, দাউদাউ"
        },
        "p": [
          {
            "en": "The commentators read su''irat with a small cluster of near words. Ibn Kathir gives two early glosses side by side: as-Suddi said uhmiyat, it was heated, and Qatada said uqidat, it was kindled. At-Tabari puts the two together in his own paraphrase: when the Jahim has fire kindled upon it and so is heated. Ibn Kathir does not choose between the two glosses, and there is no need to: heat and kindling sit in one picture, the second producing the first.",
            "bn": "সু'ইরাত শব্দটি তাফসীরকারেরা বুঝিয়েছেন কাছাকাছি কয়েকটি শব্দ দিয়ে। ইবন কাসীর প্রথম যুগের দুটি ব্যাখ্যা পাশাপাশি রাখেন। সুদ্দী বলেছেন উহমিয়াত, অর্থাৎ তাতিয়ে তোলা হলো। কাতাদা বলেছেন ঊকিদাত, অর্থাৎ জ্বালানো হলো। তাবারী নিজের ভাষায় দুটিকে এক করেন: যখন জাহীমের উপর আগুন জ্বালানো হবে, ফলে তা তপ্ত হয়ে উঠবে। ইবন কাসীর দুটির মধ্যে কোনোটিকে বেছে নেননি, বেছে নেওয়ার দরকারও নেই। জ্বালানো আর তপ্ত হওয়া একই ছবির দুই অংশ, প্রথমটি থেকেই দ্বিতীয়টি আসে।"
          },
          {
            "en": "Al-Qurtubi adds a step: uqidat fa-udrimat, it was kindled and set raging, for the disbelievers, and its heat was increased. He then notes that Arabic says both sa''artu an-nar and as'artuha for lighting a fire, so the verb is ordinary speech for stoking. As-Sa'di takes the image furthest. He glosses the verse as: fire is kindled upon it, so it catches and blazes up, flaring in a way it never flared before. For him the point is not only that the fire burns but that it burns as it has not yet burned.",
            "bn": "কুরতুবী আরেক ধাপ যোগ করেন: ঊকিদাত ফা-উদরিমাত, জ্বালানো হলো, তারপর দাউদাউ করে ধরানো হলো কাফিরদের জন্য, আর এর উত্তাপ বাড়িয়ে দেওয়া হলো। তিনি আরও জানান, আগুন ধরানোর অর্থে আরবরা সা''আরতুন নার আর আস'আরতুহা দুটোই বলে। তাই ক্রিয়াটি আগুন উসকে দেওয়ার সাধারণ কথ্য শব্দ। ছবিটা সবচেয়ে জোরালো সা'দীর ব্যাখ্যায়। তাঁর ব্যাখ্যা: এর উপর আগুন জ্বালানো হবে, ফলে তা জ্বলে উঠবে, এমনভাবে দাউদাউ করবে যেভাবে আগে কখনো করেনি। তাঁর কাছে কথাটা শুধু আগুন জ্বলার নয়, এমনভাবে জ্বলার যা এর আগে ঘটেনি।"
          },
          {
            "en": "Al-Baghawi keeps his gloss to a phrase: uqidat li-a'da'i Allah, it was kindled for the enemies of Allah. What none of the commentaries consulted here does is stop on the word al-jahim itself. None of them explains it as a name of Hell or traces its sense, and this article will not supply a gloss they do not give. The verse's own translation renders it Hellfire, and the commentators move straight on to the verb, which is where their attention is.",
            "bn": "বাগাভী তাঁর ব্যাখ্যা এক বাক্যাংশে সারেন: ঊকিদাত লি-আ'দাইল্লাহ, আল্লাহর শত্রুদের জন্য জ্বালানো হলো। তবে যে তাফসীরগুলো এখানে দেখা হয়েছে, তার কোনোটিই আল-জাহীম শব্দটির উপর থামেনি। কেউ একে জাহান্নামের নাম হিসেবে ব্যাখ্যা করেননি, এর অর্থের উৎসও খোঁজেননি। তাঁরা যে ব্যাখ্যা দেননি, এই লেখাও তা নিজে থেকে বানাবে না। আয়াতের অনুবাদে শব্দটি জাহান্নাম। তাফসীরকারেরা সরাসরি চলে যান ক্রিয়াপদে, কারণ তাঁদের মনোযোগ সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "One Letter, Read Twice",
          "bn": "একটি হরফ, দুই পাঠ"
        },
        "p": [
          {
            "en": "The verb comes down in two recognised readings. In one, the middle letter is doubled, su''irat; in the other it is light, su'irat. At-Tabari reports that most of the readers of Madinah read it doubled, meaning that fire was kindled upon it time after time, and that most of the readers of Kufa read it light. He then gives his verdict: both are well-known readings, and whichever of them a reader recites, he is correct.",
            "bn": "ক্রিয়াটি দুটি স্বীকৃত পাঠে এসেছে। একটিতে মাঝের হরফে তাশদীদ: সু''ইরাত। অন্যটিতে তাশদীদ নেই, হালকা উচ্চারণে: সু'ইরাত। তাবারী জানান, মদীনার অধিকাংশ কারী তাশদীদ দিয়ে পড়েছেন, যার অর্থ এর উপর বারবার আগুন জ্বালানো হয়েছে। আর কূফার অধিকাংশ কারী পড়েছেন হালকা করে। তারপর তিনি রায় দেন: দুটিই সুপরিচিত পাঠ। কারী যেটিই পড়ুন, সঠিক পড়েছেন।"
          },
          {
            "en": "Al-Qurtubi gives the same two readings with different names attached. The common reading, he says, is the light form, from sa'ir, blaze. Nafi', Ibn Dhakwan and Ruways read it doubled, because the fire was kindled once after another. Al-Baghawi names the doubled reading's people more widely: the people of Madinah and of Sham, and Hafs from 'Asim; the rest, he says, read it light. Al-Baghawi does not say what the doubling adds; at-Tabari and al-Qurtubi both say it carries repetition, a fire stoked again and again rather than lit once.",
            "bn": "কুরতুবীও এই দুটি পাঠ আনেন, তবে কারীদের নাম ভিন্ন। তাঁর মতে সাধারণ পাঠ হালকাটি, সা'ঈর অর্থাৎ লেলিহান আগুন থেকে। নাফি', ইবন যাকওয়ান আর রুওয়াইস তাশদীদ দিয়ে পড়েছেন, কারণ আগুন একবারের পর আরেকবার জ্বালানো হয়েছে। বাগাভী তাশদীদের পাঠকদের তালিকা আরও বড় করেন: মদীনা আর শামের লোকেরা, আর আসিম থেকে হাফস। বাকিরা হালকা পড়েছেন। তাশদীদে বাড়তি কী অর্থ আসে, বাগাভী তা বলেননি। তাবারী আর কুরতুবী দুজনেই বলেন, এতে পুনরাবৃত্তি বোঝায়। আগুন একবার ধরানো নয়, বারবার উসকে দেওয়া।"
          },
          {
            "en": "The lists do not match name for name. At-Tabari mentions only Madinah for the doubled reading and Kufa for the light reading. Al-Baghawi adds Sham and Hafs from 'Asim to the doubled side. Al-Qurtubi names three individual readers and calls the light reading that of the generality. The difference is in whom each man chose to mention, and this article leaves each list as its author gives it. The Arabic text printed with this verse here carries the doubled letter, su''irat, which matches the reading al-Baghawi attributes to Hafs.",
            "bn": "নামে নামে তালিকাগুলো মেলে না। তাবারী তাশদীদের পাঠে শুধু মদীনার কথা বলেন, আর হালকা পাঠে কূফার। বাগাভী তাশদীদের দিকে যোগ করেন শাম আর আসিম থেকে হাফসকে। কুরতুবী তিনজন কারীর নাম নেন, আর হালকা পাঠকে বলেন সাধারণ পাঠ। পার্থক্যটা আসলে কে কার নাম উল্লেখ করেছেন তাতে। এই লেখা প্রত্যেকের তালিকা তাঁর মতো করেই রেখে দিচ্ছে। এখানে আয়াতের সঙ্গে যে আরবি পাঠ ছাপা আছে, তাতে তাশদীদ আছে: সু''ইরাত। বাগাভী হাফসের যে পাঠের কথা বলেছেন, এটি তার সঙ্গে মেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Keeps It Burning",
          "bn": "যা দিয়ে আগুন জ্বলে"
        },
        "p": [
          {
            "en": "One sentence attributed to Qatada appears in three of the commentaries consulted for this verse. At-Tabari gives it with its chain, Bishr from Yazid from Sa'id from Qatada: sa''araha ghadabu Allahi wa-khataya bani Adam, what kindled it is the anger of Allah and the sins of the children of Adam. Ibn Kathir carries it in nearly the same words, as does al-Qurtubi. It is the only explanation in the texts consulted here that says what the fire is stoked with, and it names two things, not one.",
            "bn": "কাতাদার একটি বাক্য তিনটি তাফসীরে এসেছে। তাবারী তা এনেছেন সনদসহ, বিশর থেকে, তিনি ইয়াযীদ থেকে, তিনি সাঈদ থেকে, তিনি কাতাদা থেকে: সা''আরাহা গাদাবুল্লাহি ওয়া খাতায়া বানী আদাম। অর্থাৎ একে জ্বালিয়েছে আল্লাহর ক্রোধ আর আদম সন্তানের গুনাহ। ইবন কাসীর প্রায় একই ভাষায় এটি এনেছেন, কুরতুবীও তাই। আগুন কী দিয়ে উসকে দেওয়া হয়, এখানে দেখা তাফসীরগুলোর মধ্যে কেবল এই ব্যাখ্যাটিই তা বলে। আর এটি একটি নয়, দুটি জিনিসের নাম নেয়।"
          },
          {
            "en": "The pairing matters. The anger is Allah's, and the sins are people's, and Qatada sets them in one clause. The fire is not pictured as a blind force that happens to people. It answers to something, and part of what it answers to is what human beings have done. That is a sobering thought, but it is also a clarifying one. A fire fed partly by sins is a fire whose fuel can still be reduced, by leaving a sin and by asking forgiveness for the ones already done.",
            "bn": "জোড়াটা গুরুত্বপূর্ণ। ক্রোধ আল্লাহর, গুনাহ মানুষের, আর কাতাদা দুটিকে এক বাক্যে রেখেছেন। এখানে আগুনকে অন্ধ কোনো শক্তি হিসেবে আঁকা হয়নি, যা হঠাৎ মানুষের উপর এসে পড়ে। এটি কোনো কিছুর জবাবে জ্বলে। আর তার একটা অংশ মানুষের নিজের কাজ। কথাটা ভয় জাগায়, আবার চোখও খুলে দেয়। যে আগুনের জ্বালানির একাংশ গুনাহ, তার জ্বালানি এখনো কমানো যায়। গুনাহ ছেড়ে দিয়ে, আর যা হয়ে গেছে তার জন্য ইস্তিগফার করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Lit, the Glosses Say, for Whom",
          "bn": "কার জন্য জ্বালানো"
        },
        "p": [
          {
            "en": "The verse itself names nobody. It says only that the Jahim is set ablaze. Two of the commentators add a recipient in their glosses. Al-Qurtubi says it was kindled and set raging for the disbelievers, li-l-kuffar. Al-Baghawi says it was kindled for the enemies of Allah, li-a'da'i Allah. Both phrases are theirs, written as explanation, and neither is in the verse's three words. As-Sa'di, at-Tabari and Ibn Kathir, in the text consulted here, do not say for whom the fire is lit.",
            "bn": "আয়াতটি নিজে কারও নাম নেয় না। শুধু বলে, জাহীমকে উসকে দেওয়া হবে। দুজন তাফসীরকার তাঁদের ব্যাখ্যায় কার জন্য, তা যোগ করেছেন। কুরতুবী বলেন, কাফিরদের জন্য জ্বালানো আর দাউদাউ করে ধরানো হলো, লিল-কুফফার। বাগাভী বলেন, আল্লাহর শত্রুদের জন্য জ্বালানো হলো, লি-আ'দাইল্লাহ। দুটি বাক্যাংশই তাঁদের নিজেদের, ব্যাখ্যা হিসেবে লেখা। আয়াতের তিনটি শব্দে এর কোনোটিই নেই। এখানে দেখা পাঠে সা'দী, তাবারী আর ইবন কাসীর বলেননি আগুন কার জন্য জ্বালানো হয়।"
          },
          {
            "en": "A word of care is needed here. The verse speaks only of what it names, a fire set ablaze on a coming Day, and it licenses nothing against any living person or community. It hands no reader the right to decide who among the people around him belongs to the fire. The commentators' phrases explain whom the fire is meant for; they are not a list of names to be filled in. The only soul any reader is in a position to examine is his own.",
            "bn": "এখানে একটু সাবধান হওয়া দরকার। আয়াতটি যা বলে, শুধু তা-ই বলে: আসন্ন এক দিনে উসকে দেওয়া আগুনের কথা। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। আশপাশের কে আগুনের লোক, তা ঠিক করার অধিকার এ আয়াত কোনো পাঠককে দেয় না। তাফসীরকারদের বাক্যাংশ বলে আগুনটা কাদের জন্য। তা নাম বসানোর তালিকা নয়। পাঠক হিসাব নিতে পারেন কেবল একজনের: নিজের।"
          }
        ]
      },
      {
        "h": {
          "en": "Red, Then White, Then Black",
          "bn": "লাল, সাদা, তারপর কালো"
        },
        "p": [
          {
            "en": "Al-Qurtubi is the only one of the commentators here to bring a narration under this verse. He cites it from at-Tirmidhi, from Abu Hurayrah. In at-Tirmidhi's Jami', number 2591, the wording reads: the Prophet ﷺ said, \"The Fire was kindled for one thousand years until it reddened, then it was kindled for one thousand years until it whitened, then it was kindled for one thousand years until it became blackened, so it is dark black.\"",
            "bn": "এখানে দেখা তাফসীরগুলোর মধ্যে কেবল কুরতুবী এ আয়াতের আলোচনায় একটি বর্ণনা এনেছেন। তিনি তা নিয়েছেন তিরমিযী থেকে, আবু হুরায়রা (রাঃ)-এর সূত্রে। তিরমিযীর জামি'-তে, নম্বর ২৫৯১, এর ভাষ্য এই: নবী ﷺ বলেছেন, \"আগুনকে এক হাজার বছর জ্বালানো হয়েছে, ফলে তা লাল হয়েছে। তারপর আরও এক হাজার বছর জ্বালানো হয়েছে, ফলে তা সাদা হয়েছে। তারপর আরও এক হাজার বছর জ্বালানো হয়েছে, ফলে তা কালো হয়েছে। তাই তা ঘোর অন্ধকার কালো।\""
          },
          {
            "en": "The grading must be given as at-Tirmidhi gives it. Right after the report he adds a second chain in which Abu Hurayrah's words are not raised to the Prophet ﷺ, and then says that the hadith of Abu Hurayrah on this is more correct as mawquf, stopping at the Companion, and that he knows of no one who raised it except Yahya ibn Abi Bukayr from Sharik. Al-Qurtubi closes his own mention with the same note: it has also been narrated mawquf. So the report is not established as the Prophet's own words.",
            "bn": "এর মান তিরমিযী যেভাবে বলেছেন, ঠিক সেভাবেই বলতে হবে। বর্ণনাটির পরপরই তিনি আরেকটি সনদ আনেন, যেখানে আবু হুরায়রা (রাঃ)-এর কথা নবী ﷺ পর্যন্ত পৌঁছানো হয়নি। তারপর তিনি বলেন, এ বিষয়ে আবু হুরায়রার হাদিসটি মাওকূফ হিসেবেই বেশি সঠিক, অর্থাৎ সাহাবী পর্যন্ত গিয়ে থেমে যাওয়া। আর শারীক থেকে ইয়াহইয়া ইবন আবী বুকাইর ছাড়া কেউ একে নবী ﷺ পর্যন্ত পৌঁছিয়েছেন বলে তিনি জানেন না। কুরতুবীও একই কথা দিয়ে শেষ করেন: এটি মাওকূফভাবেও বর্ণিত হয়েছে। অতএব বর্ণনাটি নবী ﷺ-এর নিজের কথা হিসেবে প্রতিষ্ঠিত নয়।"
          },
          {
            "en": "That is the honest place to leave it. The report pictures kindling repeated over ages, close to what the doubled reading su''irat suggests, but its own collector judged the version that stops at Abu Hurayrah to be sounder. No other narration is attached to this verse by the commentaries consulted for it, and none of them gives a sound hadith from the Prophet ﷺ on it. The verse's meaning does not depend on the report; the commentators' glosses stand without it.",
            "bn": "সততার দাবি হলো, কথাটা এখানেই রেখে দেওয়া। বর্ণনাটি যুগ যুগ ধরে বারবার জ্বালানোর ছবি আঁকে, তাশদীদযুক্ত পাঠ সু''ইরাত যে অর্থের দিকে ইঙ্গিত করে তার কাছাকাছি। কিন্তু এর সংকলক নিজেই রায় দিয়েছেন, আবু হুরায়রা (রাঃ)-তে থেমে যাওয়া রূপটিই বেশি সঠিক। এ আয়াতের জন্য দেখা তাফসীরগুলো আর কোনো বর্ণনা যুক্ত করেনি, আর কোনোটিই এখানে নবী ﷺ থেকে সহীহ হাদিস আনেনি। আয়াতের অর্থ এই বর্ণনার উপর নির্ভর করে না। তাফসীরকারদের ব্যাখ্যা এটি ছাড়াই দাঁড়িয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fire Beside the Garden",
          "bn": "জান্নাতের পাশে আগুন"
        },
        "p": [
          {
            "en": "The verse does not stand alone at the end of its run. The very next verse, 81:13, reads wa-idha al-jannatu uzlifat, and when Paradise is brought near. The two are built the same way: wa-idha, a noun with the definite article, and a passive verb with no doer named. One is the Fire made to blaze, the other the Garden drawn close. They are counterparts, placed one directly after the other, and they are the last two of the when clauses before the surah gives its answer.",
            "bn": "ধারার শেষে আয়াতটি একা দাঁড়িয়ে নেই। ঠিক পরের আয়াত ৮১:১৩: ওয়া ইযাল জান্নাতু উযলিফাত, আর যখন জান্নাতকে কাছে আনা হবে। দুটি আয়াতের গঠন এক। প্রথমে ওয়া ইযা, তারপর নির্দিষ্ট বিশেষ্য, শেষে কর্মবাচ্য ক্রিয়া, কর্তার নাম নেই। একটিতে আগুনকে উসকে দেওয়া, অন্যটিতে জান্নাতকে কাছে আনা। একটির ঠিক পরেই অন্যটি, পরস্পরের বিপরীত জোড়া। আর সূরা উত্তর দেওয়ার আগে যখন দিয়ে শুরু হওয়া বাক্যগুলোর এ দুটিই শেষ।"
          },
          {
            "en": "This article does not open the second verse; it has its own place. It is enough to see that the surah does not leave the reader with the fire alone. Directly after the blaze comes nearness, and then, at 81:14, the answer to every when that went before: a soul will know what it has brought. The fire is not the end of the sentence. It is one half of a pair, and the pair is a question put to whoever is listening.",
            "bn": "দ্বিতীয় আয়াতটির আলোচনা এখানে খোলা হচ্ছে না, তার নিজের জায়গা আছে। এটুকু দেখাই যথেষ্ট যে সূরা পাঠককে শুধু আগুনের সামনে রেখে চলে যায় না। আগুন জ্বলার পরপরই আসে নৈকট্য। তারপর ৮১:১৪ আয়াতে আগের সব যখনের উত্তর: প্রত্যেক প্রাণ জানতে পারবে সে কী নিয়ে এসেছে। আগুন বাক্যের শেষ নয়। এটি একটি জোড়ার অর্ধেক। আর সেই জোড়া এক প্রশ্ন, যে শুনছে তার দিকে ছুড়ে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Heard Before It Is Seen",
          "bn": "দেখার আগে শোনা"
        },
        "p": [
          {
            "en": "Everything in this verse is still future when it is recited. The fire has not yet been set ablaze in the sense the verse describes; the reader hears of it before he sees it. That gap is a mercy. Qatada's sentence names the sins of the children of Adam among what stokes the fire, and sins are something a person can still leave, regret and seek forgiveness for while the gap lasts. A warning heard in time is a door, not a sentence.",
            "bn": "আয়াতটি যখন তিলাওয়াত হয়, এর সবকিছু তখনো ভবিষ্যতে। আয়াতে যে অর্থে বলা হয়েছে, সে অর্থে আগুন এখনো উসকে দেওয়া হয়নি। পাঠক দেখার আগেই শুনছে। এই ফাঁকটুকু রহমত। কাতাদার বাক্য আগুনের জ্বালানির মধ্যে আদম সন্তানের গুনাহর নাম নেয়। আর ফাঁক যতক্ষণ আছে, গুনাহ ছেড়ে দেওয়া যায়, তার জন্য অনুতপ্ত হওয়া যায়, মাগফিরাত চাওয়া যায়। সময় থাকতে শোনা সতর্কবাণী খোলা দরজা, রায় নয়।"
          },
          {
            "en": "So the verse asks something practical. Which small wrongs have I stopped counting because they seemed too light to matter? Which repentance have I postponed? The commentators speak of a fire kindled and stoked until it blazes as never before. The reader's part is not to picture it more vividly than the text does, but to let three words do their work: to turn back now, while the fire is still something heard about and the Garden is still within reach.",
            "bn": "তাই আয়াতটি হাতে-কলমে কিছু জানতে চায়। কোন ছোট অন্যায়গুলো আমি আর গুনছি না, কারণ সেগুলো তুচ্ছ মনে হয়েছে? কোন তওবা আমি পিছিয়ে রেখেছি? তাফসীরকারেরা বলেন এমন আগুনের কথা, যা জ্বালানো হবে, উসকে দেওয়া হবে, শেষে তা এমনভাবে জ্বলে উঠবে যেমন আগে কখনো জ্বলেনি। পাঠকের কাজ আয়াতের চেয়ে বেশি রং চড়িয়ে তা কল্পনা করা নয়। কাজ হলো তিনটি শব্দকে তাদের কাজ করতে দেওয়া। এখনই ফিরে আসা, যতক্ষণ আগুন কেবল শোনা কথা আর জান্নাত এখনো নাগালের মধ্যে।"
          }
        ]
      }
    ]
  },
  "81:14": {
    "sections": [
      {
        "h": {
          "en": "Where the Whens Arrive",
          "bn": "যখন-এর শেষ ঠিকানা"
        },
        "p": [
          {
            "en": "'Alimat nafsun ma ahdarat: a soul will know what it has brought. Four Arabic words, and they are the point towards which the whole opening of the surah has been moving. At-Tabari, al-Qurtubi, al-Baghawi and Ibn Kathir all name this verse the jawab, the answer, to idha ash-shamsu kuwwirat and to every clause after it. At-Tabari makes the grammar plain with an ordinary sentence: as in saying, when 'Abdullah stands, 'Amr sits. The first half fixes the time, and the second says what happens in it.",
            "bn": "আলিমাত নাফসুম মা আহদারাত: প্রত্যেকে জানবে সে কী নিয়ে এসেছে। আরবিতে মাত্র চারটি শব্দ, অথচ সূরার গোটা শুরুটা এগিয়েছে এদিকেই। তাবারী, কুরতুবী, বাগাভী ও ইবন কাসীর সবাই এ আয়াতকে বলেন জাওয়াব, অর্থাৎ ইযাশ শামসু কুউবিরাত এবং তার পরের প্রতিটি বাক্যাংশের জবাব। তাবারী ব্যাকরণটা বোঝান রোজকার এক বাক্য দিয়ে: যেমন বলা হয়, আবদুল্লাহ যখন দাঁড়াবে, আমর তখন বসবে। প্রথম অংশ সময় ঠিক করে দেয়। দ্বিতীয় অংশ বলে সেই সময়ে কী ঘটবে।"
          },
          {
            "en": "The articles on 81:1 and 81:12 have already traced how the clauses pile up and how the Fire and the Garden stand side by side at the end of the run. This article starts where they stop, on the far side of the sentence. Everything the surah has shown, the sun, the stars, the mountains, the seas, the records and the sky, turns out to be the setting. What the twelve conditions were waiting for is not an event in the heavens at all. It is one soul, and what it comes to know.",
            "bn": "বাক্যাংশগুলো কীভাবে একটার পর একটা জমে ওঠে, আর সারির শেষে জাহান্নাম ও জান্নাত কীভাবে পাশাপাশি দাঁড়ায়, তা ৮১:১ ও ৮১:১২ আয়াতের আলোচনায় দেখা হয়েছে। এ লেখা শুরু হচ্ছে সেখান থেকে, যেখানে ওরা থেমেছে, অর্থাৎ বাক্যের অপর পাশ থেকে। সূর্য, তারা, পাহাড়, সাগর, আমলনামা, আকাশ, সূরা যা কিছু দেখিয়েছে, সবই আসলে মঞ্চ। বারোটি শর্ত যার অপেক্ষায় ছিল, তা আকাশের কোনো ঘটনা নয়। তা একজন মানুষ, আর সে যা জানতে পারবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Six in This World, Six After",
          "bn": "ছয়টি দুনিয়ায়, ছয়টি পরকালে"
        },
        "p": [
          {
            "en": "How many conditions does the answer close? Al-Qurtubi relays, through Ibn Zayd, a count from Ibn 'Abbas: from idha ash-shamsu kuwwirat to wa-idha al-jannatu uzlifat there are twelve traits, six in this world and six in the Hereafter. Al-Qurtubi adds that he had already explained the first six by the words of Ubayy ibn Ka'b, and that explanation belongs to the opening verses, not to this one. What matters here is the total: two sets of six, and a single short sentence that answers both of them at once.",
            "bn": "জবাবটা কয়টি শর্তের সমাপ্তি টানে? কুরতুবী ইবন যায়দের সূত্রে ইবন আব্বাস (রাঃ)-এর একটি হিসাব উল্লেখ করেন: ইযাশ শামসু কুউবিরাত থেকে ওয়া ইযাল জান্নাতু উযলিফাত পর্যন্ত বারোটি বৈশিষ্ট্য। ছয়টি দুনিয়ায়, ছয়টি আখিরাতে। কুরতুবী আরও জানান, প্রথম ছয়টির ব্যাখ্যা তিনি আগেই দিয়েছেন উবাই ইবন কা'ব (রাঃ)-এর কথা দিয়ে। সে ব্যাখ্যার জায়গা সূরার শুরুর আয়াতগুলো, এ আয়াত নয়। এখানে আসল কথা মোট সংখ্যাটা: ছয়ের দুটি দল, আর ছোট্ট একটি বাক্য, যা দুই দলেরই জবাব একসঙ্গে দিয়ে দেয়।"
          },
          {
            "en": "The order is worth noticing. If the first six belong to this world, as al-Qurtubi's remark implies, they show a world coming apart: lights put out, mountains moved, seas changed. The second six then belong to what follows: souls paired, the buried girl asked, pages spread, the sky stripped away, the Fire kindled. The twelfth and last, just before the answer, is the Garden brought near. The list does not end on a flame. The final picture a listener holds when he hears that a soul will know what it has brought is the Garden, close enough to reach.",
            "bn": "ক্রমটাও খেয়াল করার মতো। কুরতুবীর কথায় যেমন ইঙ্গিত আছে, প্রথম ছয়টি যদি দুনিয়ার হয়, তবে সেগুলোতে দেখা যায় এক ভেঙে পড়া জগৎ। আলো নিভে যায়, পাহাড় সরে যায়, সাগর বদলে যায়। তাহলে পরের ছয়টি তার পরের জগতের: আত্মাদের জোড়া মেলানো, জীবন্ত পুঁতে ফেলা মেয়েটিকে জিজ্ঞাসা, আমলনামা খুলে ধরা, আকাশের আবরণ সরানো, জাহান্নাম উসকে দেওয়া। বারো নম্বর, মানে শেষেরটি, জবাবের ঠিক আগে: জান্নাতকে কাছে আনা। তালিকা আগুনে গিয়ে শেষ হয়নি। প্রত্যেকে কী নিয়ে এসেছে তা জানবে, এ কথা কানে আসার মুহূর্তে শ্রোতার চোখে শেষ ছবিটা জান্নাতের, এতটা কাছে যে হাত বাড়ালেই ছোঁয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Soul Standing for All",
          "bn": "এক নাফসে সবাই"
        },
        "p": [
          {
            "en": "Nafsun is indefinite: a soul, not every soul. Yet the commentators read it as every soul. Al-Baghawi and Ibn Kathir gloss it simply as kull nafs, each soul. As-Sa'di gives the reason in a single clause: every soul, because the word comes in the setting of a condition. An indefinite noun answering a long string of whens is not pointing at one unnamed person. It reaches each person who hears it, one at a time. The verse speaks of a soul so that no reader can count himself outside it.",
            "bn": "নাফসুন শব্দটি অনির্দিষ্ট। অর্থাৎ একজন, প্রত্যেকে নয়। তবু তাফসীরকারেরা পড়েছেন প্রত্যেকে অর্থে। বাগাভী ও ইবন কাসীর সোজাসুজি বলেছেন কুল্লু নাফস, প্রত্যেক প্রাণ। কারণটা সা'দী এক কথায় বলে দেন: শব্দটি শর্তের প্রসঙ্গে এসেছে, তাই এর অর্থ প্রত্যেকে। একের পর এক যখন-এর জবাবে আসা একটি অনির্দিষ্ট শব্দ কোনো অজ্ঞাত একজনকে দেখাচ্ছে না। যে শুনছে, তাদের প্রত্যেকের কাছে আলাদা করে পৌঁছে যাচ্ছে। আয়াত একজনের কথা বলে, যাতে কোনো পাঠক নিজেকে এর বাইরে ভাবতে না পারে।"
          },
          {
            "en": "The Qur'an uses the same opening again in the next surah. Surah al-Infitar starts with its own run of whens, and its answer, at 82:5, begins with the same two words: 'alimat nafsun ma qaddamat wa-akhkharat, a soul will know what it sent ahead and what it held back. Here the object is one word, ahdarat, what it has brought. There the verse divides it into what went forward and what stayed behind. The pairing is in the text itself, and reading the two verses together lets each one sharpen the other.",
            "bn": "পরের সূরাতেই কুরআন একই শুরু আবার ব্যবহার করে। সূরা ইনফিতারও শুরু হয় নিজের একসারি যখন দিয়ে। তার জবাব ৮২:৫ আয়াতে, আর সেটাও শুরু হয় একই দুই শব্দে: আলিমাত নাফসুম মা কাদ্দামাত ওয়া আখখারাত, প্রত্যেকে জানবে সে কী আগে পাঠিয়েছে আর কী পেছনে রেখে গেছে। এখানে বিষয়টা একটি শব্দে: আহদারাত, যা সে নিয়ে এসেছে। ওখানে আয়াত সেটাকে দুই ভাগ করে, যা আগে গেছে আর যা পেছনে রয়ে গেছে। এই জোড় কুরআনের নিজের পাঠেই আছে। দুটি আয়াত পাশাপাশি পড়লে একটি আরেকটির অর্থ আরও ধারালো করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Brought by Its Own Hand",
          "bn": "নিজের হাতেই আনা"
        },
        "p": [
          {
            "en": "Ahdarat is a past-tense verb from the root h-d-r, presence, in the form that means to bring something into presence. Its subject is the soul. The verse does not show the soul being handed something; it shows the soul doing the bringing. The glosses then describe what was brought. At-Tabari says it is what the soul brought of good, by which it goes on to the Garden, or of evil, by which it goes on to the Fire. Al-Qurtubi says it means what it did of good and evil.",
            "bn": "আহদারাত অতীতকালের ক্রিয়া, ধাতু হা-দোয়াদ-রা, যার মূল অর্থ উপস্থিতি। ক্রিয়ার এই রূপের অর্থ কোনো কিছুকে হাজির করা। কর্তা এখানে মানুষটি নিজে। আয়াত দেখাচ্ছে না যে তার হাতে কিছু তুলে দেওয়া হলো। দেখাচ্ছে, আনার কাজটা সে নিজেই করেছে। এরপর তাফসীরগুলো বলে কী আনা হয়েছে। তাবারী বলেন, সে যে নেকি এনেছে, যার কারণে সে জান্নাতে যাবে, কিংবা যে মন্দ এনেছে, যার কারণে সে জাহান্নামে যাবে। কুরতুবী বলেন, এর অর্থ সে যা ভালো ও মন্দ আমল করেছে।"
          },
          {
            "en": "Ibn Kathir's wording joins both sides: each soul knows what it did, and that was brought present for it. He sets beside it 3:30, a verse built on the same root: on the Day every soul finds whatever good it did muhdaran, made present, and as for whatever evil it did, it wishes there were a great distance between itself and that. As-Sa'di explains ma ahdarat as whatever has become present before it of the deeds it sent ahead, and he cites 18:49, where they find what they did present before them.",
            "bn": "ইবন কাসীরের ভাষায় দুই দিক একসঙ্গে এসেছে: প্রত্যেকে জানবে সে কী আমল করেছে, আর সেটাকে তার সামনে হাজির করা হয়েছে। এর পাশে তিনি রাখেন ৩:৩০ আয়াত, যা একই ধাতু থেকে গড়া। সেদিন প্রত্যেকে নিজের করা প্রতিটি ভালো কাজ পাবে মুহদারান, অর্থাৎ হাজির করা অবস্থায়। আর যত মন্দ কাজ করেছে, তার বেলায় চাইবে, ইশ! তার আর ওই কাজের মাঝে যদি অনেক দূরত্ব থাকত। সা'দী মা আহদারাত-এর ব্যাখ্যা দেন এভাবে: আগে পাঠানো আমলের যা কিছু তার সামনে হাজির হয়েছে। সঙ্গে উল্লেখ করেন ১৮:৪৯ আয়াত, যেখানে তারা নিজেদের সব কাজ সামনে উপস্থিত পায়।"
          },
          {
            "en": "Ma'arif al-Qur'an adds how that presence may take shape: the deeds will be before a person either in the record of deeds placed in his hands, or in a bodily form the deeds take on, which it says is understood from certain narrations, and it closes with Allah knows best. It names no narration, and so this article names none either. What every gloss shares is the plain thing. Nothing new is made up on that Day. What appears is what was done, and the one who did it recognises it.",
            "bn": "সেই উপস্থিতি কেমন রূপ নিতে পারে, মাআরিফুল কুরআন তা নিয়ে আরেকটু বলে। আমলগুলো মানুষের সামনে থাকবে দুইভাবের কোনো একভাবে: হয় তার হাতে দেওয়া আমলনামায়, নয়তো আমলগুলো নিজেরাই এক দেহরূপ ধারণ করবে। দ্বিতীয়টি কিছু বর্ণনা থেকে বোঝা যায় বলে উল্লেখ করে, তারপর বলে, আল্লাহই ভালো জানেন। কোনো বর্ণনার নাম সেখানে নেই, তাই এ লেখাতেও নেই। সব ব্যাখ্যার মিল একটা সোজা কথায়। সেদিন নতুন কিছু বানানো হবে না। যা করা হয়েছিল, তা-ই সামনে আসবে, আর যে করেছে সে তা চিনবে।"
          }
        ]
      },
      {
        "h": {
          "en": "For This the Account Ran",
          "bn": "সব কথা এ কথার জন্যই"
        },
        "p": [
          {
            "en": "Three of the tafsirs read for this verse record a remark of 'Umar ibn al-Khattab (RA). Ibn Kathir gives it from Ibn Abi Hatim, through Zayd ibn Aslam from his father: when idha ash-shamsu kuwwirat was revealed, 'Umar, on reaching 'alimat nafsun ma ahdarat, said li-hadha ujriya al-hadith, it was for this that the account was told. At-Tabari relays it through Qatada in a slightly different form, wa-ila hadha jara al-hadith: and it was towards this that the account was running.",
            "bn": "এ আয়াতের জন্য পড়া তিনটি তাফসীরে উমর ইবনুল খাত্তাব (রাঃ)-এর একটি মন্তব্য আছে। ইবন কাসীর তা এনেছেন ইবন আবী হাতিম থেকে, যায়দ ইবন আসলাম তাঁর পিতার সূত্রে বর্ণনা করেছেন: ইযাশ শামসু কুউবিরাত নাযিল হলে উমর (রাঃ) আলিমাত নাফসুম মা আহদারাত পর্যন্ত পৌঁছে বললেন, লিহাযা উজরিয়াল হাদীস, এ কথার জন্যই পুরো বিবরণ বলা হয়েছে। তাবারী কাতাদার সূত্রে একই কথা আনেন একটু ভিন্ন শব্দে, ওয়া ইলা হাযা জারাল হাদীস: আর এ কথার দিকেই বিবরণ বয়ে চলছিল।"
          },
          {
            "en": "Al-Qurtubi gives 'Umar's sentence in the first form, and then adds, with the word ruwiya, it is narrated, that Ibn 'Abbas and 'Umar both recited the surah and, on reaching this verse, said li-hadha ujriyat al-qissa: it was for this that the story was told. None of the three tafsirs grades the report. It is a Companion's remark, not a saying of the Prophet ﷺ, and it is given here in the forms the commentators give it, with the chains they name and nothing added.",
            "bn": "কুরতুবী উমর (রাঃ)-এর বাক্যটি আনেন প্রথম রূপেই। তারপর রুউইয়া, অর্থাৎ বর্ণিত আছে, এই শব্দ দিয়ে যোগ করেন: ইবন আব্বাস (রাঃ) ও উমর (রাঃ) দুজনেই সূরাটি পড়ছিলেন, আর এ আয়াতে পৌঁছে বলেছিলেন, লিহাযা উজরিয়াতিল কিসসাহ, এ কথার জন্যই কাহিনিটা বলা হয়েছে। তিনটি তাফসীরের কোনোটিই বর্ণনাটির মান নির্ধারণ করেনি। এটি সাহাবীর মন্তব্য, নবী ﷺ-এর বাণী নয়। তাফসীরকারেরা যে রূপে ও যে সূত্রে এনেছেন, এখানে সেভাবেই রাখা হলো, কিছু যোগ না করে।"
          },
          {
            "en": "The remark reads like a listener's discovery. Twelve images pass, each of them enormous, and a reader can be carried along by them as if they were the subject. 'Umar's words stop that drift. The sun and the seas were never the point of the account. They were the frame around one sentence about what a person carries. Read that way, the opening of the surah is not a spectacle to admire from a distance but an approach, step by step, to a single question about oneself: what am I bringing, and is it what I would choose to bring?",
            "bn": "মন্তব্যটা শুনলে মনে হয়, একজন শ্রোতা হঠাৎ আসল কথাটা ধরে ফেলেছেন। বারোটি দৃশ্য একে একে চলে যায়, প্রতিটিই বিশাল। পাঠক সহজেই ভেসে যেতে পারেন, যেন ওগুলোই মূল বিষয়। উমর (রাঃ)-এর কথা সেই ভেসে যাওয়া থামিয়ে দেয়। সূর্য আর সাগর বিবরণের লক্ষ্য ছিল না। ওগুলো ছিল একটি বাক্যের ফ্রেম, যে বাক্য বলে মানুষ কী বয়ে নিয়ে আসে। এভাবে পড়লে সূরার শুরুটা দূর থেকে উপভোগ করার মতো কোনো দৃশ্য নয়। ধাপে ধাপে এগিয়ে যাওয়া নিজের সম্পর্কে একটিমাত্র প্রশ্নের দিকে: আমি কী নিয়ে যাচ্ছি, আর বেছে নেওয়ার সুযোগ থাকলে কি এটাই নিতাম?"
          }
        ]
      },
      {
        "h": {
          "en": "Knowing Then, or Knowing Now",
          "bn": "তখন জানা, নাকি এখন"
        },
        "p": [
          {
            "en": "At-Tabari adds a line on the verb 'alimat, will know. It becomes clear to him then, he says, what he had been ignorant of, and what had been for his good and what had not. The knowledge in this verse is not news about the deeds. A person knew his deeds when he did them. It is knowledge of their worth, of which of them helped and which harmed, and it arrives at the moment when it can no longer change their direction. A traveller who first opens his bag at the border learns what is in it, but he can no longer repack it there.",
            "bn": "আলিমাত, অর্থাৎ জানবে, ক্রিয়াটি নিয়ে তাবারী আরেকটি কথা যোগ করেন। তাঁর ভাষায়, যে বিষয়ে সে অজ্ঞ ছিল, তা তখন তার কাছে স্পষ্ট হয়ে যাবে। কোনটায় তার কল্যাণ ছিল আর কোনটায় ছিল না, তাও। এ আয়াতের জানা আমলগুলোর খবর জানা নয়। নিজের কাজ তো মানুষ করার সময়েই জানত। এ জানা হলো সেগুলোর মূল্য জানা, কোনটা উপকার করেছে আর কোনটা ক্ষতি। আর এ জ্ঞান আসে ঠিক তখন, যখন আর সেগুলোর গতিপথ বদলানোর উপায় থাকে না। যে মুসাফির সীমান্তে পৌঁছে প্রথম ব্যাগ খোলে, সে দেখে ভেতরে কী আছে। কিন্তু সেখানে দাঁড়িয়ে নতুন করে গোছানোর সুযোগ তার আর থাকে না।"
          },
          {
            "en": "Ibn Kathir's second parallel, 75:13, says the same from another side: on that Day man will be told of what he sent ahead and what he held back. Against that, the surah offers a different timing. The verse is heard now. What the soul will know then can be asked about today, while deeds can still be added and others repented of. The two kinds of knowing need not differ in content. They differ only in the moment, and the moment of reading belongs to the reader.",
            "bn": "ইবন কাসীরের দ্বিতীয় সমান্তরাল আয়াত ৭৫:১৩ একই কথা বলে অন্য দিক থেকে: সেদিন মানুষকে জানানো হবে সে কী আগে পাঠিয়েছে আর কী পেছনে রেখে গেছে। এর বিপরীতে সূরাটি সময়ের আরেকটা সুযোগ দেয়। আয়াতটা শোনা হচ্ছে এখন। সেদিন মানুষ যা জানবে, সে প্রশ্ন আজই নিজেকে করা যায়, যখন আমল যোগ করার সময় আছে, আর কিছু আমল থেকে তওবা করারও। দুই রকমের জানায় বিষয় এক হতে পারে। তফাত শুধু মুহূর্তে, আর পড়ার মুহূর্তটা পাঠকের হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Half a Date Ahead",
          "bn": "আধখানা খেজুরের দাম"
        },
        "p": [
          {
            "en": "Al-Qurtubi places under this verse a hadith he cites from the two Sahihs, from 'Adi ibn Hatim (RA). The article on 78:40 quotes it whole from al-Bukhari (7512), and Muslim records it too (1016). In al-Bukhari's wording the Prophet ﷺ said that each person will be spoken to by his Lord with no interpreter between them; he will look right and left and see only what he sent forward, and in front of him the Fire; so guard against the Fire, even with half a date. Al-Bukhari adds, by another chain, even with a good word.",
            "bn": "কুরতুবী এ আয়াতের নিচে একটি হাদীস আনেন, যা তিনি দুই সহীহ গ্রন্থ, বুখারী ও মুসলিম থেকে আদী ইবন হাতিম (রাঃ)-এর সূত্রে উল্লেখ করেছেন। ৭৮:৪০ আয়াতের আলোচনায় বুখারী (৭৫১২) থেকে হাদীসটি পুরো উদ্ধৃত আছে, আর মুসলিমও (১০১৬) তা বর্ণনা করেছেন। বুখারীর ভাষ্যে নবী ﷺ বলেছেন, প্রত্যেকের সঙ্গে তার রব কথা বলবেন, মাঝে কোনো দোভাষী থাকবে না। সে ডানে-বাঁয়ে তাকিয়ে নিজের আগে পাঠানো আমল ছাড়া কিছু দেখবে না, আর সামনে দেখবে আগুন। তাই আধখানা খেজুর দিয়ে হলেও আগুন থেকে বাঁচো। বুখারী আরেক সূত্রে যোগ করেন: একটি ভালো কথা দিয়ে হলেও।"
          },
          {
            "en": "Under 78:40, none of the tafsirs read for that verse tied the hadith to it; here al-Qurtubi does, and the fit is close. What the man sees on either side is exactly what he has brought, nothing more and nothing less. Yet the same report that shows the Fire ahead names the remedy at the smallest price there is: half a date, or a good word. The hadith does not leave the listener frozen before the scene. It sends him back into his day with something cheap and immediate to do.",
            "bn": "৭৮:৪০ আয়াতের জন্য পড়া তাফসীরগুলোর কোনোটি হাদীসটিকে সে আয়াতের সঙ্গে জোড়েনি। এখানে কুরতুবী জুড়েছেন, আর মিলটা খুবই ঘনিষ্ঠ। মানুষটি দুই পাশে যা দেখে, তা ঠিক সে যা নিয়ে এসেছে, এর বেশিও না, কমও না। অথচ যে হাদীস সামনে আগুন দেখায়, সেটাই প্রতিকারের কথা বলে সবচেয়ে কম দামে: আধখানা খেজুর, কিংবা একটি ভালো কথা। হাদীসটি শ্রোতাকে দৃশ্যের সামনে স্তব্ধ করে রেখে দেয় না। বরং তাকে ফিরিয়ে দেয় তার দিনের কাজে, হাতে একটা সহজ কাজ দিয়ে, যা এখনই করা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "And Allah Is Kind",
          "bn": "আর আল্লাহ বান্দাদের প্রতি দয়ালু"
        },
        "p": [
          {
            "en": "The verse can be heard only as a threat, and the commentators do not lighten its weight. As-Sa'di says these descriptions of the Day are among those that unsettle hearts, deepen distress and spread fear, and that they urge people of understanding to make ready for that Day and hold them back from everything that earns blame. Fear has a task here. It is meant to move a person towards preparation, not to leave him in despair. A warning that left no room to act would have no reason to be spoken, and the surah's own order points the same way.",
            "bn": "আয়াতটিকে কেবল হুঁশিয়ারি হিসেবেও শোনা যায়, আর তাফসীরকারেরা এর ভার একটুও হালকা করেন না। সা'দী বলেন, কিয়ামতের এই বর্ণনাগুলো এমন, যাতে হৃদয় কেঁপে ওঠে, দুশ্চিন্তা ঘনিয়ে আসে, ভয় ছড়িয়ে পড়ে। আর এগুলোই বুদ্ধিমানদের সেই দিনের জন্য প্রস্তুত হতে তাড়া দেয়, নিন্দার যোগ্য সব কাজ থেকে ফিরিয়ে রাখে। এখানে ভয়ের একটা কাজ আছে। সে মানুষকে ঠেলে দেয় প্রস্তুতির দিকে, হতাশায় ফেলে রাখে না। কিছু করার সুযোগই যদি না থাকত, তবে সতর্ক করার কোনো মানে থাকত না। সূরার নিজের সাজানোও সেদিকেই ইশারা করে।"
          },
          {
            "en": "The Qur'an keeps the balance itself. The verse Ibn Kathir pairs with this one, 3:30, warns that Allah cautions you about Himself, and then closes with wa-Allahu ra'ufun bil-'ibad: and Allah is Kind to His servants. In this surah the Fire is kindled, and the very next sight is the Garden brought near. A soul will know what it has brought, and what it brings can still include a repentance made tonight, half a date given, a good word spoken today. The bag is not sealed while the reader is still reading.",
            "bn": "ভারসাম্যটা কুরআন নিজেই রাখে। ইবন কাসীর এ আয়াতের পাশে যে ৩:৩০ আয়াত রাখেন, তাতে সতর্ক করা হয়েছে যে আল্লাহ তোমাদের নিজের ব্যাপারে সাবধান করছেন। আর আয়াতটি শেষ হয় এ কথায়: ওয়াল্লাহু রাউফুম বিল-ইবাদ, আর আল্লাহ বান্দাদের প্রতি অতি দয়ালু। এ সূরায় জাহান্নাম উসকে দেওয়ার ঠিক পরের দৃশ্যই জান্নাতকে কাছে আনা। প্রত্যেকে জানবে সে কী নিয়ে এসেছে। আর সে যা আনবে, তাতে এখনো যোগ হতে পারে আজ রাতের একটি তওবা, দান করা আধখানা খেজুর, আজ বলা একটি ভালো কথা। পাঠক যতক্ষণ পড়ছেন, পোঁটলার মুখ ততক্ষণ বাঁধা হয়নি।"
          }
        ]
      }
    ]
  },
  "81:19": {
    "sections": [
      {
        "h": {
          "en": "After Stars, Night and Dawn",
          "bn": "তারা, রাত আর ভোরের পরে"
        },
        "p": [
          {
            "en": "Innahu la-qawlu rasulin karim: indeed, it is the word of a noble messenger. Four words in Arabic, and they carry the weight of everything sworn in 81:15 to 81:18. Al-Qurtubi opens his comment with a single clause: this is the answer to the oath. The stars that draw back and run their courses and set, the night as it closes in, the dawn as it breathes: all of it was sworn so that this sentence could follow. The Muyassar folds oaths and answer into one sentence, from the stars whose light is hidden by day to the claim that the Qur'an is the conveying of a noble messenger.",
            "bn": "ইন্নাহু লাকাওলু রাসূলিন কারীম: নিশ্চয়ই এ এক সম্মানিত রাসূলের বাণী। আরবিতে মাত্র চারটি শব্দ, অথচ ৮১:১৫ থেকে ৮১:১৮ পর্যন্ত যত শপথ, সবগুলোর ভার এরা বহন করে। কুরতুবী তাঁর আলোচনা শুরু করেন এক বাক্যে: এটাই শপথের জবাব। পিছিয়ে যাওয়া, চলতে চলতে আড়ালে লুকানো তারা, ঘনিয়ে আসা রাত, নিঃশ্বাস ফেলা ভোর, এ সবের শপথ করা হয়েছে এই বাক্যটি বলার জন্যই। মুয়াসসার শপথ আর জবাবকে একটি বাক্যে গেঁথে দেয়। দিনের বেলা যে তারার আলো লুকিয়ে থাকে, সেখান থেকে শুরু করে সে পৌঁছে যায় এই দাবিতে: কুরআন এক সম্মানিত রাসূলের পৌঁছে দেওয়া বাণী।"
          },
          {
            "en": "The verse opens with a pronoun, innahu, it, and names nothing for the pronoun to point back to. None of the things sworn by is the it. The commentators supply the missing noun without hesitation. Al-Baghawi writes: it, meaning the Qur'an. At-Tabari begins his gloss with this Qur'an. The word Qur'an itself does not occur anywhere in at-Takwir. The surah has spent fourteen verses on the end of the world, and now a pronoun lands on a speech that has not yet been named, as though everyone listening already knew which speech was in dispute.",
            "bn": "আয়াতটি শুরু হয় একটি সর্বনাম দিয়ে: ইন্নাহু, নিশ্চয়ই তা। কিন্তু এ 'তা' কাকে বোঝাচ্ছে, আগে তার কোনো নাম নেই। যেসব জিনিসের শপথ করা হলো, তাদের কোনোটাই এই 'তা' নয়। তাফসীরকারেরা কোনো দ্বিধা ছাড়াই শূন্য জায়গাটা ভরে দেন। বাগাভী লেখেন: তা, অর্থাৎ কুরআন। তাবারী তাঁর ব্যাখ্যা শুরু করেন 'এই কুরআন' দিয়ে। পুরো সূরা তাকভীরে কুরআন শব্দটি একবারও আসেনি। চৌদ্দটি আয়াত জুড়ে সূরাটি দুনিয়ার শেষের কথা বলেছে। তারপর হঠাৎ একটি সর্বনাম এসে পড়ে এমন এক বাণীর উপর, যার নাম তখনো নেওয়া হয়নি। যেন শ্রোতারা সবাই আগে থেকেই জানত, কোন বাণী নিয়ে বিবাদ চলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sworn on a Lofty Sanad",
          "bn": "সনদের উচ্চতার উপর শপথ"
        },
        "p": [
          {
            "en": "As-Sa'di says what the oaths are for. On 81:18 he calls the stars, the night and the dawn great signs, and says that Allah swore by them upon the loftiness of the Qur'an's sanad, its majesty, and its protection from every accursed devil. Then, he writes, He said: indeed, it is the word of a noble messenger. Sanad is the word for a chain of transmission, the line of carriers through whom a report reaches the one who hears it. As-Sa'di applies the word to the Qur'an itself, and on his reading the oath is sworn on how high that chain reaches.",
            "bn": "শপথগুলো কীসের জন্য, সা'দী তা বলে দেন। ৮১:১৮-এর আলোচনায় তিনি তারা, রাত আর ভোরকে বলেন মহান নিদর্শন। তাঁর ভাষায়, আল্লাহ এগুলোর শপথ করেছেন কুরআনের সনদের উচ্চতা, তার মহিমা, আর প্রত্যেক বিতাড়িত শয়তান থেকে তার সুরক্ষার উপর। তারপর, তিনি লেখেন, আল্লাহ বললেন: নিশ্চয়ই এ এক সম্মানিত রাসূলের বাণী। সনদ মানে বর্ণনার ধারা, যাদের হাত ঘুরে একটি খবর শ্রোতার কাছে পৌঁছায়। সা'দী শব্দটি খাটিয়েছেন খোদ কুরআনের উপর। তাঁর পাঠে শপথটা করা হয়েছে এ কথার উপর যে, এই ধারা কত উঁচুতে গিয়ে পৌঁছেছে।"
          },
          {
            "en": "The chain has few links, and as-Sa'di names them with a verse from another surah. Jibril (AS), he says, brought it down from Allah, as Allah said in 26:192 to 26:194: it is the revelation of the Lord of the worlds; the Trustworthy Spirit brought it down upon your heart, that you may be among the warners. From the Lord of the worlds, through the Spirit, onto the heart of the Prophet ﷺ: that is the sanad the oaths are sworn on. Who the Spirit is has its own page under 26:193. Here it matters only that as-Sa'di reads the two passages as one claim.",
            "bn": "এ ধারায় কড়ি খুব কম, আর সা'দী অন্য এক সূরার আয়াত দিয়ে সেগুলোর নাম বলে দেন। তিনি বলেন, জিবরাঈল (আঃ) এটি আল্লাহর কাছ থেকে নিয়ে নেমেছেন, যেমন আল্লাহ ২৬:১৯২ থেকে ২৬:১৯৪ আয়াতে বলেছেন: এটি জগতসমূহের রবের নাজিল করা। বিশ্বস্ত রূহ এটি নিয়ে নেমেছেন আপনার হৃদয়ে, যাতে আপনি সতর্ককারীদের একজন হন। জগতসমূহের রব থেকে, রূহের মাধ্যমে, নবী ﷺ-এর হৃদয় পর্যন্ত: শপথগুলো এই সনদের উপরই। রূহ কে, সে আলোচনা আছে ২৬:১৯৩-এর পাতায়। এখানে শুধু এটুকু দরকার যে, সা'দী দুই জায়গার কথাকে একই দাবি হিসেবে পড়েন।"
          },
          {
            "en": "The third thing as-Sa'di names, protection from every accursed devil, is answered at the end of the passage, in 81:25: and it is not the word of an outcast devil. So the answer to the oath opens by saying who did carry the speech and closes by saying who did not. Between those two statements stand the qualities of the carrier in 81:20 and 81:21 and the defence of the Prophet ﷺ in 81:22 to 81:24. This verse names the carrier first, and the rest of the passage leans on it.",
            "bn": "সা'দীর বলা তৃতীয় বিষয়, প্রত্যেক বিতাড়িত শয়তান থেকে সুরক্ষা, তার জবাব আসে অংশটির শেষে, ৮১:২৫ আয়াতে: আর এটি কোনো বিতাড়িত শয়তানের কথা নয়। অর্থাৎ শপথের জবাব শুরু হয় কে এ বাণী বয়ে এনেছেন তা বলে, আর শেষ হয় কে বয়ে আনেনি তা বলে। এ দুই কথার মাঝখানে আছে ৮১:২০ ও ৮১:২১-এ বাহকের গুণাবলি, আর ৮১:২২ থেকে ৮১:২৪-এ নবী ﷺ-এর পক্ষে জবাব। বাহকের কথা আসে সবার আগে, এই আয়াতে, আর অংশটির বাকি সবকিছু এর উপর ভর দিয়ে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Conveyed, Not Composed",
          "bn": "পৌঁছে দেওয়া, রচনা নয়"
        },
        "p": [
          {
            "en": "The phrase qawlu rasul, the word of a messenger, needs a verb to open it, and each commentator supplies one. Ibn Kathir writes that this Qur'an is the tabligh, the conveying, of a noble messenger, and the Muyassar uses the same word. At-Tabari writes tanzil, the sending down: the sending down of a noble messenger, Jibril, who brought it down to Muhammad ibn Abdullah. Al-Baghawi says Jibril brought it down from Allah, and as-Sa'di says the same. Al-Qurtubi gives the sense as a messenger from Allah who is noble in Allah's sight.",
            "bn": "কাওলু রাসূল, রাসূলের বাণী: কথাটা খুলতে একটা ক্রিয়া লাগে, আর প্রত্যেক তাফসীরকার নিজের মতো একটা জুড়ে দেন। ইবন কাসীর লেখেন, এই কুরআন এক সম্মানিত রাসূলের তাবলীগ, মানে পৌঁছে দেওয়া। মুয়াসসারও একই শব্দ ব্যবহার করে। তাবারী লেখেন তানযীল, নামিয়ে আনা: এক সম্মানিত রাসূলের নামিয়ে আনা বাণী। সেই রাসূল জিবরাঈল, যিনি এটি নিয়ে নেমেছেন মুহাম্মাদ ইবন আব্দুল্লাহর কাছে। বাগাভী বলেন, জিবরাঈল এটি আল্লাহর কাছ থেকে নিয়ে নেমেছেন। সা'দীর কথাও তাই। কুরতুবীর ব্যাখ্যায় অর্থ দাঁড়ায়: আল্লাহর পক্ষ থেকে আসা এক রাসূল, যিনি আল্লাহর কাছে সম্মানিত।"
          },
          {
            "en": "Al-Qurtubi then explains why the speech is ascribed to a messenger at all. Allah, he says, attributed the speech to Jibril and then carried it past him with the words tanzilun min rabbi l-'alamin, a revelation from the Lord of the worlds, so that those who seek certainty in their belief would know that the speech is Allah's. The words he quotes do not occur in at-Takwir. They stand in 69:43, directly after al-Haqqa repeats this verse word for word in 69:40, and again in 56:80. Al-Qurtubi reads this surah's sentence together with its completion elsewhere.",
            "bn": "বাণীটাকে রাসূলের সঙ্গে জোড়া হলো কেন, কুরতুবী এরপর তার ব্যাখ্যা দেন। তিনি বলেন, আল্লাহ বাণীটিকে প্রথমে জিবরাঈলের দিকে সম্পর্কিত করেছেন। তারপর তানযীলুম মির রাব্বিল আলামীন, জগতসমূহের রবের পক্ষ থেকে নাজিল করা, এ কথা বলে সম্পর্কটাকে তাঁকে ছাড়িয়ে নিয়ে গেছেন। উদ্দেশ্য, যারা ঈমানে নিশ্চিত হতে চায়, তারা যেন জানে যে বাণী আল্লাহরই। যে কথাগুলো তিনি উদ্ধৃত করেন, সেগুলো সূরা তাকভীরে নেই। আছে ৬৯:৪৩ আয়াতে, যেখানে ঠিক আগে ৬৯:৪০-এ সূরা হাক্কাহ এই আয়াতটিই হুবহু বলেছে। একই কথা আবার আছে ৫৬:৮০ আয়াতে। কুরতুবী এ সূরার বাক্যটিকে পড়েন অন্য জায়গায় থাকা তার পরিপূরকের সঙ্গে মিলিয়ে।"
          },
          {
            "en": "In every gloss gathered here the messenger carries the speech; he does not make it. The ascription names the hands it passed through, and al-Qurtubi's phrase from 69:43 names where it began. How the commentators read the same four words where they recur in al-Haqqa, and whom they take the messenger to be there, is set out on the page for 69:41. This verse needs only the point al-Qurtubi makes here: the speech is truly ascribed to its carrier, and it remains Allah's.",
            "bn": "এখানে সংগৃহীত প্রতিটি ব্যাখ্যায় রাসূল হলেন বাণীর বাহক, রচয়িতা নন। বাণীকে তাঁর দিকে সম্পর্কিত করা মানে, কোন হাত ঘুরে তা এসেছে তার নাম বলা। আর কোথা থেকে শুরু, তা বলে দেয় ৬৯:৪৩-এর যে কথা কুরতুবী উদ্ধৃত করেন। সূরা হাক্কাহতে এই চারটি শব্দ আবার এসেছে। সেখানে তাফসীরকারেরা কথাটা কীভাবে পড়েছেন, আর রাসূল বলতে কাকে বুঝেছেন, সে আলোচনা আছে ৬৯:৪১-এর পাতায়। এ আয়াতের জন্য দরকার শুধু কুরতুবীর এখানকার কথাটুকু: বাণীটি সত্যিই তার বাহকের দিকে সম্পর্কিত, আর তবুও তা আল্লাহরই বাণী।"
          }
        ]
      },
      {
        "h": {
          "en": "Qatada, by Two Routes",
          "bn": "দুই পথে কাতাদার কথা"
        },
        "p": [
          {
            "en": "Who is the noble messenger? At-Tabari answers Jibril, and adds that the people of interpretation said the same. He gives the view from Qatada by two separate routes, one through Sa'id and one through Ma'mar, and both end in the same short gloss: it is Jibril. Al-Qurtubi names al-Hasan, Qatada and ad-Dahhak for it. Ibn Kathir gives a longer list of early authorities that opens with Ibn Abbas. The Muyassar, al-Baghawi and as-Sa'di name Jibril (AS) without discussing any alternative. On this question the commentaries consulted here speak almost with one voice.",
            "bn": "সম্মানিত রাসূলটি কে? তাবারীর জবাব: জিবরাঈল। সঙ্গে তিনি যোগ করেন, তাফসীরবিদেরাও একই কথা বলেছেন। এ মত তিনি কাতাদা থেকে আনেন দুটি আলাদা সূত্রে, একটি সাঈদের মাধ্যমে, অন্যটি মা'মারের মাধ্যমে। দুটিরই শেষ একই ছোট্ট ব্যাখ্যায়: তিনি জিবরাঈল। কুরতুবী এ মতের পক্ষে নাম নেন হাসান, কাতাদা আর দাহহাকের। ইবন কাসীর দেন পূর্বসূরিদের আরও লম্বা তালিকা, যার শুরু ইবন আব্বাস দিয়ে। মুয়াসসার, বাগাভী আর সা'দী অন্য কোনো মতের আলোচনা না করেই জিবরাঈল (আঃ)-এর নাম বলেন। এ প্রশ্নে এখানে দেখা তাফসীরগুলো প্রায় এক সুরে কথা বলে।"
          },
          {
            "en": "Almost, because al-Qurtubi also records another reading, introduced only with the words it is said and with no authority named: the messenger is Muhammad ﷺ. Ma'arif al-Qur'an likewise notes that some commentators took it that way. On 81:21 al-Qurtubi shows how that reading would run. Possessed of power would then mean power to convey the message, and obeyed would mean obeyed by whoever obeys Allah. Every commentary consulted here adopts the first identification; the second is reported as they report it, with its own internal logic, and is not weighed further here.",
            "bn": "প্রায় বলছি, কারণ কুরতুবী আরেকটি মতও উল্লেখ করেন। মতটি তিনি আনেন শুধু 'বলা হয়' কথাটি দিয়ে, কারও নাম না নিয়ে: রাসূল মানে মুহাম্মাদ ﷺ। মাআরিফুল কুরআনও জানায়, কিছু তাফসীরকার এভাবে বুঝেছেন। ৮১:২১-এর আলোচনায় কুরতুবী দেখান, এ মত ধরলে পরের গুণগুলোর অর্থ কী দাঁড়ায়। শক্তিশালী মানে তখন বার্তা পৌঁছে দেওয়ার শক্তি। আর মান্য মানে, যে আল্লাহর আনুগত্য করে, সে তাঁরও আনুগত্য করে। এখানে দেখা প্রত্যেক তাফসীর প্রথম মতটি গ্রহণ করে। দ্বিতীয়টি তাঁরা যেভাবে উল্লেখ করেছেন, এখানেও সেভাবেই রাখা হলো, তার নিজস্ব যুক্তিসহ। এর বেশি ওজন করা এ পাতার কাজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Next Verses Supply",
          "bn": "পরের আয়াতগুলো যা জোগায়"
        },
        "p": [
          {
            "en": "The identification does not rest on reports alone. This verse leaves the noble messenger undescribed, and 81:20 and 81:21 complete the portrait: possessed of power, secure in rank with the Owner of the Throne, obeyed there, trustworthy. At-Tabari glosses each quality with Jibril in view. Possessed of power means not unequal to whatever he was charged with. Obeyed there means obeyed in heaven, where the angels obey him. Trustworthy means trusted by Allah with His revelation, His message and whatever else He entrusted to him. Under those verses he cites the identification again from Abu Salih, Maymun ibn Mihran, Ibn Abbas and ad-Dahhak.",
            "bn": "এ চিহ্নিতকরণ শুধু বর্ণনার উপর দাঁড়িয়ে নেই। এ আয়াত সম্মানিত রাসূলের আর কোনো বিবরণ দেয় না। ছবিটা পূর্ণ করে ৮১:২০ ও ৮১:২১: তিনি শক্তিশালী, আরশের মালিকের কাছে মর্যাদায় সুপ্রতিষ্ঠিত, সেখানে মান্য, বিশ্বস্ত। তাবারী প্রতিটি গুণের ব্যাখ্যা দেন জিবরাঈলকে সামনে রেখে। শক্তিশালী মানে, যে দায়িত্ব তাঁকে দেওয়া হয়েছে, তাতে তিনি অক্ষম নন। সেখানে মান্য মানে আসমানে মান্য, ফেরেশতারা তাঁর কথা মানে। বিশ্বস্ত মানে, আল্লাহ তাঁর ওহি, তাঁর বার্তা আর যা কিছু তাঁর হাতে আমানত রেখেছেন, সবকিছুতে তিনি আল্লাহর কাছে বিশ্বস্ত। ওই আয়াতগুলোর নিচে তাবারী আবু সালিহ, মাইমূন ইবন মিহরান, ইবন আব্বাস ও দাহহাক থেকেও একই চিহ্নিতকরণ আনেন।"
          },
          {
            "en": "As-Sa'di's gloss of trustworthy bears most directly on this verse. Jibril, he writes on 81:21, is a keeper of trust who carries out what he is commanded, adding nothing and taking nothing away, and not going beyond the limit set for him. That is what makes the ascription in 81:19 safe. A speech can be called the word of its carrier without doubt about its source only if the carrier is known to deliver it whole. The details of those two verses belong to their own pages; here they serve only to say who carried the word and how.",
            "bn": "বিশ্বস্ত শব্দের যে ব্যাখ্যা সা'দী দেন, তা এ আয়াতের সঙ্গে সবচেয়ে সরাসরি জড়িত। ৮১:২১-এর আলোচনায় তিনি লেখেন, জিবরাঈল আমানতদার, যা আদেশ করা হয় তা পালন করেন। তিনি কিছু বাড়ান না, কিছু কমান না, তাঁর জন্য টেনে দেওয়া সীমা ছাড়িয়ে যান না। ৮১:১৯-এ বাণীটিকে তাঁর দিকে সম্পর্কিত করা নিরাপদ এ কারণেই। বাহক পুরো বাণী অবিকল পৌঁছে দেন, এ কথা জানা থাকলে তবেই বাণীকে তার বাহকের কথা বলা যায়, উৎস নিয়ে কোনো সন্দেহ না জাগিয়ে। ওই দুই আয়াতের খুঁটিনাটি তাদের নিজেদের পাতার বিষয়। এখানে তারা শুধু জানায়, বাণীটি কে বয়ে এনেছেন, আর কীভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Karim, Three Ways Glossed",
          "bn": "কারীম শব্দের তিন ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Karim is the verse's last word and its only adjective, and the commentators do not give it a single sense. For al-Qurtubi it describes standing: karim 'ala Allah, honoured in Allah's sight. For as-Sa'di it describes character. Allah called him noble, he writes, for the nobility of his character and the abundance of his praiseworthy qualities, for he is the best of the angels and the greatest of them in rank with his Lord. Ibn Kathir calls him a noble angel, good in character and radiant in appearance, as the English abridgement renders his Arabic.",
            "bn": "কারীম আয়াতের শেষ শব্দ, আর একমাত্র বিশেষণ। তাফসীরকারেরা এর একটিমাত্র অর্থ দেন না। কুরতুবীর কাছে শব্দটি মর্যাদার কথা বলে: কারীমুন আলাল্লাহ, আল্লাহর দৃষ্টিতে সম্মানিত। সা'দীর কাছে এটি চরিত্রের কথা। তিনি লেখেন, আল্লাহ তাঁকে কারীম বলেছেন তাঁর চরিত্রের মহত্ত্ব আর প্রশংসনীয় গুণের প্রাচুর্যের কারণে। কেননা তিনি ফেরেশতাদের মধ্যে শ্রেষ্ঠ, আর তাঁর রবের কাছে মর্যাদায় সবার বড়। ইবন কাসীর তাঁকে বলেন সম্ভ্রান্ত ফেরেশতা, সুন্দর চরিত্রের, উজ্জ্বল চেহারার। ইংরেজি সংক্ষিপ্ত সংস্করণ তাঁর আরবিকে এভাবেই অনুবাদ করেছে।"
          },
          {
            "en": "The three glosses do not contradict one another, and none of the commentators sets one against another. Each names a ground of honour: standing with the Sender, nobility of character, and, in Ibn Kathir's gloss, radiance of appearance as well. The verse itself places the adjective on the carrier and says nothing more about him. It is 81:20 that begins to say what the honour consists of, and as-Sa'di, as the next section shows, draws the whole description back to the message it was given to carry.",
            "bn": "তিনটি ব্যাখ্যা পরস্পরবিরোধী নয়, আর কোনো তাফসীরকারও একটিকে অন্যটির বিপক্ষে দাঁড় করান না। প্রতিটি সম্মানের একটা ভিত্তির কথা বলে: প্রেরকের কাছে মর্যাদা, চরিত্রের মহত্ত্ব, আর ইবন কাসীরের ব্যাখ্যায় এর সঙ্গে চেহারার উজ্জ্বলতাও। আয়াত নিজে বিশেষণটি বসিয়ে দেয় বাহকের উপর, তাঁর সম্পর্কে আর কিছু বলে না। সম্মানটা আসলে কী, তা বলতে শুরু করে ৮১:২০। আর সা'দী, পরের অংশে যেমন দেখা যাবে, পুরো বিবরণটাকে ফিরিয়ে আনেন সেই বাণীর দিকে, যা বহনের দায়িত্ব তাঁকে দেওয়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Kings and Their Envoys",
          "bn": "রাজা আর তাঁদের দূত"
        },
        "p": [
          {
            "en": "As-Sa'di closes his comment on 81:21 by turning the praise of the messenger into a statement about the message. All of this, he writes, points to the honour of the Qur'an with Allah, since He sent it with this noble angel, described with those perfect qualities. Then he adds an observation from ordinary life: it is the custom that kings do not send one who is honoured by them except on the most important of tasks and with the noblest of messages. The rank of the envoy, on his reading, tells the hearer the weight of what the envoy carries.",
            "bn": "৮১:২১-এর আলোচনা শেষ করতে গিয়ে সা'দী রাসূলের প্রশংসাকে বাণীর প্রশংসায় বদলে দেন। তিনি লেখেন, এসব কিছু প্রমাণ করে আল্লাহর কাছে কুরআনের মর্যাদা কত বড়। কারণ তিনি এটি পাঠিয়েছেন এই সম্মানিত ফেরেশতার হাতে, যিনি এমন পূর্ণ গুণে গুণান্বিত। তারপর তিনি জুড়ে দেন সাধারণ জীবনের একটা পর্যবেক্ষণ: রাজাদের রীতি হলো, নিজেদের কাছে যিনি সম্মানিত, তাঁকে তাঁরা পাঠান কেবল সবচেয়ে জরুরি কাজে আর সবচেয়ে মর্যাদাপূর্ণ বার্তা দিয়ে। তাঁর পাঠে দূতের মর্যাদা শ্রোতাকে জানিয়ে দেয়, দূত কী বয়ে আনছেন, তার ওজন কত।"
          },
          {
            "en": "The comparison works because everyone has seen it. A grave message goes with someone trusted and senior; a passing note goes with whoever is at hand. On as-Sa'di's reading, the oaths of 81:15 to 81:18 are sworn on the height of the Qur'an's chain, and the honour of its carrier is offered as evidence for the worth of what passed along it. The hearer is asked to look past the man reciting in Makkah to the angel who brought it to him, and past both to Him who sent it.",
            "bn": "তুলনাটা কাজ করে, কারণ এমনটা সবাই দেখেছে। গুরুতর বার্তা যায় বিশ্বস্ত ও উঁচু পদের কারও হাতে। মামুলি চিরকুট যায় হাতের কাছে যে থাকে, তার হাতে। সা'দীর পাঠে ৮১:১৫ থেকে ৮১:১৮-এর শপথগুলো করা হয়েছে কুরআনের ধারার উচ্চতার উপর। আর তার বাহকের সম্মানকে পেশ করা হয়েছে সেই ধারা বেয়ে আসা জিনিসের মূল্যের প্রমাণ হিসেবে। শ্রোতাকে বলা হচ্ছে, মক্কায় যে মানুষটি তিলাওয়াত করছেন, তাঁকে ছাড়িয়ে দেখুন কে তাঁর কাছে এটি এনেছেন। তারপর দুজনকেই ছাড়িয়ে দেখুন, কে এটি পাঠিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Heard at the Dawn Prayer",
          "bn": "ফজরের তিলাওয়াতে শোনা"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith or an occasion of revelation to 81:19. The only report from the Prophet ﷺ that Ibn Kathir brings into his comment on 81:15 to 81:24 belongs to the oaths before it. Sahih Muslim (456) records from 'Amr ibn Hurayth: I heard the Messenger of Allah ﷺ recite in the morning prayer, wa-l-layli idha 'as'as, and by the night as it closes in. It concerns 81:17, it is not attached to this verse, and it says nothing about the noble messenger. It shows only that this oath was heard at dawn, in the Prophet's ﷺ own recitation.",
            "bn": "এ আয়াতের জন্য দেখা কোনো তাফসীর ৮১:১৯-এর সঙ্গে কোনো হাদীস বা নাজিলের প্রেক্ষাপট জুড়ে দেয় না। ৮১:১৫ থেকে ৮১:২৪-এর আলোচনায় ইবন কাসীর নবী ﷺ থেকে যে একটিমাত্র বর্ণনা আনেন, তা আগের শপথের আয়াতগুলোর। সহীহ মুসলিম (৪৫৬) আমর ইবন হুরাইস (রাঃ) থেকে বর্ণনা করে: আমি রাসূলুল্লাহ ﷺ-কে ফজরের নামাজে ওয়াল-লাইলি ইযা আস'আস পড়তে শুনেছি, শপথ রাতের যখন তা ঘনিয়ে আসে। বর্ণনাটি ৮১:১৭-এর, এ আয়াতের সঙ্গে যুক্ত নয়, আর সম্মানিত রাসূল সম্পর্কে কিছু বলে না। এটুকুই দেখায় যে এই শপথ ভোরবেলা শোনা গেছে, নবী ﷺ-এর নিজের তিলাওয়াতে।"
          },
          {
            "en": "What the verse asks of a reader is small to say and large to keep. It asks that the Qur'an be heard as a word that arrived: carried, not composed by its carrier, and sent by way of an envoy whom the commentators describe as honoured, strong and trustworthy. Each recitation since is a further handing on. A reader who keeps that in view will treat the text as something entrusted, adding nothing and dropping nothing, which is the very quality as-Sa'di found in the angel who first carried it down.",
            "bn": "আয়াতটি পাঠকের কাছে যা চায়, তা বলা সহজ, ধরে রাখা কঠিন। চায়, কুরআনকে শোনা হোক এমন এক বাণী হিসেবে, যা এসে পৌঁছেছে। বাহক তা বয়ে এনেছেন, রচনা করেননি। আর তা এসেছে এমন এক দূতের হাত হয়ে, তাফসীরকারেরা যাঁকে বলেন সম্মানিত, শক্তিশালী, বিশ্বস্ত। তারপর থেকে প্রতিটি তিলাওয়াত সেই হাতবদলেরই আরেক ধাপ। এ কথা যে পাঠক মনে রাখেন, তিনি এই বাণীকে আমানত হিসেবে আগলে রাখবেন, কিছু যোগ না করে, কিছু বাদ না দিয়ে। সা'দী ঠিক এই গুণটিই দেখেছিলেন সেই ফেরেশতার মধ্যে, যিনি প্রথম এটি নিয়ে নেমে এসেছিলেন।"
          }
        ]
      }
    ]
  },
  "81:22": {
    "sections": [
      {
        "h": {
          "en": "Three Words Against a Label",
          "bn": "এক তকমার বিরুদ্ধে তিন শব্দ"
        },
        "p": [
          {
            "en": "Wa-ma sahibukum bi-majnun: and your companion is not mad. In Arabic the verse is three words, the same count as 81:21 just before it. The first joins the connective wa to the particle ma; the i'rab notes used in this project call the wa resumptive and describe ma as a negative standing in the place of laysa, is not. The second is sahibu with the suffix kum: sahib, from the root s-h-b, and your, in the masculine plural. The third is bi-majnunin, the preposition bi attached to majnun, a passive participle from the root j-n-n, indefinite and genitive.",
            "bn": "ওয়ামা সাহিবুকুম বিমাজনূন: আর তোমাদের সঙ্গী পাগল নন। আরবিতে আয়াতটি তিনটি শব্দের, ঠিক আগের ৮১:২১ আয়াতের সমান। প্রথম শব্দে সংযোজক ওয়া জুড়েছে মা অব্যয়ের সঙ্গে। এই প্রকল্পে ব্যবহৃত ই'রাবের নোট ওয়া-কে বলে নতুন বাক্যের সূচনাকারী, আর মা-কে বলে না-বোধক অব্যয়, যা লাইসা অর্থাৎ 'নয়'-এর জায়গায় বসেছে। দ্বিতীয় শব্দ সাহিবু, সঙ্গে প্রত্যয় কুম: সাহিব এসেছে স-হ-ব ধাতু থেকে, আর কুম মানে তোমাদের, পুংলিঙ্গ বহুবচনে। তৃতীয় শব্দ বিমাজনূনিন: বি অব্যয় জুড়েছে মাজনূনের সঙ্গে। মাজনূন জ-ন-ন ধাতুর কর্মবাচ্য কৃদন্ত, অনির্দিষ্ট ও সম্বন্ধ-কারকে।"
          },
          {
            "en": "Two things in that grammar carry weight. The pronoun is plural, so the sentence is spoken to a group about a man they share, and the man is not named. The verse does not say the Prophet, or Muhammad, only your companion, leaving the hearers to supply whom it means. They could, and so do the commentators. Every tafsir consulted for this verse identifies the companion in the same way. Where they differ is in how widely they draw the circle of those addressed, and in what they say the charge of madness was meant to do.",
            "bn": "এই ব্যাকরণের দুটি দিক বিশেষ গুরুত্বপূর্ণ। সর্বনামটি বহুবচন, অর্থাৎ বাক্যটি একদল মানুষকে বলা, এমন একজনকে নিয়ে যিনি তাদের সবার চেনা। আর সেই মানুষটির নাম আয়াতে নেই। আয়াত 'নবী' বলেনি, 'মুহাম্মাদ' বলেনি, শুধু বলেছে তোমাদের সঙ্গী। কাকে বোঝানো হচ্ছে, তা শ্রোতারা নিজেরাই বুঝে নেবে। তারা বুঝেছিল, তাফসীরকারেরাও বোঝেন। এ আয়াতের জন্য সংগ্রহ করা প্রতিটি তাফসীর সঙ্গীকে একইভাবে চিহ্নিত করে। তাঁদের পার্থক্য অন্য জায়গায়: সম্বোধিত শ্রোতাদের পরিধি কতটা বড় করে আঁকেন, আর পাগলামির অভিযোগ দিয়ে আসলে কী করতে চাওয়া হয়েছিল বলে তাঁরা মনে করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming the Companion",
          "bn": "সঙ্গী কে, তার পরিচয়"
        },
        "p": [
          {
            "en": "At-Tabari glosses the verse as: and your companion, O people, Muhammad, is not mad. He then gives a chain of narrators through Ma'qil ibn Abdullah al-Jazari to Maymun ibn Mihran, who said of the phrase: that is Muhammad ﷺ. Ibn Kathir records the same identification from ash-Sha'bi, Maymun ibn Mihran, Abu Salih and others he had named earlier in the passage. Al-Qurtubi says in one clause that it means Muhammad ﷺ, and as-Sa'di does the same. On who the companion is, the commentators read here speak with one voice.",
            "bn": "তাবারী আয়াতের ব্যাখ্যা দেন এভাবে: হে লোকেরা, তোমাদের সঙ্গী মুহাম্মাদ পাগল নন। তারপর তিনি মা'কিল ইবন আবদুল্লাহ আল-জাযারীর মাধ্যমে মাইমূন ইবন মিহরান পর্যন্ত একটি বর্ণনাসূত্র দেন। মাইমূন এই বাক্যাংশ সম্পর্কে বলেছেন: তিনি হলেন মুহাম্মাদ ﷺ। ইবন কাসীর একই পরিচয় উল্লেখ করেন শা'বী, মাইমূন ইবন মিহরান, আবু সালিহ এবং আলোচনার আগের অংশে যাঁদের নাম তিনি নিয়েছেন তাঁদের সূত্রে। কুরতুবী এক বাক্যেই বলেন, এর দ্বারা মুহাম্মাদ ﷺ-কে বোঝানো হয়েছে। সা'দীও তা-ই বলেন। সঙ্গী কে, এ প্রশ্নে এখানে পড়া তাফসীরকারদের কথা এক।"
          },
          {
            "en": "Two glosses sharpen the address. Al-Baghawi writes that He says to the people of Makkah: and your companion, meaning Muhammad ﷺ, is not mad. The Muyassar puts it as: and Muhammad, whom you know, is not mad. That last clause turns the word companion into a statement of acquaintance: the hearers knew the man they were describing. At-Tabari's O people is wider than al-Baghawi's people of Makkah, a difference of wording rather than a dispute. Ma'arif al-Qur'an brackets the name Muhammad ﷺ after your companion and calls the verse a rebuttal of his enemies' criticism.",
            "bn": "দুটি ব্যাখ্যা সম্বোধনটাকে আরও স্পষ্ট করে। বাগাভী লেখেন, আল্লাহ মক্কাবাসীদের বলছেন: তোমাদের সঙ্গী, অর্থাৎ মুহাম্মাদ ﷺ, পাগল নন। মুয়াসসার বলে: আর মুহাম্মাদ, যাঁকে তোমরা চেনো, তিনি পাগল নন। এই শেষ বাক্যাংশটি 'সঙ্গী' শব্দটিকে পরিচয়ের সাক্ষ্যে পরিণত করে: যাঁর বর্ণনা শ্রোতারা দিচ্ছিল, তাঁকে তারা চিনত। তাবারীর 'হে লোকেরা' বাগাভীর 'মক্কাবাসী'র চেয়ে প্রশস্ত। এটা শব্দচয়নের পার্থক্য, মতবিরোধ নয়। মাআরিফুল কুরআন 'তোমাদের সঙ্গী'র পরে বন্ধনীতে মুহাম্মাদ ﷺ নামটি বসায় এবং আয়াতটিকে বলে তাঁর শত্রুদের সমালোচনার জবাব।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Charge Was Aimed At",
          "bn": "অভিযোগের নিশানা কোথায়"
        },
        "p": [
          {
            "en": "The commentators do not stop at naming the accused; they say what the accusation was meant to accomplish. At-Tabari's gloss runs: your companion is not mad, so that he would speak out of madness and rave as the mad rave. He closes with a clause in the Qur'an's own words, which are those of 37:37: rather, he came with the truth and confirmed the messengers. Al-Qurtubi's wording is shorter and more pointed: he is not mad, such that he should be suspected in what he says. In both, the charge is aimed at his speech.",
            "bn": "তাফসীরকারেরা শুধু অভিযুক্তের নাম বলেই থামেন না, অভিযোগ দিয়ে কী হাসিল করতে চাওয়া হয়েছিল তাও বলেন। তাবারীর ব্যাখ্যা: তোমাদের সঙ্গী পাগল নন যে তিনি পাগলামি থেকে কথা বলবেন, আর পাগলের মতো প্রলাপ বকবেন। তিনি শেষ করেন কুরআনেরই ভাষায় একটি বাক্যে, যা ৩৭:৩৭ আয়াতের শব্দ: বরং তিনি সত্য নিয়ে এসেছেন এবং রাসূলদের সত্যায়ন করেছেন। কুরতুবীর ভাষা আরও সংক্ষিপ্ত, আরও তীক্ষ্ণ: তিনি পাগল নন যে তাঁর কথায় তাঁকে সন্দেহ করা হবে। দুজনের ব্যাখ্যাতেই অভিযোগের নিশানা তাঁর কথা, তাঁর বাণী।"
          },
          {
            "en": "Al-Baghawi reports what was actually said: the people of Makkah said that he was mad, and that what he says he says from himself. The two claims travel together. If the speaker is not sound, then the words are his own, and if they are his own, nothing in them binds the hearer. As-Sa'di describes the accusers as his enemies who denied his message and spoke against him with sayings by which they wanted to extinguish what he had brought, as far as they wished and were able. For him the label was a tool for putting out a message.",
            "bn": "লোকেরা আসলে কী বলেছিল, বাগাভী তা জানান: মক্কাবাসীরা বলেছিল তিনি পাগল, আর তিনি যা বলেন তা নিজের পক্ষ থেকে বলেন। দাবি দুটি একসঙ্গে চলে। বক্তা সুস্থ না হলে কথাগুলো তাঁর নিজের, আর কথাগুলো নিজের হলে শ্রোতার উপর তার কোনো দায় নেই। সা'দী অভিযোগকারীদের বর্ণনা দেন তাঁর শত্রু হিসেবে, যারা তাঁর রিসালাতকে মিথ্যা বলেছিল আর তাঁর বিরুদ্ধে নানা কথা বানিয়েছিল। সেসব কথা দিয়ে তারা চেয়েছিল তাঁর আনা বাণীকে নিভিয়ে দিতে, যতটা তারা চাইল আর যতটা তাদের সাধ্যে কুলাল। সা'দীর চোখে তকমাটা ছিল একটা বাণী নিভিয়ে দেওয়ার হাতিয়ার।"
          },
          {
            "en": "As-Sa'di answers the label with its opposite, in three superlatives: rather, he is the most complete of people in intellect, the most abundant in sound judgment, and the most truthful in speech. Ma'arif al-Qur'an calls the verse a rebuttal of the foolish criticism of those enemies, adding God forbid where it reports their word insane. Across these readings the word majnun is weighed as an accusation with a purpose, made to discredit what he brought, and al-Qurtubi's clause names the link directly: madness is what would make his speech suspect.",
            "bn": "সা'দী তকমাটির জবাব দেন তার বিপরীত দিয়ে, তিনটি চূড়ান্ত বিশেষণে: বরং তিনি মানুষের মধ্যে বুদ্ধিতে সবচেয়ে পূর্ণ, বিবেচনায় সবচেয়ে সমৃদ্ধ, আর কথায় সবচেয়ে সত্যবাদী। মাআরিফুল কুরআন আয়াতটিকে বলে সেই শত্রুদের নির্বোধ সমালোচনার খণ্ডন, আর তাদের 'পাগল' শব্দটি উদ্ধৃত করার সময় যোগ করে 'নাউযুবিল্লাহ'। এসব ব্যাখ্যায় মাজনূন শব্দটিকে দেখা হয়েছে উদ্দেশ্যমূলক অভিযোগ হিসেবে, যা তাঁর আনা বাণীকে অবিশ্বাস্য করে তোলার জন্য তোলা হয়েছিল। কুরতুবীর বাক্যাংশ এই যোগসূত্রটি সরাসরি বলে দেয়: পাগলামিই তাঁর কথাকে সন্দেহজনক করে তুলত।"
          }
        ]
      },
      {
        "h": {
          "en": "Sworn on Stars and Dawn",
          "bn": "তারা ও ভোরের শপথে বাঁধা"
        },
        "p": [
          {
            "en": "The verse does not stand alone. From 81:15 the surah swears: by the stars that withdraw and run their courses and set, by the night as it closes in, by the dawn when it breathes. Al-Qurtubi says of 81:22 that it is part of the answer to the oath. Al-Baghawi says that this too is part of the answer to the oath, and spells out what was sworn: He swore that the Qur'an was brought down by Jibril, and that Muhammad is not as the people of Makkah say. On that reading the oaths carry two sworn statements, not one.",
            "bn": "আয়াতটি একা দাঁড়িয়ে নেই। ৮১:১৫ থেকে সূরাটি শপথ করে: সেই তারাগুলোর, যারা সরে যায়, পথ চলে আর লুকিয়ে পড়ে; রাতের, যখন তা ঘনিয়ে আসে; ভোরের, যখন তা নিঃশ্বাস ফেলে। কুরতুবী ৮১:২২ সম্পর্কে বলেন, এটি শপথের জবাবের অংশ। বাগাভী বলেন, এটিও শপথের জবাবের অংশ। কী নিয়ে শপথ করা হয়েছিল, তাও তিনি খুলে বলেন: আল্লাহ শপথ করেছেন যে কুরআন জিবরীল নিয়ে এসেছেন, আর মুহাম্মাদ তেমন নন যেমনটা মক্কাবাসীরা বলে। এই ব্যাখ্যায় শপথ করে বলা কথা তাহলে একটি নয়, দুটি।"
          },
          {
            "en": "The small word too in al-Baghawi points back to 81:19, it is the word of a noble messenger, as the first part of that answer. Ma'arif al-Qur'an calls 81:19 and 81:20 the subject of the oath, the statement that the Qur'an is the word brought by a noble messenger. It then says that in the next verses the Qur'an mentions the high status of the Prophet ﷺ and refutes the objections raised against him by those who rejected him. So the stars and the dawn are sworn by, on these readings, in defence of both the bringer of the message and the man who received it.",
            "bn": "বাগাভীর ছোট্ট শব্দ 'এটিও' পেছনে ৮১:১৯ আয়াতের দিকে ইঙ্গিত করে, যেখানে বলা হয়েছে এটি এক সম্মানিত রাসূলের বাণী। সেটিই ঐ জবাবের প্রথম অংশ। মাআরিফুল কুরআন ৮১:১৯ ও ৮১:২০ আয়াতকে বলে শপথের বিষয়বস্তু, অর্থাৎ এই ঘোষণা যে কুরআন এক সম্মানিত রাসূলের আনা বাণী। তারপর বলে, পরের আয়াতগুলোতে কুরআন নবী ﷺ-এর উচ্চ মর্যাদার কথা বলেছে এবং যারা তাঁকে প্রত্যাখ্যান করেছিল তাদের তোলা আপত্তিগুলো খণ্ডন করেছে। এসব ব্যাখ্যা অনুযায়ী তারকা আর ভোরের শপথ করা হয়েছে দুজনের পক্ষে: যিনি বাণী নিয়ে এসেছেন, আর যিনি তা গ্রহণ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Angel and the Man",
          "bn": "ফেরেশতা ও মানুষ, পাশাপাশি"
        },
        "p": [
          {
            "en": "The verses just before this one, 81:19 to 81:21, describe a noble messenger, possessed of power, secure in rank with the Owner of the Throne, obeyed there and trustworthy. They are not this page's subject and are named here only for the link. Ibn Kathir identifies that messenger as Jibril, reporting it from Ibn Abbas, ash-Sha'bi, Maymun ibn Mihran, al-Hasan, Qatada, ar-Rabi' ibn Anas, ad-Dahhak and others. Ma'arif al-Qur'an takes the same view, while noting that some commentators read the noble messenger as the Prophet ﷺ himself.",
            "bn": "ঠিক আগের আয়াতগুলো, ৮১:১৯ থেকে ৮১:২১, এক সম্মানিত রাসূলের বর্ণনা দেয়: তিনি শক্তিশালী, আরশের মালিকের কাছে মর্যাদায় সুপ্রতিষ্ঠিত, সেখানে মান্য ও বিশ্বস্ত। সেগুলো এ পাতার বিষয় নয়, এখানে শুধু যোগসূত্রের জন্য উল্লেখ করা হলো। ইবন কাসীর সেই রাসূলকে জিবরীল বলে চিহ্নিত করেন, আর এ মত বর্ণনা করেন ইবন আব্বাস, শা'বী, মাইমূন ইবন মিহরান, হাসান, কাতাদা, রাবী' ইবন আনাস, দাহহাক ও অন্যদের সূত্রে। মাআরিফুল কুরআনও একই মত নেয়, তবে উল্লেখ করে যে কিছু তাফসীরকার সম্মানিত রাসূল বলতে নবী ﷺ-কেই বুঝেছেন।"
          },
          {
            "en": "With that identification in place, two commentators read 81:22 as a deliberate pairing. As-Sa'di writes that having mentioned the excellence of the angelic messenger who came with the Qur'an, Allah mentioned the excellence of the human messenger on whom the Qur'an was sent down and who called people to it. Ibn Kathir calls it something very great: the Almighty Lord commended His servant and angelic messenger Jibril, just as He commended His servant and human messenger Muhammad ﷺ with the words, and your companion is not mad. The bringer and the receiver are vouched for side by side.",
            "bn": "এই পরিচয় ধরে নিয়ে দুজন তাফসীরকার ৮১:২২ আয়াতকে পড়েন এক সচেতন জোড় হিসেবে। সা'দী লেখেন, যে ফেরেশতা-রাসূল কুরআন নিয়ে এসেছেন তাঁর মর্যাদার কথা বলার পর আল্লাহ সেই মানব-রাসূলের মর্যাদার কথা বললেন, যাঁর উপর কুরআন নাজিল হয়েছে এবং যিনি মানুষকে এর দিকে ডেকেছেন। ইবন কাসীর একে বলেন এক বিরাট ব্যাপার: মহাপরাক্রমশালী রব তাঁর বান্দা ও ফেরেশতা-রাসূল জিবরীলের প্রশংসা করেছেন, ঠিক যেমন তাঁর বান্দা ও মানব-রাসূল মুহাম্মাদ ﷺ-এর প্রশংসা করেছেন এই কথায়: তোমাদের সঙ্গী পাগল নন। বাহক আর গ্রহীতা, দুজনের পক্ষেই সাক্ষ্য দেওয়া হয়েছে পাশাপাশি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Charges Answered in Turn",
          "bn": "একে একে অভিযোগের জবাব"
        },
        "p": [
          {
            "en": "After this verse come 81:23, that he saw him on the clear horizon, 81:24, that he does not withhold the unseen, and 81:25, that this is not the word of an accursed devil. Each has its own page, and their claims are not treated here. What matters for 81:22 is that the Muyassar glosses the run as one continuous passage: Muhammad, whom you know, is not mad; he saw Jibril on the great horizon; he is not miserly in conveying the revelation; and this Qur'an is not the word of a devil but the speech and revelation of Allah.",
            "bn": "এ আয়াতের পরে আসে ৮১:২৩, তিনি তাঁকে সুস্পষ্ট দিগন্তে দেখেছেন; ৮১:২৪, তিনি গায়েবের বিষয়ে কৃপণ নন; আর ৮১:২৫, এটি কোনো বিতাড়িত শয়তানের কথা নয়। প্রতিটির আলাদা পাতা আছে, তাদের বক্তব্য এখানে আলোচনা করা হচ্ছে না। ৮১:২২ আয়াতের জন্য যা জরুরি তা হলো, মুয়াসসার এই ধারাটিকে একটানা একটি অনুচ্ছেদ হিসেবে ব্যাখ্যা করে: মুহাম্মাদ, যাঁকে তোমরা চেনো, পাগল নন; তিনি জিবরীলকে বিশাল দিগন্তে দেখেছেন; ওহি পৌঁছে দেওয়ায় তিনি কৃপণ নন; আর এই কুরআন কোনো শয়তানের কথা নয়, বরং আল্লাহর কালাম ও তাঁর ওহি।"
          },
          {
            "en": "Read that way, the madness charge is the first in a line of objections, each answered in a single verse, before the surah asks in 81:26, so where are you going? This collection's page on 81:26 lists 81:22 among the charges answered one at a time and does not repeat what is said here. Ibn Kathir's gloss of that question is worth setting beside this verse: where has your reason gone, in rejecting this Qur'an while it is clear that it is the truth from Allah? The question of sound reason, raised against the Prophet ﷺ, comes back in that gloss addressed to his deniers.",
            "bn": "এভাবে পড়লে পাগলামির অভিযোগ একসারি আপত্তির প্রথমটি। প্রতিটির জবাব একটিমাত্র আয়াতে, তারপর ৮১:২৬ আয়াতে সূরাটি জিজ্ঞেস করে: তাহলে তোমরা কোথায় চলেছ? এই সংকলনের ৮১:২৬ আয়াতের পাতায় একে একে জবাব দেওয়া অভিযোগগুলোর মধ্যে ৮১:২২-এর নাম আছে, আর এখানে যা বলা হলো তা সেখানে পুনরাবৃত্তি করা হয়নি। সেই প্রশ্নের ব্যাখ্যায় ইবন কাসীর যা বলেন, তা এ আয়াতের পাশে রাখার মতো: তোমাদের বুদ্ধি কোথায় গেল, যখন তোমরা এই কুরআনকে প্রত্যাখ্যান করছ, অথচ স্পষ্ট যে এটি আল্লাহর পক্ষ থেকে সত্য? সুস্থ বুদ্ধির যে প্রশ্ন নবী ﷺ-এর বিরুদ্ধে তোলা হয়েছিল, সেই ব্যাখ্যায় তা ফিরে আসে তাঁর অস্বীকারকারীদের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Charge, Not a Diagnosis",
          "bn": "অভিযোগ, ডাক্তারি রায় নয়"
        },
        "p": [
          {
            "en": "A word on sources. None of the eight tafsirs consulted for this verse attaches to it a hadith with a collector's reference, so none is quoted here. At-Tabari's chain to Maymun ibn Mihran reports an explanation of the words, not a saying of the Prophet ﷺ. Al-Qurtubi records, under the words it is said, an account of an occasion of revelation, without a chain or a named collection; it could not be confirmed on a hadith page, so this article does not use it. What can be stated is its placement: al-Qurtubi and al-Baghawi set it inside the answer to the oath.",
            "bn": "উৎস নিয়ে একটি কথা। এ আয়াতের জন্য যে আটটি তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে সংকলকের সূত্রসহ কোনো হাদিস জুড়ে দেয়নি। তাই এখানে কোনো হাদিস উদ্ধৃত করা হয়নি। মাইমূন ইবন মিহরান পর্যন্ত তাবারীর যে সনদ, তাতে আছে শব্দগুলোর ব্যাখ্যা, নবী ﷺ-এর কোনো বাণী নয়। কুরতুবী 'বলা হয়' কথাটি দিয়ে আয়াতটি নাজিলের একটি প্রেক্ষাপট উল্লেখ করেছেন, কিন্তু তার কোনো সনদ নেই, কোনো সংকলনের নামও নেই। কোনো হাদিসের পাতায় তা মিলিয়ে দেখা যায়নি, তাই এ লেখায় তা নেওয়া হয়নি। নিশ্চিত করে যা বলা যায়, তা হলো আয়াতটির অবস্থান: কুরতুবী ও বাগাভী একে শপথের জবাবের ভেতরে রেখেছেন।"
          },
          {
            "en": "The verse answers what was said of the Prophet ﷺ by those who rejected him in his own time, whom the tafsirs name as the people of Makkah and his enemies who denied his message. It speaks only of what it names and licenses nothing against any living person or community. Nor does it speak about people who live with illness of the mind. In the tafsirs read here the word majnun is weighed only as a charge made to discredit a message, and none of them turns the verse towards the sick. Using it as an insult would repeat the very move it answers.",
            "bn": "আয়াতটি জবাব দিচ্ছে সেই কথার, যা নবী ﷺ-এর নিজের যুগে তাঁকে অস্বীকারকারীরা তাঁর সম্পর্কে বলত। তাফসীরগুলো তাদের চিনিয়ে দিয়েছে মক্কার লোকজন আর তাঁর রিসালাত অস্বীকারকারী শত্রু বলে। আয়াতের ভাষায় যা আছে, আয়াত কেবল সেটুকুই বলে। আজকের কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো ছাড়পত্র দেয় না। মনের অসুখ নিয়ে যাঁরা জীবন কাটাচ্ছেন, তাঁদের নিয়েও আয়াতটি কিছু বলে না। এখানে পড়া তাফসীরগুলোতে 'মাজনূন' শব্দটিকে দেখা হয়েছে কেবল একটা অভিযোগ হিসেবে, যা তোলা হয়েছিল বাণীটিকে হেয় করতে। কোনো তাফসীরই আয়াতটিকে অসুস্থ মানুষের দিকে ঘুরিয়ে দেয়নি। শব্দটিকে গালি হিসেবে ব্যবহার করা মানে ঠিক সেই কাজটিই আবার করা, যার জবাব আয়াতটি দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Labels That Close the Ears",
          "bn": "যে তকমা কান বন্ধ করে দেয়"
        },
        "p": [
          {
            "en": "The verse concerns the Prophet ﷺ, and nobody today stands in his place. Yet the move the commentators describe is easy to recognise. As at-Tabari and al-Baghawi lay it out, the charge did its work without touching the content: if the speaker is raving, and his words are his own, nothing he says needs an answer. The verse's reply does not argue first. It points back to what the hearers already knew, your companion, and as-Sa'di's three praises, intellect, judgment and truthful speech, are qualities that are seen by living beside a person, not proved from a distance.",
            "bn": "আয়াতটি নবী ﷺ-কে নিয়ে, আর আজ কেউ তাঁর জায়গায় দাঁড়িয়ে নেই। তবু তাফসীরকারেরা যে কৌশলের কথা বলেন, সেটা চিনতে কষ্ট হয় না। তাবারী ও বাগাভী যেভাবে বুঝিয়েছেন, অভিযোগটি বক্তব্যে হাত না দিয়েই কাজ সেরে ফেলেছিল: বক্তা যদি প্রলাপ বকেন, আর কথাগুলো যদি তাঁর নিজেরই বানানো হয়, তাহলে তাঁর কোনো কথার জবাব দেওয়ার দরকারই পড়ে না। আয়াতের জবাব শুরুতেই তর্কে নামে না। শ্রোতারা যা আগে থেকেই জানত, সেদিকে ফিরিয়ে দেয়: 'তোমাদের সঙ্গী'। সা'দী এখানে তিনটি প্রশংসার কথা বলেন: বুদ্ধি, বিবেচনা আর সত্য কথা। এগুলো এমন গুণ, যা কারও পাশে থেকে জীবন কাটালে চোখে পড়ে, দূর থেকে প্রমাণ করতে হয় না।"
          },
          {
            "en": "That gives a reader something to practise. When a message unsettles me, I can notice whether I am weighing it or reaching for a word that lets me stop listening to the person who brought it. When someone I know well is belittled with a label, I can say what years beside them have shown me. And I can keep the words I use about people who are unwell, in mind or in body, from becoming insults in my mouth. The surah's own next question, four verses on in 81:26, asks where its hearers are going once the labels are answered.",
            "bn": "পাঠকের জন্য এখানে অনুশীলন করার মতো কিছু আছে। কোনো বার্তা আমাকে অস্বস্তিতে ফেললে আমি খেয়াল করতে পারি: আমি কি কথাটা ওজন করে দেখছি, নাকি এমন একটা শব্দ খুঁজছি, যেটা বললেই যিনি বার্তা নিয়ে এসেছেন তাঁর কথা আর শুনতে হয় না? আমার খুব চেনা কাউকে কোনো তকমা দিয়ে ছোট করা হলে, তাঁর পাশে কাটানো বছরগুলো আমাকে যা দেখিয়েছে, আমি সেটা বলতে পারি। আর মনে বা শরীরে যাঁরা অসুস্থ, তাঁদের নিয়ে যে শব্দগুলো বলি, সেগুলো যেন আমার মুখে গালি হয়ে না ওঠে, সে খেয়াল রাখতে পারি। চার আয়াত পরে, ৮১:২৬-এ, সূরাটি নিজেই পরের প্রশ্নটি করে: তকমাগুলোর জবাব হয়ে গেলে শ্রোতারা এখন কোথায় চলেছে?"
          }
        ]
      }
    ]
  },
  "81:26": {
    "sections": [
      {
        "h": {
          "en": "Two Words, No Destination",
          "bn": "দুই শব্দ, গন্তব্যহীন"
        },
        "p": [
          {
            "en": "Fa-ayna tadhhabun: so where are you going? In the Arabic the verse is two words. Fa, so, is joined to ayna, where, and tadhhabun is a plural verb from dhahaba, to go or to depart. No destination is named and nothing follows the verb. The question is put to a whole audience at once, and it comes at the end of a passage in which, verse by verse, every ground for turning away from the Qur'an has been taken from them. The fa says the question is where those verses lead.",
            "bn": "ফাআইনা তাযহাবূন: তবে তোমরা কোথায় যাচ্ছ? আরবিতে আয়াতটি মাত্র দুই শব্দের। ফা মানে তাহলে, জুড়ে আছে আইনা অর্থাৎ কোথায়-এর সঙ্গে। তাযহাবূন বহুবচনের ক্রিয়া, এসেছে যাহাবা থেকে, যার মানে যাওয়া বা চলে যাওয়া। কোনো গন্তব্যের নাম নেই, ক্রিয়ার পরে আর কিছুও নেই। প্রশ্নটা ছোড়া হয়েছে গোটা শ্রোতাদলের দিকে একসঙ্গে। আর তা আসে এমন এক অংশের শেষে, যেখানে আয়াতের পর আয়াতে কুরআন থেকে মুখ ফেরানোর প্রতিটি অজুহাত কেড়ে নেওয়া হয়েছে। ফা জানিয়ে দেয়, ওই আয়াতগুলো এসে থামে এই প্রশ্নেই।"
          },
          {
            "en": "The verb is of movement, not of belief. It does not ask the listeners what they hold to be true; it asks which way they are heading. The commentators supply the missing words in different ways, and most of this article follows them: going away from what, by which road, and with what kind of mind. First, though, comes the ground the surah itself has laid.",
            "bn": "ক্রিয়াটি চলার, বিশ্বাসের নয়। শ্রোতারা কী সত্য মানে, প্রশ্নটা তা জানতে চায় না। জানতে চায়, তারা কোন দিকে চলেছে। যে শব্দগুলো উহ্য, তাফসীরকারেরা সেগুলো নানাভাবে পূরণ করেছেন, আর এ লেখার বেশির ভাগ তাঁদেরই অনুসরণ। কিসের থেকে সরে যাওয়া, কোন পথে, কেমন বুদ্ধি নিয়ে। তবে তার আগে দেখা দরকার, সূরা নিজে কোন জমি তৈরি করে রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Oaths Defend",
          "bn": "শপথগুলো যার পক্ষে"
        },
        "p": [
          {
            "en": "The surah opens on the end of the world: the sun folded up in 81:1, the buried girl asked in 81:8, the Fire kindled in 81:12. Then come oaths, and Ma'arif al-Qur'an names what they swear to in 81:19: that the Qur'an is the word brought by a noble messenger. Three qualities follow. He possesses power; he has high rank with Allah and is obeyed in the upper realm; and he is trustworthy, with no possibility of breach or of tampering with what he conveys.",
            "bn": "সূরাটা শুরু হয় দুনিয়ার শেষ দৃশ্য দিয়ে। ৮১:১-এ সূর্য গুটিয়ে নেওয়া, ৮১:৮-এ জীবন্ত পুঁতে ফেলা মেয়েটিকে জিজ্ঞাসা, ৮১:১২-তে জাহান্নাম উসকে দেওয়া। তারপর আসে কয়েকটি শপথ। মাআরিফুল কুরআন জানায়, ৮১:১৯-এ শপথগুলোর বিষয় এই কথা: কুরআন এক সম্মানিত বার্তাবাহকের আনা বাণী। এরপর তাঁর তিনটি গুণ। তিনি শক্তির অধিকারী। আল্লাহর কাছে তাঁর উঁচু মর্যাদা, ঊর্ধ্বজগতে তাঁর কথা মানা হয়। আর তিনি বিশ্বস্ত, যা পৌঁছে দেন তাতে খেয়ানত বা হেরফেরের কোনো সুযোগ নেই।"
          },
          {
            "en": "Ma'arif says the noble messenger obviously refers to the angel Jibril (AS), since the word messenger is used for angels as it is for prophets, and all three qualities are truly present in him. For his power it cites 53:5, taught to him by one of strong faculties; for his being obeyed, the account of the Mi'raj, in which the angels at the doors of the sky opened them at his order. It also records that some commentators take the noble messenger to be the Prophet ﷺ himself.",
            "bn": "মাআরিফের মতে সম্মানিত বার্তাবাহক বলতে স্পষ্টতই ফেরেশতা জিবরীল (আঃ)-কে বোঝানো হয়েছে। কারণ রাসূল শব্দটি নবীদের মতো ফেরেশতাদের বেলায়ও আসে, আর তিনটি গুণই সত্যিকার অর্থে তাঁর মধ্যে আছে। তাঁর শক্তির প্রমাণে মাআরিফ আনে ৫৩:৫: তাঁকে শিক্ষা দিয়েছেন প্রবল শক্তিধর একজন। তাঁর কথা মানার প্রমাণ মি'রাজের ঘটনা, যেখানে আসমানের দরজায় নিযুক্ত ফেরেশতারা তাঁর আদেশে দরজা খুলে দিয়েছিলেন। মাআরিফ এটাও জানায় যে কিছু তাফসীরকার সম্মানিত বার্তাবাহক বলতে নবী ﷺ-কেই বুঝেছেন।"
          },
          {
            "en": "Then the charges against the Prophet ﷺ are answered. In 81:22, your companion is not mad, which Ma'arif calls a rebuttal of the enemies' foolish criticism. In 81:23, he saw him on the clear horizon, which Ma'arif reads as the Prophet ﷺ seeing Jibril (AS) in his original shape, so that no room is left for doubt about the revelation he brings. In 81:24, he does not withhold the unseen. In 81:25, this is not the word of an accursed devil.",
            "bn": "এরপর নবী ﷺ-এর বিরুদ্ধে তোলা অভিযোগগুলোর জবাব। ৮১:২২ বলে, তোমাদের সঙ্গী পাগল নন। মাআরিফ একে বলে শত্রুদের নির্বোধ সমালোচনার খণ্ডন। ৮১:২৩ বলে, তিনি তাঁকে স্পষ্ট দিগন্তে দেখেছেন। মাআরিফের ব্যাখ্যায় নবী ﷺ জিবরীল (আঃ)-কে তাঁর আসল আকৃতিতে দেখেছিলেন, তাই তিনি যে ওহি আনেন তার সত্যতা নিয়ে সন্দেহের জায়গা থাকে না। ৮১:২৪ বলে, গায়বের ব্যাপারে তিনি কৃপণ নন। ৮১:২৫ বলে, এটা কোনো বিতাড়িত শয়তানের কথা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "As One Goes to Market",
          "bn": "বাজারে যাওয়ার ভাষায়"
        },
        "p": [
          {
            "en": "At-Tabari stops on a point of usage. The verse says fa-ayna tadhhabun, where are you going, and not fa-ila ayna, to where, just as the Arabs say dhahabtu ash-Sham, I went Syria, and dhahabtu as-suq, I went the market, with the word for to left out. He reports a phrase heard from the Arabs, intalaqa bihi al-ghawr, he took him off the lowland, meaning to it, and a line by a poet of Banu 'Uqayl in which ayya al-ard, which land, stands for to which land.",
            "bn": "তাবারী এখানে ভাষার একটি ব্যবহার নিয়ে থামেন। আয়াতে আছে ফাআইনা তাযহাবূন, কোথায় যাচ্ছ। ফাইলা আইনা, অর্থাৎ কোন দিকে, বলা হয়নি। আরবরা যেমন বলে যাহাবতুশ শাম, আমি শাম গেলাম, কিংবা যাহাবতুস সূক, আমি বাজার গেলাম, দিকে অর্থের শব্দটা বাদ দিয়ে। আরবদের মুখে শোনা একটি বাক্যও তিনি আনেন: ইনতালাকা বিহিল গাওর, সে তাকে নিয়ে নিচু ভূমি চলে গেল, মানে সেদিকে। সঙ্গে বনু উকাইলের এক কবির একটি চরণ, যেখানে আইয়াল আরদ, কোন ভূমি, বসেছে কোন ভূমির দিকে অর্থে।"
          },
          {
            "en": "Dropping the to was allowed, at-Tabari says, because these expressions were in constant use. Al-Qurtubi notes that both where are you going and to where are you going are said, and reports that al-Farra' heard the Arabs say I went Syria, I went out Iraq and I set off the market, meaning to them, in just these three verbs. So ayna here asks for a destination, and the phrasing, on their account, is the everyday speech of setting out.",
            "bn": "তাবারী বলেন, এসব কথা সারাক্ষণ মুখে মুখে চলত বলেই দিকে-র শব্দটা বাদ দেওয়া চলেছে। কুরতুবী মনে করিয়ে দেন, কোথায় যাচ্ছ আর কোন দিকে যাচ্ছ, দুটোই বলা হয়। তিনি ফাররা থেকে জানান, ফাররা আরবদের বলতে শুনেছেন, শাম গেলাম, ইরাক বেরোলাম, বাজার রওনা হলাম, মানে সেগুলোর দিকে। আর শুনেছেন ঠিক এই তিনটি ক্রিয়াতেই। তাহলে এখানে আইনা জানতে চায় গন্তব্য। আর তাঁদের বিবরণ অনুযায়ী বাক্যের গড়নটা রোজকার পথে বেরোনোর ভাষা।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning Aside From the Book",
          "bn": "কিতাব থেকে সরে পড়া"
        },
        "p": [
          {
            "en": "At-Tabari's own gloss reads: where are you going away from this Qur'an, turning aside from it? The verb he adds, ta'dilun, is used for swerving off a course, and he says the people of interpretation said the same. His witness is Qatada, through a chain of Bishr, Yazid and Sa'id: where do you turn aside from My Book and My obedience? The words are put in Allah's voice, and they name two things left behind at once, a book and the obedience it asks for.",
            "bn": "তাবারীর নিজের ব্যাখ্যা: এই কুরআন ছেড়ে তোমরা কোথায় চলেছ, এর থেকে কোথায় সরে যাচ্ছ? তিনি যে ক্রিয়াটি যোগ করেন, তা'দিলূন, সেটা পথ থেকে বেঁকে যাওয়ার শব্দ। তিনি জানান, তাফসীরবিদেরাও এমনই বলেছেন। তাঁর সাক্ষী কাতাদা, বিশর, ইয়াযীদ ও সাঈদের সূত্রে: আমার কিতাব আর আমার আনুগত্য থেকে তোমরা কোথায় সরে যাচ্ছ? কথাটা বলা হয়েছে আল্লাহর জবানিতে। আর তাতে একসঙ্গে দুটি জিনিস ছেড়ে যাওয়ার কথা আছে, একটি কিতাব আর সেই কিতাব যে আনুগত্য চায়।"
          },
          {
            "en": "Al-Qurtubi has Qatada through Ma'mar: to where do you turn aside from this word and from obedience to Him, that is, from My Book and My obedience. Ibn Kathir gives Qatada's line as away from the Book of Allah and from obedience to Him. Al-Baghawi keeps at-Tabari's verb and adds why the swerve is strange: where do you turn aside from this Qur'an, when in it there is healing and clear explanation?",
            "bn": "কুরতুবী কাতাদার কথা আনেন মা'মারের সূত্রে: এই বাণী আর তাঁর আনুগত্য থেকে তোমরা কোন দিকে সরে যাচ্ছ, মানে আমার কিতাব আর আমার আনুগত্য থেকে। ইবন কাসীরের বর্ণনায় কাতাদার কথা: আল্লাহর কিতাব আর তাঁর আনুগত্য থেকে। বাগাভী তাবারীর ক্রিয়াটাই রাখেন, সঙ্গে জুড়ে দেন সরে যাওয়াটা কেন অদ্ভুত: এই কুরআন থেকে কোথায় সরে যাচ্ছ, অথচ এতে আছে আরোগ্য আর সুস্পষ্ট বর্ণনা?"
          }
        ]
      },
      {
        "h": {
          "en": "Which Road Is Plainer",
          "bn": "এর চেয়ে স্পষ্ট পথ কোনটি"
        },
        "p": [
          {
            "en": "Az-Zajjaj, quoted by both al-Qurtubi and al-Baghawi, turns the question into a comparison of roads: which way do you take that is clearer than this way, which has been made clear to you? On his reading the verse does not ask whether there is a road at all. It grants that the listeners are walking somewhere and asks them to name a path plainer than the one just laid out. Only silence can answer it, since by the surah's argument no such path exists.",
            "bn": "যাজ্জাজের কথা আনেন কুরতুবী ও বাগাভী দুজনেই। তিনি প্রশ্নটাকে নিয়ে যান পথের তুলনায়: যে পথ তোমাদের জন্য স্পষ্ট করে দেওয়া হয়েছে, তার চেয়ে স্পষ্ট কোন পথ তোমরা ধরছ? তাঁর পাঠে আয়াতটি জানতে চায় না, আদৌ পথ আছে কি না। শ্রোতারা যে কোথাও না কোথাও হাঁটছে, তা মেনে নিয়েই বলে: এইমাত্র দেখানো পথের চেয়ে পরিষ্কার একটা পথের নাম বলো। এর জবাব নীরবতা ছাড়া কিছু হতে পারে না, কারণ সূরার যুক্তিতে তেমন কোনো পথ নেই।"
          },
          {
            "en": "Al-Qurtubi also records that al-Junayd said the meaning of the verse is joined to another verse, 15:21: and there is nothing but that its treasuries are with Us. He then restates the meaning as: which road do you take plainer than the road Allah has made clear to you, and says this is the meaning of az-Zajjaj's words. He does not spell out how the two verses meet, and this article will not guess.",
            "bn": "কুরতুবী আরও জানান, জুনাইদ বলেছেন, এ আয়াতের অর্থ আরেকটি আয়াতের সঙ্গে জোড়া: ১৫:২১, আর এমন কোনো জিনিস নেই যার ভাণ্ডার আমার কাছে নেই। এরপর কুরতুবী অর্থটা আবার বলেন এভাবে: আল্লাহ তোমাদের জন্য যে পথ স্পষ্ট করে দিয়েছেন, তার চেয়ে স্পষ্ট কোন পথ তোমরা ধরছ? আর বলেন, যাজ্জাজের কথার অর্থও এটাই। দুই আয়াত কোথায় গিয়ে মেলে, তা তিনি খুলে বলেননি, এ লেখাও আন্দাজ করবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Mind Has Wandered",
          "bn": "বুদ্ধি কোথায় হারাল"
        },
        "p": [
          {
            "en": "Ibn Kathir moves the going from the feet to the mind: where do your minds go, in your denying this Qur'an, despite how manifest and clear it is, and how plain that it came from Allah? The Muyassar puts it in nearly the same terms: where do your minds take you, in calling the Qur'an a lie after these decisive proofs? In both, the traveller is the intellect, and what has wandered off is judgement.",
            "bn": "ইবন কাসীর যাওয়াটাকে পা থেকে সরিয়ে আনেন বুদ্ধিতে: এই কুরআনকে মিথ্যা বলতে গিয়ে তোমাদের বুদ্ধি কোথায় যায়, অথচ তা কতটা প্রকাশ্য, কতটা স্পষ্ট, আর আল্লাহর কাছ থেকে যে এসেছে তাও কত পরিষ্কার! মুয়াসসার প্রায় একই কথা বলে: এতসব অকাট্য প্রমাণের পরেও কুরআনকে মিথ্যা বলতে তোমাদের বুদ্ধি তোমাদের কোথায় নিয়ে যায়? দুই ব্যাখ্যাতেই পথিক হলো বুদ্ধি, আর পথ হারিয়েছে বিবেচনা।"
          },
          {
            "en": "Ibn Kathir illustrates it with a saying of Abu Bakr as-Siddiq. When the delegation of Banu Hanifa came as Muslims, he had them recite some of what Ibn Kathir calls the Qur'an of Musaylima, which he describes as the utmost in raving and feebleness. Abu Bakr said: Woe to you, where are your minds being taken? By Allah, this speech did not come out of an il, that is, a god. Ibn Kathir gives it here without a chain, and it is Abu Bakr's remark, not a hadith of the Prophet ﷺ.",
            "bn": "ইবন কাসীর কথাটা বোঝান আবু বকর সিদ্দীক (রাঃ)-এর একটি উক্তি দিয়ে। বনু হানীফার প্রতিনিধিদল মুসলমান হয়ে এলে তিনি তাদের দিয়ে পড়িয়ে শুনলেন ইবন কাসীর যাকে বলেন মুসাইলিমার কুরআন, তার কিছু অংশ। ইবন কাসীর সেই রচনাকে বলেন চরম প্রলাপ আর দুর্বলতার নমুনা। আবু বকর (রাঃ) বললেন: আফসোস তোমাদের জন্য, তোমাদের বুদ্ধি কোথায় নিয়ে যাওয়া হচ্ছে? আল্লাহর কসম, এ কথা কোনো ইল, অর্থাৎ কোনো ইলাহ থেকে বের হয়নি। ইবন কাসীর এখানে কোনো সনদ দেননি। আর এটি আবু বকর (রাঃ)-এর উক্তি, নবী ﷺ-এর হাদীস নয়।"
          },
          {
            "en": "As-Sa'di asks it in his own words: how does this cross your minds, and where have your thoughts strayed, that you have put the truth, which stands at the highest degree of truthfulness, in the place of the lie, the lowest and basest falsehood there is? Is this anything but an inversion of realities? The commentators differ here in emphasis, not in substance. For at-Tabari, Qatada and al-Baghawi the question weighs what is being left; for az-Zajjaj, which road is taken; for Ibn Kathir, the Muyassar and as-Sa'di, the mind that does the choosing.",
            "bn": "সা'দী প্রশ্নটা তোলেন নিজের ভাষায়: এ কথা তোমাদের মাথায় আসে কী করে, তোমাদের মন কোথায় হারিয়ে গেল? সত্য, যা সত্যবাদিতার সর্বোচ্চ স্তরে, তাকে তোমরা বসিয়ে দিলে মিথ্যার জায়গায়, যা সবচেয়ে নিচু আর সবচেয়ে হীন বাতিল! এ কি বাস্তবতাকে উল্টে দেওয়া ছাড়া আর কিছু? এখানে তাফসীরকারদের তফাত জোরের জায়গায়, মূল কথায় নয়। তাবারী, কাতাদা ও বাগাভীর কাছে প্রশ্নটা মাপে কী ছেড়ে যাওয়া হচ্ছে। যাজ্জাজের কাছে কোন পথ ধরা হচ্ছে। আর ইবন কাসীর, মুয়াসসার ও সা'দীর কাছে সেই বুদ্ধি, যে বেছে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reminder, Then the Will",
          "bn": "উপদেশ, তারপর ইচ্ছা"
        },
        "p": [
          {
            "en": "The surah does not leave its question hanging. 81:27: it is nothing but a reminder to the worlds. At-Tabari takes huwa, it, as the Qur'an: nothing but a reminder and admonition to the worlds of jinn and humans. Al-Qurtubi notes that in here has the sense of ma, not, and then, under it is said, gives a second reading of the pronoun: Muhammad ﷺ is nothing but a reminder.",
            "bn": "সূরা তার প্রশ্নটা ঝুলিয়ে রাখে না। ৮১:২৭: এটা তো বিশ্ববাসীর জন্য উপদেশ ছাড়া আর কিছু নয়। তাবারী হুয়া, অর্থাৎ এটা, বলতে বোঝেন কুরআন: জিন ও মানুষ, দুই জগতের জন্য স্মরণ আর নসীহত। কুরতুবী জানান, এখানে ইন এসেছে মা অর্থে, মানে নয়। তারপর 'বলা হয়' কথাটি দিয়ে সর্বনামের আরেকটি পাঠ আনেন: মুহাম্মাদ ﷺ উপদেশ ছাড়া আর কিছু নন।"
          },
          {
            "en": "81:28 narrows the address: for whoever among you wills to go straight. At-Tabari explains that this for stands in place of the for in to the worlds, so that Allah made the Qur'an a reminder for those of the worlds who will to go straight, and not for all of them. Mujahid, in a chain at-Tabari gives, glosses going straight as following the truth. Ibn Kathir: whoever wants guidance, let him hold to this Qur'an, for it is his rescue, and there is no guidance in anything besides it.",
            "bn": "৮১:২৮ সম্বোধনটা সরু করে আনে: তোমাদের মধ্যে যে সোজা পথে চলতে চায়, তার জন্য। তাবারী বুঝিয়ে দেন, লিমান-এর লাম আগের আয়াতের লিল-আলামীন-এর লামের জায়গায় বসেছে। ফলে আল্লাহ কুরআনকে উপদেশ করেছেন বিশ্ববাসীর মধ্যে যারা সোজা পথে চলতে চায় তাদের জন্য, সবার জন্য নয়। তাবারীর উদ্ধৃত এক সূত্রে মুজাহিদ সোজা চলার ব্যাখ্যা দেন: হক অনুসরণ করা। ইবন কাসীর বলেন, যে হিদায়াত চায় সে এই কুরআন আঁকড়ে ধরুক। এটাই তার মুক্তির উপায়, এর বাইরে কোনো হিদায়াত নেই।"
          },
          {
            "en": "Then 81:29: and you do not will unless Allah wills, Lord of the worlds. At-Tabari introduces a report as what is mentioned to be the cause of its revelation, and gives it in three chains that end at Sulayman ibn Musa: when 81:28 came down, Abu Jahl said, the matter is up to us; if we wish we go straight, and if we wish we do not. Then Allah sent down 81:29. Ibn Kathir has it through Sufyan ath-Thawri to Sulayman, and al-Qurtubi names Abu Hurayra alongside him. None of the three grades it here.",
            "bn": "তারপর ৮১:২৯: আর তোমরা ইচ্ছা করতে পারো না, যদি না বিশ্বজগতের রব আল্লাহ ইচ্ছা করেন। তাবারী একটি বর্ণনা আনেন এই বলে যে, উল্লেখ আছে এটাই আয়াতটি নাযিলের কারণ। তিনি তা দেন তিনটি সূত্রে, যার সবগুলো গিয়ে থামে সুলাইমান ইবন মূসায়। ৮১:২৮ নাযিল হলে আবু জাহল বলল, ব্যাপারটা আমাদের হাতে, চাইলে সোজা চলব, না চাইলে চলব না। তখন আল্লাহ ৮১:২৯ নাযিল করলেন। ইবন কাসীর এটি আনেন সুফিয়ান সাওরীর সূত্রে সুলাইমান পর্যন্ত, আর কুরতুবী তাঁর সঙ্গে আবু হুরায়রা (রাঃ)-এর নামও নেন। তিনজনের কেউই এখানে বর্ণনাটির মান বলেননি।"
          },
          {
            "en": "The commentators then speak of the will in their own terms. Ibn Kathir: the will is not handed over to you, so that whoever wills is guided and whoever wills goes astray; all of it follows the will of Allah. Al-Baghawi and al-Qurtubi: no one does good except by Allah's enabling, nor evil except by His forsaking. Al-Qurtubi quotes al-Hasan: by Allah, the Arabs did not will Islam until Allah willed it for them. As-Sa'di calls the verse a reply to both Qadari factions, an-nufat, who deny, and al-mujbira, who assert compulsion.",
            "bn": "এরপর তাফসীরকারেরা ইচ্ছা নিয়ে কথা বলেন নিজেদের ভাষায়। ইবন কাসীর: ইচ্ছা তোমাদের হাতে ছেড়ে দেওয়া হয়নি যে, যে চাইবে সে হিদায়াত পাবে আর যে চাইবে সে পথ হারাবে। সবই আল্লাহর ইচ্ছার অধীন। বাগাভী ও কুরতুবী বলেন, আল্লাহর তাওফীক ছাড়া কেউ ভালো কাজ করে না, আর তাঁর পরিত্যাগ ছাড়া মন্দও করে না। কুরতুবী হাসানের কথা উদ্ধৃত করেন: আল্লাহর কসম, আরবরা ইসলাম চায়নি, যতক্ষণ না আল্লাহ তাদের জন্য তা চেয়েছেন। সা'দী আয়াতটিকে বলেন কাদারিয়াদের দুই দলের জবাব: নুফাত, যারা অস্বীকার করে, আর মুজবিরা, যারা বাধ্যবাধকতার কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Question Rebukes",
          "bn": "প্রশ্নটা কাদের ভর্ৎসনা"
        },
        "p": [
          {
            "en": "The commentators are plain about who is addressed. Ibn Kathir speaks of your denying this Qur'an, the Muyassar of calling it a lie after decisive proofs, and the report on 81:29 names Abu Jahl. The verse describes what the text describes: a rebuke to those who rejected the Qur'an once its messenger and its recipient had been vouched for. It licenses nothing against any living person or community, and gives no one a warrant to throw the question at a neighbour as a verdict on where that neighbour is headed.",
            "bn": "কাকে বলা হচ্ছে, তাফসীরকারেরা তা খোলাখুলি বলেন। ইবন কাসীর বলেন এই কুরআনকে মিথ্যা বলার কথা, মুয়াসসার বলে অকাট্য প্রমাণের পরেও মিথ্যা বলার কথা, আর ৮১:২৯-এর বর্ণনায় নাম আছে আবু জাহলের। পাঠে যা আছে, আয়াতটি সেটুকুই বর্ণনা করে: বার্তাবাহক আর গ্রহীতা দুজনের সত্যতা নিশ্চিত হওয়ার পরও যারা কুরআন প্রত্যাখ্যান করেছিল, তাদের প্রতি ভর্ৎসনা। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। প্রতিবেশী কোন দিকে যাচ্ছে, সে রায় দিতে এই প্রশ্ন তার দিকে ছুড়ে মারার অধিকারও কাউকে দেয় না।"
          },
          {
            "en": "None of the tafsirs consulted here attaches a hadith of the Prophet ﷺ to this verse; the one report brought to it is Abu Bakr's remark, given without a chain. What the verse leaves the reader is the question itself, and the commentators have already shown three ways to ask it. What am I leaving: in Qatada's words, a book and its obedience. Which road am I on, and is any plainer: with az-Zajjaj. Where has my mind gone: with Ibn Kathir and as-Sa'di.",
            "bn": "যে তাফসীরগুলো এখানে দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে নবী ﷺ-এর কোনো হাদীস জোড়েনি। এর সঙ্গে আনা একমাত্র বর্ণনা আবু বকর (রাঃ)-এর উক্তি, তাও সনদ ছাড়া। পাঠকের জন্য আয়াতটি রেখে যায় প্রশ্নটাই, আর তাফসীরকারেরা তা জিজ্ঞেস করার তিনটি ধরন দেখিয়ে দিয়েছেন। আমি কী ছেড়ে যাচ্ছি: কাতাদার ভাষায় একটি কিতাব আর তার আনুগত্য। আমি কোন পথে আছি, এর চেয়ে স্পষ্ট পথ কি আছে: যাজ্জাজের সঙ্গে। আর আমার বুদ্ধি কোথায় গেল: ইবন কাসীর ও সা'দীর সঙ্গে।"
          },
          {
            "en": "As-Sa'di's gloss on 81:28 sets an order: the will to go straight is spoken of after right guidance has been made distinct from error. The surah keeps that order. It clears the ground through 81:25, asks its hearers where they are going in 81:26, and only then says the road is open to whoever wills it, and that this willing itself rests with the Lord of the worlds. Asked of oneself, the two words keep the same order: first the plain road, then an honest look at one's own direction.",
            "bn": "৮১:২৮-এর ব্যাখ্যায় সা'দী একটা ক্রম ঠিক করে দেন: সোজা চলার ইচ্ছার কথা আসে সঠিক পথ আর বিভ্রান্তি আলাদা হয়ে যাওয়ার পরে। সূরাও এই ক্রম মানে। ৮১:২৫ পর্যন্ত জমি পরিষ্কার করে, ৮১:২৬-এ শ্রোতাদের জিজ্ঞেস করে তারা কোথায় যাচ্ছে। তারপরেই বলে, পথ খোলা আছে যে চায় তার জন্য, আর এই চাওয়াও বিশ্বজগতের রবের ইচ্ছার অধীন। নিজেকে জিজ্ঞেস করলেও দুই শব্দের প্রশ্নটা একই ক্রম রাখে। আগে পরিষ্কার পথ, তারপর নিজের চলার দিকটার দিকে সৎভাবে তাকানো।"
          }
        ]
      }
    ]
  }
});
