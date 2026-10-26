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
            "bn": "সূরা আন-নাবা মক্কায় নাজিল হয়েছে, আর এর শুরু একটা প্রশ্ন দিয়ে: আম্মা ইয়াতাসাআলূন, তারা একে অন্যকে কী নিয়ে জিজ্ঞেস করছে? জবাবের জন্য অপেক্ষা করতে হয় না। ৭৮:২ বলে দেয়, আনিন নাবায়িল আযীম, মহাসংবাদ নিয়ে। আর ৭৮:৩ আরবি চারটি শব্দে জবাবটা পূর্ণ করে: আল্লাযী হুম ফীহি মুখতালিফূন, যে বিষয়ে তাদের মধ্যে মতভেদ। তাই আয়াতটি নতুন কোনো ঘোষণা নয়। এ হলো সংবাদটির পরিচয়, যাতে শ্রোতা চিনতে পারে কোন মহাসংবাদের কথা হচ্ছে: যে সংবাদ নিয়ে প্রশ্নকারীরা নিজেরাই আগে থেকে দুই ভাগ হয়ে আছে।"
          },
          {
            "en": "What follows is a warning given twice, in 78:4 and 78:5: kalla sa-ya'lamun, no, they are going to know, then the same words again after thumma, then. Ibn Kathir calls it a severe threat and a direct warning, and reads 78:6 onward as Allah setting out His power as proof that He can do whatever He wills concerning the Hereafter. So 78:3 sits at a hinge. It names the dispute, and everything after it answers the dispute: first a warning, then evidence taken from the earth, the mountains, human pairs and sleep.",
            "bn": "এরপর ৭৮:৪ ও ৭৮:৫ আয়াতে দুবার সতর্কবাণী: কাল্লা সাইয়া'লামূন, কক্ষনো না, তারা শীঘ্রই জানবে। দ্বিতীয়বার একই কথা আসে ছুম্মা, অর্থাৎ 'তারপর', শব্দটি জুড়ে। ইবন কাসীর একে বলেন কঠোর হুমকি ও সরাসরি সতর্কবার্তা। ৭৮:৬ থেকে পরের আয়াতগুলোকে তিনি পড়েন আল্লাহর কুদরতের বর্ণনা হিসেবে, যা প্রমাণ করে আখিরাতের ব্যাপারে তিনি যা চান তা-ই করতে পারেন। তাই ৭৮:৩ আয়াতটি দুই অংশের সংযোগস্থলে দাঁড়িয়ে। এ আয়াত বিবাদটার নাম বলে দেয়, আর এর পরের সবকিছু সেই বিবাদের জবাব। প্রথমে সতর্কবাণী, তারপর প্রমাণ: যমীন, পাহাড়, জোড়ায় জোড়ায় মানুষ আর ঘুম।"
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
            "bn": "মাআরিফুল কুরআন বলে, নাবা মানে সংবাদ, তবে সব সংবাদ নাবা নয়। শব্দটা রাখা হয় কোনো বড় ঘটনার গুরুতর সংবাদের জন্য। ইবন কাসীর তাঁর আরবি তাফসীরে আন-নাবাউল আযীমের ব্যাখ্যা দেন আল-খাবারুল হায়িলুল মুফযিউল বাহির বলে: ভয়ংকর, আতঙ্ক জাগানো, অভিভূত করে দেওয়া খবর। তার ওপর বিশেষণ আযীম, মহা, ভারটা আরও বাড়িয়ে দেয়। সংবাদটা শেষ পর্যন্ত যা-ই হোক, এর ওজন নিয়ে দুই তাফসীরকারই একমত। শহরের অলস গালগল্প এটা নয়। এ এমন খবর, যে বিশ্বাস করে, তার জীবনের সবকিছু বদলে যায়।"
          },
          {
            "en": "Mukhtalifun is a participle from the root kh-l-f, here carrying the sense of differing and taking opposite sides. At-Tabari glosses the clause with a verb of becoming: the thing over which they became two parties, one party affirming it and one party denying it. Al-Qurtubi gives the mutual sense: yukhalifu fihi ba'duhum ba'dan, some of them oppose others over it, so that one affirms and another denies. The relative word alladhi ties the whole verse back to the news, so that the news is identified by the quarrel that has gathered around it.",
            "bn": "মুখতালিফূন শব্দটি খ-ল-ফ ধাতু থেকে আসা কর্তাবাচক রূপ। এখানে এর অর্থ মতভেদ, দুই বিপরীত পক্ষে ভাগ হয়ে যাওয়া। তাবারী বাক্যটির ব্যাখ্যায় 'হয়ে যাওয়া' অর্থের একটি ক্রিয়া আনেন: যে বিষয়ে তারা দুই দলে ভাগ হয়ে গেছে, এক দল তা সত্য বলে মানে, আরেক দল মিথ্যা বলে। কুরতুবী পারস্পরিক অর্থটা সামনে আনেন: ইউখালিফু ফীহি বা'দুহুম বা'দান, তাদের একদল অন্যদলের বিরোধিতা করে, একজন সত্য বলে তো আরেকজন মিথ্যা বলে। আল্লাযী শব্দটি গোটা আয়াতকে সংবাদের সঙ্গে বেঁধে দেয়। ফলে সংবাদটার পরিচয় মেলে তাকে ঘিরে জমে ওঠা বিবাদ দিয়েই।"
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
            "bn": "মহাসংবাদ বলতে কী বোঝানো হয়েছে, সে বিষয়ে তাফসীরকারেরা একমত নন। তাবারী ৭৮:২-এর তাফসীরে প্রশ্নটা শুরুই করেন এ কথা বলে: ব্যাখ্যাকারেরা এখানে মতভেদ করেছেন। একদল বলেছেন, এ হলো কুরআন। তাবারী মতটি বর্ণনা করেন মুজাহিদ থেকে। কুরতুবী ৭৮:৩-এর তাফসীরে একই কথা আনেন ইবন আব্বাস (রাঃ) থেকে, আবু সালিহের সূত্রে। প্রমাণ হিসেবে তিনি দেখান ৩৮:৬৭ ও ৩৮:৬৮: বলো, এ এক মহাসংবাদ, যা থেকে তোমরা মুখ ফিরিয়ে নিচ্ছ। তাঁর কথায়, কুরআন নিজেই নাবা, খবর আর কাহিনি, আর তা অতি মর্যাদাপূর্ণ খবর। বাগাভী বলেন, এটি মুজাহিদ এবং অধিকাংশ তাফসীরকারের মত।"
          },
          {
            "en": "A second group said the resurrection after death. At-Tabari reports it from Qatada by two chains, and from Ibn Zayd in the form Yawm al-Qiyama, the Day of Resurrection. Ibn Kathir's Arabic names Qatada and Ibn Zayd for the resurrection and Mujahid for the Qur'an, side by side, and does not rank them there. His abridged English and Ma'arif al-Qur'an both take the news to be the Day of Judgement. Al-Qurtubi then adds a third view under qila, it was said: the matter of the Prophet ﷺ, with no name attached to it.",
            "bn": "আরেক দল বলেছেন, এ হলো মৃত্যুর পরের পুনরুত্থান। তাবারী মতটি কাতাদা থেকে দুটি সনদে বর্ণনা করেন, আর ইবন যায়দ থেকে আনেন এই শব্দে: ইয়াওমুল কিয়ামাহ, কিয়ামতের দিন। ইবন কাসীর আরবি তাফসীরে পাশাপাশি দুটো মতই রাখেন: পুনরুত্থানের পক্ষে কাতাদা ও ইবন যায়দ, কুরআনের পক্ষে মুজাহিদ। সেখানে তিনি কোনোটিকে অগ্রাধিকার দেন না। তবে তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণ এবং মাআরিফুল কুরআন দুটোই সংবাদটিকে বিচার দিবস বলে ধরেছে। কুরতুবী এরপর 'কীলা', অর্থাৎ বলা হয়েছে, শব্দ দিয়ে তৃতীয় একটি মত আনেন: নবী ﷺ-এর বিষয়। এ মতের সঙ্গে কারও নাম জোড়া নেই।"
          },
          {
            "en": "Al-Muyassar joins the first two: the great news is the Qur'an, which brings word of the resurrection that the disbelievers of Quraysh doubted and denied. At-Tabari lists both groups with their chains and states no preference between them. Al-Qurtubi also preserves a different report, from ad-Dahhak from Ibn Abbas (RA): that the Jews asked the Prophet ﷺ about many things, and Allah informed him of their disagreement. None of these readings is set aside here. The verse itself names the news by its effect, and every reading keeps that effect: people split over it.",
            "bn": "মুয়াসসার প্রথম দুটো মতকে এক করে: মহাসংবাদ হলো কুরআন, আর কুরআন খবর দেয় পুনরুত্থানের। কুরাইশের কাফিররা এই পুনরুত্থান নিয়েই সন্দেহ করত, একে মিথ্যা বলত। তাবারী সনদসহ দুই দলের মতই তুলে ধরেন, কোনোটির পক্ষে নিজের রায় দেন না। কুরতুবী আরেকটি ভিন্ন বর্ণনাও রেখে দেন, দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে: ইহুদিরা নবী ﷺ-কে অনেক বিষয়ে প্রশ্ন করেছিল, আর আল্লাহ তাঁকে তাদের মতভেদের খবর জানিয়ে দেন। এখানে কোনো মতকেই বাদ দেওয়া হচ্ছে না। আয়াত নিজেই সংবাদটাকে চিনিয়েছে তার ফল দিয়ে, আর প্রতিটি ব্যাখ্যাতেই সেই ফল অটুট: মানুষ এ নিয়ে ভাগ হয়ে গেছে।"
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
            "bn": "দ্বিতীয় প্রশ্ন: মতভেদটা কার সঙ্গে কার? বেশিরভাগ তাফসীরকার মুখতালিফূন পড়েছেন বিশ্বাসী আর অস্বীকারকারীর মধ্যকার বিভক্তি হিসেবে। ইবন কাসীরের আরবি তাফসীর এখানে সংক্ষিপ্ত: এ বিষয়ে মানুষের দুটো অবস্থান, কেউ মুমিন, কেউ কাফির। বাগাভী শুধু এটুকু বলেন: একজন সত্য বলে মানে, আরেকজন মিথ্যা বলে। তাবারী কাতাদার একটি তীক্ষ্ণ পর্যবেক্ষণ বর্ণনা করেন। এ বিষয়ে মানুষ দুই রকম হয়ে গেল, একজন বিশ্বাস করে, আরেকজন অস্বীকার করে। মৃত্যুকে অবশ্য সবাই মেনে নিয়েছিল, কারণ নিজের চোখে তা দেখেছিল। তাদের মতভেদ ছিল মৃত্যুর পরে আবার জীবিত হওয়া নিয়ে।"
          },
          {
            "en": "Another strand places the differing among those who did not believe. Ibn Zayd, in at-Tabari on 78:2, has them say: this is the day you claim we and our fathers will live again; and they are in disagreement over it, not believing in it. As-Sa'di describes a dispute that grew long and a disagreement that spread by way of takdhib and istib'ad, denial and dismissing it as far-fetched. Al-Muyassar pairs doubt and denial in one sentence. Ma'arif al-Qur'an reports that some commentators saw the asking as half mockery and half doubt.",
            "bn": "আরেকটি ধারার মতে, মতভেদটা ছিল অবিশ্বাসীদের নিজেদের মধ্যেই। ৭৮:২-এর তাফসীরে তাবারী ইবন যায়দের যে কথা আনেন, তাতে তারা বলে: এই সেই দিন, যেদিন নাকি তোমাদের দাবি অনুযায়ী আমরা আর আমাদের বাপদাদারা আবার জীবিত হব। তারা এ নিয়ে মতভেদে আছে, আর তাতে বিশ্বাস করে না। সা'দী বলেন, বিবাদটা দীর্ঘ হয়েছিল, আর মতভেদ ছড়িয়ে পড়েছিল তাকযীব ও ইস্তিব'আদের পথে, অর্থাৎ মিথ্যা বলা আর অসম্ভব ভেবে উড়িয়ে দেওয়া। মুয়াসসার একটি বাক্যেই সন্দেহ আর অস্বীকার পাশাপাশি রাখে। মাআরিফুল কুরআন জানায়, কিছু তাফসীরকারের মতে তাদের প্রশ্নটা ছিল অর্ধেক ঠাট্টা, অর্ধেক সন্দেহ।"
          },
          {
            "en": "These are two different claims, and they are kept apart here with the names of those who hold them. The identification of the questioners with Quraysh or with the people of Makkah comes from al-Muyassar, from Ma'arif al-Qur'an and from the scholars of Arabic whom at-Tabari cites. The verse describes what those listeners did with the news in their own time. It licenses nothing against any living person or community, and it hands no reader a label to fix on anyone today, whether a neighbour, a relative or a whole people.",
            "bn": "এ দুটি আলাদা দাবি। তাই এখানে দুটিকে আলাদা রাখা হলো, যাঁরা যে মত দিয়েছেন তাঁদের নামসহ। প্রশ্নকারীরা কুরাইশ বা মক্কার লোক, এই পরিচয় এসেছে মুয়াসসার, মাআরিফুল কুরআন আর তাবারীর উদ্ধৃত কয়েকজন আরবি ভাষাবিদের কাছ থেকে। আয়াতটি বর্ণনা করছে, সেই শ্রোতারা তাদের নিজেদের সময়ে সংবাদটার সঙ্গে কী আচরণ করেছিল। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। প্রতিবেশী, আত্মীয় বা গোটা কোনো জাতির গায়ে সেঁটে দেওয়ার মতো কোনো তকমাও এ আয়াত পাঠকের হাতে তুলে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Narration on the Verse",
          "bn": "আয়াতের সঙ্গে জোড়া হাদিস নেই"
        },
        "p": [
          {
            "en": "None of the commentaries consulted here attaches a sound hadith to 78:3. Ma'arif al-Qur'an relates from Ibn Abbas (RA), without giving a chain, that when the revelation began the pagan Arabs would sit in circles discussing and criticising it, above all its talk of resurrection and judgement, which they held to be impossible. That describes the setting, offered as a report. It is not treated here as an established occasion of revelation, and al-Qurtubi's report from ad-Dahhak, mentioned above, stands beside it as one more view.",
            "bn": "এখানে যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই ৭৮:৩ আয়াতের সঙ্গে কোনো সহীহ হাদিস জুড়ে দেয়নি। মাআরিফুল কুরআন সনদ উল্লেখ না করে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করে: ওহি নাজিল শুরু হলে মুশরিক আরবরা গোল হয়ে বসে তা নিয়ে আলোচনা আর সমালোচনা করত। বিশেষ করে পুনরুত্থান আর বিচারের কথা তাদের কাছে অসম্ভব মনে হতো। এ বর্ণনা তখনকার পরিবেশের একটা ছবি দেয়, তবে শুধু খবর হিসেবেই। এখানে একে প্রমাণিত শানে নুযূল বলে ধরা হচ্ছে না। আগে উল্লেখ করা দাহহাকের সূত্রে কুরতুবীর বর্ণনাও এর পাশে আরেকটি মত হিসেবেই থাকছে।"
          },
          {
            "en": "There is a general narration about the surah, not attached to this verse. At-Tirmidhi narrates from Ibn Abbas (RA): Abu Bakr (RA) said, 'O Messenger of Allah! You have become grey.' He said: 'I have gone grey from Hud, al-Waqi'ah, al-Mursalat, 'Amma yatasa'alun and Idha ash-shamsu kuwwirat.' At-Tirmidhi grades it hasan gharib, saying it is known from Ibn Abbas only by this route, and he notes other versions of it, one of them mursal. It speaks of the surah as a whole, a surah that opens on this dispute.",
            "bn": "সূরা সম্পর্কে একটি সাধারণ বর্ণনা আছে, যা এ আয়াতের সঙ্গে জোড়া নয়। তিরমিযী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: আবু বকর (রাঃ) বললেন, 'হে আল্লাহর রাসূল! আপনার চুল তো পেকে গেছে।' তিনি বললেন: 'আমার চুল পাকিয়ে দিয়েছে হূদ, আল-ওয়াকিআ, আল-মুরসালাত, আম্মা ইয়াতাসাআলূন আর ইযাশ শামসু কুওভিরাত।' তিরমিযী একে হাসান গরীব বলেছেন। তাঁর কথায়, ইবন আব্বাস থেকে এটি কেবল এই সূত্রেই জানা যায়। এর অন্য কয়েকটি বর্ণনার কথাও তিনি উল্লেখ করেন, যার একটি মুরসাল। বর্ণনাটি পুরো সূরা নিয়ে, আর সে সূরার শুরুই এই বিবাদ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Other Verses on the Dispute",
          "bn": "একই বিবাদ, অন্য আয়াতে"
        },
        "p": [
          {
            "en": "38:67 and 38:68 are the verses al-Qurtubi and al-Baghawi cite for the Qur'an reading: say, it is great news from which you turn away. Ibn Zayd, in at-Tabari, cites the same passage for the Day of Resurrection. 16:38 and 16:39 use almost the wording of 78:3. The deniers swear that Allah will not raise the dead; the reply is that He will, so as to make clear to them alladhi yakhtalifuna fihi, that over which they differ. There the differing is plainly about the resurrection, and the answer is that the rising itself will settle it.",
            "bn": "৩৮:৬৭ ও ৩৮:৬৮ আয়াতকে কুরতুবী ও বাগাভী কুরআন-মতের দলীল হিসেবে আনেন: বলো, এ এক মহাসংবাদ, যা থেকে তোমরা মুখ ফিরিয়ে নিচ্ছ। আবার তাবারীর বর্ণনায় ইবন যায়দ একই আয়াত টেনে আনেন কিয়ামতের দিন প্রসঙ্গে। ১৬:৩৮ ও ১৬:৩৯ আয়াতের শব্দ প্রায় ৭৮:৩ আয়াতের মতোই। অস্বীকারকারীরা কসম খেয়ে বলে, যে মরে আল্লাহ তাকে আর জীবিত করবেন না। জবাব আসে, অবশ্যই করবেন, যাতে তিনি তাদের সামনে স্পষ্ট করে দেন আল্লাযী ইয়াখতালিফূনা ফীহ, যা নিয়ে তারা মতভেদ করে। সেখানে মতভেদটা যে পুনরুত্থান নিয়ে, তা পরিষ্কার। আর জবাব হলো, পুনরুত্থান নিজেই এর মীমাংসা করে দেবে।"
          },
          {
            "en": "51:8 and 51:9 tell the deniers they are in qawl mukhtalif, differing speech, and that whoever is turned from it has been turned away. 27:66 traces their knowledge of the Hereafter running out, then doubt, then blindness, a sequence close to al-Muyassar's pairing of doubt with denial. 39:46 carries the question to its final court: You will judge between Your servants concerning that over which they used to differ. And within an-Naba itself, 78:17 names the Day of Decision as an appointed time, the date the dispute was always heading towards.",
            "bn": "৫১:৮ ও ৫১:৯ আয়াত অস্বীকারকারীদের বলে, তোমরা কাওলিম মুখতালিফ, পরস্পরবিরোধী কথার মধ্যে আছ। আর এ থেকে যে ফিরে যায়, তাকে আসলে ফিরিয়ে দেওয়া হয়েছে। ২৭:৬৬ আয়াত দেখায়, আখিরাত নিয়ে তাদের জ্ঞান ফুরিয়ে গেছে, তারপর এসেছে সন্দেহ, তারপর অন্ধত্ব। মুয়াসসার সন্দেহ আর অস্বীকারকে যেভাবে পাশাপাশি রেখেছে, এ ধাপগুলো তার কাছাকাছি। ৩৯:৪৬ প্রশ্নটাকে শেষ আদালতে নিয়ে যায়: আপনিই আপনার বান্দাদের মধ্যে ফয়সালা করবেন, যে বিষয়ে তারা মতভেদ করত। আর আন-নাবা সূরাতেই ৭৮:১৭ আয়াত বিচারের দিনকে বলে নির্ধারিত সময়। বিবাদটা শুরু থেকেই সেই তারিখের দিকে এগোচ্ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Living as if It Were Settled",
          "bn": "মীমাংসিত বিষয়ের মতো জীবন"
        },
        "p": [
          {
            "en": "Qatada's remark is the place to begin. No one in Makkah argued about death, because everyone had watched it happen; the quarrel began at what comes after. Many people today hold the same line in practice. Death is certain and planned for, with wills, savings and burial plots arranged in advance, while the rising is left as something to discuss. A believer can test himself here. Which of my plans assume that the news is true? Which of them would look exactly the same if I were one of those still arguing?",
            "bn": "শুরু করা যায় কাতাদার কথাটা দিয়ে। মক্কায় কেউ মৃত্যু নিয়ে তর্ক করেনি, কারণ সবাই তা ঘটতে দেখেছে। ঝগড়া শুরু হয়েছে তার পরের অংশ নিয়ে। আজও অনেক মানুষ কাজেকর্মে ঠিক এই সীমারেখাই মেনে চলে। মৃত্যু নিশ্চিত, তাই তার প্রস্তুতিও আছে: ওসিয়ত, সঞ্চয়, কবরের জায়গা আগেভাগে ঠিক করা। অথচ পুনরুত্থান থেকে যায় আলোচনার বিষয় হয়ে। একজন মুমিন এখানে নিজেকে যাচাই করতে পারেন। আমার কোন পরিকল্পনাগুলো ধরে নেয় যে সংবাদটা সত্য? আর কোনগুলো হুবহু একই থাকত, যদি আমিও তর্ক করতে থাকা লোকদের একজন হতাম?"
          },
          {
            "en": "The verse also describes a kind of talk. They were asking one another, and as-Sa'di calls it a dispute that grew long. Talk about the Hereafter can become a substitute for preparing for it: debates about signs, timetables and details, with no change in prayer, debts or speech. A practical week might look like this. Settle one debt or one wrong you owe someone. Pray one prayer as a person who will be raised and asked about it. And when the subject comes up among friends, close the conversation with something to do rather than something to argue over.",
            "bn": "আয়াতটি এক ধরনের আলাপেরও ছবি আঁকে। তারা একে অন্যকে জিজ্ঞেস করছিল, আর সা'দী বলেন, সে বিবাদ দীর্ঘ হয়ে গিয়েছিল। আখিরাত নিয়ে কথা বলাটাই কখনো কখনো আখিরাতের প্রস্তুতির জায়গা দখল করে নেয়। আলামত, সময়সূচি আর খুঁটিনাটি নিয়ে বিতর্ক চলে, অথচ নামাজ, দেনা বা মুখের কথায় কোনো বদল আসে না। একটা বাস্তব সপ্তাহ হতে পারে এরকম। কারও কাছে একটা দেনা বা একটা অন্যায়ের দায় থাকলে তা মিটিয়ে দিন। এক ওয়াক্ত নামাজ এমনভাবে পড়ুন, যেন জানেন, আপনাকে আবার ওঠানো হবে আর এই নামাজ সম্পর্কে জিজ্ঞেস করা হবে। আর বন্ধুদের মধ্যে প্রসঙ্গটা উঠলে আলাপ শেষ করুন করণীয় কিছু দিয়ে, তর্কের নতুন বিষয় দিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Guided Through",
          "bn": "মতভেদের মাঝে পথ চাওয়া"
        },
        "p": [
          {
            "en": "Muslim narrates that Abu Salama ibn Abd ar-Rahman asked A'isha (RA) how the Prophet ﷺ opened his prayer when he rose at night. She said he would open it with: 'O Allah, Lord of Jibril, Mika'il and Israfil, Originator of the heavens and the earth, Knower of the unseen and the seen, You judge between Your servants in what they used to differ over. Guide me, by Your leave, to the truth in what has been differed over, for You guide whom You will to a straight path.' It is not attached to 78:3, but it turns the verse's word for differing into a request.",
            "bn": "মুসলিম বর্ণনা করেন, আবু সালামা ইবন আবদির রহমান আয়িশা (রাঃ)-কে জিজ্ঞেস করেছিলেন, নবী ﷺ রাতে উঠে কী দিয়ে নামাজ শুরু করতেন। উত্তরে তিনি বলেন, এই দুআ দিয়ে: 'হে আল্লাহ, জিবরীল, মীকাঈল ও ইসরাফীলের রব, আসমান ও যমীনের স্রষ্টা, গায়েব ও প্রকাশ্যের জ্ঞানী! আপনার বান্দারা যে বিষয়ে মতভেদ করত, আপনিই তার ফয়সালা করেন। যে সত্য নিয়ে মতভেদ হয়েছে, আপনার অনুমতিতে আমাকে সেদিকে পথ দেখান। নিশ্চয়ই আপনি যাকে চান, সরল পথে পরিচালিত করেন।' এ দুআ ৭৮:৩ আয়াতের সঙ্গে জোড়া নয়। তবে আয়াতে মতভেদের যে শব্দ, এ দুআ সেটাকেই একটা প্রার্থনায় বদলে দেয়।"
          },
          {
            "en": "Some questions to carry from the verse. What part of the great news do I affirm in words while my week argues the other side? When I hear people quarrel over the truth, does their quarrel become my excuse for standing aside? Do I come to the Qur'an expecting news meant for me, or a subject to have views about? And if Qatada is right that no one disputes the death they have seen, what would I change if I held what follows it with the same certainty?",
            "bn": "আয়াত থেকে সঙ্গে নেওয়ার মতো কয়েকটি প্রশ্ন। মহাসংবাদের কোন অংশ আমি মুখে স্বীকার করি, অথচ সপ্তাহজুড়ে আমার কাজকর্ম বলে উল্টো কথা? সত্য নিয়ে মানুষকে ঝগড়া করতে শুনলে কি সেই ঝগড়াই আমার দূরে সরে থাকার অজুহাত হয়ে যায়? কুরআনের কাছে আমি কি যাই আমার জন্য পাঠানো খবরের আশায়, নাকি মতামত দেওয়ার মতো একটা বিষয় হিসেবে? আর কাতাদার কথাই যদি ঠিক হয় যে চোখে দেখা মৃত্যু নিয়ে কেউ তর্ক করে না, তবে তার পরের অংশকেও একই নিশ্চয়তায় ধরলে আমি কী বদলাতাম?"
          }
        ]
      }
    ]
  },
  "78:9": {
    "sections": [
      {
        "h": {
          "en": "Asking About the Great News",
          "bn": "মহাসংবাদ নিয়ে জিজ্ঞাসাবাদ"
        },
        "p": [
          {
            "en": "Surah an-Naba opens with a question: 'amma yatasa'alun, what are they asking one another about? 78:2 answers, about the great news, and 78:3 adds that it is the thing they are in disagreement over. Ibn Kathir, in the abridged English, takes the news to be the Day of Judgement and calls it dreadful and overwhelming, and he says people split into two camps over it, those who believe in it and those who reject it. 78:4 and 78:5 then repeat no, they will come to know, which he calls a severe threat and a direct warning.",
            "bn": "সূরা নাবা শুরু হয় একটা প্রশ্ন দিয়ে: আম্মা ইয়াতাসাআলূন, তারা পরস্পরকে কী নিয়ে জিজ্ঞেস করছে? ৭৮:২ উত্তর দেয়, মহাসংবাদ নিয়ে। ৭৮:৩ যোগ করে, এ সেই বিষয় যা নিয়ে তাদের মতভেদ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীরে এই সংবাদ হলো কিয়ামতের দিন। তিনি একে ভয়ংকর ও সর্বগ্রাসী খবর বলেছেন, আর বলেছেন, এ নিয়ে মানুষ দুই দলে ভাগ হয়ে গেছে: একদল বিশ্বাস করে, আরেক দল অস্বীকার করে। এরপর ৭৮:৪ ও ৭৮:৫ দুবার বলে, কক্ষনো না, তারা শীঘ্রই জানবে। ইবন কাসীরের ভাষায় এ কঠোর হুমকি, সরাসরি সতর্কবাণী।"
          },
          {
            "en": "Then, in his words, Allah begins to explain His great ability to create strange things and amazing matters, and brings this as proof that He can do whatever He wishes concerning the Hereafter and other matters too. That is the frame he gives for 78:6 to 78:16, and it is the only frame this article claims for the list. The shipped reading of 78:3 asks which news is meant. The question here is narrower: why sleep, three words of it, stands among the exhibits offered in reply, next to the earth, the mountains and the sky.",
            "bn": "তারপর, ইবন কাসীর বলেন, আল্লাহ তাঁর সেই মহাক্ষমতার বিবরণ শুরু করেন, যা দিয়ে তিনি বিস্ময়কর ও অদ্ভুত সব জিনিস সৃষ্টি করেন। আখিরাতের ব্যাপারে এবং অন্য সব ব্যাপারেও তিনি যা চান তা-ই করতে পারেন, এ তারই প্রমাণ। ৭৮:৬ থেকে ৭৮:১৬ পর্যন্ত তালিকার জন্য ইবন কাসীর এই কাঠামোই দেন, আর এ লেখা তালিকাটিকে এর বাইরে টানবে না। ৭৮:৩-এর প্রকাশিত আলোচনায় প্রশ্ন ছিল, কোন সংবাদের কথা বলা হচ্ছে। এখানকার প্রশ্ন আরও ছোট: জবাবে যে নিদর্শনগুলো সাজানো হলো, তার মধ্যে মাটি, পাহাড় আর আকাশের পাশে তিনটি শব্দের ঘুম কেন?"
          }
        ]
      },
      {
        "h": {
          "en": "Fourth in a Run of Makings",
          "bn": "সৃষ্টির সারিতে চতুর্থ"
        },
        "p": [
          {
            "en": "78:6 asks: have We not made the earth a resting place? The run then goes on without a break: the mountains as stakes, you created in pairs, your sleep made subat, the night as clothing, the day for livelihood, seven strong heavens built above you, a blazing lamp, and water pouring from the rain clouds, through which 78:15 and 78:16 bring up grain, vegetation and dense gardens. Our verse is the fourth item, three words long, set straight after the pairs of 78:8 and straight before the night and the day.",
            "bn": "৭৮:৬ জিজ্ঞেস করে: আমি কি জমিনকে শয্যা বানাইনি? তারপর তালিকা থামে না। পাহাড় হলো কীলক, তোমরা সৃষ্টি হলে জোড়ায় জোড়ায়, তোমাদের ঘুমকে করা হলো সুবাত, রাত হলো আবরণ, দিন হলো জীবিকার সময়। মাথার উপর গড়া হলো সাতটি মজবুত আকাশ, জ্বালানো হলো জ্বলন্ত প্রদীপ, বৃষ্টিভরা মেঘ থেকে নামল অঝোর পানি। সেই পানিতে ৭৮:১৫ ও ৭৮:১৬ ফলায় শস্য, উদ্ভিদ আর ঘন বাগান। আমাদের আয়াতটি এই সারির চতুর্থ, মাত্র তিনটি শব্দের। ঠিক আগে ৭৮:৮-এর জোড়া, ঠিক পরে রাত আর দিন।"
          },
          {
            "en": "Wa ja'alna, and We made, opens 78:9, 78:10, 78:11 and 78:13, and 78:6 uses the same verb inside its question, a-lam naj'al. Al-Qurtubi stops on that verb. Ja'alna here means sayyarna, We turned one thing into another, and that is why it takes two objects. Nawmakum, your sleep, is the first object; subata is the second, the thing sleep was made into. On his reading the sentence does not merely say that sleep exists. It says that sleep was given a particular character by the One who made it.",
            "bn": "ওয়া জাআলনা, আর আমি বানিয়েছি: এ কথা দিয়ে শুরু হয় ৭৮:৯, ৭৮:১০, ৭৮:১১ আর ৭৮:১৩। ৭৮:৬-ও প্রশ্নের ভেতরে একই ক্রিয়া ব্যবহার করে: আলাম নাজআল। কুরতুবী এই ক্রিয়ায় এসে থামেন। তাঁর মতে এখানে জাআলনা মানে সাইয়ারনা, অর্থাৎ এক জিনিসকে আরেক জিনিসে পরিণত করা। এ কারণেই ক্রিয়াটি দুটি কর্ম নেয়। নাওমাকুম, তোমাদের ঘুম, প্রথম কর্ম। সুবাতা দ্বিতীয়, অর্থাৎ ঘুমকে যা বানানো হলো। কাজেই বাক্যটি শুধু ঘুম থাকার খবর দেয় না। বলে, যিনি ঘুম বানিয়েছেন, তিনিই তাকে একটা বিশেষ স্বভাব দিয়েছেন।"
          },
          {
            "en": "Al-Muyassar carries the question of 78:6 into this verse. Its gloss reads: and We made your sleep a rest for your bodies, in which you become calm and still? It ends on a question mark. On that reading 78:9 is not a new statement standing alone but another clause the hearer is asked to concede, held under the same have We not that governs the earth and the mountains. The listener is not told about sleep so much as asked whether he can deny what happens to him every night.",
            "bn": "মুয়াসসার ৭৮:৬-এর প্রশ্নটাকে এই আয়াত পর্যন্ত টেনে আনে। তার ব্যাখ্যা: আর আমি তোমাদের ঘুমকে কি তোমাদের দেহের বিশ্রাম বানাইনি, যাতে তোমরা শান্ত ও স্থির হও? বাক্যটি শেষ হয় প্রশ্নবোধক চিহ্নে। এভাবে পড়লে ৭৮:৯ আলাদা কোনো নতুন ঘোষণা নয়। মাটি আর পাহাড়ের উপর যে 'আমি কি বানাইনি' প্রশ্ন, এ আয়াতও তারই অধীন, শ্রোতাকে আরেকটি কথা মেনে নিতে বলা হচ্ছে। তাকে ঘুম সম্পর্কে খবর দেওয়া হচ্ছে না, বরং জিজ্ঞেস করা হচ্ছে: রোজ রাতে নিজের সঙ্গে যা ঘটে, তা কি সে অস্বীকার করতে পারে?"
          }
        ]
      },
      {
        "h": {
          "en": "Rest Given to the Body",
          "bn": "দেহের জন্য বিশ্রাম"
        },
        "p": [
          {
            "en": "The commonest gloss of subat is rest. At-Tabari writes: We made your sleep for you raha and da'a, rest and ease, in which you settle down and grow still. Al-Muyassar, al-Qurtubi and al-Baghawi all use the same phrase, raha li-abdanikum, a rest for your bodies. The body is named outright. The favour is located in the limbs and muscles that carried the day, not first in the mood, and the verse counts that daily repair among the same evidences as the heavens built overhead.",
            "bn": "সুবাতের সবচেয়ে প্রচলিত অর্থ বিশ্রাম। তাবারী লেখেন: আমি তোমাদের ঘুমকে তোমাদের জন্য বানিয়েছি রাহা ও দাআ, অর্থাৎ বিশ্রাম ও স্বস্তি, যাতে তোমরা থিতু হও, স্থির হও। মুয়াসসার, কুরতুবী আর বাগাভী তিনজনই একই কথা বলেন: রাহাতান লি-আবদানিকুম, তোমাদের দেহের বিশ্রাম। দেহের নাম এখানে স্পষ্ট। অনুগ্রহটা আগে মনের ভেতরে নয়, বরং সারা দিনের ভার বয়ে বেড়ানো হাত-পা আর পেশির ভেতরে। আর প্রতিদিনের এই মেরামতকে আয়াতটি মাথার উপরের আকাশের মতোই প্রমাণের তালিকায় তোলে।"
          },
          {
            "en": "As-Sa'di keeps the rest and adds a second half to it: a rest for you, and a cutting off of your occupations, which, if they went on and on, would harm your bodies. His gloss makes the break itself part of the gift. Work that never stopped would damage the one doing it, and sleep is the stop built in from outside, which does not wait for the worker to decide that he has done enough. The pause is not left to the worker's own judgement of when to stop.",
            "bn": "সা'দীও বিশ্রামের কথা রাখেন, তবে সঙ্গে আরেকটা অংশ জুড়ে দেন: তোমাদের জন্য বিশ্রাম, আর তোমাদের কাজকর্মের ছেদ। কাজগুলো যদি একটানা চলতেই থাকত, তোমাদের দেহের ক্ষতি করত। তাঁর ব্যাখ্যায় থেমে যাওয়াটাই উপহারের অংশ। যে কাজ কখনো থামে না, সে কাজ কর্মীকেই ভেঙে ফেলে। ঘুম সেই বিরতি, যা বাইরে থেকে বসিয়ে দেওয়া। কর্মী কখন ভাববে যে যথেষ্ট হয়েছে, ঘুম তার অপেক্ষায় থাকে না। কখন থামতে হবে, সে বিচার পুরোপুরি কর্মীর হাতে ছেড়ে রাখা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Severed From the Day's Traffic",
          "bn": "দিনের ছোটাছুটি থেকে ছেদ"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the Arabic, makes the second strand his main gloss. Subat is qat'an lil-haraka, a cutting off of movement, so that rest is reached after much going to and fro and striving for a living through the length of the day. On this reading rest is the result and the cutting off is the meaning. Sleep is named for what it stops: the coming and going of the working day. He then notes that a verse like this one has already passed in Surat al-Furqan.",
            "bn": "ইবন কাসীর তাঁর আরবি তাফসীরে দ্বিতীয় অর্থটিকেই প্রধান করেন। সুবাত মানে কাতআন লিল-হারাকা, চলাফেরার ছেদ। সারা দিন জীবিকার খোঁজে বারবার যাওয়া-আসা আর দৌড়ঝাঁপের পর যেন বিশ্রাম মেলে, সে জন্যই এই ছেদ। এভাবে দেখলে বিশ্রাম হলো ফল, আর ছেদটাই শব্দের অর্থ। ঘুমের নাম হয়েছে সে যা থামিয়ে দেয় তা দিয়ে: কর্মদিবসের আসা-যাওয়া। এরপর ইবন কাসীর মনে করিয়ে দেন, এ রকম একটি আয়াত সূরা ফুরকানে আগেই এসেছে।"
          },
          {
            "en": "Al-Baghawi lists the same view as a second opinion: it is said that the meaning is We made your sleep a cutting off of your work, because the root of sabt is cutting. Al-Qurtubi supplies the usage behind it: one says sabata sha'rahu, he shaved his head, cutting the hair right off. Ma'arif al-Qur'an takes the same derivation and turns it inward. Sleep cuts off the worries and tensions a person carries, it says, and so gives a rest nothing else can give, which is why some scholars translate subat simply as rest.",
            "bn": "বাগাভী এই মতটিকে দ্বিতীয় মত হিসেবে আনেন: বলা হয়েছে, এর অর্থ আমি তোমাদের ঘুমকে তোমাদের কাজের ছেদ বানিয়েছি, কারণ সাবত শব্দের মূল অর্থ কাটা। কুরতুবী এর পেছনের ভাষাগত ব্যবহার দেখান। আরবরা বলে সাবাতা শা'রাহু, অর্থাৎ সে মাথা মুড়িয়ে চুল একেবারে কেটে ফেলল। মাআরিফুল কুরআন একই উৎস ধরে কথাটাকে মনের দিকে নিয়ে যায়। তার মতে, মানুষ যে দুশ্চিন্তা আর টানাপোড়েন বয়ে বেড়ায়, ঘুম তা কেটে দেয়। তাই ঘুম এমন বিশ্রাম দেয়, যা আর কিছু দিতে পারে না। এ কারণেই কোনো কোনো আলেম সুবাতের অনুবাদ করেছেন সোজা বিশ্রাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Saturday, and an Objection",
          "bn": "শনিবার, আর একটি আপত্তি"
        },
        "p": [
          {
            "en": "At-Tabari ties the word to the week. Sabt and subat, he says, both mean sukun, stillness, and that is why Saturday is called as-Sabt: it is a day of rest and ease. Al-Qurtubi reports the same link and gives it a setting. Yawm as-sabt is the day of rest, he writes, meaning that the Children of Israel were told: rest on this day, and do no work in it. On this reading the noun for the night's sleep and the name of a weekday share one idea.",
            "bn": "তাবারী শব্দটিকে সপ্তাহের একটি দিনের সঙ্গে জুড়ে দেন। তাঁর মতে সাবত আর সুবাত দুটোরই অর্থ সুকূন, স্থিরতা। এ কারণেই শনিবারের নাম আস-সাবত, কেননা সেটি বিশ্রাম ও স্বস্তির দিন। কুরতুবীও একই সম্পর্কের কথা বলেন এবং তার পটভূমি জানান। তিনি লেখেন, ইয়াওমুস সাবত মানে বিশ্রামের দিন, অর্থাৎ বনী ইসরাঈলকে বলা হয়েছিল: এই দিনে বিশ্রাম নাও, এতে কোনো কাজ কোরো না। এভাবে পড়লে রাতের ঘুমের নাম আর সপ্তাহের একটি দিনের নাম একই ভাবনা থেকে এসেছে।"
          },
          {
            "en": "Al-Qurtubi does not leave the derivation unchallenged. Directly after it he records that Ibn al-Anbari rejected it and said that rest is not called subat. The two positions stand side by side in his text, and this article leaves them there without choosing. At-Tabari gives the Saturday link with no qualification; al-Qurtubi gives it together with the objection to it. A reader who meets the claim that subat simply means rest should know that al-Qurtubi records Ibn al-Anbari disputing exactly that point.",
            "bn": "কুরতুবী এই ব্যুৎপত্তিকে বিনা প্রশ্নে ছেড়ে দেন না। ঠিক পরেই তিনি উল্লেখ করেন, ইবনুল আনবারী এটি মানেননি। তিনি বলেছেন, বিশ্রামকে সুবাত বলা হয় না। দুটি মতই কুরতুবীর লেখায় পাশাপাশি আছে, আর এ লেখাও কোনোটিকে বেছে না নিয়ে সেভাবেই রেখে দিচ্ছে। তাবারী শনিবারের সম্পর্কটি কোনো শর্ত ছাড়াই বলেন। কুরতুবী সেটি বলেন, সঙ্গে আপত্তিটাও জানান। কেউ যদি শোনেন সুবাত মানে সোজা বিশ্রাম, তাঁর জানা থাকা ভালো যে কুরতুবী ঠিক এই কথাটির বিরুদ্ধেই ইবনুল আনবারীর আপত্তি লিখে রেখেছেন।"
          },
          {
            "en": "Al-Qurtubi then adds two further roots. One is stretching out: sabatat al-mar'a sha'raha is said of a woman who undoes her hair and lets it hang loose, and a man of drawn-out build is masbut al-khalq. Since a person who wants to rest stretches out, rest came to be called sabt. The other is ease: sayr sabt is a smooth and gentle pace. He quotes a poet on a lean-flanked she-camel whose daytime going is sabt, set against dhamil, the word for her travel by night.",
            "bn": "এরপর কুরতুবী আরও দুটি মূল অর্থ যোগ করেন। একটি হলো টানটান হয়ে ছড়িয়ে পড়া। কোনো নারী চুলের বাঁধন খুলে ছেড়ে দিলে আরবরা বলে, সাবাতাতিল মারআতু শা'রাহা। লম্বা গড়নের পুরুষকে বলে মাসবূতুল খালক। বিশ্রাম নিতে চাইলে মানুষ হাত-পা ছড়িয়ে দেয়, তাই বিশ্রামের নাম হয়েছে সাবত। অন্যটি হলো সহজতা: সাইরুন সাবত মানে মসৃণ, ধীর চলা। এখানে তিনি এক কবির পঙ্‌ক্তি আনেন। কবি এক সরু কোমরের উটনীর কথা বলেন, দিনের বেলায় যার চলা সাবত, আর রাতের চলার জন্য শব্দটি যামীল।"
          }
        ]
      },
      {
        "h": {
          "en": "Like Death, Yet Not Death",
          "bn": "মৃত্যুর মতো, তবু মৃত্যু নয়"
        },
        "p": [
          {
            "en": "Three of the commentators carry the cutting-off reading toward a comparison. At-Tabari says that in sleep you become still as though you were dead, perceiving nothing, while you are alive and your souls have not left you. Al-Qurtubi, under the root of cutting, writes that a sleeper is cut off from people and from his concerns, so subat resembles death, except that the soul has not parted from him. Al-Baghawi cites az-Zajjaj: subat is to be cut off from movement while the soul is still in the body.",
            "bn": "তিনজন তাফসীরকার ছেদের অর্থটিকে একটি তুলনার দিকে নিয়ে যান। তাবারী বলেন, ঘুমে তোমরা এমন স্থির হয়ে যাও, যেন মৃত, কিছুই টের পাও না। অথচ তোমরা জীবিত, রূহ তোমাদের ছেড়ে যায়নি। কুরতুবী কাটার অর্থের আলোচনায় লেখেন, ঘুমন্ত মানুষ লোকজন আর কাজকর্ম থেকে বিচ্ছিন্ন হয়ে যায়। তাই সুবাত মৃত্যুর মতো, শুধু রূহ তার থেকে আলাদা হয়নি। বাগাভী যাজ্জাজের কথা আনেন: সুবাত হলো চলাফেরা থেকে বিচ্ছিন্ন হওয়া, অথচ রূহ তখনও দেহের ভেতরেই থাকে।"
          },
          {
            "en": "Each statement carries its own limit. None says that sleep is death. Each says it looks like death and then names the difference at once: the soul stays. The likeness lies in the stillness and the loss of awareness, not in any parting. 25:47 sets the same word beside the night as clothing and the day as nushur, a rising, and its own article takes up waking. None of the fetched commentaries on 78:9 attaches a hadith to this verse, so no narration is quoted here.",
            "bn": "প্রতিটি কথার ভেতরেই তার সীমা বাঁধা আছে। কেউ বলেননি ঘুম মানেই মৃত্যু। সবাই বলেছেন, ঘুম দেখতে মৃত্যুর মতো, আর সঙ্গে সঙ্গে পার্থক্যটাও বলে দিয়েছেন: রূহ থেকে যায়। মিল শুধু স্থিরতায় আর চেতনা হারানোয়, বিচ্ছেদে নয়। ২৫:৪৭ একই শব্দকে রাখে রাতের আবরণ আর দিনের নুশূর, অর্থাৎ জেগে ওঠার পাশে। জেগে ওঠার আলোচনা সেই আয়াতের নিজস্ব লেখায় আছে। ৭৮:৯-এর যে তাফসীরগুলো সংগ্রহ করা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো বর্ণনা উদ্ধৃত হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gift Nobody Buys",
          "bn": "যে উপহার কেউ কেনে না"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an calls sleep a great divine gift and dwells on its reach. It is a source of relaxation for the whole of creation: for rich and poor, learned and unlettered, kings and labourers, given equally and at the same time. Experience shows, it says, that the gift comes most readily to the poor and the labouring, compared with the affluent, who have comfortable homes, mattresses and pillows. Sleep does not depend on any of these. It is given directly by Allah.",
            "bn": "মাআরিফুল কুরআন ঘুমকে আল্লাহর এক মহা দান বলে, আর এর বিস্তার নিয়ে লম্বা কথা বলে। ঘুম গোটা সৃষ্টির আরামের উৎস। ধনী-গরিব, শিক্ষিত-অশিক্ষিত, রাজা-মজুর, সবাই তা পায় সমানভাবে, একই সময়ে। অভিজ্ঞতা বলে, এই দান গরিব আর খেটে খাওয়া মানুষের কাছে সবচেয়ে সহজে আসে। অথচ সচ্ছলদের আছে আরামের ঘর, গদি আর বালিশ। ঘুম এসবের কোনোটির উপর নির্ভর করে না। এ সরাসরি আল্লাহর দেওয়া।"
          },
          {
            "en": "The same commentary notes that people of means sometimes suffer from sleeplessness and reach for pills, which may fail as well, while the poor, with no bed or bedding, often sleep best in the open. Sleep is given to humans and animals alike, free of charge, without work to earn it. And it is imposed. Even someone who wants to stay awake under a load of work is overtaken by sleep, through Allah's mercy, so that his tiredness lifts and he is refreshed to work again.",
            "bn": "একই তাফসীর বলে, সচ্ছল লোকেরা অনেক সময় অনিদ্রায় ভোগে, ঘুমের বড়ি খায়, তাতেও প্রায়ই কাজ হয় না। আর গরিব মানুষ বিছানা-বালিশ ছাড়াই খোলা জায়গায় দিব্যি ঘুমায়। মানুষ ও প্রাণী সবাই এ দান পায় বিনা মূল্যে, কোনো খাটুনি ছাড়াই। তা ছাড়া ঘুম চাপিয়েও দেওয়া হয়। কাজের চাপে কেউ জেগে থাকতে চাইলেও আল্লাহর রহমতে ঘুম তাকে ধরে ফেলে। এতে তার ক্লান্তি দূর হয়, আর সে আবার কাজের জন্য তাজা হয়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Lying Down Inside the Argument",
          "bn": "যুক্তির ভেতরেই শুয়ে পড়া"
        },
        "p": [
          {
            "en": "Read in Ibn Kathir's frame, the list ends where 78:17 says it ends: indeed the Day of Decision is an appointed time. The surah does not draw an explicit line from sleep to resurrection, and this article does not supply it. What it does is set the nightly stopping and restarting of every person among the proofs that its Maker can do what He wills. Ibn Kathir calls the askers of 78:1 deniers of the Day; that describes them, and licenses nothing against any living person or community.",
            "bn": "ইবন কাসীরের কাঠামোয় পড়লে তালিকাটি সেখানেই শেষ হয়, যেখানে ৭৮:১৭ শেষ করে: নিশ্চয় ফয়সালার দিন নির্ধারিত সময়। ঘুম থেকে পুনরুত্থান পর্যন্ত সূরাটি কোনো সরাসরি রেখা টানেনি, এ লেখাও নিজে থেকে টানবে না। সূরাটি যা করে তা হলো, প্রতিটি মানুষের রোজ রাতে থেমে যাওয়া আর আবার চালু হওয়াকে সে প্রমাণের সারিতে রাখে, যে প্রমাণ বলে তার স্রষ্টা যা চান তা-ই করতে পারেন। ইবন কাসীর ৭৮:১-এর প্রশ্নকারীদের কিয়ামত অস্বীকারকারী বলেছেন। এ কেবল তাদের বর্ণনা। আজকের কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "After the sleep, the night and the day, the list lifts its eyes to the seven strong heavens and the blazing lamp, and then brings down the water of 78:14, which the shipped reading of that verse hears as rain held and released by Allah. From there the surah turns to the appointed Day and the blowing of the Horn in 78:18. Sleep sits in the middle of that run, the one item the hearer cannot watch from outside, because it happens to him while he is absent from it.",
            "bn": "ঘুম, রাত আর দিনের পর তালিকা চোখ তোলে সাতটি মজবুত আকাশ আর জ্বলন্ত প্রদীপের দিকে, তারপর নামিয়ে আনে ৭৮:১৪-এর পানি। সেই আয়াতের প্রকাশিত আলোচনা একে দেখে আল্লাহর হাতে আটকে রাখা আর ছেড়ে দেওয়া বৃষ্টি হিসেবে। সেখান থেকে সূরা চলে যায় নির্ধারিত দিনের দিকে, আর ৭৮:১৮-এ শিঙায় ফুঁ দেওয়ার কথায়। এই সারির মাঝখানে বসে আছে ঘুম। তালিকার এই একটি জিনিস শ্রোতা বাইরে দাঁড়িয়ে দেখতে পারে না, কারণ যখন তা ঘটে, তখন সে নিজেই সেখানে থাকে না।"
          },
          {
            "en": "The glosses give three handles for tonight. Rest for the body: the limbs that carried the day are owed their repair. A cutting off: the work, the worry and the screen are meant to stop, and the stop is a favour, not a defeat. A stillness that looks like death while the soul stays: you will lie down without knowing what happens next, and rise because you were returned. Put the day down deliberately, thank Him who made sleep what it is, and count the waking as received.",
            "bn": "তাফসীরের ব্যাখ্যাগুলো আজ রাতের জন্য তিনটি অবলম্বন দেয়। দেহের বিশ্রাম: সারা দিনের ভার বয়ে বেড়ানো হাত-পায়ের মেরামত তাদের প্রাপ্য। ছেদ: কাজ, দুশ্চিন্তা আর পর্দার দিকে তাকিয়ে থাকা, সবই থামার কথা। আর এই থেমে যাওয়া পরাজয় নয়, অনুগ্রহ। মৃত্যুর মতো স্থিরতা, অথচ রূহ রয়ে যায়: আপনি শুয়ে পড়বেন, পরে কী হবে না জেনেই। আর জাগবেন, কারণ আপনাকে ফিরিয়ে দেওয়া হয়েছে। দিনটাকে সচেতনভাবে নামিয়ে রাখুন। যিনি ঘুমকে এমন বানিয়েছেন, তাঁর শুকরিয়া আদায় করুন। আর জেগে ওঠাকে গণ্য করুন পাওয়া জিনিস হিসেবে।"
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
            "bn": "ওয়া আনযালনা মিনাল মু'সিরাতি মাআন সাজ্জাজা: আর আমি মু'সিরাত থেকে নামিয়েছি অবিরাম ঝরা পানি। আয়াতটি আরবিতে পাঁচ শব্দের। ওয়া আনযালনা মানে আর আমি নামিয়েছি। মিন মানে থেকে। আল-মু'সিরাত স্ত্রীলিঙ্গ বহুবচন, এর অর্থ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। মাআন মানে পানি। আর সাজ্জাজান বলে সেই পানি কীভাবে ঝরে। ৭৮:৬ আয়াতে যে ধারা শুরু হয়েছিল, আমি কি জমিনকে বিছানা বানাইনি, এ আয়াত তারই অংশ। ঠিক আগের আয়াত ৭৮:১৩-এ আল্লাহ বলেছেন, তিনি বানিয়েছেন জ্বলন্ত প্রদীপ।"
          },
          {
            "en": "Until here the list has named things that stay where they are put: the ground, the mountains, the pairs, sleep, night, day, seven firm heavens and a lamp. With 78:14 something moves from above to below. The verb is anzalna, We sent down, and the speaker is the same We who made and built through the earlier verses. 78:15 and 78:16, the next verses, say what the water is for. That is their ground, and this article stays with the water itself, the source it comes from and the way it falls.",
            "bn": "এ পর্যন্ত তালিকায় যা এসেছে, সবই নিজের জায়গায় স্থির: জমিন, পাহাড়, জোড়া, ঘুম, রাত, দিন, সাতটি মজবুত আকাশ আর একটি প্রদীপ। ৭৮:১৪-তে এসে প্রথম কিছু একটা উপর থেকে নিচে নামে। ক্রিয়াটি আনযালনা, আমি নামিয়েছি। বক্তা সেই একই 'আমি', যিনি আগের আয়াতগুলোতে বানিয়েছেন আর গড়েছেন। এ পানি কীসের জন্য, তা বলবে পরের দুই আয়াত, ৭৮:১৫ ও ৭৮:১৬। সেটা ওদের আলোচনার জায়গা। এ লেখা থাকবে পানির কাছেই: পানি কোথা থেকে আসে, আর কীভাবে ঝরে।"
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
            "en": "The commentators consulted here record three answers to what al-mu'sirat are. The first is the winds. At-Tabari describes them as winds that squeeze as they blow, and gives the view from Ibn Abbas, Mujahid, Qatada and Ibn Zayd. Ibn Kathir has it from Ibn Abbas through al-'Awfi and through Sa'id ibn Jubayr, and names 'Ikrima, Mujahid, Qatada, Muqatil, al-Kalbi, Zayd ibn Aslam and his son 'Abd ar-Rahman with them. The sense, he explains, is that the winds draw the rain out of the cloud. Al-Qurtubi reports Ibn Abbas saying it is as though they squeeze the cloud.",
            "bn": "এখানে যে তাফসীরগুলো দেখা হয়েছে, তাতে আল-মু'সিরাত নিয়ে তিনটি জবাব পাওয়া যায়। প্রথম জবাব: বাতাস। তাবারী এদের বলেন সেই বাতাস, যা বইতে বইতে নিংড়ায়। মতটি তিনি আনেন ইবন আব্বাস, মুজাহিদ, কাতাদা ও ইবন যায়দ থেকে। ইবন কাসীর এটি আনেন ইবন আব্বাস থেকে দুই সূত্রে, আওফীর মাধ্যমে আর সাঈদ ইবন জুবাইরের মাধ্যমে। সঙ্গে নাম দেন ইকরিমা, মুজাহিদ, কাতাদা, মুকাতিল, কালবী, যায়দ ইবন আসলাম ও তাঁর ছেলে আবদুর রহমানের। তাঁর ব্যাখ্যায় অর্থটা হলো, বাতাস মেঘ থেকে বৃষ্টি টেনে বের করে। কুরতুবী ইবন আব্বাসের কথা আনেন এভাবে: যেন বাতাস মেঘকে নিংড়ে দেয়।"
          },
          {
            "en": "The second answer is the clouds. Ibn Kathir has it from Ibn Abbas through 'Ali ibn Abi Talha, from 'Ikrima as well, and from Abu al-'Aliya, ad-Dahhak, al-Hasan, ar-Rabi' ibn Anas and ath-Thawri. At-Tabari gives it from Sufyan, from Ibn Abbas by the same 'Ali line and from ar-Rabi'. Al-Baghawi calls the Ibn Abbas version the report of al-Walibi. So Ibn Abbas stands on both sides, by different lines of transmission. As-Sa'di glosses the word plainly as the clouds, al-Muyassar as the raining clouds, and Ma'arif al-Qur'an as rain-laden clouds.",
            "bn": "দ্বিতীয় জবাব: মেঘ। ইবন কাসীর এটি আনেন ইবন আব্বাস থেকে আলী ইবন আবী তালহার সূত্রে। ইকরিমা থেকেও আনেন, আরও আনেন আবুল আলিয়া, দাহহাক, হাসান, রাবী ইবন আনাস ও সাওরী থেকে। তাবারী মতটি আনেন সুফিয়ান থেকে, ইবন আব্বাস থেকে সেই আলীর সূত্রেই, আর রাবী থেকে। বাগাভী ইবন আব্বাসের এই বর্ণনাকে বলেন ওয়ালিবীর বর্ণনা। তাহলে দুই পক্ষেই ইবন আব্বাসের নাম আছে, ভিন্ন ভিন্ন বর্ণনাসূত্রে। সা'দী শব্দটির ব্যাখ্যা দেন এক কথায়: মেঘ। মুয়াসসার বলে বৃষ্টি ঝরানো মেঘ, আর মাআরিফুল কুরআন বলে বৃষ্টিভরা মেঘ।"
          },
          {
            "en": "The third answer is the heavens. At-Tabari reports al-Hasan saying from the sky, and Qatada by two routes, once from the heavens and once from the sky. Al-Qurtubi gives from the heavens on the authority of Ubayy ibn Ka'b, al-Hasan, Sa'id ibn Jubayr, Zayd ibn Aslam and Muqatil ibn Hayyan, and al-Baghawi lists the same names without Ubayy. The lists do not match from book to book: Ibn Kathir places a report through Sa'id ibn Jubayr, and Zayd ibn Aslam, among the winds. Al-Baghawi also keeps a fourth line, from Ibn Kaysan: al-mu'sirat are the rain-givers.",
            "bn": "তৃতীয় জবাব: আকাশ। তাবারী হাসানের কথা আনেন, আকাশ থেকে। কাতাদার কথা আনেন দুই সূত্রে, একবার আকাশমণ্ডলী থেকে, আরেকবার আকাশ থেকে। কুরতুবী 'আকাশমণ্ডলী থেকে' অর্থটি আনেন উবাই ইবন কা'ব, হাসান, সাঈদ ইবন জুবাইর, যায়দ ইবন আসলাম ও মুকাতিল ইবন হাইয়ানের নামে। বাগাভী উবাইকে বাদ দিয়ে একই নামগুলো দেন। তবে এক বই থেকে আরেক বইয়ে তালিকা মেলে না। ইবন কাসীর সাঈদ ইবন জুবাইরের সূত্রে আসা একটি বর্ণনা আর যায়দ ইবন আসলামকে রেখেছেন বাতাসের পক্ষে। বাগাভী এর বাইরে চতুর্থ একটি মতও রেখেছেন, ইবন কায়সান থেকে: মু'সিরাত মানে বৃষ্টিদাতা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Cloud Near Its Time",
          "bn": "সময় ঘনিয়ে আসা মেঘ"
        },
        "p": [
          {
            "en": "Behind the clouds reading sits an image from ordinary speech. At-Tabari gives it without a name, while Ibn Kathir and al-Baghawi credit al-Farra': the mu'sirat are clouds filling with rain that have not yet released it, as a girl is called mu'sir when her first menses is near and has not yet come. Al-Qurtubi carries the same gloss from Sufyan, ar-Rabi', Abu al-'Aliya and ad-Dahhak, and quotes lines of old Arabic verse in which mu'sir describes such a girl. On this reading the cloud is full, ripe and on the verge.",
            "bn": "মেঘের পক্ষের ব্যাখ্যার পেছনে আছে আরবদের রোজকার কথার একটি ছবি। তাবারী ছবিটা আনেন কারও নাম ছাড়া। ইবন কাসীর আর বাগাভী এটি ফাররার নামে আনেন। মু'সিরাত সেই মেঘ, যা বৃষ্টিতে ভরে উঠছে কিন্তু এখনো ঝরায়নি। কিশোরী মেয়ের প্রথম ঋতু যখন কাছে এসেছে অথচ এখনো আসেনি, আরবরা তাকে বলত মু'সির। কুরতুবী একই ব্যাখ্যা আনেন সুফিয়ান, রাবী, আবুল আলিয়া ও দাহহাক থেকে। পুরোনো আরবি কবিতার কয়েকটি চরণও উদ্ধৃত করেন, যেখানে এমন মেয়েকেই মু'সির বলা হয়েছে। এ পাঠে মেঘটি ভরপুর, পরিণত, ঝরার একেবারে মুখে।"
          },
          {
            "en": "Al-Qurtubi gathers more from the language. A cloud is called mu'sir when its time to rain has come, as is said of crops that have reached their stage. Al-Mubarrad says a mu'sir cloud holds its water, so that it is pressed out of it a little at a time, and al-Qurtubi links the root to 'asar, a refuge to run to. The winds too are called mu'sirat, he notes, from a'sarat ar-rih, said when wind raises a whirl of dust. Al-Baghawi reports al-Azhari calling them winds of whirlwinds.",
            "bn": "কুরতুবী ভাষা থেকে আরও কিছু কথা জড়ো করেন। বৃষ্টি নামানোর সময় হয়ে এলে মেঘকে বলা হয় মু'সির, যেমন ফসল তার নির্দিষ্ট পর্যায়ে পৌঁছালে তা নিয়ে এমন কথা বলা হয়। মুবাররাদ বলেন, মু'সির মেঘ পানি ধরে রাখে, আর তা থেকে একটু একটু করে পানি নিংড়ে বের হয়। কুরতুবী শব্দমূলটিকে মিলিয়ে দেন আসার শব্দের সঙ্গে, যার অর্থ আশ্রয়, যার দিকে মানুষ ছুটে যায়। তিনি আরও বলেন, বাতাসকেও মু'সিরাত বলা হয়। বাতাস যখন ধুলোর ঘূর্ণি তোলে, আরবরা বলে আ'সারাতির রীহ। বাগাভী আযহারীর কথা আনেন: এরা ঘূর্ণিঝড়ওয়ালা বাতাস।"
          }
        ]
      },
      {
        "h": {
          "en": "From, Not With",
          "bn": "দিয়ে নয়, থেকে"
        },
        "p": [
          {
            "en": "At-Tabari weighs the three and prefers the clouds that have filled with water. His reason is the preposition. The winds hold no water to be sent down from them; water is sent down by them. Had the reading been bi-l-mu'sirat, by means of the mu'sirat, the winds would fit. He records that 'Ikrima read it that way, and that Qatada said it appears so in some readings. Since the reading is mina al-mu'sirat, from them, he takes the clouds. He grants that the sky could be meant, but says rain mostly comes from cloud.",
            "bn": "তাবারী তিনটি মত মেপে দেখেন, আর পানিতে ভরে ওঠা মেঘকেই বেছে নেন। তাঁর যুক্তি অব্যয়টি নিয়ে। বাতাসের ভেতরে পানি নেই যে তা থেকে পানি নামবে। পানি নামে বাতাসের সাহায্যে। আয়াতে যদি থাকত বিল-মু'সিরাত, মু'সিরাত দিয়ে, তবে বাতাস অর্থটা খাটত। তিনি জানান, ইকরিমা এভাবেই পড়তেন, আর কাতাদা বলেছেন কোনো কোনো কিরাআতে এমন আছে। কিন্তু পাঠটি মিনাল মু'সিরাত, মু'সিরাত থেকে। তাই তিনি মেঘ ধরেন। আকাশ অর্থ হওয়াও সম্ভব, তিনি মানেন। তবে তাঁর কথা, বৃষ্টি সাধারণত মেঘ থেকেই নামে।"
          },
          {
            "en": "He anticipates a reply, that min can stand in for bi, and answers that even granting it, the commoner meaning of min is otherwise, and interpretation goes by the commoner meaning. Al-Baghawi reports that very move from the winds' side: on that reading, he says, min carries the sense of bi, since the wind draws the rain out. Al-Qurtubi gives the bi- reading to Ibn Abbas and 'Ikrima, notes that the copies of the mushaf have min, and says that had it been bi-, the wind would have been the better fit.",
            "bn": "তাবারী একটি আপত্তি আগেই ধরে ফেলেন: মিন তো বি-র জায়গায়ও বসতে পারে। তাঁর জবাব, তা মেনে নিলেও মিন শব্দের বেশি প্রচলিত অর্থ ভিন্ন, আর ব্যাখ্যা চলে বেশি প্রচলিত অর্থ ধরে। বাতাসের পক্ষ থেকে ঠিক এই কথাটাই বাগাভী তুলে ধরেন। ওই ব্যাখ্যায়, তিনি বলেন, মিন এসেছে বি-র অর্থে, কারণ বাতাসই বৃষ্টি টেনে আনে। কুরতুবী বি-যুক্ত পাঠটি ইবন আব্বাস ও ইকরিমার বলে উল্লেখ করেন। তিনি জানান, মুসহাফের কপিগুলোতে আছে মিন। আর বলেন, পাঠ বি দিয়ে হলে বাতাস অর্থটাই বেশি মানাত।"
          },
          {
            "en": "Their own verdicts differ in strength. At-Tabari calls the clouds the most correct, al-Qurtubi the soundest of the sayings, and Ibn Kathir the most apparent, while calling the heavens reading strange. Yet al-Qurtubi also quotes an-Nahhas saying that all these sayings are sound: winds that bring rain are called mu'sirat, the winds fertilise the cloud and the rain follows. The passage adds that the sayings may even be one. So the books record a preference and a reconciliation side by side, and this article leaves the three readings standing as they do.",
            "bn": "মেঘের পক্ষে তাঁদের রায়ের জোরও এক রকম নয়। তাবারীর কাছে মেঘ অর্থটাই সবচেয়ে সঠিক। কুরতুবীর কাছে মতগুলোর মধ্যে সবচেয়ে বিশুদ্ধ। ইবন কাসীরের কাছে সবচেয়ে স্পষ্ট, আর আকাশ অর্থটিকে তিনি বলেন অদ্ভুত মত। তবু কুরতুবী নাহহাসের কথাও উদ্ধৃত করেন: এ সব মতই সঠিক। বৃষ্টি আনা বাতাসকে মু'সিরাত বলা হয়, বাতাস মেঘকে উর্বর করে, তারপর বৃষ্টি হয়। সেখানে আরও বলা হয়েছে, মতগুলো আসলে একই হতে পারে। বইগুলোতে তাই একটা পছন্দ আর একটা সমন্বয় পাশাপাশি আছে। এ লেখাও তিনটি মতকে সেভাবেই রেখে দেয়।"
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
            "bn": "তারপর মাআন সাজ্জাজা, দুটি শব্দ: পানি, আর তা ঝরার ধরন। তাবারীর ব্যাখ্যায় সাজ্জাজ মানে ঢেলে দেওয়া পানি, যার এক অংশের পেছনে আরেক অংশ আসে। কুরবানির উট জবাই করলে যেভাবে রক্ত ঝরে, তেমন। ঢেলে দেওয়া, মুনসাব্ব, এ অর্থ তিনি আনেন ইবন আব্বাস থেকে দুই সূত্রে, আর মুজাহিদ, কাতাদা ও রাবী থেকে। আর লাগাতার, মুতাতাবি, অর্থটি আনেন সুফিয়ান থেকে। ইবন কাসীরও মুজাহিদ, কাতাদা ও রাবী থেকে একই কথা আনেন, আর সাওরী থেকে আনেন লাগাতার অর্থ। বাগাভী যোগ করেন মুজাহিদের মিদরার, অঝোর, আর কাতাদার কথা: এক অংশের পেছনে আরেক অংশ।"
          },
          {
            "en": "Ibn Zayd glossed it as abundant, and here at-Tabari objects. The Arabs, he says, do not use thajj to describe quantity; thajj is pouring in succession. Al-Qurtubi, after reporting Ibn Zayd, says the meaning is one. As-Sa'di reads it as very abundant, and al-Muyassar joins both senses: poured out in abundance. Al-Qurtubi also cites az-Zajjaj, for whom the word means pouring, as though the water pours itself, and he notes that the verb thajja is used both with an object and without one, of blood and of water alike.",
            "bn": "ইবন যায়দ এর অর্থ করেছেন প্রচুর। এখানে তাবারী আপত্তি তোলেন। তাঁর কথা, আরবরা পরিমাণের বেশি বোঝাতে সাজ্জ শব্দ ব্যবহার করে না। সাজ্জ মানে লাগাতার ঢালা। কুরতুবী ইবন যায়দের কথা উল্লেখ করে বলেন, অর্থ আসলে একই। সা'দী এর অর্থ করেন অনেক বেশি। মুয়াসসার দুটো অর্থ একসঙ্গে জুড়ে দেয়: প্রচুর পরিমাণে ঢেলে দেওয়া। কুরতুবী যাজ্জাজের কথাও আনেন। তাঁর মতে শব্দটির অর্থ ঢালা, যেন পানি নিজেই নিজেকে ঢেলে দেয়। কুরতুবী আরও জানান, সাজ্জা ক্রিয়াটি কর্মসহ আর কর্ম ছাড়া, দুইভাবেই চলে। রক্তের বেলায়ও, পানির বেলায়ও।"
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
            "en": "None of the commentators consulted attaches a hadith to this verse itself. One narration appears in their pages as a witness to how thajj was used, not as an explanation of the verse. At-Tabari, and Ibn Kathir after him, cite the saying that the best hajj is al-'ajj and ath-thajj, taking thajj as the pouring of sacrificial blood. At-Tirmidhi records it (827) from Abu Bakr as-Siddiq: the Messenger of Allah ﷺ was asked, which hajj is the most virtuous? He said: that with raised voices, al-'ajj, and the flow of blood of the sacrifice, ath-thajj. The page consulted shows no grading from at-Tirmidhi, so none is given here.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে সরাসরি কোনো হাদিস জোড়েনি। তাঁদের পাতায় একটি বর্ণনা এসেছে শুধু এটা দেখাতে যে সাজ্জ শব্দটি কীভাবে ব্যবহৃত হতো। আয়াতের ব্যাখ্যা হিসেবে আসেনি। তাবারী, আর তাঁর সূত্রে ইবন কাসীর, সেই বাণী উল্লেখ করেন, যাতে বলা হয়েছে শ্রেষ্ঠ হজ আল-আজ্জ ও আস-সাজ্জ। তাঁদের ব্যাখ্যায় সাজ্জ মানে কুরবানির রক্ত ঝরানো। তিরমিযী বর্ণনাটি এনেছেন (৮২৭) আবু বকর সিদ্দীক (রাঃ) থেকে: আল্লাহর রাসূল ﷺ-কে জিজ্ঞেস করা হলো, কোন হজ সবচেয়ে উত্তম? তিনি বললেন: যাতে আছে উচ্চস্বর, আল-আজ্জ, আর কুরবানির রক্তপ্রবাহ, আস-সাজ্জ। যে পাতাটি দেখা হয়েছে, তাতে তিরমিযীর কোনো মান-নির্ণয় নেই। তাই এখানেও কোনো মান উল্লেখ করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verse, Both Sides",
          "bn": "এক আয়াত, দুই পক্ষ"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an notices a question the verse raises. Here rain comes down from clouds, yet other verses speak of water sent down from the sky. Its answer is that those verses probably mean the upper atmosphere, since the Qur'an often uses sama' in that sense. At-Tabari, from the other direction, grants that the sky could be meant here but holds that rain mostly falls from cloud, so the common case decides the word. Each in its own way keeps the cloud in view without denying that the water comes from above.",
            "bn": "মাআরিফুল কুরআন এ আয়াত থেকে ওঠা একটি প্রশ্ন খেয়াল করে। এখানে বৃষ্টি নামছে মেঘ থেকে, অথচ অন্য অনেক আয়াতে বলা হয়েছে আকাশ থেকে পানি নামানোর কথা। তার জবাব, ওই আয়াতগুলোতে সম্ভবত উপরের বায়ুমণ্ডল বোঝানো হয়েছে, কারণ কুরআনে সামা শব্দটি প্রায়ই এই অর্থে আসে। তাবারী উল্টো দিক থেকে আসেন। এখানে আকাশ অর্থ হতে পারে, তিনি মানেন। কিন্তু বৃষ্টি বেশির ভাগ সময় মেঘ থেকেই নামে, তাই সাধারণ ঘটনাই শব্দের অর্থ ঠিক করে দেয়। দুজনেই নিজের মতো করে মেঘকে সামনে রাখেন, আর পানি যে উপর থেকে আসে, সেটাও অস্বীকার করেন না।"
          },
          {
            "en": "Two other verses come up in these pages. Ibn Zayd recited 30:48 for the winds reading, and Ibn Kathir cites the same verse for the clouds: Allah sends the winds, they stir up cloud, He spreads it in the sky as He wills and breaks it into pieces, and you see the rain come out from within it. One verse serves both sides because it holds wind, cloud and sky in a single sentence. Ibn Kaysan's link, reported by al-Baghawi, is 12:49, the year in which people are given rain and in which they press.",
            "bn": "এসব পাতায় আরও দুটি আয়াতের কথা আসে। ইবন যায়দ বাতাসের পক্ষে পড়েছিলেন ৩০:৪৮। ইবন কাসীর একই আয়াত আনেন মেঘের পক্ষে। আয়াতটি বলে, আল্লাহ বাতাস পাঠান, বাতাস মেঘ তোলে। তিনি যেমন চান, আকাশে তা ছড়িয়ে দেন, টুকরো টুকরো করেন। তারপর আপনি দেখেন, তার ফাঁক দিয়ে বৃষ্টি বেরিয়ে আসছে। একই আয়াত দুই পক্ষের কাজে লাগে, কারণ এক বাক্যেই তাতে আছে বাতাস, মেঘ আর আকাশ। বাগাভী ইবন কায়সানের যে মত আনেন, তার ভিত্তি ১২:৪৯: সেই বছর, যখন মানুষকে বৃষ্টি দেওয়া হবে আর তারা রস নিংড়াবে।"
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
            "bn": "মু'সিরাত যা-ই হোক, ক্রিয়াটি বদলায় না। পানি নামে, আর আল্লাহ বলেন, তিনিই তা নামান। এ থেকে মুমিনের হাতে আসে একটা সহজ অভ্যাস। বৃষ্টি শুরু হলে মনে মনে বলার কথাটা আয়াতই দিয়ে দেয়: এটা নামানো হয়েছে। যে ৭৮:১৪ কয়েকবার পড়েছে, ছাদের উপর বৃষ্টির শব্দ সে অন্যভাবে শুনতে শুরু করে। তখন তা আর শুধু আবহাওয়া নয়, যা তার উপর এসে পড়ছে। তা আল্লাহর আটকে রাখা আর ছেড়ে দেওয়া পানি। সময়টা সে বেছে নেয়নি, পরিমাণটাও সে ঠিক করেনি।"
          },
          {
            "en": "The cloud that has reached its time, in al-Qurtubi's pages, and al-Mubarrad's cloud that gives up its water a little at a time both describe something held and then let go by measure. Much of what reaches a person comes in the same way: provision, ease, the answer to a dua. It was kept somewhere out of sight and arrived when it arrived. The verse sets that pattern in the sky where it can be watched, and the pouring that keeps coming, part after part, shows a giving that does not stop at the first time.",
            "bn": "কুরতুবীর পাতায় সময় ঘনিয়ে আসা মেঘ, আর মুবাররাদের সেই মেঘ, যা একটু একটু করে পানি ছাড়ে, দুটোই এমন কিছুর ছবি যা আটকানো ছিল, তারপর মেপে ছাড়া হয়েছে। মানুষের কাছে যা পৌঁছায়, তার অনেক কিছুই আসে এভাবে: রিজিক, স্বস্তি, দোয়ার জবাব। সবই চোখের আড়ালে কোথাও রাখা ছিল, তারপর যখন আসার তখন এসেছে। আয়াতটি এই ধরনটাকে আকাশে তুলে ধরে, যেখানে চোখ মেলে দেখা যায়। আর এক অংশের পেছনে আরেক অংশ হয়ে যে বর্ষণ চলতেই থাকে, তা জানিয়ে দেয়, এই দান একবার দিয়েই থেমে যায় না।"
          },
          {
            "en": "In this surah the list is an argument, and 78:17 will state where it leads. Yet the argument is made with things a person can hold in a cupped hand. A practical week might look like this. Notice the next rain and name the One who sent it. Use water as something given rather than bought: close the tap, fix the leak, leave some out for a thirsty animal. And when rain is late and the ground stays dry, ask for it from the One the verse names, rather than only complaining about the weather.",
            "bn": "এ সূরায় তালিকাটি একটি যুক্তি, আর ৭৮:১৭ জানাবে সেই যুক্তি কোথায় গিয়ে থামে। তবু যুক্তিটা গড়া হয়েছে এমন জিনিস দিয়ে, যা আঁজলা ভরে হাতে নেওয়া যায়। এক সপ্তাহের কাজ হতে পারে এ রকম। পরের বৃষ্টিটা খেয়াল করুন, আর মনে মনে নাম নিন তাঁর, যিনি তা পাঠালেন। পানিকে কেনা জিনিস নয়, পাওয়া জিনিস হিসেবে খরচ করুন: কল বন্ধ করুন, ফুটো সারান, তৃষ্ণার্ত কোনো প্রাণীর জন্য একটু রেখে দিন। আর বৃষ্টি দেরি করলে, মাটি শুকনো থাকলে, শুধু আবহাওয়া নিয়ে অভিযোগ না করে আয়াত যাঁর নাম নেয়, তাঁর কাছেই বৃষ্টি চান।"
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
          "bn": "নির্ধারিত সময় যেভাবে আসে"
        },
        "p": [
          {
            "en": "Yawma yunfakhu fi al-suri fa-ta'tuna afwaja: the Day the Horn is blown and you come in crowds. Six Arabic words, and the first of them looks back. The verse before, 78:17, said that the Day of Decision is an appointed time. At-Tabari says the new 'day' renders that Day of Decision in other words, so the sense runs: the Day of Decision was a term for what We promised these people, the day the Horn is blown. Al-Qurtubi makes the same link in grammar, reading the second yawm as a substitute for the first.",
            "bn": "ইয়াওমা ইউনফাখু ফিস সূরি ফাতা'তূনা আফওয়াজা: যেদিন শিঙ্গায় ফুঁক দেওয়া হবে, আর তোমরা দলে দলে আসবে। আরবিতে মাত্র ছয়টি শব্দ, আর প্রথম শব্দটিই পেছনের দিকে ইঙ্গিত করে। আগের আয়াত ৭৮:১৭ বলেছে, মীমাংসার দিন এক নির্ধারিত সময়। তাবারী বলেন, এখানকার 'দিন' সেই মীমাংসার দিনেরই ব্যাখ্যা। অর্থাৎ কথাটা দাঁড়ায় এমন: এই লোকদের যা ওয়াদা করা হয়েছে, মীমাংসার দিন তার মেয়াদ, আর সেটা সেই দিন, যেদিন শিঙ্গায় ফুঁক দেওয়া হবে। কুরতুবী একই সম্পর্ক দেখান ব্যাকরণ দিয়ে। তাঁর মতে দ্বিতীয় 'ইয়াওম' প্রথমটির স্থলাভিষিক্ত।"
          },
          {
            "en": "So the verse opens no new subject; it shows the appointment falling due. The verb is passive, yunfakhu, is blown, and the verse does not say who blows. The Muyassar supplies the agent in its paraphrase: the angel blows into the horn to announce the raising of the dead, and you come as nations, each nation with its leader. Al-Qurtubi likewise reads the blowing as being for the resurrection, and the coming as a coming to the place where all are presented.",
            "bn": "তাই আয়াতটি নতুন প্রসঙ্গ শুরু করছে না। নির্ধারিত সময়টা যখন এসে পড়বে, তখনকার ছবিই দেখাচ্ছে। ক্রিয়াটি কর্মবাচ্যে, ইউনফাখু, ফুঁক দেওয়া হবে। কে ফুঁক দেবেন, আয়াত তা বলে না। মুয়াসসার তার সরল ব্যাখ্যায় সেই ফাঁকটা পূরণ করে: ফেরেশতা শিঙ্গায় ফুঁক দেবেন পুনরুত্থানের ঘোষণা হিসেবে, আর তোমরা আসবে জাতি হয়ে, প্রত্যেক জাতি তার নেতার সঙ্গে। কুরতুবীও ফুঁককে পুনরুত্থানের জন্য বলে পড়েন। আর আসাটা তাঁর মতে সেই জায়গার দিকে, যেখানে সবাইকে হাজির করা হবে।"
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
            "bn": "সূর কী? তাবারী বলেন, শব্দটির অর্থ আর এ নিয়ে মতভেদ তিনি তাফসীরের আগের অংশে বুঝিয়ে দিয়েছেন, তাই এখানে আর পুনরাবৃত্তি করবেন না। তারপর অল্প কথায় নিজের মত জানান: আমাদের মতে এটি শিং, যাতে ফুঁক দেওয়া হয়। এর সমর্থনে নিজের সনদে আবদুল্লাহ ইবন আমর (রাঃ)-এর সূত্রে নবী ﷺ থেকে একটি বর্ণনা আনেন: সূর হলো শিং। ঠিক তার পরেই কাতাদার ভিন্ন এক ব্যাখ্যা লিখে রাখেন: সূর মানে আল-খালক, অর্থাৎ সৃষ্টি।"
          },
          {
            "en": "The two readings stand side by side in at-Tabari's own text. On his reading the verse names an instrument; on Qatada's the word points to the creation itself, and Qatada's line, as at-Tabari gives it, says no more than that. At-Tabari does not argue against Qatada here; he gives his own view first and Qatada's after it. Of the other commentators consulted, only the Muyassar glosses the word, and it names the horn outright.",
            "bn": "দুটি ব্যাখ্যাই তাবারীর নিজের লেখায় পাশাপাশি রয়েছে। তাঁর ব্যাখ্যায় আয়াতটি একটি যন্ত্রের কথা বলছে। কাতাদার ব্যাখ্যায় শব্দটি ইঙ্গিত করে সৃষ্টির দিকেই। তাবারী কাতাদার যে কথাটুকু এনেছেন, তাতে এর বেশি কিছু নেই। তাবারী এখানে কাতাদার বিরুদ্ধে যুক্তি দেননি। আগে নিজের মত রেখেছেন, পরে কাতাদারটা। এ আয়াতের জন্য দেখা অন্য তাফসীরগুলোর মধ্যে শুধু মুয়াসসার শব্দটির ব্যাখ্যা দেয়, আর সোজাসুজি শিংয়ের কথাই বলে।"
          },
          {
            "en": "The narration at-Tabari cites survives, through the same line from Sulayman at-Taymi, in Jami' at-Tirmidhi, number 2430. Abdullah ibn Amr ibn al-As (RA) said: A Bedouin came to the Prophet ﷺ and said: What is the Sur? He said: A horn that will be blown into. In the Arabic text at-Tirmidhi grades it hasan and says it is known only through Sulayman at-Taymi's narration; the English rendering on the same page reads hasan sahih, and this article keeps the lower grade. The article on 20:102 discusses the same report.",
            "bn": "তাবারী যে বর্ণনাটি এনেছেন, সুলাইমান আত-তাইমির একই সূত্রে তা জামি' তিরমিযীতে আছে, নম্বর ২৪৩০। আবদুল্লাহ ইবন আমর ইবনুল আস (রাঃ) বলেন: এক বেদুইন নবী ﷺ-এর কাছে এসে জিজ্ঞেস করল, সূর কী? তিনি বললেন: একটি শিং, যাতে ফুঁক দেওয়া হবে। আরবি পাঠে তিরমিযী একে হাসান বলেছেন, আর জানিয়েছেন যে সুলাইমান আত-তাইমির বর্ণনা ছাড়া এটি তাঁর জানা নেই। একই পাতার ইংরেজি অনুবাদে লেখা হাসান সহীহ। এ লেখা নিচের মানটাই রাখছে। ২০:১০২ আয়াতের আলোচনায় এ বর্ণনা নিয়ে আরও কথা আছে।"
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
            "bn": "ফাতা'তূনা: তারপর তোমরা আসবে। 'ফা' অক্ষরটি আসাকে ফুঁকের সঙ্গে জুড়ে দেয়। শিঙ্গা বাজবে, তার পরেই আগমন। ক্রিয়াটি সরাসরি শ্রোতাদের সম্বোধন করে। নিয়ামতের তালিকা জুড়ে সূরা যে 'তোমাদের' সঙ্গে কথা বলে আসছে, এবার তাদেরই জানানো হচ্ছে, তারা কোথায় চলেছে। বাগাভীর পুরো মন্তব্য এক লাইনের, আর তাতেই ছবিটা পূর্ণ হয়: দলের পর দল, সব জায়গা থেকে, হিসাবের জন্য।"
          },
          {
            "en": "Ma'arif al-Qur'an notes that other verses indicate the trumpet will be blown twice. At the first blowing the whole world comes to an end. At the second, the people of the whole world, earlier generations and later ones alike, are raised and come in multitudes and droves. Ibn Kathir, on the verse before, adds that the appointed time can be neither lengthened nor shortened, and that none knows it but Allah, citing 11:104: And We delay it only for a term fixed.",
            "bn": "মাআরিফুল কুরআন জানায়, অন্যান্য আয়াত থেকে বোঝা যায় শিঙ্গায় দুবার ফুঁক দেওয়া হবে। প্রথম ফুঁকে গোটা দুনিয়া শেষ হয়ে যাবে। দ্বিতীয় ফুঁকে সারা দুনিয়ার মানুষ, আগের প্রজন্ম আর পরের প্রজন্ম সবাই, জীবিত হয়ে উঠবে এবং দলে দলে ঝাঁকে ঝাঁকে আসবে। ইবন কাসীর আগের আয়াতের আলোচনায় যোগ করেন, নির্ধারিত সময়টা একটুও বাড়ানো বা কমানো যাবে না, আর আল্লাহ ছাড়া কেউ তা জানে না। প্রমাণ হিসেবে তিনি আনেন ১১:১০৪: আমি তা পিছিয়ে রাখি শুধু এক নির্দিষ্ট মেয়াদ পর্যন্ত।"
          },
          {
            "en": "As-Sa'di gives no gloss on the words at all. What he adds is weight. On that day, he writes, there will be convulsions and upheavals that would turn a newborn's hair grey and set hearts trembling. The verse states the event in six calm words, with no image of terror; his single line tells the reader how heavily they are meant to land.",
            "bn": "সা'দী শব্দগুলোর কোনো ব্যাখ্যাই দেন না। তিনি যোগ করেন ভার। তিনি লেখেন, সেদিন এমন কম্পন আর অস্থিরতা ঘটবে, যাতে নবজাতকের চুলও পেকে যায় আর অন্তর কেঁপে ওঠে। আয়াতটি ঘটনাটা বলেছে শান্ত ছয়টি শব্দে, ভয়ের কোনো ছবি না এঁকেই। সা'দীর এই লাইনটুকু পাঠককে বুঝিয়ে দেয়, শব্দগুলো কতটা ভারী হয়ে মনে বসার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Throng After Throng",
          "bn": "ভিড়ের পর ভিড়"
        },
        "p": [
          {
            "en": "Afwaja is the plural of fawj, as al-Qurtubi notes, and the commentators consulted for this verse gloss it in two ways. The first is a plain crowd. Mujahid, in at-Tabari's chain through Ibn Abi Najih, said: zumaran zumaran, throng upon throng. Ibn Kathir opens his comment on the verse with Mujahid's word. At-Tabari's own paraphrase doubles the picture: they come throng after throng, company after company. He adds that the people of interpretation said the same as he did.",
            "bn": "আফওয়াজ শব্দটি ফাওজের বহুবচন, কুরতুবী তা উল্লেখ করেছেন। এ আয়াতের জন্য দেখা তাফসীরগুলো শব্দটির দুই রকম ব্যাখ্যা দেয়। প্রথমটি সাধারণ ভিড়। ইবন আবী নাজীহের মাধ্যমে তাবারীর সনদে মুজাহিদ বলেছেন: যুমারান যুমারা, ভিড়ের পর ভিড়। ইবন কাসীর আয়াতের আলোচনা শুরুই করেন মুজাহিদের এ শব্দ দিয়ে। তাবারীর নিজের ভাষ্যে ছবিটা দুবার আসে: তারা আসবে ভিড়ের পর ভিড়, দলের পর দল। তিনি আরও জানান, তাফসীরবিদেরাও তাঁর মতোই বলেছেন।"
          },
          {
            "en": "Al-Baghawi keeps the same doubled word and adds the two things any crowd has: a starting point and a destination. They come from every place, and they come for the reckoning. Al-Qurtubi lists this reading too, though second and under the formula it is said: throngs and companies. Zumar is also the word the Qur'an uses in 39:73, for those who feared their Lord as they are driven to the Garden. Mujahid's gloss lends this verse the same picture of people arriving in bands.",
            "bn": "বাগাভী একই শব্দ দুবার রাখেন, আর যোগ করেন যেকোনো ভিড়ের দুটি জিনিস: কোথা থেকে আসছে, আর কোথায় যাচ্ছে। তারা আসবে সব জায়গা থেকে, আসবে হিসাবের জন্য। কুরতুবীও এ ব্যাখ্যা উল্লেখ করেন, তবে দ্বিতীয় স্থানে, 'বলা হয়েছে' কথাটি দিয়ে: ভিড় আর দল। যুমার শব্দটি কুরআন ৩৯:৭৩ আয়াতেও ব্যবহার করেছে, যেখানে রবকে ভয় করে চলা লোকদের দলে দলে জান্নাতের দিকে নিয়ে যাওয়া হয়। মুজাহিদের ব্যাখ্যা এ আয়াতেও দলবদ্ধ মানুষের আগমনের সেই ছবিটাই এনে দেয়।"
          },
          {
            "en": "The second gloss is nations. Al-Qurtubi puts it first: afwaja means umam, nations, each nation with its imam, and the Muyassar paraphrases the verse in the same terms. A crowd and a nation are not quite the same picture. A crowd is many people moving together; a nation is a people held together by something they share. What holds each one together is where at-Tabari goes next.",
            "bn": "দ্বিতীয় ব্যাখ্যা হলো জাতি। কুরতুবী এটাকেই আগে রাখেন: আফওয়াজ মানে উমাম, জাতিসমূহ, প্রত্যেক জাতি তার ইমামের সঙ্গে। মুয়াসসারও আয়াতের ভাষ্য দেয় একই কথায়। ভিড় আর জাতি ঠিক এক ছবি নয়। ভিড় মানে একসঙ্গে চলা অনেক মানুষ। জাতি মানে এমন মানুষ, যাদের কোনো অভিন্ন বন্ধন একসূত্রে বেঁধে রেখেছে। সেই বন্ধনটা কী, তাবারী পরের কথায় সেদিকেই যান।"
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
            "bn": "আয়াতে আফওয়াজ শব্দটি কেন এল, তাবারী তা ব্যাখ্যা করেন। তিনি লেখেন, এটা বলা হয়েছে কারণ আল্লাহ যে জাতির কাছে রাসূল পাঠিয়েছেন, সে জাতি আসবে তার কাছে পাঠানো সেই রাসূলের সঙ্গে। যেমন আল্লাহ ১৭:৭১ আয়াতে বলেছেন: যেদিন আমি প্রত্যেক দলকে তাদের ইমামসহ ডাকব। ইবন কাসীর এ ব্যাখ্যা ইবন জারীর থেকে উদ্ধৃত করেন, আর ইবন জারীর তাবারীরই নাম। তিনি এর সঙ্গে দ্বিমত করেন না। তাহলে তাবারী দুটি ব্যাখ্যাই একসঙ্গে ধরে রাখেন। ভিড়গুলো সত্যিকারের ভিড়, আর প্রতিটি ভিড় গড়ে ওঠে সেই রাসূলকে ঘিরে, যাঁকে সে জাতির কাছে পাঠানো হয়েছিল।"
          },
          {
            "en": "This ties the verse back to the surah's opening. The surah began with people questioning each other about the great news over which they differ, the subject of 78:3. On at-Tabari's reading, that disagreement ends in a sorting: each people arrives with the messenger who brought it the news. The arrival does not invent new groups; it gathers those already formed in the life before. The verse itself says nothing yet about the outcome for any crowd.",
            "bn": "এতে আয়াতটি সূরার শুরুর সঙ্গে জুড়ে যায়। সূরার শুরুতে লোকেরা একে অন্যকে প্রশ্ন করছিল সেই মহাসংবাদ নিয়ে, যা নিয়ে তারা মতভেদ করে। ৭৮:৩ আয়াতের বিষয় সেটাই। তাবারীর ব্যাখ্যায় সেই মতভেদের শেষ হয় বাছাইয়ে। প্রত্যেক জাতি আসে সেই রাসূলের সঙ্গে, যিনি তাদের কাছে সংবাদটা এনেছিলেন। সেদিনের আগমন নতুন দল বানায় না। দুনিয়ার জীবনে যে দল আগেই তৈরি হয়ে গেছে, তাদেরই একত্র করে। কোন ভিড়ের পরিণাম কী, আয়াতটি নিজে এখনো তা বলে না।"
          },
          {
            "en": "Ma'arif al-Qur'an approaches the groups from another angle. It reports that some scholars divide the crowds of the gathering according to their deeds and character, and it concludes that the various narrations about the groups do not conflict and may all be true. It mentions one narration describing three groups and others describing ten kinds, without grading them. This article does not build on those narrations. The grouping by messenger is the one the tafsirs consulted here tie to the verse's own wording.",
            "bn": "মাআরিফুল কুরআন দলগুলোকে দেখে অন্য দিক থেকে। সেখানে বলা হয়েছে, কিছু আলেম হাশরের দলগুলোকে ভাগ করেন আমল আর চরিত্র অনুযায়ী। আর দলের বিষয়ে আসা বিভিন্ন বর্ণনার মধ্যে কোনো বিরোধ নেই, সবগুলোই সত্য হতে পারে। একটি বর্ণনায় তিনটি দলের কথা, আরও কিছু বর্ণনায় দশটি শ্রেণির কথা তারা উল্লেখ করে, তবে মান যাচাই করে দেয় না। এ লেখা ওই বর্ণনাগুলোর উপর কিছু দাঁড় করাচ্ছে না। দেখা তাফসীরগুলো আয়াতের শব্দের সঙ্গে যে ভাগটা জুড়ে দেয়, তা রাসূল অনুযায়ী ভাগ।"
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
            "bn": "ইবন কাসীর জানান, বুখারী ঠিক এ আয়াতের অধীনেই একটি বর্ণনা এনেছেন। তাই এখানে বর্ণনাটি অন্য জায়গা থেকে ধার করা নয়, ৭৮:১৮ আয়াতের সঙ্গেই যুক্ত। সহীহ বুখারী, নম্বর ৪৯৩৫-এ আ'মাশ বর্ণনা করেন: আবু হুরায়রা (রাঃ) বলেন, আল্লাহর রাসূল ﷺ বলেছেন, 'দুই ফুঁকের মাঝে থাকবে চল্লিশ।' একজন আবু হুরায়রাকে জিজ্ঞেস করল, 'চল্লিশ দিন?' তিনি জবাব দিতে অস্বীকার করলেন। তারপর জিজ্ঞেস করল, 'চল্লিশ মাস?' তিনি জবাব দিলেন না। আবার জিজ্ঞেস করল, 'চল্লিশ বছর?' এবারও তিনি জবাব দিতে অস্বীকার করলেন।"
          },
          {
            "en": "The narration continues: Abu Huraira added, 'Then (after this period) Allah will send water from the sky and then the dead bodies will grow like vegetation grows. There is nothing of the human body that does not decay except one bone; that is the little bone at the end of the coccyx of which the human body will be recreated on the Day of Resurrection.' Its place in his Sahih is al-Bukhari's own mark of its soundness, and that is the grading this article reports.",
            "bn": "বর্ণনাটি এভাবে এগোয়: আবু হুরায়রা আরও বলেন, 'তারপর (এই সময়ের পর) আল্লাহ আকাশ থেকে পানি নামাবেন, আর মৃতদেহগুলো এমনভাবে গজিয়ে উঠবে, যেমন উদ্ভিদ গজায়। মানুষের দেহের সবকিছুই পচে যায়, শুধু একটি হাড় ছাড়া। সেটা মেরুদণ্ডের শেষ প্রান্তের ছোট্ট হাড়, যা থেকে কিয়ামতের দিন মানুষের দেহ আবার গড়া হবে।' বুখারী যে বর্ণনাকে নিজের সহীহ গ্রন্থে স্থান দিয়েছেন, সেটাই তাঁর নিজের দেওয়া বিশুদ্ধতার স্বীকৃতি। এ লেখা সেই মানটাই উল্লেখ করছে।"
          },
          {
            "en": "The verse names one blowing and moves straight to the crowds; Ma'arif al-Qur'an, as noted above, takes it as the second. The report shows what surrounds it: forty between the two blasts, rain from the sky, and bodies growing like plants from the one bone that does not decay. Abu Hurayra would not say forty of what; in the Arabic his answer each time is abaytu, I refuse. The article on 36:51 takes up the unit, and this article leaves the number as he left it.",
            "bn": "আয়াতটি একটিমাত্র ফুঁকের কথা বলে সোজা চলে যায় দলে দলে আগমনে। আগেই বলা হয়েছে, মাআরিফুল কুরআন একে দ্বিতীয় ফুঁক বলে ধরে। বর্ণনাটি তার আশপাশের ছবি দেখায়: দুই ফুঁকের মাঝে চল্লিশ, আকাশ থেকে বৃষ্টি, আর না-পচা সেই একটি হাড় থেকে উদ্ভিদের মতো দেহ গজিয়ে ওঠা। চল্লিশ কিসের, আবু হুরায়রা তা বলেননি। আরবিতে প্রতিবার তাঁর জবাব আবাইতু, আমি অস্বীকার করছি। এককের প্রশ্ন নিয়ে আলোচনা আছে ৩৬:৫১ আয়াতের লেখায়। এ লেখা সংখ্যাটা সেভাবেই রাখছে, যেভাবে তিনি রেখে গেছেন।"
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
            "bn": "মাআরিফুল কুরআন দুই ফুঁকের কথা বলে অন্যান্য আয়াতের ভিত্তিতে, তবে এখানে সেগুলোর নাম বলে না। সবচেয়ে স্পষ্ট ৩৯:৬৮, যেখানে প্রথম ফুঁক, তারপর দ্বিতীয় ফুঁক, আর তখনই মানুষ দাঁড়িয়ে তাকিয়ে থাকে। এ লেখা সে আয়াতের আলোচনা নতুন করে করছে না। প্রত্যেক দলকে ইমামসহ ডাকার কথা ১৭:৭১ আয়াতে, আর দলে দলে জান্নাতে নিয়ে যাওয়ার কথা ৩৯:৭৩ আয়াতে, সেগুলোর আলোচনাও আলাদা। আলোচ্য আয়াতের নজর শুধু আগমনের দিকে, আর যারা আসবে তাদের দিকে।"
          },
          {
            "en": "Al-Qurtubi also brings, under the words it is narrated, a long report attributed to Mu'adh ibn Jabal (RA), in which the Prophet ﷺ is asked about this verse and describes ten kinds of people from his community gathered in altered forms, each tied to a particular sin. Al-Qurtubi names no collection for it and gives no grading, and it could not be confirmed on a hadith page for this article. It is therefore left out, and nothing written here rests on it.",
            "bn": "কুরতুবী 'বর্ণিত আছে' কথাটি দিয়ে মুআয ইবন জাবাল (রাঃ)-এর নামে একটি দীর্ঘ বর্ণনাও আনেন। তাতে নবী ﷺ-কে এ আয়াত সম্পর্কে জিজ্ঞেস করা হয়, আর তিনি তাঁর উম্মতের দশটি শ্রেণির মানুষের কথা বলেন, যাদের চেহারা বদলে দিয়ে হাশরে আনা হবে, প্রত্যেক শ্রেণি নির্দিষ্ট এক গুনাহর সঙ্গে যুক্ত। কুরতুবী এর কোনো হাদিসগ্রন্থের নাম বলেননি, মানও জানাননি। এ লেখার জন্য হাদিসের কোনো পাতায় এটি যাচাই করাও যায়নি। তাই বর্ণনাটি বাদ রাখা হলো, আর এখানে লেখা কিছুই এর উপর দাঁড়িয়ে নেই।"
          },
          {
            "en": "Set aside what could not be confirmed, and the sources consulted here still agree on a good deal. The Day of Decision is the day of the Horn, blown to raise the dead. The coming is to a place of presentation and reckoning, and it is in groups, pictured as throngs from every place or as nations walking with their messengers. Only the meaning of sur, and the length of the forty, stay open in the texts read here.",
            "bn": "যা যাচাই করা যায়নি তা সরিয়ে রাখলেও দেখা তাফসীরগুলো অনেক কথায় একমত। মীমাংসার দিনই শিঙ্গার দিন, আর ফুঁক দেওয়া হবে মৃতদের জীবিত করতে। আসা হবে হাজিরা আর হিসাবের জায়গায়, দলে দলে। কেউ তা দেখেন সব জায়গা থেকে আসা ভিড় হিসেবে, কেউ দেখেন নিজ নিজ রাসূলের সঙ্গে চলা জাতি হিসেবে। এখানে পড়া লেখাগুলোতে খোলা প্রশ্ন শুধু দুটি: সূর শব্দের অর্থ, আর চল্লিশের দৈর্ঘ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing a Crowd in Advance",
          "bn": "আগে থেকেই দল বেছে নেওয়া"
        },
        "p": [
          {
            "en": "The verse's 'you' has not changed since the surah began. The same listeners who were shown the sky, the lamp and the rain are now told that they too will come, and in crowds. Nothing in the six words lets anyone stand outside them as a spectator. Reading about the Last Day as something that happens to other people is a comfortable habit, and the direct address takes that comfort away.",
            "bn": "সূরার শুরু থেকে আয়াতের 'তোমরা' একই আছে। যে শ্রোতাদের আকাশ, প্রদীপ আর বৃষ্টি দেখানো হয়েছিল, তাদেরই এখন বলা হচ্ছে: তোমরাও আসবে, দলে দলে। এ ছয়টি শব্দের বাইরে দাঁড়িয়ে দর্শক হয়ে থাকার সুযোগ কারও নেই। শেষ দিনের কথা পড়ে মনে করা যে এটা অন্যদের ব্যাপার, বড় আরামের অভ্যাস। সরাসরি সম্বোধন সেই আরামটুকু কেড়ে নেয়।"
          },
          {
            "en": "On at-Tabari's reading, the crowd a person arrives in is formed by whom that person followed. That is not a choice made on the day; it is made now, in what one obeys, imitates and trusts. The Muyassar's phrase, each nation with its leader, puts the same question in plain words. Whose example shapes my choices when no one is watching? Whose word settles my arguments? The answers are already drawing the outline of a crowd.",
            "bn": "তাবারীর ব্যাখ্যায় মানুষ কোন ভিড়ে আসবে, তা ঠিক হয় সে কার অনুসরণ করেছে তা দিয়ে। এ সিদ্ধান্ত সেদিন নেওয়া হবে না। নেওয়া হচ্ছে এখনই, কার কথা মানি, কাকে দেখে চলি, কার উপর ভরসা রাখি, তার মধ্য দিয়ে। মুয়াসসারের কথাটা, প্রত্যেক জাতি তার নেতার সঙ্গে, একই প্রশ্ন তোলে সোজা ভাষায়। কেউ না দেখলে কার আদর্শ আমার সিদ্ধান্ত গড়ে দেয়? তর্কে শেষ কথা কার কথা? এসব প্রশ্নের উত্তরই এখন থেকে একটা ভিড়ের রেখা আঁকছে।"
          },
          {
            "en": "And the day itself is fixed. Ibn Kathir's note that it can be neither lengthened nor shortened leaves preparation as the only thing still open. The forty that Abu Hurayra would not measure is not ours to measure either. What is ours is the time before the first blast, which is this time, and the company kept in it, which is today's company.",
            "bn": "আর দিনটি নিজে নির্ধারিত। ইবন কাসীর বলেছেন, তা বাড়ানো বা কমানো যাবে না। তাহলে খোলা থাকে শুধু প্রস্তুতি। আবু হুরায়রা যে চল্লিশ মাপেননি, তা মাপা আমাদেরও কাজ নয়। আমাদের হাতে আছে প্রথম ফুঁকের আগের সময়টা, মানে এই সময়টা। আর সে সময়ে যাদের সঙ্গ নিই, মানে আজকের সঙ্গীরা।"
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
          "bn": "ওঁৎ পাতা ঠিকানায় দীর্ঘ বাস"
        },
        "p": [
          {
            "en": "Labithina fiha ahqaba: remaining in it for ages. The verse is three Arabic words, and it completes a sentence begun two verses earlier. Hell has been lying in wait (78:21), a place of return for at-taghin, the transgressors (78:22), and now three words say how long they stay. Labithin means those who remain or tarry; fiha, in it, points back to Jahannam; ahqab is the plural of a noun for a long stretch of time. At-Tabari paraphrases plainly: these who transgressed in the world remain in Jahannam, staying in it ahqab.",
            "bn": "লাবিসীনা ফীহা আহকাবা: সেখানে তারা থাকবে যুগ যুগ ধরে। আরবিতে আয়াতটি মাত্র তিন শব্দের, আর দুই আয়াত আগে যে বাক্য শুরু হয়েছিল, এখানে এসে তা পূর্ণ হয়। জাহান্নাম ওঁৎ পেতে আছে (৭৮:২১), সীমালঙ্ঘনকারী আত-তাগীনদের ফেরার ঠিকানা হয়ে (৭৮:২২)। এবার তিনটি শব্দ জানায়, তারা সেখানে কতকাল থাকবে। লাবিসীন মানে যারা অবস্থান করে, থেকে যায়। ফীহা মানে তার ভেতরে, অর্থাৎ জাহান্নামে। আর আহকাব এমন এক বিশেষ্যের বহুবচন, যা দীর্ঘ সময়কে বোঝায়। তাবারী সহজ ভাষায় বলেন: দুনিয়ায় যারা সীমা ছাড়িয়েছিল, তারা জাহান্নামে থেকে যাবে, সেখানে অবস্থান করবে আহকাব জুড়ে।"
          },
          {
            "en": "The first word has two readings. At-Tabari reports lābithīn, with the long vowel, from most readers of Medina and Basra and some of Kufa, and labithīn, without it, from most Kufan readers. He judges the long form the more eloquent and better grounded in Arabic, yet says he does not disallow the other. Al-Baghawi names Hamza and Ya'qub for the short form; al-Qurtubi names Hamza and al-Kisa'i. Both call the two forms dialect variants, and al-Qurtubi adds a shade: the short form describes a person for whom staying has become his settled condition.",
            "bn": "প্রথম শব্দটির দুটি কিরাআত আছে। তাবারী জানান, মদীনা ও বসরার অধিকাংশ কারী এবং কুফার কয়েকজন পড়েছেন লা-বিসীন, দীর্ঘ স্বরে। আর কুফার অধিকাংশ কারী পড়েছেন লাবিসীন, দীর্ঘ স্বর ছাড়া। তাঁর বিচারে দীর্ঘ রূপটি বেশি প্রাঞ্জল, আরবি ব্যাকরণেও বেশি মজবুত। তবু অন্য পাঠটিকে তিনি অবৈধ বলেননি। ছোট রূপটির কারী হিসেবে বাগাভী নাম নেন হামযা ও ইয়াকুবের, কুরতুবী নাম নেন হামযা ও কিসাঈর। দুজনেই বলেন, এ দুটি আরবির দুই আঞ্চলিক রূপ। কুরতুবী একটু সূক্ষ্মতাও যোগ করেন: ছোট রূপটি বোঝায় সেই লোককে, থেকে যাওয়াটাই যার স্থায়ী অবস্থা হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word for the Long Stretch",
          "bn": "দীর্ঘ কাল বোঝানোর শব্দ"
        },
        "p": [
          {
            "en": "Ibn Kathir glosses ahqab as the plural of huqb, and huqb as a period of time, then adds at once that the commentators differed over its measure. At-Tabari separates two related words. Hiqab is the plural of hiqba, as in a line of poetry about two companions who stayed together a hiqba of time, a line al-Qurtubi credits to Mutammim ibn Nuwayra. Ahqab is the plural of huqb, and at-Tabari points to the singular in 18:60, where Musa (AS) says aw amdiya huquba, or I will go on for a long stretch.",
            "bn": "ইবন কাসীর বলেন, আহকাব হলো হুকবের বহুবচন, আর হুকব মানে সময়ের একটা মেয়াদ। তারপরই যোগ করেন, এর পরিমাণ নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে। তাবারী কাছাকাছি দুটি শব্দকে আলাদা করেন। হিকাব হলো হিকবার বহুবচন, যেমন এক কবিতার চরণে দুই সঙ্গীর কথা আছে, যারা এক হিকবা কাল একসঙ্গে কাটিয়েছিল। কুরতুবী চরণটিকে মুতাম্মিম ইবন নুওয়াইরার বলে উল্লেখ করেন। আর আহকাব হলো হুকবের বহুবচন। একবচনটি তাবারী দেখান ১৮:৬০ আয়াতে, যেখানে মূসা (আঃ) বলেন: আও আমদিয়া হুকুবা, অথবা আমি দীর্ঘকাল চলতেই থাকব।"
          },
          {
            "en": "Ma'arif al-Qur'an gives the singular as hiqbah and the meaning as ages or a long time; on at-Tabari's distinction, that singular belongs with the other plural. Al-Qurtubi sets out the dictionary layer. Huqub, with two u-vowels, is dahr, an age, and ahqab are ages; hiqba, with an i, is a year. Huqb with a silent second letter he gives as eighty years, adding that more and less have been said. He also cites Qutrub: the huqb is a long age without limit. From the start the word pulls two ways: a measured span, or time without an edge.",
            "bn": "মাআরিফুল কুরআন একবচনটি লেখে হিকবাহ, আর অর্থ বলে যুগ বা দীর্ঘ সময়। তাবারীর পার্থক্য মানলে এ একবচন আসলে অন্য বহুবচনটির। কুরতুবী অভিধানের দিকটা খুলে বলেন। দুই পেশ দিয়ে হুকুব মানে দাহর, অর্থাৎ যুগ, আর আহকাব মানে যুগসমূহ। যের দিয়ে হিকবা মানে এক বছর। আর দ্বিতীয় অক্ষর সাকিন রেখে হুকব, তাঁর ভাষায়, আশি বছর, যদিও এর চেয়ে বেশি বা কম কথাও বলা হয়েছে। তিনি কুতরুবের কথাও আনেন: হুকব হলো সীমাহীন দীর্ঘ যুগ। শুরু থেকেই তাই শব্দটি দুই দিকে টানে। এক দিকে মাপা একটা মেয়াদ, অন্য দিকে কিনারাহীন সময়।"
          }
        ]
      },
      {
        "h": {
          "en": "Figures the Early Reports Give",
          "bn": "পূর্বসূরিদের দেওয়া নানা অঙ্ক"
        },
        "p": [
          {
            "en": "Several of the consulted books record numbers, and they do not agree. At-Tabari's chain has 'Ali ibn Abi Talib ask Hilal al-Hajari what they find the huqb to be in the revealed book; Hilal answers eighty years, each year twelve months, each month thirty days, each day a thousand years. At-Tabari carries eighty years from Abu Hurayra, Ibn 'Abbas and Sa'id ibn Jubayr, with a doubt marked in Sa'id's report over whether the day is a year or a thousand years. Qatada says it reached him that a huqb is eighty years of the years of the Hereafter.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার কয়েকটিতে সংখ্যা আছে, আর সংখ্যাগুলো মেলে না। তাবারীর এক সনদে আলী ইবন আবী তালিব (রাঃ) হিলাল আল-হাজারীকে জিজ্ঞেস করেন, নাজিল হওয়া কিতাবে তোমরা হুকবের পরিমাণ কত পাও? হিলাল বলেন, আশি বছর। প্রতি বছরে ১২ মাস, প্রতি মাসে ৩০ দিন, আর প্রতিটি দিন হাজার বছরের। আশি বছরের কথা তাবারী আবূ হুরায়রা (রাঃ), ইবন আব্বাস (রাঃ) ও সাঈদ ইবন জুবাইর থেকেও আনেন। সাঈদের বর্ণনায় অবশ্য একটা সংশয় চিহ্নিত আছে: দিনটি এক বছরের, নাকি হাজার বছরের। কাতাদা বলেন, তাঁর কাছে খবর পৌঁছেছে যে হুকব হলো আখিরাতের হিসাবে আশি বছর।"
          },
          {
            "en": "Other figures sit beside these. Bashir ibn Ka'b says it reached him that a huqb is 300 years of 360 days, each day a thousand years. Ibn Kathir reports seventy years from al-Hasan and as-Suddi, and forty from 'Abdullah ibn 'Amr; al-Qurtubi gives the forty from Ibn 'Umar. Al-Baghawi reports seventeen thousand years from Muqatil ibn Hayyan. A long compound reckoning of 43 ahqab, each of seventy autumns, is credited to Mujahid by al-Baghawi and to al-Qurazi by al-Qurtubi. As-Suddi, in Ibn Kathir, counts 700 ahqab.",
            "bn": "এর পাশাপাশি আরও হিসাব আছে। বাশীর ইবন কা'ব বলেন, তিনি শুনেছেন হুকব ৩০০ বছর, প্রতি বছর ৩৬০ দিনের, আর প্রতিটি দিন হাজার বছরের। ইবন কাসীর হাসান ও সুদ্দী থেকে সত্তর বছরের কথা আনেন, আর আবদুল্লাহ ইবন আমর (রাঃ) থেকে চল্লিশ বছরের। কুরতুবী চল্লিশের কথাটি আনেন ইবন উমর (রাঃ) থেকে। বাগাভী মুকাতিল ইবন হাইয়ান থেকে আনেন সতেরো হাজার বছর। ৪৩ হুকবের একটা লম্বা গুণফলের হিসাবও আছে, প্রতিটি হুকব সত্তর শরৎকালের। বাগাভী এটিকে মুজাহিদের কথা বলেন, কুরতুবী বলেন কুরাযীর। আর ইবন কাসীরের বর্ণনায় সুদ্দী গোনেন ৭০০ হুকব।"
          },
          {
            "en": "Even one name can carry two numbers. In at-Tabari's two chains from al-Hasan, a single huqb is seventy thousand years; in the same report as Ibn Kathir quotes it, seventy years. Ma'arif al-Qur'an, citing Ibn Kathir, puts Abu Hurayra, Ibn 'Umar and Ibn 'Abbas at seventy, where Ibn Kathir's Arabic lists Abu Hurayra and Ibn 'Abbas with the eighty. As-Sa'di keeps it short: the ahqab are many, and a huqb, on what many commentators said, is eighty years. This article sets these figures side by side and chooses none of them.",
            "bn": "একই নামের সঙ্গে দুই রকম সংখ্যাও জুড়ে আছে। হাসান থেকে তাবারীর দুই সনদে এক হুকব সত্তর হাজার বছর। অথচ ইবন কাসীর যখন একই বর্ণনা উদ্ধৃত করেন, তাতে সত্তর বছর। মাআরিফুল কুরআন ইবন কাসীরের বরাতে আবূ হুরায়রা (রাঃ), ইবন উমর (রাঃ) ও ইবন আব্বাস (রাঃ)-এর মত বলে সত্তর বছর। কিন্তু ইবন কাসীরের আরবি পাঠে আবূ হুরায়রা ও ইবন আব্বাসের নাম আছে আশির তালিকায়। সা'দী অল্প কথায় সারেন: আহকাব অনেক, আর বহু মুফাসসিরের মতে এক হুকব আশি বছর। এ লেখা সংখ্যাগুলো পাশাপাশি রাখছে, কোনোটিকেই বেছে নিচ্ছে না।"
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
            "bn": "গোনার পাশাপাশি আরেকটা ব্যাখ্যা চলে, যা গোনা থামাতে রাজি নয়। তাবারীর বর্ণনায় কাতাদা বলেন, আহকাব হলো যার কোনো ছেদ নেই। একটি হুকব পার হলে তার পরে আরেকটি হুকব আসে। রাবী ইবন আনাস বলেন, এই আহকাবের সংখ্যা আল্লাহ ছাড়া কেউ জানে না। হাসানকে আয়াতটি সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেন, জাহান্নামে চিরকাল থাকা ছাড়া আহকাবের আর কোনো গণনা নেই। বাগাভীর বর্ণনায় তিনি কসম খেয়ে বলেন, জাহান্নামীদের জন্য আল্লাহ কোনো মেয়াদ রাখেননি। এক হুকব যায়, আরেকটা ঢোকে, তারপর আরেকটা, চিরকাল। মুয়াসসার সংক্ষেপে বলে: একের পর এক আসা যুগ, যা কখনো থামে না।"
          },
          {
            "en": "Al-Qurtubi argues the point from the language. The verse means the ages of the Hereafter, which have no end, much as people say the days of the Hereafter. It would mark a limit only if it said five ahqab or ten. The huqb, he says, was the farthest span the Arabs knew, so they were addressed in terms their minds could reach, as an idiom for perpetuity; others say ahqab was chosen over days because it weighs more heavily on hearts. He quotes Ibn Kaysan: ages with no final limit, as though the verse said forever.",
            "bn": "কুরতুবী ভাষা থেকেই যুক্তি দেন। আয়াতের মানে আখিরাতের যুগসমূহ, যার কোনো শেষ নেই, যেমন লোকে বলে আখিরাতের দিনগুলো। আয়াত যদি বলত পাঁচটি হুকব বা দশটি হুকব, তবেই সেখানে মেয়াদ বোঝাত। তাঁর মতে আরবদের জানা সবচেয়ে দূরের সময় ছিল হুকব। তাই তাদের বোধের নাগালে থাকা শব্দেই তাদের সম্বোধন করা হয়েছে। চিরকাল বোঝাতে এটা ছিল তাদের ভাষার এক বাগধারা। অন্যরা বলেন, দিনের বদলে আহকাব বলা হয়েছে, কারণ মনের উপর তার ভার বেশি। তিনি ইবন কাইসানের কথা আনেন: এমন যুগ যার কোনো শেষ সীমা নেই, যেন আয়াত বলছে চিরকাল।"
          },
          {
            "en": "Al-Qurtubi then weighs the figures themselves: they conflict, and fixing a duration for the stay would need a transmitted text that settles the question, which is not established from the Prophet ﷺ. Ma'arif al-Qur'an reaches a similar point: what the reports share is that a huqb is an extremely long time, and it quotes al-Baydawi's gloss of long periods following one another. Al-Baghawi adds a saying through as-Suddi and Murra from 'Abdullah: if the people of the Fire knew they would stay as long as the number of the world's pebbles, they would rejoice, and the people of the Garden would grieve.",
            "bn": "এরপর কুরতুবী সংখ্যাগুলোকেই মেপে দেখেন। তাঁর কথা, এগুলো পরস্পরবিরোধী। থাকার মেয়াদ বেঁধে দিতে হলে এমন বর্ণিত দলিল লাগবে যা প্রশ্নটার মীমাংসা করে দেয়, আর নবী ﷺ থেকে তেমন কিছু প্রমাণিত নয়। মাআরিফুল কুরআনও প্রায় একই জায়গায় পৌঁছায়: বর্ণনাগুলোর অভিন্ন কথা হলো, হুকব অত্যন্ত দীর্ঘ সময়। সেখানে বায়যাভীর ব্যাখ্যাও আছে: একের পর এক আসা দীর্ঘ মেয়াদ। বাগাভী সুদ্দী ও মুররার সূত্রে আবদুল্লাহর একটি উক্তি আনেন। জাহান্নামীরা যদি জানত যে তারা দুনিয়ার সব নুড়িপাথরের সংখ্যার সমান কাল থাকবে, তারা খুশি হতো। আর জান্নাতীরা একই কথা জানলে দুঃখ পেত।"
          }
        ]
      },
      {
        "h": {
          "en": "Ages of a Single Torment",
          "bn": "এক ধরনের আযাবের মেয়াদ"
        },
        "p": [
          {
            "en": "At-Tabari takes a further step. He agrees that Qatada and ar-Rabi' were right that these ahqab have no ending. Then he proposes that the verse may mean ahqab in one particular kind of punishment, the one the next verse goes on to name, after which other kinds follow. He cites 38:55 to 38:58, which uses the same two words as 78:22, at-taghin and ma'ab, and closes with others of its kind, in pairs. This reading, he says, is to him the closest to the meaning of the verse.",
            "bn": "তাবারী আরেক ধাপ এগোন। কাতাদা ও রাবী যে বলেছেন এই আহকাবের কোনো শেষ নেই, তিনি তা সঠিক মানেন। তারপর তিনি একটা সম্ভাবনা সামনে আনেন। আয়াতের আহকাব হয়তো নির্দিষ্ট এক ধরনের শাস্তির মেয়াদ, যার কথা পরের আয়াত বলবে। সে মেয়াদ ফুরোলে আসবে অন্য ধরনের শাস্তি। দলিল হিসেবে তিনি আনেন ৩৮:৫৫ থেকে ৩৮:৫৮ আয়াত। সেখানে ৭৮:২২-এর সেই দুটি শব্দই আছে, আত-তাগীন আর মাআব, আর শেষে আছে একই রকম আরও নানা জোড়া শাস্তির কথা। তাবারী বলেন, তাঁর কাছে এ ব্যাখ্যাই আয়াতের অর্থের সবচেয়ে কাছাকাছি।"
          },
          {
            "en": "Ibn Kathir summarises at-Tabari in an order worth noting: first this possibility of another kind of punishment, then the statement that the sound view is that the ahqab have no ending, as Qatada and ar-Rabi' said. Al-Qurtubi lists the reading under it has been said, and Ma'arif al-Qur'an presents it as a third interpretation held by a group of commentators. Read this way, the ahqab measure one stage of the punishment, not the whole stay. What that stage contains belongs to the next verses, and is left to them here.",
            "bn": "ইবন কাসীর তাবারীর কথা যে ক্রমে সাজান, সেটা লক্ষ করার মতো। প্রথমে অন্য ধরনের শাস্তির এই সম্ভাবনা। তারপর এই কথা যে সঠিক মত হলো, আহকাবের কোনো শেষ নেই, যেমন কাতাদা ও রাবী বলেছেন। কুরতুবী ব্যাখ্যাটি আনেন 'বলা হয়েছে' দিয়ে। মাআরিফুল কুরআন একে বলে একদল মুফাসসিরের তৃতীয় ব্যাখ্যা। এভাবে পড়লে আহকাব পুরো অবস্থানের মাপ নয়, শাস্তির একটি পর্যায়ের মাপ। সে পর্যায়ে কী আছে, তা পরের আয়াতগুলোর আলোচনা, তাই এখানে সে প্রসঙ্গ তোলা হলো না।"
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
            "bn": "আরও দুটি পুরোনো মত আয়াতটিকে অন্যভাবে সীমিত করে। মুকাতিল ইবন হাইয়ান বলতেন, আয়াতটি রহিত হয়ে গেছে ৭৮:৩০ দিয়ে: অতএব স্বাদ নাও, আমি তোমাদের শাস্তিই কেবল বাড়াব। বাগাভী তাঁর কথার ব্যাখ্যা দেন এভাবে: সংখ্যা উঠে গেছে, চিরস্থায়িত্ব সাব্যস্ত হয়েছে। কুরতুবী রহিত হওয়ার মতটি আনেন ইবন যায়দ ও মুকাতিল থেকে। তাবারী সরাসরি তা নাকচ করেন। আয়াতটি সংবাদ, আর সংবাদ রহিত হয় না। রহিত হয় কেবল আদেশ ও নিষেধ। কাফেরদের ক্ষেত্রে কুরতুবীও একই কারণে মতটিকে দূরবর্তী বলেন, আর প্রমাণ দেন ৭:৪০ থেকে, সুইয়ের ছিদ্রে উট ঢোকার কথা।"
          },
          {
            "en": "Khalid ibn Ma'dan read the verse, together with 11:107, except what your Lord wills, as concerning the people of tawhid among the people of the qibla. At-Tabari answers that what Qatada and ar-Rabi' said is more correct. Al-Qurtubi allows a narrower version: the eternity is for the mushrikun, and the verse could be carried to sinning believers who leave the Fire after ahqab; for them, he says, abrogation is sound if it means specification. Ma'arif al-Qur'an says Ibn Kathir mentions this possibility, al-Qurtubi supports it and al-Mazhari adopts it.",
            "bn": "খালিদ ইবন মা'দান এ আয়াত আর ১১:১০৭ আয়াতের 'তবে তোমার রব যা চান' অংশটিকে বুঝেছেন কিবলার অনুসারী তাওহিদপন্থীদের ব্যাপারে। তাবারীর জবাব, কাতাদা ও রাবীর কথাই বেশি সঠিক। কুরতুবী একটা সংকীর্ণ রূপ মেনে নেন। চিরস্থায়িত্ব মুশরিকদের জন্য। তবে আয়াতটিকে সেই গুনাহগার মুমিনদের উপরও প্রয়োগ করা যায়, যারা আহকাবের পর জাহান্নাম থেকে বের হবে। তাদের বেলায়, তিনি বলেন, রহিত হওয়ার কথা ঠিক, যদি তার মানে হয় নির্দিষ্টকরণ। মাআরিফুল কুরআন জানায়, এ সম্ভাবনার কথা ইবন কাসীর উল্লেখ করেছেন, কুরতুবী সমর্থন করেছেন, আর মাযহারী গ্রহণ করেছেন।"
          },
          {
            "en": "Abu Hayyan, as Ma'arif al-Qur'an reports him, disputes this from the verses that follow: 78:27 and 78:28 describe people who expected no reckoning and denied Allah's signs outright, which does not fit believers. Ma'arif itself holds that the disbelievers are never released, citing the Qur'an's phrase khalidina fiha abadan, abiding in it forever, and claiming the consensus of the Ummah. Ibn Kathir's abridged English names the taghin as rejectors who oppose the Messengers. These positions are reported here as their holders' own, side by side, with no verdict added.",
            "bn": "মাআরিফুল কুরআনের বর্ণনায় আবূ হাইয়ান পরের আয়াত দিয়ে এর বিরোধিতা করেন। ৭৮:২৭ ও ৭৮:২৮ আয়াতে এমন লোকদের কথা, যারা কোনো হিসাবের আশা করত না আর আল্লাহর নিদর্শনগুলো পুরোপুরি অস্বীকার করেছিল। এ বর্ণনা মুমিনদের সঙ্গে মেলে না। মাআরিফুল কুরআন নিজে মনে করে, কাফেরদের কখনো মুক্তি দেওয়া হবে না। প্রমাণ হিসেবে আনে কুরআনের বাক্যাংশ খালিদীনা ফীহা আবাদা, সেখানে তারা চিরকাল থাকবে, আর দাবি করে উম্মাহর ইজমা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে তাগীন হলো তারা, যারা রাসূলদের অস্বীকার করে আর তাঁদের বিরোধিতা করে। এ মতগুলো এখানে যার যার নিজের মত হিসেবেই পাশাপাশি রাখা হলো, কোনো রায় যোগ করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Narrations Left Unquoted",
          "bn": "যে বর্ণনাগুলো উদ্ধৃত হয়নি"
        },
        "p": [
          {
            "en": "Several narrations traced to the Prophet ﷺ on the length of a huqb, or of the stay, appear in these tafsirs. Ibn Kathir carries one through Ibn Abi Hatim from Abu Umama and calls it very munkar, saying that al-Qasim and the man who narrates from him, Ja'far ibn az-Zubayr, are both abandoned. Others come from Musnad al-Bazzar and, in al-Qurtubi, through ath-Tha'labi and al-Mahdawi. None could be confirmed for this article on a hadith collection page, so none is quoted here, and no sound hadith attached to this verse was found.",
            "bn": "হুকবের দৈর্ঘ্য বা জাহান্নামে থাকার মেয়াদ নিয়ে নবী ﷺ-এর নামে কয়েকটি বর্ণনা এসব তাফসীরে আছে। ইবন কাসীর একটি আনেন ইবন আবী হাতিমের সূত্রে আবূ উমামা (রাঃ) থেকে, আর বলেন সেটি অত্যন্ত মুনকার। তাঁর কথা, কাসিম এবং তাঁর থেকে বর্ণনাকারী জা'ফর ইবন যুবাইর দুজনই পরিত্যক্ত। অন্যগুলো এসেছে মুসনাদ আল-বাযযার থেকে, আর কুরতুবীর কাছে সা'লাবী ও মাহদাভীর সূত্রে। এ লেখার জন্য কোনোটিই কোনো হাদিস সংকলনের পাতায় যাচাই করা যায়নি। তাই কোনোটি এখানে উদ্ধৃত হয়নি। এ আয়াতের সঙ্গে যুক্ত কোনো সহীহ হাদিসও পাওয়া যায়নি।"
          },
          {
            "en": "A further point must be said plainly. The verse describes at-taghin, those who overstepped every bound and who, as 78:27 and 78:28 go on to say, denied Allah's signs. It speaks only of what it names, and it licenses nothing against any living person or community. It hands no reader a list of names, and nobody may assign another human being to these ages. Each person's end is with Allah. The commentators' own disagreement over who is meant should be enough to check any confidence about other people.",
            "bn": "আরেকটা কথা সোজাসুজি বলা দরকার। আয়াতটি আত-তাগীনদের কথা বলে, যারা সব সীমা ছাড়িয়ে গিয়েছিল। ৭৮:২৭ ও ৭৮:২৮ আয়াত জানায়, তারা আল্লাহর নিদর্শনগুলো অস্বীকার করেছিল। আয়াতটি কেবল সেটুকুই বর্ণনা করে, যা তার পাঠে আছে। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু বলার বা করার অনুমতি এ আয়াত দেয় না। কোনো পাঠকের হাতে এটি নামের তালিকা তুলে দেয় না। অন্য কোনো মানুষকে এই যুগ যুগের ঠিকানায় পাঠিয়ে দেওয়ার অধিকারও কারও নেই। প্রত্যেকের শেষ পরিণতি আল্লাহর হাতে। আয়াতে কারা উদ্দেশ্য, তা নিয়ে মুফাসসিরদের নিজেদেরই মতভেদ আছে। অন্য মানুষ সম্পর্কে নিশ্চিত হয়ে কিছু বলার আগে থমকে দাঁড়াতে এটুকুই যথেষ্ট।"
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
            "bn": "পাঠকের জন্য থেকে যায় শব্দটির দেখানো এক বৈপরীত্য। মানুষের জীবন গোনা যায়। তার বছরগুলো লিখে রাখা যায়। এমনকি আহকাবের বর্ণনা দিতে গিয়েও পূর্বসূরিদের বর্ণনাগুলো বছর, মাস আর দিনেরই আশ্রয় নিয়েছে। অথচ আয়াত নিজে কোনো সংখ্যা বলেনি। কুরতুবী মনে করিয়ে দেন, নির্দিষ্ট মেয়াদ বোঝালে আয়াত পাঁচটি বা দশটি হুকব বলত। ওপারের সময়টা বলা হয়েছে এমন শব্দে, যার সামনে গোনার বুদ্ধি হার মানে। তাহলে এপারের গোনা সময়টাই থাকে, যা এখনো কাজে লাগানো যায়।"
          },
          {
            "en": "So the verse returns a practical question. Which repentance have I been postponing on the assumption that time is plentiful? Which wrong done to another person am I leaving unrepaired, as though there will always be a later? The commentators' long arithmetic, whatever its worth, agrees with the verse on one thing: the stay is long beyond any easy reckoning. The time to act is the short, countable one we are in now, and the right place to apply a verse like this is to oneself, before anyone else.",
            "bn": "তাই আয়াতটি পাঠকের সামনে একটা বাস্তব প্রশ্ন রেখে যায়। সময় অঢেল আছে ভেবে কোন তওবাটা আমি পিছিয়ে রাখছি? কারও প্রতি করা কোন অন্যায়ের প্রতিকার না করে ফেলে রেখেছি, যেন পরে করার সময় সবসময়ই থাকবে? মুফাসসিরদের লম্বা হিসাবের মূল্য যা-ই হোক, এক জায়গায় তা আয়াতের সঙ্গে একমত: থাকার মেয়াদ সহজ কোনো হিসাবের অনেক বাইরে। কাজের সময় তো এই ছোট, গোনা সময়টাই, যার ভেতরে আমরা এখন আছি। আর এমন আয়াত অন্য কারও ওপর খাটানোর আগে খাটাতে হয় নিজের ওপর।"
          }
        ]
      }
    ]
  },
  "78:32": {
    "sections": [
      {
        "h": {
          "en": "Turning From the Transgressors",
          "bn": "সীমালঙ্ঘনকারীদের থেকে মুখ ফিরিয়ে"
        },
        "p": [
          {
            "en": "Hada'iqa wa a'naba: gardens and grapevines. The verse is two Arabic words long, and it carries the first item of a list. The verse before it, 78:31, opened that list with a promise: inna li-l-muttaqina mafaza, for the God-fearing there is a winning. What the winning holds begins here, and it begins with plants. The list runs on to 78:36. This article stays with its first two words and leaves the rest for their own pages.",
            "bn": "হাদায়িকা ওয়া আ'নাবা: বাগান আর আঙুরলতা। আয়াতটি আরবিতে মাত্র দুটি শব্দের, আর এতে আছে একটি তালিকার প্রথম কথা। তালিকাটা খুলেছে আগের আয়াত, ৭৮:৩১, এক প্রতিশ্রুতি দিয়ে: ইন্না লিলমুত্তাকীনা মাফাযা, মুত্তাকীদের জন্য আছে সাফল্য। সেই সাফল্যে কী কী আছে, তার শুরু এখানে, আর শুরুটা গাছপালা দিয়ে। তালিকা চলে ৭৮:৩৬ পর্যন্ত। এ লেখা থাকবে কেবল প্রথম দুটি শব্দের সঙ্গে। বাকিগুলোর আলোচনা যার যার জায়গায়।"
          },
          {
            "en": "The turn is sharp. From 78:21 to 78:30 the surah described the transgressors and their end; those verses speak only of what they name and license no verdict on any living person or community. Ma'arif al-Qur'an marks the hinge in plain words: thus far the punishment of the disbelievers was depicted, and as opposed to this, the reward and blessings of the righteous believers are depicted below. The Bengali Ahsanul Bayaan says the same: after the unfortunate come the fortunate, and the blessings they will enjoy in the Hereafter.",
            "bn": "এখানে সূরা হঠাৎ মোড় নেয়। ৭৮:২১ থেকে ৭৮:৩০ পর্যন্ত সূরাটি সীমালঙ্ঘনকারীদের আর তাদের পরিণতির কথা বলেছে। সেই আয়াতগুলো যা বলে, কেবল তা-ই বলে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে রায় দেওয়ার অনুমতি দেয় না। মাআরিফুল কুরআন জোড়ের জায়গাটা চিনিয়ে দেয় সোজা কথায়: এ পর্যন্ত এল কাফেরদের শাস্তির ছবি, এর বিপরীতে এবার আসছে নেককার মুমিনদের পুরস্কার আর নিয়ামতের ছবি। বাংলা আহসানুল বয়ানও একই কথা বলে: দুর্ভাগাদের কথার পর এবার সৌভাগ্যবানদের কথা, আর আখিরাতে তারা যে নিয়ামত ভোগ করবে তার বিবরণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Winning, Spelled Out in Gardens",
          "bn": "বাগানের ভাষায় সাফল্যের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "At-Tabari reads the gardens as that winning restated. His term is tarjama wa bayan: a rendering and an explanation of al-mafaz. This is allowed, he says, because mafaz is a verbal noun from the expression faza fulan bi-hadha al-shay', said of someone who sought a thing and obtained it. So the sense runs, in his paraphrase: for the God-fearing there is an obtaining of what they sought, of gardens and grapes. The winning is not left abstract for more than a single verse.",
            "bn": "তাবারীর মতে বাগানগুলো সেই সাফল্যেরই নতুন করে বলা। তাঁর শব্দ তারজামা ওয়া বায়ান, মানে আল-মাফাযের অনুবাদ ও ব্যাখ্যা। তিনি বলেন, এমনটা চলে, কারণ মাফায শব্দটি মাসদার, মূল কাজের নাম। আরবরা বলে, ফাযা ফুলানুন বিহাযাশ শাই। কেউ কোনো জিনিস চেয়ে তা পেয়ে গেলে এ কথা বলা হয়। তাবারীর ব্যাখ্যায় অর্থ দাঁড়ায়: মুত্তাকীরা যা চেয়েছিল, তা তারা পেয়েছে, বাগান আর আঙুর। সাফল্যের কথাটা তাই এক আয়াতের বেশি বিমূর্ত থাকে না।"
          },
          {
            "en": "Al-Qurtubi opens his note on the verse with the same judgement in three words: hadha tafsir al-fawz, this is the explanation of the winning. He then records, under qila, it is said, a reading that joins the two verses into one sentence: inna li-l-muttaqina mafaza means inna li-l-muttaqina hada'iq, for the God-fearing there are gardens. The Bengali Ahsanul Bayaan calls the verse a badal of mafazan, a word standing in its place to restate it: the details of the success. Three commentaries, one structure.",
            "bn": "কুরতুবী আয়াতের আলোচনা শুরু করেন একই রায় দিয়ে, মাত্র তিনটি শব্দে: হাযা তাফসীরুল ফাওয, এ হলো সাফল্যের ব্যাখ্যা। তারপর 'বলা হয়' কথাটি দিয়ে তিনি এমন এক পাঠ আনেন, যা দুই আয়াতকে এক বাক্যে জুড়ে দেয়: ইন্না লিলমুত্তাকীনা মাফাযা মানে ইন্না লিলমুত্তাকীনা হাদায়িক, মুত্তাকীদের জন্য আছে বাগান। বাংলা আহসানুল বয়ান আয়াতটিকে বলে মাফাযান শব্দের বদল, অর্থাৎ সাফল্যেরই বিবরণ। তিনটি তাফসীর, কাঠামো একটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Place, or a Rescue?",
          "bn": "জায়গা, নাকি মুক্তি?"
        },
        "p": [
          {
            "en": "The word mafaz itself drew two readings among the early authorities, and Ibn Kathir, in the abridged English of his commentary, records both. Ibn 'Abbas and ad-Dahhak said it means a place of enjoyable recreation. Mujahid and Qatadah said it means that they are successful and thus saved from the Hellfire. The first reading looks forward, to what the God-fearing will enter. The second looks back, to what they escaped: the Fire the surah has just finished describing.",
            "bn": "মাফায শব্দটি নিয়েই প্রথম যুগের আলেমদের দুটি পাঠ আছে। ইবন কাসীরের তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ দুটোই উল্লেখ করে। ইবন আব্বাস (রাঃ) ও দাহহাক বলেছেন, এর মানে আনন্দে বেড়ানোর জায়গা। মুজাহিদ ও কাতাদা বলেছেন, এর মানে তারা সফল হয়েছে, তাই জাহান্নাম থেকে রক্ষা পেয়েছে। প্রথম পাঠ তাকায় সামনে, মুত্তাকীরা কোথায় প্রবেশ করবে সেদিকে। দ্বিতীয় পাঠ তাকায় পেছনে, কী থেকে তারা বেঁচে গেল সেদিকে: সেই আগুন, যার বর্ণনা সূরাটি এইমাত্র শেষ করেছে।"
          },
          {
            "en": "Ibn Kathir does not leave the two side by side. He calls the reading of Ibn 'Abbas the most obvious meaning, and his reason is our verse: Allah says after this, hada'iq. A word that is explained at once by gardens is, on his reasoning, most naturally a place. That is Ibn Kathir's own weighing, reported here as his. The Muyassar paraphrases the promise as a winning through their entry into Paradise. This article does not settle between the two readings.",
            "bn": "ইবন কাসীর দুটো পাঠ পাশাপাশি রেখেই থেমে যান না। ইবন আব্বাস (রাঃ)-এর পাঠকে তিনি বলেন সবচেয়ে স্পষ্ট অর্থ, আর কারণ হিসেবে দেখান আমাদের এ আয়াতকেই: এর পরেই আল্লাহ বলছেন, হাদায়িক। তাঁর যুক্তিতে, যে শব্দের ব্যাখ্যা সঙ্গে সঙ্গে বাগান দিয়ে আসে, তা স্বাভাবিকভাবেই একটা জায়গা। এ বিচার ইবন কাসীরের নিজের, তাঁর নামেই রইল। মুয়াসসার প্রতিশ্রুতিটির অর্থ করে এভাবে: জান্নাতে প্রবেশের মধ্য দিয়ে সাফল্য। দুই পাঠের মধ্যে এ লেখা কোনো ফয়সালা দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wall Inside the Word",
          "bn": "শব্দের ভেতরের দেয়াল"
        },
        "p": [
          {
            "en": "Hada'iq is the plural of hadiqa, and at-Tabari defines it closely: orchards of date-palms, vines and other trees, with walls built around them that enclose them. The name comes from that enclosing, he says, from the walls' ihdaq, their ringing the ground on every side. Then he adds a limit worth noticing: if the walls do not surround it, it is not called a hadiqa. An open stand of trees, on his account, is something else. The boundary is carried inside the word.",
            "bn": "হাদায়িক শব্দটি হাদীকার বহুবচন। তাবারী এর সংজ্ঞা দেন খুঁটিয়ে: খেজুর, আঙুরলতা আর নানা গাছের বাগান, যার চারপাশে দেয়াল তুলে ঘিরে রাখা। নামটাও এসেছে সেই ঘেরাও থেকে, তিনি বলেন। দেয়াল জমিটাকে চারদিক থেকে বেষ্টন করে রাখে বলেই এর নাম হাদীকা। তারপর তিনি একটা সীমা টেনে দেন, যা খেয়াল করার মতো: চারপাশে দেয়াল না থাকলে তাকে হাদীকা বলে না। তাঁর হিসাবে খোলা জায়গায় দাঁড়ানো গাছের সারি অন্য জিনিস। সীমানাটা শব্দের ভেতরেই আছে।"
          },
          {
            "en": "Al-Qurtubi agrees in fewer words: al-bustan al-muhawwat 'alayh, the orchard with a wall around it, and he names the verb behind it, ahdaqa bihi, meaning ahata, it encircled. The other commentators gloss the word without the wall. Ibn Kathir: orchards of palms and other things. The Muyassar: great orchards, basatin 'azima. As-Sa'di: orchards that gather every kind of tree bright with fruit, with rivers breaking out between them. The wall is at-Tabari's and al-Qurtubi's detail, and none of the others contests it.",
            "bn": "কুরতুবী একই কথা বলেন আরও কম শব্দে: আল-বুস্তানুল মুহাওওয়াতু আলাইহ, যে বাগানের চারপাশে দেয়াল তোলা। পেছনের ক্রিয়াটাও তিনি দেখিয়ে দেন: আহদাকা বিহী, অর্থাৎ আহাতা, চারদিক থেকে ঘিরে ফেলল। অন্য তাফসীরকারেরা দেয়ালের কথা না তুলেই শব্দের অর্থ বলেন। ইবন কাসীর: খেজুর আর অন্যান্য গাছের বাগান। মুয়াসসার: বিশাল বাগান, বাসাতীন আযীমা। সা'দী: নানা জাতের গাছে ভরা বাগান, ফলে ফলে ঝলমলে, ফাঁকে ফাঁকে নদী ফুটে বেরোয়। দেয়ালের খুঁটিনাটি তাবারী আর কুরতুবীর। অন্যরা এ নিয়ে কোনো আপত্তি তোলেন না।"
          },
          {
            "en": "Held beside the definition, the verse gains weight. A walled garden is a guarded place: what is inside is kept, and what would spoil it stays out. The God-fearing are, in the Muyassar's words, those who fear their Lord and do righteous deeds. They kept watch over themselves in this life, and the reward that answers them begins with a garden that is kept. That match is a reader's observation, not a claim any of the commentators makes, but once the definition is in hand it is hard to miss.",
            "bn": "সংজ্ঞাটা মনে রেখে পড়লে আয়াতটির ওজন বাড়ে। দেয়ালঘেরা বাগান মানে সুরক্ষিত জায়গা। ভেতরে যা আছে তা থেকে যায়, আর যা নষ্ট করতে পারে তা বাইরে থাকে। মুয়াসসারের ভাষায় মুত্তাকী তারাই, যারা রবকে ভয় করে আর নেক আমল করে। দুনিয়ায় তারা নিজেদের পাহারা দিয়ে চলেছে, আর তাদের পুরস্কারের শুরুও এমন এক বাগানে, যাকে পাহারা দিয়ে রাখা হয়। এ মিল পাঠকের নিজের পর্যবেক্ষণ, কোনো তাফসীরকারের দাবি নয়। তবে সংজ্ঞাটা জানা থাকলে চোখ এড়ানো কঠিন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Grape Stands for the Vine",
          "bn": "নাম আঙুরের, বোঝায় লতা"
        },
        "p": [
          {
            "en": "The second word is a'nab, the plural of 'inab, grape. At-Tabari and al-Qurtubi both read it as shorthand. Al-Qurtubi says it means kurum a'nab, vines of grapes, and that the first word was dropped. At-Tabari says the same in his own way: naming the grapes was enough, and the vines did not need to be named. So the verse names the fruit and means the plant that bears it, which suits a list that has just begun with gardens. The grape is on the vine here, not on a plate.",
            "bn": "দ্বিতীয় শব্দ আ'নাব, ইনাব বা আঙুরের বহুবচন। তাবারী আর কুরতুবী দুজনেই একে সংক্ষেপ হিসেবে পড়েন। কুরতুবী বলেন, এর অর্থ কুরূমু আ'নাব, আঙুরের লতা, আগের শব্দটি বাদ পড়েছে। তাবারী নিজের মতো করে একই কথা বলেন: আঙুরের নাম নিলেই চলে, লতার নাম আলাদা করে নেওয়ার দরকার পড়ে না। ফলে আয়াত নাম নেয় ফলের, কিন্তু বোঝায় সেই গাছকে, যাতে ফলটা ধরে। যে তালিকা সবে বাগান দিয়ে শুরু হলো, তার সঙ্গে এটাই মানানসই। এখানে আঙুর ঝুলছে লতায়, থালায় নয়।"
          },
          {
            "en": "Why grapes, out of every fruit a garden might hold? As-Sa'di gives two reasons in one phrase: the grapes are singled out li-sharafiha wa kathratiha, for their nobility and for how plentiful they are in those gardens. Al-Baghawi reads the pair together and briefly: he means the trees of Paradise and their fruits. The article on 36:34 has already weighed why the Qur'an names the palm and the vine side by side, drawing on al-Qurtubi and as-Sa'di on that verse, and that discussion is not repeated here.",
            "bn": "বাগানে তো কত রকম ফল থাকতে পারে, তবু আঙুর কেন? সা'দী একটিমাত্র বাক্যাংশে দুটি কারণ দেন: আঙুরের নাম আলাদা করে এসেছে লিশারাফিহা ওয়া কাসরাতিহা, অর্থাৎ এর মর্যাদার জন্য, আর সেই বাগানগুলোতে এর প্রাচুর্যের জন্য। বাগাভী দুটি শব্দ একসঙ্গে পড়েন, অল্প কথায়: এখানে উদ্দেশ্য জান্নাতের গাছপালা আর তার ফলমূল। কুরআন কেন খেজুর আর আঙুরলতার নাম পাশাপাশি নেয়, সে আলোচনা ৩৬:৩৪ আয়াতের লেখায় আগেই হয়েছে, সেখানে কুরতুবী ও সা'দীর ব্যাখ্যা ধরে। এখানে তার পুনরাবৃত্তি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Eleven Verses With Grapes",
          "bn": "আঙুরের এগারো আয়াত"
        },
        "p": [
          {
            "en": "A count from the Arabic text sharpens the point. The grape word, singular or plural, occurs in eleven verses of the Qur'an. In ten of them the grape belongs to this world. It is provision brought out of the earth in 6:99, 16:11, 23:19, 36:34 and 80:28; a sign for people who reason in 13:4 and 16:67; part of a parable in 2:266 and 18:32; and part of a garden the deniers demand in 17:91. Of the eleven, 78:32 alone sets the grape in the life to come.",
            "bn": "আরবি পাঠে শব্দটি গুনে দেখলে কথাটা আরও স্পষ্ট হয়। আঙুর শব্দটি, একবচনে বা বহুবচনে, কুরআনের ১১টি আয়াতে এসেছে। এর দশটিতে আঙুর এই দুনিয়ার জিনিস। মাটি থেকে বের করে আনা রিজিক হিসেবে আছে ৬:৯৯, ১৬:১১, ২৩:১৯, ৩৬:৩৪ আর ৮০:২৮ আয়াতে। বুদ্ধিমানদের জন্য নিদর্শন হিসেবে ১৩:৪ ও ১৬:৬৭ আয়াতে। উপমার অংশ হয়ে ২:২৬৬ ও ১৮:৩২ আয়াতে। আর ১৭:৯১ আয়াতে অস্বীকারকারীরা যে বাগান দাবি করে, তার অংশ হয়ে। ১১টির মধ্যে কেবল ৭৮:৩২ আঙুরকে রাখে আখিরাতে।"
          },
          {
            "en": "The word hada'iq is rarer still, in three verses. In 27:60 Allah sends down water and causes to grow by it hada'iqa dhata bahja, gardens of joyful beauty, whose trees you could not have grown yourselves. In 80:30 the hada'iq are ghulb, dense, listed among the plants grown as provision. Here, the third time, the gardens are the reward. The first listeners were asked to recognise the promise in the vocabulary of their own fields, the words they already used for orchards they had watered and walked through.",
            "bn": "হাদায়িক শব্দটি আরও বিরল, এসেছে তিনটি আয়াতে। ২৭:৬০ আয়াতে আল্লাহ পানি নামান আর তা দিয়ে উৎপন্ন করেন হাদায়িকা যাতা বাহজা, মনোরম সৌন্দর্যের বাগান, যার গাছ মানুষ নিজে উৎপন্ন করতে পারত না। ৮০:৩০ আয়াতে হাদায়িক গুলব, ঘন, রিজিক হিসেবে গজানো উদ্ভিদের তালিকায়। আর এখানে, তৃতীয়বার, বাগানই পুরস্কার। প্রথম শ্রোতাদের কাছে প্রতিশ্রুতি এসেছে তাদের নিজেদের খেতখামারের ভাষায়। যে বাগানে তারা পানি দিয়েছে, যার ভেতর দিয়ে হেঁটেছে, তার নামেই তারা চিনবে পুরস্কারকে।"
          },
          {
            "en": "The count shows one more thing. In nine of the other ten grape verses the date-palm stands in the same verse; in 78:32 it is not named. The glosses of at-Tabari and Ibn Kathir account for that, since both place palms inside the word hada'iq itself: at-Tabari's orchards of palms, vines and other trees, and Ibn Kathir's orchards of palms and other things. On their reading the gardens hold the palms, and the grapes are named beside them, so two Arabic words carry a whole orchard.",
            "bn": "গণনায় আরেকটা জিনিস ধরা পড়ে। আঙুরের বাকি দশটি আয়াতের নয়টিতে একই আয়াতে খেজুর গাছও আছে। ৭৮:৩২ আয়াতে খেজুরের নাম নেই। তাবারী আর ইবন কাসীরের ব্যাখ্যায় এর জবাব মেলে, কারণ দুজনেই খেজুরকে রাখেন হাদায়িক শব্দের ভেতরেই। তাবারীর সংজ্ঞায় খেজুর, আঙুরলতা আর নানা গাছের বাগান। ইবন কাসীরের সংজ্ঞায় খেজুর আর অন্যান্য গাছের বাগান। তাঁদের পাঠে বাগানই খেজুর ধরে রাখে, আর আঙুরের নাম আসে তার পাশে। এভাবে দুটি আরবি শব্দে পুরো একটা বাগান এঁটে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Sources Leave Out",
          "bn": "সূত্রগুলোতে যা নেই"
        },
        "p": [
          {
            "en": "Some things are absent, and the absence is reported plainly. None of the eight tafsir texts consulted for this verse cites a hadith on these two words: at-Tabari, Ibn Kathir in Arabic and in abridged English, al-Qurtubi, as-Sa'di, al-Baghawi, the Muyassar and Ma'arif al-Qur'an. So this article quotes no narration for the verse, rather than attaching a narration from another setting. None of them gives an occasion of revelation either; the verse's setting is simply its place in the surah's sequence.",
            "bn": "কিছু জিনিস সূত্রগুলোতে নেই, আর সে কথাও সোজাসুজি জানিয়ে রাখা দরকার। এ আয়াতের জন্য সংগ্রহ করা আটটি তাফসীর পাঠের কোনোটিই এই দুটি শব্দের ব্যাখ্যায় কোনো হাদিস আনেনি: তাবারী, আরবি ও সংক্ষিপ্ত ইংরেজিতে ইবন কাসীর, কুরতুবী, সা'দী, বাগাভী, মুয়াসসার আর মাআরিফুল কুরআন। তাই অন্য প্রসঙ্গ থেকে কোনো বর্ণনা টেনে এনে জুড়ে না দিয়ে এ লেখা আয়াতটির জন্য কোনো হাদিস উদ্ধৃত করছে না। শানে নুযূলও কেউ উল্লেখ করেননি। সূরার ধারাবাহিকতায় আয়াতটির অবস্থানই তার প্রেক্ষাপট।"
          },
          {
            "en": "The list also keeps going, and it is left alone here on purpose. The verses that follow name further gifts, and they deserve their own reading rather than a hurried paragraph at the end of this article. What 78:32 gives on its own is a beginning. The first concrete thing named in the description of the winning is ground that grows: enclosed, planted and bearing fruit. Before anything else on that list, the God-fearing are told where they will be.",
            "bn": "তালিকাটাও এখানে থামে না, আর তাকে ইচ্ছা করেই এখানে ছুঁয়ে দেখা হচ্ছে না। এর পরের আয়াতগুলো আরও উপহারের কথা বলে। এ লেখার শেষে তাড়াহুড়ো করে এক অনুচ্ছেদে নয়, সেগুলোর প্রাপ্য আলাদা আলোচনা। ৭৮:৩২ নিজে যা দেয়, তা এক শুরু। সাফল্যের বর্ণনায় প্রথম যে বাস্তব জিনিসের নাম আসে, তা ফসল ফলানো জমি: ঘেরা, গাছ লাগানো, ফলে ভরা। তালিকার আর সবকিছুর আগে মুত্তাকীদের জানিয়ে দেওয়া হয়, তারা কোথায় থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Tending Toward a Garden",
          "bn": "বাগানের আশায় পরিচর্যা"
        },
        "p": [
          {
            "en": "What does a verse of two words ask of a reader today? The Muyassar has already named who these gardens are for: those who fear their Lord and do righteous deeds. Both halves are work done now. A garden in this world is not had by wishing. Someone digs, plants and waters, then waits through seasons before the first cluster hangs. A vine set in the ground this year does not fill a basket this year. The God-fearing keep tending while the harvest is still out of sight.",
            "bn": "দুই শব্দের একটি আয়াত আজকের পাঠকের কাছে কী চায়? এ বাগান কাদের জন্য, মুয়াসসার তা আগেই বলে দিয়েছে: যারা রবকে ভয় করে আর নেক আমল করে। দুটো কাজই এখনকার। দুনিয়ার বাগানও শুধু চাইলেই পাওয়া যায় না। কাউকে মাটি খুঁড়তে হয়, চারা লাগাতে হয়, পানি দিতে হয়, তারপর মৌসুমের পর মৌসুম অপেক্ষা, তবে গিয়ে প্রথম থোকাটা ঝোলে। এ বছর লাগানো লতা এ বছরই ঝুড়ি ভরায় না। মুত্তাকীরা যত্ন চালিয়ে যায়, ফসল তখনো চোখের আড়ালে থাকলেও।"
          },
          {
            "en": "Then there is the wall. If at-Tabari is right that a hadiqa is a garden only when walls surround it, the image carries a second instruction beside the first: what you plant, you also protect. The Qur'an itself warns in 2:264 against invalidating charity with reminders or injury, which is a good deed spoiled after it was done. The application to this verse is the reader's own, not the commentators'. But someone who hopes for a walled garden there has reason to build a few walls here.",
            "bn": "তারপর দেয়ালের কথা। তাবারীর কথামতো হাদীকা যদি কেবল সেই বাগান হয় যার চারপাশে দেয়াল আছে, তাহলে ছবিটা প্রথম নির্দেশের পাশে আরেকটা নির্দেশও দেয়: যা লাগান, তা আগলেও রাখুন। কুরআন নিজেই ২:২৬৪ আয়াতে সতর্ক করে, খোঁটা দিয়ে বা কষ্ট দিয়ে নিজের দান নষ্ট কোরো না। অর্থাৎ নেক কাজ করে ফেলার পরেও তা নষ্ট হয়ে যেতে পারে। এ আয়াতের সঙ্গে কথাটা মেলানো পাঠকের নিজের কাজ, তাফসীরকারদের নয়। তবে যে ওখানে দেয়ালঘেরা বাগানের আশা করে, এখানে কিছু দেয়াল গড়ার কারণ তার আছে।"
          },
          {
            "en": "Last, the fruit on your own table. The grapes you eat carry the same name the Qur'an gave to this reward. That does not make a bunch of grapes a piece of Paradise, and none of the commentators says so. It can make it a reminder. Eat it with thanks, and let it carry the mind for a moment from the vine you can see to the garden you cannot, and from there to the deeds that the Muyassar names as the way in.",
            "bn": "শেষ কথা, আপনার নিজের থালার ফল। যে আঙুর আপনি খান, কুরআন এ পুরস্কারকে সেই নামেই ডেকেছে। তাই বলে এক থোকা আঙুর জান্নাতের টুকরো হয়ে যায় না, কোনো তাফসীরকারও তা বলেননি। তবে তা মনে করিয়ে দিতে পারে। শুকরিয়া আদায় করে খান। এক মুহূর্তের জন্য মনটাকে চোখের সামনের লতা থেকে নিয়ে যান সেই বাগানের দিকে, যা চোখে দেখা যায় না। তারপর সেই আমলের দিকে, যাকে মুয়াসসার বলেছে সেখানে ঢোকার পথ।"
          }
        ]
      }
    ]
  },
  "78:35": {
    "sections": [
      {
        "h": {
          "en": "What Reaches the Ear",
          "bn": "কানে যা পৌঁছাবে"
        },
        "p": [
          {
            "en": "La yasma'una fiha laghwan wa la kidhdhaba: they will not hear therein any idle talk, nor any lying. The verse is six Arabic words. It stands near the end of the list of what the righteous receive, a list that opened at 78:31 with mafaz, a winning. Gardens and grapes, companions and a full cup have come before it, and now the passage turns from what is held and tasted to what is heard. Al-Qurtubi explains fiha as in the garden; the Muyassar, glossing 78:31 to 78:35 together, says in this garden.",
            "bn": "লা ইয়াসমাউনা ফীহা লাগওয়ান ওয়ালা কিয্‌যাবা: সেখানে তারা কোনো অসার কথা শুনবে না, মিথ্যাও শুনবে না। আরবিতে আয়াতটি ছয়টি শব্দের। মুত্তাকীরা কী পাবেন, তার যে তালিকা ৭৮:৩১ আয়াতে মাফায বা সাফল্যের ঘোষণা দিয়ে শুরু হয়েছিল, এ আয়াত তার শেষ দিকে দাঁড়িয়ে। আগে এসেছে বাগান আর আঙুর, সঙ্গিনী আর কানায় কানায় ভরা পানপাত্র। এবার আলোচনা হাতে ধরা আর মুখে চাখার জিনিস ছেড়ে কানে শোনার দিকে ফেরে। কুরতুবী ফীহা শব্দের ব্যাখ্যায় বলেন, জান্নাতে। আর ৭৮:৩১ থেকে ৭৮:৩৫ পর্যন্ত একসাথে ব্যাখ্যা করতে গিয়ে মুয়াসসার লেখে, এই জান্নাতে।"
          },
          {
            "en": "Al-Qurtubi ties the verse to the cup mentioned just before it. When the people of the garden drink, he says, their minds do not change and they do not speak laghw, unlike the people of this world. The point is quiet but real: in this world drink and loose talk often arrive together, and the garden separates them. Ma'arif al-Qur'an, commenting on the group that begins at 78:30, simply marks the turn the passage has taken: from here on, it says, the reward and blessings of the righteous believers are depicted.",
            "bn": "কুরতুবী আয়াতটিকে ঠিক আগের পানপাত্রের সঙ্গে জুড়ে দেন। তাঁর কথায়, জান্নাতবাসীরা পান করলে তাদের বুদ্ধি বদলায় না, তারা লাগও কথাও বলে না। দুনিয়ার মানুষের বেলায় ব্যাপারটা উল্টো। কথাটা ছোট, কিন্তু গভীর। এ দুনিয়ায় পানীয় আর লাগামছাড়া কথা প্রায়ই হাত ধরাধরি করে আসে, জান্নাত দুটোকে আলাদা করে দেয়। ৭৮:৩০ থেকে শুরু হওয়া আয়াতগুচ্ছের আলোচনায় মাআরিফুল কুরআন শুধু আলোচনার মোড়টুকু চিহ্নিত করে। সেখানে বলা হয়েছে, এখান থেকে নেককার মুমিনদের পুরস্কার আর নিয়ামতের বর্ণনা।"
          }
        ]
      },
      {
        "h": {
          "en": "False Words, or Wasted Ones",
          "bn": "মিথ্যা কথা, নাকি বৃথা কথা"
        },
        "p": [
          {
            "en": "Laghw is the first thing the verse removes, and the commentators define it along two lines. At-Tabari's gloss is batil min al-qawl, falsehood in speech. The Muyassar uses the same phrase, and al-Baghawi has almost the same words, batil min al-kalam. Al-Qurtubi also opens with al-batil, then adds a definition drawn from the word itself: laghw is what is discarded from speech and thrown aside, ma yulgha min al-kalam wa yutrah. On this line, laghw is speech that has no place because it is untrue.",
            "bn": "আয়াতটি প্রথমে যা সরিয়ে দেয়, তা লাগও। তাফসীরকারেরা একে দুই ধারায় ব্যাখ্যা করেন। তাবারীর ব্যাখ্যা, বাতিল মিনাল কাওল, অর্থাৎ অসত্য কথা। মুয়াসসারও হুবহু এ শব্দগুলোই ব্যবহার করে। বাগাভীর শব্দ প্রায় একই, বাতিল মিনাল কালাম। কুরতুবীও শুরু করেন আল-বাতিল দিয়ে, তারপর শব্দটির ভেতর থেকেই একটি সংজ্ঞা টানেন: কথার যে অংশ ফেলে দেওয়া হয়, ছুড়ে ফেলা হয়, তা-ই লাগও। এ ধারায় লাগও এমন কথা, যার কোনো জায়গা নেই কারণ তা সত্য নয়।"
          },
          {
            "en": "The second line looks at what speech yields rather than whether it is true. Ibn Kathir explains laghw as speech that is idle and stripped of benefit, kalam lagh 'ari 'an al-fa'ida. As-Sa'di is shorter still: kalam la fa'ida fih, talk with no benefit in it. The abridged English Ibn Kathir renders the idea as vain, worthless speech. On this reading the garden is free not only of untrue words but of words that lead nowhere, the kind that fill an hour and leave nothing behind.",
            "bn": "দ্বিতীয় ধারার প্রশ্ন কথাটা সত্য কি না, তা নয়। প্রশ্ন হলো, কথাটা কী ফল দেয়। ইবন কাসীর লাগওয়ের ব্যাখ্যা দেন এমন কথা হিসেবে, যা বৃথা আর উপকার থেকে শূন্য। সা'দী আরও সংক্ষেপে বলেন, এমন কথা যাতে কোনো ফায়দা নেই। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একে বলে অসার, মূল্যহীন কথা। এ পাঠে জান্নাত শুধু অসত্য কথা থেকেই মুক্ত নয়, যে কথা কোথাও পৌঁছায় না তা থেকেও মুক্ত। সেই কথা, যা এক ঘণ্টা ভরে রাখে কিন্তু শেষে কিছুই রেখে যায় না।"
          },
          {
            "en": "The two lines do not contradict each other, and none of the commentators sets one against the other. They differ in emphasis: one asks whether a word is false, the other whether it does any good. Read together, they describe a conversation in which every word is both true and worth saying. At-Tabari adds a report through its chain from Qatada, who glosses the pair laghw and kidhdhab as batil and ithm, falsehood and sin, and another from Ibn Zayd, who simply affirms the verse: it is so, with no laghw in it and no kidhdhab.",
            "bn": "দুই ধারা একটি আরেকটির বিরোধী নয়, তাফসীরকারদের কেউ একটিকে অন্যটির বিপরীতে দাঁড় করাননি। পার্থক্য শুধু জোরের জায়গায়। একটি জিজ্ঞেস করে কথাটা মিথ্যা কি না, অন্যটি জিজ্ঞেস করে কথাটা কোনো কাজে আসে কি না। দুটো মিলিয়ে পড়লে এমন এক আলাপের ছবি পাওয়া যায়, যার প্রতিটি শব্দ সত্যও, বলার যোগ্যও। তাবারী সনদসহ কাতাদার একটি বর্ণনা আনেন। তিনি লাগও আর কিয্‌যাব জোড়াটির অর্থ বলেন বাতিল আর ইসম, অর্থাৎ অসত্য আর গুনাহ। ইবন যায়দের বর্ণনাটি শুধু আয়াতের কথাই নিশ্চিত করে: জান্নাত তেমনই, সেখানে লাগও নেই, কিয্‌যাবও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word at Friday Prayer",
          "bn": "জুমার খুতবায় শব্দটির দেখা"
        },
        "p": [
          {
            "en": "Al-Qurtubi illustrates the word with a hadith about the Friday sermon. The wording quoted here is al-Bukhari's (Sahih al-Bukhari 934), narrated by Abu Hurayra, and al-Bukhari includes it in his Sahih. The Messenger of Allah ﷺ said: \"If you say to your companion on Friday, 'Be quiet,' while the imam is delivering the sermon, you have engaged in laghw.\" The verb at the end, laghawta, comes from the same root as the noun in this verse, which is why al-Qurtubi reaches for it. The English rendering on the quranx page reads \"you have done an evil act\"; the sense given here follows the Arabic verb.",
            "bn": "কুরতুবী শব্দটি বোঝাতে জুমার খুতবা নিয়ে একটি হাদিস আনেন। এখানে উদ্ধৃত শব্দাবলি বুখারীর (সহীহ বুখারী ৯৩৪), আবু হুরায়রা (রাঃ) থেকে বর্ণিত, আর বুখারী হাদিসটি তাঁর সহীহ গ্রন্থে এনেছেন। রাসূলুল্লাহ ﷺ বলেছেন: \"জুমার দিন ইমাম যখন খুতবা দিচ্ছেন, তখন যদি তুমি তোমার সঙ্গীকে বলো, 'চুপ করো', তাহলে তুমি লাগও করলে।\" শেষের ক্রিয়াপদ লাগাওতা আর এ আয়াতের লাগও একই ধাতু থেকে এসেছে। কুরতুবী এ কারণেই হাদিসটি টেনে আনেন। quranx পাতার ইংরেজি অনুবাদে আছে \"তুমি একটি মন্দ কাজ করলে\"; এখানে অর্থ নেওয়া হয়েছে আরবি ক্রিয়াপদ থেকে।"
          },
          {
            "en": "The hadith does not explain itself further, but its plain sense is worth noticing. Be quiet is not a false sentence, and it is even correct, since listening to the sermon is right. Yet spoken over the sermon it is counted as laghw. That fits the second line of definitions above, which judges speech by what it does in its place. A true word at the wrong moment can still be a word thrown away, and the garden, on Ibn Kathir's and as-Sa'di's reading, has none of those.",
            "bn": "হাদিসটি নিজে আর কোনো ব্যাখ্যা দেয় না, তবে এর সরল অর্থটা খেয়াল করার মতো। 'চুপ করো' কথাটা মিথ্যা নয়। বরং ঠিক কথাই, কারণ খুতবা মন দিয়ে শোনাই নিয়ম। অথচ খুতবার মাঝখানে বলা হলে সেটাই লাগও গণ্য হয়। এটা উপরের দ্বিতীয় ধারার সংজ্ঞার সঙ্গে মেলে। সে ধারা কথার বিচার করে, যেখানে বলা হলো সেখানে কথাটা কী কাজ করল তা দেখে। ভুল মুহূর্তে বলা সত্য কথাও ফেলে দেওয়ার মতো কথা হয়ে যেতে পারে। ইবন কাসীর আর সা'দীর পাঠে জান্নাতে এমন কথাও নেই।"
          },
          {
            "en": "Two cautions belong with this. The hadith concerns conduct in the mosque, not Paradise, and al-Qurtubi uses it only to show how the word is used; it is not attached to this verse as an occasion of revelation. His own wording runs in a slightly different order from al-Bukhari's, so only al-Bukhari's text is quoted here. And none of the commentators read for this verse cites a hadith about speech in Paradise itself, so this article quotes none and does not supply any from elsewhere.",
            "bn": "এখানে দুটি সতর্কতা দরকার। হাদিসটি মসজিদের আদব নিয়ে, জান্নাত নিয়ে নয়। কুরতুবী শুধু শব্দটির ব্যবহার দেখাতে এটি এনেছেন। এ আয়াতের শানে নুযূল হিসেবে হাদিসটি আয়াতের সঙ্গে যুক্ত নয়। কুরতুবীর নিজের উদ্ধৃতিতে শব্দের ক্রম বুখারীর থেকে সামান্য আলাদা, তাই এখানে কেবল বুখারীর পাঠই উদ্ধৃত হয়েছে। আর এ আয়াতের জন্য যেসব তাফসীর পড়া হয়েছে, তার কোনোটিই জান্নাতের কথাবার্তা নিয়ে কোনো হাদিস আনেনি। তাই এ লেখায় এমন কোনো হাদিস নেই, অন্য কোথাও থেকে এনে বসানোও হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Lying, or Calling a Liar",
          "bn": "মিথ্যা বলা, নাকি মিথ্যাবাদী বলা"
        },
        "p": [
          {
            "en": "Kidhdhab is the second thing the garden lacks, and here the commentators divide more clearly. The first reading makes it mutual: not lying as such, but people calling one another liars. At-Tabari glosses wa la kidhdhaba as wa la mukadhaba, and explains that none of them will call another a liar, la yukadhdhibu ba'duhum ba'dan. The Muyassar has the same clause. Al-Baghawi glosses the word as takdhib, the act of calling something false, and then gives the same explanation, that none of them belies another.",
            "bn": "জান্নাতে দ্বিতীয় যে জিনিস নেই, তা কিয্‌যাব। এখানে তাফসীরকারদের মত আরও স্পষ্টভাবে ভাগ হয়ে যায়। প্রথম পাঠে ব্যাপারটা পারস্পরিক: নিছক মিথ্যা বলা নয়, একে অন্যকে মিথ্যাবাদী বলা। তাবারী ওয়ালা কিয্‌যাবা-র ব্যাখ্যা দেন ওয়ালা মুকাযাবা দিয়ে, আর খুলে বলেন, তাদের কেউ কাউকে মিথ্যাবাদী বলবে না। মুয়াসসারেও হুবহু এ বাক্যটি আছে। বাগাভী শব্দটির অর্থ বলেন তাকযীব, অর্থাৎ কোনো কিছুকে মিথ্যা বলে উড়িয়ে দেওয়া। তারপর তিনিও একই ব্যাখ্যা দেন, কেউ কাউকে মিথ্যুক বলবে না।"
          },
          {
            "en": "Al-Qurtubi holds both senses in a single sentence. None of them will call another a liar, he writes, and they will not hear lying, kadhib. Ibn Kathir puts the second sense first and joins it to sin: in the garden there is no ithm kadhib, the sin of a lie. The abridged English Ibn Kathir has nor any sinful lying. On this reading the word names the lie itself, whoever might speak it, rather than an accusation thrown at someone else. The garden is free of falsehood, not only of quarrels about it.",
            "bn": "কুরতুবী এক বাক্যেই দুটো অর্থ ধরে রাখেন। তিনি লেখেন, তাদের কেউ কাউকে মিথ্যাবাদী বলবে না, আর তারা কোনো মিথ্যা, কাযিব, শুনবেও না। ইবন কাসীর দ্বিতীয় অর্থটিকে সামনে আনেন এবং তার সঙ্গে গুনাহ জুড়ে দেন: জান্নাতে নেই ইসমু কাযিব, মিথ্যার গুনাহ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে আছে, কোনো গুনাহভরা মিথ্যাও নেই। এ পাঠে শব্দটি খোদ মিথ্যাকেই বোঝায়, যে-ই বলুক। অন্যের দিকে ছোড়া অভিযোগ এখানে মূল কথা নয়। জান্নাত শুধু মিথ্যা নিয়ে ঝগড়া থেকে মুক্ত নয়, মিথ্যা থেকেই মুক্ত।"
          },
          {
            "en": "As-Sa'di moves furthest from the letter of the word. He glosses kidhdhab simply as ithm, sin, and Qatada's pairing in at-Tabari, falsehood and sin, points the same way. So three readings stand side by side in the texts read for this verse: a garden where no one calls another a liar, a garden where no lie is heard, and a garden free of sinful speech. The commentators place them next to each other without ranking them, and this article leaves them in that order without choosing between them.",
            "bn": "সা'দী শব্দের আক্ষরিক অর্থ থেকে সবচেয়ে দূরে যান। তিনি কিয্‌যাবের অর্থ বলেন শুধু ইসম, অর্থাৎ গুনাহ। তাবারীর আনা কাতাদার জোড়া ব্যাখ্যা, অসত্য আর গুনাহ, একই দিকে ইঙ্গিত করে। ফলে এ আয়াতের জন্য পড়া তাফসীরগুলোতে তিনটি পাঠ পাশাপাশি দাঁড়িয়ে আছে। এক, এমন জান্নাত যেখানে কেউ কাউকে মিথ্যাবাদী বলে না। দুই, এমন জান্নাত যেখানে কোনো মিথ্যা শোনা যায় না। তিন, এমন জান্নাত যেখানে গুনাহের কোনো কথা নেই। তাফসীরকারেরা এগুলোকে পাশাপাশি রাখেন, কোনোটিকে অগ্রাধিকার দেন না। এ লেখাও তাদের মধ্যে বাছাই করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Kisa'i's Lighter Reading",
          "bn": "কিসাঈর হালকা উচ্চারণ"
        },
        "p": [
          {
            "en": "The form of the word carries a difference of reading, and three of the commentators report it. At-Tabari says the readers of the great cities read kidhdhaban with a doubled dhal, except al-Kisa'i, who read it lighter, kidhaban. He points back to what he said on wa kadhdhabu bi-ayatina kidhdhaba (78:28), where the same noun with the doubled letter describes how the deniers denied Our signs. He also cites a line by the poet al-A'sha as evidence that the lighter form is good Arabic.",
            "bn": "শব্দটির গঠনে পাঠের একটি পার্থক্য আছে, আর তিনজন তাফসীরকার তা উল্লেখ করেন। তাবারী বলেন, বড় বড় নগরের কারীরা যাল অক্ষরে তাশদীদ দিয়ে কিয্‌যাবান পড়েছেন। ব্যতিক্রম কিসাঈ, তিনি হালকা করে পড়েছেন কিযাবান। এ প্রসঙ্গে তাবারী ফিরে যান ওয়া কায্‌যাবূ বিআয়াতিনা কিয্‌যাবা (৭৮:২৮) আয়াতে তাঁর আলোচনায়। সেখানে তাশদীদসহ একই শব্দ জানায়, অস্বীকারকারীরা কীভাবে আমার আয়াতগুলোকে মিথ্যা বলে উড়িয়ে দিয়েছিল। হালকা রূপটিও যে শুদ্ধ আরবি, তার প্রমাণে তিনি কবি আ'শার একটি পঙক্তিও আনেন।"
          },
          {
            "en": "At-Tabari then takes a position. The doubled form is dearer to him, he says, and it is the reading; he does not accept the lighter one, because the authoritative readers agree against it. Al-Qurtubi and al-Baghawi report al-Kisa'i's reading without that judgement. For al-Qurtubi the lighter form comes from kadhabtu kidhaban, so the sense is that they do not lie to one another in the garden. Al-Baghawi calls it the verbal noun of kadhaba, like mukadhaba, then adds two further views: that it means lying, and that it means takdhib, exactly like the doubled form.",
            "bn": "এরপর তাবারী নিজের অবস্থান জানান। তাঁর কাছে তাশদীদওয়ালা রূপটিই বেশি প্রিয়, পাঠও সেটাই। হালকা পাঠ তিনি গ্রহণ করেন না, কারণ নির্ভরযোগ্য কারীরা সবাই এর বিপরীতে একমত। কুরতুবী আর বাগাভী কিসাঈর পাঠ উল্লেখ করেন, তবে এমন কোনো রায় দেন না। কুরতুবীর মতে হালকা রূপটি এসেছে কাযাবতু কিযাবান থেকে, ফলে অর্থ দাঁড়ায়, জান্নাতে তারা একে অন্যের সঙ্গে মিথ্যা বলবে না। বাগাভী একে বলেন কা-যাবা ক্রিয়ার মাসদার, মুকাযাবার মতো। তারপর আরও দুটি মত যোগ করেন। একটি হলো, এর অর্থ মিথ্যা। অন্যটি হলো, এর অর্থ তাকযীব, ঠিক তাশদীদওয়ালা রূপের মতোই।"
          },
          {
            "en": "Al-Qurtubi also records a view, introduced with it is said, on why al-Kisa'i doubled the word at 78:28 but not here. On this view both are verbal nouns of takdhib; at 78:28 the verb kadhdhabu governs the noun and fixes its form, while in this verse no such verb stands before it. Whatever the grammar, the same word that named the deniers' conduct in 78:28 returns here as something the garden is free of. The verses speak only of what they name, and license no verdict against any living person or community.",
            "bn": "কুরতুবী 'বলা হয়' কথাটি দিয়ে আরেকটি মত উল্লেখ করেন, কেন কিসাঈ ৭৮:২৮ আয়াতে শব্দটি তাশদীদসহ পড়লেন কিন্তু এখানে পড়লেন না। এ মতে দুটোই তাকযীবের মাসদার। ৭৮:২৮ আয়াতে কায্‌যাবূ ক্রিয়াটি শব্দটিকে নিজের অধীনে বেঁধে তার রূপ ঠিক করে দেয়। এ আয়াতে তেমন কোনো ক্রিয়া আগে নেই। ব্যাকরণ যেমনই হোক, ৭৮:২৮ আয়াতে যে শব্দ অস্বীকারকারীদের আচরণের নাম ছিল, এখানে সেটিই ফিরে আসে এমন জিনিস হিসেবে, যা জান্নাতে নেই। আয়াতগুলো যা উল্লেখ করেছে, কেবল তারই কথা বলে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে রায় দেওয়ার অনুমতি এতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Near Twin in Al-Waqi'ah",
          "bn": "ওয়াকিআয় প্রায় যমজ আয়াত"
        },
        "p": [
          {
            "en": "As-Sa'di sets this verse beside 56:25 and 56:26, and the comparison repays a close look. In 56:25 the first five words are the same as here: la yasma'una fiha laghwan wa la. Only the last word differs. Where this verse ends with kidhdhaba, al-Waqi'ah ends with ta'thima, a word for sin; the abridged English Ibn Kathir renders its noun form, at 52:23, as sin. Then 56:26 adds an exception that this verse does not have: illa qilan salaman salama, only the saying, peace, peace.",
            "bn": "সা'দী এ আয়াতকে ৫৬:২৫ ও ৫৬:২৬ আয়াতের পাশে রাখেন, আর তুলনাটা মন দিয়ে দেখার মতো। ৫৬:২৫ আয়াতের প্রথম পাঁচটি শব্দ এখানকার মতোই: লা ইয়াসমাউনা ফীহা লাগওয়ান ওয়ালা। পার্থক্য শুধু শেষ শব্দে। এ আয়াত শেষ হয় কিয্‌যাবা দিয়ে, সূরা ওয়াকিআর আয়াত শেষ হয় তা'সীমা দিয়ে, যা গুনাহ বোঝায়। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৫২:২৩ আয়াতে এ শব্দের বিশেষ্য রূপের অনুবাদ করে গুনাহ। এরপর ৫৬:২৬ এমন একটি ব্যতিক্রম যোগ করে, যা এ আয়াতে নেই: ইল্লা কীলান সালামান সালামা, শুধু একটি কথা, সালাম, সালাম।"
          },
          {
            "en": "As-Sa'di's gloss of kidhdhab as ithm sits naturally beside a twin verse that has a word for sin in the same place, though he does not state that connection in words. The exception in 56:26 also answers a question this verse leaves open. If idle talk and lies are gone, what is heard instead? Al-Waqi'ah's answer is greeting, salam, said and said again. Neither verse promises silence. Both describe a company in which speech continues, emptied of what harms and filled with peace.",
            "bn": "সা'দী কিয্‌যাবের অর্থ করেছেন ইসম, গুনাহ। আর যমজ আয়াতটির ঠিক একই জায়গায় গুনাহ বোঝানো শব্দ। দুটো স্বাভাবিকভাবেই পাশাপাশি বসে, যদিও সা'দী এ যোগসূত্রের কথা মুখে বলেননি। ৫৬:২৬ আয়াতের ব্যতিক্রমটি এমন এক প্রশ্নেরও জবাব দেয়, যা এ আয়াত খোলা রেখে দেয়। অসার কথা আর মিথ্যা যদি না থাকে, তবে শোনা যাবে কী? সূরা ওয়াকিআর জবাব, সালাম, বারবার উচ্চারিত সালাম। কোনো আয়াতই নীরবতার প্রতিশ্রুতি দেয় না। দুটোই এমন এক সমাবেশের ছবি আঁকে, যেখানে কথা চলতেই থাকে, শুধু ক্ষতিকর সবকিছু ঝরে গিয়ে তাতে ভরে থাকে শান্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Nothing Falls Short",
          "bn": "যেখানে কোনো কিছুতে ঘাটতি নেই"
        },
        "p": [
          {
            "en": "Ibn Kathir reaches for a different neighbour, 52:23. He quotes only its second half, there is no laghw in it and no ta'thim, but the full verse in the mushaf begins with the cup: they pass among themselves a cup. So that verse joins the cup and the absence of idle talk in a single breath, as this passage does across 78:34 and 78:35, and as al-Qurtubi does when he says the drinkers' minds stay unchanged. Two surahs, then, place the same pairing before the reader.",
            "bn": "ইবন কাসীর ভিন্ন এক প্রতিবেশী আয়াত টেনে আনেন, ৫২:২৩। তিনি এর শুধু দ্বিতীয় অংশ উদ্ধৃত করেন, সেখানে নেই কোনো লাগও, নেই কোনো তা'সীম। কিন্তু মুসহাফে পুরো আয়াতটি শুরু হয় পানপাত্র দিয়ে: তারা নিজেদের মধ্যে পানপাত্র আদান-প্রদান করবে। অর্থাৎ ওই আয়াত এক নিঃশ্বাসে পানপাত্র আর অসার কথার অনুপস্থিতিকে জুড়ে দেয়। এ সূরাও ৭৮:৩৪ ও ৭৮:৩৫ আয়াতে একই কাজ করে, আর কুরতুবীও বলেন, পান করলেও জান্নাতবাসীদের বুদ্ধি বদলায় না। দুই সূরায় তাই পাঠকের সামনে একই জুটি।"
          },
          {
            "en": "Ibn Kathir then gives the reason behind both verses in one sentence: rather, it is dar as-salam, the abode of peace, and everything in it is salim min an-naqs, sound and free of any deficiency. His wording rests on a single root, salam and salim, peace and soundness. On his reading the absence of laghw and lies is not a separate gift added to the garden. It follows from what the garden is: a place where nothing falls short, and speech, like everything else there, is whole.",
            "bn": "এরপর ইবন কাসীর একটিমাত্র বাক্যে দুই আয়াতের পেছনের কারণ বলে দেন: বরং এ হলো দারুস সালাম, শান্তির আবাস, আর এর সবকিছুই সালিম মিনান নাকস, সব ঘাটতি থেকে নিরাপদ ও নিখুঁত। তাঁর শব্দচয়ন একই ধাতুর উপর দাঁড়িয়ে, সালাম আর সালিম, শান্তি আর নিখুঁত অবস্থা। তাঁর পাঠে লাগও আর মিথ্যার না থাকা জান্নাতে আলাদা করে জুড়ে দেওয়া কোনো উপহার নয়। জান্নাত যা, তা থেকেই এটি আসে। সেখানে কোনো কিছুতে ঘাটতি নেই, আর অন্য সবকিছুর মতো কথাও সেখানে পূর্ণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Rehearsing the Garden's Speech",
          "bn": "জান্নাতের ভাষার মহড়া"
        },
        "p": [
          {
            "en": "The verse is a promise, and a promise is not an instruction. Still, someone who longs for a place may begin keeping its customs before arriving. If the commentators are right that laghw covers both the false word and the useless one, two questions can be put to any sentence before it leaves the mouth: is it true, and will it do any good? Many of the words we come to regret fail one test or the other, and the Friday hadith shows that even a correct word can fail the second.",
            "bn": "আয়াতটি প্রতিশ্রুতি, আর প্রতিশ্রুতি তো নির্দেশ নয়। তবু কোনো জায়গার জন্য যার মন টানে, সে পৌঁছানোর আগেই সেখানকার রীতি মেনে চলা শুরু করতে পারে। লাগও যদি মিথ্যা কথা আর অকেজো কথা দুটোকেই বোঝায়, যেমনটা তাফসীরকারেরা বলেন, তাহলে মুখ থেকে কোনো বাক্য বের হওয়ার আগে তাকে দুটি প্রশ্ন করা যায়। এটা কি সত্য? আর এটা কি কোনো উপকারে আসবে? যে কথাগুলোর জন্য পরে আফসোস হয়, তার অনেকগুলোই এ দুই পরীক্ষার কোনো একটিতে আটকে যায়। জুমার হাদিস দেখায়, ঠিক কথাও দ্বিতীয় পরীক্ষায় আটকে যেতে পারে।"
          },
          {
            "en": "The second half asks something harder. On the reading of at-Tabari, al-Baghawi and the Muyassar, the garden is free of people calling each other liars. That is a habit of suspicion as much as a habit of speech. Practising its absence here means giving a friend's account a fair hearing before deciding it is false, and owning our own exaggerations before anyone else has to name them. The garden is still to come, but the tongue that hopes to speak there is in use today, and it is shaped by what it says now.",
            "bn": "আয়াতের দ্বিতীয় অংশ আরও কঠিন কিছু চায়। তাবারী, বাগাভী আর মুয়াসসারের পাঠে জান্নাতে কেউ কাউকে মিথ্যাবাদী বলে না। এটা যতটা কথার অভ্যাস, ততটাই সন্দেহের অভ্যাস। এখানে তার চর্চা মানে, বন্ধুর কথাকে মিথ্যা বলে রায় দেওয়ার আগে তাকে ন্যায্যভাবে শোনা। আর অন্য কেউ ধরিয়ে দেওয়ার আগেই নিজের বাড়িয়ে বলা কথাগুলো নিজে স্বীকার করা। জান্নাত এখনো সামনে। কিন্তু যে জিহ্বা সেখানে কথা বলার আশা রাখে, তা আজই ব্যবহার হচ্ছে, আর আজকের কথাই তাকে গড়ে তোলে।"
          }
        ]
      }
    ]
  }
});
