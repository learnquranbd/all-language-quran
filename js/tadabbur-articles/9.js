/**
 * Tadabbur long-form articles — surah 9.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "9:5": {
    "sections": [
      {
        "h": {
          "en": "The Passage, Not the Line",
          "bn": "এক লাইন নয়, গোটা অংশ"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse sits inside a single declaration that begins at 9:1. That verse announces a dissociation from Allah and His Messenger ﷺ to those of the idolaters with whom a treaty had been made. 9:2 gives them four months to travel the land freely. 9:3 has the announcement made to the people on the day of the greater pilgrimage, and it includes an offer: so if you repent, that is best for you. Only after all of that does our verse name what follows the four months.",
            "bn": "সূরা তাওবা মাদানী। এ আয়াত একটিমাত্র ঘোষণার অংশ, যার শুরু ৯:১ আয়াতে। সেখানে যেসব মুশরিকের সঙ্গে চুক্তি হয়েছিল, তাদের জানিয়ে দেওয়া হয়: আল্লাহ ও তাঁর রাসূল ﷺ তাদের দায় থেকে মুক্ত। ৯:২ আয়াত তাদের চার মাস সময় দেয়, এ সময় তারা দেশে স্বাধীনভাবে চলাফেরা করতে পারবে। ৯:৩ আয়াতে বড় হজের দিন মানুষের সামনে ঘোষণাটি দেওয়া হয়, আর তাতে একটি প্রস্তাবও থাকে: তোমরা যদি তওবা কর, তবে সেটাই তোমাদের জন্য ভালো। এত কিছুর পরে গিয়ে আমাদের আয়াত বলে, চার মাস শেষ হলে কী হবে।"
          },
          {
            "en": "And the verse immediately before ours is the one most often left out. 9:4 excepts those of the idolaters who had a treaty and had not been deficient toward the Muslims in anything nor supported anyone against them: complete for them their treaty until their term has ended, indeed Allah loves those who fear Him. So before the command comes, a whole category has already been removed from it by name, and the removal is sealed with a statement about what Allah loves.",
            "bn": "আর আমাদের আয়াতের ঠিক আগের আয়াতটিই সবচেয়ে বেশি বাদ পড়ে যায়। ৯:৪ আয়াত মুশরিকদের মধ্যে তাদের আলাদা করে রাখে, যাদের সঙ্গে চুক্তি ছিল, যারা মুসলিমদের ব্যাপারে কোনো কিছুতে ত্রুটি করেনি এবং তাদের বিরুদ্ধে কাউকে সাহায্যও করেনি: তাদের সঙ্গে চুক্তি তার মেয়াদ শেষ হওয়া পর্যন্ত পূর্ণ কর, নিশ্চয়ই আল্লাহ মুত্তাকীদের ভালোবাসেন। অর্থাৎ হুকুম আসার আগেই আয়াতটি একটি গোটা দলকে নাম ধরে তার বাইরে রেখে দিয়েছে, আর সেই ছাড়ে মোহর মেরেছে আল্লাহ কী ভালোবাসেন সে কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Command Names",
          "bn": "হুকুম কাদের নাম নেয়"
        },
        "p": [
          {
            "en": "At-Tabari is explicit about who is left once 9:4 has done its work, and his sentence is the most important one in this article. The meaning, he writes, is: when the three sacred months have passed, concerning those who have no covenant, or those who had a covenant and then broke it by backing the enemies against the Messenger of Allah ﷺ and his companions, or those whose covenant ran to no stated term. Three descriptions, each of them about conduct, and a treaty kept is in none of them.",
            "bn": "৯:৪ আয়াত যাদের বাদ দিল, তারপর কারা বাকি থাকে, তাবারী তা স্পষ্ট করে বলেছেন; আর এ লেখায় তাঁর এ বাক্যটিই সবচেয়ে গুরুত্বপূর্ণ। তিনি লেখেন, অর্থ হলো: তিনটি হারাম মাস পার হয়ে গেলে, তাদের ব্যাপারে, যাদের কোনো চুক্তি নেই; অথবা যাদের চুক্তি ছিল, কিন্তু রাসূলুল্লাহ ﷺ ও তাঁর সাহাবীদের বিরুদ্ধে শত্রুদের মদদ দিয়ে তারা তা ভেঙেছে; অথবা যাদের চুক্তির কোনো মেয়াদ ঠিক করা ছিল না। তিনটি বর্ণনাই আচরণ নিয়ে, আর রক্ষা করা চুক্তির কথা এর কোনোটিতেই নেই।"
          },
          {
            "en": "As-Sa'di reads the opening clause the same way and adds the term. The sacred months here, he says, are the months in which fighting the treatied idolaters was forbidden, the four months of safe passage, and the completion of the term for whoever had a term longer than those. Ibn Kathir names the chain on that point: Mujahid, Amr ibn Shu'ayb, Muhammad ibn Ishaq, Qatadah, as-Suddi and Abd ar-Rahman ibn Zayd ibn Aslam all read the months of this verse as the grace period of 9:2.",
            "bn": "সা'দীও আয়াতের শুরুর অংশটি এভাবেই বোঝেন, আর সঙ্গে মেয়াদের কথাটা যোগ করেন। তিনি বলেন, এখানে হারাম মাস মানে সেই মাসগুলো, যখন চুক্তিবদ্ধ মুশরিকদের সঙ্গে লড়াই নিষিদ্ধ ছিল: নিরাপদে চলাফেরার চার মাস, আর যার চুক্তির মেয়াদ এর চেয়ে লম্বা, তার সেই মেয়াদ পূর্ণ হওয়া। এ বিষয়ে কারা এ মত দিয়েছেন, ইবনু কাসীর নাম ধরে বলেছেন: মুজাহিদ, আমর ইবনু শুআইব, মুহাম্মাদ ইবনু ইসহাক, কাতাদা, সুদ্দী ও আবদুর রহমান ইবনু যায়দ ইবনু আসলাম। তাঁরা সবাই এ আয়াতের মাসগুলোকে ৯:২ আয়াতের সেই অবকাশ বলেই ধরেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Commands, Then a Fifth",
          "bn": "চারটি হুকুম, তারপর পঞ্চমটি"
        },
        "p": [
          {
            "en": "The Arabic carries five imperatives and the fifth undoes the other four. Kill, capture, besiege, sit in wait at every place of watch; then, if they repent and establish the prayer and give the zakah, let them go on their way. At-Tabari glosses the middle three: khudhuhum is take them captive, uhsuruhum is prevent them from moving in the lands of Islam and from entering Makkah, and marsad, from rasada, to watch, means every road and lookout.",
            "bn": "আরবিতে এখানে পাঁচটি আদেশ, আর পঞ্চমটি এসে বাকি চারটিকে উঠিয়ে নেয়। হত্যা কর, পাকড়াও কর, অবরোধ কর, প্রতিটি ঘাঁটিতে ওত পেতে থাক; তারপর তারা যদি তওবা করে, নামাজ কায়েম করে আর যাকাত দেয়, তবে তাদের পথ ছেড়ে দাও। মাঝের তিনটির ব্যাখ্যা তাবারী এভাবে দেন: খুযূহুম মানে তাদের বন্দী কর; উহসুরূহুম মানে ইসলামের এলাকায় তাদের চলাফেরা আর মক্কায় ঢোকা বন্ধ কর; আর মারসাদ শব্দটি এসেছে রাসাদা থেকে, যার অর্থ নজর রাখা, তাই মারসাদ মানে প্রতিটি রাস্তা আর পাহারার জায়গা।"
          },
          {
            "en": "The opening verb is worth a moment too. Insalakha is used of a period coming to its end, and at-Tabari takes it to its root: from salakh, the stripping of a hide, so that a sheep stripped of its skin is maslukhah. A term does not merely lapse in this word; it is peeled away. He also settles a small question: the sacred months named are Dhu'l-Qa'dah, Dhu'l-Hijjah and Muharram, and what is intended here is the passing of Muharram, the three being named together because they run on from one another.",
            "bn": "শুরুর ক্রিয়াটি নিয়েও একটু থামা দরকার। কোনো সময় শেষ হয়ে এলে আরবিতে ইনসালাখা বলা হয়। তাবারী শব্দটিকে নিয়ে যান তার মূলে: সালখ মানে চামড়া ছাড়ানো, তাই চামড়া ছাড়ানো ভেড়াকে বলে মাসলূখা। এ শব্দে সময় শুধু ফুরিয়ে যায় না, চামড়ার মতো ছাড়িয়ে নেওয়া হয়। তিনি একটি ছোট প্রশ্নেরও মীমাংসা করেন: এখানে যে হারাম মাসগুলোর কথা, সেগুলো জিলকদ, জিলহজ আর মুহাররম, আর উদ্দেশ্য হলো মুহাররম শেষ হওয়া; তিনটির নাম একসঙ্গে এসেছে, কারণ মাসগুলো পরপর আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Difference About the Haram",
          "bn": "হারাম এলাকা নিয়ে মতভেদ"
        },
        "p": [
          {
            "en": "Wherever you find them is read two ways and the difference is real. At-Tabari takes it at its widest: wherever you meet them of the land, inside the Haram and outside it, in the sacred months and outside them. Ibn Kathir reads the same clause as meaning the earth in general except for the Sacred Area, and gives his reason from another verse, 2:191, which forbids fighting them at al-Masjid al-Haram unless they fight you there, and then permits it.",
            "bn": "যেখানে তাদের পাও, এ কথাটি দুভাবে বোঝা হয়েছে, আর মতভেদটি সত্যিকারের। তাবারী এর সবচেয়ে ব্যাপক অর্থ নেন: দেশের যেখানেই তাদের পাও, হারামের ভেতরে হোক বা বাইরে, হারাম মাসে হোক বা অন্য সময়ে। ইবনু কাসীর একই কথার অর্থ করেন সাধারণভাবে গোটা পৃথিবী, তবে হারাম এলাকা বাদে। এর কারণ তিনি দেখান আরেকটি আয়াত থেকে, ২:১৯১: সে আয়াত মাসজিদুল হারামের কাছে তাদের সঙ্গে লড়তে নিষেধ করে, যদি না তারা সেখানে তোমাদের সঙ্গে লড়ে; তারা লড়লে তখন অনুমতি দেয়।"
          },
          {
            "en": "Neither man is being careless; they are weighing this verse against a different one, and the difference is worth stating as a difference rather than resolving it here. What both agree on is that the clause is about where a fight may be pressed once it is lawful, not about who may be fought, since that had already been settled two verses earlier. A reader who takes the clause as an instruction to look for people has read it without at-Tabari's sentence about who is meant.",
            "bn": "দুজনের কেউই অসাবধানে কথা বলেননি; তাঁরা এ আয়াতকে আরেকটি আয়াতের সঙ্গে মিলিয়ে দেখছেন। মতভেদটি এখানে মীমাংসা না করে মতভেদ হিসেবেই বলে রাখা ভালো। দুজনেই একমত যে কথাটি লড়াই বৈধ হওয়ার পরে তা কোথায় চালানো যাবে সে বিষয়ে; কার সঙ্গে লড়া যাবে সে বিষয়ে নয়, কারণ সে ফয়সালা দুই আয়াত আগেই হয়ে গেছে। কথাটিকে যিনি মানুষ খুঁজে বেড়ানোর হুকুম বলে ধরেন, তিনি এখানে কাদের কথা বলা হচ্ছে, সে বিষয়ে তাবারীর বাক্যটি না জেনেই পড়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Clause That Ends It",
          "bn": "যে কথাটি সব থামিয়ে দেয়"
        },
        "p": [
          {
            "en": "The condition for release is not surrender and not tribute. At-Tabari spells out each part: they repent, meaning they return from the shirk and the denial of the prophethood of Muhammad ﷺ to the oneness of Allah and sincerity of worship; they establish the prayer, meaning they perform what Allah obliged within its limits; they give the zakah that Allah made obligatory in their wealth to those entitled to it. Then let them go on their way.",
            "bn": "ছেড়ে দেওয়ার শর্ত আত্মসমর্পণ নয়, করও নয়। তাবারী প্রতিটি অংশ খুলে বলেছেন: তারা তওবা করে, অর্থাৎ শিরক আর মুহাম্মাদের ﷺ নবুওয়াত অস্বীকার করা ছেড়ে আল্লাহর একত্ব আর খাঁটি ইবাদতের দিকে ফিরে আসে; তারা নামাজ কায়েম করে, অর্থাৎ আল্লাহ যা ফরজ করেছেন তা তার নিয়ম মেনে আদায় করে; আর আল্লাহ তাদের সম্পদে যে যাকাত ফরজ করেছেন, তা হকদারদের দেয়। তখন তাদের পথ ছেড়ে দাও।"
          },
          {
            "en": "As-Sa'di states what the release actually means, and it is more than a ceasefire: leave them, and let them be like you, they have what you have and upon them is what is upon you. The same equality returns six verses later at 9:11, where the identical condition is met with the words then they are your brothers in religion. As-Sa'di also notes, with Ibn Kathir, that Abu Bakr as-Siddiq (RA) used this verse among his proofs on the question of those who withheld the zakah, which is a matter of fiqh belonging to that history and to those who ruled on it.",
            "bn": "ছেড়ে দেওয়ার আসল মানে কী, সা'দী তা বলে দেন, আর সেটা যুদ্ধবিরতির চেয়ে বেশি: তাদের ছেড়ে দাও, তারা তোমাদেরই মতো হয়ে যাক; তোমাদের যা প্রাপ্য, তাদেরও তা প্রাপ্য, তোমাদের উপর যে দায়, তাদের উপরও সেই দায়। এই সমতা ছয় আয়াত পরে ৯:১১ আয়াতে আবার আসে; সেখানে একই শর্ত পূরণ হলে বলা হয়: তবে তারা তোমাদের দীনী ভাই। সা'দী ও ইবনু কাসীর দুজনেই উল্লেখ করেছেন, যারা যাকাত দিতে অস্বীকার করেছিল তাদের প্রশ্নে আবূ বাকর সিদ্দীক (রাঃ) যেসব দলিল দিয়েছিলেন, এ আয়াত তার একটি। তবে সেটি ফিকহের বিষয়; তা ওই ইতিহাসের, আর যাঁরা তখন ফয়সালা দিয়েছিলেন তাঁদের।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Next Verse Orders",
          "bn": "পরের আয়াতের হুকুম"
        },
        "p": [
          {
            "en": "The verse after the command is the one that shows what kind of command it was. 9:6 says that if any one of the idolaters seeks your protection, grant him protection so that he may hear the words of Allah, then deliver him to his place of safety, and it gives the reason: because they are a people who do not know. So in the middle of a declaration of hostilities, an individual who asks is to be given safe conduct, a hearing, and an escort home.",
            "bn": "হুকুমটা কেমন ছিল, তা বোঝা যায় ঠিক পরের আয়াত থেকে। ৯:৬ আয়াত বলে, মুশরিকদের কেউ যদি তোমার কাছে আশ্রয় চায়, তাকে আশ্রয় দাও, যাতে সে আল্লাহর কালাম শুনতে পায়; তারপর তাকে তার নিরাপদ জায়গায় পৌঁছে দাও। কারণও বলে দেয়: তারা এমন লোক, যারা জানে না। অর্থাৎ যুদ্ধ ঘোষণার মাঝখানেও কেউ এসে চাইলে তাকে দিতে হবে নিরাপত্তা, কথা শোনার সুযোগ, আর সঙ্গে লোক দিয়ে ঘরে পৌঁছে দেওয়া।"
          },
          {
            "en": "9:7 closes the frame from the other side, asking how the idolaters could have a treaty in the sight of Allah and with His Messenger ﷺ, then excepting those with whom a treaty was made at al-Masjid al-Haram, and ruling: so as long as they are upright toward you, be upright toward them, indeed Allah loves those who fear Him. The passage thus ends where 9:4 began. A line taken from between them, with both ends cut off, is made to say the opposite of what the ends say.",
            "bn": "অন্য প্রান্তটি বেঁধে দেয় ৯:৭ আয়াত। সে প্রশ্ন করে, আল্লাহ ও তাঁর রাসূলের ﷺ কাছে মুশরিকদের চুক্তি টেকে কীভাবে? তারপর মাসজিদুল হারামের কাছে যাদের সঙ্গে চুক্তি হয়েছিল, তাদের আলাদা করে রেখে বিধান দেয়: যতক্ষণ তারা তোমাদের সঙ্গে ঠিক থাকে, তোমরাও তাদের সঙ্গে ঠিক থাক; নিশ্চয়ই আল্লাহ মুত্তাকীদের ভালোবাসেন। অর্থাৎ ৯:৪ আয়াত যে কথা দিয়ে শুরু করেছিল, অংশটি শেষও হয় সেই কথায়। মাঝখান থেকে একটি লাইন তুলে এনে দুই মাথা কেটে ফেললে, তাকে দিয়ে বলানো হয় ঠিক সেই কথার উল্টো, যা ওই দুই মাথা বলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Does Not License",
          "bn": "এ আয়াত যার অনুমতি দেয় না"
        },
        "p": [
          {
            "en": "This has to be said plainly. The verse belongs to one declaration, made once, against named categories of people who had either no treaty or a treaty they had broken by joining an attack, in one peninsula, announced publicly with four months' notice. The commentators consulted here are the ones who put those limits on it: at-Tabari by naming who is meant, as-Sa'di by preserving the longer terms, Ibn Kathir by tying the months to the notice period. None of them hands it forward to any later reader as a general permission.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটিমাত্র ঘোষণার অংশ, যা দেওয়া হয়েছিল একবারই, একটি উপদ্বীপে, প্রকাশ্যে, চার মাস আগে জানিয়ে দিয়ে। আর তা ছিল নাম ধরে বলা কয়েকটি শ্রেণির লোকদের বিরুদ্ধে: যাদের কোনো চুক্তিই ছিল না, অথবা চুক্তি থাকলেও যারা হামলায় যোগ দিয়ে তা ভেঙেছিল। এখানে যেসব মুফাসসিরের কথা নেওয়া হয়েছে, এ সীমাগুলো তাঁরাই টেনেছেন: তাবারী কাদের কথা বলা হচ্ছে তা নির্দিষ্ট করে, সা'দী লম্বা মেয়াদের চুক্তিগুলো বহাল রেখে, আর ইবনু কাসীর মাসগুলোকে নোটিশের সময়ের সঙ্গে বেঁধে দিয়ে। তাঁদের কেউই এটিকে পরের কোনো পাঠকের হাতে ঢালাও অনুমতি হিসেবে তুলে দেননি।"
          },
          {
            "en": "Matters of war belong to the authority the commentators address, and this article makes no application of the verse to any present situation, group or person. What a reader can take from it is a discipline of reading. This is the verse most often quoted with its neighbours removed, and the removal is what does the work. The habit it should teach is the opposite one: when a line about other people is put in front of you, read what stood on either side of it before you accept what it seems to say.",
            "bn": "যুদ্ধের বিষয় সেই কর্তৃপক্ষের হাতে, মুফাসসিরগণ যাঁদের উদ্দেশে কথা বলেছেন। এ লেখা আয়াতটিকে আজকের কোনো পরিস্থিতি, দল বা ব্যক্তির উপর প্রয়োগ করছে না। পাঠক এখান থেকে যা নিতে পারেন, তা হলো পড়ার একটি নিয়ম। আশপাশের আয়াত বাদ দিয়ে সবচেয়ে বেশি উদ্ধৃত হয় এ আয়াতটিই, আর আসল কাজটা করে ওই বাদ দেওয়াটাই। এ থেকে শিখতে হবে উল্টো অভ্যাস: অন্য মানুষদের নিয়ে কোনো লাইন যখন আপনার সামনে আনা হয়, সেটা যা বলছে বলে মনে হয় তা মেনে নেওয়ার আগে দেখে নিন তার আগে-পরে কী ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer From the Next Verse",
          "bn": "পরের আয়াত থেকে এক দোয়া"
        },
        "p": [
          {
            "en": "The verse itself carries no supplication, and the nearest thing to one in the passage is the purpose 9:6 gives for granting protection: so that he may hear the words of Allah. That is a thing to want for people, and it is what the Quran wants for them in the middle of a declared hostility. 9:3's offer runs the same way, so if you repent, that is best for you, spoken to the very people the declaration was against.",
            "bn": "আয়াতটিতে কোনো দোয়া নেই। এ অংশে দোয়ার সবচেয়ে কাছাকাছি যা আছে, তা হলো আশ্রয় দেওয়ার যে উদ্দেশ্য ৯:৬ আয়াত বলে: যাতে সে আল্লাহর কালাম শুনতে পায়। মানুষের জন্য এটা চাওয়ার মতো জিনিস, আর ঘোষিত শত্রুতার মাঝখানেও কুরআন তাদের জন্য এটাই চায়। ৯:৩ আয়াতের প্রস্তাবও একই সুরে: তোমরা যদি তওবা কর, তবে সেটাই তোমাদের জন্য ভালো। আর কথাটা বলা হচ্ছে ঠিক তাদেরই, যাদের বিরুদ্ধে ঘোষণাটি দেওয়া হয়েছিল।"
          },
          {
            "en": "A sentence in the passage's own vocabulary can be said and claimed as no more than that: O Allah, let those who do not know hear Your words, and do not let me be the reason anybody is kept from hearing them. That is assembled from 9:6 and from 9:3, and it is not a Sunnah du'a. What makes it fit this verse is that the passage names ignorance as the condition of the other side, and treats being given a hearing as the remedy for it.",
            "bn": "এ অংশের নিজের শব্দ দিয়ে একটি বাক্য বলা যায়, তবে এর বেশি কিছু দাবি না করে: হে আল্লাহ, যারা জানে না, তাদের আপনার কালাম শোনার সুযোগ দিন, আর আমাকে এমন কারণ বানাবেন না, যার জন্য কেউ তা শোনা থেকে বঞ্চিত হয়। বাক্যটি ৯:৬ আর ৯:৩ আয়াত থেকে নিয়ে সাজানো; এটি সুন্নাহর দোয়া নয়। এ আয়াতের সঙ্গে এটি মানায়, কারণ অংশটি অপর পক্ষের অবস্থাকে বলে না-জানা, আর তার প্রতিকার হিসেবে ধরে শোনার সুযোগ পাওয়াকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About How You Read",
          "bn": "কীভাবে পড়েন তা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "This is the verse most often handed on without its neighbours. Have I ever accepted a line about somebody's faith or somebody's people without reading what stood on either side of it? The fifth command undoes the other four, so what in my own dealings would stop the moment the other party changed course, and what would carry on out of habit?",
            "bn": "আশপাশের আয়াত ছাড়া সবচেয়ে বেশি হাতে হাতে ঘোরে এ আয়াতটিই। কারও ঈমান বা কারও জাতি নিয়ে কোনো লাইন কি আমি কখনো মেনে নিয়েছি, তার আগে-পরে কী ছিল তা না পড়েই? পঞ্চম হুকুম বাকি চারটিকে উঠিয়ে নেয়। তাহলে আমার নিজের লেনদেনে কোনটা থেমে যেত অন্য পক্ষ পথ বদলানোর সঙ্গে সঙ্গে, আর কোনটা কেবল অভ্যাসের জোরে চলতেই থাকত?"
          },
          {
            "en": "Two more. The next verse orders that a man who asks for protection be given a hearing and then escorted to safety: when somebody on the other side of a quarrel asks me for safe passage, what do I actually do? And the verse of the sword ends on Forgiving and Merciful, so where have I privately decided that a particular person is past the point of being forgiven?",
            "bn": "আরও দুটি। পরের আয়াত হুকুম দেয়, যে আশ্রয় চায় তাকে কথা শোনার সুযোগ দিতে, তারপর নিরাপদ জায়গায় পৌঁছে দিতে: বিবাদের অপর পক্ষের কেউ আমার কাছে নিরাপদে যাওয়ার সুযোগ চাইলে আমি আসলে কী করি? আর তলোয়ারের আয়াত শেষ হয় ক্ষমাশীল, দয়ালু নাম দুটি দিয়ে; তাহলে কোন মানুষটির ব্যাপারে আমি মনে মনে ঠিক করে ফেলেছি যে তার আর মাফ পাওয়ার উপায় নেই?"
          }
        ]
      }
    ]
  },
  "9:11-12": {
    "sections": [
      {
        "h": {
          "en": "Two Doors, One Crowd",
          "bn": "দুই দরজা, একই লোক"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan, and these two verses come at the end of the declaration that opened the surah. 9:8 asks how a treaty could hold with people who observe no tie of kinship and no covenant if they gain the upper hand, who satisfy you with their mouths while their hearts refuse. 9:9 and 9:10 add that they sold the signs of Allah for a small price and observe nothing toward a believer. Then, with those men still in view, 9:11 offers them brotherhood and 9:12 names what would bring fighting instead.",
            "bn": "সূরা তাওবা মাদানী। সূরার শুরুতে যে ঘোষণা, এ দুটি আয়াত তার শেষ অংশে। ৯:৮ আয়াত প্রশ্ন করে, এমন লোকদের সঙ্গে চুক্তি টিকবে কীভাবে, যারা তোমাদের উপর জয়ী হলে আত্মীয়তার কোনো বন্ধন মানে না, কোনো অঙ্গীকারও মানে না; যারা মুখের কথায় তোমাদের খুশি রাখে, অথচ তাদের অন্তর তা মানে না। ৯:৯ আর ৯:১০ আয়াত যোগ করে, তারা আল্লাহর আয়াত সামান্য দামে বেচে দিয়েছে, আর কোনো মু'মিনের ব্যাপারে কিছুই মানে না। এরপর ওই লোকেরা চোখের সামনে থাকতেই ৯:১১ আয়াত তাদের ভাই হওয়ার প্রস্তাব দেয়, আর ৯:১২ আয়াত জানিয়ে দেয়, কী করলে তার বদলে লড়াই আসবে।"
          },
          {
            "en": "As-Sa'di reads the second of the two as following directly from what preceded: after it was said that the treatied idolaters, if they stay straight on their covenant, are to be met with straightness in fulfilling it, the verse turns to what happens if they break it. So the pair is not a threat followed by an afterthought, nor mercy followed by a correction. They are the two outcomes of one situation, laid side by side, and the same people are standing in front of both.",
            "bn": "সা'দী দ্বিতীয় আয়াতটিকে আগের কথারই সরাসরি ধারাবাহিকতা হিসেবে পড়েন। আগে বলা হয়েছে, চুক্তিবদ্ধ মুশরিকরা অঙ্গীকারে ঠিক থাকলে চুক্তি পালনে তাদের সঙ্গেও ঠিক থাকতে হবে; এরপর আয়াত আসে তারা চুক্তি ভাঙলে কী হবে সে প্রসঙ্গে। তাই এ জোড়া হুমকির পরে জুড়ে দেওয়া বাড়তি কথা নয়, রহমতের পরে দেওয়া সংশোধনও নয়। একই পরিস্থিতির দুটি পরিণাম পাশাপাশি রাখা, আর দুটোর সামনেই দাঁড়িয়ে আছে একই লোকেরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Brothers in Religion",
          "bn": "দীনের ভাই"
        },
        "p": [
          {
            "en": "The condition in 9:11 is the same one 9:5 set, word for word: they repent, they establish the prayer, they give the zakah. What changes is the sentence it earns. There it was let them go on their way; here it is then they are your brothers in religion. Nothing is said about a probation, a lesser status, or a memory of what they had just been doing to the people who are now their brothers. The word is ikhwan, and it is put in the religion rather than in blood.",
            "bn": "৯:১১ আয়াতের শর্ত হুবহু সেটাই, যা ৯:৫ আয়াতে ছিল: তারা তওবা করে, নামাজ কায়েম করে, যাকাত দেয়। বদলায় কেবল শর্ত পূরণের ফল। ওখানে ছিল, তাদের পথ ছেড়ে দাও; এখানে, তবে তারা তোমাদের দীনী ভাই। পরীক্ষার কোনো মেয়াদ নেই, নিচু মর্যাদা নেই; যারা এখন তাদের ভাই, এই সেদিনও তাদের সঙ্গে তারা কী করছিল, সেটা মনে রাখার কথাও নেই। শব্দটি ইখওয়ান, আর এ ভ্রাতৃত্ব রক্তের নয়, দীনের।"
          },
          {
            "en": "The verse then closes on a clause about the reader rather than about them: and We detail the verses for a people who know. The detailing is the thing being offered, and the audience is named by a verb. It suggests that the distinctions this passage draws, between a treaty kept and a treaty broken, between what a man was and what he now does, are only usable by someone willing to learn them in detail rather than in outline.",
            "bn": "এরপর আয়াত শেষ হয় এমন একটি কথায়, যা তাদের নিয়ে নয়, পাঠককে নিয়ে: আর আমি আয়াতগুলো বিশদভাবে বর্ণনা করি সেই লোকদের জন্য, যারা জানে। যা দেওয়া হচ্ছে তা এই বিশদ বর্ণনা, আর শ্রোতাদের চেনানো হচ্ছে একটি ক্রিয়া দিয়ে: যারা জানে। এ থেকে বোঝা যায়, এ অংশ যেসব পার্থক্য টানে, রক্ষা করা চুক্তি আর ভাঙা চুক্তির মধ্যে, একজন মানুষ আগে কী ছিল আর এখন কী করে তার মধ্যে, সেগুলো কাজে লাগাতে পারে কেবল সেই লোক, যে মোটা দাগে নয়, খুঁটিয়ে শিখতে রাজি।"
          }
        ]
      },
      {
        "h": {
          "en": "Untying, and Stabbing",
          "bn": "গিঁট খোলা, আর আঘাত"
        },
        "p": [
          {
            "en": "Both verbs in 9:12 are physical before they are moral. Nakathu is the undoing of something that had been tied, the same root 16:92 uses for the woman who unpicks her yarn into ankathan, loose strands, after spinning it strong, so an oath in this vocabulary is a thing spun tight. And ta'anu is to pierce or to stab; at-Tabari renders the clause as meaning they disparaged your religion Islam, so they reviled it and found fault with it, which is what the image becomes when the target is a religion rather than a body.",
            "bn": "৯:১২ আয়াতের দুটি ক্রিয়াই আগে শরীরের কাজ বোঝায়, তারপর নৈতিক অর্থ পায়। নাকাসূ মানে বাঁধা জিনিস খুলে ফেলা; ১৬:৯২ আয়াতও এই মূল থেকে আনকাসান শব্দ এনে সেই নারীর কথা বলে, যে মজবুত করে পাকানো সুতা খুলে আবার আলগা আঁশ করে ফেলে। অর্থাৎ এ ভাষায় শপথ এমন জিনিস, যা শক্ত করে পাকানো। আর তাআনূ মানে বিদ্ধ করা বা খোঁচা মারা। তাবারী কথাটির অর্থ করেন: তারা তোমাদের দীন ইসলামকে হেয় করেছে, গালি দিয়েছে আর তার দোষ খুঁজেছে। লক্ষ্য যখন দেহ নয়, দীন, তখন ছবিটা এ রূপই নেয়।"
          },
          {
            "en": "Then a'immat al-kufr, the leaders of disbelief, where the word for leaders is the plural of imam, the one walked behind. At-Tabari glosses the following clause simply: the chiefs of disbelief have no covenant. As-Sa'di reads the same words as a verdict on their reliability rather than on their theology, that they have no pacts they keep to, but remain treacherous and breaking, not to be trusted. The purpose clause at the end is the one to hold: so that they may cease.",
            "bn": "এরপর আসে আইম্মাতুল কুফর, কুফরের নেতারা। নেতা অর্থের শব্দটি ইমামের বহুবচন, আর ইমাম মানে যার পেছনে মানুষ চলে। তাবারী পরের কথাটির ব্যাখ্যা দেন সোজা ভাষায়: কুফরের সর্দারদের কোনো অঙ্গীকার নেই। সা'দী একই শব্দগুলোকে তাদের আকীদার উপর রায় হিসেবে পড়েন না, পড়েন তাদের বিশ্বস্ততার উপর রায় হিসেবে: তাদের এমন কোনো চুক্তি নেই যা তারা রক্ষা করে; বরং তারা সব সময় খিয়ানত করে, চুক্তি ভাঙে, তাদের বিশ্বাস করা যায় না। শেষে উদ্দেশ্য বোঝানো কথাটাই মনে রাখার মতো: যাতে তারা থেমে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Leaders",
          "bn": "নেতাদেরই কেন"
        },
        "p": [
          {
            "en": "As-Sa'di explains why the verse names the leaders and not the crowd, and gives three reasons: because of the enormity of their offence, because the others follow them, and to show that whoever attacks the religion and sets himself up to refute it is of the leaders of disbelief. The third reason is a definition rather than a headcount, and it moves the category from rank to activity. Ibn Kathir draws the same line from the verse, that one who curses the Messenger ﷺ or attacks the religion by way of criticism is meant by it.",
            "bn": "আয়াত সাধারণ লোকদের নয়, নেতাদের নাম কেন নেয়, সা'দী তার তিনটি কারণ বলেন: তাদের অপরাধ অনেক বড়; বাকিরা তাদেরই অনুসরণ করে; আর এটা বোঝাতে যে, যে-ই দীনের উপর আঘাত করে আর তা খণ্ডন করতে উঠেপড়ে লাগে, সে-ই কুফরের নেতাদের একজন। তৃতীয় কারণটি মাথা গোনা নয়, একটি সংজ্ঞা; এতে শ্রেণিটি আর পদ দিয়ে ঠিক হয় না, ঠিক হয় কাজ দিয়ে। ইবনু কাসীরও আয়াত থেকে একই সিদ্ধান্ত টানেন: যে রাসূলকে ﷺ গালি দেয়, বা সমালোচনার নামে দীনের উপর আঘাত করে, সে এ আয়াতের আওতায় পড়ে।"
          },
          {
            "en": "As-Sa'di also widens the offence itself: all kinds of attack directed at the religion or at the Quran enter into this. But he keeps the aim where the verse puts it. His gloss on the last words is that they may cease from attacking your religion, and then he adds the possibility the verse does not state and he does not withhold: and perhaps they may even enter it. The end being sought is a mouth closed or a heart changed, not a population reduced.",
            "bn": "সা'দী অপরাধের পরিধিও বাড়িয়ে দেন: দীন বা কুরআনের উপর যে কোনো ধরনের আঘাতই এর মধ্যে পড়ে। তবে লক্ষ্যটা তিনি সেখানেই রাখেন, যেখানে আয়াত রেখেছে। শেষ শব্দগুলোর ব্যাখ্যায় তিনি বলেন: যাতে তারা তোমাদের দীনের উপর আঘাত করা থেকে থেমে যায়। তারপর এমন একটি সম্ভাবনা যোগ করেন, যা আয়াতে বলা নেই, কিন্তু তিনি তা চেপেও যাননি: হয়তো তারা এ দীনে ঢুকেও পড়বে। চাওয়া হচ্ছে একটি মুখ বন্ধ হোক বা একটি অন্তর বদলে যাক, মানুষের সংখ্যা কমে যাক তা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who These Leaders Were",
          "bn": "এ নেতারা কারা ছিল"
        },
        "p": [
          {
            "en": "On the identity of the leaders the commentators differ, and the difference is preserved rather than settled. At-Tabari reports that some said they are Abu Jahl ibn Hisham, Utbah ibn Rabi'ah, Abu Sufyan ibn Harb and their like; Ibn Kathir carries a similar list from Qatadah and others, adding Shaybah and Umayyah ibn Khalaf. Ibn Abbas (RA) is reported as reading them as the people of the covenant among the idolaters, whom He named the leaders of disbelief.",
            "bn": "নেতারা কারা, এ নিয়ে মুফাসসিরদের মতভেদ আছে; এখানে মতভেদটি মীমাংসা না করে যেমন আছে তেমনই রাখা হলো। তাবারী জানান, কেউ কেউ বলেছেন তারা আবূ জাহল ইবনু হিশাম, উতবা ইবনু রাবীআ, আবূ সুফিয়ান ইবনু হারব আর তাদের মতো লোকেরা। ইবনু কাসীর কাতাদা ও অন্যদের থেকে প্রায় একই তালিকা এনেছেন, সঙ্গে যোগ করেছেন শাইবা আর উমাইয়া ইবনু খালাফের নাম। ইবনু আব্বাস (রাঃ) থেকে বর্ণিত, তিনি এদের মনে করতেন মুশরিকদের মধ্যে চুক্তিবদ্ধ লোক, আল্লাহ যাদের নাম দিয়েছেন কুফরের নেতা।"
          },
          {
            "en": "Two remarks from Companions are the reason this section exists. At-Tabari records that Hudhayfah (RA) used to say of this verse that its people had not yet come. Ibn Kathir carries, through al-A'mash from Zayd ibn Wahb from Hudhayfah (RA), the statement that the people of this verse were never fought again, and reports the like from Ali ibn Abi Talib (RA). The two reports are not worded the same and are not merged here. Ibn Kathir then gives his own ruling, that the verse is general even though the occasion of its revelation was specific.",
            "bn": "এ অংশটি লেখার কারণ সাহাবীদের দুটি উক্তি। তাবারী উল্লেখ করেছেন, হুযাইফা (রাঃ) এ আয়াত সম্পর্কে বলতেন, এর লোকেরা এখনো আসেনি। ইবনু কাসীর আ'মাশের সূত্রে, যায়দ ইবনু ওয়াহব থেকে, হুযাইফা (রাঃ) থেকে বর্ণনা করেন যে এ আয়াতের লোকদের সঙ্গে এরপর আর কখনো লড়াই হয়নি; একই ধরনের কথা তিনি আলী ইবনু আবী তালিব (রাঃ) থেকেও জানান। দুটি বর্ণনার শব্দ এক নয়, তাই এখানে সেগুলো মিলিয়ে এক করা হয়নি। এরপর ইবনু কাসীর নিজের মত দেন: আয়াতটি নাজিল হওয়ার উপলক্ষ নির্দিষ্ট হলেও এর হুকুম ব্যাপক।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Ruling Belongs",
          "bn": "বিধানটা কার হাতে"
        },
        "p": [
          {
            "en": "This is a verse of war, and everything the surah has already said about that applies. The command is addressed to a community that had made the treaties in question, published a notice, and excepted by name at 9:4 those who had kept faith; 9:7 had just told them to be upright toward whoever was upright toward them. A ruling of this kind is for those who carry that responsibility, and this article makes no application of it to any present situation, group or person, and none to any individual's judgement about anyone.",
            "bn": "এটি যুদ্ধের আয়াত, আর এ বিষয়ে সূরাটি আগে যা বলেছে, তার সবই এখানে প্রযোজ্য। হুকুমটি দেওয়া হয়েছে এমন এক সমাজকে, যারা সংশ্লিষ্ট চুক্তিগুলো করেছিল, প্রকাশ্যে নোটিশ দিয়েছিল, আর ৯:৪ আয়াতে যারা কথা রেখেছিল তাদের নাম ধরে আলাদা করে রেখেছিল; আর ৯:৭ আয়াত এইমাত্র তাদের বলেছে, যারা তোমাদের সঙ্গে ঠিক থাকে, তোমরাও তাদের সঙ্গে ঠিক থাক। এ ধরনের বিধান তাঁদের জন্য, যাঁদের কাঁধে সেই দায়িত্ব। এ লেখা এটিকে আজকের কোনো পরিস্থিতি, দল বা ব্যক্তির উপর প্রয়োগ করছে না; কারও সম্পর্কে কোনো ব্যক্তির নিজস্ব বিচারের ক্ষেত্রেও নয়।"
          },
          {
            "en": "What the passage does put in a reader's hands is the shape of its own reasoning. Both doors are opened by conduct: three acts open the first, two acts open the second, and neither is opened by ancestry or by name. The aim of the harder door is stated in the verse itself, that they may cease. And the softer door is opened all the way, to brotherhood, with no waiting period attached to men who had been described a verse earlier as keeping no covenant toward a believer at all.",
            "bn": "পাঠকের হাতে অংশটি যা তুলে দেয়, তা হলো তার নিজের যুক্তির ধরন। দুটি দরজাই খোলে আচরণে: প্রথমটি খোলে তিনটি কাজে, দ্বিতীয়টি দুটি কাজে; বংশ বা নাম দিয়ে কোনোটিই খোলে না। কঠিন দরজার লক্ষ্য আয়াত নিজেই বলে দেয়: যাতে তারা থেমে যায়। আর সহজ দরজাটি খোলে পুরোপুরি, ভাই হওয়া পর্যন্ত, কোনো অপেক্ষার মেয়াদ ছাড়াই; অথচ ঠিক এক আয়াত আগে এদেরই বলা হয়েছিল এমন লোক, যারা কোনো মু'মিনের ব্যাপারে কোনো অঙ্গীকারই মানে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Either Side",
          "bn": "দুপাশের আয়াত"
        },
        "p": [
          {
            "en": "9:5 sets the identical three conditions and answers them with release rather than brotherhood, so the pair shows the same door opening wider as the surah goes on. 9:7 supplies the rule these two verses hang from, be upright toward them as long as they are upright toward you. 9:8 and 9:10 give the description that makes 9:11's offer startling, men who observe no tie and no covenant toward a believer.",
            "bn": "৯:৫ আয়াত হুবহু এই তিনটি শর্তই রাখে, তবে তার ফল দেয় ছেড়ে দেওয়া, ভাই বানানো নয়। তাই দুটি আয়াত মিলিয়ে দেখলে বোঝা যায়, সূরা যত এগোয়, একই দরজা তত বেশি খুলে যায়। এ দুটি আয়াত যে নিয়মের উপর দাঁড়িয়ে, তা দেয় ৯:৭ আয়াত: তারা যতক্ষণ তোমাদের সঙ্গে ঠিক থাকে, তোমরাও তাদের সঙ্গে ঠিক থাক। আর ৯:৮ ও ৯:১০ আয়াত যে বর্ণনা দেয়, তাতেই ৯:১১ আয়াতের প্রস্তাবটি চমকে দেয়: এরা এমন লোক, যারা কোনো মু'মিনের ব্যাপারে আত্মীয়তার বন্ধনও মানে না, অঙ্গীকারও মানে না।"
          },
          {
            "en": "16:91-92 is the passage behind the image of the untied oath, and 8:58 is where the surah before this one required that a pact be thrown back openly rather than quietly broken. 9:13 continues our second verse by asking whether they would not fight a people who broke their oaths and had begun the attack first. And 60:7 is the verse that keeps the whole subject from hardening: perhaps Allah will put affection between you and those to whom you have been enemies among them.",
            "bn": "খুলে ফেলা শপথের ছবিটির পেছনে আছে ১৬:৯১-৯২ আয়াত; আর ৮:৫৮ আয়াতে আগের সূরা হুকুম দিয়েছিল, চুক্তি গোপনে ভাঙা যাবে না, প্রকাশ্যে ফিরিয়ে দিতে হবে। ৯:১৩ আয়াত আমাদের দ্বিতীয় আয়াতের কথাই এগিয়ে নিয়ে প্রশ্ন করে: তোমরা কি এমন লোকদের সঙ্গে লড়বে না, যারা নিজেদের শপথ ভেঙেছে আর প্রথমে আক্রমণ শুরু করেছে? আর পুরো বিষয়টাকে কঠিন হয়ে জমে যেতে দেয় না ৬০:৭ আয়াত: আশা করা যায়, আল্লাহ তোমাদের মধ্যে আর তাদের মধ্যে যাদের সঙ্গে তোমাদের শত্রুতা, বন্ধুত্ব সৃষ্টি করে দেবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for the Other Side",
          "bn": "অপর পক্ষের জন্য দোয়া"
        },
        "p": [
          {
            "en": "Neither verse is a supplication, but the passage leaves an opening for one, and as-Sa'di is the one who walks through it when he adds that perhaps they may even enter the religion. The Quran's own word of hope for that outcome is 60:7, which does not hold out an enemy's defeat but that Allah may put affection between the two sides, and which closes on the same two names our previous verse closed on, Forgiving and Merciful.",
            "bn": "দুটি আয়াতের কোনোটিই দোয়া নয়, তবে অংশটি দোয়ার জন্য একটি পথ খোলা রাখে, আর সে পথে পা রাখেন সা'দী, যখন তিনি যোগ করেন: হয়তো তারা দীনে ঢুকেও পড়বে। এমন পরিণামের আশা কুরআন নিজেই জাগায় ৬০:৭ আয়াতে। সেখানে শত্রুর পরাজয়ের কথা নেই, আছে এই আশা যে আল্লাহ দুই পক্ষের মধ্যে বন্ধুত্ব তৈরি করে দিতে পারেন। আর আয়াতটি শেষও হয় সেই দুটি নামে, যা দিয়ে আমাদের আগের আয়াত শেষ হয়েছিল: ক্ষমাশীল, দয়ালু।"
          },
          {
            "en": "A sentence in these verses' own vocabulary can be added and claimed as no more than that: O Allah, make those who attack this religion cease, and if You will, make them brothers in it instead. That is assembled from 9:12's closing purpose and 9:11's own word for what repentance makes of a former enemy. It is not a Sunnah du'a. The wording of 60:7 is the safer of the two and asks for the larger thing.",
            "bn": "এ আয়াতগুলোর নিজের শব্দে একটি বাক্য যোগ করা যায়, তবে এর বেশি কিছু দাবি না করে: হে আল্লাহ, যারা এ দীনের উপর আঘাত করে তাদের থামিয়ে দিন, আর আপনি চাইলে তার বদলে তাদের এ দীনের ভাই বানিয়ে দিন। বাক্যটি সাজানো হয়েছে ৯:১২ আয়াতের শেষের উদ্দেশ্য আর ৯:১১ আয়াতের নিজের সেই শব্দ থেকে, তওবার পর আগের শত্রু যা হয়ে যায়: ভাই। এটি সুন্নাহর দোয়া নয়। দুটোর মধ্যে ৬০:৭ আয়াতের ভাষাই বেশি নিরাপদ, আর সেটি চায়ও বড় জিনিস।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Doors",
          "bn": "নিজের দরজা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "The first verse makes former enemies brothers with no waiting period named: do I let people cross that quickly, or do I keep them on probation long after they have changed? Both doors turn on conduct, so where have I been sorting people by what they are rather than by what they are doing now? And the stated aim of the harder verse is that they cease, not that they be finished: when I am in a conflict, what am I actually aiming at?",
            "bn": "প্রথম আয়াত আগের শত্রুদের ভাই বানিয়ে দেয়, কোনো অপেক্ষার মেয়াদ বলে না: আমি কি মানুষকে এত তাড়াতাড়ি আপন করে নিই, নাকি তারা বদলে যাওয়ার অনেক পরেও তাদের পরীক্ষায় ঝুলিয়ে রাখি? দুটি দরজাই খোলে আচরণে; তাহলে কোথায় আমি মানুষকে ভাগ করছি তারা কে সেটা দেখে, এখন তারা কী করছে সেটা দেখে নয়? আর কঠিন আয়াতটির ঘোষিত লক্ষ্য হলো তারা থেমে যাক, শেষ হয়ে যাক তা নয়: কোনো বিরোধে জড়ালে আমি আসলে কী চাই?"
          },
          {
            "en": "Two more. Oaths meant nothing to the men described here, so what have I promised recently and then treated as meaning nothing? And the verses are said to be detailed for a people who know: what have I refused to learn properly, because a rough version of it is more useful to the argument I want to win?",
            "bn": "আরও দুটি। এখানে যাদের কথা, তাদের কাছে শপথের কোনো দাম ছিল না; তাহলে সম্প্রতি আমি কোন কথা দিয়েছি, আর পরে সেটাকে মূল্যহীন ধরে নিয়েছি? আর আল্লাহ বলছেন, তিনি আয়াতগুলো বিশদভাবে বর্ণনা করেন তাদের জন্য, যারা জানে: কোন বিষয়টা আমি ঠিকমতো শিখতে চাইনি, কারণ যে তর্কে আমি জিততে চাই, তাতে ভাসাভাসা ধারণাটাই বেশি কাজে আসে?"
          }
        ]
      }
    ]
  },
  "9:18": {
    "sections": [
      {
        "h": {
          "en": "An Answer to a Boast",
          "bn": "এক বড়াইয়ের জবাব"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan, and this verse answers the one before it. 9:17 says it is not for the idolaters to maintain the mosques of Allah while they witness against themselves with disbelief. Ibn Kathir, commenting there, notes that those who read the phrase as the Masjid of Allah take it of al-Masjid al-Haram, built from the first day for the worship of Allah alone, and he quotes as-Suddi's dry remark that if you ask a man of any religion what he is, he will tell you plainly.",
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াত তার আগের আয়াতের জবাব। ৯:১৭ আয়াত বলে, মুশরিকদের এ অধিকার নেই যে তারা আল্লাহর মাসজিদ আবাদ করবে, যখন তারা নিজেরাই নিজেদের কুফরের সাক্ষ্য দিচ্ছে। ইবনু কাসীর সেখানে লেখেন, যাঁরা এখানে একবচনে আল্লাহর মাসজিদ পড়েন, তাঁরা এর দ্বারা মাসজিদুল হারাম বোঝেন, যা প্রথম দিন থেকেই কেবল আল্লাহর ইবাদতের জন্য বানানো। সঙ্গে তিনি সুদ্দীর একটি শুকনো মন্তব্যও আনেন: যে কোনো ধর্মের লোককে জিজ্ঞেস করলে সে কী, সে সোজাসুজিই বলে দেবে।"
          },
          {
            "en": "At-Tabari preserves what the verse was answering, from Ibn Ishaq: then He mentioned the saying of Quraysh, that we are the people of the Haram, the waterers of the pilgrim, the maintainers of this House, and no one is better than us. So the verse is a reply to a claim of custodianship, and the reply is a list. 9:19 then puts the same claim on scales, asking whether providing water for the pilgrim and maintaining the Sacred Mosque are equal to believing and striving, and answering that they are not equal in the sight of Allah.",
            "bn": "আয়াতটি কোন কথার জবাব দিচ্ছিল, তাবারী তা ইবনু ইসহাকের সূত্রে সংরক্ষণ করেছেন: তারপর আল্লাহ কুরাইশের সেই কথার উল্লেখ করলেন, আমরা হারামের বাসিন্দা, আমরা হাজীদের পানি পান করাই, এ ঘর আবাদ রাখি, আমাদের চেয়ে উত্তম কেউ নেই। অর্থাৎ আয়াতটি দেখাশোনার এক দাবির জবাব, আর জবাবটি একটি তালিকা। এরপর ৯:১৯ আয়াত সেই দাবিকেই পাল্লায় তোলে: হাজীদের পানি পান করানো আর মাসজিদুল হারাম আবাদ রাখা কি ঈমান আনা আর জিহাদ করার সমান? জবাবও দেয়: আল্লাহর কাছে এরা সমান নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ya'muru: To Keep Alive",
          "bn": "ইয়া'মুরু: বাঁচিয়ে রাখা"
        },
        "p": [
          {
            "en": "The verb is ya'muru, from a root that carries building, inhabiting and long life together, and the Bengali translation reaches for abad, the keeping of a place populated and in use. That range matters here, because the boast being answered was about upkeep in the narrowest sense, water carried and a building maintained. The verse does not deny that such work is work. It says who the maintainers are, and it answers with people rather than with services.",
            "bn": "ক্রিয়াটি ইয়া'মুরু। এর মূল ধাতুতে একসঙ্গে আছে নির্মাণ, বসবাস আর দীর্ঘ জীবনের অর্থ; বাংলা অনুবাদ তাই বেছে নিয়েছে আবাদ শব্দটি, অর্থাৎ কোনো জায়গাকে মানুষে ভরা আর সচল রাখা। অর্থের এ বিস্তারটা এখানে গুরুত্বপূর্ণ, কারণ যে বড়াইয়ের জবাব দেওয়া হচ্ছে, তা ছিল একেবারে সংকীর্ণ অর্থের দেখাশোনা নিয়ে: পানি বয়ে আনা আর একটা দালান ঠিকঠাক রাখা। আয়াত অস্বীকার করে না যে এসবও কাজ। আয়াত বলে দেয় আবাদকারী কারা, আর জবাবে সেবার তালিকা নয়, মানুষের পরিচয় দেয়।"
          },
          {
            "en": "Then innama, the particle of restriction, which is why the English reads only to be maintained by. The list it restricts them to has four conditions, the first of them double, and at-Tabari glosses each part: the one who affirms Allah's oneness and is sincere to Him in worship; who affirms that Allah will raise the dead alive from their graves; who performs the obligatory prayer within its limits; who pays the obligatory zakah of his wealth to those Allah appointed it for; and who dreads the punishment of nothing for his disobedience except Allah.",
            "bn": "এরপর আসে ইন্নামা, যা সীমাবদ্ধ করার শব্দ; সে কারণেই ইংরেজি অনুবাদে পড়া হয়: কেবল তারাই আবাদ করবে। যে তালিকার মধ্যে তাদের সীমাবদ্ধ করা হয়েছে, তাতে চারটি শর্ত, আর প্রথমটি জোড়া। তাবারী প্রতিটি অংশের ব্যাখ্যা দেন: যে আল্লাহর একত্ব স্বীকার করে আর ইবাদতে তাঁর প্রতি একনিষ্ঠ; যে বিশ্বাস করে আল্লাহ মৃতদের কবর থেকে জীবিত করে ওঠাবেন; যে ফরজ নামাজ তার নিয়ম মেনে আদায় করে; যে নিজের সম্পদের ফরজ যাকাত আল্লাহর নির্ধারিত হকদারদের দেয়; আর যে নিজের নাফরমানির শাস্তির ব্যাপারে আল্লাহ ছাড়া আর কাউকে ভয় করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Fearing No One Else",
          "bn": "আর কাউকে ভয় না করা"
        },
        "p": [
          {
            "en": "The fourth item is the one that changes the list. As-Sa'di glosses it as a man restricting his fear to his Lord, so that he holds back from what Allah forbade and does not fall short in the rights Allah made obligatory. Read that way it is not an emotional state but a working condition: fear of anyone else is what makes a man cut a corner or stay silent, and the verse puts its absence beside prayer and zakah as though it were the same kind of duty.",
            "bn": "তালিকার চেহারা বদলে দেয় চতুর্থ শর্তটিই। সা'দী এর ব্যাখ্যা দেন এভাবে: মানুষটি তার ভয়কে কেবল নিজের রবের জন্য রাখে, তাই আল্লাহ যা হারাম করেছেন তা থেকে দূরে থাকে, আর আল্লাহ যে হকগুলো ফরজ করেছেন তাতে কোনো ঘাটতি করে না। এভাবে পড়লে এটা মনের কোনো অবস্থা নয়, কাজের শর্ত। অন্য কারও ভয়েই মানুষ কাজে ফাঁকি দেয় বা চুপ করে থাকে; আর আয়াত সেই ভয় না থাকাকে নামাজ আর যাকাতের পাশেই রাখে, যেন এটাও একই ধরনের দায়িত্ব।"
          },
          {
            "en": "As-Sa'di then sums the four as a portrait: He described them with beneficial faith, with the performance of righteous deeds whose mother is the prayer and the zakah, and with the fear of Allah, which is the root of every good. These, he says, are the maintainers of the mosques in reality and its people who are truly its people. And he closes the other side of it without softening: whoever does not believe in Allah or the Last Day and has no fear of Allah is not one of them, even if he claims it and asserts it.",
            "bn": "এরপর সা'দী চারটিকে মিলিয়ে একটি ছবি আঁকেন: আল্লাহ তাঁদের পরিচয় দিয়েছেন উপকারী ঈমান দিয়ে, নেক আমল দিয়ে, যার প্রধান হলো নামাজ আর যাকাত, আর আল্লাহর ভয় দিয়ে, যা সব কল্যাণের মূল। তিনি বলেন, এঁরাই প্রকৃত অর্থে মাসজিদের আবাদকারী, আর এঁরাই সত্যিকারের মাসজিদের লোক। আর উল্টো দিকটাও তিনি কোনো রকম নরম না করেই বলে দেন: যে আল্লাহ ও শেষ দিবসে ঈমান রাখে না, আর যার অন্তরে আল্লাহর ভয় নেই, সে এঁদের কেউ নয়, যতই সে দাবি করুক আর জোর গলায় বলুক।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Asa Is Binding",
          "bn": "প্রতিটি ‘আসা’ নিশ্চিত"
        },
        "p": [
          {
            "en": "The verse ends on a hope rather than a verdict: it is to be hoped that those will be among the guided. At-Tabari reads the clause as meaning it is fitting for people of that description to be, with Allah, among those He has guided to the truth. But he also records something larger from Ibn Abbas (RA), who read the same words as a certainty: indeed those are the successful, and who supported it by the way the word is used of the Prophet ﷺ in 17:79, that perhaps your Lord will raise you to a praised station.",
            "bn": "আয়াত শেষ হয় রায় দিয়ে নয়, আশা দিয়ে: আশা করা যায়, তারা হিদায়াতপ্রাপ্তদের অন্তর্ভুক্ত হবে। তাবারী কথাটির অর্থ করেন: এমন গুণের লোকদের জন্য এটাই মানানসই যে আল্লাহর কাছে তারা গণ্য হবে সেই লোকদের মধ্যে, যাদের তিনি সত্যের পথ দেখিয়েছেন। তবে তাবারী এর চেয়েও বড় একটি কথা লিখে রেখেছেন: ইবনু আব্বাস (রাঃ) একই শব্দগুলোকে নিশ্চয়তা হিসেবে পড়তেন, নিশ্চয়ই এরাই সফলকাম; আর এর পক্ষে দলিল দিতেন ১৭:৭৯ আয়াত থেকে, যেখানে নবী ﷺ সম্পর্কে শব্দটি এসেছে: আশা করা যায়, তোমার রব তোমাকে প্রশংসিত স্থানে পৌঁছে দেবেন।"
          },
          {
            "en": "Ibn Abbas (RA) draws the rule out plainly, that Allah's words there mean your Lord will surely raise you, and that station is the intercession, and then states it generally: every asa in the Quran is binding. As-Sa'di reaches the same conclusion in four words, that asa from Allah is binding. So the softness of the ending is a courtesy of expression rather than an uncertainty, and the reader who meets the four conditions is being promised guidance in the gentlest available grammar.",
            "bn": "ইবনু আব্বাস (রাঃ) নিয়মটা খোলাখুলি বলে দেন: সেখানে আল্লাহর কথার অর্থ, তোমার রব তোমাকে অবশ্যই পৌঁছে দেবেন, আর সেই স্থান হলো শাফাআত। তারপর তিনি কথাটা সাধারণ নিয়ম হিসেবে বলেন: কুরআনে যেখানেই ‘আসা’ এসেছে, তা নিশ্চিত। সা'দীও ছোট্ট এক বাক্যে একই সিদ্ধান্তে পৌঁছান: আল্লাহর পক্ষ থেকে ‘আসা’ মানে নিশ্চিত। অর্থাৎ আয়াতের শেষের কোমল সুর কোনো অনিশ্চয়তা নয়, বলার ভদ্রতা। যে পাঠক চারটি শর্ত পূরণ করেন, তাঁকে হিদায়াতের ওয়াদা দেওয়া হচ্ছে সবচেয়ে কোমল ভাষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Builds One",
          "bn": "যে মাসজিদ বানায়"
        },
        "p": [
          {
            "en": "The Sunnah puts a reward on the narrow work the verse declined to count as ownership, which is worth noticing. Sahih al-Bukhari 450 preserves, in the report of Ubaydullah al-Khawlani, Uthman ibn Affan (RA) citing the Prophet ﷺ: whoever built a mosque, Allah would build for him a similar place in Paradise. So building is not belittled anywhere in this passage; it is simply not what the verse was asked about. The question was who the mosque belongs to, and a builder who fails the four conditions has still built.",
            "bn": "একটি বিষয় খেয়াল করার মতো: যে সংকীর্ণ কাজটিকে আয়াত মালিকানার দাবি হিসেবে মানেনি, সুন্নাহ সেই কাজের জন্য পুরস্কার রেখেছে। সহীহ বুখারীর ৪৫০ নম্বর হাদিসে উবাইদুল্লাহ আল-খাওলানীর বর্ণনায় আছে, উসমান ইবনু আফফান (রাঃ) নবীর ﷺ কথা উদ্ধৃত করেন: যে মাসজিদ বানায়, আল্লাহ তার জন্য জান্নাতে তেমনই একটি জায়গা বানাবেন। অর্থাৎ এ অংশের কোথাও মাসজিদ বানানোকে ছোট করা হয়নি; আয়াতের প্রশ্নটাই ছিল অন্য। প্রশ্ন ছিল মাসজিদ কার, আর যে নির্মাতা চারটি শর্তে উতরায় না, সে-ও তো মাসজিদ বানিয়েছে।"
          },
          {
            "en": "Ibn Kathir, on the verse before ours, brings 8:34 to the same point: and why should Allah not punish them while they obstruct people from al-Masjid al-Haram and they were not its guardians; its guardians are none but the righteous, but most of them do not know. The last clause is the one that stings, because it says the people making the claim did not know that the claim was empty. A title held in good faith can still be a title nobody granted.",
            "bn": "আমাদের আগের আয়াতের ব্যাখ্যায় ইবনু কাসীর একই কথা বোঝাতে ৮:৩৪ আয়াত আনেন: আল্লাহ তাদের শাস্তি দেবেন না কেন, যখন তারা মানুষকে মাসজিদুল হারামে যেতে বাধা দেয়, অথচ তারা তার অভিভাবক নয়? মুত্তাকীরা ছাড়া কেউ তার অভিভাবক নয়, কিন্তু তাদের বেশির ভাগই তা জানে না। শেষ কথাটাই সবচেয়ে বেশি গায়ে লাগে, কারণ তা বলে দেয়, দাবিদাররা জানতই না যে তাদের দাবি ফাঁকা। সরল বিশ্বাসে ধরে রাখা পদবিও এমন হতে পারে, যা আসলে কেউ কখনো দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses About the Houses",
          "bn": "আল্লাহর ঘর নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "72:18 states the ownership the whole passage rests on in a few words: the masjids are for Allah, so do not invoke anyone with Allah. 2:114 takes the opposite case, asking who is more unjust than one who prevents Allah's name from being mentioned in His mosques and strives toward their ruin. Between them our verse sits as the positive statement, naming who may be said to keep such a place.",
            "bn": "পুরো অংশটি যে মালিকানার উপর দাঁড়িয়ে, ৭২:১৮ আয়াত তা অল্প কথায় বলে দেয়: মাসজিদগুলো আল্লাহরই, কাজেই আল্লাহর সঙ্গে আর কাউকে ডেকো না। ২:১১৪ আয়াত উল্টো দিকটা দেখায়: তার চেয়ে বড় জালিম আর কে, যে আল্লাহর মাসজিদে তাঁর নাম নিতে বাধা দেয় আর সেগুলো ধ্বংসের চেষ্টা করে? এ দুয়ের মাঝে আমাদের আয়াত ইতিবাচক কথাটি বলে: কাদের সম্পর্কে বলা যায় যে তারা এমন জায়গা আবাদ রাখে।"
          },
          {
            "en": "24:36-37 is the closest portrait of the same people: in houses which Allah has ordered to be raised and His name mentioned in them, men whom neither commerce nor sale distracts from the remembrance of Allah and the prayer and the zakah, who fear a Day when hearts and eyes will turn about. The two verses name the same three acts as ours and add the one thing ours implies, that what such men are not distracted by is business. And 9:19 with 9:20 finish the comparison our verse opened.",
            "bn": "এই একই লোকদের সবচেয়ে কাছাকাছি ছবি পাওয়া যায় ২৪:৩৬-৩৭ আয়াতে: সেসব ঘরে, যেগুলোকে উঁচু করতে আর যেগুলোতে তাঁর নাম নিতে আল্লাহ হুকুম দিয়েছেন, এমন লোকেরা আছে, যাদের ব্যবসা-বাণিজ্য আর কেনাবেচা আল্লাহর জিকির, নামাজ আর যাকাত থেকে উদাসীন করে না; তারা ভয় করে সেই দিনকে, যেদিন অন্তর আর চোখ উল্টে যাবে। এ দুই আয়াত আমাদের আয়াতের সেই তিনটি কাজেরই নাম নেয়, আর যোগ করে এমন একটি কথা, যা আমাদের আয়াতে ইশারায় আছে: এমন লোকদের যা উদাসীন করতে পারে না, তা হলো কাজকারবার। আর আমাদের আয়াত যে তুলনা শুরু করেছিল, তা শেষ করে ৯:১৯ ও ৯:২০ আয়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Holds Your Mosque",
          "bn": "আপনার মাসজিদ কাদের হাতে"
        },
        "p": [
          {
            "en": "The verse is unusually practical for a committee-minded reader, because it lists no committee. Whatever is decided about a building, the people who hold it are the ones who believe, pray, pay and fear nobody but Allah. That cuts in two directions at once. It relieves a person with no standing and no money of the idea that the place is not his, and it relieves a person with both of the idea that it is.",
            "bn": "যে পাঠক কমিটির ভাষায় ভাবেন, তাঁর জন্য আয়াতটি আশ্চর্য রকম কাজের, কারণ এতে কোনো কমিটির তালিকা নেই। দালান নিয়ে যে সিদ্ধান্তই হোক, মাসজিদ আসলে তাদের হাতে, যারা ঈমান রাখে, নামাজ পড়ে, যাকাত দেয় আর আল্লাহ ছাড়া কাউকে ভয় করে না। কথাটা দুদিকেই কাটে। যার কোনো পদ নেই, টাকাও নেই, তার মন থেকে এ ধারণা দূর করে যে জায়গাটা তার নয়; আর যার দুটোই আছে, তার মন থেকে দূর করে এ ধারণা যে জায়গাটা তার।"
          },
          {
            "en": "The fourth condition is where most of the work is, because fear of people is the ordinary reason a community's affairs go wrong quietly: the thing nobody says at the meeting, the wrong left standing because of who would be offended. As-Sa'di's gloss makes that measurable — he holds back from what Allah forbade and does not fall short in Allah's obligatory rights — and the honest question it puts is not whether a person is brave in general but whom, in particular, he is presently afraid of.",
            "bn": "সবচেয়ে বেশি কাজ চতুর্থ শর্তেই, কারণ মানুষের ভয়ই সেই সাধারণ কারণ, যার জন্য একটি সমাজের কাজকর্ম নীরবে বিগড়ে যায়: বৈঠকে যে কথাটা কেউ বলে না, কে মনে কষ্ট পাবে সেই ভয়ে যে অন্যায়টা থেকেই যায়। সা'দীর ব্যাখ্যা বিষয়টাকে মাপার মতো করে দেয়: সে আল্লাহর হারাম করা জিনিস থেকে বিরত থাকে, আর আল্লাহর ফরজ করা হকে কোনো ঘাটতি করে না। এ ব্যাখ্যা যে সৎ প্রশ্নটা সামনে আনে, তা এ নয় যে মানুষটি সাধারণভাবে সাহসী কি না; প্রশ্ন হলো, এই মুহূর্তে সে বিশেষ করে কাকে ভয় পাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer to Be Counted",
          "bn": "তাঁদের মধ্যে গণ্য হওয়ার দোয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication, but it hands a reader the exact thing to ask for, since it ends by hoping such people will be among the guided and Ibn Abbas (RA) reads that hope as a promise. The Quranic prayer nearest to it is the one every believer already says several times a day, guide us to the straight path, which asks for the very thing this verse holds out to those who meet its four conditions.",
            "bn": "আয়াতে কোনো দোয়া নেই, তবে কী চাইতে হবে, তা পাঠকের হাতে ঠিকঠাক তুলে দেয়। কারণ আয়াত শেষ হয় এ আশায় যে এমন লোকেরা হিদায়াতপ্রাপ্তদের মধ্যে থাকবে, আর ইবনু আব্বাস (রাঃ) সেই আশাকে ওয়াদা হিসেবে পড়েন। এর সবচেয়ে কাছের কুরআনী দোয়া সেটাই, যা প্রত্যেক মু'মিন দিনে কয়েকবার পড়েন: আমাদের সরল পথ দেখান। চারটি শর্ত যারা পূরণ করে, তাদের জন্য এ আয়াত যা রেখেছে, এ দোয়া ঠিক সেটাই চায়।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, make me one of the people of Your houses by what You listed and not by what I can show, and let me fear nobody in them but You. It is assembled from the verse's four conditions and from as-Sa'di's gloss on the last of them, and it is not a Sunnah du'a. The hadith quoted above is a promise about building rather than a prayer, and should be carried as that.",
            "bn": "এ আয়াতের নিজের শব্দে একটি বাক্য যোগ করা যায়, তবে এর বেশি কিছু দাবি না করে: হে আল্লাহ, আপনি যে গুণগুলোর তালিকা দিয়েছেন, তা দিয়েই আমাকে আপনার ঘরের লোক বানান, আমি যা দেখাতে পারি তা দিয়ে নয়; আর সেখানে আপনাকে ছাড়া আর কাউকে যেন আমি ভয় না করি। বাক্যটি সাজানো হয়েছে আয়াতের চারটি শর্ত আর শেষ শর্তটির উপর সা'দীর ব্যাখ্যা থেকে; এটি সুন্নাহর দোয়া নয়। উপরে যে হাদিস উদ্ধৃত হয়েছে, তা দোয়া নয়, মাসজিদ বানানো নিয়ে একটি ওয়াদা; তাকে সেভাবেই ধরতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About the List",
          "bn": "তালিকাটি নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "There is no donation on this list. If a mosque were held by the four things named here, would my name be among those holding it? Fearing nobody but Allah is set beside prayer and zakah as though it were the same sort of obligation, so whom am I actually afraid of, and what has that fear cost the people around me?",
            "bn": "এ তালিকায় দানের কোনো কথা নেই। এখানে বলা চারটি জিনিস দিয়েই যদি ঠিক হতো মাসজিদ কাদের হাতে, তবে সেই লোকদের মধ্যে কি আমার নাম থাকত? আল্লাহ ছাড়া কাউকে ভয় না করাকে আয়াত নামাজ আর যাকাতের পাশে রেখেছে, যেন সেটাও একই রকম ফরজ; তাহলে আমি আসলে কাকে ভয় পাই, আর সেই ভয়ের দাম আমার আশপাশের মানুষদের কীভাবে দিতে হয়েছে?"
          },
          {
            "en": "Two more. The verse does not declare them guided, only that it is hoped, and even that hope is read as a promise by those who knew the language best: what claim about myself have I been making more confidently than this verse makes about them? And the first three conditions are visible to everyone while the fourth is not, so which of the four is weakest in me when nobody is watching?",
            "bn": "আরও দুটি। আয়াত তাদের হিদায়াতপ্রাপ্ত বলে ঘোষণা করে না, শুধু বলে আশা করা যায়; আর যাঁরা ভাষাটা সবচেয়ে ভালো জানতেন, তাঁরা সেই আশাকেও ওয়াদা হিসেবে পড়েছেন: তাহলে নিজের সম্পর্কে আমি কোন দাবিটা এমন জোর দিয়ে করে চলেছি, যতটা জোর এ আয়াতও তাদের সম্পর্কে দেখায়নি? আর প্রথম তিনটি শর্ত সবার চোখে পড়ে, চতুর্থটি পড়ে না; তাহলে কেউ যখন দেখছে না, তখন এ চারটির কোনটি আমার মধ্যে সবচেয়ে দুর্বল?"
          }
        ]
      }
    ]
  },
  "9:24": {
    "sections": [
      {
        "h": {
          "en": "Said to Those Who Stayed",
          "bn": "যারা পিছনে রয়ে গেল, তাদের প্রতি"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan, and this verse follows a hard prohibition. 9:23 tells the believers not to take their fathers or brothers as allies if those men preferred disbelief over belief, and calls whoever does so a wrongdoer. Ibn Kathir, on that verse, brings 58:22 alongside it, that you will not find people who believe in Allah and the Last Day having affection for those who oppose Allah and His Messenger ﷺ even if they were their fathers or their sons. Our verse then supplies the reason underneath both.",
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াত আসে একটি কঠিন নিষেধের পরে। ৯:২৩ আয়াত মু'মিনদের বলে, তোমাদের পিতা বা ভাইয়েরা যদি ঈমানের চেয়ে কুফরকে বেশি পছন্দ করে, তবে তাদের বন্ধু হিসেবে গ্রহণ কোরো না; আর যে তা করে, তাকে বলে জালিম। ইবনু কাসীর সেই আয়াতের সঙ্গে ৫৮:২২ আয়াত মিলিয়ে আনেন: তুমি এমন কোনো সম্প্রদায় পাবে না, যারা আল্লাহ ও শেষ দিবসে ঈমান রাখে অথচ আল্লাহ ও তাঁর রাসূলের ﷺ বিরোধীদের ভালোবাসে, তারা তাদের পিতা বা সন্তান হলেও। এরপর আমাদের আয়াত বলে দেয় দুটোর পেছনের কারণ।"
          },
          {
            "en": "At-Tabari reads the address narrowly and it changes the scene. He takes it as spoken to those who had stayed behind from the emigration to the abode of Islam and remained in the abode of shirk: if remaining with your fathers and sons and brothers and wives and kin, and wealth you have earned, and a trade whose decline you fear through leaving your town, and dwellings you are pleased with and so have settled in, is more beloved to you than emigrating to Allah and His Messenger ﷺ. On that reading the eight things are not abstractions. They are the furniture of a life somebody would not leave.",
            "bn": "তাবারী সম্বোধনটিকে সীমিত অর্থে পড়েন, আর তাতে পুরো দৃশ্যটাই বদলে যায়। তাঁর মতে কথাগুলো বলা হয়েছে তাদের, যারা হিজরত করে ইসলামের দেশে না গিয়ে শিরকের দেশেই থেকে গিয়েছিল: পিতা, সন্তান, ভাই, স্ত্রী আর গোষ্ঠীর সঙ্গে থেকে যাওয়া, তোমাদের উপার্জিত সম্পদ, শহর ছেড়ে গেলে যে ব্যবসা মন্দা হওয়ার ভয় কর, আর যে বাড়িঘর তোমাদের পছন্দ বলে সেখানে থিতু হয়েছ, এসব যদি তোমাদের কাছে আল্লাহ ও তাঁর রাসূলের ﷺ দিকে হিজরতের চেয়ে বেশি প্রিয় হয়। এভাবে পড়লে আটটি জিনিস বিমূর্ত কিছু নয়; এগুলো এমন এক জীবনের আসবাবপত্র, যা ছেড়ে কেউ যেতে চায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Eight Against Three",
          "bn": "আটের বিপরীতে তিন"
        },
        "p": [
          {
            "en": "The scale is built plainly. Eight things on one side: fathers, sons, brothers, wives, kin, wealth, trade, dwellings. Three on the other: Allah, His Messenger ﷺ, and striving in His way. Not one of the eight is unlawful, and several are things a man is obliged to provide for and protect, which is what makes the verse difficult. It does not oppose good things to bad ones. It orders good things against better ones and asks what happens when they pull apart.",
            "bn": "পাল্লাটা সাজানো সোজাসাপটা। এক পাশে আটটি জিনিস: পিতা, সন্তান, ভাই, স্ত্রী, গোষ্ঠী, সম্পদ, ব্যবসা, বাড়িঘর। অন্য পাশে তিনটি: আল্লাহ, তাঁর রাসূল ﷺ, আর তাঁর পথে জিহাদ। আটটির একটিও হারাম নয়; বরং কয়েকটির ভরণপোষণ আর হেফাজত মানুষের উপর ফরজ। এ কারণেই আয়াতটি কঠিন। আয়াত ভালোকে মন্দের বিপরীতে রাখে না; ভালো আর আরও ভালোর মধ্যে আগে-পরে ঠিক করে দেয়, তারপর জিজ্ঞেস করে, দুটো যখন দুদিকে টানে তখন কী হয়।"
          },
          {
            "en": "Two of the eight carry their own reasons in their wording. At-Tabari glosses iqtaraftumuha as wealth you have earned, and as-Sa'di draws the point out: He singled it out for mention because such wealth is more desired by its owner, and its owner is more attached to it than one to whom wealth comes without toil or effort. And a trade whose decline you fear names a fear rather than a loss. Nothing has failed yet; it is the possibility that is doing the holding.",
            "bn": "আটটির মধ্যে দুটির শব্দেই তাদের কারণ লুকিয়ে আছে। তাবারী ইকতারাফতুমূহার অর্থ করেন, তোমাদের উপার্জিত সম্পদ; আর সা'দী বিষয়টি খুলে বলেন: আল্লাহ এ সম্পদের কথা আলাদা করে বলেছেন, কারণ এমন সম্পদের প্রতি মালিকের টান বেশি; বিনা খাটুনিতে যার হাতে সম্পদ আসে, তার চেয়ে এ মালিক নিজের সম্পদ বেশি আঁকড়ে ধরে। আর যে ব্যবসা মন্দা হওয়ার ভয় কর, এ কথায় আছে একটি ভয়, কোনো লোকসান নয়। এখনো কিছুই ডোবেনি; মানুষকে আটকে রাখছে কেবল সম্ভাবনাটুকু।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di Widens the List",
          "bn": "সা'দী তালিকাটি বাড়িয়ে দেন"
        },
        "p": [
          {
            "en": "As-Sa'di will not let the eight be read as a closed inventory. Fathers, he notes, and the mothers are like them; brothers in lineage and in company; kin meaning your relatives generally. On the trade he opens it as wide as it will go: this includes all kinds of trades and earnings, goods of trade, prices, vessels, weapons, wares, grains, crops, cattle and other than that. And dwellings you are pleased with, he says, for their beauty and their ornament and their agreeing with your desires.",
            "bn": "সা'দী আটটিকে বন্ধ তালিকা হিসেবে পড়তে দেন না। তিনি বলেন, পিতার কথা এসেছে, আর মায়েরাও তাদের মতোই; ভাই মানে বংশের ভাই, সঙ্গী-সাথি ভাইও; আর গোষ্ঠী মানে সাধারণভাবে সব আত্মীয়স্বজন। ব্যবসার কথাটিকে তিনি যতদূর সম্ভব বিস্তৃত করেন: এর মধ্যে আছে সব ধরনের ব্যবসা ও উপার্জন, ব্যবসার মাল, দাম, পাত্র, অস্ত্র, পণ্যসামগ্রী, শস্য, ফসল, গবাদি পশু, এবং আরও যা আছে। আর যে বাড়িঘর তোমাদের পছন্দ, তিনি বলেন, তা পছন্দের কারণ এর সৌন্দর্য, সাজসজ্জা আর মনের চাহিদার সঙ্গে মিলে যাওয়া।"
          },
          {
            "en": "Then he states the verdict in three words where the verse takes a clause: if these things are more beloved to you than Allah and His Messenger and striving in His way, then you are transgressors, wrongdoers. And he reads the imperative to wait as waiting for something specific, the punishment that will befall you, until Allah brings His command, which has no averting. The closing clause he takes as a definition of the fasiq: those who leave Allah's obedience, who put something of these mentioned things ahead of the love of Allah.",
            "bn": "আয়াত যে কথা একটি বাক্যাংশে বলে, সা'দী সেই রায় দেন অল্প কয়েকটি শব্দে: এসব জিনিস যদি তোমাদের কাছে আল্লাহ, তাঁর রাসূল ﷺ আর তাঁর পথে জিহাদের চেয়ে বেশি প্রিয় হয়, তবে তোমরা ফাসিক, জালিম। অপেক্ষা করার হুকুমটিকে তিনি পড়েন নির্দিষ্ট একটি জিনিসের অপেক্ষা হিসেবে: তোমাদের উপর যে শাস্তি নেমে আসবে, যতক্ষণ না আল্লাহ তাঁর হুকুম নিয়ে আসেন, যা কেউ ফেরাতে পারে না। আর শেষ কথাটিকে তিনি ফাসিকের সংজ্ঞা হিসেবে ধরেন: যারা আল্লাহর আনুগত্য ছেড়ে বেরিয়ে যায়, যারা উল্লেখ করা এসব জিনিসের কোনো একটিকে আল্লাহর ভালোবাসার আগে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Until Allah Brings It",
          "bn": "যতক্ষণ না আল্লাহ তা আনেন"
        },
        "p": [
          {
            "en": "On what the command was, at-Tabari is concrete where as-Sa'di is general. His gloss of wait until Allah brings His command is: until Allah brings the conquest of Makkah, and he carries the same from Mujahid through two chains, the conquest, the conquest of Makkah. So the thing the delayers were told to sit and wait for turned out to be the removal of the very reason they had given for staying: the city they did not want to leave was opened, and the trade they feared for was no longer in enemy hands.",
            "bn": "হুকুমটা কী ছিল, এ ব্যাপারে সা'দী সাধারণ কথা বলেন, তাবারী নির্দিষ্ট করে বলেন। অপেক্ষা কর যতক্ষণ না আল্লাহ তাঁর হুকুম নিয়ে আসেন, এর ব্যাখ্যায় তিনি লেখেন: যতক্ষণ না আল্লাহ মক্কা বিজয় এনে দেন। মুজাহিদ থেকেও তিনি দুটি সূত্রে একই কথা আনেন: বিজয়, অর্থাৎ মক্কা বিজয়। তাহলে পিছিয়ে থাকা লোকদের যে জিনিসের জন্য বসে অপেক্ষা করতে বলা হয়েছিল, শেষে দেখা গেল সেটাই তাদের থেকে যাওয়ার কারণটা দূর করে দিল: যে শহর তারা ছাড়তে চায়নি, সেই শহরই মুসলিমদের হাতে এল, আর যে ব্যবসা নিয়ে তাদের ভয় ছিল, তা আর শত্রুর হাতে রইল না।"
          },
          {
            "en": "At-Tabari's gloss of the last clause keeps it practical rather than metaphysical: Allah does not grant success to good to those who leave His obedience and are in disobedience to Him. The sentence is not about a door being shut on them for ever; it is about what guidance is not given to a man for as long as he is in that state. And the verse's own imperative leaves the state open, because waiting is something a person can stop doing.",
            "bn": "শেষ কথাটির ব্যাখ্যায় তাবারী একে তত্ত্বের দিকে নেন না, রাখেন বাস্তব জীবনের মধ্যে: যারা আল্লাহর আনুগত্য ছেড়ে বেরিয়ে যায় আর তাঁর নাফরমানিতে লেগে থাকে, আল্লাহ তাদের ভালো কাজের তাওফীক দেন না। বাক্যটি বলছে না যে তাদের জন্য দরজা চিরকালের মতো বন্ধ; বলছে, মানুষ যতক্ষণ ওই অবস্থায় থাকে, ততক্ষণ কোন হিদায়াত থেকে সে বঞ্চিত থাকে। আর আয়াতের নিজের হুকুমই বুঝিয়ে দেয়, অবস্থাটা চিরস্থায়ী নয়, কারণ অপেক্ষা করা এমন কাজ, যা মানুষ চাইলে থামাতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Measure in a Hadith",
          "bn": "হাদিসে সেই মাপকাঠি"
        },
        "p": [
          {
            "en": "The Sunnah states the same measure in one line and makes it a condition of faith rather than a counsel of excellence. Sahih al-Bukhari 15 has from Anas (RA) that the Prophet ﷺ said: none of you will have faith until he loves me more than his father, his children and all mankind. Two of the eight items in our verse appear there by name and a third phrase covers everyone else, and the standard is put where the verse puts it, not at the level of feeling but at the level of ranking.",
            "bn": "সুন্নাহ একই মাপকাঠি এক লাইনে বলে দেয়, আর একে শুধু উঁচু স্তরের লোকদের উপদেশ নয়, ঈমানের শর্ত বানায়। সহীহ বুখারীর ১৫ নম্বর হাদিসে আনাস (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: তোমাদের কেউ মু'মিন হবে না, যতক্ষণ না আমি তার কাছে তার পিতা, তার সন্তান আর সব মানুষের চেয়ে বেশি প্রিয় হই। আমাদের আয়াতের আটটি জিনিসের দুটি সেখানে নাম ধরে এসেছে, আর তৃতীয় কথাটি বাকি সবাইকে শামিল করে। মাপকাঠিও রাখা হয়েছে সেখানেই, যেখানে আয়াত রেখেছে: অনুভূতির স্তরে নয়, অগ্রাধিকারের স্তরে।"
          },
          {
            "en": "As-Sa'di draws the conclusion for both texts together, and it is the largest claim he makes anywhere on this verse: this noble verse is the greatest proof of the obligation of loving Allah and His Messenger ﷺ, and of giving that love precedence over the love of everything, and of the severe threat against whoever has any of these mentioned things more beloved to him than Allah and His Messenger and striving in His way. Love, in that reading, is a duty with an order in it and not only a feeling that visits.",
            "bn": "সা'দী দুটি পাঠ মিলিয়ে সিদ্ধান্ত টানেন, আর এ আয়াত নিয়ে তাঁর সবচেয়ে বড় দাবিটাই এটি: এ মহান আয়াত সবচেয়ে বড় দলিল যে আল্লাহ ও তাঁর রাসূলকে ﷺ ভালোবাসা ওয়াজিব, সব কিছুর ভালোবাসার উপরে এ ভালোবাসাকে স্থান দেওয়া ওয়াজিব; আর যার কাছে উল্লেখ করা এসব জিনিসের কোনো একটি আল্লাহ, তাঁর রাসূল ﷺ আর তাঁর পথে জিহাদের চেয়ে বেশি প্রিয়, তার জন্য আছে কঠিন হুঁশিয়ারি। এ পাঠে ভালোবাসা কেবল মাঝে মাঝে জেগে ওঠা অনুভূতি নয়; এটি এমন এক দায়িত্ব, যার ভেতরে আগে-পরের একটা ক্রম আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on Ranking Love",
          "bn": "ভালোবাসার ক্রম নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "2:165 states the principle the verse is testing: among people are those who take others as equals to Allah and love them as Allah should be loved, but those who believe are stronger in love for Allah. 3:14 lists the same pull with different furniture, women and sons and heaped-up gold and silver and branded horses and cattle and tilled land, and calls it the enjoyment of worldly life. The two together show that the Quran treats this as a matter of degree and direction rather than of permission.",
            "bn": "আয়াত যে নীতির পরীক্ষা নিচ্ছে, তা বলে দেয় ২:১৬৫ আয়াত: মানুষের মধ্যে কেউ কেউ আল্লাহ ছাড়া অন্যদের তাঁর সমকক্ষ বানায়, আর আল্লাহকে যেমন ভালোবাসা উচিত, তেমন করে তাদের ভালোবাসে; কিন্তু যারা ঈমান এনেছে, আল্লাহর প্রতি তাদের ভালোবাসা আরও গভীর। ৩:১৪ আয়াত একই টানের কথা বলে অন্য জিনিসপত্রের তালিকা দিয়ে: নারী, সন্তান, স্তূপ করা সোনা-রুপা, চিহ্নিত ঘোড়া, গবাদি পশু আর খেতখামার; আর এসবকে বলে দুনিয়ার জীবনের ভোগের সামগ্রী। দুটো মিলিয়ে দেখা যায়, কুরআন একে অনুমতির প্রশ্ন হিসেবে দেখে না, দেখে মাত্রা আর অভিমুখের প্রশ্ন হিসেবে।"
          },
          {
            "en": "63:9 turns it into an instruction, that your wealth and your children must not divert you from the remembrance of Allah, and names the ones who let that happen the losers. 64:15 gives the same two items their status, that your wealth and your children are but a trial, with a great reward kept with Allah. And 58:22, which Ibn Kathir brings to the verse before ours, describes the people who passed this test with faith written in their hearts.",
            "bn": "৬৩:৯ আয়াতে এটাই নির্দেশ হয়ে আসে: তোমাদের সম্পদ আর সন্তান যেন তোমাদের আল্লাহর জিকির থেকে উদাসীন না করে; আর যারা এমন হতে দেয়, আয়াত তাদের বলে ক্ষতিগ্রস্ত। ৬৪:১৫ আয়াত এ দুটি জিনিসের আসল অবস্থান বলে দেয়: তোমাদের সম্পদ আর সন্তান তো কেবল পরীক্ষা, আর আল্লাহর কাছে আছে মহা প্রতিদান। আর ৫৮:২২ আয়াত, যা ইবনু কাসীর আমাদের আগের আয়াতের সঙ্গে আনেন, সেই লোকদের বর্ণনা দেয়, যারা এ পরীক্ষায় উতরে গেছে, যাদের অন্তরে আল্লাহ ঈমান লিখে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Ordering What You Love",
          "bn": "প্রিয় জিনিসের ক্রম ঠিক করা"
        },
        "p": [
          {
            "en": "The practical force of the verse is that it never asks anyone to love less. It asks for an order, and an order only shows itself when two loves pull in different directions, which is rarely and not on an ordinary day. That is why the honest way to use this verse is not to search one's feelings but to look at decisions already made: the job kept, the move refused, the silence held at a family table, the prayer that lost its slot in a week that had room for everything else.",
            "bn": "কাজের বেলায় আয়াতটির জোর এখানে: কাউকে সে কম ভালোবাসতে বলে না। সে চায় ভালোবাসার একটা সারি, কোনটা আগে আর কোনটা পরে। আর সেই সারি ধরা পড়ে কেবল তখন, যখন দুটি ভালোবাসা দুদিকে টানে; এমনটা ঘটে কালেভদ্রে, সাধারণ দিনে ঘটে না। তাই এ আয়াত কাজে লাগানোর সৎ উপায় নিজের মনের অনুভূতি হাতড়ানো নয়, বরং আগেই নেওয়া সিদ্ধান্তগুলোর দিকে তাকানো: যে চাকরিটা ধরে রেখেছেন, যেখানে চলে যাওয়ার কথা ছিল অথচ যাননি, পরিবারের আসরে যেখানে চুপ করে থেকেছেন, আর যে সপ্তাহে বাকি সবকিছুর জন্য সময় ছিল, সেই সপ্তাহে যে নামাজটা নিজের সময় হারিয়েছে।"
          },
          {
            "en": "The trade clause is the most modern-sounding thing in the list, because it names a fear about the future rather than a present loss. Nothing had gone wrong for the people it describes; they were holding on because something might. Anyone who has stayed in a wrong arrangement because of what leaving might cost has met the verse at exactly that point, and the verse's own answer to it is the one at-Tabari records: what they were told to wait for arrived, and it took their reason away.",
            "bn": "তালিকায় সবচেয়ে আধুনিক শোনায় ব্যবসার কথাটা, কারণ এতে আছে ভবিষ্যতের ভয়, এখনকার কোনো ক্ষতি নয়। যাদের কথা বলা হচ্ছে, তাদের কিছুই তখনো খারাপ হয়নি; তারা আঁকড়ে ধরে ছিল, কারণ খারাপ হতে পারে। ছেড়ে গেলে কী খোয়াতে হবে, সেই ভয়ে যে মানুষ কোনো ভুল ব্যবস্থায় আটকে থেকেছেন, আয়াতের সঙ্গে তাঁর দেখা ঠিক এই জায়গাতেই। আর এ ভয়ের জবাব আয়াতেই আছে, তাবারী যেমনটা লিখে রেখেছেন: যার জন্য তাদের অপেক্ষা করতে বলা হয়েছিল, তা এসে গেল, আর এসে কেড়ে নিল সেই জিনিসটাই, যার জন্য তারা থেকে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Right Order",
          "bn": "ঠিক সারিটা চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication and its imperative is a warning rather than a prayer, so what belongs here is the thing the Quran does put in a believer's mouth about love. 2:165 names the mark of those who pass, stronger in love for Allah, and it is that strength, not the removal of any other affection, that a person would ask for. The eight things on the scale are meant to be kept, provided for and enjoyed; only their order is at issue.",
            "bn": "আয়াতে কোনো দোয়া নেই, আর এর আদেশটাও দোয়া নয়, হুঁশিয়ারি। তাই এখানে মানায় সেই কথা, যা ভালোবাসা নিয়ে কুরআন নিজেই মু'মিনের মুখে তুলে দিয়েছে। ২:১৬৫ আয়াত উতরে যাওয়া লোকদের চিহ্ন বলে দেয়: আল্লাহর প্রতি ভালোবাসায় তারা আরও মজবুত। মানুষ চাইবে এই মজবুতিটাই, অন্য কোনো টান মুছে ফেলা নয়। পাল্লার ওই আটটি জিনিস রেখে দেওয়ার জন্যই; এদের দেখাশোনা করতে হবে, এদের নিয়ে আনন্দও করা যাবে। প্রশ্ন কেবল কোনটা আগে, কোনটা পরে।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, make Yourself and Your Messenger ﷺ more beloved to me than the eight things You named, without taking one of them from me. It is assembled from the verse's own scale, and it is not a Sunnah du'a. The hadith quoted above is a statement about faith rather than a prayer, and is to be carried as a measure.",
            "bn": "এ আয়াতের নিজের শব্দ দিয়ে একটা বাক্য যোগ করা যায়, তবে এর বেশি কিছু বলে দাবি করা যাবে না: হে আল্লাহ, আপনি যে আটটি জিনিসের নাম নিয়েছেন, সেগুলোর চেয়ে আপনাকে আর আপনার রাসূলকে ﷺ আমার কাছে বেশি প্রিয় করে দিন, আর ওগুলোর একটিও আমার কাছ থেকে কেড়ে না নিয়েই। বাক্যটি আয়াতের নিজের পাল্লা থেকেই গড়া; এটা সুন্নাহর দোয়া নয়। উপরে যে হাদিসটি এসেছে, সেটা দোয়া নয়, ঈমান নিয়ে একটি কথা; ওটাকে সঙ্গে রাখতে হবে মাপকাঠি হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About the Eight",
          "bn": "আটটি নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Of the eight, which one is mine? Not the one I would defend in an argument, but the one that actually decides how my week is spent. Every item on the list is legitimate, so have I been judging my attachments by whether they are permitted rather than by where they stand in the order? And the verse names a trade whose decline is feared rather than one that failed: what am I afraid of losing, and what is that fear already making me do?",
            "bn": "আটটির মধ্যে আমার কোনটা? তর্কের সময় যেটার পক্ষে দাঁড়াই সেটা নয়; আমার সপ্তাহটা কীভাবে কাটবে, আসলে যেটা তা ঠিক করে দেয়, সেটা। তালিকার প্রতিটি জিনিসই বৈধ। তাহলে কি আমি নিজের টানগুলো বিচার করে এসেছি শুধু জায়েজ কি না তা দেখে, সারিতে কোনটা কোথায় আছে তা দেখে নয়? আর আয়াত এমন ব্যবসার কথা বলে, যার মন্দার ভয় আছে, যে ব্যবসা ডুবে গেছে তার নয়। আমি কী হারানোর ভয় করি, আর সেই ভয় এখনই আমাকে দিয়ে কী করিয়ে নিচ্ছে?"
          },
          {
            "en": "Two more. Those who fail the test are told to wait, and what they were waiting for arrived as the loss of the thing they had stayed for: what am I waiting for, and would I recognise it if it came in that shape? And nothing in the verse asks me to feel less for anyone, so what would change tomorrow if the order were put right and every affection left exactly as it is?",
            "bn": "আরও দুটি প্রশ্ন। যারা পরীক্ষায় ফেল করে, তাদের অপেক্ষা করতে বলা হয়; আর যার অপেক্ষায় তারা ছিল, তা এল ঠিক সেই জিনিস হারানোর রূপে, যার জন্য তারা থেকে গিয়েছিল। আমি কীসের অপেক্ষায় আছি? সেটা যদি ওই রূপে আসে, আমি কি চিনতে পারব? আর আয়াতের কোথাও আমাকে কারও প্রতি টান কমাতে বলা হয়নি। তাহলে প্রতিটি টান যেমন আছে তেমন রেখে শুধু সারিটা ঠিক করে নিলে কাল থেকে কী বদলাত?"
          }
        ]
      }
    ]
  },
  "9:31": {
    "sections": [
      {
        "h": {
          "en": "The Charge After the Claim",
          "bn": "দাবির পরে অভিযোগ"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse follows directly on a quoted claim. 9:30 reports what was said about Uzayr and about the Messiah, calls it their saying with their mouths, and notes that in it they imitate the saying of those who disbelieved before. Ibn Kathir reads that clause as meaning they have no proof for the claim beyond what they have made up. Then our verse moves from a statement they made to a practice they had, and 9:32 and 9:33 close the passage with the light that will not be put out.",
            "bn": "সূরা তাওবা মাদানী। এ আয়াত আসে একটি দাবি উদ্ধৃত হওয়ার ঠিক পরে। ৯:৩০ আয়াত জানায়, উযাইর আর মাসীহ সম্পর্কে কী বলা হয়েছিল; বলে, এটা তাদের মুখের কথা মাত্র, আর এতে তারা আগের কাফিরদের কথারই নকল করছে। ইবনু কাসীর এর অর্থ করেন: নিজেদের বানানো কথা ছাড়া এ দাবির পক্ষে তাদের কোনো দলিল নেই। এরপর আমাদের আয়াত তাদের মুখের একটি কথা ছেড়ে তাদের একটি চালু অভ্যাসের দিকে যায়। আর ৯:৩২ ও ৯:৩৩ আয়াত এ অংশ শেষ করে সেই নূরের কথা বলে, যা নিভিয়ে দেওয়া যাবে না।"
          },
          {
            "en": "The charge in our verse is heavier than the one before it, and stranger. 9:30 reports words; 9:31 reports a relationship, and calls it lordship. What makes it stranger is that nothing in the description looks like worship: no image, no prayer addressed to the men named, no claim that they created anything. As-Sa'di introduces it as the cause underneath the claim, so that the extraordinary thing said in 9:30 became sayable because of the ordinary thing done in 9:31.",
            "bn": "আমাদের আয়াতের অভিযোগ আগেরটার চেয়ে ভারী, আর অদ্ভুতও। ৯:৩০ আয়াত জানায় কিছু কথা; ৯:৩১ আয়াত জানায় একটা সম্পর্ক, আর সেটাকে বলে রব বানানো। অদ্ভুত এ কারণে যে, বর্ণনার কোথাও ইবাদতের চেহারা নেই: কোনো মূর্তি নেই, যাদের নাম এসেছে তাদের কাছে কোনো দোয়া নেই, তারা কিছু সৃষ্টি করেছে এমন দাবিও নেই। সা'দী এটাকে দেখান ওই দাবির গোড়ার কারণ হিসেবে। অর্থাৎ ৯:৩১ আয়াতের সাধারণ কাজটা করা হতো বলেই ৯:৩০ আয়াতের অসাধারণ কথাটা মুখে আনা সম্ভব হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Ahbar, and Ink",
          "bn": "আহবার, আর কালি"
        },
        "p": [
          {
            "en": "At-Tabari begins with the two words for the men. Ahbar he glosses simply as the scholars, and he records a small dispute about how the singular is pronounced: habr with a fatha or hibr with a kasra. Yunus al-Jarmi is reported as saying he had heard only hibr, and arguing from ordinary usage, since people say this is the ink of a hibr meaning the ink of a scholar; al-Farra' said he had heard it both ways. The word for a learned man and the word for ink sit in the same shape.",
            "bn": "তাবারী শুরু করেন ওই লোকদের বোঝাতে আসা দুটি শব্দ দিয়ে। আহবার শব্দের অর্থ তিনি সোজা বলেন: আলিমগণ। এর একবচন কীভাবে উচ্চারিত হবে, তা নিয়ে একটা ছোট মতভেদও লিখে রাখেন: যবর দিয়ে হাবর, নাকি যের দিয়ে হিবর। ইউনুস আল-জারমী থেকে বর্ণিত, তিনি কেবল হিবরই শুনেছেন; আর দলিল দিতেন লোকমুখের ব্যবহার থেকে, কারণ লোকে বলে 'এটা হিবরের কালি', মানে আলিমের কালি। ফাররা বলেছেন, তিনি দুভাবেই শুনেছেন। আলিম আর কালি, দুটোর শব্দ একই ছাঁচের।"
          },
          {
            "en": "Ruhban he glosses as the people of the cells and those among them who strive hard in their religion, and he carries from ad-Dahhak the shorter pairing, their reciters and their scholars. As-Sa'di describes the second group as the devotees given wholly to worship. Neither commentator treats these men as frauds. They are the learned and the ascetic, the two kinds of people a religious community naturally trusts most, which is what makes the verse's charge land where it does.",
            "bn": "রুহবান শব্দের অর্থ তিনি বলেন: কুঠুরিতে থাকা লোকেরা, আর তাদের মধ্যে যারা দীনের পথে কঠোর সাধনা করে। দাহহাক থেকে তিনি আরও ছোট একটা জোড়া আনেন: তাদের কারী আর তাদের আলিম। সা'দী দ্বিতীয় দলটিকে বলেন এমন সাধক, যারা পুরোপুরি ইবাদতে ডুবে থাকে। দুই মুফাসসিরের কেউই এদের ঠগ বলেন না। এরা আলিম আর সাধক, একটা ধর্মীয় সমাজ স্বভাবতই যে দুই ধরনের মানুষকে সবচেয়ে বেশি ভরসা করে। এ কারণেই আয়াতের অভিযোগ গিয়ে লাগে ঠিক ওই জায়গায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Lordship Meant Here",
          "bn": "এখানে রব মানে কী"
        },
        "p": [
          {
            "en": "At-Tabari defines the phrase exactly, and the definition is the whole verse: lords for them besides Allah means chiefs whom they obey in disobedience to Allah, so that they make lawful what those men made lawful for them of what Allah had forbidden them, and they forbid what those men forbade them of what Allah had made lawful for them. Lordship, on that reading, is not a title anyone claimed. It is what happens when a verdict of lawful or unlawful is accepted from a man against what Allah had said.",
            "bn": "তাবারী কথাটির নিখুঁত সংজ্ঞা দেন, আর সেই সংজ্ঞাতেই গোটা আয়াত: 'আল্লাহকে বাদ দিয়ে তাদের রব' মানে এমন নেতা, আল্লাহর নাফরমানি করে হলেও যাদের কথা তারা মানে। আল্লাহ যা হারাম করেছেন, ওই লোকেরা তা হালাল করলে তারা হালাল মানে; আর আল্লাহ যা হালাল করেছেন, ওরা তা হারাম করলে তারা হারাম মানে। এ ব্যাখ্যায় রব হওয়া এমন কোনো পদবি নয়, যা কেউ দাবি করেছিল। এটা ঘটে তখনই, যখন আল্লাহর কথার বিপরীতে কোনো মানুষের দেওয়া হালাল-হারামের রায় মেনে নেওয়া হয়।"
          },
          {
            "en": "As-Sa'di gives the same definition and adds a third element to it, that they legislate for them laws and statements contrary to the religion of the messengers, and they follow them in it. He then names a further practice as his own observation of those communities: that they went to excess concerning their shaykhs and devotees and venerated them, and took their graves as idols worshipped besides Allah, sought with sacrifices and supplication and calls for help. The first charge is about rulings; the second is about graves.",
            "bn": "সা'দীও একই সংজ্ঞা দেন, সঙ্গে তৃতীয় একটা দিক যোগ করেন: ওরা তাদের জন্য রাসূলদের দীনের বিপরীত বিধান আর কথা বানায়, আর তারা তাতে ওদের অনুসরণ করে। এরপর তিনি ওই সমাজগুলোতে নিজের দেখা আরেকটি চর্চার কথা বলেন: তারা নিজেদের শাইখ আর সাধকদের নিয়ে বাড়াবাড়ি করত, তাদের অতিভক্তি করত, আর তাদের কবরকে বানিয়ে নিত মূর্তি। আল্লাহকে বাদ দিয়ে সেগুলোর ইবাদত হতো; সেখানে কুরবানি দেওয়া হতো, দোয়া করা হতো, সাহায্য চাওয়া হতো। প্রথম অভিযোগ বিধান নিয়ে, দ্বিতীয়টি কবর নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hadith That Defines It",
          "bn": "যে হাদিস এর মানে ঠিক করে দেয়"
        },
        "p": [
          {
            "en": "The commentators do not leave the definition to themselves. At-Tabari records, with its chain, that Adi ibn Hatim (RA) came to the Prophet ﷺ while he was reciting in Surah Bara'ah the words about taking scholars and monks as lords, and that the Prophet ﷺ said: they did not worship them, but they used to make lawful for them and they would accept it as lawful. The whole difficulty of the verse is answered in that one sentence, and it is answered by lowering the bar, not raising it.",
            "bn": "সংজ্ঞার ভার মুফাসসিরগণ শুধু নিজেদের কাঁধে রাখেন না। তাবারী সনদসহ লিখে রাখেন: আদী ইবনু হাতিম (রাঃ) নবীর ﷺ কাছে এলেন, তখন তিনি সূরা বারাআতে আলিম আর দরবেশদের রব বানানোর আয়াত পড়ছিলেন। নবী ﷺ বললেন: তারা ওদের ইবাদত করত না; তবে ওরা তাদের জন্য কিছু হালাল করে দিলে তারা সেটা হালাল বলে মেনে নিত। আয়াতের পুরো জটিলতার জবাব ওই এক বাক্যেই। আর জবাবটা আসে মাপকাঠি নিচে নামিয়ে, উপরে তুলে নয়।"
          },
          {
            "en": "Ibn Kathir notes that Imam Ahmad, at-Tirmidhi and Ibn Jarir at-Tabari all recorded the hadith. Jami at-Tirmidhi 3095 preserves it from Adi ibn Hatim (RA), where it opens with the Prophet ﷺ telling him to remove the cross he was wearing before explaining the verse to him. The scene matters: a man who had come to the Prophet ﷺ was told first about an object and then about a habit, and it was the habit the verse had called lordship.",
            "bn": "ইবনু কাসীর উল্লেখ করেন, ইমাম আহমাদ, তিরমিযী আর ইবনু জারীর তাবারী সবাই হাদিসটি বর্ণনা করেছেন। জামি আত-তিরমিযীর ৩০৯৫ নম্বরে আদী ইবনু হাতিম (রাঃ) থেকে এটি আছে। সেখানে শুরুতেই নবী ﷺ তাঁকে গলার ক্রুশটা খুলে ফেলতে বলেন, তারপর আয়াতটি বুঝিয়ে দেন। দৃশ্যটা গুরুত্বপূর্ণ: নবীর ﷺ কাছে আসা এক মানুষকে প্রথমে বলা হলো একটা জিনিসের কথা, তারপর একটা অভ্যাসের কথা। আর আয়াত যেটাকে রব বানানো বলেছিল, তা ওই অভ্যাসটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Only One Was Commanded",
          "bn": "হুকুম ছিল কেবল একজনেরই"
        },
        "p": [
          {
            "en": "The verse does not stop at the charge; it states the original instruction against which the charge is measured. They were not commanded except to worship one God, there is no deity except Him. As-Sa'di reads the clause as covering more than ritual: that they devote worship and obedience to Him alone, and single Him out for love and supplication. Obedience and love are placed inside the same command as worship, which is why a transfer of obedience could be called a transfer of lordship.",
            "bn": "আয়াত অভিযোগ করেই থেমে যায় না; যে মূল হুকুমের সঙ্গে মিলিয়ে অভিযোগটা মাপা হচ্ছে, সেটাও বলে দেয়: তাদের তো কেবল এক ইলাহের ইবাদত করার হুকুম দেওয়া হয়েছিল, তিনি ছাড়া কোনো ইলাহ নেই। সা'দীর মতে এ কথা শুধু আনুষ্ঠানিক ইবাদতে সীমিত নয়: ইবাদত আর আনুগত্য হবে খাঁটিভাবে কেবল তাঁর জন্য, ভালোবাসা আর দোয়াও হবে কেবল তাঁরই জন্য। তাহলে আনুগত্য আর ভালোবাসা ইবাদতের একই হুকুমের ভেতরে পড়ে। এ কারণেই আনুগত্য অন্যের হাতে তুলে দেওয়াকে রবের আসন অন্যের হাতে তুলে দেওয়া বলা যায়।"
          },
          {
            "en": "Then the closing formula, exalted is He above whatever they associate with Him. As-Sa'di reads it as a statement about their claim rather than only about His majesty: in that they diminish Him and describe Him with what does not befit His majesty, and Allah is high in His attributes and His acts above everything ascribed to Him that contradicts His holy perfection. The verse ends, that is, by defending Him against a description rather than by threatening them.",
            "bn": "এরপর শেষের বাক্য: তারা যা শরীক করে, তিনি তার বহু ঊর্ধ্বে। সা'দী এটাকে শুধু তাঁর মহিমার কথা হিসেবে পড়েন না, তাদের দাবির জবাব হিসেবেও পড়েন: এ কাজে তারা তাঁকে ছোট করে, তাঁর মহিমার সঙ্গে যা মানায় না তা দিয়ে তাঁর বর্ণনা দেয়; অথচ আল্লাহ তাঁর গুণে ও কাজে সেসব কিছুর অনেক ঊর্ধ্বে, যা তাঁর পবিত্র পূর্ণতার বিপরীত হয়েও তাঁর দিকে জোড়া হয়। অর্থাৎ আয়াত শেষ হয় তাদের হুমকি দিয়ে নয়; তাঁর সম্পর্কে একটা ভুল বর্ণনা খণ্ডন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on One Authority",
          "bn": "এক কর্তৃত্ব নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "3:64 is the verse that puts our verse's charge into an invitation, calling the People of the Scripture to a word that is equitable between us and you, that we will worship none but Allah, associate nothing with Him, and not take one another as lords instead of Allah. The last clause is the same phrase our verse uses, offered as common ground rather than as an accusation, which tells a reader that the fault named here is one any community can fall into.",
            "bn": "৩:৬৪ আয়াত আমাদের আয়াতের অভিযোগটাকেই দাওয়াতে বদলে দেয়। সেখানে আহলে কিতাবকে ডাকা হয় এমন এক কথার দিকে, যা আমাদের আর তোমাদের মধ্যে সমান: আমরা আল্লাহ ছাড়া কারও ইবাদত করব না, তাঁর সঙ্গে কিছু শরীক করব না, আর আল্লাহকে ছেড়ে একে অন্যকে রব বানাব না। শেষ কথাটা হুবহু আমাদের আয়াতের কথা; তবে সেখানে তা অভিযোগ হিসেবে নয়, সবার মিলিত ভিত্তি হিসেবে রাখা হয়েছে। এ থেকে পাঠক বোঝেন, এখানে যে দোষের কথা বলা হচ্ছে, তাতে যে কোনো সমাজই পড়তে পারে।"
          },
          {
            "en": "42:21 states the same thing as a question: or have they partners who have ordained for them a religion to which Allah has not consented? That is as-Sa'di's third element in the form of a rebuke. 5:77 addresses the excess itself, telling the People of the Scripture not to exceed limits in their religion beyond the truth and not to follow the inclinations of a people who had gone astray before, which is where the practice in our verse comes from.",
            "bn": "৪২:২১ আয়াত একই কথা বলে প্রশ্নের সুরে: তাদের কি এমন শরীক আছে, যারা তাদের জন্য দীনের এমন বিধান দিয়েছে, যার অনুমতি আল্লাহ দেননি? এটাই সা'দীর তৃতীয় দিক, তবে তিরস্কারের রূপে। আর ৫:৭৭ আয়াত সরাসরি বাড়াবাড়িটাকেই ধরে। সেখানে আহলে কিতাবকে বলা হয়, তারা যেন নিজেদের দীনে সত্য ছাড়িয়ে বাড়াবাড়ি না করে, আর আগে পথভ্রষ্ট হওয়া এক জাতির খেয়াল-খুশির অনুসরণ না করে। আমাদের আয়াতের ওই চর্চার শিকড়ও সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Your Verdicts Come From",
          "bn": "আপনার রায় আসে কোথা থেকে"
        },
        "p": [
          {
            "en": "The verse is uncomfortable precisely because the hadith lowers its bar. If lordship required an altar, almost nobody would be at risk. If it requires only accepting a verdict of lawful or unlawful from a man against what Allah has said, then the exposure is ordinary and it belongs to religious people rather than to anyone else, because it is religious people who take such verdicts at all.",
            "bn": "আয়াতটি অস্বস্তিকর ঠিক এ কারণেই যে হাদিস এর মাপ নিচে নামিয়ে দেয়। রব বানানোর জন্য যদি কোনো বেদি লাগত, তবে প্রায় কেউই ঝুঁকিতে থাকত না। আর যদি কেবল এটুকুই লাগে যে আল্লাহ যা বলেছেন তার বিপরীতে কোনো মানুষের কাছ থেকে হালাল বা হারামের রায় মেনে নেওয়া, তবে ঝুঁকিটা একেবারে সাধারণ, আর সেটা অন্য কারও নয়, দীনদার মানুষেরই; কারণ এ ধরনের রায় তো নেয় দীনদার মানুষই।"
          },
          {
            "en": "The useful test is not whether a person follows scholars, which the religion requires of anyone who cannot examine a matter himself, but what happens at the point of conflict: when a ruling he has been given turns out to sit against something the Book or the Sunnah says plainly, does he look again, or does he keep the ruling because of who gave it? At-Tabari's definition turns on exactly that word, in disobedience to Allah, and it is the only part of this that a reader can check in himself.",
            "bn": "আসল যাচাই এই নয় যে কেউ আলিমদের অনুসরণ করে কি না; যে নিজে কোনো বিষয় যাচাই করতে পারে না, দীন তো তাকে সেটাই করতে বলে। যাচাইটা হয় টানাপোড়েনের মুহূর্তে: তাকে বলা কোনো মাসআলা যখন দেখা যায় আল্লাহর কিতাব বা সুন্নাহর স্পষ্ট কথার বিপরীতে যাচ্ছে, তখন সে কি আবার ভেবে দেখে, নাকি কে বলেছেন সেই খাতিরে মাসআলাটা আঁকড়ে থাকে? তাবারীর সংজ্ঞা ঘোরে ঠিক ওই কথাটার ওপর: আল্লাহর নাফরমানিতে। পুরো বিষয়ের মধ্যে কেবল এ অংশটুকুই পাঠক নিজের ভেতরে যাচাই করে দেখতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for One Master",
          "bn": "এক মালিক চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "The verse carries no supplication, and what stands in its place is the sentence it quotes as the original command: to worship one God, there is no deity except Him. That clause is already the shortest prayer in the language of this passage, and a believer who says it is asserting exactly what the verse says was asked of them and of everyone before them.",
            "bn": "আয়াতে কোনো দোয়া নেই। এর জায়গায় আছে সেই বাক্য, যা আয়াত মূল হুকুম হিসেবে উদ্ধৃত করে: এক ইলাহের ইবাদত করা, তিনি ছাড়া কোনো ইলাহ নেই। এ অংশের ভাষায় এটাই সবচেয়ে ছোট দোয়া। যে মু'মিন কথাটা বলেন, তিনি ঠিক সেটাই ঘোষণা করেন, আয়াতের ভাষায় যা তাদের কাছে এবং তাদের আগের সবার কাছে চাওয়া হয়েছিল।"
          },
          {
            "en": "A sentence in the verse's own vocabulary can be added and claimed as no more than that: O Allah, let no one hold over me the right that is Yours alone, to call a thing lawful or unlawful, and keep my respect for the learned from turning into obedience against You. It is assembled from at-Tabari's definition and the verse's closing declaration, and it is not a Sunnah du'a. The hadith of Adi ibn Hatim (RA) quoted above is an explanation rather than a prayer.",
            "bn": "আয়াতের নিজের শব্দ দিয়ে একটা বাক্য যোগ করা যায়, তবে এর বেশি কিছু বলে দাবি করা যাবে না: হে আল্লাহ, যে অধিকার কেবল আপনার, কোনো জিনিসকে হালাল বা হারাম বলার অধিকার, তা আমার ওপর আর কারও হাতে দেবেন না; আর আলিমদের প্রতি আমার শ্রদ্ধা যেন কখনো আপনার বিরুদ্ধে তাঁদের আনুগত্যে বদলে না যায়। বাক্যটি তাবারীর সংজ্ঞা আর আয়াতের শেষ ঘোষণা মিলিয়ে বানানো; এটা সুন্নাহর দোয়া নয়। উপরে আদী ইবনু হাতিমের (রাঃ) যে হাদিস এসেছে, সেটা দোয়া নয়, ব্যাখ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Deference",
          "bn": "মেনে নেওয়া নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Whose permission do I actually wait for before deciding that something is fine? Is there a ruling I follow because of who said it rather than because of what it rests on, and have I ever gone back to check? And the verse says they were commanded only to worship one God: what have I added to that, in practice, which now feels as binding as the thing itself?",
            "bn": "কোনো কিছু ঠিক আছে, এ সিদ্ধান্ত নেওয়ার আগে আমি আসলে কার অনুমতির অপেক্ষায় থাকি? এমন কোনো মাসআলা কি আমি মানি, যা মানি কে বলেছেন সেই খাতিরে, সেটা কীসের ওপর দাঁড়িয়ে আছে তা দেখে নয়? কখনো কি ফিরে গিয়ে যাচাই করেছি? আর আয়াত বলে, তাদের হুকুম দেওয়া হয়েছিল কেবল এক ইলাহের ইবাদতের। বাস্তবে আমি এর সঙ্গে কী জুড়ে নিয়েছি, যা এখন আসল হুকুমের মতোই ফরজ মনে হয়?"
          },
          {
            "en": "Two more. Deference is easy to confuse with respect, so where would disagreeing with somebody I admire cost me something, and does that cost quietly shape what I end up concluding? And if a stranger described my habits without using any religious words at all, would lordship be a fair name for anything in them?",
            "bn": "আরও দুটি প্রশ্ন। মেনে চলাকে সম্মানের সঙ্গে গুলিয়ে ফেলা সহজ। তাহলে যাঁকে আমি শ্রদ্ধা করি, তাঁর সঙ্গে দ্বিমত করলে কোথায় আমাকে মূল্য দিতে হবে? আর সেই মূল্যই কি চুপিচুপি ঠিক করে দেয়, শেষে আমি কোন সিদ্ধান্তে পৌঁছাব? আর কোনো অচেনা মানুষ যদি ধর্মের একটা শব্দও না বলে আমার অভ্যাসগুলোর বর্ণনা দেয়, তাহলে সেগুলোর কোনোটিকে কি ন্যায্যভাবে রব বানানো বলা যাবে?"
          }
        ]
      }
    ]
  },
  "9:40": {
    "sections": [
      {
        "h": {
          "en": "Help Already Given",
          "bn": "সাহায্য তো আগেই এসেছে"
        },
        "p": [
          {
            "en": "The verse is spoken into the reproach over Tabuk. In 9:38 the believers are asked why, when told to go forth in the way of Allah, they cling heavily to the earth, and 9:39 warns that they could be replaced by another people. Al-Qurtubi says illa tansuruhu, if you do not help him, means helping him by marching out with him to Tabuk, and that Allah reproached them after His Prophet ﷺ had returned from it.",
            "bn": "আয়াতটি এসেছে তাবুক অভিযান নিয়ে তিরস্কারের মাঝখানে। ৯:৩৮ আয়াতে আল্লাহ মুমিনদের জিজ্ঞেস করেন, আল্লাহর পথে বের হতে বলা হলে তোমরা মাটি আঁকড়ে ভারী হয়ে পড়ো কেন। ৯:৩৯ আয়াত সতর্ক করে, তাদের জায়গায় অন্য এক জাতিকে আনা হতে পারে। কুরতুবী বলেন, ইল্লা তানসুরূহু, অর্থাৎ যদি তোমরা তাঁকে সাহায্য না করো, এর মানে তাবুকে তাঁর সঙ্গে বেরিয়ে তাঁকে সাহায্য করা। নবী ﷺ সেখান থেকে ফিরে আসার পর আল্লাহ তাদের তিরস্কার করেন।"
          },
          {
            "en": "At-Tabari reads the verse as Allah informing the Companions that He has taken charge of helping His Messenger against the enemies of his religion, whether they helped him or not, and reminding them that He did so when the Prophet ﷺ had few with him and his enemy was many. How then, he asks, now that his numbers are many and the enemy's few? Mujahid, in his report, hears a promise: I will help him as I helped him then. As-Sa'di adds that Allah has no need of them, and helped him at his fewest and weakest.",
            "bn": "তাবারীর পাঠে আয়াতটি সাহাবীদের প্রতি আল্লাহর এক ঘোষণা। রাসূলকে তাঁর দ্বীনের শত্রুদের বিরুদ্ধে সাহায্য করার দায়িত্ব আল্লাহ নিজেই নিয়েছেন, তারা সাহায্য করুক বা না করুক। সঙ্গে একটা কথা মনে করিয়ে দেওয়া হচ্ছে: নবী ﷺ-এর সঙ্গী যখন অল্প আর শত্রু অনেক, তখনই আল্লাহ তাঁকে সাহায্য করেছেন। তাবারী প্রশ্ন রাখেন, তাহলে এখন, যখন তাঁর লোক অনেক আর শত্রু অল্প, তখন কেমন হবে? তাবারীর বর্ণনায় মুজাহিদ এতে একটা প্রতিশ্রুতি শোনেন: তখন যেভাবে সাহায্য করেছি, এখনো সেভাবেই করব। সা'দী যোগ করেন, তাদের প্রতি আল্লাহর কোনো প্রয়োজন নেই। তিনি তাঁকে সাহায্য করেছেন একেবারে অল্প ও দুর্বল অবস্থায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Driven Out, One of Two",
          "bn": "বিতাড়িত, দুজনের একজন"
        },
        "p": [
          {
            "en": "Idh akhrajahu alladhina kafaru: when those who disbelieved drove him out. Ibn Kathir places it in the year of the Hijrah, when the idolaters resolved to kill him, imprison him or banish him, the three choices 8:30 names. At-Tabari says they were of Quraysh and drove him from his homeland and his house. Al-Qurtubi notes that the Prophet ﷺ in fact left of his own accord, in flight, yet the verse ascribes the act to them, because it was their pressure that forced him to it.",
            "bn": "ইয আখরাজাহুল্লাযীনা কাফারূ: যখন কাফিররা তাঁকে বের করে দিয়েছিল। ইবন কাসীর এটিকে হিজরতের বছরের ঘটনা বলেন। মুশরিকরা তখন তাঁকে হত্যা, বন্দি বা নির্বাসনের ফন্দি এঁটেছিল, ঠিক যে তিনটি পথের কথা ৮:৩০ আয়াতে আছে। তাবারী বলেন, এরা কুরাইশের লোক। তারা তাঁকে তাঁর জন্মভূমি ও ঘর থেকে বের করে দিয়েছিল। কুরতুবী একটা সূক্ষ্ম দিক দেখান। নবী ﷺ আসলে নিজেই বের হয়েছিলেন, পালিয়ে। তবু আয়াত কাজটাকে তাদের নামে লিখেছে, কারণ তাদের চাপই তাঁকে এতে বাধ্য করেছিল।"
          },
          {
            "en": "Thaniya ithnayn, the second of two. At-Tabari explains the idiom: the Arabs say huwa thani ithnayn for one of the two, as thalith thalatha is one of three, unlike akhu sitta, said of a brother who stands outside the count he is named by. Al-Qurtubi reads it as a state: they sent him out alone of all people except Abu Bakr. At-Tabari names the pair, the Messenger of Allah ﷺ and Abu Bakr (RA), the two who fled from Quraysh and hid in the cave; al-Baghawi, as-Sa'di and the Muyassar name the same two.",
            "bn": "সানিয়াসনাইন: দুজনের দ্বিতীয়জন। তাবারী বাগধারাটি বুঝিয়ে দেন। আরবরা 'সানিস নাইন' বলে বোঝায় দুজনের একজন, যেমন 'সালিসু সালাসা' মানে তিনজনের একজন। 'আখু সিত্তা', অর্থাৎ ছয়জনের ভাই, এর থেকে আলাদা, কারণ সেখানে ভাই ওই ছয়জনের বাইরের কেউ। কুরতুবী শব্দটিকে অবস্থার বর্ণনা ধরেন: তারা তাঁকে বের করেছিল সব মানুষ থেকে একা করে, শুধু আবু বকর ছাড়া। দুজন কারা, তাবারী তা নাম ধরে বলেন: আল্লাহর রাসূল ﷺ আর আবু বকর (রাঃ)। তাঁরাই কুরাইশের হাত থেকে পালিয়ে গুহায় লুকিয়েছিলেন। বাগাভী, সা'দী ও মুয়াসসারও একই দুজনের নাম বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Nights in Thawr",
          "bn": "সাওরের গুহায় তিন রাত"
        },
        "p": [
          {
            "en": "Idh huma fil-ghar: when the two were in the cave. At-Tabari defines a ghar as a great hollow in a mountain, reports from Qatada that it is a mountain at Makkah called Thawr, and from az-Zuhri that they stayed there three nights. Ibn Kathir gives the purpose: to wait until the search parties turned back. Al-Baghawi quotes, through al-Bukhari's chain, 'Aishah's (RA) account: Asma' cut her waistband to tie their food bag, 'Abdullah ibn Abi Bakr brought them the news of Makkah each night, and 'Amir ibn Fuhayrah grazed sheep near them and brought milk.",
            "bn": "ইয হুমা ফিল গার: যখন তাঁরা দুজন গুহায় ছিলেন। তাবারীর সংজ্ঞায় 'গার' হলো পাহাড়ের বড় গহ্বর। কাতাদা থেকে তিনি বর্ণনা করেন, এটি মক্কার সাওর নামের এক পাহাড়ে। যুহরী থেকে বর্ণনা করেন, তাঁরা সেখানে তিনটি রাত কাটান। উদ্দেশ্য কী ছিল, ইবন কাসীর বলেন: পিছু নেওয়া দলগুলো ফিরে না যাওয়া পর্যন্ত অপেক্ষা। বাগাভী বুখারীর সনদে আয়েশা (রাঃ)-এর বর্ণনা উদ্ধৃত করেন। খাবারের থলের মুখ বাঁধতে আসমা (রাঃ) নিজের কোমরবন্ধ ছিঁড়ে দেন। আবদুল্লাহ ইবন আবি বকর প্রতি রাতে মক্কার খবর নিয়ে আসতেন। আমির ইবন ফুহাইরা কাছেই ছাগল চরাতেন আর তাঁদের দুধ পৌঁছে দিতেন।"
          },
          {
            "en": "Al-Qurtubi draws a lesson from the hiding itself. It shows, he says, that one may flee for one's religion out of fear of an enemy and conceal oneself in caves, rather than hand oneself to the enemy in the name of trusting Allah. Had Allah willed He could have protected His Prophet ﷺ in their midst, but this is His way with prophets and others. Al-Qurtubi calls it the clearest proof against anyone who says that fearing something besides Allah is a flaw in one's reliance on Him.",
            "bn": "লুকিয়ে থাকার ঘটনা থেকেই কুরতুবী একটা শিক্ষা বের করেন। তাঁর মতে এতে প্রমাণ মেলে, শত্রুর ভয়ে দ্বীন নিয়ে পালানো আর গুহায় আত্মগোপন করা জায়েয। আল্লাহর উপর ভরসার নাম করে নিজেকে শত্রুর হাতে তুলে দিতে হবে, এমন নয়। আল্লাহ চাইলে শত্রুদের মাঝখানেই তাঁর নবী ﷺ-কে রক্ষা করতে পারতেন। কিন্তু নবী ও অন্যদের বেলায় এটাই আল্লাহর নিয়ম। কেউ যদি বলে, আল্লাহর পাশাপাশি আর কিছুকে ভয় করা তাওয়াক্কুলের ত্রুটি, কুরতুবীর কাছে এ ঘটনা তার বিরুদ্ধে সবচেয়ে স্পষ্ট দলিল।"
          }
        ]
      },
      {
        "h": {
          "en": "I Am His Companion",
          "bn": "আমিই তাঁর সঙ্গী"
        },
        "p": [
          {
            "en": "Idh yaqulu li-sahibihi: when he said to his companion. Every commentary fetched for this verse names the companion as Abu Bakr (RA); Ibn Kathir calls him the Prophet's ﷺ friend and companion, Abu Bakr ibn Abi Quhafah. As-Sa'di writes that the verse gives Abu Bakr as-Siddiq a merit shared by none other in this community, and that the Muslims agree that he is the person meant. The Muyassar ends its brief gloss on the same note: in this verse is a great virtue of Abu Bakr as-Siddiq (RA).",
            "bn": "ইয ইয়াকূলু লিসাহিবিহী: যখন তিনি তাঁর সঙ্গীকে বলছিলেন। এ আয়াতের যত তাফসীর সামনে আছে, সবগুলোই সঙ্গীর নাম বলে আবু বকর (রাঃ)। ইবন কাসীর তাঁকে বলেন নবী ﷺ-এর বন্ধু ও সাথি, আবু বকর ইবন আবি কুহাফা। সা'দী লেখেন, এ আয়াতে আবু বকর সিদ্দীকের এমন এক মর্যাদা আছে, যা এই উম্মতে আর কারও নেই। তিনি আরও বলেন, আয়াতে যে তিনিই উদ্দেশ্য, এ ব্যাপারে মুসলিমরা একমত। মুয়াসসার তার ছোট ব্যাখ্যা শেষ করে এই কথায়: এ আয়াতে আবু বকর সিদ্দীক (রাঃ)-এর বড় ফজিলত রয়েছে।"
          },
          {
            "en": "At-Tabari preserves how the companion himself heard it. When Abu Bakr gave a sermon he asked who could recite Surat at-Tawbah; a man recited it, and when he reached when he said to his companion, do not grieve, Abu Bakr wept and said: I, by Allah, am his companion. At-Tabari gives it with his chain and no grading. Al-Baghawi reports from ash-Sha'bi that in this verse Allah reproached all the people of the earth except Abu Bakr, and al-Qurtubi cites Sufyan ibn 'Uyaynah that this verse took him out of the reproach.",
            "bn": "সঙ্গী নিজে আয়াতটি কীভাবে শুনেছিলেন, তাবারী তার একটি বর্ণনা রেখে গেছেন। আবু বকর (রাঃ) একবার খুতবায় জিজ্ঞেস করলেন, তোমাদের মধ্যে কে সূরা তাওবা পড়তে পারে? একজন বললেন, আমি। তিনি পড়তে লাগলেন। 'যখন তিনি তাঁর সঙ্গীকে বলছিলেন, দুঃখ করো না' পর্যন্ত পৌঁছাতেই আবু বকর কেঁদে ফেললেন আর বললেন: আল্লাহর কসম, আমিই তাঁর সেই সঙ্গী। তাবারী এটি নিজের সনদে আনেন, কোনো মান উল্লেখ করেন না। বাগাভী শা'বী থেকে বর্ণনা করেন, এ আয়াতে আল্লাহ পৃথিবীর সব মানুষকে তিরস্কার করেছেন, আবু বকর ছাড়া। কুরতুবী সুফিয়ান ইবন উয়াইনার কথা আনেন: এ আয়াত তাঁকে ওই তিরস্কারের বাইরে রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Whose Third Is Allah",
          "bn": "দুজন, যাঁদের তৃতীয় আল্লাহ"
        },
        "p": [
          {
            "en": "The scene in the cave is told by Abu Bakr himself in Sahih al-Bukhari 3653, through Anas: I said to the Prophet ﷺ while I was in the Cave, If any of them should look under his feet, he would see us. He said, O Abu Bakr! What do you think of two (persons) the third of whom is Allah? Its standing is that of al-Bukhari's Sahih. Ibn Kathir cites the same narration through Imam Ahmad and says it is recorded in the two Sahihs.",
            "bn": "গুহার দৃশ্যটি আবু বকর (রাঃ) নিজেই বর্ণনা করেছেন, আনাস (রাঃ)-এর মাধ্যমে, সহীহ বুখারী ৩৬৫৩ নম্বরে: আমি গুহায় থাকা অবস্থায় নবী ﷺ-কে বললাম, ওদের কেউ যদি নিজের পায়ের নিচে তাকায়, তাহলেই আমাদের দেখে ফেলবে। তিনি বললেন, হে আবু বকর! সেই দুজন সম্পর্কে তোমার কী ধারণা, যাঁদের তৃতীয়জন আল্লাহ? বর্ণনাটির মান সহীহ বুখারীর মান। ইবন কাসীর এটি ইমাম আহমাদের সূত্রে এনে বলেন, দুই সহীহ গ্রন্থেই এটি আছে।"
          },
          {
            "en": "Inna Allaha ma'ana: Allah is with us. At-Tabari spells out the Prophet's ﷺ meaning: do not grieve, for Allah is with us and Allah is our helper, so the idolaters will not learn of us and will not reach us. Al-Qurtubi glosses the withness as help, care, protection and guarding, and quotes al-Muhasibi on the hadith: Allah was with the two by help and defence, not in the general sense that covers all creatures, as in 58:7, where He is the fourth of any three who confer, hearing and seeing disbeliever and believer alike.",
            "bn": "ইন্নাল্লাহা মাআনা: আল্লাহ আমাদের সঙ্গে আছেন। নবী ﷺ কী বোঝাতে চেয়েছিলেন, তাবারী খুলে বলেন: দুঃখ করো না, আল্লাহ আমাদের সঙ্গে, আল্লাহই আমাদের সাহায্যকারী। মুশরিকরা আমাদের খোঁজ পাবে না, আমাদের কাছে পৌঁছাতেও পারবে না। কুরতুবী এই সঙ্গে থাকার ব্যাখ্যা দেন সাহায্য, তত্ত্বাবধান, হেফাজত ও পাহারা দিয়ে। হাদীসটি নিয়ে তিনি মুহাসিবীর কথা আনেন: আল্লাহ ওই দুজনের সঙ্গে ছিলেন সাহায্য ও রক্ষা নিয়ে। এটা সেই সাধারণ অর্থ নয়, যা সব সৃষ্টিকে ঘিরে রাখে। সেই সাধারণ অর্থ আছে ৫৮:৭ আয়াতে: তিনজন গোপনে কথা বললে চতুর্থজন তিনি, কাফির-মুমিন সবার কথা শোনেন, সবাইকে দেখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Fear Felt for Another",
          "bn": "অন্যের জন্য ভয়"
        },
        "p": [
          {
            "en": "Why la tahzan, do not grieve? At-Tabari says Abu Bakr feared the pursuers would learn where they were, and was distressed. Ibn Kathir names the object of the fear: that someone would come upon them and harm would reach the Messenger ﷺ, so the Prophet kept calming him and making him firm. Al-Baghawi says the grief was not cowardice but concern for the Messenger of Allah ﷺ, and reports, with no chain or grading, his words: If I am killed I am one man, but if you are killed the community perishes.",
            "bn": "লা তাহযান, দুঃখ করো না, কেন বলা হলো? তাবারী বলেন, পিছু নেওয়া লোকেরা তাঁদের অবস্থান জেনে যাবে, আবু বকর (রাঃ) এই ভয় পেয়েছিলেন, অস্থির হয়ে উঠেছিলেন। ভয়টা কিসের, ইবন কাসীর তা স্পষ্ট করেন: কেউ তাঁদের দেখে ফেলবে আর রাসূল ﷺ-এর ক্ষতি হবে। তাই নবী ﷺ বারবার তাঁকে শান্ত করছিলেন, দৃঢ় রাখছিলেন। বাগাভী বলেন, এ দুঃখ ভীরুতা থেকে নয়, আল্লাহর রাসূল ﷺ-এর জন্য মমতা থেকে। তিনি সনদ বা মান ছাড়াই আবু বকরের একটি কথা আনেন: আমি নিহত হলে একজন মানুষ মরবে, আর আপনি নিহত হলে গোটা উম্মত ধ্বংস হবে।"
          },
          {
            "en": "As-Sa'di draws two lessons from the exchange. Grief can come upon Allah's closest servants, the truthful ones, he says, yet when it comes the better course is to work at removing it, because it weakens the heart and slackens resolve. And the sakinah that meets it comes in proportion to how well a servant knows his Lord and trusts His true promise, and to his faith and courage. He also ties the calm to the words themselves: when his companion grew anxious, the Prophet ﷺ calmed him and said, do not grieve, Allah is with us.",
            "bn": "এই কথোপকথন থেকে সা'দী দুটি শিক্ষা নেন। আল্লাহর ঘনিষ্ঠ বান্দা, সিদ্দীকদেরও দুঃখ পেয়ে বসতে পারে। তবে দুঃখ এলে ভালো পথ হলো তা দূর করার চেষ্টা করা, কারণ দুঃখ মনকে দুর্বল করে, সংকল্প ঢিলা করে দেয়। আর তার জবাবে যে সাকীনা আসে, তা আসে বান্দা তার রবকে কতটা চেনে আর তাঁর সত্য প্রতিশ্রুতিতে কতটা ভরসা রাখে, সেই অনুপাতে। ঈমান আর সাহসের মাপেও তা কমবেশি হয়। প্রশান্তিকে সা'দী নবী ﷺ-এর কথার সঙ্গেও জুড়ে দেন: সঙ্গী অস্থির হলে তিনি তাঁকে শান্ত করলেন আর বললেন, দুঃখ করো না, আল্লাহ আমাদের সঙ্গে আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Upon Whom It Came Down",
          "bn": "সাকীনা নামল কার উপর"
        },
        "p": [
          {
            "en": "Fa-anzala Allahu sakinatahu 'alayhi: then Allah sent down His sakinah upon him. At-Tabari glosses it as His tranquillity and stillness; as-Sa'di as firmness, reassurance and a calm that steadies the heart. Upon whom is a real difference. At-Tabari says upon His Messenger, then adds: it has also been said, upon Abu Bakr. Ibn Kathir says upon the Messenger, in the better known of the two views, and records the other from Ibn 'Abbas and others, because the Messenger never ceased to have sakinah; he adds that a fresh sakinah for that hour is not ruled out.",
            "bn": "ফাআনযালাল্লাহু সাকীনাতাহু আলাইহি: তখন আল্লাহ তাঁর উপর নিজের সাকীনা নাযিল করলেন। তাবারী এর অর্থ করেন আল্লাহর দেওয়া প্রশান্তি ও স্থিরতা। সা'দীর ভাষায় এ হলো দৃঢ়তা, নিশ্চিন্ততা আর এমন স্থিরতা যা হৃদয়কে অটল রাখে। কার উপর নামল, এ নিয়ে সত্যিকারের মতভেদ আছে। তাবারী বলেন, তাঁর রাসূলের উপর। তারপর যোগ করেন, এ কথাও বলা হয়েছে যে আবু বকরের উপর। ইবন কাসীরের মতে দুই মতের মধ্যে বেশি প্রসিদ্ধটি হলো রাসূলের উপর। অন্য মতটি তিনি ইবন আব্বাস (রাঃ) ও অন্যদের থেকে আনেন, যুক্তি এই যে রাসূলের সঙ্গে সাকীনা তো সবসময়ই ছিল। ইবন কাসীর আরও বলেন, ওই মুহূর্তের জন্য নতুন করে বিশেষ সাকীনা আসায় এর সঙ্গে কোনো বিরোধ নেই।"
          },
          {
            "en": "Al-Baghawi lists the first view with qila, it is said, and gives the second in Ibn 'Abbas's name with the same reason. Al-Qurtubi sets out both and cites Ibn al-'Arabi, that his scholars held the second, upon Abu Bakr, to be the stronger: he was the one afraid for the Prophet ﷺ, and his heart settled when the Prophet ﷺ reassured him. Al-Qurtubi notes that the him of wa-ayyadahu then returns to the Prophet ﷺ, two pronouns pointing to different people, which he says is common in the Qur'an. The Muyassar places the calm in the Messenger's heart.",
            "bn": "বাগাভী প্রথম মতটি আনেন 'কীলা', অর্থাৎ 'বলা হয়' দিয়ে। দ্বিতীয়টি আনেন ইবন আব্বাসের নামে, একই যুক্তিসহ। কুরতুবী দুটি মতই তুলে ধরেন। তিনি ইবন আরাবীর সূত্রে জানান, তাঁর আলেমদের কাছে দ্বিতীয় মত, অর্থাৎ আবু বকরের উপর, বেশি শক্তিশালী। কারণ ভয় তো তিনিই পাচ্ছিলেন নবী ﷺ-কে নিয়ে, আর নবী ﷺ আশ্বাস দেওয়ায় তাঁর মন স্থির হয়েছিল। কুরতুবী দেখান, সে ক্ষেত্রে 'ওয়া আইয়াদাহু'-এর 'তাঁকে' ফিরে যায় নবী ﷺ-এর দিকে। এক বাক্যে দুটি 'তাঁকে' দুজন আলাদা মানুষকে বোঝানো কুরআনে প্রচুর আছে, বলেন তিনি। মুয়াসসার প্রশান্তিকে রাখে রাসূল ﷺ-এর হৃদয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Troops No Eye Caught",
          "bn": "চোখের আড়ালের সৈন্যদল"
        },
        "p": [
          {
            "en": "Wa-ayyadahu bi-junudin lam tarawha: and He supported him with soldiers you did not see. At-Tabari, Ibn Kathir and the Muyassar say angels, and the Muyassar adds that no human saw them; as-Sa'di calls them noble angels set as guards over him. Al-Baghawi gives three accounts of their work: angels who turned the disbelievers' faces and eyes from seeing him; or angels who cast terror into their hearts until they went back; or, from Mujahid and al-Kalbi, the angels at Badr, so the cave's escape and Badr's victory are joined. Ma'arif al-Qur'an adds the forces of the universe.",
            "bn": "ওয়া আইয়াদাহু বিজুনূদিল লাম তারাওহা: আর তিনি তাঁকে এমন বাহিনী দিয়ে শক্তি দিলেন, যা তোমরা দেখোনি। তাবারী, ইবন কাসীর ও মুয়াসসার বলেন, এরা ফেরেশতা। মুয়াসসার যোগ করে, কোনো মানুষ তাদের দেখেনি। সা'দীর ভাষায় সম্মানিত ফেরেশতারা, যাদের আল্লাহ তাঁর পাহারাদার বানিয়েছিলেন। তাদের কাজ নিয়ে বাগাভী তিনটি বর্ণনা দেন। এক, ফেরেশতারা নেমে এসে কাফিরদের মুখ ও দৃষ্টি তাঁর দিক থেকে ফিরিয়ে দিয়েছিল। দুই, তারা কাফিরদের মনে ভয় ঢেলে দিয়েছিল, ফলে তারা ফিরে যায়। তিন, মুজাহিদ ও কালবীর মতে বদরের দিনের ফেরেশতা। তাহলে গুহায় রক্ষা আর বদরের বিজয় এক সূত্রে গাঁথা। মাআরিফুল কুরআন এর সঙ্গে গোটা মহাবিশ্বের শক্তিগুলোকেও যোগ করে।"
          },
          {
            "en": "The spider and the doves come only through some commentators, and ungraded. Al-Qurtubi tells of a tracker who led Quraysh to the cave's mouth and said the trail ended there, and of a web freshly spun across the opening that convinced them no one was inside; he calls the report well known and gives it no grading. A dove laying eggs on the web he gives as narrated from Abu ad-Darda' and Thawban (RA), again ungraded, and al-Baghawi has the doves and spider from az-Zuhri, likewise. Ibn al-'Arabi, in al-Qurtubi, says: how weak these troops to the senses, how strong in meaning.",
            "bn": "মাকড়সা আর কবুতরের কথা আসে কেবল কয়েকজন তাফসীরকারের মাধ্যমে, কোনো মান ছাড়া। কুরতুবী বলেন, পদচিহ্ন চেনায় দক্ষ এক লোক কুরাইশকে গুহার মুখ পর্যন্ত নিয়ে এসে বলল, এখানে এসে চিহ্ন হারিয়ে গেছে। তারা দেখল, গুহার মুখে মাকড়সা সদ্য জাল বুনেছে, তাই নিশ্চিত হলো ভেতরে কেউ নেই। কুরতুবী বর্ণনাটিকে প্রসিদ্ধ বলেন, তবে মান উল্লেখ করেন না। জালের উপর কবুতরের ডিম পাড়ার কথা তিনি আনেন আবুদ দারদা ও সাওবান (রাঃ) থেকে 'বর্ণিত' বলে, এরও কোনো মান নেই। বাগাভী যুহরী থেকে কবুতর-জোড়া ও মাকড়সার কথা আনেন, তিনিও মান দেন না। কুরতুবীতে ইবন আরাবীর মন্তব্য: চোখের সামনে এই বাহিনী কত দুর্বল, অর্থের দিক থেকে কত শক্তিশালী!"
          }
        ]
      },
      {
        "h": {
          "en": "The Lowest and the Highest",
          "bn": "সবচেয়ে নিচু, সবচেয়ে উঁচু"
        },
        "p": [
          {
            "en": "Wa-ja'ala kalimata alladhina kafaru as-sufla: and He made the word of those who disbelieved the lowest. Ibn 'Abbas, in at-Tabari, Ibn Kathir and al-Baghawi, says their word is shirk and the word of Allah is la ilaha illa Allah. At-Tabari explains the lowness: it was overpowered, humbled and brought to nothing, and whatever is overcome sits beneath what overcomes it. Al-Baghawi records a second gloss: their word was the plot they settled on to kill him, and Allah's word His promise to help him; al-Qurtubi also lists the promise of help among the meanings. As-Sa'di includes His decrees and His religious commands.",
            "bn": "ওয়া জাআলা কালিমাতাল্লাযীনা কাফারুস সুফলা: আর তিনি কাফিরদের কথাকে সবচেয়ে নিচু করে দিলেন। তাবারী, ইবন কাসীর ও বাগাভী ইবন আব্বাসের ব্যাখ্যা আনেন: তাদের কথা হলো শিরক, আর আল্লাহর কথা 'লা ইলাহা ইল্লাল্লাহ'। নিচু হওয়ার মানে তাবারী বুঝিয়ে দেন: সে কথা পরাজিত, অপমানিত, আল্লাহ তা বাতিল করে দিয়েছেন। যে পরাজিত হয়, সে বিজয়ীর নিচেই থাকে। বাগাভী আরেকটি ব্যাখ্যা আনেন: তাদের কথা মানে তাঁকে হত্যার যে ফন্দি তারা নিজেদের মধ্যে এঁটেছিল, আর আল্লাহর কথা মানে তাঁকে সাহায্যের প্রতিশ্রুতি। কুরতুবীও আল্লাহর কথার এক অর্থ বলেন সাহায্যের প্রতিশ্রুতি। সা'দীর মতে এর মধ্যে আল্লাহর তাকদীরের ফয়সালা আর দ্বীনের বিধান দুটোই পড়ে।"
          },
          {
            "en": "At-Tabari adds a note on the grammar: wa-kalimatu Allahi hiya al-'ulya is a new sentence, not joined to the verb ja'ala, since joined it would be accusative. Al-Qurtubi records that al-A'mash and Ya'qub did read kalimata, accusative, governed by ja'ala, while the rest read kalimatu, a fresh sentence. Al-Farra' thought the accusative far-fetched, and Abu Hatim said one would then expect kalimatuhu, His word. An-Nahhas answered with a line of verse that repeats its noun, and the skilled grammarians, al-Qurtubi adds, find a sense of exaltation in such repetition.",
            "bn": "তাবারী ব্যাকরণের একটা দিকও দেখান। 'ওয়া কালিমাতুল্লাহি হিয়াল উলইয়া' নতুন বাক্য, 'জাআলা' ক্রিয়ার সঙ্গে যুক্ত নয়। যুক্ত হলে শব্দটিতে যবর হতো। কুরতুবী জানান, আ'মাশ ও ইয়াকুব সত্যিই যবর দিয়ে 'কালিমাতাল্লাহ' পড়েছেন, 'জাআলা'-র অধীনে। বাকিরা পড়েছেন পেশ দিয়ে, 'কালিমাতুল্লাহ', নতুন বাক্য হিসেবে। ফাররা যবরের পাঠকে দূরের মনে করতেন। আবু হাতিমের কথা, তাহলে তো 'কালিমাতুহু', অর্থাৎ তাঁর কথা, বলা উচিত ছিল। নাহহাস জবাবে এমন এক কবিতার চরণ আনেন, যেখানে একই শব্দ ফিরে এসেছে। কুরতুবী যোগ করেন, দক্ষ ব্যাকরণবিদদের মতে এমন পুনরাবৃত্তিতে মহিমার অর্থ থাকে।"
          },
          {
            "en": "The verse describes the disbelievers of Quraysh at the Hijrah as the text describes them: they drove the Prophet ﷺ out and searched for him, and Allah brought their plan to nothing. It describes that episode and licenses nothing against any living person or community. It closes wa-Allahu 'azizun hakim. As-Sa'di: Mighty, none overpowers Him and no fugitive escapes Him; Wise, He sets things in their places, and may delay His party's help to a time His wisdom requires. The next verse, 9:41, turns back to the listeners: go forth, light and heavy.",
            "bn": "হিজরতের সময়ের কুরাইশ কাফিরদের আয়াতটি সেভাবেই বর্ণনা করে, যেভাবে এর ভাষা বলে: তারা নবী ﷺ-কে বের করে দিয়েছিল, তাঁকে খুঁজে ফিরেছিল, আর আল্লাহ তাদের পরিকল্পনা ব্যর্থ করে দিয়েছিলেন। এ ওই একটি ঘটনার বর্ণনা। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। আয়াত শেষ হয় 'ওয়াল্লাহু আযীযুন হাকীম' দিয়ে। সা'দীর ব্যাখ্যায় তিনি পরাক্রমশালী: কেউ তাঁকে হারাতে পারে না, কোনো পলাতক তাঁর হাত এড়াতে পারে না। তিনি প্রজ্ঞাময়: সবকিছু যথাস্থানে রাখেন, প্রজ্ঞার দাবিতে নিজের দলের সাহায্য পরের কোনো সময় পর্যন্ত পিছিয়েও দেন। পরের আয়াত ৯:৪১ আবার শ্রোতাদের দিকে ফেরে: বেরিয়ে পড়ো, হালকা হও বা ভারী।"
          }
        ]
      }
    ]
  },
  "9:44": {
    "sections": [
      {
        "h": {
          "en": "A Reproach That Opens With Pardon",
          "bn": "যে ভর্ৎসনা শুরু হয় মাফ দিয়ে"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this stretch of it examines an expedition nobody wanted to make in the heat. 9:42 says that had it been an easy gain and a short trip they would have followed, but the journey was far for them. 9:43 then turns to the Prophet ﷺ himself with a reproach, and the order of its words is what the commentators notice: may Allah pardon you, why did you give them leave, before it was clear to you who told the truth and you knew the liars.",
            "bn": "সূরা তাওবা মাদানী। এর এই অংশে খতিয়ে দেখা হয়েছে এমন এক অভিযান, প্রচণ্ড গরমে যেটাতে কেউই যেতে চায়নি। ৯:৪২ আয়াত বলে, লাভটা সহজ আর সফরটা ছোট হলে তারা ঠিকই পিছে পিছে যেত, কিন্তু পথটা তাদের কাছে দূরের মনে হলো। এরপর ৯:৪৩ আয়াত ভর্ৎসনা নিয়ে ফেরে স্বয়ং নবী ﷺ-এর দিকে। আর এর শব্দের ক্রমটাই মুফাসসিরদের চোখে পড়ে: আল্লাহ আপনাকে মাফ করুন; আপনি কেন তাদের অনুমতি দিলেন, কারা সত্য বলছে তা আপনার কাছে স্পষ্ট হওয়ার আগে, আর মিথ্যাবাদীদের চেনার আগে?"
          },
          {
            "en": "Ibn Kathir collects what the early commentators made of that order. Awn said: have you heard criticism softer than this, beginning with the pardon before the criticism; Muwarriq al-Ijli and others said the like. Qatadah added the sequel, that Allah criticised him here and later revealed the permission to let them lag behind if he wished, in 24:62; Ata' al-Khurasani said the same. And Mujahid reports that the verse came down about people who had said: ask the Messenger of Allah ﷺ for permission, and whether he agrees or not, stay behind.",
            "bn": "ওই ক্রম নিয়ে প্রথম যুগের মুফাসসিরগণ কী বলেছেন, ইবনু কাসীর তা একত্র করেছেন। আওন বলেছেন: এর চেয়ে কোমল তিরস্কার কি কখনো শুনেছ? তিরস্কারের আগেই শুরু হয়েছে মাফ দিয়ে! মুওয়ার্রিক আল-ইজলী প্রমুখও এমনটাই বলেছেন। কাতাদা এর পরের অংশটুকু যোগ করেন: আল্লাহ এখানে তাঁকে তিরস্কার করলেন, পরে ২৪:৬২ আয়াতে অনুমতি নাজিল করলেন যে তিনি চাইলে তাদের পিছিয়ে থাকতে দিতে পারেন। আতা আল-খুরাসানীও একই কথা বলেছেন। আর মুজাহিদ জানান, আয়াতটি নাজিল হয়েছিল এমন কিছু লোকের ব্যাপারে, যারা বলেছিল: রাসূলুল্লাহর ﷺ কাছে অনুমতি চাও; তিনি অনুমতি দিন বা না দিন, থেকে যাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Described by an Absence",
          "bn": "না-করা দিয়ে বর্ণনা"
        },
        "p": [
          {
            "en": "Our verse then identifies the believers by something they do not do. They do not ask your leave to be excused from striving with their wealth and their lives. It is a negative description, and an unusual test, because it does not look at how a person performs once the work has begun. It looks at who arrives beforehand with a request. The pair of nouns is the one this surah keeps using for what a man can put in, his wealth and his self.",
            "bn": "এরপর আমাদের আয়াত মু'মিনদের পরিচয় দেয় এমন একটা কাজ দিয়ে, যা তারা করে না: নিজেদের মাল আর জান দিয়ে জিহাদ থেকে রেহাই পেতে তারা তোমার কাছে অনুমতি চায় না। বর্ণনাটা না-বাচক, আর পরীক্ষাটাও অন্যরকম। কাজ শুরু হওয়ার পর কে কেমন করে, সেটা এ পরীক্ষা দেখে না; দেখে, কে আগেভাগেই অনুরোধ নিয়ে হাজির হয়। আর শব্দজোড়াটাও সেই একই, যা এ সূরা বারবার আনে মানুষের দেওয়ার মতো সম্বল বোঝাতে: তার মাল আর তার জান।"
          },
          {
            "en": "At-Tabari reads the verse as an act of disclosure: this is Allah informing His prophet ﷺ of the marks of the hypocrites, that among the signs by which they are known is their staying back from striving in the path of Allah by asking the Messenger of Allah ﷺ for leave to stay when the call went out, with lying excuses. He then gives the practical instruction as its consequence, addressed by Allah to the Prophet ﷺ: do not give leave to stay behind to one who asks it without an excuse.",
            "bn": "তাবারী আয়াতটিকে দেখেন মুখোশ খুলে দেওয়া হিসেবে: আল্লাহ এখানে তাঁর নবীকে ﷺ মুনাফিকদের চিহ্ন জানিয়ে দিচ্ছেন। যেসব আলামত দিয়ে তাদের চেনা যায়, তার একটি হলো আল্লাহর পথে জিহাদ থেকে পিছিয়ে থাকা: ডাক এলে মিথ্যা ওজর দেখিয়ে রাসূলুল্লাহর ﷺ কাছে থেকে যাওয়ার অনুমতি চাওয়া। এরপর এরই ফল হিসেবে তিনি নবীর ﷺ প্রতি আল্লাহর নির্দেশটা তুলে ধরেন: যে কোনো ওজর ছাড়াই থেকে যাওয়ার অনুমতি চায়, তাকে অনুমতি দেবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Nobody Had to Push Them",
          "bn": "কাউকে ঠেলতে হয়নি"
        },
        "p": [
          {
            "en": "As-Sa'di explains the absence rather than merely noting it, and his reason is about appetite. The believers do not ask leave to abandon striving with their wealth and their lives, he writes, because what is with them of desire for good and of faith carries them to it without anyone urging them on, let alone that they should ask leave to abandon it without an excuse. So the verse is not describing men who forced themselves. It is describing men for whom the thing had already become wanted.",
            "bn": "সা'দী এই না-চাওয়াটা শুধু খেয়াল করেই থামেন না, এর কারণও বলেন। আর কারণটা মনের টান নিয়ে। তিনি লেখেন, মু'মিনরা মাল আর জান দিয়ে জিহাদ ছেড়ে দেওয়ার অনুমতি চায় না, কারণ তাদের ভেতরের কল্যাণের আকাঙ্ক্ষা আর ঈমানই তাদের সেদিকে টেনে নিয়ে যায়, কাউকে তাগাদা দিতে হয় না। ওজর ছাড়া তা ছেড়ে দেওয়ার অনুমতি চাওয়া তো অনেক দূরের কথা। অর্থাৎ আয়াত এমন লোকদের কথা বলছে না, যারা নিজেদের জোর করে রাজি করিয়েছে। বলছে এমন লোকদের কথা, যাদের কাছে কাজটা ততদিনে মনের চাওয়া হয়ে গেছে।"
          },
          {
            "en": "The closing clause is knowledge and not reward: and Allah is Knowing of those who fear Him. At-Tabari glosses it as knowledge of whoever feared Him and so guarded against Him by discharging His obligations, avoiding His disobedience, and hastening to His obedience. As-Sa'di turns it back on the verse itself, noting that part of His knowing the God-fearing is that He told us one of their signs: they do not ask leave to abandon the striving.",
            "bn": "শেষ বাক্যটি প্রতিদানের কথা নয়, জানার কথা: আর আল্লাহ মুত্তাকীদের ভালো করেই জানেন। তাবারীর ব্যাখ্যায়: তিনি জানেন কে তাঁকে ভয় করেছে, আর সেই ভয়ে তাঁর ফরজগুলো আদায় করে, তাঁর নাফরমানি এড়িয়ে আর তাঁর আনুগত্যে ছুটে গিয়ে নিজেকে বাঁচিয়েছে। সা'দী কথাটাকে আয়াতের দিকেই ফিরিয়ে আনেন। তিনি বলেন, মুত্তাকীদের তিনি যে জানেন, তার একটা দিক হলো তিনি আমাদের তাদের একটি আলামত জানিয়ে দিয়েছেন: তারা জিহাদ ছেড়ে দেওয়ার অনুমতি চায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse After It",
          "bn": "এর পরের আয়াত"
        },
        "p": [
          {
            "en": "9:45 completes the sentence by naming who does ask: only those ask your leave who do not believe in Allah and the Last Day and whose hearts have doubted, so they waver in their doubt. The two verses together make a pair of descriptions rather than a rule, and the second is careful about the mechanism. It does not say they are cowards or that they love comfort; it says their hearts are in doubt, and that the doubting is what the wavering is made of.",
            "bn": "৯:৪৫ আয়াত বাক্যটা পূর্ণ করে, কারা অনুমতি চায় তাদের পরিচয় দিয়ে: তোমার কাছে অনুমতি চায় কেবল তারাই, যারা আল্লাহ ও শেষ দিনে ঈমান রাখে না, আর যাদের অন্তর সন্দেহে পড়েছে; তাই তারা নিজেদের সন্দেহে দোদুল্যমান। দুটি আয়াত মিলে দুটি বর্ণনার জোড়া তৈরি করে, কোনো বিধান নয়। আর দ্বিতীয় আয়াতটি ব্যাপারটা কীভাবে ঘটে, সে বিষয়ে সতর্ক। সে বলে না তারা ভীরু বা আরামপ্রিয়; বলে, তাদের অন্তরে সন্দেহ, আর ওই সন্দেহ দিয়েই গড়া তাদের দোদুল্যমানতা।"
          },
          {
            "en": "9:46 then gives the evidence, that had they intended to go forth they would have prepared some preparation for it, which is a test anybody can apply to himself: the gap between what a person says he intends and what he has actually got ready. And 9:81 shows the same people afterwards, rejoicing in having stayed behind and saying to each other, do not go forth in the heat.",
            "bn": "এরপর ৯:৪৬ আয়াত প্রমাণ দেয়: বের হওয়ার ইচ্ছা থাকলে তারা অবশ্যই এর জন্য কিছু না কিছু প্রস্তুতি নিত। এ পরীক্ষা যে কেউ নিজের ওপর চালাতে পারেন: মানুষ মুখে যা করার ইচ্ছা জানায়, আর আসলে যা প্রস্তুত করে রেখেছে, দুয়ের মাঝের ফাঁকটুকু দেখা। আর ৯:৮১ আয়াত পরে ওই লোকদেরই দেখায়: পেছনে থেকে যেতে পেরে তারা খুশি, আর একে অন্যকে বলছে, এই গরমে বের হয়ো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where No Blame Lies",
          "bn": "যেখানে কোনো দোষ নেই"
        },
        "p": [
          {
            "en": "A verse that praises people for not asking to be excused could easily be turned into a weapon against the genuinely unable, and the surah itself forbids that. 9:91 states it: there is no discomfort upon the weak, nor upon the ill, nor upon those who find nothing to spend, when they are sincere to Allah and His Messenger ﷺ, and there is no cause for blame against the doers of good. Three categories are named and cleared, and the condition attached to them is sincerity rather than capacity.",
            "bn": "যে আয়াত ছাড় না চাওয়ার জন্য মানুষের প্রশংসা করে, সেটাকে সহজেই সত্যিকারের অক্ষম মানুষদের বিরুদ্ধে অস্ত্র বানানো যায়; আর সূরা নিজেই তা নিষেধ করে। ৯:৯১ আয়াত স্পষ্ট বলে: দুর্বলদের ওপর, অসুস্থদের ওপর, আর যারা খরচ করার মতো কিছুই পায় না তাদের ওপর কোনো দোষ নেই, যদি তারা আল্লাহ ও তাঁর রাসূলের ﷺ প্রতি আন্তরিক থাকে; সৎকর্মশীলদের দোষারোপ করার কোনো পথ নেই। তিন শ্রেণির মানুষের নাম নিয়ে তাদের দায়মুক্ত করা হয়েছে, আর শর্ত রাখা হয়েছে আন্তরিকতা, সামর্থ্য নয়।"
          },
          {
            "en": "Read with 9:91, our verse stops being about ability at all. A weak man who wishes he could go is on the far side of it from a strong man who asks to be let off, and the verse's own test sorts them correctly, because what it examines is where the request comes from. At-Tabari's qualification carries the same weight in the other direction: he restricts the instruction to one who asks without an excuse.",
            "bn": "৯:৯১ আয়াতের সঙ্গে মিলিয়ে পড়লে আমাদের আয়াতে সামর্থ্যের প্রশ্নটাই আর থাকে না। যে দুর্বল লোক মনে মনে চায়, যদি যেতে পারত, আর যে সবল লোক রেহাই চায়, এ আয়াতে তারা দুই বিপরীত প্রান্তে। আয়াতের নিজের পরীক্ষাই তাদের ঠিকঠাক আলাদা করে দেয়, কারণ সে দেখে অনুরোধটা কোথা থেকে আসছে। তাবারীর শর্তটাও উল্টো দিক থেকে একই কাজ করে: নির্দেশটা তিনি কেবল তার বেলায় খাটান, যে কোনো ওজর ছাড়াই অনুমতি চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Let Off",
          "bn": "ছাড় চাইতে যাওয়া"
        },
        "p": [
          {
            "en": "The verse transfers easily because the situation is universal: a call goes out, and some people arrive with reasons before it has even been organised. The useful version of its test is not whether a person ever seeks exemption, since the Quran itself grants exemptions, but whether the exemptions he has sought this year would together describe somebody who wanted the work or somebody who wanted out of it.",
            "bn": "আয়াতটা সহজেই অন্য যুগেও খাটে, কারণ পরিস্থিতিটা চিরচেনা: একটা ডাক আসে, আর কাজটা গোছানোর আগেই কিছু লোক নানা কারণ দেখিয়ে হাজির হয়। এ পরীক্ষার কাজের রূপটা এই নয় যে কেউ কখনো ছাড় চায় কি না, কারণ কুরআন নিজেই ছাড় দেয়। আসল প্রশ্ন হলো: এ বছর সে যত ছাড় চেয়েছে, সব একসঙ্গে রাখলে কার ছবি ফোটে? এমন কারও, যে কাজটা চেয়েছিল; নাকি এমন কারও, যে কাজটা থেকে পালাতে চেয়েছিল?"
          },
          {
            "en": "As-Sa'di's reason is the part worth working on, because it is the only part a person can change. He locates the difference not in courage but in desire for good, the appetite that carries a man to a thing without being urged. That suggests the repair is upstream of the decision: what a person reads, keeps company with and asks for shapes what he wants, and what he wants decides whether he is the one with the request or the one already getting ready.",
            "bn": "সা'দীর দেওয়া কারণটাই নিয়ে কাজ করার মতো, কারণ কেবল এ অংশটাই মানুষ বদলাতে পারে। তিনি পার্থক্যটা খুঁজে পান সাহসে নয়, কল্যাণের আকাঙ্ক্ষায়; সেই টানে, যা তাগাদা ছাড়াই মানুষকে কোনো কাজের দিকে নিয়ে যায়। এতে বোঝা যায়, মেরামত করতে হবে সিদ্ধান্তের আগের ধাপে। মানুষ কী পড়ে, কাদের সঙ্গে ওঠাবসা করে, কী চেয়ে নেয়, তা-ই গড়ে দেয় সে কী চাইবে। আর সে কী চায়, তা-ই ঠিক করে, সে অনুরোধ হাতে দাঁড়ানো লোক হবে, নাকি আগেই প্রস্তুতি নিতে থাকা লোক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Before the Asking",
          "bn": "চাওয়ার আগের দোয়া"
        },
        "p": [
          {
            "en": "The verse carries no supplication, and what it describes is a state rather than an act, so the thing to ask for is the state. The Quran's nearest wording is in 9:91's condition, that those excused were sincere to Allah and His Messenger ﷺ, since sincerity is what makes an excuse honest and its absence is what the verse is exposing.",
            "bn": "আয়াতে কোনো দোয়া নেই। আর এ আয়াত যা বর্ণনা করে তা কোনো কাজ নয়, একটি অবস্থা; তাই চাইতে হবে ওই অবস্থাটাই। কুরআনে এর সবচেয়ে কাছের শব্দ আছে ৯:৯১ আয়াতের শর্তে: যাদের ছাড় দেওয়া হয়েছিল, তারা আল্লাহ ও তাঁর রাসূলের ﷺ প্রতি আন্তরিক ছিল। কারণ আন্তরিকতাই কোনো ওজরকে সৎ করে, আর আন্তরিকতার অভাবটাই এ আয়াত ফাঁস করে দিচ্ছে।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, do not let me be of those who come asking to be excused, and if I have a real excuse, keep me sincere in it. It is assembled from this verse and from 9:91, and it is not a Sunnah du'a. The safer thing to carry is the verse's own closing clause, said as a reminder rather than a request: Allah is Knowing of those who fear Him.",
            "bn": "এ আয়াতের নিজের শব্দ দিয়ে একটা বাক্য যোগ করা যায়, তবে এর বেশি কিছু বলে দাবি করা যাবে না: হে আল্লাহ, যারা ছাড় চাইতে আসে, আমাকে তাদের দলে রাখবেন না; আর আমার সত্যিকারের ওজর থাকলে তাতেও আমাকে আন্তরিক রাখুন। বাক্যটি এ আয়াত আর ৯:৯১ আয়াত মিলিয়ে বানানো; এটা সুন্নাহর দোয়া নয়। সঙ্গে রাখার জন্য বেশি নিরাপদ আয়াতের নিজের শেষ বাক্যটি, যা বলা হবে আবদার হিসেবে নয়, নিজেকে মনে করিয়ে দিতে: আল্লাহ মুত্তাকীদের ভালো করেই জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Excuses",
          "bn": "নিজের ওজর নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "What am I currently trying to get excused from, and whom have I been asking? The verse examines the request rather than the performance, so if somebody listed every exemption I have sought this year, what would the list say about what I wanted? And asking to be let off is not always wrong, since the surah itself clears the weak and the ill and those with nothing to spend: do I actually know which of my requests had reasons of that kind?",
            "bn": "এখন আমি কোন কাজ থেকে রেহাই পেতে চাইছি, আর কার কাছে চাইছি? আয়াত দেখে অনুরোধটা, কাজটা নয়। তাহলে এ বছর আমি যত ছাড় চেয়েছি, কেউ যদি সবগুলোর একটা তালিকা করে, সে তালিকা আমার চাওয়া সম্পর্কে কী বলবে? আর ছাড় চাওয়া সবসময় ভুল নয়; সূরা নিজেই দুর্বল, অসুস্থ আর খরচের সামর্থ্যহীনদের দায়মুক্ত করেছে। আমার কোন অনুরোধগুলোর পেছনে সত্যিই এমন কারণ ছিল, তা কি আমি জানি?"
          },
          {
            "en": "Two more. The mark of these people is that nobody had to urge them, so what good thing do I only ever do after being pushed into it? And the verse ends on Allah knowing the God-fearing rather than on praising them in front of anyone: how much of what I do is arranged so that somebody will notice it?",
            "bn": "আরও দুটি প্রশ্ন। এ লোকদের চিহ্ন হলো, কাউকে তাদের তাগাদা দিতে হয়নি। তাহলে কোন ভালো কাজটা আমি কেবল ঠেলা খেলে তবেই করি? আর আয়াত শেষ হয় কারও সামনে তাদের প্রশংসা দিয়ে নয়, এ কথা দিয়ে যে আল্লাহ মুত্তাকীদের জানেন। আমার আমলের কতখানি এমনভাবে সাজানো, যাতে কারও চোখে পড়ে?"
          }
        ]
      },
      {
        "h": {
          "en": "One Mark Among Many",
          "bn": "অনেক আলামতের একটি"
        },
        "p": [
          {
            "en": "One caution belongs at the end. At-Tabari calls this one of the signs by which the hypocrites of that moment were known, and the verse is describing a specific call to a specific expedition. A sign is not a verdict, and a person who asks to be excused from a task today has not been placed by this verse in the company 9:45 describes. The commentators use it to explain what happened at Tabuk, not to hand anyone a method for reading hearts.",
            "bn": "শেষে একটা সতর্কতা জরুরি। তাবারী এটাকে বলেছেন সেই সময়ের মুনাফিকদের চেনার আলামতগুলোর একটি। আয়াতটি বলছে নির্দিষ্ট একটি অভিযানের নির্দিষ্ট একটি ডাকের কথা। আলামত মানে রায় নয়। আজ কেউ কোনো কাজ থেকে ছাড় চাইলেই এ আয়াত তাকে ৯:৪৫ আয়াতে বর্ণিত দলে ফেলে দেয় না। মুফাসসিরগণ এ আয়াত দিয়ে তাবুকে যা ঘটেছিল তা বোঝান; কারও হাতে মানুষের মন পড়ার কৌশল তুলে দেন না।"
          },
          {
            "en": "The useful direction is inward, which is where the verse's own gentleness points. It begins in a passage where Allah corrects His Prophet ﷺ by pardoning him first, and it ends by saying that Allah knows those who fear Him. Between a reproach that opens with a pardon and a conclusion that rests on His knowledge rather than on anyone's report, there is not much room left for a reader to use this verse on his neighbour.",
            "bn": "কাজে লাগানোর দিকটা নিজের ভেতরের দিকে, আর আয়াতের কোমলতাও সেদিকেই ইশারা করে। আয়াতটির শুরু এমন এক প্রসঙ্গে, যেখানে আল্লাহ তাঁর নবীকে ﷺ শুধরে দেন আগে মাফ করে দিয়ে; আর শেষ হয় এ কথায় যে আল্লাহ মুত্তাকীদের জানেন। যে তিরস্কার শুরু হয় মাফ দিয়ে, আর যে উপসংহার দাঁড়িয়ে থাকে কারও খবরের ওপর নয়, তাঁর জানার ওপর, এ দুয়ের মাঝে পাঠকের হাতে এমন জায়গা বেশি থাকে না, যেখান থেকে তিনি এ আয়াত প্রতিবেশীর ওপর খাটাবেন।"
          }
        ]
      }
    ]
  },
  "9:51": {
    "sections": [
      {
        "h": {
          "en": "Spoken Back to the Gloaters",
          "bn": "উল্লসিতদের মুখের ওপর জবাব"
        },
        "p": [
          {
            "en": "The sentence is a reply, and the verse before it records what it answers: if good befalls you, it distresses them, and if a calamity strikes you, they say, we took our matter in hand before, and they turn away rejoicing (9:50). At-Tabari places this in the Tabuk campaign. The good is joy at Allah opening the land of the Romans in this expedition, the calamity a rout of the army, and the distressed and delighted are al-Jadd ibn Qays, his like and their followers among the hypocrites. He carries a report from Ibn 'Abbas, through Ibn Jurayj, naming the same expedition and al-Jadd and his companions.",
            "bn": "আয়াতটি আসলে একটি জবাব। কীসের জবাব, তা লেখা আছে আগের আয়াতে: তোমার মঙ্গল হলে তাদের কষ্ট হয়, আর বিপদ এলে তারা বলে, আমরা তো আগেই নিজেদের ব্যাপার সামলে নিয়েছি, তারপর খুশিমনে সরে পড়ে (৯:৫০)। তাবারী একে তাবুক অভিযানের প্রেক্ষাপটে রাখেন। তাঁর ব্যাখ্যায় মঙ্গল মানে এ অভিযানে আল্লাহ রোমানদের ভূমি খুলে দিলে যে আনন্দ, আর বিপদ মানে বাহিনীর পরাজয়। যারা কষ্ট পায় আর খুশি হয়, তারা জাদ্দ ইবন কায়স, তার মতো লোকজন ও মুনাফিকদের মধ্যে তাদের অনুসারীরা। ইবন জুরাইজের সূত্রে ইবন আব্বাস থেকেও তিনি একটি বর্ণনা আনেন, যাতে এই অভিযান আর জাদ্দ ও তার সঙ্গীদের নামই আছে।"
          },
          {
            "en": "The other commentators gloss the two words in the same spirit. For Ibn Kathir the good is conquest, victory and triumph over enemies, which pleases the Prophet ﷺ and his Companions; al-Qurtubi makes it spoils and victory and the calamity defeat; al-Baghawi has help and spoils against killing and defeat. Their boast, we took our matter, is simply our precaution in Mujahid's gloss, which at-Tabari cites. Ibn Kathir: we guarded ourselves against following him. As-Sa'di hears them say it while boasting of their safety from being present. At-Tabari reads the turning away as turning back from Muhammad; al-Qurtubi, as turning from faith.",
            "bn": "অন্য তাফসীরকারেরাও শব্দ দুটির ব্যাখ্যা দেন একই সুরে। ইবন কাসীরের কাছে মঙ্গল হলো বিজয়, সাহায্য আর শত্রুর ওপর জয়, যাতে নবী ﷺ ও তাঁর সাহাবীরা খুশি হন। কুরতুবী মঙ্গল বলতে গনীমত ও বিজয় আর বিপদ বলতে পরাজয় বোঝান। বাগাভী এক দিকে রাখেন সাহায্য ও গনীমত, অন্য দিকে নিহত হওয়া ও পরাজয়। তাদের বড়াই, আমরা নিজেদের ব্যাপার সামলে নিয়েছি, মুজাহিদের ব্যাখ্যায় স্রেফ সাবধানতা; তাবারী এ ব্যাখ্যা উদ্ধৃত করেন। ইবন কাসীরের ভাষায়: তাঁর অনুসরণ থেকে আমরা আগেই নিজেদের বাঁচিয়ে রেখেছি। সা'দীর মতে তারা কথাটা বলে অভিযানে হাজির না থেকে বেঁচে যাওয়ার গর্বে। সরে পড়া কথাটিকে তাবারী পড়েন মুহাম্মাদ ﷺ থেকে মুখ ফিরিয়ে নেওয়া হিসেবে, আর কুরতুবী পড়েন ঈমান থেকে মুখ ফেরানো হিসেবে।"
          },
          {
            "en": "These glosses describe what the commentators say particular men did in one campaign, and at-Tabari names them. The verse describes what the text describes. It licenses nothing against any living person or community, and gives no reader a warrant to call a neighbour, a rival or any group of today hypocrites because they seemed pleased at someone's loss. What the passage hands the believers is not a label for others but a sentence to say about themselves, and that sentence is 9:51.",
            "bn": "এসব ব্যাখ্যা বলছে, এক অভিযানে নির্দিষ্ট কিছু লোক কী করেছিল বলে তাফসীরকারেরা জানান, আর তাবারী তাদের নামও বলেন। আয়াত ঠিক ততটুকুই বর্ণনা করে, যতটুকু তার ভাষায় আছে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। কেউ অন্যের ক্ষতিতে খুশি হয়েছে বলে মনে হলেই প্রতিবেশী, প্রতিপক্ষ বা আজকের কোনো দলকে মুনাফিক বলার অধিকারও কাউকে দেয় না। এ অংশ মুমিনদের হাতে অন্যের গায়ে লাগানোর তকমা তুলে দেয় না। তুলে দেয় নিজেদের সম্পর্কে বলার একটি বাক্য, আর সেই বাক্যই ৯:৫১।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reply Given to Say",
          "bn": "মুখে বলার জন্য দেওয়া জবাব"
        },
        "p": [
          {
            "en": "Qul, say, opens the verse, and the commentators agree on where it points. Ibn Kathir: Allah guided His Messenger to the answer to their complete enmity. At-Tabari reads the command as Allah teaching His Prophet how to respond, mu'addiban: say, O Muhammad, to these hypocrites who stayed behind from you. Inside his gloss he names the addressees again, as al-murtabun, those in doubt about their religion. The Muyassar says the words are spoken to those who held back, as a rebuke and a reproof, and as-Sa'di calls the verse Allah's answer to them.",
            "bn": "আয়াত শুরু হয় কুল দিয়ে: বলে দাও। এর লক্ষ্য কারা, তাতে তাফসীরকারেরা একমত। ইবন কাসীর বলেন, তাদের পূর্ণ শত্রুতার জবাব কী হবে, আল্লাহ তা তাঁর রাসূলকে শিখিয়ে দিলেন। তাবারী আদেশটিকে দেখেন নবীকে আদব শেখানো হিসেবে, মুআদ্দিবান: হে মুহাম্মাদ, যে মুনাফিকরা তোমার সঙ্গে না গিয়ে পেছনে থেকে গেছে, তাদের বলো। নিজের ব্যাখ্যার ভেতরেই তিনি শ্রোতাদের আবার চিনিয়ে দেন: আল-মুরতাবূন, যারা নিজেদের দ্বীন নিয়ে সন্দেহে আছে। মুয়াসসার বলে, যারা পিছিয়ে ছিল তাদের ধমক ও ভর্ৎসনা হিসেবে কথাটা বলা হয়েছে। সা'দী আয়াতটিকে বলেন তাদের প্রতি আল্লাহর জবাব।"
          },
          {
            "en": "Ma'arif al-Qur'an widens the instruction to the Prophet ﷺ and the Muslims together: they should not let themselves be affected by what the hypocrites said, and should keep reality as it is before their eyes. The wording supports that breadth. The command is singular, say, but what is to be said is plural: never will we be struck, what Allah has written for us, He is our Protector. And the verse closes in the third person, upon Allah let the believers rely, so the reply given to one man becomes a sentence the whole company of believers can speak.",
            "bn": "মাআরিফুল কুরআন নির্দেশটিকে নবী ﷺ ও মুসলিমদের সবার জন্য প্রসারিত করে: মুনাফিকদের কথায় তারা যেন প্রভাবিত না হন, আর বাস্তবতা যেমন, তেমনভাবেই যেন চোখের সামনে রাখেন। আয়াতের ভাষাও এই প্রসারকে সমর্থন করে। আদেশটি একবচনে: বলো। কিন্তু যা বলতে হবে তা বহুবচনে: আমাদের কিছুই ঘটবে না, যা আল্লাহ আমাদের জন্য লিখেছেন, তিনিই আমাদের মাওলা। শেষে এসে আর 'আমরা' নেই: আল্লাহর ওপরই মুমিনরা ভরসা করুক। ফলে একজনকে দেওয়া জবাব হয়ে ওঠে মুমিনদের গোটা দলের মুখের বাক্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Lan, and a Doubled Nun",
          "bn": "লান, আর দ্বিগুণ নূন"
        },
        "p": [
          {
            "en": "Al-Qurtubi records how the opening was read. The majority read lan yusibana, the verb in the subjunctive governed by lan, and Abu 'Ubaydah reported that some Arabs put the verb after lan in the jussive. Two individual readings follow. Talhah ibn Musarrif read the verse with hal, the question word, in place of lan, turning the denial into a question. And A'yan, the qadi of Rayy, is reported to have read lan yusibanna, with the emphatic nun doubled for added force.",
            "bn": "শুরুর অংশটি কীভাবে পড়া হয়েছে, কুরতুবী তা লিখে রাখেন। অধিকাংশ কারী পড়েন লান ইউসীবানা, যেখানে লান ক্রিয়াটিকে নসব দেয়। আবু উবাইদা জানান, আরবদের কেউ কেউ লানের পরের ক্রিয়াকে জযমও দেয়। এরপর দুটি একক পাঠ। তালহা ইবন মুসাররিফ লানের জায়গায় প্রশ্নবোধক হাল পড়েছেন, তাতে অস্বীকার হয়ে যায় প্রশ্ন। আর রায়-এর কাযী আ'য়ান সম্পর্কে বর্ণিত, তিনি পড়েছেন লান ইউসীবান্না, বাড়তি জোরের জন্য নূন দ্বিগুণ করে।"
          },
          {
            "en": "Al-Qurtubi rejects the last. He calls it lahn, an error, because the emphatic nun is not used to strengthen what is a khabar, a plain statement of fact. Had the doubled nun come in Talhah's reading, with hal, it would have been allowed, and he cites 22:15 for that pattern: hal yudhhibanna kayduhu ma yaghiz, will his scheme remove what enrages him. On his account, then, the verse as read by the majority is a report of how things stand, not a question and not an emphasised statement.",
            "bn": "শেষ পাঠটি কুরতুবী নাকচ করে দেন। তিনি একে বলেন লাহন, অর্থাৎ ভুল। কারণ, যা খবর, মানে ঘটনার সরল বিবরণ, তাকে জোরালো করতে জোরের নূন ব্যবহার হয় না। তালহার পাঠে, হাল-এর সঙ্গে, দ্বিগুণ নূন এলে তা চলত। এ ধরনের নজির হিসেবে তিনি ২২:১৫ উদ্ধৃত করেন: হাল ইউযহিবান্না কাইদুহু মা ইয়াগীয, তার কৌশল কি তার ক্ষোভ দূর করবে? তাঁর বিশ্লেষণে তাই অধিকাংশের পাঠে আয়াতটি বাস্তব অবস্থার বিবরণ। এটি প্রশ্নও নয়, বাড়তি জোরের বাক্যও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of Kataba Lana",
          "bn": "কাতাবা লানা: দুই পাঠ"
        },
        "p": [
          {
            "en": "What has Allah written? Most of the commentators answer: what is in al-Lawh al-Mahfuz, the Preserved Tablet. At-Tabari: what Allah wrote for us in the Preserved Tablet and decreed upon us. Al-Baghawi: upon us, in the Preserved Tablet. The Muyassar: what Allah measured out upon us and wrote there. As-Sa'di: what He measured out and set running in the Preserved Tablet. The Jalalayn: what God has decreed for us, that we be afflicted by it. Al-Qurtubi gives the Tablet as the first of two views.",
            "bn": "আল্লাহ কী লিখেছেন? বেশির ভাগ তাফসীরকারের উত্তর: লাওহে মাহফুজে যা আছে, সেই সংরক্ষিত ফলকে। তাবারী বলেন, লাওহে মাহফুজে আল্লাহ আমাদের জন্য যা লিখেছেন এবং আমাদের ওপর যা ফয়সালা করেছেন। বাগাভীর ভাষায়: আমাদের ওপর, লাওহে মাহফুজে। মুয়াসসার বলে, আল্লাহ আমাদের ওপর যা নির্ধারণ করে সেখানে লিখে রেখেছেন। সা'দী বলেন, যা তিনি নির্ধারণ করেছেন এবং লাওহে মাহফুজে চালু করে দিয়েছেন। জালালাইনের ব্যাখ্যা: আল্লাহ আমাদের জন্য যা নির্ধারণ করেছেন যে তা আমাদের ঘটবে। কুরতুবী দুই মতের প্রথমটি হিসেবে এই ফলকের কথা বলেন।"
          },
          {
            "en": "His second view reads the writing as a promise in the Qur'an itself: what He told us in His Book, that either we prevail, and victory is a husna, a good, for us, or we are killed, and martyrdom is the greatest husna for us. On this reading what is written lana is written in the speakers' favour. Whatever reaches them is one of two outcomes the Book has already called good, so the hypocrites' calamity is, in the believers' own sentence, a thing set down for their benefit.",
            "bn": "তাঁর দ্বিতীয় মতে লেখাটি কুরআনেরই এক প্রতিশ্রুতি: আল্লাহ তাঁর কিতাবে আমাদের যা জানিয়েছেন। হয় আমরা জয়ী হব, আর জয় আমাদের জন্য হুসনা, এক কল্যাণ। নয়তো আমরা নিহত হব, আর শাহাদাত আমাদের জন্য সবচেয়ে বড় হুসনা। এই পাঠে লানা মানে বক্তাদের পক্ষে লেখা। তাদের যা-ই ঘটুক, তা সেই দুই পরিণতির একটি, যাকে কিতাব আগেই কল্যাণ বলে দিয়েছে। তাই মুনাফিকরা যাকে বিপদ বলে, মুমিনদের নিজেদের বাক্যে তা তাদের উপকারের জন্যই লেখা।"
          },
          {
            "en": "The word in the verse is lana, for us. Al-Baghawi and the Muyassar gloss it with 'alayna, upon us, and at-Tabari sets decreed upon us beside it. Al-Qurtubi's second view keeps the sense of for our good. He introduces both views with qila, it was said, and does not choose between them, and nothing in the other texts fetched for this verse settles it. The two readings stand side by side here as he left them.",
            "bn": "আয়াতের শব্দ লানা, আমাদের জন্য। কিন্তু বাগাভী আর মুয়াসসার এর ব্যাখ্যায় বলেন আলাইনা, আমাদের ওপর। তাবারীও এর পাশে যোগ করেন, আমাদের ওপর ফয়সালা করেছেন। কুরতুবীর দ্বিতীয় মত ধরে রাখে আমাদের কল্যাণের অর্থ। দুটি মতই তিনি আনেন কীলা দিয়ে, মানে বলা হয়েছে, আর কোনোটিকে বেছে নেন না। এ আয়াতের জন্য সংগৃহীত অন্য কোনো তাফসীরও বিষয়টির নিষ্পত্তি করে না। তাই দুই পাঠ এখানে পাশাপাশি থাকছে, তিনি যেভাবে রেখে গেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge, Decree, the Book",
          "bn": "জ্ঞান, তাকদীর আর কিতাব"
        },
        "p": [
          {
            "en": "Al-Qurtubi then sums the clause up: the meaning is that everything is by qada' and qadar, decree and measure. He refers back to his commentary on al-A'raf, where he set out that knowledge, decree and the writing are one and the same. Ibn Kathir's gloss is a single line: we are under Allah's will and His decree. As-Sa'di draws an obligation from it, joined to the next clause: it is upon us to be content with His decrees, and nothing of the matter is in our hands.",
            "bn": "এরপর কুরতুবী অংশটির সারকথা বলেন: অর্থ হলো, সব কিছু ঘটে কাযা ও কদর অনুযায়ী, আল্লাহর ফয়সালা ও পরিমাপে। তিনি আল-আ'রাফের তাফসীরে নিজের আগের আলোচনার দিকে ফিরিয়ে দেন, যেখানে বলেছেন জ্ঞান, তাকদীর আর লেখা একই কথা। ইবন কাসীরের ব্যাখ্যা এক লাইনের: আমরা আল্লাহর ইচ্ছা ও তাঁর তাকদীরের অধীন। সা'দী পরের অংশের সঙ্গে মিলিয়ে এখান থেকে একটি দায়িত্ব বের করেন: তাঁর ফয়সালায় সন্তুষ্ট থাকা আমাদের কর্তব্য, আর বিষয়টির কোনো কিছুই আমাদের হাতে নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the verse against the hypocrites' outlook. The Prophet ﷺ is told to tell those who worship material causes that they are badly deceived. Such causes are no more than a curtain; the power that moves inside them belongs to none but Allah, and whatever happens to us is exactly what Allah has written for us. Believers, it concludes, should see causes as effective agents and signs, never as the real dispensers of any good or evil.",
            "bn": "মাআরিফুল কুরআন আয়াতটি পড়ে মুনাফিকদের দৃষ্টিভঙ্গির বিপরীতে রেখে। নবী ﷺ-কে বলা হচ্ছে, যারা বস্তুগত উপায়-উপকরণের পূজা করে, তাদের জানিয়ে দিন যে তারা বড় ধোঁকায় আছে। এসব উপকরণ পর্দা ছাড়া কিছু নয়। এদের ভেতরে যে শক্তি কাজ করে, তা আল্লাহ ছাড়া আর কারও নয়। আমাদের যা কিছু ঘটে, তা ঠিক তা-ই, যা আল্লাহ আমাদের জন্য লিখেছেন। তাই মাআরিফের উপসংহার, উপকরণকে কার্যকর মাধ্যম ও নিদর্শন হিসেবে দেখতে হবে। ভালো বা মন্দের আসল দাতা হিসেবে কখনো নয়।"
          },
          {
            "en": "Maududi, in Tafhim al-Qur'an on 9:50 and 9:51, draws the line between a man of the world and a man of God. The first exults when his ends are met, is crushed when they fail, and leans entirely on his resources. The second is neither exultant at success nor broken by failure, believing both are from Allah and a trial, and measures himself by whether he did his duty. He paraphrases the reply: we believe both the good and the bad are from Allah, and we depend on Him while you depend on material resources.",
            "bn": "মওদূদী তাফহীমুল কুরআনে ৯:৫০ ও ৯:৫১-এর আলোচনায় দুনিয়াদার মানুষ আর আল্লাহর বান্দার মধ্যে সীমারেখা টানেন। প্রথমজন লক্ষ্য পূরণ হলে উল্লাসে মাতে, ব্যর্থ হলে ভেঙে পড়ে, আর পুরোপুরি নিজের উপকরণের ওপর নির্ভর করে। দ্বিতীয়জন সাফল্যে উল্লসিত হন না, ব্যর্থতায় হতাশও হন না। কারণ তিনি বিশ্বাস করেন, দুটোই আল্লাহর পক্ষ থেকে এবং দুটোই পরীক্ষা। নিজের বিচার তিনি করেন দায়িত্ব পালন করেছেন কি না, তা দিয়ে। জবাবটি তিনি নিজের ভাষায় এভাবে বলেন: আমরা বিশ্বাস করি ভালো-মন্দ দুটোই আল্লাহর পক্ষ থেকে। আমরা ভরসা করি তাঁর ওপর, আর তোমরা ভরসা করো বস্তুগত উপকরণের ওপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Master, Helper, Refuge",
          "bn": "মনিব, সাহায্যকারী, আশ্রয়"
        },
        "p": [
          {
            "en": "Huwa mawlana, He is our Mawla, draws a cluster of glosses. Ibn Kathir: our master and our refuge, sayyiduna wa malja'una. At-Tabari: our helper against His enemies. The Muyassar says nearly the same with one pronoun changed: our helper against our enemies. Al-Baghawi: our helper and our guardian. Ma'arif al-Qur'an gives three English words, Master, Guardian and Helper. The Jalalayn joins two senses: our Helper, and the One in charge of our affairs.",
            "bn": "হুয়া মাওলানা, তিনিই আমাদের মাওলা। এ কথার ব্যাখ্যা এসেছে কয়েক রকম। ইবন কাসীর বলেন, আমাদের মনিব ও আমাদের আশ্রয়, সাইয়্যিদুনা ওয়া মালজাউনা। তাবারী বলেন, তাঁর শত্রুদের বিরুদ্ধে আমাদের সাহায্যকারী। মুয়াসসার প্রায় একই কথা বলে, শুধু একটি সর্বনাম বদলে: আমাদের শত্রুদের বিরুদ্ধে আমাদের সাহায্যকারী। বাগাভী বলেন, আমাদের সাহায্যকারী ও রক্ষাকারী। মাআরিফুল কুরআন তিনটি শব্দ ব্যবহার করে: মনিব, অভিভাবক আর সাহায্যকারী। জালালাইন দুই অর্থ একসঙ্গে রাখে: আমাদের সাহায্যকারী এবং আমাদের সব বিষয়ের দায়িত্বশীল।"
          },
          {
            "en": "Two glosses go further. Al-Baghawi reports al-Kalbi: He is more entitled to us than we are to ourselves, in death and in life. The Tanwir al-Miqbas has: He has the better right to protect us. As-Sa'di glosses Mawla as mutawalli umurina: He takes charge of our affairs, religious and worldly, and it is from this that he draws the duty of contentment noted above. The clause stands in the verse between what is written and the command to rely, and his gloss reads it as the link between the two.",
            "bn": "দুটি ব্যাখ্যা আরও এগিয়ে যায়। বাগাভী কালবীর কথা আনেন: মৃত্যু ও জীবন, দুই অবস্থাতেই আমাদের ওপর আমাদের নিজেদের চেয়ে তাঁর অধিকার বেশি। তানভীরুল মিকবাসে আছে: আমাদের রক্ষা করার অধিকার তাঁরই বেশি। সা'দী মাওলাকে বলেন সেই সত্তা, যিনি আমাদের দ্বীনি ও দুনিয়াবি সব বিষয়ের দায়িত্ব নেন। ওপরে যে সন্তুষ্টির কর্তব্যের কথা এসেছে, তা তিনি এখান থেকেই বের করেন। আয়াতে এ অংশটি বসেছে লেখা আর ভরসার আদেশের মাঝখানে। সা'দীর ব্যাখ্যা একে পড়ে দুটির সংযোগ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Relying on No One Else",
          "bn": "আর কারও ওপর নয়"
        },
        "p": [
          {
            "en": "At-Tabari glosses the last clause with a condition and a promise. Let the believers rely upon Allah, for if they rely on Him, and do not hope for help from anyone but Him, and fear nothing but Him, He will suffice them in their affairs and help them against whoever wronged them and plotted against them. The reliance he describes has three parts, trust placed in Him, hope withheld from others and fear withheld from others, and the sufficiency follows from all three.",
            "bn": "শেষ অংশের ব্যাখ্যায় তাবারী একটি শর্ত আর একটি প্রতিশ্রুতি রাখেন। মুমিনরা আল্লাহর ওপর ভরসা করুক। কারণ তারা যদি তাঁর ওপর ভরসা করে, তিনি ছাড়া আর কারও কাছে সাহায্যের আশা না রাখে, আর তিনি ছাড়া কাউকে ভয় না করে, তবে তিনি তাদের সব কাজে যথেষ্ট হবেন। যারা তাদের ওপর জুলুম করেছে আর তাদের বিরুদ্ধে চক্রান্ত করেছে, তাদের বিরুদ্ধে তিনি তাদের সাহায্য করবেন। তাঁর বর্ণনায় ভরসার তিনটি অংশ: তাঁর ওপর আস্থা রাখা, অন্যের কাছে আশা না রাখা, অন্যকে ভয় না করা। আর যথেষ্ট হওয়ার প্রতিশ্রুতি আসে এই তিনটির পরেই।"
          },
          {
            "en": "As-Sa'di and the Muyassar both insert wahdahu, alone, after the name. As-Sa'di spells the reliance out: depending on Him to bring about their good and turn harm away, and trusting Him to obtain what they seek. Whoever relies on Him is never disappointed, he says, and whoever relies on another is forsaken and does not reach what he hoped. Ibn Kathir turns the command into the speakers' own words, and we rely on Him, and closes with He is sufficient for us, and what an excellent guardian, close to the words of 3:173.",
            "bn": "সা'দী আর মুয়াসসার দুজনেই আল্লাহর নামের পরে যোগ করেন ওয়াহদাহু, একমাত্র তাঁরই ওপর। সা'দী ভরসাকে খুলে বলেন: নিজেদের কল্যাণ আনা আর ক্ষতি ঠেকানোর জন্য তাঁর ওপর নির্ভর করা, এবং কাঙ্ক্ষিত জিনিস পাওয়ার ব্যাপারে তাঁর ওপর আস্থা রাখা। তিনি বলেন, যে তাঁর ওপর ভরসা করে, সে কখনো ব্যর্থ হয় না। আর যে অন্যের ওপর ভরসা করে, সে অসহায় হয়ে পড়ে, আশা পূরণ হয় না। ইবন কাসীর আদেশটিকে বক্তাদের নিজেদের কথায় রূপ দেন: আর আমরা তাঁরই ওপর ভরসা করি। শেষ করেন এই বলে: তিনিই আমাদের জন্য যথেষ্ট, আর তিনি কত উত্তম কার্যনির্বাহক। কথাটি ৩:১৭৩-এর ভাষার খুব কাছাকাছি।"
          }
        ]
      },
      {
        "h": {
          "en": "Trust That Ties the Camel",
          "bn": "ভরসা, উট বেঁধে রেখে"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an gives this verse a heading of its own: belief in destiny includes the management of affairs, and calling inaction or mismanagement trust is wrong. The outcome of believing in taqdir and tawakkul, it says, should never be that one sits at home doing nothing and says what will be will be. One should put full energy and courage into arranging whatever lawful means lie within one's control, and only then resign the matter to destiny and trust, with one's sight kept on Allah alone.",
            "bn": "মাআরিফুল কুরআন এ আয়াতের জন্য আলাদা একটি শিরোনাম রাখে: তাকদীরে বিশ্বাসের মধ্যে কাজের ব্যবস্থাপনাও আছে, আর নিষ্ক্রিয়তা বা অব্যবস্থাপনাকে তাওয়াক্কুল নাম দেওয়া ভুল। এর বক্তব্য, তাকদীর ও তাওয়াক্কুলে বিশ্বাসের ফল কখনো এমন হবে না যে মানুষ ঘরে বসে থাকবে, কিছুই করবে না, আর বলবে যা হওয়ার তা-ই হবে। নিজের সাধ্যের ভেতরে যত বৈধ উপকরণ জোগাড় করা যায়, তাতে পূর্ণ শক্তি ও সাহস লাগাতে হবে। তারপরই বিষয়টি তাকদীর ও ভরসার হাতে ছেড়ে দিতে হবে, আর দৃষ্টি রাখতে হবে শুধু আল্লাহর দিকে।"
          },
          {
            "en": "It names two errors on either side: people who recognise nothing beyond material means and make them their deity, and people who turn destiny and trust into a pretext for sloth. The Prophet ﷺ, it says, made full preparation for jihad, and this verse then ended that cycle of excess and deficiency. It quotes a Persian saying, not a hadith: with trust, do tie the camel's knees. Means within reach are blessings from Allah, and leaving them unused is ingratitude, but they must not be given a status they do not have.",
            "bn": "মাআরিফ দুই দিকের দুটি ভুলের কথা বলে। একদল বস্তুগত উপকরণের বাইরে কিছুই মানে না, উপকরণকেই উপাস্য বানিয়ে নেয়। আরেক দল তাকদীর আর ভরসাকে অলসতার অজুহাত বানায়। এর বক্তব্য, নবী ﷺ জিহাদের পূর্ণ প্রস্তুতি নিয়েছিলেন, তারপর এ আয়াত বাড়াবাড়ি আর কমতির সেই চক্রের অবসান ঘটায়। এখানে একটি ফারসি প্রবাদ উদ্ধৃত হয়েছে, এটি হাদীস নয়: ভরসা রাখো, তবে উটের হাঁটু বেঁধে নাও। হাতের কাছের উপকরণ আল্লাহর নিয়ামত। এগুলো কাজে না লাগানো অকৃতজ্ঞতা। তবে উপকরণকে এমন মর্যাদা দেওয়া যাবে না, যা তার নেই।"
          },
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, so none is quoted here. Reliance has its own deep treatment at 3:160, and the prior writing of affliction and its effect on the heart are read at 57:22 and 57:23, and at 64:11. The next verse turns the reply outward: do you await for us anything but one of the two best things (9:52), in the dual of husna, the very word al-Qurtubi's second reading used for victory and martyrdom.",
            "bn": "এ আয়াতের জন্য সংগৃহীত তাফসীরগুলোর কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করে না, তাই এখানে কোনো হাদীস উদ্ধৃত হলো না। তাওয়াক্কুলের বিস্তারিত আলোচনা আছে ৩:১৬০-এ। বিপদ আগেই লিখে রাখা আর অন্তরে তার প্রভাবের কথা পড়ুন ৫৭:২২ ও ৫৭:২৩ এবং ৬৪:১১ আয়াতে। পরের আয়াত জবাবটিকে মুনাফিকদের দিকে ঘুরিয়ে দেয়: তোমরা কি আমাদের জন্য দুই কল্যাণের একটি ছাড়া আর কিছুর অপেক্ষা করছ (৯:৫২)? এখানে আছে হুসনা শব্দের দ্বিবচন। কুরতুবীর দ্বিতীয় পাঠ জয় আর শাহাদাতকে ঠিক এই শব্দেই ডেকেছিল।"
          }
        ]
      }
    ]
  },
  "9:55": {
    "sections": [
      {
        "h": {
          "en": "After the Refused Charity",
          "bn": "ফিরিয়ে দেওয়া দানের পরে"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse comes after a refusal. 9:53 tells them to spend willingly or unwillingly, it will never be accepted from them; 9:54 gives the reasons, that they disbelieved in Allah and His Messenger ﷺ, that they come to prayer only lazily, and that they spend only unwillingly. Then our verse turns from their money to the Prophet's ﷺ eye, and 9:56 shows them swearing they are of you while they are not, a people afraid.",
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াত আসে একটা প্রত্যাখ্যানের পরে। ৯:৫৩ আয়াত তাদের বলে: খুশিমনে খরচ করো বা অনিচ্ছায়, তোমাদের কাছ থেকে তা কখনো কবুল হবে না। ৯:৫৪ আয়াত এর কারণ বলে দেয়: তারা আল্লাহ ও তাঁর রাসূলকে ﷺ অস্বীকার করেছে, নামাজে আসে অলসভাবে, আর খরচ করে অনিচ্ছা নিয়ে। এরপর আমাদের আয়াত তাদের টাকার প্রসঙ্গ ছেড়ে নবীর ﷺ চোখের দিকে ফেরে। আর ৯:৫৬ আয়াত দেখায়, তারা কসম খেয়ে বলে তারা তোমাদেরই লোক, অথচ তারা তা নয়; আসলে তারা ভয়ে কাঁপা এক দল।"
          },
          {
            "en": "The instruction itself is about looking rather than about them. Let not their wealth or their children impress you: an imperative addressed to the observer. Ibn Kathir reads it alongside two verses that do the same work, 20:131, do not extend your eyes toward what We have given various groups for enjoyment, the splendour of worldly life by which We test them; and 23:55-56, do they think that what We extend to them of wealth and children is because We hasten good things for them, rather they do not perceive.",
            "bn": "নির্দেশটা আসলে তাদের নিয়ে নয়, তাকানো নিয়ে। তাদের ধন-সম্পদ আর সন্তান তোমার চোখ ধাঁধিয়ে না দিক: আদেশটা যিনি দেখছেন তাঁর উদ্দেশে। ইবনু কাসীর এটিকে পড়েন একই কাজ করা আরও দুটি আয়াতের পাশে রেখে। ২০:১৩১: আমি তাদের বিভিন্ন দলকে ভোগের জন্য দুনিয়ার জীবনের যে চাকচিক্য দিয়েছি, যা দিয়ে তাদের পরীক্ষা করি, সেদিকে তুমি চোখ তুলে তাকিয়ো না। আর ২৩:৫৫-৫৬: তারা কি ভাবে, আমি যে তাদের ধন-সম্পদ আর সন্তান দিয়ে বাড়িয়ে চলেছি, তা দিয়ে তাদের জন্য কল্যাণ ত্বরান্বিত করছি? না, তারা বোঝে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Readings of One Clause",
          "bn": "এক কথার তিন পাঠ"
        },
        "p": [
          {
            "en": "At-Tabari opens by saying plainly that the exegetes differed about the interpretation, and the difference is about when the punishment happens. On the first reading the clause in the life of this world belongs earlier in the sentence and the punishment is in the hereafter: let not their wealth or their children impress you in the life of this world, for Allah only intends to punish them with it in the hereafter. Qatadah calls it one of the transpositions of speech, and Ibn Abbas (RA) is reported to the same effect.",
            "bn": "তাবারী শুরুতেই সোজাসুজি বলেন, এর ব্যাখ্যা নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে, আর মতভেদটা শাস্তি কখন হবে তা নিয়ে। প্রথম ব্যাখ্যায় 'দুনিয়ার জীবনে' কথাটা আসলে বাক্যের আগের অংশের, আর শাস্তি হবে আখিরাতে: দুনিয়ার জীবনে তাদের ধন-সম্পদ আর সন্তান তোমার চোখ ধাঁধিয়ে না দিক; আল্লাহ তো কেবল চান আখিরাতে এগুলো দিয়ে তাদের শাস্তি দিতে। কাতাদা একে বলেন কথার আগে-পিছে বসানোর একটি দৃষ্টান্ত, আর ইবনু আব্বাস (রাঃ) থেকেও এ অর্থে বর্ণনা আছে।"
          },
          {
            "en": "On the second reading the punishment is here, and it comes through the obligations. Al-Hasan is reported as glossing it: by the taking of the zakah and the expenditure in the path of Allah. Ibn Kathir gives the same meaning and attributes it to al-Hasan al-Basri. On that reading what looks like a tax to them is the punishment itself, because they part with what their hearts are attached to and get no reward for the parting.",
            "bn": "দ্বিতীয় পাঠে শাস্তি এই দুনিয়াতেই, আর তা আসে ফরজ দায়িত্বের পথ ধরে। হাসান থেকে বর্ণিত, তিনি এর ব্যাখ্যা করেছেন এভাবে: যাকাত আদায় আর আল্লাহর পথে খরচের মাধ্যমে। ইবনু কাসীরও একই অর্থ করেন, আর কথাটি হাসান বসরীর বলে উল্লেখ করেন। এ পাঠে তারা যেটাকে কর ভাবে, সেটাই আসলে শাস্তি। যে সম্পদে তাদের মন বাঁধা, তা হাতছাড়া করতে হয়, অথচ বিনিময়ে কোনো সওয়াব মেলে না।"
          },
          {
            "en": "The third reading is Ibn Zayd's, and at-Tabari records it in one line that changes the subject: by the calamities in it, which are punishment for them and, for the believers, reward. The same event, the same loss, sorted by whose it is. None of the three readings is dismissed by at-Tabari, and a reader who holds all three at once has the verse's range: a settlement that may fall due later, or already be running through what is owed, or already be arriving as trouble.",
            "bn": "তৃতীয় পাঠটি ইবনু যায়দের। তাবারী তা এক লাইনে লিখে রাখেন, আর সেই এক লাইনেই প্রসঙ্গ বদলে যায়: দুনিয়ার বিপদ-আপদ দিয়ে, যা তাদের জন্য শাস্তি আর মু'মিনদের জন্য প্রতিদান। একই ঘটনা, একই ক্ষতি; কার ভাগে পড়ল, তা দিয়েই ঠিক হয় সেটা কী। তাবারী তিনটি পাঠের কোনোটিই বাদ দেন না। যে পাঠক তিনটিকে একসঙ্গে মনে রাখেন, তিনি আয়াতের পুরো পরিসর দেখতে পান: এ এমন হিসাব, যা পরে চুকাতে হতে পারে, কিংবা এখনই চলছে ফরজ আদায়ের ভেতর দিয়ে, কিংবা এখনই আসছে বিপদের চেহারায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Cost to Get",
          "bn": "পেতে গিয়ে কী খরচ হলো"
        },
        "p": [
          {
            "en": "As-Sa'di supplies a fourth account of the punishment, and it is the one a modern reader will recognise fastest. What is meant by the punishment here, he writes, is what reaches them of hardship in acquiring it and the intense striving for that, and the heart's preoccupation with it, and the body's fatigue. Then he weighs it: if you set their pleasures in it against their hardships in it, there would be no comparison between them.",
            "bn": "শাস্তির চতুর্থ একটি ব্যাখ্যা দেন সা'দী, আর আজকের পাঠক এটিকেই সবচেয়ে তাড়াতাড়ি চিনবেন। তিনি লেখেন, এখানে শাস্তি মানে এসব জোগাড় করতে গিয়ে তাদের যে কষ্ট, তার পেছনে যে প্রাণপণ ছোটাছুটি, তা নিয়ে মনের যে দুশ্চিন্তা আর শরীরের যে ক্লান্তি। তারপর তিনি দুটোকে মেপে দেখান: এতে তাদের যত সুখ আর যত কষ্ট, পাশাপাশি রাখলে দুটোর কোনো তুলনাই চলে না।"
          },
          {
            "en": "His conclusion follows from the arithmetic rather than from the threat: since it distracted them from Allah and His remembrance, it became a bane upon them even in this world. And the greatest of its banes, he says, is that their hearts become attached to it and their will does not travel beyond it, so it becomes the end of what they seek and the limit of what they want, and no share for the hereafter is left in their hearts. The verse's last clause is then not a separate punishment but the destination of that attachment.",
            "bn": "তাঁর উপসংহার হুমকি থেকে আসে না, আসে ওই হিসাব থেকেই: এসব যেহেতু তাদের আল্লাহ আর তাঁর জিকির থেকে ভুলিয়ে রেখেছে, তাই দুনিয়াতেই এগুলো তাদের জন্য বিপদ হয়ে দাঁড়িয়েছে। তিনি বলেন, সবচেয়ে বড় বিপদ হলো, তাদের মন এতেই বাঁধা পড়ে যায়, আর তাদের ইচ্ছা এর বাইরে আর কোথাও যায় না। ফলে এটাই হয়ে ওঠে তাদের চাওয়ার শেষ আর আকাঙ্ক্ষার সীমা; আখিরাতের জন্য মনে আর কোনো জায়গাই থাকে না। তাহলে আয়াতের শেষ কথাটি আলাদা কোনো শাস্তি নয়; এভাবে বাঁধা পড়া মন শেষে যেখানে গিয়ে পৌঁছায়, এ সেই জায়গা।"
          }
        ]
      },
      {
        "h": {
          "en": "Souls That Depart Refusing",
          "bn": "অস্বীকার নিয়েই বেরিয়ে যাওয়া প্রাণ"
        },
        "p": [
          {
            "en": "The verb in the closing clause is tazhaq, used of a soul going out under pressure, and the state named with it is unbelief. As-Sa'di ends his entry on it with a question rather than a statement: what punishment is greater than this one, which entails lasting wretchedness and a clinging regret? The wealth and children of the opening are not mentioned again, which is the point. They have done their work by then and the verse has followed them to where they led.",
            "bn": "শেষ কথাটিতে যে ক্রিয়া এসেছে, তা তাযহাক; চাপের মুখে প্রাণ বেরিয়ে যাওয়া বোঝাতে এ শব্দ ব্যবহার হয়, আর এর সঙ্গে যে অবস্থার কথা আসে তা কুফর। সা'দী এ নিয়ে নিজের আলোচনা শেষ করেন কোনো ঘোষণা দিয়ে নয়, একটি প্রশ্ন দিয়ে: এর চেয়ে বড় শাস্তি আর কী হতে পারে, যার পরিণাম চিরস্থায়ী দুর্ভাগ্য আর পিছু না ছাড়া আফসোস? শুরুতে যে ধন-সম্পদ আর সন্তানের কথা ছিল, সেগুলোর কথা আর একবারও আসে না, আর আসল কথা ওটাই। ততক্ষণে ওরা নিজেদের কাজ সেরে ফেলেছে; আর আয়াত ওদের পিছু পিছু গিয়ে থেমেছে ঠিক সেখানে, যেখানে ওরা মানুষকে নিয়ে গেছে।"
          },
          {
            "en": "The whole sentence is repeated almost exactly at 9:85, thirty verses later, which is worth noticing for what it says about the surah's method rather than about the verse. A warning about admiring the comfortable is issued twice in one surah, in two different contexts, in nearly identical words. Whatever else it is, the repetition is a measure of how easily the mistake is made.",
            "bn": "গোটা বাক্যটি প্রায় হুবহু আবার এসেছে ৯:৮৫ আয়াতে, ত্রিশ আয়াত পরে। এটা খেয়াল করার মতো, তবে আয়াতটি সম্পর্কে যতটা না, তার চেয়ে বেশি সূরার ধরন সম্পর্কে। আরামে থাকা লোকদের দেখে মুগ্ধ হওয়ার ব্যাপারে আল্লাহ একই সূরায় দুবার সতর্ক করেছেন, দুই আলাদা প্রসঙ্গে, প্রায় একই শব্দে। আর কিছু না হোক, এ পুনরাবৃত্তি অন্তত বুঝিয়ে দেয়, ভুলটা কত সহজে হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses About Being Given",
          "bn": "দান পাওয়া নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "3:178 states the principle underneath all of this: let not those who disbelieve think that Our extending their time is better for them; We extend it only that they may increase in sin. That is the same structure as our verse, a gift read as favour and functioning as something else. 23:55-56 puts it as a question about perception, and ends by saying they do not perceive it, which is the detail that should make a reader cautious about his own case.",
            "bn": "এ সবকিছুর পেছনের নীতিটি বলে দেয় ৩:১৭৮ আয়াত: কাফিররা যেন না ভাবে, আমি তাদের যে অবকাশ দিচ্ছি তা তাদের জন্য ভালো; আমি তো অবকাশ দিই কেবল এজন্য, যাতে তাদের গুনাহ আরও বাড়ে। আমাদের আয়াতের গড়নও ঠিক এরকম: দানকে মনে করা হচ্ছে অনুগ্রহ, অথচ সেটা কাজ করছে অন্য কিছু হয়ে। ২৩:৫৫-৫৬ আয়াত কথাটা তোলে বোঝার ভুল নিয়ে একটি প্রশ্ন হিসেবে, আর শেষ করে এ কথা বলে যে তারা টেরই পায় না। পাঠককে নিজের ব্যাপারে সাবধান করতে এ খুঁটিনাটিটুকুই যথেষ্ট হওয়া উচিত।"
          },
          {
            "en": "20:131 gives the instruction in its gentlest form, addressed to the Prophet ﷺ himself, and adds the comparison our verse leaves out: the provision of your Lord is better and more enduring. And 8:28 with 64:15 give the same two nouns, wealth and children, their settled status in this vocabulary, that they are a trial, with a great reward kept elsewhere.",
            "bn": "নির্দেশটির সবচেয়ে কোমল রূপ এসেছে ২০:১৩১ আয়াতে, যেখানে আল্লাহ স্বয়ং নবীকে ﷺ বলছেন। সেখানে আরেকটি তুলনাও আছে, যা আমাদের আয়াতে নেই: তোমার রবের দেওয়া রিযক উত্তম ও অধিক স্থায়ী। আর ৮:২৮ ও ৬৪:১৫ আয়াত সেই একই দুটি জিনিস, সম্পদ আর সন্তান, সম্পর্কে কুরআনের স্থির কথাটি জানিয়ে দেয়: এগুলো পরীক্ষা, আর মহা প্রতিদান রাখা আছে অন্য জায়গায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Other People's Lives",
          "bn": "অন্যের জীবন বাইরে থেকে দেখা"
        },
        "p": [
          {
            "en": "The verse corrects the observer, which is the only person a reader can do anything about. It does not say the comfortable are hated or that comfort is a sign of anything; it forbids being impressed, and it gives a reason that has nothing to do with envy: the thing being admired is doing work its owner cannot see. Whether that work is the hardship of acquiring it, or the obligations it brings, or trouble that arrives as trouble, the mistake is the same mistake, reading a life from outside and calling it a verdict.",
            "bn": "আয়াত শুধরে দেয় যে দেখছে তাকে, আর পাঠক কেবল ওই একজনকে নিয়েই কিছু করতে পারেন। আয়াত বলে না যে আরামে থাকা লোকেরা ঘৃণার পাত্র, বা আরাম কোনো কিছুর আলামত। সে কেবল মুগ্ধ হতে নিষেধ করে, আর এমন একটা কারণ দেয় যার সঙ্গে হিংসার কোনো সম্পর্ক নেই: যে জিনিস দেখে মানুষ মুগ্ধ হয়, সেটা ভেতরে ভেতরে এমন কাজ করে চলেছে, যা তার মালিক দেখতে পায় না। সে কাজ জোগাড়ের কষ্ট হোক, সঙ্গে আসা দায়িত্ব হোক, বা সরাসরি বিপদ হয়ে আসুক, ভুলটা একই: বাইরে থেকে একটা জীবন দেখে সেটাকেই রায় বলে ধরে নেওয়া।"
          },
          {
            "en": "Turned inward it is sharper. As-Sa'di's arithmetic can be run on one's own year: set what a pursuit has given against what it has taken in sleep, temper, attention and time that was owed elsewhere. And his warning about the will that does not travel beyond the thing is testable too, because a person can ask what he would still want if this one matter were settled tomorrow, and notice how little comes to mind.",
            "bn": "নিজের দিকে ফেরালে কথাটা আরও ধারালো হয়। সা'দীর সেই হিসাব নিজের এক বছরের উপরেই কষে দেখা যায়। কোনো কিছুর পেছনে ছুটে যা পেয়েছেন, তার পাশে রাখুন যা হারিয়েছেন, অর্থাৎ ঘুম, মেজাজ, মনোযোগ আর এমন সময়, যা অন্য কোথাও দেওয়ার কথা ছিল। ইচ্ছা যে ওই জিনিসের বাইরে আর কোথাও যায় না, তাঁর এ সতর্কবাণীও যাচাই করা যায়। নিজেকে জিজ্ঞেস করুন: এ একটা বিষয় যদি কালই মিটে যায়, তারপর আর কী চাওয়ার থাকবে? খেয়াল করবেন, মনে আসে খুব অল্পই।"
          },
          {
            "en": "Ibn Zayd's reading has the most immediate use of the three, because it applies to a day rather than to a life. The same loss, he says, is punishment for one man and reward for another, which means the event itself settles nothing and the sorting happens in how it is received. That is worth remembering in both directions: a hard week is not evidence of anyone's standing, mine or my neighbour's, and the only part of it I can affect is which of the two things it turns into in my hands.",
            "bn": "তিনটির মধ্যে ইবনু যায়দের পাঠটিই সবচেয়ে সরাসরি কাজে লাগে, কারণ তা খাটে গোটা জীবনের উপর নয়, একটা দিনের উপর। তিনি বলেন, একই ক্ষতি একজনের জন্য শাস্তি, আরেকজনের জন্য প্রতিদান। অর্থাৎ ঘটনা নিজে কিছুই ঠিক করে না; ভাগটা হয় মানুষ সেটা কীভাবে গ্রহণ করে তা দিয়ে। কথাটা দুদিক থেকেই মনে রাখার মতো। কঠিন একটা সপ্তাহ কারও মর্যাদার প্রমাণ নয়, না আমার, না আমার প্রতিবেশীর। আর এর যে অংশে আমার হাত আছে, তা কেবল এটুকু: আমার হাতে পড়ে এটা ওই দুটোর কোনটা হয়ে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer About Your Eyes",
          "bn": "নিজের চোখ নিয়ে দোয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication, and the nearest thing the Quran puts beside it is the sentence 20:131 adds after the same instruction: the provision of your Lord is better and more enduring. Said as a reminder rather than a request, it is the exact counterweight to being impressed, because it does not deny that what the other man has is good; it says only that something else is better and lasts longer.",
            "bn": "আয়াতে কোনো দোয়া নেই। কুরআনে এর সবচেয়ে কাছের কথা হলো ২০:১৩১ আয়াতে একই নির্দেশের পর যোগ হওয়া বাক্যটি: তোমার রবের দেওয়া রিযক উত্তম ও অধিক স্থায়ী। চাওয়া হিসেবে নয়, নিজেকে মনে করিয়ে দেওয়ার জন্য বললে এটাই মুগ্ধ হওয়ার ঠিক পাল্টা ওজন। কারণ এ বাক্য অস্বীকার করে না যে অন্য লোকটির যা আছে তা ভালো; শুধু বলে, অন্য একটা জিনিস তার চেয়ে ভালো, আর বেশি দিন টেকে।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, do not let my eyes settle on what You have given somebody else, and do not let what You have given me become the thing I am punished by. It is assembled from the verse's opening imperative and as-Sa'di's gloss on its middle clause, and it is not a Sunnah du'a. The wording of 20:131 is the safer of the two to carry.",
            "bn": "এ আয়াতেরই শব্দ দিয়ে একটি বাক্য যোগ করা যায়, তবে এর বেশি কোনো দাবি ছাড়া: হে আল্লাহ, আপনি অন্য কাউকে যা দিয়েছেন, তার উপর আমার চোখ আটকে যেতে দেবেন না; আর আমাকে যা দিয়েছেন, তা যেন আমার শাস্তির কারণ হয়ে না দাঁড়ায়। বাক্যটি আয়াতের শুরুর হুকুম আর মাঝের কথাটির উপর সা'দীর ব্যাখ্যা মিলিয়ে বানানো; এটি সুন্নাহর দোয়া নয়। দুটোর মধ্যে ২০:১৩১ আয়াতের শব্দগুলো মুখে রাখাই বেশি নিরাপদ।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About What Impresses You",
          "bn": "যা আপনাকে মুগ্ধ করে, তা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Whose life impresses me at the moment, and what exactly is it that impresses me about it? The verse corrects the admiration rather than the other person's situation, so what would change in a week if I stopped ranking people by their circumstances? And something I am chasing may already be charging me: what has this year's pursuit taken from my sleep, my temper and my attention?",
            "bn": "এ মুহূর্তে কার জীবন আমাকে মুগ্ধ করে, আর ঠিক কোন জিনিসটা দেখে মুগ্ধ হই? আয়াত শুধরে দেয় আমার মুগ্ধতাকে, অন্য লোকের অবস্থাকে নয়। তাহলে মানুষকে তার অবস্থা দেখে উঁচু-নিচু করা ছেড়ে দিলে এক সপ্তাহে কী বদলাত? আর যে জিনিসের পেছনে ছুটছি, সেটা হয়তো এখনই আমার কাছ থেকে দাম আদায় করছে: এ বছরের ছোটাছুটি আমার ঘুম, মেজাজ আর মনোযোগ থেকে কী কেড়ে নিয়েছে?"
          },
          {
            "en": "Two more. The end the verse names is a soul departing while still refusing, so what in my life is pleasant enough that I would rather not examine where it is taking me? And the people described cannot see this while they are holding it: who is close enough to me to say something like it about my own hands, and would I actually listen if they did?",
            "bn": "আরও দুটি। আয়াত যে পরিণতির কথা বলে, তা হলো অস্বীকারের অবস্থাতেই প্রাণ বেরিয়ে যাওয়া। তাহলে আমার জীবনে এমন কী আছে, যা এত আরামের যে সেটা আমাকে কোথায় নিয়ে যাচ্ছে, তা আমি খতিয়ে দেখতেই চাই না? আর আয়াত যাদের কথা বলছে, জিনিসটা হাতে থাকা অবস্থায় তারা এটা দেখতে পায় না: আমার হাতে যা আছে, তা নিয়ে এমন কথা বলার মতো কাছের মানুষ কে আছেন, আর তিনি বললে আমি কি সত্যিই কান দেব?"
          }
        ]
      }
    ]
  },
  "9:60": {
    "sections": [
      {
        "h": {
          "en": "An Answer to a Complaint",
          "bn": "এক অভিযোগের জবাব"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse answers a grievance recorded two verses earlier. 9:58 says that among them are some who criticise you concerning the charities: if they are given from them they approve, and if they are not given from them they are angry at once. 9:59 answers with what they should have said instead, that Allah is sufficient for us and He will give us of His bounty. Then our verse settles the matter by publishing the list, and 9:61 moves on to those who abuse the Prophet ﷺ.",
            "bn": "সূরা তাওবা মাদানী। এ আয়াত জবাব দিচ্ছে দুই আয়াত আগে উল্লেখ করা একটি অভিযোগের। ৯:৫৮ আয়াত বলে, তাদের মধ্যে কেউ কেউ সদকা বণ্টন নিয়ে তোমাকে দোষারোপ করে: তা থেকে তাদের দেওয়া হলে তারা খুশি, আর না দেওয়া হলে সঙ্গে সঙ্গে রেগে যায়। ৯:৫৯ আয়াত বলে দেয়, এর বদলে তাদের কী বলা উচিত ছিল: আল্লাহই আমাদের জন্য যথেষ্ট, তিনি নিজের অনুগ্রহ থেকে আমাদের দেবেন। তারপর আমাদের আয়াত পুরো তালিকাটি প্রকাশ করে দিয়ে বিষয়টির ফয়সালা করে দেয়, আর ৯:৬১ আয়াত চলে যায় তাদের প্রসঙ্গে, যারা নবীকে ﷺ কষ্ট দেয়।"
          },
          {
            "en": "Ibn Kathir states the logic of that sequence in a sentence: after Allah mentioned the protest the hypocrites made to the Prophet ﷺ about the distribution of the alms, He stated that it is He who divided them, explained their rulings and decided their division, and did not delegate this to anyone else. So the answer to a complaint about who decides is not an argument but a schedule, and the schedule comes with a stamp at the end of it, an obligation from Allah.",
            "bn": "এ ধারাবাহিকতার যুক্তিটা ইবনু কাসীর এক বাক্যেই বলে দেন: সদকা বণ্টন নিয়ে মুনাফিকরা নবীর ﷺ কাছে যে আপত্তি তুলেছিল, তা উল্লেখ করার পর আল্লাহ জানিয়ে দিলেন, এ বণ্টন তিনি নিজেই করেছেন, এর বিধান বলে দিয়েছেন, কে কতটা পাবে তার ফয়সালাও করেছেন; এ দায়িত্ব আর কারও হাতে ছেড়ে দেননি। অর্থাৎ কে ঠিক করবে, এ অভিযোগের জবাব কোনো তর্ক নয়, একটি তালিকা। আর তালিকার শেষে আছে একটি সিলমোহর: আল্লাহর পক্ষ থেকে নির্ধারিত ফরজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Eight Shares, and No More",
          "bn": "আটটি ভাগ, বেশি নয়"
        },
        "p": [
          {
            "en": "As-Sa'di begins by narrowing the word itself: the charities here mean the obligatory zakah, and his evidence is that voluntary charity is for anyone and nobody is singled out for it. Then the restriction: the alms are for these mentioned and no others, because He confined them to them, and they are eight kinds. The particle at the head of the verse does that work, and the closing clause seals it as an obligation He apportioned, following His knowledge and His wisdom.",
            "bn": "সা'দী শুরুতেই শব্দটির পরিধি ছোট করে আনেন: এখানে সদকা মানে ফরজ যাকাত। তাঁর দলিল হলো, নফল সদকা যে কাউকে দেওয়া যায়, তার জন্য কাউকে আলাদা করে নির্দিষ্ট করা হয় না। এরপর সীমা টেনে দেন: যাকাত কেবল এ উল্লেখিত লোকদের জন্য, অন্য কারও জন্য নয়, কারণ আল্লাহ একে এদের মধ্যেই সীমাবদ্ধ করেছেন; আর এরা আট শ্রেণি। আয়াতের শুরুর শব্দটিই এ সীমা টানার কাজ করে, আর শেষ কথাটি তাতে সিলমোহর মেরে দেয়: এ এমন ফরজ, যা তিনি নিজের ইলম আর হিকমত অনুযায়ী ভাগ করে দিয়েছেন।"
          },
          {
            "en": "The eight, in the order the verse gives them: the poor, the needy, those employed to collect it, those whose hearts are to be won, the freeing of necks, the debtors, the path of Allah, and the traveller cut off from home. Two are named for what they lack, one for work done, one for a diplomatic purpose, one for a legal status, one for a liability, one for a cause, one for a circumstance. Only the first two are what most readers picture when they hear the word.",
            "bn": "আয়াতে যে ক্রমে এসেছে, সেই ক্রমে আটটি হলো: ফকীর, মিসকীন, যাকাত আদায়ের কাজে নিযুক্ত কর্মী, যাদের অন্তর জয় করা দরকার, গর্দান মুক্ত করা, ঋণগ্রস্ত, আল্লাহর পথ, আর ঘর থেকে বিচ্ছিন্ন মুসাফির। এর দুটির নাম এসেছে তাদের অভাবের কারণে, একটির করা কাজের জন্য, একটির কূটনৈতিক উদ্দেশ্যে, একটির আইনি অবস্থার কারণে, একটির দায়ের কারণে, একটির কোনো লক্ষ্যের জন্য, আর একটির পরিস্থিতির কারণে। শব্দটা শুনলে বেশিরভাগ পাঠকের চোখে কেবল প্রথম দুটিই ভাসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Faqir, and Miskin",
          "bn": "ফকীর আর মিসকীন"
        },
        "p": [
          {
            "en": "At-Tabari reports that the exegetes differed over how the first two differ, and the reports he gathers turn on asking. Some said the faqir is the needy man who restrains himself from asking and the miskin is the needy man who asks. Al-Hasan drew it physically: the faqir is the one sitting in his house, the miskin the one who goes about. Ibn Abbas (RA) is reported saying the masakin are those who go around and the fuqara' are the poor of the Muslims, and Jabir ibn Zayd and az-Zuhri are carried to similar effect.",
            "bn": "তাবারী জানান, প্রথম দুটির পার্থক্য নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে, আর তিনি যেসব বর্ণনা এনেছেন তার মূল কথা চাওয়া না-চাওয়া। কেউ বলেছেন, ফকীর সেই অভাবী, যে কারও কাছে হাত পাতে না; আর মিসকীন সেই অভাবী, যে হাত পাতে। হাসান পার্থক্যটা দেখিয়েছেন চলাফেরা দিয়ে: ফকীর নিজের ঘরে বসে থাকে, মিসকীন ঘুরে বেড়ায়। ইবনু আব্বাস (রাঃ) থেকে বর্ণিত, মিসকীন তারা, যারা ঘুরে বেড়ায়, আর ফকীর হলো মুসলিমদের মধ্যকার গরিবরা। জাবির ইবনু যায়দ ও যুহরী থেকেও একই ধরনের কথা বর্ণিত আছে।"
          },
          {
            "en": "Ibn Kathir lists the same division and names Ibn Abbas (RA), Mujahid, al-Hasan al-Basri and Ibn Zayd for it, that the faqir is graceful and does not ask while the miskin follows after people begging, and he adds Qatadah's different cut, that the faqir is the ill person and the miskin the physically fit. As-Sa'di replaces the whole question with a measure: the faqir finds nothing, or finds part of his sufficiency short of half of it; the miskin finds half or more but not the whole of it, since if he found it he would be rich.",
            "bn": "ইবনু কাসীরও একই ভাগ উল্লেখ করেন এবং এর পক্ষে ইবনু আব্বাস (রাঃ), মুজাহিদ, হাসান বসরী ও ইবনু যায়দের নাম নেন: ফকীর আত্মসম্মান নিয়ে চলে, কারও কাছে চায় না; আর মিসকীন মানুষের পেছনে পেছনে ঘুরে চেয়ে বেড়ায়। সঙ্গে তিনি কাতাদার ভিন্ন একটি ভাগও যোগ করেন: ফকীর হলো অসুস্থ মানুষ, আর মিসকীন সুস্থ-সবল। সা'দী পুরো প্রশ্নটাই বদলে দেন একটা মাপকাঠি দিয়ে: ফকীর কিছুই পায় না, কিংবা প্রয়োজনের অর্ধেকেরও কম পায়; মিসকীন অর্ধেক বা তার বেশি পায়, কিন্তু পুরোটা পায় না, কারণ পুরোটা পেলে তো সে ধনীই হয়ে যেত।"
          },
          {
            "en": "As-Sa'di also explains why the poor come first, and the reason is a rule about lists: Allah began with them, and one begins only with the most important. Both are to be given, he says, what removes their poverty and their neediness. A hadith belongs here too, brought by Ibn Kathir among those for this category. Jami at-Tirmidhi 652 preserves from Abdullah ibn Amr (RA) that charity is not lawful for the rich nor for one who is physically fit, and at-Tirmidhi's grading of it is hasan.",
            "bn": "ফকীরদের কথা কেন আগে এসেছে, সা'দী তাও বুঝিয়ে দেন, আর কারণটা তালিকা সাজানোর একটা নিয়ম: আল্লাহ তাদের দিয়েই শুরু করেছেন, আর শুরু তো করা হয় সবচেয়ে জরুরিটা দিয়েই। তিনি বলেন, দুজনকেই এতটা দিতে হবে, যাতে তাদের অভাব আর দারিদ্র্য দূর হয়। এখানে একটি হাদিসও প্রাসঙ্গিক; ইবনু কাসীর এ শ্রেণির আলোচনায় যে হাদিসগুলো এনেছেন, এটি সেগুলোর একটি। জামি আত-তিরমিযীর ৬৫২ নম্বর হাদিসে আবদুল্লাহ ইবনু আমর (রাঃ) থেকে বর্ণিত: ধনীর জন্য সদকা হালাল নয়, সুস্থ-সবল মানুষের জন্যও নয়। তিরমিযী এ হাদিসকে হাসান বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Wages, and Hearts",
          "bn": "মজুরি আর অন্তর"
        },
        "p": [
          {
            "en": "The third share is not charity at all. As-Sa'di defines the workers on the zakah as everyone who has work and occupation in it, a keeper of it, a collector from those who owe it, a herdsman, a carrier, a scribe or the like, and he is careful about what they receive: they are given for their labour, and it is a wage for their work in it. A man may therefore take from the zakah without being poor, because what he is being paid for is the administering of it.",
            "bn": "তৃতীয় ভাগটি আসলে দানই নয়। সা'দী যাকাতের কর্মীর সংজ্ঞা দেন এভাবে: যাকাতের কাজে যারই কোনো দায়িত্ব বা ব্যস্ততা আছে, সে-ই এর মধ্যে পড়ে; যেমন যাকাতের মালের রক্ষক, যাদের উপর যাকাত পাওনা তাদের থেকে আদায়কারী, রাখাল, বাহক, লেখক বা এ ধরনের কেউ। তারা কী পাবে, সে ব্যাপারে তিনি সতর্ক: তাদের দেওয়া হয় শ্রমের বিনিময়ে, আর তা এ কাজের মজুরি। তাই কেউ ফকীর না হয়েও যাকাত থেকে নিতে পারে, কারণ তাকে পারিশ্রমিক দেওয়া হচ্ছে যাকাত পরিচালনার কাজের জন্য।"
          },
          {
            "en": "The fourth is stranger to modern ears and as-Sa'di spells out its cases. Those whose hearts are to be won, he writes, is the chief obeyed among his people: one whose Islam is hoped for, or whose harm is feared, or whose faith is hoped to be strengthened by the gift, or through whom the Islam of his like is hoped for, or through whom the zakah may be collected from one who withholds it. He is given what achieves the winning over and the benefit. The share exists, that is, for a public purpose rather than for a private need.",
            "bn": "চতুর্থটি আজকের কানে আরও অচেনা শোনায়, তাই সা'দী এর ক্ষেত্রগুলো খুলে বলেন। তিনি লেখেন, যাদের অন্তর জয় করা দরকার, তারা হলো নিজের গোত্রে মান্যগণ্য নেতা: যার ইসলাম গ্রহণের আশা আছে, কিংবা যার ক্ষতির আশঙ্কা আছে, কিংবা এ দানে যার ঈমান মজবুত হবে বলে আশা করা যায়, কিংবা যার মাধ্যমে তার মতো অন্যরা ইসলাম গ্রহণ করবে বলে আশা করা যায়, কিংবা যার মাধ্যমে যাকাত দিতে অস্বীকারকারীর কাছ থেকে যাকাত আদায় করা যায়। তাকে ততটুকু দেওয়া হয়, যতটুকুতে মন জয় করা আর কল্যাণটা অর্জিত হয়। অর্থাৎ এ ভাগ ব্যক্তিগত অভাব মেটানোর জন্য নয়, সমাজের বৃহত্তর স্বার্থে।"
          }
        ]
      },
      {
        "h": {
          "en": "Necks, and Debts",
          "bn": "গর্দান আর ঋণ"
        },
        "p": [
          {
            "en": "The fifth share is the freeing of necks. As-Sa'di reads it first of the mukatabun, those who have contracted to buy themselves from their masters and are striving to obtain what frees their necks, so they are helped with it from the zakah. Then he widens it twice: the ransoming of a Muslim captive held by disbelievers enters into this, indeed with more right, and it is permissible to free slaves from it outright, since that too falls under the words in the freeing of necks.",
            "bn": "পঞ্চম ভাগ হলো গর্দান মুক্ত করা। সা'দী প্রথমে এটিকে মুকাতাবদের ব্যাপারে ধরেন। মুকাতাব তারা, যারা মালিকের সঙ্গে নিজেকে কিনে নেওয়ার চুক্তি করেছে আর মুক্তির অর্থ জোগাড়ের চেষ্টা করছে; যাকাত থেকে তাদের এ কাজে সাহায্য করা হয়। তারপর তিনি পরিধিটা দুবার বাড়ান। কাফিরদের হাতে বন্দী মুসলিমকে মুক্তিপণ দিয়ে ছাড়িয়ে আনাও এর মধ্যে পড়ে, বরং তার হক আরও বেশি। আর যাকাতের অর্থে সরাসরি দাস মুক্ত করাও জায়েজ, কারণ তাও গর্দান মুক্ত করা কথাটির আওতায় পড়ে।"
          },
          {
            "en": "The sixth he divides in two, and the first half is easy to miss. One kind of debtor is the man indebted for reconciling between people: when there is strife and discord between two groups and a man steps in between them with wealth he pays out to one side or to all of them, a share of the zakah is made his, so that he may be more energetic and firmer in his resolve — and, as-Sa'di says, he is given even if he is rich. The second kind borrowed for himself and then became unable to pay, and he is given what discharges his debt.",
            "bn": "ষষ্ঠটিকে তিনি দুই ভাগে ভাগ করেন, আর প্রথম ভাগটি সহজেই চোখ এড়িয়ে যায়। এক ধরনের ঋণগ্রস্ত হলো সেই ব্যক্তি, যে মানুষের মধ্যে মীমাংসা করতে গিয়ে ঋণী হয়েছে। দুই দলের মধ্যে ঝগড়া-বিবাদ বাধলে কেউ যদি মাঝখানে দাঁড়িয়ে নিজের সম্পদ থেকে এক পক্ষকে বা সব পক্ষকে কিছু দিয়ে মিটমাট করে, তবে যাকাতে তার একটা ভাগ রাখা হয়, যাতে সে আরও উৎসাহ পায় আর তার সংকল্প আরও দৃঢ় হয়। সা'দী বলেন, সে ধনী হলেও তাকে দেওয়া হবে। দ্বিতীয় ধরন হলো যে নিজের প্রয়োজনে ঋণ নিয়েছিল, পরে আর শোধ করতে পারছে না; তাকে ততটুকু দেওয়া হয়, যাতে তার ঋণ শোধ হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Path, and the Road",
          "bn": "পথ আর রাস্তা"
        },
        "p": [
          {
            "en": "The seventh, in as-Sa'di's reading, is the volunteer: the fighters in the path of Allah who have no register and no stipend, given from the zakah what helps them, the price of a weapon or a mount, or provision for himself and his dependants, so that he may devote himself to the striving and his heart be at rest. The last clause is the reason the share exists at all, since a man worrying about his family at home is not free for anything.",
            "bn": "সা'দীর পাঠে সপ্তম ভাগটি স্বেচ্ছাসেবীদের: আল্লাহর পথের সেই যোদ্ধারা, যাদের নাম কোনো তালিকায় নেই, যারা কোনো ভাতাও পায় না। যাকাত থেকে তাদের এমন কিছু দেওয়া হয়, যা তাদের কাজে লাগে: অস্ত্র বা বাহনের দাম, কিংবা নিজের আর পরিবারের খরচ, যাতে সে মন দিয়ে জিহাদে লেগে থাকতে পারে আর তার মন নিশ্চিন্ত থাকে। শেষ কথাটিই এ ভাগ থাকার আসল কারণ, কারণ ঘরে রেখে আসা পরিবারের চিন্তায় যে অস্থির, সে আর কোনো কাজে মন দিতে পারে না।"
          },
          {
            "en": "He then reports a wider application from the jurists and marks his own hesitation about one of them. Many of the jurists said that if a man able to earn devotes himself to seeking knowledge he is given from the zakah, because knowledge enters into striving in the path of Allah. They also said that a poor man may be given from it for his obligatory hajj, and as-Sa'di adds a bracketed reservation of his own about that second case. The eighth is the simplest: the stranger cut off in a land not his own, given what brings him to his town.",
            "bn": "এরপর তিনি ফকীহদের কাছ থেকে এর আরও বিস্তৃত প্রয়োগের কথা জানান, আর তার একটি নিয়ে নিজের দ্বিধাও লিখে রাখেন। অনেক ফকীহ বলেছেন, উপার্জনে সক্ষম কেউ যদি ইলম অর্জনে নিজেকে নিয়োজিত রাখে, তবে তাকে যাকাত থেকে দেওয়া যাবে, কারণ ইলমও আল্লাহর পথে জিহাদের অন্তর্ভুক্ত। তাঁরা আরও বলেছেন, ফরজ হজের জন্যও কোনো গরিবকে যাকাত থেকে দেওয়া যায়; দ্বিতীয় এ কথাটির ব্যাপারে সা'দী বন্ধনীর ভেতরে নিজের সংশয়ের কথা যোগ করেছেন। অষ্টমটি সবচেয়ে সহজ: নিজের দেশ ছেড়ে পরদেশে আটকে পড়া মুসাফির, যাকে এতটা দেওয়া হয়, যাতে সে নিজের শহরে ফিরে যেতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Reasons Behind Eight",
          "bn": "আটটির পেছনে দুই কারণ"
        },
        "p": [
          {
            "en": "As-Sa'di closes with the structure under the list, and it is the most useful thing in his entry. Know, he writes, that these eight kinds come back to two matters: one is whoever is given for his own need and benefit, like the poor and the needy and their like; the other is whoever is given because of the need for him and the benefit Islam takes through him. Read that way the workers, the hearts to be won, the mediator and the fighter all belong to one column and the poor to the other.",
            "bn": "সা'দী শেষ করেন তালিকার ভেতরের কাঠামোটা দেখিয়ে, আর তাঁর পুরো আলোচনায় এটাই সবচেয়ে কাজের কথা। তিনি লেখেন, জেনে রাখুন, এ আট শ্রেণি মূলত দুই ভাগে ফিরে আসে। এক, যাকে দেওয়া হয় তার নিজের প্রয়োজন আর উপকারের জন্য, যেমন ফকীর, মিসকীন ও তাদের মতো লোকেরা। দুই, যাকে দেওয়া হয় কারণ তাকে প্রয়োজন, আর তার মাধ্যমে ইসলামের উপকার হয়। এভাবে দেখলে কর্মী, যাদের অন্তর জয় করা দরকার, মীমাংসাকারী আর যোদ্ধা সবাই পড়ে এক কলামে, আর ফকীররা অন্য কলামে।"
          },
          {
            "en": "Then his claim about what the system would do if it ran: Allah made this share obligatory in the wealth of the rich to close the particular and the general needs of Islam and the Muslims, and if the rich paid the zakah of their wealth in the lawful manner, no poor Muslim would remain, and there would be from the wealth what guards the frontiers and by which all the religious interests are achieved. It is stated as a consequence of the design rather than as a hope.",
            "bn": "তারপর তাঁর দাবি, এ ব্যবস্থা ঠিকমতো চালু থাকলে কী হতো: আল্লাহ ধনীদের সম্পদে এ ভাগ ফরজ করেছেন, যাতে ইসলাম ও মুসলিমদের বিশেষ আর সাধারণ সব প্রয়োজন মেটে। ধনীরা যদি শরীয়তসম্মত উপায়ে নিজেদের সম্পদের যাকাত দিত, তবে মুসলিমদের মধ্যে একজন ফকীরও থাকত না; আর সেই সম্পদ থেকেই সীমান্ত পাহারার ব্যবস্থা হতো, দীনের সব কল্যাণও অর্জিত হতো। কথাটা তিনি আশা হিসেবে বলছেন না, বলছেন এ ব্যবস্থার স্বাভাবিক ফল হিসেবে।"
          },
          {
            "en": "Beside the verse stand others that fill in its first column. 2:273 describes those to be given as poor restricted for the cause of Allah, unable to move about, whom an ignorant person would think self-sufficient because of their restraint. 51:19 puts a right in the wealth of the righteous for the petitioner and the deprived. 59:7 lists shares of a different kind of wealth so that it would not circulate only among the rich. And 2:177 places giving wealth, in spite of love for it, inside the definition of righteousness itself.",
            "bn": "আরও কিছু আয়াত এ আয়াতের পাশে দাঁড়িয়ে এর প্রথম কলামটি পূর্ণ করে। ২:২৭৩ আয়াত বলে, দিতে হবে সেই অভাবীদের, যারা আল্লাহর পথে আটকে আছে, চলাফেরা করতে পারে না; আত্মসংযমের কারণে না-জানা লোক তাদের সচ্ছল ভাবে। ৫১:১৯ আয়াত নেককারদের সম্পদে প্রার্থী ও বঞ্চিতের হক রেখেছে। ৫৯:৭ আয়াত অন্য এক ধরনের সম্পদের ভাগগুলো উল্লেখ করে, যাতে সম্পদ কেবল ধনীদের মধ্যেই ঘুরপাক না খায়। আর ২:১৭৭ আয়াত সম্পদের প্রতি ভালোবাসা থাকা সত্ত্বেও তা দান করাকে নেকির সংজ্ঞার ভেতরেই রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Over the Share",
          "bn": "ভাগ নিয়ে একটি দোয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication; it gives a schedule and a stamp. What the Quran puts next to it is 9:59, the sentence the complainers should have said and did not: sufficient for us is Allah, Allah will give us of His bounty, and so will His Messenger ﷺ, indeed we are desirous toward Allah. It is the prayer of someone who has just been left out of a distribution, which is exactly the situation this passage was addressing.",
            "bn": "আয়াতে কোনো দোয়া নেই; আছে একটি তালিকা আর একটি সিলমোহর। কুরআন এর পাশে রেখেছে ৯:৫৯ আয়াত, অর্থাৎ সেই কথা, যা অভিযোগকারীদের বলা উচিত ছিল, কিন্তু তারা বলেনি: আমাদের জন্য আল্লাহই যথেষ্ট, আল্লাহ নিজের অনুগ্রহ থেকে আমাদের দেবেন, তাঁর রাসূলও ﷺ দেবেন; আমরা তো আল্লাহরই দিকে আশা করে আছি। এ হলো এমন কারও দোয়া, যাকে সদ্য কোনো বণ্টন থেকে বাদ দেওয়া হয়েছে; আর এ আয়াতগুলো ঠিক সেই পরিস্থিতির কথাই বলছিল।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, put my wealth where You named and not where I would have chosen, and keep me from resenting a share You gave to somebody else. It is assembled from the verse's list and from 9:58's complaint, and it is not a Sunnah du'a. The wording of 9:59 is the safer of the two and was supplied for precisely this use.",
            "bn": "এ আয়াতেরই শব্দ দিয়ে একটি বাক্য যোগ করা যায়, তবে এর বেশি কোনো দাবি ছাড়া: হে আল্লাহ, আমার সম্পদ সেখানেই পৌঁছে দিন, যেখানকার কথা আপনি বলেছেন, আমি নিজে যেখানে বেছে নিতাম সেখানে নয়; আর অন্য কাউকে আপনি যে ভাগ দিয়েছেন, তা নিয়ে আমার মনে ক্ষোভ জন্মাতে দেবেন না। বাক্যটি আয়াতের তালিকা আর ৯:৫৮ আয়াতের অভিযোগ মিলিয়ে বানানো; এটি সুন্নাহর দোয়া নয়। দুটোর মধ্যে ৯:৫৯ আয়াতের শব্দগুলোই বেশি নিরাপদ, আর ঠিক এ কাজের জন্যই সেগুলো দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Eight Doors",
          "bn": "আট দরজা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Eight doors are named and most of us know one. Which of the eight have I actually thought about since the last time I paid? One share is a wage for administering it and one is for a mediator's debt, so does my idea of charity have room for anything that is not simply feeding a hungry person? And the list is closed by the word it opens with: have I ever sent zakah somewhere because it felt worthy rather than because it was named?",
            "bn": "আটটি দরজার নাম এসেছে, অথচ আমরা বেশিরভাগই চিনি একটিকে। শেষবার যাকাত দেওয়ার পর থেকে এ আটটির কোনগুলো নিয়ে আমি সত্যিই ভেবেছি? একটি ভাগ যাকাত পরিচালনার মজুরি, আরেকটি মীমাংসাকারীর ঋণের জন্য; তাহলে দান নিয়ে আমার ধারণায় ক্ষুধার্তকে খাওয়ানো ছাড়া আর কিছুর জায়গা আছে কি? আর যে শব্দ দিয়ে তালিকা শুরু, সেটাই তালিকাকে বেঁধে দেয়: আমি কি কখনো কোথাও যাকাত পাঠিয়েছি এজন্য যে জায়গাটা যোগ্য মনে হয়েছে, আয়াতে তার নাম আছে বলে নয়?"
          },
          {
            "en": "Two more. The verse ends on His knowledge and His wisdom rather than on anyone's satisfaction, so what in the distribution of resources around me am I quietly certain I could arrange better? And the complaint that occasioned all of this came from men who wanted a share: when I object to how something has been divided, what am I actually objecting to?",
            "bn": "আরও দুটি। আয়াত শেষ হয় কারও সন্তুষ্টির কথায় নয়, আল্লাহর ইলম আর হিকমতের কথায়। তাহলে আমার আশপাশে সম্পদ বণ্টনের কোন ব্যাপারটা নিয়ে আমি মনে মনে নিশ্চিত যে আমি আরও ভালো সাজাতে পারতাম? আর এ সবকিছুর শুরু যে অভিযোগ থেকে, তা এসেছিল এমন লোকদের কাছ থেকে, যারা নিজেরা ভাগ চাইছিল: কোনো কিছুর ভাগাভাগি নিয়ে যখন আমি আপত্তি তুলি, তখন আসলে আমার আপত্তিটা কীসে?"
          }
        ]
      }
    ]
  },
  "9:70": {
    "sections": [
      {
        "h": {
          "en": "A Question, Not a Story",
          "bn": "প্রশ্ন, গল্প নয়"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse is put as a question to people who already have the answer. At-Tabari names them: has there not come to these hypocrites, who conceal disbelief in Allah and forbid faith in Him and in His Messenger ﷺ, the news of the nations before them, when they disobeyed Our messengers and opposed Our command, and what befell them of Our punishment? 9:69 has just told them their own conduct resembles the conduct of those people, and 9:71 will turn to the believers instead.",
            "bn": "সূরা তাওবা মাদানী। এ আয়াত একটি প্রশ্ন, আর তা করা হচ্ছে এমন লোকদের, যাদের জবাব আগে থেকেই জানা। তাবারী তাদের পরিচয় বলে দেন: এ মুনাফিকদের কাছে কি তাদের আগের জাতিগুলোর খবর পৌঁছায়নি? এরা তো আল্লাহর প্রতি কুফর গোপন রাখে, আর আল্লাহ ও তাঁর রাসূলের ﷺ প্রতি ঈমান আনতে নিষেধ করে। সেই জাতিগুলো যখন আমার রাসূলদের অবাধ্য হলো আর আমার হুকুমের বিরোধিতা করল, তখন আমার কোন শাস্তি তাদের উপর নেমে এসেছিল? ৯:৬৯ আয়াত এইমাত্র তাদের বলেছে, তাদের আচরণ ঠিক ওই লোকদেরই মতো; আর ৯:৭১ আয়াত মুখ ফেরাবে মু'মিনদের দিকে।"
          },
          {
            "en": "At-Tabari then reads the list as Allah's own rhetorical questions, supplying for each people the punishment the Quran records elsewhere. The people of Nuh, when they belied My messenger and opposed My command, did I not drown them in the flood? And Ad, when they disobeyed My messenger Hud, did I not destroy them with a furious howling wind? And Thamud, when they disobeyed My messenger Salih, did I not destroy them with the earthquake and leave them lifeless in their courtyards? And the people of Ibrahim, did I not strip them of the blessing and destroy their king?",
            "bn": "এরপর তাবারী তালিকাটিকে আল্লাহর নিজের প্রশ্ন হিসেবে পড়েন, আর প্রতিটি জাতির সঙ্গে জুড়ে দেন সেই শাস্তি, যার কথা কুরআন অন্য জায়গায় বলেছে। নূহের জাতি যখন আমার রাসূলকে মিথ্যাবাদী বলল আর আমার হুকুমের বিরোধিতা করল, আমি কি তাদের প্লাবনে ডুবিয়ে দিইনি? আদ যখন আমার রাসূল হূদের অবাধ্য হলো, আমি কি তাদের প্রচণ্ড গর্জনের ঝড়ে ধ্বংস করিনি? সামূদ যখন আমার রাসূল সালিহের অবাধ্য হলো, আমি কি তাদের ভূমিকম্পে ধ্বংস করে নিজেদের আঙিনায় নিথর ফেলে রাখিনি? আর ইবরাহীমের জাতি, আমি কি তাদের নিয়ামত কেড়ে নিইনি, তাদের রাজাকে ধ্বংস করিনি?"
          }
        ]
      },
      {
        "h": {
          "en": "Six Peoples, One Charge",
          "bn": "ছয় জাতি, এক অভিযোগ"
        },
        "p": [
          {
            "en": "The six are the people of Nuh (AS), Ad, Thamud, the people of Ibrahim (AS), the dwellers of Madyan and the overturned towns, which as-Sa'di identifies as the towns of the people of Lut (AS). Ibn Kathir goes through the same list with the same events, adding that Ad perished with the barren wind when they rejected Hud (AS), that Thamud were overtaken when they denied Salih (AS) and killed the camel, and that the dwellers of Madyan were the people of Shu'ayb (AS).",
            "bn": "ছয়টি জাতি হলো: নূহের (আঃ) জাতি, আদ, সামূদ, ইবরাহীমের (আঃ) জাতি, মাদয়্যানের অধিবাসী আর উল্টে দেওয়া জনপদগুলো; সা'দী শেষেরটিকে লূতের (আঃ) জাতির জনপদ বলে চিহ্নিত করেন। ইবনু কাসীরও একই তালিকা ধরে একই ঘটনাগুলো বলেন, সঙ্গে যোগ করেন: আদ হূদকে (আঃ) প্রত্যাখ্যান করলে বন্ধ্যা বাতাসে ধ্বংস হয়; সামূদ সালিহকে (আঃ) মিথ্যাবাদী বলে উটনীটিকে মেরে ফেললে শাস্তি তাদের পাকড়াও করে; আর মাদয়্যানের অধিবাসীরা ছিল শুআইবের (আঃ) জাতি।"
          },
          {
            "en": "A small difference of wording sits inside that agreement. At-Tabari names the earthquake for Thamud, which is what 7:78 records, while Ibn Kathir names the cry, which is what 11:67 records of the same people. Both words are in the Quran of them, so neither commentator has strayed; each has reached for a different verse. The article notes it rather than resolving it, because the difference is a reminder that these accounts are distributed across surahs and are meant to be read together.",
            "bn": "এ ঐকমত্যের ভেতরেও শব্দের একটা ছোট পার্থক্য আছে। তাবারী সামূদের শাস্তি হিসেবে ভূমিকম্পের কথা বলেন, যা ৭:৭৮ আয়াতে আছে; আর ইবনু কাসীর বলেন বিকট আওয়াজের কথা, যা একই জাতি সম্পর্কে ১১:৬৭ আয়াতে আছে। কুরআনে তাদের ব্যাপারে দুটি শব্দই এসেছে, তাই কোনো মুফাসসিরই ভুল করেননি; দুজন শুধু দুটি আলাদা আয়াতের দিকে হাত বাড়িয়েছেন। এ লেখা পার্থক্যটা মেটাতে যায়নি, শুধু খেয়াল করিয়ে দিচ্ছে। কারণ এ পার্থক্য মনে করিয়ে দেয়, এসব বিবরণ নানা সূরায় ছড়িয়ে আছে, আর সেগুলো মিলিয়ে পড়ার জন্যই।"
          },
          {
            "en": "Then one clause covers all six: their messengers came to them with clear proofs. As-Sa'di glosses the proofs as the truth made plain and evident, clarifying the realities of things, and says simply that they denied them, so what Allah has related to us came upon them. The indictment is not that nobody told them. It is that the telling arrived, with evidence attached, and was refused, and the punishment followed the refusal rather than the ignorance.",
            "bn": "তারপর একটি কথাতেই ছয়টি জাতি এসে যায়: তাদের রাসূলগণ তাদের কাছে স্পষ্ট প্রমাণ নিয়ে এসেছিলেন। সা'দী এ প্রমাণের ব্যাখ্যা দেন খোলাখুলি, সুস্পষ্ট সত্য হিসেবে, যা সব কিছুর আসল রূপ পরিষ্কার করে দেয়। তিনি সোজা বলেন, তারা তা মিথ্যা বলে উড়িয়ে দিল, তাই আল্লাহ আমাদের যা জানিয়েছেন, তা-ই তাদের উপর নেমে এল। অভিযোগ এটা নয় যে কেউ তাদের জানায়নি। অভিযোগ হলো, খবর পৌঁছেছিল, সঙ্গে প্রমাণও ছিল, তবু তারা তা প্রত্যাখ্যান করেছে। আর শাস্তি এসেছে না জানার কারণে নয়, এই প্রত্যাখ্যানের কারণে।"
          }
        ]
      },
      {
        "h": {
          "en": "Enjoyment, and Plunging",
          "bn": "ভোগ আর ডুবে থাকা"
        },
        "p": [
          {
            "en": "As-Sa'di treats 9:69 and our verse as one unit and reads the resemblance in detail. Your deeds resemble their deeds, he writes: you enjoyed your portion of the world, taking it by way of pleasure and appetite while turning away from what was intended by it, and you used it to help you to disobey Allah, and your aspiration and your will did not travel beyond the blessings you were given. Then the second half of the resemblance: and you plunged into falsehood and argued with falsehood in order to refute the truth with it.",
            "bn": "সা'দী ৯:৬৯ আর আমাদের আয়াতকে একসঙ্গে ধরেন, আর মিলটা খুঁটিয়ে দেখান। তিনি লেখেন, তোমাদের কাজ তাদের কাজেরই মতো: তোমরা দুনিয়ায় নিজেদের ভাগ ভোগ করেছ, নিয়েছ শুধু মজা আর প্রবৃত্তির টানে, অথচ এ দিয়ে আসলে যা উদ্দেশ্য ছিল, তা থেকে মুখ ফিরিয়ে রেখেছ। তোমরা এগুলো কাজে লাগিয়েছ আল্লাহর নাফরমানিতে, আর যে নিয়ামত পেয়েছ, তোমাদের আকাঙ্ক্ষা ও ইচ্ছা তার বাইরে আর কোথাও যায়নি। এরপর মিলের দ্বিতীয় অর্ধেক: তোমরা বাতিলে ডুবে থেকেছ, আর বাতিল দিয়ে তর্ক করেছ, যাতে সত্যকে নাকচ করা যায়।"
          },
          {
            "en": "He sums those two into a description of a whole civilisation: so these are their deeds and their knowledge, enjoyment of a portion and plunging into falsehood. Then he draws the believers' version of both, which is the useful half. They too enjoy their portion of what they were given, but by way of using it to help them to Allah's obedience; and their knowledge is the knowledge of the messengers, which is arriving at certainty in the high objectives, and arguing with the truth in order to refute falsehood.",
            "bn": "এ দুটি মিলিয়ে তিনি গোটা একটা সভ্যতার ছবি আঁকেন: এই হলো তাদের আমল আর তাদের ইলম, নিজেদের ভাগ ভোগ করা আর বাতিলে ডুবে থাকা। তারপর তিনি দুটোরই মু'মিন-রূপটা দেখান, আর কাজের অর্ধেক এটাই। মু'মিনরাও তাদের যা দেওয়া হয়েছে, তার ভাগ ভোগ করে, তবে তা কাজে লাগায় আল্লাহর আনুগত্যে। আর তাদের ইলম হলো রাসূলদের ইলম: মহান লক্ষ্যগুলো সম্পর্কে নিশ্চিত বিশ্বাসে পৌঁছানো, আর সত্য দিয়ে তর্ক করা, যাতে বাতিল নাকচ হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Wronged Whom",
          "bn": "কে কার উপর যুলম করল"
        },
        "p": [
          {
            "en": "The last clause closes the only exit left, and it closes it from the wrong side. Allah would never have wronged them, but they were wronging themselves. As-Sa'di ties the first half to the punishment: it was not injustice when He brought upon them what He brought. The sentence does not soften the destruction; it reassigns the authorship of it, and it does so in the imperfect tense, so that the wronging of themselves is described as something they kept doing rather than something they did once.",
            "bn": "শেষ কথাটি বেরোনোর শেষ পথটাও বন্ধ করে দেয়, আর বন্ধ করে উল্টো দিক থেকে। আল্লাহ তাদের প্রতি যুলম করার নন, বরং তারাই নিজেদের প্রতি যুলম করছিল। সা'দী প্রথম অংশটি শাস্তির সঙ্গে জুড়ে দেন: তিনি তাদের উপর যা নামিয়েছেন, তা অন্যায় ছিল না। বাক্যটি ধ্বংসকে নরম করে না; শুধু এর দায় কার, তা নতুন করে ঠিক করে দেয়। আর তা বলে মুদারি, অর্থাৎ চলমান কালে, যাতে বোঝা যায়, নিজেদের উপর যুলম তারা একবার করেনি, করেই চলছিল।"
          },
          {
            "en": "10:44 states the same principle without a single name attached to it: indeed Allah does not wrong the people at all, but it is the people who are wronging themselves. Putting the general rule beside the roll-call is what makes the verse usable, because the six were not chosen for being worse than everyone. They were chosen for being known. 30:9 makes the same move with travel instead of news, telling them to go and look at how the end of those before them was.",
            "bn": "১০:৪৪ আয়াত একই নীতি বলে, কোনো জাতির নাম না নিয়েই: নিশ্চয়ই আল্লাহ মানুষের প্রতি বিন্দুমাত্র যুলম করেন না, বরং মানুষই নিজেদের প্রতি যুলম করে। সাধারণ নিয়মটি নামের তালিকার পাশে রাখলেই আয়াতটি কাজে লাগানোর মতো হয়ে ওঠে। কারণ ওই ছয় জাতিকে বাছা হয়নি তারা সবার চেয়ে খারাপ ছিল বলে; বাছা হয়েছে তারা পরিচিত ছিল বলে। ৩০:৯ আয়াতও একই কাজ করে, তবে খবরের বদলে ভ্রমণ দিয়ে: তাদের বলে গিয়ে দেখে আসতে, তাদের আগের লোকদের পরিণাম কেমন হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Module's Own Index",
          "bn": "এ মডিউলেরই সূচিপত্র"
        },
        "p": [
          {
            "en": "Three of the six peoples have their own entries in this module, and the verse works as an index to them. Hud (AS) addressing Ad stands at 7:65; Salih (AS) addressing Thamud at 7:73 and 7:74, with his parting words at 7:79; Shu'ayb (AS) sent to Madyan at 7:85, and the earthquake that seized his people at 7:91. Read in that order, our verse is a list of chapter headings for accounts a reader of this module has already been given in full.",
            "bn": "ছয় জাতির তিনটির আলাদা আলোচনা এ মডিউলেই আছে, আর আয়াতটি যেন সেগুলোর সূচিপত্র। আদের উদ্দেশে হূদের (আঃ) কথা আছে ৭:৬৫ আয়াতে; সামূদের উদ্দেশে সালিহের (আঃ) কথা ৭:৭৩ আর ৭:৭৪ আয়াতে, আর তাঁর বিদায়ী কথা ৭:৭৯ আয়াতে; মাদয়্যানে শুআইবকে (আঃ) পাঠানোর কথা ৭:৮৫ আয়াতে, আর যে ভূমিকম্প তাঁর জাতিকে পাকড়াও করল তার কথা ৭:৯১ আয়াতে। এ ক্রমে পড়লে আমাদের আয়াত হয়ে দাঁড়ায় কয়েকটি অধ্যায়ের শিরোনাম, যেগুলোর পুরো বিবরণ এ মডিউলের পাঠক আগেই পেয়ে গেছেন।"
          },
          {
            "en": "That is not a coincidence of arrangement but the verse's own method. It does not retell any of the six stories; it assumes them and asks a question about what was done with them. A reader who has the accounts and draws nothing from them is in exactly the position the verse describes, which is a more uncomfortable place to stand than ignorance would be. The hypocrites of Madinah were not short of information either, and that is what the question at the head of the verse is for.",
            "bn": "এটা সাজানোর কোনো কাকতালীয় ব্যাপার নয়, এটাই আয়াতের নিজস্ব ধরন। আয়াত ছয়টি কাহিনির একটিও নতুন করে বলে না; ধরে নেয় সেগুলো জানা, আর প্রশ্ন তোলে: সেগুলো জেনে কী করা হলো? যে পাঠকের কাছে বিবরণগুলো আছে, অথচ তা থেকে কিছুই নেন না, তিনি ঠিক সেই অবস্থায় আছেন, যার কথা আয়াত বলছে। আর এ অবস্থা না জানার চেয়েও বেশি অস্বস্তির। মাদীনার মুনাফিকদেরও খবরের অভাব ছিল না; আয়াতের শুরুর প্রশ্নটা ঠিক এজন্যই।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Ruins Properly",
          "bn": "ধ্বংসের কাহিনি ঠিকভাবে পড়া"
        },
        "p": [
          {
            "en": "The practical use of a verse like this is narrow and it is not the obvious one. It is not an invitation to identify which modern people resemble Ad or Thamud; the verse is addressed to men who were being warned, not equipped to warn others, and its final clause puts the wronging inside the people themselves rather than in a category anybody can assign from outside.",
            "bn": "এ ধরনের আয়াতের ব্যবহারিক শিক্ষা সীমিত, আর তা প্রথমেই যা মনে আসে, সেটা নয়। আয়াতটি এই আমন্ত্রণ নয় যে আজকের কোন জাতি আদ বা সামূদের মতো, তা খুঁজে বের করতে হবে। আয়াত বলা হয়েছিল এমন লোকদের, যাদের সতর্ক করা হচ্ছিল; অন্যদের সতর্ক করার অস্ত্র তাদের হাতে তুলে দেওয়া হচ্ছিল না। আর এর শেষ কথাটি যুলমকে রাখে মানুষের নিজের ভেতরেই, এমন কোনো শ্রেণিতে নয়, যাতে বাইরে থেকে যে কেউ কাউকে বসিয়ে দিতে পারে।"
          },
          {
            "en": "What it does hand over is a test for reading. As-Sa'di's two columns, enjoyment of a portion and plunging into falsehood against using a portion for obedience and arguing with the truth, can be applied to a week without naming a nation. And the question the verse actually asks is answerable: what have I been told clearly enough that not knowing is no longer available to me, and what have I done since I was told?",
            "bn": "আয়াত যা হাতে তুলে দেয়, তা হলো পড়ার একটা কষ্টিপাথর। সা'দীর সেই দুই কলাম, একদিকে নিজের ভাগ ভোগ করা আর বাতিলে ডুবে থাকা, অন্যদিকে ভাগটা আনুগত্যে লাগানো আর সত্য দিয়ে তর্ক করা, কোনো জাতির নাম না নিয়েই নিজের এক সপ্তাহের উপর মিলিয়ে দেখা যায়। আর আয়াত আসলে যে প্রশ্ন করে, তার জবাব দেওয়া যায়: কোন কথা আমাকে এত স্পষ্ট করে বলা হয়েছে যে না জানার অজুহাত আর আমার নেই? আর জানার পর থেকে আমি কী করেছি?"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Against Repeating It",
          "bn": "একই ভুল না করার দোয়া"
        },
        "p": [
          {
            "en": "The verse carries no supplication and its closing clause is a verdict, so what belongs here is the thing the verse leaves a reader wanting: not to be among those who had the news. The Quran's nearest wording for that is in the general rule at 10:44, said as a reminder rather than a request, that Allah does not wrong people at all, which turns every complaint about one's own situation back to its source.",
            "bn": "আয়াতে কোনো দোয়া নেই, আর এর শেষ কথাটি একটি রায়। তাই এখানে মানায় সেই চাওয়া, যা আয়াত পাঠকের মনে জাগিয়ে রেখে যায়: যাদের কাছে খবর পৌঁছেছিল, তাদের দলে না পড়া। কুরআনে এর সবচেয়ে কাছের শব্দ ১০:৪৪ আয়াতের সাধারণ নিয়মটিতে: আল্লাহ মানুষের প্রতি কোনো যুলমই করেন না। এটা বলা হবে চাওয়া হিসেবে নয়, নিজেকে মনে করিয়ে দেওয়ার জন্য; আর এ কথা নিজের অবস্থা নিয়ে প্রতিটি অভিযোগকে তার আসল উৎসের দিকে ফিরিয়ে দেয়।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, You sent their messengers with clear proofs and the news reached me too, so do not let me be counted among those who had it and did nothing. It is assembled from the verse's middle clause and its closing one, and it is not a Sunnah du'a. The wording of 10:44 is the safer of the two and shorter to keep.",
            "bn": "এ আয়াতেরই শব্দ দিয়ে একটি বাক্য যোগ করা যায়, তবে এর বেশি কোনো দাবি ছাড়া: হে আল্লাহ, আপনি তাদের রাসূলদের স্পষ্ট প্রমাণ দিয়ে পাঠিয়েছিলেন, আর সেই খবর আমার কাছেও পৌঁছেছে; তাই আমাকে তাদের দলে গণ্য করবেন না, যাদের কাছে খবর ছিল অথচ তারা কিছুই করেনি। বাক্যটি আয়াতের মাঝের কথা আর শেষের কথা মিলিয়ে বানানো; এটি সুন্নাহর দোয়া নয়। দুটোর মধ্যে ১০:৪৪ আয়াতের শব্দগুলোই বেশি নিরাপদ, আর ছোট বলে মনে রাখাও সহজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About the News",
          "bn": "খবরটি নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "The charge here is not ignorance but refusal after evidence, so what have I been told clearly enough that not knowing is no longer available to me? Six histories are listed as though reading them were the point: which account of somebody else's ruin have I read and filed away without applying a single thing from it? And the verse says Allah did not wrong them, so when something goes badly for me, where does my mind go first to place the blame?",
            "bn": "এখানে অভিযোগ না জানার নয়, প্রমাণ পাওয়ার পরও প্রত্যাখ্যানের। তাহলে কোন কথা আমাকে এত স্পষ্ট করে বলা হয়েছে যে না জানার অজুহাত আর আমার নেই? ছয়টি ইতিহাস তালিকা করে দেওয়া হয়েছে, যেন পড়াটাই আসল কাজ: অন্যের ধ্বংসের কোন বিবরণ আমি পড়ে তুলে রেখেছি, অথচ তা থেকে একটা জিনিসও কাজে লাগাইনি? আর আয়াত বলে, আল্লাহ তাদের প্রতি যুলম করেননি। তাহলে আমার কিছু খারাপ হলে দোষ চাপাতে আমার মন প্রথমে কোন দিকে যায়?"
          },
          {
            "en": "Two more. The six were stronger and wealthier than the people being warned with their story, so what am I counting on that they had more of? And these were people who had the news in their hands: what do I already know about the end of a road I am still walking along, and what would it take for me to treat that knowledge as news rather than as history?",
            "bn": "আরও দুটি। যাদের এ কাহিনি শুনিয়ে সতর্ক করা হচ্ছিল, ওই ছয় জাতি তাদের চেয়ে বেশি শক্তিশালী আর বেশি ধনী ছিল। তাহলে আমি কীসের ভরসায় আছি, যা তাদের আরও বেশি ছিল? আর এরা ছিল এমন লোক, যাদের হাতে খবর ছিল: যে পথে আমি এখনো হাঁটছি, তার শেষে কী আছে, তা আমি আগে থেকেই কতটা জানি? আর সেই জানাকে ইতিহাস হিসেবে নয়, নিজের জন্য খবর হিসেবে নিতে আমার কী লাগবে?"
          }
        ]
      }
    ]
  },
  "9:72": {
    "sections": [
      {
        "h": {
          "en": "The Promise After the Portrait",
          "bn": "ছবির পরে ওয়াদা"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan, and this verse pays out what the verse before it described. 9:71 had named the believing men and the believing women as allies of one another and listed what they do: enjoin right, forbid wrong, establish the prayer, give the zakah, obey Allah and His Messenger ﷺ, and it closed by saying Allah will have mercy upon them. Our verse then states what the mercy consists of, and 9:73 turns away to a different address altogether.",
            "bn": "সূরা তাওবা মাদানী। আগের আয়াত যাদের বর্ণনা দিয়েছিল, এ আয়াত তাদের প্রাপ্যটা বুঝিয়ে দেয়। ৯:৭১ আয়াত মু'মিন পুরুষ আর মু'মিন নারীদের একে অন্যের বন্ধু বলেছিল, আর তারা কী করে তার তালিকা দিয়েছিল: ভালো কাজের আদেশ দেয়, মন্দ কাজে নিষেধ করে, নামাজ কায়েম করে, যাকাত দেয়, আল্লাহ ও তাঁর রাসূলের ﷺ আনুগত্য করে। শেষে বলেছিল, আল্লাহ তাদের প্রতি রহমত করবেন। আমাদের আয়াত বলে দেয়, সেই রহমত কী কী নিয়ে; আর ৯:৭৩ আয়াত সম্পূর্ণ ভিন্ন এক সম্বোধনে চলে যায়।"
          },
          {
            "en": "Both verses name the two groups separately, so within two verses the believing men and the believing women are addressed twice by name, once for what they do and once for what they are promised. At-Tabari glosses the opening without drawing attention to it, that Allah promised those who affirmed Allah and His Messenger ﷺ and acknowledged Him and what came with him, of the men and the women. Nothing in the reward is differentiated between them, and no separate promise is made to either, which is worth noticing in a surah otherwise busy with distinguishing one group of people from another.",
            "bn": "দুটি আয়াতেই দুই দলের নাম আলাদা করে এসেছে। ফলে দুই আয়াতের মধ্যে মু'মিন পুরুষ আর মু'মিন নারীদের নাম ধরে দুবার ডাকা হয়েছে: একবার তারা কী করে সে কথায়, আরেকবার তাদের কী ওয়াদা দেওয়া হয়েছে সে কথায়। তাবারী শুরুর অংশের ব্যাখ্যা দেন বিষয়টির দিকে আলাদা করে দৃষ্টি না টেনেই: আল্লাহ ওয়াদা দিয়েছেন পুরুষ ও নারীদের মধ্যে তাদের, যারা আল্লাহ ও তাঁর রাসূলকে ﷺ সত্য বলে মেনেছে, আর তাঁকে ও তাঁর আনা বিষয়কে স্বীকার করেছে। পুরস্কারে তাদের মধ্যে কোনো পার্থক্য করা হয়নি, কারও জন্য আলাদা ওয়াদাও নেই। এমন এক সূরায় এটা খেয়াল করার মতো, যে সূরা বাকি সব জায়গায় এক দলকে আরেক দল থেকে আলাদা করতেই ব্যস্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Rivers, Dwellings, and Adn",
          "bn": "নদী, বাসগৃহ আর আদন"
        },
        "p": [
          {
            "en": "At-Tabari takes the three promises in order. Gardens beneath which rivers flow he renders as orchards with the rivers running beneath their trees. Abiding therein he glosses as remaining in them for ever, settled, their bliss neither departing from them nor perishing. And good dwellings he reads plainly as houses which they inhabit, good ones. The adjective is the one worth noticing, since the verse does not say large or many.",
            "bn": "তাবারী তিনটি ওয়াদা ক্রমানুসারে ব্যাখ্যা করেন। যার নিচ দিয়ে নদী বয়ে যায় এমন জান্নাত, এর অর্থ তিনি করেন: এমন বাগান, যার গাছের নিচ দিয়ে নদী বয়ে চলে। সেখানে চিরকাল থাকবে, এর ব্যাখ্যায় বলেন: তারা সেখানে চিরদিন থিতু হয়ে থাকবে; সেখানকার নিয়ামত তাদের ছেড়ে যাবে না, ফুরিয়েও যাবে না। আর উত্তম বাসগৃহের অর্থ তিনি সরলভাবেই করেন: এমন ঘর, যেখানে তারা বাস করবে, উত্তম ঘর। বিশেষণটাই খেয়াল করার মতো, কারণ আয়াত বড় বা অনেক বলেনি।"
          },
          {
            "en": "As-Sa'di supplies what the goodness consists of, and his description is of an interior rather than a landscape: they have been adorned and beautified and prepared for Allah's God-fearing servants, their sight is good and their lodging and resting place are good, and they gather what no wisher could wish beyond. He adds that Allah has prepared chambers of the utmost purity and beauty, whose outside is seen from within and whose inside is seen from without, and then names the effect: dwellings such that souls settle to them, hearts incline to them and spirits long for them.",
            "bn": "এ উত্তমতা কীসে, তা বলে দেন সা'দী; আর তাঁর বর্ণনা কোনো প্রাকৃতিক দৃশ্যের নয়, ঘরের ভেতরের। সেগুলো আল্লাহর মুত্তাকী বান্দাদের জন্য সাজানো, সুন্দর করে তৈরি। দেখতে সুন্দর, থাকার আর বিশ্রামের জায়গা হিসেবেও উত্তম; সেখানে এমন সব কিছু জমা আছে, যার চেয়ে বেশি কেউ চাইতেও পারে না। তিনি আরও বলেন, আল্লাহ সেখানে চূড়ান্ত স্বচ্ছ আর সুন্দর কামরা তৈরি করে রেখেছেন, যার বাইরেটা ভেতর থেকে দেখা যায়, আর ভেতরটা বাইরে থেকে। তারপর তিনি এর প্রভাবের কথা বলেন: এমন বাসগৃহ, যেখানে প্রাণ শান্তি পায়, অন্তর ঝুঁকে পড়ে, রুহ ব্যাকুল হয়ে থাকে।"
          },
          {
            "en": "The last phrase of the promise is a place-name that is also a condition. Gardens of Adn, as-Sa'di says, means a residence they do not depart from and do not move away from. Set beside the abiding already promised earlier in the verse, the repetition is doing something: first the people are said not to leave, then the place is described as one nobody leaves. The permanence is stated from both ends.",
            "bn": "ওয়াদার শেষ শব্দটি একটি জায়গার নাম, আবার একই সঙ্গে একটি অবস্থার বর্ণনাও। সা'দী বলেন, জান্নাতু আদন মানে এমন আবাস, যেখান থেকে তারা বের হবে না, অন্য কোথাও সরেও যাবে না। আয়াতের শুরুতে চিরকাল থাকার যে ওয়াদা এসেছে, তার পাশে রাখলে এ পুনরাবৃত্তির একটা অর্থ দাঁড়ায়: প্রথমে বলা হলো, মানুষগুলো সেখান থেকে যাবে না; তারপর জায়গাটিকেই বলা হলো এমন জায়গা, যেখান থেকে কেউ যায় না। স্থায়িত্বের কথা বলা হয়েছে দুই দিক থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Two of Silver, Two of Gold",
          "bn": "দুটি রুপার, দুটি সোনার"
        },
        "p": [
          {
            "en": "Ibn Kathir brings the Sahih material for the dwellings, and the hadith he chooses ends where this verse ends. Sahih al-Bukhari 4878 preserves from Abdullah ibn Qays (RA) that the Prophet ﷺ said: two gardens whose utensils and contents are of silver, and two other gardens whose utensils and contents are of gold. The narration then adds that nothing stands between the people and looking at their Lord except the curtain of Majesty over His Face, in the garden of Adn, which is the place our verse has just named.",
            "bn": "বাসগৃহের ব্যাপারে ইবনু কাসীর সহীহ বর্ণনা আনেন, আর তাঁর বেছে নেওয়া হাদিসটি শেষ হয় ঠিক সেখানে, যেখানে এ আয়াত শেষ হয়। সহীহ বুখারীর ৪৮৭৮ নম্বর হাদিসে আবদুল্লাহ ইবনু কায়স (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: দুটি জান্নাত, যার পাত্র ও ভেতরের সব কিছু রুপার; আর অন্য দুটি জান্নাত, যার পাত্র ও ভেতরের সব কিছু সোনার। বর্ণনাটিতে এরপর আছে, আদন জান্নাতে জান্নাতিদের আর তাদের রবের দর্শনের মাঝে তাঁর চেহারার উপর মহিমার পর্দা ছাড়া আর কিছুই থাকবে না। আর এ জায়গাটির নামই আমাদের আয়াত এইমাত্র নিয়েছে।"
          },
          {
            "en": "Ibn Kathir also narrates from the same Companion a description of a tent of one hollowed pearl, and that material is left here as his citation without a number, since it was not checked. At-Tabari carries a longer description of the dwellings too, from al-Hasan from Imran ibn Husayn (RA) and Abu Hurayrah (RA), but its chain runs through Jasr, and since its grading could not be confirmed it is left aside rather than passed on. The Sahih wording says enough on its own, and it says it in the direction the verse is already going, which the longer descriptions do not.",
            "bn": "একই সাহাবী থেকে ইবনু কাসীর ভেতর-ফাঁপা একটি মুক্তার তাঁবুর বর্ণনাও আনেন। সে বর্ণনা এখানে শুধু তাঁর উদ্ধৃতি হিসেবেই রইল, কোনো নম্বর ছাড়া, কারণ তা যাচাই করা হয়নি। তাবারীও বাসগৃহের আরও লম্বা একটি বর্ণনা আনেন, হাসান থেকে, ইমরান ইবনু হুসাইন (রাঃ) ও আবূ হুরাইরা (রাঃ) সূত্রে। কিন্তু এর সনদ জাসরের মধ্য দিয়ে গেছে, আর এর মান নিশ্চিত করা যায়নি বলে তা এখানে আনা হলো না। সহীহ বর্ণনাটুকুই যথেষ্ট, আর আয়াত যেদিকে এগোচ্ছে, সেটাও সেদিকেই কথা বলে; লম্বা বর্ণনাগুলো তা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Greater Than All of It",
          "bn": "এ সবের চেয়ে বড়"
        },
        "p": [
          {
            "en": "The clause that reorders the verse is four words long: and approval from Allah is greater. As-Sa'di reads greater as greater than the delight they are already in, and gives two reasons for it. The first is that their delight itself is not made sweet except by the sight of their Lord and His approval upon them. The second is that this was the goal the worshippers were aiming at all along and the end toward which those who loved Him were travelling.",
            "bn": "যে কথাটি আয়াতের পুরো ক্রম বদলে দেয়, তা মাত্র চার শব্দের: আর আল্লাহর সন্তুষ্টি এ সবের চেয়ে বড়। সা'দী বড় মানে বোঝেন, তারা যে নিয়ামতের মধ্যে আছে তার চেয়েও বড়; আর এর দুটি কারণ দেন। এক, তাদের সেই নিয়ামতই মধুর হয় না, যতক্ষণ না তারা নিজেদের রবকে দেখে আর তাঁর সন্তুষ্টি তাদের উপর নেমে আসে। দুই, ইবাদতকারীরা শুরু থেকে এ লক্ষ্যই সামনে রেখেছিল, আর যারা তাঁকে ভালোবাসত, তারা এ গন্তব্যের দিকেই পথ চলছিল।"
          },
          {
            "en": "His conclusion is put as a comparison of two things that are not usually compared: so the good pleasure of the Lord of the earth and the heavens is greater than the delight of the Gardens. And the verse's own last words agree, calling that, and not the gardens listed before it, the great attainment. As-Sa'di explains the phrase as their having obtained every sought thing and had every feared thing removed from them, so that all their affairs turned out good.",
            "bn": "তাঁর উপসংহারটি এমন দুটি জিনিসের তুলনা, যাদের সাধারণত পাশাপাশি রাখা হয় না: জমিন ও আসমানের রবের সন্তুষ্টি জান্নাতের নিয়ামতের চেয়েও বড়। আয়াতের নিজের শেষ কথাও তাই বলে: আগে যে জান্নাতগুলোর কথা এসেছে সেগুলোকে নয়, এ সন্তুষ্টিকেই মহাসফলতা বলে। সা'দী এর ব্যাখ্যায় বলেন, তারা চাওয়ার সব কিছু পেয়ে গেছে, ভয়ের সব কিছু তাদের থেকে দূর করে দেওয়া হয়েছে, তাই তাদের সব বিষয়ই সুন্দর হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses With the Same Promise",
          "bn": "একই ওয়াদার আয়াত"
        },
        "p": [
          {
            "en": "61:12 carries almost this verse's own words, forgiveness and gardens beneath which rivers flow and pleasant dwellings in gardens of perpetual residence, and ends on the same phrase, that is the great attainment. What it does not carry is the clause about approval, which is what makes our verse the fuller of the two. 98:8 supplies the other half from the other side: Allah being pleased with them and they with Him, so that the approval is described as mutual.",
            "bn": "৬১:১২ আয়াতে প্রায় এ আয়াতেরই শব্দগুলো আছে: মাগফিরাত, এমন জান্নাত যার নিচ দিয়ে নদী বয়ে যায়, আর চিরস্থায়ী জান্নাতে উত্তম বাসগৃহ। শেষও হয়েছে একই কথায়, এটাই মহাসফলতা। তবে সেখানে সন্তুষ্টির কথাটি নেই, আর এ কারণেই দুটির মধ্যে আমাদের আয়াত বেশি পূর্ণ। ৯৮:৮ আয়াত অন্য দিক থেকে বাকি অর্ধেকটা জুড়ে দেয়: আল্লাহ তাদের প্রতি সন্তুষ্ট, তারাও তাঁর প্রতি সন্তুষ্ট; অর্থাৎ সন্তুষ্টি দুই দিক থেকেই।"
          },
          {
            "en": "5:119 says the same of the truthful on the Day when their truthfulness benefits them, and 57:12 shows the believing men and the believing women again, their light going before them, being given the good tidings of gardens in which they abide. Read across the four, the promise is always the same two things in the same order: a place described in detail, and then a relationship named as the greater part of it.",
            "bn": "৫:১১৯ আয়াত একই কথা বলে সত্যবাদীদের সম্পর্কে, সেই দিনের কথা, যেদিন তাদের সত্যবাদিতা তাদের উপকারে আসবে। আর ৫৭:১২ আয়াতে আবার মু'মিন পুরুষ আর মু'মিন নারীদের দেখা যায়: তাদের নূর তাদের সামনে সামনে চলছে, আর তাদের এমন জান্নাতের সুসংবাদ দেওয়া হচ্ছে, যেখানে তারা চিরকাল থাকবে। চারটি আয়াত মিলিয়ে পড়লে দেখা যায়, ওয়াদায় সবসময় একই দুটি জিনিস, একই ক্রমে: আগে একটি জায়গার খুঁটিনাটি বর্ণনা, তারপর একটি সম্পর্কের কথা, যাকে বলা হয় এর বড় অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "How You Picture Reward",
          "bn": "পুরস্কারকে আপনি কীভাবে কল্পনা করেন"
        },
        "p": [
          {
            "en": "The practical work of this verse is on the imagination rather than on the behaviour, because what a person is working toward shapes how he works. If the picture is only a place, then obedience becomes a price paid for an amenity, and the verse says plainly that the best of what is promised is not an amenity. As-Sa'di's reason is the useful one: the delight itself is not made sweet except by the sight of the Lord and His approval, so approval is not an extra on top of the gardens but the thing that makes them worth having.",
            "bn": "এ আয়াতের ব্যবহারিক কাজ আচরণের চেয়ে কল্পনার উপরেই বেশি, কারণ মানুষ কীসের জন্য খাটছে, সেটাই ঠিক করে দেয় সে কীভাবে খাটবে। ছবিটা যদি কেবল একটা জায়গার হয়, তবে আনুগত্য হয়ে দাঁড়ায় আরাম-আয়েশ কেনার দাম। অথচ আয়াত পরিষ্কার বলে দেয়, যা ওয়াদা করা হয়েছে তার সবচেয়ে ভালো অংশটি কোনো আরাম-আয়েশ নয়। সা'দীর কারণটাই এখানে কাজের: সেই নিয়ামতই মধুর হয় না, যতক্ষণ না রবের দর্শন মেলে আর তাঁর সন্তুষ্টি নামে। অর্থাৎ সন্তুষ্টি জান্নাতের উপর বাড়তি কিছু নয়; ওটাই জান্নাতকে পাওয়ার মতো করে তোলে।"
          },
          {
            "en": "The other thing to take is who is being promised. The believing men and the believing women are named separately in 9:71 and again in our verse, and nothing in the reward is divided between them; 57:12 does the same. It is worth noticing whom a reader leaves out when he pictures the people this promise is for, because the verse itself has already refused to leave anybody out.",
            "bn": "আরেকটি শিক্ষা হলো, ওয়াদা কাদের দেওয়া হচ্ছে। ৯:৭১ আয়াতে মু'মিন পুরুষ আর মু'মিন নারীদের নাম আলাদা করে এসেছে, আমাদের আয়াতেও আবার এসেছে, আর পুরস্কারের কিছুই তাদের মধ্যে ভাগ করা হয়নি; ৫৭:১২ আয়াতও তাই করে। এ ওয়াদা যাদের জন্য, তাদের ছবি মনে আঁকতে গিয়ে পাঠক কাদের বাদ দিয়ে ফেলেন, সেটা খেয়াল করার মতো। কারণ আয়াত নিজেই কাউকে বাদ দিতে রাজি হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Greater Part",
          "bn": "বড় অংশটাই চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "The verse is a promise rather than a supplication, and the prayer that fits it is one that asks for the part the verse calls greater. 98:8 gives the wording of that outcome, Allah being pleased with them and they with Him, and it attaches it to whoever feared his Lord. A believer who wants this verse's best gift is asking to be among the people that sentence describes, which is a different request from asking to be admitted.",
            "bn": "আয়াতটি দোয়া নয়, ওয়াদা। তাই এর সঙ্গে মানানসই দোয়া সেটিই, যা আয়াতের বড় বলা অংশটি চায়। সেই পরিণতির শব্দগুলো পাওয়া যায় ৯৮:৮ আয়াতে: আল্লাহ তাদের প্রতি সন্তুষ্ট, তারাও তাঁর প্রতি সন্তুষ্ট; আর আয়াত এ পরিণতি জুড়ে দেয় তার সঙ্গে, যে নিজের রবকে ভয় করে। যে মু'মিন এ আয়াতের সবচেয়ে ভালো দানটি চান, তিনি আসলে চাইছেন ওই বাক্যে যাদের কথা আছে তাদের একজন হতে; আর তা শুধু ভেতরে ঢুকতে চাওয়ার চেয়ে আলাদা এক চাওয়া।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, give me the gardens if You will, but give me Your approval, which You called greater. It is assembled from the verse's list and its own comparison, and it is not a Sunnah du'a. The wording of 98:8 is the safer of the two to carry, and it has the advantage of naming both sides of the pleasure rather than only the one being asked for.",
            "bn": "এ আয়াতেরই শব্দ দিয়ে একটি বাক্য যোগ করা যায়, তবে এর বেশি কোনো দাবি ছাড়া: হে আল্লাহ, আপনি চাইলে আমাকে জান্নাত দিন, তবে আমাকে আপনার সন্তুষ্টি দিন, যাকে আপনি বড় বলেছেন। বাক্যটি আয়াতের তালিকা আর আয়াতের নিজের তুলনা মিলিয়ে বানানো; এটি সুন্নাহর দোয়া নয়। দুটোর মধ্যে ৯৮:৮ আয়াতের শব্দগুলো মুখে রাখাই বেশি নিরাপদ। তার আরেকটা সুবিধা: সেখানে সন্তুষ্টির শুধু চাওয়া দিকটা নয়, দুই দিকেরই উল্লেখ আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About the Greater",
          "bn": "বড় জিনিসটি নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "If I am honest, which part of this promise actually moves me, and which part does the verse call greater? The dwellings are described as good rather than as large, so what do I picture when I imagine being rewarded, and where did that picture come from? And approval is a relationship rather than a place: do I want Allah to be pleased with me, or do I mainly want to be let in?",
            "bn": "সত্যি করে বললে, এ ওয়াদার কোন অংশটা আমাকে আসলে টানে, আর আয়াত কোনটাকে বড় বলে? বাসগৃহগুলোকে বলা হয়েছে উত্তম, বড় নয়; তাহলে পুরস্কারের কথা ভাবলে আমার চোখে কী ভাসে, আর সে ছবি এল কোথা থেকে? আর সন্তুষ্টি কোনো জায়গা নয়, একটা সম্পর্ক: আমি কি চাই আল্লাহ আমার প্রতি সন্তুষ্ট হোন, নাকি মূলত শুধু ভেতরে ঢোকার অনুমতি চাই?"
          },
          {
            "en": "Two more. Both believing men and believing women are named, twice across two verses, with nothing in the reward divided between them: whom do I quietly leave out when I picture the people this promise is for? And the verse calls this the great attainment, so what am I currently calling success, and what would happen if I set my list beside this one?",
            "bn": "আরও দুটি। মু'মিন পুরুষ আর মু'মিন নারী দুজনেরই নাম এসেছে, দুই আয়াতে দুবার, আর পুরস্কারের কিছুই তাদের মধ্যে ভাগ করা হয়নি: এ ওয়াদা যাদের জন্য, তাদের কথা ভাবতে গিয়ে আমি চুপচাপ কাদের বাদ দিয়ে ফেলি? আর আয়াত একে বলে মহাসফলতা; তাহলে আমি এখন কাকে সফলতা বলি, আর নিজের তালিকাটা এর পাশে রাখলে কী দাঁড়াবে?"
          }
        ]
      }
    ]
  },
  "9:79": {
    "sections": [
      {
        "h": {
          "en": "Both Givers, Both Mocked",
          "bn": "দুই দাতা, দুজনেই বিদ্রূপের শিকার"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse names a habit rather than an incident. 9:78 has just asked whether they did not know that Allah knows their secrets and their private conversations, and 9:80 will tell the Prophet ﷺ that asking forgiveness for them seventy times would change nothing. Between those two our verse records what they had been saying about other people's charity, and it records both halves of it, because the same mouths objected to generosity and to poverty.",
            "bn": "সূরা তাওবা মাদানী। এ আয়াত কোনো একটি ঘটনার কথা বলে না, বলে একটা অভ্যাসের কথা। ঠিক আগে ৯:৭৮ আয়াত প্রশ্ন করেছে, তারা কি জানে না যে আল্লাহ তাদের গোপন কথা আর কানাকানি সবই জানেন? আর পরে ৯:৮০ আয়াত নবীকে ﷺ বলবে, তাদের জন্য সত্তরবার ক্ষমা চাইলেও কিছুই বদলাবে না। এ দুইয়ের মাঝখানে আমাদের আয়াত তুলে রাখে, অন্যদের দান নিয়ে তারা কী বলে বেড়াত। আর দুই দিকের কথাই তুলে রাখে, কারণ একই মুখে তারা বেশি দান নিয়েও আপত্তি তুলত, গরিবের দান নিয়েও।"
          },
          {
            "en": "At-Tabari sets out the two objections in their own words. Of the volunteers who gave to the poor and needy beyond what Allah had made obligatory in their wealth, they said: they only gave it for show and reputation, and did not intend the Face of Allah. And of those who found nothing to give except their effort, which at-Tabari glosses as their capacity, they belittled them and said: Allah was not in need of these people's charity. Two sentences, and between them no amount is left that would have passed.",
            "bn": "তাবারী দুটি আপত্তিই তাদের নিজেদের ভাষায় তুলে ধরেন। যারা নিজের ইচ্ছায়, সম্পদে আল্লাহর ফরজ করা অংশের চেয়েও বেশি, অভাবী আর মিসকীনদের দান করেছিল, তাদের সম্পর্কে তারা বলত: এরা শুধু লোক দেখাতে আর নাম কিনতে দিয়েছে, আল্লাহর সন্তুষ্টি চায়নি। আর যাদের দেওয়ার মতো নিজের পরিশ্রম ছাড়া কিছুই ছিল না (তাবারীর ব্যাখ্যায়, নিজের সামর্থ্যটুকু), তাদের তারা তুচ্ছ করত আর বলত: এদের দানের আল্লাহর কোনো দরকার ছিল না। মাত্র দুটি বাক্য, অথচ এর মাঝে এমন কোনো পরিমাণ বাকি থাকে না যা তাদের চোখে পার পেত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Scene in Bukhari",
          "bn": "বুখারীতে সেই দৃশ্য"
        },
        "p": [
          {
            "en": "Ibn Kathir brings the occasion from the Sahih and it is the whole verse in miniature. Sahih al-Bukhari 1415 preserves from Abu Mas'ud (RA): when the verses of charity were revealed, we used to work as porters. A man came and distributed charity in abundance, and they said, he is showing off. Another man came and gave a sa', a small measure of grain, and they said, Allah is not in need of this small amount of charity. Then the verse was revealed. Ibn Kathir notes that Muslim collected it too.",
            "bn": "ইবনু কাসীর শানে নুযূলটি আনেন সহীহ হাদিস থেকে, আর সেটা যেন গোটা আয়াতেরই ছোট্ট একটা ছবি। সহীহ বুখারীর ১৪১৫ নম্বরে আবূ মাসঊদ (রাঃ) থেকে বর্ণিত: যখন সদকার আয়াত নাজিল হলো, আমরা তখন মুটের কাজ করতাম। একজন এসে অনেক দান করল, তারা বলল, লোকটা লোক দেখাচ্ছে। আরেকজন এসে দিল এক সা', অর্থাৎ শস্যের ছোট একটা মাপ; তারা বলল, এই সামান্য দানের আল্লাহর কোনো দরকার নেই। তখন আয়াতটি নাজিল হলো। ইবনু কাসীর জানান, মুসলিমও হাদিসটি বর্ণনা করেছেন।"
          },
          {
            "en": "The detail that carries the most weight is the one the narrator gives about himself, not about the mockers: we used to work as porters. The man who gave a single measure of grain had carried loads to get it, and the narration is told by one of those carriers. What the objection called negligible had been earned on somebody's back, which is also what at-Tabari's gloss of effort means when he renders it as capacity.",
            "bn": "সবচেয়ে ভারী কথাটা বর্ণনাকারী বলেন নিজের সম্পর্কে, বিদ্রূপকারীদের সম্পর্কে নয়: আমরা তখন মুটের কাজ করতাম। যে লোক এক মাপ শস্য দিয়েছিল, সেটুকু পেতে তাকে বোঝা বইতে হয়েছিল; আর হাদিসটি শোনাচ্ছেন সেই বোঝা-বওয়া লোকদেরই একজন। আপত্তিকারীরা যে দানকে তুচ্ছ বলল, তা কেউ নিজের পিঠে বোঝা বয়ে কামিয়েছিল। তাবারী যখন পরিশ্রমের ব্যাখ্যায় সামর্থ্য বলেন, তাঁর কথার মানেও এটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Names in the Reports",
          "bn": "বর্ণনায় আসা নামগুলো"
        },
        "p": [
          {
            "en": "At-Tabari carries reports naming the people on the other side of the mockery. The volunteers are said to be Abd ar-Rahman ibn Awf (RA) and Asim ibn Adi al-Ansari (RA), and the one who found nothing but his effort is named as Abu Aqil al-Arashi, of the brothers of Banu Unayf. The chain for it runs from Ibn Abbas (RA) through Ali and Mu'awiyah, and it begins with Abd ar-Rahman ibn Awf (RA) coming to the Prophet ﷺ with forty uqiyah of gold.",
            "bn": "তাবারী কিছু বর্ণনা আনেন, যেগুলোতে বিদ্রূপের শিকার মানুষগুলোর নাম আছে। বলা হয়, স্বেচ্ছায় দান করেছিলেন আবদুর রহমান ইবনু আউফ (রাঃ) আর আসিম ইবনু আদী আল-আনসারী (রাঃ)। আর যার নিজের পরিশ্রম ছাড়া দেওয়ার মতো কিছুই ছিল না, তার নাম আবূ আকীল আল-আরাশী, বানূ উনাইফের ভাইদের একজন। এ বর্ণনার সনদ ইবনু আব্বাস (রাঃ) থেকে আলী ও মুআবিয়ার মাধ্যমে এসেছে, আর এর শুরুতেই আছে, আবদুর রহমান ইবনু আউফ (রাঃ) চল্লিশ উকিয়া সোনা নিয়ে নবীর ﷺ কাছে এলেন।"
          },
          {
            "en": "The names are worth having for one reason: they make the mockery concrete. It was not a general suspicion about anonymous donors but a remark made about identifiable men, one of them among the wealthiest Companions and one of them a man with nothing to bring but a day's carrying. A verse came down about it, which is the measure of how seriously the matter was taken.",
            "bn": "নামগুলো জানার একটাই লাভ: এতে বিদ্রূপটা চোখের সামনে স্পষ্ট হয়ে ওঠে। ব্যাপারটা অচেনা দাতাদের নিয়ে কোনো আবছা সন্দেহ ছিল না। কথাটা বলা হয়েছিল চেনা মানুষদের নিয়ে: একজন সাহাবীদের মধ্যে অন্যতম ধনী, আরেকজনের আনার মতো কিছুই ছিল না, ছিল শুধু এক দিনের বোঝা বওয়া। এ নিয়ে একটা আয়াত নাজিল হয়েছিল, আর বিষয়টাকে কত গুরুত্ব দেওয়া হয়েছিল তা এ থেকেই বোঝা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What They Gathered in One Remark",
          "bn": "এক কথায় তারা যা জমা করল"
        },
        "p": [
          {
            "en": "As-Sa'di frames it as one of the disgraces of the hypocrites and describes the pattern without softening it: when Allah and His Messenger ﷺ urged charity, the Muslims hastened to it and gave of their wealth each according to his state, some much and some little; so they found fault with the one who gave much, saying his aim was display, and said to the poor man who gave little that Allah had no need of his charity. Then he says Allah met them for their deed, which is how he reads the clause about mockery.",
            "bn": "সা'দী একে মুনাফিকদের কলঙ্কগুলোর একটি বলে ধরেন, আর ধরনটা নরম না করেই খুলে বলেন। আল্লাহ ও তাঁর রাসূল ﷺ যখন দানের জন্য উৎসাহ দিলেন, মুসলিমরা ছুটে এল, আর যার যেমন অবস্থা সে তেমন দিল, কেউ বেশি, কেউ কম। তখন মুনাফিকরা যে বেশি দিল তার দোষ ধরল, বলল তার উদ্দেশ্য লোক দেখানো। আর যে গরিব লোকটি কম দিল, তাকে বলল, তার দানের আল্লাহর কোনো দরকার নেই। এরপর সা'দী বলেন, আল্লাহ তাদের কাজের উপযুক্ত প্রতিফল দিলেন; বিদ্রূপের কথাটিকে তিনি এভাবেই পড়েন।"
          },
          {
            "en": "He then itemises what a single remark of that kind contains. It involves following up the states of the believers and being eager to find something to say about them, and for that he cites 24:19, that those who love immorality to be spread among the believers will have a painful punishment. It involves impugning believers on account of their faith, which he calls disbelief and hatred of the religion. And it involves lamz, fault-finding, which he says is among the major sins in worldly matters and is fouler still when the thing being mocked is an act of obedience.",
            "bn": "এরপর তিনি গুনে দেখান, এমন একটি মন্তব্যের ভেতরে কী কী থাকে। প্রথমত, মু'মিনদের পেছনে লেগে থাকা আর তাদের নিয়ে কিছু একটা বলার সুযোগ খোঁজা। এর দলিল হিসেবে তিনি আনেন ২৪:১৯ আয়াত: যারা চায় মু'মিনদের মধ্যে অশ্লীলতা ছড়াক, তাদের জন্য আছে যন্ত্রণাদায়ক শাস্তি। দ্বিতীয়ত, ঈমানের কারণেই মু'মিনদের খোঁটা দেওয়া; একে তিনি বলেন কুফরী আর দীনের প্রতি বিদ্বেষ। তৃতীয়ত, লাময, অর্থাৎ দোষ ধরা। তিনি বলেন, দুনিয়ার ব্যাপারেও এটা কবীরা গুনাহগুলোর একটি, আর যা নিয়ে বিদ্রূপ চলছে তা যদি আল্লাহর আনুগত্যের কোনো আমল হয়, তবে তো আরও জঘন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Mocked in Kind",
          "bn": "যেমন বিদ্রূপ, তেমন জবাব"
        },
        "p": [
          {
            "en": "The verse's answer uses their own verb: so they ridicule them, Allah ridicules them. At-Tabari notes that he has explained elsewhere the manner in which Allah mocks those of His creation who mock, and does not repeat it here, which is a discipline worth copying. The clause is not elaborated, and the verse moves straight to consequence: and for them is a painful punishment, which at-Tabari glosses as a punishment from Allah on the Day of Resurrection, aching and painful.",
            "bn": "আয়াতের জবাবে তাদেরই ক্রিয়াটি ফিরে আসে: তারা তাদের বিদ্রূপ করে, আল্লাহও তাদের বিদ্রূপ করেন। তাবারী জানান, সৃষ্টির মধ্যে যারা বিদ্রূপ করে তাদের সঙ্গে আল্লাহর বিদ্রূপ কেমন, তা তিনি অন্য জায়গায় ব্যাখ্যা করেছেন, এখানে আর দোহরাচ্ছেন না। এই সংযমটুকু শেখার মতো। আয়াতও কথাটা নিয়ে আর বাড়িয়ে বলে না, সোজা পরিণামে চলে যায়: আর তাদের জন্য আছে যন্ত্রণাদায়ক শাস্তি। তাবারীর ব্যাখ্যায়, কিয়ামতের দিন আল্লাহর পক্ষ থেকে কষ্টদায়ক, যন্ত্রণাময় শাস্তি।"
          },
          {
            "en": "What the verse does not do is defend the givers by proving their sincerity. It does not say the generous man was not showing off, and it does not say the poor man's measure of grain was needed. It moves the question away from the gift altogether and puts it on the people who were watching, which is the only place where anything could be established.",
            "bn": "আয়াত দাতাদের নিয়ত খাঁটি প্রমাণ করে তাদের পক্ষ নেয় না। বলে না যে উদার লোকটি লোক দেখাচ্ছিল না, এও বলে না যে গরিব লোকটির দেওয়া এক মাপ শস্যের দরকার ছিল। প্রশ্নটাকে আয়াত দান থেকেই সরিয়ে নেয়, আর তুলে দেয় যারা তাকিয়ে দেখছিল তাদের ঘাড়ে। কিছু প্রমাণ করা যদি কোথাও সম্ভব হয়, তবে কেবল সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on Ridicule",
          "bn": "বিদ্রূপ নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "49:11 states the general prohibition and gives the reason inside it: let not a people ridicule another people, perhaps they may be better than them, nor let women ridicule other women, perhaps they may be better than them. The clause about perhaps is the answer to the mockery in our verse, since neither objection could have been made by anyone who took seriously that the person being mocked might be the better of the two.",
            "bn": "৪৯:১১ আয়াত সাধারণ নিষেধটা দেয়, আর কারণটাও তার ভেতরেই বলে দেয়: কোনো সম্প্রদায় যেন অন্য সম্প্রদায়কে ঠাট্টা না করে, হতে পারে তারা এদের চেয়ে উত্তম; আর নারীরাও যেন অন্য নারীদের ঠাট্টা না করে, হতে পারে তারা এদের চেয়ে উত্তম। এই হতে পারে কথাটাই আমাদের আয়াতের বিদ্রূপের জবাব। যাকে ঠাট্টা করা হচ্ছে সে-ই হয়তো দুজনের মধ্যে ভালো, এ কথা যে সত্যিই মনে রাখে, সে এ দুটি আপত্তির একটিও তুলতে পারত না।"
          },
          {
            "en": "9:58 shows the same people complaining about the distribution of the charities rather than about the giving, so the surah has them on both ends of the same transaction. 2:271 answers the first objection from another direction, that disclosing charity is good and concealing it is better, which grants that visibility carries a risk without granting that it settles a motive. And 24:19 is the verse as-Sa'di brought against the eagerness to find something to say.",
            "bn": "৯:৫৮ আয়াতে দেখা যায়, একই লোকেরা দান করা নিয়ে নয়, সদকা বণ্টন নিয়ে অভিযোগ করছে। অর্থাৎ সূরাটি তাদের একই লেনদেনের দুই মাথাতেই দাঁড় করায়। ২:২৭১ আয়াত প্রথম আপত্তির জবাব দেয় অন্য দিক থেকে: দান প্রকাশ্যে করা ভালো, গোপনে করা আরও ভালো। আয়াতটি মেনে নেয় যে প্রকাশ্যে দেওয়ায় ঝুঁকি আছে, কিন্তু এ কথা মানে না যে তা দেখেই নিয়তের বিচার হয়ে যায়। আর ২৪:১৯ সেই আয়াত, যা সা'দী এনেছিলেন অন্যকে নিয়ে বলার সুযোগ খোঁজার বিরুদ্ধে।"
          }
        ]
      },
      {
        "h": {
          "en": "Auditing Other People's Deeds",
          "bn": "অন্যের আমল যাচাই করা"
        },
        "p": [
          {
            "en": "The verse is practical in a narrow and uncomfortable way, because the behaviour it describes requires attention. Someone had to be watching who put what in, and comparing, and then explaining other people's motives from outside. As-Sa'di names that as the first item in the list: following up the states of the believers and being eager to find something to say. It is a use of attention rather than a slip of the tongue, and it can be measured by how much of a person's noticing goes that way.",
            "bn": "আয়াতটির শিক্ষা কাজের, তবে তা খুব নির্দিষ্ট আর অস্বস্তিকর। কারণ যে আচরণের কথা এখানে, তাতে মনোযোগ লাগে। কাউকে খেয়াল রাখতে হয়েছে কে কী দিল, তুলনা করতে হয়েছে, তারপর বাইরে থেকে অন্যের নিয়ত ব্যাখ্যা করতে হয়েছে। সা'দীর তালিকায় প্রথমেই এটা: মু'মিনদের পেছনে লেগে থাকা আর তাদের নিয়ে কিছু বলার সুযোগ খোঁজা। এটা মুখ ফসকে বলা কথা নয়, মনোযোগ খরচের একটা ধরন। আর এর মাপ হলো, একজন মানুষের খেয়ালের কতটা ওই দিকে যায়।"
          },
          {
            "en": "The second use is for the person being watched. The verse defends two givers without establishing anything about either of their intentions, which means a giver has no obligation to prove his sincerity to the people commenting on it. And the man with a single measure of grain is defended in the same sentence as the man with forty uqiyah of gold, so the smallness of what somebody can manage is not a reason to keep it at home.",
            "bn": "দ্বিতীয় শিক্ষা তার জন্য, যার দিকে তাকিয়ে থাকা হচ্ছে। আয়াত দুই দাতারই পক্ষ নেয়, অথচ কারও নিয়ত সম্পর্কে কিছুই প্রমাণ করে না। অর্থাৎ যারা মন্তব্য করছে, তাদের কাছে নিজের ইখলাস প্রমাণ করার কোনো দায় দাতার নেই। আর চল্লিশ উকিয়া সোনার মালিকের পক্ষ যে বাক্যে নেওয়া হয়েছে, এক মাপ শস্যের লোকটির পক্ষও নেওয়া হয়েছে সেই একই বাক্যে। কাজেই কেউ যতটুকু পারে, তা সামান্য বলে ঘরে রেখে দেওয়ার কোনো কারণ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Before You Comment",
          "bn": "মন্তব্য করার আগে এক দোয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication; it gives a warning to onlookers. The nearest thing the Quran puts beside it is the clause in 49:11, perhaps they may be better than them, which is not a prayer either but functions as one if a person says it before speaking. Held in mind it removes the ground the two objections in this verse were standing on.",
            "bn": "আয়াতে কোনো দোয়া নেই; আছে যারা পাশে দাঁড়িয়ে দেখে তাদের জন্য একটা সতর্কবাণী। কুরআনে এর সবচেয়ে কাছের কথা ৪৯:১১ আয়াতের সেই অংশ: হতে পারে তারা এদের চেয়ে উত্তম। এটাও দোয়া নয়, কিন্তু মুখ খোলার আগে কেউ কথাটা বলে নিলে দোয়ার কাজই করে। কথাটা মনে থাকলে এ আয়াতের দুটি আপত্তি যে মাটিতে দাঁড়িয়ে ছিল, সেই মাটিটাই সরে যায়।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, do not let me find fault with anyone for what he gave You, whether it was much or all he had. It is assembled from the verse's two objections, and it is not a Sunnah du'a. The wording of 49:11 is the safer of the two to carry, and it has the advantage of being a command, which does not need to be believed in order to be obeyed.",
            "bn": "এ আয়াতের নিজের শব্দ থেকে একটা বাক্য যোগ করা যায়, তবে এর বেশি কিছু দাবি না করে: হে আল্লাহ, কেউ আপনাকে যা দিয়েছে, তা অনেক হোক বা তার সর্বস্ব হোক, তা নিয়ে আমাকে কারও দোষ ধরতে দেবেন না। বাক্যটি আয়াতের দুটি আপত্তি থেকে গড়া, এটা সুন্নাহর কোনো দোয়া নয়। দুটোর মধ্যে ৪৯:১১ আয়াতের শব্দই মনে রাখার জন্য বেশি নিরাপদ। তার আরেকটা সুবিধা হলো, সেটা একটা হুকুম; আর হুকুম মানতে হলে আগে তা বিশ্বাস করার দরকার পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Commentary",
          "bn": "নিজের মন্তব্য নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Have I ever explained somebody else's good deed by a motive I had no way of knowing? No amount escaped the objection in this verse, so when I find fault with how somebody gives, is the amount really what I am reacting to? And the small giver was told his gift was not needed: have I ever made a person feel that what they could manage was not worth bringing?",
            "bn": "যে নিয়ত জানার কোনো উপায় আমার ছিল না, তা দিয়ে কি কখনো অন্যের ভালো কাজের ব্যাখ্যা দিয়েছি? এ আয়াতে কোনো পরিমাণই আপত্তি থেকে রেহাই পায়নি; তাহলে কারও দান করার ধরনে আমি যখন দোষ ধরি, আমার আপত্তি কি আসলে পরিমাণ নিয়েই? আর ছোট দাতাকে বলা হয়েছিল তার দানের দরকার নেই: আমার আচরণে কি কখনো কারও মনে হয়েছে যে সে যতটুকু পারে তা আনার মতোই নয়?"
          },
          {
            "en": "Two more. The mockery took attention to keep up, since somebody had to notice who gave what: how much of my noticing goes to auditing what other people do for Allah? And the verse takes the side of people who had already handed over what they had: what would I have to give away before this verse was on my side rather than describing me?",
            "bn": "আরও দুটি প্রশ্ন। এ বিদ্রূপ চালাতে মনোযোগ লাগত, কারণ কাউকে খেয়াল রাখতে হতো কে কী দিল: আল্লাহর জন্য অন্যরা কী করছে তার হিসাব নিতে আমার মনোযোগের কতটা খরচ হয়? আর আয়াত পক্ষ নেয় তাদের, যারা নিজেদের যা ছিল তা আগেই দিয়ে দিয়েছিল: এ আয়াত আমাকে বর্ণনা না করে আমার পক্ষে দাঁড়াবে, তার জন্য আমাকে কী দিয়ে দিতে হতো?"
          }
        ]
      }
    ]
  },
  "9:85": {
    "sections": [
      {
        "h": {
          "en": "Said Beside a Grave",
          "bn": "কবরের পাশে বলা"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse takes its force from the one immediately before it. 9:84 forbids the Prophet ﷺ to pray over any of them who dies, ever, or to stand at his grave, giving the reason that they disbelieved and died defiantly disobedient. Our verse then removes the motive that might still have pulled at someone standing there, and 9:86 shows the same men asking to be left behind when a surah came down enjoining faith and fighting.",
            "bn": "সূরা তাওবা মাদানী। এ আয়াতের জোর আসে ঠিক আগের আয়াত থেকে। ৯:৮৪ আয়াত নবীকে ﷺ নিষেধ করে, তাদের কেউ মারা গেলে কখনো তার জানাযার নামাজ পড়বেন না, তার কবরের পাশেও দাঁড়াবেন না; কারণ তারা কুফরী করেছে আর নাফরমান অবস্থায় মরেছে। এরপর আমাদের আয়াত সেই টানটাই সরিয়ে দেয়, যা সেখানে দাঁড়ানো কারও মনে তখনো কাজ করতে পারত। আর ৯:৮৬ আয়াতে দেখা যায়, ঈমান আর জিহাদের হুকুম নিয়ে সূরা নাজিল হলে এই লোকেরাই পেছনে থেকে যাওয়ার অনুমতি চায়।"
          },
          {
            "en": "At-Tabari joins the two verses explicitly, and his paraphrase is the key to why this sentence stands here at all: do not let the wealth of these hypocrites and their children impress you, O Muhammad ﷺ, so that you pray over one of them when he dies and stand at his grave on account of the abundance of his wealth and his children. The impression is not being warned against in the abstract. It is being warned against at the one place where an estate speaks loudest.",
            "bn": "তাবারী দুই আয়াতকে স্পষ্টভাবে জুড়ে দেন, আর এ বাক্যটি কেন ঠিক এখানে, তার চাবি তাঁর ভাষ্যেই: হে মুহাম্মাদ ﷺ, এ মুনাফিকদের সম্পদ আর সন্তান যেন তোমাকে মুগ্ধ না করে, যার ফলে তাদের কেউ মারা গেলে তার সম্পদ আর সন্তানের প্রাচুর্যের কারণে তুমি তার জানাযার নামাজ পড়বে আর তার কবরের পাশে দাঁড়াবে। এ সতর্কবাণী কোনো তাত্ত্বিক কথা নয়। এটা আসছে ঠিক সেই জায়গায়, যেখানে মৃতের রেখে যাওয়া সম্পদ সবচেয়ে জোরে কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sentence Said Twice",
          "bn": "দুবার বলা বাক্য"
        },
        "p": [
          {
            "en": "This is almost word for word what 9:55 said thirty verses earlier, and the repetition is not an accident of compilation. There the sentence followed the refusal of their charity, so the warning was about admiring the wealth of men whose spending had just been declined. Here it follows a prohibition on funeral prayer, so the warning is about a graveside. One sentence, two situations, and in both of them the same mistake was available.",
            "bn": "ত্রিশ আয়াত আগে ৯:৫৫ আয়াত প্রায় হুবহু এ কথাই বলেছিল, আর এ পুনরাবৃত্তি সংকলনের কোনো দুর্ঘটনা নয়। সেখানে বাক্যটি এসেছিল তাদের দান ফিরিয়ে দেওয়ার পরে; তাই সতর্কবাণীটা ছিল এমন লোকদের সম্পদ দেখে মুগ্ধ হওয়া নিয়ে, যাদের খরচ সবে নাকচ হয়েছে। এখানে বাক্যটি আসে জানাযার নামাজের নিষেধের পরে; তাই সতর্কবাণীটা কবরের পাশ নিয়ে। বাক্য একটাই, পরিস্থিতি দুটো, আর দুই জায়গাতেই একই ভুল করার সুযোগ ছিল।"
          },
          {
            "en": "The wording differs in one small place. At 9:55 the clause reads that Allah intends to punish them with it in the life of this world, and at-Tabari records a disagreement there about whether the phrase belongs earlier in the sentence and the punishment is in the hereafter. Here the phrase is simply in this world, with no room left for the transposition, and as-Suddi is carried in at-Tabari's entry glossing the departing of their souls as being in the life of this world. The second telling settles what the first left open.",
            "bn": "শব্দে একটা ছোট ফারাক আছে। ৯:৫৫ আয়াতে কথাটা এমন: আল্লাহ চান দুনিয়ার জীবনে এগুলো দিয়েই তাদের শাস্তি দিতে। সেখানে তাবারী একটা মতভেদ উল্লেখ করেন: কথাটা কি আসলে বাক্যের আগের অংশের সঙ্গে যুক্ত, আর শাস্তিটা কি আখিরাতে? এখানে কথাটা শুধু দুনিয়াতে, ফলে স্থান বদলের কোনো সুযোগই থাকে না। তাবারীর আলোচনায় সুদ্দীর ব্যাখ্যাও আছে: তাদের প্রাণ বের হওয়াটাও দুনিয়ার জীবনেই। প্রথমবার যা খোলা ছিল, দ্বিতীয়বারের কথা তার ফয়সালা করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Honour but Humiliation",
          "bn": "সম্মান নয়, অপমান"
        },
        "p": [
          {
            "en": "As-Sa'di opens with the inference the verse exists to block: do not be deceived by what Allah gave them in this world of wealth and children, for that is not because of their honour with Him. Then the reversal, stated flatly: rather it is a humiliation from Him toward them. That is a harder claim than saying the wealth is neutral or that it is a test. It reads the giving itself as a move against them, and the rest of his entry explains how a gift can work that way.",
            "bn": "সা'দী শুরুতেই সেই সিদ্ধান্তটা আটকে দেন, যা আটকানোর জন্যই আয়াতটি এসেছে: আল্লাহ দুনিয়াতে তাদের যে সম্পদ আর সন্তান দিয়েছেন, তা দেখে ধোঁকা খাবেন না; এটা তাঁর কাছে তাদের সম্মানের কারণে নয়। তারপর সোজাসুজি উল্টো কথাটা: বরং এটা তাদের প্রতি তাঁর পক্ষ থেকে অপমান। সম্পদ ভালোও না মন্দও না, কিংবা সম্পদ একটা পরীক্ষা, এ কথা বলার চেয়ে এ দাবি অনেক কঠিন। এখানে দেওয়াটাকেই তাদের বিরুদ্ধে একটা চাল হিসেবে পড়া হচ্ছে। দান কীভাবে এভাবে কাজ করে, সা'দীর বাকি আলোচনা তা-ই বুঝিয়ে দেয়।"
          },
          {
            "en": "His mechanism has four moving parts and they run in sequence: they toil in obtaining it, they fear its loss, they are not at ease with it, and they keep meeting hardships and difficulties in it. Then the part that matters most, that it distracts them from Allah and the abode of the hereafter until they depart from this world. The punishment, on this reading, is not an event scheduled later. It is the shape of the whole arrangement while it lasts.",
            "bn": "তাঁর ব্যাখ্যায় চারটি অংশ, চলে একটার পর একটা: সম্পদ জোগাড় করতে তারা খাটে, তা হারানোর ভয়ে থাকে, তা নিয়ে কখনো নিশ্চিন্ত হতে পারে না, আর তার পেছনে বারবার কষ্ট আর ঝামেলায় পড়ে। তারপর সবচেয়ে বড় কথা: এ সম্পদ তাদের আল্লাহ আর আখিরাতের ঘর থেকে গাফেল করে রাখে, যতক্ষণ না তারা দুনিয়া ছেড়ে চলে যায়। এভাবে পড়লে শাস্তি পরে কোনো নির্ধারিত সময়ে ঘটবে এমন ঘটনা নয়। যতদিন এ ব্যবস্থা চলে, পুরো সময়টার চেহারাই শাস্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Ways It Charges",
          "bn": "তিন পথে দাম নেওয়া"
        },
        "p": [
          {
            "en": "At-Tabari puts the mechanism in one long clause, and it names three different charges rather than one. I only gave him what I gave, he has Allah say, in order to punish him with it in this world: with griefs and anxieties; by what I obliged him in it of costs and expenditures and zakah; and by what befalls him in it of losses and calamities. So the same wealth bills him three times over, in worry, in obligation and in accident.",
            "bn": "তাবারী পুরো ব্যাখ্যাটা একটি লম্বা বাক্যে রাখেন, আর তাতে একটি নয়, তিনটি আলাদা দামের কথা আছে। তিনি আল্লাহর কথা হিসেবে বলেন: আমি তাকে যা দিয়েছি, দিয়েছি কেবল এ জন্য যে দুনিয়াতে এ দিয়েই তাকে শাস্তি দেব; দুঃখ আর দুশ্চিন্তা দিয়ে, এতে খরচ, ব্যয় আর যাকাতের যে দায় তার উপর ফরজ করেছি তা দিয়ে, আর এতে তার যে ক্ষতি ও বিপদ ঘটে তা দিয়ে। অর্থাৎ একই সম্পদ তার কাছ থেকে তিনবার দাম আদায় করে: দুশ্চিন্তায়, দায়ে আর দুর্ঘটনায়।"
          },
          {
            "en": "His reading of the closing clause then ties the whole thing to the grave the previous verse had forbidden standing at. And that he should die, so his soul leaves his body, and he parts from what I gave him of wealth and children, so that becomes a regret for him at his death, and a bane upon him then, and a bane upon him in the hereafter, by his dying while denying the oneness of Allah and the prophethood of His prophet ﷺ. The estate and the man separate at exactly the place where an onlooker was most likely to be impressed.",
            "bn": "এরপর আয়াতের শেষ কথাটির তাঁর ব্যাখ্যা পুরো ব্যাপারটাকে বেঁধে দেয় সেই কবরের সঙ্গে, যার পাশে দাঁড়াতে আগের আয়াত নিষেধ করেছিল। তিনি বলেন: আর সে মারা যাবে, তার প্রাণ দেহ ছেড়ে বেরিয়ে যাবে, আর আমি তাকে যে সম্পদ ও সন্তান দিয়েছিলাম তা থেকে সে বিচ্ছিন্ন হবে। ফলে মৃত্যুর সময় সেগুলো তার জন্য আফসোস হয়ে দাঁড়াবে, তখনও তার জন্য বিপদ, আখিরাতেও বিপদ, কারণ সে মরেছে আল্লাহর একত্ব আর তাঁর নবীর ﷺ নবুওয়াত অস্বীকার করা অবস্থায়। সম্পদ আর মানুষটা আলাদা হয় ঠিক সেই জায়গায়, যেখানে দর্শকের মুগ্ধ হওয়ার সম্ভাবনা সবচেয়ে বেশি ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearts Still Attached",
          "bn": "অন্তর তখনো জড়ানো"
        },
        "p": [
          {
            "en": "As-Sa'di's closing sentence is the most vivid thing either commentator says here: the love of it had stripped them of everything, so they died with their hearts attached to it and their hearts burning over it. The verb for the departing of the soul is the same one 9:55 used, of a soul going out under pressure, and he puts the pressure inside the man rather than around him. What is being described is not a deathbed scene but a final state of attachment.",
            "bn": "এখানে দুই মুফাসসিরের কথার মধ্যে সবচেয়ে জীবন্ত হলো সা'দীর শেষ বাক্যটি: সম্পদের ভালোবাসা তাদের সবকিছু কেড়ে নিয়েছিল, তাই তারা মরেছে অন্তর সম্পদে জড়ানো অবস্থায়, অন্তর তার জন্য পুড়তে পুড়তে। প্রাণ বের হওয়া বোঝাতে এখানে সেই ক্রিয়াই এসেছে যা ৯:৫৫ আয়াতে ছিল; তা বোঝায় চাপের মুখে প্রাণ বেরিয়ে যাওয়া। সা'দী সেই চাপটা রাখেন মানুষটার চারপাশে নয়, তার ভেতরে। এটা মৃত্যুশয্যার কোনো দৃশ্য নয়; এটা আসক্তির শেষ অবস্থা।"
          },
          {
            "en": "Read beside 9:84 the sequence is complete: a man is buried, the prayer is withheld, the estate is standing there in plain view, and the verse says what the estate had been doing to him all along. Nothing is said about what the mourners owed him or about how the wealth should now be divided. The verse is interested only in correcting what the living are about to conclude from what they can see.",
            "bn": "৯:৮৪ আয়াতের পাশে রেখে পড়লে পুরো ছবিটা মেলে: একজনকে দাফন করা হচ্ছে, তার জানাযার নামাজ পড়া হচ্ছে না, রেখে যাওয়া সম্পদ সবার চোখের সামনে, আর আয়াত জানিয়ে দেয় এতদিন সেই সম্পদ তার সঙ্গে কী করছিল। শোক করতে আসা লোকদের তার প্রতি কী দায় ছিল, বা সম্পদ এখন কীভাবে ভাগ হবে, এ নিয়ে আয়াত কিছুই বলে না। আয়াতের আগ্রহ শুধু একটাই: জীবিতরা চোখের সামনে যা দেখছে, তা থেকে যে সিদ্ধান্তে তারা পৌঁছাতে যাচ্ছে, সেটা শুধরে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on the Same Reading",
          "bn": "একই পাঠের আয়াত"
        },
        "p": [
          {
            "en": "9:55 is the twin and the article on it carries the fuller discussion of the readings, including at-Tabari's three and as-Sa'di's account of the hardship of acquiring. 9:69 sets the same men beside the nations before them, who were stronger in power and more abundant in wealth and children, and had their portion. 3:178 states the general rule in the same shape, that the extension of time is not better for them.",
            "bn": "৯:৫৫ আয়াত এর জোড়া, আর সেটির প্রবন্ধেই পাঠগুলোর পূর্ণ আলোচনা আছে, তাবারীর তিনটি আর উপার্জনের কষ্ট নিয়ে সা'দীর বিবরণসহ। ৯:৬৯ আয়াত এ লোকদের দাঁড় করায় তাদের পূর্ববর্তী জাতিগুলোর পাশে, যারা শক্তিতে ছিল আরও প্রবল, সম্পদ আর সন্তানেও ছিল বেশি, আর নিজেদের ভাগ ভোগ করে গেছে। ৩:১৭৮ আয়াত একই ছাঁচে সাধারণ নিয়মটি বলে দেয়: অবকাশ পাওয়া তাদের জন্য ভালো নয়।"
          },
          {
            "en": "8:28 and 63:9 supply the believer's version of the same two nouns. The first names wealth and children as a trial with a great reward kept with Allah; the second warns the believers themselves not to let wealth and children divert them from the remembrance of Allah, and calls those who allow it the losers. The same two things, then, are a trial for one man and a punishment for another, and what decides which is not the amount but the attachment.",
            "bn": "৮:২৮ আর ৬৩:৯ আয়াতে একই দুটি শব্দ আসে মু'মিনদের প্রসঙ্গে। প্রথমটি সম্পদ আর সন্তানকে বলে পরীক্ষা, আর জানায় আল্লাহর কাছে আছে মহা প্রতিদান। দ্বিতীয়টি খোদ মু'মিনদেরই সতর্ক করে, সম্পদ আর সন্তান যেন তাদের আল্লাহর জিকির থেকে গাফেল না করে; আর যারা তা হতে দেয়, তাদের বলে ক্ষতিগ্রস্ত। তাহলে একই দুটি জিনিস একজনের জন্য পরীক্ষা, আরেকজনের জন্য শাস্তি। কোনটা হবে তা ঠিক করে পরিমাণ নয়, অন্তর কতটা জড়িয়ে আছে তা।"
          }
        ]
      },
      {
        "h": {
          "en": "What a Funeral Tells You",
          "bn": "জানাযা আপনাকে কী বলে"
        },
        "p": [
          {
            "en": "The practical setting of this verse is worth keeping, because it is the setting where the mistake is hardest to resist. At a graveside the estate is visible, the standing of the family is visible, and a verdict about a life is being formed quickly by everyone present. At-Tabari's paraphrase says the danger plainly, that the abundance of a man's wealth and children could move even the Prophet ﷺ to stand there, and the verse was sent to remove that pull rather than to reproach anyone for feeling it.",
            "bn": "এ আয়াতের বাস্তব প্রেক্ষাপটটা মনে রাখার মতো, কারণ এখানেই ভুলটা এড়ানো সবচেয়ে কঠিন। কবরের পাশে রেখে যাওয়া সম্পদ চোখে পড়ে, পরিবারের মান-মর্যাদাও চোখে পড়ে, আর উপস্থিত সবাই দ্রুত একটা জীবন নিয়ে রায় দিয়ে ফেলে। তাবারীর ভাষ্য বিপদটা খোলাখুলি বলে: কারও সম্পদ আর সন্তানের প্রাচুর্য এমনকি নবীকেও ﷺ সেখানে দাঁড়াতে টানতে পারত। আয়াত নাজিল হয়েছিল সেই টান সরিয়ে দিতে, টান অনুভব করার জন্য কাউকে তিরস্কার করতে নয়।"
          },
          {
            "en": "Turned toward the reader it produces one plain question with an answer he can check. If somebody's standing in my eyes rises with what he leaves behind, then I am doing at a distance what this verse was sent to stop at a graveside. And as-Sa'di's four parts are a test that runs the other way too: whatever I am holding, do I toil for it, fear losing it, fail to rest in it, and find that it keeps arranging my attention away from Allah?",
            "bn": "পাঠকের দিকে ফেরালে এ থেকে একটা সোজা প্রশ্ন দাঁড়ায়, যার জবাব তিনি নিজেই মিলিয়ে দেখতে পারেন। কেউ কী রেখে গেল তা দেখে যদি আমার চোখে তার মর্যাদা বাড়ে, তাহলে কবরের পাশে যা থামাতে আয়াতটি নাজিল হয়েছিল, দূরে বসে আমি সেটাই করছি। আর সা'দীর চারটি অংশ দিয়ে উল্টো দিক থেকেও নিজেকে যাচাই করা যায়: যা আমি আঁকড়ে আছি, তার জন্য কি খাটছি, তা হারানোর ভয়ে থাকি, তাতে স্বস্তি পাই না, আর দেখি সেটা বারবার আমার মনোযোগ আল্লাহ থেকে সরিয়ে নিচ্ছে?"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer at a Burial",
          "bn": "দাফনের সময় এক দোয়া"
        },
        "p": [
          {
            "en": "The verse carries no supplication, and the passage around it is about a prayer being withheld rather than offered, so nothing here can be turned into a form of words for a funeral. What it does leave a believer wanting is the opposite of the state it describes: not to die with the heart attached to what is being left behind. 63:9's warning is the nearest thing to a prayer in the same vocabulary, said as a reminder rather than a request.",
            "bn": "আয়াতে কোনো দোয়া নেই। আশপাশের আয়াতগুলোও জানাযার নামাজ পড়া নিয়ে নয়, তা বন্ধ রাখা নিয়ে; তাই এখান থেকে জানাযার জন্য কোনো দোয়ার বাক্য বানানো যায় না। তবে আয়াত যে অবস্থার বর্ণনা দেয়, মু'মিনের মনে তার উল্টোটা পাওয়ার আকাঙ্ক্ষা জাগে: রেখে যাওয়া জিনিসে অন্তর জড়ানো অবস্থায় যেন মরতে না হয়। একই শব্দে দোয়ার সবচেয়ে কাছের জিনিস ৬৩:৯ আয়াতের সতর্কবাণী, যা বলা হবে চাওয়া হিসেবে নয়, নিজেকে মনে করিয়ে দেওয়া হিসেবে।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, when my soul goes out, do not let it go out attached to what I am leaving, and do not let what You gave me be what You punish me with. It is assembled from the verse's closing clause and from as-Sa'di's last sentence on it, and it is not a Sunnah du'a.",
            "bn": "এ আয়াতের নিজের শব্দ থেকে একটা বাক্য যোগ করা যায়, তবে এর বেশি কিছু দাবি না করে: হে আল্লাহ, আমার প্রাণ যখন বের হবে, তখন যা রেখে যাচ্ছি তাতে জড়ানো অবস্থায় যেন বের না হয়; আর আপনি আমাকে যা দিয়েছেন, তা দিয়েই আমাকে শাস্তি দেবেন না। বাক্যটি আয়াতের শেষ কথা আর সে বিষয়ে সা'দীর শেষ বাক্য থেকে গড়া, এটা সুন্নাহর কোনো দোয়া নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Beside a Grave",
          "bn": "কবরের পাশে প্রশ্ন"
        },
        "p": [
          {
            "en": "A graveside is where wealth speaks loudest, so have I ever adjusted my respect for a man according to what he left behind? The verse says the giving was never a mark of honour with Allah, so where have I read somebody's comfort as a sign that Allah approves of him? And the sentence is repeated thirty verses after the first time: what is it about this particular mistake that needs telling twice?",
            "bn": "কবরের পাশেই সম্পদ সবচেয়ে জোরে কথা বলে; তাহলে কেউ কী রেখে গেল, তা দেখে কি কখনো তার প্রতি আমার শ্রদ্ধা কমেছে বা বেড়েছে? আয়াত বলছে, ওই দেওয়াটা কখনোই আল্লাহর কাছে সম্মানের চিহ্ন ছিল না; তাহলে কোথায় আমি কারও সচ্ছলতাকে ধরে নিয়েছি আল্লাহর সন্তুষ্টির নিদর্শন হিসেবে? আর প্রথমবারের ত্রিশ আয়াত পরে বাক্যটি আবার এসেছে: এই বিশেষ ভুলটার মধ্যে এমন কী আছে যে তা দুবার বলতে হয়?"
          },
          {
            "en": "Two more. The punishment described includes the anxiety of holding on, the obligations that come attached, and the accidents that arrive anyway: what am I holding that is charging me in all three currencies at once? And the verse ends where the man ends, so if my own account closed this year, what would the last state of my heart have been attached to?",
            "bn": "আরও দুটি প্রশ্ন। আয়াতের শাস্তির মধ্যে আছে আঁকড়ে ধরে রাখার দুশ্চিন্তা, সঙ্গে চাপানো দায়দায়িত্ব, আর যা কিছুতেই ঠেকানো যায় না সেই দুর্ঘটনা: আমার কাছে এমন কী আছে, যা একসঙ্গে এই তিন মুদ্রাতেই আমার কাছ থেকে দাম আদায় করছে? আর লোকটি যেখানে শেষ, আয়াতও সেখানে শেষ। তাহলে এ বছরই যদি আমার হিসাবের খাতা বন্ধ হয়ে যেত, আমার অন্তরের শেষ অবস্থা কীসে জড়িয়ে থাকত?"
          }
        ]
      }
    ]
  },
  "9:88": {
    "sections": [
      {
        "h": {
          "en": "One Word Turns the Page",
          "bn": "একটি শব্দে পাতা ওল্টায়"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse is a hinge. For many verses the surah has been describing men who asked to be excused, were satisfied to sit with those who stay behind, and had their hearts sealed over, which is where 9:87 leaves them. Then comes lakin, but, and the sentence turns to the Messenger ﷺ and those who believed with him. 9:89 completes the turn with what Allah has prepared for them, gardens beneath which rivers flow.",
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াতটি একটা মোড়। অনেক আয়াত ধরে সূরাটি বলে আসছে এমন লোকদের কথা, যারা অব্যাহতি চেয়েছে, পেছনে পড়ে থাকা লোকদের সঙ্গে বসে থাকাতেই খুশি হয়েছে, আর যাদের অন্তরে মোহর মেরে দেওয়া হয়েছে; ৯:৮৭ আয়াত তাদের সেখানেই রেখে যায়। এরপর আসে লাকিন, অর্থাৎ কিন্তু; আর বাক্যটি ঘুরে যায় রাসূল ﷺ আর তাঁর সঙ্গে যারা ঈমান এনেছেন তাঁদের দিকে। ৯:৮৯ আয়াত মোড় ঘোরাটা পূর্ণ করে, আল্লাহ তাঁদের জন্য কী তৈরি রেখেছেন তা জানিয়ে: জান্নাত, যার তলদেশ দিয়ে নদী বয়ে চলে।"
          },
          {
            "en": "At-Tabari makes the contrast explicit rather than leaving it to the particle. These hypocrites whose stories I have related, he writes, did not fight the idolaters; but the Messenger Muhammad ﷺ and those who affirmed Allah and His Messenger with him, they are the ones who fought the idolaters with their wealth and their selves, so they spent their wealth in their striving and wearied their selves in their fighting and gave them up. Two verbs are supplied where the verse has one: they spent, and they wearied.",
            "bn": "তাবারী তুলনাটা শুধু শব্দকণার উপর ছেড়ে না দিয়ে খুলে বলেন। তিনি লেখেন: এই মুনাফিকরা, যাদের কাহিনি আমি বলেছি, মুশরিকদের বিরুদ্ধে লড়েনি; কিন্তু রাসূল মুহাম্মাদ ﷺ আর তাঁর সঙ্গে যারা আল্লাহ ও তাঁর রাসূলকে সত্য বলে মেনেছেন, তাঁরাই মুশরিকদের বিরুদ্ধে লড়েছেন নিজেদের মাল আর জান দিয়ে। তাঁরা জিহাদে নিজেদের মাল খরচ করেছেন, লড়াইয়ে নিজেদের জানকে ক্লান্ত করেছেন, আর সেগুলো উৎসর্গ করেছেন। আয়াতে ক্রিয়া একটি, তাবারী সেখানে দুটি দেন: তাঁরা খরচ করেছেন, আর তাঁরা ক্লান্ত করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Wealth and Selves Again",
          "bn": "আবার মাল আর জান"
        },
        "p": [
          {
            "en": "The pair of nouns in this verse has been running through the surah from early on. 9:20 says those who believed and emigrated and strove with their wealth and their lives are greater in rank; 9:41 commands, go forth light or heavy and strive with your wealth and your lives; 9:44 says believers do not ask to be excused from striving with their wealth and their lives; 9:81 describes the ones who stayed disliking to strive with their wealth and their lives. The same two things are asked of everybody in the surah.",
            "bn": "এ আয়াতের শব্দজোড়াটি সূরার শুরুর দিক থেকেই বারবার আসছে। ৯:২০ আয়াত বলে, যারা ঈমান এনেছে, হিজরত করেছে আর নিজেদের মাল ও জান দিয়ে জিহাদ করেছে, মর্যাদায় তারাই বড়। ৯:৪১ আয়াত হুকুম দেয়: হালকা হও বা ভারী, বেরিয়ে পড়ো, আর নিজেদের মাল ও জান দিয়ে জিহাদ করো। ৯:৪৪ আয়াত বলে, মু'মিনরা মাল ও জান দিয়ে জিহাদ করা থেকে অব্যাহতি চায় না। ৯:৮১ আয়াতে আছে সেই লোকদের কথা, যারা পেছনে থেকে গিয়েছিল আর মাল ও জান দিয়ে জিহাদ করা অপছন্দ করেছিল। সূরাজুড়ে সবার কাছে চাওয়া হয় একই দুটি জিনিস।"
          },
          {
            "en": "That repetition is what makes the contrast in our verse land. The two groups were not distinguished by what they had at their disposal; several of the men who asked to stay were the ones with means, as 9:86 says of those of wealth among them. They were distinguished by what the same two things were used for. And 9:111 later states the transaction outright, that Allah has purchased from the believers their lives and their properties, with Paradise as the price.",
            "bn": "এই পুনরাবৃত্তির কারণেই আমাদের আয়াতের তুলনাটা মনে গেঁথে যায়। দুই দলের পার্থক্য তাদের হাতে কী ছিল তা নিয়ে নয়; যারা থেকে যেতে চেয়েছিল, তাদের কয়েকজন ছিল সামর্থ্যবান, ৯:৮৬ আয়াত যেমন তাদের মধ্যকার সম্পদশালীদের কথা বলে। পার্থক্য ছিল একই দুটি জিনিস কোন কাজে লাগানো হলো, তাতে। পরে ৯:১১১ আয়াত লেনদেনটা সরাসরি বলে দেয়: আল্লাহ মু'মিনদের কাছ থেকে তাদের জান আর মাল কিনে নিয়েছেন, বিনিময়ে জান্নাত।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Sluggish, but Glad",
          "bn": "গড়িমসি নয়, খুশি"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as an answer to a worry the previous verses could raise, namely what happens to the work when the unwilling stay home. If these hypocrites stay back from the striving, he writes, Allah will do without them, and Allah has servants and select ones among His creation whom He singled out with His favour, who undertake this matter. The verse's own subject is then named as the answer: the Messenger ﷺ and those who believed with him.",
            "bn": "সা'দী আয়াতটিকে পড়েন এমন এক দুশ্চিন্তার জবাব হিসেবে, যা আগের আয়াতগুলো পড়ে মনে জাগতে পারে: অনিচ্ছুকরা ঘরে বসে থাকলে কাজটার কী হবে? তিনি লেখেন, এই মুনাফিকরা যদি জিহাদ থেকে পিছিয়ে থাকে, আল্লাহ তাদের ছাড়াই কাজ চালিয়ে নেবেন। আল্লাহর এমন বান্দা আছে, সৃষ্টির মধ্যে এমন বাছাই করা মানুষ আছে, যাদের তিনি নিজের অনুগ্রহে বেছে নিয়েছেন, আর তারাই এ দায়িত্ব কাঁধে নেয়। তারপর তিনি জবাব হিসেবে আয়াতের নিজের বিষয়টির নাম নেন: রাসূল ﷺ আর তাঁর সঙ্গে যারা ঈমান এনেছেন।"
          },
          {
            "en": "Then he adds the manner, which the verse itself does not state: they fought with their wealth and their selves, not sluggish and not lazy, but rather joyful and glad. That is the sharpest difference he draws between the two groups, and it is not about output. Both a reluctant man and a glad man may carry a load; as-Sa'di is pointing at what the carrying felt like from inside, and the surah has already shown the other side of that in men who called it a burden.",
            "bn": "তারপর তিনি যোগ করেন, তাঁরা কেমন মনে লড়েছেন, যা আয়াতে সরাসরি নেই: তাঁরা নিজেদের মাল আর জান দিয়ে লড়েছেন, গড়িমসি করে নয়, অলসভাবে নয়, বরং আনন্দ আর খুশিমনে। দুই দলের মধ্যে তিনি যত পার্থক্য দেখান, এটাই সবচেয়ে তীক্ষ্ণ, আর এর সম্পর্ক কাজের পরিমাণের সঙ্গে নয়। অনিচ্ছুক লোকও বোঝা বইতে পারে, খুশি লোকও পারে। সা'দী দেখাচ্ছেন, ভেতর থেকে সেই বোঝা বওয়া কেমন লাগত। আর এর উল্টো দিকটা সূরা আগেই দেখিয়েছে সেই লোকদের মধ্যে, যারা একে বোঝা বলেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Good Things, Unlisted",
          "bn": "যাবতীয় কল্যাণ, তালিকা ছাড়া"
        },
        "p": [
          {
            "en": "The first of the two promises is a plural with no inventory attached: for them are the khayrat, the good things. At-Tabari reads them as the good things of the hereafter and names three, its women, its gardens and its bliss, then notes the singular khayrah and glosses it as the excellent one of anything. Ibn Kathir puts them in the hereafter too, in the gardens of al-Firdaws and the high grades.",
            "bn": "দুটি ওয়াদার প্রথমটি একটি বহুবচন শব্দ, সঙ্গে কোনো তালিকা নেই: তাঁদের জন্য আছে খায়রাত, অর্থাৎ যাবতীয় কল্যাণ। তাবারী এগুলোকে আখিরাতের কল্যাণ বলে ধরেন এবং তিনটির নাম করেন: সেখানকার নারী, সেখানকার বাগান আর সেখানকার নিয়ামত। তারপর একবচন খায়রা শব্দটির কথা তুলে বলেন, এর মানে যেকোনো জিনিসের সেরাটা। ইবনু কাসীরও এগুলোকে আখিরাতেই রাখেন: জান্নাতুল ফিরদাউসে আর উঁচু মর্যাদার স্তরে।"
          },
          {
            "en": "As-Sa'di widens it in the other direction: the many good things in this world and the hereafter. Reading the two together, the plural is left open on purpose, and a reader is not being handed a catalogue to compare with what he wanted. The second promise is the one that carries the judgement. They are the muflihun, which at-Tabari glosses as those who abide for ever in the gardens, remaining in them, winning them, and as-Sa'di as those who triumphed with the highest objects of desire and the most complete of wishes.",
            "bn": "সা'দী এর পরিধি বাড়ান অন্য দিকে: দুনিয়া ও আখিরাতের অনেক কল্যাণ। দুজনের কথা একসঙ্গে পড়লে বোঝা যায়, বহুবচনটি ইচ্ছে করেই খোলা রাখা হয়েছে; পাঠকের হাতে এমন কোনো ফর্দ ধরিয়ে দেওয়া হচ্ছে না, যা তিনি নিজের চাওয়ার সঙ্গে মিলিয়ে দেখবেন। রায়টা আসে দ্বিতীয় ওয়াদায়: তাঁরাই মুফলিহূন। তাবারীর ব্যাখ্যায়, যাঁরা জান্নাতে চিরকাল থাকবেন, সেখানেই থেকে যাবেন, তা জয় করে নেবেন; আর সা'দীর ব্যাখ্যায়, যাঁরা পেয়েছেন সবচেয়ে উঁচু কাম্য বস্তু আর সবচেয়ে পূর্ণ আকাঙ্ক্ষা।"
          },
          {
            "en": "9:89 then itemises what was left unlisted, and it does so in the words this surah has used before: Allah has prepared for them gardens beneath which rivers flow, wherein they abide eternally, and that is the great attainment. The last phrase is the one 9:72 also ends on, and there it came after a clause saying that approval from Allah is greater than the gardens themselves. Read together, the two verses give the same reward twice, once itemised and once ranked.",
            "bn": "এরপর ৯:৮৯ আয়াত না-গোনা জিনিসগুলো গুনিয়ে দেয়, আর তা করে এ সূরায় আগে ব্যবহৃত শব্দেই: আল্লাহ তাঁদের জন্য তৈরি রেখেছেন জান্নাত, যার তলদেশ দিয়ে নদী বয়ে চলে, সেখানে তাঁরা চিরকাল থাকবেন, আর এটাই মহাসফলতা। এই শেষ কথাটি দিয়েই ৯:৭২ আয়াতও শেষ হয়েছে, আর সেখানে এর আগে বলা হয়েছিল, আল্লাহর সন্তুষ্টি জান্নাতের চেয়েও বড়। দুই আয়াত মিলিয়ে পড়লে একই পুরস্কার দুবার পাওয়া যায়: একবার তালিকা ধরে, একবার মর্যাদার ক্রমে।"
          }
        ]
      },
      {
        "h": {
          "en": "Named With the Messenger",
          "bn": "রাসূলের ﷺ সঙ্গে নাম"
        },
        "p": [
          {
            "en": "The subject of the verse is not the believers alone. It is the Messenger ﷺ and those who believed with him, in that order, and the two promises are made to the pair of them together. Nothing is divided out: the good things and the success are stated for the whole company. In a surah that has spent dozens of verses separating one group from another, this sentence puts a set of ordinary people in the same clause as the Prophet ﷺ.",
            "bn": "আয়াতের বিষয় কেবল মু'মিনরা নন। বিষয় হলেন রাসূল ﷺ আর তাঁর সঙ্গে যারা ঈমান এনেছেন, এই ক্রমে; আর দুটি ওয়াদাই করা হয়েছে দুজনকে একসঙ্গে। কিছুই ভাগাভাগি করা হয়নি: কল্যাণ আর সফলতা পুরো দলের জন্যই। যে সূরা ডজন ডজন আয়াত খরচ করেছে এক দলকে আরেক দল থেকে আলাদা করতে, তার এই বাক্যটি সাধারণ কিছু মানুষকে নবীর ﷺ সঙ্গে একই বাক্যাংশে বসিয়ে দেয়।"
          },
          {
            "en": "That is worth noticing for what it says about company. The men described are not solitary strivers; they are those who believed with him and fought with him, and the verse's grammar keeps them attached to the person they followed. Set against 9:87, where the other group is satisfied to sit with those who stay behind, the surah has put the same structure on both sides: in each case people ended up doing what the company they chose was doing.",
            "bn": "সঙ্গ সম্পর্কে এ থেকে একটা কথা পাওয়া যায়, তাই বিষয়টা খেয়াল করার মতো। যাঁদের কথা বলা হচ্ছে, তাঁরা একা একা সংগ্রাম করা মানুষ নন; তাঁরা সেই লোক, যাঁরা তাঁর সঙ্গে ঈমান এনেছেন আর তাঁর সঙ্গে লড়েছেন। আয়াতের বাক্যগঠন তাঁদের জুড়ে রাখে তাঁদের অনুসরণ করা মানুষটির সঙ্গেই। ৯:৮৭ আয়াতের সঙ্গে মিলিয়ে দেখুন, যেখানে অন্য দলটি পেছনে পড়ে থাকা লোকদের সঙ্গে বসে থাকাতেই খুশি। সূরা দুই দিকেই একই গড়ন রেখেছে: দুই ক্ষেত্রেই মানুষ শেষে তা-ই করেছে, যা তাদের বেছে নেওয়া সঙ্গীরা করছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Which One You Give",
          "bn": "দুটোর কোনটা আপনি দেন"
        },
        "p": [
          {
            "en": "The practical question the verse puts is simple and it is answerable. Of the two things named, wealth and self, which does a person find easier to give? Money without time, or time without money, is the ordinary compromise, and the surah keeps naming both together so that neither can stand in for the other. At-Tabari's two verbs are the test taken together, and neither of them settles for the other: they spent their wealth, and they wearied their selves.",
            "bn": "আয়াত যে বাস্তব প্রশ্নটা সামনে আনে, তা সহজ, আর তার উত্তরও দেওয়া যায়। যে দুটি জিনিসের নাম এসেছে, মাল আর জান, এর কোনটা দিতে মানুষের সহজ লাগে? সময় না দিয়ে টাকা দেওয়া, কিংবা টাকা না দিয়ে সময় দেওয়া, এটাই সাধারণ আপস। আর সূরা দুটোর নাম বারবার একসঙ্গে নেয়, যাতে একটা দিয়ে অন্যটার কাজ চালানো না যায়। তাবারীর দুটি ক্রিয়া মিলেই এই পরীক্ষা, কোনোটাই অন্যটার বদলে চলে না: তাঁরা নিজেদের মাল খরচ করেছেন, আর নিজেদের জান ক্লান্ত করেছেন।"
          },
          {
            "en": "As-Sa'di's addition gives the harder half of the test. If the work is being done sluggishly and unwillingly, it is still being done, and the verse would still count the output; but his description of the same people as joyful and glad marks a difference a person can feel in himself long before anybody else could see it. And his opening remark removes the last excuse: if the unwilling stay home, Allah will do without them, so nobody is indispensable except to his own account.",
            "bn": "পরীক্ষার কঠিন অর্ধেকটা আসে সা'দীর সংযোজন থেকে। কাজটা গড়িমসি করে, অনিচ্ছায় হলেও তো হচ্ছে, আর আয়াত সেই কাজও হিসাবে ধরত। কিন্তু একই লোকদের তিনি যে আনন্দিত আর খুশি বলেছেন, তা এমন এক পার্থক্য দেখায় যা অন্য কারও চোখে পড়ার অনেক আগেই মানুষ নিজের ভেতরে টের পায়। আর তাঁর শুরুর কথাটি শেষ অজুহাতটাও কেড়ে নেয়: অনিচ্ছুকরা ঘরে বসে থাকলে আল্লাহ তাদের ছাড়াই কাজ চালিয়ে নেবেন। কাজেই কেউ অপরিহার্য নয়, শুধু নিজের হিসাবের বেলায় ছাড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer to Be Counted In",
          "bn": "তাঁদের দলে শামিল হওয়ার দোয়া"
        },
        "p": [
          {
            "en": "The verse is a description and a promise rather than a supplication, and what a reader is left wanting is to be inside its subject: among those who believed with him and gave both things. The Quran's nearest wording for that wish is 9:111, which states the exchange as already transacted, that Allah has purchased from the believers their lives and their properties, with Paradise as the price, and calls it a true promise binding upon Him.",
            "bn": "আয়াতটি দোয়া নয়, একটি বর্ণনা আর একটি ওয়াদা। পাঠকের মনে যে চাওয়া থেকে যায় তা হলো এর বিষয়ের ভেতরে জায়গা পাওয়া: তাঁর সঙ্গে যারা ঈমান এনেছেন আর দুটো জিনিসই দিয়েছেন, তাঁদের মধ্যে থাকা। এ চাওয়ার সবচেয়ে কাছের কুরআনী শব্দ ৯:১১১ আয়াত। আয়াতটি লেনদেনটাকে আগেই সম্পন্ন বলে জানায়: আল্লাহ মু'মিনদের কাছ থেকে তাদের জান আর মাল কিনে নিয়েছেন, বিনিময়ে জান্নাত। আর একে বলে তাঁর দায়িত্বে থাকা সত্য ওয়াদা।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, count me among those who believed with him, and take from my wealth and from my self before You have to ask. It is assembled from the verse's subject and its pair of nouns, and it is not a Sunnah du'a. The wording of 9:111 is the safer of the two and has the advantage of being a statement, which needs no sincerity to be true.",
            "bn": "এ আয়াতের নিজের শব্দ থেকে একটা বাক্য যোগ করা যায়, তবে এর বেশি কিছু দাবি না করে: হে আল্লাহ, আমাকে তাঁদের মধ্যে গণ্য করুন, যারা তাঁর সঙ্গে ঈমান এনেছেন; আর আপনার চাওয়ার আগেই আমার মাল থেকে আর আমার জান থেকে নিয়ে নিন। বাক্যটি আয়াতের বিষয় আর তার শব্দজোড়া থেকে গড়া, এটা সুন্নাহর কোনো দোয়া নয়। দুটোর মধ্যে ৯:১১১ আয়াতের শব্দই বেশি নিরাপদ। তার আরেকটা সুবিধা হলো, সেটা একটা বিবৃতি; সত্য হওয়ার জন্য তার কারও ইখলাসের প্রয়োজন হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About the Pair",
          "bn": "সেই জোড়া নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "The same two things were asked of both groups, so of my wealth and my self, which do I find easier to give, and what does that answer expose? The verse promises the good things without listing them: what would I put on that list, and how much of my version is about this world? And the contrast is drawn with a single word, but: who is on the other side of that word in my own life?",
            "bn": "একই দুটি জিনিস চাওয়া হয়েছিল দুই দলের কাছেই; তাহলে আমার মাল আর আমার জান, এর কোনটা দিতে আমার সহজ লাগে, আর সেই উত্তর আমার সম্পর্কে কী ফাঁস করে দেয়? আয়াত কল্যাণের ওয়াদা করে, কিন্তু তালিকা দেয় না: সেই তালিকায় আমি কী রাখতাম, আর আমার তালিকার কতটা এই দুনিয়ার জিনিস? আর তুলনাটা টানা হয়েছে মাত্র একটি শব্দে, কিন্তু: আমার নিজের জীবনে ওই শব্দের ওপারে কে দাঁড়িয়ে আছে?"
          },
          {
            "en": "Two more. They are called the successful for what they spent rather than for what they got: what would my own definition of a successful year be, and whose definition is it? And the verse keeps them attached to the person they followed, while the other group was satisfied to sit with those who sat: am I trying to do good near people who are doing it, or alone and at a distance from anyone who would notice either way?",
            "bn": "আরও দুটি প্রশ্ন। তাঁদের সফলকাম বলা হয়েছে তাঁরা যা খরচ করেছেন তার জন্য, যা পেয়েছেন তার জন্য নয়: আমার কাছে সফল একটা বছরের সংজ্ঞা কী, আর সেই সংজ্ঞাটা আসলে কার? আর আয়াত তাঁদের জুড়ে রাখে তাঁদের অনুসরণ করা মানুষটির সঙ্গে, অথচ অন্য দলটি বসে থাকা লোকদের সঙ্গে বসে থাকাতেই খুশি ছিল: আমি কি ভালো কাজ করার চেষ্টা করছি এমন লোকদের কাছাকাছি থেকে, যারা নিজেরাও তা করছে? নাকি একা, এমন সবার থেকে দূরে, যারা আমি করি বা না করি কোনোটাই খেয়াল করত?"
          }
        ]
      }
    ]
  },
  "9:99": {
    "sections": [
      {
        "h": {
          "en": "The Exception After the Verdict",
          "bn": "রায়ের পরে ব্যতিক্রম"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan, and this stretch belongs to the aftermath of the expedition to Tabuk. 9:97 states a general verdict on the desert Arabs: stronger in disbelief and hypocrisy, and likelier not to know the limits of what Allah has revealed to His Messenger. 9:98 gives one kind among them, men who count what they spend a loss and wait for misfortunes to strike the believers. Our verse gives the other kind. Then 9:100 leaves the bedouins for the forerunners among the Muhajireen and the Ansar, and 9:101 returns to name hypocrites around Madinah and inside it.",
            "bn": "সূরা তাওবা মাদীনায় নামা সূরা, আর এই অংশটা তাবুক অভিযানের পরের কথা। ৯:৯৭ আয়াতে মরুবাসী আরবদের নিয়ে একটা সাধারণ রায় এসেছে। তারা কুফুরি আর মুনাফিকিতে কঠোরতর, আর আল্লাহ তাঁর রাসূলের প্রতি যা নামিয়েছেন তার সীমারেখা না জানার ব্যাপারে তারাই বেশি উপযুক্ত। ৯:৯৮ আয়াতে তাদের এক দলের ছবি, যারা খরচকে জরিমানা গোনে আর মু'মিনদের উপর বিপদের চাকা ঘুরে আসার অপেক্ষা করে। আমাদের আয়াত আনে অন্য দলটিকে। এরপর ৯:১০০ আয়াত বেদুঈনদের ছেড়ে মুহাজির ও আনসারদের অগ্রগামীদের দিকে যায়, আর ৯:১০১ আয়াত ফিরে এসে বলে, মাদীনার চারপাশে এবং মাদীনার ভেতরেও মুনাফিক আছে।"
          },
          {
            "en": "At-Tabari preserves the shape of the sequence in Ibn Jurayj's words. The statement that the bedouins are stronger in disbelief and hypocrisy was made, he says, and then Allah made an exception and said, and among the bedouins are some who believe in Allah and the Last Day. Qatada's comment, also in at-Tabari, calls the verse Allah's exception from among the bedouins. So the earlier verdict is not withdrawn. A group is lifted out of it, and the reader is told plainly that both sentences are true at once, and that neither is a verdict on any people alive now.",
            "bn": "ইবনু জুরাইজের ভাষায় এই ধারাটাই তাবারী ধরে রেখেছেন। তিনি বলছেন, প্রথমে বলা হল বেদুঈনরা কুফুরি আর মুনাফিকিতে কঠোরতর, তারপর আল্লাহ ব্যতিক্রম করলেন এবং বললেন, বেদুঈনদের মধ্যে এমনও আছে যে আল্লাহ ও শেষ দিনে ঈমান রাখে। তাবারীর বর্ণনায় কাতাদার মন্তব্যও আছে, তিনি এই আয়াতকে বলছেন বেদুঈনদের মধ্য থেকে আল্লাহর ব্যতিক্রম। মানে আগের রায় তুলে নেওয়া হয়নি। সেই রায় থেকে একটা দলকে আলাদা করে নেওয়া হয়েছে, আর পাঠককে জানিয়ে দেওয়া হচ্ছে যে দুই কথাই একসাথে সত্য। এর কোনোটিই আজকের কোনো জনগোষ্ঠীর উপর রায় নয়।"
          },
          {
            "en": "As-Sa'di draws the conclusion out. Not all the bedouins are blameworthy, he writes; the verse is proof that they are like the settled people, among them the praised and among them the blamed, and that Allah did not blame them for their desert life as such but for leaving His commands and for being the sort who are likely to. He adds that disbelief and hypocrisy grow and shrink, thicken and thin, with circumstances. 49:14 keeps the same honesty from the other side, where bedouins who said they believed were told to say instead that they had submitted.",
            "bn": "সা'দী কথাটা খুলে বলেন। সব বেদুঈন নিন্দিত নয়, তিনি লিখছেন। এই আয়াতই দলিল যে তারা শহরবাসীর মতোই, তাদের ভেতরে প্রশংসিত লোকও আছে, নিন্দিতও আছে। আল্লাহ তাদের মরুজীবনের জন্য দোষ দেননি, দোষ দিয়েছেন তাঁর হুকুম ছেড়ে দেওয়ার জন্য আর সেই ছেড়ে দেওয়ার ঝুঁকিতে থাকার জন্য। তিনি আরও বলেন, অবস্থার সঙ্গে সঙ্গে কুফুরি আর মুনাফিকি বাড়ে কমে, ঘন হয় পাতলা হয়। ৪৯:১৪ আয়াত উল্টো দিক থেকে একই সততা রাখে, যেখানে ঈমানের দাবি করা বেদুঈনদের বলা হল, বলো যে আমরা আনুগত্য মেনে নিয়েছি।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verb, Two Objects",
          "bn": "একই ক্রিয়া, দুই হিসাব"
        },
        "p": [
          {
            "en": "9:98 and 9:99 open on the same three Arabic words, wa min al-A'rabi man, and among the bedouins is one who. Both then reach for the same verb, yattakhidhu, he takes this to be that, a verb which needs two objects and reports a man's own reckoning rather than an event. The first object is the same in both: ma yunfiqu, what he spends. Only the second object changes. In 9:98 it is maghraman, from the root gh-r-m, a fine or an indemnity, money handed over under compulsion for nothing in return.",
            "bn": "৯:৯৮ আর ৯:৯৯ আয়াত শুরু হয় হুবহু একই ৩ শব্দে, ওয়া মিনাল আ'রাবি মান, বেদুঈনদের মধ্যে এমনও আছে যে। তারপর দুই জায়গাতেই আসে একই ক্রিয়া, ইয়াত্তাখিযু, সে এটাকে ওটা বলে ধরে নেয়। এই ক্রিয়ার ২ কর্ম লাগে, আর তা দুনিয়ার কোনো ঘটনা নয়, মানুষের নিজের হিসাবটাই জানায়। প্রথম কর্ম দুই জায়গায় এক, মা ইউনফিকু, সে যা খরচ করে। বদলায় শুধু দ্বিতীয়টি। ৯:৯৮ আয়াতে তা মাগরামান, গ-র-ম মূল থেকে, অর্থ জরিমানা বা খেসারত, বিনিময়হীন বাধ্য হয়ে দেওয়া টাকা।"
          },
          {
            "en": "In our verse the second object is qurubat. At-Tabari glosses it as the plural of qurbah, and qurbah as whatever brings a man near to the pleasure of Allah and His love. He reads the spending concretely, as what a man lays out in striving against the idolaters and on his journey with the Messenger of Allah ﷺ, and says the verse is about his intention. The hand does the same thing in both verses. Ibn Kathir names the second group directly as the praiseworthy type of bedouins, who give in Allah's cause seeking nearness to Allah and the Messenger's invocation for their benefit.",
            "bn": "আমাদের আয়াতে দ্বিতীয় কর্ম কুরুবাত। তাবারী বলছেন, এটি কুরবার বহুবচন, আর কুরবা হল যা মানুষকে আল্লাহর সন্তুষ্টি ও তাঁর ভালোবাসার কাছে নিয়ে আসে। খরচটাকে তিনি খুব বাস্তব অর্থে পড়েন, মুশরিকদের বিরুদ্ধে জিহাদে আর আল্লাহর রাসূল ﷺ এর সঙ্গে সফরে যা একজন খরচ করে। তাঁর মতে আয়াতের আলোচনা লোকটির নিয়ত নিয়ে। দুই আয়াতেই হাত একই কাজ করছে। ইবনু কাসীর দ্বিতীয় দলটিকে সরাসরি প্রশংসিত ধরনের বেদুঈন বলে চিহ্নিত করেন, যারা আল্লাহর পথে দেয় আল্লাহর নৈকট্য আর নিজেদের জন্য রাসূলের দু'আ চেয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Qurubat and the Waterskin",
          "bn": "কুরবাত আর কিরবার তফাত"
        },
        "p": [
          {
            "en": "Al-Qurtubi works the word out. Qurubat is the plural of qurbah, what a person draws near to Allah with, and on al-Jawhari's authority he notes that every noun of its shape allows the same vowellings in the plural. Then he separates two words that share the same three consonants: qurbah, with a damma on the qaf, is the nearness, while qirbah, with a kasra, is the skin you carry water in. He also records that Nafi', in Warsh's riwayah, reads qurbatun with a damma on the ra' where the rest read a sukun, and that nobody disagrees over qurubat itself.",
            "bn": "কুরতুবী শব্দটা খুলে দেখেন। কুরুবাত হল কুরবার বহুবচন, অর্থাৎ যা দিয়ে বান্দা আল্লাহর নৈকট্যে যায়। জাওহারীর সূত্রে তিনি বলেন, এই কাঠামোর প্রতিটি শব্দ বহুবচনে একই রকম হরকত নেয়। তারপর তিনি এমন ২টি শব্দ আলাদা করে দেন যেগুলোর একই ৩ বর্ণ। কাফের উপর পেশ দিয়ে কুরবা মানে নৈকট্য, আর যের দিয়ে কিরবা মানে পানি বহনের চামড়ার মশক। তিনি এটাও তুলে রাখেন যে ওয়ারশের রেওয়ায়াতে নাফি পড়েছেন রা-এর উপর পেশ দিয়ে কুরবাতুন, বাকিরা পড়েছেন সাকিন দিয়ে, আর কুরুবাত নিয়ে কারও দ্বিমত নেই।"
          },
          {
            "en": "On salawat ar-Rasul he separates the senses of salah as well. From Allah it is mercy, good and blessing, and he cites 33:43, that it is He who confers blessing upon you; from the angels it is supplication, and so it is from the Prophet ﷺ too, as 9:103 says, invoke blessings upon them, for your invocations are reassurance for them. At-Tabari reports Ibn Abbas glossing the Messenger's salawat here as the Prophet's istighfar for him, and Qatada as the Messenger's du'a. Al-Baghawi gives both, and relays from Ata that they wanted the du'a of the Prophet.",
            "bn": "সালাওয়াতুর রাসূল নিয়েও তিনি সালাতের অর্থগুলো আলাদা করেন। আল্লাহর পক্ষ থেকে সালাত মানে রহমত, কল্যাণ ও বরকত, আর এর দলিলে তিনি আনেন ৩৩:৪৩ আয়াত, তিনিই তোমাদের প্রতি অনুগ্রহ বর্ষণ করেন। ফেরেশতাদের পক্ষ থেকে সালাত মানে দু'আ, আর নবীর ﷺ পক্ষ থেকেও তাই, যেমন ৯:১০৩ আয়াত বলছে, তুমি তাদের জন্য দু'আ করো, তোমার দু'আ তাদের জন্য স্বস্তি। তাবারী ইবনু আব্বাসের ব্যাখ্যা আনেন, এখানে রাসূলের সালাওয়াত মানে নবীর ﷺ তার জন্য ইস্তিগফার করা, আর কাতাদার ব্যাখ্যায় তা রাসূলের দু'আ। বাগাভী দুটোই বলেন, তাঁর দু'আ আর তাঁর ইস্তিগফার, এবং আতা থেকে আনেন যে তারা নবীর ﷺ দু'আ পেতে চাইত।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Pronoun Refers To",
          "bn": "সর্বনামটি কার দিকে ফেরে"
        },
        "p": [
          {
            "en": "The number of the word shifts inside the verse. What they reckon their spending to be is plural, qurubat, approaches; what Allah then affirms is singular, unquestionably it is a qurbah for them. The affirmation opens on ala, the particle that makes a listener look up, then inna. The verse is not politely agreeing with their accounting; it announces a verdict on it. But the pronoun in innaha has to refer to something. At-Tabari reads it first as the Messenger's invocations being a nearness for them from Allah, then says it may mean the expenditure itself is such a nearness.",
            "bn": "আয়াতের ভেতরে শব্দের বচন বদলে যায়। খরচকে তারা যা মনে করছে তা বহুবচন, কুরুবাত, অর্থাৎ কাছে যাওয়ার নানা পথ। আর আল্লাহ যা নিশ্চিত করেন তা একবচন, সত্যিই তা তাদের জন্য কুরবা। এই নিশ্চয়তা শুরু হয় আলা দিয়ে, যে কণাটি শ্রোতাকে মুখ তুলে তাকাতে বাধ্য করে, তারপর আসে ইন্না। আয়াতটি ভদ্রতা করে তাদের হিসাবে সায় দিচ্ছে না, হিসাবটার উপর রায় ঘোষণা করছে। তবে ইন্নাহা-র সর্বনামটি কোনো না কোনো কিছুর দিকে ফিরবেই। তাবারী প্রথমে পড়েন, রাসূলের দু'আই আল্লাহর পক্ষ থেকে তাদের নৈকট্য, তারপর বলেন, এমনও হতে পারে যে খরচটাই আল্লাহর কাছে তাদের নৈকট্য।"
          },
          {
            "en": "Al-Qurtubi decides where at-Tabari leaves it open. On the same clause he writes that it brings them near to the mercy of Allah, and then names the referent: he means their expenditures. The difference is real and both state their reading plainly, though neither changes what the giver must do. As-Sa'di ties the halves together instead. The man reckons his spending, intends by it the face of Allah and nearness to Him, and makes it a means to the invocations of the Messenger ﷺ; then Allah explains what those invocations do, bringing them near, growing their wealth and settling blessing in it.",
            "bn": "তাবারী যেখানে দুই সম্ভাবনা খোলা রাখেন, কুরতুবী সেখানে সিদ্ধান্ত নেন। একই বাক্যাংশের ব্যাখ্যায় তিনি লিখছেন, তা তাদের আল্লাহর রহমতের কাছে নিয়ে আসে, আর সর্বনামের লক্ষ্যটাও বলে দেন, তিনি বোঝাচ্ছেন তাদের খরচগুলোকে। দ্বিমতটা আসল, দুজনই নিজের পাঠ খোলাখুলি বলেছেন, যদিও দাতার করণীয় কোনো পাঠেই বদলায় না। সা'দী বরং দুই দিককে একসূত্রে বাঁধেন। লোকটি খরচের হিসাব রাখে, তা দিয়ে আল্লাহর সন্তুষ্টি আর তাঁর নৈকট্য চায়, আর সেটাকেই বানায় রাসূল ﷺ এর দু'আ পাওয়ার উপায়। তারপর আল্লাহ জানিয়ে দেন সেই দু'আ কী করে, তা তাদের কাছে নিয়ে আসে, তাদের মাল বাড়ায় আর তাতে বরকত বসায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Aslam, Ghifar and Muzaynah",
          "bn": "আসলাম, গিফার আর মুযায়না"
        },
        "p": [
          {
            "en": "Who were they? At-Tabari transmits from Mujahid that they are Banu Muqarrin, of Muzaynah, and that they are the very people of 9:92, who came asking to be carried, were told nothing could be found to carry them on, and turned back with their eyes overflowing with tears. He also transmits Abd ar-Rahman ibn Maqil saying, we were ten sons of Muqarrin, and this was revealed about us. Al-Baghawi carries Mujahid's identification too and adds al-Kalbi's, that the verse means Aslam, Ghifar and Juhaynah. None of this is a settled occasion of revelation, and the verse stands without it.",
            "bn": "এরা কারা ছিল? তাবারী মুজাহিদ থেকে আনেন যে এরা মুযায়নার বনু মুকাররিন, আর এরাই ৯:৯২ আয়াতের সেই লোক, যারা বাহন চাইতে এসেছিল, শুনল যে বাহন মেলেনি, আর চোখ থেকে পানি ঝরতে ঝরতে ফিরে গেল। তিনি আব্দুর রহমান ইবনু মাকিলের কথাও আনেন, আমরা ছিলাম মুকাররিনের ১০ ছেলে, আর আমাদের নিয়েই এটি নেমেছে। বাগাভীও মুজাহিদের এই পরিচয় দেন, সঙ্গে কালবীর কথা যোগ করেন, আয়াতটি আসলাম, গিফার আর জুহাইনাকে বোঝাচ্ছে। এর কোনোটিই শানে নুযুল হিসেবে চূড়ান্ত নয়, আর এসব ছাড়াও আয়াত নিজের পায়ে দাঁড়ায়।"
          },
          {
            "en": "Al-Baghawi then brings a narration al-Bukhari records by the same line, his own chain running through Ayyub from Ibn Sirin from Abu Hurayrah (RA). The wording quoted is al-Bukhari's alone: the Prophet ﷺ said, (The people of) Aslam, Ghifar and some people of Muzaina and Juhaina or said (some people of Juhaina or Muzaina) are better with Allah or said (on the Day of resurrection) than the tribe of Asad, Tamim, Hawazin and Ghatafan. That is Sahih al-Bukhari 3523 in the Dar-us-Salam numbering, with the narrator's own hesitations left inside it. Sahih Muslim carries it with other tribes named, and those wordings are not mixed in.",
            "bn": "এরপর বাগাভী নিজের সনদে, আইয়ুব থেকে ইবনু সীরীন থেকে আবু হুরাইরা (রাঃ) সূত্রে একটি হাদিস আনেন, যা বুখারীও ঠিক এই সূত্রেই এনেছেন। এখানে যে শব্দগুলো তুলে দেওয়া হল সেগুলো কেবল বুখারীর, নবী ﷺ বলেছেন, আসলাম, গিফার আর মুযায়না ও জুহাইনার কিছু লোক, কিংবা তিনি বলেছেন জুহাইনা বা মুযায়নার কিছু লোক, আসাদ, তামীম, হাওয়াযিন আর গাতাফানের চেয়ে আল্লাহর কাছে উত্তম, কিংবা তিনি বলেছেন কিয়ামতের দিনে উত্তম। এটি দারুসসালাম সংখ্যায় সহীহ বুখারী ৩৫২৩, আর বর্ণনাকারীর নিজের সংশয়টুকু গুছিয়ে সরিয়ে দেওয়া হয়নি, ভেতরেই রাখা হয়েছে। সহীহ মুসলিমে অন্য গোত্রের নামসহ বর্ণনাটি আছে, সেই শব্দগুলো এখানে মেশানো হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on the Same Reckoning",
          "bn": "একই হিসাবের অন্য আয়াত"
        },
        "p": [
          {
            "en": "9:103 is where the Messenger's invocations come from, a few verses later: take from their wealth a charity by which you purify them and cause them increase, and invoke blessings upon them, for your invocations are reassurance for them. 9:104 then puts the receiving end of a charity exactly where our verse puts the nearness, asking whether they do not know that it is Allah who accepts repentance from His servants and who receives the charities, and that He is the Accepting of Repentance, the Merciful. The gift does not stop at the collector.",
            "bn": "রাসূলের দু'আর কথা আসে ৯:১০৩ আয়াত থেকে, যা আমাদের আয়াতের অল্প কয়েক আয়াত পরেই। তাদের সম্পদ থেকে সদাকা নাও, তা দিয়ে তাদের পবিত্র করো ও বাড়িয়ে দাও, আর তাদের জন্য দু'আ করো, তোমার দু'আ তাদের জন্য স্বস্তি। এরপর ৯:১০৪ আয়াত সদাকা গ্রহণের জায়গাটা ঠিক সেখানেই রাখে যেখানে আমাদের আয়াত নৈকট্য রাখে। আয়াতটি জিজ্ঞেস করে, তারা কি জানে না যে আল্লাহই বান্দাদের তওবা কবুল করেন আর সদাকা গ্রহণ করেন, আর তিনিই তওবা কবুলকারী, পরম দয়ালু। দান তাই আদায়কারীর হাতে এসে থামে না।"
          },
          {
            "en": "2:265 gives the same reckoning as a picture: those who spend their wealth seeking means to the approval of Allah and assuring reward for themselves are like a garden on high ground, doubling its fruit when the downpour hits it and served by a drizzle when it does not. 2:262 closes the other way of losing the deed, promising reward to those who spend and then do not follow it with reminders or injury. And 9:121 registers the small amounts, saying that no expenditure, little or large, and no valley crossed, goes unwritten for them.",
            "bn": "২:২৬৫ আয়াত একই হিসাবকে ছবিতে দেখায়। যারা আল্লাহর সন্তুষ্টি খুঁজতে আর নিজেদের মনে জোর আনতে সম্পদ খরচ করে, তারা উঁচু জমির বাগানের মতো। মুষলধারে বৃষ্টি পড়লে সে বাগান দ্বিগুণ ফল দেয়, বৃষ্টি না পড়লে শিশিরেই তার কাজ চলে। ২:২৬২ আয়াত আমল হারানোর অন্য পথটা বন্ধ করে, যারা খরচ করে এবং পরে দানের কথা তুলে খোঁটা দেয় না বা কষ্ট দেয় না, তাদের প্রতিদান তাদের রবের কাছে। আর ৯:১২১ আয়াত ছোট অঙ্কগুলোও খাতায় তোলে, কম বা বেশি কোনো খরচ আর পার হওয়া কোনো উপত্যকা তাদের নামে না লিখে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning a Fine Into Nearness",
          "bn": "জরিমানাকে নৈকট্যে বদলানো"
        },
        "p": [
          {
            "en": "The test the verse sets is not the amount. As-Sa'di puts the practical conclusion plainly: the believer should discharge the dues that are upon him with an open chest and a settled soul, and should be eager that it be a gain for him and not a fine. The obligation itself does not move with the mood. What moves is whether the transfer feels like an approach or a deduction, and that is the part a person can work on before the money goes.",
            "bn": "আয়াত যে পরীক্ষা সামনে রাখে, তা পরিমাণের পরীক্ষা নয়। সা'দী কাজের কথাটা সোজা বলে দেন। মু'মিনের উপর যে হক আছে তা সে আদায় করবে খোলা মনে আর শান্ত অন্তরে, আর চাইবে যেন তা তার জন্য লাভ হয়, জরিমানা না হয়। হুকুম নিজে মনের অবস্থার সঙ্গে বদলায় না। বদলায় এটাই, হাত থেকে জিনিসটা যাওয়াকে এগিয়ে যাওয়া মনে হচ্ছে নাকি কেটে নেওয়া মনে হচ্ছে। টাকা বেরোনোর আগে মানুষ এই জায়গাটাতেই কাজ করতে পারে।"
          },
          {
            "en": "Two things in the verse move it. Belief in Allah and the Last Day is named before the reckoning of the spending, so a man who cannot feel his giving as nearness is usually short on the hereafter rather than on generosity. And these men wanted somebody's du'a over what they handed over. Naming the amount before the month begins rather than at the end, giving part of it where nobody whose opinion matters will hear, and then refusing to revisit the figure, are the ordinary forms of the same reckoning.",
            "bn": "আয়াতের দুটি কথা এই হিসাবকে নাড়া দেয়। খরচের হিসাবের আগেই আয়াত আল্লাহ ও শেষ দিনের উপর ঈমানের কথা বলেছে। তাই কেউ যদি নিজের দানকে আল্লাহর নৈকট্য হিসেবে অনুভব করতে না পারে, তার ঘাটতি সাধারণত দানশীলতায় নয়, আখিরাতের বিশ্বাসে। আর এই লোকেরা চেয়েছিল, তাদের দেওয়া জিনিসের উপর কেউ দু'আ করুক। মাস শেষে নয়, মাস শুরুর আগেই অঙ্কটা ঠিক করে ফেলা; তার কিছু অংশ এমনভাবে দেওয়া, যাতে যাদের মতামত আপনার কাছে দামি তাদের কেউ টের না পায়; আর দেওয়ার পর অঙ্কটা নিয়ে আর ফিরে না ভাবা: এগুলোই এই একই হিসাবের রোজকার চেহারা।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Him to Confirm It",
          "bn": "কবুলের জন্য তাঁর কাছে চাওয়া"
        },
        "p": [
          {
            "en": "The verse is a statement rather than a supplication, but what it confirms is exactly what a giver wants confirmed, and the Quran supplies the asking. 2:127 has Ibrahim (AS) and Ismail (AS) raising the foundations of the House and saying, our Lord, accept from us, indeed You are the Hearing, the Knowing. It is the shortest request a person can make over work his own hands have already finished, and it asks for the one thing no amount of effort can secure by itself.",
            "bn": "আয়াতটি দু'আ নয়, ঘোষণা। তবু আয়াত যে কথাটা নিশ্চিত করে দেয়, একজন দাতা ঠিক সেটাই নিশ্চিত হতে চান। আর চাওয়ার ভাষাটা কুরআনই শিখিয়ে দিয়েছে। ২:১২৭ আয়াতে ইবরাহীম (আঃ) আর ইসমাঈল (আঃ) কাবার ভিত তুলছেন আর বলছেন: হে আমাদের রব, আমাদের পক্ষ থেকে কবুল করুন, নিশ্চয়ই আপনি সব শোনেন, সব জানেন। নিজের হাতে শেষ করা কাজের উপর মানুষ এর চেয়ে ছোট আবেদন করতে পারে না। আর এতে চাওয়া হয় সেই একটি জিনিস, যা শুধু খেটে কেউ নিশ্চিত করতে পারে না।"
          },
          {
            "en": "A supplication in the verse's own words can be added, claiming no more than that: O Allah, make what leaves my hand a nearness to You and not a loss against me, and admit me into Your mercy. It is assembled from qurubat, from the fine of the verse before, and from this verse's closing clause, and it is not a Sunnah du'a. The invocations these men wanted came from the Prophet ﷺ himself, and 9:103 names who was commanded to give them; a reader's part is to ask upright people to pray for him.",
            "bn": "আয়াতের নিজের শব্দ দিয়ে একটা দু'আ বানিয়ে নেওয়া যায়, তবে এর বেশি কোনো দাবি তার নেই: হে আল্লাহ, আমার হাত থেকে যা যায় তাকে আপনার নৈকট্যের উপায় বানিয়ে দিন, আমার বিরুদ্ধে জরিমানা বানাবেন না, আর আমাকে আপনার রহমতের ভেতরে প্রবেশ করান। শব্দগুলো নেওয়া হয়েছে কুরুবাত থেকে, আগের আয়াতের জরিমানা থেকে আর এই আয়াতের শেষ বাক্য থেকে। এটি সুন্নাহর কোনো দু'আ নয়। এই লোকেরা যে দু'আ চেয়েছিল, তা করতেন নবী ﷺ নিজে; আর সেই দু'আ করার হুকুম কাকে দেওয়া হয়েছিল, ৯:১০৩ আয়াত তা বলে দিয়েছে। পাঠকের কাজ হলো নেককার মানুষদের কাছে নিজের জন্য দু'আ চাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Reckoning",
          "bn": "নিজের হিসাব নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "When something leaves my hand this week, which of the two verses is describing me, and could I tell the difference from the inside? The verse names belief in the Last Day before it names the spending, so how much of my own giving is arranged so that somebody in this world will notice it? And these men wanted a du'a said over what they gave: whose du'a would I want, and have I ever actually asked for it?",
            "bn": "এই সপ্তাহে যখন আমার হাত থেকে কিছু যাবে, দুই আয়াতের কোনটা তখন আমার কথা বলবে? আর ভেতর থেকে আমি কি তফাতটা টের পাব? আয়াত খরচের কথার আগে শেষ দিনের উপর ঈমানের কথা বলেছে। তাহলে আমার দানের কতটা এমনভাবে সাজানো, যাতে দুনিয়ার কারও চোখে পড়ে? আর এই লোকেরা নিজেদের দানের উপর দু'আ চেয়েছিল। আমি কার দু'আ চাইতাম, আর সত্যিই কি কখনো চেয়েছি?"
          },
          {
            "en": "Two more. Allah confirmed their accounting out loud instead of leaving it to them, so which part of my own accounting am I quietly hoping He will confirm, and what part would I rather He did not look at? And the blame in the verses just before fell on leaving His commands rather than on where anybody happened to live: what am I putting down to my circumstances that really belongs to my own choices?",
            "bn": "আরও দুটি প্রশ্ন। আল্লাহ তাদের হিসাবটা তাদের উপর ছেড়ে দেননি, নিজেই প্রকাশ্যে কবুলের কথা জানিয়ে দিয়েছেন। তাহলে আমার হিসাবের কোন অংশটা তিনি কবুল করবেন বলে আমি মনে মনে আশা করি, আর কোন অংশের দিকে তিনি না তাকালেই আমি খুশি হতাম? আর ঠিক আগের আয়াতগুলোতে দোষ পড়েছিল আল্লাহর হুকুম ছেড়ে দেওয়ার উপর, কে কোথায় থাকে তার উপর নয়। আমি কোন জিনিসটা পরিস্থিতির ঘাড়ে চাপাই, যা আসলে আমার নিজেরই বাছাই?"
          }
        ]
      }
    ]
  },
  "9:105": {
    "sections": [
      {
        "h": {
          "en": "Spoken After the Untying",
          "bn": "বাঁধন খোলার পরের কথা"
        },
        "p": [
          {
            "en": "Wa quli i'malu: and say, work. The command comes fourth in a short run of verses about people who stayed behind from the Tabuk campaign. In 9:102 others acknowledge their sins, having mixed a righteous deed with a bad one. Ibn Kathir, in his abridged English text on that verse, reports from Ibn 'Abbas that this means Abu Lubabah and some of his friends, five, seven or nine with him, who tied themselves to the pillars of the Masjid until the Messenger ﷺ, once the verse came down, untied them and pardoned them. He gives no grading for the report.",
            "bn": "ওয়া কুলি'মালু: আর বলো, আমল করো। তাবুক অভিযানে যারা পেছনে থেকে গিয়েছিল, তাদের নিয়ে ছোট এক ধারার আয়াত। এ আদেশ তার চতুর্থটি। ৯:১০২ আয়াতে আরেক দল নিজেদের গুনাহ স্বীকার করে। তারা একটি নেক আমলের সাথে একটি মন্দ আমল মিশিয়ে ফেলেছিল। ইবন কাসীর সেই আয়াতের সংক্ষিপ্ত ইংরেজি তাফসীরে ইবন আব্বাস থেকে বর্ণনা করেন, এরা আবু লুবাবা ও তাঁর কয়েকজন সঙ্গী, সংখ্যায় ৫, ৭ বা ৯ জন। তাঁরা নিজেদের মসজিদের খুঁটির সাথে বেঁধে রেখেছিলেন। আয়াত নাজিল হলে রসূল ﷺ তাঁদের বাঁধন খুলে দেন এবং ক্ষমা করেন। বর্ণনাটির কোনো মান তিনি উল্লেখ করেননি।"
          },
          {
            "en": "Ma'arif al-Qur'an, in notes grouped across 9:103 to 9:105, carries the account on. Once released, they offered their entire wealth in gratitude; the Prophet ﷺ said he had no authority to take it; then 9:103 came down, take from their wealth a charity, and he took a third of it. Ma'arif names no source and no grading for this, and the rulings it draws on zakah are left to that book. Then 9:104 reminds them that Allah accepts repentance and receives charities, and this verse follows. At-Tabari reads it as still speaking to that same group.",
            "bn": "মাআরিফুল কুরআন ৯:১০৩ থেকে ৯:১০৫ পর্যন্ত একসাথে আলোচনা করে, আর ঘটনার বাকিটা সেখানে আছে। মুক্তি পাওয়ার পর কৃতজ্ঞতায় তাঁরা নিজেদের সব সম্পদ পেশ করলেন। নবী ﷺ বললেন, তা নেওয়ার অধিকার তাঁর নেই। তখন ৯:১০৩ নাজিল হলো, তাদের সম্পদ থেকে সদাকাহ গ্রহণ করো। তিনি এক-তৃতীয়াংশ নিলেন। এর কোনো সূত্র বা মান মাআরিফ উল্লেখ করেনি। জাকাত নিয়ে সে গ্রন্থ যেসব বিধান টেনেছে, সেগুলো তার কাছেই থাকুক। এরপর ৯:১০৪ মনে করিয়ে দেয়, আল্লাহই তওবা কবুল করেন আর সদাকাহ গ্রহণ করেন। তারপর আসে এই আয়াত। তাবারীর পাঠে আয়াতটি তখনও ওই দলকেই সম্বোধন করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Answers to Whom",
          "bn": "কাকে বলা, চার রকম জবাব"
        },
        "p": [
          {
            "en": "Who is told to work? At-Tabari answers directly: Allah tells His Prophet ﷺ to say it to those who confessed their sins to him, from among those who stayed behind from jihad with him. The Muyassar keeps the address with those who stayed behind from jihad, without narrowing it to the ones who confessed. On both readings the verse speaks to people already inside the passage on repentance, and the next thing it gives them is work.",
            "bn": "আমল করতে বলা হচ্ছে কাকে? তাবারীর জবাব সরাসরি। আল্লাহ তাঁর নবী ﷺ-কে বলছেন, কথাটা তাদের বলো যারা তোমার কাছে নিজেদের গুনাহ স্বীকার করেছে, তোমার সাথে জিহাদে না গিয়ে যারা পেছনে থেকে গিয়েছিল তাদের মধ্য থেকে। মুয়াসসারও সম্বোধনটা রাখে জিহাদ থেকে পিছিয়ে থাকা লোকদের দিকে, তবে শুধু স্বীকারকারীদের মধ্যে সীমিত করে না। দুই পাঠেই আয়াতটি কথা বলছে তওবার আলোচনার ভেতরে থাকা মানুষদের সাথে। আর তাদের হাতে পরের যে জিনিসটা তুলে দিচ্ছে, তা হলো আমল।"
          },
          {
            "en": "As-Sa'di places the address elsewhere: say to these hypocrites, work whatever deeds you see fit and carry on with your falsehood, and do not reckon that it will stay hidden. Al-Qurtubi gives a third answer in two words, khitab li-l-jami': an address to everyone. These are real differences and the fetched texts do not settle them; at-Tabari, the Muyassar, as-Sa'di and al-Qurtubi each stand where they stand. As-Sa'di also offers a second possibility, taken up below, which widens the verse to any deed, good or evil.",
            "bn": "সা'দী সম্বোধনটা রাখেন অন্য জায়গায়। তাঁর ব্যাখ্যায় কথাটা এই মুনাফিকদের জন্য: যে আমল ভালো মনে করো করতে থাকো, নিজেদের বাতিলের ওপর অটল থাকো, তবে ভেবো না তা গোপন থাকবে। কুরতুবী দুই শব্দে তৃতীয় জবাব দেন, খিতাবুন লিল-জামী', অর্থাৎ সবার প্রতি সম্বোধন। মতভেদগুলো সত্যিকারের, আর এখানে আনা তাফসীরগুলো এর মীমাংসা করে না। তাবারী, মুয়াসসার, সা'দী ও কুরতুবী যে যার জায়গায় আছেন। সা'দী আরেকটি সম্ভাবনাও দেখান, যা নিচে আসছে। তাতে আয়াতটি ভালো-মন্দ যেকোনো আমলের দিকে প্রসারিত হয়।"
          },
          {
            "en": "One thing follows from as-Sa'di's reading and needs saying plainly. Where the verse speaks of hypocrites, it describes people of that time whom, as 9:101 says, the Prophet ﷺ did not know and Allah did. It licenses nothing against any living person or community, and gives no one leave to label a neighbour a hypocrite from what he appears to do. The seeing it promises belongs first to Allah, and on several of the readings below, what reaches the Messenger ﷺ and the believers reaches them because He informs them.",
            "bn": "সা'দীর পাঠ থেকে একটা কথা আসে, যা সোজাসুজি বলা দরকার। আয়াতটি যেখানে মুনাফিকদের কথা বলে, সেখানে সে যুগের এমন লোকদের বর্ণনা দেয়, যাদের ৯:১০১ আয়াতের ভাষায় নবী ﷺ চিনতেন না, আল্লাহ চিনতেন। এ আয়াত কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না। কারও বাহ্যিক কাজ দেখে প্রতিবেশীকে মুনাফিক বলে দাগানোর অধিকারও কাউকে দেয় না। আয়াতে যে দেখার প্রতিশ্রুতি, তা প্রথমে আল্লাহর। আর নিচের কয়েকটি ব্যাখ্যায় রসূল ﷺ ও মু'মিনদের কাছে যা পৌঁছায়, তা পৌঁছায় তিনি জানিয়ে দেন বলেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Obey, or Carry On",
          "bn": "আনুগত্য, নাকি যা খুশি"
        },
        "p": [
          {
            "en": "The single imperative, i'malu, carries opposite tones in the commentaries. At-Tabari fills it in as: work for Allah with what pleases Him, by obeying Him and performing His obligations. The Muyassar uses nearly the same words and adds the avoidance of sins. Read this way, the verb is an instruction: do the work the confession has opened the way to. As-Sa'di reads it the other way, as a permission that warns: do what you will, carry on with your falsehood, and know it will not stay hidden.",
            "bn": "একটিমাত্র আদেশসূচক শব্দ, ই'মালু, অথচ তাফসীরে তার সুর দুই রকম। তাবারী এর ব্যাখ্যা দেন এভাবে: আল্লাহর জন্য সেই আমল করো যাতে তিনি সন্তুষ্ট, তাঁর আনুগত্য করে আর তাঁর ফরজগুলো আদায় করে। মুয়াসসার প্রায় একই কথা বলে, সাথে যোগ করে গুনাহ থেকে বেঁচে থাকা। এ পাঠে শব্দটি নির্দেশ। স্বীকারোক্তি যে পথ খুলে দিয়েছে, সে পথে আমল করো। সা'দী পড়েন উল্টো দিক থেকে। তাঁর কাছে এ এক সতর্ক করা অনুমতি: যা খুশি করো, বাতিলের ওপর চলতে থাকো, তবে জেনে রাখো তা লুকানো থাকবে না।"
          },
          {
            "en": "Between these sits Mujahid's one-line comment, hadha wa'id: this is a threat. At-Tabari gives it with its chain, through Sufyan from a man from Mujahid; al-Baghawi quotes it as a threat to them; Ibn Kathir expands it into a threat from Allah to those who go against His commands, that their deeds will be presented to Him, to the Messenger and to the believers. The Muyassar and as-Sa'di both close on a similar warning to whoever persists in his falsehood and transgression. Even the Muyassar, which reads the command as obedience, ends on that edge.",
            "bn": "এ দুইয়ের মাঝে আছে মুজাহিদের এক লাইনের মন্তব্য, হাযা ওয়া'ঈদ: এটি হুমকি। তাবারী এটি সনদসহ আনেন, সুফিয়ান থেকে, তিনি এক ব্যক্তি থেকে, তিনি মুজাহিদ থেকে। বাগাভী উদ্ধৃত করেন, এটি তাদের প্রতি হুমকি। ইবন কাসীর একে বিস্তৃত করেন: যারা আল্লাহর আদেশের বিরোধিতা করে, তাদের প্রতি তাঁর হুমকি যে, তাদের আমল পেশ করা হবে তাঁর সামনে, রসূলের সামনে আর মু'মিনদের সামনে। মুয়াসসার ও সা'দী দুজনই শেষ করেন একই রকম সতর্কবাণীতে, যে বাতিল ও সীমালঙ্ঘনে অটল থাকে তার জন্য। মুয়াসসার আদেশটিকে আনুগত্য হিসেবে পড়ে, তবু তার শেষেও এই ধার রয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen Here, or Shown There",
          "bn": "এখানে দেখা, নাকি সেখানে দেখানো"
        },
        "p": [
          {
            "en": "Fa-sa-yara Allahu 'amalakum wa rasuluhu wa-l-mu'minun: Allah will see your work, and His Messenger and the believers. How do the second and the third see it? At-Tabari places it in this world: Allah will see your work if you do it, and His Messenger and the believers will see it, fi ad-dunya. As-Sa'di frames it as disclosure: your work must become clear and evident. The Muyassar has a similar phrase of its own, and your matter will become plain.",
            "bn": "ফাসাইয়ারাল্লাহু 'আমালাকুম ওয়া রাসূলুহূ ওয়াল-মু'মিনূন: আল্লাহ তোমাদের আমল দেখবেন, আর তাঁর রসূল ও মু'মিনরাও। দ্বিতীয় ও তৃতীয় জন দেখবেন কীভাবে? তাবারী একে রাখেন এই দুনিয়ায়। তোমরা আমল করলে আল্লাহ তা দেখবেন, আর তাঁর রসূল ও মু'মিনরাও তা দেখবে, ফিদ-দুনইয়া, দুনিয়াতেই। সা'দীর কাছে বিষয়টা প্রকাশ হয়ে পড়ার: তোমাদের আমল স্পষ্ট ও পরিষ্কার হয়ে যাবেই। মুয়াসসারের ভাষাও কাছাকাছি: তোমাদের ব্যাপারটা খোলাসা হয়ে যাবে।"
          },
          {
            "en": "Al-Qurtubi names the means: they see it because He makes them aware of your deeds. Al-Baghawi, after Mujahid, reports under qila, it is said, a two-part account: the Prophet's ﷺ seeing is by Allah informing him, and the believers' seeing is by Allah placing in their hearts love for the people of righteousness and aversion to the people of corruption. As-Sa'di's second possibility runs close to al-Qurtubi: whatever you do of good or evil, Allah is aware of you, and He will make His Messenger and His believing servants aware of your deeds, even hidden ones.",
            "bn": "কুরতুবী মাধ্যমটির নাম বলেন: তারা দেখবে, কারণ আল্লাহ তোমাদের আমল সম্পর্কে তাদের অবহিত করবেন। বাগাভী মুজাহিদের কথার পর 'কীলা', অর্থাৎ 'বলা হয়' দিয়ে দুই অংশের একটি ব্যাখ্যা আনেন। নবী ﷺ দেখেন আল্লাহ তাঁকে জানিয়ে দেন বলে। আর মু'মিনরা দেখে এভাবে যে, আল্লাহ তাদের অন্তরে নেককারদের প্রতি ভালোবাসা আর ফাসাদকারীদের প্রতি বিরাগ ঢেলে দেন। সা'দীর দ্বিতীয় সম্ভাবনাটি কুরতুবীর কাছাকাছি। তোমরা ভালো-মন্দ যা-ই করো, আল্লাহ তোমাদের দেখছেন। আর তোমাদের আমল গোপন হলেও তিনি তাঁর রসূল ও মু'মিন বান্দাদের তা জানিয়ে দেবেন।"
          },
          {
            "en": "Ibn Kathir moves the main scene to the next world. The deeds will be presented to Allah, to the Messenger and to the believers, and that, he says, will certainly happen on the Day of Resurrection. He cites 69:18, that Day you will be presented and no secret of yours will stay hidden; 86:9, the Day secrets are put to the test; and 100:10, and what is in the breasts is brought out. Then he adds that it may also become apparent to people in this world. The two settings are his, set side by side.",
            "bn": "ইবন কাসীর মূল দৃশ্যটা নিয়ে যান আখিরাতে। আমলগুলো পেশ করা হবে আল্লাহর সামনে, রসূলের সামনে আর মু'মিনদের সামনে, আর তাঁর ভাষায় কিয়ামতের দিন এটা ঘটবেই। তিনি দলিল আনেন ৬৯:১৮ থেকে: সেদিন তোমাদের পেশ করা হবে, তোমাদের কোনো গোপন কথাই গোপন থাকবে না। ৮৬:৯ থেকে: যেদিন গোপন বিষয়গুলো যাচাই করা হবে। আর ১০০:১০ থেকে: অন্তরে যা আছে তা বের করে আনা হবে। তারপর তিনি যোগ করেন, দুনিয়াতেও কখনো তা মানুষের সামনে প্রকাশ পেতে পারে। দুটি ক্ষেত্রই তাঁর, পাশাপাশি রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Rock With No Door",
          "bn": "দরজাহীন পাথরের ভেতরে"
        },
        "p": [
          {
            "en": "For the appearing in this world, Ibn Kathir cites Imam Ahmad's narration from Abu Sa'id, from the Messenger ﷺ: were one of you to work inside a solid rock with no door and no opening, Allah would bring his work out to people, whatever it is. Ibn Kathir states no grading for it. Al-Qurtubi has the same image under fi al-khabar, in the report, naming no narrator and no collection and giving no grading. The article reports it as these two give it and adds no grading of its own.",
            "bn": "দুনিয়াতে প্রকাশ পাওয়ার কথায় ইবন কাসীর ইমাম আহমাদের একটি বর্ণনা আনেন, আবু সাঈদ থেকে, তিনি রসূল ﷺ থেকে: তোমাদের কেউ যদি এমন নিরেট পাথরের ভেতরে আমল করে, যার কোনো দরজা নেই, কোনো ফোকরও নেই, তবু আল্লাহ তার আমল মানুষের সামনে বের করে আনবেন, তা যা-ই হোক। ইবন কাসীর এর কোনো মান উল্লেখ করেননি। কুরতুবীও একই ছবি আনেন 'ফিল-খাবার', অর্থাৎ 'বর্ণনায় আছে' বলে। তিনি কোনো বর্ণনাকারী বা গ্রন্থের নাম দেননি, মানও বলেননি। এখানে বর্ণনাটি সেভাবেই রাখা হলো যেভাবে তাঁরা দুজন এনেছেন, নিজের পক্ষ থেকে কোনো মান যোগ না করে।"
          },
          {
            "en": "Ibn Kathir then opens a separate matter with wa qad warada, it has been reported: that the deeds of the living are shown to their dead relatives and kin in the barzakh. He cites Abu Dawud at-Tayalisi, from Jabir ibn 'Abd Allah: your deeds are shown to your relatives and kin in their graves; if they are good, they rejoice at them, and if otherwise they say, O Allah, inspire them to act in obedience to You. He adds Imam Ahmad's version from Anas, which ends: O Allah, do not let them die until You guide them as You guided us.",
            "bn": "এরপর ইবন কাসীর 'ওয়া কাদ ওয়ারাদা', অর্থাৎ 'বর্ণিত হয়েছে' বলে আলাদা একটি প্রসঙ্গ তোলেন: জীবিতদের আমল বারযাখে তাদের মৃত আত্মীয়স্বজন ও গোত্রের লোকদের সামনে পেশ করা হয়। তিনি আবু দাউদ তায়ালিসি থেকে জাবির ইবন আবদুল্লাহর বর্ণনা আনেন: তোমাদের আমল কবরে থাকা তোমাদের আত্মীয়স্বজন ও গোত্রের সামনে পেশ করা হয়। ভালো হলে তারা খুশি হয়। অন্য রকম হলে বলে, হে আল্লাহ, তাদের মনে তোমার আনুগত্যের আমলের প্রেরণা দাও। তিনি আনাস থেকে ইমাম আহমাদের একটি রূপও আনেন, যার শেষে আছে: হে আল্লাহ, আমাদের যেমন হিদায়াত দিয়েছ, তাদেরও হিদায়াত না দেওয়া পর্যন্ত তাদের মৃত্যু দিয়ো না।"
          },
          {
            "en": "These reports reach this article only through Ibn Kathir, who cites them from at-Tayalisi and Ahmad and grades neither, so they stay ungraded here, and the showing of deeds to the dead is not presented as established. None of the fetched commentaries on this verse speaks of deeds being shown to the Prophet ﷺ in his grave; the presenting to the Messenger in Ibn Kathir's comment belongs to the Day of Resurrection. No hadith from the six collections is attached to this verse in the commentaries fetched for it.",
            "bn": "এ বর্ণনাগুলো এখানে এসেছে কেবল ইবন কাসীরের মাধ্যমে। তিনি এগুলো তায়ালিসি ও আহমাদ থেকে এনেছেন, কোনোটির মান বলেননি। তাই এখানেও এগুলো মান ছাড়াই রইল, আর মৃতদের সামনে আমল পেশ হওয়ার কথাটিকে প্রতিষ্ঠিত বিষয় হিসেবে উপস্থাপন করা হচ্ছে না। এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই কবরে নবী ﷺ-এর সামনে আমল পেশ হওয়ার কথা বলে না। ইবন কাসীরের মন্তব্যে রসূলের সামনে পেশ হওয়ার যে কথা, তা কিয়ামতের দিনের। এ আয়াতের তাফসীরগুলোতে ৬টি হাদিসগ্রন্থের কোনো হাদিস যুক্ত নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Before You Admire a Deed",
          "bn": "কারও আমলে মুগ্ধ হওয়ার আগে"
        },
        "p": [
          {
            "en": "Ibn Kathir then quotes al-Bukhari for a saying of 'A'ishah (RA): if the excellence of a person's work pleases you, then say, i'malu fa-sa-yara Allahu 'amalakum wa rasuluhu wa-l-mu'minun. It is her word, not a saying of the Prophet ﷺ, and Ibn Kathir gives no number for it. Used this way, the verse speaks less to the worker than to the onlooker. Praise is held back and handed over to the verse: let the work go on before the One who sees it.",
            "bn": "এরপর ইবন কাসীর বুখারীর বরাতে আয়েশা (রাঃ)-এর একটি কথা আনেন: কারও আমলের সৌন্দর্য যদি তোমাকে মুগ্ধ করে, তবে বলো, ই'মালূ ফাসাইয়ারাল্লাহু 'আমালাকুম ওয়া রাসূলুহূ ওয়াল-মু'মিনূন। কথাটি তাঁর নিজের, নবী ﷺ-এর বাণী নয়, আর ইবন কাসীর এর কোনো নম্বর দেননি। এভাবে পড়লে আয়াতটি যে আমল করছে তার চেয়ে বেশি কথা বলে যে দেখছে তার সাথে। প্রশংসা থামিয়ে রাখা হয়, ভার দেওয়া হয় আয়াতের হাতে। আমল চলুক তাঁর সামনে, যিনি তা দেখছেন।"
          },
          {
            "en": "As a hadith of similar meaning, Ibn Kathir cites Imam Ahmad from Anas, that the Messenger ﷺ said: do not be impressed by anyone until you see how his life is sealed. A worker may do good for a stretch, so that dying then he would enter Paradise, then change and do evil; a servant may do evil for a stretch, then change and do good. When Allah wills good for a servant, He employs him before his death. Asked how, he said: He enables him to a righteous deed, then takes him upon it. Ibn Kathir notes only that Ahmad alone has it by this route.",
            "bn": "ইবন কাসীর বলেন, এর কাছাকাছি অর্থের একটি হাদিস এসেছে। তিনি আনাস থেকে ইমাম আহমাদের বর্ণনা আনেন, রসূল ﷺ বলেছেন: কারও শেষটা কেমন হয় তা না দেখা পর্যন্ত তাকে নিয়ে মুগ্ধ হয়ো না। কেউ জীবনের এক পর্ব এমন নেক আমল করে যে, তখন মারা গেলে জান্নাতে যেত। তারপর সে বদলে গিয়ে মন্দ কাজ করে। আবার কোনো বান্দা জীবনের এক পর্ব মন্দ কাজ করে, তখন মারা গেলে জাহান্নামে যেত। তারপর বদলে গিয়ে নেক আমল করে। আল্লাহ কোনো বান্দার কল্যাণ চাইলে মৃত্যুর আগে তাকে কাজে লাগান। জিজ্ঞেস করা হলো, কীভাবে? তিনি বললেন, তাকে নেক আমলের তাওফিক দেন, তারপর সে অবস্থায় তার রূহ কবজ করেন। ইবন কাসীর শুধু এটুকু বলেন যে, এই সূত্রে কেবল আহমাদই এটি বর্ণনা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Secret and Open Alike",
          "bn": "গোপন আর প্রকাশ্য সমান"
        },
        "p": [
          {
            "en": "Wa sa-turadduna ila 'alimi al-ghaybi wa-sh-shahadah: and you will be returned to the Knower of the unseen and the witnessed. At-Tabari places the return on the Day of Resurrection and glosses the name as the One who knows your secrets and your open acts, so that nothing of the inward or the outward of your affairs is hidden from Him. The Muyassar gives the same pair in plainer words: the One who knows what you keep secret and what you do openly. Ibn Kathir's three verses on hidden things brought out describe the same exposure.",
            "bn": "ওয়া সাতুরাদ্দূনা ইলা 'আলিমিল গাইবি ওয়াশ-শাহাদাহ: আর তোমাদের ফিরিয়ে নেওয়া হবে অদৃশ্য ও দৃশ্যের জ্ঞাতার কাছে। তাবারী এই ফিরে যাওয়াকে রাখেন কিয়ামতের দিনে। নামটির ব্যাখ্যা দেন এভাবে: যিনি তোমাদের গোপন ও প্রকাশ্য সবই জানেন, তোমাদের বিষয়ের ভেতর-বাইরের কিছুই তাঁর কাছে লুকানো নয়। মুয়াসসার একই জোড়া বলে আরও সহজ ভাষায়: যিনি তোমাদের গোপন কথা আর খোলা কথা দুটোই জানেন। লুকানো জিনিস বের করে আনার যে তিনটি আয়াত ইবন কাসীর উদ্ধৃত করেছেন, সেগুলোও এই উন্মোচনেরই ছবি।"
          },
          {
            "en": "Fa-yunabbi'ukum bima kuntum ta'malun: and He will inform you of what you used to do. At-Tabari makes the informing a sorting. He will tell you what you did, and of it what was sincere and what was for show, what was obedience and what was disobedience to Allah, and then repay you for all of it, the doer of good for his good and the doer of evil for his evil. As-Sa'di adds that the informing covers good and evil both, and reads the clause as a severe threat to whoever persists in falsehood.",
            "bn": "ফাইউনাব্বি'উকুম বিমা কুনতুম তা'মালূন: তখন তিনি তোমাদের জানিয়ে দেবেন তোমরা কী আমল করতে। তাবারীর কাছে এই জানানো মানে বাছাই। তোমরা কী করেছিলে তিনি তা বলবেন। তার কোনটা খাঁটি ছিল আর কোনটা লোক দেখানো, কোনটা আনুগত্য আর কোনটা আল্লাহর নাফরমানি, সেটাও বলবেন। তারপর সব কিছুর প্রতিদান দেবেন: নেককারকে তার নেকির, মন্দকারীকে তার মন্দের। সা'দী যোগ করেন, এই জানানোয় ভালো ও মন্দ দুটোই আছে। আর বাতিলে অটল থাকা লোকের জন্য অংশটিকে তিনি কঠিন হুমকি হিসেবে পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Working While the Verdict Waits",
          "bn": "রায় ঝুলে থাকার সময়ের আমল"
        },
        "p": [
          {
            "en": "The next verse, 9:106, names yet another group: others deferred to Allah's command, whether He punishes them or turns to them, and Allah is Knowing and Wise. So this verse sits between people whose confession has been received and people whose case is still open. Between a door already opened and a door not yet opened, the passage sets down a single verb, and a reminder that what is done under it is seen.",
            "bn": "পরের আয়াত, ৯:১০৬, আরও এক দলের কথা বলে: কিছু লোককে আল্লাহর আদেশের অপেক্ষায় রাখা হলো, তিনি তাদের শাস্তি দেবেন অথবা তাদের তওবা কবুল করবেন, আর আল্লাহ সর্বজ্ঞ, প্রজ্ঞাময়। ফলে এ আয়াতের অবস্থান দুই দলের মাঝখানে। একদিকে যাদের স্বীকারোক্তি কবুল হয়েছে, অন্যদিকে যাদের বিষয় এখনও খোলা। খুলে যাওয়া দরজা আর এখনও বন্ধ দরজার মাঝে আয়াতের ধারা রেখে দেয় একটিমাত্র ক্রিয়া। সাথে মনে করিয়ে দেয়, এর অধীনে যা করা হয় তা দেখা হচ্ছে।"
          },
          {
            "en": "For a reader today, the single command holds several readings, and none needs settling before it is felt. If you have confessed something and been forgiven, at-Tabari's reading makes the verse a way forward: work for Allah with what pleases Him. If you are carrying on with something you would rather nobody saw, Mujahid's word is a threat, and the image of the doorless rock says that hiding is not a plan. And when someone else's good work dazzles you, 'A'ishah's use of the verse asks you to wait, keep working, and leave the verdict with the Knower of the unseen and the witnessed.",
            "bn": "আজকের পাঠকের জন্য এক আদেশে কয়েকটি পাঠ আছে, আর অনুভব করার আগে সেগুলোর মীমাংসা করতে হয় না। আপনি যদি কোনো গুনাহ স্বীকার করে ক্ষমা পেয়ে থাকেন, তাবারীর পাঠে আয়াতটি সামনে এগোনোর পথ: আল্লাহর জন্য সেই আমল করুন যাতে তিনি সন্তুষ্ট। আর যদি এমন কিছু চালিয়ে যেতে থাকেন যা কেউ না দেখুক বলে চান, তবে মুজাহিদের কথায় এটি হুমকি। দরজাহীন পাথরের ছবিটাও বলে দেয়, লুকিয়ে রাখা কোনো উপায় নয়। আবার অন্য কারও নেক আমল যখন আপনাকে মুগ্ধ করে, আয়েশা (রাঃ) যেভাবে আয়াতটি ব্যবহার করেছেন, তা বলে অপেক্ষা করুন, নিজে আমল চালিয়ে যান। রায়টা ছেড়ে দিন অদৃশ্য ও দৃশ্যের জ্ঞাতার হাতে।"
          }
        ]
      }
    ]
  },
  "9:111-112": {
    "sections": [
      {
        "h": {
          "en": "After the Crumbling Edge",
          "bn": "ধসের কিনারার পরে"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan, and the verses standing just before these two are about a building. 9:107 describes a mosque taken up for harm, for disbelief, and for division among the believers; 9:108 forbids the Prophet ﷺ to stand in it ever; 9:109 asks which is better, a man who laid his foundation on righteousness and the seeking of Allah's approval, or a man who built on the edge of a bank about to collapse; and 9:110 says the thing they built will keep breeding doubt in their hearts. Then 9:111 opens with a purchase.",
            "bn": "সূরা তাওবা মাদীনায় নাজিল, আর এই দুই আয়াতের ঠিক আগের আয়াতগুলোতে কথা চলছে ইমারত নিয়ে। ৯:১০৭ বলছে, ক্ষতি, কুফরি আর মু'মিনদের মধ্যে বিভেদের উদ্দেশ্যেই সেই মাসজিদ গড়া হয়েছিল। ৯:১০৮ নবী ﷺ-কে নিষেধ করছে, তিনি যেন সেখানে কখনো না দাঁড়ান। ৯:১০৯ প্রশ্ন তোলে, কে ভালো, যে তাকওয়া আর আল্লাহর সন্তুষ্টির উপর ভিত গেড়েছে সে, না যে ধসে পড়ার মুখে থাকা কিনারায় ভিত গেড়েছে সে। ৯:১১০ বলে, তাদের গড়া ঘরটি তাদের অন্তরে সন্দেহ জাগিয়ে যেতেই থাকবে। এরপর ৯:১১১ শুরু হয় এক ক্রয়ের কথা দিয়ে।"
          },
          {
            "en": "At-Tabari and al-Qurtubi both carry a report from Muhammad ibn Ka'b al-Qurazi that the words came down after a pledge at al-Aqabah, where Abdullah ibn Rawahah (RA) asked the Messenger ﷺ to stipulate for his Lord and for himself whatever he wished. The terms given were that they worship Allah and associate nothing with Him, and that they protect him ﷺ as they protect their own selves and their wealth; the return was Paradise; and the Ansar answered that the sale was profitable and they would not rescind it. The chain does not reach the Prophet ﷺ, so the placement is the safer ground here.",
            "bn": "আত-তাবারী আর আল-কুরতুবী দুজনেই মুহাম্মাদ ইবনু কা'ব আল-কুরাযী থেকে একটি বর্ণনা এনেছেন, যাতে বলা হয়েছে আয়াতটি নেমেছিল আকাবার বাই'আতের পর। আবদুল্লাহ ইবনু রাওয়াহা (রাঃ) রাসূল ﷺ-কে বলেছিলেন, আপনার রবের জন্য আর নিজের জন্য যা শর্ত চান রাখুন। শর্ত দাঁড়াল, তাঁরা আল্লাহর ইবাদত করবেন, তাঁর সঙ্গে কাউকে শরিক করবেন না, আর নিজেদের জান-মাল যেভাবে বাঁচান সেভাবেই তাঁকে ﷺ বাঁচাবেন। বিনিময় জান্নাত। আনসারদের জবাব ছিল, লাভজনক সওদা, আমরা এ সওদা ফিরিয়ে দেব না। বর্ণনার সনদ নবী ﷺ পর্যন্ত পৌঁছায় না, তাই এখানে আয়াতের অবস্থানই বেশি নিরাপদ ভরসা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sale in Past Tense",
          "bn": "কেনা হয়ে গেছে, অতীত কালে"
        },
        "p": [
          {
            "en": "The verb is ishtara, the eighth form of the root sh-r-y, and it is perfect tense: has purchased, not will purchase. At-Tabari glosses it without ornament, that Allah bought from the believers their selves and their wealth for Paradise, and promised them that in His revealed Books whenever they kept their side of it. Al-Qurtubi calls the whole sentence a figure, and sets it beside 2:16, where deniers purchased error in exchange for guidance and their transaction brought no profit. The same commercial vocabulary runs both ways in the Quran; what differs is what a person carried to the counter.",
            "bn": "ক্রিয়াটি ইশতারা, শ-র-য় ধাতুর অষ্টম বাবের, আর তা অতীত কালের। কিনে নিয়েছেন, কিনবেন নয়। আত-তাবারী কোনো অলংকার ছাড়াই অর্থ করেন, আল্লাহ মু'মিনদের কাছ থেকে তাদের জান আর মাল জান্নাতের বিনিময়ে কিনে নিয়েছেন, আর নিজের নাজিলকৃত কিতাবগুলোতে সে ওয়াদা করেছেন, যদি তারা নিজেদের দিকটা রাখে। আল-কুরতুবী গোটা বাক্যটিকে বলেন উপমা, আর পাশে রাখেন ২:১৬, যেখানে অস্বীকারকারীরা হিদায়াতের বিনিময়ে গোমরাহি কিনেছে আর তাদের ব্যবসায় কোনো লাভ হয়নি। কুরআনে ব্যবসার এই শব্দভাণ্ডার দুদিকেই চলে। তফাত শুধু এই, মানুষ কী নিয়ে দাঁড়িয়েছে সওদার সামনে।"
          },
          {
            "en": "The middle of the verse shows the transaction being carried out: they fight in the cause of Allah, so they kill and are killed. Ibn Kathir reads that clause as covering every outcome, saying that whether they are killed, or kill the enemy, or both, Paradise will be theirs. Al-Qurtubi records a reading that puts the passive verb first, so that they are killed and they kill, and names an-Nakha'i, al-A'mash, Hamzah, al-Kisa'i and Khalaf for it, while the remaining readers keep the active verb first; al-Baghawi names Hamzah and al-Kisa'i for the same reading.",
            "bn": "আয়াতের মাঝখানে সওদাটা কাজে পরিণত হতে দেখা যায়, তারা আল্লাহর পথে যুদ্ধ করে, অতঃপর হত্যা করে আর নিহত হয়। ইবনু কাসীর এই অংশকে পড়েন সব পরিণতি ঢেকে নেওয়া কথা হিসেবে। তারা নিহত হোক, শত্রুকে হত্যা করুক, কিংবা দুটোই ঘটুক, জান্নাত তাদেরই। আল-কুরতুবী এমন এক কিরাআত তুলে ধরেন যেখানে কর্মবাচ্যের ক্রিয়াটি আগে আসে, অর্থাৎ তারা নিহত হয় আর হত্যা করে, আর এ পাঠের জন্য নাম নেন আন-নাখাঈ, আল-আমাশ, হামযা, আল-কিসাঈ ও খালাফের। বাকি কারীরা কর্তৃবাচ্যের ক্রিয়াই আগে রাখেন। আল-বাগাভী এই একই পাঠের জন্য হামযা ও আল-কিসাঈর নাম দেন।"
          },
          {
            "en": "The closing command turns the word over again. Rejoice in your bay', your sale, which you contracted, bayya'tum, in the third form of the root b-y-', the form of a dealing struck between parties, and the form behind the noun bay'ah, a pledge. Al-Qurtubi reads wa'dan and haqqan as verbal nouns set there for emphasis, a promise binding upon Him, truly; and he glosses istabshiru from bisharah, which is joy showing in the bashrah, the skin. Then 9:112 ends on bashshir, the same root in the second form, ordered to the Prophet ﷺ while the earlier command was to the believers together.",
            "bn": "শেষ আদেশে শব্দটি আবার ঘুরে যায়। তোমাদের সম্পন্ন করা বাই', অর্থাৎ সওদা, নিয়ে খুশি হও; আর সম্পন্ন করার ক্রিয়াটি বায়া'তুম, ব-য়-' ধাতুর তৃতীয় বাব, যে বাব দুই পক্ষের মধ্যে চুক্তি বোঝায়, আর যা থেকেই আসে বাই'আত শব্দটি। আল-কুরতুবী ওয়া'দান ও হাক্কান দুটিকে পড়েন জোর দেওয়ার জন্য বসানো মাসদার হিসেবে, তাঁর উপর অবশ্যপালনীয় সত্য ওয়াদা। আর ইসতাবশিরুর ব্যাখ্যায় তিনি বলেন, বিশারাহ মানে আনন্দ যা বাশরাহ অর্থাৎ চামড়ায় ফুটে ওঠে। এরপর ৯:১১২ শেষ হয় বাশশির দিয়ে, একই ধাতুর দ্বিতীয় বাব, যার আদেশ নবী ﷺ-কে, আগের আদেশটি ছিল সব মু'মিনকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nine Names and a Waw",
          "bn": "নয়টি নাম, একটি ওয়াও"
        },
        "p": [
          {
            "en": "9:112 gives nine descriptions, and they are carried in fourteen Arabic words before the closing command: at-ta'ibun, al-'abidun, al-hamidun, as-sa'ihun, ar-raki'un, as-sajidun, al-amirun bil-ma'ruf, an-nahun 'an al-munkar, al-hafizun li-hudud Allah. Each is a definite plural participle, a name and not a verb, so the verse is not issuing orders here; it is reading out a roll. Because the seventh and eighth stand as the settled pair of enjoining right and forbidding wrong, a reader who takes that pair as a single item counts eight.",
            "bn": "৯:১১২ নয়টি পরিচয় দেয়, আর শেষ আদেশের আগে সেগুলো ধরা আছে চৌদ্দটি আরবি শব্দে: আত-তাইবূন, আল-আবিদূন, আল-হামিদূন, আস-সাইহূন, আর-রাকিঊন, আস-সাজিদূন, আল-আমিরূন বিল-মা'রূফ, আন-নাহূন আনিল-মুনকার, আল-হাফিযূন লিহুদূদিল্লাহ। প্রতিটিই নির্দিষ্ট বহুবচন কর্তৃবাচক বিশেষ্য, নাম, ক্রিয়া নয়। তাই আয়াত এখানে হুকুম দিচ্ছে না, নাম ডাকছে। সপ্তম আর অষ্টম পরিচয় দুটি সৎকাজের আদেশ আর মন্দ থেকে নিষেধের বাঁধা জোড়া, তাই যে পাঠক ওই জোড়াকে একটি বিষয় ধরেন তিনি আটটি গোনেন।"
          },
          {
            "en": "Something happens to the conjunction partway down. The first seven names run on with no waw at all; it appears at the eighth, an-nahun, and again at the ninth. Al-Qurtubi gathers the explanations offered for that. Arabic simply does this, as in the Arabic of 40:3, where the second of the divine names carries a waw and the others do not. The forbidder of wrong is almost never named apart from the enjoiner of right, so the bound pair pulls the conjunction in. And this is the waw of the eighth, seven being a complete number among the Arabs, which al-Qurtubi calls the dialect of Quraysh.",
            "bn": "তালিকার মাঝপথে সংযোজকটি নিয়ে একটা ঘটনা ঘটে। প্রথম সাতটি নাম চলে যায় কোনো ওয়াও ছাড়াই। ওয়াও আসে অষ্টমটিতে, আন-নাহূন-এ, তারপর আবার নবমটিতে। আল-কুরতুবী এ নিয়ে দেওয়া ব্যাখ্যাগুলো একত্র করেন। এক, আরবি ভাষায় এমন হয়েই থাকে, যেমন ৪০:৩ আয়াতের আরবিতে আল্লাহর গুণগুলোর মধ্যে কেবল দ্বিতীয়টিতে ওয়াও আছে, বাকিগুলোতে নেই। দুই, মন্দ থেকে নিষেধকারীর নাম সৎকাজের আদেশকারী থেকে আলাদা করে প্রায় বলাই হয় না, তাই বাঁধা জোড়াটিই সংযোজক টেনে আনে। আর তিন, এটি অষ্টমের ওয়াও, কারণ আরবদের কাছে সাতটি সংখ্যাই পূর্ণ; আল-কুরতুবী এটিকে বলেন কুরাইশের ভাষা।"
          },
          {
            "en": "As-sa'ihun is the name that divided the commentators. At-Tabari settles on the fasting ones and fills his page with reports to that effect, from Ibn Mas'ud (RA), Ibn Abbas (RA), Mujahid, al-Hasan and ad-Dahhak, and from A'ishah (RA), whose words he gives with a chain: the siyahah of this ummah is fasting. Ibn Kathir reads it the same way, calling fasting among the best of actions because it abstains from the delights of food, drink and intercourse, and pointing to 66:5, where the same participle stands among the qualities named there. Sufyan ibn 'Uyaynah, quoted by al-Qurtubi and al-Baghawi, gives that very reason for the name.",
            "bn": "আস-সাইহূন নামটিই তাফসীরকারদের ভাগ করে দিয়েছে। আত-তাবারী রোজাদারদের কথাতেই স্থির হন, আর নিজের পাতা ভরে ফেলেন সেই মর্মের বর্ণনায়, যেগুলো এসেছে ইবনু মাসঊদ (রাঃ), ইবনু আব্বাস (রাঃ), মুজাহিদ, আল-হাসান ও আদ-দাহহাক থেকে, আর আয়িশা (রাঃ) থেকে, যাঁর কথাটি তিনি সনদসহ দেন, এই উম্মতের সিয়াহা হলো রোজা। ইবনু কাসীরও একই পাঠ নেন; তিনি বলেন রোজা সর্বোত্তম আমলগুলোর একটি, কারণ এতে খাদ্য, পানীয় আর সহবাসের স্বাদ ছেড়ে থাকা হয়। তিনি ইঙ্গিত করেন ৬৬:৫ আয়াতের দিকে, যেখানে একই শব্দটি সেখানকার গুণাবলির মধ্যেই আছে। সুফিয়ান ইবনু উয়াইনা, যাঁকে আল-কুরতুবী ও আল-বাগাভী উদ্ধৃত করেন, নামটির এই কারণই দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where As-Sa'di Parts",
          "bn": "সা'দী যেখানে আলাদা হন"
        },
        "p": [
          {
            "en": "As-Sa'di does not take the fasting reading and he says so outright. Siyahah has been interpreted as fasting, he writes, or as travelling in search of knowledge, and it has been interpreted as the journeying of the heart in knowing Allah and loving Him and turning to Him always. Then comes his own verdict, that the correct view is that what is meant by siyahah is travel in acts of nearness, such as hajj, umrah, striving, seeking knowledge, joining ties with relatives and the like.",
            "bn": "সা'দী রোজার পাঠটি নেন না, আর সেটা তিনি সোজাসুজিই বলেন। তিনি লেখেন, সিয়াহার ব্যাখ্যা করা হয়েছে রোজা হিসেবে, কিংবা ইলম অন্বেষণে সফর হিসেবে; আর ব্যাখ্যা করা হয়েছে আল্লাহকে জানা, তাঁকে ভালোবাসা আর সর্বদা তাঁর দিকে ফিরে থাকায় অন্তরের সফর হিসেবেও। এরপর আসে তাঁর নিজের রায়, সহীহ কথা হলো সিয়াহা মানে নৈকট্যের কাজে সফর, যেমন হজ, উমরা, জিহাদ, ইলম অন্বেষণ, আত্মীয়দের সঙ্গে সম্পর্ক রাখা আর এ ধরনের কাজ।"
          },
          {
            "en": "On the ninth name as-Sa'di asks more than the translation suggests. Those who observe the limits of Allah do it, he says, by learning the limits of what Allah sent down upon His Messenger ﷺ, and what falls inside the commands and the prohibitions. Observing a boundary, on that reading, begins as study rather than as restraint, because nobody keeps inside a line whose position he has never troubled to find out.",
            "bn": "নবম নামটির ব্যাপারে সা'দী অনুবাদ যা বোঝায় তার চেয়ে বেশি চান। তিনি বলেন, আল্লাহর সীমা রক্ষাকারীরা সেটা করে আল্লাহ তাঁর রাসূলের ﷺ উপর যা নামিয়েছেন তার সীমা শিখে নিয়ে, আর আদেশ-নিষেধের ভেতরে কী কী পড়ে তা জেনে নিয়ে। এ পাঠে সীমা রক্ষা করা শুরু হয় নিজেকে সামলানো দিয়ে নয়, পড়াশোনা দিয়ে; কারণ যে দাগের জায়গাটা কোথায় তা জানার কষ্টই কেউ কখনো করেনি, সে ওই দাগের ভেতরে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "He Bought What He Owns",
          "bn": "তিনি কিনলেন নিজেরই জিনিস"
        },
        "p": [
          {
            "en": "Ibn Kathir names the strangest feature of the transaction and does not soften it. This demonstrates Allah's favour, generosity and bounty, he writes, for He has accepted the good that He already owns and bestowed, as a price from His faithful servants. The seller hands the buyer back the buyer's own property, and the buyer sets the price. Al-Hasan al-Basri and Qatadah are quoted on what that does to the seller: by Allah, Allah has purchased them and raised their worth.",
            "bn": "এ লেনদেনের সবচেয়ে অন্যরকম দিকটার নাম নেন ইবনু কাসীর, আর সেটা তিনি নরম করেন না। তিনি লেখেন, এতে প্রকাশ পায় আল্লাহর অনুগ্রহ, উদারতা আর দান; কারণ যা তাঁরই মালিকানার আর তাঁরই দেওয়া, সেই ভালো জিনিসটাকেই তিনি নিজের বিশ্বস্ত বান্দাদের কাছ থেকে দাম হিসেবে কবুল করেছেন। বিক্রেতা ক্রেতার হাতে ফিরিয়ে দেয় ক্রেতার নিজেরই সম্পত্তি, আর দাম ঠিক করেন ক্রেতাই। বিক্রেতার উপর এর কী প্রভাব পড়ে, সে ব্যাপারে হাসান বসরী আর কাতাদা থেকে উদ্ধৃত হয়: আল্লাহর কসম, আল্লাহ তাদের কিনে নিয়েছেন আর তাদের দাম বাড়িয়ে দিয়েছেন।"
          },
          {
            "en": "Ibn Kathir then carries a line from Shimr ibn Atiyyah that turns the verse from a description of fighters into a statement about everybody. There is not a Muslim, he said, but has upon his neck a sale that he must conduct with Allah; he either fulfils its terms or dies without doing so, and he recited this verse after saying it. On that reading the contract is not being offered to volunteers. It is already on the neck, and the only open question is whether it gets discharged.",
            "bn": "এরপর ইবনু কাসীর আনেন শিমর ইবনু আতিয়্যার একটি কথা, যা আয়াতটিকে যোদ্ধাদের বর্ণনা থেকে বদলে দেয় সবার সম্পর্কে একটি বক্তব্যে। তিনি বলেছেন, এমন কোনো মুসলিম নেই যার গর্দানে আল্লাহর সঙ্গে সম্পন্ন করার মতো একটি সওদা নেই; সে হয় তার শর্ত পূরণ করে, নয় সেটা না করেই মরে যায়; আর কথাটা বলার পর তিনি এ আয়াতটিই তিলাওয়াত করেছিলেন। এ পাঠে চুক্তিটি স্বেচ্ছাসেবীদের কাছে প্রস্তাব করা হচ্ছে না। সেটা গর্দানে আগেই আছে, আর খোলা প্রশ্ন কেবল একটাই, সেটা শোধ হচ্ছে কি না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Undertaking in Bukhari",
          "bn": "বুখারীতে সেই জিম্মাদারি"
        },
        "p": [
          {
            "en": "The hadith the commentators attach here answers the question a buyer's promise raises, which is what happens if the seller lives. Sahih al-Bukhari 36 has from Abu Hurayrah (RA) that Allah has undertaken for whoever goes out in His path, nothing making him go out but striving in His cause and belief in His messengers, that He will admit him to Paradise if He takes his soul, or return him to the home he left with a reward or with booty. Ibn Kathir cites it as standing in the Two Sahihs.",
            "bn": "মুফাসসিরগণ এখানে যে হাদিসটি জোড়েন, সেটি জবাব দেয় ক্রেতার ওয়াদা থেকে যে প্রশ্ন ওঠে তার, অর্থাৎ বিক্রেতা বেঁচে গেলে কী হবে। সহীহ বুখারীর ৩৬ নম্বরে আবূ হুরাইরা (রাঃ) থেকে আছে, আল্লাহ জিম্মাদারি নিয়েছেন তার, যে তাঁর পথে বেরিয়েছে আর যাকে বের করেছে কেবল তাঁর পথে জিহাদ আর তাঁর রাসূলদের প্রতি বিশ্বাস; তিনি তার জান নিয়ে নিলে তাকে জান্নাতে ঢোকাবেন, নয়তো যে ঘর থেকে সে বেরিয়েছিল সেখানেই তাকে ফিরিয়ে দেবেন প্রতিদান নিয়ে বা গনীমত নিয়ে। ইবনু কাসীর এটিকে উদ্ধৃত করেন দুই সহীহতে থাকা হাদিস হিসেবে।"
          },
          {
            "en": "The narration matters for the shape of the deal rather than the size of the reward. A sale paid only at death would leave a survivor holding nothing; the hadith says he is sent home with something in hand either way. And it states the condition the verse leaves implicit, that nothing drove him out except the striving and the belief, which puts the motive inside the contract rather than alongside it.",
            "bn": "বর্ণনাটির দাম পুরস্কারের আকারের জন্য নয়, চুক্তির আকারের জন্য। কেবল মরণের সময় দাম মেলে এমন সওদায় বেঁচে যাওয়া লোকের হাতে কিছুই থাকত না; হাদিস বলে, দুই অবস্থাতেই তাকে হাতে কিছু নিয়েই ঘরে পাঠানো হয়। আর সেটি সেই শর্তটিও বলে দেয় যা আয়াত না বলেই রাখে, তাকে বের করেছে কেবল ওই জিহাদ আর ওই বিশ্বাস; আর এতে নিয়তটা চুক্তির পাশে নয়, চুক্তির ভেতরেই বসে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Books, One Promise",
          "bn": "তিন কিতাব, এক ওয়াদা"
        },
        "p": [
          {
            "en": "The verse does not leave its promise resting on one revelation. It is a promise binding upon Him, truly, in the Torah and the Gospel and the Quran. As-Sa'di reads that list as an argument rather than as decoration: these are the noblest of the Books that have come to the world, and the most complete of the messengers brought them, those of firm resolve, and all of them agreed upon this truthful promise. The point being made is corroboration.",
            "bn": "আয়াত নিজের ওয়াদাকে একটিমাত্র ওহির উপর দাঁড়িয়ে থাকতে দেয় না। এটি তাঁর উপর বর্তানো সত্য ওয়াদা, তাওরাতে, ইনজীলে আর কুরআনে। সা'দী ওই তালিকাটিকে পড়েন সাজসজ্জা হিসেবে নয়, একটি দলিল হিসেবে: এগুলোই দুনিয়ায় আসা কিতাবগুলোর মধ্যে সবচেয়ে সম্মানিত; আর এগুলো এনেছেন রাসূলদের মধ্যে সবচেয়ে পূর্ণ যাঁরা, দৃঢ় সংকল্পের অধিকারীরা; আর সবগুলোই এ সত্য ওয়াদার উপর একমত হয়েছে। যে কথাটা এখানে বলা হচ্ছে তা হলো সাক্ষ্যের মিল।"
          },
          {
            "en": "Then the question that follows it: and who is truer to his covenant than Allah. As-Sa'di reads the command after it as addressed to people already holding up their end, so rejoice, O believers who are keeping to the terms on which Allah made you His promise, in your sale that you contracted. And he draws a second purpose out of the wording, that you rejoice at it and that some of you give the good tidings to others and urge one another on. The gladness is meant to travel.",
            "bn": "এরপর আসে প্রশ্ন: আর আল্লাহর চেয়ে বেশি অঙ্গীকার রক্ষাকারী কে? সা'দী এর পরের হুকুমটিকে পড়েন তাদের উদ্দেশে বলা কথা হিসেবে, যারা ইতিমধ্যেই নিজেদের দিকটা পালন করছে: কাজেই হে মু'মিনগণ, আল্লাহ যে শর্তে তোমাদের ওয়াদা দিয়েছেন, সে শর্ত যারা পালন করছ, তোমরা যে সওদা করেছ তা নিয়ে আনন্দিত হও। আর তিনি শব্দগুলো থেকে দ্বিতীয় একটি উদ্দেশ্যও বের করেন: তোমরা যেন এতে খুশি হও, আর একে অন্যকে সুসংবাদ দাও, একে অন্যকে উৎসাহ দাও। এ আনন্দ ছড়িয়ে দেওয়ার জন্যই।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on the Same Sale",
          "bn": "একই সওদা নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "61:10-11 puts the identical transaction as a question and then answers it in terms anybody can act on: shall I guide you to a trade that will save you from a painful punishment — that you believe in Allah and His Messenger ﷺ and strive in the cause of Allah with your wealth and your lives. The same two goods are named, the same word for trade is used, and the price there is rescue rather than a garden. 48:10 gives the pledge from the other end, that those who pledge to him are pledging to Allah.",
            "bn": "৬১:১০-১১ আয়াত এই একই লেনদেনকে রাখে প্রশ্ন হিসেবে, তারপর জবাব দেয় এমন কথায় যা নিয়ে যে কেউ কাজ করতে পারে: আমি কি তোমাদের এমন এক ব্যবসার সন্ধান দেব যা তোমাদের যন্ত্রণাদায়ক শাস্তি থেকে বাঁচাবে; তা এই যে তোমরা আল্লাহ আর তাঁর রাসূলের ﷺ প্রতি ঈমান আনবে আর নিজেদের মাল আর জান দিয়ে আল্লাহর পথে জিহাদ করবে। একই দুটি পণ্যের নাম আসে, ব্যবসার একই শব্দ ব্যবহার হয়, আর ওখানে দামটা কোনো জান্নাত নয়, বাঁচানো। ৪৮:১০ আয়াত অঙ্গীকারটা দেয় অন্য প্রান্ত থেকে, যারা তাঁর কাছে বাইআত করে তারা আসলে আল্লাহর কাছেই বাইআত করে।"
          },
          {
            "en": "66:5 carries the same participle the third section weighed, listed among the qualities of women better than the ones being addressed, which is where Ibn Kathir goes for his reading of it. And 9:100 stands earlier in this same surah, promising the forerunners of the Muhajireen and the Ansar gardens beneath which rivers flow and calling that the great attainment, the very phrase 9:111 ends on. The surah pays the same wage twice, once to the first-comers and once to anyone who closes this sale.",
            "bn": "তৃতীয় অংশে যে শব্দটি নিয়ে আলোচনা হয়েছে, সেটিই আছে ৬৬:৫ আয়াতে, যাদের সম্বোধন করা হচ্ছে তাদের চেয়ে উত্তম নারীদের গুণের তালিকায়; ইবনু কাসীর এই শব্দের ব্যাখ্যায় সেখানেই যান। আর এই সূরারই আগের দিকে ৯:১০০ আয়াত মুহাজির ও আনসারদের অগ্রগামীদের এমন জান্নাতের ওয়াদা দেয়, যার নিচ দিয়ে নদী বয়ে যায়, আর একে বলে মহাসাফল্য। ৯:১১১ আয়াতও ঠিক এই কথাতেই শেষ হয়। সূরা একই মজুরি দুবার দেয়: একবার প্রথম দিকের লোকদের, আর একবার যে-ই এ সওদা সম্পন্ন করে তাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Paying in Instalments",
          "bn": "কিস্তিতে দাম শোধ"
        },
        "p": [
          {
            "en": "The practical force of the pair is in the order the two verses come in. A reader who meets 9:111 alone is left with a transaction he may feel he has no way of entering, since the middle of the verse is about killing and being killed. Then 9:112 names the sellers, and not one of the nine names is a battlefield. Repenting, worshipping, praising, journeying for a good purpose, bowing, prostrating, calling to good, warning against wrong, and keeping inside what Allah drew.",
            "bn": "এ জোড়াটির কাজের জোর দুটি আয়াত যে ক্রমে আসে তার ভেতরেই। যে পাঠক ৯:১১১ আয়াতকে একা পান, তাঁর হাতে থাকে এমন এক লেনদেন যেখানে ঢোকার পথ তিনি নিজের জন্য দেখতে না-ও পারেন, কারণ আয়াতের মাঝখানটা হত্যা করা আর নিহত হওয়া নিয়ে। এরপর ৯:১১২ আয়াত বিক্রেতাদের নাম বলে দেয়, আর নয়টি নামের একটিও যুদ্ধের মাঠ নয়। তওবা করা, ইবাদত করা, প্রশংসা করা, ভালো উদ্দেশ্যে সফর করা, রুকু করা, সিজদা করা, ভালোর দিকে ডাকা, মন্দ থেকে সাবধান করা, আর আল্লাহ যে দাগ টেনেছেন তার ভেতরে থাকা।"
          },
          {
            "en": "Shimr ibn Atiyyah's line is the one to carry away, because it removes the option of treating this as somebody else's contract. The sale is already on the neck; what the second verse supplies is the schedule of payments. And as-Sa'di's gloss of the first name keeps the schedule open at every point, since the repentant are those who cling to repentance at all times and from all evil deeds, which is a description of a person who keeps returning rather than one who never left.",
            "bn": "সঙ্গে নেওয়ার মতো কথাটি শিমর ইবনু আতিয়্যারই, কারণ সেটি এ চুক্তিকে অন্য কারও চুক্তি ভেবে সরিয়ে রাখার সুযোগটা কেড়ে নেয়। সওদা গর্দানে আগেই আছে; দ্বিতীয় আয়াত যা দেয় তা হলো কিস্তির তালিকা। আর প্রথম নামটির উপর সা'দীর ব্যাখ্যা সেই তালিকাটা প্রতিটি জায়গায় খোলা রেখে দেয়, কারণ তওবাকারীরা তারাই যারা সব সময়েই আর সব গুনাহ থেকেই তওবা আঁকড়ে থাকে; আর এ বর্ণনা এমন লোকের, যে বারবার ফিরে আসে, এমন লোকের নয় যে কখনো সরেই যায়নি।"
          }
        ]
      }
    ]
  },
  "9:119": {
    "sections": [
      {
        "h": {
          "en": "One Line After the Storm",
          "bn": "ঝড়ের পরের এক পঙক্তি"
        },
        "p": [
          {
            "en": "The later sections of Surah at-Tawbah revolve around the campaign to Tabuk: the muster in severe heat, those who stayed behind, and the excuses offered afterwards. In 9:117 Allah declares that He has turned in mercy to the Prophet ﷺ and to the Muhajirun and Ansar who followed him in the hour of hardship. In 9:118 He turns to three men who were left behind, until the earth, vast as it is, closed in on them.",
            "bn": "সূরা আত-তাওবাহর শেষ দিকের অংশগুলো ঘুরেছে তাবুক অভিযানকে ঘিরে: প্রচণ্ড গরমে সেনা জমায়েত, যারা পেছনে থেকে গেল তারা, আর পরে দেখানো নানা অজুহাত। ৯:১১৭ আয়াতে আল্লাহ ঘোষণা করেন, তিনি রহমতের সঙ্গে ফিরেছেন নবী ﷺ-এর দিকে, আর সেই মুহাজির ও আনসারদের দিকে, যারা কঠিন সময়ে তাঁর অনুসরণ করেছিলেন। ৯:১১৮ আয়াতে তিনি ফেরেন সেই তিনজনের দিকে, যারা পেছনে পড়ে ছিলেন। অবস্থা এমন হয়েছিল যে এত বিশাল পৃথিবীও তাদের জন্য সংকীর্ণ হয়ে গিয়েছিল।"
          },
          {
            "en": "Then comes 9:119, a single line addressed to all who believe: fear Allah and be with the truthful. Placed there, it reads as the distilled lesson of the whole episode. The surah has just shown what became of those who lied their way out of hardship, and what became of those who told the truth into it. The command is the story's moral, issued as law.",
            "bn": "তারপর আসে ৯:১১৯, সব মুমিনের উদ্দেশে একটিমাত্র বাক্য: আল্লাহকে ভয় করো এবং সত্যবাদীদের সঙ্গে থাকো। ওই জায়গায় বসে আয়াতটি গোটা ঘটনার সারকথার মতো শোনায়। সূরাটি সবে দেখিয়েছে, মিথ্যা বলে যারা কষ্ট এড়িয়ে গেল তাদের কী হলো, আর সত্য বলে যারা কষ্ট মাথা পেতে নিল তাদের কী হলো। হুকুমটি এই কাহিনিরই শিক্ষা, যা বিধান হয়ে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man Behind the Verse",
          "bn": "আয়াতের পেছনের মানুষ"
        },
        "p": [
          {
            "en": "Ka'b ibn Malik (RA) told his own story, and it is narrated in both Bukhari and Muslim. He had missed the expedition with no excuse — never before, he said, had he been stronger or wealthier — and he simply delayed until the army was gone. When the Prophet ﷺ returned, eighty-odd men came with false excuses and were accepted outwardly. Ka'b knew he could talk his way out, and chose instead to say plainly that he had no excuse.",
            "bn": "কা'ব ইবনে মালিক (রাঃ) নিজের ঘটনা নিজেই বলেছেন, আর তা বুখারী ও মুসলিম দুই গ্রন্থেই বর্ণিত। কোনো ওজর ছাড়াই তিনি অভিযানে যাননি। তাঁর নিজের কথা, এর আগে কখনো তিনি এত সবল ও এত সচ্ছল ছিলেন না; শুধু আজ-কাল করতে করতেই সেনাদল চলে গেল। নবী ﷺ ফিরে এলে আশির কিছু বেশি লোক মিথ্যা অজুহাত নিয়ে হাজির হলো, আর বাহ্যিকভাবে তাদের অজুহাত মেনে নেওয়া হলো। কা'ব জানতেন, কথা সাজিয়ে তিনিও পার পেয়ে যেতে পারেন। তা না করে তিনি সোজাসুজি বললেন, তাঁর কোনো ওজর নেই।"
          },
          {
            "en": "The Prophet ﷺ said: as for this man, he has spoken the truth. Then came the hard part: the Muslims were instructed not to speak to Ka'b and his two companions. The boycott lasted fifty nights, and after forty of them he was ordered to keep away from his wife as well. In the middle of it a letter arrived from the king of Ghassan, inviting him to defect to comfort — he burned it, calling it part of the trial.",
            "bn": "নবী ﷺ বললেন: এই লোকটি সত্য বলেছে। তারপর এলো কঠিন সময়। মুসলিমদের বলে দেওয়া হলো, কা'ব ও তাঁর দুই সঙ্গীর সঙ্গে কেউ কথা বলবে না। এই বয়কট চলল পঞ্চাশ রাত। চল্লিশ রাত পার হওয়ার পর তাঁকে স্ত্রীর কাছ থেকেও দূরে থাকার হুকুম দেওয়া হলো। এরই মাঝে গাসসানের রাজার কাছ থেকে চিঠি এলো, দল ছেড়ে তার কাছে আরামে থাকার দাওয়াত। কা'ব চিঠিটা পুড়িয়ে ফেললেন, আর বললেন, এটাও পরীক্ষারই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Truth Rewarded from Above",
          "bn": "আসমান থেকে সত্যের প্রতিদান"
        },
        "p": [
          {
            "en": "Relief came as revelation: 9:118 announced that Allah had turned to the three, and people rushed to congratulate them. Ka'b (RA) came to the Prophet ﷺ, whose face was bright with joy, and offered to give away his wealth in charity out of gratitude — he was told to keep some of it. And he made a vow recorded in the same narration: that he would speak nothing but truth for the rest of his life.",
            "bn": "মুক্তি এলো ওহি হয়ে। ৯:১১৮ আয়াত ঘোষণা করল, আল্লাহ ওই তিনজনের দিকে ফিরেছেন, আর লোকজন ছুটে এলো তাঁদের মোবারকবাদ জানাতে। কা'ব (রাঃ) নবী ﷺ-এর কাছে এলেন; আনন্দে নবীজির চেহারা তখন ঝলমল করছিল। কৃতজ্ঞতায় কা'ব নিজের সম্পদ সদকা করে দিতে চাইলেন; তাঁকে বলা হলো কিছুটা নিজের কাছে রাখতে। আর একই বর্ণনায় আছে তাঁর একটি প্রতিজ্ঞা: বাকি জীবন তিনি সত্য ছাড়া কিছু বলবেন না।"
          },
          {
            "en": "Ka'b himself drew the connection that the verse then fixed as law: Allah saved him by truthfulness, while the men who swore false oaths were left to their fate. When 9:119 commands believers to be with the truthful, its first hearers knew which faces it pointed to — three men whose honesty had cost them fifty nights of isolation and then bought them a place in the Quran forever.",
            "bn": "কা'ব নিজেই যোগসূত্রটা টেনেছিলেন, আর আয়াত পরে সেটাকেই বিধান করে দিল: আল্লাহ তাঁকে বাঁচিয়েছেন সত্যের কারণে, আর যারা মিথ্যা কসম খেয়েছিল, তাদের ছেড়ে দেওয়া হয়েছে তাদের পরিণতির হাতে। ৯:১১৯ আয়াত যখন মুমিনদের সত্যবাদীদের সঙ্গে থাকতে বলে, প্রথম শ্রোতারা জানতেন কাদের দিকে ইশারা। সেই তিনজন, সততার জন্য যাঁদের পঞ্চাশ রাত একঘরে থাকতে হয়েছিল, আর সেই সততাই তাঁদের জন্য কুরআনে চিরকালের জায়গা কিনে দিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Be With, Not Only Be",
          "bn": "শুধু হওয়া নয়, সঙ্গে থাকা"
        },
        "p": [
          {
            "en": "The wording repays attention: kunu ma'a as-sadiqin — be with the truthful, not merely be truthful. Sidq in Arabic is wider than accurate speech; the mufassirun describe truthfulness of intention, of promise and of action, an alignment between inside and outside. And the command is framed as company because character travels between people. The verse legislates our surroundings: taqwa in its first half, and in its second the human environment that keeps taqwa alive.",
            "bn": "শব্দগুলো খেয়াল করার মতো: কূনূ মা'আস-সাদিকীন, সত্যবাদীদের সঙ্গে থাকো; শুধু সত্যবাদী হও বলা হয়নি। আরবিতে সিদক মানে শুধু নির্ভুল কথা নয়, এর পরিধি আরও বড়। মুফাসসিরগণ নিয়তের সত্যতা, ওয়াদার সত্যতা আর কাজের সত্যতার কথা বলেন, অর্থাৎ ভেতর আর বাইরের মিল। আর হুকুমটা এসেছে সঙ্গের ভাষায়, কারণ চরিত্র এক মানুষ থেকে আরেক মানুষে ছড়ায়। আয়াতটি আমাদের চারপাশের জন্যও বিধান দেয়: প্রথম অংশে তাকওয়া, আর দ্বিতীয় অংশে সেই সঙ্গ, যা তাকওয়াকে বাঁচিয়ে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Truthfulness Leads",
          "bn": "সত্য কোথায় নিয়ে যায়"
        },
        "p": [
          {
            "en": "A hadith found in both Bukhari and Muslim, from Ibn Mas'ud (RA), maps the road: truthfulness guides to righteousness, and righteousness guides to Paradise, and a man keeps speaking truth until he is written before Allah as a siddiq. Lying guides to wickedness, and wickedness to the Fire, and a man keeps lying until he is written as a liar. Habits of speech, repeated, become a recorded identity — which is what happened, in opposite directions, at Tabuk.",
            "bn": "বুখারী ও মুসলিম দুই গ্রন্থেই ইবনে মাসউদ (রাঃ) থেকে বর্ণিত একটি হাদিস পথটা এঁকে দেয়: সত্য নেকির পথ দেখায়, আর নেকি জান্নাতের পথ দেখায়; মানুষ সত্য বলতে বলতে একসময় আল্লাহর কাছে সিদ্দীক বলে লেখা হয়ে যায়। মিথ্যা পাপাচারের পথ দেখায়, আর পাপাচার জাহান্নামের; মানুষ মিথ্যা বলতে বলতে একসময় মিথ্যুক বলে লেখা হয়ে যায়। কথার অভ্যাস বারবার ঘটতে ঘটতে লিখিত পরিচয় হয়ে দাঁড়ায়। তাবুকে ঠিক এটাই ঘটেছিল, দুই উল্টো দিকে।"
          },
          {
            "en": "Elsewhere the Quran keeps the same pairing. In 33:35 the truthful men and truthful women stand in the list of those for whom forgiveness and a great reward are prepared, and the description of true piety in 2:177 ends by naming those who are truthful and those who have taqwa side by side — the same two qualities 9:119 binds together.",
            "bn": "কুরআন অন্য জায়গাতেও এই জোড়া ধরে রাখে। ৩৩:৩৫ আয়াতে সত্যবাদী পুরুষ ও সত্যবাদী নারীরা আছেন তাদের তালিকায়, যাদের জন্য মাগফিরাত আর মহাপুরস্কার তৈরি রাখা হয়েছে। আর ২:১৭৭ আয়াতে প্রকৃত নেকির বর্ণনা শেষ হয় সত্যবাদী আর মুত্তাকীদের পাশাপাশি উল্লেখ করে। এই দুটো গুণকেই ৯:১১৯ আয়াত একসঙ্গে বেঁধেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing Your Room",
          "bn": "নিজের ঘর বেছে নেওয়া"
        },
        "p": [
          {
            "en": "The verse gives a practical instrument: audit the company. Not a purge of every imperfect friend, but an honest look at which rooms make truth easier and which make it embarrassing. A circle where exaggeration is the price of belonging will collect that fee from your religion. The believer is told to place himself where sidq is normal, so that on the day honesty becomes expensive, he is not paying alone.",
            "bn": "আয়াতটি হাতে একটা কাজের উপায় দেয়: নিজের সঙ্গীদের হিসাব নিন। প্রতিটি অপূর্ণ বন্ধুকে ছেঁটে ফেলা নয়; বরং খোলা চোখে দেখা, কোন ঘরে সত্য বলা সহজ, আর কোন ঘরে সত্য বললে লজ্জায় পড়তে হয়। যে আড্ডায় জায়গা পেতে হলে বাড়িয়ে বলতে হয়, সেই আড্ডা এই মাশুলটা আদায় করবে আপনার দ্বীন থেকে। মুমিনকে বলা হয়েছে নিজেকে এমন জায়গায় রাখতে, যেখানে সিদকই স্বাভাবিক। তাহলে যেদিন সত্যের দাম চড়া হবে, সেদিন তাকে একা সেই দাম দিতে হবে না।"
          },
          {
            "en": "Ka'b's (RA) story also warns against a subtler escape: he could have joined the liars and been accepted outwardly, as they were. The verse closes that route by making truthfulness communal. Tell the costly truth, and then stand near people who do the same — because fifty nights of consequence are survivable in the company of the truthful, while acceptance won by a lie was the fate the surah spends its length lamenting.",
            "bn": "কা'ব (রাঃ)-এর ঘটনা আরও সূক্ষ্ম এক পালানোর পথ সম্পর্কেও সাবধান করে। তিনি মিথ্যাবাদীদের দলে ভিড়ে যেতে পারতেন, আর তাদের মতো তাঁকেও বাহ্যিকভাবে মেনে নেওয়া হতো। আয়াতটি সত্যকে সবার মিলিত দায়িত্ব বানিয়ে সেই পথ বন্ধ করে দেয়। দামি সত্যটা বলুন, তারপর এমন মানুষদের পাশে দাঁড়ান যারা একই কাজ করে। কারণ সত্যবাদীদের সঙ্গে থাকলে পঞ্চাশ রাতের কষ্টও পার করা যায়। আর মিথ্যা বলে পাওয়া স্বীকৃতিই সেই পরিণতি, যার জন্য সূরাটি এত দীর্ঘ জুড়ে আক্ষেপ করে গেছে।"
          }
        ]
      }
    ]
  },
  "9:124": {
    "sections": [
      {
        "h": {
          "en": "After the Command to Fight",
          "bn": "যুদ্ধের হুকুমের পরে"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan, and this verse belongs to the surah's closing stretch. 9:122 has just said that the believers should not all march out together, so that a group from every division can stay behind to gain understanding in the religion and warn their people on returning. 9:123 then orders them to fight the disbelievers nearest to them and to let those find harshness in them. Our verse drops marching altogether and moves to a quieter scene: a surah is coming down, and two kinds of listener stand in the same place.",
            "bn": "সূরা তাওবা মাদীনায় নামা সূরা, আর এই আয়াত সূরার শেষ অংশের। ৯:১২২ আয়াতে সদ্য বলা হয়েছে, মু'মিনদের সবার একসঙ্গে যুদ্ধে বেরিয়ে পড়া ঠিক নয়। প্রত্যেক দল থেকে কিছু লোক থেকে যাবে দ্বীনের জ্ঞান অর্জনের জন্য, আর ফিরে গিয়ে নিজের লোকদের সতর্ক করার জন্য। ৯:১২৩ আয়াতে এরপর হুকুম আসে, নিকটবর্তী কাফিরদের বিরুদ্ধে লড়, আর তারা যেন তোমাদের মধ্যে দৃঢ়তা দেখতে পায়। আমাদের আয়াত অভিযানের কথা একেবারে ছেড়ে দিয়ে অনেক শান্ত একটা দৃশ্যে চলে আসে। সূরা নামছে, আর একই জায়গায় দাঁড়িয়ে আছে দুই ধরনের শ্রোতা।"
          },
          {
            "en": "9:125 completes the sentence our verse begins, and 9:126 asks whether they do not see that they are tried each year and still neither repent nor take heed, while 9:127 shows them glancing at each other whenever a surah is revealed and then slipping away. No established occasion of revelation is reported for this verse in the commentaries consulted, so its placement is what there is to read it by. And the verse describes the people it describes; it licenses no verdict about any living person or community.",
            "bn": "আমাদের আয়াত যে বাক্য শুরু করে, ৯:১২৫ আয়াত সেটি শেষ করে। ৯:১২৬ আয়াত জিজ্ঞেস করে, তারা কি দেখে না যে প্রতি বছর তাদের পরীক্ষায় ফেলা হয়, তবু তারা তওবাও করে না, শিক্ষাও নেয় না। ৯:১২৭ আয়াতে দেখা যায়, সূরা নামলেই তারা একে অন্যের দিকে চোখ চাওয়াচাওয়ি করে, তারপর চুপচাপ সরে পড়ে। যে তাফসীরগুলো দেখা হয়েছে, তাতে এই আয়াতের কোনো প্রতিষ্ঠিত নাজিলের ঘটনা নেই। তাই সূরার ভেতরে এর অবস্থানটাই পড়ার সূত্র। আর আয়াতটি যাদের কথা বলছে তাদেরই কথা বলছে; জীবিত কোনো মানুষ বা কোনো সমাজের উপর রায় দেওয়ার অনুমতি এতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Eighteen Words, One Verb",
          "bn": "আঠারো শব্দ, একটি ক্রিয়া"
        },
        "p": [
          {
            "en": "Eighteen words, as the mushaf writes them. The verse opens with idha ma, and al-Qurtubi notes that the ma here is sila, a particle that adds no meaning of its own, so the sense is simply whenever. Surah is left indefinite: not a named surah but any surah, on every occasion of its coming down. Then fa-minhum man yaqulu, and among them is he who says, which names nobody. It leaves the speaker inside a group the surah has been describing for many verses already.",
            "bn": "মুসহাফে যেভাবে লেখা, তাতে আয়াতটি ১৮টি শব্দের। শুরু হয় ইযা মা দিয়ে। কুরতুবী বলছেন, এখানকার মা হল সিলা, নিজের আলাদা কোনো অর্থ যোগ করে না, তাই কথাটার মানে দাঁড়ায় শুধু যখনই। সূরা শব্দটি অনির্দিষ্ট রাখা হয়েছে, নাম ধরে কোনো সূরা নয়, যে কোনো সূরা, যতবার নামে ততবার। এরপর ফা-মিনহুম মান ইয়াকূল, তাদের মধ্যে এমনও আছে যে বলে। কারো নাম এখানে আসে না। বক্তাকে রেখে দেওয়া হয় সেই দলটির ভেতরেই, যাদের কথা সূরা বহু আয়াত ধরে বলে আসছে।"
          },
          {
            "en": "The verb is the same in both halves. Zadat-hu, it increased him, in the mocking question; fa-zadat-hum imanan, so it increased them in faith, in the answer. The subject in both is the surah itself, feminine in Arabic, so the grammar holds the actor steady and changes only who receives the action. Ayyukum, which of you, is an interrogative built to be answered with nobody. And imanan is left indefinite as well, an increase in faith with no quantity attached, which leaves room for every size of increase.",
            "bn": "দুই অংশেই ক্রিয়াটা এক। ঠাট্টার প্রশ্নে যাদাতহু, তা তার ঈমান বাড়াল। জবাবে ফাযাদাতহুম ঈমানা, তা তাদের ঈমান বাড়িয়ে দিল। দুই জায়গাতেই কর্তা সেই সূরাটিই, আরবিতে স্ত্রীবাচক। ফলে ব্যাকরণ কর্তাকে অটুট রাখে, বদলায় শুধু কে তা পাচ্ছে। আইয়ুকুম, তোমাদের কে, এমন প্রশ্ন যার আশা করা জবাব হল কেউ না। আর ঈমানা শব্দটিও অনির্দিষ্ট, বৃদ্ধির কোনো পরিমাণ বেঁধে দেওয়া নেই। তাই ছোট বড় সব মাপের বৃদ্ধির জায়গা এতে থাকে।"
          },
          {
            "en": "Fa-amma opens a construction of detailing that cannot stand alone, and 9:125 completes it with wa-amma: but as for those in whose hearts is disease. So the sneering question receives a two-part answer, and only the first part sits in our verse. The closing word is yastabshirun, an istif'al form of the root b-sh-r, the root of bushra, glad tidings. As-Sa'di reads it as the believers carrying the good news to each other; at-Tabari and al-Baghawi render it as plain rejoicing. Either way the gladness is audible.",
            "bn": "ফা-আম্মা এমন এক তাফসীলি গঠন খোলে যা একা দাঁড়াতে পারে না, আর ৯:১২৫ আয়াত ওয়া-আম্মা দিয়ে সেটি পূরণ করে, আর যাদের অন্তরে ব্যাধি আছে। মানে ঠাট্টার প্রশ্নটি দুই ভাগে জবাব পায়, আর তার প্রথম ভাগটাই আমাদের আয়াতে। শেষ শব্দ ইয়াসতাবশিরূন, বা-শীন-রা মূলের ইসতিফআল রূপ, যে মূল থেকে বুশরা, সুসংবাদ। সা'দী এটি পড়েন মু'মিনরা একে অন্যকে সুসংবাদ পৌঁছে দিচ্ছেন বলে। তাবারী ও বাগাভী এর অর্থ দেন সরল আনন্দ। যেভাবেই ধরুন, খুশিটা মুখে প্রকাশ পাওয়া খুশি।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Question Was For",
          "bn": "প্রশ্নটা কার উদ্দেশে"
        },
        "p": [
          {
            "en": "At-Tabari fills in the scene like this. The speaker is one of the hypocrites whom this surah has been naming, and he addresses the people at large: O people, which of you has this surah increased in faith? At-Tabari then reads the answer as concerning those who believed from among the ones who were asked, which makes the believers the audience of the taunt. Ibn Kathir fills the same gap differently: they say it to each other, hypocrite to hypocrite, and the believers are not addressed at all.",
            "bn": "তাবারী দৃশ্যটা এভাবে ভরে দেন। বক্তা এই সূরা যাদের কথা বলে আসছে সেই মুনাফিকদের একজন, আর সে কথা বলছে সাধারণ লোকদের উদ্দেশে, ওহে লোকসকল, এই সূরা তোমাদের কার ঈমান বাড়াল? তারপর তাবারী জবাবটা পড়েন এভাবে, যাদের এই প্রশ্ন করা হয়েছিল তাদের মধ্যে যারা ঈমান এনেছে তাদের কথাই বলা হচ্ছে। অর্থাৎ খোঁচাটা এসে পড়েছিল মু'মিনদের গায়ে। ইবনু কাসীর একই ফাঁকটা অন্যভাবে ভরেন, তারা কথাটা বলে একে অন্যকে, মুনাফিক থেকে মুনাফিককে, মু'মিনদের কিছু বলাই হচ্ছে না।"
          },
          {
            "en": "Neither reading softens the tone. Al-Baghawi says plainly that the hypocrites used to say this in istihza', mockery, and al-Muyassar glosses the question as spoken in inkar and istihza', denial and derision. So the disagreement is only about where the sneer was aimed, and it should stay a disagreement: at-Tabari has it thrown at the believers, Ibn Kathir has it passed between the mockers. Both readings agree that the question really was asked, and that Allah answered it Himself rather than leaving the believers to defend their own state.",
            "bn": "কোনো পড়াই সুরটা নরম করে না। বাগাভী সোজা বলছেন, মুনাফিকরা কথাটা বলত ইসতিহযা করে, ঠাট্টা করে। মুয়াসসারও প্রশ্নটার অর্থ দেন ইনকার ও ইসতিহযার সঙ্গে বলা কথা, অস্বীকার আর বিদ্রূপ। তাহলে মতভেদটা শুধু এইখানে, খোঁচাটা কার দিকে ছোঁড়া হয়েছিল। আর সেটাকে মতভেদ হিসেবেই রেখে দেওয়া উচিত। তাবারীর কাছে তা মু'মিনদের দিকে, ইবনু কাসীরের কাছে তা ঠাট্টাকারীদের নিজেদের মধ্যে চালাচালি। দুই পড়াই একটা জায়গায় মিলে যায়, প্রশ্নটা সত্যিই করা হয়েছিল, আর মু'মিনদের নিজেদের অবস্থার পক্ষে সাফাই গাইতে না দিয়ে আল্লাহ নিজেই তার জবাব দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Faith That Rises and Falls",
          "bn": "ঈমান বাড়ে ও কমে"
        },
        "p": [
          {
            "en": "At-Tabari raises an objection against himself. If iman in the speech of the Arabs means affirmation and acknowledgement, how can a surah increase a man's affirmation? His answer is legal rather than emotional. Before the surah came down they were not bound to acknowledge that particular surah or act on it, only by the general faith that whatever the Prophet ﷺ brought from Allah is true. Once it came down, acknowledging this surah by name became obligatory, and so did acting on the rulings and limits inside it. That new obligation, accepted, is the increase.",
            "bn": "তাবারী নিজের বিরুদ্ধেই একটা আপত্তি তোলেন। আরবদের ভাষায় ঈমান মানে যদি সত্য মানা আর স্বীকার করা হয়, তবে একটা সূরা কী করে কারো স্বীকৃতি বাড়ায়? তাঁর জবাব অনুভূতির নয়, হুকুমের। সূরাটি নামার আগে ওই নির্দিষ্ট সূরাকে স্বীকার করা বা তার উপর আমল করা তাদের উপর ফরজ ছিল না। ফরজ ছিল কেবল এই সাধারণ ঈমান, নবী ﷺ আল্লাহর কাছ থেকে যা এনেছেন সবই সত্য। সূরাটি নামার পর এই সূরাকে নাম ধরে স্বীকার করা ফরজ হয়ে গেল, আর ফরজ হল তার ভেতরের হুকুম ও সীমারেখা মেনে চলা। সেই নতুন ফরজটি মেনে নেওয়াই হল বৃদ্ধি।"
          },
          {
            "en": "Ibn Kathir treats the verse as doctrine. It is among the mightiest proofs that faith increases and decreases, which he calls the position of most of the salaf and of the later scholars, and he adds that consensus on it has been reported. He says he set it out at length at the start of his commentary on Sahih al-Bukhari. Al-Qurtubi does not rehearse the argument here, telling his reader he has already given it in Surah Al-Imran, and he brings instead the words of others who had settled it.",
            "bn": "ইবনু কাসীর আয়াতটিকে আকীদার দলিল হিসেবে নেন। ঈমান বাড়ে আর কমে, এই কথার সবচেয়ে বড় দলিলগুলোর একটি এই আয়াত। তিনি বলছেন, এটাই অধিকাংশ সালাফ আর পরের যুগের আলিমদের মত, আর এ নিয়ে ইজমা বর্ণিত হয়েছে বলেও তিনি জানান। সহীহ বুখারীর ব্যাখ্যার শুরুতে তিনি বিষয়টি বিস্তারিত আলোচনা করেছেন বলে উল্লেখ করেন। কুরতুবী এখানে যুক্তিটা আর নতুন করে সাজান না, পাঠককে বলেন সূরা আলে ইমরানে তিনি তা আগেই দিয়েছেন। বদলে তিনি আনেন তাঁদের কথা, যাঁরা প্রশ্নটা আগেই মিটিয়ে রেখেছিলেন।"
          },
          {
            "en": "The first is al-Hasan, who wrote to Umar ibn Abd al-Aziz that faith has sunan and obligations, and whoever completes them has completed his faith while whoever does not has not; al-Qurtubi adds that al-Bukhari mentioned this. Umar's reply stands in the same passage: if I live I will explain them to you, and if I die I am not eager for your company. The second is Ibn al-Mubarak, who said he found no way open but to hold that faith increases, or else he would be rejecting the Qur'an.",
            "bn": "প্রথমজন হাসান, যিনি উমার ইবনু আবদুল আযীযকে লিখেছিলেন, ঈমানের সুনান আছে, ফরজ আছে; যে সেগুলো পূর্ণ করল তার ঈমান পূর্ণ হল, আর যে পূর্ণ করল না তার ঈমান পূর্ণ হল না। কুরতুবী যোগ করেন, বুখারী কথাটা উল্লেখ করেছেন। একই জায়গায় উমারের জবাবও আছে, বেঁচে থাকলে আমি তোমাদের কাছে সেগুলো খুলে বলব, আর মরে গেলে তোমাদের সঙ্গ পাওয়ার লোভ আমার নেই। দ্বিতীয়জন ইবনুল মুবারক, তিনি বলেছিলেন, ঈমান বাড়ে এই কথা ধরা ছাড়া তাঁর সামনে আর কোনো পথ খোলা ছিল না, নইলে তাঁকে কুরআনকেই অস্বীকার করতে হত।"
          }
        ]
      },
      {
        "h": {
          "en": "No Narration Sits Here",
          "bn": "এখানে কোনো হাদিস নেই"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a prophetic narration to it. At-Tabari, al-Qurtubi, as-Sa'di, Ibn Kathir, al-Baghawi, Ma'arif al-Qur'an and al-Muyassar all comment on it without bringing a hadith of the Prophet ﷺ, and that is better said plainly than covered with a weak report. What the tafsir carries here is the speech of the generations who read it. At-Tabari transmits Ibn Abbas (RA): when a surah came down they believed in it, so Allah increased them in faith and affirmation, and they used to rejoice.",
            "bn": "এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এখানে নবী ﷺ এর কোনো হাদিস জুড়ে দেয়নি। তাবারী, কুরতুবী, সা'দী, ইবনু কাসীর, বাগাভী, মাআরিফুল কুরআন এবং মুয়াসসার সবাই আয়াতটির ব্যাখ্যা দিয়েছেন কোনো মারফূ হাদিস না এনে। দুর্বল কোনো বর্ণনা দিয়ে জায়গাটা ভরে দেওয়ার চেয়ে কথাটা সোজা বলে দেওয়াই ভালো। তাফসীর এখানে যা বহন করে তা হল আয়াতটি যাঁরা পড়েছেন সেই প্রজন্মগুলোর কথা। তাবারী ইবনু আব্বাস (রাঃ) থেকে আনেন, সূরা নামলে তাঁরা তার উপর ঈমান আনতেন, তাতে আল্লাহ তাঁদের ঈমান ও সত্য মানা বাড়িয়ে দিতেন, আর তাঁরা খুশিতে ভরে উঠতেন।"
          },
          {
            "en": "At-Tabari also records ar-Rabi' glossing so it increased them in faith with a single word: khashyah, awe. Ma'arif al-Qur'an relays from al-Mazhari a saying of Ali (RA) that faith enters the heart as a point of light, and as it grows the light spreads until the whole heart is lit, while disbelief and hypocrisy begin as a black spot that widens with every sin. That is a picture of how faith moves, offered here as exactly that, not as a narration this verse carries.",
            "bn": "তাবারী রাবী'র মন্তব্যও রাখেন। তা তাদের ঈমান বাড়িয়ে দিল, এর ব্যাখ্যায় তিনি বলেছেন মাত্র একটি শব্দ, খাশইয়াত, ভয়মিশ্রিত সম্ভ্রম। মাআরিফুল কুরআন মাযহারী থেকে আলী (রাঃ)-এর কথা তুলে আনে, ঈমান দিলে ঢোকে আলোর বিন্দু হয়ে, আর যত বাড়ে আলো তত ছড়ায়, শেষে গোটা দিল আলোয় ভরে যায়; আর কুফুরি আর মুনাফিকি শুরু হয় কালো একটা দাগ হয়ে, প্রতিটি গুনাহে সেই দাগ বড় হতে থাকে। এটি ঈমানের চলাফেরার একটা ছবি, এখানে ঠিক সেভাবেই আনা হল, এই আয়াতের নিজের বহন করা বর্ণনা হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Where Faith Grew",
          "bn": "যেখানে ঈমান বেড়েছিল"
        },
        "p": [
          {
            "en": "8:2 makes the second half of our verse part of the definition of a believer: when Allah's verses are recited to them, it increases them in faith, and upon their Lord they rely. 48:4 shows the same growth from the giving side, saying that He sent down tranquility into the hearts of the believers so that they would increase in faith along with their faith. Between the two, the recitation is the occasion and Allah is the giver of whatever gets added.",
            "bn": "৮:২ আয়াত আমাদের আয়াতের দ্বিতীয় ভাগটিকে মু'মিনের পরিচয়ের অংশ বানিয়ে দেয়, তাদের কাছে আল্লাহর আয়াত পড়া হলে তা তাদের ঈমান বাড়ায়, আর তারা তাদের রবের উপরই ভরসা করে। ৪৮:৪ আয়াত একই বৃদ্ধিকে দেখায় দেওয়ার দিক থেকে, তিনিই মু'মিনদের দিলে প্রশান্তি নামিয়ে দেন যাতে তারা নিজেদের ঈমানের সঙ্গে আরও ঈমান বাড়িয়ে নেয়। দুই আয়াত মিলিয়ে দাঁড়ায়, তিলাওয়াত হল উপলক্ষ, আর যা যোগ হয় তার দাতা আল্লাহ।"
          },
          {
            "en": "Ibn Kathir brings 17:82 to the verse immediately after ours: We send down of the Qur'an what is healing and mercy for the believers, but it increases the wrongdoers only in loss. 2:10 turns the same verb the other way near the opening of the Qur'an, where there is disease in their hearts and Allah has increased their disease. So zada by itself promises no direction. It records what a heart did with what came down.",
            "bn": "আমাদের আয়াতের ঠিক পরের আয়াতটির সঙ্গে ইবনু কাসীর মিলিয়ে দেন ১৭:৮২, আমি কুরআন থেকে তা নামাই যা মু'মিনদের জন্য আরোগ্য ও রহমত, কিন্তু জালিমদের তা ক্ষতিই বাড়ায়। ২:১০ আয়াতে কুরআনের শুরুর দিকেই একই ক্রিয়া উল্টোমুখে ঘোরে, তাদের অন্তরে ব্যাধি, আর আল্লাহ তাদের ব্যাধি বাড়িয়ে দিয়েছেন। মানে যাদা শব্দটি নিজে কোনো দিক ঠিক করে দেয় না। যা নেমেছে তা নিয়ে দিলটা কী করল, সেটাই সে লিখে রাখে।"
          },
          {
            "en": "10:58 gives the last word of our verse the force of a command: say, in the bounty of Allah and in His mercy, in that let them rejoice, it is better than what they accumulate. The believers of 9:124 are already doing what 10:58 orders, and doing it about the same thing, what has just been sent down. Their gladness is not a temperament. It is obedience aimed at the right object, while the people beside them find nothing in the arrival worth a second glance.",
            "bn": "১০:৫৮ আয়াত আমাদের আয়াতের শেষ শব্দটিকে হুকুমের জোর দেয়, বল, আল্লাহর অনুগ্রহ ও রহমতে, তাতেই তারা আনন্দিত হোক, তারা যা জমা করছে তার চেয়ে তা উত্তম। ৯:১২৪ আয়াতের মু'মিনরা ১০:৫৮ যা হুকুম দেয় তা আগেই করছেন, আর করছেন একই জিনিস নিয়ে, সদ্য যা নেমেছে তা নিয়ে। তাঁদের খুশিটা স্বভাবের ব্যাপার নয়। ওটা সঠিক জিনিসের দিকে তাক করা আমল। আর পাশের লোকেরা সেই নামাটার মধ্যে দ্বিতীয়বার তাকানোর মতো কিছুই পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Surah Comes Down Today",
          "bn": "আজও সূরা নেমে আসে"
        },
        "p": [
          {
            "en": "Revelation has ended; the arriving has not. Every time a passage is recited to you, or read in a translation you can follow, you are standing where the two groups in this verse stood. Ma'arif al-Qur'an draws the practical line: reciting the verses, pondering them, and acting on what they say is what carries a person forward in faith. That makes the increase measurable in ordinary units, a page read slowly instead of quickly, and one ruling inside it actually obeyed this week.",
            "bn": "ওহি নামা শেষ হয়েছে, পৌঁছানো শেষ হয়নি। যখনই কোনো অংশ আপনার সামনে তিলাওয়াত হয়, বা আপনি বোঝেন এমন কোনো অনুবাদে পড়া হয়, আপনি ঠিক সেই জায়গায় দাঁড়িয়ে যেখানে এই আয়াতের দুই দল দাঁড়িয়ে ছিল। মাআরিফুল কুরআন কাজের কথাটা টেনে দেয়, আয়াত তিলাওয়াত করা, তা নিয়ে ভাবা আর সেই অনুযায়ী আমল করাই মানুষকে ঈমানে এগিয়ে নেয়। এতে বৃদ্ধিটা সাধারণ মাপে ধরা পড়ে, তাড়াহুড়োর বদলে ধীরে পড়া একটা পৃষ্ঠা, আর তার ভেতরের একটা হুকুম এই সপ্তাহে সত্যিই মেনে চলা।"
          },
          {
            "en": "As-Sa'di lists what the increase is made of, every item something a person can do: knowing the surah, understanding it, holding it as belief, acting on it, wanting good, and holding back from evil. He reads the closing word as the believers passing the good news to each other, which he says shows breasts opened to Allah's verses, hearts at rest, and quick compliance with what the verses urge. Ma'arif reports the Companions' habit in the same spirit: sit together a while and remind each other, so that faith increases.",
            "bn": "সা'দী লিখে দেন বৃদ্ধিটা কী কী দিয়ে গড়া, আর প্রতিটি জিনিসই মানুষের করার মতো, সূরাটি জানা, তা বোঝা, তা বিশ্বাস হিসেবে ধরা, তার উপর আমল করা, ভালো কাজের আগ্রহ, আর খারাপ কাজ থেকে হাত গুটিয়ে নেওয়া। শেষ শব্দটিকে তিনি পড়েন মু'মিনরা একে অন্যকে সুসংবাদ পৌঁছে দিচ্ছেন বলে, আর বলেন, এতে বোঝা যায় আল্লাহর আয়াতের জন্য তাঁদের বুক খুলে গেছে, দিল শান্ত হয়েছে, আর আয়াত যেদিকে ডাকে সেদিকে তাঁরা দ্রুত সাড়া দেন। মাআরিফুল কুরআন সেই সুরেই সাহাবীদের অভ্যাসের কথা বলে, চলো কিছুক্ষণ বসি আর একে অন্যকে মনে করিয়ে দিই, যাতে ঈমান বাড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Increase",
          "bn": "বৃদ্ধিটাই চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "The verse is a statement, not a supplication, so what follows is composed here in its own vocabulary and not narrated, and it is offered as exactly that: O Allah, increase us in faith by what You have sent down, and make us among those who rejoice at it. Every word in it is taken from 9:124, and it asks for what the verse says Allah actually does for those who believe.",
            "bn": "আয়াতটি সংবাদ, দু'আ নয়। তাই নিচের দু'আটি আয়াতের নিজের শব্দ থেকে এখানেই গড়া, বর্ণিত কোনো দু'আ নয়, আর ঠিক সেভাবেই দেওয়া হচ্ছে। হে আল্লাহ, আপনি যা নামিয়েছেন তা দিয়ে আমাদের ঈমান বাড়িয়ে দিন, আর আমাদের তাদের অন্তর্ভুক্ত করুন যারা তাতে আনন্দিত হয়। এর প্রতিটি শব্দ ৯:১২৪ আয়াত থেকে নেওয়া, আর যা চাওয়া হচ্ছে তা সেটাই, আয়াত বলছে যারা ঈমান আনে তাদের জন্য আল্লাহ যা সত্যিই করেন।"
          },
          {
            "en": "There is also a Qur'anic supplication built on the very same verb, and it belongs beside the words above: 20:114 teaches rabbi zidni ilman, my Lord, increase me in knowledge. Put the two requests together and the order of this verse is kept, since as-Sa'di placed knowing the surah first among the things the increase is made of. Ask for the knowledge and for the faith, and ask while you are reading, because reading is the moment the verse is describing.",
            "bn": "একই ক্রিয়ার উপর গড়া কুরআনের একটা দু'আও আছে, আর উপরের কথাগুলোর পাশেই তার জায়গা। ২০:১১৪ আয়াত শেখায় রাব্বি যিদনী ইলমা, হে আমার রব, আমার জ্ঞান বাড়িয়ে দিন। দুই চাওয়া পাশাপাশি রাখলে এই আয়াতের ক্রমটাই রক্ষা পায়, কারণ সা'দী বৃদ্ধির উপকরণগুলোর মধ্যে সূরাটি জানাকেই আগে রেখেছেন। জ্ঞানও চান, ঈমানও চান, আর চান পড়ার সময়েই; কারণ পড়াটাই সেই মুহূর্ত যার কথা আয়াতটি বলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions From the Two Halves",
          "bn": "দুই ভাগ থেকে প্রশ্ন"
        },
        "p": [
          {
            "en": "Three to sit with. When a passage of the Qur'an reaches me this week, what is different in the hour after it, and if nothing is, what is that telling me? The mockers asked which of you this increased; put honestly rather than as a sneer, what would I have to answer about the last surah I heard? And as-Sa'di's list runs from knowing through understanding to acting: at which of those steps does my own reading usually come to a stop?",
            "bn": "৩টি প্রশ্ন নিয়ে বসুন। এই সপ্তাহে কুরআনের কোনো অংশ আমার কাছে পৌঁছালে তার পরের ঘণ্টায় কী বদলায়, আর কিছুই না বদলালে সেটা আমাকে কী বলছে? ঠাট্টাকারীরা জিজ্ঞেস করেছিল, এতে তোমাদের কার ঈমান বাড়ল; খোঁচা নয়, সোজাসুজি প্রশ্ন হিসেবে এলে শেষ যে সূরা শুনেছি তার ব্যাপারে আমার কী জবাব থাকত? আর সা'দীর তালিকা জানা থেকে বোঝা হয়ে আমলে গিয়ে ঠেকে; আমার পড়া সাধারণত এর কোন ধাপে এসে থেমে যায়?"
          },
          {
            "en": "Two more. The believers here were glad out loud and carried the news to each other, so when did I last say anything to another person about something in the Qur'an that had just moved me? And at-Tabari made the increase the fresh obligation that a revealed surah lays on a person: what has the Qur'an obliged me to that I have known about for years and have still not begun?",
            "bn": "আরও দুটি প্রশ্ন। এখানকার মু'মিনরা খুশিটা চেপে রাখেননি, মুখে প্রকাশ করেছেন, খবরটা একে অন্যকে জানিয়েছেন। কুরআনের কোনো কথা সবে মন ছুঁয়ে গেছে আর আমি সেটা অন্য কাউকে বলেছি, এমন শেষ কবে হয়েছে? আর তাবারীর কাছে এই বৃদ্ধি মানে নতুন ফরজ, যা নাজিল হওয়া সূরা মানুষের কাঁধে চাপিয়ে দেয়। কুরআনের কোন ফরজটা আমি বছরের পর বছর ধরে জানি, অথচ আজও শুরুই করিনি?"
          }
        ]
      }
    ]
  }
});
