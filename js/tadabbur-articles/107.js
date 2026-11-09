/**
 * Tadabbur long-form articles — surah 107.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "107:1": {
    "sections": [
      {
        "h": {
          "en": "Have You Seen Him?",
          "bn": "তাকে কি দেখেছ?"
        },
        "p": [
          {
            "en": "Surah al-Ma'un opens with four Arabic words: a-ra'ayta-lladhi yukadhdhibu bid-din, have you seen the one who denies the Recompense? Ibn Kathir, in his Arabic tafsir, names the one addressed: have you seen, O Muhammad, the one who denies. At-Tabari opens his explanation the same way, with have you seen, O Muhammad. The Muyassar keeps the address general and names no one: have you seen the state of that man who denies the Resurrection and the Recompense? Its word for state turns the look from a face to a condition.",
            "bn": "সূরা আল-মাঊন শুরু হয় চারটি আরবি শব্দে: আরাআইতাল্লাযী ইউকাযযিবু বিদ-দীন, তুমি কি তাকে দেখেছ, যে কর্মফলকে অস্বীকার করে? ইবন কাসীর তাঁর আরবি তাফসীরে বলে দেন, কথাটি কাকে বলা হচ্ছে: হে মুহাম্মাদ, তুমি কি দেখেছ সেই লোককে? তাবারীও ব্যাখ্যা শুরু করেন একই ভাবে, হে মুহাম্মাদ সম্বোধন দিয়ে। মুয়াসসার কারও নাম নেয় না, সম্বোধন রাখে খোলা: পুনরুত্থান আর প্রতিদানকে যে অস্বীকার করে, তার হালটা কি তুমি দেখেছ? হাল শব্দটি দৃষ্টিকে একটা চেহারা থেকে সরিয়ে নিয়ে যায় একটা অবস্থার দিকে।"
          },
          {
            "en": "Al-Qurtubi points out that part of the sentence is left unsaid. The full sense, he explains, is this: have you seen the one who denies the Recompense, is he right or is he wrong? The verse lays the man before the listener and stops, leaving the verdict to the one who looks. Nothing has yet been said about what the man does. The surah first asks for attention, and only then, from the next verse on, sets out the evidence.",
            "bn": "কুরতুবী দেখিয়ে দেন, বাক্যের একটা অংশ উহ্য রাখা হয়েছে। তাঁর ব্যাখ্যায় পুরো অর্থ দাঁড়ায়: যে প্রতিদানকে অস্বীকার করে, তাকে কি দেখেছ, সে ঠিক পথে আছে না ভুল পথে? আয়াতটি লোকটিকে শ্রোতার সামনে দাঁড় করিয়ে থেমে যায়। রায় দেওয়ার ভার থাকে যে দেখছে তার ওপর। লোকটি কী করে, সে কথা তখনও আসেনি। সূরাটি আগে মনোযোগ চায়, তারপর পরের আয়াত থেকে প্রমাণ সাজাতে শুরু করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Recompense, Reckoning, or Judgment",
          "bn": "প্রতিদান, হিসাব, না আল্লাহর বিধান"
        },
        "p": [
          {
            "en": "What exactly does the man deny? The commentators give ad-din a cluster of close meanings. Ibn Kathir's Arabic tafsir says it is al-ma'ad wal-jaza', the Return and the Recompense; his abridged English tafsir has the Hereafter, the Recompense and the Final Reward. The Muyassar and as-Sa'di both say the Resurrection and the Recompense. Al-Qurtubi and al-Baghawi both say the Recompense and the Reckoning, al-Qurtubi adding in the Hereafter and referring the reader back to his discussion of the word in al-Fatiha.",
            "bn": "লোকটি ঠিক কী অস্বীকার করে? তাফসীরকারেরা 'দীন' শব্দের কয়েকটি কাছাকাছি অর্থ দেন। ইবন কাসীরের আরবি তাফসীরে এর মানে আল-মাআদ ওয়াল-জাযা, অর্থাৎ ফিরে যাওয়া আর প্রতিদান। তাঁর সংক্ষিপ্ত ইংরেজি তাফসীরে আছে আখিরাত, প্রতিদান আর শেষ পুরস্কার। মুয়াসসার আর সা'দী দুজনেই বলেন, পুনরুত্থান ও প্রতিদান। কুরতুবী আর বাগাভীর ভাষায়, প্রতিদান ও হিসাব। কুরতুবী সঙ্গে যোগ করেন, আখিরাতের প্রতিদান, আর পাঠককে ফিরিয়ে নেন সূরা ফাতিহায় এ শব্দ নিয়ে তাঁর আগের আলোচনায়।"
          },
          {
            "en": "At-Tabari words it as Allah's reward and His punishment, and says the people of interpretation said much the same. The two reports he then brings do not say quite the same thing. From Ibn 'Abbas, through a chain he gives in full, he who denies the judgment of Allah. From Ibn Jurayj, the Reckoning. Ma'arif al-Qur'an, in its turn, speaks of those who deny the religion and the Day of Judgment. The meanings lie side by side in the sources, and this article chooses none of them.",
            "bn": "তাবারী বলেন, এর মানে আল্লাহর সওয়াব আর তাঁর শাস্তি। তাঁর দাবি, তাফসীরের আলেমরাও মোটামুটি এ কথাই বলেছেন। তবে এরপর তিনি যে দুটি বর্ণনা আনেন, সেগুলো হুবহু এক কথা বলে না। পূর্ণ সনদসহ ইবন আব্বাস (রাঃ) থেকে: যে আল্লাহর বিধানকে অস্বীকার করে। ইবন জুরাইজ থেকে: হিসাবকে। মাআরিফুল কুরআন আবার বলে, যারা দীন আর বিচার দিবসকে অস্বীকার করে। অর্থগুলো উৎসে পাশাপাশি রয়ে গেছে। এই লেখা তার কোনোটিকেই বেছে নেয় না।"
          },
          {
            "en": "At-Tabari adds a note on the wording. In the reading of 'Abdullah, he reports, the verse runs a-ra'ayta-lladhi yukadhdhibu ad-dina, without the preposition bi before the word. At-Tabari explains that the bi in the common reading is a connective, so that its presence and its absence come to the same meaning. The variant therefore changes nothing in the sense. It does show how closely the early readers weighed four short words before they explained them.",
            "bn": "শব্দের গঠন নিয়েও তাবারী একটি কথা যোগ করেন। তাঁর বর্ণনায়, আবদুল্লাহর কিরাআতে আয়াতটি এসেছে 'ইউকাযযিবুদ-দীনা' রূপে, শব্দের আগে 'বি' অব্যয় ছাড়া। তাবারী বুঝিয়ে দেন, প্রচলিত কিরাআতে এই 'বি' কেবল সংযোগের কাজ করে, থাকলেও যা অর্থ, না থাকলেও তা-ই। তাই এই ভিন্ন পাঠে অর্থ বদলায় না। তবে এতে বোঝা যায়, ব্যাখ্যা দেওয়ার আগে প্রথম যুগের কারীরা চারটি ছোট শব্দকে কত যত্নে ওজন করে দেখতেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Denial That Shows in Deeds",
          "bn": "অস্বীকার ধরা পড়ে কাজে"
        },
        "p": [
          {
            "en": "At-Tabari does not stop at the object of the denial. His full gloss reads: he who denies Allah's reward and punishment, and so does not obey Him in His command and His prohibition. The denial is defined together with what follows from it. As-Sa'di opens the surah in a similar spirit. Allah says this, he writes, in censure of him who abandons His rights and the rights of His servants, and the denier is he who does not believe in what the messengers brought.",
            "bn": "অস্বীকারটা কীসের, তাবারী শুধু সেখানে থামেন না। তাঁর পুরো ব্যাখ্যা এমন: যে আল্লাহর সওয়াব ও শাস্তিকে অস্বীকার করে, ফলে তাঁর আদেশ-নিষেধে তাঁর আনুগত্য করে না। অস্বীকারের সংজ্ঞাতেই জুড়ে আছে তার পরিণাম। সা'দীও সূরাটি শুরু করেন কাছাকাছি সুরে। তিনি লেখেন, আল্লাহ এ কথা বলছেন সেই লোকের নিন্দায়, যে আল্লাহর হক আর তাঁর বান্দাদের হক দুটোই ছেড়ে দেয়। আর অস্বীকারকারী সে, যে রাসূলদের আনা কথায় ঈমান আনে না।"
          },
          {
            "en": "Ma'arif al-Qur'an treats the verse as the preamble to everything after it. It makes plain, the commentary says, that the one who does these deeds is a man who denies the Requital, so the surah's warning is aimed at those who deny the religion and the Day of Judgment. It finds a subtle hint here that such sins are hard to imagine from a believer. If a believer does commit them, they remain heinous and gravely sinful, but the threat in this surah does not apply to him.",
            "bn": "মাআরিফুল কুরআন আয়াতটিকে দেখে পরের সব কথার ভূমিকা হিসেবে। এর ব্যাখ্যায়, আয়াতটি পরিষ্কার করে দেয় যে এসব কাজ যে করে, সে কর্মফল অস্বীকারকারী। তাই সূরার হুঁশিয়ারি তাদের জন্য, যারা দীন আর বিচার দিবসকে অস্বীকার করে। এখানে একটি সূক্ষ্ম ইঙ্গিতও তারা দেখে: এমন গুনাহ মুমিনের কাছ থেকে কল্পনা করাই কঠিন। কোনো মুমিন যদি এসব করেও ফেলে, তা জঘন্য আর বড় গুনাহ থেকেই যায়। কিন্তু এ সূরার শাস্তির হুমকি তার ওপর বর্তায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Names Carried by the Reports",
          "bn": "বর্ণনায় যাদের নাম এসেছে"
        },
        "p": [
          {
            "en": "Al-Qurtubi says plainly that there was disagreement over whom the verse came down about. Abu Salih reported from Ibn 'Abbas that it concerned al-'As ibn Wa'il as-Sahmi, and al-Kalbi and Muqatil said the same. Ad-Dahhak reported from Ibn 'Abbas that it concerned a man of the hypocrites. As-Suddi named al-Walid ibn al-Mughira. Others said Abu Jahl. Ad-Dahhak, in his own name, said 'Amr ibn 'A'idh. Al-Qurtubi lists them one after another and settles on none.",
            "bn": "কুরতুবী স্পষ্ট করে বলেন, আয়াতটি কার সম্পর্কে নাযিল হয়েছে, তা নিয়ে মতভেদ আছে। আবূ সালিহ ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, এটি আস ইবন ওয়াইল আস-সাহমী সম্পর্কে। কালবী আর মুকাতিলও তা-ই বলেছেন। দাহহাক ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, এটি মুনাফিকদের এক লোক সম্পর্কে। সুদ্দী নাম নেন ওয়ালীদ ইবনুল মুগীরার। কেউ কেউ বলেছেন আবূ জাহল। দাহহাক নিজের কথা হিসেবে বলেন আমর ইবন আইয। কুরতুবী নামগুলো একটার পর একটা সাজিয়ে দেন, কোনোটির পক্ষে রায় দেন না।"
          },
          {
            "en": "One report carries a scene. Ibn Jurayj, in al-Qurtubi's text, said it came down about Abu Sufyan, who used to slaughter a camel every week; an orphan asked him for something, and he struck him with his stick, and Allah revealed the surah. Al-Baghawi's list differs in its chains: Muqatil for al-'As ibn Wa'il; as-Suddi, Muqatil ibn Hayyan and Ibn Kaysan for al-Walid; ad-Dahhak for 'Amr ibn 'A'idh al-Makhzumi; and 'Ata' from Ibn 'Abbas for a man of the hypocrites.",
            "bn": "একটি বর্ণনায় পুরো একটা দৃশ্য আছে। কুরতুবীর লেখায় ইবন জুরাইজ বলেন, আয়াতটি নাযিল হয়েছিল আবূ সুফিয়ান সম্পর্কে। তিনি প্রতি সপ্তাহে একটা করে উট জবাই করতেন। এক ইয়াতীম তাঁর কাছে কিছু চাইলে তিনি তাকে লাঠি দিয়ে মারেন, তখন আল্লাহ এ সূরা নাযিল করেন। বাগাভীর তালিকায় বর্ণনাকারীরা আলাদা। আস ইবন ওয়াইলের পক্ষে মুকাতিল। ওয়ালীদের পক্ষে সুদ্দী, মুকাতিল ইবন হাইয়ান আর ইবন কাইসান। আমর ইবন আইয আল-মাখযূমীর পক্ষে দাহহাক। আর মুনাফিকদের এক লোকের পক্ষে আতা, ইবন আব্বাস (রাঃ) থেকে।"
          },
          {
            "en": "These are reports, and the sources leave them side by side; this article picks none. The same is true of the surah's place. Ibn Kathir and al-Baghawi call it Makkan. Al-Qurtubi gives both views: Makkan in the saying of 'Ata', Jabir and one of Ibn 'Abbas's two sayings, Madinan in his other saying, which is also Qatada's. Whoever the reports name, the verse describes what the text describes, and it licenses nothing against any living person or community. None of the commentaries cited here attaches a hadith to 107:1 itself.",
            "bn": "এগুলো বর্ণনা মাত্র। উৎসগুলো এদের পাশাপাশি রেখে দিয়েছে, এই লেখাও কোনোটিকে বেছে নেয় না। সূরাটি কোথায় নাযিল হয়েছে, সে প্রশ্নেও একই অবস্থা। ইবন কাসীর ও বাগাভী একে মাক্কী বলেন। কুরতুবী দুটো মতই আনেন: আতা, জাবির আর ইবন আব্বাস (রাঃ)-এর দুই মতের একটিতে মাক্কী। তাঁর অন্য মতে মাদানী, আর কাতাদাও তা-ই বলেন। বর্ণনায় যার নামই আসুক, আয়াত কেবল সেটুকুই বর্ণনা করে যা পাঠে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে সে কিছুরই অনুমতি দেয় না। এখানে উদ্ধৃত তাফসীরগুলোর কোনোটিই ১০৭:১-এর সঙ্গে কোনো হাদীস জোড়েনি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Orphan Pushed From the Door",
          "bn": "দরজা থেকে ঠেলে দেওয়া ইয়াতীম"
        },
        "p": [
          {
            "en": "Then the evidence arrives, introduced by fa-dhalika, for that is the man. 107:2 says he yadu'u the orphan, pushes him away. Ibn Kathir explains that he oppresses the orphan and does not give him his due; he neither feeds him nor treats him kindly. 107:3 adds that he does not urge the feeding of the miskin, whom Ibn Kathir describes as the poor man with nothing to sustain him or meet his needs. Ibn Kathir then sets the two verses beside 89:17 and 89:18.",
            "bn": "এরপর আসে প্রমাণ, শুরু হয় 'ফাযালিকা' দিয়ে: সে তো সেই লোক। ১০৭:২ বলছে, সে ইয়াতীমকে ধাক্কা দিয়ে সরিয়ে দেয়। ইবন কাসীরের ব্যাখ্যায়, সে ইয়াতীমের ওপর জুলুম করে, তার হক দেয় না। তাকে খেতেও দেয় না, তার সঙ্গে ভালো ব্যবহারও করে না। ১০৭:৩ যোগ করে, সে মিসকীনকে খাবার দিতে উৎসাহ দেয় না। ইবন কাসীরের ভাষায় মিসকীন সেই গরিব, যার জীবন চালানোর বা প্রয়োজন মেটানোর মতো কিছুই নেই। এরপর ইবন কাসীর এ দুই আয়াতকে পাশে রাখেন ৮৯:১৭ ও ৮৯:১৮-এর।"
          },
          {
            "en": "There the charge is spoken to a whole people: you do not honour the orphan, and you do not urge each other to feed the poor. Ma'arif al-Qur'an counts the deeds this surah condemns as four: oppressing and insulting the orphan; failing, though able, to feed the poor or to urge others to; praying only for show; and failing to pay zakah. These are wrong in themselves, it says, but done on top of disbelief and denial they are graver still, because they bring the lasting ruin the surah calls wayl.",
            "bn": "সেখানে অভিযোগটা গোটা এক জনগোষ্ঠীকে বলা: তোমরা ইয়াতীমকে সম্মান করো না, আর মিসকীনকে খাবার দিতে একে অপরকে উৎসাহ দাও না। মাআরিফুল কুরআন এ সূরায় নিন্দিত কাজগুলোকে চারটি বলে গোনে। ইয়াতীমের ওপর জুলুম ও তাকে অপমান করা। সামর্থ্য থাকা সত্ত্বেও গরিবকে না খাওয়ানো বা অন্যকে উৎসাহ না দেওয়া। শুধু লোক দেখাতে নামায পড়া। আর যাকাত না দেওয়া। তাদের মতে এগুলো নিজেরাই খারাপ কাজ। কিন্তু কুফর আর অস্বীকারের ওপর এগুলো করলে তা আরও ভারী হয়ে যায়, কারণ তা টেনে আনে সেই স্থায়ী ধ্বংস, যাকে সূরাটি বলে 'ওয়াইল'।"
          }
        ]
      },
      {
        "h": {
          "en": "Heedless Prayer, Withheld Help",
          "bn": "উদাসীন নামায, আটকে রাখা সাহায্য"
        },
        "p": [
          {
            "en": "The rest of the surah follows: so woe to those who pray, who are sahun about their prayer, who make a show, and withhold al-ma'un (107:4 to 107:7). Ibn Kathir reports from Ibn 'Abbas and others that these are the hypocrites, who pray in public and not in private. Ma'arif al-Qur'an agrees and stresses the preposition: the verse says 'an salatihim, heedless of their prayer, not fi salatihim, in it. It is not about the unintended slips Muslims make in prayer, which the Prophet ﷺ himself made.",
            "bn": "সূরার বাকি অংশ এর পরে আসে: দুর্ভোগ সেই নামাযিদের, যারা নিজেদের নামায সম্পর্কে উদাসীন, যারা লোক দেখায় আর মাঊন আটকে রাখে (১০৭:৪ থেকে ১০৭:৭)। ইবন কাসীর ইবন আব্বাস (রাঃ) ও অন্যদের সূত্রে বলেন, এরা মুনাফিক, যারা লোকের সামনে নামায পড়ে, আড়ালে পড়ে না। মাআরিফুল কুরআনও তা-ই বলে, আর জোর দেয় অব্যয়টির ওপর। আয়াতে আছে 'আন সালাতিহিম', নামায সম্পর্কে উদাসীন, 'ফী সালাতিহিম', নামাযের ভেতরে নয়। নামাযে মুসলিমদের অনিচ্ছাকৃত ভুলের কথা এখানে নেই। তেমন ভুল নবী ﷺ-এরও হয়েছে।"
          },
          {
            "en": "Ibn Kathir records 'Ata' ibn Dinar's praise of Allah for saying about their prayer and not in their prayer. He then lists what sahun can mean: leaving the prayer altogether, as Ibn 'Abbas said; praying it wholly outside its time, as Masruq and Abu ad-Duha said; always delaying it to the end of its time; not fulfilling its pillars and conditions; or praying without humility and reflection. The wording, he says, takes in all of these. Whoever has one trait has a portion of the verse, and whoever has all has the hypocrisy of action complete.",
            "bn": "ইবন কাসীর আতা ইবন দীনারের একটি কথা উদ্ধৃত করেন। তিনি আল্লাহর প্রশংসা করেছেন এ জন্য যে আল্লাহ বলেছেন নামায সম্পর্কে উদাসীন, নামাযের ভেতরে নয়। এরপর ইবন কাসীর গুনে দেখান 'সাহূন' কী কী বোঝাতে পারে। নামায একেবারে ছেড়ে দেওয়া, যেমন ইবন আব্বাস (রাঃ) বলেছেন। ওয়াক্ত পুরো পার করে পড়া, যেমন মাসরূক ও আবুদ-দুহা বলেছেন। সবসময় শেষ ওয়াক্ত পর্যন্ত দেরি করা। রুকন ও শর্ত পূরণ না করা। কিংবা বিনয় আর চিন্তা ছাড়া পড়া। তাঁর মতে শব্দটি এর সবই ধারণ করে। যার মধ্যে একটি আছে, আয়াতের একাংশ তার ওপর বর্তায়। যার মধ্যে সবগুলো, তার মধ্যে আমলের নিফাক পূর্ণ।"
          },
          {
            "en": "Ibn Kathir attaches a hadith here. Muslim records from Anas ibn Malik that the Messenger of Allah ﷺ said: \"That is the prayer of the hypocrite: he sits watching the sun until, when it is between the two horns of Shaytan, he stands and pecks it four times, remembering Allah in it only a little.\" It sits in Muslim's Sahih. Ibn Kathir joins it to 4:142, where the hypocrites stand for prayer lazily, showing off to people. On 107:6 he adds that a deed done for Allah alone, which people come to know of and the doer is glad, is not showing off.",
            "bn": "এখানে ইবন কাসীর একটি হাদীস জোড়েন। মুসলিম আনাস ইবন মালিক (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: \"ওটা মুনাফিকের নামায। সে বসে বসে সূর্যের দিকে তাকিয়ে থাকে। যখন সূর্য শয়তানের দুই শিংয়ের মাঝখানে চলে আসে, তখন উঠে দাঁড়িয়ে চারটি ঠোকর দেয়, তাতে আল্লাহকে স্মরণ করে সামান্যই।\" হাদীসটি সহীহ মুসলিমে আছে। ইবন কাসীর একে মিলিয়ে দেন ৪:১৪২-এর সঙ্গে, যেখানে মুনাফিকরা নামাযে দাঁড়ায় অলসভাবে, মানুষকে দেখানোর জন্য। ১০৭:৬ প্রসঙ্গে তিনি যোগ করেন, কেউ কেবল আল্লাহর জন্য আমল করল, পরে মানুষ জেনে গেল আর সে খুশি হলো, এটা লোক দেখানো নয়।"
          },
          {
            "en": "On al-ma'un the sources differ. Ibn Kathir reports that Ibn Mas'ud, asked about it, said it is what people give each other, like an axe, a pot, a bucket and the like; such people will not even lend a thing that comes back intact, and are stingier still with zakah. Ma'arif al-Qur'an grants that the word literally means any small thing and idiomatically the household items neighbours borrow, but takes it here as zakah, the view it gives for 'Ali, Ibn 'Umar, al-Hasan al-Basri, Qatada and ad-Dahhak.",
            "bn": "মাঊন নিয়ে উৎসগুলোর মত আলাদা। ইবন কাসীর বর্ণনা করেন, ইবন মাসঊদ (রাঃ)-কে এ বিষয়ে জিজ্ঞেস করা হলে তিনি বলেন: মানুষ একে অপরকে যা দেয়, যেমন কুড়াল, হাঁড়ি, বালতি ইত্যাদি। ইবন কাসীরের মতে এরা এমন জিনিসও ধার দেয় না, যা অক্ষত অবস্থায় ফিরে আসত, আর যাকাতের বেলায় এরা আরও কৃপণ। মাআরিফুল কুরআন মানে যে শব্দটির আক্ষরিক অর্থ যেকোনো ছোট জিনিস, আর প্রচলিত অর্থে প্রতিবেশীরা যেসব গৃহসামগ্রী ধার নেয়। তবু এখানে তারা একে যাকাত বলে নেয়। এ মত তারা দেয় আলী (রাঃ), ইবন উমার (রাঃ), হাসান বসরী, কাতাদা ও দাহহাকের নামে।"
          },
          {
            "en": "Ma'arif al-Qur'an explains its choice. The threat of wayl, it argues, can only be for failing a legal obligation; lending small things to others is a kindness with great reward in the Hereafter, but not an obligation. The reports about pots and household items, in its reading, show how narrow such people are: a man reluctant to part with a pot will hardly part with his zakah. Ibn Mas'ud's gloss and the zakah view stand side by side in the sources, and this article picks neither.",
            "bn": "মাআরিফুল কুরআন তাদের বেছে নেওয়ার কারণও বলে। তাদের যুক্তি, ওয়াইলের হুমকি কেবল শরীয়তের ফরজ দায় পালন না করার জন্যই হতে পারে। অন্যকে ছোটখাটো জিনিস ধার দেওয়া বড় নেকির কাজ, আখিরাতে এর অনেক সওয়াব, কিন্তু তা ফরজ নয়। তাদের পাঠে হাঁড়ি-পাতিলের বর্ণনাগুলো দেখায়, এমন লোকের মন কত সংকীর্ণ। একটা হাঁড়ি দিতে যার এত আপত্তি, সে যাকাত দেবে কী করে? ইবন মাসঊদ (রাঃ)-এর ব্যাখ্যা আর যাকাতের মত উৎসে পাশাপাশি আছে। এই লেখা কোনোটিকেই বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mirror Rather Than a Finger",
          "bn": "আঙুল তোলা নয়, আয়না দেখা"
        },
        "p": [
          {
            "en": "The commentators are consistent about whom the surah describes. Ma'arif al-Qur'an reads the opening as the mark of the denier, and both it and the report Ibn Kathir gives from Ibn 'Abbas read the heedless worshippers as the hypocrites. Neither makes them the ordinary believer whose mind wanders or who slips in prayer. That shapes how the surah should be used. It describes deniers and hypocrites as the text describes them, and licenses nothing against any living person or community; it gives no reader a way to look into another worshipper's heart and name him.",
            "bn": "সূরাটি কাদের ছবি আঁকে, সে বিষয়ে তাফসীরকারেরা একমত। মাআরিফুল কুরআন শুরুর আয়াতকে পড়ে অস্বীকারকারীর পরিচয় হিসেবে। আর উদাসীন নামাযিদের মুনাফিক বলে তারাও, আবার ইবন কাসীরের আনা ইবন আব্বাস (রাঃ)-এর বর্ণনাও। যে সাধারণ মুমিনের নামাযে মন অন্যদিকে যায় বা ভুল হয়ে যায়, তাকে এঁদের কেউই এর মধ্যে ফেলেন না। সূরাটি কীভাবে কাজে লাগানো হবে, তা এখান থেকেই ঠিক হয়। পাঠে অস্বীকারকারী আর মুনাফিকদের যেমন বর্ণনা আছে, সূরা ঠিক ততটুকুই বলে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে সে কোনো অনুমতি দেয় না। অন্য মুসল্লির অন্তরে উঁকি দিয়ে তাকে কোনো নাম দেওয়ার পথও কোনো পাঠককে সে দেয় না।"
          },
          {
            "en": "So the opening question comes back to the one reading it. Have you seen the one who denies the Recompense? The surah's evidence is never a creed he recites. It is an orphan turned from the door, a word of urging left unsaid, a prayer kept only where it is seen, and a pot not lent. Each of these costs very little to put right. The reader who answers the question honestly about himself has already begun to read the surah as it asks to be read.",
            "bn": "তাই শুরুর প্রশ্নটা ফিরে আসে পাঠকের কাছেই। কর্মফলকে যে অস্বীকার করে, তাকে কি দেখেছ? সূরা প্রমাণ হিসেবে কখনো তার মুখের কোনো আকীদা হাজির করে না। হাজির করে দরজা থেকে ফিরিয়ে দেওয়া এক ইয়াতীম, না-বলা একটি উৎসাহের কথা, শুধু লোকের চোখের সামনে পড়া নামায, আর ধার না দেওয়া একটা হাঁড়ি। এর প্রতিটি শোধরাতে খরচ খুবই সামান্য। যে পাঠক নিজের ব্যাপারে প্রশ্নটার সৎ উত্তর দেয়, সে সূরাটিকে সেভাবেই পড়তে শুরু করেছে, যেভাবে সূরা নিজে পড়তে বলে।"
          }
        ]
      }
    ]
  },
  "107:4": {
    "sections": [
      {
        "h": {
          "en": "Two Words at the Mosque Door",
          "bn": "মসজিদের দরজায় দুটি শব্দ"
        },
        "p": [
          {
            "en": "In Arabic the verse is two words: fa-waylun lil-musallin, so woe to those who pray. The fa ties it to what came before, the man who denies the Recompense, pushes the orphan away and does not urge the feeding of the poor. The commentators gloss wayl in different registers. At-Tabari makes it the valley that flows with the pus of the people of Hell, set for the hypocrites who pray without seeking Allah by their prayer. Al-Qurtubi says only: punishment for them. Al-Muyassar renders it severe punishment.",
            "bn": "আরবিতে আয়াতটি মাত্র দুটি শব্দ: ফাওয়াইলুল লিল মুসাল্লীন, অতএব দুর্ভোগ নামাযিদের জন্য। শুরুর 'ফা' একে আগের কথার সঙ্গে বেঁধে দেয়। সেখানে ছিল সেই লোক, যে কর্মফলকে অস্বীকার করে, ইয়াতীমকে ধাক্কা দিয়ে সরায়, আর মিসকীনকে খাওয়ানোর কথা মুখেও আনে না। 'ওয়াইল' শব্দের ব্যাখ্যায় তাফসীরকারদের সুর আলাদা। তাবারী একে বলেন সেই উপত্যকা, যেখানে জাহান্নামীদের পুঁজ বয়ে যায়। তাঁর মতে তা সেই মুনাফিকদের জন্য, যারা নামায পড়ে কিন্তু নামাযে আল্লাহকে চায় না। কুরতুবী শুধু বলেন: তাদের জন্য শাস্তি। মুয়াসসার লেখে: কঠিন শাস্তি।"
          },
          {
            "en": "The shock is in the second word. Al-musallin is not a name for unbelievers; it names people who pray. As-Sa'di glosses it as those committed to establishing the prayer, and then, with a single but, runs into the next verse: they are heedless of it. Ibn Kathir agrees: they are people of prayer who have taken it on, yet are heedless of it. Neither lets the verse stand alone. Joined to 107:5, it describes a prayer that is performed, even kept up, and empty inside. The warning stands at the door of the mosque, not outside it.",
            "bn": "ধাক্কাটা আসে দ্বিতীয় শব্দে। 'আল-মুসাল্লীন' কাফিরদের নাম নয়, এ নাম তাদের যারা নামায পড়ে। সা'দী ব্যাখ্যা করেন: যারা নামায কায়েম করার দায় নিজেদের উপর নিয়েছে। তারপর ছোট্ট একটা 'কিন্তু' দিয়ে সোজা পরের আয়াতে চলে যান: তারা নিজেদের নামায সম্পর্কে উদাসীন। ইবন কাসীরও একইভাবে পড়েন: তারা নামাযি লোক, নামাযকে আঁকড়েও ধরেছে, অথচ নামায থেকেই তারা গাফিল। দুজনের কেউই আয়াতটিকে একা দাঁড়াতে দেন না। ১০৭:৫-এর সঙ্গে মেলালে ছবিটা দাঁড়ায় এমন এক নামাযের, যা আদায় হয়, নিয়মিতও হয়, কিন্তু ভেতরটা ফাঁকা। সতর্কবাণীটা তাই মসজিদের বাইরে নয়, দাঁড়িয়ে আছে মসজিদের দরজায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Preposition That Spares",
          "bn": "যে অব্যয় রেহাই দেয়"
        },
        "p": [
          {
            "en": "The definition in 107:5 turns on one small word. They are sahun 'an salatihim, heedless of their prayer, not fi salatihim, heedless in it. 'Ata' ibn Dinar praised Allah for that wording, in the texts of at-Tabari and Ibn Kathir. Al-Qurtubi explains the difference by quoting az-Zamakhshari. Sahw 'an, he says, is the heedlessness of leaving the prayer and paying it little attention, and that is the deed of the hypocrites or of the reckless sinners among the Muslims.",
            "bn": "১০৭:৫-এর সংজ্ঞাটা ঘুরছে একটা ছোট্ট শব্দের উপর। আয়াত বলছে 'আন সালাতিহিম সাহূন', নিজেদের নামায সম্পর্কে উদাসীন। বলেনি 'ফী সালাতিহিম', নামাযের ভেতরে অন্যমনস্ক। আতা ইবন দীনার এই শব্দচয়নের জন্য আল্লাহর প্রশংসা করেছেন, তাবারী ও ইবন কাসীরের তাফসীরে তা আছে। পার্থক্যটা কুরতুবী বোঝান যামাখশারীর কথা তুলে। তাঁর মতে 'আন'-এর উদাসীনতা মানে নামায ছেড়ে দেওয়া, নামাযের দিকে প্রায় ফিরেও না তাকানো। এটা মুনাফিকদের কাজ, অথবা মুসলমানদের মধ্যে যারা বেপরোয়া গুনাহগার, তাদের কাজ।"
          },
          {
            "en": "Sahw fi is the forgetfulness that comes over a person inside the prayer, from the whispering of Shaytan or the talk of the self, and az-Zamakhshari says hardly any Muslim is free of it; that is why the jurists gave the prostration of forgetfulness its own chapter. As-Sa'di draws the same line: heedlessness about the prayer earns blame, while forgetfulness in it happens to everyone, even the Prophet ﷺ. Ibn al-'Arabi, quoted by al-Qurtubi, goes further. The man who never forgets in prayer, he says, does not reflect on what he recites and only counts the units: he eats the husk and throws away the kernel.",
            "bn": "আর 'ফী'-এর ভুল হলো নামাযের ভেতরে মানুষের উপর যে ভুলোমন চেপে বসে, শয়তানের ওয়াসওয়াসা বা মনের কথাবার্তা থেকে। যামাখশারী বলেন, এর হাত থেকে খুব কম মুসলিমই বাঁচে। এ কারণেই ফকীহরা সাহু সিজদার জন্য আলাদা অধ্যায় রেখেছেন। সা'দীও একই রেখা টানেন। নামায সম্পর্কে উদাসীনতাই নিন্দার যোগ্য, আর নামাযের ভেতরে ভুল সবারই হয়, এমনকি নবী ﷺ-এরও। কুরতুবী ইবনুল আরাবীর কথা আনেন, যিনি আরও এক ধাপ এগিয়ে যান। তাঁর মতে, যে লোক নামাযে কখনো ভোলে না, সে আসলে পড়া আয়াত নিয়ে ভাবেই না, শুধু রাকাত গোনে। সে খোসা খায়, শাঁস ফেলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Ways to Be Heedless",
          "bn": "উদাসীনতার তিন রূপ"
        },
        "p": [
          {
            "en": "What does heedless of their prayer mean in practice? At-Tabari says the people of interpretation differed, and gives three readings with their chains. The first is that they delay the prayer past its time and pray it only after the time has gone. He gives it from Masruq, who called it leaving its time and wasting its appointed hour; from Abu ad-Duha; from Ibn Abza, who said they hold back the obligatory prayer until it leaves its time; and from Mus'ab ibn Sa'd, for whom sahw is leaving it beyond the time.",
            "bn": "নামায সম্পর্কে উদাসীন হওয়া বাস্তবে কেমন? তাবারী বলেন, ব্যাখ্যাকারদের মধ্যে মতভেদ হয়েছে। তিনি সনদসহ তিনটি মত আনেন। প্রথম মত: তারা নামাযকে ওয়াক্ত পার করে পিছিয়ে দেয়, ওয়াক্ত চলে যাওয়ার পরই কেবল পড়ে। এ মত তিনি আনেন মাসরূক থেকে, যিনি একে বলেছেন ওয়াক্ত ছেড়ে দেওয়া, নির্ধারিত সময় নষ্ট করা। আবুদ দুহা থেকেও আনেন। ইবন আবযা থেকে আনেন, যাঁর কথায় তারা ফরয নামাযকে ততক্ষণ আটকে রাখে, যতক্ষণ না ওয়াক্ত বেরিয়ে যায়। আর আনেন মুসআব ইবন সা'দ থেকে, যাঁর মতে সাহু মানে ওয়াক্তের বাইরে ফেলে রাখা।"
          },
          {
            "en": "The second reading is that they abandon it and do not pray it at all; at-Tabari's chain gives this from Mujahid in two words, leaving it. The third is that they treat it lightly, neglect it and are distracted from it. Mujahid, in other chains, says lahun, absorbed in amusement; Qatada says ghafilun, unmindful, and in another chain describes a man who does not care whether he has prayed or not; Ibn Zayd says they pray, though prayer is no concern of theirs.",
            "bn": "দ্বিতীয় মত: তারা নামায ছেড়েই দেয়, একেবারেই পড়ে না। তাবারীর সনদে মুজাহিদ এ কথা বলেছেন মাত্র দুই শব্দে: নামায ছেড়ে দেওয়া। তৃতীয় মত: তারা নামাযকে হালকা করে দেখে, অবহেলা করে, অন্য কিছুতে মজে থাকে। অন্য সনদে মুজাহিদ বলেন 'লাহূন', খেলায় মগ্ন। কাতাদা বলেন 'গাফিলূন', বেখেয়াল। আরেক সনদে কাতাদা এমন লোকের ছবি আঁকেন, নামায পড়ল কি পড়ল না, তাতে যার কিছুই যায় আসে না। ইবন যায়দ বলেন, তারা নামায পড়ে ঠিকই, কিন্তু নামায তাদের কোনো ভাবনার বিষয় নয়।"
          },
          {
            "en": "At-Tabari then gives his own view. The soundest, he says, is that sahun means lahun, distracted from the prayer and busy with other things, and in that distraction lies losing the prayer at times and losing its time at others. So both the delay reading and the abandonment reading are correct, because heedlessness holds both. Al-Muyassar joins two strands: they do not establish it as it should be done, nor perform it in its time. Al-Qurtubi adds Abu al-'Aliya, for whom they neither pray at the set times nor complete the bowing and prostration.",
            "bn": "এরপর তাবারী নিজের মত দেন। তাঁর মতে সবচেয়ে সঠিক কথা হলো, 'সাহূন' মানে 'লাহূন': নামায থেকে মন সরিয়ে অন্য কাজে ব্যস্ত থাকা। এই অন্যমনস্কতার মধ্যেই কখনো নামাযটাই হারিয়ে যায়, কখনো হারায় তার ওয়াক্ত। তাই দেরি করার মত আর ছেড়ে দেওয়ার মত, দুটোই ঠিক, কারণ উদাসীনতা দুটোকেই ধারণ করে। মুয়াসসার দুটি দিক একসঙ্গে বলে: তারা নামায যথাযথভাবে কায়েম করে না, সময়মতো আদায়ও করে না। কুরতুবী যোগ করেন আবুল আলিয়ার কথা: তারা ওয়াক্তমতো নামায পড়ে না, রুকু-সিজদাও পূর্ণ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports and Their Weight",
          "bn": "কোন বর্ণনার ভার কতটা"
        },
        "p": [
          {
            "en": "Among at-Tabari's holders of the delay reading is a Companion: Sa'd ibn Abi Waqqas, asked about the verse by his son Mus'ab, in chains that stop with Sa'd himself. At-Tabari also relays a version from Sa'd raised to the Prophet ﷺ, on this verse and the prayer's time, and al-Baghawi and al-Qurtubi carry it too. None of the three grades it in the text fetched here. Ibn Kathir weighs the two forms and judges the one stopping at Sa'd to have the sounder chain, so this article does not quote the raised version.",
            "bn": "তাবারী দেরির মতের যাঁদের নাম এনেছেন, তাঁদের একজন সাহাবি: সা'দ ইবন আবী ওয়াক্কাস (রাঃ)। তাঁর ছেলে মুসআব তাঁকে এ আয়াত সম্পর্কে জিজ্ঞেস করেছিলেন, আর এ সনদগুলো সা'দ (রাঃ)-এ গিয়েই থেমেছে। তাবারী সা'দ (রাঃ) থেকে আরেকটি রূপও আনেন, যা নবী ﷺ পর্যন্ত পৌঁছানো, বিষয় এই আয়াত আর নামাযের ওয়াক্ত। বাগাভী ও কুরতুবীও তা এনেছেন। এখানে সংগৃহীত পাঠে তিনজনের কেউই এর মান বলেননি। ইবন কাসীর দুই রূপ পাশাপাশি রেখে মত দেন, সা'দ (রাঃ)-এ থেমে যাওয়া রূপটির সনদই বেশি মজবুত। তাই নবী ﷺ পর্যন্ত পৌঁছানো রূপটি এ প্রবন্ধে উদ্ধৃত হলো না।"
          },
          {
            "en": "Ibn Kathir relays a second raised report on the verse, from Abu Barza al-Aslami, which at-Tabari cited for his reading, and marks it weak: Jabir al-Ju'fi in its chain is weak, and his informant is unnamed. It is named here only so the reader knows of it. What a sound collection carries is general. Ibn Kathir sets beside the passage Muslim's report from Anas ibn Malik of the hypocrite who watches the sun until it is between the horns of Shaytan, then pecks out four units, remembering Allah only a little (Muslim 622). It pictures such a prayer, but is not reported as an explanation of this verse.",
            "bn": "ইবন কাসীর আয়াতটি নিয়ে নবী ﷺ পর্যন্ত পৌঁছানো আরেকটি বর্ণনা আনেন, আবু বারযা আসলামী (রাঃ) থেকে। তাবারী নিজের মতের পক্ষে এটি এনেছিলেন। ইবন কাসীর একে দুর্বল বলেন: সনদে আছেন জাবির আল-জু'ফী, যিনি দুর্বল, আর তাঁর শায়খের নামই উল্লেখ নেই। পাঠক যেন এর কথা জানেন, শুধু সেজন্য এখানে নামটা আসল। সহীহ সংকলনে যা আছে তা সাধারণ কথা। ইবন কাসীর এ অংশের পাশে রাখেন মুসলিমের বর্ণনা, আনাস ইবন মালিক (রাঃ) থেকে। তাতে সেই মুনাফিকের ছবি, যে সূর্যের দিকে তাকিয়ে বসে থাকে, সূর্য শয়তানের দুই শিংয়ের মাঝে এলে উঠে চারটি রাকাত ঠুকরে নেয়, আল্লাহকে স্মরণ করে সামান্যই (মুসলিম ৬২২)। এমন নামাযের ছবি এতে আছে, কিন্তু একে এ আয়াতের ব্যাখ্যা হিসেবে বর্ণনা করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer Staged for Onlookers",
          "bn": "দর্শকের জন্য সাজানো নামায"
        },
        "p": [
          {
            "en": "107:6 names the second trait: alladhina hum yura'un, those who make a show. At-Tabari explains whom the show is for. They let people see their prayer, because they pray neither in hope of reward nor in fear of punishment, but only so that the believers see them, take them for their own, and so leave their lives and families untouched. These, he says, were the hypocrites of the Prophet's ﷺ time, who hid disbelief and displayed Islam, and he adds that this is what the people of interpretation said.",
            "bn": "১০৭:৬ দ্বিতীয় বৈশিষ্ট্যের নাম দেয়: আল্লাযীনা হুম ইউরাউন, যারা লোক দেখায়। কাকে দেখায়, তাবারী তা খুলে বলেন। তারা মানুষকে নিজেদের নামায দেখায়। সওয়াবের আশায় তারা নামায পড়ে না, শাস্তির ভয়েও না। পড়ে শুধু এজন্য যে মুমিনরা তাদের দেখবে, নিজেদের লোক ভাববে, আর তাদের জান ও পরিবার-পরিজনে হাত দেবে না। তাবারী বলেন, এরা নবী ﷺ-এর যুগের মুনাফিক, যারা ভেতরে কুফর লুকিয়ে রাখত আর বাইরে ইসলাম দেখাত। সঙ্গে তিনি জানিয়ে দেন, ব্যাখ্যাকারেরা এমনটাই বলেছেন।"
          },
          {
            "en": "The chains he gives for this name Mujahid, who said of the heedless, they are the hypocrites, and ad-Dahhak, who said the same of both verses. Al-Qurtubi notes that 107:6 itself points to the hypocrites, and later sets 4:142 beside the passage, where they stand up for prayer lazily, showing off to people. Not every commentator narrows the word. Al-Muyassar keeps it general: they display good deeds to be seen by people. As-Sa'di says Allah described them with showing off, hardness and want of mercy, and glosses yura'un as doing deeds for people to see.",
            "bn": "এ মতের পক্ষে তাবারীর সনদে আছেন মুজাহিদ, যিনি উদাসীনদের সম্পর্কে বলেছেন: এরা মুনাফিক। আছেন দাহহাক, যিনি দুটি আয়াত নিয়েই একই কথা বলেছেন। কুরতুবী দেখান, ১০৭:৬ নিজেই মুনাফিকদের দিকে ইঙ্গিত করে। পরে তিনি এর পাশে রাখেন ৪:১৪২, যেখানে তারা নামাযে দাঁড়ায় অলসভাবে, মানুষকে দেখানোর জন্য। তবে সব তাফসীরকার শব্দটিকে সংকীর্ণ করেন না। মুয়াসসার একে সাধারণ রাখে: তারা মানুষকে দেখাতে ভালো কাজ জাহির করে। সা'দী বলেন, আল্লাহ এদের বর্ণনা দিয়েছেন রিয়া, কঠোরতা আর দয়াহীনতা দিয়ে। 'ইউরাউন'-এর অর্থ তাঁর কাছে মানুষকে দেখানোর জন্য আমল করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen, Yet Not Showing Off",
          "bn": "দেখা গেলেই রিয়া নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi defines the fault with care, in a passage he credits to Ibn al-'Arabi. The reality of riya', it says, is seeking something of this world through worship, and its root is seeking a standing in people's hearts. Then come its forms: polishing one's bearing to win rank and praise; wearing short or rough clothes to look detached from the world; voicing displeasure with worldly people and grief over good that is missed; and displaying prayer and charity, or beautifying prayer, so that people see it. The list ends at the prayer itself.",
            "bn": "কুরতুবী দোষটার সংজ্ঞা দেন সাবধানে, ইবনুল আরাবীর বরাতে। সেখানে বলা হয়েছে, রিয়ার আসল রূপ হলো ইবাদত দিয়ে দুনিয়ার কিছু চাওয়া, আর এর মূলে আছে মানুষের মনে একটা জায়গা পাওয়ার আকাঙ্ক্ষা। তারপর আসে এর কয়েকটি রূপ। মর্যাদা আর প্রশংসা পেতে চালচলন পরিপাটি করা। দুনিয়াবিমুখ দেখাতে খাটো বা মোটা কাপড় পরা। দুনিয়াদারদের প্রতি বিরক্তি আর হাতছাড়া হওয়া নেকির জন্য আফসোস মুখে প্রকাশ করা। আর মানুষ দেখবে বলে নামায ও সদকা জাহির করা, বা নামাযকে সুন্দর করে পড়া। তালিকাটা শেষ হয় নামাযে এসেই।"
          },
          {
            "en": "Then he draws a boundary. A man is not showing off by doing an obligation openly, because obligations are the marks of Islam and the signs of the religion, and one who leaves them deserves blame, so doing them openly removes suspicion. A voluntary deed is better hidden, though showing it so that others follow is good. Showing off is intending that eyes see the deed and praise its doer for righteousness. He tells of someone who saw a man prolong a prostration of thanks in the mosque and said, how good this would be in your house, sensing in it the wish to be seen and heard.",
            "bn": "তারপর তিনি একটা সীমারেখা টানেন। ফরয আমল প্রকাশ্যে করলে কেউ রিয়াকার হয়ে যায় না। ফরয তো ইসলামের নিশানা, দীনের প্রতীক। যে তা ছেড়ে দেয় সে নিন্দার যোগ্য, তাই প্রকাশ্যে আদায় করলে সন্দেহ দূর হয়। নফল আমল গোপন রাখাই ভালো, তবে অন্যরা অনুসরণ করবে এই নিয়তে প্রকাশ করলে তা সুন্দর। রিয়া হলো এই নিয়ত যে চোখগুলো আমলটা দেখুক আর নেককার বলে প্রশংসা করুক। কুরতুবী এক ঘটনাও আনেন। একজন দেখলেন, মসজিদে এক লোক শোকরের সিজদা অনেক লম্বা করছে। তিনি বললেন, এটা ঘরে করলে কতই না ভালো হতো। লোকটির মধ্যে দেখানো আর শোনানোর ঝোঁক টের পেয়েই তিনি এ কথা বলেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Bucket, the Pot, the Zakah",
          "bn": "বালতি, হাঁড়ি আর যাকাত"
        },
        "p": [
          {
            "en": "The last trait is wa-yamna'una al-ma'un, and they withhold al-ma'un. At-Tabari starts from the word: the ma'un of anything is its benefit, and rain from the cloud was called ma'un. Al-Baghawi relays Qutrub that the root means littleness, so zakah and charity were called ma'un as a little out of much. Then the readings divide. Al-Baghawi gives zakah from 'Ali (RA), and as the view of Ibn 'Umar (RA), al-Hasan, Qatada and ad-Dahhak; Ibn Kathir adds Muhammad ibn al-Hanafiyya and Sa'id ibn Jubayr, among others.",
            "bn": "শেষ বৈশিষ্ট্য: ওয়া ইয়ামনাউনাল মাউন, আর তারা মাউন আটকে রাখে। তাবারী শুরু করেন শব্দটা থেকে: যে কোনো জিনিসের মাউন হলো তার উপকার। মেঘ থেকে নামা বৃষ্টিকেও মাউন বলা হতো। বাগাভী কুতরুবের কথা আনেন, এর মূল অর্থ স্বল্পতা। তাই যাকাত আর সদকাকে মাউন বলা হয়েছে, কারণ তা অনেকের মধ্য থেকে অল্প একটু। এরপর মতগুলো আলাদা হয়ে যায়। বাগাভী আলী (রাঃ) থেকে আনেন, মাউন মানে যাকাত। ইবন উমর (রাঃ), হাসান, কাতাদা ও দাহহাকের মতও এটাই। ইবন কাসীর এ তালিকায় আরও অনেকের সঙ্গে যোগ করেন মুহাম্মাদ ইবনুল হানাফিয়্যা ও সাঈদ ইবন জুবায়রের নাম।"
          },
          {
            "en": "Against it stands Ibn Mas'ud (RA): in al-Baghawi's words, the axe, the bucket, the pot and the like. Abu Dawud records it from him: \"We used to count al-ma'un, in the time of the Messenger of Allah ﷺ, as the lending of the bucket and the pot\" (Abu Dawud 1657). Abu Dawud gives no grading for it. Muhammad ibn Ka'b and al-Kalbi widen the word to all the ordinary kindness people exchange; Mujahid, in al-Baghawi, says lending; Sa'id ibn al-Musayyib and az-Zuhri say it is wealth, in the tongue of Quraysh. Al-Qurtubi counts twelve sayings in all.",
            "bn": "এর বিপরীতে আছেন ইবন মাসউদ (রাঃ)। বাগাভীর ভাষায় তাঁর মত: কুড়াল, বালতি, হাঁড়ি আর এ ধরনের জিনিস। আবু দাউদ তাঁর থেকে বর্ণনা করেছেন: \"রাসূলুল্লাহ ﷺ-এর যুগে আমরা মাউন বলতে বুঝতাম বালতি আর হাঁড়ি ধার দেওয়া\" (আবু দাউদ ১৬৫৭)। আবু দাউদ এর কোনো মান উল্লেখ করেননি। মুহাম্মাদ ইবন কা'ব ও কালবী শব্দটাকে আরও বড় করে দেখেন: মানুষ পরস্পরের সঙ্গে যত সাধারণ সৌজন্য বিনিময় করে, সবই এর ভেতরে। বাগাভীর বর্ণনায় মুজাহিদ বলেন ধার দেওয়া। সাঈদ ইবনুল মুসায়্যিব ও যুহরী বলেন, কুরাইশের ভাষায় এর অর্থ সম্পদ। কুরতুবী সব মিলিয়ে বারোটি মত গুনেছেন।"
          },
          {
            "en": "Some hold the readings together. 'Ikrima, in al-Baghawi's report, said its highest is the known zakah and its lowest the lending of goods, and Ibn Kathir calls his saying good because it gathers all the views into one thing: refusing to help, with wealth or with use. At-Tabari, because Allah spoke of them withholding it in general terms, judges that they withhold both what people lend one another and the rights Allah made due to the needy. As-Sa'di reads it at its smallest, the bowl, the bucket and the axe; Ma'arif al-Qur'an, as the 107:1 article shows, takes it as zakah. The disagreement stands.",
            "bn": "কেউ কেউ মতগুলোকে একসঙ্গে ধরে রাখেন। বাগাভীর বর্ণনায় ইকরিমা বলেছেন, মাউনের সর্বোচ্চ স্তর হলো পরিচিত যাকাত, আর সর্বনিম্ন হলো জিনিসপত্র ধার দেওয়া। ইবন কাসীর এ কথাকে ভালো বলেন, কারণ এতে সব মত একই জায়গায় মেলে: সম্পদ দিয়ে বা জিনিসের ব্যবহার দিয়ে সাহায্য না করা। তাবারীর যুক্তি হলো, আল্লাহ তাদের এ আটকে রাখার কথা বলেছেন কোনো কিছু আলাদা না করে। তাই তারা দুটোই আটকায়: মানুষ পরস্পরকে যা ধার দেয়, আর অভাবীদের জন্য আল্লাহ যে হক ফরয করেছেন। সা'দী শব্দটাকে পড়েন সবচেয়ে ছোট অর্থে: বাটি, বালতি, কুড়াল। মাআরিফুল কুরআন, ১০৭:১-এর প্রবন্ধে যেমন এসেছে, একে যাকাত ধরে। মতভেদটা মতভেদ হিসেবেই থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "No Name to Pin on Another",
          "bn": "কারও দিকে আঙুল তোলার আয়াত নয়"
        },
        "p": [
          {
            "en": "Read together, the three traits make one portrait, and the commentators handle it with care. Al-Qurtubi reports that 'Ikrima was asked whether a person who withholds some household item earns the woe. No, he said: it is for whoever combines all three, leaving the prayer, showing off and stinginess with al-ma'un. Al-Qurtubi judges that the passage fits the hypocrites best, that all three are unlikely in a true Muslim, and that one in whom some are found takes a part of the rebuke.",
            "bn": "তিনটি বৈশিষ্ট্য একসঙ্গে পড়লে একটা পূর্ণ ছবি দাঁড়ায়, আর তাফসীরকারেরা ছবিটা সামলান সাবধানে। কুরতুবী জানান, ইকরিমাকে জিজ্ঞেস করা হয়েছিল: ঘরের কোনো জিনিস কেউ ধার না দিলে কি সে এই দুর্ভোগের ভাগীদার? তিনি বললেন, না। দুর্ভোগ তার জন্য, যার মধ্যে তিনটিই এক হয়েছে: নামায ছেড়ে দেওয়া, লোক দেখানো, আর মাউন নিয়ে কৃপণতা। কুরতুবীর নিজের মত, অংশটি মুনাফিকদের সঙ্গেই বেশি মেলে। খাঁটি মুসলিমের মধ্যে তিনটি একসঙ্গে পাওয়া কঠিন। আর যার মধ্যে কিছু পাওয়া যায়, তিরস্কারের একটা অংশ তার ভাগেও পড়ে।"
          },
          {
            "en": "This needs saying plainly. The verse describes what the text describes: a kind of prayer, and the people the commentators read as hypocrites. It licenses nothing against any living person or community. No one may name another person as one of those who pray who are condemned here, or read a neighbour's heart from how quickly or how late he prays. The verse hands that judgement to no reader.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা করে ঠিক ততটুকুই, যতটুকু পাঠে আছে: এক ধরনের নামায, আর সেই লোকেরা, যাদের তাফসীরকারেরা মুনাফিক হিসেবে পড়েছেন। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। এখানে যে নামাযিদের নিন্দা করা হয়েছে, অন্য কাউকে তাদের একজন বলে চিহ্নিত করার অধিকার কারও নেই। কে কত তাড়াতাড়ি বা কত দেরিতে নামায পড়ে, তা দেখে প্রতিবেশীর অন্তর পড়ে ফেলার অধিকারও নেই। সে বিচারের ভার এ আয়াত কোনো পাঠকের হাতে তুলে দেয়নি।"
          },
          {
            "en": "What it hands over is a question, answerable only from within: whether my prayer slips past its time because something else matters more, whether it would look the same unwatched, and whether it ever reaches the bucket and the pot. As-Sa'di closes the surah by naming what it urges: honouring the orphan and the poor, guarding the prayer, sincerity in every deed, and giving the small things. The remedy is short.",
            "bn": "আয়াত যা তুলে দেয় তা একটা প্রশ্ন, যার উত্তর কেবল ভেতর থেকেই দেওয়া যায়। অন্য কিছু বেশি জরুরি মনে হয় বলে কি আমার নামায ওয়াক্ত পেরিয়ে যায়? কেউ না দেখলেও কি নামাযটা একই রকম হতো? আর সে নামায কি কখনো বালতি আর হাঁড়ি পর্যন্ত পৌঁছায়? সা'দী সূরাটি শেষ করেন এর আহ্বানগুলোর নাম দিয়ে: ইয়াতীম ও মিসকীনের সম্মান, নামাযের হেফাজত, প্রতিটি আমলে ইখলাস, আর ছোটখাটো জিনিস দিয়ে দেওয়া। প্রতিকারের তালিকা ছোট।"
          }
        ]
      }
    ]
  }
});
