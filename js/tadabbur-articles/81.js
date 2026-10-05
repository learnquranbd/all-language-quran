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
