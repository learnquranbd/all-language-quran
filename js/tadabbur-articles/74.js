/**
 * Tadabbur long-form articles — surah 74.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "74:1": {
    "sections": [
      {
        "h": {
          "en": "The Garment Inside the Name",
          "bn": "নামের ভেতরেই চাদর"
        },
        "p": [
          {
            "en": "Ya ayyuha al-muddaththir: two Arabic words, a call and a description. Ma'arif al-Qur'an derives al-muddaththir from dithar, a thick, warm over-garment such as a cloak or mantle, which a person wears in winter over his other clothes against the cold. Al-Qurtubi explains the form: it means one who has wrapped himself in his clothes, covered himself with them and slept. Its root shape is al-mutadaththir, and the ta merged into the dal because the two letters are close. He adds that Ubayy recited it in that original form.",
            "bn": "ইয়া আইয়ুহাল মুদ্দাসসির: আরবিতে দুটি শব্দ, একটি ডাক আর একটি বিশেষণ। মাআরিফুল কুরআন শব্দটির মূল খুঁজে পায় দিসার-এ। দিসার হলো মোটা, গরম উপরের পোশাক, চাদর বা আলখাল্লার মতো, শীতে ঠান্ডা ঠেকাতে মানুষ যা অন্য কাপড়ের উপরে জড়ায়। কুরতুবী শব্দের গড়নটা বুঝিয়ে দেন। মুদ্দাসসির সে, যে কাপড়ে নিজেকে জড়িয়েছে, ঢেকে নিয়েছে, তারপর শুয়ে পড়েছে। আসল রূপ ছিল মুতাদাসসির। তা আর দাল উচ্চারণে কাছাকাছি বলে তা দালের ভেতরে মিশে গেছে। কুরতুবী আরও জানান, উবাই শব্দটি সেই আসল রূপেই পড়তেন।"
          },
          {
            "en": "At-Tabari's own gloss runs the same way: O you who wrap yourself in your clothes when you sleep. He records that the Prophet ﷺ was addressed so while wrapped in a qatifa, a thick-piled blanket, and cites Ibrahim saying of this verse: he was wrapped in a qatifa. The Muyassar, which explains 74:1 to 74:7 as one passage, renders the call as: O you who are covered with your clothes, rise from your bed. On its surface that is the whole verse: a man, a covering, and a voice that names him by it.",
            "bn": "তাবারীর নিজের ব্যাখ্যাও একই দিকে যায়: হে সেই ব্যক্তি, যে ঘুমানোর সময় কাপড়ে নিজেকে জড়িয়ে নেয়। তিনি উল্লেখ করেন, নবী ﷺ-কে এই সম্বোধন করা হয়েছিল যখন তিনি একটি কাতীফা, মানে পুরু রোঁয়াওয়ালা কম্বলে জড়ানো ছিলেন। এ আয়াত প্রসঙ্গে ইবরাহীমের কথাও তিনি আনেন: তিনি কাতীফায় জড়ানো ছিলেন। মুয়াসসার ৭৪:১ থেকে ৭৪:৭ পর্যন্ত এক সঙ্গে ব্যাখ্যা করে, আর ডাকটিকে এভাবে বলে: হে কাপড়ে ঢাকা মানুষ, বিছানা ছেড়ে ওঠো। বাইরে থেকে দেখলে আয়াতে এটুকুই আছে। একজন মানুষ, একটি আবরণ, আর একটি কণ্ঠ, যা তাঁকে সেই আবরণের নামেই ডাকছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sleeper, Cloak, or Burden",
          "bn": "ঘুমন্ত, চাদরে ঢাকা, নাকি ভারবাহী"
        },
        "p": [
          {
            "en": "At-Tabari states plainly that the people of interpretation differed over what the address means. Some took it at face value. He cites Ibn Abbas, through his chain, glossing it as: O sleeper. He cites Qatada: the one wrapped in his clothes. The two glosses are close, and both stay with the physical picture of a man lying down, covered, whether at rest or in retreat. This is also the line at-Tabari himself takes in his opening gloss, before he lists the views.",
            "bn": "তাবারী সোজাসুজি বলেন, এই সম্বোধনের অর্থ নিয়ে ব্যাখ্যাকারদের মধ্যে মতভেদ আছে। কেউ কেউ শব্দটিকে বাহ্যিক অর্থেই নিয়েছেন। নিজস্ব সনদে তিনি ইবন আব্বাসের ব্যাখ্যা আনেন: হে ঘুমন্ত ব্যক্তি। কাতাদার ব্যাখ্যা আনেন: যে নিজের কাপড়ে জড়িয়ে আছে। দুটি ব্যাখ্যা কাছাকাছি। দুটিই চোখে দেখা ছবিটার মধ্যে থাকে: একজন মানুষ শুয়ে আছেন, গায়ে আবরণ, তা বিশ্রামেই হোক বা গুটিয়ে থাকাতেই হোক। মতগুলো সাজানোর আগে তাবারী নিজের প্রথম ব্যাখ্যাতেও এই পথই ধরেন।"
          },
          {
            "en": "Others, at-Tabari continues, read it as: O you who are wrapped in prophethood and its burdens. For this he cites Ikrima, through Dawud, who said: you have been wrapped in this matter, so rise with it. On this reading the garment is the mission itself, laid over him like a mantle, and the command that follows is to carry it. Al-Qurtubi reports the same reading from Ikrima in nearly the same words: the one wrapped in prophethood and its weights.",
            "bn": "তাবারী আরও বলেন, অন্যরা অর্থ করেছেন এভাবে: হে নবুওয়াত আর তার ভারে জড়ানো মানুষ। এর পক্ষে তিনি দাউদের সূত্রে ইকরিমার কথা আনেন: এই দায়িত্বে তোমাকে জড়িয়ে দেওয়া হয়েছে, এখন তা নিয়ে ওঠো। এ ব্যাখ্যায় চাদরটা আসলে রিসালাতের দায়িত্ব, যা আলখাল্লার মতো তাঁর গায়ে চাপানো হয়েছে। পরের আদেশ তখন সেই দায়িত্ব বহন করার আদেশ। কুরতুবীও প্রায় একই ভাষায় ইকরিমা থেকে এ ব্যাখ্যা বর্ণনা করেন: নবুওয়াত আর তার বোঝায় জড়ানো মানুষ।"
          },
          {
            "en": "Al-Qurtubi then records an objection from Ibn al-Arabi: this is a far-fetched figure of speech, because he had not yet become a prophet. At-Tabari lays the two views side by side and, in his discussion of this verse, does not rule between them. So the readings stand as they were given. The literal cloak is held by Ibn Abbas and Qatada as at-Tabari reports them; the cloak of the mission is held by Ikrima, with Ibn al-Arabi's objection on record against it.",
            "bn": "এরপর কুরতুবী ইবনুল আরাবীর একটি আপত্তি উল্লেখ করেন। তাঁর মতে এটি দূরের রূপক, কারণ তখনো তিনি নবী হননি। তাবারী দুটি মত পাশাপাশি রাখেন। এ আয়াতের আলোচনায় তিনি কোনোটির পক্ষে রায় দেননি। তাই ব্যাখ্যাগুলো যেমন এসেছে তেমনই থাকুক। তাবারীর বর্ণনায় ইবন আব্বাস আর কাতাদা বাহ্যিক চাদরের পক্ষে। ইকরিমা রিসালাতের চাদরের পক্ষে, আর তাঁর বিপক্ষে ইবনুল আরাবীর আপত্তিও লিপিবদ্ধ আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Voice From the Sky",
          "bn": "আকাশ থেকে ভেসে আসা ডাক"
        },
        "p": [
          {
            "en": "The occasion comes from the Prophet ﷺ himself, through Jabir bin Abdullah. Al-Bukhari records (Sahih al-Bukhari 4926) that Jabir heard Allah's Messenger ﷺ describing the period of pause of the Divine Inspiration, and in his description he said: \"While I was walking I heard a voice from the sky. I looked up towards the sky, and behold! I saw the same Angel who came to me in the Cave of Hira', sitting on a chair between the sky and the earth. I was so terrified by him that I fell down on the ground.",
            "bn": "আয়াতের প্রেক্ষাপট আমরা পাই নবী ﷺ-এর নিজের মুখে, জাবির ইবন আবদুল্লাহ (রাঃ)-এর সূত্রে। বুখারী বর্ণনা করেন (সহীহ বুখারী ৪৯২৬), জাবির (রাঃ) শুনেছেন, রাসূলুল্লাহ ﷺ ওহি বন্ধ থাকার সময়ের কথা বলছিলেন। সেই বর্ণনায় তিনি বলেন: \"আমি হাঁটছিলাম, হঠাৎ আকাশ থেকে একটি আওয়াজ শুনলাম। আকাশের দিকে চোখ তুলে দেখি, হেরা গুহায় যে ফেরেশতা আমার কাছে এসেছিলেন, তিনিই আকাশ আর পৃথিবীর মাঝখানে একটি কুরসিতে বসে আছেন। তাঁকে দেখে আমি এত ভয় পেলাম যে মাটিতে পড়ে গেলাম।"
          },
          {
            "en": "Then I went to my wife and said, 'Wrap me in garments! Wrap me in garments!' They wrapped me, and then Allah revealed: 'O you, (Muhammad) wrapped-up! Arise and warn...and desert the idols.' (74:1 to 74:5) Abu Salama said....Rujz means idols.\" After that, the Divine Inspiration started coming more frequently and regularly. Al-Bukhari placed the report in his Sahih. Ibn Kathir notes that al-Bukhari and Muslim both recorded it by way of az-Zuhri.",
            "bn": "তারপর ঘরে এসে বললাম, আমাকে কাপড়ে জড়িয়ে দাও, আমাকে কাপড়ে জড়িয়ে দাও। তাঁরা আমাকে জড়িয়ে দিলেন। তখন আল্লাহ নাজিল করলেন: 'হে চাদরে জড়ানো ব্যক্তি, ওঠো, সতর্ক করো... আর মূর্তি বর্জন করো।' (৭৪:১ থেকে ৭৪:৫)\" আবু সালামা বলেন, রুজয মানে মূর্তি। এরপর ওহি ঘন ঘন আর নিয়মিত আসতে লাগল। বুখারী বর্ণনাটি তাঁর সহীহ গ্রন্থে রেখেছেন। ইবন কাসীর জানান, বুখারী ও মুসলিম দুজনেই যুহরীর সূত্রে এটি বর্ণনা করেছেন।"
          },
          {
            "en": "Ibn Kathir calls this context al-mahfuz, the preserved one. Notice how closely the verse fits the moment. The Prophet ﷺ asked to be wrapped, and the first word of the revelation that came to him named him as the one wrapped. Abu Salama's gloss on rujz belongs to 74:5, and the closing line belongs to what came after: revelation, in the Arabic wording, grew warm and came in succession. The verse is the hinge between a silence and that steady flow.",
            "bn": "ইবন কাসীর এই প্রেক্ষাপটকে বলেন মাহফুয, মানে সংরক্ষিত ও নির্ভরযোগ্য বর্ণনা। মুহূর্তটার সঙ্গে আয়াত কতটা মিলে যায়, খেয়াল করুন। নবী ﷺ চেয়েছিলেন তাঁকে জড়িয়ে দেওয়া হোক। আর তখন যে ওহি এল, তার প্রথম শব্দই তাঁকে ডাকল জড়ানো মানুষ বলে। রুজয নিয়ে আবু সালামার ব্যাখ্যা ৭৪:৫ আয়াতের বিষয়। শেষ বাক্যটি পরের সময়ের কথা। আরবি শব্দে ওহি তখন উষ্ণ হয়ে ওঠে, একটার পর একটা আসতে থাকে। এ আয়াত তাই এক নীরবতা আর সেই অবিরাম ধারার মাঝখানের সেতু।"
          }
        ]
      },
      {
        "h": {
          "en": "Yahya's Question, Jabir's Answer",
          "bn": "ইয়াহইয়ার প্রশ্ন, জাবিরের জবাব"
        },
        "p": [
          {
            "en": "This verse also sits inside a well-known disagreement. Al-Bukhari records (4922) that Yahya bin Abi Kathir asked Abu Salama bin Abdur-Rahman about the first sura revealed of the Qur'an, and he answered: O you, wrapped-up. Yahya said: they say it was Read, in the Name of your Lord who created. Abu Salama replied that he had put the same question to Jabir bin Abdullah, and Jabir had said: I will not tell you except what Allah's Messenger ﷺ told us.",
            "bn": "এ আয়াত একটি পরিচিত মতভেদের কেন্দ্রেও আছে। বুখারী বর্ণনা করেন (৪৯২২), ইয়াহইয়া ইবন আবী কাসীর আবু সালামা ইবন আবদুর রহমানকে জিজ্ঞেস করেছিলেন, কুরআনের কোন সূরা সবার আগে নাজিল হয়েছে। তিনি বললেন: ইয়া আইয়ুহাল মুদ্দাসসির। ইয়াহইয়া বললেন, লোকে তো বলে ইকরা বিসমি রব্বিকাল্লাযী খালাক। আবু সালামা জানালেন, তিনিও ঠিক এই প্রশ্ন জাবির ইবন আবদুল্লাহ (রাঃ)-কে করেছিলেন। জাবির (রাঃ) বলেছিলেন: রাসূলুল্লাহ ﷺ আমাদের যা বলেছেন, তার বাইরে আমি তোমাকে কিছুই বলব না।"
          },
          {
            "en": "Jabir then gives the Prophet's account of coming down from Hira, hearing a call, looking all around and seeing nothing, then looking up. So Jabir's position is that al-Muddaththir came first. Ibn Kathir names the other side: the majority, al-jumhur, differed from Jabir and held that the first of the Qur'an revealed was 96:1. At-Tabari carries az-Zuhri's statement to the same effect. Ma'arif al-Qur'an reports that some scholars counted this surah first, while the well-known authentic narrations put the opening of Iqra' first.",
            "bn": "এরপর জাবির (রাঃ) নবী ﷺ-এর নিজের বর্ণনা শোনান। হেরা থেকে নেমে আসা, একটি ডাক শোনা, চারদিকে তাকিয়ে কিছু না দেখা, তারপর উপরে তাকানো। জাবির (রাঃ)-এর মত তাহলে এই: মুদ্দাসসিরই প্রথম। অন্য পক্ষের কথা বলেন ইবন কাসীর। জুমহুর, মানে অধিকাংশ আলেম, জাবিরের সঙ্গে একমত হননি। তাঁদের মতে কুরআনের প্রথম নাজিল হওয়া আয়াত ৯৬:১। তাবারী একই কথা যুহরীর মুখে বর্ণনা করেন। মাআরিফুল কুরআন জানায়, কিছু আলেম এ সূরাকে প্রথম ধরেছেন। তবে প্রসিদ্ধ সহীহ বর্ণনাগুলো ইকরার শুরুর আয়াতগুলোকেই প্রথমে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "First After the Silence",
          "bn": "নীরবতার পরে প্রথম"
        },
        "p": [
          {
            "en": "Ibn Kathir finds the reconciliation inside Jabir's own report. The preserved wording, he argues, requires that revelation had come before, because the Prophet ﷺ speaks of the angel who came to me at Hira. That angel was Jibril, who had brought 96:1 to 96:5; after that first occasion a period passed, and then the angel came down again. The way to join the reports, Ibn Kathir says, is that the first thing revealed after this pause in revelation was this surah.",
            "bn": "ইবন কাসীর মীমাংসাটা খুঁজে পান জাবির (রাঃ)-এর বর্ণনার ভেতরেই। তাঁর যুক্তি হলো, সংরক্ষিত বর্ণনার ভাষাই বলে দেয় যে এর আগেও ওহি এসেছে। কারণ নবী ﷺ বলছেন, হেরায় যে ফেরেশতা আমার কাছে এসেছিলেন। সেই ফেরেশতা জিবরীল (আঃ), যিনি ৯৬:১ থেকে ৯৬:৫ পর্যন্ত আয়াত নিয়ে এসেছিলেন। প্রথম সেই ঘটনার পর কিছু সময় কেটে যায়, তারপর ফেরেশতা আবার নেমে আসেন। ইবন কাসীর বলেন, বর্ণনাগুলো মেলানোর পথ এই: ওহির এই বিরতির পর প্রথম যা নাজিল হয়েছে, তা এই সূরা।"
          },
          {
            "en": "He supports it with Imam Ahmad's chain from Jabir, in which the Prophet ﷺ begins: then revelation paused for me for a while. Ma'arif al-Qur'an gives the interval its name, fatrat al-wahy, a time after the first verses of Iqra' when revelation stopped, and places this incident towards its end. On this joining, Jabir's report is read as the first word after the silence and the majority's view as the first word of all, though Jabir himself, as Abu Salama relates, named al-Muddaththir first outright. The night in the cave itself is told at 96:1.",
            "bn": "এর সমর্থনে তিনি জাবির (রাঃ) থেকে ইমাম আহমাদের সনদে বর্ণনা আনেন, যেখানে নবী ﷺ শুরু করেন এভাবে: তারপর কিছুদিনের জন্য আমার কাছে ওহি আসা বন্ধ থাকল। মাআরিফুল কুরআন এই বিরতির নাম দেয় ফাতরাতুল ওহি। ইকরার প্রথম আয়াতগুলোর পর কিছুকাল ওহি থেমে ছিল, আর এ ঘটনা ঘটে সেই সময়ের শেষ দিকে। এভাবে মেলালে জাবিরের বর্ণনা বোঝায় নীরবতার পরের প্রথম বাণী, আর জুমহুরের মত বোঝায় সর্বপ্রথম বাণী। তবে আবু সালামার বর্ণনায় জাবির (রাঃ) নিজে কোনো শর্ত ছাড়াই মুদ্দাসসিরকে প্রথম বলেছিলেন। গুহার সেই রাতের কাহিনি আছে ৯৬:১ আয়াতের আলোচনায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Other Reports of the Occasion",
          "bn": "প্রেক্ষাপট নিয়ে অন্য বর্ণনা"
        },
        "p": [
          {
            "en": "Ibn Kathir also brings a report from at-Tabarani, from Ibn Abbas. Al-Walid bin al-Mughira prepared food for Quraysh and asked what they said about this man. Some said sorcerer and others denied it; some said soothsayer, some poet, and they settled on magic handed down. When that reached the Prophet ﷺ he grieved, covered his head and wrapped himself, and 74:1 to 74:7 came down. Al-Qurtubi relays similar accounts introduced with it is said, among them one from Abu Nasr al-Qushayri that the Makkans' charge of sorcery grieved him.",
            "bn": "ইবন কাসীর তাবারানী থেকে ইবন আব্বাসের একটি বর্ণনাও আনেন। ওয়ালীদ ইবনুল মুগীরা কুরাইশদের জন্য খাবারের আয়োজন করে জিজ্ঞেস করল, এই লোকটি সম্পর্কে তোমরা কী বলো? কেউ বলল জাদুকর, কেউ তা মানল না। কেউ বলল গণক, কেউ কবি। শেষে সবাই একমত হলো, এ বংশপরম্পরায় চলে আসা জাদু। খবরটা নবী ﷺ-এর কাছে পৌঁছালে তিনি দুঃখ পেলেন, মাথা ঢেকে চাদরে জড়িয়ে নিলেন। তখন ৭৪:১ থেকে ৭৪:৭ পর্যন্ত আয়াত নাজিল হলো। কুরতুবীও 'বলা হয়' কথাটি জুড়ে এমন কিছু বর্ণনা আনেন। তার একটি আবু নাসর কুশাইরীর: মক্কার কাফিররা তাঁকে জাদুকর বলায় তিনি কষ্ট পেয়েছিলেন।"
          },
          {
            "en": "Al-Qurtubi also cites Ibn al-Arabi rejecting outright a report that an incident with Uqba bin Rabi'a sent the Prophet ﷺ home troubled to lie down: this, Ibn al-Arabi says, is false. He records Muqatil's view that most of this surah concerns al-Walid bin al-Mughira. Neither Ibn Kathir nor al-Qurtubi grades the at-Tabarani report in his commentary here, and none of these accounts is the one the two Sahih collections carry. This article therefore takes Jabir's account as the occasion and leaves the others as reports.",
            "bn": "কুরতুবী ইবনুল আরাবীর একটি সরাসরি প্রত্যাখ্যানও উল্লেখ করেন। এক বর্ণনায় আছে, উকবা ইবন রাবীআর সঙ্গে কোনো ঘটনায় নবী ﷺ মন খারাপ করে ঘরে ফিরে শুয়ে পড়েছিলেন। ইবনুল আরাবী বলেন, এ কথা বাতিল। কুরতুবী মুকাতিলের মতও আনেন: এ সূরার বেশির ভাগ অংশ ওয়ালীদ ইবনুল মুগীরাকে নিয়ে। এখানকার আলোচনায় ইবন কাসীর বা কুরতুবী কেউই তাবারানীর বর্ণনার মান নির্ধারণ করেননি। আর এসব বর্ণনার কোনোটিই দুই সহীহ গ্রন্থের বর্ণনা নয়। তাই এ প্রবন্ধ জাবির (রাঃ)-এর বর্ণনাকেই প্রেক্ষাপট হিসেবে নেয়, বাকিগুলোকে কেবল বর্ণনা হিসেবে রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Terror Met With Tenderness",
          "bn": "ভয়ের জবাবে কোমলতা"
        },
        "p": [
          {
            "en": "The reports do not hide the fear, and neither should we. Al-Bukhari's wording has him so terrified that he fell to the ground. At-Tabari's text uses the verb ju'ithtu, which its footnote explains as: I was alarmed and afraid. Al-Qurtubi's version from Muslim says a severe trembling took hold of him. This is how a human being meets the sight of an angel filling the space between sky and earth, and the narrators carry it as part of the account of revelation, never as a lapse.",
            "bn": "বর্ণনাগুলো ভয়ের কথা লুকায় না, আমাদেরও লুকানোর কিছু নেই। বুখারীর ভাষায় তিনি এত ভয় পেয়েছিলেন যে মাটিতে পড়ে যান। তাবারীর বর্ণনায় ক্রিয়াটি জুয়িসতু, আর তার টীকা অর্থ করে: আমি আতঙ্কিত হলাম, ভয় পেলাম। মুসলিম থেকে কুরতুবীর উদ্ধৃত বর্ণনায় আছে, প্রচণ্ড এক কাঁপুনি তাঁকে পেয়ে বসেছিল। আকাশ আর পৃথিবীর মাঝখান জুড়ে বসা ফেরেশতাকে দেখলে মানুষ এভাবেই সাড়া দেয়। বর্ণনাকারীরা একে ওহির কাহিনিরই অংশ হিসেবে বলেছেন, কোনো দুর্বলতা হিসেবে নয়।"
          },
          {
            "en": "And the address that answers the fear is gentle. Al-Qurtubi calls it mulatafa, kindness in speech from the Generous One to the beloved: He called him by his state and described him by his condition, and did not say O Muhammad or O so-and-so, so that he would feel the softness and kindness of his Lord, as explained under al-Muzzammil. He compares the Prophet's own words to Ali, who had fallen asleep in the mosque with his cloak slipped off and dust on him: qum Aba Turab, rise, father of dust, which he cites from Muslim.",
            "bn": "আর ভয়ের জবাবে যে সম্বোধন আসে, তা কোমল। কুরতুবী একে বলেন মুলাতাফা, মানে দয়াময়ের পক্ষ থেকে প্রিয়জনের প্রতি নরম ভাষা। আল্লাহ তাঁকে ডেকেছেন তাঁর অবস্থা ধরে, তাঁর হাল দিয়ে চিনিয়েছেন। হে মুহাম্মাদ বা হে অমুক বলেননি, যাতে তিনি রবের কোমলতা আর মমতা অনুভব করতে পারেন। মুযযাম্মিলের আলোচনাতেও কুরতুবী একই কথা বলেছেন। তিনি তুলনা টানেন আলী (রাঃ)-কে বলা নবী ﷺ-এর কথার সঙ্গে। আলী (রাঃ) মসজিদে ঘুমিয়ে পড়েছিলেন, চাদর সরে গিয়ে গায়ে ধুলো লেগেছিল। নবী ﷺ বললেন, কুম আবা তুরাব, ওঠো হে ধুলোর বাবা। কুরতুবী এটি মুসলিম থেকে উল্লেখ করেন।"
          },
          {
            "en": "Al-Qurtubi adds a second comparison: the Prophet's words to Hudhayfa on the night of the Trench, qum ya Nauman, rise, sleeper. In each case a name is drawn from the person's state and is followed by the word rise. That is the shape of this verse and the next. The name comes from the covering, and 74:2 brings the command to stand and warn. The commands of 74:2 to 74:7 have their own verses; this one holds only the turn, as the wrapped one is called and the call to rise comes after.",
            "bn": "কুরতুবী আরেকটি তুলনা যোগ করেন। খন্দকের রাতে নবী ﷺ হুযাইফা (রাঃ)-কে বলেছিলেন, কুম ইয়া নাওমান, ওঠো হে ঘুমকাতুরে। প্রতিবারই মানুষটির অবস্থা থেকে একটি নাম, আর তার পরেই ওঠার ডাক। এ আয়াত আর পরের আয়াতের গড়নও তাই। নাম আসে চাদর থেকে, আর ৭৪:২ নিয়ে আসে উঠে দাঁড়িয়ে সতর্ক করার আদেশ। ৭৪:২ থেকে ৭৪:৭ পর্যন্ত আদেশগুলোর নিজস্ব আয়াত আছে। এ আয়াতে আছে কেবল মোড় ঘোরার মুহূর্তটুকু: চাদরে জড়ানো মানুষটিকে ডাকা হয়, ওঠার আদেশ আসে তার পরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Calls to the Wrapped One",
          "bn": "জড়ানো মানুষকে দুটি ডাক"
        },
        "p": [
          {
            "en": "As-Sa'di says al-muzzammil, the address of 73:1, and al-muddaththir carry one meaning, and that the earlier surah had commanded the Prophet's own acts of worship and patience under his people's harm. Ma'arif al-Qur'an calls the two near-synonyms, reports from Ruh al-Ma'ani a narration from Jabir bin Zayd that al-Muddaththir came after al-Muzzammil, and judges it likely that both came down around the same incident, while saying it is not clear which came first. It draws one difference: al-Muzzammil's opening concerns personal purification, al-Muddaththir's concerns preaching and the reform of people.",
            "bn": "সা'দী বলেন, ৭৩:১ আয়াতের সম্বোধন মুযযাম্মিল আর এখানকার মুদ্দাসসিরের অর্থ একই। তিনি মনে করিয়ে দেন, আগের সূরায় নবী ﷺ-কে তাঁর নিজের ইবাদত আর কওমের দেওয়া কষ্টে সবরের আদেশ দেওয়া হয়েছিল। মাআরিফুল কুরআন দুটিকে প্রায় সমার্থক বলে। রূহুল মাআনী থেকে জাবির ইবন যায়দের একটি বর্ণনা উল্লেখ করে, যাতে আছে মুদ্দাসসির নাজিল হয়েছে মুযযাম্মিলের পরে। তার মতে খুব সম্ভব দুটিই একই ঘটনার আশপাশে নাজিল হয়েছে, তবে কোনটি আগে তা স্পষ্ট নয়। পার্থক্য একটাই দেখায়: মুযযাম্মিলের শুরুর আদেশ নিজের আত্মশুদ্ধি নিয়ে, আর মুদ্দাসসিরের আদেশ দাওয়াত আর মানুষের সংশোধন নিয়ে।"
          },
          {
            "en": "The verse itself is only two words, and it gives no command yet. It holds a man for one moment between the covering and the rising, and the reader is not asked to judge him there. No reader today receives revelation, and no one is called as he was. Still, the order of the scene is worth keeping: fear is not mocked, retreat is met with a name spoken gently, and only then comes the call to stand. Whoever has been shaken can hear that order as a mercy.",
            "bn": "আয়াতটি মাত্র দুই শব্দের, এখনো কোনো আদেশ দেয় না। একজন মানুষকে এক মুহূর্তের জন্য ধরে রাখে চাদর আর উঠে দাঁড়ানোর মাঝখানে। সেখানে তাঁকে বিচার করার দায়িত্ব পাঠকের নয়। আজ কারও কাছে ওহি আসে না, কাউকে তাঁর মতো করে ডাকাও হয় না। তবু দৃশ্যটার ক্রম মনে রাখার মতো। ভয়কে ঠাট্টা করা হয় না। গুটিয়ে থাকা মানুষকে নরম সুরে নাম ধরে ডাকা হয়। তারপরই আসে উঠে দাঁড়ানোর ডাক। যে কখনো কেঁপে উঠেছে, সে এই ক্রমটাকে রহমত হিসেবেই শুনতে পারে।"
          }
        ]
      }
    ]
  },
  "74:38": {
    "sections": [
      {
        "h": {
          "en": "Where the Sentence Falls",
          "bn": "বাক্যটি কোথায় পড়ে"
        },
        "p": [
          {
            "en": "The verse arrives at a hinge in Surah al-Muddaththir. Oaths are sworn by the moon, by the night as it departs and by the morning as it brightens, and then 74:35 says that the Fire is one of the greatest of matters. 74:36 calls it a warning to humanity, and 74:37 narrows that to whoever among you wills to go forward or to hang back. That is a sentence about choice. Ours states what the choice costs, in five Arabic words.",
            "bn": "আয়াতটি এসে দাঁড়ায় সূরা আল-মুদ্দাসসিরের এক সন্ধিক্ষণে। শপথ করা হয় চাঁদের, বিদায় নেওয়া রাতের এবং উজ্জ্বল হয়ে ওঠা প্রভাতের; এরপর 74:35 বলে, সেই আগুন মহা বিষয়গুলোর একটি। 74:36 একে বলে মানুষের জন্য সতর্কবাণী, আর 74:37 তা সংকুচিত করে তার দিকে — তোমাদের মধ্যে যে এগিয়ে যেতে চায় বা পিছিয়ে থাকতে চায়। ওটি পছন্দ সম্পর্কে একটি বাক্য। আমাদের আয়াতটি পাঁচটি আরবি শব্দে বলে দেয়, সেই পছন্দের মূল্য কী।"
          }
        ]
      },
      {
        "h": {
          "en": "A Pledge Held in Hand",
          "bn": "হাতে ধরা বন্ধক"
        },
        "p": [
          {
            "en": "Rahinah comes from a root that occurs three times in the whole Quran, and one of the other two fixes its meaning. 2:283 is the commercial occurrence: a traveller who cannot find a scribe to write down the contract may instead give a pledge taken in hand. That is a real object, deposited by a debtor, held by the creditor, and released only when the debt is discharged. This verse takes that word and applies it to the person.",
            "bn": "'রাহীনাহ' এসেছে এমন এক মূলধাতু থেকে যা গোটা কুরআনে তিনবার এসেছে, আর অন্য দুটির একটি এর অর্থ পাকা করে দেয়। 2:283 হলো বাণিজ্যিক প্রয়োগ: সফরে থাকা যে ব্যক্তি চুক্তি লিখে দেওয়ার মতো কোনো লেখক পায় না, সে বদলে হাতে-নেওয়া বন্ধক দিতে পারে। সেটি একটি বাস্তব বস্তু — ঋণগ্রহীতা জমা রাখে, পাওনাদার ধরে রাখে, আর ঋণ শোধ হলেই কেবল তা ছাড়া পায়। এই আয়াত সেই শব্দটিই নিয়ে এসে মানুষের উপর প্রয়োগ করে।"
          },
          {
            "en": "That is a harder image than it first sounds. The pledge in a loan is something other than the borrower — a ring, a garment, a beast. Here the thing deposited and the borrower are the same. A person is not said to owe something; a person is said to be the security, held against an account that his own hands are still writing. Nothing is being seized from him. He is what is being held.",
            "bn": "চিত্রটি প্রথম শোনায় যতটা মনে হয়, তার চেয়ে কঠিন। ঋণের বন্ধক সাধারণত ঋণগ্রহীতার থেকে আলাদা কিছু — একটি আংটি, একটি কাপড়, একটি পশু। এখানে যা জমা রাখা হচ্ছে আর যে ঋণ নিচ্ছে, দুটি একই। বলা হচ্ছে না যে মানুষ কিছু ঋণী; বলা হচ্ছে, মানুষ নিজেই জামানত — এমন এক হিসাবের বিপরীতে ধরে রাখা, যে হিসাব তার নিজের হাতই এখনো লিখে চলেছে। তার কাছ থেকে কিছু কেড়ে নেওয়া হচ্ছে না। সে নিজেই সেই ধরে রাখা জিনিস।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word That Differs at 52:21",
          "bn": "52:21-এ যে শব্দটি আলাদা"
        },
        "p": [
          {
            "en": "52:21 makes almost the same statement with three words changed. There it reads kullu imri'in bima kasaba rahin; here it reads kullu nafsin bima kasabat rahinah. The subject moves from imru', a man, to nafs, a soul, and the predicate takes a feminine ending, rahinah rather than rahin, because nafs is feminine in Arabic. The verb of earning follows the same agreement: kasaba there, kasabat here. The rule is one rule, stated twice.",
            "bn": "52:21 প্রায় একই কথা বলে, তবে তিনটি শব্দ বদলে। সেখানে আছে 'কুল্লুম্‌রিইন বিমা কাসাবা রাহীন'; এখানে আছে 'কুল্লু নাফসিম বিমা কাসাবাত রাহীনাহ'। উদ্দেশ্য বদলে যায় 'ইমরুউন' — একজন পুরুষ — থেকে 'নাফস' — একটি প্রাণ — এ; আর বিধেয় নেয় স্ত্রীবাচক প্রত্যয়, 'রাহীন'-এর বদলে 'রাহীনাহ', কারণ আরবিতে 'নাফস' স্ত্রীলিঙ্গ। অর্জনের ক্রিয়াপদও সেই একই মিল রাখে: সেখানে 'কাসাবা', এখানে 'কাসাবাত'। নীতিটি একটিই, বলা হয়েছে দুবার।"
          },
          {
            "en": "The settings could hardly differ more. 52:21 closes a passage of favour: those who believed and whose descendants followed them in faith will have those descendants joined to them, with nothing at all deducted from their own deeds — and then the rule, marking the limit of the grant. Here the same rule closes a warning, and what follows it is not a limit but an exception. 74:39 names the companions of the right, who are not held.",
            "bn": "প্রেক্ষাপট দুটি এর চেয়ে বেশি আলাদা হওয়া কঠিন। 52:21 শেষ করে অনুগ্রহের একটি অংশ: যারা ঈমান এনেছে এবং যাদের সন্তানেরা ঈমানে তাদের অনুসরণ করেছে, তাদের সন্তানদের তাদের সঙ্গে মিলিয়ে দেওয়া হবে, অথচ তাদের নিজেদের আমল থেকে কিছুই কমানো হবে না — এরপর আসে নীতিটি, দানের সীমা চিহ্নিত করে। এখানে সেই একই নীতি শেষ করে একটি সতর্কবাণী, আর এর পরে আসে সীমা নয়, ব্যতিক্রম। 74:39 নাম নেয় ডান দিকের সঙ্গীদের, যারা আটক নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Pledge Left Unredeemed",
          "bn": "যে বন্ধক ছাড়ানো হয়নি"
        },
        "p": [
          {
            "en": "The passage then shows one going unredeemed. In 74:40-42 the people of the gardens ask the criminals what put them into Saqar, and the answer comes in the criminals' own words, in four items: we were not of those who prayed, nor did we feed the poor, we used to plunge into vain talk with those who plunged, and we used to deny the Day of Recompense — until the certainty came to us, says 74:47.",
            "bn": "এরপর এই অংশ দেখায়, একটি বন্ধক ছাড়ানো হয়নি। 74:40-42-এ জান্নাতবাসীরা অপরাধীদের জিজ্ঞেস করে, কীসে তাদের সাকারে নিয়ে গেল; আর উত্তর আসে অপরাধীদের নিজেদের মুখে, চারটি বিষয়ে: আমরা সালাত আদায়কারীদের অন্তর্ভুক্ত ছিলাম না, আমরা মিসকীনকে খাওয়াতাম না, আমরা অনর্থক আলাপে মগ্নদের সঙ্গে মগ্ন হতাম, আর আমরা কর্মফল দিবসকে অস্বীকার করতাম — 74:47 বলে, যতক্ষণ না আমাদের কাছে নিশ্চিত বিষয়টি এসে পড়ল।"
          },
          {
            "en": "Notice what the four are. Two are things not done and two are things done; two concern Allah directly and two concern other people and the tongue. Then 74:48 states the outcome for those who gave that answer: the intercession of intercessors will not benefit them. The pledge was not redeemed while redemption was possible, and the passage places the closing of that window at the arrival of what it calls the certainty.",
            "bn": "লক্ষ করুন চারটি কী কী। দুটি হলো না-করা কাজ, দুটি হলো করা কাজ; দুটি সরাসরি আল্লাহর সঙ্গে সম্পর্কিত, দুটি অন্য মানুষ ও জিহ্বার সঙ্গে। এরপর 74:48 জানায় ওই উত্তরদাতাদের পরিণতি: সুপারিশকারীদের সুপারিশ তাদের কোনো উপকারে আসবে না। বন্ধক ছাড়ানোর সুযোগ যতক্ষণ ছিল ততক্ষণে তা ছাড়ানো হয়নি, আর এই অংশটি সেই সুযোগ বন্ধ হওয়ার মুহূর্তটি রাখে সেই জিনিসের আগমনে, যাকে সে বলে 'নিশ্চিত বিষয়'।"
          }
        ]
      },
      {
        "h": {
          "en": "Held, Not Condemned",
          "bn": "আটক, দণ্ডিত নয়"
        },
        "p": [
          {
            "en": "A pledge is not a punishment; it is a holding, and a thing held can be redeemed. The verse does not say that every soul is condemned for what it earned. It says every soul is held against what it earned, which is why an exception in 74:39 is possible at all. The four confessions of 74:43-46 are best read the same way, as a list of what was left unpaid rather than as a verdict already passed.",
            "bn": "বন্ধক কোনো শাস্তি নয়; এটি ধরে রাখা, আর ধরে রাখা জিনিস ছাড়ানো যায়। আয়াতটি বলে না যে প্রত্যেক প্রাণ তার অর্জনের কারণে দণ্ডিত। এটি বলে, প্রত্যেক প্রাণ তার অর্জনের বিপরীতে আটক — আর এ কারণেই 74:39-এ কোনো ব্যতিক্রম আদৌ সম্ভব। 74:43-46-এর চারটি স্বীকারোক্তিও একইভাবে পড়া ভালো: ইতিমধ্যে ঘোষিত কোনো রায় হিসেবে নয়, বরং কী কী অপরিশোধিত রয়ে গিয়েছিল তার তালিকা হিসেবে।"
          },
          {
            "en": "What the word finally enforces is that the debt is personal. Comparison stops being useful, because nobody else's surplus transfers to an account held in your own name. What is left is ordinary and available: the prayer that was skipped, the poor person who was not fed, the hours the tongue is spent on, and what the heart actually does with the Day of Recompense while there is still time to do something about it.",
            "bn": "শেষ পর্যন্ত শব্দটি যা কার্যকর করে তা হলো — ঋণটি একান্ত ব্যক্তিগত। তুলনা করা আর কাজে আসে না, কারণ আপনার নিজের নামে থাকা হিসাবে অন্য কারও উদ্বৃত্ত স্থানান্তরিত হয় না। যা বাকি থাকে তা সাধারণ ও হাতের নাগালে: যে সালাতটি বাদ পড়েছে, যে অভাবীকে খাওয়ানো হয়নি, জিহ্বা যেসব ঘণ্টায় ব্যয় হয়, আর কর্মফল দিবসকে নিয়ে হৃদয় আসলে কী করে — যখন সে বিষয়ে কিছু করার সময় এখনো আছে।"
          }
        ]
      }
    ]
  }
});
