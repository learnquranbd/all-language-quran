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
            "bn": "আয়াতটি ২৪:১১-২৬ পর্যন্ত দীর্ঘ অংশের ভেতরে, যা আল্লাহ নাজিল করেছিলেন 'ইফক' নিয়ে, অর্থাৎ নবী ﷺ-এর স্ত্রী আয়েশা (রাঃ)-এর বিরুদ্ধে রটানো অপবাদ নিয়ে। এক মাস ধরে মিথ্যাটা মদীনায় ঘুরে বেড়াল; তারপর ওহি এসে তাঁর নির্দোষিতা ঘোষণা করল। কিন্তু প্রতিটি নির্দোষ প্রমাণের পর যেমন হয়, মানুষের মনে ভাঙচুরের দাগ রয়ে গেল। আঘাত পাওয়া পরিবারটি এখন ঠিক জানত, গল্পটা কারা ছড়িয়েছে। আর যারা ছড়িয়েছিল, তাদের মধ্যে ছিল এমন একজন, যাকে তারাই খাওয়াত।"
          },
          {
            "en": "Al-Bukhari relates the account from Aisha (RA) herself. Mistah ibn Uthathah (RA) — a poor emigrant, a relative of Abu Bakr (RA), and one of those who took part in the talk — lived on Abu Bakr's support. When the innocence came down, Abu Bakr swore he would never spend on Mistah again. By ordinary reckoning that oath was mild; he owed nothing to a man who had helped wound his daughter. The verse arrived to answer that reckoning.",
            "bn": "বুখারী ঘটনাটি স্বয়ং আয়েশা (রাঃ) থেকে বর্ণনা করেছেন। মিসতাহ ইবনে উসাসা (রাঃ) ছিলেন এক গরিব মুহাজির, আবু বকর (রাঃ)-এর আত্মীয়, আর যারা ওই রটনায় শামিল হয়েছিল তাদের একজন। তিনি চলতেন আবু বকরের দেওয়া সাহায্যে। নির্দোষিতার আয়াত নাজিল হলে আবু বকর কসম করলেন, মিসতাহর পেছনে আর কখনো খরচ করবেন না। সাধারণ হিসাবে এ কসম তো নরমই; যে লোক তাঁর মেয়েকে আঘাত দেওয়ায় হাত মিলিয়েছিল, তার প্রতি তাঁর কোনো দায় ছিল না। আয়াতটি এল সেই হিসাবেরই জবাব দিতে।"
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
            "bn": "আয়াতের ভাষায় কারও নাম নেই: তোমাদের মধ্যে যারা 'ফাদল' (মর্যাদা ও প্রাচুর্য) আর সামর্থ্যের অধিকারী, তারা যেন আত্মীয়, মিসকীন ও আল্লাহর পথে হিজরতকারীদের কিছু না দেওয়ার কসম না খায়; 'ওয়াল-ইয়াফূ ওয়াল-ইয়াসফাহূ', তারা যেন ক্ষমা করে আর উপেক্ষা করে। ক্রিয়া দুটি আলাদা। 'আফও' মানে অপরাধীর বিরুদ্ধে নিজের দাবি ছেড়ে দেওয়া। 'সাফহ' এসেছে পাতা উল্টানো থেকে; এর মানে এরপর তার সঙ্গে খোলা মুখে দেখা করা, যেন অপরাধটা কোথাও লিখে রাখা হয়নি।"
          },
          {
            "en": "Notice also how the verse names the wrongdoer: not as slanderer but as relative, poor, emigrant in Allah's path — three titles of claim. It refuses to let one sin delete a person's other truths. And it calls the giver a possessor of fadl before asking anything, arguing from his own excellence: generosity of your rank does not lapse because its recipient failed. The address dignifies both parties in the act of repairing them.",
            "bn": "আরও লক্ষ করুন, আয়াত অন্যায়কারীকে কী নামে ডাকে: অপবাদদাতা নয়, বরং আত্মীয়, মিসকীন, আল্লাহর পথে মুহাজির। তিনটিই এমন পরিচয়, যা তাকে কিছু পাওয়ার হক দেয়। একটি গুনাহের কারণে আয়াত একজন মানুষের বাকি সত্যগুলো মুছে যেতে দেয় না। আর দাতার কাছে কিছু চাওয়ার আগেই তাকে ডাকে 'ফাদল'-এর অধিকারী বলে, যেন তার নিজের মর্যাদা দিয়েই যুক্তি দেয়: আপনার মতো মানুষের উদারতা এ কারণে বাতিল হয়ে যায় না যে যাকে দিচ্ছেন সে ভুল করেছে। এভাবে সম্বোধনটি দুই পক্ষকে শুধরে নেওয়ার মুহূর্তেই দুজনকে সম্মান দেয়।"
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
            "bn": "তারপর সেই বাক্য, যার জন্য আয়াতটি মানুষের মনে গেঁথে আছে: 'আলা তুহিব্বূনা আঁইয়াগফিরাল্লাহু লাকুম', তোমরা কি চাও না যে আল্লাহ তোমাদের ক্ষমা করুন? এটা প্রশ্ন, হুকুম নয়, কারণ হুকুমের দরকারই পড়ে না; উত্তর তো একটাই। আয়াত বান্দার প্রতি বান্দার ক্ষমাকে রাখে বান্দার প্রতি আল্লাহর ক্ষমার পাশে, তারপর দুটোর তফাতটা নিজেই বুঝে নিতে দেয়। যে মনে আঘাতের পাওনা পুষে রাখে, তার নিজের হাত দুটোই আল্লাহর কাছে এর চেয়ে অনেক বড় দেনায় বাঁধা।"
          },
          {
            "en": "Aisha (RA) narrates the effect: Abu Bakr (RA) said, indeed I would love that Allah forgive me — and returned to Mistah the maintenance he used to give him, saying he would never withdraw it from him. The forgiveness was not a sentiment; it was a resumed payment. That is the verse's standard for pardon: restoration of the benefit the anger had cut, not merely the retirement of the grudge.",
            "bn": "আয়েশা (রাঃ) জানান এর ফল কী হলো। আবু বকর (রাঃ) বললেন, অবশ্যই, আমি চাই আল্লাহ আমাকে ক্ষমা করুন। তারপর মিসতাহকে আগে যে খরচ দিতেন, তা আবার চালু করে দিলেন, আর বললেন, আর কখনো তা বন্ধ করবেন না। এই ক্ষমা শুধু মনের আবেগ ছিল না; ছিল আবার শুরু হওয়া মাসোহারা। ক্ষমার জন্য আয়াতের মানদণ্ড এটাই: রাগের বশে যে উপকার বন্ধ হয়েছিল, তা ফিরিয়ে দেওয়া, শুধু মনের ক্ষোভটুকু সরিয়ে রাখা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgiveness in the Quran's Pattern",
          "bn": "কুরআনের ধারায় ক্ষমা"
        },
        "p": [
          {
            "en": "The verse belongs to a family. 3:134 praises those who restrain rage and pardon people, and ends: Allah loves the doers of excellence. 41:34 orders repelling the evil deed with what is better, until the one with enmity becomes a devoted friend. And 12:92 preserves Yusuf (AS) saying to the brothers who had wronged him: no reproach upon you today; may Allah forgive you. In each place, pardon is not the weak party's surrender but the strong party's gift.",
            "bn": "এ আয়াত একই ধারার আরও কিছু আয়াতের সঙ্গী। ৩:১৩৪ প্রশংসা করে তাদের, যারা রাগ সংযত করে আর মানুষকে ক্ষমা করে, আর শেষ হয় এ কথায়: আল্লাহ ইহসানকারীদের ভালোবাসেন। ৪১:৩৪ হুকুম দেয় মন্দকে উত্তম দিয়ে প্রতিহত করতে, যতক্ষণ না যার সঙ্গে শত্রুতা ছিল সে অন্তরঙ্গ বন্ধু হয়ে যায়। আর ১২:৯২ ধরে রেখেছে ইউসুফ (আঃ)-এর কথা, যা তিনি তাঁর প্রতি অন্যায়কারী ভাইদের বলেছিলেন: আজ তোমাদের বিরুদ্ধে কোনো অভিযোগ নেই; আল্লাহ তোমাদের ক্ষমা করুন। প্রতিটি জায়গায় ক্ষমা দুর্বলের আত্মসমর্পণ নয়, বরং শক্তিমানের উপহার।"
          },
          {
            "en": "What 24:22 adds to the family is the measure-for-measure argument stated as an exchange: your forgiving is set against your being forgiven. The Prophet ﷺ stated the same law from the positive side — Muslim relates: whoever relieves a believer of a hardship of this world, Allah relieves him of a hardship of the Day of Rising, and Allah is in the aid of His servant as long as the servant is in the aid of his brother.",
            "bn": "এই ধারায় ২৪:২২ যা যোগ করে, তা হলো 'যেমন কর্ম তেমন ফল'-এর যুক্তি, লেনদেনের ভাষায় বলা: আপনার ক্ষমা করার বিপরীতে রাখা হয়েছে আপনার ক্ষমা পাওয়া। নবী ﷺ একই নিয়ম ইতিবাচক দিক থেকে বলেছেন। মুসলিম বর্ণনা করেন: যে ব্যক্তি কোনো মুমিনের দুনিয়ার একটি কষ্ট দূর করে, আল্লাহ কিয়ামতের দিন তার একটি কষ্ট দূর করবেন। আর বান্দা যতক্ষণ তার ভাইয়ের সাহায্যে থাকে, আল্লাহ ততক্ষণ বান্দার সাহায্যে থাকেন।"
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
            "bn": "আয়াতটির কঠিনতা ইচ্ছাকৃত। এটি ক্ষমার বিধান দেয় ঠিক সেখানে, যেখানে ক্ষমার দাম সবচেয়ে বেশি: যার উপর অন্যায় হয়েছে, আঘাতটা প্রকাশ্য, পরিবার জড়িত, আর অপরাধী নির্ভর করে তারই উপর যাকে সে আঘাত দিয়েছে। সহজ ক্ষমার জন্য আয়াতের দরকার ছিল না। সবচেয়ে কঠিন অবস্থাটা বেছে নিয়ে সেখানেই ক্ষমার হুকুম দিয়ে আয়াত সব ছোটখাটো ঘটনার জন্য সর্বোচ্চ মাপটা ঠিক করে দেয়। আবু বকর (রাঃ) যদি তাঁর মেয়ের নামে অপবাদ রটানো লোকটিকে আবার খাওয়াতে পারেন, তবে আমরা বেশির ভাগ মানুষ যেসব সম্পর্ক ছিন্ন করে বসে আছি, সেগুলোর যুক্তি অনেক দুর্বল। আয়াত শেষ হয় এ কথায়: আর আল্লাহ ক্ষমাশীল, পরম দয়ালু। এ দুটি সেই সত্তার নাম, যাঁর আচরণ আমরা নিজেদের জন্য বেছে নিচ্ছি।"
          }
        ]
      },
      {
        "h": {
          "en": "Practising the Verse",
          "bn": "আয়াতটির অনুশীলন"
        },
        "p": [
          {
            "en": "The practice is specific because the story is specific. Identify the person your justified anger has cut off, and identify what was cut — money, greeting, help, presence. The verse's question is then put to you in your own case: would you not love that Allah forgive you? If yes, restore the thing itself, as the payment was restored, and add safh: no cold face, no annual reminder of the offence. Whoever finds this beyond him has at least located the exact distance between himself and the man the Quran was describing.",
            "bn": "ঘটনাটা সুনির্দিষ্ট, তাই অনুশীলনও সুনির্দিষ্ট। খুঁজে বের করুন সেই মানুষটিকে, যাকে আপনি ন্যায্য রাগে নিজের জীবন থেকে ছেঁটে ফেলেছেন। তারপর দেখুন, কী কী বন্ধ করেছেন: টাকা, সালাম, সাহায্য, নাকি দেখা-সাক্ষাৎ। এবার আয়াতের প্রশ্নটা আপনার নিজের ঘটনাতেই আপনাকে করা হচ্ছে: আপনি কি চান না যে আল্লাহ আপনাকে ক্ষমা করুন? উত্তর হ্যাঁ হলে, যা বন্ধ করেছিলেন সেটাই আবার চালু করুন, যেমন মিসতাহর খরচ আবার চালু হয়েছিল। সঙ্গে যোগ করুন 'সাফহ': মুখ ভার করে থাকা নয়, প্রতি বছর পুরনো অপরাধের কথা মনে করিয়ে দেওয়াও নয়। এটা যার কাছে সাধ্যের বাইরে মনে হয়, সে অন্তত মেপে ফেলেছে, কুরআন যে মানুষটির কথা বলছিল তার সঙ্গে তার নিজের দূরত্ব ঠিক কতখানি।"
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
            "en": "May a woman look at a man? Here the commentators keep a real difference open. Ma'arif al-Qur'an reports that many scholars held it forbidden for a woman to look at a non-mahram man, citing the report of Umm Salama, graded hasan sahih by at-Tirmidhi, where the Prophet ﷺ had the blind Companion screened. Others allowed a look without desire, resting on the sound report of A'isha watching the Abyssinians from behind the Prophet ﷺ. All agreed a look charged with lust is forbidden. The article does not settle between them; the verse's weight falls on restraint, not surveillance.",
            "bn": "নারী কি পুরুষের দিকে তাকাতে পারে? এ প্রশ্নে তাফসীরকারেরা সত্যিকারের একটি মতভেদ খোলা রেখেছেন। মাআরিফুল কুরআন জানায়, অনেক আলেমের মতে গায়রে মাহরাম পুরুষের দিকে নারীর তাকানো নিষেধ। তাঁদের দলিল উম্মে সালামার বর্ণনা, তিরমিযী যাকে হাসান সহীহ বলেছেন: সেখানে নবী ﷺ অন্ধ সাহাবীর সামনে পর্দা করার আদেশ দিয়েছিলেন। অন্যরা কামনা ছাড়া তাকানোর অনুমতি দিয়েছেন। তাঁদের ভিত্তি সেই সহীহ বর্ণনা, যেখানে আয়েশা (রাঃ) নবী ﷺ-এর পেছনে দাঁড়িয়ে হাবশীদের খেলা দেখছিলেন। কামনাভরা দৃষ্টি যে হারাম, এ ব্যাপারে সবাই একমত। এ লেখা তাঁদের মতভেদের মীমাংসা করে না; আয়াতের জোর সংযমের উপর, অন্যের উপর নজরদারির উপর নয়।"
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
          "en": "Light and Its Similitude",
          "bn": "নূর ও তার উপমা"
        },
        "p": [
          {
            "en": "The verse opens with a statement, Allahu nurus-samawati wal-ard, Allah is the Light of the heavens and the earth. The commentators most commonly explain this as meaning that He is the one who illuminates them and guides whoever is in them, since He is not a created light among lights. Then the second sentence changes register entirely: mathalu nurihi, the likeness of His light. From here on the verse is openly a similitude.",
            "bn": "আয়াতটি শুরু হয় একটি ঘোষণা দিয়ে: আল্লাহু নূরুস সামাওয়াতি ওয়াল আরদ, আল্লাহ আসমান ও যমীনের নূর। মুফাসসিরগণ এর সবচেয়ে প্রচলিত যে ব্যাখ্যা দেন তা হলো, তিনিই আসমান-যমীনকে আলোকিত করেন, আর এর মধ্যে যারা আছে তাদের পথ দেখান। কারণ তিনি নিজে অনেক আলোর মধ্যে একটি সৃষ্ট আলো নন। এরপর দ্বিতীয় বাক্যে সুর পুরোপুরি বদলে যায়: মাসালু নূরিহি, তাঁর নূরের উপমা। এখান থেকে আয়াতটি খোলাখুলিই একটি উপমা।"
          },
          {
            "en": "That distinction is doing real work. What is being pictured is the likeness of His light, not His essence, and the verse itself confirms the genre at the end: and Allah presents examples for the people. Sound exegesis stays inside that frame. Systems built on this verse that treat its objects as coded stages of an inner journey go well past what the Arabic supports, and the mainstream commentators did not read it that way.",
            "bn": "এই পার্থক্যটা খুব গুরুত্বপূর্ণ। যে ছবি আঁকা হচ্ছে, তা তাঁর নূরের উপমা, তাঁর সত্তার নয়। আয়াত নিজেই শেষে বলে দেয় এটা কোন ধরনের কথা: আর আল্লাহ মানুষের জন্য উপমা দেন। সঠিক তাফসীর এই সীমার ভেতরেই থাকে। কেউ কেউ এ আয়াতের জিনিসগুলোকে অন্তরের সফরের একেকটি সাংকেতিক ধাপ ধরে পুরো তত্ত্ব দাঁড় করিয়েছেন। আরবি ভাষা যতটুকু সমর্থন করে, এসব তত্ত্ব তার অনেক বাইরে চলে যায়, আর মূলধারার মুফাসসিরগণ আয়াতটি এভাবে পড়েননি।"
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
            "bn": "প্রতিটি উপাদান বেছে নেওয়ার পেছনে কারণ আছে। মিশকাত হলো দেয়ালের এমন এক কুলুঙ্গি, যার ওপাশে কোনো ফোকর নেই; তাই আলো ছড়িয়ে না গিয়ে সেখানে জমা হয়। তার ভেতরে আছে মিসবাহ, অর্থাৎ প্রদীপ। প্রদীপটি রাখা আছে যুজাজাহ, অর্থাৎ কাঁচের ভেতরে, আর সেই কাঁচকে বলা হয়েছে যেন এক উজ্জ্বল তারা। কারণ স্বচ্ছ কাঁচ শিখাকে রক্ষাও করে, আবার তার আলোও বাড়িয়ে দেয়। এখানে কিছুই নিছক সাজসজ্জা নয়; প্রতিটি অংশ আলোকে আরও উজ্জ্বল করে।"
          },
          {
            "en": "The lamp is fed from a blessed olive tree, neither of the east nor of the west. The commentators explain this as a tree standing where the sun reaches it through the whole day, so its fruit ripens fully and its oil is of the finest grade. Then the striking clause: its oil almost gives light though no fire has touched it. Purity so complete that it is nearly luminous before it is even lit.",
            "bn": "প্রদীপে তেল আসে এক বরকতময় জয়তুন গাছ থেকে, যা পূর্বেরও নয়, পশ্চিমেরও নয়। মুফাসসিরগণ ব্যাখ্যা করেন, গাছটি এমন জায়গায় দাঁড়িয়ে, যেখানে সারাদিন রোদ পায়; ফলে তার ফল পুরোপুরি পাকে, আর তেল হয় সবচেয়ে উৎকৃষ্ট। এরপর আসে চমকে দেওয়ার মতো কথাটি: আগুন না ছুঁলেও তার তেল যেন নিজেই আলো দিতে চায়। তেলটি এতটাই খাঁটি যে জ্বালানোর আগেই প্রায় আলো ছড়ায়।"
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
            "bn": "নূরুন আলা নূর, নূরের উপর নূর: এই কথায় গোটা ছবিটা এক জায়গায় এসে মেলে। মুফাসসিরগণ সবচেয়ে বেশি এই উপমাকে বোঝেন মুমিনের অন্তরে রাখা ঈমান ও হিদায়াতের আলো হিসেবে, আর এ ব্যাখ্যা প্রথম যুগের একাধিক আলেম থেকে বর্ণিত। কেউ কেউ একে কুরআনের উপর প্রয়োগ করেন, কেউ নবী ﷺ-এর উপর, যাঁর মাধ্যমে হিদায়াত মানুষের কাছে পৌঁছেছে। এই ব্যাখ্যাগুলো একটি আরেকটির বিরোধী নয়, বরং পরিপূরক।"
          },
          {
            "en": "The verse then removes any suggestion that the light can be seized: Allah guides to His light whom He wills. The commentators pair this with the many verses making guidance follow a person's turning, such as 29:69, so that divine choice and human effort are not set against each other. The closing words, and Allah is Knowing of all things, keep the giving of light within His knowledge rather than within our claims about who deserves it.",
            "bn": "এরপর আয়াত এ ধারণা নাকচ করে দেয় যে এই আলো কেউ ছিনিয়ে নিতে পারে: আল্লাহ যাকে চান, তাঁর নূরের দিকে পথ দেখান। মুফাসসিরগণ এর সঙ্গে মিলিয়ে পড়েন সেই সব আয়াত, যেখানে হিদায়াত আসে মানুষ আল্লাহর দিকে ফিরলে, যেমন ২৯:৬৯। ফলে আল্লাহর ইচ্ছা আর মানুষের চেষ্টাকে একে অপরের বিরুদ্ধে দাঁড় করানো হয় না। শেষ কথাটি, আর আল্লাহ সবকিছু জানেন, আলো দেওয়ার বিষয়টি রাখে তাঁর জ্ঞানের হাতে; কে এর যোগ্য, সে নিয়ে আমাদের দাবির হাতে নয়।"
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
            "bn": "এই ছবিটি সূরা আন-নূরে কেন এসেছে, তা বোঝা যায় দুই পাশের আয়াতগুলো থেকে। এ সূরার বাকি অংশ জুড়ে আছে অপবাদ, সাক্ষ্য-প্রমাণ, লজ্জাশীলতা আর অন্যের ঘরে ঢোকার আদব। ঠিক পরেই ২৪:৩৬-৩৭ এমন সব ঘরের কথা বলে, যেগুলোকে উঁচু করার আর যেখানে তাঁর নাম জিকির করার অনুমতি আল্লাহ দিয়েছেন। সেখানে সকাল-সন্ধ্যা তাঁর তাসবীহ পাঠ করে এমন মানুষ, ব্যবসা-বাণিজ্য বা কেনাবেচা যাদের আল্লাহর জিকির থেকে উদাসীন করে না।"
          },
          {
            "en": "Then come two contrasting parables, in 24:39-40: the deeds of the disbelievers as a mirage in a plain that a thirsty man takes for water, and as darknesses layered over one another in a deep sea, so that a man can hardly see his own hand. Placed together, the three images set out the choice the surah has been building toward: gathered light, or layered dark.",
            "bn": "এরপর ২৪:৩৯-৪০-এ আসে দুটি বিপরীত উপমা। কাফিরদের আমল যেন সমতল প্রান্তরে মরীচিকা, তৃষ্ণার্ত মানুষ যাকে পানি ভাবে। আবার তা যেন গভীর সমুদ্রে স্তরে স্তরে জমা অন্ধকার, যেখানে মানুষ নিজের হাতটাও প্রায় দেখতে পায় না। তিনটি ছবি পাশাপাশি রাখলে সামনে আসে সেই বেছে নেওয়ার প্রশ্ন, যার দিকে সূরাটি এতক্ষণ এগোচ্ছিল: জমাট আলো, নাকি স্তরে স্তরে অন্ধকার।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prayer for Light",
          "bn": "নূরের দোয়া"
        },
        "p": [
          {
            "en": "The most direct link between this verse and practice is a supplication preserved in al-Bukhari and Muslim, said by the Prophet ﷺ as he went out to the mosque: O Allah, place light in my heart, and light in my hearing, and light in my sight, and light on my right and on my left, and before me and behind me, and make light for me. The narrations list the limbs one by one.",
            "bn": "এই আয়াতকে আমলের সঙ্গে সবচেয়ে সরাসরি জুড়ে দেয় একটি দোয়া, যা বুখারী ও মুসলিমে সংরক্ষিত। নবী ﷺ মসজিদের দিকে বের হওয়ার সময় এটি বলেছিলেন: হে আল্লাহ, আমার অন্তরে নূর দিন, আমার কানে নূর দিন, আমার চোখে নূর দিন, আমার ডানে ও বামে নূর দিন, আমার সামনে ও পেছনে নূর দিন, আর আমার জন্য নূর করে দিন। বর্ণনাগুলোতে অঙ্গগুলোর নাম একে একে এসেছে।"
          },
          {
            "en": "The supplication treats light as something asked for repeatedly rather than acquired once. It also spreads it across the senses and directions, which fits the verse's picture of light gathered and multiplied rather than a single flame. A believer who says this on the way to fajr is doing with words exactly what the similitude does with images.",
            "bn": "এ দোয়ায় নূর একবার পেয়ে গেলেই শেষ, এমন কিছু নয়; তা বারবার চেয়ে নেওয়ার জিনিস। দোয়াটি নূরকে ছড়িয়েও দেয় সব ইন্দ্রিয়ে আর সব দিকে। এটা আয়াতের ছবির সঙ্গে মেলে, যেখানে আলো একটিমাত্র শিখা নয়, বরং জমা হয়ে বহুগুণ বেড়ে ওঠা আলো। যে মুমিন ফজরের পথে এ দোয়া পড়েন, উপমাটি ছবি দিয়ে যা করে, তিনি শব্দ দিয়ে ঠিক তা-ই করেন।"
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
            "bn": "অন্তরের হিদায়াত হিসেবে পড়লে উপমাটি কয়েকটি সহজ প্রশ্ন সামনে আনে। প্রদীপে তেলের কোনো উৎস আছে কি, মানে কুরআনের সঙ্গে নিয়মিত যোগাযোগ? নাকি প্রদীপ চলছে শুধু পুরনো স্মৃতির জোরে? কাঁচটি কি স্বচ্ছ, মানে একান্তে আমি যা করি, তা কি বাইরে যা দেখাই তার সঙ্গে মেলে? কারণ যা কিছু কাঁচকে ঘোলা করে, তা ওই একই শিখাকে ম্লান করে দেয়। আর আলো কি কোথাও জমা হচ্ছে, নাকি শত রকম আধাআধি অঙ্গীকারে ছড়িয়ে যাচ্ছে?"
          },
          {
            "en": "The most useful feature of the image is that light is not manufactured by the glass. The glass only keeps it safe and lets it through. That takes the weight off performance and puts it on maintenance, which is the ordinary work of prayer on time, recitation that continues, company that helps and sins left behind. Ask for the light in the words the Prophet ﷺ used, and keep the glass clean enough to hold it.",
            "bn": "এই ছবির সবচেয়ে কাজের দিকটি হলো: আলো কাঁচ বানায় না। কাঁচ শুধু আলোকে নিরাপদ রাখে আর তাকে বাইরে আসতে দেয়। ফলে চাপটা আর নিজে আলো তৈরি করার উপর থাকে না, থাকে কাঁচের যত্নের উপর। আর সেই যত্ন মানে রোজকার সাধারণ কাজ: সময়মতো নামাজ, থেমে না যাওয়া তিলাওয়াত, ভালো সঙ্গ, আর গুনাহ পেছনে ফেলে আসা। নবী ﷺ যে শব্দে নূর চেয়েছেন, সেই শব্দেই আপনিও চান, আর কাঁচটা এতটা পরিষ্কার রাখুন, যাতে তা নূর ধরে রাখতে পারে।"
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
            "bn": "সূরা আন-নূর ধাপে ধাপে আলোর একটি ছবি গড়ে তুলছিল। ২৪:৩৫-এ আছে কুলুঙ্গির ভেতরের প্রদীপ, আর ২৪:৩৬-৩৮ দেখায় এমন আলো কোথায় থাকে: সেই ঘরগুলোতে, যেগুলোকে উঁচু করার আর যেখানে তাঁর নাম জিকির করার অনুমতি আল্লাহ দিয়েছেন; সেই মানুষদের মধ্যে, ব্যবসা-বাণিজ্য বা কেনাবেচা যাদের তাঁর জিকির থেকে ভুলিয়ে রাখে না; আর আছে তাদের জন্য আল্লাহর দেওয়া প্রতিদান। তারপর বাক্যের মোড় ঘোরে: আর যারা কুফরি করেছে, তাদের আমল সমতল প্রান্তরের মরীচিকার মতো।"
          },
          {
            "en": "The contrast is precisely built. The men in 24:37 are described by what does not distract them; the man here is described entirely by his motion toward something. One picture shows light kept somewhere and tended, the other shows light misread at a distance. Both are about seeing, which is what the whole surah is about, and only one of the two people in them arrives anywhere at all.",
            "bn": "দুই ছবির বৈপরীত্য খুব নিখুঁতভাবে সাজানো। ২৪:৩৭-এর মানুষদের পরিচয় দেওয়া হয়েছে, কী তাদের ভুলিয়ে রাখতে পারে না তা দিয়ে; আর এখানকার মানুষটির পুরো পরিচয় কোনো কিছুর দিকে তার ছুটে চলা। একটি ছবিতে আলো কোথাও রাখা আছে, যত্নে আগলে রাখা। অন্যটিতে দূর থেকে দেখা আলোকে ভুল বোঝা হয়েছে। দুটো ছবিই দেখা নিয়ে, আর গোটা সূরাটাই দেখা নিয়ে। কিন্তু এই দুই ছবির দুজনের মধ্যে কেবল একজনই আদৌ কোথাও পৌঁছায়।"
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
            "bn": "'সারাব' মানে মরীচিকা; আর 'কীআহ', ইবনে কাসীরের ব্যাখ্যায়, হলো প্রশস্ত সমতল ভূমি — যে ভূপ্রকৃতি প্রথমেই এই ভ্রমটিকে সম্ভব করে তোলে। 'কীআহ' শব্দটি কুরআনে কেবল এখানেই এসেছে। 'সারাব' এসেছে আর একটি আয়াতে: 78:20 বলে, পাহাড়গুলোকে চালিত করা হবে, ফলে সেগুলো মরীচিকা হয়ে যাবে। কুরআনে এই শব্দের একমাত্র অন্য ব্যবহারটি পাহাড়ের মরীচিকা হয়ে যাওয়া নিয়েই।"
          },
          {
            "en": "The choice of a mirage rather than, say, a ruin or an ash-heap matters. A ruin announces itself. A mirage is at its most convincing while it is still far off and most useful to believe in, and it fails only on arrival, when there is no time and no water left to try anything else. Nothing about the traveller's effort was wrong. Everything about the object was.",
            "bn": "ধ্বংসস্তূপ বা ছাইয়ের গাদা না বেছে মরীচিকা বেছে নেওয়াটা তাৎপর্যপূর্ণ। ধ্বংসস্তূপ নিজেই নিজের পরিচয় দিয়ে দেয়। মরীচিকা সবচেয়ে বিশ্বাসযোগ্য থাকে তখনই, যখন তা এখনো বহু দূরে এবং যখন তাতে বিশ্বাস রাখাই সবচেয়ে কাজে লাগে; আর তা ব্যর্থ হয় কেবল পৌঁছানোর মুহূর্তে, যখন অন্য কিছু চেষ্টা করার মতো সময়ও নেই, পানিও নেই। পথিকের পরিশ্রমে কোনো ভুল ছিল না। ভুল ছিল লক্ষ্যবস্তুর সবকিছুতে।"
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
            "bn": "আয়াত মানুষটির নাম দিয়েছে আয-যামআন, তৃষ্ণার্ত জন; শব্দটি কুরআনে আর কোথাও আসেনি। এ খুঁটিনাটি ইচ্ছা করেই রাখা। ছায়ায় বসে থাকা, হাতে ভরা পানির পাত্র আছে এমন মানুষকে মরীচিকা ধোঁকা দিতে পারে না। ধোঁকা খায় সে, যার পানি দরকার আর যে পানি খুঁজছে। তাই উপমাটি মোটেও আলস্যের গল্প নয়। এটি এমন আন্তরিক পরিশ্রমের গল্প, যা ভুল লক্ষ্যের পেছনে ছুটেছে।"
          },
          {
            "en": "Ibn Kathir reads this first parable as being about the disbeliever who calls others to his disbelief and believes he has good deeds and sound beliefs when in fact he has not. He also names the two ways a deed can fail on that Day: an absence of sincere belief, or a manner of acting that never followed what was legislated. Either leaves the effort untouched and the object empty.",
            "bn": "ইবনে কাসীর এই প্রথম উপমাটিকে পড়েন সেই কাফিরের ছবি হিসেবে, যে অন্যদেরও নিজের কুফরির দিকে ডাকে, আর ভাবে তার ভালো আমল আছে, বিশ্বাসও ঠিক আছে, অথচ আসলে কোনোটাই নেই। তিনি এটাও বলেন, কিয়ামতের দিন একটি আমল দুই কারণে বৃথা হতে পারে: খাঁটি ঈমান না থাকলে, কিংবা কাজটি শরীয়তের দেখানো পথে না হলে। এর যেকোনো একটি হলেই পরিশ্রম পুরোটাই থাকে, কিন্তু যার জন্য পরিশ্রম, সেখানে গিয়ে মেলে শূন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "He Did Not Find Nothing",
          "bn": "সে শূন্যতা পায়নি"
        },
        "p": [
          {
            "en": "Then the parable breaks its own frame. He comes to it and does not find it to be anything, and he finds Allah there, who pays him his account in full; and Allah is swift in account. A mirage story ought to end in hot sand. This one ends with Someone waiting. The emptiness is not itself the punishment; it is the discovery that clears the ground for the reckoning which follows it.",
            "bn": "এরপর উপমাটি নিজের কাঠামোই ভেঙে দেয়। সে সেখানে পৌঁছে দেখে, ওটা কিছুই নয়; আর সেখানে সে পায় আল্লাহকে, যিনি তার হিসাব পুরোপুরি চুকিয়ে দেন; আর আল্লাহ দ্রুত হিসাব গ্রহণকারী। মরীচিকার গল্প শেষ হওয়ার কথা তপ্ত বালুতে। এ গল্প শেষ হয় এমন একজনের সামনে, যিনি সেখানে অপেক্ষায় ছিলেন। শূন্যতাটাই শাস্তি নয়; শূন্যতা ধরা পড়াটা কেবল পরের হিসাব-নিকাশের পথ পরিষ্কার করে দেয়।"
          },
          {
            "en": "The Quran says the same thing without the image in several places. 18:104 describes those whose effort in the worldly life is lost while they think they are doing well in work, and 18:105 explains that their deeds became worthless. 25:23 says Allah will turn to what they did of deeds and make them scattered dust; Ibn Kathir cites that verse here. 14:18 gives ashes blown about on a stormy day.",
            "bn": "কুরআন একই কথা ছবি ছাড়াই বলেছে আরও কয়েক জায়গায়। 18:104 বর্ণনা করে তাদের, দুনিয়ার জীবনে যাদের সব পরিশ্রম বৃথা গেছে অথচ তারা মনে করে তারা ভালোই কাজ করছে; আর 18:105 ব্যাখ্যা করে যে তাদের আমল নিষ্ফল হয়ে গেছে। 25:23 বলে, তারা যেসব আমল করেছে আল্লাহ সেদিকে অগ্রসর হয়ে সেগুলোকে বিক্ষিপ্ত ধূলিকণা বানিয়ে দেবেন; ইবনে কাসীর এখানে এই আয়াতটিই উদ্ধৃত করেন। 14:18 দেয় ঝড়ের দিনে উড়ে যাওয়া ছাইয়ের ছবি।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Same as 24:40",
          "bn": "24:40-এর মতো নয়"
        },
        "p": [
          {
            "en": "The next verse gives a second parable, and the two are often run together. They should not be. 24:40 pictures darknesses in a deep sea, waves over waves with clouds above them, so that a man stretching out his hand can hardly see it. Ibn Kathir separates them carefully: the mirage is for the one whose ignorance is compound, the darkness for the one whose ignorance is simple.",
            "bn": "পরের আয়াতটি দ্বিতীয় একটি উপমা দেয়, আর দুটিকে প্রায়ই একসঙ্গে মিশিয়ে ফেলা হয়। তা করা উচিত নয়। 24:40 আঁকে গভীর সমুদ্রের অন্ধকার — ঢেউয়ের ওপর ঢেউ, তার ওপরে মেঘ; ফলে কেউ হাত বের করলে তা প্রায় দেখতেই পায় না। ইবনে কাসীর দুটিকে সাবধানে আলাদা করেন: মরীচিকা তার জন্য যার অজ্ঞতা যৌগিক, আর অন্ধকার তার জন্য যার অজ্ঞতা সরল।"
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
            "bn": "উপমাটি যে ব্যবহারিক সমস্যা ধরিয়ে দেয়, তা হলো সময়ের। যতটা দূর থেকে মানুষ সেদিকে হাঁটার সিদ্ধান্ত নেয়, সেখান থেকে মরীচিকা আর পানির পার্থক্য বোঝা যায় না। বোঝা যায় কেবল পৌঁছানোর পর, যখন আর কিছুই করার থাকে না। তাই যাচাইটা করতে হবে আগেভাগে, ভেবেচিন্তে, এমন আমলের উপর যার সামনে এখনো বহু বছর পড়ে আছে; প্রয়োজনের মুহূর্তে কখনো নয়।"
          },
          {
            "en": "Two questions do most of the work, and they are the two Ibn Kathir names. Is this being done for Allah, or for the version of me that other people carry around? And is it being done the way He asked, or the way that suits me and happens to resemble worship? Neither question is comfortable, and both are far cheaper to answer now than on arrival.",
            "bn": "দুটি প্রশ্নেই বেশিরভাগ কাজ হয়ে যায়, আর এ দুটিই ইবনে কাসীরের বলা। কাজটা কি আল্লাহর জন্য করছি, নাকি লোকের মনে আমার যে ছবি আছে, তার জন্য? আর কাজটা কি সেভাবে করছি যেভাবে তিনি বলেছেন, নাকি যেভাবে আমার সুবিধা হয় আর দেখতে ইবাদতের মতো লাগে? কোনো প্রশ্নই আরামের নয়, কিন্তু পৌঁছানোর পর জবাব দেওয়ার চেয়ে এখন জবাব দেওয়া অনেক সহজ।"
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
