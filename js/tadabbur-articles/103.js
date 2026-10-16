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
            "bn": "সূরাটি শুরু হয়েছে 'ওয়াল আসর' দিয়ে, অর্থাৎ আসরের শপথ। মুফাসসিরগণ শব্দটির কয়েকটি অর্থ বলেছেন: সময় নিজেই, যুগ বা কাল, আর দিনের শেষ ভাগ, যা একটি নামাজেরও নাম। তাঁদের মধ্যে মতভেদ আছে। চুপচাপ একটি অর্থ বেছে নেওয়ার চেয়ে সবগুলো একসঙ্গে মনে রাখাই ভালো। সব অর্থের মধ্যে মিল একটাই: সময়ের বয়ে চলা। প্রত্যেক মানুষ প্রতিদিন যা খরচ করে চলেছে, আল্লাহ শপথ করেছেন ঠিক সেটিরই।"
          },
          {
            "en": "Then the verdict: innal-insana lafi khusr. Khusr is a merchant's word. It is what happens when capital is depleted, when a trader ends the day holding less than he started with. Al-insan, the human being, is stated in the singular and with the definite article, so the claim is about humanity as such. The default position, the verse says, is running at a loss.",
            "bn": "এরপর আসে রায়: ইন্নাল ইনসানা লাফী খুসর। 'খুসর' ব্যবসার ভাষার শব্দ। পুঁজি ক্ষয়ে গেলে, দিন শেষে ব্যবসায়ীর হাতে সকালের চেয়ে কম থাকলে যা হয়, সেটাই খুসর। 'আল-ইনসান' শব্দটি এসেছে একবচনে, নির্দিষ্টবাচক 'আল' সহ। তাই কথাটা গোটা মানবজাতি সম্পর্কে। আয়াত বলছে, মানুষের স্বাভাবিক অবস্থাই হলো লোকসানে চলা।"
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
            "bn": "তৃতীয় আয়াত শুরু হয়েছে 'ইল্লা' দিয়ে, যার অর্থ 'তবে' বা 'ছাড়া'। এরপর চারটি বিষয়। আল্লাযীনা আমানূ: যারা ঈমান এনেছে। ওয়া 'আমিলুস সালিহাত: এবং নেক আমল করেছে। ওয়া তাওয়াসাও বিল হাক্ক: এবং একে অপরকে সত্যের উপদেশ দিয়েছে। ওয়া তাওয়াসাও বিস সাবর: এবং একে অপরকে সবরের উপদেশ দিয়েছে। এর বাইরে আর কিছু যোগ হয়নি। চারটির কোনোটিই ঐচ্ছিক নয়, কারণ একটিমাত্র ব্যতিক্রমের ভেতরে সবগুলো সাধারণ 'ওয়া' (এবং) দিয়ে জোড়া।"
          },
          {
            "en": "The verb tawasaw is a form that means doing something to one another, mutually. It is not enough to be advised, and not enough to advise. The commentators regularly point out the structure: the first two conditions are what a person does with themselves, and the last two are what they do with other people. A private religion of faith and good deeds does not meet the surah's own definition of escape from loss.",
            "bn": "'তাওয়াসাও' ক্রিয়াটির গঠনই পারস্পরিক, অর্থাৎ একে অপরের সঙ্গে করা। শুধু উপদেশ শোনা যথেষ্ট নয়, শুধু উপদেশ দেওয়াও যথেষ্ট নয়। মুফাসসিরগণ প্রায়ই এই বিন্যাসের দিকে দৃষ্টি আকর্ষণ করেন: প্রথম দুটি শর্ত মানুষের নিজের সঙ্গে, শেষ দুটি অন্য মানুষের সঙ্গে। ঈমান আর নেক আমল নিয়ে কেবল নিজের মধ্যে গুটিয়ে থাকা দ্বীনদারি তাই সূরাটির নিজের মাপকাঠিতেই লোকসান থেকে বাঁচার জন্য যথেষ্ট নয়।"
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
            "bn": "সূরা আল-আসর মক্কী। এর দুই পাশে দুটি সূরা, দুটিই ভুল জায়গায় পুঁজি খাটানো নিয়ে। আগে সূরা আত-তাকাসুর, যার শুরুতেই (১০২:১-২) অভিযোগ: বেশি বেশি জমানোর প্রতিযোগিতা মানুষকে এমন গাফিল করে রেখেছে যে শেষে তারা কবরে গিয়ে পৌঁছেছে। পরে সূরা আল-হুমাযাহ (১০৪:১-৩), যেখানে সেই লোকের কথা, যে সম্পদ জমায়, বারবার গুনে দেখে, আর ভাবে তার সম্পদ তাকে অমর করে রাখবে। এ দুইয়ের মাঝখানে আল-আসর জানিয়ে দেয়, আসল পুঁজিটা কী।"
          },
          {
            "en": "Read in that sequence, the loss described is not a threat about the next life alone. It is a description of a life spent acquiring things that cannot be carried past the grave. The surah is only three verses, and it was revealed to a community that had very little; the diagnosis was never about the size of the holdings but about what the hours were being converted into.",
            "bn": "এই ক্রমে পড়লে বোঝা যায়, এখানে যে লোকসানের কথা, তা কেবল আখিরাতের হুমকি নয়। এ এমন এক জীবনের ছবি, যা কেটে যায় এমন সব জিনিস জোগাড় করতে, যা কবরের ওপারে নিয়ে যাওয়া যায় না। সূরাটি মাত্র তিন আয়াতের। আর এটি নাজিল হয়েছিল এমন মানুষদের মধ্যে, যাদের হাতে প্রায় কিছুই ছিল না। তাই সূরাটির ধরিয়ে দেওয়া দোষ কখনো সম্পদের পরিমাণ নিয়ে ছিল না। প্রশ্ন ছিল, জীবনের ঘণ্টাগুলো কীসে বদলে যাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Was Valued",
          "bn": "সূরাটির কদর"
        },
        "p": [
          {
            "en": "Ibn Kathir relates the statement of ash-Shafi'i that if people reflected on this surah it would be enough for them, a remark repeated in many later commentaries. The point being made is about completeness, not about replacing the rest of the Quran. The surah names belief, action, truth and endurance, and it is difficult to think of a religious duty that does not fall under one of those four headings.",
            "bn": "ইবনে কাসীর ইমাম শাফিঈর উক্তি বর্ণনা করেছেন: মানুষ যদি এই সূরাটি নিয়ে ভাবত, তবে এটিই তাদের জন্য যথেষ্ট হতো। পরের বহু তাফসীরে কথাটি বারবার এসেছে। এর উদ্দেশ্য সূরাটির পূর্ণতা বোঝানো, কুরআনের বাকি অংশের জায়গা নেওয়া নয়। সূরাটিতে আছে ঈমান, আমল, হক আর সবর। দ্বীনের এমন কোনো দায়িত্ব ভাবা কঠিন, যা এই চারটির কোনো একটির মধ্যে পড়ে না।"
          },
          {
            "en": "At-Tabarani reports that when two of the companions met, they would not part until one recited Surah al-'Asr to the other and then gave the greeting of peace. Whatever the exact grading of that report, it describes a practice that fits the surah precisely: the third verse commands mutual reminder, so reciting it to one another is the surah being obeyed rather than merely recited.",
            "bn": "তাবারানী বর্ণনা করেছেন, দুজন সাহাবীর দেখা হলে একজন অন্যজনকে সূরা আল-আসর পড়ে না শোনানো পর্যন্ত তাঁরা বিদায় নিতেন না। তারপর সালাম দিয়ে আলাদা হতেন। বর্ণনাটির সনদের মান ঠিক যা-ই হোক, যে আমলের কথা এতে আছে, তা সূরাটির সঙ্গে হুবহু মেলে। তৃতীয় আয়াত পরস্পরকে উপদেশ দিতে বলে। তাই একে অপরকে সূরাটি শোনানো মানে শুধু তিলাওয়াত নয়, সূরাটির হুকুম মানা।"
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
            "bn": "বাস্তবে পারস্পরিক এই দুটি শর্তই সবচেয়ে বেশি বাদ পড়ে। কারণ এগুলোর জন্য অন্য মানুষ লাগে, আর অন্য মানুষ মানেই ঠোকাঠুকি। সত্যের উপদেশ দেওয়া মানে এমন মানুষ হওয়া, যে কঠিন কথাটা নরম করে বলতে পারে। আবার এমন মানুষও হওয়া, যে সে কথা শুনে সম্পর্ক ছিন্ন করে না। দুটোই বিরল। যে সমাজে কেউ কাউকে শুধরে দেয় না, লোকে সাধারণত তাকে শান্তির সমাজ বলে, যতক্ষণ না একদিন কিছু একটা ভেঙে পড়ে।"
          },
          {
            "en": "Patience is placed last for a reason the commentators often note: truth-telling produces resistance, and the person who begins advising will need endurance more than the one who stays silent. Sabr in Quranic usage covers holding to obedience, holding back from what is forbidden, and holding steady under what cannot be changed. All three are needed by anyone who takes the third clause seriously.",
            "bn": "সবরকে সবার শেষে রাখার একটা কারণ মুফাসসিরগণ প্রায়ই বলেন: সত্য বললে বাধা আসে। যে চুপ থাকে, তার চেয়ে যে উপদেশ দিতে শুরু করে, তার সবর লাগে অনেক বেশি। কুরআনের ভাষায় সবরের তিনটি দিক: আনুগত্যে লেগে থাকা, হারাম থেকে নিজেকে বিরত রাখা, আর যা বদলানো যায় না তাতে অটল থাকা। তৃতীয় আয়াতটিকে যে সত্যিই গুরুত্ব দেয়, তার তিনটিই লাগবে।"
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
            "bn": "সৎভাবে কাজে লাগালে সূরাটি চার লাইনের এক সাপ্তাহিক হিসাব। আমার ঈমান কি সত্যিই খোরাক পাচ্ছে, নাকি শুধু বাপ-দাদার কাছ থেকে পাওয়া? আমল কি আছে, মানে এই সপ্তাহে নির্দিষ্ট এমন কিছু কি করেছি, যা এমনিতে করা হতো না? এমন কেউ কি আছে, যাকে চুপ থাকাই সহজ ছিল, তবু আমি সত্যটা বলেছি? এমন কিছু কি আছে, যা ছেড়ে দিতে মন চাইছিল, তবু আমি লেগে ছিলাম?"
          },
          {
            "en": "The last clause also suggests a structural fix rather than a resolution. Most people who keep the four qualities alive do so because of one or two relationships in which honesty is expected and reminders are normal. Choosing that company deliberately, and being useful in it rather than only supplied by it, is the most practical response this surah asks for.",
            "bn": "শেষ শর্তটি শুধু একটা প্রতিজ্ঞার কথা বলে না, জীবনের বিন্যাস বদলানোর ইঙ্গিতও দেয়। যাঁরা এই চারটি গুণ ধরে রাখতে পারেন, তাঁদের বেশিরভাগই পারেন দু-একটি সম্পর্কের জোরে, যেখানে সত্য বলাটাই প্রত্যাশিত আর মনে করিয়ে দেওয়াটা স্বাভাবিক। ভেবেচিন্তে এমন সঙ্গী বেছে নেওয়া, আর সেখানে শুধু নেওয়া নয়, নিজেও কাজে আসা: এই সূরার দাবির সবচেয়ে বাস্তব জবাব এটাই।"
          }
        ]
      }
    ]
  }
});
