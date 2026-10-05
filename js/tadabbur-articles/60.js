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
  "60:1": {
    "sections": [
      {
        "h": {
          "en": "A Letter Bound for Makkah",
          "bn": "মক্কার পথে একটি চিঠি"
        },
        "p": [
          {
            "en": "Ibn Kathir names the story behind the opening of al-Mumtahanah: the account of Hatib ibn Abi Balta'ah (RA), one of the early Emigrants and a man who fought at Badr. He had children and wealth in Makkah but was not of Quraysh by descent. When the Messenger of Allah ﷺ resolved to march on Makkah after its people broke the treaty, he ordered the Muslims to prepare and prayed: O Allah, keep our news hidden from them.",
            "bn": "সূরা মুমতাহিনার শুরুর পেছনের ঘটনাটি কার, ইবন কাসীর নাম ধরে বলেন: এটি হাতিব ইবনে আবি বালতাআ (রাঃ)-এর ঘটনা। তিনি প্রথম দিকের মুহাজিরদের একজন, বদরের যুদ্ধেও ছিলেন। মক্কায় তাঁর সন্তান ও সম্পদ ছিল, কিন্তু বংশে তিনি কুরাইশ ছিলেন না। মক্কাবাসী চুক্তি ভঙ্গ করার পর রাসূলুল্লাহ ﷺ যখন মক্কা অভিযানের সিদ্ধান্ত নিলেন, মুসলিমদের প্রস্তুত হতে বললেন। আর দোয়া করলেন: হে আল্লাহ, আমাদের খবর তাদের কাছ থেকে গোপন রাখুন।"
          },
          {
            "en": "Hatib wrote to the people of Makkah telling them what the Prophet ﷺ intended, and sent the letter with a woman. His aim, Ibn Kathir says, was to have a favour owed to him there, so that they would keep his family safe, and Allah informed His Messenger in answer to that prayer. The reports differ on the woman. In Ibn Ishaq's account, which at-Tabari carries, one narrator made her a woman of Muzaynah and another named her Sarah, a freedwoman of one of the Banu Abd al-Muttalib; al-Qurtubi and al-Baghawi call her Sarah.",
            "bn": "হাতিব মক্কাবাসীর কাছে চিঠি লিখে নবী ﷺ-এর পরিকল্পনার কথা জানিয়ে দিলেন, আর চিঠিটা পাঠালেন এক মহিলার হাতে। ইবন কাসীর তাঁর উদ্দেশ্যও বলে দেন: সেখানকার লোকদের উপর একটা অনুগ্রহ রেখে দেওয়া, যাতে তারা তাঁর পরিবারকে নিরাপদে রাখে। ইবন কাসীর আরও বলেন, সেই দোয়া কবুল করেই আল্লাহ তাঁর রাসূলকে বিষয়টা জানিয়ে দেন। মহিলার পরিচয় নিয়ে বর্ণনা এক রকম নয়। তাবারী ইবনে ইসহাকের যে বর্ণনা আনেন, তাতে একজন বর্ণনাকারী তাকে মুযাইনা গোত্রের বলেছেন, আরেকজন বলেছেন বনু আবদুল মুত্তালিবের একজনের আযাদকৃত দাসী সারা। কুরতুবী ও বাগাভী তার নাম বলেন সারা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Narration from Ali",
          "bn": "আলী (রাঃ)-এর বর্ণনা"
        },
        "p": [
          {
            "en": "Al-Bukhari records the event in the tafsir chapter of his Sahih (4890), from Ali (RA), and this is its wording. Ali said: The Messenger of Allah ﷺ sent me, al-Zubayr and al-Miqdad, and said: Go until you reach Rawdat Khakh, for there is a woman travelling there who has a letter; take it from her. So we went, our horses racing with us, until we reached the Rawdah, and there was the woman. We said: Bring out the letter. She said: I have no letter with me.",
            "bn": "সহীহ বুখারীর তাফসীর অধ্যায়ে (৪৮৯০) ঘটনাটি আলী (রাঃ) থেকে বর্ণিত হয়েছে। তার ভাষ্য এই। আলী (রাঃ) বলেন: রাসূলুল্লাহ ﷺ আমাকে, যুবাইর ও মিকদাদকে পাঠালেন। বললেন: তোমরা চলতে থাকো, রওযা খাখ পর্যন্ত পৌঁছাও। সেখানে এক সফরকারী মহিলা আছে, তার কাছে একটি চিঠি আছে। চিঠিটা তার কাছ থেকে নিয়ে নাও। আমরা রওনা হলাম, ঘোড়াগুলো আমাদের নিয়ে ছুটে চলল। রওযায় পৌঁছে দেখি, মহিলাটি সেখানে। আমরা বললাম: চিঠিটা বের করো। সে বলল: আমার কাছে কোনো চিঠি নেই।"
          },
          {
            "en": "We said: You will bring out the letter, or we will strip off the clothes. So she brought it out from her braided hair, and we brought it to the Prophet ﷺ. In it was: from Hatib ibn Abi Balta'ah to some of the polytheists in Makkah, informing them of part of the Prophet's ﷺ affair. The Prophet ﷺ said: What is this, O Hatib? He said: Do not be hasty with me, O Messenger of Allah. I was a man among Quraysh but not of them by descent. This is rendered from the Arabic; the quranx English has an Ansari man here.",
            "bn": "আমরা বললাম: হয় চিঠি বের করবে, নয়তো কাপড় খুলে ফেলতে হবে। তখন সে চুলের বেণি থেকে চিঠিটা বের করে দিল। আমরা সেটা নবী ﷺ-এর কাছে নিয়ে এলাম। তাতে লেখা ছিল: হাতিব ইবনে আবি বালতাআর পক্ষ থেকে মক্কার কিছু মুশরিকের প্রতি। তাতে তিনি নবী ﷺ-এর কিছু বিষয় তাদের জানিয়েছিলেন। নবী ﷺ বললেন: হাতিব, এটা কী? তিনি বললেন: হে আল্লাহর রাসূল, আমার ব্যাপারে তাড়াহুড়া করবেন না। আমি কুরাইশের মধ্যে থাকতাম, কিন্তু বংশে তাদের কেউ ছিলাম না। এটি আরবি থেকে অনুবাদ; কুরআনএক্সের ইংরেজি পাঠে এখানে আনসারী ব্যক্তি আছে।"
          },
          {
            "en": "And the Emigrants with you have relatives through whom they protect their families and their wealth in Makkah. Since I lacked that kinship among them, I wanted to do them a favour by which they would protect my relatives. I did not do it out of disbelief, nor out of turning back from my religion. The Prophet ﷺ said: He has told you the truth. Umar said: O Messenger of Allah, let me strike his neck. He said: He was present at Badr, and what makes you know? Perhaps Allah, Mighty and Majestic, looked upon the people of Badr and said: Do as you will, for I have forgiven you.",
            "bn": "আপনার সঙ্গে যে মুহাজিররা আছেন, মক্কায় তাঁদের আত্মীয়স্বজন আছে, যাদের মাধ্যমে তাঁরা নিজেদের পরিবার ও সম্পদ রক্ষা করেন। তাদের মধ্যে আমার সেই বংশের সম্পর্ক নেই। তাই চাইলাম তাদের উপর এমন একটা অনুগ্রহ করে রাখি, যার বদলে তারা আমার আত্মীয়দের রক্ষা করবে। কুফরির কারণে এ কাজ করিনি, নিজের দ্বীন থেকে ফিরে যাওয়ার জন্যও না। নবী ﷺ বললেন: সে তোমাদের সত্য কথা বলেছে। উমর বললেন: হে আল্লাহর রাসূল, আমাকে অনুমতি দিন, তার গর্দান উড়িয়ে দিই। তিনি বললেন: সে বদরে উপস্থিত ছিল। তুমি কী করে জানবে? হয়তো আল্লাহ বদরের লোকদের দিকে তাকিয়ে বলেছেন: যা ইচ্ছা করো, আমি তোমাদের ক্ষমা করে দিয়েছি।"
          },
          {
            "en": "The narration ends: Amr said, and about him was revealed, O you who believe, do not take My enemy and your enemy. A narrator adds: I do not know whether the verse is in the hadith or is Amr's own statement. Asked about it, Sufyan said it is in what people narrate, and that he had memorised the hadith from Amr without leaving out a letter. Ibn Kathir notes that al-Bukhari's chapter on the battles reads: then Allah revealed the surah. At-Tabari adds that reports from a number of the Companions and others say the same.",
            "bn": "বর্ণনার শেষে আছে: আমর বলেন, তাঁর ব্যাপারেই নাযিল হয়েছে: হে ঈমানদারগণ, আমার শত্রু ও তোমাদের শত্রুকে বন্ধু বানিয়ো না। একজন বর্ণনাকারী যোগ করেন: আমি জানি না আয়াতটি হাদীসের অংশ, নাকি আমরের নিজের কথা। এ বিষয়ে সুফিয়ানকে জিজ্ঞেস করা হলে তিনি বলেন, এটা লোকদের বর্ণনায় আছে, আর তিনি নিজে আমরের কাছ থেকে হাদীসটি একটি অক্ষরও না ছেড়ে মুখস্থ করেছেন। ইবন কাসীর জানান, বুখারীর যুদ্ধ-অভিযান অধ্যায়ের বর্ণনায় আছে: তখন আল্লাহ সূরাটি নাযিল করলেন। তাবারী যোগ করেন, একদল সাহাবি ও অন্যদের থেকে আসা বর্ণনাও একই কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked Before Being Judged",
          "bn": "রায়ের আগে প্রশ্ন"
        },
        "p": [
          {
            "en": "The Prophet ﷺ opened not with a verdict but with a question, what is this, O Hatib, and let the man speak in full. Then he judged the answer: he has told you the truth. When Umar (RA) asked leave to kill him, he refused and named Badr. In the wordings al-Qurtubi, al-Baghawi and Ibn Kathir quote, Umar's request went further and called Hatib a hypocrite; the Prophet's ﷺ reply is the same in each. At-Tabari carries another report from Ali (RA) in which the Prophet ﷺ says: Hatib has spoken the truth, so say nothing of Hatib but good.",
            "bn": "নবী ﷺ রায় দিয়ে শুরু করেননি, শুরু করেছেন প্রশ্ন দিয়ে: হাতিব, এটা কী? তারপর মানুষটাকে পুরো কথা বলতে দিয়েছেন। এরপর জবাবটার বিচার করেছেন: সে তোমাদের সত্য বলেছে। উমর (রাঃ) তাঁকে হত্যার অনুমতি চাইলে তিনি রাজি হননি, বদরের কথা তুলেছেন। কুরতুবী, বাগাভী ও ইবন কাসীর যে ভাষ্যগুলো উদ্ধৃত করেন, তাতে উমরের কথা আরও কড়া, সেখানে তিনি হাতিবকে মুনাফিক বলেছেন। কিন্তু প্রতিটিতে নবী ﷺ-এর জবাব একই। তাবারী আলী (রাঃ) থেকে আরেকটি বর্ণনা আনেন, যাতে নবী ﷺ বলেন: হাতিব সত্য বলেছে, তাই হাতিবের ব্যাপারে ভালো ছাড়া কিছু বোলো না।"
          },
          {
            "en": "The commentators draw the consequence. Ibn Kathir says the Messenger of Allah ﷺ accepted Hatib's excuse when he explained that he had acted only to placate Quraysh for the wealth and children he had among them. As-Sa'di says Hatib wrote to gain a favour with them, not out of doubt or hypocrisy, and offered an excuse the Prophet ﷺ accepted. Al-Qurtubi calls the whole verse a mu'ataba, a reproach to Hatib, and says it shows his standing and the truth of his faith, because reproach comes only from a lover to his beloved.",
            "bn": "তাফসীরকারেরা এখান থেকে সিদ্ধান্ত টানেন। ইবন কাসীর বলেন, হাতিব যখন জানালেন যে কুরাইশের মধ্যে থাকা সম্পদ ও সন্তানের খাতিরেই তিনি শুধু তাদের মন রাখতে চেয়েছিলেন, তখন রাসূলুল্লাহ ﷺ তাঁর ওজর কবুল করেন। সা'দী বলেন, সন্দেহ বা মুনাফেকি থেকে নয়, তাদের উপর অনুগ্রহ রাখতেই হাতিব চিঠি লিখেছিলেন, আর এমন ওজর পেশ করেছিলেন যা নবী ﷺ গ্রহণ করেন। কুরতুবী গোটা আয়াতকে বলেন মুআতাবা, অর্থাৎ হাতিবের প্রতি স্নেহের অনুযোগ। তাঁর মতে এতে হাতিবের মর্যাদা আর ঈমানের সত্যতাই প্রকাশ পায়, কারণ অনুযোগ আসে কেবল ভালোবাসার মানুষের কাছ থেকে, ভালোবাসার মানুষের প্রতি।"
          },
          {
            "en": "Ma'arif al-Qur'an is sterner about his reasoning: the position Hatib took was inappropriate, it says, because hoping that enemies of the faith would repay a favour by guarding his family was illusory. That is a judgement on his calculation. This article goes no further than its sources. The verse names the act and calls it straying from the right way; the Prophet ﷺ, who heard the man out, gave the verdict on the man.",
            "bn": "মাআরিফুল কুরআন তাঁর হিসাবটার ব্যাপারে আরও কঠোর। সেখানে বলা হয়েছে, হাতিবের অবস্থান যথাযথ ছিল না। কারণ দ্বীনের শত্রুরা একটা উপকারের বদলে তাঁর পরিবারকে আগলে রাখবে, এমন আশা ছিল অলীক। এটা তাঁর হিসাবের উপর মন্তব্য। এ লেখা তার উৎসগুলোর চেয়ে এক পা-ও বেশি এগোবে না। আয়াত কাজটার নাম বলেছে, একে সঠিক পথ থেকে বিচ্যুতি বলেছে। আর মানুষটার ব্যাপারে রায় দিয়েছেন নবী ﷺ, যিনি তাঁর পুরো কথা শুনেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Rebuked Under the Name of Faith",
          "bn": "ঈমানের নামেই তিরস্কার"
        },
        "p": [
          {
            "en": "The verse is addressed to ya ayyuha alladhina amanu, O you who have believed, and the rebuke is delivered inside that name. Al-Qurtubi reports, with the word dhukira, it is mentioned, that when Hatib heard O you who have believed, he fainted for joy at being addressed with faith. He also reads tulquna ilayhim bil-mawadda as describing the outward act only, because Hatib's heart was sound, and he takes the Prophet's ﷺ words, as for your companion, he has spoken the truth, as explicit proof of it.",
            "bn": "আয়াতের সম্বোধন ইয়া আইয়ুহাল্লাযীনা আমানূ, হে ঈমানদারগণ। তিরস্কারটা আসে এই নামের ভেতরেই। কুরতুবী 'যুকিরা', অর্থাৎ 'বলা হয়ে থাকে' শব্দ দিয়ে একটি কথা আনেন: হাতিব যখন 'হে ঈমানদারগণ' সম্বোধন শুনলেন, ঈমানের নামে ডাক পাওয়ার আনন্দে তিনি অজ্ঞান হয়ে পড়েছিলেন। কুরতুবী আরও বলেন, তুলকূনা ইলাইহিম বিল-মাওয়াদ্দাহ কথাটি শুধু বাইরের কাজের বর্ণনা, কারণ হাতিবের অন্তর নিষ্কলুষ ছিল। এর স্পষ্ট প্রমাণ হিসেবে তিনি নবী ﷺ-এর কথা আনেন: তোমাদের এই সাথী সত্য বলেছে।"
          },
          {
            "en": "From the case al-Qurtubi draws a ruling: whoever tells the enemy the Muslims' news and weak points does not become a disbeliever by that, if he acted for a worldly aim with sound belief, as Hatib did when he sought a favour and intended no apostasy. The verse holds both at once. It calls the deed straying from the right way, yet it never withdraws the name of faith from those it corrects.",
            "bn": "এই ঘটনা থেকে কুরতুবী একটি বিধান বের করেন। কেউ যদি মুসলিমদের খবর আর দুর্বল দিকগুলো শত্রুকে জানিয়ে দেয়, তবু শুধু এ কারণে সে কাফির হয়ে যায় না, যদি সে দুনিয়াবি কোনো উদ্দেশ্যে তা করে আর তার আকীদা ঠিক থাকে। হাতিব ঠিক তা-ই করেছিলেন। তিনি অনুগ্রহ রাখতে চেয়েছিলেন, দ্বীন ত্যাগের নিয়ত তাঁর ছিল না। আয়াত দুটি দিক একসঙ্গে ধরে রাখে। কাজটাকে সে সঠিক পথ থেকে বিচ্যুতি বলে, অথচ যাদের সংশোধন করছে, তাদের কাছ থেকে ঈমানের নাম কেড়ে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Enemies Named by Their Deeds",
          "bn": "কাজ দিয়েই শত্রুর পরিচয়"
        },
        "p": [
          {
            "en": "The verse says My enemy and your enemy, then gives its reasons in its own words: they disbelieved in the truth that came to you, and they drive out the Messenger and you because you believe in Allah, your Lord. At-Tabari identifies them as the polytheists of Quraysh, who expelled the Messenger ﷺ and his Companions from Makkah. Ibn Kathir describes them as those at war with Allah, His Messenger and the believers. Ma'arif al-Qur'an suggests the phrase My enemy and your enemy points to the cause of the command.",
            "bn": "আয়াতটি বলে: আমার শত্রু ও তোমাদের শত্রু। তারপর নিজের ভাষাতেই কারণ জানায়: তোমাদের কাছে যে সত্য এসেছে, তারা তা অস্বীকার করেছে, আর তোমরা তোমাদের রব আল্লাহর উপর ঈমান এনেছ বলে তারা রাসূলকে ও তোমাদের বের করে দেয়। তাবারী তাদের চিনিয়ে দেন: কুরাইশের মুশরিকরা, যারা রাসূলুল্লাহ ﷺ ও তাঁর সাহাবিদের মক্কা থেকে বের করে দিয়েছিল। ইবন কাসীর তাদের বলেন আল্লাহ, তাঁর রাসূল ও মুমিনদের বিরুদ্ধে যুদ্ধরত লোক। মাআরিফুল কুরআনের ধারণা, 'আমার শত্রু ও তোমাদের শত্রু' কথাটি সম্ভবত এ নির্দেশের কারণের দিকে ইঙ্গিত করে।"
          },
          {
            "en": "Al-Qurtubi reads yukhrijuna al-rasula wa iyyakum as a clause explaining their disbelief and defiance, and an tu'minu as its cause: for the sake of your belief in Allah. Ibn Kathir sets beside it 85:8, where a people resented the believers for nothing but their faith. As-Sa'di puts it bluntly: in their eyes you had no fault in this except that you believed in Allah your Lord.",
            "bn": "কুরতুবীর মতে ইউখরিজূনার রাসূলা ওয়া ইয়্যাকুম বাক্যাংশটি তাদের কুফর ও ঔদ্ধত্যের ব্যাখ্যা। আর আন তু'মিনূ তার কারণ: তোমরা আল্লাহর উপর ঈমান এনেছ, সেজন্যই। ইবন কাসীর এর পাশে রাখেন ৮৫:৮, যেখানে এক জাতি মুমিনদের উপর ক্ষুব্ধ ছিল কেবল তাদের ঈমানের জন্য। সা'দী কথাটা সোজাসুজি বলেন: তাদের চোখে এ ব্যাপারে তোমাদের কোনো দোষ ছিল না, দোষ শুধু এটুকু যে তোমরা তোমাদের রব আল্লাহর উপর ঈমান এনেছ।"
          }
        ]
      },
      {
        "h": {
          "en": "Affection Cast, Then Whispered",
          "bn": "বন্ধুত্ব পাঠানো, তারপর কানে কানে"
        },
        "p": [
          {
            "en": "Tulquna ilayhim bil-mawadda: you cast affection towards them. At-Tabari says the ba changes nothing in the meaning: you extend your affection to them. Al-Zajjaj, cited by al-Baghawi and al-Qurtubi, reads: you pass them the Prophet's ﷺ news and his secret, because of the affection between you. The Muyassar joins both readings: you open your affection to them, and so tell them the news of the Messenger ﷺ and the rest of the Muslims. As-Sa'di hears haste in it, a rush towards their affection, and warns that once affection takes hold, support and alliance follow.",
            "bn": "তুলকূনা ইলাইহিম বিল-মাওয়াদ্দাহ: তোমরা তাদের দিকে বন্ধুত্ব ছুড়ে দাও। তাবারী বলেন, এখানে 'বা' অক্ষরটি থাকা না থাকায় অর্থে কোনো তফাত হয় না: তোমরা তাদের প্রতি তোমাদের বন্ধুত্ব বাড়িয়ে দাও। বাগাভী ও কুরতুবী যাজ্জাজের ব্যাখ্যা আনেন: তোমাদের মধ্যকার বন্ধুত্বের কারণে তোমরা নবী ﷺ-এর খবর ও গোপন কথা তাদের কাছে পৌঁছে দাও। মুয়াসসার দুটোকে মিলিয়ে বলে: তোমরা তাদের কাছে মন খুলে দাও, ফলে রাসূল ﷺ ও অন্য মুসলিমদের খবর তাদের জানিয়ে দাও। সা'দী এতে তাড়াহুড়ার সুর শোনেন, তাদের বন্ধুত্বের দিকে ছুটে যাওয়া। তিনি সতর্ক করেন, বন্ধুত্ব একবার জেঁকে বসলে সাহায্য আর মিত্রতা তার পেছনে পেছনে আসে।"
          },
          {
            "en": "Then the verse repeats itself with a closer verb: tusirruna ilayhim bil-mawadda, you confide affection to them in secret. Al-Baghawi cites Muqatil that the affection here is nasiha, counsel. Against that secrecy comes wa ana a'lamu bima akhfaytum wa ma a'lantum: I know best what you concealed and what you declared. Al-Qurtubi cites Ibn Abbas: what you hid in your breasts and what you showed on your tongues. As-Sa'di says that though it was hidden from the believers, it is not hidden from Allah.",
            "bn": "তারপর আয়াতটি আরও কাছের একটি ক্রিয়া দিয়ে কথাটা আবার বলে: তুসিররূনা ইলাইহিম বিল-মাওয়াদ্দাহ, তোমরা গোপনে তাদের সঙ্গে বন্ধুত্বের কথা বলো। বাগাভী মুকাতিলের কথা আনেন যে, এখানে বন্ধুত্ব মানে নাসীহা, অর্থাৎ শুভকামনার পরামর্শ। এই গোপনীয়তার মুখোমুখি দাঁড়ায় ওয়া আনা আ'লামু বিমা আখফাইতুম ওয়া মা আ'লানতুম: তোমরা যা গোপন করেছ আর যা প্রকাশ করেছ, আমি তা সবচেয়ে ভালো জানি। কুরতুবী ইবনে আব্বাসের কথা আনেন: যা তোমরা বুকে লুকিয়েছ আর যা মুখে প্রকাশ করেছ। সা'দী বলেন, মুমিনদের কাছে তা লুকানো থাকলেও আল্লাহর কাছে লুকানো থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Condition That Comes Late",
          "bn": "পরে আসা শর্ত"
        },
        "p": [
          {
            "en": "In kuntum kharajtum jihadan fi sabili wa-btigha'a mardati: if you have come out striving in My path and seeking My pleasure. It has no answer clause of its own. At-Tabari says it is placed late but belongs first in meaning: the condition attaches to the opening prohibition, so the sense is, do not take My enemies as allies if you went out for My sake. He glosses the going out as leaving your homes and emigrating for striving in My path. Al-Baghawi says the same: a condition whose answer comes before it.",
            "bn": "ইন কুনতুম খারাজতুম জিহাদান ফী সাবীলী ওয়াবতিগাআ মারদাতী: তোমরা যদি আমার পথে জিহাদের জন্য আর আমার সন্তুষ্টির খোঁজে বেরিয়ে থাকো। এই শর্তের নিজস্ব কোনো জবাব-বাক্য নেই। তাবারীর মতে শর্তটি বাক্যে পরে এসেছে, কিন্তু অর্থে তার জায়গা আগে। এটি শুরুর নিষেধের সঙ্গে যুক্ত। অর্থ দাঁড়ায়: তোমরা যদি আমার জন্য বেরিয়ে থাকো, তবে আমার শত্রুদের বন্ধু বানিয়ো না। বেরিয়ে পড়ার ব্যাখ্যা তিনি দেন এভাবে: আমার পথে জিহাদের জন্য ঘরবাড়ি ছেড়ে হিজরত করা। বাগাভীও একই কথা বলেন: এমন শর্ত, যার জবাব আগেই এসে গেছে।"
          },
          {
            "en": "Ibn Kathir gives the plain sense: if that is what you are, do not take them as allies. As-Sa'di turns the condition into a test of sincerity: if your going out was for jihad, to raise Allah's word and to seek His pleasure, act on what that requires. Ma'arif al-Qur'an adds that if the hijra truly was for Allah, an enemy of Allah could never look after Allah's friend. The verse then closes: wa man yaf'alhu minkum fa-qad dalla sawa'a al-sabil, whoever of you does it has strayed from the evenness of the way.",
            "bn": "ইবন কাসীর সরল অর্থটা দেন: তোমরা যদি এমনই হও, তবে তাদের বন্ধু বানিয়ো না। সা'দী শর্তটাকে আন্তরিকতার পরীক্ষা বানিয়ে দেন: আল্লাহর কালেমা উঁচু করতে আর তাঁর সন্তুষ্টি পেতে যদি জিহাদের জন্য বেরিয়ে থাকো, তবে সেই দাবি অনুযায়ী কাজ করো। মাআরিফুল কুরআন যোগ করে, হিজরত যদি সত্যিই আল্লাহর জন্য হয়ে থাকে, তবে আল্লাহর শত্রু কখনো আল্লাহর বন্ধুর দেখাশোনা করবে না। তারপর আয়াতের শেষ কথা: ওয়া মাই ইয়াফ'আলহু মিনকুম ফাকাদ দাল্লা সাওয়াআস সাবীল, তোমাদের মধ্যে যে এমন করে, সে সোজা পথ থেকে সরে গেছে।"
          },
          {
            "en": "At-Tabari says such a person has turned from the straight course of the path Allah made a road to Paradise. Al-Qurtubi and al-Baghawi say he has missed the way, its true aim or the road of guidance. As-Sa'di says he took a course against the Shariah, against reason and against human decency. Every gloss is an image of a road and of losing it. What such allies would actually do is left to the verses that follow.",
            "bn": "তাবারী বলেন, এমন লোক সেই পথের সোজা গতিপথ থেকে সরে গেছে, যে পথকে আল্লাহ জান্নাতের রাস্তা বানিয়েছেন। কুরতুবী ও বাগাভী বলেন, সে পথ হারিয়েছে, পথের আসল লক্ষ্য কিংবা হিদায়াতের রাস্তা। সা'দী বলেন, সে এমন পথ ধরেছে যা শরীয়ত, বিবেক আর মানুষের ভদ্রতা, সবকিছুর বিপরীত। প্রতিটি ব্যাখ্যাতেই আছে একটা পথের ছবি, আর সেই পথ হারানোর কথা। এমন বন্ধুরা আসলে কী করত, সে কথা রেখে দেওয়া হয়েছে পরের আয়াতগুলোর জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant for Today's Enmities",
          "bn": "আজকের শত্রুতার সনদ নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes one hostile party at one moment: the Quraysh of Makkah, who had rejected the message and driven the Prophet ﷺ and the believers from their homes for their faith. It licenses nothing against any living person or community, and My enemies and your enemies is not an instruction to treat any present-day people as enemies, or to suspect a neighbour, colleague or relative of another faith. Later in this surah, 60:8 and 60:9 draw that line by conduct.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি এক বিশেষ সময়ের একটি শত্রুপক্ষের বর্ণনা দেয়: মক্কার কুরাইশ, যারা বার্তাটিকে প্রত্যাখ্যান করেছিল আর ঈমানের কারণে নবী ﷺ ও মুমিনদের ঘরছাড়া করেছিল। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এতে নেই। 'আমার শত্রু ও তোমাদের শত্রু' কথাটি বর্তমান কালের কোনো মানুষকে শত্রু গণ্য করার নির্দেশ নয়। ভিন্ন ধর্মের প্রতিবেশী, সহকর্মী বা আত্মীয়কে সন্দেহ করার নির্দেশও নয়। এই সূরারই পরের দিকে ৬০:৮ ও ৬০:৯ আয়াত আচরণ দিয়ে সেই সীমারেখা টানে।"
          },
          {
            "en": "What the verse does reach today is the inner ground Hatib stood on: a frightened man with no clan to shield his family, reaching for a hidden favour that, in al-Baghawi's longer report, he was sure would avail them nothing. The verse answers that private reasoning with two facts: Allah knows what was concealed, and going out for His sake has its own demands. The Prophet ﷺ answered the man with a question, a hearing and mercy. The standard does not bend, and whoever slips is still asked before he is judged.",
            "bn": "আজকের পাঠকের কাছে আয়াতটি যেখানে পৌঁছায়, তা হলো হাতিবের মনের সেই জায়গা। ভয় পাওয়া একজন মানুষ, পরিবারকে আগলে রাখার মতো গোত্র যাঁর নেই, তিনি গোপন একটা অনুগ্রহের আশ্রয় নিলেন। বাগাভীর দীর্ঘ বর্ণনায় আছে, তিনি নিশ্চিত ছিলেন তাঁর চিঠি তাদের কোনো কাজে আসবে না। আয়াতটি সেই একান্ত যুক্তির জবাব দেয় দুটি সত্য দিয়ে: যা গোপন রাখা হয়েছিল, আল্লাহ তা জানেন। আর তাঁর জন্য বেরিয়ে পড়ার নিজস্ব দাবি আছে। নবী ﷺ মানুষটার জবাব দিয়েছেন প্রশ্ন দিয়ে, মন দিয়ে শুনে, দয়া দিয়ে। মানদণ্ড নড়ে না, আর যে পা ফসকায়, রায়ের আগে তাকেও জিজ্ঞেস করা হয়।"
          }
        ]
      }
    ]
  },
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
