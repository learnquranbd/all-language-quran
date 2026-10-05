/**
 * Tadabbur long-form articles — surah 50.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "50:2": {
    "sections": [
      {
        "h": {
          "en": "Eleven Words After an Oath",
          "bn": "শপথের পরে এগারো শব্দ"
        },
        "p": [
          {
            "en": "The verse has 11 Arabic words and moves in two steps. Bal 'ajibu an ja'ahum mundhirun minhum: rather, they wondered that a warner had come to them from among themselves. Then fa-qala al-kafiruna hadha shay'un 'ajib: so the disbelievers said, this is an amazing thing. The first clause reports a reaction; the second puts it into words. The verse follows directly on 50:1, Qaf, and the oath by the glorious Qur'an. It is followed by 50:3, where the deniers' next question begins, and that verse is left to its own place.",
            "bn": "আয়াতটিতে আরবি শব্দ ১১টি, আর কথা এগোয় দুই ধাপে। বাল আজিবূ আন জাআহুম মুনযিরুম মিনহুম: বরং তারা বিস্মিত হলো যে তাদের কাছে তাদেরই মধ্য থেকে একজন সতর্ককারী এসেছেন। তারপর ফাকালাল কাফিরূনা হাযা শাইউন আজীব: তখন কাফিররা বলল, এ তো এক আজব ব্যাপার! প্রথম অংশে মনের প্রতিক্রিয়া, দ্বিতীয় অংশে সেই প্রতিক্রিয়া মুখের কথা হয়ে বেরিয়ে আসে। আয়াতটি এসেছে ৫০:১ আয়াতের ঠিক পরে, যেখানে আছে ক্বাফ আর মহিমান্বিত কুরআনের শপথ। এর পরে ৫০:৩ আয়াতে অস্বীকারকারীদের পরের প্রশ্নটি শুরু হয়। সে আয়াত তার নিজের জায়গার জন্য রেখে দেওয়া হলো।"
          },
          {
            "en": "Ibn Kathir, in the English abridgement, says of Qaf only that it is one of the letters that open some surahs, as Mujahid and several others said, and refers the reader to his discussion at the start of al-Baqarah. On the oath, he says its subject is not stated in words but is understood from what follows: an emphasis on prophethood and resurrection, affirming that both are true. He sets beside it 38:1 and 38:2, Sad, by the Qur'an full of reminding; rather, those who disbelieve are in pride and opposition, where an oath on the Qur'an is likewise followed at once by bal.",
            "bn": "ইংরেজি সংক্ষিপ্ত ইবন কাসীরে ক্বাফ সম্পর্কে শুধু এটুকু আছে: এটি সেসব হরফের একটি, যা দিয়ে কিছু সূরা শুরু হয়। মুজাহিদসহ আরও কয়েকজন এ কথা বলেছেন, আর বিস্তারিত আলোচনার জন্য তিনি পাঠককে সূরা বাকারার শুরুর দিকে পাঠান। শপথ নিয়ে তাঁর কথা হলো, কী বিষয়ে শপথ, তা শব্দে বলা হয়নি, তবে পরের কথা থেকে বোঝা যায়। বিষয়টি নবুওয়াত আর পুনরুত্থান, দুটোই যে সত্য তার জোরালো ঘোষণা। পাশে তিনি রাখেন ৩৮:১ ও ৩৮:২ আয়াত: সোয়াদ, উপদেশে ভরা কুরআনের শপথ; বরং যারা কুফরি করেছে তারা অহংকার আর বিরোধিতায় ডুবে আছে। সেখানেও কুরআনের শপথের পরপরই এসেছে 'বাল'।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Rather Sets Aside",
          "bn": "'বরং' যে কথা সরিয়ে দেয়"
        },
        "p": [
          {
            "en": "At-Tabari reads the verse as Allah speaking to His Prophet ﷺ, and he spells out what the bal turns away from. The polytheists of your people, Muhammad, did not deny you because they did not know that you were truthful and in the right. Rather, they denied you out of wonder that a warner had come to them from among themselves, warning them of Allah's punishment. In his paraphrase the word dismisses one supposed reason, ignorance of the Prophet's truthfulness, and puts the real one in its place: surprise at who the warner was.",
            "bn": "তাবারী আয়াতটিকে পড়েন নবী ﷺ-এর প্রতি আল্লাহর সম্বোধন হিসেবে, আর 'বাল' কোন কথা থেকে মুখ ফিরিয়ে নিচ্ছে তা খুলে বলেন। হে মুহাম্মাদ, তোমার কওমের মুশরিকরা এ কারণে তোমাকে মিথ্যাবাদী বলেনি যে তারা জানত না তুমি সত্যবাদী ও হকের উপর আছ। বরং তারা তোমাকে অস্বীকার করেছে বিস্ময় থেকে: তাদেরই মধ্য থেকে একজন সতর্ককারী এসেছেন, যিনি তাদের আল্লাহর শাস্তির ভয় দেখান। তাঁর ব্যাখ্যায় শব্দটি একটি কল্পিত কারণ বাতিল করে দেয়। সেটি হলো নবী ﷺ-এর সত্যবাদিতা সম্পর্কে অজ্ঞতা। তার জায়গায় বসায় আসল কারণ: সতর্ককারী কে, সেটা দেখেই তারা অবাক।"
          },
          {
            "en": "Al-Qurtubi adds a point of grammar. The clause an ja'ahum stands in the accusative position, with an understood li-, so that it means because a warner had come to them. As-Sa'di approaches the bal from another side. He introduces the verse by observing that most people do not value Allah's favours as they deserve, and that this is why Allah said, rather, they wondered. In his reading what comes before the bal is a favour, and what follows it is a favour left unrecognised.",
            "bn": "কুরতুবী এখানে একটি ব্যাকরণের কথা যোগ করেন। 'আন জাআহুম' অংশটি নসবের অবস্থানে আছে, আগে একটি 'লি' উহ্য ধরে নিতে হয়। অর্থ দাঁড়ায়: কারণ তাদের কাছে একজন সতর্ককারী এসেছেন। সা'দী 'বাল'-কে দেখেন অন্য দিক থেকে। আয়াতের আলোচনা তিনি শুরু করেন এ কথা দিয়ে যে বেশির ভাগ মানুষ আল্লাহর নিয়ামতের যথাযথ কদর করে না, আর সে জন্যই আল্লাহ বললেন, বরং তারা বিস্মিত হলো। তাঁর পাঠে 'বাল'-এর আগে আছে এক নিয়ামত, আর পরে আছে সেই নিয়ামতকে না চেনার কাহিনি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warner Known by Lineage",
          "bn": "বংশে চেনা এক সতর্ককারী"
        },
        "p": [
          {
            "en": "The commentators gloss mundhir in slightly different ways. Al-Baghawi gives a single word, mukhawwif, one who makes people afraid. At-Tabari and the Muyassar both say he warned them of Allah's punishment. As-Sa'di widens it: he warns them of what harms them and commands them to what benefits them. Read together, the glosses show a warner as someone who looks ahead on behalf of others.",
            "bn": "মুনযির শব্দের ব্যাখ্যায় তাফসীরকারদের ভাষা একটু একটু আলাদা। বাগাভী একটিমাত্র শব্দ দেন: মুখাওয়িফ, অর্থাৎ যে ভয় দেখায়। তাবারী আর মুয়াসসার দুজনেই বলেন, তিনি তাদের আল্লাহর শাস্তির ভয় দেখাতেন। সা'দী অর্থটা আরও ছড়িয়ে দেন। তাঁর ভাষায়, যা তাদের ক্ষতি করবে তা থেকে তিনি সাবধান করেন, আর যা তাদের উপকারে আসবে তার আদেশ দেন। সব মিলিয়ে সতর্ককারী এমন একজন, যিনি অন্যদের হয়ে সামনে তাকান।"
          },
          {
            "en": "Then minhum, from among themselves. Al-Qurtubi names the warner as Muhammad ﷺ. Al-Baghawi explains the word by what they already knew: they knew his lineage, his truthfulness and his trustworthiness. As-Sa'di says he was of their own kind, so that they were able to receive from him and to come to know his circumstances and his truthfulness. Both commentators treat the closeness as a ground for trust. The very feature that the deniers found strange is, in these two readings, what made it possible to test the man and to believe him.",
            "bn": "এরপর মিনহুম, তাদেরই মধ্য থেকে। কুরতুবী সতর্ককারীর নাম বলেন: মুহাম্মাদ ﷺ। বাগাভী শব্দটি ব্যাখ্যা করেন তাদের জানা কথা দিয়ে। তাঁর বংশ তারা চিনত, তাঁর সত্যবাদিতা আর আমানতদারিও জানত। সা'দী বলেন, তিনি ছিলেন তাদেরই জাতের মানুষ, যাতে তারা তাঁর কাছ থেকে শিখতে পারে, তাঁর অবস্থা আর সত্যবাদিতা নিজেরাই জেনে নিতে পারে। দুজনের কাছেই এই নৈকট্য আস্থার ভিত্তি। যে বৈশিষ্ট্য দেখে অস্বীকারকারীরা অবাক হয়েছিল, এ দুই ব্যাখ্যায় সেটাই মানুষটিকে যাচাই করা আর বিশ্বাস করা সম্ভব করে তুলেছিল।"
          },
          {
            "en": "At-Tabari puts the other side of the contrast. A human being had come to them, one of the children of Adam, and no angel had brought them a message from Allah. He cites 25:7: why was an angel not sent down to him, to be a warner with him? His text has halla, and an editor's footnote gives the recited lawla. Ibn Kathir sets beside the verse 10:2, is it a wonder for people that We revealed to a man from among them? This is not strange, he says, for Allah chooses messengers from the angels and from people.",
            "bn": "তুলনার অন্য দিকটা তুলে ধরেন তাবারী। তাদের কাছে এসেছেন একজন মানুষ, আদমসন্তানদেরই একজন। আল্লাহর কাছ থেকে বার্তা নিয়ে কোনো ফেরেশতা আসেনি। তিনি উদ্ধৃত করেন ২৫:৭ আয়াত: তার কাছে কোনো ফেরেশতা কেন নাজিল হলো না, যে তার সঙ্গে সতর্ককারী হতো? তাবারীর পাঠে শুরুর শব্দটি 'হাল্লা', আর সম্পাদকের পাদটীকা জানায় যে তিলাওয়াতের শব্দ 'লাওলা'। ইবন কাসীর পাশে রাখেন ১০:২ আয়াত: মানুষের কাছে কি এটা আশ্চর্যের বিষয় যে আমি তাদেরই একজনের কাছে ওহি পাঠিয়েছি? তিনি বলেন, এতে আশ্চর্যের কিছু নেই, কারণ আল্লাহ ফেরেশতাদের মধ্য থেকেও রাসূল বাছাই করেন, মানুষের মধ্য থেকেও।"
          }
        ]
      },
      {
        "h": {
          "en": "Pronoun First, Then a Name",
          "bn": "প্রথমে সর্বনাম, পরে নাম"
        },
        "p": [
          {
            "en": "The verse begins with a pronoun, they wondered, and ends with a noun, the disbelievers said. Al-Qurtubi records two views of who the pronoun means. In the first, it refers to the disbelievers. In the second, introduced with it is said, it refers to the believers and the disbelievers together. On that second view, the next clause draws the line between them. Allah did not say fa-qalu, so they said, which would have kept the pronoun; He said fa-qala al-kafiruna, so the disbelievers said, naming the speakers by what they had done.",
            "bn": "আয়াতের শুরুতে সর্বনাম, 'তারা বিস্মিত হলো', আর শেষে নাম, 'কাফিররা বলল'। সর্বনামটি কাদের বোঝায়, এ নিয়ে কুরতুবী দুটি মত উল্লেখ করেন। প্রথম মতে, এর দ্বারা কাফিরদের বোঝানো হয়েছে। দ্বিতীয় মতটি তিনি আনেন 'বলা হয়' কথাটি দিয়ে: এখানে মুমিন আর কাফির উভয়েই উদ্দেশ্য। এ মত ধরলে পরের অংশটিই দুই দলকে আলাদা করে দেয়। আল্লাহ 'ফাকালূ', অর্থাৎ তারা বলল, বলেননি, যাতে সর্বনামটাই থেকে যেত। বলেছেন 'ফাকালাল কাফিরূন', কাফিররা বলল। বক্তাদের তিনি চিনিয়ে দিলেন তাদের নিজেদের কাজ দিয়েই।"
          },
          {
            "en": "Al-Qurtubi explains why. The wording, he says, shows how ugly their state and their act were, and describes them by their disbelief. He compares it to an ordinary sentence: so-and-so came to me and made me hear what I dislike, and the wrongdoer said to me, you are such and such. At-Tabari, without discussing the pronoun, names the speakers directly: those of Quraysh who denied Allah and His Messenger, when a warner from among themselves came to them.",
            "bn": "কেন এমন, কুরতুবী তাও বলেন। এ শব্দচয়ন তাদের অবস্থা আর কাজের কদর্যতা প্রকাশ করে, আর তাদের পরিচয় দেয় তাদের কুফরি দিয়ে। তিনি এর তুলনা দেন রোজকার একটা বাক্যের সঙ্গে: অমুক আমার কাছে এসে আমাকে অপ্রিয় কথা শোনাল, ওই ফাসিক আমাকে বলল, তুমি এই, তুমি সেই। তাবারী সর্বনামের আলোচনায় যান না, সরাসরি বক্তাদের পরিচয় দেন: কুরাইশের সেসব লোক, যারা আল্লাহ ও তাঁর রাসূলকে অস্বীকার করেছিল, যখন তাদেরই মধ্য থেকে একজন সতর্ককারী তাদের কাছে এলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Shades of a Marvel",
          "bn": "আজব শব্দের নানা রং"
        },
        "p": [
          {
            "en": "The key word of the verse is 'ajib, and al-Qurtubi lays out its family. Al-'ajib is the matter that one wonders at. 'Ujab, with a damma on the first letter, means the same. 'Ujjab, with the middle letter doubled, is stronger still, and u'juba, a marvel, belongs with them. In his account it is the doubled form that adds intensity. In this verse the disbelievers use the plain form, shay'un 'ajib, an amazing thing.",
            "bn": "আয়াতের মূল শব্দ আজীব, আর কুরতুবী এর পুরো পরিবারটা সাজিয়ে দেখান। আল-আজীব মানে এমন বিষয়, যা দেখে মানুষ অবাক হয়। প্রথম অক্ষরে পেশ দিয়ে উজাব, একই অর্থ। মাঝের অক্ষরে তাশদীদ দিয়ে উজ্জাব, এতে অর্থ আরও জোরালো। উ'জূবা, অর্থাৎ তাজ্জব ব্যাপার, এটাও একই পরিবারের। তাঁর বর্ণনায় অর্থের জোর বাড়ায় তাশদীদওয়ালা রূপটি। এ আয়াতে কাফিররা ব্যবহার করেছে সাধারণ রূপটি: শাইউন আজীব, এক আজব ব্যাপার।"
          },
          {
            "en": "Al-Baghawi glosses the word as gharib, strange. The Muyassar renders it as mustaghrab yuta'ajjab minhu, something regarded as strange and wondered at, and as-Sa'di also uses mustaghrab. All three glosses put the weight on strangeness, on something that falls outside what the speaker expects. At-Tabari unpacks the demonstrative hadha, this, in the speakers' own terms: the coming of a man from among us, of the children of Adam, with Allah's message to us. On his reading, the thing they called strange was the messenger's humanity.",
            "bn": "বাগাভী শব্দটির অর্থ করেন গরীব, অর্থাৎ অদ্ভুত। মুয়াসসার বলে মুস্তাগরাব ইউতাআজ্জাবু মিনহু, এমন বিষয় যাকে অদ্ভুত মনে করা হয় আর যা দেখে লোকে অবাক হয়। সা'দীও মুস্তাগরাব শব্দটিই ব্যবহার করেন। তিনজনের ব্যাখ্যাতেই জোর পড়ে অদ্ভুততার উপর, অর্থাৎ যা বক্তার প্রত্যাশার বাইরে। 'হাযা', অর্থাৎ 'এটা', কথাটি তাবারী খুলে বলেন বক্তাদের নিজেদের ভাষায়: আমাদেরই মধ্যকার একজন মানুষ, আদমসন্তান, আল্লাহর বার্তা নিয়ে আমাদের কাছে এসেছে। তাঁর ব্যাখ্যায় তারা যাকে অদ্ভুত বলেছিল, তা হলো রাসূলের মানুষ হওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Part Startled Them",
          "bn": "খটকাটা ঠিক কোথায়"
        },
        "p": [
          {
            "en": "Not every early authority located the surprise in the same place, and al-Qurtubi records three answers. Qatada said their wonder was that they had been called to a single God. Another view, given with it is said, holds that it came from being warned of the resurrection and the raising of the dead. Al-Qurtubi then states his own preference: what the Qur'an has stated explicitly is more fitting, namely that a warner had come to them from among themselves.",
            "bn": "বিস্ময়ের উৎস সবাই একই জায়গায় খোঁজেননি। কুরতুবী তিনটি উত্তর উল্লেখ করেন। কাতাদা বলেন, তাদের অবাক হওয়ার কারণ ছিল এক ইলাহর দিকে আহ্বান। আরেকটি মত তিনি আনেন 'বলা হয়' দিয়ে: পুনরুত্থান আর কবর থেকে ওঠানোর ব্যাপারে সতর্ক করাতেই তাদের বিস্ময়। এরপর কুরতুবী নিজের পছন্দ জানান। কুরআন যা স্পষ্ট করে বলেছে, সেটাই বেশি উপযুক্ত, অর্থাৎ তাদেরই মধ্য থেকে একজন সতর্ককারী আসা।"
          },
          {
            "en": "The resurrection view points ahead to 50:3, where the deniers ask how they could return once they have died and become dust. Ibn Kathir, in the English abridgement, moves to that question by saying the disbelievers also wondered about the resurrection, so in his grouping the two surprises sit side by side. As-Sa'di, meanwhile, turns the wonder back on those who felt it. They wondered, he says, at a matter they had no business wondering at; rather, the mind of whoever found it strange is what deserves wonder.",
            "bn": "পুনরুত্থানের মতটি ইঙ্গিত করে ৫০:৩ আয়াতের দিকে। সেখানে অস্বীকারকারীরা প্রশ্ন তোলে, মরে মাটি হয়ে যাওয়ার পর আবার ফেরা কীভাবে সম্ভব। ইংরেজি সংক্ষিপ্ত ইবন কাসীর সে প্রশ্নে যান এ কথা বলে যে কাফিররা পুনরুত্থান নিয়েও বিস্মিত হয়েছিল। ফলে তাঁর আলোচনায় দুটি বিস্ময় পাশাপাশি বসে আছে। এদিকে সা'দী বিস্ময়ের তীর ঘুরিয়ে দেন যারা অবাক হয়েছিল তাদের দিকেই। তিনি বলেন, তারা এমন বিষয়ে অবাক হয়েছে, যাতে অবাক হওয়া তাদের সাজে না। বরং অবাক হতে হয় তার বুদ্ধি দেখে, যে এতে অবাক হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Honest Surprise or Pretence",
          "bn": "সরল বিস্ময়, নাকি ভান"
        },
        "p": [
          {
            "en": "As-Sa'di then reads the second clause closely. The disbelievers said what they said because their disbelief and denial carried them to it, he writes, not because of any deficiency in their intelligence or their judgement. He then sets out two possibilities. Either they were sincere in their surprise, and that shows extreme ignorance and weak understanding: like a madman who finds the words of a sane man strange, a coward amazed that a horseman rides out against horsemen, or a miser who finds the generosity of the generous strange.",
            "bn": "এরপর সা'দী দ্বিতীয় অংশটি খুঁটিয়ে পড়েন। কাফিররা যা বলেছে, তা বলিয়েছে তাদের কুফরি আর অস্বীকার, তাদের বুদ্ধি বা বিচারবোধের কোনো ঘাটতি নয়, এ কথা তিনি স্পষ্ট করেন। তারপর দুটি সম্ভাবনা সামনে রাখেন। হয় তারা সত্যিই অবাক হয়েছিল। তাহলে তা চরম অজ্ঞতা আর দুর্বল বোধের প্রমাণ। ঠিক যেমন পাগল সুস্থ মানুষের কথাকে অদ্ভুত মনে করে, ভীরু লোক অবাক হয় এক ঘোড়সওয়ারকে আরও অনেক ঘোড়সওয়ারের মোকাবিলায় নামতে দেখে, আর কৃপণ দানশীলদের দানশীলতাকে আজব ভাবে।"
          },
          {
            "en": "What harm, he asks, comes to anyone from the wonder of a person in that state? His wonder proves nothing except his own wrongdoing and ignorance. Or else they wondered while knowing that they were mistaken, and that, as-Sa'di says, is among the gravest and ugliest kinds of wrong. What the analysis shows is that a person can say this is strange about something true, and the strangeness he reports may describe his own position more than the thing in front of him.",
            "bn": "তিনি প্রশ্ন করেন, এমন অবস্থার মানুষের বিস্ময়ে কার কী ক্ষতি হয়? তার বিস্ময় তো কেবল তার নিজের জুলুম আর অজ্ঞতারই প্রমাণ। নয়তো তারা অবাক হওয়ার ভাব করেছে জেনেশুনেই, নিজেদের ভুল তারা জানত। সা'দীর মতে সেটা সবচেয়ে বড় আর সবচেয়ে জঘন্য জুলুমগুলোর একটি। এ বিশ্লেষণ থেকে বোঝা যায়, মানুষ সত্য কোনো বিষয়কে 'আজব' বলতে পারে। আর যে অদ্ভুততার কথা সে বলে, তা অনেক সময় সামনের বিষয়ের চেয়ে তার নিজের অবস্থানকেই বেশি তুলে ধরে।"
          },
          {
            "en": "This needs saying plainly. The verse reports the words of a particular group, the deniers of Quraysh whom at-Tabari names, spoken about the Prophet ﷺ in his own time. It describes what the text describes, and it licenses nothing against any living person or community. As-Sa'di's comparisons explain the logic of that surprise; they are not names to call anyone today who doubts, questions, or has not yet accepted the message, nor anyone descended from those who first said it. The surah goes on to answer their remark; it does not hand the reader a label.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি নির্দিষ্ট দলের কথা জানায়, তাবারী যাদের পরিচয় দিয়েছেন কুরাইশের অস্বীকারকারী বলে। নবী ﷺ-এর নিজের যুগে তাঁকে নিয়েই তারা এ কথা বলেছিল। আয়াত যা বর্ণনা করে, শুধু সেটুকুই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এতে নেই। সা'দীর উপমাগুলো সেই বিস্ময়ের যুক্তি ব্যাখ্যা করে। আজ যে সন্দেহ করে, প্রশ্ন তোলে বা এখনো বার্তাটি গ্রহণ করেনি, তাকে এসব নামে ডাকার জন্য উপমাগুলো নয়। যারা প্রথম এ কথা বলেছিল, তাদের বংশধরদের জন্যও নয়। সূরাটি সামনে এগিয়ে তাদের মন্তব্যের জবাব দেয়, কিন্তু পাঠকের হাতে কোনো তকমা তুলে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Heard From the Friday Minbar",
          "bn": "জুমার মিম্বার থেকে শোনা"
        },
        "p": [
          {
            "en": "None of the tafsir texts fetched for this verse attaches a hadith to 50:2 itself. Ibn Kathir, in the English abridgement, and Ma'arif al-Qur'an both bring a narration about the surah as a whole, which Muslim collected. In Sahih Muslim, the second narration under number 873, Umm Hisham bint Haritha ibn an-Nu'man (RA) said: Our oven and the oven of the Messenger of Allah ﷺ were one for two years, or a year and part of a year. I took Qaf, by the glorious Qur'an, only from the tongue of the Messenger of Allah ﷺ, who recited it every Friday on the minbar when he addressed the people.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই ৫০:২ আয়াতের সঙ্গে সরাসরি কোনো হাদীস যুক্ত করেনি। ইংরেজি সংক্ষিপ্ত ইবন কাসীর আর মাআরিফুল কুরআন দুটোই পুরো সূরা সম্পর্কে একটি বর্ণনা আনে, যা ইমাম মুসলিম সংকলন করেছেন। সহীহ মুসলিমে ৮৭৩ নম্বরের অধীনে দ্বিতীয় বর্ণনায় উম্মু হিশাম বিনতু হারিসা ইবনুন নু'মান (রাঃ) বলেন: দুই বছর, কিংবা এক বছর আর আরেক বছরের কিছু অংশ, আমাদের চুলা আর রাসূলুল্লাহ ﷺ-এর চুলা ছিল একটাই। 'ক্বাফ, ওয়াল কুরআনিল মাজীদ' আমি রাসূলুল্লাহ ﷺ-এর মুখ থেকেই শিখেছি। প্রতি জুমায় মানুষের সামনে খুতবা দেওয়ার সময় তিনি মিম্বারে দাঁড়িয়ে এটি তিলাওয়াত করতেন।"
          },
          {
            "en": "The narration is in Muslim's Sahih, and he gives it no further grading of his own. It concerns the surah, not this verse in particular, and it is offered here only on that footing. Ibn Kathir explains the practice: the Messenger ﷺ recited this surah at large gatherings, such as the Eids and the Friday sermons, because it contains news of the beginning of creation, the resurrection, the return, the standing before Allah, the reckoning, Paradise and the Fire, reward and punishment, encouragement and warning.",
            "bn": "বর্ণনাটি ইমাম মুসলিমের সহীহ গ্রন্থে আছে, এর বাইরে আলাদা কোনো মান তিনি উল্লেখ করেননি। বর্ণনাটি পুরো সূরা নিয়ে, বিশেষভাবে এ আয়াত নিয়ে নয়। এখানে তা আনা হয়েছে কেবল সে হিসেবেই। এ রীতির ব্যাখ্যা দেন ইবন কাসীর। ঈদ আর জুমার খুতবার মতো বড় সমাবেশে রাসূল ﷺ এ সূরা তিলাওয়াত করতেন, কারণ এতে আছে সৃষ্টির সূচনা, পুনরুত্থান, প্রত্যাবর্তন, আল্লাহর সামনে দাঁড়ানো, হিসাব, জান্নাত ও জাহান্নাম, পুরস্কার ও শাস্তি, উৎসাহ আর সতর্কবাণীর কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "When Nearness Looks Strange",
          "bn": "নৈকট্য যখন অচেনা ঠেকে"
        },
        "p": [
          {
            "en": "What the deniers found strange, a human warner, known to them and of their own people, is exactly what al-Baghawi and as-Sa'di list as reasons to trust him: a lineage they knew, a record of truthfulness and trustworthiness, a man they could approach and learn from. As-Sa'di frames the whole verse as a favour that went unvalued. The surprise did not uncover a flaw in the message. It turned a gift into an objection, and then gave the objection a word, 'ajib, that closed the question instead of exploring it.",
            "bn": "অস্বীকারকারীরা যা দেখে অবাক হয়েছিল, অর্থাৎ মানুষ সতর্ককারী, তাদের চেনা, তাদেরই কওমের, ঠিক সেগুলোকেই বাগাভী আর সা'দী গণ্য করেন আস্থার কারণ হিসেবে। চেনা বংশ, সত্যবাদিতা আর আমানতদারির পরিচয়, এমন একজন মানুষ যাঁর কাছে যাওয়া যায়, যাঁর কাছ থেকে শেখা যায়। সা'দী গোটা আয়াতকে দেখেন কদর না পাওয়া এক নিয়ামত হিসেবে। বিস্ময় বার্তার কোনো ত্রুটি খুঁজে বের করেনি। নিয়ামতকে বানিয়ে দিয়েছে আপত্তি, তারপর সে আপত্তির গায়ে লাগিয়ে দিয়েছে একটি শব্দ, আজীব। প্রশ্নটা খতিয়ে দেখার বদলে সে শব্দ প্রশ্নটাই বন্ধ করে দিয়েছে।"
          },
          {
            "en": "The verse leaves the reader with a question worth asking honestly. When something true strikes me as strange, do I stop to ask why it strikes me so, or do I let the feeling decide? Guidance often arrives in an ordinary voice: a parent, a neighbour, a familiar verse heard again at a Friday prayer. As-Sa'di's line still applies to anyone who reads it. Sometimes the wonder worth examining is not at the message, but at the mind that found the message hard to believe.",
            "bn": "আয়াতটি পাঠকের সামনে একটি প্রশ্ন রেখে যায়, যার সৎ উত্তর খোঁজা দরকার। কোনো সত্য যখন আমার কাছে অদ্ভুত লাগে, আমি কি থেমে ভাবি কেন এমন লাগছে? নাকি অনুভূতিটাকেই রায় দিতে দিই? হেদায়াত প্রায়ই আসে সাধারণ কণ্ঠে। মা-বাবা, প্রতিবেশী, কিংবা জুমার নামাজে আবার শোনা চেনা কোনো আয়াত। সা'দীর কথাটি আজও যে কোনো পাঠকের বেলায় খাটে। অনেক সময় যাচাই করার মতো বিস্ময়টা বার্তা নিয়ে নয়, সেই মন নিয়ে, যার কাছে বার্তাটি বিশ্বাস করা কঠিন ঠেকেছে।"
          }
        ]
      }
    ]
  },
  "50:9": {
    "sections": [
      {
        "h": {
          "en": "Downward After the Spread Earth",
          "bn": "বিছানো জমিনের পর নিচে নামা"
        },
        "p": [
          {
            "en": "Surah Qaf opens on a doubt voiced in 50:3: when we have died and become dust, is that not a distant return? The answer does not begin with argument. It begins with a gaze. In 50:6 the reader is asked to look at the sky above, built and adorned and without rifts. In 50:7 the earth is spread out, firm mountains are cast upon it, and every beautiful kind of plant is made to grow there. Then 50:8 names the purpose: insight and a reminder for every servant who turns to Allah.",
            "bn": "সূরা ক্বাফের শুরুতেই এক সংশয়, ৫০:৩ আয়াতে: মরে মাটি হয়ে যাওয়ার পর ফিরে আসা, সে তো বহু দূরের কথা! জবাবটা তর্ক দিয়ে শুরু হয় না, শুরু হয় তাকানো দিয়ে। ৫০:৬ আয়াতে পাঠককে বলা হয় মাথার উপরের আকাশ দেখতে, যা আল্লাহ বানিয়েছেন, সাজিয়েছেন, আর যাতে কোনো ফাটল নেই। ৫০:৭ আয়াতে জমিন বিছিয়ে দেওয়া হয়, তাতে গেড়ে দেওয়া হয় অটল পাহাড়, আর জন্মানো হয় সব রকমের সুদৃশ্য উদ্ভিদ। তারপর ৫০:৮ আয়াত উদ্দেশ্যটা বলে দেয়: আল্লাহর দিকে ফেরা প্রত্যেক বান্দার জন্য চোখ খুলে দেওয়া নিদর্শন আর উপদেশ।"
          },
          {
            "en": "Our verse, 50:9, follows that list with a new movement, downward. Wa-nazzalna min as-sama'i ma'an mubarakan: and We sent down from the sky blessed water. Then fa-anbatna bihi: and We made grow by it jannatin wa-habba l-hasid, gardens and the grain of the harvest. The next verse adds tall palms with layered clusters, and 50:11 calls all of it provision for the servants before saying that the same water gives life to a dead land. Thus, it says, is the emergence. That last sentence is where the whole passage is heading.",
            "bn": "আমাদের আয়াত ৫০:৯ এই তালিকার পর নতুন দিকে মোড় নেয়, এবার উপর থেকে নিচে। ওয়া নাযযালনা মিনাস সামায়ি মাআম মুবারাকা: আর আমি আকাশ থেকে নামিয়েছি বরকতময় পানি। তারপর ফাআমবাতনা বিহী জান্নাতিউ ওয়া হাব্বাল হাসীদ: আর তা দিয়ে উদ্গত করেছি বাগান আর কাটার উপযোগী শস্যদানা। পরের আয়াতে আসে উঁচু খেজুর গাছ, যার গুচ্ছ থরে থরে সাজানো। ৫০:১১ আয়াত এসবকে বলে বান্দাদের রিযক। তারপর জানায়, এই পানি দিয়েই মরা জমিনকে জীবিত করা হয়, আর এভাবেই হবে বের হওয়া। গোটা অংশটা আসলে এই শেষ বাক্যের দিকেই এগোচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Water of Much Good",
          "bn": "অনেক কল্যাণের পানি"
        },
        "p": [
          {
            "en": "Ma'an mubarakan: water that is blessed. What does blessed mean here? The commentaries fetched for this verse answer in different words that point the same way. Ibn Kathir glosses it as nafi'an, beneficial. The Muyassar renders it as rain kathir al-manafi', of many benefits. Al-Qurtubi says kathir al-baraka, of much blessing. Al-Baghawi says kathir al-khayr, of much good, and adds a clause: wa-fihi hayatu kulli shay', and in it is the life of everything. Then he names it plainly: it is the rain.",
            "bn": "মাআম মুবারাকা: বরকতময় পানি। এখানে বরকতময় বলতে কী বোঝায়? এ আয়াতের যে তাফসীরগুলো সামনে আছে, সেগুলো ভিন্ন ভিন্ন শব্দে একই দিকে ইশারা করে। ইবন কাসীর এর অর্থ করেন নাফিআন, উপকারী। মুয়াসসার বলে, এ এমন বৃষ্টি যার উপকার অনেক। কুরতুবী বলেন, কাসীরুল বারাকাহ, অনেক বরকতের। বাগাভী বলেন, কাসীরুল খাইর, অনেক কল্যাণের। সঙ্গে তিনি যোগ করেন: ওয়া ফীহি হায়াতু কুল্লি শাই, এতে আছে সব কিছুর জীবন। তারপর সোজা নাম বলে দেন: এ হলো বৃষ্টি।"
          },
          {
            "en": "At-Tabari likewise reads the water as rain, matar mubarak, blessed rain, and moves at once to what it produced. Al-Qurtubi adds a gloss on the first phrase: min as-sama'i, from the sky, means here from the clouds. Across every gloss fetched here, the blessing is described through what the water brings: benefit, good, many uses, life. None of them explains baraka as something hidden behind the rain. On their account, blessed water is water whose good reaches far beyond the moment it falls.",
            "bn": "তাবারীও এই পানিকে বৃষ্টি হিসেবেই পড়েন, মাতারুম মুবারাক, বরকতময় বৃষ্টি। তারপর সঙ্গে সঙ্গে চলে যান তা থেকে কী জন্মাল সেই কথায়। কুরতুবী প্রথম শব্দগুচ্ছেরও ব্যাখ্যা দেন: মিনাস সামা, আকাশ থেকে, মানে এখানে মেঘ থেকে। সামনে থাকা প্রতিটি ব্যাখ্যায় বরকত চেনা যায় পানি যা নিয়ে আসে তা দিয়ে: উপকার, কল্যাণ, নানা কাজে লাগা, জীবন। কেউই বরকতকে বৃষ্টির আড়ালে লুকানো কোনো রহস্য বলে ব্যাখ্যা করেননি। তাঁদের কথামতো বরকতময় পানি সেই পানি, যার কল্যাণ ঝরে পড়ার মুহূর্ত ছাড়িয়ে বহু দূর পৌঁছায়।"
          },
          {
            "en": "This gives a reader a usable definition. On the readings above, baraka in a thing is measured by the good that keeps coming out of it. The verse itself traces the line: water comes down, gardens and grain come up, and 50:11 names them provision for the servants. The word is spent on something as ordinary as weather. Perhaps that is part of the lesson, since the most familiar provision is the one most easily received without a thought for where it came from.",
            "bn": "এখান থেকে পাঠক কাজে লাগার মতো একটা সংজ্ঞা পান। ওপরের ব্যাখ্যাগুলো ধরলে কোনো জিনিসের বরকত মাপা হয় তা থেকে বারবার বেরিয়ে আসা কল্যাণ দিয়ে। আয়াত নিজেই রেখাটা টেনে দেয়: পানি নামে, বাগান আর শস্য ওঠে, আর ৫০:১১ আয়াত এগুলোকে বলে বান্দাদের রিযক। এত বড় শব্দটা খরচ হয়েছে আবহাওয়ার মতো সাধারণ এক জিনিসের জন্য। হয়তো শিক্ষার একটা অংশ সেখানেই। যে রিযক সবচেয়ে চেনা, সেটাই আমরা সবচেয়ে সহজে নিয়ে নিই, কোথা থেকে এল একবারও না ভেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Orchards Crowded With Trees",
          "bn": "গাছে ঠাসা বাগিচা"
        },
        "p": [
          {
            "en": "Fa-anbatna bihi jannatin: and We made grow by it gardens. The commentators keep the word on the earth and fill it with trees. Ibn Kathir explains it as hada'iq min basatin wa-nahwiha, gardens of orchards and the like. At-Tabari says basatin ashjaran, orchards of trees. The Muyassar describes them as basatin kathirat al-ashjar, orchards with many trees. The English abridgement of Ibn Kathir renders the word as special and public parks and gardens. The picture is consistent: green ground thick with growth.",
            "bn": "ফাআমবাতনা বিহী জান্নাত: আর তা দিয়ে উদ্গত করেছি বাগান। তাফসীরকারেরা শব্দটিকে এই দুনিয়ার মাটিতেই রাখেন, আর তা ভরে দেন গাছপালায়। ইবন কাসীরের ব্যাখ্যায় এ হলো হাদায়িক মিন বাসাতীন ওয়া নাহবিহা, ফলের বাগান ও এ জাতীয় বাগিচা। তাবারী বলেন, বাসাতীন আশজারা, গাছের বাগান। মুয়াসসার এগুলোকে বলে প্রচুর গাছে ভরা বাগান। ইবন কাসীরের ইংরেজি সংক্ষেপে শব্দটির অর্থ দাঁড়ায় ব্যক্তিগত ও সর্বসাধারণের পার্ক আর বাগান। ছবিটা সবখানে একই: গাছগাছালিতে ঘন সবুজ জমি।"
          },
          {
            "en": "The verse sets two kinds of growth side by side. The gardens, on these readings, are orchards full of trees. The grain, as the next section shows, is a crop that is cut down and gathered. One is left standing, the other is reaped. Both come from the same water. The verse after this adds a third, the tall palm with its clusters set in layers, and then names all of them together as rizq, provision for the servants of Allah.",
            "bn": "আয়াতটি পাশাপাশি রাখে দুই ধরনের ফলন। এ ব্যাখ্যাগুলো অনুযায়ী বাগান মানে গাছে ভরা বাগিচা। আর শস্যদানা, পরের অংশে যেমন আসছে, এমন ফসল যা কেটে ঘরে তোলা হয়। একটা দাঁড়িয়ে থাকে, অন্যটা কাটা পড়ে। দুটোই আসে একই পানি থেকে। পরের আয়াত যোগ করে তৃতীয়টি, উঁচু খেজুর গাছ, যার গুচ্ছ স্তরে স্তরে সাজানো। তারপর সবগুলোকে একসঙ্গে নাম দেয় রিযক, আল্লাহর বান্দাদের জীবিকা।"
          }
        ]
      },
      {
        "h": {
          "en": "Wheat, Barley and Every Grain",
          "bn": "গম, যব আর সব দানা"
        },
        "p": [
          {
            "en": "Wa-habba l-hasid: and the grain of the harvest. Al-Qurtubi defines al-hasid as everything that is reaped. Ibn Kathir explains the phrase as crops grown for the sake of their grain and for storing it: al-zar' alladhi yuradu li-habbihi wa-iddikharihi. The English abridgement puts it as grains harvested for food and for storage for later use. So the phrase carries two ideas at once, food for now and a reserve laid by. The Muyassar keeps closest to the wording: the grain of the reaped crop.",
            "bn": "ওয়া হাব্বাল হাসীদ: আর কাটার উপযোগী শস্যদানা। কুরতুবীর সংজ্ঞায় আল-হাসীদ হলো যা কিছু কাটা হয়। ইবন কাসীর বলেন, এ সেই ফসল যা চাষ করা হয় দানার জন্য আর তা জমিয়ে রাখার জন্য: আয-যার আল্লাযী ইউরাদু লি-হাব্বিহী ওয়া ইদ্দিখারিহী। ইংরেজি সংক্ষেপে কথাটা এমন: কেটে তোলা দানা, খাওয়ার জন্য আর পরে কাজে লাগাতে মজুত রাখার জন্য। তাহলে এই শব্দগুচ্ছে দুটি ভাবনা একসঙ্গে আছে। এক, এখনকার খাবার। দুই, ভবিষ্যতের জন্য তুলে রাখা সঞ্চয়। মুয়াসসার শব্দের সবচেয়ে কাছে থাকে: কাটা ফসলের দানা।"
          },
          {
            "en": "At-Tabari names the grains. He reads the phrase as the grain of the reaped crop, of wheat and barley and all other kinds of grain, and supports it with narrations. By two chains he reports from Qatada that it is wheat and barley, and through Ibn Abi Najih he reports from Mujahid that it is al-hinta, wheat. Al-Qurtubi reports from ad-Dahhak the same pair, wheat and barley. Al-Baghawi says wheat and barley and the other grains that are reaped.",
            "bn": "তাবারী দানাগুলোর নাম বলেন। তাঁর পাঠে এ হলো কাটা ফসলের দানা: গম, যব আর অন্য সব রকমের শস্য। কথাটার পক্ষে তিনি বর্ণনাও আনেন। দুটি সনদে তিনি কাতাদা থেকে বর্ণনা করেন, এ হলো গম ও যব। আর ইবন আবী নাজীহের সূত্রে মুজাহিদ থেকে বর্ণনা করেন, এ হলো আল-হিনতা, অর্থাৎ গম। কুরতুবী দাহহাক থেকে একই জোড়া উল্লেখ করেন, গম ও যব। বাগাভী বলেন, গম, যব আর অন্যান্য দানা যা কাটা হয়।"
          },
          {
            "en": "Al-Qurtubi also records a wider reading, introduced with qila, it is said: every grain that is harvested, stored and eaten as a staple. The named grains and the wider definition do not pull against each other, and at-Tabari himself holds both together, wheat and barley and all other kinds of grain. The early narrations give examples familiar to their hearers. The general statements keep the phrase open to whatever grain a people reap, store and live on.",
            "bn": "কুরতুবী আরেকটু প্রশস্ত একটি ব্যাখ্যাও আনেন, কীলা বা 'বলা হয়' কথাটি দিয়ে: প্রতিটি দানা যা কাটা হয়, জমিয়ে রাখা হয় আর প্রধান খাবার হিসেবে খাওয়া হয়। নির্দিষ্ট দানার নাম আর এই প্রশস্ত সংজ্ঞার মধ্যে কোনো টানাপোড়েন নেই। তাবারী নিজেই দুটো একসঙ্গে ধরেছেন: গম, যব আর অন্য সব রকমের শস্য। পূর্বসূরিদের বর্ণনায় এসেছে শ্রোতাদের চেনা উদাহরণ। আর সাধারণ ব্যাখ্যাগুলো শব্দটিকে খোলা রাখে সেই সব দানার জন্য, যা কোনো জনপদ কাটে, জমায় আর খেয়ে বাঁচে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Joined to Itself",
          "bn": "নিজের সঙ্গে জোড়া শব্দ"
        },
        "p": [
          {
            "en": "A small grammatical question sits inside habba l-hasid. Al-Baghawi says plainly that the verse joins the grain to the harvest in a possessive construction: the grain of the reaped. But if the grain is itself what is reaped, how can a thing be joined to itself? Al-Qurtubi sets out the answers and names the schools behind them. The Basrans, he says, assume a word left unsaid, habba n-nabti l-hasid, the grain of the reaped plant, and the reaped plant is everything that is harvested.",
            "bn": "হাব্বাল হাসীদ কথাটার ভেতরে ব্যাকরণের ছোট একটা প্রশ্ন আছে। বাগাভী সোজাসুজি বলেন, আয়াতটি দানাকে কাটা ফসলের সঙ্গে সম্বন্ধসূচক গঠনে জুড়ে দিয়েছে: কাটা জিনিসের দানা। কিন্তু দানা নিজেই যদি কাটা জিনিস হয়, তবে কোনো জিনিস নিজের সঙ্গেই জোড়া লাগে কী করে? কুরতুবী উত্তরগুলো সাজিয়ে দেন, সঙ্গে জানান কোন মত কাদের। তাঁর বর্ণনায় বসরার ব্যাকরণবিদেরা ধরে নেন এখানে একটি শব্দ উহ্য আছে: হাব্বান নাবতিল হাসীদ, কাটা উদ্ভিদের দানা। আর কাটা উদ্ভিদ মানে যা কিছু কাটা হয়।"
          },
          {
            "en": "The Kufans read it otherwise, as a thing joined to itself, a pattern the language allows, and al-Qurtubi lists their examples: masjid al-jami', rabi' al-awwal, haqq al-yaqin and habl al-warid. The last of these, the jugular vein, appears in this very surah at 50:16. He quotes al-Farra' on how it works: the original was al-habb al-hasid, the reaped grain; the definite article was dropped and the described noun was joined to the word describing it.",
            "bn": "কুফার ব্যাকরণবিদেরা অন্যভাবে পড়েন। তাঁদের মতে এখানে একটি জিনিসকে নিজের সঙ্গেই জোড়া হয়েছে, আর ভাষায় এমন রীতি আছে। কুরতুবী তাঁদের উদাহরণগুলো তুলে ধরেন: মাসজিদুল জামি, রবীউল আউয়াল, হাক্কুল ইয়াকীন আর হাবলুল ওয়ারীদ। শেষেরটি, অর্থাৎ ঘাড়ের শিরা, এই সূরাতেই আছে, ৫০:১৬ আয়াতে। ব্যাপারটা কীভাবে ঘটে, তা বোঝাতে তিনি ফাররার কথা আনেন: মূলে ছিল আল-হাব্বুল হাসীদ, কাটা দানা। নির্দিষ্টবাচক আলিফ-লাম বাদ দিয়ে বিশেষ্যকে তার বিশেষণের সঙ্গে জুড়ে দেওয়া হয়েছে।"
          },
          {
            "en": "At-Tabari records the second view without naming a school: some of the people of Arabic held that the grain is the harvest, joined to itself, as in inna hadha la-huwa haqqu l-yaqin, which is 56:95. Al-Baghawi gives both. He says the grain was joined to the harvest though the two are the same thing, because the two words differ; then, with qila, he gives the other reading, the grain of the reaped plant. Neither commentator settles it, and both readings arrive at grain that is reaped.",
            "bn": "তাবারী দ্বিতীয় মতটি উল্লেখ করেন কোনো ঘরানার নাম না নিয়ে। তিনি বলেন, আরবি ভাষার কিছু পণ্ডিত মনে করতেন দানা আর কাটা ফসল একই জিনিস, এখানে তাকে নিজের সঙ্গে জোড়া হয়েছে, যেমন ইন্না হাযা লাহুওয়া হাক্কুল ইয়াকীন, অর্থাৎ ৫৬:৯৫ আয়াত। বাগাভী দুটো মতই আনেন। তিনি বলেন, দুটি শব্দ আলাদা বলেই দানাকে কাটা ফসলের সঙ্গে জোড়া হয়েছে, যদিও দুটো একই জিনিস। তারপর কীলা দিয়ে আনেন অন্য পাঠটি: কাটা উদ্ভিদের দানা। তাঁদের কেউই বিষয়টার মীমাংসা করেননি, আর দুই পাঠই পৌঁছায় কাটা শস্যদানায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Power, Wisdom, Mercy, Oneness",
          "bn": "কুদরত, হিকমত, রহমত, তাওহীদ"
        },
        "p": [
          {
            "en": "As-Sa'di's comment on this verse opens with wa-hasilu hadha, the upshot of this, and sums up what the signs of the passage prove. The dazzling creation in it, with its strength and force, is evidence of the perfection of Allah's power. Its beauty, precision and wonderful making are evidence that He is the wisest of judges and knows everything. And the benefits and interests it holds for the servants, he says, are evidence of Allah's mercy that encompasses everything, and of His generosity that reaches every living thing.",
            "bn": "এ আয়াতে সা'দীর আলোচনা শুরু হয় ওয়া হাসিলু হাযা দিয়ে, অর্থাৎ এর সারকথা হলো। তারপর তিনি বলেন, এই অংশের নিদর্শনগুলো কী প্রমাণ করে। এতে আছে চোখ ধাঁধানো সৃষ্টি, তার মজবুতি আর শক্তি, যা আল্লাহর পরিপূর্ণ কুদরতের দলিল। এর সৌন্দর্য, নিখুঁত গড়ন আর অপূর্ব নির্মাণ দলিল যে তিনি সব বিচারকের সেরা বিচারক, সব কিছু জানেন। আর বান্দাদের জন্য এতে যত উপকার আর কল্যাণ, তিনি বলেন, তা দলিল আল্লাহর সেই রহমতের, যা সব কিছুকে ঘিরে আছে। দলিল তাঁর সেই দানশীলতারও, যা প্রতিটি প্রাণীর কাছে পৌঁছে যায়।"
          },
          {
            "en": "He goes on: the greatness of this creation and its marvellous order are evidence that Allah is the One, the Unique, the Self-Sufficient, who has taken neither consort nor child and has no equal, so that worship and humble submission are fit for none but Him. Read this way, rain is never only weather. The water that grows the grain points to power, wisdom, mercy and oneness all at once, and the grain on the table becomes a standing reason to worship the One who sent it.",
            "bn": "তিনি আরও বলেন, এই সৃষ্টির বিশালতা আর তার অপূর্ব শৃঙ্খলা দলিল যে আল্লাহ এক, অদ্বিতীয়, অমুখাপেক্ষী। তিনি স্ত্রী বা সন্তান গ্রহণ করেননি, তাঁর সমকক্ষ কেউ নেই। তাই ইবাদত আর বিনয়ী আনুগত্যের একমাত্র হকদার তিনিই। এভাবে পড়লে বৃষ্টি কখনোই নিছক আবহাওয়া থাকে না। যে পানি শস্য জন্মায়, তা একসঙ্গে ইশারা করে কুদরত, হিকমত, রহমত আর তাওহীদের দিকে। থালার শস্যদানা তখন হয়ে যায় সেই প্রেরণকারীর ইবাদত করার এক স্থায়ী কারণ।"
          },
          {
            "en": "As-Sa'di ends his summary with the step the passage itself takes. The reviving of the earth after its death, he says, is evidence that Allah will revive the dead to recompense them for their deeds, and that is why the verse says, and We gave life by it to a dead land; thus is the emergence. Ibn Kathir, in the English abridgement, says the same of barren land stirred to life by rain, and cites 41:39: He who gives the earth life gives life to the dead.",
            "bn": "সা'দী তাঁর সারকথা শেষ করেন সেই ধাপে, যা আয়াতগুলো নিজেরাই নেয়। তিনি বলেন, মরে যাওয়ার পর জমিনকে জীবিত করা দলিল যে আল্লাহ মৃতদের জীবিত করবেন, তাদের আমলের প্রতিদান দেওয়ার জন্য। এ কারণেই আয়াত বলে: আর তা দিয়ে আমি মরা জমিনকে জীবিত করেছি, এভাবেই হবে বের হওয়া। ইংরেজি সংক্ষেপে ইবন কাসীরও একই কথা বলেন অনুর্বর জমি নিয়ে, যা বৃষ্টিতে জেগে ওঠে। তিনি ৪১:৩৯ আয়াত উদ্ধৃত করেন: যিনি জমিনকে জীবন দেন, তিনিই মৃতদের জীবন দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Eyes for Those Who Turn",
          "bn": "যারা ফেরে, তাদের দেখার চোখ"
        },
        "p": [
          {
            "en": "Verse 50:8 has already said for whom these signs are set out: tabsiratan wa-dhikra li-kulli 'abdin munib, insight and a reminder for every servant who turns. Ibn Kathir, in the English abridgement, explains that observing the creation of the heavens and earth, and what is placed in them, gives insight, proof and a lesson to the penitent servant who submits to Allah in humbleness, fear and awe. Everyone eats the grain of 50:9. The insight, on this reading, belongs to those who turn.",
            "bn": "কাদের জন্য এই নিদর্শনগুলো, ৫০:৮ আয়াত তা আগেই বলে দিয়েছে: তাবসিরাতাও ওয়া যিকরা লিকুল্লি আবদিম মুনীব, ফিরে আসা প্রত্যেক বান্দার জন্য চোখ খুলে দেওয়া নিদর্শন আর উপদেশ। ইংরেজি সংক্ষেপে ইবন কাসীর ব্যাখ্যা করেন, আসমান-জমিনের সৃষ্টি আর তাতে রাখা সব কিছু খেয়াল করে দেখলে অন্তর্দৃষ্টি, দলিল আর শিক্ষা পায় সেই তওবাকারী বান্দা, যে ভয় আর সম্ভ্রম নিয়ে বিনয়ের সঙ্গে আল্লাহর কাছে নত হয়। ৫০:৯ আয়াতের শস্য সবাই খায়। কিন্তু এই পাঠ অনুযায়ী অন্তর্দৃষ্টি তাদেরই, যারা আল্লাহর দিকে ফেরে।"
          },
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, so none is quoted here, and none of them reports an occasion of revelation for it; they read it as part of the passage's argument. Their work on it is almost entirely about words: what blessed means, what the gardens are, which grains are meant, how a pair of words is joined. That restraint teaches something too. The sign is already in plain view, and the task is to look at it with the right question.",
            "bn": "এ আয়াতের যে তাফসীরগুলো সামনে আছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি। কোনোটি এর নাযিলের কোনো উপলক্ষও বর্ণনা করেনি। তাঁরা আয়াতটি পড়েন পুরো অংশের যুক্তির অংশ হিসেবে। তাঁদের আলোচনা প্রায় পুরোটাই শব্দ নিয়ে: বরকতময় মানে কী, বাগান বলতে কী, কোন দানার কথা, দুটি শব্দ কীভাবে জোড়া লেগেছে। এই সংযমেরও একটা শিক্ষা আছে। নিদর্শন তো চোখের সামনেই আছে। কাজ শুধু সঠিক প্রশ্ন নিয়ে তার দিকে তাকানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Bread That Began as Rain",
          "bn": "রুটির শুরু বৃষ্টিতে"
        },
        "p": [
          {
            "en": "Put the verse beside an ordinary day. Bread, rice, porridge: every staple that fits al-Qurtubi's wider gloss, grain that is reaped, stored and eaten to live on, comes back to water sent down. The verbs of the verse belong to Allah alone: nazzalna, We sent down, and anbatna, We made grow. The farmer, the mill and the shop are real, yet the verse does not mention them. It names the Sender of the water and the One who made the seed rise.",
            "bn": "আয়াতটিকে একটা সাধারণ দিনের পাশে রাখুন। রুটি, ভাত, জাউ: কুরতুবীর প্রশস্ত ব্যাখ্যায় যে দানা কাটা হয়, জমানো হয় আর খেয়ে মানুষ বাঁচে, তার সবই শেষ পর্যন্ত গিয়ে মেলে আকাশ থেকে নামানো পানিতে। আয়াতের ক্রিয়াগুলো কেবল আল্লাহর: নাযযালনা, আমি নামিয়েছি, আর আমবাতনা, আমি উদ্গত করেছি। কৃষক, চাকি আর দোকান সবই সত্যি, তবু আয়াত তাদের কথা বলে না। আয়াত নাম নেয় তাঁর, যিনি পানি পাঠান আর বীজকে মাটি ফুঁড়ে তোলেন।"
          },
          {
            "en": "That is the gratitude the verse invites: following each meal back past every human hand to the rain, and the rain back to its Sender. Then comes the step towards the hereafter, which this page leaves the following verses to make. The doubt of 50:3 asked how dust could live again. The answer in 50:9 to 50:11 is a field: water sent down, gardens and grain brought up, a dead land given life. Gratitude for the grain and certainty about the return grow from the same water.",
            "bn": "আয়াত এই শুকরিয়ার দিকেই ডাকে: প্রতিটি খাবারকে সব মানুষের হাত পেরিয়ে বৃষ্টি পর্যন্ত, আর বৃষ্টিকে তার প্রেরণকারী পর্যন্ত মিলিয়ে দেখা। তারপর আসে আখিরাতের দিকের ধাপ, যা এই লেখা পরের আয়াতগুলোর হাতেই ছেড়ে দেয়। ৫০:৩ আয়াতের সংশয় ছিল, মাটি আবার জীবিত হবে কী করে? ৫০:৯ থেকে ৫০:১১ আয়াতের জবাব একটা মাঠ: পানি নামে, বাগান আর শস্য ওঠে, মরা জমিন প্রাণ পায়। শস্যের জন্য শুকরিয়া আর ফিরে আসার ব্যাপারে ইয়াকীন, দুটোই জন্মায় একই পানি থেকে।"
          }
        ]
      }
    ]
  },
  "50:16": {
    "sections": [
      {
        "h": {
          "en": "A Turn Inward in Surah Qaf",
          "bn": "সূরা কাফে ভেতরের দিকে মোড়"
        },
        "p": [
          {
            "en": "Surah Qaf answers people who found resurrection unbelievable: when we have become dust, they asked, is that a far-fetched return? The surah first points outward — 50:6-8 tell the doubter to look at the sky, how it was built without flaw, and at the earth and its growing pairs. Then, at this verse, the argument turns inward, from the horizons to the reader's own chest: We created man, and We know what his soul whispers to him.",
            "bn": "সূরা কাফ তাদের উত্তর দেয় যারা পুনরুত্থানকে অবিশ্বাস্য মনে করত: তারা প্রশ্ন করত, আমরা মাটি হয়ে গেলে সেই প্রত্যাবর্তন কি সুদূরপরাহত নয়? সূরাটি প্রথমে বাইরের দিকে ইশারা করে — 50:6-8 সন্দেহকারীকে বলে আকাশের দিকে তাকাতে, কীভাবে তা নিখুঁতভাবে নির্মিত, আর যমীন ও তার উদ্গত জোড়াগুলোর দিকে। তারপর এই আয়াতে যুক্তি ভেতরের দিকে মোড় নেয় — দিগন্ত থেকে পাঠকের নিজের বুকে: আমরা মানুষকে সৃষ্টি করেছি, এবং তার প্রাণ তাকে যা কুমন্ত্রণা দেয় তা আমরা জানি।"
          },
          {
            "en": "The logic is tight. The One who made a thing knows it through and through, so re-making it is no difficulty, and nothing inside it is hidden from Him. The verse joins creation and knowledge in a single breath so that neither can be believed without the other. Whoever accepts that Allah created him has already conceded that Allah knows him better than he knows himself.",
            "bn": "যুক্তিটি নিরেট। যিনি কোনো কিছু বানিয়েছেন তিনি তা আগাগোড়া জানেন; কাজেই তা পুনরায় বানানো তাঁর জন্য কঠিন নয়, আর তার ভেতরের কিছুই তাঁর কাছে গোপন নয়। আয়াতটি সৃষ্টি ও জ্ঞানকে এক নিঃশ্বাসে জুড়ে দেয়, যেন একটিকে না মেনে অন্যটি মানা না যায়। যে স্বীকার করে আল্লাহ তাকে সৃষ্টি করেছেন, সে আসলে মেনেই নিয়েছে যে আল্লাহ তাকে তার নিজের চেয়েও ভালো জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Whisper of the Soul",
          "bn": "প্রাণের কুমন্ত্রণা"
        },
        "p": [
          {
            "en": "Tuwaswisu bihi nafsuhu — what his own soul whispers to him. Waswasah is the lowest register of inner speech: not a decision, not even a formed thought, but the murmur that passes through before a person has chosen anything. The verse claims knowledge at that depth. Plans never spoken, resentments never shown, hopes too embarrassing to admit — all of it lies open before Him at the stage where we ourselves barely notice it.",
            "bn": "তুওয়াসউইসু বিহি নাফসুহু — তার নিজের প্রাণ তাকে যা কুমন্ত্রণা দেয়। ওয়াসওয়াসা হলো ভেতরের কথার সবচেয়ে নিচু স্তর: কোনো সিদ্ধান্ত নয়, এমনকি গড়ে ওঠা কোনো ভাবনাও নয় — মানুষ কিছু বেছে নেওয়ার আগেই যে গুঞ্জন ভেতর দিয়ে বয়ে যায়, সেটিই। আয়াতটি সেই গভীরতার জ্ঞান দাবি করে। কখনো মুখে না আনা পরিকল্পনা, কখনো প্রকাশ না করা ক্ষোভ, স্বীকার করতে লজ্জা লাগে এমন আশা — সবই তাঁর সামনে খোলা, এমন স্তরে যেখানে আমরা নিজেরাও তা টেরই পাই না।"
          },
          {
            "en": "The Prophet ﷺ told his community something merciful about this same layer: Allah has overlooked for my ummah what their souls whisper, so long as they do not act on it or speak it. The report is agreed upon in al-Bukhari and Muslim. So the whisper is fully known but not held against us while it stays a whisper. Knowledge this complete, paired with pardon this wide, is the verse's first surprise.",
            "bn": "নবী ﷺ এই স্তরটি নিয়েই তাঁর উম্মতকে এক দয়ার্দ্র কথা বলেছেন: আল্লাহ আমার উম্মতের প্রাণ যা কুমন্ত্রণা দেয় তা উপেক্ষা করেছেন — যতক্ষণ না তারা সে অনুযায়ী কাজ করে বা মুখে বলে। বর্ণনাটি বুখারী ও মুসলিমে ঐকমত্যে বর্ণিত। অর্থাৎ কুমন্ত্রণা পুরোপুরি জানা, কিন্তু যতক্ষণ তা কুমন্ত্রণাই থেকে যায় ততক্ষণ আমাদের বিরুদ্ধে ধরা হয় না। এমন পূর্ণ জ্ঞানের সঙ্গে এমন প্রশস্ত ক্ষমার জুটিই আয়াতের প্রথম বিস্ময়।"
          }
        ]
      },
      {
        "h": {
          "en": "Nearer Than the Jugular Vein",
          "bn": "ঘাড়ের শিরার চেয়েও নিকটে"
        },
        "p": [
          {
            "en": "We are nearer to him than his habl al-warid, the vein of the neck that carries his life. The image is chosen for intimacy: nothing is closer to a person's survival than that vessel, and Allah declares Himself closer still. The commentators explain this as nearness of knowledge and power — He is above His Throne, exalted as He described Himself, yet nothing about His servant is distant from Him. Some also connect the nearness to the recording angels the next verse introduces.",
            "bn": "আমরা তার হাবলুল-ওয়ারীদের চেয়েও তার নিকটে — ঘাড়ের সেই শিরা, যা তার জীবন বহন করে। ঘনিষ্ঠতা বোঝাতেই এই উপমা: মানুষের বেঁচে থাকার সঙ্গে ওই রক্তনালীর চেয়ে ঘনিষ্ঠ আর কিছু নেই, অথচ আল্লাহ নিজেকে তার চেয়েও নিকটবর্তী ঘোষণা করেন। মুফাসসিরগণ এর ব্যাখ্যা করেন জ্ঞান ও ক্ষমতার নৈকট্য হিসেবে — তিনি তাঁর আরশের ওপরে, যেভাবে তিনি নিজের বর্ণনা দিয়েছেন সেভাবেই সমুন্নত; তবু তাঁর বান্দার কোনো কিছুই তাঁর থেকে দূরে নয়। কেউ কেউ এই নৈকট্যকে পরের আয়াতে আসা লেখক ফেরেশতাদের সঙ্গেও যুক্ত করেন।"
          },
          {
            "en": "The Quran states this nearness elsewhere without imagery: He is with you wherever you are, as 57:4 says, and when My servants ask about Me, I am near, as 2:186 says. Read together, the verses build one fact from three angles — there is no unobserved moment, and also no unaccompanied one. The same closeness that makes sin impossible to hide makes du'a impossible to lose.",
            "bn": "কুরআন এই নৈকট্য অন্যত্র উপমা ছাড়াই বলেছে: তোমরা যেখানেই থাকো তিনি তোমাদের সঙ্গে আছেন — যেমন 57:4 বলে; আর আমার বান্দারা আমার সম্পর্কে জিজ্ঞেস করলে, আমি তো নিকটেই — যেমন 2:186 বলে। একসঙ্গে পড়লে আয়াতগুলো তিন দিক থেকে একটিই সত্য দাঁড় করায় — নজরের বাইরে কোনো মুহূর্ত নেই, আবার সঙ্গীহীন কোনো মুহূর্তও নেই। যে নৈকট্যের কারণে গুনাহ লুকানো অসম্ভব, সেই একই নৈকট্যের কারণে দোয়া হারিয়ে যাওয়াও অসম্ভব।"
          }
        ]
      },
      {
        "h": {
          "en": "The Watcher Standing Ready",
          "bn": "প্রস্তুত পর্যবেক্ষক"
        },
        "p": [
          {
            "en": "The passage does not stop at inner knowledge. The verses that follow, 50:17-18, describe two receivers seated on the right and the left, and declare that not a word is uttered without a watcher standing ready beside the speaker. Divine knowledge needed no scribes; the record is kept for our sake, so that on the Day of Judgment no one can claim the account was invented. Speech, the layer above the whisper, is written as it leaves the lips.",
            "bn": "অনুচ্ছেদটি ভেতরের জ্ঞানে থেমে থাকে না। পরের আয়াতগুলো, 50:17-18, ডানে ও বামে বসা দুই গ্রহণকারীর বর্ণনা দেয় এবং ঘোষণা করে যে এমন একটি শব্দও উচ্চারিত হয় না যার পাশে প্রস্তুত পর্যবেক্ষক নেই। আল্লাহর জ্ঞানের জন্য কোনো লেখকের দরকার ছিল না; নথিটি রাখা হয় আমাদেরই জন্য, যেন কিয়ামতের দিন কেউ দাবি করতে না পারে যে হিসাবটি বানানো। কথা — কুমন্ত্রণার ওপরের স্তরটি — ঠোঁট ছাড়ার সঙ্গে সঙ্গেই লেখা হয়ে যায়।"
          },
          {
            "en": "This ordering carries a practical mercy. Between the whisper, which is overlooked, and the spoken word, which is recorded, stands a checkpoint that belongs to us. The moment before speaking is the moment the verse trains us to notice. A believer who has absorbed 50:16 and 50:18 together develops a small habitual pause at exactly that border, because it is the border between what is forgiven freely and what enters the book.",
            "bn": "এই ক্রমবিন্যাসে এক ব্যবহারিক রহমত আছে। যে কুমন্ত্রণা উপেক্ষিত হয় আর যে উচ্চারিত শব্দ লিপিবদ্ধ হয় — এ দুয়ের মাঝখানে একটি তল্লাশিচৌকি আছে, যা আমাদের হাতে। কথা বলার আগের মুহূর্তটিই সেই মুহূর্ত, যা লক্ষ করতে আয়াতটি আমাদের প্রশিক্ষণ দেয়। যে মুমিন 50:16 ও 50:18 একসঙ্গে আত্মস্থ করেছে, ঠিক ওই সীমান্তে তার একটি ছোট অভ্যাসগত বিরতি তৈরি হয় — কারণ ওটাই সেই সীমান্ত, যার একপাশ বিনা হিসাবে ক্ষমা করা হয় আর অন্যপাশ খাতায় ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Awe and Comfort in One Verse",
          "bn": "এক আয়াতে ভয় ও সান্ত্বনা"
        },
        "p": [
          {
            "en": "The verse reads differently depending on the state of the one reading it. To a person contemplating a hidden wrong, it is pure awe: the plan is already known, nearer than the vein that feeds the brain. To a person carrying a grief no one around them understands, it is pure comfort: the ache never had to be explained, because the One nearest of all watched it form. Both readings are correct, and each of us needs both on different days.",
            "bn": "পাঠকের অবস্থাভেদে আয়াতটি ভিন্নভাবে ধরা দেয়। যে ব্যক্তি গোপন কোনো অন্যায়ের কথা ভাবছে, তার কাছে এটি নিখাদ ভয়: পরিকল্পনাটি আগেই জানা হয়ে গেছে — মস্তিষ্কে রক্ত পৌঁছানো শিরার চেয়েও নিকটে যিনি, তাঁর কাছে। আর যে ব্যক্তি এমন কষ্ট বইছে যা আশপাশের কেউ বোঝে না, তার কাছে এটি নিখাদ সান্ত্বনা: ব্যথাটা কখনো বুঝিয়ে বলার দরকারই ছিল না, কারণ সবার চেয়ে নিকটবর্তী সত্তা তা তৈরি হতে দেখেছেন। দুটি পাঠই সঠিক, আর ভিন্ন ভিন্ন দিনে আমাদের প্রত্যেকের দুটিই লাগে।"
          },
          {
            "en": "The lived shape of the verse is honesty in du'a. If He already knows the whisper, then polished wording and presentable versions of ourselves are unnecessary in front of Him; the prayer can start from the true state, however unimpressive. And in solitude, the verse replaces the feeling of being unobserved with the feeling of being accompanied — which restrains the hand from what is hidden and steadies the heart in what is hard.",
            "bn": "আয়াতটির জীবনরূপ হলো দোয়ায় সততা। তিনি যদি কুমন্ত্রণাটাই আগে থেকে জানেন, তবে তাঁর সামনে ঘষামাজা শব্দ আর নিজেদের পরিপাটি সংস্করণ অপ্রয়োজনীয়; দোয়া শুরু হতে পারে প্রকৃত অবস্থা থেকেই — তা যত সাদামাটাই হোক। আর নির্জনতায় আয়াতটি 'কেউ দেখছে না' অনুভূতির জায়গায় বসায় 'কেউ সঙ্গে আছেন' অনুভূতি — যা গোপন কাজ থেকে হাত টেনে রাখে এবং কঠিন সময়ে হৃদয়কে স্থির রাখে।"
          }
        ]
      }
    ]
  },
  "50:20": {
    "sections": [
      {
        "h": {
          "en": "From the Deathbed to the Horn",
          "bn": "মৃত্যুশয্যা থেকে শিঙ্গা পর্যন্ত"
        },
        "p": [
          {
            "en": "Surah Qaf moves fast here. In 50:19 the stupor of death arrives with the truth, and the one dying is told: that is what you used to turn away from. The abridged English Ibn Kathir explains the clause as the end a person tried to escape, which has now come, leaving neither shelter nor refuge from it. Then, without a word about burial or the years in between, 50:20 opens: wa-nufikha fi s-sur, and the Horn is blown. One verse closes a single life; the next opens the Day for everyone.",
            "bn": "সূরা কাফ এখানে খুব দ্রুত এগোয়। ৫০:১৯ আয়াতে মৃত্যুর যন্ত্রণা সত্য নিয়ে হাজির হয়, আর মৃত্যুপথযাত্রীকে বলা হয়: এ-ই তো সেই জিনিস, যা থেকে তুমি সরে থাকতে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ এর ব্যাখ্যা দেয় এভাবে: যে পরিণতি থেকে মানুষ পালাতে চেয়েছিল, তা এসে গেছে, এখন আর কোনো আশ্রয় নেই, লুকানোর জায়গাও নেই। এরপর দাফন বা মাঝের বছরগুলোর কোনো কথা না বলেই ৫০:২০ শুরু হয়: ওয়া নুফিখা ফিস সূর, আর শিঙ্গায় ফুঁ দেওয়া হবে। এক আয়াতে একজন মানুষের জীবন শেষ হয়, পরের আয়াতে সবার জন্য সেই দিন শুরু হয়।"
          },
          {
            "en": "The same English edition sets these verses under one heading that names the stupor of death, the blast of the Trumpet and the Day of Gathering together, and the joining is worth noticing. Death comes to each person on a separate day, in a separate room. The blowing is one event, and it gathers all those separate endings into a single appointment. The verse itself is only six words in Arabic, split by a pause mark into two short sentences: the first reports an event, and the second tells the listener what that event means.",
            "bn": "ইবন কাসীরের ওই ইংরেজি সংস্করণ এ আয়াতগুলোকে একটিমাত্র শিরোনামের নিচে রাখে, যেখানে মৃত্যুর যন্ত্রণা, শিঙ্গার ফুঁ আর সমবেত হওয়ার দিন একসঙ্গে উল্লেখ আছে। এই জোড়া দেওয়াটা খেয়াল করার মতো। মৃত্যু প্রত্যেকের কাছে আসে আলাদা দিনে, আলাদা ঘরে। ফুঁ কিন্তু একটিই ঘটনা, আর সেই আলাদা আলাদা সমাপ্তিকে তা এক জায়গায় এনে মেলায়। আরবিতে আয়াতটি মাত্র ৬ শব্দের। মাঝখানে থামার চিহ্ন দিয়ে তা দুটি ছোট বাক্যে ভাগ হয়েছে। প্রথম বাক্য একটি ঘটনার খবর দেয়, দ্বিতীয় বাক্য শ্রোতাকে জানিয়ে দেয় সেই ঘটনার মানে কী।"
          }
        ]
      },
      {
        "h": {
          "en": "The Horn in the Sources",
          "bn": "তাফসীরের ভাষায় শিঙ্গা"
        },
        "p": [
          {
            "en": "The verb nufikha is passive and comes in the past form, though the English renders it as something that will happen. The verse does not say who blows; it says only that the blowing takes place. For as-sur, the Muyassar gives a one-word gloss, al-qarn, the horn, which is the sense the translations here carry. At-Tabari does not explain the word again on this verse. He says he has already set out the meaning of as-sur and how it is blown, with the views of those who differed and the one he holds most correct, so he need not repeat it.",
            "bn": "নুফিখা ক্রিয়াটি কর্মবাচ্যে, আর আরবিতে তা অতীত কালের রূপে এসেছে, যদিও ইংরেজি অনুবাদ একে ভবিষ্যতের ঘটনা হিসেবে লিখেছে। কে ফুঁ দেবে, আয়াত তা বলে না। শুধু জানায়, ফুঁ দেওয়া হবে। আস-সূর শব্দের ব্যাখ্যায় মুয়াসসার একটিমাত্র শব্দ দেয়: আল-কারন, অর্থাৎ শিঙ্গা। এখানকার অনুবাদগুলোও এ অর্থই ধরেছে। তাবারী এ আয়াতে শব্দটির ব্যাখ্যা আর দেন না। তিনি বলেন, সূর কী এবং তাতে কীভাবে ফুঁ দেওয়া হবে, সে বিষয়ে মতভেদকারীদের মত আর তাঁর কাছে সবচেয়ে সঠিক মতটি তিনি আগেই বলে এসেছেন। তাই এখানে আবার বলার দরকার নেই।"
          },
          {
            "en": "Al-Qurtubi does the same, noting that the discussion of the blowing has already been given in full. Ibn Kathir also refers back: his discussion of the report about the blowing in the Horn, the terror, the swoon and the raising has come before, and that, he adds, is the Day of Resurrection. This article stays inside what was fetched for this verse, so it does not supply those earlier discussions from memory. The Horn belongs to the unseen. What the sources say about it here is short, and the article keeps it short.",
            "bn": "কুরতুবীও একই কাজ করেন। তিনি জানান, শিঙ্গায় ফুঁ দেওয়ার আলোচনা আগেই পূর্ণাঙ্গভাবে হয়ে গেছে। ইবন কাসীরও পেছনের দিকে ইঙ্গিত করেন। শিঙ্গায় ফুঁ, আতঙ্ক, বেহুঁশ হয়ে পড়া আর পুনরুত্থান নিয়ে বর্ণনার আলোচনা আগেই এসেছে, আর তিনি যোগ করেন, সেটাই কিয়ামতের দিন। এই লেখা কেবল এ আয়াতের জন্য সংগ্রহ করা তাফসীরের ভেতরেই থাকে, তাই আগের সেই আলোচনাগুলো স্মৃতি থেকে জুড়ে দেয় না। শিঙ্গা গায়েবের বিষয়। তাফসীরগুলো এখানে এ নিয়ে অল্প কথা বলেছে, এ লেখাও তা অল্পই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Blowing Is Meant",
          "bn": "এটি কোন ফুঁ"
        },
        "p": [
          {
            "en": "Three of the commentaries fetched for this verse say plainly which blowing is meant. The Muyassar calls it nafkhat al-ba'th ath-thaniya, the second blowing, the blowing of resurrection. Al-Qurtubi says it is an-nafkha al-akhira lil-ba'th, the last blowing, for the raising. Al-Baghawi says simply that it means nafkhat al-ba'th, the blowing of resurrection. Their words differ a little, second in one and last in another, but all three tie this blowing to the raising of the dead.",
            "bn": "এ আয়াতের জন্য সংগ্রহ করা তাফসীরের তিনটি স্পষ্ট করে বলে দেয় এটি কোন ফুঁ। মুয়াসসার একে বলে নাফখাতুল বা'সিস সানিয়া: দ্বিতীয় ফুঁ, পুনরুত্থানের ফুঁ। কুরতুবী বলেন, এটি আন-নাফখাতুল আখিরা লিল-বা'স: শেষ ফুঁ, যা মানুষকে জীবিত করে তোলার জন্য। বাগাভী সংক্ষেপে বলেন, এর অর্থ নাফখাতুল বা'স, পুনরুত্থানের ফুঁ। তাঁদের শব্দে সামান্য তফাত আছে। একজন বলেন দ্বিতীয়, আরেকজন বলেন শেষ। কিন্তু তিনজনই এই ফুঁকে মৃতদের জীবিত হয়ে ওঠার সঙ্গে যুক্ত করেন।"
          },
          {
            "en": "None of the texts fetched for this verse identifies it as the first blowing. At-Tabari and Ibn Kathir give no number here at all, since both send the reader back to their earlier discussions, and as-Sa'di moves straight to the meaning of the Day. So on the question a reader might bring, which blast this is, the commentators who answer agree, and those who do not answer leave it open rather than contradict them. There is no dispute here for this article to record, and none has been invented to fill the space.",
            "bn": "এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীরই একে প্রথম ফুঁ বলে চিহ্নিত করেনি। তাবারী ও ইবন কাসীর এখানে কোনো সংখ্যাই বলেন না, কারণ দুজনেই পাঠককে তাঁদের আগের আলোচনার দিকে পাঠিয়ে দেন। সা'দী সরাসরি চলে যান দিনটির অর্থে। তাই পাঠকের মনে যে প্রশ্ন আসতে পারে, এটি কোন ফুঁ, সে প্রশ্নের যাঁরা জবাব দিয়েছেন তাঁরা একমত। যাঁরা জবাব দেননি, তাঁরা বিষয়টি খোলা রেখেছেন, বিরোধিতা করেননি। এখানে লিপিবদ্ধ করার মতো কোনো মতভেদ নেই, আর জায়গা ভরাতে কোনো মতভেদ বানানোও হয়নি।"
          },
          {
            "en": "Ibn Kathir's brief reference does name, alongside the blowing, al-faza', the terror, as-sa'q, the swoon, and al-ba'th, the raising, and he adds that this is the Day of Resurrection. The article reports those words as he gives them and goes no further, since the details sit in a discussion he wrote elsewhere, which was not fetched here. Read beside 50:19, the verse makes its point without them: after each private death comes a shared raising, and nobody is left out of it.",
            "bn": "তবে ইবন কাসীরের সংক্ষিপ্ত ইঙ্গিতে শিঙ্গার ফুঁ-এর সঙ্গে আরও তিনটি শব্দ আছে: আল-ফাযা', অর্থাৎ আতঙ্ক; আস-সা'ক, অর্থাৎ বেহুঁশ হয়ে পড়া; আর আল-বা'স, অর্থাৎ পুনরুত্থান। সঙ্গে তিনি যোগ করেন, সেটাই কিয়ামতের দিন। এ লেখা শব্দগুলো তিনি যেভাবে দিয়েছেন সেভাবেই জানাচ্ছে, এর বেশি এগোচ্ছে না। কারণ বিস্তারিত আছে তাঁর অন্য জায়গার আলোচনায়, যা এখানে সংগ্রহ করা হয়নি। ৫০:১৯ আয়াতের পাশে রেখে পড়লে বিস্তারিত ছাড়াই আয়াতের কথাটা স্পষ্ট হয়। প্রত্যেকের একান্ত মৃত্যুর পর আসে সবার একসঙ্গে জীবিত হওয়া, আর তা থেকে কেউ বাদ পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Already Given",
          "bn": "আগেই দেওয়া হুঁশিয়ারি"
        },
        "p": [
          {
            "en": "The second sentence, dhalika yawmu l-wa'id, names the day. At-Tabari explains it this way: this day on which the blowing happens is the Day of the threat, the threat Allah made to the disbelievers that He would punish them on it. Al-Qurtubi gives almost the same words, and al-Baghawi repeats them as well. For these three, wa'id is a warning that was spoken beforehand, and the day the verse names is the day on which that spoken warning is carried out.",
            "bn": "দ্বিতীয় বাক্য, যালিকা ইয়াওমুল ওয়াঈদ, দিনটির নাম জানিয়ে দেয়। তাবারী এর ব্যাখ্যা করেন এভাবে: যে দিনে ফুঁ দেওয়া হবে, সেটাই হুঁশিয়ারির দিন। আল্লাহ কাফিরদের হুঁশিয়ার করেছিলেন যে সেদিন তিনি তাদের শাস্তি দেবেন। কুরতুবী প্রায় একই কথা বলেন, বাগাভীও তা-ই পুনরাবৃত্তি করেন। এই তিনজনের কাছে ওয়াঈদ মানে আগেই মুখে উচ্চারিত এক সতর্কবাণী। আর আয়াত যে দিনের নাম নিচ্ছে, তা সেই দিন, যেদিন উচ্চারিত সেই সতর্কবাণী কার্যকর হয়।"
          },
          {
            "en": "Al-Baghawi then adds a line from Muqatil: by al-wa'id is meant the punishment, that is, the day on which the threat comes to pass. The Muyassar reads it the same way: that blowing is on the day the threat with which Allah threatened the disbelievers takes place. The word shifts slightly here. In at-Tabari's gloss it is the warning as spoken; in Muqatil's it is the punishment itself, the thing the warning was about. Both readings arrive at the same day, but they let the reader hear the word from two sides.",
            "bn": "বাগাভী এরপর মুকাতিলের একটি কথা যোগ করেন: আল-ওয়াঈদ বলে বোঝানো হয়েছে শাস্তি, অর্থাৎ যে দিনে হুঁশিয়ারি বাস্তবে ঘটে। মুয়াসসারও একইভাবে পড়ে: ওই ফুঁ সেই দিনে, যেদিন আল্লাহ কাফিরদের যে হুঁশিয়ারি দিয়েছিলেন তা ঘটে যায়। এখানে শব্দটির অর্থ একটু সরে যায়। তাবারীর ব্যাখ্যায় এটি উচ্চারিত সতর্কবাণী। মুকাতিলের ব্যাখ্যায় এটি খোদ শাস্তি, যে বিষয়ে সতর্ক করা হয়েছিল। দুই পাঠই একই দিনে গিয়ে পৌঁছায়, তবে পাঠক শব্দটিকে দুই দিক থেকে শুনতে পান।"
          },
          {
            "en": "The English translation printed with the verse, the Day of [carrying out] the threat, brackets the same idea, and the Bengali translation adds that it is the day people were warned about. So the word is not a vague mood of dread. In every gloss above it points back to something said clearly and in advance, by the One who will carry it out. A blow that falls without notice would be a different thing altogether. This one, as the commentators describe it, was announced long before it arrives.",
            "bn": "আয়াতের সঙ্গে ছাপা ইংরেজি অনুবাদ বন্ধনীর ভেতরে একই কথা যোগ করেছে: হুঁশিয়ারি কার্যকর করার দিন। বাংলা অনুবাদও যোগ করেছে, এ সেই দিন যে সম্পর্কে মানুষকে সতর্ক করা হয়েছিল। তাই শব্দটি কোনো অস্পষ্ট ভয়ের আবহ নয়। ওপরের প্রতিটি ব্যাখ্যায় তা ফিরে যায় এমন এক কথার দিকে, যা স্পষ্ট করে আগেভাগে বলা হয়েছিল, আর বলেছেন তিনিই, যিনি তা কার্যকর করবেন। কোনো খবর না দিয়ে হঠাৎ নেমে আসা আঘাত হতো সম্পূর্ণ আলাদা জিনিস। তাফসীরকারদের বর্ণনায় এই দিনটির ঘোষণা এসেছে তা আসার অনেক আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Threat and Promise on One Day",
          "bn": "এক দিনে হুঁশিয়ারি ও প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "As-Sa'di explains the day differently in one respect. He says it is the day on which what Allah threatened the wrongdoers with, of punishment, reaches them, and what He promised the believers, of reward, reaches them too. His sentence sets two verbs from the same root side by side: aw'adahum for the threat to the wrongdoers and wa'adahum for the promise to the believers. The word in the verse is the first of these, but in his gloss the one day settles both accounts at once.",
            "bn": "একটি দিক থেকে সা'দী দিনটির ব্যাখ্যা দেন ভিন্নভাবে। তিনি বলেন, এ সেই দিন, যেদিন আল্লাহ জালিমদের যে শাস্তির হুঁশিয়ারি দিয়েছিলেন তা তাদের কাছে পৌঁছে যায়। আর মুমিনদের যে পুরস্কারের প্রতিশ্রুতি দিয়েছিলেন, তাও তাদের কাছে পৌঁছে যায়। তাঁর বাক্যে একই ধাতুর দুটি ক্রিয়া পাশাপাশি বসেছে: জালিমদের জন্য হুঁশিয়ারি বোঝাতে আও'আদাহুম, আর মুমিনদের জন্য প্রতিশ্রুতি বোঝাতে ওয়া'আদাহুম। আয়াতের শব্দটি প্রথমটির, তবু তাঁর ব্যাখ্যায় এক দিনেই দুই হিসাব মিটে যায়।"
          },
          {
            "en": "This is a difference of emphasis, not a contradiction. At-Tabari, al-Qurtubi, al-Baghawi and the Muyassar keep to the word wa'id and name its addressees, the disbelievers; as-Sa'di speaks of the wrongdoers and sets the believers' reward beside it. The article takes no side between them. One caution belongs here. The verse names no group, and when commentators name the addressees of a threat, they describe what the text describes. That licenses nothing against any living person or community, and it makes no reader a judge of who belongs where.",
            "bn": "এটা জোর দেওয়ার পার্থক্য, পরস্পরবিরোধিতা নয়। তাবারী, কুরতুবী, বাগাভী ও মুয়াসসার ওয়াঈদ শব্দেই থাকেন এবং কাদের উদ্দেশে হুঁশিয়ারি, তা বলেন: কাফিররা। সা'দী বলেন জালিমদের কথা, আর তার পাশে রাখেন মুমিনদের পুরস্কার। এ লেখা তাঁদের কারও পক্ষ নিচ্ছে না। তবে এখানে একটা সতর্কতা জরুরি। আয়াত কোনো দলের নাম নেয়নি। তাফসীরকারেরা যখন হুঁশিয়ারির লক্ষ্য কারা তা বলেন, তখন তাঁরা পাঠ্য যা বর্ণনা করে তা-ই বর্ণনা করেন। এতে আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুই করার অনুমতি মেলে না। কে কোন দলে, তার বিচারক কোনো পাঠককে বানানো হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word That Runs Through Qaf",
          "bn": "সূরা কাফ জুড়ে একটি শব্দ"
        },
        "p": [
          {
            "en": "The word wa'id is not isolated in this surah. In 50:14, after naming peoples who denied their messengers, the verse ends fa-haqqa wa'id: so My threat was justly fulfilled. Here in 50:20 it is yawmu l-wa'id, the Day of the threat. In 50:28 Allah says: do not dispute before Me, when I had already sent the threat on ahead to you. And the surah closes in 50:45 with a command to the Prophet ﷺ: so remind, by the Qur'an, whoever fears My threat.",
            "bn": "এ সূরায় ওয়াঈদ শব্দটি একা নয়। ৫০:১৪ আয়াতে রসূলদের অস্বীকারকারী জাতিগুলোর নাম বলার পর আয়াত শেষ হয় ফাহাক্কা ওয়াঈদ দিয়ে: ফলে আমার হুঁশিয়ারি যথার্থভাবে সত্য হলো। এখানে ৫০:২০ আয়াতে তা ইয়াওমুল ওয়াঈদ, হুঁশিয়ারির দিন। ৫০:২৮ আয়াতে আল্লাহ বলেন: আমার সামনে বিবাদ কোরো না, আমি তো আগেই তোমাদের কাছে হুঁশিয়ারি পাঠিয়ে দিয়েছিলাম। আর ৫০:৪৫ আয়াতে সূরা শেষ হয় নবী ﷺ-কে দেওয়া এক নির্দেশে: যে আমার হুঁশিয়ারিকে ভয় করে, তাকে কুরআন দিয়ে উপদেশ দিন।"
          },
          {
            "en": "Read together, these four verses trace one line: a threat fulfilled on past peoples, a day on which it falls, a reminder that it was sent ahead of time, and a command to remind with the Qur'an those who fear it. This is the article's own observation from the surah's text, not a reading drawn from the commentators. The peoples of 50:14 are spoken of only as the text speaks of them, and that verse, like this one, licenses no judgement on any living person. The warning is addressed to whoever is listening now.",
            "bn": "চারটি আয়াত একসঙ্গে পড়লে একটা রেখা ফুটে ওঠে। অতীতের জাতিগুলোর উপর সত্য হওয়া হুঁশিয়ারি, যে দিনে তা নেমে আসে, তা যে আগেভাগে পাঠানো হয়েছিল তার স্মরণ, আর যারা তা ভয় করে তাদের কুরআন দিয়ে উপদেশ দেওয়ার নির্দেশ। এটা সূরার পাঠ থেকে এ লেখার নিজের পর্যবেক্ষণ, তাফসীরকারদের কাছ থেকে নেওয়া কোনো ব্যাখ্যা নয়। ৫০:১৪ আয়াতের জাতিগুলোর কথা এখানে ততটুকুই, যতটুকু পাঠ্য বলে। ওই আয়াত এবং এই আয়াত, কোনোটিই আজকের কোনো জীবিত মানুষের উপর রায় দেওয়ার অনুমতি দেয় না। সতর্কবাণীটি তাঁর উদ্দেশে, যিনি এখন শুনছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How Can I Be at Ease",
          "bn": "কীভাবে নিশ্চিন্ত থাকি"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches one narration to this verse. In his Arabic, the Messenger of Allah ﷺ asks how he could feel at ease while the bearer of the Horn has already taken it to his lips, bowed his forehead and waits to be given leave. Asked what they should say, he tells them to say hasbuna Allahu wa ni'ma l-wakil, and the people say it. His Arabic names no collection; the abridged English edition cites Tuhfat al-Ahwadhi, a commentary on at-Tirmidhi's Jami'.",
            "bn": "ইবন কাসীর এ আয়াতের সঙ্গে একটি বর্ণনা যুক্ত করেন। তাঁর আরবি পাঠে রসূলুল্লাহ ﷺ জিজ্ঞেস করেন, আমি কীভাবে নিশ্চিন্তে থাকি, যখন শিঙ্গাওয়ালা শিঙ্গা মুখে তুলে নিয়েছে, কপাল ঝুঁকিয়ে দিয়েছে আর অনুমতির অপেক্ষা করছে? সাহাবীরা জানতে চাইলেন তাঁরা কী বলবেন। তিনি বললেন, বলো: হাসবুনাল্লাহু ওয়া নি'মাল ওয়াকীল। আর লোকেরা তা-ই বলল। ইবন কাসীরের আরবি পাঠে কোনো হাদীসগ্রন্থের নাম নেই। সংক্ষিপ্ত ইংরেজি সংস্করণ তুহফাতুল আহওয়াযীর বরাত দেয়, যা তিরমিযীর জামি'র একটি ব্যাখ্যাগ্রন্থ।"
          },
          {
            "en": "At-Tirmidhi records it (3243) from Abu Sa'id al-Khudri (RA). In full: the Messenger of Allah ﷺ said, How can I be at ease, when the bearer of the Horn has taken the Horn to his lips, bowed his forehead and inclined his ear, waiting to be commanded to blow, so that he blows? The Muslims said: Then what should we say, O Messenger of Allah? He said: Say, Allah is sufficient for us, and how excellent a Guardian He is; we have put our trust in Allah, our Lord. At-Tirmidhi grades it hasan.",
            "bn": "তিরমিযী ৩২৪৩ নম্বরে আবু সাঈদ খুদরী (রাঃ) থেকে বর্ণনাটি এনেছেন। পুরোটা এই: রসূলুল্লাহ ﷺ বললেন, আমি কীভাবে নিশ্চিন্তে থাকি, যখন শিঙ্গাওয়ালা শিঙ্গা ঠোঁটে তুলে নিয়েছে, কপাল ঝুঁকিয়ে দিয়েছে আর কান পেতে রেখেছে, অপেক্ষা করছে কখন ফুঁ দেওয়ার হুকুম আসবে আর সে ফুঁ দেবে? মুসলিমরা বললেন, তাহলে আমরা কী বলব, হে আল্লাহর রসূল? তিনি বললেন, বলো: আল্লাহই আমাদের জন্য যথেষ্ট, আর তিনি কত উত্তম কর্মবিধায়ক। আমরা আমাদের রব আল্লাহর উপর ভরসা করেছি। তিরমিযী একে হাসান বলেছেন।"
          },
          {
            "en": "He records it again at 2431 through another line of narrators from Abu Sa'id, and grades it hasan too; there the narrator adds that the matter seemed to weigh heavily on the Companions. Two things in the narration bear on this verse. The Prophet ﷺ speaks of the bearer of the Horn as already in position, close enough to take away his ease. And he does not leave his Companions holding the weight. He gives them words of reliance, so that fear is handed over to Allah rather than dismissed or allowed to paralyse.",
            "bn": "তিরমিযী ২৪৩১ নম্বরে আবু সাঈদ (রাঃ) থেকে আরেক বর্ণনাকারী-ধারায় হাদীসটি আবার এনেছেন, আর সেটিকেও হাসান বলেছেন। সেখানে বর্ণনাকারী যোগ করেন, কথাটা সাহাবীদের কাছে খুব ভারী মনে হয়েছিল। এ আয়াত বোঝার জন্য বর্ণনাটির দুটি দিক গুরুত্বপূর্ণ। নবী ﷺ শিঙ্গাওয়ালার কথা বলেন এমনভাবে, যেন সে প্রস্তুত হয়েই আছে, আর সেই কথাই তাঁর নিশ্চিন্ত থাকা কেড়ে নেয়। আবার তিনি সাহাবীদের সেই ভার নিয়ে একা ফেলে রাখেন না। তাঁদের হাতে তুলে দেন ভরসার কিছু কথা। ভয়কে উড়িয়ে দেওয়া নয়, ভয়ে অবশ হয়ে পড়াও নয়, বরং ভয়টা আল্লাহর হাতে সঁপে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Horn Sounds",
          "bn": "ফুঁ দেওয়ার আগের সময়টুকু"
        },
        "p": [
          {
            "en": "The verses that follow move on to the gathering itself, and they are a subject of their own. This verse stops at the threshold: the blowing, and the name of the day. That is enough to work with. A warning given in advance is still useful to anyone it reaches, because it can still be acted on. Every reader of 50:20 stands on the near side of that blowing, with the notice already delivered and the time to answer it not yet over.",
            "bn": "পরের আয়াতগুলো চলে যায় সমবেত হওয়ার দৃশ্যে, সেগুলো আলাদা আলোচনার বিষয়। এ আয়াত থেমে থাকে দোরগোড়ায়: শিঙ্গার ফুঁ আর দিনটির নাম। কাজ করার জন্য এটুকুই যথেষ্ট। আগেভাগে দেওয়া সতর্কবাণী যার কাছে পৌঁছায়, তার কাজে লাগে, কারণ তখনো তা মেনে চলার সুযোগ থাকে। ৫০:২০ আয়াতের প্রত্যেক পাঠক দাঁড়িয়ে আছেন ফুঁ দেওয়ার আগের পাশে। নোটিশ হাতে পৌঁছে গেছে, আর জবাব দেওয়ার সময় এখনো ফুরোয়নি।"
          },
          {
            "en": "So the verse asks for a response that is neither numbness nor despair. Numbness hears the word wa'id so often that it stops meaning anything. Despair hears it and stops acting. The narration Ibn Kathir attaches points between them: let the day weigh on you, then say hasbuna Allahu wa ni'ma l-wakil and do the next right thing. Repair a wrong, return what is owed, pray the prayer you were putting off. The Horn has not yet been blown, and that is the whole of the opportunity.",
            "bn": "তাই আয়াতটি এমন সাড়া চায়, যা অসাড়তাও নয়, হতাশাও নয়। অসাড় মন ওয়াঈদ শব্দটা এত বেশি শোনে যে শেষে তার আর কোনো মানে থাকে না। হতাশ মন শুনেই হাত গুটিয়ে নেয়। ইবন কাসীর যে বর্ণনাটি যুক্ত করেছেন, তা দেখায় এ দুয়ের মাঝের পথ। দিনটির ভার মনে অনুভব করুন, তারপর বলুন হাসবুনাল্লাহু ওয়া নি'মাল ওয়াকীল, আর এরপর যে ভালো কাজটি সামনে, তা করুন। কোনো অন্যায় শুধরে নিন, কারও পাওনা ফিরিয়ে দিন, যে নামায পিছিয়ে রাখছিলেন তা আদায় করুন। শিঙ্গায় এখনো ফুঁ দেওয়া হয়নি, আর সুযোগ বলতে এটুকুই।"
          }
        ]
      }
    ]
  },
  "50:23": {
    "sections": [
      {
        "h": {
          "en": "Six Words at the Gathering",
          "bn": "হাশরের মাঠে ছয়টি শব্দ"
        },
        "p": [
          {
            "en": "Wa qala qarinuhu hadha ma ladayya 'atid: and his companion will say, this is what is with me, ready. The verse has six Arabic words, and it arrives at a precise moment in the scene. Just before it, 50:21 says that every soul will come with a driver and a witness, and 50:22 tells a person that the cover over him has been lifted and his sight is sharp today. Now the companion who came with him speaks, and what he says is short.",
            "bn": "ওয়া কালা কারীনুহু হাযা মা লাদাইয়া আতীদ: আর তার সঙ্গী বলবে, এই যে আমার কাছে যা আছে, প্রস্তুত। আরবীতে আয়াতটি মাত্র ছয়টি শব্দের। দৃশ্যের ঠিক একটা নির্দিষ্ট মুহূর্তে এর আগমন। এর আগে ৫০:২১ বলেছে, প্রত্যেক প্রাণ আসবে একজন চালক আর একজন সাক্ষী সঙ্গে নিয়ে। তারপর ৫০:২২ মানুষটিকে জানিয়েছে, তার চোখের পর্দা সরিয়ে দেওয়া হয়েছে, আজ তার দৃষ্টি তীক্ষ্ণ। এবার কথা বলে সেই সঙ্গী, যে তার সঙ্গে এসেছে। তার কথা খুব সংক্ষিপ্ত।"
          },
          {
            "en": "The English abridgement of Ibn Kathir heads this passage with the words: the angel will bear witness. That is the verse's work in the surah, testimony given at the moment of arrival. This article stays with these six words. What follows in 50:24 and after belongs to its own verses and is not developed here. The verse raises two questions, and the commentators answer each of them in several ways: who is the companion, and what exactly is it that he has ready?",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ এই অংশের শিরোনাম দিয়েছে: ফেরেশতা সাক্ষ্য দেবে। সূরার ভেতরে আয়াতটির কাজ এটাই, হাজির হওয়ার মুহূর্তে সাক্ষ্য। এ লেখা এই ছয়টি শব্দের মধ্যেই থাকবে। ৫০:২৪ ও তার পরের আয়াতগুলোর আলোচনা তাদের নিজেদের জায়গায়, এখানে তা টানা হবে না। আয়াতটি দুটি প্রশ্ন তোলে, আর তাফসীরকারেরা দুটিরই জবাব দেন নানাভাবে। সঙ্গীটি কে? আর তার কাছে প্রস্তুত জিনিসটা আসলে কী?"
          }
        ]
      },
      {
        "h": {
          "en": "The Angel Set Over Him",
          "bn": "যে ফেরেশতা তার দায়িত্বে"
        },
        "p": [
          {
            "en": "Most of the fetched commentators identify the qarin as an angel. At-Tabari reports from Qatadah, on this verse, a single word: the angel. Al-Qurtubi gives the angel entrusted with the person, al-malak al-muwakkal bihi, as the saying of al-Hasan, Qatadah and ad-Dahhak, and al-Baghawi opens with the same phrase. The Muyassar is more specific: the writing angel who is a witness against him. Ibn Kathir says Allah is telling of the angel entrusted with the deeds of the son of Adam, who will testify against him on the Day of Resurrection to what he did.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তার বেশিরভাগই কারীন বলতে ফেরেশতা বোঝায়। তাবারী এ আয়াতে কাতাদা থেকে একটিমাত্র শব্দ বর্ণনা করেন: ফেরেশতা। কুরতুবী বলেন, সে হলো মানুষটির দায়িত্বে নিযুক্ত ফেরেশতা, আল-মালাকুল মুওয়াক্কালু বিহী। এটাকে তিনি হাসান, কাতাদা ও দাহহাকের মত বলে উল্লেখ করেন। বাগাভীও শুরু করেন ঠিক এই কথা দিয়ে। মুয়াসসার আরও নির্দিষ্ট করে বলে: সেই লেখক ফেরেশতা, যে তার বিরুদ্ধে সাক্ষী। ইবন কাসীর বলেন, আল্লাহ এখানে সেই ফেরেশতার খবর দিচ্ছেন যাকে আদমসন্তানের আমলের দায়িত্ব দেওয়া হয়েছে। কিয়ামতের দিন সে তার কৃতকর্মের ব্যাপারে তার বিরুদ্ধে সাক্ষ্য দেবে।"
          },
          {
            "en": "As-Sa'di widens the angel's charge. The companion, he says, is from the angels whom Allah entrusted with guarding the person and guarding his deeds; he brings him on the Day of Resurrection, brings his deeds, and speaks. Ma'arif al-Qur'an calls the qarin the recording angel who accompanies a person all the time, and recalls that two angels record deeds. On its reading the two are given different tasks on the Day: one drives people to the place of gathering, and the other carries the record of deeds and speaks these words.",
            "bn": "সা'দী ফেরেশতার দায়িত্বকে আরও বিস্তৃত করে দেখেন। তাঁর মতে এই সঙ্গী সেই ফেরেশতাদের একজন, যাদের আল্লাহ মানুষটিকে হেফাজত করার এবং তার আমল সংরক্ষণের ভার দিয়েছেন। কিয়ামতের দিন সে তাকে হাজির করবে, তার আমলও হাজির করবে, তারপর এ কথা বলবে। মাআরিফুল কুরআনের মতে কারীন সেই লেখক ফেরেশতা, যে সব সময় মানুষের সঙ্গে থাকে। সেখানে মনে করিয়ে দেওয়া হয়েছে, আমল লেখেন দুজন ফেরেশতা। সেদিন দুজনের কাজ হবে আলাদা। একজন মানুষকে হাঁকিয়ে নেবে হাশরের মাঠের দিকে। অন্যজন বহন করবে আমলনামা, আর এই কথাগুলো বলবে সে-ই।"
          }
        ]
      },
      {
        "h": {
          "en": "Driver, Witness, or Both",
          "bn": "চালক, সাক্ষী, নাকি দুজনই"
        },
        "p": [
          {
            "en": "A second line of reports makes the speaker the driver. At-Tabari cites Ibn Zayd: this is his driver, who was entrusted with him, and Ibn Zayd then recited 50:21, every soul will come with a driver and a witness. Ibn Kathir brings Mujahid to the same effect: these are the words of the driving angel, who says, this is the son of Adam You entrusted to me; I have brought him. On this reading the companion is the escort whose duty was to deliver the person, and he announces that the duty is done.",
            "bn": "আরেক ধারার বর্ণনায় বক্তা হলো চালক ফেরেশতা। তাবারী ইবন যায়দের কথা উদ্ধৃত করেন: এ তার চালক, যাকে তার দায়িত্ব দেওয়া হয়েছিল। এরপর ইবন যায়দ তিলাওয়াত করেন ৫০:২১, প্রত্যেক প্রাণ আসবে একজন চালক আর একজন সাক্ষী নিয়ে। ইবন কাসীর মুজাহিদ থেকে একই অর্থের কথা আনেন: এ হলো হাঁকিয়ে আনা ফেরেশতার কথা। সে বলবে, এই সেই আদমসন্তান, যার দায়িত্ব আপনি আমাকে দিয়েছিলেন, আমি তাকে হাজির করেছি। এ ব্যাখ্যায় সঙ্গী হলো সেই পাহারাদার, যার কাজ ছিল মানুষটিকে পৌঁছে দেওয়া। কাজ শেষ, সে তা-ই ঘোষণা করছে।"
          },
          {
            "en": "At-Tabari's own gloss names both figures: the companion of this person, who comes on the Day of Resurrection with a driver and a witness alongside him. Ibn Kathir reports that Ibn Jarir, that is at-Tabari, chose to make the word cover both the driver and the witness, and adds that this view has a sound direction and strength. Ma'arif al-Qur'an reports the same of Ibn Jarir, next to its own reading that the speaker is the witness. These are different identifications, and this article sets them side by side without choosing among them.",
            "bn": "তাবারীর নিজের ব্যাখ্যায় দুজনেরই উল্লেখ আছে: এই মানুষটির সঙ্গী, যে কিয়ামতের দিন আসবে সঙ্গে চালক ও সাক্ষী নিয়ে। ইবন কাসীর জানান, ইবন জারীর, অর্থাৎ তাবারী, শব্দটিকে চালক ও সাক্ষী দুজনের জন্যই ব্যাপক ধরেছেন। ইবন কাসীর সঙ্গে এও বলেন, এ মতের পেছনে যুক্তি আছে, জোরও আছে। মাআরিফুল কুরআনও ইবন জারীরের এই মত উল্লেখ করে, যদিও তার নিজের ব্যাখ্যায় বক্তা হলো সাক্ষী ফেরেশতা। পরিচয় নিয়ে এগুলো ভিন্ন ভিন্ন মত। এ লেখা এগুলোকে পাশাপাশি রাখছে, কোনোটিকে বেছে নিচ্ছে না।"
          },
          {
            "en": "What the readings share is the voice of a commission completed. In Mujahid's wording, as Ibn Kathir, al-Qurtubi and al-Baghawi all give it, the companion says: this is the one You entrusted to me, wakkaltani. As-Sa'di has him say: I have brought what I was set over. In at-Tabari, Ibn Zayd calls the driver the one who was entrusted with him. Whoever the companion is, he speaks as an appointed agent reporting back to the One who appointed him.",
            "bn": "সব ব্যাখ্যায় একটা জিনিস মেলে: দায়িত্ব শেষ করে জবাবদিহির সুর। ইবন কাসীর, কুরতুবী ও বাগাভী তিনজনই মুজাহিদের যে ভাষ্য আনেন, তাতে সঙ্গী বলে: এই সেই মানুষ, যার দায়িত্ব আপনি আমাকে দিয়েছিলেন, ওয়াক্কালতানী। সা'দীর ভাষ্যে সে বলে: যার ভার আমাকে দেওয়া হয়েছিল, তা আমি হাজির করেছি। তাবারী ইবন যায়দের যে বর্ণনা আনেন, তাতে চালক সেই, যাকে মানুষটির দায়িত্ব দেওয়া হয়েছিল। সঙ্গী যে-ই হোক, সে কথা বলে নিযুক্ত প্রতিনিধির মতো, যিনি নিয়োগ দিয়েছেন তাঁর কাছে হিসাব বুঝিয়ে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report That Names Shaytan",
          "bn": "যে বর্ণনায় শয়তানের কথা"
        },
        "p": [
          {
            "en": "Al-Qurtubi records something further. After giving Mujahid's reading, in which the companion brings the person and the register of his deeds, he adds: and from Mujahid also, his companion is the one assigned to him from among the devils. So a single authority is reported with both identifications, and al-Qurtubi preserves the second without weighing it. This matters because the same word, qarinuhu, returns four verses later, in 50:27, where the companion says: our Lord, I did not make him transgress.",
            "bn": "কুরতুবী আরও একটি কথা লিখে রাখেন। মুজাহিদের যে ব্যাখ্যায় সঙ্গী মানুষটিকে আর তার আমলের খাতা হাজির করে, তা উল্লেখ করার পর তিনি যোগ করেন: মুজাহিদ থেকে এও বর্ণিত, তার সঙ্গী হলো শয়তানদের মধ্য থেকে তার জন্য নিযুক্ত করা সঙ্গী। তাহলে একই ব্যক্তি থেকে দুই রকম পরিচয়ই বর্ণিত হয়েছে। দ্বিতীয়টিকে কুরতুবী কোনো মূল্যায়ন ছাড়াই রেখে দেন। কথাটা গুরুত্বপূর্ণ, কারণ কারীনুহু শব্দটি চারটি আয়াত পরে ৫০:২৭-এ আবার আসে। সেখানে সঙ্গী বলে: হে আমাদের রব, আমি তাকে সীমালঙ্ঘনে ঠেলে দিইনি।"
          },
          {
            "en": "Ibn Kathir's English abridgement, on 50:27, says that companion is the devil entrusted to every man, according to 'Abdullah ibn 'Abbas, Mujahid, Qatadah and several others. By that reading, two companions stand in view within a few verses: an angel who speaks in 50:23 and a devil who speaks in 50:27. Apart from the report al-Qurtubi preserves, every commentary fetched on 50:23 speaks of an angel here. This article records both reports as they stand and does not decide which companion speaks in this verse.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৫০:২৭-এর আলোচনায় বলে, সেখানকার সঙ্গী হলো সেই শয়তান, যাকে প্রত্যেক মানুষের সঙ্গে লাগিয়ে দেওয়া হয়েছে। এ মত আবদুল্লাহ ইবন আব্বাস (রাঃ), মুজাহিদ, কাতাদা ও আরও অনেকের। এ পাঠ ধরলে অল্প কয়েক আয়াতের মধ্যে দুজন সঙ্গী চোখে পড়ে: ৫০:২৩-এ কথা বলে একজন ফেরেশতা, আর ৫০:২৭-এ একজন শয়তান। কুরতুবীর রেখে দেওয়া ওই বর্ণনাটি বাদ দিলে, ৫০:২৩-এর যত তাফসীর দেখা হয়েছে, সবগুলোই এখানে ফেরেশতার কথা বলে। এ লেখা দুটি বর্ণনাই যেমন আছে তেমন রাখছে। এ আয়াতে কোন সঙ্গী কথা বলছে, সে ফয়সালা এখানে করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Record or the Man",
          "bn": "আমলনামা, নাকি মানুষটি নিজে"
        },
        "p": [
          {
            "en": "The second question is the phrase ma ladayya, what is with me. Several readings make it the record. Al-Qurtubi glosses it as what I have of the writing of his deeds, prepared and preserved. The Muyassar gives what I have of the register of his deeds, diwan 'amalih. Ma'arif al-Qur'an translates with a bracket: this is what I have with me, ready to be presented as his record of deeds. At-Tabari's gloss leaves the object unnamed: this which is with me is prepared and kept.",
            "bn": "দ্বিতীয় প্রশ্ন মা লাদাইয়া কথাটি নিয়ে, অর্থাৎ আমার কাছে যা আছে। কয়েকটি ব্যাখ্যায় এর মানে আমলনামা। কুরতুবীর ব্যাখ্যা: তার আমলের যে লিখিত হিসাব আমার কাছে আছে, তা প্রস্তুত ও সংরক্ষিত। মুয়াসসার বলে: তার আমলের দফতর, দীওয়ানু আমালিহ, যা আমার কাছে আছে। মাআরিফুল কুরআন বন্ধনী দিয়ে অনুবাদ করে: আমার কাছে যা আছে, তা প্রস্তুত, তার আমলনামা হিসেবে পেশ করার জন্য। তাবারীর ব্যাখ্যায় জিনিসটির নাম নেই: আমার কাছে যা আছে, তা প্রস্তুত ও সংরক্ষিত।"
          },
          {
            "en": "Mujahid's report reads it as the person. In Ibn Kathir's wording the driver says: this is the son of Adam You entrusted to me; I have brought him. Al-Qurtubi and al-Baghawi give Mujahid with an addition: I have brought him, and brought the register of his deeds. Al-Baghawi also records a view, introduced with it is said, that ma here carries the sense of man, who, the word used for persons. As-Sa'di holds both together: I have brought what I was set over, guarding him and guarding his deeds.",
            "bn": "মুজাহিদের বর্ণনায় এর মানে মানুষটি নিজে। ইবন কাসীরের ভাষায় চালক বলবে: এই সেই আদমসন্তান, যার দায়িত্ব আপনি আমাকে দিয়েছিলেন, আমি তাকে হাজির করেছি। কুরতুবী ও বাগাভী মুজাহিদের কথা আনেন একটু বাড়তি অংশসহ: আমি তাকে হাজির করেছি, তার আমলের দফতরও হাজির করেছি। বাগাভী আরেকটি মতও উল্লেখ করেন, 'বলা হয়' দিয়ে শুরু করে: এখানে মা শব্দটি মান অর্থে, অর্থাৎ যে, যা ব্যক্তির জন্য ব্যবহৃত হয়। সা'দী দুটোকে একসঙ্গে ধরেন: যার ভার আমাকে দেওয়া হয়েছিল, তাকে আর তার আমলকে হেফাজত করা, তা আমি হাজির করেছি।"
          },
          {
            "en": "Al-Qurtubi adds a further reading under it is said, with no name attached: the meaning is, this is what I have of punishment, present. It sits apart from the others, and he gives it without comment. So the phrase has been read as a record, as a person, as both, and as punishment made ready. The texts fetched for this verse do not settle the matter, and this article does not settle it either.",
            "bn": "কুরতুবী 'বলা হয়' দিয়ে আরও একটি ব্যাখ্যা যোগ করেন, কারও নাম ছাড়া: অর্থ হলো, আমার কাছে যে শাস্তি আছে, তা হাজির। ব্যাখ্যাটি বাকিগুলো থেকে আলাদা, আর তিনি এ নিয়ে কোনো মন্তব্য করেন না। তাহলে কথাটির পাঠ দাঁড়াল চার রকম: আমলনামা, মানুষটি, দুটোই একসঙ্গে, আর প্রস্তুত শাস্তি। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, সেগুলো বিষয়টির মীমাংসা করে না। এ লেখাও করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Added, Nothing Missing",
          "bn": "বাড়তিও নেই, ঘাটতিও নেই"
        },
        "p": [
          {
            "en": "'Atid is the verse's last word, and the commentators gloss it with words of readiness. Al-Baghawi has mu'add muhdar, prepared and brought forward. The Muyassar has prepared, preserved and present. Ibn Kathir has mu'tad muhdar, then adds the phrase that gives the word its weight: bila ziyadah wa la nuqsan, without addition and without deficit. His English abridgement renders it as prepared and completed without addition or deletion. Nothing has been slipped in to make the account heavier, and nothing has fallen out to make it lighter.",
            "bn": "আতীদ আয়াতের শেষ শব্দ। তাফসীরকারেরা এর ব্যাখ্যা দেন প্রস্তুতির শব্দ দিয়ে। বাগাভী বলেন মুআদ্দ মুহদার, অর্থাৎ তৈরি করা এবং সামনে হাজির। মুয়াসসার বলে: প্রস্তুত, সংরক্ষিত, উপস্থিত। ইবন কাসীর বলেন মু'তাদ মুহদার, তারপর এমন একটি কথা যোগ করেন যা শব্দটিকে ভারী করে তোলে: বিলা যিয়াদাতিন ওয়া লা নুকসান, কিছু বাড়তি নেই, কিছু ঘাটতিও নেই। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণেও একই কথা: প্রস্তুত ও পূর্ণাঙ্গ, কিছু যোগও হয়নি, বাদও পড়েনি। হিসাব ভারী করতে কিছু ঢোকানো হয়নি, হালকা করতে কিছু খসেও পড়েনি।"
          },
          {
            "en": "Ibn Zayd, in at-Tabari, reads 'atid of the person rather than a page: the person he has taken hold of, whom the driver and the guardian, al-hafiz, brought along together. That gloss keeps the person between his escorts at the moment of handing over. The other glosses keep to the record. Either way the word describes something finished, held ready, waiting only to be presented. The companion is not still gathering evidence when he speaks. Whatever he holds, the gathering was done before the Day began.",
            "bn": "তাবারীর বর্ণনায় ইবন যায়দ আতীদ শব্দটিকে কাগজ নয়, মানুষটির ওপর প্রয়োগ করেন: যাকে সে ধরে এনেছে, যাকে চালক আর হাফিয, অর্থাৎ রক্ষক, দুজনে মিলে সঙ্গে করে নিয়ে এসেছে। এ ব্যাখ্যায় হস্তান্তরের মুহূর্তে মানুষটি থাকে তার দুই প্রহরীর মাঝখানে। বাকি ব্যাখ্যাগুলো আমলনামার দিকেই থাকে। যেভাবেই পড়া হোক, শব্দটি এমন কিছুর কথা বলে যা সম্পূর্ণ, প্রস্তুত, শুধু পেশ করার অপেক্ষায়। কথা বলার সময় সঙ্গী আর প্রমাণ জোগাড় করছে না। তার হাতে যা-ই থাকুক, জোগাড়ের কাজ সেদিন শুরুর আগেই শেষ।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Texts Stop",
          "bn": "তাফসীর যেখানে থেমে যায়"
        },
        "p": [
          {
            "en": "This is a scene from the unseen, and the article claims nothing about it beyond what the fetched tafsirs say. Who the companion is, what the record looks like and how it is handed over are known to us only through these words and the explanations quoted above. No fetched commentary attaches a hadith to this verse. Ibn Kathir's English abridgement does quote a narration from Imam Ahmad within the passage, but it is placed on the verses about those thrown into the Fire, not on 50:23, so it is not used here.",
            "bn": "এ দৃশ্য গায়েবের জগতের। ওপরে যেসব তাফসীর উদ্ধৃত হয়েছে, তার বাইরে এ লেখা এ নিয়ে কিছুই দাবি করে না। সঙ্গী কে, আমলনামা দেখতে কেমন, কীভাবে তা হস্তান্তর হয়, এসব আমরা জানি শুধু এই শব্দগুলো আর উদ্ধৃত ব্যাখ্যাগুলোর মাধ্যমে। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে এ অংশের ভেতরে ইমাম আহমাদের একটি বর্ণনা আছে ঠিকই। তবে সেটি রাখা হয়েছে জাহান্নামে নিক্ষিপ্তদের আয়াতগুলোর সঙ্গে, ৫০:২৩-এর সঙ্গে নয়। তাই এখানে তা আনা হয়নি।"
          },
          {
            "en": "As-Sa'di describes the man in this verse as hadha al-mukadhdhib al-mu'rid, this denier who turned away, and the verses after it pass sentence on a described type. That is what the text describes, on that Day, by Allah's own judgment. It licenses nothing against any living person or community, and gives no reader the place of the companion who testifies. The verse is better read as a mirror. In 50:21 every soul comes with a driver and a witness, and every soul includes the reader.",
            "bn": "সা'দী এ আয়াতের মানুষটিকে বলেছেন হাযাল মুকাযযিবুল মু'রিদ, অর্থাৎ এই অস্বীকারকারী, যে মুখ ফিরিয়ে নিয়েছিল। পরের আয়াতগুলো এমন বৈশিষ্ট্যের মানুষের ওপর রায় শোনায়। সেটা সেদিনের কথা, আল্লাহর নিজের বিচারে, যেমন আয়াতে বলা আছে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কোনো পাঠককে সাক্ষ্যদাতা সঙ্গীর আসনেও বসায় না। আয়াতটি বরং আয়না হিসেবে পড়াই ভালো। ৫০:২১ বলছে, প্রত্যেক প্রাণ আসবে চালক আর সাক্ষী নিয়ে। সেই প্রত্যেকের মধ্যে পাঠকও আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Filling the File Today",
          "bn": "আজকের পাতা আজই"
        },
        "p": [
          {
            "en": "Read from this side of the Day, the verse turns a future scene into a present fact. On most of the readings above, something is being kept now, by a companion who is with the person, and it will be presented without addition and without deficit. That cuts both ways. Nothing good will be lost from it, however small or unseen by others. Nothing hidden will be missing from it either. The question the verse leaves is not really about the angel. It is about what is being handed to him, day by day.",
            "bn": "দুনিয়ার এই পাড় থেকে পড়লে আয়াতটি ভবিষ্যতের একটি দৃশ্যকে বর্তমানের সত্যে পরিণত করে। ওপরের বেশিরভাগ ব্যাখ্যা অনুযায়ী, কিছু একটা এখনই সংরক্ষিত হচ্ছে, মানুষের সঙ্গে থাকা এক সঙ্গীর হাতে। আর তা পেশ হবে কোনো বাড়তি বা ঘাটতি ছাড়া। কথাটা দুই দিকেই খাটে। কোনো নেক আমল সেখান থেকে হারাবে না, যত ছোটই হোক, যত লোকচক্ষুর আড়ালেই হোক। আবার লুকানো কিছুও সেখান থেকে বাদ পড়বে না। আয়াতটি তাই আসলে ফেরেশতাকে নিয়ে প্রশ্ন রেখে যায় না। প্রশ্ন রেখে যায়, দিনের পর দিন আমরা তার হাতে কী তুলে দিচ্ছি।"
          },
          {
            "en": "A practical habit follows from this. Before sleep, ask what today added to the file: words spoken, duties met or missed, kindness given or held back. What was wrong can still be met with tawbah and with repair while the record is open, and what was good can be quietly continued tomorrow. Readiness is the companion's word in the verse, and it can become the reader's word too: to live so that whatever is presented, by whichever companion, is something a person would be content to see.",
            "bn": "এখান থেকে একটা সহজ অভ্যাস তৈরি হয়। ঘুমানোর আগে নিজেকে জিজ্ঞেস করুন, আজ খাতায় কী যোগ হলো। কোন কথা বলেছি, কোন দায়িত্ব পালন করেছি বা এড়িয়ে গেছি, কোথায় দয়া দেখিয়েছি আর কোথায় হাত গুটিয়ে রেখেছি। খাতা যতক্ষণ খোলা, ভুলের জবাব তওবা দিয়ে আর ক্ষতিপূরণ দিয়ে দেওয়া যায়। আর ভালো যা হয়েছে, কাল চুপচাপ তা চালিয়ে যাওয়া যায়। আয়াতে প্রস্তুতি সঙ্গীর শব্দ, তা পাঠকেরও শব্দ হয়ে উঠতে পারে। এমনভাবে বাঁচা, যাতে যে-ই পেশ করুক, যা পেশ হবে তা দেখে মানুষ খুশি হতে পারে।"
          },
          {
            "en": "The companion's own conduct offers a second lesson. He returns what he was given charge of, complete, and says so plainly. Each of us has been handed things to keep in the same way: a family, a task at work, a promise, a secret, a portion of wealth. The verse pictures a trust delivered without addition and without deficit. That is a fair measure for our own trusts as well, long before anyone asks us to account for them.",
            "bn": "সঙ্গীর নিজের আচরণেও আরেকটা শিক্ষা আছে। যার দায়িত্ব তাকে দেওয়া হয়েছিল, তা সে পুরোপুরি ফিরিয়ে দেয়, আর সোজাসুজি তা বলেও দেয়। আমাদের প্রত্যেকের হাতেও এভাবে কিছু না কিছু আমানত রাখা আছে: পরিবার, কাজের দায়িত্ব, কোনো ওয়াদা, কারও গোপন কথা, কিছু সম্পদ। আয়াতটি এমন এক আমানতের ছবি আঁকে, যা ফেরত যায় কোনো বাড়তি বা ঘাটতি ছাড়া। কেউ হিসাব চাওয়ার অনেক আগেই নিজের আমানতগুলোকে এই মাপকাঠিতে মেপে দেখা যায়।"
          }
        ]
      }
    ]
  },
  "50:29": {
    "sections": [
      {
        "h": {
          "en": "A Quarrel Cut Short",
          "bn": "মাঝপথে থেমে যাওয়া ঝগড়া"
        },
        "p": [
          {
            "en": "In the verses just before, Surah Qaf stages a hearing. In 50:23 a companion says the record is with him, prepared. In 50:24 to 50:26 comes the command to throw into Hell every stubborn disbeliever, the hinderer of good, the transgressor, the doubter who set up another god beside Allah. Then in 50:27 a second companion speaks, and he disowns: Our Lord, I did not make him transgress, but he was himself far astray. In 50:28 Allah answers: do not dispute before Me, when I had already sent you the warning ahead.",
            "bn": "এর আগের আয়াতগুলোতে সূরা কাফ এক বিচারসভার ছবি আঁকে। ৫০:২৩ আয়াতে এক সঙ্গী বলে, আমলনামা তার কাছে প্রস্তুত। ৫০:২৪ থেকে ৫০:২৬ আয়াতে আসে নির্দেশ: প্রত্যেক অবাধ্য কাফিরকে জাহান্নামে নিক্ষেপ কর। সে কল্যাণের পথে বাধা দিত, সীমা ছাড়াত, সন্দেহে ডুবে ছিল, আর আল্লাহর সঙ্গে অন্য ইলাহ দাঁড় করিয়েছিল। এরপর ৫০:২৭ আয়াতে কথা বলে আরেক সঙ্গী, আর সে দায় অস্বীকার করে: হে আমাদের রব, আমি তাকে বিদ্রোহী বানাইনি, সে নিজেই ছিল বহু দূরের গোমরাহিতে। ৫০:২৮ আয়াতে আল্লাহ জবাব দেন: আমার সামনে বাদানুবাদ করো না, সতর্কবাণী তো আমি আগেই পাঠিয়ে দিয়েছিলাম।"
          },
          {
            "en": "Ibn Kathir, in the English abridgement, identifies the companion of 50:27 as the devil assigned to every person, on the authority of Ibn Abbas, Mujahid, Qatadah and several others, and pictures the man saying: Lord, this devil led me away from the Reminder after it had come to me. At-Tabari reads 50:29 as Allah's speech on the Day of Resurrection to the idolaters and their companions from the jinn, at the moment when each disowns the other. The verse is the last word in a quarrel, and it has two clauses: the word is not changed with Me, and I am not unjust to the servants.",
            "bn": "ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ ৫০:২৭ আয়াতের সঙ্গীকে চিহ্নিত করে সেই শয়তান হিসেবে, যাকে প্রত্যেক মানুষের সঙ্গে লাগিয়ে রাখা হয়েছে। এ কথা তিনি আনেন ইবন আব্বাস (রাঃ), মুজাহিদ, কাতাদা ও আরও কয়েকজনের সূত্রে। মানুষটির মুখে তিনি তুলে দেন এই অভিযোগ: হে রব, উপদেশ আমার কাছে আসার পরও এই শয়তান আমাকে তা থেকে সরিয়ে নিয়েছে। তাবারী ৫০:২৯ আয়াতকে পড়েন কিয়ামতের দিন মুশরিক আর তাদের জিন সঙ্গীদের প্রতি আল্লাহর বাণী হিসেবে, ঠিক যখন একে অপরের দায় অস্বীকার করছে। ঝগড়ার শেষ কথা এই আয়াত। এর দুটি অংশ: আমার কাছে কথা বদলায় না, আর আমি বান্দাদের প্রতি যুলমকারী নই।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Word Stays Unchanged",
          "bn": "কোন কথা বদলায় না"
        },
        "p": [
          {
            "en": "Ma yubaddalu l-qawlu ladayya: the word is not changed with Me. The verb is passive, and the noun carries the definite article: not My word, but the word. What that word is, the commentators answer in more than one way. At-Tabari reports Mujahid's gloss through two chains, and Ibn Kathir repeats it: qad qadaytu ma ana qadin, I have decreed what I decree. On this reading the word is the judgement itself, and the hearing does not reopen it. Ma'arif al-Qur'an paraphrases in the same direction: My decision will certainly be implemented, and it will never be changed.",
            "bn": "মা ইউবাদ্দালুল কাওলু লাদাইয়া: আমার কাছে কথা বদলানো হয় না। কে বদলায়, ক্রিয়াটি তা বলে না। আর শব্দটি হলো নির্দিষ্ট 'কথা', 'আমার কথা' নয়। সেই কথা কোনটি, তাফসীরকারেরা এর একাধিক উত্তর দেন। তাবারী দুটি সনদে মুজাহিদের ব্যাখ্যা উদ্ধৃত করেন, ইবন কাসীরও তা উল্লেখ করেন: কাদ কাদাইতু মা আনা কাদিন, যা ফয়সালা করার তা আমি ফয়সালা করে ফেলেছি। এ পাঠে কথাটি হলো রায় নিজেই। বিচারসভা তা আর নতুন করে খোলে না। মাআরিফুল কুরআনও একই দিকে যায়: আমার সিদ্ধান্ত অবশ্যই কার্যকর হবে, তা কখনো বদলাবে না।"
          },
          {
            "en": "At-Tabari then names the word in his own voice. It is what I said to you in the world, la-amla'anna jahannama mina l-jinnati wa-n-nasi ajma'in, I will surely fill Hell with jinn and people all together, and also My decree that I decreed concerning them in it. Al-Baghawi gives the same identification and labels the quotation as from Surat as-Sajdah; the sentence stands in 32:13. Al-Qurtubi lists this reading as well, introducing it with qila, it is said, and setting another candidate beside it rather than choosing between them.",
            "bn": "এরপর তাবারী নিজের ভাষায় কথাটির নাম বলেন। এ সেই কথা, যা আমি দুনিয়ায় তোমাদের বলেছিলাম: লা-আমলাআন্না জাহান্নামা মিনাল জিন্নাতি ওয়ান্নাসি আজমাঈন, আমি অবশ্যই জিন ও মানুষ মিলিয়ে জাহান্নাম ভরে দেব। সঙ্গে আছে তাদের ব্যাপারে আমার নেওয়া ফয়সালাও। বাগাভীও একই কথা বলেন, আর উদ্ধৃতিটিকে চিহ্নিত করেন সূরা সাজদার আয়াত হিসেবে। বাক্যটি আছে ৩২:১৩ আয়াতে। কুরতুবীও এ পাঠ উল্লেখ করেন 'কীলা', অর্থাৎ 'বলা হয়েছে' দিয়ে শুরু করে। তবে পাশাপাশি আরেকটি সম্ভাবনাও রাখেন, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "That other reading, also under qila, makes the word Allah's statement in 6:160: whoever comes with a good deed will have its like tenfold, and whoever comes with an evil deed will be recompensed only with its like. The two candidates sound different, one a sentence of punishment and the other a scale of reward, yet al-Qurtubi records both without preferring either, and so does this article. As-Sa'di keeps the clause general: what Allah has said and told cannot possibly fail to come true, for none is truer in speech than Allah, and none truer in what he reports.",
            "bn": "সেই দ্বিতীয় পাঠও 'কীলা' দিয়েই আসে। এতে কথাটি হলো ৬:১৬০ আয়াতে আল্লাহর ঘোষণা: যে নেকি নিয়ে আসবে, সে পাবে তার দশ গুণ, আর যে গুনাহ নিয়ে আসবে, তাকে প্রতিফল দেওয়া হবে শুধু তার সমপরিমাণ। দুটি সম্ভাবনার সুর আলাদা। একটি শাস্তির রায়, অন্যটি প্রতিদানের মাপকাঠি। তবু কুরতুবী দুটিই লেখেন, কোনোটিকে প্রাধান্য দেন না। এ লেখাও তাই কোনোটি বেছে নেয় না। সা'দী অংশটিকে রাখেন ব্যাপক অর্থে: আল্লাহ যা বলেছেন আর যে খবর দিয়েছেন, তার খেলাপ হওয়া অসম্ভব। কারণ কথায় আল্লাহর চেয়ে সত্যবাদী কেউ নেই, খবরেও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "No False Word Before Him",
          "bn": "তাঁর সামনে মিথ্যা অচল"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi both record a further reading, and it shifts the question from what Allah has said to what is said in His presence. Al-Qurtubi gives it from al-Farra': ma yukdhabu 'indi, no lie is told before Me; nothing is added to what is said and nothing is taken from it, because of My knowledge of the unseen. Al-Baghawi attributes it to a group, calls it the view of al-Kalbi and the choice of al-Farra', and words it this way: no lie is told before Me, and speech is not turned from its true face, because I know the unseen.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই আরেকটি পাঠ উল্লেখ করেন। এতে প্রশ্নটা সরে যায় আল্লাহ কী বলেছেন তা থেকে, তাঁর সামনে কী বলা হচ্ছে সেদিকে। কুরতুবী এটি আনেন ফাররার সূত্রে: মা ইউকযাবু ইনদী, আমার কাছে মিথ্যা বলা যায় না। বলা কথায় কিছু যোগ হয় না, কিছু বাদও পড়ে না, কারণ গায়েবের জ্ঞান আমার আছে। বাগাভী একে একদল আলিমের মত বলে উল্লেখ করেন। তাঁর ভাষায় এটি কালবীর মত, আর ফাররা এটিকেই গ্রহণ করেছেন: আমার কাছে মিথ্যা বলা যায় না, কথাকে তার আসল চেহারা থেকে ঘোরানোও যায় না, কারণ আমি গায়েব জানি।"
          },
          {
            "en": "Al-Baghawi also gives al-Farra''s reason, and it is grammatical. The verse says ma yubaddalu l-qawlu ladayya, the word is not changed in My presence; it does not say ma yubaddalu qawli, My word is not changed. Read this way, the clause answers the quarrel just described: the man's excuse and the companion's denial are both spoken before One who knows what happened, and no rewording will pass. Al-Baghawi puts the first reading in his own voice and this reading under the names of those who held it, and he refutes neither. Both stand side by side here, as they do in his text.",
            "bn": "ফাররার যুক্তিও বাগাভী তুলে ধরেন, আর সে যুক্তি ব্যাকরণের। আয়াতে আছে মা ইউবাদ্দালুল কাওলু লাদাইয়া, আমার সামনে কথা বদলানো হয় না। আয়াত বলেনি মা ইউবাদ্দালু কাওলী, আমার কথা বদলানো হয় না। এভাবে পড়লে অংশটি সরাসরি জবাব দেয় সদ্য বর্ণিত ঝগড়ার। মানুষের অজুহাত আর সঙ্গীর অস্বীকার, দুটোই বলা হচ্ছে এমন একজনের সামনে, যিনি জানেন আসলে কী ঘটেছিল। কথা ঘুরিয়ে বলে সেখানে পার পাওয়া যাবে না। প্রথম পাঠটি বাগাভী দেন নিজের ভাষায়, আর এটি দেন এর প্রবক্তাদের নামে। কোনোটিকেই খণ্ডন করেন না। তাঁর লেখায় যেমন, এখানেও দুটি পাঠ পাশাপাশি থাকছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Warned Before the Hearing",
          "bn": "শুনানির আগেই সতর্কবাণী"
        },
        "p": [
          {
            "en": "The first clause leans on the verse before it. Wa-qad qaddamtu ilaykum bi-l-wa'id: I had already sent you the warning ahead. Ibn Kathir, in the English abridgement, spells out what that sending was: I have given you sufficient proof through the words of the Messengers, and I have sent down the Divine Books; the evidences, signs and proofs have been established against you. So the word that does not change, on any of the readings above, is not sprung on anyone at the end. It was announced and carried by messengers long before anyone stood up to argue.",
            "bn": "প্রথম অংশটি ভর করে আগের আয়াতের উপর। ওয়া কাদ কাদ্দামতু ইলাইকুম বিল-ওয়াঈদ: সতর্কবাণী তো আমি আগেই তোমাদের কাছে পাঠিয়েছিলাম। সেই পাঠানো কেমন ছিল, ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ তা খুলে বলে। রাসূলদের কথার মাধ্যমে আমি তোমাদের যথেষ্ট প্রমাণ দিয়েছি, আসমানী কিতাব নাযিল করেছি। দলিল, নিদর্শন আর প্রমাণ সবই তোমাদের বিরুদ্ধে প্রতিষ্ঠিত হয়ে গেছে। তাই উপরের যে পাঠই ধরা হোক, যে কথা বদলায় না তা শেষ মুহূর্তে হঠাৎ কারও উপর চাপানো হয়নি। তর্ক করতে কেউ দাঁড়ানোর অনেক আগেই রাসূলরা তা পৌঁছে দিয়েছিলেন।"
          },
          {
            "en": "Three of the commentaries make the condition explicit when they reach the second clause. Ibn Kathir in Arabic and the Muyassar use almost the same sentence: I punish no one except for his own sin, after the proof has been established against him, ba'da qiyami l-hujjati 'alayh. Ma'arif al-Qur'an renders the same thought in English and adds that this is an absolutely fair and just decision. In these texts the warning of 50:28 and the justice of 50:29 belong together. The proof comes first, and only after it does the reckoning come.",
            "bn": "দ্বিতীয় অংশে এসে তিনটি তাফসীর শর্তটা স্পষ্ট করে দেয়। আরবি ইবন কাসীর আর মুয়াসসার প্রায় একই বাক্য ব্যবহার করে: আমি কাউকে শাস্তি দিই না তার নিজের গুনাহ ছাড়া, আর তা-ও তার বিরুদ্ধে প্রমাণ প্রতিষ্ঠিত হওয়ার পর, বা'দা কিয়ামিল হুজ্জাতি আলাইহ। মাআরিফুল কুরআন ইংরেজিতে একই কথা বলে, সঙ্গে যোগ করে: এ পুরোপুরি ন্যায়সংগত ও ইনসাফপূর্ণ সিদ্ধান্ত। এসব লেখায় ৫০:২৮ আয়াতের সতর্কবাণী আর ৫০:২৯ আয়াতের ইনসাফ একসঙ্গে বাঁধা। আগে প্রমাণ, তারপর হিসাব।"
          }
        ]
      },
      {
        "h": {
          "en": "The Injustice That Is Denied",
          "bn": "যে যুলম অস্বীকার করা হলো"
        },
        "p": [
          {
            "en": "Wa ma ana bi-zallamin li-l-'abid: and I am not unjust to the servants. The Qur'an speaks here in Allah's own first person and denies injustice outright. What exactly is denied, the commentators spell out in concrete terms. At-Tabari: I do not punish any of My creatures for the crime of another, nor do I load on any of them the sin of another and then punish him for it. Ibn Kathir in Arabic and the Muyassar say the same more briefly: I do not punish anyone for another person's sin, but only for his own.",
            "bn": "ওয়া মা আনা বিযাল্লামিল লিল-আবীদ: আর আমি বান্দাদের প্রতি যুলমকারী নই। এখানে আল্লাহ নিজেই 'আমি' বলে কথা বলছেন, আর যুলমকে সরাসরি নাকচ করছেন। ঠিক কোন যুলম নাকচ হলো, তাফসীরকারেরা তা খুলে বলেন বাস্তব ভাষায়। তাবারীর ব্যাখ্যা: আমার কোনো সৃষ্টিকে অন্যের অপরাধে শাস্তি দিই না। কারও কাঁধে অন্যের গুনাহ চাপিয়ে তার জন্য তাকে শাস্তিও দিই না। আরবি ইবন কাসীর আর মুয়াসসার একই কথা বলে আরও সংক্ষেপে: অন্যের গুনাহর জন্য আমি কাউকে শাস্তি দিই না, শাস্তি দিই শুধু তার নিজের গুনাহর জন্য।"
          },
          {
            "en": "Al-Qurtubi gives a slightly different gloss and names its source: I do not punish one who committed no crime, a reading he attributes to Ibn Abbas. Al-Baghawi ties the clause to a consequence: I am not unjust, such that I would punish them without a crime. Taken together, these readings close two doors. No one is punished for nothing, and no one is punished for what someone else did. In a scene where a man and his companion are each trying to shift the weight onto the other, both doors matter, and the verse shuts them in a single sentence.",
            "bn": "কুরতুবীর ব্যাখ্যা একটু ভিন্ন, আর তিনি সূত্রও জানান: যে কোনো অপরাধ করেনি, আমি তাকে শাস্তি দিই না। এ ব্যাখ্যা তিনি ইবন আব্বাস (রাঃ)-এর বলে উল্লেখ করেন। বাগাভী অংশটিকে জুড়ে দেন একটি পরিণতির সঙ্গে: আমি যুলমকারী নই যে বিনা অপরাধে তাদের শাস্তি দেব। এসব ব্যাখ্যা মিলিয়ে দুটি দরজা বন্ধ হয়ে যায়। বিনা কারণে কেউ শাস্তি পাবে না, আর অন্যের কাজের জন্যও কেউ শাস্তি পাবে না। যে দৃশ্যে মানুষ আর তার সঙ্গী দুজনেই বোঝা অন্যের ঘাড়ে ঠেলে দিতে চাইছে, সেখানে দুটি দরজাই জরুরি। আয়াতটি এক বাক্যেই দুটো বন্ধ করে দেয়।"
          },
          {
            "en": "As-Sa'di turns the clause toward the scale: rather, I recompense them for what they did, good and evil; nothing is added to their bad deeds, and nothing is taken from their good deeds. The verse's word is zallam, not the simpler zalim. Why it uses that form is a question the commentaries read for this verse do not take up, and al-Qurtubi only refers back to an earlier discussion of the phrase without repeating it here. This article leaves the question where they leave it, and does not supply an answer of its own or open a debate they did not open.",
            "bn": "সা'দী অংশটিকে ঘুরিয়ে দেন মাপকাঠির দিকে: বরং ভালো-মন্দ যা তারা করেছে, আমি তারই প্রতিদান দিই। তাদের গুনাহর সঙ্গে কিছু যোগ হয় না, তাদের নেকি থেকে কিছু কমানোও হয় না। আয়াতের শব্দটি যাল্লাম, সাধারণ যালিম নয়। কেন এই রূপটি এল, এ আয়াতের যে তাফসীরগুলো পড়া হয়েছে তার কোনোটিই সে প্রশ্নে যায় না। কুরতুবী শুধু জানান যে এর অর্থ নিয়ে আগে আলোচনা হয়ে গেছে, এখানে তার পুনরাবৃত্তি করেন না। এ লেখাও প্রশ্নটিকে সেখানেই রেখে দিচ্ছে। নিজের কোনো উত্তর বানাচ্ছে না, তাঁরা যে বিতর্ক খোলেননি তা-ও খুলছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Each Answers for His Own",
          "bn": "যার যার দায় তার তার"
        },
        "p": [
          {
            "en": "Set these glosses beside the quarrel and the scene sharpens. The man, in Ibn Kathir's picture, blames his devil: this devil led me astray. The devil blames the man: I did not make him transgress; he was himself far astray, accepting falsehood and stubborn against the truth. Ibn Kathir places 14:22 beside the passage, where Satan, once the matter is decided, tells his followers that he had no authority over them except that he called and they answered, so do not blame me, blame yourselves. Each party is trying to make the other carry the load.",
            "bn": "এই ব্যাখ্যাগুলো ঝগড়ার পাশে রাখলে দৃশ্যটা আরও স্পষ্ট হয়। ইবন কাসীরের বর্ণনায় মানুষটি দোষ দেয় তার শয়তানকে: এ-ই আমাকে পথভ্রষ্ট করেছে। শয়তান দোষ দেয় মানুষটিকে: আমি তাকে বিদ্রোহী বানাইনি। সে নিজেই ছিল বহু দূরে পথ হারিয়ে, মিথ্যাকে গ্রহণ করে আর সত্যের বিরুদ্ধে জেদ ধরে। ইবন কাসীর এর পাশে রাখেন ১৪:২২ আয়াত। সেখানে ফয়সালা হয়ে যাওয়ার পর শয়তান তার অনুসারীদের বলে, তোমাদের উপর আমার কোনো ক্ষমতা ছিল না, আমি শুধু ডেকেছিলাম আর তোমরা সাড়া দিয়েছিলে। কাজেই আমাকে দোষ দিয়ো না, নিজেদের দোষ দাও। দুই পক্ষই বোঝাটা অন্যের ঘাড়ে চাপাতে চাইছে।"
          },
          {
            "en": "The answer of 50:29, as at-Tabari, Ibn Kathir and the Muyassar read it, is that the load does not pass from one to another. At-Tabari says the word and the decree stand concerning both parties to the quarrel. This is not a theory of how human choice and divine decree fit together, and the commentators read here offer none on this verse. It is the plainer statement that in this court no one stands in for anyone else, and no one is charged with what he did not do.",
            "bn": "তাবারী, ইবন কাসীর ও মুয়াসসারের পাঠে ৫০:২৯ আয়াতের জবাব হলো, এই বোঝা একজনের কাঁধ থেকে আরেকজনের কাঁধে যায় না। তাবারীর কথায়, কথা আর ফয়সালা ঝগড়ার দুই পক্ষের ব্যাপারেই বহাল থাকে। তাই দায় অস্বীকার করা বা অন্যের দিকে আঙুল তোলা, কোনোটাতেই ফল বদলায় না। মানুষের ইচ্ছা আর আল্লাহর তাকদীর কীভাবে মেলে, এ নিয়ে কোনো তত্ত্ব এখানে নেই। এ আয়াতে যেসব তাফসীর পড়া হয়েছে, সেগুলোও এমন কিছু দেয় না। কথাটা সরল: এই আদালতে কেউ কারও জায়গায় দাঁড়ায় না, আর যা কেউ করেনি তার দায় তার উপর চাপে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Hearing Does Not License",
          "bn": "এ বিচারদৃশ্য যে অনুমতি দেয় না"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes a hearing on the Day of Resurrection between those condemned in 50:24 to 50:26 and their companions, and it describes only what the text describes. It licenses nothing against any living person or community. It names nobody in this world, and it gives no reader the standing to decide which of the people around them belong to that scene. The sentence in it is spoken by Allah, on a Day that He alone convenes; repeating its words at a neighbour is not the same thing as hearing them for yourself.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি কিয়ামতের দিনের এক বিচারদৃশ্যের বর্ণনা দেয়। একদিকে ৫০:২৪ থেকে ৫০:২৬ আয়াতে দণ্ডিত লোকেরা, অন্যদিকে তাদের সঙ্গীরা। আয়াত যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। দুনিয়ার কারও নাম এতে নেই। আশপাশের কোন মানুষ ওই দৃশ্যের অংশ, তা ঠিক করার অধিকারও কোনো পাঠককে এ আয়াত দেয় না। রায় দেন আল্লাহ, এমন এক দিনে যা শুধু তিনিই কায়েম করবেন। এর শব্দ প্রতিবেশীর দিকে ছুড়ে মারা আর নিজে কান পেতে শোনা এক কথা নয়।"
          },
          {
            "en": "None of the commentaries read for this verse attaches a hadith to 50:29 itself, and none reports an occasion of revelation for it, so this article quotes no narration. The abridged Ibn Kathir does cite a report from Imam Ahmad within the same passage, but he gives it on the earlier verses about the stubborn disbeliever, not on this one, and it is left aside here. What the verse offers is its own wording, eight words long in Arabic, and the readings of those who explained it, each given under his own name and none of them silently preferred.",
            "bn": "এ আয়াতের যে তাফসীরগুলো পড়া হয়েছে, তার কোনোটিই ৫০:২৯ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করে না, কোনো শানে নুযূলও উল্লেখ করে না। তাই এ লেখায় কোনো বর্ণনা উদ্ধৃত হচ্ছে না। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ একই আলোচনার ভেতরে ইমাম আহমাদের একটি বর্ণনা আনে বটে, তবে তা আগের আয়াতগুলোর প্রসঙ্গে, অবাধ্য কাফিরের আলোচনায়, এ আয়াতে নয়। তাই সেটিও এখানে বাদ রাখা হলো। আয়াতের সম্বল তার নিজের শব্দ, আরবিতে আটটি শব্দ, আর ব্যাখ্যাকারীদের পাঠ। প্রত্যেকটি এসেছে তার প্রবক্তার নামে, কোনোটিকেই চুপচাপ প্রাধান্য দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearing It Before That Day",
          "bn": "সেই দিনের আগেই শোনা"
        },
        "p": [
          {
            "en": "For the reader, the order of the two verses matters. The warning of 50:28 was sent ahead, which means it reaches the living. The word that does not change on that Day can be heard now, while hearing it can still change something. Whichever reading of al-qawl a reader follows, Mujahid's settled decree, at-Tabari's stated sentence, the scale of 6:160 that al-Qurtubi records, or al-Farra''s word that cannot be falsified, the time to act on it is before the hearing, not during it, when the only thing left to say is an excuse.",
            "bn": "পাঠকের জন্য আয়াত দুটির ক্রমটাই গুরুত্বপূর্ণ। ৫০:২৮ আয়াতের সতর্কবাণী আগেভাগে পাঠানো হয়েছে, মানে তা জীবিতদের কাছেই পৌঁছায়। যে কথা সেই দিনে বদলাবে না, তা আজই শোনা যায়, আর আজ শুনলে এখনো কিছু বদলানো যায়। আল-কাওলের যে পাঠই ধরুন, মুজাহিদের স্থির ফয়সালা, তাবারীর উল্লেখ করা রায়, কুরতুবীর বর্ণিত ৬:১৬০ আয়াতের মাপকাঠি, কিংবা ফাররার সেই কথা যা মিথ্যা দিয়ে বদলানো যায় না, তা নিয়ে কাজ করার সময় শুনানির আগে। শুনানির সময় বলার মতো থাকে শুধু অজুহাত।"
          },
          {
            "en": "The second clause gives a quiet steadiness. The same sentence that closes every excuse also closes every fear of being wronged. If, as as-Sa'di puts it, nothing will be added to a person's bad deeds and nothing taken from the good, then today's effort is not wasted, and the record of 50:23, which Ibn Kathir describes as complete without addition or deletion, is a record kept truly. The response the verse invites is ownership: to stop rehearsing the defence, to call your own fault yours, and to do it while the warning is still only a warning.",
            "bn": "দ্বিতীয় অংশ মনে এক শান্ত স্থিরতা দেয়। যে বাক্য সব অজুহাতের পথ বন্ধ করে, সেই বাক্যই যুলমের শিকার হওয়ার সব ভয়ও দূর করে। সা'দীর কথামতো যদি কারও গুনাহর সঙ্গে কিছু যোগ না হয় আর নেকি থেকে কিছু না কমে, তবে আজকের চেষ্টা বৃথা যায় না। ৫০:২৩ আয়াতের আমলনামা, ইবন কাসীর যাকে বলেন কোনো যোগ-বিয়োগ ছাড়া সম্পূর্ণ, সত্যিকারের হিসাবই রাখে। আয়াতটি তাই ডাকে দায় নেওয়ার দিকে। আত্মপক্ষ সমর্থনের মহড়া থামান। নিজের দোষকে নিজের বলে নাম দিন। আর তা করুন এখনই, যতক্ষণ সতর্কবাণী শুধু সতর্কবাণী হয়ে আছে।"
          }
        ]
      }
    ]
  },
  "50:37": {
    "sections": [
      {
        "h": {
          "en": "What That Points Back To",
          "bn": "'এতে' বলতে কী বোঝানো হয়েছে"
        },
        "p": [
          {
            "en": "Inna fi dhalika la-dhikra, indeed in that is a reminder. The demonstrative points backwards, and 50:36 is what it points at: how many a generation We destroyed before them who were greater than them in striking power and had explored throughout the lands, and is there any place of escape? The reminder on offer is not an argument. It is a record, and the surah has just finished reading it out.",
            "bn": "'ইন্না ফী যালিকা লাযিকরা' — নিশ্চয়ই এতে উপদেশ রয়েছে। নির্দেশক শব্দটি পেছনের দিকে ইঙ্গিত করে, আর যেদিকে ইঙ্গিত করে তা হলো 50:36: তাদের আগে আমি কত প্রজন্মকে ধ্বংস করেছি, যারা শক্তিতে তাদের চেয়ে প্রবল ছিল আর দেশে দেশে চষে বেড়িয়েছিল — পালানোর কোনো জায়গা কি ছিল? যে উপদেশটি দেওয়া হচ্ছে তা কোনো যুক্তি নয়। এটি একটি নথি, আর সূরাটি সবে তা পড়ে শোনানো শেষ করেছে।"
          },
          {
            "en": "Just before that record stands 50:35, where those in the Garden have whatever they wish and with Us is more. Surah Qaf is arguing for the resurrection its opponents called a far-fetched return, and it argues by evidence: the sky, the earth, the interior of a man, and now the ruins of people who were stronger than the audience being addressed. Then it names the one condition under which evidence works at all.",
            "bn": "সেই নথিটির ঠিক আগে দাঁড়িয়ে আছে 50:35, যেখানে জান্নাতবাসীরা যা চাইবে তা-ই পাবে, আর আমার কাছে আরও আছে। সূরা কাফ সেই পুনরুত্থানের পক্ষে যুক্তি দিচ্ছে যাকে তার বিরোধীরা বলেছিল এক অসম্ভব প্রত্যাবর্তন; আর যুক্তি দিচ্ছে প্রমাণ দিয়ে: আকাশ, যমীন, মানুষের ভেতরটা, আর এখন সেই জাতিদের ধ্বংসাবশেষ যারা শ্রোতাদের চেয়ে শক্তিশালী ছিল। তারপরই সে বলে দেয়, প্রমাণ কেবল কোন একটি শর্তেই কাজ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Has a Heart",
          "bn": "যার একটি অন্তর আছে"
        },
        "p": [
          {
            "en": "Liman kana lahu qalbun, for whoever has a heart. Every listener has one, so the phrase must mean something other than the organ, and the mufassirun say so directly. Al-Muyassar reads it as a heart with which he reasons. Tafsir Ahsanul Bayaan reads it as an awake and alert heart, one that reflects and takes in what is actually there. Having a heart, in this idiom, is a condition that some people fail.",
            "bn": "'লিমান কানা লাহু কলবুন' — যার একটি অন্তর আছে তার জন্য। প্রত্যেক শ্রোতারই তো একটি আছে, তাই কথাটির অর্থ নিশ্চয়ই দেহযন্ত্রটি নয়; আর মুফাসসিরগণ সরাসরি সে কথাই বলেন। তাফসীর মুয়াসসার এটিকে পড়ে এমন অন্তর হিসেবে যা দিয়ে সে বোঝে। তাফসীর আহসানুল বায়ান পড়ে জাগ্রত ও সচেতন অন্তর হিসেবে, যা চিন্তা করে এবং প্রকৃত ব্যাপারটি ধরে নেয়। এই বাগ্‌ধারায় 'অন্তর থাকা' এমন একটি শর্ত, যাতে কেউ কেউ উত্তীর্ণ হয় না।"
          },
          {
            "en": "22:46 states the same thing without the idiom: it is not the eyes that go blind, but the hearts within the breasts. That verse reaches its conclusion by asking whether they have not travelled the earth, which is the very activity 50:36 attributes to the destroyed generations, who had explored throughout the lands and still found no escape. Movement is not the qualification. The organ that has to be working is the one inside.",
            "bn": "22:46 একই কথা বলে বাগ্‌ধারা ছাড়াই: চোখ অন্ধ হয় না, বরং বুকের ভেতরের অন্তরগুলোই অন্ধ হয়। সেই আয়াত তার সিদ্ধান্তে পৌঁছায় এই প্রশ্ন করে যে তারা কি যমীনে ভ্রমণ করে না — আর সেই কাজটিই 50:36 ধ্বংসপ্রাপ্ত প্রজন্মগুলোর সম্পর্কে বলে, যারা দেশে দেশে চষে বেড়িয়েছিল তবু পালানোর জায়গা পায়নি। চলাফেরা যোগ্যতা নয়। যে যন্ত্রটি সচল থাকা দরকার, সেটি ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Casting the Hearing",
          "bn": "শ্রবণ নিক্ষেপ করা"
        },
        "p": [
          {
            "en": "The second condition is aw alqa as-sam', literally: or cast the hearing. Alqa is the verb used for throwing a thing down deliberately, the same verb 37:97 uses of throwing a man into a fire. The Quran does not say or heard, and it does not say or was listening. It says that a person takes his hearing and throws it at the speaker. Attention here is an act performed, not a state a listener happens to be in.",
            "bn": "দ্বিতীয় শর্তটি হলো 'আও আলকাস সাম' — আক্ষরিক অর্থে: অথবা শ্রবণ নিক্ষেপ করল। 'আলকা' সেই ক্রিয়া যা ইচ্ছাকৃতভাবে কিছু ছুঁড়ে ফেলা বোঝায়; 37:97-এ একজন মানুষকে আগুনে নিক্ষেপ করার ক্ষেত্রেও এই ক্রিয়াই ব্যবহৃত হয়েছে। কুরআন বলে না 'অথবা শুনল', বলে না 'অথবা শুনছিল'। বলে যে মানুষটি নিজের শ্রবণশক্তি নিয়ে বক্তার দিকে ছুঁড়ে দেয়। এখানে মনোযোগ একটি সম্পাদিত কাজ, শ্রোতার কোনো এমনি এমনি হয়ে যাওয়া অবস্থা নয়।"
          },
          {
            "en": "Al-Muyassar renders the phrase as inclining the ear, and the shift is worth keeping in view. Sound arrives at everyone in the room without anyone deciding anything; hearing directed at a particular speaker is a decision one of them makes. The verse is therefore not describing two levels of intelligence and setting a bar. It is describing two ways of being present, and both of them are open to anyone willing to do something.",
            "bn": "তাফসীর মুয়াসসার কথাটিকে অনুবাদ করে কান লাগানো হিসেবে, আর এই পরিবর্তনটি চোখে রাখার মতো। শব্দ ঘরের সবার কাছেই পৌঁছায়, তার জন্য কাউকে কিছু সিদ্ধান্ত নিতে হয় না; কিন্তু কোনো নির্দিষ্ট বক্তার দিকে শ্রবণ তাক করা তাদেরই একজনের নেওয়া সিদ্ধান্ত। তাই আয়াতটি দুই স্তরের বুদ্ধিমত্তার বর্ণনা দিয়ে কোনো মানদণ্ড বসাচ্ছে না। এটি উপস্থিত থাকার দুটি ধরনের বর্ণনা দিচ্ছে, আর দুটোই যে কারও জন্য খোলা, যদি সে কিছু করতে রাজি থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "And He Is Shahid",
          "bn": "আর সে শাহিদ"
        },
        "p": [
          {
            "en": "The clause that follows the listening is wa huwa shahid, and he is a witness, or present. The classical readings run in three directions and they do not exclude one another. Al-Muyassar takes it as being present with his heart, neither heedless nor distracted. The app's English follows that line, rendering the phrase as listening while he is present in mind. Others take shahid as being present at the recitation itself.",
            "bn": "শ্রবণের পরের বাক্যাংশটি হলো 'ওয়া হুয়া শাহিদ' — আর সে সাক্ষী, অথবা উপস্থিত। ধ্রুপদী ব্যাখ্যাগুলো তিন দিকে যায়, আর একটি অন্যটিকে বাতিল করে না। তাফসীর মুয়াসসার এটিকে বোঝে অন্তর দিয়ে উপস্থিত থাকা হিসেবে — উদাসীনও নয়, অন্যমনস্কও নয়। অ্যাপের ইংরেজি অনুবাদ সেই ধারাই অনুসরণ করে, কথাটিকে অনুবাদ করে 'মনে উপস্থিত থেকে শোনা' হিসেবে। কেউ কেউ 'শাহিদ' বলতে বোঝেন তিলাওয়াতের আসরে উপস্থিত থাকা।"
          },
          {
            "en": "A third reading takes the word in its ordinary sense of a witness, one who attests to the truth of what he is hearing. All three describe the same failure from different sides, a man whose ears are in the room while his attention is elsewhere. Tafsir Ahsanul Bayaan puts the reason bluntly: one who does not take in what is said might as well not have been there at all.",
            "bn": "তৃতীয় ব্যাখ্যাটি শব্দটিকে তার সাধারণ অর্থেই নেয় — সাক্ষী, অর্থাৎ যে শুনছে তার সত্যতার সাক্ষ্য দেয়। তিনটি ব্যাখ্যাই একই ব্যর্থতাকে ভিন্ন ভিন্ন দিক থেকে বর্ণনা করে: এমন এক মানুষ, যার কান ঘরের ভেতরে আর মনোযোগ অন্য কোথাও। তাফসীর আহসানুল বায়ান কারণটি সোজাসুজি বলে দেয়: যে কথাটাই বুঝল না, তার উপস্থিত থাকা আর না থাকা সমান।"
          }
        ]
      },
      {
        "h": {
          "en": "The Surah's Other Heart",
          "bn": "সূরার আরেকটি অন্তর"
        },
        "p": [
          {
            "en": "Surah Qaf mentions the heart twice in this stretch, and the two places explain each other. At 50:33 the one entering the Garden is described as having feared ar-Rahman in the unseen and come with qalbin munib, a heart that keeps turning back. Four verses later, a heart that can receive a reminder is the qualification for benefiting from one. The returning heart and the receiving heart are the same organ described at two moments.",
            "bn": "সূরা কাফ এই অংশে অন্তরের কথা দুবার বলে, আর দুটি জায়গা পরস্পরকে ব্যাখ্যা করে। 50:33-এ জান্নাতে প্রবেশকারীর বর্ণনা এই যে সে না দেখে রহমানকে ভয় করেছে এবং এসেছে 'কলবিম মুনীব' নিয়ে — এমন অন্তর যা বারবার ফিরে আসে। চার আয়াত পরে, উপদেশ গ্রহণ করতে পারে এমন অন্তরই উপদেশ থেকে উপকৃত হওয়ার যোগ্যতা। ফিরে আসা অন্তর আর গ্রহণ করা অন্তর — একই যন্ত্র, দুই মুহূর্তে বর্ণিত।"
          },
          {
            "en": "The practical instruction sits in the verse's own verbs, and it is unusually concrete. Reminders are not scarce; presence is. Before reading, do the thing the verse names: throw your hearing at it, and be in the room. Two verses on, 50:39 tells the Prophet ﷺ to be patient with what they say and to glorify his Lord before the rising of the sun and before its setting, which is where a gathered attention gets spent.",
            "bn": "ব্যবহারিক নির্দেশটি আয়াতের নিজের ক্রিয়াপদগুলোতেই বসে আছে, আর তা অস্বাভাবিক রকম বাস্তব। উপদেশের অভাব নেই; অভাব উপস্থিতির। পড়ার আগে আয়াতটি যে কাজের নাম বলে সেটিই করুন: আপনার শ্রবণকে তার দিকে ছুঁড়ে দিন, আর ঘরের ভেতরে থাকুন। দুই আয়াত পরে 50:39 নবী ﷺ-কে বলে, তারা যা বলে তাতে ধৈর্য ধরতে এবং সূর্যোদয়ের আগে ও সূর্যাস্তের আগে প্রতিপালকের প্রশংসা ও পবিত্রতা ঘোষণা করতে — একত্র করা মনোযোগ সেখানেই ব্যয় হয়।"
          }
        ]
      }
    ]
  },
  "50:40": {
    "sections": [
      {
        "h": {
          "en": "Patience Carried Into Night",
          "bn": "রাত অবধি গড়ানো ধৈর্য"
        },
        "p": [
          {
            "en": "Wa mina l-layli fa-sabbihhu wa adbara s-sujud: and in part of the night glorify Him, and after the prostrations. The verse is five Arabic words, and cannot be read without the verse before it. In 50:39 the Prophet ﷺ is told to be patient over what they say, and to glorify with the praise of his Lord before the rising of the sun and before its setting. Ibn Kathir reads that command as addressed to him about those who denied him: bear with them, and turn away from them in a good way.",
            "bn": "ওয়া মিনাল লাইলি ফাসাব্বিহহু ওয়া আদবারাস সুজূদ: আর রাতের একাংশে তাঁর তাসবীহ করো, আর সিজদাগুলোর পরেও। আরবিতে আয়াতটি মাত্র পাঁচ শব্দের। আগের আয়াত বাদ দিয়ে একে পড়াই যায় না। ৫০:৩৯ আয়াতে নবী ﷺ-কে বলা হয়েছে, ওরা যা বলে তাতে ধৈর্য ধরো, আর সূর্য ওঠার আগে ও ডোবার আগে রবের প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করো। ইবন কাসীরের ব্যাখ্যায় এ হুকুম তাঁকে দেওয়া হয়েছে তাঁকে অস্বীকারকারীদের প্রসঙ্গে। অর্থাৎ ওদের কথা সয়ে যাও, আর সুন্দরভাবে ওদের এড়িয়ে চলো।"
          },
          {
            "en": "So 50:40 completes a small timetable. The neighbouring verse named the two edges of the day; this one adds the night, and the moments behind the prayer itself. Al-Muyassar reads the two verses as a single instruction: be patient, O Messenger, over what the deniers say, for Allah is watching them; pray the dawn prayer before sunrise and the afternoon prayer before sunset; pray in the night; and glorify your Lord with praise after the prayers. As-Sa'di gives the reason in a line: remembering Allah consoles the soul, keeps it company, and makes patience easy to bear.",
            "bn": "তাই ৫০:৪০ আয়াত একটা ছোট্ট সময়সূচি পূর্ণ করে। পাশের আয়াত দিনের দুই প্রান্তের কথা বলেছে। এ আয়াত তার সঙ্গে যোগ করে রাত, আর নামাযের ঠিক পরের মুহূর্তগুলো। মুয়াসসার দুই আয়াতকে একটানা এক নির্দেশ হিসেবে পড়ে। হে রাসূল, মিথ্যা প্রতিপন্নকারীরা যা বলে তাতে ধৈর্য ধরুন, আল্লাহ তাদের উপর নজর রাখছেন। সূর্য ওঠার আগে ফজরের নামায আর ডোবার আগে আসরের নামায পড়ুন। রাতে নামায পড়ুন। আর নামাযগুলোর পরে প্রশংসাসহ রবের তাসবীহ করুন। সা'দী কারণটা বলেন এক লাইনে: আল্লাহর জিকির মনকে সান্ত্বনা দেয়, তার সঙ্গী হয়, আর ধৈর্যকে সহজ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Hours of the Night",
          "bn": "রাতের কোন প্রহর"
        },
        "p": [
          {
            "en": "Ibn Kathir explains fa-sabbihhu as fa-salli lahu: pray to Him. He sets beside it 17:79, and in part of the night keep vigil with it as an extra for you; perhaps your Lord will raise you to a praised station. For him, then, the night glorification is prayer, and the verse he pairs it with is the verse of tahajjud. Al-Baghawi begins elsewhere. He says the phrase means the Maghrib and 'Isha prayers, and then reports Mujahid: of the night means the night prayer, at whatever hour it is prayed.",
            "bn": "ইবন কাসীর ফাসাব্বিহহু-র ব্যাখ্যা দেন ফাসাল্লি লাহু দিয়ে, অর্থাৎ তাঁর জন্য নামায পড়ো। পাশে তিনি রাখেন ১৭:৭৯ আয়াত: আর রাতের একাংশে তা দিয়ে তাহাজ্জুদ পড়ো, এটা তোমার জন্য অতিরিক্ত। আশা করা যায় তোমার রব তোমাকে প্রশংসিত স্থানে পৌঁছে দেবেন। তাঁর কাছে তাই রাতের তাসবীহ মানে নামায, আর যে আয়াতের সঙ্গে তিনি একে মেলান সেটি তাহাজ্জুদের আয়াত। বাগাভী শুরু করেন অন্য জায়গা থেকে। তাঁর মতে এখানে মাগরিব ও ইশার নামায বোঝানো হয়েছে। তারপর তিনি মুজাহিদের মত আনেন: রাতের একাংশ মানে রাতের নামায, যে প্রহরেই পড়া হোক।"
          },
          {
            "en": "At-Tabari says openly that the people of interpretation disagreed. Ibn Zayd said it was al-'atama, the late evening prayer. Mujahid said: of the whole night. At-Tabari judges Mujahid's word nearer the truth, because Allah did not limit the command to a particular hour, so it covers all the night's hours. On that footing, he adds, the verse looks more like a command to pray Maghrib and 'Isha, since both are prayed at night, than a command to pray al-'atama alone.",
            "bn": "তাবারী খোলাখুলি বলেন, তাফসীরকারদের মধ্যে এ নিয়ে মতভেদ হয়েছে। ইবন যায়দ বলেছেন, এটা আতামা, অর্থাৎ রাতের শেষ ভাগের ইশার নামায। মুজাহিদ বলেছেন: গোটা রাতের যে কোনো সময়। তাবারীর বিচারে মুজাহিদের কথাই সত্যের বেশি কাছে। কারণ আল্লাহ রাতের কোনো নির্দিষ্ট প্রহর বেঁধে দেননি, তাই হুকুমটা রাতের সব প্রহরেই খাটে। এর ভিত্তিতে তিনি যোগ করেন, আয়াতটি শুধু আতামার নামাযের হুকুম হওয়ার চেয়ে মাগরিব ও ইশা দুটোরই হুকুম হওয়ার সঙ্গে বেশি মেলে, কেননা দুটোই রাতে পড়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Qurtubi's Four Sayings",
          "bn": "কুরতুবীর চারটি উক্তি"
        },
        "p": [
          {
            "en": "Al-Qurtubi first glosses the night glorification as the two evening prayers, Maghrib and 'Isha, then lists four sayings on the whole phrase. It is glorifying Allah in the night, said Abu al-Ahwas. It is the prayer of the whole night, said Mujahid. It is the two rak'as of Fajr, said Ibn Abbas (RA). It is the last 'Isha, said Ibn Zayd. The range is wide: spoken tasbih, voluntary prayer through the night, an obligatory evening prayer, and the sunnah before dawn.",
            "bn": "কুরতুবী প্রথমে রাতের তাসবীহর অর্থ করেন সন্ধ্যা ও রাতের দুই নামায, মাগরিব আর ইশা। তারপর পুরো বাক্যাংশ একসঙ্গে ধরে চারটি উক্তি উল্লেখ করেন। আবুল আহওয়াস বলেছেন, এটা রাতে আল্লাহর তাসবীহ পাঠ। মুজাহিদ বলেছেন, এটা সারা রাতের নামায। ইবন আব্বাস (রাঃ) বলেছেন, এটা ফজরের দুই রাকাত। ইবন যায়দ বলেছেন, এটা শেষ ইশা। মতগুলোর পরিসর তাই অনেক বড়। মুখে পড়া তাসবীহ, রাতভর নফল নামায, রাতের একটি ফরজ নামায, আবার ফজরের আগের সুন্নতও।"
          },
          {
            "en": "He then cites Ibn al-'Arabi on what supports each. Whoever says it is tasbih in the night is backed, Ibn al-'Arabi says, by a narration he calls sahih about the words said on waking in the night; it is not quoted here. Whoever says it is prayer by night notes that prayer is called tasbih because of the tasbih inside it, as the mid-morning prayer is called subhat ad-duha. And whoever says Fajr or 'Isha does so because both belong to the night's prayers, 'Isha the more clearly.",
            "bn": "এরপর তিনি ইবনুল আরাবীর কথা আনেন, কোন মতের পক্ষে কী আছে। যাঁরা বলেন এটা রাতের তাসবীহ, ইবনুল আরাবীর মতে তাঁদের পক্ষে আছে রাতে ঘুম ভাঙার সময়ের দোয়া নিয়ে একটি বর্ণনা, যাকে তিনি সহীহ বলেন। সেটি এখানে উদ্ধৃত করা হয়নি। যাঁরা বলেন এটা রাতের নামায, তাঁরা দেখান যে নামাযের ভেতরে তাসবীহ থাকে বলেই নামাযকে তাসবীহ বলা হয়। যেমন চাশতের নামাযকে বলা হয় সুবহাতুদ দুহা। আর যাঁরা ফজর বা ইশার কথা বলেন, তাঁদের যুক্তি হলো দুটোই রাতের নামাযের অন্তর্ভুক্ত, তবে ইশার বেলায় তা বেশি স্পষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "At the Backs of Prayer",
          "bn": "নামাযের পিঠে পিঠে"
        },
        "p": [
          {
            "en": "Then wa adbara s-sujud. At-Tabari glosses it: glorify with the praise of your Lord after the prostrations of your prayer. Sujud here stands for the prayer, and Ma'arif al-Qur'an reports Mujahid taking it to mean the five obligatory prayers. What the glorifying behind them consists of is the verse's second disagreement, and at-Tabari sets it out in three groups. The first says it is a prayer, namely the two rak'as prayed after Maghrib.",
            "bn": "তারপর ওয়া আদবারাস সুজূদ। তাবারী এর অর্থ করেন: তোমার নামাযের সিজদাগুলোর পরে রবের প্রশংসাসহ তাসবীহ করো। সুজূদ বা সিজদা এখানে নামাযের প্রতীক। মাআরিফুল কুরআন জানায়, মুজাহিদ এখানে পাঁচ ওয়াক্তের ফরজ নামায বুঝেছেন। সেই নামাযগুলোর পরের তাসবীহ আসলে কী, তা নিয়েই এ আয়াতের দ্বিতীয় মতভেদ। তাবারী মতগুলো সাজিয়েছেন তিনটি দলে। প্রথম দলের মতে এটা একটা নামায, অর্থাৎ মাগরিবের পরের দুই রাকাত।"
          },
          {
            "en": "Ibn Kathir reports it from Umar, Ali and his son al-Hasan, Ibn Abbas, Abu Hurayrah and Abu Umamah (RA), and as the saying of Mujahid, Ikrimah, ash-Sha'bi, an-Nakha'i, al-Hasan al-Basri and Qatadah. Al-Qurtubi adds al-Awza'i and az-Zuhri. At-Tabari gives chain after chain from Ali (RA), and reports that al-Awza'i, asked about the two rak'as after Maghrib, answered that they are in the Book of Allah and recited this verse. Al-Baghawi calls it the view of most of the commentators.",
            "bn": "ইবন কাসীর এটা বর্ণনা করেন উমর, আলী ও তাঁর ছেলে হাসান, ইবন আব্বাস, আবু হুরায়রা আর আবু উমামা (রাঃ) থেকে। মুজাহিদ, ইকরিমা, শা'বী, নাখঈ, হাসান বসরী ও কাতাদারও এই মত। কুরতুবী এর সঙ্গে যোগ করেন আওযাঈ আর যুহরীর নাম। তাবারী আলী (রাঃ) থেকে একের পর এক সনদ আনেন। তিনি এটাও বর্ণনা করেন যে আওযাঈকে মাগরিবের পরের দুই রাকাত সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেন, এ দুটো আল্লাহর কিতাবে আছে, তারপর এ আয়াত পড়ে শোনান। বাগাভী বলেন, অধিকাংশ তাফসীরকারের মত এটাই।"
          },
          {
            "en": "The second group says it is tasbih in words after the obligatory prayers, not a prayer after them. At-Tabari reports this from Ibn Abbas through Mujahid: it is the tasbih after the prayer, after all the prayers. Al-Baghawi reports it from Mujahid as tasbih with the tongue after the obligatory prayers, and al-Qurtubi from Abu al-Ahwas. The third group, from Ibn Zayd, says it is the voluntary prayers after the obligatory ones; al-Qurtubi's report of him adds two rak'as after each. Al-Qurtubi also records from Ibn Abbas that it is the witr.",
            "bn": "দ্বিতীয় দলের মতে এটা ফরজ নামাযের পরে মুখে পড়া তাসবীহ, পরে আলাদা কোনো নামায নয়। তাবারী এটা বর্ণনা করেন মুজাহিদের সূত্রে ইবন আব্বাস (রাঃ) থেকে: এটা নামাযের পরের তাসবীহ, সব নামাযের পরে। বাগাভী মুজাহিদ থেকে আনেন, ফরজ নামাযগুলোর পরে জিহ্বা দিয়ে তাসবীহ। কুরতুবী একই কথা আনেন আবুল আহওয়াস থেকে। তৃতীয় দলের মত ইবন যায়দের: এটা ফরজের পরের নফল নামায। কুরতুবীর বর্ণনায় তাঁর কথায় যোগ আছে, প্রতিটি ফরজের পরে দুই রাকাত। কুরতুবী ইবন আব্বাস (রাঃ) থেকে আরেকটি মতও লিখে রাখেন, এটা বিতরের নামায।"
          }
        ]
      },
      {
        "h": {
          "en": "One Name, Two Answers",
          "bn": "একই নাম, দুই জবাব"
        },
        "p": [
          {
            "en": "Ibn Abbas (RA) appears on both sides: at-Tabari has him through 'Ikrimah, and al-Qurtubi and al-Baghawi through al-'Awfi, saying it is the two rak'as after Maghrib, while at-Tabari also has him through Mujahid saying it is tasbih. Mujahid too is on both sides, reported by at-Tabari as saying two rak'as after Maghrib, and by al-Baghawi and Ma'arif al-Qur'an as meaning the tasbih after prayers. The reports were handed on as they came, and this article keeps them so, without deciding between them.",
            "bn": "ইবন আব্বাস (রাঃ)-কে পাওয়া যায় দুই দিকেই। তাবারী ইকরিমার সূত্রে, আর কুরতুবী ও বাগাভী আওফীর সূত্রে তাঁর মুখে আনেন যে এটা মাগরিবের পরের দুই রাকাত। আবার তাবারীই মুজাহিদের সূত্রে তাঁর মুখে আনেন, এটা তাসবীহ। মুজাহিদও দুই দিকেই আছেন। তাবারী তাঁর মুখে আনেন মাগরিবের পরের দুই রাকাত, আর বাগাভী ও মাআরিফুল কুরআন আনে নামাযের পরের তাসবীহ। বর্ণনাগুলো যেভাবে এসেছে সেভাবেই পৌঁছেছে। কোনটি অগ্রগণ্য, সে রায় না দিয়ে এ লেখাও সেগুলো সেভাবেই রাখছে।"
          },
          {
            "en": "The scholars who weighed the views did not agree either. At-Tabari judges the two rak'as after Maghrib most correct, because the authorities of interpretation agree on it; were it not for that agreement, he says, he would hold Ibn Zayd's view, since Allah did not single out one prayer but spoke of the backs of all of them. Al-Qurtubi cites an-Nahhas making a similar point: the apparent wording indicates Ibn Zayd's view, but following the majority is better, and that view is soundly reported from Ali (RA).",
            "bn": "যাঁরা মতগুলো মেপে দেখেছেন, তাঁরাও একমত হননি। তাবারীর বিচারে মাগরিবের পরের দুই রাকাতের মতই সবচেয়ে সঠিক, কারণ তাফসীরের প্রামাণ্য আলেমরা এতে একমত। তিনি বলেন, এই ঐকমত্য না থাকলে তিনি ইবন যায়দের মত নিতেন। কেননা আল্লাহ কোনো একটি নামাযকে আলাদা করেননি, বরং সব নামাযের পরের কথাই বলেছেন। কুরতুবী নাহহাসের প্রায় একই কথা আনেন। আয়াতের বাহ্যিক শব্দ ইবন যায়দের মতের দিকে ইঙ্গিত করে, তবে অধিকাংশের অনুসরণই উত্তম, আর সেই মত আলী (রাঃ) থেকে সহীহভাবে বর্ণিত।"
          },
          {
            "en": "Ibn al-'Arabi, in al-Qurtubi, goes the other way: the tasbih view is the strongest on reflection. Ibn Kathir places that view first and says a hadith in the two Sahihs supports it, then gives the two rak'as after Maghrib as the second view. Al-Qurtubi also records, under the words it is said, that the command was abrogated by the obligatory prayers, so that nothing beyond the five is binding on anyone. The disagreement stands; this article takes no side and gives no ruling.",
            "bn": "কুরতুবীর বইয়ে ইবনুল আরাবী উল্টো দিকে যান। তাঁর মতে চিন্তা করে দেখলে তাসবীহর মতটাই সবচেয়ে মজবুত। ইবন কাসীর এ মতকে রাখেন প্রথমে, আর বলেন বুখারী ও মুসলিমের একটি হাদীস একে সমর্থন করে। তারপর দ্বিতীয় মত হিসেবে আনেন মাগরিবের পরের দুই রাকাত। কুরতুবী 'বলা হয়' কথাটি জুড়ে আরও লিখে রাখেন যে ফরজ নামায আসার পর এ হুকুম রহিত হয়ে গেছে, তাই পাঁচ ওয়াক্ত ছাড়া কারও উপর আর কিছু বাধ্যতামূলক নয়। উৎসগুলো মতভেদটা যেখানে রেখেছে, সেখানেই তা থাকছে। এ লেখা কোনো পক্ষ নেয় না, নিজের কোনো ফতোয়াও দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Idbar or Adbar",
          "bn": "ইদবার, নাকি আদবার"
        },
        "p": [
          {
            "en": "The readers differ over a single vowel. At-Tabari reports that most readers of the Hijaz and Kufa, apart from Asim and al-Kisa'i, read wa idbara s-sujud with a kasra, the verbal noun of adbara, to turn and depart. Asim, al-Kisa'i and Abu Amr read wa adbara with a fatha, the plural of dubur, the back or end of a thing, and at-Tabari's own choice is the fatha. Al-Qurtubi names Nafi', Ibn Kathir the reader and Hamza for the kasra, and says the fatha was the reading of Ali and Ibn Abbas (RA).",
            "bn": "কারীদের মধ্যে মতভেদ মাত্র একটি স্বরচিহ্ন নিয়ে। তাবারী জানান, হিজায ও কুফার বেশির ভাগ কারী, আসিম ও কিসাঈ বাদে, পড়েছেন ওয়া ইদবারাস সুজূদ, যেরসহ। তখন শব্দটি আদবারা ক্রিয়ার মূল রূপ, যার অর্থ মুখ ফিরিয়ে চলে যাওয়া। আসিম, কিসাঈ ও আবু আমর পড়েছেন ওয়া আদবারা, যবরসহ। তখন এটি দুবুর শব্দের বহুবচন, অর্থাৎ কোনো কিছুর পিঠ বা শেষ ভাগ। তাবারী নিজে যবরের পাঠই বেছে নেন। কুরতুবী যেরের পাঠের জন্য নাম করেন নাফি', কারী ইবন কাসীর ও হামযার, আর বলেন যবরের পাঠ ছিল আলী ও ইবন আব্বাস (রাঃ)-এর।"
          },
          {
            "en": "Either way the sense lands close by: at the departing of the prostrations, or at their backs, which is to say when the prayer is over. Al-Qurtubi notes that the Arabs used the word as a time phrase, as in I came to you at the dubur of the prayer. He adds that nobody disputes the kasra at the end of at-Tur, wa idbara n-nujum in 52:49, the fading of the stars' light when the second dawn rises. At-Tabari reports Ibrahim pairing the two phrases with the two rak'as before Subh and the two after Maghrib, and Shu'bah admitting he did not know which was which.",
            "bn": "যেভাবেই পড়া হোক, অর্থ কাছাকাছি থাকে। হয় সিজদাগুলো বিদায় নেওয়ার সময়, নয়তো সেগুলোর পিঠে, মানে নামায শেষ হওয়ার পরে। কুরতুবী দেখান, আরবরা শব্দটিকে সময় বোঝাতে ব্যবহার করত, যেমন: আমি নামাযের দুবুরে তোমার কাছে এসেছিলাম। তিনি আরও বলেন, সূরা তূরের শেষে ৫২:৪৯ আয়াতের ওয়া ইদবারান নুজূম যে যেরসহ পড়া হয়, তাতে কোনো মতভেদ নেই। সেখানে অর্থ হলো দ্বিতীয় ফজর উদিত হলে তারাদের আলো নিভে যাওয়া। তাবারী জানান, ইবরাহীম এই দুই বাক্যাংশকে সুবহের নামাযের আগের দুই রাকাত আর মাগরিবের পরের দুই রাকাতের সঙ্গে মিলিয়েছেন। আর শু'বা স্বীকার করেছেন, কোনটা কোনটার সঙ্গে, তা তিনি জানেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Poor Complained",
          "bn": "গরিব সাহাবিদের অভিযোগ"
        },
        "p": [
          {
            "en": "Ibn Kathir supports the tasbih reading with a report he places in both Sahihs, from Abu Hurayrah (RA). In al-Bukhari's wording (843), when poor people complained that the wealthy prayed and fasted as they did and had money besides, the Prophet ﷺ said: \"Shall I not tell you a thing upon which if you acted you would catch up with those who have surpassed you? Nobody would overtake you and you would be better than the people amongst whom you live except those who would do the same. Say 'Subhana l-lah', 'Al hamdu li l-lah' and 'Allahu Akbar' thirty three times each after every (compulsory) prayer.\"",
            "bn": "তাসবীহর মতের পক্ষে ইবন কাসীর আবু হুরায়রা (রাঃ)-এর একটি বর্ণনা আনেন, যা তাঁর কথায় বুখারী ও মুসলিম দুই গ্রন্থেই আছে। বুখারীর ভাষ্যে (৮৪৩) গরিব লোকেরা এসে অভিযোগ করলেন, ধনীরা আমাদের মতোই নামায পড়ে, রোজা রাখে, তার উপর তাদের টাকাপয়সাও আছে। তখন নবী ﷺ বললেন: \"আমি কি তোমাদের এমন একটা কাজ বলে দেব না, যা করলে তোমরা তোমাদের অগ্রগামীদের ধরে ফেলবে? তোমাদের পরে কেউ তোমাদের ছাড়িয়ে যেতে পারবে না, আর যাদের মাঝে তোমরা আছ তাদের মধ্যে তোমরাই হবে সেরা, তবে যে একই কাজ করবে সে ছাড়া। প্রতিটি (ফরজ) নামাযের পরে 'সুবহানাল্লাহ', 'আলহামদু লিল্লাহ' আর 'আল্লাহু আকবার', এই তিনটি বাক্যের প্রতিটি ৩৩ বার করে বলো।\""
          },
          {
            "en": "Al-Bukhari's report closes with the Companions differing over whether the last phrase should be said 34 times, and the Prophet ﷺ telling them to say all three phrases until each reached 33. Muslim's version (595), which Ibn Kathir's own wording follows, ends instead with the wealthy hearing of it and doing the same, and the Prophet ﷺ saying: \"This is Allah's Grace which He gives to whom He wishes.\" Both compilers placed the report in the collections they called Sahih.",
            "bn": "বুখারীর বর্ণনার শেষে আছে, শেষ বাক্যটি ৩৪ বার বলতে হবে কি না, তা নিয়ে সাহাবিদের মধ্যে মতভেদ হয়। নবী ﷺ তখন বলেন, তিনটি বাক্যই এমনভাবে বলো যাতে প্রতিটি ৩৩ বার হয়। মুসলিমের বর্ণনা (৫৯৫), যার শব্দ ইবন কাসীরের উদ্ধৃতির সঙ্গে মেলে, শেষ হয় অন্যভাবে। ধনীরা খবর পেয়ে তারাও একই কাজ শুরু করে, আর নবী ﷺ বলেন: \"এটা আল্লাহর অনুগ্রহ, তিনি যাকে ইচ্ছা দান করেন।\" দুই সংকলকই বর্ণনাটি রেখেছেন নিজেদের সহীহ নামের সংকলনে।"
          },
          {
            "en": "Al-Baghawi and Ma'arif al-Qur'an both bring a second narration from Abu Hurayrah (RA). Muslim records it (597): \"If anyone extols Allah after every prayer thirty-three times, and praises Allah thirty-three times, and declares His Greatness thirty-three times, ninety-nine times in all, and says to complete a hundred: 'There is no god but Allah, having no partner with Him, to Him belongs sovereignty and to Him is praise due, and He is Potent over everything,' his sins will be forgiven even If these are as abundant as the foam of the sea.\"",
            "bn": "বাগাভী ও মাআরিফুল কুরআন দুটোই আবু হুরায়রা (রাঃ)-এর আরেকটি বর্ণনা আনে। মুসলিম তা সংকলন করেছেন (৫৯৭): \"যে ব্যক্তি প্রতিটি নামাযের পরে ৩৩ বার আল্লাহর তাসবীহ করে, ৩৩ বার আল্লাহর প্রশংসা করে আর ৩৩ বার আল্লাহর বড়ত্ব ঘোষণা করে, তিনটি মিলিয়ে মোট ৯৯ বার, আর একশ পূর্ণ করতে বলে: 'আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তাঁর কোনো শরীক নেই, রাজত্ব তাঁরই, প্রশংসাও তাঁরই, আর তিনি সব কিছুর উপর ক্ষমতাবান', তার গুনাহ মাফ করে দেওয়া হয়, যদিও তা সমুদ্রের ফেনার মতো অগণিত হয়।\""
          },
          {
            "en": "For the two-rak'a reading, Ibn Kathir cites Ali (RA) through Ahmad, Abu Dawud and an-Nasa'i. Abu Dawud records it (1275): \"The Messenger of Allah (ﷺ) would offer two rak'ahs after every obligatory prayer except the dawn and the 'Asr prayer.\" Ibn Kathir also cites a report in which Ibn Abbas (RA) hears the Prophet ﷺ call the two rak'as after Maghrib adbar as-sujud. He notes that at-Tirmidhi called it gharib, known only by this route, that its narrator Rishdin ibn Kurayb is weak, and that it may be Ibn Abbas's own words. It is not relied on here.",
            "bn": "দুই রাকাতের মতের পক্ষে ইবন কাসীর আলী (রাঃ)-এর একটি বর্ণনা আনেন আহমাদ, আবু দাউদ ও নাসাঈর সূত্রে। আবু দাউদের ভাষ্য (১২৭৫): \"রাসূলুল্লাহ ﷺ ফজর ও আসর ছাড়া প্রতিটি ফরজ নামাযের পরে দুই রাকাত নামায পড়তেন।\" ইবন কাসীর আরেকটি বর্ণনাও আনেন, যেখানে ইবন আব্বাস (রাঃ) শোনেন, নবী ﷺ মাগরিবের পরের দুই রাকাতকে আদবারাস সুজূদ বলছেন। সঙ্গে তিনি জানান, তিরমিযী একে গরীব বলেছেন, অর্থাৎ এই একটি সূত্র ছাড়া এটি জানা যায় না। এর বর্ণনাকারী রিশদীন ইবন কুরাইব দুর্বল, আর হয়তো এটা ইবন আব্বাসের নিজের কথা। তাই এখানে এর উপর ভর করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Praise That Bears the Load",
          "bn": "যে প্রশংসা ভার বয়"
        },
        "p": [
          {
            "en": "What reaches a reader, before any ruling, is the shape of the two verses. Patience over what people say comes first, and the cure set beside it is glorification: at the day's two edges, in part of the night, and behind every prostration. Whichever reading is followed, the night and the moment a prayer ends are both named as times that belong to Allah. As-Sa'di's line explains why the command sits next to patience: remembrance consoles the soul, keeps it company, and makes the burden lighter.",
            "bn": "কোনো ফিকহি রায়ের আগে পাঠকের কাছে যা পৌঁছায়, তা হলো দুই আয়াতের গড়ন। আগে আসে মানুষের কথায় ধৈর্যের হুকুম। আর তার পাশে যে ওষুধ রাখা হয়েছে তা তাসবীহ। দিনের দুই প্রান্তে, রাতের একাংশে, আর প্রতিটি সিজদার পরে। যে মতই মানা হোক, রাত আর নামায শেষের মুহূর্ত, দুটোকেই আল্লাহর জন্য রাখা সময় হিসেবে নাম ধরে বলা হয়েছে। হুকুমটা কেন ধৈর্যের পাশে বসানো, সা'দীর কথাতেই তার জবাব। জিকির মনকে সান্ত্বনা দেয়, তার সঙ্গী হয়, আর বোঝাটা হালকা করে দেয়।"
          },
          {
            "en": "The practice can begin small. Stay seated after the salam long enough to say the words the hadith teaches, instead of rising at once. Keep some part of the night, even a short one, for prayer or for glorifying your Lord. Which voluntary prayers are meant, and how many rak'as, belongs to the books of fiqh, and the commentators' disagreement is not settled here. The verse asks for something that comes before any of that: that the day's hard words be answered with the praise of the One who hears them all.",
            "bn": "আমলটা শুরু হতে পারে ছোট করে। সালাম ফেরানোর পরেই উঠে না পড়ে, হাদীসে শেখানো বাক্যগুলো পড়ার মতো সময়টুকু বসে থাকুন। রাতের কিছু অংশ, অল্প হলেও, নামায বা রবের তাসবীহর জন্য রেখে দিন। কোন নফল নামায বোঝানো হয়েছে আর কয় রাকাত, সে আলোচনার জায়গা ফিকহের কিতাব। তাফসীরকারদের মতভেদের মীমাংসাও এখানে করা হচ্ছে না। আয়াতটি এসবের আগের একটা জিনিস চায়। দিনের কঠিন কথাগুলোর জবাব দিন তাঁর প্রশংসা দিয়ে, যিনি সব কথাই শোনেন।"
          }
        ]
      }
    ]
  }
});
