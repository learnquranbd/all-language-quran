/**
 * Tadabbur long-form articles — surah 85.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "85:14": {
    "sections": [
      {
        "h": {
          "en": "Two Names, Three Words",
          "bn": "দুটি নাম, তিনটি শব্দ"
        },
        "p": [
          {
            "en": "Wa huwa al-Ghafur al-Wadud. Three words, two of them names. Both names are built on the same Arabic pattern, fa'ul, the intensive form: not one who forgave once but the Forgiving, not one who felt affection once but the Affectionate. The verse spends nothing on explanation. It sets the two names side by side and leaves their neighbours in the surah to do the arguing.",
            "bn": "ওয়া হুয়াল গাফূরুল ওয়াদূদ। তিনটি শব্দ, তার দুটিই নাম। দুটি নামই আরবির একই ওজনে গড়া — 'ফাঊল', অর্থাৎ মুবালাগার রূপ: একবার ক্ষমা করেছেন এমন নন, বরং ক্ষমাশীল; একবার ভালোবেসেছেন এমন নন, বরং প্রেমময়। আয়াতটি ব্যাখ্যায় এক বিন্দুও খরচ করে না। এটি নাম দুটিকে পাশাপাশি বসিয়ে দেয়, আর যুক্তির কাজটুকু ছেড়ে দেয় সূরার প্রতিবেশী আয়াতগুলোর ওপর।"
          }
        ]
      },
      {
        "h": {
          "en": "What Stands on Either Side",
          "bn": "দুই পাশে যা দাঁড়িয়ে আছে"
        },
        "p": [
          {
            "en": "85:12 says the seizing of your Lord is severe. 85:13 says it is He who originates and repeats. Then comes our verse, and after it 85:15 calls Him the honourable Owner of the Throne, and 85:16 says He is the doer of whatever He intends. Read in order, the run refuses to let mercy and might be separated: the verses that promise a severe reckoning are the verses that name Him forgiving and loving.",
            "bn": "85:12 বলে, তোমার প্রতিপালকের পাকড়াও অবশ্যই কঠিন। 85:13 বলে, তিনিই প্রথমবার সৃষ্টি করেন এবং আবার ফিরিয়ে আনেন। এরপর আসে আমাদের আয়াতটি, আর তার পরে 85:15 তাঁকে বলে আরশের অধিপতি, মহা সম্মানিত, এবং 85:16 বলে, তিনি যা চান তাই করেন। ক্রম অনুসারে পড়লে এই ধারাটি রহমত ও শক্তিকে আলাদা করতে দেয় না: যে আয়াতগুলো কঠিন হিসাবের প্রতিশ্রুতি দেয়, সেই আয়াতগুলোই তাঁকে ক্ষমাশীল ও প্রেমময় বলে ডাকে।"
          },
          {
            "en": "Ibn Kathir notes that the last word of 85:15 has been recited in two ways — as a description of the Lord and as a description of the Throne — and that both meanings are sound. But the point of the sequence is not softening. Al-Ghafur al-Wadud is being said by a Lord who has just described His own grip as severe, so the forgiveness on offer is not weakness and cannot be mistaken for it.",
            "bn": "ইবনে কাসীর উল্লেখ করেন যে 85:15-এর শেষ শব্দটি দুই কিরাআতে পড়া হয়েছে — একবার প্রতিপালকের বিশেষণ হিসেবে, আরেকবার আরশের বিশেষণ হিসেবে — এবং দুটি অর্থই সঠিক। তবে এই ক্রমের উদ্দেশ্য কোমল করে দেওয়া নয়। 'আল-গাফূরুল ওয়াদূদ' কথাটি বলছেন এমন এক প্রতিপালক, যিনি এইমাত্র নিজের পাকড়াওকে কঠিন বলে বর্ণনা করেছেন; ফলে যে ক্ষমা এখানে দেওয়া হচ্ছে তা দুর্বলতা নয়, আর দুর্বলতা বলে ভুলও করা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Surah Was Standing",
          "bn": "সূরাটি তখন কোথায় দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "The context is the worst thing in the surah. 85:4-7 describe the companions of the trench, a fire fed with fuel, and men seated at its edge witnessing what was being done to the believers. 85:8 states the entirety of the believers' offence: nothing was held against them except that they believed in Allah, the Exalted in Might, the Praiseworthy. These names are spoken over a burning ditch.",
            "bn": "প্রেক্ষাপটটি এই সূরার সবচেয়ে ভয়ংকর ঘটনা। 85:4-7 বর্ণনা করে গর্তওয়ালাদের কথা, ইন্ধনে ভরা আগুনের কথা, আর গর্তের কিনারায় বসে মু'মিনদের সঙ্গে যা করা হচ্ছিল তা দেখতে থাকা লোকদের কথা। 85:8 মু'মিনদের গোটা 'অপরাধ'টুকু বলে দেয়: তাদের বিরুদ্ধে আর কিছুই ছিল না, কেবল এটুকুই যে তারা মহাপরাক্রান্ত, প্রশংসিত আল্লাহর প্রতি ঈমান এনেছিল। এই নামগুলো উচ্চারিত হচ্ছে একটি জ্বলন্ত গর্তের ওপরে দাঁড়িয়ে।"
          },
          {
            "en": "And 85:10 has already said something almost unbearable. Those who persecuted the believing men and the believing women and then did not repent will have the punishment of Hell and the punishment of the Burning Fire. The condition sits inside the sentence: and then did not repent. Repentance is left open even to these people, and four verses later the door they were left is named — al-Ghafur al-Wadud.",
            "bn": "আর 85:10 এর আগেই এমন একটি কথা বলে ফেলেছে যা প্রায় অসহনীয়। যারা মু'মিন পুরুষ ও মু'মিন নারীদের ওপর নির্যাতন চালিয়েছে, অতঃপর তওবা করেনি, তাদের জন্য রয়েছে জাহান্নামের শাস্তি এবং দগ্ধ হওয়ার শাস্তি। শর্তটি বাক্যের ভেতরেই বসে আছে: অতঃপর তওবা করেনি। এদের জন্যও তওবার পথ খোলা রাখা হয়েছে, আর চার আয়াত পরে সেই খোলা দরজাটির নাম বলে দেওয়া হয় — আল-গাফূরুল ওয়াদূদ।"
          }
        ]
      },
      {
        "h": {
          "en": "Twice in the Whole Quran",
          "bn": "গোটা কুরআনে দুইবার"
        },
        "p": [
          {
            "en": "Al-Wadud occurs in two places in the entire Quran, and both attach it to turning back. Here it follows a verse that made repentance the hinge. In 11:90 it is Shu'ayb (AS) speaking to his people: ask forgiveness of your Lord, then repent to Him; indeed my Lord is Merciful and Wadud. The name is not scattered through the Book. Both times it is spoken where somebody is being invited back.",
            "bn": "গোটা কুরআনে 'আল-ওয়াদূদ' নামটি এসেছে দুটি জায়গায়, আর দুবারই তা যুক্ত হয়েছে ফিরে আসার সঙ্গে। এখানে এটি এসেছে এমন এক আয়াতের পরে, যা তওবাকেই মূল কব্জা বানিয়েছে। আর 11:90-এ এটি বলছেন শুআইব (আঃ), তাঁর সম্প্রদায়কে: তোমরা তোমাদের প্রতিপালকের কাছে ক্ষমা চাও, অতঃপর তাঁরই দিকে ফিরে এসো; নিশ্চয়ই আমার প্রতিপালক পরম দয়ালু, ওয়াদূদ। নামটি কিতাবজুড়ে ছড়িয়ে নেই। দুবারই এটি উচ্চারিত হয়েছে সেখানে, যেখানে কাউকে ফিরে আসার আহ্বান জানানো হচ্ছে।"
          },
          {
            "en": "As for what wudd is, Ibn Kathir reports the gloss of Ibn Abbas (RA) that al-Wadud means al-Habib, the Loving; and he explains al-Ghafur here to mean that He forgives the sin of whoever repents to Him and humbles himself before Him, whatever that sin may be. Put those two together and the pairing is the whole content of the verse. The pardon is not issued coldly, at a distance, by an offended party.",
            "bn": "'উদ্‌দ' বলতে কী বোঝায়, সে সম্পর্কে ইবনে কাসীর ইবনে আব্বাস (রাঃ)-এর ব্যাখ্যা উদ্ধৃত করেন: 'আল-ওয়াদূদ' অর্থ 'আল-হাবীব', অর্থাৎ ভালোবাসেন যিনি। আর 'আল-গাফূর' সম্পর্কে তিনি বলেন, যে-ই তাঁর কাছে তওবা করে এবং তাঁর সামনে বিনীত হয়, তিনি তার গুনাহ ক্ষমা করে দেন — সেই গুনাহ যা-ই হোক না কেন। দুটিকে পাশাপাশি রাখলে এই জোড়াই আয়াতটির পুরো বক্তব্য। ক্ষমাটি কোনো ক্ষুব্ধ পক্ষের তরফ থেকে দূরত্ব রেখে, ঠান্ডা গলায় দেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ones It Was Sent To",
          "bn": "যাদের কাছে এটি পাঠানো হয়েছিল"
        },
        "p": [
          {
            "en": "Surah al-Burooj came down in Makkah, to a small community being hurt for what it believed, and the story of the trench is told to them about people hurt before them who did not give way. Muslim narrates from Suhayb (RA) the long account of the boy and the king that the commentators read alongside these verses. What the surah offers such a community is not rescue in the next line. It offers 85:11, and then these names.",
            "bn": "সূরা আল-বুরূজ নাযিল হয়েছিল মক্কায়, এমন একটি ছোট সমাজের উদ্দেশে যারা নিজেদের বিশ্বাসের কারণে নির্যাতিত হচ্ছিল; আর গর্তের ঘটনাটি তাদের শোনানো হচ্ছে এমন কিছু মানুষ সম্পর্কে, যারা তাদের আগে নির্যাতিত হয়েও নতি স্বীকার করেনি। মুসলিম সুহাইব (রাঃ) থেকে বালক ও বাদশাহর দীর্ঘ ঘটনাটি বর্ণনা করেন, যা মুফাসসিরগণ এই আয়াতগুলোর পাশে রেখে পড়েন। এমন একটি সমাজকে সূরাটি পরের পঙ্‌ক্তিতেই উদ্ধারের প্রতিশ্রুতি দেয় না। এটি দেয় 85:11, আর তারপর এই নামগুলো।"
          },
          {
            "en": "That order is worth sitting with. The believers are promised gardens, the persecutors are promised a severe seizing, and then, before the surah moves on, Allah names Himself forgiving and affectionate. A reader who arrives here carrying an old failure is being told two things at once: that the reckoning is entirely real, and that the One conducting it holds His returning servants dear.",
            "bn": "এই ক্রমটির সঙ্গে কিছুক্ষণ বসে থাকা দরকার। মু'মিনদের প্রতিশ্রুতি দেওয়া হয় জান্নাতের, নির্যাতনকারীদের প্রতিশ্রুতি দেওয়া হয় কঠিন পাকড়াওয়ের, আর তারপর সূরাটি সামনে এগোনোর আগেই আল্লাহ নিজেকে ক্ষমাশীল ও প্রেমময় বলে পরিচয় দেন। যে পাঠক পুরোনো কোনো ব্যর্থতা বুকে নিয়ে এখানে এসে পৌঁছান, তাঁকে একসঙ্গে দুটি কথা বলা হচ্ছে: হিসাব সম্পূর্ণ বাস্তব, আর যিনি সেই হিসাব নিচ্ছেন তিনি ফিরে আসা বান্দাদের ভালোবাসেন।"
          }
        ]
      }
    ]
  }
});
