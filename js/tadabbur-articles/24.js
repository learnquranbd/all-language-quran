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
  }
});
