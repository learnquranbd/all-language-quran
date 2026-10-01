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
            "bn": "সূরা লুকমান শুরু হয় কিতাবকে হিকমতে ভরা আর তার হেদায়েতকে রহমত বলে, তারপর বলে সেই রহমত সৎকর্মশীলদের জন্য (৩১:৩)। ঠিক পরের আয়াত প্রসঙ্গ বদলায় না, বরং বাক্যটাই শেষ করে। এই সৎকর্মশীলেরা কারা? আয়াত জবাব দেয়, তারা তারাই যারা নামায কায়েম করে, যাকাত দেয়, আর আখেরাতের ব্যাপারে দৃঢ় নিশ্চিত (৩১:৪)। তাই একটি কাহিনিও বলার আগে সূরা একটা ছবি এঁকে ফেলে, আর সেই ছবি আঁকে তিনটি আঁচড়ে।"
          },
          {
            "en": "Two of the three strokes are visible acts. Prayer is worship the body performs, at fixed times and in a fixed shape. Zakāh is worship the wealth performs, a measured portion that leaves the pocket of the giver and reaches the needy. The third stroke is not an act at all but a state of the heart: yaqīn, a certainty that beyond this life lies another in which all of it is weighed. The portrait is complete only with the three together, and it is the inner certainty that gives the two outward acts their life.",
            "bn": "তিনটি আঁচড়ের দুটি চোখে দেখা যায় এমন আমল। নামায হলো শরীরের ইবাদত, নির্দিষ্ট সময়ে আর নির্দিষ্ট আকারে আদায় করা। যাকাত হলো সম্পদের ইবাদত, মাপা একটা অংশ দাতার পকেট ছেড়ে অভাবীর কাছে পৌঁছায়। তৃতীয় আঁচড়টি কোনো আমলই নয়, বরং অন্তরের এক অবস্থা: ইয়াকীন, এই দৃঢ় নিশ্চয়তা যে এই জীবনের ওপারে আরেকটি জীবন আছে, যেখানে সবকিছুর ওজন হবে। ছবিটা পূর্ণ হয় কেবল তিনটি একসঙ্গে থাকলে, আর ভেতরের নিশ্চয়তাই বাইরের দুটি আমলকে প্রাণ দেয়।"
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
            "bn": "কুরতুবী থামেন ব্যাকরণে, কারণ ব্যাকরণই অর্থ বহন করে। আয়াতের প্রথম শব্দ আল্লাযীনা, অর্থাৎ যারা, তাঁর মতে বসে আছে বিশেষণের জায়গায়: আগেই যাদের সৎকর্মশীল বলা হয়েছে, এ শব্দ তাদেরই গুণ বলছে। শেষের ই-কারের আরও দুটি পড়া তিনি অনুমোদন করেন। প্রথমটি বাক্যটিকে কেটে নতুন করে শুরু করে, তারাই তারা যারা; দ্বিতীয়টি উহ্য একটি আমি বোঝাচ্ছি জুড়ে দেয়। দুই পড়াই একই জায়গায় এসে দাঁড়ায়। আয়াত নতুন কোনো দল আনছে না, বরং বলছে সৎকর্মশীলেরা কী উপাদানে গড়া।"
          },
          {
            "en": "This matters for how the verse is read. It is tempting to treat establishing prayer and giving zakāh as a checklist of duties, items to be ticked. But al-Qurtubi's grammar makes them a portrait of a kind of person, the muḥsin of the verse before (31:3). Iḥsān, doing good with excellence, is not an extra station reached after the duties; it is the quality of someone whose prayer, giving and certainty hang together. Al-Qurtubi adds that he has already treated these words in Sūrat al-Baqara, where closely similar words first appear.",
            "bn": "এটা আয়াত কীভাবে পড়া হবে তার জন্য গুরুত্বপূর্ণ। নামায কায়েম করা আর যাকাত দেওয়াকে কর্তব্যের একটা তালিকা ভেবে ফেলা সহজ, যেন টিক দিয়ে শেষ করার কাজ। কিন্তু কুরতুবীর ব্যাকরণ এগুলোকে বানিয়ে দেয় এক ধরনের মানুষের ছবি, আগের আয়াতের সেই সৎকর্মশীল (৩১:৩)। ইহসান, অর্থাৎ সুন্দরভাবে ভালো করা, কর্তব্য সেরে ফেলার পরে পৌঁছানো বাড়তি কোনো স্তর নয়; এ হলো সেই মানুষের গুণ যার নামায, দান আর নিশ্চয়তা একসঙ্গে বাঁধা। কুরতুবী যোগ করেন, এ কথাগুলো তিনি আগেই আলোচনা করেছেন সূরা বাকারায়, যেখানে কাছাকাছি কথাই প্রথম আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer Held to Its Limits",
          "bn": "সীমার ভেতরে নামায"
        },
        "p": [
          {
            "en": "The verb for prayer here is yuqīmūna, from a root meaning to make something stand straight. The Qurʾān does not say they pray; it says they establish prayer, hold it upright. At-Tabari reads it as establishing the obligatory prayer within its limits, and Ibn Kathir expands the thought: its limits and its times, together with the regular and occasional voluntary prayers that cluster around it. Al-Muyassar puts it plainly, that they perform it complete, in its proper times. The word has been unfolded at length elsewhere in this collection, at 29:45; here it is enough to notice that it asks for more than the motions.",
            "bn": "এখানে নামাযের ক্রিয়া ইউকীমূনা, যার ধাতুর অর্থ কোনো কিছুকে সোজা করে দাঁড় করানো। কুরআন বলে না তারা নামায পড়ে; বলে তারা নামায কায়েম করে, একে খাড়া রাখে। তাবারী একে পড়েন ফরয নামাযকে তার সীমার ভেতরে কায়েম করা হিসেবে, আর ইবনে কাসীর ভাবনাটা বাড়ান: তার সীমা আর তার সময়, সেই সঙ্গে চারপাশে জড়ো হওয়া নিয়মিত ও অনিয়মিত নফল নামায। মুয়াসসার সোজাসুজি বলেন, তারা একে পূর্ণরূপে, সঠিক সময়ে আদায় করে। শব্দটি এই সংকলনেই অন্যত্র বিস্তারিত খোলা হয়েছে, ২৯:৪৫-এ; এখানে এটুকু খেয়াল করাই যথেষ্ট যে এ শুধু নড়াচড়ার চেয়ে বেশি কিছু চায়।"
          },
          {
            "en": "To establish a thing is to set it up so it stands on its own and does not fall the moment you walk away. A prayer established is woven into the day at its fixed hours, performed in its proper form, and not dropped when life grows busy. At-Tabari's phrase, within its limits, guards both ends: not less than the prayer requires, and not a private invention beyond it. The doer of good is not the person who prays when the mood takes him, but the person whose prayer stands whether the mood is there or not.",
            "bn": "কোনো কিছু কায়েম করা মানে এমনভাবে দাঁড় করানো যে তা নিজের পায়ে দাঁড়িয়ে থাকে, আপনি সরে গেলেই পড়ে যায় না। কায়েম করা নামায দিনের ভেতরে গাঁথা থাকে তার নির্দিষ্ট সময়ে, আদায় হয় সঠিক আকারে, জীবন ব্যস্ত হলেও ফেলে রাখা হয় না। তাবারীর কথা, তার সীমার ভেতরে, দুই দিকই পাহারা দেয়: নামায যতটুকু চায় তার কম নয়, আবার তার বাইরে নিজের বানানো কিছুও নয়। সৎকর্মশীল সেই লোক নয় যে মন চাইলে নামায পড়ে, বরং সেই লোক যার নামায দাঁড়িয়ে থাকে মন থাকুক বা না থাকুক।"
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
            "bn": "যাকাত দ্বিতীয় আঁচড়, আর এটি ইবাদতকে শরীর থেকে সরিয়ে আনে পকেটে। তাবারী একে বর্ণনা করেন মানুষের সম্পদে আল্লাহর ফরয করা সেই অংশ হিসেবে, যা পৌঁছে দেওয়া হয় তিনি যাদের জন্য নির্ধারণ করেছেন তাদের কাছে। ইবনে কাসীর প্রাপকদের নাম বলেন, হকদারদের, আর এই মানুষদের আরেকটি চিহ্ন যোগ করেন: তারা আত্মীয়তার বন্ধন রক্ষা করে, অভাবীদের পাশাপাশি নিজের স্বজনদের কাছেও পৌঁছায়। তাঁর পড়ায় দান মসজিদের দরজায় চুকে যাওয়া কোনো লেনদেন নয়, বরং এমন এক স্বভাব যা মানুষের সম্পর্কের গোটা জালে ছড়িয়ে পড়ে।"
          },
          {
            "en": "As-Saʿdī reads the deeper work the gift does. Zakāh, he says, purifies whoever gives it from mean and grasping traits, and at once benefits his Muslim brother and meets his need. In the act, a servant shows that he loves Allah more than he loves his money, for he takes out of his wealth the thing he is fond of in favour of what he is fonder of still, the pleasure of his Lord. The word zakāh itself carries this sense of purifying and of growth; what leaves the hand cleans the heart.",
            "bn": "সাদী দেখান দানটা ভেতরে কী গভীর কাজ করে। যাকাত, তিনি বলেন, যে দেয় তাকে কৃপণ আর আঁকড়ে ধরা স্বভাব থেকে পরিচ্ছন্ন করে, আর একই সঙ্গে তার মুসলিম ভাইয়ের উপকার করে, তার অভাব মেটায়। এই আমলে বান্দা দেখিয়ে দেয় সে টাকার চেয়ে আল্লাহকে বেশি ভালোবাসে, কারণ সম্পদ থেকে সে যা পছন্দ করে সেটিই বের করে দেয় তার চেয়ে প্রিয় কিছুর বিনিময়ে, আর তা হলো রবের সন্তুষ্টি। যাকাত শব্দটিই বহন করে পরিচ্ছন্ন করা আর বেড়ে ওঠার এই অর্থ; হাত থেকে যা বেরোয়, তা অন্তর পরিষ্কার করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Enjoined in Makkah",
          "bn": "মক্কাতেই আদিষ্ট"
        },
        "p": [
          {
            "en": "There is a historical surprise folded into this verse. Sūrat Luqmān is Makkan, revealed before the migration to Madīnah, and yet it commands zakāh. Maʿārif al-Qurʾān draws the lesson out: the original injunction to give zakāh had already come down in Makkah, well before the Hijra. What belongs to the second year after the Hijra is not the command itself but its administration, the fixing of the thresholds, the set amounts, and the collection and disbursement organised by the Islamic state. The duty to give preceded the machinery for measuring it.",
            "bn": "এই আয়াতের ভেতরে ইতিহাসের একটা চমক লুকিয়ে আছে। সূরা লুকমান মক্কী, মদীনায় হিজরতের আগে নাযিল, অথচ তা যাকাতের হুকুম দেয়। মাআরিফুল কুরআন শিক্ষাটা খুলে বলে: যাকাত দেওয়ার মূল হুকুম মক্কায় থাকতেই নেমে গিয়েছিল, হিজরতের অনেক আগে। হিজরতের পরের দ্বিতীয় বছরের যা, তা হুকুম নয়, বরং তার ব্যবস্থাপনা, নিসাব ঠিক করা, নির্ধারিত পরিমাণ, আর ইসলামি রাষ্ট্রের হাতে আদায় ও বণ্টনের গোছানো কাঠামো। দেওয়ার দায়িত্ব এসেছিল মাপজোখের যন্ত্রের অনেক আগে।"
          },
          {
            "en": "The commentary finds the same conclusion in Ibn Kathir, who noted that al-Muzzammil, another early Makkan sūrah, likewise pairs establishing prayer with giving zakāh (73:20). From this Maʿārif draws a quiet rule: the way the Qurʾān sets prayer and zakāh side by side, again and again, mirrors the way their obligations took hold side by side. The bodily worship and the worship of wealth were never meant to travel apart; where the verses place them together, the believer's practice is to keep them together too.",
            "bn": "তাফসীরটি একই সিদ্ধান্ত খুঁজে পায় ইবনে কাসীরের কাছেও, যিনি লক্ষ করেছেন যে মুযযাম্মিল, আরেকটি আগের মক্কী সূরা, একইভাবে নামায কায়েমের সঙ্গে যাকাত দেওয়াকে জোড়া বাঁধে (৭৩:২০)। এ থেকে মাআরিফ একটা শান্ত নিয়ম টানে: কুরআন যেভাবে বারবার নামায আর যাকাতকে পাশাপাশি রাখে, তা মিলে যায় যেভাবে এ দুটির হুকুমও পাশাপাশিই কার্যকর হয়েছিল। শরীরের ইবাদত আর সম্পদের ইবাদত কখনোই আলাদা পথে চলার কথা ছিল না; আয়াত যেখানে এদের একসঙ্গে বসায়, মুমিনের আমলও তাদের একসঙ্গে রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Root of Both",
          "bn": "দুটোর গোড়া"
        },
        "p": [
          {
            "en": "Now the third stroke, and the commentators treat it as the first in rank. As-Saʿdī opens his comment by saying the muḥsinīn are described first with complete knowledge, which is the yaqīn that compels action and the fear of Allah's punishment, so that they abandon His disobedience. Only then does he turn to their deeds. In his reading, certainty is not merely an item beside prayer and zakāh; it is the ground they grow from. He singles out the two deeds as excellent precisely because a sure heart stands behind them, and he calls that certainty the knowledge that necessitates the act.",
            "bn": "এবার তৃতীয় আঁচড়, আর তাফসীরকারেরা একেই মর্যাদায় প্রথম ধরেন। সাদী তাঁর আলোচনা শুরু করেন এই বলে যে সৎকর্মশীলদের প্রথমে বর্ণনা করা হয়েছে পূর্ণ জ্ঞান দিয়ে, যা সেই ইয়াকীন যা আমলে বাধ্য করে আর আল্লাহর শাস্তির ভয় জাগায়, ফলে তারা তাঁর নাফরমানি ছেড়ে দেয়। এরপরই তিনি তাদের আমলের দিকে ফেরেন। তাঁর পড়ায় নিশ্চয়তা নামায আর যাকাতের পাশে নিছক আরেকটা জিনিস নয়; এ হলো সেই মাটি যা থেকে ওরা গজায়। তিনি দুটি আমলকে উৎকৃষ্ট বলেন ঠিক এ কারণেই যে এদের পেছনে দাঁড়িয়ে থাকে এক নিশ্চিত অন্তর, আর সেই নিশ্চয়তাকে তিনি বলেন আমলে বাধ্য করা জ্ঞান।"
          },
          {
            "en": "What is this certainty certain of? At-Tabari answers from the words themselves: they establish prayer and give zakāh while being certain of Allah's recompense and reward in the Hereafter for whoever does so. Al-Muyassar sharpens it to the resurrection and the reckoning that follows. The Arabic word is yaqīn, and it names the highest grade of belief, knowledge so settled that no doubt disturbs it. It is a different thing from ẓann, mere supposition or likely guess. The muḥsin does not hope the Hereafter may be real; he knows it, the way he knows the ground he stands on.",
            "bn": "এই নিশ্চয়তা কিসের ব্যাপারে নিশ্চিত? তাবারী জবাব দেন শব্দগুলো থেকেই: তারা নামায কায়েম করে আর যাকাত দেয় এই অবস্থায় যে, যে এমন করে তার জন্য আখেরাতে আল্লাহর প্রতিদান আর পুরস্কারের ব্যাপারে তারা নিশ্চিত। মুয়াসসার একে আরও ধারালো করেন পুনরুত্থান আর তার পরের হিসাব পর্যন্ত। আরবি শব্দটি ইয়াকীন, আর তা বোঝায় বিশ্বাসের সর্বোচ্চ ধাপ, এমন থিতু জ্ঞান যা কোনো সন্দেহ নাড়াতে পারে না। এটি ধারণা বা আন্দাজ, অর্থাৎ যান্ন থেকে আলাদা জিনিস। সৎকর্মশীল আখেরাত সত্যি হতে পারে বলে আশা করে না; সে জানে, যেমন জানে পায়ের নিচের মাটিকে।"
          },
          {
            "en": "The verse even builds the certainty into its shape. Where it could have said and they are certain of the Hereafter, it says, and they, of the Hereafter, they are certain, repeating the word they as if to press the point home. The doubling throws the whole weight onto these people and their conviction. It is a small grammatical emphasis with a large meaning: among all that can be said of the doers of good, the thing the verse will not let you miss is how sure they are of what is coming.",
            "bn": "আয়াত নিশ্চয়তাটাকে তার গড়নের ভেতরেও বসিয়ে দেয়। যেখানে বলা যেত আর তারা আখেরাতের ব্যাপারে নিশ্চিত, সেখানে বলে, আর তারা, আখেরাতের ব্যাপারে, তারাই নিশ্চিত, তারা শব্দটা আবার এনে যেন কথাটা গেঁথে দেয়। এই পুনরাবৃত্তি গোটা ভার ফেলে দেয় এই মানুষ আর তাদের দৃঢ়তার উপর। ছোট্ট এক ব্যাকরণিক জোর, অথচ বড় অর্থ: সৎকর্মশীল সম্পর্কে যত কথা বলা যায়, তার মধ্যে যেটা আয়াত কিছুতেই চোখ এড়াতে দেবে না, তা হলো সামনে যা আসছে সে ব্যাপারে তারা কতটা নিশ্চিত।"
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
            "bn": "একটি মাত্র হাদীস তিনটি চিহ্নকেই এক দৃশ্যে জড়ো করে, আর তা সহীহ, বর্ণনা করেছেন বুখারি (নং ৫০)। নবী ﷺ মানুষের মাঝে বসে ছিলেন, এমন সময় এক অচেনা লোক এসে তাঁকে প্রশ্ন করে। ঈমান কী? আল্লাহ, তাঁর ফেরেশতাগণ, তাঁর সাক্ষাৎ, তাঁর রাসূলগণের উপর বিশ্বাস, আর পুনরুত্থানে বিশ্বাস। ইসলাম কী? এক আল্লাহর ইবাদত করা, নামায কায়েম করা, ফরয যাকাত দেওয়া, আর রমযানের রোযা রাখা। ইহসান কী? আল্লাহর ইবাদত এমনভাবে করা যেন তুমি তাঁকে দেখছ, কারণ তুমি তাঁকে না দেখলেও তিনি তোমাকে দেখছেন।"
          },
          {
            "en": "Line up that answer with our verse. Islam, as the Prophet ﷺ defined it, is built on establishing prayer and paying zakāh, the two visible strokes of 31:4. Faith includes believing in the Resurrection, which is the yaqīn of the Hereafter, the third stroke. And iḥsān, the very quality the sūrah opened by praising in the muḥsinīn (31:3), is defined here as worship lived under the gaze of a God you are sure is watching. The hadith is, in effect, the verse unfolded into a conversation.",
            "bn": "এই জবাবটা আমাদের আয়াতের পাশে রাখুন। নবী ﷺ যেভাবে ইসলামকে সংজ্ঞায়িত করলেন, তা দাঁড়িয়ে আছে নামায কায়েম আর যাকাত দেওয়ার উপর, ৩১:৪-এর দুটি দৃশ্যমান আঁচড়। ঈমানের ভেতরে আছে পুনরুত্থানে বিশ্বাস, যা আখেরাতের সেই ইয়াকীন, তৃতীয় আঁচড়। আর ইহসান, যে গুণের প্রশংসা দিয়ে সূরা তার সৎকর্মশীলদের কথা শুরু করেছিল (৩১:৩), এখানে তার সংজ্ঞা দেওয়া হলো এমন ইবাদত হিসেবে যা করা হয় এমন এক আল্লাহর নজরের নিচে, যাঁর দৃষ্টির ব্যাপারে বান্দা নিশ্চিত। হাদীসটি আসলে আয়াতটিকেই কথোপকথনে খুলে দেওয়া।"
          },
          {
            "en": "Then comes the detail that ties the knot. After the stranger left, the Prophet ﷺ said he was Gabriel, come to teach the people their religion, and he sealed the lesson by reciting a verse, with Allah is the knowledge of the Hour (31:34), from this very sūrah of Luqmān. The conversation that defines iḥsān ends on a line from the sūrah whose opening defines the muḥsin. Faith, Islam and excellence, and beneath them all the certainty of the Hour, meet in a single teaching, inside a single chapter.",
            "bn": "তারপর আসে সেই খুঁটিনাটি যা গিঁটটা বেঁধে দেয়। অচেনা লোকটি চলে যাওয়ার পর নবী ﷺ বললেন, ইনি ছিলেন জিবরীল (আঃ), মানুষকে তাদের দ্বীন শেখাতে এসেছিলেন। আর তিনি শিক্ষাটা সিল করে দিলেন একটি আয়াত পড়ে, নিশ্চয় কিয়ামতের জ্ঞান আল্লাহর কাছেই (৩১:৩৪), এই লুকমান সূরা থেকেই। যে কথোপকথন ইহসানের সংজ্ঞা দেয়, তা শেষ হয় সেই সূরার এক আয়াতে যার শুরু সৎকর্মশীলের সংজ্ঞা দেয়। ঈমান, ইসলাম আর ইহসান, আর এ সবের নিচে কিয়ামতের নিশ্চয়তা, সব মিলে যায় একটি শিক্ষায়, একটি অধ্যায়ের ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "When Certainty Shows",
          "bn": "নিশ্চয়তা যখন দেখা দেয়"
        },
        "p": [
          {
            "en": "Put the three together and a pattern appears. The outward acts are what a watcher sees, but the certainty is what keeps them from going hollow. Ibn Kathir notes it in the doers of good: they sought Allah's reward for their deeds and did not perform them for show, wanting neither reward nor thanks from people. A prayer offered to be seen, a gift given for a name, is an outward stroke with no inward root. What makes the act the act of a muḥsin is the sure heart underneath, answering to a Lord it does not doubt.",
            "bn": "তিনটিকে একসঙ্গে রাখুন, একটা ছক ফুটে ওঠে। বাইরের আমল যা একজন দর্শক দেখে, কিন্তু নিশ্চয়তাই এগুলোকে ফাঁপা হওয়া থেকে বাঁচায়। ইবনে কাসীর সৎকর্মশীলদের মধ্যে এটি লক্ষ করেন: তারা নিজেদের আমলের জন্য আল্লাহর পুরস্কার চেয়েছে, লোক দেখানোর জন্য করেনি, মানুষের কাছ থেকে প্রতিদান বা কৃতজ্ঞতা কিছুই চায়নি। লোক দেখানোর জন্য পড়া নামায, নাম কেনার জন্য দেওয়া দান বাইরের এক আঁচড় যার ভেতরে কোনো শিকড় নেই। আমলকে সৎকর্মশীলের আমল বানায় নিচের সেই নিশ্চিত অন্তর, যা জবাব দেয় এমন এক রবকে যাঁকে নিয়ে তার কোনো সন্দেহ নেই।"
          },
          {
            "en": "That is the quiet challenge the verse hands the reader. It is not hard to keep a prayer going, or to give, for a season, on habit or on the eyes of others. The question is whether the certainty is there underneath, strong enough to hold the acts up when habit fades and the eyes of others turn away. Grow sure of the Hereafter, as these doers of good were sure, and prayer and zakāh follow and last. Let the certainty thin, and the finest outward practice is a portrait with nothing behind the eyes.",
            "bn": "এটাই সেই শান্ত চ্যালেঞ্জ যা আয়াত পাঠকের হাতে তুলে দেয়। অভ্যাসের জোরে বা অন্যের চোখের সামনে কিছুকাল নামায ধরে রাখা, কিংবা দান করা, কঠিন নয়। প্রশ্ন হলো নিচে সেই নিশ্চয়তা আছে কি না, যা এত শক্ত যে অভ্যাস মিইয়ে গেলে আর অন্যের চোখ সরে গেলেও আমলগুলোকে ধরে রাখতে পারে। আখেরাতের ব্যাপারে নিশ্চিত হয়ে উঠুন, যেমন এই সৎকর্মশীলেরা নিশ্চিত ছিল, তাহলে নামায আর যাকাত আপনা থেকেই আসে আর টেকে। নিশ্চয়তা পাতলা হতে দিন, তখন সবচেয়ে সুন্দর বাইরের আমলও এমন এক ছবি যার চোখের পেছনে কিছুই নেই।"
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
          "bn": "তর্কের উপরে এক ছাদ"
        },
        "p": [
          {
            "en": "By this point the sura has already drawn two kinds of people: the one who buys idle talk to lead others astray (31:6) and turns from the verses as if deaf (31:7), and the believers with their gardens of delight (31:8). Now the argument lifts its eyes. As-Sa'di reads the whole passage as Allah reciting to His servants traces of His power, wonders of His wisdom, and gifts of His mercy. The sky is where he begins.",
            "bn": "এ পর্যন্ত আসতে আসতে সূরা দুই ধরনের মানুষ এঁকে ফেলেছে। একজন অবান্তর কথা কিনে অন্যদের পথ থেকে সরায় (৩১:৬), আর আয়াত শুনলে এমনভাবে মুখ ফেরায় যেন সে বধির (৩১:৭)। অন্যদল ঈমানদার, তাদের জন্য নিয়ামতের জান্নাত (৩১:৮)। এবার যুক্তি চোখ তোলে উপরের দিকে। সাদী গোটা অংশটিকে পড়েন এভাবে: আল্লাহ তাঁর বান্দাদের শোনাচ্ছেন নিজ কুদরতের ছাপ, হিকমতের বিস্ময় আর রহমতের দান। শুরুটা হয় আকাশ দিয়ে।"
          },
          {
            "en": "What follows is not an abstract proof but a list of things anyone can check by looking: a sky with no visible support, ground held still, animals in every direction, rain, and crops. Each item is handed over as evidence, and the whole set is sealed two verses later with a single demand in 31:11: this is the creation of Allah, so show Me what those besides Him made. The believer is being taught how to argue, and also how to see.",
            "bn": "এরপর যা আসে তা কোনো বিমূর্ত প্রমাণ নয়, বরং তাকিয়ে দেখলেই যাচাই করা যায় এমন কিছু জিনিসের তালিকা: খুঁটিহীন আকাশ, স্থির মাটি, চারদিকে ছড়ানো প্রাণী, বৃষ্টি আর ফসল। প্রতিটি জিনিস তুলে ধরা হয় প্রমাণ হিসেবে, আর গোটা তালিকাটা দুই আয়াত পরে একটিমাত্র দাবিতে সিল করে দেওয়া হয় ৩১:১১ আয়াতে: এ তো আল্লাহর সৃষ্টি, তাঁকে ছাড়া আর কেউ কী বানিয়েছে আমাকে দেখাও। ঈমানদারকে শেখানো হচ্ছে কীভাবে যুক্তি দিতে হয়, আর কীভাবে দেখতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pillars You Cannot See",
          "bn": "যে খুঁটি চোখে পড়ে না"
        },
        "p": [
          {
            "en": "Bi-ghayri 'amadin tarawnaha: without pillars that you see. Al-Qurtubi lays out the grammar that makes the line carry two readings. If tarawnaha (that you see) is read as describing the pillars, then pillars may exist but go unseen. If it is read as describing the heavens, standing on its own, the sense is that He created the heavens with no pillars, as you plainly see. Al-Qurtubi notes that an-Nahhas and Makki preferred taking it as a fresh clause, with no pillars there at all.",
            "bn": "বিগাইরি আমাদিন তারাওনাহা: খুঁটি ছাড়া, যা তোমরা দেখছ। কুরতুবী সেই ব্যাকরণ খুলে দেন যার জন্য বাক্যটি দুটি পাঠ বহন করে। 'তারাওনাহা' (যা তোমরা দেখছ) যদি খুঁটির বিশেষণ ধরা হয়, তবে খুঁটি থাকতেও পারে, কিন্তু চোখে পড়ে না। আর যদি তা আকাশের বিশেষণ ধরা হয় আর নিজেই স্বাধীন বাক্য হয়, তবে অর্থ দাঁড়ায়: তিনি আকাশ বানিয়েছেন খুঁটি ছাড়াই, যেমনটা তোমরা সামনেই দেখছ। কুরতুবী জানান, নাহহাস আর মাক্কী একে আলাদা বাক্য ধরাকেই উত্তম বলেছেন, যেখানে খুঁটি বলে কিছুই নেই।"
          },
          {
            "en": "Behind the grammar stand named authorities, and at-Tabari records both. From Ibn 'Abbas, by way of 'Ikrimah, comes the reading that perhaps it has pillars you do not see; Mujahid says the same. 'Ikrimah puts it sharply: you see them as without pillars, yet they have pillars. Against this, al-Hasan and Qatadah hold that it is without pillars, you see them, and it has none. Ibn Kathir carries the two camps side by side and sends the reader to the start of Surah ar-Ra'd, where he had settled the matter.",
            "bn": "ব্যাকরণের পেছনে দাঁড়িয়ে আছেন নামজাদা মনীষীরা, আর তাবারী দুই পক্ষের কথাই তুলে ধরেন। ইবন আব্বাস থেকে ইকরিমার সূত্রে আসে এই পাঠ: হয়তো এর খুঁটি আছে, যা তোমরা দেখো না; মুজাহিদও একই কথা বলেন। ইকরিমা আরও ধারালোভাবে বলেন: তোমরা একে খুঁটিহীন দেখছ, অথচ এর খুঁটি আছে। এর বিপরীতে হাসান আর কাতাদা ধরেন, এর কোনো খুঁটিই নেই, তোমরা তা দেখছ। ইবন কাসীর দুই পক্ষকেই পাশাপাশি রাখেন আর পাঠককে পাঠিয়ে দেন সূরা রাদের শুরুর দিকে, যেখানে তিনি বিষয়টির মীমাংসা করেছেন।"
          },
          {
            "en": "As-Sa'di and al-Muyassar lean to the plainer sense: it has no pillars, for had it any, they would be seen, and it is only Allah's power that holds it in place. Ma'arif al-Qur'an sets out the same alternatives and then makes the point that settles the heart rather than the grammar: whichever reading you take, the verse is still pointing to one sign, that this vast, high roof stands with no column visible beneath it. The disagreement is real, and it does not weaken the sign.",
            "bn": "সাদী আর মুয়াসসার সহজ অর্থের দিকে ঝোঁকেন: এর কোনো খুঁটি নেই, থাকলে তো দেখা যেত, আর কেবল আল্লাহর কুদরতই একে জায়গায় ধরে রেখেছে। মাআরিফুল কুরআন একই বিকল্পগুলো সাজিয়ে তারপর এমন একটা কথা বলে যা ব্যাকরণ নয়, মনকে শান্ত করে: যে পাঠই নাও, আয়াত একটিমাত্র নিদর্শনের দিকেই আঙুল তোলে, যে এই বিশাল উঁচু ছাদ দাঁড়িয়ে আছে নিচে কোনো দৃশ্যমান থাম ছাড়াই। মতভেদ সত্যি, তবু তা এই নিদর্শনকে দুর্বল করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Mountains That Steady Us",
          "bn": "যে পাহাড় স্থির রাখে"
        },
        "p": [
          {
            "en": "And has cast into the earth firm mountains, lest it sway with you. At-Tabari explains rawasi as the fixed mountains set on the earth's back, and reads lest it sway with you as lest it shake you, tipping neither right nor left but settling under you. He quotes Qatadah: He made it firm with the mountains, and without that it would never have kept any creature settled upon it. The picture is an anchor, not a theory about how the ground was made.",
            "bn": "আর তিনি পৃথিবীতে বসিয়ে দিয়েছেন অটল পাহাড়, যাতে তা তোমাদের নিয়ে দুলে না ওঠে। তাবারী 'রাওয়াসি' বলতে বোঝান মাটির পিঠে বসানো স্থির পাহাড়, আর 'যাতে তোমাদের নিয়ে দুলে না ওঠে' পড়েন এভাবে: যাতে তা তোমাদের নাড়িয়ে না দেয়, ডানে-বাঁয়ে না হেলে বরং তোমাদের নিয়ে থিতু থাকে। তিনি কাতাদার কথা তুলে ধরেন: পাহাড় দিয়ে তিনি একে স্থির করেছেন, নইলে এর উপর কোনো প্রাণীকে থিতু রাখা যেত না। ছবিটা নোঙরের, মাটি কীভাবে বানানো হলো তার কোনো তত্ত্ব নয়।"
          },
          {
            "en": "Al-Qurtubi notes the grammar once more: lest it sway stands for out of dislike that it should sway, while the Kufan grammarians read it as so that it would not sway. Ibn Kathir adds weight to the image: the mountains steady the earth and press it down so it does not lurch with its people over the water. As-Sa'di draws the plain conclusion that without the firm mountains the earth would reel and never rest for those who live on it.",
            "bn": "কুরতুবী আবারও ব্যাকরণটা ধরিয়ে দেন: 'যাতে দুলে না ওঠে' আসলে 'দুলে ওঠাকে অপছন্দ করে' অর্থে, আর কূফার ব্যাকরণবিদরা পড়েন 'যেন তা দুলে না ওঠে' অর্থে। ইবন কাসীর ছবিটায় আরও ভার যোগ করেন: পাহাড় মাটিকে স্থির করে আর চেপে ধরে, যাতে পানির উপরে তা নিজের অধিবাসীদের নিয়ে টলমল না করে। সাদী সোজা উপসংহার টানেন: অটল পাহাড় না থাকলে মাটি দুলত, আর যারা তার উপর বাস করে তাদের নিয়ে কখনো থিতু হতো না।"
          },
          {
            "en": "There is a mercy worth naming here. A still floor is something we only notice when it moves. The verse asks the reader to feel the steadiness that carries an ordinary day, the ground that stays put while we walk, sleep, and build on it, and to trace it back to a deliberate act of its Maker. The mountains are named not as scenery but as service. What we take for the baseline of life is itself a gift that was placed.",
            "bn": "এখানে একটা রহমতের নাম নেওয়া দরকার। থির মেঝের কথা আমরা তখনই টের পাই যখন সেটা নড়ে ওঠে। আয়াত পাঠককে বলে সেই স্থিরতাটুকু অনুভব করতে, যা সাধারণ একটা দিনকে বয়ে নেয়; যে মাটি আমাদের হাঁটা, ঘুম আর গড়ে তোলার সময় জায়গামতো পড়ে থাকে, তা যেন ফিরিয়ে দেওয়া হয় স্রষ্টার এক ইচ্ছাকৃত কাজের দিকে। পাহাড়কে এখানে সাজসজ্জা হিসেবে নয়, কাজের জিনিস হিসেবে নাম ধরা হয়েছে। জীবনের যেটুকু আমরা স্বাভাবিক ভিত্তি বলে ধরি, সেটুকুও বসিয়ে দেওয়া এক দান।"
          }
        ]
      },
      {
        "h": {
          "en": "Creatures Beyond Counting",
          "bn": "গুনে শেষ না হওয়া প্রাণী"
        },
        "p": [
          {
            "en": "And scattered in it every kind of creature. The verb baththa means to spread and disperse widely. At-Tabari explains dabba as every kind of moving thing: some, he notes, define it as whatever eats and drinks, but to him it is everything that crawls on the earth. The word sweeps in the small and the large, the seen and the barely seen, every animal strewn across a world wide enough to hold them all. Nothing in the list is decorative; each creature is itself a made thing.",
            "bn": "আর তিনি তাতে ছড়িয়ে দিয়েছেন সব ধরনের জীবজন্তু। 'বাসসা' ক্রিয়ার মানে বিস্তৃতভাবে ছড়িয়ে দেওয়া। তাবারী 'দাব্বা' বোঝান চলাফেরা করে এমন সব প্রাণী হিসেবে: কেউ কেউ, তিনি বলেন, একে বোঝায় যা খায় আর পান করে তা দিয়ে, তবে তাঁর কাছে এটি মাটির উপর চলে এমন সবকিছু। শব্দটি ভেতরে টেনে নেয় ছোট আর বড়, চোখে পড়া আর সবে চোখে পড়া সবাইকে; প্রতিটি প্রাণী ছড়ানো এমন এক দুনিয়ায় যা সবাইকে ধরার মতো যথেষ্ট প্রশস্ত। তালিকার কিছুই সাজসজ্জা নয়, প্রতিটি প্রাণী নিজেই এক সৃষ্ট বস্তু।"
          },
          {
            "en": "Ibn Kathir draws out the wonder in the phrase: He placed on the earth kinds of animals whose number, shapes, and colors are known to none but the One who created them. The variety itself is the argument. As-Sa'di adds the other half, that these creatures are made subject to the children of Adam, serving their interests and needs. So the same scattering is at once a display of boundless power and a provision set in place for people, long before any person asked.",
            "bn": "ইবন কাসীর বাক্যটির ভেতরের বিস্ময় টেনে বের করেন: তিনি মাটিতে রেখেছেন এমন সব প্রাণী, যাদের সংখ্যা, আকার আর রং একমাত্র তাদের স্রষ্টা ছাড়া কারও জানা নেই। এই বৈচিত্র্যই যুক্তি। সাদী যোগ করেন বাকি অর্ধেকটা: এই প্রাণীদের বানানো হয়েছে আদম-সন্তানের অধীন করে, তাদের কল্যাণ আর প্রয়োজনের সেবায়। তাই একই ছড়িয়ে দেওয়া একদিকে অসীম কুদরতের প্রদর্শন, আবার মানুষের জন্য আগেভাগে বসিয়ে রাখা রিজিক, কোনো মানুষ চাওয়ার বহু আগেই।"
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
            "bn": "আর আমি আকাশ থেকে পানি নামিয়েছি আর তাতে উদ্গত করেছি সব কল্যাণকর জাত। ইবন কাসীর মোড়টা মন দিয়ে পড়েন: তিনি যে স্রষ্টা তা প্রতিষ্ঠা করার পর আল্লাহ এবার মনে করিয়ে দেন যে তিনিই রিজিকদাতা। সাদী সম্পর্কটা খোলাসা করেন: প্রাণীরা মাটিতে ছড়িয়ে পড়ার পর বাঁচার জন্য তাদের খাবার লাগবে, তাই নেমে এল বরকতি পানি। ব্যাকরণও বদলে যায় 'তিনি সৃষ্টি করেছেন' থেকে 'আমি নামিয়েছি'-তে, শ্রোতাকে কাছে টেনে, যেন বৃষ্টিটা হাতে হাতে তুলে দেওয়া হচ্ছে।"
          },
          {
            "en": "The phrase min kulli zawjin karim repays a close look. Zawj means a kind, and also a pair; Ibn Kathir in the abridged commentary renders it as produce of every goodly kind, in pairs. Karim carries the sense of generous and noble. At-Tabari glosses it as hasan an-nibta, beautiful in its growth, and quotes Qatadah that it simply means good. Al-Qurtubi relays from Ibn 'Abbas that it is every beautiful color. The soil yields nothing drab; what rises is both useful and good to behold.",
            "bn": "'মিন কুল্লি জাওজিন কারীম' কথাটা কাছ থেকে দেখার দাবি রাখে। 'জাওজ' মানে জাত, আবার জোড়াও; ইবন কাসীর সংক্ষিপ্ত তাফসীরে একে পড়েন প্রতিটি উৎকৃষ্ট জাতের ফসল, জোড়ায় জোড়ায়। 'কারীম' বহন করে উদার আর সম্মানিত হওয়ার অর্থ। তাবারী একে ব্যাখ্যা করেন 'হাসানুন নিবতা', অর্থাৎ গজানোয় সুন্দর, আর কাতাদা থেকে আনেন যে এর মানে সোজা কথায় ভালো। কুরতুবী ইবন আব্বাস থেকে জানান, এটি প্রতিটি সুন্দর রঙের। মাটি কিছুই বিবর্ণ ফলায় না; যা ওঠে তা একসঙ্গে কাজেরও, দেখতেও সুন্দর।"
          },
          {
            "en": "As-Sa'di completes the scene: the water is blessed, and what grows from it is lovely to look at, beneficial, and full of blessing, so the scattered creatures graze in it and every animal finds its rest. Al-Muyassar keeps the same note, calling the growth delightful, useful, and fair to the eye. The circle closes: water from above, plants from below, creatures fed, people provided for. One Hand moves through every link, and the verse has let us watch it work.",
            "bn": "সাদী দৃশ্যটা পূর্ণ করেন: পানি বরকতি, আর তা থেকে যা গজায় তা দেখতে মনোরম, উপকারী আর বরকতে ভরা, ফলে ছড়ানো প্রাণীরা তাতে চরে বেড়ায় আর প্রতিটি জীব তাতে বিশ্রাম খুঁজে পায়। মুয়াসসার একই সুরে বলেন, এই ফসল নয়নাভিরাম, কাজের আর চোখজুড়ানো। বৃত্তটা বন্ধ হয়: উপর থেকে পানি, নিচ থেকে গাছ, খাবার পায় প্রাণী, জোগান পায় মানুষ। একটিমাত্র হাত প্রতিটি সংযোগের ভেতর দিয়ে চলে, আর আয়াত আমাদের তা কাজ করতে দেখতে দিয়েছে।"
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
            "bn": "দুজন তাফসীরকার 'কল্যাণকর জাত' নিয়ে একটা চমকপ্রদ পাঠ তুলে ধরেন। ইবন কাসীর আর কুরতুবী দুজনেই শাবি থেকে আনেন যে মানুষও মাটির ফসল, মাটির ধুলো থেকেই গজানো। এই পাঠে শব্দটি প্রসারিত হয়ে আমাদের ঢেকে নেয়: যার শেষ হয় জান্নাতে সে-ই কল্যাণকর জাত, 'কারীম', আর যার শেষ হয় জাহান্নামে সে নিকৃষ্ট জাত, 'লাইম'। কথাটা জীবিত কারও ব্যাপারে রায় নয়; এটি গাছের ফসলকে পড়ে আত্মার ফসলের এক নীরব প্রতীক হিসেবে।"
          },
          {
            "en": "Al-Qurtubi notes a second line as well, that the human seed itself is formed from dust, and that the plain wording of the Qur'an supports this. Either way the lesson lands gently. The same rain that lifts a crop of either good or poor quality is set before every person, and what we finally become is the fruit we grow toward. The verse that began with the vast sky has narrowed, without a jolt, to the state of a single heart.",
            "bn": "কুরতুবী আরেকটি সূত্রও তুলে ধরেন, যে মানুষের শুক্রবিন্দু নিজেই মাটি থেকে গড়া, আর কুরআনের স্পষ্ট শব্দই এর সমর্থন করে। যেভাবেই দেখি, শিক্ষাটা নরমভাবে এসে পড়ে। যে একই বৃষ্টি ভালো বা নিম্নমানের ফসল তুলে আনে, তা প্রতিটি মানুষের সামনেই রাখা, আর আমরা শেষমেশ যা হয়ে উঠি তা সেই ফল, যার দিকে আমরা বেড়ে উঠি। যে আয়াত বিশাল আকাশ দিয়ে শুরু হয়েছিল, তা কোনো ঝাঁকুনি ছাড়াই নেমে এসেছে একটিমাত্র হৃদয়ের অবস্থায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Sign Elsewhere",
          "bn": "একই নিদর্শন অন্য সূরায়"
        },
        "p": [
          {
            "en": "This is not the only place the Qur'an raises a pillarless sky as proof. Ma'arif al-Qur'an points to 13:2, Allah is the One who raised the heavens without pillars that you see, which opens Surah ar-Ra'd with the same image. Both Ibn Kathir, here and there, treat the two verses together and settle the grammar of the phrase at the earlier passage. Reading them side by side shows a habit of the Qur'an: it returns to the same sign in new settings, trusting that a true proof only deepens on a second hearing.",
            "bn": "কুরআন কেবল এখানেই খুঁটিহীন আকাশকে প্রমাণ হিসেবে তোলে না। মাআরিফুল কুরআন ইঙ্গিত করে ১৩:২ আয়াতের দিকে, 'আল্লাহই সেই সত্তা যিনি আকাশকে খুঁটি ছাড়া উঁচু করেছেন, যা তোমরা দেখছ', যা একই ছবি দিয়ে সূরা রাদ শুরু করে। ইবন কাসীর এখানে আর সেখানে দুটি আয়াতকে একসঙ্গে ধরেন আর কথাটার ব্যাকরণ আগের জায়গাতেই মীমাংসা করেন। পাশাপাশি পড়লে কুরআনের একটা অভ্যাস ধরা পড়ে: সে একই নিদর্শনে ফিরে আসে নতুন পরিবেশে, এই আস্থায় যে সত্য প্রমাণ দ্বিতীয়বার শুনলে আরও গভীর হয়।"
          },
          {
            "en": "On this verse the commentators lean on the plain evidence of creation rather than on narrations, and none of those consulted here attaches a hadith of the Prophet to it. That absence is itself instructive. The proof the verse offers needs no specialist to unlock it; it asks only open eyes and an honest mind. Anyone who has seen a sky, stood on steady ground, met an animal, or eaten from a plant already holds the evidence in hand. The verse simply asks them to read it.",
            "bn": "এই আয়াতে তাফসীরকারেরা বর্ণনার চেয়ে সৃষ্টির খোলা প্রমাণের উপরই ভর করেন, আর এখানে দেখা কেউই এর সঙ্গে নবী ﷺ-এর কোনো হাদিস জুড়ে দেননি। এই অনুপস্থিতিও শেখার মতো। আয়াত যে প্রমাণ দেয় তা খুলতে কোনো বিশেষজ্ঞ লাগে না; লাগে কেবল খোলা চোখ আর সৎ মন। যে কেউ আকাশ দেখেছে, স্থির মাটিতে দাঁড়িয়েছে, কোনো প্রাণীর দেখা পেয়েছে, বা গাছের ফল খেয়েছে, প্রমাণ তো তার হাতেই। আয়াত শুধু তাকে সেটা পড়তে বলছে।"
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
            "bn": "পরের আয়াত গোটা তালিকাটিকে এক চ্যালেঞ্জে বদলে দেয়: এ তো আল্লাহর সৃষ্টি, তাঁকে ছাড়া আর কেউ কী বানিয়েছে আমাকে দেখাও (৩১:১১)। ইবন কাসীর বলেন, যা কিছুর নাম নেওয়া হলো, আসমান-জমিন আর এর মাঝের সব, তা একমাত্র তাঁরই কুদরত থেকে, এতে কোনো শরিক নেই; তাই মূর্তিগুলোকে ডাকা হচ্ছে নিজেদের বানানো একটা জিনিস হাজির করতে। তারা পারে না। আয়াত শেষ হয় যারা শরিক দাঁড় করায় তাদের স্পষ্ট পথভ্রষ্ট বলে, গালি হিসেবে নয়, বরং এক সত্য কথা হিসেবে: তারা যা কিছু ব্যবহার করে তার একমাত্র উৎস থেকে মুখ ফিরিয়ে আছে।"
          },
          {
            "en": "So the verse leaves the reader with a practice, not just a doctrine. Walk out under the open sky, feel the ground hold, watch a bird or a crawling thing, notice bread come from grain, and let each of these carry the mind back to the Maker. The mushrik in the story had the same evidence and looked past it; the believer is asked to look again and keep looking. To read creation this way is the beginning of both gratitude and worship, which is exactly where the sura is taking us.",
            "bn": "তাই আয়াত পাঠকের হাতে কেবল একটা মতবাদ নয়, একটা অভ্যাস তুলে দেয়। খোলা আকাশের নিচে বেরিয়ে যান, মাটির ধরে রাখাটা অনুভব করুন, কোনো পাখি বা হামাগুড়ি-দেওয়া প্রাণী দেখুন, খেয়াল করুন শস্য থেকে রুটি আসছে, আর এগুলোর প্রতিটিকে মনকে স্রষ্টার দিকে ফিরিয়ে নিতে দিন। কাহিনির মুশরিকের কাছে একই প্রমাণ ছিল, সে পাশ কাটিয়ে গেছে; ঈমানদারকে বলা হচ্ছে আবার তাকাতে আর তাকিয়ে থাকতে। সৃষ্টিকে এভাবে পড়াই শুকরিয়া আর ইবাদত দুটিরই শুরু, আর সূরা আমাদের ঠিক সেদিকেই নিয়ে যাচ্ছে।"
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
          "bn": "আল্লাহর পক্ষ থেকে সংযোজন"
        },
        "p": [
          {
            "en": "The verse sits inside another speech. Surah Luqman is carrying the counsel of Luqman to his son — 31:13 has him warning against shirk, and his advice resumes at 31:16. Between the father's words, Allah Himself interjects: and We have enjoined upon man concerning his parents. The commentators note the placement: at the very moment a father is teaching his child tawhid, the Author of the Book steps in to teach the child what he owes his parents.",
            "bn": "আয়াতটি বসে আছে আরেকটি ভাষণের ভেতরে। সূরা লুকমান বহন করছে লুকমানের তাঁর ছেলেকে দেওয়া উপদেশ — 31:13-এ তিনি শিরক থেকে সাবধান করছেন, আর তাঁর উপদেশ আবার শুরু হয় 31:16-এ। বাবার কথার মাঝখানে স্বয়ং আল্লাহ যুক্ত করেন: আর আমি মানুষকে তার মাতা-পিতার ব্যাপারে নির্দেশ দিয়েছি। মুফাসসিরগণ এই অবস্থানটি লক্ষ করেন: যে মুহূর্তে এক বাবা সন্তানকে তাওহীদ শেখাচ্ছেন, ঠিক তখনই কিতাবের রচয়িতা এগিয়ে এসে সন্তানকে শেখান — মাতা-পিতার কাছে তার ঋণ কী।"
          },
          {
            "en": "The pairing runs deep in the Quran. 17:23 joins the command to worship Allah alone with excellence to parents in a single verse, and this verse will end by joining gratitude to Him with gratitude to them in a single breath. The two duties stand next to each other so often that the mufassirun treat the ordering as doctrine: after the right of Allah comes, immediately, the right of the parents.",
            "bn": "এই জোড় কুরআনে গভীরভাবে চলে। 17:23 এক আয়াতেই মেলায় একমাত্র আল্লাহর ইবাদতের আদেশ আর মাতা-পিতার প্রতি সদ্ব্যবহার; আর এই আয়াতটি শেষ হবে এক নিঃশ্বাসে তাঁর প্রতি ও তাদের প্রতি কৃতজ্ঞতা মিলিয়ে। দুটি কর্তব্য এত ঘনঘন পাশাপাশি দাঁড়ায় যে মুফাসসিরগণ এই ক্রমকে আকীদার মতোই গণ্য করেন: আল্লাহর হকের পরেই, অবিলম্বে, মাতা-পিতার হক।"
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
            "bn": "আদেশের কারণটি আয়াত দেয় এক সংক্ষিপ্ত জীবনবৃত্তান্তে: তার মা তাকে বহন করেছে — ওয়াহনান আলা ওয়াহন — দুর্বলতার ওপর দুর্বলতায় — আর তার দুধ ছাড়ানো দুই বছরে। গর্ভধারণের প্রতিটি ধাপ ভার বাড়ায় আর শক্তি নিয়ে যায়; শব্দবিন্যাস মূল্যটাকে স্তরের ওপর স্তর করে জমা করে। এরপর আসে আরও প্রায় দুই বছরের দুধপান — যে সংখ্যা আয়াত স্পষ্টই বলে দেয়। 46:15 বাকিটুকু পূরণ করে: সে তাকে বহন করেছে কষ্টে, আর প্রসব করেছে কষ্টে।"
          },
          {
            "en": "Notice who the verse foregrounds. Both parents are owed, but only the mother's cost is itemised, because only she paid this particular bill in her body. The Prophet ﷺ matched the emphasis: asked who most deserved his good companionship, he answered your mother, then again your mother, then again your mother, and only then your father — in the hadith agreed upon by al-Bukhari and Muslim.",
            "bn": "লক্ষ করুন, আয়াত কাকে সামনে আনে। প্রাপ্য দুজনেরই, কিন্তু কেবল মায়ের মূল্যটাই খাতভিত্তিক লেখা হয়েছে — কারণ এই বিশেষ বিলটি কেবল তিনিই নিজের শরীরে শোধ করেছেন। নবী ﷺ-ও একই জোর মিলিয়েছেন: কে তাঁর উত্তম সাহচর্যের সবচেয়ে বেশি হকদার — এ প্রশ্নে তিনি উত্তর দেন, তোমার মা; তারপর আবার, তোমার মা; তারপর আবারও, তোমার মা; আর কেবল এরপর, তোমার বাবা — বুখারী ও মুসলিমে একমত হাদীসে।"
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
            "bn": "এরপর আদেশটি নিজে: আন উশকুর লী ওয়া লি-ওয়ালিদাইক — আমার প্রতি এবং তোমার মাতা-পিতার প্রতি কৃতজ্ঞ হও। একটি ক্রিয়াপদই দুটি কর্ম শাসন করে। মুফাসসিরগণ এই বাক্যগঠনের ওজন টেনে বের করেন: মাতা-পিতার প্রতি অকৃতজ্ঞতা বসে আছে আল্লাহর প্রতি অকৃতজ্ঞতার একই বাক্যে। মাতা-পিতা ছিলেন আপনার অস্তিত্বের উপলক্ষ আর অসহায় বছরগুলোর বাহক; দুটিরই পেছনে স্রষ্টা ছিলেন তিনি। দাতাকে ধন্যবাদ দেওয়ার মধ্যে পড়ে সেই হাতগুলোকেও ধন্যবাদ দেওয়া, যে হাত দিয়ে উপহারটি এসেছে।"
          },
          {
            "en": "The verse closes with ilayya al-masir: to Me is the final destination. The clause does two jobs. It sets a deadline — the account of how parents were treated is audited at the return. And it comforts — whatever a child could never repay, and the commentators agree the debt cannot be repaid in full, can still be carried to the One to whom all of them are returning, in the form of du'a.",
            "bn": "আয়াত শেষ হয় ইলাইয়াল মাসীর দিয়ে: আমারই কাছে শেষ গন্তব্য। বাক্যাংশটি দুটি কাজ করে। এটি একটি সময়সীমা বসায় — মাতা-পিতার সঙ্গে আচরণের হিসাব নিরীক্ষা হবে প্রত্যাবর্তনের সময়। আর এটি সান্ত্বনাও দেয় — সন্তান যা কখনোই শোধ করতে পারত না — আর মুফাসসিরগণ একমত, এই ঋণ পুরোপুরি শোধযোগ্য নয় — তা এখনো বহন করে নেওয়া যায় তাঁর কাছে, যাঁর দিকে তারা সবাই ফিরছে: দোয়ার আকারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Limit That Proves the Rule",
          "bn": "যে সীমা নিয়মকে প্রমাণ করে"
        },
        "p": [
          {
            "en": "The next verse, 31:15, supplies the one limit: if the parents strive to make you associate with Allah that of which you have no knowledge, do not obey them — and then, remarkably, accompany them in this world with kindness. Obedience has a ceiling; kindness does not. Even the parent campaigning against a child's faith retains the right to companionship and gentle treatment. Only the sin itself is refused.",
            "bn": "পরের আয়াত, 31:15, একটিমাত্র সীমা জোগায়: মাতা-পিতা যদি চেষ্টা করে তোমাকে দিয়ে আল্লাহর সঙ্গে এমন কিছু শরিক করাতে যার জ্ঞান তোমার নেই, তবে তাদের আনুগত্য কোরো না — আর তারপর, বিস্ময়করভাবে: দুনিয়াতে তাদের সঙ্গে সদ্ভাবে চলো। আনুগত্যের একটি ছাদ আছে; সদাচারের নেই। সন্তানের ঈমানের বিরুদ্ধে অভিযানে নামা বাবা-মাও সাহচর্য ও কোমল আচরণের হক ধরে রাখেন। প্রত্যাখ্যাত হয় কেবল গুনাহটুকুই।"
          },
          {
            "en": "Muslim relates the story behind the similar verse 29:8: when Sa'd ibn Abi Waqqas (RA) accepted Islam, his mother swore she would not eat or drink until he renounced it. He refused — telling her that if she had a hundred souls and they left her one by one, he would not abandon his religion — and revelation confirmed him: no obedience in shirk, while the bond itself stays.",
            "bn": "একই ধরনের আয়াত 29:8-এর পেছনের ঘটনাটি ইমাম মুসলিম বর্ণনা করেন: সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) ইসলাম গ্রহণ করলে তাঁর মা কসম করেন, ছেলে ইসলাম না ছাড়া পর্যন্ত তিনি খাবেন না, পান করবেন না। তিনি অস্বীকৃতি জানান — মাকে বলেন, আপনার যদি একশটি প্রাণ থাকত আর তা একে একে বেরিয়ে যেত, তবুও আমি আমার দ্বীন ছাড়তাম না — আর ওহী তাঁকে সমর্থন করে: শিরকে কোনো আনুগত্য নেই, অথচ বন্ধনটি নিজে থেকে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Gratitude With a Deadline",
          "bn": "সময়সীমা বাঁধা কৃতজ্ঞতা"
        },
        "p": [
          {
            "en": "17:23-24 turns the duty into daily conduct for the season when the roles reverse: when parents reach old age, not even uff — the smallest sound of irritation; no repelling them; noble speech; the lowered wing of humility; and the du'a the Quran itself scripts: my Lord, have mercy on them as they raised me when I was small. The child who was once carried through weakness now carries, and the verse supplies the words for it.",
            "bn": "17:23-24 কর্তব্যটিকে দৈনন্দিন আচরণে পরিণত করে সেই মৌসুমের জন্য, যখন ভূমিকা উল্টে যায়: মাতা-পিতা বার্ধক্যে পৌঁছালে এমনকি উফ-ও নয় — বিরক্তির ক্ষুদ্রতম শব্দটিও নয়; তাদের ধমকে সরিয়ে দেওয়া নয়; সম্মানের কথা; বিনয়ের নত ডানা; আর সেই দোয়া, যার চিত্রনাট্য কুরআন নিজেই লিখে দিয়েছে: হে আমার রব, তাদের প্রতি রহম করুন, যেমন তারা আমাকে শৈশবে লালন করেছেন। যে সন্তানকে একদিন দুর্বলতার ভেতর দিয়ে বহন করা হয়েছিল, সে এখন বহন করে — আর আয়াত তার জন্য শব্দগুলো জুগিয়ে দেয়।"
          },
          {
            "en": "The practice this verse asks for is concrete and current: service while they live, speech that honours, patience with their slowness, and du'a always. Gratitude to parents is the training ground of gratitude to Allah — the first giver a child ever perceives is a parent — and the verse binds the two so that neither can be performed while the other is abandoned. To Him is the destination; they, and we, are on the way there.",
            "bn": "এই আয়াত যে অনুশীলন চায় তা মূর্ত এবং এখনকার: তারা বেঁচে থাকতে সেবা, সম্মান জানানো কথা, তাদের ধীরতায় ধৈর্য, আর সবসময় দোয়া। মাতা-পিতার প্রতি কৃতজ্ঞতাই আল্লাহর প্রতি কৃতজ্ঞতার প্রশিক্ষণক্ষেত্র — শিশু জীবনে প্রথম যে দাতাকে চিনতে পারে, তিনি একজন অভিভাবক — আর আয়াত দুটিকে এমনভাবে বেঁধেছে যে একটিকে ছেড়ে অন্যটি পালন করা যায় না। গন্তব্য তাঁরই কাছে; তারা, আর আমরা — সবাই সেই পথেই আছি।"
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
            "bn": "এই আয়াতগুলো লুকমানের তাঁর সন্তানকে দেওয়া উপদেশের সমাপ্তি — যাঁকে কুরআন 31:12 আয়াতে হিকমতপ্রাপ্ত বলে বর্ণনা করেছে। ধারাটি শুরু হয় 31:13 আয়াতে, যেখানে তিনি শিরককে এক মহা জুলুম বলেন, আর 31:16 পেরিয়ে আসে, যেখানে তিনি শেখান — সরিষার দানার ওজনের কাজও, তা পাথরের ভেতরে হোক বা আসমানে বা যমীনে, আল্লাহ তা হাজির করবেন। সন্তান এখন জানে কার ইবাদত করতে হয় এবং হিসাব থেকে কিছুই ছাড়া পায় না। এরপর যা আসে তা হলো মানুষের সামনে কীভাবে বাঁচতে হয়।"
          },
          {
            "en": "Two verses interrupt the counsel to add a command Luqman could not give himself: 31:14-15 order gratitude and kindness to parents while forbidding obedience to them in shirk. The commentators note the effect of the interruption — the father's authority is real but bounded, and the Author of the counsel is Allah, not Luqman. When the series resumes, it carries that weight: this is wisdom the Quran itself has endorsed and preserved for every parent teaching every child.",
            "bn": "দুটি আয়াত উপদেশের মাঝে ঢুকে এমন এক নির্দেশ যোগ করে, যা লুকমান নিজে দিতে পারতেন না: 31:14-15 মা-বাবার প্রতি কৃতজ্ঞতা ও সদাচরণের হুকুম দেয়, আবার শিরকে তাঁদের আনুগত্য নিষেধ করে। মুফাসসিরগণ এই বিরতির তাৎপর্য লক্ষ করেন — পিতার কর্তৃত্ব বাস্তব, কিন্তু সীমাবদ্ধ; আর উপদেশের প্রকৃত রচয়িতা আল্লাহ, লুকমান নন। ধারাটি যখন আবার শুরু হয়, তা এই ভার বহন করে: এ এমন হিকমত, যা কুরআন নিজেই অনুমোদন করেছে এবং প্রতিটি সন্তানকে শেখানো প্রতিটি অভিভাবকের জন্য সংরক্ষণ করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer, Duty, Patience",
          "bn": "নামায, দায়িত্ব, ধৈর্য"
        },
        "p": [
          {
            "en": "31:17 strings four commands in a deliberate order: establish the prayer, enjoin what is right, forbid what is wrong, and be patient over what befalls you. Prayer comes first because standing rightly before Allah precedes standing usefully among people. And patience is fastened directly to the commanding and forbidding, because the commentators note what experience confirms: whoever calls others to good and away from wrong will be resisted, and the cost was included in the assignment from the start.",
            "bn": "31:17 চারটি নির্দেশকে সুচিন্তিত ক্রমে গাঁথে: নামায কায়েম করো, সৎকাজের আদেশ দাও, অসৎকাজ থেকে নিষেধ করো, আর তোমার উপর যা আপতিত হয় তাতে ধৈর্য ধরো। নামায প্রথমে, কারণ আল্লাহর সামনে সঠিকভাবে দাঁড়ানোই মানুষের মাঝে কার্যকরভাবে দাঁড়ানোর পূর্বশর্ত। আর ধৈর্যকে সরাসরি আদেশ-নিষেধের সাথে বেঁধে দেওয়া হয়েছে, কারণ মুফাসসিরগণ যা বলেন অভিজ্ঞতাও তা-ই নিশ্চিত করে: যে মানুষকে ভালোর দিকে ডাকে ও মন্দ থেকে ফেরায়, সে বাধা পাবেই — আর এই মূল্যটুকু গোড়া থেকেই দায়িত্বের অন্তর্ভুক্ত ছিল।"
          },
          {
            "en": "The verse ends: indeed that is of the matters requiring resolve, 'azm al-umur. The phrase dignifies endurance. Patience here is not passivity but the resolve that keeps a person at their post after the pushback arrives. A father telling his son this is not preparing him for applause; he is preparing him for friction, and teaching him that friction endured for truth is itself a high matter.",
            "bn": "আয়াতটি শেষ হয়: নিশ্চয়ই এটি দৃঢ়সংকল্পের কাজগুলোর অন্তর্গত — 'আযমুল উমূর। বাক্যাংশটি সহনশীলতাকে মর্যাদা দেয়। এখানে ধৈর্য নিষ্ক্রিয়তা নয়, বরং সেই সংকল্প, যা প্রতিরোধ আসার পরও মানুষকে তার দায়িত্বের জায়গায় টিকিয়ে রাখে। যে পিতা সন্তানকে এ কথা বলছেন, তিনি তাকে করতালির জন্য প্রস্তুত করছেন না; প্রস্তুত করছেন ঘর্ষণের জন্য, আর শেখাচ্ছেন — সত্যের জন্য সহ্য করা ঘর্ষণ নিজেই এক উঁচু ব্যাপার।"
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
            "bn": "31:18 শুরু হয়: ওয়া লা তুসা''ইর খাদ্দাকা লিন-নাস — অবজ্ঞাভরে মানুষের দিকে তোমার গাল ফিরিয়ে দিয়ো না। মুফাসসিরদের উদ্ধৃত অভিধানবিদগণ সা'আর শব্দটিকে এমন এক রোগে ফিরিয়ে নেন, যা উটের ঘাড় বাঁকিয়ে দেয়; আয়াতটি তাই অবজ্ঞাকে তার শারীরিক লক্ষণ দিয়ে চিহ্নিত করে: মুখ ঘুরিয়ে রাখা এমন কারও কাছ থেকে, যাকে মুখোমুখি হওয়ার যোগ্যই ভাবা হয়নি। আর যমীনে মারাহান — দম্ভভরা আত্মপ্রদর্শনে — হেঁটো না। আল্লাহ কোনো মুখতাল ফাখূরকে ভালোবাসেন না — মুখতাল ভেতরে অহং বহন করে, ফাখূর তা বাইরে ঢালে গর্ব হয়ে।"
          },
          {
            "en": "The placement is exact. Contempt is the occupational disease of the person who commands right and forbids wrong; standing above someone's error slides easily into standing above the person. So the counsel moves without a seam from courage before people to humility with them. The son is to hold truth firmly and carry his own face, stride and voice modestly — the combination the surah presents as wisdom.",
            "bn": "এই অবস্থান নির্ভুল। অবজ্ঞা হলো তার পেশাগত ব্যাধি, যে সৎকাজের আদেশ দেয় ও অসৎকাজে নিষেধ করে; কারও ভুলের উপরে দাঁড়ানো খুব সহজেই গড়িয়ে যায় খোদ মানুষটির উপরে দাঁড়ানোয়। তাই উপদেশটি কোনো সেলাই ছাড়াই মানুষের সামনে সাহস থেকে মানুষের সাথে বিনয়ে চলে যায়। সন্তানকে সত্য ধরতে হবে শক্ত করে, আর নিজের মুখ, পদক্ষেপ ও কণ্ঠ বইতে হবে বিনম্রভাবে — এই সমন্বয়কেই সূরাটি হিকমত হিসেবে উপস্থাপন করে।"
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
            "bn": "31:19 ইতিবাচক রূপটি দেয়: তোমার চলায় মধ্যপন্থা রাখো এবং তোমার কণ্ঠস্বর নিচু করো। তারপর এমন এক তুলনা, যা তর্ক শেষ করে দেওয়ার জন্যই বাছাই করা: সবচেয়ে কর্কশ আওয়াজ তো গাধার আওয়াজ। মুফাসসিরগণ লক্ষ করেন, আয়াতটি প্রয়োজনের সময় দ্রুত হাঁটা বা জোর দিয়ে কথা বলা নিষেধ করে না; নিষেধ করে দম্ভ — প্রদর্শনী হিসেবে চলার গতি, আধিপত্য হিসেবে আওয়াজের জোর। যে উচ্চস্বর বক্তার উপস্থিতি জাহির করা ছাড়া আর কোনো কাজে আসে না, তাকে গাধার ডাকের সাথে তুলনা করা হয়েছে — আর এই তুলনা যে একবার শোনে, সে ভোলে না।"
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
            "bn": "কুরআন প্রত্যয় ও বিনয়ের এই জোড় বারবার ফিরিয়ে আনে। 17:37 নির্দেশ দেয়: যমীনে দম্ভভরে হেঁটো না, কারণ তুমি কখনো যমীন চিরে ফেলতে পারবে না, উচ্চতায় পাহাড়েও পৌঁছাবে না। 25:63 পরম করুণাময়ের বান্দাদের বর্ণনা করে — তারা যমীনে চলে কোমলভাবে, আর অজ্ঞরা তাদের সম্বোধন করলে তারা বলে শান্তির কথা। আর 3:104 সমাজকে সেই একই দায়িত্ব দেয়, যা লুকমান তাঁর সন্তানকে দিয়েছিলেন: এমন একদল মানুষ, যারা কল্যাণের দিকে ডাকবে, সৎকাজের আদেশ দেবে ও অসৎকাজে নিষেধ করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Sequence",
          "bn": "ক্রমটি যেভাবে যাপন করা যায়"
        },
        "p": [
          {
            "en": "The order of the counsel is usable exactly as given. Anchor the day in prayer before attempting to straighten anyone else. When you do speak for what is right, budget for resistance in advance, so that the first pushback does not read as a sign to stop. And audit the body along with the deeds: who receives your full face and who gets the turned cheek, how you enter a room, how loudly you need to be heard.",
            "bn": "উপদেশের ক্রমটি যেভাবে দেওয়া হয়েছে ঠিক সেভাবেই ব্যবহারযোগ্য। অন্য কাউকে সোজা করতে যাওয়ার আগে দিনটিকে নামাযে নোঙর করুন। যখন ন্যায়ের পক্ষে কথা বলবেনই, তখন প্রতিরোধের বাজেট আগে থেকে ধরে রাখুন, যাতে প্রথম ধাক্কাটিই থেমে যাওয়ার ইশারা মনে না হয়। আর আমলের সাথে সাথে শরীরেরও হিসাব নিন: কে আপনার পূর্ণ মুখ পায় আর কে পায় ফিরিয়ে নেওয়া গাল, আপনি ঘরে ঢোকেন কীভাবে, নিজের কথা শোনাতে আপনার কতটা জোর লাগে।"
          },
          {
            "en": "What makes these verses hard is that they join two things we like to separate: conviction and gentleness. Luqman's son is told to be firm enough to forbid wrong and humble enough to lower his voice — in the same breath. The believer this counsel produces is neither the harsh reformer nor the polite bystander, but a person whose worship, work and very gait say the same thing.",
            "bn": "এই আয়াতগুলো কঠিন এই কারণে যে, আমরা যে দুটি জিনিস আলাদা রাখতে ভালোবাসি — প্রত্যয় আর কোমলতা — এগুলো তাদের জুড়ে দেয়। লুকমানের সন্তানকে বলা হয়েছে অসৎকাজ নিষেধ করার মতো দৃঢ় হতে, আবার কণ্ঠ নামানোর মতো বিনয়ী হতে — একই নিঃশ্বাসে। এই উপদেশ যে মুমিন তৈরি করে, সে রূঢ় সংস্কারকও নয়, ভদ্র দর্শকও নয়; বরং এমন একজন মানুষ, যার ইবাদত, কাজ, এমনকি হাঁটার ভঙ্গিও একই কথা বলে।"
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
          "bn": "মুখটি সমর্পণ করা"
        },
        "p": [
          {
            "en": "Wa man yuslim wajhahu ila Allah. Yuslim is the fourth form of the root of Islam: to hand a thing over. Wajh is the face, and in Arabic the face stands for the whole person and for the direction he is turned. So the picture is of a man handing over his face — his attention, the one part of him he cannot hide behind. The preposition is ila, toward Allah, which makes it a movement rather than a transfer of title.",
            "bn": "ওয়া মান ইউসলিম ওয়াজহাহু ইলাল্লাহ। 'ইউসলিম' হলো ইসলাম শব্দের মূল ধাতুর চতুর্থ গঠন: কোনো কিছু হস্তান্তর করা। 'ওয়াজহ' মানে মুখ, আর আরবিতে মুখ বোঝায় গোটা মানুষটিকে, আবার সে কোন দিকে ফেরা আছে তাও। ফলে ছবিটি এমন একজন মানুষের, যে তার মুখটিই তুলে দিচ্ছে — তার মনোযোগ, তার যে অংশটির পেছনে সে লুকাতে পারে না। অব্যয়টি 'ইলা', অর্থাৎ আল্লাহর দিকে — যা একে মালিকানা বদল নয়, একটি গতিতে পরিণত করে।"
          },
          {
            "en": "Then a clause of state: wa huwa muhsin, while he is a doer of good. Ihsan is not simply a larger quantity of deeds. Muslim records from Umar ibn al-Khattab (RA) that when Jibril (AS) asked about ihsan, the Prophet ﷺ answered: that you worship Allah as though you see Him, for if you do not see Him, He surely sees you. On that definition the second half of the verse describes not what the man does but the awareness he does it under.",
            "bn": "এরপর আসে অবস্থাবাচক বাক্যাংশ: ওয়া হুয়া মুহসিন — এমন অবস্থায় যে সে সৎকর্মশীল। 'ইহসান' কেবল আমলের সংখ্যা বাড়ানো নয়। ইমাম মুসলিম উমর ইবনুল খাত্তাব (রাঃ) থেকে বর্ণনা করেন যে, জিবরীল (আঃ) ইহসান সম্পর্কে জিজ্ঞেস করলে নবী ﷺ উত্তর দেন: তুমি আল্লাহর ইবাদত এমনভাবে করবে যেন তুমি তাঁকে দেখছ; আর যদি তুমি তাঁকে না দেখো, তবে তিনি তো তোমাকে দেখছেনই। এই সংজ্ঞা অনুযায়ী আয়াতের দ্বিতীয় অংশটি বলছে না মানুষটি কী করে, বরং কোন চেতনার নিচে দাঁড়িয়ে সে তা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Words for a Grip",
          "bn": "একটি মুঠির জন্য চারটি শব্দ"
        },
        "p": [
          {
            "en": "Faqadi istamsaka bil-'urwati al-wuthqa is four words. Istamsaka is the tenth form of masaka, to hold; the added letters give the sense of taking hold for oneself, seeking out a firm grip rather than resting a hand on something. 'Urwa is the loop or handle by which a thing is carried — the handle of a jug, the loop a rope passes through. Wuthqa is the feminine superlative from a root meaning firm and trustworthy, the same root that gives mithaq, a binding covenant.",
            "bn": "ফাকাদিসতামসাকা বিল-উরওয়াতিল উসকা — চারটি শব্দ। 'ইসতামসাকা' হলো 'মাসাকা' অর্থাৎ ধরা ক্রিয়ার দশম গঠন; বাড়তি অক্ষরগুলো অর্থ দেয় নিজের জন্য ধরে নেওয়া, শক্ত মুঠি খুঁজে নেওয়া — কোনো কিছুর ওপর কেবল হাত রাখা নয়। 'উরওয়া' মানে সেই কড়া বা হাতল, যা দিয়ে কোনো জিনিস বহন করা হয় — কলসির হাতল, কিংবা যে ফাঁস গলিয়ে দড়ি বাঁধা হয়। 'উসকা' হলো স্ত্রীবাচক সর্বোত্তম রূপ, যার ধাতুর অর্থ দৃঢ় ও নির্ভরযোগ্য — সেই একই ধাতু থেকে আসে 'মীসাক', অর্থাৎ বাঁধা চুক্তি।"
          },
          {
            "en": "Notice which side of the grip is described as strong. A person can hold weakly; hands tire, and everyone's do. But the superlative in the verse is not attached to the holding, it is attached to the handle. What is being promised is not that the believer will grip well. It is that the thing he has taken hold of will not come away in his hand, however ordinary the hand.",
            "bn": "লক্ষ করুন, মুঠির কোন দিকটিকে শক্তিশালী বলা হচ্ছে। মানুষ দুর্বলভাবেও ধরতে পারে; হাত ক্লান্ত হয়, সবারই হয়। কিন্তু আয়াতের সর্বোত্তম রূপটি ধরার সঙ্গে যুক্ত নয়, তা যুক্ত হাতলের সঙ্গে। প্রতিশ্রুতি এই নয় যে মুমিন ভালোভাবে ধরতে পারবে। প্রতিশ্রুতি এই যে, সে যা ধরেছে তা তার হাতের মধ্যে খুলে আসবে না — হাতটি যত সাধারণই হোক।"
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
            "bn": "ঠিক এই আরবি বাক্যাংশটিই রয়েছে 2:256 আয়াতের ভেতরে: যে তাগুতকে অস্বীকার করে ও আল্লাহর প্রতি ঈমান আনে, সে ধরেছে সবচেয়ে মজবুত হাতল, যা ছিঁড়ে যাওয়ার নয়। পার্থক্য শুধু কে ধরছে তাতে। 2:256-এ তাকে চেনানো হয়েছে আকীদা দিয়ে — একটি অস্বীকার ও একটি স্বীকৃতি। আর এখানে তাকে চেনানো হয়েছে একটি কাজ ও তার ধরন দিয়ে — সৎকর্ম করা অবস্থায় মুখ সমর্পণ করা। হাতল একটাই, কিন্তু প্রথম আয়াতে সেখানে পৌঁছানো হয় বিশ্বাস দিয়ে, দ্বিতীয়টিতে আচরণ দিয়ে।"
          },
          {
            "en": "They also close differently. 2:256 adds la infisama laha, no snapping of it, and ends on two names, the Hearing and the Knowing. 31:22 says nothing about the handhold breaking and turns instead to where the road runs: wa ila Allahi 'aqibatu al-umur, and to Allah is the outcome of all matters. One verse secures the rope. The other tells you what is at the far end of it, and it is the same Name in both places.",
            "bn": "দুটি আয়াতের সমাপ্তিও আলাদা। 2:256 যোগ করে 'লা ইনফিসামা লাহা' — তা ছিঁড়বে না; আর শেষ হয় দুটি নাম দিয়ে: সর্বশ্রোতা ও সর্বজ্ঞ। 31:22 হাতল ছেঁড়া নিয়ে কিছুই বলে না, বরং ফিরে যায় পথটি কোথায় গিয়ে শেষ হয় সেদিকে: ওয়া ইলাল্লাহি আকিবাতুল উমূর — আর সব কাজের পরিণাম আল্লাহরই দিকে। একটি আয়াত দড়িটিকে নিশ্চিত করে। অন্যটি বলে দেয় দড়ির অন্য প্রান্তে কে আছেন — আর দুই জায়গাতেই তিনি একই সত্তা।"
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
            "bn": "সৎকর্মশীল অবস্থায় মুখ সমর্পণ করার বর্ণনাটি কুরআনে তিনবার আসে, আর প্রতিবারই তার পরিণাম আলাদা। 2:112 আয়াত তাকে দেয় প্রতিদান: তার প্রতিদান তার প্রতিপালকের কাছে রয়েছে, তাদের কোনো ভয় নেই এবং কোনো দুঃখও নেই। 4:125 আয়াত তাকে দেয় মর্যাদা: দ্বীনে এমন মানুষের চেয়ে উত্তম কে, যে সেই সঙ্গে ইবরাহীম (আঃ)-এর পথও অনুসরণ করে? আর এই আয়াত তাকে দেয় একটি হাতল — পথ চলতে চলতেই ধরে রাখার মতো কিছু।"
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
            "bn": "লুকমানের উপদেশ চলেছিল 31:13 থেকে 31:19 পর্যন্ত, আর এতক্ষণে তা শেষ হয়ে গেছে। 31:20 আয়াত প্রশ্ন করে, তারা কি দেখে না যে আল্লাহ আসমান ও যমীনে যা কিছু আছে সব তাদের অধীন করে দিয়েছেন এবং ঢেলে দিয়েছেন তাঁর প্রকাশ্য ও অপ্রকাশ্য অনুগ্রহ — তবুও কেউ কেউ কোনো জ্ঞান ছাড়াই আল্লাহ সম্পর্কে বিতর্ক করে। এরপর 31:21 আয়াত তাদের কথাই উদ্ধৃত করে: আল্লাহ যা নাযিল করেছেন তা অনুসরণ করতে বলা হলে তারা বলে, তারা বরং তাই অনুসরণ করবে যার ওপর তারা তাদের পিতৃপুরুষদের পেয়েছে।"
          },
          {
            "en": "So the handhold verse arrives directly after a picture of people holding on to something else — an inheritance, gripped because it was gripped before them. And the verse straight after it, 31:23, tells the Prophet ﷺ not to be grieved by anyone's disbelief, since their return is to Allah, who knows what is inside the breasts. The offer of a firm handle is placed between a grip that will not bear weight and a consolation for the one holding it out.",
            "bn": "সুতরাং হাতলের আয়াতটি আসে ঠিক এমন এক ছবির পরে, যেখানে মানুষ অন্য কিছু আঁকড়ে আছে — একটি উত্তরাধিকার, যা ধরা হয়েছে কেবল এ কারণে যে আগেও কেউ তা ধরেছিল। আর ঠিক পরের আয়াত 31:23 নবী ﷺ-কে বলে, কারও কুফরি যেন তাঁকে দুঃখ না দেয়, কারণ তাদের প্রত্যাবর্তন আল্লাহরই কাছে, যিনি বুকের ভেতরে কী আছে তা জানেন। মজবুত হাতলের প্রস্তাবটি বসানো হয়েছে এমন এক মুঠির পাশে যা ওজন সইবে না, আর যিনি হাতলটি বাড়িয়ে ধরছেন তাঁর জন্য একটি সান্ত্বনার পাশে।"
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
            "bn": "মাটি যখন হেলে যায়, হাত তখন আসলে কোন হাতলটির দিকে বাড়ে — একটি বেতন, একজন মানুষ, একটি সুনাম, নাকি একটি পরিকল্পনা? যা-ই হোক, এই আয়াতের দুটি অংশকে একসঙ্গেই থাকতে হবে। ইহসান ছাড়া আত্মসমর্পণ হলো এমন এক দাবি, যার ভেতরে কোনো নিপুণতা নেই; আর আত্মসমর্পণ ছাড়া ইহসান হলো যত্নে করা কাজ, যা নির্দিষ্ট কারও উদ্দেশে নয়। আয়াতটি দুটিকে একটিমাত্র শর্তে বেঁধে দেয়, আর তারপর যাত্রাপথের বর্ণনা দিতে অস্বীকার করে। শুধু বলে কোথায় গিয়ে তা শেষ হয়: সব কাজের পরিণাম আল্লাহরই দিকে।"
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
          "bn": "মাপ সম্পর্কে দুই কথার মাঝখানে"
        },
        "p": [
          {
            "en": "The image does not arrive on its own. At 31:25 the surah asks the Makkans who created the heavens and the earth, and answers for them: they will say Allah. Then 31:26 states that whatever is in the heavens and the earth belongs to Him, and that He is free of all need and worthy of all praise. Only after that come the trees and the sea. And 31:28 follows immediately, saying that your creation and your resurrection are only as that of a single soul.",
            "bn": "ছবিটি একা এসে হাজির হয় না। 31:25 আয়াতে সূরাটি মক্কাবাসীদের জিজ্ঞেস করে, কে আসমানসমূহ ও যমীন সৃষ্টি করেছেন, আর তাদের হয়ে উত্তরও দিয়ে দেয়: তারা বলবে আল্লাহ। এরপর 31:26 বলে, আসমানসমূহে ও যমীনে যা কিছু আছে সবই তাঁর, আর তিনি কারও মুখাপেক্ষী নন এবং সমস্ত প্রশংসার যোগ্য। তার পরেই আসে গাছ ও সমুদ্রের কথা। আর 31:28 আসে ঠিক তার পিছুপিছু: তোমাদের সৃষ্টি ও তোমাদের পুনরুত্থান একটিমাত্র প্রাণের সৃষ্টি ও পুনরুত্থানের মতোই।"
          },
          {
            "en": "So the verse is framed by scale on both sides. Before it, a Lord who owns everything and needs nothing from anyone. After it, a resurrection of every human being who has ever lived, which costs Him no more than raising one. The ink and the pens sit between those two, and they are not decoration. They are the reason the two neighbours are true: a Speaker whose words cannot be exhausted is not a Speaker who can run short of power.",
            "bn": "অর্থাৎ আয়াতটির দুই পাশেই বিশালতার কথা। আগে, এমন এক প্রভু যিনি সবকিছুর মালিক এবং কারও কাছে কিছুর মুখাপেক্ষী নন। পরে, যত মানুষ কখনো বেঁচেছে সবার পুনরুত্থান, যা তাঁর জন্য একজনকে ওঠানোর চেয়ে বেশি কিছু নয়। কালি ও কলম এই দুইয়ের মাঝখানে বসে আছে, আর তা কোনো অলংকার নয়। বরং দুই পাশের কথা দুটি কেন সত্য, এটিই তার কারণ: যাঁর কথা ফুরায় না, তাঁর শক্তিও ফুরানোর নয়।"
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
            "bn": "আরবিটা ধীরে পড়ুন, কারণ এই ছবিটা গুলিয়ে ফেলা খুব সহজ। যমীনের সব গাছ যদি কলম হতো, আর সমুদ্র — ইয়ামুদ্দুহু মিন বা'দিহি সাব'আতু আবহুর — এরপর আরও সাতটি সমুদ্র দিয়ে যোগান পেত, তবুও আল্লাহর কথা ফুরাত না। সাতটিই মোট সংখ্যা নয়। প্রথম সমুদ্র নিঃশেষ হয়ে যাওয়ার পর সেগুলো আসে সাহায্য হিসেবে। ইয়ামুদ্দু ক্রিয়াটি এসেছে মাদাদ শব্দের ধাতু থেকে — যুদ্ধক্ষেত্রে থাকা বাহিনীর কাছে পাঠানো নতুন রসদ।"
          },
          {
            "en": "One more detail the translation has to supply. The word for ink is not in this verse at all; the rendering you will read puts it in brackets, because pens without ink make no sense. And the closing verb is flat rather than hypothetical: ma nafidat, they did not run out. Then two names seal the sentence, al-'Aziz and al-Hakim, Exalted in Might and Wise. Endlessness on its own would be merely large. Endless and wise is a different claim altogether.",
            "bn": "আরও একটি খুঁটিনাটি, যা অনুবাদককে নিজে থেকে জুড়ে দিতে হয়। 'কালি' শব্দটি এই আয়াতে নেই-ই; আপনি যে অনুবাদ পড়বেন সেখানে এটি বন্ধনীর ভেতরে দেওয়া, কারণ কালি ছাড়া কলমের কোনো মানে হয় না। আর শেষ ক্রিয়াপদটি সম্ভাবনার নয়, সরাসরি: মা নাফিদাত — সেগুলো ফুরায়নি। তারপর দুটি নাম বাক্যটিকে সিলমোহর করে দেয়, আল-আযীয ও আল-হাকীম — মহাপরাক্রমশালী ও মহাপ্রজ্ঞাময়। কেবল অফুরন্ত হওয়া মানে কেবল বিশাল হওয়া। অফুরন্ত এবং প্রজ্ঞাময় হওয়া সম্পূর্ণ অন্য কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Other Sea Verse",
          "bn": "সমুদ্র নিয়ে অন্য আয়াতটি"
        },
        "p": [
          {
            "en": "18:109 reaches the same conclusion from the opposite direction, and it is worth seeing how the two differ. There the Prophet ﷺ is told to say it: if the sea were midad, ink, for the words of my Lord, the sea would run out before the words of my Lord ran out, even if We brought the like of it as madad, supplement. Notice that midad and madad come from one root — the ink and the reinforcement are the same word differently vowelled.",
            "bn": "18:109 আয়াত একই সিদ্ধান্তে পৌঁছায় ঠিক উল্টো দিক থেকে, আর দুটির পার্থক্য দেখে নেওয়া দরকার। সেখানে নবী ﷺ-কে বলতে বলা হয়েছে: আমার প্রতিপালকের কথার জন্য সমুদ্র যদি মিদাদ অর্থাৎ কালি হয়ে যেত, তবে আমার প্রতিপালকের কথা ফুরানোর আগেই সমুদ্র ফুরিয়ে যেত, আমি এর মতো আরেকটি মাদাদ অর্থাৎ সহায়ক যোগান নিয়ে এলেও। লক্ষ করুন, মিদাদ ও মাদাদ একই ধাতু থেকে — কালি আর রসদ একই শব্দ, কেবল স্বর আলাদা।"
          },
          {
            "en": "The differences are real ones. 18:109 has one sea and one supplement; 31:27 has every tree as a pen and seven seas in reserve. 18:109 says the sea would be exhausted; 31:27 says the words would not be. One measures what fails, the other measures what does not. Reading them side by side is more useful than treating either as the verse about ink, and it keeps the seven seas of 31:27 from wandering into a verse that never mentions them.",
            "bn": "পার্থক্যগুলো বাস্তব। 18:109 আয়াতে একটি সমুদ্র ও একটি বাড়তি যোগান; 31:27 আয়াতে প্রতিটি গাছ কলম আর সাতটি সমুদ্র রিজার্ভে। 18:109 বলে সমুদ্র নিঃশেষ হয়ে যেত; 31:27 বলে কথা ফুরাত না। একটি মাপে যা ফুরিয়ে যায়, অন্যটি মাপে যা ফুরায় না। দুটিকে পাশাপাশি পড়া যেকোনো একটিকে 'কালির আয়াত' বানিয়ে ফেলার চেয়ে ভালো, আর এতে 31:27 আয়াতের সাত সমুদ্র এমন এক আয়াতে গিয়ে ঢোকে না যেখানে তাদের কথাই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Words of Allah Means",
          "bn": "আল্লাহর কথা বলতে কী বোঝায়"
        },
        "p": [
          {
            "en": "The commentators do not read kalimat Allah as a countable stock of sentences. They take it of His knowledge, His wisdom, His decrees and His speech — everything He has said and everything He could say about a creation that is itself past counting. On that reading the verse is not really about writing materials. It is about the distance between what could ever be recorded and what there is to record.",
            "bn": "মুফাসসিরগণ কালিমাতুল্লাহকে গোনা যায় এমন কতগুলো বাক্যের ভাণ্ডার হিসেবে পড়েন না। তাঁরা এর অর্থ নেন তাঁর জ্ঞান, তাঁর হিকমত, তাঁর ফয়সালা ও তাঁর বাণী — এমন এক সৃষ্টিজগৎ সম্পর্কে তিনি যা বলেছেন এবং যা বলতে পারেন, আর সেই সৃষ্টিজগৎ নিজেই গোনার বাইরে। এভাবে পড়লে আয়াতটি আসলে লেখার সরঞ্জাম নিয়ে নয়। এটি কখনো যতটুকু লিপিবদ্ধ করা সম্ভব আর লিপিবদ্ধ করার মতো যা আছে — এই দুইয়ের দূরত্ব নিয়ে।"
          },
          {
            "en": "The seven, they generally add, is not a ceiling. Arabic uses seven and seventy for abundance rather than for an exact tally, and in any case the argument does not depend on the figure: if seven more seas change nothing, seven hundred change nothing either. That is why the verse never bothers to raise the number. It has already shown that the quantity of ink was never the variable in the sentence.",
            "bn": "সাত সংখ্যাটি কোনো সীমা নয় — এ কথা তাঁরা সাধারণভাবে যোগ করেন। আরবিতে সাত ও সত্তর দিয়ে নির্দিষ্ট গণনা নয়, বরং আধিক্য বোঝানো হয়; আর যুক্তিটি সংখ্যার ওপর নির্ভরও করে না: আরও সাতটি সমুদ্রে যদি কিছু না বদলায়, সাতশোতেও বদলাবে না। এ কারণেই আয়াতটি সংখ্যা বাড়ানোর কষ্টটুকু করে না। কালির পরিমাণ যে এই বাক্যের চলক ছিলই না, তা সে আগেই দেখিয়ে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Student Who Never Graduates",
          "bn": "যে ছাত্রের পড়া কখনো শেষ হয় না"
        },
        "p": [
          {
            "en": "What the verse changes is a reader's posture. The Quran can be finished; its meanings cannot. Anyone who has come back to a familiar verse after a hard year and found in it something that was not there before has met this ayah in practice. It also puts a limit on a particular kind of confidence — the feeling that one has now covered the religion. Whoever says that has measured one sea and forgotten the seven standing behind it.",
            "bn": "আয়াতটি বদলে দেয় পাঠকের ভঙ্গিটাকে। কুরআন শেষ করা যায়; তার অর্থ শেষ করা যায় না। কঠিন একটা বছর পার করে চেনা একটি আয়াতে ফিরে এসে যিনি সেখানে আগে না-থাকা কিছু পেয়েছেন, তিনি এই আয়াতটিকে বাস্তবে পেয়েছেন। এটি একধরনের আত্মবিশ্বাসেরও সীমা টেনে দেয় — এই বোধ যে দ্বীনটা এখন জানা হয়ে গেছে। যিনি এ কথা বলেন, তিনি একটি সমুদ্র মেপেছেন আর তার পেছনে দাঁড়ানো সাতটিকে ভুলে গেছেন।"
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
          "bn": "যেখানে লুকমান শেষ হয়"
        },
        "p": [
          {
            "en": "The verse just before this one, 31:33, warns every person of a Day when no father will help his son and no son his father. Then Luqman seals itself with this list of five. At-Tabari reads the two together: you are told to fear your Lord and to fear that Day because it is surely coming, yet the knowledge of when it comes rests with your Lord, and it will reach you only by surprise. The surah ends not with one more threat but with a map of what you were never given to know.",
            "bn": "ঠিক এর আগের আয়াত, ৩১:৩৩, প্রতিটি মানুষকে সতর্ক করে সেই দিনের ব্যাপারে, যেদিন পিতা সন্তানের কোনো কাজে আসবে না, সন্তানও পিতার নয়। এরপর লুকমান সূরা নিজেকে সিল করে দেয় এই পাঁচটি জিনিসের তালিকা দিয়ে। তাবারী দুটি আয়াত একসঙ্গে পড়েন। আপনাকে বলা হচ্ছে রবকে ভয় করতে, আর সেই দিনকে ভয় করতে, কারণ তা আসবেই। অথচ কখন আসবে সে জ্ঞান রয়েছে কেবল আপনার রবের কাছে, আর তা আসবে হঠাৎ করেই। সূরাটি শেষ হয় আরেকটা হুমকি দিয়ে নয়, বরং যা আপনাকে কখনো জানতে দেওয়া হয়নি তার একটা মানচিত্র দিয়ে।"
          },
          {
            "en": "Across its length Luqman has pointed to signs a person can read: night folding into day, ships carried on the sea, a pen that cannot run out of His words. The closing verse turns to the other side of the line, to what no reading reaches at all. Having shown how much of His order lies open to sight, the surah ends by naming five things shut to it. The same Lord who filled the world with legible signs kept five pages for Himself.",
            "bn": "পুরো সূরা জুড়ে লুকমান এমন নিদর্শনের দিকে আঙুল তুলেছে যা মানুষ পড়তে পারে: রাত গড়িয়ে দিনে ঢুকছে, নৌযান সমুদ্রে ভেসে চলছে, এমন এক কলম যা তাঁর বাণী লিখে কখনো ফুরোবে না। শেষ আয়াতটি ঘুরে দাঁড়ায় সীমানার অন্য পাশে, যেখানে কোনো পড়া পৌঁছায় না। তাঁর ব্যবস্থাপনার কতটা চোখের সামনে খোলা, তা দেখিয়ে দিয়ে সূরাটি শেষ হয় পাঁচটি জিনিসের নাম নিয়ে, যেগুলো সেই চোখের কাছে বন্ধ। এর প্রভাব ভয় ধরিয়ে দেওয়ার নয়, বরং নম্র করে দেওয়ার। যে রব জগৎকে পড়ার মতো নিদর্শনে ভরে দিয়েছেন, তিনিই পাঁচটি পাতা নিজের কাছে রেখে দিয়েছেন।"
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
            "bn": "তাফসীরকারেরা এই পাঁচটিকে বলেন গায়েবের চাবি। মাআরিফুল কুরআন আয়াতটিকে জুড়ে দেয় ৬:৫৯ আয়াতের সঙ্গে, যেখানে আল্লাহ বলছেন গায়েবের চাবি তাঁরই কাছে, তিনি ছাড়া কেউ তা জানে না। আর বইটি বুঝিয়ে দেয়, চাবি বা মিফতাহ হলো যা তালা খোলে। এই পাঁচটি হলো সেই খোলার মুখ, যা দিয়ে লুকানো জ্ঞানের তালা খুলবে। অথচ পাঁচটিই রয়ে গেছে একই হাতে। সৃষ্টির কোনো কিছু এই তালাগুলো ঘোরাতে পারে না। সেই জ্ঞান চুইয়ে পড়ে না কোনো নৈকট্যপ্রাপ্ত ফেরেশতার কাছে, না তার নিচের কোনো জ্ঞানীর কাছে।"
          },
          {
            "en": "At-Tabari records from Mujahid that these very five are the keys of the unseen named in 6:59. Ma'arif al-Qur'an notices why these five, of all unseen things, are singled out: they are exactly what people most itch to know — the end of the world, the coming rain, the child, the fortune of tomorrow, the hour of death — and exactly what astrologers and fortune-tellers claim to deliver. To name them here is a quiet refusal of every such claim.",
            "bn": "তাবারী মুজাহিদ থেকে বর্ণনা করেন যে এই পাঁচটিই হলো ৬:৫৯ আয়াতে উল্লিখিত গায়েবের চাবি। মাআরিফুল কুরআন খেয়াল করিয়ে দেয়, গায়েবের সব জিনিসের মধ্যে এই পাঁচটিকেই আলাদা করে কেন বলা হলো। এগুলোই মানুষ সবচেয়ে বেশি জানতে চায়: দুনিয়ার শেষ, আসছে বৃষ্টি, গর্ভের সন্তান, আগামীকালের ভাগ্য, মৃত্যুর ঘণ্টা। আর এগুলোই জ্যোতিষী আর ভবিষ্যৎ-বক্তারা বলে দেওয়ার দাবি করে। এখানে এগুলোর নাম নেওয়া তাই এমন প্রতিটি দাবিকে চুপচাপ নাকচ করে দেওয়া।"
          },
          {
            "en": "As-Sa'di frames it from the other direction. Allah's knowledge, he says, encompasses the seen and the unseen, the outward and the inward, and He does disclose much of the hidden to His servants. But these five He folded away from every creature: no sent prophet knows them, no angel brought near, let alone anyone below them. The point is not that knowledge is scarce, but that these particular five were sealed on purpose.",
            "bn": "সা'দী বিষয়টা দেখেন উল্টো দিক থেকে। তিনি বলেন, আল্লাহর জ্ঞান ঘিরে রেখেছে দৃশ্য ও অদৃশ্য, বাহির ও ভেতর সবকিছু, আর তিনি বান্দাদের অনেক গায়েবি জিনিস জানিয়েও দেন। কিন্তু এই পাঁচটি তিনি গুটিয়ে রেখেছেন প্রতিটি সৃষ্টির কাছ থেকে। কোনো প্রেরিত নবী এগুলো জানেন না, কোনো নৈকট্যপ্রাপ্ত ফেরেশতাও নয়, তাদের নিচের কারও তো প্রশ্নই আসে না। কথাটা এই নয় যে জ্ঞান কম। কথাটা হলো, এই নির্দিষ্ট পাঁচটি ইচ্ছে করেই সিল করে দেওয়া হয়েছে, আর এই সিল করার হিকমত তাঁরই।"
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
            "bn": "আয়াতটি গড়া হয়েছে দুই অর্ধে। প্রথম তিনটি বলা হয়েছে ইতিবাচকভাবে: কিয়ামতের জ্ঞান তাঁরই কাছে, তিনিই বৃষ্টি নামান, তিনিই জানেন গর্ভে কী আছে। শেষ দুটি বলা হয়েছে সরাসরি অস্বীকারের ভাষায়: কেউ জানে না আগামীকাল সে কী অর্জন করবে, কেউ জানে না কোন মাটিতে সে মরবে। মাআরিফুল কুরআন এই বদলটাকে উদ্দেশ্যমূলক বলে পড়ে। শেষ দুটি মানুষকে সরাসরি ছুঁয়ে যায়, যেখানে কেউ ভেবে বসতে পারে নিজের ভবিষ্যৎ বুঝি হাতের নাগালে। তাই প্রতিটি বন্ধ করা হয়েছে স্পষ্ট একটা না দিয়ে।"
          },
          {
            "en": "The weight sits on two small words. The Hour's knowledge is ʿinda-hu, with Him — the phrase lodges it in His keeping and nobody else's. At-Tabari glosses each clause the same way: the Hour, none knows it but He; the rain, none can send it down but He; the wombs, their contents known to Him alone. The grammar is not decoration; it fences the knowledge inside the divine, with no gate left for a gifted human to slip through.",
            "bn": "ভার চেপে আছে দুটি ছোট্ট শব্দের উপর। কিয়ামতের জ্ঞান ইনদাহু, মানে তাঁরই কাছে। কথাটা জ্ঞানটাকে গচ্ছিত রাখে তাঁর কাছে, আর কারও কাছে নয়। তাবারী প্রতিটি অংশ একইভাবে ব্যাখ্যা করেন: কিয়ামত, তিনি ছাড়া কেউ জানে না; বৃষ্টি, তিনি ছাড়া কেউ নামাতে পারে না; গর্ভ, তার ভেতরের খবর কেবল তিনিই জানেন। এই ব্যাকরণ সাজসজ্জা নয়। এটি জ্ঞানটাকে ঐশী সীমানার ভেতরে বেড়া দিয়ে ঘিরে রাখে, আর সেই বেড়ায় কোনো ফাঁক রাখে না যেখান দিয়ে কোনো প্রতিভাবান মানুষ গলে ঢুকতে পারে।"
          },
          {
            "en": "Then the refrain: mā tadrī nafs, no soul perceives. Ma'arif al-Qur'an dwells on the last clause, where only the place of death is named, not its time. The place, it notes, a person might at least guess from where he lives; the time lies in a future not yet here. If he cannot know even the place, which exists somewhere on earth already, he plainly cannot know the time, which does not. The weaker denial carries the stronger within it.",
            "bn": "তারপর সেই পুনরাবৃত্তি: মা তাদরী নাফস, কোনো প্রাণ জানে না। মাআরিফুল কুরআন থেমে থাকে শেষ অংশে, যেখানে কেবল মৃত্যুর স্থানের কথা আছে, সময়ের নয়। বইটি বলে, স্থান অন্তত এমন কিছু যা মানুষ তার বসবাসের জায়গা দেখে আন্দাজ করতে পারে। আর সময় লুকিয়ে আছে এমন এক ভবিষ্যতে যা এখনো আসেইনি। মানুষ যদি স্থানটুকুও না জানতে পারে, যা পৃথিবীর কোথাও না কোথাও এখনই আছে, তবে সময় যা এখনো নেই তা সে জানবে কী করে। দুর্বল অস্বীকারটি নিজের ভেতরেই শক্ত অস্বীকারটিকে বহন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What The Womb Hides",
          "bn": "গর্ভ যা লুকিয়ে রাখে"
        },
        "p": [
          {
            "en": "Take the third key carefully, because it is the one a modern reader presses on. What is in the wombs, the commentators say, is far more than the body's sex. Ibn Kathir lists it: male or female, wretched or blessed, its colour, its whole making. As-Sa'di adds the picture carried in the hadith tradition: the angel set over the womb asks his Lord whether it is male or female, and then Allah decrees what He wills. The womb's secret, on their reading, is a whole destiny being written, not a single physical fact.",
            "bn": "তৃতীয় চাবিটি সাবধানে ধরুন, কারণ আধুনিক পাঠক এখানেই চাপ দেন। তাফসীরকারেরা বলেন, গর্ভে যা আছে তা শরীরের নারী-পুরুষ হওয়ার চেয়ে অনেক বড়। ইবন কাসীর তালিকা দেন: ছেলে না মেয়ে, হতভাগা না সৌভাগ্যবান, তার গায়ের রং, তার গোটা গড়ন। সা'দী হাদীসের ধারায় চলে আসা ছবিটি যোগ করেন: গর্ভের উপর নিযুক্ত ফেরেশতা রবকে জিজ্ঞেস করেন এটি ছেলে না মেয়ে, এরপর আল্লাহ যা চান তা-ই ফয়সালা করেন। তাঁদের পাঠে গর্ভের গোপন কথা হলো একটা গোটা ভাগ্য লেখা হওয়া, কোনো একটামাত্র শারীরিক তথ্য নয়।"
          },
          {
            "en": "Set beside that, the common objection: a scan now shows a baby's sex, so hasn't the verse been overtaken? Al-Qurtubi, centuries before ultrasound, had already met the shape of this. He granted that long experience may reveal some signs of whether a pregnancy is male or female. But experience, he said, can differ and the usual pattern break; when it does, the knowledge is seen to rest with Allah alone. A reliable reading of present form was never what the verse placed beyond us.",
            "bn": "এর পাশে রাখুন চেনা আপত্তিটি: স্ক্যান তো এখন সন্তানের নারী-পুরুষ দেখিয়ে দেয়, তাহলে আয়াত কি পেছনে পড়ে যায়নি? আলট্রাসাউন্ডের বহু শতাব্দী আগেই কুরতুবী এই আপত্তির আদল ধরে ফেলেছিলেন। তিনি মেনে নেন যে দীর্ঘ অভিজ্ঞতায় গর্ভের সন্তান ছেলে না মেয়ে, সে বিষয়ে কিছু কিছু জানা যেতে পারে। কিন্তু তিনি বলেন, অভিজ্ঞতা এদিক-ওদিক হতে পারে, চেনা নিয়মও ভেঙে যেতে পারে। আর তখন দেখা যায়, জ্ঞানটা থেকে যায় কেবল আল্লাহর কাছেই। বর্তমান গড়নের একটা নিশ্চিত পাঠ কখনোই সেই জিনিস ছিল না যা আয়াত আমাদের নাগালের বাইরে রেখেছে।"
          },
          {
            "en": "Ma'arif al-Qur'an draws the line exactly here. The knowledge withheld, it explains, is the total knowledge that takes in everything created and its every condition; knowledge reached through a physical cause is closer to news than to the unseen. A scan reads a cause already present in the body. It does not read what Allah has decreed, nor the child's blessedness or its end. The verse was never a claim that the sex could not be glimpsed. It was a claim about Who alone holds the whole, and on that reading nothing in it has aged.",
            "bn": "মাআরিফুল কুরআন ঠিক এখানেই রেখাটা টেনে দেয়। বইটি বোঝায়, যে জ্ঞান আটকে রাখা হয়েছে তা হলো সেই পূর্ণ জ্ঞান, যা সৃষ্ট প্রতিটি জিনিস আর তার প্রতিটি অবস্থা ধরে রাখে। আর কোনো বাহ্যিক কারণের মধ্য দিয়ে পাওয়া জ্ঞান আলাদা জিনিস, যা গায়েবের চেয়ে বরং খবরের কাছাকাছি। স্ক্যান শরীরে আগে থেকেই হাজির একটা কারণ পড়ে। তা পড়ে না আল্লাহ কী ফয়সালা করেছেন, না সন্তানের সৌভাগ্য, না তার পরিণতি। আয়াত কখনোই দাবি করেনি যে লিঙ্গটুকু আভাসে ধরা যাবে না। এটি দাবি করেছে, গোটা জিনিসটা কেবল কে ধরে রাখেন তা নিয়ে। সেই পাঠে এর কিছুই পুরোনো হয়ে যায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hadith Of Five",
          "bn": "পাঁচের হাদীস"
        },
        "p": [
          {
            "en": "The verse has a hadith fastened to it. Al-Bukhari records from Ibn ʿUmar that the Messenger of Allah ﷺ said: \"Keys of the unseen are five which nobody knows but Allah: nobody knows what will happen tomorrow; nobody knows what is in the womb; nobody knows what he will gain tomorrow; nobody knows at what place he will die; and nobody knows when it will rain.\" Being in Ṣaḥīḥ al-Bukhari, it belongs to the soundest collection and is graded sahih. The saying simply lays the verse's five out from the Prophet's own mouth.",
            "bn": "আয়াতটির সঙ্গে একটি হাদীস গাঁথা আছে। বুখারী ইবন উমর থেকে বর্ণনা করেন যে রাসূলুল্লাহ ﷺ বলেছেন: \"গায়েবের চাবি পাঁচটি, আল্লাহ ছাড়া কেউ তা জানে না: আগামীকাল কী হবে কেউ জানে না; গর্ভে কী আছে কেউ জানে না; কেউ জানে না আগামীকাল সে কী অর্জন করবে; কেউ জানে না কোন জায়গায় সে মরবে; আর কখন বৃষ্টি হবে তা কেউ জানে না।\" এটি সহীহ বুখারীতে থাকায় সবচেয়ে বিশুদ্ধ সংকলনের অন্তর্ভুক্ত এবং সহীহ হিসেবে গণ্য। হাদীসটি কেবল আয়াতের পাঁচটিকে নবী ﷺ-এর নিজ মুখে সাজিয়ে দেয়।"
          },
          {
            "en": "The same five surface in the famous hadith of Jibril. When he came in the form of a man and asked when the Hour would be, the Prophet ﷺ answered, \"The one asked about it is no more knowing than the one asking,\" and then recited these signs. Ibn Kathir notes that it is recorded by al-Bukhari and by Muslim. The teacher of the religion is set level with its student: even the Messenger ﷺ, taught by revelation, was not handed this.",
            "bn": "একই পাঁচটি ভেসে ওঠে জিবরীলের বিখ্যাত হাদীসে। তিনি মানুষের রূপে এসে যখন জিজ্ঞেস করেন কিয়ামত কবে, নবী ﷺ জবাব দেন, \"যাকে জিজ্ঞেস করা হচ্ছে সে প্রশ্নকারীর চেয়ে বেশি জানে না,\" এরপর তিনি এই নিদর্শনগুলো পড়েন। ইবন কাসীর উল্লেখ করেন যে এটি বর্ণনা করেছেন বুখারী এবং মুসলিম। যিনি দ্বীন শেখাচ্ছেন তাঁকে বসানো হলো যিনি শিখছেন তাঁর সমান স্তরে। এমনকি রাসূল ﷺ, যাঁকে ওহীর মাধ্যমে শেখানো হয়েছে, তাঁকেও এটি দেওয়া হয়নি।"
          },
          {
            "en": "At-Tabari gathers several of these reports. From Ibn Masʿud he records: everything was given to your Prophet ﷺ except the knowledge of these five. The line is striking for what it concedes — the Prophet ﷺ was given vast knowledge of the unseen by revelation — and for the fence it keeps: these five alone were held back. The hadiths do not soften the verse; they underline it, shutting the door on anyone claiming for a human what was withheld from the best of them.",
            "bn": "তাবারী এমন কয়েকটি বর্ণনা একত্র করেন। ইবন মাসউদ থেকে তিনি উদ্ধৃত করেন: তোমাদের নবী ﷺ-কে সবকিছুই দেওয়া হয়েছে, কেবল এই পাঁচটির জ্ঞান ছাড়া। কথাটা চমকে দেওয়ার মতো, কারণ এ যা মেনে নেয়: নবী ﷺ-কে ওহীর মাধ্যমে গায়েবের বিশাল জ্ঞান দেওয়া হয়েছিল। আবার এ যে বেড়াটা রাখে তাও চমকে দেয়: কেবল এই পাঁচটিই আটকে রাখা হলো। হাদীসগুলো আয়াতকে নরম করে না। বরং দাগ টেনে দেয়, আর বন্ধ করে দেয় সেই দরজা, যে কেউ মানুষের জন্য তা দাবি করতে চায় যা তাঁদের সেরা জনকেও দেওয়া হয়নি।"
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
            "bn": "কোনো প্রাণ জানে না আগামীকাল সে কী অর্জন করবে। তাবারী সোজা কথায় ব্যাখ্যা করেন: কোনো জীবিত প্রাণ জানে না আসছে দিনে সে কী করবে, ভালো হোক বা মন্দ। তিনি এ নিয়ে আয়েশা (রাঃ)-এর কড়া কথাটি তুলে ধরেন, যে তোমাকে বলে সে আগামীকালের খবর জানে সে মিথ্যা বলেছে। আর তিনি নিজের দলিল হিসেবে এই অংশটিই পড়ে শোনান। আগামীকাল নিছক দূরত্বের কারণে আমাদের থেকে লুকানো নয়। প্রতিটি প্রাণের জন্য তা কেবল দেওয়াই হয়নি, আর যে এ নিয়ে নিশ্চয়তা বিক্রি করে সে মিথ্যা বিক্রি করে।"
          },
          {
            "en": "Nor does any soul know in what land it will die. Ibn Kathir reads it as the resting place no one is shown — whether on land or at sea, on a plain or in the mountains. He cites a report that when Allah wills to take a servant's soul in a certain land, He gives him some need that draws him there. Al-Qurtubi carries the same sense through Ibn Majah. The place is fixed in the decree and hidden from the very one it waits for.",
            "bn": "আর কোনো প্রাণ জানে না কোন মাটিতে সে মরবে। ইবন কাসীর একে পড়েন সেই শেষ শয্যা হিসেবে যা কাউকে দেখানো হয় না, স্থলে হোক বা সমুদ্রে, সমতলে হোক বা পাহাড়ে। তিনি একটা বর্ণনা উদ্ধৃত করেন যে আল্লাহ যখন কোনো বান্দার প্রাণ কোনো নির্দিষ্ট ভূমিতে নিতে চান, তখন তিনি তাকে এমন কোনো প্রয়োজন দিয়ে দেন যা তাকে সেদিকে টেনে নেয়। কুরতুবী ইবন মাজাহর সূত্রে একই অর্থ বহন করেন। স্থানটি ফয়সালায় পাকা করা, অথচ যার জন্য তা অপেক্ষা করছে তার কাছেই লুকানো।"
          },
          {
            "en": "Qatadah, cited by both at-Tabari and Ibn Kathir, ties the list together: these are matters Allah kept for Himself, disclosed to no angel brought near and no sent prophet. No one knows the year or the month of the Hour, or whether it comes by night or by day; no one knows the hour the rain will fall. The verse binds the farthest thing, the end of the world, to the nearest, your own last breath, and sets them both in one sealed hand.",
            "bn": "কাতাদা, তাবারী ও ইবন কাসীর দুজনেই যাঁকে উদ্ধৃত করেন, তালিকাটিকে একসুতোয় বাঁধেন: এগুলো এমন বিষয় যা আল্লাহ নিজের জন্য রেখে দিয়েছেন, কোনো নৈকট্যপ্রাপ্ত ফেরেশতা বা প্রেরিত নবীকেও জানাননি। কেউ জানে না কিয়ামতের বছর বা মাস, রাতে আসবে না দিনে তাও নয়। কেউ জানে না কখন বৃষ্টি নামবে। আয়াত সবচেয়ে দূরের জিনিসটাকে, দুনিয়ার শেষ, বেঁধে দেয় সবচেয়ে কাছের জিনিসের সঙ্গে, আপনার নিজের শেষ নিঃশ্বাস, আর দুটিকেই রাখে একই সিল-করা হাতে।"
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
            "bn": "কুরতুবী এর বাস্তব ধারটা বের করে আনেন। তিনি ইবন আব্বাস থেকে বর্ণনা করেন: এই পাঁচটি আল্লাহ ছাড়া কেউ জানে না, কোনো নৈকট্যপ্রাপ্ত ফেরেশতাও নয়, কোনো প্রেরিত নবীও নয়। আর যে এগুলোর কোনোটা জানার দাবি করে সে কুরআনকে অস্বীকার করল, কারণ সে কুরআনের বিরুদ্ধে গেল। তবে ইবন আব্বাস যোগ করেন, নবীরা গায়েবের অনেক কিছুই জানেন, যখন আল্লাহ তাঁদের জানান। আয়াতের লক্ষ্য হলো গণক, জ্যোতিষী, আর সেই লোক যে তারা দেখে বৃষ্টি নামানোর দাবি করে।"
          },
          {
            "en": "Ma'arif al-Qur'an answers the obvious question: what of the saint whose foretelling came true, or the astrologer who now and then hits the mark? Neither breaches the verse. The knowledge it reserves is knowledge without any medium, whole and absolute; what reaches a servant by inspiration is partial and fallible, and what an astrologer offers, it notes, scarcely yields one truth in ten lies. A lucky fragment is not the knowledge of the unseen. The whole of it stays where the verse puts it.",
            "bn": "মাআরিফুল কুরআন সহজ প্রশ্নটির জবাব দেয়: যে ওলির ভবিষ্যদ্বাণী সত্য হয়ে গেল, বা যে জ্যোতিষী মাঝেমধ্যে লক্ষ্যে লাগিয়ে ফেলে, তাদের বেলায় কী? কেউই আয়াত ভাঙে না। আয়াত যে জ্ঞান নিজের জন্য রাখে তা কোনো মাধ্যম ছাড়া, পূর্ণ ও চূড়ান্ত জ্ঞান। আর যা ইলহামের মাধ্যমে বান্দার কাছে পৌঁছায় তা আংশিক ও ভুলের সম্ভাবনাভরা। বইটি বলে, জ্যোতিষী যা দেয় তা দশটি মিথ্যায় একটি সত্যও সবে ছোঁয়। ভাগ্যক্রমে মিলে যাওয়া টুকরো গায়েবের জ্ঞান নয়। গোটা জিনিসটা থেকে যায় আয়াত যেখানে রাখে ঠিক সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Living The Not-Knowing",
          "bn": "না-জানাকে নিয়ে বাঁচা"
        },
        "p": [
          {
            "en": "As-Sa'di ends his comment on a note worth keeping. Of His complete wisdom, he says, Allah hid the knowledge of these five from His servants, for in the hiding lie benefits plain to anyone who reflects. A person who knew the day of his death would despair or stall; another who knew tomorrow's gain would stop trusting and gamble. Not knowing keeps the heart working — hoping, fearing, depending — in a way that certainty would quietly kill.",
            "bn": "সা'দী নিজের আলোচনা শেষ করেন এমন একটা কথায় যা ধরে রাখার মতো। তিনি বলেন, তাঁর পূর্ণ হিকমতে আল্লাহ এই পাঁচটির জ্ঞান বান্দাদের কাছ থেকে লুকিয়ে রেখেছেন, কারণ এই লুকিয়ে রাখার মধ্যে এমন কল্যাণ আছে যা চিন্তাশীল যে কারও কাছে স্পষ্ট। একটু ভাবুন। যে মানুষ নিজের মৃত্যুর দিন জানত, সে হয় হতাশ হয়ে পড়ত, নয়তো গড়িমসি করত। যে আগামীকালের লাভ জানত, সে ভরসা ছেড়ে জুয়া ধরত। না-জানা হৃদয়কে সচল রাখে, আশায়, ভয়ে, নির্ভরতায়, যেভাবে নিশ্চয়তা তা চুপচাপ মেরে ফেলত।"
          },
          {
            "en": "That is why the list follows the warning of 31:33 so closely. A verse earlier, mankind was told not to let the worldly life delude it, nor the Deceiver deceive it about Allah. Delusion feeds on a felt certainty about tomorrow, the quiet assumption that there will be time. These five unknowns starve it. You cannot safely bank on a day you were never promised, in a place you were never shown, for an earning you cannot foresee. The surah closes by handing the reader, in place of knowledge, the humility to live without it.",
            "bn": "এ কারণেই তালিকাটি ৩১:৩৩ আয়াতের সতর্কবাণীর এত কাছ ঘেঁষে আসে। এক আয়াত আগে মানুষকে বলা হয়েছিল, পার্থিব জীবন যেন তাকে ধোঁকায় না ফেলে, আর প্রধান প্রতারক যেন তাকে আল্লাহ সম্পর্কে না ভোলায়। ধোঁকা বেঁচে থাকে আগামীকাল নিয়ে একটা অনুভূত নিশ্চয়তায়, এই চুপচাপ ধরে নেওয়ায় যে সময় থাকবেই। এই পাঁচটি না-জানা সেই ধোঁকাকে অনাহারে রাখে। যে দিনের কথা আপনাকে কখনো দেওয়া হয়নি, যে জায়গা আপনাকে কখনো দেখানো হয়নি, যে অর্জন আপনি আগেভাগে দেখতে পান না, তার উপর নিশ্চিন্তে ভরসা করা যায় না। সূরাটি শেষ হয় পাঠকের হাতে জ্ঞানের বদলে তুলে দিয়ে সেই নম্রতা, যা দিয়ে জ্ঞান ছাড়াই বেঁচে থাকা যায়।"
          }
        ]
      }
    ]
  }
});
