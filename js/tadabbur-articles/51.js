/**
 * Tadabbur long-form articles — surah 51.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "51:1": {
    "sections": [
      {
        "h": {
          "en": "Two Words to Open a Surah",
          "bn": "দুই শব্দে সূরার সূচনা"
        },
        "p": [
          {
            "en": "Wa-dh-dhariyati dharwa: by the scatterers, scattering. The verse is two words long, and it gives the surah its name. Al-Qurtubi says Surat adh-Dhariyat is Makki by the word of all, and counts sixty verses in it; al-Baghawi also marks it Makki. Ma'arif al-Qur'an notes that its subject, like that of Surat Qaf before it, is mainly the Hereafter: resurrection, reckoning, judgement, and Allah's reward and punishment. The surah does not begin with that subject stated outright. It begins with an oath.",
            "bn": "ওয়ায-যারিয়াতি যারওয়া: শপথ বিক্ষেপকারীদের, যারা ছড়িয়ে দেয়। আয়াতটি মাত্র দুই শব্দের, আর এখান থেকেই সূরার নাম। কুরতুবী বলেন, সূরা যারিয়াত সবার মতেই মক্কী, আর এর আয়াত ষাটটি। বাগাভীও একে মক্কী বলেছেন। মাআরিফুল কুরআন জানায়, আগের সূরা কাফের মতো এ সূরারও মূল বিষয় আখিরাত: পুনরুত্থান, হিসাব, বিচার, আর আল্লাহর পুরস্কার ও শাস্তি। তবে সূরাটি সে কথা সরাসরি বলে শুরু হয় না। শুরু হয় একটি শপথ দিয়ে।"
          },
          {
            "en": "Ma'arif describes the opening as Allah swearing by four phenomena that the promise of resurrection is true and will come to pass. This verse is the first of the four. The next three, 51:2 to 51:4, each begin with fa, and then: the load-bearers, the easy runners, the distributors of command. The thing sworn to arrives in 51:5, what you are promised is true. This article stays with the first, the wind, and with what the commentators say about it.",
            "bn": "মাআরিফের ভাষায়, শুরুতে আল্লাহ চারটি জিনিসের শপথ করে বলছেন যে পুনরুত্থানের ওয়াদা সত্য, তা ঘটবেই। এ আয়াত সেই চারটির প্রথমটি। পরের তিনটি আয়াত, ৫১:২ থেকে ৫১:৪, প্রতিটি শুরু হয় ফা দিয়ে, যার অর্থ তারপর: বোঝা বহনকারীরা, সহজে চলমানরা, আর কাজ বণ্টনকারীরা। যে কথার উপর শপথ, তা আসে ৫১:৫ আয়াতে: তোমাদের যে ওয়াদা দেওয়া হয়েছে তা সত্য। এ লেখা থাকবে প্রথমটির সঙ্গে, অর্থাৎ বাতাস, আর মুফাসসিররা তার সম্পর্কে যা বলেছেন তার সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dust Lifted and Carried",
          "bn": "ধুলো ওড়ে, ধুলো ভাসে"
        },
        "p": [
          {
            "en": "At-Tabari gives the meaning in one line: and the winds that scatter the dust, scattering. He adds the usage behind it, that the Arabs say dharat ar-rihu at-turab and adhrat, the wind scattered the dust, in two forms of the verb. Al-Baghawi gives the same gloss and the same two forms almost word for word. Al-Qurtubi records the verb with its two verbal nouns, tadhruhu dharwan and tadhrihi dhariyan, so that dharwan, the second word of the verse, is the verbal noun of the very act the first word names.",
            "bn": "তাবারী এক বাক্যে অর্থ বলে দেন: সেই বাতাসের শপথ, যা ধুলো উড়িয়ে ছড়িয়ে দেয়। সঙ্গে তিনি ভাষার ব্যবহারটাও জানান। আরবরা বলে যারাতির রীহুত তুরাব, আবার বলে আযরাত, দুটোরই মানে বাতাস ধুলো ছড়িয়ে দিল। একই ক্রিয়ার দুই রূপ। বাগাভীও প্রায় হুবহু এই ব্যাখ্যা আর এই দুই রূপ উল্লেখ করেন। কুরতুবী ক্রিয়াটির দুটি ক্রিয়াবিশেষ্য লিখে রাখেন, তাযরূহু যারওয়ান আর তাযরীহি যারইয়ান। ফলে আয়াতের দ্বিতীয় শব্দ যারওয়া হলো ঠিক সেই কাজের নাম, যা প্রথম শব্দটি বলছে।"
          },
          {
            "en": "The Muyassar words it a little differently: Allah swore by the winds that stir up the dust, al-muthirat li-t-turab. The difference is small but worth seeing. Scattering stresses the dust spread out and carried off; stirring stresses the moment it rises from the ground. Between them the picture is complete. Nothing in the verse names the wind, and nothing names the dust. Both are understood from the act. Every commentator fetched for this verse supplies the wind, and at-Tabari, al-Baghawi, al-Qurtubi and the Muyassar also name the dust.",
            "bn": "মুয়াসসারের ভাষা একটু আলাদা: আল্লাহ শপথ করেছেন সেই বাতাসের, যা ধুলো উসকে তোলে, আল-মুসীরাতু লিত-তুরাব। পার্থক্যটা ছোট, তবু চোখে পড়ার মতো। ছড়িয়ে দেওয়ার কথায় জোর পড়ে ধুলো দূরে উড়ে যাওয়ার উপর। আর উসকে তোলার কথায় জোর পড়ে সেই মুহূর্তের উপর, যখন ধুলো মাটি ছেড়ে ওঠে। দুটো মিলে ছবিটা পূর্ণ হয়। আয়াতে বাতাসের নাম নেই, ধুলোরও নাম নেই। দুটোই বোঝা যায় কাজটা থেকে। এ আয়াতের যত তাফসীর দেখা হয়েছে, সবাই বাতাসের কথা বলেছেন। ধুলোর কথাও স্পষ্ট বলেছেন তাবারী, বাগাভী, কুরতুবী ও মুয়াসসার।"
          }
        ]
      },
      {
        "h": {
          "en": "Gentle and Fierce in One Word",
          "bn": "এক শব্দে কোমল ও প্রবল"
        },
        "p": [
          {
            "en": "As-Sa'di reads the second word for its manner. By adh-dhariyat, he says, is meant the winds that scatter in their blowing, and dharwan describes that scattering as done by their softness and their gentleness, and by their strength and their disturbing force, iz'ajuha. One word of the verse is made to hold both ends of what a wind can be: the breeze that barely shifts the dust on a path, and the gale that drives it into the eyes and rattles the doors of a house.",
            "bn": "সা'দী দ্বিতীয় শব্দটিকে পড়েন তার ধরন বোঝাতে। তাঁর কথায়, যারিয়াত মানে সেই বাতাস, যা বইতে বইতে ছড়িয়ে দেয়। আর যারওয়া সেই ছড়ানোর ধরন জানায়: কখনো নরমভাবে, কোমলভাবে, কখনো জোরে, তোলপাড় করে। আরবিতে শেষ শব্দটি ইযআজুহা, অর্থাৎ তার অস্থির করে তোলা। ফলে আয়াতের একটি শব্দ বাতাসের দুই প্রান্তই ধরে রাখে। একদিকে সেই হাওয়া, যা পথের ধুলো সামান্য নাড়ায়। অন্যদিকে সেই ঝড়, যা ধুলো চোখে ছুড়ে মারে আর ঘরের দরজা কাঁপিয়ে দেয়।"
          },
          {
            "en": "This is a reading of a word, not a lesson in weather, and as-Sa'di does not develop it further. Still, it sets a frame worth keeping for the rest of the oath. What is sworn by here is not a rare or frightening sight. It is the commonest movement in the visible world, something a person feels on the skin many times a day without remarking on it. The oath takes the ordinary, holds it up, and asks the hearer to look at it again.",
            "bn": "এটি একটি শব্দের ব্যাখ্যা, আবহাওয়ার পাঠ নয়। সা'দী একে আর বিস্তারিত করেননি। তবু শপথের বাকি অংশ পড়ার সময় এই কাঠামোটা মনে রাখার মতো। এখানে যার শপথ করা হচ্ছে, তা কোনো বিরল বা ভয়ংকর দৃশ্য নয়। দৃশ্যমান জগতে এর চেয়ে সাধারণ নড়াচড়া আর নেই। দিনে বহুবার মানুষের গায়ে লাগে, কেউ খেয়ালও করে না। শপথটি এই সাধারণ জিনিসকেই তুলে ধরে, আর শ্রোতাকে বলে: আরেকবার তাকিয়ে দেখো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question at Kufa's Pulpit",
          "bn": "কূফার মিম্বরে এক প্রশ্ন"
        },
        "p": [
          {
            "en": "Ibn Kathir opens the surah with a report from 'Ali ibn Abi Talib (RA). He climbed the pulpit at Kufa and said: do not ask me about any verse in the Book of Allah, or any sunnah from the Messenger of Allah ﷺ, but that I will tell you of it. Ibn al-Kawwa' stood and asked: O Commander of the Believers, what is the meaning of wa-dh-dhariyati dharwa? He said: the wind. Ibn Kathir names two routes through Shu'ba and adds that it is established, thabata, through more than one route.",
            "bn": "ইবন কাসীর সূরার শুরুতে আলী ইবন আবী তালিব (রাঃ)-এর একটি বর্ণনা আনেন। তিনি কূফার মিম্বরে উঠে বললেন: আল্লাহর কিতাবের কোনো আয়াত বা রাসূলুল্লাহ ﷺ-এর কোনো সুন্নাহ সম্পর্কে আমাকে জিজ্ঞেস করো, আমি তোমাদের তা জানিয়ে দেব। ইবনুল কাওয়া উঠে দাঁড়িয়ে জিজ্ঞেস করল: হে আমীরুল মুমিনীন, ওয়ায-যারিয়াতি যারওয়া কথাটির অর্থ কী? তিনি বললেন: বাতাস। ইবন কাসীর শু'বার মাধ্যমে দুটি সূত্র উল্লেখ করেন। সঙ্গে বলেন, বর্ণনাটি একাধিক সূত্রে প্রমাণিত, আরবিতে সাবাতা।"
          },
          {
            "en": "At-Tabari gives the exchange at length, in twelve reports from 'Ali (RA) through different narrators, and the setting shifts from one to the next. In one, 'Ali has come out to ar-Rahba wearing two cloaks; in another he is addressing the people; in another he tells them from the pulpit that no one asks him about a verse but he answers it. In some a man simply asks, and in one the narrator, Khalid ibn 'Ar'ara, says he asked 'Ali himself. The answer never changes: the wind, or the winds.",
            "bn": "তাবারী ঘটনাটি বিস্তারিত আনেন, আলী (রাঃ) থেকে ভিন্ন ভিন্ন বর্ণনাকারীর মাধ্যমে বারোটি বর্ণনায়। প্রেক্ষাপট একেকটিতে একেক রকম। একটিতে আলী দুটি চাদর গায়ে রাহবায় বেরিয়ে এসেছেন। আরেকটিতে তিনি লোকদের সামনে খুতবা দিচ্ছেন। আরেকটিতে মিম্বর থেকে বলছেন, কেউ আমাকে কোনো আয়াত সম্পর্কে জিজ্ঞেস করলে আমি তাকে জানিয়ে দেব। কোনোটিতে শুধু বলা হয়েছে, এক লোক জিজ্ঞেস করল। একটিতে বর্ণনাকারী খালিদ ইবন আরআরা বলছেন, তিনি নিজেই আলীকে জিজ্ঞেস করেছিলেন। কিন্তু উত্তর কখনো বদলায়নি: বাতাস।"
          },
          {
            "en": "At-Tabari prefaces the reports with his own gloss and says the people of interpretation said the same. Besides 'Ali (RA) he cites Ibn Zayd that Ibn 'Abbas (RA) used to say: they are the winds, and Mujahid: the winds. No other meaning appears among his reports on this verse. That agreement is the finding of this section. The wind is the reading of at-Tabari, of the Companions and Successors he quotes, and of every source fetched here, apart from one view al-Qurtubi records without a name, which comes later.",
            "bn": "বর্ণনাগুলোর আগে তাবারী নিজের ব্যাখ্যা দেন, তারপর বলেন, তাফসীরবিদরাও এমনটাই বলেছেন। আলী (রাঃ) ছাড়াও তিনি ইবন যায়দের সূত্রে আনেন যে ইবন আব্বাস (রাঃ) বলতেন: এ হলো বাতাস। মুজাহিদও বলেছেন: বাতাস। এ আয়াতে তাঁর আনা বর্ণনাগুলোয় অন্য কোনো অর্থ নেই। এই ঐকমত্যটুকুই এ অংশের মূল কথা। বাতাস অর্থটি তাবারীর, তাঁর উদ্ধৃত সাহাবী ও তাবিঈদের, আর এখানে দেখা প্রতিটি উৎসের। ব্যতিক্রম শুধু একটি মত, যা কুরতুবী কারও নাম ছাড়া উল্লেখ করেছেন। সেটির কথা পরে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Understand",
          "bn": "বোঝার জন্য প্রশ্ন"
        },
        "p": [
          {
            "en": "Al-Qurtubi carries a sharper version, from 'Amir ibn Wathila. Ibn al-Kawwa' asked, and 'Ali (RA) replied: wayluka, sal tafaqquhan wa la tas'al ta'annutan. Woe to you: ask to gain understanding, and do not ask to make difficulty. Then he answered, for this verse and the three after it. Al-Qurtubi gives the report without a grading. The rebuke comes before the answer but does not replace it. He named the kind of asking he wanted, and then gave what was asked.",
            "bn": "কুরতুবী আমির ইবন ওয়াসিলার সূত্রে আরও কড়া একটি বর্ণনা আনেন। ইবনুল কাওয়া প্রশ্ন করলে আলী (রাঃ) বললেন: ওয়াইলাকা, সাল তাফাক্কুহান ওয়া লা তাসআল তাআন্নুতান। আফসোস তোমার জন্য! বোঝার জন্য প্রশ্ন করো, কাউকে বিপাকে ফেলার জন্য নয়। তারপর তিনি এ আয়াত আর পরের তিনটির উত্তর দিলেন। কুরতুবী বর্ণনাটির কোনো মান উল্লেখ করেননি। তিরস্কার এসেছে উত্তরের আগে, কিন্তু উত্তরের জায়গা নেয়নি। কেমন প্রশ্ন তিনি চান, সেটা বলে দিয়েছেন, তারপর যা জানতে চাওয়া হয়েছিল তা জানিয়েছেন।"
          },
          {
            "en": "At-Tabari's report through Abu as-Sahba' explains the edge. 'Ali (RA) said from the pulpit that no one would ask him about a verse but he would answer, and Ibn al-Kawwa' stood, meaning to ask what Sabigh had asked 'Umar ibn al-Khattab (RA). Al-Qurtubi tells that earlier episode through Abu Bakr al-Anbari, from as-Sa'ib ibn Yazid. A man was said to go about asking for the meaning of the Qur'an's difficult passages. He came to 'Umar and asked: what is wa-dh-dhariyati dharwa? 'Umar beat him and had him sent back to his people. Al-Qurtubi gives no grading for it.",
            "bn": "আবুস সাহবার সূত্রে তাবারীর একটি বর্ণনা এই কড়া সুরের কারণ বুঝিয়ে দেয়। আলী (রাঃ) মিম্বর থেকে বললেন, কেউ কোনো আয়াত সম্পর্কে জিজ্ঞেস করলে তিনি জানিয়ে দেবেন। তখন ইবনুল কাওয়া উঠে দাঁড়াল। তার ইচ্ছা ছিল, সাবীগ উমর ইবনুল খাত্তাব (রাঃ)-কে যা জিজ্ঞেস করেছিল, সেটাই জিজ্ঞেস করবে। আগের সেই ঘটনা কুরতুবী আনেন আবু বকর আল-আনবারীর মাধ্যমে, সাইব ইবন ইয়াযীদ থেকে। এক লোক সম্পর্কে খবর এল, সে কুরআনের জটিল অংশের ব্যাখ্যা জিজ্ঞেস করে বেড়ায়। সে উমরের কাছে এসে প্রশ্ন করল: ওয়ায-যারিয়াতি যারওয়া কী? উমর তাকে প্রহার করলেন আর তার গোত্রের কাছে ফেরত পাঠালেন। কুরতুবী এরও কোনো মান উল্লেখ করেননি।"
          },
          {
            "en": "This needs saying plainly. These reports describe one man's case in the first generation, judged by the caliph of that time, and al-Qurtubi presents it ungraded. They license nothing against any living person who asks about the Qur'an. No one today may punish, shame or shut out a questioner by appeal to them. What they set beside the verse is a question about the asker's aim. The same words can be asked to understand or asked to unsettle, and 'Ali's answer names the first as the way to ask.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। এ বর্ণনাগুলো প্রথম প্রজন্মের এক ব্যক্তির ঘটনা, যার বিচার করেছিলেন তখনকার খলীফা। কুরতুবী বর্ণনাটি এনেছেন মান উল্লেখ না করেই। কুরআন নিয়ে প্রশ্ন করে এমন কোনো জীবিত মানুষের বিরুদ্ধে এগুলো কোনো অনুমতি দেয় না। আজ এর দোহাই দিয়ে কোনো প্রশ্নকারীকে শাস্তি দেওয়া, অপমান করা বা দূরে ঠেলে দেওয়ার অধিকার কারও নেই। এগুলো আয়াতের পাশে একটি প্রশ্নই রেখে যায়: প্রশ্নকারীর উদ্দেশ্য কী? একই কথা জিজ্ঞেস করা যায় বোঝার জন্য, আবার কাউকে টলিয়ে দেওয়ার জন্যও। আলীর জবাব প্রথম পথটিকেই প্রশ্ন করার সঠিক পথ বলে দেখিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Reports Carry",
          "bn": "বর্ণনাগুলো যা বহন করে"
        },
        "p": [
          {
            "en": "In al-Qurtubi's version from 'Amir ibn Wathila, 'Ali (RA) answers all four verses in one breath; in Ibn Kathir's English abridgement, Ibn al-Kawwa' goes on to ask verse by verse and is answered each time. The load-bearers, the easy runners and the distributors of command belong to 51:2, 51:3 and 51:4, and are taken up with those verses. Here it is enough that the first verse's reading comes inside a sequence.",
            "bn": "আমির ইবন ওয়াসিলার সূত্রে কুরতুবীর বর্ণনায় আলী (রাঃ) এক নিঃশ্বাসে চারটি আয়াতেরই উত্তর দেন। ইবন কাসীরের ইংরেজি সংক্ষেপে ইবনুল কাওয়া একটার পর একটা আয়াত জিজ্ঞেস করে যায়, আর প্রতিবার উত্তর পায়। বোঝা বহনকারী, সহজে চলমান আর কাজ বণ্টনকারীদের কথা ৫১:২, ৫১:৩ ও ৫১:৪ আয়াতের। সেগুলোর আলোচনা সেসব আয়াতেই হবে। এখানে এটুকুই যথেষ্ট যে প্রথম আয়াতের অর্থ এসেছে একটি ধারাবাহিকতার ভেতরে।"
          },
          {
            "en": "Ma'arif al-Qur'an adds a note on the source of this explanation. It says there is a hadith explaining the four in this way whose ascription to the Prophet ﷺ Ibn Kathir held weak, and that it is also reported as a saying of 'Umar and 'Ali (RA). The portion of Ibn Kathir fetched for this verse does not reach that report, so it is not quoted. No fetched tafsir attaches a hadith from the standard collections to this verse, and this article cites none.",
            "bn": "এ ব্যাখ্যার উৎস নিয়ে মাআরিফুল কুরআন একটি কথা যোগ করে। তার ভাষায়, চারটি জিনিসের এই ব্যাখ্যা একটি হাদীসেও আছে, যা নবী ﷺ-এর কথা হিসেবে বর্ণিত হওয়াকে ইবন কাসীর দুর্বল বলেছেন। তবে উমর ও আলী (রাঃ)-এর কথা হিসেবেও এটি বর্ণিত। এ আয়াতের জন্য ইবন কাসীরের যতটুকু দেখা হয়েছে, তাতে সেই বর্ণনা নেই, তাই এখানে তা উদ্ধৃত করা হলো না। দেখা কোনো তাফসীরই এ আয়াতের সঙ্গে প্রসিদ্ধ হাদীসগ্রন্থগুলোর কোনো হাদীস যুক্ত করেনি। এ লেখাতেও কোনো হাদীস উদ্ধৃত হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Swear by the Wind",
          "bn": "বাতাসের শপথ কেন"
        },
        "p": [
          {
            "en": "Al-Qurtubi states the rule first: wa-dh-dhariyat and what follows it are oaths, and when the Lord swears by a thing, He affirms honour for it. Then he gives a second view under wa qila, it was said: the meaning is, by the Lord of the scatterers. On the first, the oath falls on the wind itself and raises its standing; on the second, an understood word, Lord, carries the oath through the wind to its Maker. Al-Qurtubi sets both down without ranking them, and so does this article.",
            "bn": "কুরতুবী প্রথমে নিয়মটা বলেন: ওয়ায-যারিয়াত আর তার পরের সবগুলোই শপথ। আর রব যখন কোনো কিছুর শপথ করেন, তখন তার মর্যাদা প্রতিষ্ঠা করেন। তারপর 'বলা হয়েছে' কথাটি দিয়ে তিনি দ্বিতীয় একটি মত আনেন: অর্থ হলো, বিক্ষেপকারীদের রবের শপথ। প্রথম মতে শপথটা পড়ে বাতাসের উপরেই, আর তাতে বাতাসের মর্যাদা বাড়ে। দ্বিতীয় মতে একটি উহ্য শব্দ, রব, শপথটাকে বাতাস পেরিয়ে তার স্রষ্টার কাছে নিয়ে যায়। কুরতুবী দুটো মতই পাশাপাশি রেখেছেন, কোনোটিকে প্রাধান্য দেননি। এ লেখাও দেয় না।"
          },
          {
            "en": "As-Sa'di explains the oath by its purpose. It is an oath from Allah, the Truthful in His speech, by these mighty created things in which He placed benefit and good, upon this: that His promise is true and the Recompense, the day of reckoning for deeds, will surely happen and none can turn it away. Then he presses the point. When the Truthful, the Mighty informs of it, swears upon it and sets up the proofs for it, why do the deniers deny it, and why do those who should work for it turn away?",
            "bn": "সা'দী শপথের ব্যাখ্যা দেন তার উদ্দেশ্য দিয়ে। এ শপথ আল্লাহর, যিনি কথায় সত্যবাদী। তিনি শপথ করছেন এমন বিশাল সৃষ্টির, যার মধ্যে তিনি রেখেছেন নানা কল্যাণ আর উপকার। শপথের বিষয়: তাঁর ওয়াদা সত্য, আর প্রতিদান, অর্থাৎ আমলের হিসাবের দিন, অবশ্যই ঘটবে, কেউ তা ঠেকাতে পারবে না। তারপর তিনি কথাটা আরও চেপে ধরেন। যিনি সত্যবাদী ও মহান, তিনি নিজে যখন খবর দিচ্ছেন, শপথ করছেন, প্রমাণও দাঁড় করাচ্ছেন, তখন অস্বীকারকারীরা কেন অস্বীকার করে? আর যাদের এর জন্য আমল করার কথা, তারা কেন মুখ ফিরিয়ে নেয়?"
          },
          {
            "en": "The Muyassar holds oath and answer together in a single sentence: Allah swore by the winds that stir up dust, and by what follows, that what you are promised, O people, of resurrection and reckoning is a certain truth. Al-Qurtubi names the answer as 51:5. On why created things are sworn by, the sources here give only al-Qurtubi's honour and as-Sa'di's benefit and proof, and the article stops where they stop.",
            "bn": "মুয়াসসার শপথ আর তার জবাবকে এক বাক্যেই ধরে রাখে: আল্লাহ শপথ করেছেন ধুলো ওড়ানো বাতাসের আর পরের জিনিসগুলোর, যে হে মানুষ, পুনরুত্থান ও হিসাবের যে ওয়াদা তোমাদের দেওয়া হয়েছে, তা নিশ্চিত সত্য। কুরতুবী জবাবটি চিহ্নিত করেন ৫১:৫ আয়াতে। সৃষ্টির শপথ কেন, এ প্রশ্নে এখানকার উৎসগুলো শুধু কুরতুবীর মর্যাদার কথা আর সা'দীর কল্যাণ ও প্রমাণের কথা দিয়েছে। তাঁরা যেখানে থেমেছেন, এ লেখাও সেখানে থামছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A View Recorded Without a Name",
          "bn": "নামহীন এক মত"
        },
        "p": [
          {
            "en": "Al-Qurtubi also records, under wa qila, a different identification: that the scatterers are women who bear children, since through them the generations of people are spread, and that Allah swore by them for the righteous servants who come from them. He gives two reasons why women rather than men are meant: that they are the vessels in which both scatterings meet, and that the scattering in them lasts longer. He does not say who held this view, and places it after the reading of the wind, which he has already given through 'Ali (RA).",
            "bn": "কুরতুবী 'বলা হয়েছে' কথাটি দিয়ে আরেকটি ভিন্ন ব্যাখ্যাও লিখে রাখেন। তা হলো, যারিয়াত মানে সন্তান জন্মদানকারী নারী, কারণ তাঁদের মাধ্যমেই মানুষের প্রজন্ম ছড়িয়ে পড়ে। আর আল্লাহ তাঁদের শপথ করেছেন সেই নেক বান্দাদের কারণে, যারা তাঁদের থেকে আসে। পুরুষের বদলে নারীর কথা কেন, তার দুটি কারণও তিনি বলেন। এক, তাঁরাই সেই আধার যেখানে দুই দিকের বিস্তার এসে মেলে। দুই, তাঁদের মধ্যে এ বিস্তারের সময়কাল দীর্ঘ। এ মত কার, তিনি তা বলেননি। আর এটি রেখেছেন বাতাসের ব্যাখ্যার পরে, যা তিনি আগেই আলী (রাঃ)-এর সূত্রে দিয়েছেন।"
          },
          {
            "en": "So the view is recorded, not adopted. Against it stands the reading at-Tabari reports from 'Ali, Ibn 'Abbas and Mujahid, which every other source here repeats. It is set down only so that the record of what al-Qurtubi gives is complete. A reader who meets it elsewhere will know how it was introduced: as something said, after the agreed reading.",
            "bn": "অর্থাৎ মতটি লিখে রাখা হয়েছে, গ্রহণ করা হয়নি। এর বিপরীতে আছে সেই অর্থ, যা তাবারী আলী, ইবন আব্বাস ও মুজাহিদ থেকে বর্ণনা করেছেন, আর এখানকার বাকি সব উৎস যা দোহরায়। কুরতুবী যা দিয়েছেন, তার পূর্ণ চিত্র রাখতেই শুধু এটি উল্লেখ করা হলো। পাঠক অন্য কোথাও এ মত পেলে জানবেন, এটি এসেছিল 'বলা হয়েছে' হিসেবে, সর্বসম্মত অর্থের পরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Known by What It Moves",
          "bn": "যা নাড়ায়, তা দিয়েই চেনা"
        },
        "p": [
          {
            "en": "Nobody sees the wind. It is known by what it moves: the dust that rises, the cloth that fills, the grass that bends together. The commentators gloss the verse by the act and supply the actor, and the oath asks the hearer to read the world the same way, to notice the movement and not stop at it. As-Sa'di's soft and strong fits what anyone has felt. The air that cools a face at evening is the same air that lifts a roof in a storm.",
            "bn": "বাতাস কেউ দেখে না। তাকে চেনা যায় সে যা নাড়ায় তা দিয়ে: ধুলো ওঠে, কাপড় ফুলে ওঠে, ঘাস একসঙ্গে নুয়ে পড়ে। মুফাসসিররা আয়াতের ব্যাখ্যা দেন কাজটা দিয়ে, তারপর যে করছে তাকে চিনিয়ে দেন। শপথটা শ্রোতাকে দুনিয়াকেও এভাবেই পড়তে বলে: নড়াচড়াটা খেয়াল করো, কিন্তু সেখানেই থেমে যেয়ো না। সা'দীর নরম আর প্রবলের কথা যে কেউ নিজের গায়ে টের পেয়েছে। সন্ধ্যায় যে হাওয়া মুখ জুড়িয়ে দেয়, ঝড়ের রাতে সেই হাওয়াই ঘরের চাল উড়িয়ে নেয়।"
          },
          {
            "en": "Two things stay with the reader. One is the oath, which in every source fetched here is set to make a promise certain, the promise that 51:5 states. The other is the scene at Kufa. The verse was asked about by someone who, by at-Tabari's report, meant to test, and the answer named a better way to ask. The surah's first words invite a person to look and to ask, and the reports attached to them require only that the looking and the asking be done in order to understand.",
            "bn": "পাঠকের মনে দুটি জিনিস থেকে যায়। একটি শপথ। এখানে দেখা প্রতিটি উৎসে এর কাজ একটি ওয়াদাকে নিশ্চিত করা, যে ওয়াদার কথা আছে ৫১:৫ আয়াতে। অন্যটি কূফার সেই দৃশ্য। তাবারীর বর্ণনা অনুযায়ী প্রশ্নকারীর মনে ছিল পরীক্ষা করার ইচ্ছা, আর জবাবে তাকে প্রশ্ন করার ভালো পথটা দেখিয়ে দেওয়া হলো। সূরার প্রথম শব্দগুলো মানুষকে তাকাতে আর প্রশ্ন করতে ডাকে। এর সঙ্গে যুক্ত বর্ণনাগুলো শুধু এটুকু চায়: তাকানো আর প্রশ্ন করা হোক বোঝার জন্য।"
          }
        ]
      }
    ]
  },
  "51:12": {
    "sections": [
      {
        "h": {
          "en": "A Question After an Oath",
          "bn": "শপথের পরে প্রশ্ন"
        },
        "p": [
          {
            "en": "Yas'aluna ayyana yawmu d-din: they ask, when is the Day of Recompense? The verse is four words long, and the whole of it is a question placed in other mouths. Al-Qurtubi and at-Tabari both gloss ayyana with the plain word mata, when. The surah has already given its answer before the question arrives. In 51:6 it declared that ad-din, the recompense, is certain to occur, and the same word returns here as yawm ad-din, the Day on which that recompense falls.",
            "bn": "ইয়াসআলূনা আইয়্যানা ইয়াওমুদ্দীন: তারা জিজ্ঞেস করে, প্রতিফল দিবস কবে? আয়াতে শব্দ মোটে চারটি, আর পুরোটাই অন্যের মুখে বসানো প্রশ্ন। কুরতুবী ও তাবারী দুজনেই আইয়্যানা শব্দের অর্থ করেন সহজ শব্দ মাতা দিয়ে, মানে কবে। প্রশ্ন ওঠার আগেই সূরা জবাব দিয়ে রেখেছে। ৫১:৬ আয়াতে ঘোষণা এসেছে, আদ-দীন অর্থাৎ প্রতিফল অবশ্যই ঘটবে। সেই শব্দই এখানে ফিরে এসেছে ইয়াওমুদ্দীন হয়ে, যে দিনে ওই প্রতিফল এসে পড়বে।"
          },
          {
            "en": "Between the oath and the question stand the people who ask it. In 51:8 the listeners are told that they are in differing speech, and in 51:9 that whoever is turned away from the truth is the one who has been turned away. Then 51:10 and 51:11 pronounce against al-kharrasun, those lost in a flood, heedless. This verse completes their portrait by giving them a line to speak. Their own question shows where they stand, and the verse after it, 51:13, begins the reply.",
            "bn": "শপথ আর প্রশ্নের মাঝখানে দাঁড়িয়ে আছে প্রশ্নকারীরা নিজেরাই। ৫১:৮ আয়াতে শ্রোতাদের বলা হয়, তোমরা পরস্পরবিরোধী কথায় পড়ে আছ। ৫১:৯ আয়াত জানায়, সত্য থেকে যাকে ফিরিয়ে দেওয়া হয়েছে, সে-ই ফিরে গেছে। তারপর ৫১:১০ ও ৫১:১১ আয়াতে আল-খাররাসূনের বিরুদ্ধে কঠিন ঘোষণা আসে, যারা ডুবে আছে প্লাবনের ভেতর, উদাসীন হয়ে। এই আয়াত তাদের মুখে একটা কথা তুলে দিয়ে ছবিটা পূর্ণ করে। নিজেদের প্রশ্নই ধরিয়ে দেয় তারা কোথায় দাঁড়িয়ে। আর জবাব শুরু হয় পরের আয়াত ৫১:১৩ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Askers Are",
          "bn": "প্রশ্নকারীরা কারা"
        },
        "p": [
          {
            "en": "At-Tabari ties the verse straight back to the ones before it: these kharrasun, whose description Allah has just given, ask when the Day of requital and reckoning will be. Ma'arif al-Qur'an, treating 51:10 to 51:16 together, explains kharrasun as the plural of kharras, someone who estimates or says things by conjecture. In this setting, it says, the word refers to stubborn disbelievers who said discordant things about the Messenger ﷺ without reason or evidence. It adds that kharrasun would not be out of place read as kadhdhabun, great liars, as those that statement condemns.",
            "bn": "তাবারী আয়াতটিকে সরাসরি আগের আয়াতগুলোর সঙ্গে জুড়ে দেন: যাদের পরিচয় আল্লাহ এইমাত্র দিয়েছেন, সেই খাররাসূনরাই জানতে চায় প্রতিদান আর হিসাবের দিন কবে। মাআরিফুল কুরআন ৫১:১০ থেকে ৫১:১৬ পর্যন্ত আয়াত একসঙ্গে আলোচনা করে। তার ব্যাখ্যায় খাররাসূন হলো খাররাস শব্দের বহুবচন, অর্থাৎ যে আন্দাজে হিসাব কষে বা অনুমানে কথা বলে। এখানে শব্দটি সেই একগুঁয়ে কাফিরদের বোঝায়, যারা কোনো যুক্তি বা প্রমাণ ছাড়াই রাসূল ﷺ সম্পর্কে পরস্পরবিরোধী কথা বলত। মাআরিফ আরও বলে, খাররাসূনকে কাযযাবূন অর্থাৎ ডাহা মিথ্যাবাদী অর্থে নেওয়া অসংগত হবে না, ওই ঘোষণায় যাদের ধিক্কার দেওয়া হয়েছে।"
          },
          {
            "en": "Al-Muyassar uses that harsher word on its own account: these liars, al-kadhdhabun, ask. At-Tabari also preserves the view of Ibn Zayd, who said the askers were those who used to deny that they would be requited or raised. Al-Baghawi supplies the person they were speaking to. In his wording they say, O Muhammad, when is the Day of Recompense? The question is put to the Prophet ﷺ himself, the man who brought them the news of that Day and was mocked for it.",
            "bn": "মুয়াসসার নিজের ভাষাতেই এই কঠিন শব্দটি ব্যবহার করে: এই মিথ্যাবাদীরা, আল-কাযযাবূন, জিজ্ঞেস করে। তাবারী ইবন যায়দের মতও সংরক্ষণ করেছেন। তাঁর কথায় প্রশ্নকারীরা হলো তারা, যারা অস্বীকার করত যে তাদের কাজের প্রতিদান দেওয়া হবে বা তাদের আবার ওঠানো হবে। কাকে উদ্দেশ করে প্রশ্নটা ছোড়া হয়েছিল, বাগাভী তা জানিয়ে দেন। তাঁর বর্ণনায় তারা বলে: হে মুহাম্মাদ, প্রতিদানের দিন কবে? প্রশ্নটা তাই সরাসরি নবী ﷺ-এর দিকে, যিনি তাদের কাছে সেই দিনের খবর এনেছিলেন এবং এজন্য ঠাট্টার শিকার হয়েছিলেন।"
          },
          {
            "en": "The kharrasun deserve a study of their own, and this article only touches them. What matters here is the link the commentators draw between those people and this question. None of these texts treats the asking as separate from the conjecture of 51:10. The people who guessed about the Messenger ﷺ without evidence now guess about the Day, and their question carries the guess inside it. Asking when is their way of saying that they have already decided the answer is never.",
            "bn": "খাররাসূনদের নিয়ে আলাদা আলোচনা হতে পারে, এখানে শুধু ছুঁয়ে যাওয়া হলো। এখানে যা জরুরি, তা হলো তাফসীরকারেরা ওই লোকদের সঙ্গে এই প্রশ্নের যে যোগসূত্র টানেন। এসব লেখার কোথাও প্রশ্ন করাটাকে ৫১:১০ আয়াতের আন্দাজবাজি থেকে আলাদা করে দেখা হয়নি। যারা প্রমাণ ছাড়া রাসূল ﷺ সম্পর্কে আন্দাজে কথা বলত, তারাই এখন আন্দাজ করে সেই দিন নিয়ে। তাদের প্রশ্নের ভেতরেই লুকিয়ে আছে সেই আন্দাজ। কবে, এই জিজ্ঞাসা আসলে তাদের মনের সিদ্ধান্তেরই প্রকাশ: সে দিন কখনো আসবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Mockery Wearing a Question Mark",
          "bn": "প্রশ্নের মুখোশে বিদ্রূপ"
        },
        "p": [
          {
            "en": "Five of the Arabic commentaries fetched for this verse name the motive behind the question outright, and none of them calls it sincere. Ibn Kathir is the most direct: they say this only out of takdhib, 'inad, shakk and istib'ad, that is, denial, obstinacy, doubt and treating the Day as far-fetched. The word only carries weight. It rules out reading the verse as people who simply wanted information and were refused it. The form is a question; the substance, in his reading, is a refusal.",
            "bn": "এ আয়াতের জন্য আনা আরবি তাফসীরগুলোর পাঁচটি প্রশ্নের পেছনের উদ্দেশ্য সরাসরি বলে দেয়, আর কোনোটিই একে আন্তরিক প্রশ্ন বলে না। ইবন কাসীর সবচেয়ে স্পষ্ট: তারা এ কথা বলে কেবল তাকযীব, ইনাদ, শাক্ক ও ইসতিবআদ থেকে। মানে অস্বীকার, হঠকারিতা, সন্দেহ, আর দিনটিকে অবাস্তব রকম দূরের মনে করা। এখানে 'কেবল' শব্দটাই ভার বহন করে। এতে এমন পাঠের সুযোগ থাকে না যে কিছু লোক নিছক জানতে চেয়েছিল আর তাদের জানানো হয়নি। তাঁর পাঠে বাইরের চেহারা প্রশ্নের, ভেতরের কথা প্রত্যাখ্যান।"
          },
          {
            "en": "The others name the motive in their own words. Al-Qurtubi says they said it in mockery, istihza', and in doubt about the Resurrection. Al-Baghawi pairs denial with mockery. As-Sa'di says they ask by way of doubt and denial, mustab'idin, holding the thing to be remote. Al-Muyassar calls it su'al istib'ad wa-takdhib, the question of someone who thinks the matter far-fetched and gives it the lie. The vocabulary shifts from commentary to commentary, but none of them reads the asking as innocent.",
            "bn": "বাকিরাও নিজ নিজ ভাষায় উদ্দেশ্যটা বলে দেন। কুরতুবী বলেন, তারা কথাটা বলত ইসতিহযা বা বিদ্রূপ করে, আর কিয়ামত নিয়ে সন্দেহ থেকে। বাগাভী অস্বীকারের পাশে বিদ্রূপকে রাখেন। সা'দী বলেন, তারা প্রশ্ন করে সন্দেহ আর অস্বীকারের জায়গা থেকে, মুসতাবইদীন হয়ে, অর্থাৎ ব্যাপারটাকে বহু দূরের ভেবে। মুয়াসসার একে বলে সুআল ইসতিবআদ ওয়া তাকযীব: এমন লোকের প্রশ্ন, যে বিষয়টাকে অসম্ভব মনে করে আর মিথ্যা বলে উড়িয়ে দেয়। শব্দ এক তাফসীর থেকে আরেক তাফসীরে বদলায়। কিন্তু কেউই প্রশ্নটাকে নিরীহ হিসেবে পড়েন না।"
          },
          {
            "en": "Taken together, these words fall into two groups. Some describe the heart: doubt, and the sense that the Day is too remote to be real. Others describe the tongue: mockery and obstinacy. The verse holds both. A person can doubt quietly, and a person can mock loudly, and the same four words serve either purpose. That is why the commentators read the manner rather than the grammar. Nothing in the bare wording betrays the scorn; the setting of 51:10 and 51:11 does.",
            "bn": "শব্দগুলো পাশাপাশি রাখলে দুই ভাগে পড়ে। কিছু শব্দ অন্তরের অবস্থা বলে: সন্দেহ, আর এই বোধ যে দিনটা এত দূরের যে সত্যি হতে পারে না। কিছু শব্দ জিভের কাজ বলে: বিদ্রূপ আর হঠকারিতা। আয়াত দুটোকেই ধারণ করে। কেউ মনে মনে চুপচাপ সন্দেহ করতে পারে, কেউ গলা চড়িয়ে ঠাট্টা করতে পারে, আর ওই চারটি শব্দ দুজনেরই কাজে আসে। এজন্যই তাফসীরকারেরা ব্যাকরণ নয়, ভঙ্গিটা পড়েন। খালি শব্দে তাচ্ছিল্য ধরা পড়ে না। ধরা পড়ে ৫১:১০ ও ৫১:১১ আয়াতের প্রেক্ষাপটে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Day Is Called",
          "bn": "দিনটির নাম ও তার অর্থ"
        },
        "p": [
          {
            "en": "The commentators also gloss yawm ad-din, and their glosses show what the askers were dismissing. At-Tabari gives the fullest: the Day of requital and reckoning, the Day on which Allah yadinu the servants for their deeds, that is, requites them. His verb comes from the same root as din, so his gloss explains the name by the act it names. Al-Muyassar has the Day of reckoning and recompense, al-hisab wal-jaza'. Al-Qurtubi keeps to the Day of reckoning alone.",
            "bn": "তাফসীরকারেরা ইয়াওমুদ্দীন শব্দেরও ব্যাখ্যা দেন, আর সেই ব্যাখ্যা দেখায় প্রশ্নকারীরা কী জিনিস উড়িয়ে দিচ্ছিল। তাবারীর ব্যাখ্যা সবচেয়ে পূর্ণ: প্রতিদান ও হিসাবের দিন, যে দিনে আল্লাহ বান্দাদের তাদের আমলের প্রতিদান দেবেন। তিনি এখানে ইয়াদীনু ক্রিয়া ব্যবহার করেন, যা দীন শব্দেরই ধাতু থেকে এসেছে। ফলে নামটির ব্যাখ্যা তিনি দেন সেই কাজ দিয়ে, যার নামে দিনটির নাম। মুয়াসসার বলে, হিসাব ও প্রতিদানের দিন, আল-হিসাব ওয়াল-জাযা। কুরতুবী শুধু হিসাবের দিন বলেই থামেন।"
          },
          {
            "en": "Al-Baghawi glosses it as the Day of Recompense, yawm al-jaza', and then names it plainly: meaning the Day of Resurrection. As-Sa'di moves further from the wording and paraphrases the question as when will they be raised, which places the doubt at the resurrection itself. Ibn Zayd's description in at-Tabari keeps both sides: those who denied that they would be requited, or raised. Between them the glosses cover three things, the raising, the reckoning and the requital, and the askers doubted all three.",
            "bn": "বাগাভী একে বলেন প্রতিদানের দিন, ইয়াওমুল জাযা, তারপর খোলাখুলি নাম দেন: অর্থাৎ কিয়ামতের দিন। সা'দী শব্দ থেকে আরেকটু সরে প্রশ্নটার মর্ম বলেন এভাবে: তাদের কবে ওঠানো হবে। এতে সন্দেহটা গিয়ে বসে পুনরুত্থানের ওপরেই। তাবারীতে ইবন যায়দের বর্ণনা দুটো দিকই ধরে রাখে: যারা অস্বীকার করত যে তাদের প্রতিদান দেওয়া হবে, কিংবা আবার ওঠানো হবে। সব মিলিয়ে ব্যাখ্যাগুলো তিনটি জিনিস জুড়ে আছে: পুনরুত্থান, হিসাব আর প্রতিদান। প্রশ্নকারীরা তিনটিতেই সন্দেহ করত।"
          },
          {
            "en": "This shapes how the verse is heard. The askers were not curious about a date in the abstract. The day they named is, by its own name, a day of accounts. To ask when it comes while doubting that it will come at all is to ask when deeds will be weighed while acting as though they never will be. The irony sits in the phrase itself: they speak the word din, and the word they speak is the answer to their question.",
            "bn": "আয়াতটা কীভাবে শোনা হবে, এ থেকে তা ঠিক হয়। প্রশ্নকারীদের কৌতূহল কোনো বিমূর্ত তারিখ নিয়ে ছিল না। যে দিনের নাম তারা নিচ্ছে, নামেই তা হিসাবনিকাশের দিন। দিনটা আদৌ আসবে কি না সন্দেহ করতে করতে কবে আসবে জিজ্ঞেস করা মানে জানতে চাওয়া, আমল কবে মাপা হবে, অথচ চলাফেরা এমন যেন কখনো মাপা হবে না। পরিহাসটা শব্দের ভেতরেই। তারা মুখে দীন শব্দ উচ্চারণ করছে, আর ওই শব্দটাই তাদের প্রশ্নের জবাব।"
          }
        ]
      },
      {
        "h": {
          "en": "When That Means Whether",
          "bn": "কবে মানে আদৌ কি"
        },
        "p": [
          {
            "en": "At-Tabari records, through Ibn Abi Najih, Mujahid's gloss on the verse: they say, when is the Day of Judgement, or, will the Day of Judgement come about? The second half turns the question inside out. On the surface the askers want a time. Underneath, according to this report, they doubt there is any such time at all. The when is a thin cover for a whether, and in their own minds the whether has already been settled against the Day.",
            "bn": "তাবারী ইবন আবী নাজীহের সূত্রে এ আয়াতের ব্যাখ্যায় মুজাহিদের কথা উদ্ধৃত করেন: তারা বলে, বিচারের দিন কবে, কিংবা, বিচারের দিন কি আদৌ হবে? দ্বিতীয় অংশটা প্রশ্নটাকে উল্টে দেয়। ওপরে ওপরে প্রশ্নকারীরা সময় জানতে চায়। এই বর্ণনা অনুযায়ী ভেতরে তারা সন্দেহ করে, এমন কোনো সময় আদৌ আছে কি না। কবে কথাটা আদৌ-র ওপর পাতলা একটা আবরণ। আর তাদের মনে আদৌ-র প্রশ্নটা আগেই মীমাংসা হয়ে গেছে, দিনটার বিপক্ষে।"
          },
          {
            "en": "This fits what the other commentators say. Istib'ad, the word used by al-Muyassar, Ibn Kathir and as-Sa'di, describes counting something far off and unlikely. Someone who counts the Day remote asks when it will come not to make ready but to underline how distant it seems. The question becomes a way of pushing the Day away while appearing to look towards it. That posture sits with the guessing for which 51:10 names these people, and at-Tabari, as noted, makes them the same people.",
            "bn": "অন্য তাফসীরকারেরা যা বলেন, এর সঙ্গে তা মিলে যায়। মুয়াসসার, ইবন কাসীর ও সা'দী যে ইসতিবআদ শব্দটি ব্যবহার করেন, তার মানে কোনো কিছুকে দূরের আর অসম্ভাব্য ধরে নেওয়া। যে দিনটাকে বহু দূরের মনে করে, সে কবে আসবে জিজ্ঞেস করে প্রস্তুতি নিতে নয়, বরং দিনটা কত দূরে তা জোর দিয়ে দেখাতে। প্রশ্নটা হয়ে দাঁড়ায় দিনটার দিকে তাকানোর ভান করে তাকে দূরে ঠেলে দেওয়ার উপায়। এই ভঙ্গি মিলে যায় সেই আন্দাজবাজির সঙ্গে, যার জন্য ৫১:১০ আয়াত তাদের নাম দিয়েছে। আর আগেই বলা হয়েছে, তাবারী দুই দলকে একই লোক বলে চিহ্নিত করেন।"
          },
          {
            "en": "Read against 51:6, the exchange is almost a dialogue. The surah states that the recompense is waqi', bound to happen. The kharrasun answer with when, and, in Mujahid's gloss, with whether. The Qur'an does not supply a date in reply. It had already supplied the certainty, and the question about timing does nothing to unsettle it. What the askers wanted was room to doubt, and the surah's opening oath had left them none.",
            "bn": "৫১:৬ আয়াতের পাশে রেখে পড়লে কথোপকথনের মতো লাগে। সূরা বলছে, প্রতিফল ওয়াকি, অর্থাৎ ঘটবেই। খাররাসূনরা জবাব দেয় কবে দিয়ে, আর মুজাহিদের ব্যাখ্যায়, আদৌ কি দিয়ে। জবাবে কুরআন কোনো তারিখ দেয় না। নিশ্চয়তা সে আগেই দিয়ে রেখেছে। সময় নিয়ে প্রশ্ন সেই নিশ্চয়তাকে একটুও নড়াতে পারে না। প্রশ্নকারীরা চাইছিল সন্দেহ করার মতো একটু জায়গা। সূরার শুরুর শপথ সেটুকুও রাখেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Between Question and Reply",
          "bn": "প্রশ্ন আর জবাবের মাঝে"
        },
        "p": [
          {
            "en": "As-Sa'di closes his short note on the verse with a sentence that looks ahead: so do not ask about their state and the evil of where they end up. He does not describe that end; he leaves it to the next verse. Verse 51:13 gives the reply, a day on which they will be tried upon the Fire, and this article leaves that verse to be read on its own. It is enough to notice that a question about when is met with a description of what.",
            "bn": "সা'দী এ আয়াতের ছোট্ট ব্যাখ্যা শেষ করেন সামনের দিকে ইঙ্গিত করা এক বাক্যে: তাদের অবস্থা আর তাদের পরিণতির মন্দ দিক নিয়ে আর জিজ্ঞেস করো না। সেই পরিণতির বর্ণনা তিনি দেন না, পরের আয়াতের হাতে ছেড়ে দেন। ৫১:১৩ আয়াত জবাব দেয়: সেদিন তাদের আগুনের ওপর পরীক্ষা করা হবে। সে আয়াত নিজের জায়গায় পড়ার জন্য রইল। এখানে শুধু এটুকু খেয়াল করার মতো: কবে-র প্রশ্নের জবাব আসে কী-র বর্ণনা দিয়ে।"
          },
          {
            "en": "Ma'arif al-Qur'an points to the turn that comes after. Following the mention of the disbelievers, it says, several verses describe the qualities of the righteous and the pleasant consequences of their righteousness. In 51:15 to 51:18 those people are among gardens and springs; before that they slept little of the night and sought forgiveness in the hours before dawn. On hadith, none of the commentaries fetched for this verse attaches a narration to it, so this article quotes none.",
            "bn": "এরপর যে মোড় আসে, মাআরিফুল কুরআন সেদিকে দৃষ্টি দেয়। কাফিরদের কথা বলার পর, তার ভাষায়, কয়েকটি আয়াত নেককারদের গুণাবলি আর তাদের নেকির সুন্দর পরিণতির কথা বলে। ৫১:১৫ থেকে ৫১:১৮ আয়াতে সেই মানুষেরা আছেন বাগান আর ঝর্ণার মাঝে। দুনিয়ায় তাঁরা রাতে অল্পই ঘুমাতেন, আর ভোরের আগের প্রহরে ইস্তিগফার করতেন। হাদীসের কথা বললে, এ আয়াতের জন্য আনা তাফসীরগুলোর কোনোটিই এর সঙ্গে কোনো বর্ণনা যুক্ত করেনি। তাই এ লেখায় কোনো হাদীস উদ্ধৃত করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Portrait, Not a Label",
          "bn": "ছবি আঁকা, তকমা দেওয়া নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what the text describes: a group the surah calls the kharrasun, who met the news of the Day with doubt and mockery, and whom al-Baghawi and Ma'arif al-Qur'an place among those who opposed the Prophet ﷺ in his lifetime. It licenses nothing against any living person or community. It gives nobody the right to label a neighbour, a relative or a whole people as these mockers, and it is no instrument for a reader's own contempt.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: সূরা যাদের খাররাসূন বলেছে, যারা সেই দিনের খবরের জবাব দিয়েছিল সন্দেহ আর ঠাট্টা দিয়ে। বাগাভী ও মাআরিফুল কুরআন তাদের গণ্য করেন নবী ﷺ-এর জীবদ্দশায় তাঁর বিরোধিতাকারীদের মধ্যে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। প্রতিবেশী, আত্মীয় বা গোটা কোনো জাতিকে এই বিদ্রূপকারীদের দলে ফেলার অধিকার এটি কাউকে দেয় না। পাঠকের নিজের তাচ্ছিল্য প্রকাশের হাতিয়ারও এ আয়াত নয়।"
          },
          {
            "en": "Nor does the verse condemn questions about the Last Day as such. Ibn Kathir's word only puts the fault in the motive: they say it only out of denial, obstinacy, doubt and treating it as remote. A believer who wonders about the Day out of fear or longing is not the subject here. What the verse exposes is narrower and more searching: a question used as a shield, asked so that the answer will never have to be lived by.",
            "bn": "শেষ দিবস নিয়ে প্রশ্ন করাকেও এ আয়াত সাধারণভাবে দোষী করে না। ইবন কাসীরের 'কেবল' শব্দটি দোষ রাখে উদ্দেশ্যের ঘাড়ে: তারা এ কথা বলে কেবল অস্বীকার, হঠকারিতা, সন্দেহ আর দিনটিকে দূরের ভাবা থেকে। যে মুমিন ভয়ে বা আকুলতায় সেই দিনের কথা ভাবেন, তিনি এখানে আলোচ্য নন। আয়াত যা ধরিয়ে দেয়, তা আরও সরু, আরও গভীরে খোঁচা দেওয়া জিনিস: ঢাল হিসেবে ব্যবহার করা প্রশ্ন, যা করা হয় যাতে জবাব অনুযায়ী কখনো জীবন চালাতে না হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning the Question Inward",
          "bn": "নিজের কাছে ফেরানো প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse is short enough to carry about, and its value for a reader lies in the mirror it holds up. The askers had the right words in their mouths. They even called the Day by its true name, the Day of din. What they lacked was any intention to be ready for it. Knowing the name of the Day, and talking about it, can sit alongside complete neglect of what it requires.",
            "bn": "আয়াতটি এত ছোট যে সহজেই মনে রাখা যায়। পাঠকের কাছে এর মূল্য সেই আয়নায়, যা সে সামনে তুলে ধরে। প্রশ্নকারীদের মুখে ঠিক শব্দই ছিল। দিনটাকে তারা তার আসল নামেই ডেকেছিল, দীনের দিন। তাদের যা ছিল না, তা হলো সেই দিনের জন্য তৈরি হওয়ার কোনো ইচ্ছা। দিনটার নাম জানা, তা নিয়ে কথা বলা, আর সেই দিন যা দাবি করে তা পুরোপুরি অবহেলা করা, এগুলো একসঙ্গেই চলতে পারে।"
          },
          {
            "en": "So the useful question is not when but how. When the Day is mentioned in a lecture, a recitation or a funeral, what does the reminder do to me? If it sends a person back to prayer, to repaying a debt, to mending a wrong, then the question has been asked in the right spirit. If it produces only talk about signs and dates, it has drifted towards the posture this verse describes. The surah answers when with what, and a reader can do the same.",
            "bn": "তাই কাজের প্রশ্নটা কবে নয়, কীভাবে। কোনো বয়ানে, তিলাওয়াতে বা জানাযায় যখন সেই দিনের কথা ওঠে, নসিহতটা আমার ভেতরে কী করে? যদি তা মানুষকে নামাযে ফেরায়, ঋণ শোধ করতে তাড়া দেয়, কোনো অন্যায় শুধরে নিতে বলে, তবে প্রশ্নটা ঠিক মন নিয়েই করা হয়েছে। আর যদি তা শুধু আলামত আর তারিখ নিয়ে আলাপ জন্ম দেয়, তবে তা সরে গেছে সেই ভঙ্গির দিকে, যার বর্ণনা এ আয়াতে আছে। সূরা কবে-র জবাব দেয় কী দিয়ে। পাঠকও তা-ই করতে পারেন।"
          },
          {
            "en": "The righteous described a few verses later are not shown asking about the date at all. They are shown at night, sleeping little, and at dawn, seeking forgiveness. Whatever they believed about the timing of the Day, it reached their nights before it reached their tongues. That is the quiet contrast the passage sets up, and it leaves every reader with a choice between the two ways of holding the same knowledge.",
            "bn": "কয়েক আয়াত পরে যে নেককারদের বর্ণনা আসে, তাদের তারিখ নিয়ে কোনো প্রশ্ন করতে দেখানো হয়নি। দেখানো হয়েছে রাতে, অল্প ঘুমে, আর ভোরে, ইস্তিগফাররত অবস্থায়। সেই দিনের সময় নিয়ে তাঁদের বিশ্বাস যা-ই হোক, তা তাঁদের জিভে পৌঁছানোর আগে পৌঁছে গিয়েছিল তাঁদের রাতগুলোতে। এই নীরব বৈপরীত্যই অংশটি গড়ে তোলে। আর একই জ্ঞানকে ধারণ করার দুই পথের মধ্যে বেছে নেওয়ার ভার প্রত্যেক পাঠকের হাতে রেখে যায়।"
          }
        ]
      }
    ]
  },
  "51:15": {
    "sections": [
      {
        "h": {
          "en": "One Day, Two Outcomes",
          "bn": "একই দিন, দুই পরিণতি"
        },
        "p": [
          {
            "en": "Surat adh-Dhariyat reaches this verse by way of a question. In 51:12 the deniers ask, ayyana yawmu d-din: when is the Day of Recompense? The reply in 51:13 gives no date. It gives a scene instead: the Day they are tried upon the Fire. Then 51:14 adds the words spoken to them there: taste your trial; this is what you used to seek to hasten. And with nothing in between comes the verse itself: inna al-muttaqina fi jannatin wa-'uyun, the people of taqwa are in gardens and springs.",
            "bn": "সূরা আয-যারিয়াত এ আয়াতে পৌঁছায় একটা প্রশ্নের পথ ধরে। ৫১:১২ আয়াতে অস্বীকারকারীরা জানতে চায়, আইয়ানা ইয়াওমুদ দীন: প্রতিফল দিবস কবে? ৫১:১৩ আয়াতের জবাবে কোনো তারিখ নেই, আছে একটা দৃশ্য। সেদিন তাদের আগুনের উপর পরীক্ষা করা হবে। ৫১:১৪ আয়াত জানায়, সেখানে তাদের বলা হবে: তোমাদের পরীক্ষার স্বাদ নাও, এটাই সেই জিনিস যার জন্য তোমরা তাড়াহুড়া করতে। তারপর মাঝখানে আর কিছু না এনেই আসে আয়াতটি: ইন্নাল মুত্তাকীনা ফী জান্নাতিন ওয়া উয়ূন। মুত্তাকীরা থাকবে বাগান আর ঝর্ণার মাঝে।"
          },
          {
            "en": "The commentators read the turn as a deliberate pairing. Al-Qurtubi opens his note with it: having mentioned the end of the disbelievers, He mentioned the end of the believers. Ibn Kathir makes the contrast concrete. The muttaqun, he says, will on the day of their return be in gardens and springs, unlike what those wretched ones are in: torment and exemplary punishment, burning and chains. Ma'arif al-Qur'an, closing its comment on the group that begins at 51:10, says that after the mention of the disbelievers several verses describe the qualities of the righteous and the pleasant results of their righteousness.",
            "bn": "এই মোড়টাকে তাফসীরকারেরা দেখেন ভেবেচিন্তে সাজানো জোড় হিসেবে। কুরতুবী তাঁর আলোচনা শুরুই করেন এ কথায়: কাফিরদের পরিণতির কথা বলার পর আল্লাহ মুমিনদের পরিণতির কথা বললেন। ইবন কাসীর তুলনাটা চোখের সামনে এনে দেন। তাঁর ভাষায়, মুত্তাকীরা তাদের ফিরে যাওয়ার দিনে থাকবে বাগান আর ঝর্ণার মাঝে। অথচ ওই হতভাগারা থাকবে আযাব আর দৃষ্টান্তমূলক শাস্তিতে, আগুনের দহনে আর শিকলে। মাআরিফুল কুরআন ৫১:১০ থেকে শুরু হওয়া আয়াতগুচ্ছের আলোচনা শেষ করে এ কথায়: কাফিরদের প্রসঙ্গের পর বেশ কয়েকটি আয়াত নেককারদের গুণ আর তাদের নেকির সুখকর পরিণতির কথা বলে।"
          },
          {
            "en": "One caution belongs here, because the passage speaks of a condemned group. 51:10 to 51:14 describe the end of those who spoke by guesswork, sat heedless and asked when the Day would come, and the verses describe what the text describes. They license nothing against any living person or community. No reader is given the right to place a neighbour among those tried upon the Fire, nor to settle himself among the gardens. The contrast is set before each listener as a question about his own conduct, and the verses that follow make that conduct specific.",
            "bn": "এখানে একটা সতর্কতা দরকার, কারণ অংশটিতে একটি দণ্ডিত দলের কথা আছে। ৫১:১০ থেকে ৫১:১৪ আয়াত বলে তাদের পরিণতির কথা, যারা আন্দাজে কথা বলত, উদাসীন হয়ে বসে থাকত আর জিজ্ঞেস করত দিনটা কবে আসবে। আয়াতগুলো ঠিক ততটুকুই বলে, যতটুকু পাঠে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো কিছুরই অনুমতি দেয় না। প্রতিবেশীকে আগুনের উপর পরীক্ষিতদের দলে ফেলার অধিকার কোনো পাঠকের নেই, নিজেকে বাগানের বাসিন্দা ধরে নেওয়ারও নেই। তুলনাটা প্রত্যেক শ্রোতার সামনে রাখা হয়েছে তার নিজের আমল নিয়ে প্রশ্ন হিসেবে। আর সেই আমল কেমন, পরের আয়াতগুলো তা খুলে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Line, Another Setting",
          "bn": "একই বাক্য, ভিন্ন প্রেক্ষাপট"
        },
        "p": [
          {
            "en": "These five Arabic words appear, letter for letter, at 15:45, and this series already has a page on that verse. The reading of jannat as orchards, the identification of the springs and a variant vowel in 'uyun are discussed there, with the commentators on that verse, and none of it is repeated here. A sentence the Qur'an repeats is not a duplicate page, though. Its setting changes what a reader notices, and the commentators' notes on 51:15 are their own, written for this place in this surah.",
            "bn": "এই পাঁচটি আরবি শব্দ হুবহু একই অক্ষরে আছে ১৫:৪৫ আয়াতেও, আর এ সিরিজে সেই আয়াতের আলাদা পাতা আছে। জান্নাতকে ফলের বাগান অর্থে পড়া, ঝর্ণা বলতে কী বোঝায় আর উয়ূন শব্দের একটি ভিন্ন স্বরে পড়ার কথা সেখানে সেই আয়াতের তাফসীর ধরে আলোচিত হয়েছে। এখানে তার কিছুই আবার বলা হবে না। তবে কুরআন কোনো বাক্য দুবার বললে দ্বিতীয়টা নকল পাতা হয়ে যায় না। প্রেক্ষাপট বদলালে পাঠকের চোখে পড়ে অন্য জিনিস। আর ৫১:১৫ আয়াতে তাফসীরকারদের কথাগুলোও তাঁদের নিজস্ব, এ সূরার এ জায়গার জন্যই লেখা।"
          },
          {
            "en": "Two things differ between the settings. In al-Hijr the verse answered Iblis's vow and the seven gates of Hell; here it answers a question about when, and the trial of those who asked it. The second difference is what comes after. As-Sa'di opens his note on this verse by saying that Allah speaks here of the reward of the muttaqun and of their deeds, the ones that brought them to that recompense. The reward is stated first, in a single line. The deeds follow, and they take several verses.",
            "bn": "দুই প্রেক্ষাপটে পার্থক্য দুটো। সূরা আল-হিজরে আয়াতটি এসেছিল ইবলিসের কসম আর জাহান্নামের সাতটি দরজার কথার জবাবে। এখানে তা আসে 'কবে' প্রশ্নের জবাবে, আর যারা প্রশ্নটা তুলেছিল তাদের পরীক্ষার পরে। দ্বিতীয় পার্থক্য হলো পরে কী আসে। সা'দী এ আয়াতের আলোচনা শুরু করেন এ কথা বলে যে, আল্লাহ এখানে মুত্তাকীদের পুরস্কারের কথা বলছেন, সঙ্গে তাদের সেই আমলের কথাও, যা তাদের এই প্রতিদান পর্যন্ত পৌঁছে দিয়েছে। পুরস্কারের কথা আসে আগে, এক লাইনে। আমলের কথা আসে পরে, আর তা চলে কয়েক আয়াত ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Worn Within, Worn Over",
          "bn": "ভেতরের কাপড়, উপরের চাদর"
        },
        "p": [
          {
            "en": "Who are al-muttaqin? At-Tabari answers with conduct and a place: those who were mindful of Allah by obeying Him and avoiding disobedience to Him in this world. Ibn Kathir calls them the muttaqun for Allah, Mighty and Majestic, and the Muyassar says simply those who were mindful of Allah. Al-Qurtubi, setting this verse against the ones before it, names them by their faith. Having spoken of the end of the disbelievers, he says, Allah spoke of the end of the believers. His word for the people of this verse is al-mu'minin.",
            "bn": "মুত্তাকী কারা? তাবারী জবাব দেন আমল আর জায়গা দিয়ে: যারা দুনিয়ায় আল্লাহর আনুগত্য করে আর তাঁর নাফরমানি থেকে দূরে থেকে তাঁকে ভয় করেছে। ইবন কাসীর তাদের বলেন মহান ও মহিমান্বিত আল্লাহর জন্য মুত্তাকী। মুয়াসসার শুধু বলে, যারা আল্লাহকে ভয় করেছে। কুরতুবী এ আয়াতকে আগের আয়াতগুলোর পাশে রেখে তাদের চেনান ঈমান দিয়ে। তাঁর কথায়, কাফিরদের পরিণতির কথা বলার পর আল্লাহ মুমিনদের পরিণতির কথা বললেন। এ আয়াতের মানুষদের জন্য তাঁর শব্দটি হলো আল-মু'মিনীন, মুমিনরা।"
          },
          {
            "en": "As-Sa'di offers an image instead of a definition. The muttaqun, he says, are those for whom taqwa was their shi'ar and obedience to Allah their dithar. Both are words for clothing: the shi'ar is the garment worn against the body, the dithar the one worn over it. On this reading taqwa is the layer closest to the person, unseen by others, and obedience is what covers it and shows. Each needs the other. An inner awareness with nothing over it, or an outward cover with nothing beneath, would be only half dressed.",
            "bn": "সা'দী সংজ্ঞা না দিয়ে একটা ছবি দেন। তাঁর ভাষায় মুত্তাকী তারা, তাকওয়া যাদের শি'আর আর আল্লাহর আনুগত্য যাদের দিসার। দুটোই পোশাকের নাম। শি'আর হলো গায়ের সঙ্গে লেগে থাকা ভেতরের কাপড়, দিসার তার উপরে পরা চাদর। এভাবে পড়লে তাকওয়া মানুষের সবচেয়ে কাছের স্তর, যা অন্য কেউ দেখে না। আর আনুগত্য সেটাকে ঢেকে রাখে, বাইরে থেকে দেখা যায়। একটা ছাড়া অন্যটা অসম্পূর্ণ। উপরে কিছু নেই এমন ভেতরের সচেতনতা, কিংবা নিচে কিছু নেই এমন বাইরের আবরণ, দুটোই আধখানা পোশাক।"
          },
          {
            "en": "The four glosses do not compete; they look at the same people from different sides. At-Tabari names two actions, doing and avoiding, and fixes them in this world. Al-Qurtubi names the faith from which they grow. As-Sa'di dresses the person in both layers at once. Read together, they make the title something a person can check in himself today: what he does, what he leaves, what he believes, and whether the inner garment is still there under the one that others can see.",
            "bn": "চারটি ব্যাখ্যা একে অন্যের প্রতিদ্বন্দ্বী নয়। একই মানুষদের তারা দেখে ভিন্ন ভিন্ন দিক থেকে। তাবারী দুটি কাজের নাম বলেন, করা আর বিরত থাকা, আর দুটোকেই বাঁধেন দুনিয়ার জীবনে। কুরতুবী বলেন সেই ঈমানের কথা, যেখান থেকে এসব কাজ জন্মায়। সা'দী মানুষটাকে একসঙ্গে দুই স্তরের পোশাক পরিয়ে দেন। সব মিলিয়ে পড়লে মুত্তাকী নামটা এমন কিছু হয়ে দাঁড়ায় যা আজই নিজের মধ্যে যাচাই করা যায়। আমি কী করছি, কী ছাড়ছি, কী বিশ্বাস করছি, আর অন্যরা যে পোশাক দেখে তার নিচে ভেতরের কাপড়টা এখনো আছে কি না।"
          }
        ]
      },
      {
        "h": {
          "en": "Gardens With No Counterpart",
          "bn": "যে বাগানের তুলনা নেই"
        },
        "p": [
          {
            "en": "Jannat is plural and indefinite. At-Tabari and al-Qurtubi both gloss it with basatin, orchards, and at-Tabari places them in the Hereafter. The Muyassar adds a single adjective, 'azima: great gardens. Ibn Kathir describes them no further in his note on this verse, and al-Baghawi gives the verse's words with no comment of his own. Most of the fetched texts therefore leave the gardens close to how the verse itself leaves them: a plural noun, without an article, and without a list attached.",
            "bn": "জান্নাত শব্দটি বহুবচন, আর অনির্দিষ্ট। তাবারী ও কুরতুবী দুজনেই এর অর্থ করেন বাসাতীন, অর্থাৎ ফলের বাগান। তাবারী সেগুলোর স্থান বলেন আখিরাত। মুয়াসসার যোগ করে মাত্র একটি বিশেষণ, আযীমা: বিশাল বাগান। ইবন কাসীর এ আয়াতের আলোচনায় এর বেশি কিছু বর্ণনা করেন না। বাগাভী শুধু আয়াতের শব্দগুলো উল্লেখ করেন, নিজের কোনো মন্তব্য যোগ করেন না। তাই যেসব তাফসীর আনা হয়েছে তার বেশিরভাগই বাগানকে রেখে দেয় প্রায় আয়াতের মতো করেই। একটি বহুবচন বিশেষ্য, নির্দিষ্টবাচক চিহ্ন ছাড়া, সঙ্গে কোনো ফর্দ নেই।"
          },
          {
            "en": "As-Sa'di alone describes, and his description reaches past what can be described. The gardens, he says, contain every kind of tree and fruit: those that have a counterpart in this world, and those that have none, of what eyes have never looked upon the like of, what ears have not heard, and what has not occurred to the hearts of the servants. The article adds nothing to his words and quotes them as his. Half of what he lists is defined only by the absence of anything to compare it with.",
            "bn": "শুধু সা'দীই বর্ণনা দেন, আর তাঁর বর্ণনা গিয়ে পৌঁছায় বর্ণনার সীমার ওপারে। তাঁর কথায়, বাগানগুলোতে আছে সব রকমের গাছ আর ফল। কিছু এমন, দুনিয়ায় যার তুলনা পাওয়া যায়। আর কিছু এমন, যার কোনো তুলনা নেই। এমন জিনিস, যার মতো কিছু কোনো চোখ কখনো দেখেনি, কোনো কান শোনেনি, বান্দাদের অন্তরে যার কল্পনাও আসেনি। এ লেখা তাঁর কথার সঙ্গে কিছুই যোগ করে না, কথাগুলো তাঁর নামেই উদ্ধৃত করে। লক্ষ করার মতো ব্যাপার হলো, তাঁর তালিকার অর্ধেকের পরিচয়ই এই যে তুলনা দেওয়ার মতো কিছু নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Water That the Gardens Drink",
          "bn": "যে পানি বাগান পান করে"
        },
        "p": [
          {
            "en": "'Uyun is the plural of 'ayn, a word that names both a spring and an eye. As-Sa'di's short note on this verse happens to use it both ways: the eyes that have never seen the like of these gardens, and the springs that run through them. On the springs themselves the glosses agree on water and differ on what they add. At-Tabari says 'uyun ma', springs of water, in the Hereafter. The Muyassar says 'uyun ma' jariya, springs of running water.",
            "bn": "উয়ূন শব্দটি আইন-এর বহুবচন। আইন মানে ঝর্ণা, আবার চোখও। এ আয়াতে সা'দীর ছোট্ট আলোচনায় শব্দটা দুই অর্থেই এসে গেছে। একবার সেই চোখ, যা এই বাগানের মতো কিছু কখনো দেখেনি। আরেকবার সেই ঝর্ণা, যা বাগানের ভেতর দিয়ে বয়ে যায়। ঝর্ণার ব্যাপারে ব্যাখ্যাগুলো পানির কথায় একমত, পার্থক্য শুধু তার সঙ্গে কে কী যোগ করেন তাতে। তাবারী বলেন উয়ূনু মা', পানির ঝর্ণা, আখিরাতে। মুয়াসসার বলে উয়ূনু মা'ইন জারিয়া, বহমান পানির ঝর্ণা।"
          },
          {
            "en": "Al-Qurtubi places the springs inside the gardens: orchards in which there are flowing springs, at the furthest limit of what anyone could take delight in. As-Sa'di calls them sariha, running freely, and then gives them two roles. The gardens drink from them, and the servants of Allah drink from them, making them gush forth abundantly, yufajjirunaha tafjiran. In his picture the water serves the land and the people alike, and it is the people themselves who are said to set it gushing.",
            "bn": "কুরতুবী ঝর্ণাগুলোকে রাখেন বাগানের ভেতরেই: এমন বাগান, যার মধ্যে বয়ে চলেছে ঝর্ণা, মানুষ যা উপভোগ করতে পারে তার শেষ সীমায়। সা'দী এগুলোকে বলেন সারিহা, অবাধে বয়ে চলা, তারপর এদের দুটি কাজের কথা বলেন। বাগান এগুলো থেকে পান করে, আর আল্লাহর বান্দারাও এগুলো থেকে পান করে। তারা নিজেরাই এগুলোকে প্রবলভাবে প্রবাহিত করে, ইউফাজ্জিরূনাহা তাফজীরা। তাঁর ছবিতে পানি একসঙ্গে মাটি আর মানুষ দুইয়েরই কাজে লাগে। আর সেই পানিকে উথলে বইয়ে দেয় মানুষ নিজেই।"
          },
          {
            "en": "These are differences of detail, not disagreements. At-Tabari and the Muyassar name the substance and its motion. Al-Qurtubi names the delight. As-Sa'di names who benefits and who acts. None of the commentators fetched for 51:15 ties these springs to named rivers or springs elsewhere in the Qur'an, and none cites another verse here, so the article leaves the springs as they stand: water, flowing, inside gardens, and for al-Qurtubi at the very limit of pleasure.",
            "bn": "এগুলো খুঁটিনাটির পার্থক্য, মতবিরোধ নয়। তাবারী আর মুয়াসসার বলেন বস্তুটা কী আর তা কীভাবে চলে। কুরতুবী বলেন আনন্দের কথা। সা'দী বলেন কে উপকার পায় আর কে বইয়ে দেয়। ৫১:১৫ আয়াতের জন্য আনা তাফসীরগুলোর কোনোটিই এই ঝর্ণাকে কুরআনের অন্য কোথাও নাম ধরে বলা কোনো নদী বা ঝর্ণার সঙ্গে মেলায় না। এখানে কেউ অন্য কোনো আয়াতের উদ্ধৃতিও দেন না। তাই এ লেখা ঝর্ণাগুলোকে রেখে দেয় যেমন আছে তেমন: বহমান পানি, বাগানের ভেতরে, আর কুরতুবীর কথায় আনন্দের একেবারে শেষ সীমায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where, Not When",
          "bn": "কবে নয়, কোথায়"
        },
        "p": [
          {
            "en": "In Arabic the verse has no verb. It is inna, a particle of emphasis, then the subject, al-muttaqin, then where they are: fi jannatin wa-'uyun. English translations supply will be, and the commentators supply the time. At-Tabari sets the two halves in two worlds: their taqwa was fi d-dunya, in this world, and the gardens and springs are fi l-akhira, in the Hereafter. Ibn Kathir says they will be there yawma ma'adihim, on the day of their return.",
            "bn": "আরবিতে আয়াতটির কোনো ক্রিয়া নেই। প্রথমে ইন্না, জোর দেওয়ার অব্যয়। তারপর কর্তা, আল-মুত্তাকীন। তারপর তারা কোথায়: ফী জান্নাতিন ওয়া উয়ূন। ইংরেজি অনুবাদ 'থাকবে' জুড়ে দেয়, আর সময়টা জুড়ে দেন তাফসীরকারেরা। তাবারী আয়াতের দুই অংশকে রাখেন দুই জগতে। তাদের তাকওয়া ছিল ফিদ দুনিয়া, এই দুনিয়ায়। আর বাগান ও ঝর্ণা ফিল আখিরাহ, আখিরাতে। ইবন কাসীর বলেন, তারা সেখানে থাকবে ইয়াওমা মাআদিহিম, তাদের ফিরে যাওয়ার দিনে।"
          },
          {
            "en": "The deniers' question in 51:12 began with ayyana, when. The verse answers a different question, where, and answers it without a tense, as a settled fact introduced by inna. Ibn Kathir's phrase also links the two groups quietly. 51:13 opens with yawma, the Day they are tried upon the Fire, and he places the muttaqun in the gardens on a yawm as well, the day of their return. One Day, on his reading, has two outcomes, and at-Tabari's gloss locates what decides between them earlier, in this world.",
            "bn": "৫১:১২ আয়াতে অস্বীকারকারীদের প্রশ্ন শুরু হয়েছিল আইয়ানা দিয়ে, মানে কবে। আয়াতটি জবাব দেয় অন্য এক প্রশ্নের, কোথায়। জবাবটাও আসে কোনো কাল ছাড়া, ইন্না দিয়ে শুরু হওয়া এক মীমাংসিত সত্য হিসেবে। ইবন কাসীরের কথাটা দুই দলকে নিঃশব্দে এক সুতোয় বাঁধে। ৫১:১৩ আয়াত শুরু হয় ইয়াওমা দিয়ে, যেদিন তাদের আগুনের উপর পরীক্ষা করা হবে। আর তিনিও মুত্তাকীদের বাগানে রাখেন একটি ইয়াওমেই, তাদের ফিরে যাওয়ার দিনে। তাঁর পাঠে দিন একটাই, পরিণতি দুটো। আর কোনটা কার ভাগে পড়বে, তাবারীর ব্যাখ্যা তার মীমাংসার জায়গা দেখায় আগেই, এই দুনিয়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Straight Into a List of Deeds",
          "bn": "সোজা আমলের তালিকায়"
        },
        "p": [
          {
            "en": "The verse heads a group, and the fetched texts read it that way. The Muyassar paraphrases 51:15 and 51:16 together: Allah gave them all they wished for of every kind of bliss, and they took it, content with it and glad at heart, for before that bliss they were muhsinin in this world through their righteous deeds. Ibn Kathir says the word akhidhin, taking, in 51:16 describes the state of the people of taqwa in the midst of the gardens and springs. That verse will need its own page.",
            "bn": "আয়াতটি একটি গুচ্ছের শুরু, আর আনা তাফসীরগুলো সেভাবেই পড়ে। মুয়াসসার ৫১:১৫ ও ৫১:১৬ আয়াতকে একসঙ্গে ব্যাখ্যা করে: আল্লাহ তাদের দিয়েছেন সব রকমের নিয়ামতের মধ্যে তারা যা চেয়েছে তার সবই। তারা তা গ্রহণ করেছে খুশি মনে, তৃপ্ত হয়ে। কারণ এই নিয়ামতের আগে দুনিয়ায় তারা নেক আমলের মাধ্যমে ছিল মুহসিন। ইবন কাসীর বলেন, ৫১:১৬ আয়াতের আখিযীন শব্দ, মানে গ্রহণকারী, বাগান আর ঝর্ণার মাঝে মুত্তাকীদের অবস্থা বোঝায়। সে আয়াতের জন্য আলাদা পাতা লাগবে।"
          },
          {
            "en": "After 51:16 the passage turns from what they receive to how they lived: little of the night spent in sleep in 51:17, forgiveness sought in the hours before dawn in 51:18, and in 51:19 a right in their wealth for the asker and the deprived. Each belongs to its own verse and is not developed here. No fetched commentary attaches a hadith to 51:15 itself; the narrations Ibn Kathir brings in this group are attached to 51:17, and they will be weighed there.",
            "bn": "৫১:১৬ আয়াতের পর অংশটি তারা কী পায় সে কথা থেকে সরে আসে তারা কীভাবে জীবন কাটাত সে কথায়। ৫১:১৭ আয়াতে রাতের অল্প সময় ঘুমে কাটানো, ৫১:১৮ আয়াতে ভোরের আগের প্রহরে ইস্তিগফার, আর ৫১:১৯ আয়াতে তাদের সম্পদে প্রার্থী ও বঞ্চিতের হক। প্রতিটির জায়গা নিজের আয়াতে, এখানে সেগুলো খুলে বলা হচ্ছে না। আনা তাফসীরগুলোর কোনোটিই ৫১:১৫ আয়াতের সঙ্গে কোনো হাদীস জুড়ে দেয় না। এ গুচ্ছে ইবন কাসীর যেসব বর্ণনা আনেন, সেগুলো ৫১:১৭ আয়াতের সঙ্গে যুক্ত, যাচাইও হবে সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Destination With a Road",
          "bn": "পথসহ এক গন্তব্য"
        },
        "p": [
          {
            "en": "Read in its place, the verse does something gentle with fear. The listener has just heard the words taste your trial, and a passage could have stopped there. Instead it names the other outcome in five words, and then spends four verses on how people reached it. Hope arrives as a destination with a road attached, not as relief alone. On at-Tabari's reading that road is walked in this world by obeying and avoiding; on as-Sa'di's it is worn as two garments, one hidden and one seen.",
            "bn": "নিজের জায়গায় রেখে পড়লে আয়াতটি ভয়ের সঙ্গে কোমল একটা আচরণ করে। শ্রোতা এইমাত্র শুনেছে, তোমাদের পরীক্ষার স্বাদ নাও। কথা চাইলে সেখানেই থামতে পারত। তা না করে পাঁচ শব্দে অন্য পরিণতির নাম বলা হলো, তারপর চারটি আয়াত ধরে বলা হলো মানুষ সেখানে কীভাবে পৌঁছেছে। আশা তাই শুধু স্বস্তি হয়ে আসে না, আসে পথসহ এক গন্তব্য হয়ে। তাবারীর পাঠে সেই পথে হাঁটতে হয় এই দুনিয়ায়, আনুগত্য করে আর নাফরমানি এড়িয়ে। সা'দীর পাঠে তা পরতে হয় দুই প্রস্থ পোশাকের মতো, একটা লুকানো, একটা দৃশ্যমান।"
          },
          {
            "en": "That gives a reader something to do the same day. Check the inner layer: is there awareness of Allah when no one is watching? Check the outer one: was a command kept today, and a prohibition left? And notice the habit 51:14 names in those it addresses: seeking to hasten the Day, as if it were a dare. The verse asks for the opposite posture, less curiosity about when and steady care about how. The gardens take one line to describe. The work of reaching them takes much longer, and it begins now.",
            "bn": "এ থেকে পাঠক আজই কিছু করার কাজ পান। ভেতরের স্তরটা যাচাই করুন: কেউ না দেখলেও কি আল্লাহর কথা মনে থাকে? বাইরেরটাও দেখুন: আজ কি কোনো হুকুম মেনেছি, কোনো নিষেধ ছেড়েছি? আর ৫১:১৪ আয়াত যাদের সম্বোধন করে, তাদের যে অভ্যাসের কথা বলে তা খেয়াল করুন। দিনটাকে তারা তাড়াতাড়ি চাইত, যেন সেটা কোনো চ্যালেঞ্জ। আয়াতটি চায় উল্টো মনোভাব: কবে, তা নিয়ে কৌতূহল কম, আর কীভাবে, তা নিয়ে অবিরাম যত্ন। বাগানের বর্ণনায় লাগে মাত্র একটা লাইন। সেখানে পৌঁছানোর কাজে লাগে অনেক বেশি, আর তা শুরু হয় এখনই।"
          }
        ]
      }
    ]
  },
  "51:20-21": {
    "sections": [
      {
        "h": {
          "en": "Where the Two Lines Fall",
          "bn": "দুই পঙ্‌ক্তি কোথায় বসেছে"
        },
        "p": [
          {
            "en": "Surah adh-Dhariyat opens with oaths and moves quickly to the Day that is coming. Then it describes the people who are ready for it: at 51:15 they are among gardens and springs, at 51:17 they used to sleep but little of the night, at 51:18 they sought forgiveness in the hours before dawn, and at 51:19 there was a due in their wealth for the one who asked and the one who was deprived. That is the portrait. Only then does the surah turn to the evidence.",
            "bn": "সূরা আয-যারিয়াত শুরু হয় শপথ দিয়ে, আর দ্রুতই এগিয়ে যায় আগত সেই দিনটির দিকে। এরপর সে বর্ণনা করে সেই মানুষদের যারা তার জন্য প্রস্তুত: 51:15 আয়াতে তারা জান্নাত ও ঝর্ণাধারার মাঝে, 51:17 আয়াতে তারা রাতে সামান্যই ঘুমাত, 51:18 আয়াতে ভোরের আগের প্রহরে ক্ষমা প্রার্থনা করত, আর 51:19 আয়াতে তাদের সম্পদে ছিল প্রার্থী ও বঞ্চিতের হক। এই হলো ছবিটা। এরপরই সূরাটি ফেরে প্রমাণের দিকে।"
          },
          {
            "en": "The order matters. The signs on the earth and in the self are not offered to settle an argument with a sceptic; they are placed just after a description of people who pray at night and give from their wealth. And 51:22 completes the sweep: in the heaven is your provision and whatever you are promised. Earth, then the self, then the sky. The reader is being walked around his own position and shown that there is no direction in which the evidence is absent.",
            "bn": "ক্রমটা গুরুত্বপূর্ণ। যমীনের ও নিজের ভেতরের নিদর্শনগুলো কোনো সন্দেহবাদীর সঙ্গে তর্ক মেটানোর জন্য পেশ করা হয়নি; সেগুলো রাখা হয়েছে ঠিক সেই মানুষদের বর্ণনার পরে, যারা রাতে নামায পড়ে ও সম্পদ থেকে দেয়। আর 51:22 আয়াত বৃত্তটি পূর্ণ করে: আকাশেই রয়েছে তোমাদের রিযিক আর তোমাদের যা প্রতিশ্রুতি দেওয়া হয়েছে। যমীন, তারপর নিজ সত্তা, তারপর আকাশ। পাঠককে তার নিজের অবস্থানের চারপাশে ঘুরিয়ে দেখানো হচ্ছে যে কোনো দিকেই প্রমাণের অভাব নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "One Sentence, Two Halves",
          "bn": "একটি বাক্য, দুটি অর্ধেক"
        },
        "p": [
          {
            "en": "In the Arabic, 51:21 does not repeat the word for signs. It reads simply wa fi anfusikum, and in your own selves, hanging on the clause before it. Grammatically the self is not a second topic; it is a second location for the same signs. Anyone splitting these two lines into separate lessons is cutting a sentence in half. What is on the earth and what is in you are being named in one breath as the same kind of evidence.",
            "bn": "আরবিতে 51:21 আয়াত 'নিদর্শন' শব্দটি আবার বলে না। সেখানে কেবল আছে ওয়া ফী আনফুসিকুম — আর তোমাদের নিজেদের মধ্যে — যা আগের বাক্যাংশের ওপর ঝুলে থাকে। ব্যাকরণগতভাবে নিজ সত্তা এখানে দ্বিতীয় কোনো প্রসঙ্গ নয়; এটি একই নিদর্শনের দ্বিতীয় ঠিকানা। যিনি এই দুই পঙ্‌ক্তিকে আলাদা দুটি শিক্ষায় ভাগ করেন, তিনি একটি বাক্যকে মাঝখান থেকে কাটছেন। যমীনে যা আছে আর তোমার ভেতরে যা আছে — একই নিঃশ্বাসে দুটিকে একই ধরনের প্রমাণ বলা হচ্ছে।"
          },
          {
            "en": "The person addressed also changes. 51:20 speaks about the muqinin in the third person, those settled in certainty; 51:21 turns and addresses you directly, and ends with a question: afala tubsirun, will you not then see? The closing verb is about looking, not about proving. The complaint the verse lodges is not that the evidence is thin. It is that a man can carry the evidence around inside his own skin for seventy years and never once look at it.",
            "bn": "সম্বোধিত ব্যক্তিও বদলে যায়। 51:20 আয়াত মুক্বিনীনদের কথা বলে তৃতীয় পুরুষে — যারা দৃঢ় প্রত্যয়ে থিতু; আর 51:21 আয়াত ঘুরে সরাসরি তোমাকেই সম্বোধন করে, এবং শেষ হয় একটি প্রশ্নে: আফালা তুবসিরূন — তবু কি তোমরা দেখবে না? শেষ ক্রিয়াপদটি দেখা নিয়ে, প্রমাণ করা নিয়ে নয়। আয়াতটির অভিযোগ এই নয় যে প্রমাণ কম। অভিযোগ হলো, একজন মানুষ সত্তর বছর ধরে নিজের চামড়ার ভেতরে প্রমাণটি বয়ে বেড়াতে পারে অথচ একবারও সেদিকে তাকায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Self as Evidence",
          "bn": "নিজ সত্তাই প্রমাণ"
        },
        "p": [
          {
            "en": "What the mufassirun draw out of anfusikum is deliberately wide: the making of the body and the fitting of each part to its use, the powers of the soul, the provision a person receives and the guidance he is offered. Their recurring observation is a simple one. A person is nearer to himself than to anything else in existence, and knows himself less carefully than he knows his own trade. The nearest sign is the one most reliably overlooked.",
            "bn": "আনফুসিকুম শব্দ থেকে মুফাসসিরগণ যা বের করেন তা ইচ্ছাকৃতভাবেই প্রশস্ত: দেহের গঠন ও প্রতিটি অঙ্গকে তার কাজের সঙ্গে মানিয়ে দেওয়া, আত্মার শক্তিগুলো, মানুষ যে রিযিক পায় এবং যে হিদায়াত তাকে দেওয়া হয়। তাঁদের বারবার বলা পর্যবেক্ষণটি সরল। অস্তিত্বের আর সবকিছুর চেয়ে মানুষ নিজের বেশি কাছে, অথচ নিজের পেশাকে যতটা যত্ন করে জানে নিজেকে ততটা নয়। সবচেয়ে কাছের নিদর্শনটিই সবচেয়ে নিশ্চিতভাবে চোখ এড়িয়ে যায়।"
          },
          {
            "en": "The verse invites this looking without prescribing a method, and the safest reflections are the plainest. You did not choose to be born, or when, or to whom. You cannot command your own sleep, or make yourself forget a thing on purpose, or produce a memory that will not come. 80:24 makes the same move with something even more ordinary, telling man to look at his food. The sign is not exotic. It is the person reading this line.",
            "bn": "আয়াতটি এই তাকানোর দাওয়াত দেয়, কিন্তু কোনো পদ্ধতি বেঁধে দেয় না; আর সবচেয়ে নিরাপদ চিন্তাগুলোই সবচেয়ে সাদামাটা। আপনি জন্ম নেওয়ার সিদ্ধান্ত নেননি, কখন জন্মাবেন তা-ও নয়, কার ঘরে তা-ও নয়। আপনি নিজের ঘুমকে হুকুম করতে পারেন না, ইচ্ছা করে কোনো কিছু ভুলে যেতে পারেন না, আর যে স্মৃতি আসছে না তাকে টেনে আনতেও পারেন না। 80:24 আয়াত আরও সাধারণ কিছু দিয়ে একই কাজ করে — মানুষকে বলে তার খাবারের দিকে তাকাতে। নিদর্শনটি দুর্লভ কিছু নয়। নিদর্শনটি এই লাইনটি যিনি পড়ছেন, তিনিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Horizons and Selves",
          "bn": "দিগন্ত আর নিজ সত্তা"
        },
        "p": [
          {
            "en": "This pairing of outward and inward is not unique to Surah adh-Dhariyat. 41:53 promises that He will show them His signs in the horizons and within themselves until it becomes clear to them that it is the truth. 30:8 asks whether they do not contemplate within themselves. The Quran keeps setting the two arenas together, and it never lets the outward one stand alone. Astronomy without self-examination is exactly the kind of knowledge these verses decline to praise.",
            "bn": "বাইরে ও ভেতরের এই জোড়া কেবল সূরা আয-যারিয়াতের নিজস্ব নয়। 41:53 আয়াত প্রতিশ্রুতি দেয় যে তিনি তাদের দেখাবেন তাঁর নিদর্শন দিগন্তে এবং তাদের নিজেদের মধ্যেও, যতক্ষণ না তাদের কাছে স্পষ্ট হয়ে যায় যে এটিই সত্য। 30:8 আয়াত জিজ্ঞেস করে, তারা কি তাদের নিজেদের মনে ভেবে দেখে না। কুরআন বারবার এই দুই ক্ষেত্রকে পাশাপাশি রাখে, আর বাইরেরটিকে কখনো একা দাঁড়াতে দেয় না। আত্মপরীক্ষা ছাড়া জ্যোতির্বিদ্যা ঠিক সেই ধরনের জ্ঞান, যার প্রশংসা এই আয়াতগুলো করে না।"
          },
          {
            "en": "The same surah later answers the question the invitation raises. If I look into myself, what am I looking for? 51:56 states it: I did not create the jinn and mankind except to worship Me. Reading the two together closes a circle. The self is offered as proof that there is a Maker, and then told what the Maker made it for. Investigation that stops before that second point has stopped one step short.",
            "bn": "এই দাওয়াত যে প্রশ্নটি তোলে, একই সূরা পরে তার উত্তর দেয়। নিজের ভেতরে তাকালে আমি কী খুঁজব? 51:56 আয়াত তা বলে দেয়: আমি জিন ও মানুষকে সৃষ্টি করেছি কেবল আমার ইবাদতের জন্য। দুটি একসঙ্গে পড়লে বৃত্তটি সম্পূর্ণ হয়। নিজ সত্তাকে পেশ করা হয় এই প্রমাণ হিসেবে যে একজন স্রষ্টা আছেন, আর তারপর বলে দেওয়া হয় সেই স্রষ্টা তাকে কী জন্য বানিয়েছেন। যে অনুসন্ধান দ্বিতীয় কথাটির আগেই থেমে যায়, সেটি এক ধাপ আগে থেমেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Attention, Not Argument",
          "bn": "মনোযোগ, তর্ক নয়"
        },
        "p": [
          {
            "en": "The practical shape of these two lines is unusually small. They do not ask for study; they ask for a pause. Take one faculty, one ordinary function of your own body or your own day, and hold it in view for a minute without moving on. Certainty grows that way far more reliably than by collecting arguments, which is presumably why the verse names the muqinin first and then asks the rest of us why we are not looking.",
            "bn": "এই দুই পঙ্‌ক্তির ব্যবহারিক রূপটি অস্বাভাবিক রকম ছোট। এগুলো পড়াশোনা চায় না; চায় একটু থামা। নিজের দেহের বা নিজের দিনের একটি শক্তি, একটি সাধারণ কাজ বেছে নিন, আর এক মিনিট সেটির দিকে তাকিয়ে থাকুন, পরের কিছুতে না গিয়ে। যুক্তি জমানোর চেয়ে এভাবেই দৃঢ় প্রত্যয় অনেক নিশ্চিতভাবে বাড়ে — সম্ভবত সে কারণেই আয়াতটি আগে মুক্বিনীনদের নাম নেয়, তারপর বাকিদের জিজ্ঞেস করে আমরা কেন তাকাচ্ছি না।"
          }
        ]
      }
    ]
  },
  "51:22": {
    "sections": [
      {
        "h": {
          "en": "Place First, Then the Thing",
          "bn": "আগে স্থান, তারপর বস্তু"
        },
        "p": [
          {
            "en": "Wa fis-sama'i rizqukum wa ma tu'adun: five words in Arabic, and the order of them is the first thing to notice. The sentence does not say your provision is in the heaven; it puts the location in front and the provision after it. Arabic allows that fronting, and the grammarians read it as the emphasis falling on whatever has been moved forward. Where the provision is kept, is the news being delivered.",
            "bn": "'ওয়া ফিস সামাই রিযকুকুম ওয়া মা তূআদূন' — আরবিতে পাঁচটি শব্দ, আর প্রথমে লক্ষ করার বিষয় তাদের ক্রম। বাক্যটি বলে না 'তোমাদের রিযক আকাশে আছে'; বরং স্থানটিকে সামনে বসায় আর রিযককে তার পরে। আরবি এই অগ্রবর্তীকরণের অনুমতি দেয়, আর ব্যাকরণবিদগণ পড়েন যে যাকে সামনে আনা হয় জোরটি তার উপরেই পড়ে। রিযক কোথায় রাখা আছে — সেটিই এখানে পরিবেশিত সংবাদ।"
          },
          {
            "en": "The verse is the third in a short sweep. 51:20 puts signs in the earth for those who are certain, 51:21 puts them in your own selves, and this verse lifts the eye once more. The person being addressed has been walked around his own position, and is now shown the one direction he cannot reach with his hands, and told that what he lives on is kept there.",
            "bn": "আয়াতটি একটি সংক্ষিপ্ত পরিক্রমার তৃতীয়টি। 51:20 যমীনে নিদর্শন রাখে দৃঢ়বিশ্বাসীদের জন্য, 51:21 রাখে তোমাদের নিজেদের ভেতরে, আর এই আয়াত চোখটি আরও একবার তুলে দেয়। যাকে সম্বোধন করা হচ্ছে তাকে তার নিজের অবস্থানের চারপাশে ঘুরিয়ে আনা হলো, তারপর দেখানো হলো একমাত্র সেই দিকটি যেখানে তার হাত পৌঁছায় না — আর বলা হলো, সে যা খেয়ে বাঁচে তা সেখানেই রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "The First Reading: Rain",
          "bn": "প্রথম ব্যাখ্যা: বৃষ্টি"
        },
        "p": [
          {
            "en": "The oldest gloss in the commentaries takes provision in the heaven to mean rain, because rain is what produces everything a person eats. Tafsir Ahsanul Bayaan states it in exactly those terms. The Quran makes the identification itself: 45:5 lists among its signs what Allah sends down from the sky of rizq, giving life by it to the earth after its death, and 2:22 says He brought out fruits by that water as provision for you.",
            "bn": "তাফসীরগুলোর প্রাচীনতম ব্যাখ্যাটি 'আকাশে রিযক' বলতে বোঝে বৃষ্টি, কারণ মানুষ যা কিছু খায় তার সবই বৃষ্টিই উৎপন্ন করে। তাফসীর আহসানুল বায়ান ঠিক এই ভাষাতেই কথাটি বলে। কুরআন নিজেই এই পরিচয়টি দেয়: 45:5 তার নিদর্শনগুলোর মধ্যে গণনা করে আল্লাহ আকাশ থেকে যে রিযক নামান তা, যা দিয়ে তিনি যমীনকে তার মৃত্যুর পর জীবিত করেন; আর 2:22 বলে, সেই পানি দিয়েই তিনি তোমাদের জীবিকার জন্য ফলমূল বের করেন।"
          },
          {
            "en": "Read that way the verse is not making a claim about the sky as a warehouse. It is naming the point in the chain at which the whole system stops being ours. Land can be bought, seed can be sown, labour can be hired and machinery can be maintained; the one input that decides whether any of it comes to anything is released from above, on a schedule nobody down here sets or negotiates.",
            "bn": "এভাবে পড়লে আয়াতটি আকাশকে কোনো গুদাম বলে দাবি করছে না। এটি শৃঙ্খলের সেই বিন্দুটির নাম বলছে যেখান থেকে গোটা ব্যবস্থাটি আর আমাদের থাকে না। জমি কেনা যায়, বীজ বোনা যায়, শ্রমিক নেওয়া যায়, যন্ত্রপাতি ঠিক রাখা যায়; কিন্তু এসবের কোনোটি আদৌ ফল দেবে কি না তা যে একটিমাত্র উপাদান ঠিক করে, তা উপর থেকে ছাড়া হয় — এমন এক সময়সূচিতে যা এখানকার কেউ নির্ধারণও করে না, তা নিয়ে দরও কষতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Second Reading: Written Above",
          "bn": "দ্বিতীয় ব্যাখ্যা: উপরে লেখা"
        },
        "p": [
          {
            "en": "The second line of interpretation takes the heaven as where the provision is decided rather than where it is stored. Al-Muyassar closes its comment on this verse by saying that all of it is written and decreed. 15:21 states the same in the Quran's own terms: there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.",
            "bn": "দ্বিতীয় ব্যাখ্যাধারাটি আকাশকে বোঝে সেই জায়গা হিসেবে যেখানে রিযক নির্ধারিত হয়, যেখানে তা জমা থাকে সেই জায়গা হিসেবে নয়। তাফসীর মুয়াসসার এই আয়াতের ব্যাখ্যা শেষ করে এই কথা বলে যে এর সবটাই লেখা ও নির্ধারিত। 15:21 একই কথা বলে কুরআনের নিজের ভাষায়: এমন কোনো জিনিস নেই যার ভাণ্ডার আমার কাছে নেই, আর আমি তা নামাই কেবল এক নির্দিষ্ট পরিমাণে।"
          },
          {
            "en": "The two readings are not rivals. Rain descends by a measure, and so does everything else. What the second reading adds is that the measure was fixed before the year began, which is the part that touches anxiety directly. A person can compete over a share whose size is still open. He cannot compete over one that has already been written down and is being released at an appointed rate.",
            "bn": "দুটি ব্যাখ্যা পরস্পরের প্রতিদ্বন্দ্বী নয়। বৃষ্টি নামে একটি পরিমাপে, আর বাকি সবকিছুও তাই। দ্বিতীয় ব্যাখ্যাটি যা যোগ করে তা হলো, পরিমাপটি বছর শুরু হওয়ার আগেই স্থির হয়ে গেছে — আর এই অংশটিই দুশ্চিন্তায় সরাসরি হাত দেয়। যে ভাগের আকার এখনো খোলা, মানুষ তা নিয়ে প্রতিযোগিতা করতে পারে। কিন্তু যা আগেই লিখে রাখা হয়েছে এবং নির্ধারিত হারে ছাড়া হচ্ছে, তা নিয়ে প্রতিযোগিতা চলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "And Whatever You Are Promised",
          "bn": "আর যার প্রতিশ্রুতি তোমাদের দেওয়া হয়েছে"
        },
        "p": [
          {
            "en": "The verse does not stop at bread. Wa ma tu'adun, and whatever you are promised, is joined to provision by a single conjunction and located in the same place. Al-Muyassar spells out the range: good and evil, reward and punishment, all of it written and decreed. The surah had opened on that promise, with 51:5 saying that what you are promised is true and 51:6 that the recompense is to occur.",
            "bn": "আয়াতটি রুটিতে থেমে থাকে না। 'ওয়া মা তূআদূন' — আর যার প্রতিশ্রুতি তোমাদের দেওয়া হয়েছে — একটিমাত্র সংযোজক দিয়ে রিযকের সঙ্গে জোড়া, আর একই জায়গায় স্থাপিত। তাফসীর মুয়াসসার পরিধিটি খুলে বলে: কল্যাণ ও অকল্যাণ, পুরস্কার ও শাস্তি — সবই লেখা ও নির্ধারিত। সূরাটি সেই প্রতিশ্রুতি দিয়েই শুরু হয়েছিল: 51:5 বলে তোমাদের যার প্রতিশ্রুতি দেওয়া হয়েছে তা সত্য, আর 51:6 বলে কর্মফল অবশ্যই ঘটবে।"
          },
          {
            "en": "Putting the two into one sentence is the verse's real work. Most people file next month's income and the Day of Judgement in separate parts of the mind, treat one as urgent and the other as distant, and worry over them at completely different intensities. This verse says both are held by the same One, in the same place, on the same terms. Neither of them is any nearer to your control than the other.",
            "bn": "দুটিকে একই বাক্যে রাখাই আয়াতটির আসল কাজ। বেশিরভাগ মানুষ আগামী মাসের আয় আর কিয়ামতের দিনকে মনের আলাদা আলাদা তাকে তুলে রাখে, একটিকে জরুরি ও অন্যটিকে দূরবর্তী মনে করে, আর সম্পূর্ণ ভিন্ন মাত্রায় দুশ্চিন্তা করে। এই আয়াত বলে, দুটোই একই সত্তার হাতে, একই জায়গায়, একই শর্তে। আপনার নিয়ন্ত্রণের কাছাকাছি দুটোর একটিও অন্যটির চেয়ে বেশি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Oath That Follows",
          "bn": "এরপর যে শপথ"
        },
        "p": [
          {
            "en": "51:23 comes next and it is unusually forceful: then by the Lord of the heaven and the earth, indeed it is truth, just as it is that you are speaking. The oath is sworn by the Lord of exactly the two places this passage has been touring. And the comparison chosen is not a remote certainty; it is the reader's own act of speech, going on in his mouth at the moment he doubts.",
            "bn": "এরপর আসে 51:23, আর তা অস্বাভাবিক রকম জোরালো: আকাশ ও যমীনের প্রতিপালকের শপথ, নিশ্চয়ই এটি সত্য — ঠিক যেমন সত্য এই যে তোমরা কথা বলছ। শপথটি নেওয়া হয়েছে ঠিক সেই দুটি জায়গার প্রতিপালকের নামে, এই অংশটি যেগুলো ঘুরে দেখাচ্ছিল। আর যে তুলনাটি বেছে নেওয়া হলো তা দূরের কোনো নিশ্চয়তা নয়; তা পাঠকের নিজেরই কথা বলার কাজ, যা তার সংশয়ের মুহূর্তেই তার মুখে চলছে।"
          },
          {
            "en": "The surah finishes the thought at 51:57-58, where Allah says He wants no provision from His creatures and names Himself ar-Razzaq, the Provider, possessed of firm strength. Between the two ends stands 51:19, where a due for the beggar and the deprived sits inside the wealth of the righteous. People who believe their portion is kept above them hold it loosely. That, and not idleness, is what this verse changes.",
            "bn": "সূরাটি চিন্তাটি শেষ করে 51:57-58-এ, যেখানে আল্লাহ বলেন তিনি তাঁর সৃষ্টির কাছ থেকে কোনো রিযক চান না, আর নিজের নাম বলেন আর-রাযযাক — রিযকদাতা, প্রবল শক্তির অধিকারী। দুই প্রান্তের মাঝখানে দাঁড়িয়ে আছে 51:19, যেখানে সৎকর্মশীলদের সম্পদের ভেতরেই যাচ্ঞাকারী ও বঞ্চিতের একটি অধিকার বসানো। যারা বিশ্বাস করে তাদের ভাগটি উপরে রাখা আছে, তারা তা আলগা হাতে ধরে। এই আয়াত সেটিই বদলায়, অলসতা নয়।"
          }
        ]
      }
    ]
  },
  "51:28": {
    "sections": [
      {
        "h": {
          "en": "Hands That Stayed Still",
          "bn": "যে হাত খাবারে নড়েনি"
        },
        "p": [
          {
            "en": "The verse picks up a scene in mid-motion. In 51:27 Ibrahim (AS) has set a fat calf close to his guests and asked, ala ta'kulun, will you not eat? Then comes fa-awjasa minhum khifa: so he felt a fear of them. The verse itself never says the guests held back; the commentators supply the missing step. Al-Muyassar opens with it: when he saw them not eating, he sensed in himself a fear of them. As-Sa'di puts it in the words of another surah: when he saw their hands not reaching the food.",
            "bn": "আয়াতটি শুরু হয় চলমান এক দৃশ্যের মাঝখান থেকে। ৫১:২৭ আয়াতে ইবরাহীম (আঃ) মোটাতাজা বাছুরটি মেহমানদের একেবারে সামনে রেখে জিজ্ঞেস করেছেন, আলা তা'কুলূন, আপনারা খাবেন না? তারপর আসে ফা-আওজাসা মিনহুম খীফাহ: তখন তিনি তাদের থেকে ভয় অনুভব করলেন। মেহমানেরা যে খাননি, সে কথা আয়াত নিজে বলে না। মাঝের ফাঁকটা পূরণ করেন তাফসীরকারেরা। মুয়াসসার শুরুতেই বলে: তিনি যখন দেখলেন তারা খাচ্ছে না, মনের ভেতরে তাদের ব্যাপারে ভয় টের পেলেন। সা'দী একই কথা বলেন অন্য সূরার ভাষায়: যখন দেখলেন তাদের হাত খাবার পর্যন্ত পৌঁছাচ্ছে না।"
          },
          {
            "en": "In Arabic the verse runs to nine words, and they make three moves. First a fear held inside. Then a reply, la takhaf, do not fear. Then glad tidings, wa-bashsharuhu bi-ghulamin 'alim, and they gave him the good news of a knowing boy. What follows belongs to other verses: his wife's cry and the guests' answer to her in 51:29 and 51:30, and his question about their errand from 51:31 onward. This article stays with the fear, the comfort and the promised son, and points to the rest.",
            "bn": "আরবিতে আয়াতটি ৯টি শব্দের, আর এই শব্দগুলো তিনটি ধাপে এগোয়। প্রথমে মনের ভেতরে চেপে রাখা ভয়। তারপর জবাব, লা তাখাফ, ভয় পাবেন না। তারপর সুসংবাদ, ওয়া বাশশারূহু বিগুলামিন আলীম, আর তারা তাঁকে এক জ্ঞানী ছেলের সুখবর দিল। এর পরের অংশ অন্য আয়াতের। স্ত্রীর চিৎকার আর তাঁকে দেওয়া মেহমানদের জবাব আছে ৫১:২৯ ও ৫১:৩০ আয়াতে, আর তাদের আসার উদ্দেশ্য নিয়ে তাঁর প্রশ্ন শুরু হয় ৫১:৩১ থেকে। এ লেখা থাকবে ভয়, সান্ত্বনা আর প্রতিশ্রুত পুত্রকে ঘিরে। বাকিগুলোর দিকে থাকবে কেবল ইশারা।"
          }
        ]
      },
      {
        "h": {
          "en": "Awjasa: Fear Held Within",
          "bn": "আওজাসা: বুকে চাপা ভয়"
        },
        "p": [
          {
            "en": "The commentators read awjasa as a fear felt inside rather than shown. At-Tabari's gloss: Ibrahim felt in himself a fear of his guests, wa-admaraha, and kept it hidden. Al-Qurtubi's first explanation is close: he sensed in himself a fear of them, ahassa minhum fi nafsihi khawfan. Al-Muyassar uses the same verb, ahassa, and the same place, fi nafsihi, in himself. So the three agree on where the fear sat. It was a stirring within him, not a word spoken to the guests and not a step back from the table.",
            "bn": "তাফসীরকারেরা আওজাসা বুঝেছেন এমন ভয় হিসেবে, যা ভেতরে টের পাওয়া যায়, বাইরে দেখানো হয় না। তাবারীর ব্যাখ্যা: ইবরাহীম মনে মনে মেহমানদের ব্যাপারে ভয় পেলেন, ওয়া আদমারাহা, আর তা গোপন রাখলেন। কুরতুবীর প্রথম ব্যাখ্যাও কাছাকাছি: তিনি নিজের ভেতরে তাদের থেকে ভয় টের পেলেন, আহাসসা মিনহুম ফী নাফসিহী খাওফান। মুয়াসসারও একই ক্রিয়া আহাসসা আর একই জায়গা ফী নাফসিহী, অর্থাৎ নিজের মনে, ব্যবহার করেছে। ভয়টা কোথায় ছিল, এ নিয়ে তিনজনই একমত। ভেতরের একটা আলোড়ন, মেহমানদের উদ্দেশে বলা কোনো কথা নয়, দস্তরখান থেকে পিছিয়ে যাওয়াও নয়।"
          },
          {
            "en": "Yet the guests answered it. Al-Qurtubi writes that when they saw what was on Ibrahim of fear, they said la takhaf, and made known to him that they were angels of Allah and His messengers. At-Tabari has the fear concealed; al-Qurtubi has it seen. Neither explains how a hidden feeling came into view, and the verse does not stop to say. It moves straight from his fear to their reply, as if the comfort was ready before he could voice anything, and that order is worth noticing.",
            "bn": "তবু মেহমানেরা সেই ভয়ের জবাব দিলেন। কুরতুবী লেখেন, ইবরাহীমের মধ্যে ভয়ের ছাপ দেখে তারা বলল লা তাখাফ, আর জানিয়ে দিল যে তারা আল্লাহর ফেরেশতা ও তাঁর প্রেরিত দূত। তাবারীর কথায় ভয়টা গোপন, কুরতুবীর কথায় তা চোখে পড়েছে। লুকানো অনুভূতি কীভাবে চোখে পড়ল, দুজনের কেউই তা ব্যাখ্যা করেননি। আয়াতও সেখানে থামে না। তাঁর ভয় থেকে সোজা চলে যায় তাদের জবাবে, যেন তিনি কিছু বলার আগেই সান্ত্বনা তৈরি ছিল। এই ক্রমটা খেয়াল করার মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "What an Untouched Plate Meant",
          "bn": "না-ছোঁয়া খাবারের ভাষা"
        },
        "p": [
          {
            "en": "Why should a meal left alone cause fear? Al-Qurtubi gives a second explanation, introduced with qila, it is said: he concealed the fear because they did not bind themselves to him through his food, lam yatahharramu bi-ta'amihi. He then states the custom behind it: it is among people's ways that whoever takes a man's food, that man is safe from him. On this reading the plate was a pledge. A guest who ate entered a bond with the host; a guest who refused left the bond unmade.",
            "bn": "খাবার না ছোঁয়ায় ভয় কেন? কুরতুবী দ্বিতীয় একটি ব্যাখ্যা আনেন 'কীলা', অর্থাৎ 'বলা হয়' কথাটি দিয়ে। তিনি ভয় গোপন রেখেছিলেন, কারণ তারা তাঁর খাবারের মাধ্যমে তাঁর সঙ্গে নিরাপত্তার বন্ধনে আসেনি, লাম ইয়াতাহাররামূ বিতা'আমিহী। এর পেছনের রীতিটাও তিনি বলে দেন। মানুষের চালচলনে আছে, কেউ কারও খাবার খেলে সেই লোক তার দিক থেকে নিরাপদ থাকে। এই ব্যাখ্যায় খাবারের থালা যেন এক অঙ্গীকার। যে মেহমান খায়, সে মেজবানের সঙ্গে এক বন্ধনে ঢুকে পড়ে। যে খায় না, বন্ধনটা অপূর্ণ থেকে যায়।"
          },
          {
            "en": "Ma'arif al-Qur'an describes the same custom at more length. In those days, it says, noble people entertained guests who were expected to accept the host's hospitality. If they did not, the host would become apprehensive that some danger was afoot, that these were perhaps enemies come to cause trouble. Even rogues and wrongdoers, it adds, kept the noble habit of not harming anyone whose food they had eaten. So refusing to eat was a sign of hostility or danger, and it was this sign that Ibrahim (AS) read.",
            "bn": "মাআরিফুল কুরআন একই রীতি আরও খুলে বলে। সেকালে সম্ভ্রান্ত লোকেরা মেহমানদারি করতেন, আর আশা করা হতো মেহমান সেই আপ্যায়ন গ্রহণ করবে। গ্রহণ না করলে মেজবানের মনে আশঙ্কা জাগত যে কোনো বিপদ ঘনিয়ে আসছে, হয়তো এরা শত্রু, কোনো ঝামেলা বাধাতে এসেছে। সেখানে আরও বলা হয়, এমনকি দুর্বৃত্ত আর অন্যায়কারীদের মধ্যেও এই ভদ্র অভ্যাস ছিল যে যার খাবার খেয়েছে তার ক্ষতি করত না। তাই খেতে অস্বীকার করা ছিল শত্রুতা বা বিপদের আলামত। ইবরাহীম (আঃ) এই আলামতটাই পড়েছিলেন।"
          },
          {
            "en": "Both explanations rest on what such a refusal ordinarily meant, not on anything strange in Ibrahim himself. His guests were strangers; 51:25 has him say qawmun munkarun, a people unknown. They had entered, greeted, been served the best of the house, and then left the food untouched. Al-Qurtubi and Ma'arif al-Qur'an both trace the fear to that sequence and that custom. The reader who knows how the story ends may forget that, at this moment in the scene, the host did not yet know who sat at his table.",
            "bn": "দুই ব্যাখ্যাই দাঁড়িয়ে আছে এমন প্রত্যাখ্যানের সাধারণ অর্থের উপর, ইবরাহীমের নিজের মধ্যে অস্বাভাবিক কিছুর উপর নয়। মেহমানেরা ছিল অচেনা। ৫১:২৫ আয়াতে তিনি বলেন কাওমুন মুনকারূন, অপরিচিত লোক। তারা ঢুকেছে, সালাম দিয়েছে, ঘরের সেরা খাবার পেয়েছে, তারপর খাবার না ছুঁয়ে বসে থেকেছে। কুরতুবী আর মাআরিফুল কুরআন দুজনেই ভয়ের উৎস খুঁজে পান এই ঘটনাক্রম আর এই রীতির মধ্যে। কাহিনির শেষটা যে পাঠক জানেন, তিনি ভুলে যেতে পারেন যে দৃশ্যের এই মুহূর্তে মেজবান তখনও জানতেন না তাঁর দস্তরখানে কারা বসে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Surah Hud Fills the Gap",
          "bn": "সূরা হূদে বাকি অংশ"
        },
        "p": [
          {
            "en": "Ibn Kathir reads this verse through the telling of the same story in Surah Hud. Fa-awjasa minhum khifa, he says, is referred back to what came earlier there, and he quotes 11:70: when he saw their hands not reaching for it, nakirahum, he found them strange, and he felt a fear of them; they said, do not fear, we have been sent to the people of Lut. The same three Arabic words appear in both places, and Hud names the cause that 51:28 leaves unsaid. Al-Qurtubi also refers the reader back to his discussion in Hud.",
            "bn": "ইবন কাসীর এ আয়াত পড়েন সূরা হূদে একই কাহিনির বর্ণনার আলোয়। তাঁর মতে ফা-আওজাসা মিনহুম খীফাহ কথাটিকে সেখানে আগে যা এসেছে তার দিকে ফিরিয়ে বুঝতে হবে। তিনি ১১:৭০ উদ্ধৃত করেন: যখন তিনি দেখলেন তাদের হাত খাবারের দিকে যাচ্ছে না, নাকিরাহুম, তাদের অচেনা ঠেকল, আর তিনি তাদের থেকে ভয় অনুভব করলেন। তারা বলল, ভয় পাবেন না, আমাদের লূতের কওমের কাছে পাঠানো হয়েছে। আরবি তিনটি শব্দ দুই জায়গাতেই হুবহু আছে। ৫১:২৮ যে কারণটা বলেনি, হূদ সেটার নাম দিয়েছে। কুরতুবীও পাঠককে হূদ সূরায় তাঁর আলোচনার দিকে পাঠান।"
          },
          {
            "en": "Ibn Kathir carries the quotation on through 11:71, where the wife is standing by and the angels give her the tidings of Ishaq and, after Ishaq, Ya'qub, and through her astonishment in 11:72 and 11:73. That, he says, is why Allah says here, wa-bashsharuhu bi-ghulamin 'alim. In Hud the news is told to her; here it is told to him. His reconciling sentence is simple: the tidings to him are tidings to her, because the child is from the two of them, so each was given the news. Her own reaction in this surah is the next verse's subject.",
            "bn": "ইবন কাসীর উদ্ধৃতি টেনে নিয়ে যান ১১:৭১ পর্যন্ত। সেখানে স্ত্রী পাশে দাঁড়িয়ে, আর ফেরেশতারা তাঁকে ইসহাকের এবং ইসহাকের পরে ইয়াকূবের সুসংবাদ দেন। তারপর ১১:৭২ ও ১১:৭৩ আয়াতে তাঁর বিস্ময়। ইবন কাসীর বলেন, এ কারণেই আল্লাহ এখানে বলেছেন ওয়া বাশশারূহু বিগুলামিন আলীম। হূদে সুখবরটা দেওয়া হয়েছে স্ত্রীকে, এখানে স্বামীকে। দুটোকে তিনি মিলিয়ে দেন এক সহজ কথায়: তাঁকে দেওয়া সুখবর আসলে স্ত্রীরও সুখবর, কারণ সন্তান দুজনেরই, তাই দুজনকেই খবরটা দেওয়া হয়েছে। এই সূরায় স্ত্রীর নিজের প্রতিক্রিয়া পরের আয়াতের বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Comfort Joined to Disclosure",
          "bn": "সান্ত্বনার সঙ্গে পরিচয়"
        },
        "p": [
          {
            "en": "La takhaf is not left standing alone in the commentaries. Al-Muyassar gives the guests' words as: do not fear, we are messengers of Allah. Al-Qurtubi says they made known to him that they were angels of Allah and His messengers, and as-Sa'di that they told him what they had come for. The fear is met by a disclosure as well as a soothing word. Ibn Kathir's abridged commentary on the passage names them as three angels, Jibril, Mika'il and Israfil, who came in the form of handsome young men, which he gives as the reason Ibrahim called them a people unknown.",
            "bn": "তাফসীরে লা তাখাফ কথাটি একা দাঁড়িয়ে থাকে না। মুয়াসসার মেহমানদের কথা এভাবে বলে: ভয় পাবেন না, আমরা আল্লাহর প্রেরিত দূত। কুরতুবী বলেন, তারা তাঁকে জানিয়ে দিল যে তারা আল্লাহর ফেরেশতা ও তাঁর দূত। সা'দী বলেন, তারা কী কাজে এসেছে তা তাঁকে জানাল। ভয়ের জবাব এল শুধু সান্ত্বনার কথায় নয়, পরিচয় খুলে দেওয়ার মধ্য দিয়েও। ইবন কাসীরের সংক্ষিপ্ত তাফসীর এ অংশের আলোচনায় তাদের নাম বলে: তিনজন ফেরেশতা, জিবরীল, মীকাঈল ও ইসরাফীল, এসেছিলেন সুদর্শন যুবকের রূপে। তাঁর মতে এ কারণেই ইবরাহীম তাদের বলেছিলেন অপরিচিত লোক।"
          },
          {
            "en": "The same abridged commentary draws manners of hospitality from the two verses before this one. Ibrahim brought the food quickly, before the guests knew it was being prepared, without first announcing the favour. He brought the best he had, a young, fat roasted calf. He set it close to them rather than calling them over to it, and he did not order them to eat but asked gently, will you not eat? Ibn Kathir likens it to saying to a guest, would you be so kind as to do such and such.",
            "bn": "একই সংক্ষিপ্ত তাফসীর এর আগের দুই আয়াত থেকে মেহমানদারির আদব বের করে আনে। ইবরাহীম খাবার আনলেন দ্রুত, মেহমানেরা টের পাওয়ার আগেই, আগে থেকে অনুগ্রহের ঘোষণা না দিয়ে। তিনি আনলেন নিজের কাছে থাকা সবচেয়ে ভালোটা, কচি মোটাতাজা ভুনা বাছুর। তাদের ডেকে খাবারের কাছে নেননি, খাবারই তাদের কাছে রেখেছেন। খেতে হুকুমও করেননি, নরম সুরে জিজ্ঞেস করেছেন, আপনারা খাবেন না? ইবন কাসীর একে তুলনা করেন মেহমানকে এভাবে বলার সঙ্গে: আপনি কি দয়া করে অমুক কাজটা করবেন?"
          },
          {
            "en": "Al-Qurtubi relays a related report as the saying of 'Amr ibn Dinar. The angels said, we eat only for a price. Ibrahim said, eat, and pay its price. They asked, what is its price? He said, that you name Allah when you eat and praise Him when you finish. They looked at one another and said, for this Allah took you as His intimate friend. No chain to the Prophet ﷺ or a Companion appears in the text fetched here, so it stands as a report al-Qurtubi relays, not as a hadith.",
            "bn": "কুরতুবী আমর ইবন দীনারের কথা হিসেবে এ প্রসঙ্গে একটি বর্ণনা আনেন। ফেরেশতারা বলল, আমরা দাম ছাড়া খাই না। ইবরাহীম বললেন, খান, আর এর দাম দিয়ে দিন। তারা জিজ্ঞেস করল, এর দাম কী? তিনি বললেন, খাওয়ার শুরুতে আল্লাহর নাম নেবেন, শেষ করে তাঁর প্রশংসা করবেন। তারা একে অপরের দিকে তাকিয়ে বলল, এ জন্যই আল্লাহ আপনাকে খলীল, অন্তরঙ্গ বন্ধু বানিয়েছেন। এখানে আনা লেখায় নবী ﷺ বা কোনো সাহাবী পর্যন্ত কোনো সনদ নেই। তাই এটি কুরতুবীর উদ্ধৃত একটি বর্ণনা, হাদীস নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge Not Yet Born",
          "bn": "জন্মের আগেই জ্ঞানের খবর"
        },
        "p": [
          {
            "en": "The boy is promised before he exists, and so is his knowledge. At-Tabari explains 'alim as knowing once he has grown, 'alim idha kabura. He then reports a note from the grammarian al-Farra': some of the elders said that of someone in whom knowledge is awaited, one says he will be knowing before long, and likewise of a future chief and a future man of generosity. Al-Farra' judged that usage good, and added that the verse's own form is also good Arabic, which Allah has used in 'alim, hakim and mayyit.",
            "bn": "ছেলেটির অস্তিত্বের আগেই তার প্রতিশ্রুতি এসেছে, তার জ্ঞানের প্রতিশ্রুতিও। তাবারী আলীমের ব্যাখ্যা দেন: বড় হলে জ্ঞানী হবে, আলিমুন ইযা কাবুরা। তারপর তিনি ব্যাকরণবিদ ফাররার একটি মন্তব্য আনেন। কিছু প্রবীণ বলতেন, যার মধ্যে জ্ঞানের অপেক্ষা আছে, তার সম্পর্কে বলা হয় সে অচিরেই জ্ঞানী হবে। ভবিষ্যৎ নেতা আর ভবিষ্যৎ দানশীল মানুষের বেলায়ও এমন বলা হয়। ফাররা এই প্রয়োগকে ভালো বলেছেন, আর যোগ করেছেন যে আয়াতের নিজের রূপটিও সুন্দর আরবি, যা আল্লাহ ব্যবহার করেছেন আলীম, হাকীম ও মাইয়িত শব্দে।"
          },
          {
            "en": "Al-Qurtubi gives the content of that knowledge: after reaching maturity the boy will be among those who know Allah and His religion. Al-Muyassar says nearly the same, that the child will be among the people of knowledge of Allah and His religion. So the commentators fetched here read 'alim as a promise about the grown man, not a description of an infant. None of them glosses the word as prophethood. The Qur'an does call Ishaq a prophet in 37:112, which al-Qurtubi quotes for another purpose, but that is the other verse's statement, not their gloss on this word.",
            "bn": "সেই জ্ঞান কিসের, কুরতুবী তা বলে দেন: সাবালক হওয়ার পর ছেলেটি আল্লাহ ও তাঁর দ্বীন সম্পর্কে জ্ঞানীদের একজন হবে। মুয়াসসারও প্রায় একই কথা বলে, সন্তানটি হবে আল্লাহ ও তাঁর দ্বীনের জ্ঞানের অধিকারী লোকদের অন্তর্ভুক্ত। এখানে দেখা তাফসীরকারেরা তাই আলীম শব্দকে পড়েছেন বড় হয়ে ওঠা মানুষটির ব্যাপারে প্রতিশ্রুতি হিসেবে, শিশুর বিবরণ হিসেবে নয়। তাঁদের কেউই শব্দটির ব্যাখ্যায় নবুওয়াতের কথা বলেননি। কুরআন ৩৭:১১২ আয়াতে ইসহাককে নবী বলেছে, কুরতুবী সে আয়াত উদ্ধৃতও করেন, তবে অন্য উদ্দেশ্যে। সেটা ওই আয়াতের বক্তব্য, এ শব্দের ব্যাখ্যায় তাঁদের কথা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Son, and One Dissent",
          "bn": "কোন পুত্র, একটি ভিন্নমত"
        },
        "p": [
          {
            "en": "The verse does not name the boy, so the commentators do. At-Tabari answers at once: he means Ishaq (AS). He then reports, through two chains reaching Ibn Abi Najih, that Mujahid said of bi-ghulamin 'alim: Isma'il. At-Tabari states why he holds otherwise in one sentence: the tidings were of a child from Sarah, and Isma'il was Hajar's son, not Sarah's.",
            "bn": "আয়াত ছেলেটির নাম বলে না, নাম বলেন তাফসীরকারেরা। তাবারী সরাসরি উত্তর দেন: এখানে উদ্দেশ্য ইসহাক (আঃ)। তারপর তিনি ইবন আবী নাজীহ পর্যন্ত পৌঁছানো দুটি সনদে বর্ণনা করেন যে মুজাহিদ বিগুলামিন আলীম সম্পর্কে বলেছেন: ইসমাঈল। তাবারী কেন ভিন্ন মত রাখেন, তা একটি বাক্যে বলেন: সুসংবাদ ছিল সারার গর্ভের সন্তানের, আর ইসমাঈল হাজারের ছেলে, সারার নন।"
          },
          {
            "en": "Al-Qurtubi reports the same split with a count attached. The majority, al-jumhur, hold that the one announced is Ishaq; Mujahid alone said Isma'il. Al-Qurtubi dismisses the lone view in strong terms, wa-laysa bi-shay', and it is nothing, and gives his ground: Allah says, wa-bashsharnahu bi-Ishaq, and We gave him the tidings of Ishaq, and that is an explicit text. The other commentators fetched here simply name the son. Al-Muyassar says his wife Sarah would bear him a child, Ishaq (AS); as-Sa'di writes, he is Ishaq (AS).",
            "bn": "কুরতুবী একই মতভেদ উল্লেখ করেন, সঙ্গে সংখ্যার হিসাবও দেন। জুমহুর, অর্থাৎ অধিকাংশের মত, যার সুসংবাদ দেওয়া হয়েছে তিনি ইসহাক। শুধু মুজাহিদ একা বলেছেন ইসমাঈল। কুরতুবী এই একক মত কড়া ভাষায় নাকচ করেন, ওয়া লাইসা বিশাই, এর কোনো ভিত্তি নেই। কারণও দেন: আল্লাহ বলেছেন, ওয়া বাশশারনাহু বিইসহাক, আমি তাঁকে ইসহাকের সুসংবাদ দিয়েছি, আর এটি সুস্পষ্ট নস। এখানে দেখা অন্য তাফসীরগুলো শুধু নামটা বলে দেয়। মুয়াসসার বলে, তাঁর স্ত্রী সারা তাঁর জন্য সন্তান জন্ম দেবেন, তিনি ইসহাক (আঃ)। সা'দী লেখেন, তিনি ইসহাক (আঃ)।"
          },
          {
            "en": "So the record holds one voice against the identification every other source here adopts. Mujahid's view is not hidden; at-Tabari gives it a chain, and al-Qurtubi names him while rejecting it. Both give reasons, one from the story's mother and one from a verse that names the son. The article reports the dissent and the reasons as they stand. The question here is only which son 51:28 announces, and the commentaries fetched for this verse do not open any wider question from it.",
            "bn": "তাহলে বর্ণনার ভাণ্ডারে দেখা যায়, এখানকার বাকি সব উৎস যে নাম মেনে নিয়েছে, তার বিপরীতে একটিমাত্র কণ্ঠ। মুজাহিদের মত লুকানো হয়নি। তাবারী এর সনদ দিয়েছেন, কুরতুবী নাকচ করতে গিয়েও তাঁর নাম নিয়েছেন। দুজনেই যুক্তি দিয়েছেন, একজন কাহিনির মা কে তা থেকে, অন্যজন পুত্রের নাম বলা এক আয়াত থেকে। এ লেখা ভিন্নমত আর যুক্তিগুলো যেমন আছে তেমনই তুলে ধরছে। প্রশ্ন এখানে কেবল এটুকু, ৫১:২৮ কোন পুত্রের সুসংবাদ দিচ্ছে। এ আয়াতের যে তাফসীরগুলো দেখা হয়েছে, সেগুলো এখান থেকে আর কোনো বড় প্রশ্ন খোলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Visit Behind the Fear",
          "bn": "ভয়ের আড়ালে সুসংবাদ"
        },
        "p": [
          {
            "en": "Read as a whole, the verse turns a host's quiet fear into his household's best news inside a single sentence. The guests who would not touch the food were the ones carrying the promise of a son. The commentators explain the fear by what an untouched meal ordinarily meant, and the Qur'an follows it at once with la takhaf. The verse does not pause on the fear; it shows what came next. That order offers the reader a way to hold an unsettling moment: give it time to show what it carries.",
            "bn": "পুরো আয়াতটা একসঙ্গে পড়লে দেখা যায়, একটিমাত্র বাক্যের ভেতরে মেজবানের চাপা ভয় বদলে গেছে তাঁর পরিবারের সবচেয়ে বড় সুখবরে। যে মেহমানেরা খাবার ছোঁয়নি, পুত্রের প্রতিশ্রুতি তাদের হাতেই ছিল। তাফসীরকারেরা ভয়ের কারণ বলেছেন না-ছোঁয়া খাবারের সাধারণ অর্থ দিয়ে, আর কুরআন তার পরেই বলে লা তাখাফ। আয়াত ভয়ের উপর থেমে থাকে না, পরে কী হলো তা দেখিয়ে দেয়। এই ক্রম পাঠককে অস্থির মুহূর্ত সামলানোর একটা পথ দেখায়: মুহূর্তটাকে সময় দিন, দেখুন সে কী বয়ে এনেছে।"
          },
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, so none is quoted here; the report from 'Amr ibn Dinar above is a saying al-Qurtubi relays. What the verse leaves is a sequence and a pointer onward. In 51:29 the wife comes forward, and in 51:30 the guests tell her that this is what her Lord has said. Meanwhile Ibrahim's manners at the table, as Ibn Kathir draws them out, remain within reach of any home: the best one has, brought quickly, set close and offered gently.",
            "bn": "এ আয়াতের যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি। আমর ইবন দীনারের যে বর্ণনা আগে এসেছে, সেটা কুরতুবীর উদ্ধৃত একটি উক্তি। আয়াত রেখে যায় একটা ক্রম আর সামনের দিকে একটা ইশারা। ৫১:২৯ আয়াতে স্ত্রী এগিয়ে আসেন, আর ৫১:৩০ আয়াতে মেহমানেরা তাঁকে বলেন, আপনার রব এমনই বলেছেন। ওদিকে দস্তরখানে ইবরাহীমের আদব, ইবন কাসীর যেভাবে তা তুলে ধরেছেন, যে কোনো ঘরের নাগালেই আছে: নিজের সেরাটা, দ্রুত এনে, কাছে রেখে, নরম সুরে সামনে দেওয়া।"
          }
        ]
      }
    ]
  },
  "51:32": {
    "sections": [
      {
        "h": {
          "en": "Six Words in Reply",
          "bn": "ছয় শব্দের জবাব"
        },
        "p": [
          {
            "en": "Qalu inna ursilna ila qawmin mujrimin: they said, indeed we have been sent to a criminal people. It answers the question of the verse before, fa-ma khatbukum ayyuha al-mursalun, then what is your business, O messengers? The Muyassar opens that question out as what is your affair, and for what have you been sent, and it names those being asked: the angels of Allah. Ma'arif al-Qur'an sets the moment inside the conversation itself. Once Ibrahim (AS) had discovered that his guests were angels, he asked them what their mission was.",
            "bn": "কালূ ইন্না উরসিলনা ইলা কাওমিম মুজরিমীন: তারা বলল, আমাদের পাঠানো হয়েছে এক অপরাধী জাতির কাছে। আগের আয়াতে প্রশ্ন ছিল, ফামা খাতবুকুম আইয়ুহাল মুরসালূন: তাহলে তোমাদের কাজটা কী, হে প্রেরিত দূতেরা? এ আয়াত সেই প্রশ্নেরই জবাব। মুয়াসসার প্রশ্নটা খুলে বলে এভাবে: তোমাদের ব্যাপার কী, কোন কাজে তোমাদের পাঠানো হয়েছে? কাদের জিজ্ঞেস করা হচ্ছে, সেটাও সেখানে বলা আছে: আল্লাহর ফেরেশতাদের। মাআরিফুল কুরআন মুহূর্তটাকে কথোপকথনের ভেতরেই বসায়। অতিথিরা যে ফেরেশতা, ইবরাহীম (আঃ) তা বুঝে ফেলার পর তাঁদের কাছে জানতে চাইলেন, তাঁরা কোন দায়িত্ব নিয়ে এসেছেন।"
          },
          {
            "en": "The reply is six words in the Arabic, and it gives what was asked and nothing beyond it. It says that they were sent, and to whom, in the barest description: a people, unnamed, marked by a single word. It does not yet say what will happen to them; that waits for the next verse. Ibn Kathir's abridged English glosses the question as what is the mission that you were sent with, and this verse answers exactly that. Nothing in the sentence is ornament, and nothing in it is softened.",
            "bn": "আরবিতে জবাবটা মাত্র ছয়টি শব্দের। যা জানতে চাওয়া হয়েছিল, তার বাইরে এতে কিছু নেই। তাঁদের পাঠানো হয়েছে, আর কাদের কাছে, সেটা বলা হয়েছে সবচেয়ে সংক্ষিপ্ত পরিচয়ে: এক জাতি, যার নাম নেই, শুধু একটা শব্দে যার বর্ণনা। তাদের কী হবে, সে কথা এখনো আসেনি, তা আসবে পরের আয়াতে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ প্রশ্নটার অর্থ করে এভাবে: কোন দায়িত্ব দিয়ে তোমাদের পাঠানো হয়েছে? এ আয়াত ঠিক সেটুকুরই জবাব দেয়। বাক্যে সাজসজ্জার কিছু নেই, নরম করে বলারও কিছু নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent, So as to Send",
          "bn": "প্রেরিত, পাঠানোর জন্যই"
        },
        "p": [
          {
            "en": "Ursilna is passive: we have been sent. The verse does not say by whom, and the speakers do not stop to say it, because for anyone listening there is only one sender. The Muyassar makes him explicit in its paraphrase: inna Allaha arsalana, Allah has sent us, to a people who had committed crimes. The angels speak of themselves only as the ones sent. They claim no authority in the errand and take no credit for it. The decision belongs wholly to the One who sent them, and they are its carriers.",
            "bn": "উরসিলনা ক্রিয়াটি কর্মবাচ্যে: আমাদের পাঠানো হয়েছে। কে পাঠালেন, আয়াত তা বলে না, বক্তারাও থেমে তা বলেন না। যে শুনছে তার কাছে পাঠানোর মালিক তো একজনই। মুয়াসসার তার ব্যাখ্যায় নামটা স্পষ্ট করে দেয়: ইন্নাল্লাহা আরসালানা, আল্লাহ আমাদের পাঠিয়েছেন এমন এক জাতির কাছে, যারা অপরাধ করেছে। ফেরেশতারা নিজেদের পরিচয় দেন শুধু প্রেরিত হিসেবে। এই কাজে তাঁরা কোনো ক্ষমতা দাবি করেন না, কোনো কৃতিত্বও নেন না। সিদ্ধান্ত পুরোটাই যিনি পাঠিয়েছেন তাঁর, আর তাঁরা কেবল তা বয়ে নিয়ে যান।"
          },
          {
            "en": "Listen to the root r-s-l as it runs through three verses in a row. Ibrahim (AS) addresses them as al-mursalun, the ones sent, in 51:31. They answer ursilna, we have been sent, in 51:32. And the next verse gives the purpose with li-nursila, so that we may send down upon them stones of clay, in 51:33. Sent ones, sent, in order to send: the chain does not stop with the angels. They were sent so that something else would be sent, and the reader feels a command passing down, link by link, from its source.",
            "bn": "পরপর তিনটি আয়াতে র-স-ল ধাতুটা কীভাবে ঘুরে ঘুরে আসে, খেয়াল করুন। ৫১:৩১ আয়াতে ইবরাহীম (আঃ) তাঁদের ডাকেন আল-মুরসালূন বলে, অর্থাৎ প্রেরিতগণ। ৫১:৩২ আয়াতে তাঁরা জবাব দেন উরসিলনা, আমাদের পাঠানো হয়েছে। আর ৫১:৩৩ আয়াত উদ্দেশ্যটা জানায় লিনুরসিলা শব্দে: যেন আমরা তাদের উপর মাটির পাথর বর্ষণ করি। প্রেরিত, পাঠানো হয়েছে, পাঠানোর জন্য। ধারাটা ফেরেশতাদের কাছে এসে থামে না। তাঁদের পাঠানো হয়েছে যেন আরও কিছু পাঠানো যায়। পাঠক টের পান, একটা হুকুম তার উৎস থেকে ধাপে ধাপে নেমে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Word for Word in al-Hijr",
          "bn": "সূরা হিজরে হুবহু একই কথা"
        },
        "p": [
          {
            "en": "This exchange appears twice in the Qur'an in identical words. In Surah al-Hijr, 15:57 has Ibrahim (AS) ask fa-ma khatbukum ayyuha al-mursalun, and 15:58 gives the answer qalu inna ursilna ila qawmin mujrimin, letter for letter as here in 51:31 and 51:32. The question and its reply are preserved exactly in two settings, which tells the reader that the sentence carries weight in itself and not only as a step in a story. When the Qur'an repeats a line word for word, the repetition invites a comparison of what stands around it.",
            "bn": "এই প্রশ্নোত্তর কুরআনে দুবার এসেছে, হুবহু একই শব্দে। সূরা হিজরের ১৫:৫৭ আয়াতে ইবরাহীম (আঃ) জিজ্ঞেস করেন ফামা খাতবুকুম আইয়ুহাল মুরসালূন, আর ১৫:৫৮ আয়াতে জবাব আসে কালূ ইন্না উরসিলনা ইলা কাওমিম মুজরিমীন। এখানকার ৫১:৩১ ও ৫১:৩২ আয়াতের সঙ্গে অক্ষরে অক্ষরে মিলে যায়। দুই জায়গায় প্রশ্ন আর জবাব একদম অবিকল রাখা হয়েছে। বোঝা যায়, বাক্যটার নিজেরই ওজন আছে, সেটা কেবল কাহিনির একটা ধাপ নয়। কুরআন যখন কোনো লাইন হুবহু ফিরিয়ে আনে, তখন আশপাশে কী আছে তা মিলিয়ে দেখার ডাক আসে।"
          },
          {
            "en": "And what stands around it differs. In al-Hijr the very next verse, 15:59, names a family: except the family of Lut, indeed we will save them all. The name arrives at once, and with it the exception. Here in adh-Dhariyat the next verse turns instead to the stones, and the believers who were brought out come only in 51:35 and 51:36. The people of 51:32 stay unnamed in the surah's own words. Who they were is left to be known from elsewhere, and the commentators supply it without hesitation.",
            "bn": "আর আশপাশটা আলাদা। হিজরে ঠিক পরের আয়াত, ১৫:৫৯, একটা পরিবারের নাম নেয়: তবে লূতের পরিবার বাদে, তাদের সবাইকে আমরা অবশ্যই রক্ষা করব। নামটা আসে সঙ্গে সঙ্গে, আর তার সঙ্গে ব্যতিক্রমটাও। সূরা যারিয়াতে পরের আয়াত বরং চলে যায় পাথরের দিকে। যে মু'মিনদের বের করে আনা হয়েছিল, তাদের কথা আসে আরও পরে, ৫১:৩৫ ও ৫১:৩৬ আয়াতে। সূরার নিজের ভাষায় ৫১:৩২ আয়াতের জাতিটি নামহীনই থেকে যায়। তারা কারা, তা জানতে হয় অন্য সূত্র থেকে, আর তাফসীরকারেরা কোনো দ্বিধা ছাড়াই সেটা জানিয়ে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name the Commentators Give",
          "bn": "তাফসীরকারদের দেওয়া পরিচয়"
        },
        "p": [
          {
            "en": "Four of the Arabic commentaries fetched for this verse give the identification in a phrase and nothing more. Ibn Kathir: ya'nuna qawma Lut, they mean the people of Lut. Al-Qurtubi: yuridu qawma Lut. Al-Baghawi: ya'ni qawma Lut. As-Sa'di opens with the same identification, wa hum qawmu Lut, before going on to say what their crime was. Ma'arif al-Qur'an and Ibn Kathir's abridged English say the same thing: the angels were sent to the people of Lut (AS) to destroy them. None of them treats the identification as uncertain.",
            "bn": "এ আয়াতের জন্য সংগ্রহ করা আরবি তাফসীরগুলোর চারটি পরিচয়টা দেয় এক টুকরো কথায়, এর বেশি কিছু নয়। ইবন কাসীর: ইয়া'নূনা কাওমা লূত, তাঁরা লূতের কওমকে বোঝাচ্ছেন। কুরতুবী: ইউরীদু কাওমা লূত। বাগাভী: ইয়া'নী কাওমা লূত। সা'দীও শুরু করেন একই পরিচয় দিয়ে, ওয়া হুম কাওমু লূত, তারপর বলেন তাদের অপরাধ কী ছিল। মাআরিফুল কুরআন আর ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও একই কথা বলে: ফেরেশতাদের পাঠানো হয়েছিল লূত (আঃ)-এর কওমকে ধ্বংস করতে। তাঁদের কেউই এই পরিচয় নিয়ে কোনো সংশয় দেখান না।"
          },
          {
            "en": "At-Tabari and the Muyassar, at this verse, take another route. They do not name the people; they explain the word that describes them, and the next section follows that explanation. This is a difference of emphasis, not a disagreement. Eight commentaries were fetched for this verse, and none of them attaches a hadith to it, so no hadith is quoted here. The verse is read on its own words and on what the commentators say about those words, with nothing added from outside them and nothing filled in from general memory.",
            "bn": "তাবারী আর মুয়াসসার এ আয়াতে অন্য পথে যান। তাঁরা জাতির নাম বলেন না, যে শব্দে তাদের বর্ণনা করা হয়েছে সেটার ব্যাখ্যা দেন। পরের অংশ সেই ব্যাখ্যা নিয়েই। এটা মতভেদ নয়, কেবল জোর দেওয়ার জায়গা আলাদা। এ আয়াতের জন্য আটটি তাফসীর সংগ্রহ করা হয়েছে, তার কোনোটিই আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো হাদীস উদ্ধৃত করা হচ্ছে না। আয়াতটি পড়া হচ্ছে তার নিজের শব্দে, আর সেই শব্দ নিয়ে তাফসীরকারেরা যা বলেছেন তার আলোকে। বাইরে থেকে কিছু যোগ করা হয়নি, আন্দাজে কোনো ফাঁকও ভরাট করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Crime, as They Gloss It",
          "bn": "অপরাধের ব্যাখ্যা তাঁদের ভাষায়"
        },
        "p": [
          {
            "en": "At-Tabari's gloss is one clause: qad ajramu li-kufrihim billah, they had committed crimes through their disbelief in Allah. The Muyassar repeats it almost to the letter: a people who had committed crimes through their disbelief in Allah. For both of them, what made these people mujrimin, at this verse, is kufr. Neither lists any further deed here. They name the ground on which the description stands and stop, leaving the word to carry its full weight without detail, as the verse itself leaves it.",
            "bn": "তাবারীর ব্যাখ্যা একটিমাত্র বাক্যাংশ: কাদ আজরামূ লিকুফরিহিম বিল্লাহ, আল্লাহর প্রতি কুফরির কারণে তারা অপরাধী হয়েছিল। মুয়াসসার প্রায় হুবহু একই কথা বলে: এমন এক জাতি, যারা আল্লাহর প্রতি কুফরির মাধ্যমে অপরাধ করেছিল। দুজনের কাছেই এ আয়াতে মুজরিমীন হওয়ার কারণ কুফর। এখানে তাঁরা আর কোনো কাজের তালিকা দেন না। বর্ণনাটা কোন ভিতের উপর দাঁড়িয়ে, সেটুকু বলেই থামেন। আয়াত নিজে যেমন শব্দটাকে বিস্তারিত ছাড়া রেখে দিয়েছে, তাঁরাও তার পুরো ভার শব্দটার উপরই রেখে দেন।"
          },
          {
            "en": "As-Sa'di gives a fuller account in one sentence. Qad ajramu: they had committed crimes. Ashraku billah: they associated partners with Allah. Wa kadhdhabu rasulahum: and they denied their messenger. Wa atu al-fahishata ash-shan'a'a allati ma sabaqahum ilayha ahadun min al-'alamin: and they committed the hideous indecency in which no one in all the worlds had preceded them. He names three counts, in that order: shirk, the denial of their messenger, and the indecency. He does not describe the indecency beyond those words, and this article does not either.",
            "bn": "সা'দী একটি বাক্যেই আরও পূর্ণ বিবরণ দেন। কাদ আজরামূ: তারা অপরাধ করেছিল। আশরাকূ বিল্লাহ: আল্লাহর সঙ্গে শিরক করেছিল। ওয়া কাযযাবূ রাসূলাহুম: নিজেদের রাসূলকে মিথ্যাবাদী বলেছিল। ওয়া আতাউল ফাহিশাতাশ শান'আ আল্লাতী মা সাবাকাহুম ইলাইহা আহাদুম মিনাল 'আলামীন: আর তারা সেই জঘন্য অশ্লীল কাজ করেছিল, যা জগতের কেউ তাদের আগে করেনি। তিনি তিনটি অভিযোগ গোনান, এই ক্রমে: শিরক, রাসূলকে অস্বীকার, আর সেই অশ্লীলতা। অশ্লীলতার বর্ণনা তিনি এই শব্দগুলোর বাইরে দেন না, এই লেখাও দেবে না।"
          },
          {
            "en": "Ma'arif al-Qur'an speaks only of their unspeakable crime and leaves it there. So the sources fetched for this verse differ in how much they say, and none of them contradicts another. At-Tabari and the Muyassar rest the description on disbelief; as-Sa'di adds the denial of their messenger and the indecency; Ma'arif names a crime without naming its content. Both the brief readings and the fuller one are kept here as they stand, and the article does not decide how briefly or how fully the word ought to be glossed.",
            "bn": "মাআরিফুল কুরআন শুধু তাদের অকথ্য অপরাধের কথা বলে, তারপর থেমে যায়। এ আয়াতের জন্য সংগ্রহ করা সূত্রগুলোর পার্থক্য তাই কতটুকু বলা হয়েছে তাতে। কেউ কারও বিরোধিতা করেনি। তাবারী আর মুয়াসসার বর্ণনাটাকে দাঁড় করান কুফরের উপর। সা'দী তার সঙ্গে যোগ করেন রাসূলকে অস্বীকার আর সেই অশ্লীলতা। মাআরিফ একটা অপরাধের কথা বলে, কিন্তু তা কী ছিল বলে না। সংক্ষিপ্ত ব্যাখ্যা আর পূর্ণ ব্যাখ্যা, দুটোই এখানে যেমন আছে তেমন রাখা হলো। শব্দটার ব্যাখ্যা কতটা ছোট বা কতটা বিস্তারিত হওয়া উচিত, এই লেখা সে বিচার করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Other Words, Other Surahs",
          "bn": "অন্য শব্দ, অন্য সূরা"
        },
        "p": [
          {
            "en": "The same people receive other descriptions close by. Two verses on, in 51:34, the stones are marked lil-musrifin, for the transgressors, and the Muyassar glosses that word as those who exceeded the bound in fujur and 'isyan, in wickedness and disobedience. In 29:31 the messengers tell Ibrahim (AS) that the people of this town have been zalimin, wrongdoers. Criminals, transgressors, wrongdoers: three words in the Qur'an's own text for the one people, and each of them describes what they did, not who they were by birth or place.",
            "bn": "কাছাকাছিই এই জাতির আরও বর্ণনা আছে। দুই আয়াত পরে, ৫১:৩৪ আয়াতে, পাথরগুলো চিহ্নিত লিলমুসরিফীন, সীমালঙ্ঘনকারীদের জন্য। মুয়াসসার শব্দটার ব্যাখ্যা দেয়: যারা ফুজূর আর ইসইয়ানে, অর্থাৎ পাপাচার আর নাফরমানিতে সীমা ছাড়িয়ে গিয়েছিল। ২৯:৩১ আয়াতে দূতেরা ইবরাহীম (আঃ)-কে বলেন, এই জনপদের লোকেরা ছিল যালিমীন, জালিম। অপরাধী, সীমালঙ্ঘনকারী, জালিম: কুরআনের নিজের ভাষায় একই জাতির জন্য তিনটি শব্দ। প্রতিটি শব্দই বলে তারা কী করেছিল। জন্ম বা জায়গার সূত্রে তারা কারা ছিল, তা কোনো শব্দই বলে না।"
          },
          {
            "en": "Ibn Kathir's abridged English, commenting on this passage, brings in what adh-Dhariyat does not narrate. He quotes 11:74 to 11:76: when the fear had left Ibrahim and the glad tidings had reached him, he began to plead with Us for the people of Lut; Ibrahim was forbearing, given to humble supplication, and repentant; and then, O Ibrahim, forsake this, the command of your Lord has come. He also quotes 29:32, where Ibrahim (AS) says that Lut is in the town, and they answer that they know better who is there and will save him and his family, except his wife.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ এ অংশের আলোচনায় এমন কথা টেনে আনে, যা সূরা যারিয়াত বর্ণনা করে না। তিনি ১১:৭৪ থেকে ১১:৭৬ আয়াত উদ্ধৃত করেন। ইবরাহীমের ভয় কেটে গেল, সুসংবাদ তাঁর কাছে পৌঁছল, তখন তিনি লূতের কওমের ব্যাপারে আমার সঙ্গে আবেদন জানাতে লাগলেন। ইবরাহীম ছিলেন সহনশীল, বিনয়ের সঙ্গে দোয়াকারী, আল্লাহমুখী। তারপর: হে ইবরাহীম, এ থেকে বিরত হও, তোমার রবের হুকুম এসে গেছে। তিনি ২৯:৩২ আয়াতও উদ্ধৃত করেন। সেখানে ইবরাহীম (আঃ) বলেন, ওই জনপদে তো লূত আছেন। তাঁরা জবাব দেন, সেখানে কে আছে তা তাঁরা ভালো জানেন, তাঁকে আর তাঁর পরিবারকে রক্ষা করবেন, তাঁর স্ত্রীকে ছাড়া।"
          },
          {
            "en": "In this surah none of that is told. The question is short and the answer shorter. Ibn Kathir sets the two passages beside this verse so that the reader holds the whole: the concern of Ibrahim (AS) for the people, which 11:75 praises as forbearance, and the messengers' assurance about Lut (AS), which leads straight to 51:35 and 51:36. The curt reply of 51:32 did not fall on a hard heart, and the Qur'an, telling the story elsewhere, makes sure the reader knows it.",
            "bn": "এই সূরায় এর কিছুই বলা হয়নি। প্রশ্ন ছোট, জবাব আরও ছোট। ইবন কাসীর ওই দুই অংশ এ আয়াতের পাশে রাখেন, যেন পাঠক পুরো ছবিটা দেখতে পান। একদিকে কওমের জন্য ইবরাহীম (আঃ)-এর দরদ, যাকে ১১:৭৫ আয়াত সহনশীলতা বলে প্রশংসা করেছে। অন্যদিকে লূত (আঃ)-কে নিয়ে দূতদের আশ্বাস, যা সরাসরি নিয়ে যায় ৫১:৩৫ ও ৫১:৩৬ আয়াতের দিকে। ৫১:৩২ আয়াতের সংক্ষিপ্ত জবাব কোনো কঠিন হৃদয়ে গিয়ে পড়েনি। অন্য সূরায় কাহিনিটা বলার সময় কুরআন পাঠককে সে কথা জানিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Charge Sheet for Today",
          "bn": "আজকের কারও বিরুদ্ধে অভিযোগপত্র নয়"
        },
        "p": [
          {
            "en": "This must be said without hedging. The verse describes what the text describes: a past people, judged by Allah, through messengers sent for that purpose, on charges the commentators name in their own words. It licenses nothing against any living person or community. It gives no individual, crowd or state a warrant to identify a group of today with this people, to harm anyone, or to act as though the messengers' errand had passed into human hands. The angels said that they had been sent. No reader of the verse has been sent.",
            "bn": "কথাটা কোনো দ্বিধা ছাড়াই বলা দরকার। আয়াতটি তাই বর্ণনা করে, যা পাঠ বর্ণনা করে: অতীতের এক জাতি, যাদের বিচার করেছেন আল্লাহ, সেই কাজেই পাঠানো দূতদের মাধ্যমে, এমন অভিযোগে যা তাফসীরকারেরা নিজেদের ভাষায় বলে দিয়েছেন। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো দলকে এই জাতি বলে চিহ্নিত করা, কারও ক্ষতি করা, কিংবা এমন আচরণ করা যেন দূতদের দায়িত্ব এখন মানুষের হাতে এসে গেছে, এর কোনোটার ছাড়পত্র কোনো ব্যক্তি, জনতা বা রাষ্ট্রকে আয়াতটি দেয় না। ফেরেশতারা বলেছিলেন, তাঁদের পাঠানো হয়েছে। আয়াতের কোনো পাঠককে পাঠানো হয়নি।"
          },
          {
            "en": "The verse itself shows where the authority lay. Ursilna, we have been sent: even the angels did not act of themselves. The stones were marked with your Lord, as the angels tell Ibrahim (AS) in 51:34, and the believers were brought out by Him, as 51:35 says, in the words fa-akhrajna, so We brought out. A reader who takes the story as permission for his own anger has turned it upside down. What the verse asks is what 51:37 says the place was left for: a sign for those who fear the painful punishment, read first about oneself.",
            "bn": "কর্তৃত্ব কোথায় ছিল, আয়াত নিজেই তা দেখিয়ে দেয়। উরসিলনা, আমাদের পাঠানো হয়েছে: ফেরেশতারাও নিজের ইচ্ছায় কিছু করেননি। ৫১:৩৪ আয়াতে ফেরেশতারা ইবরাহীম (আঃ)-কে বলেন, পাথরগুলো চিহ্নিত তোমার রবের কাছে। ৫১:৩৫ আয়াত বলে, মু'মিনদের বের করে এনেছিলেন তিনিই: ফাআখরাজনা, অতঃপর আমি বের করে আনলাম। যে পাঠক এই কাহিনিকে নিজের রাগের অনুমতিপত্র বানায়, সে কাহিনিটাকে উল্টে দিয়েছে। আয়াত পাঠকের কাছে যা চায়, তা ৫১:৩৭ আয়াতে বলা আছে, জায়গাটা কেন রেখে দেওয়া হয়েছিল: যারা কষ্টদায়ক আযাবকে ভয় করে তাদের জন্য নিদর্শন। আর সেই নিদর্শন পড়তে হয় সবার আগে নিজের দিকে তাকিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Read First About Oneself",
          "bn": "আগে নিজেকে পড়া"
        },
        "p": [
          {
            "en": "The verses after this one complete the errand, and each deserves its own reading. 51:33 and 51:34 name the means, stones of clay marked for the transgressors. 51:35 and 51:36 tell of the believers brought out and the single house of Muslims found there. 51:37 says a sign was left in the place. This verse stands at the hinge: the question has been asked, the purpose has been stated in its shortest form, and everything after it unfolds what these six words already held.",
            "bn": "এর পরের আয়াতগুলো কাজটাকে সম্পূর্ণ করে, আর প্রতিটিই আলাদা করে পড়ার মতো। ৫১:৩৩ ও ৫১:৩৪ আয়াত উপায়টা জানায়: মাটির পাথর, সীমালঙ্ঘনকারীদের জন্য চিহ্নিত। ৫১:৩৫ ও ৫১:৩৬ আয়াত বলে মু'মিনদের বের করে আনার কথা, আর সেখানে মুসলিমদের মাত্র একটি ঘর পাওয়ার কথা। ৫১:৩৭ আয়াত বলে, জায়গাটায় একটা নিদর্শন রেখে দেওয়া হয়েছিল। এ আয়াত দাঁড়িয়ে আছে মোড়ের উপর। প্রশ্ন করা হয়ে গেছে, উদ্দেশ্য বলা হয়ে গেছে সবচেয়ে ছোট আকারে। এরপর যা আসে, তা এই ছয়টি শব্দে আগেই ধরা ছিল, শুধু খুলে খুলে বলা।"
          },
          {
            "en": "What, then, does a reader carry away from a verse that names a people only by their crime? Perhaps this. In as-Sa'di's list the indecency comes third. First come associating partners with Allah and denying the messenger sent to them, faults that need no notoriety to take root in a heart. The verse is not a mirror held up to other people's faces. It asks whether a message from my Lord has reached me, and whether I have received it, or turned it away as they did.",
            "bn": "যে আয়াত একটা জাতিকে কেবল তাদের অপরাধ দিয়ে চেনায়, পাঠক তা থেকে কী নিয়ে যাবেন? হয়তো এটুকু। সা'দীর তালিকায় অশ্লীলতা আসে তৃতীয় স্থানে। তার আগে আসে আল্লাহর সঙ্গে শিরক আর নিজেদের কাছে পাঠানো রাসূলকে অস্বীকার। এ দুটো দোষ অন্তরে শিকড় গাড়তে কোনো কুখ্যাতির দরকার হয় না। আয়াতটা অন্যদের মুখের সামনে ধরা আয়না নয়। আয়াত জানতে চায়, আমার রবের কোনো বার্তা কি আমার কাছে পৌঁছেছে? আমি কি তা গ্রহণ করেছি, নাকি তাদের মতো ফিরিয়ে দিয়েছি?"
          }
        ]
      }
    ]
  },
  "51:39": {
    "sections": [
      {
        "h": {
          "en": "After the Clear Authority",
          "bn": "স্পষ্ট প্রমাণের পরে"
        },
        "p": [
          {
            "en": "Surah adh-Dhariyat moves through a gallery of signs. The people of Lut (AS) have just been dealt with when 51:38 opens a new frame: and in Musa, when We sent him to Pharaoh with clear authority. Ibn Kathir explains that authority as clear proof and plain evidence. The Muyassar, reading 51:38 and 51:39 together, finds the sign in the sending itself: Musa (AS) was sent to Pharaoh and his chiefs with signs and evident miracles, a sign for those who fear the painful punishment.",
            "bn": "সূরা আয-যারিয়াত একের পর এক নিদর্শনের ছবি দেখিয়ে চলে। লূত (আঃ)-এর কওমের কথা সবে শেষ হয়েছে, এমন সময় ৫১:৩৮ আয়াত নতুন এক দৃশ্য খোলে: আর মূসার মধ্যেও, যখন আমি তাকে স্পষ্ট প্রমাণসহ ফেরাউনের কাছে পাঠালাম। ইবন কাসীরের ব্যাখ্যায় এই সুলতান মানে স্পষ্ট দলিল আর প্রকাশ্য প্রমাণ। মুয়াসসার ৫১:৩৮ ও ৫১:৩৯ আয়াত একসঙ্গে পড়ে নিদর্শনটা খুঁজে পায় পাঠানোর ঘটনাতেই। মূসা (আঃ)-কে ফেরাউন আর তার পারিষদের কাছে পাঠানো হয়েছিল নানা নিদর্শন ও প্রকাশ্য মুজিযাসহ। যারা যন্ত্রণাদায়ক আযাবকে ভয় করে, তাদের জন্য এতে নিদর্শন আছে।"
          },
          {
            "en": "Then comes the response, six words in the Arabic: fa-tawalla bi-ruknihi wa qala sahirun aw majnun, so he turned away with his rukn and said, a magician or a madman. Ma'arif al-Qur'an notes that after the people of Lut (AS) the surah takes up Musa, Pharaoh and the others only briefly. There is no debate on the page and no reply to the proof, only a body turning and a mouth reaching for a label. The verdict follows at 51:40; this article stays with the words before it.",
            "bn": "এরপর আসে জবাব, আরবীতে মাত্র ছয়টি শব্দ: ফাতাওয়াল্লা বিরুকনিহী ওয়া কালা সাহিরুন আও মাজনূন। অর্থাৎ সে তার রুকন নিয়ে মুখ ফিরিয়ে নিল আর বলল, যাদুকর, নয়তো পাগল। মাআরিফুল কুরআন লক্ষ করে, লূত (আঃ)-এর কওমের পর সূরাটি মূসা, ফেরাউন ও অন্যদের কথা খুব সংক্ষেপে সেরে নেয়। পাতায় কোনো বিতর্ক নেই, প্রমাণের কোনো জবাবও নেই। আছে শুধু একটা ঘুরে দাঁড়ানো শরীর, আর একটা মুখ যা তকমা খুঁজছে। রায় আসে ৫১:৪০ আয়াতে। এই লেখা থেমে থাকবে তার আগের কথাগুলোতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Back Turned on Truth",
          "bn": "সত্যের দিকে পিঠ ফেরানো"
        },
        "p": [
          {
            "en": "Tawalla is the verb of turning away, and each commentator glosses it with a near neighbour. At-Tabari says adbara, he turned his back. Al-Baghawi joins two verbs, a'rada wa adbara, he turned aside and turned his back, and names what was left behind: faith. Al-Qurtubi likewise has Pharaoh turn away from belief. As-Sa'di says he turned his side away from the truth and did not so much as look towards it, then attacked it with the gravest of slurs.",
            "bn": "তাওয়াল্লা মানে মুখ ফিরিয়ে নেওয়া। প্রত্যেক মুফাসসির এর ব্যাখ্যা দেন কাছাকাছি অর্থের আরেকটি ক্রিয়া দিয়ে। তাবারী বলেন আদবারা, সে পিঠ ফিরিয়ে চলে গেল। বাগাভী দুই ক্রিয়া পাশাপাশি বসান, আ'রাদা ওয়া আদবারা, সে এড়িয়ে গেল আর পিঠ ফেরাল। কী পেছনে ফেলে গেল, তাও তিনি বলে দেন: ঈমান। কুরতুবীও বলেন, ফেরাউন ঈমান থেকে মুখ ফিরিয়ে নিয়েছিল। সা'দীর ভাষায়, সে সত্য থেকে পাশ ফিরিয়ে নিল, সেদিকে একবার তাকালও না। তারপর সবচেয়ে কঠিন অপবাদ দিয়ে সেই সত্যকেই আঘাত করল।"
          },
          {
            "en": "Ibn Kathir names the motive. Pharaoh turned from the plain truth that Musa (AS) had brought, istikbaran wa 'inadan, out of arrogance and obstinacy. He sets beside it 22:9, thaniya 'itfihi, which his abridged English renders as bending his neck in pride, and glosses that phrase as turning from the truth in arrogance. On this reading the turning is not a failure to follow an argument. It is a posture of the self, taken before any argument has been weighed, and the words that follow only give it a voice.",
            "bn": "ইবন কাসীর কারণটাও বলে দেন। মূসা (আঃ) যে স্পষ্ট সত্য নিয়ে এসেছিলেন, ফেরাউন তা থেকে মুখ ফিরিয়েছিল ইসতিকবারান ওয়া ইনাদান, অর্থাৎ অহংকার আর জেদের বশে। তিনি এর পাশে রাখেন ২২:৯ আয়াতের সানিয়া ইতফিহী, যার সংক্ষিপ্ত ইংরেজি সংস্করণে অর্থ করা হয়েছে অহংকারে ঘাড় বাঁকিয়ে। এর ব্যাখ্যাও তিনি দেন অহংকারভরে সত্য থেকে মুখ ফেরানো বলে। এই পাঠে মুখ ফেরানোটা যুক্তি বুঝতে না পারার ব্যাপার নয়। কোনো যুক্তি ওজন করার আগেই মন একটা ভঙ্গি নিয়ে ফেলেছে। পরের কথাগুলো সেই ভঙ্গিকে শুধু ভাষা দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Rukn as His Retinue",
          "bn": "রুকন মানে তার দলবল"
        },
        "p": [
          {
            "en": "The hard word is bi-ruknihi. At-Tabari gives the root sense first: a rukn is the side or quarter that something leans on and draws its strength from. Al-Baghawi makes the picture concrete, comparing it to the pillar by which a building is made strong. From there most of the readings land on people. At-Tabari's own gloss has Pharaoh turning his back with his people, his soldiers and his companions, and he adds that the people of interpretation said the same, even where their wording differs.",
            "bn": "কঠিন শব্দটা হলো বিরুকনিহী। তাবারী আগে ধাতুগত অর্থটা দেন: রুকন হলো সেই পাশ বা দিক, যার উপর কোনো কিছু ভর দেয় আর যা থেকে শক্তি পায়। বাগাভী ছবিটা আরও স্পষ্ট করেন। তাঁর উপমায় রুকন হলো সেই খুঁটি, যা দালানকে মজবুত রাখে। এখান থেকে বেশিরভাগ ব্যাখ্যা গিয়ে থামে মানুষে। তাবারীর নিজের ব্যাখ্যায় ফেরাউন পিঠ ফেরাল তার লোকজন, সৈন্যসামন্ত আর সঙ্গীসাথীদের নিয়ে। তিনি যোগ করেন, তাফসীরের আলিমরাও এ কথাই বলেছেন, যদিও তাঁদের শব্দ আলাদা।"
          },
          {
            "en": "Ibn Zayd, in at-Tabari's report, says bi-jumu'ihi, with the forces gathered round him, and recites the words of Lut (AS) at 11:80: if only I had strength against you, or could take refuge in a strong rukn. Pharaoh, his soldiers and those with him, Ibn Zayd says, were his rukn, while Lut had not a single believer at his side. Al-Baghawi and Ma'arif al-Qur'an set the same verse beside this one; Ma'arif reads rukn as power, used here of his army and the chiefs of his government.",
            "bn": "তাবারীর বর্ণনায় ইবন যায়দ বলেন বিজুমূইহী, অর্থাৎ চারপাশে জড়ো হওয়া বাহিনী নিয়ে। সঙ্গে তিনি পড়েন ১১:৮০ আয়াতে লূত (আঃ)-এর কথা: হায়, তোমাদের মোকাবেলায় যদি আমার শক্তি থাকত, কিংবা কোনো মজবুত রুকনের আশ্রয় নিতে পারতাম! ইবন যায়দের কথায়, ফেরাউন, তার সৈন্যরা আর তার সঙ্গের লোকেরাই ছিল তার রুকন। অথচ লূত (আঃ)-এর পাশে একজন মু'মিনও ছিল না। বাগাভী আর মাআরিফুল কুরআনও এই আয়াতের পাশে ওই আয়াতটি রাখে। মাআরিফের মতে রুকন মানে শক্তি, আর এখানে তা দিয়ে বোঝানো হয়েছে তার সেনাবাহিনী ও রাজ্যের নেতাদের।"
          },
          {
            "en": "Mujahid's wording comes down in two forms. At-Tabari's chain gives bi-'adudihi wa ashabihi, with his arm and his companions, the arm standing for those who back a man up. Ibn Kathir's version reads ta'azzaza bi-ashabihi, he made himself mighty through his companions. Al-Qurtubi files Ibn Zayd's gathered troops under Mujahid's meaning as well, and explains the rukn of 11:80 as protection and kinsfolk. On this cluster of readings the rukn is human: the men Pharaoh had behind him when he turned.",
            "bn": "মুজাহিদের কথা দুই রূপে পৌঁছেছে। তাবারীর সনদে আছে বিআদুদিহী ওয়া আসহাবিহী, তার বাহু আর সঙ্গীদের নিয়ে। বাহু এখানে তাদের বোঝায়, যারা মানুষের পেছনে দাঁড়ায়। ইবন কাসীরের বর্ণনায় শব্দটা তাআয্যাযা বিআসহাবিহী, সে সঙ্গীদের জোরে নিজেকে শক্তিমান ভাবল। কুরতুবী ইবন যায়দের সেই জড়ো হওয়া বাহিনীর ব্যাখ্যাকেও মুজাহিদের অর্থের মধ্যেই ধরেন। আর ১১:৮০ আয়াতের রুকনের অর্থ করেন নিরাপত্তা ও গোত্রের লোকবল। এই ব্যাখ্যাগুলোর হিসেবে রুকন মানুষ: মুখ ফেরানোর সময় যারা ফেরাউনের পেছনে ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Rukn as Might or Side",
          "bn": "রুকন মানে শক্তি, নাকি পাশ"
        },
        "p": [
          {
            "en": "Other readings move the rukn from the men to the man. Al-Qurtubi reports from Ibn Abbas and Qatada bi-quwwatihi, with his strength, and supports it with a line of 'Antara, in which the poet says the grind of war never weakened his rukn, only the years gone by. The transmission is not uniform, though. At-Tabari's chain from Ibn Abbas gives his people, the narrator admitting he is unsure whether the wording was li-qawmihi or bi-qawmihi, and both at-Tabari and Ibn Kathir quote Qatada as saying: the enemy of Allah overpowered his people.",
            "bn": "আরেক দল ব্যাখ্যা রুকনকে মানুষের দল থেকে সরিয়ে আনে মানুষটার নিজের দিকে। কুরতুবী ইবন আব্বাস (রাঃ) ও কাতাদা থেকে বর্ণনা করেন বিকুওয়্যাতিহী, অর্থাৎ নিজের শক্তির জোরে। এর সমর্থনে তিনি আনেন কবি আনতারার একটি পঙক্তি। সেখানে কবি বলেন, যুদ্ধের ঘষা তার রুকনকে দুর্বল করেনি, করেছে পেরিয়ে যাওয়া বছরগুলো। তবে বর্ণনাগুলো সব এক রকম নয়। তাবারীর সনদে ইবন আব্বাস (রাঃ)-এর কথা হলো তার কওম। বর্ণনাকারী নিজেই স্বীকার করেন, শব্দটা লিকওমিহী ছিল নাকি বিকওমিহী, তিনি নিশ্চিত নন। আর তাবারী ও ইবন কাসীর দুজনেই কাতাদার কথা উদ্ধৃত করেন: আল্লাহর দুশমন তার কওমের উপর জেঁকে বসেছিল।"
          },
          {
            "en": "Al-Qurtubi then widens the field. Al-Akhfash reads bi-janibihi, with his side, and al-Mu'arrij said the same, comparing the phrase a'rada wa na'a bi-janibihi, he turns aside and withdraws on his side, which the Qur'an uses at 17:83 and 41:51. Al-Jawhari defines the rukn of a thing as its stronger side. Al-Qushayri calls it a side of the body and takes the phrase as an image of turning away to the utmost. An unnamed view, introduced with wa qila, says simply: with himself.",
            "bn": "এরপর কুরতুবী আলোচনার পরিধি আরও বাড়ান। আখফাশ অর্থ করেন বিজানিবিহী, নিজের পাশ নিয়ে। মুআররিজও একই কথা বলেছেন। তুলনা হিসেবে আসে আ'রাদা ওয়া নাআ বিজানিবিহী কথাটি, অর্থাৎ সে মুখ ফেরায় আর পাশ কাটিয়ে দূরে সরে যায়। কুরআনে এই কথাটি এসেছে ১৭:৮৩ ও ৪১:৫১ আয়াতে। জাওহারীর সংজ্ঞায় কোনো জিনিসের রুকন হলো তার মজবুত দিক। কুশাইরী একে শরীরের এক পাশ বলেন, আর পুরো কথাটাকে দেখেন চরমভাবে মুখ ফিরিয়ে নেওয়ার ছবি হিসেবে। নাম না জানা আরেকটি মত ওয়া কীলা বলে উদ্ধৃত হয়েছে। সে মত সোজা বলে: নিজেকে নিয়ে।"
          },
          {
            "en": "As-Sa'di reads with the side too: he turned his side away from the truth. The Muyassar holds two senses at once, saying Pharaoh turned away deluded by his strength and his side. Ibn Kathir, having quoted Mujahid, Qatada and Ibn Zayd, calls the first meaning, his own gloss of arrogant turning away, the strong reading. At-Tabari gathers the forces readings into a single meaning, while al-Qurtubi lays every option side by side. This article names each holder and chooses none. On every reading Pharaoh leans on something other than the truth.",
            "bn": "সা'দীও পাশের অর্থ ধরেন: সে সত্য থেকে নিজের পাশ ফিরিয়ে নিল। মুয়াসসার দুটি অর্থ একসঙ্গে রাখে। তার ভাষায়, ফেরাউন মুখ ফেরাল নিজের শক্তি আর নিজের পাশের জোরে ধোঁকা খেয়ে। ইবন কাসীর মুজাহিদ, কাতাদা ও ইবন যায়দের কথা উদ্ধৃত করার পর বলেন, প্রথম অর্থটাই জোরালো। সে অর্থ তাঁর নিজের ব্যাখ্যা: অহংকারে মুখ ফেরানো। তাবারী বাহিনী-সংক্রান্ত ব্যাখ্যাগুলোকে এক অর্থে মিলিয়ে নেন, আর কুরতুবী সব মত পাশাপাশি সাজিয়ে রাখেন। এই লেখা প্রত্যেক মতের ধারকের নাম বলে, কোনোটিকে বেছে নেয় না। যে পাঠই ধরুন, ফেরাউন ভর দিচ্ছে সত্য ছাড়া অন্য কিছুর উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Labels for a Messenger",
          "bn": "রাসূলের গায়ে দুই তকমা"
        },
        "p": [
          {
            "en": "Then he speaks: sahirun aw majnun. At-Tabari spells out whom he means and what each word claims. Pharaoh said of Musa (AS): he is a sahir who bewitches people's eyes, or a majnun, a man touched by the jinn. Ibn Kathir has Pharaoh address Musa directly: as for what you have brought me, your case cannot escape being that of a magician or a madman. The Muyassar says simply that he said it about Musa. Neither word so much as touches the proof of 51:38.",
            "bn": "এরপর সে মুখ খোলে: সাহিরুন আও মাজনূন। কাকে বলছে আর প্রতিটি শব্দে কী দাবি করছে, তাবারী তা খুলে বলেন। ফেরাউন মূসা (আঃ) সম্পর্কে বলল, সে এমন যাদুকর যে মানুষের চোখে যাদু করে। নয়তো সে মাজনূন, তাকে জিনে ধরেছে। ইবন কাসীরের বর্ণনায় ফেরাউন সরাসরি মূসাকেই বলে: তুমি আমার কাছে যা নিয়ে এসেছ, সে ব্যাপারে তোমার অবস্থা যাদুকর বা পাগল হওয়ার বাইরে নয়। মুয়াসসার শুধু এটুকু বলে যে কথাটা সে মূসা সম্পর্কে বলেছিল। ৫১:৩৮ আয়াতের সেই প্রমাণকে এ দুই শব্দের কোনোটিই ছুঁয়েও দেখে না।"
          },
          {
            "en": "As-Sa'di explains why the pair is so damaging. With these words, he says, Pharaoh struck at the message with the gravest of slurs. If Musa is a magician, what he brought is mere conjuring with nothing of the truth in it. If he is mad, nothing he says is to be taken from him, for want of reason. Both halves do the same work. Neither engages the proof, and each removes the man as someone worth hearing, so that the message falls without ever being examined.",
            "bn": "জোড়া তকমাটা কেন এত ক্ষতিকর, সা'দী তা ব্যাখ্যা করেন। তাঁর কথায়, এই শব্দগুলো দিয়ে ফেরাউন বার্তাটার উপর সবচেয়ে কঠিন আঘাত হানল। মূসা (আঃ) যাদুকর হলে তিনি যা এনেছেন তা নিছক ভেলকিবাজি, তাতে সত্যের লেশমাত্র নেই। আর তিনি পাগল হলে তাঁর মুখের কোনো কথাই ধরা যায় না, কারণ তাঁর বুদ্ধিই ঠিক নেই। দুই অংশই একই কাজ করে। কোনোটাই প্রমাণের ধারে কাছে যায় না। দুটোই মানুষটাকে শোনার অযোগ্য বানিয়ে দেয়, ফলে বার্তাটা যাচাই হওয়ার আগেই বাতিল হয়ে যায়।"
          },
          {
            "en": "As-Sa'di then adds a sentence that changes how the verse reads. They knew, he says, and Pharaoh above all, that Musa was truthful. He cites 27:14, they denied the signs though their own selves were certain of them, out of wrongdoing and haughtiness, and the words of Musa (AS) to Pharaoh at 17:102: you know well that none sent these down but the Lord of the heavens and the earth, as clear evidence. On as-Sa'di's reading the label does not come from confusion. It is a refusal dressed up as a verdict.",
            "bn": "এরপর সা'দী এমন এক বাক্য যোগ করেন, যা আয়াতটা পড়ার ধরনই বদলে দেয়। তাঁর কথায়, তারা জানত, বিশেষ করে ফেরাউন জানত, মূসা সত্যবাদী। প্রমাণ হিসেবে তিনি আনেন ২৭:১৪ আয়াত: জুলুম আর ঔদ্ধত্যের বশে তারা নিদর্শনগুলো অস্বীকার করল, অথচ তাদের অন্তর সেগুলোর ব্যাপারে নিশ্চিত ছিল। আর আনেন ১৭:১০২ আয়াতে ফেরাউনের প্রতি মূসা (আঃ)-এর কথা: তুমি ভালো করেই জানো, এগুলো আসমান ও জমিনের রবই নাযিল করেছেন, চোখ খুলে দেওয়ার মতো প্রমাণ হিসেবে। সা'দীর পাঠে তকমাটা বিভ্রান্তি থেকে আসেনি। এটা আসলে প্রত্যাখ্যান, রায়ের পোশাক পরে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Either, or Both",
          "bn": "এটা নয় ওটা, নাকি দুটোই"
        },
        "p": [
          {
            "en": "The small word aw, or, divides the commentators. Ibn Kathir and as-Sa'di read it as a true either-or. Ibn Kathir's paraphrase is la yakhlu amruka, your case cannot be free of being a magician or a madman, and as-Sa'di uses the same frame: Musa cannot escape being either the first or the second. On this reading Pharaoh builds a trap with two doors. Whichever door the listener walks through, the message is dismissed on the way.",
            "bn": "আও, অর্থাৎ অথবা, এই ছোট্ট শব্দটা নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে। ইবন কাসীর ও সা'দী একে সত্যিকারের হয় এটা নয় ওটা অর্থে পড়েন। ইবন কাসীরের ব্যাখ্যার ভাষা লা ইয়াখলূ আমরুকা: তোমার ব্যাপারটা যাদুকর বা পাগল হওয়া থেকে মুক্ত নয়। সা'দীও একই কাঠামো ব্যবহার করেন: মূসা হয় প্রথমটা, নয় দ্বিতীয়টা, এর বাইরে নন। এই পাঠে ফেরাউন দুই দরজাওয়ালা একটা ফাঁদ পাতে। শ্রোতা যে দরজা দিয়েই ঢুকুক, পথেই বার্তাটা বাতিল হয়ে যায়।"
          },
          {
            "en": "Others read aw as wa, and. At-Tabari reports that Ma'mar ibn al-Muthanna, Abu 'Ubayda, held this, because they had said both things of him, and that he cited a line of Jarir as evidence. Al-Baghawi cites Abu 'Ubayda for the same. Al-Qurtubi attributes it to al-Mu'arrij and al-Farra', with the same line of Jarir, and notes that aw is sometimes placed where wa is meant, as in 76:24, do not obey of them a sinner or a disbeliever, while wa can stand for aw, as in the mathna wa thulatha wa ruba' of 4:3.",
            "bn": "অন্যরা আও-কে পড়েন ওয়া অর্থে, অর্থাৎ এবং। তাবারী জানান, মা'মার ইবনুল মুসান্না, যিনি আবু উবায়দা নামে পরিচিত, এই মত পোষণ করতেন। কারণ তারা মূসা (আঃ)-কে দুটো কথাই বলেছিল। প্রমাণ হিসেবে আবু উবায়দা কবি জারীরের একটি পঙক্তি পেশ করেছিলেন। বাগাভীও একই কথা আবু উবায়দার সূত্রে আনেন। কুরতুবী মতটি মুআররিজ ও ফাররার বলে উল্লেখ করেন, সঙ্গে জারীরের সেই পঙক্তিও। তিনি আরও বলেন, কখনো ওয়া বোঝাতে আও বসে, যেমন ৭৬:২৪ আয়াতে: তাদের মধ্যে কোনো পাপী বা অকৃতজ্ঞের আনুগত্য কোরো না। আবার কখনো আও বোঝাতে ওয়া বসে, যেমন ৪:৩ আয়াতের মাসনা ওয়া সুলাসা ওয়া রুবা'।"
          },
          {
            "en": "So the sources give two readings, and this article keeps both. On the first, the slur is a dilemma: either the one or the other. On the second, it is a pair of charges laid side by side, both of which were actually said. At-Tabari reports Abu 'Ubayda's view without ruling on it. None of the commentaries fetched for this verse reads the aw as a sign that Pharaoh himself was unsure what Musa (AS) was, so that idea is not offered here.",
            "bn": "তাহলে উৎসগুলো দুটি পাঠ দেয়, আর এই লেখা দুটোই রাখে। প্রথম পাঠে অপবাদটা একটা উভয়সংকট: হয় একটা, নয় অন্যটা। দ্বিতীয় পাঠে এটা পাশাপাশি রাখা জোড়া অভিযোগ, যার দুটোই আসলে বলা হয়েছিল। তাবারী আবু উবায়দার মত উদ্ধৃত করেন, কিন্তু এর পক্ষে বা বিপক্ষে রায় দেন না। এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই আও শব্দকে এমন ইঙ্গিত হিসেবে পড়ে না যে মূসা (আঃ) আসলে কী, তা নিয়ে ফেরাউন নিজেই দ্বিধায় ছিল। তাই সে ধারণা এখানে তোলা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Pillar We Lean On",
          "bn": "যে খুঁটিতে আমরা ভর দিই"
        },
        "p": [
          {
            "en": "Whatever the rukn was, the verse shows a man turning away while leaning on something. On the forces readings he leans on soldiers and chiefs; on the strength readings, on his own might; on the side readings, on the very shoulder he turns. In each case the support is spent on the act of refusal. Lut (AS), in the verse the commentators keep returning to, longed for a strong rukn, which Ibn Zayd explains as people of strength to stand with him. Pharaoh had such a rukn, and used it to turn his back.",
            "bn": "রুকন যা-ই হোক, আয়াতটি দেখায় একজন মানুষ কোনো কিছুর উপর ভর দিয়ে মুখ ফিরিয়ে নিচ্ছে। বাহিনীর ব্যাখ্যায় সে ভর দেয় সৈন্য আর নেতাদের উপর। শক্তির ব্যাখ্যায় নিজের ক্ষমতার উপর। পাশের ব্যাখ্যায় ঠিক সেই কাঁধের উপর, যেটা সে ফিরিয়ে নিচ্ছে। প্রতিটি ক্ষেত্রেই ভরসার জিনিসটা খরচ হয় প্রত্যাখ্যানের কাজে। মুফাসসিররা বারবার যে আয়াতে ফিরে যান, সেখানে লূত (আঃ) একটা মজবুত রুকন চেয়েছিলেন। ইবন যায়দের ব্যাখ্যায় তা হলো পাশে দাঁড়ানোর মতো শক্তিমান লোকজন। ফেরাউনের তেমন রুকন ছিল, আর সে তা কাজে লাগাল পিঠ ফেরাতে।"
          },
          {
            "en": "The reader's question is not about Pharaoh. What do I lean on when a truth I dislike reaches me: my standing, my circle, my sense of my own strength? And when I cannot answer the point, do I reach for a word that makes the speaker not worth hearing? As-Sa'di's remark that Pharaoh knew Musa was truthful is the sharpest warning in the passage. A label is often easiest to reach for exactly when the truth is clearest, because it spares us the work of replying to it.",
            "bn": "পাঠকের প্রশ্নটা ফেরাউনকে নিয়ে নয়। অপছন্দের কোনো সত্য যখন আমার কাছে আসে, আমি কিসে ভর দিই? আমার মর্যাদায়, আমার লোকজনে, নাকি নিজের শক্তির ধারণায়? আর যখন কথাটার জবাব দিতে পারি না, তখন কি এমন একটা শব্দ খুঁজি, যা বক্তাকে শোনার অযোগ্য করে দেয়? সা'দী যে বলেছেন ফেরাউন জানত মূসা সত্যবাদী, এই অংশে সেটাই সবচেয়ে কড়া সতর্কবাণী। সত্য যখন সবচেয়ে স্পষ্ট, তকমা লাগানো তখনই সবচেয়ে সহজ মনে হয়। কারণ তকমা আমাদের জবাব দেওয়ার খাটুনি থেকে রেহাই দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Narrated, Not Assigned",
          "bn": "বর্ণনা, কারও ঘাড়ে চাপানো নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what the text describes: a particular ruler of the past who turned from a messenger and slandered him, and who was seized for it. It licenses nothing against any living person or community. It does not authorise anyone to cast a present-day ruler, party or people in Pharaoh's role, nor to fling the words magician, madman or Pharaoh at an opponent. Used that way, the verse would be turned into the very labelling it records, and the reader would have become the speaker in it.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: অতীতের নির্দিষ্ট এক শাসক, যে এক রাসূল থেকে মুখ ফিরিয়ে তাঁর নামে অপবাদ দিয়েছিল, আর এর জন্য পাকড়াও হয়েছিল। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আজকের কোনো শাসক, দল বা জাতিকে ফেরাউনের ভূমিকায় বসানোর অধিকার এটা কাউকে দেয় না। প্রতিপক্ষের দিকে যাদুকর, পাগল বা ফেরাউন শব্দ ছুড়ে মারারও না। এভাবে ব্যবহার করলে আয়াতটি যে তকমাবাজির বর্ণনা দেয়, সেটাই আবার ঘটানো হয়। পাঠক তখন নিজেই আয়াতের সেই বক্তার জায়গায় গিয়ে দাঁড়ান।"
          },
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it; the narration quoted in this passage of Ibn Kathir's abridged English concerns the wind that destroyed 'Ad at 51:41, not Pharaoh. What follows the six words is 51:40: so We seized him and his hosts and cast them into the sea, and he was blameworthy. The surah then moves on to 'Ad and to Thamud at 51:43, sign after sign laid out for the reader who fears the painful punishment and still has time to turn towards the truth.",
            "bn": "এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে এই অংশে যে বর্ণনাটি এসেছে, তা ৫১:৪১ আয়াতে আদ জাতিকে ধ্বংস করা বাতাস নিয়ে, ফেরাউনকে নিয়ে নয়। ছয়টি শব্দের পরে আসে ৫১:৪০ আয়াত: অতঃপর আমি তাকে ও তার বাহিনীকে পাকড়াও করলাম এবং সাগরে নিক্ষেপ করলাম, আর সে ছিল নিন্দনীয়। এরপর সূরাটি চলে যায় আদ জাতির দিকে, তারপর ৫১:৪৩ আয়াতে সামূদের দিকে। নিদর্শনের পর নিদর্শন সাজানো আছে সেই পাঠকের জন্য, যে যন্ত্রণাদায়ক আযাবকে ভয় করে, আর যার হাতে এখনো সত্যের দিকে ফেরার সময় আছে।"
          }
        ]
      }
    ]
  },
  "51:47-49": {
    "sections": [
      {
        "h": {
          "en": "After the Ruins, a Building",
          "bn": "ধ্বংসাবশেষের পর এক নির্মাণ"
        },
        "p": [
          {
            "en": "The passage before these verses is a tour of wreckage. 51:41 recalls Ad and the wind that was sent against them, 51:43 recalls Thamud, and 51:46 closes the list with the people of Nuh (AS). Then the subject changes completely: and the heaven, We built it. Having shown what was pulled down over those who defied Him, the surah turns to what He has been quietly holding up over the heads of the people being addressed.",
            "bn": "এই আয়াতগুলোর আগের অংশটি ধ্বংসাবশেষের ভেতর দিয়ে এক ভ্রমণ। 51:41 আয়াত স্মরণ করায় আদ জাতিকে ও তাদের বিরুদ্ধে পাঠানো সেই বাতাসকে, 51:43 আয়াত স্মরণ করায় সামূদকে, আর 51:46 আয়াত তালিকাটি শেষ করে নূহ (আঃ)-এর কওম দিয়ে। এরপর বিষয়টিই বদলে যায়: আর আকাশ — আমি তা নির্মাণ করেছি। যারা তাঁকে অমান্য করেছিল তাদের ওপর যা ভেঙে পড়েছিল তা দেখানোর পর সূরাটি ফেরে সেদিকে, যা তিনি নীরবে ধরে রেখেছেন যাদের সম্বোধন করা হচ্ছে তাদেরই মাথার ওপরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Built With Ayd",
          "bn": "'আইদ' দিয়ে নির্মিত"
        },
        "p": [
          {
            "en": "Wa's-sama'a banaynaha bi-aydin. The verb is bana, to build, from the root that gives 2:22 its word for the sky: a bina', a built structure raised over an earth spread out as bedding. Building language carries a plan, materials in proportion, and something meant to stand. Nothing in the wording suggests a thing that merely came to be there.",
            "bn": "ওয়াস-সামাআ বানাইনাহা বি-আইদ। ক্রিয়াপদটি 'বানা' — নির্মাণ করা; এই ধাতু থেকেই 2:22 আয়াতে আকাশের জন্য শব্দটি এসেছে: 'বিনা', অর্থাৎ নির্মিত এক কাঠামো, যা বিছানার মতো বিছিয়ে দেওয়া যমীনের ওপর তোলা হয়েছে। নির্মাণের ভাষা নিজের সঙ্গে বয়ে আনে একটি নকশা, পরিমাণমতো উপকরণ, আর টিকে থাকার উদ্দেশ্য। শব্দচয়নের কোথাও ইঙ্গিত নেই যে জিনিসটি এমনিতেই সেখানে হয়ে গেছে।"
          },
          {
            "en": "Bi-aydin is where care is needed. It looks like a plural of yad, hand, and some renderings turn it into hands. The mufassirun read it otherwise: Ibn Abbas, Mujahid, Qatadah and ath-Thawri gloss it as bi-quwwah, with strength, and Ibn Kathir passes their reading on as the meaning. The word here is ayd, might. The clause is telling you how firmly the roof was set, not describing a limb.",
            "bn": "সতর্কতা দরকার 'বি-আইদ' শব্দটিতে। দেখতে এটি 'ইয়াদ' অর্থাৎ হাতের বহুবচনের মতো, আর কোনো কোনো অনুবাদে তা 'হাত' হিসেবেই আসে। মুফাসসিরগণ একে অন্যভাবে পড়েন: ইবনে আব্বাস, মুজাহিদ, কাতাদাহ ও সুফইয়ান আস-সাওরী এর ব্যাখ্যা করেন 'বি-কুওয়্যাহ' অর্থাৎ শক্তি দিয়ে, আর ইবনে কাসীর তাঁদের এই পাঠকেই অর্থ হিসেবে বর্ণনা করেন। এখানকার শব্দটি 'আইদ', অর্থাৎ ক্ষমতা। বাক্যাংশটি বলছে ছাদটি কত দৃঢ়ভাবে বসানো হয়েছে; এটি কোনো অঙ্গের বর্ণনা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "And Indeed, We Are Musi'un",
          "bn": "আর নিশ্চয়ই আমরা 'মূসিউন'"
        },
        "p": [
          {
            "en": "Wa inna la-musi'un. Musi' is the active participle of awsa'a, to make wide or to have ample room, and the classical readings stay inside that range. Ibn Kathir explains it as: We made its expanse vast and raised its roof without pillars to hold it. Others take it of Allah Himself — that He is possessed of vastness, in power and in provision, so that nothing He builds strains what He has.",
            "bn": "ওয়া ইন্না লামূসিঊন। 'মূসি' হলো 'আওসাআ' ক্রিয়ার কর্তৃবাচক বিশেষণ — প্রশস্ত করা, বা প্রশস্ততার অধিকারী হওয়া; আর ধ্রুপদী ব্যাখ্যাগুলো এই অর্থসীমার ভেতরেই থাকে। ইবনে কাসীর ব্যাখ্যা করেন: আমি তার বিস্তারকে প্রশস্ত করেছি এবং কোনো খুঁটি ছাড়াই তার ছাদ উঁচু করেছি। আবার কেউ কেউ একে নেন স্বয়ং আল্লাহর বর্ণনা হিসেবে — তিনি প্রশস্ততার অধিকারী, শক্তিতে ও রিযিকে; ফলে তিনি যা-ই নির্মাণ করেন, তাতে তাঁর সামর্থ্যে টান পড়ে না।"
          },
          {
            "en": "That second reading has a plain Quranic anchor. 2:236 uses the same participle of a man: 'ala al-musi'i qadaruh, upon the one of ample means is his measure. The commentators did not read our verse as a report on the physical behaviour of the sky, and it is not necessary to make them. The point they draw is about the Builder: a roof on this scale cost Him nothing, and He has room to spare.",
            "bn": "এই দ্বিতীয় পাঠটির জন্য কুরআনেই স্পষ্ট ভিত্তি আছে। 2:236 আয়াতে একই বিশেষণ ব্যবহৃত হয়েছে মানুষের জন্য: 'আলাল মূসিয়ি কাদারুহ' — সচ্ছল ব্যক্তির ওপর তার সাধ্যমতো। মুফাসসিরগণ আমাদের এই আয়াতটিকে আকাশের ভৌত আচরণ সম্পর্কে কোনো বিবরণ হিসেবে পড়েননি, আর তাঁদের দিয়ে তা পড়ানোর প্রয়োজনও নেই। তাঁরা যে কথাটি বের করেন তা নির্মাতাকে নিয়ে: এত বড় মাপের একটি ছাদ তাঁর কিছুই খরচ করেনি, আর তাঁর হাতে জায়গা উদ্বৃত্তই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Spread Out, and What a Preparer",
          "bn": "বিছানো, আর কতই না উত্তম প্রস্তুতকারী"
        },
        "p": [
          {
            "en": "Wa'l-arda farashnaha. Farsh is bedding, what you spread on the ground in order to lie on it, and 2:22 uses the noun outright: He made the earth a firash for you. The praise that follows, fa-ni'ma al-mahidun, comes from the root of mahd, a cradle — the word 20:53 uses when it says He made the earth a mahd, and 78:6 when it asks whether He did not make it a mihad.",
            "bn": "ওয়াল-আরদা ফারাশনাহা। 'ফারশ' মানে বিছানা — যা মাটিতে বিছিয়ে দেওয়া হয় তার ওপর শোয়ার জন্য; আর 2:22 আয়াতে শব্দটি সরাসরিই এসেছে: তিনি তোমাদের জন্য যমীনকে 'ফিরাশ' বানিয়েছেন। এরপরের প্রশংসাবাক্য 'ফানি'মাল মাহিদূন' এসেছে 'মাহদ' অর্থাৎ দোলনার ধাতু থেকে — 20:53 আয়াত এই শব্দই ব্যবহার করে যখন বলে তিনি যমীনকে 'মাহদ' বানিয়েছেন, আর 78:6 আয়াত যখন জিজ্ঞেস করে তিনি কি একে 'মিহাদ' বানাননি।"
          },
          {
            "en": "Two images, bedding and a cradle, and both are chosen for a creature that has to lie down, that sleeps, that is carried before it can walk. Ibn Kathir glosses farashnaha as: We made it a resting place for the created. The earth is not presented here as raw material waiting to be conquered. It is presented as something already made comfortable for a body that tires.",
            "bn": "দুটি চিত্র — বিছানা আর দোলনা — আর দুটিই বাছা হয়েছে এমন এক সৃষ্টির জন্য, যাকে শুতে হয়, যে ঘুমায়, আর যে হাঁটতে শেখার আগে কোলে বাহিত হয়। ইবনে কাসীর 'ফারাশনাহা'-র ব্যাখ্যা করেন: আমি একে সৃষ্টিকুলের জন্য বিশ্রামের জায়গা বানিয়েছি। যমীনকে এখানে জয় করার অপেক্ষায় থাকা কাঁচামাল হিসেবে উপস্থাপন করা হয়নি। উপস্থাপন করা হয়েছে এমন কিছু হিসেবে, যা ক্লান্ত হয়ে পড়া এক শরীরের জন্য আগে থেকেই আরামদায়ক করে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two of Every Thing",
          "bn": "প্রত্যেক জিনিসের দুটি"
        },
        "p": [
          {
            "en": "Wa min kulli shay'in khalaqna zawjayn. Ibn Kathir reads the pairs widely — heaven and earth, night and day, sun and moon, land and sea, light and darkness, faith and disbelief, death and life, the Garden and the Fire — alongside the pairing of animals and plants. 36:36 stretches it further: exalted is He who created all the pairs, from what the earth grows, from themselves, and from what they do not know.",
            "bn": "ওয়া মিন কুল্লি শাইয়িন খালাকনা যাওজাইন। ইবনে কাসীর 'জোড়া'-কে ব্যাপক অর্থে পড়েন — আসমান ও যমীন, রাত ও দিন, সূর্য ও চাঁদ, স্থল ও সমুদ্র, আলো ও অন্ধকার, ঈমান ও কুফর, মৃত্যু ও জীবন, জান্নাত ও জাহান্নাম — এর সঙ্গে প্রাণী ও উদ্ভিদের জোড়াও। 36:36 আয়াত একে আরও প্রসারিত করে: পবিত্র তিনি, যিনি সব জোড়া সৃষ্টি করেছেন — যমীন যা উৎপন্ন করে তা থেকে, তাদের নিজেদের থেকে, আর তারা যা জানে না তা থেকেও।"
          },
          {
            "en": "Then the purpose clause: la'allakum tadhakkarun, that you may remember. Ibn Kathir spells out what is to be remembered — that the Creator is One, without a partner. The argument is quiet and it is finished. Everything you are able to inspect arrives in twos and is incomplete without its counterpart; the One who made them in twos is the only item in the account that is paired with nothing.",
            "bn": "এরপর উদ্দেশ্যবাচক বাক্যাংশ: লা'আল্লাকুম তাযাক্কারূন — যাতে তোমরা স্মরণ কর। ইবনে কাসীর খোলাসা করে বলেন কী স্মরণ করতে হবে — স্রষ্টা এক, তাঁর কোনো শরিক নেই। যুক্তিটি নিচু স্বরের, আর তা সম্পূর্ণ। তুমি যা কিছু পরীক্ষা করে দেখতে পারো তার সবই আসে জোড়ায়, আর নিজের জুড়ি ছাড়া তা অসম্পূর্ণ; যিনি এগুলোকে জোড়ায় বানিয়েছেন, গোটা হিসাবের মধ্যে কেবল তিনিই এমন, যাঁর কোনো জুড়ি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "So Flee",
          "bn": "অতএব দৌড়াও"
        },
        "p": [
          {
            "en": "The conclusion is not left to the reader to find. 51:50 follows at once: fa-firru ila Allah, so flee to Allah; indeed I am to you from Him a clear warner. Ibn Kathir glosses that fleeing as taking shelter with Him and entrusting your affairs to Him, and 51:51 completes it — do not set up another god along with Allah. 2:22 ends its own list of sky and earth on the same command.",
            "bn": "সিদ্ধান্তটি পাঠকের খুঁজে নেওয়ার জন্য ফেলে রাখা হয়নি। সঙ্গে সঙ্গেই আসে 51:50 আয়াত: ফাফিররূ ইলাল্লাহ — অতএব আল্লাহর দিকে দৌড়াও; নিশ্চয়ই আমি তোমাদের জন্য তাঁর পক্ষ থেকে স্পষ্ট সতর্ককারী। ইবনে কাসীর এই দৌড়ানোর ব্যাখ্যা করেন তাঁর কাছে আশ্রয় নেওয়া এবং সব বিষয় তাঁর হাতে সঁপে দেওয়া হিসেবে; আর 51:51 আয়াত তা পূর্ণ করে — আল্লাহর সঙ্গে অন্য কোনো ইলাহ দাঁড় করিয়ো না। 2:22 আয়াতও আসমান-যমীনের নিজের তালিকাটি একই নির্দেশে শেষ করে।"
          },
          {
            "en": "Fleeing is ordinarily movement away from a danger and towards a refuge, and here both ends of the movement are the same One. That is the practical shape of these three verses. They are not offered as material for wonder that leaves a reader where it found him. They are the reasons given for a decision, and the decision named is to run out of every other shelter and into His.",
            "bn": "দৌড়ে পালানো সাধারণত বিপদ থেকে দূরে সরে আশ্রয়ের দিকে যাওয়া, আর এখানে চলাচলের দুই প্রান্তেই একই সত্তা। এই তিনটি আয়াতের ব্যবহারিক রূপ এটিই। এগুলো এমন বিস্ময়ের উপকরণ হিসেবে দেওয়া হয়নি, যা পাঠককে যেখানে পেয়েছিল সেখানেই রেখে দেয়। এগুলো একটি সিদ্ধান্তের পক্ষে দেওয়া কারণ, আর সিদ্ধান্তটির নাম বলা আছে: অন্য সব আশ্রয় ছেড়ে তাঁরই আশ্রয়ে ছুটে যাওয়া।"
          }
        ]
      }
    ]
  },
  "51:55-56": {
    "sections": [
      {
        "h": {
          "en": "Keep Reminding",
          "bn": "স্মরণ করাতে থাকো"
        },
        "p": [
          {
            "en": "The command arrives as the correction of a possible misreading. The verse before it, 51:54, tells the Prophet ﷺ to turn away from those who obstinately refuse, and clears him of blame. If the passage ended there, withdrawal might look like the whole policy. 51:55 immediately reopens the work: and remind, for indeed the reminder benefits the believers. Turning from the mocker never cancels the reminding, because the reminder was never measured by the mocker's response.",
            "bn": "নির্দেশটি আসে একটি সম্ভাব্য ভুল পাঠের সংশোধন হয়ে। ঠিক আগের আয়াত 51:54 নবী ﷺ-কে বলে একগুঁয়ে অস্বীকারকারীদের থেকে মুখ ফিরিয়ে নিতে, এবং তাঁকে দায়মুক্ত ঘোষণা করে। অনুচ্ছেদ সেখানেই শেষ হলে সরে আসাটাই পুরো নীতি বলে মনে হতে পারত। 51:55 সাথে সাথে কাজটি আবার খুলে দেয়: আর স্মরণ করিয়ে দাও, কারণ স্মরণিকা মুমিনদের উপকারে আসে। উপহাসকারী থেকে মুখ ফেরানো কখনোই স্মরণ করানো বাতিল করে না, কারণ স্মরণিকার মাপকাঠি কোনোদিন উপহাসকারীর সাড়া ছিল না।"
          },
          {
            "en": "The mufassirun pause on whom the reminder profits: the believers — including those who already know. Knowledge sits in the heart like embers; reminding stirs it back to flame. This is why the Quran repeats itself, why the Friday sermon returns weekly, and why a believer can hear a truth learned in childhood and feel it land as if new. The benefit is not new information but the renewed presence of old truth.",
            "bn": "মুফাসসিরগণ থামেন এই প্রশ্নে — স্মরণিকা কার উপকারে আসে: মুমিনদের — যারা আগে থেকেই জানে তাদেরও। জ্ঞান অন্তরে থাকে জ্বলন্ত কয়লার মতো; স্মরণ করানো তাকে নেড়ে আবার শিখায় ফেরায়। এ কারণেই কুরআন নিজের কথা ফিরিয়ে বলে, জুমার খুতবা প্রতি সপ্তাহে ফিরে আসে, আর একজন মুমিন শৈশবে শেখা সত্য শুনেও অনুভব করে যেন তা নতুন করে নামল। উপকারটি নতুন তথ্য নয়, বরং পুরনো সত্যের নবায়িত উপস্থিতি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Purpose Sentence",
          "bn": "উদ্দেশ্যের বাক্য"
        },
        "p": [
          {
            "en": "Then comes one of the most quoted sentences in the Quran: wa ma khalaqtu al-jinna wal-insa illa li-ya'budun — I did not create the jinn and mankind except to worship Me. Arabic reaches its strongest exclusivity through negation followed by exception: first everything is denied, then one thing alone is restored. Whatever other purposes creatures invent for themselves, the Maker has stated His, and He states it in the first person.",
            "bn": "তারপর আসে কুরআনের সবচেয়ে বেশি উদ্ধৃত বাক্যগুলোর একটি: ওয়া মা খালাকতুল-জিন্না ওয়াল-ইনসা ইল্লা লিইয়া'বুদূন — আমি জিন ও মানুষকে সৃষ্টি করিনি আমার ইবাদত ছাড়া অন্য কোনো উদ্দেশ্যে। আরবি তার প্রবলতম একচ্ছত্রতায় পৌঁছায় অস্বীকৃতির পর ব্যতিক্রম দিয়ে: প্রথমে সবকিছু নাকচ হয়, তারপর একটিমাত্র জিনিস ফিরিয়ে আনা হয়। সৃষ্টিরা নিজেদের জন্য আর যত উদ্দেশ্যই বানাক, নির্মাতা তাঁরটি বলে দিয়েছেন — এবং বলেছেন উত্তম পুরুষে, নিজের জবানে।"
          },
          {
            "en": "The commentators are careful with the word worship. 'Ibadah in their usage is not ritual alone but the whole posture of a life — obedience, love, humility, gratitude, and the rituals that carry them. The prayer five times a day is worship; so, when done for Allah and within His bounds, are honest work, kept promises and kindness. The verse does not shrink life into the mosque; it stretches the mosque's meaning over life.",
            "bn": "ইবাদত শব্দটি নিয়ে মুফাসসিরগণ সতর্ক। তাঁদের ব্যবহারে 'ইবাদাহ কেবল আনুষ্ঠানিকতা নয়, বরং একটি জীবনের সামগ্রিক ভঙ্গি — আনুগত্য, ভালোবাসা, বিনয়, কৃতজ্ঞতা, আর সেগুলো বহনকারী আনুষ্ঠানিক আমল। দিনে পাঁচবারের নামায ইবাদত; তেমনি — আল্লাহর জন্য ও তাঁর সীমার ভেতরে করা হলে — সৎ কাজ, রক্ষা করা প্রতিশ্রুতি আর সদয়তাও ইবাদত। আয়াতটি জীবনকে মসজিদে সংকুচিত করে না; মসজিদের অর্থকে জীবনের উপর প্রসারিত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Does Not Need",
          "bn": "তাঁর যা প্রয়োজন নেই"
        },
        "p": [
          {
            "en": "The next verses close a misunderstanding before it can form. 51:57 says: I seek no provision from them, nor do I want them to feed Me. And 51:58 answers: indeed Allah is ar-Razzaq, the Provider, possessor of firm strength. Worship adds nothing to Allah, and its absence takes nothing from Him. The arrangement is the reverse of every human hierarchy: the One who is served is the One who provides, and the servants are the only beneficiaries of their service.",
            "bn": "পরের আয়াতগুলো একটি ভুল বোঝাবুঝি তৈরি হওয়ার আগেই তা বন্ধ করে দেয়। 51:57 বলে: আমি তাদের কাছে কোনো রিযিক চাই না, আর চাই না যে তারা আমাকে খাওয়াবে। আর 51:58 জবাব দেয়: নিশ্চয়ই আল্লাহই আর-রাযযাক — মহান রিযিকদাতা, প্রবল শক্তির অধিকারী। ইবাদত আল্লাহর কিছুই বাড়ায় না, তার অনুপস্থিতিও তাঁর কিছু কমায় না। বিন্যাসটি প্রতিটি মানবীয় স্তরবিন্যাসের উল্টো: যাঁর সেবা করা হয় তিনিই রিযিক দেন, আর সেবার একমাত্র উপকারভোগী সেবকরাই।"
          },
          {
            "en": "As-Sa'di draws the tender inversion out of the sequence: He created them to worship Him, and then He undertakes to provide for them while they do it. The servant's job description does not include supplying his own existence. This is why the surah swore earlier, in 51:22-23, that your provision is in heaven, and that this is as true as your own speech. Worship performed in a panic about sustenance has misread both verses at once.",
            "bn": "আস-সা'দী এই ক্রম থেকে কোমল উল্টোযাত্রাটি টেনে বের করেন: তিনি তাদের সৃষ্টি করেছেন তাঁর ইবাদতের জন্য, আর তারা তা করতে থাকা অবস্থায় তাদের রিযিকের দায়িত্ব তিনিই নিয়েছেন। বান্দার কাজের বিবরণে নিজের অস্তিত্বের জোগান দেওয়া নেই। এ কারণেই সূরাটি আগে, 51:22-23 আয়াতে, শপথ করেছিল — তোমাদের রিযিক আসমানে, আর এ কথা তেমনই সত্য যেমন সত্য তোমাদের নিজেদের কথা বলা। রিযিকের দুশ্চিন্তায় আতঙ্কিত হয়ে করা ইবাদত দুটি আয়াতকেই একসাথে ভুল পড়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship as a Path",
          "bn": "পথ হিসেবে ইবাদত"
        },
        "p": [
          {
            "en": "Other verses frame the same purpose from other angles. 2:21 calls mankind to worship the Lord who created them and those before them, so that they may attain taqwa. 36:61 recalls the covenant: worship Me — this is a straight path. Purpose and path are the same thing seen twice: worship is what we were made for and also the road that keeps a life from wandering. A thing worked against its design suffers for it, and the verse lets us name why a life without worship feels unanchored.",
            "bn": "অন্য আয়াতগুলো একই উদ্দেশ্যকে অন্য কোণ থেকে ফ্রেমে বাঁধে। 2:21 মানুষকে ডাকে সেই রবের ইবাদতে, যিনি তাদের ও তাদের পূর্ববর্তীদের সৃষ্টি করেছেন — যেন তারা তাকওয়া অর্জন করে। 36:61 অঙ্গীকারটি মনে করিয়ে দেয়: আমার ইবাদত করো — এটিই সরল পথ। উদ্দেশ্য আর পথ আসলে একই জিনিস দুবার দেখা: ইবাদত সেটিই যার জন্য আমরা নির্মিত, আবার সেই রাস্তাও যা একটি জীবনকে পথ হারানো থেকে বাঁচায়। কোনো জিনিস তার নকশার বিরুদ্ধে খাটালে সে-ই ভোগে; আর আয়াতটি আমাদের সেই কারণের নাম দিতে দেয় — ইবাদতহীন জীবন কেন নোঙরহীন লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Intention Widens the Gate",
          "bn": "নিয়ত দরজা প্রশস্ত করে"
        },
        "p": [
          {
            "en": "Al-Bukhari records the Prophet's ﷺ words: actions are only by intentions, and every person has only what he intended. Read beside 51:56, the hadith widens the gate of worship: the same hours of work, study or child-raising can be folded into the purpose of creation when they are done for Allah and within His limits. But the scholars keep the order straight — intention ennobles the permitted; it does not replace the prescribed. No sincere career substitutes for the prayer.",
            "bn": "বুখারী নবী ﷺ-এর বাণী লিপিবদ্ধ করেন: আমল তো নিয়ত দিয়েই, আর প্রত্যেকে তা-ই পায় যার সে নিয়ত করেছে। 51:56 আয়াতের পাশে রেখে পড়লে হাদীসটি ইবাদতের দরজা প্রশস্ত করে: কাজ, পড়াশোনা বা সন্তান লালনের একই ঘণ্টাগুলো সৃষ্টির উদ্দেশ্যের ভেতরে ভাঁজ হয়ে ঢুকে যেতে পারে — যখন তা আল্লাহর জন্য এবং তাঁর সীমার ভেতরে করা হয়। কিন্তু আলিমগণ ক্রমটি সোজা রাখেন — নিয়ত বৈধকে মহিমান্বিত করে; নির্ধারিত ফরযের বিকল্প হয় না। কোনো আন্তরিক পেশাই নামাযের জায়গা নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Folding the Day Back",
          "bn": "দিনটিকে উদ্দেশ্যে ফেরানো"
        },
        "p": [
          {
            "en": "The lived form of these two verses is a pair of habits. First, receive reminders without offense: when a verse, a sermon or a friend repeats what you already know, 51:55 has answered the objection in advance — benefit was promised precisely to those who know. Second, run the day backward through 51:56 each night: which hours folded into the purpose, and which ran loose beside it. Not to manufacture guilt, but to aim tomorrow.",
            "bn": "এই দুই আয়াতের যাপিত রূপ এক জোড়া অভ্যাস। প্রথমত, স্মরণিকা গ্রহণ করুন অসন্তুষ্ট না হয়ে: কোনো আয়াত, খুতবা বা বন্ধু যখন আপনার জানা কথাই আবার বলে, 51:55 আপত্তিটির জবাব আগেই দিয়ে রেখেছে — উপকারের প্রতিশ্রুতি তো তাদের জন্যই যারা জানে। দ্বিতীয়ত, প্রতি রাতে দিনটিকে 51:56 আয়াতের ভেতর দিয়ে উল্টো চালিয়ে দেখুন: কোন ঘণ্টাগুলো উদ্দেশ্যের ভাঁজে ঢুকল, আর কোনগুলো তার পাশে আলগা হয়ে গড়াল। অপরাধবোধ বানানোর জন্য নয়, আগামীকালের নিশানা ঠিক করার জন্য।"
          },
          {
            "en": "The verse also quietly reassigns worth. If the purpose of existence is worship, then the scale of a life is not output, audience or accumulation, but the degree to which it answered its Maker. That measure is available equally to the famous and the unknown, the strong and the ill. Whoever worships has hit the target of their creation, whatever else the world records; whoever does not has missed it, whatever else the world applauds.",
            "bn": "আয়াতটি নীরবে মূল্যের হিসাবও নতুন করে বসায়। অস্তিত্বের উদ্দেশ্য যদি ইবাদত হয়, তবে একটি জীবনের মাপকাঠি তার উৎপাদন, দর্শক বা সঞ্চয় নয়, বরং সে তার নির্মাতাকে কতটা সাড়া দিল সেটাই। এই মাপকাঠি বিখ্যাত ও অখ্যাত, সবল ও অসুস্থ — সবার জন্য সমানভাবে খোলা। যে ইবাদত করে সে তার সৃষ্টির নিশানায় লেগেছে — দুনিয়া আর যা-ই লিখুক; আর যে করে না সে তা ফসকেছে — দুনিয়া আর যত করতালিই দিক।"
          }
        ]
      }
    ]
  }
});
