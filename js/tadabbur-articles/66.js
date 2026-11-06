/**
 * Tadabbur long-form articles — surah 66.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "66:1": {
    "sections": [
      {
        "h": {
          "en": "Addressed by His Title",
          "bn": "উপাধি ধরে সম্বোধন"
        },
        "p": [
          {
            "en": "Ya ayyuha-n-nabiyyu: O Prophet. Al-Qurtubi opens Surat at-Tahrim by noting that it is Madinan by the agreement of all, twelve verses long, and that it is also called Surat an-Nabi, the surah of the Prophet. Its first line is addressed to him alone. Ma'arif al-Qur'an observes that the Qur'an, by its general manner, does not call him by his name but by his prophetic title, and it counts this as his special honour. Whatever question follows is put to a man already honoured in the way he is called.",
            "bn": "ইয়া আইয়্যুহান নাবিয়্যু: হে নবী। সূরা তাহরীমের শুরুতে কুরতুবী জানান, সবার ঐকমত্যে এটি মাদানী সূরা, আয়াত বারোটি, আর এর আরেক নাম সূরাতুন নাবী, অর্থাৎ নবীর সূরা। প্রথম আয়াতের সম্বোধন কেবল তাঁরই প্রতি। মাআরিফুল কুরআন লক্ষ করে, কুরআনের সাধারণ রীতি হলো তাঁকে নাম ধরে না ডেকে নবুওয়াতের উপাধি ধরে ডাকা, আর একে সে তাঁর বিশেষ সম্মান বলে গণ্য করে। কাজেই এরপর যে প্রশ্নই আসুক, তা করা হচ্ছে এমন একজনকে, ডাকের ধরনেই যাঁকে সম্মানিত করা হয়েছে।"
          },
          {
            "en": "As-Sa'di unfolds the title: O you on whom Allah bestowed prophethood, revelation and the message. He calls the verse an 'itab, a reproach from Allah to His Prophet ﷺ, and places it in a well-known story: the Prophet ﷺ forbade himself either his slave-woman Mariyah or the drinking of honey, out of regard for the feelings of some of his wives. The Muyassar gives the plain sense in a single line: O Prophet, why do you withhold yourself from the lawful that Allah has made lawful for you, seeking to please your wives?",
            "bn": "সা'দী উপাধিটার ভেতরটা খুলে দেখান: হে সেই ব্যক্তি, আল্লাহ যাঁকে নবুওয়াত, ওহী আর রিসালাতের নিয়ামত দিয়েছেন। তিনি আয়াতটিকে বলেন ইতাব, অর্থাৎ নবী ﷺ-এর প্রতি আল্লাহর অনুযোগ। প্রেক্ষাপট হিসেবে তিনি এক সুপরিচিত ঘটনার কথা বলেন: কয়েকজন স্ত্রীর মনের দিকে খেয়াল রেখে নবী ﷺ নিজের উপর হারাম করেছিলেন হয় তাঁর দাসী মারিয়াকে, নয়তো মধু পান করা। মুয়াসসার সহজ অর্থটা এক লাইনে বলে দেয়: হে নবী, আল্লাহ যে হালাল জিনিস তোমার জন্য হালাল করেছেন, স্ত্রীদের সন্তুষ্টি চেয়ে তুমি তা থেকে নিজেকে বিরত রাখছ কেন?"
          }
        ]
      },
      {
        "h": {
          "en": "Withholding What Was Permitted",
          "bn": "অনুমতি থেকে নিজেকে সরিয়ে রাখা"
        },
        "p": [
          {
            "en": "Lima tuharrimu ma ahalla-llahu lak: why do you forbid what Allah has made lawful for you? At-Tabari reads the question through its own circumstance: why do you forbid yourself the lawful thing Allah made lawful to you, seeking by that forbidding your wives' approval? As-Sa'di takes ma ahalla-llahu lak as the good things Allah has bestowed on you and on your community. The Muyassar's verb, you withhold yourself, shows the kind of forbidding meant. On these readings it was no law laid on anyone else, only a man declining, for himself, what his Lord had permitted him.",
            "bn": "লিমা তুহাররিমু মা আহাল্লাল্লাহু লাক: আল্লাহ তোমার জন্য যা হালাল করেছেন, তা তুমি হারাম করছ কেন? তাবারী প্রশ্নটা পড়েন তার নিজের প্রেক্ষাপটে: আল্লাহ যে হালাল জিনিস তোমার জন্য হালাল করেছেন, স্ত্রীদের সন্তুষ্টি পাওয়ার আশায় তা নিজের উপর হারাম করছ কেন? সা'দীর ব্যাখ্যায় মা আহাল্লাল্লাহু লাক মানে সেই সব উত্তম জিনিস, যা আল্লাহ তোমাকে ও তোমার উম্মতকে দান করেছেন। মুয়াসসারের শব্দ, নিজেকে বিরত রাখছ, বুঝিয়ে দেয় এখানে কেমন হারাম করার কথা। এই পাঠে অন্য কারও উপর কোনো আইন চাপানো হয়নি। একজন মানুষ কেবল নিজের জন্য সেই জিনিস ছেড়ে দিচ্ছিলেন, যার অনুমতি তাঁর রব তাঁকে দিয়েছিলেন।"
          },
          {
            "en": "At-Tabari then asks whether the Prophet ﷺ only declared the thing unlawful or also swore. He argues that no speech, Arabic or foreign, treats the words this is unlawful to me, said of a slave-woman, a food or a drink, as an oath in themselves; so the oath was something added. He cites a report through Masruq from 'A'ishah (RA): he swore and forbade; for the oath he was commanded expiation, and for the forbidding he was told, Why do you forbid what Allah has made lawful for you? The release of that oath comes in 66:2.",
            "bn": "এরপর তাবারী প্রশ্ন তোলেন: নবী ﷺ কি শুধু জিনিসটাকে হারাম ঘোষণা করেছিলেন, নাকি সঙ্গে কসমও খেয়েছিলেন? তাঁর যুক্তি হলো, আরবি হোক বা অন্য কোনো ভাষা, দাসী, খাবার বা পানীয় সম্পর্কে 'এটা আমার জন্য হারাম' বললেই তা কসম হয়ে যায় না। কাজেই কসম ছিল আলাদা করে যোগ হওয়া জিনিস। এর পক্ষে তিনি মাসরুকের সূত্রে আয়েশা (রাঃ)-এর একটি বর্ণনা আনেন: তিনি কসম খেয়েছিলেন এবং হারামও করেছিলেন। কসমের জন্য তাঁকে কাফফারার আদেশ দেওয়া হলো, আর হারাম করার ব্যাপারে বলা হলো, আল্লাহ তোমার জন্য যা হালাল করেছেন, তা হারাম করছ কেন? সেই কসম থেকে মুক্তির কথা আসে ৬৬:২ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Honey in Zaynab's House",
          "bn": "যয়নবের ঘরে মধু"
        },
        "p": [
          {
            "en": "Al-Bukhari records the honey account in his Sahih, in the book of divorce (5267), from 'A'ishah (RA) herself through 'Ubayd ibn 'Umayr: \"The Prophet ﷺ used to stay with Zaynab bint Jahsh and drink honey at her house. Hafsah and I agreed between us that whichever of us the Prophet ﷺ came in to should say: I find on you the smell of maghafir; have you eaten maghafir? He came in to one of them and she said that to him. He said: No, rather I drank honey at Zaynab bint Jahsh's, and I will not go back to it.\"",
            "bn": "মধুর ঘটনাটি বুখারী তাঁর সহীহ গ্রন্থের তালাক অধ্যায়ে (৫২৬৭) উবাইদ ইবন উমাইরের সূত্রে খোদ আয়েশা (রাঃ) থেকে বর্ণনা করেছেন: \"নবী ﷺ যয়নব বিনতে জাহশের কাছে কিছুক্ষণ থাকতেন এবং তাঁর ঘরে মধু পান করতেন। আমি আর হাফসা পরস্পর ঠিক করলাম, নবী ﷺ আমাদের যার কাছেই আসবেন, সে বলবে: আমি আপনার কাছ থেকে মাগাফীরের গন্ধ পাচ্ছি, আপনি কি মাগাফীর খেয়েছেন? তিনি তাঁদের একজনের কাছে গেলে সেই স্ত্রী তাঁকে ঠিক সে কথাই বললেন। তিনি বললেন: না, বরং আমি যয়নব বিনতে জাহশের কাছে মধু পান করেছি, আর আমি আর কখনো তা পান করব না।"
          },
          {
            "en": "The narration goes on: \"Then there came down: O Prophet, why do you forbid what Allah has made lawful for you, up to If you two turn to Allah, for 'A'ishah and Hafsah; and When the Prophet confided to one of his wives a statement, for his saying: Rather, I drank honey.\" Al-Bukhari placed it in his Sahih, which is his own judgement of it. In his chapter on this surah (4912), the same account through another student of Ibn Jurayj ends with the words: and I have sworn; do not tell anyone of it.",
            "bn": "বর্ণনাটি এরপর বলে: \"তখন নাযিল হলো: হে নবী, আল্লাহ তোমার জন্য যা হালাল করেছেন, তা তুমি হারাম করছ কেন, থেকে 'তোমরা দুজন যদি আল্লাহর দিকে ফিরে আস' পর্যন্ত, যা আয়েশা ও হাফসাকে উদ্দেশ করে। আর 'যখন নবী তাঁর এক স্ত্রীকে গোপনে একটি কথা বলেছিলেন', তা তাঁর এই কথার ব্যাপারে: বরং আমি মধু পান করেছি।\" বুখারী এটিকে তাঁর সহীহ গ্রন্থে স্থান দিয়েছেন, আর এটাই এ সম্পর্কে তাঁর নিজের রায়। এ সূরার অধ্যায়ে (৪৯১২) ইবন জুরাইজের আরেক ছাত্রের সূত্রে একই ঘটনা শেষ হয়েছে এই কথায়: আর আমি কসম খেয়েছি, কাউকে এ কথা বলো না।"
          },
          {
            "en": "Maghafir, al-Qurtubi explains, is a plant or a gum with a changed smell and some sweetness in it. He adds that the Prophet ﷺ liked a good scent to be found on him and disliked a bad odour, because of his intimate converse with the angel. Ma'arif al-Qur'an says why he asked for the matter to be kept quiet: he did not want Zaynab's (RA) feelings to be hurt. A note in it, signed by Muhammad Taqi Usmani, adds that the wives' words were put as a question, and so were not a false statement.",
            "bn": "কুরতুবী জানান, মাগাফীর হলো এক ধরনের গাছড়া বা আঠা, যার গন্ধ বিকৃত, তবে তাতে খানিকটা মিষ্টতা আছে। তিনি আরও বলেন, নবী ﷺ পছন্দ করতেন তাঁর কাছ থেকে সুগন্ধ পাওয়া যাক, আর অপছন্দ করতেন দুর্গন্ধ, কারণ ফেরেশতার সঙ্গে তাঁর একান্ত কথোপকথন হতো। ব্যাপারটা গোপন রাখতে কেন বলেছিলেন, তার কারণ মাআরিফুল কুরআন জানায়: তিনি চাননি যয়নব (রাঃ)-এর মনে কষ্ট লাগুক। এতে মুহাম্মাদ তাকী উসমানীর স্বাক্ষরিত একটি টীকা যোগ করে, স্ত্রীদের কথাগুলো ছিল প্রশ্নের আকারে, তাই সেগুলো মিথ্যা বক্তব্য ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Report Naming Mariyah",
          "bn": "মারিয়ার নাম যে বর্ণনায়"
        },
        "p": [
          {
            "en": "At-Tabari records that the scholars differed over what the lawful thing was. The first view he gives is that it was Mariyah (RA), his Coptic slave-woman, whom he made unlawful to himself with an oath not to come near her, seeking the pleasure of Hafsah bint 'Umar (RA), who had felt jealousy because the day and the room were hers. He carries it from Zayd ibn Aslam, Masruq, ash-Sha'bi, Qatada and ad-Dahhak, and from Ibn 'Abbas (RA) through a chain in which 'Umar (RA) names the two wives of 66:4 as 'A'ishah and Hafsah.",
            "bn": "তাবারী জানান, হালাল জিনিসটা আসলে কী ছিল, তা নিয়ে আলেমদের মধ্যে মতভেদ আছে। প্রথম মত হিসেবে তিনি বলেন, সেটা ছিলেন তাঁর কিবতী দাসী মারিয়া (রাঃ)। তাঁর কাছে না যাওয়ার কসম খেয়ে নবী ﷺ তাঁকে নিজের উপর হারাম করেছিলেন। উদ্দেশ্য ছিল হাফসা বিনতে উমর (রাঃ)-কে সন্তুষ্ট করা, কারণ দিনটি আর ঘরটি ছিল হাফসার, তাই তাঁর মনে ঈর্ষা জেগেছিল। এ মত তিনি এনেছেন যায়দ ইবন আসলাম, মাসরুক, শা'বী, কাতাদা ও দাহহাক থেকে। ইবন আব্বাস (রাঃ) থেকেও এনেছেন এমন এক সূত্রে, যেখানে উমর (রাঃ) ৬৬:৪ আয়াতের দুই স্ত্রীর নাম বলেন: আয়েশা ও হাফসা।"
          },
          {
            "en": "Ibn Kathir opens his commentary by saying that the cause of revelation of this surah's opening is disputed, and gives this view first. He cites an-Nasa'i from Anas (RA), and the wording in an-Nasa'i's Sunan (3959) is: \"The Messenger of Allah ﷺ had a slave-woman with whom he had conjugal relations, and 'A'ishah and Hafsah kept at him until he made her unlawful to himself. Then Allah, Mighty and Majestic, revealed: O Prophet, why do you forbid what Allah has made lawful for you, to the end of the verse.\" The page fetched shows no grading from an-Nasa'i, so none is given here.",
            "bn": "ইবন কাসীর তাঁর তাফসীর শুরু করেন এই কথা দিয়ে যে, সূরার প্রথম অংশ নাযিলের কারণ নিয়ে মতভেদ আছে, আর প্রথমে এই মতটিই আনেন। তিনি আনাস (রাঃ) থেকে নাসাঈর বর্ণনা উদ্ধৃত করেন। নাসাঈর সুনানে (৩৯৫৯) বর্ণনাটির ভাষা এই: \"রাসূলুল্লাহ ﷺ-এর একজন দাসী ছিলেন, যাঁর সঙ্গে তাঁর দাম্পত্য সম্পর্ক ছিল। আয়েশা ও হাফসা তাঁকে বারবার বলতে থাকলেন, শেষে তিনি তাঁকে নিজের উপর হারাম করে নিলেন। তখন মহিমান্বিত, মহান আল্লাহ নাযিল করলেন: হে নবী, আল্লাহ তোমার জন্য যা হালাল করেছেন, তা তুমি হারাম করছ কেন, আয়াতের শেষ পর্যন্ত।\" যে পৃষ্ঠাটি দেখা হয়েছে, তাতে নাসাঈর কোনো মান নির্ণয় নেই, তাই এখানেও কোনো মান উল্লেখ করা হলো না।"
          },
          {
            "en": "Al-Qurtubi identifies Mariyah (RA) as the mother of Ibrahim, given to the Prophet ﷺ by al-Muqawqis, ruler of Alexandria. On her report he quotes Ibn al-'Arabi: it is comparatively better in its chain and closer in meaning, but it was not recorded in the Sahih, and it has been narrated mursal, with a link missing from its chain. Several of these reports, in at-Tabari and Ibn Kathir, end with the Prophet ﷺ expiating his oath and returning to his slave-woman, as 66:2 allowed him.",
            "bn": "কুরতুবী জানান, মারিয়া (রাঃ) ছিলেন ইবরাহীমের মা। আলেকজান্দ্রিয়ার শাসক মুকাওকিস তাঁকে নবী ﷺ-এর কাছে উপহার হিসেবে পাঠিয়েছিলেন। এ বর্ণনা সম্পর্কে তিনি ইবনুল আরাবীর মন্তব্য উদ্ধৃত করেন: সনদের দিক থেকে এটি তুলনামূলক ভালো, অর্থের দিক থেকেও বেশি কাছাকাছি। তবে এটি সহীহ গ্রন্থে সংকলিত হয়নি, আর এসেছে মুরসাল হিসেবে, অর্থাৎ সনদের একটি কড়ি অনুপস্থিত। তাবারী ও ইবন কাসীরের কয়েকটি বর্ণনা শেষ হয় এভাবে: নবী ﷺ কসমের কাফফারা দিলেন এবং ৬৬:২ আয়াতের দেওয়া সুযোগে আবার দাসীর কাছে ফিরে গেলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Several Accounts, One Question",
          "bn": "বর্ণনা অনেক, প্রশ্ন একটাই"
        },
        "p": [
          {
            "en": "A third group in at-Tabari said it was a drink the Prophet ﷺ liked; he cites 'Abdullah ibn Shaddad and Ibn Abi Mulayka, each saying the verse came down about a drink. Then he gives his own judgement, and it declines to choose. What the Prophet ﷺ forbade himself was something Allah had made lawful to him; it may have been his slave-woman, it may have been a drink, it may have been something else. Whichever it was, it was the forbidding of something lawful, for which Allah reproached him, and He showed him how to release the oath he had sworn with it.",
            "bn": "তাবারীর উল্লেখ করা তৃতীয় দলের মতে, এটা ছিল এমন এক পানীয় যা নবী ﷺ পছন্দ করতেন। তিনি আবদুল্লাহ ইবন শাদ্দাদ ও ইবন আবী মুলাইকার কথা আনেন। দুজনেই বলেছেন, আয়াতটি নাযিল হয়েছে একটি পানীয় নিয়ে। এরপর তাবারী নিজের রায় দেন, আর সেখানে তিনি কোনো একটি বেছে নেন না। নবী ﷺ নিজের উপর যা হারাম করেছিলেন, আল্লাহ তা তাঁর জন্য হালাল করেছিলেন। হতে পারে সেটা তাঁর দাসী, হতে পারে কোনো পানীয়, হতে পারে অন্য কিছু। যা-ই হোক, সেটা ছিল হালাল জিনিস হারাম করা। এ জন্যই আল্লাহ তাঁকে অনুযোগ করলেন, আর সঙ্গে খাওয়া কসম থেকে মুক্ত হওয়ার পথ দেখিয়ে দিলেন।"
          },
          {
            "en": "Al-Qurtubi sets out three views and weighs them. The soundest, he says, is the first, the honey; the weakest is the middle view, that it concerned a woman who offered herself to the Prophet ﷺ and whom he did not accept for his wives' sake. His passage then calls the honey account correct and says the verse came down concerning all of it. Near the end he adds that most commentators hold it came down about Hafsah (RA) and the slave-woman, citing ath-Tha'labi. Al-Baghawi, who carries both honey reports through al-Bukhari, glosses the lawful thing as the honey and Mariyah together.",
            "bn": "কুরতুবী তিনটি মত সাজিয়ে সেগুলো যাচাই করেন। তাঁর মতে সবচেয়ে বিশুদ্ধ প্রথমটি, অর্থাৎ মধুর ঘটনা। সবচেয়ে দুর্বল মাঝেরটি, যেখানে বলা হয় এক নারী নিজেকে নবী ﷺ-এর কাছে সঁপে দিতে চেয়েছিলেন আর তিনি স্ত্রীদের কথা ভেবে তাঁকে গ্রহণ করেননি। এরপর তাঁর আলোচনা মধুর বর্ণনাকেই সঠিক বলে, এবং বলে আয়াতটি সবগুলো ঘটনা নিয়েই নাযিল হয়েছে। শেষের দিকে তিনি সা'লাবীর বরাতে যোগ করেন, অধিকাংশ মুফাসসিরের মতে আয়াতটি নাযিল হয়েছে হাফসা (রাঃ) ও সেই দাসীর ঘটনায়। বাগাভী বুখারীর সূত্রে মধুর দুটি বর্ণনাই আনেন, আর হালাল জিনিসটির ব্যাখ্যা দেন মধু ও মারিয়া, দুটোই।"
          },
          {
            "en": "Ma'arif al-Qur'an, citing Bayan al-Qur'an, suggests that several incidents of a similar kind may have taken place before the verses came. The disagreement is real, and it is kept here as the commentators left it, with no position taken. What does not change across the accounts is the verse itself: something lawful was given up, the motive was to please his wives, and the question came from his Lord, Who closed it on forgiveness and mercy.",
            "bn": "মাআরিফুল কুরআন বায়ানুল কুরআনের বরাতে বলে, হতে পারে একই ধরনের কয়েকটি ঘটনা ঘটার পর আয়াতগুলো নাযিল হয়েছিল। মতভেদটি সত্যিকারের। মুফাসসিরগণ যেভাবে রেখে গেছেন, এখানেও সেভাবেই রাখা হলো, কোনো পক্ষ নেওয়া হলো না। তবে সব বর্ণনাতেই আয়াতের কথা একই থাকে। একটি হালাল জিনিস ছেড়ে দেওয়া হয়েছিল, উদ্দেশ্য ছিল স্ত্রীদের খুশি করা, আর প্রশ্নটি এসেছিল তাঁর রবের কাছ থেকে, যিনি তা শেষ করেছেন ক্ষমা ও রহমতের কথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ending on Forgiveness",
          "bn": "শেষ কথা ক্ষমা ও রহমত"
        },
        "p": [
          {
            "en": "Wa-llahu ghafurun rahim: and Allah is Forgiving, Merciful. Ma'arif al-Qur'an calls the opening question loving, posed out of compassion, and says the closing phrase removes any suspicion that a major error had been committed: even granting it for argument's sake, Allah is Forgiving and Merciful. It adds that forbidding oneself a lawful thing for a genuine need is permissible and no sin; here it was done only to please his wives, which, it says, he was not obliged to do.",
            "bn": "ওয়াল্লাহু গাফূরুর রাহীম: আর আল্লাহ ক্ষমাশীল, দয়াময়। মাআরিফুল কুরআন শুরুর প্রশ্নটিকে বলে মমতাভরা প্রশ্ন, যা করা হয়েছে স্নেহের জায়গা থেকে। তার মতে শেষের বাক্যাংশ এই সন্দেহ দূর করে যে কোনো বড় ভুল হয়ে গেছে। তর্কের খাতিরে তা মেনে নিলেও আল্লাহ ক্ষমাশীল, দয়াময়। সে আরও বলে, সত্যিকারের প্রয়োজনে নিজের জন্য কোনো হালাল জিনিস ছেড়ে দেওয়া জায়েয, তাতে গুনাহ নেই। এখানে তা করা হয়েছিল শুধু স্ত্রীদের খুশি করতে, আর মাআরিফুল কুরআনের ভাষায়, সেটা করা তাঁর জন্য জরুরি ছিল না।"
          },
          {
            "en": "Al-Qurtubi reads the two names closely: Forgiving, for what called for the reproach; Merciful, in lifting the blame. He records that some called it a minor slip, and answers that the correct view is a reproach for leaving what was better, and that he had no sin, minor or major. As-Sa'di calls the ending a plain declaration that Allah forgave His Messenger ﷺ, lifted the blame from him and showed him mercy. At-Tabari glosses it: He has forgiven you your forbidding yourself what He made lawful. This article adds no judgement of its own.",
            "bn": "কুরতুবী নাম দুটি খুঁটিয়ে পড়েন: গাফূর, যে কারণে অনুযোগ এসেছিল তা ক্ষমা করার জন্য; রাহীম, দায় তুলে নেওয়ার জন্য। তিনি উল্লেখ করেন, কেউ কেউ একে ছোট একটি ত্রুটি বলেছেন। এর জবাবে তিনি বলেন, সঠিক মত হলো এটা ছিল উত্তম কাজটি ছেড়ে দেওয়ার জন্য অনুযোগ, আর তাঁর কোনো গুনাহ ছিল না, ছোটও না, বড়ও না। সা'দী শেষাংশকে বলেন স্পষ্ট ঘোষণা: আল্লাহ তাঁর রাসূল ﷺ-কে ক্ষমা করেছেন, তাঁর উপর থেকে দায় তুলে নিয়েছেন, তাঁর প্রতি রহম করেছেন। তাবারীর ব্যাখ্যা: আল্লাহ যা তোমার জন্য হালাল করেছিলেন, তা নিজের উপর হারাম করাকে তিনি ক্ষমা করে দিয়েছেন। এ লেখা নিজের পক্ষ থেকে কোনো রায় যোগ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Release for Every Oath",
          "bn": "প্রতিটি কসমের মুক্তির পথ"
        },
        "p": [
          {
            "en": "As-Sa'di draws the line to the next verse: that forbidding became the cause of a general ruling for the whole community, on all oaths: Allah has already ordained for you the dissolution of your oaths (66:2). Ibn 'Abbas (RA), in a report at-Tabari carries, explains it: when the Prophet ﷺ and the believers forbid themselves something lawful, they are to expiate by feeding ten poor people, clothing them, or freeing a slave, and this does not enter into divorce. Al-Qurtubi and Ma'arif al-Qur'an report that the Prophet ﷺ expiated by freeing a slave.",
            "bn": "সা'দী পরের আয়াতের সঙ্গে সংযোগটা দেখান: নবী ﷺ-এর সেই হারাম করাটাই গোটা উম্মতের জন্য একটি সাধারণ বিধানের কারণ হয়ে গেল, আর তা সব কসমের ব্যাপারে: আল্লাহ তোমাদের জন্য তোমাদের কসম থেকে মুক্ত হওয়ার বিধান দিয়েছেন (৬৬:২)। তাবারীর আনা এক বর্ণনায় ইবন আব্বাস (রাঃ) এর ব্যাখ্যা দেন: নবী ﷺ ও মু'মিনরা আল্লাহর হালাল করা কিছু নিজেদের উপর হারাম করলে কাফফারা দেবেন। ১০ জন মিসকীনকে খাওয়াবেন, বা তাদের কাপড় দেবেন, বা একজন দাস মুক্ত করবেন। আর এটা তালাকের মধ্যে পড়ে না। কুরতুবী ও মাআরিফুল কুরআন জানায়, নবী ﷺ একজন দাস মুক্ত করে কাফফারা দিয়েছিলেন।"
          },
          {
            "en": "Al-Bukhari records in his chapter on this surah (4911), from Sa'id ibn Jubayr, that Ibn 'Abbas said of declaring something unlawful: \"He makes expiation.\" And Ibn 'Abbas said: \"There has certainly been for you in the Messenger of Allah an excellent example.\" That is his own ruling, not a saying of the Prophet ﷺ. On a man telling his wife you are unlawful to me, al-Qurtubi lists eighteen views among the scholars, from nothing at all to a triple divorce, because no explicit text settles it. Such cases belong with a qualified scholar.",
            "bn": "বুখারী এ সূরার অধ্যায়ে (৪৯১১) সাঈদ ইবন জুবাইরের সূত্রে বর্ণনা করেছেন, কোনো কিছু হারাম ঘোষণা করা সম্পর্কে ইবন আব্বাস বলেছেন: \"সে কাফফারা দেবে।\" আর ইবন আব্বাস বলেছেন: \"অবশ্যই তোমাদের জন্য আল্লাহর রাসূলের মধ্যে রয়েছে উত্তম আদর্শ।\" এটা ইবন আব্বাসের নিজের ফতোয়া, নবী ﷺ-এর বাণী নয়। কেউ স্ত্রীকে 'তুমি আমার জন্য হারাম' বললে কী হবে, সে বিষয়ে কুরতুবী আলেমদের আঠারোটি মত তুলে ধরেন। কোনো মতে কিছুই হয় না, কোনো মতে তিন তালাক। কারণ বিষয়টি মীমাংসা করার মতো স্পষ্ট কোনো নস নেই। এমন প্রশ্ন নিয়ে যোগ্য আলেমের কাছে যাওয়াই নিয়ম।"
          }
        ]
      },
      {
        "h": {
          "en": "Pleasing Without Redrawing Limits",
          "bn": "সীমা না বদলে মন রাখা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, referring back to 5:87, sets out three cases. Holding a lawful thing unlawful as a matter of religion is disbelief; banning it by oath without need is sinful, and the oath should be broken and expiated; giving it up by resolve alone is an innovation if done for reward, and permissible if done, say, as treatment. Al-Qurtubi quotes az-Zajjaj: no one may forbid what Allah has made lawful. The verse does not mock the motive. Wanting peace at home is good; the question is only about the means.",
            "bn": "মাআরিফুল কুরআন ৫:৮৭ আয়াতের আলোচনার দিকে ইঙ্গিত করে তিনটি অবস্থা আলাদা করে। দ্বীনের বিধান মনে করে হালালকে হারাম বিশ্বাস করা কুফর। প্রয়োজন ছাড়া কসম খেয়ে নিজের উপর তা নিষিদ্ধ করা গুনাহ, সে কসম ভেঙে কাফফারা দেওয়া উচিত। আর কসম ছাড়া শুধু সংকল্প করে ছেড়ে দেওয়া সওয়াবের নিয়তে হলে বিদআত, চিকিৎসার মতো কারণে হলে জায়েয। কুরতুবী যাজ্জাজের কথা উদ্ধৃত করেন: আল্লাহ যা হালাল করেছেন, তা হারাম করার অধিকার কারও নেই। আয়াতটি উদ্দেশ্যকে তুচ্ছ করে না। সংসারে শান্তি চাওয়া ভালো, প্রশ্ন কেবল পথ নিয়ে।"
          },
          {
            "en": "One more thing needs saying plainly. These verses speak of the Prophet's ﷺ household, the Mothers of the Believers, and the honey account reaches us from 'A'ishah (RA) herself. The Qur'an records this for teaching, and a few verses later it calls them to turn to Allah. The verse licenses no contempt for any of his wives, no gossip about his home, and no speech about the Prophet ﷺ beyond what the commentators said. It describes what it describes; the reader's share is the lesson, not the story's private details.",
            "bn": "আরও একটি কথা সোজাসুজি বলা দরকার। এ আয়াতগুলো নবী ﷺ-এর পরিবারের কথা বলে, যাঁরা উম্মুল মু'মিনীন, মু'মিনদের মা। মধুর ঘটনাটি আমাদের কাছে পৌঁছেছে খোদ আয়েশা (রাঃ)-এর মুখ থেকে। কুরআন এটা উল্লেখ করেছে শিক্ষা দেওয়ার জন্য, আর কয়েক আয়াত পরেই তাঁদের আল্লাহর দিকে ফিরে আসার আহ্বান জানিয়েছে। নবী ﷺ-এর কোনো স্ত্রীর প্রতি অবজ্ঞা, তাঁর ঘর নিয়ে কানাকানি, কিংবা মুফাসসিরগণ যা বলেছেন তার বাইরে নবী ﷺ সম্পর্কে কোনো মন্তব্য, এর কোনোটিরই অনুমতি আয়াতটি দেয় না। আয়াত যা বর্ণনা করে, তা-ই বর্ণনা করে। পাঠকের ভাগে আছে শিক্ষাটুকু, ঘটনার একান্ত খুঁটিনাটি নয়।"
          }
        ]
      }
    ]
  },
  "66:6": {
    "sections": [
      {
        "h": {
          "en": "Yourselves First, Then Your Households",
          "bn": "আগে নিজে, তারপর পরিবার"
        },
        "p": [
          {
            "en": "Ya ayyuha-lladhina amanu, qu anfusakum wa ahlikum naran: O you who believe, guard yourselves and your families against a Fire. In Surah at-Tahrim the verse comes straight after an episode inside the Prophet's own household, 66:1 to 66:5, which closes with a call to two of his wives to turn to Allah in repentance (66:4). Then the address widens to every believer. As-Sa'di reads the call as a summons: O you on whom Allah has bestowed faith, carry out what faith requires and the conditions it rests on.",
            "bn": "ইয়া আইয়ুহাল্লাযীনা আমানূ, কূ আনফুসাকুম ওয়া আহলীকুম নারা: হে মুমিনগণ, নিজেদের আর নিজেদের পরিবারকে আগুন থেকে বাঁচাও। সূরা তাহরীমে আয়াতটি আসে নবী ﷺ-এর নিজের ঘরের একটি ঘটনার ঠিক পরে, ৬৬:১ থেকে ৬৬:৫ পর্যন্ত। সে অংশ শেষ হয় তাঁর দুই স্ত্রীকে আল্লাহর কাছে তওবা করে ফিরে আসার ডাক দিয়ে (৬৬:৪)। এরপর সম্বোধন ছড়িয়ে পড়ে সব মুমিনের দিকে। সা'দী প্রথম ডাকটিকে শোনেন দায়িত্বের ডাক হিসেবে: হে যাদের আল্লাহ ঈমানের নেয়ামত দিয়েছেন, ঈমান যা দাবি করে আর যে শর্তের উপর তা দাঁড়িয়ে, তা পালন করো।"
          },
          {
            "en": "The command qu is one short imperative with two objects, and the order of the two is the order of the work. Anfusakum, yourselves, comes first; ahlikum, your families, second. As-Sa'di spells out the first: a soul is guarded by binding it to Allah's command, doing what He orders, avoiding what He forbids, and repenting from whatever angers Him and brings on punishment. The Muyassar puts the link in one phrase: guard your families by the same means with which you guard yourselves.",
            "bn": "কূ একটিমাত্র ছোট আদেশ, তার কর্ম দুটি। আর কর্ম দুটির ক্রমই কাজের ক্রম। আগে আনফুসাকুম, নিজেদের; পরে আহলীকুম, পরিবারকে। প্রথমটির ব্যাখ্যা সা'দী খুলে বলেন: নফসকে বাঁচাতে হয় আল্লাহর হুকুমের সঙ্গে তাকে বেঁধে রেখে। তিনি যা বলেন তা করা, যা নিষেধ করেন তা থেকে দূরে থাকা, আর যা তাঁকে নারাজ করে ও আযাব ডেকে আনে তা থেকে তওবা করা। মুয়াসসার যোগসূত্রটা এক কথায় বলে দেয়: যে উপায়ে নিজেকে বাঁচাও, সেই উপায়েই পরিবারকে বাঁচাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Teach Them, Train Them",
          "bn": "শেখাও, আদব দাও"
        },
        "p": [
          {
            "en": "The earliest readings are short, and they are about means. At-Tabari, through several chains, and Ibn Kathir both report from Ali (RA) two imperatives: teach them and discipline them, 'allimuhum wa addibuhum. At-Tabari's own paraphrase leans the same way. He takes qu anfusakum as teach one another what will shield you from the Fire, and act in obedience to Allah; and wa ahlikum as teach your families the obedience by which they will shield themselves from it.",
            "bn": "সবচেয়ে প্রাচীন ব্যাখ্যাগুলো ছোট, আর সেগুলো উপায় নিয়ে। তাবারী কয়েকটি সূত্রে এবং ইবন কাসীর দুজনেই আলী (রাঃ) থেকে দুটি আদেশ বর্ণনা করেন: তাদের শেখাও আর আদব দাও, আল্লিমূহুম ওয়া আদ্দিবূহুম। তাবারীর নিজের ব্যাখ্যাও একই দিকে ঝোঁকে। তাঁর মতে কূ আনফুসাকুম মানে, যা তোমাদের আগুন থেকে আড়াল করবে তা একে অপরকে শেখাও, আর আল্লাহর আনুগত্যের আমল করো। আর ওয়া আহলীকুম মানে, পরিবারকে সেই আনুগত্য শেখাও যা দিয়ে তারা নিজেরাই নিজেদের বাঁচাবে।"
          },
          {
            "en": "Ibn Abbas (RA), in the report of Ali ibn Abi Talha that at-Tabari and Ibn Kathir carry, gives three steps: act in obedience to Allah, guard against disobeying Him, and command your families to remember Him, and Allah will save you from the Fire. Al-Qurtubi has the same report with a different ending: command your families to remember Allah and to call on Him, so that Allah guards them through you. Mujahid, in both at-Tabari and Ibn Kathir, reuses the verse's own root: fear Allah, ittaqu-llah, and enjoin taqwa of Allah upon your families.",
            "bn": "আলী ইবন আবী তালহার যে বর্ণনা তাবারী ও ইবন কাসীর এনেছেন, তাতে ইবন আব্বাস (রাঃ) তিনটি ধাপ বলেন: আল্লাহর আনুগত্যের আমল করো, তাঁর নাফরমানি থেকে বাঁচো, আর পরিবারকে তাঁর জিকিরের আদেশ দাও, তাহলে আল্লাহ তোমাদের আগুন থেকে রক্ষা করবেন। কুরতুবীর কাছে একই বর্ণনার শেষটা ভিন্ন: পরিবারকে জিকির ও দোয়ার আদেশ দাও, যাতে আল্লাহ তোমাদের মাধ্যমে তাদের রক্ষা করেন। তাবারী ও ইবন কাসীর দুজনের কাছেই মুজাহিদ আয়াতের নিজের ধাতুটিই আবার ব্যবহার করেন: আল্লাহকে ভয় করো, ইত্তাকুল্লাহ, আর পরিবারকে আল্লাহর তাকওয়ার নসিহত করো।"
          },
          {
            "en": "Qatada's reading, which at-Tabari records twice, is the fullest. Guarding them is to command them to obey Allah and forbid them from disobeying Him, to stand over them with Allah's command, ordering it and helping them carry it out; and when you see a disobedience to Allah, you restrain them from it and rebuke them. Ad-Dahhak and Muqatil, in Ibn Kathir, call it a right: a Muslim must teach his family, his relatives and his slaves, male and female, what Allah has made obligatory on them and what He has forbidden.",
            "bn": "সবচেয়ে পূর্ণাঙ্গ ব্যাখ্যা কাতাদার, যা তাবারী দুবার এনেছেন। পরিবারকে বাঁচানো মানে তাদের আল্লাহর আনুগত্যের আদেশ দেওয়া, তাঁর নাফরমানি থেকে নিষেধ করা, আল্লাহর হুকুম নিয়ে তাদের পাশে দাঁড়ানো, সে হুকুম দেওয়া আর তা পালনে তাদের সাহায্য করা। আর আল্লাহর কোনো নাফরমানি চোখে পড়লে তা থেকে তাদের থামানো ও ধমক দেওয়া। ইবন কাসীরের বর্ণনায় দাহহাক ও মুকাতিল একে হক হিসেবে বলেন: মুসলিমের দায়িত্ব হলো নিজের পরিবার, আত্মীয়স্বজন আর দাস-দাসীদের শেখানো, আল্লাহ তাদের উপর কী ফরজ করেছেন আর কী নিষেধ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Deeds for Oneself, Counsel for Family",
          "bn": "নিজের জন্য আমল, পরিবারের জন্য নসিহত"
        },
        "p": [
          {
            "en": "Al-Qurtubi finds a single question in the verse, the command to guard oneself and one's family from the Fire, and records a real difference over its second object. Ad-Dahhak reads it as two separate duties: guard yourselves, and as for your families, let them guard themselves from the Fire. Ali (RA), Qatada and Mujahid read it as one duty with two fields: guard yourselves by your deeds, and guard your families by your counsel to them, wasiyyatikum.",
            "bn": "কুরতুবী আয়াতে একটিই মাসআলা দেখেন: নিজেকে ও পরিবারকে আগুন থেকে বাঁচানোর আদেশ। দ্বিতীয় কর্মটি নিয়ে তিনি একটি সত্যিকারের মতভেদ লিখে রাখেন। দাহহাকের মতে এখানে দুটি আলাদা দায়িত্ব: তোমরা নিজেদের বাঁচাও, আর তোমাদের পরিবার, তারা নিজেরাই নিজেদের আগুন থেকে বাঁচাক। আলী (রাঃ), কাতাদা ও মুজাহিদের মতে দায়িত্ব একটাই, ক্ষেত্র দুটি: নিজেদের বাঁচাও নিজের আমল দিয়ে, আর পরিবারকে বাঁচাও তাদের প্রতি নসিহত দিয়ে, ওয়াসিয়্যাতিকুম।"
          },
          {
            "en": "Al-Qurtubi quotes Ibn al-Arabi, who calls the second reading correct, on grounds of grammar: the conjunction wa makes the two objects share in the meaning of the verb, so one qu governs both even though the guarding is done differently, as when an Arab poet says of his animal that he fed it straw and cold water. From this al-Qurtubi draws his rule: a man must set himself right through obedience, and set his family right as a shepherd sets right his flock. Al-Hasan, he adds, put the same duty briefly: he commands them and forbids them.",
            "bn": "কুরতুবী ইবনুল আরাবীর কথা আনেন, যিনি ব্যাকরণের যুক্তিতে দ্বিতীয় মতটিকে সঠিক বলেন। ওয়াও অব্যয়টি দুই কর্মকে ক্রিয়ার অর্থে শরিক করে দেয়। তাই একটিই কূ দুটোর উপর খাটে, যদিও বাঁচানোর ধরন আলাদা। যেমন আরব কবি তার পশু সম্পর্কে বলেন, তাকে খাওয়ালাম খড় আর ঠান্ডা পানি। এখান থেকে কুরতুবী তাঁর নিয়মটি টানেন: মানুষকে আনুগত্য দিয়ে নিজেকে শুধরাতে হবে, আর পরিবারকে শুধরাতে হবে যেভাবে রাখাল তার পাল দেখাশোনা করে। তিনি যোগ করেন, হাসান একই দায়িত্ব বলেছেন সংক্ষেপে: সে তাদের আদেশ দেবে, নিষেধ করবে।"
          },
          {
            "en": "A further reading widens the first word. Al-Qurtubi reports some scholars as saying that children are already inside anfusakum, because a child is part of the parent. They compare 24:61, where blame is lifted from eating in your own houses, wa la 'ala anfusikum an ta'kulu min buyutikum, while the houses of children are not named apart as the other relatives' houses are. So, al-Qurtubi goes on, the parent teaches the child the lawful and the unlawful and keeps him away from sins and wrongs, among the other rulings.",
            "bn": "আরেকটি ব্যাখ্যা প্রথম শব্দটিকেই বড় করে দেয়। কুরতুবী কিছু আলেমের কথা আনেন: সন্তান আগে থেকেই আনফুসাকুমের ভেতরে আছে, কারণ সন্তান মা-বাবারই অংশ। তাঁরা তুলনা টানেন ২৪:৬১ আয়াতের সঙ্গে। সেখানে নিজেদের ঘরে খাওয়াকে দোষমুক্ত বলা হয়েছে, ওয়া লা আলা আনফুসিকুম আন তা'কুলূ মিন বুয়ূতিকুম, অথচ অন্য আত্মীয়দের ঘরের মতো সন্তানের ঘরের কথা আলাদা করে আসেনি। কুরতুবী তাই বলেন, অভিভাবক সন্তানকে হালাল-হারাম শেখাবে, গুনাহ ও অন্যায় থেকে দূরে রাখবে, সঙ্গে আরও যত বিধান আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Household Takes In",
          "bn": "ঘরের মানুষ কারা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an says the word ahlikum takes in the wife, the children and slaves, men and women, and possibly full-time servants. As-Sa'di draws the circle by responsibility. Guarding the family, he says, means disciplining them, teaching them and compelling them to keep Allah's command, and a servant of Allah is not safe until he has done what Allah commands in himself and in everyone under his care and authority, wives, children and others.",
            "bn": "মাআরিফুল কুরআন বলে, আহলীকুম শব্দের ভেতরে আছে স্ত্রী, সন্তান আর দাস-দাসী। সম্ভবত সার্বক্ষণিক খাদেমরাও। সা'দী বৃত্তটা আঁকেন দায়িত্ব দিয়ে। তাঁর কথায় পরিবারকে বাঁচানো মানে তাদের আদব দেওয়া, শেখানো, আর আল্লাহর হুকুম মানতে তাদের বাধ্য করা। বান্দা নিরাপদ নয় যতক্ষণ না সে আল্লাহর হুকুম পালন করে নিজের বেলায়, আর যারা তার তত্ত্বাবধান ও কর্তৃত্বে আছে তাদের বেলায়: স্ত্রী, সন্তান ও অন্যরা।"
          },
          {
            "en": "Al-Qurtubi also quotes al-Kiya: it is on us to teach our children and families the religion and what is good, and the manners no one can do without. Al-Kiya ties this to two commands given to the Prophet ﷺ. One is 20:132, command your family to pray and be patient in it, which has its own article here. The other is 26:214, warn your nearest kin. Ma'arif al-Qur'an adds that the jurists drew from this verse a duty to teach wife and children the Shari'a's obligations and the lawful and unlawful, and to train them in it.",
            "bn": "কুরতুবী কিয়ার কথাও আনেন: আমাদের সন্তান ও পরিবারকে দ্বীন আর কল্যাণ শেখানো আমাদের দায়িত্ব, সঙ্গে সেই আদবও যা ছাড়া চলে না। কিয়া একে জুড়ে দেন নবী ﷺ-কে দেওয়া দুটি আদেশের সঙ্গে। একটি ২০:১৩২: তোমার পরিবারকে নামাজের আদেশ দাও আর নিজে তাতে অবিচল থাকো। এ আয়াত নিয়ে এখানে আলাদা প্রবন্ধ আছে। অন্যটি ২৬:২১৪: তোমার নিকটাত্মীয়দের সতর্ক করো। মাআরিফুল কুরআন যোগ করে, ফকিহগণ এ আয়াত থেকে দায়িত্ব বের করেছেন: স্ত্রী-সন্তানকে শরিয়তের ফরজ বিষয় আর হালাল-হারাম শেখানো, এবং সে অনুযায়ী চলতে অভ্যস্ত করা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shepherd and the Seven-Year-Old",
          "bn": "রাখাল আর সাত বছরের শিশু"
        },
        "p": [
          {
            "en": "The commentators fetched attach two hadiths to this verse. Al-Qurtubi, explaining the shepherd's duty, cites the hadith of the shepherd, which al-Bukhari records in his Sahih (893) from Ibn Umar (RA): All of you are guardians and responsible for your wards and the things under your care. The Imam is the guardian of his subjects and is responsible for them, a man is the guardian of his family and is responsible for them, a woman is the guardian of her husband's house and is responsible for it, and a servant is the guardian of his master's belongings and is responsible for them.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, সেগুলো এ আয়াতের সঙ্গে দুটি হাদীস জুড়েছে। রাখালের দায়িত্ব বোঝাতে কুরতুবী রাখালের হাদীসটি আনেন। বুখারী তাঁর সহীহ গ্রন্থে (৮৯৩) ইবন উমর (রাঃ) থেকে এটি বর্ণনা করেছেন: তোমরা প্রত্যেকেই রক্ষক, আর নিজের অধীন মানুষ ও জিনিসের ব্যাপারে প্রত্যেকেই জিজ্ঞাসিত হবে। ইমাম তার প্রজাদের রক্ষক, তাদের ব্যাপারে সে জিজ্ঞাসিত হবে। পুরুষ তার পরিবারের রক্ষক, তাদের ব্যাপারে সে জিজ্ঞাসিত হবে। নারী তার স্বামীর ঘরের রক্ষক, সে ঘরের ব্যাপারে সে জিজ্ঞাসিত হবে। আর খাদেম তার মনিবের সম্পদের রক্ষক, সে ব্যাপারে সে জিজ্ঞাসিত হবে।"
          },
          {
            "en": "The narrator adds that he thinks the Prophet ﷺ also said: a man is the guardian of his father's property and is responsible for it; all of you are guardians and responsible for your wards. Read beside the verse, the hadith spreads the duty across the home: the man answers for his family, the woman for the house she keeps. Al-Qurtubi's own phrase, setting the family right as a shepherd sets right his flock, is this hadith turned into a rule.",
            "bn": "বর্ণনাকারী যোগ করেন, তাঁর মনে হয় নবী ﷺ এ কথাও বলেছিলেন: পুরুষ তার বাবার সম্পদের রক্ষক, সে ব্যাপারে সে জিজ্ঞাসিত হবে; তোমরা প্রত্যেকেই রক্ষক, প্রত্যেকেই নিজের অধীনদের ব্যাপারে জিজ্ঞাসিত হবে। আয়াতের পাশে রেখে পড়লে হাদীসটি দায়িত্বকে গোটা ঘরে ছড়িয়ে দেয়: পুরুষ জবাব দেবে পরিবারের, নারী জবাব দেবে যে ঘর সে সামলায় তার। রাখাল যেভাবে পাল দেখে সেভাবে পরিবারকে শুধরানো, কুরতুবীর এ কথাটি আসলে এই হাদীসেরই নিয়মরূপ।"
          },
          {
            "en": "Ibn Kathir cites the hadith of Sabra (RA); al-Qurtubi cites the same command through other chains. In Abu Dawud's wording, which Ibn Kathir names as his text (494): Command a boy to pray when he reaches the age of seven years. When he becomes ten years old, then beat him for prayer. Abu Dawud's text as fetched carries no grading. Ibn Kathir quotes at-Tirmidhi as calling it hasan; at-Tirmidhi's own text (407), worded teach the boy prayer, reads hasan sahih. Ibn Kathir adds that the jurists said the same of fasting, so that it trains the child in worship and he reaches maturity already steady in it.",
            "bn": "ইবন কাসীর সাবরা (রাঃ)-র হাদীস আনেন, আর কুরতুবী একই আদেশ আনেন অন্য সূত্রে। আবু দাউদের ভাষায়, যাকে ইবন কাসীর মূল পাঠ বলে উল্লেখ করেন (৪৯৪): শিশুর বয়স ৭ বছর হলে তাকে নামাজের আদেশ দাও। আর ১০ বছর হলে নামাজের জন্য তাকে প্রহার করো। আবু দাউদের যে পাঠ দেখা হয়েছে, তাতে কোনো মান উল্লেখ নেই। ইবন কাসীর লিখেছেন, তিরমিযী একে হাসান বলেছেন। তিরমিযীর নিজের পাঠে (৪০৭) শব্দ হলো শিশুকে নামাজ শেখাও, আর সেখানে মান লেখা হাসান সহীহ। ইবন কাসীর যোগ করেন, ফকিহগণ রোজার ব্যাপারেও এ কথা বলেছেন, যাতে শিশু ইবাদতে অভ্যস্ত হয় আর বালেগ হওয়ার সময় তাতে অটল থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fuel of People and Stones",
          "bn": "মানুষ আর পাথরের ইন্ধন"
        },
        "p": [
          {
            "en": "Waquduha-n-nasu wal-hijara: whose fuel is people and stones. Ibn Kathir glosses waqud as the Fire's firewood, and at-Tabari says the firewood with which it is kindled is the children of Adam and stones of sulphur. Al-Qurtubi notes that the phrase was explained in Surah al-Baqara, where the same words come in 2:24, fear the Fire whose fuel is people and stones. As-Sa'di gives the reason for the description: Allah describes the Fire in these terms to restrain His servants from taking His command lightly.",
            "bn": "ওয়াকূদুহান নাসু ওয়াল হিজারা: যার ইন্ধন মানুষ আর পাথর। ইবন কাসীর ওয়াকূদের অর্থ করেন আগুনের জ্বালানি কাঠ। তাবারী বলেন, যা দিয়ে এ আগুন জ্বালানো হয় তা আদম সন্তান আর গন্ধকের পাথর। কুরতুবী জানিয়ে দেন, এর ব্যাখ্যা সূরা বাকারায় হয়ে গেছে। সেখানে ২:২৪ আয়াতে একই শব্দ এসেছে: সেই আগুনকে ভয় করো যার ইন্ধন মানুষ আর পাথর। এ বর্ণনার কারণ সা'দী বলেন: আল্লাহ আগুনের এমন বিবরণ দিয়েছেন যাতে তাঁর বান্দারা তাঁর হুকুমকে হালকাভাবে না নেয়।"
          },
          {
            "en": "On the stones the commentators differ. Ibn Kathir, introducing it with it is said, takes them to be the idols that were worshipped, citing 21:98: you and what you worship besides Allah are the fuel of Hell. As-Sa'di sets the same verse beside the phrase. Ibn Kathir then reports from Ibn Mas'ud (RA), Mujahid, Abu Ja'far al-Baqir and as-Suddi that they are stones of sulphur, and Mujahid adds that they stink worse than carrion. At-Tabari names only sulphur. The verse itself says only stones.",
            "bn": "পাথর নিয়ে তাফসীরকারদের মতভেদ আছে। ইবন কাসীর 'বলা হয়' কথাটি দিয়ে শুরু করে বলেন, এগুলো সেই মূর্তি যাদের পূজা করা হতো। দলিল হিসেবে আনেন ২১:৯৮: তোমরা আর আল্লাহকে বাদ দিয়ে যাদের ইবাদত করো, সবাই জাহান্নামের ইন্ধন। সা'দীও এ আয়াতটি পাশে রাখেন। এরপর ইবন কাসীর ইবন মাসঊদ (রাঃ), মুজাহিদ, আবু জাফর বাকির ও সুদ্দী থেকে বর্ণনা করেন যে এগুলো গন্ধকের পাথর। মুজাহিদ যোগ করেন, এর দুর্গন্ধ পচা লাশের চেয়েও বেশি। তাবারী শুধু গন্ধকের কথাই বলেন। আয়াত নিজে শুধু পাথর বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Keepers Who Never Disobey",
          "bn": "অবাধ্য হয় না যে প্রহরীরা"
        },
        "p": [
          {
            "en": "'Alayha mala'ikatun ghilazun shidad: over it are angels, harsh and severe. At-Tabari reads both words as directed at the people of the Fire: harsh towards them, severe upon them. Ibn Kathir divides them. Ghilaz describes their nature, from whose hearts mercy towards those who disbelieve in Allah has been removed; shidad describes their make, of the utmost strength and fearsome to see. Al-Qurtubi gives several readings: harsh of heart and severe of body; harsh in words and severe in deeds; or great bulk and great strength.",
            "bn": "আলাইহা মালাইকাতুন গিলাযুন শিদাদ: তার উপর আছে কঠোর, নির্মম ফেরেশতারা। তাবারী দুটি শব্দকেই জাহান্নামবাসীর দিকে ফেরান: তাদের প্রতি রূঢ়, তাদের উপর কঠোর। ইবন কাসীর শব্দ দুটিকে ভাগ করেন। গিলায তাদের স্বভাবের বর্ণনা: যারা আল্লাহকে অস্বীকার করে, তাদের প্রতি দয়া এদের অন্তর থেকে তুলে নেওয়া হয়েছে। শিদাদ তাদের গড়নের বর্ণনা: চরম শক্তিশালী, দেখতে ভয়ংকর। কুরতুবী কয়েকটি ব্যাখ্যা দেন: অন্তরে রূঢ় আর দেহে শক্ত; কথায় রূঢ় আর কাজে কঠোর; অথবা বিশাল দেহ আর প্রবল শক্তি।"
          },
          {
            "en": "Al-Baghawi, Ibn Kathir and Ma'arif al-Qur'an name them the Zabaniya, the keepers of the Fire, from whom, Ma'arif says, no one escapes by force, flattery or bribery. Then la ya'suna-llaha ma amarahum wa yaf'aluna ma yu'marun: they do not disobey Allah in what He commands them, and they do what they are commanded. Al-Qurtubi separates the two clauses: they neither add to His command nor leave any of it out, and they carry it out at its time, neither delaying it nor bringing it forward. Ibn Kathir: they hasten to it without the delay of a blink, and are never unable.",
            "bn": "বাগাভী, ইবন কাসীর ও মাআরিফুল কুরআন এদের নাম বলেন যাবানিয়া, জাহান্নামের প্রহরী। মাআরিফ বলে, শক্তি, তোষামোদ বা ঘুষ কোনো কিছু দিয়েই সেখানে কেউ এদের হাত থেকে ছাড়া পাবে না। এরপর লা ইয়া'সূনাল্লাহা মা আমারাহুম ওয়া ইয়াফ'আলূনা মা ইউ'মারূন: আল্লাহ তাদের যা আদেশ করেন তাতে তারা অবাধ্য হয় না, আর যা আদেশ পায় তা-ই করে। কুরতুবী বাক্য দুটিকে আলাদা করেন। প্রথমটির অর্থ, তাঁর হুকুমে তারা কিছু বাড়ায় না, কিছু কমায়ও না। দ্বিতীয়টির অর্থ, হুকুম পালন করে ঠিক সময়ে, দেরিও করে না, আগেও করে না। ইবন কাসীরের কথায়, চোখের পলক পরিমাণ দেরি না করে তারা ছুটে যায়, আর কখনো অক্ষম হয় না।"
          },
          {
            "en": "As-Sa'di notes that the clause is also praise of the noble angels, for their submission to Allah's command and their obedience in all He orders. The next verse, 66:7, turns to those who disbelieved: make no excuses today. This needs saying plainly. The verse describes the Fire, its keepers and its people as the text describes them, and licenses nothing against any living person or community. No reader is handed the keepers' work or the right to assign anyone to the Fire; the verse's own address is to believers, about themselves and their homes.",
            "bn": "সা'দী লক্ষ করেন, বাক্যটিতে সম্মানিত ফেরেশতাদের প্রশংসাও আছে: আল্লাহর হুকুমের প্রতি তাদের আত্মসমর্পণ, আর তাঁর প্রতিটি আদেশে তাদের আনুগত্য। পরের আয়াত, ৬৬:৭, ফেরে কাফিরদের দিকে: আজ কোনো অজুহাত দিয়ো না। কথাটা সোজাসুজি বলা দরকার। আয়াতটি আগুন, তার প্রহরী আর তার বাসিন্দাদের বর্ণনা দেয় ঠিক যেভাবে পাঠ বর্ণনা করে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কোনো অনুমতি দেয় না। কোনো পাঠকের হাতে প্রহরীদের কাজ তুলে দেওয়া হয়নি, কাউকে জাহান্নামী ঘোষণার অধিকারও নয়। আয়াতের সম্বোধন মুমিনদের প্রতি, তাদের নিজেদের আর তাদের ঘর নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Guarding Begins",
          "bn": "পাহারা শুরু হয় নিজের থেকে"
        },
        "p": [
          {
            "en": "Read with its commentators, the verse puts its harshness in one place only: with the keepers of the Fire. What it asks of the believer at home is what Ali (RA), Qatada, al-Hasan and al-Qurtubi name: teaching, training, commanding the good and forbidding the wrong, counsel, and a shepherd's care. As-Sa'di does speak of compelling those in one's charge to keep Allah's command, and the hadith of Sabra (RA) speaks of discipline at ten. Yet the word that recurs, from Ali (RA) to at-Tabari to al-Kiya, is teach, and teaching takes years.",
            "bn": "তাফসীরকারদের সঙ্গে পড়লে দেখা যায়, আয়াতের কঠোরতা কেবল একটিমাত্র জায়গায়: জাহান্নামের প্রহরীদের কাছে। ঘরে মুমিনের কাছে আয়াত যা চায়, তার নাম দিয়েছেন আলী (রাঃ), কাতাদা, হাসান ও কুরতুবী: শেখানো, আদব দেওয়া, ভালোর আদেশ আর মন্দের নিষেধ, নসিহত, আর রাখালের যত্ন। সা'দী অবশ্য অধীনদের আল্লাহর হুকুম মানতে বাধ্য করার কথা বলেন, আর সাবরা (রাঃ)-র হাদীসে ১০ বছর বয়সে শাসনের কথা আছে। তবু আলী (রাঃ) থেকে তাবারী হয়ে কিয়া পর্যন্ত যে শব্দ বারবার ফিরে আসে তা হলো শেখাও। আর শেখাতে বছরের পর বছর লাগে।"
          },
          {
            "en": "And the first object never drops away. No one can guard a family from a Fire he is walking toward himself, which is why anfusakum comes first. The surah's close, 66:10 to 66:12, sets the wives of Nuh (AS) and Lut (AS), whose marriage to two righteous servants availed them nothing against Allah, beside the wife of Fir'awn and Maryam (AS). The effort is commanded; the outcome is Allah's. And two verses on, 66:8 calls the same believers to sincere repentance.",
            "bn": "আর প্রথম কর্মটি কখনো বাদ পড়ে না। যে আগুনের দিকে কেউ নিজেই হাঁটছে, সে আগুন থেকে পরিবারকে বাঁচাতে পারে না। এ কারণেই আনফুসাকুম আগে। সূরার শেষে, ৬৬:১০ থেকে ৬৬:১২ আয়াতে, নূহ (আঃ) ও লূত (আঃ)-এর স্ত্রীদের কথা আসে। আল্লাহর দুই নেককার বান্দার স্ত্রী হয়েও আল্লাহর সামনে তা তাদের কোনো কাজে আসেনি। পাশেই আসে ফিরআউনের স্ত্রী আর মারইয়াম (আঃ)-এর কথা। চেষ্টা করার আদেশ আমাদের, ফলাফল আল্লাহর হাতে। আর দুই আয়াত পরে ৬৬:৮ একই মুমিনদের খাঁটি তওবার দিকে ডাকে।"
          }
        ]
      }
    ]
  },
  "66:8": {
    "sections": [
      {
        "h": {
          "en": "Before Excuses Run Out",
          "bn": "অজুহাতের দিন আসার আগে"
        },
        "p": [
          {
            "en": "Ya ayyuha-lladhina amanu tubu ila-llah: O you who believe, turn to Allah. The call comes straight after two others. 66:6 tells the believers to guard themselves and their families from a Fire whose fuel is people and stones. 66:7 then moves to the Day itself, where those who disbelieved are told to make no excuses, since they are repaid only for what they used to do. Against that shut door, 66:8 turns back to people who still live in the time of turning.",
            "bn": "ইয়া আইয়ুহাল্লাযীনা আমানূ তূবূ ইলাল্লাহ: হে মুমিনগণ, আল্লাহর দিকে ফিরে এসো। এ ডাকের ঠিক আগে আরও দুটি কথা এসেছে। ৬৬:৬ আয়াতে মুমিনদের বলা হয়েছে নিজেদের ও পরিবারকে সেই আগুন থেকে বাঁচাতে, যার জ্বালানি মানুষ আর পাথর। ৬৬:৭ আয়াত চলে যায় সেই দিনে, যেখানে কাফিরদের বলা হবে, আজ কোনো অজুহাত দেখিও না, তোমরা যা করতে কেবল তারই প্রতিফল পাচ্ছ। সে দরজা বন্ধ। তার পাশেই ৬৬:৮ ফিরে আসে তাদের কাছে, যাদের হাতে এখনো ফেরার সময় আছে।"
          },
          {
            "en": "At-Tabari explains tubu as: return from your sins to obedience of Allah, and to what makes Him pleased with you. Al-Qurtubi calls the clause a command to repentance and says it is an obligation on every individual, in every state and at every time. The surah has used the word already. 66:4 calls two of the Prophet's ﷺ wives to turn to Allah, and 66:5 names the repentant among the qualities it lists. Here the same call widens to all who believe.",
            "bn": "তাবারী তূবূ শব্দের ব্যাখ্যা দেন এভাবে: নিজেদের গুনাহ ছেড়ে আল্লাহর আনুগত্যের দিকে ফিরে এসো, ফিরে এসো সেই কাজের দিকে যাতে তিনি তোমাদের উপর সন্তুষ্ট হন। কুরতুবী বলেন, এটি তওবার আদেশ, আর তওবা প্রত্যেক মানুষের উপর ফরজ, সব অবস্থায়, সব সময়ে। এ সূরায় শব্দটা আগেও এসেছে। ৬৬:৪ আয়াতে নবী ﷺ-এর দুই স্ত্রীকে আল্লাহর দিকে ফিরতে বলা হয়েছে, আর ৬৬:৫ আয়াত যে গুণগুলো গুনেছে তার মধ্যে তওবাকারিণীও আছে। এখানে এসে সেই একই ডাক সব মুমিনের জন্য খুলে যায়।"
          },
          {
            "en": "One line on 66:7 itself. It describes those who disbelieved as they will stand on that Day, in the Qur'an's own words of condemnation. It records what the text records and licenses nothing against any living person or community; no reader is handed the verdict of that Day to pass on a neighbour now. The verse that follows sends the reader's eyes back to his own sins.",
            "bn": "৬৬:৭ নিয়ে একটি কথা। আয়াতটি কাফিরদের সেই দিনের অবস্থার বর্ণনা দেয়, কুরআনের নিজের নিন্দার ভাষায়। পাঠ যা বলে আয়াত শুধু ততটুকুই জানায়। আজকের কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এতে নেই। সেই দিনের রায় নিয়ে প্রতিবেশীর বিচার করার ভার কোনো পাঠককে দেওয়া হয়নি। পরের আয়াত পাঠকের চোখ ফিরিয়ে দেয় তার নিজের গুনাহের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Milk Does Not Return",
          "bn": "দুধ আর বাঁটে ফেরে না"
        },
        "p": [
          {
            "en": "Tawbatan nasuha. At-Tabari glosses it as a return in which you never go back, and says the people of interpretation held the same. He gives it first from 'Umar (RA), through several chains from an-Nu'man ibn Bashir: sincere repentance is that a man repents of the bad deed and then never returns to it. One chain adds 'or does not want to return', and another has an-Nu'man reporting it from 'Umar while delivering a sermon. The definition is about what happens after the words.",
            "bn": "তাওবাতান নাসূহা। তাবারী এর অর্থ করেন এমন ফেরা, যার পরে আর কখনো পেছনে যাওয়া নেই। তিনি বলেন, ব্যাখ্যাকারেরাও এ কথাই বলেছেন। প্রথমে তিনি আনেন উমর (রাঃ)-এর বক্তব্য, নুমান ইবন বাশীর থেকে কয়েকটি সূত্রে: খাঁটি তওবা হলো, মানুষ মন্দ কাজ থেকে তওবা করবে, তারপর আর কখনো সেদিকে ফিরবে না। একটি সূত্রে আছে, অথবা ফেরার ইচ্ছাও রাখবে না। আরেক সূত্রে নুমান খুতবা দেওয়ার সময় উমর (রাঃ) থেকে কথাটি শোনান। সংজ্ঞাটা আসলে মুখের কথার পরে কী ঘটে, তা নিয়ে।"
          },
          {
            "en": "Others in at-Tabari say the same in fewer words. Ibn Mas'ud (RA): he repents and does not return. Ibn Abbas: that its owner does not go back to the sin he repented of. Mujahid: they ask forgiveness and do not return. Ad-Dahhak: you turn away from the sin and never go back to it. The Muyassar folds the line into its paraphrase: return from your sins to obedience of Allah, a return with no disobedience after it.",
            "bn": "তাবারীর কাছে আরও কয়েকজন একই কথা বলেন আরও সংক্ষেপে। ইবন মাসউদ (রাঃ): তওবা করে, আর ফেরে না। ইবন আব্বাস (রাঃ): যে গুনাহ থেকে তওবা করেছে, সে আর সে গুনাহে ফিরবে না। মুজাহিদ: তারা ইস্তিগফার করে, তারপর আর ফেরে না। দাহহাক: গুনাহ থেকে সরে আসবে, তারপর কখনো আর সেদিকে যাবে না। মুয়াসসার কথাটা নিজের ব্যাখ্যার মধ্যেই বুনে দেয়: গুনাহ ছেড়ে আল্লাহর আনুগত্যে ফিরে এসো, এমনভাবে যে তার পরে আর নাফরমানি নেই।"
          },
          {
            "en": "The image of milk comes from two of the files. Al-Baghawi attributes to 'Umar, Ubayy and Mu'adh: one repents and does not return to the sin, as milk does not return to the udder. Al-Qurtubi gives it as the first of twenty-three sayings, reported from 'Umar, Ibn Mas'ud, Ubayy ibn Ka'b and Mu'adh ibn Jabal, and adds that Mu'adh traced it to the Prophet ﷺ. Ibn Kathir cites a version through Ibn Mas'ud traced to the Prophet ﷺ in Imam Ahmad, notes that only Ibrahim al-Hajari carries it and he is weak, and judges the Companion's own saying sounder.",
            "bn": "দুধের উপমাটা পাওয়া যায় দুটি তাফসীরে। বাগাভী এটিকে উমর, উবাই ও মুআয (রাঃ)-এর কথা বলে উল্লেখ করেন: তওবা করবে, তারপর আর গুনাহে ফিরবে না, যেমন দোয়ানো দুধ আর বাঁটে ফেরে না। কুরতুবী তেইশটি মতের প্রথমটি হিসেবে এটি আনেন। তিনি জানান, কথাটি উমর, ইবন মাসউদ, উবাই ইবন কাব ও মুআয ইবন জাবাল (রাঃ) থেকে বর্ণিত, আর মুআয (রাঃ) এটিকে নবী ﷺ পর্যন্ত পৌঁছিয়েছেন। ইবন কাসীর ইমাম আহমাদের কাছ থেকে ইবন মাসউদ (রাঃ)-এর সূত্রে নবী ﷺ পর্যন্ত পৌঁছানো একটি রূপ উল্লেখ করেন। তিনি বলেন, এটি কেবল ইবরাহীম আল-হাজারীর সূত্রে এসেছে, আর তিনি দুর্বল। তাঁর বিচারে সাহাবীর নিজের কথা হিসেবেই বর্ণনাটি বেশি নির্ভরযোগ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Pure Honey, Firm Stitching",
          "bn": "খাঁটি মধু, মজবুত সেলাই"
        },
        "p": [
          {
            "en": "What does nasuh add to tawbah? Qatada, in at-Tabari, answers: the repentance that is truthful and sincere. Ibn Zayd says it is the true repentance, where the person knows it is honest regret for his error and love of returning to obedience, and that, he says, is nasuh. Ibn Kathir describes it as truthful and firm: it erases the bad deeds before it, gathers up the scattered state of the penitent, and holds him back from the base things he used to do.",
            "bn": "তওবার সঙ্গে নাসূহ শব্দটি কী যোগ করে? তাবারীর বর্ণনায় কাতাদা বলেন: যে তওবা সত্য ও আন্তরিক। ইবন যায়দ বলেন, এটি সেই সত্যিকারের তওবা, যেখানে মানুষ জানে তার অনুশোচনা খাঁটি, আর আনুগত্যে ফেরার জন্য তার মনে টান আছে। তাঁর ভাষায়, এটাই নাসূহ। ইবন কাসীর একে বলেন সত্য ও দৃঢ় তওবা। এমন তওবা আগের গুনাহগুলো মুছে দেয়, তওবাকারীর ছড়িয়ে-ছিটিয়ে যাওয়া অবস্থাকে গুছিয়ে আনে, আর যে হীন কাজে সে জড়িয়ে ছিল তা থেকে তাকে আটকে রাখে।"
          },
          {
            "en": "Al-Qurtubi traces the word to purity: honey is called nasih when it is clear of its wax. Others take it from nisaha, sewing, and he gives two ways to read that. Such repentance makes the person's obedience firm and secure, as a tailor fastens a garment with his stitching; or it joins him to the friends of Allah and binds him to them, as the tailor joins one piece of cloth to another. Ma'arif al-Qur'an keeps both lines: sincere and free of pretence, or the mending of a torn garment of good deeds.",
            "bn": "কুরতুবী শব্দটির মূল খোঁজেন খাঁটিত্বে। মোম থেকে আলাদা হয়ে পরিষ্কার হলে মধুকে বলা হয় নাসিহ। কেউ কেউ শব্দটি নেন নিসাহা থেকে, যার অর্থ সেলাই। কুরতুবী এর দুটি ব্যাখ্যা দেন। দর্জি যেমন সেলাই করে কাপড় মজবুত করে, এমন তওবা তেমনি বান্দার আনুগত্যকে পোক্ত করে। অথবা দর্জি যেমন কাপড়ের একটি টুকরো আরেকটির সঙ্গে জোড়ে, এ তওবা তেমনি তাকে আল্লাহর ওলিদের সঙ্গে জুড়ে দেয়। মাআরিফুল কুরআন দুটি অর্থই রাখে: লোক দেখানো ভাব থেকে মুক্ত আন্তরিক তওবা, অথবা নেক আমলের ছেঁড়া কাপড় রিফু করা।"
          },
          {
            "en": "As-Sa'di reads the word by its reach. The repentance meant, he says, is general and covers every sin; the servant binds himself to it for Allah, wanting nothing by it but His face and nearness to Him, and keeps to it in all his states. Al-Qurtubi also quotes Sa'id ibn Jubayr: it is the repentance that is accepted, and it needs three things, fear that it will not be accepted, hope that it will, and constant obedience.",
            "bn": "সা'দী শব্দটি পড়েন তার পরিধি দিয়ে। তাঁর মতে এখানে উদ্দেশ্য সর্বব্যাপী তওবা, যা সব গুনাহকে ঘিরে রাখে। বান্দা আল্লাহর জন্যই এর অঙ্গীকার করে, এতে আল্লাহর সন্তুষ্টি আর তাঁর নৈকট্য ছাড়া আর কিছু চায় না, আর সব অবস্থায় তার উপর অটল থাকে। কুরতুবী সাঈদ ইবন জুবায়রের কথাও আনেন: এটি কবুল হওয়া তওবা, আর এর জন্য তিনটি জিনিস লাগে। কবুল না হওয়ার ভয়, কবুল হওয়ার আশা, আর লাগাতার আনুগত্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Nasuh or Nusuh",
          "bn": "নাসূহ না নুসূহ"
        },
        "p": [
          {
            "en": "The readers differed over one vowel. At-Tabari reports that the general body of readers in the cities, except 'Asim, read nasuhan with an open nun, as a quality of the repentance, and that 'Asim is reported to have read nusuhan, with a damma, as a verbal noun, from the expression nasaha fulanun li-fulanin nusuhan, he gave someone sincere counsel. Al-Qurtubi names al-Hasan, Kharija and Abu Bakr from 'Asim for the damma; al-Baghawi names al-Hasan and Abu Bakr from 'Asim.",
            "bn": "একটি স্বরচিহ্ন নিয়ে কারীদের মধ্যে ভিন্নতা আছে। তাবারী জানান, আসিম ছাড়া বিভিন্ন শহরের সাধারণ কারীরা পড়েছেন নাসূহান, নূনে যবর দিয়ে, তওবার গুণ হিসেবে। আর আসিম সম্পর্কে বর্ণিত আছে, তিনি পড়েছেন নুসূহান, পেশ দিয়ে, ক্রিয়াবাচক বিশেষ্য হিসেবে। আরবিতে বলা হয় নাসাহা ফুলানুন লি-ফুলানিন নুসূহান, অর্থাৎ সে অমুককে আন্তরিকভাবে উপদেশ দিল। কুরতুবী পেশের পাঠ উল্লেখ করেন হাসান, খারিজা আর আসিম থেকে আবু বকরের সূত্রে। বাগাভী নাম নেন হাসান আর আসিম থেকে আবু বকরের।"
          },
          {
            "en": "Each vowel bends the sense a little. On the common reading, al-Qurtubi compares the pattern to imra'atun sabur, a very patient woman: a repentance that reaches the utmost in sincere counsel. Al-Baghawi says it counsels its owner to leave off returning to what he repented of. On the damma, al-Qurtubi gives: a repentance of sincere counsel to yourselves, close to Sa'id ibn al-Musayyab's gloss that he also quotes, a repentance by which you counsel your own selves; and he cites al-Mubarrad: a repentance possessed of sincerity. At-Tabari judges the open vowel the more correct, since the authorities agree on it. Both readings are reported here; this article ranks neither.",
            "bn": "প্রতিটি স্বরচিহ্নে অর্থ একটু করে বাঁক নেয়। প্রচলিত পাঠে কুরতুবী শব্দের গড়নকে তুলনা করেন ইমরাআতুন সাবূর কথার সঙ্গে, যার মানে খুব ধৈর্যশীল নারী। তাহলে অর্থ দাঁড়ায়: আন্তরিকতায় চূড়ান্ত পর্যায়ে পৌঁছানো তওবা। বাগাভীর মতে এ তওবা তার মালিককে উপদেশ দেয়, যা থেকে তওবা করেছে সেদিকে আর ফিরো না। পেশের পাঠে কুরতুবীর ব্যাখ্যা: নিজেদের প্রতি আন্তরিক কল্যাণকামনার তওবা। কুরতুবী সাঈদ ইবনুল মুসাইয়্যিবের যে ব্যাখ্যা আনেন, সেটিও এর কাছাকাছি: এমন তওবা, যা দিয়ে তোমরা নিজেদের কল্যাণ চাও। কুরতুবী মুবাররাদের কথাও আনেন: আন্তরিকতাসম্পন্ন তওবা। তাবারী যবরের পাঠকেই বেশি সঠিক মনে করেন, কারণ প্রামাণ্য আলেমরা এতে একমত। এখানে দুটি পাঠই উল্লেখ করা হলো, কোনোটিকে প্রাধান্য দেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Whole Person Turns",
          "bn": "পুরো মানুষটাই ফেরে"
        },
        "p": [
          {
            "en": "Al-Kalbi, quoted by al-Qurtubi, al-Baghawi and Ma'arif al-Qur'an, divides the work among the faculties: regret in the heart, asking forgiveness with the tongue, and holding back with the body; al-Qurtubi's wording adds a settled confidence that he will not return. Al-Qurazi, in al-Qurtubi and al-Baghawi, gathers it in four things: asking forgiveness with the tongue, stopping with the body, intending in the heart never to return, and leaving bad companions. Al-Hasan, in Ibn Kathir, puts it as feeling: hate the sin as you once loved it, and ask forgiveness whenever you remember it.",
            "bn": "কালবীর কথা আনেন কুরতুবী, বাগাভী ও মাআরিফুল কুরআন। তিনি কাজটা ভাগ করে দেন মানুষের বিভিন্ন অংশের মধ্যে: অন্তরে অনুশোচনা, জিহ্বায় ইস্তিগফার, আর শরীর দিয়ে গুনাহ থেকে বিরত থাকা। কুরতুবীর বর্ণনায় এর সঙ্গে আছে, আর না ফেরার ব্যাপারে মনের স্থির আস্থা। কুরতুবী ও বাগাভী কুরাযীর কথা আনেন, যিনি একে চারটি জিনিসে গুছিয়েছেন: জিহ্বায় ইস্তিগফার, শরীরে গুনাহ ছেড়ে দেওয়া, অন্তরে আর না ফেরার সংকল্প, আর খারাপ সঙ্গ ত্যাগ করা। ইবন কাসীরের বর্ণনায় হাসান কথাটা বলেন অনুভূতির ভাষায়: গুনাহকে যতটা ভালোবেসেছিলে ততটাই ঘৃণা করো, আর যখনই মনে পড়ে, ইস্তিগফার করো।"
          },
          {
            "en": "The familiar conditions appear here as the tafsirs frame them. Ibn Kathir writes that the scholars said sincere repentance is to stop the sin now, regret what is past, and resolve not to do it again; and if the right belongs to a human being, to return it to him in the proper way. Ma'arif al-Qur'an, citing Mazhari, reports 'Ali (RA) naming six elements, among them making up missed duties, restoring usurped rights and asking pardon of the person wronged, and says all scholars accept them, some briefly and some in detail.",
            "bn": "পরিচিত শর্তগুলো এখানে আসে তাফসীরকারদের নিজেদের ভাষায়। ইবন কাসীর লেখেন, আলেমরা বলেছেন: খাঁটি তওবা হলো এখনই গুনাহ ছেড়ে দেওয়া, অতীতের জন্য অনুশোচনা করা, আর ভবিষ্যতে না করার দৃঢ় সংকল্প নেওয়া। আর হকটা যদি কোনো মানুষের হয়, তবে যথাযথ পথে তা তাকে ফিরিয়ে দেওয়া। মাআরিফুল কুরআন মাযহারীর বরাতে আলী (রাঃ)-এর ছয়টি উপাদানের কথা জানায়। এর মধ্যে আছে ছুটে যাওয়া ফরজ আদায় করা, ছিনিয়ে নেওয়া হক ফিরিয়ে দেওয়া, আর যার উপর জুলুম হয়েছে তার কাছে ক্ষমা চাওয়া। মাআরিফ বলে, সব আলেমই এগুলো মানেন, কেউ সংক্ষেপে বলেছেন, কেউ বিস্তারিত।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Owed Goes Back",
          "bn": "যার পাওনা, তাকে ফেরত"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives a whole discussion to what repentance requires. A sin against Allah's right, such as abandoning prayer, is not repented of until regret is joined by making up what was missed, and so with fasting and zakat. Where retaliation or the penalty for slander is due, the person submits to it if it is sought; if he is pardoned, regret and resolve suffice, and blood money agreed instead is paid, as 2:178 says. A wrong against people requires returning the thing to its owner, or a resolve to return it at the first chance.",
            "bn": "তওবার জন্য কী কী লাগে, কুরতুবী তা নিয়ে আলাদা একটি আলোচনা করেছেন। গুনাহটা যদি আল্লাহর হকে হয়, যেমন নামাজ ছেড়ে দেওয়া, তবে অনুশোচনার সঙ্গে ছুটে যাওয়া নামাজ কাযা না করা পর্যন্ত তওবা পূর্ণ হয় না। রোজা আর যাকাতের বেলাতেও একই কথা। কিসাস বা অপবাদের হদ্দ পাওনা থাকলে, তা দাবি করা হলে নিজেকে সঁপে দিতে হবে। মাফ পেলে অনুশোচনা আর সংকল্পই যথেষ্ট। আর কিসাসের বদলে রক্তমূল্যে মীমাংসা হলে তা আদায় করতে হবে, যেমন ২:১৭৮ আয়াতে আছে। মানুষের উপর করা জুলুমে জিনিসটা মালিককে ফিরিয়ে দিতে হবে, না পারলে প্রথম সুযোগেই ফেরত দেওয়ার সংকল্প রাখতে হবে।"
          },
          {
            "en": "Ibn Kathir raises a further question. Does sincere repentance require keeping to it until death, as the words never return in the reports suggest? Or is the resolve not to return enough to wipe out the past, so that a later fall does not undo what was forgiven? He cites a report for each side, then gives the first an argument from the greater to the lesser, and closes with: and Allah knows best. The question is set down here as he frames it.",
            "bn": "ইবন কাসীর আরেকটি প্রশ্ন তোলেন। খাঁটি তওবার শর্ত কি মৃত্যু পর্যন্ত তার উপর টিকে থাকা, যেমন বর্ণনাগুলোর 'আর কখনো ফিরবে না' কথাটা ইঙ্গিত দেয়? নাকি আর না ফেরার সংকল্পই অতীত মুছে যাওয়ার জন্য যথেষ্ট, ফলে পরে আবার পা পিছলে গেলেও যা মাফ হয়েছে তা নষ্ট হয় না? তিনি দুই পক্ষের জন্যই একটি করে বর্ণনা উল্লেখ করেন। তারপর প্রথম পক্ষের পক্ষে বড় থেকে ছোটর দিকে একটি যুক্তি দেন, আর শেষ করেন এই বলে: আল্লাহই ভালো জানেন। প্রশ্নটা এখানে রাখা হলো ঠিক যেভাবে তিনি তুলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Hope Worded as Certainty",
          "bn": "আশার ভাষায় নিশ্চয়তা"
        },
        "p": [
          {
            "en": "'Asa rabbukum: perhaps your Lord. Ibn Kathir says 'asa from Allah is binding, and al-Qurtubi that it is a certainty. Ma'arif al-Qur'an reads it as a promise worded as hope, to show that repentance and good deeds are not an equal price for Paradise and forgiveness, which rest on Allah's grace. At-Tabari explains the promise: He erases the bad deeds you have already done, and admits you to gardens with rivers flowing beneath their trees. The Muyassar says beneath their palaces.",
            "bn": "আসা রাব্বুকুম: হয়তো তোমাদের রব। ইবন কাসীর বলেন, আল্লাহর পক্ষ থেকে আসা শব্দটি অবশ্যম্ভাবী বিষয় বোঝায়। কুরতুবীও বলেন, এটি নিশ্চিত। মাআরিফুল কুরআনের মতে এটি আশার ভাষায় দেওয়া প্রতিশ্রুতি। এভাবে বলার কারণ, তওবা বা নেক আমল জান্নাত ও মাগফিরাতের সমান দাম নয়। এগুলো আল্লাহর অনুগ্রহের উপর নির্ভর করে। তাবারী প্রতিশ্রুতিটা খুলে বলেন: তোমাদের আগে করা মন্দ কাজগুলো তিনি মুছে দেবেন, আর এমন বাগানে প্রবেশ করাবেন যার গাছের নিচ দিয়ে নদী বয়ে চলে। মুয়াসসার বলে, প্রাসাদের নিচ দিয়ে।"
          },
          {
            "en": "Two sayings of the Prophet ﷺ are attached. Ibn Kathir cites Ibn Mas'ud's report and names Ibn Majah among its narrators. Ibn Majah records it (4252) from Ibn Ma'qil: 'I entered with my father upon 'Abdullah, and I heard him say: The Messenger of Allah ﷺ said: \"Regret is repentance.\" My father said: Did you hear the Prophet ﷺ say: \"Regret is repentance?\" He said: Yes.' Al-Qurtubi ties 'asa to another, which Ibn Majah records (4250): 'The one who repents from sin is like one who did not sin.' Ibn Majah records no grading of his own for either, so none is claimed.",
            "bn": "নবী ﷺ-এর দুটি বাণী এ আয়াতের সঙ্গে যুক্ত। ইবন কাসীর ইবন মাসউদ (রাঃ)-এর বর্ণনা আনেন এবং এর বর্ণনাকারীদের মধ্যে ইবন মাজাহর নাম উল্লেখ করেন। ইবন মাজাহ ইবন মা'কিল থেকে বর্ণনাটি এনেছেন (৪২৫২): \"আমি আমার বাবার সঙ্গে আবদুল্লাহর কাছে গেলাম। শুনলাম তিনি বলছেন: রাসূলুল্লাহ ﷺ বলেছেন, 'অনুশোচনাই তওবা।' আমার বাবা জিজ্ঞেস করলেন: আপনি কি নবী ﷺ-কে বলতে শুনেছেন, 'অনুশোচনাই তওবা'? তিনি বললেন: হ্যাঁ।\" কুরতুবী আসা শব্দটিকে আরও একটি বাণীর সঙ্গে মেলান, যা ইবন মাজাহ বর্ণনা করেছেন (৪২৫০): \"গুনাহ থেকে তওবাকারী ঠিক তার মতো, যার কোনো গুনাহ নেই।\" কোনোটির বেলাতেই ইবন মাজাহ নিজে কোনো মান উল্লেখ করেননি, তাই এখানেও কোনো মান দাবি করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Complete Our Light",
          "bn": "আমাদের নূর পূর্ণ করে দাও"
        },
        "p": [
          {
            "en": "Yawma la yukhzi-llahu-n-nabiyya walladhina amanu ma'ah. Al-Qurtubi and al-Baghawi take yukhzi here as punishing: He will not punish the Prophet ﷺ nor those who believed with him, al-Baghawi adding by entry into the Fire. Then nuruhum yas'a: at-Tabari has their light running before them, and reads bi-aymanihim as their records in their right hands. Al-Baghawi and the Muyassar set the walk on the Sirat, the Muyassar saying the light is in measure with their deeds. 57:12 shows the same light.",
            "bn": "ইয়াওমা লা ইউখযিল্লাহুন নাবিয়্যা ওয়াল্লাযীনা আমানূ মাআহ। কুরতুবী ও বাগাভী এখানে ইউখযী শব্দের অর্থ নেন শাস্তি দেওয়া: সেদিন আল্লাহ নবী ﷺ-কে শাস্তি দেবেন না, তাঁর সঙ্গে যারা ঈমান এনেছে তাদেরও না। বাগাভী যোগ করেন, জাহান্নামে প্রবেশ করিয়ে শাস্তি দেবেন না। তারপর নূরুহুম ইয়াসআ: তাবারীর ব্যাখ্যায় তাদের নূর তাদের সামনে ছুটে চলবে, আর বি-আইমানিহিম মানে তাদের ডান হাতে থাকবে তাদের আমলনামা। বাগাভী ও মুয়াসসার এ পথচলাকে রাখেন পুলসিরাতের উপর। মুয়াসসার বলে, নূর হবে তাদের আমলের পরিমাণ অনুযায়ী। ৫৭:১২ আয়াতেও একই নূরের ছবি।"
          },
          {
            "en": "Rabbana atmim lana nurana. Ibn Kathir reports from Mujahid, ad-Dahhak and al-Hasan that the believers say this when they see the hypocrites' light put out; al-Qurtubi gives it from Ibn Abbas and Mujahid. At-Tabari says they ask that their light stay until they cross the Sirat, when the hypocrites say, in 57:13, wait for us, that we may borrow from your light. He quotes al-Hasan: everyone is given light, believer and hypocrite; the hypocrite's is put out, and the believer fears for his own. That scene describes the Day and licenses nothing against any living person.",
            "bn": "রাব্বানা আতমিম লানা নূরানা। ইবন কাসীর মুজাহিদ, দাহহাক ও হাসান থেকে বর্ণনা করেন, মুনাফিকদের নূর নিভে যেতে দেখে মুমিনরা এ কথা বলবে। কুরতুবী একই কথা আনেন ইবন আব্বাস ও মুজাহিদ থেকে। তাবারী বলেন, তারা চাইবে পুলসিরাত পার হওয়া পর্যন্ত তাদের নূর যেন টিকে থাকে। সেটা সেই মুহূর্ত, যখন মুনাফিকরা বলবে, ৫৭:১৩ আয়াতের ভাষায়: আমাদের জন্য একটু থামো, তোমাদের নূর থেকে কিছু নিয়ে নিই। তাবারী হাসানের কথা আনেন: মুমিন ও মুনাফিক সবাইকে নূর দেওয়া হবে। মুনাফিকের নূর নিভে যাবে, আর মুমিন নিজের নূর নিয়ে ভয় পাবে। এ দৃশ্য সেই দিনের বর্ণনা। আজকের কোনো মানুষের বিরুদ্ধে কিছু করার অনুমতি এতে নেই।"
          },
          {
            "en": "Waghfir lana: at-Tabari explains, cover our sins and do not expose us by punishing us for them; and You are able to complete our light, forgive our sins and do all else. As-Sa'di says Allah answers their prayer, and the light they carry brings them to the Gardens; and calls all of it the fruit of sincere repentance. The verse ends where it began. Those who turned to Allah in this life are still asking forgiveness on the bridge.",
            "bn": "ওয়াগফির লানা: তাবারী ব্যাখ্যা করেন, আমাদের গুনাহ ঢেকে দাও, শাস্তি দিয়ে আমাদের লাঞ্ছিত করো না। আর তুমি আমাদের নূর পূর্ণ করতে, গুনাহ মাফ করতে, সবকিছুতেই সক্ষম। সা'দী বলেন, আল্লাহ তাদের দোয়া কবুল করবেন, আর তাদের সঙ্গের নূর তাদের জান্নাত পর্যন্ত পৌঁছে দেবে। তাঁর মতে এ সবই খাঁটি তওবার ফল। আয়াতটি যেখানে শুরু হয়েছিল, সেখানেই শেষ হয়। দুনিয়ায় যারা আল্লাহর দিকে ফিরেছিল, পুলসিরাতের উপরেও তারা মাগফিরাতই চাইছে।"
          }
        ]
      }
    ]
  },
  "66:12": {
    "sections": [
      {
        "h": {
          "en": "Named Last, Named by Her Father",
          "bn": "সবার শেষে, পিতার নামে"
        },
        "p": [
          {
            "en": "Surat at-Tahrim closes with four women set out as examples. In 66:10 the wife of Nuh and the wife of Lut, married to two righteous servants, are an example for those who disbelieved. In 66:11 the wife of Pharaoh is an example for those who believed. Then comes this verse: wa Maryama-bnata 'Imran, and Maryam, daughter of 'Imran. The first three are each known by a husband. Maryam (AS) is known by no husband at all; the verse names her by her father.",
            "bn": "সূরা আত-তাহরীম শেষ হয় চারজন নারীর দৃষ্টান্ত দিয়ে। ৬৬:১০ আয়াতে নূহ (আঃ) ও লূত (আঃ)-এর স্ত্রী, যারা দুই নেক বান্দার ঘরে ছিল, তারা কাফিরদের জন্য দৃষ্টান্ত। ৬৬:১১ আয়াতে ফেরাউনের স্ত্রী মুমিনদের জন্য দৃষ্টান্ত। তারপর এই আয়াত: ওয়া মারইয়ামাবনাতা ইমরান, আর ইমরানের কন্যা মারইয়াম। প্রথম তিনজনকে চেনানো হয়েছে স্বামীর পরিচয়ে। মারইয়াম (আঃ)-এর কোনো স্বামীর পরিচয় নেই। আয়াত তাঁকে চেনায় পিতার নামে।"
          },
          {
            "en": "Al-Qurtubi gives two ways to read the opening word. It may mean: and remember Maryam. Or it is joined to the wife of Pharaoh, so that the sense runs: and Allah has set forth an example in Maryam, daughter of 'Imran. On the second reading she is plainly a second example for those who believed, and the pair of believing women answers the pair in 66:10. That verse describes two women as the text describes them; it licenses nothing against any living person or community.",
            "bn": "শুরুর শব্দটি পড়ার দুটি পথ কুরতুবী দেখান। এর অর্থ হতে পারে: আর মারইয়ামকে স্মরণ করো। অথবা শব্দটি ফেরাউনের স্ত্রীর সঙ্গে যুক্ত, তখন অর্থ দাঁড়ায়: আর আল্লাহ ইমরানের কন্যা মারইয়ামের দৃষ্টান্ত পেশ করেছেন। দ্বিতীয়ভাবে পড়লে তিনি স্পষ্টতই মুমিনদের জন্য দ্বিতীয় দৃষ্টান্ত। তখন মুমিন দুই নারীর জুটি ৬৬:১০ আয়াতের জুটির জবাব হয়ে দাঁড়ায়। ওই আয়াত দুই নারীর কথা ততটুকুই বলে, যতটুকু কুরআন বলেছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি সেখানে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Farj, Read Two Ways",
          "bn": "ফারজ শব্দের দুই পাঠ"
        },
        "p": [
          {
            "en": "Allati ahsanat farjaha: who guarded her chastity. Ibn Kathir glosses the verb as kept it and protected it, and says ihsan means chastity and being free. As-Sa'di says she kept it safe from indecency, because her religion, her chastity and her purity were complete. The Muyassar says she guarded herself and protected herself from zina. On this first and plainest level the commentators agree: the verse praises a woman whose honour no one could touch, and the Qur'an records that praise in her name.",
            "bn": "আল্লাতী আহসানাত ফারজাহা: যিনি নিজের সতীত্ব রক্ষা করেছিলেন। ইবন কাসীর ক্রিয়াটির ব্যাখ্যা দেন এভাবে: তা হেফাজত করেছেন, নিরাপদ রেখেছেন। তাঁর মতে ইহসান মানে সতীত্ব ও স্বাধীনতা। সা'দী বলেন, দ্বীনদারি, সতীত্ব আর পবিত্রতা পূর্ণ ছিল বলেই তিনি অশ্লীলতা থেকে নিজেকে বাঁচিয়ে রেখেছিলেন। মুয়াসসার বলে, তিনি নিজেকে যিনা থেকে হেফাজত করেছিলেন। এই প্রথম ও সবচেয়ে সরল স্তরে তাফসীরকারেরা একমত। আয়াতটি এমন এক নারীর প্রশংসা করে, যাঁর সম্মানে কেউ হাত দিতে পারেনি। আর কুরআন সেই প্রশংসা তাঁর নাম ধরেই লিখে রেখেছে।"
          },
          {
            "en": "At-Tabari reads the word farj here differently. He explains the clause as: she who kept Jibril (AS) from the opening of her garment, the jayb of her robe. Every split or tear in a garment, he says, is called a farj, and so is every crack in a wall or gap in a roof. Al-Qurtubi reports the commentators as saying that farj here means the jayb, since Jibril breathed into her garment's opening, and he cites 50:6, wa ma laha min furuj, of the sky that has no gaps.",
            "bn": "তাবারী এখানে ফারজ শব্দটি অন্যভাবে পড়েন। তাঁর ব্যাখ্যায় অংশটির অর্থ: যিনি জিবরীল (আঃ)-কে নিজের জামার গলার ফাঁক থেকে দূরে রেখেছিলেন। আরবিতে একে বলে জাইব। তাবারী বলেন, কাপড়ের যেকোনো চেরা বা ছেঁড়া জায়গাকে ফারজ বলা হয়। দেয়ালের ফাটল কিংবা ছাদের ফাঁককেও বলা হয় ফারজ। কুরতুবী তাফসীরকারদের মত উদ্ধৃত করেন যে এখানে ফারজ মানে জাইব, কারণ জিবরীল ফুঁ দিয়েছিলেন জামার গলার ফাঁকেই। প্রমাণ হিসেবে তিনি আনেন ৫০:৬ আয়াত, ওয়া মা লাহা মিন ফুরূজ, যেখানে আকাশ সম্পর্কে বলা হয়েছে যে তাতে কোনো ফাটল নেই।"
          },
          {
            "en": "Al-Qurtubi adds the reading of Ubayy (RA), fa-nafakhna fi jaybiha min ruhina, and We breathed into her garment's opening of Our spirit, and then a second possibility: that she guarded her chastity in the plain sense, while the spirit was breathed into her garment's opening. So the two senses sit side by side in his text, and neither cancels the other. The commentators speak of these things with restraint, in the language of cloth and covering, and a reader does well to keep the same reserve.",
            "bn": "কুরতুবী উবাই (রাঃ)-এর পাঠও আনেন: ফানাফাখনা ফী জাইবিহা মিন রূহিনা, আর আমি তার জামার গলার ফাঁকে আমার রূহ থেকে ফুঁকে দিলাম। এরপর তিনি দ্বিতীয় একটি সম্ভাবনার কথা বলেন। হতে পারে তিনি সাধারণ অর্থেই সতীত্ব রক্ষা করেছিলেন, আর রূহ ফুঁকে দেওয়া হয়েছিল জামার গলার ফাঁকে। তাঁর লেখায় তাই দুটি অর্থ পাশাপাশি থাকে, কোনোটি অন্যটিকে বাতিল করে না। তাফসীরকারেরা এসব বিষয়ে কথা বলেন সংযত ভাষায়, কাপড় আর আবরণের ভাষায়। পাঠকেরও উচিত সেই সংযম ধরে রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Fihi Here, Fiha in Al-Anbiya",
          "bn": "এখানে ফীহি, আম্বিয়ায় ফীহা"
        },
        "p": [
          {
            "en": "Fa-nafakhna fihi min ruhina: so We breathed into it of Our spirit. The same scene appears in 21:91, almost word for word, with one letter different: there it is fa-nafakhna fiha, into her; here it is fihi, into it, a masculine pronoun. Al-Baghawi explains fihi as in the opening of her robe, and says that is why the pronoun is masculine: it points to the garment's opening, not to Maryam (AS) herself. At-Tabari says the same in his own words: into it means into her garment's opening.",
            "bn": "ফানাফাখনা ফীহি মিন রূহিনা: ফলে আমি তাতে আমার রূহ থেকে ফুঁকে দিলাম। প্রায় একই ভাষায় এ দৃশ্য আছে ২১:৯১ আয়াতে, পার্থক্য কেবল এক হরফে। সেখানে বলা হয়েছে ফীহা, তার মধ্যে। এখানে ফীহি, তাতে, পুংলিঙ্গ সর্বনাম দিয়ে। বাগাভী ব্যাখ্যা করেন, ফীহি মানে তাঁর জামার গলার ফাঁকে। তাঁর মতে এ কারণেই সর্বনামটি পুংলিঙ্গ: এটি মারইয়াম (আঃ)-কে নয়, জামার ফাঁককে বোঝায়। তাবারীও নিজের ভাষায় একই কথা বলেন: তাতে মানে তাঁর জামার গলার ফাঁকে।"
          },
          {
            "en": "At-Tabari supports this with Qatada, who glossed the clause as: so We breathed into her garment's opening of Our spirit. The Muyassar tells it plainly: Allah commanded Jibril (AS) to breathe into the opening of her shirt, the breath reached her womb, and she conceived 'Isa (AS). As-Sa'di says the breath reached Maryam, and from her came 'Isa son of Maryam, the noble messenger and the great master. Read together, the two verses give one event from two sides: where the breath was given, and whom it reached.",
            "bn": "তাবারী এর সমর্থনে কাতাদার ব্যাখ্যা আনেন: ফলে আমি তার জামার গলার ফাঁকে আমার রূহ থেকে ফুঁকে দিলাম। মুয়াসসার ঘটনাটি সরল ভাষায় বলে। আল্লাহ জিবরীল (আঃ)-কে তাঁর জামার গলার ফাঁকে ফুঁ দিতে আদেশ করলেন। সেই ফুঁ তাঁর গর্ভে পৌঁছল, আর তিনি ঈসা (আঃ)-কে গর্ভে ধারণ করলেন। সা'দী বলেন, ফুঁ পৌঁছেছিল মারইয়ামের কাছে, আর তাঁর থেকে এলেন ঈসা ইবন মারইয়াম, সম্মানিত রাসূল ও মহান নেতা। দুই আয়াত একসঙ্গে পড়লে একই ঘটনা দুই দিক থেকে দেখা যায়: ফুঁ দেওয়া হয়েছিল কোথায়, আর তা পৌঁছেছিল কার কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Spirit Was Meant",
          "bn": "কোন রূহের কথা"
        },
        "p": [
          {
            "en": "Min ruhina, of Our spirit. At-Tabari reads it as: from Jibril, and he is the spirit, al-ruh. Ibn Kathir reads it the same way, through the agency of the angel Jibril: Allah sent him to her, he appeared to her in the form of a well-proportioned man, as 19:17 says, and Allah commanded him to breathe with his mouth into the opening of her robe. The breath descended and entered, and from it came the pregnancy with 'Isa (AS). On this reading Our spirit names the messenger who carried out the command.",
            "bn": "মিন রূহিনা, আমার রূহ থেকে। তাবারীর ব্যাখ্যায় এর অর্থ: জিবরীল থেকে, আর তিনিই রূহ। ইবন কাসীরও একইভাবে পড়েন: ফেরেশতা জিবরীলের মাধ্যমে। আল্লাহ তাঁকে মারইয়ামের কাছে পাঠালেন। তিনি পূর্ণাঙ্গ মানুষের আকৃতিতে তাঁর সামনে এলেন, যেমনটি ১৯:১৭ আয়াতে আছে। আল্লাহ তাঁকে আদেশ করলেন মুখ দিয়ে তাঁর জামার গলার ফাঁকে ফুঁ দিতে। সেই ফুঁ নেমে গিয়ে প্রবেশ করল, আর তা থেকেই হলো ঈসা (আঃ)-এর গর্ভধারণ। এই পাঠে আমার রূহ মানে সেই বার্তাবাহক, যিনি আদেশটি পালন করেছিলেন।"
          },
          {
            "en": "Al-Qurtubi gives a second sense. Fa-nafakhna means We sent Jibril and he breathed into her garment's opening, and min ruhina means a spirit from among Our spirits, which is the spirit of 'Isa (AS); he refers the reader to his full treatment at the end of Surat an-Nisa. So one reading names the bearer and the other names what was borne. Both keep the act with Allah, as the verse does: We breathed. This page reports the two readings and leaves the matter there.",
            "bn": "কুরতুবী আরেকটি অর্থ দেন। ফানাফাখনা মানে: আমি জিবরীলকে পাঠালাম, আর তিনি তাঁর জামার গলার ফাঁকে ফুঁ দিলেন। আর মিন রূহিনা মানে আমার রূহগুলোর মধ্যে একটি রূহ, আর তা হলো ঈসা (আঃ)-এর রূহ। বিস্তারিত আলোচনার জন্য তিনি পাঠককে সূরা আন-নিসার শেষাংশে ফিরে যেতে বলেন। তাহলে এক পাঠ বাহকের নাম বলে, অন্য পাঠ বলে যা বহন করা হয়েছিল তার কথা। দুটি পাঠই কাজটিকে আল্লাহর বলে রাখে, যেমন আয়াত রেখেছে: আমি ফুঁকে দিলাম। এ লেখা দুটি পাঠই তুলে ধরে, আর এখানেই থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Words She Affirmed",
          "bn": "কোন বাণীকে তিনি সত্য মানলেন"
        },
        "p": [
          {
            "en": "Wa saddaqat bi-kalimati rabbiha wa kutubih: and she affirmed the words of her Lord and His books. The commentators fill the word kalimat in several ways. In at-Tabari's text it is glossed as: she believed in 'Isa, who is the Word of Allah. Al-Qurtubi takes the words to be what Jibril said to her, I am only the messenger of your Lord, as in 19:19, and reports from Muqatil that the words are 'Isa (AS), and that he is a prophet. Ibn Kathir explains the words and the books as His decree and His law.",
            "bn": "ওয়া সাদ্দাকাত বিকালিমাতি রাব্বিহা ওয়া কুতুবিহী: আর তিনি তাঁর রবের বাণী ও তাঁর কিতাবসমূহকে সত্য বলে মেনেছিলেন। কালিমাত শব্দটির অর্থ তাফসীরকারেরা নানাভাবে করেছেন। তাবারীর লেখায় এর ব্যাখ্যা: তিনি ঈসার উপর ঈমান এনেছিলেন, যিনি আল্লাহর কালিমা। কুরতুবীর মতে বাণী হলো জিবরীল তাঁকে যা বলেছিলেন: আমি তো কেবল তোমার রবের প্রেরিত দূত, যেমন ১৯:১৯ আয়াতে আছে। মুকাতিল থেকে তিনি বর্ণনা করেন, বাণী মানে ঈসা (আঃ), আর তিনি যে নবী সে কথা। ইবন কাসীর বাণী ও কিতাবের ব্যাখ্যা দেন এভাবে: আল্লাহর তাকদীর ও তাঁর শরীয়ত।"
          },
          {
            "en": "Al-Baghawi takes the words to be the laws Allah laid down for His servants through His revealed words, and the books to be those sent down to Ibrahim, Musa, Dawud and 'Isa (AS). At-Tabari names the Torah and the Injil; Ma'arif al-Qur'an names the Injil, the Zabur and the Torah, and takes the words of her Lord to be the scriptures revealed to the prophets. As-Sa'di reads the whole phrase as praise of her knowledge: affirming Allah's words covers both what He commands in religion and what He decrees in creation.",
            "bn": "বাগাভীর মতে বাণী মানে সেই বিধান, যা আল্লাহ তাঁর নাযিল করা কালাম দিয়ে বান্দাদের জন্য নির্ধারণ করেছেন। আর কিতাব মানে ইবরাহীম, মূসা, দাউদ ও ঈসা (আঃ)-এর উপর নাযিল হওয়া কিতাবগুলো। তাবারী নাম নেন তাওরাত ও ইঞ্জীলের। মাআরিফুল কুরআন নাম নেয় ইঞ্জীল, যাবূর ও তাওরাতের, আর রবের বাণী বলতে বোঝে নবীদের উপর নাযিল হওয়া সহীফাগুলো। সা'দী পুরো বাক্যটিকে পড়েন তাঁর জ্ঞানের প্রশংসা হিসেবে। তাঁর মতে আল্লাহর বাণীকে সত্য মানা দুটোকেই শামিল করে: দ্বীনের ব্যাপারে তাঁর আদেশ, আর সৃষ্টির ব্যাপারে তাঁর ফয়সালা।"
          },
          {
            "en": "As-Sa'di adds that affirming the books requires knowing what is in them, and that comes only through knowledge and practice. There is also a difference of recitation. Al-Baghawi reports that the people of Basra and Hafs read kutubihi, His books, in the plural, while the others read kitabihi, His book, in the singular, which also means many. Al-Qurtubi likewise says the singular denotes the whole kind, every book Allah sent down. On either recitation, then, her affirmation reaches every book that Allah revealed.",
            "bn": "সা'দী আরও বলেন, কিতাবকে সত্য মানতে হলে তাতে কী আছে তা জানতে হয়। আর তা আসে কেবল জ্ঞান ও আমলের মধ্য দিয়ে। এখানে কিরাআতেরও একটি পার্থক্য আছে। বাগাভী জানান, বসরার কারীগণ ও হাফস পড়েছেন কুতুবিহী, তাঁর কিতাবসমূহ, বহুবচনে। অন্যরা পড়েছেন কিতাবিহী, তাঁর কিতাব, একবচনে, তবে তাতেও বহু কিতাবই বোঝায়। কুরতুবীও বলেন, একবচন এখানে গোটা শ্রেণিকে বোঝায়, অর্থাৎ আল্লাহর নাযিল করা প্রতিটি কিতাব। তাহলে যেভাবেই পড়া হোক, তাঁর সত্য মানা আল্লাহর নাযিল করা প্রতিটি কিতাব পর্যন্ত পৌঁছে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Counted Among the Qanitin",
          "bn": "কানিতীনদের কাতারে"
        },
        "p": [
          {
            "en": "Wa kanat mina-l-qanitin: and she was of the devout. Qatada, in at-Tabari, and al-Qurtubi both gloss qanitin as the obedient. As-Sa'di fills it out: those who obey Allah and keep to His obedience with awe and humility. The word is a masculine plural, though she is a woman. Al-Baghawi explains that the sense is of the people who were qanitin, obedient to their Lord, and that is why the verse does not say qanitat. Al-Qurtubi gives the same reason: she was of the qanitin as a people.",
            "bn": "ওয়া কানাত মিনাল কানিতীন: আর তিনি ছিলেন অনুগতদের একজন। তাবারীর বর্ণনায় কাতাদা এবং কুরতুবী দুজনেই কানিতীন মানে করেন আনুগত্যশীল। সা'দী অর্থটা আরও খুলে বলেন: যারা আল্লাহর আনুগত্য করে, আর ভয় ও বিনয়ের সঙ্গে সেই আনুগত্যে লেগে থাকে। মারইয়াম (আঃ) নারী, অথচ শব্দটি পুংলিঙ্গ বহুবচন। বাগাভী ব্যাখ্যা দেন, অর্থ হলো তিনি সেই সম্প্রদায়ের অন্তর্ভুক্ত ছিলেন, যারা রবের অনুগত। এ কারণেই আয়াতে কানিতাত বলা হয়নি। কুরতুবীও একই কারণ দেখান: তিনি ছিলেন অনুগত লোকদের দলভুক্ত।"
          },
          {
            "en": "Both add further readings. Al-Baghawi reports from 'Ata' that the qanitin are those who pray, and allows that the word may mean her own kin and clan, who were people of righteousness obedient to Allah; al-Qurtubi has the same possibility about her household, and a view that it means those who pray between Maghrib and 'Isha'. The surah itself uses the feminine form in 66:5, qanitat, among the qualities of believing wives, and in 3:43 the angels tell Maryam directly: uqnuti li-rabbiki, be devoutly obedient to your Lord.",
            "bn": "দুজনেই আরও কিছু ব্যাখ্যা যোগ করেন। বাগাভী আতা থেকে বর্ণনা করেন, কানিতীন মানে যারা নামায পড়ে। তিনি এ সম্ভাবনাও রাখেন যে শব্দটি দিয়ে তাঁর আত্মীয়-স্বজন ও গোত্রকে বোঝানো হয়েছে, যারা ছিল নেককার ও আল্লাহর অনুগত। কুরতুবীও তাঁর পরিবার সম্পর্কে একই সম্ভাবনার কথা বলেন। তিনি আরেকটি মতও আনেন: মাগরিব ও ইশার মাঝে যারা নামায পড়ে। এই সূরাতেই ৬৬:৫ আয়াতে স্ত্রীলিঙ্গ রূপ কানিতাত এসেছে মুমিন স্ত্রীদের গুণের তালিকায়। আর ৩:৪৩ আয়াতে ফেরেশতারা মারইয়ামকে সরাসরি বলেন: উকনুতী লিরাব্বিকি, তোমার রবের একনিষ্ঠ আনুগত্য করো।"
          },
          {
            "en": "As-Sa'di draws the two halves of the verse together. Affirming the words and the books, he says, describes her perfection in knowledge; being among the qanitin describes her perfection in action. And so, he concludes, she was a siddiqah, for siddiqiyyah is the perfection of knowledge and action together. On this reading the verse ends with a portrait in two strokes: what she knew and accepted, and what she kept on doing. Neither half is presented as enough without the other.",
            "bn": "সা'দী আয়াতের দুই অংশকে এক সূত্রে বাঁধেন। তাঁর মতে বাণী ও কিতাবকে সত্য মানা তাঁর জ্ঞানের পূর্ণতার বর্ণনা। আর কানিতীনদের একজন হওয়া তাঁর আমলের পূর্ণতার বর্ণনা। তাই তাঁর সিদ্ধান্ত, তিনি ছিলেন সিদ্দীকা। কারণ সিদ্দীকিয়্যাত মানে জ্ঞান ও আমল দুটোরই পূর্ণতা। এভাবে পড়লে আয়াত শেষ হয় দুই রেখায় আঁকা একটি ছবিতে: তিনি কী জেনেছিলেন ও মেনেছিলেন, আর কী নিয়মিত করে যেতেন। কোনো অংশকেই অন্যটি ছাড়া যথেষ্ট বলে দেখানো হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Few Women Reached Perfection",
          "bn": "পূর্ণতায় পৌঁছানো অল্প কজন নারী"
        },
        "p": [
          {
            "en": "Ibn Kathir closes his commentary on the surah with a hadith he cites from both Sahihs. Sahih al-Bukhari (3411) records from Abu Musa (RA) that the Messenger of Allah ﷺ said: \"Many among men reached perfection, but none among women reached it except Asiyah, the wife of Pharaoh, and Maryam, daughter of 'Imran. And the excellence of 'A'ishah over other women is like the excellence of tharid over all other food.\" The two women whom 66:11 and 66:12 set forth as examples are the two named here.",
            "bn": "ইবন কাসীর সূরার তাফসীর শেষ করেন একটি হাদীস দিয়ে, যা তিনি দুই সহীহ গ্রন্থ থেকে উদ্ধৃত করেন। সহীহ বুখারী (৩৪১১)-তে আবূ মূসা (রাঃ) থেকে বর্ণিত, রাসূলুল্লাহ ﷺ বলেছেন: \"পুরুষদের মধ্যে অনেকেই পূর্ণতায় পৌঁছেছে। কিন্তু নারীদের মধ্যে ফেরাউনের স্ত্রী আসিয়া আর ইমরানের কন্যা মারইয়াম ছাড়া কেউ পূর্ণতায় পৌঁছায়নি। আর অন্য নারীদের উপর আয়েশার মর্যাদা তেমন, যেমন অন্য সব খাবারের উপর সারীদের মর্যাদা।\" ৬৬:১১ ও ৬৬:১২ আয়াত যে দুই নারীকে দৃষ্টান্ত হিসেবে পেশ করেছে, হাদীসে নাম এসেছে ঠিক তাঁদের দুজনেরই।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both relay a second narration, which at-Tirmidhi records (3878) from Anas (RA): the Prophet ﷺ said, \"Sufficient for you among the women of the worlds are Maryam daughter of 'Imran, Khadijah daughter of Khuwaylid, Fatimah daughter of Muhammad, and Asiyah the wife of Pharaoh.\" At-Tirmidhi grades it sahih. Neither hadith is reported as the occasion of this verse; they are general narrations about Maryam (AS), which the commentators place here because the verse names her. The tafsirs read here cite no cause of revelation for it.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই আরেকটি বর্ণনা আনেন, যা তিরমিযী (৩৮৭৮) আনাস (রাঃ) থেকে লিপিবদ্ধ করেছেন। নবী ﷺ বলেছেন: \"বিশ্বের নারীদের মধ্যে তোমার জন্য যথেষ্ট ইমরানের কন্যা মারইয়াম, খুওয়াইলিদের কন্যা খাদীজা, মুহাম্মাদের কন্যা ফাতিমা আর ফেরাউনের স্ত্রী আসিয়া।\" তিরমিযী একে সহীহ বলেছেন। কোনো হাদীসকেই এ আয়াত নাযিলের প্রেক্ষাপট হিসেবে বর্ণনা করা হয়নি। এগুলো মারইয়াম (আঃ) সম্পর্কে সাধারণ বর্ণনা। আয়াতে তাঁর নাম আছে বলে তাফসীরকারেরা এখানে সেগুলো এনেছেন। এখানে পড়া তাফসীরগুলোতে আয়াতটির কোনো শানে নুযূলের উল্লেখ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "An Honour Held in Common",
          "bn": "যে সম্মান অনেকের হৃদয়ে"
        },
        "p": [
          {
            "en": "Maryam (AS) is honoured by Christians too, who know her as Mary, the mother of Jesus, and read her story through their own scripture and creeds. That shared honour is a meeting point, not a battlefield. This verse argues with no one: it praises a woman for her chastity, her belief and her obedience. A Muslim who reads it has no reason to belittle anyone else's love for her, and the verse licenses no contempt, mockery or harm toward any community. Where the two traditions differ, the difference can be stated calmly.",
            "bn": "মারইয়াম (আঃ)-কে খ্রিস্টানরাও সম্মান করেন। তাঁদের কাছে তিনি মেরি, যিশুর মা, আর তাঁর কাহিনি তাঁরা পড়েন নিজেদের ধর্মগ্রন্থ ও বিশ্বাসের আলোকে। এই অভিন্ন সম্মান বিবাদের জায়গা নয়, মিলনের জায়গা। এ আয়াত কারও সঙ্গে তর্ক করে না। এটি এক নারীর প্রশংসা করে তাঁর সতীত্ব, ঈমান ও আনুগত্যের জন্য। একজন মুসলিম এটি পড়ে অন্য কারও ভালোবাসাকে ছোট করার কোনো কারণ পান না। কোনো সম্প্রদায়কে অবজ্ঞা, উপহাস বা ক্ষতি করার অনুমতিও এ আয়াত দেয় না। যেখানে দুই ঐতিহ্যের পার্থক্য আছে, সেখানে শান্তভাবে তা বলা যায়।"
          },
          {
            "en": "Notice, finally, whom the example is for. The verse before names Pharaoh's wife as an example lil-ladhina amanu, for those who believed, and this verse continues that sentence. The believers addressed are men and women alike. A surah that began in the Prophet's ﷺ own household ends by holding up two women as the model for the whole community. Neither is praised for a husband's rank or a family's name; each is praised for what she did herself, which is the point 66:10 makes from the other side.",
            "bn": "শেষে খেয়াল করুন, দৃষ্টান্তটি কাদের জন্য। আগের আয়াত ফেরাউনের স্ত্রীকে দৃষ্টান্ত বানিয়েছে লিল্লাযীনা আমানূ, মুমিনদের জন্য। এ আয়াত সেই বাক্যেরই ধারাবাহিকতা। আর মুমিন বলতে এখানে নারী-পুরুষ সবাই। যে সূরার শুরু নবী ﷺ-এর নিজের ঘরের ঘটনা দিয়ে, তার শেষে গোটা উম্মাহর সামনে আদর্শ হিসেবে দাঁড় করানো হয়েছে দুজন নারীকে। তাঁদের কারও প্রশংসা স্বামীর পদমর্যাদা বা বংশের নামের জন্য নয়। প্রত্যেকের প্রশংসা হয়েছে নিজের আমলের জন্য। ৬৬:১০ আয়াত উল্টো দিক থেকে ঠিক এই কথাটাই বলে।"
          },
          {
            "en": "So the verse leaves three things for any reader to carry. Guard what is yours to guard, whether anyone is watching or not. Accept what your Lord has said, and learn enough of it to know what you are accepting, since as-Sa'di ties affirmation to knowledge. And keep obeying, not in a burst but as a settled habit, the way the qanitin do. Maryam (AS) is named in the Qur'an for exactly these, and every one of them is within reach of an ordinary believer.",
            "bn": "তাহলে আয়াতটি যেকোনো পাঠকের হাতে তিনটি জিনিস তুলে দেয়। আপনার যা রক্ষা করার, তা রক্ষা করুন, কেউ দেখুক বা না দেখুক। রব যা বলেছেন তা মেনে নিন, আর এতটুকু শিখুন যাতে বোঝেন কী মেনে নিচ্ছেন। কারণ সা'দী সত্য মানাকে জ্ঞানের সঙ্গে জুড়েছেন। আর আনুগত্য চালিয়ে যান, হঠাৎ উচ্ছ্বাসে নয়, স্থির অভ্যাসে, যেমন করে কানিতীনরা করে। কুরআনে মারইয়াম (আঃ)-এর নাম এসেছে ঠিক এই গুণগুলোর জন্যই। আর এর প্রতিটিই একজন সাধারণ মুমিনের নাগালের মধ্যে।"
          }
        ]
      }
    ]
  }
});
