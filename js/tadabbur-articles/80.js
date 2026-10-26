/**
 * Tadabbur long-form articles — surah 80.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "80:3": {
    "sections": [
      {
        "h": {
          "en": "A Question Ending in Perhaps",
          "bn": "যে প্রশ্ন থামে 'হয়তো'-তে"
        },
        "p": [
          {
            "en": "Wa ma yudrika la'allahu yazzakka: and what would make you know? Perhaps he would grow pure. In the Arabic the verse is four words: wa ma, and what; yudrika, makes you know; la'allahu, perhaps he; and yazzakka, he purifies himself. The two verses before it tell of the frowning in the third person, and they name the newcomer only as al-a'ma, the blind man. Here the speech turns to the second person, in the -ka of yudrika. As-Sa'di makes the pronoun in la'allahu explicit: that is, the blind man.",
            "bn": "ওয়া মা ইউদরীকা লা'আল্লাহু ইয়াযযাক্কা: আর কিসে তোমাকে জানাবে? হয়তো সে পরিশুদ্ধ হত। আরবিতে আয়াতটি চারটি শব্দের। ওয়া মা মানে আর কী। ইউদরীকা মানে তোমাকে জানায়। লা'আল্লাহু মানে হয়তো সে। ইয়াযযাক্কা মানে সে নিজেকে পরিশুদ্ধ করে। আগের দুই আয়াত যিনি ভ্রূকুঞ্চিত করেছিলেন তাঁর কথা বলেছে 'সে' বলে, আর আগন্তুককে চিনিয়েছে শুধু আল-আ'মা, অন্ধ লোকটি বলে। এ আয়াতে এসে কথা ঘুরে যায় সরাসরি 'তুমি'-তে, ইউদরীকা শব্দের শেষের -কা অংশে। লা'আল্লাহু-র সর্বনাম কার দিকে, সা'দী তা খুলে বলেন: অর্থাৎ অন্ধ লোকটি।"
          },
          {
            "en": "At-Tabari spells the address out in full. Allah, exalted be His mention, says to His Prophet Muhammad ﷺ: and what makes you know, O Muhammad, perhaps this blind man at whom you frowned would purify himself. The English translation in this app brackets the same vocative, [O Muhammad]. Al-Muyassar opens wa ma yudrika into a fuller question: and what thing makes you aware of the truth of his matter? Ibn Kathir's abridged English renders it, and how can you know. All three keep the verse's own form, a question rather than a statement.",
            "bn": "তাবারী সম্বোধনটা পুরো খুলে লেখেন। আল্লাহ, যাঁর জিকির সুমহান, তাঁর নবী মুহাম্মাদ ﷺ-কে বলছেন: হে মুহাম্মাদ, কিসে তোমাকে জানাবে, যে অন্ধের সামনে তুমি ভ্রূকুঞ্চিত করলে, হয়তো সে নিজেকে পরিশুদ্ধ করত। এই অ্যাপের ইংরেজি অনুবাদও বন্ধনীতে একই সম্বোধন রেখেছে, [হে মুহাম্মাদ]। মুয়াসসার ওয়া মা ইউদরীকা-কে আরেকটু খুলে প্রশ্ন বানায়: কোন জিনিস তোমাকে তার আসল অবস্থা জানিয়ে দেয়? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ লেখে: তুমি কীভাবে জানবে? তিনটিই আয়াতের নিজস্ব রূপ ধরে রাখে: এটা প্রশ্ন, কোনো ঘোষণা নয়।"
          },
          {
            "en": "The translators render la'alla as perhaps (the English on this page), might (Ibn Kathir's abridged English) and may be (Ma'arif al-Qur'an). A reader may ask whose hope this perhaps voices, the speaker's or the listener's. None of the eight commentaries consulted for this verse takes up that question here. At-Tabari and al-Muyassar simply carry la'alla into their paraphrase unchanged, and this article leaves the question where they leave it. As-Sa'di reads the verse instead for its purpose: then He mentioned the benefit of turning towards him.",
            "bn": "লা'আল্লা শব্দটি অনুবাদকেরা ধরেছেন নানাভাবে। এ পাতার ইংরেজিতে perhaps, ইবন কাসীরের সংক্ষিপ্ত ইংরেজিতে might, আর মাআরিফুল কুরআনে may be। পাঠকের মনে প্রশ্ন জাগতে পারে, এই 'হয়তো' কার আশা প্রকাশ করছে, যিনি বলছেন তাঁর, নাকি যাঁকে বলা হচ্ছে তাঁর। এ আয়াতের জন্য আনা আটটি তাফসীরের কোনোটিই এখানে সে প্রশ্ন তোলে না। তাবারী ও মুয়াসসার লা'আল্লা শব্দটি অবিকল নিজেদের ব্যাখ্যায় বসিয়ে দেন। এ লেখাও প্রশ্নটা সেখানেই রেখে দিচ্ছে, যেখানে তাঁরা রেখেছেন। সা'দী বরং আয়াতটি পড়েন এর উদ্দেশ্যের দিক থেকে: এরপর তিনি তার দিকে মনোযোগ দেওয়ার উপকারিতা উল্লেখ করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Purity Lies",
          "bn": "পবিত্রতা কোথায় জন্মায়"
        },
        "p": [
          {
            "en": "Most of the commentators consulted read yazzakka as purification, though they place it in different parts of a person. At-Tabari glosses it yatatahharu min dhunubihi: he purifies himself of his sins. Ibn Kathir, in the Arabic, says purification and purity would come to him in his soul, and the abridged English gives the same: he may attain purification and cleanliness in his soul. For these two the word points inward, to a self made clean, and the blind man is its subject.",
            "bn": "যে তাফসীরগুলো আনা হয়েছে, তার বেশিরভাগই ইয়াযযাক্কা-কে পরিশুদ্ধি অর্থে পড়ে। তবে পরিশুদ্ধিটা মানুষের কোন জায়গায় ঘটবে, সেখানে তাঁদের কথায় ভিন্নতা আছে। তাবারীর ব্যাখ্যা: ইয়াতাতাহহারু মিন যুনূবিহি, সে নিজের গুনাহ থেকে পাক হত। ইবন কাসীর আরবিতে বলেন, তার অন্তরে পরিশুদ্ধি ও পবিত্রতা অর্জিত হত। সংক্ষিপ্ত ইংরেজি সংস্করণেও একই কথা: সে নিজের আত্মায় পবিত্রতা ও পরিচ্ছন্নতা লাভ করত। এ দুজনের কাছে শব্দটা ইশারা করে ভেতরের দিকে, পরিচ্ছন্ন হয়ে ওঠা এক অন্তরের দিকে। আর সেই অন্তর অন্ধ লোকটিরই।"
          },
          {
            "en": "As-Sa'di widens the word to character: he would purify himself of base traits and take on beautiful traits, a leaving and an acquiring. Al-Baghawi names the means: he would be purified of sins through righteous deeds and through what he learns from you. Al-Muyassar names another: by his question his soul would grow pure and be cleansed. Read together, the three tie the purification to deeds, to learning and to asking, and two of them tie it to the meeting itself, to what passes between the questioner and the person he came to.",
            "bn": "সা'দী শব্দটিকে চরিত্র পর্যন্ত টেনে নেন: সে নিজেকে নিচু স্বভাব থেকে মুক্ত করত আর সুন্দর স্বভাবে সাজাত। একদিকে ছাড়া, অন্যদিকে অর্জন। বাগাভী বলেন কী দিয়ে এ পরিশুদ্ধি আসবে: নেক আমলের মাধ্যমে, আর তোমার কাছ থেকে সে যা শিখবে তার মাধ্যমে সে গুনাহ থেকে পাক হত। মুয়াসসার আরেকটি পথ দেখায়: তার প্রশ্নের মাধ্যমেই তার অন্তর পরিশুদ্ধ ও পবিত্র হত। তিনজনকে একসঙ্গে পড়লে দেখা যায়, পরিশুদ্ধি বাঁধা পড়েছে আমল, শেখা আর জিজ্ঞাসার সঙ্গে। তাঁদের দুজন একে বেঁধেছেন সেই সাক্ষাতের সঙ্গেও, প্রশ্নকারী আর যাঁর কাছে সে এসেছিল তাঁদের মধ্যে যা ঘটে তার সঙ্গে।"
          },
          {
            "en": "One early reading points elsewhere. At-Tabari reports it with his chain: Yunus told me, Ibn Wahb informed us, Ibn Zayd said of la'allahu yazzakka: yuslim, he would accept Islam. Al-Baghawi carries the same gloss from Ibn Zayd. Yet Ibn Kathir's abridged English describes Ibn Umm Maktum (RA) as one of those who had accepted Islam in its earliest days, and Ma'arif al-Qur'an calls him a genuine believer. The texts consulted here set these side by side without reconciling them, and this article keeps both without choosing.",
            "bn": "প্রথম যুগের একটি ব্যাখ্যা অবশ্য অন্য দিকে যায়। তাবারী সনদসহ তা বর্ণনা করেন: ইউনুস আমাকে বলেছেন, ইবন ওয়াহব আমাদের জানিয়েছেন, ইবন যায়দ লা'আল্লাহু ইয়াযযাক্কা সম্পর্কে বলেছেন: ইউসলিম, অর্থাৎ সে ইসলাম গ্রহণ করত। বাগাভীও ইবন যায়দ থেকে একই ব্যাখ্যা আনেন। অথচ ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ইবনে উম্মে মাকতুম (রাঃ)-কে বলছে একেবারে শুরুর দিকে ইসলাম গ্রহণকারীদের একজন। মাআরিফুল কুরআনও তাঁকে বলে খাঁটি মুমিন। আনা তাফসীরগুলো দুটো কথা পাশাপাশি রাখে, মেলানোর চেষ্টা করে না। এ লেখাও কোনোটি বেছে না নিয়ে দুটোই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Scene as Reported",
          "bn": "বর্ণনায় যে দৃশ্য আসে"
        },
        "p": [
          {
            "en": "Verses 80:1 and 80:2 are not this page's subject, but the commentators read 80:3 against the scene they describe, so it needs telling as they tell it. Ibn Kathir's abridged English introduces it with the words: more than one of the scholars of tafsir mentioned. It names none of them and gives no chain. In that account, the Messenger of Allah ﷺ was one day addressing one of the great leaders of Quraysh, hoping that he would accept Islam, when Ibn Umm Maktum (RA), one of the earliest Muslims, came and began asking him about something, urgently beseeching him.",
            "bn": "৮০:১ ও ৮০:২ আয়াত এ পাতার বিষয় নয়। তবু তাফসীরকারেরা ৮০:৩ পড়েন সেই আয়াতগুলোর দৃশ্যের আলোয়, তাই তাঁরা যেভাবে বলেন সেভাবে দৃশ্যটা বলা দরকার। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ এর শুরুতে বলে: একাধিক তাফসীরবিদ উল্লেখ করেছেন। কারও নাম সেখানে নেই, কোনো সনদও নেই। সে বর্ণনায় আছে, একদিন রাসূল ﷺ কুরায়শের এক বড় নেতার সঙ্গে কথা বলছিলেন, এই আশায় যে সে ইসলাম গ্রহণ করবে। এমন সময় ইবনে উম্মে মাকতুম (রাঃ) এলেন। তিনি ছিলেন একেবারে প্রথম দিকের মুসলিমদের একজন। তিনি কোনো একটা বিষয়ে রাসূল ﷺ-কে জিজ্ঞেস করতে লাগলেন, বারবার মিনতি করে।"
          },
          {
            "en": "The account goes on: the Prophet ﷺ hoped the man would be guided, so he asked Ibn Umm Maktum to wait a moment while he finished the conversation; he frowned in his face and turned from him to face the other man, and Allah revealed the opening verses, this verse among them. That is the whole of the setting in the text consulted for this verse. Anything beyond it, such as the name of the leader or who else was present, is not in that text, and so nothing of the kind is added here from elsewhere.",
            "bn": "বর্ণনাটি এগোয় এভাবে: নবী ﷺ আশা করছিলেন লোকটি হিদায়াত পাবে। তাই কথা শেষ করা পর্যন্ত তিনি ইবনে উম্মে মাকতুমকে একটু অপেক্ষা করতে বললেন। তিনি তাঁর সামনে ভ্রূকুঞ্চিত করলেন এবং তাঁর দিক থেকে ফিরে অন্য লোকটির দিকে মুখ করলেন। তখন আল্লাহ সূরার শুরুর আয়াতগুলো নাজিল করলেন, এ আয়াতটিও তার মধ্যে। এ আয়াতের জন্য আনা লেখায় প্রেক্ষাপট বলতে এটুকুই। এর বাইরের কিছু, যেমন সেই নেতার নাম কিংবা আর কে কে উপস্থিত ছিলেন, সে লেখায় নেই। তাই অন্য কোথাও থেকে এনে তেমন কিছু এখানে জোড়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Aishah’s Report in Tirmidhi",
          "bn": "তিরমিযীতে আয়েশা (রাঃ)-এর বর্ণনা"
        },
        "p": [
          {
            "en": "At-Tirmidhi records the report with a chain to Aishah (RA), as Jami' at-Tirmidhi 3331. The article on 80:7 quotes his wording whole, so it is only summarised here. Aishah says the opening of the surah was revealed about Ibn Umm Maktum the blind man, who came to the Messenger of Allah ﷺ asking to be guided while a revered man from the idolaters was with him, and that the Messenger of Allah ﷺ turned from the blind man to face the other. The summary is not a substitute for the wording; for that, see 80:7.",
            "bn": "তিরমিযী বর্ণনাটি এনেছেন আয়েশা (রাঃ) পর্যন্ত সনদসহ, জামে তিরমিযী ৩৩৩১ হিসেবে। তাঁর পুরো শব্দাবলি ৮০:৭ আয়াতের লেখায় উদ্ধৃত হয়েছে, তাই এখানে শুধু সারসংক্ষেপ। আয়েশা (রাঃ) বলেন, সূরার শুরুর অংশ নাজিল হয়েছিল অন্ধ ইবনে উম্মে মাকতুম সম্পর্কে। তিনি রাসূলুল্লাহ ﷺ-এর কাছে এসে পথ দেখাতে বলছিলেন, তখন মুশরিকদের এক গণ্যমান্য লোক তাঁর কাছে ছিল, আর রাসূলুল্লাহ ﷺ অন্ধ লোকটির দিক থেকে মুখ ফিরিয়ে অন্যজনের দিকে মনোযোগ দিলেন। সারসংক্ষেপ মূল শব্দের বিকল্প নয়; মূল শব্দের জন্য দেখুন ৮০:৭।"
          },
          {
            "en": "At-Tirmidhi grades it hasan gharib, and adds that some narrated it from Hisham ibn Urwa from his father, saying only that 'Abasa was revealed about Ibn Umm Maktum, without mentioning Aishah. Ibn Kathir's abridged English adds that Abu Ya'la and Ibn Jarir also recorded it from her. The report concerns the surah's opening as a whole; 80:3 belongs to it because the verse continues the same address. One word in it bears on this page: arshidni, guide me, is what the blind man came asking for.",
            "bn": "তিরমিযী হাদিসটিকে হাসান গারীব বলেছেন। সঙ্গে জানিয়েছেন, কেউ কেউ এটি হিশাম ইবন উরওয়া থেকে তাঁর পিতার সূত্রে বর্ণনা করেছেন, শুধু এটুকু বলে যে আবাসা নাজিল হয়েছিল ইবনে উম্মে মাকতুম সম্পর্কে। সেখানে আয়েশা (রাঃ)-এর উল্লেখ নেই। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ জানায়, আবু ইয়া'লা ও ইবন জারীরও তাঁর থেকে বর্ণনাটি এনেছেন। বর্ণনাটি পুরো সূরার শুরুর অংশ নিয়ে। ৮০:৩ তারই অংশ, কারণ আয়াতটি একই সম্বোধন চালিয়ে যায়। এ পাতার সঙ্গে এর একটি শব্দ সরাসরি জড়িত: আরশিদনী, আমাকে পথ দেখান। অন্ধ লোকটি এটুকুই চাইতে এসেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Commentators' Own Terms",
          "bn": "তাফসীরকারদের নিজেদের ভাষা"
        },
        "p": [
          {
            "en": "The commentators also name what kind of verse this is, and their words differ. Al-Qurtubi files it under 'itab, admonition, and gives its counterparts: 6:52, do not drive away those who call upon their Lord morning and evening, and 18:28, do not let your eyes pass beyond them, desiring the adornment of worldly life. Ibn Kathir's abridged English heads the passage with the words: the Prophet being reprimanded because he frowned at a weak man. These are the commentators' own terms, and they are reported here as theirs.",
            "bn": "আয়াতটি কোন ধরনের, তাফসীরকারেরা তারও নাম দেন, আর তাঁদের শব্দ এক নয়। কুরতুবী একে রাখেন ইতাব, অর্থাৎ ভর্ৎসনার ঘরে। এর জোড়া হিসেবে তিনি আনেন ৬:৫২: যারা সকাল-সন্ধ্যা তাদের রবকে ডাকে, তাদের তাড়িয়ে দিয়ো না। আর ১৮:২৮: দুনিয়ার জীবনের চাকচিক্য চেয়ে তাদের থেকে তোমার দৃষ্টি সরিয়ে নিয়ো না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ অংশটির শিরোনাম দিয়েছে এভাবে: এক দুর্বল মানুষের সামনে ভ্রূকুঞ্চিত করায় নবীকে তিরস্কার। এগুলো তাফসীরকারদের নিজেদের শব্দ, এখানে তাঁদের কথা হিসেবেই উদ্ধৃত।"
          },
          {
            "en": "Others frame the same passage as instruction. Ibn Kathir, after the verses, draws out a command: Allah commands His Messenger not to single anyone out with the warning, but to warn equally the noble and the weak, the poor and the rich, the master and the slave, men and women, young and old; then Allah guides whomever He chooses. Ma'arif al-Qur'an titles its discussion an important Qur'anic principle of teaching and preaching, and reads the verses as settling which of two duties comes first.",
            "bn": "অনেকে একই অংশকে দেখেন শিক্ষা হিসেবে। ইবন কাসীর আয়াতগুলোর পর একটি নির্দেশ বের করে আনেন: আল্লাহ তাঁর রাসূলকে আদেশ দিচ্ছেন, তিনি যেন সতর্ক করার জন্য কাউকে বেছে আলাদা না করেন। অভিজাত ও দুর্বল, গরিব ও ধনী, মনিব ও দাস, নারী ও পুরুষ, তরুণ ও বৃদ্ধ, সবাইকে যেন সমানভাবে সতর্ক করেন। এরপর আল্লাহ যাকে চান হিদায়াত দেন। মাআরিফুল কুরআন তার আলোচনার শিরোনাম দিয়েছে দাওয়াত ও শিক্ষাদানের এক গুরুত্বপূর্ণ কুরআনি মূলনীতি। তার পাঠে এ আয়াতগুলো ঠিক করে দেয়, দুটি দায়িত্বের কোনটি আগে।"
          },
          {
            "en": "This article also looked in the texts consulted for two further framings: that the address concerns someone other than the Prophet ﷺ, and that it marks only the leaving of what was better. Neither appears in the eight commentaries consulted for this verse, so neither is named or weighed here. Nor does the article add a verdict of its own on his standing. The verse is worded as a question, and the commentators' terms are given as they gave them. What stays in view is the question's subject: a blind man's chance to grow pure.",
            "bn": "আনা লেখাগুলোর মধ্যে এ লেখা আরও দুটি ব্যাখ্যা খুঁজেছে। একটি হলো, সম্বোধনটা নবী ﷺ ছাড়া অন্য কারও উদ্দেশে। আরেকটি হলো, এখানে শুধু উত্তমটা ছেড়ে দেওয়ার কথা বলা হয়েছে। এ আয়াতের জন্য আনা আটটি তাফসীরের কোনোটিতে এর কোনোটি নেই। তাই এখানে কোনোটির নাম নেওয়া বা বিচার করা হলো না। তাঁর মর্যাদা নিয়ে এ লেখা নিজে থেকে কোনো রায়ও দিচ্ছে না। আয়াতটি প্রশ্নের আকারে বলা, আর তাফসীরকারদের শব্দগুলো তাঁরা যেভাবে বলেছেন সেভাবেই দেওয়া হলো। চোখের সামনে থাকে প্রশ্নের বিষয়টিই: এক অন্ধ মানুষের পরিশুদ্ধ হয়ে ওঠার সম্ভাবনা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Seeker Comes First",
          "bn": "সন্ধানীর হক আগে"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an reads 80:3 with a bracket of its own: may be, if you had attended him properly, he would have attained purity. Its reason lies in the questioner himself. Because Ibn Umm Maktum (RA) was a genuine believer, it says, any advice given to him would have benefited him and served to purify him; he sought enlightenment, and its benefit was certain. Ma'arif takes yazzakka as the stage of the righteous, who cleanse their inner and outer selves, and pairs it with a second stage in the next verse, which has its own page.",
            "bn": "মাআরিফুল কুরআন ৮০:৩ পড়ে নিজের একটি বন্ধনী জুড়ে: তুমি যদি তার দিকে যথাযথ মনোযোগ দিতে, হয়তো সে পবিত্রতা লাভ করত। এর কারণ সে খুঁজে পায় প্রশ্নকারীর নিজের মধ্যেই। তার ভাষায়, ইবনে উম্মে মাকতুম (রাঃ) খাঁটি মুমিন ছিলেন, তাই তাঁকে দেওয়া যেকোনো উপদেশ তাঁর উপকারে আসত এবং তাঁকে পরিশুদ্ধ করত। তিনি আলো খুঁজছিলেন, আর তার উপকার ছিল নিশ্চিত। মাআরিফ ইয়াযযাক্কা-কে ধরে নেককারদের স্তর হিসেবে, যারা ভেতর-বাহির দুটোই পরিচ্ছন্ন করে। এর সঙ্গে সে জোড়ে পরের আয়াতের দ্বিতীয় একটি স্তর। সে আয়াতের আলোচনা আলাদা পাতায়।"
          },
          {
            "en": "From this Ma'arif draws a principle. The Prophet ﷺ, it says, faced two requirements at once: to teach a Muslim and encourage him towards perfection, and to give guidance to non-Muslims. The principle it finds here makes the first take priority, so that it is improper to delay educating Muslims for the sake of the second. Ma'arif addresses this to teachers, preachers and reformers, who are to keep these guidelines in mind. The principle is Ma'arif's reading and is given as its own; the other commentaries consulted here do not state it in these words.",
            "bn": "এখান থেকে মাআরিফ একটি মূলনীতি বের করে। তার কথায়, নবী ﷺ-এর সামনে একই সময়ে দুটি দায়িত্ব ছিল। একটি হলো একজন মুসলিমকে শেখানো এবং তাঁকে পূর্ণতার দিকে উৎসাহ দেওয়া। অন্যটি অমুসলিমদের হিদায়াতের পথ দেখানো। মাআরিফের মতে এখানে যে মূলনীতি স্থির হয়, তাতে প্রথমটি অগ্রাধিকার পায়। দ্বিতীয়টির জন্য মুসলিমদের শিক্ষা পিছিয়ে দেওয়া ঠিক নয়। মাআরিফ কথাটা বলে শিক্ষক, দাঈ ও সংস্কারকদের উদ্দেশে, যেন তাঁরা এ নির্দেশনা মনে রাখেন। মূলনীতিটি মাআরিফের নিজের পাঠ, তার কথা হিসেবেই দেওয়া হলো। এখানে আনা অন্য তাফসীরগুলো একে এই ভাষায় বলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Growth No One Can See",
          "bn": "যে বেড়ে ওঠা চোখে পড়ে না"
        },
        "p": [
          {
            "en": "Every gloss of yazzakka gathered here describes something that happens inside a person: sins washed away, base traits exchanged for beautiful ones, a soul made clean. None of it can be seen from across a room. The verse's question, what would make you know, stands in front of exactly that kind of change. For the reader, the lesson is humility about other people's insides. We judge by what shows: dress, speech, standing, ability. The growth the verse speaks of does not show until it has happened, and sometimes not even then.",
            "bn": "এখানে ইয়াযযাক্কা-র যত ব্যাখ্যা জড়ো হয়েছে, সবগুলোই মানুষের ভেতরে ঘটা কোনো কিছুর কথা বলে। গুনাহ ধুয়ে যাওয়া, নিচু স্বভাবের জায়গায় সুন্দর স্বভাব আসা, অন্তর পরিচ্ছন্ন হওয়া। ঘরের এক কোণ থেকে এর কিছুই দেখা যায় না। আয়াতের প্রশ্ন, কিসে তোমাকে জানাবে, দাঁড়িয়ে আছে ঠিক এমন এক পরিবর্তনের সামনে। পাঠকের জন্য শিক্ষাটা হলো অন্যের ভেতর নিয়ে বিনয়। আমরা বিচার করি যা চোখে পড়ে তা দিয়ে: পোশাক, কথা, অবস্থান, যোগ্যতা। আয়াত যে বেড়ে ওঠার কথা বলে, তা ঘটে যাওয়ার আগে চোখে পড়ে না। কখনো কখনো ঘটার পরেও পড়ে না।"
          },
          {
            "en": "The verse before named the man by what he lacked; this verse names him by what he might gain. That order matters for anyone who teaches, leads or simply answers questions. A person can be described entirely by a limitation, the description can be true, and it can still miss the most important thing about them. In the reports gathered here, the blind man came with nothing to offer but a request. In al-Muyassar's reading, his question itself was the way his soul might grow pure.",
            "bn": "আগের আয়াত লোকটিকে চিনিয়েছে তার যা নেই তা দিয়ে। এ আয়াত চেনায় সে কী পেতে পারত তা দিয়ে। যিনি শেখান, নেতৃত্ব দেন, কিংবা শুধু মানুষের প্রশ্নের জবাব দেন, তাঁর জন্য এই ক্রমটা গুরুত্বপূর্ণ। কাউকে পুরোপুরি তার একটা সীমাবদ্ধতা দিয়ে বর্ণনা করা যায়। বর্ণনাটা সত্যও হতে পারে। তবু তার সবচেয়ে জরুরি দিকটাই তাতে বাদ পড়ে যেতে পারে। এখানে আনা বর্ণনাগুলোতে অন্ধ লোকটি একটা অনুরোধ ছাড়া আর কিছু নিয়ে আসেননি। মুয়াসসারের পাঠে তাঁর সেই প্রশ্নটাই ছিল অন্তর পরিশুদ্ধ হওয়ার পথ।"
          }
        ]
      },
      {
        "h": {
          "en": "Making Room for Perhaps",
          "bn": "'হয়তো'-র জন্য জায়গা রাখা"
        },
        "p": [
          {
            "en": "The word la'alla does not promise. It leaves the outcome open, and that openness is itself a kind of instruction for the reader. A parent whose child asks too many questions, a teacher with a slow student, an imam with a newcomer who interrupts: each is tempted to decide early who is worth the effort. The verse holds that decision back. Perhaps this person will grow. Nobody can rule in advance that he will not, and whoever looks least promising may be the person who is ready.",
            "bn": "লা'আল্লা শব্দটি কোনো প্রতিশ্রুতি দেয় না। ফল কী হবে, তা খোলা রাখে। আর এই খোলা রাখাটাই পাঠকের জন্য এক রকম শিক্ষা। যে বাবা-মায়ের সন্তান খুব বেশি প্রশ্ন করে, যে শিক্ষকের ছাত্র ধীরে বোঝে, যে ইমামের কাছে নতুন কেউ এসে কথার মাঝে ঢুকে পড়ে, তাঁদের প্রত্যেকের মনে তাড়াতাড়ি ঠিক করে ফেলার টান থাকে, কে খাটুনির যোগ্য। আয়াতটি সেই সিদ্ধান্ত থামিয়ে রাখে। হয়তো এই মানুষটিই বেড়ে উঠবে। সে উঠবে না, এমন রায় আগেভাগে কেউ দিতে পারে না। যাকে সবচেয়ে কম সম্ভাবনাময় মনে হয়, হয়তো সে-ই তৈরি হয়ে আছে।"
          },
          {
            "en": "In practice the verse asks for small things. Turn towards the person who asks, even at a poor moment. Answer the one who says guide me before the one you hope to impress. Measure your attention by sincerity, not by status. The next verse adds a second hope, and the verses after it draw the contrast out in full; each has its own page. This one leaves the reader with four words and a question worth turning on oneself before anyone else: what would make me know?",
            "bn": "বাস্তবে আয়াতটি ছোট ছোট কিছু জিনিস চায়। যে প্রশ্ন নিয়ে আসে, অসময়ে হলেও তার দিকে ফিরুন। যাকে মুগ্ধ করতে চান তার আগে জবাব দিন তাকে, যে বলছে আমাকে পথ দেখান। মনোযোগ মাপুন আন্তরিকতা দিয়ে, পদমর্যাদা দিয়ে নয়। পরের আয়াত দ্বিতীয় একটি আশার কথা যোগ করে, আর তার পরের আয়াতগুলো তুলনাটা পুরো খুলে দেখায়। প্রত্যেকটির আলোচনা আলাদা পাতায়। এ আয়াত পাঠকের হাতে রেখে যায় চারটি শব্দ আর এমন এক প্রশ্ন, যা অন্য কারও আগে নিজের দিকে ফেরানো ভালো: কিসে আমাকে জানাবে?"
          }
        ]
      }
    ]
  },
  "80:7": {
    "sections": [
      {
        "h": {
          "en": "Four Words, Turned to Him",
          "bn": "চার শব্দে তাঁকেই সম্বোধন"
        },
        "p": [
          {
            "en": "Wa-ma 'alayka alla yazzakka: and what is upon you if he does not purify himself? The verse is four Arabic words, and the second of them carries the address. 'Alayka, upon you, is singular and turns to the Prophet ﷺ himself, continuing the speech that opens the surah. At-Tabari and al-Baghawi both write the third word out as an la, that not, so the clause concerns an outcome that fails to happen: a man not becoming pure, and how much of that is the Prophet's to bear.",
            "bn": "ওয়ামা আলাইকা আল্লা ইয়াযযাক্কা: সে পরিশুদ্ধ না হলে তোমার উপর কী দায়? আয়াতে আরবি শব্দ মোট চারটি, আর সম্বোধন বহন করছে দ্বিতীয় শব্দটি। আলাইকা মানে তোমার উপর। শব্দটি একবচন, সরাসরি নবী ﷺ-কে লক্ষ্য করে বলা, সূরার শুরু থেকে যে কথা চলছে তারই ধারাবাহিকতায়। তাবারী ও বাগাভী দুজনেই তৃতীয় শব্দটিকে ভেঙে লেখেন আন লা, অর্থাৎ যেন না। ফলে বাক্যটি এমন এক পরিণতির কথা বলে যা ঘটছে না: একজন মানুষ পরিশুদ্ধ হচ্ছে না। আর প্রশ্ন হলো, তার কতটুকু ভার নবী ﷺ-এর।"
          },
          {
            "en": "The verse completes a pair that begins in 80:5 and 80:6: as for him who considered himself free of need, to him you gave your attention. The pronoun in yazzakka points back to that same man. What follows in 80:8 turns to someone else entirely, so this verse stands at a hinge between two people. What it settles is narrow and exact. It answers who must account for the purity of a person who has decided that he needs nothing, and it answers before the passage moves on.",
            "bn": "৮০:৫ ও ৮০:৬ আয়াতে যে জোড় শুরু হয়েছিল, এ আয়াত তা পূর্ণ করে: যে নিজেকে অমুখাপেক্ষী ভাবল, তার দিকেই তুমি মনোযোগ দিলে। ইয়াযযাক্কা ক্রিয়ার সর্বনাম ফিরে যায় সেই মানুষটির দিকেই। ৮০:৮ আয়াতে কথা ঘুরে যায় সম্পূর্ণ আরেকজনের দিকে। তাই এ আয়াত দুজন মানুষের মাঝখানে কবজার মতো দাঁড়িয়ে আছে। আয়াতটি যা মীমাংসা করে, তার পরিসর ছোট, কিন্তু কথাটা একেবারে নির্দিষ্ট। যে লোক ঠিক করে নিয়েছে তার কিছুই দরকার নেই, তার পরিশুদ্ধির হিসাব কে দেবে? পরের প্রসঙ্গে যাওয়ার আগেই আয়াতটি এ প্রশ্নের উত্তর দিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Question or Plain Denial",
          "bn": "প্রশ্ন, নাকি সরাসরি না"
        },
        "p": [
          {
            "en": "The commentators consulted here read the opening ma in two ways. At-Tabari takes it as a question: and what thing is upon you, he paraphrases, if he does not purify himself of his disbelief and so submit? The Muyassar, which comments on 80:5 to 80:7 together, asks the same question almost word for word, after describing a man who considered himself in no need of the Prophet's guidance while the Prophet ﷺ put himself in his way and listened closely to his words.",
            "bn": "এখানে যেসব তাফসীর দেখা হয়েছে, সেগুলো শুরুর মা শব্দটিকে দুইভাবে পড়ে। তাবারী একে প্রশ্ন ধরেন। তাঁর ব্যাখ্যায়: সে যদি নিজের কুফর থেকে পবিত্র হয়ে ইসলাম গ্রহণ না করে, তাতে তোমার উপর কী এমন দায়? মুয়াসসার ৮০:৫ থেকে ৮০:৭ পর্যন্ত একসঙ্গে ব্যাখ্যা করে, আর প্রায় হুবহু একই প্রশ্ন তোলে। তার আগে সে লোকটির বর্ণনা দেয় এভাবে: সে নিজেকে নবীর হেদায়েতের মুখাপেক্ষী মনে করেনি, অথচ নবী ﷺ তার দিকে এগিয়ে গেছেন আর মন দিয়ে তার কথা শুনেছেন।"
          },
          {
            "en": "Ibn Kathir reads the same words as a plain statement. In his Arabic: you are not held answerable for it if purification does not come about for him. The English abridgement puts it as you are not responsible for him if he does not attain purification. As-Sa'di agrees and spells out the consequence: it is not upon you that he does not purify himself, so if he does not, you will not be called to account for the evil he has done. The translations printed with this verse take the same line.",
            "bn": "ইবন কাসীর একই শব্দগুলোকে পড়েন সোজা বিবৃতি হিসেবে। তাঁর আরবি ভাষ্য: তার পরিশুদ্ধি না এলে এর জন্য তোমার কাছে কৈফিয়ত চাওয়া হবে না। ইংরেজি সংক্ষিপ্ত সংস্করণে কথাটা এমন: সে পরিশুদ্ধি অর্জন না করলে তার দায়িত্ব তোমার নয়। সা'দী এতে একমত, আর পরিণতিটাও খুলে বলেন: সে পরিশুদ্ধ না হলে সে দায় তোমার উপর নয়। কাজেই সে যদি পবিত্র না হয়, তার করা মন্দ কাজের হিসাব তোমার কাছে নেওয়া হবে না। এ আয়াতের সঙ্গে ছাপা অনুবাদগুলোও এই পথেই গেছে।"
          },
          {
            "en": "This is a difference of grammar more than of outcome. A question asking what is upon you, in this setting, expects the answer nothing; a statement that nothing is upon you gives that answer outright. Read either way, none of the commentators consulted for this verse places the man's refusal on the Prophet's account. What differs is the tone. The question invites the listener to reach the conclusion himself, while the statement hands it to him complete, and the translations printed here chose the statement.",
            "bn": "পার্থক্যটা যতটা ব্যাকরণের, ততটা ফলাফলের নয়। এ প্রেক্ষাপটে তোমার উপর কী দায়, এই প্রশ্নের প্রত্যাশিত উত্তর হলো: কিছুই না। আর তোমার উপর কোনো দায় নেই, এই বিবৃতি সে উত্তর সরাসরি দিয়ে দেয়। যেভাবেই পড়া হোক, এ আয়াতে দেখা কোনো তাফসীরকার লোকটির প্রত্যাখ্যানের দায় নবী ﷺ-এর ঘাড়ে চাপান না। তফাত শুধু সুরে। প্রশ্ন শ্রোতাকে নিজে সিদ্ধান্তে পৌঁছাতে ডাকে। বিবৃতি সিদ্ধান্তটা পুরোপুরি তার হাতে তুলে দেয়। এখানে ছাপা অনুবাদগুলো বেছে নিয়েছে বিবৃতির রূপ।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Beyond the Conveying",
          "bn": "পৌঁছে দেওয়ার বাইরে কিছু নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi frame the verse by what the Prophet ﷺ is charged with. Al-Qurtubi: if this disbeliever is not guided and does not believe, you are only a messenger, and upon you is nothing but the conveying. Al-Baghawi's gloss runs almost the same: he does not believe and is not guided, and upon you is only the conveying. Both turn the verse from a question about blame into a statement about office. The messenger's work is defined, and its edge is the delivery of the message.",
            "bn": "কুরতুবী ও বাগাভী আয়াতটিকে দেখেন নবী ﷺ-এর দায়িত্বের সীমা দিয়ে। কুরতুবী বলেন: এই কাফের যদি হেদায়েত না পায়, ঈমান না আনে, তবে তুমি তো কেবল একজন রাসূল, পৌঁছে দেওয়া ছাড়া তোমার উপর আর কিছু নেই। বাগাভীর ব্যাখ্যাও প্রায় একই: সে ঈমান আনে না, হেদায়েতও পায় না, আর তোমার উপর শুধু পৌঁছে দেওয়ার দায়িত্ব। দুজনেই আয়াতটিকে দোষের প্রশ্ন থেকে সরিয়ে দায়িত্বের বিবরণে নিয়ে যান। রাসূলের কাজের সীমা নির্ধারিত, আর সে সীমা হলো বার্তা পৌঁছে দেওয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an, commenting on 80:5 and 80:6 with this verse in view, says that those who turned away were being pursued in the hope that they would somehow become Muslims, 'while this is not your responsibility. If they do not embrace the faith, there will be no blame on you.' Its wording sits close to the bracketed English translation. Taken together, these readings describe a burden lifted rather than a fault found: what the listener does with the message is the listener's own affair.",
            "bn": "মাআরিফুল কুরআন ৮০:৫ ও ৮০:৬ আয়াতের আলোচনায়, এ আয়াতকে সামনে রেখে বলে: যারা মুখ ফিরিয়ে নিয়েছিল, তারা কোনোভাবে মুসলমান হয়ে যাবে, এই আশায় তাদের পেছনেই চেষ্টা চলছিল, 'অথচ এটা তোমার দায়িত্ব নয়। তারা ঈমান না আনলে তোমার উপর কোনো দোষ বর্তাবে না।' এ ভাষা ইংরেজি অনুবাদের বন্ধনীর কথার খুব কাছাকাছি। সব মিলিয়ে এই ব্যাখ্যাগুলো কোনো দোষ ধরে না, বরং একটা বোঝা নামিয়ে দেয়। বার্তা পেয়ে শ্রোতা কী করবে, সেটা শ্রোতার নিজের ব্যাপার।"
          }
        ]
      },
      {
        "h": {
          "en": "Pure of What, Exactly",
          "bn": "পবিত্রতা, কিসের থেকে"
        },
        "p": [
          {
            "en": "What would it mean for this man to yazzakka? The commentators fill the word in different ways. At-Tabari makes it purification from disbelief that issues in submission: that he purify himself of his disbelief and so become Muslim. The Muyassar keeps that sense. Al-Qurtubi and al-Baghawi render it as being guided and believing. Ibn Kathir's Arabic speaks simply of purification, zakah, coming about for him. In each, the purity in question is the purity of faith itself, the first step rather than a later refinement.",
            "bn": "এই লোকটির ইয়াযযাক্কা হওয়ার মানে কী? তাফসীরকারেরা শব্দটির অর্থ খুলে বলেন ভিন্ন ভিন্নভাবে। তাবারীর কাছে এ হলো কুফর থেকে পবিত্র হওয়া, যার ফল ইসলাম গ্রহণ: সে নিজের কুফর থেকে পাক হয়ে মুসলিম হবে। মুয়াসসারও এই অর্থ ধরে রাখে। কুরতুবী ও বাগাভী এর মানে করেন হেদায়েত পাওয়া আর ঈমান আনা। ইবন কাসীরের আরবি ভাষ্যে কথাটা সাদামাটা: তার জন্য পরিশুদ্ধি, যাকাত, অর্জিত হওয়া। সবগুলো ব্যাখ্যাতেই এখানে পবিত্রতা মানে ঈমানের পবিত্রতা। এটা প্রথম ধাপ, পরের কোনো সূক্ষ্ম পরিমার্জন নয়।"
          },
          {
            "en": "The same word, in the same form, closes 80:3, where it is said of the blind man who came, and closes this verse, where it is said of the man who turned away. It is held up twice, first as a hope and then as a refusal. The surah thereby places two people side by side under a single measure, and the measure is not wealth, rank or influence. It is whether a person is willing to be purified, and that is the scale on which the passage weighs the encounter.",
            "bn": "হুবহু একই শব্দ, একই রূপে, ৮০:৩ আয়াতের শেষে আছে, যেখানে কথাটা বলা হয়েছে সেই অন্ধ মানুষটির সম্পর্কে, যিনি এসেছিলেন। আবার এ আয়াতের শেষেও আছে, যেখানে কথাটা মুখ ফিরিয়ে নেওয়া লোকটির সম্পর্কে। শব্দটি দুবার সামনে আসে, প্রথমবার আশা হয়ে, পরেরবার প্রত্যাখ্যান হয়ে। এভাবে সূরাটি দুজন মানুষকে পাশাপাশি দাঁড় করায় একই মাপকাঠিতে। সে মাপকাঠি সম্পদ, পদমর্যাদা বা প্রভাব নয়। মাপকাঠি হলো, মানুষটি পরিশুদ্ধ হতে রাজি কি না। এই পাল্লাতেই আয়াতগুলো ঘটনাটিকে ওজন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man Who Needed Nothing",
          "bn": "যে ভাবত তার কিছুই লাগবে না"
        },
        "p": [
          {
            "en": "Who was he? The abridged English Ibn Kathir reports from more than one of the commentators that the Messenger of Allah ﷺ was speaking with one of the great leaders of Quraysh, hoping he would accept Islam, when Ibn Umm Maktum (RA), an early Muslim, came and began asking him about something, pressing his request. The text consulted does not name that leader, and this article does not supply a name from elsewhere. At-Tabari speaks of his disbelief; al-Qurtubi calls him this disbeliever.",
            "bn": "লোকটি কে ছিল? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একাধিক তাফসীরকারের সূত্রে জানায়: আল্লাহর রাসূল ﷺ কুরাইশের বড় নেতাদের একজনের সঙ্গে কথা বলছিলেন, আশা করছিলেন সে ইসলাম গ্রহণ করবে। এমন সময় এলেন ইবনে উম্মে মাকতুম (রাঃ), যিনি একেবারে শুরুর দিকের মুসলিম। তিনি কোনো একটা বিষয়ে প্রশ্ন করতে লাগলেন, বারবার অনুনয় করে। যে লেখা দেখা হয়েছে, তাতে সেই নেতার নাম নেই। এ প্রবন্ধও অন্য কোথাও থেকে নাম জুড়ে দিচ্ছে না। তাবারী তার কুফরের কথা বলেন, আর কুরতুবী তাকে বলেন এই কাফের।"
          },
          {
            "en": "The commentators also describe him by his stance rather than his name. The Muyassar: he considered himself in no need of your guidance. As-Sa'di: the wealthy man who thought himself self-sufficient, who neither asks nor seeks a ruling, because he has no desire for good. Ma'arif al-Qur'an speaks of those who turn away from you and your religion. In their readings the word istaghna in 80:5 gathers two things, worldly sufficiency and a felt lack of need for guidance, and the verse answers the second.",
            "bn": "তাফসীরকারেরা তাকে চেনান নাম দিয়ে নয়, তার মনোভাব দিয়ে। মুয়াসসার বলে: সে নিজেকে তোমার হেদায়েতের মুখাপেক্ষী মনে করেনি। সা'দী বলেন: সে ধনী, নিজেকে স্বয়ংসম্পূর্ণ ভাবে, কিছু জিজ্ঞেস করে না, কোনো বিধানও জানতে চায় না, কারণ কল্যাণের প্রতি তার কোনো আগ্রহ নেই। মাআরিফুল কুরআন বলে তাদের কথা, যারা তোমার থেকে আর তোমার দ্বীন থেকে মুখ ফিরিয়ে নেয়। তাঁদের ব্যাখ্যায় ৮০:৫ আয়াতের ইসতাগনা শব্দে দুটি জিনিস মিশে আছে: দুনিয়াবি সচ্ছলতা, আর হেদায়েতের কোনো প্রয়োজন বোধ না করা। আয়াতটি জবাব দেয় দ্বিতীয়টির।"
          },
          {
            "en": "This needs saying plainly. The verse speaks only of what it names: one man, at a single moment, who turned from guidance while it was being offered to him. It licenses nothing against any living person or community. It does not make wealth a mark of rejection, nor turn the rich, the powerful or the members of any tribe or people today into the man of 80:5. Whoever reads it that way has taken a verse about where attention belongs and made it a verdict the verse never gives.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। লেখায় যতটুকু আছে, আয়াত ততটুকুরই বর্ণনা দেয়: একজন মানুষ, এক নির্দিষ্ট মুহূর্তে, হেদায়েত যখন তার সামনে পেশ করা হচ্ছিল, তখন সে মুখ ফিরিয়ে নিয়েছিল। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো ছাড়পত্র দেয় না। ধনসম্পদকে প্রত্যাখ্যানের চিহ্ন বানায় না। আজকের ধনী, ক্ষমতাবান, কিংবা কোনো গোত্র বা জাতির মানুষকে ৮০:৫ আয়াতের সেই লোক বানিয়ে দেয় না। যে এভাবে পড়ে, সে মনোযোগ কোথায় দেওয়া উচিত সে বিষয়ের একটি আয়াতকে এমন রায়ে পরিণত করে, যে রায় আয়াত কখনো দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Aishah's Account, Graded",
          "bn": "আয়িশা (রাঃ)-এর বর্ণনা ও তার মান"
        },
        "p": [
          {
            "en": "At-Tirmidhi records, as hadith 3331, a narration from Aishah (RA): \"'He frowned and turned away' was revealed about Ibn Umm Maktum the blind man. He came to the Messenger of Allah saying: 'O Messenger of Allah! Guide me.' At that time, there was a revered man from the idolaters with the Messenger of Allah. So the Messenger of Allah turned away from him and faced the other man, saying: 'Do you think that there is something wrong with what I am saying?' He said: 'No.' So it was about that that it was revealed.\"",
            "bn": "তিরমিযী ৩৩৩১ নম্বরে আয়িশা (রাঃ)-এর এই বর্ণনা এনেছেন: \"'আবাসা ওয়া তাওয়াল্লা' নাজিল হয়েছিল অন্ধ ইবনে উম্মে মাকতুম সম্পর্কে। তিনি আল্লাহর রাসূলের কাছে এসে বলতে লাগলেন: 'হে আল্লাহর রাসূল! আমাকে পথ দেখান।' তখন আল্লাহর রাসূলের কাছে মুশরিকদের এক গণ্যমান্য ব্যক্তি ছিল। আল্লাহর রাসূল তাঁর দিক থেকে মুখ ফিরিয়ে অন্যজনের দিকে মনোযোগ দিচ্ছিলেন, আর বলছিলেন: 'আমি যা বলছি, তাতে কি কোনো সমস্যা দেখছ?' সে বলছিল: 'না।' এ বিষয়েই নাজিল হয়েছিল।\""
          },
          {
            "en": "At-Tirmidhi grades it hasan gharib. He adds that some narrated it from Hisham ibn Urwah from his father, saying that 'He frowned and turned away' was revealed about Ibn Umm Maktum, without mentioning Aishah. The narration concerns the opening of the surah and names no later verse, so it is not attached to this verse in particular. It also leaves the leader unnamed, calling him only a revered man from among the idolaters, which matches what the commentators consulted here gave.",
            "bn": "তিরমিযী একে হাসান গরীব বলেছেন। তিনি আরও জানান, কেউ কেউ হাদিসটি হিশাম ইবনে উরওয়া থেকে তাঁর পিতার সূত্রে বর্ণনা করেছেন। সেখানে বলা হয়েছে 'আবাসা ওয়া তাওয়াল্লা' নাজিল হয়েছে ইবনে উম্মে মাকতুম সম্পর্কে, কিন্তু আয়িশা (রাঃ)-এর নাম নেই। বর্ণনাটি সূরার শুরুর অংশ নিয়ে, পরের কোনো আয়াতের নাম তাতে নেই। তাই এটি বিশেষভাবে এ আয়াতের সঙ্গে যুক্ত নয়। সেই নেতার নামও এতে নেই, শুধু বলা হয়েছে মুশরিকদের এক গণ্যমান্য ব্যক্তি। এখানে দেখা তাফসীরগুলোর বক্তব্যের সঙ্গে এটি মিলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Certain Before the Supposed",
          "bn": "নিশ্চিত লাভ আগে, অনুমান পরে"
        },
        "p": [
          {
            "en": "As-Sa'di draws a rule from the passage. The benefit a seeker takes, he says, is the very purpose for which messengers are sent, preachers preach and reminders remind. Turning toward the man who came of his own accord, in need of it, is in his words the more fitting course and the required one. From this he takes what he calls a well-known principle: a known matter is not left for an imagined one, nor a benefit already secured for a benefit only supposed.",
            "bn": "সা'দী এ আয়াতগুলো থেকে একটি নীতি বের করেন। তাঁর মতে, জ্ঞানপ্রার্থী যে উপকার পায়, সেটাই রাসূল পাঠানোর, ওয়ায়েজদের ওয়াজের আর উপদেশদাতাদের উপদেশের আসল উদ্দেশ্য। যে মানুষ নিজে থেকে প্রয়োজন নিয়ে এসেছে, তার দিকে মনোযোগ দেওয়াই তাঁর ভাষায় বেশি মানানসই, এবং সেটাই করণীয়। এখান থেকে তিনি একটি প্রসিদ্ধ নীতির কথা বলেন: জানা বিষয় কাল্পনিক বিষয়ের জন্য ছাড়া যায় না, আর নিশ্চিত কল্যাণ ছাড়া যায় না অনুমিত কল্যাণের আশায়।"
          },
          {
            "en": "He closes with a practical instruction: attention should go to the seeker of knowledge who needs it and is eager for it, more than to others. Ibn Kathir, in the abridged English, draws a different rule from the same verses. Allah commands His Messenger not to single anyone out with the warning, but to warn equally the noble and the weak, the poor and the rich, the master and the slave, the men and the women, the young and the old; then Allah guides whomever He chooses to a straight path.",
            "bn": "শেষে তিনি একটি বাস্তব নির্দেশনা দেন: যে জ্ঞানপ্রার্থীর প্রয়োজন আছে আর আগ্রহও আছে, অন্যদের চেয়ে তার দিকে বেশি মনোযোগ দেওয়া উচিত। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একই আয়াতগুলো থেকে ভিন্ন একটি নিয়ম টানে। আল্লাহ তাঁর রাসূলকে আদেশ করছেন, সতর্কবাণীর জন্য কাউকে আলাদা করে বেছে নেবেন না। অভিজাত ও দুর্বল, গরিব ও ধনী, মনিব ও দাস, পুরুষ ও নারী, তরুণ ও বৃদ্ধ, সবাইকে সমানভাবে সতর্ক করবেন। তারপর আল্লাহ যাকে চান সরল পথে পরিচালিত করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an, on the surrounding verses, sets out a related principle for teachers and preachers. Faced at once with teaching a believer and guiding those outside the faith, it says, the first takes priority, and educating Muslims should not be delayed for the sake of the second. Ibn Kathir's wording stresses equality in the call; Ma'arif and as-Sa'di stress an order of attention. The texts do not set these against each other, but they place their weight differently, and both emphases are left standing here.",
            "bn": "আশেপাশের আয়াতগুলোর আলোচনায় মাআরিফুল কুরআন শিক্ষক ও দাঈদের জন্য কাছাকাছি একটি নীতি দেয়। একই সময়ে যদি একজন মুমিনকে শেখানো আর ঈমানের বাইরের মানুষকে পথ দেখানো, দুটো কাজ সামনে আসে, তবে প্রথমটি অগ্রাধিকার পাবে। দ্বিতীয়টির জন্য মুসলমানদের শিক্ষা পিছিয়ে দেওয়া ঠিক নয়। ইবন কাসীরের ভাষ্যে জোর দাওয়াতে সমতার উপর। মাআরিফ ও সা'দীর জোর মনোযোগের ক্রমের উপর। লেখাগুলো এ দুটিকে পরস্পরের বিরুদ্ধে দাঁড় করায় না, তবে ভার রাখে ভিন্ন জায়গায়। এখানে দুটো জোরই যেমন আছে তেমন রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Answerable for the Effort",
          "bn": "হিসাব চেষ্টার, ফলের নয়"
        },
        "p": [
          {
            "en": "A reader who carries no prophetic office still finds a line here worth keeping. Parents, teachers and friends who share what they believe to be good often carry the refusals of others as personal failures. The commentators consulted here locate the task of the Prophet ﷺ in conveying, and the hearer's response with the hearer. If that holds for the Messenger, it holds for anyone who passes the message on: answerable for how it is passed, and not for whether the heart receiving it opens.",
            "bn": "যাঁর কাঁধে নবুওয়াতের দায়িত্ব নেই, এমন পাঠকের জন্যও এখানে মনে রাখার মতো একটি সীমারেখা আছে। মা-বাবা, শিক্ষক, বন্ধু, যাঁরা ভালো মনে করে কিছু অন্যকে বলেন, তাঁরা প্রায়ই অন্যের প্রত্যাখ্যানকে নিজের ব্যর্থতা বলে বয়ে বেড়ান। এখানে দেখা তাফসীরগুলো নবী ﷺ-এর কাজ নির্ধারণ করে পৌঁছে দেওয়ায়, আর শ্রোতার সাড়া রাখে শ্রোতার কাছেই। রাসূলের বেলায় যদি এ কথা খাটে, তবে যে-ই বার্তাটি অন্যের কাছে নিয়ে যায়, তার বেলাতেও খাটে। সে কীভাবে পৌঁছে দিল, তার জবাব তাকে দিতে হবে। যার কাছে পৌঁছাল, তার অন্তর খুলল কি না, সে জবাব তার নয়।"
          },
          {
            "en": "The verse also corrects where effort goes. The man who needed nothing received attention he did not seek, while someone else, described in 80:8 and the verses after it, came seeking. The passage then turns, in 80:11 and 80:12, to say that these verses are a reminder, and whoever wills may take heed. The choice to take heed belongs to the hearer. The duty to offer the reminder to all, and to place it first where it is sought, belongs to whoever carries it.",
            "bn": "চেষ্টা কোথায় যাবে, আয়াতটি সেটাও ঠিক করে দেয়। যার কিছুই দরকার ছিল না, সে এমন মনোযোগ পেল যা সে চায়নি। অথচ আরেকজন, যার বর্ণনা ৮০:৮ ও তার পরের আয়াতগুলোতে, এসেছিল খুঁজতে খুঁজতে। এরপর ৮০:১১ ও ৮০:১২ আয়াতে কথা ঘুরে যায়: এ আয়াতগুলো উপদেশ, যার ইচ্ছা সে তা গ্রহণ করবে। উপদেশ গ্রহণ করার সিদ্ধান্ত শ্রোতার। আর সবার কাছে উপদেশ পৌঁছে দেওয়া, যেখানে তা চাওয়া হচ্ছে সেখানে আগে পৌঁছানো, এই দায়িত্ব যে বহন করে তার।"
          }
        ]
      }
    ]
  },
  "80:13": {
    "sections": [
      {
        "h": {
          "en": "Where the Reminder Rests",
          "bn": "উপদেশের ঠিকানা"
        },
        "p": [
          {
            "en": "Fi suhufin mukarramah: in honoured scrolls. The verse is three Arabic words, a preposition followed by a noun and its adjective, and it carries no verb of its own. It leans on what came just before. In 80:11 the surah declares, kalla, innaha tadhkirah: no, indeed it is a reminder. In 80:12 it adds, so whoever wills may remember it. Then this verse arrives and completes the thought. At-Tabari reads it exactly that way, joining the clauses into a single sentence: it is a reminder, in honoured scrolls, raised and purified.",
            "bn": "ফী সুহুফিম মুকাররামাহ: সম্মানিত সহীফাগুলোতে। আয়াতটি মাত্র তিনটি আরবি শব্দ। প্রথমে অব্যয়, তারপর বিশেষ্য আর তার বিশেষণ। নিজের কোনো ক্রিয়া নেই, তাই আগের কথার উপর ভর দিয়েই আয়াতটি দাঁড়ায়। ৮০:১১ আয়াতে সূরা ঘোষণা করে, কাল্লা, ইন্নাহা তাযকিরাহ: না, এ তো উপদেশ। ৮০:১২ আয়াতে যোগ করে, কাজেই যার ইচ্ছা সে তা স্মরণ করবে। তারপর এই আয়াত এসে কথাটা পূর্ণ করে। তাবারী ঠিক এভাবেই পড়েন, বাক্যগুলো জুড়ে দিয়ে একটিমাত্র বাক্যে: এ এক উপদেশ, সম্মানিত সহীফায়, যা সমুন্নত ও পবিত্র।"
          },
          {
            "en": "As-Sa'di names what the verse is doing. Having called the surah a reminder, Allah then mentioned its mahall, the place where it rests, together with its greatness and the raising of its worth. Al-Qurtubi and al-Baghawi open their comments with nearly the same words: then He told of its majesty, and al-Baghawi adds 'indahu, with Him. So the verse brings no new command. It moves the listener's eye from the message, which anyone may take or leave, to the place where that message is kept and the rank it holds there.",
            "bn": "আয়াতটি আসলে কী করছে, সা'দী তা নাম ধরে বলে দেন। সূরাকে উপদেশ বলার পর আল্লাহ উল্লেখ করলেন তার মাহাল্ল, অর্থাৎ সেটি কোথায় রাখা আছে। সেই সঙ্গে তার মহত্ত্ব আর তার উঁচু মর্যাদার কথাও বললেন। কুরতুবী আর বাগাভী প্রায় একই কথায় শুরু করেন: তারপর তিনি এর মহিমার খবর দিলেন। বাগাভী জুড়ে দেন ইনদাহু, অর্থাৎ তাঁর কাছে। তাই আয়াতটি নতুন কোনো আদেশ আনে না। বাণীটি যে কেউ নিতে পারে, ফেলেও রাখতে পারে। আয়াতটি শ্রোতার চোখ সেখান থেকে সরিয়ে নিয়ে যায় সেই জায়গার দিকে, যেখানে বাণীটি রাখা আছে, আর সেখানে তার যে মর্যাদা, তার দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "This Surah, or the Whole",
          "bn": "এই সূরা, নাকি পুরো কুরআন"
        },
        "p": [
          {
            "en": "What exactly is said to be in the honoured scrolls? Ibn Kathir answers in a compact line. It is this surah, or the admonition, and the two go together; indeed the whole Qur'an is in honoured scrolls. He offers two candidates for the pronoun, says they cannot be pulled apart, and then widens the frame to the entire Book. The Muyassar, explaining the run of verses from 80:9 to 80:16 as a group, speaks of hadha al-wahy, this revelation, and names it outright: it is the Qur'an, kept in scrolls of great standing.",
            "bn": "সম্মানিত সহীফাগুলোতে ঠিক কী আছে বলা হচ্ছে? ইবন কাসীর ছোট্ট এক বাক্যে উত্তর দেন। সেটা এই সূরা, অথবা এই উপদেশ, আর এ দুটি একে অন্যের সঙ্গে জড়ানো। আসলে পুরো কুরআনই সম্মানিত সহীফায় আছে। সর্বনামটি কার দিকে ফেরে, তার দুটি সম্ভাবনা তিনি দেখান, বলেন দুটিকে আলাদা করা যায় না, তারপর পরিসর বাড়িয়ে গোটা কিতাবকে ধরেন। মুয়াসসার ৮০:৯ থেকে ৮০:১৬ পর্যন্ত আয়াতগুলো একসঙ্গে ব্যাখ্যা করে। সেখানে সে বলে হাযাল ওয়াহয়ু, এই ওহি, আর সোজাসুজি তার নামও বলে দেয়: এ হলো কুরআন, যা রাখা আছে মহা মর্যাদার সহীফায়।"
          },
          {
            "en": "The Muyassar also shows how the passage turns to reach this point. In its paraphrase the verses before say: the matter is not as you did, O Messenger; this surah is an admonition for you and for everyone who wills to take admonition, so whoever wills remembers Allah and follows His revelation. The scene that prompted those words belongs to the opening of the surah. Here it is enough to notice that the reminder now said to rest in honoured scrolls is the same reminder that was addressed first to the Messenger ﷺ himself.",
            "bn": "এ পর্যন্ত পৌঁছাতে আলোচনাটা কীভাবে মোড় নেয়, মুয়াসসার সেটাও দেখায়। তার ভাষ্যে আগের আয়াতগুলোর কথা এমন: হে রাসূল, ব্যাপারটা তেমন নয় যেমন আপনি করলেন। এই সূরা আপনার জন্য উপদেশ, আর যে-ই উপদেশ নিতে চায় তার জন্যও। কাজেই যার ইচ্ছা সে আল্লাহকে স্মরণ করবে আর তাঁর ওহির অনুসরণ করবে। যে ঘটনা থেকে এ কথাগুলো এসেছে, তা সূরার শুরুর অংশের বিষয়। এখানে শুধু এটুকু লক্ষ করাই যথেষ্ট: যে উপদেশকে এখন সম্মানিত সহীফায় রাখা বলা হচ্ছে, সেটিই প্রথমে সম্বোধন করেছিল স্বয়ং রাসূল ﷺ-কে।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Sheets, Single Source",
          "bn": "বহু পাতা, উৎস অভিন্ন"
        },
        "p": [
          {
            "en": "Suhuf is the plural of sahifah, a sheet or page bearing writing, as al-Qurtubi notes before anything else. The plural is the first puzzle the commentators meet. If the scrolls are a single heavenly record, why speak of many sheets? Ma'arif al-Qur'an raises the question directly. It takes suhuf to mean al-lawh al-mahfuz, the Preserved Tablet, and openly grants that the Tablet is a single thing. Then, rather than drop the plural as a figure of speech, it gives two reasons why the plural still fits.",
            "bn": "সুহুফ শব্দটি সহীফার বহুবচন, অর্থাৎ লেখা আছে এমন পাতা। কুরতুবী সবার আগে এ কথাটাই বলে নেন। বহুবচনটাই ব্যাখ্যাকারদের সামনে প্রথম ধাঁধা। সহীফাগুলো যদি আসমানের একটিমাত্র লিপি হয়, তবে বহু পাতার কথা কেন? মাআরিফুল কুরআন প্রশ্নটা সরাসরি তোলে। তার মতে সুহুফ মানে আল-লাওহুল মাহফুজ, অর্থাৎ লাওহে মাহফুজ। লাওহে মাহফুজ যে একটিই, তা সে খোলাখুলি মেনেও নেয়। তারপর বহুবচনকে নিছক অলংকার বলে ছেড়ে না দিয়ে সে দুটি কারণ দেখায়, কেন বহুবচনই এখানে মানানসই।"
          },
          {
            "en": "The first reason: all the divine scriptures are written in the Tablet, so a single Tablet holds many books. The second: the angels copy their scriptures from it, so the many sheets are the copies drawn from the one source. Ma'arif sets these side by side, joined by or, and does not choose between them. Both keep the plural meaningful. Whichever is intended, the word suhuf already tells the reader that this verse is about writing: a reminder that is not only spoken aloud but also recorded.",
            "bn": "প্রথম কারণ: সব আসমানী কিতাব লাওহে মাহফুজে লেখা আছে, তাই একটিমাত্র ফলকেই বহু কিতাব ধরা আছে। দ্বিতীয় কারণ: ফেরেশতারা তাঁদের সহীফাগুলো সেখান থেকে নকল করেন, তাই বহু পাতা মানে একই উৎস থেকে তোলা অনেক অনুলিপি। মাআরিফুল কুরআন দুটিকে পাশাপাশি রাখে, মাঝে 'অথবা' দিয়ে, কোনোটিকে বেছে নেয় না। দুটিতেই বহুবচন অর্থবহ থাকে। যেটাই উদ্দেশ্য হোক, সুহুফ শব্দটি পাঠককে আগেই জানিয়ে দেয় যে এ আয়াত লেখার কথা বলছে। উপদেশটি শুধু মুখে বলা নয়, লিখেও রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Scrolls Are Meant",
          "bn": "কোন সহীফার কথা"
        },
        "p": [
          {
            "en": "On the identity of the scrolls, the commentaries consulted here give more than one answer. At-Tabari is direct: they are in al-lawh al-mahfuz, the Preserved Tablet, which is the raised and purified one with Allah. Al-Baghawi gives the same reading first, ya'ni al-lawh al-mahfuz, meaning the Preserved Tablet. Ma'arif al-Qur'an, as seen above, also takes suhuf as the Tablet. For these three, the honoured scrolls are not pages found on earth at all. They are the Tablet, the record that at-Tabari places with Allah.",
            "bn": "সহীফাগুলো আসলে কী, এ নিয়ে সংগৃহীত তাফসীরগুলো একটির বেশি উত্তর দেয়। তাবারী সোজাসুজি বলেন: এগুলো আল-লাওহুল মাহফুজে, আর সেটিই আল্লাহর কাছে সমুন্নত ও পবিত্র। বাগাভীও প্রথমে একই ব্যাখ্যা দেন: ইয়া'নী আল-লাওহুল মাহফুজ, অর্থাৎ লাওহে মাহফুজ। আগেই দেখা গেছে, মাআরিফুল কুরআনও সুহুফ বলতে লাওহে মাহফুজই বোঝে। এই তিনজনের কাছে সম্মানিত সহীফা পৃথিবীর কোনো পাতা নয়। এ হলো লাওহে মাহফুজ, যে লিপিকে তাবারী আল্লাহর কাছে রাখা বলে উল্লেখ করেন।"
          },
          {
            "en": "A second reading is reported by both al-Qurtubi and al-Baghawi, each introducing it with qila, it is said: the scrolls are the books of the prophets. Both point to the same evidence in Surah al-A'la: indeed this is in the former scriptures, the scriptures of Ibrahim (AS) and Musa (AS), at 87:18 and 87:19. Al-Baghawi names the surah and gives the verse numbers. On this view the honoured scrolls are the earlier revealed books, and the word suhuf in Surah 'Abasa echoes the same word used there.",
            "bn": "দ্বিতীয় একটি ব্যাখ্যা কুরতুবী ও বাগাভী দুজনেই উল্লেখ করেন, আর দুজনেই শুরু করেন কীলা দিয়ে, অর্থাৎ বলা হয়েছে: এ সহীফাগুলো নবীদের কিতাব। দুজনেই একই প্রমাণ দেখান সূরা আ'লা থেকে: নিশ্চয়ই এ কথা আছে আগের সহীফাগুলোতে, ইবরাহীম (আঃ) ও মূসা (আঃ)-এর সহীফায়, ৮৭:১৮ ও ৮৭:১৯ আয়াতে। বাগাভী সূরার নাম আর আয়াত নম্বরও দেন। এ মত অনুযায়ী সম্মানিত সহীফা মানে আগে নাজিল হওয়া কিতাবগুলো। সূরা আবাসার সুহুফ শব্দটি সেখানকার একই শব্দেরই প্রতিধ্বনি।"
          },
          {
            "en": "Ibn Kathir and the Muyassar take a third line. They do not name a heavenly location; they say the surah, or the Qur'an, is in honoured scrolls, and then describe those scrolls. The Muyassar, reading on into 80:15, places them in the hands of angel scribes, envoys between Allah and His creation, though that detail belongs to the verses ahead. None of the commentators consulted here argues against another's reading here, and this article does not choose among them. Each answer is reported as its author gives it.",
            "bn": "ইবন কাসীর ও মুয়াসসার তৃতীয় পথে চলেন। আসমানের কোনো নির্দিষ্ট স্থানের নাম তাঁরা বলেন না। তাঁরা বলেন, এই সূরা, কিংবা কুরআন, সম্মানিত সহীফায় আছে, তারপর সহীফাগুলোর গুণ বর্ণনা করেন। মুয়াসসার ৮০:১৫ পর্যন্ত পড়ে গিয়ে বলে, এগুলো লেখক ফেরেশতাদের হাতে, যাঁরা আল্লাহ ও তাঁর সৃষ্টির মাঝে দূত। তবে সে বিবরণ সামনের আয়াতগুলোর বিষয়। এখানে সংগৃহীত কোনো তাফসীরকার অন্যের মত খণ্ডন করেন না, আর এ প্রবন্ধও কোনো একটিকে বেছে নেয় না। প্রতিটি উত্তর তার বক্তা যেভাবে দিয়েছেন, সেভাবেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Mukarramah, Glossed Several Ways",
          "bn": "মুকাররামাহ শব্দের নানা ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Then the adjective. Mukarramah describes the scrolls as honoured: given rank and held in regard. Ibn Kathir glosses it with a pair of words, mu'azzamah muwaqqarah: held great and held in reverence. The Muyassar uses the same pair and adds 'aliyat al-qadr, high in worth. As-Sa'di, without a separate word gloss, speaks of the reminder's greatness and of the raising of its worth. On the core the three agree: the scrolls carry a standing that is given to them, and the reader is meant to register it.",
            "bn": "এরপর বিশেষণটি। মুকাররামাহ সহীফাগুলোকে বলে সম্মানিত, অর্থাৎ যাদের মর্যাদা দেওয়া হয়েছে, যাদের কদর করা হয়। ইবন কাসীর এর ব্যাখ্যা দেন জোড়া শব্দে, মুআযযামাহ মুওয়াক্কারাহ: মহিমান্বিত ও শ্রদ্ধেয়। মুয়াসসার একই জোড়া শব্দ ব্যবহার করে, সঙ্গে যোগ করে আলিয়াতুল কদর, অর্থাৎ উঁচু মর্যাদার। সা'দী আলাদা করে শব্দের অর্থ বলেন না, তবে উপদেশের মহত্ত্ব আর তার মর্যাদা উঁচু করার কথা বলেন। মূল কথায় তিনজনই একমত: সহীফাগুলোর মর্যাদা তাদের দেওয়া হয়েছে, আর পাঠকের কাজ সেটা উপলব্ধি করা।"
          },
          {
            "en": "Al-Qurtubi gathers more glosses and is careful to say who said what. Mukarramah means 'inda Allah, honoured with Allah, and he attributes this to as-Suddi. He then reports at-Tabari as saying honoured in religion, because of the knowledge and wisdom they contain. The at-Tabari text consulted for this verse gives the Preserved Tablet reading instead, so the line about knowledge and wisdom is kept here as al-Qurtubi's report of at-Tabari, not as something read in at-Tabari directly.",
            "bn": "কুরতুবী আরও কয়েকটি ব্যাখ্যা জড়ো করেন, আর কে কী বলেছেন তা খেয়াল করে আলাদা রাখেন। মুকাররামাহ মানে ইনদাল্লাহ, আল্লাহর কাছে সম্মানিত। এ ব্যাখ্যা তিনি সুদ্দীর বলে উল্লেখ করেন। তারপর তাবারীর নামে বর্ণনা করেন: দ্বীনের দিক থেকে সম্মানিত, কারণ এতে আছে জ্ঞান ও প্রজ্ঞা। এ আয়াতে তাবারীর যে লেখা সংগ্রহ করা হয়েছে, তাতে অবশ্য লাওহে মাহফুজের ব্যাখ্যাই আছে। তাই জ্ঞান ও প্রজ্ঞার কথাটি এখানে রাখা হলো তাবারী সম্পর্কে কুরতুবীর বর্ণনা হিসেবে, সরাসরি তাবারীতে পড়া কথা হিসেবে নয়।"
          },
          {
            "en": "Further views follow, each introduced with qila. The scrolls are honoured because the noble guardians, kiram al-hafazah, brought them down, or because they descend from the Preserved Tablet. And they are honoured because they came down from Him who is Karim, for, in al-Qurtubi's phrase, the honour of a book comes from the honour of its owner. He lists these side by side and ranks none of them. The word keeps all its glosses, and this article lets it keep them.",
            "bn": "এরপর আরও কিছু মত আসে, প্রতিটি কীলা দিয়ে শুরু। সহীফাগুলো সম্মানিত, কারণ সম্মানিত রক্ষকেরা, কিরামুল হাফাযাহ, এগুলো নিয়ে নেমে এসেছেন। অথবা কারণ এগুলো লাওহে মাহফুজ থেকে নেমে আসে। আরেক মতে, এগুলো সম্মানিত কারণ এসেছে কারীম সত্তার কাছ থেকে। কুরতুবীর ভাষায়, কিতাবের সম্মান আসে তার মালিকের সম্মান থেকে। তিনি মতগুলো পাশাপাশি রাখেন, কোনোটিকে উপরে তোলেন না। শব্দটি তার সব ব্যাখ্যা নিয়েই থাকে, আর এ প্রবন্ধও তাকে সেভাবেই থাকতে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Only What the Texts Say",
          "bn": "লেখায় যতটুকু আছে"
        },
        "p": [
          {
            "en": "This verse touches the unseen, and here the article keeps strictly to the texts consulted here. At-Tabari says the Tablet is raised and purified 'inda Allah, with Allah. Ma'arif al-Qur'an says the angels copy their scriptures from it. Al-Qurtubi's reports speak of noble guardians bringing the scrolls down. The Muyassar, reading ahead, calls the bearers angel scribes, noble in their nature, whose conduct is righteous and pure. Beyond these sentences, the commentaries consulted for this verse give no description of the Tablet's form or of the angels, and none is supplied here.",
            "bn": "এ আয়াত গায়েবের জগৎ ছুঁয়ে যায়, তাই এখানে প্রবন্ধটি সংগৃহীত লেখার বাইরে এক পা-ও যায় না। তাবারী বলেন, লাওহে মাহফুজ ইনদাল্লাহ, আল্লাহর কাছে, সমুন্নত ও পবিত্র। মাআরিফুল কুরআন বলে, ফেরেশতারা তাঁদের সহীফা সেখান থেকে নকল করেন। কুরতুবীর বর্ণিত মতগুলোতে আছে সম্মানিত রক্ষকদের কথা, যাঁরা সহীফা নিয়ে নেমে আসেন। মুয়াসসার সামনের আয়াত পড়ে বাহকদের বলে লেখক ফেরেশতা, স্বভাবে সম্মানিত, যাঁদের আচরণ পুণ্যময় ও পবিত্র। এর বাইরে, এ আয়াতের সংগৃহীত তাফসীরগুলো লাওহের আকার বা ফেরেশতাদের কোনো বিবরণ দেয় না, আর এখানেও তা যোগ করা হয়নি।"
          },
          {
            "en": "The verses that follow carry the picture further. 80:14 calls the scrolls raised and purified, and 80:15 and 80:16 speak of the hands of scribes, noble and dutiful. Each of those verses has its own words and deserves its own reading, so they are only named here. As for narrations, none of the commentaries consulted for this verse attaches a hadith to it, so no hadith is quoted. The verse is left to speak in its own three words, with the glosses its commentators gave them.",
            "bn": "পরের আয়াতগুলো ছবিটাকে আরও এগিয়ে নেয়। ৮০:১৪ আয়াত সহীফাগুলোকে বলে সমুন্নত ও পবিত্র, আর ৮০:১৫ ও ৮০:১৬ আয়াতে আছে লেখকদের হাতের কথা, যাঁরা সম্মানিত ও পুণ্যবান। ওই আয়াতগুলোর নিজস্ব শব্দ আছে, আলাদা পাঠও তাদের প্রাপ্য, তাই এখানে শুধু নাম নেওয়া হলো। হাদিসের কথা বললে, এ আয়াতের সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদিস যুক্ত করেনি, তাই কোনো হাদিস উদ্ধৃত করা হয়নি। আয়াতটি নিজের তিনটি শব্দেই কথা বলুক, সঙ্গে থাকুক ব্যাখ্যাকারদের দেওয়া অর্থগুলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Offered Freely, Never Cheap",
          "bn": "সবার জন্য খোলা, তবু অমূল্য"
        },
        "p": [
          {
            "en": "Read in sequence, 80:12 and 80:13 make a striking pair. Whoever wills may remember it: the reminder is set before every listener, and nobody is forced to take it. Then at once: in honoured scrolls. The openness of the invitation does not lower the standing of what is offered. A listener who turns away has not reduced it, and a listener who accepts it has not raised it. On each reading reported above, its rank comes from where it is kept and from Him who sent it down.",
            "bn": "পরপর পড়লে ৮০:১২ আর ৮০:১৩ চমৎকার এক জুটি হয়ে ওঠে। যার ইচ্ছা, সে স্মরণ করবে: উপদেশটা প্রত্যেক শ্রোতার সামনে রাখা, কাউকে জোর করা হয় না। আর সঙ্গে সঙ্গেই: সম্মানিত সহীফাগুলোতে। দাওয়াত সবার জন্য খোলা, কিন্তু তাতে যা দেওয়া হচ্ছে তার মর্যাদা একটুও কমে না। যে মুখ ফিরিয়ে নিল, সে এর মান কমাতে পারেনি। যে গ্রহণ করল, সে-ও এর মান বাড়ায়নি। উপরে যত ব্যাখ্যা এসেছে, প্রতিটিতেই এর মর্যাদা আসে কোথায় তা রাখা আছে আর কে তা নাজিল করেছেন, সেখান থেকে।"
          },
          {
            "en": "Al-Qurtubi's phrase sharpens the point: the honour of a book comes from the honour of its owner. People often judge a message by the person carrying it, by how many others accept it, or by how it makes them feel on a given day. The verse asks for a different measure. The worth of these words is drawn from Him who sent them and from the place where they are kept. The listener's task is to rise towards that worth, not to sit in judgement over it.",
            "bn": "কুরতুবীর কথাটা বিষয়টাকে আরও ধারালো করে: কিতাবের সম্মান আসে তার মালিকের সম্মান থেকে। মানুষ প্রায়ই কোনো বাণীর বিচার করে বাহককে দেখে, কতজন তা মেনেছে তা দেখে, কিংবা সেদিন মনে কেমন লাগল তা দিয়ে। আয়াতটি অন্য মাপকাঠি চায়। এই কথাগুলোর মূল্য আসে যিনি পাঠিয়েছেন তাঁর থেকে, আর যেখানে রাখা আছে সেই জায়গা থেকে। শ্রোতার কাজ সেই মর্যাদার দিকে নিজেকে তুলে নেওয়া, তার বিচারক হয়ে বসা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding the Pages Today",
          "bn": "আজকের হাতে সেই পাতা"
        },
        "p": [
          {
            "en": "What follows for a reader who holds a printed mushaf, or hears a recitation from a phone? This verse lays down no rules of handling, and the questions of purity that the commentators raise belong with 80:14. Yet the word mukarramah shapes an attitude. Ibn Kathir's pair, held great and held in reverence, describes a stance as much as a status. Reverence shows in small things: how the pages are opened, whether the words are listened to or allowed to run on as background noise.",
            "bn": "যিনি ছাপা মুসহাফ হাতে নেন, কিংবা ফোনে তিলাওয়াত শোনেন, তাঁর জন্য এ আয়াতের শিক্ষা কী? এ আয়াত মুসহাফ ধরার কোনো বিধান দেয় না। পবিত্রতার যে প্রশ্ন ব্যাখ্যাকারেরা তোলেন, তা ৮০:১৪ আয়াতের আলোচনার বিষয়। তবু মুকাররামাহ শব্দটি একটা মনোভাব গড়ে দেয়। ইবন কাসীরের জোড়া শব্দ, মহিমান্বিত ও শ্রদ্ধেয়, মর্যাদার সঙ্গে সঙ্গে আচরণের কথাও বলে। শ্রদ্ধা দেখা যায় ছোট ছোট জিনিসে: পাতাগুলো কীভাবে খোলা হয়, শব্দগুলো মন দিয়ে শোনা হয় নাকি পেছনের আওয়াজ হয়ে বাজতে থাকে।"
          },
          {
            "en": "The plural noun adds a note of its own. A reminder spoken once can be forgotten once; a reminder written down is there to be returned to. Whatever the scrolls are taken to be, the Tablet, the earlier books, or the honoured pages that carry the Qur'an, they are writing, and writing invites a return. Whoever wills may remember it, said 80:12. The scrolls keep that remembering possible tomorrow, for the reader who missed it today and for the one who heard it and drifted.",
            "bn": "বহুবচন বিশেষ্যটি নিজের একটা সুরও যোগ করে। মুখে একবার বলা উপদেশ একবারেই ভুলে যাওয়া যায়। লিখে রাখা উপদেশের কাছে বারবার ফিরে আসা যায়। সহীফা বলতে যা-ই বোঝানো হোক, লাওহে মাহফুজ, আগের কিতাবগুলো, কিংবা কুরআন বহনকারী সম্মানিত পাতা, সবই লেখা। আর লেখা মানুষকে ফিরে আসতে ডাকে। ৮০:১২ আয়াত বলেছিল, যার ইচ্ছা সে তা স্মরণ করবে। সহীফাগুলো সেই স্মরণের পথ কালকের জন্যও খোলা রাখে, তার জন্য যে আজ তা হারিয়েছে, আর তার জন্যও যে শুনেও অন্যমনস্ক হয়ে সরে গেছে।"
          },
          {
            "en": "Reverence also shows in what the reminder is allowed to do. The surah opened with a lesson about where attention belongs, and it now says that the words carrying that lesson are honoured. To honour them is to let them reorder one's own attention in the same way: towards the one who comes seeking, and towards the reminder itself. Whether the scrolls are honoured is not in question; the verse settles that. What remains open is whether the reader's day carries any sign of knowing it.",
            "bn": "শ্রদ্ধার আরেকটা চিহ্ন হলো, উপদেশটিকে নিজের ভেতরে কতটা কাজ করতে দেওয়া হয়। সূরাটি শুরু হয়েছিল মনোযোগ কোথায় দেওয়া উচিত সেই শিক্ষা দিয়ে। এখন বলছে, যে কথাগুলো সেই শিক্ষা বয়ে আনে, সেগুলো সম্মানিত। সেগুলোকে সম্মান করা মানে নিজের মনোযোগকেও তাদের হাতে একইভাবে সাজাতে দেওয়া: যে কিছু চাইতে আসে তার দিকে, আর উপদেশটির দিকে। সহীফাগুলো সম্মানিত কি না, তা নিয়ে কোনো প্রশ্ন নেই, আয়াতটি তা স্থির করে দিয়েছে। খোলা প্রশ্ন একটাই: পাঠকের দিনযাপনে কি এ কথা জানার কোনো ছাপ আছে?"
          }
        ]
      }
    ]
  },
  "80:24": {
    "sections": [
      {
        "h": {
          "en": "Four Words at Mealtime",
          "bn": "খাবারের সময়ের চার শব্দ"
        },
        "p": [
          {
            "en": "Fal-yanzuri l-insanu ila ta'amih: then let man look at his food. The verse is four words in Arabic, and it opens with fa, a 'then' or 'so' that ties it to what came before. The command is in the third person, spoken about man rather than to him, and the thing he is sent to look at is the nearest thing he has. He is not pointed here at the sky or at a distant people, but at what is on his plate today.",
            "bn": "ফালইয়ানযুরিল ইনসানু ইলা তাআমিহ: মানুষ তবে তার খাবারের দিকে তাকাক। আরবিতে আয়াতটিতে চারটি শব্দ। শুরুর 'ফা', অর্থাৎ 'তবে' বা 'অতএব', একে আগের কথার সঙ্গে বেঁধে দেয়। আদেশটা মানুষকে সামনে ডেকে বলা নয়, তার সম্পর্কে বলা। আর যেদিকে তাকে তাকাতে বলা হচ্ছে, সেটা তার সবচেয়ে কাছের জিনিস। আকাশ বা দূরের কোনো জাতির দিকে নয়, তাকে পাঠানো হচ্ছে আজকের থালার দিকে।"
          },
          {
            "en": "The commentators read the line as a hinge. Al-Qurtubi and al-Baghawi both say that once the surah had mentioned the beginning of man's creation, it turned to his provision; al-Qurtubi adds that this is the provision Allah made easy for him. The order is worth noticing: first where you came from, then what keeps you alive. This article follows the sources fetched for this verse, at-Tabari, al-Qurtubi, as-Sa'di, Ibn Kathir, al-Baghawi, the Muyassar and Ma'arif al-Qur'an, and reports what each of them actually says.",
            "bn": "মুফাসসিরগণ লাইনটিকে দেখেন একটা মোড় হিসেবে। কুরতুবী ও বাগাভী দুজনেই বলেন, মানুষের সৃষ্টির শুরুর কথা বলার পর সূরাটি তার রিজিকের কথায় এসেছে। কুরতুবী যোগ করেন, এ সেই রিজিক যা আল্লাহ তার জন্য সহজ করে দিয়েছেন। ক্রমটা খেয়াল করার মতো: আগে আপনি কোথা থেকে এলেন, তারপর কী আপনাকে বাঁচিয়ে রাখে। এ লেখা এই আয়াতের জন্য সংগৃহীত উৎসগুলো ধরে চলবে: তাবারী, কুরতুবী, সা'দী, ইবন কাসীর, বাগাভী, মুয়াসসার ও মাআরিফুল কুরআন। প্রত্যেকে আসলে যা বলেন, সেটুকুই এখানে আসবে।"
          }
        ]
      },
      {
        "h": {
          "en": "From the Drop to the Dish",
          "bn": "ফোঁটা থেকে থালা পর্যন্ত"
        },
        "p": [
          {
            "en": "The verses just before trace a whole life. 80:17 opens with qutila l-insanu ma akfarah, and Ibn Kathir carries Ibn Abbas's gloss, 'may man be cursed', and Ibn Jurayj's, that none is worse in disbelief than he. Then 80:18 to 80:22: from what did He create him, from a drop, then proportion, a way made easy, death, a grave, and raising when He wills. The 'man' of 80:17 is a description of a stance, which a comment in the same text calls the rejecting type of man; it names no living person or people.",
            "bn": "আগের আয়াতগুলো একটি জীবনের পুরো পথ এঁকে দেয়। ৮০:১৭ শুরু হয় 'কুতিলাল ইনসানু মা আকফারাহ' দিয়ে। ইবন কাসীর এখানে ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা আনেন: মানুষ অভিশপ্ত হোক। ইবন জুরাইজের ব্যাখ্যাও আনেন: কুফরিতে তার চেয়ে খারাপ কেউ নেই। তারপর ৮০:১৮ থেকে ৮০:২২: কী থেকে তিনি তাকে সৃষ্টি করলেন? এক ফোঁটা থেকে। তারপর পরিমিত গড়ন, সহজ করে দেওয়া পথ, মৃত্যু, কবর, আর তিনি যখন চাইবেন তখন পুনরুত্থান। ৮০:১৭-এর 'মানুষ' একটা মনোভাবের বর্ণনা। একই লেখার এক মন্তব্যে একে বলা হয়েছে অস্বীকারকারী ধরনের মানুষ। এতে কোনো জীবিত ব্যক্তি বা জাতির নাম নেই।"
          },
          {
            "en": "80:23 is read two ways, and Ibn Kathir sets them side by side. Ibn Jarir, that is at-Tabari, takes kalla lamma yaqdi ma amarah to mean that man has not fulfilled what his Lord imposed on him. Ibn Kathir then gives his own reading, introduced with 'Allah knows best': that He has not yet done it, the raising, until the term written for humanity runs out. Either way, the very next word is fal-yanzur, so the look at food comes straight after a charge, or straight after a promise of resurrection.",
            "bn": "৮০:২৩ আয়াতের দুটি পাঠ আছে, আর ইবন কাসীর দুটোই পাশাপাশি রাখেন। ইবন জারীর, অর্থাৎ তাবারী, 'কাল্লা লাম্মা ইয়াকদি মা আমারাহ'-এর অর্থ করেন এভাবে: রব তার উপর যা ফরজ করেছিলেন, মানুষ তা পালন করেনি। এরপর ইবন কাসীর নিজের মত দেন, শুরুতে 'আল্লাহই ভালো জানেন' বলে: তিনি এখনো তা করেননি, অর্থাৎ পুনরুত্থান ঘটাননি, যতক্ষণ না মানবজাতির জন্য লেখা মেয়াদ ফুরায়। যে পাঠই নিন, ঠিক পরের শব্দটি 'ফালইয়ানযুর'। তাই খাবারের দিকে তাকানোর ডাক আসে হয় একটা অভিযোগের ঠিক পরে, নয়তো পুনরুত্থানের প্রতিশ্রুতির ঠিক পরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Man Is Told",
          "bn": "কোন মানুষকে বলা হলো"
        },
        "p": [
          {
            "en": "At-Tabari reads al-insan here narrowly: let this disbelieving man, the one who denies the oneness of Allah, look at his food, how He arranged it. Ma'arif al-Qur'an reads the passage the same way, saying that these verses warn the non-believing man that Allah's signs and blessings demanded that he ponder, believe and obey, and that he failed to. On this reading the plate is evidence laid before someone who has turned evidence away, and the argument is pitched to persuade him.",
            "bn": "তাবারী এখানে 'আল-ইনসান'-কে সংকীর্ণ অর্থে পড়েন: এই কাফির মানুষ, যে আল্লাহর একত্ব অস্বীকার করে, সে তার খাবারের দিকে তাকাক, দেখুক তিনি কীভাবে এর ব্যবস্থা করেছেন। মাআরিফুল কুরআনও অংশটি একইভাবে পড়ে। তার ভাষায়, এ আয়াতগুলো অবিশ্বাসী মানুষকে সতর্ক করে: আল্লাহর নিদর্শন ও নিয়ামতের দাবি ছিল, সে ভেবে দেখবে, ঈমান আনবে, হুকুম মানবে। কিন্তু সে তা করেনি। এ পাঠে থালাটা হলো প্রমাণ, যা রাখা হয়েছে প্রমাণ ফিরিয়ে দেওয়া একজনের সামনে। যুক্তিটা সাজানো তাকে বোঝানোর জন্য।"
          },
          {
            "en": "The other commentators fetched here speak of man without a qualifier. Al-Qurtubi, al-Baghawi, as-Sa'di and the Muyassar all simply say al-insan, and as-Sa'di frames the verse as Allah guiding him to look and reflect. The two readings do not cancel each other, and none of the fetched texts argues against the other. What they share matters more to a reader: the verse describes a stance a person can take, and it licenses no verdict against any living individual or community. It asks whoever reads it to look.",
            "bn": "এখানে সংগৃহীত বাকি মুফাসসিরগণ মানুষের কথা বলেন কোনো বিশেষণ ছাড়াই। কুরতুবী, বাগাভী, সা'দী ও মুয়াসসার সবাই শুধু 'আল-ইনসান' বলেন। সা'দীর ভাষায়, আল্লাহ এখানে তাকে পথ দেখাচ্ছেন তাকানো ও চিন্তা করার দিকে। দুই পাঠ একে অন্যকে বাতিল করে না, আর সংগৃহীত কোনো লেখাই অন্যটির বিরুদ্ধে যুক্তি দেয় না। পাঠকের জন্য বড় কথা হলো যেখানে তারা একমত: আয়াতটি এমন এক মনোভাবের বর্ণনা দেয়, যা যে কেউ নিতে পারে। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে রায় দেওয়ার অনুমতি এটি দেয় না। যে পড়ে, আয়াতটি তাকেই তাকাতে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Look of the Heart",
          "bn": "হৃদয় দিয়ে তাকানো"
        },
        "p": [
          {
            "en": "What kind of looking is meant? Al-Qurtubi answers directly: this nazar is the heart's looking, by thought. He glosses it as tadabbur, pondering how Allah created his food, which is the mainstay of his life, and how He prepared for him the means of living. The Muyassar uses the same verb, fal-yatadabbar, and the same phrase about food as the mainstay of life. As-Sa'di pairs the looking with tafakkur, reflection. None of them reads it as inspecting the dish.",
            "bn": "কোন ধরনের তাকানোর কথা বলা হচ্ছে? কুরতুবী সরাসরি জবাব দেন: এ 'নাযার' অন্তরের দেখা, চিন্তা দিয়ে দেখা। তাঁর ব্যাখ্যায় এর মানে তাদাব্বুর: ভেবে দেখা, আল্লাহ কীভাবে তার খাবার সৃষ্টি করেছেন, যে খাবারের উপর তার জীবন দাঁড়িয়ে আছে, আর কীভাবে তার জন্য জীবিকার উপকরণ প্রস্তুত করেছেন। মুয়াসসারও একই ক্রিয়া ব্যবহার করে, 'ফালইয়াতাদাব্বার', আর খাবারকে বলে জীবনের অবলম্বন। সা'দী তাকানোর সঙ্গে জুড়ে দেন 'তাফাক্কুর', অর্থাৎ চিন্তা। তাঁদের কেউই একে থালা পরখ করা হিসেবে পড়েন না।"
          },
          {
            "en": "Al-Baghawi names the purpose, li-ya'tabir, so that he may take the lesson, and says what the lesson concerns: how his Lord measured it out, arranged it for him and made it a means of his life. Al-Qurtubi adds a purpose that turns the meal toward the end of the surah. Allah prepared the means of living for him, he says, li-yasta'idda biha lil-ma'ad, so that he would use them to make ready for the Return. On that reading, food is not an end in itself.",
            "bn": "বাগাভী উদ্দেশ্যটা বলে দেন: 'লিইয়া'তাবির', যাতে সে শিক্ষা নেয়। কী নিয়ে শিক্ষা, তাও বলেন: তার রব কীভাবে তা পরিমাণমতো নির্ধারণ করেছেন, তার জন্য ব্যবস্থা করেছেন, আর একে তার বেঁচে থাকার উপায় বানিয়েছেন। কুরতুবী আরেকটি উদ্দেশ্য যোগ করেন, যা খাবারকে সূরার শেষ অংশের দিকে ঘুরিয়ে দেয়। তাঁর ভাষায়, আল্লাহ তার জীবিকার উপকরণ প্রস্তুত করেছেন 'লিইয়াসতাইদ্দা বিহা লিল মাআদ', যাতে সেগুলো দিয়ে সে আখিরাতে ফেরার প্রস্তুতি নেয়। এ পাঠে খাবার নিজেই লক্ষ্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Arranged, Eaten, a Sign",
          "bn": "সাজানো, খাওয়া, নিদর্শন"
        },
        "p": [
          {
            "en": "On what exactly is to be looked at, the sources give more than one answer. At-Tabari says: how He arranged it, kayfa dabbarahu, and al-Baghawi says how his Lord measured and arranged it. At-Tabari also reports from Mujahid, by one chain, that the verse means his food and his drink, his eating and his drinking; by another chain from Mujahid he records only the words ayatun lahum, 'a sign for them'. A sign is what the following verses go on to unfold.",
            "bn": "ঠিক কোন দিকে তাকাতে হবে, এ নিয়ে উৎসগুলো একাধিক জবাব দেয়। তাবারী বলেন: তিনি কীভাবে এর ব্যবস্থা করেছেন, 'কাইফা দাব্বারাহু'। বাগাভী বলেন: তার রব কীভাবে তা পরিমাপ করে সাজিয়েছেন। তাবারী একটি সনদে মুজাহিদ থেকে বর্ণনা করেন, আয়াতের অর্থ তার খাবার ও পানীয়, তার খাওয়া আর তার পান করা। আরেকটি সনদে মুজাহিদ থেকে তিনি শুধু এ কথাটুকু আনেন: 'আয়াতুন লাহুম', তাদের জন্য একটি নিদর্শন। পরের আয়াতগুলো সেই নিদর্শনই খুলে দেখায়।"
          },
          {
            "en": "As-Sa'di looks at the route rather than the dish. He tells the reader to reflect on how the food reached him after passing through many stages, tabaqat 'adidah, and how Allah made it easy for him. The verb for easing, yassara, is also the verb of 80:20, for the way made easy for man, and al-Qurtubi too speaks of what Allah made easy of his provision. Read with them, the life traced in 80:18 to 80:22 and the meal traced in 80:25 to 80:32 are both described as eased.",
            "bn": "সা'দী তাকান থালার চেয়ে খাবারের যাত্রাপথের দিকে। তিনি বলেন, ভেবে দেখুন, বহু স্তর, 'তাবাকাত আদীদাহ', পেরিয়ে খাবারটা কীভাবে তার কাছে পৌঁছাল, আর আল্লাহ কীভাবে তা তার জন্য সহজ করে দিলেন। সহজ করার এই ক্রিয়া 'ইয়াস্সারা' ৮০:২০ আয়াতেও এসেছে, যেখানে মানুষের পথ সহজ করে দেওয়ার কথা। কুরতুবীও আল্লাহর সহজ করে দেওয়া রিজিকের কথা বলেন। তাঁদের সঙ্গে পড়লে ৮০:১৮ থেকে ৮০:২২ আয়াতে আঁকা জীবন আর ৮০:২৫ থেকে ৮০:৩২ আয়াতে আঁকা খাবার, দুটোকেই বলা হয়েছে সহজ করে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Meal Ends Up",
          "bn": "খাবার শেষে কোথায় যায়"
        },
        "p": [
          {
            "en": "A second reading looks in the other direction. Al-Qurtubi reports from al-Hasan and Mujahid, and al-Baghawi from Mujahid, that the verse means: look at its madkhal and its makhraj, where it goes in and where it comes out. The same plate that displays Allah's provision also displays a person's dependence and frailty. What tasted good an hour ago does not stay that way, and the reader is invited to notice both ends of the meal.",
            "bn": "আরেকটি পাঠ তাকায় উল্টো দিকে। কুরতুবী হাসান ও মুজাহিদ থেকে, আর বাগাভী মুজাহিদ থেকে বর্ণনা করেন, আয়াতের অর্থ: এর 'মাদখাল' ও 'মাখরাজ' দেখো, কোথা দিয়ে ঢোকে আর কোথা দিয়ে বের হয়। যে থালা আল্লাহর রিজিক দেখায়, সেই থালাই দেখায় মানুষের নির্ভরতা আর দুর্বলতা। এক ঘণ্টা আগে যা মুখে মজা লেগেছিল, তা আর সে অবস্থায় থাকে না। পাঠককে ডাকা হচ্ছে খাবারের দুই প্রান্তই খেয়াল করতে।"
          },
          {
            "en": "Al-Qurtubi follows this with reports on the same theme. He relays, through Abu al-Walid, that Ibn Umar was asked about a man who looks at what leaves him in the privy, and replied that an angel comes to him and says: look at what you were miserly with, and what it has become. He also carries two sayings attributed to the Prophet ﷺ, one through Ibn Abi Khaythamah from ad-Dahhak ibn Sufyan al-Kilabi and one from Ubayy ibn Ka'b, which make what becomes of the son of Adam's food a likeness for the world.",
            "bn": "এরপর কুরতুবী একই বিষয়ে কিছু বর্ণনা আনেন। আবুল ওয়ালিদের সূত্রে তিনি বলেন, ইবন উমর (রাঃ)-কে জিজ্ঞেস করা হয়েছিল এমন লোক সম্পর্কে, যে শৌচাগারে নিজের শরীর থেকে যা বের হয় তার দিকে তাকায়। তিনি বলেন, ফেরেশতা তার কাছে এসে বলে: দেখো, যা নিয়ে তুমি কৃপণতা করেছিলে, তা কী হয়ে গেছে। কুরতুবী নবী ﷺ-এর নামে দুটি কথাও আনেন, একটি ইবন আবী খাইসামার সূত্রে দাহহাক ইবন সুফিয়ান কিলাবী থেকে, আরেকটি উবাই ইবন কা'ব (রাঃ) থেকে। দুটিতেই আদমসন্তানের খাবার শেষে যা হয়, তাকে দুনিয়ার উপমা বানানো হয়েছে।"
          },
          {
            "en": "Al-Qurtubi gives no grading for either saying, and since neither could be confirmed on a page fetched for this article, it does not quote them as hadith. No sound hadith attached to 80:24 appears in the sources fetched for it; the one hadith Ibn Kathir cites in this passage, from the Two Sahihs, belongs to his comment on 80:22. The Ibn Umar report is a Companion's saying carried in al-Qurtubi's text, likewise without a grading, and it is given here only as his report.",
            "bn": "কুরতুবী এ দুটি কথার কোনো মান উল্লেখ করেননি। এ লেখার জন্য সংগৃহীত কোনো পৃষ্ঠায় এগুলো নিশ্চিত করা যায়নি, তাই এখানে হাদীস হিসেবে উদ্ধৃত করা হলো না। এ আয়াতের জন্য সংগৃহীত উৎসগুলোতে ৮০:২৪-এর সঙ্গে যুক্ত কোনো সহীহ হাদীস নেই। এ অংশে ইবন কাসীর দুই সহীহ গ্রন্থ থেকে যে একটি হাদীস আনেন, সেটি ৮০:২২ আয়াতের ব্যাখ্যায়। ইবন উমর (রাঃ)-এর কথাটি একজন সাহাবীর উক্তি, কুরতুবীর লেখায় তাও এসেছে কোনো মান ছাড়া। এখানে তা শুধু তাঁর বর্ণনা হিসেবেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Grain, Qadb and Abb",
          "bn": "শস্য, কাদব আর আব্ব"
        },
        "p": [
          {
            "en": "80:25 to 80:32 then carry out the look, and every verb in them is Allah's: We poured the water, We split the earth, We caused to grow. Ibn Kathir glosses the pouring as sending it down from the sky to the earth, and the splitting as the water settling into the earth and mingling with the seeds left in it, until they rise and appear. The Muyassar reads the splitting as the earth opening with all kinds of plants. The full account of the rain belongs to 80:25, which has its own article.",
            "bn": "এরপর ৮০:২৫ থেকে ৮০:৩২ আয়াত সেই তাকানোর কাজটা করে দেখায়, আর সেখানে প্রতিটি ক্রিয়ার কর্তা আল্লাহ: আমি পানি ঢেলেছি, আমি মাটি চিরেছি, আমি উৎপন্ন করেছি। ইবন কাসীরের ব্যাখ্যায় পানি ঢালা মানে আকাশ থেকে জমিনে নামানো। আর মাটি চেরা মানে, পানি মাটিতে ঢুকে থিতু হয়, মাটিতে রয়ে যাওয়া বীজের সঙ্গে মিশে যায়, শেষে বীজ গজিয়ে মাথা তোলে। মুয়াসসার চেরাকে পড়ে নানা রকম উদ্ভিদ নিয়ে মাটির ফেটে যাওয়া হিসেবে। বৃষ্টির পুরো আলোচনা ৮০:২৫ আয়াতের, তার আলাদা লেখা আছে।"
          },
          {
            "en": "Then comes the list. For qadb Ibn Kathir gives the moist green plants that animals graze, also called qatt, citing Ibn Abbas, Qatadah, ad-Dahhak and as-Suddi; al-Hasan al-Basri calls it fodder, and the Muyassar has fodder for animals. For abb in 80:31 he reports Ibn Abbas: what the earth grows that grazing animals eat and people do not, and in another narration, grass for livestock. Ghulb gardens are thick palm groves for al-Hasan and Qatadah; Ibn Abbas and Mujahid say the word means everything gathered.",
            "bn": "তারপর তালিকা। 'কাদব' সম্পর্কে ইবন কাসীর বলেন, এ হলো সেই তাজা সবুজ উদ্ভিদ যা পশুরা চরে খায়, একে 'কাত্ত'-ও বলে। এ মত তিনি আনেন ইবন আব্বাস (রাঃ), কাতাদা, দাহহাক ও সুদ্দী থেকে। হাসান বসরী একে বলেন পশুখাদ্য, মুয়াসসারও লেখে পশুর খাবার। ৮০:৩১ আয়াতের 'আব্ব' সম্পর্কে তিনি ইবন আব্বাস (রাঃ)-এর কথা আনেন: জমিন যা জন্মায়, যা পশু খায় কিন্তু মানুষ খায় না। আরেক বর্ণনায়: গবাদি পশুর ঘাস। 'গুলব' বাগান হাসান ও কাতাদার মতে ঘন খেজুরবাগান, আর ইবন আব্বাস (রাঃ) ও মুজাহিদের মতে শব্দটির অর্থ যা কিছু জড়ো করা হয়।"
          },
          {
            "en": "Ibn Kathir also carries two reports of restraint over abb. Through Ibrahim at-Taymi, Abu Bakr was asked about it and said: what sky would shade me and what earth would carry me if I said about the Book of Allah what I do not know. Through Anas, Umar recited the surah, reached abb and asked what it was, then said: by your life, O Ibn al-Khattab, this is over-burdening. Ibn Kathir calls that chain authentic, and explains that Umar sought its exact form, knowing it was a plant. 80:32 closes with provision for you and your livestock, which he glosses as livelihood until the Day of Judgement.",
            "bn": "'আব্ব' নিয়ে সংযমের দুটি বর্ণনাও ইবন কাসীর আনেন। ইবরাহীম তাইমীর সূত্রে: আবু বকর (রাঃ)-কে এর অর্থ জিজ্ঞেস করা হলে তিনি বলেন, আল্লাহর কিতাব সম্পর্কে না জেনে কিছু বললে কোন আকাশ আমাকে ছায়া দেবে, কোন জমিন আমাকে বহন করবে? আনাস (রাঃ)-এর সূত্রে: উমর (রাঃ) সূরাটি পড়তে পড়তে 'আব্ব' পর্যন্ত এসে জিজ্ঞেস করেন, এটা কী? তারপর বলেন, তোমার জীবনের কসম, হে ইবনুল খাত্তাব, এ তো বাড়াবাড়ি। ইবন কাসীর এ সনদকে সহীহ বলেন। তাঁর ব্যাখ্যায়, উমর (রাঃ) জানতেন এটা উদ্ভিদ, জানতে চাইছিলেন এর সঠিক রূপ। ৮০:৩২ শেষ হয় তোমাদের ও তোমাদের পশুদের ভোগের সামগ্রীর কথায়। ইবন কাসীরের ব্যাখ্যায়, কিয়ামত পর্যন্ত দুনিয়ার জীবিকা।"
          }
        ]
      },
      {
        "h": {
          "en": "Favour and Proof at Once",
          "bn": "অনুগ্রহ ও প্রমাণ একসঙ্গে"
        },
        "p": [
          {
            "en": "Ibn Kathir names two things the verse holds. Fihi imtinan: it is a reminder of favour. Wa fihi istidlal: it is also an argument, that bringing plants to life from lifeless earth is evidence that bodies will be brought back to life after they were decayed bones and scattered dust. The argument comes two verses after 80:22, then when He wills He will raise him, so the meal is both gift and evidence for the raising. The article on 80:25 takes up that pairing of dead ground and living bodies.",
            "bn": "ইবন কাসীর আয়াতটিতে দুটি জিনিস দেখেন। 'ফীহি ইমতিনান': এতে আছে অনুগ্রহের কথা মনে করিয়ে দেওয়া। 'ওয়া ফীহি ইসতিদলাল': এতে যুক্তিও আছে। মরা মাটি থেকে উদ্ভিদকে জীবিত করা প্রমাণ করে, পচা হাড় আর ছড়িয়ে পড়া ধুলো হয়ে যাওয়ার পরও দেহগুলোকে আবার জীবিত করা হবে। যুক্তিটা আসে ৮০:২২-এর দুই আয়াত পরে, যেখানে বলা হয়েছে, তিনি যখন চাইবেন তাকে আবার উঠাবেন। তাই খাবারটা একসঙ্গে উপহার, আবার পুনরুত্থানের প্রমাণ। মরা মাটি আর জীবিত দেহের এ জোড়া নিয়ে ৮০:২৫ আয়াতের লেখায় আলোচনা আছে।"
          },
          {
            "en": "The passage does not stay at the table. Straight after the provision for man and livestock, 80:33 opens on the Deafening Blast, and 80:34 to 80:37 describe the Day a person flees his brother, mother, father, wife and children, each taken up with his own affair; the articles on 80:33 and 80:37 treat those verses. The sequence fits the purpose al-Qurtubi named: means of living prepared so that a person makes ready for the Return. The command to eat what Allah provided, lawful and good, and to be grateful comes in 16:114.",
            "bn": "অংশটি খাবার টেবিলে থেমে থাকে না। মানুষ ও পশুর ভোগের সামগ্রীর কথার ঠিক পরেই ৮০:৩৩ শুরু হয় কান-ফাটানো আওয়াজের কথা দিয়ে। আর ৮০:৩৪ থেকে ৮০:৩৭ আয়াতে সেই দিনের বর্ণনা, যেদিন মানুষ পালাবে তার ভাই, মা, বাবা, স্ত্রী ও সন্তানদের কাছ থেকে, প্রত্যেকে নিজের ব্যাপারেই ব্যস্ত। এ আয়াতগুলো নিয়ে ৮০:৩৩ ও ৮০:৩৭ আয়াতের লেখা আছে। ক্রমটা কুরতুবীর বলা উদ্দেশ্যের সঙ্গে মেলে: জীবিকার উপকরণ দেওয়া হয়েছে, যাতে মানুষ আখিরাতে ফেরার প্রস্তুতি নেয়। আল্লাহর দেওয়া হালাল ও পবিত্র রিজিক খেয়ে শোকর করার নির্দেশ এসেছে ১৬:১১৪ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the First Bite",
          "bn": "প্রথম লোকমার আগে"
        },
        "p": [
          {
            "en": "Put together, the fetched sources give a reader three ways to look at one meal. Follow it back, with at-Tabari and al-Baghawi, to how it was arranged and measured out, through the stages as-Sa'di describes, to water poured and earth split. Follow it forward, with al-Hasan and Mujahid, to where it goes, and remember the Ibn Umar report about what was held back. And hold it, with al-Qurtubi, as a means of living given so that you prepare for the Return.",
            "bn": "সব মিলিয়ে সংগৃহীত উৎসগুলো পাঠককে একটি খাবারের দিকে তাকানোর তিনটি উপায় দেয়। পেছনে যান, তাবারী ও বাগাভীর সঙ্গে: খাবারটা কীভাবে সাজানো ও পরিমাপ করা হয়েছে, সা'দীর বলা স্তরগুলো পেরিয়ে, ঢেলে দেওয়া পানি আর চিরে দেওয়া মাটি পর্যন্ত। সামনে যান, হাসান ও মুজাহিদের সঙ্গে: খাবারটা কোথায় যায়। সেই সঙ্গে ইবন উমর (রাঃ)-এর বর্ণনাটি মনে রাখুন, আটকে রাখা জিনিসের পরিণতি নিয়ে। আর কুরতুবীর সঙ্গে খাবারটাকে দেখুন জীবিকার উপকরণ হিসেবে, যা দেওয়া হয়েছে যাতে আপনি আখিরাতে ফেরার প্রস্তুতি নেন।"
          },
          {
            "en": "None of this needs a journey or special learning. It needs the pause the verse asks for, at a moment that comes several times a day. A practical form: before eating, name one link in the chain that you did not make, the rain, the soil, the season, and let the gratitude that follows be specific. And when you are unsure of a word, the reports Ibn Kathir carries about Abu Bakr and Umar show that holding back from guessing is also part of reading well.",
            "bn": "এর জন্য সফর বা বিশেষ পড়াশোনা লাগে না। লাগে শুধু আয়াতের চাওয়া সেই থামাটুকু, আর সে মুহূর্ত দিনে কয়েকবার আসে। হাতে-কলমে করতে চাইলে: খাওয়ার আগে এই শিকলের একটি কড়ার নাম নিন, যা আপনি বানাননি। বৃষ্টি, মাটি, মৌসুম। তারপর যে শোকর আসে, তা হোক নির্দিষ্ট কিছুর জন্য। আর কোনো শব্দের অর্থ নিয়ে নিশ্চিত না হলে মনে রাখুন, ইবন কাসীরের আনা আবু বকর (রাঃ) ও উমর (রাঃ)-এর বর্ণনা দেখায়, আন্দাজে কিছু না বলাও ভালোভাবে পড়ার অংশ।"
          }
        ]
      }
    ]
  },
  "80:25": {
    "sections": [
      {
        "h": {
          "en": "Four Words, One Downpour",
          "bn": "চার শব্দে এক বর্ষণ"
        },
        "p": [
          {
            "en": "Anna sababna al-ma'a sabba: that We poured down the water, a pouring. The verse is four Arabic words. Anna is that We; sababna is We poured; al-ma'a is the water, carrying the definite article; and sabban repeats the same root as sababna, so the pouring is said twice, once as a verb and once as a word of the same root. The next verse, 80:26, is built the same way, shaqaqna and then shaqqan, We split and a splitting. Here the subject is the water alone, and the earth's part is left for that next verse.",
            "bn": "আন্না সাবাবনাল মাআ সাব্বা: আমি পানি ঢেলেছি, অঝোর ঢালা। আয়াতটি আরবিতে চারটি শব্দের। আন্না মানে যে আমি; সাবাবনা মানে আমি ঢেলেছি; আল-মা মানে পানি, নির্দিষ্টবাচক আল-সহ; আর সাব্বান সাবাবনার মতো একই মূল থেকে। ঢালার কথা তাই দুবার আসে, একবার ক্রিয়া হিসেবে, আরেকবার একই মূলের শব্দ হিসেবে। পরের আয়াত ৮০:২৬-ও একই ছাঁচে গড়া: শাকাকনা, তারপর শাক্কান, আমি চিরেছি, চিরে দেওয়া। এ আয়াতে কথা শুধু পানির। মাটির ভূমিকা রাখা আছে পরের আয়াতের জন্য।"
          },
          {
            "en": "The verse does not stand by itself. 80:24 has just given the order, let man look at his food, and 80:25 is the first thing he is shown when he looks. The commentators read it as the opening of an answer that runs on through the verses after it, and the speaker throughout is the first-person We. Before that order, 80:17 to 80:23 traced man from a drop of fluid to his grave and his raising, and charged him with not yet having done what he was commanded. The water arrives as the next line of the same argument.",
            "bn": "আয়াতটি একা দাঁড়িয়ে নেই। ৮০:২৪ সবে হুকুম দিয়েছে: মানুষ তার খাবারের দিকে তাকাক। তাকালে প্রথমেই তাকে যা দেখানো হয়, তা ৮০:২৫। তাফসীরকারেরা একে এমন এক জবাবের শুরু হিসেবে পড়েন, যা পরের আয়াতগুলো জুড়ে চলতে থাকে, আর পুরো সময় বক্তা একজনই, যিনি বলছেন 'আমি'। ওই হুকুমের আগে ৮০:১৭ থেকে ৮০:২৩ মানুষকে এক ফোঁটা থেকে কবর পর্যন্ত, তারপর পুনরুত্থান পর্যন্ত দেখিয়ে এনেছে। অভিযোগও তুলেছে যে তাকে যা আদেশ করা হয়েছিল, সে এখনো তা পালন করেনি। পানি আসে সেই একই যুক্তির পরের লাইন হয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Opening Vowel, Two Readings",
          "bn": "শুরুর হরকতে দুই কিরাআত"
        },
        "p": [
          {
            "en": "The first word is read two ways, and at-Tabari records both. The general body of readers in Medina and Basra read it inna, with a kasra under the alif, as a fresh start: truly, We poured the water. The general body of readers in Kufa read anna, with a fatha, giving the sense, let man look at this: that We poured. On that reading, he explains, anna stands in the genitive, as though the preposition ila, to, were repeated before it. It may also be nominative when read with the fatha, he adds, with the words his food in view.",
            "bn": "প্রথম শব্দটি দুভাবে পড়া হয়, আর তাবারী দুটিই লিপিবদ্ধ করেছেন। মদীনা ও বসরার সাধারণ কারীরা আলিফের নিচে যের দিয়ে পড়েছেন ইন্না, নতুন বাক্যের শুরু হিসেবে: নিশ্চয়ই আমি পানি ঢেলেছি। কুফার সাধারণ কারীরা যবর দিয়ে পড়েছেন আন্না। তখন অর্থ দাঁড়ায়: মানুষ তাকিয়ে দেখুক এই বিষয়টার দিকে, যে আমি পানি ঢেলেছি। তাবারীর ব্যাখ্যায় এই পাঠে আন্না যেরযুক্ত অবস্থানে বসে, যেন তার আগে ইলা, অর্থাৎ 'দিকে', আরেকবার এসেছে। তিনি যোগ করেন, যবর দিয়ে পড়লে একে পেশযুক্তও ধরা যায়, তখন 'তার খাবার' কথাটা মাথায় রেখে।"
          },
          {
            "en": "Then at-Tabari gives his judgment, and it is not a choice between them: they are two well-known readings, and whichever the reciter follows, he is right. Al-Baghawi reports the same split more briefly. The people of Kufa read anna with the fatha, by repeating the governing preposition, so that the sense is, let him look at this: that We. The rest read inna with the kasra, as a new beginning. The text displayed here carries the fatha, the reading that al-Baghawi and al-Qurtubi credit to the Kufans.",
            "bn": "এরপর তাবারী নিজের রায় দেন, আর সে রায় কোনো একটিকে বেছে নেওয়া নয়। তাঁর কথায় দুটিই সুপরিচিত কিরাআত, কারী যেটি অনুসরণ করুন, তিনি সঠিক। বাগাভী একই মতভেদ আরও সংক্ষেপে জানান। কুফাবাসীরা যবর দিয়ে আন্না পড়েছেন, আগের অব্যয়টিকে আবার ধরে নিয়ে, যাতে অর্থ হয়: সে তাকিয়ে দেখুক, আমি যে। বাকিরা পড়েছেন যের দিয়ে ইন্না, নতুন শুরু হিসেবে। এখানে যে আরবি পাঠ দেখানো হয়েছে, তাতে আছে যবর। বাগাভী ও কুরতুবী এই কিরাআতকে কুফার কারীদের বলে উল্লেখ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Reader Pauses",
          "bn": "পাঠক কোথায় থামবেন"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives the same two readings with more detail. The general reading, he says, is inna with the kasra, as a fresh start, while the Kufans, and Ruways from Ya'qub, read anna with the fatha. On the fatha reading the clause is a badal, a substitute that explains the word food: let man look at his food, at that We poured. For that reason, he notes, a reader following it does not do well to pause at ta'amihi, his food, since what follows completes it. If anna is taken as nominative, the implied words are, it is that We poured.",
            "bn": "কুরতুবী একই দুই কিরাআত আরও বিস্তারিত উল্লেখ করেন। তাঁর কথায় সাধারণ কিরাআত হলো যের দিয়ে ইন্না, নতুন কথার শুরু হিসেবে। আর কুফার কারীরা এবং ইয়াকুবের সূত্রে রুওয়াইস পড়েছেন যবর দিয়ে আন্না। যবরের পাঠে বাক্যাংশটি বদল, অর্থাৎ 'খাবার' শব্দটিরই ব্যাখ্যা: মানুষ তাকাক তার খাবারের দিকে, মানে আমি যে পানি ঢেলেছি সেদিকে। তাই তিনি বলেন, এই কিরাআতে যিনি পড়েন, তাঁর জন্য তাআমিহি, অর্থাৎ 'তার খাবার'-এ থামা ভালো নয়, কারণ পরের অংশ এসেই কথাটা পূর্ণ করে। আন্নাকে পেশযুক্ত ধরলে উহ্য কথাটা হবে: তা এই যে, আমি ঢেলেছি।"
          },
          {
            "en": "He records two more possibilities. One is that the sense is li-anna, because We poured the water and so brought out the food by it. The other is a reading he credits to al-Husayn ibn 'Ali: a different word, the particle anna that asks how. Whoever takes that reading, al-Qurtubi says, treats the pause at his food as complete, and the next words begin a question: how did We pour the water? That anna can also mean from which direction, he adds, and he quotes a line of al-Kumayt that pairs it with min ayna, from where.",
            "bn": "তিনি আরও দুটি সম্ভাবনা লিপিবদ্ধ করেন। একটি হলো, অর্থ লি-আন্না: কারণ আমি পানি ঢেলেছি, তারপর তা দিয়ে খাবার বের করেছি। অন্যটি এক কিরাআত, যা তিনি হুসাইন ইবন আলী (রাঃ)-এর বলে উল্লেখ করেন। সেখানে শব্দটি আলাদা: 'কীভাবে' অর্থের প্রশ্নবোধক আন্না। কুরতুবী বলেন, এ কিরাআত যিনি গ্রহণ করেন, তাঁর কাছে 'তার খাবার'-এ থামা পূর্ণ থামা। পরের কথাগুলো তখন প্রশ্ন দিয়ে শুরু হয়: আমি কীভাবে পানি ঢেলেছি? তিনি যোগ করেন, এই আন্নার অর্থ 'কোন দিক থেকে'-ও হতে পারে। প্রমাণ হিসেবে কুমাইতের একটি পঙক্তি আনেন, যেখানে শব্দটি মিন আইনা, অর্থাৎ 'কোথা থেকে'-র পাশাপাশি বসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Rain, Named Plainly",
          "bn": "সোজা কথায় বৃষ্টি"
        },
        "p": [
          {
            "en": "On what the water is, the commentators consulted here do not differ. Ibn Kathir says only: We sent it down from the sky upon the earth, and the abridged English Ibn Kathir carries the same line. At-Tabari paraphrases: We sent down al-ghayth, the rain, from the sky, a sending down, and poured it upon the earth a pouring. Al-Qurtubi says the words mean al-ghayth and al-amtar, the rains, and al-Baghawi says simply that they mean al-matar, rain. No one consulted for this verse reads the water as anything other than what falls from above.",
            "bn": "পানিটা কী, এ নিয়ে এখানে দেখা তাফসীরগুলোর মধ্যে কোনো মতভেদ নেই। ইবন কাসীর শুধু বলেন: আমি তা আকাশ থেকে জমিনে নামিয়েছি। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণেও একই কথা। তাবারী আয়াতটি নিজের ভাষায় বলেন: আমি আকাশ থেকে গাইস, অর্থাৎ বৃষ্টি নামিয়েছি, পুরোদস্তুর নামিয়েছি, আর জমিনের উপর তা ঢেলেছি অঝোরে। কুরতুবীর মতে কথাটার অর্থ গাইস ও আমতার, মানে বৃষ্টিধারা। বাগাভী সংক্ষেপে বলেন, এর অর্থ মাতার, বৃষ্টি। এ আয়াতের জন্য যাঁদের তাফসীর আনা হয়েছে, তাঁদের কেউই এ পানিকে উপর থেকে নামা পানি ছাড়া অন্য কিছু বলে ব্যাখ্যা করেননি।"
          },
          {
            "en": "Two of them add a measure. As-Sa'di reads it as, We sent down rain upon the earth bi-kathra, in abundance, and Ma'arif al-Qur'an says that Allah showers down water abundantly from the clouds. Al-Muyassar keeps the verse's own doubled shape: We poured the water upon the earth a pouring. So what varies is the description of the falling, not the water: from the sky in Ibn Kathir and at-Tabari, from the clouds in Ma'arif al-Qur'an, plentiful in as-Sa'di. None of them sets one of these descriptions against another.",
            "bn": "দুজন এর সঙ্গে পরিমাণের কথা জুড়ে দেন। সা'দীর ভাষায়: আমি জমিনে বৃষ্টি নামিয়েছি বিকাসরা, অর্থাৎ প্রচুর পরিমাণে। মাআরিফুল কুরআন বলে, আল্লাহ মেঘ থেকে অঝোরে পানি বর্ষণ করেন। মুয়াসসার আয়াতের নিজের দ্বিরুক্তিটাই রেখে দেয়: আমি জমিনের উপর পানি ঢেলেছি, ঢালার মতো ঢালা। তাহলে পার্থক্য পানিতে নয়, বৃষ্টি নামার বর্ণনায়। ইবন কাসীর ও তাবারী বলেন আকাশ থেকে, মাআরিফুল কুরআন বলে মেঘ থেকে, আর সা'দী বলেন প্রচুর পরিমাণে। কেউ একটি বর্ণনাকে অন্যটির বিপরীতে দাঁড় করাননি।"
          },
          {
            "en": "At-Tabari's paraphrase is worth noticing for its shape. He does not stop at, We sent down the rain. He adds inzalan, a sending down, and then, We poured it upon the earth a pouring, so that the verse's pairing of a verb with a word of its own root appears twice in his sentence, once with his added verb and once with the verse's. In his wording the rain is both sent down and poured: it comes from above, and it comes onto the ground in quantity. The verse itself says only sababna, and he lets the two verbs explain each other.",
            "bn": "তাবারীর ব্যাখ্যার গড়নটা খেয়াল করার মতো। তিনি শুধু 'আমি বৃষ্টি নামিয়েছি' বলে থামেন না। সঙ্গে যোগ করেন ইনযালান, পুরোদস্তুর নামানো। তারপর বলেন, আমি তা জমিনে ঢেলেছি, ঢালার মতো ঢালা। ক্রিয়ার পাশে একই মূলের শব্দ বসানোর যে ধরন আয়াতে আছে, তা এভাবে তাঁর বাক্যে দুবার আসে: একবার তাঁর যোগ করা ক্রিয়া নিয়ে, একবার আয়াতের নিজের ক্রিয়া নিয়ে। তাঁর কথায় বৃষ্টিকে নামানোও হয়, ঢালাও হয়। তা উপর থেকে আসে, আর মাটিতে পড়ে প্রচুর পরিমাণে। আয়াতে আছে শুধু সাবাবনা। তাবারী দুই ক্রিয়াকে দিয়ে একে অপরের ব্যাখ্যা করিয়ে নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Meal's First Step",
          "bn": "খাবারের প্রথম ধাপ"
        },
        "p": [
          {
            "en": "Al-Muyassar reads the passage from 80:24 as one question and its answer. Let man reflect, it says: how did Allah create his food, which is the support of his life? Then it gives the answer in order, beginning here: that We poured the water upon the earth a pouring, and then split it open. Ma'arif al-Qur'an frames it the same way. Man is asked to consider the sources of his food, and the first source it names is water showered down from the clouds. On both readings, this verse is the first step of the meal.",
            "bn": "মুয়াসসার ৮০:২৪ থেকে শুরু হওয়া অংশটিকে এক প্রশ্ন আর তার জবাব হিসেবে পড়ে। তার ভাষায়: মানুষ ভেবে দেখুক, আল্লাহ কীভাবে তার খাবার সৃষ্টি করলেন, যে খাবারে তার জীবন টিকে থাকে। এরপর জবাবটা আসে ধাপে ধাপে, আর শুরু এখান থেকেই: আমি জমিনে পানি ঢেলেছি অঝোরে, তারপর তা চিরে দিয়েছি। মাআরিফুল কুরআনও বিষয়টি একইভাবে সাজায়। মানুষকে বলা হচ্ছে নিজের খাবারের উৎস নিয়ে ভাবতে, আর প্রথম যে উৎসের নাম আসে, তা মেঘ থেকে নামা পানি। দুই ব্যাখ্যাতেই এ আয়াত খাবারের প্রথম ধাপ।"
          },
          {
            "en": "Ibn Kathir, in the abridged English, calls the order in 80:24 a call to reflect upon Allah's favour. That word shapes how this verse is read. Rain is not offered here as a fact of weather to be recorded and passed over. It is offered as a favour, the first in a chain that the following verses go on to trace, beginning with 80:26. The man who was told to look is shown, before anything else, a gift that reached the ground without him. This article stays with that first link and leaves the rest of the chain to its own verses.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৮০:২৪-এর হুকুমকে বলে আল্লাহর অনুগ্রহ নিয়ে ভাবার ডাক। 'অনুগ্রহ' শব্দটিই ঠিক করে দেয় এ আয়াত কীভাবে পড়তে হবে। আয়াতটি বৃষ্টিকে আবহাওয়ার এমন কোনো খবর হিসেবে আনেনি, যা টুকে রেখে ভুলে যাওয়া যায়। এনেছে অনুগ্রহ হিসেবে। এ এক শিকলের প্রথম কড়া, যে শিকল পরের আয়াতগুলো ৮০:২৬ থেকে শুরু করে একে একে দেখায়। যাকে তাকাতে বলা হলো, তাকে সবার আগে দেখানো হয় এমন এক দান, যা মাটিতে পৌঁছেছে, অথচ তাতে তার কোনো হাত ছিল না। এই লেখা সেই প্রথম কড়াতেই থাকছে। বাকিটা রইল নিজ নিজ আয়াতের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Dead Ground, Raised Bodies",
          "bn": "মরা মাটি, জীবিত দেহ"
        },
        "p": [
          {
            "en": "The same Ibn Kathir passage gives a second reason for the look. The order to look at one's food, he says, also contains an evidence: from the vegetation's coming to life out of the lifeless earth, that bodies can be brought to life after they have become decayed bones and scattered dust. The rain of 80:25 is where that coming to life starts. Before the water, the ground is the lifeless earth of his sentence. After it, the next verse can speak of that earth being split open.",
            "bn": "ইবন কাসীরের একই অংশে তাকানোর দ্বিতীয় একটি কারণও আছে। তাঁর কথায় নিজের খাবারের দিকে তাকানোর হুকুমের ভেতরে একটা প্রমাণও লুকিয়ে আছে। নিষ্প্রাণ মাটি থেকে উদ্ভিদ যেভাবে জেগে ওঠে, তা দেখায় যে পচে যাওয়া হাড় আর ছড়িয়ে পড়া ধুলো হয়ে যাওয়ার পরও দেহকে আবার জীবিত করা যায়। ৮০:২৫-এর বৃষ্টি থেকেই এই জেগে ওঠার শুরু। পানির আগে মাটি তাঁর বাক্যের সেই নিষ্প্রাণ মাটি। পানির পরেই পরের আয়াত সেই মাটি চিরে যাওয়ার কথা বলতে পারে।"
          },
          {
            "en": "Read this way, the verse looks back as well as forward. 80:22 has just said, then when He wills He will resurrect him. The passage then turns from the grave to the field, and the turn is not a change of subject. Ma'arif al-Qur'an notes that after these blessings the surah concludes with the mention of the Resurrection. The water poured on dead ground sits between the two: a coming to life that can be watched every season, set inside an argument for a raising that has not yet been seen.",
            "bn": "এভাবে পড়লে আয়াতটি সামনের দিকে যেমন তাকায়, পেছনের দিকেও তাকায়। ৮০:২২ সবে বলেছে: তারপর তিনি যখন চাইবেন, তাকে আবার জীবিত করবেন। এরপর কথা কবর থেকে সরে আসে খেতের দিকে, কিন্তু বিষয় বদলায় না। মাআরিফুল কুরআন লক্ষ করে, এসব নিয়ামতের পর সূরাটি শেষ হয় কিয়ামতের উল্লেখ দিয়ে। মরা মাটিতে ঢালা পানির জায়গা এ দুইয়ের মাঝখানে। এ এমন এক জেগে ওঠা, যা প্রতি মৌসুমে চোখে দেখা যায়। আর তাকে রাখা হয়েছে এমন এক পুনরুত্থানের যুক্তির ভেতরে, যে পুনরুত্থান এখনো কেউ দেখেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Absent From the Pages",
          "bn": "পাতায় যা নেই"
        },
        "p": [
          {
            "en": "Some things are missing here, and it is better to say so than to fill the space. None of the commentators consulted for this verse attaches a hadith to it, so none is given. No occasion of revelation is reported for 80:25 in the texts consulted, and none of them brings in another verse to explain it. They keep to three matters: how the first word is read, what the water is, and where the verse stands in the passage. An article on four words can stay within what those pages actually hold.",
            "bn": "এখানে কিছু জিনিস নেই, আর ফাঁক ভরানোর চেয়ে সেটা খোলাখুলি বলাই ভালো। এ আয়াতের জন্য যাঁদের তাফসীর আনা হয়েছে, তাঁদের কেউ এর সঙ্গে কোনো হাদিস যুক্ত করেননি। তাই এখানেও কোনো হাদিস দেওয়া হলো না। সংগৃহীত লেখাগুলোতে ৮০:২৫-এর কোনো শানে নুযূল বর্ণিত নেই। ব্যাখ্যার জন্য অন্য কোনো আয়াতও কেউ টেনে আনেননি। তাঁরা থেকেছেন তিনটি বিষয়ে: প্রথম শব্দটি কীভাবে পড়া হয়, পানিটা কী, আর পুরো অংশে আয়াতটির জায়গা কোথায়। চার শব্দের একটি আয়াত নিয়ে লেখা ওই পাতাগুলোর সীমার ভেতরেই থাকতে পারে।"
          },
          {
            "en": "Rain itself has fuller treatment elsewhere in this module, and this article does not repeat it. The entry on 78:14 takes up the clouds, the winds and the word thajjaj, water pouring on, and the entries on 15:22, 25:48, 50:9 and 56:69 each dwell on rain from their own verses. What 80:25 adds is its position. Here the water is not one item in a list of signs overhead. It is the opening answer given to a man who was told to look at his plate, and the next verse, 80:26, carries that answer into the ground.",
            "bn": "বৃষ্টি নিয়ে বিস্তারিত আলোচনা এই মডিউলের অন্য জায়গায় আছে, এ লেখা তার পুনরাবৃত্তি করবে না। ৭৮:১৪-এর লেখায় আছে মেঘ, বাতাস আর সাজ্জাজ শব্দের কথা, অর্থাৎ একটানা ঝরতে থাকা পানি। ১৫:২২, ২৫:৪৮, ৫০:৯ ও ৫৬:৬৯-এর লেখাগুলো যার যার আয়াত থেকে বৃষ্টি নিয়ে ভেবেছে। ৮০:২৫ নতুন যা যোগ করে, তা তার অবস্থান। এখানে পানি আকাশের নিদর্শনের তালিকার একটি জিনিস মাত্র নয়। যাকে নিজের থালার দিকে তাকাতে বলা হয়েছিল, তার জন্য এটা প্রথম জবাব। আর পরের আয়াত ৮০:২৬ সেই জবাবকে মাটির ভেতরে নিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Under the Next Rain",
          "bn": "পরের বৃষ্টির নিচে"
        },
        "p": [
          {
            "en": "The verse gives the next rainfall a sentence. When the sky opens, Ibn Kathir's gloss is the plainest thing to say inwardly: this was sent down from the sky upon the earth. As-Sa'di's adds that it came in abundance, and al-Muyassar's that it came poured. Rain is easy to meet with annoyance, as a spoiled plan or a wet journey. The verse asks for a second look at the same water, as the first step of food that has not yet grown and of a meal that someone has not yet eaten.",
            "bn": "আয়াতটি পরের বৃষ্টির জন্য একটা বাক্য দিয়ে রাখে। আকাশ ভেঙে বৃষ্টি নামলে মনে মনে বলার সবচেয়ে সহজ কথা ইবন কাসীরের ব্যাখ্যাটাই: এ পানি আকাশ থেকে জমিনে নামানো হয়েছে। সা'দীর ব্যাখ্যা মনে করিয়ে দেয়, এসেছে প্রচুর পরিমাণে। আর মুয়াসসারের ব্যাখ্যা বলে, তা ঢেলে দেওয়া হয়েছে। বৃষ্টি এলে বিরক্ত হওয়া সহজ: পরিকল্পনা ভেস্তে গেল, পথে ভিজতে হলো। আয়াতটি সেই একই পানির দিকে আরেকবার তাকাতে বলে। এ পানি এমন খাবারের প্রথম ধাপ, যা এখনো জন্মায়নি, এমন এক বেলার খাবারের শুরু, যা কেউ এখনো খায়নি।"
          },
          {
            "en": "The two readings of the first word leave something to keep as well. Read inna, the verse is a fresh declaration: truly, We poured. Read anna, it is the very thing the eater was told to look at: look at this, that We poured. At-Tabari accepts both as correct, and between them the verse is both a statement to hear and a sight to see. A believer can hold both when water comes down: a word from Allah about what He did, and a scene to look at until it is understood.",
            "bn": "প্রথম শব্দের দুই কিরাআত থেকেও কিছু নিয়ে রাখার আছে। ইন্না পড়লে আয়াতটি নতুন এক ঘোষণা: নিশ্চয়ই আমি ঢেলেছি। আন্না পড়লে এটা ঠিক সেই জিনিস, যার দিকে খাবার খাওয়া মানুষকে তাকাতে বলা হয়েছে: দেখো, আমি যে ঢেলেছি। তাবারী দুটিকেই সঠিক মেনেছেন। দুটি মিলে আয়াতটি একই সঙ্গে শোনার মতো কথা, আবার দেখার মতো দৃশ্য। পানি নামলে একজন মুমিন দুটোকেই ধরে রাখতে পারেন। একদিকে নিজের কাজ সম্পর্কে আল্লাহর কথা, অন্যদিকে এমন এক দৃশ্য, যার দিকে তাকিয়ে থাকতে হয় বুঝে না ওঠা পর্যন্ত।"
          },
          {
            "en": "Thanks for that pouring can take a practical shape. Food that reached you without your labour at its very start can be eaten without waste and shared with someone whose plate is thinner than yours. Saying bismillah before the meal and alhamdulillah after it puts the verse into two words at the table. The next verse will take the water into the ground. For now this verse holds a person at the moment of the pouring, before anything has grown, and asks him to know whose pouring it was.",
            "bn": "এই ঢেলে দেওয়ার শোকর হাতে-কলমেও আদায় করা যায়। যে খাবারের একেবারে শুরুতে আপনার কোনো পরিশ্রম ছিল না, তা অপচয় না করে খাওয়া যায়। যার থালা আপনার চেয়ে হালকা, তার সঙ্গে ভাগ করে নেওয়া যায়। খাওয়ার আগে বিসমিল্লাহ আর পরে আলহামদুলিল্লাহ বললে আয়াতটি দুই শব্দে খাবারের টেবিলে এসে বসে। পরের আয়াত পানিকে মাটির ভেতরে নিয়ে যাবে। আপাতত এ আয়াত মানুষকে থামিয়ে রাখে ঢালার মুহূর্তে, কিছু জন্মানোর আগে। আর জানতে বলে, ঢেলেছিলেন কে।"
          }
        ]
      }
    ]
  },
  "80:33": {
    "sections": [
      {
        "h": {
          "en": "From the Pasture to the Blast",
          "bn": "চারণভূমি থেকে মহাধ্বনিতে"
        },
        "p": [
          {
            "en": "Fa-idha ja'ati as-sakhkha: so when the deafening blast comes. Three Arabic words. The verses just before, 80:24 to 80:32, have walked the reader through a harvest: rain poured down, the earth split open, grain, grapes and herbage, olives and palms, dense gardens, fruit and grass, all of it provision for people and for their livestock. Then the small particle fa turns the page, and the next thing named is not food but a sound. The sentence that began with idha, when, is left open at the end of the verse.",
            "bn": "ফা ইযা জা-আতিস সাখখাহ: অতঃপর যখন আসবে কান-ফাটানো সেই ধ্বনি। আরবিতে মাত্র তিনটি শব্দ। ঠিক আগে ৮০:২৪ থেকে ৮০:৩২ পর্যন্ত আয়াতগুলো পাঠককে নিয়ে গেছে এক ফসলের মাঠে। আকাশ থেকে বৃষ্টি নেমেছে, মাটি ফেটে বেরিয়েছে শস্য, আঙুর, শাকসবজি, যয়তুন, খেজুর, ঘন বাগান, ফল আর ঘাস। সবই মানুষ আর তাদের গবাদিপশুর জীবিকা। তারপর ছোট্ট অব্যয় ফা পাতা উল্টে দেয়। এবার যা আসে তা খাবার নয়, এক আওয়াজ। ইযা, অর্থাৎ যখন, দিয়ে শুরু হওয়া বাক্যটি আয়াতের শেষে খোলা থেকে যায়।"
          },
          {
            "en": "Two commentators name the turn in a single clause. Al-Baghawi opens his comment with: then He mentioned the Resurrection. Al-Qurtubi gives the reason for the order: having mentioned the matter of livelihood, Allah mentioned the matter of the return, so that they would provision themselves for it with righteous deeds, and with spending from what He had favoured them with. On that reading the harvest and the blast belong to one argument. The provision just listed is the very thing the listener is asked to send ahead.",
            "bn": "দুজন তাফসীরকার এই মোড়টা এক বাক্যেই ধরিয়ে দেন। বাগাভী তাঁর ব্যাখ্যা শুরু করেন এ কথায়: তারপর তিনি কিয়ামতের কথা আনলেন। কুরতুবী ক্রমটার কারণও বলেন। জীবিকার প্রসঙ্গ শেষ করে আল্লাহ আনলেন ফিরে যাওয়ার প্রসঙ্গ, যাতে মানুষ নেক আমল দিয়ে তার পাথেয় জোগাড় করে, আর তিনি যে নিয়ামত দিয়ে অনুগ্রহ করেছেন তা থেকে খরচ করে। এ পাঠে ফসল আর মহাধ্বনি একই কথার দুই অংশ। যে জীবিকার তালিকা এইমাত্র দেওয়া হলো, শ্রোতাকে বলা হচ্ছে সেটাই আগেভাগে পাঠিয়ে রাখতে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Root Heard Only Here",
          "bn": "যে ধাতু শুধু এখানেই"
        },
        "p": [
          {
            "en": "As-sakhkha is the only word in the Qur'an built from the root sad-kha-kha. The word-by-word data has no second occurrence. Three other words look alike on the page, al-sakhra in 18:63, sakhra in 31:16 and al-sakhr in 89:9, but they mean rock and come from a different root, sad-kha-ra. In form, as-sakhkha is a feminine active participle, the one that does the striking, and the verb before it, ja'at, she came, is feminine to agree with it. Ma'arif al-Qur'an renders it a deafening cry or shout.",
            "bn": "কুরআনে স-খ-খ ধাতু থেকে গড়া শব্দ আস-সাখখাহ ছাড়া আর একটিও নেই। শব্দ ধরে ধরে খুঁজলেও দ্বিতীয় কোনো ব্যবহার মেলে না। দেখতে কাছাকাছি আরও তিনটি শব্দ আছে: ১৮:৬৩ আয়াতে আস-সাখরাহ, ৩১:১৬ আয়াতে সাখরাহ আর ৮৯:৯ আয়াতে আস-সাখর। তবে সেগুলোর অর্থ পাথর, ধাতুও আলাদা, স-খ-র। গঠনের দিক থেকে আস-সাখখাহ স্ত্রীলিঙ্গ ইসমে ফায়েল, অর্থাৎ যে আঘাত হানে। তার আগের ক্রিয়া জা-আত, সে এল, সেও শব্দটির সঙ্গে মিল রেখে স্ত্রীলিঙ্গ। মাআরিফুল কুরআন এর অর্থ করে কান-ফাটানো চিৎকার বা হাঁক।"
          },
          {
            "en": "Al-Qurtubi gathers the lexicon. He quotes al-Khalil: as-sakhkha is a cry that strikes the ears, sakhkhan, meaning it deafens them by the force of its impact. The root sense of the word, he says, is a violent striking. It is also said to come from sakhkhahu bil-hajar, he struck him with a stone, and he adds a line of rajaz verse about a blow like the striking of rocks. He then cites an Arab saying, sakhkhathum as-sakhkha, the striker struck them, and glosses the striker there as a calamity.",
            "bn": "কুরতুবী অভিধানের কথাগুলো একত্র করেন। তিনি খলীলের উক্তি আনেন: আস-সাখখাহ এমন চিৎকার, যা কানে আঘাত হানে, তার আঘাতের প্রচণ্ডতায় কান বধির করে দেয়। তাঁর মতে শব্দটির মূল অর্থ প্রচণ্ড আঘাত। এ-ও বলা হয়েছে যে এটি এসেছে 'সাখখাহু বিল-হাজার' থেকে, মানে সে তাকে পাথর দিয়ে আঘাত করল। সঙ্গে তিনি রাজায ছন্দের একটি পঙক্তি আনেন, যেখানে পাথরে পাথরে ঠোকাঠুকির মতো আঘাতের কথা আছে। তারপর আরবদের একটি প্রবাদ উদ্ধৃত করেন: সাখখাতহুমুস সাখখাহ, আঘাতকারী তাদের আঘাত করল। তাঁর ব্যাখ্যায় সেখানে আঘাতকারী মানে বিপর্যয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name, a Blowing, a Cry",
          "bn": "একটি নাম, এক ফুঁক, এক চিৎকার"
        },
        "p": [
          {
            "en": "What is it that comes? The commentators consulted here give more than one answer, and this article does not choose among them. The first is from Ibn Abbas (RA), carried by at-Tabari with his own chain and repeated by Ibn Kathir: as-sakhkha is one of the names of the Day of Resurrection, which Allah has made great and has warned His servants of. On this gloss the word names the whole Day, and the verse announces the arrival of that Day itself.",
            "bn": "কী আসবে? যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলোতে উত্তর একটি নয়। এ লেখা তার কোনোটিকেই বেছে নেয় না। প্রথম উত্তর ইবন আব্বাস (রাঃ)-এর। তাবারী নিজের সনদে তা বর্ণনা করেন, ইবন কাসীরও উদ্ধৃত করেন: আস-সাখখাহ কিয়ামত দিবসের নামগুলোর একটি, যাকে আল্লাহ মহাগুরুতর করেছেন এবং যে সম্পর্কে তিনি তাঁর বান্দাদের সতর্ক করেছেন। এ ব্যাখ্যায় শব্দটি গোটা দিনটিরই নাম। আয়াতটি তখন সেই দিনেরই আগমনের ঘোষণা।"
          },
          {
            "en": "The second is at-Tabari's own suggestion, offered with a 'perhaps'. Perhaps, he says, the sound is what the word names, and if so, it ought to refer to the blowing of the Trumpet. Ibn Kathir reports it in the same tentative form: Ibn Jarir said, perhaps it is a name for the blowing into the Trumpet. Ma'arif al-Qur'an states it without hedging: the word refers to the blowing of the trumpet, which will be a deafening sound. Al-Qurtubi is more specific still: the cry from which the Resurrection comes about, and it is the second blowing.",
            "bn": "দ্বিতীয় উত্তর তাবারীর নিজের অনুমান, 'হয়তো' বলে। তিনি বলেন, হয়তো আওয়াজটাই এই শব্দের নাম। তা-ই যদি হয়, তবে এর অর্থ শিঙায় ফুঁক হওয়াই সংগত। ইবন কাসীরও একই দ্বিধা রেখে উদ্ধৃত করেন: ইবন জারীর বলেছেন, হয়তো এটি শিঙায় ফুঁকের নাম। মাআরিফুল কুরআন কোনো দ্বিধা ছাড়াই বলে, শব্দটি শিঙায় ফুঁক দেওয়াকেই বোঝায়, যা হবে কান-ফাটানো আওয়াজ। কুরতুবী আরও নির্দিষ্ট করে বলেন: এটি সেই চিৎকার, যা থেকে কিয়ামত সংঘটিত হবে, আর এটিই দ্বিতীয় ফুঁক।"
          },
          {
            "en": "The third reading names it a cry. Al-Baghawi: the cry of the Resurrection, so called because it strikes the hearing. The Muyassar: the cry of the raising of the dead on the Day of Resurrection, whose terror deafens the ears. As-Sa'di: the cry of the Resurrection, at whose terror the ears are struck and the hearts are shaken on that Day. The readings sit close to one another, yet each source words its own differently: a name of the Day, a blowing, a second blowing, a cry. This article keeps each one as its author gave it and ranks none of them above the rest.",
            "bn": "তৃতীয় পাঠে একে বলা হয় চিৎকার। বাগাভী বলেন: কিয়ামতের চিৎকার। এ নাম এজন্য যে তা শ্রবণশক্তিতে আঘাত হানে। মুয়াসসার বলে: কিয়ামত দিবসে মৃতদের জাগিয়ে তোলার চিৎকার, যার ভয়াবহতায় কান বধির হয়ে যায়। সা'দী বলেন: কিয়ামতের চিৎকার, যার ভয়াবহতায় সেদিন কান আঘাতপ্রাপ্ত হবে আর হৃদয় কেঁপে উঠবে। পাঠগুলো পরস্পরের কাছাকাছি, তবু প্রত্যেক উৎস নিজের মতো করে বলেছে: দিনের একটি নাম, এক ফুঁক, দ্বিতীয় ফুঁক, এক চিৎকার। এ লেখায় প্রত্যেকের কথা তাঁর নিজের ভাষাতেই রাখা হলো, কোনোটিকে অন্যটির উপরে স্থান দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Deafened, or Straining to Hear?",
          "bn": "বধির, নাকি উৎকর্ণ?"
        },
        "p": [
          {
            "en": "Behind the glosses sits a question of derivation, and the sources record a real disagreement. Al-Qurtubi's first explanation: the blast tasukhkhu the ears, that is, deafens them, so that they hear nothing except what the living are summoned with. Then he reports that some commentators read it the other way: tusikhu laha al-asma', the ears strain to listen to it, from asakha ila, to listen closely. He illustrates that usage with a line of poetry and with a narration about Friday, which bears on the word and not on this verse.",
            "bn": "ব্যাখ্যাগুলোর পেছনে আছে শব্দের উৎস নিয়ে একটি প্রশ্ন, আর উৎসগুলোতে সত্যিকারের মতভেদ লেখা আছে। কুরতুবীর প্রথম ব্যাখ্যা হলো, ধ্বনিটি কান বধির করে দেয়। ফলে জীবিতদের যে ডাকে ডাকা হবে, তা ছাড়া কান আর কিছুই শোনে না। এরপর তিনি জানান, কিছু তাফসীরকার উল্টো দিক থেকে পড়েছেন: কানগুলো একে শোনার জন্য উৎকর্ণ হয়ে থাকে। এ অর্থ এসেছে 'আসাখা ইলা' থেকে, মানে মন দিয়ে কান পেতে শোনা। এ ব্যবহারের নমুনা হিসেবে তিনি একটি কবিতার পঙক্তি আর জুমার দিন সম্পর্কে একটি বর্ণনা আনেন। বর্ণনাটি শব্দের ব্যবহার দেখায়, এ আয়াতের সঙ্গে যুক্ত নয়।"
          },
          {
            "en": "Al-Qurtubi does not leave the two side by side for long. Some scholars, he reports, said the second view is accepted only out of deference to the early authorities, while the language itself requires the first. At-Tabari's own text, as consulted for this verse, leans the other way: he reckons the word is taken from sakha li-sawtihi, he listened to his voice, while noting that the form usually said for that is musikh. Al-Qurtubi, quoting at-Tabari, gives instead a derivation from sakhkha, to deafen.",
            "bn": "কুরতুবী দুটি মত বেশিক্ষণ পাশাপাশি রাখেন না। তিনি জানান, কিছু আলেম বলেছেন, দ্বিতীয় মতটি মানা হয় কেবল পূর্বসূরিদের প্রতি সম্মান রেখে। ভাষার দাবি কিন্তু প্রথম মতটিই। এ আয়াতের জন্য সংগৃহীত তাবারীর নিজের লেখা আবার ঝুঁকেছে অন্য দিকে। তাঁর ধারণা, শব্দটি এসেছে 'সাখা লি-সাওতিহি' থেকে, মানে সে তার কথায় কান পাতল। সঙ্গে তিনি মনে করিয়ে দেন, ওই অর্থে প্রচলিত রূপ হলো মুসীখ। অথচ কুরতুবী তাবারীকে উদ্ধৃত করে দেন ভিন্ন উৎস: সাখখা থেকে, মানে বধির করা।"
          },
          {
            "en": "So the two texts disagree about what at-Tabari said, and this article records the mismatch without deciding between them. Al-Baghawi, meanwhile, softens the deafening view without abandoning it: the blast presses on the hearing so hard that it almost deafens it, takadu tusimmuha. The Muyassar and as-Sa'di keep to the deafening. What these four share is the ear as the place where the Day first lands.",
            "bn": "অর্থাৎ তাবারী কী বলেছেন, তা নিয়েই দুই লেখার মধ্যে অমিল। এ লেখা অমিলটুকু শুধু টুকে রাখে, কোনোটির পক্ষে রায় দেয় না। বাগাভী এদিকে বধির করার মতটা ছাড়েন না, শুধু একটু নরম করেন: ধ্বনিটি শ্রবণে এত জোরে চাপ দেয় যে প্রায় বধির করে ফেলে, তাকাদু তুসিম্মুহা। মুয়াসসার আর সা'দী বধির করার অর্থেই থাকেন। এই চারজনের মধ্যে মিল একটাই। দিনটি প্রথম এসে নামে কানের উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Deaf to One World, Hearing Another",
          "bn": "এক জগতে বধির, অন্য জগতে শ্রোতা"
        },
        "p": [
          {
            "en": "Al-Qurtubi then quotes Ibn al-Arabi, who holds deafness and hearing together in the one word: as-sakhkha is the blast that leaves deafness behind, and yet it makes people hear, and this is a rare piece of eloquence. The passage goes on to two lines by poets of a recent generation, built on the same paradox. One addresses a herald of death: the announcer of your death deafened me, though he made me hear. The other speaks of a parting: their secret deafened me in the days they left; have you ever heard of a secret that leaves deafness?",
            "bn": "এরপর কুরতুবী ইবনুল আরাবীর কথা আনেন। তিনি বধিরতা আর শোনা, দুটোকেই একই শব্দে ধরে রাখেন। আস-সাখখাহ এমন ধ্বনি, যা বধিরতা রেখে যায়, অথচ সেটাই মানুষকে শোনায়। তাঁর মতে এ এক অনন্য বাকসৌন্দর্য। এরপর আলোচনায় আসে সাম্প্রতিক কালের কবিদের দুটি পঙক্তি, দুটোতেই একই বৈপরীত্য। একটিতে মৃত্যুসংবাদ বহনকারীকে বলা হচ্ছে: তোমার মৃত্যুর খবর যে আনল, সে আমাকে শুনিয়েও বধির করে দিল। অন্যটিতে বিচ্ছেদের কথা: বিদায়ের দিনগুলোতে তাদের গোপন কথা আমাকে বধির করেছে। এমন গোপন কথার কথা কি কখনো শুনেছ, যা বধিরতা রেখে যায়?"
          },
          {
            "en": "The passage in al-Qurtubi closes with an oath: by the life of Allah, the cry of the Resurrection makes people hear; it deafens them to this world and makes them hear the matters of the Hereafter. As-Sa'di, writing far more briefly, adds what fills that silence. The ears are struck and the hearts are shaken on that Day, because of the terrors people see and because of how badly they need the deeds they sent ahead. Hearing for this world shuts down, and hearing for the next, so long neglected, is forced open.",
            "bn": "কুরতুবীর এ অংশটি শেষ হয় একটি শপথে: আল্লাহর জীবনের কসম, কিয়ামতের চিৎকার মানুষকে শোনায়। দুনিয়ার ব্যাপারে তাদের বধির করে দেয়, আর আখিরাতের বিষয়গুলো শুনিয়ে দেয়। সা'দী অনেক অল্প কথায় জানান, সেই নীরবতা কী দিয়ে ভরে ওঠে। সেদিন কান আঘাতপ্রাপ্ত হবে, হৃদয় কেঁপে উঠবে। কারণ মানুষ চোখের সামনে ভয়াবহ সব দৃশ্য দেখবে, আর আগে পাঠানো আমলের প্রয়োজন তাদের কাছে হবে তীব্র। দুনিয়ার দিকে কান বন্ধ হয়ে যায়, আর আখিরাতের দিকে যে কান এতদিন অবহেলায় পড়ে ছিল, তা জোর করে খুলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Which of the Two Blowings",
          "bn": "দুই ফুঁকের কোনটি"
        },
        "p": [
          {
            "en": "Al-Qurtubi's phrase, the second blowing, assumes a first. None of the commentaries consulted for this verse attaches a hadith about the Trumpet to it, and this article does not import one. Two reports on the blowings are already set out in full elsewhere in this collection. The narration on the forty between the two blasts, Sahih al-Bukhari 4935, is discussed in the article on 78:18. The narration on the rajifa followed by the radifa, Jami' at-Tirmidhi 2457, is discussed in the article on 79:7. Neither is retold here.",
            "bn": "কুরতুবীর কথা 'দ্বিতীয় ফুঁক' ধরে নেয় যে প্রথম একটি ফুঁকও আছে। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর শিঙা নিয়ে কোনো হাদিস এখানে যুক্ত করেনি, আর এ লেখাও বাইরে থেকে কিছু আনছে না। দুই ফুঁক নিয়ে দুটি বর্ণনা এ সংকলনের অন্য জায়গায় পুরোপুরি দেওয়া আছে। দুই ফুঁকের মাঝে চল্লিশের বর্ণনা, সহীহ বুখারী ৪৯৩৫, আলোচিত হয়েছে ৭৮:১৮ আয়াতের লেখায়। রাজিফার পরে রাদিফার বর্ণনা, জামে তিরমিযী ২৪৫৭, আলোচিত হয়েছে ৭৯:৭ আয়াতের লেখায়। এখানে সেগুলো আবার বলা হলো না।"
          },
          {
            "en": "One thing the text itself shows without any commentary. The previous surah has a verse that opens with the same three elements: 79:34, fa-idha ja'ati at-tammatu al-kubra, so when the great overwhelming comes. There too a feminine noun with the definite article follows fa-idha ja'at, and there too a description of that Day follows. Two neighbouring surahs reach their account of the Last Day through the same doorway. The words chosen differ, one of overwhelming and one of a blow to the ear.",
            "bn": "একটা জিনিস কোনো তাফসীর ছাড়াই মূল পাঠ থেকে দেখা যায়। আগের সূরায় একটি আয়াত শুরু হয় হুবহু একই তিনটি উপাদান দিয়ে। ৭৯:৩৪ আয়াতে আছে: ফা ইযা জা-আতিত তাম্মাতুল কুবরা, অতঃপর যখন আসবে মহাবিপর্যয়। সেখানেও ফা ইযা জা-আত-এর পরে আসে আলিফ-লাম যুক্ত এক স্ত্রীলিঙ্গ বিশেষ্য, আর তার পরে সেই দিনের বর্ণনা। পাশাপাশি দুই সূরা শেষ দিনের বর্ণনায় ঢোকে একই দরজা দিয়ে। শুধু শব্দ আলাদা। একটিতে সব ছাপিয়ে যাওয়া বিপর্যয়, অন্যটিতে কানে আঘাত।"
          }
        ]
      },
      {
        "h": {
          "en": "A When Left Open",
          "bn": "যে 'যখন' খোলা থাকে"
        },
        "p": [
          {
            "en": "Idha, when, sets up a condition that expects an answer, and verse 80:33 ends before any answer comes. None of the commentaries consulted here names the answering clause in so many words. What the Muyassar does is run straight on. Its paraphrase reads: when the cry of the raising comes on the Day of Resurrection, whose terror deafens the ears, the Day a man flees, for the terror of that Day, from his brother, his mother and father, his wife and his sons, each of them having that Day an affair to occupy him.",
            "bn": "ইযা, অর্থাৎ যখন, এমন এক শর্ত তৈরি করে যার একটা জবাব আসার কথা। অথচ ৮০:৩৩ আয়াত শেষ হয়ে যায় সেই জবাব আসার আগেই। সংগৃহীত কোনো তাফসীর জবাবের অংশটি স্পষ্ট করে চিহ্নিত করেনি। মুয়াসসার এখানে না থেমে সোজা সামনে এগিয়ে যায়। তার ব্যাখ্যা এমন: কিয়ামত দিবসে যখন জাগিয়ে তোলার সেই চিৎকার আসবে, যার ভয়াবহতায় কান বধির হয়ে যায়, সেদিন মানুষ সেই দিনের ভয়ে পালাবে তার ভাই, মা-বাবা, স্ত্রী আর ছেলেদের কাছ থেকে। সেদিন তাদের প্রত্যেকের এমন এক অবস্থা হবে, যা তাকে ব্যস্ত রাখবে।"
          },
          {
            "en": "Ibn Kathir's abridged English likewise sets 80:33 at the head of one passage, under a heading about people fleeing their relatives. Neither source labels the grammar, and this article does not supply a label they did not give. It is enough to see that the verse is a threshold: it names what arrives and leaves the description of the Day to 80:34 to 80:37, the man fleeing his nearest kin and each soul taken up with its own affair. Those verses have their own entries and are not opened here.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও ৮০:৩৩ আয়াতকে একটি অংশের শুরুতে রাখে, যার শিরোনাম আত্মীয়দের কাছ থেকে মানুষের পালিয়ে যাওয়া। দুটি উৎসের কোনোটিই ব্যাকরণের নাম দেয়নি, আর তারা যে নাম দেয়নি, এ লেখাও তা বসায় না। এটুকু দেখাই যথেষ্ট যে আয়াতটি একটা চৌকাঠ। কী আসবে, তা সে জানায়। দিনটির বর্ণনা রেখে দেয় ৮০:৩৪ থেকে ৮০:৩৭ আয়াতের জন্য, যেখানে মানুষ সবচেয়ে কাছের আপনজনদের ছেড়ে পালায় আর প্রত্যেকে নিজের অবস্থা নিয়েই ব্যস্ত। সেই আয়াতগুলোর আলাদা আলোচনা আছে, এখানে সেগুলো খোলা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "While the Ears Still Choose",
          "bn": "কান যতক্ষণ নিজের বশে"
        },
        "p": [
          {
            "en": "Read with its neighbours, the verse sets two scenes side by side. In one, the ear is free: it can turn towards the call to prayer or away from it, linger over a recitation or over gossip, hear a reminder and let it pass. In the other, on al-Qurtubi's first explanation, the ear hears nothing but what the living are summoned with. The choosing belongs entirely to the first scene. The verse does not describe that freedom, but it places a limit on it, and the limit is close enough to be named.",
            "bn": "পাশের আয়াতগুলোর সঙ্গে মিলিয়ে পড়লে আয়াতটি দুটি দৃশ্য পাশাপাশি রাখে। প্রথম দৃশ্যে কান স্বাধীন। আজানের দিকে ফিরতে পারে, মুখও ফিরিয়ে নিতে পারে। তিলাওয়াতে ডুবে থাকতে পারে, গিবতেও। নসিহত শুনে পাশ কাটিয়ে যেতে পারে। দ্বিতীয় দৃশ্যে, কুরতুবীর প্রথম ব্যাখ্যা অনুযায়ী, জীবিতদের যে ডাকে ডাকা হবে তা ছাড়া কান আর কিছুই শোনে না। বেছে নেওয়ার পুরো সুযোগ শুধু প্রথম দৃশ্যে। আয়াতটি সেই স্বাধীনতার বর্ণনা দেয় না, কিন্তু তার একটা সীমা টেনে দেয়। আর সেই সীমা এত কাছে যে তার নাম নেওয়া যায়।"
          },
          {
            "en": "Al-Qurtubi's reason for the order gives the practical side. The listener has just been shown his food and his animals' fodder, and is told about the return so that he provisions himself with righteous deeds and spends from what he was given. As-Sa'di names the need that will be felt then: the need for deeds sent ahead. Neither asks for anything extraordinary. Both point to the plate and the purse already in hand. The blast will not be stopped; what reaches it from today is still open.",
            "bn": "ক্রমের পেছনে কুরতুবী যে কারণ দেখান, তাতেই আছে কাজের দিকটা। শ্রোতাকে এইমাত্র দেখানো হলো তার খাবার আর তার পশুর খাদ্য। তারপর ফিরে যাওয়ার কথা বলা হলো, যাতে সে নেক আমল দিয়ে পাথেয় জোগাড় করে, আর যা পেয়েছে তা থেকে খরচ করে। সা'দী জানান, সেদিন কোন প্রয়োজনটা টের পাওয়া যাবে: আগে পাঠানো আমলের প্রয়োজন। কেউই অসাধারণ কিছু চান না। দুজনেই দেখিয়ে দেন হাতে থাকা খাবারের থালা আর টাকার থলি। মহাধ্বনিকে থামানো যাবে না। তবে আজ থেকে তার কাছে কী পৌঁছাবে, সেটা এখনো খোলা।"
          }
        ]
      }
    ]
  },
  "80:37": {
    "sections": [
      {
        "h": {
          "en": "Six Words After the Flight",
          "bn": "পালানোর পরের ছয় শব্দ"
        },
        "p": [
          {
            "en": "Li-kulli imri'in minhum yawma'idhin sha'nun yughnihi. The verse is six Arabic words: for every man, of them, that Day, an affair which yughnihi. It closes a passage that opens with the Deafening Blast in 80:33 and continues through three verses in which a person flees from his brother, his mother and father, his wife and his children. Al-Muyassar explains 80:34 to 80:37 together: a man flees because of the terror of that Day, and each of them then has a matter that occupies him and keeps him from being occupied with anyone else.",
            "bn": "লিকুল্লিমরিইম মিনহুম ইয়াওমাইযিন শা'নুন ইউগনীহ। আয়াতটি আরবিতে ৬টি শব্দের: তাদের প্রত্যেক ব্যক্তির জন্য, সেদিন, এমন এক ব্যাপার, যা তাকে ইউগনীহ। এর শুরু ৮০:৩৩ আয়াতের কান-ফাটানো শব্দ দিয়ে। তারপর তিনটি আয়াতে মানুষ পালায় তার ভাই থেকে, মা-বাবা থেকে, স্ত্রী ও সন্তানদের থেকে। এই অংশটি শেষ হয় এ আয়াতে এসে। মুয়াসসার ৮০:৩৪ থেকে ৮০:৩৭ পর্যন্ত আয়াতগুলো একসঙ্গে ব্যাখ্যা করে। সেদিনের ভয়াবহতায় মানুষ পালায়, আর তাদের প্রত্যেকের এমন এক ব্যাপার থাকে, যা তাকে ব্যস্ত রাখে এবং অন্য কারও দিকে মন দিতে দেয় না।"
          },
          {
            "en": "Minhum, of them, ties the verse back to the people just named. At-Tabari spells this out: every man here means each of the man, his brother, his mother, his father and the rest of those mentioned in the passage. He glosses yawma'idhin as the Day of Resurrection, when the Blast comes. In these commentators' reading, then, the verse does not open a new scene. It turns back to the scene already in view and gives its cause: the people who were closest in this world now move apart, because each is taken up with something of his own.",
            "bn": "মিনহুম মানে তাদের মধ্য থেকে। এই শব্দটি আয়াতকে ঠিক আগে যাদের নাম এসেছে তাদের সঙ্গে বেঁধে দেয়। তাবারী কথাটা খুলে বলেন: প্রত্যেক ব্যক্তি বলতে এখানে বোঝানো হয়েছে সেই মানুষ, তার ভাই, তার মা, তার বাবা এবং এ অংশে যাদের কথা এসেছে তাদের সবাইকে। ইয়াওমাইযিন শব্দের অর্থ তিনি করেন কিয়ামতের দিন, যখন সেই প্রচণ্ড শব্দ আসবে। এ তাফসীরকারদের পাঠে আয়াতটি তাই নতুন কোনো দৃশ্য খোলে না। চোখের সামনের দৃশ্যটিতেই ফিরে গিয়ে তার কারণ বলে দেয়। দুনিয়ায় যারা সবচেয়ে কাছের ছিল, তারা সেদিন সরে যায়, কারণ প্রত্যেকে নিজের কিছু একটা নিয়ে ডুবে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Sha'n Is Made Of",
          "bn": "শা'ন শব্দের ভেতরে"
        },
        "p": [
          {
            "en": "The commentators gloss sha'n, the affair, in several words. At-Tabari says amrun, a matter, and so does al-Muyassar. Al-Qurtubi says halun, a state or condition, one that occupies him away from his relatives. Ibn Kathir puts it as a whole clause: he is in a shughl shaghil, an occupation that keeps him occupied, away from everyone else. At-Tabari also reports from Ibn Zayd that it is an affair that has taken him up away from his companion. Each of them describes sha'n by what it does to the person who carries it.",
            "bn": "শা'ন মানে ব্যাপার। তাফসীরকারেরা শব্দটির ব্যাখ্যা দেন কয়েক রকম শব্দে। তাবারী বলেন আমর, অর্থাৎ বিষয়। মুয়াসসারও একই শব্দ নেয়। কুরতুবী বলেন হাল, মানে অবস্থা, যা তাকে আত্মীয়স্বজন থেকে অন্যমনস্ক করে রাখে। ইবন কাসীর পুরো এক বাক্যে বলেন: সে এমন এক ব্যস্ততায় আছে, যে ব্যস্ততা তাকে আটকে রাখে, অন্য সবার দিক থেকে ফিরিয়ে রাখে। তাবারী ইবন যাইদের কথাও আনেন: এমন ব্যাপার, যা তাকে তার সঙ্গী থেকে সরিয়ে নিজের মধ্যে টেনে নিয়েছে। প্রত্যেকেই শা'ন চেনান তার কাজ দিয়ে: যে মানুষের উপর এটি আসে, তাকে এটি কী করে।"
          },
          {
            "en": "The English renderings move along the same line. The translation shown with this verse in the app has a matter adequate for him. The abridged English Ibn Kathir has enough to make him careless of others, and explains it as being preoccupied with his own business and distracted from the affairs of others. Ma'arif al-Qur'an, on the passage as a whole, says each person will be worried about himself, and that the horror will make people heedless of anything around them. Matter, state, absorbing occupation: the words differ, and the article keeps all of them.",
            "bn": "ইংরেজি অনুবাদগুলোও একই দিকে যায়। অ্যাপে এ আয়াতের সঙ্গে যে ইংরেজি অনুবাদ দেখানো হয়, তাতে আছে: তার জন্য যথেষ্ট এক বিষয়। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে আছে: অন্যদের প্রতি উদাসীন করে দেওয়ার মতো যথেষ্ট কিছু। সেখানে ব্যাখ্যা দেওয়া হয়েছে এভাবে: সে নিজের কাজে ডুবে থাকবে, অন্যের ব্যাপার থেকে মন সরে যাবে। মাআরিফুল কুরআন পুরো অংশটির আলোচনায় বলে, প্রত্যেকে নিজেকে নিয়ে দুশ্চিন্তায় থাকবে, আর আতঙ্ক মানুষকে চারপাশের সবকিছু থেকে বেখেয়াল করে দেবে। বিষয়, অবস্থা, ডুবিয়ে রাখা ব্যস্ততা: শব্দ আলাদা, আর এ লেখা সবগুলোই রেখে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Occupied, Held Back, Absorbed",
          "bn": "ব্যস্ত, আটকানো, নিমগ্ন"
        },
        "p": [
          {
            "en": "Then the verb, yughnihi. At-Tabari keeps it and adds a clause: a matter that yughnihi and occupies him away from the affair of others. Al-Baghawi gives only the second half: it occupies him away from the affair of others. Al-Muyassar adds a second verb: it occupies him and prevents him from being occupied with anyone else. At-Tabari also reports from Qatada that there came to every person what occupies him away from people. In all of these, the gloss turns on one root, the verb of being occupied, and the direction is always away from others.",
            "bn": "এবার ক্রিয়াপদ, ইউগনীহ। তাবারী শব্দটি রেখে দেন, সঙ্গে একটি বাক্যাংশ যোগ করেন: এমন বিষয়, যা তাকে ইউগনীহ এবং অন্যের ব্যাপার থেকে সরিয়ে ব্যস্ত রাখে। বাগাভী শুধু দ্বিতীয় অংশটুকু বলেন: অন্যের ব্যাপার থেকে সরিয়ে তাকে ব্যস্ত রাখে। মুয়াসসার আরেকটি ক্রিয়া জুড়ে দেয়: তাকে ব্যস্ত রাখে, আর অন্য কাউকে নিয়ে ব্যস্ত হতে বাধা দেয়। কাতাদা থেকে তাবারী বর্ণনা করেন: প্রত্যেক মানুষের কাছে এমন কিছু এসে পৌঁছেছে, যা তাকে মানুষ থেকে সরিয়ে ব্যস্ত রাখে। এসব ব্যাখ্যার কেন্দ্রে একটাই ধাতু, ব্যস্ত হওয়ার ক্রিয়া। আর তার দিক সবসময় অন্যদের থেকে দূরে।"
          },
          {
            "en": "As-Sa'di goes inside the person: his own self has occupied him, he is anxious for its release, and he has no glance to spare for anything else. None of the consulted Arabic commentators glosses yughnihi with a word for sufficing; all of them reach for the verb of occupying. The words adequate and enough come from the English translations quoted above. Both are set down here as they stand, the commentators' occupies him and the translators' is enough for him, and the article does not choose between them.",
            "bn": "সা'দী মানুষের ভেতরে ঢুকে দেখান: তার নিজের নাফস তাকে ব্যস্ত করে রেখেছে, সেটাকে কীভাবে মুক্ত করবে সেই চিন্তায় সে অস্থির, অন্য কিছুর দিকে ফিরে তাকানোর ফুরসত তার নেই। এখানে যেসব আরবি তাফসীর দেখা হয়েছে, তার কোনোটিই ইউগনীহ শব্দের অর্থ 'যথেষ্ট হওয়া' দিয়ে করেনি। সবাই নিয়েছেন ব্যস্ত রাখার ক্রিয়া। 'যথেষ্ট' কথাটি এসেছে উপরে উদ্ধৃত ইংরেজি অনুবাদগুলো থেকে। তাফসীরকারদের 'ব্যস্ত রাখে' আর অনুবাদকদের 'তার জন্য যথেষ্ট', দুটোই এখানে যেমন আছে তেমন রাখা হলো। এ লেখা কোনোটিকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Dot, Two Readings",
          "bn": "এক নুকতায় দুই কিরাআত"
        },
        "p": [
          {
            "en": "Al-Qurtubi records that the reading of the general body of reciters is yughnihi, with the dotted letter ghayn, and he glosses it as a state that occupies him away from his relatives. He then names a second reading: Ibn Muhaysin and Humayd read ya'nihi, with a fatha on the ya and the undotted letter 'ayn. On that reading the sense, in his words, is that his own affair concerns him. The two words differ in a single dot on one letter, and al-Qurtubi gives each its meaning without setting one against the other.",
            "bn": "কুরতুবী জানান, সাধারণ কারীদের কিরাআত হলো ইউগনীহ, নুকতাওয়ালা গাইন অক্ষর দিয়ে। এর অর্থ তিনি করেন এমন অবস্থা, যা তাকে আত্মীয়স্বজন থেকে সরিয়ে ব্যস্ত রাখে। এরপর তিনি দ্বিতীয় এক কিরাআতের কথা বলেন। ইবন মুহাইসিন ও হুমাইদ পড়েছেন ইয়া'নীহ, ইয়া অক্ষরে যবর আর নুকতাবিহীন আইন দিয়ে। এই পাঠে অর্থ দাঁড়ায়, তাঁর ভাষায়, তার নিজের ব্যাপারই তাকে ভাবিয়ে রাখে। দুটি শব্দের তফাত একটি অক্ষরের একটি নুকতায়। কুরতুবী প্রত্যেকটির অর্থ আলাদা করে দেন, একটিকে অন্যটির বিপরীতে দাঁড় করান না।"
          },
          {
            "en": "He adds a gloss of ya'nihi from al-Qutabi: it turns him and holds him back from his kin. Al-Qutabi supports it from ordinary speech, where one says i'ni 'anni wajhaka, turn your face away from me, and i'na 'an as-safih, turn away from the fool. Al-Qurtubi then quotes a line of the poet Khufaf: the war of Banu Malik will turn you from obscenity and folly in the gathering. On both readings, as al-Qurtubi glosses them, the person is held by his own affair and turned from those around him.",
            "bn": "ইয়া'নীহ শব্দের একটি ব্যাখ্যা তিনি আনেন কুতাবী থেকে: তাকে ঘুরিয়ে দেয়, আত্মীয়দের দিক থেকে আটকে রাখে। কুতাবী এর সমর্থন আনেন প্রচলিত আরবি বুলি থেকে। লোকে বলে, ই'নি আন্নী ওয়াজহাকা, আমার দিক থেকে তোমার মুখ ফিরিয়ে নাও। আরও বলে, ই'না আনিস সাফীহ, মূর্খের দিক থেকে মুখ ফেরাও। কুরতুবী এরপর কবি খুফাফের এক চরণ তুলে দেন: বনু মালিকের যুদ্ধ তোমাকে মজলিসের অশ্লীলতা আর মূর্খতা থেকে ফিরিয়ে রাখবে। কুরতুবীর ব্যাখ্যা অনুযায়ী দুই কিরাআতেই মানুষটি নিজের ব্যাপারে আটকে আছে, আর আশপাশের মানুষ থেকে তার মুখ ফেরানো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Woman's Question, Answered",
          "bn": "এক নারীর প্রশ্ন, আয়াতে উত্তর"
        },
        "p": [
          {
            "en": "Ibn Kathir and al-Qurtubi both bring a narration from Ibn Abbas (RA) in which the Prophet ﷺ answers with this verse. At-Tirmidhi's wording, quoted whole: Ibn Abbas narrated that the Prophet ﷺ said: \"You will be gathered barefoot, naked and uncircumcised.\" A woman said: \"Will we see\" or \"look at each other's nakedness?\" He said: \"O so-and-so! Every man among them on that Day will have enough to make him careless of others.\" At-Tirmidhi graded it: this hadith is hasan sahih, and it has been narrated by more than one route from Ibn Abbas.",
            "bn": "ইবন কাসীর ও কুরতুবী দুজনেই ইবন আব্বাস (রাঃ) থেকে একটি বর্ণনা আনেন, যেখানে নবী ﷺ এ আয়াত দিয়েই জবাব দেন। তিরমিযীর পাঠ, পুরোটা: ইবন আব্বাস (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: \"তোমাদের সমবেত করা হবে খালি পায়ে, বস্ত্রহীন ও খতনাবিহীন অবস্থায়।\" এক নারী বললেন: \"আমরা কি একে অপরের সতর দেখতে পাব,\" অথবা বললেন, \"তাকিয়ে দেখব?\" তিনি বললেন: \"হে অমুক! সেদিন তাদের প্রত্যেকের এমন এক ব্যাপার থাকবে, যা তাকে অন্যদের ব্যাপারে বেখেয়াল করে দেওয়ার জন্য যথেষ্ট।\" তিরমিযী এর মান সম্পর্কে বলেছেন: এ হাদিস হাসান সহীহ, আর ইবন আব্বাস (রাঃ) থেকে এটি একাধিক সূত্রে বর্ণিত হয়েছে।"
          },
          {
            "en": "Ibn Kathir sets this beside other routes. He cites Ibn Abi Hatim from Ibn Abbas, where the questioner is the Prophet's wife and the wording adds walking, with a variant answer: how occupied he will be from looking. He notes that an-Nasa'i, alone among the collectors, recorded it, and gives a further report of an-Nasa'i from Aisha (RA) with the answer in this verse. What matters for the verse is the shape: the question is about seeing, and the reply is that no one will be free to look.",
            "bn": "ইবন কাসীর এর পাশে অন্য সূত্রগুলোও রাখেন। ইবন আবী হাতিমের বর্ণনায়, ইবন আব্বাস (রাঃ) থেকে, প্রশ্নকারী নবী ﷺ-এর স্ত্রী। সেখানে খালি পায়ের সঙ্গে হেঁটে আসার কথাও আছে, আর উত্তরের একটি ভিন্ন পাঠ: দেখা থেকে সে কতই না ব্যস্ত থাকবে। তিনি জানান, সংকলকদের মধ্যে কেবল নাসাঈ এটি বর্ণনা করেছেন। আয়েশা (রাঃ) থেকে নাসাঈর আরেকটি বর্ণনাও তিনি আনেন, যার জবাবও এই আয়াত। আয়াত বোঝার জন্য আসল কথা হলো ঘটনার গড়ন। প্রশ্ন ছিল দেখা নিয়ে, আর উত্তর হলো: তাকানোর মতো অবসর সেদিন কারও থাকবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Too Grave for Looking",
          "bn": "তাকানোর চেয়ে গুরুতর"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens his comment on this verse with a narration he takes from Sahih Muslim. Muslim's wording, quoted whole: 'A'isha reported that she heard Allah's Messenger ﷺ as saying: \"The people would be assembled on the Day of Resurrection barefooted, naked and uncircumcised.\" I said: \"Allah's Messenger, will the male and the female be together on the Day and would they be looking at one another?\" Upon this Allah's Messenger ﷺ said: \"'A'isha, the matter would be too serious for them to look to one another.\"",
            "bn": "কুরতুবী এ আয়াতের আলোচনা শুরু করেন সহীহ মুসলিমের একটি বর্ণনা দিয়ে। মুসলিমের পাঠ, পুরোটা: আয়েশা (রাঃ) বলেন, আমি আল্লাহর রাসূল ﷺ-কে বলতে শুনেছি: \"কিয়ামতের দিন মানুষকে সমবেত করা হবে খালি পায়ে, বস্ত্রহীন ও খতনাবিহীন অবস্থায়।\" আমি বললাম: \"হে আল্লাহর রাসূল, নারী-পুরুষ সবাই একসঙ্গে থাকবে, একে অপরের দিকে তাকাবে?\" তিনি ﷺ বললেন: \"আয়েশা, ব্যাপারটা এতই কঠিন হবে যে একে অপরের দিকে তাকানোর প্রশ্নই উঠবে না।\""
          },
          {
            "en": "Muslim's wording does not recite the verse; it is al-Qurtubi who places it here, next to at-Tirmidhi's version, which does. It stands in Muslim's Sahih, and Muslim attaches no separate grading line to it. Ibn Kathir adds two further reports: one from Anas through A'idh ibn Shurayh, which at-Tabari also carries, and one from Sawda (RA), which al-Baghawi carries. He closes them with the remark that the hadith is very gharib from this route, and with Abu Hatim ar-Razi's verdict that A'idh is weak. Neither is quoted here.",
            "bn": "মুসলিমের পাঠে আয়াতটির উল্লেখ নেই। কুরতুবীই বর্ণনাটিকে এখানে এনেছেন, তিরমিযীর পাঠের পাশে, যেখানে আয়াতটি আছে। বর্ণনাটি সহীহ মুসলিমে আছে, আর মুসলিম এর সঙ্গে আলাদা কোনো মান-মন্তব্য জুড়ে দেননি। ইবন কাসীর আরও দুটি বর্ণনা আনেন। একটি আনাস (রাঃ) থেকে, আইয বিন শুরাইহের মাধ্যমে, যা তাবারীও এনেছেন। অন্যটি সাওদা (রাঃ) থেকে, যা বাগাভী এনেছেন। এগুলোর শেষে তিনি মন্তব্য করেন যে এই সূত্রে হাদিসটি অত্যন্ত গারীব, আর আবু হাতিম রাযীর মত উদ্ধৃত করেন যে আইয দুর্বল। এ দুটির কোনোটি এখানে উদ্ধৃত করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Room Left to Turn",
          "bn": "ফিরে তাকানোর ফুরসত নেই"
        },
        "p": [
          {
            "en": "Read with the glosses, the verse gives the fleeing of the previous verses a cause that sits inside each person. No commentator consulted here says that the closest people stop caring. At-Tabari, al-Baghawi and al-Muyassar all say instead that each is occupied away from the affair of others. As-Sa'di's phrase makes it personal: a self anxious for its own release. The question about seeing, in both narrations, gets the same kind of answer. Nobody is told that looking is forbidden. They are told that no one will have attention to spare for it.",
            "bn": "তাফসীরগুলোর আলোয় পড়লে আয়াতটি আগের আয়াতগুলোর পালানোর একটা কারণ দেখায়, আর সে কারণ প্রত্যেকের নিজের ভেতরে। এখানে দেখা কোনো তাফসীরকার বলেননি যে সবচেয়ে কাছের মানুষেরা মায়া হারিয়ে ফেলে। তাবারী, বাগাভী আর মুয়াসসার বরং বলেন, প্রত্যেকে অন্যের ব্যাপার থেকে সরে নিজের ব্যাপারে ব্যস্ত। সা'দীর কথায় ছবিটা আরও ব্যক্তিগত: নিজের মুক্তির চিন্তায় অস্থির এক নাফস। দুটি বর্ণনাতেই দেখা নিয়ে প্রশ্নের জবাব একই ধরনের। কাউকে বলা হয়নি যে তাকানো নিষেধ। বলা হয়েছে, সেদিকে মন দেওয়ার অবসর কারও থাকবে না।"
          },
          {
            "en": "That is a strong picture of how full a heart can become. In this world attention is spread thin: on what others are doing, on what they think, on small things that pass. The verse describes a Day when all of that is withdrawn and gathered into one affair. Each person is left with what is his. Nothing in the verse names what that affair is; the commentators consulted here describe it by its effect rather than its content. What it does is plain enough: it fills a person until there is nothing left over.",
            "bn": "একটা হৃদয় কতটা ভরে যেতে পারে, এ তার এক জোরালো ছবি। দুনিয়ায় আমাদের মনোযোগ ছড়িয়ে থাকে অনেক দিকে। অন্যরা কী করছে, কী ভাবছে, ছোটখাটো কত কিছু যা দুদিনেই মিলিয়ে যায়। আয়াতটি এমন এক দিনের বর্ণনা দেয়, যেদিন এসব গুটিয়ে এনে এক জায়গায় জড়ো করা হবে। প্রত্যেকের হাতে থাকবে কেবল তার নিজেরটুকু। ব্যাপারটা ঠিক কী, আয়াত তার নাম বলে না। এখানে দেখা তাফসীরকারেরাও তার বিবরণ দেন সে কী করে তা দিয়ে, ভেতরে কী আছে তা দিয়ে নয়। আর সে যা করে তা স্পষ্ট: মানুষকে এমনভাবে ভরে দেয় যে আর কিছুর জায়গা থাকে না।"
          },
          {
            "en": "Ma'arif al-Qur'an sets the scene on the Plain of Gathering, where all people have been assembled. In this world, it says, there are bonds between people that make one willing to lay down his life for another. On that Day the horror and chaos will be such that they cannot take care of anyone; even seeing another in front of him, a person will turn away. Read beside this verse, the turning away is not a verdict on those bonds. It is the measure of how heavy each person's own affair has become.",
            "bn": "মাআরিফুল কুরআন দৃশ্যটি দেখায় হাশরের ময়দানে, যেখানে সব মানুষকে একত্র করা হয়েছে। সেখানে বলা হয়েছে, দুনিয়ায় মানুষে মানুষে এমন বন্ধন থাকে যে একজন আরেকজনের জন্য জীবন দিতেও রাজি। কিন্তু সেদিনের আতঙ্ক আর বিশৃঙ্খলা এমন হবে যে কেউ কারও দেখভাল করতে পারবে না। চোখের সামনে কাউকে দেখলেও মানুষ মুখ ফিরিয়ে নেবে। এ আয়াতের পাশে রেখে পড়লে বোঝা যায়, মুখ ফেরানোটা ওই বন্ধনগুলোর বিরুদ্ধে কোনো রায় নয়। প্রত্যেকের নিজের ব্যাপার কত ভারী হয়ে উঠেছে, এ তারই মাপ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Affair Worth Tending Now",
          "bn": "আজই যে ব্যাপারের যত্ন নিতে হয়"
        },
        "p": [
          {
            "en": "If each person will have an affair that fills him on that Day, the useful question is what that affair will contain. That depends on what is gathered before it. The verse does not ask anyone to care less for the people around them; it describes a Day, it does not legislate for this one. What it can do is loosen the hold of what does not matter. A worry that occupies an evening, a rivalry that occupies a year: set beside an affair that will fill a person wholly, they weigh very little.",
            "bn": "সেদিন যদি প্রত্যেকের এমন এক ব্যাপার থাকে যা তাকে পুরো ভরিয়ে রাখবে, তবে আসল প্রশ্ন হলো, সেই ব্যাপারের ভেতরে কী থাকবে। তা নির্ভর করে তার আগে কী জমা হচ্ছে তার উপর। আয়াতটি কাউকে আশপাশের মানুষের প্রতি যত্ন কমাতে বলে না। এখানে সেদিনের বর্ণনা, আজকের জন্য কোনো বিধান নয়। তবে যা গুরুত্বহীন, তার বাঁধন এ আয়াত আলগা করে দিতে পারে। যে দুশ্চিন্তা একটা সন্ধ্যা জুড়ে থাকে, যে রেষারেষি একটা বছর খেয়ে নেয়, মানুষকে পুরোপুরি ভরে দেওয়া সেই ব্যাপারের পাশে রাখলে এদের ওজন খুবই সামান্য।"
          },
          {
            "en": "A practical test follows from this. Much of what fills the mind on an ordinary day is other people's affairs: who said what, who has more, who fell short. The verse pictures a Day when every such thought is crowded out by one's own. Some of that crowding can begin now, by choice rather than by terror: less time auditing others, more time with one's own prayer, debts, promises and wrongs to put right. Turning to one's own affair here is not turning away from people; it is preparing what will be carried there.",
            "bn": "এখান থেকে একটা বাস্তব পরীক্ষা বেরিয়ে আসে। সাধারণ একটা দিনে মন ভরে থাকে অনেকটাই অন্যের ব্যাপারে। কে কী বলল, কার বেশি আছে, কে কোথায় কম করল। আয়াতটি এমন এক দিনের ছবি আঁকে, যেদিন নিজের ব্যাপার এসে এসব চিন্তাকে ঠেলে বের করে দেবে। সেই ঠেলে দেওয়ার কিছুটা আজই শুরু হতে পারে, ভয়ে নয়, নিজের ইচ্ছায়। অন্যের হিসাব কষায় কম সময়, আর বেশি সময় নিজের নামাজ, দেনা, ওয়াদা আর শুধরে নেওয়ার মতো ভুলগুলোর পেছনে। এখানে নিজের ব্যাপারে মন দেওয়া মানে মানুষ থেকে মুখ ফেরানো নয়। ওখানে যা নিয়ে যেতে হবে, তা গুছিয়ে নেওয়া।"
          },
          {
            "en": "There is also a turn in the hadith worth keeping. A natural fear was voiced, the fear of being seen, and the answer did not dismiss it; it set it inside a larger concern. Many present anxieties may be like that: real, but smaller than the one account each person will carry alone. Six words are enough to say it. Every one of them, that Day, will have an affair of his own. The time to give that affair its proper contents is the time before the Blast of 80:33, which is now.",
            "bn": "হাদিসটিতেও একটা মোড় আছে, যা মনে রাখার মতো। স্বাভাবিক এক ভয় মুখে আনা হয়েছিল, অন্যের চোখে পড়ার ভয়। উত্তরটি সেই ভয় উড়িয়ে দেয়নি। বরং তাকে বসিয়ে দিয়েছে আরও বড় এক চিন্তার ভেতরে। আজকের অনেক দুশ্চিন্তাও হয়তো এমনই: সত্যি, কিন্তু সেই হিসাবের চেয়ে ছোট, যা প্রত্যেককে একাই বইতে হবে। কথাটা বলতে ছয়টি শব্দই যথেষ্ট। সেদিন তাদের প্রত্যেকের থাকবে নিজের এক ব্যাপার। সেই ব্যাপারের ভেতরে ঠিক জিনিস ভরে দেওয়ার সময় হলো ৮০:৩৩ আয়াতের সেই প্রচণ্ড শব্দের আগের সময়টুকু, অর্থাৎ এখনই।"
          }
        ]
      }
    ]
  }
});
