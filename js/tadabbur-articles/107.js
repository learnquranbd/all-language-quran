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
  }
});
