/**
 * Tadabbur long-form articles — surah 60.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "60:8": {
    "sections": [
      {
        "h": {
          "en": "A Surah of Severed Ties",
          "bn": "সম্পর্ক ছিন্ন হওয়ার সূরা"
        },
        "p": [
          {
            "en": "Al-Mumtahanah opens in 60:1 by forbidding the believers to take the enemies of Allah as allies, and it keeps that register: 60:4 holds up Ibrahim (AS) and those with him as an example of open disassociation from their own people. Then 60:7 turns and offers hope, that perhaps Allah will place affection between you and those you have treated as enemies. Severity and hope are both already on the page when 60:8 arrives immediately after that promise.",
            "bn": "সূরা আল-মুমতাহিনা শুরু হয় 60:1 দিয়ে, যেখানে মুমিনদের নিষেধ করা হয় আল্লাহর শত্রুদের বন্ধুরূপে গ্রহণ করতে; আর সূরাটি সেই কঠোর সুর ধরে রাখে — 60:4-এ ইবরাহীম (আঃ) ও তাঁর সঙ্গীদের তুলে ধরা হয় নিজের জাতি থেকে প্রকাশ্যে বিচ্ছিন্ন হওয়ার আদর্শ হিসেবে। এরপর 60:7 মোড় ঘুরিয়ে আশার কথা বলে: হয়তো আল্লাহ তোমাদের ও যাদের সঙ্গে তোমাদের শত্রুতা, তাদের মধ্যে ভালোবাসা সৃষ্টি করে দেবেন। কঠোরতা ও আশা — দুটোই পাতায় উপস্থিত, আর ঠিক সেই প্রতিশ্রুতির পরেই আসে 60:8।"
          },
          {
            "en": "The wording is not a fresh command. It is a negated prohibition: la yanhakumu Allahu, Allah does not forbid you. A sentence built that way answers a question somebody was already asking. Believers who had just been told to cut their alliances with a hostile Makkah needed to know how far the cutting ran, and whether ordinary decency toward peaceable relatives and neighbours had now become a fault. This verse clears them, and it names exactly whom it clears.",
            "bn": "আয়াতটির গঠন কোনো নতুন আদেশ নয়। এটি একটি নেতিবাচক নিষেধাজ্ঞা: লা ইয়ানহাকুমুল্লাহু — আল্লাহ তোমাদের নিষেধ করেন না। এভাবে গড়া বাক্য এমন প্রশ্নের উত্তর দেয় যা কেউ ইতিমধ্যেই করছিল। যেসব মুমিনকে সবেমাত্র বলা হয়েছে শত্রুভাবাপন্ন মক্কার সঙ্গে বন্ধুত্ব ছিন্ন করতে, তাঁদের জানা দরকার ছিল এই ছিন্নতা কত দূর যায় — শান্তিপ্রিয় আত্মীয় ও প্রতিবেশীর সঙ্গে সাধারণ শিষ্টাচারও কি এখন অপরাধ? আয়াতটি তাঁদের নিষ্কৃতি দেয়, এবং কাদের দেয় তা স্পষ্ট করে বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Birr and Qist",
          "bn": "বির্র ও কিস্‌ত"
        },
        "p": [
          {
            "en": "Two things are permitted, and the Arabic names them with two different vocabularies. Tabarruhum comes from birr, the warm word the Quran uses for what is owed to parents: 19:14 describes Yahya (AS) as barran toward his parents, and in 19:32 Isa (AS) says the same of himself toward his mother. Wa tuqsitu ilayhim comes from qist, the cold word of weights, shares and verdicts. Warmth and measurement are cleared in a single breath.",
            "bn": "দুটি জিনিসের অনুমতি দেওয়া হয়েছে, আর আরবি সে দুটিকে নাম দেয় দুই ভিন্ন শব্দভাণ্ডার থেকে। 'তাবার্রূহুম' এসেছে বির্র থেকে — কুরআন যে উষ্ণ শব্দটি পিতামাতার হক বোঝাতে ব্যবহার করে: 19:14-এ ইয়াহইয়া (আঃ)-কে বলা হয়েছে পিতামাতার প্রতি 'বাররান', আর 19:32-এ ঈসা (আঃ) নিজের মায়ের প্রতি নিজের সম্পর্কে একই কথা বলেন। আর 'ওয়া তুক্‌সিতূ ইলাইহিম' এসেছে কিস্‌ত থেকে — ওজন, ভাগ ও রায়ের শীতল শব্দ। উষ্ণতা ও পরিমাপ, দুটোরই অনুমতি এক নিঃশ্বাসে।"
          },
          {
            "en": "That root has a striking property. In its plain form it means to deviate and act crookedly: the jinn in 72:14 divide themselves into the Muslims among them and al-qasitun, and 72:15 says the qasitun are firewood for Hell. The fourth form used here, aqsata, reverses the sense into giving people their due. The verse uses that fourth form twice, in the verb tuqsitu and again in the closing word, al-muqsitin, those who act justly.",
            "bn": "এই মূলধাতুটির একটি লক্ষণীয় বৈশিষ্ট্য আছে। সাধারণ রূপে এর অর্থ বাঁকা পথে যাওয়া ও অন্যায় করা: 72:14-এ জিনেরা নিজেদের ভাগ করে বলে, আমাদের মধ্যে মুসলিমও আছে, আর আছে 'আল-কাসিতূন'; আর 72:15 বলে, সেই কাসিতূনরা জাহান্নামের ইন্ধন। কিন্তু এখানে ব্যবহৃত চতুর্থ বাব 'আক্‌সাতা' অর্থ উল্টে দিয়ে দাঁড় করায় — মানুষকে তার প্রাপ্য দেওয়া। আয়াতটি এই চতুর্থ রূপ দুবার ব্যবহার করে: ক্রিয়াপদ 'তুক্‌সিতূ'-তে, আর শেষ শব্দ 'আল-মুক্‌সিতীন'-এ — যারা ন্যায়বিচার করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Line Drawn Next",
          "bn": "পরের আয়াতে টানা সীমারেখা"
        },
        "p": [
          {
            "en": "The verse must be read with the one that follows it. 60:9 comes immediately after and uses the restrictive innama: Allah only forbids you, concerning those who fought you over religion, drove you from your homes and backed your expulsion, that you take them as allies. Read as a pair, the two verses sort people by conduct rather than by creed, and what 60:9 forbids is one specific thing, tawalli, alliance and patronage, not decency and not fairness.",
            "bn": "আয়াতটি পড়তে হবে তার পরের আয়াতের সঙ্গে মিলিয়ে। ঠিক পরেই আসা 60:9 ব্যবহার করে সীমাবদ্ধকারী শব্দ 'ইন্নামা': আল্লাহ কেবল তাদের ব্যাপারেই নিষেধ করেন — যারা দীনের কারণে তোমাদের সঙ্গে যুদ্ধ করেছে, তোমাদের ঘর থেকে বের করেছে ও বের করায় সাহায্য করেছে — তাদের বন্ধুরূপে গ্রহণ করতে। জোড়া হিসেবে পড়লে দুই আয়াত মানুষকে ভাগ করে আচরণ দিয়ে, বিশ্বাস দিয়ে নয়; আর 60:9 নিষেধ করে একটি নির্দিষ্ট জিনিস — 'তাওয়াল্লী', অর্থাৎ মৈত্রী ও পৃষ্ঠপোষকতা — সদাচরণ বা ন্যায়বিচার নয়।"
          },
          {
            "en": "So the permission is neither unqualified nor narrow. It is bounded by a description the verse states for itself: those who did not fight you over religion and did not expel you. Some early commentators held that a later command to fight overrode this verse; at-Tabari reads it as standing and general. Either way the Quran keeps the principle elsewhere, since 5:8 forbids letting hatred of a people push you away from justice at all.",
            "bn": "কাজেই অনুমতিটি না শর্তহীন, না সংকীর্ণ। এর সীমা টেনে দিয়েছে আয়াতের নিজেরই বর্ণনা: যারা দীনের কারণে তোমাদের সঙ্গে যুদ্ধ করেনি এবং তোমাদের বের করে দেয়নি। প্রাচীন কিছু মুফাসসির মনে করতেন, পরবর্তী যুদ্ধের নির্দেশ এই আয়াতকে রহিত করেছে; ইমাম তাবারী একে বহাল ও সাধারণ হিসেবেই পড়েন। যেভাবেই দেখা হোক, কুরআন নীতিটি অন্যত্রও ধরে রাখে — 5:8 নিষেধ করে কোনো জাতির প্রতি বিদ্বেষ যেন তোমাদের ন্যায়বিচার থেকে একটুও সরিয়ে না দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asma and Her Mother",
          "bn": "আসমা ও তাঁর মা"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim narrate from Asma bint Abi Bakr (RA) that her mother came to her while still a polytheist, during the period of the treaty, and Asma asked the Prophet ﷺ whether she should keep ties with her. He told her to keep ties with her mother. The mufassirun regularly set this report beside our verse, and it is the verse in miniature: one named person, one real relationship, and the answer yes.",
            "bn": "ইমাম বুখারী ও ইমাম মুসলিম আসমা বিনতে আবু বকর (রাঃ) থেকে বর্ণনা করেন যে সন্ধির সময়কালে তাঁর মা — তখনো মুশরিক — তাঁর কাছে আসেন, আর আসমা নবী ﷺ-কে জিজ্ঞেস করেন, তিনি কি তাঁর সঙ্গে আত্মীয়তার সম্পর্ক রাখবেন। নবী ﷺ তাঁকে মায়ের সঙ্গে সম্পর্ক বজায় রাখতে বলেন। মুফাসসিরগণ নিয়মিতভাবে এই বর্ণনাটি এই আয়াতের পাশে রাখেন, আর এটি যেন আয়াতটিরই ক্ষুদ্র সংস্করণ: একজন নির্দিষ্ট মানুষ, একটি বাস্তব সম্পর্ক, আর উত্তর — হ্যাঁ।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Whom He Loves",
          "bn": "যাদের তিনি ভালোবাসেন"
        },
        "p": [
          {
            "en": "The verse ends on a clause the Quran repeats. Inna Allaha yuhibbu al-muqsitin also closes 5:42, where the Prophet ﷺ is told that if he judges between them he must judge with justice, and it closes 49:9, on reconciling two warring parties of believers. Three settings — a courtroom, a quarrel inside the community, and dealings with outsiders — and one identical ending. The love is attached to the conduct, not to the standing of whoever receives it.",
            "bn": "আয়াতটি শেষ হয় এমন এক বাক্যাংশে যা কুরআন একাধিকবার বলে। 'ইন্নাল্লাহা ইউহিব্বুল মুক্‌সিতীন' 5:42-এর শেষেও আছে, যেখানে নবী ﷺ-কে বলা হয়েছে তিনি যদি তাদের মধ্যে বিচার করেন তবে ন্যায়ের সঙ্গেই করবেন; আর তা শেষ করে 49:9-কেও, যা মুমিনদের দুই বিবদমান দলের মধ্যে মীমাংসার কথা বলে। তিনটি প্রেক্ষাপট — আদালত, সম্প্রদায়ের ভেতরের ঝগড়া, আর বাইরের মানুষের সঙ্গে লেনদেন — আর শেষটি একই। ভালোবাসা যুক্ত আচরণের সঙ্গে, যে তা পাচ্ছে তার মর্যাদার সঙ্গে নয়।"
          },
          {
            "en": "Muslim narrates from Abdullah ibn Amr (RA) that the Prophet ﷺ said those who are just will be with Allah upon pulpits of light: those who are just in their judgement, with their families, and in what they are given charge of. Notice where the hadith places justice. It is not confined to a bench. It follows a person home, and the household is listed alongside the courtroom as somewhere the same quality is either practised or dropped.",
            "bn": "ইমাম মুসলিম আবদুল্লাহ ইবনে আমর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: ন্যায়পরায়ণরা আল্লাহর কাছে নূরের মিম্বরের উপর থাকবে — যারা তাদের বিচারে, তাদের পরিবারে এবং যা তাদের দায়িত্বে দেওয়া হয়েছে তাতে ন্যায় করে। লক্ষ করুন হাদীসটি ন্যায়বিচারকে কোথায় রাখে। এটি কেবল বিচারাসনে সীমাবদ্ধ নয়। এটি মানুষের সঙ্গে ঘর পর্যন্ত যায়, আর পরিবারকে আদালতের পাশেই রাখা হয় — একই গুণ সেখানেও হয় পালিত হয়, নয়তো পরিত্যক্ত হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Bites Now",
          "bn": "আজ এটি কোথায় লাগে"
        },
        "p": [
          {
            "en": "Few readers will ever sign a treaty, but this verse's test is easy to run. Take someone whose beliefs you hold to be false and who has never harmed you: a neighbour, a colleague, a landlord, a relative who left the religion. The verse says two things about them. You are cleared to be warm, and you are bound to be exact, because the qist that governs wages, receipts, inheritance shares and testimony does not shift with the other party's faith.",
            "bn": "খুব কম পাঠকই কখনো কোনো সন্ধিপত্রে সই করবেন, তবু এই আয়াতের পরীক্ষাটি সহজেই চালানো যায়। এমন কাউকে ভাবুন যার বিশ্বাসকে আপনি ভুল মনে করেন, অথচ যে কখনো আপনার ক্ষতি করেনি: একজন প্রতিবেশী, একজন সহকর্মী, বাড়িওয়ালা, কিংবা দীন ছেড়ে যাওয়া কোনো আত্মীয়। আয়াতটি তাদের সম্পর্কে দুটি কথা বলে। উষ্ণ হওয়ার অনুমতি আপনার আছে, আর নির্ভুল হওয়া আপনার দায়িত্ব — কারণ মজুরি, রসিদ, উত্তরাধিকারের ভাগ ও সাক্ষ্য যে কিস্‌ত দিয়ে চলে, তা অপর পক্ষের ধর্ম দেখে বদলায় না।"
          }
        ]
      }
    ]
  }
});
