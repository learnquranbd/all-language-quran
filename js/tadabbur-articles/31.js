/**
 * Tadabbur long-form articles — surah 31.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "31:4": {
    "sections": [
      {
        "h": {
          "en": "The Portrait of the Muḥsin",
          "bn": "সৎকর্মশীলের ছবি"
        },
        "p": [
          {
            "en": "Sūrat Luqmān opens by naming its book wise and its guidance a mercy, then says that mercy is for the muḥsinīn, the doers of good (31:3). The very next verse does not change the subject; it finishes the sentence. Who are these doers of good? They are, the verse answers, those who establish prayer and give zakāh, and who are certain of the Hereafter (31:4). So before the sūrah has told a single story, it has already drawn a portrait, and it draws that portrait with three strokes.",
            "bn": "সূরা লুকমান শুরুতেই তার কিতাবকে বলে হিকমতে ভরা, আর তার হেদায়েতকে বলে রহমত। তারপর জানায়, এই রহমত সৎকর্মশীলদের জন্য (৩১:৩)। ঠিক পরের আয়াত অন্য প্রসঙ্গে যায় না, আগের বাক্যটাই শেষ করে। কারা এই সৎকর্মশীল? আয়াতের জবাব: যারা নামাজ কায়েম করে, যাকাত দেয় আর আখেরাতে দৃঢ় বিশ্বাস রাখে (৩১:৪)। অর্থাৎ একটা কাহিনিও বলার আগে সূরাটি একটা ছবি এঁকে ফেলেছে, আর সে ছবি আঁকা হয়েছে মাত্র তিনটি আঁচড়ে।"
          },
          {
            "en": "Two of the three strokes are visible acts. Prayer is worship the body performs, at fixed times and in a fixed shape. Zakāh is worship the wealth performs, a measured portion that leaves the pocket of the giver and reaches the needy. The third stroke is not an act at all but a state of the heart: yaqīn, a certainty that beyond this life lies another in which all of it is weighed. The portrait is complete only with the three together, and it is the inner certainty that gives the two outward acts their life.",
            "bn": "তিনটি আঁচড়ের দুটি চোখে দেখা যায় এমন আমল। নামাজ হলো শরীরের ইবাদত, নির্দিষ্ট সময়ে আর নির্দিষ্ট আকারে আদায় করা। যাকাত হলো সম্পদের ইবাদত, মাপা একটা অংশ দাতার পকেট ছেড়ে অভাবীর কাছে পৌঁছায়। তৃতীয় আঁচড়টি কোনো আমলই নয়, বরং অন্তরের এক অবস্থা: ইয়াকীন, এই দৃঢ় নিশ্চয়তা যে এই জীবনের ওপারে আরেকটি জীবন আছে, যেখানে সবকিছুর ওজন হবে। ছবিটা পূর্ণ হয় কেবল তিনটি একসঙ্গে থাকলে, আর ভেতরের নিশ্চয়তাই বাইরের দুটি আমলকে প্রাণ দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Still the Same Sentence",
          "bn": "একই বাক্যের ভেতরে"
        },
        "p": [
          {
            "en": "Al-Qurtubi pauses on the grammar, because the grammar carries the meaning. The opening word of the verse, alladhīna, those who, he says, stands in the position of a description: it describes the muḥsinīn already named. He allows two further readings of the case ending: the first cuts the phrase off to begin afresh, they are those who; the second supplies an implied I mean. Each reading lands in the same place. The verse is not introducing a new party of people; it is telling you what the doers of good are made of.",
            "bn": "কুরতুবী এখানে ব্যাকরণে একটু থামেন, কারণ অর্থটা ব্যাকরণের ভেতরেই আছে। তিনি বলেন, আয়াতের প্রথম শব্দ আল্লাযীনা, অর্থাৎ যারা, বিশেষণের জায়গায় বসেছে: আগে যাদের সৎকর্মশীল বলা হলো, এ শব্দ তাদেরই পরিচয় দিচ্ছে। শব্দের ই'রাব নিয়ে তিনি আরও দুটি পাঠ মেনে নেন। একটিতে বাক্যটা আলাদা হয়ে নতুন করে শুরু হয়: তারা হলো সেই লোক, যারা...। অন্যটিতে একটা কথা উহ্য থাকে: আমি বোঝাচ্ছি...। যে পাঠই ধরুন, অর্থ একই জায়গায় গিয়ে দাঁড়ায়। আয়াত নতুন কোনো দলের কথা বলছে না, বলছে সৎকর্মশীলেরা কী দিয়ে গড়া।"
          },
          {
            "en": "This matters for how the verse is read. It is tempting to treat establishing prayer and giving zakāh as a checklist of duties, items to be ticked. But al-Qurtubi's grammar makes them a portrait of a kind of person, the muḥsin of the verse before (31:3). Iḥsān, doing good with excellence, is not an extra station reached after the duties; it is the quality of someone whose prayer, giving and certainty hang together. Al-Qurtubi adds that he has already treated these words in Sūrat al-Baqara, where closely similar words first appear.",
            "bn": "আয়াতটা কীভাবে পড়বেন, তা এর ওপর অনেকখানি নির্ভর করে। নামাজ কায়েম আর যাকাত দেওয়াকে দায়িত্বের একটা তালিকা ভেবে ফেলা সহজ, যেন একটা একটা করে টিক দিয়ে শেষ করার কাজ। কিন্তু কুরতুবীর ব্যাকরণ এগুলোকে বানায় এক ধরনের মানুষের ছবি, আগের আয়াতের সেই সৎকর্মশীলের ছবি (৩১:৩)। ইহসান মানে সুন্দরভাবে, যত্ন নিয়ে ভালো কাজ করা। দায়িত্ব সেরে তারপর পৌঁছানোর মতো বাড়তি কোনো স্তর এটা নয়; এ হলো এমন মানুষের গুণ, যার নামাজ, দান আর দৃঢ় বিশ্বাস একসূত্রে গাঁথা। কুরতুবী আরও জানান, এ শব্দগুলো নিয়ে তিনি আগেই সূরা বাকারায় আলোচনা করেছেন, যেখানে প্রায় একই কথা প্রথম এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer Held to Its Limits",
          "bn": "সীমার ভেতরে নামাজ"
        },
        "p": [
          {
            "en": "The verb for prayer here is yuqīmūna, from a root meaning to make something stand straight. The Qurʾān does not say they pray; it says they establish prayer, hold it upright. At-Tabari reads it as establishing the obligatory prayer within its limits, and Ibn Kathir expands the thought: its limits and its times, together with the regular and occasional voluntary prayers that cluster around it. Al-Muyassar puts it plainly, that they perform it complete, in its proper times. The word has been unfolded at length elsewhere in this collection, at 29:45; here it is enough to notice that it asks for more than the motions.",
            "bn": "এখানে নামাজের জন্য যে ক্রিয়া এসেছে, তা ইউকীমূনা। এর ধাতুর অর্থ কোনো কিছুকে সোজা করে দাঁড় করানো। কুরআন বলছে না যে তারা নামাজ পড়ে; বলছে, তারা নামাজ কায়েম করে, সোজা করে দাঁড় করিয়ে রাখে। তাবারীর ব্যাখ্যায় এর মানে ফরজ নামাজকে তার সীমার ভেতরে কায়েম করা। ইবনে কাসীর কথাটা আরও খুলে বলেন: নামাজের সীমা আর সময় মেনে চলা, সেই সঙ্গে তাকে ঘিরে থাকা নিয়মিত ও মাঝেমধ্যের নফল নামাজও। মুয়াসসার সোজা ভাষায় বলেন, তারা নামাজ পুরোপুরি আদায় করে, ঠিক সময়ে। এই সংকলনে ২৯:৪৫ আয়াতে শব্দটি নিয়ে বিস্তারিত আলোচনা আছে। এখানে শুধু এটুকু খেয়াল করলেই চলে: কায়েম করা মানে কেবল ওঠাবসার চেয়ে বেশি কিছু।"
          },
          {
            "en": "To establish a thing is to set it up so it stands on its own and does not fall the moment you walk away. A prayer established is woven into the day at its fixed hours, performed in its proper form, and not dropped when life grows busy. At-Tabari's phrase, within its limits, guards both ends: not less than the prayer requires, and not a private invention beyond it. The doer of good is not the person who prays when the mood takes him, but the person whose prayer stands whether the mood is there or not.",
            "bn": "কোনো কিছু কায়েম করা মানে এমনভাবে দাঁড় করানো যে তা নিজের পায়ে দাঁড়িয়ে থাকে, আপনি সরে গেলেই পড়ে যায় না। কায়েম করা নামাজ দিনের ভেতরে গাঁথা থাকে তার নির্দিষ্ট সময়ে, আদায় হয় সঠিক আকারে, জীবন ব্যস্ত হলেও ফেলে রাখা হয় না। তাবারীর কথা, তার সীমার ভেতরে, দুই দিকই পাহারা দেয়: নামাজ যতটুকু চায় তার কম নয়, আবার তার বাইরে নিজের বানানো কিছুও নয়। সৎকর্মশীল সেই লোক নয় যে মন চাইলে নামাজ পড়ে, বরং সেই লোক যার নামাজ দাঁড়িয়ে থাকে মন থাকুক বা না থাকুক।"
          }
        ]
      },
      {
        "h": {
          "en": "Wealth Handed Over",
          "bn": "হাত থেকে বেরোনো সম্পদ"
        },
        "p": [
          {
            "en": "Zakāh is the second stroke, and it moves the worship from the body to the wallet. At-Tabari describes it as the portion Allah has made obligatory in people's wealth, given to those He appointed to receive it. Ibn Kathir names the recipients, the deserving, and adds a further mark of these people: they join the ties of kinship, reaching their relatives alongside the poor. Giving, in his reading, is not a transaction closed at the mosque door but a disposition that reaches outward into the whole web of a person's relations.",
            "bn": "যাকাত দ্বিতীয় আঁচড়। এখানে ইবাদত শরীর থেকে সরে আসে পকেটে। তাবারী বলেন, এ হলো মানুষের সম্পদে আল্লাহর ফরজ করে দেওয়া অংশ, যা তিনি যাদের প্রাপ্য করেছেন তাদের হাতে পৌঁছে দিতে হয়। ইবনে কাসীর প্রাপকদের পরিচয় দেন: তারা হকদার। সেই সঙ্গে এই মানুষদের আরেকটি চিহ্নও তিনি উল্লেখ করেন: তারা আত্মীয়তার সম্পর্ক রক্ষা করে, অভাবীদের পাশাপাশি নিজের আত্মীয়স্বজনের কাছেও পৌঁছায়। তাঁর ব্যাখ্যায় দান এমন কোনো লেনদেন নয়, যা মসজিদের দরজায় চুকে যায়। এ এক স্বভাব, যা মানুষের সব সম্পর্কের ভেতর ছড়িয়ে পড়ে।"
          },
          {
            "en": "As-Saʿdī reads the deeper work the gift does. Zakāh, he says, purifies whoever gives it from mean and grasping traits, and at once benefits his Muslim brother and meets his need. In the act, a servant shows that he loves Allah more than he loves his money, for he takes out of his wealth the thing he is fond of in favour of what he is fonder of still, the pleasure of his Lord. The word zakāh itself carries this sense of purifying and of growth; what leaves the hand cleans the heart.",
            "bn": "দান ভেতরে ভেতরে কী কাজ করে, সাদী তা দেখান। তাঁর কথায়, যাকাত দাতাকে কৃপণতা আর লোভী স্বভাব থেকে পাক করে, আবার একই সঙ্গে তার মুসলিম ভাইয়ের উপকার করে, তার অভাব মেটায়। এই আমলের মধ্য দিয়ে বান্দা দেখিয়ে দেয় যে সে টাকার চেয়ে আল্লাহকে বেশি ভালোবাসে। কারণ নিজের প্রিয় সম্পদ সে বের করে দেয় তার চেয়েও প্রিয় একটা কিছুর জন্য, আর তা হলো রবের সন্তুষ্টি। যাকাত শব্দের মধ্যেই আছে পবিত্র করা আর বেড়ে ওঠার অর্থ: হাত থেকে যা বেরিয়ে যায়, তা অন্তরকে পরিষ্কার করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Enjoined in Makkah",
          "bn": "হুকুম এসেছিল মক্কাতেই"
        },
        "p": [
          {
            "en": "There is a historical surprise folded into this verse. Sūrat Luqmān is Makkan, revealed before the migration to Madīnah, and yet it commands zakāh. Maʿārif al-Qurʾān draws the lesson out: the original injunction to give zakāh had already come down in Makkah, well before the Hijra. What belongs to the second year after the Hijra is not the command itself but its administration, the fixing of the thresholds, the set amounts, and the collection and disbursement organised by the Islamic state. The duty to give preceded the machinery for measuring it.",
            "bn": "এই আয়াতের ভেতরে ইতিহাসের একটা চমক লুকিয়ে আছে। সূরা লুকমান মক্কী সূরা, মদীনায় হিজরতের আগে নাজিল হয়েছে। অথচ এতে যাকাতের হুকুম আছে। মাআরিফুল কুরআন এখান থেকে শিক্ষাটা বের করে আনে: যাকাত দেওয়ার মূল হুকুম মক্কাতেই নাজিল হয়েছিল, হিজরতের অনেক আগে। হিজরতের দ্বিতীয় বছরে যা এসেছে, তা হুকুম নয়, তার ব্যবস্থাপনা: নিসাব ঠিক করা, কত দিতে হবে তা নির্ধারণ করা, আর ইসলামি রাষ্ট্রের হাতে আদায় ও বণ্টনের গোছানো ব্যবস্থা। মাপজোখের ব্যবস্থা আসার আগেই দেওয়ার দায়িত্ব এসে গিয়েছিল।"
          },
          {
            "en": "The commentary finds the same conclusion in Ibn Kathir, who noted that al-Muzzammil, another early Makkan sūrah, likewise pairs establishing prayer with giving zakāh (73:20). From this Maʿārif draws a quiet rule: the way the Qurʾān sets prayer and zakāh side by side, again and again, mirrors the way their obligations took hold side by side. The bodily worship and the worship of wealth were never meant to travel apart; where the verses place them together, the believer's practice is to keep them together too.",
            "bn": "একই সিদ্ধান্ত মাআরিফ ইবনে কাসীরের কথাতেও খুঁজে পায়। ইবনে কাসীর লক্ষ করেছেন, সূরা মুযযাম্মিলও শুরুর দিকের আরেকটি মক্কী সূরা, আর সেখানেও নামাজ কায়েমের পাশে যাকাত দেওয়ার কথা জোড়া হয়ে এসেছে (৭৩:২০)। এ থেকে মাআরিফ চুপচাপ একটা নিয়ম বের করে: কুরআন যেমন বারবার নামাজ আর যাকাতকে পাশাপাশি রাখে, তেমনি এ দুটির ফরজ হওয়াও এসেছে পাশাপাশি। শরীরের ইবাদত আর সম্পদের ইবাদত কখনো আলাদা পথে চলার জন্য নয়। আয়াত যেখানে দুটিকে একসঙ্গে রেখেছে, মুমিনও তার আমলে দুটিকে একসঙ্গে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Root of Both",
          "bn": "দুটোর গোড়া"
        },
        "p": [
          {
            "en": "Now the third stroke, and the commentators treat it as the first in rank. As-Saʿdī opens his comment by saying the muḥsinīn are described first with complete knowledge, which is the yaqīn that compels action and the fear of Allah's punishment, so that they abandon His disobedience. Only then does he turn to their deeds. In his reading, certainty is not merely an item beside prayer and zakāh; it is the ground they grow from. He singles out the two deeds as excellent precisely because a sure heart stands behind them, and he calls that certainty the knowledge that necessitates the act.",
            "bn": "এবার তৃতীয় আঁচড়, আর তাফসীরকারেরা মর্যাদায় একেই প্রথম ধরেন। সাদী তাঁর আলোচনা শুরু করেন এভাবে: সৎকর্মশীলদের প্রথম পরিচয় পূর্ণ জ্ঞান। সেই জ্ঞান হলো এমন ইয়াকীন, যা মানুষকে আমলে টেনে নেয় আর আল্লাহর শাস্তির ভয় জাগায়; ফলে তারা তাঁর নাফরমানি ছেড়ে দেয়। এরপরই তিনি তাদের আমলের কথায় আসেন। তাঁর ব্যাখ্যায় দৃঢ় বিশ্বাস নামাজ আর যাকাতের পাশে আরেকটা জিনিস মাত্র নয়; এ হলো সেই মাটি, যেখান থেকে ওই দুটি আমল গজিয়ে ওঠে। দুটি আমলকে তিনি উৎকৃষ্ট বলেন ঠিক এ কারণেই যে এদের পেছনে আছে এক নিশ্চিত অন্তর। সেই দৃঢ় বিশ্বাসকে তিনি বলেন এমন জ্ঞান, যা আমলকে অনিবার্য করে তোলে।"
          },
          {
            "en": "What is this certainty certain of? At-Tabari answers from the words themselves: they establish prayer and give zakāh while being certain of Allah's recompense and reward in the Hereafter for whoever does so. Al-Muyassar sharpens it to the resurrection and the reckoning that follows. The Arabic word is yaqīn, and it names the highest grade of belief, knowledge so settled that no doubt disturbs it. It is a different thing from ẓann, mere supposition or likely guess. The muḥsin does not hope the Hereafter may be real; he knows it, the way he knows the ground he stands on.",
            "bn": "এই দৃঢ় বিশ্বাস কোন বিষয়ে? তাবারী জবাব দেন আয়াতের শব্দ থেকেই: তারা নামাজ কায়েম করে, যাকাত দেয়, আর মনে দৃঢ় বিশ্বাস রাখে যে যারা এমন করে, আখেরাতে আল্লাহ তাদের প্রতিদান ও পুরস্কার দেবেন। মুয়াসসার কথাটা আরও নির্দিষ্ট করে বলেন: পুনরুত্থান আর তার পরের হিসাব। আরবি শব্দটি ইয়াকীন। এ হলো বিশ্বাসের সবচেয়ে উঁচু স্তর, এমন পাকা জ্ঞান যাকে কোনো সন্দেহ নাড়াতে পারে না। যান্ন, অর্থাৎ ধারণা বা আন্দাজ, এর থেকে একেবারে আলাদা জিনিস। সৎকর্মশীল এমন আশা করে না যে আখেরাত হয়তো সত্যি; সে জানে, যেমন জানে পায়ের নিচে মাটি আছে।"
          },
          {
            "en": "The verse even builds the certainty into its shape. Where it could have said and they are certain of the Hereafter, it says, and they, of the Hereafter, they are certain, repeating the word they as if to press the point home. The doubling throws the whole weight onto these people and their conviction. It is a small grammatical emphasis with a large meaning: among all that can be said of the doers of good, the thing the verse will not let you miss is how sure they are of what is coming.",
            "bn": "আয়াত দৃঢ় বিশ্বাসটাকে তার গঠনের মধ্যেও বসিয়ে দিয়েছে। সহজভাবে বলা যেত, আর তারা আখেরাতে দৃঢ় বিশ্বাস রাখে। কিন্তু আয়াত বলে, আর তারা, আখেরাতের ব্যাপারে তারাই দৃঢ় বিশ্বাসী। 'তারা' শব্দটি দুবার এসে কথাটাকে আরও জোরালো করে। এতে পুরো ভার গিয়ে পড়ে এই মানুষদের ওপর, তাদের বিশ্বাসের দৃঢ়তার ওপর। ব্যাকরণের ছোট্ট একটা জোর, কিন্তু অর্থ বড়: সৎকর্মশীলদের সম্পর্কে যত কথাই বলা যাক, আয়াত যেটা কিছুতেই আপনার চোখ এড়াতে দেবে না, তা হলো সামনে যা আসছে সে ব্যাপারে তারা কতটা নিশ্চিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Gabriel's Three Questions",
          "bn": "জিবরীলের তিন প্রশ্ন"
        },
        "p": [
          {
            "en": "A single hadith gathers all three marks into a single scene, and it is sound, recorded by al-Bukhārī (no. 50). The Prophet ﷺ was sitting among people when a stranger came and questioned him. What is faith? To believe in Allah, His angels, the meeting with Him, His messengers, and to believe in the Resurrection. What is Islam? To worship Allah alone, to establish the prayer, to pay the obligatory zakāh, and to fast Ramadan. What is iḥsān? To worship Allah as though you see Him, for though you do not see Him, He sees you.",
            "bn": "একটিমাত্র হাদিস তিনটি চিহ্নকেই এক দৃশ্যে জড়ো করেছে। হাদিসটি সহীহ, বুখারি বর্ণনা করেছেন (নং ৫০)। নবী ﷺ লোকজনের মাঝে বসে ছিলেন, এমন সময় এক অচেনা লোক এসে তাঁকে প্রশ্ন করলেন। ঈমান কী? আল্লাহ, তাঁর ফেরেশতা, তাঁর সাক্ষাৎ আর তাঁর রাসূলদের প্রতি বিশ্বাস রাখা, আর পুনরুত্থানে বিশ্বাস রাখা। ইসলাম কী? এক আল্লাহর ইবাদত করা, নামাজ কায়েম করা, ফরজ যাকাত আদায় করা আর রমজানের রোজা রাখা। ইহসান কী? আল্লাহর ইবাদত এমনভাবে করা যেন তুমি তাঁকে দেখছ; কারণ তুমি তাঁকে না দেখলেও তিনি তোমাকে দেখছেন।"
          },
          {
            "en": "Line up that answer with our verse. Islam, as the Prophet ﷺ defined it, is built on establishing prayer and paying zakāh, the two visible strokes of 31:4. Faith includes believing in the Resurrection, which is the yaqīn of the Hereafter, the third stroke. And iḥsān, the very quality the sūrah opened by praising in the muḥsinīn (31:3), is defined here as worship lived under the gaze of a God you are sure is watching. The hadith is, in effect, the verse unfolded into a conversation.",
            "bn": "এবার এই জবাবগুলো আমাদের আয়াতের পাশে রেখে দেখুন। নবী ﷺ ইসলামের যে পরিচয় দিলেন, তার ভিত্তি নামাজ কায়েম আর যাকাত আদায়, অর্থাৎ ৩১:৪-এর চোখে দেখা দুটি আঁচড়। ঈমানের মধ্যে আছে পুনরুত্থানে বিশ্বাস, আর সেটাই আখেরাতের ইয়াকীন, তৃতীয় আঁচড়। আর ইহসান, সূরার শুরুতে সৎকর্মশীলদের যে গুণের প্রশংসা করা হয়েছিল (৩১:৩), হাদিসে তার মানে দাঁড়াল: এমনভাবে ইবাদত করা যেন আল্লাহ দেখছেন, আর বান্দা সে ব্যাপারে নিশ্চিত। আসলে হাদিসটি যেন আয়াতটিকেই একটা কথোপকথনে খুলে দিয়েছে।"
          },
          {
            "en": "Then comes the detail that ties the knot. After the stranger left, the Prophet ﷺ said he was Gabriel, come to teach the people their religion, and he sealed the lesson by reciting a verse, with Allah is the knowledge of the Hour (31:34), from this very sūrah of Luqmān. The conversation that defines iḥsān ends on a line from the sūrah whose opening defines the muḥsin. Faith, Islam and excellence, and beneath them all the certainty of the Hour, meet in a single teaching, inside a single chapter.",
            "bn": "এরপর আসে সেই খুঁটিনাটি, যা সবকিছুকে এক সুতোয় বেঁধে দেয়। অচেনা লোকটি চলে যাওয়ার পর নবী ﷺ জানালেন, তিনি ছিলেন জিবরীল (আঃ), মানুষকে তাদের দ্বীন শেখাতে এসেছিলেন। আর একটি আয়াত তিলাওয়াত করে তিনি শিক্ষাটা শেষ করলেন: নিশ্চয় কিয়ামতের জ্ঞান আল্লাহরই কাছে (৩১:৩৪)। আয়াতটি এই সূরা লুকমানেরই। যে কথোপকথন ইহসানের মানে বুঝিয়ে দেয়, তা শেষ হলো সেই সূরার একটি আয়াতে, যে সূরা শুরুতেই সৎকর্মশীলের পরিচয় দিয়েছে। ঈমান, ইসলাম আর ইহসান, আর এ সবের তলায় কিয়ামতের দৃঢ় বিশ্বাস: সব মিলে গেল একটি শিক্ষায়, একটি সূরার ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "When Certainty Shows",
          "bn": "নিশ্চয়তা যখন দেখা দেয়"
        },
        "p": [
          {
            "en": "Put the three together and a pattern appears. The outward acts are what a watcher sees, but the certainty is what keeps them from going hollow. Ibn Kathir notes it in the doers of good: they sought Allah's reward for their deeds and did not perform them for show, wanting neither reward nor thanks from people. A prayer offered to be seen, a gift given for a name, is an outward stroke with no inward root. What makes the act the act of a muḥsin is the sure heart underneath, answering to a Lord it does not doubt.",
            "bn": "তিনটিকে একসঙ্গে রাখলে একটা ধরন চোখে পড়ে। বাইরের আমল মানুষ দেখতে পায়, কিন্তু ভেতরের দৃঢ় বিশ্বাসই সেগুলোকে ফাঁপা হয়ে যেতে দেয় না। ইবনে কাসীর সৎকর্মশীলদের মধ্যে এ কথাটাই লক্ষ করেন: তারা নিজেদের আমলের জন্য আল্লাহর কাছে প্রতিদান চেয়েছে, লোক দেখানোর জন্য করেনি; মানুষের কাছে কোনো বিনিময় বা কৃতজ্ঞতা চায়নি। লোক দেখানো নামাজ, নাম কেনার জন্য দেওয়া দান হলো বাইরের এমন আঁচড়, যার ভেতরে কোনো শিকড় নেই। আমলকে সৎকর্মশীলের আমল বানায় ভেতরের সেই নিশ্চিত অন্তর, যে এমন এক রবের কাছে জবাব দেয়, যাঁকে নিয়ে তার মনে কোনো সন্দেহ নেই।"
          },
          {
            "en": "That is the quiet challenge the verse hands the reader. It is not hard to keep a prayer going, or to give, for a season, on habit or on the eyes of others. The question is whether the certainty is there underneath, strong enough to hold the acts up when habit fades and the eyes of others turn away. Grow sure of the Hereafter, as these doers of good were sure, and prayer and zakāh follow and last. Let the certainty thin, and the finest outward practice is a portrait with nothing behind the eyes.",
            "bn": "আয়াতটি পাঠকের সামনে নিঃশব্দে এই চ্যালেঞ্জটাই রাখে। অভ্যাসের জোরে বা মানুষের চোখের সামনে কিছুদিন নামাজ চালিয়ে যাওয়া, কিংবা দান করা, কঠিন কিছু নয়। আসল প্রশ্ন হলো, ভেতরে সেই দৃঢ় বিশ্বাস আছে কি না। অভ্যাস ফিকে হয়ে গেলে, মানুষের চোখ অন্যদিকে ফিরে গেলেও কি সেই বিশ্বাস আমলগুলোকে ধরে রাখতে পারবে? এই সৎকর্মশীলেরা যেমন আখেরাতের ব্যাপারে নিশ্চিত ছিল, আপনিও তেমন নিশ্চিত হয়ে উঠুন; তাহলে নামাজ আর যাকাত আপনাআপনি আসবে, টিকেও থাকবে। আর বিশ্বাস যদি দুর্বল হতে থাকে, তাহলে বাইরের সবচেয়ে সুন্দর আমলও হয়ে যায় এমন এক ছবি, যার চোখের পেছনে কিছুই নেই।"
          }
        ]
      }
    ]
  },
  "31:10": {
    "sections": [
      {
        "h": {
          "en": "A Roof Over the Argument",
          "bn": "যুক্তির ওপর আকাশের ছাদ"
        },
        "p": [
          {
            "en": "By this point the sura has already drawn two kinds of people: the one who buys idle talk to lead others astray (31:6) and turns from the verses as if deaf (31:7), and the believers with their gardens of delight (31:8). Now the argument lifts its eyes. As-Sa'di reads the whole passage as Allah reciting to His servants traces of His power, wonders of His wisdom, and gifts of His mercy. The sky is where he begins.",
            "bn": "এ পর্যন্ত আসতে আসতে সূরা দুই ধরনের মানুষ এঁকে ফেলেছে। একজন অবান্তর কথা কিনে অন্যদের পথ থেকে সরায় (৩১:৬), আর আয়াত শুনলে এমনভাবে মুখ ফেরায় যেন সে বধির (৩১:৭)। অন্যদল ঈমানদার, তাদের জন্য নিয়ামতের জান্নাত (৩১:৮)। এবার যুক্তি চোখ তোলে উপরের দিকে। সাদী গোটা অংশটিকে পড়েন এভাবে: আল্লাহ তাঁর বান্দাদের শোনাচ্ছেন নিজ কুদরতের ছাপ, হিকমতের বিস্ময় আর রহমতের দান। শুরুটা হয় আকাশ দিয়ে।"
          },
          {
            "en": "What follows is not an abstract proof but a list of things anyone can check by looking: a sky with no visible support, ground held still, animals in every direction, rain, and crops. Each item is handed over as evidence, and the whole set is sealed two verses later with a single demand in 31:11: this is the creation of Allah, so show Me what those besides Him made. The believer is being taught how to argue, and also how to see.",
            "bn": "এরপর যা আসে, তা কোনো বিমূর্ত প্রমাণ নয়; বরং এমন কিছু জিনিসের তালিকা, যা যে কেউ তাকিয়েই যাচাই করতে পারে: খুঁটি ছাড়া আকাশ, স্থির মাটি, চারদিকে ছড়ানো প্রাণী, বৃষ্টি আর ফসল। প্রতিটি জিনিস প্রমাণ হিসেবে সামনে রাখা হয়েছে, আর দুই আয়াত পরে ৩১:১১-তে একটিমাত্র দাবি দিয়ে গোটা তালিকার ইতি টানা হয়েছে: এ তো আল্লাহর সৃষ্টি; এবার আমাকে দেখাও, তিনি ছাড়া অন্যরা কী সৃষ্টি করেছে। ঈমানদারকে এখানে শেখানো হচ্ছে কীভাবে যুক্তি দিতে হয়, আর কীভাবে দেখতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pillars You Cannot See",
          "bn": "যে খুঁটি চোখে পড়ে না"
        },
        "p": [
          {
            "en": "Bi-ghayri 'amadin tarawnaha: without pillars that you see. Al-Qurtubi lays out the grammar that makes the line carry two readings. If tarawnaha (that you see) is read as describing the pillars, then pillars may exist but go unseen. If it is read as describing the heavens, standing on its own, the sense is that He created the heavens with no pillars, as you plainly see. Al-Qurtubi notes that an-Nahhas and Makki preferred taking it as a fresh clause, with no pillars there at all.",
            "bn": "বিগাইরি আমাদিন তারাওনাহা: এমন খুঁটি ছাড়া, যা তোমরা দেখছ। কুরতুবী ব্যাকরণটা খুলে দেখান, কেন এই বাক্যের দুই রকম অর্থ হতে পারে। 'তারাওনাহা' (যা তোমরা দেখছ) যদি খুঁটির বিশেষণ হয়, তাহলে খুঁটি থাকতে পারে, শুধু চোখে পড়ে না। আর যদি এটা আকাশের বিশেষণ হয়, আলাদা একটি বাক্য হিসেবে, তাহলে অর্থ দাঁড়ায়: তিনি আকাশ বানিয়েছেন কোনো খুঁটি ছাড়াই, যেমনটা তোমরা নিজের চোখেই দেখছ। কুরতুবী জানান, নাহহাস আর মক্কী একে আলাদা বাক্য ধরাকেই পছন্দ করেছেন; সে অর্থে সেখানে খুঁটি বলে কিছুই নেই।"
          },
          {
            "en": "Behind the grammar stand named authorities, and at-Tabari records both. From Ibn 'Abbas, by way of 'Ikrimah, comes the reading that perhaps it has pillars you do not see; Mujahid says the same. 'Ikrimah puts it sharply: you see them as without pillars, yet they have pillars. Against this, al-Hasan and Qatadah hold that it is without pillars, you see them, and it has none. Ibn Kathir carries the two camps side by side and sends the reader to the start of Surah ar-Ra'd, where he had settled the matter.",
            "bn": "দুই পাঠের পেছনেই নাম ধরে বলা যায় এমন আলেমদের মত আছে, আর তাবারী দুই পক্ষের কথাই উল্লেখ করেছেন। ইবন আব্বাস থেকে ইকরিমার সূত্রে আসে এই পাঠ: হয়তো এর খুঁটি আছে, যা তোমরা দেখো না; মুজাহিদও একই কথা বলেন। ইকরিমা আরও ধারালোভাবে বলেন: তোমরা একে খুঁটিহীন দেখছ, অথচ এর খুঁটি আছে। এর বিপরীতে হাসান আর কাতাদার মত, এর কোনো খুঁটিই নেই, তোমরা তো দেখছই। ইবন কাসীর দুই পক্ষকেই পাশাপাশি রাখেন আর পাঠককে পাঠিয়ে দেন সূরা রাদের শুরুতে, যেখানে তিনি বিষয়টির মীমাংসা করেছেন।"
          },
          {
            "en": "As-Sa'di and al-Muyassar lean to the plainer sense: it has no pillars, for had it any, they would be seen, and it is only Allah's power that holds it in place. Ma'arif al-Qur'an sets out the same alternatives and then makes the point that settles the heart rather than the grammar: whichever reading you take, the verse is still pointing to one sign, that this vast, high roof stands with no column visible beneath it. The disagreement is real, and it does not weaken the sign.",
            "bn": "সাদী আর মুয়াসসার সহজ অর্থের দিকে ঝোঁকেন: আকাশের কোনো খুঁটি নেই; থাকলে তো দেখা যেত। একমাত্র আল্লাহর কুদরতই একে জায়গামতো ধরে রেখেছে। মাআরিফুল কুরআনও একই দুই মত তুলে ধরে, তারপর এমন একটা কথা বলে, যা ব্যাকরণের প্রশ্ন মেটায় না, মনকে শান্ত করে: যে পাঠই ধরুন, আয়াত একই নিদর্শনের দিকে ইশারা করছে। এই বিশাল উঁচু ছাদ দাঁড়িয়ে আছে, অথচ নিচে কোনো থাম চোখে পড়ে না। মতভেদ সত্যিই আছে, কিন্তু তাতে নিদর্শনটি একটুও দুর্বল হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Mountains That Steady Us",
          "bn": "যে পাহাড় স্থির রাখে"
        },
        "p": [
          {
            "en": "And has cast into the earth firm mountains, lest it sway with you. At-Tabari explains rawasi as the fixed mountains set on the earth's back, and reads lest it sway with you as lest it shake you, tipping neither right nor left but settling under you. He quotes Qatadah: He made it firm with the mountains, and without that it would never have kept any creature settled upon it. The picture is an anchor, not a theory about how the ground was made.",
            "bn": "আর তিনি পৃথিবীতে বসিয়ে দিয়েছেন অটল পাহাড়, যাতে তা তোমাদের নিয়ে দুলে না ওঠে। তাবারী 'রাওয়াসি' বলতে বোঝান মাটির পিঠে বসানো স্থির পাহাড়, আর 'যাতে তোমাদের নিয়ে দুলে না ওঠে' পড়েন এভাবে: যাতে তা তোমাদের নাড়িয়ে না দেয়, ডানে-বাঁয়ে না হেলে বরং তোমাদের নিয়ে থিতু থাকে। তিনি কাতাদার কথা তুলে ধরেন: পাহাড় দিয়ে তিনি একে স্থির করেছেন, নইলে এর উপর কোনো প্রাণীকে থিতু রাখা যেত না। ছবিটা নোঙরের, মাটি কীভাবে বানানো হলো তার কোনো তত্ত্ব নয়।"
          },
          {
            "en": "Al-Qurtubi notes the grammar once more: lest it sway stands for out of dislike that it should sway, while the Kufan grammarians read it as so that it would not sway. Ibn Kathir adds weight to the image: the mountains steady the earth and press it down so it does not lurch with its people over the water. As-Sa'di draws the plain conclusion that without the firm mountains the earth would reel and never rest for those who live on it.",
            "bn": "কুরতুবী আবারও ব্যাকরণটা ধরিয়ে দেন: 'যাতে দুলে না ওঠে' আসলে 'দুলে ওঠাকে অপছন্দ করে' অর্থে, আর কূফার ব্যাকরণবিদরা পড়েন 'যেন তা দুলে না ওঠে' অর্থে। ইবন কাসীর ছবিটায় আরও ভার যোগ করেন: পাহাড় মাটিকে স্থির করে আর চেপে ধরে, যাতে পানির উপরে তা নিজের অধিবাসীদের নিয়ে টলমল না করে। সাদী সোজা উপসংহার টানেন: অটল পাহাড় না থাকলে মাটি দুলত, আর যারা তার উপর বাস করে তাদের নিয়ে কখনো থিতু হতো না।"
          },
          {
            "en": "There is a mercy worth naming here. A still floor is something we only notice when it moves. The verse asks the reader to feel the steadiness that carries an ordinary day, the ground that stays put while we walk, sleep, and build on it, and to trace it back to a deliberate act of its Maker. The mountains are named not as scenery but as service. What we take for the baseline of life is itself a gift that was placed.",
            "bn": "এখানে একটা রহমতের কথা আলাদা করে বলা দরকার। পায়ের নিচের মাটি যে স্থির, তা আমরা টের পাই কেবল যখন সেটা নড়ে ওঠে। আয়াত পাঠককে বলছে সেই স্থিরতাটা অনুভব করতে, যার ওপর ভর করে একটা সাধারণ দিন কেটে যায়। আমরা হাঁটি, ঘুমাই, ঘর বানাই, আর মাটি জায়গামতো থাকে। আয়াত চায়, আমরা এই স্থিরতাকে তার স্রষ্টার এক সুচিন্তিত কাজ বলে চিনি। পাহাড়ের কথা এখানে দৃশ্যের শোভা হিসেবে আসেনি, এসেছে আমাদের সেবায় রাখা জিনিস হিসেবে। জীবনের যে ভিতকে আমরা স্বাভাবিক বলে ধরে নিই, সেটাও আসলে বসিয়ে দেওয়া এক দান।"
          }
        ]
      },
      {
        "h": {
          "en": "Creatures Beyond Counting",
          "bn": "গুনে শেষ না হওয়া প্রাণী"
        },
        "p": [
          {
            "en": "And scattered in it every kind of creature. The verb baththa means to spread and disperse widely. At-Tabari explains dabba as every kind of moving thing: some, he notes, define it as whatever eats and drinks, but to him it is everything that crawls on the earth. The word sweeps in the small and the large, the seen and the barely seen, every animal strewn across a world wide enough to hold them all. Nothing in the list is decorative; each creature is itself a made thing.",
            "bn": "আর তিনি তাতে ছড়িয়ে দিয়েছেন সব ধরনের জীবজন্তু। 'বাসসা' ক্রিয়ার মানে চারদিকে ছড়িয়ে দেওয়া। তাবারী বলেন, 'দাব্বা' মানে চলাফেরা করে এমন সব প্রাণী। তিনি জানান, কেউ কেউ বলেন দাব্বা হলো যা খায় আর পান করে; তবে তাঁর মতে মাটির ওপর চলে বেড়ায় এমন সবই দাব্বা। শব্দটি ছোট-বড়, চোখে পড়ে এমন আর প্রায় চোখেই পড়ে না এমন, সব প্রাণীকে ধরে ফেলে। প্রতিটি প্রাণী ছড়িয়ে আছে এমন এক দুনিয়ায়, যা সবাইকে জায়গা দেওয়ার মতো প্রশস্ত। এই তালিকার কিছুই শুধু শোভা নয়; প্রতিটি প্রাণী নিজেই একেকটি সৃষ্টি।"
          },
          {
            "en": "Ibn Kathir draws out the wonder in the phrase: He placed on the earth kinds of animals whose number, shapes, and colors are known to none but the One who created them. The variety itself is the argument. As-Sa'di adds the other half, that these creatures are made subject to the children of Adam, serving their interests and needs. So the same scattering is at once a display of boundless power and a provision set in place for people, long before any person asked.",
            "bn": "ইবন কাসীর বাক্যটির ভেতরের বিস্ময় টেনে বের করেন: তিনি মাটিতে রেখেছেন এমন সব প্রাণী, যাদের সংখ্যা, আকার আর রং একমাত্র তাদের স্রষ্টা ছাড়া কারও জানা নেই। এই বৈচিত্র্যই যুক্তি। সাদী যোগ করেন বাকি অর্ধেকটা: এই প্রাণীদের বানানো হয়েছে আদম-সন্তানের অধীন করে, তাদের কল্যাণ আর প্রয়োজনের সেবায়। তাই একই ছড়িয়ে দেওয়া একদিকে অসীম কুদরতের প্রদর্শন, আবার মানুষের জন্য আগেভাগে বসিয়ে রাখা রিজিক, কোনো মানুষ চাওয়ার বহু আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Water and Noble Growth",
          "bn": "পানি আর কল্যাণকর ফসল"
        },
        "p": [
          {
            "en": "And We sent down water from the sky and made grow in it every noble kind. Ibn Kathir reads the turn carefully: having established that He is the Creator, Allah now reminds us that He is the Provider. As-Sa'di makes the link explicit: once the creatures were scattered across the earth, they would need food to live, so down came blessed water. The grammar even shifts from He created to We sent down, drawing the hearer closer, as if the rain were handed over in person.",
            "bn": "আর আমি আকাশ থেকে পানি নামিয়েছি আর তাতে উদ্গত করেছি সব কল্যাণকর জাত। ইবন কাসীর মোড়টা মন দিয়ে পড়েন: তিনি যে স্রষ্টা তা প্রতিষ্ঠা করার পর আল্লাহ এবার মনে করিয়ে দেন যে তিনিই রিজিকদাতা। সাদী সম্পর্কটা খোলাসা করেন: প্রাণীরা মাটিতে ছড়িয়ে পড়ার পর বাঁচার জন্য তাদের খাবার লাগবে, তাই নেমে এল বরকতি পানি। ব্যাকরণও বদলে যায় 'তিনি সৃষ্টি করেছেন' থেকে 'আমি নামিয়েছি'-তে, শ্রোতাকে কাছে টেনে, যেন বৃষ্টিটা হাতে হাতে তুলে দেওয়া হচ্ছে।"
          },
          {
            "en": "The phrase min kulli zawjin karim repays a close look. Zawj means a kind, and also a pair; Ibn Kathir in the abridged commentary renders it as produce of every goodly kind, in pairs. Karim carries the sense of generous and noble. At-Tabari glosses it as hasan an-nibta, beautiful in its growth, and quotes Qatadah that it simply means good. Al-Qurtubi relays from Ibn 'Abbas that it is every beautiful color. The soil yields nothing drab; what rises is both useful and good to behold.",
            "bn": "'মিন কুল্লি জাওজিন কারীম' কথাটা একটু মন দিয়ে দেখার মতো। 'জাওজ' মানে জাত, আবার জোড়াও। ইবন কাসীরের সংক্ষিপ্ত তাফসীরে এর অর্থ করা হয়েছে: প্রতিটি উৎকৃষ্ট জাতের ফসল, জোড়ায় জোড়ায়। 'কারীম' শব্দে আছে উদার আর সম্মানিত হওয়ার ভাব। তাবারী এর ব্যাখ্যা করেন 'হাসানুন নিবতা', অর্থাৎ যার বেড়ে ওঠা সুন্দর; আর কাতাদা থেকে আনেন, এর মানে সোজা কথায় ভালো। কুরতুবী ইবন আব্বাস থেকে জানান, এর মানে প্রতিটি সুন্দর রঙ। মাটি কোনো মলিন জিনিস ফলায় না; যা গজায়, তা কাজেরও, দেখতেও সুন্দর।"
          },
          {
            "en": "As-Sa'di completes the scene: the water is blessed, and what grows from it is lovely to look at, beneficial, and full of blessing, so the scattered creatures graze in it and every animal finds its rest. Al-Muyassar keeps the same note, calling the growth delightful, useful, and fair to the eye. The circle closes: water from above, plants from below, creatures fed, people provided for. One Hand moves through every link, and the verse has let us watch it work.",
            "bn": "সাদী দৃশ্যটা পূর্ণ করেন: পানি বরকতময়, আর তা থেকে যা গজায় তা দেখতে মনোরম, উপকারী আর বরকতে ভরা। ছড়িয়ে থাকা প্রাণীরা তাতে চরে বেড়ায়, প্রতিটি জীব সেখানে বিশ্রাম পায়। মুয়াসসারও একই সুরে এই ফসলকে বলেন আনন্দদায়ক, উপকারী আর চোখজুড়ানো। বৃত্তটা এভাবে পূর্ণ হয়: ওপর থেকে পানি, নিচ থেকে গাছপালা, প্রাণীর খাবার, মানুষের রিজিক। প্রতিটি ধাপে একই হাতের কাজ, আর আয়াত সেই কাজ আমাদের চোখের সামনে দেখিয়ে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "People as Produce",
          "bn": "মানুষও মাটির ফসল"
        },
        "p": [
          {
            "en": "Two commentators carry a striking reading of the noble kind. Both Ibn Kathir and al-Qurtubi relay from ash-Sha'bi that people, too, are produce of the earth, grown from its dust. On this reading the word stretches to cover us: whoever ends in the Garden is the noble kind, karim, and whoever ends in the Fire is the base kind, la'im. The point is not a verdict on anyone alive; it reads the harvest of plants as a quiet figure for the harvest of souls.",
            "bn": "'কল্যাণকর জাত' নিয়ে দুজন তাফসীরকার একটা চমকপ্রদ ব্যাখ্যা এনেছেন। ইবন কাসীর ও কুরতুবী দুজনেই শাবি থেকে বর্ণনা করেন, মানুষও মাটির ফসল, মাটির ধুলো থেকেই তার জন্ম। এই ব্যাখ্যায় শব্দটির আওতায় আমরাও পড়ি: যার শেষ ঠিকানা জান্নাত, সে-ই কল্যাণকর জাত, 'কারীম'; আর যার শেষ ঠিকানা জাহান্নাম, সে নিকৃষ্ট জাত, 'লাইম'। এটা কোনো জীবিত মানুষের ব্যাপারে রায় নয়। গাছের ফসলকে এখানে দেখা হচ্ছে আত্মার ফসলের এক নিঃশব্দ উপমা হিসেবে।"
          },
          {
            "en": "Al-Qurtubi notes a second line as well, that the human seed itself is formed from dust, and that the plain wording of the Qur'an supports this. Either way the lesson lands gently. The same rain that lifts a crop of either good or poor quality is set before every person, and what we finally become is the fruit we grow toward. The verse that began with the vast sky has narrowed, without a jolt, to the state of a single heart.",
            "bn": "কুরতুবী আরেকটি ব্যাখ্যাও উল্লেখ করেন: মানুষের শুক্রবিন্দু নিজেই মাটি থেকে তৈরি, আর কুরআনের স্পষ্ট শব্দও এর পক্ষে। যেভাবেই দেখি, শিক্ষাটা আসে কোমলভাবে। যে বৃষ্টিতে ভালো ফসলও ফলে, খারাপ ফসলও, সেই একই বৃষ্টি প্রত্যেক মানুষের সামনে রাখা আছে। শেষ পর্যন্ত আমরা যা হয়ে উঠি, তা সেই ফল, যার দিকে আমরা নিজেদের বাড়িয়ে তুলি। যে আয়াত শুরু হয়েছিল বিশাল আকাশ দিয়ে, তা কোনো ঝাঁকুনি ছাড়াই এসে থেমেছে একটি হৃদয়ের অবস্থায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Sign Elsewhere",
          "bn": "একই নিদর্শন অন্য সূরায়"
        },
        "p": [
          {
            "en": "This is not the only place the Qur'an raises a pillarless sky as proof. Ma'arif al-Qur'an points to 13:2, Allah is the One who raised the heavens without pillars that you see, which opens Surah ar-Ra'd with the same image. Both Ibn Kathir, here and there, treat the two verses together and settle the grammar of the phrase at the earlier passage. Reading them side by side shows a habit of the Qur'an: it returns to the same sign in new settings, trusting that a true proof only deepens on a second hearing.",
            "bn": "খুঁটিহীন আকাশকে প্রমাণ হিসেবে কুরআন শুধু এখানেই আনেনি। মাআরিফুল কুরআন দেখিয়ে দেয় ১৩:২ আয়াত: 'আল্লাহ, যিনি আকাশকে উঁচু করেছেন খুঁটি ছাড়া, যা তোমরা দেখছ'। এই একই ছবি দিয়েই সূরা রাদ শুরু হয়। ইবন কাসীর এখানে আর সেখানে, দুই জায়গাতেই আয়াত দুটিকে একসঙ্গে আলোচনা করেন, আর বাক্যাংশটির ব্যাকরণের মীমাংসা করেন আগের জায়গাতেই। দুটি আয়াত পাশাপাশি পড়লে কুরআনের একটা রীতি চোখে পড়ে: নতুন প্রসঙ্গে কুরআন বারবার একই নিদর্শনে ফিরে আসে, কারণ সত্য প্রমাণ দ্বিতীয়বার শুনলে আরও গভীরে নামে।"
          },
          {
            "en": "On this verse the commentators lean on the plain evidence of creation rather than on narrations, and none of those consulted here attaches a hadith of the Prophet to it. That absence is itself instructive. The proof the verse offers needs no specialist to unlock it; it asks only open eyes and an honest mind. Anyone who has seen a sky, stood on steady ground, met an animal, or eaten from a plant already holds the evidence in hand. The verse simply asks them to read it.",
            "bn": "এই আয়াতের ব্যাখ্যায় তাফসীরকারেরা বর্ণনার চেয়ে সৃষ্টির খোলা প্রমাণের ওপরই ভর করেছেন। এখানে যাঁদের তাফসীর দেখা হয়েছে, তাঁদের কেউই এর সঙ্গে নবী ﷺ-এর কোনো হাদিস জুড়ে দেননি। এই না-থাকাটাও একটা শিক্ষা। আয়াতের প্রমাণ বুঝতে কোনো বিশেষজ্ঞ লাগে না; লাগে শুধু খোলা চোখ আর সৎ মন। যে কেউ আকাশ দেখেছে, স্থির মাটিতে দাঁড়িয়েছে, কোনো প্রাণী দেখেছে, কিংবা গাছের ফল-ফসল খেয়েছে, প্রমাণ তার হাতেই আছে। আয়াত শুধু বলছে, সেটা পড়ে দেখুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Then Show Me Yours",
          "bn": "এবার তোমারটা দেখাও"
        },
        "p": [
          {
            "en": "The next verse turns the whole list into a challenge: this is the creation of Allah, so show Me what those besides Him have made (31:11). Ibn Kathir explains that everything named, the heavens and earth and all between them, comes from His power alone, with no partner sharing in it, and so the idols are invited to produce a single thing of their own. They cannot. The verse ends by calling those who set up rivals plainly lost, not out of insult but as a statement of fact: they are looking away from the one source of everything they use.",
            "bn": "পরের আয়াত গোটা তালিকাটিকে এক চ্যালেঞ্জে বদলে দেয়: এ তো আল্লাহর সৃষ্টি, তাঁকে ছাড়া আর কেউ কী বানিয়েছে আমাকে দেখাও (৩১:১১)। ইবন কাসীর বলেন, যা কিছুর নাম নেওয়া হলো, আসমান-জমিন আর এর মাঝের সব, তা একমাত্র তাঁরই কুদরত থেকে, এতে কোনো শরিক নেই; তাই মূর্তিগুলোকে ডাকা হচ্ছে নিজেদের বানানো একটা জিনিস হাজির করতে। তারা পারে না। আয়াত শেষ হয় যারা শরিক দাঁড় করায় তাদের স্পষ্ট পথভ্রষ্ট বলে, গালি হিসেবে নয়, বরং এক সত্য কথা হিসেবে: তারা যা কিছু ব্যবহার করে তার একমাত্র উৎস থেকে মুখ ফিরিয়ে আছে।"
          },
          {
            "en": "So the verse leaves the reader with a practice, not just a doctrine. Walk out under the open sky, feel the ground hold, watch a bird or a crawling thing, notice bread come from grain, and let each of these carry the mind back to the Maker. The mushrik in the story had the same evidence and looked past it; the believer is asked to look again and keep looking. To read creation this way is the beginning of both gratitude and worship, which is exactly where the sura is taking us.",
            "bn": "তাই আয়াত পাঠকের হাতে শুধু একটা আকীদা নয়, একটা অভ্যাসও তুলে দেয়। খোলা আকাশের নিচে বেরিয়ে আসুন, অনুভব করুন পায়ের নিচের মাটি কেমন স্থির হয়ে আছে। একটা পাখি বা মাটিতে চলে বেড়ানো কোনো ছোট প্রাণীর দিকে তাকান। খেয়াল করুন, শস্য থেকে রুটি আসছে। আর প্রতিটি জিনিস দেখে মনকে স্রষ্টার দিকে ফিরে যেতে দিন। কাহিনির মুশরিকের সামনেও একই প্রমাণ ছিল, কিন্তু সে তা পাশ কাটিয়ে গেছে। ঈমানদারকে বলা হচ্ছে আবার তাকাতে, আর তাকিয়েই থাকতে। সৃষ্টিকে এভাবে পড়াই শুকরিয়া আর ইবাদত দুটিরই শুরু, আর সূরাটি আমাদের ঠিক সেদিকেই নিয়ে যাচ্ছে।"
          }
        ]
      }
    ]
  },
  "31:14": {
    "sections": [
      {
        "h": {
          "en": "An Interjection From Allah",
          "bn": "বাবার কথার মাঝে আল্লাহর কথা"
        },
        "p": [
          {
            "en": "The verse sits inside another speech. Surah Luqman is carrying the counsel of Luqman to his son — 31:13 has him warning against shirk, and his advice resumes at 31:16. Between the father's words, Allah Himself interjects: and We have enjoined upon man concerning his parents. The commentators note the placement: at the very moment a father is teaching his child tawhid, the Author of the Book steps in to teach the child what he owes his parents.",
            "bn": "আয়াতটি বসে আছে আরেকজনের কথার ভেতরে। সূরা লুকমানে এখানে চলছে ছেলের প্রতি লুকমানের উপদেশ। 31:13-এ তিনি ছেলেকে শিরক থেকে সাবধান করছেন, আর তাঁর উপদেশ আবার শুরু হয় 31:16-এ। বাবার কথার মাঝখানে স্বয়ং আল্লাহ বলে ওঠেন: আর আমি মানুষকে তার মা-বাবার ব্যাপারে নির্দেশ দিয়েছি। মুফাসসিরগণ জায়গাটা খেয়াল করেছেন। যে মুহূর্তে এক বাবা সন্তানকে তাওহিদ শেখাচ্ছেন, ঠিক তখনই যিনি এই কিতাব নাজিল করেছেন, তিনি নিজে এসে সন্তানকে শেখান, মা-বাবার কাছে তার ঋণ কতখানি।"
          },
          {
            "en": "The pairing runs deep in the Quran. 17:23 joins the command to worship Allah alone with excellence to parents in a single verse, and this verse will end by joining gratitude to Him with gratitude to them in a single breath. The two duties stand next to each other so often that the mufassirun treat the ordering as doctrine: after the right of Allah comes, immediately, the right of the parents.",
            "bn": "কুরআনে এই জুটি বারবার আসে। 17:23 একই আয়াতে একমাত্র আল্লাহর ইবাদতের হুকুমের সঙ্গে মা-বাবার প্রতি সদ্ব্যবহারের কথা জুড়ে দিয়েছে। আর এই আয়াতটিও শেষ হবে এক নিঃশ্বাসে আল্লাহর প্রতি কৃতজ্ঞতা আর মা-বাবার প্রতি কৃতজ্ঞতাকে মিলিয়ে। দুটি দায়িত্ব এত ঘন ঘন পাশাপাশি আসে যে মুফাসসিরগণ এই ক্রমকে আকীদার মর্যাদা দেন: আল্লাহর হকের ঠিক পরেই মা-বাবার হক।"
          }
        ]
      },
      {
        "h": {
          "en": "Weakness Upon Weakness",
          "bn": "দুর্বলতার ওপর দুর্বলতা"
        },
        "p": [
          {
            "en": "The verse gives the reason for the command in a compressed biography: his mother carried him, wahnan ala wahn — weakness upon weakness — and his weaning is in two years. Each stage of the pregnancy adds weight and takes strength; the wording stacks the cost, layer on layer. Then come roughly two further years of nursing, a figure the verse states plainly. 46:15 fills in the rest: she carried him in hardship and delivered him in hardship.",
            "bn": "আদেশের কারণটা আয়াত দেয় এক ছোট্ট জীবনকাহিনিতে: তার মা তাকে গর্ভে বহন করেছে ওয়াহনান আলা ওয়াহন, অর্থাৎ দুর্বলতার ওপর দুর্বলতা সয়ে, আর দুই বছরে তার দুধ ছাড়ানো হয়। গর্ভের প্রতিটি ধাপ ভার বাড়ায়, শক্তি কেড়ে নেয়; আয়াতের শব্দ সেই কষ্টকে স্তরে স্তরে সাজিয়ে দেখায়। এরপর আরও প্রায় দুই বছর দুধ খাওয়ানো, যে হিসাব আয়াত স্পষ্ট করেই বলেছে। 46:15 বাকিটুকু বলে দেয়: মা তাকে গর্ভে ধরেছে কষ্ট করে, আর প্রসব করেছে কষ্ট করে।"
          },
          {
            "en": "Notice who the verse foregrounds. Both parents are owed, but only the mother's cost is itemised, because only she paid this particular bill in her body. The Prophet ﷺ matched the emphasis: asked who most deserved his good companionship, he answered your mother, then again your mother, then again your mother, and only then your father — in the hadith agreed upon by al-Bukhari and Muslim.",
            "bn": "লক্ষ করুন, আয়াত কাকে সামনে আনছে। হক দুজনেরই, কিন্তু কষ্টের হিসাব আলাদা করে দেওয়া হয়েছে শুধু মায়ের। কারণ এই মূল্য কেবল তিনিই চুকিয়েছেন নিজের শরীর দিয়ে। নবী ﷺ-ও একই জোর দিয়েছেন। তাঁকে জিজ্ঞেস করা হলো, আমার উত্তম সাহচর্যের সবচেয়ে বেশি হকদার কে? তিনি বললেন, তোমার মা। তারপর আবার বললেন, তোমার মা। তারপর আবারও, তোমার মা। আর এরপর বললেন, তোমার বাবা। হাদিসটি বুখারি ও মুসলিম দুজনেই বর্ণনা করেছেন (মুত্তাফাকুন আলাইহি)।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Thanks in One Command",
          "bn": "এক আদেশে দুই কৃতজ্ঞতা"
        },
        "p": [
          {
            "en": "Then the command itself: an ushkur li wa li-walidayk — be grateful to Me and to your parents. One verb governs both objects. The commentators draw out the weight of the syntax: ingratitude to the parents sits in the same sentence as ingratitude to Allah. The parents were the means of your existence and the bearers of your helpless years; He was the Creator behind both. Thanking the Giver includes thanking the hands the gift arrived through.",
            "bn": "এরপর আসে আদেশটি: আন উশকুর লী ওয়া লি-ওয়ালিদাইক, আমার প্রতি আর তোমার মা-বাবার প্রতি কৃতজ্ঞ হও। একটিমাত্র ক্রিয়া দুজনের দিকেই গেছে। মুফাসসিরগণ এই গঠনের ওজনটা ধরিয়ে দেন: মা-বাবার প্রতি অকৃতজ্ঞতা আর আল্লাহর প্রতি অকৃতজ্ঞতা একই বাক্যে এসে বসেছে। মা-বাবা ছিলেন আপনার দুনিয়ায় আসার মাধ্যম, আপনার অসহায় বছরগুলোর ভার তাঁরাই বয়েছেন; আর দুটোর পেছনেই স্রষ্টা তিনি। দাতার শুকরিয়া আদায়ের মধ্যে সেই হাতগুলোর শুকরিয়াও পড়ে, যে হাত দিয়ে দানটা আপনার কাছে পৌঁছেছে।"
          },
          {
            "en": "The verse closes with ilayya al-masir: to Me is the final destination. The clause does two jobs. It sets a deadline — the account of how parents were treated is audited at the return. And it comforts — whatever a child could never repay, and the commentators agree the debt cannot be repaid in full, can still be carried to the One to whom all of them are returning, in the form of du'a.",
            "bn": "আয়াত শেষ হয় ইলাইয়াল মাসীর দিয়ে: আমারই কাছে শেষ গন্তব্য। এই ছোট্ট বাক্যাংশ দুটি কাজ করে। প্রথমত, একটা সময়সীমা বেঁধে দেয়: মা-বাবার সঙ্গে কেমন আচরণ করা হয়েছে, তার হিসাব হবে ফিরে যাওয়ার দিন। দ্বিতীয়ত, সান্ত্বনা দেয়। সন্তান যা কখনো শোধ করতে পারবে না, আর মুফাসসিরগণ একমত যে এ ঋণ পুরোপুরি শোধ করা যায় না, তা দোয়ার আকারে এখনো পৌঁছে দেওয়া যায় তাঁর কাছে, যাঁর দিকে সবাই ফিরে যাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Limit That Proves the Rule",
          "bn": "যে সীমা নিয়মকে প্রমাণ করে"
        },
        "p": [
          {
            "en": "The next verse, 31:15, supplies the one limit: if the parents strive to make you associate with Allah that of which you have no knowledge, do not obey them — and then, remarkably, accompany them in this world with kindness. Obedience has a ceiling; kindness does not. Even the parent campaigning against a child's faith retains the right to companionship and gentle treatment. Only the sin itself is refused.",
            "bn": "পরের আয়াত, 31:15, একটিমাত্র সীমা টেনে দেয়: মা-বাবা যদি তোমাকে চাপ দেয় আল্লাহর সঙ্গে এমন কিছু শরিক করতে, যে ব্যাপারে তোমার কোনো জ্ঞান নেই, তবে তাদের কথা মেনো না। আর তারপর, আশ্চর্য ব্যাপার, বলা হয়েছে: দুনিয়াতে তাদের সঙ্গে সদ্ভাবে থেকো। আনুগত্যের একটা সীমা আছে, সদাচরণের কোনো সীমা নেই। যে মা-বাবা সন্তানের ঈমানের বিরুদ্ধে লেগে আছেন, তাঁরাও সঙ্গ পাওয়ার আর কোমল আচরণের হক রাখেন। ফিরিয়ে দেওয়া হয় শুধু গুনাহের কাজটুকু।"
          },
          {
            "en": "Muslim relates the story behind the similar verse 29:8: when Sa'd ibn Abi Waqqas (RA) accepted Islam, his mother swore she would not eat or drink until he renounced it. He refused — telling her that if she had a hundred souls and they left her one by one, he would not abandon his religion — and revelation confirmed him: no obedience in shirk, while the bond itself stays.",
            "bn": "একই রকম আয়াত 29:8-এর পেছনের ঘটনাটি ইমাম মুসলিম বর্ণনা করেছেন। সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) ইসলাম গ্রহণ করলে তাঁর মা কসম করে বসেন, ছেলে ইসলাম না ছাড়া পর্যন্ত তিনি কিছু খাবেন না, পানও করবেন না। সা'দ রাজি হননি। মাকে বলেছিলেন, আপনার যদি একশটি প্রাণ থাকত আর একটা একটা করে সবগুলো বেরিয়ে যেত, তবুও আমি আমার দ্বীন ছাড়তাম না। আর ওহি তাঁর পক্ষেই এল: শিরকের ব্যাপারে কোনো আনুগত্য নেই, তবে মা-বাবার সঙ্গে সম্পর্ক অটুট থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Gratitude With a Deadline",
          "bn": "সময়সীমা বাঁধা কৃতজ্ঞতা"
        },
        "p": [
          {
            "en": "17:23-24 turns the duty into daily conduct for the season when the roles reverse: when parents reach old age, not even uff — the smallest sound of irritation; no repelling them; noble speech; the lowered wing of humility; and the du'a the Quran itself scripts: my Lord, have mercy on them as they raised me when I was small. The child who was once carried through weakness now carries, and the verse supplies the words for it.",
            "bn": "যখন ভূমিকা উল্টে যায়, সেই সময়ের জন্য 17:23-24 এই দায়িত্বকে প্রতিদিনের আচরণে নামিয়ে আনে। মা-বাবা বার্ধক্যে পৌঁছালে তাদের 'উফ' পর্যন্ত বলা যাবে না, বিরক্তির সবচেয়ে ছোট আওয়াজটুকুও নয়। তাদের ধমক দেওয়া যাবে না; কথা বলতে হবে সম্মান দিয়ে; বিনয়ের ডানা নামিয়ে দিতে হবে। আর কুরআন নিজেই দোয়াটা শিখিয়ে দিয়েছে: হে আমার রব, তাদের প্রতি রহম করুন, যেমন তারা শৈশবে আমাকে লালনপালন করেছেন। যে সন্তানকে একদিন দুর্বলতার মধ্যে বহন করা হয়েছিল, এখন সে-ই বহন করে, আর আয়াত তাকে মুখের কথাগুলোও জুগিয়ে দেয়।"
          },
          {
            "en": "The practice this verse asks for is concrete and current: service while they live, speech that honours, patience with their slowness, and du'a always. Gratitude to parents is the training ground of gratitude to Allah — the first giver a child ever perceives is a parent — and the verse binds the two so that neither can be performed while the other is abandoned. To Him is the destination; they, and we, are on the way there.",
            "bn": "এই আয়াত যে আমল চায়, তা একেবারে হাতে-কলমে, আর এখনই করার: তাঁরা বেঁচে থাকতে তাঁদের সেবা, সম্মান দিয়ে কথা বলা, তাঁদের ধীরগতিতে ধৈর্য রাখা, আর সবসময় দোয়া। মা-বাবার প্রতি কৃতজ্ঞতা দিয়েই আল্লাহর প্রতি কৃতজ্ঞতার অনুশীলন শুরু হয়, কারণ শিশু জীবনে প্রথম যে দাতাকে চেনে, তিনি তার মা বা বাবা। আয়াত দুটিকে এমনভাবে বেঁধে দিয়েছে যে একটিকে ছেড়ে অন্যটি পালন করা যায় না। ফিরে যেতে হবে তাঁরই কাছে; মা-বাবা আর আমরা, সবাই সেই পথের যাত্রী।"
          }
        ]
      }
    ]
  },
  "31:17-19": {
    "sections": [
      {
        "h": {
          "en": "A Father's Counsel",
          "bn": "এক পিতার উপদেশ"
        },
        "p": [
          {
            "en": "These verses close the counsel of Luqman to his son, a man the Quran describes in 31:12 as given wisdom. The series opens at 31:13, where he calls shirk a tremendous wrong, and passes through 31:16, where he teaches that even a deed the weight of a mustard seed, hidden in a rock or in the heavens or in the earth, will be brought forth by Allah. The son now knows whom to worship and that nothing escapes the reckoning. What follows is how to live in front of people.",
            "bn": "এই আয়াতগুলোতে ছেলের প্রতি লুকমানের উপদেশ শেষ হচ্ছে। লুকমান সেই মানুষ, যাঁকে কুরআন 31:12 আয়াতে হিকমত দেওয়ার কথা বলেছে। উপদেশ শুরু হয় 31:13-এ, যেখানে তিনি শিরককে বলেন মহা জুলুম। তারপর 31:16-এ তিনি শেখান: সরিষার দানা পরিমাণ কোনো কাজও যদি পাথরের ভেতরে, আসমানে বা যমীনে লুকানো থাকে, আল্লাহ তা হাজির করবেন। ছেলে এখন জানে কার ইবাদত করতে হবে, আর জানে হিসাব থেকে কিছুই বাদ পড়ে না। এবার শিক্ষা, মানুষের মাঝে কীভাবে চলতে হয়।"
          },
          {
            "en": "Two verses interrupt the counsel to add a command Luqman could not give himself: 31:14-15 order gratitude and kindness to parents while forbidding obedience to them in shirk. The commentators note the effect of the interruption — the father's authority is real but bounded, and the Author of the counsel is Allah, not Luqman. When the series resumes, it carries that weight: this is wisdom the Quran itself has endorsed and preserved for every parent teaching every child.",
            "bn": "উপদেশের মাঝখানে দুটি আয়াত এসে এমন একটি হুকুম যোগ করে, যা লুকমান নিজে দিতে পারতেন না: 31:14-15 মা-বাবার প্রতি কৃতজ্ঞতা ও সদাচরণের হুকুম দেয়, আবার শিরকের ব্যাপারে তাঁদের আনুগত্য নিষেধ করে। মুফাসসিরগণ এই বিরতির তাৎপর্য লক্ষ করেন। বাবার কর্তৃত্ব সত্যিই আছে, কিন্তু তার সীমা আছে; আর এই উপদেশের আসল উৎস আল্লাহ, লুকমান নন। তাই উপদেশ যখন আবার শুরু হয়, তার ওজন বেড়ে যায়। এ এমন হিকমত, যাকে কুরআন নিজে স্বীকৃতি দিয়েছে আর সংরক্ষণ করেছে, যাতে প্রত্যেক মা-বাবা তাঁদের সন্তানকে তা শেখাতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer, Duty, Patience",
          "bn": "নামাজ, দায়িত্ব, ধৈর্য"
        },
        "p": [
          {
            "en": "31:17 strings four commands in a deliberate order: establish the prayer, enjoin what is right, forbid what is wrong, and be patient over what befalls you. Prayer comes first because standing rightly before Allah precedes standing usefully among people. And patience is fastened directly to the commanding and forbidding, because the commentators note what experience confirms: whoever calls others to good and away from wrong will be resisted, and the cost was included in the assignment from the start.",
            "bn": "31:17 চারটি হুকুমকে ভেবেচিন্তে একটা ক্রমে সাজিয়েছে: নামাজ কায়েম করো, ভালো কাজের আদেশ দাও, মন্দ কাজে নিষেধ করো, আর তোমার ওপর যে বিপদ আসে তাতে ধৈর্য ধরো। নামাজ প্রথমে, কারণ মানুষের মাঝে কাজের মানুষ হয়ে দাঁড়ানোর আগে আল্লাহর সামনে ঠিকভাবে দাঁড়াতে হয়। আর ধৈর্যকে সরাসরি আদেশ-নিষেধের সঙ্গে বেঁধে দেওয়া হয়েছে। কারণ মুফাসসিরগণ যা বলেন, অভিজ্ঞতাও তা-ই বলে: যে মানুষকে ভালোর দিকে ডাকে আর মন্দ থেকে ফেরায়, সে বাধা পাবেই। এই মূল্যটা শুরু থেকেই দায়িত্বের অংশ।"
          },
          {
            "en": "The verse ends: indeed that is of the matters requiring resolve, 'azm al-umur. The phrase dignifies endurance. Patience here is not passivity but the resolve that keeps a person at their post after the pushback arrives. A father telling his son this is not preparing him for applause; he is preparing him for friction, and teaching him that friction endured for truth is itself a high matter.",
            "bn": "আয়াত শেষ হয়: নিশ্চয় এটা দৃঢ় সংকল্পের কাজ, 'আযমুল উমূর। এই কথায় সহ্য করাকে মর্যাদা দেওয়া হয়েছে। এখানে ধৈর্য মানে হাত গুটিয়ে বসে থাকা নয়; বরং সেই মনের জোর, যা বাধা আসার পরও মানুষকে নিজের জায়গায় টিকিয়ে রাখে। যে বাবা ছেলেকে এ কথা বলছেন, তিনি তাকে বাহবা পাওয়ার জন্য তৈরি করছেন না, তৈরি করছেন বাধা আর সংঘাতের জন্য। আর শেখাচ্ছেন, সত্যের জন্য যে বাধা সহ্য করা হয়, সেটাই এক উঁচু মর্যাদার কাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Twisted Cheek",
          "bn": "বাঁকানো গাল"
        },
        "p": [
          {
            "en": "31:18 begins: wa la tusa''ir khaddaka lin-nas — do not turn your cheek toward people in contempt. The lexicographers cited by the commentators trace sa'ar to a disease that twists a camel's neck, so the verse names contempt by its physical symptom: the face angled away from someone judged not worth facing. Nor walk through the earth marahan, in exultant self-display. Allah does not love any mukhtal fakhur — the mukhtal carries conceit inside, the fakhur pours it out as boasting.",
            "bn": "31:18 শুরু হয়: ওয়া লা তুসা''ইর খাদ্দাকা লিন-নাস, অর্থাৎ অবজ্ঞা করে মানুষের দিক থেকে গাল ফিরিয়ে নিয়ো না। মুফাসসিরগণ যে অভিধানবিদদের কথা উদ্ধৃত করেন, তাঁরা বলেন সা'আর এক রোগের নাম, যাতে উটের ঘাড় বেঁকে যায়। তাই আয়াত অবজ্ঞাকে চিনিয়ে দেয় তার শারীরিক লক্ষণ দিয়ে: যাকে মুখোমুখি হওয়ার যোগ্যই মনে করা হয় না, তার দিক থেকে মুখ ঘুরিয়ে রাখা। আর যমীনে মারাহান, মানে দম্ভভরে নিজেকে জাহির করে, হেঁটো না। আল্লাহ কোনো মুখতাল ফাখূরকে ভালোবাসেন না। মুখতাল অহংকার পুষে রাখে ভেতরে, ফাখূর সেটা বাইরে ঢেলে দেয় বড়াই করে।"
          },
          {
            "en": "The placement is exact. Contempt is the occupational disease of the person who commands right and forbids wrong; standing above someone's error slides easily into standing above the person. So the counsel moves without a seam from courage before people to humility with them. The son is to hold truth firmly and carry his own face, stride and voice modestly — the combination the surah presents as wisdom.",
            "bn": "আয়াতের এই জায়গাটা একেবারে মাপা। যে মানুষ ভালো কাজের আদেশ দেয় আর মন্দ কাজে নিষেধ করে, অবজ্ঞা তার কাজের সঙ্গে লেগে থাকা রোগ। কারও ভুলের ওপরে দাঁড়াতে দাঁড়াতে খুব সহজেই মানুষটার ওপরেই দাঁড়িয়ে যাওয়া হয়। তাই উপদেশ কোনো ছেদ ছাড়াই মানুষের সামনে সাহসের কথা থেকে মানুষের সঙ্গে বিনয়ের কথায় চলে যায়। ছেলেকে সত্য আঁকড়ে ধরতে হবে শক্ত করে, আর নিজের চেহারা, চলাফেরা ও কণ্ঠস্বর রাখতে হবে বিনয়ী। এই দুইয়ের মিলকেই সূরাটি হিকমত বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Measured Step, Lowered Voice",
          "bn": "পরিমিত চলা, নিচু স্বর"
        },
        "p": [
          {
            "en": "31:19 gives the positive form: be moderate in your walking and lower your voice. Then a comparison chosen to end the argument: the harshest of sounds is the voice of donkeys. The commentators observe that the verse does not forbid walking fast or speaking strongly when the situation calls for it; it forbids swagger — pace as display, volume as dominance. Loudness that serves nothing but the speaker's presence is likened to braying, and no one who hears the comparison forgets it.",
            "bn": "31:19 এবার করণীয়টা বলে: চলাফেরায় মধ্যপন্থা রাখো, আর কণ্ঠস্বর নিচু করো। তারপর এমন এক তুলনা, যার পরে আর তর্ক চলে না: সবচেয়ে কর্কশ আওয়াজ হলো গাধার আওয়াজ। মুফাসসিরগণ লক্ষ করেন, দরকার হলে দ্রুত হাঁটা বা জোর দিয়ে কথা বলা আয়াত নিষেধ করে না। নিষেধ করে দম্ভ: লোক দেখাতে হাঁটার ঢং, অন্যকে দাবিয়ে রাখতে গলার জোর। যে উঁচু গলা কেবল বক্তার নিজেকে জাহির করার কাজে লাগে, তাকে তুলনা করা হয়েছে গাধার ডাকের সঙ্গে। এই তুলনা একবার যে শোনে, সে আর ভোলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Teaching Elsewhere",
          "bn": "অন্যত্র একই শিক্ষা"
        },
        "p": [
          {
            "en": "The Quran repeats this pairing of conviction and humility. 17:37 commands: do not walk through the earth exultantly, for you will never tear the earth open, nor reach the mountains in height. 25:63 describes the servants of the Most Merciful as those who walk upon the earth gently, and when the ignorant address them, they say words of peace. And 3:104 assigns the community the same duty Luqman gave his son: a body of people calling to good, enjoining right and forbidding wrong.",
            "bn": "কুরআন প্রত্যয় ও বিনয়ের এই জোড় বারবার ফিরিয়ে আনে। 17:37 নির্দেশ দেয়: যমীনে দম্ভভরে হেঁটো না, কারণ তুমি কখনো যমীন চিরে ফেলতে পারবে না, উচ্চতায় পাহাড়েও পৌঁছাবে না। 25:63 পরম করুণাময়ের বান্দাদের বর্ণনা করে — তারা যমীনে চলে কোমলভাবে, আর অজ্ঞরা তাদের সম্বোধন করলে তারা বলে শান্তির কথা। আর 3:104 সমাজকে সেই একই দায়িত্ব দেয়, যা লুকমান তাঁর সন্তানকে দিয়েছিলেন: এমন একদল মানুষ, যারা কল্যাণের দিকে ডাকবে, সৎকাজের আদেশ দেবে ও অসৎকাজে নিষেধ করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Sequence",
          "bn": "ক্রমটি জীবনে মেনে চলা"
        },
        "p": [
          {
            "en": "The order of the counsel is usable exactly as given. Anchor the day in prayer before attempting to straighten anyone else. When you do speak for what is right, budget for resistance in advance, so that the first pushback does not read as a sign to stop. And audit the body along with the deeds: who receives your full face and who gets the turned cheek, how you enter a room, how loudly you need to be heard.",
            "bn": "উপদেশটা যে ক্রমে দেওয়া হয়েছে, ঠিক সেই ক্রমেই তা জীবনে কাজে লাগানো যায়। অন্য কাউকে শোধরাতে যাওয়ার আগে নিজের দিনটাকে নামাজের ওপর দাঁড় করান। আর যখন হকের পক্ষে মুখ খুলবেন, আগে থেকেই ধরে রাখুন যে বাধা আসবে, যাতে প্রথম ধাক্কাটাকেই থেমে যাওয়ার সংকেত মনে না হয়। আমলের পাশাপাশি নিজের শরীরের আচরণেরও হিসাব নিন: কার দিকে আপনি পুরো মুখ ফিরিয়ে তাকান আর কার দিক থেকে গাল ফিরিয়ে নেন, কোনো ঘরে ঢোকেন কীভাবে, আর নিজের কথা শোনাতে আপনার গলা কতটা চড়াতে হয়।"
          },
          {
            "en": "What makes these verses hard is that they join two things we like to separate: conviction and gentleness. Luqman's son is told to be firm enough to forbid wrong and humble enough to lower his voice — in the same breath. The believer this counsel produces is neither the harsh reformer nor the polite bystander, but a person whose worship, work and very gait say the same thing.",
            "bn": "এই আয়াতগুলো কঠিন, কারণ যে দুটি জিনিসকে আমরা আলাদা রাখতে ভালোবাসি, আয়াত সে দুটিকে জুড়ে দেয়: দৃঢ় প্রত্যয় আর কোমলতা। লুকমানের ছেলেকে একই নিঃশ্বাসে বলা হয়েছে, মন্দ কাজে বাধা দেওয়ার মতো দৃঢ় হও, আবার গলা নামিয়ে কথা বলার মতো বিনয়ী হও। এই উপদেশ যে মুমিন গড়ে তোলে, সে কর্কশ সংস্কারকও নয়, আবার ভদ্রভাবে চুপ করে থাকা দর্শকও নয়। সে এমন মানুষ, যার ইবাদত, কাজকর্ম, এমনকি হাঁটার ধরনও একই কথা বলে।"
          }
        ]
      }
    ]
  },
  "31:22": {
    "sections": [
      {
        "h": {
          "en": "Handing Over the Face",
          "bn": "মুখ সঁপে দেওয়া"
        },
        "p": [
          {
            "en": "Wa man yuslim wajhahu ila Allah. Yuslim is the fourth form of the root of Islam: to hand a thing over. Wajh is the face, and in Arabic the face stands for the whole person and for the direction he is turned. So the picture is of a man handing over his face — his attention, the one part of him he cannot hide behind. The preposition is ila, toward Allah, which makes it a movement rather than a transfer of title.",
            "bn": "ওয়া মান ইউসলিম ওয়াজহাহু ইলাল্লাহ। 'ইউসলিম' এসেছে ইসলাম শব্দের মূল ধাতু থেকে, চতুর্থ গঠনে; এর মানে কোনো কিছু কারও হাতে তুলে দেওয়া। 'ওয়াজহ' মানে মুখ। আরবিতে মুখ বলতে পুরো মানুষটাকে বোঝায়, আবার সে কোন দিকে ফিরে আছে তাও বোঝায়। তাই ছবিটা এমন এক মানুষের, যে নিজের মুখটাই সঁপে দিচ্ছে: তার মনোযোগ, তার সেই অংশ, যার আড়ালে সে লুকাতে পারে না। সঙ্গে এসেছে 'ইলা', অর্থাৎ আল্লাহর দিকে। এতে ব্যাপারটা আর মালিকানা বদলের মতো থাকে না, হয়ে যায় তাঁর দিকে এগিয়ে যাওয়া।"
          },
          {
            "en": "Then a clause of state: wa huwa muhsin, while he is a doer of good. Ihsan is not simply a larger quantity of deeds. Muslim records from Umar ibn al-Khattab (RA) that when Jibril (AS) asked about ihsan, the Prophet ﷺ answered: that you worship Allah as though you see Him, for if you do not see Him, He surely sees you. On that definition the second half of the verse describes not what the man does but the awareness he does it under.",
            "bn": "এরপর আসে অবস্থা বোঝানো একটি বাক্যাংশ: ওয়া হুয়া মুহসিন, অর্থাৎ এমন অবস্থায় যে সে সৎকর্মশীল। ইহসান মানে শুধু বেশি বেশি আমল করা নয়। ইমাম মুসলিম উমর ইবনুল খাত্তাব (রাঃ) থেকে বর্ণনা করেন, জিবরীল (আঃ) ইহসান সম্পর্কে জিজ্ঞেস করলে নবী ﷺ উত্তর দিয়েছিলেন: তুমি আল্লাহর ইবাদত এমনভাবে করবে যেন তুমি তাঁকে দেখছ; আর যদি তুমি তাঁকে না-ও দেখো, তিনি তো তোমাকে দেখছেনই। এই সংজ্ঞা ধরলে আয়াতের দ্বিতীয় অংশ বলছে না মানুষটি কী করে; বলছে, কোন সচেতনতা নিয়ে সে তা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Words for a Grip",
          "bn": "শক্ত করে ধরার চার শব্দ"
        },
        "p": [
          {
            "en": "Faqadi istamsaka bil-'urwati al-wuthqa is four words. Istamsaka is the tenth form of masaka, to hold; the added letters give the sense of taking hold for oneself, seeking out a firm grip rather than resting a hand on something. 'Urwa is the loop or handle by which a thing is carried — the handle of a jug, the loop a rope passes through. Wuthqa is the feminine superlative from a root meaning firm and trustworthy, the same root that gives mithaq, a binding covenant.",
            "bn": "ফাকাদিসতামসাকা বিল-উরওয়াতিল উসকা: মাত্র চারটি শব্দ। 'ইসতামসাকা' হলো 'মাসাকা' (ধরা) ক্রিয়ার দশম গঠন। বাড়তি অক্ষরগুলো যোগ করে নিজের জন্য আঁকড়ে ধরার ভাব: কোনো কিছুর ওপর শুধু হাত রাখা নয়, খুঁজে নিয়ে শক্ত করে ধরা। 'উরওয়া' মানে সেই কড়া বা হাতল, যা ধরে কোনো জিনিস বহন করা হয়, যেমন কলসির হাতল, কিংবা যে আংটার ভেতর দিয়ে দড়ি গলানো হয়। 'উসকা' স্ত্রীবাচক শব্দ, অর্থ সবচেয়ে মজবুত। এর ধাতুর অর্থ দৃঢ় ও নির্ভরযোগ্য; এই একই ধাতু থেকে এসেছে 'মীসাক', মানে পাকা অঙ্গীকার।"
          },
          {
            "en": "Notice which side of the grip is described as strong. A person can hold weakly; hands tire, and everyone's do. But the superlative in the verse is not attached to the holding, it is attached to the handle. What is being promised is not that the believer will grip well. It is that the thing he has taken hold of will not come away in his hand, however ordinary the hand.",
            "bn": "লক্ষ করুন, মজবুত বলা হয়েছে কোন দিকটাকে। মানুষ আলগা করে ধরতে পারে; হাত ক্লান্ত হয়, সবার হাতই হয়। কিন্তু আয়াতে 'সবচেয়ে মজবুত' কথাটা ধরার সঙ্গে নয়, হাতলের সঙ্গে জোড়া। প্রতিশ্রুতি এটা নয় যে মুমিন খুব ভালোভাবে ধরে রাখবে। প্রতিশ্রুতি হলো, সে যা ধরেছে তা তার হাতে খুলে আসবে না, হাতটা যত সাধারণই হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Handhold at 2:256",
          "bn": "একই হাতল 2:256-এ"
        },
        "p": [
          {
            "en": "The identical Arabic phrase sits inside 2:256: whoever disbelieves in the taghut and believes in Allah has grasped the most trustworthy handhold, with no break in it. What differs is who grasps it. At 2:256 he is defined by a creed — one rejection and one affirmation. Here he is defined by an act and a manner, submitting the face while doing good. One handhold, reached from belief in the first verse and from conduct in the second.",
            "bn": "ঠিক এই আরবি বাক্যাংশটিই রয়েছে 2:256 আয়াতের ভেতরে: যে তাগুতকে অস্বীকার করে ও আল্লাহর প্রতি ঈমান আনে, সে ধরেছে সবচেয়ে মজবুত হাতল, যা ছিঁড়ে যাওয়ার নয়। পার্থক্য শুধু কে ধরছে তাতে। 2:256-এ তাকে চেনানো হয়েছে আকীদা দিয়ে — একটি অস্বীকার ও একটি স্বীকৃতি। আর এখানে তাকে চেনানো হয়েছে একটি কাজ ও তার ধরন দিয়ে — সৎকর্ম করা অবস্থায় মুখ সমর্পণ করা। হাতল একটাই, কিন্তু প্রথম আয়াতে সেখানে পৌঁছানো হয় বিশ্বাস দিয়ে, দ্বিতীয়টিতে আচরণ দিয়ে।"
          },
          {
            "en": "They also close differently. 2:256 adds la infisama laha, no snapping of it, and ends on two names, the Hearing and the Knowing. 31:22 says nothing about the handhold breaking and turns instead to where the road runs: wa ila Allahi 'aqibatu al-umur, and to Allah is the outcome of all matters. One verse secures the rope. The other tells you what is at the far end of it, and it is the same Name in both places.",
            "bn": "দুটি আয়াতের শেষটাও আলাদা। 2:256 যোগ করে 'লা ইনফিসামা লাহা', অর্থাৎ তা ছিঁড়বে না; তারপর শেষ হয় আল্লাহর দুটি নাম দিয়ে: সর্বশ্রোতা, সর্বজ্ঞ। 31:22 হাতল ছেঁড়া নিয়ে কিছুই বলে না, বরং দেখায় পথটা গিয়ে কোথায় শেষ হয়েছে: ওয়া ইলাল্লাহি আকিবাতুল উমূর, আর সব বিষয়ের শেষ পরিণতি আল্লাহরই কাছে। একটি আয়াত দড়িটা মজবুত বলে নিশ্চয়তা দেয়। অন্যটি বলে দেয় দড়ির ওপাশে কে আছেন। আর দুই জায়গাতেই নামটি একই: আল্লাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Description Used Three Times",
          "bn": "একটি বর্ণনা, তিনবার"
        },
        "p": [
          {
            "en": "Submitting the face while being a doer of good appears three times in the Quran, each with a different payoff. 2:112 gives it a reward: he will have his reward with his Lord, with no fear upon them and no grief. 4:125 gives it a rank: who is better in religion than such a person, who also follows the way of Ibrahim (AS)? This verse gives it a handhold — something to hold while the road is still being walked.",
            "bn": "সৎকর্মশীল অবস্থায় মুখ সমর্পণ করার বর্ণনাটি কুরআনে তিনবার আসে, আর প্রতিবারই তার পরিণাম আলাদা। 2:112 আয়াত তাকে দেয় প্রতিদান: তার প্রতিদান তার প্রতিপালকের কাছে রয়েছে, তাদের কোনো ভয় নেই এবং কোনো দুঃখও নেই। 4:125 আয়াত তাকে দেয় মর্যাদা: দ্বীনে এমন মানুষের চেয়ে উত্তম কে, যে সেই সঙ্গে ইবরাহীম (আঃ)-এর পথও অনুসরণ করে? আর এই আয়াত তাকে দেয় একটি হাতল — পথ চলতে চলতেই ধরে রাখার মতো কিছু।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Sits in Luqman",
          "bn": "সূরা লুকমানে এর অবস্থান"
        },
        "p": [
          {
            "en": "Luqman's counsel to his son ran from 31:13 to 31:19 and has ended by now. 31:20 asks whether they do not see that Allah has made subject to them whatever is in the heavens and the earth and has poured out His favours, apparent and hidden — and yet some dispute about Allah without knowledge. 31:21 then quotes them: told to follow what Allah revealed, they answer that they will follow what they found their fathers upon.",
            "bn": "লুকমানের উপদেশ চলেছিল 31:13 থেকে 31:19 পর্যন্ত, আর এতক্ষণে তা শেষ হয়ে গেছে। 31:20 আয়াত প্রশ্ন করে, তারা কি দেখে না যে আল্লাহ আসমান ও যমীনে যা কিছু আছে সব তাদের অধীন করে দিয়েছেন এবং ঢেলে দিয়েছেন তাঁর প্রকাশ্য ও অপ্রকাশ্য অনুগ্রহ — তবুও কেউ কেউ কোনো জ্ঞান ছাড়াই আল্লাহ সম্পর্কে বিতর্ক করে। এরপর 31:21 আয়াত তাদের কথাই উদ্ধৃত করে: আল্লাহ যা নাজিল করেছেন তা অনুসরণ করতে বলা হলে তারা বলে, তারা বরং তাই অনুসরণ করবে যার ওপর তারা তাদের পিতৃপুরুষদের পেয়েছে।"
          },
          {
            "en": "So the handhold verse arrives directly after a picture of people holding on to something else — an inheritance, gripped because it was gripped before them. And the verse straight after it, 31:23, tells the Prophet ﷺ not to be grieved by anyone's disbelief, since their return is to Allah, who knows what is inside the breasts. The offer of a firm handle is placed between a grip that will not bear weight and a consolation for the one holding it out.",
            "bn": "তাহলে হাতলের আয়াতটি এসেছে ঠিক এমন এক ছবির পরে, যেখানে মানুষ অন্য কিছু আঁকড়ে আছে: বাপ-দাদার রেখে যাওয়া পথ, যা ধরে রাখা হয়েছে শুধু এ কারণে যে আগের লোকেরাও তা ধরে ছিল। আর ঠিক পরের আয়াত, 31:23, নবী ﷺ-কে বলে, কারও কুফরি যেন তাঁকে দুঃখ না দেয়; তাদের সবাইকে ফিরতে হবে আল্লাহরই কাছে, আর তিনি জানেন অন্তরে কী লুকানো আছে। এভাবে মজবুত হাতলের এই প্রস্তাবের এক পাশে আছে এমন এক আঁকড়ে ধরা, যা ভার সইতে পারবে না; আর অন্য পাশে আছে সান্ত্বনা তাঁর জন্য, যিনি হাতলটি মানুষের দিকে বাড়িয়ে ধরছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping Both Halves",
          "bn": "দুই অংশ একসঙ্গে রাখা"
        },
        "p": [
          {
            "en": "When the ground tilts, which handle does the hand actually reach for — a salary, a person, a reputation, a plan? Whichever it is, the two halves of this verse have to stay together. Submission without ihsan is a claim with no craftsmanship in it; ihsan without submission is careful work aimed at nobody in particular. The verse fastens them into one condition and then refuses to describe the journey. It says only where it ends: to Allah is the outcome of all matters.",
            "bn": "পায়ের নিচের মাটি যখন হেলে যায়, হাত তখন আসলে কোন হাতলের দিকে বাড়ে? বেতন, কোনো মানুষ, সুনাম, নাকি কোনো পরিকল্পনা? যেটাই হোক, এই আয়াতের দুটি অংশ একসঙ্গেই রাখতে হবে। ইহসান ছাড়া আত্মসমর্পণ এমন এক দাবি, যার মধ্যে কোনো যত্ন বা নিপুণতা নেই। আর আত্মসমর্পণ ছাড়া ইহসান হলো যত্ন করে করা এমন কাজ, যা নির্দিষ্ট কারও উদ্দেশে নয়। আয়াত দুটিকে একটিমাত্র শর্তে বেঁধে দেয়, তারপর পথের বিবরণ দিতে চায় না। শুধু বলে, পথটা শেষ হয় কোথায়: সব বিষয়ের পরিণাম আল্লাহরই কাছে।"
          }
        ]
      }
    ]
  },
  "31:27": {
    "sections": [
      {
        "h": {
          "en": "Between Two Statements of Scale",
          "bn": "দুই বিশালতার মাঝখানে"
        },
        "p": [
          {
            "en": "The image does not arrive on its own. At 31:25 the surah asks the Makkans who created the heavens and the earth, and answers for them: they will say Allah. Then 31:26 states that whatever is in the heavens and the earth belongs to Him, and that He is free of all need and worthy of all praise. Only after that come the trees and the sea. And 31:28 follows immediately, saying that your creation and your resurrection are only as that of a single soul.",
            "bn": "ছবিটি একা এসে হাজির হয় না। 31:25 আয়াতে সূরাটি মক্কাবাসীদের জিজ্ঞেস করে, কে আসমানসমূহ ও যমীন সৃষ্টি করেছেন, আর তাদের হয়ে উত্তরও দিয়ে দেয়: তারা বলবে আল্লাহ। এরপর 31:26 বলে, আসমানসমূহে ও যমীনে যা কিছু আছে সবই তাঁর, আর তিনি কারও মুখাপেক্ষী নন এবং সমস্ত প্রশংসার যোগ্য। তার পরেই আসে গাছ ও সমুদ্রের কথা। আর 31:28 আসে ঠিক তার পিছুপিছু: তোমাদের সৃষ্টি ও তোমাদের পুনরুত্থান একটিমাত্র প্রাণের সৃষ্টি ও পুনরুত্থানের মতোই।"
          },
          {
            "en": "So the verse is framed by scale on both sides. Before it, a Lord who owns everything and needs nothing from anyone. After it, a resurrection of every human being who has ever lived, which costs Him no more than raising one. The ink and the pens sit between those two, and they are not decoration. They are the reason the two neighbours are true: a Speaker whose words cannot be exhausted is not a Speaker who can run short of power.",
            "bn": "তাহলে আয়াতটির দুই পাশেই বিশালতার কথা। আগে আছেন এমন এক রব, যিনি সবকিছুর মালিক, কারও কাছে তাঁর কিছুই চাওয়ার নেই। পরে আছে দুনিয়ায় আসা প্রত্যেক মানুষের পুনরুত্থান, আর তাঁর কাছে সেটা একজনকে ওঠানোর চেয়ে কঠিন কিছু নয়। কালি আর কলমের ছবিটা এই দুইয়ের মাঝখানে বসানো, এবং সেটা নিছক সাজসজ্জা নয়। দুই পাশের কথা দুটি সত্য হওয়ার কারণ এটিই: যাঁর কথা কখনো ফুরায় না, তাঁর শক্তিও কখনো কম পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Count the Seas Exactly",
          "bn": "সমুদ্রগুলো ঠিকঠাক গুনুন"
        },
        "p": [
          {
            "en": "Read the Arabic slowly, because this picture is easy to garble. If all the trees on the earth were pens, and the sea — yamudduhu min ba'dihi sab'atu abhur — were supplied after it by seven more seas, the words of Allah would still not run out. The seven are not the total. They are reinforcements that arrive after the first sea has been used up. The verb yamuddu comes from the root of madad, the fresh supply sent to an army already in the field.",
            "bn": "আরবিটা ধীরে পড়ুন, কারণ এই ছবিটা গুলিয়ে ফেলা খুব সহজ। যমীনের সব গাছ যদি কলম হতো, আর সমুদ্রের পরে আরও সাতটি সমুদ্র এসে তাতে যোগান দিত (ইয়ামুদ্দুহু মিন বা'দিহি সাব'আতু আবহুর), তবুও আল্লাহর কথা ফুরাত না। সাতটি মোট সংখ্যা নয়। প্রথম সমুদ্র ফুরিয়ে যাওয়ার পর এগুলো আসে বাড়তি রসদ হয়ে। ইয়ামুদ্দু ক্রিয়াটি এসেছে মাদাদ শব্দের ধাতু থেকে। মাদাদ মানে ময়দানে থাকা বাহিনীর কাছে পাঠানো নতুন রসদ।"
          },
          {
            "en": "One more detail the translation has to supply. The word for ink is not in this verse at all; the rendering you will read puts it in brackets, because pens without ink make no sense. And the closing verb is flat rather than hypothetical: ma nafidat, they did not run out. Then two names seal the sentence, al-'Aziz and al-Hakim, Exalted in Might and Wise. Endlessness on its own would be merely large. Endless and wise is a different claim altogether.",
            "bn": "আরও একটা খুঁটিনাটি অনুবাদে নিজে থেকে যোগ করতে হয়। 'কালি' শব্দটি এই আয়াতে নেই-ই। অনুবাদে আপনি শব্দটি পাবেন বন্ধনীর ভেতরে, কারণ কালি ছাড়া কলমের কোনো মানে হয় না। আর শেষ ক্রিয়াটি 'যদি হতো' ধাঁচের নয়, একেবারে সোজা: মা নাফিদাত, সেগুলো ফুরায়নি। এরপর দুটি নাম দিয়ে বাক্যটি শেষ হয়: আল-আযীয ও আল-হাকীম, মহাপরাক্রমশালী ও প্রজ্ঞাময়। শুধু অফুরন্ত হলে তা কেবল বিশালতার কথা। অফুরন্ত এবং প্রজ্ঞাময়, এটা একেবারে অন্য দাবি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Other Sea Verse",
          "bn": "সমুদ্র নিয়ে অন্য আয়াতটি"
        },
        "p": [
          {
            "en": "18:109 reaches the same conclusion from the opposite direction, and it is worth seeing how the two differ. There the Prophet ﷺ is told to say it: if the sea were midad, ink, for the words of my Lord, the sea would run out before the words of my Lord ran out, even if We brought the like of it as madad, supplement. Notice that midad and madad come from one root — the ink and the reinforcement are the same word differently vowelled.",
            "bn": "১৮:১০৯ আয়াত একই সিদ্ধান্তে পৌঁছায় উল্টো দিক থেকে, আর দুটির পার্থক্যটা খেয়াল করার মতো। সেখানে আল্লাহ নবী ﷺ-কে বলতে বলছেন: আমার প্রতিপালকের কথা লেখার জন্য সমুদ্র যদি মিদাদ, মানে কালি হতো, তবে আমার প্রতিপালকের কথা ফুরানোর আগেই সমুদ্র ফুরিয়ে যেত, আমি এর মতো আরেকটি সমুদ্র মাদাদ, মানে বাড়তি যোগান হিসেবে নিয়ে এলেও। লক্ষ করুন, মিদাদ আর মাদাদ একই ধাতু থেকে এসেছে। কালি আর রসদ আসলে একই শব্দ, শুধু স্বরচিহ্ন আলাদা।"
          },
          {
            "en": "The differences are real ones. 18:109 has one sea and one supplement; 31:27 has every tree as a pen and seven seas in reserve. 18:109 says the sea would be exhausted; 31:27 says the words would not be. One measures what fails, the other measures what does not. Reading them side by side is more useful than treating either as the verse about ink, and it keeps the seven seas of 31:27 from wandering into a verse that never mentions them.",
            "bn": "পার্থক্যগুলো সত্যিকারের। ১৮:১০৯ আয়াতে একটি সমুদ্র আর একটি বাড়তি যোগান; ৩১:২৭ আয়াতে প্রতিটি গাছ কলম, আর পেছনে মজুত আরও সাতটি সমুদ্র। ১৮:১০৯ বলে, সমুদ্র ফুরিয়ে যেত; ৩১:২৭ বলে, কথা ফুরাত না। একটি মাপে কী ফুরিয়ে যায়, অন্যটি মাপে কী ফুরায় না। কোনো একটিকে 'কালির আয়াত' বানিয়ে ফেলার চেয়ে দুটিকে পাশাপাশি পড়া বেশি কাজের। তাতে ৩১:২৭ আয়াতের সাত সমুদ্র এমন আয়াতে গিয়ে ঢোকে না, যেখানে তাদের কোনো উল্লেখই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Words of Allah Means",
          "bn": "আল্লাহর কথা বলতে কী বোঝায়"
        },
        "p": [
          {
            "en": "The commentators do not read kalimat Allah as a countable stock of sentences. They take it of His knowledge, His wisdom, His decrees and His speech — everything He has said and everything He could say about a creation that is itself past counting. On that reading the verse is not really about writing materials. It is about the distance between what could ever be recorded and what there is to record.",
            "bn": "মুফাসসিরগণ কালিমাতুল্লাহ বলতে গুনে শেষ করা যায় এমন কিছু বাক্যের মজুত বোঝেন না। তাঁদের মতে এর মানে তাঁর জ্ঞান, তাঁর হিকমত, তাঁর ফয়সালা ও তাঁর বাণী। অর্থাৎ তিনি যা বলেছেন এবং যা বলতে পারেন সবই, আর যে সৃষ্টিজগৎ নিয়ে সে কথা, সেটাই তো গুনে শেষ করা যায় না। এভাবে পড়লে আয়াতটি আসলে লেখার সরঞ্জাম নিয়ে নয়। এর বিষয় একটা ফারাক: কোনো দিন যতটুকু লিখে রাখা সম্ভব, আর লিখে রাখার মতো যা আছে, এই দুইয়ের ফারাক।"
          },
          {
            "en": "The seven, they generally add, is not a ceiling. Arabic uses seven and seventy for abundance rather than for an exact tally, and in any case the argument does not depend on the figure: if seven more seas change nothing, seven hundred change nothing either. That is why the verse never bothers to raise the number. It has already shown that the quantity of ink was never the variable in the sentence.",
            "bn": "তাঁরা সাধারণত এ কথাও যোগ করেন যে সাত কোনো শেষ সীমা নয়। আরবরা সাত আর সত্তর বলে প্রাচুর্য বোঝাতে, গুনে বলা নির্দিষ্ট সংখ্যা হিসেবে নয়। তা ছাড়া যুক্তিটা সংখ্যার ওপর নির্ভরও করে না: আরও সাতটি সমুদ্রে যদি কিছুই না বদলায়, সাতশোতেও বদলাবে না। এ কারণেই আয়াতটি সংখ্যা বাড়ানোর দিকে যায়ই না। কালির পরিমাণ যে এখানে কখনো আসল প্রশ্ন ছিল না, সেটা সে আগেই দেখিয়ে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Student Who Never Graduates",
          "bn": "যে ছাত্রের পড়া কখনো শেষ হয় না"
        },
        "p": [
          {
            "en": "What the verse changes is a reader's posture. The Quran can be finished; its meanings cannot. Anyone who has come back to a familiar verse after a hard year and found in it something that was not there before has met this ayah in practice. It also puts a limit on a particular kind of confidence — the feeling that one has now covered the religion. Whoever says that has measured one sea and forgotten the seven standing behind it.",
            "bn": "আয়াতটি বদলে দেয় পাঠকের মনোভাব। কুরআন খতম করা যায়, কিন্তু তার অর্থ কখনো শেষ হয় না। কঠিন একটা বছর পার করে কোনো চেনা আয়াতে ফিরে গিয়ে যিনি সেখানে এমন কিছু পেয়েছেন যা আগে ছিল না, তিনি এই আয়াতকে নিজের জীবনেই দেখেছেন। এক ধরনের আত্মবিশ্বাসেও আয়াতটি লাগাম টানে: 'দ্বীন তো আমার জানা হয়ে গেছে', এই ভাব। যিনি এমন কথা বলেন, তিনি একটি সমুদ্র মেপেছেন, আর তার পেছনে দাঁড়ানো সাতটির কথা ভুলে গেছেন।"
          }
        ]
      }
    ]
  },
  "31:34": {
    "sections": [
      {
        "h": {
          "en": "Where Luqman Closes",
          "bn": "সূরা লুকমান যেখানে শেষ হয়"
        },
        "p": [
          {
            "en": "The verse just before this one, 31:33, warns every person of a Day when no father will help his son and no son his father. Then Luqman seals itself with this list of five. At-Tabari reads the two together: you are told to fear your Lord and to fear that Day because it is surely coming, yet the knowledge of when it comes rests with your Lord, and it will reach you only by surprise. The surah ends not with one more threat but with a map of what you were never given to know.",
            "bn": "ঠিক আগের আয়াত, ৩১:৩৩, প্রত্যেক মানুষকে সেই দিনের ব্যাপারে সাবধান করে, যেদিন পিতা সন্তানের কোনো কাজে আসবে না, সন্তানও পিতার নয়। এরপর এই পাঁচটি বিষয়ের তালিকা দিয়ে সূরা লুকমান শেষ হয়। তাবারী দুটি আয়াত একসঙ্গে পড়েন। আপনাকে বলা হচ্ছে আপনার রবকে ভয় করতে, সেই দিনকেও ভয় করতে, কারণ সে দিন আসবেই। অথচ কখন আসবে, সে জ্ঞান কেবল আপনার রবের কাছে, আর তা আসবে হঠাৎ করেই। সূরাটি শেষ হয় আরেকটা হুমকি দিয়ে নয়, বরং যা আপনাকে কখনো জানতে দেওয়া হয়নি, তার একটা মানচিত্র দিয়ে।"
          },
          {
            "en": "Across its length Luqman has pointed to signs a person can read: night folding into day, ships carried on the sea, a pen that cannot run out of His words. The closing verse turns to the other side of the line, to what no reading reaches at all. Having shown how much of His order lies open to sight, the surah ends by naming five things shut to it. The same Lord who filled the world with legible signs kept five pages for Himself.",
            "bn": "গোটা সূরা জুড়ে লুকমান এমন সব নিদর্শন দেখিয়েছে, যা মানুষ পড়ে বুঝতে পারে: রাত ঢুকে যাচ্ছে দিনের ভেতর, সমুদ্রে ভেসে চলেছে জাহাজ, আর এমন কলম যা তাঁর কথা লিখে কখনো শেষ করতে পারে না। শেষ আয়াতটি তাকায় সীমারেখার ওপারে, যেখানে কোনো পড়াই পৌঁছায় না। তাঁর সৃষ্টিব্যবস্থার কতখানি চোখের সামনে খোলা, তা দেখানোর পর সূরাটি শেষ হয় এমন পাঁচটি জিনিসের নাম দিয়ে, যা চোখের কাছে বন্ধ। যে রব জগৎকে পড়ার মতো নিদর্শনে ভরে দিয়েছেন, তিনিই পাঁচটি পাতা নিজের কাছে রেখে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Doors Only He Opens",
          "bn": "পাঁচ দরজা তাঁরই হাতে"
        },
        "p": [
          {
            "en": "Commentators call these five the keys of the unseen. Ma'arif al-Qur'an links the verse to 6:59, where Allah says the keys of the unseen are with Him and none knows them but He, and explains that a key, miftah, is what opens a lock. The five are the openings through which hidden knowledge would be unlocked, and all five stay in one hand. Nothing in the created order turns in these locks. The knowledge does not leak out to an angel brought near or to a sage below him.",
            "bn": "তাফসীরকারেরা এই পাঁচটিকে বলেন গায়েবের চাবি। মাআরিফুল কুরআন আয়াতটিকে মিলিয়ে পড়ে ৬:৫৯ আয়াতের সঙ্গে, যেখানে আল্লাহ বলছেন, গায়েবের চাবি তাঁরই কাছে, তিনি ছাড়া কেউ তা জানে না। বইটি বুঝিয়ে দেয়, চাবি বা মিফতাহ হলো যা দিয়ে তালা খোলা হয়। লুকানো জ্ঞানের তালা খোলার পথ এই পাঁচটি, আর পাঁচটিই রয়েছে একই হাতে। সৃষ্টিজগতের কেউ এই তালায় চাবি ঘোরাতে পারে না। এ জ্ঞান চুইয়েও পৌঁছায় না, না নৈকট্যপ্রাপ্ত কোনো ফেরেশতার কাছে, না তাঁর চেয়ে নিচের কোনো জ্ঞানীর কাছে।"
          },
          {
            "en": "At-Tabari records from Mujahid that these very five are the keys of the unseen named in 6:59. Ma'arif al-Qur'an notices why these five, of all unseen things, are singled out: they are exactly what people most itch to know — the end of the world, the coming rain, the child, the fortune of tomorrow, the hour of death — and exactly what astrologers and fortune-tellers claim to deliver. To name them here is a quiet refusal of every such claim.",
            "bn": "তাবারী মুজাহিদ থেকে বর্ণনা করেন, ৬:৫৯ আয়াতে যে গায়েবের চাবির কথা আছে, তা এই পাঁচটিই। মাআরিফুল কুরআন খেয়াল করিয়ে দেয়, গায়েবের এত জিনিসের মধ্যে এই পাঁচটিকেই কেন আলাদা করে বলা হলো। মানুষ সবচেয়ে বেশি জানতে চায় ঠিক এগুলোই: দুনিয়া কবে শেষ হবে, বৃষ্টি কবে আসবে, গর্ভের সন্তান কেমন হবে, কাল ভাগ্যে কী আছে, মৃত্যু কখন আসবে। আর জ্যোতিষী ও গণকেরা ঠিক এগুলোই বলে দেওয়ার দাবি করে। তাই এখানে এগুলোর নাম নেওয়া মানে এমন প্রতিটি দাবিকে নিঃশব্দে নাকচ করে দেওয়া।"
          },
          {
            "en": "As-Sa'di frames it from the other direction. Allah's knowledge, he says, encompasses the seen and the unseen, the outward and the inward, and He does disclose much of the hidden to His servants. But these five He folded away from every creature: no sent prophet knows them, no angel brought near, let alone anyone below them. The point is not that knowledge is scarce, but that these particular five were sealed on purpose.",
            "bn": "সা'দী বিষয়টা দেখেন উল্টো দিক থেকে। তিনি বলেন, আল্লাহর জ্ঞান দৃশ্য-অদৃশ্য, বাহির-ভেতর সবকিছু ঘিরে আছে, আর তিনি বান্দাদের গায়েবের অনেক কিছু জানিয়েও দেন। কিন্তু এই পাঁচটি তিনি সব সৃষ্টির কাছ থেকে গুটিয়ে রেখেছেন। কোনো প্রেরিত নবী এগুলো জানেন না, নৈকট্যপ্রাপ্ত কোনো ফেরেশতাও না, তাঁদের নিচের কারও তো প্রশ্নই ওঠে না। কথাটা এই নয় যে জ্ঞান দুর্লভ। কথা হলো, এই পাঁচটিকে তিনি ইচ্ছে করেই সিল করে রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "With Him, And No Soul",
          "bn": "তাঁরই কাছে, কারও জানা নেই"
        },
        "p": [
          {
            "en": "The verse is built in two halves. The first three are put positively: with Him is the knowledge of the Hour, He sends down the rain, He knows what is in the wombs. The last two are put as flat denials: no soul knows what it will earn tomorrow, no soul knows in what land it will die. Ma'arif al-Qur'an reads the shift as deliberate: the last two touch a person directly, where he might think his future within reach, so each is shut with an explicit no.",
            "bn": "আয়াতটির দুটি ভাগ। প্রথম তিনটি কথা হ্যাঁ-বাচক: কিয়ামতের জ্ঞান তাঁরই কাছে, তিনিই বৃষ্টি নামান, তিনিই জানেন গর্ভে কী আছে। শেষ দুটি সরাসরি না-বাচক: কেউ জানে না আগামীকাল সে কী অর্জন করবে, কেউ জানে না কোন মাটিতে তার মৃত্যু হবে। মাআরিফুল কুরআনের মতে এই বদল ইচ্ছাকৃত। শেষ দুটি বিষয় মানুষকে সরাসরি ছোঁয়, আর এখানেই সে ভেবে বসতে পারে, নিজের ভবিষ্যৎ বুঝি তার নাগালে। তাই দুটিকেই বন্ধ করা হয়েছে স্পষ্ট 'না' দিয়ে।"
          },
          {
            "en": "The weight sits on two small words. The Hour's knowledge is ʿinda-hu, with Him — the phrase lodges it in His keeping and nobody else's. At-Tabari glosses each clause the same way: the Hour, none knows it but He; the rain, none can send it down but He; the wombs, their contents known to Him alone. The grammar is not decoration; it fences the knowledge inside the divine, with no gate left for a gifted human to slip through.",
            "bn": "আসল জোরটা দুটি ছোট শব্দে। কিয়ামতের জ্ঞান 'ইনদাহু', তাঁরই কাছে। এই শব্দবন্ধ জ্ঞানটাকে রেখে দেয় তাঁর জিম্মায়, আর কারও কাছে নয়। তাবারী প্রতিটি অংশ একইভাবে ব্যাখ্যা করেন: কিয়ামত, তিনি ছাড়া কেউ জানে না; বৃষ্টি, তিনি ছাড়া কেউ নামাতে পারে না; গর্ভ, তার ভেতরে কী আছে কেবল তিনিই জানেন। এই ব্যাকরণ সাজসজ্জা নয়। এটি জ্ঞানটাকে আল্লাহর সীমানার ভেতরে বেড়া দিয়ে ঘিরে রাখে, আর এমন কোনো ফটক খোলা রাখে না যা দিয়ে কোনো প্রতিভাবান মানুষ ঢুকে পড়তে পারে।"
          },
          {
            "en": "Then the refrain: mā tadrī nafs, no soul perceives. Ma'arif al-Qur'an dwells on the last clause, where only the place of death is named, not its time. The place, it notes, a person might at least guess from where he lives; the time lies in a future not yet here. If he cannot know even the place, which exists somewhere on earth already, he plainly cannot know the time, which does not. The weaker denial carries the stronger within it.",
            "bn": "তারপর বারবার ফিরে আসা কথাটি: মা তাদরী নাফস, কোনো প্রাণ জানে না। মাআরিফুল কুরআন বিশেষভাবে থামে শেষ অংশে, যেখানে কেবল মৃত্যুর জায়গার কথা আছে, সময়ের কথা নেই। বইটি বলে, জায়গাটা মানুষ অন্তত নিজের বসবাসের এলাকা দেখে আন্দাজ করতে পারে। কিন্তু সময়টা এমন এক ভবিষ্যতে, যা এখনো আসেইনি। জায়গাটা পৃথিবীর কোথাও না কোথাও এখনই আছে, তবু মানুষ যদি সেটুকুও জানতে না পারে, তবে যে সময় এখনো আসেনি, তা সে জানবে কী করে? হালকা 'না'-এর ভেতরেই লুকিয়ে আছে আরও জোরালো 'না'।"
          }
        ]
      },
      {
        "h": {
          "en": "What The Womb Hides",
          "bn": "গর্ভ যা লুকিয়ে রাখে"
        },
        "p": [
          {
            "en": "Take the third key carefully, because it is the one a modern reader presses on. What is in the wombs, the commentators say, is far more than the body's sex. Ibn Kathir lists it: male or female, wretched or blessed, its colour, its whole making. As-Sa'di adds the picture carried in the hadith tradition: the angel set over the womb asks his Lord whether it is male or female, and then Allah decrees what He wills. The womb's secret, on their reading, is a whole destiny being written, not a single physical fact.",
            "bn": "তৃতীয় চাবিটি সাবধানে বুঝুন, কারণ আধুনিক পাঠকের প্রশ্ন এখানেই সবচেয়ে বেশি। তাফসীরকারেরা বলেন, গর্ভে কী আছে, সে প্রশ্ন শুধু ছেলে না মেয়ে, তার চেয়ে অনেক বড়। ইবন কাসীর তালিকা দেন: ছেলে না মেয়ে, হতভাগা না সৌভাগ্যবান, গায়ের রং কেমন, গোটা গড়ন কেমন। সা'দী এর সঙ্গে যোগ করেন হাদিসে আসা ছবিটি: গর্ভের দায়িত্বে থাকা ফেরেশতা তাঁর রবকে জিজ্ঞেস করেন, ছেলে না মেয়ে, তারপর আল্লাহ যা চান তা-ই ফয়সালা করেন। তাঁদের ব্যাখ্যায় গর্ভের রহস্য মানে একটা গোটা তাকদির লেখা হওয়া, শুধু একটা শারীরিক তথ্য নয়।"
          },
          {
            "en": "Set beside that, the common objection: a scan now shows a baby's sex, so hasn't the verse been overtaken? Al-Qurtubi, centuries before ultrasound, had already met the shape of this. He granted that long experience may reveal some signs of whether a pregnancy is male or female. But experience, he said, can differ and the usual pattern break; when it does, the knowledge is seen to rest with Allah alone. A reliable reading of present form was never what the verse placed beyond us.",
            "bn": "এবার এর পাশে রাখুন পরিচিত আপত্তিটি: স্ক্যানে এখন তো দেখা যায় সন্তান ছেলে না মেয়ে, তাহলে আয়াতের কথা কি পুরোনো হয়ে যায়নি? আলট্রাসাউন্ডের বহু শতাব্দী আগেই কুরতুবী এ ধরনের প্রশ্নের মুখোমুখি হয়েছিলেন। তিনি মেনে নেন, দীর্ঘ অভিজ্ঞতা থেকে গর্ভের সন্তান ছেলে না মেয়ে, তার কিছু আলামত বোঝা যেতে পারে। কিন্তু তিনি বলেন, অভিজ্ঞতা সব সময় এক রকম হয় না, চেনা নিয়মও ভেঙে যেতে পারে। আর তখনই বোঝা যায়, এ জ্ঞান কেবল আল্লাহর কাছে। শরীরে এখন যা গড়ে উঠেছে, তা নির্ভরযোগ্যভাবে দেখতে পাওয়াকে আয়াতটি কখনো আমাদের নাগালের বাইরে বলেনি।"
          },
          {
            "en": "Ma'arif al-Qur'an draws the line exactly here. The knowledge withheld, it explains, is the total knowledge that takes in everything created and its every condition; knowledge reached through a physical cause is closer to news than to the unseen. A scan reads a cause already present in the body. It does not read what Allah has decreed, nor the child's blessedness or its end. The verse was never a claim that the sex could not be glimpsed. It was a claim about Who alone holds the whole, and on that reading nothing in it has aged.",
            "bn": "মাআরিফুল কুরআন ঠিক এখানেই রেখা টেনে দেয়। বইটি বোঝায়, যে জ্ঞান আড়ালে রাখা হয়েছে তা হলো পূর্ণ জ্ঞান, যা সৃষ্টির প্রতিটি জিনিস আর তার প্রতিটি অবস্থাকে ঘিরে রাখে। আর কোনো বাহ্যিক কারণের মাধ্যমে যে জ্ঞান পাওয়া যায়, তা গায়েবের চেয়ে বরং খবরের কাছাকাছি। স্ক্যান পড়ে শরীরে আগে থেকেই থাকা একটা কারণ। আল্লাহ কী ফয়সালা করেছেন, তা সে পড়তে পারে না, পারে না সন্তানের সৌভাগ্য বা তার শেষ পরিণতি পড়তে। আয়াত কখনো দাবি করেনি যে ছেলে না মেয়ে, তার আভাসও পাওয়া যাবে না। আয়াতের দাবি হলো, পুরো জ্ঞান কেবল একজনের হাতে। এভাবে পড়লে আয়াতের কোনো কথাই পুরোনো হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hadith Of Five",
          "bn": "পাঁচ বিষয়ের হাদিস"
        },
        "p": [
          {
            "en": "The verse has a hadith fastened to it. Al-Bukhari records from Ibn ʿUmar that the Messenger of Allah ﷺ said: \"Keys of the unseen are five which nobody knows but Allah: nobody knows what will happen tomorrow; nobody knows what is in the womb; nobody knows what he will gain tomorrow; nobody knows at what place he will die; and nobody knows when it will rain.\" Being in Ṣaḥīḥ al-Bukhari, it belongs to the soundest collection and is graded sahih. The saying simply lays the verse's five out from the Prophet's own mouth.",
            "bn": "আয়াতটির সঙ্গে একটি হাদিস জুড়ে আছে। বুখারী ইবন উমর থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: \"গায়েবের চাবি পাঁচটি, আল্লাহ ছাড়া কেউ তা জানে না: আগামীকাল কী হবে কেউ জানে না; গর্ভে কী আছে কেউ জানে না; আগামীকাল সে কী অর্জন করবে কেউ জানে না; কোন জায়গায় সে মারা যাবে কেউ জানে না; আর কখন বৃষ্টি হবে তা কেউ জানে না।\" হাদিসটি সহীহ বুখারীতে আছে, যা সবচেয়ে নির্ভরযোগ্য হাদিসগ্রন্থ, তাই এর মান সহীহ। হাদিসটি আয়াতের পাঁচটি বিষয়কেই নবী ﷺ-এর নিজ মুখে সাজিয়ে বলে দেয়।"
          },
          {
            "en": "The same five surface in the famous hadith of Jibril. When he came in the form of a man and asked when the Hour would be, the Prophet ﷺ answered, \"The one asked about it is no more knowing than the one asking,\" and then recited these signs. Ibn Kathir notes that it is recorded by al-Bukhari and by Muslim. The teacher of the religion is set level with its student: even the Messenger ﷺ, taught by revelation, was not handed this.",
            "bn": "এই পাঁচটিই আবার আসে জিবরীলের বিখ্যাত হাদিসে। তিনি মানুষের রূপে এসে জিজ্ঞেস করেন, কিয়ামত কবে হবে। নবী ﷺ জবাব দেন, \"যাকে জিজ্ঞেস করা হচ্ছে, সে প্রশ্নকারীর চেয়ে বেশি জানে না।\" তারপর তিনি এই নিদর্শনগুলো তিলাওয়াত করেন। ইবন কাসীর উল্লেখ করেন, হাদিসটি বুখারী ও মুসলিম দুজনেই বর্ণনা করেছেন। দ্বীনের শিক্ষক আর ছাত্র এখানে এক কাতারে দাঁড়িয়ে যান। এমনকি রাসূল ﷺ, যাঁকে ওহির মাধ্যমে শেখানো হয়েছে, তাঁকেও এ জ্ঞান দেওয়া হয়নি।"
          },
          {
            "en": "At-Tabari gathers several of these reports. From Ibn Masʿud he records: everything was given to your Prophet ﷺ except the knowledge of these five. The line is striking for what it concedes — the Prophet ﷺ was given vast knowledge of the unseen by revelation — and for the fence it keeps: these five alone were held back. The hadiths do not soften the verse; they underline it, shutting the door on anyone claiming for a human what was withheld from the best of them.",
            "bn": "তাবারী এমন কয়েকটি বর্ণনা একত্র করেছেন। ইবন মাসউদ থেকে তিনি বর্ণনা করেন: তোমাদের নবী ﷺ-কে সবকিছুই দেওয়া হয়েছে, কেবল এই পাঁচটির জ্ঞান ছাড়া। কথাটা দুই দিক থেকে চমকে দেয়। একদিকে এটি মেনে নেয়, নবী ﷺ-কে ওহির মাধ্যমে গায়েবের বিশাল জ্ঞান দেওয়া হয়েছিল। অন্যদিকে বেড়াটাও ঠিক রাখে: শুধু এই পাঁচটিই আটকে রাখা হয়েছে। হাদিসগুলো আয়াতের কথা নরম করে না, বরং আরও জোর দেয়। মানুষের মধ্যে যিনি সর্বশ্রেষ্ঠ, তাঁকেও যা দেওয়া হয়নি, কোনো মানুষের জন্য তা দাবি করার দরজা এগুলো বন্ধ করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Tomorrow, Not Here",
          "bn": "না আগামীকাল, না এই মাটি"
        },
        "p": [
          {
            "en": "No soul knows what it will earn tomorrow. At-Tabari glosses it plainly: no living soul knows what it will do in the day to come, whether good or evil. He records ʿAisha's sharp word on it — whoever tells you he knows what is in tomorrow has lied — and her reciting this very clause as her proof. Tomorrow is not hidden from us by distance; for every soul it is simply not given, and whoever sells certainty about it sells a lie.",
            "bn": "কোনো প্রাণ জানে না আগামীকাল সে কী অর্জন করবে। তাবারী সোজা কথায় ব্যাখ্যা করেন: কোনো জীবিত প্রাণ জানে না, আসছে দিনে সে কী করবে, ভালো না মন্দ। এ বিষয়ে তিনি আয়েশা (রাঃ)-এর কড়া কথাটি উল্লেখ করেন, যিনি দলিল হিসেবে এই অংশটিই তিলাওয়াত করে বলেছিলেন: যে তোমাকে বলে সে আগামীকালের খবর জানে, সে মিথ্যা বলেছে। আগামীকাল দূরে বলে আমাদের কাছ থেকে লুকানো, ব্যাপারটা তা নয়। কোনো প্রাণকেই তা জানতে দেওয়া হয়নি। তাই যে এ নিয়ে নিশ্চয়তা বেচে, সে আসলে মিথ্যা বেচে।"
          },
          {
            "en": "Nor does any soul know in what land it will die. Ibn Kathir reads it as the resting place no one is shown — whether on land or at sea, on a plain or in the mountains. He cites a report that when Allah wills to take a servant's soul in a certain land, He gives him some need that draws him there. Al-Qurtubi carries the same sense through Ibn Majah. The place is fixed in the decree and hidden from the very one it waits for.",
            "bn": "আর কোনো প্রাণ জানে না কোন মাটিতে তার মৃত্যু হবে। ইবন কাসীরের ব্যাখ্যায় এটি সেই শেষ ঠিকানা, যা কাউকে দেখানো হয় না: স্থলে না সাগরে, সমতলে না পাহাড়ে। তিনি একটি বর্ণনা উল্লেখ করেন: আল্লাহ যখন কোনো বান্দার জান কোনো নির্দিষ্ট ভূমিতে কবজ করতে চান, তখন তার এমন কোনো প্রয়োজন তৈরি করে দেন, যা তাকে সেখানে টেনে নিয়ে যায়। কুরতুবী ইবন মাজাহর বর্ণনা দিয়ে একই কথা বলেন। জায়গাটা তাকদিরে আগেই ঠিক করা, অথচ যার জন্য সে জায়গা অপেক্ষা করছে, তার কাছেই তা গোপন।"
          },
          {
            "en": "Qatadah, cited by both at-Tabari and Ibn Kathir, ties the list together: these are matters Allah kept for Himself, disclosed to no angel brought near and no sent prophet. No one knows the year or the month of the Hour, or whether it comes by night or by day; no one knows the hour the rain will fall. The verse binds the farthest thing, the end of the world, to the nearest, your own last breath, and sets them both in one sealed hand.",
            "bn": "তাবারী ও ইবন কাসীর দুজনেই কাতাদার একটি কথা উদ্ধৃত করেন, যা পুরো তালিকাটিকে এক সুতোয় গেঁথে দেয়: এগুলো এমন বিষয়, যা আল্লাহ নিজের জন্য রেখে দিয়েছেন, নৈকট্যপ্রাপ্ত কোনো ফেরেশতা বা প্রেরিত কোনো নবীকেও জানাননি। কিয়ামত কোন বছর বা কোন মাসে হবে, রাতে আসবে না দিনে, কেউ জানে না। বৃষ্টি কোন সময়ে নামবে, তাও কেউ জানে না। সবচেয়ে দূরের ব্যাপার দুনিয়ার শেষ, আর সবচেয়ে কাছের ব্যাপার আপনার নিজের শেষ নিঃশ্বাস। আয়াতটি এ দুটিকে একসঙ্গে বেঁধে একই সিল-করা হাতে রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Against The Diviner",
          "bn": "গণকের দাবির বিপরীতে"
        },
        "p": [
          {
            "en": "Al-Qurtubi draws the practical edge. He reports Ibn ʿAbbas: these five none knows but Allah, not an angel brought near nor a prophet sent, and whoever claims to know any of them has denied the Qur'an, for he contradicts it. Yet the prophets, Ibn ʿAbbas adds, do know much of the unseen when Allah informs them. The target of the verse is the soothsayer, the astrologer, the man who claims to call down rain by the stars.",
            "bn": "কুরতুবী এর বাস্তব দিকটা সামনে আনেন। তিনি ইবন আব্বাস থেকে বর্ণনা করেন: এই পাঁচটি আল্লাহ ছাড়া কেউ জানে না, নৈকট্যপ্রাপ্ত কোনো ফেরেশতাও না, প্রেরিত কোনো নবীও না। আর যে এগুলোর কোনোটি জানার দাবি করে, সে কুরআনকে অস্বীকার করল, কারণ সে কুরআনের বিরোধিতা করছে। তবে ইবন আব্বাস যোগ করেন, আল্লাহ জানালে নবীরা গায়েবের অনেক কিছুই জানেন। আয়াতের নিশানা হলো গণক, জ্যোতিষী, আর সেই লোক যে নক্ষত্রের হিসাব দিয়ে বৃষ্টি নামানোর দাবি করে।"
          },
          {
            "en": "Ma'arif al-Qur'an answers the obvious question: what of the saint whose foretelling came true, or the astrologer who now and then hits the mark? Neither breaches the verse. The knowledge it reserves is knowledge without any medium, whole and absolute; what reaches a servant by inspiration is partial and fallible, and what an astrologer offers, it notes, scarcely yields one truth in ten lies. A lucky fragment is not the knowledge of the unseen. The whole of it stays where the verse puts it.",
            "bn": "মাআরিফুল কুরআন স্বাভাবিক প্রশ্নটির জবাবও দেয়: যে ওলির ভবিষ্যদ্বাণী সত্য হয়েছে, কিংবা যে জ্যোতিষীর কথা মাঝেমধ্যে মিলে যায়, তাদের বেলায় কী? কেউই আয়াতের কথা ভাঙে না। আয়াত যে জ্ঞান আল্লাহর জন্য নির্দিষ্ট রাখে, তা কোনো মাধ্যম ছাড়া, পূর্ণ ও নিরঙ্কুশ জ্ঞান। ইলহামের মাধ্যমে বান্দার কাছে যা পৌঁছায় তা আংশিক, তাতে ভুলও হতে পারে। আর বইটি বলে, জ্যোতিষীর দশটা মিথ্যার মধ্যে একটা সত্য মেলে কি না সন্দেহ। কাকতালীয়ভাবে মিলে যাওয়া এক টুকরো কথা গায়েবের জ্ঞান নয়। পুরো জ্ঞান রয়ে যায় সেখানেই, যেখানে আয়াত তা রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living The Not-Knowing",
          "bn": "না-জানাকে নিয়ে বাঁচা"
        },
        "p": [
          {
            "en": "As-Sa'di ends his comment on a note worth keeping. Of His complete wisdom, he says, Allah hid the knowledge of these five from His servants, for in the hiding lie benefits plain to anyone who reflects. A person who knew the day of his death would despair or stall; another who knew tomorrow's gain would stop trusting and gamble. Not knowing keeps the heart working — hoping, fearing, depending — in a way that certainty would quietly kill.",
            "bn": "সা'দী তাঁর আলোচনা শেষ করেন এমন একটি কথায়, যা মনে রাখার মতো। তিনি বলেন, আল্লাহ তাঁর পূর্ণ হিকমতের কারণে এই পাঁচটির জ্ঞান বান্দাদের কাছ থেকে গোপন রেখেছেন, কারণ এই গোপন রাখার মধ্যে এমন কল্যাণ আছে, যা একটু চিন্তা করলেই যে কেউ বুঝতে পারে। যে মানুষ নিজের মৃত্যুর দিন জানত, সে হয় হতাশ হয়ে পড়ত, নয়তো হাত গুটিয়ে বসে থাকত। যে আগামীকালের লাভ জানত, সে তাওয়াক্কুল ছেড়ে জুয়ায় নামত। না-জানা হৃদয়কে সচল রাখে: আশায়, ভয়ে, নির্ভরতায়। নিশ্চয়তা এলে এসব চুপচাপ মরে যেত।"
          },
          {
            "en": "That is why the list follows the warning of 31:33 so closely. A verse earlier, mankind was told not to let the worldly life delude it, nor the Deceiver deceive it about Allah. Delusion feeds on a felt certainty about tomorrow, the quiet assumption that there will be time. These five unknowns starve it. You cannot safely bank on a day you were never promised, in a place you were never shown, for an earning you cannot foresee. The surah closes by handing the reader, in place of knowledge, the humility to live without it.",
            "bn": "এ কারণেই তালিকাটি ৩১:৩৩ আয়াতের সতর্কবাণীর এত কাছে এসেছে। ঠিক আগের আয়াতে মানুষকে বলা হয়েছে, দুনিয়ার জীবন যেন তাকে ধোঁকায় না ফেলে, আর সেই মহাপ্রতারক যেন আল্লাহর ব্যাপারে তাকে প্রতারিত না করে। ধোঁকার খোরাক হলো আগামীকাল নিয়ে মনের ভেতরের একটা নিশ্চয়তা, চুপচাপ ধরে নেওয়া যে সময় তো আছেই। এই পাঁচটি না-জানা সেই খোরাক বন্ধ করে দেয়। যে দিনের কোনো প্রতিশ্রুতি আপনাকে দেওয়া হয়নি, যে জায়গা আপনাকে দেখানো হয়নি, যে উপার্জন আপনি আগে থেকে দেখতে পান না, তার ওপর নিশ্চিন্তে ভরসা করা চলে না। সূরাটি শেষ হয় পাঠকের হাতে জ্ঞানের বদলে এমন বিনয় তুলে দিয়ে, যা নিয়ে জ্ঞান ছাড়াই বাঁচা যায়।"
          }
        ]
      }
    ]
  }
});
