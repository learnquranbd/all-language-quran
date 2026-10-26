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
          "bn": "নয় শব্দে তিন ধাপ"
        },
        "p": [
          {
            "en": "Khalaqa as-samawati wa-l-arda bi-l-haqqi wa sawwarakum fa-ahsana suwarakum wa ilayhi al-masir: He created the heavens and the earth with the truth, and He formed you and made your forms good, and to Him is the return. Nine Arabic words in three clauses. The first takes in the whole cosmos, the second narrows to the listener's own body, and the third looks ahead to where every listener is going. Wide, then near, then forward: the eye is moved in that order before anything is asked of it.",
            "bn": "খালাকাস সামাওয়াতি ওয়াল আরদা বিল হাক্কি ওয়া সাওওয়ারাকুম ফাআহসানা সুওয়ারাকুম ওয়া ইলাইহিল মাসীর: তিনি আসমান ও যমীন সৃষ্টি করেছেন হক দিয়ে, তোমাদের আকৃতি দিয়েছেন আর সেই আকৃতি সুন্দর করেছেন, আর ফিরে যাওয়া তাঁরই কাছে। আরবিতে নয়টি শব্দ, তিনটি বাক্যাংশ। প্রথমটি গোটা সৃষ্টিজগৎকে ধরে। দ্বিতীয়টি নেমে আসে শ্রোতার নিজের শরীরে। তৃতীয়টি সামনে তাকায়, প্রত্যেক শ্রোতা কোথায় যাচ্ছে সেদিকে। আগে বিস্তার, তারপর নিকট, তারপর সামনের পথ। কিছু চাওয়ার আগে আয়াত চোখকে এই ক্রমে ঘুরিয়ে আনে।"
          },
          {
            "en": "The verse stands in a run that opens the surah. 64:1 says that all in the heavens and the earth glorify Allah, to whom belong the dominion and the praise. 64:2 says it is He who created you, and that among you are the one who disbelieves and the one who believes. As-Sa'di reads 64:3 as the next step: having mentioned the creation of the human being who is charged with commands and prohibitions, Allah now mentions the creation of everything else. He explains the heavens and the earth as their bodies and all that is in them, and says Allah made their creation good.",
            "bn": "সূরার শুরুর একটানা কয়েকটি আয়াতের মধ্যে এর জায়গা। ৬৪:১ বলে, আসমান ও যমীনে যা কিছু আছে সবই আল্লাহর তাসবীহ করে, রাজত্ব তাঁর, প্রশংসাও তাঁর। ৬৪:২ বলে, তিনিই তোমাদের সৃষ্টি করেছেন, আর তোমাদের মধ্যে কেউ কাফির, কেউ মু'মিন। সা'দী ৬৪:৩-কে দেখেন পরের ধাপ হিসেবে। আদেশ-নিষেধের দায় যার কাঁধে, সেই মানুষের সৃষ্টির কথা বলার পর আল্লাহ এবার বাকি সৃষ্টির কথা বলছেন। সা'দীর ব্যাখ্যায় আসমান ও যমীন মানে এদের দেহ আর এদের ভেতরের সবকিছু, আর আল্লাহ এদের সৃষ্টি সুন্দর করেছেন।"
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
            "en": "What does bi-l-haqq add? The commentators consulted for this verse answer in different words, and they are set side by side here without ranking. Ibn Kathir glosses it as bi-l-'adl wa-l-hikmah, with justice and wisdom; the abridged English Ibn Kathir renders the same pair as with equity and wisdom. At-Tabari has bi-l-'adl wa-l-insaf, with justice and fairness, and he names the heavens as the seven heavens. The Muyassar says Allah created them bi-l-hikmah al-balighah, with consummate wisdom.",
            "bn": "বিল-হাক্ক শব্দটি এখানে কী যোগ করে? এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলো ভিন্ন ভিন্ন শব্দে এর জবাব দেয়। এখানে সেগুলো পাশাপাশি রাখা হলো, কোনোটাকে ওপরে না তুলে। ইবন কাসীর এর ব্যাখ্যা করেন বিল-আদলি ওয়াল-হিকমাহ, অর্থাৎ ইনসাফ ও হিকমত দিয়ে। সংক্ষিপ্ত ইংরেজি ইবন কাসীরেও একই জোড়া, ন্যায্যতা ও হিকমত। তাবারী বলেন বিল-আদলি ওয়াল-ইনসাফ, ইনসাফ ও ন্যায়বিচার দিয়ে, আর আসমান বলতে তিনি যে সাতটি আসমান বোঝান, তা স্পষ্ট করে দেন। মুয়াসসার বলে, আল্লাহ এগুলো সৃষ্টি করেছেন বিল-হিকমাতিল বালিগাহ, পরিপূর্ণ হিকমত দিয়ে।"
          },
          {
            "en": "As-Sa'di gives bi-l-hikmah wa-l-ghayah al-maqsudah lahu: with wisdom, and with the end He intended for it. The stress there falls on purpose, the heavens and the earth made towards an aim. Al-Qurtubi offers two readings. In the first, He created them truly, a certainty in which there is no doubt. The second he introduces with qila, it is said: the preposition bi here carries the sense of li, so the phrase means for the truth. He then names that truth: that those who did evil be repaid for what they did, and those who did good be rewarded with the best.",
            "bn": "সা'দী বলেন বিল-হিকমাতি ওয়াল-গায়াতিল মাকসূদাতি লাহু: হিকমত দিয়ে, আর সেই লক্ষ্য নিয়ে যা আল্লাহ উদ্দেশ্য করেছেন। তাঁর কথায় জোর পড়ে উদ্দেশ্যের ওপর। আসমান ও যমীন বানানো হয়েছে একটা লক্ষ্যের দিকে। কুরতুবী দুটি ব্যাখ্যা দেন। প্রথমটিতে, আল্লাহ এগুলো সৃষ্টি করেছেন সত্যিই, এমন নিশ্চিতভাবে যাতে কোনো সন্দেহ নেই। দ্বিতীয়টি তিনি আনেন 'বলা হয়' দিয়ে। এ মতে 'বি' অব্যয়টি এখানে 'লি'-এর অর্থে, তাই বাক্যের মানে দাঁড়ায় হকের জন্য। সেই হক কী, তাও তিনি বলে দেন: যারা মন্দ করেছে তাদের কাজের প্রতিফল দেওয়া, আর যারা ভালো করেছে তাদের উত্তম পুরস্কার দেওয়া।"
          },
          {
            "en": "So the one phrase is read as justice, as wisdom, as an intended end, as certainty, and as a reason that points towards recompense. In the texts read here no commentator argues against another; each places the weight on a different side of the same two words. Al-Baghawi, in the text consulted for this verse, reproduces the verse and adds no comment of his own, and Ma'arif al-Qur'an moves straight to the forming clause. The verse itself says only bi-l-haqq; the rest is the reading of those who weighed it.",
            "bn": "তাহলে একই শব্দবন্ধের পাঠ দাঁড়াল ইনসাফ, হিকমত, উদ্দিষ্ট লক্ষ্য, নিশ্চয়তা, আর প্রতিফলের দিকে ইঙ্গিত করা এক কারণ। এখানে যে লেখাগুলো পড়া হয়েছে, তাতে কোনো তাফসীরকার অন্যজনের বিরোধিতা করেননি। প্রত্যেকে একই দুটি শব্দের ভিন্ন এক দিকে ভার রেখেছেন। এ আয়াতের জন্য বাগাভীর যে লেখা পাওয়া গেছে, তাতে তিনি শুধু আয়াতটি উদ্ধৃত করেছেন, নিজের কোনো মন্তব্য যোগ করেননি। মাআরিফুল কুরআন সরাসরি আকৃতি দেওয়ার অংশে চলে যায়। আয়াত নিজে শুধু বলে বিল-হাক্ক। বাকিটা তাঁদের পাঠ, যাঁরা কথাটা ওজন করে দেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shaper and the Shaping",
          "bn": "আকৃতিদাতা ও তাঁর গড়া"
        },
        "p": [
          {
            "en": "Wa sawwarakum: and He formed you. Al-Qurtubi defines taswir as takhtit and tashkil, the drawing of outlines and the giving of shape. At-Tabari glosses it with another verb: maththalakum fa-ahsana mathalakum, He gave you your likeness and made your likeness good. Ibn Kathir's word is ashkal, shapes: He made your shapes good. The Muyassar folds the two verbs into one phrase: He created you in the best of forms.",
            "bn": "ওয়া সাওওয়ারাকুম: আর তিনি তোমাদের আকৃতি দিয়েছেন। কুরতুবী তাসবীরের সংজ্ঞা দেন তাখতীত ও তাশকীল দিয়ে, অর্থাৎ রেখা টানা আর গড়ন দেওয়া। তাবারী অন্য একটি ক্রিয়া দিয়ে ব্যাখ্যা করেন: মাছছালাকুম ফাআহসানা মাছালাকুম, তিনি তোমাদের অবয়ব দিয়েছেন, আর সেই অবয়ব সুন্দর করেছেন। ইবন কাসীরের শব্দ আশকাল, মানে গড়ন। তিনি বলেন, আল্লাহ তোমাদের গড়ন সুন্দর করেছেন। মুয়াসসার দুটি ক্রিয়াকে এক কথায় বেঁধে দেয়: তিনি তোমাদের সৃষ্টি করেছেন সবচেয়ে সুন্দর আকৃতিতে।"
          },
          {
            "en": "Ma'arif al-Qur'an begins from a name. Shaping the figures of creatures, it says, is one of the exclusive attributes of Allah, which is why al-Musawwir, the Shaper, is among His names. It then calls the giving of shape one of the Divine blessings the verse mentions, and notes that fa-ahsana suwarakum follows it at once. On that reading the clause names a favour twice: once for being formed at all, and once for being formed well. Neither part is something the one formed did for himself.",
            "bn": "মাআরিফুল কুরআন শুরু করে আল্লাহর একটি নাম থেকে। মাআরিফের ভাষায়, সৃষ্টির আকৃতি গড়া একান্তভাবে আল্লাহরই গুণ। এ কারণেই আল-মুসাওয়ির, আকৃতিদাতা, তাঁর নামগুলোর একটি। এরপর মাআরিফ বলে, আকৃতি দেওয়াকে আয়াতটি আল্লাহর নিয়ামতের মধ্যে গুনেছে, আর ঠিক তার পরেই এসেছে ফাআহসানা সুওয়ারাকুম। এ পাঠে বাক্যাংশটি অনুগ্রহের কথা বলে দুবার: একবার আকৃতি পাওয়ার জন্য, আরেকবার সুন্দর আকৃতি পাওয়ার জন্য। যাকে গড়া হলো, এর কোনোটাই সে নিজে নিজের জন্য করেনি।"
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
            "bn": "সাওওয়ারাকুম-এর 'তোমাদের' কারা? কুরতুবী দুটি জবাব লিখে রাখেন। প্রথমটি তিনি মুকাতিলের নামে বলেন: এখানে আদম (আঃ)-এর কথা বলা হয়েছে, যাঁকে আল্লাহ সম্মান দিয়ে নিজ হাতে সৃষ্টি করেছেন। দ্বিতীয় জবাব, এখানে উদ্দেশ্য সমস্ত সৃষ্টি। তাবারী নিজের ব্যাখ্যায় শ্রোতাদের সরাসরি সম্বোধন করেন। তবে প্রথম মতটিও তিনি উল্লেখ করেন: কেউ কেউ বলেছেন, এখানে উদ্দেশ্য আদমকে আকৃতি দেওয়া আর আল্লাহর নিজ হাতে তাঁকে সৃষ্টি করা। এ মত তিনি সনদসহ ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছে দেন। তাঁর কথা: এর মানে আদম, আল্লাহ তাঁকে নিজ হাতে সৃষ্টি করেছেন।"
          },
          {
            "en": "At-Tabari gives the chain in full, and this article reports it as he does, without grading it. The two views are kept as two. On the first, the verse reminds the children of Adam (AS) of the honour shown to their father. On the second, it speaks to every listener of his or her own forming. The article does not choose between them. Both readings agree on the direction of the clause: the form is received, and its Giver is named alongside the heavens and the earth.",
            "bn": "তাবারী পুরো সনদ উল্লেখ করেছেন। এ প্রবন্ধ সেটি তাঁর মতোই উদ্ধৃত করছে, সনদের মান যাচাই না করে। দুটি মত এখানে দুটি মত হিসেবেই থাকছে। প্রথম মতে আয়াতটি আদম সন্তানদের মনে করিয়ে দেয় তাদের পিতা আদম (আঃ)-কে দেওয়া সম্মানের কথা। দ্বিতীয় মতে আয়াত প্রত্যেক শ্রোতাকে তার নিজের গড়নের কথা বলে। এ প্রবন্ধ এর কোনোটিকে বেছে নিচ্ছে না। দুই পাঠেই বাক্যাংশটির দিক এক: আকৃতি মানুষের পাওয়া জিনিস, আর যিনি দিয়েছেন, আসমান ও যমীনের সঙ্গে একই বাক্যে তাঁর নাম এসেছে।"
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
            "bn": "বাক্যাংশটি যে প্রশ্ন জাগায়, কুরতুবী সেটাই তোলেন: আল্লাহ তাদের আকৃতি সুন্দর করলেন কীভাবে? তাঁর জবাব, আল্লাহ মানুষকে সব প্রাণীর মধ্যে শ্রেষ্ঠ আর আকৃতিতে সবচেয়ে মনোহর বানিয়েছেন। প্রমাণ হিসেবে তিনি একটা পর্যবেক্ষণ দেন। চারপাশের অন্য সব আকৃতি দেখেও মানুষ চায় না যে তার নিজের আকৃতি অন্যরকম হোক। তিনি আরও বলেন, আকৃতির সৌন্দর্যের একটা দিক হলো মানুষকে সোজা দাঁড় করিয়ে বানানো হয়েছে, মাটির দিকে ঝুঁকিয়ে নয়। এর পক্ষে তিনি ৯৫:৪ আয়াত আনেন: আমি মানুষকে সৃষ্টি করেছি সর্বোত্তম গঠনে।"
          },
          {
            "en": "As-Sa'di cites the same verse and says that the human being is the best of creatures in form and the most splendid to look upon. Ibn Kathir reaches for two other verses. One is 82:6, 82:7 and 82:8: O man, what has deceived you concerning your Lord, the Generous, who created you, proportioned you and balanced you, and assembled you in whatever form He willed. The other is 40:64, where the same three words, wa sawwarakum fa-ahsana suwarakum, stand between the earth made a resting place and the sky a canopy, and the good things given as provision.",
            "bn": "সা'দীও একই আয়াত উদ্ধৃত করে বলেন, আকৃতিতে মানুষ সব সৃষ্টির সেরা, দেখতেও সবচেয়ে মনোহর। ইবন কাসীর আরও দুটি আয়াত টেনে আনেন। একটি ৮২:৬, ৮২:৭ ও ৮২:৮: হে মানুষ, কিসে তোমাকে তোমার মহান রবের ব্যাপারে ধোঁকায় ফেলল, যিনি তোমাকে সৃষ্টি করেছেন, সুঠাম করেছেন, ভারসাম্যপূর্ণ করেছেন, আর যে আকৃতিতে চেয়েছেন তোমাকে গড়ে দিয়েছেন? অন্যটি ৪০:৬৪। সেখানে হুবহু এই তিনটি শব্দ, ওয়া সাওওয়ারাকুম ফাআহসানা সুওয়ারাকুম, এসেছে বসবাসের জন্য স্থির যমীন আর ছাদের মতো আসমানের কথার পরে, আর পবিত্র রিযিকের কথার আগে।"
          },
          {
            "en": "That repetition is worth a pause. In 40:64 the clause sits among the gifts of a dwelling, and the Tadabbur article on that verse follows the commentators into the limbs and the hands at length, so this one does not repeat it. Here the same words stand with something else: before them the truth on which creation rests, and after them the return.",
            "bn": "এই পুনরাবৃত্তি একটু থেমে দেখার মতো। ৪০:৬৪ আয়াতে বাক্যাংশটি এসেছে বসবাসের নানা দানের মাঝে। সেই আয়াতের তাদাব্বুর প্রবন্ধ তাফসীরকারদের অনুসরণ করে হাত-পা ও অঙ্গপ্রত্যঙ্গের আলোচনায় অনেক দূর গেছে, তাই এখানে তার পুনরাবৃত্তি করা হচ্ছে না। এখানে একই শব্দগুলোর পাশে অন্য জিনিস। আগে সেই হক, যার ওপর সৃষ্টি দাঁড়িয়ে আছে। পরে ফিরে যাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "No Two Faces Alike",
          "bn": "কোনো দুই চেহারা এক নয়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an dwells on something every reader can see. Creation falls into classes, the classes into species, and each species holds vast numbers of members, and yet, it says, no single shape ever exactly resembles another. Among human beings, differences of land, stock and nation show clearly in their faces, and the face of each individual is so unique that it baffles the imagination. Ma'arif remarks how small the human face is, and that among uncountable faces of the same kind, one does not look exactly like another.",
            "bn": "মাআরিফুল কুরআন এমন একটা জিনিসের কাছে থামে যা যে-কেউ নিজের চোখে দেখতে পারে। সৃষ্টি নানা শ্রেণিতে ভাগ, প্রতিটি শ্রেণি নানা প্রজাতিতে, আর প্রতিটি প্রজাতিতে অগণিত সদস্য। তবু মাআরিফের কথায়, একটি আকৃতি আরেকটির সঙ্গে হুবহু মেলে না। মানুষের মধ্যে দেশ, বংশ আর জাতির পার্থক্য চেহারায় স্পষ্ট ধরা পড়ে। প্রত্যেকের মুখ এমনই অনন্য যে কল্পনাও হার মানে। মাআরিফ লক্ষ করে, মানুষের মুখ আকারে কত ছোট, অথচ একই ধরনের অসংখ্য মুখের মধ্যে একটি আরেকটির মতো হুবহু দেখায় না।"
          },
          {
            "en": "Then Ma'arif adds a sentence that guards the clause from misuse. In the whole universe, it says, Allah made the human shape the most beautiful, and however ugly a man might seem in his own community, he is still beautiful in his own right when set beside the shapes of all non-human creatures. The comparison the commentators draw, in Ma'arif as in al-Qurtubi and as-Sa'di, is between human beings and other living things. It is not a comparison between one person and another.",
            "bn": "এরপর মাআরিফ একটি কথা যোগ করে, যাতে বাক্যাংশটির অপব্যবহার না হয়। গোটা সৃষ্টিজগতে আল্লাহ মানুষের আকৃতিকেই সবচেয়ে সুন্দর করেছেন। কোনো মানুষকে তার নিজের সমাজে যত কুশ্রীই মনে হোক, মানুষ ছাড়া অন্য সব প্রাণীর আকৃতির পাশে রাখলে সে-ও নিজ গুণে সুন্দর। মাআরিফ, কুরতুবী ও সা'দী তিনজনই যে তুলনা টানেন, তা মানুষ আর অন্য প্রাণীর মধ্যে। এক মানুষের সঙ্গে আরেক মানুষের তুলনা সেটা নয়।"
          },
          {
            "en": "That needs saying plainly, because a phrase like made your forms good is easy to bend. The verse makes no claim about any one person's looks, ranks no face above another, and gives no one a reason to think less of a face that differs from the taste of a place or an age. It speaks to its listeners together: He formed you, in the plural, and made your forms good. Whoever uses it to praise his own face or to belittle someone else's has read into it a contest the commentators never found there.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, কারণ 'তোমাদের আকৃতি সুন্দর করেছেন' কথাটাকে বাঁকিয়ে ফেলা সহজ। আয়াতটি কোনো একজন মানুষের চেহারা নিয়ে কিছু দাবি করে না। এক মুখকে আরেক মুখের ওপরে স্থান দেয় না। কোনো এলাকা বা যুগের রুচির সঙ্গে না মেলা চেহারাকে ছোট করে দেখার কোনো কারণও কাউকে দেয় না। আয়াত সব শ্রোতার সঙ্গে একসঙ্গে কথা বলে: তিনি তোমাদের আকৃতি দিয়েছেন, বহুবচনে, আর তোমাদের আকৃতি সুন্দর করেছেন। কেউ যদি একে নিজের চেহারার বড়াই বা অন্যের চেহারার তাচ্ছিল্যে কাজে লাগায়, তবে সে আয়াতে এমন এক প্রতিযোগিতা ঢুকিয়েছে যা তাফসীরকারেরা সেখানে খুঁজে পাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Returning to the Shaper",
          "bn": "যিনি গড়েছেন, তাঁরই কাছে ফেরা"
        },
        "p": [
          {
            "en": "Wa ilayhi al-masir: and to Him is the return. Ibn Kathir glosses it as al-marji' wa-l-ma'ab, the place of going back and of coming home. At-Tabari says who returns: to Allah is the return of all of you, O people. The Muyassar and as-Sa'di place the return on the Day of Resurrection, and the Muyassar, together with al-Qurtubi, names what follows it: He will repay each person according to his deeds.",
            "bn": "ওয়া ইলাইহিল মাসীর: আর ফিরে যাওয়া তাঁরই কাছে। ইবন কাসীর এর ব্যাখ্যা করেন আল-মারজি' ওয়াল-মাআব দিয়ে, অর্থাৎ যেখানে ফিরে যেতে হয়, যেখানে শেষে পৌঁছাতে হয়। কারা ফিরবে, তাবারী তা বলে দেন: হে মানুষ, তোমাদের সবার ফেরা আল্লাহরই কাছে। মুয়াসসার ও সা'দী এই ফেরাকে কিয়ামতের দিনের সঙ্গে যুক্ত করেন। মুয়াসসার আর কুরতুবী এর পরে কী ঘটবে তাও বলেন: তিনি প্রত্যেককে তার আমল অনুযায়ী প্রতিদান দেবেন।"
          },
          {
            "en": "As-Sa'di widens the reckoning. On that Day, he writes, Allah will repay you for your faith and your disbelief, and He will ask you about the blessings and the favours He granted you: did you fulfil the thanks owed for them, or did you not? As-Sa'di does not name the form at this point. Yet a reader who has just heard that his form was made good can hardly leave it off that list, and so the clause about the return turns back on the clause before it.",
            "bn": "সা'দী হিসাবের পরিধি আরও বড় করে দেখান। তিনি লেখেন, সেদিন আল্লাহ তোমাদের ঈমান ও কুফরের প্রতিদান দেবেন। আর তিনি তোমাদের জিজ্ঞেস করবেন, যত নিয়ামত আর অনুগ্রহ তোমাদের দিয়েছিলেন, তোমরা কি সেগুলোর শোকর আদায় করেছিলে, নাকি করোনি? সা'দী এখানে আকৃতির কথা আলাদা করে বলেননি। কিন্তু যে পাঠক এইমাত্র শুনল যে তার আকৃতি সুন্দর করে গড়া হয়েছে, সে এই তালিকা থেকে আকৃতিকে বাদ রাখবে কী করে? এভাবে ফেরার কথাটা আগের বাক্যাংশের দিকেই ঘুরে আসে।"
          },
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith to it, and none gives an occasion of revelation, so the article offers neither. Nor does any of them, in the text read here, tie al-masir by number to the verses later in the surah, so no such link is drawn here. What the verses that follow say about knowledge and about earlier peoples belongs to those verses, and is left for them.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদিস যুক্ত করেনি, কোনো শানে নুযূলও দেয়নি। তাই এ প্রবন্ধেও এর কোনোটি নেই। এখানে পড়া লেখাগুলোর কোনোটি আল-মাসীরকে সূরার পরের কোনো আয়াতের সঙ্গে নম্বর ধরে যুক্তও করেনি, তাই এখানেও সে যোগসূত্র টানা হচ্ছে না। পরের আয়াতগুলো জ্ঞান আর আগের জাতিদের সম্পর্কে যা বলে, তা সেই আয়াতগুলোরই বিষয়, তাদের জন্যই রেখে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Living in a Given Form",
          "bn": "দেওয়া আকৃতি নিয়ে বাঁচা"
        },
        "p": [
          {
            "en": "Three practical lines run out of the verse. The first comes from bi-l-haqq. If the heavens and the earth were made with justice, wisdom and an intended end, as the commentators gloss it, then a human life lived inside them is not meant to be aimless either, and the question worth asking each day is what it is being spent towards. The second comes from the forming. The body a person wakes in was received, not earned, and the fitting first response to it is thanks rather than complaint.",
            "bn": "আয়াত থেকে তিনটি বাস্তব শিক্ষা বেরিয়ে আসে। প্রথমটি বিল-হাক্ক থেকে। তাফসীরকারদের ব্যাখ্যামতো আসমান ও যমীন যদি ইনসাফ, হিকমত আর উদ্দিষ্ট লক্ষ্য নিয়ে সৃষ্টি হয়ে থাকে, তবে এর ভেতরে কাটানো মানুষের জীবনও লক্ষ্যহীন হওয়ার কথা নয়। তাই প্রতিদিন নিজেকে জিজ্ঞেস করা দরকার, জীবনটা কোন দিকে খরচ হচ্ছে। দ্বিতীয়টি আকৃতি দেওয়ার কথা থেকে। যে শরীরে আমরা প্রতিদিন জেগে উঠি, তা আমাদের অর্জন নয়, আমাদের পাওয়া। তাই এর প্রতি প্রথম সাড়া হওয়া উচিত শোকর, অভিযোগ নয়।"
          },
          {
            "en": "The third comes from the return. The One who formed you is the One you are going back to, and as-Sa'di's question about thanks is the question waiting there. That shapes how a person treats his own form, in what he does with his eyes, his hands and his tongue, and how he treats everyone else's. A face you are tempted to mock was formed by the same Lord who formed yours, and its owner is travelling to the same return. Read this way, the nine words ask for gratitude, humility and readiness.",
            "bn": "তৃতীয়টি ফেরার কথা থেকে। যিনি আপনাকে গড়েছেন, আপনি ফিরে যাচ্ছেন তাঁরই কাছে। সা'দী শোকরের যে প্রশ্নের কথা বলেছেন, সেখানে সেই প্রশ্নই অপেক্ষা করছে। এ কথা ঠিক করে দেয় মানুষ নিজের আকৃতির সঙ্গে কেমন আচরণ করবে: চোখ, হাত আর জিহ্বা দিয়ে সে কী করবে। আর অন্যের আকৃতির সঙ্গেই বা কেমন আচরণ করবে। যে চেহারা নিয়ে উপহাস করতে মন চায়, সেটিও গড়েছেন সেই একই রব, যিনি আপনার চেহারা গড়েছেন। আর সেই মানুষটিও চলেছে একই ফেরার পথে। এভাবে পড়লে নয়টি শব্দ চায় শোকর, বিনয় আর প্রস্তুতি।"
          }
        ]
      }
    ]
  },
  "64:11": {
    "sections": [
      {
        "h": {
          "en": "After the Two Destinations",
          "bn": "দুই পরিণতির পর"
        },
        "p": [
          {
            "en": "Surah at-Taghabun has just set the two ends side by side. 64:9 names the Day of Assembly the Day of Taghabun and promises whoever believes and does righteous deeds the removal of his misdeeds and gardens; 64:10 names the companions of the Fire. Then 64:11 turns from the end to the present, and to what a believer meets most often in it: the blow he did not choose. Ma asaba min musibatin illa bi-idhni-llah: no calamity strikes except by the leave of Allah.",
            "bn": "সূরা তাগাবুন এইমাত্র দুই শেষ পরিণতি পাশাপাশি রেখেছে। ৬৪:৯ আয়াত একত্র হওয়ার দিনকে বলেছে তাগাবুনের দিন, আর যে ঈমান আনে ও সৎকাজ করে, তাকে কথা দিয়েছে গুনাহ মোচনের আর জান্নাতের। ৬৪:১০ আয়াত বলেছে জাহান্নামবাসীদের কথা। এরপর ৬৪:১১ শেষ পরিণতি থেকে চোখ ফেরায় এই জীবনের দিকে, আর সেখানে মু'মিন যার মুখোমুখি হয় সবচেয়ে বেশি, সেই কথায়: যে আঘাত সে নিজে বেছে নেয়নি। মা আসাবা মিন মুসীবাতিন ইল্লা বিইযনিল্লাহ: আল্লাহর অনুমতি ছাড়া কোনো বিপদ আসে না।"
          },
          {
            "en": "Ibn Kathir opens his comment by pointing to Surat al-Hadid: Allah informs here as He informed there. He quotes 57:22, no calamity strikes on the earth or in yourselves but it is in a Book before We bring it into being. That pair has its own article; here it is enough that Ibn Kathir reads the two together. The verse itself has three clauses: a statement about every calamity, a promise about the heart of the one who believes, and a closing name, Knowing of all things.",
            "bn": "ইবন কাসীর তাঁর ব্যাখ্যা শুরু করেন সূরা হাদীদের দিকে ইঙ্গিত করে। তাঁর কথায়, আল্লাহ সেখানে যে খবর দিয়েছেন, এখানেও সেই খবরই দিচ্ছেন। তিনি উদ্ধৃত করেন ৫৭:২২: পৃথিবীতে বা তোমাদের নিজেদের ওপর যে বিপদই আসে, তা সৃষ্টির আগেই কিতাবে লেখা থাকে। ওই আয়াত-জোড়ার আলাদা প্রবন্ধ আছে। এখানে এটুকু জানাই যথেষ্ট যে ইবন কাসীর দুটিকে একসঙ্গে পড়েন। আমাদের আয়াতের তিনটি অংশ। প্রথমে প্রত্যেক বিপদ নিয়ে একটি ঘোষণা, তারপর ঈমানদারের অন্তর নিয়ে একটি প্রতিশ্রুতি, আর শেষে একটি নাম: তিনি সব কিছু জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Command, Decree and Knowledge",
          "bn": "আদেশ, ফয়সালা ও জ্ঞান"
        },
        "p": [
          {
            "en": "What does bi-idhni-llah, by the leave of Allah, mean here? Ibn Kathir reports Ibn 'Abbas (RA): by the command of Allah, and explains it, meaning from His decree and His will. At-Tabari paraphrases the whole clause: no one among the creation is struck by a calamity except by Allah's decree and His ordaining of it for him. Al-Baghawi and al-Qurtubi both gloss it as by His will and His decree, and the Muyassar gathers three words: by Allah's leave, His decree and His qadar.",
            "bn": "বিইযনিল্লাহ, আল্লাহর অনুমতিতে, কথাটির মানে এখানে কী? ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে আনেন: আল্লাহর আদেশে। তারপর নিজে খুলে বলেন, অর্থাৎ তাঁর তাকদীর ও ইচ্ছা থেকে। তাবারী পুরো অংশটা নিজের ভাষায় বলেন: সৃষ্টির কারও ওপর কোনো বিপদ আসে না, আল্লাহর ফয়সালা আর তার জন্য তা নির্ধারণ করে দেওয়া ছাড়া। বাগাভী ও কুরতুবী দুজনেই বলেন, তাঁর ইচ্ছা ও ফয়সালায়। মুয়াসসার তিনটি শব্দ একসঙ্গে রাখে: আল্লাহর অনুমতি, তাঁর ফয়সালা আর তাঁর তাকদীর।"
          },
          {
            "en": "Al-Qurtubi adds two more glosses. Al-Farra' said the meaning is except by the command of Allah, which matches what Ibn Kathir carries from Ibn 'Abbas. A further view, which he introduces only with it is said, takes it as except by the knowledge of Allah. The Muyassar also defines the noun broadly: a musibah is anything disliked that comes down on a person. Command, will, decree and knowledge each name a side of idhn, and none is set against the others.",
            "bn": "কুরতুবী আরও দুটি ব্যাখ্যা যোগ করেন। ফাররা বলেছেন, এর মানে আল্লাহর আদেশ ছাড়া। ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে যা আনেন, এটি তার সঙ্গেই মেলে। আরেকটি মত কুরতুবী আনেন শুধু 'বলা হয়' বলে: আল্লাহর জ্ঞান ছাড়া। মুয়াসসার বিশেষ্যটিকেও বড় পরিসরে ধরে। তার কথায়, মুসীবাহ হলো মানুষের ওপর নেমে আসা যেকোনো অপছন্দের জিনিস। আদেশ, ইচ্ছা, ফয়সালা, জ্ঞান: ইযন শব্দের এক এক দিক এগুলো, একটি অন্যটির বিপরীত নয়।"
          },
          {
            "en": "As-Sa'di spells out the scope. The statement, he says, is general for every calamity: in the self, in wealth, in children, in loved ones and the like. All that strikes the servants is by Allah's decree and qadar; His knowledge preceded it, His pen ran with it, His will was carried out in it and His wisdom required it. Then he turns at once to the servant. The whole matter, he says, is whether the servant carries out the duty that falls on him in this station or not. If he does, his reward is great in this world and the next.",
            "bn": "পরিসরটা সা'দী পরিষ্কার করে বলেন। তাঁর মতে কথাটি সব বিপদের জন্য সাধারণ: জানের বিপদ, মালের, সন্তানের, প্রিয়জনের, এ রকম আর যা আছে। বান্দাদের ওপর যা কিছু আসে, সবই আল্লাহর ফয়সালা ও তাকদীরে। তাঁর জ্ঞান আগেই তা জেনেছে, তাঁর কলম তা লিখে গেছে, তাঁর ইচ্ছা তা কার্যকর করেছে, তাঁর হিকমত তা দাবি করেছে। এরপর তিনি সঙ্গে সঙ্গে বান্দার দিকে ফেরেন। আসল প্রশ্ন, তিনি বলেন, এই অবস্থায় বান্দার ওপর যে দায়িত্ব, সে তা পালন করে কি না। করলে দুনিয়া ও আখিরাতে তার জন্য বিরাট প্রতিদান।"
          }
        ]
      },
      {
        "h": {
          "en": "An Objection It Answers",
          "bn": "এক আপত্তির জবাব"
        },
        "p": [
          {
            "en": "Al-Qurtubi reports a cause of revelation, introduced with it is said, so with no chain and no firm attribution. The unbelievers, on this report, said: if what the Muslims follow were true, Allah would have protected them from calamities in this world. The verse, on this account, answers that argument. Of the files fetched for this verse, only al-Qurtubi carries the report, and he gives it as one view among others, so it is best read as a possible setting rather than settled history.",
            "bn": "কুরতুবী আয়াত নাযিলের একটি কারণ উল্লেখ করেন, তবে 'বলা হয়' দিয়ে শুরু করে। তাই এর কোনো সনদ নেই, কারও নামে দৃঢ়ভাবে বলাও নেই। এই বর্ণনা অনুযায়ী অবিশ্বাসীরা বলেছিল: মুসলমানরা যে পথে আছে তা সত্য হলে আল্লাহ তাদের দুনিয়ার বিপদ থেকে রক্ষা করতেন। আয়াতটি তখন সেই যুক্তির জবাব। এই আয়াতের জন্য যত তাফসীর আনা হয়েছে, তার মধ্যে কেবল কুরতুবীই বর্ণনাটি এনেছেন, তাও কয়েকটি মতের একটি হিসেবে। তাই একে নিশ্চিত ইতিহাস না ধরে সম্ভাব্য প্রেক্ষাপট হিসেবে পড়াই ভালো।"
          },
          {
            "en": "The answer, as al-Qurtubi draws it, is broad. Allah made clear that whatever calamity strikes, in body or wealth, in word or deed, whether it brings grief or carries a punishment soon or late, comes by His knowledge and decree. The objection assumed that being in the right would mean being spared. The verse does not deny that believers are struck. It places the blow under Allah's leave, and moves straight on to what happens in the heart it strikes.",
            "bn": "কুরতুবীর বর্ণনায় জবাবটা ব্যাপক। আল্লাহ স্পষ্ট করে দিলেন, বিপদ যেখানেই আসুক, জানে বা মালে, কথায় বা কাজে, তা দুশ্চিন্তা আনুক বা আগে-পরে শাস্তি বয়ে আনুক, সবই আসে তাঁর জ্ঞান ও ফয়সালায়। আপত্তির পেছনে ধারণাটা ছিল এই: সঠিক পথে থাকলে বিপদ ছুঁতে পারবে না। আয়াতটি অস্বীকার করে না যে মু'মিনের ওপরও বিপদ আসে। আঘাতটাকে সে রাখে আল্লাহর অনুমতির অধীনে। তারপর সোজা চলে যায় সেই প্রশ্নে: আঘাত যার ওপর পড়ল, তার অন্তরে কী ঘটে।"
          }
        ]
      },
      {
        "h": {
          "en": "Belief About the Blow",
          "bn": "আঘাত নিয়ে ঈমান"
        },
        "p": [
          {
            "en": "Wa-man yu'min billahi yahdi qalbah: and whoever believes in Allah, He guides his heart. For several commentators the belief meant here is belief about the calamity in particular. At-Tabari: whoever affirms Allah and so knows that no one is struck by a calamity except by Allah's leave. Al-Baghawi: he affirms that no calamity strikes him except by Allah's leave. Al-Qurtubi: he affirms and knows the same. On this reading the second clause takes its content straight from the first.",
            "bn": "ওয়া মাই ইউ'মিন বিল্লাহি ইয়াহদি কালবাহ: আর যে আল্লাহর ওপর ঈমান আনে, তিনি তার অন্তরকে পথ দেখান। কয়েকজন তাফসীরকারের মতে এখানে ঈমান মানে বিশেষ করে বিপদ নিয়ে ঈমান। তাবারী বলেন, যে আল্লাহকে সত্য বলে মানে, আর তাই জানে যে আল্লাহর অনুমতি ছাড়া কারও ওপর বিপদ আসে না। বাগাভীর কথাও তাই: সে বিশ্বাস করে, আল্লাহর অনুমতি ছাড়া তার ওপর কোনো বিপদ আসবে না। কুরতুবীও একই কথা বলেন। এভাবে পড়লে দ্বিতীয় অংশের বিষয়বস্তু সরাসরি আসে প্রথম অংশ থেকে।"
          },
          {
            "en": "Ibn Kathir describes the person step by step. He is struck; he knows it came by Allah's judgement and decree; he is patient and seeks his reward with Allah; he surrenders to the decree. Then Allah guides his heart. Ibn Kathir also says what the guidance is worth: Allah compensates him for what he lost of this world with guidance in his heart and true certainty, and He may replace what was taken from him, or give something better. The exchange begins inside the heart, and anything returned outside comes on top of it.",
            "bn": "ইবন কাসীর মানুষটির ছবি আঁকেন ধাপে ধাপে। তার ওপর বিপদ এল। সে জানল, এটা এসেছে আল্লাহর ফয়সালা ও তাকদীরে। সে সবর করল, প্রতিদানের আশা রাখল আল্লাহর কাছে, আর ফয়সালার কাছে নিজেকে সঁপে দিল। তখন আল্লাহ তার অন্তরকে পথ দেখান। এই হিদায়াতের মূল্যও ইবন কাসীর বলে দেন। দুনিয়ার যা হারিয়েছে, তার বদলে আল্লাহ তার অন্তরে দেন হিদায়াত আর খাঁটি ইয়াকীন। কখনো যা নেওয়া হয়েছিল তা ফিরিয়েও দেন, বা তার চেয়ে ভালো কিছু দেন। বদলটা শুরু হয় অন্তরের ভেতরে। বাইরে যা ফেরত আসে, তা এর ওপর বাড়তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Guided to What, Exactly",
          "bn": "অন্তর পথ পায় কোন দিকে"
        },
        "p": [
          {
            "en": "On the words yahdi qalbah the early readers give several glosses. Ibn 'Abbas (RA), in the line through 'Ali ibn Abi Talhah that at-Tabari and Ibn Kathir both carry, said: He guides his heart to certainty, so that he knows that what struck him was never going to miss him, and what missed him was never going to strike him. Al-Baghawi gives the same words without a name, and al-Qurtubi gives them under Ibn 'Abbas's name, as Allah placing certainty in his heart.",
            "bn": "ইয়াহদি কালবাহ কথাটির কয়েকটি ব্যাখ্যা প্রথম যুগের আলেমদের কাছ থেকে এসেছে। আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ)-এর কথা তাবারী ও ইবন কাসীর দুজনেই এনেছেন: তিনি তার অন্তরকে ইয়াকীনের দিকে পথ দেখান। ফলে সে জানে, তার ওপর যা এসেছে তা তাকে এড়িয়ে যাওয়ার ছিল না, আর যা তাকে এড়িয়ে গেছে তা তার ওপর আসার ছিল না। বাগাভী একই কথা বলেন কারও নাম ছাড়া। কুরতুবী তা আনেন ইবন আব্বাস (রাঃ)-এর নামে, এভাবে: আল্লাহ তার অন্তরে ইয়াকীন রেখে দেন।"
          },
          {
            "en": "'Alqamah, asked about the verse when it was recited in his presence, said: it is the man struck by a calamity who knows it is from Allah, and he is content and submits. At-Tabari gives this through several chains from al-A'mash from Abu Zabyan, one of them saying from the decree of Allah. Sa'id ibn Jubayr took it as the words said at the moment of loss, inna lillahi wa inna ilayhi raji'un, from 2:156; Ibn Kathir names Muqatil ibn Hayyan with him. The passage from 2:155 to 2:157 has its own article.",
            "bn": "আলকামার সামনে আয়াতটি পড়া হলে তাঁকে এর মানে জিজ্ঞেস করা হয়েছিল। তিনি বলেছিলেন: এ সেই মানুষ, যার ওপর বিপদ আসে আর সে জানে এটা আল্লাহর কাছ থেকে, তাই সে সন্তুষ্ট থাকে ও মেনে নেয়। তাবারী কথাটি আনেন আ'মাশ থেকে আবু যাবইয়ানের মাধ্যমে কয়েকটি সনদে। তার একটিতে আছে, আল্লাহর ফয়সালা থেকে। সাঈদ ইবন জুবাইর এর মানে নিয়েছেন হারানোর মুহূর্তের সেই কথা: ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন, যা আছে ২:১৫৬ আয়াতে। ইবন কাসীর তাঁর সঙ্গে মুকাতিল ইবন হাইয়ানের নামও আনেন। ২:১৫৫ থেকে ২:১৫৭ আয়াত নিয়ে আলাদা প্রবন্ধ আছে।"
          },
          {
            "en": "Al-Qurtubi lists further views. His own gloss is to patience and contentment. It is said: He keeps him firm in faith. Abu 'Uthman al-Jizi: whoever's faith is sound, Allah guides his heart to follow the Sunnah. Al-Kalbi: when he is tested he is patient, when he is blessed he is grateful, when he is wronged he forgives. And it is said: He guides his heart to attaining the reward in Paradise. Al-Qurtubi sets these side by side without ranking them, and this article picks none of them.",
            "bn": "কুরতুবী আরও কয়েকটি মত তুলে ধরেন। তাঁর নিজের ব্যাখ্যা: সবর ও সন্তুষ্টির দিকে। বলা হয়, তিনি তাকে ঈমানের ওপর অটল রাখেন। আবু উসমান আল-জীযী বলেন, যার ঈমান খাঁটি, আল্লাহ তার অন্তরকে সুন্নাহ মেনে চলার পথ দেখান। কালবীর কথা: পরীক্ষায় পড়লে সে সবর করে, নিয়ামত পেলে শোকর করে, তার ওপর জুলুম হলে মাফ করে দেয়। আরও বলা হয়, তিনি তার অন্তরকে জান্নাতের প্রতিদান লাভের পথ দেখান। কুরতুবী মতগুলো পাশাপাশি রাখেন, কোনোটিকে আগে-পিছে করেন না। এই প্রবন্ধও কোনোটি বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verb, Several Readings",
          "bn": "এক ক্রিয়া, কয়েক কিরাআত"
        },
        "p": [
          {
            "en": "Al-Qurtubi also records how the verb was read. The reading of the generality is yahdi, with a on the ya and i on the dal: He guides, because Allah's name has just been mentioned. As-Sulami and Qatada read yuhda qalbuhu, in the passive: his heart is guided, with the heart now the subject of the sentence. Talhah ibn Musarrif and al-A'raj read nahdi qalbahu, We guide his heart, in the plural of majesty. Each keeps the same promise.",
            "bn": "ক্রিয়াটি কীভাবে পড়া হয়েছে, কুরতুবী তাও লিখে রাখেন। অধিকাংশের কিরাআত ইয়াহদি, ইয়া-তে যবর আর দাল-এ যের: তিনি পথ দেখান, কারণ ঠিক আগেই আল্লাহর নাম এসেছে। সুলামী ও কাতাদা পড়েছেন ইউহদা কালবুহু, কর্মবাচ্যে: তার অন্তরকে পথ দেখানো হয়। এখানে অন্তরই বাক্যের কর্তা। তালহা ইবন মুসাররিফ ও আ'রাজ পড়েছেন নাহদি কালবাহু: আমি তার অন্তরকে পথ দেখাই, মর্যাদা বোঝাতে বহুবচনে। প্রতিশ্রুতি সব কিরাআতে একই।"
          },
          {
            "en": "'Ikrimah read yahda' qalbuhu, with a hamza, meaning his heart becomes still and settles, and al-Qurtubi notes that Malik ibn Dinar read the same with the hamza softened. The text in the mushaf, and in this app, follows the first reading, yahdi. 'Ikrimah's reading sits close to as-Sa'di's gloss in the next section, that the guided heart is at rest when calamities come.",
            "bn": "ইকরিমা পড়েছেন ইয়াহদা' কালবুহু, হামযাসহ। এর মানে, তার অন্তর শান্ত হয়, স্থির হয়। কুরতুবী জানান, মালিক ইবন দীনারও এভাবে পড়েছেন, তবে হামযা নরম করে। মুসহাফের পাঠ, আর এই অ্যাপের পাঠও, প্রথম কিরাআত অনুযায়ী: ইয়াহদি। ইকরিমার কিরাআত পরের অংশে সা'দীর ব্যাখ্যার খুব কাছাকাছি। সা'দী বলেন, বিপদ এলে পথ পাওয়া অন্তর প্রশান্ত থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Stillness, or Left to Oneself",
          "bn": "প্রশান্তি, নয়তো একা ছেড়ে দেওয়া"
        },
        "p": [
          {
            "en": "As-Sa'di describes the guided heart as one that is at rest and is not thrown into panic when calamities come, as happens to the one whose heart Allah has not guided. Allah gives it firmness when they arrive and the strength to do what patience requires. So a reward comes now, he says, besides what Allah stores up for the Day of Recompense, and he quotes 39:10: only the patient will be paid their reward in full, without reckoning.",
            "bn": "সা'দীর বর্ণনায় পথ পাওয়া অন্তর প্রশান্ত থাকে। বিপদ এলে সে আতঙ্কে দিশেহারা হয় না, যেমনটা হয় তার, যার অন্তরকে আল্লাহ পথ দেখাননি। বিপদ নেমে এলে আল্লাহ তাকে অটল রাখেন, আর সবরের দাবি পূরণের শক্তি দেন। ফলে প্রতিদানের একটা অংশ মেলে এখনই, তিনি বলেন। প্রতিদানের দিনের জন্য আল্লাহ যা জমিয়ে রাখেন, তা এর বাইরে। সঙ্গে তিনি উদ্ধৃত করেন ৩৯:১০: সবরকারীদের প্রতিদান পুরোপুরি দেওয়া হবে, হিসাব ছাড়াই।"
          },
          {
            "en": "He also draws the reverse. Whoever does not believe in Allah when calamities come, in the sense of not looking to Allah's decree and stopping at bare causes, is let down and left to himself. And the self, left alone, has nothing but alarm and anguish, jaza' and hala', which as-Sa'di calls a punishment hastened in this life before the punishment of the next, for neglecting the duty of patience. The contrast is his, and he draws it about a state of the heart, not about any group of people.",
            "bn": "উল্টো দিকটাও সা'দী দেখান। বিপদের সময় যে আল্লাহর ওপর ঈমান রাখে না, মানে আল্লাহর ফয়সালার দিকে তাকায় না, শুধু বাহ্যিক কারণ নিয়েই আটকে থাকে, তাকে সাহায্য থেকে বঞ্চিত করা হয়, তার নিজের হাতে ছেড়ে দেওয়া হয়। আর একা ছেড়ে দেওয়া নফসের কাছে অস্থিরতা আর হাহাকার ছাড়া কিছু নেই। সা'দী একে বলেন সবরের দায়িত্বে অবহেলার শাস্তি, আখিরাতের শাস্তির আগেই দুনিয়াতে দ্রুত আসা শাস্তি। তুলনাটা তাঁর। আর তিনি তা টানেন অন্তরের একটা অবস্থা নিয়ে, কোনো মানুষের দল নিয়ে নয়।"
          },
          {
            "en": "Then as-Sa'di reads the words by their general sense. Whoever has the faith Allah commanded, in Allah, His angels, His books, His messengers, the Last Day and qadar, its good and its bad, and fulfils what that faith requires, has taken the greatest means to Allah's guidance in his states, words and deeds, in his knowledge and his action. He ties this to 14:27, Allah makes firm those who believe with the firm word, and says the root of firmness is the heart's firmness. The Muyassar puts it briefly: guidance begins in the heart, and the limbs follow.",
            "bn": "এরপর সা'দী শব্দগুলোকে পড়েন তাদের সাধারণ অর্থে। আল্লাহ যে ঈমানের আদেশ দিয়েছেন, অর্থাৎ আল্লাহ, ফেরেশতা, কিতাব, রসূল, শেষ দিবস এবং ভালো-মন্দ তাকদীরের ওপর ঈমান, তা যার আছে এবং যে সেই ঈমানের দাবিগুলো পূরণ করে, সে আল্লাহর হিদায়াত পাওয়ার সবচেয়ে বড় উপায় ধরেছে। সেই হিদায়াত আসে তার অবস্থায়, কথায়, কাজে, জ্ঞানে ও আমলে। তিনি একে জুড়ে দেন ১৪:২৭ আয়াতের সঙ্গে: যারা ঈমান আনে, আল্লাহ তাদের দৃঢ় বাণী দিয়ে অটল রাখেন। আর বলেন, অটল থাকার মূল হলো অন্তরের অটলতা। মুয়াসসার কথাটা বলে সংক্ষেপে: হিদায়াতের মূল অন্তরে, অঙ্গপ্রত্যঙ্গ তার অনুসারী।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanks in Ease, Patience in Harm",
          "bn": "সুখে শোকর, কষ্টে সবর"
        },
        "p": [
          {
            "en": "Ibn Kathir follows the verse with a hadith that he calls agreed upon, beginning amazing is the believer. The wording confirmed for this article is Muslim's, in his Sahih, number 2999, from Suhayb (RA), that the Messenger of Allah ﷺ said: Amazing is the affair of the believer, for all of his affair is good, and that is so for no one but the believer. If something pleasing reaches him he gives thanks, and that is good for him; and if harm reaches him he is patient, and that is good for him.",
            "bn": "আয়াতের পরে ইবন কাসীর একটি হাদীস আনেন, যাকে তিনি বলেন মুত্তাফাক আলাইহ। শুরুটা এ রকম: মু'মিন কী আশ্চর্য! এই প্রবন্ধের জন্য যে শব্দগুলো মিলিয়ে নেওয়া হয়েছে, তা মুসলিমের, তাঁর সহীহ গ্রন্থে, হাদীস নম্বর ২৯৯৯। সুহাইব (রাঃ) থেকে বর্ণিত, রসূলুল্লাহ ﷺ বলেছেন: মু'মিনের ব্যাপারটা কী আশ্চর্য! তার সব কিছুতেই কল্যাণ। মু'মিন ছাড়া আর কারও বেলায় এমনটা হয় না। আনন্দের কিছু পেলে সে শোকর করে, তাতে তার কল্যাণ হয়। কষ্টে পড়লে সে সবর করে, তাতেও তার কল্যাণ হয়।"
          },
          {
            "en": "The wording Ibn Kathir himself quotes differs a little from Muslim's: it opens with Allah making no decree for the believer but that it is good for him. This article quotes Muslim's wording alone, and whole. The hadith speaks of patience in harm, which is where the verse stands, and adds thanks in ease, which the verse does not mention. Ma'arif al-Qur'an makes a nearby point: the believer's certainty, and the reward in the Hereafter that he keeps in view, lighten the worst calamity of this world.",
            "bn": "ইবন কাসীর নিজে যে শব্দে হাদীসটি উদ্ধৃত করেন, তা মুসলিমের শব্দ থেকে একটু আলাদা। তাঁর পাঠে শুরু হয় এভাবে: আল্লাহ মু'মিনের জন্য যে ফয়সালাই করেন, তাতেই তার কল্যাণ। এই প্রবন্ধ শুধু মুসলিমের শব্দই নিয়েছে, পুরোটা। হাদীসটি কষ্টে সবরের কথা বলে, আয়াতের বিষয় সেটাই। সঙ্গে সুখে শোকরের কথাও যোগ করে, যা আয়াতে নেই। মাআরিফুল কুরআন কাছাকাছি একটা কথা বলে। মু'মিনের ইয়াকীন, আর আখিরাতের যে প্রতিদান সে সব সময় চোখের সামনে রাখে, দুনিয়ার সবচেয়ে কঠিন বিপদকেও তা হালকা করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Known Before, Known Now",
          "bn": "আগেও জানা, এখনও জানা"
        },
        "p": [
          {
            "en": "The verse closes, wallahu bi-kulli shay'in 'alim: and Allah is Knowing of all things. At-Tabari explains it as knowledge of what was and what will be, and of what is coming before it comes. Al-Qurtubi ties the name to the verse's own subject: hidden from Him is neither the surrender of whoever yields to His command, nor the resentment of whoever resents it. The Muyassar says it in a few words: nothing of that is hidden from Him.",
            "bn": "আয়াত শেষ হয় এই কথায়: ওয়াল্লাহু বিকুল্লি শাইয়িন আলীম, আর আল্লাহ সব কিছু জানেন। তাবারীর ব্যাখ্যায়, যা ছিল আর যা হবে, তা তিনি জানেন। যা আসছে, তা আসার আগেই জানেন। কুরতুবী নামটিকে জুড়ে দেন আয়াতের নিজের বিষয়ের সঙ্গে। যে তাঁর আদেশের কাছে মাথা নত করে মেনে নেয়, তার মেনে নেওয়া তাঁর অজানা নয়। যে অপছন্দ করে, তার অপছন্দও তাঁর অজানা নয়। মুয়াসসার কথাটা বলে অল্প কথায়: এর কিছুই তাঁর কাছে গোপন নয়।"
          },
          {
            "en": "So the name looks back over both clauses. The calamity was known before it came, in at-Tabari's words, and the heart's answer to it is known as it comes, in al-Qurtubi's. The surah then moves on. 64:12 commands obedience to Allah and the Messenger, and 64:13 says there is no god but Allah, so upon Allah let the believers rely. After that, 64:14 and 64:15 turn to spouses, children and wealth as a trial.",
            "bn": "তাই নামটি পেছন ফিরে দুই অংশকেই ছুঁয়ে যায়। তাবারীর কথায়, বিপদ আসার আগেই তা জানা ছিল। কুরতুবীর কথায়, বিপদের সামনে অন্তর কী জবাব দেয়, তাও তিনি জানেন যখন তা ঘটে। এরপর সূরা সামনে এগোয়। ৬৪:১২ আয়াত আল্লাহ ও রসূলের আনুগত্যের আদেশ দেয়। ৬৪:১৩ আয়াত বলে, আল্লাহ ছাড়া কোনো ইলাহ নেই, তাই মু'মিনরা আল্লাহরই ওপর ভরসা করুক। তারপর ৬৪:১৪ ও ৬৪:১৫ আয়াত স্ত্রী, সন্তান আর সম্পদকে পরীক্ষা হিসেবে তুলে ধরে।"
          }
        ]
      }
    ]
  },
  "64:15": {
    "sections": [
      {
        "h": {
          "en": "What You Hold, What He Holds",
          "bn": "যা আপনার হাতে, যা তাঁর কাছে"
        },
        "p": [
          {
            "en": "Innama amwalukum wa awladukum fitnah, wa-llahu 'indahu ajrun 'azim: your wealth and your children are but a trial, and Allah has with Him a great reward. The verse is eight words in the Arabic, and it comes straight after 64:14, which warned that among a believer's spouses and children are enemies to him and then asked him to pardon. Here there is no 'among'. Wealth and children as such are named with a single word, a difference the commentators take up below.",
            "bn": "ইন্নামা আমওয়ালুকুম ওয়া আওলাদুকুম ফিতনাহ, ওয়াল্লাহু ইনদাহু আজরুন আযীম: তোমাদের ধন-সম্পদ আর সন্তান-সন্ততি তো কেবল পরীক্ষা, আর আল্লাহর কাছে আছে মহা পুরস্কার। আরবিতে আয়াতটি মাত্র আটটি শব্দের। এর ঠিক আগে ৬৪:১৪ সতর্ক করেছিল, মুমিনের স্ত্রী ও সন্তানদের কেউ কেউ তার শত্রু, তারপর তাকে বলেছিল ক্ষমা করে দিতে। এখানে আর ‘কেউ কেউ’ নেই। সম্পদ আর সন্তান, দুটোকেই পুরোপুরি এক শব্দে চেনানো হয়েছে। এই পার্থক্য নিয়ে তাফসীরকারেরা কী বলেন, তা সামনে আসছে।"
          },
          {
            "en": "The opening particle, innama, restricts: it says what a thing is and nothing besides. None of the commentaries fetched for this verse stops on the particle itself, but two carry its force into their paraphrase. At-Tabari writes 'your wealth, O people, and your children are nothing but a fitnah', and the Muyassar 'nothing but a trial and a test for you'. The second clause turns on the pronouns. Wealth and children are yours, amwalukum; the reward is 'indahu, with Him. Ibn Kathir says 'with Him' means on the Day of Resurrection.",
            "bn": "শুরুর শব্দ ইন্নামা সীমা টেনে দেয়: জিনিসটা কী, শুধু সেটুকুই বলে, এর বাইরে কিছু নয়। এ আয়াতের জন্য যেসব তাফসীর সংগ্রহ করা হয়েছে, তার কোনোটিই শব্দটি নিয়ে আলাদা করে থামেনি। তবে দুটি তাফসীর নিজেদের ব্যাখ্যায় এর জোরটা ধরে রেখেছে। তাবারী লেখেন, ‘হে লোকসকল, তোমাদের সম্পদ ও সন্তান ফিতনা ছাড়া আর কিছু নয়।’ মুয়াসসার লেখে, ‘তোমাদের জন্য পরীক্ষা ও যাচাই ছাড়া আর কিছু নয়।’ দ্বিতীয় অংশের ভার সর্বনামে। সম্পদ ও সন্তান তোমাদের, আমওয়ালুকুম। আর পুরস্কার ইনদাহু, তাঁর কাছে। ইবন কাসীর বলেন, ‘তাঁর কাছে’ মানে কিয়ামতের দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Trial, Distraction, Infatuation",
          "bn": "পরীক্ষা, ব্যস্ততা, মোহ"
        },
        "p": [
          {
            "en": "The commentators agree on the core sense of fitnah and differ at its edges. Ibn Kathir glosses it as ikhtibar wa ibtila', a test and a trial from Allah for His creatures, so that He may know who obeys Him from who disobeys Him. At-Tabari says it means bala' upon you in this world, and supports it with Qatada, who said simply: bala'. The Muyassar gives the pair bala' and ikhtibar. On this first reading wealth and children are an examination set by Allah, and the verse names it.",
            "bn": "ফিতনা শব্দের মূল অর্থে তাফসীরকারেরা একমত, মতভেদ কিনারায়। ইবন কাসীর এর ব্যাখ্যা দেন ইখতিবার ও ইবতিলা দিয়ে: সৃষ্টির জন্য আল্লাহর পক্ষ থেকে পরীক্ষা ও যাচাই, যাতে তিনি জেনে নেন কে তাঁর আনুগত্য করে আর কে নাফরমানি করে। তাবারী বলেন, এর মানে দুনিয়াতে তোমাদের উপর বালা। সমর্থনে তিনি কাতাদার কথা আনেন, যিনি এক শব্দে বলেছিলেন: বালা। মুয়াসসার দুটি শব্দ পাশাপাশি রাখে, বালা ও ইখতিবার। এই প্রথম পাঠে সম্পদ আর সন্তান আল্লাহর নেওয়া এক পরীক্ষা, আর আয়াতটি সেই পরীক্ষার নাম বলে দিচ্ছে।"
          },
          {
            "en": "Al-Baghawi adds a second layer. Fitnah for him is trial and test and also shughl 'an al-akhirah, a preoccupation that keeps a person from the Hereafter, through which he falls into grave sins, withholds what is due and takes what is unlawful. Al-Qurtubi goes the same way: a trial that drives you to earn what is forbidden and to withhold the right of Allah. Ma'arif al-Qur'an says that a person mostly commits sins for love of wealth and children, especially when he earns a living by unlawful means.",
            "bn": "বাগাভী আরেকটি স্তর যোগ করেন। তাঁর কাছে ফিতনা মানে পরীক্ষা ও যাচাই, সেই সঙ্গে শুগল আনিল আখিরাহ: এমন ব্যস্ততা যা মানুষকে আখিরাত থেকে সরিয়ে রাখে। এর কারণেই মানুষ বড় বড় গুনাহে জড়ায়, হক আটকে রাখে, হারাম হাতে তুলে নেয়। কুরতুবীও একই পথে হাঁটেন। তাঁর ভাষায় এ এমন পরীক্ষা, যা হারাম উপার্জনের দিকে ঠেলে দেয় আর আল্লাহর হক আদায়ে বাধা দেয়। মাআরিফুল কুরআন বলে, মানুষ বেশির ভাগ গুনাহ করে সম্পদ আর সন্তানের ভালোবাসায়, বিশেষ করে যখন হারাম পথে রুজি কামায়।"
          },
          {
            "en": "Al-Qurtubi then records two further glosses. From al-Qutabi he gives ighram, ardent attachment, explained by the usage futina al-rajulu bi-l-mar'ah, the man was smitten with the woman. Under 'it is said' he gives mihnah, an ordeal, with a line of verse about people being tried in their religion. The glosses place the danger in different places: in an examination set by Allah, in a distraction from the Hereafter, in sin committed for the family's sake, or in the heart's own attachment.",
            "bn": "এরপর কুরতুবী আরও দুটি ব্যাখ্যা লিখে রাখেন। কুতাবী থেকে তিনি আনেন ইগরাম, অর্থাৎ গভীর আসক্তি। প্রমাণ হিসেবে আরবদের কথা: ফুতিনার রাজুলু বিল মারআহ, লোকটি মহিলার মোহে পড়েছে। আর ‘বলা হয়’ বলে তিনি আনেন মিহনাহ, অর্থাৎ কঠিন যাচাই। সঙ্গে এক লাইন কবিতা, যেখানে মানুষকে তাদের দ্বীনের ব্যাপারে পরীক্ষায় ফেলার কথা আছে। ব্যাখ্যাগুলো বিপদটাকে খোঁজে ভিন্ন ভিন্ন জায়গায়। কেউ দেখেন আল্লাহর নেওয়া পরীক্ষা, কেউ আখিরাত ভুলিয়ে দেওয়া ব্যস্ততা। কেউ দেখেন পরিবারের জন্য করা গুনাহ, কেউ হৃদয়ের নিজের টান।"
          }
        ]
      },
      {
        "h": {
          "en": "Why No 'Among' Here",
          "bn": "এখানে ‘কেউ কেউ’ নেই কেন"
        },
        "p": [
          {
            "en": "Al-Qurtubi notices the small difference between the two verses and credits the explanation to al-Hasan. In 64:14 the Qur'an says inna min azwajikum, among your spouses, with min for part of a whole, because not all of them are enemies. In 64:15 there is no min: wealth and children as such are called fitnah, because the two are never free of fitnah and of the heart's being taken up with them. Al-Baghawi gives the same reasoning, introduced only with 'some of them said'. Enmity is partial; the test reaches everyone.",
            "bn": "দুই আয়াতের ছোট্ট পার্থক্যটা কুরতুবী লক্ষ করেছেন, আর এর ব্যাখ্যা দিয়েছেন হাসানের নামে। ৬৪:১৪-এ কুরআন বলে ইন্না মিন আযওয়াজিকুম, তোমাদের স্ত্রীদের মধ্যে কেউ কেউ। এখানে মিন অংশ বোঝায়, কারণ সবাই শত্রু নয়। ৬৪:১৫-এ কোনো মিন নেই। সম্পদ আর সন্তানকে পুরোপুরিই ফিতনা বলা হয়েছে, কারণ এ দুটি কখনো ফিতনা থেকে মুক্ত থাকে না, হৃদয়কেও এগুলো ব্যস্ত না রেখে ছাড়ে না। বাগাভী একই যুক্তি দেন, শুধু ‘কেউ কেউ বলেছেন’ বলে। শত্রুতা কারও কারও বেলায়, কিন্তু পরীক্ষা সবার।"
          },
          {
            "en": "Ibn Mas'ud (RA), quoted by both al-Qurtubi and al-Baghawi, drew the practical conclusion. In al-Qurtubi's wording: let none of you say, O Allah, protect me from fitnah, for there is none of you who returns to wealth, family and children but he is wrapped in fitnah; rather let him say, O Allah, I seek refuge with You from the fitnahs that lead astray. In al-Baghawi's wording the first prayer is 'I seek refuge with You from fitnah'. The test itself cannot be escaped. What a person asks to be spared is being led astray by it.",
            "bn": "ইবন মাসউদ (রাঃ) এর বাস্তব ফল টেনেছিলেন। কুরতুবী ও বাগাভী দুজনেই তাঁর কথা এনেছেন। কুরতুবীর ভাষায়: তোমাদের কেউ যেন না বলে, হে আল্লাহ, আমাকে ফিতনা থেকে রক্ষা করো। কারণ তোমাদের এমন কেউ নেই, যে সম্পদ, পরিবার ও সন্তানের কাছে ফেরে অথচ ফিতনায় জড়ানো থাকে না। বরং সে যেন বলে, হে আল্লাহ, পথভ্রষ্টকারী ফিতনাগুলো থেকে আমি তোমার আশ্রয় চাই। বাগাভীর ভাষায় প্রথম দোয়াটি হলো, ‘ফিতনা থেকে আমি তোমার আশ্রয় চাই।’ পরীক্ষা এড়ানোর উপায় নেই। মানুষ যা থেকে বাঁচতে চায়, তা হলো পরীক্ষার ভেতর পথ হারানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Families Who Held Back Hijrah",
          "bn": "যে পরিবার হিজরতে বাধা দিল"
        },
        "p": [
          {
            "en": "The verse before ours reads: O you who believe, among your spouses and your children are enemies to you, so beware of them; but if you pardon and overlook and forgive, Allah is Forgiving, Merciful. Ibn Kathir, in the abridged English, explains the enmity as keeping a man busy with them instead of good deeds, and cites 63:9: let not your wealth and your children divert you from the remembrance of Allah. He adds Mujahid's reading, that they may push a man to cut family ties or disobey his Lord, and Ibn Zayd's: beware of them for your religion.",
            "bn": "আমাদের আয়াতের আগের আয়াতটি বলে: হে মুমিনগণ, তোমাদের স্ত্রী ও সন্তানদের মধ্যে কেউ কেউ তোমাদের শত্রু, কাজেই তাদের ব্যাপারে সতর্ক থাকো। আর যদি তোমরা মাফ করো, উপেক্ষা করো ও ক্ষমা করো, তবে আল্লাহ ক্ষমাশীল, দয়ালু। সংক্ষিপ্ত ইংরেজি ইবন কাসীরে এই শত্রুতার ব্যাখ্যা হলো, তারা মানুষকে নেক আমল ছেড়ে নিজেদের নিয়ে ব্যস্ত রাখে। সঙ্গে তিনি আনেন ৬৩:৯: তোমাদের সম্পদ ও সন্তান যেন তোমাদেরকে আল্লাহর জিকির থেকে গাফেল না করে। মুজাহিদের মতে, তারা মানুষকে আত্মীয়তা ছিন্ন করতে বা রবের নাফরমানি করতে ঠেলে দিতে পারে। আর ইবন যায়দ বলেন, দ্বীনের ব্যাপারে তাদের থেকে সতর্ক থাকো।"
          },
          {
            "en": "Ibn Kathir also gives the occasion from Ibn Abbas (RA), which at-Tirmidhi narrates (Jami' at-Tirmidhi 3317). Asked about the verse, Ibn Abbas said: 'These were men from the people of Makkah who accepted Islam and wanted to come to the Prophet ﷺ, but their wives and children refused to let them come to the Messenger of Allah ﷺ. When they did come to the Messenger of Allah ﷺ, they saw that the people had gained understanding in the religion, and they resolved to punish them. So Allah revealed: O you who believe, among your spouses and your children are enemies to you, so beware of them.' At-Tirmidhi says: hasan sahih.",
            "bn": "ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে আয়াতের প্রেক্ষাপটও আনেন, যা তিরমিযী বর্ণনা করেছেন (জামে তিরমিযী ৩৩১৭)। এক ব্যক্তি আয়াতটি সম্পর্কে জিজ্ঞেস করলে ইবন আব্বাস বলেন: ‘এরা মক্কার কিছু লোক, যারা ইসলাম গ্রহণ করেছিল এবং নবী ﷺ-এর কাছে আসতে চেয়েছিল। কিন্তু তাদের স্ত্রী-সন্তানেরা তাদের রাসূলুল্লাহ ﷺ-এর কাছে আসতে দিতে রাজি হয়নি। পরে যখন তারা রাসূলুল্লাহ ﷺ-এর কাছে এল, দেখল লোকেরা দ্বীনের গভীর বুঝ অর্জন করে ফেলেছে। তখন তারা নিজেদের পরিবারকে শাস্তি দিতে উদ্যত হলো। তখন আল্লাহ নাযিল করলেন: হে মুমিনগণ, তোমাদের স্ত্রী ও সন্তানদের মধ্যে কেউ কেউ তোমাদের শত্রু, কাজেই তাদের ব্যাপারে সতর্ক থাকো।’ তিরমিযী বলেন: হাসান সহীহ।"
          },
          {
            "en": "At-Tirmidhi's wording quotes the warning and then says 'the verse', meaning the whole of it, and Ibn Kathir's English presents the pardon clause as what came down. So the men who had been held back were not told to cut off their families. They were told to beware, and then to pardon, overlook and forgive. Our verse follows and names what made the pull so strong in the first place: wealth and children are a fitnah, and Allah has with Him a great reward.",
            "bn": "তিরমিযীর বর্ণনা সতর্কবাণী পর্যন্ত উদ্ধৃত করে বলে ‘আয়াতটি’, অর্থাৎ পুরো আয়াত। আর ইবন কাসীরের ইংরেজি পাঠে ক্ষমার অংশটিকেই নাযিল হওয়া জবাব হিসেবে দেখানো হয়েছে। মানে, যাদের আটকে রাখা হয়েছিল, তাদের পরিবার ছেঁটে ফেলতে বলা হয়নি। বলা হয়েছিল সতর্ক থাকতে, তারপর মাফ করতে, উপেক্ষা করতে, ক্ষমা করতে। এরপর আমাদের আয়াত এসে জানিয়ে দেয়, টানটা এত জোরালো ছিল কেন: সম্পদ আর সন্তান ফিতনা, আর আল্লাহর কাছে আছে মহা পুরস্কার।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Sermon Paused",
          "bn": "যখন খুতবা থেমে গেল"
        },
        "p": [
          {
            "en": "Ibn Kathir, al-Qurtubi and al-Baghawi all bring one hadith under this verse. In at-Tirmidhi's wording (Jami' at-Tirmidhi 3774), Buraydah (RA) said: the Messenger of Allah ﷺ was giving us a sermon when al-Hasan and al-Husayn came, wearing red shirts, walking and stumbling. The Messenger of Allah ﷺ came down from the minbar, carried them and placed them in front of him, then said: 'Allah has spoken the truth: your wealth and your children are but a trial. I looked at these two boys walking and stumbling, and I could not hold back until I broke off my talk and lifted them up.'",
            "bn": "ইবন কাসীর, কুরতুবী ও বাগাভী তিনজনই এ আয়াতের অধীনে একটি হাদীস আনেন। তিরমিযীর ভাষায় (জামে তিরমিযী ৩৭৭৪), বুরায়দা (রাঃ) বলেন: রাসূলুল্লাহ ﷺ আমাদের সামনে খুতবা দিচ্ছিলেন। এমন সময় হাসান ও হুসাইন (রাঃ) এলেন, গায়ে লাল জামা, হাঁটছেন আর হোঁচট খাচ্ছেন। রাসূলুল্লাহ ﷺ মিম্বার থেকে নেমে তাঁদের কোলে তুলে নিলেন এবং নিজের সামনে বসালেন। তারপর বললেন: ‘আল্লাহ সত্য বলেছেন: তোমাদের সম্পদ ও সন্তান তো কেবল পরীক্ষা। আমি এই দুই শিশুকে হাঁটতে আর হোঁচট খেতে দেখলাম, আর ধৈর্য রাখতে পারলাম না, শেষে কথা থামিয়ে তাদের তুলে নিলাম।’"
          },
          {
            "en": "At-Tirmidhi grades it hasan gharib and adds that it is known only through al-Husayn ibn Waqid; Ibn Kathir, who gives it from Imam Ahmad and says the compilers of the Sunan narrate it too, repeats that grading. The scene shapes how the verse is read. The Prophet ﷺ did not cite the verse to scold the boys or to warn against loving them. He cited it about the pull he himself felt, tender and immediate, answered it by carrying them, and then, as al-Qurtubi records, returned to his sermon.",
            "bn": "তিরমিযী হাদীসটিকে হাসান গরীব বলেছেন, আর যোগ করেছেন যে হুসাইন ইবন ওয়াকিদের সূত্র ছাড়া এটি জানা যায় না। ইবন কাসীর হাদীসটি ইমাম আহমাদ থেকে আনেন, বলেন সুনান সংকলকেরাও এটি বর্ণনা করেছেন, আর তিরমিযীর এই মানই উদ্ধৃত করেন। দৃশ্যটি আয়াত পড়ার ধরন বদলে দেয়। নবী ﷺ শিশু দুটিকে বকতে আয়াতটি পড়েননি, তাদের ভালোবাসতেও নিষেধ করেননি। নিজের ভেতরে যে কোমল, তাৎক্ষণিক টান অনুভব করেছিলেন, আয়াতটি পড়েছিলেন সেটির কথা বলতে। সাড়া দিয়েছিলেন তাদের কোলে তুলে নিয়ে। তারপর, কুরতুবীর বর্ণনায়, আবার খুতবায় ফিরে গিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Love Within Its Limits",
          "bn": "ভালোবাসা, তবে সীমার ভেতরে"
        },
        "p": [
          {
            "en": "None of the commentaries fetched here reads the verse as a verdict against family. Where they draw a line, they draw it at disobedience. Al-Qurtubi's instruction is exact: do not obey them in disobedience to Allah. At-Tabari ties the great reward to the moment when you go against your children and spouses in obedience to Allah, and pay Allah's right in your wealth. The Muyassar promises it to whoever gives obedience to Allah precedence over obedience to anyone else. Love of family is nowhere the fault; letting it outrank Allah is.",
            "bn": "এখানে সংগ্রহ করা কোনো তাফসীর আয়াতটিকে পরিবারের বিরুদ্ধে রায় হিসেবে পড়েনি। যেখানে তাঁরা সীমা টানেন, টানেন নাফরমানির জায়গায়। কুরতুবীর নির্দেশ একেবারে স্পষ্ট: আল্লাহর নাফরমানিতে তাদের কথা মেনো না। তাবারী মহা পুরস্কারকে জুড়ে দেন সেই মুহূর্তের সঙ্গে, যখন আপনি আল্লাহর আনুগত্যের খাতিরে স্ত্রী-সন্তানের বিপরীতে দাঁড়ান এবং সম্পদে আল্লাহর হক আদায় করেন। মুয়াসসার এই পুরস্কারের কথা দেয় তাকে, যে অন্য সবার আনুগত্যের চেয়ে আল্লাহর আনুগত্যকে আগে রাখে। পরিবারকে ভালোবাসা কোথাও দোষ নয়। দোষ হলো সেই ভালোবাসাকে আল্লাহর উপরে তুলে দেওয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an states the balance in so many words: the test is whether a person becomes so engrossed in love of wealth and children that he grows heedless of Allah's commands, or keeps that love within limits and stays mindful of his duties. Love is assumed; its limits are examined. Al-Qurtubi and Ma'arif both quote a harsher line from an unnamed early authority, al-'iyal sus al-ta'at, a household is the weevil of good deeds. Neither names the speaker, and both place it beside the same warning against earning unlawfully for a family's sake.",
            "bn": "মাআরিফুল কুরআন ভারসাম্যটা সরাসরি বলে দেয়। পরীক্ষা হলো, মানুষ কি সম্পদ আর সন্তানের ভালোবাসায় এতটা ডুবে যায় যে আল্লাহর হুকুম ভুলে বসে, নাকি সেই ভালোবাসাকে সীমার ভেতরে রেখে নিজের দায়িত্বের কথা মনে রাখে? ভালোবাসা থাকবে, এটা ধরেই নেওয়া। যাচাই হয় তার সীমা। কুরতুবী ও মাআরিফ দুজনেই নাম না জানা এক পূর্বসূরির আরও কড়া একটি কথা আনেন: আল-ইয়ালু সূসুত তাআত, পরিবার হলো নেক আমলের ঘুণপোকা। কেউই বক্তার নাম বলেননি। আর দুজনেই কথাটি রেখেছেন পরিবারের জন্য হারাম উপার্জনের সেই একই সতর্কবাণীর পাশে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Kept With Him",
          "bn": "যা তাঁর কাছে রাখা আছে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the second clause against 3:14 and the verse after it. There, love of desirable things is made attractive to people: women, sons, heaped-up gold and silver, branded horses, cattle and tilled land. That is the enjoyment of the life of this world, and Allah has with Him the best return. The same words, wa-llahu 'indahu, close both verses, and 3:15 goes on to name what is better: gardens with their Lord for those who are mindful of Him.",
            "bn": "ইবন কাসীর দ্বিতীয় অংশটি পড়েন ৩:১৪ ও তার পরের আয়াতের আলোয়। সেখানে বলা হয়েছে, মানুষের কাছে কামনার জিনিসের ভালোবাসাকে আকর্ষণীয় করে তোলা হয়েছে: নারী, পুত্র, স্তূপ করা সোনা-রুপা, চিহ্নিত ঘোড়া, গবাদি পশু আর খেতখামার। এসব দুনিয়ার জীবনের ভোগের সামগ্রী, আর আল্লাহর কাছে আছে উত্তম ঠিকানা। দুই আয়াতই শেষ হয় একই কথায়, ওয়াল্লাহু ইনদাহু। তারপর ৩:১৫ বলে দেয় এর চেয়ে ভালো কী: যারা তাকওয়া অবলম্বন করে, তাদের জন্য তাদের রবের কাছে আছে জান্নাত।"
          },
          {
            "en": "The other commentators say outright what the reward is. Qatada, in at-Tabari's report, says it is Paradise, and at-Tabari's own paraphrase ends on the same word. Al-Qurtubi calls Paradise the goal, with no reward greater than it in the view of the commentators. Then he adds a hadith from the Two Sahihs, in Bukhari's wording. It is not a report about this verse. He brings it in under the reward and concludes that there is no doubt Allah's good pleasure is the utmost of hopes.",
            "bn": "অন্য তাফসীরকারেরা পুরস্কারটা কী, তা সরাসরি বলে দেন। তাবারীর বর্ণনায় কাতাদা বলেন, সেটি জান্নাত। তাবারীর নিজের ব্যাখ্যাও শেষ হয় এই শব্দেই। কুরতুবী জান্নাতকে বলেন চূড়ান্ত লক্ষ্য, তাফসীরকারদের মতে এর চেয়ে বড় পুরস্কার নেই। তারপর তিনি দুই সহীহ গ্রন্থ, বুখারী ও মুসলিম থেকে একটি হাদীস আনেন, ভাষা বুখারীর। হাদীসটি এ আয়াত সম্পর্কে বর্ণিত নয়। তিনি এটি এনেছেন পুরস্কারের আলোচনায়, আর উপসংহার টেনেছেন: আল্লাহর সন্তুষ্টিই যে সব আশার শেষ সীমা, তাতে কোনো সন্দেহ নেই।"
          },
          {
            "en": "Abu Sa'id (RA) reports (Sahih al-Bukhari 6549) that the Messenger of Allah ﷺ said: 'Allah will say to the people of Paradise, O people of Paradise! They will say, Here we are, our Lord, at Your service. He will say, Are you pleased? They will say, Why should we not be pleased, when You have given us what You have not given to anyone of Your creation? He will say, I will give you something better than that. They will say, O Lord, what is better than that? He will say, I will let My good pleasure descend upon you, and I will never be displeased with you after it.'",
            "bn": "আবু সাঈদ খুদরী (রাঃ) বর্ণনা করেন (সহীহ বুখারী ৬৫৪৯), রাসূলুল্লাহ ﷺ বলেছেন: ‘আল্লাহ জান্নাতবাসীদের বলবেন, হে জান্নাতবাসীরা! তারা বলবে, হে আমাদের রব, আমরা হাজির, আপনার খেদমতে। তিনি বলবেন, তোমরা কি সন্তুষ্ট? তারা বলবে, আমরা কেন সন্তুষ্ট হব না, আপনি তো আমাদের এমন জিনিস দিয়েছেন যা আপনার সৃষ্টির আর কাউকে দেননি! তিনি বলবেন, আমি তোমাদের এর চেয়েও উত্তম কিছু দেব। তারা বলবে, হে রব, এর চেয়ে উত্তম আর কী হতে পারে? তিনি বলবেন, আমি তোমাদের উপর আমার সন্তুষ্টি নামিয়ে দেব, এরপর আর কখনো তোমাদের উপর অসন্তুষ্ট হব না।’"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying the Test Well",
          "bn": "পরীক্ষাটা ভালোভাবে বয়ে নেওয়া"
        },
        "p": [
          {
            "en": "The verse after ours turns the test into instructions: fear Allah as much as you are able, listen, obey and spend, and whoever is protected from the stinginess of his own soul, those are the successful (64:16). Ibn Kathir refers that last clause to the same words in al-Hashr, at 59:9. Read beside our verse, it points to where the test is usually met: in the earning, where al-Baghawi and al-Qurtubi warn against taking what is unlawful, and in the spending, where the Muyassar asks that Allah's right in wealth be paid.",
            "bn": "আমাদের আয়াতের পরের আয়াত পরীক্ষাটাকে কাজের নির্দেশে রূপ দেয়: সাধ্যমতো আল্লাহকে ভয় করো, শোনো, মানো ও খরচ করো। আর যাকে তার নিজের মনের কৃপণতা থেকে বাঁচানো হলো, তারাই সফল (৬৪:১৬)। শেষ অংশটির জন্য ইবন কাসীর সূরা হাশরের ৫৯:৯-এর একই কথার দিকে ইঙ্গিত করেন। আমাদের আয়াতের পাশে রেখে পড়লে বোঝা যায়, পরীক্ষাটা সাধারণত কোথায় আসে। আসে উপার্জনে, যেখানে বাগাভী ও কুরতুবী হারাম হাতে নেওয়ার ব্যাপারে সতর্ক করেন। আর আসে খরচে, যেখানে মুয়াসসার চায় সম্পদে আল্লাহর হক আদায় হোক।"
          },
          {
            "en": "For a reader today the verse asks for a habit of noticing, not of suspicion. When a choice about money or children comes up, the question is that of Ma'arif al-Qur'an: is my love staying within its limits, or making me heedless? When someone at home pulls against obedience, al-Qurtubi's line and 64:14 together give the answer: do not obey in disobedience, and still pardon, overlook and forgive. And when the pull is only tenderness, as it was beside the minbar, the verse does not forbid it. It reminds whoever feels it that a great reward is with Allah.",
            "bn": "আজকের পাঠকের কাছে আয়াতটি চায় খেয়াল রাখার অভ্যাস, সন্দেহের অভ্যাস নয়। টাকা-পয়সা বা সন্তান নিয়ে কোনো সিদ্ধান্ত সামনে এলে প্রশ্নটা মাআরিফুল কুরআনের সেই প্রশ্নই: আমার ভালোবাসা কি সীমার ভেতরে আছে, নাকি আমাকে গাফেল করে দিচ্ছে? ঘরের কেউ আনুগত্যের উল্টো দিকে টানলে কুরতুবীর কথা আর ৬৪:১৪ মিলে জবাব দেয়: নাফরমানিতে কথা মানবেন না, তবু মাফ করবেন, উপেক্ষা করবেন, ক্ষমা করবেন। আর টানটা যদি শুধুই মমতা হয়, যেমন হয়েছিল মিম্বারের পাশে, আয়াত তা নিষেধ করে না। শুধু মনে করিয়ে দেয়, আল্লাহর কাছে আছে মহা পুরস্কার।"
          }
        ]
      }
    ]
  }
});
