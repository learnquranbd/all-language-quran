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
          "bn": "আইন, ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "The Qur'an opens this sūrah by calling it a chapter We have sent down and made obligatory (24:1), and its first command is this fixed penalty for zinā, unlawful intercourse. Al-Qurtubi is emphatic on one point that removes most of the danger people fear: there is no disagreement that the one addressed by this command is the ruling authority and whoever stands in his place. Ordinary Muslims are charged with wanting the law upheld, but the state carries it out, because they cannot assemble to enforce a ḥadd themselves.",
            "bn": "সূরাটির শুরুতেই কুরআন একে বলেছে এমন এক সূরা, যা আমি নাজিল করেছি এবং ফরজ করে দিয়েছি (২৪:১)। আর এর প্রথম হুকুমই হলো যিনা, অর্থাৎ অবৈধ যৌনসম্পর্কের এই নির্ধারিত শাস্তি। কুরতুবী একটি বিষয়ে খুব জোর দেন, আর এতেই মানুষ যে বিপদের ভয় করে তার বেশির ভাগ দূর হয়ে যায়: এই হুকুম যাকে উদ্দেশ করে দেওয়া, তিনি শাসক কিংবা তাঁর স্থলাভিষিক্ত কেউ, এ নিয়ে কোনো মতভেদ নেই। সাধারণ মুসলিমের দায়িত্ব শুধু এটুকু চাওয়া যে আইনটি কায়েম থাকুক। কার্যকর করবে রাষ্ট্র, কারণ সাধারণ মানুষ নিজেরা জড়ো হয়ে হদ কায়েম করতে পারে না।"
          },
          {
            "en": "That single ruling settles what the verse does not do. It hands nothing to a family, a crowd, a neighbour, or a self-appointed guardian of virtue. Al-Qurtubi adds that a ḥadd is carried out only before the judges, by upright people the ruler selects, because, in his words, the blood and honour of a Muslim are grave and must be safeguarded by every means. So this verse describes a judicial ordinance and licenses nothing against any living person or community: no vigilante punishment, no honour violence, no private hand raised in God's name.",
            "bn": "এই একটি রায়ই পরিষ্কার করে দেয়, আয়াতটি কী করে না। পরিবার, জনতা, প্রতিবেশী বা নিজে থেকে নীতির পাহারাদার সেজে বসা কারও হাতে আয়াত কিছুই তুলে দেয় না। কুরতুবী আরও বলেন, হদ কার্যকর হয় কেবল বিচারকদের সামনে, শাসকের বেছে নেওয়া সৎ লোকদের হাতে। কারণ তাঁর ভাষায়, মুসলিমের রক্ত ও সম্মান অনেক বড় জিনিস, সম্ভাব্য সব উপায়ে তা রক্ষা করতে হবে। তাই এ আয়াত বিচারের একটি বিধান বর্ণনা করে, কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না: নিজ হাতে শাস্তি দেওয়া নয়, সম্মানের নামে সহিংসতা নয়, আল্লাহর নামে কারও ব্যক্তিগত হাত তোলা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wall of Four Witnesses",
          "bn": "চার সাক্ষীর দেয়াল"
        },
        "p": [
          {
            "en": "Now weigh what the sharīʿa demands before this penalty can ever touch a person. Ma'arif al-Qur'an notes that in ordinary claims the testimony of two witnesses settles a matter, but for the ḥadd of zinā the law requires four upright male eyewitnesses to the act itself, testifying without the slightest doubt or confusion. Al-Qurtubi's very definition of the crime excludes any act carried out under the semblance of a lawful marriage, and the jurists hold that where doubt enters, the ḥadd falls away.",
            "bn": "এবার ভেবে দেখুন, এই শাস্তি কারও গায়ে পড়ার আগে শরিয়ত কী কী শর্ত চায়। মাআরিফুল কুরআন বলে, সাধারণ মামলায় দুজন সাক্ষীর সাক্ষ্যেই ফয়সালা হয়ে যায়। কিন্তু যিনার হদের জন্য আইন চায় চারজন সৎ পুরুষ, যারা নিজ চোখে ঘটনাটা দেখেছে এবং বিন্দুমাত্র সন্দেহ বা গোলমাল ছাড়া সাক্ষ্য দেবে। কুরতুবী অপরাধটির যে সংজ্ঞা দেন, তাতেই বাহ্যত বৈধ বিয়ের মতো অবস্থায় ঘটা যেকোনো কাজ বাদ পড়ে যায়। আর ফকিহগণ বলেন, যেখানে সন্দেহ ঢোকে, সেখানে হদ বাতিল হয়ে যায়।"
          },
          {
            "en": "Then comes the turn that reveals the passage's real aim. The next verse commands that those who accuse chaste people and then fail to produce four witnesses be flogged with eighty lashes, their testimony refused ever after (24:4). Ma'arif draws the consequence plainly: a witness whose account is rejected can himself be charged with false accusation, so no one will dare testify where the smallest uncertainty remains. The law is built to make accusation almost impossible, not to hunt the guilty.",
            "bn": "এরপর আসে সেই মোড়, যেখানে গোটা অংশের আসল লক্ষ্য ধরা পড়ে। পরের আয়াত হুকুম দেয়: যারা সতী-সাধ্বী মানুষের নামে অপবাদ দেয়, অথচ চারজন সাক্ষী হাজির করতে পারে না, তাদের আশিটি বেত্রাঘাত কর, আর তাদের সাক্ষ্য আর কখনো গ্রহণ কোরো না (২৪:৪)। মাআরিফুল কুরআন এর ফলটা সোজাসুজি বলে দেয়: যে সাক্ষীর বক্তব্য খারিজ হয়, তার বিরুদ্ধেই মিথ্যা অপবাদের মামলা হতে পারে। তাই সামান্যতম সংশয় থাকলে কেউ সাক্ষী দিতে সাহস পাবে না। আইনটা গড়া হয়েছে অভিযোগকে প্রায় অসম্ভব করতে, অপরাধী খুঁজে বেড়াতে নয়।"
          },
          {
            "en": "So the thrust of these opening verses is protection: of chastity on one side and of reputation on the other. The false accuser is not left without hope either, for the very next passage exempts those who repent afterward and make amends (24:5). Read together, the verses raise the cost of a careless tongue as high as the cost of the sin itself. Guarding a person's good name, they say, is not softness; it is obedience.",
            "bn": "তাই শুরুর এই আয়াতগুলোর মূল ঝোঁক রক্ষা করা: একদিকে সতীত্ব, অন্যদিকে সুনাম। মিথ্যা অপবাদদাতাকেও আশাহীন রাখা হয়নি। ঠিক পরের আয়াতই তাদের রেহাই দেয়, যারা পরে তওবা করে নিজেকে শুধরে নেয় (২৪:৫)। আয়াতগুলো একসঙ্গে পড়লে দেখা যায়, বেপরোয়া জিভের দাম গুনাহের দামের মতোই চড়া। আয়াতগুলো বলছে, কারও সুনাম আগলে রাখা নরম মনের দুর্বলতা নয়, এ হলো আল্লাহর হুকুম মানা।"
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
            "bn": "আয়াতে শাস্তি বলা হয়েছে দুজনের প্রত্যেককে একশ বেত্রাঘাত। তাফসীরকারেরা স্পষ্ট করে দেন, এ শাস্তি কার জন্য: স্বাধীন, প্রাপ্তবয়স্ক, সুস্থমস্তিষ্ক অবিবাহিত মানুষের জন্য। বাগভী বলেন, 'জালদ' মানে চামড়ায় আঘাত করা। শব্দটির ভেতরেই সংযমের ইঙ্গিত আছে, কারণ আঘাত যেন চামড়া কেটে গোশত পর্যন্ত না পৌঁছায়। কুরতুবী বর্ণনা করেন, নবী ﷺ-এর কাছে একটি চাবুক আনা হয়েছিল, যা এত নতুন নয় যে শক্ত, আবার এত পুরনোও নয় যে নরম, বরং শক্ত আর নরমের মাঝামাঝি। যা দিয়ে মারা হবে, সেটাও মেপে ঠিক করা ছিল।"
          },
          {
            "en": "This hundred-lash penalty, the commentators are careful to say, concerns the unmarried. On the married they report a separate discussion, and this article only reports it. As-Sa'di and Ibn Kathir hold, on what they call the established Sunnah, that the married offender's ḥadd is stoning; Ibn Kathir cites the address of ʿUmar and a narration through ʿUbādah ibn aṣ-Ṣāmit. Al-Qurtubi records that the majority read this verse as specific to the unmarried, while Isḥāq ibn Rāhawayh and al-Ḥasan combined flogging with stoning. Their dispute is theirs; the verse before us fixes the hundred lashes.",
            "bn": "তাফসীরকারেরা সতর্কভাবে বলেন, এই একশ বেত্রাঘাতের শাস্তি অবিবাহিতের বেলায়। বিবাহিতদের নিয়ে তাঁরা আলাদা এক আলোচনার কথা জানান, আর এই লেখা কেবল সেটুকু জানায়। সা'দী ও ইবন কাসীর প্রতিষ্ঠিত সুন্নাহর ভিত্তিতে মনে করেন, বিবাহিত অপরাধীর হদ রজম। ইবন কাসীর উমর (রাঃ)-এর ভাষণ ও উবাদা ইবন সামিত (রাঃ)-এর সূত্রে বর্ণনা উদ্ধৃত করেন। কুরতুবী জানান, অধিকাংশ আলিম এ আয়াতকে অবিবাহিতের জন্য নির্দিষ্ট পড়েন, আর ইসহাক ইবন রাহওয়াইহ ও হাসান বেত্রাঘাতের সঙ্গে রজম যুক্ত করেছেন। তাঁদের মতভেদ তাঁদেরই। আমাদের সামনের আয়াত একশ বেত্রাঘাত বেঁধে দেয়।"
          },
          {
            "en": "Ma'arif sets the ruling in its sequence. The earliest directive, in Sūrat an-Nisā', confined such women to their homes and left the harm to both undefined (4:15 and 4:16), a stage the Qur'an itself marked as provisional. Al-Qurtubi records the agreement that the present verse abrogates those earlier verses of confinement and harm. Ibn ʿAbbās, cited by Ma'arif, understood this sūrah to be the promised way forward. The law arrived by stages, and this verse is where the fixed number is set down.",
            "bn": "মাআরিফুল কুরআন হুকুমটিকে তার ধাপের ভেতরে বসিয়ে দেখায়। প্রথম নির্দেশ এসেছিল সূরা নিসায়: এমন নারীদের ঘরে আটকে রাখতে হবে, আর দুজনকেই কষ্ট দিতে হবে, তবে সে কষ্ট কী, তা বলা হয়নি (৪:১৫ ও ৪:১৬)। কুরআন নিজেই এ ধাপকে সাময়িক বলে চিহ্নিত করেছিল। কুরতুবী জানান, এ ব্যাপারে সবাই একমত যে বর্তমান আয়াত আটকে রাখা ও কষ্ট দেওয়ার সেই আগের আয়াতগুলোকে রহিত করেছে। মাআরিফুল কুরআন ইবন আব্বাস (রাঃ)-এর কথা উদ্ধৃত করে: তিনি এ সূরাকেই সেই প্রতিশ্রুত পথ বলে বুঝেছিলেন। আইন এসেছে ধাপে ধাপে, আর এই আয়াতেই নির্দিষ্ট সংখ্যাটি ঠিক করে দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pity That Suspends Justice",
          "bn": "যে দয়া বিচার থামায়"
        },
        "p": [
          {
            "en": "The words wa-lā ta'khudhkum bihimā ra'fah, let no pity for the two seize you in the religion of Allah, are the most easily misread in the verse, so the commentators are exact. At-Tabari records that they divided here. Most, including Mujahid and ʿAṭā', take it to forbid abandoning the ḥadd once guilt is established; another group, al-Ḥasan and Saʿīd ibn al-Musayyab, take it to forbid softening the blows. At-Tabari prefers the first reading, since the phrase in the religion of Allah points to the duty of carrying out what He commanded.",
            "bn": "'ওয়ালা তা'খুযকুম বিহিমা রা'ফাহ', অর্থাৎ আল্লাহর দ্বীনের ব্যাপারে ওদের প্রতি দয়া যেন তোমাদের পেয়ে না বসে। আয়াতের এ অংশটাই সবচেয়ে সহজে ভুল বোঝা হয়, তাই তাফসীরকারেরা এখানে খুব মেপে কথা বলেন। তাবারী জানান, এখানে আলিমদের দুটি মত। মুজাহিদ ও আতাসহ অধিকাংশের মতে, দোষ প্রমাণিত হওয়ার পর হদ ছেড়ে দেওয়া নিষেধ। আরেক দল, হাসান ও সাঈদ ইবনুল মুসায়্যিব, মনে করেন, এখানে আঘাত হালকা করতে নিষেধ করা হয়েছে। তাবারী প্রথম মতটিকেই অগ্রাধিকার দেন, কারণ 'আল্লাহর দ্বীনে' কথাটি ইঙ্গিত করে আল্লাহর হুকুম কার্যকর করার দায়িত্বের দিকে।"
          },
          {
            "en": "Ibn Kathir closes the door on the cruel misreading. The pity forbidden here, he explains through Mujahid, is only the pity that would make a judge drop a punishment the law requires once the case has reached the authority. It is not a command against tenderness of heart. Feeling pity while carrying out a sentence, Ibn Kathir says, is natural and not forbidden; when a Companion admitted he felt pity even slaughtering a sheep, the Prophet ﷺ told him he would be rewarded for it.",
            "bn": "ইবন কাসীর নিষ্ঠুর ভুল ব্যাখ্যার দরজাটা বন্ধ করে দেন। মুজাহিদের সূত্রে তিনি বলেন, এখানে যে দয়া নিষেধ, তা কেবল সেই দয়া, যার কারণে মামলা কর্তৃপক্ষের কাছে পৌঁছানোর পর বিচারক আইনের নির্ধারিত শাস্তি বাদ দিয়ে দেন। হৃদয়ের কোমলতার বিরুদ্ধে এটা কোনো হুকুম নয়। ইবন কাসীর বলেন, শাস্তি কার্যকর করার সময় মনে দয়া জাগা স্বাভাবিক, এতে নিষেধ নেই। এক সাহাবি বলেছিলেন, একটা ভেড়া জবাই করতে গিয়েও তাঁর মায়া লাগে। নবী ﷺ তাঁকে বললেন, এর জন্যও তিনি সওয়াব পাবেন।"
          },
          {
            "en": "Al-Baghawi makes the same distinction from another angle: pity is a motion of the heart, and it is not what the verse forbids, because it does not come by a person's choice. What is forbidden is letting that feeling suspend God's command. As-Sa'di turns it further still: real mercy toward the offender is that the ḥadd be carried out for him, so that his account is settled here. Mercy pervades the religion; this clause guards one narrow gate, the judge's, against sentiment overturning a verdict already proven.",
            "bn": "বাগভী একই পার্থক্য দেখান আরেক দিক থেকে: দয়া হৃদয়ের একটা নড়াচড়া, মানুষ ইচ্ছা করে তা আনে না, তাই আয়াত সেটা নিষেধ করে না। নিষেধ হলো সেই অনুভূতিকে আল্লাহর হুকুম আটকে দিতে দেওয়া। সা'দী আরও এক ধাপ এগিয়ে বলেন: অপরাধীর প্রতি আসল রহমত হলো তার উপর হদ কায়েম হওয়া, যাতে তার হিসাব এখানেই চুকে যায়। রহমত গোটা দ্বীন জুড়ে ছড়িয়ে আছে। এই কথাটুকু কেবল একটি সরু দরজা পাহারা দেয়, বিচারকের দরজা, যাতে প্রমাণিত রায় আবেগের কারণে উল্টে না যায়।"
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
            "bn": "দুটি কথা হুকুমটিকে মজবুত করে বেঁধে রাখে। তাবারী ও কুরতুবী বলেন, 'আল্লাহর দ্বীনে' মানে আল্লাহর বিধানে। এখানে 'দ্বীন' শব্দের অর্থ বিচার ও আইন, যেমন আরেক আয়াতে 'দ্বীনুল মালিক' মানে বাদশাহর আইন। এ শাস্তি মানুষে মানুষে মিটিয়ে নেওয়ার মতো ব্যক্তিগত নালিশ নয়। এটা আল্লাহর নিজের বিচারের বিষয়। তাই কেউ পক্ষপাত করে একে কমাতে পারে না, রাগের বশে বাড়াতেও পারে না।"
          },
          {
            "en": "The verse then binds obedience to faith: if you should believe in Allah and the Last Day. At-Tabari reads this as encouragement and steadying — whoever truly believes in the reckoning will not defy God's command out of fear of His punishment. Al-Qurtubi hears it as a spur, the way you tell someone, if you are a man, then do this. The clause does not threaten the accused; it addresses the believing community, tying its nerve to carry out justice to its certainty about the Day it will answer for everything.",
            "bn": "এরপর আয়াত আনুগত্যকে ঈমানের সঙ্গে বেঁধে দেয়: 'যদি তোমরা আল্লাহ ও শেষ দিনের উপর ঈমান রাখো।' তাবারীর মতে, এ কথা উৎসাহ দেয় আর মনকে দৃঢ় করে। যে সত্যিই হিসাবের দিনে বিশ্বাস করে, আল্লাহর শাস্তির ভয়ে সে তাঁর হুকুম অমান্য করবে না। কুরতুবী এতে দেখেন এক তাগিদ, যেমন কাউকে বলা হয়, তুমি যদি পুরুষ হও, তবে এটা করো। এ কথা অভিযুক্তকে ভয় দেখানোর জন্য নয়। এ কথা বলা হয়েছে মুমিন সমাজকে। ন্যায়বিচার কায়েমের সাহস তারা পাবে সেই দিনের উপর দৃঢ় বিশ্বাস থেকে, যেদিন সবকিছুর জবাব দিতে হবে।"
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
            "bn": "'আর একদল মুমিন যেন তাদের শাস্তি প্রত্যক্ষ করে।' একদল মানে কতজন, এ নিয়ে বিভিন্ন মত তাবারী ও কুরতুবী একসঙ্গে তুলে ধরেন। মুজাহিদ ও ইবন আব্বাস (রাঃ)-এর সূত্রে কারও মতে, একজন থেকে শুরু করে হাজার পর্যন্ত। আতা ও ইকরিমার সূত্রে কারও মতে দুজন। যুহরী ও কাতাদার সূত্রে কারও মতে তিনজন। আর মালিক প্রমুখের মতে চারজন, যিনার জন্য যত সাক্ষী লাগে তার সঙ্গে মিলিয়ে।"
          },
          {
            "en": "Why the public gathering? Al-Qurtubi records two purposes the scholars weighed. One is disgrace and deterrence: carrying out the ḥadd before people so that the offender and the onlookers take warning, the news spreads, and others are restrained. The other is gentler, that those present pray for the two, for their repentance and mercy. Even the harshest scene in the sūrah, the commentators leave open to a reading of concern rather than mere spectacle.",
            "bn": "প্রকাশ্যে লোক জড়ো করার দরকার কেন? কুরতুবী জানান, আলিমরা দুটি উদ্দেশ্যের কথা ভেবেছেন। একটি হলো লাঞ্ছনা ও সতর্কবার্তা: মানুষের সামনে হদ কায়েম করা, যাতে অপরাধী ও দর্শকেরা শিক্ষা নেয়, খবরটা ছড়ায়, আর অন্যরা বিরত থাকে। অন্যটি আরও কোমল: উপস্থিত লোকেরা যেন ওই দুজনের জন্য দোয়া করে, যাতে তাদের তওবা কবুল হয় আর তারা রহমত পায়। এভাবে সূরার সবচেয়ে কঠিন দৃশ্যটিকেও তাফসীরকারেরা নিছক তামাশা হিসেবে দেখেননি, সেখানেও মমতার একটা পাঠ খোলা রেখেছেন।"
          },
          {
            "en": "As-Sa'di adds a quieter reason: seeing a ruling actually carried out fixes it in people's understanding, so that it is neither added to nor cut short. Read with everything before it, the witnessing requirement is not a taste for punishment. It is the same instinct that set the evidentiary bar so high: the community sees justice done in the open, under law, by the authority, and no one carries a private sentence home to execute in the dark.",
            "bn": "সা'দী আরেকটি নীরব কারণ যোগ করেন: কোনো বিধান বাস্তবে কার্যকর হতে দেখলে তা মানুষের বুঝে গেঁথে যায়, ফলে কেউ তাতে কিছু বাড়ায়ও না, কমায়ও না। আগের সব কথার সঙ্গে মিলিয়ে পড়লে বোঝা যায়, সাক্ষী রাখার এই শর্ত শাস্তি দেখার শখ থেকে আসেনি। যে তাগিদ প্রমাণের শর্তকে এত কঠিন করেছিল, এটাও সেই একই তাগিদ। সমাজ দেখে, ন্যায়বিচার হচ্ছে খোলাখুলি, আইন মেনে, কর্তৃপক্ষের হাতে। কেউ নিজের বানানো রায় ঘরে নিয়ে গিয়ে অন্ধকারে কার্যকর করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The One Who Feared Him",
          "bn": "যে আল্লাহকে ভয় করল"
        },
        "p": [
          {
            "en": "The passage prescribes a penalty, but the Qur'an's deeper aim is the heart that never earns it. For a sound word from the Prophet ﷺ on exactly that, al-Bukhari records a hadith that honours the one who turns away when sin is within easy reach and no eye is watching. It is the mirror image of everything the ḥadd is built to deter.",
            "bn": "এই অংশে একটি শাস্তির বিধান আছে, কিন্তু কুরআনের আরও গভীর লক্ষ্য এমন হৃদয় গড়া, যে কখনো সে শাস্তির উপযুক্তই হয় না। ঠিক এ বিষয়ে নবী ﷺ-এর একটি সহিহ বাণী বুখারী বর্ণনা করেছেন। সেখানে সম্মান দেওয়া হয়েছে সেই মানুষকে, যে গুনাহ হাতের নাগালে পেয়েও, কেউ দেখছে না জেনেও, মুখ ফিরিয়ে নেয়। হদ যা ঠেকাতে চায়, এ ঠিক তার উল্টো ছবি।"
          },
          {
            "en": "The Prophet ﷺ said: 'Seven will Allah shade in His shade on the Day when there is no shade but His: a just ruler; a youth who grew up in the worship of his Lord; a man whose heart is attached to the mosques; two men who love each other for Allah's sake, meeting and parting upon that; a man whom a woman of rank and beauty calls to herself and he says, I fear Allah; a man who gives charity so secretly his left hand does not know what his right has spent; and a man who remembers Allah alone and his eyes overflow.'",
            "bn": "নবী ﷺ বলেছেন: 'যেদিন আল্লাহর ছায়া ছাড়া আর কোনো ছায়া থাকবে না, সেদিন আল্লাহ সাত ব্যক্তিকে তাঁর ছায়ায় আশ্রয় দেবেন: ন্যায়পরায়ণ শাসক; সেই যুবক, যে তার রবের ইবাদতের মধ্যে বেড়ে উঠেছে; সেই ব্যক্তি, যার অন্তর মসজিদের সঙ্গে বাঁধা; সেই দুই ব্যক্তি, যারা আল্লাহর জন্য একে অপরকে ভালোবাসে, এরই উপর একত্র হয় আর এরই উপর আলাদা হয়; সেই ব্যক্তি, যাকে কোনো সম্ভ্রান্ত সুন্দরী নারী ডাকে আর সে বলে, আমি আল্লাহকে ভয় করি; সেই ব্যক্তি, যে এত গোপনে দান করে যে তার ডান হাত কী খরচ করল, বাঁ হাত তা জানে না; আর সেই ব্যক্তি, যে নির্জনে আল্লাহর জিকির করে আর তার দুচোখ বেয়ে অশ্রু ঝরে।'"
          },
          {
            "en": "Its place is in Ṣaḥīḥ al-Bukhārī, and so it carries his authentication as sound. Notice what earns the shade: not a punishment carried out, but a private refusal, a man alone with temptation and no witness but Allah, who steps back. That is the chastity these verses are built to protect. The law's severity guards the same thing this man guarded freely, from the inside, when nobody would ever have known.",
            "bn": "হাদিসটি সহিহ বুখারীতে আছে, তাই বুখারীর সহিহ হওয়ার স্বীকৃতিও এর সঙ্গে আছে। খেয়াল করুন, ছায়াটা কীসের জন্য মেলে: কোনো শাস্তি ভোগের জন্য নয়, বরং গোপনে 'না' বলার জন্য। প্রলোভনের সামনে একা একজন মানুষ, আল্লাহ ছাড়া কোনো সাক্ষী নেই, তবু সে পিছিয়ে আসে। এই আয়াতগুলো এই সতীত্বই রক্ষা করতে চায়। আইনের কঠোরতা সেই জিনিসটাকেই পাহারা দেয়, যা এই মানুষটি ভেতর থেকে নিজের ইচ্ছায় পাহারা দিয়েছিল, যখন কেউ কোনোদিন জানতেও পারত না।"
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
            "bn": "এবার আদালতের কথা একটু সরিয়ে রাখুন, সে আদালত তো প্রায় কখনো বসতই না। দেখুন, আয়াতটি আসলে আমাদের জীবনের কাছে কী চায়। মাআরিফুল কুরআন গোটা সূরাটিকেই সতীত্ব রক্ষার সূরা হিসেবে পড়ে, এমনকি চোখের পবিত্রতা পর্যন্ত। দৃষ্টি নিচু রাখা আর ঘরে ঢোকার আগে অনুমতি চাওয়ার হুকুমও এর একটু পরেই এসেছে। পাঠক যে শিক্ষা নিয়ে জীবন চালাতে পারেন, তা চাবুকের কথা নয়। কথাটা হলো, পরিষ্কার হৃদয়, সংযত চোখ আর দাগহীন নামের দাম কত, আর একটা বেখেয়ালি কথা বা চাহনি কত সহজে তা খরচ করে ফেলে।"
          },
          {
            "en": "Hold the two truths the verse holds together. God's justice is real, and He named a heavy penalty for a heavy wrong. Yet He fenced it with four eyewitnesses and turned the law against the false accuser, so that in practice mercy runs through the whole of it. This describes a judicial ordinance and licenses nothing against any living person: not a raised hand, not a whispered accusation, not a family taking the law as its own. What it asks of me is the harder, quieter thing: to guard my own purity, and to guard my neighbour's good name as if it were mine.",
            "bn": "আয়াতটি দুটি সত্য একসঙ্গে ধরে রাখে, আপনিও দুটোকেই ধরে রাখুন। আল্লাহর বিচার সত্য, আর ভারী অন্যায়ের জন্য তিনি ভারী শাস্তি ঠিক করেছেন। তবু তিনি একে চারজন সাক্ষীর বেড়া দিয়ে ঘিরে দিয়েছেন, আর আইনকে ঘুরিয়ে দিয়েছেন মিথ্যা অপবাদদাতার দিকে। ফলে বাস্তবে গোটা বিধান জুড়েই রহমত বয়ে চলে। এ আয়াত বিচারের একটি বিধান বর্ণনা করে, কোনো জীবিত মানুষের বিরুদ্ধে কিছুর অনুমতি দেয় না: হাত তোলা নয়, কানে কানে অপবাদ নয়, কোনো পরিবারের আইন নিজের হাতে তুলে নেওয়া নয়। আমার কাছে এ চায় আরও কঠিন, আরও নীরব কাজ: নিজের পবিত্রতা আগলে রাখা, আর প্রতিবেশীর সুনামকে নিজের সুনামের মতো আগলে রাখা।"
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
            "bn": "সূরাটি সবেমাত্র একটা কঠিন বিধান দিয়েছে। যে সতী কাউকে ব্যভিচারের অপবাদ দেবে, তাকে চারজন সাক্ষী হাজির করতে হবে; না পারলে তাকেই বেত্রাঘাত করা হয়, আর আজীবন তার সাক্ষ্য বাতিল (২৪:৪)। বাইরের কেউ কাউকে সন্দেহ করলে চুপ থাকাই তার নিরাপদ পথ। কিন্তু একটি অবস্থা এ বিধানে খাপ খায় না। যে স্বামী বিশ্বাস করে তার নিজের স্ত্রী তার সঙ্গে বিশ্বাসঘাতকতা করেছে, সে যা দেখেছে বলে ভাবছে তা থেকে চুপচাপ সরে যেতে পারে না। আর গোপনে করা কাজের চারজন সাক্ষী তার কাছে প্রায় কখনোই থাকবে না।"
          },
          {
            "en": "Ma'arif al-Qur'an draws out why this position is unbearable. A stranger can keep quiet to save his own back, and lose nothing he was bound to. The husband cannot. If he speaks without four witnesses he is flogged; if he stays silent he must go on living beside a betrayal he is sure of. The general law, framed for the accuser who can choose silence, was never shaped for the one man who cannot. His case needed its own answer, and the next verse gives it.",
            "bn": "মাআরিফুল কুরআন খুলে বলে, এ অবস্থা কেন অসহ্য। বাইরের লোক নিজের পিঠ বাঁচাতে চুপ থাকতে পারে, তাতে তার কোনো দায়িত্বে ঘাটতি পড়ে না। স্বামী তা পারে না। চারজন সাক্ষী ছাড়া মুখ খুললে তার পিঠে বেত পড়বে; চুপ থাকলে যে বিশ্বাসঘাতকতার ব্যাপারে সে নিশ্চিত, তা বুকে চেপে তাকে সংসার করে যেতে হবে। সাধারণ বিধানটি করা হয়েছিল এমন অভিযোগকারীর কথা ভেবে, যে চাইলে চুপ থাকতে পারে। যে লোকটি চুপ থাকতে পারে না, তার কথা ভেবে সেটি করা হয়নি। তার অবস্থার জন্য দরকার ছিল আলাদা সমাধান, আর পরের আয়াত সেটাই দেয়।"
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
            "bn": "ইবন কাসীর এ আয়াতের ব্যাখ্যা শুরু করেন একটি শব্দে: স্বস্তি। তিনি বলেন, এ বিধান স্বামীদের জন্য মুক্তির পথ (ফারাজান ওয়া মাখরাজান)। কেউ স্ত্রীর বিরুদ্ধে অভিযোগ আনল, কিন্তু প্রমাণ দিতে পারল না, তখন সে নিজে কিছু করে বসে না। সে স্ত্রীকে কর্তৃপক্ষের সামনে নিয়ে আসে, অভিযোগ জানায়, আর বিচারক তাকে দিয়ে আল্লাহর নামে চারবার শপথ করান যে সে তার অভিযোগে সত্যবাদী। যে সাক্ষীরা নেই, তাদের জায়গা নেয় তার ঘুষি নয়, বরং প্রকাশ্য আদালতে তার মুখ থেকে নেওয়া শপথ।"
          },
          {
            "en": "The reports name the occasion. Al-Bukhari records from Ibn ʿAbbas that Hilāl bin Umayya (RA) brought this very charge against his wife before the Prophet ﷺ, who told him, 'Either you bring proof or the punishment falls on your back.' Hilāl answered that he was truthful, and that God would send down what would clear him. Then the verse came. The Prophet ﷺ did not rush to punish either of them; he warned them that God knows one of them is lying, and asked whether either would repent. This narration is graded authentic.",
            "bn": "বর্ণনাগুলো জানায়, আয়াতটি কোন ঘটনায় নাজিল হয়। বুখারী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, হিলাল ইবন উমাইয়া (রাঃ) নবী ﷺ-এর কাছে ঠিক এই অভিযোগটাই তাঁর স্ত্রীর বিরুদ্ধে আনেন। নবী ﷺ তাঁকে বলেন, ‘হয় প্রমাণ হাজির কর, নয়তো তোমার পিঠে শাস্তি পড়বে।’ হিলাল বলেন, তিনি সত্য বলছেন, আর আল্লাহ এমন কিছু নাজিল করবেন যা তাঁকে দায়মুক্ত করবে। তারপরই আয়াতটি নাজিল হলো। নবী ﷺ তাড়াহুড়ো করে দুজনের কাউকে শাস্তি দেননি। তিনি সতর্ক করলেন, আল্লাহ জানেন তোমাদের একজন মিথ্যা বলছে, তারপর জিজ্ঞেস করলেন, কেউ কি তওবা করবে? এই বর্ণনাটি সহিহ বলে সাব্যস্ত।"
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
            "bn": "তাবারী শপথের ভূমিকাটা স্পষ্ট করে দেন। তিনি বুঝিয়ে বলেন, চারটি সাক্ষ্য স্বামীর কাছ থেকে নির্ধারিত শাস্তি সরিয়ে দেওয়ার ক্ষেত্রে চারজন সাক্ষীর জায়গায় দাঁড়ায়। আইন প্রমাণের মান নামিয়ে দেয় না; এই একটিমাত্র সম্পর্কের বেলায় যেখানে চার জোড়া চোখ পাওয়া যায় না, সেখানে চারবারের শপথকে বসিয়ে দেয়। ‘তাদের একজনের সাক্ষ্য’ কথাটি তিনি পড়েন এভাবে: তাদের একজনের উপর দায়িত্ব যে সে আল্লাহর নামে চারবার শপথ করবে। প্রতিটি শপথ আয়াতের নির্ধারিত সেই বাক্য, যে সে সত্যবাদীদের একজন।"
          },
          {
            "en": "As-Sa'di asks why an oath is called a 'testimony' at all, and answers that it stands in the place of witnesses. He lists the wisdoms particular to marriage: a husband rarely exposes the wife whose disgrace is his own disgrace unless something drives him, he has a real stake, and there is the fear of a child fathered elsewhere being attached to him. Al-Baghawi notes the two readings of 'four testimonies' — one taking the oath as what averts the punishment, the other as the act he must perform — a grammatical difference, not a difference in law.",
            "bn": "সাদী প্রশ্ন তোলেন, শপথকে ‘সাক্ষ্য’ বলা হচ্ছে কেন, আর জবাব দেন যে তা সাক্ষীদের জায়গায় দাঁড়ায়। বিবাহের বেলায় খাস কিছু হিকমতও তিনি সাজান: স্বামী সাধারণত সেই স্ত্রীকে ফাঁস করে না, যার অসম্মান তার নিজেরই অসম্মান, যদি না কিছু তাকে ঠেলে দেয়; এতে তার সত্যিকারের স্বার্থ থাকে; আর ভয় থাকে অন্যের ঔরসের সন্তান তার সঙ্গে জুড়ে যাওয়ার। বাগভী ‘চারটি সাক্ষ্য’ পড়ার দুটি ধরন তুলে ধরেন। একটিতে শপথই শাস্তি সরিয়ে দেয়, অন্যটিতে তা সেই কাজ যা তাকে করতে হবে। এটি ব্যাকরণের পার্থক্য, বিধানের নয়।"
          },
          {
            "en": "Al-Qurtubi sets down how a judge conducts it. He begins with the husband, as God began, and has him swear, four times, that he is truthful in what he charged; then, at the fifth, that God's curse be on him if he lied. Only then does the wife rise and swear, four times, that he is lying, and, at her fifth, that God's wrath be on her if he spoke true. Every step is spoken aloud, in order, before the court. Nothing here is left to a man's private judgement of his own household.",
            "bn": "কুরতুবী লিখে দেন, বিচারক কীভাবে এটি পরিচালনা করেন। আল্লাহ যেভাবে শুরু করেছেন, তিনিও স্বামীকে দিয়ে শুরু করেন আর তাকে দিয়ে চারটি শপথ করান যে সে তার অভিযোগে সত্যবাদী; তারপর পঞ্চমবারে বলান, মিথ্যা বললে তার উপর আল্লাহর লা’নত পড়ুক। এরপরই স্ত্রী দাঁড়িয়ে চারবার শপথ করে যে স্বামী মিথ্যা বলছে, আর তার পঞ্চম শপথে বলে, স্বামী সত্য বললে তার নিজের উপর আল্লাহর গযব পড়ুক। প্রতিটি ধাপ পালা করে সবার সামনে উচ্চস্বরে বলা হয়। এখানে কিছুই স্বামীর নিজের ঘর নিয়ে তার একার বিচারের হাতে ছাড়া হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Oath That Binds",
          "bn": "যে শপথ চূড়ান্ত করে"
        },
        "p": [
          {
            "en": "After the four oaths comes a fifth, and the verse makes it heavier than all before it. The husband must call down the curse of God upon himself if he is among the liars (24:7). Al-Muyassar renders it plainly: he adds, in the fifth, a prayer against his own soul, that he deserves God's curse should his charge be false. In the narration the man is stopped before this last oath and warned that it is the binding one — the punishment of this world is lighter than the punishment of the next. He does not draw back.",
            "bn": "চারটি শপথের পর আসে পঞ্চমটি, আর আয়াত এটিকে আগের সবগুলোর চেয়ে ভারী করে দেয়। স্বামীকে বলতে হয়, সে মিথ্যাবাদী হলে তার উপর আল্লাহর লা’নত পড়ুক (২৪:৭)। মুয়াসসার সোজা ভাষায় বলে: পঞ্চম শপথে সে নিজের বিরুদ্ধে বদদোয়া করে, তার অভিযোগ মিথ্যা হলে সে যেন আল্লাহর লা’নতের যোগ্য হয়। বর্ণনায় আছে, এই শেষ শপথের আগে লোকটিকে থামিয়ে সতর্ক করা হয়: এ শপথই চূড়ান্ত, আর দুনিয়ার শাস্তি আখিরাতের শাস্তির চেয়ে হালকা। তবু সে পিছিয়ে যায় না।"
          },
          {
            "en": "The gravity is deliberate. Neither spouse, after the oaths, is put to the sword or the lash in this world; the punishment each swore to escape is lifted. But the oaths do not make the truth. One of the two has sworn falsely before God, and that reckoning is not cancelled — it is only moved to where it cannot be evaded. Ibn Kathir reads the verse that follows, on God's grace and mercy (24:10), as pointing to just this: were it not for that grace, the tangled affair would have crushed them, but God left a way through.",
            "bn": "এই গাম্ভীর্য ইচ্ছা করেই রাখা। শপথের পর স্বামী বা স্ত্রী কাউকেই দুনিয়াতে তলোয়ার বা বেতের মুখে পড়তে হয় না; যে শাস্তি থেকে বাঁচতে দুজনে শপথ করেছিল, তা উঠে যায়। কিন্তু শপথ করলেই সত্য বদলে যায় না। দুজনের একজন আল্লাহর সামনে মিথ্যা শপথ করেছে, আর সে হিসাব মাফ হয়ে যায় না। শুধু এমন জায়গায় সরে যায়, যেখান থেকে পালানোর উপায় নেই। ইবন কাসীর এর পরের আয়াতটি, যেখানে আল্লাহর অনুগ্রহ ও রহমতের কথা আছে (২৪:১০), ঠিক এই অর্থেই পড়েন: সেই অনুগ্রহ না থাকলে এই জটিল ব্যাপার তাদের পিষে ফেলত, কিন্তু আল্লাহ বের হওয়ার একটা পথ রেখে দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer That Shields Her",
          "bn": "যে জবাব তাকে বাঁচায়"
        },
        "p": [
          {
            "en": "The procedure does not end with the husband, and this is its balance. The verse turns at once to the wife: his oaths do not convict her. She answers with four oaths of her own, swearing by God that he is among the liars (24:8), and a fifth that the wrath of God be upon her if he has told the truth (24:9). And the Qur'an states the effect in her favour: her testimony 'will avert the punishment from her.' Her word, sworn in the same court, is set exactly against his, and it is enough to turn the penalty away.",
            "bn": "বিধানটি স্বামীর কাছে এসে থেমে যায় না, আর এখানেই এর ভারসাম্য। আয়াত সঙ্গে সঙ্গে স্ত্রীর দিকে ফেরে: স্বামীর শপথ তাকে দোষী সাব্যস্ত করে না। সে নিজেও চারটি শপথ করে জবাব দেয়, আল্লাহর নামে বলে যে স্বামী মিথ্যাবাদীদের একজন (২৪:৮), আর পঞ্চম শপথে বলে, স্বামী সত্য বললে তার নিজের উপর আল্লাহর গযব পড়ুক (২৪:৯)। আর কুরআন তার পক্ষে ফলটা সাফ বলে দেয়: তার সাক্ষ্য ‘তার কাছ থেকে শাস্তি সরিয়ে দেবে।’ একই আদালতে করা তার কথা ঠিক স্বামীর কথার বিপরীতে বসে, আর শাস্তি সরিয়ে দিতে সেটাই যথেষ্ট।"
          },
          {
            "en": "Al-Qurtubi captures the symmetry in a single line: the husband swears to ward the punishment of false accusation off himself, and she swears to ward the punishment off herself. Neither is condemned by the other's oath. Ibn Kathir notes that her fifth oath invokes God's wrath rather than His curse, and offers a reason drawn from the usual case. Yet the law does not run on that guess. Once she has sworn, the worldly penalty is lifted from her entirely; she may not be called an adulteress, and the presumption the oaths leave standing is in her favour, not against her.",
            "bn": "কুরতুবী ভারসাম্যটা এক লাইনে ধরে ফেলেন: স্বামী শপথ করে নিজের কাছ থেকে অপবাদের শাস্তি সরাতে, আর স্ত্রী শপথ করে নিজের কাছ থেকে শাস্তি সরাতে। একজনের শপথে অন্যজন দোষী হয় না। ইবন কাসীর লক্ষ করেন, স্ত্রীর পঞ্চম শপথ আল্লাহর লা’নত নয়, তাঁর গযব ডেকে আনে, আর এর একটা কারণ তিনি সাধারণ অবস্থা থেকে দেন। তবু বিধান সেই অনুমানের উপর চলে না। শপথ করে ফেলার পর দুনিয়ার শাস্তি তার কাছ থেকে পুরোপুরি উঠে যায়; তাকে ব্যভিচারিণী বলা যায় না, আর শপথ যে ধারণাটা রেখে যায় তা তার পক্ষে, বিপক্ষে নয়।"
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
            "bn": "লি‘আন আসলে কী, তা নিয়ে ফকীহদের মতভেদ আছে, আর কুরতুবী বিতর্কটা গুছিয়ে তুলে ধরেন। মালিক ও শাফিয়ীর মতে এটা শপথ; আবু হানীফার মতে সাক্ষ্য। এ মতভেদ শুধু কথার কথা নয়। শপথ হলে, যে কেউ বৈধভাবে শপথ করতে পারে সে-ই লি‘আন করতে পারবে: অন্ধ, অমুসলিম স্বামী বা স্ত্রী, এমনকি যার সাধারণ সাক্ষ্য গ্রহণ করা হয় না সেও। আর সাক্ষ্য হলে কেবল তারাই এতে শামিল হতে পারবে, যাদের সাক্ষ্য গ্রহণযোগ্য। ইবনুল আরাবী যুক্তি দেন, নিজের মামলায় কেউ সাক্ষী হতে পারে না, আর এ যুক্তি শপথের দিকেই ঝোঁকে। তবে আয়াতটি এখানে কোনো পক্ষের দেওয়া নাম চূড়ান্ত করে দেয় না।"
          },
          {
            "en": "Each side reaches for the verse itself. Those who call it a testimony point to the wording, 'and have no witnesses except themselves,' as putting the husband in the place of a witness. Those who call it an oath answer that a repeated sworn formula, staked on God's curse, is the language of oaths, not of evidence, and that the Prophet ﷺ spoke of 'the oaths' when he ruled. Al-Qurtubi records the exchange without flattening it, and the schools carry their positions forward. The Qur'an gives the act its shape and leaves the jurists their honest disagreement over its name.",
            "bn": "দুই পক্ষই দলিল খোঁজে আয়াতের ভেতরেই। যারা একে সাক্ষ্য বলেন, তারা দেখান ‘নিজেদের ছাড়া তাদের কোনো সাক্ষী নেই’ কথাটি, যা স্বামীকে সাক্ষীর জায়গায় বসায়। যারা একে শপথ বলেন, তারা জবাব দেন: একই কথা বারবার কসম করে বলা, আর তার সঙ্গে আল্লাহর লা’নতকে বাজি রাখা, এ তো শপথের ভাষা, সাক্ষ্যের নয়। তা ছাড়া নবী ﷺ রায় দেওয়ার সময় ‘শপথগুলো’-র কথাই বলেছিলেন। কুরতুবী দুই পক্ষের কথাই পুরো ওজনসহ লিখে রাখেন, কোনোটাকে হালকা করেন না, আর মাযহাবগুলো নিজ নিজ মত ধরে রাখে। কুরআন কাজটার রূপ ঠিক করে দেয়, আর তার নাম নিয়ে ফকীহদের আন্তরিক মতভেদের জায়গা রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "After the Oaths Are Sworn",
          "bn": "শপথ শেষ হওয়ার পর"
        },
        "p": [
          {
            "en": "When both have sworn, the marriage is over. The reports and the jurists agree that the two are parted for good and may never remarry each other. The Prophet ﷺ attached the child to the mother, ruled that it must not be reviled, and decreed that whoever slandered the woman or her child would face punishment. So the last word of the procedure is not a conviction but a set of protections: a bond dissolved without a verdict of guilt, a child guarded from insult, and a woman shielded by name against every future tongue.",
            "bn": "দুজনেই শপথ করে ফেললে বিয়েটা শেষ। বর্ণনা আর ফকীহরা একমত যে তারা চিরদিনের জন্য আলাদা হয়ে যায়, আর একে অপরকে কখনো আবার বিয়ে করতে পারে না। নবী ﷺ সন্তানকে মায়ের পরিচয়ে যুক্ত করে দেন, বলে দেন তাকে যেন গালমন্দ করা না হয়, আর ঘোষণা দেন, কেউ ওই নারী বা তার সন্তানকে অপবাদ দিলে শাস্তি পাবে। তাই এ বিধানের শেষ কথা কাউকে দোষী সাব্যস্ত করা নয়, বরং কয়েকটি সুরক্ষা: দোষের রায় ছাড়াই বিয়ের বন্ধন ভেঙে যায়, সন্তান অপমান থেকে রক্ষা পায়, আর নারীটি নাম ধরে সুরক্ষা পায় ভবিষ্যতের সব কটু কথার বিরুদ্ধে।"
          },
          {
            "en": "The reports carry two occasions, and the commentators weigh them. One names Hilāl bin Umayya; another names ʿUwaymir al-ʿAjlānī, who came to the Prophet ﷺ with the same trouble. Al-Qurtubi treats both as bound up with the revelation. Ibn Hajar and an-Nawawi reconcile them: Hilāl's case came first and drew down the verse, and ʿUwaymir's, close upon it, was judged by the ruling already given. The disagreement is over sequence, not substance. Either way the verse answered a real household in Madinah before it became a standing law for every marriage.",
            "bn": "বর্ণনায় দুটি ঘটনার কথা এসেছে, আর তাফসীরকারেরা দুটিকে মিলিয়ে দেখেন। একটিতে নাম আছে হিলাল ইবন উমাইয়ার; আরেকটিতে উওয়াইমির আল-আজলানীর, যিনি একই সমস্যা নিয়ে নবী ﷺ-এর কাছে এসেছিলেন। কুরতুবী দুটোকেই আয়াত নাজিলের সঙ্গে জড়িত বলে ধরেন। ইবন হাজার ও নববী দুটোর মধ্যে সমন্বয় করেন: হিলালের ঘটনা আগে ঘটে, আর তাতেই আয়াত নাজিল হয়; উওয়াইমিরের ঘটনা ঘটে তার পরপরই, আর আগে নাজিল হওয়া বিধান দিয়েই তার মীমাংসা হয়। মতভেদটা কোনটা আগে কোনটা পরে তা নিয়ে, মূল বিষয় নিয়ে নয়। যেভাবেই হোক, সব বিয়ের জন্য স্থায়ী বিধান হওয়ার আগে আয়াতটি মদীনার এক বাস্তব সংসারের সমস্যার জবাব দিয়েছিল।"
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
            "en": "This needs saying plainly. The verse lays down a court procedure, conducted before lawful authority and settled by solemn oath. It licenses nothing against any living person or community: no private accusation, no public shaming, no violence, no hand raised on suspicion. A man who saw and could not prove is sent to the judge, not to his own reckoning; even in the reports the Prophet ﷺ stops him and reminds him of God before the binding oath. Whoever reads this verse as leave to accuse a spouse in the street, or to strike, has read into it the very thing it forbids.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি আদালতের একটি পদ্ধতি ঠিক করে দেয়, যা চলে বৈধ কর্তৃপক্ষের সামনে আর মীমাংসা হয় গুরুগম্ভীর শপথে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না: নিজে থেকে অভিযোগ তোলা নয়, প্রকাশ্যে অপমান নয়, সহিংসতা নয়, সন্দেহের বশে হাত তোলা নয়। যে নিজে দেখেছে অথচ প্রমাণ করতে পারেনি, তাকে পাঠানো হয় বিচারকের কাছে, নিজে ফয়সালা করে নিতে নয়। বর্ণনাতেও নবী ﷺ চূড়ান্ত শপথের আগে তাকে থামিয়ে আল্লাহর কথা মনে করিয়ে দেন। কেউ যদি এ আয়াতকে রাস্তায় দাঁড়িয়ে স্ত্রীকে দোষ দেওয়ার বা গায়ে হাত তোলার ছাড়পত্র ভাবে, তবে আয়াত যা নিষেধ করে, ঠিক সেটাই সে আয়াতের ঘাড়ে চাপাল।"
          },
          {
            "en": "The lesson stands clear once the fear and the detail settle. Where the truth cannot be reached by proof, the believer's path is not the raised hand or the whispered charge, but the lawful process and the oath taken in the sight of God. The verse trusts God with what no witness saw. It answers a real agony without letting either spouse be crushed, and it leaves the hidden truth where it belongs. To live by it is to refuse both the easy accusation and the private vengeance, and to leave to God what only He can judge.",
            "bn": "ভয় আর খুঁটিনাটি থিতিয়ে গেলে শিক্ষাটা পরিষ্কার দাঁড়ায়। প্রমাণে যেখানে সত্যের নাগাল পাওয়া যায় না, মুমিনের পথ সেখানে তোলা হাত বা ফিসফিসিয়ে করা অভিযোগ নয়, বরং বৈধ পথ আর আল্লাহকে সামনে রেখে নেওয়া শপথ। কোনো সাক্ষী যা দেখেনি, আয়াত তা আল্লাহর হাতে সঁপে দেয়। এটি এক সত্যিকারের যন্ত্রণার জবাব দেয়, অথচ স্বামী-স্ত্রীর কাউকেই পিষে যেতে দেয় না, আর লুকানো সত্যটা যেখানে থাকার কথা সেখানেই রেখে দেয়। এ অনুযায়ী জীবন গড়া মানে সহজ অভিযোগ আর ব্যক্তিগত প্রতিশোধ দুটোই প্রত্যাখ্যান করা, আর যা কেবল তিনিই বিচার করতে পারেন তা আল্লাহর হাতে ছেড়ে দেওয়া।"
          }
        ]
      }
    ]
  },
  "24:7": {
    "sections": [
      {
        "h": {
          "en": "The Fifth Turns Inward",
          "bn": "পঞ্চম কথাটি নিজের দিকে"
        },
        "p": [
          {
            "en": "Wal-khamisatu anna la'nata Allahi 'alayhi in kana mina al-kadhibin: and the fifth, that the curse of Allah be upon him if he is among the liars. The verse is nine words long and finishes the sentence begun in 24:6, which set four testimonies by Allah on the husband who has no witness but himself. Those four are not retold here. This verse adds a fifth utterance of another kind. Ma'arif al-Qur'an glosses the very name of the procedure, li'an, as cursing and praying for Allah's wrath on one another.",
            "bn": "ওয়াল খামিসাতু আন্না লা’নাতাল্লাহি আলাইহি ইন কানা মিনাল কাযিবীন: আর পঞ্চমবার, সে মিথ্যাবাদী হলে তার উপর আল্লাহর লা’নত। আয়াতটি মাত্র নয়টি শব্দের। ২৪:৬ আয়াতে যে বাক্য শুরু হয়েছিল, এখানে তা শেষ হলো। সেখানে বলা হয়েছিল, নিজে ছাড়া যে স্বামীর আর কোনো সাক্ষী নেই, সে আল্লাহর নামে চারটি সাক্ষ্য দেবে। সেই চার সাক্ষ্যের কথা এখানে আর বলা হবে না। এ আয়াত যোগ করে ভিন্ন ধরনের পঞ্চম একটি উচ্চারণ। মাআরিফুল কুরআন এ বিধানের নাম লি‘আনেরই অর্থ করে লা’নত করা, একে অপরের উপর আল্লাহর গযব কামনা করা।"
          },
          {
            "en": "As-Sa'di says what the fifth does: alongside the testimony already stated, it confirms those testimonies, by having the man pray against himself, with the curse, if he is lying. The four face outward, at the charge; each says he is truthful in what he has said. The fifth faces back at the speaker. He no longer only claims something about another person; he places himself under a penalty from Allah should his claim be false. The wife's answer, and the different word in her own fifth, belong to 24:8 and 24:9.",
            "bn": "পঞ্চম কথাটির কাজ কী, সা'দী তা বলে দেন। আগের সাক্ষ্যগুলোর সঙ্গে এটি যোগ হয় সেগুলোকে পাকা করতে। লোকটি নিজেই নিজের বিরুদ্ধে দোয়া করে, মিথ্যাবাদী হলে তার উপর যেন লা’নত পড়ে। চারটি সাক্ষ্যের মুখ বাইরের দিকে, অভিযোগটার দিকে। প্রতিটিতে সে বলে, যা বলেছে তাতে সে সত্যবাদী। পঞ্চমটির মুখ ঘুরে যায় বক্তার নিজের দিকে। এখন সে কেবল অন্যের সম্পর্কে দাবি করছে না। দাবি মিথ্যা হলে আল্লাহর দেওয়া শাস্তির নিচে সে নিজেকেই দাঁড় করাচ্ছে। স্ত্রীর জবাব আর তার পঞ্চম কথার ভিন্ন শব্দটির আলোচনা ২৪:৮ ও ২৪:৯ আয়াতের।"
          }
        ]
      },
      {
        "h": {
          "en": "From Him to Me",
          "bn": "‘তার উপর’ থেকে ‘আমার উপর’"
        },
        "p": [
          {
            "en": "The verse speaks about the man: the curse is 'alayhi, upon him, if he is among the liars. In court he does not say it about someone else. Al-Qurtubi gives the words the judge has him say at the fifth: upon me be the curse of Allah if I am among the liars, or, if he prefers, if I was lying in what I mentioned about her. Al-Baghawi has the imam prompt him, and gives the same fifth: upon me be the curse of Allah if I am among the liars in what I charged her with. The verse's 'him' becomes the oath's 'me'.",
            "bn": "আয়াতটি লোকটির কথা বলে বাইরে থেকে: লা’নত ‘আলাইহি’, তার উপর, যদি সে মিথ্যাবাদী হয়। কিন্তু আদালতে সে কথাটা অন্য কারও সম্পর্কে বলে না। পঞ্চমবারে বিচারক তাকে দিয়ে কী বলান, কুরতুবী তা উল্লেখ করেন: আমি মিথ্যাবাদী হলে আমার উপর আল্লাহর লা’নত। চাইলে সে বলতে পারে, তার সম্পর্কে যা বলেছি তাতে আমি মিথ্যাবাদী হলে। বাগাভীর বর্ণনায় ইমাম তাকে শব্দগুলো বলিয়ে দেন, আর পঞ্চম কথাটা একই: তার উপর যে অভিযোগ এনেছি তাতে আমি মিথ্যাবাদী হলে আমার উপর আল্লাহর লা’নত। আয়াতের ‘তার উপর’ শপথে এসে হয়ে যায় ‘আমার উপর’।"
          },
          {
            "en": "Al-Baghawi adds a detail that shows how carefully the words are held: any of them the husband says without the judge's prompting is not counted. Al-Qurtubi records ash-Shafi'i's form, in which the man points to his wife if she is present and ties the curse to the one charge he has made. So the fifth is not a sweeping oath over his whole life. It is fastened to a single claim, spoken in a single place, and by its own wording it falls on him only if that claim is false.",
            "bn": "শব্দগুলো কতটা যত্নে ধরা হয়, বাগাভী তার একটা নমুনা দেন: বিচারকের বলিয়ে দেওয়া ছাড়া স্বামী নিজে থেকে যে শব্দ বলে, তা গণনায় ধরা হয় না। কুরতুবী শাফিঈর পদ্ধতিও উল্লেখ করেন। সেখানে স্ত্রী উপস্থিত থাকলে লোকটি তার দিকে ইশারা করে, আর লা’নতটিকে বেঁধে দেয় তার আনা ওই একটি অভিযোগের সঙ্গে। তাই পঞ্চম কথাটি গোটা জীবনের উপর ঢালাও কোনো কসম নয়। এটি বাঁধা একটিমাত্র দাবির সঙ্গে, একটিমাত্র জায়গায় উচ্চারিত। আর এর নিজের শব্দ অনুযায়ীই লা’নত তার উপর পড়বে কেবল তখন, যখন দাবিটা মিথ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Reciters Voice It",
          "bn": "কারীদের পাঠে আয়াতটি"
        },
        "p": [
          {
            "en": "Al-Baghawi records how the reciters read the phrase. Nafi' and Ya'qub read an without the doubling, with la'natu in the nominative; the others read anna with the doubling and la'nata in the accusative, the reading of the text quoted at the top. On the word for 'the fifth' he notes one difference, and it falls on the second fifth, at 24:9: Hafs from 'Asim reads it in the accusative, as 'and she testifies the fifth testimony', while the others read it, like the first, as a subject whose predicate is the clause that follows.",
            "bn": "কারীরা অংশটি কীভাবে পড়েন, বাগাভী তা লিখে রাখেন। নাফি‘ ও ইয়াকূব ‘আন’ পড়েন তাশদীদ ছাড়া, আর ‘লা’নাতু’ পেশ দিয়ে। বাকিরা পড়েন তাশদীদসহ ‘আন্না’, আর ‘লা’নাতা’ যবর দিয়ে। শুরুতে উদ্ধৃত পাঠটি এটাই। ‘পঞ্চম’ শব্দটি নিয়ে তিনি একটিমাত্র পার্থক্যের কথা বলেন, আর সেটা দ্বিতীয় পঞ্চমে, ২৪:৯ আয়াতে। হাফস আসিম থেকে সেখানে শব্দটি পড়েন যবর দিয়ে, অর্থাৎ ‘আর সে পঞ্চম সাক্ষ্যটি দেবে’। অন্যরা সেখানেও প্রথমটির মতো পড়েন, বাক্যের শুরুর শব্দ হিসেবে, যার কথাটা পূর্ণ হয় পরের অংশে।"
          },
          {
            "en": "None of these readings changes what 24:7 says. In every one, the sentence states a curse and hangs its landing on a condition: if he is among the liars. That condition is the whole weight of the verse. The judge cannot test it, and the wife can only answer it with oaths of her own. Only Allah knows whether it is met. This is why what happens in the moment just before the fifth matters so much.",
            "bn": "এসব পাঠের কোনোটিতেই ২৪:৭ আয়াতের বক্তব্য বদলায় না। প্রতিটি পাঠে বাক্যটি একটা লা’নতের কথা বলে, আর সেটা পড়বে কি না, তা ঝুলিয়ে রাখে একটা শর্তে: সে যদি মিথ্যাবাদী হয়। আয়াতের পুরো ভার এই শর্তেই। বিচারক এটা যাচাই করতে পারেন না। স্ত্রী এর জবাব দিতে পারে কেবল নিজের শপথ দিয়ে। শর্তটা পূরণ হলো কি না, জানেন কেবল আল্লাহ। এ কারণেই পঞ্চম কথার ঠিক আগের মুহূর্তটা এত গুরুত্বপূর্ণ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hand Over the Mouth",
          "bn": "মুখের উপর একটি হাত"
        },
        "p": [
          {
            "en": "Abu Dawud records from Ibn 'Abbas: 'When the Prophet (ﷺ) ordered a man and his wife to invoke curses on each other, he ordered a man to put his hand on his mouth when he came to the fifth utterance, saying that it would be the deciding one.' The page gives no grading from Abu Dawud for it (Sunan Abu Dawud 2255). The Arabic word rendered 'deciding' is mujiba: the utterance that makes the outcome binding. Up to the fifth, the man can still stop.",
            "bn": "আবু দাঊদ ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: স্বামী-স্ত্রীকে পরস্পর লি‘আন করার আদেশ দেওয়ার সময় নবী ﷺ একজনকে বললেন, পঞ্চমবারে এসে সে যেন তার মুখের উপর হাত রাখে, আর তিনি বলছিলেন, এটা চূড়ান্ত করে দেয়। (সুনানে আবু দাঊদ ২২৫৫) পৃষ্ঠাটিতে আবু দাঊদের কোনো মান নির্ণয় দেওয়া নেই। ‘চূড়ান্ত করে দেয়’ বলে যে আরবি শব্দের অনুবাদ, তা হলো মূজিবা: যে উচ্চারণ পরিণামটাকে অবধারিত করে দেয়। পঞ্চম কথার আগ পর্যন্ত লোকটি তখনো থামতে পারে।"
          },
          {
            "en": "Al-Qurtubi cites this very report as ash-Shafi'i's proof for a step in the procedure. After the four testimonies the imam admonishes the man and reminds him of Allah, telling him he fears that, if he has not spoken the truth, he will go away bearing Allah's curse. If the imam sees him set on going ahead, he has someone place a hand over his mouth and tells him that these words make it binding. If he still refuses to stop, he is left to say them.",
            "bn": "কুরতুবী ঠিক এই বর্ণনাটিকেই শাফিঈর দলিল হিসেবে আনেন, পদ্ধতির একটা ধাপের পক্ষে। চারটি সাক্ষ্যের পর ইমাম লোকটিকে নসীহত করেন, আল্লাহর কথা মনে করিয়ে দেন। বলেন, আমার ভয় হয়, তুমি সত্য না বলে থাকলে আল্লাহর লা’নত মাথায় নিয়ে ফিরবে। তারপরও যদি দেখেন সে এগিয়ে যেতে চায়, কাউকে দিয়ে তার মুখের উপর হাত রাখান, আর জানিয়ে দেন, এ কথাগুলো ব্যাপারটাকে অবধারিত করে দেবে। এরপরও যদি সে না থামে, তাকে বলতে দেওয়া হয়।"
          },
          {
            "en": "Sahih Muslim (1493) carries Ibn 'Umar's account of the first man to ask about this, in which the Prophet ﷺ recited the verses to the man 'and admonished him, and exhorted him and informed him that the torment of the world is less painful than the torment of the Hereafter. He said: No, by Him Who sent you with Truth, I did not tell a lie against her.' The Prophet ﷺ then did the same with the wife. Muslim places this admonition before the oaths; Abu Dawud's hand comes at the fifth. The procedure builds pauses into itself, each one a door left open.",
            "bn": "সহীহ মুসলিমে (১৪৯৩) ইবন উমার (রাঃ) বর্ণনা দেন সেই প্রথম লোকটির, যে এ বিষয়ে প্রশ্ন করেছিল। সেখানে নবী ﷺ লোকটিকে আয়াতগুলো পড়ে শোনালেন, তাকে নসীহত করলেন, উপদেশ দিলেন, আর জানালেন যে দুনিয়ার শাস্তি আখিরাতের শাস্তির চেয়ে হালকা। লোকটি বলল: না, যিনি আপনাকে সত্য দিয়ে পাঠিয়েছেন তাঁর কসম, আমি তার সম্পর্কে মিথ্যা বলিনি। এরপর নবী ﷺ স্ত্রীর সঙ্গেও তা-ই করলেন। মুসলিমের বর্ণনায় এই নসীহত শপথের আগে, আর আবু দাঊদের বর্ণনায় হাতটি আসে পঞ্চমবারে। পদ্ধতিটা নিজের ভেতরেই কয়েকবার থামার জায়গা রেখেছে, প্রতিটি যেন খোলা রাখা একটা দরজা।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Jurists Draw From It",
          "bn": "ফকীহদের চোখে এর ফল"
        },
        "p": [
          {
            "en": "The commentators then say what the husband's completed oath does in law, and here they speak as jurists. As-Sa'di writes that once his li'an is complete, the penalty for false accusation set in 24:4 falls away from him, by the apparent sense of the verses; and if he named the man he accused, that man's right to the penalty falls along with hers. Al-Qurtubi says that when the husband has spoken the fifth, the penalty falls from him, and where he has denied a pregnancy, the child is no longer attributed to him.",
            "bn": "এরপর তাফসীরকারেরা বলেন, স্বামীর শপথ পূর্ণ হলে আইনের দিক থেকে কী ঘটে। এখানে তাঁরা কথা বলেন ফকীহ হিসেবে। সা'দী লেখেন, লোকটির লি‘আন পূর্ণ হলে ২৪:৪ আয়াতে বর্ণিত অপবাদের শাস্তি তার উপর থেকে উঠে যায়, আয়াতগুলোর বাহ্যিক অর্থ এটাই। আর সে যদি কোনো পুরুষের নাম নিয়ে থাকে, তবে স্ত্রীর অধিকারের সঙ্গে সঙ্গে ওই পুরুষের শাস্তি দাবির অধিকারও উঠে যায়। কুরতুবী বলেন, স্বামী পঞ্চম কথাটি বলে ফেললে শাস্তি তার উপর থেকে উঠে যায়। আর সে গর্ভের সন্তান অস্বীকার করে থাকলে সেই সন্তানকে আর তার বলে গণ্য করা হয় না।"
          },
          {
            "en": "On the marriage they differ. Ibn Kathir reports that for ash-Shafi'i and a large body of scholars she is separated from him by this oath of his itself and forbidden to him forever; he gives her her dower, and the prescribed penalty becomes due on her unless she swears in turn. Ma'arif al-Qur'an, giving Abu Hanifa's ruling, says the two become unlawful to each other once the li'an is complete, but the separation itself comes through the husband's divorce, or failing that a judge's decree with the force of divorce. The sources keep both views.",
            "bn": "বিয়ের প্রশ্নে তাঁদের মত আলাদা। ইবন কাসীর জানান, শাফিঈ ও বহু আলেমের মতে স্বামীর এই শপথেই স্ত্রী তার থেকে আলাদা হয়ে যায়, আর চিরদিনের জন্য তার উপর হারাম হয়ে যায়। স্বামী তাকে মোহর দিয়ে দেবে। আর স্ত্রী পাল্টা শপথ না করলে নির্ধারিত শাস্তি তার উপর বর্তায়। মাআরিফুল কুরআন আবু হানীফার মত তুলে ধরে বলে, লি‘আন পূর্ণ হলে দুজন একে অপরের জন্য হারাম হয়ে যায়। তবে বিচ্ছেদ কার্যকর হয় স্বামীর তালাকে, আর সে তালাক না দিলে বিচারকের রায়ে, যার প্রভাব তালাকের মতোই। উৎসগুলো দুটি মতই রেখে দেয়।"
          },
          {
            "en": "If either spouse draws back, the sources again do not speak with a single voice. Al-Qurtubi says that a husband who refuses these oaths, or any part of them, receives the penalty; Ma'arif al-Qur'an says he is held until he swears or admits he lied. For the wife, as-Sa'di notes two views among scholars: that the penalty is carried out on her once he has sworn and she refuses, or that she is held. He takes the first, reading 24:8: her oath could not 'avert' a punishment that had not become due. Ma'arif al-Qur'an holds that she is held until she swears or confesses.",
            "bn": "দুজনের কেউ পিছিয়ে গেলে কী হবে, তা নিয়েও উৎসগুলোতে একাধিক কথা আছে। কুরতুবী বলেন, স্বামী এ শপথগুলো বা এর কোনো অংশ করতে অস্বীকার করলে তার উপর শাস্তি কার্যকর হবে। মাআরিফুল কুরআন বলে, শপথ না করা বা মিথ্যা স্বীকার না করা পর্যন্ত তাকে আটকে রাখা হবে। স্ত্রীর বেলায় সা'দী আলেমদের দুটি মত উল্লেখ করেন। স্বামী শপথ করার পর স্ত্রী অস্বীকার করলে হয় তার উপর শাস্তি কার্যকর হবে, নয়তো তাকে আটকে রাখা হবে। তিনি প্রথম মতটি নেন ২৪:৮ আয়াত থেকে: শাস্তি আগে বর্তায়নি, এমন শাস্তি তার শপথ ‘রহিত’ করবে কীভাবে? মাআরিফুল কুরআনের মত, শপথ বা স্বীকারোক্তি না করা পর্যন্ত তাকে আটকে রাখা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Husbands, One Question",
          "bn": "দুই স্বামী, একই প্রশ্ন"
        },
        "p": [
          {
            "en": "The tafsirs name two occasions. At-Tabari relays from 'Ikrima that the verses concern Hilal ibn Umayya (RA), and al-Baghawi gives al-Bukhari's report from Ibn 'Abbas that Hilal brought the charge before the Prophet ﷺ and the verses came down (Sahih al-Bukhari 4747). Al-Baghawi opens his account of the occasion with Sahl ibn Sa'd's report about 'Uwaymir al-'Ajlani (RA), which at-Tabari also relays through az-Zuhri. How the two fit together is taken up under 24:6; here it is enough that the sources name both.",
            "bn": "তাফসীরগুলো দুটি উপলক্ষের কথা বলে। তাবারী ইকরিমা থেকে বর্ণনা করেন, আয়াতগুলো হিলাল ইবন উমাইয়া (রাঃ)-কে নিয়ে। বাগাভী আনেন ইবন আব্বাস (রাঃ) থেকে বুখারীর বর্ণনা: হিলাল নবী ﷺ-এর সামনে অভিযোগটি তুলেছিলেন, তখন আয়াতগুলো নাযিল হয়। (সহীহ বুখারী ৪৭৪৭) আবার উপলক্ষের আলোচনা বাগাভী শুরুই করেন উওয়াইমির আজলানী (রাঃ) সম্পর্কে সাহল ইবন সা‘দ (রাঃ)-এর বর্ণনা দিয়ে। তাবারীও যুহরীর সূত্রে সেটি আনেন। দুটি ঘটনা কীভাবে মেলে, সে আলোচনা ২৪:৬ আয়াতে হয়েছে। এখানে এটুকু বলাই যথেষ্ট যে উৎসগুলো দুজনেরই নাম নেয়।"
          },
          {
            "en": "Al-Bukhari's wording of Sahl's report (Sahih al-Bukhari 5308) ends: 'So they carried out the process of Lian while I was present among the people with Allah's Messenger (ﷺ). When they had finished their Lian, 'Uwaimir said, \"O Allah's Messenger (ﷺ)! If I should now keep her with me as a wife, then I have told a lie.\" So he divorced her thrice before Allah's Messenger (ﷺ) ordered him.' Ibn Shihab adds that this became the practice for couples in li'an. 'Uwaymir's own words show how he weighed his oath: to stay would make it a lie.",
            "bn": "সাহলের বর্ণনাটির বুখারীর ভাষ্য (সহীহ বুখারী ৫৩০৮) শেষ হয় এভাবে: আমি আল্লাহর রাসূল ﷺ-এর কাছে লোকজনের মধ্যে উপস্থিত ছিলাম, আর তারা দুজন লি‘আন করল। লি‘আন শেষ হলে উওয়াইমির বললেন, হে আল্লাহর রাসূল, এখন যদি আমি তাকে স্ত্রী হিসেবে রেখে দিই, তবে তো আমি তার সম্পর্কে মিথ্যা বলেছি। এরপর আল্লাহর রাসূল ﷺ আদেশ দেওয়ার আগেই তিনি তাকে তিন তালাক দিলেন। ইবন শিহাব যোগ করেন, লি‘আনে জড়ানো দম্পতিদের জন্য পরে এটাই রীতি হয়ে যায়। উওয়াইমিরের নিজের কথাতেই বোঝা যায়, নিজের শপথকে তিনি কতটা ভারী মনে করেছিলেন: থেকে গেলে শপথটাই মিথ্যা হয়ে যেত।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Reckoning Rests With Allah",
          "bn": "হিসাব আল্লাহর কাছে"
        },
        "p": [
          {
            "en": "Sahih Muslim (1493) also carries, from Ibn 'Umar, the Prophet's ﷺ words to a couple who had sworn: 'Your account is with Allah. One of you must be a liar. You have now no right over this woman.' That is the fifth's condition spoken plainly. The court has done what a court can: taken the oaths, lifted the penalties, ended the marriage. It has not found out who lied. Ma'arif al-Qur'an says the same: both have escaped punishment in this world, and in the Hereafter the one who lied will suffer it, since Allah knows best who that is.",
            "bn": "সহীহ মুসলিমে (১৪৯৩) ইবন উমার (রাঃ) থেকে আরও আছে, শপথ শেষ করা এক দম্পতিকে নবী ﷺ বলেছিলেন: তোমাদের হিসাব আল্লাহর কাছে। তোমাদের একজন অবশ্যই মিথ্যাবাদী। এই নারীর উপর তোমার আর কোনো অধিকার নেই। পঞ্চম কথার শর্তটাই এখানে খোলাখুলি বলা হলো। আদালতের যা করার ছিল, সে তা করেছে। শপথ নিয়েছে, শাস্তি তুলে নিয়েছে, বিয়ের বাঁধন শেষ করেছে। কে মিথ্যা বলেছে, তা সে বের করেনি। মাআরিফুল কুরআনও একই কথা বলে: দুনিয়ার শাস্তি থেকে দুজনই বেঁচে গেল, কিন্তু আখিরাতে মিথ্যাবাদী শাস্তি পাবে, কারণ কে মিথ্যাবাদী, আল্লাহই ভালো জানেন।"
          },
          {
            "en": "The verses that follow keep one more door open. Ibn Kathir, on 24:10, reads 'Allah is Accepting of Repentance' as His accepting it from His servants even when it comes after they have sworn a confirmed oath. So the fifth word does not seal the matter forever. Whoever swore falsely is still addressed by the One who accepts repentance, and whoever swore truly has placed the matter where it is safest. Between the two, nobody else is given a share in the judgment.",
            "bn": "পরের আয়াত আরও একটা দরজা খোলা রাখে। ২৪:১০ আয়াতে ‘আল্লাহ তাওবা কবুলকারী’ কথাটির ব্যাখ্যায় ইবন কাসীর বলেন, বান্দারা পাকা কসম খাওয়ার পরও যদি তওবা করে, তিনি তা কবুল করেন। তাই পঞ্চম কথাটি ব্যাপারটাকে চিরদিনের জন্য সিলমোহর করে দেয় না। যে মিথ্যা কসম খেয়েছে, তওবা কবুলকারী আল্লাহর ডাক তখনো তার জন্য আছে। আর যে সত্য কসম খেয়েছে, সে ব্যাপারটা রেখে দিয়েছে সবচেয়ে নিরাপদ জায়গায়। এ দুজনের মাঝখানে বিচারের কোনো ভাগ আর কাউকে দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Shield, Never a Weapon",
          "bn": "ঢাল, অস্ত্র কখনো নয়"
        },
        "p": [
          {
            "en": "This needs saying firmly. The fifth oath belongs to a court procedure, and it protects both spouses: the husband from the lashes of 24:4 when he cannot bring four witnesses, and the wife through her own oaths in 24:8 and 24:9. It licenses no one to accuse anyone, or to shame anyone, in private or in public, and it licenses nothing against women. Ma'arif al-Qur'an states as a ruling that after the li'an it is not permissible to call the woman an adulteress, nor to call her child illegitimate.",
            "bn": "কথাটা জোর দিয়ে বলা দরকার। পঞ্চম শপথ একটি বিচারপ্রক্রিয়ার অংশ, আর তা স্বামী-স্ত্রী দুজনকেই রক্ষা করে। চারজন সাক্ষী আনতে না পারলে ২৪:৪ আয়াতের বেত্রাঘাত থেকে রক্ষা পায় স্বামী। আর ২৪:৮ ও ২৪:৯ আয়াতে নিজের শপথের মাধ্যমে রক্ষা পায় স্ত্রী। এ আয়াত কাউকে কারও বিরুদ্ধে অভিযোগ তোলার অনুমতি দেয় না, গোপনে বা প্রকাশ্যে কাউকে লজ্জায় ফেলারও না। নারীদের বিরুদ্ধে কোনো কিছুরই অনুমতি এতে নেই। মাআরিফুল কুরআন বিধান হিসেবে বলে, লি‘আনের পর ওই নারীকে ব্যভিচারিণী বলা জায়েয নয়, তার সন্তানকে অবৈধ বলাও জায়েয নয়।"
          },
          {
            "en": "Read rightly, the verse is a brake. It makes the gravest charge the costliest one to bring: a man must put his own soul under Allah's curse to bring it, before others, with a hand ready at his mouth. For the rest of us, who stand in no such court, the lesson runs away from accusation, not towards it. If a husband with every reason to speak must stake so much, how much should a passing word about anyone's honour weigh for someone who has seen nothing at all?",
            "bn": "ঠিকভাবে পড়লে আয়াতটি আসলে একটা লাগাম। সবচেয়ে গুরুতর অভিযোগটি তোলাকেই এটি সবচেয়ে দামি করে দেয়। তা তুলতে হলে মানুষের সামনে নিজের প্রাণটাকেই আল্লাহর লা’নতের নিচে রাখতে হয়, আর মুখের কাছে তখন একটা হাত তৈরি থাকে। আমরা যারা এমন কোনো আদালতে দাঁড়িয়ে নেই, আমাদের জন্য শিক্ষাটা অভিযোগের দিকে নয়, অভিযোগ থেকে দূরে সরার দিকে। কথা বলার সব কারণ থাকা একজন স্বামীকে যদি এত বড় বাজি রাখতে হয়, তবে যে কিছুই দেখেনি, কারও সম্মান নিয়ে তার মুখের একটা হালকা কথার ওজন কত হওয়া উচিত?"
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
          "bn": "যেখানে ভর্ৎসনা এসে পড়ে"
        },
        "p": [
          {
            "en": "This verse is a reproach. Ibn Kathir opens his comment by calling it a disciplining of the believers over the affair of ʿĀʾishah (RA), when some of them had spread the ugly talk. At-Tabari uses the same register: it is a reproof from Allah to the people of faith for what had taken hold among them. The occasion is stated plainly in the surah itself. A false rumour, an ifk, had been raised against ʿĀʾishah (RA), the Mother of the Believers, and it was being passed from mouth to mouth (24:11).",
            "bn": "এ আয়াত আসলে তিরস্কার। ইবন কাসীর ব্যাখ্যার শুরুতেই বলেন, আয়েশা (রাঃ)-এর ঘটনায় মুমিনদের কেউ কেউ যখন সেই জঘন্য কথা ছড়াচ্ছিল, তখন এ আয়াত দিয়ে আল্লাহ তাদের আদব শেখান। তাবারীও একই সুরে বলেন, তাদের মধ্যে যা ছড়িয়ে পড়েছিল, তার জন্য এটা ঈমানদারদের প্রতি আল্লাহর তিরস্কার। ঘটনাটা কী, সূরাতেই তা স্পষ্ট বলা আছে। উম্মুল মুমিনীন আয়েশা (রাঃ)-এর নামে একটি মিথ্যা গুজব রটানো হয়েছিল, যাকে বলা হয় 'ইফক', আর তা মুখে মুখে ছড়াচ্ছিল (২৪:১১)।"
          },
          {
            "en": "What matters for the reader is how the matter was settled. Not by witnesses, nor by the community weighing likelihoods. Allah Himself cleared her, from above the heavens, in the verses running from 24:11 to 24:20. ʿĀʾishah (RA) said afterwards that she had hoped only for the Prophet ﷺ to see her innocence in a dream; instead Allah sent down her acquittal in words recited until the Day of Judgement. The charge was a lie, and this verse asks why the believers had not known it at once.",
            "bn": "পাঠকের জন্য আসল কথা হলো, বিষয়টা কীভাবে মীমাংসা হলো। কোনো সাক্ষী দিয়ে নয়, সমাজ সম্ভাবনা মেপেও নয়। আল্লাহ নিজেই তাঁকে নির্দোষ ঘোষণা করলেন, আসমানের উপর থেকে, ২৪:১১ থেকে ২৪:২০ পর্যন্ত আয়াতগুলোতে। আয়েশা (রাঃ) পরে বলেছেন, তিনি কেবল এই আশা করেছিলেন যে নবী ﷺ হয়তো স্বপ্নে তাঁর নির্দোষিতা দেখবেন। অথচ আল্লাহ তাঁর নির্দোষিতা এমন বাণীতে নাজিল করলেন, যা কিয়ামত পর্যন্ত পড়া হবে। অভিযোগটা মিথ্যা ছিল, আর এ আয়াত জিজ্ঞেস করছে, মুমিনরা কেন প্রথম থেকেই সেটা বুঝল না।"
          },
          {
            "en": "One thing must be said plainly, in the verse's own spirit. The verse condemns those who spread an unproven charge; it licenses nothing against anyone who is themselves accused today, and least of all any doubt about ʿĀʾishah (RA), whose innocence Allah declared. Its whole weight falls on the hearer who repeated the rumour instead of refusing it. That is the person the verse is training, and that is the person a reader should look for in the mirror.",
            "bn": "একটা কথা আয়াতের নিজের সুরেই সোজাসুজি বলা দরকার। আয়াত তাদেরই দোষ ধরে যারা যাচাইহীন অভিযোগ ছড়ায়। আজ যার বিরুদ্ধে অভিযোগ ওঠে তার বিপক্ষে এটি কিছুরই অনুমতি দেয় না, আর আয়েশা (রাঃ) সম্পর্কে সন্দেহের তো প্রশ্নই নেই, যাঁর নির্দোষিতা স্বয়ং আল্লাহ ঘোষণা করেছেন। আয়াতের গোটা ভার গিয়ে পড়ে সেই শ্রোতার উপর, যে গুজব ফিরিয়ে না দিয়ে বরং আরও বলেছে। আয়াত এই মানুষটিকেই গড়তে চায়, আর পাঠকের উচিত আয়নায় এই মানুষটিকেই খোঁজা।"
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
            "bn": "পুরো আয়াত একটি ছোট শব্দের উপর দাঁড়িয়ে। বাক্যের শুরুতে থাকা 'লাওলা' এখানে শর্তের 'যদি না' নয়। বাগাভী, কুরতুবী আর ইবন কাসীর প্রত্যেকেই এর অর্থ করেন 'হাল্লা' দিয়ে, মানে কেন নয়, কিংবা তোমরা কেন করলে না। তাই বাক্যটা একটা না-করা কাজের জন্য ভর্ৎসনা। শোনার পর মুমিন পুরুষ ও নারীরা কেন ভালো ধারণা করল না? আয়াত এখানে সুধারণাকে এমন কোনো গুণ বলে প্রশংসা করছে না, যা কেউ কেউ অর্জন করে। আয়াত একে দায়িত্ব হিসেবে দাবি করছে, আর শ্রোতারা সে দায়িত্ব পালন করেনি।"
          },
          {
            "en": "As-Sa'di reads the good opinion the verse wants as thinking of one another with soundness: a believer is clear of what the slanderers alleged, and the faith known to be in a person repels the falsehood thrown at them. The Muyassar keeps the same line, that the best is to be assumed the moment the ifk is heard. As-Sa'di then fixes the level of obligation — this, he says, is the opinion made obligatory, that when a believer hears such talk of his brother he clears him with his tongue and gives the lie to the one who spoke it.",
            "bn": "সা'দীর মতে, আয়াত যে সুধারণা চায় তা হলো একে অন্যকে নির্দোষ ভাবা: অপবাদকারীরা যা বলেছে, মুমিন তা থেকে মুক্ত। কারও মধ্যে যে ঈমান আছে বলে জানা, সেই ঈমানই তার দিকে ছোড়া মিথ্যাকে ঠেকিয়ে দেয়। মুয়াসসারও একই কথা বলে: ইফক কানে আসামাত্রই একে অন্যের ব্যাপারে সবচেয়ে ভালোটা ধরে নেওয়া উচিত ছিল। এরপর সা'দী বলে দেন, এ দায়িত্ব কতটা জরুরি। তিনি বলেন, এ ধারণা রাখা ওয়াজিব। কোনো মুমিন নিজের ভাই সম্পর্কে এমন কথা শুনলে তার কর্তব্য মুখে ভাইকে নির্দোষ বলা, আর যে কথাটা বলেছে তাকে মিথ্যাবাদী বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "As If Your Own Self",
          "bn": "যেন নিজেরই ব্যাপার"
        },
        "p": [
          {
            "en": "The verse literally says the believers should have thought well bi-anfusihim, of their own selves, though the person slandered was someone else. The commentators explain the wording. At-Tabari says He calls them their selves because the people of Islam are all as one self, since they are one community of faith. Al-Baghawi, citing al-Hasan, reads it the same way, the believers being like a single self; and an-Nahhas, quoted by both al-Qurtubi and al-Baghawi, glosses bi-anfusihim as of their brethren. To think of a fellow believer is to think of yourself.",
            "bn": "আয়াত আক্ষরিক অর্থে বলছে, মুমিনদের উচিত ছিল 'বিআনফুসিহিম', অর্থাৎ নিজেদের সম্পর্কে ভালো ধারণা করা, যদিও অপবাদটা উঠেছিল অন্য একজনের বিরুদ্ধে। মুফাসসিরগণ শব্দটির ব্যাখ্যা দেন। তাবারী বলেন, তিনি তাদের 'নিজেদের' বলেছেন, কারণ ইসলামের লোকেরা সবাই এক সত্তার মতো, যেহেতু তারা এক দ্বীনের মানুষ। বাগাভী হাসানের উদ্ধৃতি দিয়ে একই কথা বলেন, মুমিনরা যেন এক সত্তা। আর নাহহাস, যাঁকে কুরতুবী ও বাগাভী দুজনেই উদ্ধৃত করেন, 'বিআনফুসিহিম'-এর অর্থ করেন 'তাদের ভাইদের সম্পর্কে'। একজন মুমিনের কথা ভাবা মানেই নিজের কথা ভাবা।"
          },
          {
            "en": "Ma'arif al-Qur'an draws this out. Because the tie of Islam has joined believers into one body, a Muslim who defames another in truth defames himself. It points to the Qur'an's habit of using the same figure: do not find fault with your own selves (49:11), do not kill your own selves (4:29), greet your own selves (24:61) — each phrased as if the other Muslim were oneself. At-Tabari cites Mujahid for the same reading of the parallel verses. The wound you deal a brother's name, you deal your own.",
            "bn": "মাআরিফুল কুরআন কথাটা খুলে বলে। ইসলামের বাঁধন মুমিনদের এক দেহে জুড়ে দিয়েছে। তাই যে মুসলিম অন্য মুসলিমের বদনাম করে, সে আসলে নিজেরই বদনাম করে। মাআরিফ দেখায়, কুরআন বারবার এভাবেই কথা বলে: নিজেদের দোষ ধরো না (৪৯:১১), নিজেদের হত্যা করো না (৪:২৯), নিজেদের সালাম দাও (২৪:৬১)। প্রতিটি জায়গায় অন্য মুসলিমের কথা এমনভাবে বলা হয়েছে, যেন সে নিজেই। এই সমান্তরাল আয়াতগুলোর একই ব্যাখ্যা তাবারী মুজাহিদের সূত্রে উদ্ধৃত করেন। ভাইয়ের সুনামে যে আঘাত দেন, সে আঘাত পড়ে আপনার নিজের গায়েই।"
          },
          {
            "en": "This is not sentiment. It is why the duty of good opinion is not optional. When the honour of one believer is torn down, the fabric Ma'arif calls the one body tears with it, and the tear does not stay where it began. That is why the verse addresses the whole gathering of believing men and women, not only the few who first spoke. A rumour needs a crowd to carry it, and the verse tells that crowd that the name it is careless with is, in the end, its own.",
            "bn": "এটা নিছক আবেগের কথা নয়। এ কারণেই সুধারণা রাখা ঐচ্ছিক নয়, দায়িত্ব। একজন মুমিনের সম্মান যখন ভেঙে পড়ে, মাআরিফ যাকে এক দেহ বলেছে, সেই বুননও তখন ছিঁড়ে যায়, আর সে ছেঁড়া যেখানে শুরু হয়েছিল সেখানে থেমে থাকে না। এ কারণেই আয়াত শুধু প্রথমে মুখ খোলা কয়েকজনকে নয়, মুমিন পুরুষ ও নারীদের পুরো সমাজকে সম্বোধন করে। গুজব বয়ে নিতে ভিড় লাগে। আয়াত সেই ভিড়কেই বলছে, যে নাম নিয়ে তারা এত বেখেয়াল, শেষ পর্যন্ত সেটা তাদের নিজেদেরই নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Hold It to Yourself First",
          "bn": "আগে নিজের গায়ে মাপুন"
        },
        "p": [
          {
            "en": "Ibn Kathir gives the verse a test the hearer can run at once. To think well of your own selves, he says, is to measure the talk against yourselves: if such a thing would not befit you, the Mother of the Believers is worthier still of being cleared of it. Al-Qurtubi puts it the same way — the virtuous believers ought to have measured the matter against themselves, and if it were far-fetched of them, it was far more far-fetched of ʿĀʾishah (RA) and Safwan (RA).",
            "bn": "ইবন কাসীর আয়াত থেকে এমন একটা পরীক্ষা বের করেন, যা শ্রোতা সঙ্গে সঙ্গে নিজের উপর করে দেখতে পারে। তিনি বলেন, নিজেদের সম্পর্কে ভালো ধারণা করা মানে কথাটা নিজের গায়ে মেপে দেখা। তোমাদের পক্ষেই যদি এমন কাজ মানানসই না হয়, তবে উম্মুল মুমিনীন তো তা থেকে মুক্ত থাকার আরও বেশি হকদার। কুরতুবীও একই কথা বলেন: নেককার মুমিনদের উচিত ছিল ব্যাপারটা নিজেদের গায়ে মেপে দেখা। নিজেদের বেলায় যা অবিশ্বাস্য, আয়েশা (রাঃ) ও সাফওয়ান (রাঃ)-এর বেলায় তা আরও অনেক বেশি অবিশ্বাস্য।"
          },
          {
            "en": "At-Tabari and al-Qurtubi both record a further reading from Ibn Zayd. The good opinion the verse asks for, he says, is that a believer knows the bond here is the bond of a mother and her children: ʿĀʾishah (RA) is a mother to the believers, and the believers stand to her as sons, a tie the Qur'an itself made sacred and inviolable. To entertain the charge at all was to forget what she was to them. Read this way, the failure the verse names is not weak reasoning but a lapse of reverence.",
            "bn": "তাবারী ও কুরতুবী দুজনেই ইবন যায়দের আরেকটি ব্যাখ্যা তুলে ধরেন। আয়াত যে সুধারণা চায়, তিনি বলেন, তা হলো মুমিন জানে এখানকার সম্পর্কটা মা আর তাঁর সন্তানের সম্পর্ক। আয়েশা (রাঃ) মুমিনদের মা, আর মুমিনরা তাঁর কাছে ছেলের মতো, এ বাঁধনকে কুরআন নিজেই পবিত্র ও অলঙ্ঘনীয় করেছে। অভিযোগটাকে মনে ঠাঁই দেওয়ার মানেই তিনি তাদের কী, তা ভুলে যাওয়া। এভাবে পড়লে আয়াত যে ব্যর্থতার কথা বলছে তা দুর্বল যুক্তি নয়, বরং সম্মানবোধের এক ঘাটতি।"
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
            "bn": "আয়াত একটি নয়, দুটি জিনিস চায়। ইবন কাসীর দুটোর জোড়টা দেখিয়ে দেন: 'নিজেদের সম্পর্কে ভালো ধারণা করা' হলো অন্তরের ভেতরের কাজ, বাতিনের কাজ; আর 'বলল, এটা খোলা মিথ্যা' হলো জিহ্বার কাজ, মুখ ফুটে বলা। মনে মনে চুপ করে রাখা সুধারণা পাওনার মাত্র অর্ধেক। যে মুমিন নিশ্চিত জানে অভিযোগটা মিথ্যা, তার কর্তব্য সেটা মুখে বলা, আর কথাটাকে তার আসল নামে ডাকা। মনের রায় মুখ পর্যন্ত পৌঁছাতে হবে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the closing clause as instilling that faith itself demanded the Muslims reject the rumour outright as a lie the instant they heard it. From this it draws a ruling: to think well of every believing man and woman is obligatory unless the contrary is proven under sacred law, and where someone accuses a Muslim without such proof, rejecting the accusation and declaring it false is itself obligatory, because it is nothing but backbiting an innocent person. The Muyassar, briefly, calls the words a plain lie against ʿĀʾishah (RA).",
            "bn": "মাআরিফুল কুরআন শেষ অংশটিকে পড়ে এভাবে যে, ঈমান নিজেই দাবি করেছিল মুসলিমরা শোনামাত্র গুজবটাকে সরাসরি মিথ্যা বলে উড়িয়ে দেবে। এখান থেকে সে একটি হুকুম বের করে, প্রতিটি মুমিন নারী-পুরুষ সম্পর্কে ভালো ধারণা রাখা ওয়াজিব, যদি না শরিয়ত অনুযায়ী উল্টোটা প্রমাণিত হয়। আর কেউ যদি এমন প্রমাণ ছাড়া কোনো মুসলিমকে অভিযোগে জড়ায়, তবে সে অভিযোগ প্রত্যাখ্যান করা আর তাকে মিথ্যা ঘোষণা করাও ওয়াজিব, কারণ এটা এক নিরপরাধ মানুষের গিবত ছাড়া কিছু নয়। মুয়াসসার সংক্ষেপে কথাগুলোকে বলে আয়েশা (রাঃ)-এর বিরুদ্ধে খোলা মিথ্যা।"
          },
          {
            "en": "At-Tabari preserves a sharper line from al-Hasan on the same clause. To call it a manifest lie, al-Hasan says, is to hold that such a thing ought not even to be uttered unless the speaker brings four witnesses and the legal charge is established — exactly what the next verse presses: why did they not bring four witnesses to it? (24:13). Speech about another's honour is not free. Until it is proven in the only way the law accepts, the believer's duty is to shut it down, not weigh it and repeat it.",
            "bn": "তাবারী একই অংশ নিয়ে হাসানের আরও কড়া একটি কথা রেখে দেন। একে খোলা মিথ্যা বলার মানে, হাসান বলেন, এমন কথা মুখেই আনা উচিত নয় যদি না বক্তা চারজন সাক্ষী হাজির করে আর শরয়ি অভিযোগ প্রতিষ্ঠিত হয়। পরের আয়াতই এ চাপটা দেয়, তারা এর উপর চারজন সাক্ষী হাজির করল না কেন (২৪:১৩)। অন্যের সম্মান নিয়ে কথা বলা এমনি এমনি জায়েজ নয়। শরিয়ত যে একমাত্র পথ মানে, সেভাবে প্রমাণ না হওয়া পর্যন্ত মুমিনের কাজ কথাটা থামিয়ে দেওয়া, মেপে দেখে ছড়ানো নয়।"
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
            "bn": "মাআরিফুল কুরআন ব্যাকরণের একটা মোড় ধরিয়ে দেয়। 'তোমরা যখন শুনলে' বলার পর মনে হয়, বাক্যটা সরাসরি সম্বোধনেই চলবে: তোমরা কেন নিজেদের সম্পর্কে ভালো ধারণা করলে না? কিন্তু তা না হয়ে বাক্যটা বদলে যায়: মুমিন পুরুষ ও নারীরা কেন ভালো ধারণা করল না? শুরুতে কথাটা সরাসরি 'তোমরা' বলে ডাকে, তারপর ভর্ৎসনা ঠিক যেখানে বিঁধবে, সেখানেই সেই 'তোমরা' সরিয়ে নেয়। মুখের উপর না বলে বলে 'মুমিনরা', যেন অন্য কারও কথা।"
          },
          {
            "en": "Ma'arif reads a subtle allusion into the change. By naming the believers rather than saying you, the verse hints that in the measure of this act the speakers had fallen short of the very name, since faith itself demanded that a Muslim keep the favourable view of another. The title is held up as the thing they were not living up to. It is a rebuke delivered by withholding a single word.",
            "bn": "মাআরিফ এই বদলের মধ্যে একটা সূক্ষ্ম ইঙ্গিত দেখে। 'তোমরা' না বলে 'মুমিনরা' বলে আয়াত বুঝিয়ে দেয়, এই কাজে বক্তারা নিজেদের সেই নামের মান রাখতে পারেনি। কারণ ঈমানই দাবি করেছিল, একজন মুসলিম অন্য মুসলিম সম্পর্কে ভালো ধারণাই রাখবে। আয়াত তাদের সামনে সেই উপাধিটাই তুলে ধরে, যার মর্যাদা তারা রাখেনি। একটিমাত্র শব্দ সরিয়ে নিয়েই এ ভর্ৎসনা দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Suspicion, the Falsest Talk",
          "bn": "সন্দেহ, সবচেয়ে বড় মিথ্যা"
        },
        "p": [
          {
            "en": "The verse's demand is matched by a word of the Prophet ﷺ. Al-Bukhari records from Abu Hurayra (RA) that he ﷺ said: Beware of suspicion, for suspicion is the worst of false tales; and do not look for the others' faults, and do not spy, and do not be jealous of one another, and do not desert one another, and do not hate one another; and, O servants of Allah, be brothers. It is a sound narration of al-Bukhari. Suspicion is named not as a small fault but as the most lying speech, the seed this verse uproots.",
            "bn": "আয়াতের এই দাবির সঙ্গে মিলে যায় নবী ﷺ-এর একটি কথা। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: সন্দেহ থেকে বেঁচে থাকো, কারণ সন্দেহ হলো সবচেয়ে বড় মিথ্যা কথা; আর অন্যের দোষ খুঁজো না, গোয়েন্দাগিরি করো না, একে অন্যকে হিংসা করো না, একে অন্যের সঙ্গে সম্পর্ক ছিন্ন করো না, একে অন্যকে ঘৃণা করো না; আর হে আল্লাহর বান্দারা, ভাই ভাই হয়ে থাকো। এটি বুখারীর একটি সহিহ বর্ণনা। হাদিসটি সন্দেহকে ছোটখাটো দোষ বলেনি, বলেছে সবচেয়ে মিথ্যা কথা। এ আয়াত ঠিক এই বীজটাই উপড়ে ফেলে।"
          },
          {
            "en": "Both Ibn Kathir and at-Tabari record that some believers met the test the verse sets. When Umm Ayyub asked her husband Abu Ayyub al-Ansari (RA) whether he had heard what people were saying, he answered that it was a lie, asked whether she herself would ever do such a thing, and when she said no, by Allah, replied that ʿĀʾishah (RA) was better than her. Some early authorities held the verse came down about that exchange; Ibn Kathir adds it was also said Ubayy ibn Kaʿb (RA) spoke its like.",
            "bn": "ইবন কাসীর ও তাবারী দুজনেই বর্ণনা করেন যে কিছু মুমিন আয়াতের এ পরীক্ষায় উতরে গিয়েছিলেন। উম্মে আইয়ুব যখন স্বামী আবু আইয়ুব আনসারী (রাঃ)-কে জিজ্ঞেস করলেন, লোকে কী বলছে তা তিনি শুনেছেন কি না, তিনি জবাব দিলেন, ওটা মিথ্যা। তারপর জিজ্ঞেস করলেন, তুমি নিজে কি কখনো এমন করতে? উম্মে আইয়ুব বললেন, না, আল্লাহর কসম। তখন তিনি বললেন, আয়েশা (রাঃ) তো তোমার চেয়ে উত্তম। কিছু পূর্বসূরি মনে করেন, আয়াতটি এই কথোপকথন নিয়েই নাজিল হয়েছে। ইবন কাসীর যোগ করেন, বলা হয় উবাই ইবন কা'ব (রাঃ)-ও এমন কথা বলেছিলেন।"
          },
          {
            "en": "The affair itself is preserved in ʿĀʾishah's (RA) own long account, reported by al-Bukhari and Muslim, sound in both. Told in her voice, it moves through her distress to one destination: the coming down of the verses that declared her free of the charge. The believers around her had the same facts and far less cause to doubt, yet the account shows how readily a community carries a story it never checked. That gap, between what was known and what was repeated, is what this verse was sent to close.",
            "bn": "গোটা ঘটনাটা রক্ষিত আছে আয়েশা (রাঃ)-এর নিজের দীর্ঘ বর্ণনায়, যা বুখারী ও মুসলিম দুই জায়গাতেই বর্ণিত, আর দুটিতেই সহিহ। তাঁর নিজের মুখে বলা এ ঘটনা তাঁর কষ্টের ভেতর দিয়ে গিয়ে একটিই গন্তব্যে পৌঁছায়, সেই আয়াতগুলোর নাজিল হওয়া যা তাঁকে অভিযোগ থেকে মুক্ত ঘোষণা করল। তাঁর চারপাশের মুমিনদের হাতে তাঁর মতোই তথ্য ছিল, সন্দেহের কারণ ছিল আরও কম, তবু বর্ণনাটা দেখিয়ে দেয় যাচাই না করা কথা বইতে একটা সমাজ কত সহজে রাজি হয়ে যায়। জানা আর ছড়ানোর মাঝের সেই ফাঁকটুকু বন্ধ করতেই এ আয়াত নাজিল হয়েছে।"
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
            "bn": "কুরতুবী আয়াতটিকে প্রথমে এক স্থায়ী দায়িত্ব, তারপর এক নীতি হিসেবে দাঁড় করান। তিনি বলেন, আল্লাহ মুসলিমদের উপর ওয়াজিব করেছেন: কেউ কারও নামে অপবাদ দিচ্ছে, তাকে এমন কোনো নোংরা কাজে জড়াচ্ছে যা তার সম্পর্কে তারা জানে না, এমন শুনলে তারা যেন কথাটা প্রত্যাখ্যান করে আর মিথ্যা বলে দেয়। আর যে এ দায়িত্ব ছেড়ে দেয় বা কথাটা আরও ছড়ায়, আল্লাহ তাকে সতর্ক করেছেন। এখান থেকে আলিমগণ একটি নীতি বের করেছেন, যা কুরতুবী নিজের ভাষায় বলেন: একজন মানুষ ঈমানের যে স্তরে পৌঁছেছে, নেককার জীবনের যে অবস্থানে দাঁড়িয়ে আছে, একজন মুসলিম সতীত্বের যে পোশাক পরে আছে, তার কোনোটাই কেড়ে নেওয়া যায় না এমন সন্দেহজনক খবরে, যার উৎস নষ্ট বা অজানা, তা যত দূরেই ছড়াক।"
          },
          {
            "en": "For the reader the verse is a rule for the moment a charge arrives, before any decision is made. The first instinct it asks for is good opinion; the first words, that an unproven charge is a lie; the first act it forbids, passing the talk along. None of this licenses ignoring a real wrong or silencing someone who reports being harmed. It is aimed squarely at the idle repeater, not at the one accused. It asks only that a believer's good name be as safe in your mouth as you would want your own to be in theirs.",
            "bn": "পাঠকের জন্য এ আয়াত একটি নিয়ম, যা খাটে অভিযোগ কানে আসার মুহূর্তেই, কোনো সিদ্ধান্ত নেওয়ার আগে। মনের প্রথম প্রতিক্রিয়া হবে সুধারণা; মুখের প্রথম কথা হবে, প্রমাণহীন অভিযোগ মিথ্যা; আর প্রথম যে কাজটা নিষেধ, তা হলো কথাটা অন্যের কানে তোলা। এর কোনোটাই সত্যিকারের অন্যায় এড়িয়ে যাওয়ার অনুমতি দেয় না, আবার কেউ নিজের ক্ষতির কথা জানালে তাকে চুপ করানোরও অনুমতি দেয় না। আয়াতের নিশানা সোজা সেই লোকের দিকে, যে বসে বসে কথা ছড়ায়, অভিযুক্তের দিকে নয়। আয়াত শুধু এটুকু চায়: একজন মুমিনের সুনাম আপনার মুখে ততটাই নিরাপদ থাকুক, যতটা নিরাপদ আপনি চান আপনার নিজের সুনাম তার মুখে।"
          }
        ]
      }
    ]
  },
  "24:14": {
    "sections": [
      {
        "h": {
          "en": "A Lawla That Is Answered",
          "bn": "যে লাওলার জবাব মেলে"
        },
        "p": [
          {
            "en": "The passage on the slander opened at 24:11, and two verses of reproach followed, each beginning with the small word lawla. In both the translation reads it as why: why did the believers not think well of one another (24:12), why did the accusers not bring four witnesses (24:13). Verse 14 opens with lawla too, but now it means were it not for. A rebuke for what was left undone becomes a statement of what they were spared.",
            "bn": "অপবাদের অধ্যায় শুরু হয়েছে ২৪:১১ আয়াতে। তারপর ভর্ৎসনার দুটি আয়াত, দুটিরই শুরু একই ছোট্ট শব্দে: লাওলা। অনুবাদ দুই জায়গাতেই এর অর্থ করেছে 'কেন': মু'মিনরা কেন একে অপরের ব্যাপারে ভালো ধারণা করল না (২৪:১২), অভিযোগকারীরা কেন চারজন সাক্ষী আনল না (২৪:১৩)। ১৪ নম্বর আয়াতও লাওলা দিয়ে শুরু, কিন্তু এবার তার অর্থ 'যদি না থাকত'। যা করা হয়নি তার জন্য তিরস্কার এখানে এসে বদলে যায়। এবার বলা হচ্ছে, কী থেকে তাদের রেহাই দেওয়া হয়েছে।"
          },
          {
            "en": "The same opening, were it not for Allah's favour upon you and His mercy, comes three times in this stretch of the surah. In 24:10 and 24:20 the sentence stops short, the translation marking the gap with an ellipsis; only here is the consequence spoken. Al-Qurtubi gives the grammar: fadl is the subject, its predicate left unexpressed, as the Arabs leave it. The answer of lawla, he adds, is dropped because its like is stated afterwards, and he quotes this verse, lamassakum, as that answer.",
            "bn": "'তোমাদের প্রতি আল্লাহর অনুগ্রহ ও তাঁর রহমত না থাকলে', এই সূচনা সূরার এ অংশে তিনবার এসেছে। ২৪:১০ ও ২৪:২০ আয়াতে বাক্যটা মাঝপথে থেমে যায়, অনুবাদ সে ফাঁকটা তিনটি বিন্দু দিয়ে দেখায়। কী হতো, তা খুলে বলা হয়েছে কেবল এখানেই। কুরতুবী এ আয়াতের ব্যাখ্যায় ব্যাকরণটা বুঝিয়ে দেন। ফাদল শব্দটি উদ্দেশ্য, আর তার বিধেয় উহ্য, আরবরা যা মুখে আনে না। তিনি আরও বলেন, লাওলার জবাব বাদ দেওয়া হয়েছে কারণ তার মতো জবাব পরে উল্লেখ হয়েছে। তারপর সেই জবাব হিসেবে তিনি এ আয়াতটিই উদ্ধৃত করেন: লামাসসাকুম, তোমাদের ছুঁয়ে ফেলত।"
          },
          {
            "en": "Al-Qurtubi names the tone of the verse in two clauses. It is, he says, an eloquent reproach from Allah, an ʿitab baligh; yet by His mercy He veiled them in this world, and in the Hereafter He has mercy on whoever comes to Him repenting. The verse does not cancel the rebuke before it. It sets the rebuke inside a mercy, so that those who hear it know both what they earned and why it did not reach them.",
            "bn": "আয়াতের সুর কেমন, কুরতুবী তা দুই কথায় বলে দেন। তাঁর ভাষায় এটি আল্লাহর পক্ষ থেকে গভীর ভর্ৎসনা, ইতাব বালীগ। তবু তিনি নিজ রহমতে দুনিয়ায় তাদের দোষ ঢেকে রেখেছেন, আর আখিরাতে যে তওবা করে তাঁর কাছে আসবে তাকে রহম করবেন। আগের দুই আয়াতের তিরস্কার এ আয়াত মুছে দেয় না। তিরস্কারটাকে সে রহমতের ভেতরে রেখে দেয়। যারা শোনে তারা দুটোই জানে: কী তাদের প্রাপ্য ছিল, আর কেন তা তাদের কাছে পৌঁছায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken to Those Who Waded In",
          "bn": "যারা কথায় নেমেছিল তাদের প্রতি"
        },
        "p": [
          {
            "en": "Whom does the you of this verse address? At-Tabari answers in his paraphrase: O you who plunged into the affair of ʿĀʾishah (RA), spreading the lie and the sin about her. Ibn Kathir opens with the same phrase, you who plunged into her matter. At-Tabari then cites Ibn Zayd, who says that this is for those who spoke and spread that talk. On this reading the verse turns to the speakers.",
            "bn": "এ আয়াতের 'তোমরা' কারা? তাবারী তাঁর ব্যাখ্যাতেই উত্তর দেন: হে তোমরা, যারা আয়েশা (রাঃ)-র ব্যাপারে কথায় ডুবে গিয়েছিলে আর তাঁর নামে মিথ্যা ও গুনাহের কথা ছড়িয়েছিলে। ইবন কাসীরও শুরু করেন একই কথায়: তোমরা যারা তাঁর বিষয়ে কথায় নেমেছিলে। এরপর তাবারী ইবন যায়দের কথা আনেন। তিনি সোজা বলেন, এ আয়াত তাদের জন্য যারা কথা বলেছিল আর সে কথা ছড়িয়ে দিয়েছিল। এ পাঠে আয়াতের সম্বোধন তাদের প্রতি, যারা মুখ খুলেছিল।"
          },
          {
            "en": "Ibn Kathir then narrows it further. This concerns, he says, those in whom there was faith, on account of which Allah granted them repentance, and he names Mistah, Hassan, and Hamnah bint Jahsh, the sister of Zaynab bint Jahsh. Ma'arif al-Qur'an reads it the same way: the verse came for believers who had by mistake become involved in the slander, then repented and begged Allah's pardon. Both name them as repenters, and the verse reaches them as mercy.",
            "bn": "ইবন কাসীর এরপর পরিধিটা আরও ছোট করে আনেন। তাঁর কথায়, এ আয়াত তাদের ব্যাপারে যাদের অন্তরে ঈমান ছিল, আর সেই ঈমানের কারণেই আল্লাহ তাদের তওবার তাওফীক দিয়েছেন। তিনি নাম নেন মিসতাহ, হাসসান এবং যায়নাব বিনতে জাহশের বোন হামনা বিনতে জাহশের। মাআরিফুল কুরআনও আয়াতটি একইভাবে পড়ে। সেখানে বলা হয়েছে, এ আয়াত এসেছে সেই মু'মিনদের জন্য, যারা ভুল করে অপবাদে জড়িয়ে পড়েছিল, পরে তওবা করেছিল আর আল্লাহর কাছে ক্ষমা চেয়েছিল। দুই ব্যাখ্যাতেই যাদের নাম আসে, তারা আসে তওবাকারী হিসেবে। আয়াত তাদের কাছে পৌঁছায় রহমত হয়ে।"
          },
          {
            "en": "Ibn Kathir draws one line in the other direction. Those of the hypocrites who plunged into it, such as ʿAbdullah ibn Ubayy ibn Salul and his like, are not meant in this verse, he says, because they had nothing of faith and righteous deeds to equal what they had done or to offset it. The rumour had carried believers and hypocrites along together. The verse, on his reading, separates them again, and the mercy it announces is for those whose faith remained.",
            "bn": "অন্য দিকেও ইবন কাসীর একটা সীমারেখা টানেন। মুনাফিকদের মধ্যে যারা এ কথায় নেমেছিল, যেমন আবদুল্লাহ ইবন উবাই ইবন সালূল ও তার মতো লোকেরা, তারা এ আয়াতের উদ্দেশ্য নয়। কারণ, তাঁর ভাষায়, তাদের কাছে এমন ঈমান ও নেক আমল ছিল না যা তাদের কাজের সমান হতে পারে বা তার মোকাবিলা করতে পারে। গুজবটা মু'মিন আর মুনাফিক দুই দলকেই একসঙ্গে ভাসিয়ে নিয়েছিল। ইবন কাসীরের পাঠে আয়াত তাদের আবার আলাদা করে দেয়। আয়াতে ঘোষিত রহমত তাদের জন্য, যাদের ঈমান অটুট ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Favour That Stayed the Blow",
          "bn": "অনুগ্রহ যখন আঘাত থামায়"
        },
        "p": [
          {
            "en": "The verse pairs two gifts, fadl and rahmah, favour and mercy, and at-Tabari gives each its own work. The favour was His leaving off hastening your punishment; the mercy, His pardoning you; and in this world and the Hereafter he explains as His accepting your repentance. The Muyassar runs on the same line: His goodness covered your religion and your worldly life, so He did not hasten your punishment, and He turned to whoever of you repented.",
            "bn": "আয়াতে দুটি দান পাশাপাশি এসেছে: ফাদল আর রহমাহ, অনুগ্রহ আর দয়া। তাবারী দুটিকে আলাদা কাজ দেন। তাঁর ভাষায় অনুগ্রহ হলো তিনি তোমাদের শাস্তি তাড়াতাড়ি দেননি। রহমত হলো তিনি তোমাদের মাফ করেছেন। আর 'দুনিয়া ও আখিরাতে' কথাটির ব্যাখ্যা তাঁর কাছে এই: তিনি তোমাদের তওবা কবুল করেছেন। মুয়াসসারও একই পথে চলে। আল্লাহর ইহসান তোমাদের দ্বীন আর দুনিয়া দুটোকেই ঘিরে রেখেছিল। তাই তিনি শাস্তি ত্বরান্বিত করেননি, আর তোমাদের মধ্যে যে তওবা করেছে তার তওবা কবুল করেছেন।"
          },
          {
            "en": "Ibn Kathir divides the two abodes: in this world He accepted their repentance and their turning back to Him, and for the Hereafter He pardoned them on account of their faith. As-Sa'di keeps the pair together, His goodness covering you in both, in your religion and in your worldly life. On each of these readings the mercy is more than a promise for later. Here it had already acted, holding the punishment back and taking the repentance in.",
            "bn": "ইবন কাসীর দুই জগৎকে আলাদা করে দেখান। দুনিয়ায় আল্লাহ তাদের তওবা আর তাঁর দিকে ফিরে আসা কবুল করেছেন। আখিরাতের জন্য তাদের ঈমানের কারণে তিনি তাদের মাফ করে দিয়েছেন। সা'দী দুটোকে একসঙ্গে রাখেন। তাঁর কথায়, আল্লাহর ইহসান দুই জগতেই তোমাদের ঘিরে রেখেছে, তোমাদের দ্বীনের ব্যাপারেও, দুনিয়ার ব্যাপারেও। এর যেকোনো পাঠেই রহমত শুধু পরকালের ওয়াদা নয়। দুনিয়াতেই সে কাজ করে ফেলেছে: শাস্তি ঠেকিয়ে রেখেছে, তওবা কবুল করেছে।"
          },
          {
            "en": "Ma'arif al-Qur'an traces the worldly side of that mercy in steps: divine help to accept Islam and its faith; the company of the Prophet ﷺ, which it calls an impediment to punishment; help to repent sincerely and beg Allah's forgiveness; and at last the repentance accepted and the sin pardoned. In the Hereafter, it says, the sign of His favour and mercy is His promise to forgive and overlook. The last step of all waits on the sinner's turning.",
            "bn": "মাআরিফুল কুরআন এ রহমতের দুনিয়ার দিকটা ধাপে ধাপে দেখায়। প্রথমে এসেছে ইসলাম ও ঈমান গ্রহণের তাওফীক। তারপর নবী ﷺ-এর সাহচর্য, যাকে সে শাস্তির পথে বাধা বলে। তারপর আন্তরিকভাবে তওবা করে আল্লাহর কাছে মাফ চাওয়ার তাওফীক। শেষে তওবা কবুল হয়েছে, গুনাহ মাফ হয়েছে। আখিরাতে এ অনুগ্রহ ও রহমতের নিদর্শন হলো, তিনি ক্ষমা করার আর দোষ উপেক্ষা করার ওয়াদা দিয়েছেন। শেষ ধাপটা অবশ্য গুনাহগারের ফিরে আসার অপেক্ষায় থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Torment Here or There",
          "bn": "শাস্তি এখানে না ওখানে"
        },
        "p": [
          {
            "en": "What would the great punishment have been? The commentators differ. At-Tabari places it in this world: it would have touched you, in what you plunged into concerning her, hastened in this life, ʿajilan fi d-dunya. Al-Baghawi relays Ibn ʿAbbas the other way: a punishment with no end to it, meaning in the Hereafter. The reason given is that the punishment of this world had already been named in 24:11, for him who took upon himself the greater portion of it.",
            "bn": "মহা শাস্তিটা কী হতো? এ প্রশ্নে তাফসীরকারদের মত ভিন্ন। তাবারী একে দুনিয়ার শাস্তি ধরেন। তাঁর কথায়, তাঁর ব্যাপারে যে কথায় তোমরা ডুবে গিয়েছিলে, তার জন্য এ দুনিয়াতেই শাস্তি দ্রুত তোমাদের ছুঁয়ে ফেলত, আজিলান ফিদ-দুনইয়া। বাগাভী ইবন আব্বাসের সূত্রে উল্টো কথা আনেন: এমন শাস্তি যার কোনো শেষ নেই, অর্থাৎ আখিরাতে। কারণ হিসেবে বলা হয়েছে, দুনিয়ার শাস্তির কথা আগেই ২৪:১১ আয়াতে এসে গেছে, যে লোক এর বড় অংশের দায় নিজের কাঁধে নিয়েছিল তার প্রসঙ্গে।"
          },
          {
            "en": "Of that man al-Baghawi adds that the punishment did reach him: he was flogged and given the prescribed penalty. Al-Qurtubi reads both worlds. In his paraphrase the words in this world and the Hereafter follow the punishment, not the mercy: a great punishment would have touched you, because of what you said about ʿĀʾishah (RA), in this world and the Hereafter. Ma'arif al-Qur'an also reads both: a worldly punishment like that sent on earlier peoples, and a severe punishment in the Hereafter besides.",
            "bn": "সেই লোক সম্পর্কে বাগাভী আরও বলেন, শাস্তি তার উপর এসেছিল: তাকে বেত্রাঘাত করা হয়েছিল আর নির্ধারিত দণ্ড দেওয়া হয়েছিল। কুরতুবী দুই জগৎই ধরেন। তাঁর ব্যাখ্যায় 'দুনিয়া ও আখিরাতে' কথাটি রহমতের পরে নয়, শাস্তির পরে বসে: আয়েশা (রাঃ)-র ব্যাপারে তোমরা যা বলেছ তার কারণে দুনিয়া ও আখিরাতে মহা শাস্তি তোমাদের ছুঁয়ে ফেলত। মাআরিফুল কুরআনও দুটোই ধরে। দুনিয়ায় শাস্তি আসতে পারত, আগের জাতিগুলোর উপর যেমন এসেছিল, আর আখিরাতে আসত কঠিন শাস্তি।"
          },
          {
            "en": "The disagreement is worth keeping as it stands, because each reading teaches something. If the punishment was worldly, the mercy was that Allah did not hasten it. If it was of the Hereafter, the mercy was a pardon that reached past death. If it was both, the debt was larger than either alone. On no reading was it small. The verse that follows says the speakers counted it a light thing while with Allah it was tremendous (24:15).",
            "bn": "মতভেদটা যেমন আছে তেমনই রাখা ভালো, কারণ প্রতিটি পাঠই কিছু শেখায়। শাস্তি দুনিয়ার হলে রহমত এই যে, আল্লাহ তা ত্বরান্বিত করেননি। আখিরাতের হলে রহমত এমন ক্ষমা, যা মৃত্যুর ওপারেও পৌঁছায়। দুটোই হলে ঋণটা আরও বড়। কোনো পাঠেই ব্যাপারটা ছোট নয়। পরের আয়াতই বলে, যারা কথাটা বলেছিল তারা একে তুচ্ছ ভেবেছিল, অথচ আল্লাহর কাছে তা ছিল গুরুতর (২৪:১৫)।"
          }
        ]
      },
      {
        "h": {
          "en": "Held to Account for Talk",
          "bn": "কথার জন্যই জবাবদিহি"
        },
        "p": [
          {
            "en": "The verse names what the punishment would have been for: fi ma afadtum fihi, for that in which you were involved, as the translation has it. Al-Qurtubi defines the word. Al-ifadah is taking up a conversation; one says afada al-qawmu fi l-hadith when people go into a piece of talk. And this, he adds, is the very thing on which the reproach fell. As-Sa'di and al-Baghawi both gloss afadtum with khudtum, you plunged, and at-Tabari and the Muyassar use the same verb in their paraphrase.",
            "bn": "শাস্তি কী কারণে হতো, আয়াত তা নিজেই বলে দেয়: ফী মা আফাদতুম ফীহি, যে কথায় তোমরা মেতে উঠেছিলে তার জন্য। কুরতুবী শব্দটার অর্থ বুঝিয়ে দেন। ইফাদা মানে কোনো আলাপে লেগে যাওয়া। লোকেরা কোনো কথা নিয়ে মেতে উঠলে আরবিতে বলা হয়, আফাদাল কাওমু ফিল-হাদীস। কুরতুবী আরও বলেন, ভর্ৎসনা এসে পড়েছে ঠিক এ কাজটার উপরেই। সা'দী ও বাগাভী দুজনেই আফাদতুম শব্দের ব্যাখ্যা করেন খুদতুম দিয়ে, অর্থাৎ তোমরা ডুবে গিয়েছিলে। তাবারী আর মুয়াসসারও তাদের ব্যাখ্যায় একই ক্রিয়া ব্যবহার করেন।"
          },
          {
            "en": "Notice the word the verse chooses. It is not a word for inventing a charge. It is afadtum: going into talk, joining a conversation and carrying it on. As-Sa'di is blunt about the weight of that: the great punishment would have touched you because you deserved it by what you said, li-stihqaqikum dhalika bi-ma qultum. Speech alone, on his reading, was enough to earn it. Nothing more had to be done with the hands.",
            "bn": "আয়াত কোন শব্দটা বেছে নিয়েছে, খেয়াল করুন। অভিযোগ বানানোর কোনো শব্দ এখানে নেই। শব্দটা আফাদতুম: কথায় নেমে পড়া, একটা আলাপে যোগ দিয়ে তা এগিয়ে নেওয়া। এর ভার কতখানি, সা'দী তা সোজাসুজি বলেন: মহা শাস্তি তোমাদের ছুঁয়ে ফেলত, কারণ তোমরা যা বলেছ তার দরুন তোমরা তার যোগ্য হয়ে গিয়েছিলে, লিস্তিহকাকিকুম যালিকা বিমা কুলতুম। তাঁর পাঠে শুধু কথাই সে শাস্তি পাওনা করে দেওয়ার জন্য যথেষ্ট ছিল। হাত দিয়ে আর কিছু করার দরকার পড়েনি।"
          },
          {
            "en": "This is uncomfortable for anyone who has passed on what they heard. Repeating may seem lighter than inventing, and to a degree the passage agrees, since 24:11 sets apart him who took the greater portion. But this verse tells the repeaters that their share was enough to call down a great punishment, held back only by favour. The verses around it go on to tongues and mouths (24:15), and to the words that should have been said instead (24:16).",
            "bn": "যে কখনো শোনা কথা অন্যকে বলেছে, তার জন্য কথাটা অস্বস্তিকর। মনে হতে পারে, বানানোর চেয়ে বলে বেড়ানো হালকা। কিছুটা অধ্যায়টিও তা মানে, কারণ ২৪:১১ আয়াত বড় অংশের দায় যে নিয়েছিল তাকে আলাদা করে রেখেছে। কিন্তু এ আয়াত যারা কথা ছড়িয়েছিল তাদের জানিয়ে দেয়, তাদের ভাগটাও মহা শাস্তি ডেকে আনার জন্য যথেষ্ট ছিল। তা ঠেকিয়ে রেখেছে কেবল অনুগ্রহ। আশপাশের আয়াতগুলো এরপর জিভ আর মুখের কথা বলে (২৪:১৫), আর বলে তার বদলে কোন কথাটা বলা উচিত ছিল (২৪:১৬)।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning With a Condition",
          "bn": "শর্তে বাঁধা হুঁশিয়ারি"
        },
        "p": [
          {
            "en": "Ibn Kathir closes his comment with a rule that reaches well beyond this verse. Such, he says, is the way of every threat that comes for a specific act: it is stated without qualification, yet it is conditioned on there being no repentance, or nothing of righteous deeds to balance it or outweigh it. A threat in the Qur'an against a deed, read this way, is real. It is also not the last word on the person who did the deed.",
            "bn": "ইবন কাসীর তাঁর আলোচনা শেষ করেন এমন এক নিয়ম দিয়ে, যা এ আয়াত ছাড়িয়ে অনেক দূর যায়। তাঁর কথায়, নির্দিষ্ট কোনো কাজের উপর যে হুঁশিয়ারি আসে, তার ধরন এমনই। কথাটা শর্ত ছাড়া বলা হয়, কিন্তু তা বাঁধা থাকে একটা শর্তে: তওবা না থাকা, কিংবা এমন নেক আমল না থাকা যা তার সমান বা তার চেয়ে ভারী। এভাবে পড়লে কুরআনে কোনো কাজের বিরুদ্ধে হুঁশিয়ারি সত্যি। আবার যে কাজটা করেছে, তার ব্যাপারে সেটাই শেষ কথাও নয়।"
          },
          {
            "en": "He applies the rule to the two groups he has already named. The believers had faith, and Allah made it the means of their repentance, so the threat that their words deserved did not fall on them. The hypocrites had nothing of faith or righteous deeds to set against what they had done, and so, he says, this verse does not speak to them. In his wording both groups had plunged into the same affair. The difference lay in what stood behind each speaker.",
            "bn": "যে দুই দলের নাম তিনি আগে নিয়েছেন, এ নিয়ম তিনি তাদের উপর খাটান। মু'মিনদের ঈমান ছিল, আর আল্লাহ সে ঈমানকেই তাদের তওবার উপায় বানিয়ে দিয়েছেন। তাই তাদের কথার যে হুঁশিয়ারি পাওনা ছিল, তা তাদের উপর পড়েনি। মুনাফিকদের কাছে নিজেদের কাজের মোকাবিলায় রাখার মতো ঈমান বা নেক আমল কিছুই ছিল না। তাই তাঁর মতে এ আয়াত তাদের উদ্দেশ করে নয়। তাঁর ভাষায় দুই দলই একই ব্যাপারে কথায় নেমেছিল। পার্থক্য ছিল প্রত্যেক বক্তার পেছনে যা দাঁড়িয়ে ছিল তাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Penalty That Purifies",
          "bn": "যে দণ্ড গুনাহ ধুয়ে দেয়"
        },
        "p": [
          {
            "en": "As-Sa'di names one more gift folded into the favour and mercy of this verse. Of Allah's favour upon you, he says, is that He legislated repentance for you and made the punishment a purification for sins, jaʿala l-ʿuqubata mutahhiratan li-dh-dhunub. Ma'arif al-Qur'an notes that some of those involved were in fact punished. On as-Sa'di's reading, a penalty in this world for this sin is not the opposite of mercy. It is one of mercy's forms, clearing the account here so that it is not carried there.",
            "bn": "এ আয়াতের অনুগ্রহ ও রহমতের ভেতরে আরও একটি দানের কথা সা'দী বলেন। তাঁর ভাষায়, তোমাদের প্রতি আল্লাহর অনুগ্রহের একটি হলো, তিনি তোমাদের জন্য তওবার বিধান দিয়েছেন আর শাস্তিকে গুনাহ থেকে পবিত্র হওয়ার উপায় বানিয়েছেন, জাআলাল উকূবাতা মুতাহহিরাতান লিয-যুনূব। মাআরিফুল কুরআন জানায়, জড়িতদের কয়েকজনকে সত্যিই শাস্তি দেওয়া হয়েছিল। সা'দীর পাঠে এ গুনাহের জন্য দুনিয়ার দণ্ড রহমতের বিপরীত নয়। বরং রহমতেরই এক রূপ, যা হিসাবটা এখানেই মিটিয়ে দেয়, যাতে তা ওপারে বয়ে নিতে না হয়।"
          },
          {
            "en": "Al-Baghawi attaches a report to this verse: ʿAmrah narrated from ʿĀʾishah (RA) that when it came down, the Prophet ﷺ applied the prescribed penalty to four, ʿAbdullah ibn Ubayy, Hassan ibn Thabit, Mistah ibn Uthathah and Hamnah bint Jahsh. At-Tirmidhi records through ʿAmrah from ʿĀʾishah (RA): \"When my innocence was revealed, the Messenger of Allah (ﷺ) stood on the Minbar and mentioned that. He recited the Qur'an, and when he descended, he ordered that two men, and the woman, be beaten as their Hadd.\"",
            "bn": "বাগাভী এ আয়াতের সঙ্গে একটি বর্ণনা জুড়ে দেন। আমরা আয়েশা (রাঃ) থেকে বর্ণনা করেছেন, এ আয়াত নাযিল হলে নবী ﷺ চারজনের উপর নির্ধারিত দণ্ড কার্যকর করেন। বাগাভী নাম নেন আবদুল্লাহ ইবন উবাই, হাসসান ইবন সাবিত, মিসতাহ ইবন উসাসা ও হামনা বিনতে জাহশের। তিরমিযী সেই আমরার সূত্রেই আয়েশা (রাঃ) থেকে বর্ণনা করেন: \"যখন আমার নির্দোষিতা নাযিল হলো, রাসূলুল্লাহ ﷺ মিম্বারে দাঁড়িয়ে বিষয়টি উল্লেখ করলেন। তিনি কুরআন তিলাওয়াত করলেন। আর নেমে এসে আদেশ দিলেন, দুজন পুরুষ ও সেই নারীকে তাদের হদ হিসেবে প্রহার করা হোক।\""
          },
          {
            "en": "At-Tirmidhi (3181) grades it hasan gharib, known only through Muhammad ibn Ishaq, and its wording speaks of her innocence as a whole, not of this verse alone. Abu Dawud (4474) has it by the same chain, and a second chain (4475), without ʿĀʾishah (RA), names the two men as Hassan ibn Thabit and Mistah ibn Uthathah, an-Nufayli adding that the woman, people say, was Hamnah bint Jahsh. The collections speak of two men and a woman; al-Baghawi's report speaks of four, Ibn Ubayy among them. The difference stays unsettled here.",
            "bn": "তিরমিযী (৩১৮১) হাদীসটিকে হাসান গরীব বলেছেন, আর জানিয়েছেন যে তা কেবল মুহাম্মাদ ইবন ইসহাকের সূত্রেই জানা যায়। এর ভাষা গোটা নির্দোষিতার কথা বলে, শুধু এ আয়াতের কথা নয়। আবু দাউদ (৪৪৭৪) একই সনদে তা বর্ণনা করেছেন। আরেকটি সনদে (৪৪৭৫), যেখানে আয়েশা (রাঃ)-র উল্লেখ নেই, দুই পুরুষের নাম এসেছে হাসসান ইবন সাবিত ও মিসতাহ ইবন উসাসা। সঙ্গে নুফাইলী যোগ করেছেন, লোকে বলে নারীটি ছিলেন হামনা বিনতে জাহশ। হাদীসগ্রন্থগুলো বলে দুজন পুরুষ ও একজন নারীর কথা, আর বাগাভীর বর্ণনা বলে চারজনের কথা, যাদের মধ্যে ইবন উবাইও আছে। পার্থক্যটা এখানে মীমাংসা না করেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Cleared by Revelation",
          "bn": "ওহির ঘোষণায় নির্দোষ"
        },
        "p": [
          {
            "en": "This verse stands inside the passage that cleared ʿĀʾishah (RA), and her innocence is the Qur'an's verdict, not an opinion. In her long account, recorded by al-Bukhari (4750) and Muslim (2770), she says that when that state passed from the Prophet ﷺ, the first words he spoke were: \"Aisha, Allah has declared your innocence.\" Allah then sent down, she says, the verses beginning Indeed, those who came with the slander are a group among you, ten verses in all, and this is among them.",
            "bn": "এ আয়াত সেই অধ্যায়ের ভেতরে, যা আয়েশা (রাঃ)-কে নির্দোষ ঘোষণা করেছে। তাঁর নির্দোষিতা কারও মত নয়, কুরআনের রায়। আল-বুখারী (৪৭৫০) ও মুসলিম (২৭৭০) তাঁর দীর্ঘ বর্ণনা সংরক্ষণ করেছেন। সেখানে তিনি বলেন, ওহির সেই অবস্থা নবী ﷺ-এর উপর থেকে কেটে গেলে তাঁর মুখের প্রথম কথা ছিল: \"আয়েশা, আল্লাহ তোমার নির্দোষিতা ঘোষণা করেছেন।\" তারপর, তাঁর কথায়, আল্লাহ নাযিল করলেন সেই আয়াতগুলো, যার শুরু: যারা অপবাদ নিয়ে এসেছে তারা তোমাদেরই একটি দল। মোট দশটি আয়াত, আর এ আয়াতটি তাদের একটি।"
          },
          {
            "en": "That needs saying plainly. The passage tells what happened in a particular community at a particular time, and its reproach and its mercy are addressed to those who took part. It licenses nothing against any living person or community, including any sect, and no reviving of the charge. What it leaves the reader is a warning about the tongue, a mercy that held back what the tongue had earned, and Allah's admonition never to return to the like of it (24:17).",
            "bn": "কথাটা সোজাসুজি বলা দরকার। অধ্যায়টি নির্দিষ্ট এক সময়ে নির্দিষ্ট এক সমাজে যা ঘটেছিল তার বর্ণনা দেয়। এর ভর্ৎসনা আর রহমত দুটোই তাদের উদ্দেশে, যারা সে ঘটনায় জড়িয়েছিল। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে, কোনো দল বা মতের বিরুদ্ধেও, এ আয়াত কিছুরই অনুমতি দেয় না। পুরোনো অভিযোগ আবার তোলারও না। পাঠকের জন্য সে রেখে যায় জিভ নিয়ে এক সতর্কবাণী, জিভের পাওনা শাস্তি ঠেকিয়ে রাখা এক রহমত, আর এমন কাজে কখনো না ফেরার জন্য আল্লাহর উপদেশ (২৪:১৭)।"
          }
        ]
      }
    ]
  },
  "24:17": {
    "sections": [
      {
        "h": {
          "en": "A Rebuke That Turns to Tomorrow",
          "bn": "তিরস্কার এবার সামনের দিকে"
        },
        "p": [
          {
            "en": "Ya'izukumu Allahu an ta'udu li-mithlihi abadan in kuntum mu'minin: Allah admonishes you never to return to the like of it, if you are believers. Nine Arabic words close a run of verses that opened at 24:11 with those who came with the ifk, the slander raised against ʿĀʾishah (RA). Allah Himself declared her innocence in these verses, 24:11 to 24:26, and that verdict stands behind every line here. The verses just before rebuked what had already been said: why did you not think well (24:12), why did you not say it is not for us to speak of this (24:16).",
            "bn": "ইয়াইযুকুমুল্লাহু আন তাঊদূ লিমিসলিহী আবাদান ইন কুনতুম মু'মিনীন: আল্লাহ তোমাদের উপদেশ দিচ্ছেন, তোমরা যেন আর কখনো এর মতো কিছুতে ফিরে না যাও, যদি তোমরা মুমিন হও। আরবিতে নয়টি শব্দ। এগুলো দিয়ে শেষ হচ্ছে সেই আয়াতের ধারা, যা ২৪:১১-এ শুরু হয়েছিল ইফক নিয়ে আসা লোকদের কথা দিয়ে। ইফক মানে আয়েশা (রাঃ)-এর নামে রটানো অপবাদ। এই আয়াতগুলোতে, ২৪:১১ থেকে ২৪:২৬ পর্যন্ত, আল্লাহ নিজেই তাঁর নির্দোষিতা ঘোষণা করেছেন, আর সেই রায় এখানকার প্রতিটি বাক্যের পেছনে দাঁড়িয়ে আছে। ঠিক আগের আয়াতগুলো তিরস্কার করেছে যা আগেই বলা হয়ে গেছে তার জন্য: কেন তোমরা ভালো ধারণা করলে না (২৪:১২), কেন বললে না, এ নিয়ে কথা বলা আমাদের কাজ নয় (২৪:১৬)।"
          },
          {
            "en": "This verse changes direction. Each rebuke before it looked back at a day that was over; this one looks ahead to every day that remains. At-Tabari names its addressees as the people he has just described: those who took up the lie with their tongues and said with their mouths what they had no knowledge of. The same community that faltered is now spoken to about its future. Allah did not cast them off. He counselled them.",
            "bn": "এই আয়াতে দিক বদলায়। আগের প্রতিটি তিরস্কার তাকিয়ে ছিল পেছনে, পার হয়ে যাওয়া একটা দিনের দিকে। এটি তাকায় সামনে, বাকি সব দিনের দিকে। তাবারী এর সম্বোধিতদের চিনিয়ে দেন সেই লোক হিসেবেই, যাদের কথা তিনি এইমাত্র বলেছেন: যারা জিহ্বায় মিথ্যাটা তুলে নিয়েছিল, আর মুখে এমন কথা বলেছিল যার কোনো জ্ঞান তাদের ছিল না। যে সমাজ হোঁচট খেয়েছিল, তাদেরকেই এখন তাদের ভবিষ্যৎ নিয়ে বলা হচ্ছে। আল্লাহ তাদের ছুড়ে ফেলেননি, নসিহত করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Counsel That Carries a Ban",
          "bn": "নিষেধের জোর নিয়ে নসিহত"
        },
        "p": [
          {
            "en": "The verb ya'izu comes from wa'z, admonition, and the commentators gloss it with a cluster of near-synonyms whose shades matter. At-Tabari: Allah reminds you and forbids you by the verses of His Book. The Muyassar keeps the same pair, reminds and forbids. Al-Baghawi sets two early glosses side by side: Ibn ʿAbbas (RA) said, Allah makes it unlawful for you, and Mujahid said, Allah forbids you. On each of these readings the counsel carries the weight of a command.",
            "bn": "ইয়াইযু ক্রিয়াটি এসেছে ওয়া'য থেকে, যার অর্থ উপদেশ। তাফসীরকারেরা একে ব্যাখ্যা করেন কাছাকাছি অর্থের কয়েকটি শব্দে, আর সেগুলোর সূক্ষ্ম পার্থক্যটা গুরুত্বপূর্ণ। তাবারী বলেন: আল্লাহ তাঁর কিতাবের আয়াত দিয়ে তোমাদের স্মরণ করিয়ে দিচ্ছেন এবং নিষেধ করছেন। মুয়াসসারও এই জোড়াই রাখে: স্মরণ করানো আর নিষেধ। বাগাভী পাশাপাশি রাখেন প্রথম যুগের দুটি ব্যাখ্যা। ইবন আব্বাস (রাঃ) বলেছেন, আল্লাহ তোমাদের জন্য এটা হারাম করছেন। মুজাহিদ বলেছেন, আল্লাহ তোমাদের নিষেধ করছেন। যে ব্যাখ্যাই ধরুন, এই নসিহতের ওজন হুকুমের সমান।"
          },
          {
            "en": "Ibn Kathir sharpens the edge. He reads ya'izukum as Allah forbidding you while threatening, mutawa'idan, that anything resembling this should ever come from you. This admonition is no gentle suggestion to be weighed and set aside. As-Sa'di turns to the other face of the word: Allah admonishes you and gives you sincere advice, and how excellent are the admonitions and counsels of our Lord. He quotes another verse that uses the same verb, inna Allaha ni'imma ya'izukum bihi, excellent is that with which Allah admonishes you (4:58).",
            "bn": "ইবন কাসীর কথাটা আরও ধারালো করেন। তাঁর পাঠে ইয়াইযুকুম মানে আল্লাহ তোমাদের নিষেধ করছেন, আর সেই সঙ্গে হুঁশিয়ার করছেন (মুতাওয়াইদান), যেন এর মতো কিছু তোমাদের কাছ থেকে আর কখনো না ঘটে। এ উপদেশ তাই এমন কোনো নরম পরামর্শ নয়, যা ভেবে দেখে পাশে সরিয়ে রাখা যায়। সা'দী শব্দটির অন্য পিঠটা দেখান: আল্লাহ তোমাদের উপদেশ দিচ্ছেন, আন্তরিক নসিহত করছেন, আর আমাদের রবের উপদেশ ও নসিহত কতই না উত্তম। তিনি একই ক্রিয়া আছে এমন আরেকটি আয়াত উদ্ধৃত করেন: ইন্নাল্লাহা নি'ইম্মা ইয়াইযুকুম বিহী, আল্লাহ তোমাদের যে উপদেশ দেন তা কতই না উত্তম (৪:৫৮)।"
          },
          {
            "en": "From this as-Sa'di draws a duty. Such counsel, he says, must be met with acceptance and compliance, with surrender, and with thanks to Allah for what He has made clear to us. Ibn Kathir hears the warning inside the counsel; as-Sa'di hears the kindness inside the warning. A listener who catches only one of them has heard half of the word.",
            "bn": "সা'দী এখান থেকে একটা দায়িত্ব বের করেন। তাঁর কথায়, এমন নসিহতের জবাব হবে কবুল করা আর মেনে নেওয়া, আত্মসমর্পণ, আর আল্লাহ আমাদের জন্য যা স্পষ্ট করেছেন তার জন্য তাঁর শোকর। ইবন কাসীর নসিহতের ভেতরে হুঁশিয়ারিটা শোনেন, সা'দী হুঁশিয়ারির ভেতরে মমতাটা। যে শ্রোতা কেবল একটা শোনে, সে শব্দটার অর্ধেক শুনেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Out of Dislike That You Return",
          "bn": "ফিরে যাওয়া তাঁর অপছন্দ বলে"
        },
        "p": [
          {
            "en": "Al-Qurtubi pauses on the grammar of an ta'udu, that you return. The particle an, he says, stands as a maf'ul min ajlihi, an object of purpose, and he supplies the word to be understood: karahiyata an, out of dislike that, or something like it. Read that way, the sentence does not merely say that Allah warns you about returning. It says He warns you because He dislikes that you should return. The prohibition carries its reason inside it, and the reason is Allah's own displeasure.",
            "bn": "আন তাঊদূ, অর্থাৎ তোমরা যেন ফিরে না যাও, এর ব্যাকরণে কুরতুবী একটু থামেন। তিনি বলেন, এখানে আন অব্যয়টি মাফউল লি-আজলিহী, মানে উদ্দেশ্য বা কারণ বোঝানো কর্ম। উহ্য শব্দটাও তিনি বসিয়ে দেন: কারাহিয়াতা আন, অর্থাৎ ফিরে যাওয়া অপছন্দ বলে, কিংবা এ ধরনের কিছু। এভাবে পড়লে বাক্যটা শুধু এটুকু বলে না যে আল্লাহ ফিরে যাওয়ার ব্যাপারে সতর্ক করছেন। বলে, তিনি সতর্ক করছেন কারণ তোমাদের ফিরে যাওয়া তিনি অপছন্দ করেন। নিষেধের ভেতরেই তার কারণ গাঁথা, আর সেই কারণ আল্লাহর নিজের অসন্তুষ্টি।"
          },
          {
            "en": "Then comes abadan, ever. Ibn Kathir glosses the phrase as anything resembling this, ever, and adds the time it governs: fima yustaqbal, in what is yet to come. The word shuts every door at once. There is no second time and no season for the old story. At-Tabari places abadan at the very end of his account of the deed, after the words what you had no knowledge of, so that the never is welded to the deed he has just spelled out.",
            "bn": "তারপর আসে আবাদান, কখনো। ইবন কাসীর বাক্যাংশটির ব্যাখ্যা দেন এভাবে: এর মতো কোনো কিছু, কখনো। সঙ্গে জুড়ে দেন এর সময়সীমা: ফীমা ইউসতাকবাল, অর্থাৎ যা সামনে আসছে তাতে। এই একটা শব্দ সব দরজা একসঙ্গে বন্ধ করে দেয়। দ্বিতীয়বার বলে কিছু নেই, পুরোনো কাহিনি আবার বলার কোনো মৌসুমও নেই। তাবারী আবাদান শব্দটি রাখেন তাঁর বর্ণনার একেবারে শেষে, যে কথার জ্ঞান তোমাদের ছিল না, ঠিক তার পরে। ফলে কখনো-না কথাটা জুড়ে যায় তাঁর এইমাত্র খুলে বলা কাজটির সঙ্গেই।"
          }
        ]
      },
      {
        "h": {
          "en": "How Wide Is Its Like",
          "bn": "এর মতো কতদূর পর্যন্ত"
        },
        "p": [
          {
            "en": "Li-mithlihi, to the like of it. What exactly is the it? Here the commentators part ways. At-Tabari reads it closely: the like of your deed in the matter of ʿĀʾishah (RA), your taking up with your tongues the falsehood told about her, and your saying with your mouths what you had no knowledge of. The Muyassar widens the frame a little, to the like of this act of false accusation, al-ittiham al-kadhib, without tying it to one name.",
            "bn": "লিমিসলিহী, এর মতো কিছুতে। কিন্তু এই এর বলতে ঠিক কী? এখানে তাফসীরকারদের পথ আলাদা হয়ে যায়। তাবারী পড়েন কাছ থেকে: আয়েশা (রাঃ)-এর ব্যাপারে তোমরা যা করেছিলে তার মতো কিছু। অর্থাৎ তাঁর নামে রটানো মিথ্যাটা জিহ্বায় তুলে নেওয়া, আর মুখে এমন কথা বলা যার কোনো জ্ঞান তোমাদের ছিল না। মুয়াসসার পরিধিটা একটু বাড়ায়: এই মিথ্যা অভিযোগের (আল-ইত্তিহামুল কাযিব) মতো কোনো কাজ। কোনো একজনের নামের সঙ্গে সে কথাটা বেঁধে দেয় না।"
          },
          {
            "en": "As-Sa'di widens it further. Mithlihi, he says, means its counterpart: accusing the believers of immoral conduct, ramy al-mu'minin bil-fujur. On his reading the verse guards every believer's honour. Al-Qurtubi moves the other way and narrows it. Its like, he argues, can only be the same saying about the very person spoken of, or about someone of her rank among the wives of the Prophet ﷺ, because of the harm such words do to the Messenger of Allah ﷺ in his honour and his family.",
            "bn": "সা'দী আরও বাড়ান। তাঁর মতে মিসলিহী মানে এর সমতুল্য কিছু: মুমিনদের উপর অশ্লীলতার অপবাদ চাপানো (রামইউল মু'মিনীনা বিল-ফুজূর)। এভাবে পড়লে আয়াতটি প্রত্যেক মুমিনের সম্মান পাহারা দেয়। কুরতুবী চলেন উল্টো দিকে, পরিধি ছোট করে আনেন। তাঁর যুক্তি, এর মতো বলতে বোঝাতে পারে কেবল ঠিক সেই মানুষটির ব্যাপারে একই কথা, অথবা নবী ﷺ-এর স্ত্রীদের মধ্যে তাঁর মর্যাদার কারও ব্যাপারে। কারণ এমন কথা আল্লাহর রাসূল ﷺ-কে তাঁর সম্মান ও পরিবারের ব্যাপারে কষ্ট দেয়।"
          },
          {
            "en": "The difference is real, and it is worth keeping open rather than settling. As-Sa'di reads the verse as a standing protection for the good name of every believer. Al-Qurtubi reads it as a protection drawn around the household of the Prophet ﷺ in particular. Both readings agree on the core that no one disputes: what was said about ʿĀʾishah (RA) may never be said again.",
            "bn": "পার্থক্যটা সত্যিকারের, আর একে মীমাংসা না করে খোলা রাখাই ভালো। সা'দী আয়াতটিকে দেখেন প্রত্যেক মুমিনের সুনামের স্থায়ী রক্ষাকবচ হিসেবে। কুরতুবী দেখেন বিশেষ করে নবী ﷺ-এর পরিবারকে ঘিরে টানা এক সুরক্ষা হিসেবে। মূল কথায় দুই পাঠই একমত, যা নিয়ে কারও দ্বিমত নেই: আয়েশা (রাঃ)-এর ব্যাপারে যা বলা হয়েছিল, তা আর কখনো বলা যাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "If You Are Believers",
          "bn": "যদি তোমরা মুমিন হও"
        },
        "p": [
          {
            "en": "In kuntum mu'minin, if you are believers. The condition is short, and each commentator hears a different weight in it. Ibn Kathir: if you believe in Allah and His law, and revere His Messenger ﷺ. Then he adds a sentence the verse itself does not spell out: as for one who is described by disbelief, his is another ruling. The counsel is spoken to believers, and it assumes that faith is the very thing that will make them listen to it.",
            "bn": "ইন কুনতুম মু'মিনীন, যদি তোমরা মুমিন হও। শর্তটা ছোট, আর প্রত্যেক তাফসীরকার এতে আলাদা ওজন শোনেন। ইবন কাসীর বলেন: যদি তোমরা আল্লাহ ও তাঁর শরীয়তে ঈমান রাখো, আর তাঁর রাসূল ﷺ-কে সম্মান করো। তারপর তিনি এমন একটা বাক্য যোগ করেন, যা আয়াত নিজে খুলে বলে না: আর যে কুফরে চিহ্নিত, তার হুকুম আলাদা। নসিহতটা মুমিনদের উদ্দেশে বলা। ধরে নেওয়া হচ্ছে, ঈমানই সেই জিনিস যা তাদের এ কথা শোনাবে।"
          },
          {
            "en": "At-Tabari reads the condition as a matter of response rather than of label: if you are people who take admonition from Allah's admonitions, follow His command, and stop at what He has forbidden you. Faith, for him, shows itself in being counselled. Al-Qurtubi calls the phrase tawqif wa-tawkid, a pointing-out and a strengthening, and gives an everyday parallel: as you might say, you ought to do such and such, if you are a man. The condition does not doubt the hearer's faith. It calls upon it.",
            "bn": "তাবারী শর্তটাকে দেখেন পরিচয়ের প্রশ্ন হিসেবে নয়, সাড়া দেওয়ার প্রশ্ন হিসেবে: যদি তোমরা এমন লোক হও, যারা আল্লাহর উপদেশ থেকে শিক্ষা নেয়, তাঁর আদেশ মানে, আর যা তিনি নিষেধ করেছেন তাতে থেমে যায়। তাঁর কাছে ঈমানের প্রকাশ নসিহত কবুল করার মধ্যেই। কুরতুবী বাক্যাংশটিকে বলেন তাওকীফ ওয়া তাওকীদ, অর্থাৎ বিষয়টার দিকে ইঙ্গিত করা আর তাকে জোরালো করা। রোজকার ভাষা থেকে একটা তুলনাও দেন, যেমন কাউকে বলা হয়: তুমি পুরুষ হলে তোমার এই কাজটা করা উচিত। শর্তটা শ্রোতার ঈমানে সন্দেহ করছে না, তাকে ডেকে জাগাচ্ছে।"
          },
          {
            "en": "As-Sa'di draws the general lesson in a single line. The verse shows, he says, that sincere faith prevents its holder from venturing upon what is forbidden. It is a restraint that acts on the tongue before the words leave it. If the slander could pass through a believing mouth a second time without a pause, then something in that faith was not doing the work faith is meant to do.",
            "bn": "সা'দী সাধারণ শিক্ষাটা এক লাইনে বলে দেন। তাঁর কথায়, আয়াতটি দেখায় যে খাঁটি ঈমান তার ধারককে হারামের দিকে পা বাড়াতে দেয় না। ঈমান তাঁর কাছে এক বাঁধন, যা কথা বেরোনোর আগেই জিহ্বার উপর কাজ করে। কোনো মুমিনের মুখ দিয়ে সেই অপবাদ যদি দ্বিতীয়বার বিনা দ্বিধায় বেরিয়ে যেতে পারে, তবে সেই ঈমানের ভেতরে কিছু একটা তার কাজ করছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Heart, Tongue, Then Time",
          "bn": "মন, জিহ্বা, তারপর সময়"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the abridged English of his comment on 24:16 to 24:18, heads the passage Further Discipline. It comes, he says, in addition to the command to think well of people: if something unbefitting is mentioned about good people, the believer should think well of them and feel towards them nothing but good. On glory be to You in 24:16 he adds, glory be to Allah that such a thing should be said about the wife of His Prophet and close Friend. Then comes this verse, which he reads as Allah forbidding and warning you against doing anything like this again.",
            "bn": "ইবন কাসীরের তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে ২৪:১৬ থেকে ২৪:১৮ আয়াতের আলোচনার শিরোনাম: আরও শিষ্টাচার। তিনি বলেন, মানুষ সম্পর্কে ভালো ধারণা রাখার আদেশের পর এ হলো বাড়তি শিক্ষা। ভালো মানুষদের ব্যাপারে অনুচিত কিছু বলা হলে তাদের সম্পর্কে ভালো ধারণাই রাখতে হবে, মনে তাদের প্রতি ভালো ছাড়া আর কিছু রাখা যাবে না। ২৪:১৬ আয়াতের সুবহানাকা কথাটির ব্যাখ্যায় তিনি যোগ করেন: আল্লাহ পবিত্র, তাঁর নবী ও অন্তরঙ্গ বন্ধুর স্ত্রী সম্পর্কে এমন কথা বলা হবে, তা থেকে। তারপর আসে এই আয়াত। তাঁর পাঠে, আল্লাহ তোমাদের নিষেধ করছেন এবং সতর্ক করছেন, যেন এমন কিছু আর কখনো না করো।"
          },
          {
            "en": "Read in that order, the verses teach in steps. First the heart: think well (24:12). Then the tongue: it is not for us to speak of this (24:16). Then time itself: never return to the like of it. Al-Qurtubi's opening words on the verse point the same way. Allah admonished them, he says, about returning to the like of this hala, this state. The word is wider than a single sentence; it names the condition the listeners had fallen into. The Muyassar closes the condition briefly: if you are believers in Him.",
            "bn": "এই ক্রমে পড়লে আয়াতগুলো ধাপে ধাপে শেখায়। প্রথমে মন: ভালো ধারণা করো (২৪:১২)। তারপর জিহ্বা: এ নিয়ে কথা বলা আমাদের কাজ নয় (২৪:১৬)। তারপর সময় নিজেই: এর মতো কিছুতে আর কখনো ফিরে যেয়ো না। আয়াতটি নিয়ে কুরতুবীর প্রথম কথাও একই দিকে ইঙ্গিত করে। তিনি বলেন, আল্লাহ তাদের উপদেশ দিলেন এমন হালে, অর্থাৎ এমন অবস্থায় আর ফিরে না যেতে। শব্দটা একটা বাক্যের চেয়ে বড়। শ্রোতারা যে অবস্থায় পড়ে গিয়েছিল, সেটারই নাম এটা। মুয়াসসার শর্তটা শেষ করে অল্প কথায়: যদি তোমরা তাঁর উপর ঈমান রাখো।"
          }
        ]
      },
      {
        "h": {
          "en": "Before a Thought Becomes Speech",
          "bn": "ভাবনা কথা হয়ে ওঠার আগে"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to 24:17 itself. Ibn Kathir, commenting on the group 24:16 to 24:18, cites one on the clause before it. If an unsuitable thought about good people is put into the mind by Shaytan, he says, one should not speak of it. Al-Bukhari's wording (5269), from Abu Hurayra (RA): Allah has forgiven my followers the evil thoughts that occur to their minds, as long as such thoughts are not put into action or uttered.",
            "bn": "এই আয়াতের জন্য যে তাফসীরগুলো আনা হয়েছে, তার কোনোটিই ২৪:১৭ আয়াতের সঙ্গে সরাসরি কোনো হাদীস জোড়ে না। ইবন কাসীর ২৪:১৬ থেকে ২৪:১৮ আয়াতের দলটির আলোচনায় একটি হাদীস আনেন আগের আয়াতের বাক্যাংশে। তিনি বলেন, ভালো মানুষদের ব্যাপারে শয়তান যদি মনে কোনো অনুচিত ভাবনা ঢুকিয়ে দেয়, তা নিয়ে মুখ খোলা উচিত নয়। আবূ হুরায়রা (রাঃ)-এর সূত্রে বুখারীর ভাষ্য (৫২৬৯): আল্লাহ আমার উম্মতের মনে আসা মন্দ ভাবনাগুলো ক্ষমা করে দিয়েছেন, যতক্ষণ না সেগুলো কাজে পরিণত করা হয় বা মুখে উচ্চারণ করা হয়।"
          },
          {
            "en": "Al-Bukhari gives the report in his Sahih, and Ibn Kathir notes that it is in both Sahihs. The narration is general and is not tied to this verse, but it draws the line the verse depends on. A passing thought is not yet the deed. The deed begins when the thought is spoken, or acted upon. Returning to the like of it, then, does not start with a suspicion that crosses the mind. It starts the moment that suspicion is allowed onto the tongue.",
            "bn": "বুখারী বর্ণনাটি তাঁর সহীহ গ্রন্থে এনেছেন, আর ইবন কাসীর উল্লেখ করেন যে এটি দুই সহীহতেই আছে। বর্ণনাটি সাধারণ, এই আয়াতের সঙ্গে বাঁধা নয়। তবু আয়াতটি যে রেখার উপর দাঁড়িয়ে, সেটা এ হাদীস টেনে দেয়। মনে আসা ভাবনা এখনো কাজ নয়। কাজ শুরু হয় যখন ভাবনাটা মুখে আসে, কিংবা তার উপর আমল হয়। তাই এর মতো কিছুতে ফিরে যাওয়া শুরু হয় না মনে উঁকি দেওয়া কোনো সন্দেহ দিয়ে। শুরু হয় ঠিক তখন, যখন সেই সন্দেহকে জিহ্বায় উঠতে দেওয়া হয়।"
          },
          {
            "en": "Ma'arif al-Qur'an, in its comment on the same group, explains why the slanderers' words could be called a lie without further proof. It first states the doubt: if a report cannot be verified as true without proof, why may it be called a lie without proof? It is the integral spirit of Islam, it says, to consider every Muslim free from sin; anything contrary to this, put forward without proof, is a lie, and no further proof is needed to call it one. A believer's name begins clean, and the burden lies on the tongue that would stain it.",
            "bn": "মাআরিফুল কুরআন একই দলের আলোচনায় ব্যাখ্যা করে, কেন অপবাদকারীদের কথাকে বাড়তি কোনো প্রমাণ ছাড়াই মিথ্যা বলা যায়। প্রথমে সে সংশয়টা তোলে: প্রমাণ ছাড়া যদি কোনো খবরকে সত্য বলে যাচাই করা না যায়, তবে প্রমাণ ছাড়া তাকে মিথ্যা বলা যাবে কেন? জবাবে তার ভাষায়, প্রত্যেক মুসলিমকে গুনাহ থেকে মুক্ত ধরে নেওয়াই ইসলামের মূল চেতনা। প্রমাণ ছাড়া এর বিপরীত কিছু হাজির করা হলে সেটা মিথ্যা, আর একে মিথ্যা বলতে আর কোনো প্রমাণ লাগে না। মুমিনের নাম শুরু হয় নির্মল অবস্থায়, আর দায়টা বর্তায় সেই জিহ্বার উপর, যা তাতে দাগ লাগাতে চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Cleared and Closed for Good",
          "bn": "নির্দোষ ঘোষিত, চিরতরে বন্ধ"
        },
        "p": [
          {
            "en": "The next verse completes the thought: and Allah makes the verses clear to you, and Allah is Knowing, Wise (24:18). Ibn Kathir reads it as Allah making plain the rulings of His law and His decrees, knowing what is right for His servants and wise in what He lays down. After this, no one who heard the counsel can plead that the line was drawn unclearly.",
            "bn": "পরের আয়াত কথাটা পূর্ণ করে: আর আল্লাহ তোমাদের জন্য আয়াতগুলো স্পষ্ট করে বর্ণনা করেন, আর আল্লাহ সর্বজ্ঞ, প্রজ্ঞাময় (২৪:১৮)। ইবন কাসীরের পাঠে এর অর্থ, আল্লাহ তাঁর শরীয়তের বিধান ও তাঁর ফয়সালাগুলো খুলে বলেন। বান্দাদের জন্য কী ঠিক তা তিনি জানেন, আর যা নির্ধারণ করেন তাতে তিনি প্রজ্ঞাময়। এরপর যে এই নসিহত শুনেছে, সে আর দাবি করতে পারে না যে সীমারেখাটা অস্পষ্ট ছিল।"
          },
          {
            "en": "These verses describe what was said in that one affair and the verdict Allah gave on it: ʿĀʾishah (RA) stands cleared by Allah Himself. They license nothing against any living person or community, and this verse names no one, so neither does this page. What it asks of the reader is smaller and harder: that the next unproven story about a believer should end where it arrives.",
            "bn": "এই আয়াতগুলো বর্ণনা করে সেই একটি ঘটনায় কী বলা হয়েছিল, আর তার উপর আল্লাহ কী রায় দিয়েছেন: আয়েশা (রাঃ)-কে আল্লাহ নিজেই নির্দোষ ঘোষণা করেছেন। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো কিছুর অনুমতি দেয় না। এ আয়াত কারও নাম নেয় না, তাই এ লেখাও নেয় না। পাঠকের কাছে আয়াতটির চাওয়া ছোট, কিন্তু কঠিন: কোনো মুমিনের ব্যাপারে পরের অপ্রমাণিত কাহিনিটা যেন যেখানে এসে পৌঁছায়, সেখানেই শেষ হয়।"
          }
        ]
      }
    ]
  },
  "24:19": {
    "sections": [
      {
        "h": {
          "en": "The Third Discipline",
          "bn": "তৃতীয় আদব"
        },
        "p": [
          {
            "en": "The verse sits in a run of corrections to believers who heard a false charge. 24:12 asked why they had not thought well of each other; 24:15 described a report caught on the tongue and passed on without knowledge; 24:17 warned them never to return to the like of it. Ibn Kathir calls 24:19 the third disciplining (ta'dib) in the series, aimed at whoever heard evil talk, let some of it settle in his mind and spoke of it: he is not to multiply it, spread it or broadcast it.",
            "bn": "আয়াতটি এসেছে একের পর এক সংশোধনের মাঝখানে। সম্বোধন সেই মুমিনদের প্রতি, যারা এক মিথ্যা অভিযোগ শুনেছিল। ২৪:১২ আয়াত জিজ্ঞেস করেছে, তারা পরস্পরের ব্যাপারে ভালো ধারণা করল না কেন। ২৪:১৫ আয়াত দেখিয়েছে, খবরটা জিভে জিভে লুফে নিয়ে না জেনেই সামনে চালান করা হয়েছিল। ২৪:১৭ আয়াত সতর্ক করেছে, আর কখনো যেন এমন না হয়। ইবন কাসীর ২৪:১৯ আয়াতকে বলেন এ ধারার তৃতীয় আদব-শিক্ষা (তা'দীব)। লক্ষ্য সেই ব্যক্তি, যে মন্দ কথা শুনেছে, তার কিছুটা মনে বসে গেছে, আর সে তা মুখেও এনেছে। সে যেন কথাটা আর না বাড়ায়, না ছড়ায়, না প্রচার করে।"
          },
          {
            "en": "So the verse adds no account of what was said; 24:11 to 24:16 have given that. Its subject is what a community does with a report once it holds it. Ma'arif al-Qur'an reads it so: those who had any part in the slander are condemned again, with an added element, that people who propagate such rumours actually want obscenity to spread among the Muslims. The thread then runs through 24:20's reminder of Allah's favour to 24:21's warning against the footsteps of Satan, who commands indecency.",
            "bn": "অর্থাৎ কী বলা হয়েছিল, তার নতুন কোনো বিবরণ এখানে নেই। সে বিবরণ ২৪:১১ থেকে ২৪:১৬ আয়াত আগেই দিয়েছে। এ আয়াতের বিষয় হলো, কোনো খবর হাতে এলে সমাজ তা নিয়ে কী করে। মাআরিফুল কুরআন আয়াতটি এভাবেই পড়ে: অপবাদে যারা কোনোভাবে শরিক ছিল, এখানে আবার তাদের নিন্দা করা হয়েছে। নতুন যা যোগ হয়েছে তা হলো, এমন গুজব যারা ছড়ায় তারা আসলে চায় মুসলিমদের মধ্যে অশ্লীলতা ছড়িয়ে পড়ুক। এরপর ধারাটা ২৪:২০ আয়াতে আল্লাহর অনুগ্রহের কথা মনে করিয়ে ২৪:২১ আয়াতে পৌঁছায়, যেখানে সতর্কবাণী শয়তানের পদাঙ্ক নিয়ে, যে অশ্লীলতার আদেশ দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "To Surface and Scatter",
          "bn": "প্রকাশ পাওয়া, ছড়িয়ে পড়া"
        },
        "p": [
          {
            "en": "An tashi'a al-fahishah: that the indecency should spread. Al-Qurtubi glosses tashi'a as tafshu, to become widespread, and lists verbal nouns of the root sh-y-', all meaning that a thing appeared and dispersed. Mujahid, in at-Tabari, says it means tazhar, that it surface. At-Tabari's own paraphrase uses a third verb: those who love that zina be broadcast (yadhi'a) among those who believed in Allah and His Messenger. The picture is of something hidden that comes out and then travels.",
            "bn": "আন তাশীআল ফাহিশাহ: অশ্লীলতা যেন ছড়িয়ে পড়ে। কুরতুবী তাশীআর অর্থ করেন তাফশূ, অর্থাৎ ব্যাপক হয়ে যাওয়া। শীন-ইয়া-আইন ধাতুর কয়েকটি ক্রিয়াবিশেষ্যও তিনি উল্লেখ করেন, সবগুলোর অর্থ একই: জিনিসটা প্রকাশ পেল এবং চারদিকে ছড়িয়ে গেল। তাবারীতে মুজাহিদ বলেন, তাশীআ মানে তাযহার, প্রকাশ পাওয়া। তাবারীর নিজের ব্যাখ্যায় আসে তৃতীয় আরেকটি ক্রিয়া: যারা চায় আল্লাহ ও তাঁর রাসূলের উপর ঈমান আনা মানুষদের মধ্যে যিনার কথা রটে যাক (ইয়াযীআ)। ছবিটা এমন: যা ঢাকা ছিল তা বেরিয়ে আসে, তারপর মুখে মুখে ঘুরতে থাকে।"
          },
          {
            "en": "What is the indecency? Al-Qurtubi gives two readings: the foul deed whose foulness passes all bounds, and, introduced with 'it is said', the evil word. Al-Muyassar joins them: an accusation of zina, or any evil speech. As-Sa'di keeps it wide, as matters shameful, repugnant and grave. Ibn Kathir explains the whole clause through speech: they prefer that ugly talk about the believers should come out into the open. Each reading places the harm in what is said about people.",
            "bn": "ফাহিশা বা অশ্লীলতা বলতে কী বোঝায়? কুরতুবী দুটি ব্যাখ্যা দেন। প্রথমটিতে ফাহিশা হলো এমন কুৎসিত কাজ, যার কদর্যতা সব সীমা ছাড়িয়ে যায়। দ্বিতীয়টি তিনি আনেন 'বলা হয়' বলে: এখানে ফাহিশা মানে মন্দ কথা। মুয়াসসার দুটোকে এক করে: যিনার অপবাদ, কিংবা যেকোনো মন্দ কথা। সা'দী অর্থটা প্রশস্ত রাখেন: জঘন্য, ঘৃণ্য ও গুরুতর বিষয়। ইবন কাসীর পুরো বাক্যটি কথার দিক থেকেই ব্যাখ্যা করেন: তারা পছন্দ করে মুমিনদের সম্পর্কে কুৎসিত কথা প্রকাশ্যে চলে আসুক। প্রতিটি ব্যাখ্যাতেই ক্ষতির জায়গা হলো মানুষের সম্পর্কে যা বলা হয়।"
          },
          {
            "en": "As-Sa'di adds a clause that matters for anyone who believes a report to be true. The threat holds, he says, whether the indecency had actually been committed or not (sawa'un kanat al-fahishah sadiratan aw ghayra sadiratin). On his reading the sin lies in wanting a believer's shame to become known, and the truth of the report does not lift it. The passage concerns a lie; as-Sa'di carries its reasoning to a real fault that someone wishes published.",
            "bn": "যারা কোনো খবরকে সত্য বলে মনে করে, তাদের জন্য সা'দী একটি গুরুত্বপূর্ণ কথা যোগ করেন। তাঁর মতে হুমকিটা বহাল থাকে, অশ্লীল কাজটা আসলেই ঘটে থাকুক বা না ঘটুক (সাওয়াউন কানাতিল ফাহিশাতু সাদিরাতান আও গাইরা সাদিরাহ)। তাঁর পাঠে গুনাহটা হলো কোনো মুমিনের লজ্জা মানুষ জেনে যাক, এই চাওয়া। খবরটা সত্য হলেও সে গুনাহ মাফ হয়ে যায় না। আলোচ্য অংশটি অবশ্য এক মিথ্যা অপবাদ নিয়ে। সা'দী আয়াতের যুক্তিকে নিয়ে যান সেই ক্ষেত্রে, যেখানে দোষটা সত্যিকারের, তবু কেউ চায় তা ফাঁস হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Words First Meant",
          "bn": "প্রথমে কারা উদ্দেশ্য ছিল"
        },
        "p": [
          {
            "en": "The commentators agree on the setting and differ only in naming the people. Mujahid, in at-Tabari, says the spreading meant was talk about the matter of A'ishah (RA). Ibn Zayd, also in at-Tabari, names Abdullah ibn Ubayy ibn Salul, as the hypocrite who spread the fabrication. Al-Baghawi says the verse means Ibn Ubayy and his companions among the hypocrites, and Tanwir al-Miqbas, the commentary ascribed to Ibn Abbas, says much the same. Al-Jalalayn says those meant are the band (al-'usbah) of 24:11.",
            "bn": "প্রেক্ষাপট নিয়ে তাফসীরকারদের মধ্যে মতভেদ নেই। ভিন্নতা শুধু মানুষগুলোর নাম বলায়। তাবারীতে মুজাহিদ বলেন, যে ছড়ানোর কথা বলা হয়েছে তা আয়েশা (রাঃ)-এর বিষয়ে কথাবার্তা। তাবারীতেই ইবন যায়দ নাম নেন আবদুল্লাহ ইবন উবাই ইবন সালুলের। তাঁর ভাষায়, এই মুনাফিকই আয়েশা (রাঃ)-এর বিরুদ্ধে মিথ্যা রটনা ছড়িয়েছিল। বাগাভী বলেন, আয়াতের উদ্দেশ্য ইবন উবাই ও তার মুনাফিক সঙ্গীরা। ইবন আব্বাসের নামে প্রচলিত তাফসীর তানবীরুল মিকবাসও প্রায় একই কথা বলে। জালালাইন বলে, এখানে উদ্দেশ্য ২৪:১১ আয়াতে উল্লিখিত সেই দল (আল-উসবা)।"
          },
          {
            "en": "Al-Qurtubi makes a remark on the wording. 'Among those who believe', he says, means the chaste men and women, and what is meant by this general expression is A'ishah and Safwan (RA). Yet the verse names no one; it speaks of 'those who believe' and 'those who love'. Maududi draws the consequence: the direct sense concerns those who cast aspersions, but the words take in every form of propagating indecency.",
            "bn": "শব্দচয়ন নিয়ে কুরতুবী একটি মন্তব্য করেন। তাঁর মতে 'যারা ঈমান এনেছে তাদের মধ্যে' মানে সচ্চরিত্র নারী-পুরুষ, আর এই ব্যাপক শব্দ দিয়ে বোঝানো হয়েছে আয়েশা ও সাফওয়ান (রাঃ)-কে। তবু আয়াত কারও নাম নেয় না। বলে শুধু 'যারা ঈমান এনেছে' আর 'যারা পছন্দ করে'। মওদূদী এখান থেকে সিদ্ধান্ত টানেন। সরাসরি অর্থে কথাটা যারা অপবাদ দেয় তাদের নিয়ে। তবে শব্দগুলো অশ্লীলতা ছড়ানোর সব পথকেই শামিল করে।"
          },
          {
            "en": "Because the verse names its targets only by what they loved and did, it is easy to point it outward, and that would misread it. It describes what the passage describes, people who wanted a lie about believers to spread, and it licenses nothing against any living person or community. Its threat is addressed to a disposition, and the first place to look for that disposition is in oneself.",
            "bn": "আয়াত তার লক্ষ্যদের চিনিয়েছে শুধু তাদের চাওয়া আর কাজ দিয়ে। তাই একে অন্যের দিকে তাক করা সহজ, আর তা হবে ভুল পাঠ। পুরো অংশটি যা বর্ণনা করে, আয়াতও তা-ই বর্ণনা করে: কিছু মানুষ চেয়েছিল মুমিনদের সম্পর্কে এক মিথ্যা ছড়িয়ে পড়ুক। কোনো জীবিত ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। হুমকিটা একটি মনোভাবের বিরুদ্ধে। সে মনোভাব খুঁজতে হবে প্রথমে নিজের ভেতরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Threat Aimed at the Heart",
          "bn": "হুমকিটা অন্তরের দিকে"
        },
        "p": [
          {
            "en": "The verb is yuhibbuna, they love. The verse does not say 'those who spread' but 'those who love that it should spread', and as-Sa'di presses the point. If this threat falls on the mere love that indecency should spread, and on relishing it in the heart (istihla' dhalika bi-l-qalb), he asks, what then of the greater wrong, making it public and passing it on? He grounds the punishment in three faults: deceit towards Muslim brothers, loving evil for them, and boldness against their honour.",
            "bn": "ক্রিয়াটি ইউহিব্বূনা, তারা ভালোবাসে বা পছন্দ করে। আয়াত বলেনি 'যারা ছড়ায়'। বলেছে 'যারা পছন্দ করে যে তা ছড়িয়ে পড়ুক'। সা'দী এ জায়গাটাতেই জোর দেন। শুধু অশ্লীলতা ছড়িয়ে পড়ার চাওয়া আর অন্তরে তার স্বাদ নেওয়ার (ইসতিহলাউ যালিকা বিল কালব) উপরই যদি এমন হুমকি থাকে, তবে এর চেয়ে বড় কাজের কী হবে, অর্থাৎ তা প্রকাশ করা আর অন্যের কাছে পৌঁছে দেওয়ার? শাস্তির কারণ হিসেবে তিনি তিনটি দোষ চিহ্নিত করেন: মুসলিম ভাইদের সঙ্গে প্রতারণা, তাদের জন্য মন্দ কামনা, আর তাদের মান-সম্মানের উপর আঘাত হানার দুঃসাহস।"
          },
          {
            "en": "Other commentators read the love through the speech it produces. Ibn Kathir frames the verse as discipline for whoever heard evil talk and spoke of it, glossing the love as preferring (yakhtaruna) that ugly talk appear. Ma'arif al-Qur'an makes the love the motive behind the propagating, and al-Jalalayn adds 'by the tongue' to the spreading. The texts read here do not set this out as a dispute; they differ in where the weight falls, as-Sa'di on the heart itself, the others on the heart as it shows in the tongue.",
            "bn": "অন্য তাফসীরকারেরা এই পছন্দকে দেখেন তার থেকে জন্ম নেওয়া কথার ভেতর দিয়ে। ইবন কাসীর আয়াতটিকে সাজান এমন লোকের আদব-শিক্ষা হিসেবে, যে মন্দ কথা শুনে তা মুখে এনেছে। আর 'পছন্দ করে'-র ব্যাখ্যা দেন 'বেছে নেয়' (ইয়াখতারূনা) দিয়ে: তারা চায় কুৎসিত কথা প্রকাশ পাক। মাআরিফুল কুরআনের কাছে এই পছন্দই প্রচারের পেছনের তাগিদ। জালালাইন ছড়ানোর সঙ্গে যোগ করে 'জিভ দিয়ে'। এখানে পড়া লেখাগুলো একে বিতর্ক হিসেবে দাঁড় করায় না। পার্থক্য শুধু জোরের জায়গায়। সা'দীর জোর অন্তরের উপর, অন্যদের জোর জিভে প্রকাশ পাওয়া অন্তরের উপর।"
          },
          {
            "en": "As-Sa'di closes with the opposite of that love. All of this, he says, is from Allah's mercy to His believing servants, guarding their honour as He guarded their blood and wealth. He commanded them what mutual sincerity requires: that each love for his brother what he loves for himself, and dislike for him what he dislikes for himself. Read so, the verse diagnoses a love turned backwards, wishing on a brother the exposure a man dreads for himself.",
            "bn": "সা'দী শেষ করেন এই পছন্দের বিপরীত কথাটা দিয়ে। তাঁর মতে এ সবই মুমিন বান্দাদের প্রতি আল্লাহর রহমত। তিনি যেমন তাদের জান ও মাল হেফাজত করেছেন, তেমনি হেফাজত করেছেন তাদের মান-সম্মানও। আর পরস্পরের প্রতি আন্তরিকতা যা দাবি করে, তারই আদেশ দিয়েছেন: প্রত্যেকে তার ভাইয়ের জন্য তা-ই পছন্দ করবে যা নিজের জন্য করে, আর তা-ই অপছন্দ করবে যা নিজের জন্য অপছন্দ করে। এভাবে পড়লে আয়াতটি এক উল্টোমুখী ভালোবাসার দোষ ধরিয়ে দেয়। যে লজ্জার ভয় মানুষ নিজের বেলায় করে, ভাইয়ের বেলায় সেটাই সে কামনা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pain in Both Worlds",
          "bn": "দুই জগতের যন্ত্রণা"
        },
        "p": [
          {
            "en": "Lahum 'adhabun alimun fi-d-dunya wa-l-akhirah: theirs is a painful punishment in this world and the Hereafter. Most of the commentators read here name the worldly part as the hadd. Ibn Kathir, al-Baghawi and al-Qurtubi say simply that it is the hadd. At-Tabari specifies the hadd Allah set for whoever accuses chaste women and chaste men of zina, and al-Jalalayn calls it the prescribed punishment for false accusation. As-Sa'di describes the pain as reaching both heart and body.",
            "bn": "লাহুম আযাবুন আলীমুন ফিদ দুনইয়া ওয়াল আখিরাহ: তাদের জন্য আছে দুনিয়া ও আখিরাতে যন্ত্রণাদায়ক শাস্তি। এখানে পড়া তাফসীরকারদের বেশিরভাগ দুনিয়ার শাস্তি বলতে হদ্দ বোঝান। ইবন কাসীর, বাগাভী ও কুরতুবী সংক্ষেপে বলেন, এটা হদ্দ। তাবারী স্পষ্ট করে বলেন, সেই হদ্দ যা আল্লাহ নির্ধারণ করেছেন সচ্চরিত্র নারী ও পুরুষের বিরুদ্ধে যিনার অপবাদ দেওয়া লোকের জন্য। জালালাইন একে বলে মিথ্যা অপবাদের নির্ধারিত শাস্তি। সা'দী বলেন, এ যন্ত্রণা পৌঁছায় অন্তর ও দেহ দুটোতেই।"
          },
          {
            "en": "Al-Muyassar widens the worldly part: the hadd, and other worldly afflictions besides (wa ghayruhu mina-l-balaya ad-dunyawiyyah). Ma'arif al-Qur'an takes up the case the hadd cannot reach. Whoever escaped it because the proof it requires was lacking has still earned the punishment, which will then be carried out in the Hereafter. This article reports these readings and draws no legal ruling from them; the hadd belongs to a court, not to a reader.",
            "bn": "মুয়াসসার দুনিয়ার শাস্তির পরিধি বাড়িয়ে দেয়: হদ্দ, আর সেই সঙ্গে দুনিয়ার অন্যান্য বিপদাপদ (ওয়া গাইরুহু মিনাল বালায়াদ দুনইয়াবিয়্যাহ)। মাআরিফুল কুরআন এমন ক্ষেত্রের কথা তোলে, যেখানে হদ্দ পৌঁছায় না। প্রয়োজনীয় প্রমাণ না থাকায় যে হদ্দ থেকে বেঁচে গেছে, শাস্তিটা সেও অর্জন করেছে। তখন তা কার্যকর হবে আখিরাতে। এ লেখা শুধু এই ব্যাখ্যাগুলো তুলে ধরে, এখান থেকে কোনো ফিকহি বিধান বের করে না। হদ্দ আদালতের বিষয়, পাঠকের হাতের বিষয় নয়।"
          },
          {
            "en": "On the Hereafter the commentators diverge. At-Tabari makes the punishment of Hell conditional: it is for whoever dies persisting in this, unrepentant (in mata musirran 'ala dhalika ghayra ta'ib), and al-Muyassar likewise says 'if they do not repent'. Al-Qurtubi restricts the Hereafter part to the hypocrites and calls the clause specific (makhsus), since he has shown that the hadd is an expiation (kaffarah) for believers; he then records at-Tabari's condition as a second account. Both readings stand.",
            "bn": "আখিরাতের শাস্তি নিয়ে তাফসীরকারদের পথ আলাদা হয়ে যায়। তাবারী জাহান্নামের শাস্তিকে শর্তযুক্ত করেন: তা সেই ব্যক্তির জন্য, যে এর উপর অটল থেকে তওবা না করেই মারা যায় (ইন মাতা মুসিররান আলা যালিকা গাইরা তাইব)। মুয়াসসারও বলে, 'যদি তারা তওবা না করে'। কুরতুবী অন্য পথে যান। তিনি আখিরাতের অংশটি মুনাফিকদের মধ্যে সীমিত রাখেন এবং বাক্যটিকে বলেন বিশেষায়িত (মাখসূস)। কারণ তাঁর ভাষায়, তিনি আগেই দেখিয়েছেন যে মুমিনদের জন্য হদ্দ হলো কাফফারা। এরপর তিনি দ্বিতীয় মত হিসেবে তাবারীর শর্তটিও উল্লেখ করেন। দুটি ব্যাখ্যাই এখানে পাশাপাশি থাকছে।"
          }
        ]
      },
      {
        "h": {
          "en": "He Knows, You Do Not",
          "bn": "তিনি জানেন, তোমরা জানো না"
        },
        "p": [
          {
            "en": "Wa-llahu ya'lamu wa-antum la ta'lamun: and Allah knows, and you do not know. For at-Tabari, Allah knows whether those who brought the slander lied or spoke the truth, and you do not, because you do not know the unseen. So do not relate, about the people of faith, what you have no knowledge of, least of all about the wives of the Messenger ﷺ, lest you perish. Al-Baghawi names what is known: their lie, the innocence of A'ishah (RA), and the displeasure of Allah into which they plunged.",
            "bn": "ওয়াল্লাহু ইয়া'লামু ওয়া আনতুম লা তা'লামূন: আল্লাহ জানেন, আর তোমরা জানো না। তাবারীর ব্যাখ্যায়, অপবাদ নিয়ে যারা এসেছিল তারা মিথ্যা বলেছে না সত্য, আল্লাহ তা জানেন। তোমরা জানো না, কারণ গায়েবের জ্ঞান তোমাদের নেই। তাই যে বিষয়ে তোমাদের জ্ঞান নেই, ঈমানদারদের সম্পর্কে তা বর্ণনা করো না, বিশেষ করে রাসূল ﷺ-এর স্ত্রীদের সম্পর্কে। নইলে ধ্বংস হয়ে যাবে। বাগাভী বলে দেন কী জানা আছে: তাদের মিথ্যা, আয়েশা (রাঃ)-এর নির্দোষিতা, আর তারা আল্লাহর যে অসন্তুষ্টিতে ডুবে গিয়েছিল তা।"
          },
          {
            "en": "Others take the clause wider. Al-Qurtubi says Allah knows how grave this sin is and what its recompense will be; al-Muyassar, that He alone knows the good of His servants and the outcomes of things. As-Sa'di makes it the reason for the teaching: because He knows and you do not, He taught you what you did not know. Ibn Kathir turns it into counsel: refer the matter to Him and you will be guided. Maududi applies it to society, where nobody sees how far a single act reaches.",
            "bn": "অন্যরা বাক্যটি আরও প্রশস্ত অর্থে নেন। কুরতুবী বলেন, এ গুনাহ কত বড় আর তার প্রতিফল কী হবে, তা আল্লাহ জানেন। মুয়াসসার বলে, বান্দাদের কল্যাণ আর সব বিষয়ের পরিণাম একমাত্র তিনিই জানেন। সা'দী একে দেখেন এই শিক্ষারই কারণ হিসেবে: তিনি জানেন আর তোমরা জানো না, তাই তিনি তোমাদের অজানা বিষয় শিখিয়েছেন। ইবন কাসীর একে উপদেশে পরিণত করেন: বিষয়টা তাঁর উপর ছেড়ে দাও, পথ পাবে। মওদূদী এটি প্রয়োগ করেন সমাজের উপর, যেখানে একটি কাজ কত দূর গড়ায় তা কেউ দেখতে পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Covering Rather Than Tracking",
          "bn": "খোঁজা নয়, ঢেকে রাখা"
        },
        "p": [
          {
            "en": "No commentator read here attaches a sound hadith to this verse. Two general narrations, not attached to it, state its ethic. Muslim records from Ibn Umar (RA) that the Messenger of Allah ﷺ said: 'A Muslim is the brother of a Muslim; he does not wrong him and does not abandon him. Whoever sees to his brother's need, Allah sees to his need. Whoever relieves a Muslim of a hardship, Allah relieves him by it of one of the hardships of the Day of Resurrection. And whoever covers a Muslim, Allah will cover him on the Day of Resurrection.' (Muslim 2580)",
            "bn": "এখানে পড়া কোনো তাফসীরকার এ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেননি। তবে দুটি সাধারণ বর্ণনা আছে, যা এ আয়াতের সঙ্গে যুক্ত নয়, কিন্তু একই নৈতিকতার কথা বলে। মুসলিম বর্ণনা করেন ইবন উমর (রাঃ) থেকে, রাসূলুল্লাহ ﷺ বলেছেন: 'মুসলিম মুসলিমের ভাই। সে তার উপর জুলুম করে না, তাকে শত্রুর হাতে ছেড়েও দেয় না। যে তার ভাইয়ের প্রয়োজন পূরণে থাকে, আল্লাহ তার প্রয়োজন পূরণে থাকেন। যে কোনো মুসলিমের একটি কষ্ট দূর করে, আল্লাহ এর বিনিময়ে কিয়ামতের দিনের কষ্টগুলোর একটি তার থেকে দূর করবেন। আর যে কোনো মুসলিমের দোষ ঢেকে রাখে, আল্লাহ কিয়ামতের দিন তার দোষ ঢেকে রাখবেন।' (মুসলিম ২৫৮০)"
          },
          {
            "en": "At-Tirmidhi records from Ibn Umar (RA) that the Messenger ﷺ climbed the minbar and called out in a raised voice: 'O you who have accepted Islam with the tongue while faith has not reached the heart! Do not harm the Muslims, do not shame them, and do not track down their private failings. For whoever tracks down his Muslim brother's failing, Allah will track down his, and whoever Allah tracks down, He exposes, even in the depths of his dwelling.' (Tirmidhi 2032)",
            "bn": "তিরমিযী ইবন উমর (রাঃ) থেকে বর্ণনা করেন, রাসূল ﷺ মিম্বরে উঠে উঁচু স্বরে ডেকে বললেন: 'হে সেই লোকেরা, যারা জিভে ইসলাম গ্রহণ করেছ অথচ ঈমান অন্তর পর্যন্ত পৌঁছায়নি! মুসলিমদের কষ্ট দিয়ো না, তাদের লজ্জা দিয়ো না, তাদের গোপন দোষের পেছনে লেগো না। কারণ যে তার মুসলিম ভাইয়ের গোপন দোষের পেছনে লাগে, আল্লাহ তার গোপন দোষের পেছনে লাগেন। আর আল্লাহ যার পেছনে লাগেন, তাকে লাঞ্ছিত করেন, সে নিজের ঘরের ভেতরে থাকলেও।' (তিরমিযী ২০৩২)"
          },
          {
            "en": "Nafi', the narrator, adds that Ibn Umar once looked at the Ka'bah and said: how great you are and how great your sanctity, yet the believer is greater in sanctity with Allah than you. At-Tirmidhi grades the hadith hasan gharib, known only through al-Husayn ibn Waqid, and notes a similar report from Abu Barzah al-Aslami, which Abu Dawud records (Abu Dawud 4880) with no grading of his own.",
            "bn": "বর্ণনাকারী নাফি যোগ করেন, একদিন ইবন উমর (রাঃ) কাবার দিকে তাকিয়ে বললেন: তুমি কত মহান, তোমার মর্যাদা কত বড়! তবু আল্লাহর কাছে মুমিনের মর্যাদা তোমার চেয়েও বড়। তিরমিযী হাদীসটিকে বলেন হাসান গরীব। তাঁর কথায়, আল-হুসাইন ইবন ওয়াকিদের সূত্র ছাড়া এটি জানা যায় না। তিনি আরও উল্লেখ করেন, আবু বারযা আল-আসলামী থেকেও এর কাছাকাছি বর্ণনা আছে। আবু দাউদ সে বর্ণনাটি এনেছেন (আবু দাউদ ৪৮৮০), নিজের কোনো মান-নির্ধারণ ছাড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Before It Leaves Your Hands",
          "bn": "হাত থেকে বেরোনোর আগে"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws from the verse what it calls the Qur'an's system for preventing indecency. In the first place such news should not spread. If it comes out at all, it must rest on lawful proof, so that the punishment is seen together with the news. Where there is neither proof nor punishment, it argues, publicity itself dulls people's revulsion at the deed. Its example is scandals printed daily in newspapers and read by the young, until the wickedness seems smaller and a slow inclination towards it grows.",
            "bn": "মাআরিফুল কুরআন এ আয়াত থেকে বের করে অশ্লীলতা প্রতিরোধে কুরআনের এক ব্যবস্থা। প্রথম কথা, এমন খবর ছড়ানোই উচিত নয়। আর যদি প্রকাশ পেয়েই যায়, তবে তার পেছনে থাকতে হবে শরীয়তসম্মত প্রমাণ, যাতে খবরের সঙ্গে শাস্তিটাও মানুষের চোখে পড়ে। তার যুক্তি, যেখানে প্রমাণও নেই, শাস্তিও নেই, সেখানে প্রচারটাই মানুষের মনে কাজটার প্রতি ঘৃণা ভোঁতা করে দেয়। উদাহরণ হিসেবে সে খবরের কাগজের কথা বলে। রোজ সেখানে কেলেঙ্কারি ছাপা হয়, তরুণ-তরুণীরা পড়ে। ধীরে ধীরে অপকর্মটা হালকা মনে হতে থাকে, আর মনে তার প্রতি এক চাপা ঝোঁক তৈরি হয়।"
          },
          {
            "en": "Ma'arif wrote of print; the point applies with more force where any phone can publish. A screenshot, a forwarded voice note, a post that only asks 'is this true?': each shows a believer's alleged fault to people who had no need to know of it. The verse asks the reader about his own part, and as-Sa'di's point comes first: am I pleased to have heard this? It is no warrant to accuse anyone else of loving indecency.",
            "bn": "মাআরিফের কথাটা ছাপা কাগজ নিয়ে। যেখানে যেকোনো ফোন থেকেই কিছু প্রকাশ করা যায়, সেখানে কথাটা আরও জোরালো। একটা স্ক্রিনশট, ফরোয়ার্ড করা একটা ভয়েস মেসেজ, কিংবা শুধু 'এটা কি সত্যি?' লেখা একটা পোস্ট। প্রতিটিই কোনো মুমিনের কথিত দোষ এমন মানুষের সামনে মেলে ধরে, যাদের তা জানার কোনো দরকার ছিল না। আয়াত পাঠককে প্রশ্ন করে তার নিজের ভূমিকা নিয়ে। আর সা'দীর কথাটাই আগে আসে: এটা শুনে কি আমার ভালো লেগেছে? অন্য কাউকে অশ্লীলতাপ্রেমী বলে অভিযুক্ত করার সনদ এ আয়াত নয়।"
          },
          {
            "en": "The practical rule follows the passage. Do not relate what you have no knowledge of, at-Tabari's lesson from the closing clause. Do not track down what is hidden, as at-Tirmidhi's narration forbids. Cover what you happen to see, as Muslim's narration promises. And read on into 24:20, which answers the threat with Allah's favour and mercy: the repentance that at-Tabari and al-Muyassar keep open is open also to whoever has already passed a story on.",
            "bn": "করণীয়টা এ অংশ থেকেই বেরিয়ে আসে। যে বিষয়ে জ্ঞান নেই, তা বর্ণনা করবেন না। শেষ বাক্য থেকে তাবারী এ শিক্ষাই টানেন। গোপন দোষের পেছনে লাগবেন না। তিরমিযীর বর্ণনা ঠিক এটাই নিষেধ করে। যা চোখে পড়ে যায়, তা ঢেকে রাখুন। মুসলিমের বর্ণনা এরই প্রতিদানের কথা বলে। আর পড়তে থাকুন ২৪:২০ আয়াত পর্যন্ত, যা এই হুমকির জবাব দেয় আল্লাহর অনুগ্রহ ও রহমত দিয়ে। তাবারী ও মুয়াসসার তওবার যে দরজা খোলা রাখেন, যে ইতিমধ্যে কোনো গল্প সামনে চালান করে দিয়েছে, তার জন্যও তা খোলা।"
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
          "bn": "অপবাদের ঝড় থামার পর"
        },
        "p": [
          {
            "en": "Wa la ya'tali ulu-l-fadli minkum wa-s-sa'ah: and let not those of bounty and means among you swear. The verse comes straight after the passage on the ifk, the slander against 'A'isha (RA), which opens at 24:11 with those who brought the lie, a band from among you. Ibn Kathir places its revelation after Allah had sent down her innocence, after the believers' hearts had settled, after Allah had accepted the repentance of the believers who had spoken of it, and after the prescribed punishment had been carried out on those it was carried out on.",
            "bn": "ওয়ালা ইয়া'তালি উলুল ফাদলি মিনকুম ওয়াস সা'আহ: তোমাদের মধ্যে যারা অনুগ্রহ ও সচ্ছলতার অধিকারী, তারা যেন শপথ না করে। আয়াতটি এসেছে ইফকের আলোচনার ঠিক পরে। ইফক হলো আয়েশা (রাঃ)-এর বিরুদ্ধে রটানো অপবাদ, যার শুরু ২৪:১১ আয়াতে: যারা এই মিথ্যা রটনা নিয়ে এসেছে, তারা তোমাদেরই একটি দল। ইবন কাসীর জানান, আয়াতটি নাযিল হয় সব মিটে যাওয়ার পর। আল্লাহ তখন তাঁর নির্দোষিতা নাযিল করেছেন, মুমিনদের মন শান্ত হয়েছে, যে মুমিনরা এ নিয়ে কথা বলেছিল আল্লাহ তাদের তওবা কবুল করেছেন, আর যাদের উপর হদ্দ কায়েম হওয়ার কথা ছিল, তাদের উপর তা কায়েম হয়ে গেছে।"
          },
          {
            "en": "By the account al-Qurtubi calls the best known, the verse concerns Abu Bakr (RA), 'A'isha's father. At-Tabari, al-Qurtubi, Ibn Kathir, al-Baghawi and as-Sa'di all report that he used to spend on Mistah ibn Uthatha (RA), a poor relative, and that he swore to stop after Mistah had taken part in the talk. Al-Qurtubi says the report is related in the Sahih; Ibn Kathir points back to the hadith he quoted earlier in the surah; Ma'arif al-Qur'an cites al-Bukhari and Muslim for Abu Bakr's answer.",
            "bn": "কুরতুবী যে বর্ণনাকে সবচেয়ে প্রসিদ্ধ বলেন, সে অনুযায়ী আয়াতটি আয়েশা (রাঃ)-এর পিতা আবু বকর (রাঃ)-কে নিয়ে। তাবারী, কুরতুবী, ইবন কাসীর, বাগাভী ও সা'দী সবাই বলেন, মিসতাহ ইবন উসাসা (রাঃ) ছিলেন তাঁর গরিব আত্মীয়, আর আবু বকর (রাঃ) তাঁর খরচ বহন করতেন। অপবাদের কথাবার্তায় মিসতাহ জড়িয়ে পড়ার পর তিনি কসম খেলেন, আর খরচ দেবেন না। কুরতুবী বলেন, ঘটনাটি সহীহ গ্রন্থে বর্ণিত। ইবন কাসীর সূরার আগের অংশে উদ্ধৃত হাদীসের দিকে ইঙ্গিত করেন। আর আবু বকর (রাঃ)-এর জবাবের জন্য মাআরিফুল কুরআন বুখারী ও মুসলিমের বরাত দেয়।"
          },
          {
            "en": "It is part of the long hadith of 'A'isha on the ifk in Sahih al-Bukhari (4750), a collection al-Bukhari compiled as sound. The relevant portion reads: \"Abu Bakr As-Siddiq who used to provide for Mistah bin Uthatha because of the latter's kinship to him and his poverty, said, 'By Allah, I will never provide for Mistah anything after what he has said about Aisha'. So Allah revealed\" this verse. \"Abu Bakr said, 'Yes, by Allah, I wish that Allah should forgive me.' So he resumed giving Mistah the aid he used to give him before and said, 'By Allah, I will never withhold it from him at all.'\"",
            "bn": "বর্ণনাটি সহীহ বুখারীতে (৪৭৫০) ইফক নিয়ে আয়েশা (রাঃ)-এর দীর্ঘ হাদীসের একটি অংশ। ইমাম বুখারী এ গ্রন্থ সাজিয়েছেন তাঁর বিচারে যা সহীহ, তা দিয়ে। সংশ্লিষ্ট অংশটি এরকম: আবু বকর সিদ্দীক (রাঃ) আত্মীয়তা ও দারিদ্র্যের কারণে মিসতাহ ইবন উসাসার খরচ দিতেন। তিনি বললেন, আল্লাহর কসম, আয়েশা সম্পর্কে সে যা বলেছে তার পর আমি মিসতাহর জন্য আর কখনো কিছুই খরচ করব না। তখন আল্লাহ এই আয়াত নাযিল করলেন। আবু বকর বললেন, অবশ্যই, আল্লাহর কসম, আমি চাই আল্লাহ আমাকে ক্ষমা করুন। এরপর তিনি মিসতাহকে আগের মতো খরচ দেওয়া আবার শুরু করলেন এবং বললেন, আল্লাহর কসম, আমি তা আর কখনো তার কাছ থেকে তুলে নেব না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Man or Several",
          "bn": "একজনের কসম, না অনেকের"
        },
        "p": [
          {
            "en": "The commentators do not all tell the occasion the same way. At-Tabari gives 'A'isha's own report, through Ibn Ishaq, in which Abu Bakr alone swears. He then gives two reports in which several swear: Ibn 'Abbas says that some of the Companions, Abu Bakr among them, swore not to give charity to any man who had spoken of the matter, nor to keep ties with him; ad-Dahhak says Abu Bakr and other Muslims swore it once her innocence came down. Al-Baghawi carries both versions.",
            "bn": "উপলক্ষটা সব তাফসীরকার একভাবে বলেন না। তাবারী ইবন ইসহাকের সূত্রে আয়েশা (রাঃ)-এর নিজের বর্ণনা আনেন, যেখানে কসম খেয়েছেন একা আবু বকর (রাঃ)। এরপর তিনি আরও দুটি বর্ণনা আনেন, যেখানে কসম খেয়েছিলেন একাধিক জন। ইবন আব্বাস বলেন, আবু বকরসহ কয়েকজন সাহাবী কসম খেয়েছিলেন, এ বিষয়ে যে-ই মুখ খুলেছে তাকে তাঁরা আর সদকা দেবেন না, তার সঙ্গে সম্পর্কও রাখবেন না। দাহহাক বলেন, আয়েশা (রাঃ)-এর নির্দোষিতা নাযিল হওয়ার পর আবু বকর ও আরও কিছু মুসলিম এই কসম খান। বাগাভী দুটো ভাষ্যই এনেছেন।"
          },
          {
            "en": "Mujahid, also in at-Tabari, tells it differently again: Abu Bakr swore not to benefit an orphan in his care who had spread the talk, and on hearing the verse said he would be better to that orphan than he had ever been. Al-Qurtubi weighs the accounts. The first, about Abu Bakr and Mistah, is sounder, he says; yet the verse reaches the community until the Day of Rising, so that no person of bounty and means, stung by anger, should swear to withhold benefit from such a person for good.",
            "bn": "তাবারীতেই মুজাহিদের বর্ণনা আবার ভিন্ন। তাঁর ভাষ্যে আবু বকর (রাঃ)-এর তত্ত্বাবধানে এক ইয়াতীম ছিল, যে কথাটা ছড়িয়েছিল। তিনি কসম খেয়েছিলেন, তার আর কোনো উপকার করবেন না। আয়াত শুনে বললেন, এখন থেকে ওই ইয়াতীমের জন্য আমি আগের যেকোনো সময়ের চেয়ে ভালো হব। কুরতুবী বর্ণনাগুলো মেপে দেখেন। তাঁর মতে প্রথমটি, অর্থাৎ আবু বকর ও মিসতাহর ঘটনা, বেশি বিশুদ্ধ। তবে আয়াতের বিধান কিয়ামত পর্যন্ত গোটা উম্মতের জন্য। অনুগ্রহ ও সচ্ছলতার অধিকারী কেউ যেন রাগের বশে এমন মানুষকে চিরদিনের জন্য উপকার না করার কসম না খায়।"
          }
        ]
      },
      {
        "h": {
          "en": "To Swear or to Fall Short",
          "bn": "কসম, নাকি কমতি করা"
        },
        "p": [
          {
            "en": "The opening verb raises a question of root. Ibn Kathir, at-Tabari, al-Baghawi, as-Sa'di and al-Muyassar all gloss la ya'tali as let him not swear, taking it from al-aliyya, an oath, and Ma'arif al-Qur'an says the word means to swear. Al-Qurtubi gives its pattern as yafta'il from aliyya and links it to 2:226, li-lladhina yu'luna min nisa'ihim, those who swear off their wives. At-Tabari also has Ibn 'Abbas explain the words as: do not swear an oath that you will not benefit anyone.",
            "bn": "প্রথম ক্রিয়াটি নিয়েই ধাতুর প্রশ্ন ওঠে। ইবন কাসীর, তাবারী, বাগাভী, সা'দী ও মুয়াসসার সবাই লা ইয়া'তালির অর্থ করেন: সে যেন কসম না খায়। তাঁদের মতে শব্দটি এসেছে আল-আলিয়্যা থেকে, যার মানে শপথ। মাআরিফুল কুরআনও বলে, শব্দটির অর্থ কসম খাওয়া। কুরতুবী এর গঠন বলেন আলিয়্যা থেকে ইয়াফতাইল, আর মিলিয়ে দেখান ২:২২৬ আয়াতের সঙ্গে: লিল্লাযীনা ইউ'লূনা মিন নিসাইহিম, যারা স্ত্রীদের কাছে না যাওয়ার কসম খায়। তাবারী ইবন আব্বাসের ব্যাখ্যাও আনেন: তোমরা কারও উপকার না করার কসম খেয়ো না।"
          },
          {
            "en": "Al-Qurtubi then records a second meaning. A group, he says, held that it means let him not fall short, from alawtu fi kadha, I fell short in such a thing, and he links this to 3:118, la ya'lunakum khabala, they will not fall short in ruining you. He names no holders of this view. He also reports az-Zajjaj supplying an unspoken la before an yu'tu, so the sense is swear that they will not give, while on Abu 'Ubayda's view no such la is needed. The two meanings stand side by side in his text.",
            "bn": "এরপর কুরতুবী দ্বিতীয় একটি অর্থ উল্লেখ করেন। তিনি বলেন, একদল আলেমের মতে এর মানে, সে যেন কমতি না করে। এটা এসেছে আলাওতু ফী কাযা থেকে, অর্থাৎ অমুক কাজে আমি কমতি করেছি। এর সঙ্গে তিনি মিলিয়ে দেখান ৩:১১৮ আয়াত: লা ইয়া'লূনাকুম খাবালা, তোমাদের সর্বনাশ করতে তারা কোনো কমতি করবে না। এই মতের ধারকদের নাম তিনি বলেননি। যাজ্জাজের মতও তিনি আনেন: আন ইউ'তূ-র আগে একটি না-বোধক লা ঊহ্য আছে, তাই অর্থ দাঁড়ায় দেবে না বলে কসম। আবার আবু উবায়দার মতে এমন কোনো লা ধরে নেওয়ার দরকার নেই। তাঁর লেখায় দুই অর্থই পাশাপাশি রয়ে গেছে।"
          },
          {
            "en": "There is also a variant recitation. At-Tabari says most reciters of the cities read wa la ya'tali, while Abu Ja'far and Zayd ibn Aslam are reported to have read wa la yata'alla, on the pattern yatafa'al from the same aliyya. Al-Baghawi names Abu Ja'far for it, with the ta' placed before the hamza. Both forms keep the oath meaning. At-Tabari prefers ya'tali, because it matches the script of the mushaf and the reading of the body of reciters, while the other reading departs from that script.",
            "bn": "এখানে কিরাআতের একটি ভিন্নতাও আছে। তাবারী বলেন, বিভিন্ন শহরের অধিকাংশ কারী পড়েছেন ওয়ালা ইয়া'তালি। তবে আবু জা'ফর ও যায়দ ইবন আসলাম সম্পর্কে বর্ণিত আছে, তাঁরা পড়তেন ওয়ালা ইয়াতাআল্লা, একই আলিয়্যা থেকে ইয়াতাফাআল গঠনে। বাগাভী এ কিরাআত আবু জা'ফরের নামে আনেন এবং বলেন, এতে তা অক্ষরটি হামযার আগে এসেছে। দুই রূপেই অর্থ কসম। তাবারী ইয়া'তালিকেই প্রাধান্য দেন। কারণ এটি মুসহাফের লিখনরীতির সঙ্গে মেলে আর অধিকাংশ কারী এভাবেই পড়েন, অন্যদিকে অপর কিরাআতটি সেই লিখনরীতি থেকে সরে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Relative, Needy, Emigrant",
          "bn": "আত্মীয়, অভাবী, মুহাজির"
        },
        "p": [
          {
            "en": "Ulu-l-fadli wa-s-sa'ah, those of fadl and means: the commentators gloss fadl differently. Ibn Kathir explains it as at-tawl, charity and kindness, and sa'ah as wealth; at-Tabari has those of generosity and means. Al-Muyassar reads the pair as virtue in religion and plenty in wealth. Ma'arif al-Qur'an speaks of those granted knowledge, excellence and the means to spend, and says the phrase was chosen because helping Mistah was no religious duty on Abu Bakr: people of such standing should take care not to swear an oath of this kind.",
            "bn": "উলুল ফাদলি ওয়াস সা'আহ: ফাদল ও সচ্ছলতার অধিকারীরা। ফাদল শব্দের ব্যাখ্যা তাফসীরকারেরা ভিন্ন ভিন্নভাবে দেন। ইবন কাসীরের মতে ফাদল মানে সামর্থ্য, সদকা ও সদাচরণ, আর সা'আহ মানে ধনসম্পদ। তাবারী বলেন, দানশীলতা ও সচ্ছলতার অধিকারী। মুয়াসসার জোড়াটিকে পড়ে দ্বীনের মর্যাদা আর সম্পদের প্রাচুর্য হিসেবে। মাআরিফুল কুরআন বলে, যাদের আল্লাহ জ্ঞান, মর্যাদা ও খরচ করার সামর্থ্য দিয়েছেন। তার ব্যাখ্যায় শব্দগুলো বেছে নেওয়ার কারণ, মিসতাহকে সাহায্য করা আবু বকর (রাঃ)-এর উপর দ্বীনি দায়িত্ব ছিল না। তবু এমন মর্যাদার মানুষদের এ ধরনের কসম থেকে সাবধান থাকা উচিত।"
          },
          {
            "en": "Then the three who are to receive: relatives, the needy, and the emigrants in the way of Allah. Ibn Zayd, in at-Tabari, matches each to Mistah: he was a relative, he was needy, and he had been at Badr. At-Tabari spells it out: Mistah was the son of Abu Bakr's maternal aunt, poor and in want, and among those who left Makkah for Madinah. Al-Baghawi and Ibn Kathir also call him the son of the maternal aunt; al-Qurtubi makes him the son of her daughter, and records that his name was said to be 'Awf, with Mistah a nickname.",
            "bn": "এরপর যে তিন শ্রেণিকে দিতে বলা হয়েছে: আত্মীয়, মিসকীন আর আল্লাহর পথে হিজরতকারী। তাবারীতে ইবন যায়দ তিনটিই মিসতাহর সঙ্গে মিলিয়ে দেন: তিনি আত্মীয় ছিলেন, অভাবী ছিলেন, আর বদরে অংশ নিয়েছিলেন। তাবারী খুলে বলেন, মিসতাহ ছিলেন আবু বকর (রাঃ)-এর খালার ছেলে, গরিব ও অভাবগ্রস্ত, আর মক্কা ছেড়ে মদীনায় হিজরতকারীদের একজন। বাগাভী ও ইবন কাসীরও তাঁকে খালার ছেলে বলেন। কুরতুবীর মতে তিনি খালার মেয়ের ছেলে। কুরতুবী আরও জানান, কারও কারও মতে তাঁর আসল নাম আওফ, আর মিসতাহ তাঁর উপাধি।"
          },
          {
            "en": "Al-Qurtubi draws a ruling from this naming. A false charge of unchastity is a major sin, yet it does not wipe out a person's deeds, because after what Mistah had said Allah still described him by emigration and faith. The same holds, he says, for the other major sins: nothing wipes out deeds except associating partners with Allah, and he cites 39:65, if you associate, your deeds will surely come to nothing. Ibn Kathir, for his part, says Mistah slipped once, that Allah accepted his repentance, and that the prescribed punishment was carried out.",
            "bn": "এই নামকরণ থেকে কুরতুবী একটি মাসআলা বের করেন। সতী নারীর উপর অপবাদ দেওয়া কবীরা গুনাহ। তবু তা মানুষের আমল নষ্ট করে দেয় না, কারণ মিসতাহ যা বলার বলার পরও আল্লাহ তাঁকে হিজরত ও ঈমানের গুণে উল্লেখ করেছেন। তাঁর মতে অন্য কবীরা গুনাহর বেলায়ও একই কথা। আল্লাহর সঙ্গে শিরক ছাড়া আর কিছু আমল বরবাদ করে না, আর এর দলিল হিসেবে তিনি আনেন ৩৯:৬৫ আয়াত: যদি তুমি শিরক কর, তোমার আমল অবশ্যই নিষ্ফল হয়ে যাবে। ইবন কাসীর বলেন, মিসতাহর একবার পদস্খলন হয়েছিল। আল্লাহ তাঁর তওবা কবুল করেছেন, আর তাঁর উপর হদ্দও কায়েম হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Pardon That Wears Away",
          "bn": "যে ক্ষমা দাগ মুছে দেয়"
        },
        "p": [
          {
            "en": "Wa-l-ya'fu wa-l-yasfahu: and let them pardon and overlook. At-Tabari takes the two verbs separately. Let them pardon the wrong that came from those people to them, such as Mistah's wrong against Abu Bakr in spreading the ifk about his daughter. And let them overlook: leave off punishing them for it by withholding what they used to give, and go back to the bounty they showed them before. For at-Tabari, then, the overlooking is completed only when the giving resumes.",
            "bn": "ওয়াল ইয়া'ফূ ওয়াল ইয়াসফাহূ: তারা যেন ক্ষমা করে এবং উপেক্ষা করে। তাবারী ক্রিয়া দুটির ব্যাখ্যা করেন আলাদা আলাদা। প্রথমটির মানে, ওই লোকদের দিক থেকে যে অন্যায় এসেছে তা মাফ করে দেওয়া, যেমন আবু বকর (রাঃ)-এর মেয়ের নামে ইফক ছড়িয়ে মিসতাহ তাঁর প্রতি যে অন্যায় করেছিলেন। দ্বিতীয়টির মানে, যা দিতেন তা বন্ধ রেখে তাদের শাস্তি দেওয়া ছেড়ে দেওয়া, আর আগে যে অনুগ্রহ করতেন সেখানে ফিরে যাওয়া। তাবারীর ব্যাখ্যায় তাই দেওয়া আবার শুরু হলেই উপেক্ষা পূর্ণ হয়।"
          },
          {
            "en": "Al-Qurtubi traces wa-l-ya'fu to 'afa ar-rab', said of a campsite whose traces have worn away: pardon is erasing the wrong until it fades as the marks of an old encampment fade. Ibn Kathir says the pardon covers the earlier offence and harm, and calls the command itself a sign of Allah's forbearance, generosity and gentleness toward His creatures, although they wrong themselves. Al-Muyassar ends on the hardest line: the verse urges pardon and overlooking even when they are met with ill-treatment.",
            "bn": "কুরতুবী ওয়াল ইয়া'ফূ শব্দের মূল খোঁজেন আফাল রাব' কথাটিতে, যা বলা হয় এমন বসতির ভিটা সম্পর্কে, যার চিহ্ন কালের ধুলায় মুছে গেছে। তাঁর মতে ক্ষমা মানে অন্যায়টাকে এমনভাবে মুছে ফেলা, যেভাবে পুরোনো ছাউনির দাগ মিলিয়ে যায়। ইবন কাসীর বলেন, এ ক্ষমা আগের সব দুর্ব্যবহার ও কষ্টের জন্য। আর এই আদেশকেই তিনি দেখেন আল্লাহর সহনশীলতা, দানশীলতা ও কোমলতার নিদর্শন হিসেবে, যদিও বান্দারা নিজেদের উপর জুলুম করে। মুয়াসসার শেষ করে সবচেয়ে কঠিন কথাটি দিয়ে: মন্দ ব্যবহারের জবাবেও আয়াতটি ক্ষমা ও উপেক্ষার প্রতি উৎসাহ দেয়।"
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
            "en": "A-la tuhibbuna an yaghfira-llahu lakum: would you not love that Allah forgive you? The commentators read it as a measure. Ibn Kathir: the recompense is of the same kind as the deed; as you forgive the one who wronged you, We forgive you, and as you overlook, We overlook you. As-Sa'di: if you treat His servants with pardon and overlooking, He treats you the same. Al-Muyassar: would you not love Allah to pass over your faults? Then pass over theirs. At-Tabari: would you not love Allah to cover your sins because of your bounty to them, and leave off punishing you for them?",
            "bn": "আলা তুহিব্বূনা আন ইয়াগফিরাল্লাহু লাকুম: তোমরা কি চাও না যে আল্লাহ তোমাদের ক্ষমা করুন? তাফসীরকারেরা প্রশ্নটিকে পড়েন একটি মাপকাঠি হিসেবে। ইবন কাসীর বলেন, প্রতিদান আমলের মতোই হয়। তুমি যেমন তোমার প্রতি অন্যায়কারীকে ক্ষমা করবে, আমিও তোমাকে ক্ষমা করব, তুমি যেমন উপেক্ষা করবে, আমিও তোমাকে উপেক্ষা করব। সা'দী বলেন, তোমরা তাঁর বান্দাদের সঙ্গে ক্ষমা ও উপেক্ষার আচরণ করলে তিনিও তোমাদের সঙ্গে তেমনই করবেন। মুয়াসসারের ভাষায়: তোমরা কি চাও না আল্লাহ তোমাদের ভুল উপেক্ষা করুন? তাহলে তোমরাও তাদের ভুল উপেক্ষা করো। আর তাবারী বলেন: তোমরা কি চাও না, তাদের প্রতি তোমাদের অনুগ্রহের কারণে আল্লাহ তোমাদের গুনাহ ঢেকে দিন এবং সেজন্য তোমাদের শাস্তি না দেন?"
          },
          {
            "en": "Al-Qurtubi calls the question tamthil wa hujja, a likeness and an argument: as you love Allah's pardon of your sins, so forgive those beneath you. He says the Prophet's ﷺ words look toward this meaning: whoever does not show mercy is not shown mercy. Al-Bukhari (5997) has the saying from Abu Hurayrah, spoken when al-Aqra' ibn Habis, seeing him kiss al-Hasan ibn 'Ali, said he had never kissed any of his ten children: \"Whoever is not merciful to others will not be treated mercifully.\" It is a general narration, not one attached to this verse. Al-Baghawi notes that the question addresses Abu Bakr.",
            "bn": "কুরতুবী প্রশ্নটিকে বলেন তামসীল ওয়া হুজ্জাহ, অর্থাৎ একই সঙ্গে উপমা ও যুক্তি। তোমরা যেমন চাও আল্লাহ তোমাদের গুনাহ মাফ করুন, তেমনি তোমাদের অধীনদের মাফ করে দাও। তাঁর মতে নবী ﷺ-এর একটি কথা এ অর্থের দিকেই ইঙ্গিত করে: যে দয়া করে না, তাকে দয়া করা হয় না। বুখারী (৫৯৯৭) কথাটি এনেছেন আবু হুরায়রা (রাঃ)-এর সূত্রে। নবী ﷺ হাসান ইবন আলীকে চুমু খেলে আকরা ইবন হাবিস বলেছিলেন, তাঁর দশটি সন্তান, কাউকে তিনি কখনো চুমু খাননি। তখন নবী ﷺ বললেন: যে অন্যের প্রতি দয়া করে না, তার প্রতিও দয়া করা হবে না। এটি একটি সাধারণ বর্ণনা, এ আয়াতের সঙ্গে যুক্ত নয়। বাগাভী জানান, প্রশ্নটি আবু বকর (রাঃ)-কে উদ্দেশ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Oath Worth Breaking",
          "bn": "যে কসম ভাঙাই উত্তম"
        },
        "p": [
          {
            "en": "The answer is reported in slightly different words. In at-Tabari's report from 'A'isha, Abu Bakr says: by Allah, I love that Allah forgive me; al-Bukhari's wording, quoted above, opens with yes. Ibn Kathir gives: of course, by Allah, we love, O our Lord, that You forgive us. Then he restored Mistah's maintenance and swore never to take it from him. Ibn Kathir sets the second oath against the first, never will I take it from him against never will I benefit him, and says this is why as-Siddiq was as-Siddiq.",
            "bn": "আবু বকর (রাঃ)-এর জবাব বর্ণনাভেদে সামান্য ভিন্ন শব্দে এসেছে। আয়েশা (রাঃ) থেকে তাবারীর বর্ণনায় তিনি বলেন: আল্লাহর কসম, আমি চাই আল্লাহ আমাকে ক্ষমা করুন। ওপরে উদ্ধৃত বুখারীর বর্ণনায় শুরুতে আছে, অবশ্যই। ইবন কাসীরের বর্ণনায়: অবশ্যই, আল্লাহর কসম, হে আমাদের রব, আমরা চাই তুমি আমাদের ক্ষমা করো। এরপর তিনি মিসতাহর খরচ আবার চালু করলেন এবং কসম খেলেন, তা আর কখনো তুলে নেবেন না। ইবন কাসীর দ্বিতীয় কসমটিকে প্রথমটির মুখোমুখি দাঁড় করান। একদিকে, কখনো তার উপকার করব না; অন্যদিকে, কখনো তা তুলে নেব না। তিনি বলেন, এ কারণেই সিদ্দীক ছিলেন সত্যিকারের সিদ্দীক।"
          },
          {
            "en": "Al-Qurtubi states the rule behind it: whoever swears not to do something and then sees that doing it is better should do it and expiate the oath, as he set out under Surat al-Ma'idah. He reports from al-Baji's al-Muntaqa that jurists held a perpetual oath never to do a sunnah or a recommended act to be a blemish on the swearer's testimony. Ma'arif al-Qur'an says those who swore were taught to break the oath and expiate it. As-Sa'di finds here evidence for spending on a relative, and that spending and kindness are not dropped because a person has sinned.",
            "bn": "এর পেছনের বিধানটি কুরতুবী বলে দেন: কেউ কোনো কাজ না করার কসম খাওয়ার পর যদি দেখে কাজটি করাই উত্তম, তবে সে কাজটি করবে এবং কসমের কাফফারা দেবে। সূরা মায়িদায় তিনি বিষয়টি বিস্তারিত বলেছেন। বাজীর আল-মুনতাকা থেকে তিনি আরও জানান, ফকীহদের মতে কেউ যদি কোনো সুন্নাত বা মুস্তাহাব কাজ চিরদিনের জন্য না করার কসম খায়, তবে তার সাক্ষ্যের উপর দাগ পড়ে। মাআরিফুল কুরআন বলে, যাঁরা কসম খেয়েছিলেন তাঁদের শেখানো হয়েছিল কসম ভেঙে কাফফারা দিতে। সা'দী এখানে আত্মীয়ের জন্য খরচ করার দলিল পান। তিনি আরও বলেন, কেউ গুনাহ করেছে বলে তার জন্য খরচ ও সদাচরণ ছেড়ে দেওয়া হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Called the Most Hopeful Verse",
          "bn": "সবচেয়ে আশার আয়াত"
        },
        "p": [
          {
            "en": "Al-Qurtubi reports 'Abdullah ibn al-Mubarak's verdict: this is the most hopeful verse in the Book of Allah. Some scholars, he adds, said so because of Allah's gentleness, in this very wording, toward those who had sinned in the slander. He lists other verses given the same title: 33:47, give the believers good news of great bounty, read with 42:22, which spells that bounty out; 39:53, O My servants who have transgressed against themselves; 42:19, Allah is gentle with His servants; and 93:5, your Lord will give you, and you will be pleased.",
            "bn": "কুরতুবী আবদুল্লাহ ইবন মুবারকের মত উদ্ধৃত করেন: আল্লাহর কিতাবে এটিই সবচেয়ে আশা-জাগানো আয়াত। তিনি জানান, কোনো কোনো আলেম একথা বলেছেন এই কারণে যে, অপবাদে জড়িয়ে গুনাহ করা মানুষদের প্রতি আল্লাহ এই শব্দগুলোতেই কোমলতা দেখিয়েছেন। একই উপাধি পাওয়া অন্য আয়াতগুলোর তালিকাও তিনি দেন: ৩৩:৪৭, মুমিনদের মহা অনুগ্রহের সুসংবাদ দাও, যা পড়তে হয় ৪২:২২ আয়াতের সঙ্গে, কারণ সেখানে সেই অনুগ্রহের বিবরণ আছে; ৩৯:৫৩, হে আমার বান্দারা যারা নিজেদের উপর বাড়াবাড়ি করেছ; ৪২:১৯, আল্লাহ তাঁর বান্দাদের প্রতি কোমল; আর ৯৩:৫, তোমার রব তোমাকে দেবেন, আর তুমি সন্তুষ্ট হবে।"
          },
          {
            "en": "This needs saying plainly. The verse speaks of one wrong, the slander of 'A'isha (RA), and of the people the Qur'an and its commentators place in it; it describes only what the text describes, and it licenses nothing against any living person or community, nor any reviving of old accusations. The verses that follow, 24:23 to 24:25, warn in the Qur'an's own words that those who accuse chaste, unaware believing women are cursed. What the verse asks of the reader is turned inward: name what anger has cut off, and put its question to yourself before restoring it.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি নির্দিষ্ট অন্যায়ের কথা বলে, আয়েশা (রাঃ)-এর বিরুদ্ধে রটানো অপবাদ, আর সেই ঘটনায় কুরআন ও তাফসীরকারেরা যাঁদের কথা বলেছেন তাঁদের কথা। পাঠ্যে যা বর্ণিত, আয়াত কেবল সেটুকুই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না, পুরোনো অভিযোগ খুঁচিয়ে তোলারও না। পরের আয়াতগুলো, ২৪:২৩ থেকে ২৪:২৫, কুরআনের নিজের ভাষায় সতর্ক করে: যারা সতী, সরলমনা মুমিন নারীদের অপবাদ দেয়, তারা অভিশপ্ত। এ আয়াত পাঠকের কাছে যা চায় তা নিজের ভেতরের কাজ। রাগ আপনার কাছ থেকে কী কেটে দিয়েছে, তা চিহ্নিত করুন, আর ফিরিয়ে দেওয়ার আগে আয়াতের প্রশ্নটি নিজেকে করুন।"
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
            "bn": "সূরা আন-নূর শুরু হয় সমাজকে যা নষ্ট করে তা ঠেকানো দিয়ে: অশ্লীলতার শাস্তি ঠিক করে দেয়, আর সতী নারীর উপর যারা মিথ্যা অপবাদ ছোড়ে তাদের অভিশাপ দেয়। মাআরিফুল কুরআন ঘরে ঢোকার আগে অনুমতি চাওয়ার হুকুম, অর্থাৎ ইস্তিআযানকে, এর পরে আসা অপেক্ষাকৃত নীরব নিয়মগুলোর একটি হিসেবে পড়ে। ইচ্ছা করেই একে ব্যভিচার আর অপবাদের শাস্তির পাশে রাখা হয়েছে। কারণ না জানিয়ে ঢুকে পড়া ঘরেই শুরু হয় বেখেয়ালি দৃষ্টি আর নষ্ট সুনামের গল্প।"
          },
          {
            "en": "The verse is eighteen words, opening with 'O you who believe.' Ibn Kathir calls it simply the Islamic etiquette: do not enter houses other than your own until you seek leave and greet the people inside. Muqatil bin Hayyan, whom Ibn Kathir quotes, describes what it replaced. In the days of ignorance a man would walk straight into another's house saying only that he had come in, hard on a host who might be sitting with his wife. The command shut that door and made entry a thing asked for.",
            "bn": "আয়াতটি আঠারো শব্দের, শুরু হয়েছে 'হে ঈমানদারগণ' দিয়ে। ইবন কাসীর একে সোজা কথায় বলেন ইসলামী আদব: নিজের ঘর ছাড়া অন্যের ঘরে ঢুকবে না, যতক্ষণ না অনুমতি চাইবে আর ভেতরের লোকদের সালাম দেবে। ইবন কাসীর মুকাতিল বিন হাইয়ানের কথা উদ্ধৃত করেন, এ আদেশ কোন রীতির জায়গা নিল তা বোঝাতে। জাহিলিয়াতের যুগে লোকে অন্যের ঘরে সোজা ঢুকে পড়ত, শুধু জানিয়ে দিত যে সে ঢুকেছে। গৃহকর্তা হয়তো তখন স্ত্রীর সঙ্গে বসে আছেন; তাঁর জন্য এটা ছিল বড় কষ্টের। আদেশটি সেই দরজা বন্ধ করে দিল: ঘরে ঢোকা হয়ে গেল চেয়ে নেওয়ার জিনিস।"
          }
        ]
      },
      {
        "h": {
          "en": "The Home as a Covering",
          "bn": "ঘর যেন এক আবরণ"
        },
        "p": [
          {
            "en": "As-Sa'di gives the reason in an image. A house, he says, shields what lies behind its walls as a garment shields the body's nakedness. Enter without leave and the eye falls on things inside that were never meant for it. He names a second harm: someone who slips in unseen invites suspicion, thought capable of theft or worse, since entering by stealth is itself the mark of an evil intent. Seeking leave removes both at once.",
            "bn": "সা'দী কারণটা বোঝান একটি উপমা দিয়ে। তিনি বলেন, কাপড় যেমন শরীরের লজ্জাস্থান ঢেকে রাখে, ঘরও তেমনি দেয়ালের ভেতরের সবকিছু আড়াল করে রাখে। অনুমতি ছাড়া ঢুকলে চোখ পড়ে যায় ভেতরের এমন জিনিসে, যা কখনো তার দেখার জন্য ছিল না। তিনি আরেকটা ক্ষতির কথাও বলেন। কেউ চুপিসারে ঢুকে পড়লে লোকে তাকে সন্দেহ করে, ভাবে সে চুরি বা তার চেয়েও খারাপ কিছু করতে পারে। কারণ লুকিয়ে ঢোকাটাই খারাপ নিয়তের আলামত। অনুমতি চাইলে দুটো ক্ষতিই একসঙ্গে দূর হয়।"
          },
          {
            "en": "Ma'arif al-Qur'an builds on the Qur'an's own naming of the home as a blessing, sakan, a place of rest (16:80). A home does its work only when a person can be there without another's intrusion. From this it draws four benefits: it spares people the harm of being intruded upon; it earns the visitor a proper welcome rather than a host wishing him gone; it guards against a glance falling on the women of the house; and it protects whatever a person does in private and would not want known.",
            "bn": "মাআরিফুল কুরআন শুরু করে কুরআনের নিজের কথা দিয়ে: কুরআন ঘরকে নিয়ামত বলেছে, বলেছে সাকান, বিশ্রামের জায়গা (১৬:৮০)। ঘর তার কাজ করতে পারে তখনই, যখন মানুষ সেখানে অন্যের অনধিকার উপস্থিতি ছাড়া থাকতে পারে। এখান থেকে মাআরিফ এ বিধানের চারটি উপকার বের করে। এক, হুট করে কেউ ঢুকে পড়ার কষ্ট থেকে মানুষ বাঁচে। দুই, আগন্তুক পায় সমাদর; গৃহকর্তা মনে মনে তার বিদায় কামনা করেন না। তিন, ঘরের নারীদের উপর চোখ পড়া থেকে রক্ষা হয়। চার, মানুষ একান্তে যা করে আর অন্যকে জানাতে চায় না, তা আড়ালে থাকে।"
          },
          {
            "en": "At-Tabari and al-Qurtubi report a cause of revelation from 'Adi bin Thabit: a woman of the Ansar said she was sometimes at home in a state she would not want father or son to see, yet a man of her household kept coming in on her, and the verse came down. Read this way, the rule walls off every home alike. Ma'arif holds it binding on all, a son even upon his own mother. It casts no suspicion on women as a class and licenses nothing against any person or community; it is a courtesy every believer both owes and is owed.",
            "bn": "তাবারী ও কুরতুবী আদী বিন সাবিতের সূত্রে আয়াতটি নাজিলের একটি প্রেক্ষাপট বর্ণনা করেন। আনসারদের এক নারী বলেছিলেন, ঘরে তিনি কখনো কখনো এমন অবস্থায় থাকেন, যে অবস্থায় বাবা বা ছেলেকেও দেখাতে চান না। অথচ পরিবারের এক পুরুষ বারবার তাঁর কাছে ঢুকে পড়ে। তখন এ আয়াত নাজিল হয়। এ দিক থেকে দেখলে বিধানটি প্রতিটি ঘরকে সমানভাবে দেয়াল দিয়ে ঘিরে দেয়। মাআরিফ বলে, এ বিধান সবার উপর ওয়াজিব, এমনকি নিজের মায়ের কাছে যেতেও ছেলেকে অনুমতি নিতে হবে। এতে নারীদের ঢালাওভাবে সন্দেহ করা হয়নি, কোনো ব্যক্তি বা গোষ্ঠীর বিরুদ্ধে কোনো কিছুর ছাড়পত্রও এতে নেই। এ এমন এক আদব, যা প্রত্যেক ঈমানদার অন্যকে দেয়, আবার নিজেও পাওয়ার হকদার।"
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
            "bn": "আয়াতে ক্রিয়াটি হলো তাসতা'নিসূ। এটি ঠিক কী দাবি করে, তা নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। অধিকাংশের মতে এর অর্থ ইস্তিআযান, সোজা কথায় অনুমতি চাওয়া। কুরতুবী মালিকের কথা উদ্ধৃত করেন: ইসতি'নাস মানেই ইস্তিআযান। তাবারীও ইবন আব্বাস থেকে একই ব্যাখ্যা বর্ণনা করেন। সা'দী শব্দটির ব্যাখ্যা দেন এভাবে: অনুমতি চাওয়াকে ইসতি'নাস বলা হয়, কারণ এর মাধ্যমে দুই পক্ষের মধ্যে উনস, অর্থাৎ মনের থিতু স্বস্তি তৈরি হয়। অনুমতি না চাইলে থাকে কেবল ওয়াহশা, এক শীতল অস্বস্তি।"
          },
          {
            "en": "Others hear a different demand in the word. Mujahid glosses isti'nas as making yourself known, by clearing the throat or a like sound, and entering only once you sense you have been noticed. Al-Khalil, cited by al-Baghawi, ties it to perception, from anastu, I perceived, as in 'if you perceive in them sound judgement' (4:6). Al-Qurtubi quotes Ibn Majah, from Abu Ayyub al-Ansari, who asked, 'this is the salam; what is the isti'dhan?' The answer: a man utters a tasbih, a takbir or a tahmid, or clears his throat, and so alerts the household. Al-Qurtubi reads this as proof that isti'nas is other than the salam.",
            "bn": "কেউ কেউ শব্দটিতে আরেকটি দাবি দেখেন। মুজাহিদ ইসতি'নাসের অর্থ করেন নিজের উপস্থিতি জানান দেওয়া: গলা খাঁকারি দিয়ে বা এ রকম কোনো আওয়াজ করে, আর ভেতরের লোকেরা টের পেয়েছে বুঝলে তবেই ঢোকা। বাগাভী খলীলের মত আনেন, যিনি শব্দটিকে 'টের পাওয়া' অর্থের সঙ্গে যুক্ত করেন। এর মূল আনাসতু, অর্থাৎ আমি টের পেলাম, যেমন আছে 'যদি তাদের মধ্যে বুদ্ধির পরিপক্বতা টের পাও' (৪:৬) আয়াতে। কুরতুবী ইবন মাজাহ থেকে আবু আইয়ুব আনসারীর প্রশ্নটি আনেন: 'এ তো হলো সালাম; ইস্তিআযান কী?' জবাব এল: লোকটি তাসবীহ, তাকবীর বা তাহমীদ বলবে, কিংবা গলা খাঁকারি দেবে, আর এভাবে ঘরের লোকদের সজাগ করবে। কুরতুবী এ থেকে প্রমাণ নেন যে ইসতি'নাস সালাম থেকে আলাদা জিনিস।"
          },
          {
            "en": "At-Tabari draws the two together. Isti'nas, he holds, is the istif'al form built on uns: a person seeks the household's leave to come in while making plain who he is, whether anyone is inside, and that he means to enter, so that he finds ease in their leave and they in his asking. He points to a known Arab usage, go and istanis, do you see anyone in the house, meaning look whether anyone is there. On his reading the two glosses are not rivals. Announcing yourself and asking leave are the single courtesy the word names.",
            "bn": "তাবারী দুই মতকে মিলিয়ে দেন। তাঁর মতে ইসতি'নাস হলো উনস থেকে গড়া ইসতিফআল রূপ। অর্থাৎ একজন ঘরের লোকদের কাছে ঢোকার অনুমতি চায়, আর সেই সঙ্গে জানিয়ে দেয় সে কে, খোঁজ নেয় ভেতরে কেউ আছে কি না, বুঝিয়ে দেয় যে সে ঢুকতে চায়। ফলে তাদের অনুমতিতে সে স্বস্তি পায়, তার অনুমতি চাওয়ায় তারাও স্বস্তি পায়। তিনি আরবদের একটি পরিচিত বাকরীতির কথা বলেন: 'যাও, ইসতানিস করো, ঘরে কাউকে দেখছ কি?' মানে, দেখো তো ভেতরে কেউ আছে কি না। তাঁর ব্যাখ্যায় দুই মত একে অপরের প্রতিদ্বন্দ্বী নয়। নিজের পরিচয় জানানো আর অনুমতি চাওয়া মিলেই সেই একটি আদব, শব্দটি যার নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word and the Scribe",
          "bn": "শব্দ আর লিপিকার"
        },
        "p": [
          {
            "en": "There is an old report about the wording itself. At-Tabari records, through Sa'id bin Jubayr from Ibn 'Abbas (raa), that he recited hatta tasta'dhinu, until you seek permission, and said that tastanisu was a slip of the scribe, reciting it as Ubayy bin Ka'b (raa) recited. Al-Baghawi carries the same, and adds that al-A'mash read it that way too. In the copy of Ibn Mas'ud (raa), at-Tabari notes, the two verbs stood reversed: greet the people of the house and seek their leave.",
            "bn": "শব্দটি নিয়েই একটি পুরনো বর্ণনা আছে। তাবারী সাঈদ বিন জুবায়েরের সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: তিনি পড়তেন হাত্তা তাসতা'যিনূ, অর্থাৎ যতক্ষণ না অনুমতি চাও। তিনি বলতেন, তাসতা'নিসূ লিপিকারের ভুল, আর নিজে পড়তেন উবাই বিন কা'ব (রাঃ)-এর কিরাআত অনুযায়ী। বাগাভীও একই বর্ণনা আনেন, আর যোগ করেন যে আ'মাশও এভাবে পড়তেন। তাবারী আরও জানান, ইবন মাসঊদ (রাঃ)-এর মুসহাফে ক্রিয়া দুটি ছিল উল্টো ক্রমে: ঘরের লোকদের সালাম দাও আর তাদের অনুমতি চাও।"
          },
          {
            "en": "Al-Qurtubi will not let the report pass. It is not sound from Ibn 'Abbas or anyone else, he holds, for every mushaf of Islam has tastanisu fixed in it, and the agreement on it has stood since 'Uthman's day. To charge the scribe with error in a word the Companions agreed upon, he says, is not soundly ascribed to Ibn 'Abbas; and he recalls that the Qur'an is the Reminder Allah pledged to guard (15:9). Ibn 'Atiyya adds that 'Umar (raa) himself said at the Prophet's door, may I seek familiarity, O Messenger of Allah. The word every reciter carries is tastanisu.",
            "bn": "কুরতুবী এ বর্ণনা বিনা আপত্তিতে মেনে নেন না। তাঁর মতে এটি ইবন আব্বাস বা আর কারও থেকে সহীহভাবে প্রমাণিত নয়। কারণ ইসলামের প্রতিটি মুসহাফে তাসতা'নিসূ শব্দটিই লেখা, আর উসমান (রাঃ)-এর যুগ থেকে এর উপর ঐকমত্য চলে আসছে। সাহাবিরা যে শব্দে একমত, তাতে লিপিকারের ভুল ধরার কথা ইবন আব্বাসের নামে সহীহভাবে বলা যায় না, বলেন কুরতুবী। তিনি মনে করিয়ে দেন, কুরআন সেই জিকির, যা হেফাজতের দায়িত্ব আল্লাহ নিজে নিয়েছেন (১৫:৯)। ইবন আতিয়্যা যোগ করেন, উমর (রাঃ) নিজেই নবী ﷺ-এর দরজায় দাঁড়িয়ে বলেছিলেন, হে আল্লাহর রাসূল, আমি কি একটু সান্নিধ্য চাইতে পারি? প্রত্যেক কারী যে শব্দ পড়েন, তা তাসতা'নিসূ।"
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
            "bn": "সালাম দেওয়া আর অনুমতি চাওয়া দুটোই যদি জরুরি হয়, তবে আগে কোনটা? বাগাভী এ নিয়ে মতভেদ বর্ণনা করেন। অল্প কয়েকজন অনুমতি চাওয়াকে আগে রাখেন, কারণ আয়াতে সেটাই আগে এসেছে। বেশিরভাগ আলেম সালামকে আগে রাখেন। তাঁদের মতে আয়াতে শব্দের ক্রম আগে-পিছে হয়েছে, আসল অর্থ হলো: ঘরের লোকদের সালাম দাও, তারপর অনুমতি চাও, যেমনটা ইবন মাসঊদ (রাঃ)-এর মুসহাফে ছিল। বাগাভী বর্ণনা করেন, এক লোক শুধু ঢোকার অনুমতি চাইলে ইবন উমর (রাঃ) তাকে ফিরিয়ে দেন, যতক্ষণ না তাকে বলা হলো আগে সালাম দিতে। মাওয়ারদী সীমারেখা টেনে দেন: ভেতরের কাউকে আগেই দেখে ফেললে প্রথমে সালাম দাও, নইলে অনুমতি চাও, আর ঢোকার সময় সালাম দাও।"
          },
          {
            "en": "Beneath the debate lies one settled form. Al-Qurtubi and Ibn Kathir tell of a man of Bani 'Amir who called out at the door, may I barge in, using a word for forcing entry into a tight space, and the Prophet ﷺ sent someone to teach him: say, peace be upon you, may I enter. Al-Qurtubi and al-Baghawi also carry the word of Jabir (raa) that the Prophet ﷺ said no one who does not begin with the salam should be let in. Whichever order a reader prefers, the greeting is the doorway itself, and asking to come in is the courtesy that follows it.",
            "bn": "এ মতভেদের নিচে একটি রীতি কিন্তু স্থির। কুরতুবী ও ইবন কাসীর বনী আমিরের এক লোকের ঘটনা বলেন। সে দরজায় দাঁড়িয়ে ডাক দিল, 'আমি কি ঢুকে পড়ব?' এমন এক শব্দে, যা সরু জায়গায় ঠেলে ঢোকা বোঝায়। নবী ﷺ একজনকে পাঠালেন তাকে শেখাতে: বলো, আসসালামু আলাইকুম, আমি কি ভেতরে আসতে পারি? কুরতুবী ও বাগাভী জাবির (রাঃ)-এর বর্ণনাও আনেন যে নবী ﷺ বলেছেন, যে সালাম দিয়ে শুরু করে না, তাকে ঢুকতে দিয়ো না। পাঠক যে ক্রমই পছন্দ করুন, সালামই আসল প্রবেশপথ, আর ঢোকার অনুমতি চাওয়া তার পরের আদব।"
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
            "bn": "একটি হাদিসেই গোটা বিধানের কারণ স্পষ্ট হয়ে যায়। সাহল বিন সা'দ বর্ণনা করেন, এক লোক একটি ছিদ্র দিয়ে নবী ﷺ-এর ঘরে উঁকি দিল। নবী ﷺ তখন একটি লোহার চিরুনি দিয়ে মাথা চুলকাচ্ছিলেন। নবী ﷺ বললেন, 'তুমি তাকিয়ে আছ জানলে এটা দিয়ে তোমার চোখ ফুঁড়ে দিতাম। অনুমতি চাওয়ার বিধান তো দেওয়াই হয়েছে দৃষ্টির কারণে।' হাদিসটি সহীহ বুখারীতে (৬২৪১) আছে। এর শব্দগুলো এখানে অন্য কোনো বর্ণনার সঙ্গে না মিশিয়ে হুবহু রাখা হলো।"
          },
          {
            "en": "As-Sa'di reads the entire verse through this saying: permission was legislated for the sake of the eye, so that no glance fall on what the walls of a home were built to hide. This is why the rule is more than a nicety. Ma'arif al-Qur'an lists among its aims that no eye fall on the women of a house, and the hadith puts the point at its sharpest. The threat to the eye is no licence to maim; the commentators read it as the gravity of the trespass. What the seeker of leave protects, before all else, is the sight of what was never his to see.",
            "bn": "সা'দী গোটা আয়াতটাই পড়েন এই হাদিসের আলোয়: অনুমতির বিধান দেওয়া হয়েছে চোখের কারণে, যাতে ঘরের দেয়াল যা আড়াল করার জন্য তোলা, তার উপর কারও দৃষ্টি না পড়ে। এ জন্যই বিধানটি নিছক ভদ্রতার চেয়ে বেশি কিছু। মাআরিফুল কুরআন এর উদ্দেশ্যগুলোর মধ্যে গোনে, ঘরের নারীদের উপর যেন কারও চোখ না পড়ে; হাদিসটি কথাটা সবচেয়ে ধারালোভাবে বলে। তবে চোখ ফুঁড়ে দেওয়ার হুমকি কাউকে অঙ্গহানি করার ছাড়পত্র নয়; তাফসীরকারেরা একে দেখেন সীমালঙ্ঘন কত গুরুতর তা বোঝানোর জন্য। যে অনুমতি চায়, সে সবার আগে নিজের চোখকে রক্ষা করে এমন কিছু দেখা থেকে, যা দেখার অধিকার তার কখনো ছিল না।"
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
            "bn": "কতবার অনুমতি চাওয়া যায়, সে বিষয়ে তাফসীরকারেরা একটি সংক্ষিপ্ত নিয়ম বর্ণনা করেন। কুরতুবী, ইবন কাসীর ও বাগাভী সবাই আবু সাঈদ খুদরী (রাঃ)-এর সূত্রে বর্ণনা করেন, আবু মূসা (রাঃ) উমর (রাঃ)-এর কাছে তিনবার অনুমতি চাইলেন। সাড়া না পেয়ে তিনি ফিরে গেলেন, আর দলিল দিলেন নবী ﷺ-এর এই কথা: তোমাদের কেউ তিনবার অনুমতি চেয়ে সাড়া না পেলে সে যেন ফিরে যায়। মালিক চাইতেন না কেউ তিনবারের বেশি চাক, তবে ডাক শোনা যায়নি বলে কেউ নিশ্চিত হলে আলাদা কথা। হাসান তিনবারকে তিনটি ধাপ হিসেবে দেখেন: প্রথমবার জানান দেওয়া, দ্বিতীয়বার অনুরোধ, তৃতীয়বার ফিরে যাওয়ার অনুমতি।"
          },
          {
            "en": "There is a small point of where to stand as well. Ibn Kathir and al-Qurtubi cite Abu Dawud, from 'Abdullah bin Busr (raa), that when the Prophet ﷺ came to someone's door he would not face it head-on but stand to its right or left and say, peace be upon you, peace be upon you, for in those days the doorways had no curtain over them. The one who waits at a door, that is, is not to spend the wait looking in. The manners are of a piece: each of them keeps the person inside from being caught unready.",
            "bn": "দরজায় কোথায় দাঁড়াতে হবে, তা নিয়েও একটি ছোট কথা আছে। ইবন কাসীর ও কুরতুবী আবু দাউদের সূত্রে আবদুল্লাহ বিন বুসর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ কারও দরজায় এলে ঠিক সামনে দাঁড়াতেন না। দাঁড়াতেন ডানে বা বাঁয়ে সরে, আর বলতেন, আসসালামু আলাইকুম, আসসালামু আলাইকুম। কারণ তখনকার দিনে দরজায় পর্দা থাকত না। অর্থাৎ দরজায় যে অপেক্ষা করছে, অপেক্ষার সময়টা সে ভেতরে তাকিয়ে কাটাবে না। এই আদবগুলো একই সুতোয় গাঁথা: প্রতিটিই ভেতরের মানুষকে অপ্রস্তুত অবস্থায় ধরা পড়া থেকে বাঁচায়।"
          },
          {
            "en": "Even the answer at the door has its manner. Ibn Kathir and al-Qurtubi relate, from the Two Sahihs, that Jabir (raa) knocked and the Prophet ﷺ asked who it was; Jabir said, it is I, and the Prophet ﷺ repeated, I? I?, as though he disliked it, because it is I tells the host nothing. One should give the name by which he is known, as 'Umar (raa) and Abu Musa (raa) did at the door. Ibn 'Abbas (raa) is reported to have named seeking leave among the rulings people have let fall out of use. The whole cluster serves one end: no one surprised, no one exposed.",
            "bn": "দরজায় জবাব দেওয়ারও আদব আছে। ইবন কাসীর ও কুরতুবী সহীহ বুখারী ও মুসলিম থেকে বর্ণনা করেন, জাবির (রাঃ) দরজায় কড়া নাড়লে নবী ﷺ জিজ্ঞেস করলেন, কে? জাবির বললেন, আমি। নবী ﷺ যেন অপছন্দ করে বললেন, আমি, আমি! কারণ শুধু 'আমি' বললে গৃহকর্তা কিছুই বুঝতে পারেন না। যে নামে মানুষ চেনে, সেই নাম বলা উচিত, যেমন উমর (রাঃ) ও আবু মূসা (রাঃ) দরজায় বলেছিলেন। ইবন আব্বাস (রাঃ) থেকে বর্ণিত আছে, তিনি অনুমতি চাওয়াকে সেই বিধানগুলোর মধ্যে গুনতেন, যেগুলোর উপর মানুষ আমল ছেড়ে দিয়েছে। এসব আদবের লক্ষ্য একটাই: কেউ যেন অপ্রস্তুত অবস্থায় ধরা না পড়ে, কারও আড়াল যেন খুলে না যায়।"
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
            "bn": "এরপর আয়াত কারণটা জানিয়ে দেয়: এটাই তোমাদের জন্য ভালো। তাবারী এখান থেকে দুটি কল্যাণ বের করেন। অনুমতি ছাড়া ঢুকলে আপনি জানেন না কীসের মধ্যে গিয়ে পড়ছেন; এমন কিছু হতে পারে যা আপনাকে কষ্ট দেবে, আবার খুশিও করতে পারে। অনুমতি নিয়ে ঢুকলে অপছন্দের কিছুর সামনে পড়তে হয় না, আর আপনার উপর আল্লাহর যে হক, তা-ও আদায় হয়। ইবন কাসীর বলেন, এটা একসঙ্গে দুই পক্ষের জন্যই ভালো: যে ডাকছে তার জন্য, আর ভেতরে যারা আছে তাদের জন্যও। সা'দী একে গোনেন সেই উত্তম আদবগুলোর মধ্যে, যা শুধু সুন্দর নয়, ওয়াজিবও।"
          },
          {
            "en": "The verse ends, perhaps you will be reminded. At-Tabari and al-Muyassar read it as: that by doing this you may recall Allah's commands and so obey Him. And the courtesy reaches far. Through 'Ata and Ibn Mas'ud (raa) the commentators hold a man seeks leave even upon his own mother; and though not required upon a wife, Ibn Mas'ud (raa) would clear his throat as he came in so as not to startle her. A rule that trusts you with a mother's privacy, and a wife's, has already shown you how to walk into any door that is not your own.",
            "bn": "আয়াত শেষ হয় এই কথায়: যাতে তোমরা উপদেশ গ্রহণ করো। তাবারী ও মুয়াসসার এর অর্থ করেন: এভাবে চললে তোমরা আল্লাহর আদেশ মনে রাখবে আর তাঁর আনুগত্য করবে। এ আদব অনেক দূর পর্যন্ত গড়ায়। আতা ও ইবন মাসঊদ (রাঃ)-এর সূত্রে তাফসীরকারেরা বলেন, নিজের মায়ের ঘরে ঢুকতেও অনুমতি নিতে হয়। স্ত্রীর বেলায় তা বাধ্যতামূলক নয়, তবু ইবন মাসঊদ (রাঃ) ঘরে ঢোকার সময় গলা খাঁকারি দিতেন, যাতে স্ত্রী চমকে না ওঠেন। যে বিধান মায়ের আড়াল আর স্ত্রীর আড়ালও আপনার হাতে আমানত রাখে, সে বিধান আগেই শিখিয়ে দিয়েছে, নিজের নয় এমন যেকোনো দরজায় কীভাবে পা রাখতে হয়।"
          }
        ]
      }
    ]
  },
  "24:30": {
    "sections": [
      {
        "h": {
          "en": "From the Doorway to the Eye",
          "bn": "দরজা পেরিয়ে চোখের কাছে"
        },
        "p": [
          {
            "en": "Qul lil-mu'minina yaghuddu min absarihim wa-yahfazu furujahum: tell the believing men to lower some of their gaze and guard their private parts. The verses just before it, 24:27 to 24:29, taught the believers to seek leave and give salam before entering another's house. Al-Qurtubi names the link: having spoken of covering, Allah joined to it what belongs with it, the matter of looking. A wall keeps out the body; this verse reaches the eye that might still look in.",
            "bn": "কুল লিল-মু'মিনীনা ইয়াগুদ্দু মিন আবসারিহিম ওয়া ইয়াহফাযু ফুরূজাহুম: মু'মিন পুরুষদের বলুন, তারা যেন দৃষ্টির কিছু অংশ নামিয়ে রাখে আর লজ্জাস্থান হেফাজত করে। ঠিক আগের আয়াতগুলো, ২৪:২৭ থেকে ২৪:২৯, শিখিয়েছে অন্যের ঘরে ঢোকার আগে অনুমতি চাইতে আর সালাম দিতে। দুইয়ের যোগসূত্র কুরতুবী নিজেই বলে দেন। আড়ালের কথা বলার পর আল্লাহ তার সঙ্গে জুড়ে দিলেন যা তার সঙ্গেই থাকে, অর্থাৎ দেখার বিষয়টি। দেয়াল শরীরকে বাইরে রাখে। কিন্তু চোখ তবু ভেতরে উঁকি দিতে পারে, আর এ আয়াত পৌঁছে যায় সেই চোখ পর্যন্ত।"
          },
          {
            "en": "At-Tabari reads the opening as Allah speaking to His Prophet ﷺ: say to those who believe in Allah and in you, O Muhammad. As-Sa'di notices whom the command assumes, people carrying a faith that holds them back from whatever would damage it. The verse also keeps its own order. The men are addressed first, in a verse of their own, and only in 24:31 does the same pair of commands reach the women. What follows here stays with the men's verse.",
            "bn": "তাবারীর ব্যাখ্যায় শুরুর কথাটি আল্লাহর পক্ষ থেকে তাঁর নবী ﷺ-কে বলা: হে মুহাম্মাদ, যারা আল্লাহর উপর ও আপনার উপর ঈমান এনেছে, তাদের বলুন। সা'দী খেয়াল করেন, আদেশটি কাদের ধরে নিয়ে দেওয়া। তারা এমন মানুষ, যাদের ঈমানই তাদের আটকে রাখে ঈমানের ক্ষতি করে এমন সব কিছু থেকে। আয়াতের নিজস্ব একটা ক্রমও আছে। প্রথমে পুরুষদের ডাকা হয়েছে, তাদের নিজেদের আলাদা আয়াতে। একই জোড়া আদেশ নারীদের কাছে পৌঁছায় তার পরে, ২৪:৩১ আয়াতে। এখানের আলোচনা পুরুষদের এই আয়াতেই সীমিত থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Lowered Rather Than Shut",
          "bn": "নামানো চোখ, বোজা চোখ নয়"
        },
        "p": [
          {
            "en": "The verb is ghadda, to lower or to lessen. Al-Qurtubi gives its forms, ghadda basarahu yaghudduhu ghaddan, and cites two lines of poetry. In one, a poet tells a rival to lower his eyes, for he is only of Numayr. In the other, 'Antara says that he lowers his eyes whenever his neighbour's wife appears, until her own dwelling hides her from view. The word was at home in the poets' Arabic, for humbled pride and for honour alike.",
            "bn": "ক্রিয়াটি গাদ্দা, যার মানে নামানো বা কমিয়ে আনা। কুরতুবী এর রূপগুলো দেখান, গাদ্দা বাসারাহু ইয়াগুদ্দুহু গাদ্দান, আর দুটি কবিতার চরণ আনেন। একটিতে এক কবি প্রতিপক্ষকে বলছেন চোখ নামাতে, কারণ সে তো নুমায়র গোত্রেরই লোক। অন্যটিতে কবি আনতারা বলছেন, প্রতিবেশীর স্ত্রী সামনে এলে তিনি চোখ নামিয়ে নেন, যতক্ষণ না তার নিজের ঘর তাকে আড়াল করে। অর্থাৎ কবিদের আরবিতে শব্দটি আগে থেকেই চেনা ছিল। কখনো তা ভাঙা অহংকারের চিহ্ন, কখনো সম্মানের।"
          },
          {
            "en": "Ma'arif al-Qur'an cites ar-Raghib that ghadd means to bring down or lower, and, following Ibn Kathir, explains lowering the eyes as turning them from what the Shari'ah forbids a person to see. Al-Qurtubi adds that the verse never names what the gaze is lowered from, nor what the private parts are guarded from. Custom makes it known, he says, and what is meant is the forbidden, not the permitted. Sight itself is not under suspicion here; only its misuse is.",
            "bn": "মাআরিফুল কুরআন রাগিবের সূত্রে বলে, গাদ্দ মানে নিচে নামানো। আর ইবন কাসীরকে অনুসরণ করে ব্যাখ্যা দেয়: চোখ নামানো মানে শরীয়ত যা দেখতে নিষেধ করেছে, তা থেকে চোখ ফিরিয়ে নেওয়া। কুরতুবী আরেকটি কথা যোগ করেন। কী থেকে দৃষ্টি নামাতে হবে, কী থেকে লজ্জাস্থান রক্ষা করতে হবে, আয়াত তার নাম বলেনি। তাঁর মতে প্রচলিত বোঝাপড়া থেকেই তা জানা যায়, আর উদ্দেশ্য হারাম জিনিস, হালাল নয়। তাই দেখা জিনিসটা এখানে সন্দেহের পাত্র নয়। সন্দেহ শুধু তার অপব্যবহার নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Small Particle, Three Readings",
          "bn": "ছোট্ট এক অব্যয়, তিন পাঠ"
        },
        "p": [
          {
            "en": "Then the small word min, in min absarihim. Al-Qurtubi sets out three readings. Some called it redundant, as in 69:47, fa-ma minkum min ahadin 'anhu hajizin. Others took it as partitive, some of their gaze, because some looking is permitted. A third reading takes ghadd itself as lessening, as when it is said that a man lowered another's standing: sight not allowed its full work is reduced, and min simply belongs to the verb, neither partitive nor redundant.",
            "bn": "তারপর ছোট্ট শব্দ মিন, মিন আবসারিহিম কথাটিতে। কুরতুবী তিনটি পাঠ তুলে ধরেন। কেউ বলেছেন এটি অতিরিক্ত, যেমন ৬৯:৪৭ আয়াতে ফামা মিনকুম মিন আহাদিন আনহু হাজিযীন। কেউ ধরেছেন আংশিক অর্থে, অর্থাৎ দৃষ্টির কিছু অংশ, কারণ কিছু দেখা তো বৈধ। তৃতীয় মত বলে, গাদ্দ শব্দটিই কমানোর অর্থ দেয়, যেমন বলা হয় অমুক অমুকের মর্যাদা নামিয়ে দিল। যে দৃষ্টিকে পুরো কাজ করতে দেওয়া হয় না, সে কমে যায়। তখন মিন কেবল ক্রিয়ার সঙ্গে লেগে থাকা অব্যয়, আংশিকও নয়, অতিরিক্তও নয়।"
          },
          {
            "en": "Al-Baghawi records the redundant and the retained readings, and explains why min stands: the believers are not commanded to lower their gaze from everything, since there is no duty to look away from what is lawful to see; they are commanded to look away from what is not. At-Tabari relays from Ibn Zayd a plainer argument. When a man sees what is not lawful for him, he lowers his gaze from it, and no one can lower his entire gaze; that is why Allah said min absarihim.",
            "bn": "বাগাভী অতিরিক্ত আর বহাল, দুই মতই উল্লেখ করেন, আর মিন কেন বহাল তার কারণ দেন। মু'মিনদের সব কিছু থেকে চোখ নামাতে বলা হয়নি, কারণ যা দেখা হালাল তা থেকে চোখ সরানো ফরজ নয়। তাদের বলা হয়েছে যা হালাল নয় তা থেকে চোখ সরাতে। তাবারী ইবন যায়দ থেকে আরও সহজ একটি যুক্তি আনেন। মানুষ যখন এমন কিছু দেখে যা তার জন্য হালাল নয়, তখন সে দৃষ্টি নামিয়ে নেয়। পুরো দৃষ্টি নামিয়ে রাখা তো কারও পক্ষেই সম্ভব নয়। সে কারণেই আল্লাহ বলেছেন মিন আবসারিহিম।"
          },
          {
            "en": "As-Sa'di draws a contrast inside the verse itself. The private parts are to be guarded with no qualifying word, he says, while for the eyes Allah brought the particle of partition, because looking is allowed in some situations of need; he names the witness, the worker and the man seeking a marriage. Al-Qurtubi reaches the matter from another side: the first, unchosen glance lies outside one's control, so partition was needed for the eye, and not for the private parts, which are within it.",
            "bn": "সা'দী আয়াতের ভেতরেই একটা তফাত দেখান। তাঁর কথায়, লজ্জাস্থান হেফাজতের আদেশ এসেছে কোনো শর্ত ছাড়া। কিন্তু চোখের বেলায় আল্লাহ আংশিকতার অব্যয় এনেছেন, কারণ প্রয়োজনের কিছু অবস্থায় দেখা বৈধ। উদাহরণ হিসেবে তিনি সাক্ষী, কর্মচারী আর বিয়ের প্রস্তাবদাতার কথা বলেন। কুরতুবী অন্য দিক থেকে একই জায়গায় পৌঁছান। প্রথম যে নজর অনিচ্ছায় পড়ে, তা মানুষের নিয়ন্ত্রণের বাইরে। তাই চোখের বেলায় আংশিকতার দরকার হয়েছে। লজ্জাস্থানের বেলায় হয়নি, কারণ তা মানুষের নিয়ন্ত্রণেই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Glance Comes Unbidden",
          "bn": "অনিচ্ছায় নজর পড়ে গেলে"
        },
        "p": [
          {
            "en": "Ibn Kathir, al-Qurtubi and al-Baghawi all bring the same report here. Sahih Muslim (2159) records it from Jarir ibn 'Abdullah: \"I asked the Messenger of Allah ﷺ about the sudden glance, and he commanded me to turn my eyes away.\" At-Tirmidhi records it as well (2776) and grades it hasan sahih. Al-Qurtubi reads it as support for the partitive reading: the first glance is not chosen, so no one is charged with it; what the believer owns is what he does next.",
            "bn": "ইবন কাসীর, কুরতুবী ও বাগাভী তিনজনই এখানে একই বর্ণনা আনেন। সহীহ মুসলিম (২১৫৯) তা উদ্ধৃত করেছে জারীর ইবন আবদুল্লাহ (রাঃ) থেকে: \"আমি রাসূলুল্লাহ ﷺ-কে হঠাৎ পড়ে যাওয়া দৃষ্টি সম্পর্কে জিজ্ঞেস করলাম। তিনি আমাকে আদেশ দিলেন, আমি যেন আমার চোখ ফিরিয়ে নিই।\" তিরমিযীও বর্ণনাটি এনেছেন (২৭৭৬) এবং একে হাসান সহীহ বলেছেন। কুরতুবী একে আংশিক পাঠের সমর্থন হিসেবে পড়েন। প্রথম নজর কেউ বেছে নেয় না, তাই তার দায়ও কারও উপর চাপে না। মু'মিনের দায় শুধু তার পরের কাজটুকুর।"
          },
          {
            "en": "Ibn Kathir puts the instruction in his own words: if the eye falls by chance on what is forbidden, without intent, let it be turned away quickly. Turning, he notes, is the broader word, since it may be towards the ground or in some other direction. Nothing dramatic is asked. The eye that was taken by surprise is not blamed; it is only asked not to let the surprise settle into a stare.",
            "bn": "ইবন কাসীর নির্দেশটি নিজের ভাষায় বলেন: ইচ্ছা ছাড়া হঠাৎ যদি হারাম কিছুর উপর চোখ পড়ে যায়, তবে দ্রুত তা ফিরিয়ে নিতে হবে। তিনি খেয়াল করান, ফিরিয়ে নেওয়া কথাটির পরিসর বড়। চোখ মাটির দিকেও যেতে পারে, অন্য কোনো দিকেও। এখানে নাটকীয় কিছু চাওয়া হয়নি। যে চোখ অপ্রস্তুত অবস্থায় কিছু দেখে ফেলেছে, তাকে দোষ দেওয়া হয় না। তাকে শুধু বলা হয়, সেই আচমকা দেখাটা যেন একদৃষ্টে তাকিয়ে থাকায় না গড়ায়।"
          },
          {
            "en": "A second narration states the same thought from the other end. Sunan Abu Dawud (2149) records from Buraydah that the Prophet ﷺ said to 'Ali: \"O 'Ali, do not follow a glance with a glance, for the first is yours, and the second is not yours.\" Abu Dawud gives no grading on the page fetched for it. At-Tirmidhi (2777) relays it through the same narrator, Sharik, and calls it hasan gharib, known only through Sharik, so it rests on a single line of transmission.",
            "bn": "দ্বিতীয় একটি বর্ণনা একই কথা বলে উল্টো দিক থেকে। সুনান আবু দাউদ (২১৪৯) বুরায়দা (রাঃ) থেকে উদ্ধৃত করেছে, নবী ﷺ আলী (রাঃ)-কে বললেন: \"হে আলী, এক দৃষ্টির পেছনে আরেক দৃষ্টি দিয়ো না। প্রথমটি তোমার জন্য, দ্বিতীয়টি তোমার জন্য নয়।\" যে পাতা থেকে বর্ণনাটি নেওয়া, সেখানে আবু দাউদ কোনো মান উল্লেখ করেননি। তিরমিযী (২৭৭৭) একই বর্ণনাকারী শারীকের সূত্রে এটি এনে একে হাসান গরীব বলেছেন, আর জানিয়েছেন যে শারীকের সূত্র ছাড়া এটি তাঁর জানা নেই। অর্থাৎ বর্ণনাটি দাঁড়িয়ে আছে একটিমাত্র সূত্রধারায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarded From What, From Whom",
          "bn": "কী থেকে, কার চোখ থেকে"
        },
        "p": [
          {
            "en": "Wa-yahfazu furujahum: and guard their private parts. From what? At-Tabari relays from Abu l-'Aliya that every guarding of the private parts mentioned in the Qur'an means guarding from zina, except here and in the women's verse after it, where it means covering. At-Tabari makes this his own reading: that they keep them from being seen by anyone for whom seeing them is not lawful, by wearing what covers them. Al-Baghawi records the same words of Abu l-'Aliya.",
            "bn": "ওয়া ইয়াহফাযু ফুরূজাহুম: আর তারা যেন লজ্জাস্থান হেফাজত করে। কিন্তু কী থেকে? তাবারী আবুল আলিয়া থেকে বর্ণনা করেন, কুরআনে যেখানেই লজ্জাস্থান হেফাজতের কথা এসেছে, সেখানে অর্থ যিনা থেকে বাঁচা। ব্যতিক্রম শুধু এই আয়াত আর এর পরের নারীদের আয়াত। এ দুই জায়গায় অর্থ ঢেকে রাখা। তাবারী এটিকেই নিজের ব্যাখ্যা হিসেবে নেন। তাঁর কথায়, যার জন্য দেখা হালাল নয়, সে যেন তা দেখতে না পায়, আর সেজন্য এমন পোশাক পরতে হবে যা তা ঢেকে রাখে। বাগাভীও আবুল আলিয়ার একই কথা উল্লেখ করেন।"
          },
          {
            "en": "Others widen it. Ibn Kathir says guarding the private parts is sometimes keeping them from zina, as in 70:29 and 70:30, and sometimes keeping them from being looked at. Al-Qurtubi records both views, covering and zina, and then gives his own judgement: the correct view is that all of it is meant, since the wording is general. As-Sa'di and the Muyassar likewise join the two senses. Two positions stand, and the article leaves them standing.",
            "bn": "অন্যরা অর্থটি আরও বিস্তৃত করেন। ইবন কাসীর বলেন, লজ্জাস্থান হেফাজত কখনো মানে যিনা থেকে বাঁচানো, যেমন ৭০:২৯ ও ৭০:৩০ আয়াতে। আবার কখনো মানে অন্যের দৃষ্টি থেকে আড়াল রাখা। কুরতুবী ঢেকে রাখা আর যিনা, দুটি মতই উল্লেখ করে নিজের রায় দেন: সঠিক কথা হলো দুটিই উদ্দেশ্য, কারণ শব্দটি ব্যাপক। সা'দী ও মুয়াসসারও দুই অর্থ একসঙ্গে ধরেন। এভাবে দুটি অবস্থান পাশাপাশি থেকে যায়, আর এ লেখা তাদের কোনোটিকে বাতিল করে না।"
          },
          {
            "en": "The second sense has its own hadith, which Ibn Kathir and al-Qurtubi bring. Jami' at-Tirmidhi (2769) records from Bahz ibn Hakim, from his father, from his grandfather: \"I said: O Messenger of Allah, our 'awrah, what of it must we cover and what may we leave? He said: Guard your 'awrah except from your wife or what your right hand possesses. He said: What of a man with another man? He said: If you are able that no one sees it, then do so. I said: And a man when he is alone? He said: Then Allah is more deserving that one be shy before Him.\" At-Tirmidhi grades it hasan.",
            "bn": "দ্বিতীয় অর্থের পক্ষে একটি হাদীস আছে, যা ইবন কাসীর ও কুরতুবী দুজনেই আনেন। জামে তিরমিযী (২৭৬৯) বাহয ইবন হাকীম থেকে, তিনি তাঁর পিতা থেকে, তিনি তাঁর দাদা থেকে বর্ণনা করেন: \"আমি বললাম, হে আল্লাহর রাসূল, আমাদের সতরের কতটুকু ঢাকতে হবে আর কতটুকু ছাড়া যায়? তিনি বললেন: তোমার স্ত্রী অথবা তোমার ডান হাতের মালিকানাধীন দাসী ছাড়া সবার থেকে তোমার সতর হেফাজত করো। তিনি বললেন: পুরুষ যদি আরেক পুরুষের সঙ্গে থাকে? তিনি বললেন: যদি পারো যে কেউ তা না দেখুক, তবে তা-ই করো। আমি বললাম: আর মানুষ যখন একা থাকে? তিনি বললেন: তাহলে আল্লাহই বেশি হকদার যে তাঁকে লজ্জা করা হবে।\" তিরমিযী একে হাসান বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Look Leads",
          "bn": "তাকানো যেখানে নিয়ে যায়"
        },
        "p": [
          {
            "en": "Why join the eye and the private parts in one sentence? Ibn Kathir answers that looking draws the heart towards corruption, so Allah commanded the guarding of the private parts just as He commanded the guarding of the eyes that lead to it. He quotes some early scholars: the look is a poisoned arrow into the heart. He relays from 'Abida that every act of disobedience to Allah is a major sin, and that Allah has named both ends here. Ma'arif al-Qur'an explains those ends: the first step is the look cast with a bad motive, the last is zina, and whatever lies between them is included by implication.",
            "bn": "চোখ আর লজ্জাস্থানকে একই বাক্যে জোড়া হলো কেন? ইবন কাসীরের উত্তর: দেখা অন্তরকে বিপর্যয়ের দিকে টেনে নেয়। তাই আল্লাহ লজ্জাস্থান হেফাজতের আদেশ দিয়েছেন, ঠিক যেমন আদেশ দিয়েছেন সেই চোখ হেফাজতের, যা ওদিকে নিয়ে যায়। তিনি পূর্বসূরিদের কারও কারও কথা উদ্ধৃত করেন: দৃষ্টি অন্তরের দিকে ছোড়া বিষমাখা তীর। আবীদা থেকে তিনি আরও বর্ণনা করেন, আল্লাহর প্রতিটি নাফরমানিই কবীরা গুনাহ, আর এখানে আল্লাহ দুই প্রান্তেরই নাম নিয়েছেন। মাআরিফুল কুরআন প্রান্ত দুটি খুলে বলে। প্রথম ধাপ মন্দ উদ্দেশ্যে তাকানো, শেষ ধাপ যিনা। মাঝখানে যা কিছু পড়ে, সবই এর আওতায় চলে আসে।"
          },
          {
            "en": "Ibn Kathir supports the link with a narration that Sahih Muslim (2657) records, here in Muslim's wording through Ibn 'Abbas from Abu Hurayrah: \"Allah has written for the son of Adam his share of zina, which he will reach without fail. The zina of the eyes is looking, and the zina of the tongue is speaking; the self wishes and desires, and the private part confirms that or denies it.\" It is a general narration, not attached to this verse, but it shows why a single sentence can hold both the eye and the body.",
            "bn": "এই সম্পর্কের পক্ষে ইবন কাসীর একটি বর্ণনা আনেন, যা সহীহ মুসলিম (২৬৫৭) উদ্ধৃত করেছে। এখানে মুসলিমের শব্দে, ইবন আব্বাস (রাঃ)-এর সূত্রে আবু হুরায়রা (রাঃ) থেকে: \"আল্লাহ আদম সন্তানের জন্য যিনার অংশ লিখে রেখেছেন, যা সে অবশ্যই পেয়ে যাবে। চোখের যিনা দেখা, জিহ্বার যিনা কথা বলা। মন কামনা করে, আকাঙ্ক্ষা করে, আর লজ্জাস্থান তা সত্য করে অথবা মিথ্যা করে দেয়।\" এটি সাধারণ বর্ণনা, এই আয়াতের সঙ্গে সরাসরি যুক্ত নয়। তবু তা দেখায়, একটি বাক্যে চোখ আর শরীর কেন একসঙ্গে আসতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Purer, and Made to Grow",
          "bn": "পবিত্রতা, সঙ্গে বৃদ্ধিও"
        },
        "p": [
          {
            "en": "Dhalika azka lahum: that is purer for them. At-Tabari explains that lowering the gaze from what may not be looked at, and keeping the private parts from appearing to onlookers, is purer for them with Allah and better. For Ibn Kathir it is purer for their hearts and cleaner for their religion, and he adds a saying without naming its author: whoever guards his sight, Allah gives him light in his insight, or, in another wording, in his heart. Al-Qurtubi has it purer in religion and further from people's stains.",
            "bn": "যালিকা আযকা লাহুম: এটাই তাদের জন্য বেশি পবিত্র। তাবারী বুঝিয়ে বলেন, যা দেখা যায় না তা থেকে চোখ নামিয়ে রাখা, আর লজ্জাস্থানকে দর্শকের চোখে প্রকাশ পেতে না দেওয়া, আল্লাহর কাছে তাদের জন্য বেশি পবিত্র ও উত্তম। ইবন কাসীরের কাছে এটি অন্তরের জন্য বেশি পবিত্র, দ্বীনের জন্য বেশি নির্মল। তিনি বক্তার নাম না বলে একটি কথাও জুড়ে দেন: যে নিজের দৃষ্টি হেফাজত করে, আল্লাহ তার অন্তর্দৃষ্টিতে আলো দেন। অন্য এক ভাষ্যে, তার অন্তরে। কুরতুবীর ভাষায়, এটি দ্বীনের দিক থেকে বেশি পবিত্র, আর মানুষের মলিনতা থেকে বেশি দূরে।"
          },
          {
            "en": "As-Sa'di hears growth in azka as well as purity: purer, better, and more increasing for their deeds, because they left the forbidden thing the self craved, and whoever lowers his gaze from the forbidden, Allah lights up his insight. He asks why Allah called it guarding. A guarded thing stays safe only if its keeper watches over it; so too the eye and the private parts, which, left unwatched, lead a servant into trials. Ibn Kathir says of several narrations on the reward of lowering the gaze that their chains contain weakness, so none is relied on here.",
            "bn": "সা'দী আযকা শব্দে পবিত্রতার পাশাপাশি বৃদ্ধির অর্থও শোনেন। অর্থাৎ বেশি পবিত্র, বেশি উত্তম, আর আমলের জন্য বেশি বর্ধনশীল। কারণ মন যে হারামের দিকে টানছিল, তারা তা ছেড়ে দিয়েছে। আর যে হারাম থেকে চোখ নামায়, আল্লাহ তার অন্তর্দৃষ্টি আলোকিত করেন। আল্লাহ একে হেফাজত কেন বললেন, সে প্রশ্নও তিনি তোলেন। রক্ষক যদি পাহারা না দেয়, তবে কোনো রক্ষিত জিনিস নিরাপদ থাকে না। চোখ ও লজ্জাস্থানও তেমনি, পাহারা ছাড়া থাকলে বান্দাকে বিপদে ফেলে। দৃষ্টি নামানোর পুরস্কার নিয়ে কয়েকটি বর্ণনার ব্যাপারে ইবন কাসীর বলেন, সেগুলোর সনদে দুর্বলতা আছে। তাই এখানে সেগুলোর কোনোটির উপর ভর করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the One Who Knows",
          "bn": "যিনি সব খবর রাখেন"
        },
        "p": [
          {
            "en": "Inna-llaha khabirun bima yasna'un: Allah is fully aware of what they do. Ibn Kathir sets it beside 40:19: He knows the treachery of the eyes and what the breasts conceal. At-Tabari reads it as Allah's knowledge of how people carry out His command to lower their gaze and keep themselves covered. Al-Qurtubi hears in it a warning; as-Sa'di, a reminder of His knowledge so that they strive to guard themselves. A glance is among the most private of deeds, and the verse closes on the One from whom it is never private.",
            "bn": "ইন্নাল্লাহা খাবীরুন বিমা ইয়াসনাউন: তারা যা করে, আল্লাহ সে বিষয়ে পুরোপুরি অবগত। ইবন কাসীর একে রাখেন ৪০:১৯ আয়াতের পাশে: তিনি চোখের খেয়ানত জানেন, আর অন্তর যা লুকায় তা-ও। তাবারীর ব্যাখ্যায়, দৃষ্টি নামানো আর নিজেকে ঢেকে রাখার আদেশ মানুষ কীভাবে পালন করে, আল্লাহ তা জানেন। কুরতুবী এতে সতর্কবাণী শোনেন। সা'দী শোনেন তাঁর জ্ঞানের কথা মনে করিয়ে দেওয়া, যাতে মানুষ নিজেকে রক্ষার চেষ্টা করে। একটা নজর মানুষের সবচেয়ে গোপন কাজগুলোর একটি। আর আয়াত শেষ হয় তাঁর নামে, যাঁর কাছে তা কখনো গোপন নয়।"
          },
          {
            "en": "Lowering the gaze also belongs to public life. Sahih al-Bukhari (6229) records from Abu Sa'id al-Khudri that the Prophet ﷺ said: \"Beware of sitting in the roads.\" They said, \"O Messenger of Allah, we cannot do without our sitting places, where we talk.\" He said, \"If you insist on sitting, then give the road its right.\" They asked, \"And what is the right of the road, O Messenger of Allah?\" He said, \"Lowering the gaze, holding back harm, returning the greeting, and enjoining good and forbidding evil.\" Ibn Kathir and al-Qurtubi bring it here, though it is not attached to this verse.",
            "bn": "দৃষ্টি নামানো জনজীবনেরও অংশ। সহীহ বুখারী (৬২২৯) আবু সাঈদ খুদরী (রাঃ) থেকে উদ্ধৃত করেছে, নবী ﷺ বললেন: \"রাস্তায় বসা থেকে সাবধান থেকো।\" তাঁরা বললেন: \"হে আল্লাহর রাসূল, আমাদের বসার জায়গা ছাড়া চলে না, সেখানে আমরা কথাবার্তা বলি।\" তিনি বললেন: \"বসতেই যদি চাও, তবে রাস্তাকে তার হক দাও।\" তাঁরা জিজ্ঞেস করলেন: \"হে আল্লাহর রাসূল, রাস্তার হক কী?\" তিনি বললেন: \"দৃষ্টি নামিয়ে রাখা, কষ্ট দেওয়া থেকে বিরত থাকা, সালামের জবাব দেওয়া, আর সৎকাজের আদেশ ও অসৎকাজে নিষেধ করা।\" ইবন কাসীর ও কুরতুবী এখানে বর্ণনাটি আনেন, যদিও তা এই আয়াতের সঙ্গে সরাসরি যুক্ত নয়।"
          },
          {
            "en": "The verse speaks to each believing man about his own eyes and his own body. It gives no one licence to police, shame or harm anyone, and no right to watch the eyes of others. Al-Qurtubi relays through al-Awza'i that a man named Ghazwan looked at a girl who had uncovered herself, then struck his own eye. Abu Musa al-Ash'ari told him: you have wronged your eye; ask Allah's forgiveness and repent, for it has the first glance and answers for what came after. Even towards oneself, the answer was repentance, not injury.",
            "bn": "আয়াতটি প্রত্যেক মু'মিন পুরুষকে তার নিজের চোখ আর নিজের শরীর নিয়ে বলে। কাউকে পাহারা দেওয়ার, লজ্জা দেওয়ার বা ক্ষতি করার কোনো অনুমতি এটি কাউকে দেয় না। অন্যের চোখের উপর নজরদারি করার অধিকারও দেয় না। কুরতুবী আওযায়ীর সূত্রে বর্ণনা করেন, গাযওয়ান নামে এক ব্যক্তি এক মেয়ের দিকে তাকিয়েছিলেন, যে নিজের শরীর অনাবৃত করেছিল। তারপর তিনি নিজের চোখেই আঘাত করেন। আবু মূসা আশআরী (রাঃ) তাঁকে বললেন: তুমি তোমার চোখের উপর জুলুম করেছ। আল্লাহর কাছে ক্ষমা চাও, তওবা করো। প্রথম নজর তার নিজের, আর পরে যা হয়েছে তার দায় তার উপর। নিজের বেলাতেও উত্তর ছিল তওবা, আঘাত নয়।"
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
            "bn": "আয়াতটি একা পড়া যায় না, আর একা পড়ার জন্য নাজিলও হয়নি। ঠিক আগের আদেশ, ২৪:৩০, মু’মিন পুরুষদের বলছে দৃষ্টি নামিয়ে রাখতে আর নিজেদের লজ্জাস্থান হেফাজত করতে। এরপর ২৪:৩১ শুরু হয় একটিমাত্র জোড়া-শব্দ দিয়ে, ওয়া কুল, আর বলে দাও। ফলে মু’মিন নারীদের প্রতি আদেশটা আসে পুরুষদের প্রতি আদেশটার যমজ হয়ে। মাআরিফুল কুরআন সোজা কথাটাই ধরিয়ে দেয়: শুরুতে নারীদের ওপর যে হুকুম, তা হুবহু আগের আয়াতে পুরুষদের ওপর রাখা হুকুমটাই, তারপর তাদের জন্য আরও বাড়িয়ে দেওয়া হলো।"
          },
          {
            "en": "So the reader should set aside the idea that modesty is a weight placed on women while men stand by. The order runs the other way. Allah addresses the men first, in their own verse, and only then turns, with the same verbs, to the women. What the two verses share is more than wording; it is a single principle of guarded sight and guarded self, asked of the whole believing community. The details that follow for women are additions to that shared foundation, not a burden invented for one half of it.",
            "bn": "তাই পাঠক এ ধারণা সরিয়ে রাখুন যে পর্দা শুধু নারীর ঘাড়ে চাপানো বোঝা, আর পুরুষ পাশে দাঁড়িয়ে দেখছে। ক্রমটা বরং উল্টো। আল্লাহ আগে পুরুষদের সম্বোধন করেন, তাদের নিজেদের আয়াতে; তারপর একই ক্রিয়া দিয়ে নারীদের দিকে ফেরেন। দুই আয়াতের মিল শুধু শব্দে নয়, মিলটা এক নীতিতে: চোখের হেফাজত আর নিজের হেফাজত, যা চাওয়া হয়েছে গোটা মু’মিন সমাজের কাছে। এরপর নারীদের জন্য যে খুঁটিনাটি আসে, তা ওই অভিন্ন ভিতের উপর বাড়তি সংযোজন, সমাজের এক অংশের জন্য বানিয়ে নেওয়া আলাদা বোঝা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Lowering the Gaze",
          "bn": "দৃষ্টি নামিয়ে রাখা"
        },
        "p": [
          {
            "en": "Yaghdudna min absarihinna: let them lower their gaze. Ibn Kathir reads this as turning the eyes from what Allah has forbidden them to look upon, apart from their husbands. As-Sa'di adds the same restraint, looking away from the unlawful and from a stare charged with desire. The little word min, some of their gaze, is not careless; it tells the believer that ordinary, needful seeing is not meant. The eye is asked to be governed, not shut. It is the identical verb Allah used of the men one verse earlier.",
            "bn": "ইয়াগদুদনা মিন আবসারিহিন্না: তারা যেন তাদের দৃষ্টি নামিয়ে রাখে। ইবন কাসীরের ব্যাখ্যায় এর অর্থ, আল্লাহ যা দেখতে নিষেধ করেছেন তা থেকে চোখ ফিরিয়ে নেওয়া; স্বামী এর বাইরে। আস-সা’দীও একই সংযমের কথা বলেন: হারাম জিনিস থেকে আর কামনাভরা দৃষ্টি থেকে চোখ সরিয়ে রাখা। ছোট্ট শব্দ 'মিন', অর্থাৎ দৃষ্টির কিছু অংশ, অসাবধানে আসেনি। এটি মু’মিনকে জানিয়ে দেয়, দৈনন্দিন দরকারি দেখা এ নিষেধের আওতায় নয়। চোখকে বন্ধ করতে বলা হয়নি, বলা হয়েছে সংযত রাখতে। এক আয়াত আগে পুরুষদের বেলায় আল্লাহ হুবহু এই ক্রিয়াটিই ব্যবহার করেছেন।"
          },
          {
            "en": "Wa-yahfazna furujahunna: and guard their private parts. Abu al-Aliyah made a fine observation that Ibn Kathir preserves: in every other verse the phrase means guarding oneself from unlawful intimacy, but here alone it also carries guarding oneself from being seen. As-Sa'di gathers both senses, that these be kept from any unlawful contact and from any unlawful gaze. The command, in other words, protects a person's own dignity before it regulates anyone else's eyes. That is the inner direction of the whole verse, and it should colour how every clause after it is heard.",
            "bn": "ওয়া ইয়াহফাযনা ফুরূজাহুন্না: আর তারা যেন তাদের লজ্জাস্থান হেফাজত করে। এখানে আবুল আলিয়ার একটি সূক্ষ্ম কথা ইবন কাসীর সংরক্ষণ করেছেন: অন্য সব আয়াতে কথাটির অর্থ অবৈধ মেলামেশা থেকে নিজেকে বাঁচানো, কিন্তু শুধু এই আয়াতে এর সঙ্গে আছে অন্যের চোখে পড়া থেকেও নিজেকে আড়াল করা। আস-সা’দী দুই অর্থই একসঙ্গে ধরেন: লজ্জাস্থান যেন অবৈধ স্পর্শ থেকেও রক্ষা পায়, অবৈধ দৃষ্টি থেকেও। অর্থাৎ আদেশটি অন্যের চোখ নিয়ন্ত্রণ করার আগে মানুষের নিজের মর্যাদা রক্ষা করে। গোটা আয়াতের ভেতরের দিকটা এটাই, আর এর পরের প্রতিটি অংশ এই আলোতেই বোঝা উচিত।"
          },
          {
            "en": "May a woman look at a man? Here the commentators keep a real difference open. Ma'arif al-Qur'an reports that many scholars held it forbidden for a woman to look at a non-mahram man, citing the report of Umm Salama, graded hasan sahih by at-Tirmidhi, where the Prophet ﷺ told two of his wives to screen themselves from the blind Companion Ibn Umm Maktum. Others allowed a look without desire, resting on the sound report of A'isha watching the Abyssinians from behind the Prophet ﷺ. All agreed a look charged with lust is forbidden. The article does not settle between them; the verse's weight falls on restraint, not surveillance.",
            "bn": "নারী কি পুরুষের দিকে তাকাতে পারে? এ প্রশ্নে তাফসীরকারেরা সত্যিকারের একটি মতভেদ খোলা রেখেছেন। মাআরিফুল কুরআন জানায়, অনেক আলেমের মতে গায়রে মাহরাম পুরুষের দিকে নারীর তাকানো নিষেধ। তাঁদের দলিল উম্মে সালামার বর্ণনা, তিরমিযী যাকে হাসান সহীহ বলেছেন: সেখানে নবী ﷺ তাঁর দুই স্ত্রীকে অন্ধ সাহাবী ইবনে উম্মে মাকতুমের সামনে পর্দা করতে বলেছিলেন। অন্যরা কামনা ছাড়া তাকানোর অনুমতি দিয়েছেন। তাঁদের ভিত্তি সেই সহীহ বর্ণনা, যেখানে আয়েশা (রাঃ) নবী ﷺ-এর পেছনে দাঁড়িয়ে হাবশীদের খেলা দেখছিলেন। কামনাভরা দৃষ্টি যে হারাম, এ ব্যাপারে সবাই একমত। এ লেখা তাঁদের মতভেদের মীমাংসা করে না; আয়াতের জোর সংযমের উপর, অন্যের উপর নজরদারির উপর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Except What Ordinarily Shows",
          "bn": "যা এমনিতেই প্রকাশ পায়"
        },
        "p": [
          {
            "en": "Wa-la yubdina zinatahunna illa ma zahara minha: and let them not display their adornment except what ordinarily appears of it. The clause turns on that last phrase, the single most debated point in the verse. At-Tabari lays the difference out fully. One group, headed by Ibn Mas'ud, took ma zahara to mean only the outer garment, the rida', the wrap a woman cannot hide when she goes out; al-Hasan and Ibrahim an-Nakha'i are named with him. The other, reported from Ibn Abbas through Sa'id ibn Jubayr, took it to mean the face and the hands.",
            "bn": "ওয়া লা ইউবদীনা যীনাতাহুন্না ইল্লা মা যাহারা মিনহা: আর তারা যেন তাদের শোভা প্রকাশ না করে, তবে যা এমনিতেই প্রকাশ পায় তা ছাড়া। বাক্যটির ভার ওই শেষ কথাটার ওপর, আর এটাই আয়াতের সবচেয়ে আলোচিত বিন্দু। তাবারী মতভেদটা পুরোপুরি খুলে বলেন। একটি দল, যার মাথায় ইবন মাসঊদ (রাঃ), মা যাহারা বলতে নিয়েছেন কেবল বাইরের পোশাক, রিদা, বেরোনোর সময় নারী যা লুকাতে পারে না; তাঁর সঙ্গে নাম আসে হাসান আর ইবরাহীম নাখঈর। অন্য দল, ইবন আব্বাস (রাঃ) থেকে সাঈদ ইবন জুবায়রের সূত্রে বর্ণিত, নিয়েছেন চেহারা ও দুই হাত।"
          },
          {
            "en": "At-Tabari, having weighed them, favoured the second: the words mean the face and the two hands, and into that he folds the kohl, the ring and the bracelet worn on them. Ibn Kathir carries the earlier reading from Ibn Mas'ud, that it is the clothes and outer garment, because that is what a woman genuinely cannot conceal. Ma'arif al-Qur'an frames the whole dispute as turning on whether the face and hands may be uncovered before non-mahram men, and reports the reconciling view of al-Baydawi and al-Khazin: the exception covers whatever uncovers of itself in a woman's ordinary work.",
            "bn": "তাবারী দুই মত যাচাই করে দ্বিতীয়টিকে প্রাধান্য দেন: এর অর্থ চেহারা ও দুই হাত, আর এর মধ্যেই তিনি ধরেন সুরমা, আংটি ও হাতের চুড়ি। ইবন কাসীর আনেন ইবন মাসঊদ (রাঃ)-এর আগের মতটি: এটা হলো পোশাক আর বাইরের চাদর, কারণ নারী সত্যিই এটুকু লুকাতে পারে না। মাআরিফুল কুরআনের মতে গোটা বিতর্কের মূল প্রশ্ন হলো, গায়রে মাহরাম পুরুষের সামনে চেহারা ও হাত খোলা রাখা যায় কি না। এ নিয়ে সে বায়দাবী ও খাযিনের সমন্বয়ের মতটি উল্লেখ করে: দৈনন্দিন কাজের সময় নারীর যা আপনা থেকেই খুলে যায়, ব্যতিক্রমের মধ্যে সেটুকুই পড়ে।"
          },
          {
            "en": "Be honest about what this means for the reader. This is a place where sincere scholars, working from the same Arabic, reached different conclusions, and the tafsirs preserve the difference rather than erase it. This article follows them: it reports the range and does not rule that one reading is binding and the others closed. Ma'arif al-Qur'an itself adds that all agreed on one thing, that where uncovering the face invites fitna it is not allowed, and that a woman's prayer is valid with face and hands bare. Beyond that shared ground, the question stays where the mufassirun left it.",
            "bn": "পাঠকের কাছে এর অর্থ কী, তা খোলাখুলি বলা দরকার। এটি এমন একটি জায়গা, যেখানে আন্তরিক আলেমরা একই আরবি পাঠ থেকে ভিন্ন ভিন্ন সিদ্ধান্তে পৌঁছেছেন, আর তাফসীরগুলো সেই মতভেদ মুছে না দিয়ে ধরে রেখেছে। এ লেখাও তাঁদের পথে চলে: মতগুলোর পুরো পরিসর তুলে ধরে, কোনো একটি মতকে বাধ্যতামূলক আর বাকিগুলোকে বাতিল ঘোষণা করে না। মাআরিফুল কুরআন নিজেই যোগ করে, একটি বিষয়ে সবাই একমত: যেখানে চেহারা খোলা রাখলে ফিতনার আশঙ্কা, সেখানে তা জায়েয নয়; আর চেহারা ও হাত খোলা রেখে নারীর নামাজ শুদ্ধ। এই অভিন্ন ভিতের বাইরে প্রশ্নটি সেখানেই থাকে, যেখানে মুফাসসিরগণ রেখে গেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Drawing the Headcover Close",
          "bn": "মাথার কাপড় বুকের উপর"
        },
        "p": [
          {
            "en": "Wa-l-yadribna bi-khumurihinna 'ala juyubihinna: and let them draw their headcovers over their bosoms. Al-Qurtubi defines the words with care. The khimar, plural khumur, is what a woman covers her head with; the jayb, plural juyub, is the opening cut at the neck of the garment, over the chest. Before Islam, he records, women let the cover's ends fall behind them, leaving the neck and upper chest bare; the verse redirects that same cloth forward, so the chest opening is covered. Ma'arif al-Qur'an gives the identical picture from Ibn Jubayr.",
            "bn": "ওয়াল ইয়াদরিবনা বিখুমুরিহিন্না আলা জুয়ূবিহিন্না: আর তারা যেন তাদের মাথার কাপড় বুকের উপর টেনে দেয়। কুরতুবী শব্দগুলোর অর্থ যত্ন করে বুঝিয়ে দেন। খিমার, বহুবচনে খুমুর: যা দিয়ে নারী মাথা ঢাকে। জায়ব, বহুবচনে জুয়ূব: জামার গলার কাছের কাটা অংশ, যা বুকের উপর থাকে। তিনি লেখেন, ইসলামের আগে নারীরা মাথার কাপড়ের প্রান্ত পেছনে ঝুলিয়ে রাখত, ফলে গলা আর বুকের উপরের অংশ খোলা থাকত। আয়াতটি সেই কাপড়ই সামনে টেনে আনতে বলে, যাতে বুকের কাছের খোলা অংশ ঢাকা পড়ে। মাআরিফুল কুরআন ইবন জুবায়র থেকে হুবহু একই ছবি দেয়।"
          },
          {
            "en": "How the first believing women received this is itself part of the meaning, and it is warm, not stern. Al-Bukhari records from Safiyya bint Shayba that A'isha, may Allah be pleased with her, used to say: \"When this verse, and let them draw their headcovers over their bosoms, was revealed, they took their waist-sheets and cut them at the edges and covered themselves with them.\" The report is in Bukhari's own collection, so it is sound. The picture is of women who hurried to obey the very moment the command came.",
            "bn": "প্রথম মু’মিন নারীরা এটা কীভাবে গ্রহণ করলেন, সেটাও অর্থের অংশ, আর তা কঠোর নয়, উষ্ণ। বুখারী সাফিয়্যা বিনতে শায়বা থেকে বর্ণনা করেন যে আয়েশা (রাঃ) বলতেন: “যখন এ আয়াত, আর তারা যেন মাথার কাপড় বুকের উপর টেনে দেয়, নাজিল হলো, তখন তাঁরা নিজেদের কোমরের চাদর নিয়ে ধারের দিক থেকে চিরে সেগুলো দিয়ে নিজেদের ঢাকলেন।” বর্ণনাটি বুখারীর নিজের সংকলনে আছে, তাই তা সহীহ। ছবিটা এমন নারীদের, যাঁরা হুকুম আসার মুহূর্তেই ছুটে গেলেন তা মানতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Kept Nothing From",
          "bn": "যাদের থেকে আড়াল নেই"
        },
        "p": [
          {
            "en": "The verse then names those before whom a woman's adornment may appear: her husband, her father, her husband's father, her sons, her husband's sons, her brothers, her brothers' sons, her sisters' sons, her women, and those her right hand possesses. Ibn Kathir explains that these are her close relatives whom she may never marry, and adornment before them is permitted, though without wanton display. As-Sa'di notes that father takes in the grandfather however far up, and son the grandson however far down. Ma'arif al-Qur'an counts twelve exceptions in all and reads mahram here in its wide sense, husband included.",
            "bn": "এরপর আয়াত তাঁদের নাম বলে, যাঁদের সামনে নারীর শোভা প্রকাশ পেতে পারে: তার স্বামী, বাবা, শ্বশুর, ছেলে, স্বামীর ছেলে, ভাই, ভাইয়ের ছেলে, বোনের ছেলে, তার নিজেদের নারীরা, আর তার অধিকারভুক্ত দাস-দাসী। ইবন কাসীর ব্যাখ্যা করেন, এঁরা তার সেই ঘনিষ্ঠ আত্মীয়, যাঁদের সঙ্গে তার বিয়ে কখনো হালাল নয়; তাঁদের সামনে শোভা প্রকাশ জায়েয, তবে সাজের বেপরোয়া প্রদর্শন ছাড়া। আস-সা’দী বলেন, বাবা বললে উপরের দিকে দাদা-পরদাদা সবাই এসে যান, আর ছেলে বললে নিচের দিকে নাতি-পুতি সবাই। মাআরিফুল কুরআন মোট বারোটি ব্যতিক্রম গোনে, আর এখানে মাহরাম শব্দটি নেয় ব্যাপক অর্থে, যাতে স্বামীও এর মধ্যে পড়েন।"
          },
          {
            "en": "The reasoning behind the list is gentle. Ma'arif al-Qur'an offers two grounds: these are men in whose hearts Allah has placed a natural honour for their close kinswomen, so no mischief is feared, and they share a household, where constant hiding would be a hardship. There is a telling omission. Ibn Kathir records from Ikrima that the uncle is not named, lest he describe a woman to his own son, so a woman need not uncover before him as before a father. The verse's care reaches even into who goes unmentioned.",
            "bn": "তালিকার পেছনের যুক্তিটা কোমল। মাআরিফুল কুরআন দুটি কারণ দেয়। এক, এঁদের অন্তরে আল্লাহ নিকট আত্মীয় নারীদের প্রতি স্বভাবজাত সম্মানবোধ রেখে দিয়েছেন, তাই এঁদের থেকে অঘটনের ভয় নেই। দুই, এঁরা একই ঘরে থাকেন, আর সেখানে সারাক্ষণ আড়াল রাখা কষ্টকর হতো। তালিকায় একটি অর্থবহ অনুপস্থিতিও আছে। ইবন কাসীর ইকরিমা থেকে আনেন, চাচা-মামার নাম এখানে নেই, কারণ তাঁরা হয়তো নিজের ছেলের কাছে নারীর বর্ণনা দিয়ে ফেলবেন। তাই বাবার সামনে যতটা খোলা রাখা যায়, তাঁদের সামনে নারীর ততটা খোলা রাখার দরকার নেই। কার নাম বলা হলো না, আয়াতের যত্ন সেখানেও পৌঁছে গেছে।"
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
            "bn": "আয়াতে আরও দুটি দলের নাম আছে, আর দুটিরই সংযত ব্যাখ্যা দরকার। প্রথম দল আত-তাবিঈন গায়রি উলিল ইরবাতি মিনার রিজাল: পুরুষদের মধ্যে সেই অধীন সেবক, যাদের কামনা নেই। ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে আনেন, এর মানে এমন পুরুষ যার নারীর প্রতি কোনো আগ্রহ নেই। আস-সা’দী এমন লোকের বর্ণনা দেন: হয় সে নির্বোধ, নয়তো দেহে-মনে তার কোনো ঝোঁক আর অবশিষ্ট নেই। মাআরিফুল কুরআন সাবধানে সেই শর্তটি যোগ করে, যার উপর আলেমরা জোর দিয়েছেন: ছাড় কেবল সেই পুরুষের বেলায়, যার সত্যিই এমন আগ্রহ নেই। যে পুরুষ নারীর ব্যাপারে খেয়াল করে, তার সামনে নারী পর্দা বজায় রাখবেন।"
          },
          {
            "en": "The second is at-tifl alladhina lam yazharu 'ala 'awrati n-nisa', children not yet aware of the private aspects of women. Ibn Kathir explains this of the young child who understands nothing of women or their ways, and adds that once a boy nears the age of noticing, a woman covers before him as before a man. As-Sa'di reads it of the child below the age of discernment, for they have no knowledge of this and no desire has yet arisen in them. The line is read plainly, as the tafsirs read it, and nothing more is pressed from it.",
            "bn": "দ্বিতীয় দল আত-তিফলুল্লাযীনা লাম ইয়াযহারূ আলা আওরাতিন নিসা: সেই শিশুরা, যারা নারীদের গোপন বিষয় সম্পর্কে এখনো কিছু বোঝে না। ইবন কাসীর এর ব্যাখ্যায় বলেন, এ সেই ছোট শিশু, যে নারী বা নারীদের ব্যাপার-স্যাপার কিছুই বোঝে না। তিনি আরও বলেন, ছেলে এসব খেয়াল করার বয়সের কাছাকাছি পৌঁছালে নারী তার সামনে প্রাপ্তবয়স্ক পুরুষের মতোই পর্দা করবেন। আস-সা’দীর মতে এখানে বোঝানো হয়েছে ভালো-মন্দ বোঝার বয়স হয়নি এমন শিশুকে, কারণ এ বিষয়ে তাদের কোনো জ্ঞান নেই, তাদের মধ্যে কোনো কামনাও এখনো জাগেনি। এ লেখা লাইনটিকে সোজাভাবেই পড়ে, যেভাবে তাফসীরগুলো পড়েছে; এর বাইরে কিছু টেনে বের করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Even the Anklet's Ring",
          "bn": "নূপুরের শব্দটুকুও নয়"
        },
        "p": [
          {
            "en": "Wa-la yadribna bi-arjulihinna li-yu'lama ma yukhfina min zinatihinna: and let them not stamp their feet to make known what they conceal of their adornment. Ibn Kathir explains that women once wore anklets no one could hear, and would stamp so that the ringing reached men's ears; the verse forbids that, and with it any movement that puts a hidden adornment on display. What is striking is the reach of the command. It guards not a sight but a sound, an ornament that stays covered and is betrayed only by a deliberate step.",
            "bn": "ওয়া লা ইয়াদরিবনা বিআরজুলিহিন্না লিইউ’লামা মা ইউখফীনা মিন যীনাতিহিন্না: আর তারা যেন পা ঠুকে না চলে, যাতে তাদের লুকানো শোভা জানাজানি হয়ে যায়। ইবন কাসীর ব্যাখ্যা করেন, নারীরা একসময় এমন নূপুর পরত যার আওয়াজ এমনিতে কেউ শুনত না, আর তারা মাটিতে পা ঠুকত, যাতে সেই রুনুঝুনু পুরুষের কানে পৌঁছায়। আয়াত তা নিষেধ করেছে, সঙ্গে এমন যেকোনো চালচলনও, যা লুকানো সাজকে প্রকাশ করে দেয়। লক্ষ করার মতো বিষয় হলো, আদেশটি কতদূর পৌঁছায়। এটি কোনো দৃশ্য নয়, পাহারা দিচ্ছে একটি আওয়াজকে: এমন গয়না যা ঢাকাই থাকে, ধরা পড়ে কেবল ইচ্ছে করে ফেলা একটি পদক্ষেপে।"
          },
          {
            "en": "From this small clause as-Sa'di draws a large principle. Stamping the foot is in itself permitted, he says, yet because here it becomes a means to something forbidden, it is itself forbidden; and from cases like it the scholars derived the rule of sadd adh-dhara'i, blocking the paths to harm, so a lawful act that reliably opens onto an unlawful one is closed off. Read as it was meant, it is a merciful logic, a fence a person sets around their own heart, not a warrant to hunt for hidden faults in anyone else.",
            "bn": "এই ছোট্ট বাক্য থেকে আস-সা’দী একটি বড় নীতি বের করেন। তিনি বলেন, পা ঠোকা নিজে জায়েয কাজ; কিন্তু এখানে তা যেহেতু হারামের মাধ্যম হয়ে দাঁড়ায়, তাই এটিও হারাম হয়ে যায়। এ ধরনের দৃষ্টান্ত থেকেই আলেমরা সাদ্দুয যারাই নীতি বের করেছেন, অর্থাৎ ক্ষতির দিকে যাওয়া পথ বন্ধ করা: যে হালাল কাজ প্রায় নিশ্চিতভাবে হারামের দরজা খুলে দেয়, তা বন্ধ রাখা হয়। যেভাবে বোঝানো উদ্দেশ্য, সেভাবে পড়লে এ এক দয়ার যুক্তি। এটা মানুষের নিজের অন্তরের চারপাশে দেওয়া বেড়া, অন্যের লুকানো দোষ খুঁজে বেড়ানোর ছাড়পত্র নয়।"
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
            "bn": "ওয়া তূবূ ইলাল্লাহি জামীআন আইয়ুহাল মু’মিনূনা লাআল্লাকুম তুফলিহূন: আর হে মু’মিনগণ, তোমরা সবাই আল্লাহর কাছে তওবা করো, যাতে তোমরা সফল হও। আস-সা’দী দেখান, এই শেষ কথাটি আয়াতের সুর কতখানি বদলে দেয়। একের পর এক বিস্তারিত আদেশের পর আল্লাহ সেগুলো কোনো হুমকি দিয়ে শেষ করেন না, শেষ করেন ফিরে আসার ডাক দিয়ে। আর তিনি ডাকেন সব মু’মিনকে, নারী-পুরুষ একসঙ্গে, যাতে কেউ অন্যের বিচারক সেজে দাঁড়িয়ে না থাকে। আস-সা’দী সোজাসুজি বলেন: প্রত্যেক মু’মিনেরই এই ফেরা দরকার, আর সফলতা এর সঙ্গেই বাঁধা; তওবা ছাড়া ফালাহর আর কোনো পথ নেই।"
          },
          {
            "en": "That inward, hopeful close should govern how the whole verse is used. Its address is to the believing woman's own consciousness of God, to the guarding she chooses for herself; it is guidance held out in trust, not a rod put in anyone's hand. It licenses nothing against any woman. It gives nobody the authority to compel her, to shame her, or to police her in God's name, for the verse turns everyone, the would-be enforcer first, back to their own repentance before Allah. A command God directed to a person's heart is disfigured the moment it is made a weapon against another.",
            "bn": "আয়াতের এই ভেতরমুখী, আশাভরা সমাপ্তিই ঠিক করে দেয়, গোটা আয়াত কীভাবে কাজে লাগানো হবে। এর সম্বোধন মু’মিন নারীর নিজের তাকওয়ার প্রতি, নিজের জন্য সে যে হেফাজত বেছে নেয় তার প্রতি। এ হলো আমানত হিসেবে বাড়িয়ে দেওয়া হিদায়াত, কারও হাতে তুলে দেওয়া লাঠি নয়। কোনো নারীর বিরুদ্ধে এ আয়াত কাউকে কিছুর অনুমতি দেয় না। আল্লাহর নামে তাকে জোর করার, লজ্জা দেওয়ার বা তার উপর খবরদারি করার অধিকার কাউকে দেয় না। কারণ আয়াত সবাইকে, সবার আগে যে জোর খাটাতে চায় তাকে, ফিরিয়ে দেয় আল্লাহর সামনে নিজের তওবার দিকে। আল্লাহ যে আদেশ মানুষের অন্তরের উদ্দেশে দিয়েছেন, অন্যের বিরুদ্ধে অস্ত্র বানানোর মুহূর্তেই তা বিকৃত হয়ে যায়।"
          },
          {
            "en": "So the verse ends where it began, as a shared trust. It opened as the counterpart of the charge to the men, and closes by folding men and women back into one address before their Lord. Between the two stands a body of guidance, some agreed, some left open by the very scholars who knew it best. What is not left open is the spirit of the last line: dignity, warmth and hope, a door held open for everyone to walk through toward Allah. The reader is invited to be one of those who walk through it.",
            "bn": "তাই আয়াত শেষ হয় যেখানে শুরু হয়েছিল সেখানেই, এক অভিন্ন আমানত হয়ে। শুরুতে এটি ছিল পুরুষদের প্রতি আদেশের যমজ, আর শেষে নারী-পুরুষ সবাইকে তাদের রবের সামনে একই সম্বোধনে ফিরিয়ে আনে। এর মাঝখানে আছে একগুচ্ছ হিদায়াত: কিছু বিষয়ে সবাই একমত, কিছু বিষয় খোলা রেখে গেছেন সেই আলেমরাই, যাঁরা এ বিষয়ে সবচেয়ে বেশি জানতেন। যা খোলা রাখা হয়নি, তা হলো শেষ লাইনের চেতনা: মর্যাদা, উষ্ণতা আর আশা; আল্লাহর দিকে এগিয়ে যাওয়ার জন্য সবার সামনে খোলা এক দরজা। পাঠক, আপনিও সেই দরজা দিয়ে যাঁরা এগিয়ে যান, তাঁদের একজন হোন।"
          }
        ]
      }
    ]
  },
  "24:35": {
    "sections": [
      {
        "h": {
          "en": "Straight After the Clear Signs",
          "bn": "সুস্পষ্ট আয়াতের ঠিক পরে"
        },
        "p": [
          {
            "en": "Allahu nuru-s-samawati wal-ard: Allah is the light of the heavens and the earth. The verse follows directly on 24:34, We have sent down to you clear signs, an example from those who passed before you and an admonition for the God-fearing. At-Tabari builds his reading on that order. Continuing the praise begun there is likelier, he argues, than a change of subject, so the sense runs: We sent you clear signs and guided you by them, for I am the Guide of the people of the heavens and the earth.",
            "bn": "আল্লাহু নূরুস সামাওয়াতি ওয়াল আরদ: আল্লাহ আসমান ও যমীনের আলো। আয়াতটি এসেছে ঠিক ২৪:৩৪-এর পরে, যেখানে বলা হয়েছে: আমি তোমাদের কাছে নাযিল করেছি সুস্পষ্ট আয়াত, পূর্ববর্তীদের দৃষ্টান্ত আর মুত্তাকীদের জন্য উপদেশ। তাবারী এই ক্রমের উপর তাঁর ব্যাখ্যা দাঁড় করান। তাঁর যুক্তি, যাঁর প্রশংসা দিয়ে কথা শুরু, তাঁর প্রশংসাতেই কথা এগোবে, প্রসঙ্গ হঠাৎ বদলাবে না। তাই অর্থ দাঁড়ায়: আমি তোমাদের সুস্পষ্ট আয়াত দিয়েছি, সেগুলো দিয়ে পথ দেখিয়েছি, কারণ আমিই আসমান ও যমীনের অধিবাসীদের পথপ্রদর্শক।"
          },
          {
            "en": "After that statement about Allah, the next sentence, mathalu nurihi, the likeness of His light, is openly a similitude, and the verse names its own genre at the close: and Allah presents examples for the people. As-Sa'di says examples bring meanings grasped by the mind near to things grasped by the senses. Then he advises: be occupied with pondering them and understanding them, not with objecting to them, for He knows and you do not.",
            "bn": "আল্লাহ সম্পর্কে এই ঘোষণার পরের বাক্য, মাসালু নূরিহী, তাঁর আলোর দৃষ্টান্ত, খোলাখুলিই উপমা। আয়াতের শেষে নিজেই জানিয়ে দেয় এটা কোন ধরনের কথা: আল্লাহ মানুষের জন্য দৃষ্টান্ত পেশ করেন। সা'দী বলেন, দৃষ্টান্ত বুদ্ধিতে ধরা অর্থকে ইন্দ্রিয়ে ধরা জিনিসের কাছে টেনে আনে। তারপর তাঁর উপদেশ: এসব দৃষ্টান্ত নিয়ে ভাবুন, বুঝুন, আপত্তি তুলতে ব্যস্ত হবেন না। তিনি জানেন, আপনারা জানেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Guide, Director, Illuminer",
          "bn": "পথপ্রদর্শক, পরিচালক, আলোদাতা"
        },
        "p": [
          {
            "en": "The early authorities gloss the first sentence in several ways. Ibn 'Abbas, in the report of 'Ali ibn Abi Talha, says it means the Guide of the people of the heavens and the earth; at-Tabari, Ibn Kathir and al-Baghawi all carry it. At-Tabari adds from Anas ibn Malik: my God says, My light is My guidance. This is the reading at-Tabari chose: by His light they are guided to the truth, and by His guidance they are kept from the bewilderment of going astray.",
            "bn": "প্রথম বাক্যের ব্যাখ্যা আদি যুগের আলেমরা কয়েকভাবে দিয়েছেন। আলী ইবন আবী তালহার বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, এর অর্থ আসমান ও যমীনের অধিবাসীদের পথপ্রদর্শক। তাবারী, ইবন কাসীর ও বাগাভী তিনজনই এটি এনেছেন। তাবারী আনাস ইবন মালিক (রাঃ)-এর কথাও যোগ করেন: আমার ইলাহ বলেন, আমার আলো হল আমার হিদায়াত। তাবারী এই ব্যাখ্যাটিই বেছে নেন। তাঁর ভাষায়, তাঁর আলোয় তারা সত্যের পথ পায়, আর তাঁর হিদায়াতে গোমরাহির দিশাহারা অবস্থা থেকে রক্ষা পায়।"
          },
          {
            "en": "Others read it differently. Mujahid and Ibn 'Abbas, through Ibn Jurayj, say He directs the affair in them, their stars, their sun and their moon. Al-Baghawi and al-Qurtubi give, from Ubayy ibn Ka'b, al-Hasan and Abu-l-'Aliya, the Adorner: He adorned the sky with sun, moon and stars, and the earth with prophets, scholars and believers. Ad-Dahhak, in al-Baghawi, says the Illuminer, who lit the sky with angels and the earth with prophets. As-Suddi, in Ibn Kathir, says by His light the heavens and the earth shone.",
            "bn": "অন্যরা ভিন্নভাবে পড়েছেন। ইবন জুরাইজের সূত্রে মুজাহিদ ও ইবন আব্বাস (রাঃ) বলেন, তিনি এ দুয়ের সব বিষয় পরিচালনা করেন, এদের তারা, সূর্য আর চাঁদ। বাগাভী ও কুরতুবী উবাই ইবন কা'ব (রাঃ), হাসান ও আবুল আলিয়া থেকে আনেন 'সাজানেওয়ালা' অর্থটি: তিনি আকাশ সাজিয়েছেন সূর্য, চাঁদ ও তারা দিয়ে, আর যমীন সাজিয়েছেন নবী, আলেম ও মুমিনদের দিয়ে। বাগাভীর বর্ণনায় দাহহাক বলেন, আলোদাতা: তিনি আকাশ আলোকিত করেছেন ফেরেশতা দিয়ে, যমীন নবীদের দিয়ে। ইবন কাসীরের বর্ণনায় সুদ্দী বলেন, তাঁর আলোতেই আসমান ও যমীন আলোকিত হয়েছে।"
          },
          {
            "en": "Al-Qurtubi sets out one more reading: by Him and by His power their lights shine and their affairs stand upright, which he gives as the sense of what Mujahid, az-Zuhri and others said. He judges it more comprehensive of the meanings than the gloss Guide. The Muyassar joins two of the readings in one line: He directs the affair in them and guides their people, and without His light the darknesses would pile one on another.",
            "bn": "কুরতুবী আরেকটি ব্যাখ্যা দেন: তাঁরই দ্বারা, তাঁর কুদরতে এদের আলো জ্বলে, এদের সব কাজ ঠিকঠাক চলে। তাঁর মতে মুজাহিদ, যুহরী ও অন্যদের কথার মর্ম এটাই। এই ব্যাখ্যাকে তিনি 'পথপ্রদর্শক' অর্থের চেয়ে বেশি অর্থ ধারণকারী মনে করেন। মুয়াসসার এক বাক্যে দুটি ব্যাখ্যা মিলিয়ে দেয়: তিনি আসমান ও যমীনের সব বিষয় পরিচালনা করেন, এদের অধিবাসীদের পথ দেখান। তাঁর আলো না থাকলে অন্ধকার একটার উপর আরেকটা জমে উঠত।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Accounts of the Name",
          "bn": "নামটির দুই রকম ব্যাখ্যা"
        },
        "p": [
          {
            "en": "On what the name says of Allah Himself, the commentators differ, and the difference is theirs to state. As-Sa'di reads the light as both sensory and of meaning. He writes that Allah in His essence is light and His veil is light, and that by Him the Throne, the Footstool, the sun, the moon and Paradise are lit. The light of meaning also returns to Him: His Book is light, His law is light, and faith and knowledge in the hearts of His messengers and believers are light.",
            "bn": "নামটি আল্লাহ সম্পর্কে নিজে কী বলে, এ প্রশ্নে তাফসীরকারদের মত ভিন্ন। মতভেদটা তাঁদের, তাই তাঁদের মুখেই থাকুক। সা'দী আলোকে পড়েন ইন্দ্রিয়গ্রাহ্য ও অর্থগত, দুই অর্থেই। তিনি লেখেন, আল্লাহ সত্তাগতভাবে আলো, তাঁর পর্দাও আলো। তাঁরই দ্বারা আলোকিত আরশ, কুরসী, সূর্য, চাঁদ ও জান্নাত। অর্থগত আলোও ফিরে যায় তাঁরই দিকে: তাঁর কিতাব আলো, তাঁর শরীয়ত আলো, আর তাঁর রাসূলদের ও মুমিন বান্দাদের অন্তরের ঈমান ও মারিফাত আলো।"
          },
          {
            "en": "In al-Qurtubi's account, light in Arab speech is what the eye perceives, and it is used figuratively for meanings that are sound and clear. So it may be said of Allah by way of praise, he writes, because He brought things into being and the light of all things begins from Him, while He is not among the lights the eye perceives. Ma'arif al-Qur'an says the word here is meant as Munawwir, He who gives light, and reports agreement on it among scholars.",
            "bn": "কুরতুবীর ব্যাখ্যায়, আরবদের কথায় নূর হল চোখে দেখা আলো। রূপক অর্থে শব্দটি খাটে সঠিক ও স্পষ্ট অর্থের বেলায়। তিনি লেখেন, প্রশংসার দিক থেকে আল্লাহর ক্ষেত্রে এ শব্দ বলা যায়, কারণ তিনিই সবকিছু অস্তিত্বে এনেছেন, সব জিনিসের আলোর সূচনা তাঁর কাছ থেকে। তবে তিনি চোখে দেখা আলোর কোনোটি নন। মাআরিফুল কুরআন বলে, এখানে শব্দটির উদ্দেশ্য মুনাওয়ির, অর্থাৎ যিনি আলো দান করেন, আর এ বিষয়ে আলেমদের ঐকমত্যের কথা জানায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Light Is Pictured",
          "bn": "দৃষ্টান্তটি কার আলোর"
        },
        "p": [
          {
            "en": "Mathalu nurihi, the likeness of his light: to whom does the pronoun return? Ibn Kathir names two views. On the first it returns to Allah, the likeness of His guidance in the believer's heart, which he credits to Ibn 'Abbas. On the second it returns to the believer, whom the context implies. Al-Baghawi reports that Ibn Mas'ud recited it the likeness of His light in the heart of the believer, and that Sa'id ibn Jubayr reported from Ibn 'Abbas: the likeness of His light which He gave the believer.",
            "bn": "মাসালু নূরিহী, তার আলোর দৃষ্টান্ত। এখানে সর্বনামটি কার দিকে ফিরেছে? ইবন কাসীর দুটি মত উল্লেখ করেন। প্রথম মতে তা ফিরেছে আল্লাহর দিকে, অর্থাৎ মুমিনের অন্তরে তাঁর হিদায়াতের দৃষ্টান্ত। এ মত তিনি ইবন আব্বাস (রাঃ)-এর বলে জানান। দ্বিতীয় মতে তা ফিরেছে মুমিনের দিকে, প্রসঙ্গ থেকেই যাকে বোঝা যায়। বাগাভী জানান, ইবন মাসউদ (রাঃ) পড়তেন: মুমিনের অন্তরে তাঁর আলোর দৃষ্টান্ত। আর সাঈদ ইবন জুবাইর ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: তাঁর সেই আলোর দৃষ্টান্ত, যা তিনি মুমিনকে দিয়েছেন।"
          },
          {
            "en": "Ubayy ibn Ka'b, in at-Tabari and Ibn Kathir, takes it of the believer: Allah began with the light of Himself, then mentioned the light of the believer. Ubayy recited it the likeness of the light of whoever believes in Him, a servant in whose breast Allah placed the Qur'an and faith. Sa'id ibn Jubayr and ad-Dahhak say the same in at-Tabari. A second line takes it of Muhammad ﷺ. Asked by Ibn 'Abbas, Ka'b al-Ahbar said: the likeness of His light is the likeness of Muhammad ﷺ. At-Tabari also has Sa'id ibn Jubayr saying Muhammad ﷺ.",
            "bn": "তাবারী ও ইবন কাসীরের বর্ণনায় উবাই ইবন কা'ব (রাঃ) একে মুমিনের দিকে নেন: আল্লাহ শুরু করেছেন নিজের আলোর কথা দিয়ে, তারপর বলেছেন মুমিনের আলোর কথা। উবাই (রাঃ) পড়তেন: যে তাঁর প্রতি ঈমান এনেছে, তার আলোর দৃষ্টান্ত। অর্থাৎ এমন বান্দা, যার বুকে আল্লাহ কুরআন ও ঈমান রেখে দিয়েছেন। তাবারীতে সাঈদ ইবন জুবাইর ও দাহহাকও একই কথা বলেন। দ্বিতীয় ধারার মতে এ দৃষ্টান্ত মুহাম্মাদ ﷺ-এর। ইবন আব্বাস (রাঃ)-এর প্রশ্নের জবাবে কা'ব আল-আহবার বলেন, তাঁর আলোর দৃষ্টান্ত মুহাম্মাদ ﷺ-এর দৃষ্টান্ত। তাবারী সাঈদ ইবন জুবাইর থেকেও 'মুহাম্মাদ ﷺ' কথাটি আনেন।"
          },
          {
            "en": "A third line takes it of the Qur'an: al-Hasan says the likeness of this Qur'an in the heart, and Ibn Zayd the light of the Qur'an sent down to His messenger and servants. Ibn 'Abbas, through al-'Awfi, calls it a parable for obedience to Him, which Allah named light. At-Tabari judges the Qur'an reading soundest. Al-Qurtubi relays Ibn 'Atiyya's objection that these views return the pronoun to someone not yet mentioned. The article picks none of them.",
            "bn": "তৃতীয় ধারা একে কুরআনের দিকে নেয়। হাসান বলেন, অন্তরে এই কুরআনের দৃষ্টান্ত। ইবন যায়দ বলেন, তাঁর রাসূল ও বান্দাদের উপর নাযিল হওয়া কুরআনের আলো। আওফীর সূত্রে ইবন আব্বাস (রাঃ) একে বলেন তাঁর আনুগত্যের দৃষ্টান্ত, যাকে আল্লাহ আলো নাম দিয়েছেন। তাবারীর মতে কুরআনের ব্যাখ্যাটিই সবচেয়ে সঠিক। কুরতুবী ইবন আতিয়্যার আপত্তি তুলে ধরেন যে এসব মতে সর্বনাম এমন কারও দিকে ফেরে, যার উল্লেখ আগে আসেনি। এ লেখা এদের কোনোটিকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Niche, Wick and Glass",
          "bn": "তাক, সলতে আর কাঁচ"
        },
        "p": [
          {
            "en": "Ka-mishkatin: like a niche. Al-Qurtubi defines it as a recess in the wall with no opening through it, citing Ibn Jubayr and most commentators, and notes that it gathers light, so a lamp shines brighter there. The Muyassar and as-Sa'di agree: it keeps the lamp's light from scattering. Ibn Kathir prefers another gloss, from Ibn 'Abbas, Mujahid and Muhammad ibn Ka'b: the place of the wick in the lamp, since within it a lamp follows.",
            "bn": "কামিশকাতিন: যেন একটি তাক। কুরতুবী ইবন জুবাইর ও অধিকাংশ তাফসীরকারের বরাতে এর সংজ্ঞা দেন: দেয়ালের এমন খোপ, যার ভেতর দিয়ে কোনো ফাঁক নেই। তিনি বলেন, এমন খোপ আলো জমিয়ে রাখে, তাই সেখানে প্রদীপ বেশি উজ্জ্বল হয়। মুয়াসসার ও সা'দীও একমত: খোপটি প্রদীপের আলো ছড়িয়ে যেতে দেয় না। ইবন কাসীর অন্য ব্যাখ্যাটি অগ্রাধিকার দেন, যা ইবন আব্বাস (রাঃ), মুজাহিদ ও মুহাম্মাদ ইবন কা'ব থেকে এসেছে: প্রদীপের যেখানে সলতে থাকে। কারণ এরপরই আসছে 'তাতে একটি প্রদীপ'।"
          },
          {
            "en": "Fiha misbah: in it a lamp. Ibn Kathir calls the misbah the burning wick that gives light; Ubayy says the misbah is the light, the Qur'an and faith in the believer's breast. Al-misbahu fi zujajah: the lamp is in glass. Al-Baghawi quotes az-Zajjaj: light shows more clearly in it than in anything else, and its brightness grows in glass. Ubayy and others, in Ibn Kathir, make the glass the counterpart of the believer's heart. In Ka'b's reading, in at-Tabari, the lamp is the Prophet's heart and the glass his breast.",
            "bn": "ফীহা মিসবাহ: তাতে একটি প্রদীপ। ইবন কাসীর বলেন, মিসবাহ হল জ্বলন্ত সলতে, যা আলো দেয়। উবাই (রাঃ) বলেন, মিসবাহ হল আলো, অর্থাৎ মুমিনের বুকে থাকা কুরআন ও ঈমান। আল-মিসবাহু ফী যুজাজাহ: প্রদীপটি কাঁচের ভেতরে। বাগাভী যাজ্জাজের কথা আনেন: কাঁচের ভেতরে আলো অন্য যেকোনো কিছুর চেয়ে স্পষ্ট দেখায়, আর কাঁচে তার উজ্জ্বলতা বাড়ে। ইবন কাসীরের বর্ণনায় উবাই (রাঃ) ও আরও অনেকে কাঁচকে মুমিনের অন্তরের প্রতিরূপ ধরেন। তাবারীতে কা'বের ব্যাখ্যায় প্রদীপ হল নবী ﷺ-এর অন্তর, আর কাঁচ তাঁর বুক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Star Like a Pearl",
          "bn": "মুক্তার মতো উজ্জ্বল তারা"
        },
        "p": [
          {
            "en": "Az-zujajatu ka-annaha kawkabun durriy: the glass as if it were a pearly star. Al-Qurtubi lists the readings. Ibn 'Amir and Hafs from 'Asim read durriyy, linked to durr, pearl, for its whiteness and clarity. Hamza and Abu Bakr from 'Asim read durri', and Abu 'Amr and al-Kisa'i dirri', both from dar', pushing. Al-Baghawi explains that sense: a star thrown at the devils, brightest at that moment, or a star rising. At-Tabari prefers durriyy, since the commentators' glosses compare the glass to a pearl in clarity and beauty.",
            "bn": "আয-যুজাজাতু কাআন্নাহা কাওকাবুন দুররিয়্য: কাঁচটি যেন মুক্তার মতো এক তারা। কুরতুবী কিরাআতগুলো তুলে ধরেন। ইবন আমির এবং আসিম থেকে হাফস পড়েছেন দুররিয়্য, দুর অর্থাৎ মুক্তার সঙ্গে সম্পর্ক রেখে, তার শুভ্রতা ও স্বচ্ছতার জন্য। আসিম থেকে আবু বকর এবং হামযা পড়েছেন দুররী', আর আবু আমর ও কিসাঈ পড়েছেন দিররী'। দুটিই এসেছে দার' থেকে, যার অর্থ ঠেলে দেওয়া। বাগাভী এ অর্থ খুলে বলেন: শয়তানের দিকে ছুড়ে দেওয়া তারা, যা তখন সবচেয়ে উজ্জ্বল, অথবা উদিত হওয়া তারা। তাবারী দুররিয়্য পাঠকেই অগ্রাধিকার দেন, কারণ তাফসীরকারদের ব্যাখ্যা কাঁচকে স্বচ্ছতা ও সৌন্দর্যে মুক্তার সঙ্গে তুলনা করে।"
          },
          {
            "en": "The verb that follows is read in several ways, and at-Tabari sets them out, among them tawaqqada, it was kindled, with the lamp as subject; yuqadu, it is lit, again the lamp; and tuqadu, with the glass as subject. He calls them close in meaning and says that whichever a reciter reads, he is correct, though he likes tawaqqada best, because kindling belongs to the lamp and not to the glass.",
            "bn": "এর পরের ক্রিয়াপদটি কয়েকভাবে পড়া হয়, আর তাবারী সেগুলো সাজিয়ে দেখান। এর মধ্যে আছে তাওয়াক্কাদা, প্রজ্বলিত হল, যার কর্তা প্রদীপ। ইউকাদু, জ্বালানো হয়, এখানেও প্রদীপ। আর তূকাদু, যার কর্তা কাঁচ। তাঁর মতে এদের অর্থ কাছাকাছি, কারী যেটাই পড়ুন, সঠিক পড়েছেন। তবে তাঁর সবচেয়ে পছন্দ তাওয়াক্কাদা, কারণ জ্বলে ওঠা প্রদীপের গুণ, কাঁচের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "An Olive in the Open Sun",
          "bn": "খোলা রোদে জয়তুন গাছ"
        },
        "p": [
          {
            "en": "Yuqadu min shajaratin mubarakatin zaytunah: lit from a blessed tree, an olive, meaning from its oil, as al-Qurtubi and al-Baghawi both note. Al-Qurtubi glosses blessed as abundant in growth, and gives from Ibn 'Abbas a list of the olive's uses: its oil lights lamps and is food and ointment, it serves in tanning, and its wood and pressings are burned as fuel. Al-Baghawi calls its oil the brightest and clearest of oils.",
            "bn": "ইউকাদু মিন শাজারাতিম মুবারাকাতিন যাইতূনাহ: বরকতময় এক গাছ, জয়তুন, তা থেকে জ্বালানো হয়। কুরতুবী ও বাগাভী দুজনেই বলেন, এর মানে সেই গাছের তেল থেকে। কুরতুবী 'মুবারাকা' শব্দের অর্থ করেন প্রচুর বৃদ্ধি পাওয়া। ইবন আব্বাস (রাঃ) থেকে তিনি জয়তুনের উপকারের তালিকাও আনেন: এর তেলে প্রদীপ জ্বলে, তা খাবার ও মালিশের তেল, চামড়া পাকাতে কাজে লাগে, আর এর কাঠ ও ছোবড়া জ্বালানি হয়। বাগাভী বলেন, এর তেল সব তেলের মধ্যে সবচেয়ে উজ্জ্বল ও স্বচ্ছ আলো দেয়।"
          },
          {
            "en": "La sharqiyyatin wa la gharbiyyah: neither of the east nor of the west. Ibn 'Abbas through 'Ikrima, 'Ikrima himself, Mujahid and Sa'id ibn Jubayr describe a tree in open ground that nothing screens, so the sun reaches it at rising and at setting, which is best for its oil. At-Tabari and Ibn Kathir both prefer this, as do the Muyassar and as-Sa'di, who likens it to the olives of Sham. At-Tabari reasons that the verse praises the oil's purity, and a tree that is both eastern and western yields the purest.",
            "bn": "লা শারকিয়্যাতিউঁ ওয়ালা গারবিয়্যাহ: না পূর্বের, না পশ্চিমের। ইকরিমার সূত্রে ইবন আব্বাস (রাঃ), ইকরিমা নিজে, মুজাহিদ ও সাঈদ ইবন জুবাইর এমন গাছের কথা বলেন, যা খোলা জায়গায় দাঁড়িয়ে, কোনো কিছুর আড়ালে নয়। ফলে সূর্য ওঠার সময়ও তার গায়ে রোদ পড়ে, ডোবার সময়ও। এতে তেল সবচেয়ে ভালো হয়। তাবারী ও ইবন কাসীর দুজনেই এ মত অগ্রাধিকার দেন, মুয়াসসার ও সা'দীও এটাই বলেন। সা'দী একে শামের জয়তুনের সঙ্গে তুলনা করেন। তাবারীর যুক্তি, আয়াত তেলের স্বচ্ছতার প্রশংসা করছে, আর যে গাছ একসঙ্গে পূর্বমুখী ও পশ্চিমমুখী, তার তেলই সবচেয়ে খাঁটি।"
          },
          {
            "en": "Other reports pull another way. Ibn 'Abbas, in a different chain in at-Tabari, describes a tree in the midst of other trees; Ibn 'Atiyya, in al-Qurtubi, says this is not sound from Ibn 'Abbas, since fruit kept from the sun spoils. Ubayy reads it as a green, tender tree the sun never strikes, like the believer shielded from trials. Al-Hasan says: by Allah, were this tree on earth it would be eastern or western; it is a parable Allah struck for His light. Ibn Zayd places it in Sham.",
            "bn": "অন্য কিছু বর্ণনা আবার উল্টো দিকে টানে। তাবারীতে ভিন্ন এক সূত্রে ইবন আব্বাস (রাঃ) বলেন, গাছটি অন্য গাছের মাঝখানে। কুরতুবীতে ইবন আতিয়্যা বলেন, এ কথা ইবন আব্বাস (রাঃ) থেকে সঠিকভাবে প্রমাণিত নয়, কারণ রোদ না পাওয়া ফল নষ্ট হয়ে যায়। উবাই (রাঃ) একে পড়েন এমন সবুজ কোমল গাছ হিসেবে, যার গায়ে রোদ কখনো লাগে না, ঠিক যেমন মুমিন ফিতনা থেকে সুরক্ষিত থাকে। হাসান বলেন, আল্লাহর কসম, এ গাছ পৃথিবীতে হলে হয় পূর্বের হত, নয় পশ্চিমের। এ তো আল্লাহর দেওয়া তাঁর আলোর দৃষ্টান্ত। ইবন যায়দ একে শামের গাছ বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Light Upon Light",
          "bn": "আলোর উপরে আলো"
        },
        "p": [
          {
            "en": "Yakadu zaytuha yudi'u wa law lam tamsashu nar: its oil would almost glow though no fire touched it. Ibn 'Abbas applies this to the believer's heart, which almost acts on guidance before knowledge reaches it; when knowledge comes, it gains guidance upon guidance, as Ibrahim (AS) said of the star, this is my Lord (6:76), before anyone told him he had a Lord. As-Sa'di likens the pure oil to the fitrah, ready for divine teaching. Ka'b says Muhammad ﷺ almost showed he was a prophet before he spoke.",
            "bn": "ইয়াকাদু যাইতুহা ইউদীউ ওয়ালাও লাম তামসাসহু নার: আগুন না ছুঁলেও এর তেল যেন জ্বলে উঠবে। ইবন আব্বাস (রাঃ) একে মুমিনের অন্তরের বেলায় খাটান। জ্ঞান পৌঁছানোর আগেই সে অন্তর হিদায়াত অনুযায়ী চলতে উদ্যত থাকে, আর জ্ঞান এলে হিদায়াতের উপর হিদায়াত পায়। যেমন ইবরাহীম (আঃ), কেউ তাঁকে রবের কথা জানানোর আগেই, তারা দেখে বলেছিলেন: এ আমার রব (৬:৭৬)। সা'দী খাঁটি তেলকে তুলনা করেন ফিতরাতের সঙ্গে, যা আল্লাহর শিক্ষা গ্রহণের জন্য প্রস্তুত। কা'ব বলেন, মুহাম্মাদ ﷺ মুখ খোলার আগেই তাঁর নবী হওয়া প্রায় প্রকাশ পেয়ে যেত।"
          },
          {
            "en": "Nurun 'ala nur: light upon light. Mujahid and as-Suddi say the light of the fire and the light of the oil, and as-Suddi adds that the light of the Qur'an and of faith likewise shine only together. Ibn 'Abbas, through al-'Awfi, says the servant's faith and his deeds. Ubayy says the believer moves among five lights: his speech, his deeds, his coming in, his going out, and his return to light on the Day of Resurrection. At-Tabari reads it as the Qur'an, a light upon the proofs Allah set out before it came.",
            "bn": "নূরুন আলা নূর: আলোর উপরে আলো। মুজাহিদ ও সুদ্দী বলেন, আগুনের আলো আর তেলের আলো। সুদ্দী যোগ করেন, কুরআনের আলো আর ঈমানের আলোও তেমনি, একটি অন্যটি ছাড়া জ্বলে না। আওফীর সূত্রে ইবন আব্বাস (রাঃ) বলেন, বান্দার ঈমান আর তার আমল। উবাই (রাঃ) বলেন, মুমিন পাঁচ আলোর মধ্যে চলাফেরা করে: তার কথা আলো, তার আমল আলো, তার প্রবেশ আলো, তার প্রস্থান আলো, আর কিয়ামতের দিন তার ফেরা আলোর দিকে। তাবারী একে পড়েন কুরআন হিসেবে: আল্লাহ কুরআনের আগে যেসব প্রমাণ সাজিয়ে রেখেছিলেন, তার উপরে আরেক আলো।"
          }
        ]
      },
      {
        "h": {
          "en": "To His Light Whom He Wills",
          "bn": "যাকে চান, নিজ আলোর পথে"
        },
        "p": [
          {
            "en": "Yahdi-llahu li-nurihi man yasha': Allah guides to His light whom He wills. At-Tabari: He grants success in following His light, this Qur'an. Al-Baghawi has Ibn 'Abbas say: to the religion of Islam. Here Ibn Kathir attaches a hadith he cites from Ahmad and al-Bazzar; at-Tirmidhi (2642) has it from 'Abdullah ibn 'Amr: Indeed Allah, the Blessed and Exalted, created His creation in darkness, then He cast His Light upon them, so whoever is touched by that light he is guided, and whoever is not, he goes astray. It is for this reason that I say that the pens have dried with Allah's knowledge. At-Tirmidhi grades it hasan.",
            "bn": "ইয়াহদিল্লাহু লিনূরিহী মাই ইয়াশা: আল্লাহ যাকে চান, নিজের আলোর দিকে পথ দেখান। তাবারী বলেন, তিনি নিজের আলো, অর্থাৎ এই কুরআন মেনে চলার তাওফীক দেন। বাগাভীতে ইবন আব্বাস (রাঃ) বলেন: দ্বীন ইসলামের দিকে। এখানে ইবন কাসীর একটি হাদীস আনেন আহমাদ ও বাযযারের বরাতে। তিরমিযী (২৬৪২) আবদুল্লাহ ইবন আমর (রাঃ) থেকে এটি বর্ণনা করেছেন: নিশ্চয়ই আল্লাহ তাআলা তাঁর সৃষ্টিকে অন্ধকারে সৃষ্টি করেছেন, তারপর তাদের উপর তাঁর আলো ফেলেছেন। সেই আলো যার গায়ে লেগেছে, সে হিদায়াত পেয়েছে, আর যার গায়ে লাগেনি, সে পথ হারিয়েছে। এজন্যই আমি বলি, আল্লাহর জ্ঞান অনুযায়ী কলম শুকিয়ে গেছে। তিরমিযী একে হাসান বলেছেন।"
          },
          {
            "en": "As-Sa'di reads whom He wills as those He knows to be pure and growing, and al-Qurtubi takes the closing words, and Allah is Knowing of all things, as knowing the guided and the astray. The Muyassar on 24:36 places this shining light in mosques that Allah ordered raised, where His name is remembered, kept by men whom trade does not distract from His remembrance (24:37). Then 24:39 turns to those who disbelieve, whose deeds are a mirage.",
            "bn": "সা'দী 'যাকে চান' কথাটির অর্থ করেন: যাদের তিনি পবিত্র ও বর্ধিষ্ণু বলে জানেন। আর কুরতুবী শেষ কথাটি, আল্লাহ সবকিছু জানেন, বোঝেন এভাবে: কে হিদায়াত পেল আর কে পথ হারাল, তিনি জানেন। ২৪:৩৬ আয়াতে মুয়াসসার বলে, এই উজ্জ্বল আলো সেই মসজিদগুলোতে, যেগুলো উঁচু করার নির্দেশ আল্লাহ দিয়েছেন, যেখানে তাঁর নাম স্মরণ হয়। সেখানে আছে এমন মানুষ, ব্যবসা যাদের তাঁর জিকির থেকে ভুলিয়ে রাখে না (২৪:৩৭)। তারপর ২৪:৩৯ ফিরে যায় কাফিরদের দিকে, যাদের আমল মরীচিকা।"
          }
        ]
      }
    ]
  },
  "24:39": {
    "sections": [
      {
        "h": {
          "en": "After the Lamp, a Mirage",
          "bn": "প্রদীপের পরে মরীচিকা"
        },
        "p": [
          {
            "en": "Wa-lladhina kafaru a'maluhum ka-sarabin bi-qi'ah: and those who disbelieved, their deeds are like a mirage on a level plain. Al-Qurtubi explains the placement in a single clause: having struck the parable of the believer, Allah struck the parable of the disbeliever. The believer's side began with the Light verse, 24:35, and ran through the houses where His name is remembered, the men whom trade does not distract, and the reward in 24:38, the best of what they did and more from His bounty.",
            "bn": "ওয়াল্লাযীনা কাফারূ আ'মালুহুম কাসারাবিম বিকী'আহ: আর যারা কুফরি করেছে, তাদের আমল সমতল প্রান্তরের মরীচিকার মতো। আয়াতটি এখানে কেন, কুরতুবী তা এক বাক্যে বলে দেন। মুমিনের উপমা দেওয়ার পর আল্লাহ কাফিরের উপমা দিলেন। মুমিনের দিকটা শুরু হয়েছিল ২৪:৩৫ আয়াতের নূরের উপমা দিয়ে। তারপর এসেছে সেই ঘরগুলোর কথা যেখানে তাঁর নাম স্মরণ করা হয়, সেই মানুষদের কথা যাদের ব্যবসা-বাণিজ্য গাফেল করে না। শেষে ২৪:৩৮ আয়াতের প্রতিদান: তাদের সেরা আমলের বিনিময়, সঙ্গে তাঁর অনুগ্রহ থেকে আরও বেশি।"
          },
          {
            "en": "Ma'arif al-Qur'an marks the same hinge. So far, it says, the righteous believers were described, whose chests are niches for the light of guidance; verses 39 and 40 turn to disbelievers who were given that light in their nature but turned away when revelation reached them, and stayed in darkness. At-Tabari names the people of the verse as those who denied the oneness of their Lord and belied this Qur'an and him who brought it. The Muyassar says: those who disbelieved in their Lord and belied His messengers.",
            "bn": "মাআরিফুল কুরআনও এই মোড়টা চিহ্নিত করে। এতক্ষণ বলা হয়েছে নেককার মুমিনদের কথা, যাদের বুক হেদায়াতের নূর রাখার তাক। ৩৯ ও ৪০ আয়াতে আসছে সেই কাফিরদের কথা, যাদের স্বভাবে আল্লাহ ওই নূর দিয়েছিলেন, কিন্তু ওহি পৌঁছালে তারা মুখ ফিরিয়ে নিল আর অন্ধকারেই থেকে গেল। তাবারী আয়াতের লোকদের পরিচয় দেন এভাবে: যারা তাদের রবের তাওহীদ অস্বীকার করেছে, এই কুরআনকে মিথ্যা বলেছে, আর যিনি তা নিয়ে এসেছেন তাঁকেও। মুয়াসসার বলে: যারা তাদের রবের সঙ্গে কুফরি করেছে এবং তাঁর রাসূলদের মিথ্যা বলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Shimmer on Level Ground",
          "bn": "সমতল ভূমিতে ঝিলমিল"
        },
        "p": [
          {
            "en": "The commentators keep the sarab apart from its cousin, the al. At-Tabari says the sarab is what clings to the ground, at midday when the heat grows fierce, while the al looks like water hanging between sky and earth and comes early in the day. Ibn Kathir keeps the same division. Al-Qurtubi gives the name's origin: it is called sarab because it yasrubu, runs along like water, and it appears only in open country and heat, where the thirsty man is deceived by it. Al-Baghawi adds what happens up close: it scatters, and nothing is seen.",
            "bn": "তাফসীরকারেরা সারাবকে আলাদা রাখেন তার কাছাকাছি আরেক জিনিস 'আল' থেকে। তাবারী বলেন, সারাব মাটির সঙ্গে লেপ্টে থাকে, দেখা দেয় দুপুরে যখন গরম তীব্র হয়। আর আল দেখায় আসমান ও জমিনের মাঝখানে ঝুলে থাকা পানির মতো, আসে দিনের শুরুতে। ইবন কাসীরও একই ভাগ রাখেন। কুরতুবী নামের উৎস বলেন: একে সারাব বলা হয় কারণ তা ইয়াসরুবু, অর্থাৎ পানির মতো বয়ে চলে। খোলা প্রান্তর আর গরম ছাড়া তা দেখা দেয় না, আর সেখানেই পিপাসার্ত মানুষ ধোঁকা খায়। কাছে গেলে কী হয়, বাগাভী তা যোগ করেন: তা মিলিয়ে যায়, কিছুই আর চোখে পড়ে না।"
          },
          {
            "en": "Bi-qi'ah places the mirage. At-Tabari and Ibn Kathir take qi'ah as the plural of qa', like jirah from jar, and define the qa' as ground that spreads out wide and level, where the mirage forms; Ibn 'Abbas, in at-Tabari's chain, says simply: level ground. Al-Qurtubi records the other view, from Abu 'Ubaydah through an-Nahhas, that qi'ah and qa' are a single word in the singular. He adds that the qa' bears no plants and that its root sense is a low place where water settles. As-Sa'di glosses it as ground with no tree and no plant.",
            "bn": "বিকী'আহ শব্দটা মরীচিকার জায়গা দেখিয়ে দেয়। তাবারী ও ইবন কাসীর কী'আহকে কা' শব্দের বহুবচন ধরেন, যেমন জার থেকে জীরাহ। কা' মানে চওড়া হয়ে বিছিয়ে থাকা সমতল ভূমি, যেখানে মরীচিকা দেখা দেয়। তাবারীর সনদে ইবন আব্বাস (রাঃ) শুধু বলেন: সমতল ভূমি। কুরতুবী অন্য মতটিও আনেন, নাহহাসের মাধ্যমে আবু উবাইদা থেকে: কী'আহ আর কা' আসলে একবচনের একই শব্দ। তিনি আরও বলেন, কা'-তে কোনো গাছপালা জন্মায় না, আর শব্দটির মূল অর্থ নিচু জায়গা যেখানে পানি জমে থাকে। সা'দীর ব্যাখ্যা: এমন ভূমি যেখানে গাছও নেই, চারাও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Parched Traveller",
          "bn": "তৃষ্ণায় কাতর পথিক"
        },
        "p": [
          {
            "en": "Yahsabuhu az-zam'anu ma'an: the parched man reckons it water. At-Tabari reads az-zam'an as the thirsty among people, and Ibn Kathir as whoever needs water and heads for it to drink. As-Sa'di dwells on why the verse picks the thirsty: a man in severe thirst imagines what others would not, because of the thirst he carries, and this is a false reckoning. When he reaches it and finds nothing, as-Sa'di continues, he regrets bitterly, and his thirst grows worse, because his hope has been cut off.",
            "bn": "ইয়াহসাবুহুয যাম'আনু মা'আন: পিপাসার্ত লোকটি একে পানি মনে করে। তাবারীর ব্যাখ্যায় যাম'আন মানে মানুষের মধ্যে যে তৃষ্ণার্ত। ইবন কাসীরের ভাষায়, যার পানির দরকার, আর তাই পান করতে সেদিকে ছুটে যায়। আয়াত কেন তৃষ্ণার্তকেই বেছে নিল, সা'দী তা নিয়ে ভাবেন। প্রচণ্ড তৃষ্ণায় কাতর মানুষ এমন কিছু কল্পনা করে যা অন্যরা করে না, কারণ তৃষ্ণা তাকে তাড়া করছে। এ হিসাবটাই ভুল। সা'দী আরও বলেন, পৌঁছে কিছু না পেয়ে সে ভীষণ আফসোস করে, আর আশা ভেঙে যাওয়ায় তার তৃষ্ণা আরও বেড়ে যায়।"
          },
          {
            "en": "At-Tabari raises a question a careful reader might ask. If the mirage is nothing, what does the pronoun in ja'ahu, he came to it, point to? His answer: it is something seen from afar, like mist that looks thick at a distance, or like motes of dust, and when a man comes near it thins and becomes like air. He also allows a second reading, that the man came to the place of the mirage, the verse naming the mirage in place of its site. Al-Baghawi records that second view too, introduced with it was said.",
            "bn": "সতর্ক পাঠকের মনে যে প্রশ্ন জাগতে পারে, তাবারী নিজেই তা তোলেন। মরীচিকা যদি কিছুই না হয়, তবে জা'আহু, সে তার কাছে এল, এখানে 'তার' বলতে কী বোঝায়? তাঁর জবাব: মরীচিকা এমন জিনিস যা দূর থেকে দেখা যায়, যেমন কুয়াশা দূর থেকে ঘন দেখায়, কিংবা বাতাসে ভাসা ধূলিকণা। মানুষ কাছে গেলে তা পাতলা হয়ে বাতাসের মতো হয়ে যায়। তিনি আরেকটি অর্থও সম্ভব মনে করেন: লোকটি মরীচিকার জায়গায় এল, আয়াত জায়গার বদলে মরীচিকার নাম নিয়েছে। বাগাভীও এই দ্বিতীয় মতটি 'বলা হয়' বলে উল্লেখ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "When He Reaches It",
          "bn": "যখন সে পৌঁছে যায়"
        },
        "p": [
          {
            "en": "When does the traveller reach the mirage? The early authorities in at-Tabari's chains place it at death. Mujahid says his coming to it is his death and his leaving the world, and that he finds Allah at that leaving. Qatadah says the disbeliever, when he dies, does not find his deed to be anything. Ibn 'Abbas, in another chain, describes a man whose thirst grew severe, who saw a mirage, went after it, reached it, found nothing, and was taken by death at that moment. Al-Baghawi says it comes when the angel of death comes.",
            "bn": "পথিক মরীচিকার কাছে পৌঁছায় কখন? তাবারীর সনদে আসা প্রথম যুগের আলিমরা এটাকে মৃত্যুর মুহূর্ত ধরেন। মুজাহিদ বলেন, তার কাছে আসা মানে তার মৃত্যু, দুনিয়া ছেড়ে যাওয়া, আর সেই বিদায়ের সময়েই সে আল্লাহকে পায়। কাতাদা বলেন, কাফির মারা গেলে দেখে তার আমল কিছুই না। আরেক সনদে ইবন আব্বাস (রাঃ) এক লোকের ছবি আঁকেন: তৃষ্ণা তীব্র হলে সে মরীচিকা দেখল, পিছু নিল, কাছে পৌঁছাল, কিছুই পেল না, আর ঠিক তখনই তার মৃত্যু হলো। বাগাভী বলেন, এ মুহূর্ত আসে যখন মৃত্যুর ফেরেশতা আসেন।"
          },
          {
            "en": "Others place the arrival on the Day of Resurrection. Ubayy ibn Ka'b, narrated by at-Tabari, says the disbeliever comes on the Day of Resurrection thinking he has good with Allah, finds none, and is entered into the Fire. Ibn Kathir, as-Sa'di and the Muyassar speak of the Day of Resurrection or the Day of Recompense, and al-Qurtubi of coming before Allah. At-Tabari holds the two together: at his perishing the disbeliever found Allah on the watch for him, and on the Day of Resurrection He paid him the reckoning of the deeds he did in the world.",
            "bn": "অন্যরা পৌঁছানোর মুহূর্তকে কিয়ামতের দিন ধরেন। তাবারীর বর্ণনায় উবাই ইবন কা'ব (রাঃ) বলেন, কাফির কিয়ামতের দিন আসবে এই ভেবে যে আল্লাহর কাছে তার কিছু কল্যাণ জমা আছে। কিছুই পাবে না, আর তাকে জাহান্নামে প্রবেশ করানো হবে। ইবন কাসীর, সা'দী ও মুয়াসসার বলেন কিয়ামতের দিন বা প্রতিদানের দিনের কথা, আর কুরতুবী বলেন আল্লাহর সামনে হাজির হওয়ার কথা। তাবারী দুই মতকে এক সঙ্গে রাখেন: মৃত্যুর সময় কাফির আল্লাহকে পেল তার জন্য সজাগ প্রহরায়, আর কিয়ামতের দিন তিনি তাকে দুনিয়ায় করা আমলের পুরো হিসাব চুকিয়ে দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "He Found Allah There",
          "bn": "সেখানে সে পেল আল্লাহকে"
        },
        "p": [
          {
            "en": "Then the verse turns: wa wajada Allaha 'indahu fa-waffahu hisabah, and he found Allah there, and He paid him his account in full. At-Tabari, al-Qurtubi, al-Baghawi and the Muyassar all gloss the clause with the phrase bil-mirsad: he found Allah on the watch. Al-Baghawi reads 'indahu as at his deed, and reports that it was said the meaning is that he came before Allah. Al-Qurtubi records two further readings, each with it was said: he found Allah's promise of recompense for his deed, or Allah's command at his gathering. The meanings, he judges, are close.",
            "bn": "তারপর আয়াত মোড় নেয়: ওয়া ওয়াজাদাল্লাহা 'ইন্দাহু ফাওয়াফফাহু হিসাবাহ, আর সে সেখানে পেল আল্লাহকে, অতঃপর তিনি তার হিসাব পুরোপুরি চুকিয়ে দিলেন। তাবারী, কুরতুবী, বাগাভী ও মুয়াসসার সবাই অংশটির ব্যাখ্যায় একই কথা বলেন, বিল-মিরসাদ: সে আল্লাহকে পেল সজাগ প্রহরায়। বাগাভীর মতে 'ইন্দাহু মানে তার আমলের কাছে। তিনি এটাও জানান, কেউ কেউ বলেছেন অর্থ হলো সে আল্লাহর সামনে হাজির হলো। কুরতুবী আরও দুটি ব্যাখ্যা আনেন, প্রতিটিই 'বলা হয়' দিয়ে: সে পেল তার আমলের প্রতিদানের ব্যাপারে আল্লাহর ওয়াদা, কিংবা হাশরের সময় আল্লাহর আদেশ। তাঁর বিচারে অর্থগুলো কাছাকাছি।"
          },
          {
            "en": "As-Sa'di draws out what the wording rules out. The deed did not simply vanish, neither for him nor against him; rather he found Allah with him, and nothing of his deed was hidden from Him, not even the groove on a date stone or the film around it, and none of it, little or much, will go missing. Wa-llahu sari'u al-hisab: at-Tabari explains that He needs no counting on fingers and no memorising by heart, for He knows it all before the servant acts and after. As-Sa'di and the Muyassar add, in identical words: let not the ignorant think that promise slow, for it must come.",
            "bn": "শব্দগুলো কী নাকচ করে দেয়, সা'দী তা খুলে বলেন। আমলটা এমনি হাওয়ায় মিলিয়ে যায়নি যে তার পক্ষেও কিছু রইল না, বিপক্ষেও না। বরং সে আল্লাহকে পেল তার কাছেই, আর তার আমলের কিছুই তাঁর কাছে গোপন রইল না, খেজুরের বিচির খাঁজ বা তার গায়ের পাতলা আবরণটুকুও না। কম-বেশি কিছুই হারাবে না। ওয়াল্লাহু সারী'উল হিসাব: তাবারী বলেন, তাঁর আঙুলে গোনার দরকার নেই, মনে রাখারও দরকার নেই, কারণ বান্দা কাজ করার আগেও তিনি সব জানেন, পরেও জানেন। সা'দী ও মুয়াসসার হুবহু একই ভাষায় যোগ করেন: অজ্ঞরা যেন সেই ওয়াদাকে দেরি মনে না করে, তা আসবেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Deeds With No Root",
          "bn": "শিকড়হীন আমল"
        },
        "p": [
          {
            "en": "Why is the water never there? At-Tabari's answer is short: the deed was done upon disbelief in Allah, so it brings no benefit. Al-Qurtubi says they relied on the reward of their deeds, and on coming before Allah found that reward voided by their disbelief, as the man at the mirage found only land without water. Ibn Kathir names two causes: nothing at all is found accepted, either for lack of sincerity or for not following the path of the Shari'ah. He sets 25:23 beside it: and We shall turn to what they did of deeds and make them scattered dust.",
            "bn": "পানি সেখানে কখনো থাকে না কেন? তাবারীর জবাব ছোট: আমলটা করা হয়েছিল আল্লাহর সঙ্গে কুফরির উপর দাঁড়িয়ে, তাই তা কোনো কাজে আসে না। কুরতুবী বলেন, তারা ভরসা করেছিল নিজেদের আমলের সওয়াবের উপর। আল্লাহর সামনে হাজির হয়ে দেখল, কুফরির কারণে সেই সওয়াব বাতিল হয়ে গেছে, ঠিক যেমন মরীচিকার পথিক পেল শুধু পানিহীন মাটি। ইবন কাসীর দুটি কারণ বলেন: কবুল হওয়া কিছুই পাওয়া যায় না, হয় ইখলাসের অভাবে, নয়তো শরিয়তের পথে না চলার কারণে। পাশে তিনি ২৫:২৩ আয়াত রাখেন: আর আমি তাদের কৃত আমলের দিকে অগ্রসর হব, তারপর সেগুলোকে বিক্ষিপ্ত ধূলিকণা বানিয়ে দেব।"
          },
          {
            "en": "As-Sa'di reads the ground itself into the parable. The qi'ah has no tree and no plant, and that, he says, is a likeness for their hearts, in which there is no good and no righteousness for deeds to grow in, because of the cause that prevents it, which is disbelief. He also describes how such deeds look to the ignorant: their outward form deceives, their image beguiles, and the doer himself, needing them as the thirsty need water, takes them for beneficial works.",
            "bn": "সা'দী জমিনটাকেও উপমার অংশ হিসেবে পড়েন। কী'আহতে গাছ নেই, চারাও নেই। তাঁর মতে এটা তাদের অন্তরের উপমা, যেখানে কোনো কল্যাণ নেই, নেকি নেই, যাতে আমল বেড়ে উঠতে পারে। বাধাটা হলো কুফর। এমন আমল অজ্ঞের চোখে কেমন দেখায়, তাও তিনি বলেন: বাইরের চেহারা ধোঁকা দেয়, কল্পনা মন ভোলায়। আর আমলকারী নিজেও, তৃষ্ণার্ত যেমন পানির মুখাপেক্ষী তেমনি সেগুলোর মুখাপেক্ষী হয়ে, সেগুলোকে উপকারী আমল ভেবে বসে।"
          },
          {
            "en": "On whom the verse concerns, al-Qurtubi gathers three reports, each in its narrator's name. Muqatil says it was revealed about Shaybah ibn Rabi'ah ibn 'Abd Shams, who lived as an ascetic seeking religion and disbelieved when the Prophet ﷺ came forth. Abu Sahl says it concerns the People of the Book; ad-Dahhak, the disbeliever's good deeds, such as joining ties of kinship and benefiting neighbours. Al-Qurtubi gives them without chains and prefers none. The Muyassar's examples run with ad-Dahhak's: keeping kinship ties and freeing captives.",
            "bn": "আয়াতটি কাদের নিয়ে, এ বিষয়ে কুরতুবী তিনটি বর্ণনা আনেন, প্রতিটি তার বর্ণনাকারীর নামে। মুকাতিল বলেন, আয়াতটি নাযিল হয়েছিল শাইবা ইবন রাবী'আ ইবন আবদে শামস সম্পর্কে। দ্বীনের খোঁজে সে সংসারবিরাগী জীবন কাটাত, কিন্তু নবী ﷺ আত্মপ্রকাশ করলে কুফরি করল। আবু সাহল বলেন, এটি আহলে কিতাব সম্পর্কে। দাহহাক বলেন, এটি কাফিরের ভালো কাজ নিয়ে, যেমন আত্মীয়তার সম্পর্ক রক্ষা ও প্রতিবেশীর উপকার। কুরতুবী এগুলো সনদ ছাড়াই আনেন, কোনোটিকে প্রাধান্য দেন না। মুয়াসসারের উদাহরণও দাহহাকের দিকেই যায়: আত্মীয়তার বন্ধন রক্ষা আর বন্দিমুক্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mirage Made of Fire",
          "bn": "আগুনের মরীচিকা"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches a single narration here, saying it is in the two Sahihs. It does not mention the verse, but it shows a mirage on the Day of Resurrection. It belongs to a long hadith of Abu Sa'id al-Khudri about that Day, which al-Bukhari records in his Sahih, no. 4581 in the Darussalam numbering; his placing it in the Sahih is his own grading of it as sound. The passage Ibn Kathir means comes after every nation is told to follow what it used to worship.",
            "bn": "ইবন কাসীর এখানে একটিমাত্র বর্ণনা যুক্ত করেন, আর বলেন তা দুই সহীহ গ্রন্থে আছে। বর্ণনাটিতে আয়াতের উল্লেখ নেই, তবে তাতে কিয়ামতের দিনের এক মরীচিকার ছবি আছে। এটি সেই দিন নিয়ে আবু সাঈদ খুদরী (রাঃ)-এর দীর্ঘ এক হাদীসের অংশ। বুখারী তা তাঁর সহীহ গ্রন্থে এনেছেন, দারুস সালাম গণনায় ৪৫৮১ নম্বরে। সহীহতে স্থান দেওয়াই তাঁর নিজের পক্ষ থেকে একে বিশুদ্ধ বলে গণ্য করা। ইবন কাসীর যে অংশের কথা বলছেন, তা আসে প্রত্যেক জাতিকে তাদের উপাস্যের পেছনে যেতে বলার পর।"
          },
          {
            "en": "In al-Bukhari's wording: “Then the Jews will be called upon and it will be said to them, 'Who do you use to worship?' They will say, 'We used to worship Ezra, the son of Allah.' It will be said to them, 'You are liars, for Allah has never taken anyone as a wife or a son. What do you want now?'”",
            "bn": "বুখারীর ভাষায়: “তারপর ইহুদিদের ডাকা হবে, তাদের বলা হবে, তোমরা কার ইবাদত করতে? তারা বলবে, আমরা আল্লাহর পুত্র উযাইরের ইবাদত করতাম। তাদের বলা হবে, তোমরা মিথ্যা বলেছ, আল্লাহ কোনো স্ত্রী বা সন্তান গ্রহণ করেননি। তাহলে তোমরা কী চাও?”"
          },
          {
            "en": "The narration goes on: “They will say, 'O our Lord! We are thirsty, so give us something to drink.' They will be directed and addressed thus, 'Will you drink,' whereupon they will be gathered unto Hell (Fire) which will look like a mirage whose different sides will be destroying each other. Then they will fall into the Fire.” Thirst, a false water and a ruinous arrival: the verse's parable, seen on that Day.",
            "bn": "বর্ণনা চলতে থাকে: “তারা বলবে, হে আমাদের রব, আমরা পিপাসার্ত, আমাদের পান করান। তখন ইশারা করে বলা হবে, তোমরা কি পানির কাছে যাবে না? অতঃপর তাদের জড়ো করা হবে জাহান্নামের দিকে, যা দেখতে মরীচিকার মতো, তার এক অংশ আরেক অংশকে চুরমার করছে। তারপর তারা একে একে আগুনে পড়ে যাবে।” তৃষ্ণা, মিথ্যা পানি, আর সর্বনাশা পৌঁছানো: আয়াতের উপমাই যেন সেদিন চোখের সামনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Parables, Two Kinds",
          "bn": "দুই উপমা, দুই দল"
        },
        "p": [
          {
            "en": "The next verse, 24:40, adds a second parable: darknesses in a deep sea, wave over wave, cloud above. Ibn Kathir calls the pair two parables for two kinds of disbelievers, as al-Baqarah opens with a fire parable and a water parable for the hypocrites, and ar-Ra'd gives water and fire parables for the guidance settled in hearts. In the abridged English Ibn Kathir, the mirage belongs to those who call others to their disbelief, whose ignorance is deep and advanced, and the darkness to those of simple ignorance who blindly follow the leaders of disbelief.",
            "bn": "পরের আয়াত, ২৪:৪০, আরেকটি উপমা যোগ করে: গভীর সমুদ্রের অন্ধকার, ঢেউয়ের উপর ঢেউ, তার উপর মেঘ। ইবন কাসীর এ জোড়াকে বলেন দুই ধরনের কাফিরের জন্য দুটি উপমা। যেমন সূরা বাকারার শুরুতে মুনাফিকদের জন্য আছে আগুনের উপমা আর পানির উপমা, আর সূরা রা'দে অন্তরে বসে যাওয়া হেদায়াতের জন্য পানি ও আগুনের উপমা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে মরীচিকা তাদের, যারা অন্যদের নিজেদের কুফরের দিকে ডাকে, যাদের অজ্ঞতা গভীর ও পাকা। আর অন্ধকার তাদের, যাদের অজ্ঞতা সরল, যারা কুফরের নেতাদের অন্ধভাবে অনুসরণ করে।"
          },
          {
            "en": "Ma'arif al-Qur'an divides the two kinds differently. The mirage is for disbelievers who believe in the Hereafter and expect reward for some of their good acts; the darkness is for those who deny the Day of Judgement altogether, and so lack even the illusory light the first group had. As-Sa'di does not divide the people at all: for him both are parables of the deeds of the disbelievers, in their futility, their going to waste and the regret of those who did them. Ubayy ibn Ka'b, in at-Tabari, says only: then He struck another parable.",
            "bn": "মাআরিফুল কুরআন দুই দলকে ভাগ করে অন্যভাবে। মরীচিকা সেই কাফিরদের জন্য, যারা আখিরাতে বিশ্বাস করে এবং নিজেদের কিছু ভালো কাজের প্রতিদান আশা করে। অন্ধকার তাদের জন্য, যারা বিচারের দিনকেই অস্বীকার করে, ফলে প্রথম দলের সেই ভ্রান্ত আলোটুকুও তাদের নেই। সা'দী মানুষগুলোকে আদৌ ভাগ করেন না। তাঁর কাছে দুটিই কাফিরদের আমলের উপমা: সেগুলো বাতিল, বৃথা গেছে, আর যারা করেছে তাদের জন্য রেখে গেছে আফসোস। তাবারীর বর্ণনায় উবাই ইবন কা'ব (রাঃ) শুধু বলেন: তারপর তিনি আরেকটি উপমা দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Testing One's Own Deeds",
          "bn": "নিজের আমল যাচাই"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes the deeds of those who disbelieved as the text describes them, and the hadith describes a scene on the Day of Resurrection; neither licenses anything against any living person or community, nor appoints the reader to weigh anyone else's deeds. The reckoning in the verse belongs to Allah, and it is He who is found at the mirage. What the parable hands the reader is a question about his own deeds and intentions.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি কুফরি করা লোকদের আমলের যে বর্ণনা দেয়, তা কেবল সেই বর্ণনাই। হাদীসটিও কিয়ামতের দিনের একটি দৃশ্যের বর্ণনা। কোনোটিই কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুর অনুমতি দেয় না, আর অন্যের আমল মাপার দায়িত্বও পাঠককে দেয় না। আয়াতের হিসাব আল্লাহর হাতে, মরীচিকার কাছে তাঁকেই পাওয়া যায়। উপমাটি পাঠকের হাতে তুলে দেয় শুধু একটি প্রশ্ন, তার নিজের আমল আর নিয়ত নিয়ে।"
          },
          {
            "en": "Ibn Kathir's two causes make a usable test when turned inward: was this done for Allah, and was it done the way He taught? As-Sa'di's thirsty man shows why the test is hard from far off: need makes a person see water where there is none, and a deed we want to be good looks good at a distance. The time to look closely is now, while the road can still be changed, and not on arrival, when the traveller in the parable finds bare ground and a reckoning.",
            "bn": "ইবন কাসীরের দুটি কারণ নিজের দিকে ফেরালে কাজের একটা পরীক্ষা হয়ে দাঁড়ায়: এটা কি আল্লাহর জন্য করা হয়েছে, আর তিনি যেভাবে শিখিয়েছেন সেভাবে? সা'দীর তৃষ্ণার্ত লোকটি দেখায়, দূর থেকে এ পরীক্ষা কেন কঠিন। প্রয়োজন মানুষকে এমন জায়গায় পানি দেখায় যেখানে পানি নেই। যে আমলকে আমরা ভালো দেখতে চাই, দূর থেকে তা ভালোই দেখায়। তাই খুঁটিয়ে দেখার সময় এখনই, যখন পথ বদলানো যায়। পৌঁছানোর পর নয়, যখন উপমার পথিক পায় কেবল খালি মাটি আর হিসাব।"
          }
        ]
      }
    ]
  },
  "24:40": {
    "sections": [
      {
        "h": {
          "en": "Or Like Darknesses",
          "bn": "অথবা অন্ধকারের মতো"
        },
        "p": [
          {
            "en": "Aw ka-zulumatin fi bahrin lujjiyy: or like darknesses in a fathomless sea. The verse is the second half of a pair. 24:39 likened the deeds of those who disbelieve to a mirage on a level plain, and this verse sets a second picture beside it. At-Tabari and al-Baghawi open with the same words: this is another parable Allah struck for the deeds of the disbelievers. At-Tabari names what the likeness holds: deeds done in error, corruption, straying and confusion, without guidance.",
            "bn": "আও কা-যুলুমাতিন ফী বাহরিন লুজ্জিয়্যিন: অথবা অতল সাগরের অন্ধকাররাশির মতো। আয়াতটি একজোড়া দৃষ্টান্তের দ্বিতীয় অংশ। ২৪:৩৯ আয়াত কাফিরদের আমলকে তুলনা করেছে সমতল প্রান্তরের মরীচিকার সঙ্গে, আর এ আয়াত তার পাশে আরেকটি ছবি রাখে। তাবারী ও বাগাভী দুজনেই শুরু করেন একই কথায়: এটি কাফিরদের আমলের জন্য আল্লাহর দেওয়া আরেকটি দৃষ্টান্ত। তুলনাটা কোথায়, তাবারী তা বলে দেন। এসব আমল করা হয়েছে ভুল, বিকৃতি, পথভ্রষ্টতা আর দিশাহারা অবস্থায়, হেদায়াত ছাড়াই।"
          },
          {
            "en": "Al-Qurtubi gathers the comment on the small word aw, or. Az-Zajjaj said: if you wish, liken them to the mirage, and if you wish, to the darknesses, so the word offers a choice, as in 2:19. Al-Jurjani read the two verses apart: the first speaks of the disbelievers' deeds, the second of their disbelief, joined to the deeds because disbelief is also a deed. Abu 'Ali took it as or like one in darknesses, since his hand needs a person. Al-Qushayri sums it up: for az-Zajjaj the likeness is of the deeds, for al-Jurjani of the disbelief, for Abu 'Ali of the disbeliever himself.",
            "bn": "ছোট্ট শব্দ 'আও', অর্থাৎ অথবা, নিয়ে যে আলোচনা হয়েছে, কুরতুবী তা এক জায়গায় এনেছেন। যাজ্জাজ বলেন, চাইলে তাদের তুলনা দাও মরীচিকার সঙ্গে, চাইলে অন্ধকারের সঙ্গে। তাঁর মতে শব্দটি এখানে বেছে নেওয়ার সুযোগ দেয়, যেমন ২:১৯ আয়াতে। জুরজানী দুই আয়াতকে আলাদা করে পড়েন। প্রথমটি কাফিরদের আমলের কথা, দ্বিতীয়টি তাদের কুফরের কথা। কুফরকে আমলের সঙ্গে জোড়া হয়েছে, কারণ কুফরও তাদের এক আমল। আবু আলী অর্থ করেন, অথবা অন্ধকারে থাকা এক ব্যক্তির মতো, কারণ পরে 'তার হাত' বলতে একজন মানুষ লাগে। কুশাইরী সারকথা বলেন: যাজ্জাজের কাছে তুলনাটা আমলের, জুরজানীর কাছে কুফরের, আর আবু আলীর কাছে স্বয়ং কাফিরের।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sea Without a Floor",
          "bn": "যে সাগরের তল নেই"
        },
        "p": [
          {
            "en": "Lujjiyy is formed from lujja. Qatada, in both Ibn Kathir and at-Tabari, gives one word: deep. At-Tabari explains that the sea is tied to the lujja to describe it as deep and full of water, and the lujja of a sea is its main mass. Al-Qurtubi calls it the sea whose bottom cannot be reached, and gives the verb: the sea iltajja when its waves crash into one another. As-Sa'di says: far its bottom, long its reach.",
            "bn": "লুজ্জিয়্য শব্দটি এসেছে লুজ্জা থেকে। ইবন কাসীর ও তাবারী দুজনের বর্ণনাতেই কাতাদা এক শব্দে অর্থ বলেন: গভীর। তাবারী ব্যাখ্যা করেন, সাগরকে লুজ্জার সঙ্গে যুক্ত করা হয়েছে এ কথা বোঝাতে যে তা গভীর আর পানিতে ভরা। সাগরের লুজ্জা মানে তার মূল বিস্তার। কুরতুবীর ভাষায় এ সেই সাগর যার তল নাগাল পাওয়া যায় না। তিনি ক্রিয়াপদটিও দেখান: ঢেউ যখন একটা আরেকটার গায়ে আছড়ে পড়ে, তখন বলা হয় সাগর 'ইলতাজ্জা' করেছে। সা'দী বলেন, তার তল বহু দূরে, বিস্তার বহু দীর্ঘ।"
          },
          {
            "en": "Yaghshahu mawjun min fawqihi mawjun min fawqihi sahab: a wave covers it, above which is a wave, above which is cloud. At-Tabari walks through it: a wave covers the sea; above that wave another wave covers it; above the second wave, which covers the first, a cloud. Al-Qurtubi adds what the stacking does to the one inside it: the fear of the wave, the fear of the wind and the fear of the cloud all gather at once.",
            "bn": "ইয়াগশাহু মাওজুম মিন ফাওকিহী মাওজুম মিন ফাওকিহী সাহাব: তাকে ঢেকে রাখে ঢেউ, তার উপরে ঢেউ, তার উপরে মেঘ। তাবারী ধাপে ধাপে বুঝিয়ে দেন। একটি ঢেউ সাগরকে ঢেকে রাখে, সেই ঢেউয়ের উপর আরেকটি ঢেউ এসে তাকে ঢাকে, আর প্রথম ঢেউয়ের উপর চড়া এই দ্বিতীয় ঢেউয়ের উপরে মেঘ। এই স্তূপ ভেতরের মানুষটির কী অবস্থা করে, কুরতুবী তা যোগ করেন। ঢেউয়ের ভয়, বাতাসের ভয় আর মেঘের ভয়, তিনটি একসঙ্গে এসে জমা হয়।"
          },
          {
            "en": "He records a second picture under it is said: a wave followed by a wave, one behind another until they seem stacked, which is most frightening when the waves come close and without a break. The cloud, he says, adds to fear in two ways. It has covered the stars by which one finds the way, and it brings the wind that rises with clouds and the rain that falls from them. Above the man at sea, then, the last guide is gone, and around him the sea is only rising.",
            "bn": "'বলা হয়' কথাটি দিয়ে তিনি আরেকটি ছবিও আনেন। ঢেউয়ের পেছনে ঢেউ, একটার পর একটা, এমনভাবে যে মনে হয় একটা আরেকটার উপর চেপে আছে। ঢেউ যখন ঘন ঘন, বিরতি ছাড়া আসে, তখনই সবচেয়ে বেশি ভয়। মেঘ ভয় বাড়ায় দুইভাবে, কুরতুবী বলেন। প্রথমত, যে তারা দেখে মানুষ পথ চেনে, মেঘ তা ঢেকে দিয়েছে। দ্বিতীয়ত, মেঘের সঙ্গে ওঠে বাতাস, আর তা থেকে নামে বৃষ্টি। ফলে সাগরে আটকে পড়া মানুষটির মাথার উপরে শেষ দিশাটুকুও হারিয়ে গেছে, আর চারপাশে সাগর কেবল ফুঁসে উঠছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dark Laid Over Dark",
          "bn": "আঁধারের উপর আঁধার"
        },
        "p": [
          {
            "en": "Zulumatun ba'duha fawqa ba'd: darknesses, some above others. Al-Baghawi counts three, the dark of the cloud, of the wave and of the sea, each laid on the next. Al-Qurtubi's list adds the night, so that whoever is inside sees nothing, not even a star. As-Sa'di builds it upward: the deep sea, over it the piled waves, over that the black clouds, over that the pitch-dark night. Al-Qurtubi also records, under it is said, that the darknesses are hardships; at-Tabari gives Ibn Zayd's gloss: evil, some upon other.",
            "bn": "যুলুমাতুন বা'দুহা ফাওকা বা'দ: অন্ধকাররাশি, একটার উপর আরেকটা। বাগাভী গোনেন তিনটি: মেঘের অন্ধকার, ঢেউয়ের অন্ধকার আর সাগরের অন্ধকার, প্রতিটি পরেরটার উপর চাপানো। কুরতুবীর তালিকায় যোগ হয় রাত, ফলে ভেতরে যে আছে সে কিছুই দেখে না, একটা তারাও না। সা'দী স্তরগুলো নিচ থেকে সাজান। গভীর সাগর, তার উপর জমে ওঠা ঢেউ, তার উপর কালো মেঘ, আর তারও উপর ঘুটঘুটে রাত। কুরতুবী 'বলা হয়' দিয়ে আরেকটি মতও আনেন: অন্ধকার মানে বিপদ, একটার উপর আরেকটা। তাবারী উদ্ধৃত করেন ইবন যায়দের ব্যাখ্যা: অনিষ্ট, একটার উপর আরেকটা।"
          },
          {
            "en": "Then the commentators lay the picture back over the heart. Ibn 'Abbas, in a report at-Tabari gives with its chain and Ibn Kathir cites through al-'Awfi, said: by the darknesses He means the deeds, and by the deep sea the heart of man; darkness upon darkness is the covering over the heart, the hearing and the sight, as in 2:7 and 45:23. Al-Baghawi spells out the rest: the waves are the ignorance, doubt and confusion that cover the heart, and the cloud is the seal and the stamp set upon it.",
            "bn": "এরপর তাফসীরকারেরা ছবিটা ফিরিয়ে আনেন অন্তরের উপর। ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা তাবারী সনদসহ এনেছেন, আর ইবন কাসীর তা উদ্ধৃত করেছেন আওফীর সূত্রে। তাতে তিনি বলেন: অন্ধকার মানে আমল, আর অতল সাগর মানে মানুষের অন্তর। অন্ধকারের উপর অন্ধকার হলো অন্তর, কান আর চোখের উপরের আবরণ, যেমনটা ২:৭ ও ৪৫:২৩ আয়াতে এসেছে। বাগাভী বাকিটাও খুলে বলেন। ঢেউ হলো অজ্ঞতা, সংশয় আর দিশাহারা ভাব, যা অন্তরকে ঢেকে ফেলে। আর মেঘ হলো সেই মোহর ও ছাপ, যা অন্তরের উপর মেরে দেওয়া হয়েছে।"
          },
          {
            "en": "As-Sa'di gives the heart four layers to answer the four of the sea: the darkness of a nature with no good in it, over it the darkness of disbelief, over that the darkness of ignorance, and over that the darkness of the deeds that issue from all three. At-Tabari shows how the layers shut every way in: the heart does not understand from Allah, the hearing does not hear His admonitions, the sight does not see His proofs.",
            "bn": "সাগরের চার স্তরের জবাবে সা'দী অন্তরেরও চারটি স্তর দেখান। প্রথমে এমন স্বভাবের অন্ধকার যাতে কোনো কল্যাণ নেই। তার উপর কুফরের অন্ধকার, তার উপর অজ্ঞতার অন্ধকার। আর সবার উপরে সেই আমলের অন্ধকার, যা এই তিনটি থেকে জন্ম নেয়। স্তরগুলো কীভাবে ঢোকার প্রতিটি পথ বন্ধ করে দেয়, তাবারী তা দেখান। অন্তর আল্লাহর কথা বোঝে না, কান তাঁর উপদেশ শোনে না, চোখ তাঁর প্রমাণ দেখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ubayy's Count of Five",
          "bn": "উবাই (রাঃ)-এর পাঁচ অন্ধকার"
        },
        "p": [
          {
            "en": "The best-known reading of the verse is a Companion's. Ubayy ibn Ka'b, in at-Tabari's chain through ar-Rabi' and Abu al-'Aliya, said that Allah struck another parable for the disbeliever: he turns about in five darknesses. His speech is darkness, his deed is darkness, his coming in is darkness, his going out is darkness, and his destination on the Day of Resurrection is to the darknesses, to the Fire. Ibn Kathir, al-Baghawi and al-Qurtubi all carry it, and Ibn Kathir adds that ar-Rabi' ibn Anas and as-Suddi said much the same.",
            "bn": "আয়াতটির সবচেয়ে পরিচিত ব্যাখ্যাটি একজন সাহাবীর। রাবী' ও আবুল আলিয়ার সূত্রে তাবারী উবাই ইবন কা'ব (রাঃ)-এর কথা এনেছেন। তিনি বলেন, আল্লাহ কাফিরের জন্য আরেকটি দৃষ্টান্ত দিয়েছেন: সে পাঁচ অন্ধকারের ভেতর ঘুরপাক খায়। তার কথা অন্ধকার, তার আমল অন্ধকার, তার ঢোকা অন্ধকার, তার বের হওয়া অন্ধকার। আর কিয়ামতের দিন তার গন্তব্য অন্ধকারের দিকে, জাহান্নামের দিকে। ইবন কাসীর, বাগাভী ও কুরতুবী সবাই এটি এনেছেন। ইবন কাসীর যোগ করেন, রাবী' ইবন আনাস ও সুদ্দীও প্রায় একই কথা বলেছেন।"
          },
          {
            "en": "It is Ubayy's own explanation, not words raised to the Prophet ﷺ, and it is read as that. The five are not only states of the heart. Speech and deed are what a person does; coming in and going out are the whole round of a day; the last is where the road ends. The sea's darkness pressed on the man from every side, and Ubayy's list presses on a life the same way, from what it says to where it is going.",
            "bn": "এটি উবাই (রাঃ)-এর নিজের ব্যাখ্যা, নবী ﷺ-এর মুখের কথা হিসেবে বর্ণিত নয়, আর সেভাবেই একে পড়তে হবে। পাঁচটির সবই শুধু অন্তরের অবস্থা নয়। কথা আর আমল হলো মানুষের করা কাজ। ঢোকা আর বের হওয়া মিলে পুরো একটা দিনের চলাফেরা। আর শেষটা হলো পথ যেখানে গিয়ে থামে। সাগরের অন্ধকার মানুষটিকে চারদিক থেকে চেপে ধরেছিল। উবাই (রাঃ)-এর তালিকাও একটি জীবনকে তেমনি চারদিক থেকে ঘিরে ধরে, মুখের কথা থেকে শুরু করে শেষ গন্তব্য পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "He Can Barely See His Hand",
          "bn": "নিজের হাতও প্রায় দেখা যায় না"
        },
        "p": [
          {
            "en": "Idha akhraja yadahu lam yakad yaraha: when he puts out his hand, he can hardly see it. At-Tabari and al-Baghawi say he is the onlooker. At-Tabari raises the question himself. In Arabic, I hardly saw him admits seeing him after effort, yet in darkness less than this one cannot see one's hand at all, so why hardly? He gives three answers. It means he did not come near seeing it; or it means he did not see it, the word sitting there as thought sits in a statement of certainty, as in 41:48; or he saw it, slowly and with effort.",
            "bn": "ইযা আখরাজা ইয়াদাহু লাম ইয়াকাদ ইয়ারাহা: সে হাত বের করলে তা প্রায় দেখতেই পায় না। তাবারী ও বাগাভী বলেন, 'সে' মানে যে দেখছে। তাবারী নিজেই একটা প্রশ্ন তোলেন। আরবিতে 'আমি তাকে প্রায় দেখিনি' বললে বোঝায়, কষ্ট করে শেষে দেখেছি। অথচ এর চেয়ে কম অন্ধকারেও মানুষ নিজের হাত মোটেই দেখে না। তাহলে 'প্রায়' কেন? তিনি তিনটি উত্তর দেন। এক, অর্থ হলো দেখার কাছাকাছিও যায়নি। দুই, অর্থ হলো দেখেইনি। এখানে শব্দটি বসেছে সেভাবে, যেভাবে নিশ্চিত কথায় 'ধারণা করল' বসে, যেমন ৪১:৪৮ আয়াতে। তিন, সে দেখেছে, তবে ধীরে, অনেক কষ্টে।"
          },
          {
            "en": "His verdict divides the two levels of the question. The third answer, he says, is the most apparent meaning of the word in the way Arabs use akadu. The answer that it means he did not see it is the clearer one from the side of interpretation, though it is the more hidden meaning of the word. And hardly fits here despite such darkness, he adds, because this is a parable, not a report of something that took place. He weighs language and meaning separately.",
            "bn": "তাঁর সিদ্ধান্ত প্রশ্নটির দুটি স্তরকে আলাদা করে। তিনি বলেন, আরবরা 'আকাদু' শব্দটি যেভাবে ব্যবহার করে, সে হিসেবে তৃতীয় উত্তরই শব্দের সবচেয়ে প্রকাশ্য অর্থ। আর 'দেখেইনি' উত্তরটি তাফসীরের দিক থেকে বেশি স্পষ্ট, যদিও শব্দের অর্থ হিসেবে সেটি বেশি প্রচ্ছন্ন। এত গভীর অন্ধকারেও 'প্রায়' শব্দটি এখানে মানিয়ে যায়, তিনি যোগ করেন, কারণ এটি একটি দৃষ্টান্ত, বাস্তবে ঘটে যাওয়া কোনো ঘটনার খবর নয়। ভাষা আর অর্থকে তিনি আলাদা আলাদা ওজন করেন।"
          },
          {
            "en": "Al-Qurtubi sets the grammarians side by side. Az-Zajjaj and Abu 'Ubayda: he did not see it, nor nearly, which he gives as al-Hasan's meaning too. Al-Farra': the verb is an added link, so he did not see it. Al-Mubarrad: he saw it only after effort. An-Nahhas judges soundest that he did not come near seeing it at all. Ibn Kathir and the Muyassar keep to that line, from the sheer intensity of the dark, and as-Sa'di adds: this though the hand is so close, so what of anything else?",
            "bn": "কুরতুবী ব্যাকরণবিদদের মত পাশাপাশি রাখেন। যাজ্জাজ ও আবু উবাইদা বলেন, দেখেনি, প্রায় দেখার মতোও না। কুরতুবী জানান, হাসানের কথার অর্থও এটাই। ফাররার মতে ক্রিয়াটি এখানে অতিরিক্ত সংযোগ মাত্র, অর্থাৎ দেখেনি। মুবাররাদের মতে দেখেছে, তবে অনেক চেষ্টার পর। নাহহাস সবচেয়ে বিশুদ্ধ মনে করেন এই অর্থ যে সে দেখার কাছাকাছিও যায়নি। ইবন কাসীর ও মুয়াসসারও এই পথে চলেন: অন্ধকার এত তীব্র। সা'দী যোগ করেন, হাত এত কাছে থাকার পরও যদি এই অবস্থা হয়, তাহলে অন্য কিছুর কী দশা!"
          }
        ]
      },
      {
        "h": {
          "en": "No Light Except His Gift",
          "bn": "তাঁর দান ছাড়া আলো নেই"
        },
        "p": [
          {
            "en": "Wa man lam yaj'ali llahu lahu nuran fa-ma lahu min nur: and whoever Allah has not given light has no light. At-Tabari reads light as faith, guidance out of straying, and knowledge of His Book; whom Allah does not provide with these has none of them. The Muyassar: whom Allah gives no light from His Book and the Sunnah of His Prophet to be guided by has no guide. Ibn 'Abbas, in al-Baghawi and al-Qurtubi: whom Allah gives no religion has no religion.",
            "bn": "ওয়া মাল লাম ইয়াজ'আলিল্লাহু লাহু নূরান ফামা লাহু মিন নূর: আল্লাহ যাকে আলো দেননি, তার কোনো আলো নেই। তাবারীর কাছে এখানে আলো মানে ঈমান, পথভ্রষ্টতা থেকে বেরিয়ে আসার হেদায়াত, আর আল্লাহর কিতাবের জ্ঞান। আল্লাহ যাকে এগুলো দান করেননি, তার এর কোনোটিই নেই। মুয়াসসার বলে, আল্লাহ যাকে তাঁর কিতাব ও তাঁর নবীর সুন্নাহ থেকে পথ চলার আলো দেননি, তার কোনো পথপ্রদর্শক নেই। বাগাভী ও কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, আল্লাহ যাকে দীন দেননি, তার কোনো দীন নেই।"
          },
          {
            "en": "Whether the light is of this world or the next, al-Qurtubi leaves open. In his report Ibn 'Abbas adds that whom Allah gives no light to walk by on the Day of Resurrection will not find the way to Paradise, and he reads it with 57:28, and He will give you a light by which you walk. Az-Zajjaj says it concerns this world: whom Allah does not guide is not guided. Al-Qurtubi opens with his own gloss and leaves the two standing: a light to be guided by when matters have grown dark around him.",
            "bn": "এই আলো দুনিয়ার, নাকি আখিরাতের, কুরতুবী প্রশ্নটি খোলা রাখেন। তাঁর বর্ণনায় ইবন আব্বাস (রাঃ) যোগ করেন, কিয়ামতের দিন পথ চলার আলো আল্লাহ যাকে দেননি, সে জান্নাতের পথ খুঁজে পাবে না। এর সঙ্গে তিনি পড়েন ৫৭:২৮ আয়াত: আর তিনি তোমাদের এমন আলো দেবেন, যা নিয়ে তোমরা চলবে। যাজ্জাজ বলেন, কথাটি দুনিয়ার ব্যাপারে: আল্লাহ যাকে হেদায়াত দেন না, সে হেদায়াত পায় না। কুরতুবী শুরুতে নিজের একটি ব্যাখ্যা দেন, আর দুটি মতকেই পাশাপাশি রেখে দেন। তাঁর ব্যাখ্যায় আলো মানে এমন আলো, যা দিয়ে পথ চেনা যায়, যখন চারপাশের সব কিছু অন্ধকার হয়ে আসে।"
          },
          {
            "en": "As-Sa'di gives the reason the clause is absolute. The soul is wrongful and ignorant, and holds no good and no light except what its Master gave it and its Lord granted; they lacked light because Allah left them unaided and did not give them of His light. Ibn Kathir and Ma'arif al-Qur'an both set the clause against 24:35, Allah guides to His light whom He wills: the believers' parable ends with light given, this with light withheld. Ibn Kathir joins 7:186: whom Allah sends astray has no guide.",
            "bn": "বাক্যটি কেন এত নিরঙ্কুশ, সা'দী তার কারণ বলেন। নাফস নিজে জালিম ও অজ্ঞ। তার মালিক আর তার রব তাকে যা দান করেছেন, তার বাইরে তাতে কোনো কল্যাণ বা আলো নেই। আল্লাহ তাদের সাহায্য থেকে বঞ্চিত রেখেছেন, নিজের আলো থেকে কিছু দেননি, তাই তারা আলোহীন। ইবন কাসীর ও মাআরিফুল কুরআন দুটোই বাক্যটিকে মিলিয়ে দেখে ২৪:৩৫ আয়াতের সঙ্গে: আল্লাহ যাকে ইচ্ছা নিজের আলোর দিকে পথ দেখান। মুমিনদের দৃষ্টান্ত শেষ হয় আলো পাওয়ায়, আর এটি শেষ হয় আলো না পাওয়ায়। ইবন কাসীর সঙ্গে আনেন ৭:১৮৬: আল্লাহ যাকে পথভ্রষ্ট করেন, তার কোনো পথপ্রদর্শক নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "With Them, Not Knowing Where",
          "bn": "তাদের সঙ্গে, কোথায় জানি না"
        },
        "p": [
          {
            "en": "The article on 24:39 sets out how the commentators divide the two parables between kinds of people; two points here add to it. Ibn Kathir gives the darkness to the plainly ignorant who follow the leaders of disbelief, not knowing whom they follow or where, and recalls the saying: asked where he was going, the man said, with them; asked where they were going, he said, I do not know. As-Sa'di leaves two readings open: both parables fit all the disbelievers' deeds, or the first is for the followed and the second for the followers.",
            "bn": "দুই দৃষ্টান্তকে তাফসীরকারেরা কীভাবে দুই ধরনের মানুষের মধ্যে ভাগ করেন, ২৪:৩৯ আয়াতের লেখায় তা এসেছে। এখানে দুটি কথা তার সঙ্গে যোগ হয়। ইবন কাসীর অন্ধকারের দৃষ্টান্তটি দেন সাধারণ অজ্ঞদের, যারা কুফরের নেতাদের পেছনে চলে, অথচ জানে না কার পেছনে চলছে বা কোথায় যাচ্ছে। তিনি একটি প্রবাদও মনে করিয়ে দেন। লোকটিকে জিজ্ঞেস করা হলো, কোথায় যাচ্ছ? সে বলল, ওদের সঙ্গে। জিজ্ঞেস করা হলো, ওরা কোথায় যাচ্ছে? বলল, জানি না। সা'দী দুটি সম্ভাবনাই খোলা রাখেন। হয় দুই দৃষ্টান্তই সব কাফিরের আমলের বেলায় খাটে, নয়তো প্রথমটি অনুসৃত নেতাদের আর দ্বিতীয়টি অনুসারীদের।"
          },
          {
            "en": "On whom it came down, al-Baghawi and al-Qurtubi relay Muqatil: 'Utba ibn Rabi'a, who sought religion before Islam and wore sackcloth, then disbelieved when Islam came. Al-Qurtubi adds al-Mawardi's name, Shayba ibn Rabi'a, notes that both died disbelievers, and allows that the verse means them and others; al-Baghawi says most hold it general to all disbelievers. Al-Qurtubi also relays, through ath-Tha'labi, an ungraded report raised to the Prophet ﷺ on this clause, left aside here. No fetched tafsir attaches a sound hadith to the verse.",
            "bn": "আয়াতটি কার ব্যাপারে নাযিল হয়েছে, এ নিয়ে বাগাভী ও কুরতুবী মুকাতিলের কথা আনেন: উতবা ইবন রাবীআ। ইসলামের আগে সে দীনের খোঁজ করত, চটের পোশাক পরত, তারপর ইসলাম এলে কুফরি করল। কুরতুবী মাওয়ার্দীর বর্ণিত নামও যোগ করেন, শায়বা ইবন রাবীআ। তিনি জানান, দুজনেই কাফির অবস্থায় মারা গেছে, আর আয়াতটি তাদের ও অন্যদের বোঝাতে পারে। বাগাভী বলেন, অধিকাংশের মতে আয়াতটি সব কাফিরের ব্যাপারে সাধারণ। কুরতুবী সা'লাবীর সূত্রে এ বাক্য নিয়ে নবী ﷺ-এর দিকে সম্পৃক্ত একটি বর্ণনাও আনেন, যার কোনো মান উল্লেখ নেই। এখানে তা বাদ রাখা হলো। সংগ্রহ করা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি।"
          },
          {
            "en": "This needs saying plainly. The verse describes what the text describes, a parable of a state, and it licenses nothing against any living person or community. It hands no reader the right to point at a neighbour and place him in that sea. The commentators keep turning the picture inward, onto the heart, the hearing and the sight. Ma'arif al-Qur'an, citing al-Mazhari, adds that insight into the Hereafter is not won by intelligence or learning; it comes by Allah's grace alone.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ঠিক ততটুকুই বর্ণনা করে যতটুকু পাঠে আছে, একটি অবস্থার দৃষ্টান্ত। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। প্রতিবেশীর দিকে আঙুল তুলে তাকে ওই সাগরে বসিয়ে দেওয়ার অধিকার এ আয়াত কোনো পাঠককে দেয়নি। তাফসীরকারেরা বারবার ছবিটাকে ভেতরের দিকে ফেরান, অন্তর, কান আর চোখের দিকে। মাআরিফুল কুরআন মাযহারীর উদ্ধৃতি দিয়ে যোগ করে, আখিরাতের ব্যাপারে অন্তর্দৃষ্টি বুদ্ধি বা বিদ্যার জোরে মেলে না। তা আসে কেবল আল্লাহর অনুগ্রহে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for Light",
          "bn": "আলোর জন্য দু'আ"
        },
        "p": [
          {
            "en": "Ibn Kathir ends his comment not with a verdict but with a prayer: we ask Allah the Mighty to place light in our hearts, on our right and on our left, and to make our light great. A similar prayer is in a narration al-Bukhari records (6316), general and not attached to this verse. Ibn 'Abbas reports that the Prophet ﷺ used to say in his supplication: O Allah, place light in my heart, light in my sight, light in my hearing, light on my right, light on my left, light above me, light below me, light before me, light behind me, and make for me light.",
            "bn": "ইবন কাসীর তাঁর আলোচনা শেষ করেন কোনো রায় দিয়ে নয়, একটি দু'আ দিয়ে: আমরা মহান আল্লাহর কাছে চাই, তিনি যেন আমাদের অন্তরে আলো দেন, আমাদের ডানে আলো, বাঁয়ে আলো, আর আমাদের আলোকে বড় করে দেন। এর কাছাকাছি একটি দু'আ বুখারীর এক বর্ণনায় (৬৩১৬) আছে। বর্ণনাটি সাধারণ, এ আয়াতের সঙ্গে যুক্ত নয়। ইবন আব্বাস (রাঃ) জানান, নবী ﷺ তাঁর দু'আয় বলতেন: হে আল্লাহ, আমার অন্তরে আলো দাও, আমার চোখে আলো, আমার কানে আলো, আমার ডানে আলো, আমার বাঁয়ে আলো, আমার উপরে আলো, আমার নিচে আলো, আমার সামনে আলো, আমার পেছনে আলো, আর আমার জন্য আলো করে দাও।"
          }
        ]
      }
    ]
  },
  "24:43": {
    "sections": [
      {
        "h": {
          "en": "Seen With the Heart's Eye",
          "bn": "অন্তরচক্ষু দিয়ে দেখা"
        },
        "p": [
          {
            "en": "The verse opens with alam tara, have you not seen, the opening already used two verses earlier in 24:41, where all in the heavens and the earth glorify Allah and the birds spread their wings. Between the two, 24:42 says the dominion of the heavens and the earth is His and the return is to Him. Al-Qurtubi reads 24:43 as Allah naming one more of His proofs. At-Tabari takes the question as addressed to the Prophet ﷺ: have you not seen, O Muhammad.",
            "bn": "আয়াত শুরু হয় আলাম তারা দিয়ে: তুমি কি দেখো না? দুই আয়াত আগে ২৪:৪১-এও একই সূচনা এসেছিল। সেখানে আসমান ও যমীনের সবাই আল্লাহর তাসবীহ পাঠ করে, পাখিরা ডানা মেলে উড়ে। মাঝখানে ২৪:৪২ জানিয়ে দেয়, আসমান ও যমীনের রাজত্ব তাঁরই, আর ফিরে যেতে হবে তাঁরই কাছে। কুরতুবীর মতে ২৪:৪৩ আয়াতে আল্লাহ তাঁর প্রমাণগুলোর আরও একটি তুলে ধরছেন। তাবারী প্রশ্নটিকে নবী ﷺ-এর প্রতি সম্বোধন হিসেবে পড়েন: হে মুহাম্মাদ, তুমি কি দেখো না?"
          },
          {
            "en": "What kind of seeing is meant? Al-Qurtubi: have you not seen with the eyes of your heart. As-Sa'di reads it as eyesight: have you not witnessed with your eyes the immensity of Allah's power, and how He drives the clouds. The Muyassar also opens with have you not witnessed. The stress falls differently, and the verse holds both: an event anyone can watch, and a question that asks for more than watching.",
            "bn": "কোন দেখার কথা বলা হচ্ছে? কুরতুবী বলেন: তুমি কি অন্তরের চোখে দেখো না? সা'দী একে পড়েন চোখের দেখা হিসেবে: তুমি কি নিজের চোখে আল্লাহর বিশাল কুদরত দেখো না, দেখো না কীভাবে তিনি মেঘ হাঁকিয়ে নেন? মুয়াসসারও শুরু করে 'তুমি কি দেখো না' দিয়ে, প্রত্যক্ষ দেখার অর্থে। দুই পাঠে জোর পড়ে দুই জায়গায়। আয়াতে দুটোই আছে। একদিকে এমন এক ঘটনা যা যে কেউ চেয়ে দেখতে পারে, অন্যদিকে এমন এক প্রশ্ন যা শুধু চেয়ে দেখার চেয়ে বেশি কিছু চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Driven While Still Weak",
          "bn": "দুর্বল থাকতেই হাঁকানো"
        },
        "p": [
          {
            "en": "Yuzji sahaban: He drives clouds. At-Tabari glosses yuzji as yasuqu, He drives, and adds: wherever He wills. Ibn Kathir is exact about the stage. Allah drives the clouds at the very start, when He first forms them and they are still weak, and that, he says, is the izja'. Al-Qurtubi gathers the word's uses in Arabic: the wind drives the clouds, the cow urges her calf along, and an-Nabigha speaks of driving on the last breath of a soul.",
            "bn": "ইউযজী সাহাবান: তিনি মেঘ হাঁকিয়ে নেন। তাবারী ইউযজীর অর্থ করেন ইয়াসূকু, অর্থাৎ হাঁকিয়ে নেন, আর যোগ করেন: যেখানে তিনি চান। ইবন কাসীর ধাপটা আরও নির্দিষ্ট করেন। মেঘ যখন সবে তৈরি হচ্ছে, তখনো দুর্বল, ঠিক সেই শুরুতেই আল্লাহ তা হাঁকিয়ে নেন। তাঁর ভাষায় এটাই ইযজা। কুরতুবী আরবিতে শব্দটির নানা ব্যবহার জড়ো করেন। বাতাস মেঘ হাঁকিয়ে নেয়, গাভী তার বাছুরকে আগে আগে তাড়িয়ে নেয়। কবি নাবিগা বলেন প্রাণের শেষ নিঃশ্বাসটুকু টেনে নিয়ে চলার কথা।"
          },
          {
            "en": "Thumma yu'allifu baynahu: then He joins it together. Ibn Kathir: He gathers it after it was scattered. Al-Baghawi: He brings the separate pieces of cloud together, one to another. Al-Qurtubi gives the purpose: so that it strengthens, connects and thickens. Bayna, between, needs two, and at-Tabari explains that sahab is a collective, as nakhl is to nakhla. Then thumma yaj'aluhu rukaman: then He makes it a heap. At-Tabari: piled, one part upon another. Al-Qurtubi sets the word beside sahabun markum, a heaped-up cloud, in 52:44.",
            "bn": "সুম্মা ইউআল্লিফু বাইনাহু: তারপর তিনি তা জুড়ে দেন। ইবন কাসীর: ছড়িয়ে থাকার পর তিনি তা একত্র করেন। বাগাভী: মেঘের আলাদা আলাদা খণ্ড তিনি একটার সঙ্গে আরেকটা মিলিয়ে দেন। কুরতুবী উদ্দেশ্যটাও বলে দেন: যাতে মেঘ শক্তি পায়, জোড়া লাগে, ঘন হয়। 'বাইনা' মানে মাঝখানে, তাই অন্তত দুটি জিনিস লাগে। তাবারী বোঝান, সাহাব শব্দটি অনেক মেঘ বোঝায়, এক খণ্ড হলো সাহাবাহ, যেমন নাখল আর নাখলাহ। তারপর সুম্মা ইয়াজআলুহু রুকামান: তারপর তিনি তাকে স্তূপ বানান। তাবারী: একটার উপর আরেকটা জমানো। কুরতুবী শব্দটিকে মিলিয়ে দেখেন ৫২:৪৪ আয়াতের সাহাবুম মারকূম, অর্থাৎ স্তূপ করা মেঘের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Winds Before Rain",
          "bn": "বৃষ্টির আগে চার বাতাস"
        },
        "p": [
          {
            "en": "At-Tabari and Ibn Kathir both pause here for a saying of 'Ubayd ibn 'Umayr al-Laythi. At-Tabari gives it with his own chain, through Habib ibn Abi Thabit: the winds are four. Allah sends the first, and it sweeps the earth clean; then the second, which raises clouds; then the third, which joins them and makes them a heap; then the fourth, which makes them rain. The four stages run closely alongside the verse's own sequence of driving, joining, heaping and rain.",
            "bn": "তাবারী ও ইবন কাসীর দুজনেই এখানে উবায়দ ইবন উমায়র আল-লাইসীর একটি উক্তি আনেন। তাবারী তা নিজের সনদে বর্ণনা করেন, হাবীব ইবন আবী সাবিতের সূত্রে: বাতাস মোট চারটি। আল্লাহ প্রথম বাতাস পাঠান, তা যমীন ঝেড়ে পরিষ্কার করে। তারপর দ্বিতীয়টি পাঠান, তা মেঘ তৈরি করে। তারপর তৃতীয়টি, তা মেঘগুলো জুড়ে স্তূপ বানায়। তারপর চতুর্থটি, তা বৃষ্টি ঝরায়। এই চার ধাপ আয়াতের নিজের ক্রমের প্রায় পাশাপাশি চলে: হাঁকানো, জোড়া, স্তূপ, তারপর বৃষ্টি।"
          },
          {
            "en": "Ibn Kathir's wording, which he says Ibn Abi Hatim and Ibn Jarir recorded, names the winds: al-muthira, the stirrer, which sweeps the earth; an-nashi'a, which forms the cloud; al-mu'allifa, the joiner; and al-lawaqih, which fertilise the cloud. The two wordings differ at the end, raining in one and fertilising in the other, and both are left here as given. Either way this is 'Ubayd's own saying, not a word of the Prophet ﷺ, and neither commentator presents it as one.",
            "bn": "ইবন কাসীরের ভাষ্যে বাতাসগুলোর নামও আছে। তিনি জানান, ইবন আবী হাতিম ও ইবন জারীর এটি বর্ণনা করেছেন। আল-মুসীরা, যা যমীন ঝেড়ে তোলে। আন-নাশিআ, যা মেঘ সৃষ্টি করে। আল-মুআল্লিফা, যা মেঘ জোড়া লাগায়। আর আল-লাওয়াকিহ, যা মেঘকে উর্বর করে। দুই ভাষ্যের শেষটা আলাদা: একটিতে শেষ বাতাস বৃষ্টি নামায়, অন্যটিতে মেঘকে উর্বর করে। দুটোই এখানে যেমন আছে তেমন রাখা হলো। যেভাবেই পড়ুন, এটি উবায়দের নিজের কথা, নবী ﷺ-এর বাণী নয়। দুই মুফাসসিরের কেউ একে তাঁর বাণী বলে পেশও করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Drops Through the Gaps",
          "bn": "ফাঁক গলে নামা ফোঁটা"
        },
        "p": [
          {
            "en": "Fa-tara l-wadqa yakhruju min khilalihi: and you see the wadq coming out from within it. At-Tabari: you see the rain coming out from between the clouds, and he cites a line of poetry, no rain-cloud poured its wadq. Ibn Zayd, in his report, says the wadq is the drops and the khilal is the cloud. Al-Qurtubi records two views. Abu l-Ashhab al-'Uqayli held that wadq here is lightning; the majority held that it is rain, and al-Qurtubi cites the same line.",
            "bn": "ফাতারাল ওয়াদকা ইয়াখরুজু মিন খিলালিহী: আর তুমি দেখো, তার ভেতর থেকে ওয়াদক বেরিয়ে আসছে। তাবারী বলেন: তুমি দেখো, মেঘের মাঝখান থেকে বৃষ্টি বেরিয়ে আসছে। সাক্ষী হিসেবে তিনি কবিতার একটি চরণ আনেন: কোনো মেঘ তার ওয়াদক ঝরায়নি। তাবারীর বর্ণনায় ইবন যায়দ বলেন, ওয়াদক হলো ফোঁটা, আর খিলাল হলো মেঘ। কুরতুবী দুটি মত উল্লেখ করেন। আবুল আশহাব আল-উকাইলীর মতে এখানে ওয়াদক মানে বিদ্যুৎ। অধিকাংশের মতে তা বৃষ্টি, আর কুরতুবীও সেই একই চরণ উদ্ধৃত করেন।"
          },
          {
            "en": "Khilal is the plural of khalal, a gap. Al-Qurtubi: its openings, the outlets of the rain. Al-Baghawi: its middle. At-Tabari reports with chains that Ibn 'Abbas and ad-Dahhak recited min khalalihi, in the singular, and al-Qurtubi adds Abu l-'Aliya. Abu 'Amr, told of it, called it good but said khilalihi is more general. At-Tabari keeps khilalihi, the reading of the reciters of the great cities, because the authoritative body of reciters agree on it.",
            "bn": "খিলাল শব্দটি খালাল-এর বহুবচন, যার মানে ফাঁক। কুরতুবী: মেঘের ফাটল, যেখান দিয়ে বৃষ্টির ফোঁটা বের হয়। বাগাভী: তার মাঝখান। তাবারী সনদসহ বর্ণনা করেন, ইবন আব্বাস ও দাহহাক পড়তেন মিন খালালিহী, একবচনে। কুরতুবী এর সঙ্গে আবুল আলিয়ার নামও যোগ করেন। আবু আমরকে এ পাঠের কথা জানানো হলে তিনি বলেন, এটি সুন্দর, তবে খিলালিহী বেশি ব্যাপক। তাবারী খিলালিহী-ই রাখেন। বড় বড় শহরের কারীরা এভাবেই পড়েন, আর প্রামাণ্য কারীদের সবাই এতে একমত।"
          },
          {
            "en": "As-Sa'di dwells on the manner of the falling. The rain leaves the cloud's gaps in scattered drops, so that benefit comes from it without harm; then the pools fill, the channels overflow, the valleys run, and the earth brings forth every noble kind. Al-Qurtubi recalls a saying of Ka'b he gave under al-Baqara: the cloud is the rain's sieve, and without the cloud, water coming down from the sky would ruin whatever it fell on.",
            "bn": "সা'দী থামেন বৃষ্টি নামার ধরন নিয়ে। মেঘের ফাঁক দিয়ে বৃষ্টি নামে আলাদা আলাদা ফোঁটায়, যাতে ক্ষতি ছাড়াই উপকার মেলে। তারপর ডোবা-পুকুর ভরে ওঠে, খাল উপচে পড়ে, উপত্যকায় স্রোত নামে, আর যমীন সব রকমের উৎকৃষ্ট উদ্ভিদ জন্মায়। কুরতুবী এখানে কা'বের একটি কথা মনে করিয়ে দেন, যা তিনি সূরা বাকারায় এনেছিলেন: মেঘ হলো বৃষ্টির চালুনি। মেঘ না থাকলে আকাশ থেকে নামা পানি যেখানে পড়ত, সেটাই নষ্ট করে দিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Mountains, Literal or Likened",
          "bn": "সত্যিকারের পাহাড়, নাকি উপমা"
        },
        "p": [
          {
            "en": "Wa-yunazzilu mina s-sama'i min jibalin fiha min baradin: and He sends down from the sky, from mountains in it, of hail. Here the commentators divide. At-Tabari sets out two sayings. In the first, Allah sends down hail from mountains of hail created there in the sky, as people speak of mountains of clay. In the second, He sends to the earth the measure of mountains of hail, as someone says I have two houses of straw, meaning straw enough to fill two houses. He states both and does not choose.",
            "bn": "ওয়া ইউনাযযিলু মিনাস সামায়ি মিন জিবালিন ফীহা মিম বারাদ: আর তিনি আকাশ থেকে, তাতে থাকা পাহাড় থেকে, শিলা নামান। এখানে মুফাসসিরদের মত দুই ভাগ হয়ে যায়। তাবারী দুটি উক্তি সাজিয়ে দেন। প্রথমটিতে আল্লাহ আকাশে সৃষ্টি করা শিলার পাহাড় থেকে শিলা নামান, যেমন বলা হয় মাটির পাহাড়। দ্বিতীয়টিতে তিনি যমীনে নামান পাহাড়ের সমান পরিমাণ শিলা। যেমন কেউ বলে, আমার কাছে দুই ঘর খড় আছে, মানে দুই ঘর ভরার মতো খড়। তিনি দুটোই উল্লেখ করেন, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "The literal reading has named support. Al-Baghawi reports Ibn 'Abbas: Allah has told us that in the sky are mountains of hail. Ibn Kathir gives it as the view of some commentators, that there are mountains of hail in the sky from which Allah sends hail down. Al-Qurtubi records it in two forms, mountains made of hail and mountains with hail in them. Al-Baghawi also lists the view of at-Tabari's second saying: an amount like mountains, in abundance, of hail.",
            "bn": "আক্ষরিক অর্থের পক্ষে নাম ধরে সমর্থন পাওয়া যায়। বাগাভী ইবন আব্বাসের কথা বর্ণনা করেন: আল্লাহ জানিয়ে দিয়েছেন, আকাশে শিলার পাহাড় আছে। ইবন কাসীর একে কিছু মুফাসসিরের মত বলে উল্লেখ করেন: আকাশে শিলার পাহাড় আছে, আল্লাহ সেখান থেকে শিলা নামান। কুরতুবী মতটি দুই রূপে আনেন: শিলা দিয়েই গড়া পাহাড়, আর এমন পাহাড় যার ভেতরে শিলা আছে। তাবারীর দ্বিতীয় উক্তির মতটিও বাগাভী উল্লেখ করেন: প্রাচুর্যে পাহাড়ের মতো পরিমাণ শিলা।"
          },
          {
            "en": "The other side reads the mountains as clouds. Ibn Kathir names those who make the mountains here an expression for the cloud. The Muyassar: He sends down hail from cloud that resembles mountains in its vastness. As-Sa'di pictures the cloud heaped up like mountains, from which Allah at times sends hail that ruins what it strikes. Ma'arif al-Qur'an takes sama' here as the clouds and jibal as great masses of cloud. Both readings stand in the sources, and this article takes no side.",
            "bn": "অন্য পক্ষ পাহাড় বলতে মেঘ বোঝে। ইবন কাসীর তাদের কথা বলেন, যারা এখানে পাহাড়কে মেঘের প্রকাশভঙ্গি ধরেন। মুয়াসসার: বিশালতায় পাহাড়ের মতো যে মেঘ, তা থেকে তিনি শিলা নামান। সা'দী আঁকেন পাহাড়ের মতো স্তূপ হয়ে থাকা মেঘের ছবি, যেখান থেকে আল্লাহ কখনো কখনো এমন শিলা নামান যা যার উপর পড়ে তাকে নষ্ট করে দেয়। মাআরিফুল কুরআন এখানে সামা বলতে মেঘ আর জিবাল বলতে মেঘের বিশাল স্তূপ বোঝে। সূত্রগুলোতে দুটো পাঠই টিকে আছে। এই লেখা কোনো পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Times Min",
          "bn": "তিনবার আসা মিন"
        },
        "p": [
          {
            "en": "Min occurs three times in the clause, and its sense follows the reading. Al-Baghawi, citing the grammarians, explains each: the first, from the sky, marks where the sending begins; the second, from mountains, is partitive, because what Allah sends down is part of those mountains in the sky; the third, of hail, names the kind, because those mountains are of hail. Ibn Kathir gives the same scheme and adds that it works only for those who hold there are mountains of hail in the sky.",
            "bn": "এই অংশে মিন এসেছে তিনবার, আর কোন পাঠ ধরা হচ্ছে তার উপর এর অর্থ নির্ভর করে। বাগাভী ব্যাকরণবিদদের বরাতে প্রতিটি বুঝিয়ে দেন। প্রথমটি, আকাশ থেকে, বোঝায় নামানো শুরু হয় কোথা থেকে। দ্বিতীয়টি, পাহাড় থেকে, অংশ বোঝায়, কারণ আল্লাহ যা নামান তা আকাশের ওই পাহাড়গুলোরই একটা অংশ। তৃতীয়টি, শিলার, বোঝায় জাত, কারণ ওই পাহাড়গুলো শিলারই। ইবন কাসীরও একই ছক দেন, তবে যোগ করেন: এটা খাটে কেবল তাদের মতে, যারা মনে করেন আকাশে শিলার পাহাড় আছে।"
          },
          {
            "en": "For those who take the mountains as clouds, Ibn Kathir says the second min also marks a starting point and stands in place of the first, so that the sky and the mountains name one source. Al-Qurtubi sets the threefold scheme after the reading of a measure or likeness of mountains, and records al-Akhfash, who held the second and third min to be extra: He sends down from the sky hail that is like mountains. Al-Qurtubi closes with: and Allah knows best.",
            "bn": "যারা পাহাড় বলতে মেঘ বোঝেন, ইবন কাসীরের মতে তাদের কাছে দ্বিতীয় মিনও শুরুর জায়গা বোঝায় এবং প্রথমটির স্থলে বসে। ফলে আকাশ আর পাহাড় একই উৎসের নাম হয়ে দাঁড়ায়। কুরতুবী তিন ভাগের ছকটি রাখেন সেই পাঠের পরে, যেখানে পাহাড়ের সমান বা পাহাড়ের মতো শিলার কথা। তিনি আখফাশের মতও আনেন। আখফাশের মতে দ্বিতীয় ও তৃতীয় মিন অতিরিক্ত, তাই অর্থ দাঁড়ায়: তিনি আকাশ থেকে পাহাড়ের মতো শিলা নামান। কুরতুবী আলোচনা শেষ করেন এ কথায়: আল্লাহই ভালো জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Struck or Turned Away",
          "bn": "আঘাত, নাকি সরিয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Fa-yusibu bihi man yasha'u wa-yasrifuhu 'an man yasha': and He strikes with it whom He wills and turns it away from whom He wills. Ibn Kathir allows two readings. It may mean both kinds that come down, rain and hail; then striking is a mercy to those it reaches, and turning it away means the rain is held back. Or it may mean the hail alone; then striking is a punishment, scattering fruit and ruining crops and trees, and turning it away is a mercy.",
            "bn": "ফাইউসীবু বিহী মাই ইয়াশাউ ওয়া ইয়াসরিফুহূ আম মাই ইয়াশা: আর তিনি যাকে চান তা দিয়ে আঘাত করেন, যার থেকে চান সরিয়ে নেন। ইবন কাসীর দুটি অর্থের সম্ভাবনা রাখেন। হতে পারে 'তা' বলতে যা নামে তার দুই রকমই বোঝানো, বৃষ্টি ও শিলা। তাহলে আঘাত মানে যাদের কাছে পৌঁছায় তাদের প্রতি রহমত, আর সরিয়ে নেওয়া মানে বৃষ্টি আটকে রাখা। আবার হতে পারে শুধু শিলা। তখন আঘাত হলো শাস্তি, যা ফল ঝরিয়ে দেয়, ফসল ও গাছপালা নষ্ট করে। আর সরিয়ে নেওয়া হলো রহমত।"
          },
          {
            "en": "The other commentators read here take the hail. At-Tabari: He punishes with it whom He wills, destroying him or his crops and wealth, and turns it away from the crops and wealth of others. Al-Baghawi: it strikes so that a man's crops and wealth perish, and is turned away so that it does not harm him. Al-Qurtubi puts it briefly: its striking is retribution and its turning away a blessing. As-Sa'di and the Muyassar add: according to His decree and His wisdom.",
            "bn": "এখানে পড়া অন্য মুফাসসিরেরা শিলার অর্থই ধরেন। তাবারী: যাকে চান তিনি তা দিয়ে শাস্তি দেন, তাকে বা তার ফসল ও সম্পদ ধ্বংস করেন, আর অন্যদের ফসল ও সম্পদ থেকে তা সরিয়ে নেন। বাগাভী: শিলা পড়ে কারও ফসল ও সম্পদ নষ্ট হয়, আবার কারও থেকে সরে যায়, তার কোনো ক্ষতি হয় না। কুরতুবী সংক্ষেপে বলেন: এর আঘাত শাস্তি, এর সরে যাওয়া নিয়ামত। সা'দী ও মুয়াসসার মাপকাঠিটা জুড়ে দেন: তাঁর তাকদীর ও তাঁর হিকমত অনুযায়ী।"
          },
          {
            "en": "That is what the commentators say about the clause, and it concerns Allah's will, not other people's fortunes. None of the texts read here names a people whose fields were struck, and the verse names none. A storm that ruins one harvest and spares the next tells an onlooker that the decision is Allah's, made by a wisdom as-Sa'di calls praiseworthy; it does not tell him who deserved what. The verse licenses no judgement against any farmer, village or community struck by hail.",
            "bn": "এই অংশ নিয়ে মুফাসসিরেরা এটুকুই বলেন। কথাটা আল্লাহর ইচ্ছা নিয়ে, অন্য মানুষের ভাগ্য বিচার নিয়ে নয়। এখানে পড়া কোনো লেখায় এমন কোনো জনগোষ্ঠীর নাম নেই যাদের মাঠে শিলা পড়েছিল, আয়াতেও কারও নাম নেই। যে ঝড় একটা মাঠের ফসল নষ্ট করে আর পাশের মাঠকে রেহাই দেয়, তা দর্শককে এটুকু জানায় যে ফয়সালা আল্লাহর, আর তা হয় এমন হিকমতে যাকে সা'দী প্রশংসনীয় বলেছেন। কে কী পাওয়ার যোগ্য ছিল, তা জানায় না। শিলাবৃষ্টিতে ক্ষতিগ্রস্ত কোনো কৃষক, গ্রাম বা সম্প্রদায়ের বিরুদ্ধে কোনো রায় দেওয়ার অনুমতি এ আয়াত দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Flash Near Blinding",
          "bn": "চোখ ধাঁধানো ঝলক"
        },
        "p": [
          {
            "en": "Yakadu sana barqihi yadhhabu bi-l-absar: the sana of its lightning almost takes away the sight. At-Tabari: sana, written short, is the light of lightning, and the intensity of this cloud's lightning almost takes the sight of whoever's gaze meets it. He reports Ibn 'Abbas: the light of its lightning; Qatada: the gleam of the lightning takes away the sight; Ibn Zayd: its sana is a light that takes the sight. Ibn Kathir adds: when the eyes follow it and try to see it.",
            "bn": "ইয়াকাদু সানা বারকিহী ইয়াযহাবু বিল আবসার: তার বিদ্যুতের সানা প্রায় দৃষ্টি কেড়ে নেয়। তাবারী: সানা, শেষে টান ছাড়া, মানে বিদ্যুতের আলো। এই মেঘের বিদ্যুতের তীব্রতা যার চোখে পড়ে, তার দৃষ্টি প্রায় কেড়ে নেয়। তিনি ইবন আব্বাসের কথা আনেন: তার বিদ্যুতের আলো। কাতাদার কথা: বিদ্যুতের চমক দৃষ্টি নিয়ে যায়। ইবন যায়দের কথা: তার সানা এমন আলো যা দৃষ্টি নিয়ে যায়। ইবন কাসীর যোগ করেন: যখন চোখ তার পিছু নেয় আর তাকে দেখতে চায়।"
          },
          {
            "en": "Both words carry reading differences. Al-Qurtubi notes that sana, short, is the gleam of lightning, while sana', long, is high rank, and that Talha ibn Musarrif recited the long form for the intensity of the brightness. At-Tabari and al-Baghawi report that Abu Ja'far recited yudhhibu; al-Qurtubi gives it from al-Jahdari and Ibn al-Qa'qa'. At-Tabari keeps yadhhabu, on which the reciters agree, and argues it from Arabic usage.",
            "bn": "দুটি শব্দেই পাঠের ভিন্নতা আছে। কুরতুবী জানান, টান ছাড়া সানা মানে বিদ্যুতের ঝিলিক, আর লম্বা টানে সানা মানে উঁচু মর্যাদা। তালহা ইবন মুসাররিফ আলোর তীব্রতা বোঝাতে লম্বা রূপে পড়েছিলেন। তাবারী ও বাগাভী জানান, আবু জাফর পড়তেন ইউযহিবু। কুরতুবী এ পাঠ আনেন জাহদারী ও ইবনুল কা'কা থেকে। তাবারী ইয়াযহাবু-ই রাখেন, কারণ কারীরা এতে একমত। আরবদের ভাষারীতি থেকেও তিনি এর পক্ষে যুক্তি দেন।"
          },
          {
            "en": "Al-Qurtubi ends his comment with what the lightning signals: it is evidence that the cloud has thickened, a bearer of good news that the rain will be heavy, and a warning that thunderbolts may fall. The next verse, 24:44, read here only for context, ends with a lesson li-uli l-absar, for those who have vision. In Arabic, the sight the lightning nearly takes and the vision the next verse asks for are one word, absar.",
            "bn": "কুরতুবী তাঁর আলোচনা শেষ করেন বিদ্যুৎ কী জানান দেয় তা বলে: মেঘ যে ঘন হয়েছে তার প্রমাণ, ভারী বৃষ্টির সুসংবাদদাতা, আর বজ্রপাতের সতর্ককারী। পরের আয়াত ২৪:৪৪, যা এখানে শুধু প্রসঙ্গ বোঝার জন্য পড়া, শেষ হয় লি-উলিল আবসার দিয়ে: দৃষ্টিসম্পন্নদের জন্য শিক্ষা। আরবিতে বিদ্যুৎ যে দৃষ্টি প্রায় কেড়ে নেয়, আর পরের আয়াত যে দৃষ্টি চায়, দুটো একই শব্দ: আবসার।"
          }
        ]
      },
      {
        "h": {
          "en": "Newly Come From Its Lord",
          "bn": "রবের কাছ থেকে সদ্য আসা"
        },
        "p": [
          {
            "en": "None of the commentaries read here attaches a sound hadith to this verse; al-Qurtubi refers back to what he wrote on thunder under al-Baqara and ar-Ra'd. There is a sound narration on rain itself, not tied to this verse. Muslim records it in his Sahih, number 898, from Anas: Rain fell on us while we were with the Messenger of Allah ﷺ. He drew back his garment until some of the rain fell on him. We said: Messenger of Allah, why did you do this? He said: Because it is newly come from its Lord, exalted is He.",
            "bn": "এখানে পড়া কোনো তাফসীর এ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি। কুরতুবী শুধু বজ্র নিয়ে সূরা বাকারা ও সূরা রা'দে যা লিখেছেন, সেদিকে পাঠককে ফিরিয়ে দেন। তবে বৃষ্টি নিয়ে একটি সহীহ বর্ণনা আছে, যা এ আয়াতের সঙ্গে যুক্ত নয়। মুসলিম তাঁর সহীহ গ্রন্থে, ৮৯৮ নম্বরে, আনাস (রাঃ) থেকে বর্ণনা করেন: আমরা রাসূলুল্লাহ ﷺ-এর সঙ্গে ছিলাম, এমন সময় আমাদের উপর বৃষ্টি নামল। তিনি তাঁর কাপড় সরিয়ে দিলেন, যাতে বৃষ্টির কিছু তাঁর গায়ে লাগে। আমরা বললাম, হে আল্লাহর রাসূল, আপনি এমন করলেন কেন? তিনি বললেন: কারণ এটি সবেমাত্র তার মহান রবের কাছ থেকে এসেছে।"
          },
          {
            "en": "As-Sa'di closes with the question the verse is shaped to raise. Is not He who formed the clouds, drove them to His servants who need them, and sent the rain down so that it brings benefit and keeps harm away, perfect in power, effective in will and vast in mercy? The commentators read the cloud, the rain and the hail as proofs of His power and mercy, beside the glorification of 24:41. The verse asks to be seen with the heart, not only watched.",
            "bn": "সা'দী শেষ করেন সেই প্রশ্ন দিয়ে, যা তোলার জন্যই যেন গোটা আয়াত সাজানো। যিনি মেঘ সৃষ্টি করলেন, তা হাঁকিয়ে নিলেন তাঁর মুখাপেক্ষী বান্দাদের কাছে, আর এমনভাবে নামালেন যাতে উপকার আসে, ক্ষতি দূরে থাকে, তিনি কি পূর্ণ কুদরতের মালিক নন? তাঁর ইচ্ছা কি কার্যকর নয়, তাঁর রহমত কি প্রশস্ত নয়? মুফাসসিরেরা মেঘ, বৃষ্টি আর শিলাকে পড়েন তাঁর কুদরত ও রহমতের প্রমাণ হিসেবে, ২৪:৪১-এর তাসবীহের পাশে। আয়াত চায়, তাকে অন্তর দিয়ে দেখা হোক, শুধু চোখ মেলে চেয়ে থাকা নয়।"
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
          "bn": "আকাশ ছেড়ে মাটির দিকে"
        },
        "p": [
          {
            "en": "The verses just before this one sweep the sky. Allah drives the clouds and packs them into a mass until the rain breaks from within it, He alternates the night and the day, and He calls it all a lesson for people who have eyes (24:43 and 24:44). Then, with the same particle of wonder that opened those signs, the gaze drops from the heavens to the ground underfoot: wa-llāhu khalaqa kulla dābbah, and Allah created every moving creature. The wonders overhead and the small lives crossing the road are being read off one page.",
            "bn": "ঠিক আগের আয়াতগুলো আকাশ জুড়ে ঘোরে। আল্লাহ মেঘ চালান, জমিয়ে স্তূপ করেন, তারপর তার ভেতর থেকে বৃষ্টি বেরিয়ে আসে, তিনি রাত আর দিনকে পালা করে আনেন, আর এ সবকিছুকে বলেন চোখওয়ালা মানুষের জন্য শিক্ষা (২৪:৪৩ ও ২৪:৪৪)। তারপর সেই একই বিস্ময়ের সুরে দৃষ্টি আকাশ থেকে নেমে আসে পায়ের নিচের মাটিতে: ওয়াল্লাহু খালাকা কুল্লা দাব্বাহ, আল্লাহ প্রতিটি চলমান প্রাণীকে সৃষ্টি করেছেন। মাথার উপরের বিস্ময় আর পথ পেরোনো ছোট ছোট প্রাণ, দুই-ই যেন এক পাতা থেকে পড়া হচ্ছে।"
          },
          {
            "en": "Al-Qurtubi pauses on the word dābbah itself: it is everything that crawls or moves on the face of the earth, from the verb dabba, yadibbu, to creep along. The claim the verse then makes is sweeping — every last one of them, He made from water. Before any detail about legs or bellies, the sentence has already set its frame: a single Maker standing behind the whole moving, breathing world, so that what follows is not a nature note but evidence offered to a watching heart.",
            "bn": "কুরতুবী থামেন দাব্বাহ শব্দটির উপর: যা কিছু জমিনের বুকে হেঁটে বা গড়িয়ে চলে, তা-ই দাব্বাহ, দাব্বা-ইয়াদিব্বু ধাতু থেকে, যার মানে গুটিগুটি চলা। এরপর আয়াত যে দাবি করে তা বিশাল। এদের প্রত্যেককে তিনি পানি থেকে গড়েছেন। পা বা পেটের কোনো খুঁটিনাটির আগেই বাক্যটি তার কাঠামো দাঁড় করিয়ে দেয়: গোটা চলমান, নিশ্বাস নেওয়া জগতের পেছনে একজনই স্রষ্টা। ফলে যা আসছে তা কেবল প্রকৃতির টুকরো নয়, তা এক জাগ্রত হৃদয়ের সামনে পেশ করা প্রমাণ।"
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
            "bn": "তাফসীরকারেরা লক্ষ করেন, শুরুর শব্দ দুটি কিরাআতে পড়া হয়। বাগভী আর কুরতুবী জানান, হামযা ও কিসাঈ পড়েছেন খালিকু কুল্লি দাব্বাহ, ইদাফতের গঠনে, অর্থাৎ প্রতিটি প্রাণীর স্রষ্টা। বাকিরা পড়েছেন খালাকা কুল্লা দাব্বাহ, সাধারণ অতীত ক্রিয়ায়, অর্থাৎ প্রতিটি প্রাণীকে সৃষ্টি করেছেন। কুরতুবী যোগ করেন, ইসম-ফা'য়িলের এই পড়াটি ইয়াহইয়া ইবন ওয়াসসাব ও আ'মাশ থেকেও জানা যায়। একটি শব্দের উপর ব্যাকরণের সামান্য মোড়, আর মুফাসসিরগণ দুই পাঠকেই প্রতিষ্ঠিত কুরআন হিসেবে ধরেন।"
          },
          {
            "en": "At-Tabari calls them two well-known readings, close in meaning, and says whoever recites by either is correct, since the participle carries the sense of the past — the creating has already happened. Al-Qurtubi refuses to rank them: Allah has given two true reports here, and one should not say that either recitation is sounder than the other. He mentions a nuance some raised, that the verb khalaqa suits a particular act while the name the Creator, the Maker speaks of Him in general, yet he lets both stand undisturbed.",
            "bn": "তাবারী এদের বলেন দুটি সুপরিচিত কিরাআত, অর্থেও কাছাকাছি; যে যেটিতেই পড়ুক, ঠিকই পড়েছে। কারণ ইসম-ফা'য়িলও এখানে অতীতের অর্থ বহন করে: সৃষ্টির কাজ তো ঘটেই গেছে। কুরতুবী এদের মধ্যে কোনটি আগে কোনটি পরে, তা ঠিক করতে রাজি নন। তাঁর কথায়, আল্লাহ এখানে দুটি সত্য সংবাদ দিয়েছেন; কোনো কিরাআতকে অন্যটির চেয়ে বেশি বিশুদ্ধ বলা উচিত নয়। তিনি কারও তোলা একটি সূক্ষ্ম পার্থক্যের কথা আনেন: খালাকা ক্রিয়াটি একটি নির্দিষ্ট কাজের সঙ্গে মানায়, আর খালিক, অর্থাৎ স্রষ্টা নামটি তাঁকে সাধারণভাবে বোঝায়। তবু তিনি দুটিকেই নিজ নিজ জায়গায় বহাল রাখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Water Means",
          "bn": "পানি বলতে কী বোঝায়"
        },
        "p": [
          {
            "en": "The commentators divide over what water means here. At-Tabari and al-Baghawi gloss min mā' as from a drop of fluid, min nuṭfah, every animal issuing from the seed of its own kind. Al-Qurtubi reports this as the reading of the mufassirūn, and cites an-Naqqāsh, who took it to mean the seed of the males. On this understanding the verse stays close to the eye: you already know how a creature comes to be, and the Qur'an points you to that familiar beginning and names it the handiwork of God.",
            "bn": "পানি এখানে কী বোঝায়, তা নিয়ে তাফসীরকারেরা ভাগ হয়ে যান। তাবারী আর বাগভী মিন মা-এর অর্থ করেন বীর্যের ফোঁটা থেকে, মিন নুতফাহ, প্রতিটি প্রাণী তার নিজ জাতের বীজ থেকে বেরিয়ে আসে। কুরতুবী একে মুফাসসিরদের পাঠ বলে জানান, আর নাক্কাশের কথা তোলেন, যিনি এর মানে নিয়েছিলেন পুরুষের বীজ। এই বোঝায় আয়াত চোখের খুব কাছে থাকে: কীভাবে একটি প্রাণী জন্ম নেয় তা আপনি জানেনই, আর কুরআন সেই পরিচিত শুরুটার দিকেই আঙুল তুলে তাকে আল্লাহর কারিগরি বলে ডাকে।"
          },
          {
            "en": "A second reading widens the frame. Al-Qurtubi ascribes to the majority of thinkers the view that every creature's very making holds water, as Adam was made from water and clay — water as the origin of all life, not merely the fluid of breeding. As-Saʿdī gathers both: animals that reproduce take their matter from the fluid of the seed, while creatures that arise from the earth, like insects, arise only from watery moisture and never from anything dry. The material is one, he says, and he cites the word, and We made from water every living thing (21:30).",
            "bn": "দ্বিতীয় একটি পাঠ পরিধি বাড়িয়ে দেয়। কুরতুবী অধিকাংশ চিন্তাবিদের বরাতে বলেন, প্রতিটি প্রাণীর গড়নের ভেতরেই পানি আছে, যেমন আদম (আঃ) সৃষ্টি হয়েছেন পানি আর মাটি থেকে। এখানে পানি মানে সব প্রাণের উৎস, কেবল বংশবৃদ্ধির তরল নয়। সা'দী দুটোকেই একসাথে ধরেন: যেসব প্রাণী বংশ বাড়ায় তাদের উপাদান বীজের তরল, আর যেসব প্রাণী মাটি থেকে জন্মায়, যেমন পোকামাকড়, তারা কেবল পানিভেজা আর্দ্রতা থেকেই জন্মায়, কখনো শুকনো কিছু থেকে নয়। উপাদান এক, তিনি বলেন, আর তিনি উদ্ধৃত করেন এই কথা, আর আমি পানি থেকে সৃষ্টি করেছি প্রতিটি জীবন্ত বস্তু (২১:৩০)।"
          },
          {
            "en": "Al-Qurtubi backs this wider reading with an exchange at Badr, when the Prophet ﷺ, asked from whom he and his companion came, answered, we are from water — a narration he adduces only as a witness to how min mā' can carry the sense of origin, not as a ruling read onto the verse. The classical commentaries attach no sound Prophetic report that explains the āyah itself. Al-Baghawi and al-Qurtubi both mark a boundary: the statement does not take in the angels or the jinn, since we do not observe them, and the authentic reports say the angels were made from light and the jinn from fire.",
            "bn": "কুরতুবী এই ব্যাপক পাঠের সমর্থনে আনেন বদরের একটি ঘটনা, যেখানে নবী ﷺ-কে জিজ্ঞেস করা হয়েছিল তিনি ও তাঁর সঙ্গী কোথাকার, তিনি জবাব দিলেন, আমরা পানি থেকে। এটি তিনি আনেন কেবল ভাষার সাক্ষী হিসেবে, মিন মা কীভাবে উৎসের অর্থ বহন করতে পারে তা দেখাতে, আয়াতের উপর চাপানো কোনো বিধান হিসেবে নয়। ধ্রুপদি তাফসীরগুলো এ আয়াতের ব্যাখ্যায় কোনো বিশুদ্ধ মারফু হাদিস যুক্ত করে না। বাগভী ও কুরতুবী দুজনেই একটি সীমা টানেন: এই কথা ফেরেশতা বা জিনকে ধরে না, কেননা আমরা তাদের দেখি না, আর বিশুদ্ধ বর্ণনায় ফেরেশতা আলো থেকে আর জিন আগুন থেকে সৃষ্ট।"
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
            "bn": "আয়াত প্রাণীদের সাজায় তাদের চলার ধরন দিয়ে। এদের কেউ কেউ পেটে ভর দিয়ে চলে। ইবন কাসীর নাম নেন সাপ ও তার মতো প্রাণীর। কুরতুবী পেটে-চলা দলে টেনে আনেন মাছ আর কীট ও তাদের জাতকে। বাগভী একসাথে গোনেন সাপ, মাছ আর কেঁচো। মুয়াসসার সাদামাটাভাবে বলে, এরা পেটে ভর দিয়ে গুটিগুটি চলে, যাহফান। তাবারী একটা খটকা ধরিয়ে দেন, চলা তো হয় পায়ের উপর, অথচ আয়াত বলছে পেটের উপর চলা। জবাবে তিনি বলেন, পা-ওয়ালাদের সঙ্গে পা-হীনদের এক দলে রাখায় শব্দটিকে টেনে দুই জাতের উপরই খাটানো হয়েছে।"
          },
          {
            "en": "The other two classes are named the same way, each with its examples. Of them, some walk on two legs — the human being and the birds, say Ibn Kathir, at-Tabari and as-Saʿdī. And of them, some walk on four: the cattle and the grazing beasts, to which al-Baghawi adds the beasts of prey and al-Qurtubi the rest of the animals. Read straight down, the sentence is a small ordering of life drawn not to inform but to make you notice how unlike these gaits are, all sprung from one word, water.",
            "bn": "বাকি দুই শ্রেণির নামও একইভাবে এসেছে, প্রত্যেকটির সঙ্গে উদাহরণ। এদের কেউ চলে দুই পায়ে: মানুষ আর পাখি, বলেন ইবন কাসীর, তাবারী ও সা'দী। আর কেউ চলে চার পায়ে: গবাদি পশু আর চরে খাওয়া জন্তু; বাগভী এর সঙ্গে যোগ করেন হিংস্র জানোয়ার, আর কুরতুবী বাকি সব প্রাণী। শুরু থেকে শেষ পর্যন্ত একটানা পড়লে বাক্যটি যেন প্রাণীজগতের এক ছোট্ট বিন্যাস। এর উদ্দেশ্য তথ্য দেওয়া নয়; বরং আপনাকে খেয়াল করানো, এই চলনগুলো কত আলাদা, অথচ সবই এসেছে এক শব্দ থেকে: পানি।"
          }
        ]
      },
      {
        "h": {
          "en": "Creatures With More Legs",
          "bn": "চারের বেশি পায়ের প্রাণী"
        },
        "p": [
          {
            "en": "The classing stops at four, and the mufassirūn ask about the many-legged. Al-Baghawi says the verse did not mention what walks on more than four, such as the crawling insects of the earth, because in their form they resemble the four-legged. Al-Qurtubi reports that the codex of Ubayy read and of them are those that walk on more, an addition that would sweep in every creature, like the crab and the small vermin, though he is careful to add that this is a recitation not confirmed by consensus and so does not stand as Qur'an.",
            "bn": "চারে এসে ভাগ থেমে যায়, তাই মুফাসসিরগণ প্রশ্ন তোলেন: যাদের পা আরও বেশি, তাদের কী হবে? বাগভী বলেন, চারের বেশি পায়ে যারা চলে, যেমন মাটিতে চলা কীটপতঙ্গ, আয়াত তাদের আলাদা করে উল্লেখ করেনি, কারণ গড়নে তারা চারপেয়ে প্রাণীরই মতো। কুরতুবী জানান, উবাইয়ের মুসহাফে পাঠ ছিল: আর তাদের কেউ কেউ চলে আরও বেশি পায়ে। এই বাড়তি অংশে কাঁকড়া আর ছোট কীটপতঙ্গসহ সব প্রাণীই এসে যেত। তবে তিনি সাবধানে যোগ করেন, এ পাঠ ইজমা দিয়ে প্রমাণিত নয়, তাই একে কুরআন বলে ধরা যায় না।"
          },
          {
            "en": "On why four was named and not more, an-Naqqāsh offers a reason: every animal in truth rests on four, which are the frame of its walking, and the extra legs are an addition to its make that it does not lean on to move. Ibn ʿAṭiyya answers back that those many legs are not idle; the creature needs them and moves them all as it goes. Others note the plain point that the verse forbids nothing, for it never says there is none that walks on more than four. The commentators leave the disagreement open.",
            "bn": "চারের কথাই কেন বলা হলো, বেশি নয় কেন? নাক্কাশ এর একটা কারণ দেখান: আসলে প্রতিটি প্রাণী ভর রাখে চারটির উপরই, ওই চারটিই তার চলার কাঠামো। বাড়তি পাগুলো তার গড়নে বাড়তি সংযোজন, চলতে গিয়ে সে ওগুলোর উপর ভর দেয় না। ইবন আতিয়া এর জবাবে বলেন, ওই অনেকগুলো পা অকেজো নয়। প্রাণীর ওগুলো দরকার, চলার সময় সে সবগুলোই নাড়ায়। অন্যেরা সোজা একটা কথা মনে করিয়ে দেন: আয়াত তো কিছুই নাকচ করেনি, চারের বেশি পায়ে চলা কোনো প্রাণী নেই, এমন কথা কোথাও বলেনি। মুফাসসিরগণ মতভেদটা মীমাংসা না করেই রেখে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word for Persons",
          "bn": "মানুষের জন্য গড়া শব্দ"
        },
        "p": [
          {
            "en": "A grammatical detail carries weight here. The verse says fa-minhum, and of them, using the pronoun man, which in Arabic is used of rational beings, of people, though most of the creatures meant are not people at all. At-Tabari raises the question directly and answers it: the phrase is a breaking-up of what was gathered under every moving creature, and that gathering had already folded human beings in alongside the beasts. Because people and animals were mixed in the one word, they are all referred to as one refers to the children of Adam, and then spelled out with man.",
            "bn": "এখানে ব্যাকরণের একটা খুঁটিনাটি বেশ গুরুত্বপূর্ণ। আয়াত বলে ফামিনহুম, অর্থাৎ তাদের কেউ কেউ, আর এখানে এসেছে মান সর্বনাম। আরবিতে মান বলা হয় বুদ্ধিসম্পন্ন সত্তা, মানে মানুষের বেলায়, অথচ এখানে যে প্রাণীদের কথা, তাদের বেশির ভাগই মানুষ নয়। তাবারী প্রশ্নটা সরাসরি তোলেন, জবাবও দেন: প্রতিটি বিচরণশীল প্রাণী কথাটার ভেতরে যাদের একসঙ্গে ধরা হয়েছিল, এখানে তাদেরই ভাগ করে দেখানো হচ্ছে। আর ওই একসঙ্গে ধরার মধ্যে পশুর পাশাপাশি মানুষও আগে থেকেই ছিল। এক শব্দে মানুষ আর জন্তু মিশে থাকায় সবার কথা বলা হয়েছে সেভাবে, যেভাবে আদম-সন্তানের কথা বলা হয়, তারপর মান দিয়ে ভাগ করে খুলে বলা হয়েছে।"
          },
          {
            "en": "Al-Baghawi states the grammarians' rule: when a phrase gathers the rational and the non-rational, the wording gives precedence to the rational. Al-Qurtubi says the same and adds why — the human being is the one addressed and held to worship, so he takes the lead in the pronoun. Then al-Qurtubi turns the grammar into an argument. The very word walk, applied across such unlike creatures, points to the settled truth of a Maker: were there no Maker who freely chooses, they would not differ at all but would be one single kind.",
            "bn": "বাগভী ব্যাকরণবিদদের নিয়মটা জানান: কোনো কথায় বুদ্ধিসম্পন্ন আর বুদ্ধিহীন একসঙ্গে এলে শব্দ বাছাইয়ে বুদ্ধিসম্পন্নকেই আগে রাখা হয়। কুরতুবীও একই কথা বলেন, সঙ্গে কারণটাও দেন: আল্লাহর সম্বোধন তো মানুষের প্রতি, ইবাদতের দায়ও তারই, তাই সর্বনামে সে-ই আগে আসে। এরপর কুরতুবী ব্যাকরণ থেকে একটা দলিল দাঁড় করান। এত ভিন্ন ভিন্ন প্রাণীর বেলায় একই চলা শব্দটা ইশারা করে, একজন স্রষ্টা আছেন, এটা প্রতিষ্ঠিত সত্য। নিজ ইচ্ছায় বেছে নেন এমন কোনো স্রষ্টা না থাকলে এরা একটুও আলাদা হতো না, সবাই হতো এক জাতের।"
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
            "bn": "এবার বোঝা যায়, এই ভাগ করে দেখানোর আসল উদ্দেশ্য কী। ইবন কাসীরের মতে আয়াতটি আল্লাহর পূর্ণ কুদরত আর বিশাল রাজত্বের নিদর্শন: তিনি নানা জাতের প্রাণী সৃষ্টি করেন, আকারে, রঙে, চলাফেরা আর থেমে থাকার ধরনে তারা কত আলাদা, অথচ সবই এক রকম পানি থেকে। সা'দী একই সিদ্ধান্তে পৌঁছান আরও জোর দিয়ে: মূল এক হওয়া সত্ত্বেও এদের এই ভিন্নতা প্রমাণ করে, আল্লাহর ইচ্ছা কার্যকর আর তাঁর কুদরত সর্বব্যাপী। উৎস একটাই, অথচ তা থেকে এমন বৈচিত্র্য, যা কোনো মন আগে কল্পনাও করতে পারত না।"
          },
          {
            "en": "As-Saʿdī sets a picture from the earth beside it: the rain falls as one water, the soil is one mother, and yet the offspring it raises differ in kind and in quality — as another verse says of neighbouring plots watered by one water, some made better than others in taste (13:4). Al-Qurtubi reads the animals the same way, as a proof that runs from their difference back to the free Maker behind them. The variety is not noise. It is the fingerprint of a will that chose each thing.",
            "bn": "সা'দী এর পাশে মাটির একটা ছবি রাখেন: বৃষ্টি নামে একই পানি হয়ে, মাটিও একই মা, তবু সেই মাটিতে যা জন্মায় তা জাতে আর গুণে আলাদা। আরেক আয়াতও তো বলে, পাশাপাশি জমি একই পানিতে সেচ পায়, অথচ স্বাদে একটিকে অন্যটির চেয়ে উত্তম করা হয় (১৩:৪)। কুরতুবী প্রাণীদেরও এভাবেই দেখেন: এদের ভিন্নতা থেকে প্রমাণ পৌঁছে যায় পেছনের সেই স্রষ্টার কাছে, যিনি নিজ ইচ্ছায় বেছে নেন। এই বৈচিত্র্য এলোমেলো নয়। এ এমন এক ইচ্ছার আঙুলের ছাপ, যা প্রতিটি জিনিস বেছে বেছে গড়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Wills, He Creates",
          "bn": "যা চান, তাই গড়েন"
        },
        "p": [
          {
            "en": "The verse closes on its own point: yakhluqu-llāhu mā yashā', Allah creates what He wills; inna-llāha ʿalā kulli shay'in qadīr, indeed Allah is able over all things. Ibn Kathir ties the two clauses together — He creates what He wills by His power, for what He wills comes to be and what He does not will does not come to be — and this, he says, is why the verse ends on His being able over everything. The catalogue of gaits was never the destination; this naming of the will was.",
            "bn": "আয়াতের শেষে আসে তার আসল কথা: ইয়াখলুকুল্লাহু মা ইয়াশা, আল্লাহ যা চান তাই সৃষ্টি করেন; ইন্নাল্লাহা আলা কুল্লি শাইয়িন কাদীর, নিশ্চয়ই আল্লাহ সবকিছুর উপর ক্ষমতাবান। ইবন কাসীর দুই অংশকে এক সূত্রে বাঁধেন: তিনি নিজ কুদরতে যা চান তাই সৃষ্টি করেন, কারণ তিনি যা চান তা হয়, যা চান না তা হয় না। তাঁর মতে এ জন্যই আয়াত শেষ হয়েছে সবকিছুর উপর তাঁর ক্ষমতার কথা বলে। চলার ধরনের তালিকা কখনো লক্ষ্য ছিল না; লক্ষ্য ছিল তাঁর ইচ্ছার এই ঘোষণা।"
          },
          {
            "en": "This is where the verse lands on a reader. It asks for no theory of biology, and it is not a coded science lesson to be decoded — it asks for the older, plainer response of a wonder that turns into worship. Let the next creature you pass, a sparrow, an ant, a dog asleep in the sun, stop you for a breath. One water stands behind it, one Maker chose its form, and He who drew such range from so little is able to bring about, in your life and beyond it, whatever He wills.",
            "bn": "এখানেই আয়াত পাঠকের বুকে এসে নামে। এ জীববিজ্ঞানের কোনো তত্ত্ব চায় না, আর এটা কোনো গূঢ় বিজ্ঞানের পাঠও নয় যা খুলে পড়ে দেখাতে হবে। এ চায় সেই পুরোনো, সরল সাড়া, যে বিস্ময় গিয়ে ইবাদতে বদলে যায়। পাশ দিয়ে যাওয়া পরের প্রাণীটা, একটা চড়ুই, একটা পিঁপড়া, রোদে ঘুমানো একটা কুকুর, আপনাকে এক নিশ্বাসের জন্য থামিয়ে দিক। এর পেছনে দাঁড়িয়ে আছে এক পানি, এক স্রষ্টা বেছে নিয়েছেন এর রূপ, আর যিনি এত সামান্য থেকে এত বিস্তার এঁকেছেন, তিনি আপনার জীবনে ও তার বাইরে যা চান তাই আনতে সক্ষম।"
          }
        ]
      }
    ]
  },
  "24:48": {
    "sections": [
      {
        "h": {
          "en": "From Profession to Summons",
          "bn": "দাবি থেকে ডাক পর্যন্ত"
        },
        "p": [
          {
            "en": "The passage turns on two acts of turning. In 24:47 a group say, \"We have believed in Allah and in the Messenger, and we obey,\" then a party of them turns away after that, and the verse closes: those are not believers. Verse 24:48 names the moment where the turning shows itself. When they are called to Allah and His Messenger to judge between them, at once a party of them turns aside. A claim of obedience, made in general, meets its first particular case, and the case is a quarrel that needs a verdict.",
            "bn": "এই অংশটা দাঁড়িয়ে আছে দুটি মুখ ফেরানোর উপর। ২৪:৪৭ আয়াতে একদল বলে, আমরা আল্লাহ ও রাসূলের প্রতি ইমান এনেছি এবং আমরা মেনে চলি। এরপরই তাদের একদল মুখ ফিরিয়ে নেয়, আর আয়াতটি শেষ হয় এই কথায়: তারা মু'মিন নয়। ২৪:৪৮ আয়াত দেখিয়ে দেয়, মুখ ফেরানোটা ঠিক কোন মুহূর্তে ধরা পড়ে। তাদের মাঝে ফয়সালার জন্য যখন আল্লাহ ও তাঁর রাসূলের দিকে ডাকা হয়, তখনই তাদের একদল সরে দাঁড়ায়। আনুগত্যের দাবি এতক্ষণ ছিল সাধারণ কথা। এবার তার সামনে এল প্রথম বাস্তব ঘটনা, আর ঘটনাটা হলো একটা বিবাদ, যার রায় দরকার।"
          },
          {
            "en": "Just before, 24:46 spoke of distinct verses sent down, and of Allah guiding whom He wills to a straight path. So the passage moves from signs made plain, to a profession of faith, to a summons in which the plain signs are applied to one dispute. What 24:48 records is not ignorance. The ruling is available and the judge is present among them. A party of them simply will not come. The next verse, 24:49, shows what the refusal is really about, and 24:50 asks its reason aloud.",
            "bn": "তার একটু আগে ২৪:৪৬ আয়াতে এসেছে সুস্পষ্ট আয়াত নাজিলের কথা, আর এই কথা যে আল্লাহ যাকে চান সরল পথে চালান। তাহলে ধারাটা এমন: প্রথমে স্পষ্ট নিদর্শন, তারপর ইমানের দাবি, তারপর এমন এক ডাক, যেখানে সেই স্পষ্ট নিদর্শন একটা নির্দিষ্ট বিবাদে খাটানো হবে। ২৪:৪৮ আয়াত যা তুলে ধরে, তা অজ্ঞতা নয়। বিধান হাতের কাছেই আছে, বিচারকও তাদের মাঝেই আছেন। তবু তাদের একদল আসবে না, ব্যস। আসল ব্যাপারটা কী, তা খুলে দেয় পরের আয়াত ২৪:৪৯। আর ২৪:৫০ আয়াত কারণটা নিয়ে সরাসরি প্রশ্ন তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Called to the Book",
          "bn": "কিতাবের দিকে আহ্বান"
        },
        "p": [
          {
            "en": "What does it mean to be called to Allah? At-Tabari answers directly: when these hypocrites are called to the Book of Allah and to His Messenger, so that he may judge between them, by the ruling of Allah, in what they had quarrelled over. Al-Muyassar puts the setting in one word, their disputes: they are called, in their quarrels, to what is in the Book of Allah and to His Messenger. Both read the summons as concrete. Two parties are at odds, and the call is to settle it by revelation through the Prophet ﷺ.",
            "bn": "আল্লাহর দিকে ডাকা মানে কী? তাবারী সরাসরি উত্তর দেন। এই মুনাফিকদের যখন আল্লাহর কিতাব ও তাঁর রাসূলের দিকে ডাকা হয়, যাতে তিনি তাদের ঝগড়ার বিষয়ে আল্লাহর বিধান অনুযায়ী তাদের মাঝে ফয়সালা করেন। মুয়াসসার পুরো প্রেক্ষাপটটা ধরে দেয় একটি শব্দে: তাদের বিবাদ। নিজেদের ঝগড়ায় তাদের ডাকা হয় আল্লাহর কিতাবে যা আছে তার দিকে, আর তাঁর রাসূলের দিকে। দুজনের কাছেই ডাকটা বাস্তব একটা ব্যাপার। দুই পক্ষের মধ্যে বিরোধ বেধেছে, আর ডাকা হচ্ছে নবী ﷺ-এর মাধ্যমে ওহির আলোকে তা মিটিয়ে নিতে।"
          },
          {
            "en": "Ibn Kathir widens the frame. For him the call is that they are asked to follow the guidance in what Allah sent down to His Messenger; the dispute is one place where that guidance meets them. As-Sa'di keeps the courtroom in view: when a case arises between them and anyone else, and they are called to the ruling of Allah and His Messenger. Across these readings the call is the same call. It invites a person to let what was revealed decide a matter in which he has something to lose.",
            "bn": "ইবন কাসীর ছবিটা আরও বড় করে দেখেন। তাঁর মতে ডাকটা হলো, আল্লাহ তাঁর রাসূলের উপর যা নাজিল করেছেন, তার হিদায়াত মেনে চলার আহ্বান। বিবাদ সেই হিদায়াতের মুখোমুখি হওয়ার একটা জায়গামাত্র। সা'দী বিচারের দৃশ্যটাই সামনে রাখেন: যখন তাদের আর অন্য কারও মাঝে কোনো মামলা দাঁড়ায়, আর তাদের ডাকা হয় আল্লাহ ও তাঁর রাসূলের ফয়সালার দিকে। ব্যাখ্যাগুলো আলাদা, কিন্তু ডাক একটাই। মানুষকে বলা হচ্ছে, যে ব্যাপারে তার কিছু হারানোর ভয় আছে, সেখানে নাজিল হওয়া বিধানকেই রায় দিতে দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verb Kept Singular",
          "bn": "একবচনে রাখা ক্রিয়া"
        },
        "p": [
          {
            "en": "The wording holds a small grammatical point. Two are named, Allah and His Messenger, yet the verb is liyaḥkuma, that he may judge, not the dual liyaḥkumā. Al-Qurtubi explains it: the one meant as judge is the Messenger ﷺ, and Allah is mentioned first to magnify Him and to open the speech. Al-Baghawi glosses the verb the same way in fewer words: that the Messenger may judge between them by the ruling of Allah. The same pairing returns in 24:50, where they fear that Allah and His Messenger will wrong them.",
            "bn": "শব্দচয়নে ব্যাকরণের একটা ছোট কথা আছে। নাম এসেছে দুটি, আল্লাহ ও তাঁর রাসূল। অথচ ক্রিয়াটি লিয়াহকুমা, অর্থাৎ যাতে তিনি ফয়সালা করেন। দ্বিবচনের লিয়াহকুমা নয়। কুরতুবী এর ব্যাখ্যা দেন: বিচারক হিসেবে এখানে উদ্দেশ্য রাসূল ﷺ। আল্লাহর নাম আগে এসেছে তাঁর মর্যাদা বোঝাতে আর কথার সূচনা হিসেবে। বাগাভী আরও কম কথায় একই অর্থ করেন: যাতে রাসূল আল্লাহর বিধান অনুযায়ী তাদের মাঝে ফয়সালা করেন। একই জোড়া আবার এসেছে ২৪:৫০ আয়াতে, যেখানে তারা ভয় পায় যে আল্লাহ ও তাঁর রাসূল তাদের উপর অন্যায় করবেন।"
          },
          {
            "en": "The point is more than grammar. Al-Baghawi's gloss joins the two names into one act: the judge is the Messenger, and the ruling he gives is Allah's. There are not two courts here, one divine and one human, from which a man might choose the softer. To turn aside from the Prophet's ﷺ verdict in this setting is to turn aside from the ruling of Allah that he delivers. That is why the verse can say, without any change of subject, that they were called to Allah and His Messenger.",
            "bn": "কথাটা শুধু ব্যাকরণের নয়। বাগাভীর ব্যাখ্যায় দুটি নাম মিলে যায় একটি কাজে। বিচারক রাসূল, আর তিনি যে রায় দেন, তা আল্লাহর বিধান। এখানে দুটো আলাদা আদালত নেই, একটা আল্লাহর আর একটা মানুষের, যেখান থেকে কেউ নরমটা বেছে নিতে পারে। এই প্রেক্ষাপটে নবী ﷺ-এর রায় থেকে মুখ ফেরানো মানে তাঁর মুখে আসা আল্লাহর বিধান থেকেই মুখ ফেরানো। এ কারণেই আয়াতটি বিষয় না বদলেই বলতে পারে, তাদের ডাকা হয়েছিল আল্লাহ ও তাঁর রাসূলের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "At Once, a Party Turns",
          "bn": "ডাক শুনেই একদল সরে যায়"
        },
        "p": [
          {
            "en": "The verse turns on one small word, used twice. Wa-idhā du'ū: and when they are called. Then, idhā farīqun minhum mu'riḍūn, which the translation used here renders as \"at once a party of them turns aside.\" The second idhā carries the turning straight after the call, with no interval between them. Nothing is said of deliberation, of hearing the case out, of weighing the evidence. The summons is heard, and the turning is simply there. The verse describes a reflex, the kind that shows what a person has decided long before the moment comes.",
            "bn": "আয়াতটি ঘুরে আছে একটি ছোট শব্দের উপর, যা এসেছে দুবার। ওয়া ইযা দুঊ: আর যখন তাদের ডাকা হয়। তারপর ইযা ফারীকুম মিনহুম মু'রিদূন। এখানে ব্যবহৃত অনুবাদ এর অর্থ করেছে: সঙ্গে সঙ্গে তাদের একদল মুখ ফিরিয়ে নেয়। দ্বিতীয় ইযা ডাকের ঠিক পরেই মুখ ফেরানোকে হাজির করে, মাঝে কোনো বিরতি রাখে না। ভেবে দেখা, পুরো মামলা শোনা, প্রমাণ যাচাই করা, এসবের কোনো উল্লেখ নেই। ডাক কানে এসেছে, আর মুখ ফেরানো তৈরি। আয়াতটি এক অভ্যাসের ছবি আঁকে। মুহূর্তটা আসার অনেক আগেই মানুষ কী ঠিক করে রেখেছে, এমন অভ্যাসই তা দেখিয়ে দেয়।"
          },
          {
            "en": "Two further words deserve attention. Farīqun minhum is a party of them, not all of them; the same words stood in 24:47. The verse does not sweep every professed believer into the charge. And where 24:47 used a verb, yatawallā, turns away, this verse ends on mu'riḍūn, a participle: they are ones who turn aside. The first reports something they did. The second reads like a description of where they stand. Al-Muyassar keeps the same shape in prose: a party of them is turning aside, not accepting the ruling of Allah and of His Messenger.",
            "bn": "আরও দুটি শব্দ খেয়াল করার মতো। ফারীকুম মিনহুম মানে তাদের একদল, সবাই নয়। ২৪:৪৭ আয়াতেও এই একই শব্দ ছিল। দাবি যারা করেছে, তাদের সবাইকে আয়াতটি এই অভিযোগে টেনে আনে না। আবার ২৪:৪৭ আয়াতে এসেছিল একটি ক্রিয়া, ইয়াতাওয়াল্লা, অর্থাৎ মুখ ফিরিয়ে নেয়। এ আয়াত শেষ হয়েছে মু'রিদূন দিয়ে, যা কোনো একবারের কাজ নয়, পরিচয় বোঝায়: তারা মুখ ফিরিয়ে থাকা লোক। প্রথমটি জানায় তারা কী করেছে। দ্বিতীয়টি যেন বলে তারা কোথায় দাঁড়িয়ে আছে। মুয়াসসারও গদ্যে এই ধরন রাখে: তাদের একদল মুখ ফিরিয়ে আছে, আল্লাহ ও তাঁর রাসূলের ফয়সালা কবুল করে না।"
          },
          {
            "en": "From what, exactly, do they turn? Al-Baghawi records two answers. They turn from the ruling itself, he says first; and it has been said, from answering the call at all. The first group would come and then reject the verdict; the second would not even present themselves. At-Tabari names what is refused in one phrase: they turn from accepting the truth and from being content with the ruling of the Messenger ﷺ. Al-Muyassar adds the sharpest clause of all. What they refuse, it says, is the truth in which there is no doubt.",
            "bn": "ঠিক কী থেকে তারা মুখ ফেরায়? বাগাভী দুটি উত্তর উল্লেখ করেন। প্রথমে বলেন, ফয়সালা থেকেই। তারপর বলেন, কারও মতে ডাকে সাড়া দেওয়া থেকেই। প্রথম অর্থে তারা আসে, তারপর রায় প্রত্যাখ্যান করে। দ্বিতীয় অর্থে তারা হাজিরই হয় না। কী প্রত্যাখ্যাত হয়, তাবারী তা একটি বাক্যে বলে দেন: তারা মুখ ফেরায় হক কবুল করা থেকে এবং রাসূলুল্লাহ ﷺ-এর ফয়সালায় সন্তুষ্ট থাকা থেকে। মুয়াসসার যোগ করে সবচেয়ে ধারালো কথাটি। তারা যা প্রত্যাখ্যান করে, তা এমন হক, যাতে কোনো সন্দেহ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowing the Verdict Already",
          "bn": "রায় আগেই জানা ছিল"
        },
        "p": [
          {
            "en": "Why would anyone flee a just judge? As-Sa'di gives the reason in a clause that reverses what one might expect. They turn aside, he says, because they know that the right is against them, and that the Shari'a rules only by what corresponds to the facts. The refusal is not a doubt about the judge's fairness. It is certainty about it. A man who expects to be wronged at least has a grievance; a man who expects to be judged correctly, and runs, has only his own claim to protect.",
            "bn": "ন্যায়পরায়ণ বিচারকের কাছ থেকে কেউ পালাবে কেন? সা'দী কারণটা এমন এক বাক্যে বলেন, যা আমাদের প্রত্যাশা উল্টে দেয়। তারা মুখ ফেরায়, কারণ তারা জানে হক তাদের বিপক্ষে, আর শরীয়ত কেবল বাস্তবে যা ঘটেছে, তার সঙ্গে মিলিয়েই ফয়সালা করে। কাজেই এই অস্বীকার বিচারকের ন্যায্যতা নিয়ে সন্দেহ থেকে আসেনি। এসেছে সেই ন্যায্যতা সম্পর্কে নিশ্চিত জ্ঞান থেকে। যে ভাবে তার উপর অন্যায় হবে, তার অন্তত একটা নালিশ থাকে। কিন্তু যে জানে তার বিচার ঠিকঠাকই হবে, তবু পালায়, তার রক্ষা করার মতো আছে শুধু নিজের দাবিটুকু।"
          },
          {
            "en": "As-Sa'di also says what such people wanted instead. They want the rulings of the Jahiliyya, he writes, and prefer rules not drawn from the Shari'a to its rulings. Ibn Kathir names a second motive beside knowledge. When they are asked to follow the guidance, he says, they turn from it and hold themselves too proud to follow it. Knowledge of one's guilt and pride in one's own judgement are not rival explanations here. Each commentator names a different root of the same refusal, one in the mind and one in the self.",
            "bn": "এমন লোকেরা এর বদলে কী চায়, সা'দী তাও বলেন। তারা চায় জাহিলিয়াতের বিধান, আর শরীয়তের বিধানের চেয়ে শরীয়তের বাইরের নিয়মকে বেশি পছন্দ করে। ইবন কাসীর জ্ঞানের পাশাপাশি দ্বিতীয় আরেকটি কারণ বলেন। হিদায়াত মানতে বলা হলে তারা তা থেকে মুখ ফেরায়, আর মনে মনে নিজেদের এত বড় ভাবে যে তা মেনে চলতে রাজি হয় না। নিজের দোষ জানা আর নিজের বিচারবুদ্ধি নিয়ে অহংকার, এখানে এ দুটো পরস্পরবিরোধী ব্যাখ্যা নয়। একই অস্বীকারের দুটি আলাদা শিকড় দুজন তাফসীরকার দেখান, একটা বুদ্ধিতে, অন্যটা নফসে।"
          },
          {
            "en": "The following verse bears this out from the other side. \"But if the right is theirs, they come to him in prompt obedience\" (24:49). Ibn Kathir's abridged commentary on the passage draws the conclusion: such a man's acceptance at the beginning was never because he believed the ruling to be true, but because it happened to agree with his desire. So the same person who flees in 24:48 can be seen hurrying forward in 24:49. What decides his direction is not the judge but the expected outcome.",
            "bn": "পরের আয়াত উল্টো দিক থেকে কথাটা প্রমাণ করে: কিন্তু হক যদি তাদের পক্ষে থাকে, তারা বিনীত হয়ে তাঁর কাছে ছুটে আসে (২৪:৪৯)। এই অংশের উপর ইবন কাসীরের সংক্ষিপ্ত তাফসীর সিদ্ধান্ত টানে এভাবে: শুরুতে এমন লোকের মেনে নেওয়াটা কখনোই এ জন্য ছিল না যে সে ফয়সালাকে সত্য বলে বিশ্বাস করত। ছিল এ জন্য যে তা ঘটনাক্রমে তার মনের চাওয়ার সঙ্গে মিলে গিয়েছিল। তাই যে লোক ২৪:৪৮ আয়াতে পালায়, তাকেই ২৪:৪৯ আয়াতে ছুটে আসতে দেখা যায়। তার পথ ঠিক করে দেয় বিচারক নয়, বরং রায় কোন দিকে যাবে, সেই অনুমান।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Pattern in an-Nisa'",
          "bn": "সূরা নিসায় একই ছাঁচ"
        },
        "p": [
          {
            "en": "Ibn Kathir sets this verse beside two others. This is like His saying, he writes, and quotes 4:60 and 4:61. The first describes those who claim to have believed in what was revealed to the Prophet ﷺ and what was revealed before him: \"They wish to refer legislation to ṭāghūt, while they were commanded to reject it.\" The second gives the scene of the summons: \"And when it is said to them, 'Come to what Allah has revealed and to the Messenger,' you see the hypocrites turning away from you in aversion.\"",
            "bn": "ইবন কাসীর এ আয়াতের পাশে আরও দুটি আয়াত রাখেন। তিনি লেখেন, এটা আল্লাহর ঐ বাণীর মতো, তারপর উদ্ধৃত করেন ৪:৬০ ও ৪:৬১। প্রথম আয়াতে আছে তাদের কথা, যারা দাবি করে, নবী ﷺ-এর উপর যা নাজিল হয়েছে আর তাঁর আগে যা নাজিল হয়েছে, তার উপর তারা ইমান এনেছে। অথচ তারা বিচার নিয়ে যেতে চায় তাগূতের কাছে, যদিও তাকে অস্বীকার করার হুকুম তাদের দেওয়া হয়েছিল। দ্বিতীয় আয়াত ডাকের দৃশ্যটা দেখায়: যখন তাদেরকে বলা হয়- তোমরা আল্লাহর অবতীর্ণ কিতাবের এবং রসূলের দিকে এসো, তখন তুমি ঐ মুনাফিকদেরকে দেখবে, তারা তোমা হতে ঘৃণা ভরে মুখ ফিরিয়ে নিচ্ছে।"
          },
          {
            "en": "Set side by side, the two passages share their parts. Each begins with a claim of faith: yaz'umūna annahum āmanū in an-Nisa', āmannā in an-Nur. Each has a summons, to what Allah revealed and to the Messenger. Each ends in a turning, yaṣuddūna there and mu'riḍūn here. The comparison is Ibn Kathir's, and it shows that 24:48 is not an isolated remark. The Qur'an draws this figure in more than one surah: a profession of faith that holds until a verdict comes into view.",
            "bn": "দুটি অংশ পাশাপাশি রাখলে দেখা যায়, গঠন একই। দুটোরই শুরু ইমানের দাবি দিয়ে: সূরা নিসায় ইয়াযউমূনা আন্নাহুম আমানূ, অর্থাৎ তারা দাবি করে যে ইমান এনেছে, আর সূরা নূরে আমান্না, আমরা ইমান এনেছি। দুটোতেই আছে আল্লাহর নাজিল করা বিধান ও রাসূলের দিকে ডাক। দুটোরই শেষ মুখ ফেরানোয়, সেখানে ইয়াসুদ্দূনা, এখানে মু'রিদূন। তুলনাটা ইবন কাসীরের। এ থেকে বোঝা যায়, ২৪:৪৮ আয়াত কোনো বিচ্ছিন্ন মন্তব্য নয়। কুরআন একাধিক সূরায় এই ছবি আঁকে: এমন ইমানের দাবি, যা টিকে থাকে ঠিক ততক্ষণ, যতক্ষণ রায়ের প্রশ্ন সামনে আসে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Without a Chain",
          "bn": "সনদহীন বর্ণনা"
        },
        "p": [
          {
            "en": "Al-Qurtubi relays an occasion for the verse, introducing it with the words \"at-Tabari and others said\". In it the verse is tied to a hypocrite named Bishr and a dispute over land with a Jewish man, who wished to take the case to the Prophet ﷺ. Al-Qurtubi gives no chain of narrators for this report and no grading of it. It is mentioned here so that the reader knows it exists, not as a fact about the verse on which anything can be built.",
            "bn": "কুরতুবী এ আয়াতের একটি শানে নুযূল উল্লেখ করেন, শুরুতে বলেন: তাবারী ও অন্যরা বলেছেন। সেই বর্ণনায় আয়াতটিকে জুড়ে দেওয়া হয়েছে বিশর নামের এক মুনাফিকের সঙ্গে, এক ইহুদি লোকের সঙ্গে জমি নিয়ে যার বিরোধ ছিল। ইহুদি লোকটি মামলাটা নবী ﷺ-এর কাছে নিতে চেয়েছিল। কুরতুবী এ বর্ণনার কোনো সনদ দেন না, কোনো মানও বলেন না। পাঠক যেন জানেন এমন একটা বর্ণনা আছে, শুধু সেজন্যই এখানে এর উল্লেখ। আয়াত সম্পর্কে এমন কোনো তথ্য হিসেবে নয়, যার উপর কিছু দাঁড় করানো যায়।"
          },
          {
            "en": "He then adds a second report, introduced with \"it has been said\" and credited to al-Mawardi, which names a different man and a dispute over water and land with 'Ali ibn Abi Talib (RA). This one too comes with no chain and no grading. The two reports disagree about whom the verse concerns, and neither can be checked from what was read for this verse. So nothing in this article rests on either. The verse itself names no one. It describes a kind of conduct, and leaves the names unspoken.",
            "bn": "এরপর তিনি দ্বিতীয় একটি বর্ণনা যোগ করেন, শুরু করেন 'বলা হয়েছে' কথাটি দিয়ে, আর উৎস হিসেবে মাওয়ার্দীর নাম বলেন। সেখানে নাম এসেছে অন্য এক লোকের, আর বিরোধ ছিল আলী ইবন আবী তালিব (রাঃ)-এর সঙ্গে পানি ও জমি নিয়ে। এরও কোনো সনদ নেই, কোনো মানও বলা হয়নি। আয়াতটি কাকে নিয়ে, এ প্রশ্নে দুই বর্ণনা একমত নয়। আর এ আয়াতের জন্য যা পড়া হয়েছে, তা দিয়ে কোনোটাই যাচাই করা যায় না। তাই এ আলোচনার কিছুই এ দুটির উপর দাঁড়িয়ে নেই। আয়াত নিজে কারও নাম নেয় না। এক ধরনের আচরণের বর্ণনা দেয়, নামগুলো অনুচ্চারিত রাখে।"
          },
          {
            "en": "Ibn Kathir, in his Arabic commentary, also relays from at-Tabarani a narration through al-Hasan from Samura, raised to the Prophet ﷺ, on the subject of a person summoned to an authority who does not answer. He gives it no grading there, and it was not confirmed on a collection page for this verse, so its wording is not quoted here. None of the commentaries read for this verse attaches a sound, graded hadith to it. A related report from al-Hasan is taken up in the article on 24:50.",
            "bn": "ইবন কাসীর তাঁর আরবি তাফসীরে তাবারানী থেকে আরেকটি বর্ণনাও আনেন, হাসানের সূত্রে সামুরা থেকে, যা নবী ﷺ পর্যন্ত পৌঁছানো হয়েছে। বিষয়টা এমন লোক, যাকে কর্তৃপক্ষের কাছে ডাকা হয়, অথচ সে সাড়া দেয় না। ইবন কাসীর সেখানে এর কোনো মান বলেন না। আর এ আয়াতের জন্য কোনো হাদীস সংকলনের পাতায় এটি যাচাই করা যায়নি। তাই এর শব্দ এখানে উদ্ধৃত করা হলো না। এ আয়াতের জন্য পড়া তাফসীরগুলোর কোনোটিই এর সঙ্গে কোনো সহীহ, মান-নির্ধারিত হাদীস জুড়ে দেয়নি। হাসানের কাছ থেকে আসা কাছাকাছি একটি বর্ণনার আলোচনা আছে ২৪:৫০ আয়াতের প্রবন্ধে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Test Turned Inward",
          "bn": "নিজের দিকে ফেরানো পরীক্ষা"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes a party among the hypocrites of the Prophet's ﷺ own time, who professed faith and then would not come to his judgment. It licenses nothing against any living person or community, and it names no group of today. It gives no one the right to call a neighbour a hypocrite, or to read a heart from a single dispute. As-Sa'di's words about preferring other rules describe those men as he understood them. They are not a verdict to pass on anyone now.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি বর্ণনা করে নবী ﷺ-এর নিজের যুগের মুনাফিকদের একটি দলকে, যারা মুখে ইমানের দাবি করেছিল, অথচ তাঁর ফয়সালার কাছে আসতে রাজি হয়নি। বর্তমানের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না, আজকের কোনো দলের নামও নেয় না। প্রতিবেশীকে মুনাফিক বলার অধিকার এটা কাউকে দেয় না। একটি বিবাদ দেখে কারও অন্তরের বিচার করার অধিকারও দেয় না। শরীয়তের বাইরের নিয়ম পছন্দ করার যে কথা সা'দী বলেছেন, তা ঐ লোকদের বর্ণনা, যেমনটা তিনি বুঝেছেন। আজ কারও উপর রায় দেওয়ার জন্য সে কথা নয়।"
          },
          {
            "en": "What the verse does leave for every reader is a question. Most people meet Allah's ruling, in the end, through ordinary disputes: a share of an inheritance, a debt, a boundary, a promise made in trade. It is easy to honour the ruling in general and to look for another door when it reaches one's own purse. The verse asks where a professed obedience stops, and it points to the place to look: the moment a just verdict might cost something.",
            "bn": "তবে প্রত্যেক পাঠকের জন্য আয়াতটি একটা প্রশ্ন রেখে যায়। বেশির ভাগ মানুষ আল্লাহর বিধানের মুখোমুখি হয় খুব সাধারণ বিবাদে। মিরাসের ভাগ, কোনো দেনা, জমির সীমানা, ব্যবসায় দেওয়া কোনো কথা। সাধারণভাবে বিধানের সম্মান করা সহজ। কিন্তু যখন তা নিজের পকেটে হাত দেয়, তখন অন্য দরজা খোঁজাও সহজ। আয়াতটি জিজ্ঞেস করে, মুখে বলা আনুগত্য কোথায় গিয়ে থেমে যায়। আর কোথায় খুঁজতে হবে, তাও দেখিয়ে দেয়: সেই মুহূর্তে, যখন ন্যায্য রায়ের জন্য কিছু ছাড়তে হতে পারে।"
          },
          {
            "en": "The answer to 24:48 comes three verses later. Verse 24:51 repeats its wording almost exactly, when they are called to Allah and His Messenger to judge between them, and gives the other response: \"We hear and we obey. And those are the successful.\" The summons is the same in both verses, and so is the judge. What differs is only what the heart does when it hears the call. That is the whole distance between turning aside and success.",
            "bn": "২৪:৪৮ আয়াতের জবাব আসে তিনটি আয়াত পরে। ২৪:৫১ আয়াত প্রায় হুবহু একই কথা ফিরিয়ে আনে: যখন তাদের মাঝে ফয়সালার জন্য আল্লাহ ও তাঁর রাসূলের দিকে ডাকা হয়। তারপর দেয় অন্য উত্তরটি: আমরা শুনলাম ও মেনে নিলাম, আর তারাই সফলকাম। দুই আয়াতে ডাক একই, বিচারকও একই। তফাত শুধু এক জায়গায়, ডাক শুনে অন্তর কী করে। মুখ ফিরিয়ে নেওয়া আর সফলতার মাঝে পুরো দূরত্বটা এটুকুই।"
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
          "bn": "যে ডাক তারা এড়িয়ে যায়"
        },
        "p": [
          {
            "en": "The verses just before this one draw a portrait. In 24:47 a group say with their tongues, \"We have believed in Allah and in the Messenger, and we obey,\" and then a party of them turns away. Ibn Kathir's abridged commentary reads this as people whose deeds contradict their words: they say that which they do not do. Then 24:48 sharpens it — when they are called to Allah and His Messenger to judge between them, at once a party of them turns aside in refusal. The loud claim of faith and the quiet flight from judgment sit side by side.",
            "bn": "এই আয়াতের ঠিক আগের আয়াতগুলো একটা ছবি আঁকে। ২৪:৪৭ আয়াতে একদল মুখে বলে, আমরা আল্লাহ ও রাসূলের প্রতি ইমান আনলাম, মেনেও নিলাম। তারপর তাদেরই একদল মুখ ফিরিয়ে নেয়। ইবন কাসীরের সংক্ষিপ্ত তাফসীর একে পড়ে এভাবে: এদের কাজ তাদের কথার উল্টো, মুখে যা বলে কাজে তা করে না। তারপর ২৪:৪৮ আয়াত কথাটা আরও ধারালো করে। তাদের মাঝে ফয়সালার জন্য আল্লাহ ও তাঁর রাসূলের দিকে ডাকা হলে তাদের একদল তখনই মুখ ফিরিয়ে নেয়। ইমানের জোরালো দাবি আর ফয়সালা থেকে চুপচাপ পালানো, দুটো পাশাপাশি বসে থাকে।"
          },
          {
            "en": "What exposes them is 24:49: \"But if the right is theirs, they come to him in prompt obedience.\" Ibn Kathir explains that when the ruling will fall in their favour they come willingly and listen and obey; but if it will go against a man, he turns away and would rather be judged by someone other than the Prophet ﷺ, so that his false claim might prevail. His eagerness was never a love of the truth. It was that the truth, for the moment, matched what he wanted. The instant it stopped matching, he was gone.",
            "bn": "তাদের আসল চেহারা ফাঁস করে দেয় ২৪:৪৯ আয়াত: কিন্তু হক যদি তাদের পক্ষে থাকে, তবে তারা বিনীতভাবে ছুটে আসে। ইবন কাসীর বলেন, রায় যখন তাদের পক্ষে যাবে, তখন তারা খুশিমনে এসে শোনে ও মানে। কিন্তু রায় বিপক্ষে গেলে লোকটি মুখ ফিরিয়ে নেয়, চায় নবী ﷺ ছাড়া অন্য কারও কাছে বিচার হোক, যাতে তার মিথ্যা দাবি টিকে যায়। তার আগ্রহ কখনো হকের প্রতি ভালোবাসা ছিল না। আসলে তখনকার মতো হকটা তার চাওয়ার সঙ্গে মিলে গিয়েছিল, এই যা। যেই মেলা বন্ধ হলো, সে সরে পড়ল।"
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
            "bn": "তিনটি প্রশ্ন আসে একটানা: তাদের অন্তরে কি রোগ আছে, নাকি তারা সন্দেহে পড়েছে, নাকি তারা ভয় পায় যে আল্লাহ ও তাঁর রাসূল তাদের প্রতি অন্যায় করবেন? বাগাভী বলেন, এ প্রশ্ন দোষারোপ আর ভর্ৎসনার; আসল কথা হলো, তারা সত্যিই এমন। কুরতুবী বলেন, সরাসরি বলে দেওয়ার চেয়ে প্রশ্ন করে বলা তিরস্কারে বেশি কঠোর, নিন্দায় বেশি জোরালো, তাই এখানে প্রশ্নের ধরন বেছে নেওয়া হয়েছে। যার রোগ আগেই স্পষ্ট, তাকে ‘ভেতরে কি কোনো রোগ আছে?’ জিজ্ঞেস করা মানে অজুহাতের আড়ালে দাঁড়ানো লোকটিকে সবার সামনে উন্মুক্ত করে দেওয়া।"
          },
          {
            "en": "Then the verse turns on its heel: \"Rather, it is they who are the wrongdoers.\" Al-Muyassar reads the movement plainly — is the cause the disease of hypocrisy, or a doubt about the Prophet's ﷺ standing, or a fear that the ruling would be unjust? No; they do not fear any injustice at all; the real cause is that they themselves are the wrongdoers. So the three questions are not three separate charges to be weighed and totalled. They are three doors the verse opens and shuts in turn, until only one door is left standing open: the fault lies in them.",
            "bn": "তারপর আয়াত হঠাৎ মোড় ঘোরায়: বরং তারাই অন্যায়কারী। মুয়াসসার এই মোড়টা সহজ করে বুঝিয়ে দেয়। কারণটা কী? মুনাফিকির রোগ, নাকি নবী ﷺ-এর মর্যাদা নিয়ে সন্দেহ, নাকি রায়ে অবিচারের ভয়? না, কোনো অবিচারের ভয় তারা আদৌ করে না। আসল কারণ, তারা নিজেরাই অন্যায়কারী। তাই তিনটি প্রশ্ন এমন তিনটি আলাদা অভিযোগ নয়, যা ওজন করে যোগফল টানতে হবে। এ যেন তিনটি দরজা, আয়াত একটা একটা করে খোলে আর বন্ধ করে, শেষে খোলা থাকে কেবল একটি: দোষ তাদের নিজেদেরই।"
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
            "bn": "সা’দী প্রথম শব্দ ‘রোগ’-কে বোঝেন এমন এক অসুখ হিসেবে, যা অন্তরকে সুস্থতা থেকে সরিয়ে দিয়েছে, তার বোধ কেড়ে নিয়েছে। ফলে অন্তরটা হয়ে যায় রোগা শরীরের মতো: যা তাকে সারিয়ে তুলত তা থেকে মুখ ফেরায়, আর যা ক্ষতি করে তার দিকে হাত বাড়ায়। আগের আয়াতগুলোর মুখ ফেরানো ঠিক এই রকমই। সুস্থ অন্তর ন্যায্য রায়ের দিকে ছুটে যায়, আর এই অন্তর তা থেকে পালায়। ইবন কাসীরও তাঁর আরবি তাফসীরে প্রথম সম্ভাবনা হিসেবে এটাই রাখেন: অন্তরে গেঁথে বসা, লেগে থাকা এক রোগ।"
          },
          {
            "en": "Al-Muyassar puts a name to the disease: the disease of hypocrisy. Naming it matters, because a hypocrite is not, in this verse's setting, a stranger outside the community. He is the very man who said \"we believe and obey\" in 24:47 and then would not stand before the ruling in 24:48. The sickness is not unbelief shouted in the open. It is a faith professed with the tongue that cannot survive its first real contact with a verdict it does not like. As-Sa'di draws the rule out of the whole passage: faith is not bare words until action is joined to it.",
            "bn": "মুয়াসসার রোগটির নাম বলে দেয়: মুনাফিকির রোগ। নামটা গুরুত্বপূর্ণ, কারণ এই আয়াতের প্রেক্ষাপটে মুনাফিক সমাজের বাইরের কোনো অচেনা লোক নয়। সে সেই লোকই, যে ২৪:৪৭ আয়াতে বলেছিল ‘আমরা ইমান আনলাম, মেনে নিলাম’, তারপর ২৪:৪৮ আয়াতে রায়ের সামনে দাঁড়াতে রাজি হলো না। এ রোগ প্রকাশ্যে চিৎকার করে বলা অবিশ্বাস নয়। এ হলো শুধু মুখে দাবি করা ইমান, যা অপছন্দের রায়ের সঙ্গে প্রথম আসল মুখোমুখিতেই ভেঙে পড়ে। সা’দী পুরো অংশ থেকে নিয়মটা বের করে আনেন: আমল যোগ না হলে নিছক মুখের কথায় ইমান হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Or Have They Doubted",
          "bn": "নাকি তারা সন্দেহে পড়েছে"
        },
        "p": [
          {
            "en": "At-Tabari reads am irtābū as a doubt in the Messenger's being God's Messenger, a doubt over his prophethood that holds them back from answering his ruling and being content with it. Al-Qurtubi glosses the earlier word maraḍ itself as doubt and misgiving, and irtābū as a doubt that has arisen in his prophethood and his justice. So the second question reaches deeper than the first. It is no longer a hidden sickness but an actual wavering: is he who judges truly sent by God, and is his ruling truly fair?",
            "bn": "তাবারীর মতে ‘আম ইরতাবূ’ মানে রাসূল যে সত্যিই আল্লাহর রাসূল, সে ব্যাপারে সন্দেহ। নবুয়ত নিয়ে এই সন্দেহই তাদের তাঁর রায়ে সাড়া দিতে আর তাতে সন্তুষ্ট থাকতে দেয় না। কুরতুবী আগের শব্দ ‘রোগ’-কেই ব্যাখ্যা করেন সন্দেহ ও দ্বিধা বলে, আর তাঁর মতে ‘ইরতাবূ’ মানে তাঁর নবুয়ত ও ন্যায়বিচার নিয়ে মনে জাগা সন্দেহ। তাই দ্বিতীয় প্রশ্নটা প্রথমটার চেয়ে গভীরে যায়। এটা আর লুকানো রোগ নয়, সরাসরি দোটানা: যিনি বিচার করছেন, তিনি কি সত্যিই আল্লাহর পাঠানো? তাঁর রায় কি সত্যিই ন্যায্য?"
          },
          {
            "en": "As-Sa'di adds the inner motion. They doubted, he says, and their hearts grew anxious and unsettled about the ruling of Allah and His Messenger, and they accused it of not judging by the truth. That last verb is the sharp one: the doubt does not stay a private hesitation, it hardens into an accusation aimed at the ruling itself. A heart that will not submit needs a story about why, and the story it reaches for is that the verdict cannot be trusted. Suspecting the judge is lighter to carry than obeying a judgment that crosses your wishes.",
            "bn": "সা’দী ভেতরের নড়াচড়াটুকুও দেখান। তিনি বলেন, তারা সন্দেহ করল, আল্লাহ ও তাঁর রাসূলের রায় নিয়ে তাদের অন্তর অস্থির আর উদ্বিগ্ন হয়ে উঠল, আর তারা রায়কে দোষ দিল যে তা হক অনুযায়ী বিচার করে না। এই শেষ ক্রিয়াটাই সবচেয়ে ধারালো। সন্দেহ আর মনের ভেতরের চুপচাপ দ্বিধা হয়ে থাকে না, শক্ত হয়ে খোদ রায়ের বিরুদ্ধেই অভিযোগ হয়ে দাঁড়ায়। যে অন্তর মাথা নোয়াতে চায় না, তার একটা অজুহাত লাগে। আর হাতের কাছে সবচেয়ে সহজ অজুহাত: এ রায়ে ভরসা করা যায় না। নিজের চাওয়ার উল্টো রায় মেনে নেওয়ার চেয়ে বিচারককে সন্দেহ করা অনেক হালকা বোঝা।"
          }
        ]
      },
      {
        "h": {
          "en": "Fearing an Unjust Verdict",
          "bn": "অন্যায় রায়ের ভয়"
        },
        "p": [
          {
            "en": "The third question is the heaviest: or do they fear that Allah and His Messenger will wrong them? The verb yaḥīf is from ḥayf, to deviate from justice, to lean and so to wrong. Al-Qurtubi glosses it as to deviate in the ruling and do injustice; al-Baghawi, simply, with injustice; as-Sa'di, that He rule against them an unjust, crooked ruling. The fear the verse names is precisely the fear that the divine verdict itself might be bent, that to submit could cost a man more than what is truly his due.",
            "bn": "তৃতীয় প্রশ্নটাই সবচেয়ে ভারী: নাকি তারা ভয় পায় যে আল্লাহ ও তাঁর রাসূল তাদের প্রতি অন্যায় করবেন? ‘ইয়াহীফ’ ক্রিয়াটি এসেছে ‘হাইফ’ থেকে, মানে ন্যায় থেকে সরে যাওয়া, এক দিকে হেলে পড়া, আর এভাবে অন্যায় করা। কুরতুবীর ব্যাখ্যায় এর মানে রায়ে পক্ষপাত করে জুলুম করা; বাগাভী সংক্ষেপে বলেন, জুলুম করা; আর সা’দী বলেন, তাদের বিরুদ্ধে অন্যায়, বাঁকা রায় দেওয়া। আয়াত ঠিক এই ভয়টারই নাম নেয়: খোদ আল্লাহর রায়ই হয়তো বাঁকা হবে, মেনে নিলে হয়তো ন্যায্যভাবে যা দেওয়ার কথা তার চেয়ে বেশি খেসারত দিতে হবে।"
          },
          {
            "en": "At-Tabari pauses on a fine point of the wording. The verse says they fear that Allah and His Messenger will wrong them, yet the meaning, he says, is that the Messenger ﷺ would wrong them, since the ruling in the dispute is his. God's name is placed first out of reverence for God. His evidence is 24:48 itself, which reads \"to judge between them\" with the verb kept singular, liyaḥkuma, not the dual — the Messenger alone is named as judge, though the honour of the phrase begins with God.",
            "bn": "তাবারী শব্দচয়নের একটা সূক্ষ্ম দিকে থামেন। আয়াত বলছে, তারা ভয় পায় আল্লাহ ও তাঁর রাসূল তাদের প্রতি অন্যায় করবেন; কিন্তু তাবারীর মতে আসল অর্থ হলো, রাসূল ﷺ অন্যায় করবেন, কারণ বিবাদের রায় দেওয়ার দায়িত্ব তাঁরই। আল্লাহর নাম আগে এসেছে আল্লাহর প্রতি সম্মান দেখাতে। তাঁর দলিল ২৪:৪৮ আয়াত নিজেই। সেখানে ‘তাদের মাঝে ফয়সালা করার জন্য’ কথায় ক্রিয়াটি একবচনে, দ্বিবচনে নয়। অর্থাৎ বিচারক হিসেবে নাম এসেছে কেবল রাসূলের, যদিও কথার সম্মানের শুরু আল্লাহকে দিয়ে।"
          },
          {
            "en": "To this fear the commentators answer alike. As-Sa'di says the ruling of Allah and His Messenger is the utmost in justice and fairness and accords with wisdom, and he sets beside it the Qur'an's own words, who is better than Allah in judgment for a people who are certain (5:50). Ibn Kathir says Allah and His Messenger are free of the injustice and deviation these men imagine; exalted are they above it. So the fear is not a reasonable caution the verse respects. It is itself the disease, a fear that could only take root in a heart already sick.",
            "bn": "এই ভয়ের জবাবে তাফসীরকারেরা একই কথা বলেন। সা’দী বলেন, আল্লাহ ও তাঁর রাসূলের রায় ন্যায় ও ইনসাফের চূড়ান্ত, হিকমতের সঙ্গেও তা পুরোপুরি মেলে। এর পাশে তিনি রাখেন কুরআনেরই কথা: দৃঢ় বিশ্বাসী সম্প্রদায়ের জন্য বিধান দেওয়ায় আল্লাহর চেয়ে উত্তম আর কে (৫:৫০)? ইবন কাসীর বলেন, এই লোকেরা যে অবিচার আর পক্ষপাতের কল্পনা করছে, আল্লাহ ও তাঁর রাসূল তা থেকে মুক্ত, এসবের অনেক ঊর্ধ্বে। তাই এ ভয় এমন কোনো যুক্তিসংগত সাবধানতা নয়, যাকে আয়াত গুরুত্ব দেয়। এ ভয় নিজেই সেই রোগ; আগে থেকে অসুস্থ অন্তর ছাড়া আর কোথাও এর শিকড় গাড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Occasion Behind It",
          "bn": "যে ঘটনায় নাজিল হলো"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an relates, on the authority of at-Tabari and others, that these verses came down over a particular incident. A hypocrite named Bishr had a dispute with a Jewish man over a piece of land. The Jew proposed taking the matter to the Prophet ﷺ for judgment. Bishr, knowing he was in the wrong and that the Prophet ﷺ would decide the case on its merits and so rule against him, refused, and pressed instead to take it to Ka'b ibn al-Ashraf. On this the verses were revealed. The turning-away of 24:48 has, in this account, a face and a name.",
            "bn": "মাআরিফুল কুরআন তাবারী ও অন্যদের সূত্রে বর্ণনা করে যে এই আয়াতগুলো একটা নির্দিষ্ট ঘটনাকে ঘিরে নাজিল হয়। বিশর নামের এক মুনাফিকের সঙ্গে এক ইহুদির এক টুকরো জমি নিয়ে বিবাদ ছিল। ইহুদি প্রস্তাব দেয়, বিষয়টা নবী ﷺ-এর কাছে ফয়সালার জন্য নেওয়া হোক। বিশর জানত সে অন্যায়ের উপর আছে, আর নবী ﷺ ন্যায্যতার ভিত্তিতে বিচার করে তার বিরুদ্ধেই রায় দেবেন। তাই সে রাজি হলো না, বরং জোর দিল কা’ব ইবন আল-আশরাফের কাছে নেওয়ার। এ নিয়েই আয়াতগুলো নাজিল হয়। এই বর্ণনায় ২৪:৪৮ আয়াতের মুখ ফেরানোর একটা চেহারা আছে, একটা নাম আছে।"
          },
          {
            "en": "Ma'arif then draws a careful point from the verse's own wording. To ask \"is there a malady in their hearts?\" is, it says, to set aside firm unbelief and doubt of prophethood as the real cause of Bishr's evasion. Unbelief and doubt are real enough among the hypocrites, but the underlying driver here was plainer and uglier: he knew that a case decided on merit was a case he would lose. Ibn Kathir approaches the same words from another side, holding that whichever of the three it is, it amounts to pure disbelief. The verse carries both the motive and the verdict.",
            "bn": "এরপর মাআরিফ আয়াতের শব্দ থেকেই একটা সূক্ষ্ম কথা বের করে। তার মতে, ‘তাদের অন্তরে কি রোগ?’ এই প্রশ্নের মানে হলো, বিশরের এড়িয়ে যাওয়ার আসল কারণের তালিকা থেকে পাকা অবিশ্বাস আর নবুয়তে সন্দেহকে সরিয়ে রাখা। মুনাফিকদের মধ্যে অবিশ্বাস আর সন্দেহ তো ছিলই, তবে এখানে আসল তাড়নাটা ছিল আরও সাদামাটা, আরও কুৎসিত: সে জানত, ন্যায্যভাবে বিচার হলে মামলায় সে হারবে। ইবন কাসীর একই শব্দগুলো দেখেন অন্য দিক থেকে। তাঁর মতে তিনটির যেটাই হোক, তা নিরেট কুফর। আয়াতে উদ্দেশ্য আর রায়, দুটোই ধরা আছে।"
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
            "bn": "তাফসীরগুলো আয়াতটির সঙ্গে একটিমাত্র বর্ণনা যুক্ত করে, আর সেটি নিয়েও তারা একমত নয়। ইবন কাসীর ইবন আবী হাতিমের সূত্রে হাসান থেকে বর্ণনা করেন: যে হকের উপর থাকত, তাকে নবী ﷺ-এর কাছে ডাকা হলে সে মেনে নিত; আর যার মতলব অন্যায়ের দিকে, সে মুখ ফিরিয়ে নিত। তখন এই আয়াত নাজিল হয়, আর নবী ﷺ বলেন, ‘যার সঙ্গে তার ভাইয়ের কোনো বিবাদ আছে, আর তাকে মুসলিমদের কোনো বিচারকের কাছে ডাকা হলে সে সাড়া দিতে অস্বীকার করে, সে অন্যায়কারী, তার কোনো হক নেই।’ ইবন কাসীর নিজেই বর্ণনাটিকে গরীব ও মুরসাল বলেছেন।"
          },
          {
            "en": "Al-Qurtubi carries the same report from al-Hasan, then records Ibn al-Arabi's verdict on it: this, he says, is a baseless hadith. Ibn al-Arabi then splits the wording. The clause \"he is a wrongdoer\" is sound speech, he grants, while \"he has no right\" does not hold, unless the meaning is that the man stands upon something other than the truth. So no sound, connected hadith is fixed to this verse in the tafsirs read here. There is a mursal report that Ibn Kathir marks weak and Ibn al-Arabi rejects, with only its first half upheld for its meaning.",
            "bn": "কুরতুবীও হাসান থেকে একই বর্ণনা আনেন, তারপর এর উপর ইবনুল আরাবীর রায় উল্লেখ করেন: তাঁর মতে এটি ভিত্তিহীন হাদিস। এরপর ইবনুল আরাবী কথাগুলো ভাগ করে দেখেন। ‘সে অন্যায়কারী’ কথাটা ঠিক, এটুকু তিনি মানেন; কিন্তু ‘তার কোনো হক নেই’ কথাটা টেকে না, যদি না এর অর্থ হয় যে লোকটি হকের বদলে অন্য কিছুর উপর দাঁড়িয়ে আছে। তাই এখানে যে তাফসীরগুলো পড়া হয়েছে, তাতে এ আয়াতের সঙ্গে কোনো সহিহ, অবিচ্ছিন্ন সনদের হাদিস যুক্ত নেই। আছে কেবল একটি মুরসাল বর্ণনা, ইবন কাসীর যাকে দুর্বল বলে চিহ্নিত করেন আর ইবনুল আরাবী প্রত্যাখ্যান করেন; অর্থের দিক থেকে এর শুধু প্রথম অর্ধেকটুকু টিকে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Mirror, Not the Label",
          "bn": "আয়না, তকমা নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks of the hypocrites of that setting who claimed faith and then fled the Prophet's ﷺ judgment, and it names them wrongdoers. It licenses nothing against any living person or community. Bal ulā'ika humu-ẓ-ẓālimūn is a verdict on a described refusal, not a label to hang on anyone whose case has not been heard, and not on a people as a class. Al-Baghawi even turns the wrong inward: they are wrongdoers against themselves, he says, by turning away from the truth. The harm the hypocrite does lands first on his own heart.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত বলছে সেই সময়ের মুনাফিকদের কথা, যারা ইমানের দাবি করেও নবী ﷺ-এর ফয়সালা থেকে পালিয়েছিল। আয়াত তাদেরই অন্যায়কারী বলে। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। ‘বাল উলাইকা হুমুয জালিমূন’ হলো বর্ণিত এক মুখ ফেরানোর উপর রায়। যার কথা এখনো শোনাই হয়নি, তার গায়ে সাঁটার তকমা এটা নয়, কোনো জাতির গায়েও নয়। বাগাভী বরং দোষটাকে ভেতরের দিকে ফেরান: হক থেকে মুখ ফিরিয়ে তারা নিজেদের উপরই অন্যায় করেছে। মুনাফিক যে ক্ষতি করে, তা আগে পড়ে তার নিজের অন্তরেই।"
          },
          {
            "en": "Read this way, the three questions become a mirror, not a weapon. As-Sa'di takes this turn: whoever does not submit to the ruling of Allah and His Messenger shows a disease in his heart and a doubt in his faith; and it is forbidden, he adds, to think ill of the rulings of the Sharī'a or suppose them contrary to justice and wisdom. The verse hands the reader a test to run on himself, not a charge to file against a neighbour. The honest question is where I turn away, and why.",
            "bn": "এভাবে পড়লে তিনটি প্রশ্ন অস্ত্র নয়, আয়না হয়ে ওঠে। সা’দী এই দিকেই মোড় নেন: যে আল্লাহ ও তাঁর রাসূলের রায় মানে না, সে নিজেই দেখিয়ে দেয় তার অন্তরে রোগ আছে, ইমানে সন্দেহ আছে। তিনি আরও বলেন, শরীয়তের বিধান নিয়ে বদগুমান করা, কিংবা সেগুলোকে ন্যায় ও হিকমতের উল্টো ভাবা হারাম। আয়াত পাঠকের হাতে তুলে দেয় নিজেকে যাচাই করার একটা পরীক্ষা, প্রতিবেশীর বিরুদ্ধে দায়ের করার মামলা নয়। আসল প্রশ্নটা হলো: আমি নিজে কোথায় মুখ ফিরিয়ে নিই, আর কেন?"
          },
          {
            "en": "The very next verse holds up the opposite heart. When the believers are called to Allah and His Messenger to judge between them, their only word is \"we hear and we obey,\" and 24:51 seals them as the successful. The difference between the two hearts is not how much each one knows, for both hear the same summons. It is what each does when the ruling crosses his wishes. To submit when the verdict may cost you something is the exact test the hypocrite failed. That surrender, offered before you know which way the ruling will fall, is what real faith looks like.",
            "bn": "ঠিক পরের আয়াতটাই উল্টো অন্তরটাকে সামনে ধরে। মুমিনদের যখন তাদের মাঝে ফয়সালার জন্য আল্লাহ ও তাঁর রাসূলের দিকে ডাকা হয়, তাদের একটাই কথা, ‘আমরা শুনলাম ও মানলাম’, আর ২৪:৫১ আয়াত তাদের সফলকাম বলে সিলমোহর দেয়। দুই অন্তরের পার্থক্য এই নয় যে কে কতটা জানে, কারণ দুজনেই একই ডাক শোনে। পার্থক্য হলো, রায় নিজের চাওয়ার উল্টো গেলে কে কী করে। রায় হয়তো কিছু খেসারত চাইবে জেনেও মেনে নেওয়া, এই তো সেই পরীক্ষা যেখানে মুনাফিক ফেল করেছিল। রায় কোন দিকে যাবে তা জানার আগেই করা এই আত্মসমর্পণই খাঁটি ইমানের চেহারা।"
          }
        ]
      }
    ]
  },
  "24:52": {
    "sections": [
      {
        "h": {
          "en": "Beyond the Single Dispute",
          "bn": "এক বিবাদের গণ্ডি ছাড়িয়ে"
        },
        "p": [
          {
            "en": "Surah an-Nur sets two answers side by side. In 24:47 to 24:50 a party says it believes and obeys, then turns aside when called to Allah and His Messenger for judgement, and comes willingly only when the right is on its side. In 24:51 the believers answer the same call with we hear and we obey. Our verse follows at once: wa-man yuti'i Allaha wa-rasulahu wa-yakhsha Allaha wa-yattaqhi fa-ula'ika humu al-fa'izun, and whoever obeys Allah and His Messenger, fears Allah and keeps wary of Him, it is they who are the winners.",
            "bn": "সূরা আন-নূর দুটি জবাব পাশাপাশি রাখে। ২৪:৪৭ থেকে ২৪:৫০ আয়াতে একদল লোক মুখে বলে, আমরা ঈমান এনেছি, মেনে নিয়েছি। অথচ ফয়সালার জন্য আল্লাহ ও তাঁর রসূলের দিকে ডাকা হলে তারা মুখ ফিরিয়ে নেয়। হক নিজেদের পক্ষে থাকলে তবেই তারা বিনয়ের সঙ্গে ছুটে আসে। ২৪:৫১ আয়াতে মু'মিনরা একই ডাকে সাড়া দেয়: আমরা শুনলাম ও মেনে নিলাম। এর পরপরই আমাদের আয়াত: ওয়া মাঁই ইউতি'ইল্লাহা ওয়া রসূলাহু ওয়া ইয়াখশাল্লাহা ওয়া ইয়াত্তাকহি ফা-উলা'ইকা হুমুল ফা'ইযূন। যে আল্লাহ ও তাঁর রসূলের আনুগত্য করে, আল্লাহকে ভয় করে এবং তাঁর ব্যাপারে সতর্ক থাকে, তারাই সফলকাম।"
          },
          {
            "en": "As-Sa'di names the move the verse makes. Having mentioned the merit of obedience in a ruling specifically, he says, it now mentions its merit in general, in every state. The dispute of the previous verses is one occasion for obedience; this verse takes in all the others. Ibn Kathir, in the abridged English, reads the passage as a contrast between hypocrites whose deeds contradict their words and believers who seek no way apart from the Book of Allah and the Sunnah of His Messenger.",
            "bn": "আয়াতটি কোন দিকে মোড় নেয়, সা'দী তা স্পষ্ট করে বলেন। আগে বিশেষ করে ফয়সালার ক্ষেত্রে আনুগত্যের মর্যাদা এসেছে। এবার সাধারণভাবে, সব অবস্থায় আনুগত্যের মর্যাদা আসছে। আগের আয়াতগুলোর বিবাদ আনুগত্যের একটা উপলক্ষ মাত্র, আর এ আয়াত বাকি সব উপলক্ষকে ধারণ করে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ পুরো অংশটাকে পড়ে দুই দলের তুলনা হিসেবে। একদিকে মুনাফিক, যাদের কাজ তাদের কথার উল্টো। অন্যদিকে মু'মিন, যারা আল্লাহর কিতাব ও তাঁর রসূলের সুন্নাহ ছাড়া অন্য কোনো পথ খোঁজে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whether It Pleases or Pains",
          "bn": "ভালো লাগুক বা না লাগুক"
        },
        "p": [
          {
            "en": "On the core of the first clause the commentators agree: obedience is doing what is commanded and leaving what is forbidden. Ibn Kathir: in what the two of them commanded him, and leaving what they forbade him. The Muyassar: in the command and the prohibition. Al-Qurtubi: in what He commanded and ruled. As-Sa'di adds belief to action. To obey Allah and His Messenger, he says, is to affirm what they report as true and to carry out what they command. Obedience on this account has a side in the heart as well as a side in the limbs.",
            "bn": "প্রথম অংশের মূল কথায় তাফসীরকারেরা একমত: আদেশ পালন করা আর নিষেধ থেকে বিরত থাকা, এটাই আনুগত্য। ইবন কাসীর বলেন, দুজনে তাকে যা আদেশ করেছেন তাতে, আর যা নিষেধ করেছেন তা ছেড়ে দেওয়ায়। মুয়াসসার বলে, আদেশে ও নিষেধে। কুরতুবী বলেন, তিনি যা আদেশ করেছেন ও যে ফয়সালা দিয়েছেন তাতে। সা'দী আমলের সঙ্গে বিশ্বাসকেও যোগ করেন। তাঁর ভাষায়, আল্লাহ ও তাঁর রসূলের আনুগত্য মানে তাঁদের দেওয়া খবরকে সত্য বলে মেনে নেওয়া আর তাঁদের আদেশ পালন করা। তাহলে এ আনুগত্যের একটা দিক অন্তরে, আরেকটা দিক অঙ্গপ্রত্যঙ্গে।"
          },
          {
            "en": "At-Tabari adds a clause aimed squarely at the scene before it. The one who obeys, he says, obeys in what He commanded and forbade, and submits to their ruling both for him and against him: yusallimu li-hukmihima lahu wa-'alayhi. That is the exact reverse of the party in 24:49, who come in prompt obedience only when the right is theirs. Al-Baghawi records from Ibn 'Abbas (RA) a gloss in the same spirit: whoever obeys Allah and His Messenger in what displeased him and in what pleased him, fima sa'ahu wa-sarrahu.",
            "bn": "তাবারী এমন একটি কথা যোগ করেন, যা সরাসরি আগের দৃশ্যের দিকে তাক করা। তাঁর মতে, অনুগত ব্যক্তি আল্লাহর আদেশ ও নিষেধ মেনে চলে, আর তাঁদের দুজনের ফয়সালা তার পক্ষে যাক বা বিপক্ষে, সে তা মাথা পেতে নেয়: ইউসাল্লিমু লি-হুকমিহিমা লাহু ওয়া আলাইহি। ২৪:৪৯ আয়াতের সেই দল ঠিক এর উল্টো। হক তাদের দিকে থাকলে তবেই তারা অনুগত হয়ে ছুটে আসে। বাগাভী ইবন আব্বাস (রাঃ) থেকে একই সুরের একটি ব্যাখ্যা আনেন: যে আল্লাহ ও তাঁর রসূলের আনুগত্য করে, তা তার খারাপ লাগুক কিংবা ভালো লাগুক, ফীমা সা'আহু ওয়া সাররাহু।"
          },
          {
            "en": "So the real test of the first clause is the verdict that goes against me. Anyone accepts a ruling that hands him what he wanted. At-Tabari's for him and against him, and Ibn 'Abbas's displeased and pleased, both locate obedience at the point where it begins to cost. The passage presses the same command a moment later: 24:54 says obey Allah and obey the Messenger, and adds that if you obey him you will be guided.",
            "bn": "তাহলে প্রথম অংশের আসল পরীক্ষা সেই রায়, যা আমার বিপক্ষে যায়। যে ফয়সালা আমার চাওয়া জিনিসটাই হাতে তুলে দেয়, তা মেনে নিতে কারও কষ্ট হয় না। তাবারীর 'পক্ষে বা বিপক্ষে' আর ইবন আব্বাস (রাঃ)-এর 'খারাপ লাগুক বা ভালো লাগুক', দুটো কথাই আনুগত্যকে দাঁড় করায় ঠিক সেই জায়গায়, যেখান থেকে তার দাম দিতে হয়। একটু পরেই ২৪:৫৪ আয়াত একই আদেশ আবার জোর দিয়ে বলে: আল্লাহর আনুগত্য কর, রসূলের আনুগত্য কর। সঙ্গে যোগ করে, তোমরা তাঁর আনুগত্য করলে সঠিক পথ পাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Rights Shared and Rights Apart",
          "bn": "যে হক দুজনের, যে হক একজনের"
        },
        "p": [
          {
            "en": "Look at the verbs and what each is joined to. Obedience is joined to Allah and His Messenger together. Fear and wariness are joined to Allah alone: wa-yakhsha Allaha wa-yattaqhi, and the him of yattaqhi is Allah, as at-Tabari's gloss makes plain when he speaks of guarding against the punishment of Allah. As-Sa'di builds a point on this arrangement. The verse, he says, contains the right shared between Allah and His Messenger, which is obedience, an obedience that entails faith, and the right that belongs to Allah alone, which is fear and taqwa.",
            "bn": "ক্রিয়াগুলো কার সঙ্গে জুড়েছে, খেয়াল করুন। আনুগত্য জুড়েছে আল্লাহ ও তাঁর রসূল, দুজনের সঙ্গেই। কিন্তু ভয় আর সতর্কতা জুড়েছে কেবল আল্লাহর সঙ্গে: ওয়া ইয়াখশাল্লাহা ওয়া ইয়াত্তাকহি। ইয়াত্তাকহির 'তাঁকে' বলতে আল্লাহকেই বোঝায়। তাবারী যখন আল্লাহর আযাব থেকে বাঁচার কথা বলেন, তখন সেটা পরিষ্কার হয়ে যায়। এই বিন্যাসের উপর সা'দী একটি কথা দাঁড় করান। তাঁর মতে আয়াতে আছে আল্লাহ ও রসূলের যৌথ হক, অর্থাৎ আনুগত্য, যে আনুগত্য ঈমানকে অপরিহার্য করে। আর আছে কেবল আল্লাহর হক, অর্থাৎ খাশইয়া ও তাকওয়া।"
          },
          {
            "en": "A third right is not named here, he observes: the one that belongs to the Messenger alone, ta'zir and tawqir, supporting and honouring him. He points to Surat al-Fath, where all three are gathered in one verse: li-tu'minu billahi wa-rasulihi wa-tu'azziruhu wa-tuwaqqiruhu wa-tusabbihuhu bukratan wa-asila, that you may believe in Allah and His Messenger, support him, honour him, and glorify Him morning and evening (48:9). Read side by side, the two verses keep the lines clear: obedience is owed to both, fear and taqwa to Allah alone, and support and honour to His Messenger ﷺ.",
            "bn": "তিনি লক্ষ করেন, এখানে তৃতীয় একটি হকের উল্লেখ নেই। সেটা কেবল রসূলের হক: তা'যীর ও তাওকীর, অর্থাৎ তাঁকে সাহায্য করা ও সম্মান করা। এর জন্য তিনি সূরা আল-ফাতহের দিকে ইঙ্গিত করেন, যেখানে এক আয়াতেই তিনটি হক একসঙ্গে এসেছে: লিতু'মিনূ বিল্লাহি ওয়া রসূলিহী ওয়া তু'আযযিরূহু ওয়া তুওয়াক্কিরূহু ওয়া তুসাব্বিহূহু বুকরাতাঁও ওয়া আসীলা। যাতে তোমরা আল্লাহ ও তাঁর রসূলের প্রতি ঈমান আন, তাঁকে সাহায্য কর, সম্মান কর, আর সকাল-সন্ধ্যা আল্লাহর পবিত্রতা ঘোষণা কর (৪৮:৯)। দুটি আয়াত পাশাপাশি পড়লে সীমারেখা পরিষ্কার থাকে। আনুগত্য দুজনেরই প্রাপ্য। খাশইয়া ও তাকওয়া কেবল আল্লাহর। আর সাহায্য ও সম্মান তাঁর রসূল ﷺ-এর।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear That Knows Its Object",
          "bn": "যে ভয় জানে কাকে ভয়"
        },
        "p": [
          {
            "en": "The third word is yakhsha, from khashya. As-Sa'di defines it with care: a fear joined with knowledge, khawfan maqrunan bi-ma'rifa. Its fruit, he says, is that whoever fears leaves what Allah forbade and holds his self back from what it craves. On this account khashya is not a vague dread. It knows whom it fears, and it shows in what a person stops doing.",
            "bn": "তৃতীয় শব্দ ইয়াখশা, এসেছে খাশইয়া থেকে। সা'দী এর সংজ্ঞা দেন যত্ন নিয়ে: এমন ভয়, যার সঙ্গে জ্ঞান জড়িয়ে আছে, খাওফান মাকরূনান বি-মা'রিফা। তাঁর মতে এর ফল হলো, ভয়কারী আল্লাহর নিষিদ্ধ জিনিস ছেড়ে দেয় আর নাফসকে তার কামনার জিনিস থেকে টেনে রাখে। এ ব্যাখ্যায় খাশইয়া কোনো অস্পষ্ট আতঙ্ক নয়। সে জানে কাকে ভয় করছে, আর মানুষ কী কী থেকে বিরত থাকে, তাতেই সে ধরা পড়ে।"
          },
          {
            "en": "At-Tabari gives the fear a target: he fears the consequence of disobeying Allah and is wary of it. The Muyassar says much the same, that he fears the consequences of disobedience. Ibn Kathir and al-Baghawi instead give the fear a direction in time. Ibn Kathir glosses wa-yakhsha Allaha as fearing Him for what has passed of his sins; al-Baghawi has him fear Allah over the sins he has already committed. Here khashya looks backward, at a record that cannot be unwritten, and the next word looks the other way.",
            "bn": "তাবারী এ ভয়ের একটা লক্ষ্য ঠিক করে দেন: সে আল্লাহর নাফরমানির পরিণামকে ভয় করে এবং তা থেকে সাবধান থাকে। মুয়াসসারও প্রায় একই কথা বলে: সে নাফরমানির পরিণামকে ভয় করে। ইবন কাসীর ও বাগাভী অবশ্য ভয়টাকে সময়ের একটা দিকে মুখ করিয়ে দেন। ইবন কাসীর ওয়া ইয়াখশাল্লাহার ব্যাখ্যা করেন এভাবে: অতীতে যেসব গুনাহ হয়ে গেছে, সেগুলোর জন্য আল্লাহকে ভয় করা। বাগাভীর কথায়, যে গুনাহ সে করে ফেলেছে, তার জন্য সে আল্লাহকে ভয় করে। এখানে খাশইয়া তাকায় পেছনে, এমন এক আমলনামার দিকে, যা আর মুছে লেখা যায় না। আর পরের শব্দটা তাকায় উল্টো দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Lies Behind, What Ahead",
          "bn": "পেছনে যা, সামনে যা"
        },
        "p": [
          {
            "en": "Ibn Kathir completes the pair: wa-yattaqhi, and he keeps wary of Him in what is to come, fima yustaqbal. Al-Baghawi says the same in two words, fima ba'dahu, in what comes after. On this reading the two verbs divide one life in two. Khashya faces what is already done, and taqwa faces what has not happened yet. A believer carries both at once: the weight of yesterday, which he cannot change, and the watchfulness over tomorrow, which is still in his hands.",
            "bn": "ইবন কাসীর জোড়াটা পূর্ণ করেন: ওয়া ইয়াত্তাকহি, আর ভবিষ্যতে যা আসবে, তাতে সে তাঁর ব্যাপারে সতর্ক থাকে, ফীমা ইউসতাকবাল। বাগাভী একই কথা বলেন দুই শব্দে, ফীমা বা'দাহু, তার পরে যা আসে তাতে। এ ব্যাখ্যায় দুটি ক্রিয়া একটি জীবনকে দুই ভাগে ভাগ করে দেয়। খাশইয়ার মুখ যা ঘটে গেছে তার দিকে, আর তাকওয়ার মুখ যা এখনো ঘটেনি তার দিকে। মু'মিন দুটোই একসঙ্গে বহন করে। গতকালের বোঝা, যা সে আর বদলাতে পারে না। আর আগামীকালের পাহারা, যা এখনো তার হাতে।"
          },
          {
            "en": "As-Sa'di draws the line by kind rather than by time. Taqwa used on its own, he says, takes in both doing what is commanded and leaving what is forbidden. But when it is paired with birr or with ta'a, obedience, as it is in this verse, it is explained as guarding against Allah's punishment by leaving His acts of disobedience. Since obedience has already been named, taqwa here takes the leaving. At-Tabari puts it differently: he guards against Allah's punishment through his obedience to Him in His command and His prohibition.",
            "bn": "সা'দী রেখাটা টানেন সময় দিয়ে নয়, কাজের ধরন দিয়ে। তাঁর মতে তাকওয়া শব্দটি একা এলে আদেশ পালন ও নিষেধ বর্জন দুটোই এর ভেতরে পড়ে। কিন্তু বির্র বা তা'আত, অর্থাৎ আনুগত্যের সঙ্গে জোড়া বাঁধলে, যেমন এ আয়াতে, তখন এর ব্যাখ্যা হয় আল্লাহর নাফরমানি ছেড়ে দিয়ে তাঁর আযাব থেকে নিজেকে বাঁচানো। আনুগত্যের কথা যেহেতু আগেই এসে গেছে, এখানে তাকওয়ার ভাগে পড়ে বর্জনের দিকটা। তাবারী বলেন একটু অন্যভাবে: আল্লাহর আদেশ ও নিষেধে তাঁর আনুগত্য করে সে তাঁর আযাব থেকে নিজেকে বাঁচায়।"
          },
          {
            "en": "So the four words are divided differently: by time in Ibn Kathir and al-Baghawi, by kind in as-Sa'di, and in at-Tabari around the punishment that obedience wards off. Al-Qurtubi, followed by Ma'arif al-Qur'an, also relays a report about a Roman nobleman who accepted Islam because of this verse, introduced only with Aslam mentioned, with no chain and no grading. It is noted here as a report and nothing in this article rests on it; the reading by past and future stands on Ibn Kathir's and al-Baghawi's own words.",
            "bn": "তাহলে চারটি শব্দের ভাগ একেকজনের কাছে একেক রকম। ইবন কাসীর ও বাগাভীর কাছে সময় দিয়ে, সা'দীর কাছে কাজের ধরন দিয়ে, আর তাবারীর কাছে সেই আযাবকে ঘিরে, যা আনুগত্য ঠেকিয়ে রাখে। কুরতুবী, আর তাঁর সূত্রে মাআরিফুল কুরআন, এ আয়াতের কারণে এক রোমান অভিজাত ব্যক্তির ইসলাম গ্রহণের একটি বিবরণও আনেন। কুরতুবী শুধু 'আসলাম উল্লেখ করেছেন' বলে তা শুরু করেন, কোনো সনদ নেই, কোনো মানের উল্লেখও নেই। এখানে কেবল একটি বর্ণনা হিসেবে তার কথা বলা হলো, এ লেখার কোনো কথা এর উপর দাঁড়িয়ে নেই। অতীত ও ভবিষ্যতের ভাগটা দাঁড়িয়ে আছে ইবন কাসীর ও বাগাভীর নিজেদের কথার উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verb, Several Sounds",
          "bn": "এক ক্রিয়া, একাধিক উচ্চারণ"
        },
        "p": [
          {
            "en": "The last verb of the condition is recited in several ways, and al-Qurtubi and al-Baghawi both set the readings out. The verb is yattaqi, he guards, with its final ya dropped for the jussive, followed by the pronoun hi, him. Hafs reads wa-yattaqhi, with the qaf silent. Al-Qurtubi explains this as silencing the qaf with the jussive in mind, and cites a poet's line: wa-man yattaq fa-inna Allaha ma'ahu, and whoever is wary, Allah is with him. The other readers give the qaf a kasra, he says, because the jussive is already marked by dropping the final letter.",
            "bn": "শর্তের শেষ ক্রিয়াটি একাধিকভাবে পড়া হয়, আর কুরতুবী ও বাগাভী দুজনেই কিরাআতগুলো সাজিয়ে দেন। মূল ক্রিয়া ইয়াত্তাকী, সে সতর্ক থাকে। জাযমের কারণে এর শেষের ইয়া পড়ে গেছে, তারপর যুক্ত হয়েছে সর্বনাম হি, তাঁকে। হাফস পড়েন ওয়া ইয়াত্তাকহি, কাফে সাকিন দিয়ে। কুরতুবী এর ব্যাখ্যায় বলেন, জাযমের নিয়তে কাফকে সাকিন করা হয়েছে। প্রমাণ হিসেবে তিনি এক কবির পঙ্‌ক্তি আনেন: ওয়া মাঁই ইয়াত্তাক ফা-ইন্নাল্লাহা মা'আহু, যে সতর্ক থাকে, আল্লাহ তার সঙ্গে আছেন। বাকি কারীরা কাফে যের দেন। কুরতুবী বলেন, কারণ শেষ অক্ষরটি ফেলে দিয়েই জাযম হয়ে গেছে।"
          },
          {
            "en": "The ha of the pronoun then takes three shapes. Abu 'Amr and Abu Bakr read it silent: wa-yattaqih. A second group reads its kasra snatched, short and light: al-Qurtubi names Ya'qub, Qalun from Nafi', al-Busti from Abu 'Amr, and Hafs, while al-Baghawi names Abu Ja'far, Ya'qub and Qalun, and says Hafs reads the qaf silent with the ha snatched. The remaining readers give the kasra its full length: wa-yattaqihi. The two lists differ a little in their names, and both are reported here as each gives them.",
            "bn": "এরপর সর্বনামের হা তিনটি রূপ নেয়। আবু আমর ও আবু বকর একে সাকিন পড়েন: ওয়া ইয়াত্তাকিহ। দ্বিতীয় একটি দল এর যেরকে ছোট ও হালকা করে পড়েন, যাকে ইখতিলাস বলে। কুরতুবী এ দলে নাম দেন ইয়াকুব, নাফি' থেকে কালূন, আবু আমর থেকে বুস্তী, আর হাফসের। বাগাভী নাম দেন আবু জা'ফর, ইয়াকুব ও কালূনের, আর বলেন হাফস কাফ সাকিন রেখে হা-কে ইখতিলাস করে পড়েন। বাকি কারীরা যেরকে পুরো টেনে পড়েন: ওয়া ইয়াত্তাকিহী। দুই তালিকার নামে সামান্য ফারাক আছে, তাই প্রত্যেকে যেভাবে দিয়েছেন, এখানে সেভাবেই রাখা হলো।"
          },
          {
            "en": "Al-Baghawi explains Hafs's reading as a usage of the Arabs: when the ya falls away for the jussive, some of them silence the letter before it as well, saying lam ashtar ta'aman, I did not buy food, with the ra silent. Neither commentator attaches a different meaning to any of these readings; what they record is a difference of sound within one word. The text printed above follows Hafs: wa-yattaqhi",
            "bn": "হাফসের কিরাআতকে বাগাভী আরবদের একটি ভাষারীতি দিয়ে ব্যাখ্যা করেন। জাযমের কারণে ইয়া পড়ে গেলে তাদের কেউ কেউ এর আগের অক্ষরটিকেও সাকিন করে দেয়। যেমন তারা বলে লাম আশতার তা'আমান, আমি খাবার কিনিনি, রা-কে সাকিন রেখে। কোনো তাফসীরকারই এসব কিরাআতের সঙ্গে আলাদা কোনো অর্থ জুড়ে দেননি। তাঁরা যা লিপিবদ্ধ করেছেন, তা একটি শব্দের ভেতরে উচ্চারণের পার্থক্য। উপরে ছাপা আয়াতের পাঠ হাফসের, ওয়া ইয়াত্তাকহি।"
          }
        ]
      },
      {
        "h": {
          "en": "Winning Kept for Them",
          "bn": "সাফল্য যাদের জন্য নির্দিষ্ট"
        },
        "p": [
          {
            "en": "Then the promise: fa-ula'ika humu al-fa'izun. As-Sa'di reads it as restriction: winning is confined to them. They are saved from the punishment because they left its causes, and they reach the reward because they did its causes. He then adds a measured qualification. Whoever does not carry their description misses winning in proportion to what he fell short of among these praised qualities. The door is not slammed on the one who falls short; what he loses is measured against what he left undone.",
            "bn": "তারপর প্রতিশ্রুতি: ফা-উলা'ইকা হুমুল ফা'ইযূন। সা'দী এখানে সীমাবদ্ধতা পড়েন: সাফল্য কেবল তাদের জন্যই নির্দিষ্ট। আযাবের কারণগুলো তারা ছেড়ে দিয়েছে বলে আযাব থেকে বেঁচে যায়। আর প্রতিদানের কারণগুলো তারা করেছে বলে প্রতিদানে পৌঁছে যায়। এরপর তিনি একটি মাপা শর্ত জুড়ে দেন। যার মধ্যে তাদের এই গুণ নেই, প্রশংসিত গুণগুলোর মধ্যে সে যতটা পিছিয়ে, ঠিক ততটা সাফল্য তার হাতছাড়া হয়। তাহলে যে পিছিয়ে পড়ে, তার মুখের উপর দরজা বন্ধ হয়ে যায় না। সে কতটা হারাবে, তা মাপা হয় সে কতটা বাকি রেখেছে তা দিয়ে।"
          },
          {
            "en": "What is won? The commentators draw it on different scales. Ibn Kathir: those who won every good and were kept safe from every evil, in this world and the Hereafter. At-Tabari places it on the Day of Resurrection: they win Allah's pleasure with them and safety from His punishment. The Muyassar: winners of the bliss of Paradise. Al-Baghawi says it in a single word, an-najun, the saved. Ma'arif al-Qur'an speaks of success in this world and the Hereafter. On the verse before, Ibn Kathir defines success as reaching what a person hopes for and being saved from what he fears.",
            "bn": "কী অর্জিত হয়? তাফসীরকারেরা একে আঁকেন ভিন্ন ভিন্ন পরিসরে। ইবন কাসীর বলেন, তারা সব কল্যাণ লাভ করেছে আর সব অকল্যাণ থেকে নিরাপদ থেকেছে, দুনিয়াতে ও আখিরাতে। তাবারী একে রাখেন কিয়ামতের দিনে: তারা লাভ করে নিজেদের প্রতি আল্লাহর সন্তুষ্টি আর তাঁর আযাব থেকে নিরাপত্তা। মুয়াসসার বলে, জান্নাতের নিয়ামত লাভকারী। বাগাভী বলেন এক শব্দে, আন-নাজূন, যারা মুক্তি পেয়েছে। মাআরিফুল কুরআন বলে দুনিয়া ও আখিরাতের সাফল্যের কথা। আগের আয়াতের আলোচনায় ইবন কাসীর সাফল্যের সংজ্ঞা দেন এভাবে: যা আশা করা হয় তা পাওয়া, আর যার ভয় করা হয় তা থেকে বেঁচে যাওয়া।"
          },
          {
            "en": "None of the commentaries fetched attaches a hadith to this verse. A general narration, not said about this verse, carries the same promise. Al-Bukhari (7280) records from Abu Hurayra (RA) that Allah's Messenger ﷺ said, \"All my followers will enter Paradise except those who refuse.\" They said, \"O Allah's Messenger! Who will refuse?\" He said, \"Whoever obeys me will enter Paradise, and whoever disobeys me is the one who refuses (to enter it).\" Obedience, in his words, is the open way, and disobedience is a refusal.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। তবে একটি সাধারণ বর্ণনা, যা এ আয়াত প্রসঙ্গে বলা হয়নি, একই প্রতিশ্রুতি বহন করে। বুখারী (৭২৮০) আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রসূল ﷺ বলেছেন: \"আমার সব উম্মত জান্নাতে প্রবেশ করবে, তবে যে অস্বীকার করে সে নয়।\" তাঁরা বললেন, \"হে আল্লাহর রসূল! কে অস্বীকার করবে?\" তিনি বললেন, \"যে আমার আনুগত্য করে সে জান্নাতে প্রবেশ করবে, আর যে আমার অবাধ্য হয় সে-ই অস্বীকার করল।\" তাঁর কথায় আনুগত্য খোলা পথ, আর অবাধ্যতা মানে প্রত্যাখ্যান।"
          }
        ]
      },
      {
        "h": {
          "en": "Ten Words to Live By",
          "bn": "দশ শব্দে এক জীবন"
        },
        "p": [
          {
            "en": "In the Arabic the verse runs to ten words, and Ma'arif al-Qur'an heads it four conditions for success. Read slowly, it gives a reader four places to look. Is my obedience still there when the verdict goes against me? Does my fear look back honestly at what I have done? Is my wariness awake to what lies ahead? And have I let any of the four stand in for the others? As-Sa'di's measured qualification keeps the questions from turning into despair: what falls short loses in proportion, and what is mended is gained.",
            "bn": "আরবিতে আয়াতটি দশটি শব্দের, আর মাআরিফুল কুরআন এর শিরোনাম দেয় সাফল্যের চারটি শর্ত। ধীরে পড়লে পাঠকের সামনে তাকানোর চারটি জায়গা খুলে যায়। রায় আমার বিপক্ষে গেলেও কি আমার আনুগত্য টিকে থাকে? আমার ভয় কি সততার সঙ্গে পেছনে ফিরে দেখে, আমি কী করেছি? সামনে যা আসছে, তার ব্যাপারে আমার সতর্কতা কি জেগে আছে? আর চারটির কোনো একটিকে কি অন্যগুলোর বদলি বানিয়ে রেখেছি? সা'দীর সেই মাপা শর্ত প্রশ্নগুলোকে হতাশায় গড়াতে দেয় না। যতটা ঘাটতি, ততটাই ক্ষতি, আর যতটা শুধরে নেওয়া যায়, ততটাই লাভ।"
          },
          {
            "en": "Something else needs saying plainly. The verses just before it describe a party that turned away from the Messenger's judgement. They describe what they describe, and they license nothing against any living person or community; they give no one a label to pin on a neighbour. This verse turns the eye inward instead. It names no group at all, only a man, wa-man, whoever, and asks each reader whether the four are in him. The answer to that question is no one's business but his own and his Lord's.",
            "bn": "আরেকটি কথা সোজাসুজি বলা দরকার। এর আগের আয়াতগুলো এমন এক দলের বর্ণনা দেয়, যারা রসূলের ফয়সালা থেকে মুখ ফিরিয়ে নিয়েছিল। আয়াতগুলো যা বর্ণনা করে, কেবল সেটুকুই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো অনুমতি দেয় না, প্রতিবেশীর গায়ে সাঁটার মতো কোনো তকমাও কারও হাতে তুলে দেয় না। এ আয়াত বরং চোখ ফেরায় ভেতরের দিকে। এখানে কোনো দলের নাম নেই, আছে শুধু ওয়া মান, যে কেউ। প্রত্যেক পাঠককে সে জিজ্ঞেস করে, চারটি গুণ কি তার মধ্যে আছে? এ প্রশ্নের উত্তর কেবল তার আর তার রবের ব্যাপার।"
          }
        ]
      }
    ]
  },
  "24:55": {
    "sections": [
      {
        "h": {
          "en": "A Promise After the Summons",
          "bn": "আনুগত্যের ডাকের পরেই প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "The previous verse tells the Messenger ﷺ to say: obey Allah and obey the Messenger, and if you obey him you will be guided. Then a promise is made to the same listeners. Wa'ada Allahu alladhina amanu minkum: Allah has promised those of you who believe and do righteous deeds. At-Tabari glosses minkum as you people, and explains the righteous deeds as obeying Allah and His Messenger in what they commanded and forbade. The promise picks up exactly where the command left off.",
            "bn": "আগের আয়াতে রসূল ﷺ-কে বলতে বলা হয়েছে: আল্লাহর আনুগত্য কর, রসূলের আনুগত্য কর, তাঁর আনুগত্য করলে তোমরা হিদায়াত পাবে। এরপর ঠিক সেই শ্রোতাদের কাছেই এল এক প্রতিশ্রুতি। ওয়াআদাল্লাহুল্লাযীনা আমানূ মিনকুম: তোমাদের মধ্যে যারা ঈমান আনে আর নেক আমল করে, আল্লাহ তাদের প্রতিশ্রুতি দিয়েছেন। তাবারী মিনকুম-এর ব্যাখ্যা দেন: হে মানুষ, তোমাদের মধ্যে। আর নেক আমল বলতে তিনি বোঝান আল্লাহ ও তাঁর রসূল যা আদেশ করেছেন ও যা নিষেধ করেছেন, তাতে তাঁদের আনুগত্য। যেখানে আদেশ থেমেছে, প্রতিশ্রুতি ঠিক সেখান থেকেই শুরু।"
          },
          {
            "en": "The wording carries an oath. At-Tabari reports the explanation that a promise is a kind of speech, and so it can be answered the way an oath is answered: as in I promised you, I will surely honour you. Al-Qurtubi and al-Baghawi both take the lam of la-yastakhlifannahum as the reply to an unstated oath, which al-Baghawi spells out: by Allah, He will surely make them successors. Three emphatic verbs then follow one another: succession, establishment and exchange.",
            "bn": "শব্দগুলোর ভেতরে একটা কসম লুকিয়ে আছে। তাবারী একটি ব্যাখ্যা উল্লেখ করেন: প্রতিশ্রুতিও এক ধরনের কথা, তাই কসমের জবাব যেভাবে আসে, এর জবাবও সেভাবে আসতে পারে। যেমন কেউ বলে, আমি তোমাকে কথা দিলাম, অবশ্যই তোমাকে সম্মান করব। কুরতুবী ও বাগাভী দুজনেই লা-ইয়াসতাখলিফান্নাহুম শব্দের লাম-কে এক অনুচ্চারিত কসমের জবাব ধরেন। বাগাভী তা খুলে বলেন: আল্লাহর কসম, তিনি অবশ্যই তাদের খলিফা বানাবেন। এরপর পরপর আসে জোর দেওয়া তিনটি ক্রিয়া: খলিফা বানানো, প্রতিষ্ঠা দেওয়া আর অবস্থা বদলে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Pledges, One Oath",
          "bn": "এক কসমে তিন অঙ্গীকার"
        },
        "p": [
          {
            "en": "The Muyassar sets out the three pledges in one sentence. Allah promised victory to those who believe and do righteous deeds: that He would make them inherit the land of the idolaters and be successors in it, as He did with the believers before them; that He would make their religion, Islam, mighty and firmly settled; and that He would change their state from fear to security, if they worshipped Allah alone, stood firm in obeying Him and associated nothing with Him. The condition is already inside the summary.",
            "bn": "মুয়াসসার তিনটি অঙ্গীকারকে একটিমাত্র বাক্যে সাজিয়ে দেয়। যারা ঈমান আনে আর নেক আমল করে, আল্লাহ তাদের বিজয়ের প্রতিশ্রুতি দিয়েছেন। মুশরিকদের ভূমির উত্তরাধিকার তিনি তাদের দেবেন, সেখানে তাদের খলিফা বানাবেন, যেমন করেছিলেন আগের মু'মিনদের বেলায়। তাদের দ্বীন ইসলামকে তিনি করবেন মর্যাদাপূর্ণ ও মজবুত। আর ভয়ের অবস্থা বদলে দেবেন নিরাপত্তায়, যদি তারা শুধু আল্লাহর ইবাদত করে, তাঁর আনুগত্যে অবিচল থাকে আর তাঁর সঙ্গে কিছুকে শরীক না করে। লক্ষ করুন, শর্তটা সারকথার ভেতরেই রয়ে গেছে।"
          },
          {
            "en": "What succession means is put in slightly different terms. For at-Tabari, Allah will make them inherit the land of the idolaters among the Arabs and non-Arabs and make them its kings and those who govern it. As-Sa'di says they would be the successors in it, managing its affairs. Ibn Kathir reads a promise to the Messenger ﷺ that his community would become leaders of people and those in authority over them. The establishing of the religion, at-Tabari says, is that Allah will make it smooth and settled for them.",
            "bn": "খলিফা বানানোর অর্থ তাফসীরকারেরা একটু ভিন্ন ভিন্ন ভাষায় বলেন। তাবারীর মতে আল্লাহ তাদের আরব-অনারব মুশরিকদের ভূমির উত্তরাধিকারী করবেন, তাদের বানাবেন সেখানকার রাজা ও শাসক। সা'দী বলেন, তারাই হবে সেখানকার খলিফা, যারা এর কাজকর্ম পরিচালনা করবে। ইবন কাসীর এখানে রসূল ﷺ-এর প্রতি এক প্রতিশ্রুতি দেখেন: তাঁর উম্মত মানুষের নেতা ও তাদের উপর দায়িত্বশীল হবে। আর দ্বীন প্রতিষ্ঠার অর্থ, তাবারী বলেন, আল্লাহ তাদের জন্য দ্বীনকে সহজ ও স্থির করে দেবেন।"
          },
          {
            "en": "Two words carry recorded readings. Most recite kama istakhlafa, as He made those before them successors; at-Tabari and al-Baghawi report that 'Asim read kama ustukhlifa, as those before them were made successors. In wa-la-yubaddilannahum most read the doubled form, while the reciter Ibn Kathir, Ya'qub and Abu Bakr read the lighter yubdilannahum, says al-Baghawi. At-Tabari prefers the doubled reading and draws the distinction: tabdil changes a state, ibdal removes a thing and puts another in its place. Here the same people's fear is changed into security.",
            "bn": "দুটি শব্দের পাঠে ভিন্নতা বর্ণিত আছে। বেশির ভাগ কারী পড়েন কামাসতাখলাফা, অর্থাৎ যেমন তিনি পূর্ববর্তীদের খলিফা বানিয়েছিলেন। তাবারী ও বাগাভী জানান, আসিম পড়েছেন কামাসতুখলিফা, অর্থাৎ যেমন পূর্ববর্তীদের খলিফা বানানো হয়েছিল। ওয়া লা-ইউবাদ্দিলান্নাহুম শব্দটি বেশির ভাগ পড়েন তাশদীদসহ। বাগাভী বলেন, কারী ইবন কাসীর, ইয়াকুব ও আবু বকর পড়েছেন হালকা করে, ইউবদিলান্নাহুম। তাবারী তাশদীদের পাঠকেই অগ্রাধিকার দেন এবং পার্থক্যটা বুঝিয়ে দেন। তাবদীল মানে অবস্থা বদলানো, আর ইবদাল মানে এক জিনিস সরিয়ে অন্যটা বসানো। এখানে একই মানুষের ভয় বদলে যাচ্ছে নিরাপত্তায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Successors of an Earlier Age",
          "bn": "আগের যুগের উত্তরাধিকারীরা"
        },
        "p": [
          {
            "en": "Kama istakhlafa alladhina min qablihim: as He made those before them successors. At-Tabari names them as the Children of Israel, when Allah destroyed the tyrants in Syria and made them its kings and inhabitants. Al-Baghawi also relays Qatada: as He made Dawud, Sulayman and other prophets successors. Ibn Kathir and as-Sa'di both set beside it the words of Musa (AS) to his people in 7:129: perhaps your Lord will destroy your enemy and make you successors in the land, and see how you act.",
            "bn": "কামাসতাখলাফাল্লাযীনা মিন কাবলিহিম: যেমন তিনি তাদের পূর্ববর্তীদের খলিফা বানিয়েছিলেন। তাবারী তাদের পরিচয় দেন বনী ইসরাঈল বলে। আল্লাহ যখন শামের জালিমদের ধ্বংস করলেন, তখন তাদেরকেই সেখানকার রাজা ও বাসিন্দা বানালেন। বাগাভী কাতাদার কথাও আনেন: যেমন তিনি দাউদ (আঃ), সুলাইমান (আঃ) ও অন্য নবীদের খলিফা বানিয়েছিলেন। ইবন কাসীর ও সা'দী দুজনেই এর পাশে রাখেন ৭:১২৯ আয়াতে নিজ কওমের প্রতি মূসা (আঃ)-এর কথা: আশা করা যায় তোমাদের রব তোমাদের শত্রুকে ধ্বংস করবেন, তোমাদের দেশে খলিফা বানাবেন, তারপর দেখবেন তোমরা কেমন আমল কর।"
          },
          {
            "en": "Which land is meant? Al-Qurtubi gives two views. One, whose sense he credits to an-Naqqash, is the land of Makkah, because the emigrants had asked Allah for it. The other is the lands of the Arabs and non-Arabs, which Ibn al-Arabi held to be correct. The verse about Musa (AS) carries its own warning in its last words: and see how you act. Read beside it, succession is a trust handed over to be tested, not a reward that closes the account.",
            "bn": "কোন ভূমির কথা বলা হচ্ছে? কুরতুবী দুটি মত উল্লেখ করেন। একটি মত, যার মর্ম তিনি নাক্কাশের বলে জানান, মক্কার ভূমি, কারণ মুহাজিররা আল্লাহর কাছে এটাই চেয়েছিলেন। অন্য মতে আরব ও অনারবদের দেশসমূহ। ইবনুল আরাবী এ মতকেই সঠিক বলেছেন। মূসা (আঃ)-এর আয়াতটির শেষ কথায় নিজস্ব এক সতর্কবাণী আছে: তারপর দেখবেন তোমরা কেমন আমল কর। এর পাশে রেখে পড়লে বোঝা যায়, খিলাফত হাতে তুলে দেওয়া এক আমানত, যার পরীক্ষা চলতেই থাকে। এটা এমন পুরস্কার নয়, যা পেলেই হিসাব শেষ।"
          }
        ]
      },
      {
        "h": {
          "en": "Armed Morning and Evening",
          "bn": "সকাল-সন্ধ্যা অস্ত্র হাতে"
        },
        "p": [
          {
            "en": "At-Tabari introduces it with the words it is mentioned: that it came down when some Companions complained to the Prophet ﷺ of the severe fear of the enemy in which they lived. He then gives, with its chain, a report from Abu al-'Aliya. The Prophet ﷺ stayed ten years in Makkah in fear, calling to Allah in secret and openly; then he was commanded to emigrate to Madinah, and there he and his Companions lived in fear, rising in their weapons and retiring in them.",
            "bn": "তাবারী শুরু করেন 'উল্লেখ আছে' কথাটি দিয়ে: কিছু সাহাবী শত্রুর তীব্র ভয়ে দিন কাটাচ্ছিলেন, সে কথা তাঁরা নবী ﷺ-এর কাছে জানালে আয়াতটি নাযিল হয়। এরপর তিনি সনদসহ আবুল আলিয়ার একটি বর্ণনা দেন। নবী ﷺ ১০ বছর মক্কায় ভয়ের মধ্যে ছিলেন, গোপনে ও প্রকাশ্যে আল্লাহর দিকে ডাকতেন। তারপর মদীনায় হিজরতের আদেশ এল। সেখানেও তিনি ও তাঁর সাহাবীরা ভয়ে থাকতেন। সকালে উঠতেন অস্ত্র নিয়ে, সন্ধ্যাও কাটাতেন অস্ত্র নিয়ে।"
          },
          {
            "en": "A man said: will a day never come on which we are safe and can lay down our arms? The Prophet ﷺ replied that they would wait only a little before a man among them could sit at ease in a great gathering with no weapon of iron on him, and Allah revealed this verse. Ibn Kathir, al-Qurtubi and al-Baghawi relay the same report from Abu al-'Aliya, and Ibn Kathir adds a line from al-Bara' ibn 'Azib: this verse came down while we were in severe fear. None of the commentators read here grades the report.",
            "bn": "একজন বললেন: এমন দিন কি কখনো আসবে না, যেদিন আমরা নিরাপদ থাকব আর অস্ত্র নামিয়ে রাখতে পারব? নবী ﷺ জবাব দিলেন, তোমাদের অল্প কিছুদিন অপেক্ষা করতে হবে। তারপর তোমাদের কেউ বিরাট মজলিসে আরাম করে বসে থাকবে, তার গায়ে লোহার কোনো অস্ত্র থাকবে না। তখন আল্লাহ এ আয়াত নাযিল করলেন। ইবন কাসীর, কুরতুবী ও বাগাভীও আবুল আলিয়ার এই বর্ণনাটি আনেন। ইবন কাসীর এর সঙ্গে বারা ইবন আযিব (রাঃ)-এর একটি কথা যোগ করেন: আমরা যখন তীব্র ভয়ের মধ্যে ছিলাম, তখন এ আয়াত নাযিল হয়। এখানে যেসব তাফসীর পড়া হয়েছে, তার কোনোটিই বর্ণনাটির মান নির্ণয় করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Promise Addresses",
          "bn": "প্রতিশ্রুতি কাদের উদ্দেশে"
        },
        "p": [
          {
            "en": "Here the commentators genuinely differ. Al-Qurtubi opens with a narrow reading: it came down about Abu Bakr and 'Umar, as Malik said. He then records from ad-Dahhak, in the book of an-Naqqash, that it includes the caliphate of Abu Bakr, 'Umar, 'Uthman and 'Ali, because they were people of faith and righteous deeds. Ibn al-Arabi chose this view, he says, and al-Qushayri related it from Ibn 'Abbas. Al-Baghawi writes that the verse holds evidence for the caliphate of as-Siddiq and the imamate of the rightly guided caliphs.",
            "bn": "এখানে তাফসীরকারদের মধ্যে সত্যিকারের মতভেদ আছে। কুরতুবী শুরু করেন একটি সংকীর্ণ ব্যাখ্যা দিয়ে: মালিকের কথা অনুযায়ী আয়াতটি নাযিল হয়েছে আবু বকর (রাঃ) ও উমর (রাঃ)-এর ব্যাপারে। তারপর তিনি নাক্কাশের গ্রন্থ থেকে দাহহাকের মত আনেন: এতে আবু বকর, উমর, উসমান ও আলী (রাঃ)-এর খিলাফত শামিল, কারণ তাঁরা ছিলেন ঈমান ও নেক আমলের মানুষ। কুরতুবী জানান, ইবনুল আরাবী এ মত গ্রহণ করেছেন, আর কুশাইরী এটি ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেছেন। বাগাভী লেখেন, এ আয়াতে সিদ্দীকের খিলাফত ও খুলাফায়ে রাশিদীনের ইমামতের প্রমাণ আছে।"
          },
          {
            "en": "Against this al-Qurtubi sets the view of a group that it is a promise to the whole community, of rule over the earth under the word of Islam, a view Ibn 'Atiyya chose as the succession of the many. Al-Qurtubi himself argues that the change from overpowered to overpowering was not peculiar to the four caliphs but was shared by all the emigrants and others. Recalling the siege described in 33:10 and 33:11, he concludes that the verse is general to the community of Muhammad ﷺ, because narrowing a general wording needs a report that must be accepted.",
            "bn": "এর বিপরীতে কুরতুবী আরেক দলের মত তুলে ধরেন: এটি পুরো উম্মতের প্রতি প্রতিশ্রুতি, ইসলামের কালিমার অধীনে গোটা পৃথিবীর কর্তৃত্বের। ইবন আতিয়্যা এ মত গ্রহণ করেছেন এবং একে বলেছেন সাধারণ মুসলিমদের খিলাফত। কুরতুবী নিজে যুক্তি দেন, পরাজিত অবস্থা থেকে বিজয়ী অবস্থায় যাওয়া শুধু চারজন খলিফার বৈশিষ্ট্য ছিল না। সব মুহাজির, এমনকি অন্যরাও এতে শরীক ছিলেন। ৩৩:১০ ও ৩৩:১১ আয়াতে বর্ণিত অবরোধের কথা মনে করিয়ে দিয়ে তিনি সিদ্ধান্তে আসেন, আয়াতটি মুহাম্মাদ ﷺ-এর পুরো উম্মতের জন্য সাধারণ। কারণ সাধারণ শব্দকে সীমিত করতে এমন বর্ণনা লাগে, যা মেনে নেওয়া বাধ্যতামূলক।"
          },
          {
            "en": "The others frame the addressees in their own ways. At-Tabari keeps minkum as you people, and relays Mujahid: that is the community of Muhammad ﷺ. Ibn Kathir reads a promise that the Prophet's community would become successors, traces its fulfilment through his lifetime and the caliphates after him, and adds that some of the early generations said the caliphate of Abu Bakr and 'Umar is true in His Book, then recited this verse. As-Sa'di reads a promise to whoever from this community establishes faith and righteous deeds. This article does not choose between these attributed readings.",
            "bn": "অন্য তাফসীরকারেরা সম্বোধিতদের চিহ্নিত করেন নিজ নিজ ভঙ্গিতে। তাবারী মিনকুম-কে রাখেন 'হে মানুষ, তোমাদের মধ্যে' অর্থে, আর মুজাহিদের কথা আনেন: এরা মুহাম্মাদ ﷺ-এর উম্মত। ইবন কাসীর এখানে দেখেন নবী ﷺ-এর উম্মতের খলিফা হওয়ার প্রতিশ্রুতি। তাঁর জীবদ্দশা আর তাঁর পরের খিলাফতগুলোর ভেতর দিয়ে তিনি এর পূরণ দেখান। সঙ্গে জানান, পূর্বসূরিদের কেউ কেউ বলেছেন, আবু বকর ও উমরের খিলাফত আল্লাহর কিতাবে সত্য, তারপর এ আয়াত তিলাওয়াত করেছেন। সা'দীর মতে প্রতিশ্রুতিটা এ উম্মতের সেই সব মানুষের জন্য, যারা ঈমান ও নেক আমল কায়েম রাখে। এ প্রবন্ধ তাঁদের এসব মতের কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Traveller From al-Hira",
          "bn": "হীরা থেকে আসা সেই মুসাফির নারী"
        },
        "p": [
          {
            "en": "Al-Baghawi and Ibn Kathir bring a narration from 'Adiyy ibn Hatim to this clause, though it does not mention the verse. In Sahih al-Bukhari (3595), 'Adiyy says that a man came and complained to the Prophet ﷺ of destitution and poverty, and another complained of robbery by highwaymen. The Prophet said, \"Adi! Have you been to Al-Hira?\" He said he had not, but had been told of it. The Prophet said, \"If you should live for a long time, you will certainly see that a lady in a Howdah traveling from Al-Hira will (safely reach Mecca and) perform the Tawaf of the Ka`ba, fearing none but Allah.\"",
            "bn": "বাগাভী ও ইবন কাসীর এ অংশের ব্যাখ্যায় আদী ইবন হাতিম (রাঃ)-এর একটি বর্ণনা আনেন, যদিও তাতে আয়াতটির উল্লেখ নেই। সহীহ বুখারীতে (৩৫৯৫) আদী বলেন, এক লোক এসে নবী ﷺ-এর কাছে অভাব-অনটনের কথা জানাল, আরেকজন জানাল পথে ডাকাতির কথা। নবী ﷺ বললেন: \"আদী, তুমি কি হীরা দেখেছ?\" তিনি বললেন, দেখিনি, তবে সে সম্পর্কে শুনেছি। নবী ﷺ বললেন: \"তুমি যদি দীর্ঘ জীবন পাও, অবশ্যই দেখবে, হাওদায় চড়া এক নারী হীরা থেকে রওনা হয়ে এসে কা'বার তাওয়াফ করছে, আল্লাহ ছাড়া কাউকে ভয় করছে না।\""
          },
          {
            "en": "'Adiyy said to himself: what of the robbers of Tayy who have spread evil through the country? The narration goes on to foretell the opening of Khosrau's treasures and a time when no one will accept charity. It closes with 'Adiyy's own witness: \"I saw a lady in a Howdah traveling from Al-Hira till she performed the Tawaf of the Ka`ba, fearing none but Allah. And I was one of those who opened (conquered) the treasures of Khosrau, son of Hurmuz.\" Al-Bukhari placed it in his Sahih. What fulfilment looks like here is a lone traveller crossing the land in safety.",
            "bn": "আদী মনে মনে ভাবলেন: তাহলে তাই গোত্রের সেই ডাকাতদের কী হবে, যারা গোটা দেশে আতঙ্ক ছড়িয়ে রেখেছে? বর্ণনাটি এরপর কিসরার ধনভান্ডার খুলে যাওয়ার কথা বলে, এমন এক সময়ের কথা বলে যখন সদকা নেওয়ার লোক পাওয়া যাবে না। শেষে আসে আদীর নিজের সাক্ষ্য: \"আমি দেখেছি, হাওদায় চড়া এক নারী হীরা থেকে রওনা হয়ে এসে কা'বার তাওয়াফ করেছে, আল্লাহ ছাড়া কাউকে ভয় করেনি। আর কিসরা ইবন হুরমুযের ধনভান্ডার যারা জয় করেছিল, আমি তাদেরই একজন।\" বুখারী এটি তাঁর সহীহ গ্রন্থে এনেছেন। লক্ষ করুন, এখানে প্রতিশ্রুতি পূরণের ছবিটা কেমন: নিরাপদে দেশ পাড়ি দেওয়া একা এক মুসাফির।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship With No Partner",
          "bn": "শরীকহীন ইবাদতের শর্ত"
        },
        "p": [
          {
            "en": "Ya'budunani la yushrikuna bi shay'a: they worship Me, not associating anything with Me. Al-Qurtubi gives two ways to read its place: a description of their state, meaning while they worship Allah sincerely, or a fresh sentence in praise of them. At-Tabari explains the worship as yielding to Him in obedience and humbling themselves to His command and prohibition, associating no idol or anything else with Him in it. On every reading, the promise does not come apart from the worship.",
            "bn": "ইয়া'বুদূনানী লা ইউশরিকূনা বী শাইআ: তারা আমার ইবাদত করে, আমার সঙ্গে কিছুকে শরীক করে না। বাক্যে এর অবস্থান কুরতুবী দুইভাবে পড়েন। এক, এটি তাদের অবস্থার বর্ণনা, অর্থাৎ তারা যখন ইখলাসের সঙ্গে আল্লাহর ইবাদত করে। দুই, এটি নতুন বাক্য, তাদের প্রশংসায় বলা। তাবারী ইবাদতের ব্যাখ্যা দেন এভাবে: আনুগত্যে তাঁর সামনে নত হওয়া, তাঁর আদেশ-নিষেধের কাছে নিজেকে বিনীত করা, আর সেই ইবাদতে কোনো মূর্তি বা অন্য কিছুকে তাঁর শরীক না করা। যেভাবেই পড়া হোক, প্রতিশ্রুতি ইবাদত থেকে আলাদা হয় না।"
          },
          {
            "en": "Al-Qurtubi lists four meanings for associating nothing: they worship no god but Me, related by an-Naqqash; they do not show off their worship of Me to anyone; they fear none but Me, from Ibn 'Abbas; they love none but Me, from Mujahid. At-Tabari relays Mujahid differently: they do not fear other than Me. Read that way, the clause and the promise meet. The fear of people that the verse lifts is exchanged for a fear owed to Allah alone, and the safety it promises belongs to those who no longer fear anyone beside Him.",
            "bn": "শরীক না করার চারটি অর্থ কুরতুবী তুলে ধরেন। নাক্কাশের বর্ণনায়, তারা আমি ছাড়া আর কোনো ইলাহের ইবাদত করে না। দ্বিতীয় অর্থে, আমার ইবাদতে তারা কাউকে দেখানোর নিয়ত রাখে না। ইবন আব্বাস (রাঃ) থেকে, তারা আমি ছাড়া কাউকে ভয় করে না। মুজাহিদ থেকে, তারা আমি ছাড়া কাউকে ভালোবাসে না। তাবারী মুজাহিদের কথা আনেন ভিন্ন ভাষায়: তারা আমি ছাড়া কাউকে ভয় করে না। এভাবে পড়লে শর্ত আর প্রতিশ্রুতি এক জায়গায় এসে মেলে। আয়াত মানুষের যে ভয় তুলে নেয়, তার বদলে আসে শুধু আল্লাহর ভয়। আর প্রতিশ্রুত নিরাপত্তা তাদেরই, যারা তিনি ছাড়া আর কাউকে ভয় করে না।"
          },
          {
            "en": "Ibn Kathir sets beside this clause a narration not tied to the verse, from Mu'adh ibn Jabal. In al-Bukhari's wording (5967), the Prophet said, \"Allah's right upon his slaves is that they should worship Him alone and not worship anything else besides Him,\" and later, \"The right of the slaves upon Allah is that He will not punish them (if they do that).\" As-Sa'di adds that the promise holds until the Hour whenever they keep faith and righteous deeds, and that disbelievers gain the upper hand at times because Muslims fall short in them.",
            "bn": "এ অংশের পাশে ইবন কাসীর মুআয ইবন জাবাল (রাঃ)-এর একটি বর্ণনা রাখেন, যা আয়াতের সঙ্গে সরাসরি যুক্ত নয়। বুখারীর ভাষ্যে (৫৯৬৭) নবী ﷺ বললেন: \"বান্দাদের উপর আল্লাহর হক হল, তারা শুধু তাঁরই ইবাদত করবে, তাঁর সঙ্গে আর কিছুর ইবাদত করবে না।\" কিছুক্ষণ পরে বললেন: \"আল্লাহর উপর বান্দাদের হক হল, তারা তা করলে তিনি তাদের শাস্তি দেবেন না।\" সা'দী যোগ করেন, তারা যতদিন ঈমান ও নেক আমলে টিকে থাকবে, কিয়ামত পর্যন্ত প্রতিশ্রুতিটা বহাল থাকবে। কখনো কখনো কাফিররা যে উপরে উঠে আসে, তার কারণ ঈমান ও নেক আমলে মুসলিমদের ঘাটতি।"
          }
        ]
      },
      {
        "h": {
          "en": "Ingratitude After the Gift",
          "bn": "নিয়ামত পাওয়ার পর অকৃতজ্ঞতা"
        },
        "p": [
          {
            "en": "Wa man kafara ba'da dhalika fa-ula'ika humu al-fasiqun: whoever disbelieves after that, those are the defiantly disobedient. At-Tabari records a difference over which kufr is meant. Abu al-'Aliya said it is ingratitude for this blessing, not disbelief in Allah, and at-Tabari judges that closer to the verse, since Allah has just promised a favour and then speaks of whoever denies it afterwards. Al-Qurtubi and al-Baghawi take the same line. Ibn Kathir reads it as leaving obedience after that, and the Muyassar joins the two: denying Allah's favours after the succession, security and establishment.",
            "bn": "ওয়া মান কাফারা বা'দা যালিকা ফা-উলাইকা হুমুল ফাসিকূন: এরপর যে কুফরি করবে, তারাই নাফরমান। কোন কুফরের কথা বলা হচ্ছে, তা নিয়ে তাবারী মতভেদ উল্লেখ করেন। আবুল আলিয়া বলেছেন, এটা এই নিয়ামতের নাশুকরি, আল্লাহর সঙ্গে কুফরি নয়। তাবারী এ ব্যাখ্যাকেই আয়াতের বেশি কাছাকাছি মনে করেন। কারণ আল্লাহ এইমাত্র এক অনুগ্রহের প্রতিশ্রুতি দিয়েছেন, তারপর বলছেন, এরপর যে তা অস্বীকার করবে। কুরতুবী ও বাগাভীও একই পথ ধরেন। ইবন কাসীর একে পড়েন এরপর আনুগত্য ছেড়ে দেওয়া অর্থে। মুয়াসসার দুটি ব্যাখ্যাকে মিলিয়ে বলে: খিলাফত, নিরাপত্তা ও প্রতিষ্ঠার পরও আল্লাহর নিয়ামত অস্বীকার করা।"
          },
          {
            "en": "Abu al-'Aliya's report, as at-Tabari gives it, goes on: Allah made them prevail over Arabia and they believed, then they grew overbearing, and Allah changed what was with them and brought back the fear He had lifted. Al-Baghawi says the commentators held that the first to deny this blessing were those who killed 'Uthman (RA), after which fear came in and those who had been brothers fought each other.",
            "bn": "তাবারীর বর্ণনায় আবুল আলিয়ার কথা আরও এগোয়: আল্লাহ তাদের আরব উপদ্বীপে বিজয়ী করলেন, তারা ঈমান আনল। তারপর তারা উদ্ধত হয়ে উঠল, আল্লাহও তাদের অবস্থা বদলে দিলেন, যে ভয় তুলে নিয়েছিলেন, তা আবার ফিরিয়ে আনলেন। বাগাভী জানান, তাফসীরকারদের মতে এ নিয়ামতকে প্রথম অস্বীকার করেছিল উসমান (রাঃ)-এর হত্যাকারীরা। এরপর ভয় ঢুকে পড়ল, আর যারা ভাই ভাই ছিল, তারা একে অন্যের সঙ্গে লড়াইয়ে নামল।"
          },
          {
            "en": "This needs saying plainly. The promise is conditional, sworn to people described by faith, righteous deeds and worship that associates nothing with Allah, and the commentators who describe its fulfilment point first to the Prophet's time and the generation after him. It does not promise political power to any present-day state, movement or group, and no one may use it to legitimise themselves or to brand others the fasiqun of its last line. The verse describes what the text describes and licenses nothing against any living person or community. Its question is put to each reader alone.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। এ প্রতিশ্রুতি শর্তযুক্ত। কসম খাওয়া হয়েছে এমন মানুষদের জন্য, যাদের পরিচয় ঈমান, নেক আমল আর শরীকমুক্ত ইবাদত। আর তাফসীরকারেরা এর পূরণের কথা বলতে গিয়ে প্রথমে দেখান নবী ﷺ-এর যুগ ও তাঁর পরের প্রজন্মকে। আজকের কোনো রাষ্ট্র, আন্দোলন বা দলকে এ আয়াত রাজনৈতিক ক্ষমতার প্রতিশ্রুতি দেয় না। নিজেকে বৈধ প্রমাণ করতে, কিংবা অন্যদের এর শেষ বাক্যের ফাসিক বলে দাগাতে কেউ একে ব্যবহার করতে পারে না। আয়াত শুধু তা-ই বলে, যা এর শব্দে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। এর প্রশ্নটা প্রত্যেক পাঠকের কাছে, একা তার নিজের কাছে।"
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
            "bn": "সূরাটি আগেই শিখিয়েছে, অন্যের ঘরে কীভাবে ঢুকতে হয়: অনুমতি না নিয়ে আর ঘরের লোকদের সালাম না দিয়ে ঢুকো না (২৪:২৭)। এবার সেই একই আদব ঘরের ভেতরে আসে, বাড়ির দরজা থেকে শোবার ঘরের দরজায়। আল্লাহ এখন ঈমানদারদের বলছেন তাদের নিজেদের ঘর নিয়ে, আর এমন দুই দলের কথা, যাদের বাইরে অপেক্ষা করিয়ে রাখার কথা সাধারণত কেউ ভাবে না: তাদের মালিকানাধীন দাসদাসী, আর ঘরের সেই শিশুরা, যারা এখনো বালেগ হয়নি। কুরতুবী এই জোড়টা সহজ করে দেখান: আগের আয়াত ছিল সাধারণ, আর এই আয়াত নির্দিষ্ট করে দেয়, কারা অনুমতি নেবে আর কখন।"
          },
          {
            "en": "Ibn Kathir draws the line just as clearly. The opening of the surah concerned unrelated people seeking leave of each other; these verses concern relatives and household seeking leave among themselves. Ma'arif al-Qur'an adds that once the men of a house have come in, the family lives together and moves freely from room to room, so a separate rule is needed only for the hours when a person wants to be by himself. The verse does not fence the household off from itself. It reaches into it gently, and only at a few marked points in the day.",
            "bn": "ইবন কাসীরও রেখাটা একই রকম স্পষ্ট করে টানেন। সূরার শুরুর আয়াতগুলো ছিল অনাত্মীয় লোকদের একে অন্যের কাছে অনুমতি চাওয়া নিয়ে; আর এই আয়াতগুলো আত্মীয় আর ঘরের লোকদের নিজেদের মধ্যে অনুমতি চাওয়া নিয়ে। মাআরিফুল কুরআন যোগ করে, ঘরের পুরুষেরা ভেতরে আসার পর পরিবার একসঙ্গেই থাকে, এ ঘর থেকে ও ঘরে অবাধে যাওয়া-আসা করে। তাই আলাদা নিয়ম লাগে শুধু সেই সময়গুলোর জন্য, যখন মানুষ একা থাকতে চায়। আয়াত ঘরের মানুষদের মাঝে দেয়াল তোলে না। ঘরের ভেতরে সে আসে নরম পায়ে, তাও দিনের গুটিকয় নির্দিষ্ট সময়ে।"
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
            "bn": "আয়াত তিনটি সময়ের নাম নেয় সোজাসুজি, ঘুরিয়ে বলে না, বাড়িয়েও বলে না। ফজরের নামাজের আগে, কারণ মানুষ তখনো বিছানায় ঘুমিয়ে; দুপুরে, যখন বিশ্রামের জন্য মানুষ গায়ের কাপড় খুলে রাখে; আর ইশার নামাজের পর, কারণ তখন ঘুমের সময়। সা'দী লক্ষ করেন, রাতে ঘুমানোর সময় মানুষ সাধারণত দিনের পোশাক বদলে অন্য কিছু পরে; কিন্তু দুপুরের বিশ্রাম ছোট, দাসদাসী হয়তো কাপড় পরেই শুয়ে পড়ে। তাই আয়াত মাঝের সময়টিকে কাজটির সঙ্গেই বেঁধে দেয়: আর যখন দুপুরে তোমরা কাপড় খুলে রাখ।"
          },
          {
            "en": "And who is told to ask? The servants of the house, male and female, and the free children who have not yet reached puberty. At-Tabari records two early readings of the words those your right hands possess: Ibn Umar restricted them to males, while others read them of both men and women, since the phrase covers every servant without distinction. At-Tabari himself favours the general sense. Al-Baghawi adds a fine point about the children meant: not the infants who notice nothing of such matters, but the young who have begun to understand them and yet are not grown.",
            "bn": "তাহলে অনুমতি নিতে বলা হচ্ছে কাদের? ঘরের দাসদাসী, পুরুষ-নারী দুই-ই, আর সেই স্বাধীন শিশুরা, যারা এখনো বালেগ হয়নি। তোমাদের ডান হাত যাদের মালিক, এ কথাটি নিয়ে তাবারী পূর্বসূরিদের দুটি মত উল্লেখ করেন: ইবন উমার (রাঃ) একে শুধু পুরুষদের বেলায় ধরেছেন, আর অন্যেরা নারী-পুরুষ দুজনের বেলাতেই, কারণ কথাটি কোনো ভেদাভেদ ছাড়াই সব দাসদাসীকে বোঝায়। তাবারী নিজে সাধারণ অর্থটাই পছন্দ করেন। বাগাভী শিশুদের নিয়ে একটি সূক্ষ্ম কথা যোগ করেন: এখানে সেই একেবারে ছোট শিশুরা উদ্দেশ্য নয়, যারা এসব কিছুই খেয়াল করে না; বরং যারা বুঝতে শুরু করেছে, অথচ এখনো বড় হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Named as Uncovered Times",
          "bn": "যে সময়গুলোর নাম আবরুহীন"
        },
        "p": [
          {
            "en": "Then the verse gathers the three into a phrase: these are three times of privacy for you. The word is 'awrat, the plural of 'awra. Al-Qurtubi glosses it soberly as the hours in which a person is likely to be uncovered and at rest, and traces the sense back to the root idea of a thing with no barrier before it. He runs through why each hour qualifies: before dawn a person leaves the clothes of night for those of day, the noon rest is again a time of undress, and after the night prayer a person undresses for sleep. In these hours exposure is the rule, not the exception.",
            "bn": "এরপর আয়াত তিনটিকে এক কথায় জড়ো করে: এ তোমাদের তিনটি আবরুহীন সময়। শব্দটি 'আওরাত, 'আওরার বহুবচন। কুরতুবী সংযত ভাষায় এর ব্যাখ্যা দেন: এগুলো সেই সময়, যখন মানুষের গা অনাবৃত থাকার আর বিশ্রামে থাকার সম্ভাবনা বেশি। শব্দটির শিকড়ও তিনি দেখান: এমন জিনিস, যার সামনে কোনো আড়াল নেই। প্রতিটি সময় কেন এর মধ্যে পড়ে, তাও তিনি খুলে বলেন: ফজরের আগে মানুষ রাতের কাপড় ছেড়ে দিনের কাপড় পরে, দুপুরের বিশ্রামেও কাপড় খোলা হয়, আর ইশার পর মানুষ ঘুমের জন্য কাপড় খোলে। এই প্রহরগুলোতে গা খোলা থাকাটাই স্বাভাবিক, ব্যতিক্রম নয়।"
          },
          {
            "en": "The reciters read the phrase two ways. The readers of Medina and Basra raised the word, so that it stands as a fresh statement in its own right: these are three times of privacy. The Kufans, among them Hamza and al-Kisa'i, read it in the accusative, tying it back to the three times named just before. At-Tabari judges the two readings close in meaning and both sound, so that whichever a reciter recites he is correct, and al-Farra' preferred the first as the clearer. Either way the ruling that the phrase carries does not change.",
            "bn": "ক্বারীরা কথাটি দুইভাবে পড়েন। মদীনা ও বসরার ক্বারীরা শব্দটিকে পেশ দিয়ে পড়েন, যাতে তা নিজে থেকেই এক নতুন বাক্য হয়ে দাঁড়ায়: এ তোমাদের তিনটি আবরুহীন সময়। কূফার ক্বারীরা, যাদের মধ্যে হামযা ও কিসাঈ, একে যবর দিয়ে পড়েন, ঠিক আগে বলা তিন সময়ের সঙ্গে জুড়ে দিয়ে। তাবারী দুটি পাঠকেই অর্থে কাছাকাছি আর দুটোই বিশুদ্ধ বলে রায় দেন, তাই ক্বারী যেভাবেই পড়ুক সে সঠিক, আর ফাররা প্রথমটিকে বেশি স্পষ্ট বলে পছন্দ করেন। যেভাবেই পড়া হোক, কথাটি যে বিধান বহন করে তা বদলায় না।"
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
            "bn": "এই প্রহরগুলোর বাইরে আয়াত সঙ্গে সঙ্গে ভার নামিয়ে দেয়: এই সময়গুলোর পর তোমাদের উপরও দোষ নেই, তাদের উপরও নেই। কারণটা আসে একটিমাত্র শব্দে, তাওয়াফূন: তারা তোমাদের মাঝে আসা-যাওয়া করে, তোমরা একে অন্যের কাজে লেগে থাকো। সা'দী বলেন, দাসদাসীর দরকার পড়ে সারাক্ষণ, তাই দিনের প্রতিটি মুহূর্তে তাদের অনুমতি চাইতে বললে সত্যিই কষ্ট হতো। তাই আদেশটা শুধু তিনটি আবরুহীন প্রহরের জন্য। দিনের বাকি সময়ে মানুষ কাপড় পরে নিজ নিজ কাজে ব্যস্ত থাকে, তখন এ আদেশ নেই।"
          },
          {
            "en": "Ibn Kathir links that very word to a saying of the Prophet. When he was asked about a cat that had drunk from water set out for ablution, he said it was not impure, for it was one of those that move about among you, min al-tawwafin 'alaykum. Tirmidhi records this from Kabsha bint Ka'b, who watched Abu Qatada tilt the vessel so the cat could drink, and Tirmidhi calls it the soundest report narrated in its chapter. What lives and circulates in a home is given a latitude that a mere visitor is not, and the household is read the same way.",
            "bn": "ইবন কাসীর ঠিক এই শব্দটিকে নবী ﷺ-এর একটি কথার সঙ্গে মেলান। অজুর জন্য রাখা পানি থেকে একটি বিড়াল পান করেছিল; এ নিয়ে জিজ্ঞেস করা হলে তিনি বললেন, এটি নাপাক নয়, কারণ এটি তোমাদের মাঝে ঘুরে বেড়ানো প্রাণীদের একটি, মিন আত-তাওয়াফীন আলাইকুম। তিরমিযী এটি বর্ণনা করেন কাবশা বিনতে কা'ব (রাঃ)-এর সূত্রে, যিনি দেখেছিলেন আবু কাতাদা (রাঃ) পাত্রটি কাত করে ধরলেন, যাতে বিড়ালটি পান করতে পারে। তিরমিযী বলেন, এ অধ্যায়ে বর্ণিত হাদিসগুলোর মধ্যে এটিই সবচেয়ে বিশুদ্ধ। যে ঘরে থাকে আর ঘরময় ঘোরাফেরা করে, সে এমন ছাড় পায়, যা বাইরের আগন্তুক পায় না। ঘরের মানুষদেরও আয়াত এভাবেই দেখে।"
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
            "bn": "আয়াতটি তার নিজের কালের এক ঘরের কথা বলে, যে ঘরে দাসদাসীও থাকত। কথাটা সোজাসুজি স্বীকার করা দরকার। তবে আয়াতের আসল চিন্তা ওই প্রথা নয়, বরং ঘরের ভেতরের আদব: ঘরের কামরায় কামরায় যাদের যাতায়াত সবচেয়ে অবাধ, তাদেরও দরজায় একটু থেমে দাঁড়াতে শেখানো হয়। মাআরিফুল কুরআন লক্ষ করে, সেকালের বিধানে প্রাপ্তবয়স্ক পুরুষ দাস না-মাহরামদের মধ্যে গণ্য হতো। তাই এখানকার কথাটি মূলত দাসীদের আর সেই ছোটদের ব্যাপারে বোঝা হয়, যারা ঘরময় আসা-যাওয়া করত অথচ কেউ তাদের থামানোর কথা ভাবত না।"
          },
          {
            "en": "This much must be said without hedging. The verse describes the household as it then was and lays a duty of restraint and cover upon the people of the house; it licenses nothing against any living person and grants no one a claim over another today. Its enduring instruction runs the other way, toward guarding the rest and dignity of everyone who shares a roof. Read now, it protects the servant and the child, not any master's convenience, and it asks the strong of the house to make room for the privacy of the weak.",
            "bn": "এ কথাটা কোনো রাখঢাক ছাড়াই বলা দরকার। আয়াত ঘরের সেই সময়ের চেহারাটাই তুলে ধরে, আর ঘরের লোকদের উপর সংযম ও আবরু রক্ষার দায়িত্ব দেয়। আজকের কোনো জীবিত মানুষের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না, কাউকে অন্যের উপর কোনো দাবিও দেয় না। এর স্থায়ী শিক্ষা বরং উল্টো দিকে: এক ছাদের নিচে যারা থাকে, তাদের প্রত্যেকের বিশ্রাম আর মর্যাদা আগলে রাখা। আজ পড়লে আয়াতটি আগলে রাখে গৃহকর্মী আর শিশুকে, কোনো মালিকের সুবিধাকে নয়। আর ঘরের সবলদের বলে, দুর্বলের একান্ত সময়ের জন্য জায়গা ছেড়ে দিতে।"
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
            "bn": "এই আদেশ কি বহাল রইল, নাকি রহিত হয়ে গেল? তাফসীরকারেরা এ নিয়ে ভিন্ন মত দিয়েছেন, আর কুরতুবী মতগুলো পাশাপাশি সাজিয়ে দেন। কেউ বলেছেন এটি রহিত; আবু কিলাবা বলেছেন এটি ওয়াজিব নয়, মুস্তাহাব; আর বেশির ভাগ, যাঁদের মধ্যে কাসিম, জাবির বিন যায়দ ও শা'বী আছেন, বলেছেন এটি বহাল, আর নারী-পুরুষ সবার উপর ওয়াজিব। শা'বীকে যখন বলা হলো, মানুষ তো আর এর উপর আমল করে না, তিনি শুধু বললেন, আল্লাহর কাছেই সাহায্য চাই। সাঈদ বিন জুবায়রও বলেন, এটি কখনো রহিত হয়নি; বরং মানুষই এ ব্যাপারে গাফিল হয়ে গেছে।"
          },
          {
            "en": "Ibn Abbas gave the fullest account, and Ibn Kathir grades the chain to him sound. He explained that in early days houses had no curtains or screens, so a servant, a child or a ward might come upon a couple unawares, and the command guarded against exactly that; later, when curtains and easier means came, people judged that these now sufficed. Yet Ibn Abbas named this among three verses that people had abandoned, alongside the verse of sharing at an inheritance (4:8) and the verse that the noblest of you is the most God-fearing, and said he still ordered his own servant-girl to ask leave before entering upon him.",
            "bn": "সবচেয়ে পূর্ণ বিবরণ দেন ইবন আব্বাস (রাঃ), আর ইবন কাসীর তাঁর পর্যন্ত সনদটিকে সহিহ বলেন। তিনি বুঝিয়ে বলেন, শুরুর দিকে ঘরে পর্দা বা আড়াল ছিল না। ফলে কোনো খাদেম, শিশু বা ঘরে প্রতিপালিত এতিম হঠাৎ স্বামী-স্ত্রীর সামনে পড়ে যেতে পারত, আর আদেশটি ঠিক এটাই ঠেকাত। পরে যখন পর্দা এল, জীবন সচ্ছল হলো, মানুষ ভাবল এখন এটুকুই যথেষ্ট। তবু ইবন আব্বাস (রাঃ) একে সেই তিনটি আয়াতের মধ্যে গণ্য করেন, যেগুলো মানুষ ছেড়ে দিয়েছে। বাকি দুটি হলো মিরাস বণ্টনের সময় আত্মীয়দের কিছু দেওয়ার আয়াত (৪:৮), আর তোমাদের মধ্যে সবচেয়ে সম্মানিত সে-ই, যে সবচেয়ে বেশি তাকওয়াবান, এই আয়াত। তিনি আরও বলেন, নিজের দাসীকে তিনি এখনো তাঁর কাছে ঢোকার আগে অনুমতি নিতে বলেন।"
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
            "bn": "মুফাসসিরগণ আয়াত নাজিলের দুটি উপলক্ষ বর্ণনা করেন, আর কোনোটিকেই অন্যটির উপর প্রাধান্য দেন না। বাগাভী ও কুরতুবী ইবন আব্বাস (রাঃ)-এর সূত্রে বলেন, নবী ﷺ মুদলিজ নামে এক আনসারি কিশোরকে দুপুরবেলা উমার (রাঃ)-কে ডেকে আনতে পাঠান। ছেলেটি এমন সময়ে তাঁর ঘরে ঢুকে পড়ে, যখন উমার (রাঃ) চাননি কেউ তাঁকে ওই অবস্থায় দেখুক। তখন আয়াতটি নাজিল হয়, আর এক বর্ণনায় আছে, উমার (রাঃ) শুকরিয়ার সিজদায় লুটিয়ে পড়েন। মুকাতিল অবশ্য ভিন্ন বর্ণনা দেন: ঘটনাটি আসমা বিনতে মারসাদ (রাঃ)-কে নিয়ে। তাঁর প্রাপ্তবয়স্ক দাস এমন সময়ে তাঁর কাছে ঢুকে পড়েছিল, যা তিনি অপছন্দ করতেন, আর তিনি নবী ﷺ-এর কাছে গিয়ে এ নিয়ে অভিযোগ করেন।"
          },
          {
            "en": "The two reports point the same way. Whatever the setting, the concern is a member of the household coming upon another at a private hour, and the remedy is a small act of asking. That the verse closes, like the one that follows it, with the words God is Knowing and Wise tells the reader that the rule is not arbitrary. It is placed with knowledge of how people actually live and with a wisdom that fits every ordinance to its purpose, as as-Sa'di reads the closing names.",
            "bn": "দুটি বর্ণনাই একই দিকে ইঙ্গিত করে। প্রেক্ষাপট যা-ই হোক, চিন্তাটা একই: ঘরের একজন অন্যজনের একান্ত সময়ে হঠাৎ তার সামনে গিয়ে পড়ে। আর এর সমাধান ছোট্ট একটা কাজ, অনুমতি চাওয়া। আয়াতটি শেষ হয়েছে আল্লাহ সর্বজ্ঞ, প্রজ্ঞাময় বলে, ঠিক পরের আয়াতের মতোই। এতে পাঠক বোঝে, বিধানটি খেয়ালখুশির নয়। সা'দী শেষের এই নাম দুটি এভাবে পড়েন: বিধানটি দেওয়া হয়েছে মানুষ আসলে কীভাবে জীবন কাটায় তা জেনে, আর এমন প্রজ্ঞায়, যা প্রতিটি বিধানকে তার উদ্দেশ্যের সঙ্গে মিলিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Teaching the Soft Knock",
          "bn": "মৃদু কড়া নাড়া শেখানো"
        },
        "p": [
          {
            "en": "The practical weight of the verse falls on the elders, not on the children. Ma'arif al-Qur'an points out that it is the grown who are charged with teaching the young to pause at these hours, much as a household teaches a child to pray at the age of seven before the child is bound to the prayer at all. Privacy, read this way, is something taught and learned: a knock, a raised voice, a moment's wait at the threshold, planted early and kept as an adab of the home rather than merely imposed as a rule from above.",
            "bn": "আয়াতের বাস্তব ভারটা পড়ে বড়দের উপর, ছোটদের উপর নয়। মাআরিফুল কুরআন মনে করিয়ে দেয়, এই সময়গুলোতে দরজায় থেমে দাঁড়াতে ছোটদের শেখানোর দায়িত্ব বড়দেরই। ঠিক যেমন ঘরের লোকেরা শিশুকে ৭ বছর বয়সে নামাজ শেখায়, নামাজ তার উপর ফরজ হওয়ার অনেক আগেই। এভাবে দেখলে একান্ততা এমন জিনিস, যা শেখাতে হয়, শিখতে হয়: কড়া নাড়া, একটু গলা খাঁকারি, চৌকাঠে এক মুহূর্তের অপেক্ষা। ছোটবেলাতেই এ অভ্যাস বুনে দিতে হয়, যাতে তা থাকে ঘরের আদব হয়ে, উপর থেকে চাপানো নিছক নিয়ম হয়ে নয়।"
          },
          {
            "en": "The verse also turns modesty inward. Cover and discretion are not only for the street and the stranger; they are a discipline that reaches the bedroom door and the noon rest, kept even among those most trusted. And it is taught gently, framed as ease rather than suspicion: ask at these hours, and move freely through the rest of the day. That God seals the verse by calling Himself Knowing and Wise is the mark set on a law whose whole aim is to protect rest, dignity, and the quiet of a home.",
            "bn": "আয়াতটি লজ্জাশীলতাকে ঘরের ভেতরেও নিয়ে আসে। আবরু আর সংযম শুধু রাস্তাঘাট আর অচেনা মানুষের জন্য নয়। এ এমন এক অনুশীলন, যা শোবার ঘরের দরজা আর দুপুরের বিশ্রাম পর্যন্ত পৌঁছায়, সবচেয়ে বিশ্বস্ত মানুষদের মাঝেও বজায় থাকে। আর তা শেখানো হয় নরমভাবে, সন্দেহের সুরে নয়, সহজ করে দেওয়ার সুরে: এই প্রহরগুলোতে অনুমতি নাও, দিনের বাকি সময় অবাধে চলাফেরা করো। আল্লাহ যে আয়াতের শেষে নিজেকে সর্বজ্ঞ, প্রজ্ঞাময় বলেন, সেটাই এই বিধানের গায়ে বসানো সিলমোহর, যার পুরো উদ্দেশ্য ঘরের বিশ্রাম, মর্যাদা আর প্রশান্তি আগলে রাখা।"
          }
        ]
      }
    ]
  },
  "24:61": {
    "sections": [
      {
        "h": {
          "en": "Two Reliefs, One Verse",
          "bn": "এক আয়াতে দুই স্বস্তি"
        },
        "p": [
          {
            "en": "This is the longest verse in Surah an-Nur, 76 words, doing two things at once. First: laysa 'ala al-a'ma harajun — there is no haraj, no constraint, on the blind, the lame or the ill. Then it opens a long list of houses — your own, your parents', your siblings', your uncles' and aunts', the house whose keys you keep, a friend's — with no blame in eating from any of them, together or apart. as-Sa'di reads the verse as God announcing His favour: He placed no haraj in the religion, but eased it to the limit.",
            "bn": "সূরা নূরের সবচেয়ে দীর্ঘ আয়াত এটি, ৭৬টি শব্দ, একসঙ্গে দুটি বড় কাজ করে। প্রথমে: লাইসা আলাল আ'মা হারাজ, অন্ধ, খোঁড়া বা অসুস্থের উপর কোনো হারাজ নেই, কোনো সংকোচ বা বাধা নেই। তারপর ঘরের এক লম্বা তালিকা খোলে, নিজের ঘর, বাবা-মায়ের ঘর, ভাই-বোনের ঘর, চাচা-ফুফু-মামা-খালার ঘর, যে ঘরের চাবি আপনার জিম্মায়, বন্ধুর ঘর। এসবের কোনোটি থেকে খেতে দোষ নেই, একসঙ্গে হোক কিংবা আলাদা। সা'দী আয়াতটিকে পড়েন আল্লাহর অনুগ্রহের ঘোষণা হিসেবে, তিনি দ্বীনে কোনো হারাজ রাখেননি, বরং সহজ করেছেন একেবারে শেষ সীমা পর্যন্ত।"
          },
          {
            "en": "Hold the two halves together and the theme is one: a faith that removes needless hardship, and a life warm enough that kitchens, keys and tables pass easily between people who love one another. The verse does not treat these as separate topics. It moves from the person who felt he did not belong at the meal, straight to the meal itself, and then to the greeting exchanged at the door. Ease first, then belonging, then peace spoken aloud. Where the commentators disagree — sharply, over the opening line — this article keeps the disagreement open.",
            "bn": "দুই অংশকে একসঙ্গে ধরলে বিষয়টা একটাই। এমন এক দ্বীন, যা অপ্রয়োজনীয় কষ্ট সরিয়ে দেয়, আর এমন এক জীবন, যেখানে যারা একে অপরকে ভালোবাসে তাদের মধ্যে রান্নাঘর, চাবি আর দস্তরখান সহজে হাতবদল হয়। আয়াত এ দুটিকে আলাদা প্রসঙ্গ ভাবে না। যে মানুষ খাবারের আসরে নিজেকে বেমানান ভাবত, তার কথা থেকে সোজা চলে যায় খাবারের কথায়, তারপর দরজায় দেওয়া সালামের কথায়। আগে সহজতা, তারপর আপন হওয়া, তারপর মুখে উচ্চারিত শান্তি। যেখানে তাফসীরকারেরা দ্বিমত করেন, শুরুর লাইনটি নিয়ে তীব্রভাবেই, সেখানে এ লেখা দ্বিমতটাকে খোলা রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Blame on the Blind",
          "bn": "অন্ধের উপর দোষ নেই"
        },
        "p": [
          {
            "en": "Notice what God does not say. He does not urge others to be patient with the blind, lame and ill, as though they were a difficulty to be borne. He speaks to them, and removes something from them: laysa 'alayhim haraj, there is no constraint upon them. The word haraj holds both meanings the moment carried — the tightness of a duty they could not meet, and the hot embarrassment of feeling a burden at another's table. Whichever the commentators stress, the grammar is a lifting, not a concession from above. It names them first, before parents, before friends.",
            "bn": "খেয়াল করুন, আল্লাহ কী বলেন না। তিনি অন্যদের বলেন না, অন্ধ, খোঁড়া আর অসুস্থদের নিয়ে ধৈর্য ধরো, যেন তারা এমন ঝামেলা, যা সয়ে নিতে হবে। তিনি কথা বলেন তাদের উদ্দেশেই, আর তাদের কাঁধ থেকে কিছু একটা নামিয়ে দেন: লাইসা আলাইহিম হারাজ, তাদের উপর কোনো সংকোচ নেই। হারাজ শব্দে সেই মুহূর্তের দুটি অর্থই ধরা আছে: এমন দায়িত্বের চাপ, যা তারা পালন করতে পারত না; আর অন্যের দস্তরখানে বোঝা হয়ে বসে থাকার জ্বালাধরা লজ্জা। তাফসীরকারেরা যেটার উপরই জোর দিন, বাক্যের গড়নটা ভার নামিয়ে দেওয়ার, উপর থেকে দয়া করে দেওয়া ছাড়ের নয়। আর আয়াত তাদের নামই নেয় সবার আগে, বাবা-মায়ের আগে, বন্ধুর আগে।"
          },
          {
            "en": "So the blind man is not pitied here, and the lame man not managed. They are told they belong — at the meal, in the household, in the circle the verse draws so wide. The disability clause is no footnote to a passage about food; it is why the passage opens as it does. God settles the person most likely to hold back before He describes the table everyone is welcome at. The verse gives no ground to anyone who would treat a blind, lame or ill person as a lesser guest or an object of charity, not a companion.",
            "bn": "তাই অন্ধ মানুষটিকে এখানে করুণা করা হচ্ছে না, খোঁড়া মানুষটিকে সামলানো হচ্ছে না। তাদের বলা হচ্ছে, তোমরা এখানকারই লোক, খাবারের আসরে, ঘরের ভেতরে, আয়াত যে বৃত্ত এত চওড়া করে আঁকে তার ভেতরে। এভাবে পড়লে অক্ষমতার এই কথাটা খাবার নিয়ে আলোচনার পাদটীকা নয়, বরং এ কারণেই আলোচনাটা এভাবে শুরু হয়। যে মানুষটি সবচেয়ে বেশি পিছিয়ে থাকতে পারে, দস্তরখানের বর্ণনার আগে আল্লাহ তাকেই শান্ত করেন। আয়াত এমন কাউকে এক বিন্দু জায়গা দেয় না, যে অন্ধ, খোঁড়া বা অসুস্থ মানুষকে সঙ্গীর বদলে কম মর্যাদার অতিথি বা দয়ার পাত্র বলে দেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Clause Comes Here",
          "bn": "এই কথাটা এখানে কেন"
        },
        "p": [
          {
            "en": "Ibn Kathir says plainly the commentators disagreed over why the constraint is lifted here. The first reading is about duty. 'Ata' al-Khurasani and 'Abd ar-Rahman ibn Zayd ibn Aslam held that it concerns jihad: there is no sin on them for staying back from fighting, given their weakness — as Allah says elsewhere, there is no blame on the weak, the ill, or those who find nothing to spend (9:91). as-Sa'di and al-Muyassar take the verse this way too: no blame for leaving obligatory acts that depend on sight, sound legs or health.",
            "bn": "ইবন কাসীর সোজাসুজি বলেন, এখানে কেন সংকোচ তুলে নেওয়া হলো, তা নিয়ে তাফসীরকারেরা ভিন্নমত পোষণ করেছেন। প্রথম ব্যাখ্যাটি দায়িত্ব নিয়ে। আতা আল-খুরাসানী আর আব্দুর রহমান ইবন যায়দ ইবন আসলামের মতে কথাটা জিহাদ নিয়ে: দুর্বলতার কারণে যুদ্ধে না গেলে তাদের গুনাহ নেই। যেমন আল্লাহ অন্য জায়গায় বলেন, দুর্বল, অসুস্থ আর যারা খরচ করার মতো কিছু পায় না, তাদের উপর কোনো দোষ নেই (৯:৯১)। সা'দী আর মুয়াসসারও আয়াতটিকে এভাবে বোঝেন: যেসব ফরজ আমল দৃষ্টিশক্তি, সুস্থ পা কিংবা সুস্থতার উপর নির্ভর করে, সেগুলো ছেড়ে দিলে তাদের দোষ নেই।"
          },
          {
            "en": "The other reading is about the table. Sa'id ibn Jubayr and Miqsam, in Ibn Kathir, held that the able-bodied felt scruple about eating with a blind man, who could not see the best food and might be served last; with a lame man, who could not settle; with the ill, who ate less — they feared being unfair, so the verse relieved them. al-Baghawi gives the mirror, from Sa'id ibn Jubayr and ad-Dahhak: the blind, lame and ill drew back from the healthy, and the blind would say, perhaps I eat more than my share, the lame, perhaps I take the place of two.",
            "bn": "অন্য ব্যাখ্যাটি দস্তরখান নিয়ে। ইবন কাসীরের বর্ণনায় সাঈদ ইবন জুবায়র আর মিকসাম বলেন, সুস্থ মানুষেরা অন্ধের সঙ্গে খেতে সংকোচ বোধ করত, কারণ সে ভালো খাবারটা দেখতে পায় না, হয়তো সবার শেষে পায়। খোঁড়ার সঙ্গেও, কারণ সে ঠিকমতো বসতে পারে না; অসুস্থের সঙ্গেও, কারণ সে কম খায়। তাদের ভয় ছিল, না জানি অবিচার হয়ে যায়। তাই আয়াত তাদের এই সংকোচ থেকে মুক্তি দিল। বাগাভী সাঈদ ইবন জুবায়র আর দাহহাক থেকে উল্টো ছবিটা দেন: অন্ধ, খোঁড়া আর অসুস্থরা নিজেরাই সুস্থদের সঙ্গে খেতে বসত না। অন্ধ বলত, হয়তো ভাগের চেয়ে বেশি খেয়ে ফেলব; খোঁড়া বলত, হয়তো দুজনের জায়গা নিয়ে বসব।"
          },
          {
            "en": "Other traces tie the line to being led to a relative's house. Mujahid, in Ibn Kathir, tells how a man would take a blind or lame companion to a kinsman's house, and the disabled would say, they are only taking us into other people's homes. as-Suddi adds a man who would not eat at his father's house because the master was absent. al-Baghawi preserves al-Hasan's view that the sentence closes at nor upon the ill, and nor upon yourselves opens a fresh clause. The tradition never settled on a single story; safest is that God lifted all these constraints at once.",
            "bn": "আরও কিছু বর্ণনা লাইনটিকে জুড়ে দেয় আত্মীয়ের ঘরে নিয়ে যাওয়ার সঙ্গে। ইবন কাসীরের বর্ণনায় মুজাহিদ বলেন, কেউ তার অন্ধ বা খোঁড়া সঙ্গীকে কোনো আত্মীয়ের ঘরে নিয়ে যেত, আর অক্ষম লোকটি বলত, এরা তো আমাদের পরের ঘরে নিয়ে যাচ্ছে। সুদ্দী আরেকজনের কথা আনেন, যে বাবার ঘরেও খেত না, কারণ ঘরের কর্তা তখন বাড়িতে নেই। বাগাভী হাসানের মত রাখেন যে বাক্য শেষ হয় 'অসুস্থের উপরও নেই'-তে, আর 'তোমাদের উপরও নেই' দিয়ে নতুন কথা শুরু হয়। ঐতিহ্য কোনো একটি কাহিনিতে থিতু হয়নি; সবচেয়ে নিরাপদ বোঝা হলো, আল্লাহ এই সব সংকোচ একসঙ্গেই তুলে নিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Open Doors of Kin",
          "bn": "আত্মীয়ের খোলা দরজা"
        },
        "p": [
          {
            "en": "The verse then names the houses, and the list is deliberately full: fathers, mothers, brothers, sisters, then paternal and maternal uncles and aunts, each spelled out. It begins, oddly, with your own houses. as-Sa'di stops here: it cannot mean the house a man lives in himself, for that was never in doubt, and the Qur'an does not state the obvious. He reads min buyutikum as the houses of your children — a house so much yours it is named as yours — and both he and Ibn Kathir cite the hadith you and your wealth belong to your father. The sons are covered though never named.",
            "bn": "এরপর আয়াত ঘরগুলোর নাম নেয়, আর তালিকাটা ইচ্ছে করেই পূর্ণাঙ্গ: বাবা, মা, ভাই, বোন, তারপর চাচা-ফুফু আর মামা-খালা, প্রত্যেককে আলাদা করে বলা। শুরুটা অবশ্য অবাক করার মতো, নিজের ঘর দিয়ে। সা'দী এখানে থামেন: এর মানে মানুষ নিজে যে ঘরে থাকে তা হতে পারে না, কারণ তা নিয়ে কোনো সন্দেহ কখনো ছিল না, আর কুরআন জানা কথা বলে না। তিনি মিন বুয়ূতিকুম বোঝেন সন্তানের ঘর হিসেবে, যে ঘর এতটাই আপনার যে তাকে আপনার ঘর বলেই ডাকা হয়েছে। তিনি আর ইবন কাসীর দুজনেই হাদিসটি আনেন: তুমি আর তোমার সম্পদ তোমার বাবার। এভাবে সন্তানদের নাম আলাদা করে না এলেও তারা এর মধ্যে পড়ে।"
          },
          {
            "en": "Why open these doors? Ibn Kathir preserves from Ibn 'Abbas that when do not consume one another's wealth wrongfully (4:29) came down, the Muslims grew so careful they said food is the best of wealth, so none may eat at another's — and stopped. The verse loosens that knot, not into a free run of others' larders. as-Sa'di draws the rule from the context: these houses open because custom and kinship made eating from them unbegrudged, so where an owner would be pained or grudging, the permission lapses. Ma'arif al-Qur'an says the same today: the licence holds only where you are sure it will please, not offend.",
            "bn": "এসব দরজা খোলা হলো কেন? ইবন কাসীর ইবন আব্বাস থেকে বর্ণনা করেন, যখন নাজিল হলো 'তোমরা একে অন্যের সম্পদ অন্যায়ভাবে খেয়ো না' (৪:২৯), মুসলিমরা এতটাই সাবধান হয়ে গেল যে বলল, খাবার তো সবচেয়ে উত্তম সম্পদ, তাই কারও জন্য অন্যের ঘরে খাওয়া বৈধ নয়। এরপর তারা খাওয়া বন্ধ করে দিল। আয়াত এই গিঁটটা খুলে দেয়, তবে অন্যের ভাঁড়ারে যথেচ্ছ হাত দেওয়ার অনুমতি দিয়ে নয়। সা'দী প্রসঙ্গ থেকে মূল নিয়মটা বের করেন: এসব ঘরের দরজা খোলা, কারণ রীতি আর আত্মীয়তার সুবাদে সেখানে খেলে কেউ মনে কিছু করে না। তাই যেখানে মালিক কষ্ট পাবেন বা মন থেকে চাইবেন না, সেখানে অনুমতি থাকে না। মাআরিফুল কুরআন আজকের দিনের জন্যও একই কথা বলে: অনুমতি তখনই, যখন আপনি নিশ্চিত যে আপনার খাওয়ায় মালিক খুশি হবেন, বিরক্ত হবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Keys in Your Hand",
          "bn": "হাতের চাবি"
        },
        "p": [
          {
            "en": "Two clauses stretch the circle past blood. The first is aw ma malaktum mafatihahu, the houses whose keys you possess. as-Sa'di reads these as houses you administer by agency or guardianship, and argues against reading it as an owned slave: you do not hold a slave's keys, but the slave himself, and his house is already his master's, so a lifting there says nothing. Sa'id ibn Jubayr and as-Suddi, in Ibn Kathir, read it as the servant or steward, who may eat from what is stored with him; al-Baghawi carries 'Ikrima's line that whoever holds the key may take a little.",
            "bn": "দুটি কথা বৃত্তটাকে রক্তের সম্পর্কের বাইরে টানে। প্রথমটি আও মা মালাকতুম মাফাতিহাহু, যেসব ঘরের চাবি তোমাদের হাতে। সা'দী এগুলোকে পড়েন সেসব ঘর হিসেবে, যা আপনি প্রতিনিধিত্ব বা তত্ত্বাবধানের জোরে চালান। মালিকানাধীন দাস অর্থ নেওয়ার বিরুদ্ধে তিনি দৃঢ় যুক্তি দেন, দাস সম্পর্কে বলা হয় না তার চাবি আপনার, বলা হয় সে-ই আপনার। আর দাসের ঘর তো এমনিতেই মালিকের ঘরের ভেতরে, সেখানে সংকোচ তোলার কথা কিছুই বলত না। ইবন কাসীরে সাঈদ ইবন জুবায়র আর সুদ্দী এটিকে পড়েন ঘরের খাদেম বা কর্মচারী হিসেবে, যে জিম্মায় রাখা জিনিস থেকে খেতে পারে। বাগাভী ইকরিমার কথা আনেন, যার হাতে চাবি সে-ই রক্ষক, অল্প কিছু খেতে পারে।"
          },
          {
            "en": "The keys clause has a story. Ibn Kathir reports from 'Urwa that 'A'isha said the Muslims on campaign would hand their keys to trusted people, saying, eat what you need; but the trustees would say, it is not lawful for us — they gave us leave reluctantly, and we are only keepers. Then aw sadiqikum, the house of your friend, the one true to you, al-Baghawi glosses. Ibn Kathir ties it to al-Harith ibn 'Amr, who left Malik ibn Zayd over his household and returned to find him worn thin, for Malik had felt the constraint of eating a friend's food unbidden.",
            "bn": "চাবির কথাটার পেছনে একটা ঘটনা আছে। ইবন কাসীর উরওয়ার সূত্রে আয়িশা (রাঃ) থেকে বর্ণনা করেন, মুসলিমরা যুদ্ধে বের হওয়ার সময় বিশ্বস্ত লোকদের হাতে চাবি দিয়ে যেত, বলত, তোমাদের যা দরকার খেয়ো। কিন্তু তারা বলত, এটা আমাদের জন্য বৈধ নয়; ওরা অনুমতি দিয়েছে মন থেকে না চেয়ে, আর আমরা তো কেবল পাহারাদার। তারপর আও সাদীকিকুম, তোমাদের বন্ধুর ঘর; বাগাভীর ব্যাখ্যায় বন্ধু মানে, যে আপনার প্রতি আন্তরিক। ইবন কাসীর এটিকে হারিস ইবন আমরের ঘটনার সঙ্গে জোড়েন। তিনি মালিক ইবন যায়দকে নিজের পরিবারের দেখাশোনার ভার দিয়ে গিয়েছিলেন। ফিরে এসে দেখেন মালিক শুকিয়ে কাঠ, কারণ অনুমতি ছাড়া বন্ধুর খাবার খেতে তিনি সংকোচ বোধ করেছিলেন।"
          },
          {
            "en": "Both stories carry the same fine grain. The permission is real, but it never overrides the owner's true heart; as-Sa'di keeps the friend's food conditioned on no known reluctance in him. What the verse breaks is not the owner's right, but the paralysing over-caution that had made people go hungry beside food that was theirs to eat. It is scruple corrected, not property loosened — the difference the whole passage turns on.",
            "bn": "দুটি ঘটনাতেই একই সূক্ষ্ম কথা আছে। অনুমতি সত্যিই আছে, তবে তা কখনো মালিকের মনের আসল চাওয়াকে ডিঙিয়ে যায় না। সা'দী বন্ধুর খাবারের অনুমতিতেও শর্ত রাখেন: বন্ধুর মনে অনিচ্ছা আছে বলে জানা থাকলে চলবে না। আয়াত মালিকের অধিকার ভাঙে না। ভাঙে সেই অতিরিক্ত সাবধানতা, যা মানুষকে এমন অসাড় করে দিয়েছিল যে খাওয়ার অধিকার থাকা খাবারের পাশে বসেও তারা না খেয়ে থাকত। এখানে সংশোধন হয়েছে বাড়াবাড়ি সংকোচের, সম্পদের মালিকানা ঢিলে হয়নি। পুরো অংশটা এই পার্থক্যের উপরই দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Together or Apart",
          "bn": "একসাথে কিংবা আলাদা"
        },
        "p": [
          {
            "en": "Then a second scruple, the opposite of the first. There is no blame on you whether you eat jami'an aw ashtatan, together or in scattered ones. Ibn Kathir reports from Ibn 'Abbas that after 4:29 some grew ashamed to eat alone and would wait for company; and from Qatadah that a clan of Banu Kinanah in Jahiliyya thought eating alone a disgrace, so a man might drive his laden camels hungry until he found someone to share with. al-Baghawi records the reverse: the rich felt scruple about eating beside a poorer kinsman. The verse frees both the solitary eater and the shy.",
            "bn": "তারপর দ্বিতীয় এক সংকোচ, প্রথমটির ঠিক উল্টো। আয়াত বলে, তোমরা একসঙ্গে খাও কিংবা আলাদা আলাদা, জামীআন আও আশতাতান, তাতে তোমাদের দোষ নেই। ইবন কাসীর ইবন আব্বাস থেকে বর্ণনা করেন, ৪:২৯ নাজিল হওয়ার পর কেউ কেউ একা খেতে লজ্জা পেত, সঙ্গীর অপেক্ষায় বসে থাকত। আর কাতাদা থেকে বর্ণনা করেন, জাহেলি যুগে বনু কিনানার একটি গোত্র একা খাওয়াকে লজ্জার কাজ মনে করত। ফলে কেউ হয়তো খাবারবোঝাই উট নিয়ে ক্ষুধার্ত অবস্থায় পথ চলত, যতক্ষণ না ভাগ করে খাওয়ার মতো কাউকে পেত। বাগাভী উল্টো দিকটা উল্লেখ করেন: ধনীরা গরিব আত্মীয়ের পাশে বসে খেতে সংকোচ করত। আয়াত একা যে খায় তাকে, আর যে লজ্জায় গুটিয়ে থাকে তাকে, দুজনকেই মুক্ত করে।"
          },
          {
            "en": "Freeing a thing is not preferring it. as-Sa'di and Ibn Kathir note it lifts the constraint, not the merit; gathering stays better and more blessed. A narration in Abu Dawud (no. 3764), from Wahshi ibn Harb from his father from his grandfather, with no grading shown on the page consulted here, carries the point: the Companions said, Messenger of Allah, we eat but we are not satisfied; he said, perhaps you eat separately; they said, yes; he said, if you gather at your food and mention Allah's name, you will be blessed in it. Ibn Majah records 'Umar for the same, that the blessing is with the gathering.",
            "bn": "তবে কোনো কিছু বৈধ করা মানেই সেটাকে উত্তম বলা নয়। সা'দী আর ইবন কাসীর বলেন, আয়াত সংকোচ তুলে নিয়েছে, ফজিলত নয়: একসঙ্গে বসে খাওয়াই উত্তম, তাতেই বরকত বেশি। আবু দাউদের একটি বর্ণনা (নং ৩৭৬৪) কথাটা স্পষ্ট করে। এটি ওয়াহশি ইবন হারব তাঁর বাবা থেকে, তিনি তাঁর দাদা থেকে বর্ণনা করেছেন; যে পৃষ্ঠা থেকে এটি নেওয়া, সেখানে এর কোনো মান উল্লেখ নেই। সাহাবীরা বললেন, হে আল্লাহর রাসূল, আমরা খাই, কিন্তু পেট ভরে না। তিনি বললেন, তোমরা হয়তো আলাদা আলাদা খাও। তাঁরা বললেন, হ্যাঁ। তিনি বললেন, তোমরা একসঙ্গে বসে খাও আর আল্লাহর নাম নাও, তাতে তোমাদের বরকত দেওয়া হবে। ইবন মাজাহ উমর (রাঃ) থেকেও একই কথা আনেন: বরকত একসঙ্গে খাওয়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Greet Your Own",
          "bn": "নিজেদের সালাম দাও"
        },
        "p": [
          {
            "en": "So when you enter houses, greet 'ala anfusikum — literally, greet yourselves. Sa'id ibn Jubayr, al-Hasan al-Basri, Qatadah and az-Zuhri, in Ibn Kathir, read it as fa-yusallim ba'dukum 'ala ba'd: let one of you greet another. as-Sa'di gives the reason the wording can say yourselves and mean one another: the believers are as though a single person, so knit in love and mercy that the greeting a man gives is a greeting to himself. The salam you send out is addressed to your own body — the same logic that made the disabled man, a few lines above, one of us at the table.",
            "bn": "তাই যখন তোমরা ঘরে ঢোকো, সালাম দাও আলা আনফুসিকুম, আক্ষরিক অর্থে, নিজেদের সালাম দাও। ইবন কাসীরের বর্ণনায় সাঈদ ইবন জুবায়র, হাসান বসরী, কাতাদা আর যুহরী এর অর্থ করেন ফাইউসাল্লিম বা'দুকুম আলা বা'দ, অর্থাৎ তোমাদের একজন অন্যজনকে সালাম দেবে। শব্দে 'নিজেদের' বলা হলেও অর্থ কেন 'একে অন্যকে', সা'দী তার কারণ দেখান: মুমিনরা যেন একজনই মানুষ, ভালোবাসা আর দয়ায় এমনভাবে বাঁধা যে একজন যে সালাম দেয়, তা যেন নিজেকেই দেয়। আপনার পাঠানো সালাম আসলে পৌঁছায় আপনার নিজেরই দেহে। এ সেই একই যুক্তি, যা কয়েক লাইন আগে অক্ষম মানুষটিকে দস্তরখানে আমাদেরই একজন করে নিয়েছিল।"
          },
          {
            "en": "The commentators widen it. Jabir ibn 'Abdullah, in Ibn Kathir, said when you enter upon your family, greet them with a greeting from Allah, blessed and good, and thought it near to obligatory. Mujahid and Qatadah teach that on entering an empty house you say as-salamu 'alayna wa 'ala 'ibad Allah is-salihin — peace be upon us and upon the righteous servants of Allah — and Qatadah adds that the angels return it. God calls it tahiyyatan min 'indihi mubarakatan tayyibatan; as-Sa'di reads mubarakah for the safety, mercy and increase in it, and tayyibah because it is of the goodly word He loves, that eases the heart and draws affection.",
            "bn": "তাফসীরকারেরা কথাটাকে আরও প্রসারিত করেন। ইবন কাসীরের বর্ণনায় জাবির ইবন আব্দুল্লাহ (রাঃ) বলেন, নিজের পরিবারের কাছে ঢুকলে তাদের সালাম দাও, আল্লাহর পক্ষ থেকে বরকতময়, পবিত্র অভিবাদন। তিনি একে প্রায় ওয়াজিব মনে করতেন। মুজাহিদ আর কাতাদা শেখান, খালি ঘরে ঢুকলে বলবে, আস-সালামু আলাইনা ওয়া আলা ইবাদিল্লাহিস সালিহীন, আমাদের উপর আর আল্লাহর নেক বান্দাদের উপর শান্তি বর্ষিত হোক। কাতাদা যোগ করেন, ফেরেশতারা এর জবাব দেন। আল্লাহ একে বলেন তাহিয়্যাতান মিন ইনদিহি মুবারাকাতান তাইয়িবাতান। সা'দী বলেন, একে মুবারাকা বলা হয়েছে, কারণ এতে আছে নিরাপত্তা, রহমত আর বৃদ্ধি; আর তাইয়িবা, কারণ এটি সেই উত্তম কথার অন্তর্ভুক্ত, যা আল্লাহ ভালোবাসেন, যা মনকে প্রশান্ত করে আর ভালোবাসা জাগায়।"
          }
        ]
      },
      {
        "h": {
          "en": "That You May Understand",
          "bn": "যাতে তোমরা বোঝো"
        },
        "p": [
          {
            "en": "The verse closes as several before it in this surah do: thus does Allah make clear to you the verses, la'allakum ta'qilun, that you may understand. as-Sa'di lingers on the ending. To grasp God's rulings as they truly are, he says, grows the intellect and ripens the mind, because their meanings are the highest and their manners the finest; whoever uses his reason to understand his Lord is given more of it. The closing is not decoration. It tells you the point of the whole passage was never a list of permitted houses, but a mind trained to read God's ease correctly.",
            "bn": "আয়াত শেষ হয় এই সূরার আগের কয়েকটির মতোই, এভাবে আল্লাহ তোমাদের জন্য আয়াতসমূহ স্পষ্ট করেন, লাআল্লাকুম তা'কিলূন, যাতে তোমরা বোঝো। সা'দী শেষটায় থমকে দাঁড়ান। আল্লাহর বিধান যথাযথভাবে বোঝা বুদ্ধি বাড়ায় আর মনকে পরিণত করে, বলেন তিনি, কারণ এগুলোর অর্থ সর্বোচ্চ আর আদব সেরা। যে নিজের বুদ্ধি খাটায় রবকে বোঝার জন্য, তাকে আরও দেওয়া হয়। এই শেষ কথাটা সাজসজ্জা নয়। এটা বলে দেয়, গোটা অংশটার উদ্দেশ্য কখনোই অনুমোদিত ঘরের তালিকা ছিল না, বরং এমন এক মন গড়া, যা আল্লাহর সহজতাকে ঠিকভাবে পড়তে শেখে।"
          },
          {
            "en": "Read from end to beginning, the verse is one movement. It wants a community that reasons, that speaks peace on the threshold, that eats together and counts the blessing in it, that lends its keys and tables freely, and that — before any of this — makes sure the blind, the lame and the ill know they are not a burden but belong. Remove any of these and the ease shrinks to a rule. Together they are what the surah keeps calling clear: a religion with no needless hardship, and a door you enter saying peace.",
            "bn": "শেষ থেকে শুরুর দিকে পড়লে আয়াতটা আসলে একটাই টানা চলা। এটি চায় এমন এক সমাজ, যা বুদ্ধি খাটায়, দরজার চৌকাঠে শান্তি উচ্চারণ করে, একসঙ্গে খায় আর তাতে বরকত গোনে, নিজের চাবি আর দস্তরখান অকুণ্ঠভাবে বিলিয়ে দেয়, আর এসব কিছুর আগে নিশ্চিত করে যে অন্ধ, খোঁড়া আর অসুস্থ জানে তারা বোঝা নয়, তারা এখানকারই লোক। এর যেকোনো একটি বাদ দিলে সহজতা ছোট হয়ে নিছক নিয়মে পরিণত হয়। সব একসঙ্গে ধরলেই পাওয়া যায় সেই জিনিস, যাকে সূরা বারবার স্পষ্ট বলে: এমন এক দ্বীন, যাতে কোনো অপ্রয়োজনীয় কষ্ট নেই, আর এমন এক দরজা, যেখানে ঢুকতে হয় সালাম দিয়ে।"
          }
        ]
      }
    ]
  }
});
