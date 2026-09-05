/**
 * Tadabbur long-form articles — surah 110.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "110:3": {
    "sections": [
      {
        "h": {
          "en": "Three Verses at the End",
          "bn": "শেষের তিন আয়াত"
        },
        "p": [
          {
            "en": "Surah an-Nasr has three verses. An-Nasa'i records that Ibn Abbas (RA) asked Ubaydullah ibn Abdullah which surah of the Quran was revealed last, and when he answered with Idha ja'a nasru Allahi wal-fath, Ibn Abbas told him he had spoken truthfully. The first two verses set a scene: 110:1, when the help of Allah and the conquest come; 110:2, and you see people entering the religion of Allah in crowds. 110:3 is what to do about it.",
            "bn": "সূরা আন-নাসরের আয়াত তিনটি। ইমাম নাসাঈ বর্ণনা করেন, ইবনে আব্বাস (রাঃ) উবায়দুল্লাহ ইবনে আবদুল্লাহকে জিজ্ঞেস করেছিলেন, কুরআনের কোন সূরাটি সর্বশেষ নাযিল হয়েছে; তিনি যখন উত্তর দিলেন 'ইযা জাআ নাসরুল্লাহি ওয়াল ফাতহ', ইবনে আব্বাস (রাঃ) বললেন, তুমি ঠিক বলেছ। প্রথম দুই আয়াত দৃশ্যটি সাজায়: 110:1 — যখন আল্লাহর সাহায্য ও বিজয় আসবে; 110:2 — আর তুমি মানুষকে দেখবে দলে দলে আল্লাহর দীনে প্রবেশ করতে। আর 110:3 বলে দেয় তখন কী করতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Commands and a Reason",
          "bn": "দুটি আদেশ, একটি কারণ"
        },
        "p": [
          {
            "en": "Count what the verse asks. There are two imperatives: fa-sabbih bi-hamdi rabbika, so glorify your Lord with His praise, and wastaghfirh, and seek His forgiveness. Then a statement rather than a third order: innahu kana tawwaba, indeed He has ever been ever-accepting of repentance. The first command joins two things Arabic keeps distinct — tasbih declares Him free of every defect, hamd affirms every perfection — so praise and purification of the concept arrive in one breath.",
            "bn": "আয়াতটি কী চায়, গুনে দেখুন। আদেশ দুটি: 'ফাসাব্বিহ বিহামদি রাব্বিকা' — অতএব তোমার প্রতিপালকের প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করো; আর 'ওয়াস্তাগফিরহু' — এবং তাঁর কাছে ক্ষমা চাও। এরপর তৃতীয় কোনো আদেশ নয়, বরং একটি বিবৃতি: 'ইন্নাহু কানা তাওওয়াবা' — নিশ্চয়ই তিনি সর্বদাই তওবা কবুলকারী। প্রথম আদেশটি এমন দুটি বিষয় জুড়ে দেয় যা আরবি আলাদা রাখে — 'তাসবীহ' তাঁকে সব ত্রুটি থেকে মুক্ত ঘোষণা করে, আর 'হামদ' তাঁর প্রতিটি পূর্ণতা স্বীকার করে — ফলে প্রশংসা ও ধারণার শুদ্ধিকরণ এক নিঃশ্বাসেই আসে।"
          },
          {
            "en": "The second command is the surprising one. Forgiveness is being sought not after a failure but at the summit of a life's work, at the moment the mission visibly succeeded. The Quran does this elsewhere too: 2:199 tells the pilgrims to depart from where the people depart and then seek Allah's forgiveness, placing istighfar at the close of an act of obedience rather than after a sin. Completion is treated as a moment that needs covering, not congratulating.",
            "bn": "দ্বিতীয় আদেশটিই বিস্ময়কর। ক্ষমা চাওয়া হচ্ছে কোনো ব্যর্থতার পরে নয়, বরং জীবনের কাজের শিখরে — ঠিক যে মুহূর্তে মিশনটি দৃশ্যমানভাবে সফল হলো। কুরআন অন্যত্রও এমন করে: 2:199 হাজীদের বলে, মানুষ যেখান থেকে ফেরে সেখান থেকেই ফিরে আসতে এবং তারপর আল্লাহর কাছে ক্ষমা চাইতে — অর্থাৎ ইস্তিগফারকে বসানো হচ্ছে গুনাহের পরে নয়, আনুগত্যের একটি কাজ শেষ হওয়ার মুহূর্তে। সমাপ্তিকে দেখা হচ্ছে এমন এক মুহূর্ত হিসেবে, যার অভিনন্দন নয়, আবরণ দরকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Umar's Gathering",
          "bn": "উমর (রাঃ)-এর মজলিস"
        },
        "p": [
          {
            "en": "Al-Bukhari records that Umar (RA) used to bring Ibn Abbas (RA) into the company of the elders of Badr, and that one of them objected because his own sons were of that age. So Umar asked them all about this surah. Some said we were commanded to praise Allah and seek His forgiveness when He helps us and gives us victory; others said nothing. Then he turned to Ibn Abbas and asked whether that was his view too.",
            "bn": "ইমাম বুখারী বর্ণনা করেন, উমর (রাঃ) ইবনে আব্বাস (রাঃ)-কে বদরের প্রবীণ সাহাবীদের মজলিসে নিয়ে বসাতেন, আর তাঁদের একজন আপত্তি করেছিলেন — কারণ তাঁর নিজের সন্তানেরাও ওই বয়সের। তখন উমর (রাঃ) তাঁদের সবাইকে এই সূরাটি সম্পর্কে জিজ্ঞেস করলেন। কেউ কেউ বললেন, আল্লাহ যখন আমাদের সাহায্য করেন ও বিজয় দেন তখন তাঁর প্রশংসা করতে ও ক্ষমা চাইতে আমাদের আদেশ দেওয়া হয়েছে; আর কেউ কিছুই বললেন না। এরপর তিনি ইবনে আব্বাস (রাঃ)-এর দিকে ফিরে জিজ্ঞেস করলেন, এটিই কি তাঁরও মত।"
          },
          {
            "en": "Ibn Abbas said no, and gave his reading: it was the term of the Messenger of Allah ﷺ of which Allah was informing him — when there comes the help of Allah and the conquest, that is the sign of your death; so glorify the praises of your Lord and seek His forgiveness, for He is ever accepting of repentance. Umar (RA) answered him in one sentence: I do not know of it other than what you have said.",
            "bn": "ইবনে আব্বাস (রাঃ) বললেন, না; এবং নিজের ব্যাখ্যাটি পেশ করলেন: এ ছিল আল্লাহর রাসূল ﷺ-এর জীবনের মেয়াদ, যা আল্লাহ তাঁকে জানিয়ে দিচ্ছিলেন — যখন আল্লাহর সাহায্য ও বিজয় আসবে, সেটিই তোমার বিদায়ের নিদর্শন; সুতরাং তোমার প্রতিপালকের প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করো এবং তাঁর কাছে ক্ষমা চাও, নিশ্চয়ই তিনি তওবা কবুলকারী। উমর (রাঃ) তাঁকে এক বাক্যে জবাব দিলেন: তুমি যা বললে, তা ছাড়া আমি এ বিষয়ে আর কিছু জানি না।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Did With It",
          "bn": "তিনি ﷺ এটি নিয়ে যা করলেন"
        },
        "p": [
          {
            "en": "The Prophet ﷺ did not treat the verse as a message about himself to be discussed. Al-Bukhari records from Aisha (RA) that he used to say often in his bowing and his prostration: Subhanaka Allahumma rabbana wa bihamdika, Allahumma-ghfir li — glory be to You, O Allah our Lord, and with Your praise; O Allah, forgive me. She adds the reason herself: he was interpreting the Quran, that is, putting this very verse into practice inside the prayer.",
            "bn": "নবী ﷺ আয়াতটিকে নিজের সম্পর্কে আলোচনার বিষয় হিসেবে নেননি। ইমাম বুখারী আয়িশা (রাঃ) থেকে বর্ণনা করেন, তিনি ﷺ রুকু ও সিজদায় প্রায়ই বলতেন: 'সুবহানাকা আল্লাহুম্মা রাব্বানা ওয়া বিহামদিকা, আল্লাহুম্মাগফিরলী' — হে আল্লাহ, আমাদের প্রতিপালক, আপনার প্রশংসাসহ আপনার পবিত্রতা ঘোষণা করছি; হে আল্লাহ, আমাকে ক্ষমা করুন। কারণটিও তিনি নিজেই যোগ করেন: তিনি ﷺ কুরআনের ব্যাখ্যা বাস্তবায়ন করছিলেন — অর্থাৎ এই আয়াতটিকেই নামাযের ভেতরে কাজে পরিণত করছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Tawwab",
          "bn": "তাওওয়াব"
        },
        "p": [
          {
            "en": "The closing word carries the comfort. Tawwab is an intensive form, so it is not merely that He accepts repentance but that turning back to His servants in acceptance is His constant way. And kana in front of it stretches that backwards: He has always been so. The verse ends by removing the last excuse, since the one thing the command asks for is the one thing the closing clause guarantees will be received.",
            "bn": "শেষ শব্দটিই স্বস্তি বহন করে। 'তাওওয়াব' একটি আতিশয্যবাচক গঠন; অর্থাৎ কথাটি কেবল এই নয় যে তিনি তওবা কবুল করেন, বরং বান্দাদের দিকে ক্ষমা নিয়ে বারবার ফিরে আসাই তাঁর অবিচল রীতি। আর এর আগে বসা 'কানা' সেই রীতিকে অতীতের দিকে টেনে নিয়ে যায়: তিনি সর্বদাই এমন ছিলেন। আয়াতটি শেষ হয় শেষ অজুহাতটুকু সরিয়ে দিয়ে — কারণ আদেশটি যা চায়, শেষ বাক্যাংশটি ঠিক সেটিই কবুল হওয়ার নিশ্চয়তা দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Etiquette of Arriving",
          "bn": "পৌঁছে যাওয়ার আদব"
        },
        "p": [
          {
            "en": "The verse legislates a response to success, and success is where most people's worship thins out. Hardship drives us to prayer; achievement quietly persuades us that we did it. Surah an-Nasr breaks that by attaching two acts to the moment of victory, and the second of them is an admission of shortfall. Whoever finished the work knows privately how much of it was carried, how many corners were near, and who actually supplied the outcome.",
            "bn": "আয়াতটি সাফল্যের প্রতি সাড়া দেওয়ার বিধান দেয়, অথচ সাফল্যের সময়েই অধিকাংশ মানুষের ইবাদত পাতলা হয়ে আসে। কষ্ট আমাদের নামাযের দিকে ঠেলে দেয়; আর অর্জন নীরবে আমাদের বোঝায় যে কাজটি আমরাই করেছি। সূরা আন-নাসর বিজয়ের মুহূর্তের সঙ্গে দুটি আমল জুড়ে দিয়ে এই ধারা ভেঙে দেয়, আর তার দ্বিতীয়টি হলো ঘাটতির স্বীকারোক্তি। যে কাজটি শেষ করেছে, সে গোপনে জানে তার কতটুকু বয়ে নেওয়া হয়েছিল, কতগুলো ফাঁক কাছাকাছি ছিল, আর ফলাফলটি আসলে কে জুগিয়েছেন।"
          },
          {
            "en": "A workable habit follows the shape of the verse. At the end of anything completed — a project delivered, a debt cleared, a term of study finished, a child raised to a milestone — say subhan Allah wa bihamdih and then astaghfirullah, in that order, before telling anyone the news. It costs a few seconds and it puts the victory in the right hands before the congratulations arrive to put it in the wrong ones.",
            "bn": "আয়াতটির গড়ন ধরেই একটি কার্যকর অভ্যাস দাঁড়ায়। যেকোনো কাজ শেষ হওয়ার পর — একটি প্রকল্প জমা দেওয়া, একটি ঋণ শোধ হওয়া, পড়াশোনার একটি পর্ব শেষ হওয়া, সন্তানের কোনো ধাপ পার হওয়া — খবরটি কাউকে জানানোর আগে বলুন 'সুবহানাল্লাহি ওয়া বিহামদিহ', তারপর 'আস্তাগফিরুল্লাহ' — এই ক্রমেই। এতে কয়েক সেকেন্ড খরচ হয়, আর অভিনন্দন এসে বিজয়টিকে ভুল হাতে তুলে দেওয়ার আগেই তা সঠিক হাতে পৌঁছে যায়।"
          }
        ]
      }
    ]
  }
});
