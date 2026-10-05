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
          "bn": "এক ক্রিয়াপদের নামে সূরা"
        },
        "p": [
          {
            "en": "Idha ash-shamsu kuwwirat: when the sun is wound up. The verse is three Arabic words: idha, when; ash-shamsu, the sun; and kuwwirat, a passive verb whose doer is not named. It opens Surat at-Takwir, and the surah's name is the verbal noun of that very verb, takwir; Ibn Kathir heads his commentary Tafsir Surat at-Takwir. Al-Qurtubi records that the surah is Makkan in the view of all the scholars, and that it has 29 verses, a count that matches the text.",
            "bn": "ইযাশ শামসু কুওভিরাত: যখন সূর্যকে গুটিয়ে নেওয়া হবে। আরবিতে আয়াতটি মাত্র তিনটি শব্দ। ইযা মানে যখন, আশ-শামসু মানে সূর্য, আর কুওভিরাত একটি কর্মবাচ্য ক্রিয়া, যার কর্তার নাম বলা হয়নি। এ আয়াত দিয়েই সূরা আত-তাকভীর শুরু, আর সূরার নামটাও ওই ক্রিয়ারই মূল রূপ, তাকভীর। ইবন কাসীর তাঁর আলোচনার শিরোনাম দেন তাফসীরু সূরাতিত তাকভীর। কুরতুবী লেখেন, সব আলেমের কথাতেই সূরাটি মাক্কী, আর এর আয়াত ২৯টি। পাঠের সঙ্গে এ সংখ্যা মিলে যায়।"
          },
          {
            "en": "A sentence that begins with idha promises more to come. When, and then what? The verse gives the condition and stops. The next verse, 81:2, adds another when, this time about the stars, and the surah keeps adding before it says what follows. This article stays with the sun alone, as the verse does, and leaves each later clause to its own entry. What the commentators reported about this first image is enough to fill the space.",
            "bn": "ইযা দিয়ে যে বাক্য শুরু হয়, সে আরও কিছুর কথা দিয়ে রাখে। যখন এটা হবে, তখন কী? আয়াতটি শর্তটুকু বলে থেমে যায়। পরের আয়াত ৮১:২ আরেকটি যখন যোগ করে, এবার তারকাদের নিয়ে। এভাবে সূরা একের পর এক যোগ করে চলে, তারপর বলে এর পরিণাম কী। এ লেখা আয়াতের মতোই শুধু সূর্যের কাছে থাকবে। পরের প্রতিটি অংশ তার নিজের আলোচনার জন্য রইল। প্রথম এই ছবিটি নিয়ে তাফসীরকারেরা যা বর্ণনা করেছেন, জায়গা ভরাতে সেটুকুই যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "From Turban to Bundle",
          "bn": "পাগড়ি থেকে কাপড়ের পুঁটলি"
        },
        "p": [
          {
            "en": "At-Tabari defines the word from the speech of the Arabs: takwir is gathering the parts of a thing to each other. He gives two everyday pictures. The first is takwir al-'imamah, the winding of a turban, which is wrapping it around the head. The second is takwir al-karah, the bundle, which is gathering clothes together and wrapping them up. Ibn Kathir carries this explanation over in at-Tabari's name, nearly word for word, and adds nothing to the definition.",
            "bn": "তাবারী শব্দটির অর্থ বলেন আরবদের মুখের ভাষা থেকে। তাকভীর মানে কোনো জিনিসের অংশগুলো একটার সঙ্গে আরেকটা জড়ো করা। এর দুটি ঘরোয়া উদাহরণ তিনি দেন। প্রথমটি পাগড়ির তাকভীর, অর্থাৎ মাথার চারপাশে পাগড়ি প্যাঁচানো। দ্বিতীয়টি পুঁটলির তাকভীর, অর্থাৎ কাপড়চোপড় একসঙ্গে জড়ো করে বেঁধে ফেলা। ইবন কাসীর এই ব্যাখ্যা তাবারীর নামেই প্রায় হুবহু তুলে দেন, সংজ্ঞায় নতুন কিছু যোগ করেন না।"
          },
          {
            "en": "Al-Qurtubi, in his own voice, gives the root sense of takwir as gathering, taken from the phrase kara al-'imamata 'ala ra'sihi, he wound the turban upon his head, meaning he wrapped and gathered it. He also reports Abu 'Ubayda: kuwwirat is like the winding of a turban; it is wrapped and so effaced. Al-Baghawi quotes az-Zajjaj in the same register: it is wrapped as a turban is wrapped, for the Arabs say kawwartu al-'imamata 'ala ra'si, I wound the turban on my head. The image is ordinary and domestic, and the verse applies it to the sun.",
            "bn": "কুরতুবী নিজের কথায় বলেন, তাকভীরের মূল অর্থ জড়ো করা। কথাটা এসেছে আরবদের এই বাক্য থেকে: কারাল ইমামাতা আলা রা'সিহি, সে মাথায় পাগড়ি প্যাঁচাল, মানে পেঁচিয়ে গুছিয়ে নিল। আবু উবাইদার কথাও তিনি আনেন: কুওভিরাত পাগড়ি প্যাঁচানোর মতো, প্যাঁচানো হয়, ফলে মুছে যায়। বাগাভী একই সুরে যাজ্জাজের কথা উদ্ধৃত করেন। পাগড়ি যেভাবে প্যাঁচানো হয়, সূর্যকেও সেভাবে প্যাঁচানো হবে। আরবরা বলে, কাওওয়ারতুল ইমামাতা আলা রা'সী, আমি মাথায় পাগড়ি প্যাঁচালাম। ছবিটা একেবারে ঘরের, প্রতিদিনের। আয়াত সেটাকেই সূর্যের উপর বসিয়ে দেয়।"
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
            "bn": "এরপর ব্যাখ্যার পালা। তাবারী শুরুতেই জানিয়ে দেন, তাফসীরের আলেমরা এখানে ভিন্নমত করেছেন। প্রথম দলের মতে আয়াতের অর্থ, সূর্যের আলো চলে গেল। এ দলে তিনি রাখেন ইবনে আব্বাস (রাঃ)-কে, আলী ইবনে আবী তালহার সূত্রে: আযলামাত, অন্ধকার হয়ে গেল। আওফীর সূত্রে ইবনে আব্বাস (রাঃ) থেকেই আরেক বর্ণনা: যাহাবাত, চলে গেল। মুজাহিদ বলেছেন: ইদমাহাল্লাত ওয়া যাহাবাত, ক্ষীণ হতে হতে মিলিয়ে গেল। কাতাদা বলেছেন: তার আলো চলে গেল, আর কোনো আলো রইল না। দাহহাক বলেছেন: সূর্যের তাকভীর মানে তার চলে যাওয়া।"
          },
          {
            "en": "The other commentators repeat these names and add a few. Ibn Kathir lists the same glosses from Ibn Abbas, Mujahid, ad-Dahhak and Qatada. Al-Baghawi gives the gloss its light went, and names Muqatil and al-Kalbi alongside Qatada for it. Al-Qurtubi attributes the going of its light to al-Hasan, says that Qatada and Mujahid held it, and adds that it is also reported from Ibn Abbas. Ma'arif al-Qur'an says that the word denotes, for the sun, losing its light, and links that sense to Hasan al-Basri.",
            "bn": "অন্য তাফসীরকারেরা এই নামগুলোই আবার আনেন, সঙ্গে আরও কয়েকজনকে যোগ করেন। ইবন কাসীর ইবনে আব্বাস (রাঃ), মুজাহিদ, দাহহাক আর কাতাদার একই ব্যাখ্যাগুলো তুলে ধরেন। বাগাভী আনেন আলো চলে যাওয়ার ব্যাখ্যা, আর এ মতে কাতাদার পাশে মুকাতিল ও কালবীর নাম রাখেন। কুরতুবী আলো চলে যাওয়ার ব্যাখ্যাটি হাসানের নামে বলেন। তিনি জানান, কাতাদা ও মুজাহিদেরও এই মত, আর ইবনে আব্বাস (রাঃ) থেকেও তা বর্ণিত। মাআরিফুল কুরআন বলে, সূর্যের বেলায় শব্দটির অর্থ আলো হারানো। এ অর্থটি সেখানে হাসান বসরীর সঙ্গে যুক্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Cast Down and Overturned",
          "bn": "নিক্ষিপ্ত, উল্টে ফেলা"
        },
        "p": [
          {
            "en": "At-Tabari's second group read the verse differently: rumiya biha, it was thrown. He cites ar-Rabi' ibn Khuthaym for exactly those words, and Abu Salih in two forms: nukkisat, it was turned upside down, and ulqiyat, it was cast down. Ibn Kathir reports the same from both men and adds Zayd ibn Aslam: it falls to the earth. Al-Qurtubi also cites ar-Rabi', and supports the sense from ordinary usage: kawwartuhu fa-takawwara, that is, I knocked him over and he fell.",
            "bn": "তাবারীর দ্বিতীয় দল আয়াতটি পড়েছেন অন্যভাবে: রুমিয়া বিহা, তাকে ছুড়ে ফেলা হলো। হুবহু এই কথাটি তিনি রবী ইবনে খুসাইমের নামে আনেন। আবু সালিহ থেকে আনেন দুটি রূপ: নুক্কিসাত, উল্টে দেওয়া হলো, আর উলকিয়াত, নিচে ফেলে দেওয়া হলো। ইবন কাসীরও এ দুজনের কাছ থেকে একই কথা বর্ণনা করেন, সঙ্গে যোগ করেন যায়েদ ইবনে আসলামের কথা: সূর্য মাটিতে পড়ে যাবে। কুরতুবীও রবীর কথা আনেন। আর আরবদের সাধারণ বুলি দিয়ে অর্থটা পোক্ত করেন: কাওওয়ারতুহু ফা-তাকাওওয়ারা, মানে আমি তাকে ফেলে দিলাম, সে পড়ে গেল।"
          },
          {
            "en": "Some glosses do not sit neatly in either group. Sa'id ibn Jubayr said ghuwwirat, which at-Tabari, Ibn Kathir and al-Baghawi all report; Ibn Kathir's English abridgement renders it as it will sink in. Al-Qurtubi's printed text gives his word with a different first letter, 'uwwirat. Al-Qurtubi also reports from Ibn Abbas (RA) a reading found nowhere else in these commentaries: its takwir is its being brought into the Throne. Each gloss stands on the name of whoever said it, and the commentators set them side by side.",
            "bn": "কিছু ব্যাখ্যা কোনো দলেই ঠিকঠাক বসে না। সাঈদ ইবনে জুবাইর বলেছেন গুওভিরাত। তাবারী, ইবন কাসীর ও বাগাভী তিনজনই কথাটি বর্ণনা করেন, আর ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ এর অনুবাদ করে: সূর্য ডুবে যাবে। কুরতুবীর ছাপা কিতাবে শব্দটির প্রথম অক্ষর ভিন্ন, সেখানে লেখা উওভিরাত। কুরতুবী ইবনে আব্বাস (রাঃ) থেকে আরেকটি ব্যাখ্যাও আনেন, যা এই তাফসীরগুলোর আর কোথাও নেই: সূর্যের তাকভীর মানে তাকে আরশের ভেতরে ঢুকিয়ে দেওয়া। প্রতিটি ব্যাখ্যা দাঁড়িয়ে আছে যিনি বলেছেন তাঁর নামের উপর। তাফসীরকারেরা এগুলো পাশাপাশি সাজিয়ে রেখেছেন।"
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
            "bn": "এরপর তাবারী নিজের পছন্দের কথা বলেন। তাঁর মতে ঠিক পথ হলো, আল্লাহ যেভাবে বলেছেন সেভাবেই কুওভিরাত বলা। আরবদের ভাষায় তাকভীর মানে কোনো জিনিসের অংশগুলো একসঙ্গে জড়ো করা। কাজেই আয়াতের অর্থ, সূর্যকে জড়ো করা হবে, তারপর প্যাঁচানো হবে, তারপর ছুড়ে ফেলা হবে, আর এমনটা হলে তার আলো চলে যাবে। তিনি যোগ করেন, এই ব্যাখ্যায় আগের দুটি মতেরই সঠিক দিক আছে। কারণ প্যাঁচিয়ে ছুড়ে ফেললে আলো তো চলেই যায়। তিনি কোনো দলকে জয়ী ঘোষণা করেন না, দুটিকে গেঁথে দেন একটানা ধারায়।"
          },
          {
            "en": "Others close in similar ways. Al-Qurtubi's own conclusion is that the sun is wound and its light effaced, then it is thrown into the sea, and he ends with wa-Allahu a'lam, and Allah knows best. Ma'arif al-Qur'an presents losing its light and being caused to fall as two interpretations that do not contradict each other: first its light will be put out, and then it may be thrown into the ocean. A footnote there adds that folding the sun means its function will come to an end and it will lose its light.",
            "bn": "অন্যরাও প্রায় একইভাবে কথা শেষ করেন। কুরতুবীর নিজের সিদ্ধান্ত হলো, সূর্যকে প্যাঁচানো হবে, তার আলো মুছে যাবে, তারপর তাকে সাগরে ছুড়ে ফেলা হবে। শেষে তিনি লেখেন ওয়াল্লাহু আ'লাম, আল্লাহই ভালো জানেন। মাআরিফুল কুরআন আলো হারানো আর নিচে ফেলে দেওয়া, এ দুটি ব্যাখ্যাকে পরস্পরবিরোধী মনে করে না। প্রথমে তার আলো নিভিয়ে দেওয়া হবে, তারপর হয়তো তাকে মহাসাগরে ফেলা হবে। সেখানকার একটি পাদটীকা যোগ করে, সূর্যকে গুটিয়ে নেওয়ার মানে তার কাজ ফুরিয়ে যাবে, আর সে আলো হারাবে।"
          },
          {
            "en": "The two short commentaries keep to the plain sense. The Muyassar says the sun was wrapped up and its light went. As-Sa'di says that on the Day of Resurrection the sun is gathered and wrapped, the moon is eclipsed, and both are cast into the Fire. So the readings lean different ways: some towards darkening, some towards being thrown, some towards wrapping. At-Tabari and Ma'arif al-Qur'an both say the sayings can stand together. This article reports them as the commentators gave them and does not choose among them.",
            "bn": "ছোট দুটি তাফসীর সরল অর্থেই থাকে। মুয়াসসার বলে, সূর্যকে প্যাঁচিয়ে নেওয়া হলো আর তার আলো চলে গেল। সা'দী বলেন, কিয়ামতের দিন সূর্যকে জড়ো করে প্যাঁচানো হবে, চাঁদ গ্রহণে ঢেকে যাবে, আর দুটিকেই আগুনে ফেলা হবে। তাহলে ব্যাখ্যাগুলোর ঝোঁক আলাদা। কোনোটি অন্ধকারের দিকে, কোনোটি ছুড়ে ফেলার দিকে, কোনোটি প্যাঁচানোর দিকে। তাবারী আর মাআরিফুল কুরআন দুজনেই বলেন, মতগুলো একসঙ্গে টিকে থাকতে পারে। এ লেখা তাফসীরকারেরা যেভাবে দিয়েছেন সেভাবেই মতগুলো তুলে ধরে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Folded Up With the Moon",
          "bn": "চাঁদসহ গুটিয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Ibn Kathir and al-Baghawi both bring, under this verse, a hadith that Bukhari recorded. In Sahih al-Bukhari, number 3200, Abu Hurayra (RA) reports that the Prophet ﷺ said: ash-shamsu wal-qamaru mukawwarani yawma al-qiyamah, the sun and the moon will be folded up on the Day of Resurrection. That is the whole of the wording. It stands in Bukhari's Sahih. Ibn Kathir notes that Bukhari alone recorded it, that he placed it in the Book of the Beginning of Creation, and that it would have been fitting for him to repeat it here.",
            "bn": "ইবন কাসীর ও বাগাভী দুজনেই এ আয়াতের আলোচনায় বুখারীর বর্ণিত একটি হাদীস আনেন। সহীহ বুখারীর ৩২০০ নম্বরে আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: আশ-শামসু ওয়াল কামারু মুকাওওয়ারানি ইয়াওমাল কিয়ামাহ, কিয়ামতের দিন সূর্য ও চাঁদকে গুটিয়ে নেওয়া হবে। হাদীসের পুরো ভাষ্য এটুকুই। এটি আছে বুখারীর সহীহ গ্রন্থে। ইবন কাসীর জানান, হাদীসটি শুধু বুখারীই এনেছেন, রেখেছেন সৃষ্টির সূচনা অধ্যায়ে। তাঁর মন্তব্য, এখানেও এটি আবার আনা বুখারীর পক্ষে মানানসই হতো।"
          },
          {
            "en": "Ibn Kathir also shows the care this subject asks for. He cites a version through Abu Ya'la that adds that the sun and moon will be in the Fire, judges it weak because a narrator in it, Yazid ar-Raqashi, is weak, and points back to Bukhari's version, which lacks the addition. This article quotes only what Bukhari recorded. Other narrations the commentaries carry under this verse, including a longer version through al-Bazzar and reports from Companions about the events of the end, could not be confirmed here and are left out.",
            "bn": "এ বিষয়ে কতটা সাবধান হতে হয়, ইবন কাসীর তা-ও দেখিয়ে দেন। আবু ইয়া'লার সূত্রে তিনি একটি বর্ণনা আনেন, যাতে বাড়তি আছে যে সূর্য ও চাঁদ আগুনে থাকবে। তারপর বলেন, বর্ণনাটি দুর্বল, কারণ এর এক বর্ণনাকারী ইয়াযীদ আর-রাকাশী দুর্বল। আর তিনি ফিরিয়ে দেখান বুখারীর বর্ণনার দিকে, যেখানে ওই বাড়তি কথাটা নেই। এ লেখায় শুধু বুখারীর বর্ণনাটিই উদ্ধৃত হলো। তাফসীরগুলোতে এ আয়াতের নিচে আরও বর্ণনা আছে, যেমন বাযযারের দীর্ঘতর এক বর্ণনা, আর শেষ সময়ের ঘটনাবলি নিয়ে সাহাবীদের কিছু বক্তব্য। এখানে সেগুলো যাচাই করা যায়নি, তাই বাদ রাখা হলো।"
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
            "bn": "দ্বিতীয় একটি বর্ণনা গোটা সূরার সঙ্গে জড়িত। তিরমিযী ৩৩৩৩ নম্বরে ইবনে উমর (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: কিয়ামতের দিনকে যেন চোখের দেখায় দেখছে, এভাবে দেখতে যার ভালো লাগে, সে যেন পড়ে ইযাশ শামসু কুওভিরাত, আর ইযাস সামাউন ফাতারাত, আর ইযাস সামাউন শাক্কাত। এ তিনটি হলো এই সূরার, ৮২:১ আয়াতের ও ৮৪:১ আয়াতের শুরু। হাদীসের ঠিক পরে তিরমিযী নিজের মান নির্ণয় লিখে দেন: হাযা হাদীসুন হাসানুন গারীব, এটি হাসান গারীব হাদীস।"
          },
          {
            "en": "Tirmidhi adds that Hisham ibn Yusuf and others narrated it with the same chain, mentioning idha ash-shamsu kuwwirat and not the other two. Ibn Kathir cites the narration at the head of the surah, al-Qurtubi quotes it with Tirmidhi's grading, and al-Baghawi gives it through his own chain. What the hadith offers is not a reward counted out but a kind of seeing. These surahs are held up as a window onto the Day, and this verse is the place where the window opens.",
            "bn": "তিরমিযী আরও জানান, হিশাম ইবনে ইউসুফ ও অন্যরা একই সনদে হাদীসটি বর্ণনা করেছেন, তবে তাঁদের বর্ণনায় শুধু ইযাশ শামসু কুওভিরাত আছে, বাকি দুটির উল্লেখ নেই। ইবন কাসীর সূরার শুরুতেই বর্ণনাটি আনেন, কুরতুবী তা উদ্ধৃত করেন তিরমিযীর মান নির্ণয়সহ, আর বাগাভী আনেন নিজের সনদে। এ হাদীস কোনো গুনে দেওয়া সওয়াবের কথা বলে না, বলে এক রকম দেখার কথা। সূরাগুলো যেন কিয়ামতের দিকে খোলা জানালা, আর এই আয়াতেই সেই জানালা খোলে।"
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
            "bn": "সূর্যের পরিণতি নিয়ে এখানে দেখা তাফসীরগুলো যা বলে, তা ওপরেই সাজানো হয়েছে। অন্ধকার হওয়া, চলে যাওয়া, ম্লান হয়ে মিলিয়ে যাওয়া, পাগড়ির মতো প্যাঁচানো, ছুড়ে ফেলা, উল্টে দেওয়া, নিচে ফেলা, আরশে ঢুকিয়ে দেওয়া, চাঁদের সঙ্গে গুটিয়ে নেওয়া। তাঁরা শব্দের ব্যাখ্যা দেন আরবি ভাষা আর বর্ণনা থেকে। ঘটনাটা ঠিক কীভাবে ঘটবে, তার কলকবজার বিবরণ কেউ দেন না, এ লেখাও দেয় না। আয়াতটি আল্লাহর বাছাই করা শব্দে কিয়ামতের দিনের এক ঘটনার কথা বলে। তাফসীরকারদের এই সংযমই শেখায়, এমন আয়াত কীভাবে পড়তে হয়।"
          },
          {
            "en": "There is also the shape of the sentence. Idha opens a condition, and this verse supplies only its first part. A listener in Makkah heard the sun named, the sun he had watched rise all his life, and then had to wait through 81:2 and the verses after it to learn where the sentence was going. The waiting is part of the meaning. The most constant thing in his sky is set at the head of a sequence, and its turn comes first.",
            "bn": "বাক্যের গড়নটাও লক্ষ করার মতো। ইযা একটা শর্ত খুলে দেয়, আর এ আয়াত তার শুধু প্রথম অংশটুকু দেয়। মক্কার একজন শ্রোতা সূর্যের নাম শুনল, যে সূর্যকে সে সারা জীবন উঠতে দেখেছে। তারপর বাক্যটা কোথায় গিয়ে থামে জানতে তাকে অপেক্ষা করতে হলো ৮১:২ আর তার পরের আয়াতগুলো পর্যন্ত। এই অপেক্ষাও অর্থের অংশ। তার আকাশের সবচেয়ে স্থির জিনিসটিকে রাখা হলো সারির মাথায়, আর পালাটা আসে সবার আগে তারই।"
          },
          {
            "en": "For a reader now, the question is what follows in a life. The sun is the measure of every day, the thing by which prayers are timed and work is planned. The verse says plainly that it too will be wound up. Whatever a person leans on beneath it is more fragile still. Reading this verse slowly, as the hadith invites, is a way of seeing the Day before it arrives, while there is still daylight in which to act on what was seen.",
            "bn": "আজকের পাঠকের সামনে প্রশ্নটা হলো, নিজের জীবনে এর পরে কী আসে। সূর্যই প্রতিটি দিনের মাপকাঠি। এর হিসাবেই নামাজের ওয়াক্ত ঠিক হয়, কাজের পরিকল্পনা হয়। আয়াত পরিষ্কার বলে দেয়, তাকেও গুটিয়ে নেওয়া হবে। তার নিচে মানুষ যার উপর ভর দেয়, সে তো আরও ভঙ্গুর। হাদীস যেমন ডাকে, তেমনি ধীরে ধীরে এ আয়াত পড়া মানে দিনটা আসার আগেই তাকে দেখে নেওয়া। এখনো দিনের আলো আছে, যা দেখলেন সে অনুযায়ী আমল করার সময়ও আছে।"
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
          "bn": "আগুন নিয়ে তিনটি শব্দ"
        },
        "p": [
          {
            "en": "Wa-idha al-jahimu su''irat: and when Hellfire is set ablaze. The verse is three Arabic words. Wa-idha is and when; al-jahimu is the name the verse uses for the Fire; and su''irat is a passive verb in the feminine, set ablaze, with no doer named. The sentence shows the fire at the moment it is lit and says nothing more. It is the eleventh of the twelve clauses in this surah that open with the word idha, when, a run that began at 81:1.",
            "bn": "ওয়া ইযাল জাহীমু সু'ইরাত: আর যখন জাহান্নামকে উসকে দেওয়া হবে। আয়াতটি আরবিতে তিনটি শব্দ। ওয়া ইযা মানে আর যখন। আল-জাহীম সেই নাম, যে নামে আয়াতটি আগুনকে ডাকছে। আর সু'ইরাত স্ত্রীলিঙ্গের কর্মবাচ্য ক্রিয়া, অর্থ উসকে দেওয়া হলো, কর্তার নাম নেই। বাক্যটি আগুনকে দেখায় ঠিক জ্বলে ওঠার মুহূর্তে, এর বেশি কিছু বলে না। এ সূরায় ইযা, অর্থাৎ যখন, দিয়ে শুরু হওয়া বারোটি বাক্যের এটি এগারোতম। সেই ধারা শুরু হয়েছিল ৮১:১ আয়াতে।"
          },
          {
            "en": "None of these clauses is finished on its own. Each one says when, and the reader waits for then. The waiting runs past the buried girl of 81:8, the spread pages of 81:10 and the sky stripped away in 81:11, and it does not end here either. The next verse, 81:13, brings Paradise near, and only at 81:14 does the sentence arrive at what a soul will know. This article stays with the one clause about the fire, and with what the commentators fetched for it actually say.",
            "bn": "এ বাক্যগুলোর কোনোটিই একা সম্পূর্ণ নয়। প্রতিটি বলে যখন, আর পাঠক অপেক্ষা করে তখন শোনার জন্য। ৮১:৮ আয়াতের জীবন্ত পুঁতে ফেলা কন্যা, ৮১:১০ আয়াতের খুলে ধরা আমলনামা, ৮১:১১ আয়াতে সরিয়ে ফেলা আসমান, সবকিছু পার হয়ে অপেক্ষা চলতেই থাকে। এখানেও শেষ হয় না। পরের আয়াত ৮১:১৩ জান্নাতকে কাছে আনে। কেবল ৮১:১৪ আয়াতে এসে বাক্যটি পৌঁছায় সেই কথায়, যা প্রতিটি প্রাণ জানতে পারবে। এই লেখা থাকবে আগুনের এই একটি বাক্যের সঙ্গে, আর এর ব্যাখ্যায় তাফসীরকারেরা আসলে যা বলেছেন তার সঙ্গে।"
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
            "bn": "সু'ইরাত শব্দটি তাফসীরকারেরা বুঝিয়েছেন কাছাকাছি কয়েকটি শব্দ দিয়ে। ইবন কাসীর প্রথম যুগের দুটি ব্যাখ্যা পাশাপাশি রাখেন। সুদ্দী বলেছেন উহমিয়াত, অর্থাৎ তাতিয়ে তোলা হলো। কাতাদা বলেছেন ঊকিদাত, অর্থাৎ জ্বালানো হলো। তাবারী নিজের ভাষায় দুটিকে এক করেন: যখন জাহীমের উপর আগুন জ্বালানো হবে, ফলে তা তপ্ত হয়ে উঠবে। ইবন কাসীর দুটির মধ্যে কোনোটিকে বেছে নেননি, বেছে নেওয়ার দরকারও নেই। জ্বালানো আর তপ্ত হওয়া একই ছবির দুই অংশ, প্রথমটি থেকেই দ্বিতীয়টি আসে।"
          },
          {
            "en": "Al-Qurtubi adds a step: uqidat fa-udrimat, it was kindled and set raging, for the disbelievers, and its heat was increased. He then notes that Arabic says both sa''artu an-nar and as'artuha for lighting a fire, so the verb is ordinary speech for stoking. As-Sa'di takes the image furthest. He glosses the verse as: fire is kindled upon it, so it catches and blazes up, flaring in a way it never flared before. For him the point is not only that the fire burns but that it burns as it has not yet burned.",
            "bn": "কুরতুবী আরেক ধাপ যোগ করেন: ঊকিদাত ফা-উদরিমাত, জ্বালানো হলো, তারপর দাউদাউ করে ধরানো হলো কাফিরদের জন্য, আর এর উত্তাপ বাড়িয়ে দেওয়া হলো। তিনি আরও জানান, আগুন ধরানোর অর্থে আরবরা সা''আরতুন নার আর আস'আরতুহা দুটোই বলে। তাই ক্রিয়াটি আগুন উসকে দেওয়ার সাধারণ কথ্য শব্দ। ছবিটাকে সবচেয়ে দূরে নিয়ে যান সা'দী। তাঁর ব্যাখ্যা: এর উপর আগুন জ্বালানো হবে, ফলে তা জ্বলে উঠবে, এমনভাবে দাউদাউ করবে যেভাবে আগে কখনো করেনি। তাঁর কাছে কথাটা শুধু আগুন জ্বলার নয়, এমনভাবে জ্বলার যা এর আগে ঘটেনি।"
          },
          {
            "en": "Al-Baghawi keeps his gloss to a phrase: uqidat li-a'da'i Allah, it was kindled for the enemies of Allah. What none of the fetched commentaries does is stop on the word al-jahim itself. None of them explains it as a name of Hell or traces its sense, and this article will not supply a gloss they do not give. The verse's own translation renders it Hellfire, and the commentators move straight on to the verb, which is where their attention is.",
            "bn": "বাগাভী তাঁর ব্যাখ্যা এক বাক্যাংশে সারেন: ঊকিদাত লি-আ'দাইল্লাহ, আল্লাহর শত্রুদের জন্য জ্বালানো হলো। তবে যে তাফসীরগুলো এখানে দেখা হয়েছে, তার কোনোটিই আল-জাহীম শব্দটির উপর থামেনি। কেউ একে জাহান্নামের নাম হিসেবে ব্যাখ্যা করেননি, এর অর্থের উৎসও খোঁজেননি। তাঁরা যে ব্যাখ্যা দেননি, এই লেখাও তা নিজে থেকে বানাবে না। আয়াতের অনুবাদে শব্দটি জাহান্নাম। তাফসীরকারেরা সরাসরি চলে যান ক্রিয়াপদে, কারণ তাঁদের মনোযোগ সেখানেই।"
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
            "bn": "ক্রিয়াটি দুটি স্বীকৃত পাঠে এসেছে। একটিতে মাঝের হরফে তাশদীদ, সু'ইরাত। অন্যটিতে তাশদীদ নেই, সু'ইরাত হালকা উচ্চারণে। তাবারী জানান, মদীনার অধিকাংশ কারী তাশদীদ দিয়ে পড়েছেন, যার অর্থ এর উপর বারবার আগুন জ্বালানো হয়েছে। আর কূফার অধিকাংশ কারী পড়েছেন হালকা করে। তারপর তিনি রায় দেন: দুটিই সুপরিচিত পাঠ। কারী যেটিই পড়ুন, সঠিক পড়েছেন।"
          },
          {
            "en": "Al-Qurtubi gives the same two readings with different names attached. The common reading, he says, is the light form, from sa'ir, blaze. Nafi', Ibn Dhakwan and Ruways read it doubled, because the fire was kindled once after another. Al-Baghawi names the doubled reading's people more widely: the people of Madinah and of Sham, and Hafs from 'Asim; the rest, he says, read it light. Al-Baghawi does not say what the doubling adds; at-Tabari and al-Qurtubi both say it carries repetition, a fire stoked again and again rather than lit once.",
            "bn": "কুরতুবীও এই দুটি পাঠ আনেন, তবে ভিন্ন নামসহ। তাঁর মতে সাধারণ পাঠ হালকাটি, সা'ঈর অর্থাৎ লেলিহান আগুন থেকে। নাফি', ইবন যাকওয়ান আর রুওয়াইস তাশদীদ দিয়ে পড়েছেন, কারণ আগুন একবারের পর আরেকবার জ্বালানো হয়েছে। বাগাভী তাশদীদের পাঠকদের তালিকা আরও বড় করেন: মদীনা আর শামের লোকেরা, আর আসিম থেকে হাফস। বাকিরা হালকা পড়েছেন। তাশদীদে বাড়তি কী অর্থ আসে, বাগাভী তা বলেননি। তাবারী আর কুরতুবী দুজনেই বলেন, এতে পুনরাবৃত্তি বোঝায়। আগুন একবার ধরানো নয়, বারবার উসকে দেওয়া।"
          },
          {
            "en": "The lists do not match name for name. At-Tabari mentions only Madinah for the doubled reading and Kufa for the light reading. Al-Baghawi adds Sham and Hafs from 'Asim to the doubled side. Al-Qurtubi names three individual readers and calls the light reading that of the generality. The difference is in whom each man chose to mention, and this article leaves each list as its author gives it. The Arabic text printed with this verse here carries the doubled letter, su''irat, which matches the reading al-Baghawi attributes to Hafs.",
            "bn": "নামে নামে তালিকাগুলো মেলে না। তাবারী তাশদীদের পাঠে শুধু মদীনার কথা বলেন, আর হালকা পাঠে কূফার। বাগাভী তাশদীদের দিকে যোগ করেন শাম আর আসিম থেকে হাফসকে। কুরতুবী তিনজন কারীর নাম নেন, আর হালকা পাঠকে বলেন সাধারণ পাঠ। পার্থক্যটা আসলে কে কার নাম উল্লেখ করেছেন তাতে। এই লেখা প্রত্যেকের তালিকা তাঁর মতো করেই রেখে দিচ্ছে। এখানে আয়াতের সঙ্গে যে আরবি পাঠ ছাপা আছে, তাতে তাশদীদ আছে, সু'ইরাত। বাগাভী হাফসের যে পাঠের কথা বলেছেন, এটি তার সঙ্গে মেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Keeps It Burning",
          "bn": "যা দিয়ে আগুন জ্বলে"
        },
        "p": [
          {
            "en": "One sentence attributed to Qatada appears in three of the commentaries fetched for this verse. At-Tabari gives it with its chain, Bishr from Yazid from Sa'id from Qatada: sa''araha ghadabu Allahi wa-khataya bani Adam, what kindled it is the anger of Allah and the sins of the children of Adam. Ibn Kathir carries it in nearly the same words, as does al-Qurtubi. It is the only explanation in the fetched texts that says what the fire is stoked with, and it names two things, not one.",
            "bn": "কাতাদার একটি বাক্য তিনটি তাফসীরে এসেছে। তাবারী তা এনেছেন সনদসহ, বিশর থেকে, তিনি ইয়াযীদ থেকে, তিনি সাঈদ থেকে, তিনি কাতাদা থেকে: সা''আরাহা গাদাবুল্লাহি ওয়া খাতায়া বানী আদাম। অর্থাৎ একে জ্বালিয়েছে আল্লাহর ক্রোধ আর আদম সন্তানের গুনাহ। ইবন কাসীর প্রায় একই ভাষায় এটি এনেছেন, কুরতুবীও তাই। আগুন কী দিয়ে উসকে দেওয়া হয়, এখানে দেখা তাফসীরগুলোর মধ্যে কেবল এই ব্যাখ্যাটিই তা বলে। আর এটি একটি নয়, দুটি জিনিসের নাম নেয়।"
          },
          {
            "en": "The pairing matters. The anger is Allah's, and the sins are people's, and Qatada sets them in one clause. The fire is not pictured as a blind force that happens to people. It answers to something, and part of what it answers to is what human beings have done. That is a sobering thought, but it is also a clarifying one. A fire fed partly by sins is a fire whose fuel can still be reduced, by leaving a sin and by asking forgiveness for the ones already done.",
            "bn": "জোড়াটা গুরুত্বপূর্ণ। ক্রোধ আল্লাহর, গুনাহ মানুষের, আর কাতাদা দুটিকে এক বাক্যে রেখেছেন। এখানে আগুনকে অন্ধ কোনো শক্তি হিসেবে আঁকা হয়নি, যা হঠাৎ মানুষের উপর এসে পড়ে। এটি কোনো কিছুর জবাবে জ্বলে। আর তার একটা অংশ মানুষের নিজের কাজ। কথাটা ভয় জাগায়, আবার চোখও খুলে দেয়। যে আগুনের জ্বালানির একাংশ গুনাহ, তার জ্বালানি এখনো কমানো যায়। গুনাহ ছেড়ে দিয়ে, আর যা হয়ে গেছে তার জন্য ইস্তিগফার করে।"
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
            "en": "The verse itself names nobody. It says only that the Jahim is set ablaze. Two of the commentators add a recipient in their glosses. Al-Qurtubi says it was kindled and set raging for the disbelievers, li-l-kuffar. Al-Baghawi says it was kindled for the enemies of Allah, li-a'da'i Allah. Both phrases are theirs, written as explanation, and neither is in the verse's three words. As-Sa'di, at-Tabari and Ibn Kathir, in the text fetched here, do not say for whom the fire is lit.",
            "bn": "আয়াতটি নিজে কারও নাম নেয় না। শুধু বলে, জাহীমকে উসকে দেওয়া হবে। দুজন তাফসীরকার তাঁদের ব্যাখ্যায় কার জন্য, তা যোগ করেছেন। কুরতুবী বলেন, কাফিরদের জন্য জ্বালানো আর দাউদাউ করে ধরানো হলো, লিল-কুফফার। বাগাভী বলেন, আল্লাহর শত্রুদের জন্য জ্বালানো হলো, লি-আ'দাইল্লাহ। দুটি বাক্যাংশই তাঁদের নিজেদের, ব্যাখ্যা হিসেবে লেখা। আয়াতের তিনটি শব্দে এর কোনোটিই নেই। এখানে দেখা পাঠে সা'দী, তাবারী আর ইবন কাসীর বলেননি আগুন কার জন্য জ্বালানো হয়।"
          },
          {
            "en": "A word of care is needed here. The verse describes what the text describes, a fire set ablaze on a coming Day, and it licenses nothing against any living person or community. It hands no reader the right to decide who among the people around him belongs to the fire. The commentators' phrases explain whom the fire is meant for; they are not a list of names to be filled in. The only soul any reader is in a position to examine is his own.",
            "bn": "এখানে একটু সাবধান হওয়া দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: আগামী এক দিনে উসকে দেওয়া আগুন। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। আশপাশের কে আগুনের লোক, তা ঠিক করার অধিকার এ আয়াত কোনো পাঠককে দেয় না। তাফসীরকারদের বাক্যাংশ বলে আগুনটা কাদের জন্য। নাম বসানোর তালিকা তা নয়। পাঠক যে প্রাণটির হিসাব নেওয়ার অবস্থানে আছে, তা কেবল তার নিজের।"
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
            "bn": "এখানে দেখা তাফসীরগুলোর মধ্যে কেবল কুরতুবী এ আয়াতের আলোচনায় একটি বর্ণনা এনেছেন। তিনি তা নিয়েছেন তিরমিযী থেকে, আবু হুরায়রা (রাঃ)-এর সূত্রে। তিরমিযীর জামি'-তে, নম্বর ২৫৯১, এর ভাষ্য এই: নবী ﷺ বলেছেন, \"আগুনকে এক হাজার বছর জ্বালানো হয়েছে, ফলে তা লাল হয়েছে। তারপর আরও এক হাজার বছর জ্বালানো হয়েছে, ফলে তা সাদা হয়েছে। তারপর আরও এক হাজার বছর জ্বালানো হয়েছে, ফলে তা কালো হয়েছে। তাই তা ঘোর অন্ধকার কালো।\""
          },
          {
            "en": "The grading must be given as at-Tirmidhi gives it. Right after the report he adds a second chain in which Abu Hurayrah's words are not raised to the Prophet ﷺ, and then says that the hadith of Abu Hurayrah on this is more correct as mawquf, stopping at the Companion, and that he knows of no one who raised it except Yahya ibn Abi Bukayr from Sharik. Al-Qurtubi closes his own mention with the same note: it has also been narrated mawquf. So the report is not established as the Prophet's own words.",
            "bn": "এর মান তিরমিযী যেভাবে বলেছেন, ঠিক সেভাবেই বলতে হবে। বর্ণনাটির পরপরই তিনি আরেকটি সনদ আনেন, যেখানে আবু হুরায়রা (রাঃ)-এর কথা নবী ﷺ পর্যন্ত পৌঁছানো হয়নি। তারপর তিনি বলেন, এ বিষয়ে আবু হুরায়রার হাদীসটি মাওকূফ হিসেবেই বেশি সঠিক, অর্থাৎ সাহাবী পর্যন্ত গিয়ে থেমে যাওয়া। আর শারীক থেকে ইয়াহইয়া ইবন আবী বুকাইর ছাড়া কেউ একে নবী ﷺ পর্যন্ত পৌঁছিয়েছেন বলে তিনি জানেন না। কুরতুবীও একই কথা দিয়ে শেষ করেন: এটি মাওকূফভাবেও বর্ণিত হয়েছে। অতএব বর্ণনাটি নবী ﷺ-এর নিজের কথা হিসেবে প্রতিষ্ঠিত নয়।"
          },
          {
            "en": "That is the honest place to leave it. The report pictures kindling repeated over ages, close to what the doubled reading su''irat suggests, but its own collector judged the version that stops at Abu Hurayrah to be sounder. No other narration is attached to this verse by the commentaries fetched for it, and none of them gives a sound hadith from the Prophet ﷺ on it. The verse's meaning does not depend on the report; the commentators' glosses stand without it.",
            "bn": "সৎভাবে এখানেই থামা উচিত। বর্ণনাটি যুগ যুগ ধরে বারবার জ্বালানোর ছবি আঁকে, তাশদীদযুক্ত পাঠ সু'ইরাত যে অর্থের দিকে ইঙ্গিত করে তার কাছাকাছি। কিন্তু এর সংকলক নিজেই রায় দিয়েছেন, আবু হুরায়রা (রাঃ)-তে থেমে যাওয়া রূপটিই বেশি সঠিক। এ আয়াতের জন্য দেখা তাফসীরগুলো আর কোনো বর্ণনা যুক্ত করেনি, আর কোনোটিই এখানে নবী ﷺ থেকে সহীহ হাদীস আনেনি। আয়াতের অর্থ এই বর্ণনার উপর নির্ভর করে না। তাফসীরকারদের ব্যাখ্যা এটি ছাড়াই দাঁড়িয়ে থাকে।"
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
            "bn": "ধারার শেষে আয়াতটি একা দাঁড়িয়ে নেই। ঠিক পরের আয়াত ৮১:১৩: ওয়া ইযাল জান্নাতু উযলিফাত, আর যখন জান্নাতকে কাছে আনা হবে। দুটি আয়াতের গঠন এক। প্রথমে ওয়া ইযা, তারপর নির্দিষ্ট বিশেষ্য, শেষে কর্মবাচ্য ক্রিয়া, কর্তার নাম নেই। একটিতে আগুনকে উসকে দেওয়া, অন্যটিতে জান্নাতকে কাছে আনা। একটির ঠিক পরেই অন্যটি, পরস্পরের বিপরীত জোড়া। আর সূরা উত্তর দেওয়ার আগে যখন দিয়ে শুরু হওয়া বাক্যগুলোর এ দুটিই শেষ।"
          },
          {
            "en": "This article does not open the second verse; it has its own place. It is enough to see that the surah does not leave the reader with the fire alone. Directly after the blaze comes nearness, and then, at 81:14, the answer to every when that went before: a soul will know what it has brought. The fire is not the end of the sentence. It is one half of a pair, and the pair is a question put to whoever is listening.",
            "bn": "দ্বিতীয় আয়াতটির আলোচনা এখানে খোলা হচ্ছে না, তার নিজের জায়গা আছে। এটুকু দেখাই যথেষ্ট যে সূরা পাঠককে শুধু আগুনের সামনে রেখে চলে যায় না। আগুন জ্বলার পরপরই আসে নৈকট্য। তারপর ৮১:১৪ আয়াতে আগের সব যখনের উত্তর: প্রত্যেক প্রাণ জানতে পারবে সে কী নিয়ে এসেছে। আগুন বাক্যের শেষ নয়। এটি একটি জোড়ার অর্ধেক। আর সেই জোড়া এক প্রশ্ন, যে শুনছে তার দিকে ছুড়ে দেওয়া।"
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
            "bn": "আয়াতটি যখন তিলাওয়াত হয়, এর সবকিছু তখনো ভবিষ্যতে। আয়াতে যে অর্থে বলা হয়েছে, সে অর্থে আগুন এখনো উসকে দেওয়া হয়নি। পাঠক দেখার আগেই শুনছে। এই ফাঁকটুকু রহমত। কাতাদার বাক্য আগুনের জ্বালানির মধ্যে আদম সন্তানের গুনাহর নাম নেয়। আর ফাঁক যতক্ষণ আছে, গুনাহ ছেড়ে দেওয়া যায়, তার জন্য অনুতপ্ত হওয়া যায়, মাগফিরাত চাওয়া যায়। সময় থাকতে শোনা সতর্কবাণী খোলা দরজা, রায় নয়।"
          },
          {
            "en": "So the verse asks something practical. Which small wrongs have I stopped counting because they seemed too light to matter? Which repentance have I postponed? The commentators speak of a fire kindled and stoked until it blazes as never before. The reader's part is not to picture it more vividly than the text does, but to let three words do their work: to turn back now, while the fire is still something heard about and the Garden is still within reach.",
            "bn": "তাই আয়াতটি হাতে-কলমে কিছু জানতে চায়। কোন ছোট অন্যায়গুলো আমি আর গুনছি না, কারণ সেগুলো তুচ্ছ মনে হয়েছে? কোন তওবা আমি পিছিয়ে রেখেছি? তাফসীরকারেরা বলেন এমন আগুনের কথা, যা জ্বালানো হবে, উসকে দেওয়া হবে, যতক্ষণ না তা আগে কখনো না জ্বলার মতো জ্বলে ওঠে। পাঠকের কাজ পাঠের চেয়ে বেশি রং চড়িয়ে তা কল্পনা করা নয়। কাজ হলো তিনটি শব্দকে তাদের কাজ করতে দেওয়া। এখনই ফিরে আসা, যতক্ষণ আগুন কেবল শোনা কথা আর জান্নাত এখনো নাগালের মধ্যে।"
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
            "bn": "আরবিতে এটি দুটি শব্দ: 'ফাআইনা তাযহাবূন'। প্রথমটি সংযোজক 'ফা' — অর্থাৎ 'কাজেই' — যা 'আইনা' অর্থাৎ 'কোথায়'-এর সঙ্গে জুড়ে লেখা; দ্বিতীয়টি মধ্যম পুরুষ বহুবচনের ক্রিয়াপদ, 'তোমরা চলেছ'। এর কোথাও কোনো বিশেষ্য নেই, কোনো কর্ম নেই, কোনো গন্তব্যের নামও নেই। এত ছোট প্রশ্ন তখনই কাজ করতে পারে যখন এটি যার উপর দাঁড়িয়ে সেসব আগেই বলা হয়ে গেছে — আর এই সূরায় সেসব বলা হয়েছে।"
          },
          {
            "en": "The verb is worth weighing. Dhahaba is to go, to depart, plain motion, and the question is built on it rather than on believing or thinking. It does not ask what you hold to be true. It asks which way you are moving, which is a different question and often has a different answer, since people routinely walk in a direction they would not defend if they were asked to describe it aloud.",
            "bn": "ক্রিয়াপদটি ভেবে দেখার মতো। 'যাহাবা' মানে যাওয়া, রওনা হওয়া — নিছক চলা; আর প্রশ্নটি গড়া হয়েছে সেই চলার উপর, বিশ্বাস বা চিন্তার উপর নয়। এটি জিজ্ঞেস করে না, তুমি কী সত্য বলে মানো। এটি জিজ্ঞেস করে, তুমি কোন দিকে চলছ — যা আলাদা প্রশ্ন এবং প্রায়ই এর উত্তরও আলাদা; কারণ মানুষ নিয়মিতভাবেই এমন দিকে হাঁটে, মুখে বর্ণনা করতে বললে যে দিকটির পক্ষে সে দাঁড়াত না।"
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
            "bn": "সূরাটি পঁচিশ আয়াত ধরে গড়ে উঠছিল। এটি শুরু হয় একের পর এক বাক্যে জগৎ ভেঙে পড়ার বর্ণনা দিয়ে — সূর্য গুটিয়ে যাওয়া, তারা খসে পড়া, পাহাড় সরে যাওয়া, সমুদ্র উত্তাল হয়ে ওঠা, আমলনামা খুলে ধরা — আর সেই ধারা শেষ হয় 81:14-এ, যেখানে প্রত্যেক প্রাণ জেনে যাবে সে কী নিয়ে এসেছে। তারপর আসে শপথ: পিছিয়ে যাওয়া তারকারাজির, ঘনিয়ে আসা রাতের এবং শ্বাস নেওয়া ভোরের।"
          },
          {
            "en": "What the oaths introduce is a defence. 81:19-21 describe the one who brings the message as a noble messenger, possessed of power, secure in rank with the Owner of the Throne, obeyed there and trustworthy. Then the charges are answered one at a time: 81:22 says your companion is not mad, 81:23 says he has already seen him on the clear horizon, 81:24 says he is not stingy with the unseen, and 81:25 says this is not the speech of an accursed devil.",
            "bn": "সেই শপথগুলো যা উপস্থাপন করে তা হলো একটি প্রতিরক্ষা। 81:19-21 বাণীবাহককে বর্ণনা করে এক সম্মানিত বার্তাবাহক হিসেবে — শক্তিধর, আরশের মালিকের কাছে সুপ্রতিষ্ঠিত, সেখানে আনুগত্যপ্রাপ্ত ও বিশ্বস্ত। এরপর অভিযোগগুলোর জবাব আসে একটি একটি করে: 81:22 বলে তোমাদের সঙ্গী পাগল নয়, 81:23 বলে তিনি তাঁকে সুস্পষ্ট দিগন্তে দেখেছেন, 81:24 বলে তিনি গায়েবের ব্যাপারে কৃপণ নন, আর 81:25 বলে এটি কোনো অভিশপ্ত শয়তানের কথা নয়।"
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
            "bn": "আপত্তিগুলো সরে যাওয়ার পর প্রশ্নটি আসে একটি পরিণতি হিসেবে — 'ফা' শব্দটি ঠিক এই কাজটিই করছে। শ্রোতার আঁকড়ে ধরার মতো কিছুই আর অবশিষ্ট নেই, তাহলে সে চলেছে কোথায়? মুফাসসিরগণ বাক্যটিকে পড়েন সেই সাধারণ আরবি কথার মতো, যা বলা হয় পথ থেকে সরে যাওয়া পথিককে: পথ তো তোমাকে দেখিয়ে দেওয়া হলো, এখন তুমি কোন দিকে যাচ্ছ? এটি কোনো তথ্য জানতে চাওয়া প্রশ্ন নয়। যে এ প্রশ্ন করে সে কোনো জায়গার নাম শোনার আশা করে না, আর সূরাতেও কোনো উত্তর লিপিবদ্ধ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Answered Within Three Verses",
          "bn": "তিন আয়াতের মধ্যেই উত্তর"
        },
        "p": [
          {
            "en": "The Quran does not leave its own question hanging. 81:27 answers in the negative direction first: this is nothing but a reminder to the worlds. 81:28 then names who the road is open to, whoever among you wills to go straight. And 81:29 closes any boast about that willing: you do not will unless Allah, Lord of the worlds, wills. Question, road, permission and the limit of the human will, inside three verses.",
            "bn": "কুরআন নিজের প্রশ্নটি ঝুলিয়ে রাখে না। 81:27 প্রথমে নেতিবাচক দিক থেকে উত্তর দেয়: এটি বিশ্ববাসীর জন্য উপদেশ ছাড়া কিছুই নয়। এরপর 81:28 জানায় পথটি কার জন্য খোলা — তোমাদের মধ্যে যে সোজা পথে চলতে চায় তার জন্য। আর 81:29 সেই চাওয়া নিয়ে কোনো অহংকারের পথ বন্ধ করে দেয়: বিশ্বজগতের প্রতিপালক আল্লাহ না চাইলে তোমরা চাইতেও পারো না। প্রশ্ন, পথ, অনুমতি আর মানুষের ইচ্ছার সীমা — সবই তিন আয়াতের ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked of a Crowd",
          "bn": "ভিড়কে করা প্রশ্ন"
        },
        "p": [
          {
            "en": "Notice the two numbers. The question is plural, where are you all going, while the answer in 81:28 narrows to liman sha'a minkum, for whoever among you wills. A crowd is asked and an individual answers. That is usually how it works. Drift is collective, absorbed from whoever happens to be walking alongside you, whereas the turn is made alone and has to be made by somebody with a name.",
            "bn": "সংখ্যা দুটি লক্ষ করুন। প্রশ্নটি বহুবচনে — তোমরা সবাই কোথায় চলেছ; অথচ 81:28-এর উত্তর সংকুচিত হয়ে আসে 'লিমান শাআ মিনকুম'-এ — তোমাদের মধ্যে যে চায় তার জন্য। প্রশ্ন করা হয় ভিড়কে, উত্তর দেয় একজন। সাধারণত এভাবেই ঘটে। ভেসে যাওয়া সমষ্টিগত — পাশে যারা হাঁটছে তাদের কাছ থেকেই তা শুষে নেওয়া হয়; কিন্তু মোড় ফেরাটা একা করতে হয়, আর তা করতে হয় নাম আছে এমন কাউকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Device for Stopping",
          "bn": "থামার একটি উপায়"
        },
        "p": [
          {
            "en": "As a practice the verse works as a stopping device rather than a doctrine. It is short enough to be recalled in the middle of an action, and it asks for a destination rather than a defence. Much of what fills a life has a direction that was never chosen — inherited, drifted into, or agreed to by not objecting. The verse does not accuse anyone of choosing badly; it asks whether the direction was chosen at all. Two verses on, it supplies the reason the question is worth stopping for: 81:28 says the straight road stands open to whoever among you wills.",
            "bn": "অনুশীলন হিসেবে আয়াতটি কোনো মতবাদের মতো নয়, বরং থামিয়ে দেওয়ার একটি উপায়ের মতো কাজ করে। এটি এত ছোট যে কাজের মাঝপথেই মনে পড়ে যায়, আর এটি সাফাই নয়, গন্তব্য জানতে চায়। জীবনের যা কিছু দিয়ে ভরা থাকে, তার অনেকটারই দিক কখনো বেছে নেওয়া হয়নি — তা উত্তরাধিকারে পাওয়া, ভেসে ভেসে এসে পড়া, কিংবা সে সময় আপত্তি না করেই মেনে নেওয়া। আয়াতটি কাউকে ভুল বেছে নেওয়ার দায়ে অভিযুক্ত করে না; এটি জিজ্ঞেস করে, দিকটি আদৌ বেছে নেওয়া হয়েছিল কি না। আর দুই আয়াত পরেই এটি জানিয়ে দেয়, প্রশ্নটির জন্য থামা কেন সার্থক — কারণ 81:28 বলে, তোমাদের মধ্যে যে চায় তার জন্য সোজা পথটি খোলাই আছে।"
          }
        ]
      }
    ]
  }
});
