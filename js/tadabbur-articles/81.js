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
          "en": "Two Words",
          "bn": "দুটি শব্দ"
        },
        "p": [
          {
            "en": "The Arabic is two words: fa-ayna tadhhabun. The first is the connective fa, and so, written joined to ayna, where; the second is a verb in the second-person plural, are you going. There is no noun, no object and no destination named anywhere in it. A question that short can only work if everything it depends on has already been said, and in this surah all of it has.",
            "bn": "আরবিতে কথাটি মাত্র দুটি শব্দ: 'ফাআইনা তাযহাবূন'। প্রথম শব্দে আছে সংযোজক 'ফা', মানে 'তাহলে', যা 'আইনা' (কোথায়) শব্দের সঙ্গে জুড়ে লেখা। দ্বিতীয়টি ক্রিয়াপদ, অনেকজনকে সামনাসামনি সম্বোধন করে: 'তোমরা চলেছ'। এর কোথাও কোনো বিশেষ্য নেই, কর্ম নেই, কোনো গন্তব্যের নামও নেই। এত ছোট প্রশ্ন তখনই কাজ করে, যখন তার পেছনের সব কথা আগেই বলা হয়ে গেছে। আর এই সূরায় তা সবই বলা হয়েছে।"
          },
          {
            "en": "The verb is worth weighing. Dhahaba is to go, to depart, plain motion, and the question is built on it rather than on believing or thinking. It does not ask what you hold to be true. It asks which way you are moving, which is a different question and often has a different answer, since people routinely walk in a direction they would not defend if they were asked to describe it aloud.",
            "bn": "ক্রিয়াপদটি নিয়ে একটু ভাবার আছে। 'যাহাবা' মানে যাওয়া, রওনা হওয়া, নিছক চলা। প্রশ্নটি দাঁড়িয়ে আছে এই চলার ওপর, বিশ্বাস বা চিন্তার ওপর নয়। এটা জিজ্ঞেস করে না, তুমি কী সত্য বলে মানো। জিজ্ঞেস করে, তুমি কোন দিকে চলেছ। দুটো আলাদা প্রশ্ন, আর প্রায়ই এদের উত্তরও আলাদা। কারণ মানুষ হরহামেশাই এমন দিকে হাঁটে, যে দিকের কথা মুখে খুলে বলতে বললে সে নিজেও তার পক্ষে দাঁড়াত না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Question Follows",
          "bn": "প্রশ্নটি কীসের পরে আসে"
        },
        "p": [
          {
            "en": "The surah has been building for twenty-five verses. It opens with a run of clauses describing the world coming apart — the sun wound up, the stars falling, the mountains moved, the seas set ablaze, the pages spread open — and closes that stretch in 81:14 with a soul knowing what it has brought. Then come oaths on the retreating stars, the night as it closes in and the dawn as it breathes.",
            "bn": "পঁচিশ আয়াত ধরে সূরাটি ধাপে ধাপে এখানে এসে পৌঁছেছে। শুরুতে একের পর এক বাক্যে জগৎ ভেঙে পড়ার ছবি: সূর্য গুটিয়ে নেওয়া হবে, তারা খসে পড়বে, পাহাড় সরিয়ে দেওয়া হবে, সমুদ্রে আগুন জ্বলে উঠবে, আমলনামা খুলে ধরা হবে। এই ধারা শেষ হয় ৮১:১৪-এ, যেখানে প্রত্যেক প্রাণ জেনে যাবে সে কী নিয়ে এসেছে। তারপর আসে শপথ: পিছিয়ে যাওয়া তারকারাজির, ঘনিয়ে আসা রাতের আর শ্বাস নেওয়া ভোরের।"
          },
          {
            "en": "What the oaths introduce is a defence. 81:19-21 describe the one who brings the message as a noble messenger, possessed of power, secure in rank with the Owner of the Throne, obeyed there and trustworthy. Then the charges are answered one at a time: 81:22 says your companion is not mad, 81:23 says he has already seen him on the clear horizon, 81:24 says he is not stingy with the unseen, and 81:25 says this is not the speech of an accursed devil.",
            "bn": "শপথগুলোর পর যা আসে, তা হলো বাণীবাহকের পক্ষে সাফাই। ৮১:১৯-২১ তাঁর পরিচয় দেয়: তিনি সম্মানিত বার্তাবাহক, শক্তিশালী, আরশের মালিকের কাছে মর্যাদায় সুপ্রতিষ্ঠিত, সেখানে তাঁর আনুগত্য করা হয়, আর তিনি বিশ্বস্ত। এরপর একে একে অভিযোগগুলোর জবাব: ৮১:২২ বলে, তোমাদের সঙ্গী পাগল নন; ৮১:২৩ বলে, তিনি তো তাঁকে স্পষ্ট দিগন্তে দেখেছেন; ৮১:২৪ বলে, গায়েবের ব্যাপারে তিনি কৃপণ নন; আর ৮১:২৫ বলে, এটা কোনো অভিশপ্ত শয়তানের কথা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Said to Someone Off the Road",
          "bn": "পথভ্রষ্ট পথিককে বলা কথা"
        },
        "p": [
          {
            "en": "With the objections gone, the question follows as a consequence, and that is the work the fa is doing. Nothing has been left for a listener to hold on to, so where is he going? The mufassirun read the phrase as the ordinary Arabic said to a traveller who has stepped off the road: which way are you taking, now that the road has been pointed out to you? It is not a request for information. Nobody who asks it expects to be told a place name, and no answer is recorded in the surah.",
            "bn": "আপত্তিগুলো সরে যাওয়ার পর প্রশ্নটি আসে তারই ফল হিসেবে। 'ফা' শব্দটি ঠিক এই কাজটিই করছে। শ্রোতার আঁকড়ে ধরার মতো আর কিছুই রইল না, তাহলে সে চলেছে কোথায়? মুফাসসিরগণ বলেন, এ হলো আরবদের সেই চেনা কথা, যা পথ ছেড়ে অন্যদিকে চলে যাওয়া পথিককে বলা হয়: পথ তো তোমাকে দেখিয়ে দেওয়া হলো, এখন কোন দিকে যাচ্ছ? এটা কিছু জানতে চাওয়ার প্রশ্ন নয়। যে এ প্রশ্ন করে, সে কোনো জায়গার নাম শোনার আশা করে না। সূরাতেও কারও কোনো উত্তর লেখা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Answered Within Three Verses",
          "bn": "তিন আয়াতের মধ্যেই উত্তর"
        },
        "p": [
          {
            "en": "The Quran does not leave its own question hanging. 81:27 answers in the negative direction first: this is nothing but a reminder to the worlds. 81:28 then names who the road is open to, whoever among you wills to go straight. And 81:29 closes any boast about that willing: you do not will unless Allah, Lord of the worlds, wills. Question, road, permission and the limit of the human will, inside three verses.",
            "bn": "কুরআন নিজের প্রশ্ন ঝুলিয়ে রাখে না। ৮১:২৭ প্রথমে না-বাচক দিক থেকে উত্তর দেয়: এ তো বিশ্ববাসীর জন্য উপদেশ ছাড়া আর কিছু নয়। তারপর ৮১:২৮ জানায়, পথটি কার জন্য খোলা: তোমাদের মধ্যে যে সোজা পথে চলতে চায়, তার জন্য। আর ৮১:২৯ সেই চাওয়া নিয়ে বড়াই করার পথ বন্ধ করে দেয়: বিশ্বজগতের প্রতিপালক আল্লাহ না চাইলে তোমরা চাইতেও পারো না। প্রশ্ন, পথ, অনুমতি আর মানুষের ইচ্ছার সীমা, সবই এই তিন আয়াতের ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked of a Crowd",
          "bn": "ভিড়কে করা প্রশ্ন"
        },
        "p": [
          {
            "en": "Notice the two numbers. The question is plural, where are you all going, while the answer in 81:28 narrows to liman sha'a minkum, for whoever among you wills. A crowd is asked and an individual answers. That is usually how it works. Drift is collective, absorbed from whoever happens to be walking alongside you, whereas the turn is made alone and has to be made by somebody with a name.",
            "bn": "একবচন আর বহুবচনের তফাতটা লক্ষ করুন। প্রশ্নটি বহুবচনে: তোমরা সবাই কোথায় চলেছ? অথচ ৮১:২৮-এর উত্তর ছোট হয়ে আসে 'লিমান শাআ মিনকুম'-এ, অর্থাৎ তোমাদের মধ্যে যে চায়, তার জন্য। প্রশ্ন করা হয় ভিড়কে, উত্তর দেয় একজন। সাধারণত এমনই হয়। ভেসে চলাটা হয় দল বেঁধে; পাশে যে-ই হাঁটুক, তার কাছ থেকেই মানুষ তা পেয়ে যায়। কিন্তু মোড় ঘোরাতে হয় একা, আর সেটা করতে হয় নাম-পরিচয় আছে এমন একজন মানুষকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Device for Stopping",
          "bn": "থামার একটি উপায়"
        },
        "p": [
          {
            "en": "As a practice the verse works as a stopping device rather than a doctrine. It is short enough to be recalled in the middle of an action, and it asks for a destination rather than a defence. Much of what fills a life has a direction that was never chosen — inherited, drifted into, or agreed to by not objecting. The verse does not accuse anyone of choosing badly; it asks whether the direction was chosen at all. Two verses on, it supplies the reason the question is worth stopping for: 81:28 says the straight road stands open to whoever among you wills.",
            "bn": "অনুশীলনের দিক থেকে আয়াতটি কোনো মতবাদ নয়, বরং থামিয়ে দেওয়ার একটা উপায়। এত ছোট যে কাজের মাঝখানেও মনে পড়ে যায়। আর এটি সাফাই চায় না, গন্তব্য জানতে চায়। জীবন যা কিছু দিয়ে ভরে থাকে, তার অনেকটারই দিক কখনো বেছে নেওয়া হয়নি: কিছু উত্তরাধিকারে পাওয়া, কিছুতে ভেসে ভেসে এসে পড়া, কিছু আপত্তি না করেই মেনে নেওয়া। আয়াতটি কাউকে ভুল বাছাইয়ের দায়ে অভিযুক্ত করে না; জানতে চায়, দিকটা আদৌ বেছে নেওয়া হয়েছিল কি না। আর দুই আয়াত পরেই জানিয়ে দেয়, কেন এই প্রশ্নে থামা সার্থক: ৮১:২৮ বলছে, তোমাদের মধ্যে যে চায়, তার জন্য সোজা পথ খোলাই আছে।"
          }
        ]
      }
    ]
  }
});
