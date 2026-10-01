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
  "28:8": {
    "sections": [
      {
        "h": {
          "en": "Lifted From the Nile",
          "bn": "নীল থেকে তুলে নেওয়া"
        },
        "p": [
          {
            "en": "The sūrah has just told the mother to float her baby on the river and promised to return him. Now a single verb opens the next scene: fa-ltaqaṭahu, \"and they picked him up.\" At-Tabari and al-Qurtubi both pause on the root. Iltiqāṭ, they say, is to find a thing without seeking it and without intending it, what you come upon by chance. The Arabs would say \"I met so-and-so iltiqāṭan,\" meaning suddenly, unlooked-for. The child was not searched for. He arrived.",
            "bn": "সূরাটি এইমাত্র মাকে বলেছে শিশুকে নদীতে ভাসিয়ে দিতে, আর ফিরিয়ে দেওয়ার ওয়াদা করেছে। এবার পরের দৃশ্য খোলে একটিমাত্র ক্রিয়া দিয়ে: ফালতাকাতাহু, 'তারা তাকে তুলে নিল।' তাবারী ও কুরতুবী দুজনেই ধাতুটির উপর থামেন। ইলতিকাত মানে কোনো জিনিস খোঁজ ছাড়া, ইচ্ছা ছাড়া পেয়ে যাওয়া, যা হঠাৎ সামনে এসে পড়ে। আরবরা বলত 'ওমুককে ইলতিকাতান পেলাম,' অর্থাৎ হুট করে, না খুঁজেই। শিশুটিকে কেউ খোঁজেনি। সে নিজেই এসে পৌঁছাল।"
          },
          {
            "en": "Al-Muyassar sets the plain sequence in order: the mother placed him in a chest and cast it into the Nile, and Pharaoh's men came upon him and took him. The water did the carrying. No tracker, no informer, no midwife's report brought the boy to that bank. The same river the regime trusted to hide its cruelty became the road that delivered its own undoing to its own gate, and nobody at the gate suspected a thing.",
            "bn": "মুয়াসসার ঘটনাটা সাজিয়ে দেয় সরল ধারায়: মা তাকে এক সিন্দুকে রেখে নীল নদে ভাসিয়ে দিলেন, আর ফিরআউনের লোকেরা তাকে পেয়ে তুলে নিল। বহন করল পানি। কোনো গুপ্তচর, কোনো সংবাদদাতা, কোনো ধাত্রীর খবর শিশুটিকে ওই পাড়ে আনেনি। যে নদীকে শাসকগোষ্ঠী তাদের নিষ্ঠুরতা লুকানোর জন্য ভরসা করত, সেই নদীই হয়ে উঠল সেই পথ, যে পথে তাদের নিজেদের পতন এসে পৌঁছাল তাদের নিজেদের দরজায়, অথচ দরজার কেউ কিছুই আঁচ করল না।"
          },
          {
            "en": "It matters that the verse keeps the finding accidental. Ibn Kathir, drawing the scene, has the chest drift past Pharaoh's house until servants lift it, not knowing what is inside and afraid to open it without their mistress. Everything about the discovery is small, domestic, unplanned. The grandeur is hidden under reeds and river water. A household reaches for a curiosity floating among the rushes, and reaches, without knowing it, for the hinge on which its own history will turn.",
            "bn": "লক্ষণীয়, আয়াতটি পাওয়াটাকে আকস্মিকই রাখে। ইবন কাসীর দৃশ্যটি আঁকেন এভাবে: সিন্দুকটি ভাসতে ভাসতে ফিরআউনের বাড়ির পাশ দিয়ে যায়, আর দাসীরা সেটা তুলে নেয়, ভেতরে কী আছে না জেনে, মালকিনকে ছাড়া খুলতেও ভয় পেয়ে। পাওয়াটার সবকিছুই ছোট, ঘরোয়া, অপরিকল্পিত। মহত্ত্বটা ঢাকা পড়ে আছে নলখাগড়া আর নদীর পানির নিচে। একটা পরিবার নলবনে ভেসে আসা এক কৌতূহলের দিকে হাত বাড়ায়, আর না জেনেই হাত বাড়ায় সেই মোড়ের দিকে, যেখানে তাদের নিজেদের ইতিহাস ঘুরে যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Letter of Outcome",
          "bn": "পরিণতির লাম"
        },
        "p": [
          {
            "en": "Then comes the verse's hinge, the clause the grammarians built a whole category around: li-yakūna lahum ʿaduwwan wa-ḥazanan, \"so that he would become for them an enemy and a grief.\" Al-Qurtubi and al-Baghawi both name the particle. The lām here, they say, is lām al-ʿāqiba and lām al-ṣayrūra, the letter of outcome and of becoming. It does not report a purpose that someone held. It reports a result that someone reached.",
            "bn": "এরপর আসে আয়াতের মোড়, সেই খণ্ডবাক্য যাকে ঘিরে ব্যাকরণবিদরা গোটা একটা শ্রেণি দাঁড় করিয়েছেন: লিইয়াকূনা লাহুম আদুওওয়ান ওয়া হাযানা, 'যাতে সে তাদের জন্য শত্রু ও দুঃখের কারণ হয়।' কুরতুবী ও বাগাভী দুজনেই অক্ষরটির নাম দেন। এখানকার লাম, তাঁরা বলেন, লামুল আকিবা ও লামুস সাইরূরা, পরিণতি ও হয়ে ওঠার লাম। এটি কারও ধরে রাখা কোনো উদ্দেশ্য জানায় না। জানায় এমন এক ফলাফল যেখানে কেউ গিয়ে পৌঁছাল।"
          },
          {
            "en": "The distinction is the whole point. Al-Baghawi states it flatly: they did not pick him up in order that he become their enemy and their grief; rather the outcome of their affair came round to that. Al-Qurtubi says the same and adds why the Qur'an speaks this way. He names the present state by its eventual end, so the verse labels the act of lifting not by the comfort they wanted from it, but by what it would finally yield.",
            "bn": "পার্থক্যটাই আসল কথা। বাগাভী সোজা বলেন: তারা তাকে এই উদ্দেশ্যে তুলে নেয়নি যে সে তাদের শত্রু ও দুঃখ হবে, বরং তাদের ব্যাপারের পরিণতি ঘুরে এসে এতেই দাঁড়াল। কুরতুবী একই কথা বলে যোগ করেন কেন কুরআন এভাবে বলে। তিনি বর্তমান অবস্থাকে নাম দেন তার শেষ পরিণতি দিয়ে। তাই আয়াত তুলে নেওয়ার কাজটাকে চিহ্নিত করে, তারা এর থেকে যে চোখের শীতলতা চেয়েছিল তা দিয়ে নয়, বরং শেষে যা দাঁড়াবে তা দিয়ে।"
          },
          {
            "en": "Al-Qurtubi presses the idea with a line of poetry: mothers nurse their children, yet it is for death that they nurse them; we build our houses, yet it is for time's ruin that we build. The nursing is joyful, the building is proud, and neither names its true end. So with Pharaoh's household. They reached for a delight to set before their eyes, and the verse, seeing further than they could, calls that delight an enemy and a sorrow.",
            "bn": "কুরতুবী কথাটা জোরালো করেন এক কবিতার পঙক্তি দিয়ে: মায়েরা সন্তানদের দুধ পান করায়, অথচ তারা দুধ পান করায় মৃত্যুর জন্যই; আমরা ঘর বানাই, অথচ বানাই কালের ধ্বংসের জন্যই। দুধ পান করানো আনন্দের, ঘর বানানো গর্বের, অথচ কোনোটাই তার আসল শেষটা মুখে আনে না। ফিরআউনের পরিবারের বেলাতেও তাই। তারা হাত বাড়াল চোখের সামনে রাখার মতো এক আনন্দের দিকে, আর আয়াত তাদের চেয়ে দূর পর্যন্ত দেখে সেই আনন্দকেই বলে শত্রু আর দুঃখ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Lam Read Twice",
          "bn": "দুভাবে পড়া লাম"
        },
        "p": [
          {
            "en": "Ibn Kathir records a second layer under the same letter. He cites Muḥammad ibn Isḥāq and others: the lām here is the lām of outcome, not the lām of purpose, because the household intended nothing of the kind when they picked the child up. The apparent wording, Ibn Kathir grants, requires exactly that reading. Taken at its surface, the sentence describes a consequence that no one at the river aimed at or wanted.",
            "bn": "ইবন কাসীর একই অক্ষরের নিচে আরেকটি স্তর তুলে ধরেন। তিনি মুহাম্মাদ ইবন ইসহাক ও অন্যদের উদ্ধৃত করেন: এখানকার লাম পরিণতির লাম, উদ্দেশ্যের লাম নয়, কারণ শিশুটিকে তুলে নেওয়ার সময় পরিবার এমন কিছুই চায়নি। ইবন কাসীর মানেন, বাক্যের বাহ্যিক শব্দ ঠিক এই পাঠই দাবি করে। উপরের তলায় ধরলে বাক্যটি এমন এক পরিণামের কথা বলে, নদীর পাড়ে যা কেউ চায়নি, কেউ তাক করেনি।"
          },
          {
            "en": "But Ibn Kathir then turns the lām back toward purpose on a deeper view. Look to the meaning of the context, he says, and the letter can stand for causation after all, not the household's causation but God's. He appointed them to pick the child up precisely so that He would make him their enemy and their grief, the more completely to defeat the very wariness they believed they were exercising. Two readings sit on one letter: no human purpose at all, and a purpose set above every purpose of theirs.",
            "bn": "কিন্তু এরপর ইবন কাসীর গভীর এক পাঠে লামটিকে আবার উদ্দেশ্যের দিকে ফেরান। প্রসঙ্গের অর্থের দিকে তাকান, তিনি বলেন, তাহলে অক্ষরটি শেষ পর্যন্ত কারণ বোঝাতেও পারে, তবে পরিবারের কারণ নয়, আল্লাহর কারণ। তিনিই তাদের নিয়োজিত করলেন শিশুটিকে তুলে নিতে, ঠিক এই জন্যই যেন তিনি তাকে তাদের শত্রু ও দুঃখ বানান, আর তাতে তাদের সেই সতর্কতাকেই আরও পুরোপুরি নস্যাৎ করেন যা তারা ভাবছিল তারা কাজে লাগাচ্ছে। একটি অক্ষরের উপর দুটি পাঠ বসে: কোনো মানুষের উদ্দেশ্য নেই, আর আছে এমন এক উদ্দেশ্য যা তাদের প্রতিটি উদ্দেশ্যের উপরে রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Hands Found Him",
          "bn": "কাদের হাতে উঠল"
        },
        "p": [
          {
            "en": "Who exactly are \"the family of Pharaoh\" who did the lifting? At-Tabari lays three answers side by side without choosing. One group, on the authority of as-Suddī, says it was the maidservants of Pharaoh's wife, who were washing at the river and carried the chest in to her. Another, from Muḥammad ibn Qays, says it was Pharaoh's daughter, who came down to the Nile and drew it out. A third, from Ibn Isḥāq, says it was Pharaoh's own retainers, sent to fetch the thing floating on the water.",
            "bn": "যে 'ফিরআউনের পরিবার' তাকে তুলে নিল, তারা ঠিক কারা? তাবারী তিনটি জবাব পাশাপাশি রাখেন, কোনোটিকে বেছে না নিয়ে। সুদ্দীর সূত্রে একটি দল বলে, তারা ছিল ফিরআউনের স্ত্রীর দাসীরা, যারা নদীতে কাপড় ধুচ্ছিল আর সিন্দুকটি তাঁর কাছে বয়ে নিয়ে গেল। মুহাম্মাদ ইবন কায়সের সূত্রে আরেক দল বলে, সে ছিল ফিরআউনের মেয়ে, যে নীল নদে নেমে সেটি তুলে আনে। ইবন ইসহাকের সূত্রে তৃতীয় দল বলে, তারা ছিল ফিরআউনের নিজের অনুচরেরা, যাদের পাঠানো হয়েছিল পানিতে ভাসমান জিনিসটি আনতে।"
          },
          {
            "en": "At-Tabari refuses to rank them. The soundest word on the matter, he says, is simply the word God used, āl Firʿawn, the household of Pharaoh, and he leaves the identity at that. It is a careful habit worth noticing. Where the reports differ and nothing in the text decides between them, the commentator holds to the Qur'an's own wording and declines to manufacture a certainty the verse itself withheld. The detail is left open because God left it open.",
            "bn": "তাবারী এদের মধ্যে কোনো ক্রম বসাতে রাজি নন। এ বিষয়ে সবচেয়ে বিশুদ্ধ কথা, তিনি বলেন, আল্লাহ যে শব্দ ব্যবহার করেছেন সেটাই, আলু ফিরআউন অর্থাৎ ফিরআউনের পরিবার, আর পরিচয়ের প্রশ্ন তিনি সেখানেই রেখে দেন। এটি এক সতর্ক অভ্যাস, খেয়াল করার মতো। যেখানে বর্ণনাগুলো আলাদা আর আয়াতের ভেতরে কোনো কিছু সেগুলোর মীমাংসা করে না, সেখানে তাফসীরকার কুরআনের নিজের শব্দটাই আঁকড়ে ধরেন, আর যে নিশ্চয়তা আয়াত নিজেই দেয়নি তা বানিয়ে নিতে অস্বীকার করেন। খুঁটিনাটিটা খোলা থাকে, কারণ আল্লাহ সেটা খোলা রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Caution Against the Decree",
          "bn": "সতর্কতা বনাম তাকদীর"
        },
        "p": [
          {
            "en": "As-Saʿdī draws out the lesson the lām was pointing at. The end and upshot of this picking-up, he writes, was that the child became an enemy to them and a grief that would grieve them. And the reason he gives is one piercing principle: al-ḥadhar lā yanfaʿu min al-qadar, caution is of no avail against the decree. Every precaution Pharaoh took was aimed at a danger that God then walked calmly past every guard he had set.",
            "bn": "আস-সা'দী সেই শিক্ষাটি টেনে বের করেন, লাম যেদিকে ইশারা করছিল। এই তুলে নেওয়ার শেষ ও পরিণতি, তিনি লেখেন, এই দাঁড়াল যে শিশুটি তাদের শত্রু হলো আর এমন দুঃখ হলো যা তাদের কষ্ট দেবে। আর কারণ হিসেবে তিনি দেন একটিমাত্র তীক্ষ্ণ নীতি: আল-হাযারু লা ইয়ানফাউ মিনাল কাদার, সতর্কতা তাকদীরের বিরুদ্ধে কোনো কাজে আসে না। ফিরআউনের নেওয়া প্রতিটি সাবধানতা এমন এক বিপদের দিকে তাক করা ছিল, যাকে আল্লাহ এরপর তার বসানো প্রতিটি পাহারার পাশ দিয়ে শান্তভাবে হাঁটিয়ে নিলেন।"
          },
          {
            "en": "See the shape of it. The regime feared a deliverer would rise from the Children of Israel, so it killed their sons by the thousand. And the one child it feared above all others, as-Saʿdī says, God destined to be raised under their own hands, under their own watch, and in their own care. The sword that was drawn to prevent him became the very household that would feed and shelter him until he grew.",
            "bn": "আকৃতিটা দেখুন। শাসকগোষ্ঠী ভয় পেত, বনী ইসরাইল থেকে এক উদ্ধারকর্তা উঠে আসবে, তাই তারা হাজারে হাজারে তাদের ছেলেদের হত্যা করত। আর যে একটি শিশুকে তারা সবার চেয়ে বেশি ভয় পেত, আস-সা'দী বলেন, আল্লাহ তাকেই তাকদীরে লিখলেন তাদেরই হাতের নিচে, তাদেরই চোখের সামনে, তাদেরই যত্নে বড় হতে। যে তরবারি তাকে ঠেকাতে বের করা হয়েছিল, সেটাই হয়ে উঠল সেই ঘর, যে ঘর তাকে খাওয়াবে আর আশ্রয় দেবে যত দিন না সে বড় হয়।"
          },
          {
            "en": "This is why Ibn Kathir recalls that ʿUmar ibn ʿAbd al-ʿAzīz once wrote to a group who denied God's decree, quoting this very verse against them. If Pharaoh could have chosen, the deniers argued, he would have made Moses a friend and a helper, never an enemy. But God had already said li-yakūna lahum ʿaduwwan wa-ḥazanan, to be for them an enemy and a grief. The outcome was fixed in words before the chest ever touched the water.",
            "bn": "এ কারণেই ইবন কাসীর মনে করিয়ে দেন, উমর ইবন আবদুল আযীয একবার এমন এক দলকে চিঠি লিখেছিলেন যারা আল্লাহর তাকদীর অস্বীকার করত, আর এই আয়াতটিই তাদের বিরুদ্ধে উদ্ধৃত করেছিলেন। অস্বীকারকারীরা যুক্তি দিত, ফিরআউন চাইলে তো মূসাকে বন্ধু ও সাহায্যকারী বানাতে পারত, শত্রু কখনো নয়। অথচ আল্লাহ আগেই বলে দিয়েছেন লিইয়াকূনা লাহুম আদুওওয়ান ওয়া হাযানা, যাতে সে তাদের জন্য শত্রু ও দুঃখ হয়। সিন্দুক পানি ছোঁয়ার আগেই পরিণতিটা কথায় স্থির হয়ে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Everything by Measure",
          "bn": "সবকিছু পরিমাণমতো"
        },
        "p": [
          {
            "en": "None of the commentators attaches a saying of the Prophet ﷺ to this verse; what follows is a general narration on the decree, not a report tied to Moses' story. In Ṣaḥīḥ Muslim, Ṭāwūs relates that he met Companions who said, \"Everything is by measure,\" and heard ʿAbdullāh ibn ʿUmar report the Prophet ﷺ saying: \"Everything is by measure, even incapacity and capability.\" Muslim places the words in his Book of the Decree.",
            "bn": "তাফসীরকারদের কেউ এই আয়াতের সঙ্গে নবী ﷺ-এর কোনো বাণী জোড়েননি; নিচের বর্ণনাটি তাকদীর নিয়ে একটি সাধারণ হাদীস, মূসার কাহিনির সঙ্গে আটকানো কোনো বর্ণনা নয়। সহীহ মুসলিমে তাউস বর্ণনা করেন, তিনি এমন সাহাবীদের পেয়েছেন যাঁরা বলতেন, 'সবকিছু পরিমাণমতো,' আর তিনি আবদুল্লাহ ইবন উমর (রাঃ)-কে নবী ﷺ থেকে বর্ণনা করতে শুনেছেন: 'সবকিছু পরিমাণমতো, এমনকি অক্ষমতা ও সামর্থ্যও।' মুসলিম কথাগুলো তাঁর কিতাবুল কাদারে রেখেছেন।"
          },
          {
            "en": "The verse and the narration say one thing from two directions. Pharaoh's cleverness, his census of newborns and his killing of the boys one year while sparing them the next, and the household's chance act of lifting a chest, both ran inside a measure already set. The hadith does not cancel effort or planning. It cancels only the illusion that any precaution is the final word over an outcome God has already weighed. You take your care, and then you hand the result back to Him.",
            "bn": "আয়াত আর হাদীস একই কথা বলে দুই দিক থেকে। ফিরআউনের চতুরতা, অর্থাৎ নবজাতক গুনে রাখা আর এক বছর ছেলেদের হত্যা করে পরের বছর ছেড়ে দেওয়া, আর পরিবারের দৈবাৎ সিন্দুক তুলে নেওয়া, দুটোই চলেছে আগে থেকে স্থির করা এক পরিমাণের ভেতরে। হাদীস চেষ্টা বা পরিকল্পনা বাতিল করে না। বাতিল করে শুধু সেই ভ্রমটা, যেন কোনো সতর্কতাই আল্লাহর ওজন করা পরিণতির উপর শেষ কথা। আপনি আপনার সাবধানতা নিন, তারপর ফলটা তাঁর হাতেই ছেড়ে দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Raised in the Tyrant's House",
          "bn": "অত্যাচারীর ঘরে লালিত"
        },
        "p": [
          {
            "en": "As-Saʿdī asks the reader to sit with the irony and reflect on it. Folded inside this single act, he writes, are great benefits for the Children of Israel: much crushing harm turned aside, many abuses stopped before Moses was ever sent, because the boy would grow up to stand among the great ones of the kingdom. The deliverer was being raised inside the very power he would one day be sent to confront.",
            "bn": "আস-সা'দী পাঠককে এই পরিহাসের সামনে থমকে ভাবতে বলেন। এই একটিমাত্র ঘটনার ভাঁজে, তিনি লেখেন, বনী ইসরাইলের জন্য বড় কল্যাণ লুকিয়ে আছে: অনেক পিষে ফেলা বিপদ সরে গেছে, মূসাকে পাঠানোর অনেক আগেই অনেক জুলুম থেমেছে, কারণ ছেলেটি বড় হয়ে রাজ্যের বড়দের একজন হয়ে দাঁড়াবে। যে ক্ষমতার মুখোমুখি একদিন তাকে পাঠানো হবে, সেই ক্ষমতার ভেতরেই উদ্ধারকর্তা লালিত হচ্ছিল।"
          },
          {
            "en": "And it would come by degrees. As-Saʿdī notes that this is God's way with events: He lets matters move gradually, step after step, rather than arriving all at once. The rescue of a whole people did not drop from the sky in a single day; it began with a chest in the reeds and a household that could not help but take the child in. The first move of a great deliverance looked, from the outside, like almost nothing at all.",
            "bn": "আর তা আসবে ধাপে ধাপে। আস-সা'দী বলেন, ঘটনার বেলায় এটাই আল্লাহর রীতি: তিনি বিষয়গুলোকে ধীরে ধীরে, এক ধাপের পর আরেক ধাপে চলতে দেন, একবারে সব নয়। একটা গোটা জাতির মুক্তি একদিনে আকাশ থেকে পড়েনি; শুরু হয়েছিল নলখাগড়ার ভেতর এক সিন্দুক দিয়ে আর এমন এক পরিবার দিয়ে যারা শিশুটিকে তুলে না নিয়ে পারল না। এক বিরাট মুক্তির প্রথম পদক্ষেপটা বাইরে থেকে দেখতে ছিল প্রায় কিছুই না।"
          },
          {
            "en": "Ibn Kathir names the double edge plainly: God turned a heart within that house toward the child because He willed to honour some through him and to bring the tyrant to his doom by the very boy he had sheltered. What the sūrah unfolds after this, how the house responds, how the mother of 28:7 is answered, how the promise made to her is kept, the verse here leaves ahead of itself. For now it is enough that the enemy has been carried indoors, and the house does not yet know what it holds.",
            "bn": "ইবন কাসীর দুই ধারের কথাটা সোজা বলেন: আল্লাহ ওই ঘরের একটি অন্তরকে শিশুটির দিকে ঝুঁকিয়ে দিলেন, কারণ তিনি চেয়েছিলেন তার মাধ্যমে কাউকে সম্মানিত করতে, আর যে ছেলেকে অত্যাচারী আশ্রয় দিয়েছিল তার হাতেই অত্যাচারীকে ধ্বংসে নিতে। এরপর সূরাটি যা খোলে, ঘরটি কীভাবে সাড়া দেয়, ২৮:৭ আয়াতের সেই মাকে কীভাবে জবাব দেওয়া হয়, তাঁকে দেওয়া ওয়াদা কীভাবে রাখা হয়, সেসব এই আয়াত সামনের জন্য রেখে দেয়। আপাতত এটুকুই যথেষ্ট যে শত্রুকে ঘরে তুলে আনা হয়েছে, আর ঘর এখনো জানে না সে কী ধরে রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Called Deliberate Sinners",
          "bn": "ইচ্ছাকৃত অপরাধী বলা হলো"
        },
        "p": [
          {
            "en": "The verse closes with a verdict: inna Firʿawna wa-Hāmāna wa-junūdahumā kānū khāṭiʾīn, Pharaoh, Hāmān and their soldiers were khāṭiʾīn, deliberate sinners. The commentators gloss the word in one direction. At-Tabari reads it as sinning against their Lord; al-Qurtubi as disobedient, idolaters, guilty of sin; al-Baghawi as disobedient and sinful; al-Muyassar as sinful idolaters. This is not the language of an honest mistake. It is the language of a knowing, chosen wrong, and the verse names the men by name: the ruler, his minister, and the army that carried out the orders.",
            "bn": "আয়াতটি শেষ হয় এক রায় দিয়ে: ইন্না ফিরআওনা ওয়া হামানা ওয়া জুনূদাহুমা কানূ খাতিঈন, ফিরআউন, হামান ও তাদের সৈন্যরা ছিল খাতিঈন, ইচ্ছাকৃত অপরাধী। তাফসীরকারেরা শব্দটির ব্যাখ্যা দেন একই দিকে। তাবারী পড়েন তাদের রবের বিরুদ্ধে পাপী বলে; কুরতুবী বলেন নাফরমান, মুশরিক, গুনাহগার; বাগাভী বলেন নাফরমান ও পাপী; মুয়াসসার বলেন পাপী মুশরিক। এটা কোনো সরল ভুলের ভাষা নয়। এটা জেনেবুঝে বেছে নেওয়া অন্যায়ের ভাষা, আর আয়াত লোকগুলোর নাম ধরে ডাকে: শাসক, তার মন্ত্রী, আর যে বাহিনী হুকুম তামিল করেছিল।"
          },
          {
            "en": "One thing must be said as plainly as the verse says its verdict. This āyah describes what the text describes: a specific regime, its named ruler, its named minister, and its soldiers, condemned by God for the slaughter and the oppression already set out earlier in this very sūrah. It licenses nothing against any living person or community, no people and no faith reasoned at from Pharaoh's crimes. The verse convicts only the guilty it names. The reader's business with it is the warning it carries, and the trust it teaches: that no throne, however high it is raised, outruns the decree.",
            "bn": "একটা কথা আয়াত যত সোজা করে তার রায় দেয়, ততটাই সোজা করে বলা দরকার। এই আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে: একটি নির্দিষ্ট শাসকগোষ্ঠী, তার নাম ধরে বলা শাসক, তার নাম ধরে বলা মন্ত্রী আর তার সৈন্যদের, যাদের আল্লাহ দোষী ঠাওরান এই সূরাতেই আগে বলা হত্যা ও জুলুমের জন্য। এটি কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না, ফিরআউনের অপরাধ থেকে যুক্তি টেনে কোনো জাতি বা কোনো ধর্মের বিরুদ্ধেও নয়। আয়াত কেবল তাদেরই দোষী করে যাদের নাম সে ধরে। পাঠকের কাজ এর বহন করা সতর্কবাণী, আর যে ভরসা এটি শেখায়: যত উঁচুতেই তোলা হোক, কোনো সিংহাসন তাকদীরকে ছাড়িয়ে যেতে পারে না।"
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
  "28:18": {
    "sections": [
      {
        "h": {
          "en": "Morning After the Deed",
          "bn": "ঘটনার পরদিন সকালে"
        },
        "p": [
          {
            "en": "The verse opens the morning after the killing, and its first word sets the mood. Fa-asbaha fi al-madinati kha'ifan: so he became, in the city, afraid. Ibn Kathir reads the fear as fear of the consequence of what he had done. At-Tabari spells it out: Moses (AS) was afraid of his deed, of the soul he had killed, that he would be seized and killed in return for it. He cites Ibn Abbas and as-Suddi to the same effect, that the dread was of being taken. The death itself, the sura has already told us in 28:15, was never intended.",
            "bn": "আয়াতটা শুরু হয় খুনের পরদিন সকাল দিয়ে, আর প্রথম শব্দটাই মেজাজটা বেঁধে দেয়। ফা-আসবাহা ফিল মাদীনাতি খায়িফা, অর্থাৎ শহরের ভেতরে সকাল হল তাঁর ভয়ের মধ্যে। ইবন কাসীর এই ভয়কে পড়েন নিজের করা কাজের পরিণতির ভয় হিসেবে। তাবারী কথাটা খুলে বলেন, মূসা (আঃ) ভয় পাচ্ছিলেন নিজের কাজের, যে প্রাণটা তাঁর হাতে গেছে তার, এই আশঙ্কায় যে তাঁকে ধরে এর বদলা নেওয়া হবে। একই অর্থে তিনি ইবন আব্বাস ও সুদ্দীর কথা আনেন, ভয়টা ছিল ধরা পড়ার। মৃত্যুটা নিজে, সূরা আগেই ২৮:১৫ আয়াতে বলে দিয়েছে, কখনো উদ্দেশ্য ছিল না।"
          },
          {
            "en": "Al-Qurtubi gathers more than one answer to the question of what, exactly, Moses (AS) feared. On one reading he feared being taken to account for the killed soul and made to pay for it. On a second, he feared that his own people would give him up to save themselves. On a third, the fear named here is fear of God Himself. The verse does not choose among them, and al-Qurtubi lets all three stand side by side, each true to a different layer of the moment.",
            "bn": "মূসা (আঃ) ঠিক কী ভয় পাচ্ছিলেন, এই প্রশ্নের একটার বেশি জবাব কুরতুবী একত্র করেন। একটি পাঠে তিনি ভয় পাচ্ছিলেন নিহত প্রাণটার জন্য তাঁকে পাকড়াও করে এর দাম চোকাতে বাধ্য করা হবে বলে। আরেকটি পাঠে, তিনি ভয় পাচ্ছিলেন নিজের লোকেরাই নিজেদের বাঁচাতে তাঁকে ধরিয়ে দেবে বলে। তৃতীয় পাঠে, এখানে যে ভয়ের কথা, তা খোদ আল্লাহর ভয়। আয়াত এদের মধ্যে একটাকেও বেছে নেয় না, আর কুরতুবী তিনটি পাঠকেই পাশাপাশি থাকতে দেন, প্রতিটি মুহূর্তের এক একটি স্তরের সত্য।"
          },
          {
            "en": "As-Sa'di draws the inner logic tighter. Moses (AS) spent the morning afraid and watching, he says, wondering whether Pharaoh's people would come to know of it or not. And the reason he was so exposed, as-Sa'di adds, is that he knew no one among the Israelites would dare a thing like this except him. The very boldness that had come to the aid of the weak now made him the one obvious suspect. Fear here is not the fear of a guilty conscience inventing a crime; it is the ordinary human reckoning with a danger that is genuinely closing in.",
            "bn": "সাদী ভেতরের যুক্তিটা আরও আঁটসাঁট করে দেন। তিনি বলেন, মূসা (আঃ) সকালটা কাটালেন ভয়ে আর সতর্ক চোখে, এই ভেবে যে ফিরআউনের লোকেরা বিষয়টা টের পাবে কিনা। আর তিনি যে এতটা অরক্ষিত ছিলেন তার কারণ, সাদী যোগ করেন, তিনি জানতেন বনী ইসরাঈলের ভেতরে তাঁকে ছাড়া আর একজনও এমন কাজে সাহস করত না। যে সাহসটা দুর্বলের পাশে দাঁড়িয়েছিল, সেটাই এখন তাঁকে বানিয়ে দিল একমাত্র স্পষ্ট সন্দেহভাজন। এখানকার ভয় কোনো অপরাধী বিবেকের বানানো অপরাধের ভয় নয়। এ হল সত্যি সত্যি ঘনিয়ে আসা এক বিপদের মুখে স্বাভাবিক মানবিক হিসাব।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Was Watching For",
          "bn": "কীসের অপেক্ষায় মূসা"
        },
        "p": [
          {
            "en": "If the first word named his state, the second names his posture. Yataraqqab: on the watch. Al-Baghawi reads it as awaiting something bad, and defines taraqqub itself as the expectation of the disliked, the braced waiting of someone who knows a blow may land. He cites al-Kalbi that Moses (AS) was waiting to see when he would be seized for the deed. This is not idle looking around; it is the vigilance of a man who expects the worst and is counting the hours until it arrives.",
            "bn": "প্রথম শব্দটা যদি তাঁর অবস্থা বলে থাকে, দ্বিতীয়টা বলে তাঁর ভঙ্গি। ইয়াতারাক্কাব, মানে ওত পেতে থাকা। বাগভী এর অর্থ করেন মন্দ কিছুর অপেক্ষা, আর তারাক্কুব শব্দটিকে বলেন অপছন্দের জিনিসের প্রতীক্ষা, এমন কারও টানটান অপেক্ষা যে জানে যেকোনো মুহূর্তে আঘাত নামতে পারে। তিনি কালবীর কথা আনেন যে মূসা (আঃ) অপেক্ষায় ছিলেন, কখন তাঁকে এই কাজের জন্য ধরা হয়। এটা অলস এদিক-ওদিক তাকানো নয়। এ হল এমন একজনের সতর্কতা যে সবচেয়ে খারাপটাই আশা করছে আর তা আসার আগ পর্যন্ত ঘণ্টা গুনছে।"
          },
          {
            "en": "The commentators fill in exactly what that watching looked for. Al-Qurtubi reports Sa'id ibn Jubayr that yataraqqab means he kept glancing about out of fear, and others that he was awaiting the search, listening for whatever people were saying. Qatadah reads it as awaiting the pursuit, the hunt he knew would come. At-Tabari and the Muyassar settle on the news: Moses (AS) was waiting to hear what the city would make of his affair and of the man who had died. One image is of darting eyes; the other, of a straining ear.",
            "bn": "সেই সতর্ক চোখ ঠিক কী খুঁজছিল, তাফসীরকারেরা তা পূরণ করে দেন। কুরতুবী সাঈদ ইবন জুবায়েরের কথা আনেন যে ইয়াতারাক্কাব মানে তিনি ভয়ে বারবার এদিক-ওদিক তাকাচ্ছিলেন, আর অন্যদের কথায় তিনি খোঁজখবরের অপেক্ষায় ছিলেন, মানুষ কী বলছে তা কান পেতে শুনছিলেন। কাতাদা এর অর্থ করেন ধরতে আসার অপেক্ষা, যে ধাওয়া তিনি জানতেন আসবেই। তাবারী আর মুয়াসসার থিতু হন খবরের উপর, মূসা (আঃ) শুনতে চাইছিলেন তাঁর ঘটনা আর যে লোকটি মারা গেছে তাকে নিয়ে শহর কী বলে। একটি ছবি উদ্বিগ্ন চোখের, আরেকটি কান খাড়া করে থাকার।"
          },
          {
            "en": "Al-Qurtubi notes a smaller ambiguity that colours the whole scene. The verb asbaha can simply mean became, so that the sense is: once he had killed, he became afraid. Or it can keep its root meaning, to enter the morning, so that the verse places us at dawn of the day after. Either way, the night between has done its work. A man who struck in a sudden rush of help now sits in the cold light of what followed, no longer acting but waiting.",
            "bn": "কুরতুবী একটা ছোট্ট দ্ব্যর্থতার দিকে নজর দেন, যা গোটা দৃশ্যটাকে রঙ দিয়ে দেয়। 'আসবাহা' ক্রিয়াটা স্রেফ 'হয়ে গেল' বোঝাতে পারে, তখন অর্থ দাঁড়ায়, খুন করার পর তিনি ভীত হয়ে পড়লেন। আবার এটা মূল অর্থ ধরে রাখতে পারে, মানে সকালে পৌঁছানো, তখন আয়াত আমাদের বসায় পরদিনের ভোরে। যেভাবেই হোক, মাঝের রাতটা তার কাজ সেরে ফেলেছে। যে মানুষটা হঠাৎ সাহায্যের ঝোঁকে হাত চালিয়েছিল, সে এখন বসে আছে তার পরিণামের ঠান্ডা আলোয়, আর কিছু করছে না, শুধু অপেক্ষা করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear Is Not a Fault",
          "bn": "ভয় মানেই দোষ নয়"
        },
        "p": [
          {
            "en": "This is the place to be careful. Al-Qurtubi's opening point was precisely that the prophets of God feel fear, said against those who imagined fear beneath them, and that such fear takes nothing away from a prophet's knowledge of his Lord or his trust in Him. Fear is a human weather, not a verdict on faith. Moses (AS) is not shown here as a man eaten by guilt over a crime; the death, the sura has said, was unintended, and his turning to God was already answered in 28:16.",
            "bn": "এখানেই সতর্ক থাকা দরকার। কুরতুবীর শুরুর কথাটাই ছিল এই, আল্লাহর নবীরা ভয় পান, এ কথা তাদের জবাবে যারা ভয়কে নবীদের জন্য হীন মনে করত। আর এই ভয় নবীর রব-চেনা বা তাঁর উপর ভরসা থেকে কিছুই কমায় না। ভয় মানুষের একটা আবহাওয়া, ঈমানের উপর রায় নয়। মূসা (আঃ)-কে এখানে এমন মানুষ হিসেবে দেখানো হয়নি যাকে কোনো অপরাধের গ্লানি কুরে খাচ্ছে। মৃত্যুটা, সূরা বলেছে, উদ্দেশ্যপ্রণোদিত ছিল না, আর আল্লাহর দিকে তাঁর ফেরার জবাব ২৮:১৬ আয়াতেই দেওয়া হয়ে গেছে।"
          },
          {
            "en": "There is a quiet teaching in that. A believer can be genuinely afraid and genuinely reliant on God at the same time; the two do not cancel. Moses (AS) had already said, my Lord, I have wronged myself, so forgive me, and had been forgiven, and had vowed in 28:17 never again to back a wrongdoer. Yet the morning still comes heavy. Being right with God does not always lift the earthly weight of what has happened; it changes who you carry it with. The fear is real, and so is the One he had just turned to.",
            "bn": "এর ভেতরে চুপচাপ একটা শিক্ষা আছে। একজন মুমিন সত্যিকার ভয়ে থাকতে পারে আর একই সঙ্গে সত্যিকারভাবে আল্লাহর উপর ভরসা রাখতে পারে। দুটি একে অপরকে কাটে না। মূসা (আঃ) আগেই বলে ফেলেছেন, হে আমার রব, আমি নিজের উপর জুলুম করেছি, আমাকে ক্ষমা করুন, আর তিনি ক্ষমাও পেয়েছেন, আর ২৮:১৭ আয়াতে কসম খেয়েছেন যে আর কখনো কোনো অন্যায়কারীর পিঠে হাত রাখবেন না। তবু সকালটা ভারী হয়েই আসে। আল্লাহর সঙ্গে সম্পর্ক ঠিক হয়ে গেলেই দুনিয়ার বোঝাটা সবসময় নেমে যায় না। বদলে যায় কেবল এটা, বোঝাটা আপনি কার সঙ্গে বইছেন। ভয় সত্যি, আর যাঁর দিকে তিনি এইমাত্র ফিরেছেন তিনিও সত্যি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Voice Again",
          "bn": "আবার সেই একই ডাক"
        },
        "p": [
          {
            "en": "Into this braced morning the story springs its surprise. Fa-idha, and all at once, the one who had sought his aid the day before is crying out to him again. At-Tabari, citing Qatadah, notes that istinsar, seeking victory, and istisrakh, crying for rescue, are one and the same act here; and on the authority of Ikrimah, that the man calling out today is the very man Moses (AS) had helped yesterday. Al-Qurtubi explains istisrakh from the root of a loud cry: the one begging rescue shouts and raises his voice for help.",
            "bn": "এই টানটান সকালেই কাহিনি তার চমকটা ছুঁড়ে দেয়। ফা-ইযা, মানে ঠিক তখনই, গতকাল যে লোকটি তাঁর সাহায্য চেয়েছিল সে আবার তাঁকে ডেকে চীৎকার করছে। তাবারী কাতাদার সূত্রে বলেন, এখানে ইসতিনসার, মানে জয় চাওয়া, আর ইসতিসরাখ, মানে উদ্ধারের জন্য চীৎকার, একই কাজ। আর ইকরিমার সূত্রে বলেন, আজ যে লোকটি ডাক দিচ্ছে, সে ঠিক সেই লোক যাকে মূসা (আঃ) গতকাল সাহায্য করেছিলেন। কুরতুবী ইসতিসরাখ শব্দটির অর্থ বের করেন জোর চীৎকারের ধাতু থেকে, উদ্ধার-প্রার্থী লোকটি সাহায্যের জন্য চ্যাঁচায় আর গলা চড়ায়।"
          },
          {
            "en": "Al-Qurtubi adds a detail about the fight itself: the Israelite was now grappling with a second Coptic whom he meant to overpower and press into his service. Whatever the rights of the first quarrel, this was a man who went looking for trouble and expected Moses (AS) to come bail him out of it. At-Tabari pictures Moses passing through the streets, still watching for news of his deed, when he comes upon the same companion locked in combat once more. The pattern, not the single incident, is what the next word will name.",
            "bn": "কুরতুবী ঝগড়াটা নিয়ে একটা খুঁটিনাটি যোগ করেন, সেই ইসরাঈলি লোকটি এবার আরেক কিবতির সঙ্গে হাতাহাতি করছিল, যাকে সে কাবু করে নিজের কাজে খাটাতে চাইছিল। আগের ঝগড়ায় তার হক যা-ই থাকুক, এ ছিল এমন একজন যে ঝামেলা খুঁজে বেড়ায় আর আশা করে মূসা (আঃ) এসে তাকে তা থেকে ছাড়িয়ে নেবেন। তাবারী ছবিটা আঁকেন এভাবে, মূসা (আঃ) গলি দিয়ে যাচ্ছেন, তখনো নিজের কাজের খবরের জন্য সতর্ক, এমন সময় সেই একই সঙ্গীকে আবার লড়াইয়ে জড়িয়ে থাকতে দেখলেন। একটিমাত্র ঘটনা নয়, এই চেহারাটাই পরের শব্দ চিনিয়ে দেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Manifest Ghawiyy",
          "bn": "গাবী মুবীন কথাটির অর্থ"
        },
        "p": [
          {
            "en": "Innaka la-ghawiyyun mubin: indeed you are a manifest ghawi. The commentators turn the word over. At-Tabari reads it as a man of plain error, one whose misguidance has shown itself by his fighting a man yesterday and another today. Ibn Kathir has manifest in misguidance and full of mischief. As-Sa'di reads evident in misguidance, open in his recklessness. The Muyassar keeps it blunt: abundant in error, plain in his straying. Across all of them the charge is not against a single act but against a settled, visible habit of stirring up harm.",
            "bn": "ইন্নাকা লাগাবিয়্যুন মুবীন, মানে তুমি তো স্পষ্ট এক গাবী। তাফসীরকারেরা শব্দটা নানাভাবে উল্টেপাল্টে দেখেন। তাবারী এর অর্থ করেন স্পষ্ট গোমরাহ এক মানুষ, যার গোমরাহি নিজেই ধরা পড়ে গেছে, কাল একজনের সঙ্গে আর আজ আরেকজনের সঙ্গে লড়াই করে। ইবন কাসীরের কাছে এর অর্থ গোমরাহিতে স্পষ্ট আর ফ্যাসাদে ভরা। সাদী পড়েন গোমরাহিতে স্পষ্ট, বেপরোয়ায় খোলা। মুয়াসসার সাফ কথায় রাখে, গোমরাহিতে ঠাসা, পথভ্রষ্টতায় স্পষ্ট। এদের সবার কাছেই অভিযোগটা একটিমাত্র কাজের বিরুদ্ধে নয়, বরং অনিষ্ট বাধানোর এক থিতু, চোখে পড়া অভ্যাসের বিরুদ্ধে।"
          },
          {
            "en": "Al-Qurtubi widens the range further. Ghawi can mean the loser who comes away empty-handed, since the man keeps picking fights with an opponent he cannot overpower. It can mean a plain misleader, a mughwi, one who drags others into ruin; grammatically ghawi is built like wajeea and aleem, where the form carries an active sense. On this reading Moses (AS) is telling him: I killed a man yesterday on your account, and today you call me to another. The word lands as both a diagnosis and a refusal.",
            "bn": "কুরতুবী অর্থের পরিসর আরও বাড়িয়ে দেন। 'গাবী' মানে হতে পারে সেই ব্যর্থ লোক যে খালি হাতে ফেরে, কারণ সে এমন একজনের সঙ্গে বারবার ঝগড়া বাধায় যাকে সে কাবু করতে পারে না। আবার মানে হতে পারে স্পষ্ট পথভ্রষ্টকারী, মুগবী, যে অন্যদের ধ্বংসে টেনে নামায়। ব্যাকরণে 'গাবী' গড়ন পেয়েছে 'ওয়াজী' আর 'আলীম'-এর মতো, যেখানে এই রূপ সক্রিয় অর্থ বহন করে। এই পাঠে মূসা (আঃ) তাকে বলছেন, তোমার কারণে কাল একটা লোককে মেরে ফেললাম, আর আজ তুমি আমাকে আরেকজনের দিকে ডাকছ। শব্দটা একসঙ্গে রোগ চেনানো আর না বলে দেওয়া, দুটোই হয়ে নামে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Was He Addressing",
          "bn": "কাকে বললেন মূসা"
        },
        "p": [
          {
            "en": "To whom is this said? Most of the commentators hear it addressed to the Israelite himself, the man of Moses's own faction. At-Tabari, Ibn Kathir, as-Sa'di and the Muyassar all take the rebuke as spoken to the one who kept crying for help: you fought a man yesterday and you are fighting another today, and your troublemaking is now plain. Al-Baghawi reports this as the reading of the majority and calls it the sounder one. On this view Moses (AS) turns and names the fault of the very person he is being asked to defend.",
            "bn": "কথাটা কাকে বলা হল? বেশিরভাগ তাফসীরকার শোনেন এটা বলা হয়েছে সেই ইসরাঈলি লোকটিকেই, মূসার নিজের দলের মানুষ যে। তাবারী, ইবন কাসীর, সাদী আর মুয়াসসার সবাই এই ভর্ৎসনাকে ধরেন সেই লোকের উদ্দেশে বলা যে বারবার সাহায্যের জন্য চীৎকার করছিল, কাল একজনের সঙ্গে লড়েছ, আজ আরেকজনের সঙ্গে লড়ছ, আর তোমার ফ্যাসাদ এখন স্পষ্ট। বাগভী একে বেশিরভাগ আলিমের পাঠ বলে জানান আর একেই বেশি সহিহ বলেন। এই পাঠে মূসা (আঃ) ঘুরে দাঁড়িয়ে ঠিক সেই লোকটিরই দোষ ধরিয়ে দেন, যাকে রক্ষা করতে তাঁকে ডাকা হচ্ছে।"
          },
          {
            "en": "A second reading keeps the words for the Coptic. Al-Qurtubi cites al-Hasan that Moses (AS) said it to the Copt, for his trying to force the Israelite into his service; al-Baghawi too records a view that the rebuke fell on the Copt, you are a manifest ghawi by your wrongdoing, though he judges the first reading sounder and held by more. The Qur'an leaves the pronoun open. Either way the sentence refuses to simply pick a side, which is the point the verse is quietly pressing.",
            "bn": "আরেকটি পাঠ শব্দগুলো রাখে কিবতির জন্য। কুরতুবী হাসান বসরীর সূত্রে আনেন যে মূসা (আঃ) কথাটা বলেছিলেন কিবতিকে, ইসরাঈলি লোকটিকে জোর করে নিজের কাজে খাটানোর চেষ্টার জন্য। বাগভীও একটি মত লিখে রাখেন যে ভর্ৎসনাটা পড়েছিল কিবতির উপর, তোমার জুলুমের কারণে তুমি তো স্পষ্ট এক গাবী, যদিও তিনি প্রথম পাঠকেই বেশি সহিহ আর বেশি লোকের মত বলে রায় দেন। কুরআন সর্বনামটা খোলা রেখে দেয়। যেভাবেই হোক, বাক্যটা স্রেফ একটা পক্ষ বেছে নিতে রাজি হয় না, আর এটাই সেই কথা যা আয়াত চুপচাপ চেপে ধরছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Justice Without a Side",
          "bn": "পক্ষপাতহীন ন্যায়"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an reads the rebuke against the vow just made. Having said in 28:17 that he would never again be a helper to wrongdoers, Moses (AS) now sees the second quarrel prove that the man he had defended was himself a troublemaker, and so he refuses to be dragged in again. Ma'arif draws two rulings from the sequence: that an oppressed person should be helped even if he is a sinner, and that it is never right to back an oppressor in his wrong. The first duty does not cancel the second.",
            "bn": "মাআরিফুল কুরআন এই ভর্ৎসনাকে পড়ে ঠিক আগের কসমটার আলোয়। ২৮:১৭ আয়াতে বলে ফেলেছেন তিনি আর কখনো অন্যায়কারীদের সাহায্যকারী হবেন না, আর এখন মূসা (আঃ) দেখছেন দ্বিতীয় ঝগড়াটাই প্রমাণ করে দিচ্ছে যে, যাকে তিনি আগে রক্ষা করেছিলেন সে নিজেই একজন ফ্যাসাদি, তাই তিনি আবার জড়িয়ে পড়তে রাজি নন। মাআরিফ এই ধারাবাহিকতা থেকে দুটি হুকুম বের করে আনে, মজলুমকে সাহায্য করা উচিত যদিও সে গুনাহগার হয়, আর অন্যায়কারীকে তার অন্যায়ে পিঠ দেওয়া কখনো ঠিক নয়। প্রথম কর্তব্য দ্বিতীয়টাকে বাতিল করে না।"
          },
          {
            "en": "This is the heart of the verse's lesson. A believer's sense of right is not tribal. Loyalty to your own people, your family, your group, does not mean defending whatever they do; it means being the first to tell them when they are wrong. Moses (AS) does not disown the Israelite as an enemy, nor does he lend him his hand a second time. He names the fault plainly and withholds the help that would feed it. To rebuke someone on your own side is harder than to condemn an outsider, and far more just.",
            "bn": "এখানেই আয়াতের শিক্ষার আসল কথা। মুমিনের ন্যায়বোধ গোত্রের নয়। নিজের লোক, নিজের পরিবার, নিজের দলের প্রতি টান মানে তারা যা-ই করুক তা আগলে রাখা নয়। মানে বরং তারা ভুল করলে সবার আগে সেটা তাদের মুখের উপর বলা। মূসা (আঃ) ইসরাঈলি লোকটিকে শত্রু বলে ত্যাগও করেন না, আবার দ্বিতীয়বার তার দিকে হাতও বাড়ান না। তিনি সাফ করে দোষটা ধরিয়ে দেন, আর যে সাহায্য ওই দোষকে খাইয়ে বড় করত তা আটকে দেন। নিজের পক্ষের কাউকে ভর্ৎসনা করা বাইরের কাউকে দোষারোপ করার চেয়ে কঠিন, আর ঢের বেশি ন্যায্য।"
          },
          {
            "en": "A hadith in Sahih al-Bukhari, number 2444, puts the same principle in the Prophet's own words. Narrated Anas, that Allah's Messenger (peace be upon him) said, Help your brother, whether he is an oppressor or he is an oppressed one. The people asked, O Messenger of Allah, it is right to help him if he is oppressed, but how should we help him if he is an oppressor? He said, By preventing him from oppressing others. To restrain a brother's wrong is itself a way of helping him, and it is exactly what Moses (AS) did.",
            "bn": "সহিহ বুখারীর একটি হাদীস, নম্বর ২৪৪৪, একই নীতি তুলে ধরে নবী ﷺ-এর নিজের মুখে। আনাস (রাঃ) থেকে বর্ণিত, আল্লাহর রাসূল ﷺ বলেছেন, তোমার ভাইকে সাহায্য করো, সে জালিম হোক বা মজলুম। সাহাবিরা জিজ্ঞেস করলেন, হে আল্লাহর রাসূল, মজলুম হলে তো তাকে সাহায্য করা ঠিক, কিন্তু জালিম হলে তাকে কীভাবে সাহায্য করব? তিনি বললেন, তাকে জুলুম করা থেকে ঠেকিয়ে দিয়ে। ভাইয়ের অন্যায়কে আটকে দেওয়াই তাকে সাহায্য করার একটা পথ, আর মূসা (আঃ) ঠিক এটাই করেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant Against Anyone",
          "bn": "কারও বিরুদ্ধে অজুহাত নয়"
        },
        "p": [
          {
            "en": "One thing must be said plainly. This passage speaks of a specific people in a specific history, the ruling Egyptians of Pharaoh's order who held the Israelites down, and of one man who died in a single fight. The verse records what the account records, and it licenses nothing against any living person, family or community today. No one may read the word enemy here as a verdict on a nation, a people or a neighbour of ours. The story is a mirror held up to the believer's own conduct, not a weapon handed to him against anyone else.",
            "bn": "একটা কথা সাফ বলা দরকার। এই অংশ কথা বলছে এক নির্দিষ্ট সময়ের এক নির্দিষ্ট জাতিকে নিয়ে, ফিরআউনের শাসনের সেই শাসক মিসরীয়দের নিয়ে যারা বনী ইসরাঈলকে দাবিয়ে রেখেছিল, আর একটিমাত্র লড়াইয়ে মারা যাওয়া একজন মানুষকে নিয়ে। আয়াত যা ঘটেছিল তা-ই লিপিবদ্ধ করে, আর আজকের কোনো জীবিত মানুষ, পরিবার বা জনগোষ্ঠীর বিরুদ্ধে এটা কিছুরই অনুমতি দেয় না। এখানকার 'শত্রু' শব্দটাকে কেউ কোনো জাতি, কোনো সম্প্রদায় বা আমাদের কোনো প্রতিবেশীর উপর রায় হিসেবে পড়তে পারে না। কাহিনিটা মুমিনের নিজের আচরণের সামনে ধরা এক আয়না, অন্য কারও বিরুদ্ধে হাতে তুলে দেওয়া অস্ত্র নয়।"
          },
          {
            "en": "Read on its own, the verse is all tension and no resolution. Moses (AS) is exposed, his nerves raw, and now a quarrel pulls at him again; the scene is deliberately left taut. What the city will do with its suspicion, and where this second confrontation leads, the verses that follow will tell. For the reader the lesson is already complete: in the worst of mornings, with fear pressing and loyalties tugging, keep your justice clear-eyed, refuse to feed a wrong even when it wears a familiar face, and carry the dread you cannot shake to the God who had already heard you.",
            "bn": "একা পড়লে আয়াতটা পুরোটাই টানটান, কোনো সমাধান নেই। মূসা (আঃ) অরক্ষিত, স্নায়ু টানটান, আর এখন আরেকটা ঝগড়া তাঁকে টানছে, দৃশ্যটা ইচ্ছে করেই টানটান রাখা হয়েছে। শহর তার সন্দেহ নিয়ে কী করবে, আর এই দ্বিতীয় সংঘর্ষ কোথায় গিয়ে ঠেকে, তা পরের আয়াতগুলো বলবে। পাঠকের জন্য শিক্ষাটা এখানেই পূর্ণ, সবচেয়ে খারাপ সকালেও, ভয় যখন চেপে ধরছে আর আপনজনের টান যখন টানছে, নিজের ন্যায়কে পরিষ্কার চোখে রাখুন, চেনা চেহারায় এলেও কোনো অন্যায়কে খাওয়াতে রাজি হবেন না, আর যে ভয় কিছুতেই যাচ্ছে না তা বয়ে নিয়ে যান সেই আল্লাহর কাছে, যিনি আগেই আপনার ডাক শুনেছেন।"
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
  "28:32": {
    "sections": [
      {
        "h": {
          "en": "The Hand in the Collar",
          "bn": "জামার বুকে হাত"
        },
        "p": [
          {
            "en": "The scene is a dark valley beside Mount Tur, where Musa (AS) has turned aside to a fire and heard his Lord speak to him. Now comes the first of two commands about his own body: usluk yadaka fi jaybika, insert your hand into your collar. At-Tabari glosses usluk as adkhil, put in, and reads the jayb as the opening of the shirt. Al-Muyassar makes it the slit of the garment that runs down toward the chest. The first proof will come not from a staff on the ground, but from Musa's own hand.",
            "bn": "দৃশ্যটা তূর পাহাড়ের পাশে এক অন্ধকার উপত্যকার। মূসা (আঃ) আগুনের দিকে সরে এসেছেন, আর শুনেছেন তাঁর রব তাঁর সঙ্গে কথা বলছেন। এবার নিজের শরীর নিয়ে দুটি নির্দেশের প্রথমটি আসে: উসলুক ইয়াদাকা ফী জাইবিকা, তোমার হাত জামার বুকের ফাঁকে ঢোকাও। তাবারী উসলুক শব্দের অর্থ করেন আদখিল, অর্থাৎ ভেতরে ঢোকানো, আর জাইব বলতে বোঝেন জামার খোলা অংশ। মুয়াসসারের কাছে এটা জামার সেই চেরা, যা বুকের দিকে নেমে আসে। প্রথম প্রমাণটা আসবে মাটিতে পড়ে থাকা লাঠি থেকে নয়, আসবে মূসার নিজের হাত থেকে।"
          },
          {
            "en": "Al-Qurtubi notices a small thing the wording carries. Because the collar sits toward the left, the hand slipped inside it is the right hand, a point he credits to al-Qushayri; and because the commentators picture the hand pressed against the chest, the jayb is understood to open at the breast. So the gesture is intimate and plain. A man reaches into his own shirt, against his heart, and what he draws back out is light. Nothing at all is fetched from outside him.",
            "bn": "শব্দের ভাঁজে লুকানো ছোট একটা ইঙ্গিত কুরতুবী ধরিয়ে দেন। জামার বুকের কাটা যেহেতু বাঁ দিকে থাকে, ভেতরে ঢোকানো হাতটা তাই ডান হাত, কুশাইরীর বরাতে তিনি এ কথা বলেন। আর তাফসীরকারেরা হাতটাকে বুকের সঙ্গে চেপে ধরা অবস্থায় কল্পনা করেন বলে বোঝা যায়, জাইব মানে বুকের কাছের খোলা জায়গা। তাই ভঙ্গিটা একেবারে ঘরোয়া আর সরল। একজন মানুষ নিজের জামার ভেতরে, নিজের বুকের কাছে হাত ঢোকায়, আর টেনে বের করে আনে আলো। বাইরের কিছুই এখানে আনা হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Radiant, Not Diseased",
          "bn": "রোগ নয়, জ্যোতি"
        },
        "p": [
          {
            "en": "Takhruj baydaa min ghayri suu: it comes out white, without suu, without harm. Every commentator fetched here reads suu in the same sense, and it matters. At-Tabari says min ghayri suu means without baras, the whitening skin disease; Ibn Kathir repeats the identical gloss, with no trace of leukoderma left on it. The phrase exists precisely to kill the wrong picture. This whiteness is not a sickly pallor and not a mark of disease. It is radiance, and the Qur'an denies the illness so that no reader can mistake the sign for an affliction.",
            "bn": "তাখরুজ বাইদা মিন গাইরি সূ: হাত বেরিয়ে আসে সাদা হয়ে, কোনো সূ ছাড়া, কোনো খুঁত ছাড়া। এখানে আনা প্রত্যেক তাফসীরকারই সূ শব্দকে একই অর্থে পড়েন, আর এটাই গুরুত্বপূর্ণ। তাবারী বলেন, মিন গাইরি সূ মানে বারাস ছাড়া, অর্থাৎ ত্বক সাদা করে দেওয়া রোগ ছাড়া; ইবন কাসীর ঠিক একই ব্যাখ্যা দেন, কুষ্ঠ বা শ্বেতির কোনো দাগ ছাড়াই। কথাটা রাখা হয়েছে ভুল ছবিটা গোড়াতেই মুছে দিতে। এই সাদা রঙ অসুস্থ ফ্যাকাশে নয়, রোগের দাগও নয়। এটা জ্যোতি, আর কুরআন রোগটাকে অস্বীকার করে দেয় যেন কোনো পাঠক নিদর্শনটাকে কোনো ব্যাধি বলে ভুল না করে।"
          },
          {
            "en": "What kind of light, then? Al-Hasan, quoted by at-Tabari, says the hand emerged as though it were a lamp, so that Musa (AS) grew certain he had met his Lord. Ibn Kathir likens it to a piece of the moon gleaming in a flash of lightning. Al-Baghawi says it shone with rays like the light of the sun; al-Muyassar, white as snow. The hand that terror had made him clutch to himself becomes a torch. Defect and sickness are ruled out, and sheer brilliance is all that remains.",
            "bn": "তাহলে কেমন আলো? তাবারীর উদ্ধৃতিতে হাসান বলেন, হাত বেরিয়ে এল যেন একটা প্রদীপ, ফলে মূসা (আঃ) নিশ্চিত হলেন যে তিনি তাঁর রবের সাক্ষাৎ পেয়েছেন। ইবন কাসীর এটাকে তুলনা করেন বিদ্যুতের ঝলকে চমকানো চাঁদের এক টুকরোর সঙ্গে। বাগভী বলেন, সূর্যের আলোর মতো রশ্মি ছড়িয়ে হাতটা জ্বলছিল; মুয়াসসারের ভাষায়, বরফের মতো সাদা। ভয়ে যে হাত তিনি নিজের গায়ে চেপে ধরেছিলেন, সেটাই হয়ে ওঠে মশাল। খুঁত আর রোগ বাদ পড়ে গেল, রইল শুধু ঝলমলে দ্যুতি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Terror of the Serpent",
          "bn": "সাপ দেখে ভয়"
        },
        "p": [
          {
            "en": "To feel the second command, go back to the verse before. In 28:31 Musa (AS) threw down his staff, saw it writhing like a snake, and turned to flee without looking back; then he was told, approach, do not fear, you are among the secure. The rahb in our verse is that very fright, not some abstract unease. At-Tabari explains mina r-rahb as from the fear and alarm that reached you from witnessing the horror of the serpent. The man God is equipping is, at this exact moment, shaking.",
            "bn": "দ্বিতীয় নির্দেশটা বুঝতে হলে আগের আয়াতে ফিরে যেতে হবে। ২৮:৩১ আয়াতে মূসা (আঃ) লাঠি ছুড়ে ফেলেন, দেখেন সেটা সাপের মতো কিলবিল করছে, আর পেছন ফিরে না তাকিয়েই দৌড় দেন; তখন তাঁকে বলা হয়, সামনে এসো, ভয় পেয়ো না, তুমি নিরাপদদের একজন। আমাদের আয়াতের রাহব সেই ভয়টাই, কোনো অস্পষ্ট অস্বস্তি নয়। তাবারী মিনার রাহব-এর ব্যাখ্যায় বলেন, এ হলো সাপের ভয়ংকর রূপ দেখে তোমার ভেতরে ঢুকে পড়া ভয় আর আতঙ্ক। আল্লাহ যাকে প্রস্তুত করছেন, সে এই মুহূর্তে কাঁপছে।"
          },
          {
            "en": "The early authorities gather around the same meaning. Mujahid glosses the word as al-faraq, dread; Qatada as ar-ruab, terror; Ibn Zayd as whatever alarm at the serpent had entered him. At-Tabari also notes that the reciters differ over the vowels, rahab or ruhb, and says both are well-known dialects carrying one meaning, so either recitation is correct. The disagreement is only in the sound, never in the sense. Whatever the vowel, the thing being named is plain fear in a prophet's chest, and the Qur'an does not hide it.",
            "bn": "পুরোনো যুগের বিশেষজ্ঞরা একই অর্থের চারপাশে জড়ো হন। মুজাহিদ শব্দটির অর্থ করেন আল-ফারাক, মানে ত্রাস; কাতাদা করেন আর-রুব, মানে আতঙ্ক; ইবন যায়দ বলেন, সাপ দেখে যে ভয় তাঁর ভেতরে ঢুকেছিল তা-ই। তাবারী আরও বলেন, পাঠকেরা শব্দটির স্বরধ্বনি নিয়ে ভিন্ন মত রাখেন, রাহাব না রুহব, আর দুটো উচ্চারণই সুপরিচিত ভাষারীতি, একই অর্থ বহন করে, তাই যেটাই পড়া হোক শুদ্ধ। মতভেদটা শুধু ধ্বনিতে, অর্থে কখনোই নয়। স্বর যা-ই হোক, যে জিনিসটার নাম নেওয়া হচ্ছে তা এক নবীর বুকের সোজা ভয়, আর কুরআন তা লুকায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gesture Against Panic",
          "bn": "ভয় থামানোর স্পর্শ"
        },
        "p": [
          {
            "en": "Now the command itself: wadmum ilayka janahaka, draw your janah in to yourself. The word janah is literally a wing, so what is a man's wing? At-Tabari answers through Ibn Abbas: it is your hand. Mujahid is more precise, mapping the limb: the forearm and the upper arm are the janah, while the palm is the hand. As-Sadi reads it as draw in your janah, meaning your upper arm, against your side. The picture is of a bird folding a wing back snugly against its body.",
            "bn": "এবার আসে মূল নির্দেশটা: ওয়াদমুম ইলাইকা জানাহাকা, তোমার জানাহ নিজের দিকে টেনে নাও। জানাহ শব্দের আক্ষরিক অর্থ ডানা, তাহলে মানুষের ডানা কী? তাবারী ইবন আব্বাসের সূত্রে বলেন, এটা তোমার হাত। মুজাহিদ আরও খুঁটিয়ে অঙ্গটা চিনিয়ে দেন, বাহু আর ঊর্ধ্ববাহু হলো জানাহ, আর তালু হলো হাত। সা'দী পড়েন, তোমার জানাহ অর্থাৎ ঊর্ধ্ববাহু নিজের পাঁজরের সঙ্গে টেনে ধরো। ছবিটা যেন একটা পাখি নিজের ডানা গুটিয়ে শরীরের সঙ্গে চেপে ধরছে।"
          },
          {
            "en": "What the gesture is for divides the commentators, and the split is worth keeping. One reading, from Mujahid and others and carried by al-Qurtubi and al-Baghawi, is that God told him to press his hand to his chest so the terror of the serpent would leave him. Al-Qurtubi also records a second: that damm al-janah is stillness itself, calm your alarm and lower your side, as in 17:24 and 26:215, where lowering the wing means gentleness. Al-Farra reads janah as the staff, so draw your staff in.",
            "bn": "ভঙ্গিটা কিসের জন্য, এখানে তাফসীরকারেরা ভাগ হয়ে যান, আর এই ভাগটা রেখে দেওয়াই ভালো। একটি পাঠ, মুজাহিদ ও অন্যদের থেকে, কুরতুবী আর বাগভী যা বহন করেন, তা হলো আল্লাহ তাঁকে বলেছেন হাত বুকে চেপে ধরতে যেন সাপের আতঙ্ক কেটে যায়। কুরতুবী আরেকটি মতও আনেন: দাম্মুল জানাহ মানে স্থিরতা, নিজের ত্রাস শান্ত করো আর পাঁজর নামিয়ে নাও, যেমন ১৭:২৪ ও ২৬:২১৫ আয়াতে ডানা নামানো মানে কোমলতা। ফার্রা জানাহ-কে পড়েন লাঠি হিসেবে, অর্থাৎ তোমার লাঠি নিজের দিকে টেনে নাও।"
          },
          {
            "en": "A third voice, al-Qushayri, hears in the same words a call to get ready: draw your wing in means gird yourself and shoulder the burden of the message. These are not rival errors waiting to be settled; they are layers the single phrase holds at once. Press the fear down, grow calm, and brace for what is coming, all inside one motion of the arm. The Qur'an gives Musa (AS) a bodily act that is comfort, composure, and commissioning folded together into a thing the hand can do.",
            "bn": "তৃতীয় একটা স্বর, কুশাইরী, একই কথায় শোনেন প্রস্তুত হওয়ার ডাক: ডানা গুটিয়ে নাও মানে কোমর বাঁধো আর রিসালাতের ভার কাঁধে তুলে নাও। এগুলো একে অন্যের ভুল নয় যে মীমাংসা করতে হবে; এগুলো একই বাক্যের ভেতরে একসঙ্গে ধরে রাখা স্তর। ভয় চেপে ধরো, শান্ত হও, আর যা আসছে তার জন্য তৈরি হও, সবই হাতের একটি নড়াচড়ার ভেতরে। কুরআন মূসা (আঃ)-কে এমন এক শারীরিক কাজ দেয়, যা একসঙ্গে সান্ত্বনা, স্থিরতা আর দায়িত্ব-অর্পণ, হাতেরই করার মতো একটা কাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Steadied by His Lord",
          "bn": "রবের দেওয়া আশ্বাস"
        },
        "p": [
          {
            "en": "Read together, the verse is tender. God has a frightened servant, and rather than rebuke the fear, He hands him a way through it. Ibn Kathir says the plain sense is general: whenever Musa (AS) felt afraid of anything, he was to draw his arm in, and the fear would go; and perhaps anyone who follows his example and lays a hand over his heart will find his fear lift or lighten, if God wills. The prophet's private gesture quietly becomes a practice for anyone afraid.",
            "bn": "পুরো আয়াতটা একসঙ্গে পড়লে বোঝা যায় কতটা স্নেহমাখা। আল্লাহর এক ভীত বান্দা আছেন, আর তিনি সেই ভয়কে ধমক না দিয়ে তাঁকে তার ভেতর দিয়ে পার হওয়ার পথ ধরিয়ে দেন। ইবন কাসীর বলেন, সোজা অর্থটা ব্যাপক: মূসা (আঃ) যখনই কোনো কিছুতে ভয় পেতেন, তাঁর হাত গায়ে টেনে ধরতেন, আর ভয় চলে যেত; আর হয়তো যে কেউ তাঁকে অনুসরণ করে বুকের উপর হাত রাখে, তার ভয়ও মিলিয়ে যাবে বা হালকা হবে, আল্লাহ চাইলে। নবীর নিজের ভঙ্গিটা নীরবে ভীত যে কারো অভ্যাসে রূপ নেয়।"
          },
          {
            "en": "Al-Qurtubi preserves a saying of Ibn Abbas: after Musa (AS), nobody is gripped by terror, then puts a hand to the chest, without the terror leaving him. He also tells of Umar ibn Abd al-Aziz, before whom a scribe, mortified by an accident of the body, flung down his pen in shame. Umar told him gently: take your pen, draw your wing in, and let your fright settle; I have heard the like from nobody more than from my own self. The verse had become a kindness passed between people.",
            "bn": "কুরতুবী ইবন আব্বাসের একটি কথা তুলে রাখেন: মূসা (আঃ)-এর পর এমন কেউ নেই যে আতঙ্কে পড়ে বুকের উপর হাত রাখবে আর তার আতঙ্ক কাটবে না। তিনি উমর ইবন আব্দুল আযীযের কথাও বলেন, যাঁর সামনে এক লেখক শরীরের এক অঘটনে লজ্জিত হয়ে কলম ছুড়ে ফেলেছিলেন। উমর তাঁকে নরম সুরে বললেন: কলম তুলে নাও, নিজের ডানা গুটিয়ে নাও, আর তোমার ত্রাস থিতিয়ে যাক; এ জিনিস আমি নিজের চেয়ে বেশি আর কারো কাছ থেকে শুনিনি। আয়াতটা তখন মানুষে মানুষে বিনিময় হওয়া এক দয়ায় পরিণত হয়েছিল।"
          },
          {
            "en": "No sound Prophetic report is narrated specifically on this verse in the commentaries fetched; the material above is the speech of the early teachers, not a marfu hadith. But the principle it names, that God commands fear and casts it where He wills, the Sunnah states plainly elsewhere. In Sahih al-Bukhari, Jabir ibn Abdullah reports that the Prophet ﷺ said he was given five things not granted to anyone before him, the first being: I was aided by terror cast into my enemies. Ibn Kathir even relates that the dread once filling Musa's heart was emptied into Pharaoh's.",
            "bn": "এই আয়াত নিয়ে আনা তাফসীরগুলোতে সরাসরি কোনো সহীহ নববী হাদীস বর্ণিত হয়নি; উপরের কথাগুলো পুরোনো যুগের শিক্ষকদের বচন, কোনো মারফু হাদীস নয়। তবে এটি যে নীতির নাম নেয়, অর্থাৎ আল্লাহই ভয়ের হুকুম দেন আর যেখানে চান সেখানে তা ঢেলে দেন, সুন্নাহ অন্যত্র তা স্পষ্ট করে বলে। সহীহ বুখারীতে জাবির ইবন আব্দুল্লাহ বর্ণনা করেন, নবী ﷺ বলেছেন তাঁকে পাঁচটি জিনিস দেওয়া হয়েছে যা তাঁর আগে আর কাউকে দেওয়া হয়নি, তার প্রথমটি: শত্রুদের বুকে ঢেলে দেওয়া ভীতি দিয়ে আমাকে সাহায্য করা হয়েছে। ইবন কাসীর এমনকি বলেন, একসময় মূসার বুক ভরে থাকা আতঙ্ক ঢেলে দেওয়া হয়েছিল ফেরাউনের বুকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Was It a Sleeve?",
          "bn": "এটা কি আস্তিন?"
        },
        "p": [
          {
            "en": "One further reading deserves airing, because of how firmly it was answered. Some linguists, al-Qurtubi and al-Baghawi report, held that rahb means the sleeve in the dialect of Himyar, so the command would run: draw in your hand and take it out of your sleeve. Al-Asmai claims he heard a Bedouin use rahb for a sleeve. On this reading the instruction is merely practical, since Musa (AS) had grasped the staff with his hand still inside his garment, and now simply frees it.",
            "bn": "আরও একটি পাঠের কথা বলা দরকার, কারণ একে কত জোরের সঙ্গে খণ্ডন করা হয়েছিল। কুরতুবী আর বাগভী জানান, কিছু ভাষাবিদ মনে করতেন রাহব মানে হিমইয়ার গোত্রের ভাষায় আস্তিন, ফলে নির্দেশটা দাঁড়াবে: তোমার হাত টেনে নাও আর আস্তিন থেকে বের করো। আসমাঈ দাবি করেন তিনি এক বেদুইনকে আস্তিন বোঝাতে রাহব শব্দ ব্যবহার করতে শুনেছেন। এই পাঠে নির্দেশটা নিছক ব্যবহারিক, কারণ মূসা (আঃ) লাঠিটা ধরেছিলেন হাত জামার ভেতরে রেখেই, আর এখন শুধু সেটা মুক্ত করছেন।"
          },
          {
            "en": "Az-Zamakhshari, cited by al-Qurtubi, rejects this flatly as one of the oddities of commentary. He doubts the word is even sound in the language, asks who among the trusted and reliable Arab authorities ever transmitted it, and questions how it would fit the verse at all; he adds that on the night he was called, Musa (AS) wore only a rough woolen cloak with no sleeves to speak of. Keeping the dispute in plain view is itself the point: the commentators argue in the open, and the reader watches a weak reading tested and set aside.",
            "bn": "কুরতুবীর বরাতে যামাখশারী এটাকে সরাসরি উড়িয়ে দেন, বলেন এটা তাফসীরের একটা উদ্ভট কথা। তিনি সন্দেহ করেন শব্দটা ভাষায় আদৌ শুদ্ধ কিনা, প্রশ্ন তোলেন নির্ভরযোগ্য আর বিশ্বস্ত আরব পণ্ডিতদের মধ্যে কে কবে এটা বর্ণনা করেছেন, আর জিজ্ঞেস করেন এটা আয়াতের সঙ্গে আদৌ খাপ খায় কিনা; তিনি যোগ করেন, যে রাতে তাঁকে ডাকা হয়েছিল, মূসা (আঃ)-এর গায়ে ছিল শুধু মোটা পশমের চাদর, বলার মতো কোনো আস্তিনই ছিল না। বিবাদটা চোখের সামনে রেখে দেওয়াই আসল কথা: তাফসীরকারেরা খোলাখুলি তর্ক করেন, আর পাঠক দেখে একটা দুর্বল পাঠ যাচাই হয়ে বাতিল হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Proofs, One Court",
          "bn": "দুই প্রমাণ, এক দরবার"
        },
        "p": [
          {
            "en": "Fa-dhanika burhanan min rabbik: these are two proofs from your Lord. At-Tabari names them, the staff that turned into a serpent and the hand drawn out white, and says burhan means a sign and an argument, its root being bayan, clear demonstration. Ibn Kathir calls them two decisive, lucid proofs of the power of Him who does as He wills, and of the truth of the prophethood of the man at whose hands they appear. As-Sadi too names them two cutting arguments brought from God.",
            "bn": "ফাযানিকা বুরহানান মিন রাব্বিক: এ দুটি তোমার রবের পক্ষ থেকে প্রমাণ। তাবারী এদের চিনিয়ে দেন, সাপে পরিণত হওয়া লাঠি আর সাদা হয়ে বেরিয়ে আসা হাত, আর বলেন বুরহান মানে নিদর্শন ও যুক্তি, যার মূল হলো বায়ান, অর্থাৎ স্পষ্ট প্রমাণ। ইবন কাসীর এদের বলেন দুটি অকাট্য, স্বচ্ছ প্রমাণ, যিনি যা চান তা-ই করেন তাঁর ক্ষমতার, আর যাঁর হাতে এগুলো প্রকাশ পেল তাঁর নবুয়তের সত্যতার। সা'দীও এদের বলেন আল্লাহর কাছ থেকে আনা দুটি ধারালো যুক্তি।"
          },
          {
            "en": "They are aimed at a named address: ila firawna wa-malaih, to Pharaoh and his chiefs. At-Tabari reads the malaa as the nobles of his people; Ibn Kathir as his leaders, grandees, and followers. As-Sadi draws out the lesson of the pairing: a bare warning and a messenger's word would not move such men; it had to be dazzling signs, and then, he adds pointedly, only if they would benefit at all. The proofs are a mercy, and they are also an argument that will stand against the court on the day it is weighed.",
            "bn": "এগুলো একটা নির্দিষ্ট ঠিকানায় তাক করা: ইলা ফিরআউনা ওয়া মালাইহ, ফেরাউন ও তার পারিষদের দিকে। তাবারী মালা বলতে বোঝেন তার সম্প্রদায়ের গণ্যমান্যদের; ইবন কাসীর বোঝেন তার নেতা, প্রধান আর অনুসারীদের। সা'দী এই জোড়ার শিক্ষাটা টেনে বের করেন: নিছক সতর্কবাণী আর রাসূলের কথা এমন লোকদের টলাবে না; দরকার ছিল চোখধাঁধানো নিদর্শন, আর তিনি জুড়ে দেন, তাতেও যদি কোনো লাভ হয় তবেই। প্রমাণ দুটো একদিকে রহমত, আবার সেই দিনেরও দলিল, যেদিন দরবারের হিসাব নেওয়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Court Called Corrupt",
          "bn": "নাফরমান এক দল"
        },
        "p": [
          {
            "en": "The verse ends on a verdict: innahum kanu qawman fasiqin, they were a people defiantly disobedient. At-Tabari glosses fasiqin here as disbelievers; Ibn Kathir as those who had stepped outside the obedience of God and set themselves against His religion. The word falls on Pharaoh and the establishment around him, named for exactly what they did with the clear signs brought before them. It is a description of a particular court that saw two proofs and chose defiance, and not a label to be hung on anyone else.",
            "bn": "আয়াতটা শেষ হয় এক রায় দিয়ে: ইন্নাহুম কানূ কাওমান ফাসিকীন, তারা ছিল নাফরমান এক সম্প্রদায়। তাবারী এখানে ফাসিকীন-এর অর্থ করেন কাফের; ইবন কাসীর বোঝেন তাদের, যারা আল্লাহর আনুগত্যের বাইরে পা রেখেছিল আর তাঁর দ্বীনের বিরুদ্ধে দাঁড়িয়েছিল। কথাটা পড়ে ফেরাউন আর তার চারপাশের শাসকগোষ্ঠীর উপর, ঠিক যা তারা সামনে আনা স্পষ্ট নিদর্শনগুলোর সঙ্গে করেছিল তার জন্যই। এ হলো এক নির্দিষ্ট দরবারের বর্ণনা, যারা দুটি প্রমাণ দেখেও বেছে নিয়েছিল অবাধ্যতা, আর অন্য কারো গায়ে সেঁটে দেওয়ার মতো কোনো তকমা নয়।"
          },
          {
            "en": "This needs saying plainly in both tongues. The verse records what that regime was, and licenses nothing against any living person or community today. Its weight for the reader is turned the other way entirely: Musa (AS) was handed light and a reasoned proof while his heart still pounded, and then sent to carry them to power. The lesson here is not contempt for a people long gone. It is that God steadies the fearful, equips them with the truth, and sends them forward before the fear has fully drained away.",
            "bn": "কথাটা দুই ভাষাতেই সোজাসুজি বলা দরকার। আয়াতটা শুধু লিখে রাখে সেই শাসনব্যবস্থা কেমন ছিল, আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটা কিছুরই অনুমতি দেয় না। পাঠকের জন্য এর ভার পুরো উল্টো দিকে ঘোরানো: মূসা (আঃ)-এর হাতে আলো আর যুক্তিসংগত প্রমাণ তুলে দেওয়া হলো তাঁর বুক তখনো ধড়ফড় করতে করতেই, তারপর তাঁকে পাঠানো হলো সেগুলো ক্ষমতার কাছে পৌঁছে দিতে। এখানকার শিক্ষা বহুকাল আগে চলে যাওয়া কোনো জাতির প্রতি ঘৃণা নয়। শিক্ষা এই যে, আল্লাহ ভীতকে স্থির করেন, সত্য দিয়ে তাকে সাজান, আর ভয় পুরোপুরি মিলিয়ে যাওয়ার আগেই তাকে সামনে এগিয়ে দেন।"
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
  "28:47": {
    "sections": [
      {
        "h": {
          "en": "A Sentence Left Hanging",
          "bn": "যে বাক্য শেষ হয় না"
        },
        "p": [
          {
            "en": "The verse opens with wa-lawlā, \"and were it not that,\" and then never finishes its own sentence. It describes a disaster striking people for what their hands sent ahead, then quotes their cry — \"Our Lord, why did You not send us a messenger, so we could follow Your signs and be among the believers?\" — and there it stops. The reply the grammar is waiting for simply does not arrive. A reader expects a \"then We would have...\" and meets instead a silence the eye keeps reaching across.",
            "bn": "আয়াতটি শুরু হয় ‘ওয়ালাওলা’ অর্থাৎ ‘আর যদি এমন না হতো’ দিয়ে, অথচ নিজের বাক্যটা কখনো শেষ করে না। এতে বলা হয়, মানুষের নিজ হাতের কামাইয়ের কারণে তাদের উপর বিপদ নেমে আসে, আর তখন তারা আকুতি জানায়: হে আমাদের রব, আপনি আমাদের কাছে রসূল পাঠালেন না কেন, পাঠালে তো আমরা আপনার আয়াতের অনুসরণ করতাম, মু’মিনদের দলে থাকতাম। এটুকু বলেই বাক্য থেমে যায়। ব্যাকরণ যে জবাবের অপেক্ষায় থাকে, তা আর আসে না। পাঠক আশা করে ‘তাহলে আমি করতাম’ জাতীয় কিছু, কিন্তু পায় এক নীরবতা, যার উপর দিয়ে চোখ বারবার হাতড়ে বেড়ায়।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both name this plainly: the answer to lawlā is maḥdhūf, deleted. The sentence trails off on purpose. Both supply the missing clause the same way — laʿājalnāhum bi-l-ʿuqūba, \"We would have hastened the punishment upon them.\" Read in full, the thought runs: were it not that a blow would fall on them for their sins, and that they would then be able to plead a missing messenger, We would have punished them at once. The gap in the sentence is exactly where that mercy is held.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই কথাটা স্পষ্ট করে বলেন: ‘লাওলা’র জবাবটি মাহযুফ, অর্থাৎ উহ্য রাখা হয়েছে। বাক্যটি ইচ্ছা করেই অসমাপ্ত। দুজনেই উহ্য অংশটি একইভাবে পূরণ করেন, ‘লাআজালনাহুম বিল-উকুবা’, অর্থাৎ আমি তাদের শাস্তি তাড়াতাড়ি দিয়ে দিতাম। পুরোটা মিলিয়ে ভাবটা দাঁড়ায়: তাদের গুনাহের কারণে যদি তাদের উপর আঘাত নেমে আসত, আর তারা তখন রসূল না-পাঠানোর অজুহাত তুলতে পারত, তবে আমি তৎক্ষণাৎ তাদের শাস্তি দিতাম। বাক্যের এই ফাঁকটুকুর ভেতরেই সেই রহমত লুকিয়ে আছে।"
          },
          {
            "en": "Al-Qurtubi adds a second grammatical note. Fanattabiʿa, \"so we could follow,\" stands in the subjunctive as the answer to a taḥḍīḍ, a sentence of urging; the imagined complaint urges God, after the fact, to have done what He did not do. The whole construction is a complaint God quotes only in order to refuse it. By leaving His own reply unspoken, the verse lets the reader feel the weight of a punishment held back, rather than announcing the holding-back out loud.",
            "bn": "কুরতুবী আরেকটি ব্যাকরণগত কথা যোগ করেন। ‘ফানাত্তাবিআ’ অর্থাৎ ‘তাহলে আমরা অনুসরণ করতাম’ এখানে তাহযীয বা তাগিদের জবাব হিসেবে নসবে এসেছে। কল্পিত এই নালিশ আল্লাহকে যেন পরে এসে তাগিদ দিচ্ছে, তিনি যা করেননি তা করার জন্য। গোটা গঠনটাই এমন এক অভিযোগ, যা আল্লাহ উদ্ধৃত করেন কেবল তা নাকচ করে দিতে। নিজের জবাবটুকু না বলে রেখে আয়াত পাঠককে অনুভব করায় থামিয়ে রাখা এক শাস্তির ভার, ঘোষণা করে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Blow and the Hands",
          "bn": "আঘাত আর নিজ হাতের কামাই"
        },
        "p": [
          {
            "en": "What is the muṣība, the thing that would strike them? At-Tabari, al-Qurtubi and al-Baghawi agree that it is not ordinary misfortune here but ʿadhāb wa-niqma — punishment and retribution for disbelief. At-Tabari glosses the whole clause as God's statement that, had His wrath come down on these people for rejecting their Lord and piling up sins before any messenger reached them, they would have had a grievance. The disaster in view is divine, deserved, and tied to what they themselves had done.",
            "bn": "যে জিনিসটা তাদের উপর আঘাত হানত, সেই ‘মুসিবা’ কী? তাবারী, কুরতুবী ও বাগাভী একমত যে এখানে তা সাধারণ দুর্যোগ নয়, বরং ‘আযাব ওয়া নিকমা’, কুফরির শাস্তি ও প্রতিফল। তাবারী গোটা বাক্যটির ব্যাখ্যায় বলেন, আল্লাহ জানাচ্ছেন যে কোনো রসূল পৌঁছানোর আগেই তাদের রবকে অস্বীকার করা আর গুনাহ জমানোর কারণে যদি তাঁর ক্রোধ নেমে আসত, তবে তাদের হাতে একটা নালিশ থেকে যেত। এখানে যে বিপদের কথা, তা ঐশী, প্রাপ্য, আর তাদের নিজেদের কাজের সঙ্গেই বাঁধা।"
          },
          {
            "en": "And what their hands sent ahead? At-Tabari reads bimā qaddamat aydīhim simply as bimā iktasabū, \"for what they earned.\" Al-Qurtubi asks why the Qur'an names the hands in particular, and answers that most of what a person acquires is acquired through them, so the hand stands for the whole record of deeds. He specifies the content as kufr and acts of disobedience. The image is of people walking toward a reckoning they have been assembling with their own grip, deed after deed, sent on ahead of them.",
            "bn": "আর ‘তাদের হাত যা আগে পাঠিয়েছে’ বলতে কী? তাবারী ‘বিমা কাদ্দামাত আইদীহিম’ সোজা অর্থে নেন, ‘বিমা ইকতাসাবু’, অর্থাৎ তারা যা কামিয়েছে তার কারণে। কুরতুবী প্রশ্ন তোলেন, কুরআন বিশেষ করে হাতের কথা বলল কেন। জবাবে বলেন, মানুষ যা অর্জন করে তার বেশির ভাগই হাত দিয়েই হয়, তাই হাত এখানে গোটা আমলনামার প্রতীক। এর বিষয়বস্তু তিনি ঠিক করে দেন কুফর ও নাফরমানি। ছবিটা এমন, মানুষ এক হিসাবের দিকে হেঁটে যাচ্ছে, যে হিসাবটা সে নিজ হাতেই গড়ে তুলেছে, একটি একটি আমল আগে পাঠিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Room for the Plea",
          "bn": "অজুহাতের দরজা বন্ধ"
        },
        "p": [
          {
            "en": "Here is the verse's heart. Ibn Kathir reads the deleted clause as an unstated \"and so We sent you to them\": We sent you, Muhammad ﷺ, li-tuqīma ʿalayhim al-ḥujja wa-li-taqṭaʿa ʿudhrahum — to establish the proof against them and to cut off their excuse — so that when punishment comes for their disbelief, they cannot argue that no messenger and no warner ever reached them. The messenger's arrival is not only guidance offered; it is a legal door being shut, so a particular complaint can never again be raised.",
            "bn": "এখানেই আয়াতের প্রাণ। ইবন কাসীর উহ্য অংশটিকে পড়েন ‘তাই আমি তোমাকে তাদের কাছে পাঠিয়েছি’ হিসেবে: হে মুহাম্মাদ ﷺ, আমি তোমাকে পাঠিয়েছি ‘লিতুকীমা আলাইহিমুল হুজ্জা ওয়া লিতাকতাআ উযরাহুম’, অর্থাৎ তাদের বিরুদ্ধে প্রমাণ দাঁড় করাতে আর তাদের অজুহাত কেটে দিতে। যেন কুফরির কারণে শাস্তি এলে তারা আর বলতে না পারে যে তাদের কাছে কোনো রসূল বা সতর্ককারী কখনো পৌঁছায়নি। রসূলের আগমন শুধু হিদায়াতের প্রস্তাব নয়। এ যেন এক আইনি দরজা বন্ধ হয়ে যাওয়া, যাতে একটা নির্দিষ্ট নালিশ আর কখনো তোলা না যায়।"
          },
          {
            "en": "As-Sa'di, in a single compact line, says the same: fa-arsalnāka yā Muḥammad, li-dafʿi ḥujjatihim wa-qaṭʿi maqālatihim — \"so We sent you, Muhammad, to repel their argument and to cut off their claim.\" The \"claim\" is precisely the sentence the verse quotes and leaves hanging: if only You had sent us someone. Once a warner has actually come, that sentence is no longer available to anyone. The excuse is not defeated in debate; it is removed in advance, taken off the table before the Day of accounting ever arrives.",
            "bn": "সাদী মাত্র এক কথায় একই কথা বলেন: ‘ফাআরসালনাকা ইয়া মুহাম্মাদ, লিদাফয়ি হুজ্জাতিহিম ওয়া কাতয়ি মাকালাতিহিম’, অর্থাৎ হে মুহাম্মাদ, আমি তোমাকে পাঠিয়েছি তাদের যুক্তি ঠেকাতে আর তাদের কথা কেটে দিতে। এই ‘কথা’ হলো ঠিক সেই বাক্য, যা আয়াত উদ্ধৃত করে অসমাপ্ত রেখে দেয়: আপনি যদি আমাদের কাছে কাউকে পাঠাতেন। একবার সত্যিকারের এক সতর্ককারী এসে যাওয়ার পর সেই বাক্য আর কারও হাতে থাকে না। অজুহাতটি তর্কে হারানো হয় না। হিসাবের দিন আসার আগেই তা সরিয়ে দেওয়া হয়, টেবিল থেকে তুলে নেওয়া হয়।"
          },
          {
            "en": "This is why the verse belongs to God's justice before anything else. He has bound Himself, the commentators say, not to punish until the warning has genuinely arrived. A person may still refuse the warner — many did, as the next verse shows — but refusal is then a choice made with open eyes. What God will not permit is a punishment met with an honest \"we were never told.\" That protest, the verse quietly guarantees, will have no owner.",
            "bn": "এ কারণেই আয়াতটি সবার আগে আল্লাহর ইনসাফের কথা বলে। মুফাসসিরগণ বলেন, তিনি নিজের উপর অবশ্য করে নিয়েছেন যে সতর্কবার্তা সত্যিকারভাবে না পৌঁছানো পর্যন্ত তিনি শাস্তি দেবেন না। মানুষ এরপরও সতর্ককারীকে ফিরিয়ে দিতে পারে, অনেকে দিয়েছেও, পরের আয়াতই যা দেখায়। কিন্তু সেই প্রত্যাখ্যান তখন চোখ খোলা রেখে নেওয়া সিদ্ধান্ত। আল্লাহ যা হতে দেবেন না তা হলো এমন কোনো শাস্তি, যার জবাবে সৎভাবে বলা যায় ‘আমাদের তো কেউ জানায়নি’। এই সৎ নালিশটির কোনো দাবিদার থাকবে না, আয়াত তা নিঃশব্দে নিশ্চিত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Qur'an Repeats Itself",
          "bn": "কুরআন বারবার যা বলে"
        },
        "p": [
          {
            "en": "Ibn Kathir reinforces the point by gathering other verses that say it outright. The clearest is 4:165: God sent \"messengers as bearers of good news and as warners, so that mankind would have no plea against God after the messengers\" — rusulan mubashshirīna wa-mundhirīna li-allā yakūna li-n-nāsi ʿalā Allāhi ḥujjatun baʿda r-rusul. At-Tabari independently closes his comment on our verse with that very phrase. The sending of messengers is designed, among its purposes, to leave no argument standing before God on the Day of accounting.",
            "bn": "ইবন কাসীর অন্য আয়াতগুলো একত্র করে কথাটা আরও জোরালো করেন, যেখানে একই কথা সরাসরি বলা আছে। সবচেয়ে স্পষ্ট ৪:১৬৫ আয়াত: আল্লাহ পাঠিয়েছেন ‘রসূলদের সুসংবাদদাতা ও সতর্ককারী করে, যাতে রসূলদের পরে আল্লাহর বিরুদ্ধে মানুষের কোনো যুক্তি না থাকে’, ‘রুসুলান মুবাশশিরীনা ওয়া মুনযিরীনা লিআল্লা ইয়াকূনা লিন-নাসি আলাল্লাহি হুজ্জাতুন বাদার-রুসুল’। তাবারীও আমাদের আয়াতের ব্যাখ্যা শেষ করেন ঠিক এই বাক্যটি দিয়েই। রসূল পাঠানোর একটি উদ্দেশ্য হলো, হিসাবের দিন আল্লাহর সামনে যেন কোনো যুক্তি দাঁড়িয়ে থাকতে না পারে।"
          },
          {
            "en": "He cites 6:156 and 6:157 next, where God names the excuses His Book forecloses: lest you say, \"the Scripture was sent down only to two communities before us, and we knew nothing of their study,\" or, \"had it come to us, we would have been better guided than they.\" Then comes the answer: \"so a clear proof has now come to you from your Lord, and guidance and mercy.\" The pattern matches our verse exactly: an excuse imagined in full, quoted, then cancelled by the arrival of revelation.",
            "bn": "এরপর তিনি ৬:১৫৬ ও ৬:১৫৭ আয়াত আনেন, যেখানে আল্লাহ সেই অজুহাতগুলোরই নাম ধরেন যা তাঁর কিতাব আগেভাগে বন্ধ করে দেয়। পাছে তোমরা বলো, ‘কিতাব তো আমাদের আগের দুই সম্প্রদায়ের উপর নাজিল হয়েছিল, তাদের পড়াশোনার খবর আমরা জানতাম না’, কিংবা বলো, ‘আমাদের উপর কিতাব এলে আমরা তো তাদের চেয়ে ভালো পথ পেতাম’। তারপর আসে জবাব: ‘তোমাদের রবের কাছ থেকে স্পষ্ট প্রমাণ, হিদায়াত ও রহমত এখন তোমাদের কাছে এসে গেছে’। গঠনটা আমাদের আয়াতের সঙ্গে হুবহু মেলে। অজুহাতটা পুরো কল্পনা করা হয়, উদ্ধৃত করা হয়, তারপর ওহির আগমনে তা বাতিল করে দেওয়া হয়।"
          },
          {
            "en": "The third is 5:19, addressed to the People of the Scripture: God's messenger has come \"after a break in the messengers, lest you say, no bringer of good news and no warner came to us — but now a bringer of good news and a warner has come to you.\" The structure never varies across them. God states the alibi a person might reach for, then removes its ground by sending someone. Ibn Kathir notes that such verses are many; this is a fixed principle of His dealing, not a single remark.",
            "bn": "তৃতীয়টি ৫:১৯ আয়াত, আহলে কিতাবকে সম্বোধন করে: আল্লাহর রসূল এসেছেন ‘রসূলদের আগমনে বিরতির পর, পাছে তোমরা বলো, আমাদের কাছে কোনো সুসংবাদদাতা বা সতর্ককারী আসেনি। অথচ এখন তো তোমাদের কাছে সুসংবাদদাতা ও সতর্ককারী এসে গেছেন’। প্রতিটিতেই গঠন একটুও বদলায় না। আল্লাহ সেই ছুতাটা বলে দেন যা মানুষ ধরতে চাইতে পারে, তারপর কাউকে পাঠিয়ে তার ভিত্তিটাই সরিয়ে দেন। ইবন কাসীর বলেন, এমন আয়াত অনেক। এটি তাঁর কর্মপদ্ধতির এক অটল নীতি, কোনো বিচ্ছিন্ন কথা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why He Sent the Warners",
          "bn": "কেন সতর্ককারী পাঠালেন"
        },
        "p": [
          {
            "en": "The Qur'an's logic has a striking echo in the Sunnah. Al-Mughira ibn Shu'ba (RA) reported that Saʿd ibn ʿUbada (RA) once spoke of his fierce jealousy over his wife, and word of it reached the Prophet ﷺ. He answered that he himself was more jealous than Saʿd, and God more jealous still, and that out of that jealousy God forbade shameful deeds open and hidden. Then came the sentence that touches our verse: \"there is none who likes that the people should repent to Him and beg His pardon than Allah, and for this reason He sent the warners and the givers of good news.\" It is in Sahih al-Bukhari.",
            "bn": "এখানে কুরআনের যুক্তির এক চমৎকার প্রতিধ্বনি সুন্নাহয় পাওয়া যায়। মুগীরা ইবন শুবা (রাঃ) বর্ণনা করেন, সাদ ইবন উবাদা (রাঃ) একবার নিজের স্ত্রীর ব্যাপারে তীব্র আত্মমর্যাদার কথা বলেন, আর তা নবী ﷺ-এর কানে পৌঁছায়। তিনি জবাব দেন যে তিনি নিজে সাদের চেয়ে বেশি আত্মমর্যাদাসম্পন্ন, আর আল্লাহ তাঁর চেয়েও বেশি, আর সেই মর্যাদার কারণেই আল্লাহ প্রকাশ্য ও গোপন সব অশ্লীল কাজ হারাম করেছেন। এরপর এল সেই বাক্য, যা আমাদের আয়াতকে ছুঁয়ে যায়: ‘মানুষ তাঁর কাছে তওবা করুক আর ক্ষমা চাক, এটা আল্লাহর চেয়ে বেশি আর কেউ পছন্দ করে না, আর এ কারণেই তিনি সতর্ককারী ও সুসংবাদদাতাদের পাঠিয়েছেন’। হাদীসটি সহীহ বুখারীতে বর্ণিত।"
          },
          {
            "en": "The word the translator renders by that whole phrase is one Arabic term, al-ʿudhr — the excuse, the acceptable plea. God loves to leave room for it, the hadith says, and so He sent al-mubashshirīn wa-l-mundhirīn, the bringers of good news and the warners, the same pairing the cross-verses use. Verse 28:47 shows that disposition from the other side. God so values that no one be caught without an excuse that He holds back a deserved punishment until a warner has removed the last ground for one. Being warned is no threat held over us. It is God refusing to let us be ambushed.",
            "bn": "অনুবাদক গোটা এই বাক্যাংশ দিয়ে যা বোঝান, মূলে তা একটি মাত্র আরবি শব্দ, ‘আল-উযর’, অর্থাৎ অজুহাত বা গ্রহণযোগ্য ওজর। হাদীস বলছে, আল্লাহ তার জন্য জায়গা রাখতে ভালোবাসেন, তাই তিনি পাঠিয়েছেন ‘আল-মুবাশশিরীন ওয়াল-মুনযিরীন’, সুসংবাদদাতা ও সতর্ককারীদের, যে জোড়া শব্দ আগের আয়াতগুলোতেও ছিল। ২৮:৪৭ আয়াত সেই একই মেজাজ দেখায় উল্টো দিক থেকে। কেউ যেন ওজরহীন অবস্থায় ধরা না পড়ে, আল্লাহ এটা এতটাই মূল্য দেন যে সতর্ককারী এসে শেষ ভিত্তিটুকু সরিয়ে না দেওয়া পর্যন্ত তিনি প্রাপ্য শাস্তি থামিয়ে রাখেন। সতর্ক করা আমাদের মাথার উপর ঝুলিয়ে রাখা কোনো হুমকি নয়। এ হলো আল্লাহর আমাদের অতর্কিতে ধরতে অস্বীকার করা।"
          }
        ]
      },
      {
        "h": {
          "en": "No Excuse in a Long Silence",
          "bn": "দীর্ঘ নীরবতাও ওজর নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi pauses over who \"them\" refers to. He reports two identifications: the Quraysh, the Arabs of Makkah to whom the Prophet ﷺ was directly sent, and, on another view, the People of the Scripture. He lets both stand without forcing a choice, as commentators often do when the wording fits more than one audience. Either way the subject is people who had rejected the truth, and the verse's concern stays the same: that none of them be able to say the truth never came to them.",
            "bn": "কুরতুবী একটু থামেন এই প্রশ্নে যে ‘তাদের’ বলতে কাদের বোঝানো হয়েছে। তিনি দুটি মত উল্লেখ করেন: কুরাইশ, অর্থাৎ মক্কার সেই আরবরা যাদের কাছে নবী ﷺ সরাসরি পাঠানো হয়েছিলেন, আর অন্য মতে আহলে কিতাব। তিনি কোনো একটিকে চাপিয়ে না দিয়ে দুটিই রেখে দেন, মুফাসসিরগণ প্রায়ই যা করেন যখন শব্দ একাধিক শ্রোতার সঙ্গে খাপ খায়। যে মতই হোক, আলোচ্য তারাই যারা সত্য পৌঁছানোর পর তা প্রত্যাখ্যান করেছিল। আর আয়াতের চিন্তা একই থাকে: তাদের কেউ যেন বলতে না পারে সত্য তাদের কাছে আসেইনি।"
          },
          {
            "en": "On the deleted clause, al-Qurtubi records a deeper reading from al-Qushayri. The point of the ellipsis, he says, is this: these disbelievers were not without excuse, for the earlier revealed laws and the call to God's oneness had reached them. But the era since the last messenger had grown long — taṭāwala l-ʿahd — so were God to punish them now, one might protest that so much time had passed his forgetting should be forgiven, and imagine that a valid excuse. There is no real excuse once the news of the messengers has reached a people.",
            "bn": "উহ্য অংশটি নিয়ে কুরতুবী কুশাইরীর একটি গভীরতর পাঠ তুলে ধরেন। তিনি বলেন, বাক্য থামিয়ে দেওয়ার মর্ম এই: এই অস্বীকারকারীরা আসলে ওজরহীন ছিল না, কারণ আগের নাজিল হওয়া শরিয়ত আর তাওহীদের ডাক তাদের কাছে পৌঁছে গিয়েছিল। কিন্তু শেষ রসূলের পর থেকে যুগ লম্বা হয়ে গিয়েছিল, ‘তাতাওয়ালাল-আহদ’। এখন তাদের শাস্তি দিলে কেউ হয়তো আপত্তি তুলত যে এত সময় পেরিয়েছে বলে তার ভুলে যাওয়াটা মাফ পাওয়ার যোগ্য, আর ভাবত সেটাই একটা বৈধ ওজর। অথচ রসূলদের খবর কোনো জাতির কাছে পৌঁছে যাওয়ার পর আর কোনো সত্যিকারের ওজর থাকে না।"
          },
          {
            "en": "So, al-Qushayri concludes, God \"completed the removal of the excuse and completed the clarification\" by sending Muhammad ﷺ afresh, for God has decreed that He punishes no servant until the clarification, the proof, and the sending of messengers are complete. Al-Qurtubi also notes, as a separate debate, that some argued from this verse that reason alone obliges faith; he reports the view rather than settling it. The governing idea holds: punishment waits on warning, here renewed.",
            "bn": "তাই কুশাইরী উপসংহার টানেন, আল্লাহ নতুন করে মুহাম্মাদ ﷺ-কে পাঠিয়ে ‘ওজর সরানো পূর্ণ করেছেন, আর স্পষ্ট করে দেওয়া পূর্ণ করেছেন’, কারণ আল্লাহ স্থির করে রেখেছেন যে বয়ান, প্রমাণ ও রসূল প্রেরণ পূর্ণ না হওয়া পর্যন্ত তিনি কোনো বান্দাকে শাস্তি দেন না। কুরতুবী আলাদা একটি মতভেদ হিসেবে আরও বলেন, কেউ কেউ এ আয়াত থেকে যুক্তি দিয়েছেন যে শুধু বিবেকই ঈমানকে ওয়াজিব করে। তিনি মতটি উল্লেখ করেন, মীমাংসা করেন না। মূল ভাবনা অটল থাকে: শাস্তি সতর্কবার্তার অপেক্ষায় থাকে, আর এখানে সেই সতর্কবার্তা নতুন করে পাঠানো হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy Dressed as Justice",
          "bn": "রহমত এসেছে ইনসাফের বেশে"
        },
        "p": [
          {
            "en": "Read beside the verse before it, the mercy becomes unmistakable. In 28:46 the Prophet ﷺ is called \"a mercy from your Lord, to warn a people to whom no warner had come before you.\" Verse 28:47 then says what that mercy spares them from. The sending is mercy precisely because it is also justice: God arranging that no one will stand before Him stripped of a fair hearing. The warning is not the opposite of compassion; it is the shape compassion takes when a reckoning is real and coming.",
            "bn": "ঠিক আগের আয়াতের পাশে রেখে পড়লে রহমতটা আর গোপন থাকে না। ২৮:৪৬ আয়াতে নবী ﷺ-কে বলা হয়েছে ‘তোমার রবের পক্ষ থেকে রহমত, এমন এক সম্প্রদায়কে সতর্ক করতে যাদের কাছে তোমার আগে কোনো সতর্ককারী আসেনি’। এরপর ২৮:৪৭ আয়াত বলে, সেই রহমত তাদের কী থেকে বাঁচায়। পাঠানোটা রহমত ঠিক এই কারণেই যে তা একই সঙ্গে ইনসাফও। এ হলো আল্লাহর এমন ব্যবস্থা, যাতে কেউ ন্যায্য শোনানি ছাড়া তাঁর সামনে দাঁড়াবে না। সতর্কবার্তা দয়ার উল্টো কিছু নয়। হিসাব যখন সত্যি এবং আসন্ন, তখন দয়া এই রূপই নেয়।"
          },
          {
            "en": "There is a quiet comfort in this, and a quiet demand. The comfort is that God does not spring punishment on the unwarned; He gives the word first, and time with the word. The demand is that the time is not neutral. Every day the warning stands unanswered is a day of the excuse being dismantled, not being built. The space God leaves is room to return, not permission to delay, and the one who mistakes the one for the other is spending the very mercy that was meant to save him.",
            "bn": "এর ভেতরে আছে এক নিরব সান্ত্বনা, আর এক নিরব দাবি। সান্ত্বনা এই যে আল্লাহ অসতর্ক মানুষের উপর হঠাৎ শাস্তি চাপান না। তিনি আগে কথা দেন, আর সেই কথার সঙ্গে সময়ও দেন। দাবিটা এই যে সেই সময় নিরপেক্ষ নয়। সতর্কবার্তার জবাব না দিয়ে কাটানো প্রতিটি দিন ওজর গড়ে ওঠার দিন নয়, বরং ওজর ভেঙে পড়ার দিন। আল্লাহ যে অবকাশ রাখেন তা ফিরে আসার সুযোগ, দেরি করার অনুমতি নয়। যে একটিকে অন্যটি ভেবে বসে, সে আসলে তাকে বাঁচানোর জন্য রাখা রহমতটুকুই খরচ করে ফেলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Verdict This Is",
          "bn": "রায়টি আসলে কার"
        },
        "p": [
          {
            "en": "A word of care is needed here, as with every verse that speaks of a people under warning. The verse describes those who rejected the truth after it reached them, and states a principle about God's own justice in warning before He punishes. It licenses nothing against any living person or community, and is no verdict any human may pass on a neighbour. The identifications the commentators debated — Quraysh, or the People of the Scripture — concern the first audience of a seventh-century address, not a charter for suspicion today. The judgment it describes is God's alone.",
            "bn": "এখানে একটু সতর্ক কথা দরকার, যেমন সতর্ককারীর অধীনে থাকা কোনো জাতির কথা বলে এমন প্রতিটি আয়াতেই দরকার হয়। আয়াতটি তাদের কথা বলে যারা সত্য পৌঁছানোর পর তা প্রত্যাখ্যান করেছিল, আর শাস্তির আগে সতর্ক করার ক্ষেত্রে আল্লাহর নিজের ইনসাফের একটি নীতি জানায়। এটি কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কিছুই বৈধ করে না। এ এমন কোনো রায় নয় যা কোনো মানুষ তার প্রতিবেশীর উপর চালাতে পারে। মুফাসসিরদের আলোচিত পরিচয়, কুরাইশ কি আহলে কিতাব, তা সপ্তম শতকের এক সম্বোধনের প্রথম শ্রোতাদের নিয়ে, আজকের সন্দেহের কোনো সনদ নয়। আয়াত যে বিচারের কথা বলে, তা কেবল আল্লাহরই।"
          },
          {
            "en": "What the verse does leave in a reader's hands is lighter and more personal. If being warned is a mercy, I have already received it; the Qur'an in front of me is the warner the earlier peoples pleaded for. The honest question is no longer whether the message came, but what I have done since it did. And because the mercy of being told can pass through me to someone else, a gentle duty is folded into it: to warn the way God warns, hoping for a person rather than condemning him.",
            "bn": "আয়াতটি পাঠকের হাতে যা রেখে যায় তা অনেক হালকা আর ব্যক্তিগত। সতর্ক করা যদি রহমত হয়, তবে তা আমি ইতিমধ্যেই পেয়ে গেছি। আমার সামনে রাখা কুরআনই সেই সতর্ককারী, আগের জাতিরা যার জন্য আকুতি জানিয়েছিল। সৎ প্রশ্নটা তাই আর এই নয় যে বার্তা এসেছিল কি না, বরং এটা যে আসার পর আমি কী করেছি। আর জানানোর রহমত যেহেতু আমার মধ্য দিয়ে আরেকজনের কাছে পৌঁছাতে পারে, এর ভেতরে এক নরম দায়িত্বও লুকানো আছে: আল্লাহ যেভাবে সতর্ক করেন সেভাবে সতর্ক করা, মানুষকে দোষী সাব্যস্ত করে নয়, তার ভালো চেয়ে।"
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
  "28:59": {
    "sections": [
      {
        "h": {
          "en": "Two Gates, Not One",
          "bn": "দুই দরজা, একটি নয়"
        },
        "p": [
          {
            "en": "The verse reads like a law written out in the open. Your Lord would never destroy the towns until He had sent to their mother a messenger reciting His signs to them; and He would not destroy the towns except while their people were wrongdoers. Two conditions stand in the sentence, not one. A warning must arrive first, carried by a messenger who recites clear verses. And only then, if the people hold to their wrong, does the ruin come. Miss either half and you have missed what the verse is doing.",
            "bn": "আয়াতটি যেন খোলা পাতায় লেখা একটি বিধান। তোমার প্রতিপালক কোনো জনপদ ধ্বংস করেন না, যতক্ষণ না তিনি তার কেন্দ্রে একজন রসূল পাঠান, যিনি তাদের কাছে তাঁর নিদর্শন পড়ে শোনান। আর তিনি কোনো জনপদকে ধ্বংস করেন না, যতক্ষণ না তার বাসিন্দারা অন্যায়কারী হয়। বাক্যটিতে দাঁড়িয়ে আছে দুটি শর্ত, একটি নয়। আগে আসতে হবে সতর্কবাণী, বহন করে আনবেন একজন রসূল, যিনি স্পষ্ট আয়াত পড়ে শোনান। এরপর মানুষ যদি নিজের অন্যায়ে অটল থাকে, কেবল তখনই নেমে আসে ধ্বংস। যেকোনো একটি অর্ধেক বাদ দিলে আয়াতটি যা বলছে তা-ই হারিয়ে যায়।"
          },
          {
            "en": "That shape matters because it tells us something about the One who speaks. The destruction is never a sudden temper; it is the end of a sequence that began with mercy. The sentence slows everything down. It inserts a messenger, a recitation, a chance to hear, and a stubborn refusal, all before the word destroy is allowed to land. This article follows the verse through those two gates in turn.",
            "bn": "এই গঠনটা গুরুত্বপূর্ণ, কারণ যিনি কথা বলছেন তাঁর সম্পর্কে এটি কিছু জানায়। ধ্বংস কখনো আচমকা রাগ নয়, বরং এমন এক ধারাবাহিকতার শেষ যা শুরু হয়েছিল রহমত দিয়ে। বাক্যটি সবকিছু ধীর করে দেয়। ধ্বংস শব্দটিকে নামতে দেওয়ার আগে সে ভেতরে বসিয়ে দেয় একজন রসূল, একটি আবৃত্তি, শোনার সুযোগ আর একগুঁয়ে অস্বীকার। এই লেখাটি আয়াতকে অনুসরণ করে সেই দুই দরজার ভেতর দিয়ে একে একে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Comes First",
          "bn": "সতর্কবাণী আগে আসে"
        },
        "p": [
          {
            "en": "As-Sa'di reads the opening clause through Allah's wisdom and mercy: it is from His wisdom and His mercy, he writes, that He does not punish the nations for their mere disbelief before establishing the proof against them by sending the messengers to them. The order is deliberate. Guilt alone does not trigger ruin. A people may already be in the wrong, and still the sentence holds Allah's hand until a messenger has stood among them and recited the signs that show the truth of what he brings and the honesty of what he calls them to.",
            "bn": "সা'দী সূচনা অংশটি পড়েন আল্লাহর হিকমত ও রহমতের আলোয়। তিনি লেখেন, এটি তাঁর হিকমত ও রহমতেরই অংশ যে, রসূল পাঠিয়ে তাদের বিরুদ্ধে প্রমাণ দাঁড় করানোর আগে তিনি জাতিগুলোকে শুধু কুফরের কারণে শাস্তি দেন না। ক্রমটা ইচ্ছাকৃত। কেবল দোষই ধ্বংস ডেকে আনে না। কোনো জাতি হয়তো আগে থেকেই অন্যায়ে ডুবে আছে, তবু আয়াতটি আল্লাহর হাত থামিয়ে রাখে যতক্ষণ না একজন রসূল তাদের মাঝে দাঁড়িয়ে সেই নিদর্শনগুলো পড়ে শোনান, যা তাঁর আনা বার্তার সত্যতা আর তাঁর আহ্বানের আন্তরিকতা তুলে ধরে।"
          },
          {
            "en": "Ibn Kathir frames the same clause as a statement about Allah's justice. Allah informs us of His justice, he writes, and that He does not destroy anyone unjustly; rather, He destroys the one He destroys only after the proof has been established against them. Al-Qurtubi presses the point further. Allah does not treat His own knowledge of a people's state as a charge against them. He knows the wrongdoer is a wrongdoer, yet He will not act on that knowledge alone; the sending of messengers is what settles the matter, so that no one is ruined on a hidden reckoning.",
            "bn": "ইবন কাসীর একই অংশকে দাঁড় করান আল্লাহর ইনসাফের কথা হিসেবে। তিনি লেখেন, আল্লাহ আমাদের তাঁর ইনসাফের কথা জানান, আর জানান যে তিনি কাউকে অন্যায়ভাবে ধ্বংস করেন না; বরং যাকে ধ্বংস করেন, তাকে করেন তাদের বিরুদ্ধে প্রমাণ দাঁড়ানোর পরেই। কুরতুবী বিষয়টি আরও এগিয়ে নেন। কোনো জাতির অবস্থা সম্পর্কে আল্লাহর নিজের জ্ঞানকে তিনি তাদের বিরুদ্ধে অভিযোগ হিসেবে ধরেন না। অন্যায়কারী যে অন্যায়কারী, তা তিনি জানেন, তবু শুধু সেই জ্ঞানের ভিত্তিতে তিনি পদক্ষেপ নেন না। রসূল পাঠানোই বিষয়টির মীমাংসা করে, যাতে কেউ গোপন হিসাবের ভিত্তিতে ধ্বংস না হয়।"
          },
          {
            "en": "This is close to the verse before it in the surah, but it is not the same point. The earlier passage turns on leaving a people with no excuse to plead. Here the weight falls the other way, on what Allah holds Himself to before He acts: warning issued, signs recited, time given to hear. Read this way, a verse about ruined cities becomes a verse about how carefully the Judge moves before the ruin is ever spoken.",
            "bn": "সূরার আগের আয়াতের সঙ্গে এর মিল আছে, তবে কথাটা এক নয়। আগের অংশের কেন্দ্রে ছিল মানুষকে এমন অবস্থায় রাখা যেখানে অজুহাত পেশ করার আর কিছু থাকে না। এখানে ভারটা পড়ে উল্টো দিকে, পদক্ষেপ নেওয়ার আগে আল্লাহ নিজের উপর যা রাখেন তার উপর: সতর্কবাণী জারি, নিদর্শন পঠিত, শোনার সময় দেওয়া। এভাবে পড়লে ধ্বংস হওয়া জনপদ নিয়ে একটি আয়াত হয়ে ওঠে এই আয়াত যে, ধ্বংসের কথা মুখে আসার আগে বিচারক কত সাবধানে পা ফেলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Mother Town",
          "bn": "কার কেন্দ্রভূমি"
        },
        "p": [
          {
            "en": "The word umm, mother, carries the knot. One reading fixes it to a single place. At-Tabari takes umm al-qura to be Makkah, and backs it with Qatada, who said plainly that the mother of towns is Makkah and that Allah sent to them a messenger, Muhammad. The Muyassar glosses it the same way, naming Makkah outright, and Ibn Kathir, reciting to them Our verses, writes that the mother town here is Makkah. On this reading the verse speaks first of the towns around Makkah in the Prophet's own time.",
            "bn": "উম্ম শব্দটি, অর্থ মা, এখানেই বাঁধে গিঁট। একটি পাঠ একে বেঁধে দেয় একটিমাত্র জায়গায়। তাবারী উম্মুল কুরাকে মক্কা ধরেন, আর সমর্থনে আনেন কাতাদাকে, যিনি সোজা বলেছেন, জনপদগুলোর মা হলো মক্কা, আর আল্লাহ তাদের কাছে পাঠিয়েছেন একজন রসূল, মুহাম্মদ ﷺ-কে। মুয়াসসারও একইভাবে অর্থ করে, খোলাখুলি মক্কার নাম নেয়। আর ইবন কাসীর লেখেন, এখানে কেন্দ্রভূমি মানে মক্কা। এই পাঠে আয়াতটি সবার আগে বলে নবী ﷺ-এর সময়ে মক্কার চারপাশের জনপদগুলোর কথা।"
          },
          {
            "en": "The other reading keeps umm general: the chief or greatest town of any region, whatever its name. Al-Qurtubi records it beside the first, saying some hold its mother to mean its greatest, and he quotes al-Hasan reading it as its earliest. Al-Baghawi takes the clause to mean its largest and greatest town. As-Sa'di describes it without naming Makkah at all, as the town and city to which the surrounding people return, which they frequent, and whose news is not hidden from them. Ma'arif al-Qur'an settles on the plain phrase the central town.",
            "bn": "অন্য পাঠ উম্মকে রাখে সাধারণ অর্থে: যেকোনো অঞ্চলের প্রধান বা সবচেয়ে বড় জনপদ, নাম যা-ই হোক। কুরতুবী প্রথমটির পাশে এটিও লিপিবদ্ধ করেন, বলেন, কেউ কেউ তার মা মানে ধরেন তার সবচেয়ে বড়টি, আর তিনি হাসানের পাঠ উদ্ধৃত করেন তার আদিমতমটি অর্থে। বাগাভী অংশটির অর্থ নেন তার সবচেয়ে বড় ও প্রধান জনপদ। সা'দী মক্কার নাম একেবারেই না নিয়ে একে বর্ণনা করেন সেই জনপদ ও শহর হিসেবে, যেখানে চারপাশের মানুষ ফিরে আসে, যেখানে তারা বারবার যাতায়াত করে, আর যার খবর তাদের অজানা থাকে না। মাআরিফুল কুরআন থামে সাদামাটা কথায়, কেন্দ্রীয় জনপদ।"
          },
          {
            "en": "Ibn Kathir, who names Makkah as his own choice, still records the general sense and does not dismiss it. It is said, he reports, that to their mother means to its origin and its great town, as with the mother towns of districts and regions; he attributes this to az-Zamakhshari, Ibn al-Jawzi and others, and adds that it is not far-fetched. So the two readings are not quite rivals. One hears a specific city, Makkah; the other hears a rule about chief cities anywhere. The verse holds both, and the commentators let it.",
            "bn": "ইবন কাসীর, যিনি নিজের মত হিসেবে মক্কার নাম নেন, তবু সাধারণ অর্থটিও লিপিবদ্ধ করেন এবং তা উড়িয়ে দেন না। তিনি জানান, বলা হয় যে তাদের মা মানে তার মূল ও তার প্রধান জনপদ, যেমন নানা জেলা ও অঞ্চলের কেন্দ্রভূমি। এটি তিনি যামাখশারী, ইবনুল জাওযী ও অন্যদের দিকে নিসবত করেন, আর যোগ করেন যে এটি অসম্ভব নয়। তাই দুটি পাঠ ঠিক প্রতিদ্বন্দ্বী নয়। একটি শোনে একটি নির্দিষ্ট শহর, মক্কা; অন্যটি শোনে যেকোনো জায়গার প্রধান শহর নিয়ে একটি নিয়ম। আয়াতটি দুটিকেই ধরে রাখে, আর তাফসীরকারেরা তা হতে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Send to the Centre",
          "bn": "কেন কেন্দ্রে পাঠানো"
        },
        "p": [
          {
            "en": "Both al-Qurtubi and al-Baghawi give the same reason the great town is singled out. Messengers, they write, are sent to the notables, and the notables dwell in the cities, which are the mother of what lies around them. A message delivered at the centre does not stay there. As-Sa'di draws this out: a messenger raised in the mother city has his word reach its far and its near alike, whereas raising messengers in distant towns and remote edges invites obscurity and neglect. The great cities are where a call becomes visible and spreads.",
            "bn": "কুরতুবী আর বাগাভী দুজনেই একই কারণ দেন কেন বড় জনপদকে বেছে নেওয়া হয়। তাঁরা লেখেন, রসূলদের পাঠানো হয় গণ্যমান্যদের কাছে, আর গণ্যমান্যরা থাকেন শহরে, যা চারপাশের সবকিছুর কেন্দ্র। কেন্দ্রে পৌঁছানো বার্তা সেখানেই আটকে থাকে না। সা'দী বিষয়টি খুলে বলেন: কেন্দ্রভূমিতে প্রেরিত রসূলের কথা তার দূর ও নিকট দুই প্রান্তেই পৌঁছায়, অথচ দূরের জনপদ ও প্রান্তিক কোণে রসূল পাঠালে তা অস্পষ্টতা ও অবহেলার মুখে পড়ে। বড় শহরই সেই জায়গা যেখানে একটি আহ্বান দৃশ্যমান হয় এবং ছড়িয়ে পড়ে।"
          },
          {
            "en": "Ma'arif al-Qur'an turns the same observation toward how communities actually work. Smaller towns lean on the cities for their needs, economic and educational, so that what becomes known in a city becomes known in the towns around it. When a prophet calls in a great city, the message reaches everyone beyond it in no time, and if they then reject it, the consequence reaches all of them too. The centre is chosen not for grandeur but because it is how a warning travels to a whole land.",
            "bn": "মাআরিফুল কুরআন একই পর্যবেক্ষণকে ফেরায় সমাজ আসলে যেভাবে চলে সেদিকে। ছোট জনপদগুলো প্রয়োজনে শহরের উপর নির্ভর করে, অর্থনৈতিক ও শিক্ষাগত। ফলে শহরে যা জানা যায়, তা চারপাশের জনপদেও জানা হয়ে যায়। কোনো নবী বড় শহরে আহ্বান জানালে বার্তা তার বাইরের সবার কাছে পৌঁছে যায় মুহূর্তে। এরপর তারা যদি তা প্রত্যাখ্যান করে, পরিণতিও পৌঁছে যায় সবার কাছে। কেন্দ্রকে বেছে নেওয়া তার জৌলুসের জন্য নয়, বরং একটি সতর্কবাণী এভাবেই গোটা দেশে পৌঁছায় বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Only While They Wronged",
          "bn": "কেবল অন্যায়ে থাকতেই"
        },
        "p": [
          {
            "en": "The second clause closes the other gate: He would not destroy the towns except while their people were wrongdoers. At-Tabari reads it as a flat exclusion. Allah would not destroy a town while it was a believer in Him; He destroys it only for its wronging of itself by its disbelief in Him. He cites Ibn Abbas to the same effect: Allah has never destroyed a town for its faith, but He destroys towns for wrongdoing when their people wrong; had a town believed, it would not have been destroyed along with those who were.",
            "bn": "দ্বিতীয় অংশটি বন্ধ করে দেয় আরেক দরজা: তিনি কোনো জনপদকে ধ্বংস করতেন না, যতক্ষণ না তার বাসিন্দারা অন্যায়কারী। তাবারী একে পড়েন সাফ ব্যতিক্রম হিসেবে। আল্লাহ কোনো জনপদকে তার ঈমান-অবস্থায় ধ্বংস করতেন না; তিনি তাকে ধ্বংস করেন কেবল আল্লাহর প্রতি কুফরের মাধ্যমে নিজের উপর অন্যায় করার কারণে। একই অর্থে তিনি ইবন আব্বাস (রাঃ)-কে উদ্ধৃত করেন: আল্লাহ কোনো জনপদকে তার ঈমানের কারণে কখনো ধ্বংস করেননি, বরং অন্যায়ের কারণেই ধ্বংস করেন যখন তার লোকেরা অন্যায় করে। কোনো জনপদ ঈমান আনলে, যারা ধ্বংস হয়েছিল তাদের সঙ্গে সে ধ্বংস হতো না।"
          },
          {
            "en": "As-Sa'di, al-Baghawi and the Muyassar read the wrongdoing as disbelief and disobedience that make a people deserving of punishment. As-Sa'di then draws the two clauses into a single sentence: the upshot is that Allah does not punish anyone except by his wrongdoing and after the proof is established against him. Both conditions, side by side. Guilt without a warning does not bring ruin, and a warning without guilt does not bring it either. The town must have heard, and must still be wronging, before the sentence is carried out.",
            "bn": "সা'দী, বাগাভী আর মুয়াসসার এই অন্যায়কে পড়েন কুফর ও নাফরমানি হিসেবে, যা কোনো জাতিকে শাস্তির উপযুক্ত করে তোলে। এরপর সা'দী দুটি অংশকে এক বাক্যে টেনে আনেন: সারকথা হলো, আল্লাহ কাউকে শাস্তি দেন না তার অন্যায় ছাড়া এবং তার বিরুদ্ধে প্রমাণ দাঁড় করানোর পর ছাড়া। দুটি শর্ত পাশাপাশি। সতর্কবাণী ছাড়া দোষ ধ্বংস ডেকে আনে না, আবার দোষ ছাড়া সতর্কবাণীও তা আনে না। শাস্তি কার্যকর হওয়ার আগে জনপদকে অবশ্যই শুনে থাকতে হবে, আর তখনো অন্যায়ে থাকতে হবে।"
          },
          {
            "en": "Al-Qurtubi sees in this a declaration about Allah Himself. He destroys them only once they have earned it by clinging to disbelief after being warned, he writes, and in this is a showing of His justice and His sanctity above all wrongdoing. He quotes another verse to seal it: your Lord would never destroy the towns wrongfully while their people were doing right (11:117). To destroy a people who were setting things right would itself be wrong, and the verse's very wording rules it out. His dealing with them is justice through and through.",
            "bn": "কুরতুবী এতে দেখেন আল্লাহ নিজের সম্পর্কে একটি ঘোষণা। তিনি লেখেন, সতর্ক করার পরও কুফর আঁকড়ে থাকার কারণে যখন তারা তা অর্জন করে, কেবল তখনই তিনি তাদের ধ্বংস করেন। আর এতে প্রকাশ পায় তাঁর ইনসাফ আর সব অন্যায়ের ঊর্ধ্বে তাঁর পবিত্রতা। বিষয়টি পাকা করতে তিনি আরেকটি আয়াত টানেন: তোমার প্রতিপালক জনপদগুলোকে অন্যায়ভাবে ধ্বংস করতেন না, যখন তার বাসিন্দারা সৎকর্মশীল (১১:১১৭)। যারা জীবন শুধরে নিচ্ছিল তাদের ধ্বংস করা নিজেই অন্যায় হতো, আর আয়াতের শব্দই তা বাতিল করে দেয়। তাদের সঙ্গে তাঁর আচরণ পুরোপুরি ইনসাফ।"
          }
        ]
      },
      {
        "h": {
          "en": "From One City Outward",
          "bn": "এক শহর থেকে বাইরে"
        },
        "p": [
          {
            "en": "Ibn Kathir finds in the mother town a sign about the final messenger. The verse, he says, points to the unlettered Prophet, Muhammad, raised from the Mother of Cities as a messenger to every town, Arab and non-Arab alike. He reads this against other verses: so that you may warn the Mother of Towns and all around it (42:7); Say, O mankind, I am the Messenger of Allah to you all (7:158); that I may warn you by it, and whomever it reaches (6:19). Sent to the centre, he is by that very fact sent to the whole.",
            "bn": "ইবন কাসীর কেন্দ্রভূমির মধ্যে খুঁজে পান শেষ রসূল সম্পর্কে একটি ইঙ্গিত। তিনি বলেন, আয়াতটি নির্দেশ করে উম্মি নবী মুহাম্মদ ﷺ-এর দিকে, যাঁকে উম্মুল কুরা থেকে পাঠানো হয়েছে প্রতিটি জনপদের রসূল হিসেবে, আরব-অনারব সবার জন্যই। এটি তিনি পড়েন অন্য আয়াতের পাশে রেখে: যাতে তুমি উম্মুল কুরা ও তার চারপাশের সবাইকে সতর্ক করো (৪২:৭); বলো, হে মানুষ, আমি তোমাদের সবার কাছে আল্লাহর রসূল (৭:১৫৮); যাতে আমি তা দিয়ে তোমাদের আর যার কাছে তা পৌঁছায় তাকে সতর্ক করি (৬:১৯)। কেন্দ্রে প্রেরিত হয়ে তিনি সেই কারণেই প্রেরিত গোটা দুনিয়ার কাছে।"
          },
          {
            "en": "This reach is stated plainly in a sound hadith. Al-Bukhari records from Jabir ibn Abdullah that the Prophet, peace be upon him, said: I have been given five things which were not given to anyone before me, and he listed them, closing, Every Prophet used to be sent to his nation only, but I have been sent to all mankind. The narration is in the collection of al-Bukhari, who placed it among the sound reports; the grading is not ours to raise or lower. It carries the verse's logic into the Prophet's own words.",
            "bn": "এই ব্যাপ্তি সরাসরি বলা হয়েছে একটি সহীহ হাদীসে। বুখারী জাবির ইবন আবদুল্লাহ (রাঃ) থেকে বর্ণনা করেন যে, নবী ﷺ বলেছেন: আমাকে পাঁচটি জিনিস দেওয়া হয়েছে যা আমার আগে কাউকে দেওয়া হয়নি, এরপর তিনি সেগুলো গণনা করেন এবং শেষে বলেন, প্রত্যেক নবীকে পাঠানো হতো কেবল তাঁর নিজ জাতির কাছে, আর আমাকে পাঠানো হয়েছে সমগ্র মানবজাতির কাছে। বর্ণনাটি বুখারীর সংকলনে, যিনি একে সহীহ বর্ণনার মধ্যে রেখেছেন; গ্রেডিং বাড়ানো বা কমানো আমাদের কাজ নয়। এটি আয়াতের যুক্তিকে নিয়ে আসে নবী ﷺ-এর নিজের মুখে।"
          },
          {
            "en": "Ibn Kathir draws the consequence out to the end. The sending of the unlettered Prophet reached all the towns, he writes, because he was sent to their mother and origin. With that, prophethood was sealed: no prophet and no messenger after him, yet his way remains as long as night and day remain. The warning the verse makes a condition of ruin has already gone out to every town through this one messenger from this one city.",
            "bn": "ইবন কাসীর পরিণতিটি টেনে নেন শেষ অবধি। তিনি লেখেন, উম্মি নবীর প্রেরণ সব জনপদে পৌঁছেছে, কারণ তাঁকে পাঠানো হয়েছিল তাদের মা ও মূলের কাছে। এর সঙ্গেই নবুয়ত হলো সমাপ্ত: তাঁর পরে আর কোনো নবী নেই, কোনো রসূল নেই, তবু রাত-দিন যতদিন থাকবে ততদিন তাঁর পথ থাকবে। আয়াত যে সতর্কবাণীকে ধ্বংসের শর্ত বানায়, তা এই একটি শহরের এই একজন রসূলের মাধ্যমে ইতিমধ্যে পৌঁছে গেছে প্রতিটি জনপদে।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Does Not Permit",
          "bn": "যার অনুমতি এটি দেয় না"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what Allah alone did to nations of the past: He, as Lord and Judge, destroyed certain towns after sending them a messenger and after their people persisted in wrongdoing. Every mufassir here reads it as a statement about His justice, not as a rule for anyone else to apply. The act belongs to Allah. It is His to warn, His to weigh guilt, and His to bring down a sentence, and the verse grants no share in that act to any human being or group.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা করে কেবল আল্লাহ অতীতের জাতিগুলোর সঙ্গে যা করেছেন তা-ই: তিনি, প্রতিপালক ও বিচারক হিসেবে, কিছু জনপদকে ধ্বংস করেছেন রসূল পাঠানোর পর এবং তার লোকেরা অন্যায়ে অটল থাকার পর। এখানকার প্রত্যেক তাফসীরকার একে পড়েন তাঁর ইনসাফের কথা হিসেবে, অন্য কারও প্রয়োগ করার মতো কোনো নিয়ম হিসেবে নয়। কাজটি আল্লাহর। সতর্ক করা তাঁর, দোষ ওজন করা তাঁর, আর শাস্তি নামানো তাঁর। এই কাজে আয়াত কোনো মানুষ বা দলকে কোনো অংশ দেয় না।"
          },
          {
            "en": "So the verse licenses nothing against any living person or community. It is no warrant to harm, drive out, or destroy anyone, and nobody may step into the place of the Judge and treat a neighbour, a town, or a people as marked for ruin. Whoever turns a verse about Allah's justice into a cover for his own violence has inverted it completely. The response the commentators model is to stand in awe of how justly Allah acts and to examine oneself, never to raise a hand.",
            "bn": "তাই আয়াতটি কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। এটি কাউকে ক্ষতি করা, তাড়িয়ে দেওয়া বা ধ্বংস করার কোনো সনদ নয়। কেউ নিজেকে বিচারকের আসনে বসিয়ে কোনো প্রতিবেশী, জনপদ বা জাতিকে ধ্বংসের জন্য চিহ্নিত হিসেবে গণ্য করতে পারে না। যে আল্লাহর ইনসাফ নিয়ে একটি আয়াতকে নিজের সহিংসতার আড়াল বানায়, সে একে পুরোপুরি উল্টে ফেলেছে। তাফসীরকারেরা যে সাড়াটি দেখিয়ে দেন তা হলো: আল্লাহ কত ইনসাফের সঙ্গে কাজ করেন তাতে বিস্মিত হওয়া আর নিজেকে যাচাই করা, কখনো হাত তোলা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under the Two",
          "bn": "দুই শর্তের নিচে জীবন"
        },
        "p": [
          {
            "en": "Read through wisdom and mercy, as as-Sa'di reads it, the verse turns toward the reader. The warning in my own life came first, as the verse says it always does; the message has reached me whole, carried from one city to all. What the verse makes a condition of ruin is not an accident I might slip past on a technicality but a gift already given. Its frightening half is held back behind a patience I live inside every day I am still here.",
            "bn": "সা'দী যেভাবে পড়েন, হিকমত ও রহমতের আলোয়, সেভাবে পড়লে আয়াতটি ঘুরে দাঁড়ায় পাঠকের দিকে। আমার নিজের জীবনে সতর্কবাণী আগেই এসেছে, যেমন আয়াত বলে সবসময় আসে; বার্তা আমার কাছে পুরোপুরি পৌঁছেছে, একটি শহর থেকে সবার কাছে বাহিত হয়ে। আয়াত যাকে ধ্বংসের শর্ত বানায়, তা এমন কোনো দুর্ঘটনা নয় যা থেকে আমি কোনো ফাঁক গলে বাঁচব, বরং তা আগেই দেওয়া দান। ভয়ের অর্ধেকটা থেমে আছে এমন এক ধৈর্যের আড়ালে, যার ভেতরে আমি বাস করি প্রতিটি দিন, যতদিন এখানে আছি।"
          },
          {
            "en": "That leaves the second condition as the live question. The measure is not that I once erred but that I settle into wrong after the warning has come and stay there. So the verse sends me to look, not at ruined cities far away, but at what I am still holding on to now, after I have heard. The mercy in the order, warning before judgement, is also a summons. The time between the hearing and the reckoning is exactly where a person turns, and it is open while I read.",
            "bn": "এতে জীবন্ত প্রশ্ন হয়ে থাকে দ্বিতীয় শর্তটি। মাপকাঠি এই নয় যে আমি একবার ভুল করেছি, বরং এই যে সতর্কবাণী আসার পরও আমি অন্যায়ে থিতু হয়ে সেখানেই থেকে যাই। তাই আয়াতটি আমাকে পাঠায় তাকানোর জন্য, দূরের ধ্বংস হওয়া শহরের দিকে নয়, বরং শোনার পরও এখন আমি যা আঁকড়ে আছি তার দিকে। ক্রমের ভেতরের রহমত, বিচারের আগে সতর্কতা, নিজেও এক ডাক। শোনা আর হিসাবের মাঝের সময়টুকুই ঠিক সেই জায়গা যেখানে মানুষ ফিরে আসে, আর এই পড়ার সময় তা খোলা আছে।"
          }
        ]
      }
    ]
  },
  "28:70": {
    "sections": [
      {
        "h": {
          "en": "A Creed Amid the Reckoning",
          "bn": "হিসাবের মাঝে এক আকীদা"
        },
        "p": [
          {
            "en": "Surah al-Qasas has been walking through the Day of Resurrection. In 28:65 Allah calls the deniers and asks what answer they gave the messengers; in 28:66 their arguments go dark and they cannot even question one another; in 28:68 and 28:69 the Lord who creates and chooses is also the Lord who knows what every chest conceals. Then, set into the middle of that scene, comes 28:70, a verse that reads almost entirely as creed, a plain statement of who this Judge actually is.",
            "bn": "সূরা আল-কাসাস তখন কিয়ামতের দিনটা ধরে এগোচ্ছে। ২৮:৬৫ আয়াতে আল্লাহ অস্বীকারকারীদের ডেকে জিজ্ঞেস করেন, রসূলদের তারা কী জবাব দিয়েছিল। ২৮:৬৬ আয়াতে তাদের যুক্তি অন্ধকার হয়ে যায়, একে অন্যকে জিজ্ঞেস করার পথও থাকে না। ২৮:৬৮ ও ২৮:৬৯ আয়াতে যিনি যা ইচ্ছে সৃষ্টি করেন ও মনোনীত করেন, তিনিই আবার জানেন প্রতিটি বুক কী লুকিয়ে রাখে। সেই দৃশ্যের ঠিক মাঝখানে আসে ২৮:৭০, প্রায় পুরোটাই আকীদার একটি আয়াত, এই বিচারক আসলে কে তার সোজা ঘোষণা।"
          },
          {
            "en": "Four clauses carry it. He is Allah, and there is no deity except Him. To Him belongs all praise, in the first life and in the Hereafter. His is the decision. And to Him you will be returned. This article keeps to these four and does not run ahead into the night-and-day argument of 28:71 and 28:72, or the account of Qarun that opens at 28:76. The question here is narrower: what is being affirmed, and why here.",
            "bn": "চারটি বাক্য আয়াতটিকে বহন করে। তিনিই আল্লাহ, তিনি ছাড়া কোনো ইলাহ নেই। সমস্ত প্রশংসা তাঁরই, এই প্রথম জীবনে আর আখিরাতে। বিধান তাঁরই। আর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে। এই লেখা এই চারটি কথার মধ্যেই থাকবে, ২৮:৭১ ও ২৮:৭২ আয়াতের রাত-দিনের যুক্তিতে কিংবা ২৮:৭৬ আয়াত থেকে শুরু হওয়া কারূনের ঘটনায় ছুটে যাবে না। এখানকার প্রশ্নটা ছোট। কী ঘোষণা করা হচ্ছে, আর কেন এখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "He Alone, No Other",
          "bn": "তিনি একাই, আর কেউ নয়"
        },
        "p": [
          {
            "en": "Wa huwa Allahu la ilaha illa huwa: and He is Allah; there is no deity except Him. At-Tabari glosses it as the Worshipped One whom alone it is right to worship, with no other whose worship is permitted. Ibn Kathir reads the clause as His being alone in divinity, so that there is no object of worship besides Him, just as there is no Lord besides Him who creates and chooses. Al-Qurtubi calls Him the One singled out in oneness, and al-Muyassar, there is no deity in truth but Him.",
            "bn": "ওয়া হুয়াল্লাহু লা ইলাহা ইল্লা হুয়া: আর তিনিই আল্লাহ, তিনি ছাড়া কোনো ইলাহ নেই। তাবারী এর ব্যাখ্যায় বলেন, তিনিই সেই মাবুদ, কেবল যাঁরই ইবাদত করা সঠিক, যাঁকে ছাড়া আর কারও ইবাদত বৈধ নয়। ইবন কাসীর পড়েন, তিনি উলুহিয়াতে একক, তাই তিনি ছাড়া কোনো মাবুদ নেই, যেমন তিনি ছাড়া এমন কোনো রব নেই যিনি সৃষ্টি করেন ও মনোনীত করেন। কুরতুবী তাঁকে বলেন একত্বে একক, আর মুয়াসসার বলে, সত্যিকার অর্থে তিনিই একমাত্র মাবুদ।"
          },
          {
            "en": "That last link, in Ibn Kathir, reaches back two verses. In 28:68 the Lord creates what He wills and chooses; here that same Lord is the only one worthy of worship. The affirmation is not abstract. Just above, in 28:64, the partners that people called upon could not answer and could not help. The verse now names what the scene has already shown: the only one who answers, who creates, who judges, is the one deity there is, and worship aimed anywhere else lands nowhere.",
            "bn": "ইবন কাসীরের ওই শেষ যোগসূত্রটি দুই আয়াত পেছনে পৌঁছায়। ২৮:৬৮ আয়াতে রব যা ইচ্ছে সৃষ্টি করেন ও মনোনীত করেন, আর এখানে সেই একই রবই একমাত্র ইবাদতের যোগ্য। ঘোষণাটি ফাঁকা কথা নয়। এর ঠিক উপরে, ২৮:৬৪ আয়াতে, মানুষ যাদের ডেকেছিল সেই শরীকরা সাড়া দিতে পারেনি, সাহায্যও করতে পারেনি। দৃশ্য যা আগেই দেখিয়ে দিয়েছে, আয়াত এবার তার নাম দেয়: যিনি সাড়া দেন, সৃষ্টি করেন, বিচার করেন, তিনিই একমাত্র ইলাহ, আর অন্য কোথাও মুখ ফেরানো ইবাদত কোথাও পৌঁছায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Praised in Both Lives",
          "bn": "দুই জীবনেই তাঁর প্রশংসা"
        },
        "p": [
          {
            "en": "Lahu l-hamdu fi l-ula wa l-akhira: to Him belongs the praise in the first and the last. What are the first and the last? The dominant reading takes them as the two lives. At-Tabari glosses al-ula plainly as this world, al-dunya, paired with the Hereafter, al-akhira; al-Muyassar says the same, that the beautiful praise and the thanks are His in the world and in the world to come. On this reading the verse claims every honour a person could ever offer, in both the house they live in now and the one they are heading for.",
            "bn": "লাহুল হামদু ফিল উলা ওয়াল আখিরাহ: প্রথমে আর শেষে সমস্ত প্রশংসা তাঁরই। প্রথম আর শেষ মানে কী? প্রধান পাঠ এ দুটিকে দুই জীবন ধরে নেয়। তাবারী আল-উলা শব্দের সোজা অর্থ করেন এই দুনিয়া, আর তার সঙ্গে আখিরাত। মুয়াসসারও একই কথা বলে, দুনিয়া ও আখিরাতে সুন্দর প্রশংসা আর শুকরিয়া তাঁরই। এই পাঠে আয়াত দাবি করে মানুষের দেওয়ার মতো সব সম্মান, যে ঘরে সে এখন আছে আর যে ঘরের দিকে সে চলেছে, দুই জায়গাতেই।"
          },
          {
            "en": "A second reading widens the pair. Ibn Kathir does not stop at the two abodes; he glosses the clause as meaning that in everything He does He is the one praised, for His justice and His wisdom. Read that way, al-ula wa l-akhira reaches over the whole span of His acts, first and last, beginning and end. The two readings do not fight. Whether you measure by the two lives or by the sweep of all He does, the conclusion is al-Qurtubi's: all praises are due to Him alone.",
            "bn": "দ্বিতীয় একটি পাঠ জোড়াটিকে আরও বড় করে। ইবন কাসীর দুই ঘরে থেমে থাকেন না। তিনি ব্যাখ্যা করেন, তিনি যা-ই করেন তাতেই তিনিই প্রশংসিত, তাঁর ইনসাফ আর হিকমতের জন্য। এভাবে পড়লে আল-উলা ওয়াল আখিরাহ তাঁর সব কাজের গোটা বিস্তার জুড়ে পৌঁছায়, প্রথম ও শেষ, শুরু ও সমাপ্তি। দুই পাঠের মধ্যে ঝগড়া নেই। দুই জীবন দিয়ে মাপুন বা তাঁর সব কাজের বিস্তার দিয়ে, সিদ্ধান্ত কুরতুবীরই: সমস্ত প্রশংসা কেবল তাঁরই প্রাপ্য।"
          },
          {
            "en": "Al-Baghawi adds a human picture to the clause. His friends, he says, praise Him in this world, and they praise Him in the Hereafter, in the Garden. Praise here is not only His by right; it is something His servants actually do, and keep doing after death. The grateful tongue that says al-hamdu lillah in a narrow present is the same tongue that will say it in the open Hereafter. The habit begun now is the habit carried across.",
            "bn": "বাগাভী বাক্যটিতে একটি মানুষের ছবি যোগ করেন। তাঁর ভাষায়, তাঁর বন্ধুরা এই দুনিয়ায় তাঁর প্রশংসা করে, আর আখিরাতে জান্নাতে গিয়েও তাঁর প্রশংসা করে। প্রশংসা এখানে কেবল অধিকার হিসেবে তাঁর নয়, বান্দারা তা সত্যিই করে, আর মৃত্যুর পরও করতে থাকে। সংকীর্ণ বর্তমানে যে জিহ্বা আলহামদুলিল্লাহ বলে, খোলা আখিরাতেও সেই জিহ্বাই তা বলবে। এখন যে অভ্যাস শুরু হয়, সেটাই ওপারে বয়ে নেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Word Decides",
          "bn": "শেষ কথা যাঁর"
        },
        "p": [
          {
            "en": "Wa lahu l-hukm: and His is the decision. At-Tabari reads al-hukm as the judgement He passes between His creation; al-Qurtubi, that there is no ruling except His. Ibn Kathir sharpens the point: it is the decision that none can follow up or overturn, by His subduing power, His dominance, His wisdom and His mercy. A human verdict can be appealed, reversed, ignored; this verdict stands because whoever gives it holds all that the verdict touches. There is no higher court.",
            "bn": "ওয়া লাহুল হুকম: আর বিধান তাঁরই। তাবারী আল-হুকম পড়েন তাঁর সৃষ্টির মধ্যে তাঁর দেওয়া ফয়সালা হিসেবে; কুরতুবী বলেন, তাঁর ছাড়া কোনো বিধান নেই। ইবন কাসীর কথাটা আরও ধারালো করেন, এ এমন ফয়সালা যা কেউ উল্টে দিতে বা তার পিছু নিতে পারে না, তাঁর পরাক্রম, তাঁর আধিপত্য, তাঁর হিকমত আর তাঁর রহমতের জোরে। মানুষের রায়ের বিরুদ্ধে আপিল চলে, তা উল্টে যায়, কেউ মানে না; এই রায় টিকে থাকে, কারণ যিনি তা দেন রায় যা ছোঁয় তার সবই তাঁর হাতে। এর উপরে আর কোনো আদালত নেই।"
          },
          {
            "en": "As-Sa'di opens the word into three. He is the Ruler in both abodes. In this world He rules by the decree of destiny, al-hukm al-qadari, whose trace is everything He has created and brought into being; and by the ruling of religion, al-hukm al-dini, whose trace is all the sacred law, its commands and its prohibitions. In the Hereafter He rules by His decree and by His recompense. One word, al-hukm, and it covers what exists, what is commanded, and how it all ends.",
            "bn": "সাদী শব্দটিকে তিনটি ভাগে খোলেন। তিনি দুই জগতেই শাসক। এই দুনিয়ায় তিনি শাসন করেন তাকদিরের বিধান দিয়ে, আল-হুকম আল-কাদারি, যার ছাপ তাঁর সৃষ্ট ও সূচিত সবকিছু; আর দীনের বিধান দিয়ে, আল-হুকম আদ-দীনি, যার ছাপ গোটা শরীয়ত, তার আদেশ আর নিষেধ। আখিরাতে তিনি শাসন করেন তাঁর তাকদিরের বিধান আর প্রতিদানের বিধান দিয়ে। একটি শব্দ, আল-হুকম, আর তা যা আছে, যা আদেশ করা হয়েছে, আর সব কীভাবে শেষ হবে, সবটা ঢেকে নেয়।"
          },
          {
            "en": "Al-Baghawi reads al-hukm as the decisive judgement between creatures, and reports from Ibn Abbas a two-sided verdict: forgiveness decreed for the people of His obedience, wretchedness for the people of disobedience. This is worth placing carefully. The seal of the surah, 28:88, returns to His being the one to whom the judgement belongs as everything else perishes. Here, in the body of the surah, the same truth is planted as an affirmation among the living: His word already decides, in this world and the next, not only at the very end.",
            "bn": "বাগাভী আল-হুকম পড়েন সৃষ্টির মধ্যে চূড়ান্ত ফয়সালা হিসেবে, আর ইবন আব্বাস (রাঃ) থেকে আনেন দুই দিকের রায়, তাঁর আনুগত্যকারীদের জন্য মাগফিরাত, আর নাফরমানদের জন্য দুর্ভাগ্য। কথাটা সাবধানে রাখা দরকার। সূরার সিলমোহর, ২৮:৮৮ আয়াত, আবার ফিরে আসে এই দিকে যে সব কিছু ধ্বংস হওয়ার সময় বিচার তাঁরই। আর এখানে, সূরার শরীরের ভেতরে, সেই একই সত্য জীবিতদের মাঝে এক ঘোষণা হিসেবে বসানো, তাঁর কথা এখনই ফয়সালা করে দেয়, এই দুনিয়ায় ও পরকালে, কেবল একদম শেষে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Everyone Comes Back",
          "bn": "সবাই ফিরে আসবে তাঁরই কাছে"
        },
        "p": [
          {
            "en": "Wa ilayhi turja'un: and to Him you will be returned. At-Tabari reads it as the return after death, where He judges between you with truth. Al-Muyassar says you are brought back to Him after your death for the reckoning and the recompense. The verb is passive and plural: it is not a journey you choose or a destination you negotiate. Everyone addressed in the scene, denier and believer alike, is carried back to the same place, and the One they return to is the One who has just been named.",
            "bn": "ওয়া ইলাইহি তুরজাউন: আর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে। তাবারী এটি পড়েন মৃত্যুর পরের ফেরা হিসেবে, যেখানে তিনি তোমাদের মধ্যে সত্য দিয়ে ফয়সালা করবেন। মুয়াসসার বলে, মৃত্যুর পর হিসাব আর প্রতিদানের জন্য তোমাদের তাঁর কাছেই ফিরিয়ে আনা হবে। ক্রিয়াটি কর্মবাচ্য আর বহুবচন। এটা নিজের বেছে নেওয়া সফর নয়, দরদাম করার কোনো গন্তব্যও নয়। দৃশ্যে যাদের সম্বোধন করা হয়েছে, অস্বীকারকারী আর মুমিন সবাইকে, একই জায়গায় ফিরিয়ে আনা হয়, আর যাঁর কাছে তারা ফেরে তিনিই এইমাত্র নাম-নেওয়া সেই সত্তা।"
          },
          {
            "en": "Ibn Kathir joins the return to the judging. All of you, on the Day of Resurrection, and He will repay every worker for his work, good and evil, and not one hidden thing among their deeds escapes Him. That clause reaches back to 28:69, where the Lord knows what their chests conceal and what they declare. Nothing is filed away unseen. As-Sa'di closes the same loop: He will recompense each of you for his deed, of good and of evil. The return is not an ending; it is an accounting.",
            "bn": "ইবন কাসীর ফেরাকে বিচারের সঙ্গে জুড়ে দেন। কিয়ামতের দিন তোমরা সবাই, আর তিনি প্রতিটি আমলকারীকে তার আমল অনুযায়ী প্রতিদান দেবেন, ভালো হোক বা মন্দ, আর তাদের আমলের একটি গোপন জিনিসও তাঁর কাছ থেকে লুকানো থাকে না। এই কথা ২৮:৬৯ আয়াতে ফিরে যায়, যেখানে রব জানেন তাদের বুক যা গোপন করে আর যা প্রকাশ করে। কিছুই অদেখা থেকে ফাইলবন্দি হয়ে যায় না। সাদীও একই বৃত্ত বন্ধ করেন, তিনি তোমাদের প্রত্যেককে তার আমল অনুযায়ী প্রতিদান দেবেন, ভালো আর মন্দের। ফেরা কোনো সমাপ্তি নয়, এ এক হিসাব।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word That Weighs Heaviest",
          "bn": "যে শব্দ পাল্লা ভারী করে"
        },
        "p": [
          {
            "en": "One sound narration ties this verse's praise to its return. Muslim records in his Sahih, from Abu Malik al-Ash'ari, that the Messenger of Allah ﷺ said: Cleanliness is half of faith, and al-hamdu lillah fills the scale, and subhan Allah and al-hamdu lillah fill up what is between the heavens and the earth, and prayer is a light, and charity is proof, and endurance is a brightness, and the Qur'an is a proof for you or against you. Every person goes out in the morning and sells his soul, setting it free or destroying it.",
            "bn": "একটি সহীহ হাদীস এই আয়াতের প্রশংসাকে এর ফেরার সঙ্গে বাঁধে। মুসলিম তাঁর সহীহ-তে আবু মালিক আল-আশআরী (রাঃ) থেকে বর্ণনা করেন, রসূলুল্লাহ ﷺ বলেছেন, পবিত্রতা ঈমানের অর্ধেক, আর আলহামদুলিল্লাহ পাল্লা ভরে দেয়, আর সুবহানাল্লাহ ও আলহামদুলিল্লাহ আসমান আর জমিনের মাঝের সবটুকু ভরে দেয়, আর সালাত আলো, আর সদকা প্রমাণ, আর ধৈর্য দীপ্তি, আর কুরআন তোমার পক্ষে কিংবা তোমার বিপক্ষে দলিল। প্রতিটি মানুষ সকালে বেরোয় আর নিজের প্রাণ বিক্রি করে, হয় তাকে মুক্ত করে, নয়তো ধ্বংস করে।"
          },
          {
            "en": "Hold that beside the verse. The praise that is His in the first life and the last, in 28:70, is the very word the hadith says fills the scale, and the scale is set up precisely at the return the verse ends on. So al-hamdu lillah is not a small politeness. It is weight laid up now, in al-ula, to be found waiting in al-akhira. Whoever keeps the word on his tongue is not only acknowledging a truth; he is sending something ahead to the place he is returning to.",
            "bn": "এটা আয়াতের পাশে রাখুন। ২৮:৭০ আয়াতে যে প্রশংসা প্রথম জীবনে আর শেষ জীবনে তাঁরই, সেই শব্দটাই হাদীস বলে পাল্লা ভরে দেয়, আর পাল্লা বসানো হয় ঠিক সেই ফেরার জায়গায় যেখানে আয়াত শেষ হয়। তাই আলহামদুলিল্লাহ কোনো ছোট ভদ্রতা নয়। এ এখন, উলা-তে, জমিয়ে রাখা ওজন, যা আখিরাতে গিয়ে অপেক্ষায় পাওয়া যাবে। যে জিহ্বায় শব্দটি ধরে রাখে, সে কেবল এক সত্য মেনে নিচ্ছে না, যে জায়গায় ফিরছে সেখানে সে কিছু আগে পাঠিয়ে রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Four Belong Together",
          "bn": "চারটি কথা কেন একসাথে"
        },
        "p": [
          {
            "en": "Set the four clauses against the verses around them and they stop looking like a list. The deities who could not answer in 28:64 are answered by there is no deity except Him. The Lord who creates and chooses in 28:68 is the Lord whose is the decision. The Lord who knows what chests conceal in 28:69 is the Lord to whom you are returned, where nothing concealed survives. The verse is not changing the subject; it is naming the One the whole Judgement scene has been circling.",
            "bn": "চারটি বাক্যকে আশপাশের আয়াতের পাশে রাখুন, আর সেগুলো আর নিছক তালিকা মনে হয় না। ২৮:৬৪ আয়াতে যে দেবতারা সাড়া দিতে পারেনি, তাদের জবাব দেয় তিনি ছাড়া কোনো ইলাহ নেই। ২৮:৬৮ আয়াতে যিনি সৃষ্টি করেন ও মনোনীত করেন, বিধান তাঁরই। ২৮:৬৯ আয়াতে যিনি জানেন বুক কী গোপন করে, তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হয়, যেখানে কোনো গোপন কিছু টেকে না। আয়াত প্রসঙ্গ বদলাচ্ছে না, গোটা কিয়ামতের দৃশ্য যাঁকে ঘিরে ঘুরছিল, সেই একমাত্র সত্তারই নাম দিচ্ছে।"
          },
          {
            "en": "The order has a shape as well. First the ground: He alone is God. Then the response that ground calls for: all praise is His. Then the authority that follows from it: His is the decision. Then the destination it all moves toward: to Him you return. Belief, worship, submission, and expectation, in four short phrases. A person who takes the first has somewhere to stand; a person who takes the last has somewhere to go; and the two praises, first and last, join the standing to the going.",
            "bn": "ক্রমটারও একটা গড়ন আছে। প্রথমে ভিত্তি, তিনিই একমাত্র ইলাহ। তারপর সেই ভিত্তি যে সাড়া চায়, সমস্ত প্রশংসা তাঁর। তারপর তা থেকে আসা কর্তৃত্ব, বিধান তাঁর। তারপর যে গন্তব্যের দিকে সবটা চলে, তাঁর কাছেই ফেরা। ঈমান, ইবাদত, আত্মসমর্পণ আর প্রত্যাশা, চারটি ছোট কথায়। যে প্রথমটি গ্রহণ করে তার দাঁড়ানোর জায়গা আছে, যে শেষটি গ্রহণ করে তার যাওয়ার জায়গা আছে, আর দুই প্রশংসা, প্রথম ও শেষ, দাঁড়ানোকে যাওয়ার সঙ্গে জুড়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Praise Now, For Then",
          "bn": "এখনকার প্রশংসা, সেদিনের জন্য"
        },
        "p": [
          {
            "en": "What does a verse of pure creed ask of an ordinary week? First, one direction. If there is no deity but Him, the heart that keeps a second address is divided against itself, and the verse asks for it back. Second, that praise travel. When something good arrives, al-hamd can stop at the hand that passed it over, or go up to the One whose it is in both lives. Third, a kind of rest: the decision is His, so a verdict that was never yours to give can be set down.",
            "bn": "খাঁটি আকীদার একটি আয়াত সাধারণ একটা সপ্তাহের কাছে কী চায়? প্রথমত, একটিমাত্র দিক। তিনি ছাড়া যদি কোনো ইলাহ না থাকে, তবে যে মন দ্বিতীয় একটা ঠিকানা ধরে রাখে সে নিজের সঙ্গেই বিভক্ত, আর আয়াত তাকে ফেরত চায়। দ্বিতীয়ত, প্রশংসা যেন উপরে ওঠে। ভালো কিছু এলে আলহামদ যে হাতে তা এগিয়ে দিল সেখানে থেমে যেতে পারে, আবার দুই জীবনেই যাঁর সেই সত্তার কাছে উঠে যেতে পারে। তৃতীয়ত, একরকম স্বস্তি, বিধান তাঁর, তাই যে রায় কোনোদিন আপনার দেওয়ার কথা ছিল না তা নামিয়ে রাখা যায়।"
          },
          {
            "en": "And the return reframes the whole of it. This verse is not only a fact about a courtroom at the end of time; it is an affirmation set among the living, mid-surah, for people still choosing where to face. You are going back to Him. The praise offered now, in al-ula, is the praise that meets you in al-akhira; the decision accepted now is the decision you will stand under then. The creed in the middle of the scene is meant to be lived before it is confirmed.",
            "bn": "আর ফেরা গোটা ব্যাপারটাকে নতুন চোখে দেখায়। এই আয়াত কেবল কালের শেষে কোনো আদালত নিয়ে তথ্য নয়, এ জীবিতদের মাঝে সূরার ভেতরে বসানো এক ঘোষণা, সেই মানুষদের জন্য যারা এখনো ঠিক করছে কোন দিকে মুখ করবে। আপনি তাঁর কাছেই ফিরছেন। এখন উলা-তে দেওয়া প্রশংসাই আখিরাতে আপনার সঙ্গে দেখা করবে, এখন মেনে নেওয়া বিধানের নিচেই সেদিন আপনি দাঁড়াবেন। দৃশ্যের মাঝখানের এই আকীদা, সত্য প্রমাণিত হওয়ার আগেই তা বেঁচে দেখানোর জন্য।"
          }
        ]
      }
    ]
  },
  "28:76": {
    "sections": [
      {
        "h": {
          "en": "A New Story Opens",
          "bn": "নতুন এক কাহিনির শুরু"
        },
        "p": [
          {
            "en": "The sūrah has just closed the argument against the idol-worshippers of Makkah, asking who but Allah could give them day or night, and promising a Day when their invented partners vanish. Then a lone honorific pause, the ۞, and a new name: Qārūn. Ma'arif al-Qur'an notes the thread that joins them. An earlier verse had said that whatever you are given is only the enjoyment of this worldly life. Qārūn is that warning turned into a man.",
            "bn": "সূরা এইমাত্র মক্কার মূর্তিপূজকদের বিরুদ্ধে যুক্তি শেষ করেছে। আল্লাহ ছাড়া কে তাদের দিন বা রাত এনে দিতে পারে, আর সেই দিনের কথা যেদিন তাদের বানানো শরীকেরা হারিয়ে যাবে। তারপর একটি সম্মানসূচক বিরতি, ۞ চিহ্ন, আর নতুন একটি নাম: কারূন। মাআরিফুল কুরআন এই দুই অংশের সুতোটা ধরিয়ে দেয়। আগের এক আয়াত বলেছিল, তোমাদের যা কিছু দেওয়া হয়েছে তা কেবল দুনিয়ার জীবনের ভোগ। কারূন যেন সেই সতর্কবাণীটাই মানুষের রূপ নিয়ে এল।"
          },
          {
            "en": "The verse opens with a flat fact: inna Qārūna kāna min qawmi Mūsā, indeed Qārūn was from the people of Musa. As-Sa'di reads qawm here as the Children of Israel, the nation Allah had favoured and lifted above the people of its time. That is the sting in the opening. Qārūn did not come from outside the believing community to attack it. He rose from inside it, one of its own, and the harm he did was done to his own kin.",
            "bn": "আয়াত শুরু হয় একটা সোজা তথ্য দিয়ে: ইন্না কারূনা কানা মিন কওমি মূসা, কারূন ছিল মূসার সম্প্রদায়ের লোক। সাদী এখানে 'কওম' মানে নেন বনী ইসরাইল, যে জাতিকে আল্লাহ তাদের যুগের সবার উপর মর্যাদা দিয়েছিলেন। আর এখানেই শুরুর কথাটার খোঁচা। কারূন বাইরে থেকে এসে ঈমানদারদের উপর হামলা করেনি। সে উঠে এসেছিল ভেতর থেকেই, তাদেরই একজন হয়ে, আর যে ক্ষতি সে করল তা করল নিজের স্বজনদের উপরেই।"
          },
          {
            "en": "The name itself sits oddly in Arabic. Ma'arif al-Qur'an observes that Qārūn is a non-Arabic word, likely Hebrew, and al-Qurtubi explains the grammar: because it is both foreign and a proper name, it does not take the usual tanwīn. A small grammatical flag, but it fits the story the sūrah is telling. This is a figure the Qur'an holds up from outside the Arab setting of its first hearers, an example whose lesson was meant to travel past any one people or age.",
            "bn": "নামটাও আরবিতে একটু বেমানান। মাআরিফুল কুরআন বলে, কারূন আরবি শব্দ নয়, সম্ভবত হিব্রু, আর কুরতুবী ব্যাকরণটা খুলে দেন: শব্দটি বিদেশি আবার বিশেষ্য, তাই এতে স্বাভাবিক তানবীন বসে না। ছোট্ট একটা ব্যাকরণের ইঙ্গিত, তবু সূরার বলা কাহিনির সঙ্গে তা মিলে যায়। এ এমন একজন, যাকে কুরআন তুলে ধরেছে প্রথম শ্রোতাদের আরব পরিবেশের বাইরে থেকে। তার শিক্ষা কোনো এক জাতি বা যুগে আটকে থাকার কথা ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "He Wronged His Own",
          "bn": "নিজের লোকেরই উপর জুলুম"
        },
        "p": [
          {
            "en": "Then comes the turn: fa-baghā ʿalayhim, but he tyrannised them. The word baghy carries more than one weight, and the commentators spread out across its senses rather than settle on one. Al-Muyassar reads it as overstepping every bound in pride and domineering over them. Qatādah, as al-Baghawi reports him, reads the baghy as his sheer excess of wealth; ad-Dahhāk, in the same place, reads it as outright disbelief. The verse itself fixes only that he turned on his own people.",
            "bn": "তারপর আসে মোড়: ফাবাগা আলাইহিম, কিন্তু সে তাদের উপর জুলুম করল। 'বাগী' শব্দটির ওজন একটার বেশি, তাই তাফসীরকারেরা এর নানা অর্থে ছড়িয়ে পড়েন, একটিতে থিতু হন না। মুয়াসসার একে পড়েন অহংকার আর দাপটে সব সীমা ছাড়িয়ে তাদের উপর চড়াও হওয়া বলে। কাতাদা, বাগাভীর বর্ণনায়, বাগী মানে নেন তার সম্পদের অতিরিক্ততা; একই জায়গায় দাহহাক একে পড়েন সরাসরি কুফর বলে। আয়াত নিজে কেবল এটুকু নিশ্চিত করে যে সে নিজের লোকদের উপরই ফিরে দাঁড়িয়েছিল।"
          },
          {
            "en": "Ma'arif al-Qur'an gathers two main readings. The more common is cruelty: drunk on his wealth, he began to oppress people. It cites Yahyā ibn Sallām and Sa'īd ibn al-Musayyab, who held that Qārūn was set by Pharaoh over the Children of Israel and used that post to harass them. The second reading is arrogance: he grew conceited and looked down on his own people. Al-Qurtubi adds a further sense from Ibn Bahr, that his baghy was crediting the treasures to his own skill and cleverness.",
            "bn": "মাআরিফুল কুরআন মূল দুটি অর্থ জড়ো করে। বেশি প্রচলিত অর্থটি হলো জুলুম: সম্পদের নেশায় মত্ত হয়ে সে মানুষের উপর অত্যাচার শুরু করে। এটি ইয়াহইয়া ইবন সাল্লাম আর সাঈদ ইবন মুসায়্যিবের কথা তুলে ধরে, যাঁদের মতে ফিরআউন কারূনকে বনী ইসরাইলের উপর নিয়োগ করেছিল, আর সে সেই পদ কাজে লাগিয়ে তাদের হয়রানি করত। দ্বিতীয় অর্থটি অহংকার: সে দাম্ভিক হয়ে নিজের লোকদের তুচ্ছ করতে লাগল। কুরতুবী ইবন বাহর থেকে আরেকটি অর্থ যোগ করেন, বাগী ছিল ধনভান্ডারকে নিজের দক্ষতা আর বুদ্ধির ফল বলে দাবি করা।"
          },
          {
            "en": "These are not rival stories so much as facets of one failure, and keeping them side by side is more honest than forcing a single verdict. Whether the baghy was oppression, arrogance, ingratitude, or all three braided together, the common root is a man who took a gift and turned it into a weapon against the people around him. At-Tabari preserves Qatādah's line that in the end his own baghy destroyed him. The gift was real; the ruin was self-made.",
            "bn": "এগুলো আলাদা আলাদা কাহিনি নয়, বরং একটি ব্যর্থতার ভিন্ন ভিন্ন দিক, আর এদের পাশাপাশি রাখাই এক রায় চাপিয়ে দেওয়ার চেয়ে সৎ। বাগী জুলুম হোক, অহংকার হোক, অকৃতজ্ঞতা হোক, কিংবা তিনটি একসঙ্গে পেঁচানো হোক, মূল শিকড় একটাই: একজন মানুষ আল্লাহর দান পেয়ে তা আশপাশের মানুষের বিরুদ্ধে অস্ত্র বানিয়ে ফেলল। তাবারী কাতাদার সেই কথাটি রেখে দেন যে শেষমেশ তার নিজের বাগীই তাকে ধ্বংস করল। দান ছিল সত্যি, কিন্তু ধ্বংসটা সে নিজেই ডেকে এনেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Kin We Cannot Name",
          "bn": "যে আত্মীয়তা অনিশ্চিত"
        },
        "p": [
          {
            "en": "How exactly was Qārūn related to Musa? The reports do not agree. Ibn Kathir lists Ibn 'Abbās, al-Nakha'ī, Qatādah, Mālik ibn Dīnār, Ibn Jurayj and others, all saying he was Musa's cousin, the son of his paternal uncle. Against them, Ibn Kathir notes, Muhammad ibn Ishāq held that Qārūn was Musa's uncle. Ibn Jarīr at-Tabari records both and says most scholars took the cousin view, closing, as he so often does, with 'and Allah knows best.'",
            "bn": "কারূন মূসার সঙ্গে ঠিক কীভাবে সম্পর্কিত ছিল? বর্ণনাগুলো একমত নয়। ইবন কাসীর তালিকা দেন ইবন আব্বাস, নাখয়ী, কাতাদা, মালিক ইবন দীনার, ইবন জুরাইজ ও আরও অনেকের, যাঁরা সবাই বলেন সে ছিল মূসার চাচাতো ভাই, চাচার ছেলে। এর বিপরীতে, ইবন কাসীর জানান, মুহাম্মাদ ইবন ইসহাক মনে করতেন কারূন ছিল মূসার চাচা। ইবন জারীর তাবারী দুটোই লিপিবদ্ধ করেন এবং বলেন অধিকাংশ আলেম চাচাতো ভাইয়ের মত নিয়েছেন, আর শেষ করেন তাঁর চিরচেনা কথায়: 'আল্লাহই ভালো জানেন।'"
          },
          {
            "en": "This is a detail the Qur'an deliberately leaves unfixed, and so should we. The revelation commits us only to min qawmi Mūsā, from the people of Musa; the precise rung on the family tree is a matter the earliest authorities themselves could not settle, drawn largely from Isrā'īliyyāt. Nothing in the lesson of the verse rests on it. What matters is already in the Arabic: he was near to Musa, one of the chosen nation, and nearness to a prophet did not save a man who chose baghy.",
            "bn": "এটি এমন একটি বিষয় যা কুরআন ইচ্ছে করেই খোলা রেখেছে, তাই আমাদেরও খোলা রাখা উচিত। ওহী আমাদের কেবল এটুকুতে বাঁধে, মিন কওমি মূসা, মূসার সম্প্রদায়ের লোক। বংশতালিকার ঠিক কোন ধাপ, তা প্রাচীন কর্তৃপক্ষরাই মীমাংসা করতে পারেননি, আর তা মূলত ইসরাঈলিয়াত থেকে নেওয়া। আয়াতের শিক্ষার কিছুই এর উপর দাঁড়িয়ে নেই। আসল কথাটা আরবিতেই আছে: সে মূসার কাছের লোক ছিল, মনোনীত জাতিরই একজন, অথচ নবীর নৈকট্যও বাগী বেছে নেওয়া একজন মানুষকে বাঁচাতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Keys That Stagger Men",
          "bn": "চাবি যা মানুষকে নোয়ায়"
        },
        "p": [
          {
            "en": "Wa-ātaynāhu mina l-kunūzi: and We gave him of the treasures. The giving is owned by Allah in the verse; the wealth was a grant, not an achievement. Kunūz, Ma'arif al-Qur'an notes, is the plural of kanz, buried or hoarded treasure. Then the measure of it: mā inna mafātiḥahu la-tanū'u bil-'uṣbati ulī l-quwwa, treasure whose very keys would weigh down a band of strong men. The Qur'an gauges the hoard not by naming a sum but by the strain of merely carrying its keys.",
            "bn": "ওয়া আতাইনাহু মিনাল কুনূয: আর আমি তাকে ধনভান্ডার থেকে দিয়েছিলাম। আয়াতে দেওয়ার মালিকানা আল্লাহরই; সম্পদ ছিল তাঁর দান, কোনো অর্জন নয়। মাআরিফুল কুরআন বলে, কুনূয হলো কানযের বহুবচন, পুঁতে রাখা বা জমানো ধন। এরপর তার মাপ: মা ইন্না মাফাতিহাহু লাতানূউ বিল উসবাতি উলিল কুওয়া, এমন ধন যার কেবল চাবিগুলোই একদল বলবান লোককে নুইয়ে দিত। কুরআন ভান্ডারটা মাপে কোনো অঙ্ক বলে নয়, বরং শুধু তার চাবি বইতে কতটা কষ্ট হয় তা দিয়ে।"
          },
          {
            "en": "The word mafātiḥ itself carries two readings, and the commentators give both. Al-Baghawi reports that Qatādah, Mujāhid and a group took it as keys, the things a door is opened with; others read it as the storerooms themselves, as in 'with Him are the keys (mafātiḥ) of the unseen' at 6:59. As-Sa'di keeps to keys and draws the force out of it: if the keys alone bend a strong group, what then of the treasuries they open? It is a measure that works either way.",
            "bn": "মাফাতিহ শব্দটাও দুই অর্থ বহন করে, আর তাফসীরকারেরা দুটোই দেন। বাগাভী জানান কাতাদা, মুজাহিদ ও একদল একে নিয়েছেন 'চাবি' অর্থে, যা দিয়ে দরজা খোলা হয়; অন্যরা একে পড়েছেন ভান্ডার বা কুঠুরি অর্থে, যেমন ৬:৫৯ আয়াতে আছে 'তাঁরই কাছে গায়েবের চাবি (মাফাতিহ)'। সাদী 'চাবি' অর্থেই থাকেন এবং এর জোরটা বের করে আনেন: চাবিগুলোই যদি একদল বলবানকে নুইয়ে দেয়, তবে সেগুলো যে ভান্ডার খোলে তার কথা কী বলব? মাপটা দুই অর্থেই খাটে।"
          },
          {
            "en": "As for the 'uṣba, the strong band, al-Qurtubi records that the early scholars differed over its number across some eleven opinions, from a mere handful up to seventy. He lays them out and settles on none, and neither should a reader. The number is not the point and was never revealed; the image is. A group of powerful men, straining under keys alone, is the Qur'an's way of saying: more than any one man can honestly need, and more than enough to test what he is made of.",
            "bn": "আর 'উসবা', সেই বলবান দল, এর সংখ্যা নিয়ে কুরতুবী জানান প্রাচীন আলেমরা প্রায় ১১টি মতে বিভক্ত ছিলেন, গুটিকয় লোক থেকে সত্তর পর্যন্ত। তিনি মতগুলো সাজিয়ে দেন কিন্তু কোনোটিতে থিতু হন না, পাঠকেরও তাই করা উচিত নয়। সংখ্যাটা আসল কথা নয় এবং তা কখনো নাজিলও হয়নি; আসল হলো ছবিটা। একদল শক্তিমান মানুষ কেবল চাবির ভারেই কাহিল, এটা কুরআনের বলার ঢং: এত সম্পদ যা একজন মানুষের সৎ প্রয়োজনের চেয়ে বেশি, আর তার ভেতরটা যাচাই করার জন্য যথেষ্টের বেশি।"
          }
        ]
      },
      {
        "h": {
          "en": "When Gladness Turns Proud",
          "bn": "আনন্দ যখন গর্ব হয়"
        },
        "p": [
          {
            "en": "Idh qāla lahu qawmuhu: when his people said to him, do not exult; Allah does not love the exultant. Ibn Kathir and as-Sa'di agree on who spoke: the righteous among his own people, by way of sincere counsel and warning. This is the quiet dignity of the scene. His own community did not envy him or flatter him. They stood beside a man swelling with fortune and told him the plain, uncomfortable truth, that the swelling itself was the danger.",
            "bn": "ইয কালা লাহু কওমুহু: যখন তার সম্প্রদায় তাকে বলল, গর্ব করো না, আল্লাহ গর্বিতদের ভালোবাসেন না। ইবন কাসীর ও সাদী একমত কারা বলেছিল তা নিয়ে: তার নিজের লোকদের ভেতরকার সৎ মানুষেরা, আন্তরিক উপদেশ আর সতর্কতার সুরে। এখানেই দৃশ্যটার শান্ত মর্যাদা। তার নিজের সম্প্রদায় তাকে হিংসাও করল না, তোষামোদও করল না। সৌভাগ্যে ফুলে ওঠা একজন মানুষের পাশে দাঁড়িয়ে তারা সোজা, অস্বস্তিকর সত্যটা বলে দিল, যে ফুলে ওঠাটাই আসল বিপদ।"
          },
          {
            "en": "But is all gladness forbidden? Ma'arif al-Qur'an answers carefully. Faraḥ is blamed in this verse and in 'do not exult in what has come to you' at 57:23, yet it is praised elsewhere: 'that day the believers will rejoice' at 30:4, and 'in that let them rejoice' at 10:58. The line between them is not the feeling but what it rests on. Faraḥ is blameworthy when it swells into arrogance and boasting, when a man treats a gift as his own accomplishment rather than his Lord's favour.",
            "bn": "কিন্তু সব আনন্দই কি নিষিদ্ধ? মাআরিফুল কুরআন সাবধানে জবাব দেয়। এই আয়াতে ফারাহকে দোষ দেওয়া হয়েছে, আবার ৫৭:২৩ আয়াতেও, যেখানে বলা হয়েছে তোমাদের কাছে যা এসেছে তা নিয়ে উল্লসিত হয়ো না। অথচ অন্যত্র তার প্রশংসা আছে: ৩০:৪ আয়াতে 'সেদিন মুমিনরা আনন্দিত হবে', আর ১০:৫৮ আয়াতে 'এতে তারা যেন আনন্দ করে'। এ দুইয়ের সীমারেখা অনুভূতিতে নয়, বরং তা কিসের উপর দাঁড়িয়ে তাতে। ফারাহ দোষের হয় তখনই যখন তা অহংকার আর দম্ভে ফুলে ওঠে, যখন কেউ দানকে রবের অনুগ্রহ না ভেবে নিজের কৃতিত্ব ভাবে।"
          },
          {
            "en": "The commentators gloss the exultant the same way. Ibn 'Abbās, in Ibn Kathir, reads al-fariḥīn as those who rejoice and gloat; Mujāhid reads them as the insolent and reckless who do not thank Allah for what He gave them. So the fault the people named was never joy itself. It was gladness cut loose from gratitude, pleasure that forgets it was a loan. The remedy was not grief but thankfulness, which turns the same gift the other way.",
            "bn": "তাফসীরকারেরা 'গর্বিতদের' একইভাবে ব্যাখ্যা করেন। ইবন আব্বাস, ইবন কাসীরের বরাতে, 'ফারিহীন' বলতে বোঝেন যারা উল্লাস করে আর দম্ভ দেখায়; মুজাহিদ বোঝেন ঔদ্ধত্যপূর্ণ বেপরোয়া লোকদের, যারা আল্লাহ যা দিয়েছেন তার জন্য তাঁর শুকরিয়া আদায় করে না। তাই লোকেরা যে দোষের কথা বলল, তা কখনোই আনন্দ নিজে নয়। তা ছিল কৃতজ্ঞতা থেকে ছিঁড়ে যাওয়া আনন্দ, যে ভোগ ভুলে যায় এ ছিল ধার। সমাধান ছিল শোক নয়, শুকরিয়া, যা সেই একই দানকে উল্টো দিকে ঘুরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Garment Dragged Low",
          "bn": "মাটিতে টানা পোশাক"
        },
        "p": [
          {
            "en": "Two commentators reach for the same hadith here. Al-Baghawi and al-Qurtubi both note a report that one form of Qārūn's baghy was lengthening his robe a hand's span to lord it over his people, and both attach to it the Prophet's ﷺ warning. In Sahih al-Bukhari, Abu Hurayra narrates that the Messenger of Allah ﷺ said, 'Allah will not look, on the Day of Resurrection, at a person who drags his garment out of pride and arrogance.' Its grading is the soundness of al-Bukhari's collection.",
            "bn": "দুজন তাফসীরকার এখানে একই হাদীসের দিকে হাত বাড়ান। বাগাভী ও কুরতুবী দুজনেই একটি বর্ণনার কথা বলেন যে কারূনের বাগীর একটি রূপ ছিল লোকদের উপর বড়াই দেখাতে নিজের জামা এক বিঘত লম্বা করা, আর দুজনেই এর সঙ্গে নবী ﷺ-এর সতর্কবাণী জুড়ে দেন। সহীহ বুখারীতে আবু হুরাইরা বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন, 'কিয়ামতের দিন আল্লাহ সেই ব্যক্তির দিকে তাকাবেন না যে অহংকার আর দম্ভে নিজের কাপড় টেনে চলে।' এর মান বুখারীর সংকলনের বিশুদ্ধতা।"
          },
          {
            "en": "The link the two scholars draw is exact. Qārūn's pride showed in something as small as the hem of a garment worn to look down on others, and the hadith condemns precisely that gesture, the garment trailed to be seen above his proper rank. The sin is not cloth or length; it is the heart that dresses to diminish other people. Read beside the verse, the hadith makes faraḥ concrete: pride is rarely announced, it leaks out in how a person carries what he has.",
            "bn": "দুই আলেমের টানা সংযোগটা হুবহু মেলে। কারূনের অহংকার ফুটে উঠেছিল জামার প্রান্তের মতো সামান্য জিনিসে, যা পরা হতো অন্যদের ছোট করতে, আর হাদীস ঠিক সেই ভঙ্গিকেই দোষ দেয়, নিজের মর্যাদার চেয়ে বড় দেখাতে কাপড় মাটিতে টেনে চলা। দোষটা কাপড় বা তার দৈর্ঘ্যে নয়; দোষটা সেই মনে, যে মন অন্যকে ছোট করতে সাজে। আয়াতের পাশে রাখলে হাদীস ফারাহকে ধরাছোঁয়ার মধ্যে আনে: অহংকার কদাচিৎ ঘোষণা দিয়ে আসে, তা চুঁইয়ে পড়ে মানুষ তার যা আছে তা কীভাবে বহন করে তাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Against Wealth",
          "bn": "সম্পদের বিরুদ্ধে নয়"
        },
        "p": [
          {
            "en": "This verse must not be made to say what it does not. It condemns two things by name, baghy and faraḥ, tyranny and arrogant exultation. It does not condemn wealth. Qārūn's treasure came from Allah's own giving, and the very next verse (28:77) will tell him to seek the Hereafter with what Allah gave him, not to throw it away. As-Sa'di's warning is against letting wealth distract from the Hereafter, against loving it, not against possessing it. The fault was in the man, not in the money.",
            "bn": "এই আয়াতকে এমন কিছু বলানো যাবে না যা সে বলে না। সে নাম ধরে দুটি জিনিসকে দোষ দেয়, বাগী আর ফারাহ, জুলুম আর অহংকারী উল্লাস। সে সম্পদকে দোষ দেয় না। কারূনের ধন এসেছিল আল্লাহরই দান থেকে, আর ঠিক পরের আয়াত (২৮:৭৭) তাকে বলবে আল্লাহ যা দিয়েছেন তা দিয়ে আখিরাত খুঁজতে, ছুড়ে ফেলতে নয়। সাদীর সতর্কবাণী সম্পদকে আখিরাত থেকে মনোযোগ সরাতে দেওয়ার বিরুদ্ধে, তার প্রতি ভালোবাসার বিরুদ্ধে, রাখার বিরুদ্ধে নয়। দোষটা ছিল মানুষটায়, টাকায় নয়।"
          },
          {
            "en": "Nor is this a charter to despise the rich as a class. The verse tells one man's story, a man whose sin was that he oppressed people and gloated, not that he was prosperous. To read it as a verdict on everyone who owns much is to repeat Qārūn's own error in reverse, judging people by their purse. The verse describes what the text describes, and licenses nothing against any living person or community, rich or poor. It hands the reader a mirror, not a stone.",
            "bn": "এটি ধনীদের গোটা শ্রেণি হিসেবে ঘৃণা করারও কোনো সনদ নয়। আয়াত একজন মানুষের কাহিনি বলে, যার দোষ ছিল সে মানুষের উপর জুলুম করেছে আর দম্ভ দেখিয়েছে, ধনী হওয়া নয়। যার অনেক আছে তাদের সবার উপর এটিকে রায় ধরে নেওয়া মানে উল্টো দিক থেকে কারূনেরই ভুলের পুনরাবৃত্তি, মানুষকে তার থলি দিয়ে বিচার করা। আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে, আর কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে, ধনী হোক বা গরিব, কিছুরই অনুমতি দেয় না। এ পাঠকের হাতে আয়না তুলে দেয়, পাথর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Turned Inward",
          "bn": "আয়াত নিজের দিকে ফেরানো"
        },
        "p": [
          {
            "en": "So the verse turns back on whoever reads it. Few of us will ever hold keys that stagger strong men, but everyone is given something, and the test as-Sa'di sketched is the same at every scale. Health, skill, standing, a good name, a little more than the neighbour: each is a kanz of its own, and each can be carried with gratitude or with swagger. The question is not the size of the gift but the posture of whoever holds it.",
            "bn": "তাই আয়াত ফিরে তাকায় যে পড়ছে তারই দিকে। আমাদের খুব কম মানুষই কখনো এমন চাবি হাতে পাবে যা বলবানকেও নোয়ায়, কিন্তু সবাইকেই কিছু-না-কিছু দেওয়া হয়েছে, আর সাদী যে পরীক্ষার কথা এঁকেছেন তা প্রতিটি মাপেই এক। স্বাস্থ্য, দক্ষতা, মর্যাদা, সুনাম, প্রতিবেশীর চেয়ে একটুখানি বেশি—এর প্রতিটিই নিজের মতো এক কানয, আর প্রতিটিই বহন করা যায় কৃতজ্ঞতায়, নয়তো দম্ভে। প্রশ্নটা দানের আকার নয়, বরং যে ধরে আছে তার ভঙ্গি।"
          },
          {
            "en": "And the kindest figures in the scene are the people who spoke up. They risked a rich and powerful kinsman's anger to say three words: do not exult. Most of us have both roles to fill. Sometimes we are the person swelling and need to hear it; sometimes we are the friend who must find the courage and the gentleness to say it to someone we love. Qārūn's tragedy is that he was told, clearly and in time, and would not hear.",
            "bn": "আর দৃশ্যের সবচেয়ে দয়ালু মানুষগুলো তারাই, যারা মুখ খুলেছিল। ধনী আর ক্ষমতাধর এক স্বজনের রাগ গায়ে মেখে তারা তিনটি কথা বলল: গর্ব করো না। আমাদের বেশির ভাগেরই দুটো ভূমিকাই পালন করতে হয়। কখনো আমরাই সেই ফুলে ওঠা মানুষ, যার শোনা দরকার; কখনো আমরাই সেই লোক, যাকে ভালোবাসার কাউকে কথাটা বলার সাহস আর কোমলতা খুঁজে নিতে হয়। কারূনের সবচেয়ে বড় দুর্ভাগ্য এই যে তাকে স্পষ্টভাবে, সময়মতো বলা হয়েছিল, তবু সে শুনল না।"
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
