/**
 * Tadabbur long-form articles — surah 49.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "49:10": {
    "sections": [
      {
        "h": {
          "en": "A Fact Before a Command",
          "bn": "নির্দেশের আগে একটি সত্য"
        },
        "p": [
          {
            "en": "Innama al-mu'minuna ikhwah: the believers are but brothers. The sentence is built on innama, the particle of restriction, and on a bold word choice: ikhwah is the plural Arabic typically uses for brothers by birth. The Quran takes the strongest bond the language has and declares it the existing relation between all believers. It is stated as a fact, not an aspiration — not that believers should feel brotherly, but that believers are brothers, with everything a brother is owed following from it.",
            "bn": "'ইন্নামাল মু'মিনূনা ইখওয়াহ' — মুমিনরা তো পরস্পর ভাই। বাক্যটি দাঁড়িয়ে আছে 'ইন্নামা' — সীমাবদ্ধকারী অব্যয় — এবং একটি সাহসী শব্দচয়নের ওপর: 'ইখওয়াহ' সেই বহুবচন, আরবি সাধারণত যা ব্যবহার করে জন্মসূত্রের ভাইদের জন্য। ভাষার সবচেয়ে শক্ত বন্ধনটি নিয়ে কুরআন ঘোষণা করে — এ-ই সব মুমিনের মধ্যে বিদ্যমান সম্পর্ক। এটি বলা হয়েছে সত্য হিসেবে, আকাঙ্ক্ষা হিসেবে নয় — মুমিনদের ভাইসুলভ বোধ করা উচিত, তা নয়; বরং মুমিনরা ভাই-ই — আর একজন ভাইয়ের যা যা প্রাপ্য, সবই তা থেকে অনুসৃত হয়।"
          },
          {
            "en": "The command then rides on the fact: fa-aslihu bayna akhawaykum, so set things right between your two brothers — and the dual, your two brothers, is precise. Reconciliation is not only for wars between factions; it reaches down to any two individuals at odds. The verse ends by tying the work to taqwa and to hope: and fear Allah, that you may be shown mercy — as if mercy from above is kept moving by mercy repaired below.",
            "bn": "নির্দেশটি তারপর সেই সত্যের ওপর চড়ে: 'ফা-আসলিহূ বাইনা আখাওয়াইকুম' — অতএব তোমাদের দুই ভাইয়ের মধ্যে মীমাংসা করে দাও — আর দ্বিবচনটি — তোমাদের দুই ভাই — সুনির্দিষ্ট। মীমাংসা কেবল দলে দলে যুদ্ধের জন্য নয়; তা নেমে আসে বিবাদে জড়ানো যেকোনো দুজন মানুষ পর্যন্ত। আয়াত শেষ হয় কাজটিকে তাকওয়া ও আশার সঙ্গে বেঁধে: আর আল্লাহকে ভয় করো, যাতে তোমাদের প্রতি রহম করা হয় — যেন ওপরের রহমত সচল থাকে নিচে মেরামত করা রহমতের জোরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Verse Stands",
          "bn": "আয়াতটি কোথায় দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "The verse follows 49:9, which faces the hardest case honestly: two parties of believers actually fighting. Even there the Quran calls both sides believers, orders the community to make peace, to fight the aggressing side until it returns to Allah's command, and then to reconcile with justice. 49:10 supplies the ground for all of it: intervention is not interference, because the quarrelling parties are your brothers; a bystander to a family fracture is not neutral, he is negligent.",
            "bn": "আয়াতটি আসে 49:9 আয়াতের পরে, যা সবচেয়ে কঠিন ঘটনাটির মুখোমুখি হয় সততার সঙ্গে: মুমিনদের দুটি দল সত্যিই লড়ছে। সেখানেও কুরআন দুই পক্ষকেই বলে মুমিন, সম্প্রদায়কে নির্দেশ দেয় মীমাংসা করতে, বাড়াবাড়িকারী পক্ষের বিরুদ্ধে লড়তে যতক্ষণ না সে আল্লাহর নির্দেশে ফিরে আসে, তারপর ইনসাফের সঙ্গে মীমাংসা করতে। 49:10 এসবের ভিতটি জোগায়: হস্তক্ষেপ এখানে অনধিকারচর্চা নয়, কারণ বিবাদমান পক্ষরা তোমার ভাই; পরিবারের ভাঙনের সামনে দাঁড়ানো দর্শক নিরপেক্ষ নয়, সে দায়িত্বে অবহেলাকারী।"
          },
          {
            "en": "And immediately after, 49:11-12 ban the small solvents that dissolve brotherhood before any fight begins: mockery, insulting nicknames, suspicion, spying, backbiting — the last pictured as eating a dead brother's flesh. The arrangement is a complete policy: 49:9 treats the open wound, 49:10 states the bond, 49:11-12 remove the slow poisons. The surah legislates for brotherhood the way one maintains anything precious: repair, foundation, and prevention.",
            "bn": "আর ঠিক পরেই 49:11-12 নিষিদ্ধ করে সেই ছোট দ্রাবকগুলো, কোনো লড়াই শুরুর আগেই যা ভ্রাতৃত্বকে গলিয়ে দেয়: উপহাস, আপত্তিকর ডাকনাম, কুধারণা, গোয়েন্দাগিরি, গীবত — শেষটিকে চিত্রিত করা হয়েছে মৃত ভাইয়ের গোশত খাওয়া রূপে। বিন্যাসটি একটি পূর্ণাঙ্গ নীতি: 49:9 খোলা ক্ষতের চিকিৎসা করে, 49:10 বন্ধনটি ঘোষণা করে, 49:11-12 ধীর বিষগুলো সরায়। মূল্যবান যেকোনো জিনিস মানুষ যেভাবে রক্ষণাবেক্ষণ করে, সূরাটি ভ্রাতৃত্বের জন্য সেভাবেই আইন করে: মেরামত, ভিত্তি, আর প্রতিরোধ।"
          }
        ]
      },
      {
        "h": {
          "en": "What Brotherhood Obliges",
          "bn": "ভ্রাতৃত্ব কী দাবি করে"
        },
        "p": [
          {
            "en": "The Prophet ﷺ filled the word with duties. Muslim relates from Abu Hurayrah (RA): do not envy one another, do not inflate prices against one another, do not hate one another, do not turn away from one another, and be, servants of Allah, brothers — the Muslim is the brother of the Muslim; he does not wrong him, nor forsake him, nor despise him. The hadith then points at the chest: taqwa is here. The bond's failures begin as inner states.",
            "bn": "নবী ﷺ শব্দটিকে দায়িত্বে পূর্ণ করেছেন। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন: তোমরা পরস্পরকে হিংসা কোরো না, একে অন্যের বিরুদ্ধে দাম বাড়িয়ে দিয়ো না, পরস্পরকে ঘৃণা কোরো না, একে অন্যের দিক থেকে মুখ ফিরিয়ে নিয়ো না — আর হে আল্লাহর বান্দারা, ভাই হয়ে যাও — মুসলিম মুসলিমের ভাই; সে তার প্রতি জুলুম করে না, তাকে অসহায় ফেলে না, তাকে তুচ্ছও করে না। হাদীসটি এরপর বুকের দিকে ইশারা করে: তাকওয়া এখানে। বন্ধনটির ব্যর্থতাগুলো শুরু হয় ভেতরের অবস্থা হিসেবে।"
          },
          {
            "en": "Al-Bukhari relates from Abu Musa (RA): the believer to the believer is like a building, parts of it binding other parts — and the Prophet ﷺ interlaced his fingers. And 3:103 tells the believers to remember the favour: you were enemies, and He joined your hearts, and by His favour you became brothers. Brotherhood is listed among Allah's gifts, not among human achievements — which is why damaging it is treated in the surah with such severity.",
            "bn": "বুখারী আবু মূসা (রাঃ) থেকে বর্ণনা করেন: মুমিন মুমিনের জন্য ইমারতের মতো — যার এক অংশ আরেক অংশকে শক্ত করে ধরে রাখে — আর নবী ﷺ নিজের আঙুলগুলো পরস্পরে প্রবেশ করালেন। আর 3:103 মুমিনদের বলে নিয়ামতটি স্মরণ করতে: তোমরা ছিলে শত্রু, তিনি তোমাদের হৃদয়গুলো জুড়ে দিলেন, আর তাঁর অনুগ্রহে তোমরা ভাই হয়ে গেলে। ভ্রাতৃত্ব তালিকাভুক্ত আল্লাহর দানের মধ্যে, মানুষের অর্জনের মধ্যে নয় — আর এ কারণেই এর ক্ষতিসাধনকে সূরাটিতে এত কঠোরভাবে দেখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Rank of the Peacemaker",
          "bn": "মীমাংসাকারীর মর্যাদা"
        },
        "p": [
          {
            "en": "Because the bond is Allah's gift, mending it ranks startlingly high. Abu Dawud relates from Abu ad-Darda (RA) that the Prophet ﷺ said: shall I not inform you of a degree better than the rank of fasting, prayer and charity? Setting right what is between people — and the corruption of what is between people is the shaver. At-Tirmidhi's narration adds: I do not say it shaves hair, but it shaves the religion.",
            "bn": "বন্ধনটি যেহেতু আল্লাহর দান, তাই তা জোড়া লাগানোর মর্যাদা চমকে দেওয়ার মতো উঁচু। আবু দাউদ আবু দারদা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আমি কি তোমাদের এমন এক স্তরের কথা জানাব না, যা রোযা, নামায ও সদকার মর্যাদার চেয়েও উত্তম? মানুষের পারস্পরিক সম্পর্ক ঠিক করে দেওয়া — আর পারস্পরিক সম্পর্কের বিনাশই হলো মুণ্ডনকারী। তিরমিযীর বর্ণনা যোগ করে: আমি বলছি না তা চুল কামায়, বরং তা দ্বীনকে কামিয়ে ফেলে।"
          },
          {
            "en": "The permissions granted to peacemaking mark its weight too: the one who conveys good and adds good in order to reconcile people is not counted a liar — al-Bukhari relates it from Umm Kulthum bint Uqbah (RA). Exaggeration is forbidden and backbiting is forbidden, yet the strictness of literal reporting is relaxed for this one purpose. The law itself signals that a repaired bond between believers outweighs conventions it would normally never touch.",
            "bn": "মীমাংসার জন্য দেওয়া ছাড়গুলোও এর ওজন চিহ্নিত করে: মানুষের মধ্যে মিলমিশ করাতে যে ভালো কথা পৌঁছে দেয় ও ভালো কথা যোগ করে, সে মিথ্যাবাদী গণ্য হয় না — বুখারী এটি উম্মে কুলসুম বিনতে উকবা (রাঃ) থেকে বর্ণনা করেন। অতিরঞ্জন নিষিদ্ধ, গীবতও নিষিদ্ধ, তবু আক্ষরিক প্রতিবেদনের কঠোরতা শিথিল করা হয়েছে কেবল এই একটি উদ্দেশ্যে। শরীয়ত নিজেই সংকেত দেয়: মুমিনদের মধ্যে জোড়া লাগা একটি বন্ধনের ওজন এমন সব রীতির চেয়ে বেশি, সাধারণত যা সে স্পর্শই করত না।"
          }
        ]
      },
      {
        "h": {
          "en": "That You May Be Shown Mercy",
          "bn": "যাতে তোমাদের প্রতি রহম করা হয়"
        },
        "p": [
          {
            "en": "The closing clauses discipline the peacemaker. Wa-attaqu Allaha: reconciliation is done with taqwa — justly, as 49:9 demanded, without favouring the stronger side, without burying a right to end a quarrel quickly. La'allakum turhamun: that you may be shown mercy. The commentators hear the correspondence: those who labour to restore mercy between servants stand in the path of mercy from their Master. At-Tirmidhi relates the Prophet's ﷺ words: those who show mercy are shown mercy by the Most Merciful; show mercy to those on earth, and the One above the heaven will show mercy to you.",
            "bn": "সমাপ্তির বাক্যগুলো মীমাংসাকারীকে শৃঙ্খলায় আনে। 'ওয়াত্তাকুল্লাহ': মীমাংসা হবে তাকওয়ার সঙ্গে — ইনসাফে, যেমন 49:9 দাবি করেছে — শক্তিশালী পক্ষের প্রতি পক্ষপাত না করে, ঝগড়া দ্রুত মেটাতে কারও হক চাপা না দিয়ে। 'লাআল্লাকুম তুরহামূন' — যাতে তোমাদের প্রতি রহম করা হয়। মুফাসসিরগণ সাদৃশ্যটি শুনতে পান: বান্দাদের মধ্যে রহমত ফিরিয়ে আনতে যারা পরিশ্রম করে, তারা দাঁড়ায় তাদের মালিকের রহমতের পথে। তিরমিযী নবী ﷺ-এর কথাটি বর্ণনা করেন: দয়াশীলদের প্রতি পরম দয়াময় দয়া করেন; যমীনে যারা আছে তাদের প্রতি দয়া করো — আসমানের ওপরে যিনি আছেন তিনি তোমাদের প্রতি দয়া করবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Doing the Verse",
          "bn": "আয়াতটি কাজে করা"
        },
        "p": [
          {
            "en": "The verse assigns work to the third party, which is most of us most of the time. Somewhere in every believer's circle two people are not speaking. The verse's claim is that their quarrel is your file, because both are your brothers; the passive hope that it resolves itself is not among the options offered. The method is modest: carry good words in both directions, host the meeting, absorb a little of the blame if it helps, and keep the justice of 49:9 in view throughout.",
            "bn": "আয়াতটি কাজ বরাদ্দ করে তৃতীয় পক্ষকে — বেশিরভাগ সময় যা আমরা অধিকাংশ মানুষই। প্রতিটি মুমিনের বৃত্তের কোথাও না কোথাও দুজন মানুষ কথা বলছে না। আয়াতের দাবি: তাদের ঝগড়াটি তোমার নথি, কারণ দুজনেই তোমার ভাই; নিজে নিজে মিটে যাবে — এই নিষ্ক্রিয় আশা প্রস্তাবিত বিকল্পগুলোর মধ্যে নেই। পদ্ধতিটি বিনীত: দুই দিকেই ভালো কথা বয়ে নাও, সাক্ষাতের আয়োজন করো, কাজে লাগলে দোষের খানিকটা নিজের কাঁধে নাও, আর পুরোটা সময় 49:9 আয়াতের ইনসাফ চোখের সামনে রাখো।"
          },
          {
            "en": "And for one's own quarrels, the Prophet ﷺ set a deadline: it is not lawful for a Muslim to forsake his brother beyond three nights, the two meeting and each turning away — and the better of them is the one who begins with the salam; al-Bukhari relates it from Abu Ayyub (RA). Brotherhood, the verse's fact, outlives every argument; the greeting that reopens it costs one word, and the better man pays it first.",
            "bn": "আর নিজের ঝগড়ার জন্য নবী ﷺ একটি সময়সীমা বেঁধে দিয়েছেন: কোনো মুসলিমের জন্য বৈধ নয় তিন রাতের বেশি তার ভাইকে বর্জন করা — দুজনের দেখা হয় আর দুজনেই মুখ ফিরিয়ে নেয় — আর তাদের মধ্যে উত্তম সে-ই, যে আগে সালাম দিয়ে শুরু করে; বুখারী এটি আবু আইয়ুব (রাঃ) থেকে বর্ণনা করেন। ভ্রাতৃত্ব — আয়াতের সেই সত্য — প্রতিটি তর্কের চেয়ে দীর্ঘজীবী; যে অভিবাদন তা আবার খুলে দেয় তার দাম একটি শব্দ, আর উত্তম মানুষটিই তা আগে চুকায়।"
          }
        ]
      }
    ]
  },
  "49:11": {
    "sections": [
      {
        "h": {
          "en": "The Surah That Legislates Manners",
          "bn": "যে সূরা আদব শেখায়"
        },
        "p": [
          {
            "en": "Al-Hujurat is short and almost entirely about how believers handle one another. The verse just before, 49:10, states the bond as a fact: the believers are but brothers. This verse comes immediately after and removes what corrodes that bond in company, and 49:12 comes immediately after this one to deal with what happens behind a person's back. The address is ya ayyuha alladhina amanu — the people warned here are believers, not strangers to faith.",
            "bn": "সূরা আল-হুজুরাত ছোট, আর প্রায় পুরোটাই মুমিনরা একে অপরের সাথে কীভাবে চলবে সে বিষয়ে। ঠিক আগের আয়াত 49:10 বন্ধনটিকে একটি বাস্তবতা হিসেবে ঘোষণা করে: মুমিনরা তো পরস্পর ভাই। এই আয়াতটি তার ঠিক পরেই এসে সরিয়ে দেয় সেসব জিনিস, যা মজলিসের মধ্যেই সেই বন্ধনে ক্ষয় ধরায়; আর 49:12 আসে এই আয়াতের ঠিক পরে, মানুষের অনুপস্থিতিতে যা ঘটে তার হিসাব নিতে। সম্বোধনটি 'ইয়া আইয়ুহাল্লাযীনা আমানূ' — এখানে যাদের সতর্ক করা হচ্ছে তারা মুমিন, ঈমানের অচেনা কেউ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Acts, Each Named",
          "bn": "তিনটি কাজ, প্রত্যেকটির নাম ধরে"
        },
        "p": [
          {
            "en": "The verse forbids three things and names each one. Sukhriyah, from la yaskhar, is ridicule: making a person into the joke, whether by word, imitation or a look. Lamz, from la talmizu, is the direct insult — the jab, the sneer, the cutting remark delivered where it lands. Tanabuz bil-alqab is calling people by names that shame them. Between them they cover the joke, the insult and the label, which is most of how contempt actually travels.",
            "bn": "আয়াতটি তিনটি জিনিস নিষেধ করে এবং প্রত্যেকটির নাম ধরে বলে। 'সুখরিয়াহ', এসেছে 'লা ইয়াসখার' থেকে, মানে উপহাস: কথায়, নকল করে বা দৃষ্টি দিয়ে কাউকে হাসির পাত্র বানানো। 'লাময', এসেছে 'লা তালমিযূ' থেকে, মানে সরাসরি অপমান — খোঁচা, বিদ্রূপের ভঙ্গি, ধারালো মন্তব্য, যা যেখানে লাগার সেখানেই লাগে। 'তানাবুয বিল-আলকাব' মানে মানুষকে এমন নামে ডাকা যা তাকে লজ্জা দেয়। এই তিনটি মিলে ঠাট্টা, অপমান ও তকমা — তিনটিকেই ধরে ফেলে, আর অবজ্ঞা মূলত এই তিন পথেই চলাচল করে।"
          },
          {
            "en": "Lamz should not be merged with ghibah. Ghibah is forbidden in the next verse, 49:12, and it is what is said about a person who is not there, pictured as eating the flesh of a dead brother. Lamz belongs to this verse because it happens in the open. Notice also the object: wa la talmizu anfusakum, do not defame yourselves. The commentators read anfusakum as one another, on the ground that the believers are one body, so the insult you throw lands on your own side.",
            "bn": "'লাময'-কে 'গীবত'-এর সাথে মিলিয়ে ফেলা যাবে না। গীবত নিষিদ্ধ হয়েছে পরের আয়াতে, 49:12 আয়াতে, আর তা হলো অনুপস্থিত ব্যক্তি সম্পর্কে যা বলা হয় — যাকে মৃত ভাইয়ের গোশত খাওয়ার সাথে তুলনা করা হয়েছে। 'লাময' এই আয়াতেরই বিষয়, কারণ তা ঘটে সামনাসামনি, প্রকাশ্যে। কর্মপদটিও লক্ষ করুন: 'ওয়া লা তালমিযূ আনফুসাকুম' — তোমরা নিজেদেরকে কটাক্ষ কোরো না। মুফাসসিরগণ 'আনফুসাকুম'-কে 'একে অপরকে' অর্থে পড়েন, এই ভিত্তিতে যে মুমিনরা একই দেহ; ফলে আপনি যে অপমান ছুড়ছেন তা আপনার নিজের দিকেই এসে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Said Twice, for Men and for Women",
          "bn": "দুবার বলা: পুরুষদের ও নারীদের জন্য"
        },
        "p": [
          {
            "en": "The prohibition of ridicule is issued twice. First no qawm is to ridicule another qawm, perhaps they are better than them; then no women are to ridicule other women, perhaps they are better than them. The Quran does not leave the second case to be inferred from the first. Mockery inside a group of women and mockery inside a group of men are named separately, and each is given the same reason, in the same words.",
            "bn": "উপহাসের নিষেধাজ্ঞা দুবার জারি করা হয়েছে। প্রথমে: কোনো 'কাওম' যেন অন্য 'কাওম'-কে উপহাস না করে, হতে পারে তারা তাদের চেয়ে উত্তম; এরপর: নারীরা যেন অন্য নারীদের উপহাস না করে, হতে পারে তারা তাদের চেয়ে উত্তম। কুরআন দ্বিতীয় ক্ষেত্রটিকে প্রথমটি থেকে অনুমান করে নেওয়ার জন্য ছেড়ে দেয়নি। নারীদের মজলিসের উপহাস আর পুরুষদের মজলিসের উপহাস — দুটিকেই আলাদাভাবে নাম ধরে বলা হয়েছে, আর দুটির জন্যই একই কারণ, একই শব্দে দেওয়া হয়েছে।"
          },
          {
            "en": "The reason given is worth weighing. It is not that the person mocked might be offended, but that he might be better — 'asa an yakunu khayran minhum. The scale being used is Allah's, and we cannot read it. Muslim relates from Abu Hurayrah (RA) that the Prophet ﷺ said Allah does not look at your forms and your wealth, but He looks at your hearts and your deeds. Mockery is almost always aimed at exactly what is not being weighed.",
            "bn": "যে কারণটি দেওয়া হয়েছে তা ভেবে দেখার মতো। কারণটি এই নয় যে উপহাসের শিকার ব্যক্তি হয়তো কষ্ট পাবে, বরং এই যে সে হয়তো উত্তম — 'আসা আন ইয়াকূনূ খাইরাম মিনহুম'। এখানে যে মাপকাঠি ব্যবহৃত হচ্ছে তা আল্লাহর, আর আমরা তা পড়তে পারি না। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ তোমাদের আকৃতি ও সম্পদের দিকে তাকান না, বরং তিনি তাকান তোমাদের অন্তর ও আমলের দিকে। উপহাস প্রায় সবসময়ই ঠিক সেই জিনিসকেই লক্ষ্য করে, যা ওজন করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Names of Banu Salamah",
          "bn": "বনু সালামার নামগুলো"
        },
        "p": [
          {
            "en": "Abu Dawud and at-Tirmidhi relate from Abu Jabirah ibn ad-Dahhak that this verse came down about them, the Banu Salamah: when the Prophet ﷺ reached Madinah, a man among them would have two or three names, and if the Prophet ﷺ called him by one they would say he dislikes that name. At-Tirmidhi graded the report hasan sahih. Not every added name is banned, though. Al-Bukhari relates from Sahl ibn Sa'd (RA) that no name was dearer to Ali (RA) than Abu Turab, which the Prophet ﷺ had given him.",
            "bn": "আবু দাউদ ও তিরমিযী আবু জাবীরা ইবনুদ দাহহাক থেকে বর্ণনা করেন যে এই আয়াতটি তাঁদের, অর্থাৎ বনু সালামার ব্যাপারে নাযিল হয়েছিল: নবী ﷺ যখন মদীনায় পৌঁছান, তাঁদের একেকজনের দুই-তিনটি করে নাম ছিল, আর নবী ﷺ কোনো একটি নামে কাউকে ডাকলে লোকেরা বলত, এই নামটি তার অপছন্দ। তিরমিযী বর্ণনাটিকে হাসান সহীহ বলেছেন। তবে বাড়তি প্রতিটি নামই নিষিদ্ধ নয়। ইমাম বুখারী সাহল ইবনে সা'দ (রাঃ) থেকে বর্ণনা করেন যে আলী (রাঃ)-এর কাছে 'আবু তুরাব' নামটির চেয়ে প্রিয় কোনো নাম ছিল না, আর নামটি নবী ﷺ-ই তাঁকে দিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Wretched Is the Name",
          "bn": "কত মন্দ সেই নাম"
        },
        "p": [
          {
            "en": "Then the verdict: bi'sa al-ismu al-fusuqu ba'da al-iman — wretched is the name of disobedience after faith. Commentators read this both as how evil it is that a believer should be labelled with a name of sin, and as how evil it is that a believer should earn for himself the reputation of fisq by doing these things. The verse then ends harder than its subject seems to warrant: whoever does not repent, those are the wrongdoers. A joke has been placed under the heading of zulm.",
            "bn": "এরপর আসে রায়: 'বি'সাল ইসমুল ফুসূকু বা'দাল ঈমান' — ঈমানের পর ফাসিকীর নাম কতই না মন্দ। মুফাসসিরগণ এটিকে দুভাবেই পড়েন: একজন মুমিনকে পাপের নামে তকমা দেওয়া কত মন্দ, এবং একজন মুমিন এসব কাজ করে নিজের জন্য ফাসিকীর দুর্নাম কামিয়ে নেওয়া কত মন্দ। এরপর আয়াতটি এমন কঠিনভাবে শেষ হয় যা বিষয়বস্তু দেখে আশা করা যায় না: যারা তওবা করে না, তারাই যালিম। একটি ঠাট্টাকে যুলমের শিরোনামের নিচে বসিয়ে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Breaks Now",
          "bn": "এখন এটি কোথায় ভাঙে"
        },
        "p": [
          {
            "en": "Most of this now happens in writing, in groups, and with an audience that laughs without typing. The three acts survive intact: the imitation clip is sukhriyah, the cutting reply is lamz, the label that follows a person for years is tanabuz. The verse offers one test that costs nothing to apply. Before the remark goes out, ask whether the person it targets might stand better with Allah than you do — and notice that you have no way of knowing.",
            "bn": "এসবের বেশির ভাগই এখন ঘটে লেখায়, গ্রুপে, আর এমন শ্রোতাদের সামনে যারা না লিখেই হাসে। তিনটি কাজ অবিকল টিকে আছে: নকল করা ক্লিপটি সুখরিয়াহ, ধারালো জবাবটি লাময, আর যে তকমা বছরের পর বছর মানুষের পিছু ছাড়ে না সেটি তানাবুয। আয়াতটি এমন একটি পরীক্ষা দেয় যা প্রয়োগ করতে কিছুই খরচ হয় না। মন্তব্যটি পাঠানোর আগে জিজ্ঞেস করুন, যাকে লক্ষ্য করা হচ্ছে সে আল্লাহর কাছে আপনার চেয়ে উত্তম অবস্থানে আছে কি না — আর লক্ষ করুন, তা জানার কোনো উপায়ই আপনার নেই।"
          }
        ]
      }
    ]
  },
  "49:12-13": {
    "sections": [
      {
        "h": {
          "en": "A Surah of Social Repair",
          "bn": "সামাজিক সংস্কারের সূরা"
        },
        "p": [
          {
            "en": "Surah al-Hujurat is a short manual for a community's life together. It has already commanded verifying news before acting on it in 49:6, reconciling fighting believers in 49:9, and, in 49:11, it has banned mockery, insult and wounding nicknames. Then 49:12 moves indoors. Having cleared the public square of open contempt, the surah pursues contempt into its hiding places: the assumption, the investigation, and the conversation behind a back.",
            "bn": "সূরা আল-হুজুরাত একটি সম্প্রদায়ের যৌথ জীবনের সংক্ষিপ্ত নির্দেশিকা। 49:6-এ সে ইতিমধ্যে আদেশ দিয়েছে খবর যাচাই না করে তার ওপর কাজ না করতে, 49:9-এ লড়াইরত মুমিনদের মীমাংসা করতে, আর 49:11-এ নিষিদ্ধ করেছে উপহাস, গালি ও আঘাত করা ডাকনাম। এরপর 49:12 ঘরের ভেতরে ঢোকে। প্রকাশ্য চত্বর থেকে খোলা অবজ্ঞা সাফ করার পর সূরা অবজ্ঞাকে ধাওয়া করে তার লুকানোর জায়গাগুলোতে: অনুমানে, অনুসন্ধানে, আর পিঠের পেছনের আলাপে।"
          },
          {
            "en": "The order is diagnostic. Backbiting is rarely the first sin; it is fed by spying, and spying is fed by suspicion. So the verse cuts the chain at its first link: ijtanibu kathiran min az-zann — avoid much of assumption, for some assumption is sin. Not all of it: the verse legislates precisely. What is forbidden is the baseless assumption of evil about people whose outward state is sound.",
            "bn": "ক্রমটিই রোগনির্ণয়। গীবত সাধারণত প্রথম গুনাহ নয়; তাকে খাওয়ায় গোয়েন্দাগিরি, আর গোয়েন্দাগিরিকে খাওয়ায় সন্দেহ। তাই আয়াত শিকলটি কাটে তার প্রথম কড়িতে: ইজতানিবু কাসীরাম মিনায যান্ন — অনুমানের অনেকটুকু বর্জন করো, কারণ কিছু অনুমান গুনাহ। সবটুকু নয়: আয়াত সূক্ষ্মভাবে বিধান দেয়। নিষিদ্ধ হলো তাদের সম্পর্কে ভিত্তিহীন মন্দ ধারণা, যাদের বাহ্যিক অবস্থা নির্দোষ।"
          }
        ]
      },
      {
        "h": {
          "en": "Suspicion and Spying",
          "bn": "সন্দেহ ও গোয়েন্দাগিরি"
        },
        "p": [
          {
            "en": "Wa la tajassasu — and do not spy. Suspicion left alive goes looking for evidence; tajassus is suspicion with a search warrant it wrote for itself. The command protects the cover Allah Himself has left over people's faults. The commentators note that the community is instructed to deal with what people show, and to leave what they conceal to their Lord — the opposite of a culture of surveillance, exposure, and files kept on neighbours.",
            "bn": "ওয়া লা তাজাসসাসু — আর গোপন দোষ খুঁজে বেড়িয়ো না। সন্দেহকে বাঁচিয়ে রাখলে সে প্রমাণ খুঁজতে বের হয়; তাজাসসুস হলো সেই সন্দেহ, যে নিজের জন্য নিজেই তল্লাশি-পরোয়ানা লিখে নিয়েছে। এই নিষেধ রক্ষা করে সেই আবরণ, যা আল্লাহ নিজেই মানুষের দোষের ওপর রেখে দিয়েছেন। মুফাসসিরগণ লক্ষ করেন, সম্প্রদায়কে বলা হয়েছে মানুষ যা প্রকাশ করে তা নিয়েই চলতে, আর যা তারা গোপন রাখে তা তাদের রবের হাতে ছেড়ে দিতে — নজরদারি, ফাঁস করা আর প্রতিবেশীর নামে নথি জমানোর সংস্কৃতির ঠিক উল্টো।"
          },
          {
            "en": "The three sins also share one convenience: each is committed in the target's absence. The suspected, the spied-upon and the backbitten cannot answer, because they are not there. That is exactly what the verse's famous image will seize on — and it is why these sins feel so cheap to commit. No confrontation, no risk, no reply. The surah that banned insulting a believer to his face now bans the coward's versions of the same contempt.",
            "bn": "তিনটি গুনাহের একটি সাধারণ সুবিধাও আছে: প্রতিটিই ঘটে লক্ষ্যবস্তুর অনুপস্থিতিতে। যাকে সন্দেহ করা হয়, যার ওপর নজরদারি চলে, যার গীবত হয় — কেউই জবাব দিতে পারে না, কারণ তারা সেখানে নেই। আয়াতের বিখ্যাত চিত্রটি ঠিক এখানটাই ধরবে — আর এ কারণেই এই গুনাহগুলো করা এত সস্তা মনে হয়। কোনো মুখোমুখি নয়, কোনো ঝুঁকি নেই, কোনো জবাব নেই। যে সূরা মুমিনকে মুখের ওপর অপমান করা নিষিদ্ধ করেছে, সে এখন নিষিদ্ধ করছে একই অবজ্ঞার কাপুরুষী সংস্করণগুলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Flesh of a Dead Brother",
          "bn": "মৃত ভাইয়ের মাংস"
        },
        "p": [
          {
            "en": "Would one of you love to eat the flesh of his dead brother? You would detest it. The Prophet ﷺ defined the sin in the hadith Muslim relates: mentioning your brother with what he dislikes; if what you say is true, you have backbitten him, and if it is false, you have slandered him. The definition removes the standard excuse before it is offered — but it is true is precisely what makes it ghibah.",
            "bn": "তোমাদের কেউ কি তার মৃত ভাইয়ের মাংস খেতে পছন্দ করবে? তোমরা তো তা ঘৃণাই করো। নবী ﷺ গুনাহটির সংজ্ঞা দিয়েছেন মুসলিমের বর্ণিত হাদীসে: তোমার ভাইয়ের এমন উল্লেখ, যা সে অপছন্দ করে; তুমি যা বলছ তা সত্য হলে তুমি তার গীবত করলে, আর মিথ্যা হলে তার ওপর অপবাদ দিলে। এই সংজ্ঞা প্রচলিত অজুহাতটিকে পেশ হওয়ার আগেই সরিয়ে দেয় — 'কিন্তু কথাটা তো সত্যি' — ঠিক সেটিই একে গীবত বানায়।"
          },
          {
            "en": "The image works because it is exact. The absent person is like the dead: unable to defend himself. His honour is his flesh; the gossip session is a meal, shared and even enjoyed. The verse makes the ugliness of a normalised habit suddenly visible, then adds fa-karihtumuh — you already detest it. The moral sense needed is present in every hearer; the verse only connects it to the act it had excused.",
            "bn": "চিত্রটি কাজ করে কারণ তা নিখুঁত। অনুপস্থিত মানুষটি মৃতের মতো: আত্মরক্ষায় অক্ষম। তার সম্মানই তার মাংস; আড্ডার গীবত-আসরটি এক ভোজ — ভাগ করে খাওয়া, এমনকি উপভোগ করা। আয়াতটি এক স্বাভাবিক-হয়ে-যাওয়া অভ্যাসের কদর্যতাকে হঠাৎ দৃশ্যমান করে দেয়, তারপর যোগ করে: ফা-কারিহতুমুহ — তোমরা তো তা ঘৃণাই করো। প্রয়োজনীয় নৈতিক বোধ প্রত্যেক শ্রোতার মধ্যেই আছে; আয়াত কেবল সেটিকে জুড়ে দেয় সেই কাজের সঙ্গে, যাকে সে এতদিন ছাড় দিয়ে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Origin, Many Peoples",
          "bn": "এক উৎস, বহু জাতি"
        },
        "p": [
          {
            "en": "49:13 widens the address from the believers to everyone: ya ayyuhan-nas, O mankind. We created you from one male and one female — every claimed superiority of blood collapses at the shared parents — and made you peoples and tribes li-ta'arafu, that you may know one another. Difference exists for acquaintance, not for ranking. Nation and tribe are given the status of a name and an address: useful for meeting, useless for boasting.",
            "bn": "49:13 সম্বোধনকে মুমিনদের থেকে সবার দিকে প্রশস্ত করে: ইয়া আইয়ুহান নাস — হে মানবজাতি। আমি তোমাদের সৃষ্টি করেছি এক পুরুষ ও এক নারী থেকে — রক্তের প্রতিটি দাবি করা শ্রেষ্ঠত্ব অভিন্ন পিতামাতার কাছে এসে ধসে পড়ে — আর তোমাদের করেছি বিভিন্ন জাতি ও গোত্র, লি-তাআরাফু — যেন তোমরা পরস্পরকে চেনো। ভিন্নতার অস্তিত্ব পরিচয়ের জন্য, ক্রমতালিকার জন্য নয়। জাতি ও গোত্রকে দেওয়া হয়েছে নাম ও ঠিকানার মর্যাদা: সাক্ষাতের জন্য দরকারি, বড়াইয়ের জন্য অকেজো।"
          },
          {
            "en": "Then the verse relocates nobility entirely: the most noble of you with Allah is the most God-conscious of you. And since the verse ends inna Allaha alimun khabir — He is Knowing, Acquainted — the new ranking is unmeasurable by us. Taqwa sits in hearts only He reads. The verse thus abolishes not just racism but the whole project of publicly ranking souls; the true league table exists, and no human being holds a copy.",
            "bn": "এরপর আয়াত মর্যাদার ঠিকানাই বদলে দেয়: আল্লাহর কাছে তোমাদের মধ্যে সবচেয়ে সম্মানিত সে-ই, যে সবচেয়ে বেশি তাকওয়াবান। আর আয়াত যেহেতু শেষ হয় ইন্নাল্লাহা আলীমুন খাবীর দিয়ে — তিনি সর্বজ্ঞ, সম্যক অবগত — নতুন এই ক্রমতালিকা আমাদের পক্ষে মাপা অসম্ভব। তাকওয়া থাকে হৃদয়ে, যা কেবল তিনিই পড়েন। ফলে আয়াতটি শুধু বর্ণবাদ নয়, প্রকাশ্যে আত্মাদের র‍্যাংকিং করার গোটা প্রকল্পটিই বাতিল করে দেয়; প্রকৃত মেধাতালিকা আছে ঠিকই — কিন্তু তার কপি কোনো মানুষের হাতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Farewell Declaration",
          "bn": "বিদায়ের ঘোষণা"
        },
        "p": [
          {
            "en": "The Prophet ﷺ preached this verse's content to the largest audience of his life. In the sermon of the farewell pilgrimage days he ﷺ declared, as Ahmad relates with a sound chain: no Arab has superiority over a non-Arab, nor a non-Arab over an Arab, nor red — the light-skinned — over black, nor black over red, except by taqwa. The verse and the sermon together close the door that lineage-pride, the boast of jahiliyyah, keeps trying to reopen.",
            "bn": "নবী ﷺ এই আয়াতের বক্তব্য প্রচার করেছেন তাঁর জীবনের বৃহত্তম শ্রোতৃমণ্ডলীর সামনে। বিদায় হজের দিনগুলোর ভাষণে তিনি ﷺ ঘোষণা করেন — ইমাম আহমাদ সহীহ সনদে বর্ণনা করেছেন: কোনো আরবের শ্রেষ্ঠত্ব নেই অনারবের ওপর, অনারবেরও নেই আরবের ওপর; লাল (ফর্সা) বর্ণের নেই কালোর ওপর, কালোরও নেই লালের ওপর — তাকওয়া ছাড়া। আয়াত ও ভাষণ মিলে সেই দরজাটি বন্ধ করে দেয়, যা বংশ-অহংকার — জাহিলিয়াতের বড়াই — বারবার খুলতে চায়।"
          },
          {
            "en": "Living the two verses means policing one small organ and one large instinct. The tongue: no relaying of the absent one's faults, and 104:1 pronounces woe upon every habitual slanderer and fault-hunter. The instinct: the quiet conviction that our people are inherently better. Both verses converge on the same discipline — treat the concealed as Allah's business and the different as a person to know, and judge no one's rank, including your own.",
            "bn": "আয়াত দুটি নিয়ে বাঁচা মানে একটি ছোট অঙ্গ আর একটি বড় প্রবৃত্তিকে পাহারায় রাখা। জিভ: অনুপস্থিত মানুষের দোষ আর বয়ে বেড়ানো নয় — 104:1 ধ্বংস ঘোষণা করে প্রত্যেক অভ্যাসগত নিন্দুক ও ছিদ্রান্বেষীর ওপর। প্রবৃত্তি: এই নীরব প্রত্যয় যে আমাদের লোকেরাই জন্মগতভাবে ভালো। দুটি আয়াতই এক অভিন্ন অনুশীলনে মেলে — গোপন বিষয়কে আল্লাহর এখতিয়ার মানুন, ভিন্ন মানুষকে চেনার মতো একজন মানুষ ভাবুন, আর কারও মর্যাদার রায় দেবেন না — নিজেরটারও নয়।"
          }
        ]
      }
    ]
  }
});
