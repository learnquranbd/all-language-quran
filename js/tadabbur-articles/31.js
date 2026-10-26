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
            "en": "What follows is not an abstract proof but a list of things anyone can check by looking: a sky with no visible support, ground held still, animals in every direction, rain, and crops. Each item is handed over as evidence, and the whole set is sealed in the very next verse with a single demand in 31:11: this is the creation of Allah, so show Me what those besides Him made. The believer is being taught how to argue, and also how to see.",
            "bn": "এরপর যা আসে, তা কোনো বিমূর্ত প্রমাণ নয়; বরং এমন কিছু জিনিসের তালিকা, যা যে কেউ তাকিয়েই যাচাই করতে পারে: খুঁটি ছাড়া আকাশ, স্থির মাটি, চারদিকে ছড়ানো প্রাণী, বৃষ্টি আর ফসল। প্রতিটি জিনিস প্রমাণ হিসেবে সামনে রাখা হয়েছে, আর ঠিক পরের আয়াতে, ৩১:১১-তে, একটিমাত্র দাবি দিয়ে গোটা তালিকার ইতি টানা হয়েছে: এ তো আল্লাহর সৃষ্টি; এবার আমাকে দেখাও, তিনি ছাড়া অন্যরা কী সৃষ্টি করেছে। ঈমানদারকে এখানে শেখানো হচ্ছে কীভাবে যুক্তি দিতে হয়, আর কীভাবে দেখতে হয়।"
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
            "en": "This is not the only place the Qur'an raises a pillarless sky as proof. Ma'arif al-Qur'an points to 13:2, Allah is the One who raised the heavens without pillars that you see, which opens Surah ar-Ra'd with the same image. Ibn Kathir links the two verses: he settles the grammar of the phrase at the earlier passage and here simply refers back to it. Reading them side by side shows a habit of the Qur'an: it returns to the same sign in new settings, trusting that a true proof only deepens on a second hearing.",
            "bn": "খুঁটিহীন আকাশকে প্রমাণ হিসেবে কুরআন শুধু এখানেই আনেনি। মাআরিফুল কুরআন দেখিয়ে দেয় ১৩:২ আয়াত: 'আল্লাহ, যিনি আকাশকে উঁচু করেছেন খুঁটি ছাড়া, যা তোমরা দেখছ'। এই একই ছবি দিয়েই সূরা রাদ শুরু হয়। ইবন কাসীর আয়াত দুটিকে জুড়ে দেখেন: বাক্যাংশটির ব্যাকরণের মীমাংসা তিনি করেন আগের জায়গাতেই, আর এখানে শুধু সেদিকে ফিরিয়ে দেন। দুটি আয়াত পাশাপাশি পড়লে কুরআনের একটা রীতি চোখে পড়ে: নতুন প্রসঙ্গে কুরআন বারবার একই নিদর্শনে ফিরে আসে, কারণ সত্য প্রমাণ দ্বিতীয়বার শুনলে আরও গভীরে নামে।"
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
          "en": "A Voice Within the Counsel",
          "bn": "নসীহতের মাঝে আরেক কণ্ঠ"
        },
        "p": [
          {
            "en": "Luqman is talking to his son. In 31:13 he forbids him shirk, and in 31:16 he picks up again with ya bunayya, my dear son. Between the two stands a sentence whose speaker can only be Allah: wa wassayna al-insana bi-walidayhi, and We have enjoined upon man concerning his parents, closing with ilayya al-masir, to Me is the return. Al-Qurtubi names the device at once: these two verses are an interjection in the midst of Luqman's counsel. He then lists, from al-Qushayri, other ways of reading the join.",
            "bn": "লুকমান ছেলের সঙ্গে কথা বলছেন। ৩১:১৩ আয়াতে তিনি তাকে শিরক থেকে নিষেধ করেন, আর ৩১:১৬ আয়াতে আবার শুরু করেন ইয়া বুনাইয়্যা, হে আমার বাছা, বলে। এ দুইয়ের মাঝখানে এমন একটি বাক্য, যার বক্তা আল্লাহ ছাড়া আর কেউ হতে পারেন না: ওয়া ওয়াসসাইনাল ইনসানা বিওয়ালিদাইহি, আমি মানুষকে তার পিতামাতার ব্যাপারে নির্দেশ দিয়েছি। বাক্যটি শেষ হয় ইলাইয়্যাল মাসীর দিয়ে: ফিরে আসা আমারই কাছে। কুরতুবী শুরুতেই কৌশলটির নাম বলে দেন: এ দুটি আয়াত লুকমানের উপদেশের মাঝখানে ঢুকে পড়া একটি অন্তর্বর্তী কথা। তারপর তিনি কুশাইরী থেকে এই জোড়টির আরও কয়েকটি ব্যাখ্যা তুলে ধরেন।"
          },
          {
            "en": "In one, this too is Luqman's advice, which Allah reports: do not associate, and do not obey your parents in shirk, for Allah enjoined obedience to them only where it is neither shirk nor sin. In another, it continues what Allah told Luqman in 31:12. As-Sa'di reads the order as a sequence of rights: having commanded His own right by forbidding shirk, Allah commanded the right of parents. Ibn Kathir's abridged English tafsir sets 17:23 beside the verse and remarks that the two duties are often mentioned together in the Qur'an.",
            "bn": "একটি ব্যাখ্যায় এটিও লুকমানেরই নসীহত, আল্লাহ যা আমাদের জানিয়েছেন: শিরক কোরো না, আর শিরকের ব্যাপারে পিতামাতার কথাও মেনো না। কারণ আল্লাহ তাঁদের আনুগত্যের নির্দেশ দিয়েছেন কেবল সেখানে, যেখানে তা শিরক বা গুনাহ নয়। আরেক ব্যাখ্যায় এটি ৩১:১২ আয়াতে লুকমানকে বলা আল্লাহর কথারই ধারাবাহিকতা। সা'দী ক্রমটিকে দেখেন হকের পরম্পরা হিসেবে: শিরক নিষেধ করে নিজের হকের আদেশ দেওয়ার পর আল্লাহ আদেশ দিলেন পিতামাতার হকের। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর আয়াতটির পাশে ১৭:২৩ রাখে, আর মন্তব্য করে যে কুরআনে এ দুটি দায়িত্ব প্রায়ই একসঙ্গে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Weakness Upon Weakness",
          "bn": "দুর্বলতার পরতে পরতে"
        },
        "p": [
          {
            "en": "Hamalathu ummuhu wahnan 'ala wahnin: his mother carried him, weakness upon weakness. At-Tabari glosses it as weakness upon weakness and strain upon strain, citing a line of Zuhayr about a weak, worn rope. The people of interpretation, he says, agree on the sense but differ over whose weakness is meant. Some said the pregnancy: Ibn 'Abbas (RA), strain after strain and one stage of creation after another; ad-Dahhak, weakness upon weakness; Qatada, exertion upon exertion. Others, Mujahid among them, said it is the child's weakness laid upon the weakness of the mother.",
            "bn": "হামালাতহু উম্মুহু ওয়াহনান আলা ওয়াহন: তার মা তাকে বহন করেছে দুর্বলতার উপর দুর্বলতা নিয়ে। তাবারী এর অর্থ করেন দুর্বলতার উপর দুর্বলতা, কষ্টের উপর কষ্ট। সাক্ষী হিসেবে আনেন যুহাইরের একটি পঙ্‌ক্তি, যেখানে আছে দুর্বল, জীর্ণ এক রশির কথা। তাঁর ভাষায়, তাফসীরবিদেরা অর্থে একমত, তবে কার দুর্বলতা বোঝানো হয়েছে তা নিয়ে তাঁদের মতভেদ। কেউ বলেছেন গর্ভধারণের কথা। ইবন আব্বাস (রাঃ) বলেন: কষ্টের পর কষ্ট, সৃষ্টির এক ধাপের পর আরেক ধাপ। দাহহাক বলেন: দুর্বলতার উপর দুর্বলতা। কাতাদা বলেন: পরিশ্রমের উপর পরিশ্রম। অন্যেরা, যাঁদের মধ্যে মুজাহিদ আছেন, বলেছেন: মায়ের দুর্বলতার উপর চাপানো সন্তানের দুর্বলতা।"
          },
          {
            "en": "Ibn Kathir has Mujahid say the hardship of the child's weakness, Qatada exertion upon exertion, and 'Ata' al-Khurasani weakness upon weakness. Al-Baghawi gives Mujahid as hardship upon hardship and quotes az-Zajjaj: when a woman conceives, weakness and hardship come upon her one after another. He adds, as something said, a threefold count: the pregnancy is a weakness, the labour pains a weakness, the delivery a weakness. Al-Qurtubi offers two pictures: she grows weaker every day she carries him, or a woman is delicate in make and pregnancy weakens her further.",
            "bn": "ইবন কাসীরে মুজাহিদের কথা: সন্তানের দুর্বলতার কষ্ট। কাতাদার কথা: পরিশ্রমের উপর পরিশ্রম। আতা আল-খুরাসানীর কথা: দুর্বলতার উপর দুর্বলতা। বাগাভী মুজাহিদের উক্তি আনেন কষ্টের উপর কষ্ট হিসেবে, আর উদ্ধৃত করেন যাজ্জাজকে: নারী গর্ভবতী হলে দুর্বলতা আর কষ্ট একটার পর একটা তার উপর আসতে থাকে। এরপর 'বলা হয়' কথাটি দিয়ে তিনি তিন ধাপের একটি হিসাব জুড়ে দেন: গর্ভ এক দুর্বলতা, প্রসববেদনা আরেক দুর্বলতা, প্রসব আরেক দুর্বলতা। কুরতুবী দুটি ছবি দেন। হয় মা যত দিন সন্তান বহন করেন, প্রতিদিন আরও দুর্বল হন। নয়তো নারী গড়নেই কোমল, আর গর্ভ তাঁকে আরও দুর্বল করে।"
          },
          {
            "en": "As-Sa'di turns the phrase into a list a mother would recognise: hardship upon hardship from the time the child is a drop, through the cravings, the sickness, the weakness and the heaviness, the change in her whole state, and then the pain of giving birth, that severe pain. Al-Qurtubi records that 'Isa ath-Thaqafi read wahanan 'ala wahanin, with the middle letter voweled, a reading also narrated from Abu 'Amr, and says the two forms mean the same. On the grammar he gives al-Qushayri taking wahnan as a verbal noun, and an-Nahhas taking it as an object whose preposition has dropped: she carried him with weakness upon weakness.",
            "bn": "সা'দী শব্দবন্ধটিকে এমন এক তালিকায় খুলে দেন, যা যেকোনো মা চিনবেন। সন্তান যখন এক ফোঁটা পানি, তখন থেকেই কষ্টের উপর কষ্ট। তারপর খাবারে অরুচি আর অদ্ভুত চাহিদা, অসুস্থতা, দুর্বলতা, ভার, গোটা অবস্থার বদল, আর শেষে প্রসবের সেই তীব্র যন্ত্রণা। কুরতুবী জানান, ঈসা আস-সাকাফী পড়েছেন ওয়াহানান আলা ওয়াহানিন, মাঝের হরফে যবর দিয়ে, আর আবূ আমর থেকেও এ পাঠ বর্ণিত। তাঁর মতে দুই রূপের অর্থ একই। শব্দের গঠন নিয়ে তিনি আনেন কুশাইরীর মত, ওয়াহনান ক্রিয়ার মূল রূপ। আর নাহহাসের মত, এর আগের অব্যয়টি বাদ পড়েছে: মা তাকে বহন করেছেন দুর্বলতার উপর দুর্বলতা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Weaned Within Two Years",
          "bn": "দুই বছরে দুধ ছাড়ানো"
        },
        "p": [
          {
            "en": "Wa fisaluhu fi 'amayn: and his weaning is in two years. At-Tabari explains it as his weaning at the close of two years, and notes that the word close is left unsaid because the speech makes it plain, as in 12:82, ask the town, meaning its people. Al-Qurtubi says what fisal points to is the weaning itself, named by its goal and end; to separate from something is to become distinct from it, which is why a weaned young camel is called a fasil. He records that al-Hasan and Ya'qub read wa fasluhu, and calls the two forms dialects of one word.",
            "bn": "ওয়া ফিসালুহু ফী আমাইন: আর তার দুধ ছাড়ানো দুই বছরে। তাবারীর ব্যাখ্যা: দুই বছর পূর্ণ হলে তার দুধ ছাড়ানো। 'পূর্ণ হওয়া' কথাটি উহ্য, কারণ কথার ধরনেই তা বোঝা যায়, যেমন ১২:৮২ আয়াতে 'জনপদকে জিজ্ঞেস করো' মানে জনপদের মানুষকে। কুরতুবী বলেন, ফিসাল দিয়ে আসলে দুধ ছাড়ানোই উদ্দেশ্য, তার শেষ সীমা দিয়ে তাকে নাম দেওয়া হয়েছে। কোনো কিছু থেকে আলাদা হওয়া মানে তা থেকে পৃথক হয়ে যাওয়া, আর এজন্যই দুধ-ছাড়া উটশাবককে ফাসীল বলা হয়। তিনি জানান, হাসান ও ইয়াকূব পড়েছেন ওয়া ফাসলুহু, আর দুটিকে তিনি একই শব্দের দুই আঞ্চলিক রূপ বলেন।"
          },
          {
            "en": "Ibn Kathir reads the phrase as the child's rearing and nursing after birth within two years, and joins it to 2:233: mothers nurse their children two full years, for whoever wishes to complete the nursing. As-Sa'di sees in those two years a child who clings to his mother's custody, care and milk, and then asks a question of his own: when a woman carries such hardships for her child, and with such love, is it not fitting that the child be urged, and urged again, to do her every kindness?",
            "bn": "ইবন কাসীর শব্দবন্ধটির অর্থ করেন: জন্মের পর দুই বছরের মধ্যে সন্তানের লালন ও দুধপান। তিনি একে জুড়ে দেন ২:২৩৩ আয়াতের সঙ্গে: মায়েরা তাদের সন্তানদের পূর্ণ দুই বছর দুধ পান করাবে, যে দুধপানের মেয়াদ পূর্ণ করতে চায় তার জন্য। সা'দী এই দুই বছরে দেখেন এমন এক শিশু, যে মায়ের কোল, যত্ন আর দুধ আঁকড়ে থাকে। তারপর তিনি নিজেই প্রশ্ন তোলেন: যে নারী এত মমতা নিয়ে সন্তানের জন্য এত কষ্ট বয়ে বেড়ান, তাঁর জন্য কি সন্তানকে বারবার পূর্ণ সদাচরণের তাগিদ দেওয়াই শোভন নয়?"
          }
        ]
      },
      {
        "h": {
          "en": "Thirty Months Less Twenty-Four",
          "bn": "ত্রিশ থেকে চব্বিশ বাদ"
        },
        "p": [
          {
            "en": "Ibn Kathir reports a deduction drawn from this verse. Ibn 'Abbas (RA) and other imams derived from it that the shortest term of pregnancy is six months, because Allah says in another verse, 46:15, and his bearing and his weaning are thirty months. The arithmetic is left implied: if weaning takes two years, twenty-four months, thirty months leave six for the bearing. It is reported here as the tafsir carries it, with no ruling given in this article's own voice.",
            "bn": "ইবন কাসীর এ আয়াত থেকে বের করা একটি সিদ্ধান্তের কথা জানান। ইবন আব্বাস (রাঃ) ও অন্য ইমামেরা এখান থেকে বুঝেছেন, গর্ভধারণের সর্বনিম্ন মেয়াদ ছয়টি মাস। কারণ আরেক আয়াতে, ৪৬:১৫-এ, আল্লাহ বলেন: তাকে গর্ভে ধারণ আর তার দুধ ছাড়ানো ত্রিশ মাস। হিসাবটা তিনি খুলে বলেননি। দুধ ছাড়াতে যদি দুই বছর, অর্থাৎ চব্বিশ মাস লাগে, তবে ত্রিশ মাস থেকে গর্ভের জন্য থাকে ছয়টি মাস। কথাটি এখানে তাফসীরের বর্ণনা হিসেবেই রইল। এ লেখা নিজের পক্ষ থেকে কোনো বিধান দিচ্ছে না।"
          },
          {
            "en": "Al-Qurtubi turns to the law of nursing. People are agreed, he says, on the two years as the term of nursing in matters of rulings and maintenance. On which nursing creates the milk kinship that bars marriage, they differ. One group fixed the limit strictly, with nothing added and nothing taken away. Another allowed the two years and a month or so joined to them, when the nursing ran on without a break. A third held that if a child was weaned before the two years and left the milk, what he drank later within them does not create the bond.",
            "bn": "কুরতুবী এরপর দুধপানের বিধানে যান। তাঁর ভাষায়, বিধান ও ভরণপোষণের ক্ষেত্রে দুধপানের মেয়াদ দুই বছর, এ নিয়ে সবাই একমত। কিন্তু কোন দুধপানে দুধ-সম্পর্ক তৈরি হয়ে বিয়ে হারাম হয়, তাতে মতভেদ আছে। এক দল সীমাটি কড়াভাবে বেঁধে দিয়েছেন, তাতে বাড়তি-কমতি নেই। আরেক দল দুই বছরের সঙ্গে লাগোয়া এক মাস বা তার কাছাকাছি সময়ও ধরেছেন, যদি দুধপান একটানা চলতে থাকে। তৃতীয় দলের মত: দুই বছরের আগেই শিশুর দুধ ছাড়ানো হলে এবং সে দুধ ছেড়ে দিলে, ওই দুই বছরের ভেতরে পরে যা পান করে তাতে সম্পর্ক তৈরি হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Mother's Three Shares",
          "bn": "মায়ের তিন ভাগ"
        },
        "p": [
          {
            "en": "Al-Qurtubi notices what the verse does with the two parents. Both are named in the command, but the mother alone is given a degree for the mention of carrying and another for the mention of nursing, so that, by his count, she holds three ranks and the father one. He likens it to the hadith in which a man asked who most deserved his dutifulness and was told your mother three times, then your father, giving the father a quarter of the devotion, as in this verse. Ma'arif al-Qur'an reaches a similar point: because the mother bears most of the hardship of rearing, her right comes before the father's.",
            "bn": "দুই অভিভাবকের বেলায় আয়াতটি কী করে, কুরতুবী তা লক্ষ করেন। আদেশে দুজনেরই নাম আছে, কিন্তু কেবল মাকে দেওয়া হয়েছে গর্ভধারণের উল্লেখে একটি মর্যাদা, আর দুধপানের উল্লেখে আরেকটি। তাঁর হিসাবে এতে মায়ের হয় তিনটি স্তর, বাবার একটি। তিনি এর মিল দেখান সেই হাদীসের সঙ্গে, যেখানে এক ব্যক্তি জানতে চেয়েছিল কে তার সদাচরণের সবচেয়ে বেশি হকদার, আর উত্তরে তিনবার শুনেছিল 'তোমার মা', তারপর 'তোমার বাবা'। ফলে বাবার ভাগে সদাচরণের এক-চতুর্থাংশ, ঠিক এ আয়াতের মতো। মাআরিফুল কুরআনও কাছাকাছি কথা বলে: সন্তান লালনের বেশির ভাগ কষ্ট মা বহন করেন, তাই মায়ের হক বাবার হকের আগে।"
          },
          {
            "en": "Al-Qurtubi gives the report without naming a collection, and his wording matches the opening of at-Tirmidhi's (1897), from Bahz ibn Hakim, from his father, from his grandfather: I said, O Messenger of Allah, to whom should I be most dutiful? He said: your mother. I said: then whom? He said: your mother. I said: then whom? He said: your mother. I said: then whom? He said: then your father, then the nearest, and then the next nearest. At-Tirmidhi grades it hasan. Al-Bukhari (5971) records the same answer, the mother three times and then the father, from Abu Hurayra (RA).",
            "bn": "কুরতুবী বর্ণনাটি কোনো সংকলনের নাম ছাড়াই আনেন। তাঁর শব্দ মেলে তিরমিযীর বর্ণনার (১৮৯৭) শুরুর অংশের সঙ্গে। বাহয ইবন হাকীম তাঁর বাবা থেকে, তিনি তাঁর দাদা থেকে বর্ণনা করেন: আমি বললাম, হে আল্লাহর রাসূল, আমি সবচেয়ে বেশি সদাচরণ করব কার সঙ্গে? তিনি বললেন: তোমার মা। বললাম: তারপর কে? বললেন: তোমার মা। বললাম: তারপর কে? বললেন: তোমার মা। বললাম: তারপর কে? বললেন: তারপর তোমার বাবা, তারপর যে সবচেয়ে নিকটাত্মীয়, তারপর তার পরের জন। তিরমিযী একে হাসান বলেছেন। বুখারী (৫৯৭১) আবূ হুরাইরা (রাঃ) থেকে একই উত্তর বর্ণনা করেছেন: তিনবার মা, তারপর বাবা।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Thanks, One Return",
          "bn": "দুই শোকর, এক প্রত্যাবর্তন"
        },
        "p": [
          {
            "en": "Ibn Kathir explains why the mother's story comes before the command. Allah mentions her rearing of the child, her fatigue and her sleepless nights and days, to remind the child of her earlier kindness, as in 17:24: and say, my Lord, have mercy on them as they raised me when I was small. For that reason, he says, the verse goes on: an ushkur li wa li-walidayk, be grateful to Me and to your parents.",
            "bn": "মায়ের কাহিনি কেন আদেশের আগে এল, ইবন কাসীর তা ব্যাখ্যা করেন। আল্লাহ মায়ের লালন, তাঁর ক্লান্তি আর রাতদিনের নির্ঘুম জেগে থাকার কথা বলেন, যাতে সন্তানের মনে পড়ে আগে মা তার প্রতি কত দয়া করেছেন। যেমন ১৭:২৪ আয়াতে: আর বলো, হে আমার রব, তাঁদের প্রতি দয়া করুন, যেমন তাঁরা ছোটবেলায় আমাকে লালন করেছেন। তাঁর ভাষায়, এজন্যই আয়াত এগিয়ে বলে: আনিশকুর লী ওয়া লিওয়ালিদাইক, আমার প্রতি ও তোমার পিতামাতার প্রতি কৃতজ্ঞ হও।"
          },
          {
            "en": "At-Tabari paraphrases in the language of a covenant: thank Me for My blessings upon you, and thank your parents for raising you and for the hardship they took on until your strength grew firm. As-Sa'di spells out what each thanks asks. Thanks to Allah is to stand in His servitude, fulfil His rights, and not use His blessings to disobey Him. Thanks to parents is gentle speech, kind words and fine deeds, humility, honour and reverence, bearing their needs, and avoiding every harm to them in word and deed. The Muyassar adds an order: thank Allah, then your parents.",
            "bn": "তাবারী কথাটি খুলে বলেন অঙ্গীকারের ভাষায়: তোমার উপর আমার নিয়ামতের জন্য আমার শোকর করো। আর পিতামাতার শোকর করো, কারণ তাঁরা তোমাকে লালন করেছেন, তোমার শক্তি পোক্ত হওয়া পর্যন্ত তোমার জন্য কষ্ট সয়েছেন। প্রতিটি শোকর কী দাবি করে, সা'দী তা আলাদা করে বলেন। আল্লাহর শোকর হলো তাঁর বান্দা হয়ে থাকা, তাঁর হক আদায় করা, আর তাঁর নিয়ামতকে তাঁর নাফরমানির কাজে না লাগানো। পিতামাতার শোকর হলো নরম কথা, কোমল ভাষা, সুন্দর আচরণ, বিনয়, সম্মান ও মর্যাদা, তাঁদের প্রয়োজন মেটানো, আর কথা বা কাজে কোনোভাবেই তাঁদের কষ্ট না দেওয়া। মুয়াসসার জোড়টিতে একটি ক্রম রাখে: আল্লাহর শোকর করো, তারপর পিতামাতার।"
          },
          {
            "en": "Then ilayya al-masir, to Me is the return. At-Tabari hears a question in it: to Allah is your return, and He will ask you about your thanks to Him, and about your thanks and dutifulness to your parents for the toil they met from you in infancy and boyhood. As-Sa'di gives the two outcomes: He will ask whether you fulfilled these rights, to reward you richly, or neglected them, to punish you. Ibn Kathir reads the clause as a promise: I will reward you for that with the fullest reward.",
            "bn": "তারপর ইলাইয়্যাল মাসীর: ফিরে আসা আমারই কাছে। তাবারী এতে একটি প্রশ্ন শুনতে পান: তোমার প্রত্যাবর্তন আল্লাহর কাছে, আর তিনি তোমাকে জিজ্ঞেস করবেন তাঁর শোকর নিয়ে। জিজ্ঞেস করবেন পিতামাতার শোকর আর তাঁদের প্রতি সদাচরণ নিয়েও, কারণ তোমার শৈশব ও কৈশোরে তাঁরা তোমার জন্য কত খাটুনি সয়েছেন। সা'দী দুটি পরিণতির কথা বলেন: তিনি জিজ্ঞেস করবেন তুমি এ হকগুলো আদায় করেছ, যাতে বিপুল সওয়াব দেন, নাকি নষ্ট করেছ, যাতে শাস্তি দেন। ইবন কাসীর একে প্রতিশ্রুতি হিসেবে পড়েন: এর জন্য আমি তোমাকে সবচেয়ে পূর্ণ প্রতিদান দেব।"
          }
        ]
      },
      {
        "h": {
          "en": "Sa'd and His Mother",
          "bn": "সা'দ ও তাঁর মা"
        },
        "p": [
          {
            "en": "At-Tabari closes with reports that the verse came down about Sa'd ibn Abi Waqqas (RA) and his mother. Some chains tell the hunger strike much as Muslim does below. In another Sa'd tells her that if she had a hundred souls, they would all depart before he left his religion, and seeing he meant it, she ate. Al-Qurtubi calls revelation about Sa'd the sound view, held by the body of commentators.",
            "bn": "তাবারী শেষ করেন কয়েকটি বর্ণনা দিয়ে: আয়াতটি নাযিল হয়েছিল সা'দ ইবন আবী ওয়াক্কাস (রাঃ) ও তাঁর মায়ের ব্যাপারে। কয়েকটি সনদে মায়ের অনশনের কাহিনি প্রায় সেভাবেই এসেছে, যেভাবে নিচে মুসলিমের বর্ণনায় আছে। আরেকটিতে সা'দ মাকে বলেন, আপনার যদি একশোটি প্রাণও থাকত, আমি এ দ্বীন ছাড়ার আগে সবগুলোই বেরিয়ে যেত। ছেলে টলবে না দেখে মা খেয়ে নেন। কুরতুবী সা'দের ব্যাপারে নাযিল হওয়ার মতকেই সঠিক বলেন, আর জানান যে মুফাসসিরদের সাধারণ মত এটিই।"
          },
          {
            "en": "In Muslim's wording (1748), verses came down about Sa'd. Umm Sa'd swore never to speak to him until he disbelieved in his religion, and not to eat or drink. She said: you claim Allah enjoined you to your parents; I am your mother, and I command you this. She stayed three days until she fainted from exhaustion. A son of hers called 'Umara gave her a drink, and she began praying against Sa'd. Then Allah revealed: and We have enjoined upon man goodness to his parents; and if they strive to make you associate with Me; and in it, keep company with them in this world kindly.",
            "bn": "মুসলিমের (১৭৪৮) বর্ণনায় আছে, সা'দের ব্যাপারে কয়েকটি আয়াত নাযিল হয়েছিল। উম্মু সা'দ কসম খেলেন, সা'দ তার দ্বীন অস্বীকার না করা পর্যন্ত তিনি কখনো তার সঙ্গে কথা বলবেন না, খাবেন না, পান করবেন না। তিনি বললেন: তুমি তো বলো আল্লাহ তোমাকে পিতামাতার ব্যাপারে নির্দেশ দিয়েছেন। আমি তোমার মা, আর আমি তোমাকে এই আদেশ দিচ্ছি। তিনটি দিন এভাবে কাটিয়ে কষ্টে তিনি বেহুঁশ হয়ে পড়লেন। উমারা নামে তাঁর এক ছেলে উঠে তাঁকে পানি খাওয়াল, আর তিনি সা'দের বিরুদ্ধে বদদোয়া করতে লাগলেন। তখন আল্লাহ নাযিল করলেন: আমি মানুষকে পিতামাতার প্রতি সদাচরণের নির্দেশ দিয়েছি; আর যদি তারা তোমাকে আমার সঙ্গে শরীক করতে পীড়াপীড়ি করে; আর তাতেই আছে: দুনিয়াতে তাদের সঙ্গে সদ্ভাবে থাকো।"
          },
          {
            "en": "Muslim narrates it from Mus'ab ibn Sa'd, from his father, as the opening of a longer narration in his Sahih, the collection he confined to reports he judged sound. Its wording cites husnan, goodness, the phrasing of 29:8, together with keep company with them kindly from 31:15. That next verse sets the one limit: no obedience in shirk and kindness in company all the same.",
            "bn": "মুসলিম এটি বর্ণনা করেছেন মুসআব ইবন সা'দ থেকে, তিনি তাঁর বাবা থেকে। তাঁর সহীহ গ্রন্থে এটি একটি দীর্ঘ বর্ণনার শুরুর অংশ, আর এ গ্রন্থে তিনি কেবল সেসব বর্ণনা রেখেছেন, যেগুলো তাঁর বিচারে বিশুদ্ধ। এর শব্দে আছে হুসনান, অর্থাৎ সদাচরণ, যা ২৯:৮ আয়াতের ভাষা। সঙ্গে আছে ৩১:১৫ আয়াতের 'তাদের সঙ্গে সদ্ভাবে থাকো'। পরের ওই আয়াত একটিমাত্র সীমা টানে: শিরকে আনুগত্য নেই, তবু সঙ্গ দিতে হবে সদ্ভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanks That Outlives Them",
          "bn": "যে শোকর তাঁদের পরেও থাকে"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi both close the thanks with a saying of Sufyan ibn 'Uyayna on this verse: whoever prays the five prayers has thanked Allah, and whoever supplicates for his parents after the five prayers has thanked them. It is a measure any child can keep, whether the parents are near or far, living or dead. A parent in the grave can no longer be served with the hand or the purse, but the supplication after each prayer can still be made, and by Sufyan's measure the second thanks is not closed.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই শোকরের আলোচনা শেষ করেন এ আয়াত প্রসঙ্গে সুফইয়ান ইবন উয়াইনার একটি উক্তি দিয়ে: যে পাঁচ ওয়াক্ত নামায পড়ে, সে আল্লাহর শোকর করল। আর যে পাঁচ ওয়াক্ত নামাযের পর পিতামাতার জন্য দোয়া করে, সে তাঁদের শোকর করল। এ মাপকাঠি যেকোনো সন্তান ধরে রাখতে পারেন, মা-বাবা কাছে থাকুন বা দূরে, জীবিত থাকুন বা মৃত। কবরে শুয়ে থাকা মা-বাবার সেবা আর হাতে বা টাকায় করা যায় না। কিন্তু প্রতিটি নামাযের পর দোয়া এখনো করা যায়, আর সুফইয়ানের মাপে দ্বিতীয় শোকরের দরজা বন্ধ হয়নি।"
          },
          {
            "en": "Not every reader comes to this verse with an easy story. Some parents were harsh, absent or unjust; some died before anything could be mended. The verse does not ask anyone to rewrite the past. Its reasons are concrete, the carrying, the weaning, the years of care, and the conduct as-Sa'di draws from it is gentle speech and the avoidance of harm, which a wounded child can still offer as far as he is able. Then Luqman speaks again, and 31:17 to 31:19 carry his counsel on to prayer and manners.",
            "bn": "সবাই এ আয়াতের কাছে সহজ কোনো গল্প নিয়ে আসেন না। কারও মা-বাবা ছিলেন কঠোর, কারও অনুপস্থিত, কারও অন্যায়কারী। কেউ চলে গেছেন কোনো কিছু মিটমাট হওয়ার আগেই। আয়াত কাউকে অতীত নতুন করে লিখতে বলে না। এর কারণগুলো চোখে দেখা যায়: গর্ভধারণ, দুধ ছাড়ানো, যত্নের বছরগুলো। আর সা'দী এ থেকে যে আচরণ বের করেন তা হলো নরম কথা আর কষ্ট না দেওয়া, যা আহত সন্তানও সাধ্যমতো দিতে পারেন। এরপর লুকমান আবার কথা বলেন, আর ৩১:১৭ থেকে ৩১:১৯ তাঁর নসীহতকে নিয়ে যায় নামায ও আদব-কায়দার দিকে।"
          }
        ]
      }
    ]
  },
  "31:17-19": {
    "sections": [
      {
        "h": {
          "en": "The Counsel Turns Outward",
          "bn": "নসীহত এবার বাইরের দিকে"
        },
        "p": [
          {
            "en": "Luqman's counsel to his son has two halves. The first, in 31:13 and 31:16, is about what the son must believe: no partner beside Allah, and no deed so small, though it weigh a mustard seed and lie inside a rock, that Allah will not bring it forth. Between them stands Allah's own word on parents, in 31:14 and 31:15, which has its own article. With 31:17 to 31:19 the counsel turns outward: what the son must do, how he must face people, how he must walk and speak.",
            "bn": "ছেলের প্রতি লুকমানের নসীহতের দুটি ভাগ। প্রথম ভাগ ৩১:১৩ ও ৩১:১৬ আয়াতে, সেখানে কথা বিশ্বাস নিয়ে। আল্লাহর কোনো শরীক নেই। আর কোনো আমল যত ছোটই হোক, সরিষার দানার ওজনে হলেও, পাথরের ভেতরে লুকিয়ে থাকলেও, আল্লাহ তা বের করে আনবেন। এ দুইয়ের মাঝখানে পিতা-মাতা নিয়ে আল্লাহর নিজের কথা, ৩১:১৪ ও ৩১:১৫ আয়াতে, যার আলোচনা আলাদা প্রবন্ধে আছে। ৩১:১৭ থেকে ৩১:১৯ আয়াতে এসে নসীহত মুখ ফেরায় বাইরের দিকে। ছেলে কী করবে, মানুষের সামনে কীভাবে দাঁড়াবে, কীভাবে হাঁটবে, কীভাবে কথা বলবে।"
          },
          {
            "en": "Of the speaker the commentaries fetched here say little. Ibn Kathir calls him Luqman al-Hakim, Luqman the Wise. Al-Baghawi, closing his comment on 31:19, reports from Wahb that Luqman spoke twelve thousand chapters of wisdom, and from Khalid ar-Rab'i that he was an Abyssinian slave. His master told him to slaughter a sheep and bring its two best morsels, and he brought the tongue and the heart; told to bring the two worst, he brought the same. Nothing is better than these when they are good, he said, nor worse when they are bad.",
            "bn": "বক্তা নিজে কে ছিলেন, এ আয়াতগুলোর জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে সেগুলো তা নিয়ে কমই বলে। ইবন কাসীর তাঁকে বলেন লুকমান আল-হাকীম, প্রজ্ঞাবান লুকমান। বাগাভী ৩১:১৯ আয়াতের আলোচনার শেষে ওয়াহবের সূত্রে আনেন, লুকমান প্রজ্ঞার ১২ হাজার অধ্যায় বলে গেছেন। আর খালিদ আর-রাবঈর সূত্রে আনেন, তিনি ছিলেন হাবশার এক গোলাম। মনিব একটি ভেড়া জবাই করে তার সবচেয়ে ভালো দুটি টুকরা আনতে বললেন। তিনি আনলেন জিহ্বা আর হৃৎপিণ্ড। সবচেয়ে খারাপ দুটি আনতে বলা হলে আনলেন সেই একই জিনিস। বললেন, এ দুটি ভালো থাকলে এদের চেয়ে ভালো কিছু নেই, খারাপ হলে এদের চেয়ে খারাপও কিছু নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "First the Prayer",
          "bn": "সবার আগে নামায"
        },
        "p": [
          {
            "en": "Ya bunayya, aqimi as-salah: my dear son, establish the prayer. At-Tabari glosses it with a single phrase, bi-hududiha, with its limits. Ibn Kathir widens it to its limits, its obligations and its times, and the Muyassar says complete, with its pillars, its conditions and its required acts. As-Sa'di explains why it is named first: Luqman urged it and singled it out because it is the greatest of the bodily acts of worship. The surah's portrait of the doer of good at 31:4 also opens with prayer.",
            "bn": "ইয়া বুনাইয়্যা, আকিমিস সালাহ: হে বৎস, নামায কায়েম করো। তাবারী এর ব্যাখ্যা দেন ছোট্ট কথায়, বিহুদূদিহা, অর্থাৎ তার সীমারেখা মেনে। ইবন কাসীর কথাটা আরও খুলে বলেন: তার সীমা, তার ফরয আর তার ওয়াক্ত মেনে। মুয়াসসার বলে, পরিপূর্ণভাবে, রুকন, শর্ত আর ওয়াজিবগুলো আদায় করে। নামায কেন সবার আগে, সা'দী তার কারণ বলেন। শারীরিক ইবাদতের মধ্যে নামাযই সবচেয়ে বড়, তাই লুকমান একে আলাদা করে উল্লেখ করে তাগিদ দিয়েছেন। সূরার শুরুতে ৩১:৪ আয়াতে সৎকর্মশীলের যে ছবি, তারও প্রথম কথা কায়েম রাখা নামায।"
          },
          {
            "en": "Ma'arif al-Qur'an calls prayer the master deed, which turns other deeds towards the better, and cites 29:45: surely the prayer restrains from indecency and wrong. For that reason, it says, naming prayer was enough to stand for the obligatory good deeds. It adds that iqamah means more than performing: the word carries doing the prayer with its essentials and manners in full, keeping its times, and being consistent in its requirements. The father is not asking for a prayer done now and then. He is asking for a prayer kept standing.",
            "bn": "মাআরিফুল কুরআন নামাযকে বলে সব আমলের সর্দার, যা অন্য আমলগুলোকেও ভালোর দিকে ঘুরিয়ে দেয়। প্রমাণ হিসেবে আনে ২৯:৪৫ আয়াত: নিশ্চয়ই নামায অশ্লীলতা ও মন্দ কাজ থেকে বিরত রাখে। এ কারণেই, তার মতে, ফরয নেক আমলগুলোর মধ্যে শুধু নামাযের নাম নেওয়াই যথেষ্ট মনে করা হয়েছে। সে আরও বলে, ইকামাহ মানে কেবল পড়ে ফেলা নয়। এর ভেতরে আছে রুকন ও আদব পুরোপুরি রক্ষা করা, ওয়াক্তের পাবন্দি আর নিয়মিত সব শর্ত পূরণ করা। বাবা তাই মাঝেমধ্যে পড়া নামায চাইছেন না। চাইছেন এমন নামায, যা সব সময় দাঁড়িয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Commanding Begins at Home",
          "bn": "আদেশের শুরু নিজের ঘরে"
        },
        "p": [
          {
            "en": "Wa-'mur bil-ma'ruf wa-nha 'anil-munkar: enjoin what is right and forbid what is wrong. At-Tabari's gloss names both objects: command people to obey Allah and follow His command, and forbid them from disobeying Allah and falling into what He has made unlawful. Ibn Kathir adds a measure, according to your capacity and your effort. The Muyassar adds a manner, with gentleness, softness and wisdom, according to your effort. Ma'arif al-Qur'an finds two duties here, making yourself better and making others better, and says both need great restraint and hard work.",
            "bn": "ওয়ামুর বিল মা'রূফি ওয়ানহা আনিল মুনকার: ভালো কাজের আদেশ দাও আর মন্দ কাজে নিষেধ করো। তাবারীর ব্যাখ্যায় দুটিরই বিষয় স্পষ্ট। মানুষকে আল্লাহর আনুগত্য আর তাঁর হুকুম মানার আদেশ দাও। আর আল্লাহর নাফরমানি ও তাঁর হারাম করা কাজে জড়ানো থেকে তাদের নিষেধ করো। ইবন কাসীর জুড়ে দেন একটি মাপ: তোমার সাধ্য ও চেষ্টা অনুযায়ী। মুয়াসসার জুড়ে দেয় পদ্ধতি: কোমলতা, নম্রতা আর হিকমতের সাথে, নিজের সাধ্যমতো। মাআরিফুল কুরআন এখানে দুটি দায়িত্ব দেখে, নিজেকে শোধরানো আর অন্যকে শোধরানো। তার মতে দুটোর জন্যই দরকার অনেক সংযম আর কঠোর পরিশ্রম।"
          },
          {
            "en": "Al-Qurtubi reads an order into the command. Luqman counselled his son with the greatest acts of obedience, he says, but he means this after the son has carried it out in himself and held himself back from wrong, and he quotes a line of verse: begin with yourself and forbid it its folly; when it has stopped, then you are wise. As-Sa'di reaches the same place by another road. Enjoining needs knowledge of the good and forbidding needs knowledge of the wrong, and the duty also needs what it cannot be completed without: gentleness, patience, and doing what one commands.",
            "bn": "কুরতুবী আদেশটির ভেতরে একটি ক্রম দেখেন। তাঁর মতে লুকমান ছেলেকে সবচেয়ে বড় ইবাদতগুলোর নসীহত করেছেন। তবে উদ্দেশ্য হলো, আগে ছেলে নিজে এগুলো মেনে চলবে আর নিজেকে মন্দ থেকে ফিরিয়ে রাখবে। এরপর তিনি একটি কবিতার চরণ উদ্ধৃত করেন: নিজেকে দিয়ে শুরু করো, তাকে তার ভ্রষ্টতা থেকে থামাও; সে থামলে তবেই তুমি জ্ঞানী। সা'দী অন্য পথে একই জায়গায় পৌঁছান। আদেশ দিতে হলে ভালোকে চিনতে হয়, নিষেধ করতে হলে মন্দকে। আর যা ছাড়া এ দায়িত্ব পূর্ণ হয় না, তাও এর ভেতরে ঢুকে যায়: কোমলতা, ধৈর্য, আর যা বলছে নিজে তা করা।"
          },
          {
            "en": "So, as-Sa'di concludes, the clause holds two projects at once: completing oneself by doing good and leaving evil, and completing others by commanding and forbidding. Patience, which he lists among those needs, is then stated outright in the next words. The order of Luqman's sentence carries an argument. A son who prays, and who has begun with himself, is the one fit to speak to others, and he will need patience as soon as he does.",
            "bn": "সা'দীর সিদ্ধান্ত তাই এই: এক বাক্যে দুটি কাজ একসাথে। ভালো করা আর মন্দ ছাড়ার মাধ্যমে নিজেকে পূর্ণ করা, আর আদেশ-নিষেধের মাধ্যমে অন্যকে পূর্ণ করা। তিনি এটাও লক্ষ করেন, যে ধৈর্যকে তিনি এ দায়িত্বের অপরিহার্য শর্ত বলেছেন, আয়াতের ঠিক পরের শব্দগুলোতেই তা স্পষ্ট করে বলা হয়েছে। লুকমানের বাক্যের ক্রমটাই তাই একটা যুক্তি বহন করে। যে ছেলে নামায পড়ে এবং নিজেকে দিয়ে শুরু করেছে, অন্যকে বলার যোগ্য সে-ই। আর বলতে শুরু করলেই তার ধৈর্যের দরকার পড়বে।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience and Whose Resolve",
          "bn": "ধৈর্য, আর সংকল্প কার"
        },
        "p": [
          {
            "en": "Wa-sbir 'ala ma asabak: and be patient over what befalls you. Most of the commentators tie this to the clause before it. At-Tabari: be patient over what reaches you from people for Allah's sake when you command right and forbid wrong, and let nothing you suffer from them turn you away from it. Ibn Kathir says Luqman knew that whoever does this will inevitably meet harm from people, so he commanded patience. Al-Baghawi and the Muyassar likewise name the harm. Al-Qurtubi adds that this degree of persistence under harm is a recommendation and a strength for Allah's sake, not an obligation.",
            "bn": "ওয়াসবির আলা মা আসাবাক: আর তোমার উপর যা আসে তাতে ধৈর্য ধরো। বেশিরভাগ মুফাসসির একে আগের বাক্যের সাথে জুড়ে পড়েন। তাবারী বলেন, ভালোর আদেশ আর মন্দের নিষেধ করতে গিয়ে আল্লাহর জন্য মানুষের কাছ থেকে যা সইতে হয়, তাতে ধৈর্য ধরো। তাদের দেওয়া কষ্ট যেন তোমাকে এ কাজ থেকে ফিরিয়ে না রাখে। ইবন কাসীরের ভাষায়, লুকমান জানতেন যে এ কাজ যে করে, মানুষের কাছ থেকে কষ্ট তাকে পেতেই হবে, তাই ধৈর্যের হুকুম দিলেন। বাগাভী ও মুয়াসসারও কষ্টের কথাই বলে। কুরতুবী যোগ করেন, কষ্ট সয়েও এতটা লেগে থাকা মুস্তাহাব এবং আল্লাহর পথে দৃঢ়তা, ফরয নয়।"
          },
          {
            "en": "Al-Qurtubi then reports a second view, introduced with it is said: the patience meant is over the hardships of this world, such as illness, so that distress does not carry a person out into disobedience to Allah. He calls it a good view, because it is general. Then comes inna dhalika min 'azm al-umur, that is of the matters of resolve. At-Tabari reads the resolve as Allah's: of the matters Allah has commanded as a firm resolve from Him, and he cites Ibn Jurayj: of what Allah has resolved upon, that is, what He has commanded.",
            "bn": "এরপর কুরতুবী 'বলা হয়' দিয়ে আরেকটি মত আনেন। এখানে ধৈর্য মানে দুনিয়ার কষ্টে ধৈর্য, যেমন অসুখবিসুখ, যাতে অস্থিরতা মানুষকে আল্লাহর নাফরমানির দিকে ঠেলে না দেয়। তিনি মতটিকে ভালো বলেন, কারণ এটি সব কষ্টকে শামিল করে। তারপর আসে ইন্না যালিকা মিন আযমিল উমূর, নিশ্চয়ই এটা দৃঢ় সংকল্পের কাজ। তাবারী এ সংকল্পকে আল্লাহর বলে পড়েন: যেসব কাজ আল্লাহ দৃঢ়ভাবে হুকুম করেছেন, এটা তার অন্তর্ভুক্ত। সাথে আনেন ইবন জুরাইজের কথা: আল্লাহ যা স্থির করেছেন, অর্থাৎ যা তিনি হুকুম করেছেন।"
          },
          {
            "en": "Al-Qurtubi lists three readings: Ibn Abbas's, that patience over hardships is of the reality of faith; Ibn Jurayj's; and a possible third, that these are noble traits and the resolves of firm people who walk the road of salvation. He judges Ibn Jurayj's the most correct. As-Sa'di reads from the human side: matters a person resolves upon and cares for, which only people of resolve are granted. Al-Baghawi keeps both. They differ too on what that points to: patience over people's harm for Ibn Kathir, everything Luqman counselled for as-Sa'di.",
            "bn": "কুরতুবী তিনটি ব্যাখ্যা তুলে ধরেন। ইবন আব্বাস (রাঃ)-এর মতে, কষ্টে ধৈর্য ঈমানের হাকীকতের অংশ। দ্বিতীয়টি ইবন জুরাইজের মত। তৃতীয় সম্ভাবনা হলো, এগুলো উত্তম চরিত্র আর নাজাতের পথে চলা দৃঢ়চেতা মানুষের সংকল্প। তিনি ইবন জুরাইজের মতকেই সবচেয়ে সঠিক বলেন। সা'দী পড়েন মানুষের দিক থেকে: এমন কাজ, যার জন্য মন বাঁধতে হয়, যত্ন নিতে হয়, আর যার তাওফীক কেবল দৃঢ়চেতারাই পায়। বাগাভী দুটি অর্থই রাখেন। 'এটা' বলতে কী বোঝানো হয়েছে, তা নিয়েও ভিন্নতা আছে। ইবন কাসীরের মতে মানুষের কষ্টে ধৈর্য, সা'দীর মতে লুকমানের পুরো নসীহত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Camel's Twisted Neck",
          "bn": "উটের বেঁকে যাওয়া ঘাড়"
        },
        "p": [
          {
            "en": "Wa la tusa''ir khaddaka lin-nas: and do not turn your cheek away from people. The readers differ over the verb. Al-Baghawi lists Ibn Kathir (the reader, not the commentator), Ibn Amir, Asim, Abu Ja'far and Ya'qub for tusa''ir, and the rest for tusa'ir, with a long a; al-Qurtubi adds tus'ir from al-Jahdari and says the meaning is close. At-Tabari accepts both main readings as correct. The root, he explains, is sa'ar, a disease that takes camels in the neck or head until the neck twists away from the head, and the arrogant man is likened to it.",
            "bn": "ওয়া লা তুসাইর খাদ্দাকা লিন্নাস: মানুষের দিক থেকে গাল ফিরিয়ে নিয়ো না। ক্রিয়াটির কিরাআতে ভিন্নতা আছে। বাগাভী জানান, ইবন কাসীর (এখানে কারী, মুফাসসির নন), ইবন আমির, আসিম, আবূ জা'ফর ও ইয়াকূব পড়েছেন তুসাইর, আর বাকিরা আলিফসহ তুসা'ইর। কুরতুবী জাহদারীর তুস'ইর পাঠও যোগ করেন এবং বলেন অর্থ কাছাকাছি। তাবারী প্রধান দুটি পাঠকেই সঠিক মানেন। মূল শব্দ সা'আর, তাঁর ব্যাখ্যায় এটি উটের এক রোগ, যা ঘাড়ে বা মাথায় ধরে। শেষে ঘাড় মাথা থেকে বেঁকে যায়। অহংকারী মানুষকে এরই সাথে তুলনা করা হয়েছে।"
          },
          {
            "en": "The early authorities explain the act in three ways. Ibn Abbas (RA), through at-Tabari's chain: do not be arrogant, despising Allah's servants and turning your face from them when they speak to you. Mujahid, in a second group: the man who has a grudge against his brother and turns away on seeing him, not out of pride. Ibrahim an-Nakha'i: twisting the mouth in speech. Ibn Kathir calls the first correct. Its positive form is in his words too: soften your side and open your face to them. Al-Qurtubi adds: when the least of them speaks, listen till he finishes, as the Prophet ﷺ did.",
            "bn": "কাজটা আসলে কী, পূর্বসূরিদের কাছে তার তিনটি ব্যাখ্যা পাওয়া যায়। তাবারীর সনদে ইবন আব্বাস (রাঃ) বলেন: অহংকার করো না, আল্লাহর বান্দাদের তুচ্ছ ভেবো না, তারা কথা বললে মুখ ফিরিয়ে নিয়ো না। দ্বিতীয় দলে মুজাহিদ: ভাইয়ের সাথে মনোমালিন্য আছে, তাকে দেখলেই মুখ ঘুরিয়ে নেয়, অহংকারে নয়। ইবরাহীম নাখঈর মতে, কথা বলার সময় মুখ বাঁকানো। ইবন কাসীর প্রথম মতকেই সঠিক বলেন। ইতিবাচক রূপটাও তাঁর কথায় আছে: নরম হও, তাদের দিকে হাসিমুখে তাকাও। কুরতুবী যোগ করেন, তাদের সবচেয়ে ছোটজনও কথা বললে শেষ পর্যন্ত কান দিয়ে শোনো, নবী ﷺ যেমন করতেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Strut and the Boaster",
          "bn": "দম্ভের চলন, বড়াইয়ের মুখ"
        },
        "p": [
          {
            "en": "Wa la tamshi fil-ardi marahan: do not walk through the earth exultantly. At-Tabari glosses marahan as mukhtalan, strutting. Al-Qurtubi calls it walking in elation with no task and no need. As-Sa'di names the cause within: exultance, boasting of blessings while forgetting the Giver, admiring oneself. Ma'arif al-Qur'an points to the ground underfoot: you were born from the earth and walk upon it, so know what you are. Ibn Kathir cites the same command at 17:37, which has its own article.",
            "bn": "ওয়া লা তামশি ফিল আরদি মারাহা: পৃথিবীতে গর্বভরে হেঁটো না। তাবারী মারাহার অর্থ করেন মুখতালান, অর্থাৎ দম্ভ দেখিয়ে। কুরতুবীর ভাষায়, কোনো কাজ বা প্রয়োজন ছাড়াই উল্লাসে মেতে হাঁটা। সা'দী ভেতরের কারণটা ধরিয়ে দেন: নিয়ামতের বড়াই, অথচ নিয়ামতদাতাকে ভুলে থাকা, নিজেকে নিয়ে মুগ্ধ থাকা। মাআরিফুল কুরআন পায়ের নিচের মাটির দিকে ইঙ্গিত করে। এই মাটি থেকেই আপনার জন্ম, এর উপরেই হাঁটেন, নিজের আসল পরিচয় মনে রাখুন। ইবন কাসীর এখানে ১৭:৩৭ আয়াতের একই আদেশ উদ্ধৃত করেন, যার আলোচনা আলাদা প্রবন্ধে আছে।"
          },
          {
            "en": "Inna Allaha la yuhibbu kulla mukhtalin fakhur. The commentators divide the two words between inside and outside. Ibn Kathir: the mukhtal admires himself, the fakhur boasts over others. As-Sa'di: mukhtal in himself, his bearing and his self-importance, fakhur in his speech. Al-Baghawi ties mukhtal to the walk and fakhur to people. Mujahid, in at-Tabari and al-Qurtubi, defines the fakhur as a man who counts over what Allah gave him and does not thank Allah. Qatada sums up the verse: He forbade him pride.",
            "bn": "ইন্নাল্লাহা লা ইউহিব্বু কুল্লা মুখতালিন ফাখূর। মুফাসসিররা দুটি শব্দকে ভেতর আর বাইরের মধ্যে ভাগ করে দেন। ইবন কাসীর: মুখতাল নিজেকে নিয়ে মুগ্ধ, ফাখূর অন্যের উপর বড়াই করে। সা'দী: মুখতাল নিজের মনে, চালচলনে আর নিজেকে বড় ভাবায়; ফাখূর তার কথায়। বাগাভী মুখতালকে জোড়েন হাঁটার সাথে, ফাখূরকে মানুষের সাথে আচরণে। তাবারী ও কুরতুবীতে মুজাহিদের সংজ্ঞা: ফাখূর সে, যে আল্লাহর দেওয়া জিনিস গুনে গুনে বলে বেড়ায়, অথচ আল্লাহর শোকর করে না। কাতাদা পুরো আয়াতের সারকথা বলেন: তিনি তাকে অহংকার থেকে নিষেধ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Measured Pace and Pitch",
          "bn": "মাপা চলন, মাপা স্বর"
        },
        "p": [
          {
            "en": "Wa-qsid fi mashyik: be moderate in your walk. At-Tabari: be humble in your walking, not proud and not hasty, but deliberate. He records that the early exegetes leaned different ways, Mujahid saying humility, Qatada saying He forbade him strutting, and Yazid ibn Abi Habib saying away from speed. Ibn Kathir: neither slow and sluggish nor excessively fast, but a just middle. Al-Qurtubi: between hurry and slowness, neither creeping like those who feign death nor leaping like ruffians. Al-Baghawi cites Ata: walk with dignity and calm, and gives 25:63, which has its own article.",
            "bn": "ওয়াকসিদ ফী মাশয়িক: চলায় মধ্যপন্থা অবলম্বন করো। তাবারী বলেন, হাঁটায় বিনয়ী হও, অহংকার কোরো না, তাড়াহুড়োও কোরো না, ধীরস্থির থাকো। তিনি জানান, পূর্বসূরি মুফাসসিররা ভিন্ন ভিন্ন দিকে জোর দিয়েছেন। মুজাহিদের মতে বিনয়, কাতাদার মতে দম্ভের চলন থেকে নিষেধ, আর ইয়াযীদ ইবন আবী হাবীবের মতে দ্রুততা থেকে বিরত থাকা। ইবন কাসীর বলেন, অলস ধীরগতিও নয়, মাত্রাছাড়া দ্রুতও নয়, বরং ঠিক মাঝামাঝি। কুরতুবীর ভাষায়, দ্রুততা আর ধীরতার মাঝখানে। মরার ভান করা মানুষের মতো গুটিগুটি নয়, বখাটেদের মতো লাফিয়েও নয়। বাগাভী আতার কথা আনেন, গাম্ভীর্য ও প্রশান্তি নিয়ে হাঁটো, আর উল্লেখ করেন ২৫:৬৩, যার আলোচনা আলাদা প্রবন্ধে আছে।"
          },
          {
            "en": "Wa-ghdud min sawtik: lower some of your voice. At-Tabari: lower it and keep it moderate when you speak. Al-Qurtubi: take from it what you need, for loudness beyond need is a strain that hurts; he tells of Umar (RA) saying to the muezzin Abu Mahdhurah, who strained the call past his strength, that he feared his belly would split. Ibn Kathir: do not raise your voice where there is no benefit. As-Sa'di gives the reason: courtesy with people and with Allah. Ma'arif al-Qur'an notes that Umar (RA) spoke so people heard him without strain, so the middle is not a whisper.",
            "bn": "ওয়াগদুদ মিন সাওতিক: কণ্ঠস্বর কিছুটা নিচু করো। তাবারী বলেন, স্বর নামিয়ে রাখো, কথা বলার সময় মাঝারি রাখো। কুরতুবী বলেন, যতটুকু দরকার ততটুকুই নাও, কারণ প্রয়োজনের বেশি জোরে বলা এমন কষ্ট, যা অন্যকেও কষ্ট দেয়। তিনি উমর (রাঃ)-এর একটি ঘটনা আনেন। মুয়াযযিন আবূ মাহযূরা সাধ্যের বেশি টেনে আযান দিচ্ছিলেন। উমর (রাঃ) তাঁকে বললেন, আমার ভয় হচ্ছিল তোমার পেট না ফেটে যায়। ইবন কাসীর বলেন, যেখানে লাভ নেই সেখানে গলা চড়িয়ো না। সা'দী কারণটা বলেন: মানুষের সাথে আর আল্লাহর সাথে আদব। মাআরিফুল কুরআন জানায়, উমর (রাঃ) এমনভাবে কথা বলতেন যে মানুষ কষ্ট ছাড়াই শুনতে পেত। তাই মাঝামাঝি মানে ফিসফিস নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Donkey Is Named",
          "bn": "গাধার নাম কেন এল"
        },
        "p": [
          {
            "en": "Inna ankara al-aswati la-sawtu al-hamir: the most disagreeable of sounds is the voice of donkeys. At-Tabari records two glosses of ankar: the ugliest, from al-Dahhak and Qatada, who adds that the bray begins as zafir and ends as shahiq, two heaving breaths; and the most evil, from Ikrimah and al-Hakam ibn Utaybah. He accepts either, as Arabs say of an ugly face, how munkar it is. Ibn Zayd gives the reason: had raising the voice been good, Allah would not have given it to donkeys. As-Sa'di says the same of an animal known for its baseness and dullness.",
            "bn": "ইন্না আনকারাল আসওয়াতি লাসাওতুল হামীর: স্বরের মধ্যে সবচেয়ে অপছন্দের স্বর গাধার স্বর। তাবারী আনকারের দুটি অর্থ আনেন। দাহহাক ও কাতাদার মতে সবচেয়ে কুৎসিত। কাতাদা যোগ করেন, গাধার ডাকের শুরু যাফীর আর শেষ শাহীক, দুটোই ভারী শ্বাসের আওয়াজ। আর ইকরিমা ও হাকাম ইবন উতাইবার মতে সবচেয়ে মন্দ। তাবারী দুটোকেই গ্রহণ করেন, যেমন আরবরা কুৎসিত চেহারা দেখে বলে, কী মুনকার চেহারা! ইবন যায়দ কারণ বলেন: গলা চড়ানো ভালো কিছু হলে আল্লাহ তা গাধাকে দিতেন না। সা'দীও একই কথা বলেন, হীনতা আর বোকামির জন্য পরিচিত এক প্রাণী সম্পর্কে।"
          },
          {
            "en": "Ibn Kathir reads the likeness as making loud raising of the voice forbidden and blamed in the extreme. He notes that an-Nasa'i narrated a hadith while explaining this verse and that the rest of the group except Ibn Majah narrated it too; al-Qurtubi gives it as in the Sahih. Al-Bukhari includes it in his Sahih (3303), the collection he restricted to reports he judged sound, from Abu Hurayrah (RA): \"When you hear the crowing of roosters, ask Allah of His bounty, for they have seen an angel; and when you hear the braying of a donkey, seek refuge with Allah from Satan, for it has seen a devil.\"",
            "bn": "ইবন কাসীরের মতে এ উপমা অহেতুক গলা চড়ানোকে হারাম ও চূড়ান্ত নিন্দনীয় সাব্যস্ত করে। তিনি জানান, নাসাঈ এ আয়াতের তাফসীরে একটি হাদীস বর্ণনা করেছেন, আর ইবন মাজাহ ছাড়া বাকি সংকলকরাও তা বর্ণনা করেছেন। কুরতুবী একে 'সহীহ গ্রন্থে আছে' বলে আনেন। বুখারী এটি তাঁর সহীহ গ্রন্থে (৩৩০৩) রেখেছেন, যে সংকলনে তিনি কেবল নিজের বিচারে বিশুদ্ধ বর্ণনা রেখেছেন। আবূ হুরায়রা (রাঃ) থেকে: \"যখন তোমরা মোরগের ডাক শোনো, আল্লাহর কাছে তাঁর অনুগ্রহ চাও, কারণ সে ফেরেশতা দেখেছে। আর যখন গাধার ডাক শোনো, শয়তান থেকে আল্লাহর আশ্রয় চাও, কারণ সে শয়তান দেখেছে।\""
          },
          {
            "en": "Al-Qurtubi explains the choice of animal. The donkey was a byword for blame among the Arabs, so much that they avoided naming it and said the long-eared, as is done with filthy things; some refused to ride it out of disdain, while the Prophet ﷺ rode it in humility before Allah. The Arabs also prided themselves on a loud voice, the loudest counted the mightiest, and the verse cut down this trait of the Jahiliyyah: if anything were to be feared for its voice, it would be the donkey.",
            "bn": "প্রাণী হিসেবে গাধাকেই কেন বেছে নেওয়া হলো, কুরতুবী তা ব্যাখ্যা করেন। আরবদের কাছে গাধা ছিল নিন্দার প্রতীক। এতটাই যে তারা সরাসরি নাম না নিয়ে বলত 'লম্বা কানওয়ালা', যেমন নোংরা জিনিসের বেলায় ঘুরিয়ে বলা হয়। কেউ কেউ ঘৃণায় এর পিঠে চড়ত না, অথচ নবী ﷺ আল্লাহর সামনে বিনয় প্রকাশ করে এতে চড়তেন। আরবরা উঁচু গলা নিয়ে গর্বও করত। যার গলা যত জোরালো, সে তত সম্মানিত। আয়াতটি জাহিলিয়্যাতের এ স্বভাব কেটে দিল: গলার জোরে কাউকে ভয় পাওয়ার হলে সে তো গাধা।"
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
          "bn": "চেহারা সঁপে দেওয়া"
        },
        "p": [
          {
            "en": "Wa man yuslim wajhahu ila-llahi wa huwa muhsin: and whoever submits his face to Allah while he is a doer of good. The commentators fetched for this verse read the clause as a handing-over of worship, and az-Zamakhshari, quoted by al-Qurtubi, takes the face as the man's very self. Ibn Kathir explains it with three verbs: he makes his deeds sincere for Allah, yields to His command and follows His law. At-Tabari has him make his face a servant's face, humbled in servitude and acknowledging His godhood.",
            "bn": "ওয়া মান ইউসলিম ওয়াজহাহু ইলাল্লাহি ওয়া হুয়া মুহসিন: যে নিজের চেহারা আল্লাহর কাছে সঁপে দেয়, আর সে সৎকর্মশীল। এ আয়াতের যে তাফসীরগুলো সামনে আছে, সবগুলোতেই বাক্যটা ইবাদত সঁপে দেওয়ার কথা। কুরতুবীর উদ্ধৃতিতে যামাখশারী বলেন, চেহারা মানে মানুষটার নিজের সত্তা। ইবন কাসীর তিনটি ক্রিয়া দিয়ে ব্যাখ্যা করেন: সে আমলকে আল্লাহর জন্য খাঁটি করে, তাঁর হুকুমের সামনে মাথা নোয়ায় এবং তাঁর শরীয়ত মেনে চলে। তাবারীর ব্যাখ্যায় সে নিজের চেহারাকে বান্দার চেহারা বানিয়ে নেয়। দাসত্বে বিনীত হয়, আর আল্লাহর উলূহিয়্যাত স্বীকার করে।"
          },
          {
            "en": "Al-Qurtubi and the Muyassar use the same pair of words: he makes his worship and his aim sincere toward Allah. Al-Baghawi first reads ila-llah as lillah, for Allah, and then gives two parts: he makes his religion sincere for Allah, and he entrusts his affair to Him. As-Sa'di explains the clause as humbling oneself before Allah and yielding to Him by doing what the law prescribes, keeping one's religion sincere for Him. Sincerity runs through every gloss; obedience and trust are added by some.",
            "bn": "কুরতুবী ও মুয়াসসার একই দুটি শব্দ ব্যবহার করেন: সে তার ইবাদত আর তার লক্ষ্য আল্লাহর দিকে খাঁটি করে। বাগাভী প্রথমে বলেন, ইলাল্লাহ এখানে লিল্লাহর অর্থে, অর্থাৎ আল্লাহর জন্য। তারপর দুটি অংশ দেন: সে দ্বীনকে আল্লাহর জন্য খাঁটি করে, আর নিজের সব ব্যাপার তাঁর হাতে ছেড়ে দেয়। সা'দীর ব্যাখ্যায় বাক্যটির অর্থ আল্লাহর সামনে নত হওয়া এবং শরীয়তের বিধান পালন করে তাঁর অনুগত হওয়া, দ্বীনকে তাঁর জন্য খাঁটি রেখে। ইখলাস আছে প্রতিটি ব্যাখ্যায়। আনুগত্য আর ভরসার কথা যোগ করেছেন কেউ কেউ।"
          }
        ]
      },
      {
        "h": {
          "en": "Delivered Like Goods",
          "bn": "আমানতের মতো হাতে তুলে দেওয়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a variant reading. 'Ali ibn Abi Talib (RA), as-Sulami and 'Abdullah ibn Muslim ibn Yasar read the verb as yusallim, with a doubled middle letter. He quotes an-Nahhas: yuslim is the better known form here, as in 3:20, fa-qul aslamtu wajhiya lillah, say: I have submitted my face to Allah, which an-Nahhas explains as I have directed my worship to Allah. Yusallim would add intensity, he says, though sallamtu is normally used in the sense of I handed over.",
            "bn": "কুরতুবী একটি ভিন্ন কিরাআত উল্লেখ করেন। আলী ইবন আবী তালিব (রাঃ), সুলামী এবং আবদুল্লাহ ইবন মুসলিম ইবন ইয়াসার ক্রিয়াটি পড়েছেন ইউসাল্লিম, মাঝের অক্ষরে তাশদীদ দিয়ে। তিনি নাহহাসের কথা আনেন: এখানে ইউসলিমই বেশি পরিচিত রূপ। যেমন ৩:২০ আয়াতে আছে, ফাকুল আসলামতু ওয়াজহিয়া লিল্লাহ, বলুন: আমি আমার চেহারা আল্লাহর কাছে সঁপে দিয়েছি। নাহহাস এর অর্থ করেন, আমি আমার ইবাদতের লক্ষ্য করেছি আল্লাহকে। তাঁর মতে ইউসাল্লিম রূপে জোর বাড়ে, তবে সাল্লামতু সাধারণত ব্যবহার হয় হস্তান্তর করার অর্থে।"
          },
          {
            "en": "Al-Qurtubi then quotes az-Zamakhshari on the preposition. Why is the verb joined to Allah here with ila, toward, when 2:112 says man aslama wajhahu lillah, with li, for? With li, az-Zamakhshari answers, the man has made his face, meaning his very self, sound and wholly for Allah. With ila, he has handed himself over to Allah as goods are handed to a man when delivered to him, and what is meant is reliance on Allah and entrusting everything to Him. Al-Baghawi's gloss, he entrusts his affair to Allah, reaches the same place.",
            "bn": "এরপর কুরতুবী অব্যয়টি নিয়ে যামাখশারীর কথা উদ্ধৃত করেন। প্রশ্ন হলো, ২:১১২ আয়াতে আছে মান আসলামা ওয়াজহাহু লিল্লাহ, লাম দিয়ে। তাহলে এখানে আল্লাহর সঙ্গে ক্রিয়াটি জোড়া হলো ইলা দিয়ে কেন? যামাখশারীর জবাব: লাম থাকলে অর্থ দাঁড়ায়, সে তার চেহারা, মানে নিজের সত্তাকে, আল্লাহর জন্য নিখুঁত ও খাঁটি করে দিয়েছে। ইলা থাকলে অর্থ দাঁড়ায়, কাউকে মাল বুঝিয়ে দেওয়ার মতো সে নিজেকে আল্লাহর হাতে তুলে দিয়েছে। উদ্দেশ্য আল্লাহর উপর তাওয়াক্কুল আর সবকিছু তাঁর হাতে সোপর্দ করা। বাগাভীর ব্যাখ্যা, সে নিজের ব্যাপার আল্লাহর হাতে ছেড়ে দেয়, পৌঁছায় একই জায়গায়।"
          }
        ]
      },
      {
        "h": {
          "en": "While He Does Good",
          "bn": "সৎকর্মশীল থাকার শর্ত"
        },
        "p": [
          {
            "en": "The second clause, wa huwa muhsin, is a clause of state: the submission counts while he is doing good. Ibn Kathir explains it as good in his deeds, by following what he was commanded and leaving what he was forbidden. At-Tabari reads it as obedient to Allah in His command and His prohibition. Al-Baghawi says only: in his deeds. The Muyassar widens it to speech, describing him as muhsin in his words and mutqin, careful and thorough, in his deeds.",
            "bn": "দ্বিতীয় অংশ ওয়া হুয়া মুহসিন একটি অবস্থাবাচক বাক্য। মানে আত্মসমর্পণ গণ্য হয় তখনই, যখন সে সৎকর্মে আছে। ইবন কাসীরের ব্যাখ্যায় এর অর্থ আমলে উত্তম হওয়া: যা করতে বলা হয়েছে তা মানা, যা থেকে নিষেধ করা হয়েছে তা ছাড়া। তাবারী বলেন, আল্লাহর আদেশ ও নিষেধে তাঁর অনুগত থাকা। বাগাভী শুধু বলেন, তার আমলে। মুয়াসসার কথাকেও এর ভেতরে আনে: সে কথায় মুহসিন, আর কাজে মুতকিন, অর্থাৎ যত্নশীল ও নিখুঁত।"
          },
          {
            "en": "Al-Qurtubi gives the reason the condition is there: worship without ihsan, and without the heart's knowledge of Allah, does not benefit. He sets beside it a parallel, whoever does righteous deeds while he is a believer, which is the wording of 20:112. The two sentences share a shape: a deed, then a clause of state beginning wa huwa that decides whether the deed is accepted. In 20:112 the condition is faith; in this verse it is excellence. Both attach it to the doer rather than to the deed.",
            "bn": "শর্তটি কেন, কুরতুবী তার কারণ বলেন: ইহসান ছাড়া এবং অন্তরে আল্লাহর মারিফাত ছাড়া ইবাদত কোনো উপকারে আসে না। এর পাশে তিনি একটি সমতুল্য বাক্য রাখেন: যে মুমিন অবস্থায় সৎকাজ করে। এটি ২০:১১২ আয়াতের শব্দ। দুই বাক্যের গড়ন এক। আগে একটি কাজ, তারপর ওয়া হুয়া দিয়ে শুরু একটি অবস্থাবাচক অংশ, আর সেটাই ঠিক করে কাজটি কবুল হবে কি না। ২০:১১২ আয়াতে শর্ত ঈমান, এ আয়াতে শর্ত ইহসান। দুই জায়গাতেই শর্তটা বাঁধা কর্তার সঙ্গে, শুধু কাজের সঙ্গে নয়।"
          },
          {
            "en": "As-Sa'di offers three readings and does not choose between them. Ihsan may mean that the deed is prescribed, done in following the Messenger ﷺ. It may mean worshipping Allah as though you see Him. Or the first clause may mean fulfilling Allah's rights, and muhsin may mean doing good to Allah's servants and fulfilling theirs. The meanings, he says, are bound to one another and differ only in the angle of the words; all agree on carrying out the whole religion in a way that makes it accepted and complete.",
            "bn": "সা'দী তিনটি ব্যাখ্যা দেন, কোনোটিকে বেছে নেন না। এক, ইহসান মানে আমলটি শরীয়তসম্মত, রাসূল ﷺ-এর অনুসরণে করা। দুই, আল্লাহর ইবাদত এমনভাবে করা যেন আপনি তাঁকে দেখছেন। তিন, প্রথম অংশের অর্থ আল্লাহর হক আদায় করা, আর মুহসিন মানে আল্লাহর বান্দাদের প্রতি সদয় থাকা ও তাদের হক আদায় করা। তাঁর মতে অর্থগুলো একটি আরেকটির সঙ্গে জড়ানো। পার্থক্য কেবল শব্দ দুটি কোন দিক থেকে দেখা হচ্ছে তাতে। সবগুলোর মিল এক জায়গায়: গোটা দ্বীন এমনভাবে পালন করা, যাতে তা কবুল হয় ও পূর্ণতা পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship Under His Gaze",
          "bn": "তাঁর দৃষ্টির সামনে ইবাদত"
        },
        "p": [
          {
            "en": "Al-Qurtubi attaches one hadith to this clause, the hadith of Jibril (AS), and as-Sa'di's second reading uses its words. Al-Bukhari records it in his Sahih (no. 50) from Abu Hurayrah (RA): the Prophet ﷺ was sitting with people when Jibril came and asked about faith, then about Islam, and then: \"What is Ihsan (perfection)?\" Allah's Messenger ﷺ replied, \"To worship Allah as if you see Him, and if you cannot achieve this state of devotion then you must consider that He is looking at you.\"",
            "bn": "কুরতুবী এ অংশের সঙ্গে একটি হাদীস যুক্ত করেন, জিবরীল (আঃ)-এর হাদীস। সা'দীর দ্বিতীয় ব্যাখ্যাতেও এর শব্দ আছে। বুখারী তাঁর সহীহ গ্রন্থে (নং ৫০) আবু হুরায়রা (রাঃ) থেকে এটি বর্ণনা করেছেন। নবী ﷺ লোকজনের মাঝে বসে ছিলেন। জিবরীল এসে প্রথমে ঈমান সম্পর্কে, তারপর ইসলাম সম্পর্কে জিজ্ঞেস করলেন। এরপর প্রশ্ন করলেন: \"ইহসান কী?\" রাসূলুল্লাহ ﷺ বললেন: \"আপনি আল্লাহর ইবাদত করবেন এমনভাবে যেন তাঁকে দেখছেন। আর যদি আপনি তাঁকে না দেখেন, তবে তিনি তো আপনাকে দেখছেন।\""
          },
          {
            "en": "Al-Qurtubi quotes the Arabic of that answer, an ta'buda-llaha ka-annaka tarahu, fa-in lam takun tarahu fa-innahu yaraka, and it matches al-Bukhari's text word for word. Read beside this verse, it moves ihsan away from the number of deeds and toward the awareness they are done under. The full report goes on to the Hour and ends with the Prophet ﷺ reciting 31:34, from this same surah, and saying that Jibril had come to teach people their religion. The article on 31:4 walks through it; here only the definition is needed.",
            "bn": "কুরতুবী জবাবটির আরবি শব্দও দেন: আন তা'বুদাল্লাহা কাআন্নাকা তারাহু, ফাইন লাম তাকুন তারাহু ফাইন্নাহু ইয়ারাক। বুখারীর পাঠের সঙ্গে তা হুবহু মেলে। এ আয়াতের পাশে রাখলে হাদীসটি ইহসানকে আমলের সংখ্যা থেকে সরিয়ে আনে সেই সচেতনতার দিকে, যার ভেতরে আমলটা হয়। পুরো বর্ণনায় এরপর কিয়ামতের প্রশ্ন আসে। শেষে নবী ﷺ এই সূরারই ৩১:৩৪ আয়াত তিলাওয়াত করেন এবং বলেন, জিবরীল এসেছিলেন মানুষকে তাদের দ্বীন শেখাতে। ৩১:৪ আয়াতের প্রবন্ধে পুরো হাদীসটির আলোচনা আছে। এখানে শুধু সংজ্ঞাটুকুই দরকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding the Firmest End",
          "bn": "সবচেয়ে মজবুত প্রান্ত ধরা"
        },
        "p": [
          {
            "en": "Fa-qadi-stamsaka bil-'urwati-l-wuthqa: then he has grasped the most trustworthy handhold. At-Tabari explains it as holding the firmest end, one whose holder does not fear its snapping, and says plainly that this is a mathal, a likeness. What it means, he says, is that by submitting his face to Allah while doing good, the man has taken hold of so much of Allah's good pleasure that he need not fear Allah's punishment on the Day of Resurrection.",
            "bn": "ফাকাদিস্তামসাকা বিল উরওয়াতিল উসকা: তবে সে আঁকড়ে ধরেছে সবচেয়ে মজবুত হাতল। তাবারী এর ব্যাখ্যা করেন সবচেয়ে মজবুত প্রান্ত ধরে রাখা হিসেবে, যে ধরে থাকে সে তা ছিঁড়ে যাওয়ার ভয় করে না। তিনি সোজাসুজি বলেন, এটি একটি উপমা। তাঁর মতে আসল কথা হলো, সৎকর্মশীল অবস্থায় নিজের চেহারা আল্লাহর কাছে সঁপে দিয়ে লোকটি আল্লাহর সন্তুষ্টির এমন অংশ ধরে ফেলেছে, যার পর কিয়ামতের দিন আল্লাহর আযাবের ভয় তার থাকে না।"
          },
          {
            "en": "At-Tabari adds that the people of interpretation said the same, and gives one report with its chain through Sa'id ibn Jubayr from Ibn 'Abbas (RA): the handhold is la ilaha illallah. Al-Qurtubi gives the same words from Ibn 'Abbas. Ibn Kathir reads the phrase as a firm pledge, mawthiq, from Allah that He will not punish him, a word from the same root as wuthqa. Al-Baghawi calls it the firmest covenant, whose breaking is not feared, and the Muyassar the firmest means leading to Allah's good pleasure and His Garden.",
            "bn": "তাবারী আরও বলেন, তাফসীরকারেরাও একই কথা বলেছেন। প্রমাণ হিসেবে তিনি সনদসহ একটি বর্ণনা আনেন, সাঈদ ইবন জুবাইরের মাধ্যমে ইবন আব্বাস (রাঃ) থেকে: হাতলটি হলো লা ইলাহা ইল্লাল্লাহ। কুরতুবীও ইবন আব্বাস থেকে একই কথা আনেন। ইবন কাসীরের ব্যাখ্যায় এটি আল্লাহর কাছ থেকে পাওয়া মজবুত অঙ্গীকার, মাওসিক, যে তিনি তাকে আযাব দেবেন না। শব্দটি উসকার একই ধাতু থেকে। বাগাভী একে বলেন সবচেয়ে দৃঢ় অঙ্গীকার, যা ভেঙে যাওয়ার ভয় নেই। আর মুয়াসসারের ভাষায় এটি আল্লাহর সন্তুষ্টি ও জান্নাতে পৌঁছানোর সবচেয়ে মজবুত উপায়।"
          },
          {
            "en": "As-Sa'di describes it by what it does for whoever holds it: he is made secure and saved, kept from ruin, and wins every good. Then he states the reverse. Whoever does not submit his face to Allah, or does not do good, has not grasped it, and without it there is nothing but ruin and loss. Notice where the strength sits in all of these glosses. Each commentator calls the handhold firm; none promises that the hand is strong. The firmness belongs to what is held.",
            "bn": "সা'দী হাতলটির পরিচয় দেন, যে ধরে তার জন্য এটি কী করে তা দিয়ে। সে নিরাপদ হয়, মুক্তি পায়, ধ্বংস থেকে বাঁচে এবং সব কল্যাণ লাভ করে। তারপর তিনি উল্টো দিকটাও বলেন। যে নিজের চেহারা আল্লাহর কাছে সঁপে দেয় না, কিংবা সৎকর্মশীল হয় না, সে হাতলটি ধরেনি। আর তা না ধরলে বাকি থাকে শুধু ধ্বংস আর বরবাদি। খেয়াল করুন, এসব ব্যাখ্যায় শক্তিটা কোথায় রাখা হয়েছে। প্রত্যেক তাফসীরকার হাতলটিকে মজবুত বলেছেন। হাতটা শক্ত হবে, এমন প্রতিশ্রুতি কেউ দেননি। দৃঢ়তা সেই জিনিসের, যা ধরা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where al-Baqarah Has It",
          "bn": "সূরা বাকারায় একই হাতল"
        },
        "p": [
          {
            "en": "Reaching the handhold, al-Qurtubi says only that it has already been discussed in al-Baqarah. That points to 2:256, where the identical phrase stands: whoever disbelieves in taghut and believes in Allah has grasped the most trustworthy handhold, la-nfisama laha, with no breaking in it, and Allah is Hearing, Knowing. There the grip is reached by a rejection and an affirmation. Here it is reached by submitting the face while doing good. It is one handhold, approached through belief in the first verse and through conduct in the second.",
            "bn": "হাতলের প্রসঙ্গে এসে কুরতুবী শুধু বলেন, সূরা বাকারায় এর আলোচনা আগেই হয়ে গেছে। ইঙ্গিতটা ২:২৫৬ আয়াতের দিকে, যেখানে হুবহু একই শব্দগুচ্ছ আছে: যে তাগূতকে অস্বীকার করে এবং আল্লাহর উপর ঈমান আনে, সে আঁকড়ে ধরেছে সবচেয়ে মজবুত হাতল, লানফিসামা লাহা, যা কখনো ভাঙবে না। আর আল্লাহ সব শোনেন, সব জানেন। সেখানে হাতল পর্যন্ত পৌঁছানো একটি অস্বীকার আর একটি স্বীকৃতির মাধ্যমে। এখানে পৌঁছানো সৎকর্মশীল অবস্থায় চেহারা সঁপে দিয়ে। হাতল একটাই। প্রথম আয়াতে পথ ঈমান, দ্বিতীয় আয়াতে পথ আমল।"
          },
          {
            "en": "The two verses also close differently. 2:256 adds that the handhold does not break and ends on two names of Allah. 31:22 says nothing about breaking and turns instead to where every road ends. Az-Zamakhshari's question, quoted by al-Qurtubi, brings in a third verse as well: 2:112 pairs submitting the face with doing good in the same two clauses, and gives as their reward a wage kept with one's Lord, with no fear upon them and no grief.",
            "bn": "দুই আয়াতের শেষটাও আলাদা। ২:২৫৬ আয়াত জানিয়ে দেয় হাতলটি ভাঙে না, তারপর শেষ হয় আল্লাহর দুটি নামে। ৩১:২২ আয়াত ভাঙার কথা তোলেই না। সে চলে যায় সেই জায়গার কথায়, যেখানে সব পথ গিয়ে শেষ হয়। কুরতুবীর উদ্ধৃত যামাখশারীর প্রশ্ন আরেকটি আয়াতকেও সামনে আনে। ২:১১২ আয়াতে একই দুই অংশে চেহারা সঁপে দেওয়া আর সৎকর্মশীল হওয়া একসঙ্গে এসেছে। সেখানে পুরস্কার হলো রবের কাছে রাখা প্রতিদান, আর তাদের কোনো ভয় নেই, তারা দুঃখও পাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Matter Comes Back",
          "bn": "সব বিষয়ের শেষ ঠিকানা"
        },
        "p": [
          {
            "en": "Wa ila-llahi 'aqibatu-l-umur: and to Allah is the outcome of matters. At-Tabari explains it as the return of the outcome of every matter, its good and its evil, to Allah, who will question its people about it and requite them for it. Al-Qurtubi gives a single word, masiruha, their final destination. The Muyassar reads it as to Allah alone, and spells out the requital: the doer of good rewarded for his good, and the doer of evil for his evil.",
            "bn": "ওয়া ইলাল্লাহি আকিবাতুল উমূর: আর সব বিষয়ের পরিণাম আল্লাহরই কাছে। তাবারীর ব্যাখ্যায়, প্রতিটি বিষয়ের পরিণাম, ভালো হোক বা মন্দ, ফিরে যায় আল্লাহর কাছে। তিনিই সংশ্লিষ্টদের সে বিষয়ে জিজ্ঞেস করবেন এবং প্রতিফল দেবেন। কুরতুবী একটি শব্দেই বলেন: মাসীরুহা, অর্থাৎ সেগুলোর শেষ গন্তব্য। মুয়াসসার পড়ে, একমাত্র আল্লাহর কাছে, আর প্রতিফলটাও খুলে বলে: সৎকর্মশীল পাবে তার সৎকর্মের প্রতিদান, আর মন্দকারী তার মন্দের।"
          },
          {
            "en": "As-Sa'di gathers three words, their return, their place of resort and their end, and says Allah judges among His servants and requites them by what their deeds came to and where their outcomes arrived. Then he adds an instruction: so let them prepare for that. After a clause about trust, the line follows naturally. Whoever has handed his affair over to Allah is not left guessing where it will finish; the verse names the destination before he reaches it.",
            "bn": "সা'দী তিনটি শব্দ একসঙ্গে আনেন: সেগুলোর প্রত্যাবর্তন, আশ্রয়স্থল আর শেষ সীমা। তিনি বলেন, আল্লাহ তাঁর বান্দাদের মাঝে ফয়সালা করবেন। তাদের আমল যেখানে গিয়ে ঠেকেছে, তাদের পরিণাম যেখানে পৌঁছেছে, সে অনুযায়ী প্রতিফল দেবেন। তারপর একটি নির্দেশ জুড়ে দেন: কাজেই তারা যেন সেদিনের জন্য প্রস্তুত হয়। তাওয়াক্কুলের কথার পর এই বাক্য আসা খুবই স্বাভাবিক। যে নিজের ব্যাপার আল্লাহর হাতে তুলে দিয়েছে, তা কোথায় গিয়ে শেষ হবে সে নিয়ে তাকে আন্দাজ করতে হয় না। সেখানে পৌঁছানোর আগেই আয়াত গন্তব্যের নাম বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Set Between Inheritance and Grief",
          "bn": "পূর্বপুরুষের পথ আর নবীর দুঃখের মাঝে"
        },
        "p": [
          {
            "en": "The verse stands where the surah turns from Luqman's counsel, which closes at 31:19, back to its listeners. 31:20 asks whether they do not see that Allah has subjected to them what is in the heavens and the earth and poured His favours on them, outward and inward. Ma'arif al-Qur'an counts health and provision among the outward, and faith, knowing Allah, intellect and sins left unexposed among the inward. 31:21 then quotes those who, told to follow what Allah sent down, answer that they will follow what they found their fathers upon.",
            "bn": "লুকমানের নসীহত শেষ হয় ৩১:১৯ আয়াতে, আর সূরা আবার ফিরে আসে শ্রোতাদের দিকে। এ আয়াতের জায়গা ঠিক সেখানে। ৩১:২০ আয়াত প্রশ্ন করে, তোমরা কি দেখো না, আসমান ও যমীনে যা আছে আল্লাহ তা তোমাদের কাজে লাগিয়ে দিয়েছেন, আর প্রকাশ্য ও গোপন নিয়ামত তোমাদের উপর ঢেলে দিয়েছেন? মাআরিফুল কুরআনের হিসাবে সুস্থতা আর রিযিক প্রকাশ্য নিয়ামত। ঈমান, আল্লাহর মারিফাত, বুদ্ধি, আর গুনাহ ঢেকে রাখা গোপন নিয়ামত। এরপর ৩১:২১ আয়াত তাদের কথা তুলে ধরে, যাদের আল্লাহর নাযিল করা বিধান মানতে বললে তারা বলে, বাপদাদাকে যে পথে পেয়েছি আমরা সে পথেই চলব।"
          },
          {
            "en": "After the verse, 31:23 tells the Prophet ﷺ not to be grieved by the disbelief of anyone who disbelieves. Ibn Kathir paraphrases: do not grieve over them, O Muhammad, for their return is to Allah and He will inform them of what they did. On 31:24 he explains the brief enjoyment as this world and the punishment as terrifying and hard to bear, and sets 10:69 and 10:70 beside it. So the handhold is offered between a grip on inherited custom and a consolation for the Messenger who holds it out.",
            "bn": "আয়াতটির পরে ৩১:২৩ আয়াত নবী ﷺ-কে বলে, কেউ কুফরী করলে তার কুফরী যেন আপনাকে দুঃখ না দেয়। ইবন কাসীর এর ব্যাখ্যা দেন এভাবে: হে মুহাম্মাদ, তাদের জন্য দুঃখ করবেন না। তাদের ফিরে আসা আল্লাহরই কাছে, আর তিনি তাদের জানিয়ে দেবেন তারা কী করত। ৩১:২৪ আয়াতের অল্প ভোগকে তিনি বলেন এই দুনিয়া, আর শাস্তিকে বলেন ভয়ংকর ও দুঃসহ। এর পাশে তিনি রাখেন ১০:৬৯ ও ১০:৭০ আয়াত। তাহলে মজবুত হাতলের প্রস্তাব এসেছে দুইয়ের মাঝখানে। একদিকে বাপদাদার রীতি আঁকড়ে থাকা, অন্যদিকে হাতল বাড়িয়ে দেওয়া রাসূলের জন্য সান্ত্বনা।"
          },
          {
            "en": "This needs saying plainly. 31:21 and 31:23 describe people who turned the message away in the Prophet's ﷺ own time, and Allah alone pronounces on them and on their return. These verses license nothing against any living person or community, and they give no reader the right to decide who holds the handhold and who does not. Earlier, 31:14 joins thanks to Allah with thanks to parents; later, 31:27 says the sea and seven more behind it would not exhaust the words of Allah.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। ৩১:২১ ও ৩১:২৩ আয়াত বর্ণনা করে নবী ﷺ-এর নিজের যুগে যারা দাওয়াত ফিরিয়ে দিয়েছিল তাদের কথা। তাদের ব্যাপারে এবং তাদের পরিণাম নিয়ে রায় দেওয়ার মালিক একমাত্র আল্লাহ। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াতগুলো দেয় না। কে হাতল ধরেছে আর কে ধরেনি, তা ঠিক করার অধিকারও কোনো পাঠকের নেই। এর আগে ৩১:১৪ আয়াত আল্লাহর শুকরিয়ার সঙ্গে বাবা-মায়ের শুকরিয়া জুড়ে দেয়। পরে ৩১:২৭ আয়াত বলে, সমুদ্র আর তার পেছনে আরও সাতটি সমুদ্রও আল্লাহর কথা শেষ করতে পারবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping Both Halves",
          "bn": "দুই শর্ত একসঙ্গে রাখা"
        },
        "p": [
          {
            "en": "When the ground tilts, the hand reaches for something: a salary, a person, a plan, a reputation. The verse names the handle that does not come away, and it sets two conditions on reaching it. Worship without ihsan, in al-Qurtubi's words, does not benefit. As-Sa'di will not let the halves be separated; he calls his readings bound together. A short test follows. Ask whom it is for, which is the sincerity in every gloss. Ask whether it is what was asked for, which is following the command and the Messenger ﷺ. Then hand the result over, and leave the outcome where the verse leaves it.",
            "bn": "পায়ের নিচের মাটি টললে হাত কিছু একটা আঁকড়ে ধরতে চায়: বেতন, কোনো মানুষ, কোনো পরিকল্পনা, সুনাম। আয়াতটি সেই হাতলের নাম বলে, যা খুলে আসে না, আর তা ধরার জন্য দুটি শর্ত দেয়। কুরতুবীর ভাষায়, ইহসান ছাড়া ইবাদত কোনো কাজে আসে না। সা'দী দুই অংশকে আলাদা হতে দেন না, তাঁর ব্যাখ্যাগুলোকে বলেন পরস্পর জড়ানো। এখান থেকে কোনো আমলের আগে ছোট্ট একটা যাচাই পাওয়া যায়। জিজ্ঞেস করুন, কাজটা কার জন্য। প্রতিটি ব্যাখ্যায় যে ইখলাস আছে, এটা সেই প্রশ্ন। জিজ্ঞেস করুন, যা চাওয়া হয়েছে এটা তা-ই কি না। এটা হুকুম আর রাসূল ﷺ-এর অনুসরণের প্রশ্ন। তারপর ফলাফল তাঁর হাতে ছেড়ে দিন, আর পরিণামের ভার রেখে দিন সেখানেই, যেখানে আয়াত রেখেছে।"
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
            "en": "Across its length Luqman has pointed to signs a person can read: night folding into day, ships carried on the sea, pens and seas of ink that would run dry before His words. The closing verse turns to the other side of the line, to what no reading reaches at all. Having shown how much of His order lies open to sight, the surah ends by naming five things shut to it. The same Lord who filled the world with legible signs kept five pages for Himself.",
            "bn": "গোটা সূরা জুড়ে লুকমান এমন সব নিদর্শন দেখিয়েছে, যা মানুষ পড়ে বুঝতে পারে: রাত ঢুকে যাচ্ছে দিনের ভেতর, সমুদ্রে ভেসে চলেছে জাহাজ, আর এমন কলম ও কালির সাগর, যা ফুরিয়ে যাবে, তবু তাঁর কথা শেষ হবে না। শেষ আয়াতটি তাকায় সীমারেখার ওপারে, যেখানে কোনো পড়াই পৌঁছায় না। তাঁর সৃষ্টিব্যবস্থার কতখানি চোখের সামনে খোলা, তা দেখানোর পর সূরাটি শেষ হয় এমন পাঁচটি জিনিসের নাম দিয়ে, যা চোখের কাছে বন্ধ। যে রব জগৎকে পড়ার মতো নিদর্শনে ভরে দিয়েছেন, তিনিই পাঁচটি পাতা নিজের কাছে রেখে দিয়েছেন।"
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
            "en": "The weight sits on one small phrase. The Hour's knowledge is ʿinda-hu, with Him — the phrase lodges it in His keeping and nobody else's. At-Tabari glosses each clause the same way: the Hour, none knows it but He; the rain, none can send it down but He; the wombs, their contents known to Him alone. The grammar is not decoration; it fences the knowledge inside the divine, with no gate left for a gifted human to slip through.",
            "bn": "আসল জোরটা একটি ছোট শব্দবন্ধে। কিয়ামতের জ্ঞান 'ইনদাহু', তাঁরই কাছে। এই শব্দবন্ধ জ্ঞানটাকে রেখে দেয় তাঁর জিম্মায়, আর কারও কাছে নয়। তাবারী প্রতিটি অংশ একইভাবে ব্যাখ্যা করেন: কিয়ামত, তিনি ছাড়া কেউ জানে না; বৃষ্টি, তিনি ছাড়া কেউ নামাতে পারে না; গর্ভ, তার ভেতরে কী আছে কেবল তিনিই জানেন। এই ব্যাকরণ সাজসজ্জা নয়। এটি জ্ঞানটাকে আল্লাহর সীমানার ভেতরে বেড়া দিয়ে ঘিরে রাখে, আর এমন কোনো ফটক খোলা রাখে না যা দিয়ে কোনো প্রতিভাবান মানুষ ঢুকে পড়তে পারে।"
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
