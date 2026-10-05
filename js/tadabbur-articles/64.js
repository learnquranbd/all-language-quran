/**
 * Tadabbur long-form articles — surah 64.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "64:3": {
    "sections": [
      {
        "h": {
          "en": "Nine Words, Three Movements",
          "bn": "নয় শব্দে তিন ধাপ"
        },
        "p": [
          {
            "en": "Khalaqa as-samawati wa-l-arda bi-l-haqqi wa sawwarakum fa-ahsana suwarakum wa ilayhi al-masir: He created the heavens and the earth with the truth, and He formed you and made your forms good, and to Him is the return. Nine Arabic words in three clauses. The first takes in the whole cosmos, the second narrows to the listener's own body, and the third looks ahead to where every listener is going. Wide, then near, then forward: the eye is moved in that order before anything is asked of it.",
            "bn": "খালাকাস সামাওয়াতি ওয়াল আরদা বিল হাক্কি ওয়া সাওওয়ারাকুম ফাআহসানা সুওয়ারাকুম ওয়া ইলাইহিল মাসীর: তিনি আসমান ও যমীন সৃষ্টি করেছেন হক দিয়ে, তোমাদের আকৃতি দিয়েছেন আর সেই আকৃতি সুন্দর করেছেন, আর ফিরে যাওয়া তাঁরই কাছে। আরবিতে নয়টি শব্দ, তিনটি বাক্যাংশ। প্রথমটি গোটা সৃষ্টিজগৎকে ধরে। দ্বিতীয়টি নেমে আসে শ্রোতার নিজের শরীরে। তৃতীয়টি সামনে তাকায়, প্রত্যেক শ্রোতা কোথায় যাচ্ছে সেদিকে। আগে বিস্তার, তারপর নিকট, তারপর সামনের পথ। কিছু চাওয়ার আগে আয়াত চোখকে এই ক্রমে ঘুরিয়ে আনে।"
          },
          {
            "en": "The verse stands in a run that opens the surah. 64:1 says that all in the heavens and the earth glorify Allah, to whom belong the dominion and the praise. 64:2 says it is He who created you, and that among you are the one who disbelieves and the one who believes. As-Sa'di reads 64:3 as the next step: having mentioned the creation of the human being who is charged with commands and prohibitions, Allah now mentions the creation of everything else. He explains the heavens and the earth as their bodies and all that is in them, and says Allah made their creation good.",
            "bn": "সূরার শুরুর একটানা কয়েকটি আয়াতের মধ্যে এর জায়গা। ৬৪:১ বলে, আসমান ও যমীনে যা কিছু আছে সবই আল্লাহর তাসবীহ করে, রাজত্ব তাঁর, প্রশংসাও তাঁর। ৬৪:২ বলে, তিনিই তোমাদের সৃষ্টি করেছেন, আর তোমাদের মধ্যে কেউ কাফির, কেউ মু'মিন। সা'দী ৬৪:৩-কে দেখেন পরের ধাপ হিসেবে। আদেশ-নিষেধের দায় যার কাঁধে, সেই মানুষের সৃষ্টির কথা বলার পর আল্লাহ এবার বাকি সৃষ্টির কথা বলছেন। সা'দীর ব্যাখ্যায় আসমান ও যমীন মানে এদের দেহ আর এদের ভেতরের সবকিছু, আর আল্লাহ এদের সৃষ্টি সুন্দর করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Glosses of Bi-l-Haqq",
          "bn": "বিল-হাক্ক: পাঁচ ব্যাখ্যা"
        },
        "p": [
          {
            "en": "What does bi-l-haqq add? The commentators fetched for this verse answer in different words, and they are set side by side here without ranking. Ibn Kathir glosses it as bi-l-'adl wa-l-hikmah, with justice and wisdom; the abridged English Ibn Kathir renders the same pair as with equity and wisdom. At-Tabari has bi-l-'adl wa-l-insaf, with justice and fairness, and he names the heavens as the seven heavens. The Muyassar says Allah created them bi-l-hikmah al-balighah, with consummate wisdom.",
            "bn": "বিল-হাক্ক শব্দটি এখানে কী যোগ করে? এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলো ভিন্ন ভিন্ন শব্দে এর জবাব দেয়। এখানে সেগুলো পাশাপাশি রাখা হলো, কোনোটাকে ওপরে না তুলে। ইবন কাসীর এর ব্যাখ্যা করেন বিল-আদলি ওয়াল-হিকমাহ, অর্থাৎ ইনসাফ ও হিকমত দিয়ে। সংক্ষিপ্ত ইংরেজি ইবন কাসীরেও একই জোড়া, ন্যায্যতা ও হিকমত। তাবারী বলেন বিল-আদলি ওয়াল-ইনসাফ, ইনসাফ ও ন্যায়বিচার দিয়ে, আর আসমান বলতে তিনি যে সাতটি আসমান বোঝান, তা স্পষ্ট করে দেন। মুয়াসসার বলে, আল্লাহ এগুলো সৃষ্টি করেছেন বিল-হিকমাতিল বালিগাহ, পরিপূর্ণ হিকমত দিয়ে।"
          },
          {
            "en": "As-Sa'di gives bi-l-hikmah wa-l-ghayah al-maqsudah lahu: with wisdom, and with the end He intended for it. The stress there falls on purpose, the heavens and the earth made towards an aim. Al-Qurtubi offers two readings. In the first, He created them truly, a certainty in which there is no doubt. The second he introduces with qila, it is said: the preposition bi here carries the sense of li, so the phrase means for the truth. He then names that truth: that those who did evil be repaid for what they did, and those who did good be rewarded with the best.",
            "bn": "সা'দী বলেন বিল-হিকমাতি ওয়াল-গায়াতিল মাকসূদাতি লাহু: হিকমত দিয়ে, আর সেই লক্ষ্য নিয়ে যা আল্লাহ উদ্দেশ্য করেছেন। তাঁর কথায় জোর পড়ে উদ্দেশ্যের ওপর। আসমান ও যমীন বানানো হয়েছে একটা লক্ষ্যের দিকে। কুরতুবী দুটি ব্যাখ্যা দেন। প্রথমটিতে, আল্লাহ এগুলো সৃষ্টি করেছেন সত্যিই, এমন নিশ্চিতভাবে যাতে কোনো সন্দেহ নেই। দ্বিতীয়টি তিনি আনেন 'বলা হয়' দিয়ে। এ মতে 'বি' অব্যয়টি এখানে 'লি'-এর অর্থে, তাই বাক্যের মানে দাঁড়ায় হকের জন্য। সেই হক কী, তাও তিনি বলে দেন: যারা মন্দ করেছে তাদের কাজের প্রতিফল দেওয়া, আর যারা ভালো করেছে তাদের উত্তম পুরস্কার দেওয়া।"
          },
          {
            "en": "So the one phrase is read as justice, as wisdom, as an intended end, as certainty, and as a reason that points towards recompense. In the texts read here no commentator argues against another; each places the weight on a different side of the same two words. Al-Baghawi, in the text fetched for this verse, reproduces the verse and adds no comment of his own, and Ma'arif al-Qur'an moves straight to the forming clause. The verse itself says only bi-l-haqq; the rest is the reading of those who weighed it.",
            "bn": "তাহলে একই শব্দবন্ধের পাঠ দাঁড়াল ইনসাফ, হিকমত, উদ্দিষ্ট লক্ষ্য, নিশ্চয়তা, আর প্রতিফলের দিকে ইঙ্গিত করা এক কারণ। এখানে যে লেখাগুলো পড়া হয়েছে, তাতে কোনো তাফসীরকার অন্যজনের বিরোধিতা করেননি। প্রত্যেকে একই দুটি শব্দের ভিন্ন এক দিকে ভার রেখেছেন। এ আয়াতের জন্য বাগাভীর যে লেখা পাওয়া গেছে, তাতে তিনি শুধু আয়াতটি উদ্ধৃত করেছেন, নিজের কোনো মন্তব্য যোগ করেননি। মাআরিফুল কুরআন সরাসরি আকৃতি দেওয়ার অংশে চলে যায়। আয়াত নিজে শুধু বলে বিল-হাক্ক। বাকিটা তাঁদের পাঠ, যাঁরা কথাটা ওজন করে দেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shaper and the Shaping",
          "bn": "আকৃতিদাতা ও তাঁর গড়া"
        },
        "p": [
          {
            "en": "Wa sawwarakum: and He formed you. Al-Qurtubi defines taswir as takhtit and tashkil, the drawing of outlines and the giving of shape. At-Tabari glosses it with another verb: maththalakum fa-ahsana mathalakum, He gave you your likeness and made your likeness good. Ibn Kathir's word is ashkal, shapes: He made your shapes good. The Muyassar folds the two verbs into one phrase: He created you in the best of forms.",
            "bn": "ওয়া সাওওয়ারাকুম: আর তিনি তোমাদের আকৃতি দিয়েছেন। কুরতুবী তাসবীরের সংজ্ঞা দেন তাখতীত ও তাশকীল দিয়ে, অর্থাৎ রেখা টানা আর গড়ন দেওয়া। তাবারী অন্য একটি ক্রিয়া দিয়ে ব্যাখ্যা করেন: মাছছালাকুম ফাআহসানা মাছালাকুম, তিনি তোমাদের অবয়ব দিয়েছেন, আর সেই অবয়ব সুন্দর করেছেন। ইবন কাসীরের শব্দ আশকাল, মানে গড়ন। তিনি বলেন, আল্লাহ তোমাদের গড়ন সুন্দর করেছেন। মুয়াসসার দুটি ক্রিয়াকে এক কথায় বেঁধে দেয়: তিনি তোমাদের সৃষ্টি করেছেন সবচেয়ে সুন্দর আকৃতিতে।"
          },
          {
            "en": "Ma'arif al-Qur'an begins from a name. Shaping the figures of creatures, it says, is one of the exclusive attributes of Allah, which is why al-Musawwir, the Shaper, is among His names. It then calls the giving of shape one of the Divine blessings the verse mentions, and notes that fa-ahsana suwarakum follows it at once. On that reading the clause names a favour twice: once for being formed at all, and once for being formed well. Neither part is something the one formed did for himself.",
            "bn": "মাআরিফুল কুরআন শুরু করে আল্লাহর একটি নাম থেকে। সৃষ্টির আকৃতি গড়া, তার ভাষায়, একান্তভাবে আল্লাহরই গুণ। এ কারণেই আল-মুসাওয়ির, আকৃতিদাতা, তাঁর নামগুলোর একটি। এরপর মাআরিফ বলে, আকৃতি দেওয়াকে আয়াতটি আল্লাহর নিয়ামতের মধ্যে গুনেছে, আর ঠিক তার পরেই এসেছে ফাআহসানা সুওয়ারাকুম। এ পাঠে বাক্যাংশটি একটি অনুগ্রহের কথা বলে দুবার। একবার আকৃতি পাওয়ার জন্য, আরেকবার সুন্দর আকৃতি পাওয়ার জন্য। এর কোনোটাই যাকে গড়া হয়েছে সে নিজে নিজের জন্য করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Adam Alone, or Everyone",
          "bn": "শুধু আদম, নাকি সবাই"
        },
        "p": [
          {
            "en": "Whom does the you of sawwarakum mean? Al-Qurtubi records two answers. The first, which he attributes to Muqatil, is that the clause means Adam (AS), whom Allah created with His hand as an honour to him. The second is that it means all of creation. At-Tabari's own gloss speaks to the listeners directly, but he also reports the first view: it has been said that the forming of Adam is meant, and his being created by Allah's hand. He gives it with a chain to Ibn 'Abbas, in these words: it means Adam; He created him with His hand.",
            "bn": "সাওওয়ারাকুম-এর 'তোমাদের' কারা? কুরতুবী দুটি জবাব লিখে রাখেন। প্রথমটি তিনি মুকাতিলের নামে বলেন: এখানে আদম (আঃ)-এর কথা বলা হয়েছে, যাঁকে আল্লাহ সম্মান দিয়ে নিজ হাতে সৃষ্টি করেছেন। দ্বিতীয়টি হলো, এখানে উদ্দেশ্য সমস্ত সৃষ্টি। তাবারীর নিজের ব্যাখ্যা শ্রোতাদের সরাসরি সম্বোধন করে। তবে প্রথম মতটিও তিনি উল্লেখ করেন: বলা হয়েছে, এখানে আদমকে আকৃতি দেওয়ার আর আল্লাহর নিজ হাতে তাঁকে সৃষ্টি করার কথা বোঝানো হয়েছে। তিনি এটি সনদসহ ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছে দেন, যাঁর কথা: এর মানে আদম, আল্লাহ তাঁকে নিজ হাতে সৃষ্টি করেছেন।"
          },
          {
            "en": "At-Tabari gives the chain in full, and this article reports it as he does, without grading it. The two views are kept as two. On the first, the verse reminds the children of Adam (AS) of the honour shown to their father. On the second, it speaks to every listener of his or her own forming. The article does not choose between them. Both readings agree on the direction of the clause: the form is received, and its Giver is named alongside the heavens and the earth.",
            "bn": "তাবারী পুরো সনদ উল্লেখ করেছেন। এ প্রবন্ধ সেটি তাঁর মতোই উদ্ধৃত করছে, সনদের মান যাচাই না করে। দুটি মত এখানে দুটি মত হিসেবেই থাকছে। প্রথম মতে আয়াতটি আদম সন্তানদের মনে করিয়ে দেয় তাদের পিতা আদম (আঃ)-কে দেওয়া সম্মানের কথা। দ্বিতীয় মতে আয়াত প্রত্যেক শ্রোতাকে তার নিজের গড়নের কথা বলে। এ প্রবন্ধ এর কোনোটিকে বেছে নিচ্ছে না। দুই পাঠেই বাক্যাংশের দিক এক: আকৃতি পাওয়া জিনিস, আর যিনি দিয়েছেন, আসমান ও যমীনের সঙ্গে একই বাক্যে তাঁর নাম আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Form Is Good",
          "bn": "আকৃতি সুন্দর কিসে"
        },
        "p": [
          {
            "en": "Al-Qurtubi asks the question the clause invites: how did He make their forms good? He answers that Allah made human beings the best of all living creatures and the most splendid in form. His evidence is an observation: a human being does not wish that his form were different from what it is, when he sees the other forms around him. Part of the beauty of the form, he adds, is that it was made upright, muntasib, not bent towards the ground, and he cites 95:4: We have certainly created man in the best of stature.",
            "bn": "বাক্যাংশটি যে প্রশ্ন জাগায়, কুরতুবী সেটাই তোলেন: আল্লাহ তাদের আকৃতি সুন্দর করলেন কীভাবে? তাঁর জবাব, আল্লাহ মানুষকে সব প্রাণীর মধ্যে শ্রেষ্ঠ আর আকৃতিতে সবচেয়ে মনোহর বানিয়েছেন। প্রমাণ হিসেবে তিনি একটা পর্যবেক্ষণ দেন। চারপাশের অন্য সব আকৃতি দেখেও মানুষ চায় না যে তার নিজের আকৃতি অন্যরকম হোক। তিনি আরও বলেন, আকৃতির সৌন্দর্যের একটা দিক হলো মানুষকে সোজা দাঁড় করিয়ে বানানো হয়েছে, মাটির দিকে ঝুঁকিয়ে নয়। এর পক্ষে তিনি ৯৫:৪ আয়াত আনেন: আমি মানুষকে সৃষ্টি করেছি সর্বোত্তম গঠনে।"
          },
          {
            "en": "As-Sa'di cites the same verse and says that the human being is the best of creatures in form and the most splendid to look upon. Ibn Kathir reaches for two other verses. One is 82:6, 82:7 and 82:8: O man, what has deceived you concerning your Lord, the Generous, who created you, proportioned you and balanced you, and assembled you in whatever form He willed. The other is 40:64, where the same three words, wa sawwarakum fa-ahsana suwarakum, stand between the earth made a resting place and the sky a canopy, and the good things given as provision.",
            "bn": "সা'দীও একই আয়াত উদ্ধৃত করে বলেন, আকৃতিতে মানুষ সব সৃষ্টির সেরা, দেখতেও সবচেয়ে মনোহর। ইবন কাসীর আরও দুটি আয়াত টেনে আনেন। একটি ৮২:৬, ৮২:৭ ও ৮২:৮: হে মানুষ, কিসে তোমাকে তোমার মহান রবের ব্যাপারে ধোঁকায় ফেলল, যিনি তোমাকে সৃষ্টি করেছেন, সুঠাম করেছেন, ভারসাম্যপূর্ণ করেছেন, আর যে আকৃতিতে চেয়েছেন তোমাকে গড়ে দিয়েছেন? অন্যটি ৪০:৬৪। সেখানে হুবহু এই তিনটি শব্দ, ওয়া সাওওয়ারাকুম ফাআহসানা সুওয়ারাকুম, এসেছে বসবাসের জন্য স্থির যমীন আর ছাদের মতো আসমানের কথার পরে, আর পবিত্র রিযিকের কথার আগে।"
          },
          {
            "en": "That repetition is worth a pause. In 40:64 the clause sits among the gifts of a dwelling, and the Tadabbur article on that verse follows the commentators into the limbs and the hands at length, so this one does not repeat it. Here the same words stand with something else: before them the truth on which creation rests, and after them the return.",
            "bn": "এই পুনরাবৃত্তি একটু থেমে দেখার মতো। ৪০:৬৪ আয়াতে বাক্যাংশটি এসেছে বসবাসের নানা দানের মাঝে। সেই আয়াতের তাদাব্বুর প্রবন্ধ তাফসীরকারদের অনুসরণ করে হাত-পা ও অঙ্গপ্রত্যঙ্গের আলোচনায় অনেক দূর গেছে, তাই এখানে তার পুনরাবৃত্তি করা হচ্ছে না। এখানে একই শব্দগুলোর পাশে অন্য জিনিস। আগে সেই হক, যার ওপর সৃষ্টি দাঁড়িয়ে আছে। পরে ফিরে যাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "No Two Faces Alike",
          "bn": "কোনো দুই চেহারা এক নয়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an dwells on something every reader can see. Creation falls into classes, the classes into species, and each species holds vast numbers of members, and yet, it says, no single shape ever exactly resembles another. Among human beings, differences of land, stock and nation show clearly in their faces, and the face of each individual is so unique that it baffles the imagination. Ma'arif remarks how small the human face is, and that among uncountable faces of the same kind, one does not look exactly like another.",
            "bn": "মাআরিফুল কুরআন এমন একটা জিনিসের কাছে থামে যা যে-কেউ নিজের চোখে দেখতে পারে। সৃষ্টি নানা শ্রেণিতে ভাগ, প্রতিটি শ্রেণি নানা প্রজাতিতে, আর প্রতিটি প্রজাতিতে অগণিত সদস্য। তবু মাআরিফের কথায়, একটি আকৃতি আরেকটির সঙ্গে হুবহু মেলে না। মানুষের মধ্যে দেশ, বংশ আর জাতির পার্থক্য চেহারায় স্পষ্ট ধরা পড়ে। প্রত্যেকের মুখ এমনই অনন্য যে কল্পনাও হার মানে। মাআরিফ লক্ষ করে, মানুষের মুখ আকারে কত ছোট, অথচ একই ধরনের অসংখ্য মুখের মধ্যে একটি আরেকটির মতো হুবহু দেখায় না।"
          },
          {
            "en": "Then Ma'arif adds a sentence that guards the clause from misuse. In the whole universe, it says, Allah made the human shape the most beautiful, and however ugly a man might seem in his own community, he is still beautiful in his own right when set beside the shapes of all non-human creatures. The comparison the commentators draw, in Ma'arif as in al-Qurtubi and as-Sa'di, is between human beings and other living things. It is not a comparison between one person and another.",
            "bn": "এরপর মাআরিফ এমন একটি কথা যোগ করে যা বাক্যাংশটিকে অপব্যবহার থেকে রক্ষা করে। গোটা সৃষ্টিজগতে আল্লাহ মানুষের আকৃতিকেই সবচেয়ে সুন্দর করেছেন। কোনো মানুষকে তার নিজের সমাজে যত কুশ্রীই মনে হোক, অন্য সব অমানব প্রাণীর আকৃতির পাশে রাখলে সে নিজ গুণেই সুন্দর। মাআরিফ, কুরতুবী ও সা'দী তিনজনই যে তুলনা টানেন, তা মানুষ আর অন্য প্রাণীর মধ্যে। এক মানুষের সঙ্গে আরেক মানুষের তুলনা সেটা নয়।"
          },
          {
            "en": "That needs saying plainly, because a phrase like made your forms good is easy to bend. The verse makes no claim about any one person's looks, ranks no face above another, and gives no one a reason to think less of a face that differs from the taste of a place or an age. It speaks to its listeners together: He formed you, in the plural, and made your forms good. Whoever uses it to praise his own face or to belittle someone else's has read into it a contest the commentators never found there.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, কারণ 'তোমাদের আকৃতি সুন্দর করেছেন' কথাটাকে বাঁকিয়ে ফেলা সহজ। আয়াতটি কোনো একজন মানুষের চেহারা নিয়ে কিছু দাবি করে না। এক মুখকে আরেক মুখের ওপরে স্থান দেয় না। কোনো এলাকা বা যুগের রুচির সঙ্গে না মেলা চেহারাকে ছোট করে দেখার কোনো কারণও কাউকে দেয় না। আয়াত সব শ্রোতার সঙ্গে একসঙ্গে কথা বলে: তিনি তোমাদের আকৃতি দিয়েছেন, বহুবচনে, আর তোমাদের আকৃতি সুন্দর করেছেন। কেউ যদি একে নিজের চেহারার বড়াই বা অন্যের চেহারার তাচ্ছিল্যে কাজে লাগায়, তবে সে আয়াতে এমন এক প্রতিযোগিতা ঢুকিয়েছে যা তাফসীরকারেরা সেখানে খুঁজে পাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Returning to the Shaper",
          "bn": "যিনি গড়েছেন, তাঁরই কাছে ফেরা"
        },
        "p": [
          {
            "en": "Wa ilayhi al-masir: and to Him is the return. Ibn Kathir glosses it as al-marji' wa-l-ma'ab, the place of going back and of coming home. At-Tabari says who returns: to Allah is the return of all of you, O people. The Muyassar and as-Sa'di place the return on the Day of Resurrection, and the Muyassar, together with al-Qurtubi, names what follows it: He will repay each person according to his deeds.",
            "bn": "ওয়া ইলাইহিল মাসীর: আর ফিরে যাওয়া তাঁরই কাছে। ইবন কাসীর এর ব্যাখ্যা করেন আল-মারজি' ওয়াল-মাআব দিয়ে, অর্থাৎ যেখানে ফিরে যেতে হয়, যেখানে শেষে পৌঁছাতে হয়। কারা ফিরবে, তাবারী তা বলে দেন: হে মানুষ, তোমাদের সবার ফেরা আল্লাহরই কাছে। মুয়াসসার ও সা'দী এই ফেরাকে কিয়ামতের দিনের সঙ্গে যুক্ত করেন। মুয়াসসার আর কুরতুবী এর পরে কী ঘটবে তাও বলেন: তিনি প্রত্যেককে তার আমল অনুযায়ী প্রতিদান দেবেন।"
          },
          {
            "en": "As-Sa'di widens the reckoning. On that Day, he writes, Allah will repay you for your faith and your disbelief, and He will ask you about the blessings and the favours He granted you: did you fulfil the thanks owed for them, or did you not? As-Sa'di does not name the form at this point. Yet a reader who has just heard that his form was made good can hardly leave it off that list, and so the clause about the return turns back on the clause before it.",
            "bn": "সা'দী হিসাবের পরিধি আরও বড় করে দেখান। সেদিন, তিনি লেখেন, আল্লাহ তোমাদের ঈমান ও কুফরের প্রতিদান দেবেন। আর তিনি জিজ্ঞেস করবেন সেই সব নিয়ামত আর অনুগ্রহের কথা যা তিনি তোমাদের দিয়েছিলেন: তোমরা কি এগুলোর শোকর আদায় করেছিলে, নাকি করোনি? সা'দী এখানে আকৃতির কথা আলাদা করে বলেননি। কিন্তু যে পাঠক এইমাত্র শুনল যে তার আকৃতি সুন্দর করে গড়া হয়েছে, সে এই তালিকা থেকে আকৃতিকে বাদ দিতে পারে না। এভাবে ফেরার কথাটা আগের বাক্যাংশের দিকেই ঘুরে আসে।"
          },
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, and none gives an occasion of revelation, so the article offers neither. Nor does any of them, in the text read here, tie al-masir by number to the verses later in the surah, so no such link is drawn here. What the verses that follow say about knowledge and about earlier peoples belongs to those verses, and is left for them.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি, কোনো শানে নুযূলও দেয়নি। তাই এ প্রবন্ধেও এর কোনোটি নেই। এখানে পড়া লেখাগুলোর কোনোটি আল-মাসীরকে সূরার পরের কোনো আয়াতের সঙ্গে নম্বর ধরে যুক্তও করেনি, তাই এখানেও সে যোগসূত্র টানা হচ্ছে না। পরের আয়াতগুলো জ্ঞান আর আগের জাতিদের সম্পর্কে যা বলে, তা সেই আয়াতগুলোরই বিষয়, তাদের জন্যই রেখে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Living in a Given Form",
          "bn": "দেওয়া আকৃতি নিয়ে বাঁচা"
        },
        "p": [
          {
            "en": "Three practical lines run out of the verse. The first comes from bi-l-haqq. If the heavens and the earth were made with justice, wisdom and an intended end, as the commentators gloss it, then a human life lived inside them is not meant to be aimless either, and the question worth asking each day is what it is being spent towards. The second comes from the forming. The body a person wakes in was received, not earned, and the fitting first response to it is thanks rather than complaint.",
            "bn": "আয়াত থেকে তিনটি বাস্তব শিক্ষা বেরিয়ে আসে। প্রথমটি বিল-হাক্ক থেকে। তাফসীরকারদের ব্যাখ্যামতো আসমান ও যমীন যদি ইনসাফ, হিকমত আর উদ্দিষ্ট লক্ষ্য নিয়ে সৃষ্টি হয়ে থাকে, তবে এর ভেতরে কাটানো মানুষের জীবনও লক্ষ্যহীন হওয়ার কথা নয়। তাই প্রতিদিন নিজেকে জিজ্ঞেস করা দরকার, জীবনটা কোন দিকে খরচ হচ্ছে। দ্বিতীয়টি আকৃতি দেওয়ার কথা থেকে। যে শরীরে আমরা প্রতিদিন জেগে উঠি, তা আমাদের অর্জন নয়, আমাদের পাওয়া। তাই এর প্রতি প্রথম সাড়া হওয়া উচিত শোকর, অভিযোগ নয়।"
          },
          {
            "en": "The third comes from the return. The One who formed you is the One you are going back to, and as-Sa'di's question about thanks is the question waiting there. That shapes how a person treats his own form, in what he does with his eyes, his hands and his tongue, and how he treats everyone else's. A face you are tempted to mock was formed by the same Lord who formed yours, and its owner is travelling to the same return. Read this way, the nine words ask for gratitude, humility and readiness.",
            "bn": "তৃতীয়টি ফেরার কথা থেকে। যিনি আপনাকে গড়েছেন, আপনি ফিরে যাচ্ছেন তাঁরই কাছে। সা'দী শোকরের যে প্রশ্নের কথা বলেছেন, সেখানে সেই প্রশ্নই অপেক্ষা করছে। এ কথা ঠিক করে দেয় মানুষ নিজের আকৃতির সঙ্গে কেমন আচরণ করবে: চোখ, হাত আর জিহ্বা দিয়ে সে কী করবে। আর অন্যের আকৃতির সঙ্গেই বা কেমন আচরণ করবে। যে চেহারা নিয়ে উপহাস করতে মন চায়, সেটিও গড়েছেন সেই একই রব, যিনি আপনার চেহারা গড়েছেন। আর সেই মানুষটিও চলেছে একই ফেরার পথে। এভাবে পড়লে নয়টি শব্দ চায় শোকর, বিনয় আর প্রস্তুতি।"
          }
        ]
      }
    ]
  },
  "64:11": {
    "sections": [
      {
        "h": {
          "en": "Where the Verse Stands",
          "bn": "আয়াতটি কোথায় দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "Surah at-Taghabun has just finished describing the Day of Assembly. 64:9 names it the Day of Taghabun, the day of mutual gain and loss, and promises the believer who works righteousness that his misdeeds will be removed and gardens opened; 64:10 states the opposite outcome for those who denied the signs. Only after both destinations are fixed does the surah turn to the reader's present, and the first thing it says about the present is that nothing in it arrives by accident.",
            "bn": "সূরা আত-তাগাবুন এইমাত্র সমাবেশের দিনের বর্ণনা শেষ করেছে। 64:9 আয়াতে সেই দিনকে বলা হয়েছে তাগাবুনের দিন, অর্থাৎ পারস্পরিক লাভ-ক্ষতির দিন, আর যে মুমিন সৎকাজ করে তার জন্য প্রতিশ্রুতি দেওয়া হয়েছে যে তার মন্দ কাজগুলো মুছে দেওয়া হবে ও জান্নাত খুলে দেওয়া হবে; 64:10 আয়াতে যারা নিদর্শন অস্বীকার করেছে তাদের বিপরীত পরিণতির কথা বলা হয়েছে। দুই গন্তব্য নির্ধারিত হওয়ার পরেই সূরাটি পাঠকের বর্তমানে ফেরে, আর বর্তমান সম্পর্কে প্রথম কথাটিই হলো: এখানে কিছুই দুর্ঘটনাক্রমে আসে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Musibah and Idhn",
          "bn": "মুসীবাহ ও ইযন"
        },
        "p": [
          {
            "en": "Ma asaba min musibatin illa bi idhnillah. The Arabic word for calamity is itself instructive. Musibah comes from asaba, to hit what was aimed at; the same root gives sawab, the correct answer, the thing that strikes the mark. Built into the noun is the idea that the blow arrived where it was directed. The verse then adds the source of the aim: illa bi idhnillah, except by the leave of Allah — permission in the sense of enabling and allowing, not in the sense of approving of every act that people commit.",
            "bn": "'মা আসাবা মিন মুসীবাতিন ইল্লা বিইযনিল্লাহ।' বিপদ বোঝাতে আরবি যে শব্দটি ব্যবহৃত হয়েছে, তা নিজেই শিক্ষণীয়। 'মুসীবাহ' এসেছে 'আসাবা' থেকে, যার অর্থ লক্ষ্যবস্তুতে আঘাত করা; একই ধাতু থেকে আসে 'সাওয়াব', অর্থাৎ সঠিক উত্তর, যা লক্ষ্যে লাগে। শব্দটির ভেতরেই গাঁথা আছে এই ধারণা যে আঘাতটি সেখানেই পৌঁছেছে যেখানে তাকে পাঠানো হয়েছিল। এরপর আয়াতটি সেই লক্ষ্যস্থিরকারীর কথা যোগ করে: 'ইল্লা বিইযনিল্লাহ' — আল্লাহর অনুমতি ছাড়া নয়; এখানে অনুমতি মানে ঘটতে দেওয়া ও সক্ষম করা, মানুষ যা করে তার প্রতিটিকে অনুমোদন করা নয়।"
          },
          {
            "en": "57:22 supplies the fuller version of the same statement: no disaster strikes on the earth or among yourselves except that it is in a register before We bring it into being. And 57:23 states the purpose out loud, so that you do not despair over what has escaped you nor exult over what He has given you. 9:51 puts the same conviction in the mouth of the believer as a thing to say: never will we be struck except by what Allah has decreed for us.",
            "bn": "57:22 আয়াতে একই বক্তব্যের পূর্ণতর রূপ আছে: পৃথিবীতে বা তোমাদের নিজেদের ওপর এমন কোনো বিপদ আসে না, যা আমি তা সংঘটিত করার আগেই কিতাবে লিপিবদ্ধ রাখি না। আর 57:23 আয়াতে উদ্দেশ্যটি সরাসরি বলা হয়েছে — যাতে যা তোমাদের হাতছাড়া হয়েছে তার জন্য তোমরা হতাশ না হও, আর তিনি যা দিয়েছেন তা নিয়ে উৎফুল্ল না হও। 9:51 আয়াতে একই প্রত্যয় মুমিনের মুখে বলার মতো কথা হিসেবে বসানো হয়েছে: আল্লাহ আমাদের জন্য যা লিখে দিয়েছেন তা ছাড়া আমাদের কিছুই ঘটবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "He Will Guide His Heart",
          "bn": "তিনি তার অন্তরকে পথ দেখাবেন"
        },
        "p": [
          {
            "en": "The second clause is the one that makes the verse a comfort rather than a mere doctrine. Waman yu'min billahi yahdi qalbah — and whoever believes in Allah, He guides his heart. Read the exchange carefully. Belief is the condition; the response promised is not that the calamity will be lifted, nor that an explanation will be supplied. The response is guidance inside the heart while the calamity still stands. The circumstances are left exactly as they are and the person inside them is changed.",
            "bn": "দ্বিতীয় বাক্যাংশটিই আয়াতটিকে নিছক আকীদা নয়, সান্ত্বনা করে তোলে। 'ওয়া মাইঁ ইউমিম বিল্লাহি ইয়াহদি ক্বালবাহ' — আর যে আল্লাহর প্রতি ঈমান আনে, তিনি তার অন্তরকে পথ দেখান। বিনিময়টি মন দিয়ে পড়ুন। ঈমান হলো শর্ত; আর প্রতিশ্রুত সাড়া এই নয় যে বিপদ উঠিয়ে নেওয়া হবে, কিংবা কোনো ব্যাখ্যা দেওয়া হবে। সাড়াটি হলো অন্তরের ভেতরে হিদায়াত — বিপদ যখন এখনো দাঁড়িয়ে আছে তখনই। পরিস্থিতি ঠিক যেমন আছে তেমনই রাখা হয়, আর তার ভেতরে থাকা মানুষটিকে বদলে দেওয়া হয়।"
          },
          {
            "en": "Ibn Kathir relates the classical gloss on this clause from Alqamah, who explained it as the man struck by a calamity who knows that it is from Allah, so he is content and submits. The attribution matters. This is the reading of a Successor, one of the students of Ibn Mas'ud (RA), passed on in the works of tafsir — not a statement of the Prophet ﷺ, and it should not be quoted as one. Its authority is that of a careful early reader of the verse.",
            "bn": "ইবনে কাসীর এই বাক্যাংশের ধ্রুপদী ব্যাখ্যাটি বর্ণনা করেন আলক্বামাহ থেকে, যিনি বলেছেন: এ হলো সেই ব্যক্তি, যার ওপর বিপদ আসে আর সে জানে যে তা আল্লাহর পক্ষ থেকে, ফলে সে সন্তুষ্ট হয় ও আত্মসমর্পণ করে। সূত্রের বিষয়টি গুরুত্বপূর্ণ। এটি একজন তাবিয়ীর ব্যাখ্যা, যিনি ইবনে মাসঊদ (রাঃ)-এর ছাত্রদের একজন, আর তা তাফসীরের গ্রন্থে সংরক্ষিত — এটি নবী ﷺ-এর বাণী নয়, এবং একে সেভাবে উদ্ধৃত করা উচিত নয়। এর মর্যাদা হলো আয়াতটির একজন সতর্ক প্রাচীন পাঠকের মর্যাদা।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowing of All Things",
          "bn": "সকল বিষয়ে জ্ঞানী"
        },
        "p": [
          {
            "en": "The verse closes on a name: and Allah is Knowing of all things. The choice is exact. A decree issued by power alone would be something to submit to and no more; a decree issued by complete knowledge is something that can be trusted while it is still unexplained. The name answers the question the sufferer actually asks, which is rarely whether Allah could have prevented this, and almost always whether anyone understands what it is doing to him.",
            "bn": "আয়াতটি শেষ হয় একটি নাম দিয়ে: আর আল্লাহ সকল বিষয়ে জ্ঞানী। নির্বাচনটি নিখুঁত। কেবল ক্ষমতা থেকে জারি হওয়া ফয়সালা হতো এমন কিছু, যার কাছে আত্মসমর্পণ ছাড়া উপায় নেই; কিন্তু পূর্ণ জ্ঞান থেকে জারি হওয়া ফয়সালা এমন কিছু, যা ব্যাখ্যাহীন অবস্থাতেও ভরসা করা যায়। নামটি সেই প্রশ্নেরই জবাব দেয় যা দুঃখভোগকারী আসলে করে — প্রশ্নটি খুব কমই এই যে আল্লাহ কি এটি ঠেকাতে পারতেন, আর প্রায় সবসময়ই এই যে এটি তার সঙ্গে কী করছে তা কেউ বোঝে কি না।"
          },
          {
            "en": "Two verses later, 64:13 draws the conclusion the surah has been building toward: Allah, there is no deity except Him, and upon Allah let the believers rely. The sequence is worth following in order. First the decree is placed beyond accident, then the heart is offered guidance, then the name of knowledge is given as the reason to trust, and only then is reliance commanded. Tawakkul is presented as the last step of an argument, not as an instruction to feel calm.",
            "bn": "দুই আয়াত পরে 64:13 আয়াতে সেই সিদ্ধান্তটি টানা হয়, যেদিকে সূরাটি এগোচ্ছিল: আল্লাহ, তিনি ছাড়া কোনো ইলাহ নেই, আর মুমিনরা যেন আল্লাহর ওপরই ভরসা করে। ক্রমটি ধারাবাহিকভাবে অনুসরণ করার মতো। প্রথমে ফয়সালাকে দুর্ঘটনার বাইরে রাখা হয়, তারপর অন্তরকে হিদায়াতের প্রতিশ্রুতি দেওয়া হয়, তারপর ভরসার কারণ হিসেবে জ্ঞানের নামটি দেওয়া হয়, আর তারপরই কেবল তাওয়াক্কুলের নির্দেশ আসে। তাওয়াক্কুলকে এখানে একটি যুক্তির শেষ ধাপ হিসেবে উপস্থাপন করা হয়েছে, শান্ত বোধ করার নির্দেশ হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Using It When It Lands",
          "bn": "বিপদ এলে এর ব্যবহার"
        },
        "p": [
          {
            "en": "In practice the verse gives an order of operations for the hour after bad news. First establish the fact: this did not slip past Him. Second, drop the search for someone to blame, since the register was written before the event. Third, ask for the thing actually promised here, which is a guided heart, and ask for it in those words. What the verse never asks for is the pretence that the loss is not a loss.",
            "bn": "বাস্তবে আয়াতটি দুঃসংবাদের পরের ঘণ্টাটির জন্য একটি কাজের ক্রম দেয়। প্রথমে সত্যটি স্থির করুন: এটি তাঁর অগোচরে ঘটে যায়নি। দ্বিতীয়ত, দোষ চাপানোর মতো কাউকে খোঁজা বন্ধ করুন, কারণ ঘটনার আগেই তা লিপিবদ্ধ ছিল। তৃতীয়ত, এখানে যা আসলে প্রতিশ্রুত তা-ই চান, অর্থাৎ একটি পথপ্রাপ্ত অন্তর — আর ঠিক এই ভাষাতেই চান। আয়াতটি কখনোই যা চায় না তা হলো এই ভান করা যে ক্ষতিটি ক্ষতি নয়।"
          }
        ]
      }
    ]
  },
  "64:15": {
    "sections": [
      {
        "h": {
          "en": "Nothing But a Trial",
          "bn": "পরীক্ষা ছাড়া আর কিছু নয়"
        },
        "p": [
          {
            "en": "The verse is short and its first word is restrictive: innama amwalukum wa awladukum fitnah. Innama narrows a statement to one thing and excludes the rest, so the sense is that your wealth and your children are nothing but a fitnah. Then the counterweight: wa Allahu indahu ajrun azim, and Allah — with Him is a great reward. Two clauses, one naming what you hold and one naming what is held for you.",
            "bn": "আয়াতটি ছোট, আর এর প্রথম শব্দটিই সীমাবদ্ধকারী: ইন্নামা আমওয়ালুকুম ওয়া আওলাদুকুম ফিতনাহ। ইন্নামা কোনো বক্তব্যকে একটি বিষয়ে সীমিত করে আর বাকি সব বাদ দেয়; তাই অর্থ দাঁড়ায়, তোমাদের সম্পদ ও তোমাদের সন্তান একটি ফিতনা ছাড়া আর কিছুই নয়। এরপর ভারসাম্য রক্ষাকারী অংশ: ওয়াল্লাহু ইনদাহু আজরুন আযীম, আর আল্লাহ — তাঁরই কাছে আছে মহাপুরস্কার। দুটি বাক্যাংশ: একটি বলে তুমি কী ধরে আছ, অন্যটি বলে তোমার জন্য কী ধরে রাখা হয়েছে।"
          },
          {
            "en": "Fitnah is the word to slow down on. Its root sense is the assaying of gold — putting metal into fire to separate what is precious from what is mixed in with it. From there it comes to mean a test, and in some contexts a temptation or a civil strife. The fire in that image is not there to destroy the gold. It is there to find out what is gold.",
            "bn": "ফিতনা শব্দটির ওপরই ধীরে যেতে হয়। এর মূল অর্থ সোনা যাচাই — ধাতুকে আগুনে দিয়ে মূল্যবান অংশ আর মেশানো অংশ আলাদা করা। সেখান থেকেই এর অর্থ দাঁড়ায় পরীক্ষা, আর কোনো কোনো প্রসঙ্গে প্রলোভন বা বিপর্যয়। সেই ছবিতে আগুন সোনাকে ধ্বংস করতে আসেনি। এসেছে বের করতে, কোনটি আসলে সোনা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Immediately Before",
          "bn": "ঠিক আগের আয়াতটি"
        },
        "p": [
          {
            "en": "This verse cannot be read apart from 64:14, which precedes it: O you who believe, among your spouses and your children there are enemies to you, so beware of them. And then, in the same verse, the release — but if you pardon and overlook and forgive, then indeed Allah is Forgiving, Merciful. A hard sentence and a merciful one, side by side, before ours arrives to explain both.",
            "bn": "এই আয়াতটিকে 64:14 থেকে আলাদা করে পড়া যায় না, যা এর ঠিক আগে: হে ঈমানদারগণ, তোমাদের স্ত্রী ও সন্তানদের মধ্যে কেউ কেউ তোমাদের শত্রু, অতএব তাদের ব্যাপারে সতর্ক থেকো। আর এরপর একই আয়াতে মুক্তি — তবে যদি তোমরা মার্জনা করো, উপেক্ষা করো ও ক্ষমা করো, তবে নিশ্চয়ই আল্লাহ ক্ষমাশীল, দয়ালু। একটি কঠিন বাক্য ও একটি দয়ার বাক্য পাশাপাশি, আর তারপর আমাদের আয়াতটি এসে দুটিকেই ব্যাখ্যা করে।"
          },
          {
            "en": "A report from Ibn Abbas (RA), preserved in the Sunan collections, connects these two verses to men in Mecca who wanted to migrate and were held back by wives and children; when they later reached Medina and saw how much others had learned of the religion, they were minded to punish their families, and the verses came down. The report explains the pairing exactly: beware, and then pardon.",
            "bn": "সুনান-গ্রন্থগুলোতে সংরক্ষিত ইবনে আব্বাস (রাঃ)-এর একটি বর্ণনা এই দুই আয়াতকে যুক্ত করে মক্কার সেই ব্যক্তিদের সাথে যারা হিজরত করতে চেয়েছিলেন কিন্তু স্ত্রী-সন্তানরা তাঁদের আটকে রেখেছিল; পরে মদিনায় পৌঁছে যখন তাঁরা দেখলেন অন্যরা দ্বীনের কত কিছু শিখে ফেলেছে, তখন তাঁরা পরিবারকে শাস্তি দিতে চাইলেন, আর তখনই আয়াতগুলো নাযিল হয়। বর্ণনাটি জোড়াটিকে নিখুঁতভাবে ব্যাখ্যা করে: সতর্ক থেকো, তারপর ক্ষমা করো।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Verdict on Family",
          "bn": "পরিবারের বিরুদ্ধে রায় নয়"
        },
        "p": [
          {
            "en": "It would be a serious misreading to take fitnah as a low view of family. The Quran itself sets the other terms. In 18:46 wealth and children are called zinat al-hayat ad-dunya, the adornment of worldly life, before adding that the enduring good deeds are better with your Lord. And in 25:74 the servants of the Most Merciful are taught to ask for spouses and offspring as a coolness of the eyes.",
            "bn": "ফিতনাকে পরিবারের প্রতি নিচু দৃষ্টিভঙ্গি হিসেবে নেওয়া হবে মারাত্মক ভুলপাঠ। কুরআন নিজেই অন্য পরিভাষাগুলো দেয়। 18:46 আয়াতে সম্পদ ও সন্তানকে বলা হয়েছে যীনাতুল-হায়াতিদ-দুনইয়া, পার্থিব জীবনের শোভা, আর তারপর যোগ করা হয়েছে যে স্থায়ী সৎকর্ম তোমার রবের কাছে উত্তম। আর 25:74 আয়াতে রহমানের বান্দাদের শেখানো হয়েছে স্ত্রী ও সন্তানদের চোখের শীতলতা হিসেবে প্রার্থনা করতে।"
          },
          {
            "en": "So the same things are asked for as a blessing, described as an ornament, and named as a test. All three are true at once, and the third is what keeps the first two safe. The identical sentence appears again at 8:28, there placed after a warning against betraying trusts — and 63:9 states the danger plainly: let not your wealth or your children divert you from the remembrance of Allah.",
            "bn": "অর্থাৎ একই জিনিস নিয়ামত হিসেবে চাওয়া হয়, শোভা হিসেবে বর্ণনা করা হয়, আর পরীক্ষা হিসেবে নাম দেওয়া হয়। তিনটিই একসাথে সত্য, আর তৃতীয়টিই প্রথম দুটিকে নিরাপদ রাখে। হুবহু একই বাক্য আবার আসে 8:28 আয়াতে, সেখানে আমানতের খিয়ানত নিয়ে সতর্কবাণীর পরে — আর 63:9 বিপদটি স্পষ্ট করে বলে: তোমাদের সম্পদ ও সন্তান যেন তোমাদের আল্লাহর স্মরণ থেকে উদাসীন না করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Kept With Him",
          "bn": "যা তাঁর কাছে রাখা"
        },
        "p": [
          {
            "en": "The second half is built on a preposition: indahu, with Him. Wealth and children are described with the pronoun of possession, yours; the reward is described as located with Allah. That is a difference in security, not only in size. What is with you can be lost, spent, outlived or taken; what is with Him cannot. Ajr azim, a great reward, is left undescribed, which the commentators read as a sign of its scale.",
            "bn": "দ্বিতীয়ার্ধটি একটি অব্যয়ের ওপর দাঁড়ানো: ইনদাহু, তাঁর কাছে। সম্পদ ও সন্তানকে বর্ণনা করা হয়েছে মালিকানার সর্বনাম দিয়ে — তোমাদের; আর পুরস্কারকে বর্ণনা করা হয়েছে আল্লাহর কাছে অবস্থিত হিসেবে। এটি কেবল আকারের নয়, নিরাপত্তারও পার্থক্য। তোমার কাছে যা আছে তা হারানো যায়, খরচ হয়ে যায়, তোমার আগেই ফুরিয়ে যায় বা কেড়ে নেওয়া হয়; তাঁর কাছে যা আছে তা নয়। আজরুন আযীম বা মহাপুরস্কারের কোনো বর্ণনা দেওয়া হয়নি, আর মুফাসসিরগণ একেই তার বিশালতার আলামত হিসেবে পড়েন।"
          },
          {
            "en": "What follows keeps the demand realistic. 64:16 says fear Allah as much as you are able, and listen and obey and spend — a rare and merciful qualification, since the burden of family is not the same for every person. It then names the real obstacle: whoever is protected from the miserliness of his own soul, those are the successful. The problem was never the wealth. It was shuhh, the grasping inside the one who holds it.",
            "bn": "এরপর যা আসে তা দাবিটিকে বাস্তবসম্মত রাখে। 64:16 বলে, তোমরা সাধ্যমতো আল্লাহকে ভয় করো, আর শোনো, মানো ও খরচ করো — এক বিরল ও দয়ালু শর্তারোপ, কারণ পরিবারের ভার প্রত্যেকের জন্য এক নয়। এরপর প্রকৃত বাধাটির নাম বলা হয়: যাকে তার নিজের নফসের কার্পণ্য থেকে রক্ষা করা হয়েছে, তারাই সফল। সমস্যা কখনোই সম্পদ ছিল না। সমস্যা ছিল শুহ্‌হ, অর্থাৎ যে ধরে আছে তার ভেতরের আঁকড়ে থাকা।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Draw",
          "bn": "মুফাসসিরগণ যা বের করেন"
        },
        "p": [
          {
            "en": "The majority hold that the enmity of 64:14 is not a permanent description of spouses and children but a description of what they can become when they pull a person away from obedience. The word used is a warning about a direction of travel, not a judgement on persons. This is why the verse ends with pardon rather than with separation, and why the commentators consistently read it as counselling patience within the family rather than escape from it.",
            "bn": "অধিকাংশ মুফাসসির মনে করেন, 64:14 আয়াতের শত্রুতা স্ত্রী ও সন্তানদের স্থায়ী পরিচয় নয়, বরং তারা কী হয়ে উঠতে পারে তার বর্ণনা — যখন তারা কাউকে আনুগত্য থেকে টেনে সরায়। ব্যবহৃত শব্দটি ব্যক্তিদের সম্পর্কে রায় নয়, বরং যাত্রার দিক নিয়ে সতর্কবার্তা। এ কারণেই আয়াতটি বিচ্ছেদ দিয়ে নয়, ক্ষমা দিয়ে শেষ হয়, আর এ কারণেই মুফাসসিরগণ ধারাবাহিকভাবে একে পরিবার থেকে পালানোর নয়, পরিবারের ভেতরে ধৈর্য ধরার উপদেশ হিসেবেই পড়েন।"
          },
          {
            "en": "They also note the direction of the test. It runs both ways: a parent may be tested through a child, and a child through a parent; a person may be tested by having wealth and equally by lacking it. Nothing in the verse says the test is failed by loving them. It is failed by choosing them over what Allah has kept with Him, and the verse names both sides so that the choice is at least a conscious one.",
            "bn": "তাঁরা পরীক্ষার দিকটিও লক্ষ্য করেন। এটি দুদিকেই চলে: পিতামাতা সন্তানের মাধ্যমে পরীক্ষিত হতে পারেন, আবার সন্তানও পিতামাতার মাধ্যমে; কেউ সম্পদ থাকায় পরীক্ষিত হয়, কেউ আবার সমানভাবে সম্পদ না থাকায়। আয়াতের কোথাও বলা হয়নি যে তাদের ভালোবাসলেই পরীক্ষায় ব্যর্থ হওয়া যায়। ব্যর্থতা আসে আল্লাহ যা তাঁর কাছে রেখেছেন তার চেয়ে তাদের বেছে নিলে, আর আয়াত দুই দিকের নামই বলে দেয় যাতে বাছাইটি অন্তত সচেতন হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "আজ যেভাবে এটি জীবনে আসে"
        },
        "p": [
          {
            "en": "In practice the test rarely announces itself. It shows up as the job that pays more and takes the family's evenings, the school chosen for its name, the silence kept in front of a relative because an inheritance is pending. It shows up as a father who will argue about a school fee and not about a missed prayer. The verse asks only that these moments be recognised as the fire in which something is being assayed.",
            "bn": "বাস্তবে পরীক্ষা খুব কমই নিজের নাম ঘোষণা করে। এটি আসে সেই চাকরি হয়ে যা বেশি আয় দেয় আর পরিবারের সন্ধ্যাগুলো কেড়ে নেয়; সেই স্কুল হয়ে যা নামের জন্য বাছা হয়; সেই নীরবতা হয়ে যা কোনো আত্মীয়ের সামনে রাখা হয় কারণ উত্তরাধিকার ঝুলে আছে। এটি আসে এমন বাবা হয়ে যিনি স্কুলের বেতন নিয়ে তর্ক করেন কিন্তু ছুটে যাওয়া নামাজ নিয়ে করেন না। আয়াত কেবল এটুকুই চায় যে এসব মুহূর্তকে সেই আগুন হিসেবে চেনা হোক, যেখানে কিছু একটা যাচাই হচ্ছে।"
          },
          {
            "en": "The counterweight is deliberate use. Family becomes an investment rather than a distraction when it is turned towards what is with Allah: teaching a child to pray rather than only to succeed, keeping a household's income clean even when it costs, giving from what you would rather keep. And where 64:14 applies, where a family genuinely obstructs, the instruction is unusual and worth taking literally — pardon, overlook, forgive.",
            "bn": "ভারসাম্যটি আসে সচেতন ব্যবহারের মধ্য দিয়ে। পরিবার তখনই বিক্ষেপ না হয়ে বিনিয়োগ হয়ে ওঠে যখন তাকে আল্লাহর কাছে যা আছে তার দিকে ঘোরানো হয়: সন্তানকে কেবল সফল হতে নয়, নামাজ পড়তে শেখানো; খরচ হলেও ঘরের আয় হালাল রাখা; যা রেখে দিতে ইচ্ছে করে তা থেকেই দেওয়া। আর যেখানে 64:14 সত্যিই প্রযোজ্য, যেখানে পরিবার সত্যিকারভাবে বাধা হয়ে দাঁড়ায়, সেখানে নির্দেশটি অস্বাভাবিক এবং আক্ষরিকভাবে নেওয়ার মতো — মার্জনা করো, উপেক্ষা করো, ক্ষমা করো।"
          }
        ]
      }
    ]
  }
});
