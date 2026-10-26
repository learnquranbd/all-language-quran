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
          "en": "Nothing But a Trial",
          "bn": "পরীক্ষা ছাড়া আর কিছু নয়"
        },
        "p": [
          {
            "en": "The verse is short and its first word is restrictive: innama amwalukum wa awladukum fitnah. Innama narrows a statement to one thing and excludes the rest, so the sense is that your wealth and your children are nothing but a fitnah. Then the counterweight: wa Allahu indahu ajrun azim, and Allah — with Him is a great reward. Two clauses, one naming what you hold and one naming what is held for you.",
            "bn": "আয়াতটি ছোট, আর এর প্রথম শব্দটিই সীমা টেনে দেয়: ইন্নামা আমওয়ালুকুম ওয়া আওলাদুকুম ফিতনাহ। ইন্নামা একটি কথাকে একটিমাত্র বিষয়ে বেঁধে দেয়, বাকি সব বাদ দেয়। তাই অর্থ দাঁড়ায়: তোমাদের সম্পদ ও সন্তান ফিতনা ছাড়া আর কিছুই নয়। এরপর পাল্লার অন্য দিক: ওয়াল্লাহু ইনদাহু আজরুন আযীম, আর আল্লাহ, তাঁরই কাছে আছে মহাপুরস্কার। দুটি বাক্যাংশ। একটি বলে আপনার হাতে কী আছে, অন্যটি বলে আপনার জন্য কী রাখা আছে।"
          },
          {
            "en": "Fitnah is the word to slow down on. Its root sense is the assaying of gold — putting metal into fire to separate what is precious from what is mixed in with it. From there it comes to mean a test, and in some contexts a temptation or a civil strife. The fire in that image is not there to destroy the gold. It is there to find out what is gold.",
            "bn": "ফিতনা শব্দটিতে একটু থামা দরকার। এর মূল অর্থ সোনা যাচাই করা: ধাতুকে আগুনে দিয়ে খাঁটি অংশকে মিশে থাকা খাদ থেকে আলাদা করা। সেখান থেকে এর মানে দাঁড়ায় পরীক্ষা, আর কোনো কোনো প্রসঙ্গে প্রলোভন বা অন্তর্কলহ। সেই ছবিতে আগুন সোনাকে পুড়িয়ে শেষ করার জন্য নয়। আগুন আছে খুঁজে বের করতে, কোনটা আসল সোনা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Immediately Before",
          "bn": "ঠিক আগের আয়াতটি"
        },
        "p": [
          {
            "en": "This verse cannot be read apart from 64:14, which precedes it: O you who believe, among your spouses and your children there are enemies to you, so beware of them. And then, in the same verse, the release — but if you pardon and overlook and forgive, then indeed Allah is Forgiving, Merciful. A hard sentence and a merciful one, side by side, before ours arrives to explain both.",
            "bn": "এ আয়াতকে এর ঠিক আগের আয়াত ৬৪:১৪ থেকে আলাদা করে পড়া যায় না: হে ঈমানদারগণ, তোমাদের স্ত্রী ও সন্তানদের মধ্যে কেউ কেউ তোমাদের শত্রু, তাই তাদের ব্যাপারে সতর্ক থেকো। তারপর একই আয়াতে আসে ছাড়: আর যদি তোমরা মার্জনা করো, এড়িয়ে যাও ও ক্ষমা করো, তবে নিশ্চয়ই আল্লাহ ক্ষমাশীল, পরম দয়ালু। একটি কঠিন কথা আর একটি দয়ার কথা পাশাপাশি। তারপর আমাদের আয়াতটি এসে দুটিরই ব্যাখ্যা দেয়।"
          },
          {
            "en": "A report from Ibn Abbas (RA), preserved in the Sunan collections, connects these two verses to men in Mecca who wanted to migrate and were held back by wives and children; when they later reached Medina and saw how much others had learned of the religion, they were minded to punish their families, and the verses came down. The report explains the pairing exactly: beware, and then pardon.",
            "bn": "সুনান গ্রন্থগুলোতে ইবনে আব্বাস (রাঃ)-এর একটি বর্ণনা আছে, যা এই দুই আয়াতকে মক্কার কিছু লোকের ঘটনার সঙ্গে যুক্ত করে। তাঁরা হিজরত করতে চেয়েছিলেন, কিন্তু স্ত্রী-সন্তানরা তাঁদের আটকে রেখেছিল। পরে মদিনায় পৌঁছে তাঁরা দেখলেন, অন্যরা দ্বীনের কত কিছু শিখে ফেলেছে। তখন তাঁরা পরিবারকে শাস্তি দিতে চাইলেন, আর তখনই আয়াতগুলো নাজিল হয়। বর্ণনাটি জোড়াটা ঠিকঠাক বুঝিয়ে দেয়: আগে সতর্ক থাকো, তারপর ক্ষমা করো।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Verdict on Family",
          "bn": "পরিবারের বিরুদ্ধে রায় নয়"
        },
        "p": [
          {
            "en": "It would be a serious misreading to take fitnah as a low view of family. The Quran itself sets the other terms. In 18:46 wealth and children are called zinat al-hayat ad-dunya, the adornment of worldly life, before adding that the enduring good deeds are better with your Lord. And in 25:74 the servants of the Most Merciful are taught to ask for spouses and offspring as a coolness of the eyes.",
            "bn": "ফিতনা শব্দ দেখে পরিবারকে তুচ্ছ ভাবা হবে আয়াতটিকে মারাত্মক ভুল বোঝা। কুরআন নিজেই পরিবারের অন্য পরিচয়ও দিয়েছে। ১৮:৪৬ আয়াতে সম্পদ ও সন্তানকে বলা হয়েছে যীনাতুল হায়াতিদ দুনইয়া, দুনিয়ার জীবনের শোভা। তারপর যোগ করা হয়েছে, স্থায়ী নেক আমল তোমার রবের কাছে আরও উত্তম। আর ২৫:৭৪ আয়াতে রহমানের বান্দাদের শেখানো হয়েছে, তারা যেন স্ত্রী ও সন্তানদের চোখের শীতলতা হিসেবে চেয়ে দোয়া করে।"
          },
          {
            "en": "So the same things are asked for as a blessing, described as an ornament, and named as a test. All three are true at once, and the third is what keeps the first two safe. The identical sentence appears again at 8:28, there placed after a warning against betraying trusts — and 63:9 states the danger plainly: let not your wealth or your children divert you from the remembrance of Allah.",
            "bn": "অর্থাৎ একই জিনিস নিয়ামত হিসেবে চাওয়া হয়, শোভা বলে বর্ণনা করা হয়, আবার পরীক্ষা বলেও নাম দেওয়া হয়। তিনটিই একসঙ্গে সত্য। আর তৃতীয়টিই প্রথম দুটিকে নিরাপদ রাখে। হুবহু একই বাক্য আবার এসেছে ৮:২৮ আয়াতে, সেখানে আমানতের খিয়ানত নিয়ে সতর্ক করার পরে। আর ৬৩:৯ আয়াত বিপদটা খোলাখুলি বলে দেয়: তোমাদের সম্পদ ও সন্তান যেন তোমাদের আল্লাহর জিকির থেকে গাফেল না করে।"
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
            "en": "The second half is built on a preposition: indahu, with Him. Wealth and children are described with the pronoun of possession, yours; the reward is described as located with Allah. That is a difference in security, not only in size. What is with you can be lost, spent, outlived or taken; what is with Him cannot. Ajr azim, a great reward, is left undescribed, which the commentators read as a sign of its scale.",
            "bn": "দ্বিতীয় অংশটি দাঁড়িয়ে আছে একটি অব্যয়ের ওপর: ইনদাহু, তাঁর কাছে। সম্পদ ও সন্তানের সঙ্গে এসেছে মালিকানার সর্বনাম: তোমাদের। আর পুরস্কারের কথা বলা হয়েছে, তা আছে আল্লাহর কাছে। পার্থক্যটা শুধু পরিমাণের নয়, নিরাপত্তারও। আপনার কাছে যা আছে, তা হারাতে পারে, খরচ হয়ে যেতে পারে, আপনার আগেই ফুরিয়ে যেতে পারে, কেউ কেড়েও নিতে পারে। তাঁর কাছে যা আছে, তার কিছুই এমন হয় না। আজরুন আযীম, মহাপুরস্কার, কেমন তা বলা হয়নি। মুফাসসিরগণ একেই এর বিশালতার আলামত হিসেবে দেখেন।"
          },
          {
            "en": "What follows keeps the demand realistic. 64:16 says fear Allah as much as you are able, and listen and obey and spend — a rare and merciful qualification, since the burden of family is not the same for every person. It then names the real obstacle: whoever is protected from the miserliness of his own soul, those are the successful. The problem was never the wealth. It was shuhh, the grasping inside the one who holds it.",
            "bn": "পরের আয়াত দাবিটাকে মানুষের সাধ্যের মধ্যে রাখে। ৬৪:১৬ বলে: তোমরা যথাসাধ্য আল্লাহকে ভয় করো, আর শোনো, মানো ও খরচ করো। এ এক বিরল ও দয়াময় ছাড়, কারণ পরিবারের বোঝা সবার জন্য সমান নয়। এরপর আয়াতটি আসল বাধার নাম বলে দেয়: যাকে তার নিজের নফসের কার্পণ্য থেকে রক্ষা করা হয়েছে, তারাই সফল। সমস্যা কখনো সম্পদ ছিল না। সমস্যা ছিল শুহ্‌হ: যার হাতে সম্পদ, তার ভেতরের আঁকড়ে ধরার স্বভাব।"
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
            "bn": "অধিকাংশ মুফাসসিরের মতে, ৬৪:১৪ আয়াতের শত্রুতা স্ত্রী-সন্তানদের স্থায়ী পরিচয় নয়। তারা কাউকে আনুগত্য থেকে টেনে সরালে কী হয়ে উঠতে পারে, এ তারই বর্ণনা। শব্দটি কোনো মানুষের ওপর রায় নয়, বরং পথ কোন দিকে যাচ্ছে তা নিয়ে সতর্কবার্তা। এ কারণেই আয়াতটি শেষ হয়েছে বিচ্ছেদে নয়, ক্ষমায়। আর এ কারণেই মুফাসসিরগণ বরাবর একে পড়েছেন পরিবারের ভেতরে থেকে সবর করার উপদেশ হিসেবে, পরিবার ছেড়ে পালানোর উপদেশ হিসেবে নয়।"
          },
          {
            "en": "They also note the direction of the test. It runs both ways: a parent may be tested through a child, and a child through a parent; a person may be tested by having wealth and equally by lacking it. Nothing in the verse says the test is failed by loving them. It is failed by choosing them over what Allah has kept with Him, and the verse names both sides so that the choice is at least a conscious one.",
            "bn": "তাঁরা এটাও লক্ষ করেন যে পরীক্ষাটা দুই দিক থেকেই আসে। বাবা-মা পরীক্ষিত হতে পারেন সন্তানকে দিয়ে, সন্তানও বাবা-মাকে দিয়ে। কেউ পরীক্ষিত হয় সম্পদ পেয়ে, কেউ ঠিক তেমনি সম্পদ না পেয়ে। আয়াতের কোথাও বলা নেই যে তাদের ভালোবাসলেই পরীক্ষায় ব্যর্থ হতে হয়। ব্যর্থতা আসে তখন, যখন আল্লাহ তাঁর কাছে যা রেখেছেন, তার চেয়ে তাদের বেছে নেওয়া হয়। আয়াত দুই দিকেরই নাম বলে দেয়, যাতে বাছাইটা অন্তত জেনে-বুঝে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "জীবনে যেভাবে আসে"
        },
        "p": [
          {
            "en": "In practice the test rarely announces itself. It shows up as the job that pays more and takes the family's evenings, the school chosen for its name, the silence kept in front of a relative because an inheritance is pending. It shows up as a father who will argue about a school fee and not about a missed prayer. The verse asks only that these moments be recognised as the fire in which something is being assayed.",
            "bn": "বাস্তবে পরীক্ষা খুব কমই নিজের পরিচয় দিয়ে আসে। আসে এমন চাকরির রূপে, যেখানে বেতন বেশি কিন্তু পরিবারের সন্ধ্যাগুলো চলে যায়। আসে এমন স্কুলের রূপে, যেটা বাছা হয়েছে শুধু নামডাকের জন্য। আসে এমন নীরবতার রূপে, যা কোনো আত্মীয়ের সামনে ধরে রাখা হয়, কারণ মিরাসের ভাগ এখনো ঝুলে আছে। আসে এমন বাবার রূপে, যিনি স্কুলের বেতন নিয়ে তর্ক করেন, কিন্তু কাজা হওয়া নামাজ নিয়ে একটা কথাও বলেন না। আয়াত শুধু এটুকু চায়: এসব মুহূর্তকে চিনে নিন। এ-ই সেই আগুন, যেখানে কিছু একটা যাচাই হচ্ছে।"
          },
          {
            "en": "The counterweight is deliberate use. Family becomes an investment rather than a distraction when it is turned towards what is with Allah: teaching a child to pray rather than only to succeed, keeping a household's income clean even when it costs, giving from what you would rather keep. And where 64:14 applies, where a family genuinely obstructs, the instruction is unusual and worth taking literally — pardon, overlook, forgive.",
            "bn": "এর বিপরীতে আছে জেনে-বুঝে কাজে লাগানো। পরিবারকে যখন আল্লাহর কাছে যা আছে তার দিকে ঘুরিয়ে দেওয়া হয়, তখন তা মন সরিয়ে নেওয়ার জিনিস না থেকে বিনিয়োগ হয়ে ওঠে। যেমন: সন্তানকে শুধু সফল হতে নয়, নামাজ পড়তেও শেখানো; লোকসান হলেও ঘরের আয় হালাল রাখা; যা নিজের কাছে রেখে দিতে মন চায়, তা থেকেই দান করা। আর যেখানে ৬৪:১৪ সত্যিই খাটে, যেখানে পরিবার সত্যিই বাধা হয়ে দাঁড়ায়, সেখানে নির্দেশটি অসাধারণ, আর তা আক্ষরিকভাবেই মানার মতো: মার্জনা করো, এড়িয়ে যাও, ক্ষমা করো।"
          }
        ]
      }
    ]
  }
});
