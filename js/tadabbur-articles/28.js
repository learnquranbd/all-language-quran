/**
 * Tadabbur long-form articles — surah 28.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "28:4": {
    "sections": [
      {
        "h": {
          "en": "Before the Story Begins",
          "bn": "গল্পের আগে জালিমের ছবি"
        },
        "p": [
          {
            "en": "The sura has just promised the news of Musa (AS) and Pharaoh told in truth, and the first thing it shows is not the prophet, nor his birth, but the ruler, drawn in a few strokes that add up to an indictment. Indeed, Pharaoh exalted himself in the land. Ibn Kathir reads the verb ala as takabbara wa-tajabbara wa-tagha: he was arrogant, he played the tyrant, and he transgressed every bound. The abridged Ibn Kathir renders the same word as an arrogant oppressor and tyrant. Before a single crime is named, the verb has already set him above the people and above every limit.",
            "bn": "সূরা এইমাত্র ওয়াদা করেছে মূসা (আঃ) ও ফিরআউনের সত্য সংবাদ শোনানোর, আর প্রথমেই সে দেখায় নবীকে নয়, তাঁর জন্মকেও নয়, দেখায় শাসককে, কয়েকটা টানে আঁকা এমন এক ছবি যা দাঁড়িয়ে যায় অভিযোগপত্রের মতো। নিশ্চয়ই ফিরআউন দেশে উদ্ধত হয়ে উঠেছিল। ইবন কাসীর 'আলা' ক্রিয়াটির অর্থ করেন তাকাব্বারা, তাজাব্বারা ও তাগা: সে অহংকার করল, জুলুমবাজ হয়ে উঠল, সব সীমা ছাড়িয়ে গেল। সংক্ষিপ্ত ইবন কাসীরে একই শব্দকে বলা হয়েছে অহংকারী এক অত্যাচারী ও স্বৈরাচারী। একটা অপরাধের নাম নেওয়ার আগেই ক্রিয়াটা তাকে বসিয়ে দিয়েছে মানুষের উপরে, আর সব সীমার উপরে।"
          },
          {
            "en": "At-Tabari gathers the early readings and they agree. He glosses the phrase as Pharaoh tyrannised in the land of Egypt and exalted himself, and he overpowered its people and subdued them until they acknowledged servitude to him. He cites as-Suddi for tajabbara, he played the tyrant, and Qatada for bagha, he wronged and overstepped. Al-Baghawi adds istakbara wa-tajabbara wa-taazzama: arrogance, tyranny, and self-magnifying. The land in question is Egypt, and the man has made himself its ceiling, the measure above which nothing and nobody is allowed to rise.",
            "bn": "তাবারী আগের বর্ণনাগুলো একত্র করেন, আর সেগুলো একমত। তিনি বাক্যটির ব্যাখ্যা করেন এভাবে, ফিরআউন মিসরের মাটিতে জুলুম করল আর উদ্ধত হয়ে উঠল, সে দেশের মানুষকে দাবিয়ে রাখল আর এমনভাবে কাবু করল যে তারা তার কাছে গোলামি মেনে নিল। তিনি তাজাব্বারা অর্থে সুদ্দীর কথা আনেন, মানে সে জুলুমবাজ হয়ে উঠল, আর বাগা অর্থে কাতাদার কথা, মানে সে অন্যায় করল ও সীমা লঙ্ঘন করল। বাগভী যোগ করেন ইস্তাকবারা, তাজাব্বারা ও তাআজ্জামা, অর্থাৎ অহংকার, জুলুম আর নিজেকে বড় বানানো। মাটিটা মিসরের, আর লোকটা নিজেকেই বানিয়ে ফেলেছে সেখানকার ছাদ, যার উপরে কাউকে ওঠার অনুমতি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Higher Than His Lord",
          "bn": "রবের চেয়ে উঁচুতে"
        },
        "p": [
          {
            "en": "Al-Qurtubi records two layers inside the exalting. Ibn Abbas (RA) and as-Suddi take ala as plain arrogance and tyranny. Qatada deepens it: he exalted himself above the worship of his Lord through his disbelief, and laid claim to lordship itself. A third reading ties the word to his crown, that by kingship and power he towered over everyone beneath him in the land. Put together, the arrogance is not merely social climbing over other men. It reaches upward and refuses God, which is why the same ruler will later ask his court whether they know of any lord for them besides himself.",
            "bn": "কুরতুবী এই উদ্ধত হওয়ার ভেতরে দুটি স্তর দেখান। ইবন আব্বাস (রাঃ) ও সুদ্দী 'আলা'-কে নেন সোজা অহংকার ও জুলুম অর্থে। কাতাদা আরও গভীরে যান, সে কুফরির মাধ্যমে নিজেকে তুলে ধরল রবের ইবাদতের ঊর্ধ্বে, আর রবুবিয়্যাতের দাবিই করে বসল। তৃতীয় এক পাঠ শব্দটিকে জুড়ে দেয় তার মুকুটের সঙ্গে, রাজত্ব আর ক্ষমতা দিয়ে সে দেশে তার নিচের সবার উপরে মাথা তুলল। সব মিলিয়ে এই অহংকার কেবল মানুষের উপর মানুষের চড়ে বসা নয়। এটা উপরের দিকে হাত বাড়ায় আর আল্লাহকে অস্বীকার করে, তাই তো এই শাসকই পরে দরবারে জিজ্ঞেস করবে, সে ছাড়া তাদের আর কোনো রব আছে কি না।"
          },
          {
            "en": "As-Sa'di draws the sharpest line of all. Pharaoh's height, he says, lay in his kingdom, his authority, his armies, and his tyranny, so that he became one of the people of highness in the earth, not one of the truly high. It is a distinction worth holding onto. There is an elevation that is only a man climbing over other men and calling the view the top. And there is the true highness that belongs to God alone, which no throne can borrow. Pharaoh seized the first kind and mistook it for the second, and the whole tragedy of the sura follows from that single error.",
            "bn": "সবচেয়ে ধারালো রেখাটা টানেন সাদী। তিনি বলেন, ফিরআউনের উচ্চতা ছিল তার রাজত্বে, তার কর্তৃত্বে, তার সৈন্যে আর তার জুলুমে, ফলে সে হয়ে উঠল দুনিয়ায় উঁচু হয়ে বসা লোকদের একজন, সত্যিকারের উঁচুদের একজন নয়। এই পার্থক্যটা ধরে রাখার মতো। একধরনের উঁচুতা আছে যা নিছক এক মানুষের অন্য মানুষের উপর চড়ে বসা, আর সেই দৃশ্যকেই চূড়া বলে ভাবা। আর আছে সত্যিকারের উচ্চতা, যা কেবল আল্লাহরই, কোনো সিংহাসন যা ধার করতে পারে না। ফিরআউন প্রথমটা ছিনিয়ে নিল আর ভাবল সেটাই দ্বিতীয়টা, গোটা সূরার বিপর্যয় নেমে আসে তার এই একটি ভুল থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A People Split Apart",
          "bn": "বিভক্ত এক জাতি"
        },
        "p": [
          {
            "en": "The second stroke follows at once: and he made its people into factions. The word is shiya. At-Tabari and Mujahid read it as firaq, sects and groups, a population broken into separated parts. Ibn Kathir explains them as asnaf, classes, each of which he turned to whatever part of his state's business he wanted done. Al-Baghawi and al-Qurtubi add that the sorting ran along ranks of service and forced labour, each group pressed into its own task. A people divided into managed classes cannot easily combine against the man who did the sorting.",
            "bn": "দ্বিতীয় টানটা আসে সঙ্গে সঙ্গে, আর সে দেশের মানুষকে নানা দলে ভাগ করে দিল। শব্দটা 'শিয়া'। তাবারী ও মুজাহিদ এর অর্থ করেন 'ফিরাক', মানে নানা দল ও উপদল, এক জনগোষ্ঠীকে আলাদা আলাদা টুকরোয় ভেঙে ফেলা। ইবন কাসীর এদের বলেন 'আসনাফ', মানে শ্রেণি, যার প্রত্যেকটিকে সে লাগিয়ে দিয়েছিল রাষ্ট্রের যে কাজে ইচ্ছা সেখানে। বাগভী ও কুরতুবী যোগ করেন, এই ভাগাভাগি চলত সেবা আর বেগার খাটুনির স্তর ধরে, প্রতিটি দলকে ঠেলে দেওয়া হতো নিজের কাজে। শ্রেণিতে ভাগ হয়ে দাবিয়ে রাখা একটা জাতি সহজে একজোট হতে পারে না তার বিরুদ্ধে, যে তাদের ভাগ করেছে।"
          },
          {
            "en": "Qatada, in at-Tabari's collection, spells the factions out by their fates: a group he slaughtered, a group he kept alive, a group he tortured, and a group he enslaved. The division was not neutral administration; it was the very method of control. As-Sa'di reads the same clause as a free hand, scattered groups among whom he did as his whim pleased and carried out whatever he willed of his coercion and force. Divide a people first, and every cruelty that comes after meets a population already too broken, and too busy surviving, to stand against him together.",
            "bn": "তাবারীর সংকলনে কাতাদা দলগুলোকে চিনিয়ে দেন তাদের পরিণতি দিয়ে, একটা দলকে সে জবাই করল, একটা দলকে বাঁচিয়ে রাখল, একটা দলকে কষ্ট দিল, আর একটা দলকে গোলাম বানাল। এই ভাগ করাটা নিরীহ কোনো প্রশাসন ছিল না, এটাই ছিল নিয়ন্ত্রণের আসল কৌশল। সাদী একই বাক্যকে পড়েন খোলা হাত হিসেবে, ছড়িয়ে থাকা দল, যাদের নিয়ে সে খেয়ালমতো যা খুশি করত আর জোর-জবরদস্তির যা ইচ্ছা তা-ই চালিয়ে দিত। আগে একটা জাতিকে ভাগ করে ফেলো, তারপর যে নিষ্ঠুরতাই আসুক, তা গিয়ে পড়ে এমন এক জনগোষ্ঠীর উপর, যারা আগে থেকেই ভেঙে পড়া, আর বেঁচে থাকার লড়াইয়ে এতটাই ব্যস্ত যে একসঙ্গে রুখে দাঁড়াতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The People Singled Out",
          "bn": "যে দলকে বেছে নিল"
        },
        "p": [
          {
            "en": "Oppressing a sector among them. Every commentator names the sector without hesitation: it is Bani Israil. The verb yastadif means to treat a people as weak, to grind them down and keep them low. At-Tabari reports, on Qatada's authority, that this weakening was in plain fact enslavement, that he enslaved a group of them. Al-Baghawi explains why the Qur'an calls the whole thing istidaf, a making-weak: because they had become unable to push the harm away from themselves. The one verb describes at once what was done to them and what it reduced them to.",
            "bn": "তাদের মধ্যকার একটি দলকে সে দুর্বল করে রাখত। প্রতিটি তাফসীরকার এই দলটিকে কোনো দ্বিধা ছাড়াই চিনিয়ে দেন, এরা বনী ইসরাইল। 'ইয়াসতাদইফ' ক্রিয়ার অর্থ কোনো জাতিকে দুর্বল গণ্য করা, তাদের পিষে ফেলা আর নিচু করে রাখা। তাবারী কাতাদার সূত্রে জানান, এই দুর্বল করে রাখাটা আসলে ছিল গোলাম বানানো, সে তাদের একটা দলকে দাস বানিয়ে রেখেছিল। বাগভী ব্যাখ্যা করেন, কুরআন গোটা ব্যাপারটাকে কেন 'ইসতিদআফ' বা দুর্বল বানানো বলছে, কারণ তারা নিজেদের থেকে এই ক্ষতি ঠেকানোর মতো অক্ষম হয়ে পড়েছিল। একটিমাত্র ক্রিয়া একসঙ্গে বলে দেয় তাদের উপর কী করা হলো, আর তা তাদের কী বানিয়ে ছাড়ল।"
          },
          {
            "en": "As-Sa'di presses on the bitter irony. This sector, he writes, was Bani Israil, whom God had favoured over the worlds, whom Pharaoh ought to have honoured and held in esteem; but instead he treated them as weak, seeing that they had no strength to prevent what he intended for them, so he gave them no weight and no thought. Ibn Kathir agrees that at that time they were the best of the people of their age, and yet this stubborn tyrant king overpowered them, setting them to the most degrading work and driving them at hard labour night and day.",
            "bn": "সাদী তুলে ধরেন তেতো এক পরিহাস। তিনি লেখেন, এই দলটি ছিল বনী ইসরাইল, যাদের আল্লাহ জগতের সবার উপরে মর্যাদা দিয়েছিলেন, ফিরআউনের উচিত ছিল তাদের সম্মান করা আর মর্যাদায় রাখা, অথচ সে উল্টো তাদের দুর্বল গণ্য করল। সে দেখল, তার মতলব ঠেকানোর মতো কোনো শক্তি তাদের নেই, তাই তাদের কোনো দামই দিল না, তাদের অবস্থা নিয়ে ভাবলও না। ইবন কাসীর একমত, সে সময় তারাই ছিল যুগের সেরা মানুষ, তবু এই একগুঁয়ে জালিম বাদশাহ তাদের দাবিয়ে রাখল, সবচেয়ে হীন কাজে লাগাল আর দিনরাত কঠিন খাটুনিতে খাটাল।"
          }
        ]
      },
      {
        "h": {
          "en": "Sons Killed, Daughters Kept",
          "bn": "ছেলেদের হত্যা, মেয়েদের বন্দি"
        },
        "p": [
          {
            "en": "Now the verse turns specific and terrible: slaughtering their sons and keeping their women alive. The second half can sound almost like a mercy, as though the girls at least were spared. The tafsir forbids that reading outright. Ibn Kathir states the purpose plainly: he killed the sons and kept the women alive to humiliate them and to debase them, and out of fear that the boy foretold to end his reign might be born among them. The sparing was never compassion. It was the other face of the very same contempt that drove the knife.",
            "bn": "এবার আয়াতটা হয়ে ওঠে সুনির্দিষ্ট আর ভয়ংকর, তাদের ছেলেদের জবাই করা আর নারীদের বাঁচিয়ে রাখা। শেষ অংশটা শুনতে প্রায় দয়ার মতো লাগতে পারে, যেন অন্তত মেয়েদের তো রেহাই দেওয়া হলো। তাফসীর এই পাঠ সরাসরি নাকচ করে দেয়। ইবন কাসীর উদ্দেশ্যটা খোলাখুলি বলে দেন, সে ছেলেদের হত্যা করত আর নারীদের বাঁচিয়ে রাখত তাদের অপমান করতে, হেয় করতে, আর এই ভয়ে যে তাদের ভেতর সেই ছেলেটা জন্মাতে পারে, যার কথা বলা হয়েছিল তার রাজত্বের শেষ আনবে বলে। এই বাঁচিয়ে রাখা কখনোই করুণা ছিল না। এ ছিল সেই একই ঘৃণার অন্য পিঠ, যে ঘৃণা ছুরি চালিয়েছিল।"
          },
          {
            "en": "Al-Muyassar removes all doubt by glossing the very word: yastahyi nisaahum, it says, means and he enslaved their women. To keep them alive was to keep them for servitude. Al-Baghawi folds the whole clause under the single heading of istidaf, the making-weak: killing the boys and holding the women was itself the crushing, because a people stripped of its sons and of its daughters' freedom can no longer stand upright. Nowhere in these commentators is the surviving woman a figure of rescue. She is a captive, and her survival is counted among the harms done to her people, not among the reliefs.",
            "bn": "মুয়াসসার শব্দটিরই অর্থ করে সব সন্দেহ মিটিয়ে দেয়, 'ইয়াসতাহয়ী নিসাআহুম' মানে সে তাদের নারীদের গোলাম বানাত। বাঁচিয়ে রাখা মানে ছিল তাদের দাসত্বের জন্য রেখে দেওয়া। বাগভী গোটা বাক্যটাকে এক শিরোনামেই আনেন, 'ইসতিদআফ' বা দুর্বল বানানো, ছেলেদের হত্যা আর নারীদের আটকে রাখা, এটাই ছিল পিষে ফেলা, কারণ যে জাতির ছেলেরা কেড়ে নেওয়া হয় আর মেয়েদের স্বাধীনতা কেড়ে নেওয়া হয়, সে জাতি আর সোজা হয়ে দাঁড়াতে পারে না। এই তাফসীরকারদের কোথাও বেঁচে যাওয়া নারী উদ্ধার পাওয়া কেউ নয়। সে বন্দি, আর তার বেঁচে থাকাকে গোনা হয় তার জাতির উপর নেমে আসা ক্ষতির মধ্যে, রেহাইয়ের মধ্যে নয়।"
          },
          {
            "en": "Why the boys in particular? As-Sa'di gives the tyrant's fear: that they would multiply and overwhelm him in his land until the kingdom became theirs. At-Tabari, through as-Suddi, tells of a dream, a fire advancing from Jerusalem that burned the Egyptians and spared the Israelites, which his soothsayers read as a coming man who would undo Egypt, so he ordered the newborn boys killed. Al-Qurtubi records the same warning and then quotes az-Zajjaj's wonder at the folly of it: if the seer spoke true, killing could not avert the decree; and if he lied, the killing had no point at all.",
            "bn": "ছেলেদেরই কেন বিশেষভাবে? সাদী জানান জালিমের ভয়টা, তারা বেড়ে গিয়ে তার দেশে তাকে ভাসিয়ে দেবে, আর রাজত্ব হয়ে যাবে তাদের। তাবারী সুদ্দীর সূত্রে এক স্বপ্নের কথা বলেন, বায়তুল মুকাদ্দাসের দিক থেকে এগিয়ে আসা এক আগুন, যা মিসরীয়দের পুড়িয়ে দিল আর বনী ইসরাইলকে রেহাই দিল, তার গণকেরা এর অর্থ করল এক আগন্তুক পুরুষ, যে মিসরকে ধ্বংস করবে, তাই সে নবজাতক ছেলেদের হত্যার হুকুম দিল। কুরতুবী একই সতর্কবাণী উল্লেখ করেন, আর তারপর যাজ্জাজের বিস্ময় তুলে ধরেন এর বোকামির দিকে তাকিয়ে, গণক যদি সত্য বলে থাকে, হত্যা করে তাকদির ঠেকানো যাবে না, আর যদি মিথ্যা বলে থাকে, তবে হত্যার কোনো মানেই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Named Among the Corrupters",
          "bn": "ফাসাদকারীদের দলে গণ্য"
        },
        "p": [
          {
            "en": "The verse ends by sentencing him in its own words: indeed, he was of the corrupters. At-Tabari unpacks the charge into its parts. Pharaoh corrupted the earth, he says, by killing those it was not his to kill, by enslaving those it was not his to enslave, by lording it over the people of the land, and by setting himself in arrogance above the worship of his Lord. The single word mufsid gathers the murder, the slavery, the tyranny, and the denial of God, and binds them into a name the verse itself pronounces over him.",
            "bn": "আয়াতটা শেষ হয় নিজের ভাষাতেই তাকে রায় শুনিয়ে, নিশ্চয়ই সে ছিল ফাসাদ সৃষ্টিকারীদের একজন। তাবারী এই অভিযোগকে ভেঙে তার অংশগুলো দেখান। তিনি বলেন, ফিরআউন জমিনে ফাসাদ ছড়াল, যাদের হত্যা করার অধিকার তার ছিল না তাদের হত্যা করে, যাদের গোলাম বানানোর অধিকার তার ছিল না তাদের গোলাম বানিয়ে, দেশের মানুষের উপর কর্তৃত্ব ফলিয়ে, আর অহংকারে রবের ইবাদতের ঊর্ধ্বে নিজেকে বসিয়ে। একটিমাত্র শব্দ 'মুফসিদ' জড়ো করে খুন, দাসত্ব, জুলুম আর আল্লাহকে অস্বীকার, আর সব বেঁধে ফেলে এমন এক নামে, যে নাম আয়াতটা নিজেই তার উপর উচ্চারণ করে।"
          },
          {
            "en": "As-Sa'di reads the corrupters as those who have no intent toward setting right the religion or setting right the world, and he counts the whole of Pharaoh's conduct among his corruption in the land. Al-Qurtubi is terse: he was of the corrupters in the earth, by his deeds, his sins, and his tyranny. Notice what the verdict does. It does not merely report the things Pharaoh did; it files the man himself under a category, and the category is God's own judgement passed upon him, long before the sea closes over his head at the end of the account.",
            "bn": "সাদী ফাসাদকারীদের বোঝেন তাদের হিসেবে, যাদের দ্বীন ঠিক করার বা দুনিয়া ঠিক করার কোনো মতলবই নেই, আর ফিরআউনের গোটা আচরণকেই তিনি গোনেন জমিনে তার ফাসাদের মধ্যে। কুরতুবী সংক্ষেপে বলেন, সে ছিল জমিনে ফাসাদকারীদের একজন, তার কাজ দিয়ে, তার গুনাহ দিয়ে আর তার জুলুম দিয়ে। খেয়াল করুন রায়টা কী করছে। এটা কেবল ফিরআউন যা করেছে তা জানিয়ে দেয় না, এটা লোকটাকেই ফেলে দেয় এক শ্রেণিতে, আর সেই শ্রেণিই আল্লাহর নিজের রায় তার উপর, কাহিনির শেষে যে সমুদ্র তার মাথার উপর বন্ধ হয়ে আসবে তারও অনেক আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Licence Against the Living",
          "bn": "জীবিতদের বিরুদ্ধে কোনো অনুমতি নয়"
        },
        "p": [
          {
            "en": "This must be said plainly, in both tongues. The verse condemns a tyrant and the regime he built; it condemns arrogance, division, and the slaughter of the innocent. It does not condemn Egyptians, nor any nation, nor any people living now. The Copts of the story are not on trial in this ayah; a single ruler and his instruments of oppression are. The Qur'an is naming a kind of wrongdoing, not a race, a country, or a flag: the verse describes what the text describes, and licenses nothing against any living person or community.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, দুই ভাষাতেই। আয়াতটা এক জালিমকে আর সে যে শাসনব্যবস্থা গড়েছিল তাকে নিন্দা করে, নিন্দা করে অহংকার, বিভেদ আর নিরপরাধের হত্যাকে। এটা মিসরীয়দের নিন্দা করে না, কোনো জাতিকে নয়, আজ বেঁচে থাকা কোনো মানুষকেও নয়। কাহিনির কিবতীরা এই আয়াতে বিচারের কাঠগড়ায় নেই, কাঠগড়ায় আছে একজন শাসক আর তার জুলুমের যন্ত্রগুলো। কুরআন এক ধরনের অন্যায়ের নাম নিচ্ছে, কোনো বর্ণ, দেশ বা পতাকার নয়, আয়াতটা যা বর্ণনা করার তা-ই বর্ণনা করে, আর জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কাউকে কোনো অনুমতি দেয় না।"
          },
          {
            "en": "And it arms nobody. That Pharaoh has become the Qur'an's byword for tyranny does not license anybody to pin the name Pharaoh onto a living community, a neighbour, or an opponent, and then treat them as fair game. The verse hands its reader a mirror, not a brand to burn into someone else. Its first and nearest use is to examine the tyranny I might be running, or quietly excusing, before it is ever turned outward toward anyone at all. A reader who uses it only to accuse others has read past its warning.",
            "bn": "আর এটা কাউকে কোনো অস্ত্র জোগায় না। ফিরআউন কুরআনে জুলুমের প্রতীক হয়ে উঠেছে বলে এই অনুমতি কারো জন্মায় না যে, 'ফিরআউন' নামটা কোনো জীবিত জনগোষ্ঠী, প্রতিবেশী বা প্রতিপক্ষের গায়ে সেঁটে দিয়ে তাদের শিকার বানানো যাবে। আয়াতটা পাঠকের হাতে এক আয়না তুলে দেয়, অন্যের গায়ে দাগানোর কোনো ছাপ নয়। এর প্রথম আর সবচেয়ে কাছের কাজ হলো সেই জুলুম যাচাই করা, যা আমি হয়তো নিজেই চালাচ্ছি বা চুপচাপ মেনে নিচ্ছি, অন্যের দিকে আঙুল তোলার আগে। যে পাঠক একে শুধু অন্যকে দোষ দিতে ব্যবহার করে, সে এর সতর্কবাণী পেরিয়ে পড়ে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Plan Beneath His Power",
          "bn": "ক্ষমতার নিচে এক পরিকল্পনা"
        },
        "p": [
          {
            "en": "Read as that mirror, the verse is a diagnosis of oppression that does not age. The shape is always the same: a self that climbs above every limit, a people broken into manageable parts, a chosen group ground down, violence aimed at its weakest, and a cruelty that learns to call itself by a kinder name. Wherever that pattern appears, in an empire or in a single household, the Qur'an has already seen it and has already given it the name it deserves, so that the believer is never left without the words to call it what it is.",
            "bn": "সেই আয়না হিসেবে পড়লে আয়াতটা জুলুমের এমন এক নির্ণয়, যা পুরনো হয় না। চেহারাটা সব সময় একই, এক সত্তা যে সব সীমার উপরে উঠে বসে, এক জাতি যাকে সামলানোর মতো টুকরোয় ভাঙা হয়, বেছে নেওয়া এক দলকে পিষে ফেলা হয়, তার দুর্বলতমদের দিকে তাক করা হয় সহিংসতা, আর এমন এক নিষ্ঠুরতা যা নিজেকে নরম নামে ডাকতে শেখে। এই ছকটা যেখানেই দেখা দিক, কোনো সাম্রাজ্যে হোক বা একটা ঘরে, কুরআন তা আগেই দেখে ফেলেছে আর তার প্রাপ্য নামটা আগেই দিয়ে দিয়েছে, যাতে মুমিন কখনো এটাকে তার আসল নামে ডাকার ভাষা হারিয়ে না ফেলে।"
          },
          {
            "en": "But the portrait is not the last word, for the verse is only the opening of a reversal. Even as Pharaoh towers at the full height of his power, the account at once turns to those he has crushed and to a plan already set in motion over his head, a counter-current the Qur'an will unfold in 28:5 and 28:6. Ibn Kathir notes that for all his precautions the tyrant could not touch the decree of God, for when the term of God arrives it cannot be delayed. The man took his power for the ceiling. It was only the floor beneath a plan he could not see.",
            "bn": "কিন্তু এই ছবিই শেষ কথা নয়, কারণ আয়াতটা তো কেবল এক উল্টে যাওয়ার সূচনা। ফিরআউন যখন তার ক্ষমতার পুরো উচ্চতায় দাঁড়িয়ে, কাহিনি তখনই মুখ ফেরায় তাদের দিকে যাদের সে পিষে ফেলেছে, আর তার মাথার উপরে ততক্ষণে চালু হয়ে যাওয়া এক পরিকল্পনার দিকে, এই উল্টো স্রোত কুরআন খুলে দেখাবে ২৮:৫ ও ২৮:৬ আয়াতে। ইবন কাসীর বলেন, এত সাবধানতা সত্ত্বেও জালিম আল্লাহর ফয়সালা ছুঁতে পারল না, কারণ আল্লাহর নির্ধারিত সময় এসে গেলে তা আর পেছানো যায় না। লোকটা তার ক্ষমতাকে ভেবেছিল ছাদ। আসলে তা ছিল এমন এক পরিকল্পনার নিচের মেঝে, যা সে দেখতেই পায়নি।"
          },
          {
            "en": "The Prophet's own words sharpen the warning to every tyrant. Abu Musa (RA) reported that the Messenger of God ﷺ said, Indeed, God gives respite to the wrongdoer, but when He seizes him He does not let him escape. Then he recited: Such is the seizure of your Lord when He seizes the towns while they are doing wrong; indeed, His seizure is painful and severe (11:102). Al-Bukhari records it in his Sahih. Pharaoh's long and unhurried reign was never God overlooking him; it was the respite before the grip that, once it closes, never loosens again.",
            "bn": "নবী ﷺ-এর নিজের কথা প্রতিটি জালিমের জন্য সতর্কবাণীকে আরও ধারালো করে। আবূ মূসা (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন, নিশ্চয়ই আল্লাহ জালিমকে অবকাশ দেন, কিন্তু যখন তাকে পাকড়াও করেন তখন আর ছাড়েন না। এরপর তিনি তিলাওয়াত করলেন, আর এভাবেই তোমার রব পাকড়াও করেন যখন তিনি জনপদগুলোকে পাকড়াও করেন তাদের জুলুম অবস্থায়, নিশ্চয়ই তাঁর পাকড়াও বড় যন্ত্রণাদায়ক, বড় কঠিন (১১:১০২)। বুখারী এটি তাঁর সহীহ-তে বর্ণনা করেছেন। ফিরআউনের দীর্ঘ আর নিশ্চিন্ত রাজত্ব কখনোই আল্লাহর তাকে উপেক্ষা করা ছিল না, এ ছিল সেই অবকাশ, যা আসে সেই পাকড়াওয়ের আগে, যা একবার বন্ধ হলে আর কখনো আলগা হয় না।"
          }
        ]
      }
    ]
  },
  "28:15": {
    "sections": [
      {
        "h": {
          "en": "A City Caught Off Guard",
          "bn": "যখন শহর অন্যমনস্ক"
        },
        "p": [
          {
            "en": "The story turns on a single moment, and the verse sets its scene with care: Moses entered the city at a time when its people were heedless. At-Tabari names the place as Memphis, Manf, one of the cities of Egypt. The hour he reads as midday, the time of the noon rest, when the markets have shut and the streets stand empty. Ibn Abbas is reported with this reading, and with another as well, that it was the dim hour between the sunset prayer and the night. Qatada and Said ibn Jubayr settle on the midday siesta.",
            "bn": "গোটা কাহিনি ঘুরে দাঁড়ায় একটি মুহূর্তের ওপর, আর আয়াতটি সেই দৃশ্যটা যত্ন করে এঁকে দেয়: মূসা (আঃ) শহরে ঢুকলেন এমন সময়ে যখন সেখানকার লোকেরা অন্যমনস্ক। তাবারী জায়গাটির নাম বলেন মানফ, মিসরের একটি নগর। সময়টা তিনি পড়েন দুপুর বলে, দিনের মাঝামাঝি বিশ্রামের বেলা, যখন বাজার বন্ধ আর পথঘাট ফাঁকা। ইবন আব্বাস থেকে এই বর্ণনা এসেছে, আবার আরেকটিও এসেছে, মাগরিব আর এশার মাঝের আবছা সময়টা। কাতাদা আর সাঈদ ইবন জুবায়ের দুপুরের বিশ্রামের বেলাটাকেই স্থির করেন।"
          },
          {
            "en": "Why come at such an hour? The commentators give three answers, and the verse holds them all. As-Suddi relates that Moses had been raised in Pharaoh's house, dressed as its people dressed and even called the son of Pharaoh; he followed Pharaoh's procession and reached Manf at the hour of rest. Ibn Ishaq has him moving in secret and afraid, having already broken with Pharaoh's religion. Ibn Zayd reads the heedlessness as forgetting: Pharaoh had driven him out, and the years had wiped his name from their minds. The Muyassar adds the plain fact the story rests upon: all of this was before his prophethood.",
            "bn": "এমন সময়ে আসা কেন? তাফসীরকারেরা তিনটি জবাব দেন, আর আয়াতটি তিনটিকেই ধরে রাখে। সুদ্দী বর্ণনা করেন, মূসা (আঃ) বড় হয়েছিলেন ফেরাউনের ঘরে, তাদের মতোই পোশাক পরতেন, এমনকি তাঁকে ফেরাউনের ছেলে বলেও ডাকা হতো; একদিন তিনি ফেরাউনের শোভাযাত্রার পিছু নিলেন আর বিশ্রামের বেলায় মানফে গিয়ে পৌঁছলেন। ইবন ইসহাকের বর্ণনায় তিনি চলছিলেন গোপনে আর ভয়ে ভয়ে, কারণ ফেরাউনের দ্বীন তিনি আগেই ছেড়ে দিয়েছিলেন। ইবন যায়েদ এই অন্যমনস্কতাকে পড়েন ভুলে যাওয়া অর্থে: ফেরাউন তাঁকে বের করে দিয়েছিল, আর বছরের পর বছরে লোকেরা তাঁর নামটাই মন থেকে মুছে ফেলেছিল। মুয়াসসার জুড়ে দেন সেই সোজা কথাটা, যার ওপর পরের আয়াতগুলো দাঁড়িয়ে আছে: এ সবকিছুই নবুয়তের আগের ঘটনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Men, Two Sides",
          "bn": "দুই মানুষ, দুই পক্ষ"
        },
        "p": [
          {
            "en": "Inside the quiet city he came upon a scene: and he found there two men fighting. At-Tabari and as-Sa'di gloss the verb as quarrelling and trading blows. One of them, the verse says, was of his faction and the other of his enemy. On who these were the commentators agree. Ibn Abbas, Qatada, as-Suddi and Muhammad ibn Ishaq all read the man of his faction as an Israelite, one of Moses' own people, and the man of his enemy as a Copt, from the people of Pharaoh.",
            "bn": "নিস্তব্ধ শহরের ভেতরে তিনি এক দৃশ্যের মুখোমুখি হলেন: সেখানে দুজন লোককে তিনি মারামারিতে লিপ্ত পেলেন। তাবারী আর সা'দী ক্রিয়াটির অর্থ করেন ঝগড়া আর হাতাহাতি। এদের একজন, আয়াত বলছে, তাঁর দলের আর অন্যজন তাঁর শত্রুপক্ষের। এরা কারা ছিল, তা নিয়ে তাফসীরকারেরা একমত। ইবন আব্বাস, কাতাদা, সুদ্দী আর মুহাম্মদ ইবন ইসহাক সকলেই তাঁর দলের লোকটিকে পড়েন ইসরাইলি বলে, মূসা (আঃ)-এর নিজের সম্প্রদায়ের একজন, আর শত্রুপক্ষের লোকটিকে পড়েন কিবতি বলে, ফেরাউনের লোকদের একজন।"
          },
          {
            "en": "What were they fighting over? Qatada, quoted by al-Qurtubi, says the Copt was trying to press the Israelite into carrying firewood to Pharaoh's kitchen, and the man refused and called out for Moses. Said ibn Jubayr adds that the Copt was a baker for Pharaoh. Al-Baghawi sets the quarrel in its larger frame: by this time no one of Pharaoh's house could wrong an Israelite with impunity, for the children of Israel had gained standing through Moses, whom they knew to be one of their own.",
            "bn": "তারা লড়ছিল কী নিয়ে? কুরতুবীর উদ্ধৃত কাতাদা বলেন, কিবতি লোকটি ইসরাইলিকে জোর করে ফেরাউনের রান্নাঘরে জ্বালানি কাঠ বইতে বাধ্য করতে চাইছিল, আর লোকটি অস্বীকার করে মূসা (আঃ)-কে ডাক দিল। সাঈদ ইবন জুবায়ের জুড়ে দেন, কিবতি লোকটি ছিল ফেরাউনের রুটি-প্রস্তুতকারী। বাগাভী ঝগড়াটাকে বসান আরও বড় ছবির ভেতরে: ততদিনে ফেরাউনের ঘরের কেউ আর শাস্তি ছাড়া কোনো ইসরাইলির ওপর জুলুম করতে পারত না, কারণ মূসা (আঃ)-এর কারণে বনী ইসরাইল এক মর্যাদা পেয়ে গিয়েছিল, আর তারা জানত তিনি তাদেরই একজন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Cry for Rescue",
          "bn": "সাহায্যের আর্তি"
        },
        "p": [
          {
            "en": "Then the man from his faction called to him for help against the man from his enemy. The word the Qur'an uses is istighatha, and al-Qurtubi defines it simply as the seeking of rescue and aid. He then states the principle that makes Moses' response more than a brawl: coming to the aid of the wronged, he writes, is a duty binding in every religion and a charge laid upon all peoples, obligatory in all the revealed laws. Moses did not wade into a random fight. He answered a cry raised by the oppressed against his oppressor.",
            "bn": "তখন তাঁর দলের লোকটি শত্রুপক্ষের লোকটির বিরুদ্ধে তাঁর কাছে সাহায্য চাইল। কুরআন এখানে যে শব্দটি ব্যবহার করে তা হলো ইসতিগাসা, আর কুরতুবী এর সোজা অর্থ করেন উদ্ধার ও সাহায্য চাওয়া। এরপর তিনি সেই নীতিটি বলে দেন, যা মূসা (আঃ)-এর সাড়াকে নিছক হাঙ্গামার চেয়ে বড় করে তোলে: মজলুমের পাশে দাঁড়ানো, তিনি লেখেন, প্রতিটি দ্বীনের অবশ্যকর্তব্য আর সব জাতির ওপর অর্পিত এক দায়িত্ব, সব শরীয়তেই ফরজ। মূসা (আঃ) কোনো এলোমেলো মারামারিতে ঝাঁপিয়ে পড়েননি। তিনি সাড়া দিয়েছিলেন জালিমের বিরুদ্ধে মজলুমের তোলা এক আর্তিতে।"
          },
          {
            "en": "As-Sa'di reads the Israelite's appeal as a sign of something more. That the man turned to Moses at all, he says, shows that Moses had reached a station people feared and from which, as someone close to the royal house, rescue could be hoped for. Al-Baghawi describes Moses' anger rising as the Copt laid hands on the weaker man, for the Copt knew Moses' place among the children of Israel. Moses first told him plainly to let the man go; the Copt answered with a threat, and the quarrel sharpened.",
            "bn": "সা'দী ইসরাইলির এই আবেদনকে পড়েন আরও কিছুর ইশারা হিসেবে। লোকটি যে মূসা (আঃ)-এর দিকেই ফিরল, এটাই দেখায়, তিনি এমন এক মর্যাদায় পৌঁছেছিলেন যাকে লোকে ভয় পেত আর রাজপরিবারের ঘনিষ্ঠ কারও কাছ থেকে উদ্ধারের আশা করত। বাগাভী বর্ণনা করেন, কিবতি দুর্বল লোকটির গায়ে হাত তুলতেই মূসা (আঃ)-এর রাগ চড়ে গেল, কারণ কিবতি জানত বনী ইসরাইলের কাছে মূসা (আঃ)-এর স্থান কোথায়। মূসা (আঃ) প্রথমে তাকে সাফ বললেন লোকটিকে ছেড়ে দিতে; কিবতি জবাব দিল হুমকি দিয়ে, আর ঝগড়াটা তীব্র হয়ে উঠল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Single Blow",
          "bn": "একটিমাত্র আঘাত"
        },
        "p": [
          {
            "en": "So Moses struck him. The verb is wakaza, and Mujahid explains it as a punch with the clenched fist. Qatada preserves a second report, that it was with a staff Moses had in his hand, though most of the chains settle on the fist. Al-Qurtubi gathers a whole cluster of near-synonyms around the word — wakz, lakz, lahz, lahd — and binds them to one meaning: a blow struck with the gathered fist to the chest. Ibn Mas'ud is reported to have read the word as falakazahu, which carries the same sense.",
            "bn": "তখন মূসা (আঃ) তাকে আঘাত করলেন। ক্রিয়াটি হলো ওয়াকাজা, আর মুজাহিদ এর ব্যাখ্যা করেন মুঠো করা হাতের ঘুসি বলে। কাতাদা আরেকটি বর্ণনা রক্ষা করেন, মূসা (আঃ)-এর হাতে থাকা লাঠি দিয়ে, যদিও বেশির ভাগ সূত্র ঘুসির ওপরেই স্থির হয়। কুরতুবী শব্দটির চারপাশে কাছাকাছি অর্থের একগুচ্ছ শব্দ জড়ো করেন, ওয়াকজ, লাকজ, লাহজ, লাহদ, আর সবগুলোকে এক অর্থে বাঁধেন: বুকের ওপর মুঠো হাতে মারা এক ঘা। ইবন মাসউদ থেকে বর্ণিত আছে যে তিনি শব্দটি পড়তেন ফালাকাজাহু, যার অর্থ একই।"
          },
          {
            "en": "Then he finished him, fa-qada ʿalayhi. As-Sa'di explains that the one blow killed the man, so forceful was it and so great was Moses' strength. But here the commentators grow careful, and their care is the whole weight of the verse. Qatada says it outright: Moses, the prophet of God, did not intend to kill him. Ibn Ishaq says he killed him without meaning to kill him. Al-Qurtubi gives the same: Moses did this not wanting the man dead, intending only to push him off, and the man's life was in the blow.",
            "bn": "তারপর তিনি তাকে শেষ করে ফেললেন, ফাকাদা আলাইহি। সা'দী ব্যাখ্যা করেন, ওই একটি আঘাতেই লোকটি মারা গেল, এতই জোরালো ছিল সেটা আর এতই প্রবল ছিল মূসা (আঃ)-এর শক্তি। কিন্তু এখানে তাফসীরকারেরা সাবধান হয়ে ওঠেন, আর তাঁদের সেই সাবধানতাই আয়াতটির গোটা ভার। কাতাদা সোজাসুজি বলেন: মূসা (আঃ), আল্লাহর নবী, তাকে হত্যা করার ইচ্ছা করেননি। ইবন ইসহাক বলেন, তিনি হত্যা করার ইচ্ছা ছাড়াই তাকে মেরে ফেললেন। কুরতুবীও একই কথা বলেন: মূসা (আঃ) লোকটির মৃত্যু চাননি, কেবল তাকে ঠেলে সরাতে চেয়েছিলেন, আর ওই আঘাতেই প্রাণটা গেল।"
          },
          {
            "en": "Not one of the commentators fetched for this verse reads the death as a killing Moses set out to commit. Al-Baghawi says plainly that Moses regretted it, that killing was never his aim, and relates that he buried the man in the sand. The distinction matters: this was not a deliberate slaying but a single blow, struck in the defense of a man being wronged, that ended in a death he did not will. That is how the mufassirun frame it, with one voice, and it is the frame the rest of the passage keeps.",
            "bn": "এই আয়াতের জন্য আনা তাফসীরকারদের কেউই এই মৃত্যুকে এমন হত্যা হিসেবে পড়েন না, যা মূসা (আঃ) করতে চেয়ে করেছিলেন। বাগাভী সাফ বলেন, মূসা (আঃ) অনুতপ্ত হলেন, হত্যা করা কখনো তাঁর উদ্দেশ্য ছিল না, আর তিনি বর্ণনা করেন যে তিনি লোকটিকে বালিতে পুঁতে দিলেন। পার্থক্যটা গুরুত্বপূর্ণ: এটা ছিল না ইচ্ছাকৃত হত্যা, বরং জুলুমের শিকার এক মানুষকে বাঁচাতে মারা একটিমাত্র ঘা, যা গিয়ে ঠেকল এমন এক মৃত্যুতে যা তিনি চাননি। মুফাসসিরগণ এভাবেই, একসুরে, ব্যাপারটা দাঁড় করান, আর গোটা অনুচ্ছেদ এই কাঠামোই ধরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming It Satan's Work",
          "bn": "একে শয়তানের কাজ বলা"
        },
        "p": [
          {
            "en": "Moses looked at what had happened and said, this is from the work of Satan. At-Tabari unfolds the sense: Moses meant that this killing had come about through Satan's prompting, in that he stirred up his anger until he struck the man and the man died of the blow. The Muyassar uses almost the same words, that Satan inflamed his anger until he struck and the man perished. As-Sa'di hears in the phrase Satan's adorning and whispering, the quiet work by which a wrong is made to look like a thing worth doing.",
            "bn": "মূসা (আঃ) যা ঘটে গেল তার দিকে তাকিয়ে বললেন, এ শয়তানের কাজ। তাবারী অর্থটা খুলে দেন: মূসা (আঃ) বোঝাতে চাইলেন, এই হত্যা ঘটেছে শয়তানের প্ররোচনায়, সে এমনভাবে তাঁর রাগ উসকে দিল যে তিনি লোকটিকে মারলেন আর সে সেই আঘাতে মারা গেল। মুয়াসসার প্রায় একই কথা বলে, শয়তান তাঁর রাগ জ্বালিয়ে দিল যতক্ষণ না তিনি আঘাত করলেন আর লোকটি নিঃশেষ হলো। সা'দী এই কথার ভেতরে শোনেন শয়তানের সাজিয়ে দেওয়া আর কুমন্ত্রণা, সেই নীরব কারসাজি যা দিয়ে একটা অন্যায়কে করার মতো কাজ বলে দেখানো হয়।"
          },
          {
            "en": "Indeed he is a plain, misleading enemy. At-Tabari reads this as Moses naming Satan for what he is: an open enemy to the children of Adam, leading them from the path of right guidance by dressing ugly deeds in fair colours, and whose enmity has been plain from of old. As-Sa'di notes that Moses felt remorse for what had issued from him. These are the words of a God-fearing man naming the snare he was caught in, not a boast and not a cold confession, but grief reaching at once for its true cause.",
            "bn": "নিশ্চয় সে প্রকাশ্য শত্রু, পথভ্রষ্টকারী। তাবারী এটিকে পড়েন মূসা (আঃ)-এর শয়তানকে তার আসল পরিচয়ে চিনিয়ে দেওয়া হিসেবে: আদম-সন্তানের প্রকাশ্য এক শত্রু, যে মন্দ কাজগুলোকে সুন্দর রঙে সাজিয়ে তাদের সঠিক পথ থেকে সরিয়ে দেয়, আর যার শত্রুতা বহু আগে থেকেই স্পষ্ট। সা'দী উল্লেখ করেন, তাঁর থেকে যা বেরিয়ে গেল তার জন্য মূসা (আঃ) অনুশোচনা করলেন। এগুলো এক আল্লাহভীরু মানুষের কথা, যিনি যে ফাঁদে ধরা পড়েছিলেন তার নাম ধরিয়ে দিচ্ছেন। এ কোনো বড়াই নয়, নিছক ঠান্ডা স্বীকারোক্তিও নয়, বরং এক বেদনা যা সঙ্গে সঙ্গে তার আসল কারণটা খুঁজে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Call Came",
          "bn": "নবুয়তের আগের ঘটনা"
        },
        "p": [
          {
            "en": "The scholars place this whole episode before Moses received prophethood, and the Muyassar says so in as many words. Here a real difference opens among the commentators, and it is worth keeping as a difference. The author of Ma'arif al-Qur'an, following Ibn Ishaq and Ibn Zaid, reads his faction to mean followers who had begun to listen to his call, which would set the killing after he had started to preach. The Muyassar, by contrast, places the entire event before the call came. The fetched commentators do not resolve this against one another, and neither will we.",
            "bn": "আলেমগণ গোটা ঘটনাটিকে রাখেন মূসা (আঃ)-এর নবুয়ত পাওয়ার আগে, আর মুয়াসসার সে কথা স্পষ্ট ভাষায় বলে দেয়। এখানে তাফসীরকারদের মধ্যে একটা সত্যিকারের মতভেদ খুলে যায়, আর সেটাকে মতভেদ হিসেবেই রেখে দেওয়া উচিত। মাআরিফুল কুরআনের লেখক, ইবন ইসহাক আর ইবন যায়েদকে অনুসরণ করে, 'তাঁর দল' কথাটিকে পড়েন সেই অনুসারীদের অর্থে যারা তাঁর দাওয়াত শুনতে শুরু করেছিল, যা হত্যাটিকে বসায় তাঁর প্রচার শুরুর পরে। মুয়াসসার অন্যদিকে গোটা ঘটনাটিকে রাখে দাওয়াত আসার আগে। আনা তাফসীরকারেরা একে অপরের বিপরীতে এটি মীমাংসা করেন না, আমরাও করব না।"
          },
          {
            "en": "How then do they weigh the act itself? Al-Hasan, quoted by al-Qurtubi, holds that killing the disbelieving man was not permitted in that moment, for it was a time of restraint from fighting. Ad-Dahhak, also in al-Qurtubi, frames it as a thing done before Moses had been commanded to it. Each of these is a scholar's careful wording, given with his name, and we take none of them as a charge against the prophet's integrity. The Qur'an itself records Moses' own verdict on the deed in the verse that follows, and that is where it belongs.",
            "bn": "তাহলে কাজটিকে তাঁরা নিজেরা ওজন করেন কীভাবে? কুরতুবীর উদ্ধৃত হাসান বসরীর মত, ওই মুহূর্তে কাফির লোকটিকে হত্যা করা জায়েজ ছিল না, কারণ তখন ছিল লড়াই থেকে বিরত থাকার সময়। দাহহাক, তিনিও কুরতুবীতে, এটিকে দাঁড় করান এমন কাজ হিসেবে যা মূসা (আঃ) আদিষ্ট হওয়ার আগেই করে ফেলেছিলেন। এগুলোর প্রতিটিই একেকজন আলেমের মেপে বলা কথা, নাম ধরে বলা, আর আমরা এর কোনোটিকেই নবীর সততার বিরুদ্ধে অভিযোগ হিসেবে নিই না। কাজটির ব্যাপারে মূসা (আঃ)-এর নিজের রায় কুরআন নিজেই লিপিবদ্ধ করে পরের আয়াতে, আর সেখানেই তার স্থান।"
          }
        ]
      },
      {
        "h": {
          "en": "Chief on That Day",
          "bn": "সেই দিনের নেতা"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari preserves a long hadith, narrated by Abu Hurayra, that reaches back to this very moment. On the Day of Resurrection, the Prophet (ﷺ) said, the crowds will go from prophet to prophet seeking someone to intercede for them before their Lord. They come to Adam, then Noah, then Abraham, and each draws back, naming some matter of his own before the majesty of that Day. When they come to Moses, he says, I killed a soul I was not commanded to kill, and sends them onward. This is in Bukhari, hadith 4712.",
            "bn": "সহীহ বুখারীতে আবু হুরায়রা (রাঃ) থেকে একটি দীর্ঘ হাদীস রক্ষিত আছে, যা ঠিক এই মুহূর্তটিরই নাগাল পায়। কিয়ামতের দিন, নবী ﷺ বললেন, লোকেরা একের পর এক নবীর কাছে যাবে, তাদের রবের কাছে সুপারিশ করার মতো কাউকে খুঁজতে। তারা আসে আদম (আঃ)-এর কাছে, তারপর নূহ (আঃ), তারপর ইবরাহীম (আঃ), আর প্রত্যেকে পিছিয়ে যান, সেই দিনের মহিমার সামনে নিজের কোনো একটি ব্যাপারের নাম নিয়ে। তারা যখন মূসা (আঃ)-এর কাছে আসে, তিনি বলেন, আমি এমন এক প্রাণ হত্যা করেছি যাকে হত্যার আদেশ আমাকে দেওয়া হয়নি, আর তাদের সামনে এগিয়ে যেতে বলেন। এটি বুখারীতে, হাদীস ৪৭১২।"
          },
          {
            "en": "The hadith is not weighing the prophets against one another, and neither should we. Its subject is the terror of a Day when, as the narration says, the Lord's anger is as it has never been and never will be. Before that, even the greatest of God's messengers draw back. Moses' own words name the Memphis killing exactly as the Qur'an does, a soul he was not commanded to take, and he carries it, still, with the humility of a servant who has never set it down. Its authenticity rests on Bukhari's own collection, and needs no raising from us.",
            "bn": "হাদীসটি নবীদের একজনকে অন্যজনের বিপরীতে ওজন করছে না, আমাদেরও তা করা উচিত নয়। এর বিষয় হলো সেই দিনের ভয়াবহতা, যেদিন, বর্ণনা যেমন বলে, রবের ক্রোধ এমন হবে যেমনটা আগে কখনো হয়নি আর পরেও কখনো হবে না। তার সামনে আল্লাহর শ্রেষ্ঠ রাসূলগণও পিছিয়ে যান। মূসা (আঃ)-এর নিজের কথাগুলো মানফের সেই হত্যাকে ঠিক কুরআনের মতোই নাম দেয়, এমন এক প্রাণ যাকে নেওয়ার আদেশ তাঁকে দেওয়া হয়নি, আর তিনি আজও সেটি বয়ে চলেন এক বান্দার বিনয়ে, যা তিনি কখনো নামিয়ে রাখেননি। এর বিশুদ্ধতা দাঁড়িয়ে আছে বুখারীর নিজের সংকলনের ওপর, আমাদের দিক থেকে একে আর উঁচু করার দরকার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Death Permits",
          "bn": "এই মৃত্যু যার অনুমতি দেয়"
        },
        "p": [
          {
            "en": "This verse must not be made to say what it does not say. It reports what happened: a strong man struck once in the defense of someone being wronged, and a man died whom he never meant to kill. It grants no licence to anyone to take a life, to answer a wrong with the fist, or to set himself up as judge and executioner over any living person or community. The verse describes what the text describes, and it permits nothing against anyone alive. The grief that follows the blow is written into the passage itself.",
            "bn": "এই আয়াতকে এমন কিছু বলতে বাধ্য করা যাবে না যা সে বলে না। সে বর্ণনা করে যা ঘটেছিল: এক শক্তিশালী মানুষ জুলুমের শিকার কাউকে বাঁচাতে একবার আঘাত করলেন, আর এমন একজন মারা গেল যাকে তিনি কখনো হত্যা করতে চাননি। এটি কাউকে কোনো অনুমতি দেয় না, কোনো প্রাণ নেওয়ার, ঘুসি দিয়ে অন্যায়ের জবাব দেওয়ার, কিংবা কোনো জীবিত মানুষ বা জনগোষ্ঠীর ওপর নিজেকে বিচারক আর জল্লাদ বানিয়ে বসার। আয়াতটি যা বর্ণনা করে কেবল তা-ই বর্ণনা করে, আর জীবিত কারও বিরুদ্ধে এটি কোনো অনুমতি দেয় না। আঘাতের পরের যে বেদনা, তা অনুচ্ছেদটির ভেতরেই লেখা আছে।"
          },
          {
            "en": "What it teaches is nearly the opposite of zeal let loose. It shows how close ruin stands to righteous anger, how a single blow can end a single irreplaceable life, and how the enemy's craft is to take a true cause and a strong arm and carry them one strike too far. The response it holds up is Moses' own: not to excuse the wrong, not to lay it on another, but to name it honestly for what it was and to turn, in that very breath, toward the One who forgives.",
            "bn": "সে যা শেখায় তা লাগামছাড়া উৎসাহের প্রায় উল্টো। সে দেখিয়ে দেয় ন্যায্য রাগের কত কাছে দাঁড়িয়ে থাকে ধ্বংস, একটিমাত্র আঘাত কীভাবে একটিমাত্র অপূরণীয় প্রাণ শেষ করে দিতে পারে, আর শত্রুর কারসাজি কীভাবে একটা সত্যিকারের ন্যায্য কারণ আর একটা শক্ত বাহুকে নিয়ে এক ঘা বেশি দূরে টেনে নেয়। সে যে জবাবটা তুলে ধরে তা মূসা (আঃ)-এরই: অন্যায়কে অজুহাত না দেওয়া, কারও ঘাড়ে না চাপানো, বরং যা ছিল তাকে সোজাসুজি সেই নামেই ডাকা, আর ঠিক সেই নিঃশ্বাসেই ফিরে যাওয়া সেই সত্তার দিকে, যিনি ক্ষমা করেন।"
          }
        ]
      }
    ]
  },
  "28:24": {
    "sections": [
      {
        "h": {
          "en": "A Man With Nothing",
          "bn": "নিঃস্ব এক মানুষ"
        },
        "p": [
          {
            "en": "The scene is set by what came before it. Warned at 28:20 that the notables were conferring to kill him, Musa (AS) left the city fearful and watchful, praying at 28:21 to be saved from the wrongdoing people. 28:22 turns him toward Madyan with a hope rather than a plan: perhaps my Lord will guide me to the sound way. He arrives with no shelter, no food, no standing and no name in that town.",
            "bn": "দৃশ্যটি গড়ে ওঠে তার আগের ঘটনাগুলো দিয়ে। 28:20 আয়াতে সতর্ক করা হয় যে গণ্যমান্যরা তাঁকে হত্যার পরামর্শ করছে; মূসা (আঃ) ভীত ও সতর্ক অবস্থায় শহর ছাড়েন, আর 28:21 আয়াতে দোয়া করেন যেন যালিম সম্প্রদায় থেকে তাঁকে রক্ষা করা হয়। 28:22 আয়াত তাঁকে মাদইয়ানের দিকে ফেরায় কোনো পরিকল্পনা নিয়ে নয়, একটি আশা নিয়ে: হয়তো আমার রব আমাকে সরল পথ দেখাবেন। তিনি পৌঁছান আশ্রয় ছাড়া, খাবার ছাড়া, মর্যাদা ছাড়া — সে শহরে তাঁর কোনো নামও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "He Watered First",
          "bn": "আগে তিনি পানি পান করালেন"
        },
        "p": [
          {
            "en": "At the water of Madyan, 28:23 shows him finding a crowd watering their flocks and two women holding theirs back. He asks what their situation is, and they answer that they do not water until the shepherds drive off, and that their father is an old man. Then this verse: fa-saqa lahuma, so he watered for them. The neediest person at that well did the work, and he did it for the two with the least leverage there.",
            "bn": "মাদইয়ানের পানির ধারে 28:23 আয়াত দেখায়, তিনি সেখানে একদল মানুষকে পশুপালকে পানি পান করাতে দেখলেন, আর দুজন নারীকে দেখলেন নিজেদের পশু আটকে রেখেছেন। তিনি তাঁদের অবস্থা জিজ্ঞেস করেন, আর তাঁরা বলেন যে রাখালরা সরে না যাওয়া পর্যন্ত তাঁরা পানি পান করান না, এবং তাঁদের পিতা বৃদ্ধ। তারপর এই আয়াত: ফাসাকা লাহুমা — তখন তিনি তাঁদের জন্য পানি পান করালেন। সেই কূপে সবচেয়ে অভাবী মানুষটিই কাজটি করলেন, আর করলেন সেখানকার সবচেয়ে কম প্রভাবওয়ালা দুজনের জন্য।"
          },
          {
            "en": "Then thumma tawalla ila az-zill — he turned away to the shade. He did not wait to be thanked, and he did not open a conversation about what he needed. He removed himself from the people he had just helped, and only then did he speak. What he said was addressed to no one standing there.",
            "bn": "এরপর ছুম্মা তাওয়াল্লা ইলায যিল্‌ল — তিনি ছায়ার দিকে সরে গেলেন। ধন্যবাদের অপেক্ষায় তিনি দাঁড়ালেন না, নিজের প্রয়োজন নিয়েও কোনো কথা তুললেন না। যাদের এইমাত্র সাহায্য করলেন, তাদের কাছ থেকে নিজেকে সরিয়ে নিলেন, আর তারপরই কেবল মুখ খুললেন। তিনি যা বললেন, তা সেখানে দাঁড়ানো কারও উদ্দেশে ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shape of the Du'a",
          "bn": "দোয়াটির গড়ন"
        },
        "p": [
          {
            "en": "Rabbi inni lima anzalta ilayya min khayrin faqir. My Lord, indeed I am, for whatever good You would send down to me, in need. There is no imperative anywhere in it. He does not say give me, feed me, shelter me. The sentence is a statement of condition, and the only thing it establishes is where he stands. A man who had just proved he could work is telling Allah that he has nothing.",
            "bn": "রাব্বি ইন্নী লিমা আনযালতা ইলাইয়া মিন খাইরিন ফাকীর। হে আমার রব, নিশ্চয়ই আপনি আমার প্রতি যে কল্যাণই নাযিল করেন, আমি তার মুখাপেক্ষী। এর কোথাও কোনো আদেশবাচক শব্দ নেই। তিনি বলেননি — আমাকে দিন, আমাকে খাওয়ান, আমাকে আশ্রয় দিন। বাক্যটি নিজের অবস্থার একটি বিবৃতি, আর এটি কেবল একটি জিনিসই প্রতিষ্ঠা করে — তিনি কোথায় দাঁড়িয়ে আছেন। যে মানুষটি এইমাত্র প্রমাণ করলেন তিনি কাজ করতে পারেন, তিনিই আল্লাহকে বলছেন যে তাঁর কিছুই নেই।"
          },
          {
            "en": "The word order carries weight. Lima anzalta ilayya min khayrin is placed before faqir, so the good comes first in the sentence and his need only afterwards. Min khayrin is indefinite: any good at all, unnamed. He does not tell Allah what to send. The commentators differ over anzalta, which is past tense — some read it of good already sent down, making the prayer a thanks and a need in one breath, others of good yet to come.",
            "bn": "শব্দের ক্রমটিও ভার বহন করে। 'লিমা আনযালতা ইলাইয়া মিন খাইরিন' বসেছে 'ফাকীর'-এর আগে, ফলে বাক্যে আগে আসে কল্যাণ আর তারপর তাঁর প্রয়োজন। 'মিন খাইরিন' অনির্দিষ্ট: যেকোনো কল্যাণ, নাম না নিয়ে। কী পাঠাতে হবে তা তিনি আল্লাহকে বলে দেন না। 'আনযালতা' অতীতকালের ক্রিয়া, আর এ নিয়ে মুফাসসিরগণের মতভেদ আছে — কেউ পড়েন ইতিমধ্যে নাযিলকৃত কল্যাণ অর্থে, ফলে দোয়াটি এক নিঃশ্বাসে শুকরিয়া ও প্রয়োজন দুটোই; কেউ পড়েন আসন্ন কল্যাণ অর্থে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Faqir",
          "bn": "'ফাকীর' শব্দটি"
        },
        "p": [
          {
            "en": "Faqir is not a mood. It is the standing category of the destitute, the one who owns nothing of his own, and the lexicographers connect it to faqar, the vertebra — a faqir being someone whose back has been broken by need. Musa (AS) does not say he is passing through a hard patch. He classifies himself.",
            "bn": "'ফাকীর' কোনো মনের অবস্থা নয়। এটি নিঃস্বতার একটি স্থায়ী শ্রেণি — যার নিজের বলতে কিছুই নেই; আর অভিধানবিদরা শব্দটিকে জোড়েন 'ফাকার' অর্থাৎ মেরুদণ্ডের হাড়ের সঙ্গে — 'ফাকীর' সেই ব্যক্তি যার পিঠ অভাবে ভেঙে গেছে। মূসা (আঃ) বলছেন না যে তিনি একটু কঠিন সময়ের ভেতর দিয়ে যাচ্ছেন। তিনি নিজেকে একটি শ্রেণিতেই ফেলে দিচ্ছেন।"
          },
          {
            "en": "35:15 makes that classification universal: O mankind, you are the ones in need of Allah, while Allah is the Free of need, the Praiseworthy. Hunger in a foreign town did not create Musa's (AS) poverty; it only let him see it. The Quran keeps a place for this kind of prayer — 21:83 has Ayyub (AS) stating that adversity has touched him and that Allah is the most merciful of the merciful, asking for nothing; 12:86 has Ya'qub (AS) saying he complains of his grief to Allah alone.",
            "bn": "35:15 আয়াত এই শ্রেণিকরণকে সর্বজনীন করে দেয়: হে মানুষ, তোমরাই আল্লাহর মুখাপেক্ষী, আর আল্লাহ তো অভাবহীন, প্রশংসিত। ভিনদেশি শহরে ক্ষুধা মূসা (আঃ)-এর দীনতা তৈরি করেনি; কেবল তাঁকে সেটি দেখতে দিয়েছে। এমন দোয়ার জন্য কুরআনে জায়গা রাখা আছে — 21:83 আয়াতে আইয়ূব (আঃ) বলেন যে দুঃখকষ্ট তাঁকে স্পর্শ করেছে এবং আল্লাহই দয়ালুদের শ্রেষ্ঠ দয়ালু, কিছুই চান না; 12:86 আয়াতে ইয়াকূব (আঃ) বলেন, তিনি তাঁর দুঃখ কেবল আল্লাহর কাছেই নিবেদন করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What Came Back",
          "bn": "যা ফিরে এলো"
        },
        "p": [
          {
            "en": "The answer begins in the next verse. 28:25 brings one of the two women walking shyly with her father's invitation to reward him for watering; he goes, tells his story, and is met with fear not, you have escaped the wrongdoing people. 28:26 has one of them urge her father to hire him, since the best one you can hire is the strong and the trustworthy. 28:27 offers marriage on a term of eight years, or ten if he chooses.",
            "bn": "জবাব শুরু হয় পরের আয়াত থেকেই। 28:25 আয়াতে দুই নারীর একজন সলজ্জ পায়ে এসে পিতার আমন্ত্রণ জানান — পানি পান করানোর প্রতিদান দিতে; তিনি যান, নিজের কাহিনি বলেন, আর জবাব পান: ভয় করো না, তুমি যালিম সম্প্রদায় থেকে রক্ষা পেয়েছ। 28:26 আয়াতে তাঁদের একজন পিতাকে অনুরোধ করেন তাঁকে কাজে রাখতে, কারণ শক্তিশালী ও বিশ্বস্তজনই সর্বোত্তম কর্মী। 28:27 আয়াতে আট বছরের মেয়াদে বিবাহের প্রস্তাব আসে, আর তিনি চাইলে দশ বছর।"
          },
          {
            "en": "He had asked for khayr without naming it, and what arrived was food, safety, work, marriage and a home — none of which he had specified. The Quran leaves several details open on purpose. 28:28 has him answer that whichever of the two terms he completes, there shall be no injustice against him, and the passage never says which he completed, nor which of the two women he married. The reports differ, and the story does not need them settled.",
            "bn": "তিনি কল্যাণ চেয়েছিলেন নাম না নিয়েই, আর যা এলো তা হলো খাবার, নিরাপত্তা, কাজ, বিবাহ ও একটি ঘর — যার একটিরও তিনি উল্লেখ করেননি। কুরআন কয়েকটি বিষয় ইচ্ছা করেই খোলা রাখে। 28:28 আয়াতে তিনি জবাব দেন, দুই মেয়াদের যেটিই তিনি পূর্ণ করুন, তাঁর প্রতি কোনো অবিচার হবে না; আর কোনটি তিনি পূর্ণ করেছিলেন, কিংবা দুই নারীর কাকে বিয়ে করেছিলেন, তা বর্ণনাটি কোথাও বলে না। বর্ণনাগুলোতে মতভেদ আছে, আর কাহিনিটির জন্য সেগুলোর মীমাংসা দরকারও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Praying From the Shade",
          "bn": "ছায়া থেকে দোয়া করা"
        },
        "p": [
          {
            "en": "Three habits come straight out of this verse. Serve before you ask, and serve people who cannot repay you. Take your need away from the crowd before you speak it. And when you do speak, describe your condition rather than dictating the remedy, because naming what you lack is honest in a way that naming what you want often is not.",
            "bn": "এই আয়াত থেকে সরাসরি তিনটি অভ্যাস উঠে আসে। চাওয়ার আগে সেবা করুন, আর সেবা করুন এমন মানুষদের যারা প্রতিদান দিতে পারবে না। প্রয়োজনের কথা বলার আগে ভিড় থেকে সরে আসুন। আর যখন বলবেন, প্রতিকার নির্ধারণ করে দেওয়ার বদলে নিজের অবস্থার বর্ণনা দিন — কারণ কী নেই তার নাম নেওয়ায় যে সততা আছে, কী চাই তার নাম নেওয়ায় প্রায়ই তা থাকে না।"
          }
        ]
      }
    ]
  },
  "28:41-42": {
    "sections": [
      {
        "h": {
          "en": "The Verdict After the Sea",
          "bn": "সমুদ্রের পরের রায়"
        },
        "p": [
          {
            "en": "In the previous verse the sea has just closed over Pharaoh and his armies, and a reader might expect the account to rest there: the tyrant is dead and the lesson is drawn. Instead these two verses press on past the drowning and hand down a verdict that outlasts it. In life these men were leaders whom a nation obeyed. Now they are renamed leaders of another sort, pursued by a curse in this world and left disgraced in the next. Drowning ended their power. It did not end their story.",
            "bn": "আগের আয়াতে সমুদ্র সবেমাত্র ফিরআউন আর তার বাহিনীকে ঢেকে ফেলেছে। পাঠক ভাবতে পারেন গল্প এখানেই থামবে, অত্যাচারী মরেছে, শিক্ষাও নেওয়া হয়ে গেছে। কিন্তু এই দুটি আয়াত ডুবে যাওয়ার পরেও এগিয়ে যায়, আর এমন এক রায় শোনায় যা মৃত্যুকেও ছাড়িয়ে যায়। জীবনে এরা ছিল নেতা, গোটা জাতি যাদের হুকুম মানত। এখন এদের আরেক ধরনের নেতা বলা হচ্ছে। দুনিয়ায় অভিসম্পাত এদের পিছু নেয়, আর পরকালে এরা থাকে লাঞ্ছিত। ডুবে যাওয়া এদের ক্ষমতা শেষ করেছে, কিন্তু এদের গল্প শেষ করেনি।"
          },
          {
            "en": "The two verses move as one. In 28:41 the gaze is on what these men were to others: imams calling toward the Fire, unhelped when the Day arrives. In 28:42 it turns to what pursues them through both worlds, a curse here and disgrace there. Read together they trace a single line, from a role these men chose in life to its settlement in eternity. This reflection keeps to what the commentators actually said about these words, because the subject is heavy and has been misused before.",
            "bn": "আয়াত দুটি চলে একসঙ্গে। ২৮:৪১ আয়াতে দৃষ্টি এদের ভূমিকার দিকে, মানুষের কাছে এরা কী ছিল: আগুনের দিকে ডাকা নেতা, শেষ দিনে অসহায়। ২৮:৪২ আয়াতে দৃষ্টি ঘোরে দুই জগতে এদের পিছু নেওয়া জিনিসের দিকে, এখানে অভিসম্পাত আর সেখানে লাঞ্ছনা। একসঙ্গে পড়লে একটা সুতো টানা যায়, জীবনে বেছে নেওয়া ভূমিকা থেকে অনন্তকালের মীমাংসা পর্যন্ত। তাফসীরকারেরা এই শব্দগুলো নিয়ে যা বলেছেন, এই ভাবনা তার সীমাতেই থাকে, কারণ বিষয়টা ভারী আর আগে এর অপব্যবহার হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Leaders Who Call Downward",
          "bn": "নিচের দিকে ডাকা নেতা"
        },
        "p": [
          {
            "en": "The word the verse uses is a'imma, imams, the same honoured word used for those who lead a prayer or guide a people. At-Tabari reads it here as leaders whom the arrogant and the disbelieving take as their models, and who in turn call people to the deeds of the people of the Fire. Al-Baghawi glosses it simply as chiefs and heads. Al-Qurtubi has them as spokesmen followed in disbelief, and al-Muyassar as leaders toward the Fire whom the people of unbelief and corruption imitate. Leadership, in other words, pointed downward.",
            "bn": "আয়াতে ব্যবহৃত শব্দ 'আইম্মা', অর্থাৎ ইমাম, নামায বা জাতির নেতৃত্ব দেওয়া মানুষের জন্য যে সম্মানিত শব্দ, সেটিই। তাবারী এখানে এর অর্থ করেন এমন নেতা, উদ্ধত আর অবিশ্বাসীরা যাদের আদর্শ বানায়, আর যারা মানুষকে জাহান্নামীদের কাজের দিকে ডাকে। বাগভী সোজা অর্থ করেন নেতা ও সর্দার। কুরতুবীর কাছে এরা মুখপাত্র, কুফরিতে যাদের অনুসরণ করা হয়, আর মুয়াসসারের কাছে আগুনের দিকের নেতা, কুফরি ও ফাসেকির লোকেরা যাদের নকল করে। অর্থাৎ নেতৃত্ব, কিন্তু মুখ নিচের দিকে ফেরানো।"
          },
          {
            "en": "What does it mean to call toward the Fire? Ibn Kathir explains it as summoning those who walk behind them into rejecting the messengers and denying the Creator. Ma'arif al-Qur'an notes that most commentators read the call to fire as a figure of speech: the invitation is to evil deeds that end in burning. It then relays a striking view from its author's teacher, that the deed itself becomes its reward in the next life, so to invite someone to evil is already, in reality, to bid him into fire, as verses like 18:49 and 99:7 suggest. The gentle voice and the downward summons can be the very same act.",
            "bn": "আগুনের দিকে ডাকা মানে কী? ইবন কাসীর বলেন, এর মানে নিজেদের পিছনে যারা হাঁটে তাদের রাসূলদের অস্বীকার আর স্রষ্টাকে নাকচ করার দিকে টানা। মাআরিফুল কুরআন বলে, বেশির ভাগ তাফসীরকার আগুনের দিকে ডাকাকে রূপক হিসেবে পড়েন, ডাকটা আসলে সেই মন্দ কাজের দিকে যার শেষ জাহান্নামে পোড়া। এরপর সে গ্রন্থকারের উস্তাদের এক চমকপ্রদ মত আনে: আখিরাতে কাজই নিজের প্রতিদান হয়ে দাঁড়ায়, তাই কাউকে মন্দের দিকে ডাকা মানে আসলে তাকে এখনই আগুনে ঠেলে দেওয়া, যেমন ইঙ্গিত করে ১৮:৪৯ ও ৯৯:৭ আয়াত। নরম গলা আর নিচের দিকে ডাক একই কাজ হতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Word, Reversed",
          "bn": "একই শব্দ, উল্টো পথে"
        },
        "p": [
          {
            "en": "There is a chill in the choice of word, and it is the Qur'an's own. The same noun, imams, and the same verb, We made, are used elsewhere for leadership of the opposite kind. In 32:24 God says, We made from among them imams who guide by Our command. Earlier in this very surah, in 28:5, He speaks of willing to make the oppressed of the earth imams and heirs. Pharaoh's circle and the guides of 32:24 are described with the same vocabulary and sent in opposite directions: one calls upward to God, the other downward to the Fire.",
            "bn": "শব্দ বাছাইয়ে এক ধরনের শিহরণ আছে, আর তা কুরআনের নিজের। একই বিশেষ্য 'ইমাম', আর একই ক্রিয়া 'আমি বানিয়েছি', অন্যত্র ঠিক উল্টো নেতৃত্বের জন্যও ব্যবহার হয়েছে। ৩২:২৪ আয়াতে আল্লাহ বলেন, আমি তাদের মধ্য থেকে এমন ইমাম বানিয়েছি যারা আমার হুকুমে পথ দেখায়। এই সূরারই আগের দিকে, ২৮:৫ আয়াতে, তিনি বলেন দুর্বল করে রাখা মানুষদের ইমাম ও উত্তরাধিকারী বানানোর ইচ্ছার কথা। ফিরআউনের দল আর ৩২:২৪-এর পথপ্রদর্শক, একই শব্দভান্ডারে বর্ণিত, অথচ পাঠানো উল্টো পথে: একদিকের ডাক উপরে আল্লাহর দিকে, অন্যদিকের নিচে আগুনের দিকে।"
          },
          {
            "en": "The point is not decorative. The title leader, the verse insists, is empty by itself; what fills it is direction. A person may be obeyed, admired and copied, and still the only question these verses press is where the obedience leads. So the distance between the guides who point to God and the imams who point to the Fire is not a difference of rank or birth. It is a difference of direction, and every influential life must answer it.",
            "bn": "কথাটা নিছক সাজানো নয়। আয়াত জোর দিয়ে বলছে, 'নেতা' উপাধিটা নিজে থেকে ফাঁকা, একে ভরায় দিক। মানুষকে মানা হতে পারে, প্রশংসা আর নকল করা হতে পারে, তবু এই আয়াতগুলো যে একটিমাত্র প্রশ্ন তোলে তা হলো, সেই অনুসরণ কোথায় নিয়ে যায়। তাই যারা আল্লাহর দিকে ইশারা করে আর যারা আগুনের দিকে, তাদের মধ্যকার দূরত্ব মর্যাদা বা জন্মের নয়। তা দিকের, আর প্রভাব রাখে এমন প্রতিটি জীবনকেই এর জবাব দিতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why We Made Them",
          "bn": "আমি তাদের করেছি কেন"
        },
        "p": [
          {
            "en": "The phrase We made them has to be read with care, or it can sound as though God arbitrarily assigned decent men to ruin. The commentators do not read it so. Al-Muyassar ties a reason to the sentence itself: this was because of their disbelief, their denial of their Lord's messenger, and their clinging to it. The making is a just recompense for a road these men chose and refused to leave, not a fate dropped on the innocent. They first made themselves callers to misguidance; the verse then names them by what they had become.",
            "bn": "'আমি তাদের বানিয়েছি' কথাটা সাবধানে পড়তে হয়, নইলে মনে হতে পারে আল্লাহ ভালো মানুষদের খেয়ালখুশিমতো ধ্বংসের জন্য বরাদ্দ করলেন। তাফসীরকারেরা তা এভাবে পড়েন না। মুয়াসসার বাক্যের সঙ্গেই কারণ জুড়ে দেন: এটা হয়েছে এদের কুফরি, রবের রাসূলকে অস্বীকার আর তাতে অটল থাকার কারণে। এই 'বানানো' তাই এমন এক পথের ন্যায্য প্রতিফল, যা এরা নিজেরা বেছে নিয়েছিল আর ছাড়তে চায়নি, নিরপরাধের ঘাড়ে চাপানো কোনো নিয়তি নয়। আগে এরা নিজেরাই হয়ে উঠেছিল ভ্রষ্টতার ডাকওয়ালা, আয়াত তারপর এরা যা হয়ে উঠেছিল সেই নামেই এদের ডাকে।"
          },
          {
            "en": "Al-Qurtubi presses the justice further. Because these men are followed into disbelief, upon them falls their own burden and the burden of everyone who followed them, so their punishment is the heavier. Leadership, on this reading, multiplies a person's account rather than easing it. That is the sober weight the title imam of the Fire carries. It does not mean the court suffers for a single man's sin. It means each one carries his own refusal, and a share in every refusal he taught another to make.",
            "bn": "কুরতুবী ন্যায়ের দিকটা আরও চেপে ধরেন। যেহেতু কুফরিতে এদের অনুসরণ করা হয়, তাই এদের ঘাড়ে চাপে নিজেদের বোঝা, সঙ্গে যারা এদের অনুসরণ করেছে তাদের সবার বোঝা, ফলে এদের শাস্তি আরও ভারী। এই পড়ায় নেতৃত্ব মানুষের হিসাব হালকা করে না, বরং কয়েক গুণ বাড়ায়। 'আগুনের ইমাম' উপাধি এই গুরুভার বয়ে আনে। এর মানে এই নয় যে একজনের গুনাহের দায় গোটা দরবার বইবে। মানে হলো, প্রত্যেকে বইবে নিজের অস্বীকার, আর অন্যকে যে অস্বীকার শিখিয়েছে তার ভাগও।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight of Followers",
          "bn": "অনুসারীদের বোঝা"
        },
        "p": [
          {
            "en": "The principle al-Qurtubi draws has a clear voice in the Sunnah, though no commentator I read attaches this narration to the verse; it states the same law in general terms. Muslim records that the Prophet ﷺ said that whoever calls to guidance has a reward like the rewards of all who follow him, with nothing taken from theirs, and whoever calls to misguidance carries a sin like the sins of all who follow him, with nothing taken from theirs. The caller's account stays open for as long as the call keeps working in other people.",
            "bn": "কুরতুবী আয়াত থেকে যে নীতি টানেন, সুন্নাহতেও তার স্পষ্ট উচ্চারণ আছে, যদিও আমার পড়া কোনো তাফসীরকার এই হাদীসকে এই আয়াতের সঙ্গে জুড়ে দেননি, হাদীসটি একই বিধান সাধারণভাবে বলে। মুসলিম বর্ণনা করেন, নবী ﷺ বলেছেন, যে হেদায়েতের দিকে ডাকে সে অনুসারীদের সওয়াবের মতো সওয়াব পায়, তাদের সওয়াব একটুও না কমিয়ে; আর যে ভ্রষ্টতার দিকে ডাকে সে অনুসারীদের গুনাহের মতো গুনাহ বহন করে, তাদের গুনাহ একটুও না কমিয়ে। ডাক যত দিন অন্যের ভেতর কাজ করে, ডাকওয়ালার হিসাব তত দিন খোলা থাকে।"
          },
          {
            "en": "This should frighten and encourage at once. It means Pharaoh, in a sense, still gathers the debt of every later tyrant his example inspires. But it also means that a quiet believer who nudges someone toward prayer, honesty or patience holds an account that keeps growing while he sleeps and after he dies. The verse shows the dreadful end of the downward call. The narration shows the law beneath it, and that law runs in both directions.",
            "bn": "এটা একসঙ্গে ভয়ও দেখায়, সাহসও দেয়। মানে ফিরআউন এক অর্থে আজও সেই ঋণ জমাচ্ছে, তার উদাহরণে অনুপ্রাণিত পরবর্তী প্রতিটি অত্যাচারীর ঋণ। আবার এর মানে, চুপচাপ এক মুমিন যদি কাউকে নামায, সততা বা ধৈর্যের দিকে একটু ঠেলে দেয়, তার হিসাবও বাড়তে থাকে, সে ঘুমিয়ে থাকলেও, মরে যাওয়ার পরেও। আয়াত দেখায় নিচের দিকের ডাকের ভয়ংকর পরিণতি। হাদীস দেখায় তার পিছনের বিধান, আর সেই বিধান দুই দিকেই চলে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Rescue That Day",
          "bn": "সেদিন কোনো সাহায্য নেই"
        },
        "p": [
          {
            "en": "The first verse ends on a stark clause: on the Day of Resurrection they will not be helped. At-Tabari catches the reversal in it. In this world these men shielded each other, pooled their power and stood as a bloc; on that Day the mutual aid simply dissolves, and no helper is left when God's punishment falls. Al-Baghawi reads not helped plainly, as not defended from the punishment. The web of power that made them untouchable in Egypt is exactly what is absent when it is at last needed.",
            "bn": "প্রথম আয়াত শেষ হয় এক কঠিন বাক্যে: ক্বিয়ামতের দিন এরা সাহায্যপ্রাপ্ত হবে না। তাবারী এর ভেতরের উল্টোটা ধরেন। দুনিয়ায় এরা একে অন্যকে আড়াল করত, শক্তি একজোট করত, দল বেঁধে দাঁড়াত। সেদিন সেই পারস্পরিক সাহায্য নিছক মিলিয়ে যায়, আল্লাহর শাস্তি নামলে কোনো সাহায্যকারী থাকে না। বাগভী 'সাহায্যপ্রাপ্ত হবে না' সোজা অর্থে পড়েন, শাস্তি থেকে রক্ষা পাবে না। মিসরে যে ক্ষমতার জাল এদের অস্পর্শ্য করে রেখেছিল, শেষবেলায় যখন দরকার ঠিক তখনই তা নেই।"
          },
          {
            "en": "As-Sa'di turns the clause inward: on that Day they are the feeblest of things, unable to push the punishment off themselves, with no protector and no helper apart from God, and apart from God there is none. Ibn Kathir reads it against the whole surah, so that their disgrace here runs straight into their humiliation there and the two join without a seam, as in the verse We destroyed them, and they had no helper (47:13). This helplessness is not one bad moment. It is the shape of the entire outcome.",
            "bn": "সাদী বাক্যটা ভেতরের দিকে ফেরান: সেদিন এরা সবচেয়ে দুর্বল জিনিস, নিজেদের থেকে শাস্তি ঠেলে সরাতে অক্ষম, আল্লাহ ছাড়া কোনো অভিভাবক নেই, কোনো সাহায্যকারী নেই, আর আল্লাহ ছাড়া তো কেউ নেই-ই। ইবন কাসীর আয়াতটা গোটা সূরার প্রেক্ষিতে পড়েন, যাতে দুনিয়ার লাঞ্ছনা সোজা গিয়ে মেশে পরকালের অপমানে, দুই লাঞ্ছনা জোড়া লাগে কোনো ফাঁক ছাড়াই, যেমন আরেক আয়াতে, 'আমি তাদের ধ্বংস করেছি, তাদের কোনো সাহায্যকারী ছিল না' (৪৭:১৩)। এই অসহায়তা কোনো একটি খারাপ মুহূর্ত নয়। এটাই গোটা পরিণতির চেহারা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Curse in This World",
          "bn": "দুনিয়ায় এক অভিসম্পাত"
        },
        "p": [
          {
            "en": "The second verse opens the two-world sentence: We made a curse pursue them in this world. Ibn Kathir reads the curse concretely. God decreed that Pharaoh and his men be cursed on the tongues of the believers who follow His messengers, just as in their own age they were cursed by the prophets and those who believed with them. Al-Qurtubi says God commanded His servants to curse them, so that whoever so much as mentions them curses them. The verb pursue is exact. The curse walks behind them down the centuries and is never quite spent.",
            "bn": "দ্বিতীয় আয়াত দুই জগতের বাক্যটা খোলে: এ দুনিয়ায় আমি এদের পিছনে লাগিয়ে দিয়েছি অভিসম্পাত। ইবন কাসীর অভিসম্পাতের অর্থ খুব বাস্তবভাবে করেন। আল্লাহ হুকুম দিয়েছেন, ফিরআউন আর তার লোকেরা অভিশপ্ত হবে সেইসব মুমিনের মুখে যারা তাঁর রাসূলদের অনুসরণ করে, যেমন এদের নিজেদের যুগে নবীরা আর যারা ঈমান এনেছিল তারা এদের অভিশাপ দিয়েছিল। কুরতুবী বলেন, আল্লাহ বান্দাদের হুকুম দিয়েছেন এদের অভিশাপ দিতে, ফলে যে কেউ এদের নাম নেয় সে-ই অভিশাপ দেয়। 'পিছনে লাগিয়ে দেওয়া' ক্রিয়াটা নিখুঁত। অভিসম্পাত শতাব্দীর পর শতাব্দী এদের পিছনে হাঁটে, কখনো পুরো ফুরোয় না।"
          },
          {
            "en": "At-Tabari gathers the whole of it: God fixed upon Pharaoh and his people, in this world, disgrace and His wrath, decreeing for them destruction, ruin and an evil name that would last. Qatadah, cited by both at-Tabari and Ibn Kathir, reads the verse as the twin of another: they were pursued by a curse in this life and on the Day of Resurrection, and evil is the gift they are given (11:99). What looked in Egypt like untouchable glory is now the most cursed memory the believing world keeps.",
            "bn": "তাবারী পুরোটা একত্র করেন: আল্লাহ এ দুনিয়ায় ফিরআউন আর তার জাতির উপর স্থির করেছেন লাঞ্ছনা আর তাঁর ক্রোধ, এদের জন্য লিখে দিয়েছেন ধ্বংস, বিনাশ আর চিরস্থায়ী কুখ্যাতি। কাতাদা, যাঁকে তাবারী ও ইবন কাসীর দুজনেই উদ্ধৃত করেন, আয়াতটিকে আরেকটি আয়াতের জমজ হিসেবে পড়েন: দুনিয়ায় আর ক্বিয়ামতের দিন অভিসম্পাত তাদের পিছু নিয়েছে, আর কত নিকৃষ্ট সেই দান যা তাদের দেওয়া হয় (১১:৯৯)। মিসরে যা ছিল অস্পর্শ্য গৌরবের মতো, তা এখন ঈমানদার দুনিয়ার বয়ে চলা সবচেয়ে অভিশপ্ত স্মৃতি।"
          }
        ]
      },
      {
        "h": {
          "en": "What Maqbuhin Carries",
          "bn": "মাকবূহীন কী বহন করে"
        },
        "p": [
          {
            "en": "The verse's last word for them is maqbuhin, from a root meaning ugliness and being driven far from every good; to say God qabbaha a man is to say He cast him out of all good and made him hideous. The commentators spread the sense across readings. Abu Ubayda, cited by both al-Qurtubi and al-Baghawi, takes it as the ruined and destroyed. Al-Qurtubi adds the detested and loathed. Ibn Abbas, cited by both, reads it physically: disfigured in form, their faces blackened and their eyes turned blue on that Day.",
            "bn": "আয়াতে এদের জন্য শেষ শব্দ 'মাকবূহীন', যে ধাতুর অর্থ কুৎসিততা আর সব কল্যাণ থেকে দূরে ঠেলে দেওয়া। আল্লাহ কাউকে 'কাব্বাহা' করলেন মানে তাকে সব ভালো থেকে বের করে দিলেন আর কুৎসিত করে দিলেন। তাফসীরকারেরা অর্থটা কয়েকটি পড়ায় ছড়িয়ে দেন। আবু উবায়দা, যাঁকে কুরতুবী ও বাগভী দুজনেই উদ্ধৃত করেন, একে বোঝেন বিনষ্ট আর ধ্বংসপ্রাপ্ত অর্থে। কুরতুবী যোগ করেন ঘৃণিত আর বিদ্বিষ্ট। ইবন আব্বাস, যাঁকে দুজনেই উদ্ধৃত করেন, একে পড়েন শারীরিকভাবে: চেহারায় বিকৃত, সেদিন এদের মুখ কালো আর চোখ নীল হয়ে যাবে।"
          },
          {
            "en": "Al-Muyassar and as-Sa'di gather the strands: those whose deeds are found filthy and who are driven far from God's mercy. As-Sa'di ends with a line that catches the whole torment better than any picture of a blackened face. These are people upon whom detestation gathers at once from every side: the detestation of God, the detestation of His creation, and the detestation of their own selves. The leader once cheered in the streets of Egypt ends hated by heaven, by earth, and in his own mirror.",
            "bn": "মুয়াসসার আর সাদী সুতোগুলো একত্র করেন: যাদের কাজ নোংরা বলে পাওয়া যায়, আর যাদের আল্লাহর রহমত থেকে দূরে ঠেলে দেওয়া হয়। সাদী শেষ করেন এমন এক কথায়, যা কালো মুখের যেকোনো ছবির চেয়ে ভালোভাবে গোটা শাস্তিটা ধরে। এরা এমন মানুষ, যাদের উপর একসঙ্গে চারদিক থেকে বিদ্বেষ জড়ো হয়: আল্লাহর বিদ্বেষ, তাঁর সৃষ্টির বিদ্বেষ, আর নিজেদের প্রতি নিজেদের বিদ্বেষ। মিসরের রাস্তায় যে নেতাকে একদিন জয়ধ্বনি দেওয়া হতো, সে শেষে ঘৃণিত হয় আসমানের কাছে, জমিনের কাছে, আর নিজের আয়নায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Never a Weapon for Today",
          "bn": "আজকের জন্য কোনো অস্ত্র নয়"
        },
        "p": [
          {
            "en": "One thing must be said plainly, in both languages. These two verses describe a specific, named party, Pharaoh and the clique who ruled and misled beside him, and the curse and disgrace they speak of belong to what the Qur'an and its commentators say of those men, and to them alone. The passage licenses nothing against any living person, leader or community. To lift Pharaoh's sentence and lay it on a present rival, a faction or a disliked people is to abuse the verse, not to follow it. God named the dead; He did not hand us their verdict to reuse.",
            "bn": "একটা কথা দুই ভাষাতেই সোজাসুজি বলা দরকার। এই দুটি আয়াত বর্ণনা করে একটি নির্দিষ্ট, নামধরা দল, ফিরআউন আর যে চক্র তার সঙ্গে শাসন করেছে ও মানুষকে বিপথে নিয়েছে, তাদের। আর এরা যে অভিসম্পাত ও লাঞ্ছনার কথা বলে, তা কুরআন ও তার তাফসীরকারেরা ঐ লোকদের নিয়ে যা বলেন কেবল তারই, আর কারও নয়। এই আয়াত জীবিত কোনো মানুষ, নেতা বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না। ফিরআউনের রায় তুলে এনে আজকের কোনো প্রতিপক্ষ, কোনো গোষ্ঠী বা অপছন্দের কোনো জাতির ঘাড়ে চাপানো আয়াতের অপব্যবহার, অনুসরণ নয়। আল্লাহ মৃতদের নাম নিয়েছেন, তাদের রায় আমাদের হাতে আবার ব্যবহারের জন্য দিয়ে দেননি।"
          },
          {
            "en": "Turn the verse, finally, toward the reader. Its sharpest edge is not aimed at a tyrant safely drowned long ago but at the quiet matter of influence. Everyone leads someone: a child who watches, a colleague who copies, a friend who takes the cue. Of all that following the verse asks a single thing, which fire or which light is it walking toward? Being a leader is not the danger. Being a leader who dresses a fire up as success, and calls the trusting toward it, is to court the oldest and heaviest sentence in the Book.",
            "bn": "শেষে আয়াতটা পাঠকের দিকে ফেরান। এর সবচেয়ে ধারালো দিকটা বহু আগে নিরাপদে ডুবে যাওয়া কোনো অত্যাচারীর দিকে তাক করা নয়, বরং প্রভাবের চুপচাপ প্রশ্নটার দিকে। প্রত্যেকেই কাউকে না কাউকে নেতৃত্ব দেয়, যে সন্তান তাকিয়ে থাকে, যে সহকর্মী নকল করে, যে বন্ধু ইশারা বুঝে নেয়। এই গোটা অনুসরণের কাছে আয়াত একটা জিনিসই জানতে চায়, এ কোন আগুন বা কোন আলোর দিকে হাঁটছে? নেতা হওয়াটা বিপদ নয়। বিপদ হলো এমন নেতা হওয়া, যে আগুনকে সাফল্যের সাজে সাজায় আর বিশ্বাসী মানুষকে তার দিকে ডাকে, এতে বইয়ের সবচেয়ে পুরনো আর ভারী রায়কেই ডেকে আনা হয়।"
          }
        ]
      }
    ]
  },
  "28:56": {
    "sections": [
      {
        "h": {
          "en": "Five Words to the Messenger",
          "bn": "রাসূলকে বলা পাঁচটি শব্দ"
        },
        "p": [
          {
            "en": "The clause that carries the verse is five words in the mushaf: innaka la tahdi man ahbabta. It opens with inna and an attached pronoun, the Arabic way of pressing an emphatic point onto one addressee, and the addressee is the Prophet ﷺ himself. Then comes the surprise, which is in the relative clause. It does not say whom you called, or whom you warned, or whom you argued with. It says man ahbabta, whom you loved.",
            "bn": "আয়াতের মূল বাক্যাংশটি মুসহাফে পাঁচটি শব্দ: ইন্নাকা লা তাহদী মান আহবাবতা। এটি শুরু হয় 'ইন্না' ও তার সঙ্গে যুক্ত সর্বনাম দিয়ে — আরবিতে এভাবেই একজন নির্দিষ্ট সম্বোধিতের ওপর জোর দিয়ে কথা বসানো হয়, আর এখানে সম্বোধিত স্বয়ং নবী ﷺ। এরপর আসে বিস্ময়টি, আর তা লুকিয়ে আছে সম্বন্ধবাচক বাক্যাংশে। বলা হয়নি 'যাকে তুমি ডেকেছ', বা 'যাকে তুমি সতর্ক করেছ', বা 'যার সঙ্গে তুমি তর্ক করেছ'। বলা হয়েছে 'মান আহবাবতা' — যাকে তুমি ভালোবেসেছ।"
          },
          {
            "en": "The correction follows at once: wa lakinna Allaha yahdi man yasha', but Allah guides whom He wills. Lakinna is the particle used when a listener is about to draw the wrong conclusion from what has just been denied. Nothing has been taken from the Messenger ﷺ that was ever his; something has been returned to its owner. The verse then closes on knowledge rather than power: and He is most knowing of the guided.",
            "bn": "সংশোধনটি সঙ্গে সঙ্গেই আসে: ওয়া লাকিন্নাল্লাহা ইয়াহদী মান ইয়াশা — কিন্তু আল্লাহই যাকে চান পথ দেখান। 'লাকিন্না' সেই শব্দ, যা তখন ব্যবহৃত হয় যখন শ্রোতা এইমাত্র অস্বীকৃত কথাটি থেকে ভুল সিদ্ধান্তে পৌঁছে যেতে পারে। রাসূল ﷺ-এর কাছ থেকে এমন কিছু কেড়ে নেওয়া হয়নি যা কখনো তাঁর ছিল; বরং একটি জিনিস তার প্রকৃত মালিকের কাছে ফিরিয়ে দেওয়া হয়েছে। এরপর আয়াত শেষ হয় ক্ষমতার কথা দিয়ে নয়, জ্ঞানের কথা দিয়ে: আর যারা হিদায়াতপ্রাপ্ত তাদের তিনিই ভালো জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Uncle at the Door",
          "bn": "মৃত্যুশয্যায় চাচা"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both record from al-Musayyab ibn Hazn (RA) that when Abu Talib was dying the Prophet ﷺ came to him and found Abu Jahl and Abdullah ibn Abi Umayyah with him. He said: O my uncle, say there is no god but Allah, a word by which I may plead for you before Allah. The two men kept asking whether he was turning away from the religion of Abd al-Muttalib, and the last words Abu Talib spoke were that he was on the religion of Abd al-Muttalib; he refused to say there is no god but Allah.",
            "bn": "ইমাম বুখারী ও ইমাম মুসলিম উভয়েই মুসাইয়্যাব ইবনে হাযন (রাঃ) থেকে বর্ণনা করেন যে, আবু তালিবের মৃত্যুকালে নবী ﷺ তাঁর কাছে আসেন এবং সেখানে আবু জাহল ও আবদুল্লাহ ইবনে আবী উমাইয়াকে উপস্থিত পান। তিনি বলেন: হে চাচা, আপনি বলুন 'লা ইলাহা ইল্লাল্লাহ' — একটি কথা, যার দ্বারা আমি আল্লাহর কাছে আপনার পক্ষে যুক্তি পেশ করতে পারব। ওই দুজন বারবার জিজ্ঞেস করতে থাকে, তিনি কি আবদুল মুত্তালিবের ধর্ম ছেড়ে দিচ্ছেন; আর আবু তালিবের শেষ কথা ছিল — তিনি আবদুল মুত্তালিবের ধর্মেই আছেন, আর 'লা ইলাহা ইল্লাল্লাহ' বলতে তিনি অস্বীকার করলেন।"
          },
          {
            "en": "Al-Bukhari's report ends by stating that Allah revealed concerning him: indeed, you do not guide whom you love. Read against that account, the verse is not a rebuke to a careless caller. The man being called had sheltered him for years; the request was one sentence long; the one making it was the Messenger of Allah ﷺ. Every human factor stood at its highest, and the outcome still did not follow from them.",
            "bn": "বুখারীর বর্ণনা শেষ হয় এই কথা দিয়ে যে, তাঁর সম্পর্কেই আল্লাহ নাযিল করেন: নিশ্চয়ই তুমি যাকে ভালোবাসো তাকে হিদায়াত দিতে পারো না। এই ঘটনার আলোকে পড়লে আয়াতটি কোনো অমনোযোগী দাঈর প্রতি তিরস্কার নয়। যাকে ডাকা হচ্ছিল তিনি বছরের পর বছর তাঁকে আশ্রয় দিয়েছেন; আহ্বানটি ছিল মাত্র এক বাক্যের; আর আহ্বানকারী ছিলেন স্বয়ং আল্লাহর রাসূল ﷺ। মানবিক প্রতিটি উপাদান ছিল সর্বোচ্চ মাত্রায়, তবুও ফলাফল সেগুলো থেকে বেরিয়ে এল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Kinds of Guidance",
          "bn": "দুই ধরনের হিদায়াত"
        },
        "p": [
          {
            "en": "The mufassirun settle this with a distinction the Quran itself supplies. There is a guidance of showing — putting the road in front of a person, making it clear, calling him onto it — and a guidance of granting, in which the heart actually closes on what it has been shown. The first is work a messenger, a teacher or a parent can do. The second is a gift, and it is delegated to nobody.",
            "bn": "মুফাসসিরগণ বিষয়টির মীমাংসা করেন এমন একটি পার্থক্য দিয়ে, যা কুরআন নিজেই জোগায়। একটি হলো পথ দেখানোর হিদায়াত — মানুষের সামনে পথটি রেখে দেওয়া, তা স্পষ্ট করা, সেদিকে ডাকা। আরেকটি হলো তাওফীক দেওয়ার হিদায়াত, যেখানে হৃদয় সত্যিই সেই দেখানো জিনিসটিকে আঁকড়ে ধরে। প্রথমটি একজন রাসূল, একজন শিক্ষক বা একজন অভিভাবকের করার মতো কাজ। দ্বিতীয়টি একটি দান, আর তা কারও হাতে অর্পণ করা হয়নি।"
          },
          {
            "en": "The proof is that the same verb is affirmed of the same Prophet ﷺ elsewhere. 42:52 tells him: and indeed, you guide to a straight path. Notice how the two verses build the verb differently. At 42:52 it is followed by the preposition ila, guiding toward a road; at 28:56 it takes a person directly as its object. Pointing to the road is his and he is praised for it. Delivering a particular person onto it is not his at all.",
            "bn": "এর প্রমাণ হলো, একই ক্রিয়াপদ একই নবী ﷺ-এর জন্য অন্যত্র স্বীকার করা হয়েছে। 42:52 আয়াতে তাঁকে বলা হয়: আর নিশ্চয়ই তুমি সরল পথের দিকে পথ দেখাও। লক্ষ করুন, দুটি আয়াত ক্রিয়াপদটিকে দুই রকম গঠনে বসিয়েছে। 42:52-এ এর পরে আসে 'ইলা' — অর্থাৎ কোনো পথের দিকে দিকনির্দেশ করা; আর 28:56-এ ক্রিয়াপদটি সরাসরি একজন ব্যক্তিকেই কর্ম হিসেবে নেয়। পথের দিকে ইশারা করা তাঁরই কাজ, আর সে জন্য তাঁর প্রশংসাও করা হয়েছে। কিন্তু নির্দিষ্ট কোনো মানুষকে সেই পথে পৌঁছে দেওয়া তাঁর কাজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Shown to Everyone",
          "bn": "পথ দেখানো হয়েছে সবাইকে"
        },
        "p": [
          {
            "en": "76:3 states the showing at its widest: indeed, We guided him to the way, be he grateful or be he ungrateful. The guidance in that verse arrives before any response and is not withdrawn by refusal, which is why it cannot be the same thing as the guidance denied here — that one, by its nature, is only ever found in someone who accepted. And 2:272 gives the rule plainly, inside a passage about charity: not upon you is their guidance, but Allah guides whom He wills.",
            "bn": "76:3 আয়াতটি পথ দেখানোর দিকটিকে তার সবচেয়ে প্রশস্ত রূপে বলে: নিশ্চয়ই আমি তাকে পথ দেখিয়েছি, সে কৃতজ্ঞ হোক বা অকৃতজ্ঞ। ওই আয়াতে হিদায়াত পৌঁছে যায় কোনো সাড়া দেওয়ার আগেই, আর প্রত্যাখ্যানের কারণে তা প্রত্যাহার করা হয় না। এ কারণেই এটি এখানে অস্বীকৃত হিদায়াতের মতো একই জিনিস হতে পারে না — কারণ সেটি স্বভাবতই কেবল তার মধ্যেই পাওয়া যায় যে গ্রহণ করেছে। আর 2:272 আয়াত নিয়মটি সরল ভাষায় বলে, দান-সদকা নিয়ে আলোচনার ভেতরেই: তাদের হিদায়াত দেওয়া তোমার দায়িত্ব নয়, বরং আল্লাহ যাকে চান হিদায়াত দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Between Two Answers",
          "bn": "দুই জবাবের মাঝখানে"
        },
        "p": [
          {
            "en": "The placement is worth seeing. Just before, 28:52-55 describes people given the Scripture before this who believed when it was recited to them, are given their reward twice for their patience, avert evil with good, and spend from what they have been provided. Just after, 28:57 has the Quraysh saying that if they followed the guidance with him they would be swept from their land. Two responses, one recitation, one Messenger ﷺ — and the verse set between them does not locate the difference anywhere in him.",
            "bn": "আয়াতটির অবস্থান লক্ষ করার মতো। ঠিক আগে, 28:52-55 আয়াতে বর্ণিত হয়েছে সেই মানুষদের কথা, যাদের এর আগে কিতাব দেওয়া হয়েছিল এবং তাদের সামনে তিলাওয়াত করা হলে তারা ঈমান আনে, ধৈর্যের কারণে দ্বিগুণ প্রতিদান পায়, মন্দকে ভালো দিয়ে প্রতিহত করে এবং তাদের যা দেওয়া হয়েছে তা থেকে ব্যয় করে। ঠিক পরে, 28:57 আয়াতে কুরাইশরা বলে, তারা যদি তাঁর সঙ্গে হিদায়াতের অনুসরণ করে তবে তাদের ভূমি থেকে উৎখাত করা হবে। দুই রকম সাড়া, একই তিলাওয়াত, একই রাসূল ﷺ — আর মাঝখানে বসানো আয়াতটি এই পার্থক্যের কারণ তাঁর মধ্যে খোঁজে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Left in Your Hands",
          "bn": "আপনার হাতে যা থাকে"
        },
        "p": [
          {
            "en": "The Quran takes the grief of a caller seriously rather than scolding it: 26:3 says perhaps you would kill yourself with grief that they will not be believers, and 18:6 says nearly the same about sorrow over those who do not believe in this message. That feeling is not treated as a fault. It is treated as a weight picked up from the wrong end, and this verse is where it is set down.",
            "bn": "কুরআন একজন আহ্বানকারীর শোককে ধমক দেয় না, বরং গুরুত্ব দিয়ে দেখে: 26:3 আয়াত বলে, তারা ঈমান আনছে না বলে তুমি হয়তো দুঃখে নিজেকেই শেষ করে ফেলবে; আর 18:6 আয়াত প্রায় একই কথা বলে, যারা এই বাণীতে বিশ্বাস করে না তাদের নিয়ে শোকের ব্যাপারে। এই অনুভূতিকে দোষ হিসেবে দেখা হয়নি। একে দেখা হয়েছে এমন এক বোঝা হিসেবে, যা ভুল দিক থেকে তোলা হয়েছে — আর এই আয়াতটিই সেই জায়গা, যেখানে তা নামিয়ে রাখা হয়।"
          },
          {
            "en": "Practically, the verse separates the work from the result. Conveying, advising, keeping the door open, praying — all of it remains, and none of it is measured by whether the person moved. What is removed is the private ledger in which you score yourself by other people's decisions. It takes away despair over the one who has not responded, and it takes away the quieter danger on the other side, which is quietly taking credit when someone does.",
            "bn": "ব্যবহারিকভাবে আয়াতটি কাজ ও ফলাফলকে আলাদা করে দেয়। পৌঁছে দেওয়া, উপদেশ দেওয়া, দরজা খোলা রাখা, দোয়া করা — সবই থেকে যায়, আর এর কোনোটিই এই মাপে মাপা হয় না যে মানুষটি বদলাল কি না। যা সরিয়ে নেওয়া হয় তা হলো সেই ব্যক্তিগত হিসাবের খাতা, যেখানে আপনি অন্য মানুষের সিদ্ধান্ত দিয়ে নিজের নম্বর কাটেন। এটি যেমন সরিয়ে দেয় সাড়া না-দেওয়া মানুষটিকে নিয়ে হতাশা, তেমনি সরিয়ে দেয় অপর পাশের নীরব বিপদটিকেও — কেউ সাড়া দিলে ভেতরে ভেতরে কৃতিত্ব নিয়ে নেওয়া।"
          }
        ]
      }
    ]
  },
  "28:77": {
    "sections": [
      {
        "h": {
          "en": "Advice Shouted at a Rich Man",
          "bn": "এক ধনীকে দেওয়া উপদেশ"
        },
        "p": [
          {
            "en": "This verse is speech inside a story. Qarun was of the people of Musa (AS), and 28:76 says Allah gave him treasures whose very keys were a burden for a band of strong men. When he swaggered, his own people gave him the counsel preserved at the end of 28:76 and in this verse — do not exult, seek the Hereafter with what you were given, take your share of this world, do good, and do not work corruption. The Quran kept their words because the advice outgrew its occasion.",
            "bn": "এই আয়াত একটি কাহিনির ভেতরের সংলাপ। কারুন ছিল মূসা (আঃ)-এর সম্প্রদায়ের লোক, আর 28:76 বলে, আল্লাহ তাকে এমন ধনভান্ডার দিয়েছিলেন যার চাবিগুলো বইতেই একদল বলবান লোকের কষ্ট হতো। সে যখন দম্ভ করল, তার নিজ সম্প্রদায়ের লোকেরাই তাকে সেই উপদেশ দিল যা 28:76-এর শেষাংশ ও এই আয়াত সংরক্ষণ করেছে — দম্ভ কোরো না, যা দেওয়া হয়েছে তা দিয়ে আখিরাত খোঁজো, দুনিয়ায় তোমার অংশ নাও, কল্যাণ করো, আর ফাসাদ কোরো না। কুরআন তাদের কথাগুলো রেখে দিয়েছে, কারণ উপদেশটি তার উপলক্ষ ছাড়িয়ে গেছে।"
          },
          {
            "en": "Notice who is being addressed: not a poor man being consoled, but a wealthy man being warned. The verse assumes the wealth is real, lawful in origin — Allah gave it — and enormous. Its five clauses are therefore a complete policy for handling abundance, delivered at the moment abundance was going to a man's head.",
            "bn": "লক্ষ করুন কাকে সম্বোধন করা হচ্ছে: সান্ত্বনা পাওয়া কোনো দরিদ্রকে নয়, বরং সতর্ক করা হচ্ছে এক ধনীকে। আয়াতটি ধরে নেয় সম্পদটি বাস্তব, উৎসে বৈধ — আল্লাহই দিয়েছেন — এবং বিপুল। তাই এর পাঁচটি বাক্যাংশ প্রাচুর্য সামলানোর এক পূর্ণাঙ্গ নীতিমালা — ঠিক সেই মুহূর্তে দেওয়া, যখন প্রাচুর্য একজন মানুষের মাথায় চড়ে বসছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Seek the Hereafter With It",
          "bn": "তা দিয়ে আখিরাত খোঁজো"
        },
        "p": [
          {
            "en": "The first clause sets the direction: seek, with what Allah has given you, the home of the Hereafter. The preposition matters — not despite the wealth, and not after abandoning it, but with it, as a vehicle. Money becomes sadaqah, sponsorship of good, relief of debt, support of family; the same coins that anchored Qarun to the ground could have been fuel for the road. Wealth in this reading has no fixed moral character; its direction of travel decides everything.",
            "bn": "প্রথম বাক্যাংশ দিক ঠিক করে দেয়: আল্লাহ তোমাকে যা দিয়েছেন তা দিয়ে আখিরাতের আবাস খোঁজো। এখানে 'দিয়ে' কথাটিই আসল — সম্পদ সত্ত্বেও নয়, সম্পদ ত্যাগ করেও নয়, বরং সম্পদ দিয়ে — বাহন হিসেবে। টাকা হয়ে ওঠে সাদাকা, কল্যাণকাজের পৃষ্ঠপোষকতা, ঋণমুক্তি, পরিবারের ভরণপোষণ; যে মুদ্রা কারুনকে মাটিতে গেঁথে রেখেছিল, তা-ই হতে পারত পথের জ্বালানি। এই পাঠে সম্পদের কোনো স্থির নৈতিক চরিত্র নেই; তার যাত্রার দিকই সব ঠিক করে দেয়।"
          },
          {
            "en": "The Quran pairs this with its sober description of worldly life in 57:20 — play, adornment, boasting and rivalry in wealth and children — and with the balanced du'a of 2:201 for good in this world and good in the Hereafter. The Qarun verse is where those two threads meet: the world is not despised, but it is demoted to raw material for something permanent.",
            "bn": "কুরআন এর সঙ্গে মিলিয়ে দেয় 57:20 আয়াতে দুনিয়ার জীবনের সংযত বর্ণনা — খেলা, সাজসজ্জা, অহংকার আর ধনসম্পদ ও সন্তানে প্রতিযোগিতা — এবং 2:201 আয়াতের ভারসাম্যপূর্ণ দোয়া: দুনিয়ায় কল্যাণ ও আখিরাতে কল্যাণ। কারুনের আয়াতটিই সেই জায়গা যেখানে সুতো দুটি মেলে: দুনিয়াকে ঘৃণা করা হয়নি, তবে তাকে নামিয়ে আনা হয়েছে স্থায়ী কিছুর কাঁচামালের স্তরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Share of This World",
          "bn": "দুনিয়ায় তোমার অংশ"
        },
        "p": [
          {
            "en": "Then a clause that surprises people who expect scripture to scorn the world: and do not forget your nasib, your share, of this world. The commentators read it in two ways, and both are found in the classical tafsir. One: enjoy what is lawful — food, family, rest — for renouncing Allah's permitted gifts is no virtue. The other: your true share of this world is what you send ahead of it, since only that remains yours.",
            "bn": "তারপর এমন এক বাক্যাংশ, যা তাদের অবাক করে যারা ভাবে ধর্মগ্রন্থ দুনিয়াকে কেবল তুচ্ছই করবে: আর দুনিয়ায় তোমার 'নাসীব' — তোমার অংশ — ভুলে যেয়ো না। মুফাসসিরগণ এটি দুইভাবে পড়েছেন, আর দুটিই ধ্রুপদী তাফসীরে পাওয়া যায়। এক: বৈধ যা আছে তা উপভোগ করো — খাবার, পরিবার, বিশ্রাম — কারণ আল্লাহর অনুমোদিত নিয়ামত বর্জন কোনো পুণ্য নয়। দুই: দুনিয়ায় তোমার প্রকৃত অংশ তা-ই যা তুমি এখান থেকে আগে পাঠাও, কারণ কেবল সেটুকুই তোমার থেকে যায়।"
          },
          {
            "en": "The two readings do not compete so much as guard against opposite failures. The first forbids a joyless, self-punishing religiosity that Islam never asked for. The second forbids letting the enjoyment become the point. A believer holds both: eating gratefully at the table, while knowing that of the whole banquet, only what was shared travels on.",
            "bn": "পাঠ দুটি পরস্পরের প্রতিদ্বন্দ্বী নয়; বরং দুটি বিপরীত ব্যর্থতা থেকে পাহারা দেয়। প্রথমটি নিষেধ করে সেই আনন্দহীন, আত্মপীড়নমূলক ধার্মিকতা, যা ইসলাম কখনো চায়নি। দ্বিতীয়টি নিষেধ করে উপভোগকেই উদ্দেশ্য বানিয়ে ফেলা। মুমিন দুটোই ধরে রাখে: টেবিলে বসে কৃতজ্ঞচিত্তে খায়, আর জানে — গোটা ভোজসভার মধ্যে কেবল যা ভাগ করা হয়েছে, সেটুকুই সঙ্গে যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ihsan Answered With Ihsan",
          "bn": "ইহসানের জবাবে ইহসান"
        },
        "p": [
          {
            "en": "The fourth clause gives generosity its logic: do good as Allah has done good to you. Ihsan toward others is presented as a response, not an initiative — you are not the origin of your wealth, so passing good along is simply matching the treatment you received. This cuts the root of Qarun's disease, which surfaces two verses later when he answers in 28:78 that he was given it all because of knowledge he had. The man who believes he generated his blessings will see no reason to share them.",
            "bn": "চতুর্থ বাক্যাংশ দানশীলতার যুক্তি দেয়: কল্যাণ করো, যেমন আল্লাহ তোমার প্রতি কল্যাণ করেছেন। অন্যের প্রতি ইহসানকে এখানে দেখানো হয়েছে প্রতিদান হিসেবে, উদ্যোগ হিসেবে নয় — তোমার সম্পদের উৎস তুমি নও; কাজেই কল্যাণ এগিয়ে দেওয়া মানে কেবল যে আচরণ পেয়েছ তারই প্রতিফলন। এটিই কারুনের ব্যাধির মূল কেটে দেয় — যা দুই আয়াত পরে প্রকাশ পায়, যখন সে 28:78 আয়াতে জবাব দেয় যে এসব তাকে দেওয়া হয়েছে তার নিজের জ্ঞানের কারণে। যে মানুষ বিশ্বাস করে নিয়ামত সে নিজেই বানিয়েছে, সে তা ভাগ করার কোনো কারণ দেখবে না।"
          },
          {
            "en": "The final clause closes the policy: do not seek corruption in the land, for Allah does not love the corrupters. Wealth is power, and power leaks into fasad easily — through arrogance, through crushing competitors, through buying what should not be for sale. The verse ends on Allah's love because that is the real ledger: Qarun had everything except it.",
            "bn": "শেষ বাক্যাংশ নীতিমালাটি বন্ধ করে: যমীনে ফাসাদ খুঁজো না, কারণ আল্লাহ ফাসাদকারীদের ভালোবাসেন না। সম্পদ মানেই ক্ষমতা, আর ক্ষমতা সহজেই ফাসাদে গড়িয়ে পড়ে — ঔদ্ধত্যে, প্রতিদ্বন্দ্বীদের পিষে ফেলায়, যা বিক্রির জিনিস নয় তা কিনে নেওয়ায়। আয়াতটি শেষ হয় আল্লাহর ভালোবাসার কথায়, কারণ ওটাই আসল খাতা: কারুনের সবই ছিল — কেবল ওটা ছাড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Story Ends",
          "bn": "কাহিনির পরিণতি"
        },
        "p": [
          {
            "en": "Qarun rejected the counsel. He came out before his people in his adornment, and those who desired the life of this world sighed that they wished for the like of what he was given. Then, as 28:81 recounts, Allah caused the earth to swallow him and his home, and no company defended him. By the next morning, 28:82 says, the same admirers were saying that provision is extended and withheld by Allah's decree, and that only His grace had spared them.",
            "bn": "কারুন উপদেশটি প্রত্যাখ্যান করল। সে তার জাঁকজমক নিয়ে নিজের সম্প্রদায়ের সামনে বের হলো, আর যারা দুনিয়ার জীবন কামনা করত তারা আফসোস করে বলল — তাকে যা দেওয়া হয়েছে তেমনটি যদি আমাদেরও থাকত। তারপর, 28:81 যেমন বর্ণনা করে, আল্লাহ তাকে ও তার ঘরবাড়িকে মাটিতে ধসিয়ে দিলেন, আর কোনো দলই তাকে রক্ষা করল না। পরদিন সকালেই, 28:82 বলে, সেই মুগ্ধ লোকেরাই বলছিল — রিযিক আল্লাহর ফয়সালাতেই প্রশস্ত ও সংকুচিত হয়, আর কেবল তাঁর অনুগ্রহই আমাদের বাঁচিয়েছে।"
          },
          {
            "en": "For readers who will never hold treasure-house keys, the verse still applies at every scale, because everyone has some given thing — income, skill, influence, time. The audit it suggests is concrete: what portion of each is currently seeking the Hereafter, what portion is lawful enjoyment, and what portion, if any, is quietly working harm. Qarun's people asked him those questions once; the verse asks its reader daily.",
            "bn": "যে পাঠক কোনোদিন ধনভান্ডারের চাবি ধরবে না, তার জন্যও আয়াতটি প্রতিটি মাপে প্রযোজ্য, কারণ প্রত্যেকেরই কিছু-না-কিছু দেওয়া জিনিস আছে — আয়, দক্ষতা, প্রভাব, সময়। আয়াতটি যে হিসাব-নিরীক্ষার ইঙ্গিত দেয় তা সুনির্দিষ্ট: এর প্রতিটির কত অংশ এখন আখিরাত খুঁজছে, কত অংশ বৈধ উপভোগ, আর কত অংশ — যদি থাকে — নীরবে ক্ষতি করে চলেছে। কারুনের লোকেরা তাকে প্রশ্নগুলো একবারই করেছিল; আয়াতটি তার পাঠককে করে প্রতিদিন।"
          }
        ]
      }
    ]
  },
  "28:88": {
    "sections": [
      {
        "h": {
          "en": "The Last Verse of al-Qasas",
          "bn": "আল-কাসাসের শেষ আয়াত"
        },
        "p": [
          {
            "en": "This is the closing verse of Surah al-Qasas, and the three verses before it are addressed to the Prophet ﷺ. 28:86 tells him he had not been expecting that the Book would be conveyed to him, and that it came as a mercy from his Lord, so he must not be an assistant to the disbelievers. 28:87 tells him not to let them turn him from the verses of Allah, to invite people to his Lord, and never to be of those who associate.",
            "bn": "এটি সূরা আল-কাসাসের শেষ আয়াত, আর এর আগের তিনটি আয়াত নবী ﷺ-কে সম্বোধন করে বলা। 28:86 আয়াত তাঁকে জানায়, তিনি আশা করেননি যে এই কিতাব তাঁর কাছে পৌঁছে দেওয়া হবে, বরং তা এসেছে তাঁর প্রতিপালকের পক্ষ থেকে রহমত হিসেবে — সুতরাং তিনি যেন কাফিরদের সহায়ক না হন। 28:87 আয়াত বলে, তারা যেন তাঁকে আল্লাহর আয়াত থেকে ফিরিয়ে না দেয়, তিনি যেন মানুষকে তাঁর প্রতিপালকের দিকে ডাকেন, আর কখনোই যেন মুশরিকদের অন্তর্ভুক্ত না হন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prohibition With Its Reason",
          "bn": "নিষেধাজ্ঞা ও তার কারণ"
        },
        "p": [
          {
            "en": "The verse itself opens as a command, not as a description of the end of the world: wa la tad'u ma'a Allahi ilahan akhar, do not invoke another deity along with Allah. Then the ground for it, in two steps. First the statement of fact, la ilaha illa Huwa, there is no deity except He. Then the observation that closes every remaining door: kullu shay'in halikun illa wajhah, everything is perishing except His Face.",
            "bn": "আয়াতটি নিজে শুরু হয় একটি আদেশ দিয়ে, দুনিয়ার সমাপ্তির বর্ণনা দিয়ে নয়: ওয়া লা তাদউ মাআল্লাহি ইলাহান আখার — আল্লাহর সঙ্গে অন্য কোনো ইলাহকে ডেকো না। এরপর দুই ধাপে আসে তার ভিত্তি। প্রথমে তথ্যের ঘোষণা: লা ইলাহা ইল্লা হুয়া — তিনি ছাড়া কোনো ইলাহ নেই। তারপর সেই পর্যবেক্ষণ যা অবশিষ্ট প্রতিটি দরজা বন্ধ করে দেয়: কুল্লু শাইইন হালিকুন ইল্লা ওয়াজহাহ — তাঁর চেহারা ছাড়া সবকিছুই ধ্বংসশীল।"
          },
          {
            "en": "So the passing of everything else is offered here as an argument rather than as a forecast kept for its own sake: nothing else lasts long enough to be worth calling upon. The surah has already shown the argument working. 28:76 introduces Qarun with treasures whose keys would burden a band of strong men; 28:81 has the earth swallow him and his home, with no company to aid him; and 28:83 assigns the home of the Hereafter to those who seek neither exaltedness nor corruption upon the earth.",
            "bn": "অর্থাৎ অন্য সবকিছুর বিলীন হয়ে যাওয়াকে এখানে পেশ করা হয়েছে যুক্তি হিসেবে, নিছক ভবিষ্যদ্বাণী হিসেবে নয়: অন্য কিছুই এতটা টেকে না যে তাকে ডাকা যেতে পারে। সূরাটি এই যুক্তিকে কাজ করতে দেখিয়েও দিয়েছে। 28:76 আয়াত কারূনের পরিচয় দেয়, যার ধনভাণ্ডারের চাবিগুলোই একদল বলবান লোকের জন্য ভারী ছিল; 28:81 আয়াতে যমীন তাকে ও তার ঘরকে গিলে ফেলে, আর তাকে সাহায্য করার কোনো দল থাকে না; আর 28:83 আয়াত আখিরাতের ঘর নির্ধারণ করে তাদের জন্য, যারা যমীনে ঔদ্ধত্য বা বিপর্যয় কোনোটিই চায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Everything, Not Everyone",
          "bn": "সবকিছু, সবাই নয়"
        },
        "p": [
          {
            "en": "Compare the wording with 55:26, which says kullu man alayha, everyone upon it. Man is the Arabic word for beings with reason, so that verse counts those who can be addressed. This verse says shay', thing, so the sweep widens to anything that can be named at all — an institution, a reputation, a mountain, a language. Halik is the active participle, and the commentators read it of a condition already in force as much as of an appointment made for later; the translation you will read renders it will be destroyed.",
            "bn": "শব্দচয়নটি 55:26 আয়াতের সাথে মিলিয়ে দেখুন, যেখানে আরবিতে বলা হয়েছে কুল্লু মান আলাইহা — এর উপর যারা আছে সবাই (বাংলা অনুবাদে অবশ্য এসেছে 'পৃথিবী পৃষ্ঠে যা আছে সবই', যাতে 'মান'-এর দিকটি ধরা পড়ে না)। 'মান' আরবিতে বুদ্ধিসম্পন্ন সত্তাদের জন্য ব্যবহৃত শব্দ, তাই ওই আয়াত গোনে তাদেরই যাদের সম্বোধন করা যায়। এই আয়াত বলে 'শাইই' — বস্তু; ফলে পরিধি বিস্তৃত হয় এমন সবকিছুতে যাকে আদৌ নাম দেওয়া যায় — কোনো প্রতিষ্ঠান, কোনো সুনাম, কোনো পাহাড়, কোনো ভাষা। 'হালিক' কর্তৃবাচক বিশেষণ, আর মুফাসসিরগণ একে ভবিষ্যতের কোনো নির্ধারিত সময়ের কথা যতটা, ঠিক ততটাই এখনই চালু থাকা এক অবস্থার কথা হিসেবেও পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Except His Face",
          "bn": "তাঁর চেহারা ছাড়া"
        },
        "p": [
          {
            "en": "Ibn Kathir takes illa wajhah as a way of referring to Allah Himself, so that the exception reads: everything except Him. Ahl as-Sunnah affirm the wajh as Allah affirmed it for Himself, without likening it to anything created and without draining the word of meaning, and they do not press the question of how. Read that way, the verse is a statement about who survives, and the survivor is one.",
            "bn": "ইবনে কাসীর 'ইল্লা ওয়াজহাহ'-কে গ্রহণ করেন স্বয়ং আল্লাহকে বোঝানোর একটি রীতি হিসেবে, ফলে ব্যতিক্রমটির অর্থ দাঁড়ায়: তিনি ছাড়া সবকিছু। আহলুস সুন্নাহ 'ওয়াজহ'-কে সেভাবেই স্বীকার করেন যেভাবে আল্লাহ নিজের জন্য তা সাব্যস্ত করেছেন — সৃষ্টির কোনো কিছুর সাথে তুলনা না করে এবং শব্দটিকে অর্থশূন্য না করে; আর তাঁরা 'কীভাবে' প্রশ্নটি নিয়ে চাপাচাপি করেন না। এভাবে পড়লে আয়াতটি কে টিকে থাকেন সে সম্পর্কে একটি ঘোষণা, আর টিকে থাকেন একজনই।"
          },
          {
            "en": "A second gloss is reported among the mufassirun: except what was done seeking His Face. The Quran's own usage keeps that reading in play. 13:22 describes those who were patient seeking the Face of their Lord, and 30:38, on giving the relative, the needy and the traveller their right, says that this is best for those who desire the Face of Allah and that they are the successful. On one reading only He remains; on the other, only what was aimed at Him remains.",
            "bn": "মুফাসসিরগণের মধ্যে আরেকটি ব্যাখ্যাও বর্ণিত: তাঁর চেহারার সন্ধানে যা করা হয়েছে তা ছাড়া। কুরআনের নিজের ব্যবহারই এই পাঠকে সজীব রাখে। 13:22 আয়াত তাদের কথা বলে যারা তাদের প্রতিপালকের চেহারার সন্ধানে ধৈর্য ধরেছে; আর 30:38 আয়াত আত্মীয়, অভাবী ও পথিককে তাদের হক দেওয়া প্রসঙ্গে বলে, যারা আল্লাহর চেহারার আকাঙ্ক্ষা করে তাদের জন্য এটাই উত্তম, আর তারাই সফলকাম। এক পাঠে কেবল তিনিই থাকেন; অন্য পাঠে কেবল তা-ই থাকে যা তাঁকে লক্ষ্য করে করা হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Truest Word a Poet Said",
          "bn": "কবির বলা সবচেয়ে সত্য কথা"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both record from Abu Hurayrah (RA) that the Prophet ﷺ said the truest word a poet ever spoke was the word of Labid: ala kullu shay'in ma khala Allaha batil — everything apart from Allah is false. Labid was a poet of the age before Islam, and the line was not composed as commentary on this verse; it was recognised as arriving at the same place. The Prophet ﷺ did not praise the verse for its craft but for its accuracy.",
            "bn": "ইমাম বুখারী ও ইমাম মুসলিম উভয়েই আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, কোনো কবির বলা সবচেয়ে সত্য কথা হলো লাবীদের এই কথাটি: আলা কুল্লু শাইইন মা খালাল্লাহা বাতিল — আল্লাহ ছাড়া সবকিছুই অসার। লাবীদ ছিলেন ইসলাম-পূর্ব যুগের কবি, আর পঙ্‌ক্তিটি এই আয়াতের ব্যাখ্যা হিসেবে রচিত হয়নি; বরং স্বীকার করা হয়েছে যে তা একই জায়গায় গিয়ে পৌঁছেছে। নবী ﷺ পঙ্‌ক্তিটির প্রশংসা করেছেন তার কারুকাজের জন্য নয়, তার যথার্থতার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "His Is the Judgement",
          "bn": "বিধান তাঁরই"
        },
        "p": [
          {
            "en": "The verse ends on two short clauses: lahu al-hukm wa ilayhi turja'un, His is the judgement and to Him you will be returned. Hukm here is the decision that stands, the word nothing overturns. Earlier in this same surah, 28:70 had already closed on exactly these two clauses, after declaring that there is no deity except Him and that praise is His in the first life and in the Hereafter. The surah states it in the middle and again at the very end.",
            "bn": "আয়াতটি শেষ হয় ছোট দুটি বাক্যে: লাহুল হুকমু ওয়া ইলাইহি তুরজাউন — বিধান তাঁরই, আর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে। এখানে 'হুকম' মানে সেই সিদ্ধান্ত যা টিকে থাকে, যে কথা কোনো কিছুই উল্টে দিতে পারে না। এই সূরারই আগের অংশে, 28:70 আয়াত ঠিক এই দুটি বাক্য দিয়েই শেষ হয়েছিল — তিনি ছাড়া কোনো ইলাহ নেই এবং দুনিয়া ও আখিরাতে সমস্ত প্রশংসা তাঁরই, এ কথা ঘোষণার পর। সূরাটি কথাটি বলে মাঝখানে, আর আবার একেবারে শেষে।"
          },
          {
            "en": "Lived, the verse asks for a distinction rather than a withdrawal. A perishing thing can still be used, enjoyed, worked for and cared for; what it cannot be is invoked. The test is the one the verse itself supplies: of the things you are counting on this week, which would you still be standing without if it were taken away tomorrow? Whatever fails that question was never a support. It was luggage, and the closing clause of this surah says where the road ends.",
            "bn": "বাস্তব জীবনে আয়াতটি প্রত্যাহার নয়, একটি পার্থক্য দাবি করে। ধ্বংসশীল কোনো জিনিসকে ব্যবহার করা যায়, উপভোগ করা যায়, তার জন্য পরিশ্রম করা যায়, তার যত্নও নেওয়া যায়; যা করা যায় না তা হলো তাকে ডাকা। মাপকাঠিটি আয়াত নিজেই দেয়: এই সপ্তাহে আপনি যেসব জিনিসের উপর ভরসা করছেন, তার কোনটি কাল সরে গেলেও আপনি দাঁড়িয়ে থাকতে পারতেন? যা এই প্রশ্নে উতরায় না, তা কখনোই অবলম্বন ছিল না। তা ছিল বোঝা — আর এই সূরার শেষ বাক্যটি বলে দেয় পথটি কোথায় গিয়ে শেষ হয়।"
          }
        ]
      }
    ]
  }
});
