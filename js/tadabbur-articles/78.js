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
  }
});
