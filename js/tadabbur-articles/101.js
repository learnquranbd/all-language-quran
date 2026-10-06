/**
 * Tadabbur long-form articles — surah 101.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "101:5": {
    "sections": [
      {
        "h": {
          "en": "Four Words After the Moths",
          "bn": "পতঙ্গের পরে চার শব্দ"
        },
        "p": [
          {
            "en": "Wa-takunu al-jibalu ka-l-'ihni al-manfush: and the mountains will be like wool, fluffed up. The Arabic has four words. Wa-takunu, and they will be; al-jibalu, the mountains; ka-l-'ihni, like 'ihn; al-manfush, the fluffed. The verse stands in Surat al-Qari'ah directly after 101:4, the Day when people will be like scattered moths, and directly before 101:6 and 101:7, on him whose scales are heavy and the pleasing life he will have. Those neighbours are named here only as its setting.",
            "bn": "ওয়া তাকূনুল জিবালু কাল ইহনিল মানফূশ: আর পাহাড়গুলো হবে ধুনা পশমের মতো। আরবিতে শব্দ চারটি। ওয়া তাকূনু, আর হবে; আল-জিবালু, পাহাড়গুলো; কাল ইহনি, ইহনের মতো; আল-মানফূশ, ধুনা। সূরা আল-কারিআয় আয়াতটির ঠিক আগে ১০১:৪, যেদিন মানুষ হবে বিক্ষিপ্ত পতঙ্গের মতো। ঠিক পরে ১০১:৬ ও ১০১:৭, যার পাল্লা ভারী আর যে সুখের জীবন পাবে তার কথা। এই প্রতিবেশী আয়াতগুলোর নাম এখানে আসছে শুধু প্রেক্ষাপট বোঝাতে।"
          },
          {
            "en": "So the surah sets two pictures side by side. The first is of people, the second of mountains. The data counts five words in 101:4 and four in this verse, and both are built the same way, on the verb kana, to be, and the particle ka, like. What follows lists what each commentary fetched for this verse says about the two key words, how some of them tie the mountains to the moths before, and where all of them stop. Where they differ, no reading is preferred.",
            "bn": "সূরাটি তাই দুটি ছবি পাশাপাশি রাখে। প্রথমটি মানুষের, দ্বিতীয়টি পাহাড়ের। তথ্য অনুযায়ী ১০১:৪ আয়াতে শব্দ পাঁচটি, আর এ আয়াতে চারটি। দুটোরই গড়ন এক: কানা ক্রিয়া, যার অর্থ হওয়া, আর কা, যার অর্থ মতো। সামনে আসছে এ আয়াতের জন্য সংগৃহীত প্রতিটি তাফসীর মূল দুটি শব্দ নিয়ে কী বলে, কেউ কেউ পাহাড়ের ছবিকে আগের আয়াতের পতঙ্গের সঙ্গে কীভাবে জোড়েন, আর সবাই কোথায় গিয়ে থামেন। মতভেদ যেখানে আছে, সেখানে কোনো একটিকে বেছে নেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Wool, Plain or Coloured",
          "bn": "সাদামাটা পশম, না রঙিন"
        },
        "p": [
          {
            "en": "The first word to settle is al-'ihn. Ibn Kathir gives it simply as wool, al-suf, and lists the early authorities who said so: Mujahid, Ikrimah, Sa'id ibn Jubayr, al-Hasan, Qatadah, Ata' al-Khurasani, ad-Dahhak and as-Suddi. Al-Baghawi's whole gloss is two Arabic words, ka-l-suf al-manduf, like carded wool. At-Tabari brings Qatadah by two chains, once saying al-suf al-manfush, the fluffed wool, and once only huwa al-suf, it is wool. On this line the word names the material and nothing more.",
            "bn": "প্রথমে বুঝতে হবে আল-ইহন শব্দটি। ইবন কাসীর সোজাসুজি বলেন, এর অর্থ পশম, আস-সূফ। যাঁরা এ কথা বলেছেন, এমন পূর্বসূরিদের নামও তিনি দেন: মুজাহিদ, ইকরিমা, সাঈদ ইবন জুবাইর, হাসান, কাতাদা, আতা আল-খুরাসানী, দাহহাক ও সুদ্দী। বাগাভীর পুরো ব্যাখ্যাই দুটি আরবি শব্দ: কাস সূফিল মানদূফ, ধোনা পশমের মতো। তাবারী কাতাদার কথা আনেন দুটি সূত্রে। একবার তিনি বলেন আস-সূফুল মানফূশ, ধুনা পশম। আরেকবার শুধু হুয়াস সূফ, এ হলো পশম। এ ধারায় শব্দটি কেবল উপাদানের নাম।"
          },
          {
            "en": "Others put colour into the definition. At-Tabari, in his own voice, says al-'ihn is al-alwan min al-suf, the coloured kinds of wool, and adds that the people of interpretation said the same. The Muyassar renders the verse as wool of many colours, al-suf muta'addid al-alwan. Al-Qurtubi reports the lexicographers: al-'ihn is al-suf al-masbugh, dyed wool. So three of the commentaries fetched for this verse, by three different routes, hear colour in the word, while Ibn Kathir and al-Baghawi do not mention it.",
            "bn": "অন্যরা সংজ্ঞার ভেতরে রং নিয়ে আসেন। তাবারী নিজের ভাষায় বলেন, আল-ইহন হলো আল-আলওয়ানু মিনাস সূফ, নানা রঙের পশম। সঙ্গে যোগ করেন, তাফসীরবিদেরাও এমনই বলেছেন। মুয়াসসার আয়াতটির অর্থ করে বহু রঙের পশম, আস-সূফুল মুতাআদ্দিদুল আলওয়ান। কুরতুবী ভাষাবিদদের কথা উদ্ধৃত করেন: আল-ইহন মানে আস-সূফুল মাসবূগ, রং করা পশম। অর্থাৎ এ আয়াতের জন্য সংগৃহীত তিনটি তাফসীর তিন ভিন্ন পথে শব্দটির ভেতরে রং শোনে। ইবন কাসীর ও বাগাভী রঙের উল্লেখ করেন না।"
          },
          {
            "en": "These two lines do not contradict each other, but they are not the same either, and the difference is kept here as it stands. One defines al-'ihn by what it is made of, the other adds how it looks. None of the texts fetched for this verse ties the colour to another verse of the Qur'an, so no such link is drawn here. The shipped article on 52:10 reports as-Sa'di elsewhere describing the mountains taking on colours like carded wool; that reading belongs to his note on that verse.",
            "bn": "এ দুই ধারা পরস্পরবিরোধী নয়, আবার হুবহু এক কথাও নয়। পার্থক্যটা এখানে যেমন আছে তেমনই রাখা হলো। একটি আল-ইহনের সংজ্ঞা দেয় তা কী দিয়ে তৈরি সে হিসেবে, অন্যটি জুড়ে দেয় তা দেখতে কেমন। এ আয়াতের জন্য সংগৃহীত কোনো লেখা রংটিকে কুরআনের অন্য কোনো আয়াতের সঙ্গে জোড়ে না, তাই এখানে এমন কোনো যোগসূত্র টানা হয়নি। ৫২:১০ আয়াতের প্রকাশিত প্রবন্ধে আছে, সাদী অন্য জায়গায় বলেছেন পাহাড়গুলো ধুনা পশমের মতো নানা রং ধারণ করবে। সে পাঠ তাঁর ওই আয়াতের টীকার অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Teased Apart by Hand",
          "bn": "হাতে ধুনে আলগা করা"
        },
        "p": [
          {
            "en": "The second word, al-manfush, describes what has been done to the wool. Al-Qurtubi explains it as al-suf alladhi yunfash bi-l-yad, wool that is teased apart by hand, and the Muyassar uses the same clause, yunfash bi-l-yad. Al-Baghawi's word is al-manduf, carded. The abridged English Ibn Kathir renders the verse as wool, carded, and the translation printed with the verse here has fluffed up. Each of these describes fibres pulled loose from one another until they no longer hold together.",
            "bn": "দ্বিতীয় শব্দ আল-মানফূশ বলে পশমটির সঙ্গে কী করা হয়েছে। কুরতুবী এর ব্যাখ্যা দেন আস-সূফুল্লাযী ইউনফাশু বিল ইয়াদ, যে পশম হাত দিয়ে ধুনে আলগা করা হয়। মুয়াসসারেও হুবহু একই কথা: ইউনফাশু বিল ইয়াদ। বাগাভীর শব্দ আল-মানদূফ, ধোনা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ আয়াতটির অনুবাদ করে কার্ড করা পশম, আর এখানে আয়াতের সঙ্গে ছাপা অনুবাদে আছে ফুলিয়ে তোলা। সবগুলোর ছবি একই: আঁশগুলো একটা থেকে আরেকটা ছাড়িয়ে নেওয়া, যতক্ষণ না সেগুলো আর জোড়া থাকে।"
          },
          {
            "en": "Two commentators push the picture further. Ibn Kathir says the mountains will have become like fluffed wool alladhi qad shara'a fi-l-dhahab wa-l-tamazzuq, which has begun to go and to tear apart. As-Sa'di says it is wool that has been left extremely weak, tatiru bihi adna rih, the slightest wind blows it away. So the emphasis falls differently. Al-Qurtubi and the Muyassar dwell on the hand that teases, Ibn Kathir on the wearing and tearing, and as-Sa'di on how little it takes to carry it off.",
            "bn": "দুজন তাফসীরকার ছবিটাকে আরও এগিয়ে নেন। ইবন কাসীর বলেন, পাহাড়গুলো হয়ে যাবে এমন ধুনা পশমের মতো, আল্লাযী কাদ শারাআ ফিয যাহাবি ওয়াত তামাযযুক, যা মিলিয়ে যেতে ও ছিঁড়ে যেতে শুরু করেছে। সাদী বলেন, এ সেই পশম যা অত্যন্ত দুর্বল হয়ে পড়ে আছে, তাতীরু বিহী আদনা রীহ, সামান্যতম বাতাসেই উড়ে যায়। জোর তাই পড়ে ভিন্ন ভিন্ন জায়গায়। কুরতুবী ও মুয়াসসারের নজর ধুনে দেওয়া হাতের দিকে, ইবন কাসীরের নজর ক্ষয়ে ছিঁড়ে যাওয়ার দিকে। আর সাদীর নজর এই কথায় যে, উড়িয়ে নিতে কত কম লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "From Fibre to Floating Dust",
          "bn": "আঁশ থেকে উড়ন্ত ধুলা"
        },
        "p": [
          {
            "en": "Several commentaries do not stop at the wool. Al-Qurtubi adds ay tasir haba'an wa tazul, that is, they become haba', fine dust, and pass away, and supports it from another place in the Qur'an: haba'an munbaththa, dust scattered about, the wording of 56:6. The Muyassar says the same in nearly the same words: the mountains become haba' and vanish. In these two notes the fluffed wool is a stage on the way to something lighter still, and then to nothing at all.",
            "bn": "কয়েকটি তাফসীর পশমে এসে থামে না। কুরতুবী যোগ করেন আই তাসীরু হাবাআন ওয়া তাযূল, অর্থাৎ সেগুলো হয়ে যাবে হাবা, মিহি ধুলা, তারপর মিলিয়ে যাবে। এর সমর্থনে তিনি কুরআনের আরেক জায়গার কথা আনেন: হাবাআন মুনবাসসা, চারদিকে ছড়ানো ধুলা, যা ৫৬:৬ আয়াতের শব্দ। মুয়াসসারও প্রায় একই ভাষায় বলে, পাহাড়গুলো হাবা হয়ে মিলিয়ে যাবে। এই দুই টীকায় ধুনা পশম একটা ধাপ মাত্র। তারপর আসে আরও হালকা কিছু, শেষে একেবারে কিছুই না।"
          },
          {
            "en": "As-Sa'di sets out the fullest sequence. He opens with al-jibal al-summ al-silab, the solid, hard mountains, which become like fluffed wool. He then quotes 27:88: you see the mountains and think them firmly fixed, while they pass as the clouds pass. After that, he says, they become haba'an manthura, scattered dust, and dwindle away until nothing of them is left to be seen. His is the only note fetched here that names a verse showing the mountains in motion before they vanish.",
            "bn": "সবচেয়ে বিস্তারিত ধারাবাহিকতা দেন সাদী। তিনি শুরু করেন আল-জিবালুস সুম্মুস সিলাব দিয়ে, নিরেট কঠিন পাহাড়, যা হয়ে যাবে ধুনা পশমের মতো। তারপর উদ্ধৃত করেন ২৭:৮৮: তুমি পাহাড়গুলো দেখে ভাবো সেগুলো অনড়, অথচ সেগুলো চলছে মেঘের চলার মতো। এরপর, তিনি বলেন, সেগুলো হয়ে যাবে হাবাআন মানসূরা, বিক্ষিপ্ত ধুলা, আর ক্ষয়ে ক্ষয়ে এমন মিলিয়ে যাবে যে দেখার মতো কিছুই অবশিষ্ট থাকবে না। এখানে সংগৃহীত টীকাগুলোর মধ্যে কেবল তাঁরটিই এমন আয়াতের নাম নেয়, যেখানে মিলিয়ে যাওয়ার আগে পাহাড়ের চলার ছবি আছে।"
          },
          {
            "en": "At-Tabari closes his note with a report in the passive, wa-dhukira, and it has been mentioned, that the mountains will travel over the earth while still in the form of mountains, like haba'. He names no one for this report and gives it no chain, unlike the two sayings of Qatadah just before it. It is reported here exactly as he left it: something mentioned, with its source unnamed. It is not added to as-Sa'di's sequence as if the two were one account.",
            "bn": "তাবারী তাঁর টীকা শেষ করেন কর্মবাচ্যে একটি বর্ণনা দিয়ে, ওয়া যুকিরা, উল্লেখ করা হয়েছে যে পাহাড়গুলো পাহাড়ের আকৃতিতেই পৃথিবীর উপর দিয়ে চলবে, হাবার মতো। এ বর্ণনার জন্য তিনি কারও নাম নেন না, কোনো সনদও দেন না। ঠিক আগের কাতাদার দুটি কথার বেলায় কিন্তু সনদ ছিল। তাই এখানেও কথাটা তিনি যেভাবে রেখেছেন সেভাবেই থাকল: একটি উল্লিখিত কথা, যার উৎসের নাম নেই। সাদীর ধারাবাহিকতার সঙ্গে একে এক বিবরণ বানিয়ে জুড়ে দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "One Day for Moths and Mountains",
          "bn": "পতঙ্গ ও পাহাড়ের একই দিন"
        },
        "p": [
          {
            "en": "How does the mountain picture relate to the people picture before it? At-Tabari answers through his paraphrase. He opens the verse with wa-yawma takunu al-jibalu, and on the Day the mountains will be, so the yawm, the Day, that began 101:4 carries straight into this verse. On his reading the scattered moths and the fluffed wool are not two separate scenes but two sights on the same Day, one about the living and one about the earth they stood on.",
            "bn": "আগের আয়াতে মানুষের ছবি, এ আয়াতে পাহাড়ের। দুটোর সম্পর্ক কী? তাবারী উত্তর দেন তাঁর ভাষ্যের গড়ন দিয়েই। তিনি আয়াতটি শুরু করেন ওয়া ইয়াওমা তাকূনুল জিবাল দিয়ে, আর যেদিন পাহাড়গুলো হবে। অর্থাৎ ১০১:৪ আয়াত যে ইয়াওম, যে দিন দিয়ে শুরু হয়েছিল, সেটাই সোজা এ আয়াতে এসে পড়ে। তাঁর পাঠে বিক্ষিপ্ত পতঙ্গ আর ধুনা পশম আলাদা দুটি দৃশ্য নয়। একই দিনের দুটি চেহারা, একটি জীবিত মানুষের, অন্যটি যে মাটির উপর তারা দাঁড়িয়ে ছিল তার।"
          },
          {
            "en": "As-Sa'di draws the link as a contrast. On 101:4, fetched separately for this purpose, he says people, from the severity of terror, will be like spreading locusts surging into each other, and like the night creatures that do not know where to turn and fall into a lit fire through weakness of perception; then he says, this is the state of people, the possessors of minds. His note on our verse begins wa-amma al-jibal al-summ al-silab: and as for the solid, hard mountains.",
            "bn": "সাদী যোগসূত্রটা দেখান বৈপরীত্য হিসেবে। ১০১:৪ আয়াতে তাঁর টীকা এ উদ্দেশ্যে আলাদা করে সংগ্রহ করা হয়েছে। সেখানে তিনি বলেন, ভয়ের তীব্রতায় মানুষ হবে ছড়িয়ে পড়া পঙ্গপালের মতো, একে অন্যের উপর আছড়ে পড়বে। আবার রাতের সেই পতঙ্গের মতো, যারা জানে না কোন দিকে যাবে, আর বোঝার দুর্বলতায় জ্বালানো আগুনে ঝাঁপ দেয়। তারপর তিনি বলেন, এ হলো বুদ্ধিসম্পন্ন মানুষের অবস্থা। আর এ আয়াতে তাঁর টীকা শুরু হয় ওয়া আম্মাল জিবালুস সুম্মুস সিলাব দিয়ে: আর নিরেট কঠিন পাহাড়গুলোর কথা যদি বলি।"
          },
          {
            "en": "In as-Sa'di's framing, then, the creatures with minds are thrown into confusion, and the hardest matter on earth goes slack and weak. He also says where the pair of pictures leads: once the mountains have dissolved, the scales are set up and people are divided into two groups, the fortunate and the wretched. Ibn Kathir moves the same way, saying that after this Allah tells what the deeds of those who acted come to, honour or disgrace according to their deeds.",
            "bn": "সাদীর এই বিন্যাসে তাই বুদ্ধিসম্পন্ন সৃষ্টি পড়ে যায় দিশাহারা অবস্থায়, আর পৃথিবীর সবচেয়ে কঠিন বস্তু হয়ে পড়ে ঢিলেঢালা আর দুর্বল। ছবি দুটি কোথায় গিয়ে পৌঁছায়, তাও তিনি বলেন। পাহাড় মিলিয়ে গেলে পাল্লা দাঁড় করানো হবে, আর মানুষ ভাগ হবে দুই দলে: সৌভাগ্যবান ও হতভাগা। ইবন কাসীরও একই পথে এগোন। তিনি বলেন, এরপর আল্লাহ জানাচ্ছেন আমলকারীদের আমলের পরিণতি কী হবে, আমল অনুযায়ী সম্মান না অপমান।"
          },
          {
            "en": "Ma'arif al-Qur'an, whose note covers the whole surah at once, takes up only the weighing of deeds and says nothing particular about the mountains. The abridged English Ibn Kathir, in the same grouped text, explains the moths of 101:4 as people scattering, coming and going, bewildered at what is happening to them. That belongs to the previous verse and is named here only so the two pictures can be seen together. The weighing itself is left to 101:6 and the verses after it.",
            "bn": "মাআরিফুল কুরআনের টীকা পুরো সূরাকে একসঙ্গে ধরে। সেখানে কেবল আমল ওজনের আলোচনা আছে, পাহাড় নিয়ে আলাদা কিছু নেই। একই সম্মিলিত লেখায় ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১০১:৪ আয়াতের পতঙ্গের ব্যাখ্যা দেয় এভাবে: মানুষ ছড়িয়ে পড়ছে, আসছে আর যাচ্ছে, কী ঘটছে বুঝতে না পেরে দিশেহারা। এ কথা আগের আয়াতের। এখানে এর নাম আসছে শুধু দুটি ছবি একসঙ্গে দেখার জন্য। ওজনের বিষয়টি ১০১:৬ আর তার পরের আয়াতগুলোর জন্য রেখে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Phrase Again in al-Ma'arij",
          "bn": "আল-মাআরিজে একই বাক্যাংশ"
        },
        "p": [
          {
            "en": "Al-Qurtubi ends his note with wa-qad mada fi surat sa'ala sa'il: it has already been discussed in the surah that begins sa'ala sa'il, al-Ma'arij. There, at 70:9, stand the words wa-takunu al-jibalu ka-l-'ihn, and the mountains will be like 'ihn. These are the first three words of our verse, without al-manfush. So 70:9 has three words and 101:5 has four, and the added word is what tells us the wool has been teased apart.",
            "bn": "কুরতুবী তাঁর টীকা শেষ করেন ওয়া কাদ মাদা ফী সূরাতি সাআলা সাইল দিয়ে: এ নিয়ে আলোচনা আগেই হয়েছে সাআলা সাইল দিয়ে শুরু হওয়া সূরায়, অর্থাৎ আল-মাআরিজে। সেখানে ৭০:৯ আয়াতে আছে ওয়া তাকূনুল জিবালু কাল ইহন, আর পাহাড়গুলো হবে ইহনের মতো। এ আমাদের আয়াতের প্রথম তিনটি শব্দ, আল-মানফূশ ছাড়া। ফলে ৭০:৯ আয়াতে শব্দ তিনটি আর ১০১:৫ আয়াতে চারটি। বাড়তি শব্দটিই জানিয়ে দেয় পশমটা ধুনে আলগা করা।"
          },
          {
            "en": "That neighbourhood is already treated in this collection. The shipped article on 70:8, the sky like al-muhl, looks at 70:9 beside it and reports Ibn Kathir setting 101:5 next to it. The articles on 52:10, the mountains moving, and 20:106, the levelled plain, carry as-Sa'di's longer account of the stages through which the mountains pass. Those articles are pointed to here by number rather than rebuilt, and nothing from them is attributed to the commentaries on this verse.",
            "bn": "ওই আশপাশের আয়াতগুলো এ সংকলনে আগেই আলোচিত হয়েছে। ৭০:৮ আয়াতের প্রকাশিত প্রবন্ধ, যেখানে আকাশ হবে মুহলের মতো, পাশের ৭০:৯ আয়াতটিও দেখে, আর জানায় ইবন কাসীর সেখানে ১০১:৫ আয়াতকে পাশাপাশি রেখেছেন। ৫২:১০ আয়াত, পাহাড়ের চলা, আর ২০:১০৬ আয়াত, সমতল প্রান্তর, এ দুটির প্রবন্ধে আছে পাহাড় কোন কোন ধাপ পেরোবে তা নিয়ে সাদীর দীর্ঘ বিবরণ। সেগুলো এখানে নতুন করে লেখা হয়নি, শুধু নম্বর দিয়ে দেখিয়ে দেওয়া হলো। সেখান থেকে কিছুই এ আয়াতের তাফসীরের নামে চালানো হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Commentaries Fall Silent",
          "bn": "তাফসীর যেখানে চুপ"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it. Ibn Kathir's grouped notes on the surah do carry narrations, but they concern the fire named in 101:11 and are not attached to this verse, so none is quoted here. None of the fetched texts gives an occasion of revelation for the verse either. What the sources offer on the mountains is the meaning of two words, a few cross-references, and an unnamed report in at-Tabari, and that is all this article reports.",
            "bn": "এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি। সূরাটির উপর ইবন কাসীরের সম্মিলিত টীকায় কিছু বর্ণনা আছে বটে, তবে সেগুলো ১০১:১১ আয়াতে বলা আগুন নিয়ে, এ আয়াতের সঙ্গে যুক্ত নয়। তাই এখানে কোনোটি উদ্ধৃত হয়নি। সংগৃহীত কোনো লেখা আয়াতটির নাযিলের প্রেক্ষাপটও জানায় না। পাহাড় নিয়ে উৎসগুলো যা দেয়, তা হলো দুটি শব্দের অর্থ, কয়েকটি আয়াতের বরাত, আর তাবারীর একটি নামহীন বর্ণনা। এ প্রবন্ধ এর বাইরে কিছু বলে না।"
          },
          {
            "en": "That restraint extends to the physical question. The commentators speak of wool, a hand that teases it, a wind that lifts it, and dust that disappears. They do not explain what happens to rock and stone, and the article does not fill that gap with explanations of its own. The verse describes an event of the unseen Day in the language of something familiar, and the description here stops where the verse and its commentators stop, without adding any account of how it will come about.",
            "bn": "এই সংযম ভৌত প্রশ্নেও খাটে। তাফসীরকারেরা কথা বলেন পশম নিয়ে, যে হাত তা ধুনে, যে বাতাস তা ওড়ায়, আর যে ধুলা মিলিয়ে যায় তা নিয়ে। পাথর আর শিলার কী হবে, তার ব্যাখ্যা তাঁরা দেন না। এ প্রবন্ধও নিজের কোনো ব্যাখ্যা দিয়ে সে ফাঁক ভরায় না। আয়াতটি অদেখা সেই দিনের এক ঘটনা বলে চেনা জিনিসের ভাষায়। এখানে বর্ণনা থামছে ঠিক সেখানে, যেখানে আয়াত আর তার তাফসীরকারেরা থেমেছেন। কীভাবে তা ঘটবে, তার কোনো বিবরণ যোগ করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Heavy Becomes Light",
          "bn": "ভারী যখন হালকা"
        },
        "p": [
          {
            "en": "Read in its place, the verse prepares a reversal of weight. The mountains are the heaviest things a listener can picture, and the commentators describe them as fibres a hand can pull apart and a breath of wind can carry. The very next verses turn to scales, to him whose scales are heavy and him whose scales are light. As-Sa'di's sequence puts the setting up of the scales after the mountains have gone, so the measure of weight passes from the earth to the deeds.",
            "bn": "নিজের জায়গায় রেখে পড়লে আয়াতটি ওজনের এক উল্টে যাওয়ার প্রস্তুতি নেয়। শ্রোতা যত জিনিস কল্পনা করতে পারে, পাহাড়ই তার মধ্যে সবচেয়ে ভারী। আর তাফসীরকারেরা তাকে বর্ণনা করেন এমন আঁশ হিসেবে, যা হাতে টেনে আলাদা করা যায়, এক ঝলক বাতাসে উড়ে যায়। ঠিক পরের আয়াতগুলোই আসে পাল্লার কথায়, যার পাল্লা ভারী আর যার পাল্লা হালকা। সাদীর ধারাবাহিকতায় পাল্লা দাঁড় করানো হয় পাহাড় চলে যাওয়ার পরে। ওজনের মাপ তাই সরে যায় মাটি থেকে আমলের দিকে।"
          },
          {
            "en": "A reader can carry that into an ordinary week. Much of what feels fixed, a position, a reputation, a plan, an argument won, is lighter than a mountain, and the surah shows even the mountain coming loose. That is not offered to make life feel pointless. It turns attention to the one thing the surah says will be weighed. The question the verse leaves is a practical one: of everything I spend effort on, how much would still register on that scale?",
            "bn": "পাঠক এ কথা নিজের সাধারণ সপ্তাহেও নিয়ে যেতে পারেন। যা কিছু অটল মনে হয়, পদমর্যাদা, সুনাম, পরিকল্পনা, তর্কে জেতা, তার বেশিরভাগই পাহাড়ের চেয়ে হালকা। আর সূরাটি দেখায়, পাহাড়ও আলগা হয়ে যায়। এ কথা জীবনকে অর্থহীন দেখাতে বলা হয়নি। এটা মনোযোগ ফিরিয়ে দেয় সেই একটি জিনিসের দিকে, যা ওজন হবে বলে সূরাটি জানায়। আয়াতটি যে প্রশ্ন রেখে যায় তা খুব বাস্তব: যত কিছুতে আমি শ্রম দিই, তার কতটুকু সেই পাল্লায় ওজন হিসেবে উঠবে?"
          }
        ]
      }
    ]
  },
  "101:9": {
    "sections": [
      {
        "h": {
          "en": "Two Words After the Scales",
          "bn": "পাল্লার পরে দুটি শব্দ"
        },
        "p": [
          {
            "en": "In Arabic the verse is two words: fa-ummuhu hawiya. The first word joins three pieces, fa, then, umm, mother, and hu, his. The second, hawiya, is built from a root about falling. The English translation in this app renders the verse his refuge will be an abyss, and the Bengali translation makes the abyss of Jahannam his dwelling. The literal sense, his mother will be Hawiya, is the phrase the commentators set out to explain, and they do not all explain it the same way.",
            "bn": "আরবিতে আয়াতটি মাত্র দুটি শব্দ: ফাউম্মুহু হাবিয়াহ। প্রথম শব্দে তিনটি অংশ জোড়া লেগেছে। ফা মানে তখন বা সুতরাং, উম্ম মানে মা, আর হু মানে তার। দ্বিতীয় শব্দ হাবিয়া এসেছে পতনের অর্থবাহী ধাতু থেকে। এই অ্যাপের ইংরেজি অনুবাদে আছে, তার আশ্রয় হবে এক অতল গহ্বর। বাংলা অনুবাদে জাহান্নামের অতলস্পর্শী গর্তকে তার বাসস্থান বলা হয়েছে। আক্ষরিক অর্থ দাঁড়ায়, তার মা হবে হাবিয়া। তাফসীরকারেরা এই কথাটিরই ব্যাখ্যা দিতে বসেন, আর সবার ব্যাখ্যা এক রকম নয়।"
          },
          {
            "en": "The verse answers the verse before it. In 101:8 the subject is the person whose scales are light, and 101:9 gives his end in a single clause, opened by fa so that the outcome follows straight on. After it, 101:10 and 101:11 ask what will make you know what it is, and answer: a fire, intensely hot. This study stays with the two words of 101:9. The weighing belongs to 101:6 to 101:8, and the mountains like carded wool to 101:5, each with its own study.",
            "bn": "আয়াতটি আগের আয়াতের জবাব। ১০১:৮ আয়াতে কথা হচ্ছে সেই ব্যক্তিকে নিয়ে, যার পাল্লা হালকা হবে। ১০১:৯ এক বাক্যে তার পরিণতি জানিয়ে দেয়, আর শুরুর ফা অক্ষরটি পরিণতিকে সরাসরি আগের কথার সঙ্গে জুড়ে দেয়। এরপর ১০১:১০ ও ১০১:১১ জিজ্ঞেস করে, তুমি কি জানো তা কী? তারপর উত্তর দেয়: জ্বলন্ত আগুন। এই আলোচনা ১০১:৯ আয়াতের দুটি শব্দেই সীমাবদ্ধ থাকবে। ওজনের প্রসঙ্গ ১০১:৬ থেকে ১০১:৮ পর্যন্ত, আর ধুনা পশমের মতো পাহাড়ের কথা ১০১:৫ আয়াতে। দুটোরই আলাদা আলোচনা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mother That Shelters",
          "bn": "যে মা আশ্রয় দেয়"
        },
        "p": [
          {
            "en": "Several of the fetched commentators take mother as the place a person returns to. At-Tabari reports from Ibn Zayd: al-Hawiya is the Fire; it is his mother and his abode, to which he returns and in which he takes shelter. Ibn Zayd then recited wa-ma'wahumu an-nar, and their abode is the Fire. Ibn Kathir carries the same words and locates the recitation at 3:151. Al-Qurtubi gives the reason in Ibn Zayd's name: it is called a mother because he takes shelter in it as he would with his mother.",
            "bn": "যে কয়টি তাফসীর সংগ্রহ করা হয়েছে, তার বেশ কয়েকটিতে মা মানে সেই জায়গা, যেখানে মানুষ ফিরে যায়। তাবারী ইবন যায়দ থেকে বর্ণনা করেন: হাবিয়া হলো আগুন। সেটাই তার মা, তার ঠিকানা। সেখানেই সে ফিরে যায়, সেখানেই আশ্রয় নেয়। এরপর ইবন যায়দ তিলাওয়াত করেন, ওয়া মা'ওয়াহুমুন নার, তাদের ঠিকানা আগুন। ইবন কাসীর একই কথা উদ্ধৃত করেন এবং আয়াতটি যে ৩:১৫১, তা উল্লেখ করেন। কুরতুবী ইবন যায়দের নামেই কারণটা বলেন: মানুষ যেমন মায়ের কাছে আশ্রয় নেয়, সে তেমনি সেখানে আশ্রয় নেবে, তাই তাকে মা বলা হয়েছে।"
          },
          {
            "en": "At-Tabari also carries, by a chain running through Muhammad ibn Sa'd and his forebears to Ibn Abbas, a reading of the same kind. It is a likeness, the report says: the Fire was made his mother because it became his shelter, as a woman shelters her son, and since he had no shelter besides it, it was put in the place of a mother to him. Ibn Kathir quotes Ibn Jarir, that is at-Tabari, in the same sense: al-Hawiya is called his mother only because he has no other abode.",
            "bn": "তাবারী মুহাম্মাদ ইবন সা'দ ও তাঁর পূর্বপুরুষদের মাধ্যমে ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছানো এক সনদে একই ধরনের ব্যাখ্যা আনেন। বর্ণনাটি বলে, এটা একটা উপমা। আগুনকে তার মা বানানো হয়েছে, কারণ আগুনই হয়ে গেছে তার আশ্রয়, যেমন নারী তার সন্তানকে আগলে রাখে। তার আর কোনো আশ্রয় না থাকায় আগুনকেই তার কাছে মায়ের জায়গায় বসানো হয়েছে। ইবন কাসীর ইবন জারীর, অর্থাৎ তাবারীর কথা উদ্ধৃত করেন একই অর্থে: হাবিয়াকে তার মা বলা হয়েছে শুধু এজন্য যে তার আর কোনো ঠিকানা নেই।"
          },
          {
            "en": "Al-Baghawi says his dwelling is the Fire, and the dwelling is called a mother because rest is first found with mothers. As-Sa'di reads it as his abode and dwelling, the Fire, of whose names is al-Hawiya, which will be to him like a mother that stays close and does not leave, and he cites 25:65: its punishment is ever adhering. Qatada, in at-Tabari, says simply: his destination is the Fire, and it is al-Hawiya. The Muyassar, treating 101:8 and 101:9 together, says his shelter is Jahannam.",
            "bn": "বাগাভী বলেন, তার বাসস্থান আগুন। বাসস্থানকে মা বলা হয়েছে, কারণ মানুষ প্রথম প্রশান্তি খুঁজে পায় মায়ের কাছেই। সা'দীর ব্যাখ্যায় তার ঠিকানা ও বাসস্থান আগুন, যার নামগুলোর মধ্যে হাবিয়াও আছে। সেই আগুন তার কাছে এমন মায়ের মতো হবে, যে সারাক্ষণ লেগে থাকে, কখনো ছেড়ে যায় না। এর সমর্থনে তিনি ২৫:৬৫ উল্লেখ করেন: নিশ্চয়ই তার শাস্তি লেগে থাকা শাস্তি। তাবারীর বর্ণনায় কাতাদা সংক্ষেপে বলেন: তার গন্তব্য আগুন, আর সেটাই হাবিয়া। মুয়াসসার ১০১:৮ ও ১০১:৯ একসঙ্গে ব্যাখ্যা করে বলে, তার আশ্রয় জাহান্নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Falling on the Crown",
          "bn": "মাথার তালুর ভরে পতন"
        },
        "p": [
          {
            "en": "Ibn Kathir opens with the other reading, introduced by the words it has been said: the meaning is that he falls, plunging on the umm of his head, the crown, into the fire of Jahannam, and the word mother is used for his brain. He says something like this was reported from Ibn Abbas, Ikrima, Abu Salih and Qatada. At-Tabari gives two of these with their chains. Qatada said: he falls into the Fire on his head. Abu Salih said: they fall into the Fire on their heads.",
            "bn": "ইবন কাসীর শুরু করেন অন্য ব্যাখ্যাটি দিয়ে, 'বলা হয়েছে' কথাটি জুড়ে: অর্থ হলো, সে মাথার উম্ম, অর্থাৎ তালুর ভরে জাহান্নামের আগুনে আছড়ে পড়বে। এখানে মা শব্দটি দিয়ে তার মগজ বোঝানো হয়েছে। তিনি জানান, এ রকম কথা ইবন আব্বাস (রাঃ), ইকরিমা, আবু সালিহ ও কাতাদা থেকে বর্ণিত। তাবারী এদের দুজনের কথা সনদসহ আনেন। কাতাদা বলেন: সে মাথা নিচের দিকে দিয়ে আগুনে পড়বে। আবু সালিহ বলেন: তারা মাথা নিচু করে আগুনে পড়বে।"
          },
          {
            "en": "Al-Qurtubi puts it in Ikrima's name: because he falls into it on umm ra'sihi, the crown of his head. Al-Baghawi, again with it has been said, explains that umm ra'sihi will be turned downward and upside down, meaning they fall into the Fire on their heads, and he names Qatada and Abu Salih as holding this interpretation. As-Sa'di gives it after his own reading, also as it has been said: the umm of his brain falls into the Fire, that is, he is thrown into the Fire on his head.",
            "bn": "কুরতুবী কথাটি ইকরিমার নামে বলেন: কারণ সে তাতে পড়বে উম্মু রা'সিহি, অর্থাৎ মাথার তালুর ভরে। বাগাভীও 'বলা হয়েছে' বলে ব্যাখ্যা দেন, তার মাথার তালু থাকবে নিচের দিকে, উল্টানো অবস্থায়। মানে তারা মাথা নিচু করে আগুনে পড়বে। এই ব্যাখ্যা কাতাদা ও আবু সালিহের, সেটাও তিনি নাম ধরে জানান। সা'দী নিজের ব্যাখ্যার পরে এটি আনেন, তিনিও 'বলা হয়েছে' দিয়ে: তার মগজের উম্ম আগুনে পতিত হবে, অর্থাৎ তাকে মাথা নিচে দিয়ে আগুনে ফেলা হবে।"
          },
          {
            "en": "The fetched texts do not settle between the shelter reading and the head reading, and this study will not either. Some names stand on both sides. Ibn Abbas is in Ibn Kathir's list for the head reading, while at-Tabari's chain to him gives the shelter reading. Qatada is quoted for falling on the head, and also for the shelter side: his destination is the Fire, in at-Tabari, and it is the Fire, and it is their abode, in a report Ibn Kathir cites from Ibn Abi Hatim. Al-Qurtubi records al-Akhfash, for whom ummuhu means his place of settling, and adds: the meaning is close.",
            "bn": "সংগৃহীত তাফসীরগুলো আশ্রয়ের ব্যাখ্যা আর মাথার ব্যাখ্যার মধ্যে কোনোটিকে চূড়ান্ত করে না, এই আলোচনাও করবে না। কিছু নাম দুই দিকেই পাওয়া যায়। ইবন কাসীরের তালিকায় ইবন আব্বাস (রাঃ) আছেন মাথার ব্যাখ্যার পক্ষে, অথচ তাবারীর সনদে তাঁর থেকে আসে আশ্রয়ের ব্যাখ্যা। কাতাদার নামে মাথা নিচু করে পড়ার কথা আছে, আবার আশ্রয়ের পক্ষের কথাও আছে। তাবারীতে তিনি বলেন, তার গন্তব্য আগুন। আর ইবন আবী হাতিম থেকে ইবন কাসীরের উদ্ধৃত বর্ণনায় তিনি বলেন, সেটা আগুন, আর সেটাই তাদের ঠিকানা। কুরতুবী আখফাশের মত লেখেন, তাঁর মতে উম্মুহু মানে তার স্থায়ী অবস্থানস্থল। এরপর কুরতুবী যোগ করেন: অর্থ কাছাকাছি।"
          }
        ]
      },
      {
        "h": {
          "en": "Hawat Ummuhu, an Arab Saying",
          "bn": "হাওয়াত উম্মুহু: আরবের বুলি"
        },
        "p": [
          {
            "en": "Qatada adds a note on the language, which at-Tabari records: it is an Arabic phrase; when a man fell into a grave matter, people said of him, hawat ummuhu, his mother has fallen. Al-Baghawi repeats it in Qatada's name, as a phrase the Arabs say of a man who has fallen into something severe. Al-Qurtubi explains the same idiom: hawat ummuhu, so she is hawiya, that is, bereaved, thakila. He cites a line of Ka'b ibn Sa'd al-Ghanawi that opens with the words hawat ummuhu.",
            "bn": "কাতাদা ভাষার দিক থেকে একটি কথা যোগ করেন, তাবারী তা লিখে রেখেছেন: এটা আরবদের একটা বুলি। কেউ কঠিন বিপদে পড়লে লোকে তার সম্পর্কে বলত, হাওয়াত উম্মুহু, তার মা পড়ে গেছে। বাগাভীও কাতাদার নামে কথাটা আনেন: কেউ গুরুতর কিছুতে পড়ে গেলে আরবরা তার ব্যাপারে এ কথা বলে। কুরতুবী একই বুলির ব্যাখ্যা দেন। হাওয়াত উম্মুহু, অর্থাৎ মা হাবিয়া হয়ে গেছে, মানে সন্তানহারা, ছাকিলা। এর প্রমাণে তিনি কা'ব ইবন সা'দ আল-গানাভীর একটি চরণ আনেন, যা শুরু হয় হাওয়াত উম্মুহু দিয়ে।"
          },
          {
            "en": "For the shelter reading al-Qurtubi brings a line by Umayya ibn Abi as-Salt: the earth is our stronghold, and it was our mother; in it are our graves, and in it we are born. Another line he quotes speaks of a man carried down by al-hawiya. Taken together, the fetched commentators explain mother here as a figure of speech in Arabic: a place of final return, the crown of the head that goes down first, or an old cry of loss turned to this end.",
            "bn": "আশ্রয়ের ব্যাখ্যার পক্ষে কুরতুবী উমাইয়া ইবন আবিস সালতের একটি চরণ আনেন: মাটিই আমাদের দুর্গ, মাটিই ছিল আমাদের মা। এতেই আমাদের কবর, এতেই আমাদের জন্ম। আরেকটি চরণে তিনি উদ্ধৃত করেন এমন মানুষের কথা, যাকে হাবিয়া নিচে টেনে নিয়ে যায়। সব মিলিয়ে সংগৃহীত তাফসীরগুলো এখানে মা শব্দটিকে আরবি ভাষার একটি রূপক হিসেবে ব্যাখ্যা করে। কারও মতে তা শেষ ফেরার জায়গা, কারও মতে মাথার তালু, যা আগে নিচে যায়। আবার কারও মতে তা শোকের পুরোনো এক বুলি, যা এখানে এই অর্থে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name and a Depth",
          "bn": "একটি নাম, এক গভীরতা"
        },
        "p": [
          {
            "en": "For the second word the commentators again give more than a gloss. Ibn Kathir, al-Baghawi and as-Sa'di each say that al-Hawiya is among the names of the Fire, or of Jahannam. Al-Qurtubi says simply that it means Jahannam, and gives the reason for the name: it is called hawiya because a person is made to fall into it, given how far down its bottom lies. Al-Baghawi says it is the mahwat, the drop, whose bottom cannot be reached.",
            "bn": "দ্বিতীয় শব্দের বেলাতেও তাফসীরকারেরা শুধু শব্দার্থে থামেন না। ইবন কাসীর, বাগাভী ও সা'দী প্রত্যেকেই বলেন, হাবিয়া আগুনের, বা জাহান্নামের, নামগুলোর একটি। কুরতুবী সোজাসুজি বলেন, এর মানে জাহান্নাম। নামের কারণও তিনি বলেন: তাতে মানুষকে ফেলা হয়, আর তার তলা বহু দূরে, তাই একে হাবিয়া বলে। বাগাভী বলেন, এটা সেই মাহওয়াত, এমন খাদ, যার তলা খুঁজে পাওয়া যায় না।"
          },
          {
            "en": "Al-Qurtubi then sets out the language. Al-hawiya is al-mahwat; al-mahwa and al-mahwat are the space between two mountains and the like; and tahawa al-qawm fi al-mahwat is said when people fall into it, each after the other. He also records, under the words it is narrated and with no source named, that al-Hawiya is the name of the lowest gate of the Fire. This study reports that as al-Qurtubi's unsourced note and adds nothing to it.",
            "bn": "এরপর কুরতুবী ভাষার দিকটা খুলে বলেন। হাবিয়া মানে মাহওয়াত। মাহওয়া ও মাহওয়াত বলা হয় দুই পাহাড়ের মাঝের ফাঁক বা এ রকম জায়গাকে। লোকেরা যখন পরপর তাতে পড়ে যায়, তখন বলা হয় তাহাওয়াল কাওমু ফিল মাহওয়াত। তিনি 'বর্ণিত আছে' বলে, কোনো সূত্রের নাম ছাড়াই, আরও লেখেন যে হাবিয়া আগুনের সবচেয়ে নিচের দরজার নাম। এই আলোচনা কথাটিকে কুরতুবীর সূত্রহীন মন্তব্য হিসেবেই জানায়, এর সঙ্গে কিছু যোগ করে না।"
          },
          {
            "en": "The next two verses take the word up. At-Tabari reads 101:10 as addressed to the Prophet ﷺ: and what has made you aware, O Muhammad, what al-Hawiya is? Ibn Kathir says Allah explains al-Hawiya with 101:10 and 101:11: and what will make you know what it is? A fire, intensely hot. At-Tabari glosses hamiya as a fire that has been heated by the fuel set upon it. What the fetched tafsirs say about the Fire under this verse ends there, and so does this study.",
            "bn": "পরের দুটি আয়াত শব্দটির ব্যাখ্যায় আসে। তাবারী ১০১:১০ আয়াতকে নবী ﷺ-কে সম্বোধন হিসেবে পড়েন: হে মুহাম্মাদ, হাবিয়া কী, তা তোমাকে কিসে জানাল? ইবন কাসীর বলেন, আল্লাহ ১০১:১০ ও ১০১:১১ দিয়ে হাবিয়ার ব্যাখ্যা দিয়েছেন: তুমি কি জানো তা কী? জ্বলন্ত আগুন। তাবারী হামিয়ার অর্থ বলেন, যে আগুন তার ওপর দেওয়া জ্বালানিতে উত্তপ্ত হয়েছে। এই আয়াতের অধীনে সংগৃহীত তাফসীরগুলো আগুন সম্পর্কে এটুকুই বলে, এই আলোচনাও এখানেই থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Report of al-Ash'ath",
          "bn": "আশআসের বর্ণনা"
        },
        "p": [
          {
            "en": "At-Tabari brings a report, by a chain through Ma'mar, that stops with al-Ash'ath ibn Abdullah al-A'ma as his own words. When the believer dies, he says, his soul is taken to the souls of the believers, and they say: give your brother rest, for he was in the grief of the world. They ask him what became of so-and-so, and he says: he died; did he not come to you? They say: he was taken to his mother, al-Hawiya. Ibn Kathir quotes the same report from Ibn Jarir in his next passage.",
            "bn": "তাবারী মা'মারের মাধ্যমে আসা এক সনদে একটি বর্ণনা আনেন, যা থেমেছে আশআস ইবন আবদুল্লাহ আল-আ'মার নিজের কথায়। তিনি বলেন, মুমিন মারা গেলে তার রূহ নিয়ে যাওয়া হয় মুমিনদের রূহের কাছে। তারা বলে, তোমাদের ভাইকে একটু জিরোতে দাও, দুনিয়ার দুশ্চিন্তায় সে ডুবে ছিল। এরপর তারা তাকে জিজ্ঞেস করে, অমুকের কী হলো? সে বলে, সে তো মারা গেছে, তোমাদের কাছে আসেনি? তারা বলে, তাকে নিয়ে যাওয়া হয়েছে তার মা হাবিয়ার কাছে। ইবন কাসীর পরের অংশে ইবন জারীর থেকে এই বর্ণনাই উদ্ধৃত করেন।"
          },
          {
            "en": "Ibn Kathir adds that Ibn Marduyah narrated it from Anas ibn Malik as the Prophet's words ﷺ, at greater length, and says he has set it out in his own book on the description of the Fire. He states no grading in the passage fetched. Al-Qurtubi mentions a report of similar sense from Abu Hurayra and names no collection. No fetched tafsir attaches to 101:9 a hadith of the Prophet ﷺ with its collection and grading, so this study quotes none, and al-Ash'ath's words stay his own report.",
            "bn": "ইবন কাসীর জানান, ইবন মারদুয়াহ আনাস ইবন মালিক (রাঃ) থেকে এটি নবী ﷺ-এর বাণী হিসেবে আরও বিস্তারিতভাবে বর্ণনা করেছেন, আর ইবন কাসীর বলেন, আগুনের বর্ণনা বিষয়ক নিজের বইয়ে তিনি তা পুরোটা এনেছেন। সংগৃহীত অংশে তিনি এর মান সম্পর্কে কিছু বলেননি। কুরতুবী আবু হুরায়রা (রাঃ) থেকে এ রকম অর্থের একটি বর্ণনার কথা বলেন, কিন্তু কোনো হাদীসগ্রন্থের নাম দেন না। সংগৃহীত কোনো তাফসীর ১০১:৯ আয়াতের সঙ্গে গ্রন্থ ও মানসহ নবী ﷺ-এর কোনো হাদীস যুক্ত করেনি। তাই এই আলোচনায় কোনো হাদীস উদ্ধৃত হয়নি, আর আশআসের কথা তাঁর নিজের বর্ণনা হিসেবেই থাকছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nobody Here Is Named",
          "bn": "এখানে কারও নাম নেই"
        },
        "p": [
          {
            "en": "This needs saying plainly. Verse 101:9 describes the end of the person whose scales are light, as 101:8 sets him out, and it describes what the text describes. It licenses nothing against any living person or community. It names nobody, and no reader is handed the scales or the knowledge of how anyone's weighing will fall. This study passes no judgment on anyone's fate; it reports what the fetched commentators say about the verse and goes no further.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। ১০১:৯ আয়াত সেই ব্যক্তির পরিণতির কথা বলে, ১০১:৮ আয়াত যার পাল্লা হালকা বলে জানায়। আয়াতটি ঠিক ততটুকুই বর্ণনা করে, যতটুকু তার শব্দে আছে। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। আয়াতে কারও নাম নেই। কোনো পাঠকের হাতে দাঁড়িপাল্লা তুলে দেওয়া হয়নি, কার ওজন কোন দিকে ঝুঁকবে সেই জ্ঞানও দেওয়া হয়নি। এই আলোচনা কারও পরিণতি নিয়ে রায় দেয় না। সংগৃহীত তাফসীরগুলো আয়াতটি সম্পর্কে যা বলে, শুধু সেটুকুই জানায়।"
          },
          {
            "en": "The word mother may unsettle a reader, and the commentators explain why it is there. In their hands it is a figure of speech: the Fire stands in the place of a shelter for a person who has no other, or the crown of the head goes down first, or an old Arab phrase of loss is turned to this end. The verse is not about anybody's actual mother, and nothing in the fetched commentaries reads it that way. Their explanations are reported here as they give them.",
            "bn": "মা শব্দটা পাঠককে অস্বস্তিতে ফেলতে পারে। শব্দটা কেন এসেছে, তাফসীরকারেরা তা ব্যাখ্যা করেন। তাঁদের কাছে এটা রূপক। যার আর কোনো আশ্রয় নেই, তার জন্য আগুনই আশ্রয়ের জায়গা নেয়। অথবা মাথার তালু আগে নিচে যায়। অথবা শোকের পুরোনো আরবি বুলি এখানে এই অর্থে এসেছে। আয়াতটি কারও সত্যিকারের মায়ের কথা বলছে না, আর সংগৃহীত তাফসীরের কোথাও এভাবে পড়া হয়নি। তাঁদের ব্যাখ্যা এখানে তাঁরা যেভাবে দিয়েছেন, সেভাবেই তুলে ধরা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Do I Run?",
          "bn": "আমি কোথায় ছুটে যাই?"
        },
        "p": [
          {
            "en": "The shelter reading leaves a question with the reader. A mother is where a child runs when frightened, without stopping to think. The verse takes that word of safety and sets it beside the Abyss. The surah shows the other side just before, in 101:6 and 101:7, a pleasant life for the person whose scales are heavy. This study reads the contrast as a question put to its own reader: what am I returning to, day by day, and can it hold me?",
            "bn": "আশ্রয়ের ব্যাখ্যা পাঠকের সামনে একটা প্রশ্ন রেখে যায়। ভয় পেলে শিশু না ভেবেই মায়ের কাছে ছুটে যায়। আয়াতটি নিরাপত্তার সেই শব্দটাকে বসিয়ে দেয় হাবিয়ার পাশে। ঠিক আগে, ১০১:৬ ও ১০১:৭ আয়াতে, সূরাটি অন্য দিকটাও দেখায়: যার পাল্লা ভারী, তার জন্য সন্তোষজনক জীবন। এই আলোচনা এই বৈপরীত্যকে নিজের পাঠকের প্রতি প্রশ্ন হিসেবেই পড়ে। দিনের পর দিন আমি কিসের দিকে ফিরে যাচ্ছি? আর সেটা কি আমাকে ধরে রাখতে পারবে?"
          },
          {
            "en": "The right use of such a verse is to look at one's own deeds, not at anybody else's. As-Sa'di's citation of 25:65 points to a prayer the Qur'an itself gives, from those who say: our Lord, avert from us the punishment of Jahannam; indeed its punishment is ever adhering. A reader who leaves 101:9 with that prayer on his tongue, and with his own scales on his mind, has taken from the verse what a warning is for.",
            "bn": "এমন আয়াতের সঠিক ব্যবহার হলো নিজের আমলের দিকে তাকানো, অন্যের আমলের দিকে নয়। সা'দী যে ২৫:৬৫ উল্লেখ করেছেন, তা কুরআনেরই শেখানো একটি দোয়ার দিকে ইঙ্গিত করে। সেখানে কিছু মানুষ বলে: হে আমাদের রব, জাহান্নামের শাস্তি আমাদের থেকে ফিরিয়ে নিন, নিশ্চয়ই তার শাস্তি লেগে থাকা শাস্তি। যে পাঠক ১০১:৯ পড়ে মুখে এই দোয়া আর মনে নিজের পাল্লার চিন্তা নিয়ে ওঠেন, সতর্কবাণী যে জন্য আসে, তিনি তা-ই নিয়েছেন।"
          }
        ]
      }
    ]
  }
});
