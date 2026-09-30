/**
 * Tadabbur long-form articles — surah 24.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "24:2": {
    "sections": [
      {
        "h": {
          "en": "A Law, Not a License",
          "bn": "আইন, কারও হাতে নয়"
        },
        "p": [
          {
            "en": "The Qur'an opens this sūrah by calling it a chapter We have sent down and made obligatory (24:1), and its first command is this fixed penalty for zinā, unlawful intercourse. Al-Qurtubi is emphatic on one point that removes most of the danger people fear: there is no disagreement that the one addressed by this command is the ruling authority and whoever stands in his place. Ordinary Muslims are charged with wanting the law upheld, but the state carries it out, because they cannot assemble to enforce a ḥadd themselves.",
            "bn": "কুরআন এই সূরাহ শুরু করে একে এমন একটি অধ্যায় বলে যা তিনি নাযিল করেছেন ও ফরয করে দিয়েছেন (২৪:১), আর এর প্রথম হুকুমই যিনার, অর্থাৎ অবৈধ যৌনসম্পর্কের, এই নির্দিষ্ট শাস্তি। কুরতুবী একটি বিষয়ে খুব জোর দেন, যা মানুষের বেশির ভাগ ভয় দূর করে দেয়: এ হুকুমের সম্বোধন যে শাসনকর্তা ও তাঁর প্রতিনিধির উদ্দেশে, তাতে কোনো মতভেদ নেই। সাধারণ মুসলিমের দায়িত্ব আইনটি প্রতিষ্ঠিত দেখতে চাওয়া, কিন্তু কার্যকর করে রাষ্ট্র, কারণ হদ প্রয়োগ করতে তারা নিজেরা জড়ো হতে পারে না।"
          },
          {
            "en": "That single ruling settles what the verse does not do. It hands nothing to a family, a crowd, a neighbour, or a self-appointed guardian of virtue. Al-Qurtubi adds that a ḥadd is carried out only before the judges, by upright people the ruler selects, because, in his words, the blood and honour of a Muslim are grave and must be safeguarded by every means. So this verse describes a judicial ordinance and licenses nothing against any living person or community: no vigilante punishment, no honour violence, no private hand raised in God's name.",
            "bn": "এই একটি কথাই ঠিক করে দেয় আয়াত কী করে না। এটি কোনো পরিবার, জনতা, প্রতিবেশী বা স্বঘোষিত নীতি-রক্ষকের হাতে কিছুই তুলে দেয় না। কুরতুবী আরও বলেন, হদ কার্যকর হয় কেবল বিচারকের সামনে, শাসক বেছে নেন এমন সৎ মানুষের হাতে, কারণ তাঁর ভাষায় মুসলিমের রক্ত ও সম্মান অতি গুরুতর, যা সম্ভব সব উপায়ে রক্ষা করা চাই। তাই এই আয়াত একটি বিচারিক বিধানের বর্ণনা দেয়, আর কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না: কোনো নিজ-হাতে শাস্তি নয়, সম্মানের নামে সহিংসতা নয়, আল্লাহর নামে ব্যক্তিগত হাত ওঠানো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wall of Four Witnesses",
          "bn": "চার সাক্ষীর দেয়াল"
        },
        "p": [
          {
            "en": "Now weigh what the sharīʿa demands before this penalty can ever touch a person. Ma'arif al-Qur'an notes that in ordinary claims the testimony of two witnesses settles a matter, but for the ḥadd of zinā the law requires four upright male eyewitnesses to the act itself, testifying without the slightest doubt or confusion. Al-Qurtubi's very definition of the crime excludes any act carried out under the semblance of a lawful marriage, and the jurists hold that where doubt enters, the ḥadd falls away.",
            "bn": "এবার দেখুন, এই শাস্তি কোনো মানুষকে ছোঁয়ার আগে শরিয়ত কী দাবি করে। মাআরিফুল কুরআন বলে, সাধারণ দাবিতে দুজন সাক্ষীর সাক্ষ্যে বিষয় মীমাংসা হয়, কিন্তু যিনার হদের জন্য আইন চায় ঘটনার সরাসরি চারজন সৎ পুরুষ সাক্ষী, যাঁরা সামান্যতম সন্দেহ বা গোলমাল ছাড়া সাক্ষ্য দেবেন। কুরতুবীর দেওয়া অপরাধের সংজ্ঞাই বৈধ বিবাহের আভাসে ঘটা যেকোনো কাজকে বাদ দিয়ে দেয়, আর ফকিহগণ বলেন, যেখানে সন্দেহ ঢোকে সেখানে হদ খসে পড়ে।"
          },
          {
            "en": "Then comes the turn that reveals the passage's real aim. The next verse commands that those who accuse chaste people and then fail to produce four witnesses be flogged with eighty lashes, their testimony refused ever after (24:4). Ma'arif draws the consequence plainly: a witness whose account is rejected can himself be charged with false accusation, so no one will dare testify where the smallest uncertainty remains. The law is built to make accusation almost impossible, not to hunt the guilty.",
            "bn": "এরপর আসে সেই মোড়, যা গোটা অংশের আসল লক্ষ্য খুলে দেয়। পরের আয়াত হুকুম দেয়, যারা সতী-সাধ্বী মানুষের নামে অপবাদ দেয় অথচ চারজন সাক্ষী হাজির করতে পারে না, তাদের আশিটি বেত্রাঘাত কর, আর তাদের সাক্ষ্য আর কক্ষনো গ্রহণ কোরো না (২৪:৪)। মাআরিফুল কুরআন সোজা করে ফলটা টানে: যে সাক্ষীর বক্তব্য খারিজ হয়, তার বিরুদ্ধেই মিথ্যা অপবাদের অভিযোগ আসতে পারে। তাই সামান্যতম সংশয় থাকলে একজনও সাক্ষী দিতে সাহস পাবে না। আইনটা গড়া হয়েছে অভিযোগকে প্রায় অসম্ভব করতে, অপরাধী খুঁজে বেড়াতে নয়।"
          },
          {
            "en": "So the thrust of these opening verses is protection: of chastity on one side and of reputation on the other. The false accuser is not left without hope either, for the very next passage exempts those who repent afterward and make amends (24:5). Read together, the verses raise the cost of a careless tongue as high as the cost of the sin itself. Guarding a person's good name, they say, is not softness; it is obedience.",
            "bn": "তাই এই সূচনা-আয়াতগুলোর ঝোঁক রক্ষার দিকে: একদিকে সতীত্ব, অন্যদিকে সুনাম। মিথ্যা অপবাদদাতাও আশাহীন থাকে না, কারণ ঠিক পরের অংশ তাদের রেহাই দেয় যারা এরপর তওবা করে ও নিজেকে শুধরে নেয় (২৪:৫)। একসঙ্গে পড়লে আয়াতগুলো একটা বেপরোয়া জিভের মূল্য গুনাহটার মূল্যের সমান উঁচুতে তুলে দেয়। কারও সুনাম আগলে রাখা, তারা বলছে, দুর্বলতা নয়, এ এক ইবাদত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hundred for the Unwed",
          "bn": "অবিবাহিতের জন্য একশ"
        },
        "p": [
          {
            "en": "The penalty named is a hundred lashes for each, and the commentators specify whom it addresses: the free, adult, sane person who is unmarried. Al-Baghawi explains that jald means to strike the skin, and that the word itself signals restraint, for the blow must not cut down to the flesh. Al-Qurtubi records a whip brought to the Prophet ﷺ, neither so new that it was harsh nor so worn that it was soft, but a whip midway between the harsh and the soft. Even the instrument was measured.",
            "bn": "যে শাস্তি বলা হয়েছে তা প্রত্যেকের জন্য একশ বেত্রাঘাত, আর তাফসীরকারেরা স্পষ্ট করেন এটি কার উদ্দেশে: স্বাধীন, প্রাপ্তবয়স্ক, সুস্থমস্তিষ্ক অবিবাহিত মানুষ। বাগভী বলেন, জালদ মানে চামড়ায় আঘাত করা, আর শব্দটি নিজেই সংযমের ইঙ্গিত দেয়, কারণ আঘাত যেন গোশত পর্যন্ত কেটে না বসে। কুরতুবী নবী ﷺ-এর কাছে আনা এক চাবুকের কথা তুলে ধরেন, যা এত নতুন নয় যে কঠোর, আবার এত পুরনোও নয় যে নরম, বরং কঠোর ও নরমের মাঝামাঝি একটি চাবুক। যন্ত্রটুকুও মাপা ছিল।"
          },
          {
            "en": "This hundred-lash penalty, the commentators are careful to say, concerns the unmarried. On the married they report a separate discussion, and this article only reports it. As-Sa'di and Ibn Kathir hold, on what they call the established Sunnah, that the married offender's ḥadd is stoning; Ibn Kathir cites the address of ʿUmar and a narration through ʿUbādah ibn aṣ-Ṣāmit. Al-Qurtubi records that the majority read this verse as specific to the unmarried, while Isḥāq ibn Rāhawayh and al-Ḥasan combined flogging with stoning. Their dispute is theirs; the verse before us fixes the hundred lashes.",
            "bn": "তাফসীরকারেরা সতর্কভাবে বলেন, এই একশ বেত্রাঘাতের শাস্তি অবিবাহিতের বেলায়। বিবাহিতদের নিয়ে তাঁরা আলাদা এক আলোচনার কথা জানান, আর এই লেখা কেবল সেটুকু জানায়। সা'দী ও ইবন কাসীর প্রতিষ্ঠিত সুন্নাহর ভিত্তিতে মনে করেন, বিবাহিত অপরাধীর হদ রজম। ইবন কাসীর উমর (রাঃ)-এর ভাষণ ও উবাদা ইবন সামিত (রাঃ)-এর সূত্রে বর্ণনা উদ্ধৃত করেন। কুরতুবী জানান, অধিকাংশ আলিম এ আয়াতকে অবিবাহিতের জন্য নির্দিষ্ট পড়েন, আর ইসহাক ইবন রাহওয়াইহ ও হাসান বেত্রাঘাতের সঙ্গে রজম যুক্ত করেছেন। তাঁদের মতভেদ তাঁদেরই। আমাদের সামনের আয়াত একশ বেত্রাঘাত বেঁধে দেয়।"
          },
          {
            "en": "Ma'arif sets the ruling in its sequence. The earliest directive, in Sūrat an-Nisā', confined such women to their homes and left the harm to both undefined (4:15 and 4:16), a stage the Qur'an itself marked as provisional. Al-Qurtubi records the agreement that the present verse abrogates those earlier verses of confinement and harm. Ibn ʿAbbās, cited by Ma'arif, understood this sūrah to be the promised way forward. The law arrived by stages, and this verse is where the fixed number is set down.",
            "bn": "মাআরিফুল কুরআন হুকুমটিকে তার ধারাবাহিকতায় বসায়। সবচেয়ে আগের নির্দেশ ছিল সূরা নিসায়, যা এমন নারীদের ঘরে আটকে রাখতে বলে আর দুজনের জন্য কষ্ট দেওয়ার কথা অস্পষ্ট রেখে দেয় (৪:১৫ ও ৪:১৬), কুরআন নিজেই যাকে সাময়িক বলে চিহ্নিত করেছিল। কুরতুবী সেই ঐকমত্য তুলে ধরেন যে, বর্তমান আয়াত আটকে রাখা ও কষ্ট দেওয়ার আগের আয়াতগুলোকে রহিত করে। মাআরিফুল কুরআনের উদ্ধৃত ইবন আব্বাস (রাঃ) এ সূরাকেই প্রতিশ্রুত পথ বলে বুঝেছেন। আইন এসেছে ধাপে ধাপে, আর নির্দিষ্ট সংখ্যা এই আয়াতেই বসানো হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pity That Suspends Justice",
          "bn": "যে দয়া বিচার থামায়"
        },
        "p": [
          {
            "en": "The words wa-lā ta'khudhkum bihimā ra'fah, let no pity for the two seize you in the religion of Allah, are the most easily misread in the verse, so the commentators are exact. At-Tabari records that they divided here. Most, including Mujahid and ʿAṭā', take it to forbid abandoning the ḥadd once guilt is established; another group, al-Ḥasan and Saʿīd ibn al-Musayyab, take it to forbid softening the blows. At-Tabari prefers the first reading, since the phrase in the religion of Allah points to the duty of carrying out what He commanded.",
            "bn": "'ওয়ালা তা'খুযকুম বিহিমা রা'ফাহ', অর্থাৎ আল্লাহর দ্বীনের ব্যাপারে ওদের প্রতি দয়া যেন তোমাদের পেয়ে না বসে, এ কথাটাই আয়াতে সবচেয়ে সহজে ভুল বোঝা যায়, তাই তাফসীরকারেরা নিখুঁত থাকেন। তাবারী জানান, এখানে তাঁরা দুই ভাগ হয়েছেন। মুজাহিদ ও আতা সহ অধিকাংশের মতে, দোষ প্রমাণিত হওয়ার পর হদ ছেড়ে দেওয়া নিষেধ। আরেক দল, হাসান ও সাঈদ ইবনুল মুসায়্যিব, মনে করেন এটি আঘাত হালকা করা থেকে বারণ। তাবারী প্রথম পাঠটিকেই অগ্রাধিকার দেন, কারণ 'আল্লাহর দ্বীনে' কথাটি তিনি যা হুকুম দিয়েছেন তা কার্যকর করার কর্তব্যের দিকে ইশারা করে।"
          },
          {
            "en": "Ibn Kathir closes the door on the cruel misreading. The pity forbidden here, he explains through Mujahid, is only the pity that would make a judge drop a punishment the law requires once the case has reached the authority. It is not a command against tenderness of heart. Feeling pity while carrying out a sentence, Ibn Kathir says, is natural and not forbidden; when a Companion admitted he felt pity even slaughtering a sheep, the Prophet ﷺ told him he would be rewarded for it.",
            "bn": "নিষ্ঠুর ভুল-পাঠের দরজাটা ইবন কাসীর বন্ধ করে দেন। এখানে যে দয়া নিষেধ, মুজাহিদের সূত্রে তিনি বলেন, তা কেবল সেই দয়া যা বিচারককে দিয়ে আইনের দাবি করা শাস্তি ছাড়িয়ে দেয়, বিষয়টি একবার কর্তৃপক্ষের কাছে পৌঁছে গেলে। এটি হৃদয়ের কোমলতার বিরুদ্ধে কোনো হুকুম নয়। শাস্তি কার্যকর করার সময় দয়া অনুভব করা, ইবন কাসীর বলেন, স্বাভাবিক এবং নিষিদ্ধ নয়। এক সাহাবি যখন বললেন একটা ভেড়া জবাই করতেও তাঁর মায়া হয়, নবী ﷺ তাঁকে বললেন এতেও তাঁর প্রতিদান আছে।"
          },
          {
            "en": "Al-Baghawi makes the same distinction from another angle: pity is a motion of the heart, and it is not what the verse forbids, because it does not come by a person's choice. What is forbidden is letting that feeling suspend God's command. As-Sa'di turns it further still: real mercy toward the offender is that the ḥadd be carried out for him, so that his account is settled here. Mercy pervades the religion; this clause guards one narrow gate, the judge's, against sentiment overturning a verdict already proven.",
            "bn": "বাগভী একই পার্থক্য আঁকেন আরেক দিক থেকে: দয়া হলো হৃদয়ের একটা নড়াচড়া, আর আয়াত সেটিকে নিষেধ করে না, কারণ তা মানুষের ইচ্ছায় আসে না। নিষেধ হলো সেই অনুভূতিকে আল্লাহর হুকুম থামাতে দেওয়া। সা'দী একে আরও এগিয়ে নেন: অপরাধীর প্রতি আসল রহমত হলো তার উপর হদ কার্যকর হওয়া, যাতে তার হিসাব এখানেই চুকে যায়। রহমত গোটা দ্বীন জুড়ে ছড়ানো। এই খণ্ডবাক্য কেবল একটি সরু দরজা, বিচারকের দরজা, পাহারা দেয়, যেন প্রমাণিত রায়কে আবেগ উল্টে দিতে না পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "In the Law of Allah",
          "bn": "আল্লাহর বিধানের ভেতরে"
        },
        "p": [
          {
            "en": "Two clauses anchor the command. In the religion of Allah, at-Tabari and al-Qurtubi explain, means in the ruling of Allah — dīn here carries the sense of judgement and law, as in another verse where dīn al-malik means the king's law. The penalty is not a private grievance settled between people; it is a matter of God's own judgement, which is why no one may bend it downward out of favour or upward out of anger.",
            "bn": "দুটি খণ্ডবাক্য হুকুমটিকে ভিত দেয়। 'আল্লাহর দ্বীনে' কথাটির অর্থ, তাবারী ও কুরতুবী বলেন, আল্লাহর বিধানে। এখানে 'দ্বীন' বহন করে বিচার ও আইনের অর্থ, যেমন আরেক আয়াতে 'দ্বীনুল মালিক' মানে বাদশাহর আইন। এই শাস্তি মানুষে মানুষে মিটিয়ে নেওয়া ব্যক্তিগত অভিযোগ নয়। এ আল্লাহর নিজের বিচারের বিষয়, তাই একজনও একে পক্ষপাতে নিচু করতে বা রাগে উঁচু করতে পারে না।"
          },
          {
            "en": "The verse then binds obedience to faith: if you should believe in Allah and the Last Day. At-Tabari reads this as encouragement and steadying — whoever truly believes in the reckoning will not defy God's command out of fear of His punishment. Al-Qurtubi hears it as a spur, the way you tell someone, if you are a man, then do this. The clause does not threaten the accused; it addresses the believing community, tying its nerve to carry out justice to its certainty about the Day it will answer for everything.",
            "bn": "এরপর আয়াত আনুগত্যকে ঈমানের সঙ্গে বেঁধে দেয়: 'যদি তোমরা আল্লাহ ও শেষ দিনে বিশ্বাস করে থাক।' তাবারী একে পড়েন উৎসাহ ও দৃঢ় করার কথা হিসেবে। যে সত্যিই হিসাবের দিনে বিশ্বাস করে, সে শাস্তির ভয়ে আল্লাহর হুকুম অমান্য করবে না। কুরতুবী শোনেন এক তাগিদ, যেভাবে কাউকে বলা হয়, তুমি যদি পুরুষ হও তবে এটা করো। খণ্ডবাক্যটি অভিযুক্তকে ভয় দেখায় না। এটি মু'মিন সমাজকে সম্বোধন করে, ন্যায় কায়েমের সাহসকে বেঁধে দেয় সেই দিনের নিশ্চয়তার সঙ্গে, যেদিন তাকে সবকিছুর জবাব দিতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Group Must Witness",
          "bn": "একদল যেন সাক্ষী থাকে"
        },
        "p": [
          {
            "en": "And let a group of the believers witness their punishment. At-Tabari and al-Qurtubi gather the readings of how many make a group. Some read it as few as one rising to a thousand, from Mujahid and Ibn ʿAbbās; others as two, from ʿAṭā' and ʿIkrimah; others as three, from az-Zuhrī and Qatādah; and Mālik with others as four, by analogy to the witnesses required for zinā itself.",
            "bn": "'আর একদল মু'মিন যেন তাদের শাস্তি প্রত্যক্ষ করে।' একদল বলতে কতজন, তার পাঠগুলো তাবারী ও কুরতুবী একত্র করেন। কেউ পড়েন মাত্র একজন থেকে হাজার পর্যন্ত, মুজাহিদ ও ইবন আব্বাস (রাঃ)-এর সূত্রে। কেউ দুই, আতা ও ইকরিমার সূত্রে। কেউ তিনজন, যুহরী ও কাতাদার সূত্রে। আর মালিক প্রমুখ বলেন চারজন, যিনার জন্য প্রয়োজনীয় সাক্ষীর সংখ্যার সঙ্গে মিলিয়ে।"
          },
          {
            "en": "Why the public gathering? Al-Qurtubi records two purposes the scholars weighed. One is disgrace and deterrence: carrying out the ḥadd before people so that the offender and the onlookers take warning, the news spreads, and others are restrained. The other is gentler, that those present pray for the two, for their repentance and mercy. Even the harshest scene in the sūrah, the commentators leave open to a reading of concern rather than mere spectacle.",
            "bn": "প্রকাশ্য জমায়েত কেন? কুরতুবী আলিমদের বিবেচিত দুটি উদ্দেশ্য তুলে ধরেন। একটি হলো অপমান ও প্রতিরোধ: মানুষের সামনে হদ কার্যকর করা, যাতে অপরাধী ও দর্শক শিক্ষা নেয়, খবর ছড়ায়, আর অন্যরা সংযত হয়। অন্যটি আরও কোমল, যেন উপস্থিত মানুষ ওদের দুজনের জন্য দোয়া করে, তাদের তওবা ও রহমতের জন্য। সূরার সবচেয়ে কঠিন দৃশ্যটিকেও তাফসীরকারেরা নিছক তামাশা নয়, বরং সহমর্মিতার এক পাঠের জন্য খোলা রাখেন।"
          },
          {
            "en": "As-Sa'di adds a quieter reason: seeing a ruling actually carried out fixes it in people's understanding, so that it is neither added to nor cut short. Read with everything before it, the witnessing requirement is not a taste for punishment. It is the same instinct that set the evidentiary bar so high: the community sees justice done in the open, under law, by the authority, and no one carries a private sentence home to execute in the dark.",
            "bn": "সা'দী একটা শান্ত কারণ যোগ করেন: কোনো বিধান সত্যিই কার্যকর হতে দেখলে তা মানুষের বোঝায় গেঁথে যায়, ফলে তাতে না বাড়ানো হয় না কমানো হয়। আগের সব কথার সঙ্গে পড়লে এই সাক্ষী-থাকার শর্ত শাস্তির প্রতি কোনো আগ্রহ নয়। এ সেই একই তাগিদ যা প্রমাণের মানদণ্ডকে এত উঁচুতে বেঁধেছিল। সমাজ ন্যায়বিচার হতে দেখে খোলাখুলি, আইনের অধীনে, কর্তৃপক্ষের হাতে, আর কেউ ব্যক্তিগত রায় ঘরে নিয়ে গিয়ে অন্ধকারে কার্যকর করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The One Who Feared Him",
          "bn": "যে আল্লাহকে ভয় করল"
        },
        "p": [
          {
            "en": "The passage prescribes a penalty, but the Qur'an's deeper aim is the heart that never earns it. For a sound word from the Prophet ﷺ on exactly that, al-Bukhari records a hadith that honours the one who turns away when sin is within easy reach and no eye is watching. It is the mirror image of everything the ḥadd is built to deter.",
            "bn": "অংশটি একটি শাস্তির বিধান দেয়, কিন্তু কুরআনের গভীরতর লক্ষ্য সেই হৃদয়, যে কখনো তা অর্জন করে না। ঠিক সে বিষয়ে নবী ﷺ-এর একটি সহিহ বাণী বুখারী বর্ণনা করেন, যা সেই মানুষকে সম্মান দেয়, গুনাহ যখন হাতের নাগালে আর কোনো চোখ দেখছে না, তখন যে মুখ ফিরিয়ে নেয়। এটি সেই সবকিছুর উল্টো ছবি, যা ঠেকাতে হদ গড়া হয়েছে।"
          },
          {
            "en": "The Prophet ﷺ said: 'Seven will Allah shade in His shade on the Day when there is no shade but His: a just ruler; a youth who grew up in the worship of his Lord; a man whose heart is attached to the mosques; two men who love each other for Allah's sake, meeting and parting upon that; a man whom a woman of rank and beauty calls to herself and he says, I fear Allah; a man who gives charity so secretly his left hand does not know what his right has spent; and a man who remembers Allah alone and his eyes overflow.'",
            "bn": "নবী ﷺ বলেছেন: '৭ জনকে আল্লাহ সেদিন তাঁর ছায়ায় ছায়া দেবেন, যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না: ন্যায়পরায়ণ শাসক; যে যুবক তার রবের ইবাদতে বেড়ে উঠেছে; যার হৃদয় মসজিদের সঙ্গে বাঁধা এমন মানুষ; দুই ব্যক্তি যারা আল্লাহর জন্য একে অপরকে ভালোবাসে, এরই উপর মিলিত হয় ও বিচ্ছিন্ন হয়; যাকে পদমর্যাদা ও রূপের অধিকারী কোনো নারী নিজের দিকে ডাকে আর সে বলে, আমি আল্লাহকে ভয় করি; যে এত গোপনে দান করে যে তার বাঁ হাত জানে না ডান হাত কী খরচ করল; আর যে একা আল্লাহকে স্মরণ করে আর তার চোখ ছাপিয়ে ওঠে।'"
          },
          {
            "en": "Its place is in Ṣaḥīḥ al-Bukhārī, and so it carries his authentication as sound. Notice what earns the shade: not a punishment carried out, but a private refusal, a man alone with temptation and no witness but Allah, who steps back. That is the chastity these verses are built to protect. The law's severity guards the same thing this man guarded freely, from the inside, when nobody would ever have known.",
            "bn": "এর স্থান সহিহ বুখারীতে, তাই এটি তাঁর সহিহ সনদের মর্যাদা বহন করে। খেয়াল করুন কীসে এই ছায়া মেলে: কোনো কার্যকর শাস্তিতে নয়, বরং এক নিভৃত প্রত্যাখ্যানে, প্রলোভনের সঙ্গে একা এক মানুষ, আল্লাহ ছাড়া কোনো সাক্ষী নেই, তবু সে পিছিয়ে আসে। এই সতীত্বই এই আয়াতগুলো রক্ষা করতে গড়া। আইনের কঠোরতা সেই জিনিসকেই আগলায়, যা এই মানুষ ভেতর থেকে স্বেচ্ছায় আগলেছিল, যখন কেউ কোনোদিন জানতই না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Chastity Is Worth",
          "bn": "সতীত্বের মূল্য কত"
        },
        "p": [
          {
            "en": "Step back from the courtroom, which almost never convened, and see what the verse actually asks of a life. Ma'arif reads the whole sūrah as a defence of chastity, down to the chastity of the eyes, and the commands on lowering the gaze and seeking permission to enter follow soon after. The lesson a reader can live is not about a whip. It is about how much a clean heart, a guarded eye, and an unstained name are worth, and how easily a careless word or glance spends them.",
            "bn": "আদালত থেকে একটু পিছিয়ে দাঁড়ান, যা প্রায় কখনো বসতই না, আর দেখুন আয়াতটি আসলে একটা জীবনের কাছে কী চায়। মাআরিফুল কুরআন গোটা সূরাকে পড়ে সতীত্বের এক প্রতিরক্ষা হিসেবে, এমনকি চোখের সতীত্ব পর্যন্ত। দৃষ্টি নামিয়ে রাখা আর ঘরে ঢোকার অনুমতি চাওয়ার হুকুম এর একটু পরেই আসে। পাঠক যে শিক্ষা নিয়ে বাঁচতে পারে তা কোনো চাবুকের কথা নয়। তা হলো একটা পরিচ্ছন্ন হৃদয়, একটা আগলানো চোখ আর একটা নিষ্কলঙ্ক নামের মূল্য কত, আর একটা বেখেয়ালি কথা বা দৃষ্টি কত সহজে তা খরচ করে ফেলে।"
          },
          {
            "en": "Hold the two truths the verse holds together. God's justice is real, and He named a heavy penalty for a heavy wrong. Yet He fenced it with four eyewitnesses and turned the law against the false accuser, so that in practice mercy runs through the whole of it. This describes a judicial ordinance and licenses nothing against any living person: not a raised hand, not a whispered accusation, not a family taking the law as its own. What it asks of me is the harder, quieter thing: to guard my own purity, and to guard my neighbour's good name as if it were mine.",
            "bn": "আয়াত যে দুটি সত্য একসঙ্গে ধরে রাখে, তা ধরে রাখুন। আল্লাহর বিচার সত্য, আর ভারী অন্যায়ের জন্য তিনি ভারী শাস্তি বলেছেন। তবু তিনি একে ঘিরে দিয়েছেন চারজন সাক্ষীতে, আর আইনকে ঘুরিয়ে দিয়েছেন মিথ্যা অপবাদদাতার বিরুদ্ধে, যাতে বাস্তবে এর গোটাটা জুড়ে রহমত বয়ে চলে। এ একটি বিচারিক বিধানের বর্ণনা, আর কোনো জীবিত মানুষের বিরুদ্ধে কিছুরই অনুমতি এ দেয় না: কোনো ওঠানো হাত নয়, কোনো ফিসফিসানো অপবাদ নয়, কোনো পরিবারের আইন নিজ হাতে তুলে নেওয়া নয়। আমার কাছে এ চায় কঠিনতর, শান্ত কাজটি: নিজের পবিত্রতা আগলানো, আর প্রতিবেশীর সুনামকে নিজের সুনামের মতো আগলানো।"
          }
        ]
      }
    ]
  },
  "24:6": {
    "sections": [
      {
        "h": {
          "en": "When One Is the Only Witness",
          "bn": "সাক্ষী কেবল সে নিজেই"
        },
        "p": [
          {
            "en": "The sūrah has just laid down a hard rule. Whoever accuses a chaste person of adultery must produce four witnesses; if he cannot, he himself is lashed and his testimony is refused for life (24:4). For a stranger who suspects, silence is the safe path. But one case does not fit that rule. A husband who believes his own wife has betrayed him cannot simply walk away from what he thinks he has seen, and he will almost never have four witnesses to a thing done in secret.",
            "bn": "সূরাটি সবেমাত্র একটা কঠিন বিধান দিয়েছে। যে সতী কাউকে ব্যভিচারের অপবাদ দেবে, তাকে চারজন সাক্ষী হাজির করতে হবে; না পারলে তাকেই বেত্রাঘাত করা হয়, আর আজীবন তার সাক্ষ্য বাতিল (২৪:৪)। বাইরের কেউ কাউকে সন্দেহ করলে চুপ থাকাই তার নিরাপদ পথ। কিন্তু একটি অবস্থা এ বিধানে খাপ খায় না। যে স্বামী বিশ্বাস করে তার নিজের স্ত্রী তার সঙ্গে বিশ্বাসঘাতকতা করেছে, সে যা দেখেছে বলে ভাবছে তা থেকে চুপচাপ সরে যেতে পারে না। আর গোপনে করা কাজের চারজন সাক্ষী তার কাছে প্রায় কখনোই থাকবে না।"
          },
          {
            "en": "Ma'arif al-Qur'an draws out why this position is unbearable. A stranger can keep quiet to save his own back, and lose nothing he was bound to. The husband cannot. If he speaks without four witnesses he is flogged; if he stays silent he must go on living beside a betrayal he is sure of. The general law, framed for the accuser who can choose silence, was never shaped for the one man who cannot. His case needed its own answer, and the next verse gives it.",
            "bn": "মাআরিফুল কুরআন খুলে বলে, কেন এই অবস্থাটা অসহনীয়। বাইরের কেউ নিজের পিঠ বাঁচাতে চুপ থাকতে পারে, তাতে বাধ্যতামূলক কিছুই সে হারায় না। স্বামী তা পারে না। চারজন সাক্ষী ছাড়া মুখ খুললে তার পিঠে বেত পড়ে; চুপ থাকলে যে বিশ্বাসঘাতকতার ব্যাপারে সে নিশ্চিত, তার পাশেই তাকে থেকে যেতে হয়। সাধারণ বিধানটি সাজানো হয়েছিল সেই অভিযোগকারীর জন্য, যে চাইলে চুপ থাকতে পারে; একজন এমন লোকের কথা ভেবে তা গড়া হয়নি, যে পারে না। তার অবস্থার জন্য চাই আলাদা জবাব, আর পরের আয়াত সেটাই দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Relief and a Way Out",
          "bn": "স্বস্তি ও মুক্তির পথ"
        },
        "p": [
          {
            "en": "Ibn Kathir opens on this verse with a single word: relief. The ruling, he says, is a way out for husbands (farajan wa-makhrajan). When a man accuses his wife and cannot bring the proof, he does not act on his own. He brings her before the authority, states the charge, and the judge has him swear four oaths by God that he is truthful in what he has charged. What replaces the missing witnesses is not his fist but a sworn word taken from him in open court.",
            "bn": "ইবন কাসীর এই আয়াতের ব্যাখ্যা শুরু করেন একটি শব্দ দিয়ে: স্বস্তি। তিনি বলেন, বিধানটি স্বামীদের জন্য মুক্তির পথ (ফারাজান ওয়া মাখরাজান)। কোনো লোক তার স্ত্রীর অপবাদ দিয়েও প্রমাণ হাজির করতে না পারলে সে নিজের হাতে কিছু করে না। সে স্ত্রীকে কর্তৃপক্ষের সামনে নিয়ে আসে, অভিযোগ পেশ করে, আর বিচারক তাকে দিয়ে আল্লাহর নামে চারটি শপথ করান যে, যে অভিযোগ সে করেছে তাতে সে সত্যবাদী। অনুপস্থিত সাক্ষীদের জায়গা নেয় তার মুঠি নয়, বরং খোলা আদালতে তার কাছ থেকে নেওয়া এক শপথের বাক্য।"
          },
          {
            "en": "The reports name the occasion. Al-Bukhari records from Ibn ʿAbbas that Hilāl bin Umayya (RA) brought this very charge against his wife before the Prophet ﷺ, who told him, 'Either you bring proof or the punishment falls on your back.' Hilāl answered that he was truthful, and that God would send down what would clear him. Then the verse came. The Prophet ﷺ did not rush to punish either of them; he warned them that God knows one of them is lying, and asked whether either would repent. This narration is graded authentic.",
            "bn": "বর্ণনাগুলো ঘটনার প্রেক্ষাপট জানায়। বুখারী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন যে, হিলাল ইবন উমাইয়া (রাঃ) নবী ﷺ-এর কাছে ঠিক এই অভিযোগটাই তার স্ত্রীর বিরুদ্ধে আনেন, আর নবী ﷺ তাঁকে বলেন, ‘হয় প্রমাণ হাজির কর, নয়তো তোমার পিঠে শাস্তি নেমে আসবে।’ হিলাল বলেন যে তিনি সত্যবাদী, আর আল্লাহ এমন কিছু নাযিল করবেন যা তাঁকে নির্দোষ করবে। এরপরই আয়াতটি নাযিল হয়। নবী ﷺ দুজনের কাউকেই তাড়াহুড়ো করে শাস্তি দেননি; তিনি সতর্ক করেন যে তাদের একজন মিথ্যা বলছে তা আল্লাহ জানেন, আর জিজ্ঞেস করেন কেউ তওবা করবে কি না। এই বর্ণনা সহীহ হিসেবে চিহ্নিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Sworn in Place of Proof",
          "bn": "সাক্ষীর বদলে শপথ"
        },
        "p": [
          {
            "en": "At-Tabari fixes the meaning of the oath's role. The four testimonies, he explains, stand in the place of the four witnesses in averting the prescribed punishment from the husband. The law does not lower the standard of proof; it substitutes, for this one relationship, a fourfold oath where four eyes cannot be found. He reads 'the witness of one of them' as: it is upon one of them to swear four oaths by God — each oath the sentence the verse dictates, that he is among the truthful.",
            "bn": "তাবারী শপথের ভূমিকাটা স্পষ্ট করে দেন। তিনি বুঝিয়ে বলেন, চারটি সাক্ষ্য স্বামীর কাছ থেকে নির্ধারিত শাস্তি সরিয়ে দেওয়ার ক্ষেত্রে চারজন সাক্ষীর জায়গায় দাঁড়ায়। আইন প্রমাণের মান নামিয়ে দেয় না; এই একটিমাত্র সম্পর্কের বেলায় যেখানে চার জোড়া চোখ পাওয়া যায় না, সেখানে চারবারের শপথকে বসিয়ে দেয়। ‘তাদের একজনের সাক্ষ্য’ কথাটি তিনি পড়েন এভাবে: তাদের একজনের উপর দায়িত্ব যে সে আল্লাহর নামে চারবার শপথ করবে। প্রতিটি শপথ আয়াতের নির্ধারিত সেই বাক্য, যে সে সত্যবাদীদের একজন।"
          },
          {
            "en": "As-Sa'di asks why an oath is called a 'testimony' at all, and answers that it stands in the place of witnesses. He lists the wisdoms particular to marriage: a husband rarely exposes the wife whose disgrace is his own disgrace unless something drives him, he has a real stake, and there is the fear of a child fathered elsewhere being attached to him. Al-Baghawi notes the two readings of 'four testimonies' — one taking the oath as what averts the punishment, the other as the act he must perform — a grammatical difference, not a difference in law.",
            "bn": "সাদী প্রশ্ন তোলেন, শপথকে ‘সাক্ষ্য’ বলা হচ্ছে কেন, আর জবাব দেন যে তা সাক্ষীদের জায়গায় দাঁড়ায়। বিবাহের বেলায় খাস কিছু হিকমতও তিনি সাজান: স্বামী সাধারণত সেই স্ত্রীকে ফাঁস করে না, যার অসম্মান তার নিজেরই অসম্মান, যদি না কিছু তাকে ঠেলে দেয়; এতে তার সত্যিকারের স্বার্থ থাকে; আর ভয় থাকে অন্যের ঔরসের সন্তান তার সঙ্গে জুড়ে যাওয়ার। বাগভী ‘চারটি সাক্ষ্য’ পড়ার দুটি ধরন তুলে ধরেন। একটিতে শপথই শাস্তি সরিয়ে দেয়, অন্যটিতে তা সেই কাজ যা তাকে করতে হবে। এটি ব্যাকরণের পার্থক্য, বিধানের নয়।"
          },
          {
            "en": "Al-Qurtubi sets down how a judge conducts it. He begins with the husband, as God began, and has him swear, four times, that he is truthful in what he charged; then, at the fifth, that God's curse be on him if he lied. Only then does the wife rise and swear, four times, that he is lying, and, at her fifth, that God's wrath be on her if he spoke true. Every step is spoken aloud, in order, before the court. Nothing here is left to a man's private judgement of his own household.",
            "bn": "কুরতুবী লিখে দেন, বিচারক কীভাবে এটি পরিচালনা করেন। আল্লাহ যেভাবে শুরু করেছেন, তিনিও স্বামীকে দিয়ে শুরু করেন আর তাকে দিয়ে চারটি শপথ করান যে সে তার অভিযোগে সত্যবাদী; তারপর পঞ্চমবারে বলান, মিথ্যা বললে তার উপর আল্লাহর লা’নত পড়ুক। এরপরই স্ত্রী দাঁড়িয়ে চারবার শপথ করে যে স্বামী মিথ্যা বলছে, আর তার পঞ্চম শপথে বলে, স্বামী সত্য বললে তার নিজের উপর আল্লাহর গযব পড়ুক। প্রতিটি ধাপ পালা করে সবার সামনে উচ্চস্বরে বলা হয়। এখানে কিছুই স্বামীর নিজের ঘর নিয়ে তার একার বিচারের হাতে ছাড়া হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Oath That Binds",
          "bn": "যে শপথ চূড়ান্ত করে"
        },
        "p": [
          {
            "en": "After the four oaths comes a fifth, and the verse makes it heavier than all before it. The husband must call down the curse of God upon himself if he is among the liars (24:7). Al-Muyassar renders it plainly: he adds, in the fifth, a prayer against his own soul, that he deserves God's curse should his charge be false. In the narration the man is stopped before this last oath and warned that it is the binding one — the punishment of this world is lighter than the punishment of the next. He does not draw back.",
            "bn": "চারটি শপথের পর আসে পঞ্চম শপথ, আর আয়াত তাকে আগের সবগুলোর চেয়ে ভারী করে তোলে। স্বামীকে নিজের উপর আল্লাহর লা’নত ডেকে আনতে হয়, যদি সে মিথ্যাবাদীদের একজন হয় (২৪:৭)। মুয়াসসার সাদামাটাভাবে বলে: পঞ্চম শপথে সে নিজের বিরুদ্ধে বদদোয়া যোগ করে, যে তার অভিযোগ মিথ্যা হলে সে আল্লাহর লা’নতের যোগ্য। বর্ণনায় এই শেষ শপথের আগে লোকটিকে থামানো হয় আর সতর্ক করা হয় যে এটাই চূড়ান্ত শপথ। দুনিয়ার শাস্তি আখিরাতের শাস্তির চেয়ে হালকা। তবু সে পিছু হটে না।"
          },
          {
            "en": "The gravity is deliberate. Neither spouse, after the oaths, is put to the sword or the lash in this world; the punishment each swore to escape is lifted. But the oaths do not make the truth. One of the two has sworn falsely before God, and that reckoning is not cancelled — it is only moved to where it cannot be evaded. Ibn Kathir reads the verse that follows, on God's grace and mercy (24:10), as pointing to just this: were it not for that grace, the tangled affair would have crushed them, but God left a way through.",
            "bn": "এই গাম্ভীর্য ইচ্ছাকৃত। শপথের পর কোনো স্বামী বা স্ত্রীকে এই দুনিয়ায় তলোয়ার বা বেতের মুখে ফেলা হয় না; যে শাস্তি থেকে বাঁচতে তারা শপথ করেছিল, তা উঠে যায়। কিন্তু শপথ সত্যকে বানায় না। দুজনের একজন আল্লাহর সামনে মিথ্যা শপথ করেছে, আর সেই হিসাব বাতিল হয় না। তা কেবল এমন জায়গায় সরিয়ে দেওয়া হয় যেখান থেকে পালানো যায় না। ইবন কাসীর এর পরের আয়াতটি, আল্লাহর অনুগ্রহ ও রহমত নিয়ে (২৪:১০), ঠিক এদিকেই ইঙ্গিত হিসেবে পড়েন: সেই অনুগ্রহ না থাকলে জট পাকানো ব্যাপারটা তাদের পিষে ফেলত, কিন্তু আল্লাহ একটা পথ রেখে দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer That Shields Her",
          "bn": "যে জবাব তাকে বাঁচায়"
        },
        "p": [
          {
            "en": "The procedure does not end with the husband, and this is its balance. The verse turns at once to the wife: his oaths do not convict her. She answers with four oaths of her own, swearing by God that he is among the liars (24:8), and a fifth that the wrath of God be upon her if he has told the truth (24:9). And the Qur'an states the effect in her favour: her testimony 'will avert the punishment from her.' Her word, sworn in the same court, is set exactly against his, and it is enough to turn the penalty away.",
            "bn": "বিধানটি স্বামীর কাছে এসে থেমে যায় না, আর এখানেই এর ভারসাম্য। আয়াত সঙ্গে সঙ্গে স্ত্রীর দিকে ফেরে: স্বামীর শপথ তাকে দোষী সাব্যস্ত করে না। সে নিজেও চারটি শপথ করে জবাব দেয়, আল্লাহর নামে বলে যে স্বামী মিথ্যাবাদীদের একজন (২৪:৮), আর পঞ্চম শপথে বলে, স্বামী সত্য বললে তার নিজের উপর আল্লাহর গযব পড়ুক (২৪:৯)। আর কুরআন তার পক্ষে ফলটা সাফ বলে দেয়: তার সাক্ষ্য ‘তার কাছ থেকে শাস্তি সরিয়ে দেবে।’ একই আদালতে করা তার কথা ঠিক স্বামীর কথার বিপরীতে বসে, আর শাস্তি সরিয়ে দিতে সেটাই যথেষ্ট।"
          },
          {
            "en": "Al-Qurtubi captures the symmetry in a single line: the husband swears to ward the punishment of false accusation off himself, and she swears to ward the punishment off herself. Neither is condemned by the other's oath. Ibn Kathir notes that her fifth oath invokes God's wrath rather than His curse, and offers a reason drawn from the usual case. Yet the law does not run on that guess. Once she has sworn, the worldly penalty is lifted from her entirely; she may not be called an adulteress, and the presumption the oaths leave standing is in her favour, not against her.",
            "bn": "কুরতুবী ভারসাম্যটা এক লাইনে ধরে ফেলেন: স্বামী শপথ করে নিজের কাছ থেকে অপবাদের শাস্তি সরাতে, আর স্ত্রী শপথ করে নিজের কাছ থেকে শাস্তি সরাতে। একজনের শপথে অন্যজন দোষী হয় না। ইবন কাসীর লক্ষ করেন, স্ত্রীর পঞ্চম শপথ আল্লাহর লা’নত নয়, তাঁর গযব ডেকে আনে, আর এর একটা কারণ তিনি সাধারণ অবস্থা থেকে দেন। তবু বিধান সেই অনুমানের উপর চলে না। শপথ করে ফেলার পর দুনিয়ার শাস্তি তার কাছ থেকে পুরোপুরি উঠে যায়; তাকে ব্যভিচারিণী বলা যায় না, আর শপথ যে ধারণাটা রেখে যায় তা তার পক্ষে, বিপক্ষে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Oath or Sworn Witness",
          "bn": "শপথ, না সাক্ষ্য"
        },
        "p": [
          {
            "en": "The jurists divide over what the liʿān really is, and al-Qurtubi lays the dispute out. Mālik and ash-Shāfiʿī hold it to be an oath; Abū Ḥanīfa holds it a testimony. The difference is not idle. If it is an oath, then whoever may lawfully swear may perform it — the blind, the non-Muslim spouse, the person whose ordinary witness would be refused. If it is a testimony, only those whose testimony is accepted may enter it. Ibn al-ʿArabī argues that a man cannot be a witness in his own cause, which points to an oath — but the verse settles the label for neither side here.",
            "bn": "লি‘আন আসলে কী, তা নিয়ে ফকীহরা ভাগ হয়ে যান, আর কুরতুবী বিতর্কটা সাজিয়ে দেন। মালিক ও শাফিয়ী একে শপথ বলেন; আবু হানীফা বলেন সাক্ষ্য। এই পার্থক্য অকাজের নয়। এটি যদি শপথ হয়, তবে যে বৈধভাবে শপথ করতে পারে সে-ই তা করতে পারবে: অন্ধ, অমুসলিম স্বামী বা স্ত্রী, যার সাধারণ সাক্ষ্য গ্রহণযোগ্য নয় এমন লোক। আর যদি এটি সাক্ষ্য হয়, তবে কেবল তারাই এতে ঢুকতে পারবে যাদের সাক্ষ্য কবুল হয়। ইবনুল আরাবী যুক্তি দেন, নিজের মামলায় কেউ সাক্ষী হতে পারে না, যা শপথের দিকেই ইঙ্গিত করে। তবে আয়াতটি এখানে কোনো পক্ষের নাম চূড়ান্ত করে দেয় না।"
          },
          {
            "en": "Each side reaches for the verse itself. Those who call it a testimony point to the wording, 'and have no witnesses except themselves,' as putting the husband in the place of a witness. Those who call it an oath answer that a repeated sworn formula, staked on God's curse, is the language of oaths, not of evidence, and that the Prophet ﷺ spoke of 'the oaths' when he ruled. Al-Qurtubi records the exchange without flattening it, and the schools carry their positions forward. The Qur'an gives the act its shape and leaves the jurists their honest disagreement over its name.",
            "bn": "দুই পক্ষই আয়াতটার কাছেই হাত বাড়ায়। যারা একে সাক্ষ্য বলেন, তারা ‘নিজেদের ছাড়া তাদের কোনো সাক্ষী নেই’ কথাটাকে ইঙ্গিত করেন, যা স্বামীকে সাক্ষীর জায়গায় বসায়। যারা একে শপথ বলেন, তারা জবাব দেন যে আল্লাহর লা’নতের উপর বাজি রাখা এক বারবার-করা শপথের সূত্র সাক্ষ্যের ভাষা নয়, শপথেরই ভাষা, আর নবী ﷺ রায় দেওয়ার সময় ‘শপথগুলো’-র কথা বলেছিলেন। কুরতুবী আলোচনাটা চ্যাপ্টা না করেই লিপিবদ্ধ করেন, আর মাযহাবগুলো নিজেদের অবস্থান বয়ে নিয়ে যায়। কুরআন কাজটার আকার দিয়ে দেয়, আর তার নাম নিয়ে ফকীহদের সৎ মতভেদটা রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "After the Oaths Are Sworn",
          "bn": "শপথ শেষ হওয়ার পর"
        },
        "p": [
          {
            "en": "When both have sworn, the marriage is over. The reports and the jurists agree that the two are parted for good and may never remarry each other. The Prophet ﷺ attached the child to the mother, ruled that it must not be reviled, and decreed that whoever slandered the woman or her child would face punishment. So the last word of the procedure is not a conviction but a set of protections: a bond dissolved without a verdict of guilt, a child guarded from insult, and a woman shielded by name against every future tongue.",
            "bn": "দুজনেই শপথ করে ফেললে বিয়েটা শেষ। বর্ণনা আর ফকীহরা একমত যে, তারা দুজন চিরতরে আলাদা হয়ে যায় আর একে অপরকে আর কখনো বিয়ে করতে পারে না। নবী ﷺ সন্তানকে মায়ের সঙ্গে জুড়ে দেন, রায় দেন যে তাকে গালমন্দ করা যাবে না, আর ঘোষণা করেন যে কেউ ওই নারী বা তার সন্তানকে অপবাদ দিলে শাস্তি পাবে। তাই এই ধারার শেষ কথা কোনো দোষী সাব্যস্ত করা নয়, বরং একগুচ্ছ সুরক্ষা: দোষের রায় ছাড়াই ভেঙে যাওয়া এক বন্ধন, অপমান থেকে বাঁচানো এক সন্তান, আর নাম ধরে রক্ষা পাওয়া এক নারী, ভবিষ্যতের প্রতিটি জিভের বিরুদ্ধে।"
          },
          {
            "en": "The reports carry two occasions, and the commentators weigh them. One names Hilāl bin Umayya; another names ʿUwaymir al-ʿAjlānī, who came to the Prophet ﷺ with the same trouble. Al-Qurtubi treats both as bound up with the revelation. Ibn Hajar and an-Nawawi reconcile them: Hilāl's case came first and drew down the verse, and ʿUwaymir's, close upon it, was judged by the ruling already given. The disagreement is over sequence, not substance. Either way the verse answered a real household in Madinah before it became a standing law for every marriage.",
            "bn": "বর্ণনাগুলো দুটি উপলক্ষ বয়ে আনে, আর তাফসীরকারেরা সেগুলো ওজন করেন। একটিতে নাম আসে হিলাল ইবন উমাইয়ার; আরেকটিতে উওয়াইমির আল-আজলানীর, যিনি একই সমস্যা নিয়ে নবী ﷺ-এর কাছে আসেন। কুরতুবী দুটোকেই এই নাযিলের সঙ্গে জড়িত ধরেন। ইবন হাজার ও নববী দুটোর মধ্যে সমন্বয় করেন: হিলালের ঘটনা আগে ঘটে আর তা আয়াত নামিয়ে আনে, আর উওয়াইমিরের ঘটনা তার ঠিক পরে, আগে দেওয়া বিধান দিয়েই তার মীমাংসা হয়। মতভেদটা ক্রম নিয়ে, বিষয়বস্তু নিয়ে নয়। যেভাবেই হোক, প্রতিটি বিয়ের জন্য স্থায়ী বিধান হওয়ার আগে আয়াতটি মদীনার এক সত্যিকারের ঘরের জবাব দিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant Beyond the Court",
          "bn": "আদালতের বাইরে কোনো অনুমতি নেই"
        },
        "p": [
          {
            "en": "This needs saying plainly, in both languages. The verse lays down a court procedure, conducted before lawful authority and settled by solemn oath. It licenses nothing against any living person or community: no private accusation, no public shaming, no violence, no hand raised on suspicion. A man who saw and could not prove is sent to the judge, not to his own reckoning; even in the reports the Prophet ﷺ stops him and reminds him of God before the binding oath. Whoever reads this verse as leave to accuse a spouse in the street, or to strike, has read into it the very thing it forbids.",
            "bn": "কথাটা দুই ভাষাতেই সোজাসুজি বলা দরকার। আয়াতটি একটি আদালতি ধারা দাঁড় করায়, যা বৈধ কর্তৃপক্ষের সামনে চলে আর গম্ভীর শপথে মীমাংসা হয়। এটি কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না: ব্যক্তিগত অভিযোগ নয়, প্রকাশ্যে অপমান নয়, সহিংসতা নয়, সন্দেহের বশে হাত তোলা নয়। যে দেখেছে অথচ প্রমাণ করতে পারেনি, তাকে পাঠানো হয় বিচারকের কাছে, নিজের হিসাব-নিকাশের কাছে নয়। বর্ণনাতেও নবী ﷺ চূড়ান্ত শপথের আগে তাকে থামান আর আল্লাহকে স্মরণ করিয়ে দেন। কেউ যদি এ আয়াতকে রাস্তায় স্ত্রীকে অভিযুক্ত করা বা গায়ে হাত তোলার ছাড়পত্র মনে করে, তবে সে আয়াতে ঠিক সেই জিনিসটাই ঢুকিয়ে নিল যা আয়াত নিষেধ করে।"
          },
          {
            "en": "The lesson stands clear once the fear and the detail settle. Where the truth cannot be reached by proof, the believer's path is not the raised hand or the whispered charge, but the lawful process and the oath taken in the sight of God. The verse trusts God with what no witness saw. It answers a real agony without letting either spouse be crushed, and it leaves the hidden truth where it belongs. To live by it is to refuse both the easy accusation and the private vengeance, and to leave to God what only He can judge.",
            "bn": "ভয় আর খুঁটিনাটি থিতিয়ে গেলে শিক্ষাটা পরিষ্কার দাঁড়ায়। প্রমাণে যেখানে সত্যের নাগাল পাওয়া যায় না, মুমিনের পথ সেখানে তোলা হাত বা ফিসফিসিয়ে করা অভিযোগ নয়, বরং বৈধ পথ আর আল্লাহকে সামনে রেখে নেওয়া শপথ। কোনো সাক্ষী যা দেখেনি, আয়াত তা আল্লাহর হাতে সঁপে দেয়। এটি এক সত্যিকারের যন্ত্রণার জবাব দেয়, অথচ স্বামী-স্ত্রীর কাউকেই পিষে যেতে দেয় না, আর লুকানো সত্যটা যেখানে থাকার কথা সেখানেই রেখে দেয়। এ অনুযায়ী জীবন গড়া মানে সহজ অভিযোগ আর ব্যক্তিগত প্রতিশোধ দুটোই প্রত্যাখ্যান করা, আর যা কেবল তিনিই বিচার করতে পারেন তা আল্লাহর হাতে ছেড়ে দেওয়া।"
          }
        ]
      }
    ]
  },
  "24:12": {
    "sections": [
      {
        "h": {
          "en": "Where the Rebuke Lands",
          "bn": "যেখানে ভর্ৎসনা এসে পড়ে"
        },
        "p": [
          {
            "en": "This verse is a reproach. Ibn Kathir opens his comment by calling it a disciplining of the believers over the affair of ʿĀʾishah (RA), when some of them had spread the ugly talk. At-Tabari uses the same register: it is a reproof from Allah to the people of faith for what had taken hold among them. The occasion is stated plainly in the surah itself. A false rumour, an ifk, had been raised against ʿĀʾishah (RA), the Mother of the Believers, and it was being passed from mouth to mouth (24:11).",
            "bn": "এ আয়াত একটি ভর্ৎসনা। ইবন কাসীর তাঁর ব্যাখ্যা শুরু করেন এটিকে আয়েশা (রাঃ)-এর ঘটনায় মুমিনদের জন্য এক আদব-শিক্ষা বলে, যখন তাদেরই কেউ কেউ ওই বিশ্রী কথা ছড়িয়েছিল। তাবারীও একই সুরে বলেন, এটি আল্লাহর পক্ষ থেকে ঈমানদারদের প্রতি এক তিরস্কার, তাদের ভেতরে যা ঘটে গিয়েছিল তার জন্য। এর পেছনের ঘটনা সূরাতেই স্পষ্ট বলা আছে। আয়েশা (রাঃ), উম্মুল মুমিনীনের বিরুদ্ধে এক মিথ্যা গুজব, এক ইফক তোলা হয়েছিল আর তা মুখে মুখে ছড়াচ্ছিল (২৪:১১)।"
          },
          {
            "en": "What matters for the reader is how the matter was settled. Not by witnesses, nor by the community weighing likelihoods. Allah Himself cleared her, from above the heavens, in the verses running from 24:11 to 24:20. ʿĀʾishah (RA) said afterwards that she had hoped only for the Prophet ﷺ to see her innocence in a dream; instead Allah sent down her acquittal in words recited until the Day of Judgement. The charge was a lie, and this verse asks why the believers had not known it at once.",
            "bn": "পাঠকের জন্য আসল কথা হলো, বিষয়টা কীভাবে মীমাংসা হলো। কোনো সাক্ষী দিয়ে নয়, সমাজ সম্ভাবনা মেপেও নয়। আল্লাহ নিজেই তাঁকে নির্দোষ ঘোষণা করলেন, আসমানের উপর থেকে, ২৪:১১ থেকে ২৪:২০ পর্যন্ত আয়াতগুলোতে। আয়েশা (রাঃ) পরে বলেছেন, তিনি কেবল এই আশা করেছিলেন যে নবী ﷺ হয়তো স্বপ্নে তাঁর নির্দোষিতা দেখবেন। অথচ আল্লাহ তাঁর নির্দোষিতা এমন বাণীতে নাযিল করলেন, যা কিয়ামত পর্যন্ত পড়া হবে। অভিযোগটা মিথ্যা ছিল, আর এ আয়াত জিজ্ঞেস করছে, মুমিনরা কেন প্রথম থেকেই সেটা বুঝল না।"
          },
          {
            "en": "One thing must be said plainly, in the verse's own spirit. The verse condemns those who spread an unproven charge; it licenses nothing against anyone who is themselves accused today, and least of all any doubt about ʿĀʾishah (RA), whose innocence Allah declared. Its whole weight falls on the hearer who repeated the rumour instead of refusing it. That is the person the verse is training, and that is the person a reader should look for in the mirror.",
            "bn": "একটা কথা আয়াতের নিজের সুরেই সোজাসুজি বলা দরকার। আয়াত তাদেরই দোষ ধরে যারা যাচাইহীন অভিযোগ ছড়ায়। আজ যার বিরুদ্ধে অভিযোগ ওঠে তার বিপক্ষে এটি কিছুরই অনুমতি দেয় না, আর আয়েশা (রাঃ) সম্পর্কে সন্দেহের তো প্রশ্নই নেই, যাঁর নির্দোষিতা স্বয়ং আল্লাহ ঘোষণা করেছেন। আয়াতের গোটা ভার গিয়ে পড়ে সেই শ্রোতার উপর, যে গুজব ফিরিয়ে না দিয়ে বরং আরও বলেছে। আয়াত এই মানুষটিকেই গড়তে চায়, আর পাঠকের উচিত আয়নায় এই মানুষটিকেই খোঁজা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Good Opinion Owed",
          "bn": "যে সুধারণা পাওনা"
        },
        "p": [
          {
            "en": "The verse turns on one small word. Lawla, at the head of the line, is not the 'if not' of a condition; al-Baghawi, al-Qurtubi and Ibn Kathir each gloss it with halla, meaning why not, or would that you had. The sentence is therefore a rebuke for something left undone. When you heard it, why did the believing men and women not think well? Good opinion is not praised here as a virtue some reach; it is demanded as a duty the hearers failed.",
            "bn": "আয়াতটি ঘোরে একটি ছোট শব্দকে ঘিরে। বাক্যের গোড়ায় থাকা 'লাওলা' এখানে শর্তের 'যদি না' নয়। বাগাভী, কুরতুবী আর ইবন কাসীর প্রত্যেকে এটিকে অর্থ করেন 'হাল্লা' দিয়ে, অর্থাৎ কেন নয়, কিংবা তোমরা কেন করলে না। তাই বাক্যটা না-করা এক কাজের জন্য ভর্ৎসনা। শুনে ফেলার পর মুমিন নারী-পুরুষ কেন ভালো ধারণা করল না? সুধারণাকে এখানে এমন কোনো গুণ বলে বাহবা দেওয়া হচ্ছে না যা কিছু লোক অর্জন করে। এটিকে চাওয়া হচ্ছে এক দায়িত্ব হিসেবে, যা শ্রোতারা পালন করেনি।"
          },
          {
            "en": "As-Sa'di reads the good opinion the verse wants as thinking of one another with soundness: a believer is clear of what the slanderers alleged, and the faith known to be in a person repels the falsehood thrown at them. The Muyassar keeps the same line, that the best is to be assumed the moment the ifk is heard. As-Sa'di then fixes the level of obligation — this, he says, is the opinion made obligatory, that when a believer hears such talk of his brother he clears him with his tongue and gives the lie to the one who spoke it.",
            "bn": "সা'দী এই ভালো ধারণার মানে করেন এভাবে, একে অন্যকে নিরাপদ ভাবা, অর্থাৎ অপবাদকারীরা যা বলেছে মুমিন তা থেকে মুক্ত, আর কারও ভেতরের জানা ঈমানই তার উপর ছোঁড়া মিথ্যাকে ঠেকিয়ে দেয়। মুয়াসসারও একই কথা বলে, ইফক কানে আসামাত্র মুমিনদের একে অন্যের ব্যাপারে সবচেয়ে ভালোটাই ধরে নেওয়া উচিত ছিল। এরপর সা'দী দায়িত্বের মাত্রাটা বলে দেন। এটি হলো ওয়াজিব ধারণা। কোনো মুমিন যখন নিজের ভাইয়ের সম্পর্কে এমন কথা শোনে, তখন তার কর্তব্য মুখে তাকে নির্দোষ বলা, আর যে বলেছে তাকে মিথ্যাবাদী বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "As If Your Own Self",
          "bn": "নিজের সত্তার মতোই"
        },
        "p": [
          {
            "en": "The verse literally says the believers should have thought well bi-anfusihim, of their own selves, though the person slandered was someone else. The commentators explain the wording. At-Tabari says He calls them their selves because the people of Islam are all as one self, since they are one community of faith. Al-Baghawi, citing al-Hasan, reads it the same way, the believers being like a single self; and an-Nahhas, quoted by both al-Qurtubi and al-Baghawi, glosses bi-anfusihim as of their brethren. To think of a fellow believer is to think of yourself.",
            "bn": "আয়াত আক্ষরিক অর্থে বলছে, মুমিনদের উচিত ছিল 'বিআনফুসিহিম', অর্থাৎ নিজেদের সম্পর্কে ভালো ধারণা করা, যদিও অপবাদটা উঠেছিল অন্য একজনের বিরুদ্ধে। মুফাসসিরগণ শব্দটির ব্যাখ্যা দেন। তাবারী বলেন, তিনি তাদের 'নিজেদের' বলেছেন, কারণ ইসলামের লোকেরা সবাই এক সত্তার মতো, যেহেতু তারা এক দ্বীনের মানুষ। বাগাভী হাসানের উদ্ধৃতি দিয়ে একই কথা বলেন, মুমিনরা যেন এক সত্তা। আর নাহহাস, যাঁকে কুরতুবী ও বাগাভী দুজনেই উদ্ধৃত করেন, 'বিআনফুসিহিম'-এর অর্থ করেন 'তাদের ভাইদের সম্পর্কে'। একজন মুমিনের কথা ভাবা মানেই নিজের কথা ভাবা।"
          },
          {
            "en": "Ma'arif al-Qur'an draws this out. Because the tie of Islam has joined believers into one body, a Muslim who defames another in truth defames himself. It points to the Qur'an's habit of using the same figure: do not find fault with your own selves (49:11), do not kill your own selves (4:29), greet your own selves (24:61) — each phrased as if the other Muslim were oneself. At-Tabari cites Mujahid for the same reading of the parallel verses. The wound you deal a brother's name, you deal your own.",
            "bn": "মাআরিফুল কুরআন কথাটা খুলে বলে। ইসলামের বাঁধন মুমিনদের এক দেহে জুড়ে দিয়েছে, তাই যে মুসলিম অন্য মুসলিমকে অপবাদ দেয় সে আসলে নিজেকেই অপবাদ দেয়। এটি কুরআনের একই ধরনের বলার ধরন দেখিয়ে দেয়, নিজেদের দোষ ধরো না (৪৯:১১), নিজেদের হত্যা করো না (৪:২৯), নিজেদের সালাম দাও (২৪:৬১), প্রতিটিই এমনভাবে বলা যেন অন্য মুসলিমই নিজে। তাবারী সমান্তরাল আয়াতগুলোর একই ব্যাখ্যায় মুজাহিদের উদ্ধৃতি দেন। ভাইয়ের সুনামে যে আঘাত করলেন, সে আঘাত আসলে নিজের গায়েই।"
          },
          {
            "en": "This is not sentiment. It is why the duty of good opinion is not optional. When the honour of one believer is torn down, the fabric Ma'arif calls the one body tears with it, and the tear does not stay where it began. That is why the verse addresses the whole gathering of believing men and women, not only the few who first spoke. A rumour needs a crowd to carry it, and the verse tells that crowd that the name it is careless with is, in the end, its own.",
            "bn": "এটা নিছক আবেগ নয়। এটাই কারণ, কেন সুধারণার দায়িত্ব ইচ্ছাধীন নয়। এক মুমিনের সম্মান যখন ধুলোয় লুটায়, মাআরিফ যাকে এক দেহ বলে সেই কাপড়ও তখন ছিঁড়ে যায়, আর সে ছেঁড়া যেখানে শুরু সেখানে থেমে থাকে না। এ কারণেই আয়াত গোটা মুমিন নারী-পুরুষের সমাবেশকে সম্বোধন করে, কেবল প্রথমে যারা মুখ খুলেছিল তাদের নয়। গুজব বইতে গেলে একটা ভিড় লাগে। আয়াত সেই ভিড়কেই বলছে, যে নাম নিয়ে সে বেপরোয়া, শেষ বিচারে সেটা তার নিজেরই নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Hold It to Yourself First",
          "bn": "আগে নিজের গায়ে মাপুন"
        },
        "p": [
          {
            "en": "Ibn Kathir gives the verse a test the hearer can run at once. To think well of your own selves, he says, is to measure the talk against yourselves: if such a thing would not befit you, the Mother of the Believers is worthier still of being cleared of it. Al-Qurtubi puts it the same way — the virtuous believers ought to have measured the matter against themselves, and if it were far-fetched of them, it was far more far-fetched of ʿĀʾishah (RA) and Safwan (RA).",
            "bn": "ইবন কাসীর আয়াতটিকে এমন একটি পরীক্ষা বানিয়ে দেন, যা শ্রোতা তখনই চালাতে পারে। নিজেদের সম্পর্কে ভালো ধারণা করা মানে, তিনি বলেন, কথাটা নিজেদের গায়ে মেপে দেখা। এমন কিছু যদি তোমাদেরই মানায় না, তবে উম্মুল মুমিনীন তা থেকে মুক্ত থাকার আরও বেশি যোগ্য। কুরতুবীও একইভাবে বলেন, মুমিন নারী-পুরুষের ভালো লোকদের উচিত ছিল বিষয়টা নিজেদের গায়ে মেপে দেখা। তাদের বেলায় যা অসম্ভব মনে হয়, আয়েশা (রাঃ) ও সাফওয়ান (রাঃ)-এর বেলায় তা আরও অনেক বেশি অসম্ভব।"
          },
          {
            "en": "At-Tabari and al-Qurtubi both record a further reading from Ibn Zayd. The good opinion the verse asks for, he says, is that a believer knows the bond here is the bond of a mother and her children: ʿĀʾishah (RA) is a mother to the believers, and the believers stand to her as sons, a tie the Qur'an itself made sacred and inviolable. To entertain the charge at all was to forget what she was to them. Read this way, the failure the verse names is not weak reasoning but a lapse of reverence.",
            "bn": "তাবারী ও কুরতুবী দুজনেই ইবন যায়দের আরেকটি ব্যাখ্যা তুলে ধরেন। আয়াত যে সুধারণা চায়, তিনি বলেন, তা হলো মুমিন জানে এখানকার সম্পর্কটা মা আর তাঁর সন্তানের সম্পর্ক। আয়েশা (রাঃ) মুমিনদের মা, আর মুমিনরা তাঁর কাছে ছেলের মতো, এ বাঁধনকে কুরআন নিজেই পবিত্র ও অলঙ্ঘনীয় করেছে। অভিযোগটাকে মনে ঠাঁই দেওয়ার মানেই তিনি তাদের কী, তা ভুলে যাওয়া। এভাবে পড়লে আয়াত যে ব্যর্থতার কথা বলছে তা দুর্বল যুক্তি নয়, বরং সম্মানবোধের এক ঘাটতি।"
          }
        ]
      },
      {
        "h": {
          "en": "Then Say It Aloud",
          "bn": "তারপর মুখে বলুন"
        },
        "p": [
          {
            "en": "The verse asks two things, not one. Ibn Kathir marks the join: think well of your own selves concerns the innermost heart, the baatin, while and say, this is a manifest lie is the work of the tongue, spoken out. Good opinion held silently is only half of what is owed. The believer who is sure a charge is false is bound to say so, aloud, and to name the talk for what it is. The heart's verdict has to reach the mouth.",
            "bn": "আয়াত একটি নয়, দুটি জিনিস চায়। ইবন কাসীর জোড়টা দেখিয়ে দেন, নিজেদের সম্পর্কে ভালো ধারণা করা সংশ্লিষ্ট মনের ভেতরের সঙ্গে, বাতিনের সঙ্গে; আর 'বলল, এটা খোলা মিথ্যা' হলো জিহ্বার কাজ, মুখ ফুটে বলা। চুপচাপ ধরে রাখা ভালো ধারণা পাওনার অর্ধেক মাত্র। যে মুমিন নিশ্চিত যে অভিযোগটা মিথ্যা, তার কর্তব্য সেটা মুখে বলা, আর কথাটাকে তার আসল নামে ডাকা। মনের রায়কে মুখ পর্যন্ত পৌঁছাতে হয়।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the closing clause as instilling that faith itself demanded the Muslims reject the rumour outright as a lie the instant they heard it. From this it draws a ruling: to think well of every believing man and woman is obligatory unless the contrary is proven under sacred law, and where someone accuses a Muslim without such proof, rejecting the accusation and declaring it false is itself obligatory, because it is nothing but backbiting an innocent person. The Muyassar, briefly, calls the words a plain lie against ʿĀʾishah (RA).",
            "bn": "মাআরিফুল কুরআন শেষ অংশটিকে পড়ে এভাবে যে, ঈমান নিজেই দাবি করেছিল মুসলিমরা শোনামাত্র গুজবটাকে সরাসরি মিথ্যা বলে উড়িয়ে দেবে। এখান থেকে সে একটি হুকুম বের করে, প্রতিটি মুমিন নারী-পুরুষ সম্পর্কে ভালো ধারণা রাখা ওয়াজিব, যদি না শরিয়ত অনুযায়ী উল্টোটা প্রমাণিত হয়। আর কেউ যদি এমন প্রমাণ ছাড়া কোনো মুসলিমকে অভিযোগে জড়ায়, তবে সে অভিযোগ প্রত্যাখ্যান করা আর তাকে মিথ্যা ঘোষণা করাও ওয়াজিব, কারণ এটা এক নিরপরাধ মানুষের গিবত ছাড়া কিছু নয়। মুয়াসসার সংক্ষেপে কথাগুলোকে বলে আয়েশা (রাঃ)-এর বিরুদ্ধে খোলা মিথ্যা।"
          },
          {
            "en": "At-Tabari preserves a sharper line from al-Hasan on the same clause. To call it a manifest lie, al-Hasan says, is to hold that such a thing ought not even to be uttered unless the speaker brings four witnesses and the legal charge is established — exactly what the next verse presses: why did they not bring four witnesses to it? (24:13). Speech about another's honour is not free. Until it is proven in the only way the law accepts, the believer's duty is to shut it down, not weigh it and repeat it.",
            "bn": "তাবারী একই অংশ নিয়ে হাসানের আরও কড়া একটি কথা রেখে দেন। একে খোলা মিথ্যা বলার মানে, হাসান বলেন, এমন কথা মুখেই আনা উচিত নয় যদি না বক্তা চারজন সাক্ষী হাজির করে আর শরয়ি অভিযোগ প্রতিষ্ঠিত হয়। পরের আয়াতই এ চাপটা দেয়, তারা এর উপর চারজন সাক্ষী হাজির করল না কেন (২৪:১৩)। অন্যের সম্মান নিয়ে কথা বলা এমনি এমনি জায়েজ নয়। শরিয়ত যে একমাত্র পথ মানে, সেভাবে প্রমাণ না হওয়া পর্যন্ত মুমিনের কাজ কথাটা থামিয়ে দেওয়া, মেপে দেখে ছড়ানো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name Withheld",
          "bn": "যে নামটি বলা হলো না"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an catches a turn in the grammar. After when you heard it, the sentence seemed set to continue in direct address, why did you not think well of your own selves. Instead it switches persons: why did the believers, men and women, not think well. The wording opens by speaking to you, and then withholds that you just where the rebuke bites, naming the believers in the third person rather than in the face.",
            "bn": "মাআরিফুল কুরআন ব্যাকরণের একটা মোড় ধরে ফেলে। 'তোমরা যখন শুনলে' বলার পর বাক্যটা যেন সোজাসুজি সম্বোধনেই চলার কথা ছিল, তোমরা কেন নিজেদের সম্পর্কে ভালো ধারণা করলে না। কিন্তু তা বদলে যায়, কেন মুমিন নারী-পুরুষ ভালো ধারণা করল না। কথাটা শুরু হয় তোমাদের বলে ডেকে, তারপর ভর্ৎসনা ঠিক যেখানে বিঁধছে সেখানেই সেই 'তোমরা' ডাকটা সরিয়ে নেয়, মুখের উপর নয়, বরং নাম ধরে বলে 'মুমিনরা'।"
          },
          {
            "en": "Ma'arif reads a subtle allusion into the change. By naming the believers rather than saying you, the verse hints that in the measure of this act the speakers had fallen short of the very name, since faith itself demanded that a Muslim keep the favourable view of another. The title is held up as the thing they were not living up to. It is a rebuke delivered by withholding a single word.",
            "bn": "মাআরিফ এই বদলের ভেতরে একটা সূক্ষ্ম ইঙ্গিত পড়ে। 'তোমরা' না বলে 'মুমিনরা' বলে আয়াত ইশারা দেয়, এ কাজের মাত্রায় বক্তারা এই নামটিরই যোগ্য থাকেনি, কেননা ঈমান নিজেই দাবি করেছিল মুসলিম যেন অন্যের ব্যাপারে ভালো ধারণাটাই ধরে রাখে। উপাধিটা তাদের সামনে তুলে ধরা হয় সেই জিনিস হিসেবে, যার মান সেই মুহূর্তে তারা রাখেনি। এ এক ভর্ৎসনা, যা একটিমাত্র শব্দ সরিয়ে নিয়ে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Suspicion, the Falsest Talk",
          "bn": "সন্দেহ, সবচেয়ে বড় মিথ্যা"
        },
        "p": [
          {
            "en": "The verse's demand is matched by a word of the Prophet ﷺ. Al-Bukhari records from Abu Hurayra (RA) that he ﷺ said: Beware of suspicion, for suspicion is the worst of false tales; and do not look for the others' faults, and do not spy, and do not be jealous of one another, and do not desert one another, and do not hate one another; and, O servants of Allah, be brothers. It is a sound narration of al-Bukhari. Suspicion is named not as a small fault but as the most lying speech, the seed this verse uproots.",
            "bn": "আয়াতের এই দাবির সঙ্গে মিলে যায় নবী ﷺ-এর একটি কথা। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, সন্দেহ থেকে বেঁচে থাক, কারণ সন্দেহ হলো সবচেয়ে বড় মিথ্যা কথা; আর অন্যের দোষ খুঁজো না, গোয়েন্দাগিরি করো না, একে অন্যের প্রতি হিংসা করো না, একে অন্যের সঙ্গে সম্পর্ক ছিন্ন করো না, একে অন্যকে ঘৃণা করো না; আর হে আল্লাহর বান্দারা, ভাই ভাই হয়ে থাক। এটি বুখারীর একটি সহিহ বর্ণনা। সন্দেহকে এখানে ছোট কোনো দোষ বলা হয়নি, বলা হয়েছে সবচেয়ে মিথ্যা ধরনের কথা, যে বীজটাই এ আয়াত উপড়ে ফেলছে।"
          },
          {
            "en": "Both Ibn Kathir and at-Tabari record that some believers met the test the verse sets. When Umm Ayyub asked her husband Abu Ayyub al-Ansari (RA) whether he had heard what people were saying, he answered that it was a lie, asked whether she herself would ever do such a thing, and when she said no, by Allah, replied that ʿĀʾishah (RA) was better than her. Some early authorities held the verse came down about that exchange; Ibn Kathir adds it was also said Ubayy ibn Kaʿb (RA) spoke its like.",
            "bn": "ইবন কাসীর ও তাবারী দুজনেই বর্ণনা করেন যে কিছু মুমিন আয়াতের এ পরীক্ষায় উতরে গিয়েছিলেন। উম্মে আইয়ুব যখন স্বামী আবু আইয়ুব আনসারী (রাঃ)-কে জিজ্ঞেস করলেন, লোকে কী বলছে তা তিনি শুনেছেন কিনা, তিনি জবাব দিলেন যে ওটা মিথ্যা। তারপর জিজ্ঞেস করলেন, তুমি নিজে কি কখনো এমন করতে? উম্মে আইয়ুব বললেন, না, আল্লাহর কসম। তখন তিনি বললেন, আয়েশা (রাঃ) তো তোমার চেয়ে উত্তম। কিছু পূর্বসূরি মনে করেন আয়াতটি এই কথোপকথন নিয়েই নাযিল হয়েছে। ইবন কাসীর যোগ করেন, বলা হয় উবাই ইবন কাব (রাঃ)-ও এমন কথা বলেছিলেন। তাঁদের মুখে সুধারণা এসেছিল সঙ্গে সঙ্গে।"
          },
          {
            "en": "The affair itself is preserved in ʿĀʾishah's (RA) own long account, reported by al-Bukhari and Muslim, sound in both. Told in her voice, it moves through her distress to one destination: the coming down of the verses that declared her free of the charge. The believers around her had the same facts and far less cause to doubt, yet the account shows how readily a community carries a story it never checked. That gap, between what was known and what was repeated, is what this verse was sent to close.",
            "bn": "গোটা ঘটনাটা রক্ষিত আছে আয়েশা (রাঃ)-এর নিজের দীর্ঘ বর্ণনায়, যা বুখারী ও মুসলিম দুই জায়গাতেই বর্ণিত, আর দুটিতেই সহিহ। তাঁর নিজের মুখে বলা এ ঘটনা তাঁর কষ্টের ভেতর দিয়ে গিয়ে একটিই গন্তব্যে পৌঁছায়, সেই আয়াতগুলোর নাযিল হওয়া যা তাঁকে অভিযোগ থেকে মুক্ত ঘোষণা করল। তাঁর চারপাশের মুমিনদের হাতে তাঁর মতোই তথ্য ছিল, সন্দেহের কারণ ছিল আরও কম, তবু বর্ণনাটা দেখিয়ে দেয় যাচাই না করা কথা বইতে একটা সমাজ কত সহজে রাজি হয়ে যায়। জানা আর ছড়ানোর মাঝের সেই ফাঁকটুকু বন্ধ করতেই এ আয়াত নাযিল হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Good Name Holds",
          "bn": "সুনাম টিকে থাকে"
        },
        "p": [
          {
            "en": "Al-Qurtubi turns the verse into a standing obligation, then a principle. Allah, he says, made it binding on the Muslims that when they hear a man slander someone and impute to him some ugliness they do not know of him, they reject it and give it the lie; and He warned whoever abandons that duty or passes the talk on. From this the scholars drew a rule al-Qurtubi states in his own words: the rank of faith a person has reached, the righteousness he stands in, the garment of chastity a Muslim wears, none is stripped by a doubtful report of corrupt or unknown origin, however far it spreads.",
            "bn": "কুরতুবী আয়াতটিকে বানিয়ে দেন এক স্থায়ী দায়িত্ব, তারপর এক নীতি। আল্লাহ, তিনি বলেন, মুসলিমদের উপর ওয়াজিব করেছেন যে তারা যখন শোনে কেউ কারও নামে অপবাদ দিচ্ছে আর তাকে এমন কুৎসিত কিছুতে জড়াচ্ছে যা তার সম্পর্কে তারা জানে না, তখন তারা যেন তা প্রত্যাখ্যান করে আর মিথ্যা বলে দেয়। আর যে এ দায়িত্ব ছাড়ে বা কথাটা ছড়ায়, তাকে তিনি হুঁশিয়ার করেছেন। এখান থেকে আলিমগণ একটি নীতি টানেন, কুরতুবী যা নিজের ভাষায় বলেন, মানুষ যে ঈমানের স্তরে পৌঁছেছে, মুমিন যে নেকির মর্যাদায় দাঁড়িয়েছে, মুসলিম যে সতীত্বের কাপড় গায়ে জড়িয়েছে, একটি সন্দেহজনক খবর তা তার গা থেকে খুলে নিতে পারে না, যতই ছড়াক, যদি তার উৎস নষ্ট কিংবা অজানা হয়।"
          },
          {
            "en": "For the reader the verse is a rule for the moment a charge arrives, before any decision is made. The first instinct it asks for is good opinion; the first words, that an unproven charge is a lie; the first act it forbids, passing the talk along. None of this licenses ignoring a real wrong or silencing someone who reports being harmed. It is aimed squarely at the idle repeater, not at the one accused. It asks only that a believer's good name be as safe in your mouth as you would want your own to be in theirs.",
            "bn": "পাঠকের জন্য আয়াতটি হলো অভিযোগ কানে আসার মুহূর্তের এক নিয়ম, কোনো সিদ্ধান্ত নেওয়ার আগেই। প্রথম যে টান আয়াত চায় তা সুধারণা; প্রথম যে কথা চায় তা যাচাইহীন অভিযোগকে মিথ্যা বলা; আর প্রথম যে কাজ নিষেধ করে তা কথাটা আরেকজনকে বলা। এর কোনোটাই সত্যিকারের অন্যায় উপেক্ষা করার বা যে ক্ষতির কথা জানায় তাকে চুপ করানোর অনুমতি নয়। আয়াতের নিশানা সোজা সেই অলস ছড়ানেওয়ালার দিকে, অভিযুক্তের দিকে নয়। সে কেবল এটুকু চায়, একজন মুমিনের সুনাম আপনার মুখে যেন ততটাই নিরাপদ থাকে, যতটা আপনি চান আপনার নিজের সুনাম তার মুখে নিরাপদ থাকুক।"
          }
        ]
      }
    ]
  },
  "24:22": {
    "sections": [
      {
        "h": {
          "en": "After the Slander",
          "bn": "অপবাদের পরে"
        },
        "p": [
          {
            "en": "The verse stands inside the long passage, 24:11-26, that Allah sent down about the ifk — the slander against Aisha (RA), the Prophet's ﷺ wife. For a month the lie moved through Madinah; then revelation declared her innocence. What remained afterward was the human wreckage every vindication leaves behind: the injured family now knew exactly who had spread the story, and among the spreaders was a man they had been feeding.",
            "bn": "আয়াতটি দাঁড়িয়ে আছে সেই দীর্ঘ অনুচ্ছেদের ভেতরে — 24:11-26 — যা আল্লাহ নাযিল করেছিলেন 'ইফক' নিয়ে: নবী ﷺ-এর স্ত্রী আয়েশা (রাঃ)-এর বিরুদ্ধে অপবাদ। এক মাস ধরে মিথ্যাটি মদীনায় ঘুরে বেড়াল; তারপর ওহী তাঁর নির্দোষতা ঘোষণা করল। এরপর যা বাকি রইল তা হলো সেই মানবিক ধ্বংসস্তূপ, প্রতিটি নির্দোষ প্রমাণের পরে যা পড়ে থাকে: আহত পরিবারটি এখন ঠিক জানত গল্পটি কারা ছড়িয়েছে — আর ছড়ানোদের মধ্যে ছিল এমন এক ব্যক্তি, যাকে তারা খাওয়াত।"
          },
          {
            "en": "Al-Bukhari relates the account from Aisha (RA) herself. Mistah ibn Uthathah (RA) — a poor emigrant, a relative of Abu Bakr (RA), and one of those who took part in the talk — lived on Abu Bakr's support. When the innocence came down, Abu Bakr swore he would never spend on Mistah again. By ordinary reckoning that oath was mild; he owed nothing to a man who had helped wound his daughter. The verse arrived to answer that reckoning.",
            "bn": "বুখারী ঘটনাটি স্বয়ং আয়েশা (রাঃ) থেকে বর্ণনা করেন। মিসতাহ ইবনে উসাসা (রাঃ) — এক দরিদ্র মুহাজির, আবু বকর (রাঃ)-এর আত্মীয়, এবং সেই আলোচনায় অংশ নেওয়াদের একজন — আবু বকরের সাহায্যেই চলতেন। নির্দোষতার ঘোষণা নাযিল হলে আবু বকর কসম করলেন, তিনি আর কখনো মিসতাহর জন্য খরচ করবেন না। সাধারণ হিসাবে সে কসম ছিল নরম; যে মানুষ তাঁর মেয়েকে আঘাত করায় শামিল হয়েছিল, তার কাছে তাঁর তো কোনো দায়ই ছিল না। আয়াতটি এল সেই হিসাবের জবাব দিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Let Them Pardon and Overlook",
          "bn": "তারা ক্ষমা করুক ও উপেক্ষা করুক"
        },
        "p": [
          {
            "en": "The wording never names anyone: let not those of fadl — virtue, bounty — and means among you swear against giving to the relatives, the poor and the emigrants in the way of Allah; wa-l-ya'fu wa-l-yasfahu, and let them pardon and let them overlook. The two verbs are distinct. 'Afw is dropping the claim against the offender; safh — from the turning of a page — is meeting him afterwards with a clear face, as though the offence were not kept on file.",
            "bn": "শব্দবিন্যাসে কারও নাম নেই: তোমাদের মধ্যে যারা 'ফাদল' — মর্যাদা, প্রাচুর্য — ও সামর্থ্যের অধিকারী, তারা যেন কসম না খায় যে আত্মীয়, মিসকীন ও আল্লাহর পথে হিজরতকারীদের দেবে না; 'ওয়াল-ইয়াফূ ওয়াল-ইয়াসফাহূ' — তারা ক্ষমা করুক ও উপেক্ষা করুক। ক্রিয়া দুটি আলাদা। 'আফও' মানে অপরাধীর বিরুদ্ধে দাবি ছেড়ে দেওয়া; 'সাফহ' — পাতা উল্টে দেওয়া থেকে — মানে এরপর তার সঙ্গে পরিষ্কার মুখে দেখা করা, যেন অপরাধটি নথিতে রাখা হয়নি।"
          },
          {
            "en": "Notice also how the verse names the wrongdoer: not as slanderer but as relative, poor, emigrant in Allah's path — three titles of claim. It refuses to let one sin delete a person's other truths. And it calls the giver a possessor of fadl before asking anything, arguing from his own excellence: generosity of your rank does not lapse because its recipient failed. The address dignifies both parties in the act of repairing them.",
            "bn": "আরও লক্ষ করুন, আয়াতটি অন্যায়কারীকে কী নামে ডাকে: অপবাদদাতা নয়, বরং আত্মীয়, মিসকীন, আল্লাহর পথে মুহাজির — দাবির তিনটি উপাধি। একটি পাপকে সে একজন মানুষের বাকি সত্যগুলো মুছে দিতে দেয় না। আর দাতাকে কিছু চাওয়ার আগেই ডাকে 'ফাদল'-এর অধিকারী বলে — তার নিজের শ্রেষ্ঠত্ব থেকেই যুক্তি সাজিয়ে: তোমার স্তরের বদান্যতা এ কারণে রদ হয় না যে তার প্রাপক ব্যর্থ হয়েছে। সম্বোধনটি দুই পক্ষকেই মর্যাদা দেয় — তাদের মেরামত করতে করতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Question That Ends the Argument",
          "bn": "যে প্রশ্নে তর্ক শেষ"
        },
        "p": [
          {
            "en": "Then the sentence for which the verse is remembered: ala tuhibbuna an yaghfira Allahu lakum — would you not love that Allah should forgive you? It is a question, not a command, because it needs no command; only one answer exists. The verse sets the servant's pardon of a servant beside Allah's pardon of the servant and lets the sizes speak. Whoever holds a debt of injury holds it with hands that themselves owe Allah greater debts than that.",
            "bn": "তারপর সেই বাক্য, যার জন্য আয়াতটি স্মরণীয়: 'আলা তুহিব্বূনা আঁইয়াগফিরাল্লাহু লাকুম' — তোমরা কি ভালোবাসো না যে আল্লাহ তোমাদের ক্ষমা করে দেবেন? এটি প্রশ্ন, নির্দেশ নয় — কারণ নির্দেশের দরকারই নেই; উত্তর একটাই আছে। আয়াতটি বান্দার প্রতি বান্দার ক্ষমাকে বসায় বান্দার প্রতি আল্লাহর ক্ষমার পাশে, আর আকারের পার্থক্যকেই কথা বলতে দেয়। যে ব্যক্তি আঘাতের একটি দেনা ধরে রাখে, সে তা ধরে রাখে এমন দুই হাতে, আল্লাহর কাছে যাদের নিজেদেরই এর চেয়ে বড় দেনা।"
          },
          {
            "en": "Aisha (RA) narrates the effect: Abu Bakr (RA) said, indeed I would love that Allah forgive me — and returned to Mistah the maintenance he used to give him, saying he would never withdraw it from him. The forgiveness was not a sentiment; it was a resumed payment. That is the verse's standard for pardon: restoration of the benefit the anger had cut, not merely the retirement of the grudge.",
            "bn": "আয়েশা (রাঃ) এর প্রভাব বর্ণনা করেন: আবু বকর (রাঃ) বললেন — অবশ্যই, আমি ভালোবাসি যে আল্লাহ আমাকে ক্ষমা করবেন — এবং মিসতাহকে আগে যে ভরণপোষণ দিতেন তা ফিরিয়ে দিলেন, আর বললেন তিনি তা আর কখনো তার কাছ থেকে সরাবেন না। ক্ষমাটি কোনো আবেগ ছিল না; ছিল আবার চালু হওয়া একটি খরচ। এটিই ক্ষমার ব্যাপারে আয়াতটির মানদণ্ড: রাগ যে উপকারটি কেটে দিয়েছিল তার পুনঃস্থাপন — শুধু ক্ষোভটিকে অবসরে পাঠানো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgiveness in the Quran's Pattern",
          "bn": "কুরআনের ধারায় ক্ষমা"
        },
        "p": [
          {
            "en": "The verse belongs to a family. 3:134 praises those who restrain rage and pardon people, and ends: Allah loves the doers of excellence. 41:34 orders repelling the evil deed with what is better, until the one with enmity becomes a devoted friend. And 12:92 preserves Yusuf (AS) saying to the brothers who had wronged him: no reproach upon you today; may Allah forgive you. In each place, pardon is not the weak party's surrender but the strong party's gift.",
            "bn": "আয়াতটি একটি পরিবারের সদস্য। 3:134 প্রশংসা করে তাদের, যারা রাগ দমন করে ও মানুষকে ক্ষমা করে, আর শেষ হয়: আল্লাহ ইহসানকারীদের ভালোবাসেন। 41:34 নির্দেশ দেয় মন্দকে উত্তম কিছু দিয়ে প্রতিহত করতে — যতক্ষণ না শত্রুতা পোষণকারী অন্তরঙ্গ বন্ধু হয়ে যায়। আর 12:92 সংরক্ষণ করে ইউসুফ (আঃ)-এর কথা, তাঁর প্রতি অন্যায়কারী ভাইদের উদ্দেশে: আজ তোমাদের ওপর কোনো ভর্ৎসনা নেই; আল্লাহ তোমাদের ক্ষমা করুন। প্রতিটি জায়গায় ক্ষমা দুর্বল পক্ষের আত্মসমর্পণ নয়, বরং শক্তিমান পক্ষের উপহার।"
          },
          {
            "en": "What 24:22 adds to the family is the measure-for-measure argument stated as an exchange: your forgiving is set against your being forgiven. The Prophet ﷺ stated the same law from the positive side — Muslim relates: whoever relieves a believer of a hardship of this world, Allah relieves him of a hardship of the Day of Rising, and Allah is in the aid of His servant as long as the servant is in the aid of his brother.",
            "bn": "24:22 এই পরিবারে যা যোগ করে তা হলো মাপে-মাপ যুক্তিটি, একটি বিনিময় হিসেবে বলা: তোমার ক্ষমা করাকে রাখা হয়েছে তোমার ক্ষমা পাওয়ার বিপরীতে। নবী ﷺ একই বিধান ইতিবাচক দিক থেকে বলেছেন — মুসলিম বর্ণনা করেন: যে ব্যক্তি কোনো মুমিনের দুনিয়ার একটি সংকট দূর করে, আল্লাহ তার কিয়ামতের দিনের একটি সংকট দূর করেন, আর আল্লাহ বান্দার সাহায্যে থাকেন যতক্ষণ বান্দা তার ভাইয়ের সাহায্যে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hard Case Is the Point",
          "bn": "কঠিন ঘটনাটাই মূল কথা"
        },
        "p": [
          {
            "en": "The verse's difficulty is deliberate: it legislates pardon at its most expensive — wronged party, public injury, family involved, the offender dependent on the offended. Easy forgiveness needed no verse. By choosing the hardest configuration and commanding pardon there, the passage sets the ceiling for every lesser case: if Abu Bakr (RA) could resume feeding the man who had slandered his daughter, the cut-offs most of us maintain stand on far thinner ground. The verse closes: and Allah is Forgiving, Merciful — the names of the One whose treatment we are choosing for ourselves.",
            "bn": "আয়াতটির কাঠিন্য ইচ্ছাকৃত: এটি ক্ষমার বিধান দেয় তার সবচেয়ে মহার্ঘ জায়গায় — অন্যায়ের শিকার পক্ষ, প্রকাশ্য আঘাত, পরিবার জড়িত, অপরাধী নির্ভরশীল ক্ষতিগ্রস্তেরই ওপর। সহজ ক্ষমার জন্য কোনো আয়াতের দরকার ছিল না। সবচেয়ে কঠিন বিন্যাসটি বেছে নিয়ে সেখানেই ক্ষমার নির্দেশ দিয়ে অনুচ্ছেদটি প্রতিটি ছোট ঘটনার জন্য ছাদ বেঁধে দেয়: আবু বকর (রাঃ) যদি তাঁর মেয়ের বিরুদ্ধে অপবাদ রটানো মানুষটিকে আবার খাওয়াতে পারেন, তবে আমরা অধিকাংশ মানুষ যেসব সম্পর্কচ্ছেদ টিকিয়ে রাখি, সেগুলো দাঁড়িয়ে আছে অনেক পাতলা যুক্তির ওপর। আয়াত শেষ হয়: আর আল্লাহ ক্ষমাশীল, পরম দয়ালু — সেই সত্তার নাম, যাঁর আচরণ আমরা নিজেদের জন্য বেছে নিচ্ছি।"
          }
        ]
      },
      {
        "h": {
          "en": "Practising the Verse",
          "bn": "আয়াতটির অনুশীলন"
        },
        "p": [
          {
            "en": "The practice is specific because the story is specific. Identify the person your justified anger has cut off, and identify what was cut — money, greeting, help, presence. The verse's question is then put to you in your own case: would you not love that Allah forgive you? If yes, restore the thing itself, as the payment was restored, and add safh: no cold face, no annual reminder of the offence. Whoever finds this beyond him has at least located the exact distance between himself and the man the Quran was describing.",
            "bn": "অনুশীলনটি সুনির্দিষ্ট, কারণ ঘটনাটি সুনির্দিষ্ট। চিহ্নিত করুন সেই মানুষটিকে, আপনার ন্যায্য রাগ যাকে ছেঁটে ফেলেছে, আর চিহ্নিত করুন কী ছাঁটা হয়েছিল — টাকা, সালাম, সাহায্য, উপস্থিতি। তখন আয়াতের প্রশ্নটি আপনার নিজের ঘটনাতেই আপনার সামনে রাখা হয়: আপনি কি ভালোবাসেন না যে আল্লাহ আপনাকে ক্ষমা করবেন? উত্তর হ্যাঁ হলে, জিনিসটিই ফিরিয়ে দিন — যেভাবে খরচটি ফিরিয়ে দেওয়া হয়েছিল — আর যোগ করুন 'সাফহ': ঠান্ডা মুখ নয়, অপরাধের বাৎসরিক স্মরণিকাও নয়। যার কাছে এটি সাধ্যাতীত মনে হয়, সে অন্তত মেপে ফেলেছে নিজের এবং কুরআন যে মানুষটির বর্ণনা দিচ্ছিল তার মধ্যকার সঠিক দূরত্বটুকু।"
          }
        ]
      }
    ]
  },
  "24:27": {
    "sections": [
      {
        "h": {
          "en": "Where the Surah Turns Inward",
          "bn": "সূরা যেখানে ঘরের দিকে ফেরে"
        },
        "p": [
          {
            "en": "Surah an-Nur opens by curbing what corrupts a society, fixing punishments for indecency and cursing those who fling a false charge at a chaste woman. Ma'arif al-Qur'an reads the command to seek leave before entering a home, isti'dhan, as one of the quieter rules that follow, placed deliberately beside the penalties for adultery and slander, because a household walked into unannounced is exactly where a stray glance and a ruined name begin.",
            "bn": "সূরা আন-নূর শুরু হয় সমাজের নষ্ট দিকগুলো ঠেকিয়ে, অশ্লীলতার শাস্তি ঠিক করে আর সতী নারীর উপর মিথ্যা অপবাদ যারা ছোড়ে তাদের অভিশপ্ত বলে। এরপর আসে সেই নীরব নিয়মগুলো যা এসব গোড়াতেই আটকায়, আর মাআরিফুল কুরআন ঘরে ঢোকার আগে অনুমতি চাওয়ার আদেশকে, ইস্তিআযান, এমনই একটি নিয়ম হিসেবে পড়ে। আয়াতটি ইচ্ছে করেই ব্যভিচার আর অপবাদের শাস্তির পাশে রাখা হয়েছে। কারণ না জানিয়ে ঢুকে পড়া ঘরই সেই জায়গা, যেখান থেকে বেখেয়ালি দৃষ্টি আর নষ্ট সুনামের শুরু।"
          },
          {
            "en": "The verse is eighteen words, opening with 'O you who believe.' Ibn Kathir calls it simply the Islamic etiquette: do not enter houses other than your own until you seek leave and greet the people inside. Muqatil bin Hayyan, whom Ibn Kathir quotes, describes what it replaced. In the days of ignorance a man would walk straight into another's house saying only that he had come in, hard on a host who might be sitting with his wife. The command shut that door and made entry a thing asked for.",
            "bn": "আয়াতটি আঠারো শব্দের, শুরু 'হে ঈমানদারগণ' দিয়ে। ইবন কাসীর একে সোজা কথায় বলেন ইসলামী শিষ্টাচার, যে আদব আল্লাহ তাঁর বান্দাদের শিখিয়েছেন: নিজের ঘর ছাড়া অন্যের ঘরে ঢুকো না, যতক্ষণ না অনুমতি চাও আর ভেতরের লোকদের সালাম দাও। ইবন কাসীর মুকাতিল বিন হাইয়ানের কথা তুলে ধরে বলেন, এ আদেশ কী বদলে দিয়েছিল। জাহিলিয়াতের কালে একজন লোক অন্যের ঘরে সোজা ঢুকে পড়ত, শুধু জানিয়ে দিত যে সে ঢুকল। যে গৃহকর্তা হয়তো স্ত্রীর সঙ্গে বসে আছে, তার জন্য এটা ছিল কষ্টকর। আদেশটি সেই দরজা বন্ধ করে দিল, প্রবেশকে বানিয়ে দিল চেয়ে নেওয়ার জিনিস।"
          }
        ]
      },
      {
        "h": {
          "en": "The Home as a Covering",
          "bn": "ঘর যখন এক আবরণ"
        },
        "p": [
          {
            "en": "As-Sa'di gives the reason in an image. A house, he says, shields what lies behind its walls as a garment shields the body's nakedness. Enter without leave and the eye falls on things inside that were never meant for it. He names a second harm: someone who slips in unseen invites suspicion, thought capable of theft or worse, since entering by stealth is itself the mark of an evil intent. Seeking leave removes both at once.",
            "bn": "সা'দী কারণটা বলেন এক ছবির মধ্যে। তাঁর কথায়, দেয়ালের পেছনের জিনিস আড়াল করায় ঘর মানুষের কাছে ঠিক তেমন, শরীরের লজ্জাস্থান ঢাকায় কাপড় যেমন। অনুমতি ছাড়া ঢুকলে ভেতরের এমন জিনিসে চোখ পড়ে, যা কখনো দেখানোর ছিল না। তিনি দ্বিতীয় একটা ক্ষতির কথাও বলেন। যে চুপিসারে ঢুকে পড়ে তাকে নিয়ে সন্দেহ জাগে, তাকে চুরি বা তার চেয়েও মন্দ কাজে সক্ষম ভাবা হয়। কারণ লুকিয়ে ঢোকাটাই মন্দ উদ্দেশ্যের চিহ্ন। অনুমতি চাওয়া দুটোই একসঙ্গে সরিয়ে দেয়।"
          },
          {
            "en": "Ma'arif al-Qur'an builds on the Qur'an's own naming of the home as a blessing, sakan, a place of rest (16:80). A home does its work only when a person can be there without another's intrusion. From this it draws four benefits: it spares people the harm of being intruded upon; it earns the visitor a proper welcome rather than a host wishing him gone; it guards against a glance falling on the women of the house; and it protects whatever a person does in private and would not want known.",
            "bn": "মাআরিফুল কুরআন কুরআনের নিজের কথা থেকে শুরু করে, যেখানে ঘরকে বলা হয়েছে নিয়ামত, সাকান, বিশ্রামের ঠাঁই (১৬:৮০)। ঘর তার কাজ তখনই করে, যখন মানুষ সেখানে অন্যের হস্তক্ষেপ ছাড়া থাকতে পারে, বিশ্রাম নিতে আর নিজের ইচ্ছেমতো চলতে পারে। এখান থেকেই সে নিয়মটির চারটি উপকার বের করে আনে। এটি মানুষকে অনধিকার প্রবেশের কষ্ট থেকে বাঁচায়। অতিথিকে এনে দেয় যথাযথ আপ্যায়ন, গৃহকর্তা তাকে বিদায় করতে চাইবে না। ঘরের নারীদের উপর দৃষ্টি পড়া থেকে আগলে রাখে। আর একান্তে করা যে কাজ কেউ জানাতে চায় না, তা ঢেকে রাখে।"
          },
          {
            "en": "At-Tabari and al-Qurtubi report a cause of revelation from 'Adi bin Thabit: a woman of the Ansar said she was sometimes at home in a state she would not want father or son to see, yet a man of her household kept coming in on her, and the verse came down. Read this way, the rule walls off every home alike. Ma'arif holds it binding on all, a son even upon his own mother. It casts no suspicion on women as a class and licenses nothing against any person or community; it is a courtesy every believer both owes and is owed.",
            "bn": "তাবারী ও কুরতুবী আদী বিন সাবিতের সূত্রে আয়াত নাযিলের একটি কারণ বর্ণনা করেন। আনসারদের এক নারী বলেছিলেন, তিনি কখনো কখনো ঘরে এমন অবস্থায় থাকেন যা তিনি বাবা বা সন্তানকেও দেখাতে চান না, অথচ পরিবারের এক পুরুষ বারবার তাঁর কাছে ঢুকে পড়ে। তখন আয়াতটি নাযিল হয়। এভাবে দেখলে এ বিধান প্রতিটি ঘরের চারপাশেই এক দেয়াল। মাআরিফ একে সবার উপর সমানভাবে ওয়াজিব বলে, এমনকি ছেলে নিজের মায়ের কাছে গেলেও। এটি নারীদের গোটা জাতকে সন্দেহ করে না, কোনো ব্যক্তি বা সমাজের বিরুদ্ধে কিছুরই অনুমতি দেয় না। এ এমন এক শিষ্টাচার, যা প্রতিটি ঈমানদার অন্যকে দেয় আর নিজেও পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Familiarity or Leave to Enter",
          "bn": "চেনা-জানা, নাকি অনুমতি"
        },
        "p": [
          {
            "en": "The verb the verse chooses is tastanisu, and the commentators divide over what it asks. The majority read it as isti'dhan, plainly to seek permission. Malik, quoted by al-Qurtubi, says isti'nas is isti'dhan, and at-Tabari records the same gloss from Ibn 'Abbas. As-Sa'di explains the word: permission is called isti'nas because through it uns, a settled ease, is reached between the two, whereas its absence leaves only wahsha, a cold unease.",
            "bn": "আয়াত যে ক্রিয়াটি বেছে নেয় তা হলো তাসতা'নিসূ, আর এটি কী চায় তা নিয়ে তাফসীরকারেরা ভাগ হয়ে যান। অধিকাংশ একে পড়েন ইস্তিআযান অর্থে, সোজা কথায় অনুমতি চাওয়া। কুরতুবী মালিকের উদ্ধৃতি দেন: ইসতি'নাস, আমাদের বোঝায় এবং আল্লাহই ভালো জানেন, হলো ইস্তিআযান। তাবারীও ইবন আব্বাস থেকে একই ব্যাখ্যা বর্ণনা করেন। সা'দী শব্দটি বেছে নেওয়ার কারণ বলেন: অনুমতিকে ইসতি'নাস বলা হয়েছে, কারণ এর মধ্য দিয়ে দুজনের মাঝে উনস, এক থিতু স্বস্তি, তৈরি হয়। আর এটি না থাকলে থাকে কেবল ওয়াহশা, এক শীতল অস্বস্তি।"
          },
          {
            "en": "Others hear a different demand in the word. Mujahid glosses isti'nas as making yourself known, by clearing the throat or a like sound, and entering only once you sense you have been noticed. Al-Khalil, cited by al-Baghawi, ties it to perception, from anastu, I perceived, as in 'if you perceive in them sound judgement' (4:6). Al-Qurtubi quotes Ibn Majah, from Abu Ayyub al-Ansari, who asked, 'this is the salam; what is the isti'dhan?' The answer: a man utters a tasbih, a takbir or a tahmid, or clears his throat, and so alerts the household. Al-Qurtubi reads this as proof that isti'nas is other than the salam.",
            "bn": "অন্যরা শব্দটির মধ্যে ভিন্ন এক দাবি শোনেন। মুজাহিদ ইসতি'নাসের অর্থ করেন নিজের উপস্থিতি জানানো, গলা খাঁকারি দিয়ে বা এমন কোনো শব্দে, আর ঢোকা কেবল তখনই যখন বুঝছেন আপনার সাড়া পাওয়া গেছে। খলীল, যাঁকে বাগাভী উদ্ধৃত করেন, একে জোড়েন 'বোঝা' অর্থের সঙ্গে, আনাসতু ধাতু থেকে, অর্থাৎ আমি টের পেলাম, যেমন 'যদি তাদের মধ্যে বিচারবোধ টের পাও' (৪:৬)। কুরতুবী ইবন মাজাহ থেকে আবু আইয়ুব আনসারীর প্রশ্ন তুলে ধরেন, 'এ তো সালাম; তাহলে ইস্তিআযান কী?' জবাব: একজন তাসবীহ, তাকবীর বা তাহমীদ বলে, কিংবা গলা খাঁকারি দেয়, আর তাতে ঘরের লোকদের সজাগ করে। কুরতুবী একে প্রমাণ ধরেন যে ইসতি'নাস সালাম থেকে আলাদা।"
          },
          {
            "en": "At-Tabari draws the two together. Isti'nas, he holds, is the istif'al form built on uns: a person seeks the household's leave to come in while making plain who he is, whether anyone is inside, and that he means to enter, so that he finds ease in their leave and they in his asking. He points to a known Arab usage, go and istanis, do you see anyone in the house, meaning look whether anyone is there. On his reading the two glosses are not rivals. Announcing yourself and asking leave are the single courtesy the word names.",
            "bn": "তাবারী দুটোকে এক জায়গায় আনেন। তাঁর মতে ইসতি'নাস হলো উনস থেকে গড়া ইসতিফআল রূপ: একজন ঘরের লোকদের কাছে ঢোকার অনুমতি চায়, সেই সঙ্গে স্পষ্ট করে সে কে, ভেতরে কেউ আছে কিনা, আর সে যে ঢুকতে চায়। ফলে সে তাদের অনুমতিতে স্বস্তি পায়, তারাও তার চাওয়ায় স্বস্তি পায়। তিনি আরবের এক পরিচিত ব্যবহারের দিকে ইশারা করেন, যাও ইসতিনাস করো, ঘরে কাউকে দেখছ কি, অর্থাৎ দেখো ভেতরে কেউ আছে কিনা। তাঁর পড়ায় দুটি ব্যাখ্যা প্রতিদ্বন্দ্বী নয়। নিজেকে জানানো আর অনুমতি চাওয়া, দুটোই সেই এক শিষ্টাচার যা শব্দটি বোঝায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word and the Scribe",
          "bn": "শব্দ আর লেখক"
        },
        "p": [
          {
            "en": "There is an old report about the wording itself. At-Tabari records, through Sa'id bin Jubayr from Ibn 'Abbas (raa), that he recited hatta tasta'dhinu, until you seek permission, and said that tastanisu was a slip of the scribe, reciting it as Ubayy bin Ka'b (raa) recited. Al-Baghawi carries the same, and adds that al-A'mash read it that way too. In the copy of Ibn Mas'ud (raa), at-Tabari notes, the two verbs stood reversed: greet the people of the house and seek their leave.",
            "bn": "শব্দটি নিয়েই একটি পুরনো বর্ণনা আছে। তাবারী সাঈদ বিন জুবায়েরের সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন যে তিনি পড়তেন হাত্তা তাসতা'যিনূ, অর্থাৎ যতক্ষণ না অনুমতি চাও, এবং বলতেন তাসতা'নিসূ লেখকের ভুল, আর তিনি একে পড়তেন উবাই বিন কা'ব (রাঃ)-এর পড়া অনুসারে। বাগাভীও একই কথা আনেন, আর যোগ করেন যে আ'মাশও এভাবে পড়তেন। তাবারী বলেন, ইবন মাসঊদ (রাঃ)-এর মুসহাফে ক্রিয়া দুটি উল্টো দাঁড়িয়ে ছিল: ঘরের লোকদের সালাম দাও আর তাদের অনুমতি চাও।"
          },
          {
            "en": "Al-Qurtubi will not let the report pass. It is not sound from Ibn 'Abbas or anyone else, he holds, for every mushaf of Islam has tastanisu fixed in it, and the agreement on it has stood since 'Uthman's day. To charge the scribe with error in a word the Companions agreed upon, he says, is not soundly ascribed to Ibn 'Abbas; and he recalls that the Qur'an is the Reminder Allah pledged to guard (15:9). Ibn 'Atiyya adds that 'Umar (raa) himself said at the Prophet's door, may I seek familiarity, O Messenger of Allah. The word every reciter carries is tastanisu.",
            "bn": "কুরতুবী এ বর্ণনাটিকে জবাব ছাড়া যেতে দেন না। তাঁর মতে এটি ইবন আব্বাস বা অন্য কারও থেকে বিশুদ্ধ নয়, কারণ ইসলামের প্রতিটি মুসহাফে তাসতা'নিসূ বসানো আছে, আর উসমান (রাঃ)-এর কাল থেকে এর উপর ঐকমত্য দাঁড়িয়ে আছে। সাহাবিরা যে শব্দে একমত হয়েছেন তাতে লেখকের ভুল আরোপ করা, তাঁর মতে, ইবন আব্বাসের নামে বিশুদ্ধভাবে বলা যায় না। তিনি মনে করিয়ে দেন, কুরআনই সেই যিকর যা রক্ষার দায়িত্ব আল্লাহ নিজে নিয়েছেন (১৫:৯)। ইবন আতিয়্যা যোগ করেন, উমর (রাঃ) নিজেই নবী ﷺ-এর দরজায় বলেছিলেন, আমি কি একটু চেনা-জানা চাইতে পারি, হে আল্লাহর রাসূল। প্রত্যেক পাঠক যে শব্দ বহন করেন তা তাসতা'নিসূ।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Comes First",
          "bn": "কোনটা আগে"
        },
        "p": [
          {
            "en": "If both the greeting and the asking are owed, which comes first? Al-Baghawi records the split. A few put the asking first, since the verse names it first. The greater number put the salam first, reading an inversion in the verse whose sense is: greet the people, then seek their leave, as the copy of Ibn Mas'ud (raa) had it. He relates that Ibn 'Umar (raa) turned away a man who asked only to enter, until he was told to greet first. Mawardi drew the line: greet first if you have already caught sight of someone, otherwise seek leave and greet as you step in.",
            "bn": "সালাম আর অনুমতি দুটোই যদি দিতে হয়, তবে কোনটা আগে? বাগাভী মতভেদটা বর্ণনা করেন। কেউ কেউ অনুমতি আগে রাখেন, কারণ আয়াত সেটাই আগে বলে। বেশিরভাগ সালামকে আগে রাখেন, আর আয়াতে এক উল্টাপাল্টা দেখেন, যার অর্থ, ঘরের লোকদের সালাম দাও আর তাদের অনুমতি চাও, যেমন ইবন মাসঊদ (রাঃ)-এর মুসহাফে ছিল। বাগাভী বলেন, ইবন উমর (রাঃ) এক লোককে ফিরিয়ে দিয়েছিলেন যে কেবল ঢোকার অনুমতি চেয়েছিল, যতক্ষণ না তাকে আগে সালাম দিতে বলা হলো। মাওয়ারদী কথাটা টেনে দেন: আগেই কাউকে দেখে ফেললে সালাম আগে দাও, নইলে অনুমতি চাও আর ঢোকার সময় সালাম দাও।"
          },
          {
            "en": "Beneath the debate lies one settled form. Al-Qurtubi and Ibn Kathir tell of a man of Bani 'Amir who called out at the door, may I barge in, using a word for forcing entry into a tight space, and the Prophet ﷺ sent someone to teach him: say, peace be upon you, may I enter. Al-Qurtubi and al-Baghawi also carry the word of Jabir (raa) that the Prophet ﷺ said no one who does not begin with the salam should be let in. Whichever order a reader prefers, the greeting is the doorway itself, and asking to come in is the courtesy that follows it.",
            "bn": "এই বিতর্কের নিচে থিতু হয়ে আছে একটাই রূপ। কুরতুবী ও ইবন কাসীর বনী আমিরের এক লোকের কথা বলেন, যে দরজায় ডাক দিয়েছিল, আমি কি ঢুকে পড়ব, সংকীর্ণ জায়গায় জোর করে ঢোকার এক শব্দ ব্যবহার করে, আর নবী ﷺ একজনকে পাঠিয়ে তাকে শেখালেন: বলো, আপনাদের উপর শান্তি, আমি কি ঢুকতে পারি। কুরতুবী ও বাগাভী জাবির (রাঃ)-এর কথাও আনেন যে নবী ﷺ বলেছেন, যে সালাম দিয়ে শুরু করে না তাকে ঢুকতে দিয়ো না। পাঠক যে ক্রমই পছন্দ করুন, সালামই দরজা, আর ঢোকার অনুমতি চাওয়া তার পরের শিষ্টাচার।"
          }
        ]
      },
      {
        "h": {
          "en": "Ordained for the Eye",
          "bn": "চোখের জন্যই এ বিধান"
        },
        "p": [
          {
            "en": "One hadith fixes the reason of the whole rule. Sahl bin Sa'd narrated that a man peeped through a hole into the Prophet's dwelling while the Prophet ﷺ had an iron comb with which he was scratching his head. The Prophet ﷺ said, 'Had I known you were looking, I would have pierced your eye with it. Permission to enter has been ordained only because of sight.' It is recorded in Sahih al-Bukhari (6241), and its wording is left whole here rather than blended with any other narration.",
            "bn": "একটি হাদীস গোটা বিধানের কারণটা গেঁথে দেয়। সাহল বিন সা'দ বর্ণনা করেন, এক লোক একটি ছিদ্র দিয়ে নবী ﷺ-এর ঘরের ভেতরে উঁকি দিল, তখন নবী ﷺ-এর হাতে ছিল একটি লোহার চিরুনি, যা দিয়ে তিনি মাথা চুলকাচ্ছিলেন। নবী ﷺ বললেন, 'তুমি যে তাকিয়ে আছ তা জানলে এটা দিয়ে তোমার চোখ ফুঁড়ে দিতাম। অনুমতি চাওয়ার বিধান তো দৃষ্টির কারণেই দেওয়া হয়েছে।' এটি সহীহ বুখারীতে (৬২৪১) আছে, আর এর শব্দ এখানে অন্য কোনো বর্ণনার সঙ্গে না মিশিয়ে পুরোটাই রাখা হলো।"
          },
          {
            "en": "As-Sa'di reads the entire verse through this saying: permission was legislated for the sake of the eye, so that no glance fall on what the walls of a home were built to hide. This is why the rule is more than a nicety. Ma'arif al-Qur'an lists among its aims that no eye fall on the women of a house, and the hadith puts the point at its sharpest. The threat to the eye is no licence to maim; the commentators read it as the gravity of the trespass. What the seeker of leave protects, before all else, is the sight of what was never his to see.",
            "bn": "সা'দী গোটা আয়াতটাই এই কথার আলোকে পড়েন: অনুমতির বিধান দেওয়া হয়েছে চোখের কারণে, যেন ঘরের দেয়াল যা আড়াল করতে গড়া তার উপর দৃষ্টি না পড়ে। এ কারণেই বিধানটা নিছক ভদ্রতার বেশি কিছু। মাআরিফুল কুরআন এর উদ্দেশ্যগুলোর মধ্যে গোনে যে ঘরের নারীদের উপর যেন চোখ না পড়ে, আর হাদীসটি কথাটা সবচেয়ে ধারালোভাবে বলে। চোখ ফুঁড়ে দেওয়ার হুমকি কাউকে অন্ধ করার অনুমতি নয়। তাফসীরকারেরা একে পড়েন সীমালঙ্ঘনের গুরুত্ব বোঝাতে। অনুমতিপ্রার্থী সবার আগে যা রক্ষা করে, তা হলো এমন কিছু দেখা থেকে বেঁচে থাকা, যা দেখার অধিকার তার কখনো ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Times, Then Withdraw",
          "bn": "তিনবার, তারপর ফিরে আসা"
        },
        "p": [
          {
            "en": "The commentators carry a spare rule for how often to ask. Al-Qurtubi, Ibn Kathir and al-Baghawi all relate, through Abu Sa'id al-Khudri (raa), that Abu Musa (raa) sought leave of 'Umar (raa) three times, was not answered, and left, citing the Prophet ﷺ: if any of you asks permission three times and is not answered, let him turn back. Malik would not have a man exceed three, unless he was sure he had not been heard. Al-Hasan read the three as stages: the first is notice, the second a request, the third a leave to withdraw.",
            "bn": "কতবার চাওয়া যায়, তা নিয়ে তাফসীরকারেরা এক পরিমিত নিয়ম বহন করেন। কুরতুবী, ইবন কাসীর ও বাগাভী সবাই আবু সাঈদ খুদরী (রাঃ)-এর সূত্রে বর্ণনা করেন যে আবু মূসা (রাঃ) উমর (রাঃ)-এর কাছে তিনবার অনুমতি চাইলেন, সাড়া না পেয়ে ফিরে এলেন, আর নবী ﷺ-এর এই কথা উল্লেখ করলেন: তোমাদের কেউ তিনবার অনুমতি চেয়ে সাড়া না পেলে যেন ফিরে যায়। মালিক তিনবারের বেশি চাওয়া পছন্দ করতেন না, যদি না কেউ নিশ্চিত হয় যে তার ডাক শোনা যায়নি। হাসান তিনবারকে পড়েন ধাপ হিসেবে: প্রথমটা জানানো, দ্বিতীয়টা অনুরোধ, তৃতীয়টা ফিরে যাওয়ার অনুমতি।"
          },
          {
            "en": "There is a small point of where to stand as well. Ibn Kathir and al-Qurtubi cite Abu Dawud, from 'Abdullah bin Busr (raa), that when the Prophet ﷺ came to someone's door he would not face it head-on but stand to its right or left and say, peace be upon you, peace be upon you, for in those days the doorways had no curtain over them. The one who waits at a door, that is, is not to spend the wait looking in. The manners are of a piece: each of them keeps the person inside from being caught unready.",
            "bn": "কোথায় দাঁড়াতে হবে, তা নিয়েও একটি ছোট কথা আছে। ইবন কাসীর ও কুরতুবী আবু দাউদের সূত্রে আবদুল্লাহ বিন বুসর (রাঃ) থেকে আনেন যে নবী ﷺ কারও দরজায় এলে সোজাসুজি সামনে দাঁড়াতেন না, বরং ডানে বা বাঁয়ে দাঁড়িয়ে বলতেন, আপনাদের উপর শান্তি, আপনাদের উপর শান্তি, কারণ সে যুগে দরজায় কোনো পর্দা থাকত না। অর্থাৎ যে দরজায় অপেক্ষা করে, তার কাজ অপেক্ষার সময়টা ভেতরে তাকিয়ে থাকা নয়। আদবগুলো একই সুতোয় গাঁথা: প্রতিটিই ভেতরের মানুষকে অপ্রস্তুত অবস্থায় ধরা পড়া থেকে বাঁচায়।"
          },
          {
            "en": "Even the answer at the door has its manner. Ibn Kathir and al-Qurtubi relate, from the Two Sahihs, that Jabir (raa) knocked and the Prophet ﷺ asked who it was; Jabir said, it is I, and the Prophet ﷺ repeated, I? I?, as though he disliked it, because it is I tells the host nothing. One should give the name by which he is known, as 'Umar (raa) and Abu Musa (raa) did at the door. Ibn 'Abbas (raa) is reported to have named seeking leave among the rulings people have let fall out of use. The whole cluster serves one end: no one surprised, no one exposed.",
            "bn": "দরজায় জবাব দেওয়ারও একটা আদব আছে। ইবন কাসীর ও কুরতুবী দুই সহীহ থেকে বর্ণনা করেন যে জাবির (রাঃ) কড়া নাড়লে নবী ﷺ জিজ্ঞেস করলেন কে, জাবির বললেন, আমি, আর নবী ﷺ যেন অপছন্দ করে বললেন, আমি? আমি?, কারণ 'আমি' বললে গৃহকর্তা কিছুই বুঝতে পারে না। যে নামে সে পরিচিত, তা বলা উচিত, যেমন উমর (রাঃ) ও আবু মূসা (রাঃ) দরজায় করেছিলেন। ইবন আব্বাস (রাঃ) থেকে বর্ণিত, অনুমতি চাওয়াকে তিনি সেই বিধানগুলোর মধ্যে গণ্য করতেন যা মানুষ ব্যবহার ছেড়ে দিয়েছে। গোটা আদব একটাই লক্ষ্যের সেবা করে: কেউ যেন অপ্রস্তুত না হয়, কারও আড়াল যেন খুলে না যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "That Is Better for You",
          "bn": "এটাই তোমাদের জন্য ভালো"
        },
        "p": [
          {
            "en": "Then the verse gives its reason: that is better for you. At-Tabari draws out two goods. Enter without leave and you do not know what you break in upon, something that may grieve or gladden you; enter with leave and you never come upon what you would hate, and you discharge the right Allah has upon you. Ibn Kathir notes that it is better for both sides at once, the caller and those inside. As-Sa'di counts it among the noble manners that are not merely fine but binding.",
            "bn": "তারপর আয়াত তার কারণটা দেয়: এটাই তোমাদের জন্য ভালো। তাবারী দুটি কল্যাণ টেনে বের করেন। অনুমতি ছাড়া ঢুকলে তুমি জানো না কীসের উপর গিয়ে পড়ছ, এমন কিছু যা তোমাকে কষ্ট দিতে পারে বা খুশি করতে পারে। অনুমতি নিয়ে ঢুকলে তুমি কখনো এমন কিছুর মুখোমুখি হও না যা তুমি অপছন্দ করো, আর আদায় করো আল্লাহর যে হক তোমার উপর আছে তা। ইবন কাসীর বলেন, এটা একসঙ্গে দুই পক্ষের জন্যই ভালো, যে চায় আর যারা ভেতরে থাকে। সা'দী একে গোনেন সেই উত্তম আদবের মধ্যে যা কেবল সুন্দর নয়, ওয়াজিবও।"
          },
          {
            "en": "The verse ends, perhaps you will be reminded. At-Tabari and al-Muyassar read it as: that by doing this you may recall Allah's commands and so obey Him. And the courtesy reaches far. Through 'Ata and Ibn Mas'ud (raa) the commentators hold a man seeks leave even upon his own mother; and though not required upon a wife, Ibn Mas'ud (raa) would clear his throat as he came in so as not to startle her. A rule that trusts you with a mother's privacy, and a wife's, has already shown you how to walk into any door that is not your own.",
            "bn": "আয়াত শেষ হয়, যাতে তোমরা উপদেশ গ্রহণ করো। তাবারী ও মুয়াসসার একে পড়েন এভাবে: এটা করার মধ্য দিয়ে যেন তোমরা আল্লাহর আদেশ মনে করো আর মান্য করো। আর এ শিষ্টাচারের বিস্তার অনেক দূর। আতা ও ইবন মাসঊদ (রাঃ)-এর সূত্রে তাফসীরকারেরা বলেন, একজন নিজের মায়ের কাছে ঢুকতেও অনুমতি চায়, আর স্ত্রীর বেলায় তা বাধ্যতামূলক না হলেও ইবন মাসঊদ (রাঃ) ঢোকার সময় গলা খাঁকারি দিতেন, যেন স্ত্রী চমকে না ওঠে। যে বিধান মায়ের আড়াল আর স্ত্রীর আড়ালও তোমার হাতে সঁপে ভরসা রাখে, সে বিধান আগেই বলে দিয়েছে নিজের নয় এমন যেকোনো দরজায় কীভাবে পা রাখতে হয়।"
          }
        ]
      }
    ]
  },
  "24:31": {
    "sections": [
      {
        "h": {
          "en": "One Charge, Both Sexes",
          "bn": "একই আদেশ, নারী-পুরুষ দুজনকেই"
        },
        "p": [
          {
            "en": "The verse cannot be read alone, and was never meant to be. The command just before it, in 24:30, tells the believing men to lower their gaze and guard their chastity. Then 24:31 opens with a single connecting word, wa-qul, and tell, so the charge to the believing women arrives as the twin of the charge to the men. Ma'arif al-Qur'an notes the plain fact: in its opening the injunction laid on women is exactly the one laid on men just before, then extended for them.",
            "bn": "আয়াতটি একা পড়া যায় না, আর একা পড়ার জন্য নাযিলও হয়নি। ঠিক আগের আদেশ, ২৪:৩০, মু’মিন পুরুষদের বলছে দৃষ্টি নামিয়ে রাখতে আর নিজেদের লজ্জাস্থান হেফাজত করতে। এরপর ২৪:৩১ শুরু হয় একটিমাত্র জোড়া-শব্দ দিয়ে, ওয়া কুল, আর বলে দাও। ফলে মু’মিন নারীদের প্রতি আদেশটা আসে পুরুষদের প্রতি আদেশটার যমজ হয়ে। মাআরিফুল কুরআন সোজা কথাটাই ধরিয়ে দেয়: শুরুতে নারীদের ওপর যে হুকুম, তা হুবহু আগের আয়াতে পুরুষদের ওপর রাখা হুকুমটাই, তারপর তাদের জন্য আরও বাড়িয়ে দেওয়া হলো।"
          },
          {
            "en": "So the reader should set aside the idea that modesty is a weight placed on women while men stand by. The order runs the other way. Allah addresses the men first, in their own verse, and only then turns, with the same verbs, to the women. What the two verses share is more than wording; it is a single principle of guarded sight and guarded self, asked of the whole believing community. The details that follow for women are additions to that shared foundation, not a burden invented for one half of it.",
            "bn": "তাই এ ধারণাটা পাঠক সরিয়ে রাখুন যে পর্দা কেবল নারীর ঘাড়ে চাপানো বোঝা, আর পুরুষ পাশে দাঁড়িয়ে দেখছে। ক্রমটা উল্টো। আল্লাহ আগে পুরুষদের সম্বোধন করেন, তাদের নিজেদের আয়াতে, তারপর একই ক্রিয়া দিয়ে ফেরেন নারীদের দিকে। দুই আয়াত কেবল শব্দে মেলে না; এদের মিল এক নীতিতে, রক্ষিত দৃষ্টি আর রক্ষিত নিজ, যা চাওয়া হয়েছে গোটা মু’মিন সমাজের কাছে। এরপর নারীদের জন্য যে বিস্তারিত আসে, তা ওই সাঝা ভিতের ওপর বাড়তি সংযোজন, এক পক্ষের জন্য বানানো আলাদা বোঝা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Lowering the Gaze",
          "bn": "দৃষ্টি অবনত রাখা"
        },
        "p": [
          {
            "en": "Yaghdudna min absarihinna: let them lower their gaze. Ibn Kathir reads this as turning the eyes from what Allah has forbidden them to look upon, apart from their husbands. As-Sa'di adds the same restraint, looking away from the unlawful and from a stare charged with desire. The little word min, some of their gaze, is not careless; it tells the believer that ordinary, needful seeing is not meant. The eye is asked to be governed, not shut. It is the identical verb Allah used of the men one verse earlier.",
            "bn": "ইয়াগদুদনা মিন আবসারিহিন্না: তারা যেন তাদের দৃষ্টি নামিয়ে রাখে। ইবন কাসীর এর অর্থ নেন, আল্লাহ যা দেখা নিষেধ করেছেন তা থেকে চোখ ফিরিয়ে নেওয়া, স্বামী ব্যতীত। আস-সা’দী একই সংযমের কথা বলেন, ব্যাখ্যা করেন অবৈধ জিনিস আর কামনামাখা দৃষ্টি থেকে চোখ সরিয়ে নেওয়া হিসেবে। ছোট্ট শব্দ মিন, দৃষ্টির কিছু অংশ, ভাষার শিথিলতা নয়; এ বান্দাকে জানায় যে দরকারি সাধারণ দেখা এখানে উদ্দেশ্য নয়। চোখকে বলা হয়েছে নিয়ন্ত্রণে রাখতে, বন্ধ করে দিতে নয়। এক আয়াত আগে পুরুষদের বেলায় আল্লাহ ঠিক এই ক্রিয়াটিই ব্যবহার করেছেন।"
          },
          {
            "en": "Wa-yahfazna furujahunna: and guard their private parts. Abu al-Aliyah made a fine observation that Ibn Kathir preserves: in every other verse the phrase means guarding oneself from unlawful intimacy, but here alone it also carries guarding oneself from being seen. As-Sa'di gathers both senses, that these be kept from any unlawful contact and from any unlawful gaze. The command, in other words, protects a person's own dignity before it regulates anyone else's eyes. That is the inner direction of the whole verse, and it should colour how every clause after it is heard.",
            "bn": "ওয়া ইয়াহফাযনা ফুরূজাহুন্না: আর তারা যেন তাদের লজ্জাস্থান হেফাজত করে। আবুল আলিয়ার একটি সূক্ষ্ম পর্যবেক্ষণ ইবন কাসীর রক্ষা করেন: অন্য প্রতিটি আয়াতে কথাটির অর্থ অবৈধ মেলামেশা থেকে নিজেকে বাঁচানো, কিন্তু কেবল এখানে এর সঙ্গে যুক্ত হয় দেখা যাওয়া থেকেও নিজেকে আড়াল করা। আস-সা’দী দুই অর্থই একত্র করেন, যেন তা অবৈধ স্পর্শ আর অবৈধ দৃষ্টি দুটো থেকেই রক্ষিত থাকে। অন্য কথায়, আদেশটি কারও চোখ নিয়ন্ত্রণ করার আগে নিজের মর্যাদাই রক্ষা করে। এটাই গোটা আয়াতের ভেতরমুখী দিক, আর এর পরের প্রতিটি বাক্য যেন এ আলোতেই শোনা হয়।"
          },
          {
            "en": "May a woman look at a man? Here the commentators keep a real difference open. Ma'arif al-Qur'an reports that many scholars held it forbidden for a woman to look at a non-mahram man, citing the report of Umm Salama, graded hasan sahih by at-Tirmidhi, where the Prophet ﷺ had the blind Companion screened. Others allowed a look without desire, resting on the sound report of A'isha watching the Abyssinians from behind the Prophet ﷺ. All agreed a look charged with lust is forbidden. The article does not settle between them; the verse's weight falls on restraint, not surveillance.",
            "bn": "নারী কি আদৌ পুরুষের দিকে তাকাতে পারে? এখানে তাফসীরকারেরা একটি সত্যিকার মতভেদ খোলা রাখেন। মাআরিফুল কুরআন জানায়, অনেক আলেম নারীর জন্য গায়রে মাহরাম পুরুষের দিকে তাকানো নিষেধ ধরেছেন, দলিল হিসেবে উম্মে সালামার বর্ণনা, যাকে তিরমিযী হাসান সহীহ বলেছেন, যেখানে নবী ﷺ অন্ধ সাহাবীকে আড়াল করতে বলেছিলেন। অন্যরা কামনাহীন দৃষ্টির অনুমতি দিয়েছেন, ভিত্তি সেই সহীহ বর্ণনা যেখানে আয়েশা (রাঃ) নবী ﷺ-এর পেছন থেকে হাবশীদের খেলা দেখছিলেন। সব পক্ষই একমত যে কামনামাখা দৃষ্টি নিষিদ্ধ। এ লেখা তাদের মধ্যে ফয়সালা করে না; আয়াতের নিজের ভার সংযমের ওপর, পাহারার ওপর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Except What Ordinarily Shows",
          "bn": "যা এমনিতেই প্রকাশ পায়"
        },
        "p": [
          {
            "en": "Wa-la yubdina zinatahunna illa ma zahara minha: and let them not display their adornment except what ordinarily appears of it. The clause turns on that last phrase, the single most debated point in the verse. At-Tabari lays the difference out fully. One group, headed by Ibn Mas'ud, took ma zahara to mean only the outer garment, the rida', the wrap a woman cannot hide when she goes out; al-Hasan and Ibrahim an-Nakha'i are named with him. The other, reported from Ibn Abbas through Sa'id ibn Jubayr, took it to mean the face and the hands.",
            "bn": "ওয়া লা ইউবদীনা যীনাতাহুন্না ইল্লা মা যাহারা মিনহা: আর তারা যেন তাদের শোভা প্রকাশ না করে, তবে যা এমনিতেই প্রকাশ পায় তা ছাড়া। বাক্যটির ভার ওই শেষ কথাটার ওপর, আর এটাই আয়াতের সবচেয়ে আলোচিত বিন্দু। তাবারী মতভেদটা পুরোপুরি খুলে বলেন। একটি দল, যার মাথায় ইবন মাসঊদ (রাঃ), মা যাহারা বলতে নিয়েছেন কেবল বাইরের পোশাক, রিদা, বেরোনোর সময় নারী যা লুকাতে পারে না; তাঁর সঙ্গে নাম আসে হাসান আর ইবরাহীম নাখঈর। অন্য দল, ইবন আব্বাস (রাঃ) থেকে সাঈদ ইবন জুবায়রের সূত্রে বর্ণিত, নিয়েছেন চেহারা ও দুই হাত।"
          },
          {
            "en": "At-Tabari, having weighed them, favoured the second: the words mean the face and the two hands, and into that he folds the kohl, the ring and the bracelet worn on them. Ibn Kathir carries the earlier reading from Ibn Mas'ud, that it is the clothes and outer garment, because that is what a woman genuinely cannot conceal. Ma'arif al-Qur'an frames the whole dispute as turning on whether the face and hands may be uncovered before non-mahram men, and reports the reconciling view of al-Baydawi and al-Khazin: the exception covers whatever uncovers of itself in a woman's ordinary work.",
            "bn": "তাবারী দুটো ওজন করে দ্বিতীয়টাকে প্রাধান্য দেন: শব্দগুলোর অর্থ চেহারা ও দুই হাত, আর এর ভেতরেই তিনি ধরেন সুরমা, আংটি ও হাতে পরা চুড়ি। ইবন কাসীর ইবন মাসঊদ (রাঃ)-এর প্রথম পাঠটি আনেন, যে এটা পোশাক ও বাইরের চাদর, কারণ ওটুকুই নারী সত্যিই লুকাতে পারে না। মাআরিফুল কুরআন গোটা বিতর্কটাকে দাঁড় করায় এ প্রশ্নে যে গায়রে মাহরাম পুরুষের সামনে চেহারা ও হাত খোলা রাখা যায় কিনা, আর আনে বায়দাবী ও খাযিনের মিলিয়ে-দেওয়া মত: কাজের মাঝে নারীর যা আপনা থেকেই খুলে যায়, ছাড়টুকু সেটাই ঢাকে।"
          },
          {
            "en": "Be honest about what this means for the reader. This is a place where sincere scholars, working from the same Arabic, reached different conclusions, and the tafsirs preserve the difference rather than erase it. This article follows them: it reports the range and does not rule that one reading is binding and the others closed. Ma'arif al-Qur'an itself adds that all agreed on one thing, that where uncovering the face invites fitna it is not allowed, and that a woman's prayer is valid with face and hands bare. Beyond that shared ground, the question stays where the mufassirun left it.",
            "bn": "পাঠকের জন্য এর মানে কী, সে ব্যাপারে সৎ থাকা দরকার। এটা এমন এক জায়গা যেখানে আন্তরিক আলেমরা একই আরবি থেকে ভিন্ন সিদ্ধান্তে পৌঁছেছেন, আর তাফসীরগুলো সেই মতভেদ মুছে না দিয়ে বরং ধরে রাখে। এ লেখা তাঁদের পথই ধরে: পরিসরটা জানায়, কোনো এক পাঠকে বাধ্যতামূলক আর বাকিগুলোকে বন্ধ ঘোষণা করে না। মাআরিফুল কুরআন নিজেই যোগ করে, একটি বিষয়ে সবাই একমত, যেখানে চেহারা খোলা ফিতনা ডেকে আনে সেখানে তা জায়েয নয়, আর নামাযে চেহারা-হাত খোলা থাকলেও নামায শুদ্ধ। এ সাঝা ভিতের বাইরে প্রশ্নটা সেখানেই থাকে যেখানে মুফাসসিরগণ রেখে গেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Drawing the Headcover Close",
          "bn": "মাথার কাপড় বুকের উপর"
        },
        "p": [
          {
            "en": "Wa-l-yadribna bi-khumurihinna 'ala juyubihinna: and let them draw their headcovers over their bosoms. Al-Qurtubi defines the words with care. The khimar, plural khumur, is what a woman covers her head with; the jayb, plural juyub, is the opening cut at the neck of the garment, over the chest. Before Islam, he records, women let the cover's ends fall behind them, leaving the neck and upper chest bare; the verse redirects that same cloth forward, so the chest opening is covered. Ma'arif al-Qur'an gives the identical picture from Ibn Jubayr.",
            "bn": "ওয়াল ইয়াদরিবনা বিখুমুরিহিন্না আলা জুয়ূবিহিন্না: আর তারা যেন তাদের মাথার কাপড় বুকের উপর টেনে দেয়। কুরতুবী শব্দগুলো যত্ন করে সংজ্ঞায়িত করেন। খিমার, বহুবচনে খুমুর, যা দিয়ে নারী মাথা ঢাকে; আর জায়ব, বহুবচনে জুয়ূব, পোশাকের গলার কাছে কাটা যে ফাঁক, বুকের উপর যেটা থাকে। তিনি লেখেন, ইসলামের আগে নারীরা কাপড়ের আঁচল পেছনে ফেলে রাখত, ফলে ঘাড় আর বুকের উপরটা খোলা থেকে যেত। আয়াতটি ওই একই কাপড় নিচের দিকে সামনে টেনে আনতে বলে, যাতে বুকের ফাঁকটা ঢাকা পড়ে। মাআরিফুল কুরআন ইবন জুবায়র থেকে হুবহু একই ছবি দেয়।"
          },
          {
            "en": "How the first believing women received this is itself part of the meaning, and it is warm, not stern. Al-Bukhari records from Safiyya bint Shayba that A'isha, may Allah be pleased with her, used to say: \"When this verse, and let them draw their headcovers over their bosoms, was revealed, they took their waist-sheets and cut them at the edges and covered themselves with them.\" The report is in Bukhari's own collection, so it is sound. The picture is of women who hurried to obey the very moment the command came.",
            "bn": "প্রথম মু’মিন নারীরা এটা কীভাবে গ্রহণ করলেন, সেটাও অর্থের অংশ, আর তা কঠোর নয়, উষ্ণ। বুখারী সাফিয়্যা বিনতে শায়বা থেকে বর্ণনা করেন যে আয়েশা (রাঃ) বলতেন: “যখন এ আয়াত, আর তারা যেন মাথার কাপড় বুকের উপর টেনে দেয়, নাযিল হলো, তখন তাঁরা নিজেদের কোমরের চাদর নিয়ে ধারের দিক থেকে চিরে সেগুলো দিয়ে নিজেদের ঢাকলেন।” বর্ণনাটি বুখারীর নিজের সংকলনে আছে, তাই তা সহীহ। ছবিটা এমন নারীদের, যাঁরা হুকুম আসার মুহূর্তেই ছুটে গেলেন তা মানতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Kept Nothing From",
          "bn": "যাদের থেকে আড়াল নেই"
        },
        "p": [
          {
            "en": "The verse then names those before whom a woman's adornment may appear: her husband, her father, her husband's father, her sons, her husband's sons, her brothers, her brothers' sons, her sisters' sons, her women, and those her right hand possesses. Ibn Kathir explains that these are her close relatives whom she may never marry, and adornment before them is permitted, though without wanton display. As-Sa'di notes that father takes in the grandfather however far up, and son the grandson however far down. Ma'arif al-Qur'an counts twelve exceptions in all and reads mahram here in its wide sense, husband included.",
            "bn": "এরপর আয়াত তাঁদের নাম করে যাঁদের সামনে নারীর শোভা প্রকাশ পেতে পারে: তার স্বামী, পিতা, শ্বশুর, ছেলে, স্বামীর ছেলে, ভাই, ভাইয়ের ছেলে, বোনের ছেলে, নিজেদের নারীরা, আর তার অধিকারভুক্ত দাসী। ইবন কাসীর ব্যাখ্যা করেন, এঁরা তার সেই ঘনিষ্ঠ আত্মীয় যাঁদের সঙ্গে বিয়ে কখনো হালাল নয়, আর তাঁদের সামনে শোভা প্রকাশ জায়েয, তবে বেপরোয়া প্রদর্শন ছাড়া। আস-সা’দী বলেন, পিতা শব্দে যত উপরের দাদা-পরদাদা সবাই আসেন, আর ছেলে শব্দে যত নিচের নাতি-পুতি সবাই। মাআরিফুল কুরআন মোট বারোটি ব্যতিক্রম গোনে, আর এখানে মাহরাম শব্দটাকে বিস্তৃত অর্থে নেয়, যাতে স্বামীও থাকেন।"
          },
          {
            "en": "The reasoning behind the list is gentle. Ma'arif al-Qur'an offers two grounds: these are men in whose hearts Allah has placed a natural honour for their close kinswomen, so no mischief is feared, and they share a household, where constant hiding would be a hardship. There is a telling omission. Ibn Kathir records from Ikrima that the uncle is not named, lest he describe a woman to his own son, so a woman need not uncover before him as before a father. The verse's care reaches even into who goes unmentioned.",
            "bn": "তালিকার পেছনের যুক্তিটা কোমল। মাআরিফুল কুরআন দুটি কারণ দেয়: এঁরা সেই পুরুষ যাঁদের অন্তরে আল্লাহ ঘনিষ্ঠ নারী-আত্মীয়দের প্রতি স্বাভাবিক সম্মান রেখেছেন, তাই তাঁদের থেকে অঘটনের ভয় নেই; আর এঁরা একই ঘরে থাকেন, যেখানে সারাক্ষণ আড়াল করা কষ্টকর হতো। একটি অর্থবহ বাদ-পড়াও আছে। ইবন কাসীর ইকরিমা থেকে আনেন যে চাচা-মামার নাম নেওয়া হয়নি, পাছে কেউ তার নিজের ছেলের কাছে নারীর বর্ণনা দিয়ে বসেন; তাই পিতার সামনে যেভাবে, তাঁদের সামনে নারীকে সেভাবে খোলা থাকতে হয় না। আয়াতের যত্ন পৌঁছে যায় কার নাম বলা হলো না, সেখানেও।"
          }
        ]
      },
      {
        "h": {
          "en": "Attendants and Small Children",
          "bn": "পরিচারক ও ছোট শিশু"
        },
        "p": [
          {
            "en": "Two further groups are named, and both need a sober gloss. The first is at-tabi'in ghayri uli al-irba mina r-rijal, male attendants having no desire. Ibn Kathir reports from Ibn Abbas that this means a man who has no interest in women, and as-Sa'di describes such a one as feeble-minded or without any remaining inclination in body or heart. Ma'arif al-Qur'an is careful to add the qualification the scholars insisted on: the exception holds only for the man genuinely without such interest, and a woman keeps her covering before any man who does take notice.",
            "bn": "আরও দুটি দল নাম পায়, আর দুটোরই একটি সংযত ব্যাখ্যা দরকার। প্রথমটি আত-তাবিঈন গায়রি উলিল ইরবাতি মিনার রিজাল, পুরুষদের মধ্যে সেই পরিচারক যাদের কামনা নেই। ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে আনেন যে এর মানে এমন পুরুষ যার নারীর প্রতি কোনো আগ্রহ নেই, আর আস-সা’দী এমন লোককে বলেন বুদ্ধিহীন কিংবা যার দেহে-মনে কোনো ঝোঁক অবশিষ্ট নেই। মাআরিফুল কুরআন সাবধানে সেই শর্তটি যোগ করে যা আলেমরা জোর দিয়েছেন: ছাড় কেবল সেই পুরুষের বেলায় যার সত্যিই এমন আগ্রহ নেই, আর যে পুরুষ খেয়াল করে তার সামনে নারী তার আবরণ রাখেন।"
          },
          {
            "en": "The second is at-tifl alladhina lam yazharu 'ala 'awrati n-nisa', children not yet aware of the private aspects of women. Ibn Kathir explains this of the young child who understands nothing of women or their ways, and adds that once a boy nears the age of noticing, a woman covers before him as before a man. As-Sa'di reads it of the child below the age of discernment, for they have no knowledge of this and no desire has yet arisen in them. The line is read plainly, as the tafsirs read it, and nothing more is pressed from it.",
            "bn": "দ্বিতীয়টি আত-তিফলুল্লাযীনা লাম ইয়াযহারূ আলা আওরাতিন নিসা, সেই শিশু যারা নারীদের গোপন দিক সম্পর্কে এখনো অজ্ঞ। ইবন কাসীর এর ব্যাখ্যা করেন সেই ছোট শিশুকে দিয়ে যে নারী বা তাদের ধরন সম্পর্কে কিছুই বোঝে না, আর যোগ করেন যে ছেলে এসব খেয়াল করার বয়সের কাছে পৌঁছালে নারী তার সামনে পুরুষের মতোই আবরণ রাখেন। আস-সা’দী এটাকে নেন বিবেচনার বয়সের নিচের শিশু হিসেবে, কারণ এ বিষয়ে তাদের জ্ঞান নেই আর তাদের মধ্যে এখনো কোনো কামনা জাগেনি। লাইনটি সোজাভাবেই পড়া হয়, যেভাবে তাফসীরগুলো পড়ে, এর বেশি কিছু এখান থেকে টেনে বার করা হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Even the Anklet's Ring",
          "bn": "নূপুরের শব্দটুকুও নয়"
        },
        "p": [
          {
            "en": "Wa-la yadribna bi-arjulihinna li-yu'lama ma yukhfina min zinatihinna: and let them not stamp their feet to make known what they conceal of their adornment. Ibn Kathir explains that women once wore anklets no one could hear, and would stamp so that the ringing reached men's ears; the verse forbids that, and with it any movement that puts a hidden adornment on display. What is striking is the reach of the command. It guards not a sight but a sound, an ornament that stays covered and is betrayed only by a deliberate step.",
            "bn": "ওয়া লা ইয়াদরিবনা বিআরজুলিহিন্না লিইউ’লামা মা ইউখফীনা মিন যীনাতিহিন্না: আর তারা যেন পা ঠুকে না চলে, যাতে তাদের লুকানো শোভা জানাজানি হয়। ইবন কাসীর ব্যাখ্যা করেন, নারীরা একসময় এমন নূপুর পরত যার শব্দ কেউ শুনত না, আর তারা পা ঠুকত যাতে ওই শব্দ পুরুষের কানে পৌঁছায়; আয়াত তা নিষেধ করে, আর সঙ্গে সেই যেকোনো নড়াচড়া যা লুকানো শোভাকে প্রকাশ করে দেয়। যা নজর কাড়ে তা হলো আদেশের নাগাল। এ কোনো দৃশ্য নয়, একটি শব্দকেই হেফাজত করে, এমন গয়না যা ঢাকা থাকে আর কেবল একটি ইচ্ছাকৃত পদক্ষেপে ধরা পড়ে।"
          },
          {
            "en": "From this small clause as-Sa'di draws a large principle. Stamping the foot is in itself permitted, he says, yet because here it becomes a means to something forbidden, it is itself forbidden; and from cases like it the scholars derived the rule of sadd adh-dhara'i, blocking the paths to harm, so a lawful act that reliably opens onto an unlawful one is closed off. Read as it was meant, it is a merciful logic, a fence a person sets around their own heart, not a warrant to hunt for hidden faults in anyone else.",
            "bn": "এ ছোট্ট বাক্য থেকে আস-সা’দী একটি বড় নীতি বের করেন। পা ঠোকা নিজে একটি জায়েয কাজ, তিনি বলেন, তবু যেহেতু এখানে তা এক নিষিদ্ধ জিনিসের মাধ্যম হয়ে দাঁড়ায়, সেহেতু তা নিজেই নিষিদ্ধ হয়ে যায়; আর এমন সব বেলা থেকেই আলেমরা টেনেছেন সাদ্দুয যারাইর নীতি, ক্ষতির দিকে যাওয়া পথগুলো বন্ধ করা, যাতে যে হালাল কাজ নিশ্চিতভাবে হারামের দরজা খুলে দেয় তা আটকে দেওয়া হয়। ঠিক যেভাবে বোঝানো হয়েছে সেভাবে পড়লে এ এক দয়ার যুক্তি, মানুষ নিজের অন্তরের চারপাশে যে বেড়া দেয়, অন্যের লুকানো দোষ খুঁজে বেড়ানোর ছাড়পত্র নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning Back, All of You",
          "bn": "সবাই ফিরুন আল্লাহর দিকে"
        },
        "p": [
          {
            "en": "Wa-tubu ila-llahi jami'an ayyuha l-mu'minuna la'allakum tuflihun: and turn to Allah in repentance, all of you, O believers, that you may succeed. As-Sa'di draws out how much this ending shifts the tone. After a stretch of detailed commands, Allah seals them not with a threat but with a call to return, addressing all the believers, men and women together, so no one is left standing as judge over another. As-Sa'di reads it plainly: every believer needs this turning, and success is tied to it, there being no path to falah except through tawba.",
            "bn": "ওয়া তূবূ ইলাল্লাহি জামীআন আইয়ুহাল মু’মিনূনা লাআল্লাকুম তুফলিহূন: আর হে মু’মিনগণ, তোমরা সবাই আল্লাহর দিকে ফিরে এসো, যাতে তোমরা সফল হও। আস-সা’দী দেখান, এই সমাপ্তি সুরটা কতটা বদলে দেয়। বিস্তারিত আদেশের একটি ধারার পর আল্লাহ তা কোনো শাসানি দিয়ে সিল করেন না, বরং ফিরে আসার ডাক দিয়ে; আর তিনি সম্বোধন করেন সব মু’মিনকে, নারী-পুরুষ একসঙ্গে, যাতে একজনও অন্যের বিচারক হয়ে দাঁড়িয়ে না থাকে। আস-সা’দী সোজা করেই পড়েন: প্রতিটি মু’মিনের এই ফেরা দরকার, আর সফলতা এর সঙ্গেই বাঁধা, তওবা ছাড়া ফালাহর আর কোনো পথ নেই।"
          },
          {
            "en": "That inward, hopeful close should govern how the whole verse is used. Its address is to the believing woman's own consciousness of God, to the guarding she chooses for herself; it is guidance held out in trust, not a rod put in anyone's hand. It licenses nothing against any woman. It gives nobody the authority to compel her, to shame her, or to police her in God's name, for the verse turns everyone, the would-be enforcer first, back to their own repentance before Allah. A command God directed to a person's heart is disfigured the moment it is made a weapon against another.",
            "bn": "এই ভেতরমুখী, আশা-জাগানো সমাপ্তিই ঠিক করে দেয় গোটা আয়াত কীভাবে ব্যবহার হবে। এর সম্বোধন মু’মিন নারীর নিজের আল্লাহ-সচেতনতার প্রতি, সে নিজের জন্য যে হেফাজত বেছে নেয় তার প্রতি; এ আমানত হিসেবে বাড়িয়ে দেওয়া পথনির্দেশ, কারও হাতে তুলে দেওয়া লাঠি নয়। এটি কোনো নারীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। কাউকে অধিকার দেয় না তাকে জোর করার, লজ্জা দেওয়ার, কিংবা আল্লাহর নামে তাকে পাহারা দেওয়ার, কারণ আয়াত সবাইকে, আগে সেই জবরদস্তিকারীকেই, ফিরিয়ে দেয় আল্লাহর সামনে নিজের তওবার দিকে। মানুষের অন্তরের উদ্দেশে দেওয়া আল্লাহর আদেশ বিকৃত হয়ে যায় ঠিক সেই মুহূর্তে, যখন তা অন্যের বিরুদ্ধে অস্ত্র বানানো হয়।"
          },
          {
            "en": "So the verse ends where it began, as a shared trust. It opened as the counterpart of the charge to the men, and closes by folding men and women back into one address before their Lord. Between the two stands a body of guidance, some agreed, some left open by the very scholars who knew it best. What is not left open is the spirit of the last line: dignity, warmth and hope, a door held open for everyone to walk through toward Allah. The reader is invited to be one of those who walk through it.",
            "bn": "তাই আয়াত শেষ হয় সেখানেই, যেখানে শুরু হয়েছিল, এক সাঝা আমানত হয়ে। এর শুরু ছিল পুরুষদের প্রতি আদেশের যমজ হিসেবে, আর শেষ হয় নারী-পুরুষকে তাদের রবের সামনে একটি সম্বোধনে গুটিয়ে এনে। দুইয়ের মাঝে দাঁড়িয়ে আছে একরাশ পথনির্দেশ, কিছু সর্বসম্মত, কিছু খোলা রেখে গেছেন সেই আলেমরাই যাঁরা তা সবচেয়ে ভালো জানতেন। যা খোলা রাখা হয়নি তা হলো শেষ লাইনের চেতনা: মর্যাদা, উষ্ণতা আর আশা, সবার জন্য আল্লাহর দিকে হেঁটে যাওয়ার একটি খোলা দরজা। পাঠককে ডাকা হচ্ছে সেই দরজা দিয়ে হেঁটে যাওয়া মানুষদের একজন হতে।"
          }
        ]
      }
    ]
  },
  "24:35": {
    "sections": [
      {
        "h": {
          "en": "Light and Its Similitude",
          "bn": "নূর ও তার উপমা"
        },
        "p": [
          {
            "en": "The verse opens with a statement, Allahu nurus-samawati wal-ard, Allah is the Light of the heavens and the earth. The commentators most commonly explain this as meaning that He is the one who illuminates them and guides whoever is in them, since He is not a created light among lights. Then the second sentence changes register entirely: mathalu nurihi, the likeness of His light. From here on the verse is openly a similitude.",
            "bn": "আয়াতটি শুরু হয় একটি ঘোষণা দিয়ে: আল্লাহু নূরুস সামাওয়াতি ওয়াল আরদ — আল্লাহ আসমান ও যমীনের নূর। মুফাসসিরগণ সবচেয়ে বেশি যে ব্যাখ্যা দেন তা হলো, তিনিই এগুলোকে আলোকিত করেন এবং এর ভেতরে যারা আছে তাদের পথ দেখান; কারণ তিনি আলোকসমূহের ভেতরে সৃষ্ট কোনো আলো নন। এরপর দ্বিতীয় বাক্যটি সুরটাই বদলে দেয়: মাসালু নূরিহি — তাঁর নূরের উপমা। এখান থেকেই আয়াতটি প্রকাশ্যে একটি উপমা।"
          },
          {
            "en": "That distinction is doing real work. What is being pictured is the likeness of His light, not His essence, and the verse itself confirms the genre at the end: and Allah presents examples for the people. Sound exegesis stays inside that frame. Systems built on this verse that treat its objects as coded stages of an inner journey go well past what the Arabic supports, and the mainstream commentators did not read it that way.",
            "bn": "এই পার্থক্যটি সত্যিকারের কাজ করছে। যা চিত্রিত হচ্ছে তা তাঁর নূরের উপমা — তাঁর সত্তা নয়; আর আয়াত নিজেই শেষে এই ধরনটি নিশ্চিত করে: আর আল্লাহ মানুষের জন্য উপমা পেশ করেন। সঠিক তাফসীর এই কাঠামোর ভেতরেই থাকে। এই আয়াতের বস্তুগুলোকে কোনো অন্তর্যাত্রার সাংকেতিক স্তর ধরে যেসব ব্যবস্থা গড়ে তোলা হয়েছে, তা আরবি ভাষা যা সমর্থন করে তার অনেক বাইরে চলে যায়; মূলধারার মুফাসসিরগণ একে সেভাবে পড়েননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Niche, Lamp, Glass, Oil",
          "bn": "তাক, প্রদীপ, কাঁচ, তেল"
        },
        "p": [
          {
            "en": "Each element is chosen for a reason. The mishkah is a recess in a wall with no opening through it, so light gathers instead of dispersing. Inside it is a misbah, a lamp, and the lamp sits in a zujajah, glass, described as though it were a brilliant star, since clear glass both protects the flame and multiplies it. Nothing here is decorative; every part improves the light.",
            "bn": "প্রতিটি উপাদান একটি কারণেই বেছে নেওয়া। 'মিশকাত' হলো দেয়ালের এমন এক কুলুঙ্গি যার ভেতর দিয়ে কোনো ফাঁক নেই, ফলে আলো ছড়িয়ে না গিয়ে জমা হয়। তার ভেতরে থাকে 'মিসবাহ' — প্রদীপ; আর প্রদীপটি থাকে 'যুজাজাহ' — কাঁচের ভেতরে, যাকে বর্ণনা করা হয়েছে উজ্জ্বল তারার মতো, কারণ স্বচ্ছ কাঁচ একদিকে শিখাকে রক্ষা করে, অন্যদিকে তা বাড়িয়েও দেয়। এখানে কিছুই কেবল অলংকরণ নয়; প্রতিটি অংশই আলোকে উন্নত করে।"
          },
          {
            "en": "The lamp is fed from a blessed olive tree, neither of the east nor of the west. The commentators explain this as a tree standing where the sun reaches it through the whole day, so its fruit ripens fully and its oil is of the finest grade. Then the striking clause: its oil almost gives light though no fire has touched it. Purity so complete that it is nearly luminous before it is even lit.",
            "bn": "প্রদীপটিতে তেল আসে এক বরকতময় জয়তুন গাছ থেকে, যা পূর্বেরও নয় পশ্চিমেরও নয়। মুফাসসিরগণ ব্যাখ্যা করেন, এটি এমন এক গাছ যার ওপর সারাদিনই সূর্যের আলো পড়ে, ফলে তার ফল পূর্ণরূপে পাকে এবং তেল হয় সর্বোৎকৃষ্ট মানের। এরপর আসে চমকপ্রদ বাক্যটি: আগুন স্পর্শ না করলেও তার তেল যেন আলো দিতে চায়। এমন সম্পূর্ণ বিশুদ্ধতা, যা জ্বালানোর আগেই প্রায় আলোকিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Light Upon Light",
          "bn": "নূরের উপর নূর"
        },
        "p": [
          {
            "en": "Nurun 'ala nur, light upon light, gathers the whole image. The commentators most often read the similitude as describing the light of faith and guidance placed in the heart of the believer, and this reading is related from a number of the early authorities. Others apply it to the Quran, or to the Prophet ﷺ as the one through whom guidance reached people. These readings are complementary rather than competing.",
            "bn": "'নূরুন আলা নূর' — নূরের ওপর নূর — গোটা চিত্রটিকে একত্র করে। মুফাসসিরগণ সবচেয়ে বেশি এই উপমাটিকে পড়েন মুমিনের হৃদয়ে স্থাপিত ঈমান ও হিদায়াতের আলোর বর্ণনা হিসেবে, আর এই পাঠটি প্রাচীন যুগের একাধিক কর্তৃপক্ষ থেকে বর্ণিত। কেউ কেউ একে প্রয়োগ করেন কুরআনের ওপর, কেউবা নবী ﷺ-এর ওপর, যাঁর মাধ্যমে হিদায়াত মানুষের কাছে পৌঁছেছে। এই পাঠগুলো পরস্পরবিরোধী নয়, বরং পরস্পরের পরিপূরক।"
          },
          {
            "en": "The verse then removes any suggestion that the light can be seized: Allah guides to His light whom He wills. The commentators pair this with the many verses making guidance follow a person's turning, such as 29:69, so that divine choice and human effort are not set against each other. The closing words, and Allah is Knowing of all things, keep the giving of light within His knowledge rather than within our claims about who deserves it.",
            "bn": "এরপর আয়াতটি এমন যেকোনো ইঙ্গিত সরিয়ে দেয় যে এই আলো ছিনিয়ে নেওয়া যায়: আল্লাহ যাকে চান তাঁর নূরের দিকে পথ দেখান। মুফাসসিরগণ এর সঙ্গে মেলান সেসব আয়াত, যেখানে হিদায়াত মানুষের ফিরে আসার পরে আসে — যেমন 29:69 — যাতে ঐশী ইচ্ছা ও মানবিক প্রচেষ্টাকে পরস্পরের বিরুদ্ধে দাঁড় করানো না হয়। শেষ বাক্যটি — আর আল্লাহ সবকিছু সম্পর্কে জ্ঞানী — আলো দান করাকে তাঁর জ্ঞানের ভেতরেই রাখে, কে তার যোগ্য সে বিষয়ে আমাদের দাবির ভেতরে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Lamp Is Kept",
          "bn": "প্রদীপ যেখানে রাখা"
        },
        "p": [
          {
            "en": "The verses on either side explain what this image is doing in Surah an-Nur, a surah otherwise occupied with slander, evidence, modesty and the manners of entering homes. Immediately after, 24:36-37 describes houses which Allah has permitted to be raised and His name remembered in them, where men glorify Him morning and evening whom neither trade nor sale distracts from the remembrance of Allah.",
            "bn": "দুই পাশের আয়াতগুলোই ব্যাখ্যা করে সূরা আন-নূরে এই চিত্রকল্পটি কী করছে — এমন এক সূরা, যার বাকি অংশ অপবাদ, সাক্ষ্য, শালীনতা ও ঘরে প্রবেশের আদব নিয়ে ব্যস্ত। ঠিক পরেই 24:36-37 বর্ণনা করে সেসব ঘরের কথা, যেগুলোকে উঁচু করতে ও যেখানে তাঁর নাম স্মরণ করতে আল্লাহ অনুমতি দিয়েছেন; সেখানে সকাল-সন্ধ্যা তাঁর মহিমা ঘোষণা করে এমন সব মানুষ, যাদের ব্যবসা বা কেনাবেচা আল্লাহর স্মরণ থেকে গাফিল করে না।"
          },
          {
            "en": "Then come two contrasting parables, in 24:39-40: the deeds of the disbelievers as a mirage in a plain that a thirsty man takes for water, and as darknesses layered over one another in a deep sea, so that a man can hardly see his own hand. Placed together, the three images set out the choice the surah has been building toward: gathered light, or layered dark.",
            "bn": "এরপর আসে দুটি বিপরীত উপমা, 24:39-40-এ: অস্বীকারকারীদের আমল যেন মরুপ্রান্তরে মরীচিকা, যাকে তৃষ্ণার্ত মানুষ পানি মনে করে; আর যেন গভীর সমুদ্রে একের ওপর এক জমা অন্ধকার, যেখানে মানুষ নিজের হাতটুকুও দেখতে পায় না। একসঙ্গে রাখলে এই তিনটি চিত্র সেই নির্বাচনটিই সামনে আনে, যার দিকে সূরাটি এগোচ্ছিল: জমা হওয়া আলো, নাকি স্তরে স্তরে অন্ধকার।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prayer for Light",
          "bn": "নূরের দোয়া"
        },
        "p": [
          {
            "en": "The most direct link between this verse and practice is a supplication preserved in al-Bukhari and Muslim, said by the Prophet ﷺ as he went out to the mosque: O Allah, place light in my heart, and light in my hearing, and light in my sight, and light on my right and on my left, and before me and behind me, and make light for me. The narrations list the limbs one by one.",
            "bn": "এই আয়াত ও আমলের মধ্যে সবচেয়ে সরাসরি সংযোগ হলো বুখারী ও মুসলিমে সংরক্ষিত একটি দোয়া, যা নবী ﷺ মসজিদের দিকে বের হওয়ার সময় পড়তেন: হে আল্লাহ, আমার হৃদয়ে নূর দিন, আমার শ্রবণে নূর দিন, আমার দৃষ্টিতে নূর দিন, আমার ডানে ও বামে নূর দিন, আমার সামনে ও পেছনে নূর দিন, আর আমার জন্য নূর করে দিন। বর্ণনাগুলোতে অঙ্গপ্রত্যঙ্গের নাম একে একে উল্লেখ করা হয়েছে।"
          },
          {
            "en": "The supplication treats light as something asked for repeatedly rather than acquired once. It also spreads it across the senses and directions, which fits the verse's picture of light gathered and multiplied rather than a single flame. A believer who says this on the way to fajr is doing with words exactly what the similitude does with images.",
            "bn": "এই দোয়া নূরকে একবার অর্জন করে ফেলার মতো কিছু নয়, বরং বারবার চাওয়ার মতো কিছু হিসেবেই দেখে। আর এটি নূরকে ছড়িয়ে দেয় ইন্দ্রিয় ও দিকগুলোর ওপর, যা আয়াতের সেই চিত্রের সঙ্গে মেলে যেখানে আলো একটি একক শিখা নয়, বরং জমা হওয়া ও বহুগুণিত। যে মুমিন ফজরের পথে এই দোয়া পড়েন, তিনি শব্দ দিয়ে ঠিক তা-ই করছেন যা উপমাটি চিত্র দিয়ে করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping the Glass Clear",
          "bn": "কাঁচটি স্বচ্ছ রাখা"
        },
        "p": [
          {
            "en": "Read as guidance in the heart, the parable suggests a few plain questions. Is there a source, meaning regular contact with the Quran, or is the lamp running on memory? Is the glass clear, meaning is what I do in private consistent with what I show, since anything that clouds the glass dims the same flame. Is the light gathered anywhere, or scattered across a hundred half-commitments.",
            "bn": "হৃদয়ের হিদায়াত হিসেবে পড়লে এই উপমা কয়েকটি সরল প্রশ্ন সামনে আনে। কোনো উৎস কি আছে — অর্থাৎ কুরআনের সঙ্গে নিয়মিত সংযোগ — নাকি প্রদীপটি কেবল স্মৃতির ওপর চলছে? কাঁচটি কি স্বচ্ছ — অর্থাৎ আমি একান্তে যা করি তা কি আমি যা দেখাই তার সঙ্গে মেলে? কারণ যা কিছু কাঁচকে ঘোলা করে, তা একই শিখাকে ম্লান করে দেয়। আর আলো কি কোথাও জমা হচ্ছে, নাকি শতেক আধা-প্রতিশ্রুতিতে ছড়িয়ে যাচ্ছে?"
          },
          {
            "en": "The most useful feature of the image is that light is not manufactured by the glass. The glass only keeps it safe and lets it through. That takes the weight off performance and puts it on maintenance, which is the ordinary work of prayer on time, recitation that continues, company that helps and sins left behind. Ask for the light in the words the Prophet ﷺ used, and keep the glass clean enough to hold it.",
            "bn": "এই চিত্রকল্পের সবচেয়ে কাজের দিকটি হলো, আলো কাঁচ তৈরি করে না। কাঁচ কেবল তাকে নিরাপদ রাখে এবং তাকে পার হতে দেয়। এতে ভারটি সরে যায় কৃতিত্ব থেকে রক্ষণাবেক্ষণের দিকে — অর্থাৎ সময়মতো নামায, চালিয়ে যাওয়া তিলাওয়াত, সহায়ক সঙ্গ আর পেছনে ফেলে আসা পাপ, এই সাধারণ কাজগুলোর দিকে। নবী ﷺ যে শব্দে চেয়েছেন সেই শব্দেই নূর চান, আর কাঁচটি এতটা পরিষ্কার রাখুন যেন তা সেই নূর ধরে রাখতে পারে।"
          }
        ]
      }
    ]
  },
  "24:39": {
    "sections": [
      {
        "h": {
          "en": "The Other Half of the Picture",
          "bn": "ছবিটির অন্য অর্ধেক"
        },
        "p": [
          {
            "en": "Surah an-Nur has been building an image of light. 24:35 gives the lamp in the niche, and 24:36-38 show where such light is kept: houses Allah has permitted to be raised and His name remembered in them, men whom neither commerce nor sale distracts from His remembrance, and the reward He gives them. Then the sentence turns: and those who disbelieved, their deeds are like a mirage in a level plain.",
            "bn": "সূরা আন-নূর ধীরে ধীরে আলোর একটি ছবি গড়ে তুলছিল। 24:35 দেয় তাকের ভেতরের প্রদীপটি, আর 24:36-38 দেখায় এমন আলো কোথায় রাখা হয়: সেই ঘরগুলোতে যেগুলো উঁচু করতে ও যেগুলোতে তাঁর নাম স্মরণ করতে আল্লাহ অনুমতি দিয়েছেন, সেই মানুষদের মধ্যে যাদের ব্যবসা-বাণিজ্য তাঁর স্মরণ থেকে বিরত রাখে না, আর তিনি তাদের যে প্রতিদান দেন তাতে। এরপর বাক্যটি মোড় নেয়: আর যারা কুফরি করেছে, তাদের কাজকর্ম সমতল প্রান্তরের মরীচিকার মতো।"
          },
          {
            "en": "The contrast is precisely built. The men in 24:37 are described by what does not distract them; the man here is described entirely by his motion toward something. One picture shows light kept somewhere and tended, the other shows light misread at a distance. Both are about seeing, which is what the whole surah is about, and only one of the two people in them arrives anywhere at all.",
            "bn": "বৈসাদৃশ্যটি নিখুঁতভাবে গড়া। 24:37-এর মানুষদের বর্ণনা করা হয়েছে কী তাদের বিরত রাখে না তা দিয়ে; আর এখানকার মানুষটির বর্ণনা পুরোটাই কোনো কিছুর দিকে তার ছুটে চলা দিয়ে। একটি ছবিতে আলো কোথাও রাখা ও যত্নে লালিত, অন্যটিতে দূর থেকে আলোকে ভুল পড়া হয়েছে। দুটিই দেখা নিয়ে — যা গোটা সূরার বিষয় — আর এই দুজনের মধ্যে মাত্র একজনই কোথাও পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Sarab bi-Qi'ah",
          "bn": "সারাব বি-কীআহ"
        },
        "p": [
          {
            "en": "Sarab is the mirage, and qi'ah, Ibn Kathir explains, is a wide flat level tract of ground — the terrain that makes the illusion possible in the first place. The word qi'ah occurs only here in the Quran. Sarab occurs in one other verse: 78:20 says that the mountains are set moving and become a mirage. The Quran's only other use of the word is of mountains turning into one.",
            "bn": "'সারাব' মানে মরীচিকা; আর 'কীআহ', ইবনে কাসীরের ব্যাখ্যায়, হলো প্রশস্ত সমতল ভূমি — যে ভূপ্রকৃতি প্রথমেই এই ভ্রমটিকে সম্ভব করে তোলে। 'কীআহ' শব্দটি কুরআনে কেবল এখানেই এসেছে। 'সারাব' এসেছে আর একটি আয়াতে: 78:20 বলে, পাহাড়গুলোকে চালিত করা হবে, ফলে সেগুলো মরীচিকা হয়ে যাবে। কুরআনে এই শব্দের একমাত্র অন্য ব্যবহারটি পাহাড়ের মরীচিকা হয়ে যাওয়া নিয়েই।"
          },
          {
            "en": "The choice of a mirage rather than, say, a ruin or an ash-heap matters. A ruin announces itself. A mirage is at its most convincing while it is still far off and most useful to believe in, and it fails only on arrival, when there is no time and no water left to try anything else. Nothing about the traveller's effort was wrong. Everything about the object was.",
            "bn": "ধ্বংসস্তূপ বা ছাইয়ের গাদা না বেছে মরীচিকা বেছে নেওয়াটা তাৎপর্যপূর্ণ। ধ্বংসস্তূপ নিজেই নিজের পরিচয় দিয়ে দেয়। মরীচিকা সবচেয়ে বিশ্বাসযোগ্য থাকে তখনই, যখন তা এখনো বহু দূরে এবং যখন তাতে বিশ্বাস রাখাই সবচেয়ে কাজে লাগে; আর তা ব্যর্থ হয় কেবল পৌঁছানোর মুহূর্তে, যখন অন্য কিছু চেষ্টা করার মতো সময়ও নেই, পানিও নেই। পথিকের পরিশ্রমে কোনো ভুল ছিল না। ভুল ছিল লক্ষ্যবস্তুর সবকিছুতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Thirsty One",
          "bn": "তৃষ্ণার্ত মানুষটি"
        },
        "p": [
          {
            "en": "The verse names the man az-zam'an, the thirsty one, a word that occurs nowhere else in the Quran. The detail is deliberate. A mirage does not deceive a person sitting in the shade with a full flask; it works on the one who needs water and is looking for it. The parable is therefore not about laziness at all. It is about sincere effort attached to the wrong object.",
            "bn": "আয়াতটি মানুষটিকে ডাকে 'আয-যামআন' — তৃষ্ণার্ত ব্যক্তি; শব্দটি কুরআনে আর কোথাও আসেনি। এই খুঁটিনাটিটি ইচ্ছাকৃত। ছায়ায় বসে থাকা, ভরা পানির পাত্র হাতে থাকা মানুষকে মরীচিকা ধোঁকা দেয় না; এটি কাজ করে তারই ওপর, যার পানি দরকার এবং যে পানি খুঁজছে। তাই উপমাটি মোটেই আলস্য নিয়ে নয়। এটি ভুল লক্ষ্যবস্তুর সঙ্গে জুড়ে যাওয়া আন্তরিক পরিশ্রম নিয়ে।"
          },
          {
            "en": "Ibn Kathir reads this first parable as being about the disbeliever who calls others to his disbelief and believes he has good deeds and sound beliefs when in fact he has not. He also names the two ways a deed can fail on that Day: an absence of sincere belief, or a manner of acting that never followed what was legislated. Either leaves the effort untouched and the object empty.",
            "bn": "ইবনে কাসীর এই প্রথম উপমাটিকে পড়েন সেই কাফিরের বর্ণনা হিসেবে, যে অন্যদেরও নিজের কুফরির দিকে ডাকে এবং মনে করে তার ভালো আমল ও সঠিক বিশ্বাস আছে, অথচ বাস্তবে তা নেই। তিনি সেদিন একটি আমল ব্যর্থ হওয়ার দুটি পথও উল্লেখ করেন: আন্তরিক ঈমানের অনুপস্থিতি, কিংবা এমন পদ্ধতিতে কাজ করা যা কখনো শরীয়তের নির্ধারিত পথ অনুসরণ করেনি। দুটির যেকোনোটিই পরিশ্রমকে অক্ষত রাখে আর লক্ষ্যবস্তুকে শূন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "He Did Not Find Nothing",
          "bn": "সে শূন্যতা পায়নি"
        },
        "p": [
          {
            "en": "Then the parable breaks its own frame. He comes to it and does not find it to be anything, and he finds Allah there, who pays him his account in full; and Allah is swift in account. A mirage story ought to end in hot sand. This one ends with Someone waiting. The emptiness is not itself the punishment; it is the discovery that clears the ground for the reckoning which follows it.",
            "bn": "এরপর উপমাটি নিজের কাঠামোই ভেঙে দেয়। সে তার কাছে পৌঁছে দেখে ওটা কিছুই নয়, আর সেখানে সে পায় আল্লাহকে, যিনি তার হিসাব পুরোপুরি চুকিয়ে দেন; আর আল্লাহ দ্রুত হিসাব গ্রহণকারী। মরীচিকার গল্প শেষ হওয়ার কথা ছিল উত্তপ্ত বালুতে। এটি শেষ হয় অপেক্ষারত একজনকে দিয়ে। শূন্যতাটাই শাস্তি নয়; এটি সেই আবিষ্কার যা তার পরের হিসাব-নিকাশের জন্য জায়গা খালি করে দেয়।"
          },
          {
            "en": "The Quran says the same thing without the image in several places. 18:104 describes those whose effort in the worldly life is lost while they think they are doing well in work, and 18:105 explains that their deeds became worthless. 25:23 says Allah will turn to what they did of deeds and make them scattered dust; Ibn Kathir cites that verse here. 14:18 gives ashes blown about on a stormy day.",
            "bn": "কুরআন একই কথা ছবি ছাড়াই বলেছে আরও কয়েক জায়গায়। 18:104 বর্ণনা করে তাদের, দুনিয়ার জীবনে যাদের সব পরিশ্রম বৃথা গেছে অথচ তারা মনে করে তারা ভালোই কাজ করছে; আর 18:105 ব্যাখ্যা করে যে তাদের আমল নিষ্ফল হয়ে গেছে। 25:23 বলে, তারা যেসব আমল করেছে আল্লাহ সেদিকে অগ্রসর হয়ে সেগুলোকে বিক্ষিপ্ত ধূলিকণা বানিয়ে দেবেন; ইবনে কাসীর এখানে এই আয়াতটিই উদ্ধৃত করেন। 14:18 দেয় ঝড়ের দিনে উড়ে যাওয়া ছাইয়ের ছবি।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Same as 24:40",
          "bn": "24:40-এর মতো নয়"
        },
        "p": [
          {
            "en": "The next verse gives a second parable, and the two are often run together. They should not be. 24:40 pictures darknesses in a deep sea, waves over waves with clouds above them, so that a man stretching out his hand can hardly see it. Ibn Kathir separates them carefully: the mirage is for the one whose ignorance is compound, the darkness for the one whose ignorance is simple.",
            "bn": "পরের আয়াতটি দ্বিতীয় একটি উপমা দেয়, আর দুটিকে প্রায়ই একসঙ্গে মিশিয়ে ফেলা হয়। তা করা উচিত নয়। 24:40 আঁকে গভীর সমুদ্রের অন্ধকার — ঢেউয়ের ওপর ঢেউ, তার ওপরে মেঘ; ফলে কেউ হাত বের করলে তা প্রায় দেখতেই পায় না। ইবনে কাসীর দুটিকে সাবধানে আলাদা করেন: মরীচিকা তার জন্য যার অজ্ঞতা যৌগিক, আর অন্ধকার তার জন্য যার অজ্ঞতা সরল।"
          }
        ]
      },
      {
        "h": {
          "en": "Testing at a Distance",
          "bn": "দূর থেকেই পরীক্ষা করা"
        },
        "p": [
          {
            "en": "The practical difficulty the parable identifies is timing. A mirage cannot be told apart from water at the distance where the decision to walk toward it is made; it can only be told apart on arrival, when nothing can be done about it. So the test has to be run early and deliberately, on deeds that still have years left in them, and never at the moment of need.",
            "bn": "উপমাটি যে ব্যবহারিক সমস্যাটি চিহ্নিত করে তা হলো সময়। যে দূরত্ব থেকে সেদিকে হাঁটার সিদ্ধান্ত নেওয়া হয়, সেখান থেকে মরীচিকাকে পানি থেকে আলাদা করা যায় না; আলাদা করা যায় কেবল পৌঁছানোর পর, যখন আর কিছুই করার থাকে না। তাই পরীক্ষাটি চালাতে হয় আগেভাগে ও সচেতনভাবে — এমন আমলের ওপর যেগুলোর হাতে এখনো বছরের পর বছর সময় আছে, প্রয়োজনের মুহূর্তে কখনোই নয়।"
          },
          {
            "en": "Two questions do most of the work, and they are the two Ibn Kathir names. Is this being done for Allah, or for the version of me that other people carry around? And is it being done the way He asked, or the way that suits me and happens to resemble worship? Neither question is comfortable, and both are far cheaper to answer now than on arrival.",
            "bn": "দুটি প্রশ্নই বেশিরভাগ কাজ সেরে ফেলে, আর সেই দুটিই ইবনে কাসীরের উল্লেখ করা। এটি কি আল্লাহর জন্য করা হচ্ছে, নাকি অন্য মানুষ আমার যে ছবিটি বয়ে বেড়ায় তার জন্য? আর এটি কি সেভাবে করা হচ্ছে যেভাবে তিনি চেয়েছেন, নাকি সেভাবে যা আমার জন্য সুবিধাজনক এবং দেখতে ইবাদতের মতো লাগে? কোনো প্রশ্নই স্বস্তিকর নয়, আর দুটিরই উত্তর দেওয়া পৌঁছানোর পরের চেয়ে এখন বহুগুণ সস্তা।"
          }
        ]
      }
    ]
  },
  "24:45": {
    "sections": [
      {
        "h": {
          "en": "From Sky to Ground",
          "bn": "আকাশ ছেড়ে মাটির দিকে"
        },
        "p": [
          {
            "en": "The verses just before this one sweep the sky. Allah drives the clouds and packs them into a mass until the rain breaks from within it, He alternates the night and the day, and He calls it all a lesson for people who have eyes (24:43 and 24:44). Then, with the same particle of wonder that opened those signs, the gaze drops from the heavens to the ground underfoot: wa-llāhu khalaqa kulla dābbah, and Allah created every moving creature. The wonders overhead and the small lives crossing the road are being read off one page.",
            "bn": "ঠিক আগের আয়াতগুলো আকাশ জুড়ে ঘোরে। আল্লাহ মেঘ চালান, জমিয়ে স্তূপ করেন, তারপর তার ভেতর থেকে বৃষ্টি বেরিয়ে আসে, তিনি রাত আর দিনকে পালা করে আনেন, আর এ সবকিছুকে বলেন চোখওয়ালা মানুষের জন্য শিক্ষা (২৪:৪৩ ও ২৪:৪৪)। তারপর সেই একই বিস্ময়ের সুরে দৃষ্টি আকাশ থেকে নেমে আসে পায়ের নিচের মাটিতে: ওয়াল্লাহু খালাকা কুল্লা দাব্বাহ, আল্লাহ প্রতিটি চলমান প্রাণীকে সৃষ্টি করেছেন। মাথার উপরের বিস্ময় আর পথ পেরোনো ছোট ছোট প্রাণ, দুই-ই যেন এক পাতা থেকে পড়া হচ্ছে।"
          },
          {
            "en": "Al-Qurtubi pauses on the word dābbah itself: it is everything that crawls or moves on the face of the earth, from the verb dabba, yadibbu, to creep along. The claim the verse then makes is sweeping — every last one of them, He made from water. Before any detail about legs or bellies, the sentence has already set its frame: a single Maker standing behind the whole moving, breathing world, so that what follows is not a nature note but evidence offered to a watching heart.",
            "bn": "কুরতুবী থামেন দাব্বাহ শব্দটির উপর: যা কিছু জমিনের বুকে হেঁটে বা গড়িয়ে চলে, তা-ই দাব্বাহ, দাব্বা-ইয়াদিব্বু ধাতু থেকে, যার মানে গুটিগুটি চলা। এরপর আয়াত যে দাবি করে তা বিশাল। এদের প্রত্যেককে তিনি পানি থেকে গড়েছেন। পা বা পেটের কোনো খুঁটিনাটির আগেই বাক্যটি তার কাঠামো দাঁড় করিয়ে দেয়: গোটা চলমান, নিশ্বাস নেওয়া জগতের পেছনে একজনই স্রষ্টা। ফলে যা আসছে তা কেবল প্রকৃতির টুকরো নয়, তা এক জাগ্রত হৃদয়ের সামনে পেশ করা প্রমাণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Recitations, One Sense",
          "bn": "দুই কিরাআত এক অর্থ"
        },
        "p": [
          {
            "en": "The commentators note that the opening words come in two accepted recitations. Al-Baghawi and al-Qurtubi record that Hamza and al-Kisā'ī read khāliqu kulli dābbah as a genitive construction, the Creator of every creature, while the others read khalaqa kulla dābbah as a plain past-tense verb, created every creature. Al-Qurtubi adds that the participle reading was also known from Yaḥyā ibn Waththāb and al-Aʿmash. It is a small turn of grammar over one word, and the mufassirūn treat both wordings as established Qur'an.",
            "bn": "তাফসীরকারেরা লক্ষ করেন, শুরুর শব্দ দুটি কিরাআতে পড়া হয়। বাগভী আর কুরতুবী জানান, হামযা ও কিসাঈ পড়েছেন খালিকু কুল্লি দাব্বাহ, ইদাফতের গঠনে, অর্থাৎ প্রতিটি প্রাণীর স্রষ্টা। বাকিরা পড়েছেন খালাকা কুল্লা দাব্বাহ, সাধারণ অতীত ক্রিয়ায়, অর্থাৎ প্রতিটি প্রাণীকে সৃষ্টি করেছেন। কুরতুবী যোগ করেন, ইসম-ফা'য়িলের এই পড়াটি ইয়াহইয়া ইবন ওয়াসসাব ও আ'মাশ থেকেও জানা যায়। একটি শব্দের উপর ব্যাকরণের সামান্য মোড়, আর মুফাসসিরগণ দুই পাঠকেই প্রতিষ্ঠিত কুরআন হিসেবে ধরেন।"
          },
          {
            "en": "At-Tabari calls them two well-known readings, close in meaning, and says whoever recites by either is correct, since the participle carries the sense of the past — the creating has already happened. Al-Qurtubi refuses to rank them: Allah has given two true reports here, and one should not say that either recitation is sounder than the other. He mentions a nuance some raised, that the verb khalaqa suits a particular act while the name the Creator, the Maker speaks of Him in general, yet he lets both stand undisturbed.",
            "bn": "তাবারী এদের বলেন দুটি সুপরিচিত পাঠ, অর্থে কাছাকাছি, আর বলেন যিনি যেটিতেই পড়ুন তিনি ঠিক আছেন, কারণ ইসম-ফা'য়িলও অতীতের অর্থ বহন করে, সৃষ্টির কাজ ঘটে গেছে। কুরতুবী এদের মধ্যে কোনো ক্রম বসাতে রাজি নন। এখানে আল্লাহ দুটি সত্য সংবাদ দিয়েছেন, কোনো পাঠকে অন্যটির চেয়ে বেশি বিশুদ্ধ বলা উচিত নয়। তিনি কারো তোলা একটি সূক্ষ্মতার কথা আনেন, খালাকা ক্রিয়া বিশেষ কাজের সঙ্গে মানায় আর স্রষ্টা, স্রষ্টা নামটি তাঁকে সাধারণভাবে বোঝায়, তবু তিনি দুটোকেই অটল রাখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Water Means",
          "bn": "পানি বলতে কী বোঝায়"
        },
        "p": [
          {
            "en": "The commentators divide over what water means here. At-Tabari and al-Baghawi gloss min mā' as from a drop of fluid, min nuṭfah, every animal issuing from the seed of its own kind. Al-Qurtubi reports this as the reading of the mufassirūn, and cites an-Naqqāsh, who took it to mean the seed of the males. On this understanding the verse stays close to the eye: you already know how a creature comes to be, and the Qur'an points you to that familiar beginning and names it the handiwork of God.",
            "bn": "পানি এখানে কী বোঝায়, তা নিয়ে তাফসীরকারেরা ভাগ হয়ে যান। তাবারী আর বাগভী মিন মা-এর অর্থ করেন বীর্যের ফোঁটা থেকে, মিন নুতফাহ, প্রতিটি প্রাণী তার নিজ জাতের বীজ থেকে বেরিয়ে আসে। কুরতুবী একে মুফাসসিরদের পাঠ বলে জানান, আর নাক্কাশের কথা তোলেন, যিনি এর মানে নিয়েছিলেন পুরুষের বীজ। এই বোঝায় আয়াত চোখের খুব কাছে থাকে: কীভাবে একটি প্রাণী জন্ম নেয় তা আপনি জানেনই, আর কুরআন সেই পরিচিত শুরুটার দিকেই আঙুল তুলে তাকে আল্লাহর কারিগরি বলে ডাকে।"
          },
          {
            "en": "A second reading widens the frame. Al-Qurtubi ascribes to the majority of thinkers the view that every creature's very making holds water, as Adam was made from water and clay — water as the origin of all life, not merely the fluid of breeding. As-Saʿdī gathers both: animals that reproduce take their matter from the fluid of the seed, while creatures that arise from the earth, like insects, arise only from watery moisture and never from anything dry. The material is one, he says, and he cites the word, and We made from water every living thing (21:30).",
            "bn": "দ্বিতীয় একটি পাঠ পরিধি বাড়িয়ে দেয়। কুরতুবী অধিকাংশ চিন্তাবিদের বরাতে বলেন, প্রতিটি প্রাণীর গড়নের ভেতরেই পানি আছে, যেমন আদম (আঃ) সৃষ্টি হয়েছেন পানি আর মাটি থেকে। এখানে পানি মানে সব প্রাণের উৎস, কেবল বংশবৃদ্ধির তরল নয়। সা'দী দুটোকেই একসাথে ধরেন: যেসব প্রাণী বংশ বাড়ায় তাদের উপাদান বীজের তরল, আর যেসব প্রাণী মাটি থেকে জন্মায়, যেমন পোকামাকড়, তারা কেবল পানিভেজা আর্দ্রতা থেকেই জন্মায়, কখনো শুকনো কিছু থেকে নয়। উপাদান এক, তিনি বলেন, আর তিনি উদ্ধৃত করেন এই কথা, আর আমি পানি থেকে সৃষ্টি করেছি প্রতিটি জীবন্ত বস্তু (২১:৩০)।"
          },
          {
            "en": "Al-Qurtubi backs this wider reading with an exchange at Badr, when the Prophet ﷺ, asked from whom he and his companion came, answered, we are from water — a narration he adduces only as a witness to how min mā' can carry the sense of origin, not as a ruling read onto the verse. The classical commentaries attach no sound Prophetic report that explains the āyah itself. Al-Baghawi and al-Qurtubi both mark a boundary: the statement does not take in the angels or the jinn, since we do not observe them, and the authentic reports say the angels were made from light and the jinn from fire.",
            "bn": "কুরতুবী এই ব্যাপক পাঠের সমর্থনে আনেন বদরের একটি ঘটনা, যেখানে নবী ﷺ-কে জিজ্ঞেস করা হয়েছিল তিনি ও তাঁর সঙ্গী কোথাকার, তিনি জবাব দিলেন, আমরা পানি থেকে। এটি তিনি আনেন কেবল ভাষার সাক্ষী হিসেবে, মিন মা কীভাবে উৎসের অর্থ বহন করতে পারে তা দেখাতে, আয়াতের উপর চাপানো কোনো বিধান হিসেবে নয়। ধ্রুপদি তাফসীরগুলো এ আয়াতের ব্যাখ্যায় কোনো বিশুদ্ধ মারফু হাদীস যুক্ত করে না। বাগভী ও কুরতুবী দুজনেই একটি সীমা টানেন: এই কথা ফেরেশতা বা জিনকে ধরে না, কেননা আমরা তাদের দেখি না, আর বিশুদ্ধ বর্ণনায় ফেরেশতা আলো থেকে আর জিন আগুন থেকে সৃষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Belly, Two Legs, Four",
          "bn": "পেট, দুই পা, চার পা"
        },
        "p": [
          {
            "en": "The verse sorts the creatures by how they move. Of them, some go on their bellies. Ibn Kathir names the snake and its like; al-Qurtubi widens the belly-goers to take in the fish and the worm and their kind; al-Baghawi lists snakes, fish and worms together; and the Muyassar keeps it plain, describing them as those that crawl, zaḥfan, on their bellies. At-Tabari flags the oddity that walking is properly done on limbs, yet the verse speaks of walking on a belly, and answers that the word is stretched to cover the legless once they are grouped with the legged.",
            "bn": "আয়াত প্রাণীদের সাজায় তাদের চলার ধরন দিয়ে। এদের কেউ কেউ পেটে ভর দিয়ে চলে। ইবন কাসীর নাম নেন সাপ ও তার মতো প্রাণীর। কুরতুবী পেটে-চলা দলে টেনে আনেন মাছ আর কীট ও তাদের জাতকে। বাগভী একসাথে গোনেন সাপ, মাছ আর কেঁচো। মুয়াসসার সাদামাটাভাবে বলে, এরা পেটে ভর দিয়ে গুটিগুটি চলে, যাহফান। তাবারী একটা খটকা ধরিয়ে দেন, চলা তো হয় পায়ের উপর, অথচ আয়াত বলছে পেটের উপর চলা। জবাবে তিনি বলেন, পা-ওয়ালাদের সঙ্গে পা-হীনদের এক দলে রাখায় শব্দটিকে টেনে দুই জাতের উপরই খাটানো হয়েছে।"
          },
          {
            "en": "The other two classes are named the same way, each with its examples. Of them, some walk on two legs — the human being and the birds, say Ibn Kathir, at-Tabari and as-Saʿdī. And of them, some walk on four: the cattle and the grazing beasts, to which al-Baghawi adds the beasts of prey and al-Qurtubi the rest of the animals. Read straight down, the sentence is a small ordering of life drawn not to inform but to make you notice how unlike these gaits are, all sprung from one word, water.",
            "bn": "বাকি দুই শ্রেণিকেও একইভাবে নাম দেওয়া হয়, প্রত্যেকের সঙ্গে তার উদাহরণ। এদের কেউ চলে দুই পায়ে, মানুষ আর পাখিরা, বলেন ইবন কাসীর, তাবারী ও সা'দী। আর কেউ চলে চারটি পায়ে, গৃহপালিত পশু আর চরে খাওয়া জন্তু, যার সঙ্গে বাগভী যোগ করেন হিংস্র জানোয়ার আর কুরতুবী বাকি সব প্রাণীকে। সোজা নিচের দিকে পড়লে বাক্যটি জীবনের এক ছোট্ট সাজানো তালিকা, যা তথ্য দিতে নয়, বরং আপনাকে দেখাতে আঁকা যে এই চলনগুলো কত আলাদা, অথচ সবই উঠে এসেছে এক শব্দ থেকে, পানি।"
          }
        ]
      },
      {
        "h": {
          "en": "Creatures With More Legs",
          "bn": "চারের বেশি পায়ে"
        },
        "p": [
          {
            "en": "The classing stops at four, and the mufassirūn ask about the many-legged. Al-Baghawi says the verse did not mention what walks on more than four, such as the crawling insects of the earth, because in their form they resemble the four-legged. Al-Qurtubi reports that the codex of Ubayy read and of them are those that walk on more, an addition that would sweep in every creature, like the crab and the small vermin, though he is careful to add that this is a recitation not confirmed by consensus and so does not stand as Qur'an.",
            "bn": "শ্রেণিভাগ চারে এসে থামে, আর মুফাসসিরগণ বহু-পা প্রাণী নিয়ে প্রশ্ন তোলেন। বাগভী বলেন, চারটির বেশি পায়ে যা চলে, যেমন মাটির বুকে হামাগুড়ি দেওয়া পোকামাকড়, আয়াত তাদের কথা আলাদা করে বলেনি, কারণ চেহারায় তারা চার পায়ে চলা প্রাণীরই মতো। কুরতুবী জানান, উবাইয়ের মুসহাফে পড়া হতো, আর তাদের কেউ চলে আরও বেশির উপর, এমন একটি বাড়তি অংশ যা কাঁকড়া আর ছোট কীটপতঙ্গসহ সব প্রাণীকে টেনে নিত। তবে তিনি সতর্ক করে যোগ করেন, এটি এমন এক পাঠ যা ইজমা দিয়ে প্রমাণিত নয়, তাই তা কুরআন হিসেবে দাঁড়ায় না।"
          },
          {
            "en": "On why four was named and not more, an-Naqqāsh offers a reason: every animal in truth rests on four, which are the frame of its walking, and the extra legs are an addition to its make that it does not lean on to move. Ibn ʿAṭiyya answers back that those many legs are not idle; the creature needs them and moves them all as it goes. Others note the plain point that the verse forbids nothing, for it never says there is none that walks on more than four. The commentators leave the disagreement open.",
            "bn": "চার কেন বলা হলো, আরও বেশি নয় কেন, তার একটা কারণ দেন নাক্কাশ: আসলে প্রতিটি প্রাণী চারটির উপরই ভর রাখে, সেটাই তার চলার কাঠামো, আর বাড়তি পা তার গড়নের সঙ্গে যোগ করা অংশ, চলার জন্য যার উপর সে হেলান দেয় না। ইবন আতিয়া এর জবাবে বলেন, ওই বহু পা অকেজো নয়, প্রাণীর সেগুলো দরকার হয় আর চলার সময় সে সবগুলোকেই নাড়ায়। আরও কেউ সোজা কথাটা তোলেন যে আয়াত কিছুই নিষেধ করে না, কেননা তা কখনো বলেনি চারের বেশি পায়ে চলা কোনো প্রাণী নেই। মুফাসসিরগণ মতভেদটা খোলা রেখে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word for Persons",
          "bn": "মানুষের জন্য গড়া শব্দ"
        },
        "p": [
          {
            "en": "A grammatical detail carries weight here. The verse says fa-minhum, and of them, using the pronoun man, which in Arabic is used of rational beings, of people, though most of the creatures meant are not people at all. At-Tabari raises the question directly and answers it: the phrase is a breaking-up of what was gathered under every moving creature, and that gathering had already folded human beings in alongside the beasts. Because people and animals were mixed in the one word, they are all referred to as one refers to the children of Adam, and then spelled out with man.",
            "bn": "এখানে একটি ব্যাকরণের খুঁটিনাটি ওজন বহন করে। আয়াত বলে ফামিনহুম, অর্থাৎ এদের কেউ কেউ, যেখানে ব্যবহৃত হয়েছে মান শব্দটি, আরবিতে যা বুদ্ধিমান সত্তা তথা মানুষের জন্য চলে, অথচ এখানে যেসব প্রাণীর কথা তার বেশিরভাগই মানুষ নয়। তাবারী প্রশ্নটা সোজাসুজি তোলেন আর জবাবও দেন: এটা আসলে প্রতিটি চলমান প্রাণী কথার নিচে যা জড়ো হয়েছিল তারই ভাগ করা, আর সেই জড়ো করায় পশুর পাশে মানুষও আগেই ঢুকে গিয়েছিল। এক শব্দের ভেতর মানুষ আর জন্তু মিশে থাকায় সবাইকে আদম-সন্তানের মতো করে ইঙ্গিত করা হয়, তারপর মান দিয়ে খুলে বলা হয়।"
          },
          {
            "en": "Al-Baghawi states the grammarians' rule: when a phrase gathers the rational and the non-rational, the wording gives precedence to the rational. Al-Qurtubi says the same and adds why — the human being is the one addressed and held to worship, so he takes the lead in the pronoun. Then al-Qurtubi turns the grammar into an argument. The very word walk, applied across such unlike creatures, points to the settled truth of a Maker: were there no Maker who freely chooses, they would not differ at all but would be one single kind.",
            "bn": "বাগভী ব্যাকরণবিদদের নিয়মটা বলেন: কোনো বাক্যে বুদ্ধিমান আর বুদ্ধিহীন একসাথে জড়ো হলে ভাষা বুদ্ধিমানকেই প্রাধান্য দেয়। কুরতুবীও একই কথা বলেন আর কারণ যোগ করেন, মানুষই তো সম্বোধিত আর ইবাদতের দায়ে বাঁধা, তাই সর্বনামে সে-ই আগে আসে। এরপর কুরতুবী ব্যাকরণটাকে যুক্তিতে বদলে দেন। এত ভিন্ন ভিন্ন প্রাণীর উপর খাটানো ওই চলা শব্দটাই এক স্রষ্টার প্রতিষ্ঠিত সত্যের দিকে ইশারা করে। স্বাধীনভাবে বেছে নেন এমন কোনো স্রষ্টা না থাকলে এরা মোটেও আলাদা হতো না, সবাই হতো এক জাতের।"
          }
        ]
      },
      {
        "h": {
          "en": "One Source, Countless Forms",
          "bn": "এক উৎস, অজস্র রূপ"
        },
        "p": [
          {
            "en": "Now the whole point of the sorting comes clear. Ibn Kathir reads the verse as a display of Allah's complete power and vast dominion: He creates the many kinds of animals, differing in their shapes and colours and in their ways of moving and resting, all from a single kind of water. As-Saʿdī draws the same conclusion more sharply, that their differing, while the origin is one, proves the efficacy of Allah's will and the reach of His power. One source, and out of it a variety that no mind could have foreseen.",
            "bn": "এবার এই শ্রেণিভাগের আসল উদ্দেশ্যটা পরিষ্কার হয়। ইবন কাসীর আয়াতটিকে পড়েন আল্লাহর পরিপূর্ণ শক্তি আর বিশাল কর্তৃত্বের প্রদর্শন হিসেবে: তিনি নানা জাতের প্রাণী সৃষ্টি করেন, যাদের আকার আর রঙে, চলা আর থামার ধরনে এত ফারাক, অথচ সবই এক রকম পানি থেকে। সা'দী একই সিদ্ধান্ত আরও ধারালোভাবে টানেন, উৎস এক হওয়া সত্ত্বেও এদের এই ভিন্নতা প্রমাণ করে আল্লাহর ইচ্ছার কার্যকারিতা আর তাঁর কুদরতের ব্যাপ্তি। এক উৎস, আর তা থেকে এমন বৈচিত্র্য যা কোনো মন আগে আঁচ করতে পারত না।"
          },
          {
            "en": "As-Saʿdī sets a picture from the earth beside it: the rain falls as one water, the soil is one mother, and yet the offspring it raises differ in kind and in quality — as another verse says of neighbouring plots watered by one water, some made better than others in taste (13:4). Al-Qurtubi reads the animals the same way, as a proof that runs from their difference back to the free Maker behind them. The variety is not noise. It is the fingerprint of a will that chose each thing.",
            "bn": "সা'দী এর পাশে রাখেন মাটির একটা ছবি: বৃষ্টি নামে এক পানি হয়ে, মাটি এক মা, তবু সে যে সন্তান তুলে আনে তারা জাতে আর গুণে আলাদা। যেমন আরেক আয়াত বলে, পাশাপাশি জমি এক পানিতে সিঞ্চিত হয়, অথচ স্বাদে একটিকে অন্যটির চেয়ে শ্রেষ্ঠ করা হয় (১৩:৪)। কুরতুবী প্রাণীদেরও একইভাবে পড়েন, এদের ভিন্নতা থেকে পেছনের সেই স্বাধীন স্রষ্টার দিকে ছুটে যাওয়া এক প্রমাণ হিসেবে। এই বৈচিত্র্য এলোমেলো গোলমাল নয়। এ হলো প্রতিটি জিনিস বেছে নেওয়া এক ইচ্ছার আঙুলের ছাপ।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Wills, He Creates",
          "bn": "যা চান, তাই গড়েন"
        },
        "p": [
          {
            "en": "The verse closes on its own point: yakhluqu-llāhu mā yashā', Allah creates what He wills; inna-llāha ʿalā kulli shay'in qadīr, indeed Allah is able over all things. Ibn Kathir ties the two clauses together — He creates what He wills by His power, for what He wills comes to be and what He does not will does not come to be — and this, he says, is why the verse ends on His being able over everything. The catalogue of gaits was never the destination; this naming of the will was.",
            "bn": "আয়াত শেষ হয় তার নিজের কথায়: ইয়াখলুকুল্লাহু মা ইয়াশা, আল্লাহ যা চান তাই সৃষ্টি করেন; ইন্নাল্লাহা আলা কুল্লি শাইয়িন কাদীর, নিশ্চয়ই আল্লাহ সবকিছুর উপর সর্বশক্তিমান। ইবন কাসীর দুই বাক্যাংশকে এক সূত্রে বাঁধেন, তিনি নিজ কুদরতে যা চান তাই সৃষ্টি করেন, কেননা তিনি যা চান তা হয় আর যা চান না তা হয় না। আর এ কারণেই, তিনি বলেন, আয়াত শেষ হয় তাঁর সবকিছুর উপর সক্ষম হওয়ার কথায়। চলনের তালিকা কখনো গন্তব্য ছিল না, গন্তব্য ছিল ইচ্ছার এই ঘোষণা।"
          },
          {
            "en": "This is where the verse lands on a reader. It asks for no theory of biology, and it is not a coded science lesson to be decoded — it asks for the older, plainer response of a wonder that turns into worship. Let the next creature you pass, a sparrow, an ant, a dog asleep in the sun, stop you for a breath. One water stands behind it, one Maker chose its form, and He who drew such range from so little is able to bring about, in your life and beyond it, whatever He wills.",
            "bn": "এখানেই আয়াত পাঠকের বুকে এসে নামে। এ জীববিজ্ঞানের কোনো তত্ত্ব চায় না, আর এটা কোনো গূঢ় বিজ্ঞানের পাঠও নয় যা খুলে পড়ে দেখাতে হবে। এ চায় সেই পুরোনো, সরল সাড়া, যে বিস্ময় গিয়ে ইবাদতে বদলে যায়। পাশ দিয়ে যাওয়া পরের প্রাণীটা, একটা চড়ুই, একটা পিঁপড়া, রোদে ঘুমানো একটা কুকুর, আপনাকে এক নিশ্বাসের জন্য থামিয়ে দিক। এর পেছনে দাঁড়িয়ে আছে এক পানি, এক স্রষ্টা বেছে নিয়েছেন এর রূপ, আর যিনি এত সামান্য থেকে এত বিস্তার এঁকেছেন, তিনি আপনার জীবনে ও তার বাইরে যা চান তাই আনতে সক্ষম।"
          }
        ]
      }
    ]
  },
  "24:50": {
    "sections": [
      {
        "h": {
          "en": "A Summons They Refuse",
          "bn": "যে ডাক তারা এড়িয়ে যায়"
        },
        "p": [
          {
            "en": "The verses just before this one draw a portrait. In 24:47 a group say with their tongues, \"We have believed in Allah and in the Messenger, and we obey,\" and then a party of them turns away. Ibn Kathir's abridged commentary reads this as people whose deeds contradict their words: they say that which they do not do. Then 24:48 sharpens it — when they are called to Allah and His Messenger to judge between them, at once a party of them turns aside in refusal. The loud claim of faith and the quiet flight from judgment sit side by side.",
            "bn": "এই আয়াতের ঠিক আগের আয়াতগুলো একটা ছবি আঁকে। ২৪:৪৭ আয়াতে একদল মুখে বলে, আমরা আল্লাহ ও রসূলের প্রতি ইমান আনলাম, মেনেও নিলাম। তারপর তাদেরই একদল মুখ ফিরিয়ে নেয়। ইবন কাসীরের সংক্ষিপ্ত তাফসীর একে পড়ে এভাবে: এদের কাজ তাদের কথার উল্টো, মুখে যা বলে কাজে তা করে না। তারপর ২৪:৪৮ আয়াত কথাটা আরও ধারালো করে। তাদের মাঝে ফয়সালার জন্য আল্লাহ ও তাঁর রসূলের দিকে ডাকা হলে তাদের একদল তখনই মুখ ফিরিয়ে নেয়। ইমানের জোরালো দাবি আর ফয়সালা থেকে চুপচাপ পালানো, দুটো পাশাপাশি বসে থাকে।"
          },
          {
            "en": "What exposes them is 24:49: \"But if the right is theirs, they come to him in prompt obedience.\" Ibn Kathir explains that when the ruling will fall in their favour they come willingly and listen and obey; but if it will go against a man, he turns away and would rather be judged by someone other than the Prophet ﷺ, so that his false claim might prevail. His eagerness was never a love of the truth. It was that the truth, for the moment, matched what he wanted. The instant it stopped matching, he was gone.",
            "bn": "যা তাদের আসল চেহারা ফাঁস করে দেয় তা হলো ২৪:৪৯ আয়াত: কিন্তু হক যদি তাদের পক্ষে থাকে, তবে তারা বিনয়ে ছুটে আসে। ইবন কাসীর বলেন, রায় যখন তাদের পক্ষে যাবে তখন তারা রাজি হয়ে এসে শোনে ও মানে। কিন্তু রায় বিপক্ষে গেলে লোকটি মুখ ফিরিয়ে নেয়, আর চায় নবী ﷺ ছাড়া অন্য কারও কাছে বিচার হোক, যাতে তার মিথ্যা দাবিটা টিকে যায়। তার আগ্রহ কখনো হকের প্রতি টান ছিল না। ব্যাপারটা ছিল, হকটা তখনকার মতো তার চাওয়ার সঙ্গে মিলে গিয়েছিল। যেই না মেলা বন্ধ হলো, সে সরে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Questions, One Answer",
          "bn": "তিন প্রশ্ন, এক জবাব"
        },
        "p": [
          {
            "en": "The three questions run in a line: is there a disease in their hearts, or have they doubted, or do they fear that Allah and His Messenger will wrong them? Al-Baghawi calls this an interrogative of blame and rebuke, meaning in effect that they are indeed like that. Al-Qurtubi says the question form is chosen here because it is harsher in reproach and more eloquent in blame than a flat statement would be. To ask \"is there a sickness in here?\" of a man whose sickness is already plain is to make him stand exposed under his own excuse.",
            "bn": "তিনটি প্রশ্ন একটানা আসে: তাদের অন্তরে কি রোগ, নাকি তারা সন্দেহ করেছে, নাকি ভয় করছে যে আল্লাহ ও তাঁর রসূল তাদের প্রতি অন্যায় করবেন? বাগাভী একে বলেন দোষারোপ ও ভর্ৎসনার প্রশ্ন, অর্থাৎ কথাটা দাঁড়ায় এই যে তারা সত্যিই এমন। কুরতুবী বলেন, এখানে প্রশ্নের রূপটা বেছে নেওয়া হয়েছে কারণ সরাসরি বিবৃতির চেয়ে প্রশ্ন তিরস্কারে বেশি কড়া আর নিন্দায় বেশি জোরালো। যার রোগ এমনিতেই স্পষ্ট, তাকে ‘এখানে কি রোগ আছে’ জিজ্ঞেস করা মানে তাকে নিজের অজুহাতের নিচে খোলা করে দাঁড় করিয়ে দেওয়া।"
          },
          {
            "en": "Then the verse turns on its heel: \"Rather, it is they who are the wrongdoers.\" Al-Muyassar reads the movement plainly — is the cause the disease of hypocrisy, or a doubt about the Prophet's ﷺ standing, or a fear that the ruling would be unjust? No; they do not fear any injustice at all; the real cause is that they themselves are the wrongdoers. So the three questions are not three separate charges to be weighed and totalled. They are three doors the verse opens and shuts in turn, until only one door is left standing open: the fault lies in them.",
            "bn": "তারপর আয়াত হঠাৎ ঘুরে দাঁড়ায়: বরং তারাই অন্যায়কারী। মুয়াসসার চলাটা সাদামাটাভাবে পড়ে। কারণ কি অন্তরের মুনাফিকির রোগ, নাকি নবী ﷺ-এর মর্যাদা নিয়ে সন্দেহ, নাকি রায় অন্যায় হওয়ার ভয়? না, তারা আসলে কোনো অন্যায়ের ভয়ই করে না। আসল কারণ, তারা নিজেরাই অন্যায়কারী। তাই তিনটি প্রশ্ন আলাদা তিনটি অভিযোগ নয়, যেগুলো ওজন করে যোগ করতে হবে। এগুলো তিনটি দরজা, আয়াত একে একে খুলে আবার বন্ধ করে দেয়, শেষে খোলা থাকে কেবল একটি দরজা: দোষটা তাদের ভেতরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sickness in the Heart",
          "bn": "অন্তরের ভেতরের রোগ"
        },
        "p": [
          {
            "en": "As-Sa'di takes the first word, maraḍ, as an ailment that has driven the heart out of its health and stripped it of its sense, until it is like a sick body that turns away from what would heal it and reaches for what harms it. That is the exact shape of the refusal in the verses before: a healthy heart runs toward a just ruling, and this heart runs from it. Ibn Kathir, in his Arabic commentary, lists the same as the first of the possibilities — a disease fixed in the heart and clinging to it.",
            "bn": "সা’দী প্রথম শব্দ ‘রোগ’-কে ধরেন এমন এক অসুখ হিসেবে, যা অন্তরকে তার সুস্থতা থেকে বের করে এনেছে আর তার বোধ কেড়ে নিয়েছে। ফলে অন্তরটা হয়ে গেছে অসুস্থ শরীরের মতো, যা আরোগ্য যা দেয় তা থেকে মুখ ফেরায় আর যা ক্ষতি করে তার দিকে হাত বাড়ায়। আগের আয়াতগুলোর মুখ ফেরানোর ঠিক এই আকার। সুস্থ অন্তর ন্যায্য রায়ের দিকে ছুটে যায়, আর এই অন্তর তা থেকে ছুটে পালায়। ইবন কাসীর তাঁর আরবি তাফসীরে একেই প্রথম সম্ভাবনা হিসেবে রাখেন, অন্তরে গেঁথে থাকা লেগে থাকা এক রোগ।"
          },
          {
            "en": "Al-Muyassar puts a name to the disease: the disease of hypocrisy. Naming it matters, because a hypocrite is not, in this verse's setting, a stranger outside the community. He is the very man who said \"we believe and obey\" in 24:47 and then would not stand before the ruling in 24:48. The sickness is not unbelief shouted in the open. It is a faith professed with the tongue that cannot survive its first real contact with a verdict it does not like. As-Sa'di draws the rule out of the whole passage: faith is not bare words until action is joined to it.",
            "bn": "মুয়াসসার রোগটির একটা নাম দেন: মুনাফিকির রোগ। নামটা জরুরি, কারণ এই আয়াতের প্রেক্ষাপটে মুনাফিক দলের বাইরের কোনো অচেনা লোক নয়। সে ঠিক সেই লোক, যে ২৪:৪৭ আয়াতে বলেছিল ‘আমরা ইমান আনলাম, মানলাম’, তারপর ২৪:৪৮ আয়াতে রায়ের সামনে দাঁড়াতে চাইল না। এই রোগ খোলাখুলি চিৎকার করে বলা অবিশ্বাস নয়। এটা এমন ইমান, যা কেবল মুখে বলা, পছন্দ না হওয়া কোনো রায়ের সঙ্গে প্রথম ধাক্কাতেই যা টেকে না। সা’দী গোটা আলোচনা থেকে নিয়মটা টেনে আনেন: আমল যুক্ত না হওয়া পর্যন্ত ইমান নিছক কথা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Or Have They Doubted",
          "bn": "নাকি তারা সন্দেহে পড়েছে"
        },
        "p": [
          {
            "en": "At-Tabari reads am irtābū as a doubt in the Messenger's being God's Messenger, a doubt over his prophethood that holds them back from answering his ruling and being content with it. Al-Qurtubi glosses the earlier word maraḍ itself as doubt and misgiving, and irtābū as a doubt that has arisen in his prophethood and his justice. So the second question reaches deeper than the first. It is no longer a hidden sickness but an actual wavering: is he who judges truly sent by God, and is his ruling truly fair?",
            "bn": "তাবারী ‘আম ইরতাবূ’-কে পড়েন রসূল যে আল্লাহর রসূল সেই ব্যাপারে সন্দেহ হিসেবে, তাঁর নবুয়ত নিয়ে এমন সন্দেহ যা তাদের তাঁর রায় মানা আর তাতে সন্তুষ্ট হওয়া থেকে আটকে রাখে। কুরতুবী আগের শব্দ ‘রোগ’-কেই ব্যাখ্যা করেন সন্দেহ ও দ্বিধা বলে, আর ‘ইরতাবূ’-কে ধরেন তাঁর নবুয়ত ও ন্যায়বিচার নিয়ে জেগে ওঠা সন্দেহ হিসেবে। তাই দ্বিতীয় প্রশ্নটা প্রথমটার চেয়ে গভীরে পৌঁছায়। এটা আর লুকানো রোগ নয়, খোলা দোটানা: যে বিচার করছেন তিনি কি সত্যিই আল্লাহর পাঠানো, আর তাঁর রায় কি সত্যিই ন্যায্য?"
          },
          {
            "en": "As-Sa'di adds the inner motion. They doubted, he says, and their hearts grew anxious and unsettled about the ruling of Allah and His Messenger, and they accused it of not judging by the truth. That last verb is the sharp one: the doubt does not stay a private hesitation, it hardens into an accusation aimed at the ruling itself. A heart that will not submit needs a story about why, and the story it reaches for is that the verdict cannot be trusted. Suspecting the judge is lighter to carry than obeying a judgment that crosses your wishes.",
            "bn": "সা’দী ভেতরের নড়াচড়াটা যোগ করেন। তিনি বলেন, তারা সন্দেহ করল, আল্লাহ ও তাঁর রসূলের রায় নিয়ে তাদের অন্তর অস্থির ও উদ্বিগ্ন হয়ে উঠল, আর তারা রায়ের বিরুদ্ধে অভিযোগ তুলল যে তা সত্য দিয়ে বিচার করছে না। শেষ শব্দটাই সবচেয়ে ধারালো। সন্দেহ আর কেবল নিজের ভেতরের দ্বিধা থাকে না, তা শক্ত হয়ে রায়ের দিকেই ছোড়া অভিযোগে বদলে যায়। যে অন্তর মানতে চায় না, তার একটা কারণ লাগে, আর সে যে কারণটা হাতড়ে বের করে তা হলো রায়টাকে বিশ্বাস করা যায় না। বিচারককে সন্দেহ করা নিজের চাওয়ার উল্টো রায় মানার চেয়ে হালকা বোঝা।"
          }
        ]
      },
      {
        "h": {
          "en": "Fearing an Unjust Verdict",
          "bn": "অন্যায় রায়ের ভয়"
        },
        "p": [
          {
            "en": "The third question is the heaviest: or do they fear that Allah and His Messenger will wrong them? The verb yaḥīf is from ḥayf, to deviate from justice, to lean and so to wrong. Al-Qurtubi glosses it as to deviate in the ruling and do injustice; al-Baghawi, simply, with injustice; as-Sa'di, that He rule against them an unjust, crooked ruling. The fear the verse names is precisely the fear that the divine verdict itself might be bent, that to submit could cost a man more than what is truly his due.",
            "bn": "তৃতীয় প্রশ্নটা সবচেয়ে ভারী: নাকি তারা ভয় করছে যে আল্লাহ ও তাঁর রসূল তাদের প্রতি অন্যায় করবেন? ‘ইয়াহীফ’ ক্রিয়াটি এসেছে ‘হাইফ’ থেকে, যার মানে ন্যায় থেকে সরে যাওয়া, হেলে পড়া, তাই অন্যায় করা। কুরতুবী একে ব্যাখ্যা করেন রায়ে সরে গিয়ে জুলুম করা হিসেবে, বাগাভী সোজা বলেন জুলুমসহ, আর সা’দী বলেন তাদের বিরুদ্ধে অন্যায় বাঁকা রায় দেওয়া। আয়াত যে ভয়ের নাম নেয় তা ঠিক এই ভয়, যে আল্লাহর রায়টাই হয়তো বাঁকা হবে, মেনে নিলে হয়তো লোকটার প্রাপ্যের চেয়ে বেশি খেসারত দিতে হবে।"
          },
          {
            "en": "At-Tabari pauses on a fine point of the wording. The verse says they fear that Allah and His Messenger will wrong them, yet the meaning, he says, is that the Messenger ﷺ would wrong them, since the ruling in the dispute is his. God's name is placed first out of reverence for God. His evidence is 24:48 itself, which reads \"to judge between them\" with the verb kept singular, liyaḥkuma, not the dual — the Messenger alone is named as judge, though the honour of the phrase begins with God.",
            "bn": "তাবারী শব্দের একটা সূক্ষ্ম দিকে থামেন। আয়াত বলে তারা ভয় করে যে আল্লাহ ও তাঁর রসূল তাদের প্রতি অন্যায় করবেন, অথচ অর্থটা, তিনি বলেন, রসূল ﷺ তাদের প্রতি অন্যায় করবেন, কারণ বিবাদের রায়টা তাঁরই। আল্লাহর নাম আগে বসানো হয়েছে আল্লাহর প্রতি সম্মানবশত। তাঁর দলিল ২৪:৪৮ আয়াতটাই, যেখানে ‘তাদের মাঝে ফয়সালা করেন’ ক্রিয়াটা একবচনে রাখা, দ্বিবচনে নয়। বিচারক হিসেবে কেবল রসূলকেই নাম করা হয়েছে, যদিও কথাটার সম্মান শুরু হয় আল্লাহকে দিয়ে।"
          },
          {
            "en": "To this fear the commentators answer alike. As-Sa'di says the ruling of Allah and His Messenger is the utmost in justice and fairness and accords with wisdom, and he sets beside it the Qur'an's own words, who is better than Allah in judgment for a people who are certain (5:50). Ibn Kathir says Allah and His Messenger are free of the injustice and deviation these men imagine; exalted are they above it. So the fear is not a reasonable caution the verse respects. It is itself the disease, a fear that could only take root in a heart already sick.",
            "bn": "এই ভয়ের জবাবে তাফসীরকারেরা এক সুরে কথা বলেন। সা’দী বলেন, আল্লাহ ও তাঁর রসূলের রায় ন্যায় ও ইনসাফের চূড়ান্ত, আর তা হিকমতের সঙ্গে মেলে। তিনি তার পাশে রাখেন কুরআনের নিজেরই কথা, নিশ্চিত বিশ্বাসী কওমের জন্য আল্লাহর চেয়ে ভালো বিচারক আর কে (৫:৫০)। ইবন কাসীর বলেন, এই লোকেরা যে অন্যায় ও বাঁকা রায়ের কল্পনা করছে, আল্লাহ ও তাঁর রসূল তা থেকে মুক্ত, এসবের ঊর্ধ্বে। তাই এই ভয় এমন কোনো যুক্তিসংগত সাবধানতা নয় যাকে আয়াত মেনে নেয়। এটা নিজেই সেই রোগ, এমন ভয় যা কেবল আগে থেকেই অসুস্থ অন্তরেই শিকড় গাড়তে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Occasion Behind It",
          "bn": "যে ঘটনায় নাজিল হলো"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an relates, on the authority of at-Tabari and others, that these verses came down over a particular incident. A hypocrite named Bishr had a dispute with a Jewish man over a piece of land. The Jew proposed taking the matter to the Prophet ﷺ for judgment. Bishr, knowing he was in the wrong and that the Prophet ﷺ would decide the case on its merits and so rule against him, refused, and pressed instead to take it to Ka'b ibn al-Ashraf. On this the verses were revealed. The turning-away of 24:48 has, in this account, a face and a name.",
            "bn": "মাআরিফুল কুরআন তাবারী ও অন্যদের সূত্রে বর্ণনা করে যে এই আয়াতগুলো একটা নির্দিষ্ট ঘটনাকে ঘিরে নাজিল হয়। বিশর নামের এক মুনাফিকের সঙ্গে এক ইহুদির এক টুকরো জমি নিয়ে বিবাদ ছিল। ইহুদি প্রস্তাব দেয়, বিষয়টা নবী ﷺ-এর কাছে ফয়সালার জন্য নেওয়া হোক। বিশর জানত সে অন্যায়ের উপর আছে, আর নবী ﷺ ন্যায্যতার ভিত্তিতে বিচার করে তার বিরুদ্ধেই রায় দেবেন। তাই সে রাজি হলো না, বরং জোর দিল কা’ব ইবন আল-আশরাফের কাছে নেওয়ার। এ নিয়েই আয়াতগুলো নাজিল হয়। এই বর্ণনায় ২৪:৪৮ আয়াতের মুখ ফেরানোর একটা চেহারা আছে, একটা নাম আছে।"
          },
          {
            "en": "Ma'arif then draws a careful point from the verse's own wording. To ask \"is there a malady in their hearts?\" is, it says, to set aside firm unbelief and doubt of prophethood as the real cause of Bishr's evasion. Unbelief and doubt are real enough among the hypocrites, but the underlying driver here was plainer and uglier: he knew that a case decided on merit was a case he would lose. Ibn Kathir approaches the same words from another side, holding that whichever of the three it is, it amounts to pure disbelief. The verse carries both the motive and the verdict.",
            "bn": "এরপর মাআরিফ আয়াতের নিজের শব্দ থেকে একটা সূক্ষ্ম কথা টানে। ‘তাদের অন্তরে কি রোগ’ জিজ্ঞেস করা মানে, সে বলে, বিশরের এড়িয়ে যাওয়ার আসল কারণ হিসেবে পাকা অবিশ্বাস আর নবুয়তে সন্দেহকে সরিয়ে রাখা। মুনাফিকদের মধ্যে অবিশ্বাস আর সন্দেহ যথেষ্টই আছে, তবে এখানকার আসল চালিকাটা ছিল আরও সাদামাটা আর কুৎসিত। সে জানত, ন্যায্যতার ভিত্তিতে বিচার হলে সে হেরে যাবে। ইবন কাসীর একই শব্দগুলোর কাছে আসেন অন্য দিক থেকে, তাঁর মতে তিনটির যেটাই হোক, তা দাঁড়ায় খাঁটি অবিশ্বাসে। আয়াত ধরে রাখে উদ্দেশ্য আর রায় দুটোই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Narration Weighed",
          "bn": "একটি বর্ণনা যাচাই"
        },
        "p": [
          {
            "en": "The tafsirs attach a single narration to the verse, and they do not agree on it. Ibn Kathir cites, through Ibn Abi Hatim from al-Hasan, that a man in the right would submit when called to the Prophet ﷺ, while a man bent on wrong would turn away. Then this verse came down, and the Prophet ﷺ said, \"Whoever has something between him and his brother, and is called to one of the Muslims' judges and refuses to answer, is a wrongdoer with no right.\" Ibn Kathir himself grades this narration gharīb and mursal.",
            "bn": "তাফসীরগুলো আয়াতটির সঙ্গে একটিমাত্র বর্ণনা জোড়ে, আর সে বর্ণনায় তারা একমত নয়। ইবন কাসীর ইবন আবী হাতিমের সূত্রে হাসান থেকে আনেন যে, হকের উপর থাকা লোক নবী ﷺ-এর কাছে ডাকা হলে মেনে নিত, আর অন্যায়ে ঝুঁকে থাকা লোক মুখ ফিরিয়ে নিত। তারপর এই আয়াত নাজিল হয়, আর নবী ﷺ বলেন, ‘যার সঙ্গে তার ভাইয়ের কোনো বিষয় আছে, আর তাকে মুসলিমদের কোনো বিচারকের কাছে ডাকা হলে সে সাড়া দিতে অস্বীকার করে, সে অন্যায়কারী, তার কোনো হক নেই।’ ইবন কাসীর নিজেই বর্ণনাটিকে গরীব ও মুরসাল বলে চিহ্নিত করেন।"
          },
          {
            "en": "Al-Qurtubi carries the same report from al-Hasan, then records Ibn al-Arabi's verdict on it: this, he says, is a baseless hadith. Ibn al-Arabi then splits the wording. The clause \"he is a wrongdoer\" is sound speech, he grants, while \"he has no right\" does not hold, unless the meaning is that the man stands upon something other than the truth. So no sound, connected hadith is fixed to this verse in the tafsirs read here. There is a mursal report that Ibn Kathir marks weak and Ibn al-Arabi rejects, with only its first half upheld for its meaning.",
            "bn": "কুরতুবী একই বর্ণনা হাসান থেকে আনেন, তারপর তার উপর ইবনুল আরাবীর রায় তুলে ধরেন: এটি, তিনি বলেন, একটি ভিত্তিহীন হাদিস। এরপর ইবনুল আরাবী শব্দগুলোকে আলাদা করেন। ‘সে অন্যায়কারী’ কথাটা সঠিক, তিনি মানেন, কিন্তু ‘তার কোনো হক নেই’ কথাটা টেকে না, যদি না এর অর্থ হয় যে লোকটি হক ছাড়া অন্য কিছুর উপর দাঁড়িয়ে আছে। তাই এখানে পড়া তাফসীরগুলোতে এই আয়াতের সঙ্গে কোনো সহিহ সংযুক্ত হাদিস গাঁথা নেই। আছে একটি মুরসাল বর্ণনা, যাকে ইবন কাসীর দুর্বল বলেন আর ইবনুল আরাবী প্রত্যাখ্যান করেন, কেবল যার প্রথম অংশটুকু অর্থের দিক থেকে টিকিয়ে রাখা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Mirror, Not the Label",
          "bn": "আয়না, নালিশ নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly, in both languages. The verse describes what its text describes: the hypocrites of that setting who claimed faith and then fled the Prophet's ﷺ judgment, and it names them wrongdoers. It licenses nothing against any living person or community. Bal ulā'ika humu-ẓ-ẓālimūn is a verdict on a described refusal, not a label to hang on anyone whose case has not been heard, and not on a people as a class. Al-Baghawi even turns the wrong inward: they are wrongdoers against themselves, he says, by turning away from the truth. The harm the hypocrite does lands first on his own heart.",
            "bn": "কথাটা দুই ভাষাতেই সোজাসুজি বলা দরকার। আয়াত যা বর্ণনা করে তা-ই বর্ণনা করে: সেই প্রেক্ষাপটের মুনাফিকরা, যারা ইমানের দাবি করে তারপর নবী ﷺ-এর ফয়সালা থেকে পালিয়েছিল, আর আয়াত তাদের অন্যায়কারী বলে ডাকে। এটি কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। ‘বাল উলাইকা হুমুয যালিমূন’ একটা বর্ণিত মুখ ফেরানোর উপর রায়, এমন কারও গায়ে সাঁটার তকমা নয় যার বিচার এখনো শোনাই হয়নি, আর কোনো জাতিগোষ্ঠীর গায়েও নয়। বাগাভী বরং দোষটাকে ভেতরের দিকে ফেরান। তারা নিজেদের প্রতিই অন্যায়কারী, তিনি বলেন, হক থেকে মুখ ফিরিয়ে। মুনাফিক যে ক্ষতি করে তা প্রথমে তার নিজের অন্তরেই পড়ে।"
          },
          {
            "en": "Read this way, the three questions become a mirror, not a weapon. As-Sa'di takes this turn: whoever does not submit to the ruling of Allah and His Messenger shows a disease in his heart and a doubt in his faith; and it is forbidden, he adds, to think ill of the rulings of the Sharī'a or suppose them contrary to justice and wisdom. The verse hands the reader a test to run on himself, not a charge to file against a neighbour. The honest question is where I turn away, and why.",
            "bn": "এভাবে পড়লে তিনটি প্রশ্ন অস্ত্র নয়, আয়না হয়ে ওঠে। সা’দী এই মোড়টাই নেন: যে আল্লাহ ও তাঁর রসূলের রায় মানে না, তা তার অন্তরের রোগ আর ইমানের সন্দেহের দিকেই ইশারা করে। আর, তিনি যোগ করেন, শরীয়তের বিধান নিয়ে বদগুমান করা কিংবা সেগুলোকে ন্যায় ও হিকমতের উল্টো ভাবা হারাম। আয়াত পাঠকের হাতে নিজের উপর চালানোর একটা পরীক্ষা তুলে দেয়, প্রতিবেশীর নামে দায়ের করার অভিযোগ নয়। আসল প্রশ্ন, আমি নিজে কোথায় মুখ ফিরিয়ে নিই, আর কেন।"
          },
          {
            "en": "The very next verse holds up the opposite heart. When the believers are called to Allah and His Messenger to judge between them, their only word is \"we hear and we obey,\" and 24:51 seals them as the successful. The difference between the two hearts is not how much each one knows, for both hear the same summons. It is what each does when the ruling crosses his wishes. To submit when the verdict may cost you something is the exact test the hypocrite failed. That surrender, offered before you know which way the ruling will fall, is what real faith looks like.",
            "bn": "ঠিক পরের আয়াতটাই উল্টো অন্তরটাকে সামনে ধরে। মুমিনদের যখন তাদের মাঝে ফয়সালার জন্য আল্লাহ ও তাঁর রসূলের দিকে ডাকা হয়, তাদের একটাই কথা, ‘আমরা শুনলাম ও মানলাম’, আর ২৪:৫১ আয়াত তাদের সফলকাম বলে সিলমোহর দেয়। দুই অন্তরের পার্থক্য এই নয় যে কে কতটা জানে, কারণ দুজনেই একই ডাক শোনে। পার্থক্য হলো, রায় নিজের চাওয়ার উল্টো গেলে কে কী করে। রায় হয়তো কিছু খেসারত চাইবে জেনেও মেনে নেওয়া, এই তো সেই পরীক্ষা যেখানে মুনাফিক ফেল করেছিল। রায় কোন দিকে যাবে তা জানার আগেই করা এই আত্মসমর্পণই খাঁটি ইমানের চেহারা।"
          }
        ]
      }
    ]
  },
  "24:58": {
    "sections": [
      {
        "h": {
          "en": "Permission Comes Home",
          "bn": "অনুমতি ঘরে ফেরে"
        },
        "p": [
          {
            "en": "The surah had already taught how to enter a house that is not your own: do not go in until you have sought leave and greeted its people (24:27). Here the same courtesy turns inward, from the gate to the bedroom door. God now addresses the believers about their own homes, and about the two groups least likely to be kept waiting outside: the servants their right hands held, and the children of the house not yet of age. Al-Qurtubi notes the pairing plainly, that the earlier verse was general while this one narrows both who must ask and when.",
            "bn": "সূরাটি আগেই শিখিয়েছে, নিজের নয় এমন ঘরে কীভাবে ঢুকতে হয়: অনুমতি না নিয়ে আর ভেতরের লোকদের সালাম না দিয়ে ঢুকো না (২৪:২৭)। এবার সেই একই শিষ্টাচার ভেতরের দিকে ফেরে, দরজা থেকে শোবার ঘর পর্যন্ত। আল্লাহ এখন ঈমানদারদের বলছেন তাদের নিজেদের ঘর নিয়ে, আর ঘরের এমন দুটি দলকে নিয়ে যাদের বাইরে দাঁড় করিয়ে রাখার কথা কেউ ভাবে না: মালিকানাধীন দাসদাসী, আর ঘরের যে শিশুরা এখনো বয়ঃপ্রাপ্ত হয়নি। কুরতুবী মিলটা সোজা কথায় ধরিয়ে দেন, আগের আয়াতটি ছিল সাধারণ, আর এটি ছোট করে আনে কে অনুমতি নেবে আর কখন।"
          },
          {
            "en": "Ibn Kathir draws the line just as clearly. The opening of the surah concerned unrelated people seeking leave of each other; these verses concern relatives and household seeking leave among themselves. Ma'arif al-Qur'an adds that once the men of a house have come in, the family lives together and moves freely from room to room, so a separate rule is needed only for the hours when a person wants to be by himself. The verse does not fence the household off from itself. It reaches into it gently, and only at a few marked points in the day.",
            "bn": "ইবন কাসীর রেখাটা ঠিক তেমনি স্পষ্ট করে টানেন। সূরার শুরুর কথা ছিল অসম্পর্কিত মানুষদের একে অন্যের কাছে অনুমতি নেওয়া নিয়ে, আর এই আয়াতগুলোর কথা আত্মীয় ও ঘরের লোকদের নিজেদের মধ্যে অনুমতি নেওয়া নিয়ে। মাআরিফুল কুরআন যোগ করে, ঘরের পুরুষেরা একবার ঢুকে পড়ার পর গোটা পরিবার একসঙ্গে থাকে, ঘরময় অবাধে যাওয়া-আসা করে। তাই আলাদা নিয়ম দরকার শুধু সেই সময়গুলোর জন্য, যখন মানুষ একা থাকতে চায়। আয়াতটি ঘরকে নিজের থেকেই আলাদা করে দেয় না। এটি নরমভাবে ভেতরে পৌঁছায়, দিনের গুটিকয় চিহ্নিত সময়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Three Quiet Hours",
          "bn": "তিনটি নীরব প্রহর"
        },
        "p": [
          {
            "en": "The three times are named without euphemism and without excess. Before the dawn prayer, because people are still asleep in their bedding; at midday, when a person lays his clothes aside for the noon rest; and after the night prayer, because that is the hour of sleep. As-Sa'di observes that night sleep usually means a change out of the daytime clothes into something else, while the midday rest is short and a servant may lie down still dressed, so the verse ties that middle hour to the act itself: and when you put aside your garments at noon.",
            "bn": "তিনটি সময়ের নাম বলা হয়েছে কোনো ঘোরানো কথা ছাড়া, বাড়াবাড়ি ছাড়া। ফজরের নামাযের আগে, কারণ মানুষ তখনো বিছানায় ঘুমিয়ে; দুপুরে, যখন মানুষ দুপুরের বিশ্রামের জন্য কাপড় খুলে রাখে; আর ইশার নামাযের পর, কারণ ওটা ঘুমের সময়। সা'দী লক্ষ করেন, রাতের ঘুমে মানুষ সাধারণত দিনের পোশাক ছেড়ে অন্য কিছু পরে, আর দুপুরের বিশ্রাম যেহেতু ছোট, দাসদাসী হয়তো পরনের কাপড়েই শুয়ে পড়ে। তাই আয়াত মাঝের সময়টিকে কাজটির সঙ্গেই বেঁধে দেয়: আর যখন দুপুরে তোমরা কাপড় খুলে রাখ।"
          },
          {
            "en": "And who is told to ask? The servants of the house, male and female, and the free children who have not yet reached puberty. At-Tabari records two early readings of the words those your right hands possess: Ibn Umar restricted them to males, while others read them of both men and women, since the phrase covers every servant without distinction. At-Tabari himself favours the general sense. Al-Baghawi adds a fine point about the children meant: not the infants who notice nothing of such matters, but the young who have begun to understand them and yet are not grown.",
            "bn": "আর কাকে অনুমতি নিতে বলা হচ্ছে? ঘরের দাসদাসী, নারী-পুরুষ উভয়ে, আর যে স্বাধীন শিশুরা এখনো বয়ঃপ্রাপ্ত হয়নি। তাবারী মালিকানাধীন দাসদাসী কথাটির দুটি প্রাথমিক পাঠ তুলে ধরেন: ইবন উমার (রাঃ) একে কেবল পুরুষদের বলে রাখেন, আর অন্যেরা একে নারী-পুরুষ উভয়ের বলে পড়েন, কারণ কথাটি ভেদাভেদ ছাড়া সব দাসদাসীকে ঢেকে নেয়। তাবারী নিজে সাধারণ অর্থটিকেই পছন্দ করেন। বাগাভী শিশুদের নিয়ে একটি সূক্ষ্ম কথা যোগ করেন: এরা সেই শিশু নয় যারা এসব কিছুই বোঝে না, বরং যারা বুঝতে শুরু করেছে অথচ এখনো বড় হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Named as Uncovered Times",
          "bn": "যাদের নাম আবরুহীন প্রহর"
        },
        "p": [
          {
            "en": "Then the verse gathers the three into a phrase: these are three times of privacy for you. The word is 'awrat, the plural of 'awra. Al-Qurtubi glosses it soberly as the hours in which a person is likely to be uncovered and at rest, and traces the sense back to the root idea of a thing with no barrier before it. He runs through why each hour qualifies: before dawn a person leaves the clothes of night for those of day, the noon rest is again a time of undress, and after the night prayer a person undresses for sleep. In these hours exposure is the rule, not the exception.",
            "bn": "এরপর আয়াত তিনটিকে এক কথায় জড়ো করে: এ তোমাদের তিনটি আবরুহীন সময়। শব্দটি 'আওরাত, 'আওরার বহুবচন। কুরতুবী একে ধীর কথায় ব্যাখ্যা করেন সেই সময়গুলো বলে, যখন মানুষ আবরুহীন আর বিশ্রামে থাকার সম্ভাবনা বেশি, আর অর্থটির শিকড় ধরিয়ে দেন এমন জিনিসের ভাবনায়, যার সামনে কোনো আড়াল নেই। প্রতিটি সময় কেন এর মধ্যে পড়ে, তা তিনি খুলে বলেন: ফজরের আগে মানুষ রাতের কাপড় ছেড়ে দিনের কাপড় পরে, দুপুরের বিশ্রাম আবার কাপড় খোলার সময়, আর ইশার পর মানুষ ঘুমের জন্য কাপড় খোলে। এই প্রহরগুলোতে আবরুহীন থাকাটাই নিয়ম, ব্যতিক্রম নয়।"
          },
          {
            "en": "The reciters read the phrase two ways. The readers of Medina and Basra raised the word, so that it stands as a fresh statement in its own right: these are three times of privacy. The Kufans, among them Hamza and al-Kisa'i, read it in the accusative, tying it back to the three times named just before. At-Tabari judges the two readings close in meaning and both sound, so that whichever a reciter recites he is correct, and al-Farra' preferred the first as the clearer. Either way the ruling that the phrase carries does not change.",
            "bn": "ক্বারীরা কথাটি দুইভাবে পড়েন। মদীনা ও বসরার ক্বারীরা শব্দটিকে পেশ দিয়ে পড়েন, যাতে তা নিজে থেকেই এক নতুন বাক্য হয়ে দাঁড়ায়: এ তোমাদের তিনটি আবরুহীন সময়। কূফার ক্বারীরা, যাদের মধ্যে হামযা ও কিসাঈ, একে যবর দিয়ে পড়েন, ঠিক আগে বলা তিন সময়ের সঙ্গে জুড়ে দিয়ে। তাবারী দুটি পাঠকেই অর্থে কাছাকাছি আর দুটোই বিশুদ্ধ বলে রায় দেন, তাই ক্বারী যেভাবেই পড়ুক সে সঠিক, আর ফাররা প্রথমটিকে বেশি স্পষ্ট বলে পছন্দ করেন। যেভাবেই পড়া হোক, কথাটি যে বিধান বহন করে তা বদলায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Door Stays Open",
          "bn": "দরজা কেন খোলা থাকে"
        },
        "p": [
          {
            "en": "Beyond these hours the verse lifts the burden at once: there is no blame upon you nor upon them beyond these times. The reason follows in a single word, tawwafun, they move about among you, some of you attending to others. As-Sa'di explains that servants are needed constantly, so to require permission of them at every moment of the day would be a real hardship. The command is therefore aimed narrowly at the three hours of privacy and lifted for the rest of the day, when people are dressed and busy with their ordinary work.",
            "bn": "এই প্রহরগুলোর বাইরে আয়াত সঙ্গে সঙ্গেই ভার নামিয়ে দেয়: এই সময়গুলোর পর তোমাদের উপর আর তাদের উপর কোনো দোষ নেই। কারণটা আসে একটিমাত্র শব্দে, তাওয়াফূন, তারা তোমাদের মাঝে ঘুরে বেড়ায়, তোমাদের একে অন্যের কাজে লেগে থাকে। সা'দী বলেন, দাসদাসীর দরকার পড়ে সারাক্ষণ, তাই দিনের প্রতিটি মুহূর্তে তাদের কাছে অনুমতি চাওয়া সত্যিই কষ্টকর হতো। তাই আদেশটি ঠিক করে দেওয়া হয়েছে কেবল তিনটি আবরুহীন প্রহরের জন্য, আর দিনের বাকি সময়ে তুলে নেওয়া হয়েছে, যখন মানুষ পোশাক পরা আর নিজের কাজে ব্যস্ত।"
          },
          {
            "en": "Ibn Kathir links that very word to a saying of the Prophet. When he was asked about a cat that had drunk from water set out for ablution, he said it was not impure, for it was one of those that move about among you, min al-tawwafin 'alaykum. Tirmidhi records this from Kabsha bint Ka'b, who watched Abu Qatada tilt the vessel so the cat could drink, and Tirmidhi calls it the soundest report narrated in its chapter. What lives and circulates in a home is given a latitude that a mere visitor is not, and the household is read the same way.",
            "bn": "ইবন কাসীর ঠিক এই শব্দটিকে নবী ﷺ-এর একটি কথার সঙ্গে মেলান। তাঁকে যখন একটি বিড়াল নিয়ে জিজ্ঞেস করা হলো, যে অযুর জন্য রাখা পানি থেকে পান করেছিল, তিনি বললেন সেটি নাপাক নয়, কারণ সেটি তোমাদের মাঝে ঘুরে বেড়ানোদের একটি, মিন আত-তাওয়াফীন আলাইকুম। তিরমিযী এটি বর্ণনা করেন কাবশা বিনতে কা'ব (রাঃ)-এর সূত্রে, যিনি দেখেছিলেন আবু কাতাদা (রাঃ) পাত্রটি হেলিয়ে ধরলেন যাতে বিড়ালটি পান করতে পারে, আর তিরমিযী একে এ অধ্যায়ের সবচেয়ে বিশুদ্ধ বর্ণনা বলেন। ঘরে যা থাকে আর ঘুরে বেড়ায় তাকে এমন ছাড় দেওয়া হয় যা কোনো অতিথিকে দেওয়া হয় না, আর ঘরের লোকদেরও একইভাবে পড়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Within the Household",
          "bn": "ঘরের ভেতরের মানুষ"
        },
        "p": [
          {
            "en": "The verse speaks to a household of its own time, a home that included bondservants, and it is worth naming that plainly. Its living concern is not the institution but the manners owed within a home: even those with the freest run of its rooms are taught to pause at the door. Ma'arif al-Qur'an notes that an adult male servant stood, in the law of that day, among the non-mahram, so the phrase here is understood chiefly of the servant-girls and of the young who came and went about the house without anyone thinking to stop them.",
            "bn": "আয়াতটি কথা বলে তার নিজের কালের এক ঘর নিয়ে, যে ঘরে দাসদাসীও ছিল, আর এ কথা সোজাসুজি বলা দরকার। এর জীবন্ত ভাবনা এই প্রথা নিয়ে নয়, বরং ঘরের ভেতরে যে আদব পাওনা তা নিয়ে: ঘরের কামরাগুলোতে যাদের যাতায়াত সবচেয়ে অবাধ, তাদেরও দুয়ারে থমকে দাঁড়াতে শেখানো হয়। মাআরিফুল কুরআন লক্ষ করে, সেকালের বিধানে বয়স্ক পুরুষ দাস ছিল না-মাহরামদের মধ্যে, তাই এখানকার কথাটি বোঝা হয় মূলত দাসীদের আর সেই ছোটদের নিয়ে, যারা ঘরময় আসা-যাওয়া করত অথচ কেউ তাদের থামানোর কথা ভাবত না।"
          },
          {
            "en": "This much must be said without hedging. The verse describes the household as it then was and lays a duty of restraint and cover upon the people of the house; it licenses nothing against any living person and grants no one a claim over another today. Its enduring instruction runs the other way, toward guarding the rest and dignity of everyone who shares a roof. Read now, it protects the servant and the child, not any master's convenience, and it asks the strong of the house to make room for the privacy of the weak.",
            "bn": "এটুকু কোনো রাখঢাক ছাড়াই বলা দরকার। আয়াতটি ঘরকে বর্ণনা করে তখন যেমন ছিল তেমনভাবে, আর ঘরের লোকদের উপর সংযম আর আবরুর একটি দায়িত্ব রাখে। এটি কোনো জীবিত মানুষের বিরুদ্ধে কিছুরই অনুমতি দেয় না, আজ কাউকে অন্যের উপর কোনো দাবিও দেয় না। এর টিকে থাকা শিক্ষা চলে উল্টো দিকে, এক ছাদের নিচে থাকা প্রত্যেকের বিশ্রাম আর মর্যাদা আগলে রাখার দিকে। আজ পড়লে এটি আগলায় দাসদাসী আর শিশুকে, কোনো মালিকের সুবিধাকে নয়, আর ঘরের শক্তিমানকে বলে দুর্বলের একান্ততার জন্য জায়গা ছেড়ে দিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Did the Rule Lapse?",
          "bn": "বিধান কি উঠে গেছে?"
        },
        "p": [
          {
            "en": "Did this command stay in force, or was it set aside? The commentators divide, and al-Qurtubi lays out their positions side by side. Some held it abrogated; Abu Qilaba read it as a recommendation rather than an obligation; and the greater number, among them al-Qasim, Jabir bin Zayd and ash-Sha'bi, held it firm and binding upon men and women alike. When ash-Sha'bi was told that people no longer act on it, he answered only, From God is help sought. Sa'id bin Jubayr likewise denied it was ever abrogated, and said rather that people had grown lax with it.",
            "bn": "এই আদেশ কি বহাল রইল, নাকি সরিয়ে রাখা হলো? তাফসীরকারেরা ভাগ হয়ে যান, আর কুরতুবী তাঁদের মতগুলো পাশাপাশি সাজিয়ে দেন। কেউ একে রহিত বলেছেন; আবু কিলাবা একে ওয়াজিব নয়, বরং উপদেশ বলে পড়েছেন; আর বেশির ভাগ, যাঁদের মধ্যে কাসিম, জাবির বিন যায়দ ও শা'বী, একে দৃঢ় আর নারী-পুরুষ সবার উপর অবশ্যপালনীয় বলে ধরেছেন। শা'বীকে যখন বলা হলো মানুষ আর এতে আমল করে না, তিনি শুধু জবাব দিলেন, আল্লাহই সহায়। সাঈদ বিন জুবায়রও অস্বীকার করেন যে এটি কখনো রহিত হয়েছে, বরং বলেন মানুষ এতে গা-ছাড়া হয়ে গেছে।"
          },
          {
            "en": "Ibn Abbas gave the fullest account, and Ibn Kathir grades the chain to him sound. He explained that in early days houses had no curtains or screens, so a servant, a child or a ward might come upon a couple unawares, and the command guarded against exactly that; later, when curtains and easier means came, people judged that these now sufficed. Yet Ibn Abbas named this among three verses that people had abandoned, alongside the verse of sharing at an inheritance (4:8) and the verse that the noblest of you is the most God-fearing, and said he still ordered his own servant-girl to ask leave before entering upon him.",
            "bn": "ইবন আব্বাস (রাঃ) সবচেয়ে পূর্ণ বিবরণ দেন, আর ইবন কাসীর তাঁর পর্যন্ত সনদকে বিশুদ্ধ বলেন। তিনি বুঝিয়ে বলেন, আগেকার দিনে ঘরে পর্দা বা আড়াল ছিল না, তাই কোনো দাস, শিশু বা প্রতিপালিত অনাথ হঠাৎ স্বামী-স্ত্রীর সামনে পড়ে যেতে পারত, আর আদেশটি ঠিক সেটাই আগলাত। পরে যখন পর্দা আর সহজ উপায় এল, মানুষ ভাবল এসবই এখন যথেষ্ট। তবু ইবন আব্বাস (রাঃ) একে সেই তিনটি আয়াতের একটি বলে গণনা করেন যা মানুষ ছেড়ে দিয়েছে, উত্তরাধিকার ভাগের সময় আত্মীয়দের দেওয়ার আয়াত (৪:৮) আর তোমাদের মধ্যে সবচেয়ে সম্মানিত সেই যে সবচেয়ে বেশি আল্লাহভীরু, সেই আয়াতের পাশে, আর বলেন তিনি এখনো নিজের দাসীকে তাঁর কাছে ঢোকার আগে অনুমতি নিতে বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Command Arose",
          "bn": "আদেশ যেভাবে এল"
        },
        "p": [
          {
            "en": "The mufassirun preserve two occasions for the revelation and give both without ranking one over the other. Al-Baghawi and al-Qurtubi relate, from Ibn Abbas, that the Prophet sent a young man of the Ansar named Mudlij to call Umar at midday, and the boy came in upon him at an hour Umar wished not to be seen; the verse then came down, and in one telling Umar prostrated in thanks. Muqatil relates instead that it concerned Asma bint Marthad, whose grown servant entered upon her at a time she disliked, and who carried her complaint to the Prophet.",
            "bn": "মুফাসসিরগণ আয়াত নাযিলের দুটি উপলক্ষ ধরে রাখেন আর দুটোকেই দেন একটির উপর অন্যটিকে না বসিয়ে। বাগাভী ও কুরতুবী ইবন আব্বাস (রাঃ)-এর সূত্রে বর্ণনা করেন, নবী ﷺ আনসারদের মুদলিজ নামে এক তরুণকে দুপুরবেলা উমার (রাঃ)-কে ডাকতে পাঠালেন, আর ছেলেটি এমন এক প্রহরে তাঁর কাছে ঢুকে পড়ল যখন উমার (রাঃ) নিজেকে দেখাতে চাননি; তখন আয়াতটি নাযিল হয়, আর এক বর্ণনায় উমার (রাঃ) কৃতজ্ঞতায় সিজদায় লুটিয়ে পড়েন। মুকাতিল বরং বর্ণনা করেন এটি আসমা বিনতে মারসাদ (রাঃ)-কে নিয়ে, যাঁর বয়স্ক দাস এমন সময়ে তাঁর কাছে ঢুকে পড়ত যা তিনি অপছন্দ করতেন, আর যিনি তাঁর অভিযোগ নবী ﷺ-এর কাছে নিয়ে যান।"
          },
          {
            "en": "The two reports point the same way. Whatever the setting, the concern is a member of the household coming upon another at a private hour, and the remedy is a small act of asking. That the verse closes, like the one that follows it, with the words God is Knowing and Wise tells the reader that the rule is not arbitrary. It is placed with knowledge of how people actually live and with a wisdom that fits every ordinance to its purpose, as as-Sa'di reads the closing names.",
            "bn": "দুটি বর্ণনাই একই দিকে ইশারা করে। প্রেক্ষাপট যা-ই হোক, ভাবনাটা ঘরের একজন লোকের অন্যজনের একান্ত প্রহরে সামনে পড়ে যাওয়া নিয়ে, আর সমাধানটা অনুমতি চাওয়ার ছোট্ট একটি কাজ। আয়াতটি পরের আয়াতের মতোই যে আল্লাহ সর্বজ্ঞ, প্রজ্ঞাময় কথায় শেষ হয়, তা পাঠককে বলে দেয় বিধানটি খেয়ালখুশির নয়। এটি রাখা হয়েছে মানুষ আসলে কীভাবে জীবন কাটায় তার জ্ঞান নিয়ে, আর এমন প্রজ্ঞা নিয়ে যা প্রতিটি বিধানকে তার উদ্দেশ্যের সঙ্গে মানিয়ে দেয়, সা'দী শেষের নামগুলো এভাবেই পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Teaching the Soft Knock",
          "bn": "মৃদু কড়া নাড়া শেখানো"
        },
        "p": [
          {
            "en": "The practical weight of the verse falls on the elders, not on the children. Ma'arif al-Qur'an points out that it is the grown who are charged with teaching the young to pause at these hours, much as a household teaches a child to pray at the age of seven before the child is bound to the prayer at all. Privacy, read this way, is something taught and learned: a knock, a raised voice, a moment's wait at the threshold, planted early and kept as an adab of the home rather than merely imposed as a rule from above.",
            "bn": "আয়াতের কার্যকর ভারটা পড়ে বড়দের উপর, শিশুদের উপর নয়। মাআরিফুল কুরআন ধরিয়ে দেয়, ছোটদের এই প্রহরগুলোতে থমকে দাঁড়াতে শেখানোর দায়িত্ব বড়দেরই, অনেকটা যেমন ঘর শিশুকে ৭ বছর বয়সে নামায শেখায় শিশুটি নামাযের জন্য দায়ী হয়ে ওঠার অনেক আগেই। এভাবে দেখলে একান্ততা এমন এক জিনিস যা শেখানো আর শেখা হয়: কড়া নাড়া, গলা উঁচু করা, দুয়ারে এক মুহূর্ত অপেক্ষা, ছোটবেলায় বুনে দেওয়া আর ঘরের এক আদব হিসেবে ধরে রাখা, উপর থেকে চাপানো কেবল একটি নিয়ম হিসেবে নয়।"
          },
          {
            "en": "The verse also turns modesty inward. Cover and discretion are not only for the street and the stranger; they are a discipline that reaches the bedroom door and the noon rest, kept even among those most trusted. And it is taught gently, framed as ease rather than suspicion: ask at these hours, and move freely through the rest of the day. That God seals the verse by calling Himself Knowing and Wise is the mark set on a law whose whole aim is to protect rest, dignity, and the quiet of a home.",
            "bn": "আয়াতটি লজ্জাশীলতাকেও ভেতরের দিকে ফেরায়। আবরু আর সংযম কেবল পথ আর অচেনা মানুষের জন্য নয়; এ এমন এক নিয়ম যা শোবার ঘরের দরজা আর দুপুরের বিশ্রাম পর্যন্ত পৌঁছায়, সবচেয়ে বিশ্বস্ত মানুষদের মাঝেও ধরে রাখা হয়। আর তা শেখানো হয় নরমভাবে, সন্দেহ নয়, বরং সহজতা হিসেবে গড়ে: এই প্রহরগুলোতে অনুমতি নাও, আর দিনের বাকি সময় অবাধে চলাফেরা করো। আল্লাহ আয়াতটির শেষে নিজেকে সর্বজ্ঞ, প্রজ্ঞাময় বলে যে সিলমোহর দেন, তা এমন এক বিধানের গায়ে বসানো ছাপ, যার গোটা উদ্দেশ্য ঘরের বিশ্রাম, মর্যাদা আর নীরবতা আগলে রাখা।"
          }
        ]
      }
    ]
  }
});
