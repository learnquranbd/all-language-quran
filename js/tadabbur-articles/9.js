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
          "bn": "এক লাইন নয়, গোটা অংশ"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse sits inside a single declaration that begins at 9:1. That verse announces a dissociation from Allah and His Messenger ﷺ to those of the idolaters with whom a treaty had been made. 9:2 gives them four months to travel the land freely. 9:3 has the announcement made to the people on the day of the greater pilgrimage, and it includes an offer: so if you repent, that is best for you. Only after all of that does our verse name what follows the four months.",
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াতটি বসে আছে এমন একটি ঘোষণার ভেতরে, যা শুরু হয় ৯:১ আয়াতে। ওই আয়াত ঘোষণা করে আল্লাহ আর তাঁর রাসূলের ﷺ পক্ষ থেকে সম্পর্কচ্ছেদ, মুশরিকদের মধ্যে যাদের সঙ্গে চুক্তি হয়েছিল তাদের উদ্দেশে। ৯:২ আয়াত তাদের চার মাস সময় দেয় জমিনে স্বাধীনভাবে চলাচল করার। ৯:৩ আয়াতে ঘোষণাটি করা হয় বড় হজের দিনে মানুষের সামনে, আর তার ভেতরে একটি প্রস্তাবও থাকে: কাজেই তোমরা যদি তওবা কর, তা তোমাদের জন্যই ভালো। এ সবের পরেই আমাদের আয়াত বলে, চার মাসের পরে কী।"
          },
          {
            "en": "And the verse immediately before ours is the one most often left out. 9:4 excepts those of the idolaters who had a treaty and had not been deficient toward the Muslims in anything nor supported anyone against them: complete for them their treaty until their term has ended, indeed Allah loves those who fear Him. So before the command comes, a whole category has already been removed from it by name, and the removal is sealed with a statement about what Allah loves.",
            "bn": "আর আমাদের আয়াতের ঠিক আগের আয়াতটিই সবচেয়ে বেশি বাদ দেওয়া হয়। ৯:৪ আয়াত আলাদা করে রাখে মুশরিকদের সেই লোকদের, যাদের চুক্তি ছিল আর যারা মুসলিমদের প্রতি বিন্দুমাত্র ত্রুটি করেনি আর তাদের বিরুদ্ধে কাউকে সাহায্যও করেনি: তাদের জন্য তাদের চুক্তি সময় শেষ হওয়া পর্যন্ত পূর্ণ কর, নিশ্চয়ই আল্লাহ মুত্তাকীদের ভালোবাসেন। অর্থাৎ হুকুম আসার আগেই একটি গোটা শ্রেণিকে নাম ধরে সেটার বাইরে সরিয়ে রাখা হয়েছে, আর সেই সরিয়ে রাখার উপর সিল মারা হয়েছে আল্লাহ কী ভালোবাসেন সে কথা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Command Names",
          "bn": "হুকুম কাদের নাম নেয়"
        },
        "p": [
          {
            "en": "At-Tabari is explicit about who is left once 9:4 has done its work, and his sentence is the most important one in this article. The meaning, he writes, is: when the three sacred months have passed, concerning those who have no covenant, or those who had a covenant and then broke it by backing the enemies against the Messenger of Allah ﷺ and his companions, or those whose covenant ran to no stated term. Three descriptions, each of them about conduct, and a treaty kept is in none of them.",
            "bn": "৯:৪ আয়াত নিজের কাজ সেরে ফেলার পর কারা বাকি থাকে, তাবারী সে ব্যাপারে স্পষ্ট, আর এ লেখায় তাঁর ওই বাক্যটিই সবচেয়ে জরুরি। তিনি লেখেন, অর্থ হলো: তিনটি হারাম মাস পার হয়ে গেলে, তাদের ব্যাপারে যাদের কোনো চুক্তি নেই, কিংবা তাদের যাদের চুক্তি ছিল আর তারা রাসূলুল্লাহর ﷺ ও তাঁর সঙ্গীদের বিরুদ্ধে শত্রুদের পিঠে হাত রেখে সেটা ভেঙেছে, কিংবা তাদের যাদের চুক্তির কোনো নির্দিষ্ট সময় বলা ছিল না। তিনটি বর্ণনা, প্রতিটিই আচরণ নিয়ে, আর রক্ষা করা চুক্তি এর কোনোটিতেই নেই।"
          },
          {
            "en": "As-Sa'di reads the opening clause the same way and adds the term. The sacred months here, he says, are the months in which fighting the treatied idolaters was forbidden, the four months of safe passage, and the completion of the term for whoever had a term longer than those. Ibn Kathir names the chain on that point: Mujahid, Amr ibn Shu'ayb, Muhammad ibn Ishaq, Qatadah, as-Suddi and Abd ar-Rahman ibn Zayd ibn Aslam all read the months of this verse as the grace period of 9:2.",
            "bn": "সা'দী শুরুর কথাটি একইভাবে পড়েন, আর সঙ্গে সময়ের কথাটা যোগ করেন। তিনি বলেন, এখানে হারাম মাস মানে সেই মাসগুলো যেগুলোতে চুক্তিতে থাকা মুশরিকদের সঙ্গে লড়া নিষিদ্ধ ছিল, অর্থাৎ নিরাপদে চলাচলের চার মাস, আর যার চুক্তির সময় এর চেয়ে লম্বা ছিল তার সেই সময় পূর্ণ হওয়া। এ কথাটির সূত্র ইবনু কাসীর নাম ধরে দেন: মুজাহিদ, আমর ইবনু শুআইব, মুহাম্মাদ ইবনু ইসহাক, কাতাদা, সুদ্দী ও আবদুর রহমান ইবনু যায়দ ইবনু আসলাম, সবাই এ আয়াতের মাসগুলোকে পড়েন ৯:২ আয়াতের সেই অবকাশ হিসেবে।"
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
            "bn": "আরবিতে পাঁচটি আদেশ আছে, আর পঞ্চমটি বাকি চারটিকে খুলে দেয়। হত্যা কর, পাকড়াও কর, ঘেরাও কর, প্রতিটি পাহারার জায়গায় ওৎ পেতে বস; তারপর, তারা যদি তওবা করে, নামায কায়িম করে আর যাকাত দেয়, তবে তাদের পথ ছেড়ে দাও। তাবারী মাঝের তিনটির ব্যাখ্যা দেন: খুযূহুম মানে তাদের বন্দী কর, উহসুরূহুম মানে ইসলামের দেশগুলোতে তাদের চলাচল আর মক্কায় ঢোকা আটকে দাও, আর মারসাদ, রাসাদা অর্থাৎ পাহারা দেওয়া থেকে, মানে প্রতিটি রাস্তা আর পাহারার জায়গা।"
          },
          {
            "en": "The opening verb is worth a moment too. Insalakha is used of a period coming to its end, and at-Tabari takes it to its root: from salakh, the stripping of a hide, so that a sheep stripped of its skin is maslukhah. A term does not merely lapse in this word; it is peeled away. He also settles a small question: the sacred months named are Dhu'l-Qa'dah, Dhu'l-Hijjah and Muharram, and what is intended here is the passing of Muharram, the three being named together because they run on from one another.",
            "bn": "শুরুর ক্রিয়াটিও একবার থেমে দেখার মতো। ইনসালাখা ব্যবহৃত হয় কোনো সময় শেষ হয়ে আসা বোঝাতে, আর তাবারী সেটাকে নিয়ে যান তার ধাতুতে: সালখ, অর্থাৎ চামড়া ছাড়ানো; আর সে কারণেই চামড়া ছাড়ানো ভেড়াকে বলা হয় মাসলূখা। এ শব্দে সময় কেবল ফুরিয়ে যায় না; সেটাকে ছিলে তুলে নেওয়া হয়। তিনি একটি ছোট প্রশ্নেরও ফয়সালা করেন: নাম নেওয়া হারাম মাসগুলো জিলকদ, জিলহজ আর মুহাররম, আর এখানে উদ্দেশ্য মুহাররম শেষ হওয়া; তিনটির নাম একসঙ্গে এসেছে কারণ তারা একটির পর একটি লাগোয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "A Difference About the Haram",
          "bn": "হারাম নিয়ে এক মতভেদ"
        },
        "p": [
          {
            "en": "Wherever you find them is read two ways and the difference is real. At-Tabari takes it at its widest: wherever you meet them of the land, inside the Haram and outside it, in the sacred months and outside them. Ibn Kathir reads the same clause as meaning the earth in general except for the Sacred Area, and gives his reason from another verse, 2:191, which forbids fighting them at al-Masjid al-Haram unless they fight you there, and then permits it.",
            "bn": "যেখানে পাও কথাটি দুভাবে পড়া হয়, আর মতভেদটি আসল। তাবারী এটিকে ধরেন সবচেয়ে চওড়া অর্থে: জমিনের যেখানেই তাদের পাও, হারামের ভেতরে আর বাইরে, হারাম মাসগুলোতে আর তার বাইরে। ইবনু কাসীর একই কথাটি পড়েন এভাবে যে সাধারণভাবে গোটা জমিন, তবে হারাম এলাকা ছাড়া; আর তিনি নিজের কারণ দেন আরেকটি আয়াত থেকে, ২:১৯১, যা মাসজিদুল হারামের কাছে তাদের সঙ্গে লড়তে নিষেধ করে, যতক্ষণ না তারা সেখানে তোমাদের সঙ্গে লড়ে, আর তারপর অনুমতি দেয়।"
          },
          {
            "en": "Neither man is being careless; they are weighing this verse against a different one, and the difference is worth stating as a difference rather than resolving it here. What both agree on is that the clause is about where a fight may be pressed once it is lawful, not about who may be fought, since that had already been settled two verses earlier. A reader who takes the clause as an instruction to look for people has read it without at-Tabari's sentence about who is meant.",
            "bn": "দুজনের কেউই অসতর্ক নন; তাঁরা এ আয়াতকে ওজন করছেন অন্য একটি আয়াতের বিপরীতে, আর মতভেদটিকে এখানে মিটিয়ে ফেলার চেয়ে মতভেদ হিসেবেই বলে রাখা উচিত। দুজনেই যেখানে একমত, তা হলো এ কথাটি কোথায় লড়াই চালানো যাবে তা নিয়ে, একবার সেটা বৈধ হয়ে গেলে; কার সঙ্গে লড়া যাবে তা নিয়ে নয়, কারণ সেটার ফয়সালা দুই আয়াত আগেই হয়ে গেছে। যে পাঠক এ কথাটিকে লোক খুঁজে বেড়ানোর নির্দেশ বলে ধরেন, তিনি কাদের কথা বলা হচ্ছে সে ব্যাপারে তাবারীর বাক্যটি না পড়েই পড়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Clause That Ends It",
          "bn": "যে কথাটি সব থামিয়ে দেয়"
        },
        "p": [
          {
            "en": "The condition for release is not surrender and not tribute. At-Tabari spells out each part: they repent, meaning they return from the shirk and the denial of the prophethood of Muhammad ﷺ to the oneness of Allah and sincerity of worship; they establish the prayer, meaning they perform what Allah obliged within its limits; they give the zakah that Allah made obligatory in their wealth to those entitled to it. Then let them go on their way.",
            "bn": "ছেড়ে দেওয়ার শর্ত আত্মসমর্পণ নয়, করও নয়। তাবারী প্রতিটি অংশ খুলে বলেন: তারা তওবা করে, অর্থাৎ শিরক আর মুহাম্মাদের ﷺ নবুওয়াত অস্বীকার থেকে ফিরে আসে আল্লাহর একত্ব আর ইবাদতে একনিষ্ঠতার দিকে; তারা নামায কায়িম করে, অর্থাৎ আল্লাহ যা ফরজ করেছেন তা তার সীমার ভেতরে আদায় করে; তারা যাকাত দেয়, যা আল্লাহ তাদের সম্পদে ফরজ করেছেন, তার হকদারদের। এরপর তাদের পথ ছেড়ে দাও।"
          },
          {
            "en": "As-Sa'di states what the release actually means, and it is more than a ceasefire: leave them, and let them be like you, they have what you have and upon them is what is upon you. The same equality returns two verses later at 9:11, where the identical condition is met with the words then they are your brothers in religion. As-Sa'di also notes, with Ibn Kathir, that Abu Bakr as-Siddiq (RA) used this verse among his proofs on the question of those who withheld the zakah, which is a matter of fiqh belonging to that history and to those who ruled on it.",
            "bn": "ছেড়ে দেওয়ার মানে আসলে কী, সা'দী সেটা বলে দেন, আর তা যুদ্ধবিরতির চেয়ে বেশি কিছু: তাদের ছেড়ে দাও, আর তারা হোক তোমাদের মতোই, তোমাদের যা আছে তাদেরও তা আছে, তোমাদের উপর যা আছে তাদের উপরও তা। এ একই সমতা দুই আয়াত পরে ৯:১১ আয়াতে ফিরে আসে, যেখানে একই শর্ত পূরণ হলে বলা হয়, তবে তারা তোমাদের দীনী ভাই। সা'দী আর ইবনু কাসীর দুজনেই এটাও লিখে রাখেন যে যাকাত আটকে রাখা লোকদের প্রশ্নে আবূ বাকর সিদ্দীক (রাঃ) নিজের দলিলগুলোর মধ্যে এ আয়াতটিও ব্যবহার করেছিলেন; আর সেটি ফিকহের বিষয়, যা ওই ইতিহাসের আর যাঁরা সে ফয়সালা দিয়েছেন তাঁদেরই।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Next Verse Orders",
          "bn": "পরের আয়াত যা হুকুম দেয়"
        },
        "p": [
          {
            "en": "The verse after the command is the one that shows what kind of command it was. 9:6 says that if any one of the idolaters seeks your protection, grant him protection so that he may hear the words of Allah, then deliver him to his place of safety, and it gives the reason: because they are a people who do not know. So in the middle of a declaration of hostilities, an individual who asks is to be given safe conduct, a hearing, and an escort home.",
            "bn": "হুকুমের পরের আয়াতটিই দেখিয়ে দেয় হুকুমটা কোন ধরনের ছিল। ৯:৬ আয়াত বলে, মুশরিকদের কেউ যদি তোমার কাছে আশ্রয় চায়, তবে তাকে আশ্রয় দাও, যাতে সে আল্লাহর বাণী শুনতে পায়, তারপর তাকে তার নিরাপদ জায়গায় পৌঁছে দাও; আর কারণটাও বলে দেয়: কারণ তারা এমন এক সম্প্রদায় যারা জানে না। অর্থাৎ যুদ্ধ ঘোষণার মাঝখানেই, যে একজন চেয়ে বসে তাকে দিতে হবে নিরাপদ চলার সুযোগ, শোনার সুযোগ, আর ঘরে পৌঁছে দেওয়ার ব্যবস্থা।"
          },
          {
            "en": "9:7 closes the frame from the other side, asking how the idolaters could have a treaty in the sight of Allah and with His Messenger ﷺ, then excepting those with whom a treaty was made at al-Masjid al-Haram, and ruling: so as long as they are upright toward you, be upright toward them, indeed Allah loves those who fear Him. The passage thus ends where 9:4 began. A line taken from between them, with both ends cut off, is made to say the opposite of what the ends say.",
            "bn": "৯:৭ আয়াত অন্য দিক থেকে কাঠামোটা বন্ধ করে দেয়; সে জিজ্ঞেস করে, আল্লাহ আর তাঁর রাসূলের ﷺ কাছে মুশরিকদের চুক্তি কীভাবে টিকে থাকতে পারে, তারপর আলাদা করে রাখে তাদের, যাদের সঙ্গে মাসজিদুল হারামের কাছে চুক্তি হয়েছিল, আর বিধান দেয়: তারা যতক্ষণ তোমাদের সঙ্গে সোজা থাকে, তোমরাও তাদের সঙ্গে সোজা থাক, নিশ্চয়ই আল্লাহ মুত্তাকীদের ভালোবাসেন। অর্থাৎ অংশটি শেষ হয় সেখানেই, যেখান থেকে ৯:৪ আয়াত শুরু করেছিল। এ দুয়ের মাঝখান থেকে তুলে আনা একটি লাইন, দুই মাথা কেটে দিলে, ঠিক সেটাই বলতে বাধ্য হয় যার উল্টো কথা ওই দুই মাথা বলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Does Not License",
          "bn": "এটি যার অনুমতি দেয় না"
        },
        "p": [
          {
            "en": "This has to be said plainly. The verse belongs to one declaration, made once, against named categories of people who had either no treaty or a treaty they had broken by joining an attack, in one peninsula, announced publicly with four months' notice. The commentators consulted here are the ones who put those limits on it: at-Tabari by naming who is meant, as-Sa'di by preserving the longer terms, Ibn Kathir by tying the months to the notice period. None of them hands it forward to any later reader as a general permission.",
            "bn": "কথাটা সোজাসুজি বলে দেওয়া দরকার। আয়াতটি একটি ঘোষণার অংশ, যা একবারই দেওয়া হয়েছে, নাম ধরে বলা শ্রেণির লোকদের বিরুদ্ধে, যাদের হয় কোনো চুক্তিই ছিল না, নয় যে চুক্তি ছিল তা তারা আক্রমণে শরিক হয়ে ভেঙেছিল; এক উপদ্বীপে, চার মাসের নোটিশসহ প্রকাশ্যে ঘোষণা করা। এখানে দেখা মুফাসসিরগণই এর উপর সেই সীমাগুলো বসিয়েছেন: তাবারী কাদের কথা বলা হচ্ছে তার নাম দিয়ে, সা'দী লম্বা সময়ের চুক্তিগুলো রক্ষা করে, আর ইবনু কাসীর মাসগুলোকে নোটিশের সময়ের সঙ্গে বেঁধে দিয়ে। তাঁদের কেউই এটিকে পরের কোনো পাঠকের হাতে সাধারণ অনুমতি হিসেবে তুলে দেন না।"
          },
          {
            "en": "Matters of war belong to the authority the commentators address, and this article makes no application of the verse to any present situation, group or person. What a reader can take from it is a discipline of reading. This is the verse most often quoted with its neighbours removed, and the removal is what does the work. The habit it should teach is the opposite one: when a line about other people is put in front of you, read what stood on either side of it before you accept what it seems to say.",
            "bn": "যুদ্ধের বিষয়গুলো সেই কর্তৃপক্ষেরই, মুফাসসিরগণ যাঁদের উদ্দেশে কথা বলেন; আর এ লেখা আয়াতটিকে বর্তমানের কোনো পরিস্থিতি, কোনো দল বা কোনো ব্যক্তির উপর প্রয়োগ করছে না। পাঠকের এখান থেকে নেওয়ার মতো জিনিসটা হলো পড়ার একটা নিয়ম। পাশের আয়াতগুলো সরিয়ে দিয়ে উদ্ধৃত করা হয় সবচেয়ে বেশি এ আয়াতটিকেই, আর কাজটা করে ওই সরিয়ে দেওয়াই। এ থেকে যে অভ্যাসটা শেখা উচিত তা উল্টো: অন্য মানুষদের নিয়ে কোনো লাইন যখন আপনার সামনে রাখা হয়, সেটা যা বলছে বলে মনে হয় তা মেনে নেওয়ার আগে পড়ে নিন তার দুপাশে কী ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer From the Next Verse",
          "bn": "পরের আয়াত থেকে এক দোয়া"
        },
        "p": [
          {
            "en": "The verse itself carries no supplication, and the nearest thing to one in the passage is the purpose 9:6 gives for granting protection: so that he may hear the words of Allah. That is a thing to want for people, and it is what the Quran wants for them in the middle of a declared hostility. 9:3's offer runs the same way, so if you repent, that is best for you, spoken to the very people the declaration was against.",
            "bn": "আয়াতটিতে নিজে কোনো দোয়া নেই, আর এ অংশে দোয়ার সবচেয়ে কাছের জিনিসটা হলো আশ্রয় দেওয়ার পেছনে ৯:৬ আয়াত যে উদ্দেশ্য দেয়: যাতে সে আল্লাহর বাণী শুনতে পায়। মানুষের জন্য এটা চাওয়ার মতো জিনিস, আর ঘোষিত শত্রুতার মাঝখানেই কুরআন তাদের জন্য এটাই চায়। ৯:৩ আয়াতের প্রস্তাবটাও একই পথে চলে, কাজেই তোমরা যদি তওবা কর, তা তোমাদের জন্যই ভালো; আর কথাটা বলা হচ্ছে ঠিক সেই লোকদেরই, যাদের বিরুদ্ধে ঘোষণাটি ছিল।"
          },
          {
            "en": "A sentence in the passage's own vocabulary can be said and claimed as no more than that: O Allah, let those who do not know hear Your words, and do not let me be the reason anybody is kept from hearing them. That is assembled from 9:6 and from 9:3, and it is not a Sunnah du'a. What makes it fit this verse is that the passage names ignorance as the condition of the other side, and treats being given a hearing as the remedy for it.",
            "bn": "এ অংশের নিজের শব্দে একটা বাক্য বলা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, যারা জানে না তাদের আপনার বাণী শোনান, আর আমাকে এমন কারণ বানাবেন না যার জন্য কেউ সেটা শোনা থেকে বঞ্চিত থাকে। এটি ৯:৬ আর ৯:৩ আয়াত জুড়ে বানানো, আর এটি সুন্নাহর দোয়া নয়। এটি এ আয়াতের সঙ্গে মানায় এ কারণে যে অংশটি অন্য পক্ষের অবস্থার নাম দেয় না জানা হিসেবে, আর তার দাওয়াই হিসেবে ধরে শোনার সুযোগ পাওয়াকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About How You Read",
          "bn": "কীভাবে পড়েন তা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "This is the verse most often handed on without its neighbours. Have I ever accepted a line about somebody's faith or somebody's people without reading what stood on either side of it? The fifth command undoes the other four, so what in my own dealings would stop the moment the other party changed course, and what would carry on out of habit?",
            "bn": "পাশের আয়াতগুলো ছাড়া সবচেয়ে বেশি হাতে হাতে যায় এ আয়াতটিই। কারও ঈমান নিয়ে বা কারও জাতি নিয়ে বলা কোনো লাইন আমি কি কখনো মেনে নিয়েছি, তার দুপাশে কী ছিল তা না পড়েই? পঞ্চম হুকুমটি বাকি চারটিকে খুলে দেয়; তাহলে আমার নিজের লেনদেনে কোন জিনিসটা থেমে যেত যে মুহূর্তে অন্য পক্ষ পথ বদলাত, আর কোন জিনিসটা কেবল অভ্যাসের জোরে চলতেই থাকত?"
          },
          {
            "en": "Two more. The next verse orders that a man who asks for protection be given a hearing and then escorted to safety: when somebody on the other side of a quarrel asks me for safe passage, what do I actually do? And the verse of the sword ends on Forgiving and Merciful, so where have I privately decided that a particular person is past the point of being forgiven?",
            "bn": "আরও দুটি। পরের আয়াত হুকুম দেয়, যে লোক আশ্রয় চায় তাকে শোনার সুযোগ দিতে আর তারপর নিরাপদ জায়গায় পৌঁছে দিতে: ঝগড়ার উল্টো পাশের কেউ আমার কাছে নিরাপদে যাওয়ার সুযোগ চাইলে আমি আসলে কী করি? আর তলোয়ারের আয়াত শেষ হয় ক্ষমাশীল আর দয়ালু দিয়ে; তাহলে কোথায় আমি মনে মনে ঠিক করে রেখেছি যে অমুক লোককে আর মাফ করার সময় নেই?"
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
          "bn": "দুই দরজা, এক ভিড়"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan, and these two verses come at the end of the declaration that opened the surah. 9:8 asks how a treaty could hold with people who observe no tie of kinship and no covenant if they gain the upper hand, who satisfy you with their mouths while their hearts refuse. 9:9 and 9:10 add that they sold the signs of Allah for a small price and observe nothing toward a believer. Then, with those men still in view, 9:11 offers them brotherhood and 9:12 names what would bring fighting instead.",
            "bn": "সূরা তাওবা মাদানী, আর এ দুটি আয়াত আসে সেই ঘোষণার শেষে, যা দিয়ে সূরাটি শুরু হয়েছিল। ৯:৮ আয়াত জিজ্ঞেস করে, এমন লোকদের সঙ্গে চুক্তি কীভাবে টিকে থাকতে পারে, যারা উপরে উঠে গেলে আত্মীয়তার কোনো বন্ধনও মানে না, কোনো অঙ্গীকারও মানে না, যারা মুখের কথায় তোমাদের খুশি করে আর অন্তর রাজি হয় না। ৯:৯ আর ৯:১০ আয়াত যোগ করে, তারা আল্লাহর আয়াতগুলো তুচ্ছ দামে বেচে দিয়েছে আর কোনো মু'মিনের ব্যাপারে কিছুই মানে না। এরপর, ওই লোকেরা তখনো চোখের সামনে থাকতেই, ৯:১১ আয়াত তাদের ভাই হওয়ার প্রস্তাব দেয় আর ৯:১২ আয়াত বলে দেয় কী হলে বদলে লড়াই আসবে।"
          },
          {
            "en": "As-Sa'di reads the second of the two as following directly from what preceded: after it was said that the treatied idolaters, if they stay straight on their covenant, are to be met with straightness in fulfilling it, the verse turns to what happens if they break it. So the pair is not a threat followed by an afterthought, nor mercy followed by a correction. They are the two outcomes of one situation, laid side by side, and the same people are standing in front of both.",
            "bn": "সা'দী এ দুটির দ্বিতীয়টিকে পড়েন আগের কথারই সোজা ধারাবাহিকতা হিসেবে: যখন বলা হলো চুক্তিতে থাকা মুশরিকরা নিজেদের অঙ্গীকারে সোজা থাকলে তাদের সঙ্গে চুক্তি পূরণে সোজা থাকতে হবে, তখনই আয়াত ফেরে সেদিকে, তারা যদি সেটা ভাঙে তবে কী হবে। অর্থাৎ এ জোড়াটি হুমকির পরে যোগ করা কোনো কথা নয়, দয়ার পরে দেওয়া কোনো সংশোধনও নয়। এরা একই পরিস্থিতির দুটি পরিণাম, পাশাপাশি রাখা, আর দুটোর সামনেই দাঁড়িয়ে আছে একই লোকেরা।"
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
            "bn": "৯:১১ আয়াতের শর্ত সেই একই শর্ত যা ৯:৫ আয়াত রেখেছিল, অক্ষরে অক্ষরে: তারা তওবা করে, নামায কায়িম করে, যাকাত দেয়। যা বদলায় তা হলো এতে যে রায় পাওয়া যায়। ওখানে ছিল তাদের পথ ছেড়ে দাও; এখানে হলো তবে তারা তোমাদের দীনী ভাই। পরীক্ষার কোনো সময়, কোনো নিচু দরজার কথা, কিংবা সদ্য তারা যা করছিল তার কোনো স্মৃতির কথা এখানে নেই, আর করছিল তো তাদেরই সঙ্গে যারা এখন তাদের ভাই। শব্দটি ইখওয়ান, আর সেটা বসানো হয়েছে দীনের ভেতরে, রক্তের ভেতরে নয়।"
          },
          {
            "en": "The verse then closes on a clause about the reader rather than about them: and We detail the verses for a people who know. The detailing is the thing being offered, and the audience is named by a verb. It suggests that the distinctions this passage draws, between a treaty kept and a treaty broken, between what a man was and what he now does, are only usable by someone willing to learn them in detail rather than in outline.",
            "bn": "এরপর আয়াত শেষ হয় এমন একটি কথায়, যা তাদের নিয়ে নয়, পাঠককে নিয়ে: আর আমি আয়াতগুলো খোলাসা করে দিই এমন লোকদের জন্য যারা জানে। খোলাসা করাটাই এখানে যা দেওয়া হচ্ছে, আর শ্রোতাদের নাম বলা হচ্ছে একটি ক্রিয়া দিয়ে। এতে বোঝা যায়, এ অংশ যে ফারাকগুলো টানে, রক্ষা করা চুক্তি আর ভাঙা চুক্তির মধ্যে, একজন লোক যা ছিল আর এখন যা করে তার মধ্যে, সেগুলো কাজে লাগাতে পারে কেবল সেই লোক, যে সেগুলো মোটা দাগে নয়, খুঁটিয়ে শিখতে রাজি।"
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
            "en": "Both verbs in 9:12 are physical before they are moral. Nakathu is the undoing of something that had been tied, the same image 8:58 uses when it forbids loosening or tightening a knot of a pact, so an oath in this vocabulary is a thing with knots in it. And ta'anu is to pierce or to stab; at-Tabari renders the clause as meaning they disparaged your religion Islam, so they reviled it and found fault with it, which is what the image becomes when the target is a religion rather than a body.",
            "bn": "৯:১২ আয়াতের দুটি ক্রিয়াই নৈতিক হওয়ার আগে শারীরিক। নাকাসূ মানে বেঁধে রাখা কোনো জিনিস খুলে ফেলা, আর এ একই ছবিই ৮:৫৮ আয়াত ব্যবহার করে যখন চুক্তির গিঁট আলগা বা আঁটো করা নিষেধ করে; অর্থাৎ এ শব্দভাণ্ডারে শপথ এমন এক জিনিস যার ভেতরে গিঁট আছে। আর তাআনূ মানে ছিদ্র করা বা আঘাত হানা; তাবারী এ অংশটির অর্থ দেন, তারা তোমাদের দীন ইসলামকে হেয় করেছে, তাকে গালি দিয়েছে আর তার দোষ ধরেছে; দেহের বদলে লক্ষ্য যখন কোনো দীন হয়, ছবিটা তখন এই চেহারাই নেয়।"
          },
          {
            "en": "Then a'immat al-kufr, the leaders of disbelief, where the word for leaders is the plural of imam, the one walked behind. At-Tabari glosses the following clause simply: the chiefs of disbelief have no covenant. As-Sa'di reads the same words as a verdict on their reliability rather than on their theology, that they have no pacts they keep to, but remain treacherous and breaking, not to be trusted. The purpose clause at the end is the one to hold: so that they may cease.",
            "bn": "এরপর আসে আইম্মাতুল কুফর, কুফরের নেতারা; আর নেতা বোঝানো শব্দটি ইমামের বহুবচন, অর্থাৎ যার পিছনে হাঁটা হয়। তাবারী পরের কথাটির ব্যাখ্যা দেন সোজাভাবে: কুফরের প্রধানদের কোনো অঙ্গীকার নেই। সা'দী একই শব্দগুলো পড়েন তাদের আকীদা নিয়ে রায় হিসেবে নয়, তাদের ভরসাযোগ্যতা নিয়ে রায় হিসেবে; তাদের এমন কোনো চুক্তি নেই যা তারা মেনে চলে, বরং তারা খিয়ানত করেই চলে, ভেঙেই চলে, তাদের উপর ভরসা করা যায় না। শেষের উদ্দেশ্যের কথাটাই ধরে রাখার মতো: যাতে তারা থেমে যায়।"
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
            "bn": "আয়াত কেন নেতাদের নাম নেয় আর ভিড়ের নয়, সা'দী তা বুঝিয়ে দেন, আর তিনটি কারণ দেন: তাদের অপরাধের বিশালতার কারণে, বাকিরা তাদেরই পিছনে চলে সে কারণে, আর এটা দেখাতে যে যে কেউ দীনের উপর আঘাত হানে আর তার জবাব দিতে নিজেকে দাঁড় করায়, সে কুফরের নেতাদের একজন। তৃতীয় কারণটি মাথা গোনা নয়, একটি সংজ্ঞা, আর তা শ্রেণিটিকে সরিয়ে নেয় পদ থেকে কাজের দিকে। ইবনু কাসীর আয়াত থেকে একই দাগ টানেন, যে লোক রাসূলকে ﷺ গালি দেয় বা সমালোচনার ভঙ্গিতে দীনের উপর আঘাত হানে, তাকেই এখানে বোঝানো হয়েছে।"
          },
          {
            "en": "As-Sa'di also widens the offence itself: all kinds of attack directed at the religion or at the Quran enter into this. But he keeps the aim where the verse puts it. His gloss on the last words is that they may cease from attacking your religion, and then he adds the possibility the verse does not state and he does not withhold: and perhaps they may even enter it. The end being sought is a mouth closed or a heart changed, not a population reduced.",
            "bn": "সা'দী অপরাধটিকেও চওড়া করেন: দীনের উপর বা কুরআনের উপর ছোঁড়া সব ধরনের আঘাতই এর ভেতরে পড়ে। কিন্তু লক্ষ্যটা তিনি রাখেন ঠিক সেখানেই, যেখানে আয়াত রেখেছে। শেষ শব্দগুলোর ব্যাখ্যায় তিনি বলেন, যাতে তারা তোমাদের দীনের উপর আঘাত হানা থেকে থেমে যায়; আর এরপর যোগ করেন সেই সম্ভাবনাটি, যা আয়াত বলেনি আর তিনি চেপেও রাখেননি: আর হতে পারে তারা সেটাতে ঢুকেও পড়বে। যা চাওয়া হচ্ছে তা একটি মুখ বন্ধ হওয়া বা একটি অন্তর বদলে যাওয়া, কোনো জনসংখ্যা কমে যাওয়া নয়।"
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
            "bn": "নেতারা কারা, এ ব্যাপারে মুফাসসিরদের মধ্যে মতভেদ আছে, আর মতভেদটিকে মিটিয়ে না দিয়ে রেখে দেওয়া হচ্ছে। তাবারী জানান, কেউ কেউ বলেছেন তারা আবূ জাহল ইবনু হিশাম, উতবা ইবনু রাবীআ, আবূ সুফিয়ান ইবনু হারব আর তাদের মতো লোকেরা; ইবনু কাসীর কাতাদা আর অন্যদের থেকে একই ধরনের একটি তালিকা আনেন, আর যোগ করেন শাইবা আর উমাইয়া ইবনু খালাফের নাম। ইবনু আব্বাস (রাঃ) থেকে বর্ণিত আছে, তিনি এদের পড়েন মুশরিকদের মধ্যে চুক্তিতে থাকা লোক হিসেবে, যাদের তিনি নাম দিয়েছেন কুফরের নেতা।"
          },
          {
            "en": "Two remarks from Companions are the reason this section exists. At-Tabari records that Hudhayfah (RA) used to say of this verse that its people had not yet come. Ibn Kathir carries, through al-A'mash from Zayd ibn Wahb from Hudhayfah (RA), the statement that the people of this verse were never fought again, and reports the like from Ali ibn Abi Talib (RA). The two reports are not worded the same and are not merged here. Ibn Kathir then gives his own ruling, that the verse is general even though the occasion of its revelation was specific.",
            "bn": "সাহাবীদের দুটি কথার কারণেই এ অংশটি আছে। তাবারী লিখে রাখেন, হুযাইফা (রাঃ) এ আয়াত সম্পর্কে বলতেন, এর লোকেরা এখনো আসেনি। ইবনু কাসীর আনেন আমাশের সূত্রে, যায়দ ইবনু ওয়াহব থেকে, হুযাইফা (রাঃ) থেকে সেই কথাটি, যে এ আয়াতের লোকদের সঙ্গে আর কখনো লড়া হয়নি; আর একই ধরনের কথা তিনি আলী ইবনু আবী তালিব (রাঃ) থেকেও জানান। দুটি বর্ণনার শব্দ এক নয়, আর এখানে সেগুলো মিলিয়েও দেওয়া হচ্ছে না। এরপর ইবনু কাসীর নিজের ফয়সালা দেন, আয়াতটি ব্যাপক, যদিও এর নাযিল হওয়ার উপলক্ষ ছিল নির্দিষ্ট।"
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
            "bn": "এটি যুদ্ধের আয়াত, আর সূরাটি সে ব্যাপারে আগে যা যা বলেছে তার সবই এখানে খাটে। হুকুমটি দেওয়া হচ্ছে এমন এক সমাজকে, যারা আলোচ্য চুক্তিগুলো করেছিল, নোটিশ প্রকাশ করেছিল, আর ৯:৪ আয়াতে নাম ধরে আলাদা করে রেখেছিল তাদের, যারা কথা রেখেছিল; ৯:৭ আয়াত সদ্যই তাদের বলেছে, যারা তোমাদের সঙ্গে সোজা থাকে তাদের সঙ্গে সোজা থাক। এ ধরনের বিধান তাঁদেরই, যাঁদের কাঁধে সেই দায়িত্ব; আর এ লেখা এটিকে বর্তমানের কোনো পরিস্থিতি, দল বা ব্যক্তির উপর প্রয়োগ করছে না, কারও ব্যাপারে কোনো ব্যক্তির নিজের বিচারের উপরও নয়।"
          },
          {
            "en": "What the passage does put in a reader's hands is the shape of its own reasoning. Both doors are opened by conduct: three acts open the first, two acts open the second, and neither is opened by ancestry or by name. The aim of the harder door is stated in the verse itself, that they may cease. And the softer door is opened all the way, to brotherhood, with no waiting period attached to men who had been described a verse earlier as keeping no covenant toward a believer at all.",
            "bn": "অংশটি পাঠকের হাতে যা তুলে দেয় তা হলো নিজের যুক্তির আকারটি। দুটি দরজাই খোলে আচরণ দিয়ে: প্রথমটি খোলে তিনটি কাজে, দ্বিতীয়টি খোলে দুটি কাজে, আর কোনোটিই খোলে না বংশ দিয়ে বা নাম দিয়ে। কঠিন দরজাটির লক্ষ্য আয়াত নিজেই বলে দেয়, যাতে তারা থেমে যায়। আর সহজ দরজাটি খোলা হয় একেবারে শেষ পর্যন্ত, ভাই হওয়া পর্যন্ত, আর তাতে কোনো অপেক্ষার সময় জোড়া হয়নি; অথচ এ লোকদের ঠিক এক আয়াত আগেই বর্ণনা করা হয়েছিল এমন লোক হিসেবে যারা কোনো মু'মিনের ব্যাপারে কোনো অঙ্গীকারই মানে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Either Side",
          "bn": "দুপাশের আয়াত"
        },
        "p": [
          {
            "en": "9:5 sets the identical three conditions and answers them with release rather than brotherhood, so the pair shows the same door opening wider as the surah goes on. 9:7 supplies the rule these two verses hang from, be upright toward them as long as they are upright toward you. 9:8 and 9:10 give the description that makes 9:11's offer startling, men who observe no tie and no covenant toward a believer.",
            "bn": "৯:৫ আয়াত একই তিনটি শর্ত রাখে, আর তার জবাব দেয় ভাই হওয়া দিয়ে নয়, ছেড়ে দেওয়া দিয়ে; অর্থাৎ জোড়াটি দেখায়, সূরা যত এগোয় সেই একই দরজা তত চওড়া হয়ে খোলে। ৯:৭ আয়াত দেয় সেই নিয়ম, যার সঙ্গে এ দুটি আয়াত ঝুলে আছে, তারা যতক্ষণ তোমাদের সঙ্গে সোজা থাকে তোমরাও তাদের সঙ্গে সোজা থাক। ৯:৮ আর ৯:১০ আয়াত দেয় সেই বর্ণনা, যা ৯:১১ আয়াতের প্রস্তাবটিকে চমকে দেওয়ার মতো করে তোলে, এমন লোক যারা কোনো মু'মিনের ব্যাপারে কোনো বন্ধনও মানে না, কোনো অঙ্গীকারও মানে না।"
          },
          {
            "en": "8:58 is the verse behind the image of the untied oath, and it is where the surah before this one required that a pact be thrown back openly rather than quietly broken. 9:13 continues our second verse by asking whether they would not fight a people who broke their oaths and had begun the attack first. And 60:7 is the verse that keeps the whole subject from hardening: perhaps Allah will put affection between you and those to whom you have been enemies among them.",
            "bn": "খোলা শপথের ছবিটির পেছনের আয়াত ৮:৫৮, আর ওখানেই আগের সূরা দাবি করেছিল, চুক্তি চুপচাপ ভাঙা নয়, খোলাখুলি ফিরিয়ে দিতে হবে। ৯:১৩ আয়াত আমাদের দ্বিতীয় আয়াতটির কথা টেনে নিয়ে জিজ্ঞেস করে, তোমরা কি এমন এক সম্প্রদায়ের সঙ্গে লড়বে না যারা নিজেদের শপথ ভেঙেছে আর প্রথমে আক্রমণ শুরু করেছে? আর ৬০:৭ আয়াতই গোটা বিষয়টাকে শক্ত হয়ে যাওয়া থেকে বাঁচায়: হতে পারে আল্লাহ তোমাদের আর তাদের মধ্যেকার যাদের তোমরা শত্রু বানিয়েছ, তাদের মধ্যে বন্ধুত্ব দিয়ে দেবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for the Other Side",
          "bn": "উল্টো পাশের জন্য দোয়া"
        },
        "p": [
          {
            "en": "Neither verse is a supplication, but the passage leaves an opening for one, and as-Sa'di is the one who walks through it when he adds that perhaps they may even enter the religion. The Quran's own prayer for that outcome is 60:7, which does not ask for an enemy's defeat but for affection to be put between the two sides, and which closes on the same two names our previous verse closed on, Forgiving and Merciful.",
            "bn": "দুটি আয়াতের কোনোটিই দোয়া নয়, তবে অংশটি একটা ফাঁক খোলা রেখে যায়, আর সে ফাঁক দিয়ে হেঁটে যান সা'দীই, যখন তিনি যোগ করেন, হতে পারে তারা দীনে ঢুকেও পড়বে। এ পরিণামের জন্য কুরআনের নিজের দোয়া ৬০:৭ আয়াত, যা শত্রুর পরাজয় চায় না, চায় দুই পাশের মধ্যে বন্ধুত্ব দিয়ে দেওয়া হোক; আর সেটি শেষও হয় সেই দুটি নাম দিয়েই, যেগুলো দিয়ে আমাদের আগের আয়াতটি শেষ হয়েছিল, ক্ষমাশীল আর দয়ালু।"
          },
          {
            "en": "A sentence in these verses' own vocabulary can be added and claimed as no more than that: O Allah, make those who attack this religion cease, and if You will, make them brothers in it instead. That is assembled from 9:12's closing purpose and 9:11's own word for what repentance makes of a former enemy. It is not a Sunnah du'a. The wording of 60:7 is the safer of the two and asks for the larger thing.",
            "bn": "এ আয়াতগুলোর নিজের শব্দে একটা বাক্য যোগ করা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, যারা এ দীনের উপর আঘাত হানে তাদের থামিয়ে দিন, আর আপনি চাইলে তাদের বদলে এ দীনেরই ভাই বানিয়ে দিন। এটি ৯:১২ আয়াতের শেষের উদ্দেশ্য আর ৯:১১ আয়াতের নিজের সেই শব্দ জুড়ে বানানো, তওবা একজন আগের শত্রুকে যা বানিয়ে দেয়। এটি সুন্নাহর দোয়া নয়। ৬০:৭ আয়াতের শব্দগুলোই দুটোর মধ্যে বেশি নিরাপদ, আর সেটিই বড় জিনিসটা চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Doors",
          "bn": "নিজের দরজা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "The first verse makes former enemies brothers with no waiting period named: do I let people cross that quickly, or do I keep them on probation long after they have changed? Both doors turn on conduct, so where have I been sorting people by what they are rather than by what they are doing now? And the stated aim of the harder verse is that they cease, not that they be finished: when I am in a conflict, what am I actually aiming at?",
            "bn": "প্রথম আয়াত আগের শত্রুদের ভাই বানিয়ে দেয়, আর কোনো অপেক্ষার সময়ের নাম নেয় না: আমি কি মানুষকে এত দ্রুত পার হতে দিই, নাকি তারা বদলে যাওয়ার অনেক পরেও তাদের পরীক্ষার উপর ঝুলিয়ে রাখি? দুটি দরজাই খোলে আচরণের উপর; তাহলে কোথায় আমি মানুষকে ভাগ করছি তারা কী সেটা দিয়ে, এখন তারা কী করছে সেটা দিয়ে নয়? আর কঠিন আয়াতটির ঘোষিত লক্ষ্য তারা থেমে যাক, তারা শেষ হয়ে যাক নয়: কোনো বিরোধে থাকার সময় আমার লক্ষ্যটা আসলে কী?"
          },
          {
            "en": "Two more. Oaths meant nothing to the men described here, so what have I promised recently and then treated as meaning nothing? And the verses are said to be detailed for a people who know: what have I refused to learn properly, because a rough version of it is more useful to the argument I want to win?",
            "bn": "আরও দুটি। এখানে যাদের কথা বলা হচ্ছে তাদের কাছে শপথের কোনো দাম ছিল না; তাহলে সম্প্রতি আমি কী কথা দিয়েছি আর তারপর সেটাকে দামহীন ধরে নিয়েছি? আর বলা হয়েছে, আয়াতগুলো খোলাসা করা হয় এমন লোকদের জন্য যারা জানে: কোন জিনিসটা আমি ঠিকভাবে শিখতে চাইনি, কারণ যে তর্কটা আমি জিততে চাই তার জন্য সেটার মোটা দাগের চেহারাটাই বেশি কাজের?"
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
          "bn": "এক বড়াইয়ের জবাব"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan, and this verse answers the one before it. 9:17 says it is not for the idolaters to maintain the mosques of Allah while they witness against themselves with disbelief. Ibn Kathir, commenting there, notes that those who read the phrase as the Masjid of Allah take it of al-Masjid al-Haram, built from the first day for the worship of Allah alone, and he quotes as-Suddi's dry remark that if you ask a man of any religion what he is, he will tell you plainly.",
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াত জবাব দেয় তার আগের আয়াতটির। ৯:১৭ আয়াত বলে, মুশরিকদের কাজ এটা নয় যে তারা আল্লাহর মাসজিদের রক্ষণাবেক্ষণ করবে, অথচ তারা নিজেদের কুফরীর সাক্ষ্য নিজেরাই দিচ্ছে। ইবনু কাসীর সেখানে আলোচনা করতে গিয়ে লিখে রাখেন, যাঁরা কথাটি আল্লাহর মাসজিদ হিসেবে পড়েন তাঁরা এর দ্বারা মাসজিদুল হারাম বোঝেন, যা প্রথম দিন থেকেই বানানো হয়েছিল একমাত্র আল্লাহর ইবাদতের জন্য; আর তিনি সুদ্দীর সেই শুকনো কথাটিও তুলে আনেন, কোনো ধর্মের লোককে জিজ্ঞেস করলে সে সোজাসুজি বলে দেবে সে কী।"
          },
          {
            "en": "At-Tabari preserves what the verse was answering, from Ibn Ishaq: then He mentioned the saying of Quraysh, that we are the people of the Haram, the waterers of the pilgrim, the maintainers of this House, and no one is better than us. So the verse is a reply to a claim of custodianship, and the reply is a list. 9:19 then puts the same claim on scales, asking whether providing water for the pilgrim and maintaining the Sacred Mosque are equal to believing and striving, and answering that they are not equal in the sight of Allah.",
            "bn": "আয়াতটি কার জবাব দিচ্ছিল, তা তাবারী রক্ষা করেন ইবনু ইসহাকের সূত্রে: এরপর তিনি কুরাইশের সেই কথাটির উল্লেখ করলেন, আমরা হারামের লোক, হাজীদের পানি পান করানেওয়ালা, এ ঘরের রক্ষণাবেক্ষণকারী, আর আমাদের চেয়ে ভালো কেউ নেই। অর্থাৎ আয়াতটি তত্ত্বাবধানের এক দাবির জবাব, আর জবাবটা একটি তালিকা। ৯:১৯ আয়াত এরপর সেই একই দাবিকে পাল্লায় তোলে, জিজ্ঞেস করে হাজীদের পানি পান করানো আর মাসজিদুল হারামের দেখাশোনা করা কি ঈমান আনা আর জিহাদ করার সমান, আর জবাব দেয়, আল্লাহর কাছে এরা সমান নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ya'muru: To Keep Alive",
          "bn": "ইয়া'মুরু: বাঁচিয়ে রাখা"
        },
        "p": [
          {
            "en": "The verb is ya'muru, from a root that carries building, inhabiting and long life together, and the app's Bengali reaches for abad, the keeping of a place populated and in use. That range matters here, because the boast being answered was about upkeep in the narrowest sense, water carried and a building maintained. The verse does not deny that such work is work. It says who the maintainers are, and it answers with people rather than with services.",
            "bn": "ক্রিয়াটি ইয়া'মুরু, আর এর ধাতু একসঙ্গে বহন করে গড়া, বসবাস আর দীর্ঘ আয়ু; আর অ্যাপের বাংলা হাত বাড়ায় আবাদ শব্দটির দিকে, অর্থাৎ কোনো জায়গাকে মানুষে ভরা আর চালু রাখা। এখানে এ পরিসরটার দাম আছে, কারণ যে বড়াইয়ের জবাব দেওয়া হচ্ছে তা ছিল সবচেয়ে সংকীর্ণ অর্থে দেখাশোনা নিয়েই, পানি বহন করা আর একটা দালান ঠিক রাখা। আয়াত অস্বীকার করে না যে ওই কাজও কাজ। সে বলে দেয় রক্ষণাবেক্ষণকারীরা কারা, আর জবাব দেয় সেবার নাম নিয়ে নয়, মানুষের নাম নিয়ে।"
          },
          {
            "en": "Then innama, the particle of restriction, which is why the English reads only to be maintained by. The list it restricts them to has four conditions, the first of them double, and at-Tabari glosses each part: the one who affirms Allah's oneness and is sincere to Him in worship; who affirms that Allah will raise the dead alive from their graves; who performs the obligatory prayer within its limits; who pays the obligatory zakah of his wealth to those Allah appointed it for; and who dreads the punishment of nothing for his disobedience except Allah.",
            "bn": "এরপর আসে ইন্নামা, সীমাবদ্ধ করার শব্দ, আর সে কারণেই ইংরেজিতে পড়া হয় কেবল তারাই রক্ষণাবেক্ষণ করবে। যে তালিকায় তাদের সীমাবদ্ধ করা হচ্ছে তাতে চারটি শর্ত, যার প্রথমটি জোড়া, আর তাবারী প্রতিটি অংশের ব্যাখ্যা দেন: যে আল্লাহর একত্ব স্বীকার করে আর ইবাদতে তাঁর জন্য একনিষ্ঠ; যে স্বীকার করে আল্লাহ মৃতদের কবর থেকে জীবিত করে তুলবেন; যে ফরজ নামায তার সীমার ভেতরে আদায় করে; যে নিজের সম্পদের ফরজ যাকাত আল্লাহ যাদের জন্য ঠিক করেছেন তাদের দেয়; আর যে নিজের নাফরমানির শাস্তি নিয়ে আল্লাহ ছাড়া আর কারও ভয় করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Fearing No One Else",
          "bn": "আর কাউকে ভয় না করা"
        },
        "p": [
          {
            "en": "The fourth item is the one that changes the list. As-Sa'di glosses it as a man restricting his fear to his Lord, so that he holds back from what Allah forbade and does not fall short in the rights Allah made obligatory. Read that way it is not an emotional state but a working condition: fear of anyone else is what makes a man cut a corner or stay silent, and the verse puts its absence beside prayer and zakah as though it were the same kind of duty.",
            "bn": "তালিকাটার চেহারা বদলে দেয় চতুর্থ জিনিসটাই। সা'দী এর ব্যাখ্যা দেন, লোকটি নিজের ভয়কে সীমাবদ্ধ রাখে নিজের রবের মধ্যে, আর তাই আল্লাহ যা হারাম করেছেন তা থেকে সে হাত গুটিয়ে রাখে আর আল্লাহর ফরজ করা হকগুলোতে ঘাটতি করে না। এভাবে পড়লে এটা কোনো মনের অবস্থা নয়, কাজের শর্ত: অন্য কারও ভয়ই মানুষকে কোনো কোনায় ছাড় দিতে বা চুপ থাকতে বাধ্য করে, আর আয়াত সেই ভয়ের অনুপস্থিতিকে নামায আর যাকাতের পাশেই রাখে, যেন সেটাও একই ধরনের দায়িত্ব।"
          },
          {
            "en": "As-Sa'di then sums the four as a portrait: He described them with beneficial faith, with the performance of righteous deeds whose mother is the prayer and the zakah, and with the fear of Allah, which is the root of every good. These, he says, are the maintainers of the mosques in reality and its people who are truly its people. And he closes the other side of it without softening: whoever does not believe in Allah or the Last Day and has no fear of Allah is not one of them, even if he claims it and asserts it.",
            "bn": "এরপর সা'দী চারটিকে মিলিয়ে একটা ছবি বানান: তিনি তাঁদের বর্ণনা দিয়েছেন কাজে আসা ঈমান দিয়ে, নেক আমল আদায় করা দিয়ে, যার মা নামায আর যাকাত, আর আল্লাহর ভয় দিয়ে, যা সব ভালোর মূল। তিনি বলেন, এঁরাই প্রকৃত অর্থে মাসজিদের রক্ষণাবেক্ষণকারী আর এঁরাই এর সেই লোক যাঁরা সত্যিই এর লোক। আর উল্টো দিকটাও তিনি নরম না করেই শেষ করেন: যে আল্লাহ বা শেষ দিনে ঈমান রাখে না আর যার আল্লাহর কোনো ভয় নেই, সে এঁদের একজন নয়, সে যতই দাবি করুক আর যতই বলুক।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Asa Is Binding",
          "bn": "প্রতিটি আসা পাকা কথা"
        },
        "p": [
          {
            "en": "The verse ends on a hope rather than a verdict: it is to be hoped that those will be among the guided. At-Tabari reads the clause as meaning it is fitting for people of that description to be, with Allah, among those He has guided to the truth. But he also records something larger from Ibn Abbas (RA), who read the same words as a certainty: indeed those are the successful, and who supported it by the way the word is used of the Prophet ﷺ in 17:79, that perhaps your Lord will raise you to a praised station.",
            "bn": "আয়াত শেষ হয় রায় দিয়ে নয়, আশা দিয়ে: আশা করা যায় তারা হবে হিদায়াতপ্রাপ্তদের অন্তর্ভুক্ত। তাবারী এ কথাটির অর্থ ধরেন, এমন বর্ণনার লোকদের জন্য এটাই মানানসই যে তারা আল্লাহর কাছে সেই লোকদের মধ্যে গণ্য হবে যাদের তিনি সত্যের দিকে হিদায়াত দিয়েছেন। তবে তিনি ইবনু আব্বাস (রাঃ) থেকে আরও বড় একটি কথাও লিখে রাখেন; তিনি একই শব্দগুলো পড়েন নিশ্চয়তা হিসেবে: নিশ্চয়ই এরাই সফলকাম। আর এর সমর্থনে তিনি দেখান ১৭:৭৯ আয়াতে নবীর ﷺ ব্যাপারে শব্দটির ব্যবহার, আশা করা যায় তোমার রব তোমাকে প্রশংসিত স্থানে উন্নীত করবেন।"
          },
          {
            "en": "Ibn Abbas (RA) draws the rule out plainly, that Allah's words there mean your Lord will surely raise you, and that station is the intercession, and then states it generally: every asa in the Quran is binding. As-Sa'di reaches the same conclusion in four words, that asa from Allah is binding. So the softness of the ending is a courtesy of expression rather than an uncertainty, and the reader who meets the four conditions is being promised guidance in the gentlest available grammar.",
            "bn": "ইবনু আব্বাস (রাঃ) নিয়মটা খুলে বলে দেন, ওখানে আল্লাহর কথার অর্থ তোমার রব অবশ্যই তোমাকে উন্নীত করবেন, আর ওই স্থান মানে শাফাআত; তারপর কথাটা তিনি সাধারণভাবেই বলে দেন: কুরআনের প্রতিটি আসা পাকা কথা। সা'দী একই সিদ্ধান্তে পৌঁছান কয়েকটি শব্দে, আল্লাহর পক্ষ থেকে আসা মানে পাকা কথা। অর্থাৎ শেষটার নরম ভাবটা অনিশ্চয়তা নয়, প্রকাশের ভদ্রতা; আর যে পাঠক চারটি শর্ত পূরণ করেন, তাঁকে হিদায়াতের ওয়াদা দেওয়া হচ্ছে সবচেয়ে নরম ব্যাকরণে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Builds One",
          "bn": "যে একটি বানায়"
        },
        "p": [
          {
            "en": "The Sunnah puts a reward on the narrow work the verse declined to count as ownership, which is worth noticing. Sahih al-Bukhari 450 preserves, in the report of Ubaydullah al-Khawlani, Uthman ibn Affan (RA) citing the Prophet ﷺ: whoever built a mosque, Allah would build for him a similar place in Paradise. So building is not belittled anywhere in this passage; it is simply not what the verse was asked about. The question was who the mosque belongs to, and a builder who fails the four conditions has still built.",
            "bn": "যে সংকীর্ণ কাজটিকে আয়াত মালিকানা বলে গুনতে রাজি হয়নি, সুন্নাহ সেটার উপর পুরস্কার রাখে, আর এটা খেয়াল করার মতো। সহীহ বুখারীর ৪৫০ নম্বরে উবাইদুল্লাহ আল-খাওলানীর বর্ণনায় রক্ষিত আছে, উসমান ইবনু আফফান (রাঃ) নবীর ﷺ কথা তুলে ধরছেন: যে মাসজিদ বানাল, আল্লাহ তার জন্য জান্নাতে সেরকম একটি জায়গা বানাবেন। অর্থাৎ এ অংশের কোথাওই বানানোকে ছোট করা হচ্ছে না; কথা হলো আয়াতকে সে প্রশ্নটা করা হয়নি। প্রশ্নটা ছিল মাসজিদ কার, আর যে নির্মাতা চারটি শর্তে উতরায় না, সে তবু বানিয়েছে।"
          },
          {
            "en": "Ibn Kathir, on the verse before ours, brings 8:34 to the same point: and why should Allah not punish them while they obstruct people from al-Masjid al-Haram and they were not its guardians; its guardians are none but the righteous, but most of them do not know. The last clause is the one that stings, because it says the people making the claim did not know that the claim was empty. A title held in good faith can still be a title nobody granted.",
            "bn": "আমাদের আয়াতের আগের আয়াতটি নিয়ে আলোচনায় ইবনু কাসীর একই কথায় টেনে আনেন ৮:৩৪ আয়াত: আল্লাহ তাদের শাস্তি দেবেন না কেন, যখন তারা মানুষকে মাসজিদুল হারামের পথে বাধা দিচ্ছে আর তারা তার তত্ত্বাবধায়কও নয়; মুত্তাকীরা ছাড়া কেউ তার তত্ত্বাবধায়ক নয়, কিন্তু তাদের অধিকাংশই জানে না। শেষ কথাটাই বেশি লাগে, কারণ সেটা বলে দেয়, যারা দাবিটা করছিল তারা জানতই না যে দাবিটা ফাঁকা। সরল মনে ধরে রাখা পদবিও এমন পদবি হতে পারে, যা কেউ কখনো দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses About the Houses",
          "bn": "ঘরগুলো নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "72:18 states the ownership the whole passage rests on in a few words: the masjids are for Allah, so do not invoke anyone with Allah. 2:114 takes the opposite case, asking who is more unjust than one who prevents Allah's name from being mentioned in His mosques and strives toward their ruin. Between them our verse sits as the positive statement, naming who may be said to keep such a place.",
            "bn": "গোটা অংশটি যে মালিকানার উপর দাঁড়িয়ে, ৭২:১৮ আয়াত সেটা কয়েকটি শব্দে বলে দেয়: মাসজিদগুলো আল্লাহরই, কাজেই আল্লাহর সঙ্গে আর কাউকে ডেকো না। ২:১১৪ আয়াত ধরে উল্টো দিকটা, জিজ্ঞেস করে, তার চেয়ে বড় জালিম কে, যে আল্লাহর মাসজিদগুলোতে তাঁর নাম নিতে বাধা দেয় আর সেগুলো ধ্বংস করার চেষ্টা করে। এ দুয়ের মাঝখানে আমাদের আয়াত বসে থাকে ইতিবাচক বক্তব্য হিসেবে, নাম নিয়ে বলে দেয় এমন জায়গা ধরে রাখে বলা যায় কাদের।"
          },
          {
            "en": "24:36-37 is the closest portrait of the same people: in houses which Allah has ordered to be raised and His name mentioned in them, men whom neither commerce nor sale distracts from the remembrance of Allah and the prayer and the zakah, who fear a Day when hearts and eyes will turn about. The two verses name the same three acts as ours and add the one thing ours implies, that what such men are not distracted by is business. And 9:19 with 9:20 finish the comparison our verse opened.",
            "bn": "একই লোকদের সবচেয়ে কাছের ছবি ২৪:৩৬-৩৭ আয়াত: সেসব ঘরে, যেগুলোকে উঁচু রাখতে আর যেগুলোতে তাঁর নাম স্মরণ করতে আল্লাহ হুকুম দিয়েছেন; এমন লোকেরা, যাদের ব্যবসা আর কেনাবেচা আল্লাহর স্মরণ, নামায আর যাকাত থেকে সরিয়ে দিতে পারে না, যারা ভয় করে সেই দিনকে যেদিন অন্তর আর চোখ উল্টে যাবে। ওই দুই আয়াত আমাদের আয়াতের সেই তিনটি কাজেরই নাম নেয়, আর যোগ করে সেই জিনিসটা যা আমাদের আয়াত ইশারায় বলে, এমন লোকদের যা সরিয়ে দিতে পারে না তা হলো কাজকারবার। আর ৯:১৯ আর ৯:২০ আয়াত শেষ করে সেই তুলনা, যা আমাদের আয়াত শুরু করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Holds Your Mosque",
          "bn": "আপনার মাসজিদ ধরে রাখে কে"
        },
        "p": [
          {
            "en": "The verse is unusually practical for a committee-minded reader, because it lists no committee. Whatever is decided about a building, the people who hold it are the ones who believe, pray, pay and fear nobody but Allah. That cuts in two directions at once. It relieves a person with no standing and no money of the idea that the place is not his, and it relieves a person with both of the idea that it is.",
            "bn": "কমিটির চোখে দেখা পাঠকের জন্য আয়াতটি অসাধারণভাবে কাজের, কারণ এতে কোনো কমিটির তালিকা নেই। দালানটা নিয়ে যা-ই ঠিক হোক, যারা সেটা ধরে রাখে তারা সেই লোক, যারা ঈমান রাখে, নামায পড়ে, যাকাত দেয়, আর আল্লাহ ছাড়া কাউকে ভয় করে না। এটা একসঙ্গে দুদিকেই কাটে। যার কোনো পদ নেই আর টাকা নেই, তাকে এ কথা মুক্তি দেয় সেই ধারণা থেকে যে জায়গাটা তার নয়; আর যার দুটোই আছে, তাকে মুক্তি দেয় সেই ধারণা থেকে যে জায়গাটা তার।"
          },
          {
            "en": "The fourth condition is where most of the work is, because fear of people is the ordinary reason a community's affairs go wrong quietly: the thing nobody says at the meeting, the wrong left standing because of who would be offended. As-Sa'di's gloss makes that measurable — he holds back from what Allah forbade and does not fall short in Allah's obligatory rights — and the honest question it puts is not whether a person is brave in general but whom, in particular, he is presently afraid of.",
            "bn": "কাজের বড় অংশটা চতুর্থ শর্তেই, কারণ মানুষের ভয়ই সেই সাধারণ কারণ, যার জন্য কোনো সমাজের কাজকর্ম চুপচাপ বিগড়ে যায়: বৈঠকে যে কথাটা কেউ বলে না, যে অন্যায়টা দাঁড়িয়ে থাকে কারণ কে চটে যাবে তা ভেবে। সা'দীর ব্যাখ্যা সেটাকে মাপার মতো করে দেয়, সে আল্লাহর হারাম করা জিনিস থেকে হাত গুটিয়ে রাখে আর আল্লাহর ফরজ হকগুলোতে ঘাটতি করে না; আর এ থেকে যে সৎ প্রশ্নটা আসে তা এই নয় যে লোকটি সাধারণভাবে সাহসী কি না, বরং এই যে সে এখন ঠিক কাকে ভয় পাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer to Be Counted",
          "bn": "গোনা হওয়ার জন্য দোয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication, but it hands a reader the exact thing to ask for, since it ends by hoping such people will be among the guided and Ibn Abbas (RA) reads that hope as a promise. The Quranic prayer nearest to it is the one every believer already says several times a day, guide us to the straight path, which asks for the very thing this verse holds out to those who meet its four conditions.",
            "bn": "আয়াতে কোনো দোয়া নেই, তবে কী চাইতে হবে সেটা ঠিক ধরিয়ে দেয়, কারণ শেষে সে আশা করে এমন লোকেরা হিদায়াতপ্রাপ্তদের অন্তর্ভুক্ত হবে, আর ইবনু আব্বাস (রাঃ) ওই আশাকে পড়েন ওয়াদা হিসেবে। এর সবচেয়ে কাছের কুরআনী দোয়া সেটাই, যা প্রতিটি মু'মিন দিনে কয়েকবার এমনিতেই বলেন, আমাদের সরল পথ দেখাও; আর এ আয়াত নিজের চারটি শর্ত পূরণ করা লোকদের দিকে যা বাড়িয়ে দেয়, এ দোয়া ঠিক সেটাই চায়।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, make me one of the people of Your houses by what You listed and not by what I can show, and let me fear nobody in them but You. It is assembled from the verse's four conditions and from as-Sa'di's gloss on the last of them, and it is not a Sunnah du'a. The hadith quoted above is a promise about building rather than a prayer, and should be carried as that.",
            "bn": "এ আয়াতের নিজের শব্দে একটা বাক্য যোগ করা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, আপনি যা তালিকা করেছেন তা দিয়েই আমাকে আপনার ঘরগুলোর লোক বানান, আমি যা দেখাতে পারি তা দিয়ে নয়; আর সেখানে আপনাকে ছাড়া আর কাউকে আমাকে ভয় করতে দেবেন না। এটি আয়াতের চারটি শর্ত আর তার শেষটির উপর সা'দীর ব্যাখ্যা জুড়ে বানানো, আর এটি সুন্নাহর দোয়া নয়। উপরে তোলা হাদীসটি দোয়া নয়, বানানো নিয়ে একটি ওয়াদা, আর সেভাবেই সেটা বহন করা উচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About the List",
          "bn": "তালিকাটি নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "There is no donation on this list. If a mosque were held by the four things named here, would my name be among those holding it? Fearing nobody but Allah is set beside prayer and zakah as though it were the same sort of obligation, so whom am I actually afraid of, and what has that fear cost the people around me?",
            "bn": "এ তালিকায় কোনো দানের কথা নেই। এখানে নাম নেওয়া চারটি জিনিস দিয়েই যদি মাসজিদ ধরা হয়, তবে যারা সেটা ধরে রাখে তাদের মধ্যে আমার নাম থাকত? আল্লাহ ছাড়া কাউকে ভয় না করাকে নামায আর যাকাতের পাশে রাখা হয়েছে, যেন সেটাও একই ধরনের দায়িত্ব; তাহলে আমি আসলে কাকে ভয় পাই, আর সেই ভয় আমার আশপাশের মানুষের কী খরচ করিয়েছে?"
          },
          {
            "en": "Two more. The verse does not declare them guided, only that it is hoped, and even that hope is read as a promise by those who knew the language best: what claim about myself have I been making more confidently than this verse makes about them? And the first three conditions are visible to everyone while the fourth is not, so which of the four is weakest in me when nobody is watching?",
            "bn": "আরও দুটি। আয়াত তাদের হিদায়াতপ্রাপ্ত ঘোষণা করে না, কেবল বলে আশা করা যায়; আর ভাষাটা যাঁরা সবচেয়ে ভালো জানতেন তাঁরা ওই আশাকেও পড়েন ওয়াদা হিসেবে: নিজের সম্পর্কে এমন কোন দাবি আমি করছি, যা এ আয়াত তাদের সম্পর্কে করার চেয়েও বেশি জোর দিয়ে? আর প্রথম তিনটি শর্ত সবার চোখে পড়ে, চতুর্থটি পড়ে না; তাহলে কেউ না দেখলে এ চারটির কোনটি আমার মধ্যে সবচেয়ে দুর্বল?"
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
          "bn": "যারা রয়ে গেল তাদের বলা"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan, and this verse follows a hard prohibition. 9:23 tells the believers not to take their fathers or brothers as allies if those men preferred disbelief over belief, and calls whoever does so a wrongdoer. Ibn Kathir, on that verse, brings 58:22 alongside it, that you will not find people who believe in Allah and the Last Day having affection for those who oppose Allah and His Messenger ﷺ even if they were their fathers or their sons. Our verse then supplies the reason underneath both.",
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াত আসে একটি কঠিন নিষেধের পরে। ৯:২৩ আয়াত মু'মিনদের বলে, নিজেদের পিতা আর ভাইদের বন্ধু হিসেবে না নিতে, যদি তারা ঈমানের চেয়ে কুফরীকেই এগিয়ে রাখে; আর যে তা করে তাকে বলে জালিম। ইবনু কাসীর ওই আয়াতে এর পাশে এনে রাখেন ৫৮:২২ আয়াত, তুমি এমন কোনো সম্প্রদায় পাবে না যারা আল্লাহ আর শেষ দিনে ঈমান রাখে আর আল্লাহ ও তাঁর রাসূলের ﷺ বিরোধিতাকারীদের ভালোবাসে, তারা তাদের পিতা বা সন্তান হলেও। এরপর আমাদের আয়াত দেয় সেই কারণ, যা এ দুটোরই নিচে আছে।"
          },
          {
            "en": "At-Tabari reads the address narrowly and it changes the scene. He takes it as spoken to those who had stayed behind from the emigration to the abode of Islam and remained in the abode of shirk: if remaining with your fathers and sons and brothers and wives and kin, and wealth you have earned, and a trade whose decline you fear through leaving your town, and dwellings you are pleased with and so have settled in, is more beloved to you than emigrating to Allah and His Messenger ﷺ. On that reading the eight things are not abstractions. They are the furniture of a life somebody would not leave.",
            "bn": "তাবারী সম্বোধনটি পড়েন সংকীর্ণ অর্থে, আর তাতে দৃশ্যটাই বদলে যায়। তিনি এটিকে ধরেন তাদের উদ্দেশে বলা কথা হিসেবে, যারা ইসলামের দেশে হিজরত থেকে পিছিয়ে থেকে গিয়েছিল আর শিরকের দেশেই রয়ে গিয়েছিল: যদি তোমাদের পিতা, সন্তান, ভাই, স্ত্রী আর গোষ্ঠীর সঙ্গে থেকে যাওয়া, আর তোমাদের কামাই করা সম্পদ, আর নিজের শহর ছাড়ার কারণে যে ব্যবসার মন্দার ভয় হয়, আর যে বাসস্থান তোমাদের পছন্দ আর তাই তোমরা সেখানে থিতু হয়েছ, এসব তোমাদের কাছে আল্লাহ আর তাঁর রাসূলের ﷺ দিকে হিজরত করার চেয়ে বেশি প্রিয় হয়। এ পাঠে আটটি জিনিস কোনো ভাবনা-কল্পনা নয়। ওগুলো এমন এক জীবনের আসবাব, যা কেউ ছাড়তে চায় না।"
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
            "bn": "পাল্লাটা সাজানো হয়েছে সোজাভাবে। এক পাশে আটটি জিনিস: পিতা, সন্তান, ভাই, স্ত্রী, গোষ্ঠী, সম্পদ, ব্যবসা, বাসস্থান। অন্য পাশে তিনটি: আল্লাহ, তাঁর রাসূল ﷺ, আর তাঁর পথে জিহাদ। আটটির একটিও হারাম নয়, আর কয়েকটির ভরণপোষণ আর হেফাজত মানুষের উপর ফরজ; আর এ কারণেই আয়াতটি কঠিন। সে ভালো জিনিসকে খারাপ জিনিসের বিপরীতে দাঁড় করায় না। সে ভালো জিনিসকে সারিতে বসায় আরও ভালো জিনিসের বিপরীতে, আর জিজ্ঞেস করে, এরা যখন দুদিকে টানে তখন কী হয়।"
          },
          {
            "en": "Two of the eight carry their own reasons in their wording. At-Tabari glosses iqtaraftumuha as wealth you have earned, and as-Sa'di draws the point out: He singled it out for mention because such wealth is more desired by its owner, and its owner is more attached to it than one to whom wealth comes without toil or effort. And a trade whose decline you fear names a fear rather than a loss. Nothing has failed yet; it is the possibility that is doing the holding.",
            "bn": "আটটির দুটি নিজের শব্দের ভেতরেই নিজের কারণ বহন করে। তাবারী ইকতারাফতুমূহার ব্যাখ্যা দেন তোমাদের কামাই করা সম্পদ হিসেবে, আর সা'দী কথাটা টেনে বের করেন: তিনি এটির নাম আলাদা করে নিয়েছেন, কারণ এমন সম্পদের প্রতি মালিকের টান বেশি, আর যে সম্পদ পরিশ্রম আর কষ্ট ছাড়াই হাতে আসে তার মালিকের চেয়ে এ মালিক অনেক বেশি আঁকড়ে থাকে। আর যে ব্যবসার মন্দার ভয় হয়, সেটি নাম নেয় একটি ভয়ের, কোনো ক্ষতির নয়। এখনো কিছুই ডোবেনি; ধরে রাখার কাজটা করছে কেবল সম্ভাবনাটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di Widens the List",
          "bn": "সা'দী তালিকা চওড়া করেন"
        },
        "p": [
          {
            "en": "As-Sa'di will not let the eight be read as a closed inventory. Fathers, he notes, and the mothers are like them; brothers in lineage and in company; kin meaning your relatives generally. On the trade he opens it as wide as it will go: this includes all kinds of trades and earnings, goods of trade, prices, vessels, weapons, wares, grains, crops, cattle and other than that. And dwellings you are pleased with, he says, for their beauty and their ornament and their agreeing with your desires.",
            "bn": "সা'দী আটটিকে বন্ধ একটা তালিকা হিসেবে পড়তে দেন না। তিনি লিখে রাখেন, পিতারা, আর মায়েরাও তাঁদের মতোই; ভাইয়েরা বংশে আর সঙ্গে; আর গোষ্ঠী মানে সাধারণভাবে তোমাদের আত্মীয়রা। ব্যবসার কথাটা তিনি যত চওড়া করা যায় তত চওড়া করেন: এর মধ্যে পড়ে সব ধরনের ব্যবসা আর কামাই, ব্যবসার পণ্য, দাম, পাত্র, হাতিয়ার, আসবাব, শস্য, ফসল, গবাদি পশু আর এর বাইরেও। আর যে বাসস্থান তোমাদের পছন্দ, তিনি বলেন, তার সৌন্দর্যের জন্য, তার সাজের জন্য, আর তোমাদের খেয়ালের সঙ্গে মিলে যাওয়ার জন্য।"
          },
          {
            "en": "Then he states the verdict in three words where the verse takes a clause: if these things are more beloved to you than Allah and His Messenger and striving in His way, then you are transgressors, wrongdoers. And he reads the imperative to wait as waiting for something specific, the punishment that will befall you, until Allah brings His command, which has no averting. The closing clause he takes as a definition of the fasiq: those who leave Allah's obedience, who put something of these mentioned things ahead of the love of Allah.",
            "bn": "এরপর আয়াত যেখানে একটা বাক্যাংশ নেয়, তিনি সেখানে রায়টা দেন তিন শব্দে: এসব জিনিস যদি তোমাদের কাছে আল্লাহ আর তাঁর রাসূল ﷺ আর তাঁর পথে জিহাদের চেয়ে বেশি প্রিয় হয়, তবে তোমরা ফাসিক, জালিম। আর অপেক্ষা করার হুকুমটিকে তিনি পড়েন নির্দিষ্ট কিছুর অপেক্ষা হিসেবে, তোমাদের উপর যে শাস্তি নেমে আসবে তার অপেক্ষা, যতক্ষণ না আল্লাহ তাঁর হুকুম নিয়ে আসেন, যা ফেরানোর কিছু নেই। শেষ কথাটিকে তিনি ধরেন ফাসিকের সংজ্ঞা হিসেবে: যারা আল্লাহর আনুগত্য ছেড়ে বেরিয়ে যায়, যারা এসব উল্লেখ করা জিনিসের কিছু একটাকে আল্লাহর ভালোবাসার আগে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Until Allah Brings It",
          "bn": "যতক্ষণ না তিনি তা আনেন"
        },
        "p": [
          {
            "en": "On what the command was, at-Tabari is concrete where as-Sa'di is general. His gloss of wait until Allah brings His command is: until Allah brings the conquest of Makkah, and he carries the same from Mujahid through two chains, the conquest, the conquest of Makkah. So the thing the delayers were told to sit and wait for turned out to be the removal of the very reason they had given for staying: the city they did not want to leave was opened, and the trade they feared for was no longer in enemy hands.",
            "bn": "হুকুমটা কী ছিল, সে ব্যাপারে সা'দী যেখানে সাধারণ, তাবারী সেখানে নির্দিষ্ট। অপেক্ষা কর যতক্ষণ না আল্লাহ তাঁর হুকুম নিয়ে আসেন, এর ব্যাখ্যায় তিনি বলেন: যতক্ষণ না আল্লাহ মক্কা বিজয় নিয়ে আসেন; আর একই কথা তিনি মুজাহিদ থেকে দুটি সূত্রে আনেন, সেই বিজয়, মক্কা বিজয়। অর্থাৎ পিছিয়ে থাকা লোকদের বসে যে জিনিসটার অপেক্ষা করতে বলা হলো, সেটা হয়ে দাঁড়াল তাদের থেকে যাওয়ার কারণটাই সরিয়ে দেওয়া: যে শহর তারা ছাড়তে চায়নি সেটাই খুলে গেল, আর যে ব্যবসার ভয় তারা করছিল সেটা আর শত্রুর হাতে রইল না।"
          },
          {
            "en": "At-Tabari's gloss of the last clause keeps it practical rather than metaphysical: Allah does not grant success to good to those who leave His obedience and are in disobedience to Him. The sentence is not about a door being shut on them for ever; it is about what guidance is not given to a man for as long as he is in that state. And the verse's own imperative leaves the state open, because waiting is something a person can stop doing.",
            "bn": "শেষ কথাটির ব্যাখ্যায় তাবারী সেটিকে রাখেন দর্শনের জায়গায় নয়, কাজের জায়গায়: আল্লাহ ভালোর তাওফীক দেন না তাদের, যারা তাঁর আনুগত্য ছেড়ে বেরিয়ে যায় আর তাঁর নাফরমানিতে থাকে। বাক্যটি এ কথা বলছে না যে তাদের উপর দরজা চিরতরে বন্ধ; বলছে, লোকটি যতক্ষণ ওই অবস্থায় থাকে ততক্ষণ তাকে কোন হিদায়াত দেওয়া হয় না। আর আয়াতের নিজের হুকুমটাই অবস্থাটা খোলা রেখে দেয়, কারণ অপেক্ষা করা এমন জিনিস যা মানুষ থামিয়ে দিতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Measure in a Hadith",
          "bn": "হাদীসে সেই মাপ"
        },
        "p": [
          {
            "en": "The Sunnah states the same measure in one line and makes it a condition of faith rather than a counsel of excellence. Sahih al-Bukhari 15 has from Anas (RA) that the Prophet ﷺ said: none of you will have faith until he loves me more than his father, his children and all mankind. Two of the eight items in our verse appear there by name and a third phrase covers everyone else, and the standard is put where the verse puts it, not at the level of feeling but at the level of ranking.",
            "bn": "সুন্নাহ একই মাপটা বলে দেয় এক লাইনে, আর সেটাকে বানায় ঈমানের শর্ত, উঁচু দরজার কোনো উপদেশ নয়। সহীহ বুখারীর ১৫ নম্বরে আনাস (রাঃ) থেকে আছে, নবী ﷺ বলেছেন: তোমাদের কারও ঈমান হবে না, যতক্ষণ না আমি তার কাছে তার পিতা, তার সন্তান আর সব মানুষের চেয়ে বেশি প্রিয় হই। আমাদের আয়াতের আটটি জিনিসের দুটি ওখানে নাম ধরে আসে, আর তৃতীয় কথাটি বাকি সবাইকে ঢেকে দেয়; আর মানটা রাখা হয় সেখানেই যেখানে আয়াত রাখে, অনুভবের স্তরে নয়, সারি ঠিক করার স্তরে।"
          },
          {
            "en": "As-Sa'di draws the conclusion for both texts together, and it is the largest claim he makes anywhere on this verse: this noble verse is the greatest proof of the obligation of loving Allah and His Messenger ﷺ, and of giving that love precedence over the love of everything, and of the severe threat against whoever has any of these mentioned things more beloved to him than Allah and His Messenger and striving in His way. Love, in that reading, is a duty with an order in it and not only a feeling that visits.",
            "bn": "সা'দী দুটি পাঠ একসঙ্গে নিয়ে সিদ্ধান্তটা টানেন, আর এ আয়াতের উপর তাঁর সবচেয়ে বড় দাবিটাই এটি: এ মর্যাদাবান আয়াতটি সবচেয়ে বড় দলিল, আল্লাহ আর তাঁর রাসূলকে ﷺ ভালোবাসা যে ওয়াজিব তার, আর সব কিছুর ভালোবাসার আগে সেই ভালোবাসাকে রাখা যে ওয়াজিব তার, আর যার কাছে এসব উল্লেখ করা জিনিসের কিছু একটা আল্লাহ, তাঁর রাসূল ﷺ আর তাঁর পথে জিহাদের চেয়ে বেশি প্রিয়, তার বিরুদ্ধে কঠিন হুঁশিয়ারির। এ পাঠে ভালোবাসা কেবল মাঝেমধ্যে এসে যাওয়া অনুভব নয়, এমন এক দায়িত্ব যার ভেতরে একটা সারি আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on Ranking Love",
          "bn": "ভালোবাসার সারি নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "2:165 states the principle the verse is testing: among people are those who take others as equals to Allah and love them as Allah should be loved, but those who believe are stronger in love for Allah. 3:14 lists the same pull with different furniture, women and sons and heaped-up gold and silver and branded horses and cattle and tilled land, and calls it the enjoyment of worldly life. The two together show that the Quran treats this as a matter of degree and direction rather than of permission.",
            "bn": "আয়াত যে নীতিটি পরীক্ষা করছে, সেটি বলে দেয় ২:১৬৫: মানুষের মধ্যে এমনও আছে যারা আল্লাহ ছাড়া অন্যদের তাঁর সমকক্ষ বানায় আর আল্লাহকে যেভাবে ভালোবাসা উচিত সেভাবে তাদের ভালোবাসে; কিন্তু যারা ঈমান রাখে তারা আল্লাহর প্রতি ভালোবাসায় আরও দৃঢ়। ৩:১৪ আয়াত একই টানের তালিকা দেয় অন্য আসবাব দিয়ে, নারী, সন্তান, স্তূপ করা সোনা-রুপা, চিহ্নিত ঘোড়া, গবাদি পশু আর ফসলের জমি, আর সেটাকে বলে দুনিয়ার জীবনের ভোগ। দুটো মিলে দেখায়, কুরআন এটিকে অনুমতির বিষয় হিসেবে নয়, মাত্রা আর মুখের দিকের বিষয় হিসেবেই দেখে।"
          },
          {
            "en": "63:9 turns it into an instruction, that your wealth and your children must not divert you from the remembrance of Allah, and names the ones who let that happen the losers. 64:15 gives the same two items their status, that your wealth and your children are but a trial, with a great reward kept with Allah. And 58:22, which Ibn Kathir brings to the verse before ours, describes the people who passed this test with faith written in their hearts.",
            "bn": "৬৩:৯ আয়াত এটিকে বানিয়ে দেয় নির্দেশ, তোমাদের সম্পদ আর সন্তান যেন তোমাদের আল্লাহর স্মরণ থেকে সরিয়ে না দেয়; আর যারা সেটা হতে দেয় তাদের নাম দেয় ক্ষতিগ্রস্ত। ৬৪:১৫ আয়াত ওই দুটি জিনিসের অবস্থান বলে দেয়, তোমাদের সম্পদ আর সন্তান কেবলই পরীক্ষা, আর আল্লাহর কাছে রাখা আছে মহা প্রতিদান। আর ৫৮:২২ আয়াত, যেটি ইবনু কাসীর আমাদের আগের আয়াতের সঙ্গে আনেন, বর্ণনা করে সেই লোকদের যারা এ পরীক্ষায় উতরেছে, যাদের অন্তরে ঈমান লিখে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ordering What You Love",
          "bn": "যা ভালোবাসেন তা সারিতে বসানো"
        },
        "p": [
          {
            "en": "The practical force of the verse is that it never asks anyone to love less. It asks for an order, and an order only shows itself when two loves pull in different directions, which is rarely and not on an ordinary day. That is why the honest way to use this verse is not to search one's feelings but to look at decisions already made: the job kept, the move refused, the silence held at a family table, the prayer that lost its slot in a week that had room for everything else.",
            "bn": "আয়াতের কাজের জোরটা এই যে সে কখনো কাউকে কম ভালোবাসতে বলে না। সে চায় একটা সারি, আর সারি নিজেকে দেখায় কেবল তখনই, যখন দুটি ভালোবাসা দুদিকে টানে; আর সেটা হয় কম, রোজকার দিনে হয় না। এ কারণেই এ আয়াত কাজে লাগানোর সৎ পথটা নিজের অনুভব খুঁজে বেড়ানো নয়, বরং আগেই নেওয়া সিদ্ধান্তগুলোর দিকে তাকানো: যে চাকরিটা রাখা হলো, যে বদলিটা নাকচ করা হলো, পরিবারের আসরে যে চুপ থাকাটা ধরে রাখা হলো, আর যে নামাযটা এমন এক সপ্তাহে জায়গা হারাল যে সপ্তাহে বাকি সবের জন্যই জায়গা ছিল।"
          },
          {
            "en": "The trade clause is the most modern-sounding thing in the list, because it names a fear about the future rather than a present loss. Nothing had gone wrong for the people it describes; they were holding on because something might. Anyone who has stayed in a wrong arrangement because of what leaving might cost has met the verse at exactly that point, and the verse's own answer to it is the one at-Tabari records: what they were told to wait for arrived, and it took their reason away.",
            "bn": "তালিকার মধ্যে সবচেয়ে আধুনিক শোনায় ব্যবসার কথাটাই, কারণ সে নাম নেয় ভবিষ্যৎ নিয়ে একটি ভয়ের, বর্তমানের কোনো ক্ষতির নয়। যাদের কথা বলা হচ্ছে তাদের কিছুই বিগড়ায়নি; তারা আঁকড়ে ছিল কারণ কিছু বিগড়াতে পারে। ছেড়ে দিলে কী খরচ হবে সেই ভয়ে কোনো ভুল বন্দোবস্তে যিনি থেকে গেছেন, তিনি আয়াতের সঙ্গে ঠিক এ জায়গাতেই মিলেছেন; আর আয়াতের নিজের জবাবটা সেটাই, যা তাবারী লিখে রাখেন: যার অপেক্ষা করতে বলা হয়েছিল সেটা এসেছিল, আর এসে তাদের কারণটাই কেড়ে নিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Right Order",
          "bn": "ঠিক সারিটা চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication and its imperative is a warning rather than a prayer, so what belongs here is the thing the Quran does put in a believer's mouth about love. 2:165 names the mark of those who pass, stronger in love for Allah, and it is that strength, not the removal of any other affection, that a person would ask for. The eight things on the scale are meant to be kept, provided for and enjoyed; only their order is at issue.",
            "bn": "আয়াতে কোনো দোয়া নেই, আর এর হুকুমটাও দোয়া নয়, হুঁশিয়ারি; কাজেই এখানে যা মানায় তা হলো ভালোবাসা নিয়ে কুরআন মু'মিনের মুখে যা তুলে দেয়। ২:১৬৫ আয়াত যারা উতরায় তাদের চিহ্নের নাম দেয়, আল্লাহর প্রতি ভালোবাসায় আরও দৃঢ়; আর মানুষ চাইবে সেই দৃঢ়তাটাই, অন্য কোনো টান সরিয়ে দেওয়া নয়। পাল্লার ওই আটটি জিনিস রাখারই জন্য, দেখাশোনা করার জন্য আর ভোগ করার জন্য; প্রশ্ন কেবল ওগুলোর সারি নিয়ে।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, make Yourself and Your Messenger ﷺ more beloved to me than the eight things You named, without taking one of them from me. It is assembled from the verse's own scale, and it is not a Sunnah du'a. The hadith quoted above is a statement about faith rather than a prayer, and is to be carried as a measure.",
            "bn": "এ আয়াতের নিজের শব্দে একটা বাক্য যোগ করা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, আপনি যে আটটি জিনিসের নাম নিয়েছেন তার চেয়ে আপনাকে আর আপনার রাসূলকে ﷺ আমার কাছে বেশি প্রিয় করে দিন, আর ওগুলোর একটিও আমার কাছ থেকে নিয়ে না নিয়েই। এটি আয়াতের নিজের পাল্লা থেকে গড়া, আর এটি সুন্নাহর দোয়া নয়। উপরে তোলা হাদীসটি দোয়া নয়, ঈমান নিয়ে একটি কথা, আর সেটাকে বহন করতে হবে মাপ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About the Eight",
          "bn": "আটটি নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Of the eight, which one is mine? Not the one I would defend in an argument, but the one that actually decides how my week is spent. Every item on the list is legitimate, so have I been judging my attachments by whether they are permitted rather than by where they stand in the order? And the verse names a trade whose decline is feared rather than one that failed: what am I afraid of losing, and what is that fear already making me do?",
            "bn": "আটটির মধ্যে কোনটি আমার? তর্কে আমি কোনটির পক্ষ নিতাম তা নয়, বরং আমার সপ্তাহ কীভাবে খরচ হবে তা আসলে কোনটি ঠিক করে দেয়। তালিকার প্রতিটি জিনিসই বৈধ; তাহলে আমি কি নিজের টানগুলোকে বিচার করেছি সেগুলো জায়েজ কি না তা দিয়ে, সারিতে কে কোথায় আছে তা দিয়ে নয়? আর আয়াত নাম নেয় এমন ব্যবসার, যার মন্দার ভয় হয়, ডুবে যাওয়া ব্যবসার নয়: আমি কী হারানোর ভয় পাই, আর সেই ভয় এখনই আমাকে কী করাচ্ছে?"
          },
          {
            "en": "Two more. Those who fail the test are told to wait, and what they were waiting for arrived as the loss of the thing they had stayed for: what am I waiting for, and would I recognise it if it came in that shape? And nothing in the verse asks me to feel less for anyone, so what would change tomorrow if the order were put right and every affection left exactly as it is?",
            "bn": "আরও দুটি। যারা পরীক্ষায় হারে তাদের অপেক্ষা করতে বলা হয়, আর তারা যার অপেক্ষা করছিল সেটা এসেছিল তারা যার জন্য থেকে গিয়েছিল সেটাই হারানোর চেহারায়: আমি কীসের অপেক্ষায় আছি, আর সেটা যদি ওই চেহারায় আসে আমি কি চিনতে পারব? আর আয়াতের কোথাও আমাকে কারও প্রতি কম অনুভব করতে বলা হয়নি; তাহলে সারিটা ঠিক করে দিলে আর প্রতিটি টান ঠিক যেমন আছে তেমন রেখে দিলে কাল কী বদলাত?"
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
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াত আসে উদ্ধৃত করা একটি দাবির ঠিক পরেই। ৯:৩০ আয়াত জানায় উযাইর আর মাসীহ সম্পর্কে কী বলা হয়েছিল, সেটাকে বলে তাদের মুখের কথা, আর লিখে রাখে যে এতে তারা তাদের আগের কাফিরদের কথারই নকল করে। ইবনু কাসীর ওই কথাটিকে পড়েন এভাবে যে নিজেদের বানানো কথা ছাড়া এ দাবির পক্ষে তাদের কোনো দলিল নেই। এরপর আমাদের আয়াত সরে যায় তাদের বলা একটি কথা থেকে তাদের একটি চালু অভ্যাসের দিকে, আর ৯:৩২ ও ৯:৩৩ আয়াত অংশটি শেষ করে সেই আলো দিয়ে যা নেভানো যাবে না।"
          },
          {
            "en": "The charge in our verse is heavier than the one before it, and stranger. 9:30 reports words; 9:31 reports a relationship, and calls it lordship. What makes it stranger is that nothing in the description looks like worship: no image, no prayer addressed to the men named, no claim that they created anything. As-Sa'di introduces it as the cause underneath the claim, so that the extraordinary thing said in 9:30 became sayable because of the ordinary thing done in 9:31.",
            "bn": "আমাদের আয়াতের অভিযোগ আগেরটির চেয়ে ভারী, আর অন্যরকমও। ৯:৩০ আয়াত জানায় কিছু কথা; ৯:৩১ আয়াত জানায় একটি সম্পর্ক, আর তাকে বলে রব বানানো। অন্যরকম লাগার কারণ, এ বর্ণনার কিছুই ইবাদতের মতো দেখায় না: কোনো মূর্তি নেই, নাম নেওয়া লোকদের উদ্দেশে কোনো নামাযও নেই, তারা কিছু সৃষ্টি করেছে এমন দাবিও নেই। সা'দী এটিকে সামনে আনেন ওই দাবির নিচে থাকা কারণ হিসেবে; অর্থাৎ ৯:৩০ আয়াতে বলা অসাধারণ কথাটা বলা সম্ভব হয়েছিল ৯:৩১ আয়াতে করা সাধারণ কাজটার কারণেই।"
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
            "bn": "তাবারী শুরু করেন লোকদের বোঝানো দুটি শব্দ দিয়ে। আহবারের ব্যাখ্যায় তিনি সোজাসুজি বলেন আলিমগণ, আর একবচনের উচ্চারণ নিয়ে একটি ছোট মতভেদও লিখে রাখেন: যবরসহ হাবর, নাকি যেরসহ হিবর। ইউনুস আল-জারমী থেকে বর্ণিত, তিনি বলতেন কেবল হিবরই শুনেছেন, আর দলিল দিতেন সাধারণ ব্যবহার থেকে, কারণ লোকে বলে এটা হিবরের কালি, অর্থাৎ আলিমের কালি; ফাররা বলেছেন তিনি দুভাবেই শুনেছেন। আলিম বোঝানো শব্দ আর কালি বোঝানো শব্দ একই ছাঁচে বসে।"
          },
          {
            "en": "Ruhban he glosses as the people of the cells and those among them who strive hard in their religion, and he carries from ad-Dahhak the shorter pairing, their reciters and their scholars. As-Sa'di describes the second group as the devotees given wholly to worship. Neither commentator treats these men as frauds. They are the learned and the ascetic, the two kinds of people a religious community naturally trusts most, which is what makes the verse's charge land where it does.",
            "bn": "রুহবানের ব্যাখ্যায় তিনি বলেন কুঠুরির লোকেরা আর তাদের মধ্যে যারা নিজেদের দীনে কঠোর সাধনা করে; আর দাহহাক থেকে আনেন ছোট জোড়াটি, তাদের কারীগণ আর তাদের আলিমগণ। সা'দী দ্বিতীয় দলটির বর্ণনা দেন ইবাদতে পুরোপুরি নিজেকে সঁপে দেওয়া সাধক হিসেবে। দুই মুফাসসিরের কেউই এ লোকদের ঠগ হিসেবে দেখান না। এরা আলিম আর সাধক, অর্থাৎ ধর্মীয় সমাজ স্বভাবতই যে দুই ধরনের মানুষকে সবচেয়ে বেশি ভরসা করে; আর এ কারণেই আয়াতের অভিযোগ গিয়ে পড়ে ঠিক সেখানেই।"
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
            "bn": "তাবারী কথাটির সংজ্ঞা দেন নিখুঁতভাবে, আর ওই সংজ্ঞাই গোটা আয়াত: আল্লাহকে বাদ দিয়ে তাদের রব মানে এমন সর্দার, যাদের তারা আল্লাহর নাফরমানিতে মানে; তাই ওই লোকেরা আল্লাহর হারাম করা জিনিস তাদের জন্য হালাল করলে তারা সেটা হালাল মানে, আর আল্লাহর হালাল করা জিনিস তাদের জন্য হারাম করলে তারা সেটা হারাম মানে। এ পাঠে রব বানানো এমন কোনো পদবি নয়, যা কেউ দাবি করেছিল। সেটা তখনই ঘটে, যখন আল্লাহ যা বলেছেন তার বিপরীতে কোনো মানুষের কাছ থেকে হালাল বা হারামের রায় মেনে নেওয়া হয়।"
          },
          {
            "en": "As-Sa'di gives the same definition and adds a third element to it, that they legislate for them laws and statements contrary to the religion of the messengers, and they follow them in it. He then names a further practice as his own observation of those communities: that they went to excess concerning their shaykhs and devotees and venerated them, and took their graves as idols worshipped besides Allah, sought with sacrifices and supplication and calls for help. The first charge is about rulings; the second is about graves.",
            "bn": "সা'দী একই সংজ্ঞা দেন, আর তাতে তৃতীয় একটি উপাদান যোগ করেন, তারা তাদের জন্য এমন বিধান আর কথা বানায় যা রাসূলদের দীনের বিপরীত, আর তারা সেটাতে তাদের অনুসরণ করে। এরপর তিনি ওই সমাজগুলোর ব্যাপারে নিজের দেখা আরেকটি চর্চার নাম নেন: তারা নিজেদের শাইখ আর সাধকদের নিয়ে বাড়াবাড়ি করত আর তাঁদের বড় করে দেখত, আর তাঁদের কবরগুলোকে বানিয়ে নিত মূর্তি, যেগুলোর ইবাদত হতো আল্লাহকে বাদ দিয়ে, যেগুলোর উদ্দেশে কুরবানি দেওয়া হতো আর দোয়া আর সাহায্য চাওয়া হতো। প্রথম অভিযোগ বিধান নিয়ে; দ্বিতীয়টি কবর নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hadith That Defines It",
          "bn": "যে হাদীস এর মানে ঠিক করে দেয়"
        },
        "p": [
          {
            "en": "The commentators do not leave the definition to themselves. At-Tabari records, with its chain, that Adi ibn Hatim (RA) came to the Prophet ﷺ while he was reciting in Surah Bara'ah the words about taking scholars and monks as lords, and that the Prophet ﷺ said: they did not worship them, but they used to make lawful for them and they would accept it as lawful. The whole difficulty of the verse is answered in that one sentence, and it is answered by lowering the bar, not raising it.",
            "bn": "সংজ্ঞাটা মুফাসসিরগণ নিজেদের হাতে রেখে দেন না। তাবারী সনদসহ লিখে রাখেন, আদী ইবনু হাতিম (রাঃ) নবীর ﷺ কাছে এলেন, তখন তিনি সূরা বারাআতে আলিম আর দরবেশদের রব বানানোর কথাগুলো পড়ছিলেন; আর নবী ﷺ বললেন: তারা তাদের ইবাদত করত না, তবে ওরা তাদের জন্য হালাল করে দিত আর তারা সেটাকে হালাল বলে মেনে নিত। আয়াতটির গোটা কাঠিন্যের জবাব ওই এক বাক্যেই, আর জবাবটা আসে মাপ নিচে নামিয়ে, উপরে তুলে নয়।"
          },
          {
            "en": "Ibn Kathir notes that Imam Ahmad, at-Tirmidhi and Ibn Jarir at-Tabari all recorded the hadith. Jami at-Tirmidhi 3095 preserves it from Adi ibn Hatim (RA), where it opens with the Prophet ﷺ telling him to remove the cross he was wearing before explaining the verse to him. The scene matters: a man who had come to the Prophet ﷺ was told first about an object and then about a habit, and it was the habit the verse had called lordship.",
            "bn": "ইবনু কাসীর লিখে রাখেন, ইমাম আহমাদ, তিরমিযী আর ইবনু জারীর তাবারী সবাই হাদীসটি সংকলন করেছেন। জামি আত-তিরমিযীর ৩০৯৫ নম্বরে এটি রক্ষিত আছে আদী ইবনু হাতিম (রাঃ) থেকে, যেখানে শুরুতেই নবী ﷺ তাঁকে বলেন গলার ক্রুশটি খুলে ফেলতে, তারপর তাঁকে আয়াতটি বুঝিয়ে দেন। দৃশ্যটার দাম আছে: নবীর ﷺ কাছে আসা এক লোককে প্রথমে বলা হলো একটি জিনিস নিয়ে, তারপর একটি অভ্যাস নিয়ে; আর আয়াত রব বানানো বলেছিল সেই অভ্যাসটাকেই।"
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
            "bn": "আয়াত অভিযোগেই থেমে যায় না; সে বলে দেয় সেই আসল নির্দেশটি, যার বিপরীতে অভিযোগটা মাপা হচ্ছে। তাদের হুকুম দেওয়া হয়েছিল কেবল এক ইলাহের ইবাদত করতে, তিনি ছাড়া কোনো ইলাহ নেই। সা'দী এ কথাটি পড়েন কেবল আচার-অনুষ্ঠানের চেয়ে বেশি কিছু হিসেবে: তারা ইবাদত আর আনুগত্য কেবল তাঁরই জন্য খাঁটি করবে, আর ভালোবাসা আর দোয়ায় কেবল তাঁকেই আলাদা করে নেবে। আনুগত্য আর ভালোবাসাকে বসানো হয়েছে ইবাদতের সেই একই হুকুমের ভেতরেই; আর সে কারণেই আনুগত্য হাতবদল হওয়াকে বলা যায় রবের আসন হাতবদল হওয়া।"
          },
          {
            "en": "Then the closing formula, exalted is He above whatever they associate with Him. As-Sa'di reads it as a statement about their claim rather than only about His majesty: in that they diminish Him and describe Him with what does not befit His majesty, and Allah is high in His attributes and His acts above everything ascribed to Him that contradicts His holy perfection. The verse ends, that is, by defending Him against a description rather than by threatening them.",
            "bn": "এরপর শেষের সূত্রটি, তারা যা শরীক করে তার সব কিছুর অনেক উপরে তিনি। সা'দী এটিকে পড়েন কেবল তাঁর মহিমা নিয়ে কথা হিসেবে নয়, তাদের দাবি নিয়ে কথা হিসেবেও: এ কাজে তারা তাঁকে ছোট করে, আর তাঁর মহিমার সঙ্গে যা মানায় না তা দিয়ে তাঁর বর্ণনা দেয়; আর আল্লাহ তাঁর গুণে আর কাজে অনেক উঁচুতে, তাঁর পবিত্র পূর্ণতার বিপরীত যা কিছু তাঁর দিকে নিসবত করা হয় তার সবের উপরে। অর্থাৎ আয়াত শেষ হয় তাদের হুমকি দিয়ে নয়, একটি বর্ণনার বিরুদ্ধে তাঁর পক্ষ নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on One Authority",
          "bn": "এক কর্তৃত্ব নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "3:64 is the verse that puts our verse's charge into an invitation, calling the People of the Scripture to a word that is equitable between us and you, that we will worship none but Allah, associate nothing with Him, and not take one another as lords instead of Allah. The last clause is the same phrase our verse uses, offered as common ground rather than as an accusation, which tells a reader that the fault named here is one any community can fall into.",
            "bn": "আমাদের আয়াতের অভিযোগটিকে আহ্বানে বদলে দেয় ৩:৬৪ আয়াত, যা আহলে কিতাবকে ডাকে এমন এক কথার দিকে যা আমাদের আর তোমাদের মধ্যে সমান, তা এই যে আমরা আল্লাহ ছাড়া কারও ইবাদত করব না, তাঁর সঙ্গে কিছু শরীক করব না, আর একে অন্যকে আল্লাহর বদলে রব বানাব না। শেষ কথাটি আমাদের আয়াতের সেই একই কথা, আর সেটা এখানে অভিযোগ হিসেবে নয়, অভিন্ন ভিত্তি হিসেবে সামনে রাখা হয়েছে; আর এতে পাঠক বুঝে নেন, এখানে নাম নেওয়া দোষটা যে কোনো সমাজেই ঘটতে পারে।"
          },
          {
            "en": "42:21 states the same thing as a question: or have they partners who have ordained for them a religion to which Allah has not consented? That is as-Sa'di's third element in the form of a rebuke. 5:77 addresses the excess itself, telling the People of the Scripture not to exceed limits in their religion beyond the truth and not to follow the inclinations of a people who had gone astray before, which is where the practice in our verse comes from.",
            "bn": "৪২:২১ আয়াত একই কথা বলে প্রশ্নের আকারে: কী, তাদের কি এমন শরীক আছে যারা তাদের জন্য এমন দীনের বিধান দিয়েছে যার অনুমতি আল্লাহ দেননি? এটাই সা'দীর তৃতীয় উপাদান, তবে ভর্ৎসনার চেহারায়। ৫:৭৭ আয়াত বাড়াবাড়িটাকেই সম্বোধন করে, আহলে কিতাবকে বলে নিজেদের দীনে সত্যের সীমা ছাড়িয়ে বাড়াবাড়ি না করতে আর আগে পথভ্রষ্ট হয়ে যাওয়া লোকদের খেয়াল-খুশির পিছনে না চলতে; আর আমাদের আয়াতের সেই চর্চার জন্মও ওখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Your Verdicts Come From",
          "bn": "আপনার রায় আসে কোথা থেকে"
        },
        "p": [
          {
            "en": "The verse is uncomfortable precisely because the hadith lowers its bar. If lordship required an altar, almost nobody would be at risk. If it requires only accepting a verdict of lawful or unlawful from a man against what Allah has said, then the exposure is ordinary and it belongs to religious people rather than to anyone else, because it is religious people who take such verdicts at all.",
            "bn": "আয়াতটি অস্বস্তিকর ঠিক এ কারণেই যে হাদীস এর মাপ নিচে নামিয়ে দেয়। রব বানানোর জন্য যদি কোনো বেদি লাগত, তবে প্রায় কেউই ঝুঁকিতে থাকত না। আর যদি কেবল এটুকুই লাগে যে আল্লাহ যা বলেছেন তার বিপরীতে কোনো মানুষের কাছ থেকে হালাল বা হারামের রায় মেনে নেওয়া, তবে ঝুঁকিটা একেবারে সাধারণ, আর সেটা অন্য কারও নয়, দীনদার মানুষেরই; কারণ এ ধরনের রায় তো নেয় দীনদার মানুষই।"
          },
          {
            "en": "The useful test is not whether a person follows scholars, which the religion requires of anyone who cannot examine a matter himself, but what happens at the point of conflict: when a ruling he has been given turns out to sit against something the Book or the Sunnah says plainly, does he look again, or does he keep the ruling because of who gave it? At-Tabari's definition turns on exactly that word, in disobedience to Allah, and it is the only part of this that a reader can check in himself.",
            "bn": "কাজের যাচাইটা এই নয় যে লোকটি আলিমদের অনুসরণ করে কি না, কারণ যে নিজে কোনো বিষয় যাচাই করতে পারে না তার জন্য দীন সেটাই দাবি করে; বরং যাচাইটা সংঘাতের জায়গায়: তাকে দেওয়া কোনো রায় যখন দেখা যায় কিতাব বা সুন্নাহর স্পষ্ট কথার বিপরীতে বসে আছে, তখন সে কি আবার তাকায়, নাকি কে দিয়েছে সেই কারণেই রায়টা ধরে রাখে? তাবারীর সংজ্ঞা ঘোরে ঠিক ওই কথাটার উপরেই, আল্লাহর নাফরমানিতে; আর এ গোটা বিষয়ের মধ্যে কেবল এ অংশটাই পাঠক নিজের ভেতরে যাচাই করতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for One Master",
          "bn": "এক মালিক চেয়ে নেওয়া"
        },
        "p": [
          {
            "en": "The verse carries no supplication, and what stands in its place is the sentence it quotes as the original command: to worship one God, there is no deity except Him. That clause is already the shortest prayer in the language of this passage, and a believer who says it is asserting exactly what the verse says was asked of them and of everyone before them.",
            "bn": "আয়াতে কোনো দোয়া নেই, আর এর জায়গায় দাঁড়িয়ে আছে সেই বাক্যটি, যা সে আসল হুকুম হিসেবে উদ্ধৃত করে: এক ইলাহের ইবাদত করা, তিনি ছাড়া কোনো ইলাহ নেই। এ অংশের ভাষায় ওই কথাটিই সবচেয়ে ছোট দোয়া; আর যে মু'মিন সেটা বলেন, তিনি ঠিক সেই জিনিসটাই ঘোষণা করেন, যা আয়াত বলে তাদের কাছে আর তাদের আগের সবার কাছে চাওয়া হয়েছিল।"
          },
          {
            "en": "A sentence in the verse's own vocabulary can be added and claimed as no more than that: O Allah, let no one hold over me the right that is Yours alone, to call a thing lawful or unlawful, and keep my respect for the learned from turning into obedience against You. It is assembled from at-Tabari's definition and the verse's closing declaration, and it is not a Sunnah du'a. The hadith of Adi ibn Hatim (RA) quoted above is an explanation rather than a prayer.",
            "bn": "আয়াতের নিজের শব্দে একটা বাক্য যোগ করা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, যে অধিকার কেবল আপনারই, কোনো জিনিসকে হালাল বা হারাম বলার, সেটা আমার উপর আর কারও হাতে দেবেন না; আর আলিমদের প্রতি আমার শ্রদ্ধাকে আপনার বিরুদ্ধে আনুগত্যে বদলে যেতে দেবেন না। এটি তাবারীর সংজ্ঞা আর আয়াতের শেষ ঘোষণা জুড়ে বানানো, আর এটি সুন্নাহর দোয়া নয়। উপরে তোলা আদী ইবনু হাতিমের (রাঃ) হাদীসটি দোয়া নয়, ব্যাখ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Deference",
          "bn": "মেনে নেওয়া নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Whose permission do I actually wait for before deciding that something is fine? Is there a ruling I follow because of who said it rather than because of what it rests on, and have I ever gone back to check? And the verse says they were commanded only to worship one God: what have I added to that, in practice, which now feels as binding as the thing itself?",
            "bn": "কোনো কিছু ঠিক আছে বলে সিদ্ধান্ত নেওয়ার আগে আমি আসলে কার অনুমতির অপেক্ষা করি? এমন কোনো বিধান আমি মানি কি, যা মানি কে বলেছে সে কারণে, সেটা কীসের উপর দাঁড়িয়ে সে কারণে নয়; আর আমি কি কখনো ফিরে গিয়ে যাচাই করেছি? আর আয়াত বলে, তাদের হুকুম ছিল কেবল এক ইলাহের ইবাদত করা: কাজে-কর্মে এর সঙ্গে আমি কী জুড়েছি, যা এখন আসল জিনিসটার মতোই বাধ্যতামূলক মনে হয়?"
          },
          {
            "en": "Two more. Deference is easy to confuse with respect, so where would disagreeing with somebody I admire cost me something, and does that cost quietly shape what I end up concluding? And if a stranger described my habits without using any religious words at all, would lordship be a fair name for anything in them?",
            "bn": "আরও দুটি। মেনে নেওয়াকে সম্মানের সঙ্গে গুলিয়ে ফেলা সহজ; তাহলে যাকে আমি শ্রদ্ধা করি তার সঙ্গে দ্বিমত করতে গেলে কোথায় আমার কিছু খরচ হবে, আর সেই খরচ কি চুপচাপ ঠিক করে দেয় আমি শেষে কী সিদ্ধান্তে পৌঁছাব? আর কোনো অপরিচিত লোক যদি ধর্মের একটি শব্দও ব্যবহার না করে আমার অভ্যাসগুলোর বর্ণনা দেয়, তার কোনো কিছুকে রব বানানো বলা কি সঠিক হবে?"
          }
        ]
      }
    ]
  },
  "9:40": {
    "sections": [
      {
        "h": {
          "en": "An Argument Inside a Rebuke",
          "bn": "তিরস্কারের ভেতরে এক যুক্তি"
        },
        "p": [
          {
            "en": "This verse is not a standalone piece of history. It arrives in the middle of the reproach over Tabuk. 9:38 asks believers what is the matter with them that when they are told to go forth in the way of Allah they cling heavily to the earth, and 9:39 warns that Allah will replace a people who do not respond. Then comes our verse, opening illa tansuruhu — if you do not help him.",
            "bn": "এই আয়াতটি বিচ্ছিন্ন কোনো ইতিহাসের টুকরো নয়। এটি আসে তাবুক নিয়ে তিরস্কারের মাঝখানে। 9:38 মুমিনদের জিজ্ঞেস করে, তাদের কী হলো যে আল্লাহর পথে বেরিয়ে পড়তে বলা হলে তারা মাটির দিকে ভারী হয়ে ঝুঁকে পড়ে; আর 9:39 সতর্ক করে যে যারা সাড়া দেয় না আল্লাহ তাদের বদলে অন্য জাতি আনবেন। এরপর আসে আমাদের আয়াত, শুরু হয় ইল্লা তানসুরূহু দিয়ে — যদি তোমরা তাকে সাহায্য না করো।"
          },
          {
            "en": "The logic is then complete: faqad nasarahu Allah, Allah has already helped him. The past tense is doing the work. The argument is not that Allah will manage without you but that He has, demonstrably, on an occasion everyone listening remembers. And 9:41 follows immediately with the command to go forth, light or heavy. The cave is being used as evidence in a live dispute, not recalled for its own sake.",
            "bn": "এরপর যুক্তিটি পূর্ণ হয়: ফাক্বাদ নাসারাহুল্লাহ, আল্লাহ তো তাকে সাহায্য করেছেনই। কাজটি করছে অতীত কালই। যুক্তি এই নয় যে আল্লাহ তোমাদের ছাড়াই চালিয়ে নেবেন, বরং এই যে তিনি চালিয়ে নিয়েছেন — প্রমাণসহ, এমন এক ঘটনায় যা উপস্থিত সবাই মনে রেখেছে। আর 9:41 সঙ্গে সঙ্গেই আসে হালকা হোক বা ভারী, বেরিয়ে পড়ার আদেশ নিয়ে। গুহাকে ব্যবহার করা হচ্ছে চলমান এক বিতর্কে প্রমাণ হিসেবে, নিছক ঘটনার খাতিরে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Second of Two",
          "bn": "দুজনের দ্বিতীয়জন"
        },
        "p": [
          {
            "en": "Idh akhrajahu alladhina kafaru — when those who disbelieved drove him out. The Quran describes the same plot in 8:30, where they schemed to imprison, kill or expel him. Then thaniya ithnayni, the second of two. Not one of two: the second, which places him in a pair and leaves the other member unnamed in the verse and universally identified in the tradition as Abu Bakr (RA).",
            "bn": "ইয্ আখরাজাহুল্লাযীনা কাফারূ — যখন কাফিররা তাকে বের করে দিয়েছিল। কুরআন একই ষড়যন্ত্রের কথা বলে 8:30 আয়াতে, যেখানে তারা তাকে বন্দী করা, হত্যা করা বা বহিষ্কার করার পরিকল্পনা করেছিল। এরপর সানিয়াস্‌নাইন, দুজনের দ্বিতীয়জন। ‘দুজনের একজন’ নয়: দ্বিতীয়জন — যা তাঁকে একটি জোড়ার ভেতরে বসায়, আর জোড়ার অন্যজনের নাম আয়াতে নেই, তবে ঐতিহ্যে সর্বসম্মতভাবে তিনি আবু বকর (রাঃ)।"
          },
          {
            "en": "Idh huma fil-ghar, when the two of them were in the cave. Sahih al-Bukhari records that they remained in the cave of Thawr for three nights while the search parties combed the roads. It also preserves Abu Bakr saying that he looked up and saw the feet of the pursuers, and told the Prophet ﷺ that if one of them merely looked down he would see them — and was answered: what do you think of two whose third is Allah?",
            "bn": "ইয্ হুমা ফিল-গার, যখন তারা দুজন গুহায় ছিল। সহীহ বুখারী জানায় যে তাঁরা তিন রাত সাওর গুহায় ছিলেন, আর অনুসন্ধানকারী দলগুলো তখন পথঘাট চষে বেড়াচ্ছিল। বুখারী এ-ও সংরক্ষণ করেছে যে আবু বকর বলেছিলেন, তিনি ওপরে তাকিয়ে অনুসন্ধানকারীদের পা দেখেছিলেন, আর নবী ﷺ-কে বলেছিলেন, তাদের একজন যদি কেবল নিচের দিকে তাকাত তবে আমাদের দেখে ফেলত — জবাব এসেছিল: সেই দুজন সম্পর্কে তোমার কী ধারণা যাদের তৃতীয়জন আল্লাহ?"
          }
        ]
      },
      {
        "h": {
          "en": "Do Not Grieve",
          "bn": "দুঃখ করো না"
        },
        "p": [
          {
            "en": "Idh yaqulu lisahibihi la tahzan. When he said to his companion, do not grieve. The word chosen is hazan, sorrow, not khawf, fear. Arabic had the other verb available and did not use it. Grief looks at what is about to be lost — a life, a mission, a city left behind — and the reassurance is aimed precisely there.",
            "bn": "ইয্ ইয়াকূলু লিসাহিবিহি লা তাহযান। যখন সে তার সঙ্গীকে বলল, দুঃখ করো না। বেছে নেওয়া শব্দটি হুযন অর্থাৎ দুঃখ, খাওফ অর্থাৎ ভয় নয়। আরবির হাতে অন্য ক্রিয়াটিও ছিল, তবু তা ব্যবহার করা হয়নি। দুঃখ তাকায় যা হারাতে বসেছে তার দিকে — একটি জীবন, একটি দাওয়াত, পেছনে ফেলে আসা একটি শহর — আর আশ্বাসটি ঠিক সেদিকেই তাক করা।"
          },
          {
            "en": "Sahib, companion, is the word the tradition takes as a permanent title. And then inna Allaha ma'ana — Allah is with us. Not with me. In a moment when one man could reasonably have claimed the protection for himself, the pronoun is plural. The whole theology of the verse turns on that syllable: the withness being invoked covers the frightened man as much as the one reassuring him.",
            "bn": "সাহিব অর্থাৎ সঙ্গী — শব্দটিকে ঐতিহ্য একটি স্থায়ী উপাধি হিসেবেই নেয়। এরপর ইন্না আল্লাহা মা‘আনা — আল্লাহ আমাদের সাথে আছেন। ‘আমার সাথে’ নয়। এমন এক মুহূর্তে, যখন একজন মানুষ যুক্তিসঙ্গতভাবেই সুরক্ষাটিকে নিজের বলে দাবি করতে পারতেন, সেখানে সর্বনামটি বহুবচন। আয়াতের গোটা তত্ত্বটিই ওই এক ধ্বনির ওপর দাঁড়িয়ে: যে সঙ্গ ডাকা হচ্ছে তা ভীত মানুষটিকেও ততটাই ঢেকে রাখে যতটা ঢাকে আশ্বাসদাতাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sakinah Sent Down",
          "bn": "নাযিলকৃত সাকীনাহ"
        },
        "p": [
          {
            "en": "Fa-anzala Allahu sakinatahu alayhi. The verb is anzala, sent down, the same verb used of revelation and of rain. Sakinah is stillness that settles — from the root that gives sakan, a dwelling, a place one comes to rest. It is not the absence of danger. It is composure supplied from outside while the danger is still standing at the mouth of the cave.",
            "bn": "ফা-আনযালাল্লাহু সাকীনাতাহু ‘আলাইহ। ক্রিয়াটি আনযালা, অর্থাৎ নাযিল করলেন — একই ক্রিয়া যা ওহি ও বৃষ্টির জন্যও ব্যবহৃত হয়। সাকীনাহ হলো থিতিয়ে বসা স্থিরতা — সেই ধাতু থেকে যা থেকে সাকান, অর্থাৎ বাসস্থান, যেখানে মানুষ এসে বিশ্রাম নেয়। এটি বিপদের অনুপস্থিতি নয়। এটি বাইরে থেকে সরবরাহ করা প্রশান্তি, যখন বিপদ তখনো গুহামুখে দাঁড়িয়ে।"
          },
          {
            "en": "The pronoun alayhi, upon him, has occupied the commentators. The majority hold that it refers to the Prophet ﷺ, as the pronouns before it do. A well-known second view, reported from Ibn Abbas (RA) among others, is that it refers to Abu Bakr (RA), since the Prophet ﷺ was already settled and it was his companion who was being told not to grieve. Both are held by respected authorities and the verse is read either way without dispute over its meaning.",
            "bn": "‘আলাইহি অর্থাৎ ‘তার ওপর’ সর্বনামটি নিয়ে মুফাসসিরগণ আলোচনা করেছেন। অধিকাংশের মত, এটি নবী ﷺ-কে বোঝায়, যেমন এর আগের সর্বনামগুলো বোঝায়। সুপরিচিত দ্বিতীয় মত, যা ইবনে আব্বাস (রাঃ) প্রমুখ থেকে বর্ণিত, তা হলো এটি আবু বকর (রাঃ)-কে বোঝায়, কারণ নবী ﷺ তো আগে থেকেই স্থির ছিলেন, আর দুঃখ না করতে বলা হচ্ছিল তাঁর সঙ্গীকে। উভয় মতই সম্মানিত ইমামগণ ধারণ করেন, আর আয়াতের অর্থ নিয়ে বিতর্ক ছাড়াই দুভাবেই পড়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Armies You Did Not See",
          "bn": "যে বাহিনী তোমরা দেখোনি"
        },
        "p": [
          {
            "en": "Wa ayyadahu bijunudin lam tarawha — and He supported him with armies you did not see. Ayyada is from ayd, strength; the sense is bracing something so it holds. The relative clause is addressed to the audience: you did not see them. The help that decided the outcome was invisible to the very people now being asked to march. Sakinah appears again in this surah at 9:26, and Surah al-Fath records it repeatedly, as at 48:4.",
            "bn": "ওয়া আইয়্যাদাহু বিজুনূদিন লাম তারাওহা — আর তিনি তাকে এমন বাহিনী দিয়ে শক্তি জুগিয়েছেন যা তোমরা দেখোনি। আইয়্যাদা এসেছে আইদ অর্থাৎ শক্তি থেকে; ভাবটি হলো কিছু একটাকে ঠেস দিয়ে ধরে রাখা যাতে তা টেকে। সম্বন্ধবাচক অংশটি শ্রোতাদের উদ্দেশে: তোমরা তাদের দেখোনি। যে সাহায্য ফলাফল নির্ধারণ করেছিল তা অদৃশ্য ছিল ঠিক সেই মানুষদের কাছেই, যাদের এখন বেরিয়ে পড়তে বলা হচ্ছে। সাকীনাহ এই সূরাতেই আবার আসে 9:26 আয়াতে, আর সূরা আল-ফাতহে বারবার, যেমন 48:4 আয়াতে।"
          },
          {
            "en": "The closing clause is built on a contrast of grammar that translation flattens. The word of those who disbelieved was made lowest — a verb, an event with a date. But the word of Allah, hiya al-ulya, it is the highest — a nominal sentence with no verb at all, which in Arabic states a permanent fact rather than an occurrence. One was brought down; the other simply is above, and always was.",
            "bn": "শেষ বাক্যাংশটি এমন এক ব্যাকরণগত বৈসাদৃশ্যের ওপর গড়া, যা অনুবাদে চাপা পড়ে যায়। যারা কুফরি করেছে তাদের কথা নিচু করে দেওয়া হলো — একটি ক্রিয়া, তারিখওয়ালা একটি ঘটনা। কিন্তু আল্লাহর কথা, হিয়াল-উলইয়া, তা-ই সর্বোচ্চ — একটি নামবাচক বাক্য, যাতে কোনো ক্রিয়াই নেই; আরবিতে এমন বাক্য কোনো ঘটনা নয়, বরং স্থায়ী সত্য ঘোষণা করে। একটিকে নামিয়ে দেওয়া হলো; অন্যটি কেবল ওপরেই আছে, আর সবসময়ই ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "আজ যেভাবে এটি জীবনে আসে"
        },
        "p": [
          {
            "en": "The scene is deliberately stripped of everything people count on. Two men, no army, no city, no money, a search party outside and a rock ceiling above. What remains is one sentence, and it is a statement of fact rather than a plan: Allah is with us. The verse does not teach that danger is unreal. It teaches what a believer says while it is still real.",
            "bn": "দৃশ্যটি থেকে ইচ্ছাকৃতভাবে সেসব কিছু সরিয়ে নেওয়া হয়েছে যার ওপর মানুষ ভরসা করে। দুজন মানুষ, কোনো বাহিনী নেই, শহর নেই, অর্থ নেই, বাইরে অনুসন্ধানকারী দল আর মাথার ওপর পাথরের ছাদ। যা টিকে থাকে তা একটি বাক্য, আর তা কোনো পরিকল্পনা নয়, বরং সত্যের ঘোষণা: আল্লাহ আমাদের সাথে আছেন। আয়াত শেখায় না যে বিপদ অবাস্তব। এটি শেখায় বিপদ বাস্তব থাকতে থাকতেই একজন মুমিন কী বলে।"
          },
          {
            "en": "There is also something in it for whoever is the frightened one. The words were not addressed to a person of great composure; they were addressed to the man who was afraid, and the sakinah came down in that cave, not before it. In practice this verse belongs to the night before a hearing, the wait for a result, the hour after bad news — said in the plural, because the promise was made to two.",
            "bn": "যে ভীত, তার জন্যও এখানে কিছু আছে। কথাগুলো বলা হয়নি অসীম ধৈর্যের কোনো মানুষকে; বলা হয়েছিল সেই মানুষটিকে যিনি ভয় পাচ্ছিলেন, আর সাকীনাহ নাযিল হয়েছিল সেই গুহার ভেতরেই, তার আগে নয়। বাস্তবে এই আয়াতটি শুনানির আগের রাতের, ফলাফলের অপেক্ষার, দুঃসংবাদের পরের প্রহরের — আর তা বলতে হয় বহুবচনেই, কারণ প্রতিশ্রুতিটি দেওয়া হয়েছিল দুজনকে।"
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
          "bn": "যে ভর্ৎসনা শুরু হয় মাফ দিয়ে"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this stretch of it examines an expedition nobody wanted to make in the heat. 9:42 says that had it been an easy gain and a short trip they would have followed, but the journey was far for them. 9:43 then turns to the Prophet ﷺ himself with a reproach, and the order of its words is what the commentators notice: may Allah pardon you, why did you give them leave, before it was clear to you who told the truth and you knew the liars.",
            "bn": "সূরা তাওবা মাদানী, আর এর এ অংশটি পরীক্ষা করে এমন এক অভিযান, গরমের ভেতরে যেটাতে কেউ যেতে চায়নি। ৯:৪২ আয়াত বলে, লাভটা সহজ আর পথটা ছোট হলে তারা অবশ্যই পিছে পিছে যেত, কিন্তু যাত্রা তাদের কাছে ছিল দূরের। এরপর ৯:৪৩ আয়াত ফেরে নবীর ﷺ নিজের দিকেই এক ভর্ৎসনা নিয়ে, আর তার শব্দের ক্রমটাই মুফাসসিরগণ খেয়াল করেন: আল্লাহ আপনাকে মাফ করুন, আপনি কেন তাদের অনুমতি দিলেন, কারা সত্য বলেছে তা আপনার কাছে স্পষ্ট হওয়ার আগে আর মিথ্যাবাদীদের চেনার আগে।"
          },
          {
            "en": "Ibn Kathir collects what the early commentators made of that order. Awn said: have you heard criticism softer than this, beginning with the pardon before the criticism; Muwarriq al-Ijli and others said the like. Qatadah added the sequel, that Allah criticised him here and later revealed the permission to let them lag behind if he wished, in 24:62; Ata' al-Khurasani said the same. And Mujahid reports that the verse came down about people who had said: ask the Messenger of Allah ﷺ for permission, and whether he agrees or not, stay behind.",
            "bn": "ওই ক্রম নিয়ে আগের মুফাসসিরগণ কী বলেছেন, ইবনু কাসীর তা জমা করেন। আওন বলেছেন: এর চেয়ে নরম সমালোচনা কি কখনো শুনেছ, যা শুরু হয় সমালোচনার আগে মাফ দিয়ে? মুওয়ার্রিক আল-ইজলী আর অন্যরাও একই কথা বলেছেন। কাতাদা যোগ করেন এর পরের ধাপটা, আল্লাহ এখানে তাঁকে সমালোচনা করলেন, আর পরে ২৪:৬২ আয়াতে তাঁকে অনুমতি দিলেন যে তিনি চাইলে তাদের পিছিয়ে থাকতে দিতে পারেন; আতা আল-খুরাসানীও একই কথা বলেছেন। আর মুজাহিদ জানান, আয়াতটি নেমেছিল এমন লোকদের সম্পর্কে যারা বলেছিল: রাসূলুল্লাহর ﷺ কাছে অনুমতি চাও, তিনি রাজি হন বা না হন, পিছিয়েই থাক।"
          }
        ]
      },
      {
        "h": {
          "en": "Described by an Absence",
          "bn": "না-করা দিয়ে বর্ণনা"
        },
        "p": [
          {
            "en": "Our verse then identifies the believers by something they do not do. They do not ask your leave to be excused from striving with their wealth and their lives. It is a negative description, and an unusual test, because it does not look at how a person performs once the work has begun. It looks at who arrives beforehand with a request. The pair of nouns is the one this surah keeps using for what a man can put in, his wealth and his self.",
            "bn": "এরপর আমাদের আয়াত মু'মিনদের চেনায় এমন কিছু দিয়ে যা তারা করে না। তারা নিজেদের মাল আর জান দিয়ে জিহাদ থেকে অব্যাহতি পেতে তোমার অনুমতি চায় না। এটা না-বাচক বর্ণনা, আর অন্যরকম এক পরীক্ষা, কারণ কাজ শুরু হওয়ার পর কেউ কীভাবে করে সেদিকে সে তাকায় না। সে তাকায় কে আগেই অনুরোধ নিয়ে হাজির হয় সেদিকে। আর বিশেষ্য জোড়াটি সেই একই, যেটা এ সূরা মানুষের দেওয়ার মতো জিনিস বোঝাতে বারবার ব্যবহার করে, তার মাল আর তার নিজের জান।"
          },
          {
            "en": "At-Tabari reads the verse as an act of disclosure: this is Allah informing His prophet ﷺ of the marks of the hypocrites, that among the signs by which they are known is their staying back from striving in the path of Allah by asking the Messenger of Allah ﷺ for leave to stay when the call went out, with lying excuses. He then puts the practical instruction in the Prophet's ﷺ mouth as its consequence: do not give leave to stay behind to one who asks it without an excuse.",
            "bn": "তাবারী আয়াতটিকে পড়েন ফাঁস করে দেওয়ার একটি কাজ হিসেবে: এটি আল্লাহর পক্ষ থেকে তাঁর নবীকে ﷺ মুনাফিকদের চিহ্ন জানিয়ে দেওয়া, যে তাদের যে আলামতগুলো দিয়ে তাদের চেনা যায় তার একটি হলো আল্লাহর পথে জিহাদ থেকে পিছিয়ে থাকা, আর সেটা করা হয় ডাক পড়লে মিথ্যা ওজর দেখিয়ে রাসূলুল্লাহর ﷺ কাছে থেকে যাওয়ার অনুমতি চেয়ে। এরপর তিনি এর ফল হিসেবে কাজের নির্দেশটি নবীর ﷺ মুখে বসান: যে কোনো ওজর ছাড়াই থেকে যাওয়ার অনুমতি চায়, তাকে অনুমতি দেবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Nobody Had to Push Them",
          "bn": "কাউকে ঠেলতে হয়নি"
        },
        "p": [
          {
            "en": "As-Sa'di explains the absence rather than merely noting it, and his reason is about appetite. The believers do not ask leave to abandon striving with their wealth and their lives, he writes, because what is with them of desire for good and of faith carries them to it without anyone urging them on, let alone that they should ask leave to abandon it without an excuse. So the verse is not describing men who forced themselves. It is describing men for whom the thing had already become wanted.",
            "bn": "সা'দী এই না-থাকাটাকে কেবল খেয়াল করেই ছাড়েন না, তিনি এর কারণও বলেন, আর কারণটা রুচি নিয়ে। তিনি লেখেন, মু'মিনরা নিজেদের মাল আর জান দিয়ে জিহাদ ছেড়ে দেওয়ার অনুমতি চায় না, কারণ ভালোর প্রতি টান আর ঈমান তাদের ভেতরে যা আছে তা-ই তাদের ওই দিকে নিয়ে যায়, কারও ঠেলার দরকার হয় না; আর ওজর ছাড়া সেটা ছেড়ে দেওয়ার অনুমতি চাওয়া তো আরও দূরের কথা। অর্থাৎ আয়াত এমন লোকদের বর্ণনা দিচ্ছে না যারা নিজেদের জোর করে রাজি করিয়েছে। সে বর্ণনা দিচ্ছে এমন লোকদের, যাদের কাছে জিনিসটা ততক্ষণে চাওয়ার জিনিস হয়ে গেছে।"
          },
          {
            "en": "The closing clause is knowledge and not reward: and Allah is Knowing of those who fear Him. At-Tabari glosses it as knowledge of whoever feared Him and so guarded against Him by discharging His obligations, avoiding His disobedience, and hastening to His obedience. As-Sa'di turns it back on the verse itself, noting that part of His knowing the God-fearing is that He told us one of their signs: they do not ask leave to abandon the striving.",
            "bn": "শেষ কথাটি প্রতিদান নয়, জানা: আর আল্লাহ মুত্তাকীদের সম্পর্কে জানেন। তাবারী এর ব্যাখ্যা দেন, তাঁর জানা আছে কে তাঁকে ভয় করেছে আর তাই তাঁর ফরজ আদায় করে, তাঁর নাফরমানি থেকে দূরে থেকে আর তাঁর আনুগত্যের দিকে দৌড়ে গিয়ে নিজেকে বাঁচিয়ে রেখেছে। সা'দী কথাটা আয়াতের দিকেই ঘুরিয়ে দেন, লিখে রাখেন যে মুত্তাকীদের সম্পর্কে তাঁর জানার একটা দিক এই যে তিনি আমাদের তাঁদের একটি আলামত জানিয়ে দিলেন: তাঁরা জিহাদ ছেড়ে দেওয়ার অনুমতি চান না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse After It",
          "bn": "এর পরের আয়াত"
        },
        "p": [
          {
            "en": "9:45 completes the sentence by naming who does ask: only those ask your leave who do not believe in Allah and the Last Day and whose hearts have doubted, so they waver in their doubt. The two verses together make a pair of descriptions rather than a rule, and the second is careful about the mechanism. It does not say they are cowards or that they love comfort; it says their hearts are in doubt, and that the doubting is what the wavering is made of.",
            "bn": "৯:৪৫ আয়াত বাক্যটি পূর্ণ করে, নাম নিয়ে বলে কারা চায়: তোমার কাছে অনুমতি কেবল তারাই চায় যারা আল্লাহ আর শেষ দিনে ঈমান রাখে না আর যাদের অন্তর সন্দেহে পড়েছে, তাই তারা নিজেদের সন্দেহেই দোল খায়। দুটি আয়াত মিলে হয়ে ওঠে দুটি বর্ণনার জোড়া, কোনো বিধান নয়; আর দ্বিতীয়টি যন্ত্রটার ব্যাপারে সতর্ক। সে বলে না যে তারা ভীরু বা আরামপ্রিয়; সে বলে তাদের অন্তর সন্দেহে আছে, আর ওই সন্দেহ দিয়েই তৈরি হয়েছে তাদের দোল খাওয়া।"
          },
          {
            "en": "9:46 then gives the evidence, that had they intended to go forth they would have prepared some preparation for it, which is a test anybody can apply to himself: the gap between what a person says he intends and what he has actually got ready. And 9:81 shows the same people afterwards, rejoicing in having stayed behind and saying to each other, do not go forth in the heat.",
            "bn": "এরপর ৯:৪৬ আয়াত দলিলটা দেয়, তাদের যদি বেরোনোর ইচ্ছেই থাকত তবে তারা সেজন্য কিছু প্রস্তুতি নিত; আর এ যাচাই যে কেউ নিজের উপর চালাতে পারে: মানুষ যা করার ইচ্ছে বলে আর যা সে সত্যিই তৈরি করে রেখেছে, এ দুয়ের মাঝের ফাঁকটা। আর ৯:৮১ আয়াত ওই একই লোকদের দেখায় পরে, পিছিয়ে থাকায় খুশি হয়ে একে অন্যকে বলছে, গরমের মধ্যে বেরোবেন না।"
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
            "bn": "যে আয়াত অব্যাহতি না চাওয়ার জন্য মানুষের প্রশংসা করে, সেটাকে সহজেই সত্যিকারের অক্ষম লোকদের বিরুদ্ধে হাতিয়ার বানিয়ে ফেলা যায়; আর সূরা নিজেই সেটা নিষেধ করে। ৯:৯১ আয়াত বলে দেয়: দুর্বলের উপর, পীড়িতের উপর আর খরচ করার মতো কিছু যারা পায় না তাদের উপর কোনো অভিযোগ নেই, যদি তারা আল্লাহ আর তাঁর রাসূলের ﷺ প্রতি বিশ্বস্ত হয়; আর সৎকর্মশীলদের বিরুদ্ধে অভিযোগের কোনো কারণ নেই। তিনটি শ্রেণির নাম নিয়ে তাদের মুক্ত করা হয়, আর তাদের সঙ্গে জোড়া শর্তটি সামর্থ্য নয়, নিষ্ঠা।"
          },
          {
            "en": "Read with 9:91, our verse stops being about ability at all. A weak man who wishes he could go is on the far side of it from a strong man who asks to be let off, and the verse's own test sorts them correctly, because what it examines is where the request comes from. At-Tabari's qualification carries the same weight in the other direction: he restricts the instruction to one who asks without an excuse.",
            "bn": "৯:৯১ আয়াতের সঙ্গে পড়লে আমাদের আয়াত সামর্থ্য নিয়ে আর কিছুই বলে না। যে দুর্বল লোক যেতে পারলে বাঁচতেন, তিনি আর যে সবল লোক অব্যাহতি চান, তাঁরা এ আয়াতের দুই বিপরীত পাশে; আর আয়াতের নিজের যাচাই তাঁদের ঠিকভাবেই আলাদা করে, কারণ সে দেখে অনুরোধটা আসছে কোথা থেকে। তাবারীর শর্তটিও উল্টো দিক থেকে একই ওজন বহন করে: তিনি নির্দেশটিকে সীমাবদ্ধ রাখেন তার ব্যাপারে, যে কোনো ওজর ছাড়াই চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Let Off",
          "bn": "ছাড় চাইতে যাওয়া"
        },
        "p": [
          {
            "en": "The verse transfers easily because the situation is universal: a call goes out, and some people arrive with reasons before it has even been organised. The useful version of its test is not whether a person ever seeks exemption, since the Quran itself grants exemptions, but whether the exemptions he has sought this year would together describe somebody who wanted the work or somebody who wanted out of it.",
            "bn": "আয়াতটি সহজেই এক জায়গা থেকে আরেক জায়গায় যায়, কারণ পরিস্থিতিটা সর্বজনীন: একটা ডাক পড়ে, আর কাজটা গোছানোর আগেই কিছু লোক কারণ নিয়ে হাজির হয়। এর যাচাইটার কাজের চেহারা এই নয় যে লোকটি কখনো ছাড় চায় কি না, কারণ কুরআন নিজেই ছাড় দেয়; বরং এই যে এ বছর সে যেসব ছাড় চেয়েছে সেগুলো একসঙ্গে এমন কারও বর্ণনা দেয় কি না যে কাজটা চেয়েছিল, নাকি এমন কারও যে কাজটা থেকে বেরিয়ে আসতে চেয়েছিল।"
          },
          {
            "en": "As-Sa'di's reason is the part worth working on, because it is the only part a person can change. He locates the difference not in courage but in desire for good, the appetite that carries a man to a thing without being urged. That suggests the repair is upstream of the decision: what a person reads, keeps company with and asks for shapes what he wants, and what he wants decides whether he is the one with the request or the one already getting ready.",
            "bn": "কাজ করার মতো অংশটা সা'দীর সেই কারণটাই, কারণ কেবল ওই অংশটাই মানুষ বদলাতে পারে। তিনি ফারাকটা রাখেন সাহসে নয়, ভালোর প্রতি টানে; সেই রুচিতে, যা ঠেলা ছাড়াই মানুষকে কোনো জিনিসের দিকে নিয়ে যায়। এতে বোঝা যায় মেরামতের জায়গাটা সিদ্ধান্তের আগে: মানুষ কী পড়ে, কার সঙ্গে চলে আর কী চায়, সেটাই ঠিক করে দেয় সে কী চাইবে; আর সে কী চায় তা-ই ঠিক করে দেয় সে অনুরোধ হাতে দাঁড়ানো লোক, নাকি আগেই প্রস্তুতি নিতে শুরু করা লোক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Before the Asking",
          "bn": "চাওয়ার আগের দোয়া"
        },
        "p": [
          {
            "en": "The verse carries no supplication, and what it describes is a state rather than an act, so the thing to ask for is the state. The Quran's nearest wording is in 9:91's condition, that those excused were sincere to Allah and His Messenger ﷺ, since sincerity is what makes an excuse honest and its absence is what the verse is exposing.",
            "bn": "আয়াতে কোনো দোয়া নেই, আর সে যা বর্ণনা করে তা কোনো কাজ নয়, একটি অবস্থা; কাজেই চাওয়ার জিনিসটাও ওই অবস্থাটাই। এর সবচেয়ে কাছের কুরআনী শব্দ ৯:৯১ আয়াতের সেই শর্তে, যাদের ছাড় দেওয়া হলো তারা আল্লাহ আর তাঁর রাসূলের ﷺ প্রতি বিশ্বস্ত ছিল; কারণ নিষ্ঠাই কোনো ওজরকে সৎ করে, আর তার অনুপস্থিতিই এ আয়াত ফাঁস করে দিচ্ছে।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, do not let me be of those who come asking to be excused, and if I have a real excuse, keep me sincere in it. It is assembled from this verse and from 9:91, and it is not a Sunnah du'a. The safer thing to carry is the verse's own closing clause, said as a reminder rather than a request: Allah is Knowing of those who fear Him.",
            "bn": "এ আয়াতের নিজের শব্দে একটা বাক্য যোগ করা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, আমাকে তাদের একজন করবেন না যারা অব্যাহতি চাইতে আসে; আর আমার সত্যিকারের ওজর থাকলে সেটাতে আমাকে নিষ্ঠাবান রাখুন। এটি এ আয়াত আর ৯:৯১ আয়াত জুড়ে বানানো, আর এটি সুন্নাহর দোয়া নয়। বহন করার জন্য বেশি নিরাপদ জিনিসটা আয়াতের নিজের শেষ কথাটাই, আর সেটা বলা হবে অনুরোধ হিসেবে নয়, মনে করিয়ে দেওয়া হিসেবে: আল্লাহ মুত্তাকীদের সম্পর্কে জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Excuses",
          "bn": "নিজের ওজর নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "What am I currently trying to get excused from, and whom have I been asking? The verse examines the request rather than the performance, so if somebody listed every exemption I have sought this year, what would the list say about what I wanted? And asking to be let off is not always wrong, since the surah itself clears the weak and the ill and those with nothing to spend: do I actually know which of my requests had reasons of that kind?",
            "bn": "এখন আমি কী থেকে অব্যাহতি পেতে চাইছি, আর চাইছি কার কাছে? আয়াত পরীক্ষা করে অনুরোধকে, কাজকে নয়; তাহলে এ বছর আমি যতগুলো ছাড় চেয়েছি কেউ যদি তার সবের তালিকা করে, সে তালিকা আমি কী চেয়েছিলাম সে সম্পর্কে কী বলবে? আর ছাড় চাওয়া সবসময় ভুল নয়, কারণ সূরা নিজেই দুর্বল, পীড়িত আর খরচের সামর্থ্য নেই এমন লোকদের মুক্ত করে দেয়: আমার কোন অনুরোধগুলোর পেছনে ওই ধরনের কারণ ছিল, তা কি আমি সত্যিই জানি?"
          },
          {
            "en": "Two more. The mark of these people is that nobody had to urge them, so what good thing do I only ever do after being pushed into it? And the verse ends on Allah knowing the God-fearing rather than on praising them in front of anyone: how much of what I do is arranged so that somebody will notice it?",
            "bn": "আরও দুটি। এ লোকদের চিহ্ন হলো, কাউকে তাদের ঠেলতে হয়নি; তাহলে কোন ভালো কাজটা আমি কেবল ঠেলা খাওয়ার পরেই করি? আর আয়াত শেষ হয় কারও সামনে তাদের প্রশংসা দিয়ে নয়, আল্লাহ মুত্তাকীদের জানেন এ কথা দিয়ে: আমার কাজের কতটা এমনভাবে সাজানো থাকে যাতে কেউ সেটা খেয়াল করে?"
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
            "bn": "শেষে একটি সতর্কতা রাখা দরকার। তাবারী এটিকে বলেন সেই সময়ের মুনাফিকদের চেনার আলামতগুলোর একটি, আর আয়াত বর্ণনা করছে একটি নির্দিষ্ট অভিযানের একটি নির্দিষ্ট ডাক। আলামত কোনো রায় নয়; আর আজ কোনো কাজ থেকে অব্যাহতি চাওয়া মানুষকে এ আয়াত ৯:৪৫ আয়াতের বর্ণনা করা দলে বসিয়ে দেয় না। মুফাসসিরগণ এটি ব্যবহার করেন তাবুকে যা ঘটেছিল তা বোঝাতে, কারও হাতে অন্তর পড়ার কোনো পদ্ধতি তুলে দিতে নয়।"
          },
          {
            "en": "The useful direction is inward, which is where the verse's own gentleness points. It begins in a passage where Allah corrects His Prophet ﷺ by pardoning him first, and it ends by saying that Allah knows those who fear Him. Between a reproach that opens with a pardon and a conclusion that rests on His knowledge rather than on anyone's report, there is not much room left for a reader to use this verse on his neighbour.",
            "bn": "কাজের দিকটা ভেতরের দিকে, আর আয়াতের নিজের কোমলতাও সেদিকেই আঙুল তোলে। এর শুরু এমন এক অংশে যেখানে আল্লাহ তাঁর নবীকে ﷺ শুধরে দেন আগে মাফ করে দিয়ে, আর শেষ হয় এ কথায় যে আল্লাহ মুত্তাকীদের জানেন। যে ভর্ৎসনা শুরু হয় মাফ দিয়ে আর যে সমাপ্তি দাঁড়িয়ে থাকে কারও রিপোর্টের উপর নয়, তাঁর জানার উপর, এ দুয়ের মাঝখানে পাঠকের জন্য এ আয়াত পাশের বাড়ির লোকের উপর চালানোর জায়গা বেশি থাকে না।"
          }
        ]
      }
    ]
  },
  "9:51": {
    "sections": [
      {
        "h": {
          "en": "An Answer to Gloating",
          "bn": "বিদ্রূপের এক জবাব"
        },
        "p": [
          {
            "en": "The verse is a reply, and the provocation is preserved in the verse before it. During the season of the Tabuk expedition, Surah at-Tawbah exposes the hypocrites of Madinah at length, and 9:50 records their pattern: if good reaches you it grieves them, and if a calamity strikes you they say, we took our precaution beforehand, and they turn away rejoicing. Their happiness at the believers' hardship rested on a theory — that misfortune proves miscalculation, and that the clever stay safe.",
            "bn": "আয়াতটি একটি জবাব, আর যে খোঁচার জবাব তা ঠিক আগের আয়াতে সংরক্ষিত। তাবুক অভিযানের মৌসুমে সূরা আত-তাওবাহ মদীনার মুনাফিকদের দীর্ঘভাবে উন্মোচন করে, আর 9:50 তাদের আচরণের ধরন লিখে রাখে: তোমার কাছে কল্যাণ পৌঁছালে তা তাদের পীড়া দেয়, আর তোমার ওপর বিপদ পড়লে তারা বলে, আমরা তো আগেই সাবধানতা নিয়েছিলাম — আর তারা উল্লাস করতে করতে ফিরে যায়। মুমিনদের কষ্টে তাদের আনন্দ একটি তত্ত্বের ওপর দাঁড়িয়ে ছিল — দুর্ভোগ মানেই হিসাবের ভুল, আর চালাকরাই নিরাপদ থাকে।"
          },
          {
            "en": "The believers are then given one sentence to say back: nothing will ever strike us except what Allah has written for us; He is our Protector, and upon Allah let the believers rely. The reply does not deny that hardship came. It denies the hypocrites' reading of it. What arrived was neither accident nor blunder; it was decree, written before it struck, by the One who remains our Mawla through it.",
            "bn": "এরপর মুমিনদের ফিরিয়ে বলার জন্য একটিমাত্র বাক্য দেওয়া হয়: আমাদের ওপর কখনোই কিছু পড়বে না, আল্লাহ আমাদের জন্য যা লিখে রেখেছেন তা ছাড়া; তিনিই আমাদের অভিভাবক, আর আল্লাহর ওপরই মুমিনদের ভরসা করা উচিত। এই জবাব অস্বীকার করে না যে কষ্ট এসেছিল। এটি অস্বীকার করে মুনাফিকদের ব্যাখ্যাটিকে। যা এসেছে তা দুর্ঘটনাও নয়, ভুল হিসাবও নয়; তা তাকদীর — আঘাত করার আগেই লেখা, তাঁরই হাতে যিনি এর মধ্য দিয়েও আমাদের মাওলা থেকে যান।"
          }
        ]
      },
      {
        "h": {
          "en": "Written For Us, Not Against Us",
          "bn": "লেখা আমাদের পক্ষে, বিপক্ষে নয়"
        },
        "p": [
          {
            "en": "The Arabic contains a choice of preposition that the commentators, as-Sa'di among them, refuse to pass over. The verse does not say what Allah has written 'alayna, against us, but kataba lana, written for us. The event the hypocrites call a disaster is filed, in the believer's own sentence, under things granted. For people who fight and spend expecting one of two good ends, victory or reward with Allah, even the outward loss lands in the credit column.",
            "bn": "আরবিতে এখানে অব্যয় বাছাইয়ের এমন এক সূক্ষ্মতা আছে, যা মুফাসসিরগণ — তাঁদের মধ্যে আস-সা'দীও — এড়িয়ে যেতে রাজি নন। আয়াতটি বলে না, আল্লাহ যা 'আলাইনা' — আমাদের বিরুদ্ধে — লিখেছেন; বলে 'কাতাবা লানা' — আমাদের জন্য, আমাদের পক্ষে লিখেছেন। মুনাফিকরা যাকে বিপর্যয় বলে, মুমিনের নিজের বাক্যে সেই ঘটনাই নথিভুক্ত হয় প্রাপ্তির খাতায়। যারা লড়ে ও ব্যয় করে দুটি শুভ পরিণতির একটির আশায় — বিজয়, নয়তো আল্লাহর কাছে প্রতিদান — তাদের কাছে বাহ্যিক ক্ষতিটুকুও জমার ঘরে পড়ে।"
          },
          {
            "en": "Then comes huwa Mawlana, He is our Protector. Placed between the decree and the command to rely, the name does the explaining. A decree from a stranger might be endured; a decree from one's Mawla, the guardian who claims you and whom you claim, is trusted. The verse is not asking believers to accept that fate is unavoidable, which any fatalist manages. It asks them to accept that the One writing it is theirs.",
            "bn": "তারপর আসে 'হুয়া মাওলানা' — তিনিই আমাদের অভিভাবক। তাকদীরের কথা ও ভরসার আদেশের মাঝখানে বসে নামটিই ব্যাখ্যার কাজ সারে। অচেনা কারও ফয়সালা হয়তো সহ্য করা যায়; কিন্তু নিজের মাওলার ফয়সালা — সেই অভিভাবক, যিনি তোমাকে আপন বলে দাবি করেন এবং যাঁকে তুমি আপন বলে দাবি করো — তার ওপর ভরসা করা যায়। আয়াতটি মুমিনদের বলছে না, নিয়তি অনিবার্য বলে মেনে নাও — তা তো যেকোনো অদৃষ্টবাদীই পারে। এটি বলছে মেনে নিতে যে যিনি লিখছেন তিনি তাদেরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Precaution Versus Reliance",
          "bn": "সাবধানতা বনাম তাওয়াক্কুল"
        },
        "p": [
          {
            "en": "It matters that the hypocrites' boast in 9:50 was about precaution. Islam does not oppose precaution; the same surah's campaigns involved provisions, mounts and planning, and the believers are nowhere told to abandon means. The difference is in what each party believes the means accomplish. The hypocrite believes his precaution is what kept him safe, so the struck are simply the careless. The believer takes the means and knows the outcome was written above them.",
            "bn": "লক্ষণীয়, 9:50 আয়াতে মুনাফিকদের অহংকার ছিল সাবধানতা নিয়েই। ইসলাম সাবধানতার বিরোধী নয়; এই সূরারই অভিযানগুলোতে ছিল রসদ, বাহন ও পরিকল্পনা, আর মুমিনদের কোথাও বলা হয়নি উপকরণ ছেড়ে দিতে। পার্থক্য এখানে — উপকরণ কী অর্জন করে, তা নিয়ে দুই পক্ষের বিশ্বাসে। মুনাফিক বিশ্বাস করে তার সাবধানতাই তাকে বাঁচিয়েছে, কাজেই যারা আক্রান্ত তারা স্রেফ অসতর্ক। মুমিন উপকরণ গ্রহণ করে, আর জানে ফলাফল তার ঊর্ধ্বে লেখা হয়ে আছে।"
          },
          {
            "en": "This is why the verse can end by commanding tawakkul, reliance, in the same breath as decree. Reliance is not the absence of effort but the placement of trust after effort. At-Tirmidhi relates the counsel of the Prophet ﷺ to Ibn Abbas (RA): know that if the whole nation gathered to harm you, they could not harm you except by something Allah had already written against you; the pens have been lifted and the pages have dried.",
            "bn": "এ কারণেই আয়াতটি তাকদীরের কথার সঙ্গে একই নিঃশ্বাসে তাওয়াক্কুল — ভরসার — আদেশ দিয়ে শেষ হতে পারে। ভরসা মানে চেষ্টার অনুপস্থিতি নয়, বরং চেষ্টার পরে আস্থাটি কোথায় রাখা হলো, সেটি। তিরমিযী নবী ﷺ-এর সেই উপদেশ বর্ণনা করেন ইবনে আব্বাস (রাঃ)-কে: জেনে রাখো, গোটা জাতি জড়ো হয়েও তোমার ক্ষতি করতে পারবে না — কেবল ততটুকু ছাড়া, যা আল্লাহ আগেই তোমার ওপর লিখে রেখেছেন; কলম তুলে নেওয়া হয়েছে, পৃষ্ঠাগুলো শুকিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wider Quranic Frame",
          "bn": "কুরআনের বৃহত্তর কাঠামো"
        },
        "p": [
          {
            "en": "Other verses complete the picture this one sketches. In 57:22-23, no calamity strikes the earth or yourselves except that it is in a book before We bring it into being, and the stated purpose follows: so that you neither despair over what escapes you nor exult over what He gives you. Belief in the prior writing is not offered as a puzzle about free will; it is offered as a regulator of the two emotions that most distort a life, grief and vanity.",
            "bn": "অন্য আয়াতগুলো এই আয়াতের আঁকা ছবিটি সম্পূর্ণ করে। 57:22-23 আয়াতে: পৃথিবীতে বা তোমাদের নিজেদের ওপর এমন কোনো বিপদ আসে না, যা আমি ঘটানোর আগেই এক কিতাবে নেই; আর ঘোষিত উদ্দেশ্যটি এরপরই আসে — যেন যা হাতছাড়া হলো তার শোকে তোমরা ভেঙে না পড়ো, আর তিনি যা দিলেন তা নিয়ে অহংকার না করো। পূর্বলিখনে বিশ্বাসকে স্বাধীন ইচ্ছার ধাঁধা হিসেবে পেশ করা হয়নি; পেশ করা হয়েছে সেই দুটি আবেগের নিয়ন্ত্রক হিসেবে, যা জীবনকে সবচেয়ে বেশি বিকৃত করে — শোক ও দম্ভ।"
          },
          {
            "en": "And 64:11 adds the interior effect: no calamity strikes except by Allah's permission, and whoever believes in Allah, He guides his heart. The commentators read the guided heart as the one that, in the first shock, knows what it is looking at — decree from its Protector — and so settles. The sentence of 9:51 is the spoken form of that settled heart, which is why it is given as a thing to say, not merely to think.",
            "bn": "আর 64:11 যোগ করে ভেতরের প্রভাবটি: আল্লাহর অনুমতি ছাড়া কোনো বিপদ আসে না, আর যে আল্লাহর প্রতি ঈমান আনে, তিনি তার হৃদয়কে পথ দেখান। মুফাসসিরগণ পথপ্রাপ্ত হৃদয় বলতে সেই হৃদয়কে বোঝেন, যা প্রথম ধাক্কাতেই চিনে ফেলে সে কী দেখছে — নিজের অভিভাবকের ফয়সালা — আর তাই স্থির হয়ে যায়। 9:51 আয়াতের বাক্যটি সেই স্থির হৃদয়েরই উচ্চারিত রূপ; এ কারণেই এটি দেওয়া হয়েছে বলার জিনিস হিসেবে, শুধু ভাবার জিনিস হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Calm That Still Moves",
          "bn": "যে প্রশান্তি তবু চলে"
        },
        "p": [
          {
            "en": "The note behind this article observes that this certainty does not make the believer passive; it makes the believer calm. The proof is the verse's own setting. It was revealed among people preparing an arduous expedition to Tabuk in heat and scarcity. The sentence was not given to people in armchairs to excuse inaction, but to people already marching, so that fear of outcomes would not turn them back. Decree, rightly believed, is fuel for the risk-taking that obedience requires.",
            "bn": "এই লেখার পেছনের নোটটি লক্ষ করে: এই নিশ্চয়তা মুমিনকে নিষ্ক্রিয় করে না; করে প্রশান্ত। প্রমাণ আয়াতটির নিজের প্রেক্ষাপটেই। এটি নাযিল হয়েছিল এমন মানুষদের মাঝে, যারা প্রচণ্ড গরম ও অভাবের মধ্যে তাবুকের কঠিন অভিযানের প্রস্তুতি নিচ্ছিলেন। বাক্যটি আরামকেদারায় বসা লোকদের অলসতার অজুহাত হিসেবে দেওয়া হয়নি; দেওয়া হয়েছিল ইতিমধ্যে পথে নামা মানুষদের, যেন পরিণতির ভয় তাদের ফিরিয়ে না দেয়। তাকদীরে সঠিক বিশ্বাস সেই ঝুঁকি নেওয়ারই জ্বালানি, যা আনুগত্যের জন্য লাগে।"
          },
          {
            "en": "In ordinary life the verse works the same way at a smaller scale. Before a diagnosis, an interview, a hard conversation, the sentence can be said as it was revealed to be said. What it removes is not the event but the double burden — the event plus the belief that everything hangs on your management of it. Do what is yours to do; what strikes after that was written for you, by your Protector, and He does not write carelessly.",
            "bn": "দৈনন্দিন জীবনে আয়াতটি ছোট মাপে একইভাবে কাজ করে। কোনো রোগনির্ণয়ের আগে, চাকরির সাক্ষাৎকারের আগে, কঠিন কোনো কথোপকথনের আগে — বাক্যটি ঠিক সেভাবেই বলা যায়, যেভাবে বলার জন্য তা নাযিল হয়েছিল। এটি যা সরায় তা ঘটনাটি নয়, বরং দ্বিগুণ বোঝাটি — ঘটনা, আর তার সঙ্গে এই বিশ্বাস যে সবকিছু ঝুলে আছে তোমার ব্যবস্থাপনার ওপর। তোমার করণীয়টুকু করো; এরপর যা আঘাত করে তা তোমার জন্য লেখা হয়েছিল — তোমার অভিভাবকের হাতে, আর তিনি অযত্নে লেখেন না।"
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
          "bn": "ফিরিয়ে দেওয়া দানের পরে"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse comes after a refusal. 9:53 tells them to spend willingly or unwillingly, it will never be accepted from them; 9:54 gives the reasons, that they disbelieved in Allah and His Messenger ﷺ, that they come to prayer only lazily, and that they spend only unwillingly. Then our verse turns from their money to the Prophet's ﷺ eye, and 9:56 shows them swearing they are of you while they are not, a people afraid.",
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াত আসে একটি প্রত্যাখ্যানের পরে। ৯:৫৩ আয়াত তাদের বলে, খুশিমনে দাও বা অনিচ্ছায়, তোমাদের থেকে তা কখনো কবুল হবে না; ৯:৫৪ আয়াত কারণগুলো দেয়, তারা আল্লাহ আর তাঁর রাসূলকে ﷺ অস্বীকার করেছে, নামাযে আসে কেবল শৈথিল্য নিয়ে, আর দান করে কেবল অনিচ্ছা নিয়ে। এরপর আমাদের আয়াত তাদের টাকা থেকে মুখ ফেরায় নবীর ﷺ চোখের দিকে, আর ৯:৫৬ আয়াত দেখায় তারা কসম করে বলছে তারা তোমাদেরই লোক, অথচ তারা নয়; আসলে তারা ভীত এক দল।"
          },
          {
            "en": "The instruction itself is about looking rather than about them. Let not their wealth or their children impress you: an imperative addressed to the observer. Ibn Kathir reads it alongside two verses that do the same work, 20:131, do not extend your eyes toward what We have given various groups for enjoyment, the splendour of worldly life by which We test them; and 23:55-56, do they think that what We extend to them of wealth and children is because We hasten good things for them, rather they do not perceive.",
            "bn": "নির্দেশটা নিজেই তাদের নিয়ে নয়, তাকানো নিয়ে। তাদের ধন-সম্পদ আর সন্তান তোমার চোখ ধাঁধিয়ে না দিক: হুকুমটা দর্শকের উদ্দেশে। ইবনু কাসীর এটিকে পড়েন এমন দুটি আয়াতের পাশে রেখে যারা একই কাজ করে; ২০:১৩১, তুমি চোখ বাড়িয়ে দিও না ওই সবের দিকে যা আমি তাদের বিভিন্ন দলকে ভোগের জন্য দিয়েছি, দুনিয়ার জীবনের সৌন্দর্য, যা দিয়ে আমি তাদের পরীক্ষা করি; আর ২৩:৫৫-৫৬, তারা কি ভাবে আমি তাদের যে সম্পদ আর সন্তান দিয়ে বাড়িয়ে দিই তা তাদের জন্য কল্যাণ ত্বরান্বিত করা, না, তারা বুঝে না।"
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
            "bn": "তাবারী শুরুতেই সোজাসুজি বলেন যে ব্যাখ্যা নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে, আর মতভেদটি শাস্তি কখন হবে তা নিয়ে। প্রথম পাঠে দুনিয়ার জীবনে কথাটি বাক্যের আগের অংশের সঙ্গে যায় আর শাস্তি হয় আখিরাতে: দুনিয়ার জীবনে তাদের ধন-সম্পদ আর সন্তান তোমার চোখ ধাঁধিয়ে না দিক, কারণ আল্লাহ কেবল চান আখিরাতে সেগুলো দিয়ে তাদের শাস্তি দিতে। কাতাদা এটিকে বলেন কথার স্থান বদলের একটি রূপ, আর ইবনু আব্বাস (রাঃ) থেকেও একই অর্থে বর্ণিত আছে।"
          },
          {
            "en": "On the second reading the punishment is here, and it comes through the obligations. Al-Hasan is reported as glossing it: by the taking of the zakah and the expenditure in the path of Allah. Ibn Kathir gives the same meaning and attributes it to al-Hasan al-Basri. On that reading what looks like a tax to them is the punishment itself, because they part with what their hearts are attached to and get no reward for the parting.",
            "bn": "দ্বিতীয় পাঠে শাস্তি এখানেই, আর সেটা আসে ফরজ দায়িত্বের ভেতর দিয়ে। হাসান থেকে বর্ণিত, তিনি এর ব্যাখ্যায় বলেন: যাকাত নেওয়া আর আল্লাহর পথে খরচ করার মাধ্যমে। ইবনু কাসীর একই অর্থ দেন আর সেটা হাসান বসরীর দিকে নিসবত করেন। এ পাঠে তাদের কাছে যা কর বলে মনে হয় সেটাই শাস্তি, কারণ যে জিনিসের সঙ্গে তাদের অন্তর জড়ানো সেটা তারা হাত থেকে দেয়, আর দেওয়ার কোনো প্রতিদানও পায় না।"
          },
          {
            "en": "The third reading is Ibn Zayd's, and at-Tabari records it in one line that changes the subject: by the calamities in it, which are punishment for them and, for the believers, reward. The same event, the same loss, sorted by whose it is. None of the three readings is dismissed by at-Tabari, and a reader who holds all three at once has the verse's range: a settlement that may fall due later, or already be running through what is owed, or already be arriving as trouble.",
            "bn": "তৃতীয় পাঠটি ইবনু যায়দের, আর তাবারী সেটি লিখে রাখেন এক লাইনে, যা প্রসঙ্গটাই বদলে দেয়: এর ভেতরের বিপদ-আপদ দিয়ে, যা তাদের জন্য শাস্তি, আর মু'মিনদের জন্য প্রতিদান। একই ঘটনা, একই ক্ষতি, ভাগ হয়ে যায় সেটা কার তা দিয়ে। তিনটি পাঠের একটিকেও তাবারী উড়িয়ে দেন না; আর যে পাঠক তিনটিই একসঙ্গে ধরে রাখেন, তাঁর হাতে থাকে আয়াতের গোটা পরিসর: এমন এক হিসাব, যা পরে দেনা হয়ে দাঁড়াতে পারে, কিংবা যা এখনই চলছে পাওনা জিনিসের ভেতর দিয়ে, কিংবা যা এখনই আসছে ঝামেলার চেহারায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Cost to Get",
          "bn": "পেতে গিয়ে কী খরচ হলো"
        },
        "p": [
          {
            "en": "As-Sa'di supplies a fourth account of the punishment, and it is the one a modern reader will recognise fastest. What is meant by the punishment here, he writes, is what reaches them of hardship in acquiring it and the intense striving for that, and the heart's preoccupation with it, and the body's fatigue. Then he weighs it: if you set their pleasures in it against their hardships in it, there would be no comparison between them.",
            "bn": "শাস্তির চতুর্থ একটি ব্যাখ্যা দেন সা'দী, আর আধুনিক পাঠক সবচেয়ে দ্রুত চিনবেন এটিকেই। তিনি লেখেন, এখানে শাস্তি বলতে বোঝানো হচ্ছে সেটা জোগাড় করতে গিয়ে তাদের যে কষ্ট হয় আর সেজন্য যে কঠিন দৌড়াদৌড়ি, আর সেটা নিয়ে অন্তরের দুশ্চিন্তা, আর শরীরের ক্লান্তি। এরপর তিনি ওজন করেন: এতে তাদের যে সুখ আর এতে তাদের যে কষ্ট, দুটোকে পাশে রাখলে এদের মধ্যে কোনো তুলনাই হয় না।"
          },
          {
            "en": "His conclusion follows from the arithmetic rather than from the threat: since it distracted them from Allah and His remembrance, it became a bane upon them even in this world. And the greatest of its banes, he says, is that their hearts become attached to it and their will does not travel beyond it, so it becomes the end of what they seek and the limit of what they want, and no share for the hereafter is left in their hearts. The verse's last clause is then not a separate punishment but the destination of that attachment.",
            "bn": "তাঁর সিদ্ধান্তটা আসে হুমকি থেকে নয়, ওই হিসাব থেকেই: যেহেতু সেটা তাদের আল্লাহ আর তাঁর স্মরণ থেকে সরিয়ে রাখল, তাই সেটা দুনিয়াতেও তাদের জন্য বিপদ হয়ে দাঁড়াল। আর এর সবচেয়ে বড় বিপদ, তিনি বলেন, এই যে তাদের অন্তর সেটার সঙ্গে জড়িয়ে যায় আর তাদের ইচ্ছা সেটা ছাড়িয়ে আর কোথাও যায় না; তাই সেটাই হয়ে দাঁড়ায় তাদের চাওয়ার শেষ আর তাদের আকাঙ্ক্ষার সীমা, আর অন্তরে আখিরাতের জন্য কোনো ভাগই আর থাকে না। তাহলে আয়াতের শেষ কথাটি আলাদা কোনো শাস্তি নয়, ওই জড়িয়ে যাওয়ার গন্তব্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Souls That Depart Refusing",
          "bn": "অস্বীকার নিয়েই বেরিয়ে যাওয়া প্রাণ"
        },
        "p": [
          {
            "en": "The verb in the closing clause is tazhaq, used of a soul going out under pressure, and the state named with it is unbelief. As-Sa'di ends his entry on it with a question rather than a statement: what punishment is greater than this one, which entails lasting wretchedness and a clinging regret? The wealth and children of the opening are not mentioned again, which is the point. They have done their work by then and the verse has followed them to where they led.",
            "bn": "শেষ কথাটির ক্রিয়া তাযহাক, যা ব্যবহৃত হয় চাপের মুখে প্রাণ বেরিয়ে যাওয়া বোঝাতে; আর তার সঙ্গে যে অবস্থার নাম আসে তা কুফর। সা'দী নিজের আলোচনা এখানে শেষ করেন কোনো বক্তব্য দিয়ে নয়, একটি প্রশ্ন দিয়ে: এ শাস্তির চেয়ে বড় শাস্তি আর কী, যার সঙ্গে জড়িয়ে আছে চিরস্থায়ী দুর্ভাগ্য আর লেগে থাকা আফসোস? শুরুর সেই ধন-সম্পদ আর সন্তানের কথা আর একবারও আসে না, আর ওটাই আসল কথা। ততক্ষণে ওরা নিজেদের কাজ সেরে ফেলেছে, আর আয়াত ওদের পিছু পিছু গিয়ে পৌঁছেছে ওরা যেখানে নিয়ে গেছে সেখানেই।"
          },
          {
            "en": "The whole sentence is repeated almost exactly at 9:85, thirty verses later, which is worth noticing for what it says about the surah's method rather than about the verse. A warning about admiring the comfortable is issued twice in one surah, in two different contexts, in nearly identical words. Whatever else it is, the repetition is a measure of how easily the mistake is made.",
            "bn": "গোটা বাক্যটি প্রায় হুবহু আবার আসে ৯:৮৫ আয়াতে, ত্রিশ আয়াত পরে; আর এটা খেয়াল করার মতো, তবে আয়াতটার সম্পর্কে নয়, সূরার পদ্ধতির সম্পর্কে। আরামে থাকা লোকদের দেখে মুগ্ধ হওয়া নিয়ে হুঁশিয়ারি এক সূরাতেই দুবার দেওয়া হয়, দুটি আলাদা প্রসঙ্গে, প্রায় একই শব্দে। এ পুনরাবৃত্তি আর যা-ই হোক, এটা অন্তত এ ভুলটা কত সহজে হয় তার একটা মাপ।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses About Being Given",
          "bn": "দেওয়া হওয়া নিয়ে আয়াত"
        },
        "p": [
          {
            "en": "3:178 states the principle underneath all of this: let not those who disbelieve think that Our extending their time is better for them; We extend it only that they may increase in sin. That is the same structure as our verse, a gift read as favour and functioning as something else. 23:55-56 puts it as a question about perception, and ends by saying they do not perceive it, which is the detail that should make a reader cautious about his own case.",
            "bn": "এ সবের নিচের নীতিটি বলে দেয় ৩:১৭৮ আয়াত: যারা কুফরী করে তারা যেন না ভাবে আমি তাদের অবকাশ দিচ্ছি বলে সেটা তাদের জন্য ভালো; আমি অবকাশ দিই কেবল যাতে তারা গুনাহে বাড়ে। এ গড়নটা আমাদের আয়াতেরই মতো, দান পড়া হচ্ছে অনুগ্রহ হিসেবে আর কাজ করছে অন্য কিছু হিসেবে। ২৩:৫৫-৫৬ আয়াত কথাটা রাখে বোঝা নিয়ে এক প্রশ্ন হিসেবে, আর শেষ করে এ কথা বলে যে তারা সেটা বুঝে না; আর এ খুঁটিনাটিটাই পাঠককে নিজের বেলায় সাবধান করে দেওয়া উচিত।"
          },
          {
            "en": "20:131 gives the instruction in its gentlest form, addressed to the Prophet ﷺ himself, and adds the comparison our verse leaves out: the provision of your Lord is better and more enduring. And 8:28 with 64:15 give the same two nouns, wealth and children, their settled status in this vocabulary, that they are a trial, with a great reward kept elsewhere.",
            "bn": "নির্দেশটির সবচেয়ে কোমল রূপ দেয় ২০:১৩১ আয়াত, আর সেটা বলা হয় নবীকে ﷺ নিজেকেই; আর সে যোগ করে সেই তুলনাটা, যা আমাদের আয়াত বলে না: তোমার রবের দেওয়া রিযক উত্তম আর বেশি টেকসই। আর ৮:২৮ আর ৬৪:১৫ আয়াত সেই একই দুটি শব্দ, সম্পদ আর সন্তান, তাদের এ শব্দভাণ্ডারে থিতু হওয়া অবস্থানটা দিয়ে দেয়, ওরা পরীক্ষা, আর মহা প্রতিদান রাখা আছে অন্য কোথাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Other People's Lives",
          "bn": "অন্যের জীবন পড়া"
        },
        "p": [
          {
            "en": "The verse corrects the observer, which is the only person a reader can do anything about. It does not say the comfortable are hated or that comfort is a sign of anything; it forbids being impressed, and it gives a reason that has nothing to do with envy: the thing being admired is doing work its owner cannot see. Whether that work is the hardship of acquiring it, or the obligations it brings, or trouble that arrives as trouble, the mistake is the same mistake, reading a life from outside and calling it a verdict.",
            "bn": "আয়াত শুধরে দেয় দর্শককে, আর পাঠক কেবল ওই একজনকে নিয়েই কিছু করতে পারেন। সে বলে না যে আরামে থাকা লোকদের ঘৃণা করা হয়, বা আরাম কোনো কিছুর চিহ্ন; সে নিষেধ করে মুগ্ধ হওয়া, আর কারণ দেয় এমন একটা, যার সঙ্গে হিংসার কোনো সম্পর্ক নেই: যে জিনিসটা দেখে মুগ্ধ হওয়া হচ্ছে, সেটা এমন কাজ করে চলেছে যা তার মালিক দেখতে পায় না। সে কাজ যদি হয় জোগাড় করার কষ্ট, কিংবা তার সঙ্গে আসা দায়িত্ব, কিংবা ঝামেলা হয়ে আসা ঝামেলা, ভুলটা একই ভুল, বাইরে থেকে একটা জীবন পড়ে সেটাকে রায় বলে ডাকা।"
          },
          {
            "en": "Turned inward it is sharper. As-Sa'di's arithmetic can be run on one's own year: set what a pursuit has given against what it has taken in sleep, temper, attention and time that was owed elsewhere. And his warning about the will that does not travel beyond the thing is testable too, because a person can ask what he would still want if this one matter were settled tomorrow, and notice how little comes to mind.",
            "bn": "নিজের দিকে ফিরিয়ে দিলে এটা আরও ধারালো। সা'দীর সেই হিসাবটা নিজের এক বছরের উপরেই কষে দেখা যায়: কোনো দৌড় যা দিয়েছে আর যা নিয়েছে, ঘুম, মেজাজ, মনোযোগ আর অন্য কোথাও পাওনা ছিল এমন সময়ের হিসাবে, দুটোকে পাশে রাখুন। আর ইচ্ছা যে জিনিসটা ছাড়িয়ে আর কোথাও যায় না, তাঁর সেই হুঁশিয়ারিটাও যাচাই করা যায়; কারণ মানুষ নিজেকে জিজ্ঞেস করতে পারে, এ একটা বিষয় কাল মিটে গেলে সে তখনো কী চাইত, আর খেয়াল করতে পারে কত অল্প কিছুই মনে আসে।"
          },
          {
            "en": "Ibn Zayd's reading has the most immediate use of the three, because it applies to a day rather than to a life. The same loss, he says, is punishment for one man and reward for another, which means the event itself settles nothing and the sorting happens in how it is received. That is worth remembering in both directions: a hard week is not evidence of anyone's standing, mine or my neighbour's, and the only part of it I can affect is which of the two things it turns into in my hands.",
            "bn": "তিনটির মধ্যে সবচেয়ে হাতের কাছের কাজটা ইবনু যায়দের পাঠেই, কারণ সেটা খাটে একটা গোটা জীবনের উপর নয়, একটা দিনের উপর। তিনি বলেন, একই ক্ষতি একজনের জন্য শাস্তি আর আরেকজনের জন্য প্রতিদান; অর্থাৎ ঘটনাটা নিজে কিছুই ঠিক করে দেয় না, ভাগটা হয় সেটা কীভাবে নেওয়া হলো তার ভেতরে। এটা দুদিকেই মনে রাখার মতো: কঠিন একটা সপ্তাহ কারও অবস্থানের দলিল নয়, আমার নয়, পাশের বাড়ির লোকেরও নয়; আর এর যে অংশটার উপর আমার হাত আছে তা কেবল এই, আমার হাতে সেটা ওই দুটোর কোনটা হয়ে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer About Your Eyes",
          "bn": "নিজের চোখ নিয়ে দোয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication, and the nearest thing the Quran puts beside it is the sentence 20:131 adds after the same instruction: the provision of your Lord is better and more enduring. Said as a reminder rather than a request, it is the exact counterweight to being impressed, because it does not deny that what the other man has is good; it says only that something else is better and lasts longer.",
            "bn": "আয়াতে কোনো দোয়া নেই, আর কুরআন এর পাশে যা রাখে তা ২০:১৩১ আয়াতের সেই বাক্যটি, যা একই নির্দেশের পরে যোগ করা হয়: তোমার রবের দেওয়া রিযক উত্তম আর বেশি টেকসই। অনুরোধ হিসেবে নয়, মনে করিয়ে দেওয়া হিসেবে বললে এটাই মুগ্ধ হওয়ার ঠিক পাল্টা ওজন; কারণ সে অস্বীকার করে না যে অন্য লোকটির কাছে যা আছে তা ভালো; সে কেবল বলে, অন্য একটা জিনিস তার চেয়ে ভালো আর বেশি দিন থাকে।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, do not let my eyes settle on what You have given somebody else, and do not let what You have given me become the thing I am punished by. It is assembled from the verse's opening imperative and as-Sa'di's gloss on its middle clause, and it is not a Sunnah du'a. The wording of 20:131 is the safer of the two to carry.",
            "bn": "এ আয়াতের নিজের শব্দে একটা বাক্য যোগ করা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, আপনি অন্য কাউকে যা দিয়েছেন তার উপর আমার চোখ থিতু হতে দেবেন না; আর আপনি আমাকে যা দিয়েছেন, সেটাকে সেই জিনিস হয়ে যেতে দেবেন না যা দিয়ে আমাকে শাস্তি দেওয়া হয়। এটি আয়াতের শুরুর হুকুম আর তার মাঝের কথাটির উপর সা'দীর ব্যাখ্যা জুড়ে বানানো, আর এটি সুন্নাহর দোয়া নয়। ২০:১৩১ আয়াতের শব্দগুলোই দুটোর মধ্যে বহন করার জন্য বেশি নিরাপদ।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About What Impresses You",
          "bn": "কী আপনাকে মুগ্ধ করে তা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Whose life impresses me at the moment, and what exactly is it that impresses me about it? The verse corrects the admiration rather than the other person's situation, so what would change in a week if I stopped ranking people by their circumstances? And something I am chasing may already be charging me: what has this year's pursuit taken from my sleep, my temper and my attention?",
            "bn": "এখন কার জীবন আমার চোখ ধাঁধিয়ে দেয়, আর ঠিক কোন জিনিসটা আমাকে সেখানে মুগ্ধ করে? আয়াত শুধরে দেয় মুগ্ধতাকে, অন্য লোকের অবস্থাকে নয়; তাহলে মানুষকে তাদের অবস্থা দিয়ে সারিতে বসানো ছেড়ে দিলে এক সপ্তাহে কী বদলাত? আর যে জিনিসের পেছনে আমি দৌড়াচ্ছি সেটা হয়তো এখনই আমার কাছ থেকে দাম নিচ্ছে: এ বছরের দৌড় আমার ঘুম, আমার মেজাজ আর আমার মনোযোগ থেকে কী নিয়েছে?"
          },
          {
            "en": "Two more. The end the verse names is a soul departing while still refusing, so what in my life is pleasant enough that I would rather not examine where it is taking me? And the people described cannot see this while they are holding it: who is close enough to me to say something like it about my own hands, and would I actually listen if they did?",
            "bn": "আরও দুটি। আয়াত যে শেষের নাম নেয় তা অস্বীকারের অবস্থাতেই প্রাণ বেরিয়ে যাওয়া; তাহলে আমার জীবনে এমন কী আছে যা এত আরামের যে সেটা আমাকে কোথায় নিয়ে যাচ্ছে তা আমি বরং যাচাই করতেই চাই না? আর যাদের কথা বলা হচ্ছে, ধরে থাকা অবস্থায় তারা এটা দেখতে পায় না: আমার নিজের হাতের ব্যাপারে এ ধরনের কথা বলার মতো ঘনিষ্ঠ কে আছে, আর তিনি বললে আমি কি সত্যিই শুনব?"
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
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াত জবাব দেয় দুই আয়াত আগে লিখে রাখা একটি অভিযোগের। ৯:৫৮ আয়াত বলে, তাদের মধ্যে এমন লোক আছে যারা সদকা নিয়ে তোমার প্রতি দোষারোপ করে: তা থেকে দেওয়া হলে তারা খুশি, আর না দেওয়া হলে সঙ্গে সঙ্গেই ক্ষুব্ধ। ৯:৫৯ আয়াত জবাব দেয় এ কথা বলে যে তাদের বদলে কী বলা উচিত ছিল, আমাদের জন্য আল্লাহই যথেষ্ট, আর তিনি নিজের অনুগ্রহ থেকে আমাদের দেবেন। এরপর আমাদের আয়াত তালিকাটা প্রকাশ করে দিয়ে বিষয়টার ফয়সালা করে, আর ৯:৬১ আয়াত এগিয়ে যায় তাদের দিকে যারা নবীকে ﷺ কষ্ট দেয়।"
          },
          {
            "en": "Ibn Kathir states the logic of that sequence in a sentence: after Allah mentioned the protest the hypocrites made to the Prophet ﷺ about the distribution of the alms, He stated that it is He who divided them, explained their rulings and decided their division, and did not delegate this to anyone else. So the answer to a complaint about who decides is not an argument but a schedule, and the schedule comes with a stamp at the end of it, an obligation from Allah.",
            "bn": "ওই ধারাবাহিকতার যুক্তিটা ইবনু কাসীর বলে দেন এক বাক্যে: সদকা বণ্টন নিয়ে মুনাফিকরা নবীর ﷺ কাছে যে আপত্তি তুলেছিল, আল্লাহ সেটার উল্লেখ করার পর জানিয়ে দিলেন যে তিনিই সেগুলো ভাগ করেছেন, তার বিধান বলে দিয়েছেন আর তার বণ্টনের ফয়সালা করেছেন, আর এ কাজ তিনি আর কারও হাতে দেননি। অর্থাৎ কে ঠিক করবে সে নিয়ে অভিযোগের জবাব কোনো তর্ক নয়, একটি তালিকা; আর তালিকাটির শেষে একটা সিলও আছে, আল্লাহর পক্ষ থেকে ফরজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Eight Shares, and No More",
          "bn": "আটটি ভাগ, বেশি নয়"
        },
        "p": [
          {
            "en": "As-Sa'di begins by narrowing the word itself: the charities here mean the obligatory zakah, and his evidence is that voluntary charity is for anyone and nobody is singled out for it. Then the restriction: the alms are for these mentioned and no others, because He confined them to them, and they are eight kinds. The particle at the head of the verse does that work, and the closing clause seals it as an obligation He apportioned, following His knowledge and His wisdom.",
            "bn": "সা'দী শুরু করেন শব্দটিকেই সংকুচিত করে: এখানে সদকা মানে ফরজ যাকাত, আর তাঁর দলিল এই যে নফল সদকা সবার জন্যই, তাতে কাউকে আলাদা করা হয় না। এরপর সেই সীমা: সদকা এ উল্লেখ করা লোকদের জন্যই, অন্য কারও জন্য নয়, কারণ তিনি সেটা এদের মধ্যেই আটকে দিয়েছেন; আর এরা আট শ্রেণি। আয়াতের মাথার শব্দটিই এ কাজটা করে, আর শেষ কথাটি এতে সিল মেরে দেয় এ বলে যে এ ফরজ তিনিই নির্ধারণ করেছেন, আর সেটা তাঁর জানা আর তাঁর হিকমতের অনুসারী।"
          },
          {
            "en": "The eight, in the order the verse gives them: the poor, the needy, those employed to collect it, those whose hearts are to be won, the freeing of necks, the debtors, the path of Allah, and the traveller cut off from home. Two are named for what they lack, one for work done, one for a diplomatic purpose, one for a legal status, one for a liability, one for a cause, one for a circumstance. Only the first two are what most readers picture when they hear the word.",
            "bn": "আয়াত যে ক্রমে দেয়, সে ক্রমেই আটটি: ফকীর, মিসকীন, যারা এটি আদায়ের কাজে নিয়োজিত, যাদের অন্তর জয় করা দরকার, গর্দান মুক্ত করা, ঋণগ্রস্তরা, আল্লাহর পথ, আর ঘর থেকে বিচ্ছিন্ন মুসাফির। দুজনের নাম আসে তাদের যা নেই সে কারণে, একজনের করা কাজের জন্য, একজনের একটি কূটনৈতিক উদ্দেশ্যে, একজনের একটি আইনি অবস্থার জন্য, একজনের একটি দায়ের জন্য, একজনের একটি উদ্দেশ্যের জন্য, আর একজনের একটি পরিস্থিতির জন্য। শব্দটা শুনলে অধিকাংশ পাঠকের চোখে যা ভাসে, তা কেবল প্রথম দুটিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Faqir, and Miskin",
          "bn": "ফকীর, আর মিসকীন"
        },
        "p": [
          {
            "en": "At-Tabari reports that the exegetes differed over how the first two differ, and the reports he gathers turn on asking. Some said the faqir is the needy man who restrains himself from asking and the miskin is the needy man who asks. Al-Hasan drew it physically: the faqir is the one sitting in his house, the miskin the one who goes about. Ibn Abbas (RA) is reported saying the masakin are those who go around and the fuqara' are the poor of the Muslims, and Jabir ibn Zayd and az-Zuhri are carried to similar effect.",
            "bn": "তাবারী জানান, প্রথম দুটির ফারাক নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে, আর তিনি যে বর্ণনাগুলো জমা করেন সেগুলো ঘোরে চাওয়া নিয়ে। কেউ বলেছেন, ফকীর সেই অভাবী যে চাওয়া থেকে নিজেকে বিরত রাখে, আর মিসকীন সেই অভাবী যে চায়। হাসান কথাটা টানেন শরীরের দিক থেকে: ফকীর সে যে নিজের ঘরে বসে থাকে, মিসকীন সে যে ঘুরে বেড়ায়। ইবনু আব্বাস (রাঃ) থেকে বর্ণিত, মিসকীনরা তারাই যারা ঘুরে বেড়ায় আর ফকীররা মুসলিমদের অভাবীরা; আর জাবির ইবনু যায়দ ও যুহরী থেকেও একই ধরনের কথা আনা হয়।"
          },
          {
            "en": "Ibn Kathir lists the same division and names Ibn Abbas (RA), Mujahid, al-Hasan al-Basri and Ibn Zayd for it, that the faqir is graceful and does not ask while the miskin follows after people begging, and he adds Qatadah's different cut, that the faqir is the ill person and the miskin the physically fit. As-Sa'di replaces the whole question with a measure: the faqir finds nothing, or finds part of his sufficiency short of half of it; the miskin finds half or more but not the whole of it, since if he found it he would be rich.",
            "bn": "ইবনু কাসীর একই ভাগটি তালিকা করেন আর এর জন্য নাম নেন ইবনু আব্বাস (রাঃ), মুজাহিদ, হাসান বসরী ও ইবনু যায়দের, যে ফকীর আত্মসম্মান রেখে চলে আর চায় না, আর মিসকীন মানুষের পিছনে পিছনে চেয়ে বেড়ায়; আর তিনি যোগ করেন কাতাদার আলাদা দাগটি, ফকীর অসুস্থ লোক আর মিসকীন শরীরে সক্ষম। সা'দী গোটা প্রশ্নটার জায়গায় বসিয়ে দেন একটি মাপ: ফকীর কিছুই পায় না, কিংবা নিজের প্রয়োজনের এমন অংশ পায় যা অর্ধেকেরও কম; মিসকীন অর্ধেক বা তার বেশি পায়, তবে পুরোটা নয়, কারণ পুরোটা পেলে সে তো ধনীই হয়ে যেত।"
          },
          {
            "en": "As-Sa'di also explains why the poor come first, and the reason is a rule about lists: Allah began with them, and one begins only with the most important. Both are to be given, he says, what removes their poverty and their neediness. A hadith belongs here too, brought by Ibn Kathir among those for this category. Jami at-Tirmidhi 652 preserves from Abdullah ibn Amr (RA) that charity is not lawful for the rich nor for one who is physically fit, and at-Tirmidhi's grading of it is hasan.",
            "bn": "ফকীররা কেন আগে আসে, সা'দী সেটাও বুঝিয়ে দেন, আর কারণটা তালিকা নিয়ে একটি নিয়ম: আল্লাহ শুরু করেছেন তাদের দিয়ে, আর শুরু করা হয় কেবল সবচেয়ে জরুরিটা দিয়েই। তিনি বলেন, দুজনকেই দিতে হবে এমন পরিমাণ যা তাদের ফকীরি আর মিসকীনি দূর করে দেয়। একটি হাদীসও এখানেই বসে, যেটি ইবনু কাসীর এ শ্রেণির জন্য আনা হাদীসগুলোর মধ্যে রাখেন। জামি আত-তিরমিযীর ৬৫২ নম্বরে আবদুল্লাহ ইবনু আমর (রাঃ) থেকে রক্ষিত আছে, সদকা ধনীর জন্য হালাল নয়, আর শরীরে সক্ষম লোকের জন্যও নয়; আর তিরমিযী এটির মান দিয়েছেন হাসান।"
          }
        ]
      },
      {
        "h": {
          "en": "Wages, and Hearts",
          "bn": "মজুরি, আর অন্তর"
        },
        "p": [
          {
            "en": "The third share is not charity at all. As-Sa'di defines the workers on the zakah as everyone who has work and occupation in it, a keeper of it, a collector from those who owe it, a herdsman, a carrier, a scribe or the like, and he is careful about what they receive: they are given for their labour, and it is a wage for their work in it. A man may therefore take from the zakah without being poor, because what he is being paid for is the administering of it.",
            "bn": "তৃতীয় ভাগটি আসলে দানই নয়। সা'দী যাকাতের কর্মীদের সংজ্ঞা দেন এভাবে, যার এতে কাজ আর ব্যস্ততা আছে সে-ই, তার রক্ষক, যাদের কাছে পাওনা তাদের থেকে আদায়কারী, রাখাল, বাহক, লেখক বা এ ধরনের কেউ; আর তারা কী পায় সে ব্যাপারে তিনি সতর্ক: তাদের দেওয়া হয় তাদের শ্রমের জন্য, আর সেটা এতে তাদের কাজের মজুরি। অর্থাৎ কোনো লোক ফকীর না হয়েও যাকাত থেকে নিতে পারে, কারণ তাকে যে জিনিসের দাম দেওয়া হচ্ছে তা হলো এটি পরিচালনা করা।"
          },
          {
            "en": "The fourth is stranger to modern ears and as-Sa'di spells out its cases. Those whose hearts are to be won, he writes, is the chief obeyed among his people: one whose Islam is hoped for, or whose harm is feared, or whose faith is hoped to be strengthened by the gift, or through whom the Islam of his like is hoped for, or through whom the zakah may be collected from one who withholds it. He is given what achieves the winning over and the benefit. The share exists, that is, for a public purpose rather than for a private need.",
            "bn": "চতুর্থটি আধুনিক কানে আরও অন্যরকম শোনায়, আর সা'দী এর ঘটনাগুলো খুলে বলেন। তিনি লেখেন, যাদের অন্তর জয় করা দরকার মানে নিজের জাতির মধ্যে মান্য সেই সর্দার: যার ইসলাম গ্রহণের আশা করা হয়, কিংবা যার ক্ষতির ভয় করা হয়, কিংবা এ দান দিয়ে যার ঈমান মজবুত হওয়ার আশা করা হয়, কিংবা যার মাধ্যমে তার মতো লোকদের ইসলাম গ্রহণের আশা করা হয়, কিংবা যার মাধ্যমে যাকাত আদায় করা যায় এমন কারও কাছ থেকে যে দিতে চায় না। তাকে দেওয়া হয় এমন পরিমাণ যা দিয়ে জয় করা আর কল্যাণটা হাসিল হয়। অর্থাৎ এ ভাগটি আছে ব্যক্তিগত অভাবের জন্য নয়, একটি সামগ্রিক উদ্দেশ্যের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Necks, and Debts",
          "bn": "গর্দান, আর ঋণ"
        },
        "p": [
          {
            "en": "The fifth share is the freeing of necks. As-Sa'di reads it first of the mukatabun, those who have contracted to buy themselves from their masters and are striving to obtain what frees their necks, so they are helped with it from the zakah. Then he widens it twice: the ransoming of a Muslim captive held by disbelievers enters into this, indeed with more right, and it is permissible to free slaves from it outright, since that too falls under the words in the freeing of necks.",
            "bn": "পঞ্চম ভাগটি গর্দান মুক্ত করা। সা'দী এটিকে প্রথমে পড়েন মুকাতাবদের ব্যাপারে, যারা নিজেদের মালিকদের কাছ থেকে নিজেদের কিনে নেওয়ার চুক্তি করেছে আর নিজেদের গর্দান মুক্ত করার মতো অর্থ জোগাড়ের চেষ্টা করছে; কাজেই যাকাত থেকে তাদের এ কাজে সাহায্য করা হয়। এরপর তিনি এটিকে দুবার চওড়া করেন: কাফিরদের হাতে বন্দী মুসলিমকে মুক্ত করাও এর ভেতরে পড়ে, বরং আরও বেশি হকের সঙ্গে; আর এ থেকে সরাসরি দাস মুক্ত করাও জায়েজ, কারণ সেটাও গর্দান মুক্ত করা কথাটির ভেতরেই পড়ে।"
          },
          {
            "en": "The sixth he divides in two, and the first half is easy to miss. One kind of debtor is the man indebted for reconciling between people: when there is strife and discord between two groups and a man steps in between them with wealth he pays out to one side or to all of them, a share of the zakah is made his, so that he may be more energetic and firmer in his resolve — and, as-Sa'di says, he is given even if he is rich. The second kind borrowed for himself and then became unable to pay, and he is given what discharges his debt.",
            "bn": "ষষ্ঠটিকে তিনি দুই ভাগ করেন, আর প্রথম অর্ধেকটা সহজেই চোখ এড়ায়। এক ধরনের ঋণগ্রস্ত সেই লোক, যে মানুষের মধ্যে মিলমিশ করাতে গিয়ে ঋণে পড়েছে: দুই দলের মধ্যে যখন অশান্তি আর বিরোধ, আর কোনো লোক নিজের সম্পদ দিয়ে এক পক্ষকে বা সব পক্ষকে দিয়ে মাঝখানে দাঁড়ায়, তখন যাকাতের একটি ভাগ তার জন্য রাখা হয়, যাতে সে আরও উদ্যমী হয় আর তার সংকল্প আরও মজবুত হয়; আর সা'দী বলেন, তাকে দেওয়া হয় সে ধনী হলেও। দ্বিতীয় ধরনটি নিজের জন্য ঋণ নিয়েছিল, তারপর অপারগ হয়ে পড়েছে; তাকে দেওয়া হয় এমন পরিমাণ যা দিয়ে তার ঋণ শোধ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Path, and the Road",
          "bn": "পথ, আর রাস্তা"
        },
        "p": [
          {
            "en": "The seventh, in as-Sa'di's reading, is the volunteer: the fighters in the path of Allah who have no register and no stipend, given from the zakah what helps them, the price of a weapon or a mount, or provision for himself and his dependants, so that he may devote himself to the striving and his heart be at rest. The last clause is the reason the share exists at all, since a man worrying about his family at home is not free for anything.",
            "bn": "সা'দীর পাঠে সপ্তমটি স্বেচ্ছাসেবীর: আল্লাহর পথে সেই যোদ্ধারা যাদের কোনো তালিকা নেই আর কোনো ভাতাও নেই, যাদের যাকাত থেকে দেওয়া হয় তাদের কাজে লাগার মতো জিনিস, হাতিয়ারের দাম বা বাহনের দাম, কিংবা নিজের আর নিজের পরিবারের খরচ, যাতে সে জিহাদে নিজেকে সঁপে দিতে পারে আর তার অন্তর নিশ্চিন্ত থাকে। শেষ কথাটিই এ ভাগটি থাকার আসল কারণ, কারণ যে লোক ঘরে ফেলে আসা পরিবারের চিন্তায় থাকে সে কোনো কিছুর জন্যই মুক্ত নয়।"
          },
          {
            "en": "He then reports a wider application from the jurists and marks his own hesitation about one of them. Many of the jurists said that if a man able to earn devotes himself to seeking knowledge he is given from the zakah, because knowledge enters into striving in the path of Allah. They also said that a poor man may be given from it for his obligatory hajj, and as-Sa'di adds a bracketed reservation of his own about that second case. The eighth is the simplest: the stranger cut off in a land not his own, given what brings him to his town.",
            "bn": "এরপর তিনি ফকীহদের কাছ থেকে আরও চওড়া একটি প্রয়োগ জানান, আর তার একটির ব্যাপারে নিজের দ্বিধার কথাও লিখে রাখেন। অনেক ফকীহ বলেছেন, উপার্জনে সক্ষম কোনো লোক যদি ইলম অন্বেষণে নিজেকে সঁপে দেয় তবে তাকে যাকাত থেকে দেওয়া হবে, কারণ ইলম আল্লাহর পথে জিহাদের ভেতরেই পড়ে। তাঁরা এটাও বলেছেন যে ফরজ হজের জন্য কোনো ফকীরকে এ থেকে দেওয়া যেতে পারে; আর সা'দী দ্বিতীয় কথাটির ব্যাপারে নিজের একটি দ্বিধা বন্ধনীতে যোগ করে দেন। অষ্টমটি সবচেয়ে সহজ: নিজের দেশ নয় এমন জায়গায় আটকে পড়া অপরিচিত লোক, যাকে দেওয়া হয় এমন পরিমাণ যা তাকে তার শহরে পৌঁছে দেয়।"
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
            "bn": "সা'দী শেষ করেন তালিকাটির নিচের গড়নটা দিয়ে, আর তাঁর আলোচনায় সেটাই সবচেয়ে কাজের। তিনি লেখেন, জেনে রাখুন, এ আট শ্রেণি ফিরে যায় দুটি ব্যাপারে: একটি হলো তাকে দেওয়া হয় তার নিজের প্রয়োজন আর উপকারের জন্য, যেমন ফকীর আর মিসকীন আর তাদের মতো লোকেরা; অন্যটি হলো তাকে দেওয়া হয় তার প্রয়োজন পড়ার কারণে আর তার মাধ্যমে ইসলাম যে উপকার পায় সে কারণে। এভাবে পড়লে কর্মীরা, যাদের অন্তর জয় করা দরকার, মধ্যস্থতাকারী আর যোদ্ধা সবাই পড়ে এক কলামে, আর ফকীররা পড়ে অন্যটিতে।"
          },
          {
            "en": "Then his claim about what the system would do if it ran: Allah made this share obligatory in the wealth of the rich to close the particular and the general needs of Islam and the Muslims, and if the rich paid the zakah of their wealth in the lawful manner, no poor Muslim would remain, and there would be from the wealth what guards the frontiers and by which all the religious interests are achieved. It is stated as a consequence of the design rather than as a hope.",
            "bn": "এরপর তাঁর সেই দাবিটা, ব্যবস্থাটা সত্যিই চললে কী হতো: আল্লাহ ধনীদের সম্পদে এ ভাগটি ফরজ করেছেন ইসলাম আর মুসলিমদের বিশেষ আর সাধারণ প্রয়োজনগুলো মেটাতে; আর ধনীরা যদি নিজেদের সম্পদের যাকাত শরীয়তের নিয়মে আদায় করত, তবে মুসলিমদের মধ্যে কোনো ফকীরই বাকি থাকত না, আর সেই সম্পদ থেকেই পাওয়া যেত যা সীমান্ত পাহারা দেয় আর যা দিয়ে দীনের সব কল্যাণ হাসিল হয়। কথাটা বলা হচ্ছে কোনো আশা হিসেবে নয়, এ গড়নের ফল হিসেবে।"
          },
          {
            "en": "Beside the verse stand others that fill in its first column. 2:273 describes those to be given as poor restricted for the cause of Allah, unable to move about, whom an ignorant person would think self-sufficient because of their restraint. 51:19 puts a right in the wealth of the righteous for the petitioner and the deprived. 59:7 lists shares of a different kind of wealth so that it would not circulate only among the rich. And 2:177 places giving wealth, in spite of love for it, inside the definition of righteousness itself.",
            "bn": "আয়াতের পাশে দাঁড়ায় আরও কিছু আয়াত, যারা এর প্রথম কলামটা পূরণ করে। ২:২৭৩ আয়াত যাদের দিতে হবে তাদের বর্ণনা দেয় এমন অভাবী হিসেবে যারা আল্লাহর পথে আবদ্ধ, ঘুরে বেড়াতে পারে না, আর আত্মসংযমের কারণে অজ্ঞ লোক যাদের স্বাবলম্বী ভাবে। ৫১:১৯ আয়াত সৎ লোকদের সম্পদে একটি হক রাখে যাঞ্চাকারী আর বঞ্চিতের জন্য। ৫৯:৭ আয়াত অন্য এক ধরনের সম্পদের ভাগগুলো তালিকা করে, যাতে সেটা কেবল ধনীদের মধ্যেই ঘুরপাক না খায়। আর ২:১৭৭ আয়াত ভালোবাসা সত্ত্বেও সম্পদ দেওয়াকে বসিয়ে দেয় নেকির সংজ্ঞার ভেতরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Over the Share",
          "bn": "ভাগটির উপর এক দোয়া"
        },
        "p": [
          {
            "en": "The verse gives no supplication; it gives a schedule and a stamp. What the Quran puts next to it is 9:59, the sentence the complainers should have said and did not: sufficient for us is Allah, Allah will give us of His bounty, and so will His Messenger ﷺ, indeed we are desirous toward Allah. It is the prayer of someone who has just been left out of a distribution, which is exactly the situation this passage was addressing.",
            "bn": "আয়াতে কোনো দোয়া নেই; আছে একটি তালিকা আর একটি সিল। কুরআন এর পাশে যা রাখে তা ৯:৫৯ আয়াত, সেই বাক্যটি যা অভিযোগকারীদের বলা উচিত ছিল আর তারা বলেনি: আমাদের জন্য আল্লাহই যথেষ্ট, আল্লাহ নিজের অনুগ্রহ থেকে আমাদের দেবেন, আর তাঁর রাসূলও ﷺ; নিশ্চয়ই আমরা আল্লাহর দিকেই চেয়ে আছি। এটি এমন কারও দোয়া, যাকে সদ্য একটি বণ্টন থেকে বাদ রাখা হয়েছে; আর এ অংশ ঠিক ওই পরিস্থিতিটাই সামলাচ্ছিল।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, put my wealth where You named and not where I would have chosen, and keep me from resenting a share You gave to somebody else. It is assembled from the verse's list and from 9:58's complaint, and it is not a Sunnah du'a. The wording of 9:59 is the safer of the two and was supplied for precisely this use.",
            "bn": "এ আয়াতের নিজের শব্দে একটা বাক্য যোগ করা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, আমার সম্পদ সেখানেই রাখুন যেখানে আপনি নাম করেছেন, আমি নিজে যেখানে বাছতাম সেখানে নয়; আর আপনি অন্য কাউকে যে ভাগ দিয়েছেন তা নিয়ে আমাকে হিংসা করতে দেবেন না। এটি আয়াতের তালিকা আর ৯:৫৮ আয়াতের অভিযোগ জুড়ে বানানো, আর এটি সুন্নাহর দোয়া নয়। ৯:৫৯ আয়াতের শব্দগুলোই দুটোর মধ্যে বেশি নিরাপদ, আর সেগুলো দেওয়াই হয়েছিল ঠিক এ কাজে লাগানোর জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Eight Doors",
          "bn": "আট দরজা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Eight doors are named and most of us know one. Which of the eight have I actually thought about since the last time I paid? One share is a wage for administering it and one is for a mediator's debt, so does my idea of charity have room for anything that is not simply feeding a hungry person? And the list is closed by the word it opens with: have I ever sent zakah somewhere because it felt worthy rather than because it was named?",
            "bn": "আটটি দরজার নাম আসে, আর আমাদের অধিকাংশই একটা চেনে। শেষ যেবার যাকাত দিয়েছি, তার পর থেকে আটটির কোনটি নিয়ে আমি আসলে ভেবেছি? একটি ভাগ এটি পরিচালনার মজুরি আর একটি মধ্যস্থতাকারীর ঋণের জন্য; তাহলে দান নিয়ে আমার ধারণায় কেবল ক্ষুধার্তকে খাওয়ানো ছাড়া আর কিছুর জায়গা আছে কি? আর তালিকাটি বন্ধ করে দেয় যে শব্দ দিয়ে সেটি শুরু, সেটাই: আমি কি কখনো এমন কোথাও যাকাত পাঠিয়েছি, নাম করা ছিল বলে নয়, বরং যোগ্য মনে হয়েছিল বলে?"
          },
          {
            "en": "Two more. The verse ends on His knowledge and His wisdom rather than on anyone's satisfaction, so what in the distribution of resources around me am I quietly certain I could arrange better? And the complaint that occasioned all of this came from men who wanted a share: when I object to how something has been divided, what am I actually objecting to?",
            "bn": "আরও দুটি। আয়াত শেষ হয় কারও সন্তুষ্টিতে নয়, তাঁর জানা আর তাঁর হিকমতে; তাহলে আমার আশপাশের সম্পদ বণ্টনের কোন জায়গাটা আমি চুপচাপ নিশ্চিত যে আমি আরও ভালো সাজাতে পারতাম? আর এ সবের উপলক্ষ যে অভিযোগ, তা এসেছিল এমন লোকদের কাছ থেকে যারা নিজেদের ভাগ চাইছিল: কোনো কিছুর বণ্টন নিয়ে আমি যখন আপত্তি করি, আসলে আমার আপত্তিটা কী নিয়ে?"
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
          "bn": "প্রশ্ন, গল্প নয়"
        },
        "p": [
          {
            "en": "At-Tawbah is Madinan and this verse is put as a question to people who already have the answer. At-Tabari names them: has there not come to these hypocrites, who conceal disbelief in Allah and forbid faith in Him and in His Messenger ﷺ, the news of the nations before them, when they disobeyed Our messengers and opposed Our command, and what befell them of Our punishment? 9:69 has just told them their own conduct resembles the conduct of those people, and 9:71 will turn to the believers instead.",
            "bn": "সূরা তাওবা মাদানী, আর এ আয়াতটি প্রশ্ন হিসেবে রাখা হয় এমন লোকদের সামনে, যাদের হাতে জবাবটা আগেই আছে। তাবারী তাদের নাম বলে দেন: এ মুনাফিকদের কাছে কি পৌঁছায়নি, যারা আল্লাহর সঙ্গে কুফরী গোপন রাখে আর তাঁর ও তাঁর রাসূলের ﷺ প্রতি ঈমান আনতে নিষেধ করে, তাদের আগের জাতিগুলোর খবর, যখন তারা আমার রাসূলদের অবাধ্য হলো আর আমার হুকুমের বিরোধিতা করল, আর আমার শাস্তির কী নেমে এল তাদের উপর? ৯:৬৯ আয়াত সদ্যই তাদের বলেছে, তাদের নিজেদের আচরণ ওই লোকদের আচরণেরই মতো; আর ৯:৭১ আয়াত মুখ ফেরাবে মু'মিনদের দিকে।"
          },
          {
            "en": "At-Tabari then reads the list as Allah's own rhetorical questions, supplying for each people the punishment the Quran records elsewhere. The people of Nuh, when they belied My messenger and opposed My command, did I not drown them in the flood? And Ad, when they disobeyed My messenger Hud, did I not destroy them with a furious howling wind? And Thamud, when they disobeyed My messenger Salih, did I not destroy them with the earthquake and leave them lifeless in their courtyards? And the people of Ibrahim, did I not strip them of the blessing and destroy their king?",
            "bn": "এরপর তাবারী তালিকাটি পড়েন আল্লাহর নিজের প্রশ্নের ধরনে, আর প্রতিটি জাতির জন্য কুরআন অন্য জায়গায় যে শাস্তি লিখে রেখেছে সেটাই জুড়ে দেন। নূহের জাতি, যখন তারা আমার রাসূলকে মিথ্যা বলল আর আমার হুকুমের বিরোধিতা করল, আমি কি তাদের প্লাবনে ডুবিয়ে দিইনি? আর আদ, যখন তারা আমার রাসূল হূদের অবাধ্য হলো, আমি কি তাদের প্রচণ্ড গর্জনশীল ঝড়ে ধ্বংস করিনি? আর সামূদ, যখন তারা আমার রাসূল সালিহের অবাধ্য হলো, আমি কি তাদের ভূমিকম্পে ধ্বংস করে তাদের উঠানে নিষ্প্রাণ ফেলে রাখিনি? আর ইবরাহীমের জাতি, আমি কি তাদের নিয়ামত কেড়ে নিইনি আর তাদের রাজাকে ধ্বংস করিনি?"
          }
        ]
      },
      {
        "h": {
          "en": "Six Peoples, One Charge",
          "bn": "ছয় জাতি, এক অভিযোগ"
        },
        "p": [
          {
            "en": "The six are the people of Nuh (AS), Ad, Thamud, the people of Ibrahim (AS), the dwellers of Madyan and the overturned towns, which as-Sa'di identifies as the towns of the people of Lut (AS). Ibn Kathir goes through the same list with the same events, adding that Ad perished with the barren wind when they rejected Hud (AS), that Thamud were overtaken when they denied Salih (AS) and killed the camel, and that the dwellers of Madyan were the people of Shu'ayb (AS).",
            "bn": "ছয়টি হলো নূহের (আঃ) জাতি, আদ, সামূদ, ইবরাহীমের (আঃ) জাতি, মাদয়্যানের অধিবাসীরা আর উল্টে দেওয়া নগরগুলো; আর সা'দী শেষটিকে চিহ্নিত করেন লূতের (আঃ) জাতির নগরগুলো হিসেবে। ইবনু কাসীর একই তালিকা ধরে একই ঘটনাগুলোই বলেন, আর যোগ করেন যে আদ ধ্বংস হলো বন্ধ্যা ঝড়ে যখন তারা হূদকে (আঃ) অস্বীকার করল, সামূদকে পাকড়াও করা হলো যখন তারা সালিহকে (আঃ) মিথ্যা বলল আর উষ্ট্রীটিকে মেরে ফেলল, আর মাদয়্যানের অধিবাসীরা ছিল শুআইবের (আঃ) জাতি।"
          },
          {
            "en": "A small difference of wording sits inside that agreement. At-Tabari names the earthquake for Thamud, which is what 7:78 records, while Ibn Kathir names the cry, which is what 11:67 records of the same people. Both words are in the Quran of them, so neither commentator has strayed; each has reached for a different verse. The article notes it rather than resolving it, because the difference is a reminder that these accounts are distributed across surahs and are meant to be read together.",
            "bn": "ওই একমত হওয়ার ভেতরেই শব্দের একটি ছোট ফারাক আছে। তাবারী সামূদের জন্য নাম নেন ভূমিকম্পের, যা ৭:৭৮ আয়াত লিখে রাখে; আর ইবনু কাসীর নাম নেন সেই প্রচণ্ড শব্দের, যা একই জাতির ব্যাপারে ১১:৬৭ আয়াত লিখে রাখে। দুটি শব্দই কুরআনে তাদের ব্যাপারেই আছে, কাজেই কোনো মুফাসসিরই পথ হারাননি; দুজনে হাত বাড়িয়েছেন দুটি আলাদা আয়াতের দিকে। এ লেখা এটিকে মিটিয়ে না দিয়ে কেবল খেয়াল করিয়ে দিচ্ছে, কারণ ফারাকটা মনে করিয়ে দেয় যে এ বিবরণগুলো সূরায় সূরায় ছড়িয়ে আছে আর সেগুলো একসঙ্গে পড়ার জন্যই।"
          },
          {
            "en": "Then one clause covers all six: their messengers came to them with clear proofs. As-Sa'di glosses the proofs as the truth made plain and evident, clarifying the realities of things, and says simply that they denied them, so what Allah has related to us came upon them. The indictment is not that nobody told them. It is that the telling arrived, with evidence attached, and was refused, and the punishment followed the refusal rather than the ignorance.",
            "bn": "এরপর একটি কথাই ঢেকে দেয় ছয়টিকে: তাদের রাসূলগণ তাদের কাছে স্পষ্ট প্রমাণ নিয়ে এসেছিলেন। সা'দী এ প্রমাণগুলোর ব্যাখ্যা দেন খোলা আর ঝকঝকে সত্য হিসেবে, যা জিনিসের আসল চেহারা পরিষ্কার করে দেয়; আর তিনি সোজা বলেন, তারা সেগুলো মিথ্যা বলল, তাই আল্লাহ আমাদের যা জানিয়েছেন তা-ই তাদের উপর নেমে এল। অভিযোগটা এ নয় যে তাদের কেউ বলেনি। অভিযোগটা এই যে বলাটা পৌঁছেছিল, সঙ্গে দলিলও ছিল, আর সেটা নাকচ করা হয়েছিল; আর শাস্তি এসেছিল না জানার পিছনে নয়, ওই নাকচ করার পিছনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Enjoyment, and Plunging",
          "bn": "ভোগ, আর ডুবে থাকা"
        },
        "p": [
          {
            "en": "As-Sa'di treats 9:69 and our verse as one unit and reads the resemblance in detail. Your deeds resemble their deeds, he writes: you enjoyed your portion of the world, taking it by way of pleasure and appetite while turning away from what was intended by it, and you used it to help you to disobey Allah, and your aspiration and your will did not travel beyond the blessings you were given. Then the second half of the resemblance: and you plunged into falsehood and argued with falsehood in order to refute the truth with it.",
            "bn": "সা'দী ৯:৬৯ আর আমাদের আয়াতকে এক অংশ হিসেবেই ধরেন, আর মিলটা খুঁটিয়ে পড়েন। তিনি লেখেন, তোমাদের কাজ তাদের কাজেরই মতো: তোমরা দুনিয়ার নিজেদের ভাগ ভোগ করেছ, আর নিয়েছ ভোগ আর খেয়ালের ধরনে, অথচ এর দ্বারা যা উদ্দেশ্য ছিল তা থেকে মুখ ফিরিয়ে; আর সেটা তোমরা কাজে লাগিয়েছ আল্লাহর নাফরমানিতে সাহায্য নিতে, আর তোমাদের আকাঙ্ক্ষা আর ইচ্ছা যে নিয়ামত তোমাদের দেওয়া হয়েছিল সেটা ছাড়িয়ে আর কোথাও যায়নি। এরপর মিলের দ্বিতীয় অর্ধেকটা: আর তোমরা বাতিলে ডুবে থেকেছ আর বাতিল দিয়ে তর্ক করেছ, যাতে তা দিয়ে সত্যকে নাকচ করা যায়।"
          },
          {
            "en": "He sums those two into a description of a whole civilisation: so these are their deeds and their knowledge, enjoyment of a portion and plunging into falsehood. Then he draws the believers' version of both, which is the useful half. They too enjoy their portion of what they were given, but by way of using it to help them to Allah's obedience; and their knowledge is the knowledge of the messengers, which is arriving at certainty in the high objectives, and arguing with the truth in order to refute falsehood.",
            "bn": "এ দুটিকে তিনি মিলিয়ে একটি গোটা সভ্যতার বর্ণনা বানান: অর্থাৎ এগুলোই তাদের আমল আর তাদের ইলম, ভাগটা ভোগ করা আর বাতিলে ডুবে থাকা। এরপর তিনি দুটোরই মু'মিনদের রূপটা টানেন, আর কাজের অর্ধেকটা ওটাই। তারাও নিজেদের যা দেওয়া হয়েছে তার ভাগ ভোগ করে, তবে সেটা করে আল্লাহর আনুগত্যে সাহায্য নেওয়ার ধরনে; আর তাদের ইলম হলো রাসূলদের ইলম, অর্থাৎ উঁচু লক্ষ্যগুলোতে নিশ্চিত জ্ঞানে পৌঁছানো, আর সত্য দিয়ে তর্ক করা যাতে বাতিল নাকচ হয়ে যায়।"
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
            "bn": "শেষ কথাটি বাকি থাকা একমাত্র বেরোনোর পথটা বন্ধ করে দেয়, আর বন্ধ করে ভুল দিক থেকে। আল্লাহ তাদের প্রতি যুলম করার মতো নন, বরং তারাই নিজেদের প্রতি যুলম করছিল। সা'দী প্রথম অর্ধেকটা বেঁধে দেন শাস্তির সঙ্গে: তিনি তাদের উপর যা এনেছিলেন তা কোনো অন্যায় ছিল না। বাক্যটি ধ্বংসটাকে নরম করে না; সে ধ্বংসটার দায় কার, সেটাই বদলে দেয়; আর করে মুদারি কালে, যাতে নিজেদের উপর যুলম করাটা একবারের কাজ নয়, চলতেই থাকা কাজ হিসেবে বর্ণিত হয়।"
          },
          {
            "en": "10:44 states the same principle without a single name attached to it: indeed Allah does not wrong the people at all, but it is the people who are wronging themselves. Putting the general rule beside the roll-call is what makes the verse usable, because the six were not chosen for being worse than everyone. They were chosen for being known. 30:9 makes the same move with travel instead of news, telling them to go and look at how the end of those before them was.",
            "bn": "১০:৪৪ আয়াত একই নীতি বলে, তবে সঙ্গে কোনো নাম জুড়ে দেয় না: নিশ্চয়ই আল্লাহ মানুষের প্রতি কোনো যুলম করেন না, বরং মানুষই নিজেদের প্রতি যুলম করে। সাধারণ নিয়মটাকে ওই নামের তালিকার পাশে রাখাই আয়াতটাকে কাজে লাগানোর মতো করে তোলে, কারণ ওই ছয়টিকে বাছা হয়নি তারা সবার চেয়ে খারাপ ছিল বলে। তাদের বাছা হয়েছিল তারা পরিচিত ছিল বলে। ৩০:৯ আয়াত একই কাজ করে খবরের বদলে ভ্রমণ দিয়ে, তাদের বলে গিয়ে দেখে আসতে তাদের আগের লোকদের শেষটা কেমন হয়েছিল।"
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
            "en": "Four of the six peoples have their own entries in this module, and the verse works as an index to them. Hud (AS) addressing Ad stands at 7:65; Salih (AS) addressing Thamud at 7:69 and 7:74, with his parting words at 7:79; Shu'ayb (AS) sent to Madyan at 7:85, and the earthquake that seized his people at 7:91. Read in that order, our verse is a list of chapter headings for accounts a reader of this module has already been given in full.",
            "bn": "ছয়টি জাতির চারটির নিজেদের এন্ট্রি এ মডিউলেই আছে, আর আয়াতটি কাজ করে সেগুলোর সূচিপত্র হিসেবে। হূদ (আঃ) আদের উদ্দেশে দাঁড়িয়ে আছেন ৭:৬৫ আয়াতে; সালিহ (আঃ) সামূদের উদ্দেশে ৭:৬৯ আর ৭:৭৪ আয়াতে, আর তাঁর বিদায়ের কথা ৭:৭৯ আয়াতে; শুআইব (আঃ) মাদয়্যানে পাঠানো হয়েছেন ৭:৮৫ আয়াতে, আর তাঁর জাতিকে পাকড়াও করা ভূমিকম্প ৭:৯১ আয়াতে। এ ক্রমে পড়লে আমাদের আয়াত হয়ে দাঁড়ায় এমন কিছু অধ্যায়ের শিরোনামের তালিকা, যেগুলোর পূর্ণ বিবরণ এ মডিউলের পাঠক আগেই পেয়ে গেছেন।"
          },
          {
            "en": "That is not a coincidence of arrangement but the verse's own method. It does not retell any of the six stories; it assumes them and asks a question about what was done with them. A reader who has the accounts and draws nothing from them is in exactly the position the verse describes, which is a more uncomfortable place to stand than ignorance would be. The hypocrites of Madinah were not short of information either, and that is what the question at the head of the verse is for.",
            "bn": "এটা সাজানোর কোনো কাকতাল নয়, আয়াতের নিজের পদ্ধতিই। সে ছয়টি কাহিনির একটিও আবার বলে না; সে ওগুলো ধরে নেয়, আর প্রশ্ন করে ওগুলো নিয়ে কী করা হলো তা নিয়ে। যে পাঠকের কাছে বিবরণগুলো আছে আর তিনি সেগুলো থেকে কিছুই নেন না, তিনি ঠিক সেই জায়গাটাতেই দাঁড়িয়ে আছেন যেটা আয়াত বর্ণনা করে; আর না জানার চেয়ে ওই জায়গায় দাঁড়ানো অনেক বেশি অস্বস্তিকর। মাদীনার মুনাফিকদেরও খবরের অভাব ছিল না, আর আয়াতের মাথায় বসা প্রশ্নটার কাজ ঠিক সেটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Ruins Properly",
          "bn": "ধ্বংস ঠিকভাবে পড়া"
        },
        "p": [
          {
            "en": "The practical use of a verse like this is narrow and it is not the obvious one. It is not an invitation to identify which modern people resemble Ad or Thamud; the verse is addressed to men who were being warned, not equipped to warn others, and its final clause puts the wronging inside the people themselves rather than in a category anybody can assign from outside.",
            "bn": "এ ধরনের আয়াতের কাজের ব্যবহারটা সংকীর্ণ, আর সেটা যেটা প্রথমে মনে আসে সেটা নয়। এটা এমন কোনো আমন্ত্রণ নয় যে আজকের কোন জাতি আদ বা সামূদের মতো তা চিহ্নিত করতে হবে; আয়াতটি বলা হচ্ছে এমন লোকদের, যাদের হুঁশিয়ার করা হচ্ছিল, অন্যদের হুঁশিয়ার করার হাতিয়ার দেওয়া হচ্ছিল না; আর এর শেষ কথাটি যুলমটা রাখে মানুষের নিজের ভেতরেই, বাইরে থেকে কেউ বসিয়ে দিতে পারে এমন কোনো ঘরে নয়।"
          },
          {
            "en": "What it does hand over is a test for reading. As-Sa'di's two columns, enjoyment of a portion and plunging into falsehood against using a portion for obedience and arguing with the truth, can be applied to a week without naming a nation. And the question the verse actually asks is answerable: what have I been told clearly enough that not knowing is no longer available to me, and what have I done since I was told?",
            "bn": "সে যা হাতে তুলে দেয় তা হলো পড়ার একটা যাচাই। সা'দীর সেই দুই কলাম, ভাগটা ভোগ করা আর বাতিলে ডুবে থাকা, তার বিপরীতে ভাগটা আনুগত্যে লাগানো আর সত্য দিয়ে তর্ক করা, কোনো জাতির নাম না নিয়েই এক সপ্তাহের উপর কষে দেখা যায়। আর আয়াত আসলে যে প্রশ্নটা করে, তার জবাব দেওয়া সম্ভব: এমন কী আমাকে এত পরিষ্কারভাবে বলা হয়েছে যে না জানার সুযোগ আর আমার হাতে নেই, আর বলার পর থেকে আমি কী করেছি?"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Against Repeating It",
          "bn": "একই ভুল না করার দোয়া"
        },
        "p": [
          {
            "en": "The verse carries no supplication and its closing clause is a verdict, so what belongs here is the thing the verse leaves a reader wanting: not to be among those who had the news. The Quran's nearest wording for that is in the general rule at 10:44, said as a reminder rather than a request, that Allah does not wrong people at all, which turns every complaint about one's own situation back to its source.",
            "bn": "আয়াতে কোনো দোয়া নেই, আর এর শেষ কথাটি একটি রায়; কাজেই এখানে যা মানায় তা হলো আয়াত পাঠকের মনে যে চাওয়াটা রেখে যায় সেটাই: তাদের দলে না থাকা যাদের কাছে খবর পৌঁছেছিল। এর সবচেয়ে কাছের কুরআনী শব্দ ১০:৪৪ আয়াতের সেই সাধারণ নিয়মে, আর সেটা বলা হবে অনুরোধ হিসেবে নয়, মনে করিয়ে দেওয়া হিসেবে, যে আল্লাহ মানুষের প্রতি কোনো যুলমই করেন না; আর এতে নিজের অবস্থা নিয়ে প্রতিটি অভিযোগ ফিরে যায় তার উৎসের দিকেই।"
          },
          {
            "en": "A sentence in this verse's own vocabulary can be added and claimed as no more than that: O Allah, You sent their messengers with clear proofs and the news reached me too, so do not let me be counted among those who had it and did nothing. It is assembled from the verse's middle clause and its closing one, and it is not a Sunnah du'a. The wording of 10:44 is the safer of the two and shorter to keep.",
            "bn": "এ আয়াতের নিজের শব্দে একটা বাক্য যোগ করা যায়, আর এর বেশি দাবি না করেই: হে আল্লাহ, আপনি তাদের রাসূলদের স্পষ্ট প্রমাণ নিয়ে পাঠিয়েছিলেন, আর সেই খবর আমার কাছেও পৌঁছেছে; কাজেই আমাকে তাদের মধ্যে গোনা হতে দেবেন না যাদের কাছে সেটা ছিল আর যারা কিছুই করেনি। এটি আয়াতের মাঝের কথা আর শেষের কথা জুড়ে বানানো, আর এটি সুন্নাহর দোয়া নয়। ১০:৪৪ আয়াতের শব্দগুলোই দুটোর মধ্যে বেশি নিরাপদ আর মনে রাখার জন্য ছোট।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About the News",
          "bn": "খবরটি নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "The charge here is not ignorance but refusal after evidence, so what have I been told clearly enough that not knowing is no longer available to me? Six histories are listed as though reading them were the point: which account of somebody else's ruin have I read and filed away without applying a single thing from it? And the verse says Allah did not wrong them, so when something goes badly for me, where does my mind go first to place the blame?",
            "bn": "এখানকার অভিযোগ না জানা নিয়ে নয়, দলিল আসার পর নাকচ করা নিয়ে; তাহলে এমন কী আমাকে এত পরিষ্কারভাবে বলা হয়েছে যে না জানার সুযোগ আর আমার হাতে নেই? ছয়টি ইতিহাসের তালিকা দেওয়া হয়, যেন পড়াটাই আসল কাজ: অন্য কারও ধ্বংসের কোন বিবরণ আমি পড়ে তার থেকে একটা জিনিসও কাজে না লাগিয়ে তুলে রেখেছি? আর আয়াত বলে আল্লাহ তাদের প্রতি যুলম করেননি; তাহলে আমার কোনো কিছু খারাপ হলে দোষ রাখতে আমার মন প্রথমে কোথায় যায়?"
          },
          {
            "en": "Two more. The six were stronger and wealthier than the people being warned with their story, so what am I counting on that they had more of? And these were people who had the news in their hands: what do I already know about the end of a road I am still walking along, and what would it take for me to treat that knowledge as news rather than as history?",
            "bn": "আরও দুটি। যাদের এ কাহিনি দিয়ে হুঁশিয়ার করা হচ্ছিল, ছয়টি জাতি তাদের চেয়ে বেশি শক্তিশালী আর বেশি ধনী ছিল; তাহলে আমি কীসের উপর ভরসা করে আছি, যা তাদের কাছে আরও বেশি ছিল? আর এরা সেই লোক, যাদের হাতে খবরটা ছিল: যে রাস্তায় আমি এখনো হাঁটছি, তার শেষ সম্পর্কে আমি আগেই কী জানি, আর ওই জানাটাকে ইতিহাস নয়, খবর হিসেবে নিতে আমার কী লাগত?"
          }
        ]
      }
    ]
  },
  "9:105": {
    "sections": [
      {
        "h": {
          "en": "A Command After Repentance",
          "bn": "তাওবার পরে একটি নির্দেশ"
        },
        "p": [
          {
            "en": "The verse stands near the end of a passage in Surah at-Tawbah about people whose record was mixed. In 9:102 the Quran describes those who confessed their sins, having mixed a righteous deed with a bad one. In 9:103 the Prophet ﷺ is told to take charity from their wealth to purify and cleanse them. In 9:104 they are assured that Allah Himself accepts repentance from His servants. Then comes this verse, opening with a single imperative: say, work.",
            "bn": "আয়াতটি সূরা আত-তাওবার এমন এক অনুচ্ছেদের শেষ দিকে অবস্থিত, যেখানে মিশ্র আমলনামার মানুষদের কথা বলা হয়েছে। 9:102 আয়াতে কুরআন তাদের বর্ণনা দেয় যারা নিজেদের গুনাহ স্বীকার করেছিল — তারা সৎকাজের সঙ্গে মন্দ কাজ মিশিয়ে ফেলেছিল। 9:103 আয়াতে নবী ﷺ-কে বলা হয় তাদের সম্পদ থেকে সদাকাহ নিতে, যা তাদের পবিত্র ও পরিশুদ্ধ করবে। 9:104 আয়াতে তাদের আশ্বস্ত করা হয় যে আল্লাহ নিজেই তাঁর বান্দাদের তাওবা কবুল করেন। এরপর আসে এই আয়াত, যার শুরুতেই একটি একক আদেশ: বলুন, কাজ করো।"
          },
          {
            "en": "The order matters. Repentance in this passage is not left as a mood; it is followed immediately by a command to act. The mufassirun read the sequence as a map for anyone returning to Allah after failure: confess, give, and then get up and work. A person who has slipped is not told to sit still and grieve without end. The proof that the return was real is the deed that comes after it, and the verse hurries the repentant straight into that deed.",
            "bn": "এই ক্রমটি গুরুত্বপূর্ণ। এই অনুচ্ছেদে তাওবাকে কেবল একটি মনের অবস্থা হিসেবে ছেড়ে দেওয়া হয়নি; এর ঠিক পরেই আসে কাজের নির্দেশ। মুফাসসিরগণ এই ধারাবাহিকতাকে ব্যর্থতার পর আল্লাহর দিকে ফিরে আসা প্রত্যেক মানুষের জন্য একটি মানচিত্র হিসেবে পড়েন: স্বীকার করো, দান করো, তারপর উঠে দাঁড়াও ও কাজ করো। যে পা পিছলে পড়েছে, তাকে অনন্তকাল বসে শোক করতে বলা হয়নি। ফিরে আসা যে সত্যি ছিল তার প্রমাণ হলো এর পরের আমল, আর আয়াতটি তাওবাকারীকে দ্রুত সেই আমলের দিকেই ঠেলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Who Will See",
          "bn": "তিনজন যাঁরা দেখবেন"
        },
        "p": [
          {
            "en": "The wording is precise. I'malu is an imperative verb in the plural: work, all of you. Then fa-sayara Allahu 'amalakum, so Allah will surely see your work — a future-tense verb whose sa- prefix carries assurance, not mere possibility. Two more witnesses are then named after Him: His Messenger ﷺ and the believers. Three audiences in all, listed in descending rank, and the seeing is promised before the deed is even finished.",
            "bn": "শব্দচয়ন এখানে সুনির্দিষ্ট। ই'মালূ একটি বহুবচন আদেশসূচক ক্রিয়া: তোমরা সবাই কাজ করো। তারপর ফাসাইয়ারাল্লাহু 'আমালাকুম — আল্লাহ অবশ্যই তোমাদের কাজ দেখবেন — একটি ভবিষ্যৎকালের ক্রিয়া, যার সা- উপসর্গ নিছক সম্ভাবনা নয়, নিশ্চয়তা বহন করে। এরপর তাঁর পরে আরও দুইজন সাক্ষীর নাম আসে: তাঁর রাসূল ﷺ এবং মুমিনগণ। মোট তিনটি দর্শক, মর্যাদার ক্রমানুসারে সাজানো, আর কাজ শেষ হওয়ার আগেই দেখার প্রতিশ্রুতি দেওয়া হয়ে গেছে।"
          },
          {
            "en": "The commentators take the mention of the Messenger ﷺ and the believers as encouragement and warning at once. A deed done well earns the recognition of the truthful in this world, and a deed done badly forfeits it. What the verse rules out completely is the fantasy of a deed that lands nowhere — an effort unseen, a wrong unnoticed, a kindness wasted. Nothing sincere is lost, and nothing shameful is as private as it feels.",
            "bn": "মুফাসসিরগণ রাসূল ﷺ ও মুমিনদের উল্লেখকে একইসঙ্গে উৎসাহ ও সতর্কবার্তা হিসেবে নেন। ভালোভাবে করা কাজ দুনিয়াতেই সত্যবাদীদের স্বীকৃতি অর্জন করে, আর মন্দভাবে করা কাজ তা হারায়। আয়াতটি যে কল্পনাকে সম্পূর্ণ বাতিল করে দেয় তা হলো এমন কোনো কাজের ধারণা, যা কোথাও পৌঁছায় না — এমন চেষ্টা যা কেউ দেখেনি, এমন অন্যায় যা কারও চোখে পড়েনি, এমন দয়া যা বৃথা গেছে। কোনো আন্তরিক কাজ হারায় না, আর কোনো লজ্জাজনক কাজ ততটা গোপন নয় যতটা মনে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Returned to the Knower",
          "bn": "জ্ঞাতার কাছে প্রত্যাবর্তন"
        },
        "p": [
          {
            "en": "The second half turns to the next world: and you will be returned to the Knower of the unseen and the seen, and He will inform you of what you used to do. 'Alim here is an active participle, naming knowledge as His standing attribute rather than an act He sometimes performs. Al-ghayb and ash-shahadah divide all reality between them — what is hidden from every eye and what is out in the open — leaving no third category for anything to hide in.",
            "bn": "দ্বিতীয় অংশ আখিরাতের দিকে মোড় নেয়: আর তোমাদের ফিরিয়ে নেওয়া হবে অদৃশ্য ও দৃশ্যের জ্ঞাতার কাছে, তখন তিনি তোমাদের জানিয়ে দেবেন তোমরা যা করতে। 'আলিম এখানে একটি কর্তৃবাচক বিশেষণ (ইসমে ফাইল), যা জ্ঞানকে তাঁর স্থায়ী গুণ হিসেবে চিহ্নিত করে — এমন কোনো কাজ হিসেবে নয় যা তিনি কখনো কখনো করেন। আল-গায়ব ও আশ-শাহাদাহ মিলে সমগ্র বাস্তবতাকে ভাগ করে নেয় — যা প্রতিটি চোখ থেকে লুকানো আর যা প্রকাশ্যে আছে — লুকোনোর জন্য তৃতীয় কোনো শ্রেণি অবশিষ্ট থাকে না।"
          },
          {
            "en": "The verb yunabbi'ukum promises detailed news, not a vague summary. The Quran describes that day elsewhere with the same exactness: in 18:49 the wrongdoers look into the record and ask what kind of book this is that leaves out nothing small or great, and 99:7-8 promises that whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it. The informing is not for Allah's benefit, who already knew, but for ours, who kept forgetting.",
            "bn": "ইউনাব্বিউকুম ক্রিয়াটি বিস্তারিত সংবাদের প্রতিশ্রুতি দেয়, অস্পষ্ট সারাংশের নয়। কুরআন অন্যত্র সেই দিনকে একই সূক্ষ্মতায় বর্ণনা করে: 18:49 আয়াতে জালিমরা আমলনামায় তাকিয়ে জিজ্ঞেস করে, এ কেমন কিতাব যা ছোট-বড় কিছুই বাদ দেয়নি; আর 99:7-8 আয়াতে প্রতিশ্রুতি আছে, যে অণু পরিমাণ ভালো করবে সে তা দেখবে, আর যে অণু পরিমাণ মন্দ করবে সেও তা দেখবে। এই জানানো আল্লাহর প্রয়োজনে নয় — তিনি তো আগেই জানতেন — বরং আমাদের জন্য, যারা বারবার ভুলে যেতাম।"
          }
        ]
      },
      {
        "h": {
          "en": "The Work the Quran Honours",
          "bn": "কুরআন যে কাজকে সম্মান দেয়"
        },
        "p": [
          {
            "en": "Notice what the verse asks to be judged: 'amal, work, not appearance or announcement. The Quran keeps returning to this measure. In 67:2 Allah says He created death and life to test which of you is best in deed — ahsanu 'amalan, best, not most. Quality has two parts the scholars name again and again: sincerity in the intention and soundness in the doing. A large deed done for show and a sound deed done carelessly both fail one half of the test.",
            "bn": "লক্ষ করুন, আয়াতটি কীসের বিচার চায়: 'আমাল — কাজ — চেহারা বা ঘোষণা নয়। কুরআন বারবার এই মাপকাঠিতে ফিরে আসে। 67:2 আয়াতে আল্লাহ বলেন, তিনি মৃত্যু ও জীবন সৃষ্টি করেছেন পরীক্ষা করতে — তোমাদের মধ্যে কে আমলে সর্বোত্তম: আহসানু 'আমালান — সর্বোত্তম, সর্বাধিক নয়। আলিমগণ বারবার এই মানের দুটি অংশের কথা বলেন: নিয়তের ইখলাস এবং কাজের শুদ্ধতা। লোক দেখানোর জন্য করা বিশাল কাজ আর অযত্নে করা শুদ্ধ কাজ — দুটোই পরীক্ষার একটি করে অর্ধেকে ফেল করে।"
          },
          {
            "en": "Muslim narrates from Abu Hurayrah (RA) that the Prophet ﷺ said Allah does not look at your forms and your wealth, but He looks at your hearts and your deeds. Read beside this verse, the hadith closes the last loophole: the watching promised here is not the watching of a market, which prizes what glitters. The Seer being described looks straight past the packaging to the intention underneath it and the effort inside it.",
            "bn": "মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ তোমাদের আকৃতি ও সম্পদের দিকে তাকান না, বরং তিনি তাকান তোমাদের অন্তর ও আমলের দিকে। এই আয়াতের পাশে রেখে পড়লে হাদীসটি শেষ ফাঁকটুকুও বন্ধ করে দেয়: এখানে যে দেখার প্রতিশ্রুতি, তা বাজারের দেখা নয় — বাজার তো চকচকে জিনিসেরই কদর করে। যে দ্রষ্টার বর্ণনা এখানে এসেছে, তিনি মোড়ক পেরিয়ে সরাসরি তাকান তার নিচের নিয়ত আর ভেতরের শ্রমের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Working As One Watched",
          "bn": "দেখা হচ্ছে জেনে কাজ করা"
        },
        "p": [
          {
            "en": "This verse is the working man's version of a definition the Prophet ﷺ gave elsewhere. In the long hadith of Jibril (AS), recorded by Muslim from Umar (RA), ihsan is defined as worshipping Allah as though you see Him, for if you do not see Him, He surely sees you. The verse extends that awareness from the prayer mat to the workbench: employment, teaching, housework and emails are all 'amal, watched by the same three audiences.",
            "bn": "এই আয়াতটি সেই সংজ্ঞারই কর্মজীবী সংস্করণ, যা নবী ﷺ অন্যত্র দিয়েছেন। জিবরীল (আঃ)-এর দীর্ঘ হাদীসে — যা মুসলিম উমর (রাঃ) থেকে বর্ণনা করেছেন — ইহসানের সংজ্ঞা দেওয়া হয়েছে: আল্লাহর ইবাদত এমনভাবে করা যেন তুমি তাঁকে দেখছ; আর তুমি তাঁকে না দেখলেও তিনি তো তোমাকে দেখছেন। আয়াতটি সেই সচেতনতাকে জায়নামায থেকে কাজের টেবিল পর্যন্ত বিস্তৃত করে: চাকরি, শিক্ষকতা, ঘরের কাজ, চিঠিপত্র — সবই 'আমাল, আর একই তিন দর্শক সেসব দেখছেন।"
          },
          {
            "en": "The practical difference shows up in the parts of work nobody checks. The corner that could be cut, the measurement no client will verify, the effort a supervisor will never notice — these are precisely where working for the One who sees separates itself from working for the ones who pay. The verse does not promise that people will applaud sound work. It promises something sturdier: that the work will be seen by Allah first, and reported back in full.",
            "bn": "ব্যবহারিক পার্থক্যটা ধরা পড়ে কাজের সেই অংশগুলোতে, যেগুলো কেউ যাচাই করে না। যে কোণটা কেটে ফেলা যেত, যে মাপ কোনো গ্রাহক মিলিয়ে দেখবে না, যে পরিশ্রম কোনো তত্ত্বাবধায়কের চোখেই পড়বে না — ঠিক এখানেই যিনি দেখেন তাঁর জন্য কাজ করা আলাদা হয়ে যায় যারা বেতন দেয় তাদের জন্য কাজ করা থেকে। আয়াতটি প্রতিশ্রুতি দেয় না যে মানুষ ভালো কাজে হাততালি দেবে। এটি আরও মজবুত কিছুর প্রতিশ্রুতি দেয়: কাজটি সবার আগে আল্লাহ দেখবেন, এবং পূর্ণাঙ্গভাবে তা জানিয়ে দেওয়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Weight Without Dread",
          "bn": "ভয় নয়, ওজন"
        },
        "p": [
          {
            "en": "Heard alone, this verse could sound like surveillance. But its placement after verses of accepted repentance and purifying charity gives it a warmer register: it is addressed to people who have just been forgiven and are being shown what to do next. Being watched by One who wants your success is not being watched by a fault-hunting inspector. The gaze described here is the gaze that also sent the rain and accepts the repentance.",
            "bn": "আলাদা করে শুনলে এই আয়াতকে নজরদারির মতো শোনাতে পারে। কিন্তু কবুল হওয়া তাওবা ও পরিশুদ্ধকারী সদাকাহর আয়াতগুলোর পরে এর অবস্থান একে উষ্ণতর সুর দেয়: এটি তাদের উদ্দেশে বলা, যারা এইমাত্র ক্ষমা পেয়েছে এবং যাদের দেখানো হচ্ছে এরপর কী করতে হবে। যিনি আপনার সাফল্য চান তাঁর দেখা কোনো দোষ-শিকারি পরিদর্শকের দেখা নয়। এখানে যে দৃষ্টির বর্ণনা, সে দৃষ্টিই তো বৃষ্টি পাঠায় এবং তাওবা কবুল করে।"
          },
          {
            "en": "So the verse lends work weight without loading it with dread. A task done today is not a disposable thing that vanishes when the customer leaves; it is an entry in a record that will be read back to its author by the Knower of the unseen and the seen. That thought makes small work meaningful and shoddy work uncomfortable — which is exactly the pair of effects a working believer needs before starting the day.",
            "bn": "তাই আয়াতটি কাজে ওজন যোগ করে, কিন্তু আতঙ্ক চাপিয়ে দেয় না। আজ করা একটি কাজ ফেলনা কিছু নয়, যা ক্রেতা চলে গেলে মিলিয়ে যায়; এটি এমন এক নথির ভুক্তি, যা অদৃশ্য ও দৃশ্যের জ্ঞাতা তার লেখকের কাছে পড়ে শোনাবেন। এই ভাবনা ছোট কাজকে অর্থবহ করে আর ফাঁকিবাজি কাজকে অস্বস্তিকর করে — দিন শুরু করার আগে একজন কর্মজীবী মুমিনের ঠিক এই জোড়া প্রভাবই দরকার।"
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
          "bn": "ঝড়ের পরের এক পঙক্তি"
        },
        "p": [
          {
            "en": "The later sections of Surah at-Tawbah revolve around the campaign to Tabuk: the muster in severe heat, those who stayed behind, and the excuses offered afterwards. In 9:117 Allah declares that He has turned in mercy to the Prophet ﷺ and to the Muhajirun and Ansar who followed him in the hour of hardship. In 9:118 He turns to three men who were left behind, until the earth, vast as it is, closed in on them.",
            "bn": "সূরা আত-তাওবাহর শেষ দিকের অংশগুলো আবর্তিত হয় তাবুক অভিযান ঘিরে: প্রচণ্ড গরমে সমরসজ্জা, যারা পেছনে রয়ে গেল, আর পরে পেশ করা অজুহাতগুলো। 9:117 আয়াতে আল্লাহ ঘোষণা করেন, তিনি রহমতের সঙ্গে ফিরেছেন নবী ﷺ-এর দিকে এবং সেই মুহাজির ও আনসারদের দিকে, যারা কঠিন সময়ে তাঁর অনুসরণ করেছিল। 9:118 আয়াতে তিনি ফেরেন সেই তিনজনের দিকে, যাদের পেছনে ফেলে রাখা হয়েছিল — যতক্ষণ না জমিন, এত বিশাল হয়েও, তাদের জন্য সংকুচিত হয়ে এলো।"
          },
          {
            "en": "Then comes 9:119, a single line addressed to all who believe: fear Allah and be with the truthful. Placed there, it reads as the distilled lesson of the whole episode. The surah has just shown what became of those who lied their way out of hardship, and what became of those who told the truth into it. The command is the story's moral, issued as law.",
            "bn": "তারপর আসে 9:119 আয়াত — সব মুমিনের উদ্দেশে একটিমাত্র পঙক্তি: আল্লাহকে ভয় করো এবং সত্যবাদীদের সঙ্গে থাকো। ওই জায়গায় বসে এটি পড়ায় গোটা ঘটনার নির্যাস-শিক্ষার মতো। সূরাটি সবে দেখিয়েছে, মিথ্যা বলে কষ্ট থেকে বেরিয়ে যাওয়াদের পরিণতি কী হলো, আর কষ্টের মধ্যে ঢুকেও সত্য বলাদের পরিণতিই বা কী। আদেশটি সেই কাহিনিরই নীতিকথা — বিধান আকারে জারি করা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man Behind the Verse",
          "bn": "আয়াতের পেছনের মানুষ"
        },
        "p": [
          {
            "en": "Ka'b ibn Malik (RA) told his own story, and it is narrated in both Bukhari and Muslim. He had missed the expedition with no excuse — never before, he said, had he been stronger or wealthier — and he simply delayed until the army was gone. When the Prophet ﷺ returned, eighty-odd men came with false excuses and were accepted outwardly. Ka'b knew he could talk his way out, and chose instead to say plainly that he had no excuse.",
            "bn": "কা'ব ইবনে মালিক (রাঃ) নিজের ঘটনা নিজেই বলেছেন, আর তা বুখারী ও মুসলিম উভয় গ্রন্থে বর্ণিত। কোনো অজুহাত ছাড়াই তিনি অভিযানে যাননি — তাঁর ভাষায়, এর আগে কখনো তিনি এত সবল ও এত সচ্ছল ছিলেন না — কেবল দেরি করতে করতে সেনাদল চলে গেল। নবী ﷺ ফিরে এলে আশির কিছু বেশি লোক মিথ্যা অজুহাত নিয়ে এলো এবং বাহ্যিকভাবে তা গৃহীতও হলো। কা'ব জানতেন, কথা সাজিয়ে তিনিও পার পেয়ে যেতে পারেন; তার বদলে সোজাসুজি বললেন — তাঁর কোনো অজুহাত নেই।"
          },
          {
            "en": "The Prophet ﷺ said: as for this man, he has spoken the truth. Then came the hard part: the Muslims were instructed not to speak to Ka'b and his two companions. The boycott lasted fifty nights, and after forty of them he was ordered to keep away from his wife as well. In the middle of it a letter arrived from the king of Ghassan, inviting him to defect to comfort — he burned it, calling it part of the trial.",
            "bn": "নবী ﷺ বললেন: এই লোকটি, সে সত্য বলেছে। তারপর এলো কঠিন অংশ: মুসলিমদের নির্দেশ দেওয়া হলো কা'ব ও তাঁর দুই সঙ্গীর সঙ্গে কথা না বলতে। এই বর্জন চলল পঞ্চাশ রাত, আর তার চল্লিশ রাত পার হলে আদেশ এলো স্ত্রীর থেকেও দূরে থাকার। এরই মাঝে গাসসানের রাজার কাছ থেকে একটি চিঠি এলো — আরামের জীবনে পক্ষত্যাগের আমন্ত্রণ। তিনি সেটি পুড়িয়ে ফেললেন, আর বললেন — এটিও পরীক্ষারই অংশ।"
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
            "bn": "মুক্তি এলো ওহী হয়ে: 9:118 আয়াত ঘোষণা করল, আল্লাহ ওই তিনজনের দিকে ফিরেছেন, আর মানুষ ছুটে এলো তাঁদের অভিনন্দন জানাতে। কা'ব (রাঃ) নবী ﷺ-এর কাছে এলেন — আনন্দে তাঁর চেহারা উজ্জ্বল — এবং কৃতজ্ঞতায় নিজের সম্পদ সদাকাহ করে দিতে চাইলেন; তাঁকে বলা হলো এর কিছুটা নিজের জন্য রাখতে। আর সেই একই বর্ণনায় লিপিবদ্ধ তাঁর একটি প্রতিজ্ঞা: বাকি জীবন তিনি সত্য ছাড়া কিছুই বলবেন না।"
          },
          {
            "en": "Ka'b himself drew the connection that the verse then fixed as law: Allah saved him by truthfulness, while the men who swore false oaths were left to their fate. When 9:119 commands believers to be with the truthful, its first hearers knew which faces it pointed to — three men whose honesty had cost them fifty nights of isolation and then bought them a place in the Quran forever.",
            "bn": "কা'ব নিজেই সেই যোগসূত্রটি টেনেছিলেন, যা আয়াত পরে বিধান করে দিল: সত্যবাদিতাই তাঁকে বাঁচিয়েছে, আর যারা মিথ্যা শপথ করেছিল তাদের ছেড়ে দেওয়া হয়েছে তাদের পরিণতির হাতে। 9:119 আয়াত যখন মুমিনদের সত্যবাদীদের সঙ্গে থাকার আদেশ দেয়, প্রথম শ্রোতারা জানতেন এটি কোন মুখগুলোর দিকে ইশারা করছে — তিনজন মানুষ, যাদের সততার মূল্য ছিল পঞ্চাশ রাতের একঘরে জীবন, আর তারপর সেই সততাই তাঁদের চিরকালের জন্য কুরআনে জায়গা কিনে দিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Be With, Not Only Be",
          "bn": "শুধু হওয়া নয়, সঙ্গে থাকা"
        },
        "p": [
          {
            "en": "The wording repays attention: kunu ma'a as-sadiqin — be with the truthful, not merely be truthful. Sidq in Arabic is wider than accurate speech; the mufassirun describe truthfulness of intention, of promise and of action, an alignment between inside and outside. And the command is framed as company because character travels between people. The verse legislates our surroundings: taqwa in its first half, and in its second the human environment that keeps taqwa alive.",
            "bn": "শব্দচয়নটি মনোযোগের দাবি রাখে: কূনূ মা'আস-সাদিকীন — সত্যবাদীদের সঙ্গে থাকো, শুধু সত্যবাদী হও নয়। আরবিতে সিদক নির্ভুল কথার চেয়ে ব্যাপক; মুফাসসিরগণ বলেন নিয়তের, প্রতিশ্রুতির ও কাজের সত্যবাদিতার কথা — ভেতর ও বাইরের মিল। আর আদেশটি সঙ্গের ভাষায় সাজানো, কারণ চরিত্র মানুষ থেকে মানুষে সঞ্চারিত হয়। আয়াতটি আমাদের পরিবেশেরই বিধান দেয়: প্রথম অংশে তাকওয়া, আর দ্বিতীয় অংশে সেই মানব-পরিবেশ, যা তাকওয়াকে বাঁচিয়ে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Truthfulness Leads",
          "bn": "সত্যবাদিতা যেখানে নেয়"
        },
        "p": [
          {
            "en": "A hadith found in both Bukhari and Muslim, from Ibn Mas'ud (RA), maps the road: truthfulness guides to righteousness, and righteousness guides to Paradise, and a man keeps speaking truth until he is written before Allah as a siddiq. Lying guides to wickedness, and wickedness to the Fire, and a man keeps lying until he is written as a liar. Habits of speech, repeated, become a recorded identity — which is what happened, in opposite directions, at Tabuk.",
            "bn": "বুখারী ও মুসলিম উভয় গ্রন্থে ইবনে মাসউদ (রাঃ) থেকে বর্ণিত একটি হাদীস পথরেখাটি এঁকে দেয়: সত্যবাদিতা নেকির পথ দেখায়, আর নেকি পথ দেখায় জান্নাতের; মানুষ সত্য বলতে বলতে অবশেষে আল্লাহর কাছে সিদ্দীক হিসেবে লিখিত হয়। মিথ্যা পথ দেখায় পাপাচারের, আর পাপাচার জাহান্নামের; মানুষ মিথ্যা বলতে বলতে মিথ্যাবাদী হিসেবে লিখিত হয়। কথার অভ্যাস, বারবার ফিরে এসে, একটি লিপিবদ্ধ পরিচয়ে পরিণত হয় — তাবুকে ঠিক তা-ই ঘটেছিল, দুই বিপরীত দিকে।"
          },
          {
            "en": "Elsewhere the Quran keeps the same pairing. In 33:35 the truthful men and truthful women stand in the list of those for whom forgiveness and a great reward are prepared, and the description of true piety in 2:177 ends by naming those who are truthful and those who have taqwa side by side — the same two qualities 9:119 binds together.",
            "bn": "কুরআন অন্যত্রও এই জোড়াটি ধরে রাখে। 33:35 আয়াতে সত্যবাদী পুরুষ ও সত্যবাদী নারীরা দাঁড়িয়ে আছেন তাদের তালিকায়, যাদের জন্য ক্ষমা ও মহাপুরস্কার প্রস্তুত রাখা হয়েছে; আর 2:177 আয়াতে প্রকৃত পুণ্যের বর্ণনা শেষ হয় সত্যবাদী ও মুত্তাকীদের পাশাপাশি নাম নিয়ে — সেই একই দুটি গুণ, যা 9:119 আয়াত একসঙ্গে বেঁধে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing Your Room",
          "bn": "নিজের ঘর বেছে নেওয়া"
        },
        "p": [
          {
            "en": "The verse gives a practical instrument: audit the company. Not a purge of every imperfect friend, but an honest look at which rooms make truth easier and which make it embarrassing. A circle where exaggeration is the price of belonging will collect that fee from your religion. The believer is told to place himself where sidq is normal, so that on the day honesty becomes expensive, he is not paying alone.",
            "bn": "আয়াতটি একটি ব্যবহারিক যন্ত্র দেয়: সঙ্গের হিসাব নেওয়া। প্রতিটি অপূর্ণ বন্ধুকে ছেঁটে ফেলা নয়, বরং সৎ চোখে দেখা — কোন ঘরগুলোতে সত্য বলা সহজ, আর কোনগুলোতে তা বিব্রতকর। যে বৃত্তে অতিরঞ্জনই অন্তর্ভুক্তির মাশুল, সে বৃত্ত সেই মাশুল আদায় করবে আপনার দ্বীন থেকে। মুমিনকে বলা হয়েছে নিজেকে সেখানে রাখতে, যেখানে সিদকই স্বাভাবিক — যাতে যেদিন সততা দামি হয়ে ওঠে, সেদিন সে একা মূল্য না দেয়।"
          },
          {
            "en": "Ka'b's (RA) story also warns against a subtler escape: he could have joined the liars and been accepted outwardly, as they were. The verse closes that route by making truthfulness communal. Tell the costly truth, and then stand near people who do the same — because fifty nights of consequence are survivable in the company of the truthful, while acceptance won by a lie was the fate the surah spends its length lamenting.",
            "bn": "কা'ব (রাঃ)-এর ঘটনা আরও সূক্ষ্ম একটি পালাবার পথ সম্পর্কেও সতর্ক করে: তিনি মিথ্যাবাদীদের দলে ভিড়ে যেতে পারতেন এবং তাদের মতোই বাহ্যিক গ্রহণযোগ্যতা পেতেন। আয়াতটি সত্যবাদিতাকে সমষ্টিগত করে সেই রাস্তা বন্ধ করে দেয়। দামি সত্যটি বলুন, তারপর তাদের কাছাকাছি দাঁড়ান যারা একই কাজ করে — কারণ সত্যবাদীদের সঙ্গে থাকলে পঞ্চাশ রাতের পরিণতিও পার হওয়া যায়; আর মিথ্যা দিয়ে কেনা গ্রহণযোগ্যতা — সেটিই সেই পরিণতি, যার শোক সূরাটি তার দৈর্ঘ্যজুড়ে করে গেছে।"
          }
        ]
      }
    ]
  }
});
