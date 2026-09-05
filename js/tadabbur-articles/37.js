/**
 * Tadabbur long-form articles — surah 37.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "37:100": {
    "sections": [
      {
        "h": {
          "en": "Asked on the Way Out",
          "bn": "যাত্রার মুহূর্তে চাওয়া"
        },
        "p": [
          {
            "en": "Surah as-Saffat brings Ibrahim (AS) into the surah at 37:83 and moves quickly. He challenges his people over what they worship, they answer by building a furnace for him at 37:97, and 37:98 records that they wanted a plot against him and were made the lowest. Then 37:99 has him say that he is going to his Lord, who will guide him. This supplication is the sentence that follows immediately after that.",
            "bn": "সূরা আস-সাফফাত ইবরাহীম (আঃ)-কে নিয়ে আসে 37:83 থেকে, আর এগোয় দ্রুত। তিনি তাঁর জাতিকে তাদের উপাস্য নিয়ে প্রশ্ন করেন, তারা জবাবে 37:97-এ তাঁর জন্য অগ্নিকুণ্ড বানাতে বলে, আর 37:98 জানায় যে তারা তাঁর বিরুদ্ধে ষড়যন্ত্র চেয়েছিল কিন্তু তাদেরকেই হীনতম করা হলো। এরপর 37:99-এ তিনি বলেন, তিনি তাঁর প্রতিপালকের দিকে চললেন, যিনি তাঁকে পথ দেখাবেন। এই দোয়াটি ঠিক তার পরের বাক্য।"
          },
          {
            "en": "That placement is the context. A man who has just walked away from a people who tried to burn him, and who has said that his Lord will guide him without naming where, asks for one thing before the road begins. He does not ask for safety, for a destination, or for anything to be done about those he is leaving behind. He asks to be given a family, and he settles its quality before he settles anything else.",
            "bn": "এই অবস্থানটিই প্রেক্ষাপট। যে মানুষটি সদ্য এমন এক জাতিকে ছেড়ে এসেছেন যারা তাঁকে পুড়িয়ে মারতে চেয়েছিল, আর যিনি বলেছেন তাঁর প্রতিপালক তাঁকে পথ দেখাবেন — কোথায় তা না জানিয়েই — তিনি পথ শুরু হওয়ার আগে একটি জিনিস চান। তিনি নিরাপত্তা চান না, গন্তব্য চান না, যাদের ছেড়ে আসছেন তাদের ব্যাপারে কিছু করার আবেদনও করেন না। তিনি চান একটি পরিবার, আর জিনিসটি ঠিক করার আগেই তার গুণটি ঠিক করে নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Words, One Imperative",
          "bn": "পাঁচটি শব্দ, একটি আদেশ"
        },
        "p": [
          {
            "en": "The Arabic runs to five words and carries a single imperative: rabbi hab li mina as-salihin. The verb is hab, from wahaba, which names a gift handed over outright with nothing expected back; the same root gives the divine name al-Wahhab, and 3:8 pairs that name with its own hab lana, grant us mercy from Yourself. Ibrahim (AS) is not asking for something owed to him. He is asking for a donation.",
            "bn": "আরবিতে এটি পাঁচটি শব্দ, আর এতে আদেশবাচক ক্রিয়া একটিই: রাব্বি হাব লী মিনাস সালিহীন। ক্রিয়াটি হলো 'হাব', উৎস ওয়াহাবা — যা এমন দান বোঝায় যা কোনো প্রতিদানের আশা ছাড়াই তুলে দেওয়া হয়; এই মূল থেকেই আসে আল্লাহর নাম আল-ওয়াহহাব, আর 3:8-এ সেই নামটির সঙ্গেই আছে 'হাব লানা' — আমাদেরকে তোমার পক্ষ থেকে রহমত দাও। ইবরাহীম (আঃ) তাঁর পাওনা কিছু চাইছেন না। তিনি চাইছেন একটি দান।"
          },
          {
            "en": "The object of the request is missing. The sentence says grant me, and then goes straight on to from among the righteous, without ever naming the thing wanted; the app's English supplies a child inside brackets and its Bengali supplies a son. The preposition min is partitive here, marking one drawn out of a company that already exists. He is not asking for a child who may turn out righteous. He is asking for one issued from among them.",
            "bn": "আবেদনের কর্মপদটি অনুপস্থিত। বাক্যটি বলে 'আমাকে দাও', তারপর সরাসরি চলে যায় 'সৎকর্মশীলদের মধ্য থেকে'-তে; কাঙ্ক্ষিত জিনিসটির নাম কোথাও নেই। অ্যাপের ইংরেজি অনুবাদ বন্ধনীর ভেতরে 'সন্তান' যোগ করে, আর বাংলা অনুবাদ যোগ করে 'পুত্র সন্তান'। এখানে 'মিন' অব্যয়টি অংশবাচক — অর্থাৎ আগে থেকেই বিদ্যমান একটি দল থেকে একজনকে বের করে আনা। তিনি এমন সন্তান চাইছেন না যে হয়তো সৎ হয়ে উঠবে। তিনি চাইছেন তাদেরই ভেতর থেকে আসা একজনকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer and Its Adjective",
          "bn": "উত্তর এবং তার বিশেষণ"
        },
        "p": [
          {
            "en": "37:101 answers at once, and the fa that opens it is the connective of direct sequence: so We gave him good tidings of a ghulam halim, a forbearing boy. He had asked for salah, righteousness, and the announcement came back naming a different quality altogether. Hilm is self-possession under provocation, the capacity to absorb an insult or a long delay without losing command of yourself. It is not the first virtue a father would think to request.",
            "bn": "37:101 সঙ্গে সঙ্গে উত্তর দেয়, আর তার শুরুর 'ফা' হলো সরাসরি ধারাবাহিকতার যোজক: অতঃপর আমি তাকে এক 'গুলামিন হালীম'-এর সুসংবাদ দিলাম, এক ধৈর্যশীল বালকের। তিনি চেয়েছিলেন 'সালাহ' অর্থাৎ সৎকর্মশীলতা, আর ঘোষণা ফিরে এলো সম্পূর্ণ অন্য একটি গুণের নাম নিয়ে। 'হিলম' হলো উস্কানির মুখে আত্মসংযম — অপমান বা দীর্ঘ বিলম্ব হজম করেও নিজের উপর নিয়ন্ত্রণ না হারানোর ক্ষমতা। কোনো পিতার চাওয়ার তালিকায় এটি প্রথম গুণ নয়।"
          },
          {
            "en": "The adjective is not decorative. In the Quran halim is overwhelmingly a name of Allah; among human beings it describes Ibrahim (AS) himself in 9:114 and 11:75, and it appears in 11:87 in the mouths of the people of Shu'ayb (AS). No other child in the Book is described with it. So the trait announced for the son is the trait already recorded of the father, and the good news names a resemblance before the boy exists.",
            "bn": "বিশেষণটি নিছক অলঙ্কার নয়। কুরআনে 'হালীম' প্রধানত আল্লাহরই নাম; মানুষের ক্ষেত্রে এটি স্বয়ং ইবরাহীম (আঃ)-এর বর্ণনা দেয় 9:114 ও 11:75-এ, আর 11:87-এ এটি আসে শুআইব (আঃ)-এর জাতির মুখে। কুরআনে আর কোনো শিশুকে এই শব্দে বর্ণনা করা হয়নি। অর্থাৎ পুত্রের জন্য যে গুণটি ঘোষণা করা হলো, সেটি আগেই পিতার সম্পর্কে লিপিবদ্ধ গুণ; ছেলেটি অস্তিত্বে আসার আগেই সুসংবাদটি একটি সাদৃশ্যের নাম নিয়ে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Passage States",
          "bn": "আয়াতগুলো যা বলে"
        },
        "p": [
          {
            "en": "37:102 says the boy reached the age of sa'y, of walking and working alongside him, and that the father told him he had seen in a dream that he was to sacrifice him, then asked him: so look, what do you see? The child answers, do as you are commanded; you will find me, if Allah wills, of the sabirin. The father had asked for righteousness; the son claims steadfastness, and claims it only with a condition attached.",
            "bn": "37:102 বলে, বালকটি 'সাঈ'-এর বয়সে পৌঁছল, অর্থাৎ পিতার সঙ্গে চলাফেরা ও কাজ করার বয়সে; আর পিতা তাকে জানালেন যে তিনি স্বপ্নে দেখেছেন তিনি তাকে যবেহ করছেন, তারপর জিজ্ঞেস করলেন — এখন দেখো, তোমার অভিমত কী? ছেলেটি উত্তর দেয়: আপনাকে যা আদেশ করা হয়েছে তাই করুন; আল্লাহ চাইলে আপনি আমাকে 'সাবিরীন'-এর অন্তর্ভুক্ত পাবেন। পিতা চেয়েছিলেন সৎকর্মশীলতা; পুত্র দাবি করে ধৈর্য, আর তা-ও কেবল একটি শর্ত জুড়ে দিয়ে।"
          },
          {
            "en": "37:103 says that both of them submitted and that he laid him down upon his forehead. 37:104 records the call, 37:105 tells him he has fulfilled the vision, 37:106 names the whole episode the clear trial, and 37:107 says he was ransomed with a great sacrifice. The passage never names the son, and the reports about which son it was do not agree, so this article keeps to what these verses actually say and no further.",
            "bn": "37:103 বলে, দুজনেই আত্মসমর্পণ করলেন এবং তিনি তাকে কপালের দিকে শুইয়ে দিলেন। 37:104 ডাকটি লিপিবদ্ধ করে, 37:105 তাঁকে বলে যে তিনি স্বপ্নটি সত্যে পরিণত করেছেন, 37:106 গোটা ঘটনাটিকে সুস্পষ্ট পরীক্ষা বলে নাম দেয়, আর 37:107 বলে যে তাকে এক মহান কুরবানীর বিনিময়ে ছাড়িয়ে নেওয়া হলো। অংশটি পুত্রের নাম কোথাও বলে না, আর তিনি কোন পুত্র ছিলেন সে বিষয়ে বর্ণনাগুলো একমত নয়; তাই এই আলোচনা আয়াতগুলো যা বলে তার বাইরে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Phrase Returns",
          "bn": "চাওয়ার শব্দ ফিরে আসে"
        },
        "p": [
          {
            "en": "37:112 gives Ibrahim (AS) good tidings of Ishaq (AS), a prophet mina as-salihin, the exact phrase of the petition handed back inside the announcement. In between, 37:108-109 record what was left for him among later generations: peace upon Ibrahim. The prayer of a man leaving everything behind is answered with a son, with a further announcement, and with a sentence that people who never met him would go on saying.",
            "bn": "37:112 ইবরাহীম (আঃ)-কে ইসহাক (আঃ)-এর সুসংবাদ দেয় — একজন নবী, 'মিনাস সালিহীন'; দোয়ার সেই শব্দগুচ্ছটিই ঘোষণার ভেতরে ফিরিয়ে দেওয়া হলো। মাঝখানে 37:108-109 লিপিবদ্ধ করে, পরবর্তীদের মাঝে তাঁর জন্য কী রেখে দেওয়া হলো: ইবরাহীমের উপর শান্তি। সবকিছু পেছনে ফেলে আসা এক মানুষের দোয়ার উত্তর আসে একটি পুত্র দিয়ে, আরও একটি ঘোষণা দিয়ে, আর এমন একটি বাক্য দিয়ে যা তাঁকে কখনো না-দেখা মানুষেরাও বলে যাবে।"
          },
          {
            "en": "37:113 then blesses him and Ishaq (AS), and adds in the same verse that among their descendants is the doer of good and one clearly unjust to himself. An answered prayer for a righteous child is not a settlement covering the line. That is why the asking has to continue, and why the shape of this du'a is worth copying: name the quality and not only the thing, and keep asking for it after it has already been granted once.",
            "bn": "এরপর 37:113 তাঁকে ও ইসহাক (আঃ)-কে বরকত দেয়, আর একই আয়াতে যোগ করে যে তাঁদের বংশধরদের মধ্যে আছে সৎকর্মশীল, আর আছে নিজের প্রতি সুস্পষ্ট যুলুমকারীও। সৎ সন্তানের জন্য কবুল হওয়া একটি দোয়া গোটা বংশধারার জন্য মীমাংসা নয়। এ কারণেই চাওয়া চালিয়ে যেতে হয়, আর এ কারণেই এই দোয়ার গড়নটি অনুকরণযোগ্য: কেবল জিনিসটির নয়, গুণটিরও নাম নিন — এবং একবার পাওয়ার পরও চাইতে থাকুন।"
          }
        ]
      }
    ]
  }
});
