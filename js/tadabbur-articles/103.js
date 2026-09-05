/**
 * Tadabbur long-form articles — surah 103.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "103:1-3": {
    "sections": [
      {
        "h": {
          "en": "An Oath by Time",
          "bn": "সময়ের শপথ"
        },
        "p": [
          {
            "en": "The surah opens with wal-'asr, by al-'Asr. The commentators offer several senses for the word: time as such, the age or era, and the late afternoon, which is also the name of a prayer. They differ, and it is better to hold the readings together than to pick one silently. What they share is duration: the oath is sworn by the very thing every human being is spending.",
            "bn": "সূরাটি শুরু হয় 'ওয়াল আসর' দিয়ে — আসরের শপথ। শব্দটির একাধিক অর্থ মুফাসসিরগণ উপস্থাপন করেন: সময় সাধারণভাবে, যুগ বা কাল, এবং দিনের শেষভাগ — যা একটি নামাযেরও নাম। তাঁদের মধ্যে মতভেদ আছে, আর নিঃশব্দে একটি বেছে নেওয়ার চেয়ে পাঠগুলো একসঙ্গে ধরে রাখাই ভালো। যা সবগুলোতে অভিন্ন তা হলো ব্যাপ্তি: শপথ নেওয়া হচ্ছে ঠিক সেই জিনিসটির, প্রতিটি মানুষ যা ব্যয় করে চলেছে।"
          },
          {
            "en": "Then the verdict: innal-insana lafi khusr. Khusr is a merchant's word. It is what happens when capital is depleted, when a trader ends the day holding less than he started with. Al-insan, the human being, is stated in the singular and with the definite article, so the claim is about humanity as such. The default position, the verse says, is running at a loss.",
            "bn": "এরপর আসে রায়: ইন্নাল ইনসানা লাফী খুসর। 'খুসর' একটি ব্যবসায়িক শব্দ। মূলধন ক্ষয়ে গেলে যা ঘটে, দিনের শেষে ব্যবসায়ীর হাতে শুরুর চেয়ে কম থাকলে যা হয় — সেটিই খুসর। 'আল-ইনসান' শব্দটি এসেছে একবচনে ও নির্দিষ্টতাবাচক অব্যয়সহ, ফলে দাবিটি সমগ্র মানবজাতিকে নিয়ে। আয়াত বলছে, ডিফল্ট অবস্থাটাই হলো লোকসানে চলা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Only Exception",
          "bn": "একমাত্র ব্যতিক্রম"
        },
        "p": [
          {
            "en": "The third verse begins with illa, except, and then lists four things. Alladhina amanu, those who believed. Wa 'amilus-salihat, and did righteous deeds. Wa tawasaw bil-haqq, and enjoined one another to truth. Wa tawasaw bis-sabr, and enjoined one another to patience. Nothing else is added, and nothing on the list is optional, since they are joined by simple conjunction inside a single exception clause.",
            "bn": "তৃতীয় আয়াত শুরু হয় 'ইল্লা' দিয়ে — অর্থাৎ 'ছাড়া' — এরপর চারটি জিনিসের তালিকা। আল্লাযীনা আমানূ — যারা ঈমান এনেছে। ওয়া 'আমিলুস সালিহাত — এবং সৎকাজ করেছে। ওয়া তাওয়াসাও বিল হাক্ক — এবং একে অপরকে সত্যের উপদেশ দিয়েছে। ওয়া তাওয়াসাও বিস সাবর — এবং একে অপরকে ধৈর্যের উপদেশ দিয়েছে। এর বাইরে কিছু যোগ করা হয়নি, আর তালিকার কোনোটিই ঐচ্ছিক নয় — কারণ একটিমাত্র ব্যতিক্রম-বাক্যের ভেতরে সেগুলো সরল সংযোজক দিয়ে যুক্ত।"
          },
          {
            "en": "The verb tawasaw is a form that means doing something to one another, mutually. It is not enough to be advised, and not enough to advise. The commentators regularly point out the structure: the first two conditions are what a person does with themselves, and the last two are what they do with other people. A private religion of faith and good deeds does not meet the surah's own definition of escape from loss.",
            "bn": "'তাওয়াসাও' ক্রিয়াপদটি এমন এক গঠনে, যা পারস্পরিকতা বোঝায় — একে অপরের প্রতি করা। কেবল উপদেশ পাওয়া যথেষ্ট নয়, কেবল উপদেশ দেওয়াও নয়। মুফাসসিরগণ নিয়মিত কাঠামোটি দেখান: প্রথম দুটি শর্ত মানুষ নিজের সঙ্গে যা করে, আর শেষ দুটি সে অন্যদের সঙ্গে যা করে। ঈমান ও সৎকর্মের একান্ত ব্যক্তিগত ধর্মচর্চা ক্ষতি থেকে মুক্তির ব্যাপারে সূরার নিজের সংজ্ঞাটিই পূরণ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Neighbours in the Mushaf",
          "bn": "মুসহাফে এর প্রতিবেশীরা"
        },
        "p": [
          {
            "en": "Surah al-'Asr is Makkan and sits between two surahs about misplaced investment. Before it, 102:1-2 opens Surah at-Takathur with the charge that rivalry in accumulation distracted people until they visited the graves. After it, Surah al-Humazah in 104:1-3 describes the one who gathers wealth and counts it, thinking his wealth has made him immortal. Al-'Asr stands between them and names what the capital actually is.",
            "bn": "সূরা আল-আসর মক্কী, আর এর অবস্থান ভুল জায়গায় বিনিয়োগ নিয়ে দুটি সূরার মাঝখানে। এর আগে 102:1-2 দিয়ে সূরা আত-তাকাসুর শুরু হয় এই অভিযোগে যে সঞ্চয়ের প্রতিযোগিতা মানুষকে গাফিল করে রেখেছে, শেষে তারা কবরে গিয়ে পৌঁছেছে। এর পরে সূরা আল-হুমাযাহ 104:1-3-এ বর্ণনা করে সেই ব্যক্তিকে, যে সম্পদ জমায় ও গুনে রাখে এবং ভাবে তার সম্পদ তাকে চিরস্থায়ী করে দেবে। এই দুইয়ের মাঝখানে দাঁড়িয়ে আল-আসর জানিয়ে দেয় প্রকৃত মূলধনটি আসলে কী।"
          },
          {
            "en": "Read in that sequence, the loss described is not a threat about the next life alone. It is a description of a life spent acquiring things that cannot be carried past the grave. The surah is only three verses, and it was revealed to a community that had very little; the diagnosis was never about the size of the holdings but about what the hours were being converted into.",
            "bn": "এই ধারাবাহিকতায় পড়লে বোঝা যায়, বর্ণিত ক্ষতিটি কেবল পরকাল নিয়ে হুমকি নয়। এটি এমন এক জীবনের বর্ণনা, যা কাটে এমন সব জিনিস অর্জনে যা কবরের ওপারে বয়ে নেওয়া যায় না। সূরাটি মাত্র তিন আয়াতের, আর তা নাযিল হয়েছিল এমন এক সমাজে যাদের সম্পদ ছিল খুবই কম; রোগনির্ণয়টি কখনোই সম্পদের পরিমাণ নিয়ে ছিল না, ছিল ঘণ্টাগুলো কীসে রূপান্তরিত হচ্ছে তা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Was Valued",
          "bn": "এর মূল্যায়ন"
        },
        "p": [
          {
            "en": "Ibn Kathir relates the statement of ash-Shafi'i that if people reflected on this surah it would be enough for them, a remark repeated in many later commentaries. The point being made is about completeness, not about replacing the rest of the Quran. The surah names belief, action, truth and endurance, and it is difficult to think of a religious duty that does not fall under one of those four headings.",
            "bn": "ইবনে কাসীর ইমাম শাফিঈর সেই উক্তিটি বর্ণনা করেন যে মানুষ যদি এই সূরাটি নিয়ে চিন্তা করত, তবে এটিই তাদের জন্য যথেষ্ট হতো — যে কথাটি পরবর্তী বহু তাফসীরে পুনরাবৃত্ত হয়েছে। এখানে যে কথাটি বলা হচ্ছে তা পূর্ণতা সম্পর্কে, কুরআনের বাকি অংশের বিকল্প হওয়া সম্পর্কে নয়। সূরাটি নাম নেয় ঈমান, আমল, সত্য ও অবিচলতার — আর এমন কোনো ধর্মীয় দায়িত্ব ভাবা কঠিন, যা এই চারটি শিরোনামের কোনো একটির নিচে পড়ে না।"
          },
          {
            "en": "At-Tabarani reports that when two of the companions met, they would not part until one recited Surah al-'Asr to the other and then gave the greeting of peace. Whatever the exact grading of that report, it describes a practice that fits the surah precisely: the third verse commands mutual reminder, so reciting it to one another is the surah being obeyed rather than merely recited.",
            "bn": "তাবারানী বর্ণনা করেন, দুজন সাহাবী পরস্পরের সাক্ষাৎ পেলে ততক্ষণ আলাদা হতেন না যতক্ষণ না একজন অন্যজনকে সূরা আল-আসর পড়ে শোনাতেন এবং তারপর সালাম দিতেন। সেই বর্ণনার মান যা-ই হোক, এটি এমন এক আমলের বর্ণনা যা সূরাটির সঙ্গে হুবহু মেলে: তৃতীয় আয়াত পারস্পরিক উপদেশের আদেশ দেয়, তাই একে অপরকে তা পড়ে শোনানো মানে সূরাটি কেবল তিলাওয়াত নয়, তা পালন করা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Clause People Skip",
          "bn": "যে অংশটি মানুষ এড়িয়ে যায়"
        },
        "p": [
          {
            "en": "The two mutual clauses are the ones most often left out in practice, because they require other people and therefore friction. Enjoining truth means being the person who says the difficult thing kindly, and being the person who can hear it without ending the friendship. Both halves are rare. A community where nobody corrects anybody is usually described as peaceful right up until something breaks.",
            "bn": "পারস্পরিক দুটি শর্তই বাস্তবে সবচেয়ে বেশি বাদ পড়ে, কারণ এগুলোর জন্য অন্য মানুষ লাগে — আর তাতে ঘর্ষণ তৈরি হয়। সত্যের উপদেশ দেওয়া মানে সেই ব্যক্তি হওয়া, যে কঠিন কথাটি ভদ্রভাবে বলতে পারে; আবার সেই ব্যক্তিও হওয়া, যে তা শুনে সম্পর্ক শেষ করে দেয় না। দুটোই বিরল। যে সমাজে কেউ কাউকে সংশোধন করে না, তাকে সাধারণত শান্তিপূর্ণ বলা হয় — ঠিক ততক্ষণ, যতক্ষণ না কিছু একটা ভেঙে পড়ে।"
          },
          {
            "en": "Patience is placed last for a reason the commentators often note: truth-telling produces resistance, and the person who begins advising will need endurance more than the one who stays silent. Sabr in Quranic usage covers holding to obedience, holding back from what is forbidden, and holding steady under what cannot be changed. All three are needed by anyone who takes the third clause seriously.",
            "bn": "ধৈর্যকে সবার শেষে রাখার একটি কারণ মুফাসসিরগণ প্রায়ই উল্লেখ করেন: সত্য বললে প্রতিরোধ আসে, আর যে উপদেশ দেওয়া শুরু করে তার অবিচলতার প্রয়োজন হয় নীরব থাকা মানুষটির চেয়ে বেশি। কুরআনি ব্যবহারে 'সবর' ধারণ করে আনুগত্যে অটল থাকা, নিষিদ্ধ থেকে নিজেকে ধরে রাখা, এবং যা বদলানো যায় না তার নিচে স্থির থাকা। যে তৃতীয় শর্তটিকে গুরুত্বের সঙ্গে নেয়, তার এই তিনটিই প্রয়োজন হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Verses, One Audit",
          "bn": "তিন আয়াত, এক হিসাব"
        },
        "p": [
          {
            "en": "Used honestly, the surah is a weekly audit with four lines. Is there belief that is actually being fed, or only inherited. Is there action, meaning something specific done this week that would not have been done otherwise. Is there anyone I told the truth to when it was easier not to. Is there something I stayed with when I wanted to stop.",
            "bn": "সততার সঙ্গে ব্যবহার করলে সূরাটি চার লাইনের এক সাপ্তাহিক হিসাব। ঈমান কি সত্যিই পুষ্ট হচ্ছে, নাকি কেবল উত্তরাধিকারসূত্রে পাওয়া? আমল কি আছে — অর্থাৎ এই সপ্তাহে সুনির্দিষ্ট এমন কিছু কি করা হয়েছে, যা না হলে হতো না? এমন কেউ কি আছে, যাকে চুপ থাকাই সহজ ছিল অথচ আমি সত্যটি বলেছি? আর এমন কিছু কি আছে, যা ছেড়ে দিতে ইচ্ছে করছিল তবু আমি ধরে রেখেছি?"
          },
          {
            "en": "The last clause also suggests a structural fix rather than a resolution. Most people who keep the four qualities alive do so because of one or two relationships in which honesty is expected and reminders are normal. Choosing that company deliberately, and being useful in it rather than only supplied by it, is the most practical response this surah asks for.",
            "bn": "শেষ শর্তটি কোনো সংকল্প নয়, বরং একটি কাঠামোগত সমাধানের ইঙ্গিত দেয়। যাঁরা এই চারটি গুণ জীবন্ত রাখেন, তাঁদের বেশিরভাগই তা পারেন এমন দু-একটি সম্পর্কের কারণে, যেখানে সততা প্রত্যাশিত এবং স্মরণ করিয়ে দেওয়া স্বাভাবিক। সেই সঙ্গটি সচেতনভাবে বেছে নেওয়া, আর সেখানে কেবল গ্রহীতা না থেকে নিজেও উপকারী হওয়া — এটাই এই সূরার চাওয়া সবচেয়ে ব্যবহারিক জবাব।"
          }
        ]
      }
    ]
  }
});
