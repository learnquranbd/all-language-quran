/**
 * Tadabbur long-form articles — surah 78.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "78:3": {
    "sections": [
      {
        "h": {
          "en": "A Question Answered at Once",
          "bn": "প্রশ্নের পরেই জবাব"
        },
        "p": [
          {
            "en": "Surah an-Naba, revealed in Makkah, opens with a question: 'amma yatasa'alun, about what are they asking one another? It does not wait for a reply. 78:2 answers, 'an an-naba' al-'azim, about the great news, and 78:3 completes the answer in four Arabic words: alladhi hum fihi mukhtalifun, the one over which they are in disagreement. The verse is therefore not a fresh statement. It is the description that tells the hearer which great news is meant: the one already dividing the very people who are asking about it.",
            "bn": "সূরা আন-নাবা মক্কায় নাযিল হয়েছে, আর তার শুরু একটা প্রশ্ন দিয়ে: আম্মা ইয়াতাসাআলূন, তারা একে অন্যকে কী নিয়ে জিজ্ঞেস করছে? জবাবের জন্য অপেক্ষা করতে হয় না। ৭৮:২ বলে দেয়, আনিন নাবায়িল আযীম, মহাসংবাদ নিয়ে। আর ৭৮:৩ আরবি চারটি শব্দে জবাবটা পূর্ণ করে: আল্লাযী হুম ফীহি মুখতালিফূন, যে বিষয়ে তাদের মধ্যে মতভেদ। তাই আয়াতটি নতুন কোনো ঘোষণা নয়। শ্রোতা যেন বুঝতে পারে কোন মহাসংবাদের কথা হচ্ছে, এ তারই পরিচয়। সেই সংবাদ, যা প্রশ্নকারীদের নিজেদেরকেই ইতিমধ্যে ভাগ করে ফেলেছে।"
          },
          {
            "en": "What follows is a warning given twice, in 78:4 and 78:5: kalla sa-ya'lamun, no, they are going to know, then the same words again after thumma, then. Ibn Kathir calls it a severe threat and a direct warning, and reads 78:6 onward as Allah setting out His power as proof that He can do whatever He wills concerning the Hereafter. So 78:3 sits at a hinge. It names the dispute, and everything after it answers the dispute: first a warning, then evidence taken from the earth, the mountains, human pairs and sleep.",
            "bn": "এরপর ৭৮:৪ ও ৭৮:৫ আয়াতে দুবার সতর্কবাণী: কাল্লা সাইয়া'লামূন, কক্ষনো না, তারা শীঘ্রই জানবে। তারপর ছুম্মা, অর্থাৎ আবার, জুড়ে দিয়ে একই কথা। ইবন কাসীর একে বলেন কঠোর হুমকি ও সরাসরি সতর্কবার্তা। ৭৮:৬ থেকে পরের আয়াতগুলোকে তিনি পড়েন আল্লাহর কুদরতের বর্ণনা হিসেবে, যা প্রমাণ করে আখিরাতের ব্যাপারে তিনি যা চান তা-ই করতে পারেন। ফলে ৭৮:৩ দাঁড়িয়ে আছে একটা কবজার জায়গায়। এ আয়াত বিবাদটার নাম বলে দেয়, আর এর পরের সবকিছু সেই বিবাদের জবাব। প্রথমে সতর্কবাণী, তারপর প্রমাণ: যমীন, পাহাড়, জোড়ায় জোড়ায় মানুষ আর ঘুম।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighty News, Divided Hearers",
          "bn": "ভারী সংবাদ, বিভক্ত শ্রোতা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an notes that naba' means news, but not every piece of news is a naba'; the word is kept for momentous news of a great event. Ibn Kathir, in his Arabic, glosses an-naba' al-'azim as al-khabar al-ha'il al-mufzi' al-bahir: the dreadful, alarming, overwhelming report. The adjective 'azim, great, then adds to that weight. Whatever the news turns out to be, both commentators agree on how heavy it is. This is not idle talk passed around a town; it is the kind of report that changes everything for whoever believes it.",
            "bn": "মাআরিফুল কুরআন বলে, নাবা মানে সংবাদ, তবে সব সংবাদ নাবা নয়। শব্দটা রাখা হয় কোনো বড় ঘটনার গুরুতর সংবাদের জন্য। ইবন কাসীর তাঁর আরবি তাফসীরে আন-নাবাউল আযীমের ব্যাখ্যা দেন আল-খাবারুল হায়িলুল মুফযিউল বাহির বলে: ভয়ংকর, আতঙ্ক জাগানো, অভিভূত করে দেওয়া খবর। তার ওপর বিশেষণ আযীম, মহা, ভারটা আরও বাড়িয়ে দেয়। সংবাদটা শেষ পর্যন্ত যা-ই হোক, এর ওজন নিয়ে দুই তাফসীরকারই একমত। শহরের অলস গালগল্প এটা নয়। এ এমন খবর, যে বিশ্বাস করে তার জীবনের সবকিছুই বদলে দেয়।"
          },
          {
            "en": "Mukhtalifun is a participle from the root kh-l-f, here carrying the sense of differing and taking opposite sides. At-Tabari glosses the clause with a verb of becoming: the thing over which they became two parties, one party affirming it and one party denying it. Al-Qurtubi gives the mutual sense: yukhalifu fihi ba'duhum ba'dan, some of them oppose others over it, so that one affirms and another denies. The relative word alladhi ties the whole verse back to the news, so that the news is identified by the quarrel that has gathered around it.",
            "bn": "মুখতালিফূন শব্দটি খ-ল-ফ ধাতু থেকে আসা কর্তাবাচক রূপ। এখানে এর অর্থ মতভেদ, দুই বিপরীত পক্ষে ভাগ হয়ে যাওয়া। তাবারী বাক্যটির ব্যাখ্যায় 'হয়ে যাওয়া' অর্থের একটি ক্রিয়া আনেন: যে বিষয়ে তারা দুই দলে ভাগ হয়ে গেছে, এক দল তা সত্য বলে মানে, আরেক দল মিথ্যা বলে। কুরতুবী পারস্পরিক অর্থটা সামনে আনেন: ইউখালিফু ফীহি বা'দুহুম বা'দান, তাদের একদল অন্যদলের বিরোধিতা করে, একজন সত্য বলে তো আরেকজন মিথ্যা বলে। আল্লাযী শব্দটি গোটা আয়াতকে সংবাদের সঙ্গে বেঁধে দেয়। ফলে সংবাদটার পরিচয় মেলে তাকে ঘিরে জমে ওঠা বিবাদ দিয়েই।"
          }
        ]
      },
      {
        "h": {
          "en": "Which News Is Meant",
          "bn": "কোন সংবাদের কথা"
        },
        "p": [
          {
            "en": "The commentators do not agree on what the great news is, and at-Tabari, on 78:2, opens the question with the words: the people of interpretation differed. One group said the Qur'an, and he reports it from Mujahid. Al-Qurtubi, on 78:3, reports the same from Ibn Abbas (RA) through Abu Salih, and gives the proof text 38:67 and 38:68: say, it is great news from which you turn away. The Qur'an, he says, is naba', report and story, and a report of great standing. Al-Baghawi says this is the view of Mujahid and of most commentators.",
            "bn": "মহাসংবাদ বলতে কী বোঝানো হয়েছে, সে বিষয়ে তাফসীরকারেরা একমত নন। তাবারী ৭৮:২ আয়াতে প্রশ্নটা শুরুই করেন এ কথা বলে: ব্যাখ্যাকারেরা এখানে মতভেদ করেছেন। একদল বলেছেন, এ হলো কুরআন। তাবারী মতটি বর্ণনা করেন মুজাহিদ থেকে। কুরতুবী ৭৮:৩ আয়াতে একই কথা আনেন ইবন আব্বাস (রাঃ) থেকে, আবু সালিহের সূত্রে। প্রমাণ হিসেবে তিনি দেখান ৩৮:৬৭ ও ৩৮:৬৮: বলো, এ এক মহাসংবাদ, যা থেকে তোমরা মুখ ফিরিয়ে নিচ্ছ। তাঁর কথায়, কুরআন নিজেই নাবা, খবর আর কাহিনি, আর তা অতি মর্যাদাপূর্ণ খবর। বাগাভী বলেন, এটি মুজাহিদ এবং অধিকাংশ তাফসীরকারের মত।"
          },
          {
            "en": "A second group said the resurrection after death. At-Tabari reports it from Qatada by two chains, and from Ibn Zayd in the form Yawm al-Qiyama, the Day of Resurrection. Ibn Kathir's Arabic names Qatada and Ibn Zayd for the resurrection and Mujahid for the Qur'an, side by side, and does not rank them there. His abridged English and Ma'arif al-Qur'an both take the news to be the Day of Judgement. Al-Qurtubi then adds a third view under qila, it was said: the matter of the Prophet ﷺ, with no name attached to it.",
            "bn": "আরেক দল বলেছেন, এ হলো মৃত্যুর পরের পুনরুত্থান। তাবারী মতটি কাতাদা থেকে দুটি সনদে বর্ণনা করেন, আর ইবন যায়দ থেকে আনেন ইয়াওমুল কিয়ামাহ, কিয়ামতের দিন, এই শব্দে। ইবন কাসীর আরবি তাফসীরে পাশাপাশি দুটো মতই রাখেন: পুনরুত্থানের পক্ষে কাতাদা ও ইবন যায়দ, কুরআনের পক্ষে মুজাহিদ। সেখানে তিনি কোনোটিকে অগ্রাধিকার দেন না। তবে তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণ এবং মাআরিফুল কুরআন দুটোই সংবাদটিকে বিচার দিবস বলে ধরেছে। কুরতুবী এরপর 'কীলা', অর্থাৎ বলা হয়েছে, শব্দ দিয়ে তৃতীয় একটি মত আনেন: নবী ﷺ-এর বিষয়। এ মতের সঙ্গে কারও নাম জোড়া নেই।"
          },
          {
            "en": "Al-Muyassar joins the first two: the great news is the Qur'an, which brings word of the resurrection that the disbelievers of Quraysh doubted and denied. At-Tabari lists both groups with their chains and states no preference between them. Al-Qurtubi also preserves a different report, from ad-Dahhak from Ibn Abbas (RA): that the Jews asked the Prophet ﷺ about many things, and Allah informed him of their disagreement. None of these readings is set aside here. The verse itself names the news by its effect, and every reading keeps that effect: people split over it.",
            "bn": "মুয়াসসার প্রথম দুটো মতকে এক জায়গায় আনে: মহাসংবাদ হলো কুরআন, যা সেই পুনরুত্থানের খবর দেয়, যাতে কুরাইশের কাফিররা সন্দেহ করেছিল এবং যাকে তারা মিথ্যা বলেছিল। তাবারী সনদসহ দুই দলের মতই তুলে ধরেন, কোনোটির পক্ষে নিজের রায় দেন না। কুরতুবী আরেকটি ভিন্ন বর্ণনাও রেখে দেন, দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে: ইহুদিরা নবী ﷺ-কে অনেক বিষয়ে প্রশ্ন করেছিল, আর আল্লাহ তাঁকে তাদের মতভেদের খবর জানিয়ে দেন। এখানে কোনো মতকেই বাদ দেওয়া হচ্ছে না। আয়াত নিজেই সংবাদটাকে চিনিয়েছে তার ফল দিয়ে, আর প্রতিটি ব্যাখ্যাতেই সেই ফল অটুট: মানুষ এ নিয়ে ভাগ হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Kinds of Disagreement",
          "bn": "মতভেদের দুই চেহারা"
        },
        "p": [
          {
            "en": "The second question is who was disagreeing with whom. Most of the commentators read mukhtalifun as a split between those who believed and those who denied. Ibn Kathir's Arabic is brief: the people hold two positions on it, believer and disbeliever. Al-Baghawi says only: so one affirms and one denies. At-Tabari reports Qatada with a sharp observation. The people became two men over it, an affirmer and a denier. As for death, they all acknowledged it, because they had seen it with their own eyes; they differed over the rising after death.",
            "bn": "দ্বিতীয় প্রশ্ন: মতভেদটা কার সঙ্গে কার? বেশিরভাগ তাফসীরকার মুখতালিফূন পড়েছেন বিশ্বাসী আর অস্বীকারকারীর মধ্যকার বিভক্তি হিসেবে। ইবন কাসীরের আরবি তাফসীর এখানে সংক্ষিপ্ত: এ বিষয়ে মানুষের দুটো অবস্থান, কেউ মুমিন, কেউ কাফির। বাগাভী শুধু এটুকু বলেন: একজন সত্য বলে মানে, আরেকজন মিথ্যা বলে। তাবারী কাতাদার একটি তীক্ষ্ণ পর্যবেক্ষণ বর্ণনা করেন। এ বিষয়ে মানুষ দুই রকম হয়ে গেল, একজন বিশ্বাস করে, আরেকজন অস্বীকার করে। মৃত্যুকে অবশ্য সবাই মেনে নিয়েছিল, কারণ নিজের চোখে তা দেখেছিল। তাদের মতভেদ ছিল মৃত্যুর পরে আবার জীবিত হওয়া নিয়ে।"
          },
          {
            "en": "Another strand places the differing among those who did not believe. Ibn Zayd, in at-Tabari on 78:2, has them say: this is the day you claim we and our fathers will live again; and they are in disagreement over it, not believing in it. As-Sa'di describes a dispute that grew long and a disagreement that spread by way of takdhib and istib'ad, denial and dismissing it as far-fetched. Al-Muyassar pairs doubt and denial in one sentence. Ma'arif al-Qur'an reports that some commentators saw the asking as half mockery and half doubt.",
            "bn": "আরেকটি ধারা মতভেদকে রাখে যারা বিশ্বাস করেনি তাদের ভেতরেই। তাবারী ৭৮:২ আয়াতে ইবন যায়দের যে কথা আনেন, তাতে তারা বলে: এই সেই দিন, যেদিন নাকি তোমাদের দাবি অনুযায়ী আমরা আর আমাদের বাপদাদারা আবার জীবিত হব। তারা এ নিয়ে মতভেদে আছে, আর তাতে বিশ্বাস করে না। সা'দী বলেন, বিবাদটা দীর্ঘ হয়েছিল, আর মতভেদ ছড়িয়ে পড়েছিল তাকযীব ও ইস্তিব'আদের পথে, অর্থাৎ মিথ্যা বলা আর অসম্ভব ভেবে উড়িয়ে দেওয়া। মুয়াসসার একটি বাক্যেই সন্দেহ আর অস্বীকার পাশাপাশি রাখে। মাআরিফুল কুরআন জানায়, কিছু তাফসীরকারের মতে তাদের প্রশ্নটা ছিল অর্ধেক ঠাট্টা, অর্ধেক সন্দেহ।"
          },
          {
            "en": "These are two different claims, and they are kept apart here with the names of those who hold them. The identification of the questioners with Quraysh or with the people of Makkah comes from al-Muyassar, from Ma'arif al-Qur'an and from the scholars of Arabic whom at-Tabari cites. The verse describes what those listeners did with the news in their own time. It licenses nothing against any living person or community, and it hands no reader a label to fix on anyone today, whether a neighbour, a relative or a whole people.",
            "bn": "এ দুটি আলাদা দাবি। তাই এখানে দুটিকে আলাদা রাখা হলো, যাঁরা যে মত দিয়েছেন তাঁদের নামসহ। প্রশ্নকারীরা কুরাইশ বা মক্কার লোক, এই পরিচয় এসেছে মুয়াসসার, মাআরিফুল কুরআন আর তাবারীর উদ্ধৃত কয়েকজন আরবি ভাষাবিদের কাছ থেকে। আয়াতটি বর্ণনা করছে, সেই শ্রোতারা তাদের নিজেদের সময়ে সংবাদটার সঙ্গে কী আচরণ করেছিল। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। প্রতিবেশী, আত্মীয় বা গোটা কোনো জাতির গায়ে সেঁটে দেওয়ার মতো কোনো তকমাও এ আয়াত পাঠকের হাতে তুলে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Narration on the Verse",
          "bn": "আয়াতের সঙ্গে জোড়া হাদীস নেই"
        },
        "p": [
          {
            "en": "None of the commentaries consulted here attaches a sound hadith to 78:3. Ma'arif al-Qur'an relates from Ibn Abbas (RA), without giving a chain, that when the revelation began the pagan Arabs would sit in circles discussing and criticising it, above all its talk of resurrection and judgement, which they held to be impossible. That describes the setting, offered as a report. It is not treated here as an established occasion of revelation, and al-Qurtubi's report from ad-Dahhak, mentioned above, stands beside it as one more view.",
            "bn": "এখানে যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই ৭৮:৩ আয়াতের সঙ্গে কোনো সহীহ হাদীস জুড়ে দেয়নি। মাআরিফুল কুরআন সনদ উল্লেখ না করে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করে: ওহী নাযিল শুরু হলে মুশরিক আরবরা গোল হয়ে বসে তা নিয়ে আলোচনা আর সমালোচনা করত। বিশেষ করে পুনরুত্থান আর বিচারের কথা তাদের কাছে অসম্ভব মনে হতো। এ বর্ণনা পরিবেশের একটা ছবি দেয়, একটা খবর হিসেবেই। এখানে একে নাযিলের প্রতিষ্ঠিত প্রেক্ষাপট বলে ধরা হচ্ছে না। আগে উল্লেখ করা দাহহাকের সূত্রে কুরতুবীর বর্ণনাও এর পাশে আরেকটি মত হিসেবেই থাকছে।"
          },
          {
            "en": "There is a general narration about the surah, not attached to this verse. At-Tirmidhi narrates from Ibn Abbas (RA): Abu Bakr (RA) said, 'O Messenger of Allah! You have become grey.' He said: 'I have gone grey from Hud, al-Waqi'ah, al-Mursalat, 'Amma yatasa'alun and Idha ash-shamsu kuwwirat.' At-Tirmidhi grades it hasan gharib, saying it is known from Ibn Abbas only by this route, and he notes other versions of it, one of them mursal. It speaks of the surah as a whole, a surah that opens on this dispute.",
            "bn": "সূরা সম্পর্কে একটি সাধারণ বর্ণনা আছে, যা এ আয়াতের সঙ্গে জোড়া নয়। তিরমিযী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: আবু বকর (রাঃ) বললেন, 'হে আল্লাহর রাসূল! আপনার চুল তো পেকে গেছে।' তিনি বললেন: 'আমার চুল পাকিয়ে দিয়েছে হূদ, আল-ওয়াকিআ, আল-মুরসালাত, আম্মা ইয়াতাসাআলূন আর ইযাশ শামসু কুওভিরাত।' তিরমিযী একে হাসান গরীব বলেছেন। তাঁর কথায়, ইবন আব্বাস থেকে এটি কেবল এই সূত্রেই জানা যায়। এর অন্য কয়েকটি বর্ণনার কথাও তিনি উল্লেখ করেন, যার একটি মুরসাল। বর্ণনাটি পুরো সূরা নিয়ে, আর সে সূরার শুরুই এই বিবাদ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Other Verses on the Dispute",
          "bn": "একই বিবাদ, অন্য আয়াতে"
        },
        "p": [
          {
            "en": "38:67 and 38:68 are the verses al-Qurtubi and al-Baghawi cite for the Qur'an reading: say, it is great news from which you turn away. Ibn Zayd, in at-Tabari, cites the same passage for the Day of Resurrection. 16:38 and 16:39 use almost the wording of 78:3. The deniers swear that Allah will not raise the dead; the reply is that He will, so as to make clear to them alladhi yakhtalifuna fihi, that over which they differ. There the differing is plainly about the resurrection, and the answer is that the rising itself will settle it.",
            "bn": "৩৮:৬৭ ও ৩৮:৬৮ আয়াতকে কুরতুবী ও বাগাভী কুরআন-মতের দলীল হিসেবে আনেন: বলো, এ এক মহাসংবাদ, যা থেকে তোমরা মুখ ফিরিয়ে নিচ্ছ। আবার তাবারীর বর্ণনায় ইবন যায়দ একই আয়াত টেনে আনেন কিয়ামতের দিন প্রসঙ্গে। ১৬:৩৮ ও ১৬:৩৯ আয়াতের শব্দ প্রায় ৭৮:৩ আয়াতের মতোই। অস্বীকারকারীরা কসম খেয়ে বলে, যে মরে আল্লাহ তাকে আর জীবিত করবেন না। জবাব আসে, অবশ্যই করবেন, যাতে তিনি তাদের সামনে স্পষ্ট করে দেন আল্লাযী ইয়াখতালিফূনা ফীহ, যা নিয়ে তারা মতভেদ করে। সেখানে মতভেদটা যে পুনরুত্থান নিয়ে, তা পরিষ্কার। আর জবাব হলো, পুনরুত্থান নিজেই এর মীমাংসা করে দেবে।"
          },
          {
            "en": "51:8 and 51:9 tell the deniers they are in qawl mukhtalif, differing speech, and that whoever is turned from it has been turned away. 27:66 traces their knowledge of the Hereafter running out, then doubt, then blindness, a sequence close to al-Muyassar's pairing of doubt with denial. 39:46 carries the question to its final court: You will judge between Your servants concerning that over which they used to differ. And within an-Naba itself, 78:17 names the Day of Decision as an appointed time, the date the dispute was always heading towards.",
            "bn": "৫১:৮ ও ৫১:৯ আয়াত অস্বীকারকারীদের বলে, তোমরা কাওলিম মুখতালিফ, পরস্পরবিরোধী কথার মধ্যে আছ। আর এ থেকে যে ফিরে যায়, তাকে আসলে ফিরিয়ে দেওয়া হয়েছে। ২৭:৬৬ আয়াত দেখায়, আখিরাত নিয়ে তাদের জ্ঞান ফুরিয়ে গেছে, তারপর এসেছে সন্দেহ, তারপর অন্ধত্ব। মুয়াসসার সন্দেহ আর অস্বীকারকে যেভাবে পাশাপাশি রেখেছে, এ ধাপগুলো তার কাছাকাছি। ৩৯:৪৬ প্রশ্নটাকে শেষ আদালতে নিয়ে যায়: তুমিই তোমার বান্দাদের মধ্যে ফয়সালা করবে, যে বিষয়ে তারা মতভেদ করত। আর আন-নাবা সূরাতেই ৭৮:১৭ আয়াত বিচারের দিনকে বলে নির্ধারিত সময়। বিবাদটা শুরু থেকেই সেই তারিখের দিকে এগোচ্ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Living as if It Were Settled",
          "bn": "মীমাংসিত বিষয়ের মতো জীবন"
        },
        "p": [
          {
            "en": "Qatada's remark is the place to begin. No one in Makkah argued about death, because everyone had watched it happen; the quarrel began at what comes after. Many people today hold the same line in practice. Death is certain and planned for, with wills, savings and burial plots arranged in advance, while the rising is left as something to discuss. A believer can test himself here. Which of my plans assume that the news is true? Which of them would look exactly the same if I were one of those still arguing?",
            "bn": "শুরু করা যায় কাতাদার কথাটা দিয়ে। মক্কায় কেউ মৃত্যু নিয়ে তর্ক করেনি, কারণ সবাই তা ঘটতে দেখেছে। ঝগড়া শুরু হয়েছে তার পরের অংশ নিয়ে। আজও অনেক মানুষ কাজেকর্মে ঠিক এই সীমারেখাই মেনে চলে। মৃত্যু নিশ্চিত, তাই তার প্রস্তুতিও আছে: ওসিয়ত, সঞ্চয়, কবরের জায়গা আগেভাগে ঠিক করা। অথচ পুনরুত্থান থেকে যায় আলোচনার বিষয় হয়ে। একজন মুমিন এখানে নিজেকে যাচাই করতে পারেন। আমার কোন পরিকল্পনাগুলো ধরে নেয় যে সংবাদটা সত্য? আর কোনগুলো হুবহু একই থাকত, যদি আমিও তর্ক করতে থাকা লোকদের একজন হতাম?"
          },
          {
            "en": "The verse also describes a kind of talk. They were asking one another, and as-Sa'di calls it a dispute that grew long. Talk about the Hereafter can become a substitute for preparing for it: debates about signs, timetables and details, with no change in prayer, debts or speech. A practical week might look like this. Settle one debt or one wrong you owe someone. Pray one prayer as a person who will be raised and asked about it. And when the subject comes up among friends, close the conversation with something to do rather than something to argue over.",
            "bn": "আয়াতটি এক ধরনের আলাপেরও ছবি আঁকে। তারা একে অন্যকে জিজ্ঞেস করছিল, আর সা'দী বলেন, সে বিবাদ দীর্ঘ হয়ে গিয়েছিল। আখিরাত নিয়ে কথা বলাটা কখনো কখনো তার প্রস্তুতির বদলি হয়ে দাঁড়ায়। আলামত, সময়সূচি আর খুঁটিনাটি নিয়ে বিতর্ক চলে, অথচ নামায, দেনা বা মুখের কথায় কোনো বদল আসে না। একটা বাস্তব সপ্তাহ হতে পারে এরকম। কারও কাছে একটা দেনা বা একটা অন্যায়ের দায় থাকলে তা মিটিয়ে দিন। এক ওয়াক্ত নামায পড়ুন এমন মানুষ হিসেবে, যাকে আবার ওঠানো হবে আর এ নামায সম্পর্কে জিজ্ঞেস করা হবে। আর বন্ধুদের মধ্যে প্রসঙ্গটা উঠলে আলাপ শেষ করুন করণীয় কিছু দিয়ে, তর্কের নতুন বিষয় দিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Guided Through",
          "bn": "মতভেদের মাঝে পথ চাওয়া"
        },
        "p": [
          {
            "en": "Muslim narrates that Abu Salama ibn Abd ar-Rahman asked A'isha (RA) how the Prophet ﷺ opened his prayer when he rose at night. She said he would open it with: 'O Allah, Lord of Jibril, Mika'il and Israfil, Originator of the heavens and the earth, Knower of the unseen and the seen, You judge between Your servants in what they used to differ over. Guide me, by Your leave, to the truth in what has been differed over, for You guide whom You will to a straight path.' It is not attached to 78:3, but it turns the verse's word for differing into a request.",
            "bn": "মুসলিম বর্ণনা করেন, আবু সালামা ইবন আবদির রহমান আয়িশা (রাঃ)-কে জিজ্ঞেস করেছিলেন, রাতে উঠে নবী ﷺ কী দিয়ে নামায শুরু করতেন। তিনি বললেন, তিনি শুরু করতেন এভাবে: 'হে আল্লাহ, জিবরীল, মীকাঈল ও ইসরাফীলের রব, আসমান ও যমীনের স্রষ্টা, গায়েব ও প্রকাশ্যের জ্ঞানী! তোমার বান্দারা যে বিষয়ে মতভেদ করত, তুমিই তার ফয়সালা করো। যে সত্য নিয়ে মতভেদ হয়েছে, তোমার অনুমতিতে আমাকে সেদিকে পথ দেখাও। নিশ্চয়ই তুমি যাকে চাও সরল পথে পরিচালিত করো।' এ দুআ ৭৮:৩ আয়াতের সঙ্গে জোড়া নয়। তবে আয়াতে মতভেদের যে শব্দ, এ দুআ সেটাকেই একটা প্রার্থনায় বদলে দেয়।"
          },
          {
            "en": "Some questions to carry from the verse. What part of the great news do I affirm in words while my week argues the other side? When I hear people quarrel over the truth, does their quarrel become my excuse for standing aside? Do I come to the Qur'an expecting news meant for me, or a subject to have views about? And if Qatada is right that no one disputes the death they have seen, what would I change if I held what follows it with the same certainty?",
            "bn": "আয়াত থেকে সঙ্গে নেওয়ার মতো কয়েকটি প্রশ্ন। মহাসংবাদের কোন অংশ আমি মুখে স্বীকার করি, অথচ আমার পুরো সপ্তাহ উল্টো পক্ষের হয়ে কথা বলে? সত্য নিয়ে মানুষকে ঝগড়া করতে শুনলে কি সেই ঝগড়াই আমার দূরে সরে থাকার অজুহাত হয়ে যায়? কুরআনের কাছে আমি কি যাই আমার জন্য পাঠানো খবরের আশায়, নাকি মতামত দেওয়ার মতো একটা বিষয় হিসেবে? আর কাতাদার কথাই যদি ঠিক হয় যে চোখে দেখা মৃত্যু নিয়ে কেউ তর্ক করে না, তবে তার পরের অংশকেও একই নিশ্চয়তায় ধরলে আমি কী বদলাতাম?"
          }
        ]
      }
    ]
  },
  "78:9": {
    "sections": [
      {
        "h": {
          "en": "The Question the List Answers",
          "bn": "তালিকাটি যে প্রশ্নের জবাব"
        },
        "p": [
          {
            "en": "Surah an-Naba opens on a dispute. 78:1 asks about what they are questioning one another, and 78:2-3 answer: about the great news, the one they are divided over. 78:4-5 then warn twice in nearly the same words — no, they are going to know. After that the surah stops arguing and starts listing. 78:6 begins it: have We not made the earth a resting place?",
            "bn": "সূরা আন-নাবা শুরু হয় একটি বিতর্ক দিয়ে। 78:1 জিজ্ঞেস করে, তারা একে অপরকে কী বিষয়ে প্রশ্ন করছে; আর 78:2-3 জবাব দেয় — সেই মহাসংবাদ সম্পর্কে, যা নিয়ে তারা মতভেদে লিপ্ত। এরপর 78:4-5 প্রায় একই শব্দে দুইবার সতর্ক করে — না, তারা শীঘ্রই জেনে যাবে। এর পরেই সূরাটি তর্ক থামিয়ে তালিকা শুরু করে। 78:6 দিয়ে তার সূচনা: আমি কি যমীনকে বিছানা বানাইনি?"
          },
          {
            "en": "The grammar of that opening matters. It is not a claim but a question, and a question of the kind that forces the hearer to concede. Nobody hearing it in Makkah could answer no. Every item that follows is drawn from what the deniers already grant, so the surah builds its case for the Day out of materials its opponents themselves supplied and never disputed.",
            "bn": "ওই সূচনার ব্যাকরণটি গুরুত্বপূর্ণ। এটি কোনো দাবি নয়, প্রশ্ন — আর এমন ধরনের প্রশ্ন যা শ্রোতাকে স্বীকার করতে বাধ্য করে। মক্কায় যারা এটি শুনেছিল, তাদের কেউই 'না' বলতে পারত না। এরপর যা যা আসে তার প্রতিটিই অস্বীকারকারীরা নিজেরাই মেনে নেয় এমন বিষয় থেকে নেওয়া। ফলে সূরাটি কিয়ামতের পক্ষে তার যুক্তি গড়ে তোলে বিরোধীদেরই সরবরাহ করা উপাদান দিয়ে, যা নিয়ে তাদের কোনো আপত্তি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Sleep Sits",
          "bn": "ঘুম কোথায় বসে আছে"
        },
        "p": [
          {
            "en": "The run does not stop until 78:16. Nine makings are named in it: the earth as a bed, the mountains as stakes, you yourselves in pairs, your sleep, the night, the day, seven firm structures above you, a blazing lamp, and water poured down from the rain clouds — after which 78:15 and 78:16 say what that water brings up, grain, vegetation and thick gardens.",
            "bn": "এই ধারা থামে না 78:16-এর আগে। এর ভেতরে নয়টি সৃষ্টি বা বিন্যাসের কথা আসে: যমীনকে শয্যা করা, পাহাড়কে কীলক করা, তোমাদেরকে জোড়ায় জোড়ায় সৃষ্টি করা, তোমাদের ঘুম, রাত, দিন, তোমাদের ওপরে সাতটি সুদৃঢ় আকাশ, একটি উজ্জ্বল প্রদীপ, আর মেঘ থেকে বর্ষিত পানি — এরপর 78:15 ও 78:16 বলে সেই পানি কী উৎপন্ন করে: শস্য, উদ্ভিদ আর ঘন উদ্যান।"
          },
          {
            "en": "Four of those clauses open with wa ja'alna, and We made, and 78:9 is the first of them: wa ja'alna nawmakum subata, three words. It arrives fourth on the list, directly after the making of human beings in pairs and directly before the night and the day. The surah has just turned from ground and rock to the addressee himself, and sleep is the first item on the list that happens to him rather than describing what he is.",
            "bn": "এর মধ্যে চারটি বাক্য শুরু হয় 'ওয়া জা'আলনা' — এবং আমি বানিয়েছি — দিয়ে, আর 78:9 তার প্রথমটি: ওয়া জা'আলনা নাওমাকুম সুবাতা, তিনটি শব্দ। তালিকায় এর অবস্থান চতুর্থ, ঠিক মানুষকে জোড়ায় জোড়ায় সৃষ্টি করার কথার পরে এবং ঠিক রাত ও দিনের কথার আগে। সূরাটি এইমাত্র মাটি ও পাথর থেকে সরে এসে সম্বোধিত মানুষটির কাছে পৌঁছেছে, আর তালিকার মধ্যে ঘুমই প্রথম বিষয় যা তার সঙ্গে ঘটে — সে কী, তা বলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Subat, and Your Sleep",
          "bn": "সুবাত, আর তোমাদের ঘুম"
        },
        "p": [
          {
            "en": "The translation you will read renders subat as rest, and that is one of two senses the commentators give. The other lies in the root, which carries cutting off and ceasing; on that reading sleep is named for the halt it imposes rather than the comfort it delivers. Classical works keep both — the stilling of movement so that the day's fatigue lifts, and the severing of activity that makes rest possible in the first place.",
            "bn": "আপনি যে অনুবাদ পড়বেন সেখানে 'সুবাত'-এর অর্থ করা হয়েছে বিশ্রাম, আর মুফাসসিরগণ যে দুটি অর্থ দেন এটি তার একটি। অন্যটি লুকিয়ে আছে ধাতুতে, যা বহন করে ছিন্ন করা ও থেমে যাওয়ার অর্থ; সেই পাঠে ঘুমের নামকরণ হয়েছে সে যে থামিয়ে দেয় সেই কারণে, যে আরাম দেয় সেই কারণে নয়। শাস্ত্রীয় তাফসিরগুলো দুটোই রাখে — চলাচল স্তব্ধ হওয়া যাতে দিনের ক্লান্তি কেটে যায়, আর কাজের ধারাবাহিকতা ছিন্ন হওয়া যাতে বিশ্রাম আদৌ সম্ভব হয়।"
          },
          {
            "en": "Then the possessive: nawmakum, your sleep. Everything else on this list is out there — ground, rock, sky, sun, cloud. This one is inside the person addressed, and it is the only item he undergoes rather than uses. Even the pairs of 78:8 describe what he is. Sleep is done to him nightly on a schedule he did not set, and the verse counts it among the same evidences as the seven heavens.",
            "bn": "এরপর সম্বন্ধপদটি: 'নাওমাকুম' — তোমাদের ঘুম। এই তালিকার বাকি সবকিছু বাইরের — মাটি, পাথর, আকাশ, সূর্য, মেঘ। এটি একটিই যা সম্বোধিত মানুষটির ভেতরে, আর এটিই একমাত্র বিষয় যা সে ব্যবহার করে না, বরং যার ভেতর দিয়ে তাকে যেতে হয়। এমনকি 78:8-এর জোড়ার কথাটিও বলে সে কী, তা নয় যে তার সঙ্গে কী ঘটে। ঘুম তার ওপর প্রতি রাতে ঘটানো হয় এমন এক সময়সূচিতে যা সে ঠিক করেনি, আর আয়াতটি একে সাত আসমানের সমান নিদর্শনের কাতারে গোনে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Favour Received While Absent",
          "bn": "অনুপস্থিত থেকে পাওয়া নিয়ামত"
        },
        "p": [
          {
            "en": "That is the strange thing about this particular item. Everything else on the list can be inspected. A man can walk the earth, climb the mountain, watch the lamp cross the sky, stand in the rain. The one favour he cannot observe is the one performed on him while he is not there to see it. He lies down worn out and gets up repaired, and he was present for no part of the repair.",
            "bn": "এই নির্দিষ্ট বিষয়টিতেই অদ্ভুত ব্যাপারটি লুকিয়ে। তালিকার বাকি সবকিছু পরীক্ষা করে দেখা যায়। মানুষ যমীনে হাঁটতে পারে, পাহাড়ে উঠতে পারে, আকাশ পেরিয়ে যাওয়া প্রদীপকে দেখতে পারে, বৃষ্টিতে দাঁড়াতে পারে। যে একটি নিয়ামত সে দেখতে পারে না, সেটি তার ওপরই সম্পন্ন হয় — এমন সময়ে, যখন সে তা দেখার জন্য সেখানে থাকে না। সে ক্লান্ত হয়ে শোয় আর সুস্থ হয়ে ওঠে, অথচ সেই মেরামতের কোনো অংশেই সে উপস্থিত ছিল না।"
          },
          {
            "en": "30:23 says the same thing in the plainest possible terms: and of His signs is your sleep by night and day, and your seeking of His bounty. Sleep is filed there under ayat, signs, next to the working hours it makes possible. An-Naba never uses the word sign, but it does the same work — it lays a nightly, universal, involuntary event beside the mountains and asks for one conclusion from both.",
            "bn": "30:23 কথাটি একেবারে সরল ভাষায় বলে দেয়: আর তাঁর নিদর্শনসমূহের মধ্যে রয়েছে রাতে ও দিনে তোমাদের ঘুম এবং তাঁর অনুগ্রহ সন্ধান করা। সেখানে ঘুমকে রাখা হয়েছে 'আয়াত' বা নিদর্শনের তালিকায়, ঠিক সেই কর্মঘণ্টার পাশেই যা ঘুম সম্ভব করে তোলে। সূরা আন-নাবা 'নিদর্শন' শব্দটি একবারও ব্যবহার করে না, কিন্তু কাজটি একই করে — প্রতি রাতের, সর্বজনীন ও নিজের ইচ্ছার বাইরের একটি ঘটনাকে পাহাড়ের পাশে রেখে দুটো থেকেই একই সিদ্ধান্তে পৌঁছাতে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the List Concludes",
          "bn": "তালিকাটি যে সিদ্ধান্তে পৌঁছায়"
        },
        "p": [
          {
            "en": "78:17 states the conclusion the whole run was built for: indeed the Day of Decision is an appointed time. The list was never decoration. A Lord who beds the earth and pegs it, who pairs you, stops you every night and starts you again, who raises seven firm structures overhead and pours water out of a cloud is not a Lord for whom the reckoning presents a difficulty.",
            "bn": "78:17 সেই সিদ্ধান্তটি উচ্চারণ করে, যার জন্যই গোটা ধারাটি গড়ে তোলা হয়েছিল: নিশ্চয়ই ফয়সালার দিন এক নির্ধারিত সময়। তালিকাটি কখনোই কেবল অলংকার ছিল না। যে প্রতিপালক যমীনকে বিছিয়ে দেন ও কীলক দিয়ে গেঁথে দেন, তোমাদের জোড়ায় জোড়ায় বানান, প্রতি রাতে থামিয়ে দেন আবার চালু করেন, মাথার ওপর সাতটি সুদৃঢ় কাঠামো তোলেন এবং মেঘ থেকে পানি ঢেলে দেন — তাঁর জন্য হিসাব-নিকাশ কোনো কঠিন কাজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Lying Down Tonight",
          "bn": "আজ রাতে শোয়ার সময়"
        },
        "p": [
          {
            "en": "Al-Bukhari narrates from al-Bara ibn Azib (RA) that the Prophet ﷺ taught him words to say on going to bed, in which he entrusts himself to Allah and affirms the Book He sent down and the Prophet He sent, and told him that if he died that night he would die upon the fitrah. The instruction treats the bed as a threshold rather than a habit, and 78:9 supplies the reason for taking it that way.",
            "bn": "বুখারী বারা ইবনে আযিব (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ তাঁকে বিছানায় যাওয়ার সময় বলার জন্য কিছু বাক্য শিখিয়েছিলেন, যেখানে তিনি নিজেকে আল্লাহর হাতে সোপর্দ করেন এবং অবতীর্ণ কিতাব ও প্রেরিত নবীর স্বীকৃতি দেন; আর নবী ﷺ তাঁকে বলেন, সেই রাতে মৃত্যু হলে তিনি ফিতরাতের ওপর মারা যাবেন। এই শিক্ষা বিছানাকে নিছক অভ্যাস নয়, বরং একটি চৌকাঠ হিসেবে দেখে; আর কেন এভাবে দেখতে হবে তার কারণটি জোগায় 78:9।"
          }
        ]
      }
    ]
  },
  "78:14": {
    "sections": [
      {
        "h": {
          "en": "After the Lamp, the Water",
          "bn": "প্রদীপের পরে পানি"
        },
        "p": [
          {
            "en": "Wa-anzalna mina al-mu'sirati ma'an thajjajan: and We sent down from al-mu'sirat water pouring on. The verse is five Arabic words. Wa-anzalna is and We sent down; min is from; al-mu'sirat is a feminine plural whose meaning the commentators dispute; ma'an is water; and thajjajan describes how that water falls. The verse stands in the run that began at 78:6 with the question, have We not made the earth a resting place, and it follows straight on from 78:13, where Allah says He made a blazing lamp.",
            "bn": "ওয়া আনযালনা মিনাল মু'সিরাতি মাআন সাজ্জাজা: আর আমি মু'সিরাত থেকে নামিয়েছি অবিরাম ঝরা পানি। আয়াতটি আরবিতে পাঁচ শব্দের। ওয়া আনযালনা মানে আর আমি নামিয়েছি। মিন মানে থেকে। আল-মু'সিরাত স্ত্রীলিঙ্গ বহুবচন, এর অর্থ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। মাআন মানে পানি। আর সাজ্জাজান বলে সেই পানি কীভাবে ঝরে। ৭৮:৬ আয়াতে যে ধারা শুরু হয়েছিল, আমি কি জমিনকে বিছানা বানাইনি, এ আয়াত তারই অংশ। ঠিক আগের আয়াত ৭৮:১৩-এ আল্লাহ বলেছেন, তিনি বানিয়েছেন জ্বলন্ত প্রদীপ।"
          },
          {
            "en": "Until here the list has named things that stay where they are put: the ground, the mountains, the pairs, sleep, night, day, seven firm heavens and a lamp. With 78:14 something moves from above to below. The verb is anzalna, We sent down, and the speaker is the same We who made and built through the earlier verses. 78:15 and 78:16, the next verses, say what the water is for. That is their ground, and this article stays with the water itself, the source it comes from and the way it falls.",
            "bn": "এ পর্যন্ত তালিকায় যা এসেছে, সবই নিজের জায়গায় স্থির: জমিন, পাহাড়, জোড়া, ঘুম, রাত, দিন, সাতটি মজবুত আকাশ আর একটি প্রদীপ। ৭৮:১৪-তে এসে প্রথম কিছু একটা উপর থেকে নিচে নামে। ক্রিয়াটি আনযালনা, আমি নামিয়েছি। বক্তা সেই একই 'আমি', যিনি আগের আয়াতগুলোতে বানিয়েছেন আর গড়েছেন। এ পানি কীসের জন্য, তা বলবে পরের দুই আয়াত, ৭৮:১৫ ও ৭৮:১৬। সেটা ওদের আলোচনার জায়গা। এ লেখা থাকবে পানির কাছেই: পানি কোথা থেকে আসে, আর কীভাবে ঝরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Winds, Clouds or Heavens",
          "bn": "বাতাস, মেঘ নাকি আকাশ"
        },
        "p": [
          {
            "en": "The commentators fetched here record three answers to what al-mu'sirat are. The first is the winds. At-Tabari describes them as winds that squeeze as they blow, and gives the view from Ibn Abbas, Mujahid, Qatada and Ibn Zayd. Ibn Kathir has it from Ibn Abbas through al-'Awfi and through Sa'id ibn Jubayr, and names 'Ikrima, Mujahid, Qatada, Muqatil, al-Kalbi, Zayd ibn Aslam and his son 'Abd ar-Rahman with them. The sense, he explains, is that the winds draw the rain out of the cloud. Al-Qurtubi reports Ibn Abbas saying it is as though they squeeze the cloud.",
            "bn": "এখানে যে তাফসীরগুলো দেখা হয়েছে, তাতে আল-মু'সিরাত নিয়ে তিনটি জবাব পাওয়া যায়। প্রথম জবাব: বাতাস। তাবারী এদের বলেন সেই বাতাস, যা বইতে বইতে নিংড়ায়। মতটি তিনি আনেন ইবন আব্বাস, মুজাহিদ, কাতাদা ও ইবন যায়দ থেকে। ইবন কাসীর এটি আনেন ইবন আব্বাস থেকে দুই সূত্রে, আওফীর মাধ্যমে আর সাঈদ ইবন জুবাইরের মাধ্যমে। সঙ্গে নাম দেন ইকরিমা, মুজাহিদ, কাতাদা, মুকাতিল, কালবী, যায়দ ইবন আসলাম ও তাঁর ছেলে আবদুর রহমানের। তাঁর ব্যাখ্যায় অর্থটা হলো, বাতাস মেঘ থেকে বৃষ্টি টেনে বের করে। কুরতুবী ইবন আব্বাসের কথা আনেন এভাবে: যেন বাতাস মেঘকে নিংড়ে দেয়।"
          },
          {
            "en": "The second answer is the clouds. Ibn Kathir has it from Ibn Abbas through 'Ali ibn Abi Talha, from 'Ikrima as well, and from Abu al-'Aliya, ad-Dahhak, al-Hasan, ar-Rabi' ibn Anas and ath-Thawri. At-Tabari gives it from Sufyan, from Ibn Abbas by the same 'Ali line and from ar-Rabi'. Al-Baghawi calls the Ibn Abbas version the report of al-Walibi. So Ibn Abbas stands on both sides, by different lines of transmission. As-Sa'di glosses the word plainly as the clouds, al-Muyassar as the raining clouds, and Ma'arif al-Qur'an as rain-laden clouds.",
            "bn": "দ্বিতীয় জবাব: মেঘ। ইবন কাসীর এটি আনেন ইবন আব্বাস থেকে আলী ইবন আবী তালহার সূত্রে। ইকরিমা থেকেও আনেন, আরও আনেন আবুল আলিয়া, দাহহাক, হাসান, রাবী ইবন আনাস ও সাওরী থেকে। তাবারী মতটি আনেন সুফিয়ান থেকে, ইবন আব্বাস থেকে সেই আলীর সূত্রেই, আর রাবী থেকে। বাগাভী ইবন আব্বাসের এই বর্ণনাকে বলেন ওয়ালিবীর বর্ণনা। তাহলে দুই পক্ষেই ইবন আব্বাসের নাম আছে, ভিন্ন ভিন্ন বর্ণনাসূত্রে। সা'দী শব্দটির ব্যাখ্যা দেন এক কথায়: মেঘ। মুয়াসসার বলে বৃষ্টি ঝরানো মেঘ, আর মাআরিফুল কুরআন বলে বৃষ্টিভরা মেঘ।"
          },
          {
            "en": "The third answer is the heavens. At-Tabari reports al-Hasan saying from the sky, and Qatada by two routes, once from the heavens and once from the sky. Al-Qurtubi gives from the heavens on the authority of Ubayy ibn Ka'b, al-Hasan, Sa'id ibn Jubayr, Zayd ibn Aslam and Muqatil ibn Hayyan, and al-Baghawi lists the same names without Ubayy. The lists do not match from book to book: Ibn Kathir places a report through Sa'id ibn Jubayr, and Zayd ibn Aslam, among the winds. Al-Baghawi also keeps a fourth line, from Ibn Kaysan: al-mu'sirat are the rain-givers.",
            "bn": "তৃতীয় জবাব: আকাশ। তাবারী হাসানের কথা আনেন, আকাশ থেকে। কাতাদার কথা আনেন দুই সূত্রে, একবার আকাশমণ্ডলী থেকে, আরেকবার আকাশ থেকে। কুরতুবী 'আকাশমণ্ডলী থেকে' অর্থটি আনেন উবাই ইবন কা'ব, হাসান, সাঈদ ইবন জুবাইর, যায়দ ইবন আসলাম ও মুকাতিল ইবন হাইয়ানের নামে। বাগাভী উবাইকে বাদ দিয়ে একই নামগুলো দেন। তবে এক বই থেকে আরেক বইয়ে তালিকা মেলে না। ইবন কাসীর সাঈদ ইবন জুবাইরের সূত্রে আসা একটি বর্ণনা আর যায়দ ইবন আসলামকে রেখেছেন বাতাসের পক্ষে। বাগাভী এর বাইরে চতুর্থ একটি মতও রেখেছেন, ইবন কায়সান থেকে: মু'সিরাত মানে বৃষ্টিদাতা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Cloud Near Its Time",
          "bn": "সময় ঘনিয়ে আসা মেঘ"
        },
        "p": [
          {
            "en": "Behind the clouds reading sits an image from ordinary speech. At-Tabari gives it without a name, while Ibn Kathir and al-Baghawi credit al-Farra': the mu'sirat are clouds filling with rain that have not yet released it, as a girl is called mu'sir when her first menses is near and has not yet come. Al-Qurtubi carries the same gloss from Sufyan, ar-Rabi', Abu al-'Aliya and ad-Dahhak, and quotes lines of old Arabic verse in which mu'sir describes such a girl. On this reading the cloud is full, ripe and on the verge.",
            "bn": "মেঘের পক্ষের ব্যাখ্যার পেছনে আছে আরবদের রোজকার কথার একটি ছবি। তাবারী ছবিটা আনেন কারও নাম ছাড়া। ইবন কাসীর আর বাগাভী এটি ফাররার নামে আনেন। মু'সিরাত সেই মেঘ, যা বৃষ্টিতে ভরে উঠছে কিন্তু এখনো ঝরায়নি। কিশোরী মেয়ের প্রথম ঋতু যখন কাছে এসেছে অথচ এখনো আসেনি, আরবরা তাকে বলত মু'সির। কুরতুবী একই ব্যাখ্যা আনেন সুফিয়ান, রাবী, আবুল আলিয়া ও দাহহাক থেকে। পুরোনো আরবি কবিতার কয়েকটি চরণও উদ্ধৃত করেন, যেখানে এমন মেয়েকেই মু'সির বলা হয়েছে। এ পাঠে মেঘটি ভরপুর, পরিণত, ঝরার একেবারে মুখে।"
          },
          {
            "en": "Al-Qurtubi gathers more from the language. A cloud is called mu'sir when its time to rain has come, as is said of crops that have reached their stage. Al-Mubarrad says a mu'sir cloud holds its water, so that it is pressed out of it a little at a time, and al-Qurtubi links the root to 'asar, a refuge to run to. The winds too are called mu'sirat, he notes, from a'sarat ar-rih, said when wind raises a whirl of dust. Al-Baghawi reports al-Azhari calling them winds of whirlwinds.",
            "bn": "কুরতুবী ভাষা থেকে আরও কিছু কথা জড়ো করেন। বৃষ্টি নামানোর সময় হয়ে এলে মেঘকে বলা হয় মু'সির, যেমন ফসল তার নির্দিষ্ট পর্যায়ে পৌঁছালে তা নিয়ে এমন কথা বলা হয়। মুবাররাদ বলেন, মু'সির মেঘ পানি ধরে রাখে, আর তা থেকে একটু একটু করে পানি নিংড়ে বের হয়। কুরতুবী শব্দমূলটিকে মিলিয়ে দেন আসার শব্দের সঙ্গে, যার অর্থ আশ্রয়, যার দিকে মানুষ ছুটে যায়। তিনি আরও বলেন, বাতাসকেও মু'সিরাত বলা হয়। বাতাস যখন ধুলোর ঘূর্ণি তোলে, আরবরা বলে আ'সারাতির রীহ। বাগাভী আযহারীর কথা আনেন: এরা ঘূর্ণিঝড়ওয়ালা বাতাস।"
          }
        ]
      },
      {
        "h": {
          "en": "From, Not With",
          "bn": "দিয়ে নয়, থেকে"
        },
        "p": [
          {
            "en": "At-Tabari weighs the three and prefers the clouds that have filled with water. His reason is the preposition. The winds hold no water to be sent down from them; water is sent down by them. Had the reading been bi-l-mu'sirat, by means of the mu'sirat, the winds would fit. He records that 'Ikrima read it that way, and that Qatada said it appears so in some readings. Since the reading is mina al-mu'sirat, from them, he takes the clouds. He grants that the sky could be meant, but says rain mostly comes from cloud.",
            "bn": "তাবারী তিনটি মত মেপে দেখেন, আর পানিতে ভরে ওঠা মেঘকেই বেছে নেন। তাঁর যুক্তি অব্যয়টি নিয়ে। বাতাসের ভেতরে পানি নেই যে তা থেকে পানি নামবে। পানি নামে বাতাসের সাহায্যে। আয়াতে যদি থাকত বিল-মু'সিরাত, মু'সিরাত দিয়ে, তবে বাতাস অর্থটা খাটত। তিনি জানান, ইকরিমা এভাবেই পড়তেন, আর কাতাদা বলেছেন কোনো কোনো কিরাআতে এমন আছে। কিন্তু পাঠটি মিনাল মু'সিরাত, মু'সিরাত থেকে। তাই তিনি মেঘ ধরেন। আকাশ অর্থ হওয়াও সম্ভব, তিনি মানেন। তবে তাঁর কথা, বৃষ্টি সাধারণত মেঘ থেকেই নামে।"
          },
          {
            "en": "He anticipates a reply, that min can stand in for bi, and answers that even granting it, the commoner meaning of min is otherwise, and interpretation goes by the commoner meaning. Al-Baghawi reports that very move from the winds' side: on that reading, he says, min carries the sense of bi, since the wind draws the rain out. Al-Qurtubi gives the bi- reading to Ibn Abbas and 'Ikrima, notes that the copies of the mushaf have min, and says that had it been bi-, the wind would have been the better fit.",
            "bn": "তাবারী একটি আপত্তি আগেই ধরে ফেলেন: মিন তো বি-র জায়গায়ও বসতে পারে। তাঁর জবাব, তা মেনে নিলেও মিন শব্দের বেশি প্রচলিত অর্থ ভিন্ন, আর ব্যাখ্যা চলে বেশি প্রচলিত অর্থ ধরে। বাতাসের পক্ষ থেকে ঠিক এই কথাটাই বাগাভী তুলে ধরেন। ওই ব্যাখ্যায়, তিনি বলেন, মিন এসেছে বি-র অর্থে, কারণ বাতাসই বৃষ্টি টেনে আনে। কুরতুবী বি-যুক্ত পাঠটি ইবন আব্বাস ও ইকরিমার বলে উল্লেখ করেন। তিনি জানান, মুসহাফের কপিগুলোতে আছে মিন। আর বলেন, পাঠ বি দিয়ে হলে বাতাস অর্থটাই বেশি মানাত।"
          },
          {
            "en": "Their own verdicts differ in strength. At-Tabari calls the clouds the most correct, al-Qurtubi the soundest of the sayings, and Ibn Kathir the most apparent, while calling the heavens reading strange. Yet al-Qurtubi also quotes an-Nahhas saying that all these sayings are sound: winds that bring rain are called mu'sirat, the winds fertilise the cloud and the rain follows. The passage adds that the sayings may even be one. So the books record a preference and a reconciliation side by side, and this article leaves the three readings standing as they do.",
            "bn": "মেঘের পক্ষে তাঁদের রায়ের জোরও এক রকম নয়। তাবারীর কাছে মেঘ অর্থটাই সবচেয়ে সঠিক। কুরতুবীর কাছে মতগুলোর মধ্যে সবচেয়ে বিশুদ্ধ। ইবন কাসীরের কাছে সবচেয়ে স্পষ্ট, আর আকাশ অর্থটিকে তিনি বলেন অদ্ভুত মত। তবু কুরতুবী নাহহাসের কথাও উদ্ধৃত করেন: এ সব মতই সঠিক। বৃষ্টি আনা বাতাসকে মু'সিরাত বলা হয়, বাতাস মেঘকে উর্বর করে, তারপর বৃষ্টি হয়। সেখানে আরও বলা হয়েছে, মতগুলো আসলে একই হতে পারে। বইগুলোতে তাই একটা পছন্দ আর একটা সমন্বয় পাশাপাশি আছে। এ লেখাও তিনটি মতকে সেভাবেই রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pouring That Keeps Coming",
          "bn": "থামতে না জানা বর্ষণ"
        },
        "p": [
          {
            "en": "Then ma'an thajjajan, two words: water, and the way it falls. At-Tabari reads thajjaj as poured out, one part following another, like the pouring of the blood of sacrificial camels when they are slaughtered. He gives munsabb, poured, from Ibn Abbas by two lines, from Mujahid, from Qatada and from ar-Rabi', and mutatabi', in succession, from Sufyan. Ibn Kathir gives the same from Mujahid, Qatada and ar-Rabi', and in succession from ath-Thawri. Al-Baghawi adds Mujahid's midrar, copious, and Qatada's successive, each part following the last.",
            "bn": "তারপর মাআন সাজ্জাজা, দুটি শব্দ: পানি, আর তা ঝরার ধরন। তাবারীর ব্যাখ্যায় সাজ্জাজ মানে ঢেলে দেওয়া পানি, যার এক অংশের পেছনে আরেক অংশ আসে। কুরবানির উট জবাই করলে যেভাবে রক্ত ঝরে, তেমন। ঢেলে দেওয়া, মুনসাব্ব, এ অর্থ তিনি আনেন ইবন আব্বাস থেকে দুই সূত্রে, আর মুজাহিদ, কাতাদা ও রাবী থেকে। আর লাগাতার, মুতাতাবি, অর্থটি আনেন সুফিয়ান থেকে। ইবন কাসীরও মুজাহিদ, কাতাদা ও রাবী থেকে একই কথা আনেন, আর সাওরী থেকে আনেন লাগাতার অর্থ। বাগাভী যোগ করেন মুজাহিদের মিদরার, অঝোর, আর কাতাদার কথা: এক অংশের পেছনে আরেক অংশ।"
          },
          {
            "en": "Ibn Zayd glossed it as abundant, and here at-Tabari objects. The Arabs, he says, do not use thajj to describe quantity; thajj is pouring in succession. Al-Qurtubi, after reporting Ibn Zayd, says the meaning is one. As-Sa'di reads it as very abundant, and al-Muyassar joins both senses: poured out in abundance. Al-Qurtubi also cites az-Zajjaj, for whom the word means pouring, as though the water pours itself, and he notes that the verb thajja is used both with an object and without one, of blood and of water alike.",
            "bn": "ইবন যায়দ এর অর্থ করেছেন প্রচুর। এখানে তাবারী আপত্তি তোলেন। তাঁর কথা, আরবরা পরিমাণের বেশি বোঝাতে সাজ্জ শব্দ ব্যবহার করে না। সাজ্জ মানে লাগাতার ঢালা। কুরতুবী ইবন যায়দের কথা উল্লেখ করে বলেন, অর্থ আসলে একই। সা'দী এর অর্থ করেন অনেক বেশি। মুয়াসসার দুটো অর্থ একসঙ্গে জুড়ে দেয়: প্রচুর পরিমাণে ঢেলে দেওয়া। কুরতুবী যাজ্জাজের কথাও আনেন। তাঁর মতে শব্দটির অর্থ ঢালা, যেন পানি নিজেই নিজেকে ঢেলে দেয়। কুরতুবী আরও জানান, সাজ্জা ক্রিয়াটি কর্মসহ আর কর্ম ছাড়া, দুইভাবেই চলে। রক্তের বেলায়ও, পানির বেলায়ও।"
          }
        ]
      },
      {
        "h": {
          "en": "A Narration Behind One Word",
          "bn": "এক শব্দের পেছনে একটি বর্ণনা"
        },
        "p": [
          {
            "en": "None of the commentators fetched attaches a hadith to this verse itself. One narration appears in their pages as a witness to how thajj was used, not as an explanation of the verse. At-Tabari, and Ibn Kathir after him, cite the saying that the best hajj is al-'ajj and ath-thajj, taking thajj as the pouring of sacrificial blood. At-Tirmidhi records it (827) from Abu Bakr as-Siddiq: the Messenger of Allah ﷺ was asked, which hajj is the most virtuous? He said: that with raised voices, al-'ajj, and the flow of blood of the sacrifice, ath-thajj. The page fetched shows no grading from at-Tirmidhi, so none is given here.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে সরাসরি কোনো হাদীস জোড়েনি। তাঁদের পাতায় একটি বর্ণনা এসেছে শুধু এটা দেখাতে যে সাজ্জ শব্দটি কীভাবে ব্যবহৃত হতো। আয়াতের ব্যাখ্যা হিসেবে আসেনি। তাবারী, আর তাঁর সূত্রে ইবন কাসীর, সেই বাণী উল্লেখ করেন, যাতে বলা হয়েছে শ্রেষ্ঠ হজ আল-আজ্জ ও আস-সাজ্জ। তাঁদের ব্যাখ্যায় সাজ্জ মানে কুরবানির রক্ত ঝরানো। তিরমিযী বর্ণনাটি এনেছেন (৮২৭) আবু বকর সিদ্দীক (রাঃ) থেকে: আল্লাহর রাসূল ﷺ-কে জিজ্ঞেস করা হলো, কোন হজ সবচেয়ে উত্তম? তিনি বললেন: যাতে আছে উচ্চস্বর, আল-আজ্জ, আর কুরবানির রক্তপ্রবাহ, আস-সাজ্জ। যে পাতাটি দেখা হয়েছে, তাতে তিরমিযীর কোনো মান-নির্ণয় নেই। তাই এখানেও কোনো মান উল্লেখ করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verse, Both Sides",
          "bn": "এক আয়াত, দুই পক্ষ"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an notices a question the verse raises. Here rain comes down from clouds, yet other verses speak of water sent down from the sky. Its answer is that those verses probably mean the upper atmosphere, since the Qur'an often uses sama' in that sense. At-Tabari, from the other direction, grants that the sky could be meant here but holds that rain mostly falls from cloud, so the common case decides the word. Each in its own way keeps the cloud in view without denying that the water comes from above.",
            "bn": "মাআরিফুল কুরআন এ আয়াত থেকে ওঠা একটি প্রশ্ন খেয়াল করে। এখানে বৃষ্টি নামছে মেঘ থেকে, অথচ অন্য অনেক আয়াতে বলা হয়েছে আকাশ থেকে পানি নামানোর কথা। তার জবাব, ওই আয়াতগুলোতে সম্ভবত উপরের বায়ুমণ্ডল বোঝানো হয়েছে, কারণ কুরআনে সামা শব্দটি প্রায়ই এই অর্থে আসে। তাবারী উল্টো দিক থেকে আসেন। এখানে আকাশ অর্থ হতে পারে, তিনি মানেন। কিন্তু বৃষ্টি বেশির ভাগ সময় মেঘ থেকেই নামে, তাই সাধারণ ঘটনাই শব্দের অর্থ ঠিক করে দেয়। দুজনেই নিজের মতো করে মেঘকে সামনে রাখেন, আর পানি যে উপর থেকে আসে, সেটাও অস্বীকার করেন না।"
          },
          {
            "en": "Two other verses come up in these pages. Ibn Zayd recited 30:48 for the winds reading, and Ibn Kathir cites the same verse for the clouds: Allah sends the winds, they stir up cloud, He spreads it in the sky as He wills and breaks it into pieces, and you see the rain come out from within it. One verse serves both sides because it holds wind, cloud and sky in a single sentence. Ibn Kaysan's link, reported by al-Baghawi, is 12:49, the year in which people are given rain and in which they press.",
            "bn": "এসব পাতায় আরও দুটি আয়াতের কথা আসে। ইবন যায়দ বাতাসের পক্ষে পড়েছিলেন ৩০:৪৮। ইবন কাসীর একই আয়াত আনেন মেঘের পক্ষে। আয়াতটি বলে, আল্লাহ বাতাস পাঠান, বাতাস মেঘ তোলে। তিনি যেমন চান, আকাশে তা ছড়িয়ে দেন, টুকরো টুকরো করেন। তারপর আপনি দেখেন, তার ফাঁক দিয়ে বৃষ্টি বেরিয়ে আসছে। একই আয়াত দুই পক্ষের কাজে লাগে, কারণ এক বাক্যেই তাতে আছে বাতাস, মেঘ আর আকাশ। বাগাভী ইবন কায়সানের যে মত আনেন, তার ভিত্তি ১২:৪৯: সেই বছর, যখন মানুষকে বৃষ্টি দেওয়া হবে আর তারা রস নিংড়াবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearing the Next Downpour",
          "bn": "পরের বৃষ্টির শব্দে"
        },
        "p": [
          {
            "en": "Whatever al-mu'sirat are, the verb does not change: water comes down, and Allah says it is He who sends it. That gives a believer something simple to practise. When rain begins, the verse supplies the sentence to say inwardly: this was sent down. A person who has read 78:14 a few times starts to hear the sound on the roof differently. It is no longer only weather happening to him. It is water held and released by Allah, at a time he did not choose, in an amount he did not set.",
            "bn": "মু'সিরাত যা-ই হোক, ক্রিয়াটি বদলায় না। পানি নামে, আর আল্লাহ বলেন, তিনিই তা নামান। এ থেকে মুমিনের হাতে আসে একটা সহজ অভ্যাস। বৃষ্টি শুরু হলে মনে মনে বলার কথাটা আয়াতই দিয়ে দেয়: এটা নামানো হয়েছে। যে ৭৮:১৪ কয়েকবার পড়েছে, ছাদের উপর বৃষ্টির শব্দ সে অন্যভাবে শুনতে শুরু করে। তখন তা আর শুধু আবহাওয়া নয়, যা তার উপর এসে পড়ছে। তা আল্লাহর আটকে রাখা আর ছেড়ে দেওয়া পানি। সময়টা সে বেছে নেয়নি, পরিমাণটাও সে ঠিক করেনি।"
          },
          {
            "en": "The cloud that has reached its time, in al-Qurtubi's pages, and al-Mubarrad's cloud that gives up its water a little at a time both describe something held and then let go by measure. Much of what reaches a person comes in the same way: provision, ease, the answer to a dua. It was kept somewhere out of sight and arrived when it arrived. The verse sets that pattern in the sky where it can be watched, and the pouring that keeps coming, part after part, shows a giving that does not stop at the first time.",
            "bn": "কুরতুবীর পাতায় সময় ঘনিয়ে আসা মেঘ, আর মুবাররাদের সেই মেঘ, যা একটু একটু করে পানি ছাড়ে, দুটোই এমন কিছুর ছবি যা আটকানো ছিল, তারপর মেপে ছাড়া হয়েছে। মানুষের কাছে যা পৌঁছায়, তার অনেক কিছুই আসে এভাবে: রিজিক, স্বস্তি, দোয়ার জবাব। সবই চোখের আড়ালে কোথাও রাখা ছিল, তারপর যখন আসার তখন এসেছে। আয়াতটি এই ধরনটাকে আকাশে তুলে ধরে, যেখানে চোখ মেলে দেখা যায়। আর এক অংশের পেছনে আরেক অংশ হয়ে যে বর্ষণ চলতেই থাকে, তা জানিয়ে দেয়, এই দান একবার দিয়েই থেমে যায় না।"
          },
          {
            "en": "In this surah the list is an argument, and 78:17 will state where it leads. Yet the argument is made with things a person can hold in a cupped hand. A practical week might look like this. Notice the next rain and name the One who sent it. Use water as something given rather than bought: close the tap, fix the leak, leave some out for a thirsty animal. And when rain is late and the ground stays dry, ask for it from the One the verse names, rather than only complaining about the weather.",
            "bn": "এ সূরায় তালিকাটি একটি যুক্তি, আর ৭৮:১৭ জানাবে সেই যুক্তি কোথায় গিয়ে থামে। তবু যুক্তিটা গড়া হয়েছে এমন জিনিস দিয়ে, যা আঁজলা ভরে হাতে নেওয়া যায়। এক সপ্তাহের কাজ হতে পারে এ রকম। পরের বৃষ্টিটা খেয়াল করুন, আর মনে মনে নাম নিন তাঁর, যিনি তা পাঠালেন। পানিকে কেনা জিনিস নয়, পাওয়া জিনিস হিসেবে খরচ করুন: কল বন্ধ করুন, ফুটো সারান, তৃষ্ণার্ত কোনো প্রাণীর জন্য একটু রেখে দিন। আর বৃষ্টি দেরি করলে, মাটি শুকনো থাকলে, শুধু আবহাওয়া নিয়ে অভিযোগ না করে আয়াত যাঁর নাম নেয়, তাঁর কাছেই বৃষ্টি চান।"
          }
        ]
      }
    ]
  },
  "78:18": {
    "sections": [
      {
        "h": {
          "en": "How the Appointment Arrives",
          "bn": "নির্ধারিত সময় যেভাবে আসে"
        },
        "p": [
          {
            "en": "Yawma yunfakhu fi al-suri fa-ta'tuna afwaja: the Day the Horn is blown and you come in crowds. Six Arabic words, and the first of them looks back. The verse before, 78:17, said that the Day of Decision is an appointed time. At-Tabari says the new 'day' renders that Day of Decision in other words, so the sense runs: the Day of Decision was a term for what We promised these people, the day the Horn is blown. Al-Qurtubi makes the same link in grammar, reading the second yawm as a substitute for the first.",
            "bn": "ইয়াওমা ইউনফাখু ফিস সূরি ফাতা'তূনা আফওয়াজা: যেদিন শিঙ্গায় ফুঁক দেওয়া হবে, আর তোমরা দলে দলে আসবে। আরবিতে মাত্র ছয়টি শব্দ, আর প্রথম শব্দটিই পেছনের দিকে ইঙ্গিত করে। আগের আয়াত ৭৮:১৭ বলেছে, মীমাংসার দিন এক নির্ধারিত সময়। তাবারী বলেন, এখানকার 'দিন' সেই মীমাংসার দিনেরই ব্যাখ্যা। অর্থাৎ কথাটা দাঁড়ায় এমন: এই লোকদের যা ওয়াদা করা হয়েছে, মীমাংসার দিন তার মেয়াদ, আর সেটা সেই দিন, যেদিন শিঙ্গায় ফুঁক দেওয়া হবে। কুরতুবী একই সম্পর্ক দেখান ব্যাকরণ দিয়ে। তাঁর মতে দ্বিতীয় 'ইয়াওম' প্রথমটির স্থলাভিষিক্ত।"
          },
          {
            "en": "So the verse opens no new subject; it shows the appointment falling due. The verb is passive, yunfakhu, is blown, and the verse does not say who blows. The Muyassar supplies the agent in its paraphrase: the angel blows into the horn to announce the raising of the dead, and you come as nations, each nation with its leader. Al-Qurtubi likewise reads the blowing as being for the resurrection, and the coming as a coming to the place where all are presented.",
            "bn": "তাই আয়াতটি নতুন প্রসঙ্গ শুরু করছে না। নির্ধারিত সময়টা যখন এসে পড়বে, তখনকার ছবিই দেখাচ্ছে। ক্রিয়াটি কর্মবাচ্যে, ইউনফাখু, ফুঁক দেওয়া হবে। কে ফুঁক দেবেন, আয়াত তা বলে না। মুয়াসসার তার সরল ব্যাখ্যায় সেই ফাঁকটা পূরণ করে: ফেরেশতা শিঙ্গায় ফুঁক দেবেন পুনরুত্থানের ঘোষণা হিসেবে, আর তোমরা আসবে জাতি হয়ে, প্রত্যেক জাতি তার নেতার সঙ্গে। কুরতুবীও ফুঁককে পুনরুত্থানের জন্য বলে পড়েন। আর আসাটা তাঁর মতে সেই জায়গার দিকে, যেখানে সবাইকে হাজির করা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Instrument, or Creation?",
          "bn": "যন্ত্র, নাকি সৃষ্টি নিজেই"
        },
        "p": [
          {
            "en": "What is the sur? At-Tabari says he has already explained the word, and the disagreement over it, earlier in his tafsir, so he will not repeat it here. He then states his own position in a few words: it is a horn that is blown into, in our view. He supports it with a report through his own chain from Abdullah ibn Amr (RA), from the Prophet ﷺ: the sur is a horn. Directly after it he records a different gloss from Qatada: al-sur is al-khalq, the creation.",
            "bn": "সূর কী? তাবারী বলেন, শব্দটির অর্থ আর এ নিয়ে মতভেদ তিনি তাফসীরের আগের অংশে বুঝিয়ে দিয়েছেন, তাই এখানে আর পুনরাবৃত্তি করবেন না। তারপর অল্প কথায় নিজের মত জানান: আমাদের মতে এটি শিং, যাতে ফুঁক দেওয়া হয়। এর সমর্থনে নিজের সনদে আবদুল্লাহ ইবন আমর (রাঃ)-এর সূত্রে নবী ﷺ থেকে একটি বর্ণনা আনেন: সূর হলো শিং। ঠিক তার পরেই কাতাদার ভিন্ন এক ব্যাখ্যা লিখে রাখেন: সূর মানে আল-খালক, অর্থাৎ সৃষ্টি।"
          },
          {
            "en": "The two readings stand side by side in at-Tabari's own text. On his reading the verse names an instrument; on Qatada's the word points to the creation itself, and Qatada's line, as at-Tabari gives it, says no more than that. At-Tabari does not argue against Qatada here; he gives his own view first and Qatada's after it. Of the other commentators fetched, only the Muyassar glosses the word, and it names the horn outright.",
            "bn": "দুটি ব্যাখ্যাই তাবারীর নিজের লেখায় পাশাপাশি রয়েছে। তাঁর ব্যাখ্যায় আয়াতটি একটি যন্ত্রের কথা বলছে। কাতাদার ব্যাখ্যায় শব্দটি ইঙ্গিত করে সৃষ্টির দিকেই। তাবারী কাতাদার যে কথাটুকু এনেছেন, তাতে এর বেশি কিছু নেই। তাবারী এখানে কাতাদার বিরুদ্ধে যুক্তি দেননি। আগে নিজের মত রেখেছেন, পরে কাতাদারটা। এ আয়াতের জন্য দেখা অন্য তাফসীরগুলোর মধ্যে শুধু মুয়াসসার শব্দটির ব্যাখ্যা দেয়, আর সোজাসুজি শিংয়ের কথাই বলে।"
          },
          {
            "en": "The narration at-Tabari cites survives, through the same line from Sulayman at-Taymi, in Jami' at-Tirmidhi, number 2430. Abdullah ibn Amr ibn al-As (RA) said: A Bedouin came to the Prophet ﷺ and said: What is the Sur? He said: A horn that will be blown into. In the Arabic text at-Tirmidhi grades it hasan and says it is known only through Sulayman at-Taymi's narration; the English rendering on the same page reads hasan sahih, and this article keeps the lower grade. 20:102 discusses the same report.",
            "bn": "তাবারী যে বর্ণনাটি এনেছেন, সুলাইমান আত-তাইমির একই সূত্রে তা জামি' তিরমিযীতে আছে, নম্বর ২৪৩০। আবদুল্লাহ ইবন আমর ইবনুল আস (রাঃ) বলেন: এক বেদুইন নবী ﷺ-এর কাছে এসে জিজ্ঞেস করল, সূর কী? তিনি বললেন: একটি শিং, যাতে ফুঁক দেওয়া হবে। আরবি পাঠে তিরমিযী একে হাসান বলেছেন, আর জানিয়েছেন যে সুলাইমান আত-তাইমির বর্ণনা ছাড়া এটি তাঁর জানা নেই। একই পাতার ইংরেজি অনুবাদে লেখা হাসান সহীহ। এ লেখা নিচের মানটাই রাখছে। ২০:১০২ আয়াতের আলোচনায় এ বর্ণনা নিয়ে আরও কথা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "And So You Come",
          "bn": "তারপর আপনারা আসবেন"
        },
        "p": [
          {
            "en": "Fa-ta'tuna: and so you come. The fa ties the coming to the blowing: the Horn sounds, and the arrival follows. The verb speaks to the listeners directly: the same 'you' addressed through the surah's list of favours is now told where it is heading. Al-Baghawi's whole comment fills in the picture: crowds upon crowds, from every place, for the reckoning.",
            "bn": "ফাতা'তূনা: তারপর তোমরা আসবে। 'ফা' অক্ষরটি আসাকে ফুঁকের সঙ্গে জুড়ে দেয়। শিঙ্গা বাজবে, তার পরেই আগমন। ক্রিয়াটি সরাসরি শ্রোতাদের সম্বোধন করে। নিয়ামতের তালিকা জুড়ে সূরা যে 'তোমাদের' সঙ্গে কথা বলে আসছে, এবার তাদেরই জানানো হচ্ছে, কোথায় যাচ্ছ। বাগাভীর পুরো মন্তব্য এক লাইনের, আর তাতেই ছবিটা পূর্ণ হয়: দলের পর দল, সব জায়গা থেকে, হিসাবের জন্য।"
          },
          {
            "en": "Ma'arif al-Qur'an notes that other verses indicate the trumpet will be blown twice. At the first blowing the whole world comes to an end. At the second, the people of the whole world, earlier generations and later ones alike, are raised and come in multitudes and droves. Ibn Kathir, on the verse before, adds that the appointed time can be neither lengthened nor shortened, and that none knows it but Allah, citing 11:104: And We delay it only for a term fixed.",
            "bn": "মাআরিফুল কুরআন জানায়, অন্যান্য আয়াত থেকে বোঝা যায় শিঙ্গায় দুবার ফুঁক দেওয়া হবে। প্রথম ফুঁকে গোটা দুনিয়া শেষ হয়ে যাবে। দ্বিতীয় ফুঁকে সারা দুনিয়ার মানুষ, আগের প্রজন্ম আর পরের প্রজন্ম সবাই, জীবিত হয়ে উঠবে এবং দলে দলে ঝাঁকে ঝাঁকে আসবে। ইবন কাসীর আগের আয়াতের আলোচনায় যোগ করেন, নির্ধারিত সময়টা একটুও বাড়ানো বা কমানো যাবে না, আর আল্লাহ ছাড়া কেউ তা জানে না। প্রমাণ হিসেবে তিনি আনেন ১১:১০৪: আমি তা পিছিয়ে রাখি শুধু এক নির্দিষ্ট মেয়াদ পর্যন্ত।"
          },
          {
            "en": "As-Sa'di gives no gloss on the words at all. What he adds is weight. On that day, he writes, there will be convulsions and upheavals that would turn a newborn's hair grey and set hearts trembling. The verse states the event in six calm words, with no image of terror; his single line tells the reader how heavily they are meant to land.",
            "bn": "সা'দী শব্দগুলোর কোনো ব্যাখ্যাই দেন না। তিনি যোগ করেন ভার। তিনি লেখেন, সেদিন এমন কম্পন আর অস্থিরতা ঘটবে, যাতে নবজাতকের চুলও পেকে যায় আর অন্তর কেঁপে ওঠে। আয়াতটি ঘটনাটা বলেছে শান্ত ছয়টি শব্দে, ভয়ের কোনো ছবি না এঁকেই। সা'দীর এই লাইনটুকু পাঠককে বুঝিয়ে দেয়, শব্দগুলো কতটা ভারী হয়ে মনে বসার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Throng After Throng",
          "bn": "ভিড়ের পর ভিড়"
        },
        "p": [
          {
            "en": "Afwaja is the plural of fawj, as al-Qurtubi notes, and the commentators fetched for this verse gloss it in two ways. The first is a plain crowd. Mujahid, in at-Tabari's chain through Ibn Abi Najih, said: zumaran zumaran, throng upon throng. Ibn Kathir opens his comment on the verse with Mujahid's word. At-Tabari's own paraphrase doubles the picture: they come throng after throng, company after company. He adds that the people of interpretation said the same as he did.",
            "bn": "আফওয়াজ শব্দটি ফাওজের বহুবচন, কুরতুবী তা উল্লেখ করেছেন। এ আয়াতের জন্য দেখা তাফসীরগুলো শব্দটির দুই রকম ব্যাখ্যা দেয়। প্রথমটি সাধারণ ভিড়। ইবন আবী নাজীহের মাধ্যমে তাবারীর সনদে মুজাহিদ বলেছেন: যুমারান যুমারা, ভিড়ের পর ভিড়। ইবন কাসীর আয়াতের আলোচনা শুরুই করেন মুজাহিদের এ শব্দ দিয়ে। তাবারীর নিজের ভাষ্যে ছবিটা দুবার আসে: তারা আসবে ভিড়ের পর ভিড়, দলের পর দল। তিনি আরও জানান, তাফসীরবিদেরাও তাঁর মতোই বলেছেন।"
          },
          {
            "en": "Al-Baghawi keeps the same doubled word and adds the two things any crowd has: a starting point and a destination. They come from every place, and they come for the reckoning. Al-Qurtubi lists this reading too, though second and under the formula it is said: throngs and companies. Zumar is also the word the Qur'an uses in 39:73, for those who feared their Lord as they are driven to the Garden. Mujahid's gloss lends this verse the same picture of people arriving in bands.",
            "bn": "বাগাভী একই শব্দ দুবার রাখেন, আর যোগ করেন যেকোনো ভিড়ের দুটি জিনিস: কোথা থেকে আসছে, আর কোথায় যাচ্ছে। তারা আসবে সব জায়গা থেকে, আসবে হিসাবের জন্য। কুরতুবীও এ ব্যাখ্যা উল্লেখ করেন, তবে দ্বিতীয় স্থানে, 'বলা হয়েছে' কথাটি দিয়ে: ভিড় আর দল। যুমার শব্দটি কুরআন ৩৯:৭৩ আয়াতেও ব্যবহার করেছে, যেখানে রবকে ভয় করে চলা লোকদের দলে দলে জান্নাতের দিকে নিয়ে যাওয়া হয়। মুজাহিদের ব্যাখ্যা এ আয়াতেও দলবদ্ধ মানুষের আগমনের সেই ছবিটাই এনে দেয়।"
          },
          {
            "en": "The second gloss is nations. Al-Qurtubi puts it first: afwaja means umam, nations, each nation with its imam, and the Muyassar paraphrases the verse in the same terms. A crowd and a nation are not quite the same picture. A crowd is many people moving together; a nation is a people held together by something they share. What holds each one together is where at-Tabari goes next.",
            "bn": "দ্বিতীয় ব্যাখ্যা হলো জাতি। কুরতুবী এটাকেই আগে রাখেন: আফওয়াজ মানে উমাম, জাতিসমূহ, প্রত্যেক জাতি তার ইমামের সঙ্গে। মুয়াসসারও আয়াতের ভাষ্য দেয় একই কথায়। ভিড় আর জাতি ঠিক এক ছবি নয়। ভিড় মানে একসঙ্গে চলা অনেক মানুষ। জাতি মানে এমন মানুষ, যাদের কোনো অভিন্ন বন্ধন একসূত্রে বেঁধে রেখেছে। সেই বন্ধনটা কী, তাবারী পরের কথায় সেদিকেই যান।"
          }
        ]
      },
      {
        "h": {
          "en": "Each Nation With Its Messenger",
          "bn": "প্রত্যেক জাতি তার রাসূলের সঙ্গে"
        },
        "p": [
          {
            "en": "At-Tabari explains why the verse says afwaja at all. It is said, he writes, because every nation to which Allah sent a messenger will come with the messenger sent to it, as Allah said in 17:71: the Day We call every people by their imam. Ibn Kathir quotes this from Ibn Jarir, at-Tabari's own name, and lets it stand. So at-Tabari holds both glosses at once: the crowds are real crowds, and what forms each crowd is the messenger its people were given.",
            "bn": "আয়াতে আফওয়াজ শব্দটি কেন এল, তাবারী তা ব্যাখ্যা করেন। তিনি লেখেন, এটা বলা হয়েছে কারণ আল্লাহ যে জাতির কাছে রাসূল পাঠিয়েছেন, সে জাতি আসবে তার কাছে পাঠানো সেই রাসূলের সঙ্গে। যেমন আল্লাহ ১৭:৭১ আয়াতে বলেছেন: যেদিন আমি প্রত্যেক দলকে তাদের ইমামসহ ডাকব। ইবন কাসীর এ ব্যাখ্যা ইবন জারীর থেকে উদ্ধৃত করেন, আর ইবন জারীর তাবারীরই নাম। তিনি এর সঙ্গে দ্বিমত করেন না। তাহলে তাবারী দুটি ব্যাখ্যাই একসঙ্গে ধরে রাখেন। ভিড়গুলো সত্যিকারের ভিড়, আর প্রতিটি ভিড় গড়ে ওঠে সেই রাসূলকে ঘিরে, যাঁকে সে জাতির কাছে পাঠানো হয়েছিল।"
          },
          {
            "en": "This ties the verse back to the surah's opening. The surah began with people questioning each other about the great news over which they differ, the subject of 78:3. On at-Tabari's reading, that disagreement ends in a sorting: each people arrives with the messenger who brought it the news. The arrival does not invent new groups; it gathers those already formed in the life before. The verse itself says nothing yet about the outcome for any crowd.",
            "bn": "এতে আয়াতটি সূরার শুরুর সঙ্গে জুড়ে যায়। সূরা শুরু হয়েছিল লোকদের পরস্পরকে জিজ্ঞাসাবাদ দিয়ে, সেই মহাসংবাদ নিয়ে, যা নিয়ে তারা মতভেদ করে। ৭৮:৩ আয়াতের আলোচনা সেটাই। তাবারীর ব্যাখ্যায় সেই মতভেদের শেষ হয় বাছাইয়ে। প্রত্যেক জাতি আসে সেই রাসূলের সঙ্গে, যিনি তাদের কাছে সংবাদটা এনেছিলেন। সেদিনের আগমন নতুন দল বানায় না। দুনিয়ার জীবনে যে দল আগেই তৈরি হয়ে গেছে, তাদেরই একত্র করে। কোন ভিড়ের পরিণাম কী, আয়াতটি নিজে এখনো তা বলে না।"
          },
          {
            "en": "Ma'arif al-Qur'an approaches the groups from another angle. It reports that some scholars divide the crowds of the gathering according to their deeds and character, and it concludes that the various narrations about the groups do not conflict and may all be true. It mentions one narration describing three groups and others describing ten kinds, without grading them. This article does not build on those narrations. The grouping by messenger is the one the fetched tafsirs tie to the verse's own wording.",
            "bn": "মাআরিফুল কুরআন দলগুলোকে দেখে অন্য দিক থেকে। সেখানে বলা হয়েছে, কিছু আলেম হাশরের দলগুলোকে ভাগ করেন আমল আর চরিত্র অনুযায়ী। আর দলের বিষয়ে আসা বিভিন্ন বর্ণনার মধ্যে কোনো বিরোধ নেই, সবগুলোই সত্য হতে পারে। একটি বর্ণনায় তিনটি দলের কথা, আরও কিছু বর্ণনায় দশটি শ্রেণির কথা তারা উল্লেখ করে, তবে মান যাচাই করে দেয় না। এ লেখা ওই বর্ণনাগুলোর উপর কিছু দাঁড় করাচ্ছে না। দেখা তাফসীরগুলো আয়াতের শব্দের সঙ্গে যে ভাগটা জুড়ে দেয়, তা রাসূল অনুযায়ী ভাগ।"
          }
        ]
      },
      {
        "h": {
          "en": "Forty, and a Refusal",
          "bn": "চল্লিশ, আর একটি অস্বীকৃতি"
        },
        "p": [
          {
            "en": "Ibn Kathir notes that al-Bukhari brings one report under this very verse, so here it is attached to 78:18 rather than borrowed from elsewhere. In Sahih al-Bukhari, number 4935, al-A'mash narrates: Abu Huraira said, Allah's Messenger ﷺ said, 'Between the two sounds of the trumpet, there will be forty.' Somebody asked Abu Huraira, 'Forty days?' But he refused to reply. Then he asked, 'Forty months?' He refused to reply. Then he asked, 'Forty years?' Again, he refused to reply.",
            "bn": "ইবন কাসীর জানান, বুখারী ঠিক এ আয়াতের অধীনেই একটি বর্ণনা এনেছেন। তাই এখানে বর্ণনাটি অন্য জায়গা থেকে ধার করা নয়, ৭৮:১৮ আয়াতের সঙ্গেই যুক্ত। সহীহ বুখারী, নম্বর ৪৯৩৫-এ আ'মাশ বর্ণনা করেন: আবু হুরায়রা (রাঃ) বলেন, আল্লাহর রাসূল ﷺ বলেছেন, 'দুই ফুঁকের মাঝে থাকবে চল্লিশ।' একজন আবু হুরায়রাকে জিজ্ঞেস করল, 'চল্লিশ দিন?' তিনি জবাব দিতে অস্বীকার করলেন। তারপর জিজ্ঞেস করল, 'চল্লিশ মাস?' তিনি জবাব দিলেন না। আবার জিজ্ঞেস করল, 'চল্লিশ বছর?' এবারও তিনি জবাব দিতে অস্বীকার করলেন।"
          },
          {
            "en": "The narration continues: Abu Huraira added, 'Then (after this period) Allah will send water from the sky and then the dead bodies will grow like vegetation grows. There is nothing of the human body that does not decay except one bone; that is the little bone at the end of the coccyx of which the human body will be recreated on the Day of Resurrection.' Its place in his Sahih is al-Bukhari's own mark of its soundness, and that is the grading this article reports.",
            "bn": "বর্ণনাটি এভাবে এগোয়: আবু হুরায়রা আরও বলেন, 'তারপর (এই সময়ের পর) আল্লাহ আকাশ থেকে পানি নামাবেন, আর মৃতদেহগুলো এমনভাবে গজিয়ে উঠবে, যেমন উদ্ভিদ গজায়। মানুষের দেহের সবকিছুই পচে যায়, শুধু একটি হাড় ছাড়া। সেটা মেরুদণ্ডের শেষ প্রান্তের ছোট্ট হাড়, যা থেকে কিয়ামতের দিন মানুষের দেহ আবার গড়া হবে।' বুখারী যে বর্ণনাকে নিজের সহীহ গ্রন্থে স্থান দিয়েছেন, সেটাই তাঁর নিজের দেওয়া বিশুদ্ধতার স্বীকৃতি। এ লেখা সেই মানটাই উল্লেখ করছে।"
          },
          {
            "en": "The verse names one blowing and moves straight to the crowds; Ma'arif al-Qur'an, as noted above, takes it as the second. The report shows what surrounds it: forty between the two blasts, rain from the sky, and bodies growing like plants from the one bone that does not decay. Abu Hurayra would not say forty of what; in the Arabic his answer each time is abaytu, I refuse. 36:51 takes up the unit, and this article leaves the number as he left it.",
            "bn": "আয়াতটি একটিমাত্র ফুঁকের কথা বলে সোজা চলে যায় দলে দলে আগমনে। আগেই বলা হয়েছে, মাআরিফুল কুরআন একে দ্বিতীয় ফুঁক বলে ধরে। বর্ণনাটি তার আশপাশের ছবি দেখায়: দুই ফুঁকের মাঝে চল্লিশ, আকাশ থেকে বৃষ্টি, আর না-পচা সেই একটি হাড় থেকে উদ্ভিদের মতো দেহ গজিয়ে ওঠা। চল্লিশ কিসের, আবু হুরায়রা তা বলেননি। আরবিতে প্রতিবার তাঁর জবাব আবাইতু, আমি অস্বীকার করছি। এককের প্রশ্ন নিয়ে আলোচনা আছে ৩৬:৫১ আয়াতে। এ লেখা সংখ্যাটা সেভাবেই রাখছে, যেভাবে তিনি রেখে গেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What Holds, What Was Set Aside",
          "bn": "যা টিকে থাকে, যা বাদ গেল"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an rests its two blowings on other verses without naming them here. 39:68 is the plainest, with a first blowing and then a second after which people stand looking on. This article does not retell it, nor 17:71 on calling each people by their imam, nor 39:73 on the bands driven to the Garden; each carries its own discussion. The verse under study keeps its eyes on the arrival and on those who arrive.",
            "bn": "মাআরিফুল কুরআন দুই ফুঁকের কথা বলে অন্যান্য আয়াতের ভিত্তিতে, তবে এখানে সেগুলোর নাম বলে না। সবচেয়ে স্পষ্ট ৩৯:৬৮, যেখানে প্রথম ফুঁক, তারপর দ্বিতীয় ফুঁক, আর তখনই মানুষ দাঁড়িয়ে তাকিয়ে থাকে। এ লেখা সে আয়াতের আলোচনা নতুন করে করছে না। প্রত্যেক দলকে ইমামসহ ডাকার কথা ১৭:৭১ আয়াতে, আর দলে দলে জান্নাতে নিয়ে যাওয়ার কথা ৩৯:৭৩ আয়াতে, সেগুলোর আলোচনাও আলাদা। আলোচ্য আয়াতের নজর শুধু আগমনের দিকে, আর যারা আসবে তাদের দিকে।"
          },
          {
            "en": "Al-Qurtubi also brings, under the words it is narrated, a long report attributed to Mu'adh ibn Jabal (RA), in which the Prophet ﷺ is asked about this verse and describes ten kinds of people from his community gathered in altered forms, each tied to a particular sin. Al-Qurtubi names no collection for it and gives no grading, and it could not be confirmed on a hadith page for this article. It is therefore left out, and nothing written here rests on it.",
            "bn": "কুরতুবী 'বর্ণিত আছে' কথাটি দিয়ে মুআয ইবন জাবাল (রাঃ)-এর নামে একটি দীর্ঘ বর্ণনাও আনেন। তাতে নবী ﷺ-কে এ আয়াত সম্পর্কে জিজ্ঞেস করা হয়, আর তিনি তাঁর উম্মতের দশটি শ্রেণির মানুষের কথা বলেন, যাদের চেহারা বদলে দিয়ে হাশরে আনা হবে, প্রত্যেক শ্রেণি নির্দিষ্ট এক গুনাহর সঙ্গে যুক্ত। কুরতুবী এর কোনো হাদীসগ্রন্থের নাম বলেননি, মানও জানাননি। এ লেখার জন্য হাদীসের কোনো পাতায় এটি যাচাই করাও যায়নি। তাই বর্ণনাটি বাদ রাখা হলো, আর এখানে লেখা কিছুই এর উপর দাঁড়িয়ে নেই।"
          },
          {
            "en": "Set aside what could not be confirmed, and the fetched sources still agree on a good deal. The Day of Decision is the day of the Horn, blown to raise the dead. The coming is to a place of presentation and reckoning, and it is in groups, pictured as throngs from every place or as nations walking with their messengers. Only the meaning of sur, and the length of the forty, stay open in the texts read here.",
            "bn": "যা যাচাই করা যায়নি তা সরিয়ে রাখলেও দেখা তাফসীরগুলো অনেক কথায় একমত। মীমাংসার দিনই শিঙ্গার দিন, আর ফুঁক দেওয়া হবে মৃতদের জীবিত করতে। আসা হবে হাজিরা আর হিসাবের জায়গায়, দলে দলে। কেউ তা দেখেন সব জায়গা থেকে আসা ভিড় হিসেবে, কেউ দেখেন নিজ নিজ রাসূলের সঙ্গে চলা জাতি হিসেবে। এখানে পড়া লেখাগুলোতে খোলা প্রশ্ন শুধু দুটি: সূর শব্দের অর্থ, আর চল্লিশের দৈর্ঘ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing a Crowd in Advance",
          "bn": "আগে থেকেই দল বেছে নেওয়া"
        },
        "p": [
          {
            "en": "The verse's 'you' has not changed since the surah began. The same listeners who were shown the sky, the lamp and the rain are now told that they too will come, and in crowds. Nothing in the six words lets anyone stand outside them as a spectator. Reading about the Last Day as something that happens to other people is a comfortable habit, and the direct address takes that comfort away.",
            "bn": "সূরার শুরু থেকে আয়াতের 'তোমরা' একই আছে। যে শ্রোতাদের আকাশ, প্রদীপ আর বৃষ্টি দেখানো হয়েছিল, তাদেরই এখন বলা হচ্ছে: তোমরাও আসবে, দলে দলে। এ ছয়টি শব্দের বাইরে দাঁড়িয়ে দর্শক হয়ে থাকার সুযোগ কারও নেই। শেষ দিনের কথা পড়ে মনে করা যে এটা অন্যদের ব্যাপার, বড় আরামের অভ্যাস। সরাসরি সম্বোধন সেই আরামটুকু কেড়ে নেয়।"
          },
          {
            "en": "On at-Tabari's reading, the crowd a person arrives in is formed by whom that person followed. That is not a choice made on the day; it is made now, in what one obeys, imitates and trusts. The Muyassar's phrase, each nation with its leader, puts the same question in plain words. Whose example shapes my choices when no one is watching? Whose word settles my arguments? The answers are already drawing the outline of a crowd.",
            "bn": "তাবারীর ব্যাখ্যায় মানুষ কোন ভিড়ে আসবে, তা ঠিক হয় সে কার অনুসরণ করেছে তা দিয়ে। এ সিদ্ধান্ত সেদিন নেওয়া হবে না। নেওয়া হচ্ছে এখনই, কার কথা মানি, কাকে দেখে চলি, কার উপর ভরসা রাখি, তার মধ্য দিয়ে। মুয়াসসারের কথাটা, প্রত্যেক জাতি তার নেতার সঙ্গে, একই প্রশ্ন তোলে সোজা ভাষায়। কেউ না দেখলে কার আদর্শ আমার সিদ্ধান্ত গড়ে দেয়? তর্কে শেষ কথা কার কথা? এসব প্রশ্নের উত্তরই এখন থেকে একটা ভিড়ের রেখা আঁকছে।"
          },
          {
            "en": "And the day itself is fixed. Ibn Kathir's note that it can be neither lengthened nor shortened leaves preparation as the only thing still open. The forty that Abu Hurayra would not measure is not ours to measure either. What is ours is the time before the first blast, which is this time, and the company kept in it, which is today's company.",
            "bn": "আর দিনটি নিজে নির্ধারিত। ইবন কাসীর বলেছেন, তা বাড়ানো বা কমানো যাবে না। তাহলে খোলা থাকে শুধু প্রস্তুতি। আবু হুরায়রা যে চল্লিশ মাপেননি, তা মাপা আমাদেরও কাজ নয়। আমাদের হাতে আছে প্রথম ফুঁকের আগের সময়টা, মানে এই সময়টা। আর সে সময়ে যাদের সঙ্গ নিই, মানে আজকের সঙ্গীরা।"
          }
        ]
      }
    ]
  },
  "78:23": {
    "sections": [
      {
        "h": {
          "en": "Staying Where the Ambush Waits",
          "bn": "ওঁৎ পাতা ঠিকানায় দীর্ঘ বাস"
        },
        "p": [
          {
            "en": "Labithina fiha ahqaba: remaining in it for ages. The verse is three Arabic words, and it completes a sentence begun two verses earlier. Hell has been lying in wait (78:21), a place of return for at-taghin, the transgressors (78:22), and now three words say how long they stay. Labithin means those who remain or tarry; fiha, in it, points back to Jahannam; ahqab is the plural of a noun for a long stretch of time. At-Tabari paraphrases plainly: these who transgressed in the world remain in Jahannam, staying in it ahqab.",
            "bn": "লাবিসীনা ফীহা আহকাবা: সেখানে তারা থাকবে যুগ যুগ ধরে। আরবিতে আয়াতটি মাত্র তিন শব্দের, আর দুই আয়াত আগে যে বাক্য শুরু হয়েছিল, এখানে এসে তা পূর্ণ হয়। জাহান্নাম ওঁৎ পেতে আছে (৭৮:২১), সীমালঙ্ঘনকারী আত-তাগীনদের ফেরার ঠিকানা হয়ে (৭৮:২২)। এবার তিনটি শব্দ জানায়, তারা সেখানে কতকাল থাকবে। লাবিসীন মানে যারা অবস্থান করে, থেকে যায়। ফীহা মানে তার ভেতরে, অর্থাৎ জাহান্নামে। আর আহকাব এমন এক বিশেষ্যের বহুবচন, যা দীর্ঘ সময়কে বোঝায়। তাবারী সহজ ভাষায় বলেন: দুনিয়ায় যারা সীমা ছাড়িয়েছিল, তারা জাহান্নামে থেকে যাবে, সেখানে অবস্থান করবে আহকাব জুড়ে।"
          },
          {
            "en": "The first word has two readings. At-Tabari reports lābithīn, with the long vowel, from most readers of Medina and Basra and some of Kufa, and labithīn, without it, from most Kufan readers. He judges the long form the more eloquent and better grounded in Arabic, yet says he does not disallow the other. Al-Baghawi names Hamza and Ya'qub for the short form; al-Qurtubi names Hamza and al-Kisa'i. Both call the two forms dialect variants, and al-Qurtubi adds a shade: the short form describes a person for whom staying has become his settled condition.",
            "bn": "প্রথম শব্দটির দুটি কিরাআত আছে। তাবারী জানান, মদীনা ও বসরার অধিকাংশ কারী এবং কুফার কয়েকজন পড়েছেন লা-বিসীন, দীর্ঘ স্বরে। আর কুফার অধিকাংশ কারী পড়েছেন লাবিসীন, দীর্ঘ স্বর ছাড়া। তাঁর বিচারে দীর্ঘ রূপটি বেশি প্রাঞ্জল, আরবি ব্যাকরণেও বেশি মজবুত। তবু অন্য পাঠটিকে তিনি অবৈধ বলেননি। ছোট রূপটির কারী হিসেবে বাগাভী নাম নেন হামযা ও ইয়াকুবের, কুরতুবী নাম নেন হামযা ও কিসাঈর। দুজনেই বলেন, এ দুটি আরবির দুই প্রচলিত রূপ। কুরতুবী একটু সূক্ষ্মতাও যোগ করেন: ছোট রূপটি বোঝায় সেই লোককে, থেকে যাওয়াটাই যার স্থায়ী অবস্থা হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word for the Long Stretch",
          "bn": "দীর্ঘ কালের একটি শব্দ"
        },
        "p": [
          {
            "en": "Ibn Kathir glosses ahqab as the plural of huqb, and huqb as a period of time, then adds at once that the commentators differed over its measure. At-Tabari separates two related words. Hiqab is the plural of hiqba, as in a line of poetry about two companions who stayed together a hiqba of time, a line al-Qurtubi credits to Mutammim ibn Nuwayra. Ahqab is the plural of huqb, and at-Tabari points to the singular in 18:60, where Musa (AS) says aw amdiya huquba, or I will go on for a long stretch.",
            "bn": "ইবন কাসীর বলেন, আহকাব হলো হুকবের বহুবচন, আর হুকব মানে সময়ের একটা মেয়াদ। তারপরই যোগ করেন, এর পরিমাণ নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে। তাবারী কাছাকাছি দুটি শব্দকে আলাদা করেন। হিকাব হলো হিকবার বহুবচন, যেমন এক কবিতার চরণে দুই সঙ্গীর কথা আছে, যারা এক হিকবা কাল একসঙ্গে কাটিয়েছিল। কুরতুবী চরণটিকে মুতাম্মিম ইবন নুওয়াইরার বলে উল্লেখ করেন। আর আহকাব হলো হুকবের বহুবচন। একবচনটি তাবারী দেখান ১৮:৬০ আয়াতে, যেখানে মূসা (আঃ) বলেন: আও আমদিয়া হুকুবা, অথবা আমি দীর্ঘকাল চলতেই থাকব।"
          },
          {
            "en": "Ma'arif al-Qur'an gives the singular as hiqbah and the meaning as ages or a long time; on at-Tabari's distinction, that singular belongs with the other plural. Al-Qurtubi sets out the dictionary layer. Huqub, with two u-vowels, is dahr, an age, and ahqab are ages; hiqba, with an i, is a year. Huqb with a silent second letter he gives as eighty years, adding that more and less have been said. He also cites Qutrub: the huqb is a long age without limit. From the start the word pulls two ways: a measured span, or time without an edge.",
            "bn": "মাআরিফুল কুরআন একবচনটি লেখে হিকবাহ, আর অর্থ বলে যুগ বা দীর্ঘ সময়। তাবারীর পার্থক্য মানলে এ একবচন আসলে অন্য বহুবচনটির। কুরতুবী অভিধানের দিকটা খুলে বলেন। দুই পেশ দিয়ে হুকুব মানে দাহর, অর্থাৎ যুগ, আর আহকাব মানে যুগসমূহ। যের দিয়ে হিকবা মানে এক বছর। আর দ্বিতীয় অক্ষর সাকিন রেখে হুকব, তাঁর ভাষায়, আশি বছর, যদিও এর চেয়ে বেশি বা কম কথাও বলা হয়েছে। তিনি কুতরুবের কথাও আনেন: হুকব হলো সীমাহীন দীর্ঘ যুগ। শুরু থেকেই তাই শব্দটি দুই দিকে টানে। এক দিকে মাপা একটা মেয়াদ, অন্য দিকে কিনারাহীন সময়।"
          }
        ]
      },
      {
        "h": {
          "en": "Figures the Early Reports Give",
          "bn": "পূর্বসূরিদের দেওয়া নানা অঙ্ক"
        },
        "p": [
          {
            "en": "Several of the fetched books record numbers, and they do not agree. At-Tabari's chain has 'Ali ibn Abi Talib ask Hilal al-Hajari what they find the huqb to be in the revealed book; Hilal answers eighty years, each year twelve months, each month thirty days, each day a thousand years. At-Tabari carries eighty years from Abu Hurayra, Ibn 'Abbas and Sa'id ibn Jubayr, with a doubt marked in Sa'id's report over whether the day is a year or a thousand years. Qatada says it reached him that a huqb is eighty years of the years of the Hereafter.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার কয়েকটিতে সংখ্যা আছে, আর সংখ্যাগুলো মেলে না। তাবারীর এক সনদে আলী ইবন আবী তালিব (রাঃ) হিলাল আল-হাজারীকে জিজ্ঞেস করেন, নাযিলকৃত কিতাবে তোমরা হুকবকে কী পাও? হিলাল বলেন, আশি বছর। প্রতি বছরে ১২ মাস, প্রতি মাসে ৩০ দিন, আর প্রতিটি দিন হাজার বছরের। আশি বছরের কথা তাবারী আবূ হুরায়রা (রাঃ), ইবন আব্বাস (রাঃ) ও সাঈদ ইবন জুবাইর থেকেও আনেন। সাঈদের বর্ণনায় অবশ্য একটা সংশয় চিহ্নিত আছে: দিনটি এক বছরের, নাকি হাজার বছরের। কাতাদা বলেন, তাঁর কাছে খবর পৌঁছেছে যে হুকব হলো আখিরাতের হিসাবে আশি বছর।"
          },
          {
            "en": "Other figures sit beside these. Bashir ibn Ka'b says it reached him that a huqb is 300 years of 360 days, each day a thousand years. Ibn Kathir reports seventy years from al-Hasan and as-Suddi, and forty from 'Abdullah ibn 'Amr; al-Qurtubi gives the forty from Ibn 'Umar. Al-Baghawi reports seventeen thousand years from Muqatil ibn Hayyan. A long compound reckoning of 43 ahqab, each of seventy autumns, is credited to Mujahid by al-Baghawi and to al-Qurazi by al-Qurtubi. As-Suddi, in Ibn Kathir, counts 700 ahqab.",
            "bn": "এর পাশাপাশি আরও হিসাব আছে। বাশীর ইবন কা'ব বলেন, তিনি শুনেছেন হুকব ৩০০ বছর, প্রতি বছর ৩৬০ দিনের, আর প্রতিটি দিন হাজার বছরের। ইবন কাসীর হাসান ও সুদ্দী থেকে সত্তর বছরের কথা আনেন, আর আবদুল্লাহ ইবন আমর (রাঃ) থেকে চল্লিশ বছরের। কুরতুবী চল্লিশের কথাটি আনেন ইবন উমর (রাঃ) থেকে। বাগাভী মুকাতিল ইবন হাইয়ান থেকে আনেন সতেরো হাজার বছর। ৪৩ হুকবের একটা লম্বা গুণফলের হিসাবও আছে, প্রতিটি হুকব সত্তর শরৎকালের। বাগাভী এটিকে মুজাহিদের কথা বলেন, কুরতুবী বলেন কুরাযীর। আর ইবন কাসীরের বর্ণনায় সুদ্দী গোনেন ৭০০ হুকব।"
          },
          {
            "en": "Even one name can carry two numbers. In at-Tabari's two chains from al-Hasan, a single huqb is seventy thousand years; in the same report as Ibn Kathir quotes it, seventy years. Ma'arif al-Qur'an, citing Ibn Kathir, puts Abu Hurayra, Ibn 'Umar and Ibn 'Abbas at seventy, where Ibn Kathir's Arabic lists Abu Hurayra and Ibn 'Abbas with the eighty. As-Sa'di keeps it short: the ahqab are many, and a huqb, on what many commentators said, is eighty years. This article sets these figures side by side and chooses none of them.",
            "bn": "একই নামের সঙ্গে দুই রকম সংখ্যাও জুড়ে আছে। হাসান থেকে তাবারীর দুই সনদে এক হুকব সত্তর হাজার বছর। অথচ ইবন কাসীর যখন একই বর্ণনা উদ্ধৃত করেন, তাতে সত্তর বছর। মাআরিফুল কুরআন ইবন কাসীরের বরাতে আবূ হুরায়রা (রাঃ), ইবন উমর (রাঃ) ও ইবন আব্বাস (রাঃ)-এর মত বলে সত্তর বছর। কিন্তু ইবন কাসীরের আরবি পাঠে আবূ হুরায়রা ও ইবন আব্বাসের নাম আছে আশির তালিকায়। সা'দী অল্প কথায় সারেন: আহকাব অনেক, আর বহু মুফাসসিরের মতে এক হুকব আশি বছর। এ লেখা সংখ্যাগুলো পাশাপাশি রাখছে, কোনোটিকেই বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Age Following Another",
          "bn": "এক যুগের পিছে আরেক যুগ"
        },
        "p": [
          {
            "en": "Alongside the counting runs a reading that refuses to stop counting. Qatada, in at-Tabari, says ahqab is what has no break: whenever one huqb passes, another comes after it. Ar-Rabi' ibn Anas says no one knows the number of these ahqab except Allah. Al-Hasan, asked about the verse, says the ahqab have no count except eternity in the Fire, and in al-Baghawi he swears that Allah set no term for the people of the Fire: as one huqb passes another enters, then another, forever. The Muyassar paraphrases: ages following one another that do not end.",
            "bn": "গোনার পাশাপাশি আরেকটা ব্যাখ্যা চলে, যা গোনা থামাতে রাজি নয়। তাবারীর বর্ণনায় কাতাদা বলেন, আহকাব হলো যার কোনো ছেদ নেই। একটি হুকব পার হলে তার পরে আরেকটি হুকব আসে। রাবী ইবন আনাস বলেন, এই আহকাবের সংখ্যা আল্লাহ ছাড়া কেউ জানে না। হাসানকে আয়াতটি সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেন, জাহান্নামে চিরকাল থাকা ছাড়া আহকাবের আর কোনো গণনা নেই। বাগাভীর বর্ণনায় তিনি কসম খেয়ে বলেন, জাহান্নামীদের জন্য আল্লাহ কোনো মেয়াদ রাখেননি। এক হুকব যায়, আরেকটা ঢোকে, তারপর আরেকটা, চিরকাল। মুয়াসসার সংক্ষেপে বলে: একের পর এক আসা যুগ, যা কখনো থামে না।"
          },
          {
            "en": "Al-Qurtubi argues the point from the language. The verse means the ages of the Hereafter, which have no end, much as people say the days of the Hereafter. It would mark a limit only if it said five ahqab or ten. The huqb, he says, was the farthest span the Arabs knew, so they were addressed in terms their minds could reach, as an idiom for perpetuity; others say ahqab was chosen over days because it weighs more heavily on hearts. He quotes Ibn Kaysan: ages with no final limit, as though the verse said forever.",
            "bn": "কুরতুবী ভাষা থেকেই যুক্তি দেন। আয়াতের মানে আখিরাতের যুগসমূহ, যার কোনো শেষ নেই, যেমন লোকে বলে আখিরাতের দিনগুলো। আয়াত যদি বলত পাঁচটি হুকব বা দশটি হুকব, তবেই সেখানে মেয়াদ বোঝাত। তাঁর মতে আরবদের জানা সবচেয়ে দূরের সময় ছিল হুকব। তাই তাদের সঙ্গে কথা বলা হয়েছে এমন শব্দে, যা তাদের কল্পনায় ধরে, আর এ শব্দ চিরস্থায়িত্বের ইঙ্গিত। অন্যরা বলেন, দিনের বদলে আহকাব বলা হয়েছে, কারণ মনের উপর তার ভার বেশি। তিনি ইবন কাইসানের কথা আনেন: এমন যুগ যার কোনো শেষ সীমা নেই, যেন আয়াত বলছে চিরকাল।"
          },
          {
            "en": "Al-Qurtubi then weighs the figures themselves: they conflict, and fixing a duration for the stay would need a transmitted text that settles the question, which is not established from the Prophet ﷺ. Ma'arif al-Qur'an reaches a similar point: what the reports share is that a huqb is an extremely long time, and it quotes al-Baydawi's gloss of long periods following one another. Al-Baghawi adds a saying through as-Suddi and Murra from 'Abdullah: if the people of the Fire knew they would stay as long as the number of the world's pebbles, they would rejoice, and the people of the Garden would grieve.",
            "bn": "এরপর কুরতুবী সংখ্যাগুলোকেই মেপে দেখেন। তাঁর কথা, এগুলো পরস্পরবিরোধী। থাকার মেয়াদ বেঁধে দিতে হলে এমন বর্ণিত দলিল লাগবে যা প্রশ্নটার মীমাংসা করে দেয়, আর নবী ﷺ থেকে তেমন কিছু প্রমাণিত নয়। মাআরিফুল কুরআনও প্রায় একই জায়গায় পৌঁছায়: বর্ণনাগুলোর অভিন্ন কথা হলো, হুকব অত্যন্ত দীর্ঘ সময়। সেখানে বায়যাভীর ব্যাখ্যাও আছে: একের পর এক আসা দীর্ঘ মেয়াদ। বাগাভী সুদ্দী ও মুররার সূত্রে আবদুল্লাহর একটি উক্তি আনেন। জাহান্নামীরা যদি জানত যে তারা দুনিয়ার সব নুড়িপাথরের সংখ্যার সমান কাল থাকবে, তারা খুশি হতো। আর জান্নাতীরা একই কথা জানলে দুঃখ পেত।"
          }
        ]
      },
      {
        "h": {
          "en": "Ages of a Single Torment",
          "bn": "এক ধরনের আযাবের মেয়াদ"
        },
        "p": [
          {
            "en": "At-Tabari takes a further step. He agrees that Qatada and ar-Rabi' were right that these ahqab have no ending. Then he proposes that the verse may mean ahqab in one particular kind of punishment, the one the next verse goes on to name, after which other kinds follow. He cites 38:55 to 38:58, which uses the same two words as 78:22, at-taghin and ma'ab, and closes with others of its kind, in pairs. This reading, he says, is to him the closest to the meaning of the verse.",
            "bn": "তাবারী আরেক ধাপ এগোন। কাতাদা ও রাবী যে বলেছেন এই আহকাবের কোনো শেষ নেই, তিনি তা সঠিক মানেন। তারপর তিনি একটা সম্ভাবনা সামনে আনেন। আয়াতের আহকাব হয়তো নির্দিষ্ট এক ধরনের শাস্তির মেয়াদ, যার কথা পরের আয়াত বলবে। সে মেয়াদ ফুরোলে আসবে অন্য ধরনের শাস্তি। দলিল হিসেবে তিনি আনেন ৩৮:৫৫ থেকে ৩৮:৫৮ আয়াত। সেখানে ৭৮:২২-এর সেই দুটি শব্দই আছে, আত-তাগীন আর মাআব, আর শেষে আছে একই রকম আরও নানা জোড়া শাস্তির কথা। তাবারী বলেন, তাঁর কাছে এ ব্যাখ্যাই আয়াতের অর্থের সবচেয়ে কাছাকাছি।"
          },
          {
            "en": "Ibn Kathir summarises at-Tabari in an order worth noting: first this possibility of another kind of punishment, then the statement that the sound view is that the ahqab have no ending, as Qatada and ar-Rabi' said. Al-Qurtubi lists the reading under it has been said, and Ma'arif al-Qur'an presents it as a third interpretation held by a group of commentators. Read this way, the ahqab measure one stage of the punishment, not the whole stay. What that stage contains belongs to the next verses, and is left to them here.",
            "bn": "ইবন কাসীর তাবারীর কথা যে ক্রমে সাজান, সেটা লক্ষ করার মতো। প্রথমে অন্য ধরনের শাস্তির এই সম্ভাবনা। তারপর এই কথা যে সঠিক মত হলো, আহকাবের কোনো শেষ নেই, যেমন কাতাদা ও রাবী বলেছেন। কুরতুবী ব্যাখ্যাটি আনেন 'বলা হয়েছে' দিয়ে। মাআরিফুল কুরআন একে বলে একদল মুফাসসিরের তৃতীয় ব্যাখ্যা। এভাবে পড়লে আহকাব পুরো অবস্থানের মাপ নয়, শাস্তির একটি পর্যায়ের মাপ। সে পর্যায়ে কী আছে, তা পরের আয়াতগুলোর বিষয়। এখানে সেটা তাদের জন্যই রেখে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Abrogated, or Narrowed?",
          "bn": "রহিত, নাকি সীমিত?"
        },
        "p": [
          {
            "en": "Two older opinions limit the verse in other ways. Muqatil ibn Hayyan held that it is abrogated by 78:30, so taste it, for We will only increase you in punishment; al-Baghawi explains his meaning as the count being lifted and eternity established. Al-Qurtubi gives the abrogation view from Ibn Zayd and Muqatil. At-Tabari rejects it outright: the verse is a report, and reports are not abrogated, since abrogation falls only on command and prohibition. Al-Qurtubi calls it far-fetched for the same reason where disbelievers are concerned, citing 7:40, the camel and the needle's eye.",
            "bn": "আরও দুটি পুরোনো মত আয়াতটিকে অন্যভাবে সীমিত করে। মুকাতিল ইবন হাইয়ান বলতেন, আয়াতটি রহিত হয়ে গেছে ৭৮:৩০ দিয়ে: অতএব স্বাদ নাও, আমি তোমাদের শাস্তিই কেবল বাড়াব। বাগাভী তাঁর কথার ব্যাখ্যা দেন এভাবে: সংখ্যা উঠে গেছে, চিরস্থায়িত্ব সাব্যস্ত হয়েছে। কুরতুবী রহিত হওয়ার মতটি আনেন ইবন যায়দ ও মুকাতিল থেকে। তাবারী সরাসরি তা নাকচ করেন। আয়াতটি সংবাদ, আর সংবাদ রহিত হয় না। রহিত হয় কেবল আদেশ ও নিষেধ। কাফেরদের ক্ষেত্রে কুরতুবীও একই কারণে মতটিকে দূরবর্তী বলেন, আর প্রমাণ দেন ৭:৪০ থেকে, সুইয়ের ছিদ্রে উট ঢোকার কথা।"
          },
          {
            "en": "Khalid ibn Ma'dan read the verse, together with 11:107, except what your Lord wills, as concerning the people of tawhid among the people of the qibla. At-Tabari answers that what Qatada and ar-Rabi' said is more correct. Al-Qurtubi allows a narrower version: the eternity is for the mushrikun, and the verse could be carried to sinning believers who leave the Fire after ahqab; for them, he says, abrogation is sound if it means specification. Ma'arif al-Qur'an says Ibn Kathir mentions this possibility, al-Qurtubi supports it and al-Mazhari adopts it.",
            "bn": "খালিদ ইবন মা'দান এ আয়াত আর ১১:১০৭ আয়াতের 'তবে তোমার রব যা চান' অংশটিকে বুঝেছেন কিবলার অনুসারী তাওহীদপন্থীদের ব্যাপারে। তাবারীর জবাব, কাতাদা ও রাবীর কথাই বেশি সঠিক। কুরতুবী একটা সংকীর্ণ রূপ মেনে নেন। চিরস্থায়িত্ব মুশরিকদের জন্য। তবে আয়াতটিকে সেই গুনাহগার মুমিনদের উপরও প্রয়োগ করা যায়, যারা আহকাবের পর জাহান্নাম থেকে বের হবে। তাদের বেলায়, তিনি বলেন, রহিত হওয়ার কথা ঠিক, যদি তার মানে হয় নির্দিষ্টকরণ। মাআরিফুল কুরআন জানায়, এ সম্ভাবনার কথা ইবন কাসীর উল্লেখ করেছেন, কুরতুবী সমর্থন করেছেন, আর মাযহারী গ্রহণ করেছেন।"
          },
          {
            "en": "Abu Hayyan, as Ma'arif al-Qur'an reports him, disputes this from the verses that follow: 78:27 and 78:28 describe people who expected no reckoning and denied Allah's signs outright, which does not fit believers. Ma'arif itself holds that the disbelievers are never released, citing the Qur'an's phrase khalidina fiha abadan, abiding in it forever, and claiming the consensus of the Ummah. Ibn Kathir's abridged English names the taghin as rejectors who oppose the Messengers. These positions are reported here as their holders' own, side by side, with no verdict added.",
            "bn": "মাআরিফুল কুরআনের বর্ণনায় আবূ হাইয়ান পরের আয়াত দিয়ে এর বিরোধিতা করেন। ৭৮:২৭ ও ৭৮:২৮ আয়াতে এমন লোকদের কথা, যারা কোনো হিসাবের আশা করত না আর আল্লাহর নিদর্শনগুলো পুরোপুরি অস্বীকার করেছিল। এ বর্ণনা মুমিনদের সঙ্গে মেলে না। মাআরিফুল কুরআন নিজে মনে করে, কাফেরদের কখনো মুক্তি দেওয়া হবে না। প্রমাণ হিসেবে আনে কুরআনের বাক্যাংশ খালিদীনা ফীহা আবাদা, সেখানে তারা চিরকাল থাকবে, আর দাবি করে উম্মাহর ইজমা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ তাগীনদের বলে রাসূলদের বিরোধিতাকারী অস্বীকারকারী। এ মতগুলো এখানে যার যার নিজের মত হিসেবেই পাশাপাশি রাখা হলো, কোনো রায় যোগ করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Narrations Left Unquoted",
          "bn": "যে বর্ণনাগুলো উদ্ধৃত হয়নি"
        },
        "p": [
          {
            "en": "Several narrations traced to the Prophet ﷺ on the length of a huqb, or of the stay, appear in these tafsirs. Ibn Kathir carries one through Ibn Abi Hatim from Abu Umama and calls it very munkar, saying that al-Qasim and the man who narrates from him, Ja'far ibn az-Zubayr, are both abandoned. Others come from Musnad al-Bazzar and, in al-Qurtubi, through ath-Tha'labi and al-Mahdawi. None could be confirmed for this article on a hadith collection page, so none is quoted here, and no sound hadith attached to this verse was found.",
            "bn": "হুকবের দৈর্ঘ্য বা জাহান্নামে থাকার মেয়াদ নিয়ে নবী ﷺ-এর নামে কয়েকটি বর্ণনা এসব তাফসীরে আছে। ইবন কাসীর একটি আনেন ইবন আবী হাতিমের সূত্রে আবূ উমামা (রাঃ) থেকে, আর বলেন সেটি অত্যন্ত মুনকার। তাঁর কথা, কাসিম এবং তাঁর থেকে বর্ণনাকারী জা'ফর ইবন যুবাইর দুজনই পরিত্যক্ত। অন্যগুলো এসেছে মুসনাদ আল-বাযযার থেকে, আর কুরতুবীর কাছে সা'লাবী ও মাহদাভীর সূত্রে। এ লেখার জন্য কোনোটিই কোনো হাদীস সংকলনের পাতায় যাচাই করা যায়নি। তাই কোনোটি এখানে উদ্ধৃত হয়নি। এ আয়াতের সঙ্গে যুক্ত কোনো সহীহ হাদীসও পাওয়া যায়নি।"
          },
          {
            "en": "A further point must be said plainly. The verse describes at-taghin, those who overstepped every bound and who, as 78:27 and 78:28 go on to say, denied Allah's signs. It describes what the text describes, and it licenses nothing against any living person or community. It hands no reader a list of names, and nobody may assign another human being to these ages. Each person's end is with Allah. The commentators' own disagreement over who is meant should be enough to check any confidence about other people.",
            "bn": "আরেকটা কথা সোজাসুজি বলা দরকার। আয়াতটি আত-তাগীনদের কথা বলে, যারা সব সীমা ছাড়িয়ে গিয়েছিল। ৭৮:২৭ ও ৭৮:২৮ আয়াত জানায়, তারা আল্লাহর নিদর্শনগুলো অস্বীকার করেছিল। আয়াতটি কেবল সেটুকুই বর্ণনা করে, যা তার পাঠে আছে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি এ আয়াত দেয় না। কোনো পাঠকের হাতে এটি নামের তালিকা তুলে দেয় না। অন্য কোনো মানুষকে এই যুগ যুগের ঠিকানায় পাঠিয়ে দেওয়ার অধিকারও কারও নেই। প্রত্যেকের শেষ পরিণতি আল্লাহর হাতে। আয়াতে কারা উদ্দেশ্য, এ নিয়ে মুফাসসিরদের নিজেদের মতভেদই অন্যদের ব্যাপারে যেকোনো নিশ্চিত ধারণাকে থামিয়ে দেওয়ার জন্য যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Countable Days, Uncounted Ages",
          "bn": "গোনা দিন, অগণিত যুগ"
        },
        "p": [
          {
            "en": "What remains for the reader is the contrast the word sets up. Every human life is countable. Its years can be written down, and even when describing the ahqab, the early reports reached for years, months and days. Yet the verse itself names no number, and al-Qurtubi notes it would have said five or ten if it meant a fixed limit. The span on the far side is described in a word that defeats the counting mind. That leaves the countable span on this side as the span that can still be used.",
            "bn": "পাঠকের জন্য যা থেকে যায়, তা হলো শব্দটি যে বৈপরীত্য দাঁড় করায়। মানুষের জীবন গোনা যায়। তার বছরগুলো লিখে রাখা যায়। এমনকি আহকাবের বর্ণনা দিতে গিয়েও পূর্বসূরিদের বর্ণনাগুলো বছর, মাস আর দিনেরই আশ্রয় নিয়েছে। অথচ আয়াত নিজে কোনো সংখ্যা বলেনি। কুরতুবী মনে করিয়ে দেন, নির্দিষ্ট মেয়াদ বোঝালে আয়াত পাঁচটি বা দশটি হুকব বলত। ওপারের সময়টা বলা হয়েছে এমন শব্দে, যার সামনে গোনার বুদ্ধি হার মানে। তাহলে এপারের গোনা সময়টাই থাকে, যা এখনো কাজে লাগানো যায়।"
          },
          {
            "en": "So the verse returns a practical question. Which repentance have I been postponing on the assumption that time is plentiful? Which wrong done to another person am I leaving unrepaired, as though there will always be a later? The commentators' long arithmetic, whatever its worth, agrees with the verse on one thing: the stay is long beyond any easy reckoning. The time to act is the short, countable one we are in now, and the right place to apply a verse like this is to oneself, before anyone else.",
            "bn": "আয়াতটি তাই একটা কাজের প্রশ্ন ফিরিয়ে দেয়। সময় অঢেল আছে ভেবে কোন তওবাটা আমি পিছিয়ে রাখছি? কারও প্রতি করা কোন অন্যায়ের প্রতিকার না করে ফেলে রেখেছি, যেন পরে করার সময় সবসময়ই থাকবে? মুফাসসিরদের লম্বা হিসাবের মূল্য যা-ই হোক, এক জায়গায় তা আয়াতের সঙ্গে একমত: থাকার মেয়াদ সহজ কোনো হিসাবের অনেক বাইরে। কাজের সময় তো এই ছোট, গোনা সময়টাই, যার ভেতরে আমরা এখন আছি। আর এমন আয়াত প্রয়োগের সঠিক জায়গা অন্য কেউ নয়, প্রথমে নিজের জীবন।"
          }
        ]
      }
    ]
  }
});
