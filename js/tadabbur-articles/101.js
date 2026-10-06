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
  }
});
