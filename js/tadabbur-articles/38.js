/**
 * Tadabbur long-form articles — surah 38.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "38:29": {
    "sections": [
      {
        "h": {
          "en": "The One That Is Not a Rebuke",
          "bn": "যেটি তিরস্কার নয়"
        },
        "p": [
          {
            "en": "The verb of tadabbur is used of the Quran in four places: 4:82, 23:68, 38:29 and 47:24. Three of the four are questions aimed at people who were not doing it — do they not ponder, have they not pondered the word. This verse is the exception. It makes no accusation and asks nothing. It simply states, in nine words of Arabic, why the Book was sent down at all.",
            "bn": "কুরআন সম্পর্কে তাদাব্বুরের ক্রিয়াপদটি ব্যবহৃত হয়েছে চারটি জায়গায়: 4:82, 23:68, 38:29 এবং 47:24। এর মধ্যে তিনটিই প্রশ্ন, যা ছোড়া হয়েছে তাদের দিকে যারা তা করছিল না — তারা কি চিন্তা-ভাবনা করে না, তারা কি এই বাণী নিয়ে ভাবেনি। আলোচ্য আয়াতটি ব্যতিক্রম। এতে কোনো অভিযোগ নেই, কোনো প্রশ্নও নেই। আরবি নয়টি শব্দে এটি কেবল জানিয়ে দেয়, কিতাবটি আদৌ কেন নাযিল হয়েছে।"
          },
          {
            "en": "That is why this verse, rather than the more famous questions, is the charter of the whole exercise. A rebuke tells you that you have failed at something; a statement of purpose tells you what the thing is for. Kitabun anzalnahu ilayka mubarakun liyaddabbaru ayatih. Sent down, blessed, so that its verses may be pondered. Everything else a reader does with the Book is measured against that sentence.",
            "bn": "এ কারণেই বেশি পরিচিত প্রশ্নগুলো নয়, বরং এই আয়াতটিই গোটা কাজটির সনদ। তিরস্কার জানায় আপনি কোথায় ব্যর্থ হয়েছেন; আর উদ্দেশ্যের ঘোষণা জানায় জিনিসটি কীসের জন্য। কিতাবুন আনযালনাহু ইলাইকা মুবারাকুল লিইয়াদ্দাব্বারূ আয়াতিহ। নাযিলকৃত, কল্যাণময়, যাতে এর আয়াতগুলো নিয়ে গভীরভাবে ভাবা হয়। পাঠক কিতাবটি নিয়ে আর যা কিছু করেন, তার সবই এই বাক্যের নিরিখে মাপা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Blessed, and Sent to You",
          "bn": "কল্যাণময়, এবং তোমার কাছে প্রেরিত"
        },
        "p": [
          {
            "en": "Mubarak is the second word the verse spends on the Book, and the lexicographers connect its root to the birkah, a pool: water that stays instead of running off. Barakah on that understanding is good that settles and keeps yielding, rather than good that arrives and is used up. A blessed thing gives more than its size accounts for, and gives it again the next time it is drawn on.",
            "bn": "কিতাব সম্পর্কে আয়াতটির দ্বিতীয় গুরুত্বপূর্ণ শব্দ 'মুবারাক', আর অভিধানবিদগণ এর মূলকে যুক্ত করেন 'বিরকাহ' বা জলাশয়ের সঙ্গে — যে পানি গড়িয়ে চলে না, থেকে যায়। এই বোঝাপড়ায় বরকত মানে এমন কল্যাণ যা থিতু হয় এবং দিতে থাকে, একবার এসে ফুরিয়ে যাওয়া কল্যাণ নয়। বরকতময় জিনিস তার আকারের হিসাবের চেয়ে বেশি দেয়, আর পরের বার তোলার সময় আবারও দেয়।"
          },
          {
            "en": "The revelation is called mubarak in four places: 6:92, 6:155, 21:50 and here. In the first three the word points at what came down and nothing more — this is a Book We have sent down, blessed, or a blessed message We have sent down. Only here is ilayka added, to you, naming the one it came to, and only here does the purpose follow immediately. The verse says at once what the blessing is for.",
            "bn": "ওহীকে 'মুবারাক' বলা হয়েছে চারটি জায়গায়: 6:92, 6:155, 21:50 এবং এখানে। প্রথম তিনটিতে শব্দটি কেবল নাযিলকৃত জিনিসটির দিকেই ইঙ্গিত করে — এই তো কিতাব, আমি তা নাযিল করেছি, কল্যাণময়; কিংবা এই কল্যাণময় উপদেশবাণী, আমি তা নাযিল করেছি। কেবল এখানেই যুক্ত হয়েছে 'ইলাইকা', তোমার কাছে, অর্থাৎ যাঁর কাছে তা এসেছে তাঁকে নির্দিষ্ট করা হয়েছে; আর কেবল এখানেই সঙ্গে সঙ্গে উদ্দেশ্যটিও আসে। আয়াতটি তৎক্ষণাৎ বলে দেয় বরকতটি কীসের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "What Sits Around It",
          "bn": "চারপাশে যা আছে"
        },
        "p": [
          {
            "en": "Two verses earlier, 38:27 denies that the heaven and the earth and what is between them were created aimlessly, and calls the opposite the assumption of those who disbelieve. 38:28, immediately before ours, asks whether those who believe and do righteous deeds would be treated like corrupters in the land. Then the Book arrives. A purposeful creation and a just outcome are stated first; the Book is introduced as what makes both known.",
            "bn": "দুই আয়াত আগে 38:27 অস্বীকার করে যে আসমান, যমীন ও এ দুয়ের মাঝে যা আছে তা অনর্থক সৃষ্টি করা হয়েছে, আর এর বিপরীত ধারণাকে বলে কাফিরদের ধারণা। ঠিক আগের আয়াত 38:28 প্রশ্ন করে, যারা ঈমান আনে ও সৎকাজ করে তাদের কি ভূমিতে বিপর্যয় সৃষ্টিকারীদের মতো গণ্য করা হবে। এরপরই আসে কিতাব। প্রথমে বলা হয় উদ্দেশ্যপূর্ণ সৃষ্টি ও ন্যায্য পরিণতির কথা; আর কিতাবকে উপস্থাপন করা হয় সেই দুটিকে জানানোর মাধ্যম হিসেবে।"
          },
          {
            "en": "The verse after it, 38:30, turns to Sulayman (AS), and the surah goes on with the accounts of the prophets. So the charter of reflection is not placed in a chapter about scripture. It is set down in the middle of stories, between Dawud (AS) and his son, as if to tell the reader mid-narrative what the narratives are there for.",
            "bn": "এর পরের আয়াত 38:30 ফিরে যায় সুলাইমান (আঃ)-এর প্রসঙ্গে, আর সূরাটি নবীদের বৃত্তান্ত নিয়ে এগিয়ে চলে। অর্থাৎ চিন্তা-ভাবনার সনদটি রাখা হয়নি কিতাব-বিষয়ক কোনো অধ্যায়ে। তা বসানো হয়েছে কাহিনির মাঝখানে, দাউদ (আঃ) ও তাঁর পুত্রের মধ্যবর্তী স্থানে — যেন বর্ণনার ফাঁকেই পাঠককে বলে দেওয়া হয়, এই বর্ণনাগুলো কেন এখানে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verse at a Time",
          "bn": "একবারে একটি আয়াত"
        },
        "p": [
          {
            "en": "Liyaddabbaru is li-yatadabbaru with the ta absorbed into the following letter, and the verb pattern it belongs to carries effort spread over time — a thing done to oneself, gradually, and not at one stroke. The lam in front of it is the lam of purpose. Nothing in the word suggests a single flash of insight; everything in it suggests returning, and returning again.",
            "bn": "'লিইয়াদ্দাব্বারূ' আসলে 'লিইয়াতাদাব্বারূ', যেখানে 'তা' পরের বর্ণে মিশে গেছে; আর ক্রিয়াপদটি যে কাঠামোর, তা সময় জুড়ে ছড়ানো প্রচেষ্টার অর্থ বহন করে — এমন কাজ যা মানুষ নিজের উপর ধীরে ধীরে প্রয়োগ করে, এক ধাক্কায় নয়। এর আগের 'লাম' হলো উদ্দেশ্যবাচক লাম। শব্দটির কোথাও এক ঝলকে জ্ঞানলাভের ইঙ্গিত নেই; সবটুকুই ইঙ্গিত করে বারবার ফিরে আসার দিকে।"
          },
          {
            "en": "Its object is chosen with the same care: ayatih, its verses, not the Book as a whole. The unit of reflection is the single verse. That is a merciful specification, because a reader who resolves to ponder the Quran is facing something too large to begin, while a reader who resolves to ponder one verse has already begun. The purpose named here is reachable in a few minutes tonight.",
            "bn": "এর কর্মপদটিও সমান যত্নে বাছাই করা: 'আয়াতিহ' — এর আয়াতসমূহ, গোটা কিতাব নয়। চিন্তা-ভাবনার একক হলো একটি আয়াত। এটি এক দয়ার্দ্র নির্দিষ্টকরণ, কারণ 'কুরআন নিয়ে ভাবব' — এই সংকল্প এত বিশাল যে শুরু করাই কঠিন; কিন্তু 'একটি আয়াত নিয়ে ভাবব' — এই সংকল্প নেওয়া মাত্রই শুরু হয়ে যায়। এখানে ঘোষিত উদ্দেশ্যটি আজ রাতেই কয়েক মিনিটে নাগালের ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Have Kernels",
          "bn": "যাদের শাঁস আছে"
        },
        "p": [
          {
            "en": "Ulu al-albab closes the verse. Lubb is the kernel of a thing — the soft heart inside the shell, the part that is actually eaten. So the phrase names people who have got past the husk of a matter to what is inside it. It occurs sixteen times in the Quran, twice in this surah: here, and at 38:43, where Ayyub (AS) and his restored family are called a reminder for them.",
            "bn": "আয়াতটি শেষ হয় 'উলুল-আলবাব' দিয়ে। 'লুব্ব' মানে কোনো কিছুর শাঁস — খোসার ভেতরের নরম অংশ, যেটুকু আসলে খাওয়া হয়। তাই পরিভাষাটি সেই মানুষদের বোঝায় যারা কোনো বিষয়ের খোসা পেরিয়ে ভেতরের অংশ পর্যন্ত পৌঁছেছে। কুরআনে এটি এসেছে ষোলো বার, আর এই সূরাতেই দুবার: এখানে, এবং 38:43 আয়াতে, যেখানে আইয়ূব (আঃ) ও তাঁকে ফিরিয়ে দেওয়া পরিবারকে তাদের জন্য উপদেশ বলা হয়েছে।"
          },
          {
            "en": "Notice how the two purposes are assigned. The pondering is left open — that they may ponder, with no group named. The taking of heed is attributed to those of understanding. Reflection is offered to anyone who will attempt it; the yield is described as what happens in a reader who has a kernel. And the yield is called tadhakkur, remembering, which is what a person does with something already inside him.",
            "bn": "লক্ষ করুন, দুটি উদ্দেশ্য কীভাবে বণ্টিত হয়েছে। চিন্তা-ভাবনার কথাটি খোলা রাখা হয়েছে — যাতে তারা ভাবে, কোনো দল নির্দিষ্ট করা হয়নি। আর উপদেশ গ্রহণের কথাটি যুক্ত করা হয়েছে বুদ্ধিমানদের সঙ্গে। চিন্তা-ভাবনার আহ্বান সবার জন্য, যে কেউ চেষ্টা করতে পারে; আর ফলটির বর্ণনা এমন পাঠকের ক্ষেত্রে যার ভেতরে শাঁস আছে। ফলটিকে বলা হয়েছে 'তাযাক্কুর' বা স্মরণ — যা মানুষ করে তার ভেতরে আগে থেকেই থাকা কোনো কিছু নিয়ে।"
          }
        ]
      }
    ]
  }
});
