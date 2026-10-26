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
            "bn": "ইবন কাসীর সূরা মুমতাহিনার শুরুর পেছনের ঘটনাটি নাম ধরেই বলেছেন: হাতিব ইবনে আবি বালতাআ (রাঃ)-এর ঘটনা। তিনি প্রথম দিকের মুহাজিরদের একজন, বদরের যুদ্ধেও ছিলেন। মক্কায় তাঁর সন্তান ও সম্পদ ছিল, কিন্তু বংশে তিনি কুরাইশ ছিলেন না। মক্কাবাসী চুক্তি ভঙ্গ করার পর রাসূলুল্লাহ ﷺ মক্কা অভিযানের সিদ্ধান্ত নিলেন। তিনি মুসলিমদের প্রস্তুত হতে বললেন, আর দোয়া করলেন: হে আল্লাহ, আমাদের খবর তাদের কাছ থেকে গোপন রাখুন।"
          },
          {
            "en": "Hatib wrote to the people of Makkah telling them what the Prophet ﷺ intended, and sent the letter with a woman. His aim, Ibn Kathir says, was to have a favour owed to him there, so that they would keep his family safe, and Allah informed His Messenger in answer to that prayer. The reports differ on the woman. In Ibn Ishaq's account, which at-Tabari carries, one narrator made her a woman of Muzaynah and another named her Sarah, a freedwoman of one of the Banu Abd al-Muttalib; al-Qurtubi and al-Baghawi call her Sarah.",
            "bn": "হাতিব মক্কাবাসীর কাছে চিঠি লিখে নবী ﷺ-এর পরিকল্পনার কথা জানিয়ে দিলেন, আর চিঠিটা পাঠালেন এক মহিলার হাতে। ইবন কাসীর তাঁর উদ্দেশ্যও বলে দেন: সেখানকার লোকদের উপর একটা অনুগ্রহ রেখে দেওয়া, যাতে তারা তাঁর পরিবারকে নিরাপদে রাখে। ইবন কাসীর আরও বলেন, সেই দোয়া কবুল করেই আল্লাহ তাঁর রাসূলকে বিষয়টা জানিয়ে দেন। মহিলার পরিচয় নিয়ে বর্ণনা এক রকম নয়। তাবারী ইবনে ইসহাকের যে বর্ণনা আনেন, তাতে একজন বর্ণনাকারী তাকে মুযাইনা গোত্রের বলেছেন, আরেকজন বলেছেন বনু আবদুল মুত্তালিবের একজনের আযাদকৃত দাসী সারা। কুরতুবী ও বাগাভী তার নাম বলেন সারা।"
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
            "bn": "সহীহ বুখারীর তাফসীর অধ্যায়ে (৪৮৯০) ঘটনাটি আলী (রাঃ) থেকে বর্ণিত হয়েছে। তার ভাষ্য এই। আলী (রাঃ) বলেন: রাসূলুল্লাহ ﷺ আমাকে, যুবাইর ও মিকদাদকে পাঠালেন। বললেন: তোমরা চলতে থাকো, রওযা খাখ পর্যন্ত পৌঁছাও। সেখানে এক সফরকারী মহিলা আছে, তার কাছে একটি চিঠি আছে। চিঠিটা তার কাছ থেকে নিয়ে নাও। আমরা রওনা হলাম, ঘোড়াগুলো আমাদের নিয়ে ছুটে চলল। রওযায় পৌঁছে দেখি, মহিলাটি সেখানে। আমরা বললাম: চিঠিটা বের করো। সে বলল: আমার কাছে কোনো চিঠি নেই।"
          },
          {
            "en": "We said: You will bring out the letter, or we will strip off the clothes. So she brought it out from her braided hair, and we brought it to the Prophet ﷺ. In it was: from Hatib ibn Abi Balta'ah to some of the polytheists in Makkah, informing them of part of the Prophet's ﷺ affair. The Prophet ﷺ said: What is this, O Hatib? He said: Do not be hasty with me, O Messenger of Allah. I was a man among Quraysh but not of them by descent.",
            "bn": "আমরা বললাম: হয় চিঠি বের করবে, নয়তো কাপড় খুলে ফেলতে হবে। তখন সে চুলের বেণি থেকে চিঠিটা বের করে দিল। আমরা সেটা নবী ﷺ-এর কাছে নিয়ে এলাম। তাতে লেখা ছিল: হাতিব ইবনে আবি বালতাআর পক্ষ থেকে মক্কার কিছু মুশরিকের প্রতি। তাতে তিনি নবী ﷺ-এর কিছু বিষয় তাদের জানিয়েছিলেন। নবী ﷺ বললেন: হাতিব, এটা কী? তিনি বললেন: হে আল্লাহর রাসূল, আমার ব্যাপারে তাড়াহুড়া করবেন না। আমি কুরাইশের মধ্যে থাকতাম, কিন্তু বংশে তাদের কেউ ছিলাম না।"
          },
          {
            "en": "And the Emigrants with you have relatives through whom they protect their families and their wealth in Makkah. Since I lacked that kinship among them, I wanted to do them a favour by which they would protect my relatives. I did not do it out of disbelief, nor out of turning back from my religion. The Prophet ﷺ said: He has told you the truth. Umar said: O Messenger of Allah, let me strike his neck. He said: He was present at Badr, and what makes you know? Perhaps Allah, Mighty and Majestic, looked upon the people of Badr and said: Do as you will, for I have forgiven you.",
            "bn": "আপনার সঙ্গে যে মুহাজিররা আছেন, মক্কায় তাঁদের আত্মীয়স্বজন আছে, যাদের মাধ্যমে তাঁরা নিজেদের পরিবার ও সম্পদ রক্ষা করেন। তাদের মধ্যে আমার সেই বংশের সম্পর্ক নেই। তাই চাইলাম তাদের উপর এমন একটা অনুগ্রহ করে রাখি, যার বদলে তারা আমার আত্মীয়দের রক্ষা করবে। কুফরির কারণে এ কাজ করিনি, নিজের দ্বীন থেকে ফিরে যাওয়ার জন্যও না। নবী ﷺ বললেন: সে তোমাদের সত্য কথা বলেছে। উমর বললেন: হে আল্লাহর রাসূল, আমাকে অনুমতি দিন, তার গর্দান উড়িয়ে দিই। তিনি বললেন: সে বদরে উপস্থিত ছিল। তুমি কী করে জানবে? হয়তো আল্লাহ বদরের লোকদের দিকে তাকিয়ে বলেছেন: যা ইচ্ছা করো, আমি তোমাদের ক্ষমা করে দিয়েছি।"
          },
          {
            "en": "The narration ends: Amr said, and about him was revealed, O you who believe, do not take My enemy and your enemy. A narrator adds: I do not know whether the verse is in the hadith or is Amr's own statement. Asked about it, Sufyan said it is in what people narrate, and that he had memorised the hadith from Amr without leaving out a letter. Ibn Kathir notes that al-Bukhari's chapter on the battles reads: then Allah revealed the surah. At-Tabari adds that reports from a number of the Companions and others say the same.",
            "bn": "বর্ণনার শেষে আছে: আমর বলেন, তাঁর ব্যাপারেই নাজিল হয়েছে: হে ঈমানদারগণ, আমার শত্রু ও তোমাদের শত্রুকে বন্ধু বানিয়ো না। একজন বর্ণনাকারী যোগ করেন: আমি জানি না আয়াতটি হাদিসের অংশ, নাকি আমরের নিজের কথা। এ বিষয়ে সুফিয়ানকে জিজ্ঞেস করা হলে তিনি বলেন, এটা লোকদের বর্ণনায় আছে, আর তিনি নিজে আমরের কাছ থেকে হাদিসটি একটি অক্ষরও না ছেড়ে মুখস্থ করেছেন। ইবন কাসীর জানান, বুখারীর যুদ্ধ-অভিযান অধ্যায়ের বর্ণনায় আছে: তখন আল্লাহ সূরাটি নাজিল করলেন। তাবারী যোগ করেন, একদল সাহাবি ও অন্যদের থেকে আসা বর্ণনাও একই কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked Before Being Judged",
          "bn": "রায়ের আগে প্রশ্ন"
        },
        "p": [
          {
            "en": "The Prophet ﷺ opened not with a verdict but with a question, what is this, O Hatib, and let the man speak in full. Then he judged the answer: he has told you the truth. When Umar (RA) asked leave to kill him, he refused and named Badr. In the wordings al-Qurtubi, al-Baghawi and Ibn Kathir quote, Umar's request went further and called Hatib a hypocrite; the Prophet's ﷺ reply is the same in each. At-Tabari carries another report from Ali (RA) in which the Prophet ﷺ says: Hatib has spoken the truth, so say nothing of Hatib but good.",
            "bn": "নবী ﷺ রায় দিয়ে শুরু করেননি, শুরু করেছেন প্রশ্ন দিয়ে: হাতিব, এটা কী? তারপর মানুষটাকে পুরো কথা বলতে দিয়েছেন। এরপর জবাবটার বিচার করেছেন: সে তোমাদের সত্য বলেছে। উমর (রাঃ) তাঁকে হত্যার অনুমতি চাইলে তিনি রাজি হননি, বদরের কথা তুলেছেন। কুরতুবী, বাগাভী ও ইবন কাসীর যে ভাষ্যগুলো উদ্ধৃত করেন, তাতে উমরের কথা আরও কড়া, সেখানে তিনি হাতিবকে মুনাফিক বলেছেন। কিন্তু প্রতিটিতে নবী ﷺ-এর জবাব একই। তাবারী আলী (রাঃ) থেকে আরেকটি বর্ণনা আনেন, যাতে নবী ﷺ বলেন: হাতিব সত্য বলেছে, তাই হাতিবের ব্যাপারে ভালো ছাড়া কিছু বোলো না।"
          },
          {
            "en": "The commentators draw the consequence. Ibn Kathir says the Messenger of Allah ﷺ accepted Hatib's excuse when he explained that he had acted only to placate Quraysh for the wealth and children he had among them. As-Sa'di says Hatib wrote to gain a favour with them, not out of doubt or hypocrisy, and offered an excuse the Prophet ﷺ accepted. Al-Qurtubi calls the whole verse a mu'ataba, a reproach to Hatib, and says it shows his standing and the truth of his faith, because reproach comes only from a lover to his beloved.",
            "bn": "তাফসীরকারেরা এখান থেকে সিদ্ধান্ত টানেন। ইবন কাসীর বলেন, হাতিব যখন জানালেন যে কুরাইশের মধ্যে থাকা সম্পদ ও সন্তানের খাতিরেই তিনি শুধু তাদের মন রাখতে চেয়েছিলেন, তখন রাসূলুল্লাহ ﷺ তাঁর ওজর কবুল করেন। সা'দী বলেন, সন্দেহ বা মুনাফেকি থেকে নয়, তাদের উপর অনুগ্রহ রাখতেই হাতিব চিঠি লিখেছিলেন, আর এমন ওজর পেশ করেছিলেন যা নবী ﷺ গ্রহণ করেন। কুরতুবী গোটা আয়াতকে বলেন মুআতাবা, অর্থাৎ হাতিবের প্রতি স্নেহের অনুযোগ। তাঁর মতে এতে হাতিবের মর্যাদা আর ঈমানের সত্যতাই প্রকাশ পায়, কারণ অনুযোগ আসে কেবল ভালোবাসার মানুষের কাছ থেকে, ভালোবাসার মানুষের প্রতি।"
          },
          {
            "en": "Ma'arif al-Qur'an is sterner about his reasoning: the position Hatib took was inappropriate, it says, because hoping that enemies of the faith would repay a favour by guarding his family was illusory. That is a judgement on his calculation. This article goes no further than its sources. The verse names the act and calls it straying from the right way; the Prophet ﷺ, who heard the man out, gave the verdict on the man.",
            "bn": "মাআরিফুল কুরআন তাঁর হিসাবটার ব্যাপারে আরও কঠোর। সেখানে বলা হয়েছে, হাতিবের অবস্থান যথাযথ ছিল না। কারণ দ্বীনের শত্রুরা একটা উপকারের বদলে তাঁর পরিবারকে আগলে রাখবে, এমন আশা ছিল অলীক। এটা তাঁর হিসাবের উপর মন্তব্য। এ লেখা তার উৎসগুলোর চেয়ে এক পা-ও বেশি এগোবে না। আয়াত কাজটার নাম বলেছে, একে সঠিক পথ থেকে বিচ্যুতি বলেছে। আর মানুষটার ব্যাপারে রায় দিয়েছেন নবী ﷺ, যিনি তাঁর পুরো কথা শুনেছিলেন।"
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
            "bn": "আয়াতের সম্বোধন ইয়া আইয়ুহাল্লাযীনা আমানূ, হে ঈমানদারগণ। তিরস্কারটা আসে এই নামের ভেতরেই। কুরতুবী 'যুকিরা', অর্থাৎ 'বলা হয়ে থাকে' শব্দ দিয়ে একটি কথা আনেন: হাতিব যখন 'হে ঈমানদারগণ' সম্বোধন শুনলেন, ঈমানের নামে ডাক পাওয়ার আনন্দে তিনি অজ্ঞান হয়ে পড়েছিলেন। কুরতুবী আরও বলেন, তুলকূনা ইলাইহিম বিল-মাওয়াদ্দাহ কথাটি শুধু বাইরের কাজের বর্ণনা, কারণ হাতিবের অন্তর নিষ্কলুষ ছিল। এর স্পষ্ট প্রমাণ হিসেবে তিনি নবী ﷺ-এর কথা আনেন: তোমাদের এই সাথী সত্য বলেছে।"
          },
          {
            "en": "From the case al-Qurtubi draws a ruling: whoever tells the enemy the Muslims' news and weak points does not become a disbeliever by that, if he acted for a worldly aim with sound belief, as Hatib did when he sought a favour and intended no apostasy. The verse holds both at once. It calls the deed straying from the right way, yet it never withdraws the name of faith from those it corrects.",
            "bn": "এই ঘটনা থেকে কুরতুবী একটি বিধান বের করেন। কেউ যদি মুসলিমদের খবর আর দুর্বল দিকগুলো শত্রুকে জানিয়ে দেয়, তবু শুধু এ কারণে সে কাফির হয়ে যায় না, যদি সে দুনিয়াবি কোনো উদ্দেশ্যে তা করে আর তার আকীদা ঠিক থাকে। হাতিব ঠিক তা-ই করেছিলেন। তিনি অনুগ্রহ রাখতে চেয়েছিলেন, দ্বীন ত্যাগের নিয়ত তাঁর ছিল না। আয়াত দুটি দিক একসঙ্গে ধরে রাখে। কাজটাকে সে সঠিক পথ থেকে বিচ্যুতি বলে, অথচ যাদের সংশোধন করছে, তাদের কাছ থেকে ঈমানের নাম কেড়ে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Enemies Named by Their Deeds",
          "bn": "কাজ দিয়েই শত্রুর পরিচয়"
        },
        "p": [
          {
            "en": "The verse says My enemy and your enemy, then gives its reasons in its own words: they disbelieved in the truth that came to you, and they drive out the Messenger and you because you believe in Allah, your Lord. At-Tabari identifies them as the polytheists of Quraysh, who expelled the Messenger ﷺ and his Companions from Makkah. Ibn Kathir describes them as those at war with Allah, His Messenger and the believers. Ma'arif al-Qur'an suggests the phrase My enemy and your enemy points to the cause of the command.",
            "bn": "আয়াতটি বলে: আমার শত্রু ও তোমাদের শত্রু। তারপর নিজের ভাষাতেই কারণ জানায়: তোমাদের কাছে যে সত্য এসেছে, তারা তা অস্বীকার করেছে, আর তোমরা তোমাদের রব আল্লাহর উপর ঈমান এনেছ বলে তারা রাসূলকে ও তোমাদের বের করে দেয়। তাবারী তাদের চিনিয়ে দেন: কুরাইশের মুশরিকরা, যারা রাসূলুল্লাহ ﷺ ও তাঁর সাহাবিদের মক্কা থেকে বের করে দিয়েছিল। ইবন কাসীর তাদের বলেন আল্লাহ, তাঁর রাসূল ও মুমিনদের বিরুদ্ধে যুদ্ধরত লোক। মাআরিফুল কুরআনের ধারণা, 'আমার শত্রু ও তোমাদের শত্রু' কথাটি সম্ভবত এ নির্দেশের কারণের দিকে ইঙ্গিত করে।"
          },
          {
            "en": "Al-Qurtubi reads yukhrijuna al-rasula wa iyyakum as a clause explaining their disbelief and defiance, and an tu'minu as its cause: for the sake of your belief in Allah. Ibn Kathir sets beside it 85:8, where a people resented the believers for nothing but their faith. As-Sa'di puts it bluntly: in their eyes you had no fault in this except that you believed in Allah your Lord.",
            "bn": "কুরতুবীর মতে ইউখরিজূনার রাসূলা ওয়া ইয়্যাকুম বাক্যাংশটি তাদের কুফর ও ঔদ্ধত্যের ব্যাখ্যা। আর আন তু'মিনূ তার কারণ: তোমরা আল্লাহর উপর ঈমান এনেছ, সেজন্যই। ইবন কাসীর এর পাশে রাখেন ৮৫:৮, যেখানে এক জাতি মুমিনদের উপর ক্ষুব্ধ ছিল কেবল তাদের ঈমানের জন্য। সা'দী কথাটা সোজাসুজি বলেন: তাদের চোখে এ ব্যাপারে তোমাদের কোনো দোষ ছিল না, দোষ শুধু এটুকু যে তোমরা তোমাদের রব আল্লাহর উপর ঈমান এনেছ।"
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
            "bn": "তুলকূনা ইলাইহিম বিল-মাওয়াদ্দাহ: তোমরা তাদের দিকে বন্ধুত্ব ছুড়ে দাও। তাবারী বলেন, এখানে 'বা' অক্ষরটি থাকা না থাকায় অর্থে কোনো তফাত হয় না: তোমরা তাদের প্রতি তোমাদের বন্ধুত্ব বাড়িয়ে দাও। বাগাভী ও কুরতুবী যাজ্জাজের ব্যাখ্যা আনেন: তোমাদের মধ্যকার বন্ধুত্বের কারণে তোমরা নবী ﷺ-এর খবর ও গোপন কথা তাদের কাছে পৌঁছে দাও। মুয়াসসার দুটোকে মিলিয়ে বলে: তোমরা তাদের কাছে মন খুলে দাও, ফলে রাসূল ﷺ ও অন্য মুসলিমদের খবর তাদের জানিয়ে দাও। সা'দী এতে তাড়াহুড়ার সুর শোনেন, তাদের বন্ধুত্বের দিকে ছুটে যাওয়া। তিনি সতর্ক করেন, বন্ধুত্ব একবার জেঁকে বসলে সাহায্য আর মিত্রতা তার পেছনে পেছনে আসে।"
          },
          {
            "en": "Then the verse repeats itself with a closer verb: tusirruna ilayhim bil-mawadda, you confide affection to them in secret. Al-Baghawi cites Muqatil that the affection here is nasiha, counsel. Against that secrecy comes wa ana a'lamu bima akhfaytum wa ma a'lantum: I know best what you concealed and what you declared. Al-Qurtubi cites Ibn Abbas: what you hid in your breasts and what you showed on your tongues. As-Sa'di says that though it was hidden from the believers, it is not hidden from Allah.",
            "bn": "তারপর আয়াতটি আরও কাছের একটি ক্রিয়া দিয়ে কথাটা আবার বলে: তুসিররূনা ইলাইহিম বিল-মাওয়াদ্দাহ, তোমরা গোপনে তাদের সঙ্গে বন্ধুত্বের কথা বলো। বাগাভী মুকাতিলের কথা আনেন যে, এখানে বন্ধুত্ব মানে নাসীহা, অর্থাৎ শুভকামনার পরামর্শ। এই গোপনীয়তার মুখোমুখি দাঁড়ায় ওয়া আনা আ'লামু বিমা আখফাইতুম ওয়া মা আ'লানতুম: তোমরা যা গোপন করেছ আর যা প্রকাশ করেছ, আমি তা সবচেয়ে ভালো জানি। কুরতুবী ইবনে আব্বাসের কথা আনেন: যা তোমরা বুকে লুকিয়েছ আর যা মুখে প্রকাশ করেছ। সা'দী বলেন, মুমিনদের কাছে তা লুকানো থাকলেও আল্লাহর কাছে লুকানো থাকে না।"
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
            "bn": "ইন কুনতুম খারাজতুম জিহাদান ফী সাবীলী ওয়াবতিগাআ মারদাতী: তোমরা যদি আমার পথে জিহাদের জন্য আর আমার সন্তুষ্টির খোঁজে বেরিয়ে থাকো। এই শর্তের নিজস্ব কোনো জবাব-বাক্য নেই। তাবারীর মতে শর্তটি বাক্যে পরে এসেছে, কিন্তু অর্থে তার জায়গা আগে। এটি শুরুর নিষেধের সঙ্গে যুক্ত। অর্থ দাঁড়ায়: তোমরা যদি আমার জন্য বেরিয়ে থাকো, তবে আমার শত্রুদের বন্ধু বানিয়ো না। বেরিয়ে পড়ার ব্যাখ্যা তিনি দেন এভাবে: আমার পথে জিহাদের জন্য ঘরবাড়ি ছেড়ে হিজরত করা। বাগাভীও একই কথা বলেন: এমন শর্ত, যার জবাব আগেই এসে গেছে।"
          },
          {
            "en": "Ibn Kathir gives the plain sense: if that is what you are, do not take them as allies. As-Sa'di turns the condition into a test of sincerity: if your going out was for jihad, to raise Allah's word and to seek His pleasure, act on what that requires. Ma'arif al-Qur'an adds that if the hijra truly was for Allah, an enemy of Allah could never look after Allah's friend. The verse then closes: wa man yaf'alhu minkum fa-qad dalla sawa'a al-sabil, whoever of you does it has strayed from the evenness of the way.",
            "bn": "ইবন কাসীর সরল অর্থটা দেন: তোমরা যদি এমনই হও, তবে তাদের বন্ধু বানিয়ো না। সা'দী শর্তটাকে আন্তরিকতার পরীক্ষা বানিয়ে দেন: আল্লাহর কালেমা উঁচু করতে আর তাঁর সন্তুষ্টি পেতে যদি জিহাদের জন্য বেরিয়ে থাকো, তবে সেই দাবি অনুযায়ী কাজ করো। মাআরিফুল কুরআন যোগ করে, হিজরত যদি সত্যিই আল্লাহর জন্য হয়ে থাকে, তবে আল্লাহর শত্রু কখনো আল্লাহর বন্ধুর দেখাশোনা করবে না। তারপর আয়াতের শেষ কথা: ওয়া মাই ইয়াফ'আলহু মিনকুম ফাকাদ দাল্লা সাওয়াআস সাবীল, তোমাদের মধ্যে যে এমন করে, সে সোজা পথ থেকে সরে গেছে।"
          },
          {
            "en": "At-Tabari says such a person has turned from the straight course of the path Allah made a road to Paradise. Al-Qurtubi and al-Baghawi say he has missed the way, its true aim or the road of guidance. As-Sa'di says he took a course against the Shariah, against reason and against human decency. Every gloss is an image of a road and of losing it. What such allies would actually do is left to the verses that follow.",
            "bn": "তাবারী বলেন, এমন লোক সেই পথের সোজা গতিপথ থেকে সরে গেছে, যে পথকে আল্লাহ জান্নাতের রাস্তা বানিয়েছেন। কুরতুবী ও বাগাভী বলেন, সে পথ হারিয়েছে, পথের আসল লক্ষ্য কিংবা হিদায়াতের রাস্তা। সা'দী বলেন, সে এমন পথ ধরেছে যা শরীয়ত, বিবেক আর মানুষের ভদ্রতা, সবকিছুর বিপরীত। প্রতিটি ব্যাখ্যাতেই আছে একটা পথের ছবি, আর সেই পথ হারানোর কথা। এমন বন্ধুরা আসলে কী করত, সে কথা রেখে দেওয়া হয়েছে পরের আয়াতগুলোর জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant for Today's Enmities",
          "bn": "আজকের শত্রুতার সনদ নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes one hostile party at one moment: the Quraysh of Makkah, who had rejected the message and driven the Prophet ﷺ and the believers from their homes for their faith. It licenses nothing against any living person or community, and My enemies and your enemies is not an instruction to treat any present-day people as enemies, or to suspect a neighbour, colleague or relative of another faith. Later in this surah, 60:8 and 60:9 draw that line by conduct.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি এক বিশেষ সময়ের একটি শত্রুপক্ষের বর্ণনা দেয়: মক্কার কুরাইশ, যারা বার্তাটিকে প্রত্যাখ্যান করেছিল আর ঈমানের কারণে নবী ﷺ ও মুমিনদের ঘরছাড়া করেছিল। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছু করার অনুমতি এতে নেই। 'আমার শত্রু ও তোমাদের শত্রু' কথাটি বর্তমান কালের কোনো মানুষকে শত্রু গণ্য করার নির্দেশ নয়। ভিন্ন ধর্মের প্রতিবেশী, সহকর্মী বা আত্মীয়কে সন্দেহ করার নির্দেশও নয়। এই সূরারই পরের দিকে ৬০:৮ ও ৬০:৯ আয়াত আচরণ দিয়ে সেই সীমারেখা টানে।"
          },
          {
            "en": "What the verse does reach today is the inner ground Hatib stood on: a frightened man with no clan to shield his family, reaching for a hidden favour that, in al-Baghawi's longer report, he was sure would avail them nothing. The verse answers that private reasoning with two facts: Allah knows what was concealed, and going out for His sake has its own demands. The Prophet ﷺ answered the man with a question, a hearing and mercy. The standard does not bend, and whoever slips is still asked before he is judged.",
            "bn": "আজকের পাঠকের কাছে আয়াতটি যেখানে পৌঁছায়, তা হলো হাতিবের মনের সেই জায়গা। ভয় পাওয়া একজন মানুষ, পরিবারকে আগলে রাখার মতো গোত্র যাঁর নেই, তিনি গোপন একটা অনুগ্রহের আশ্রয় নিলেন। বাগাভীর দীর্ঘ বর্ণনায় আছে, তিনি নিশ্চিত ছিলেন তাঁর চিঠি তাদের কোনো কাজে আসবে না। আয়াতটি সেই একান্ত যুক্তির জবাব দেয় দুটি সত্য দিয়ে: যা গোপন রাখা হয়েছিল, আল্লাহ তা জানেন। আর তাঁর জন্য বেরিয়ে পড়ার নিজস্ব দাবি আছে। নবী ﷺ মানুষটার জবাব দিয়েছেন প্রশ্ন দিয়ে, মন দিয়ে শুনে, দয়া দিয়ে। মানদণ্ড নড়ে না, আর যে পা ফসকায়, রায়ের আগে তাকেও জিজ্ঞেস করা হয়।"
          }
        ]
      }
    ]
  },
  "60:8": {
    "sections": [
      {
        "h": {
          "en": "After the Severing Verses",
          "bn": "কঠোর আয়াতগুলোর পরে"
        },
        "p": [
          {
            "en": "Surah al-Mumtahanah opens in 60:1 with the letter bound for Makkah and the command not to take Allah's enemy and yours as allies. In 60:4 Ibrahim (AS) and those with him are held up as a pattern for their open break with their own people, and 60:7 adds a hope: perhaps Allah will place affection between you and those of them you have treated as enemies. Our verse comes straight after that hope.",
            "bn": "সূরা মুমতাহিনা শুরু হয় ৬০:১ আয়াতে মক্কাগামী সেই চিঠির ঘটনা দিয়ে। সেখানে আদেশ আসে: আল্লাহর শত্রু আর তোমাদের শত্রুকে বন্ধু বানিয়ো না। ৬০:৪ আয়াতে ইবরাহীম (আঃ) ও তাঁর সঙ্গীদের আদর্শ হিসেবে সামনে আনা হয়, কারণ তাঁরা নিজেদের সম্প্রদায়ের সঙ্গে প্রকাশ্যে সম্পর্ক ছিন্ন করেছিলেন। তারপর ৬০:৭ আয়াতে আসে একটু আশার কথা: হয়তো আল্লাহ তোমাদের আর তাদের মধ্যে যাদের তোমরা শত্রু ভেবেছ, তাদের মাঝে ভালোবাসা তৈরি করে দেবেন। আমাদের আয়াতটি এসেছে ঠিক সেই আশার পরেই।"
          },
          {
            "en": "As-Sa'di explains why the sentence was needed. When these verses stirring enmity toward the disbelievers came down, he writes, they struck the believers with full force and they acted on them completely, until some felt it a sin to keep ties with their polytheist relatives and supposed this fell under what Allah had forbidden. So Allah told them it did not. Al-Baghawi and al-Qurtubi call the verse a rukhsah, a concession from Allah, to keep ties with those who had shown the believers no enmity and had not fought them.",
            "bn": "এ কথাটির দরকার কেন পড়ল, সা'দী তা বুঝিয়ে বলেন। কাফিরদের প্রতি শত্রুতা জাগিয়ে তোলা এই আয়াতগুলো যখন নাযিল হলো, মুমিনদের মনে তা পুরোপুরি গেঁথে গেল, আর তাঁরা পূর্ণ মাত্রায় তা মেনে চললেন। এমনকি কেউ কেউ মুশরিক আত্মীয়দের সঙ্গে সম্পর্ক রাখাকেও গুনাহ মনে করতে লাগলেন, ভাবলেন এটাও আল্লাহর নিষেধের আওতায় পড়ে। তখন আল্লাহ জানিয়ে দিলেন, পড়ে না। বাগাভী ও কুরতুবী আয়াতটিকে বলেন রুখসত, আল্লাহর দেওয়া ছাড়। যারা মুমিনদের সঙ্গে শত্রুতা করেনি, তাদের বিরুদ্ধে লড়েনি, তাদের সঙ্গে সম্পর্ক রাখার ছাড়।"
          }
        ]
      },
      {
        "h": {
          "en": "Doing Good, Dealing Fairly",
          "bn": "সদাচার আর ন্যায্য লেনদেন"
        },
        "p": [
          {
            "en": "The verse names two things that are not forbidden: an tabarruhum, that you show them birr, and wa tuqsitu ilayhim, that you deal with them in qist. Ibn Kathir glosses the first as tuhsinu ilayhim, that you do good to them, and the second as ta'dilu, that you act justly. Al-Qurtubi adds a point of grammar: an tabarruhum stands as a substitute for 'those who', so the sense runs, Allah does not forbid you from being kind to those who did not fight you.",
            "bn": "আয়াতটি দুটি কাজের কথা বলে, যা নিষিদ্ধ নয়। একটি আন তাবাররূহুম, তাদের প্রতি বির্র বা সদাচার করা। অন্যটি ওয়া তুকসিতূ ইলাইহিম, তাদের সঙ্গে কিস্‌ত বা ন্যায্যতা বজায় রাখা। ইবন কাসীর প্রথমটির অর্থ করেন তুহসিনূ ইলাইহিম, তাদের উপকার করা, আর দ্বিতীয়টির তা'দিলূ, ইনসাফ করা। কুরতুবী একটি ব্যাকরণগত দিক দেখান: আন তাবাররূহুম অংশটি 'যারা' শব্দের বদল হিসেবে বসেছে। তাই কথার মর্ম দাঁড়ায়, যারা তোমাদের সঙ্গে লড়েনি তাদের প্রতি সদয় হতে আল্লাহ তোমাদের নিষেধ করেন না।"
          },
          {
            "en": "At-Tabari binds the two verbs together: tuqsitu means to act justly among them through your doing good to them and your kindness toward them. Al-Baghawi uses nearly the same words, and the Muyassar says: honour them with good, and treat them justly by your goodness and kindness to them. On this reading the fairness is carried out through the generosity itself: one conduct seen from two sides.",
            "bn": "তাবারী দুটি ক্রিয়াকে এক সুতোয় বাঁধেন। তাঁর ভাষায়, তুকসিতূ মানে তাদের উপকার আর সদাচারের মাধ্যমে তাদের প্রতি ইনসাফ করা। বাগাভী প্রায় একই কথা বলেন। মুয়াসসারের ভাষ্য: কল্যাণ দিয়ে তাদের সম্মান করো, আর তোমাদের উপকার ও সদাচার দিয়ে তাদের প্রতি ন্যায্য থাকো। এই পাঠে ন্যায্যতা রূপ পায় উদারতার ভেতর দিয়েই। একই আচরণ, দুই দিক থেকে দেখা।"
          },
          {
            "en": "As-Sa'di spreads the permission wide: birr, keeping ties, repaying with what is fitting, and qist toward polytheists, relatives and others, so long as they had not set themselves up to fight the believers over religion or to drive them from their homes. He supports it with 31:15, on polytheist parents of a Muslim child: if they strive to make you associate with Me what you have no knowledge of, do not obey them, but keep company with them in this world in a fitting way.",
            "bn": "সা'দী অনুমতির পরিসর বড় করে দেখান। তাঁর মতে এতে পড়ে সদাচার, আত্মীয়তার বন্ধন রক্ষা, ভালো কাজের ভালো প্রতিদান আর মুশরিকদের প্রতি ন্যায্যতা, তারা আত্মীয় হোক বা না হোক। শর্ত একটাই: দীনের কারণে মুমিনদের সঙ্গে লড়তে বা তাদের ঘরবাড়ি থেকে বের করে দিতে তারা উঠে-পড়ে লাগেনি। প্রমাণ হিসেবে তিনি আনেন ৩১:১৫ আয়াত, যেখানে মুসলিম সন্তানের মুশরিক মা-বাবার কথা আছে: তারা যদি তোমাকে আমার সঙ্গে এমন কিছু শরীক করতে চাপ দেয় যার জ্ঞান তোমার নেই, তবে তাদের কথা মেনো না, কিন্তু দুনিয়াতে তাদের সঙ্গে ভালোভাবে থেকো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Portion, or Justice Itself?",
          "bn": "অংশ দেওয়া, নাকি ইনসাফ?"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a different reading of tuqsitu from the jurist Ibn al-'Arabi. On this view the verb means that you give them a qist, a portion of your wealth, by way of keeping ties, and it is not meant in the sense of justice. His reason is stated plainly: justice is obligatory toward those who fought and those who did not fight alike, so a verse that only lifts a prohibition cannot be speaking about justice. What it permits, on this reading, is generosity with one's wealth.",
            "bn": "কুরতুবী তুকসিতূ শব্দের আরেকটি ব্যাখ্যা উদ্ধৃত করেন ফকীহ ইবনুল আরাবী থেকে। এই মতে শব্দটির মানে তাদেরকে নিজের সম্পদের একটা কিস্‌ত বা অংশ দেওয়া, আত্মীয়তা রক্ষার নিয়তে। এখানে ইনসাফ বোঝানো হয়নি। কারণটাও তিনি সোজাসুজি বলেন: যে লড়েছে আর যে লড়েনি, দুজনের প্রতিই ইনসাফ ফরয। যে আয়াত কেবল একটা নিষেধ তুলে নেয়, সেটি তাই ইনসাফের কথা বলতে পারে না। এই পাঠে আয়াতটি যার অনুমতি দেয়, তা হলো সম্পদ দিয়ে উদারতা।"
          },
          {
            "en": "Ma'arif al-Qur'an reaches a neighbouring conclusion by another road. It says justice is obligatory toward every non-Muslim: a citizen of a Muslim state, someone with whom Muslims have a peace agreement, or a citizen of another state even while at war with Muslims; even toward animals, it adds, justice is binding. The verse's focus, it concludes, is the direction to treat such people not only justly but in a good and courteous manner. Both texts hold that justice is owed to all; they differ on whether tuqsitu names it.",
            "bn": "মাআরিফুল কুরআন অন্য পথে হেঁটে কাছাকাছি সিদ্ধান্তে পৌঁছায়। সেখানে বলা হয়েছে, প্রত্যেক অমুসলিমের প্রতি ইনসাফ ফরয। সে মুসলিম রাষ্ট্রের নাগরিক হোক, মুসলিমদের সঙ্গে শান্তিচুক্তিতে আবদ্ধ হোক, কিংবা অন্য রাষ্ট্রের নাগরিক হোক, এমনকি মুসলিমদের সঙ্গে যুদ্ধরত অবস্থায়ও। পশুর প্রতিও ইনসাফ করতে মুসলিম বাধ্য, সে কথাও সেখানে আছে। তাই আয়াতের মূল জোর, মাআরিফের মতে, এমন মানুষের সঙ্গে শুধু ন্যায্য নয়, ভদ্র ও সুন্দর আচরণ করার নির্দেশে। দুই গ্রন্থই মানে যে ইনসাফ সবার প্রাপ্য। মতভেদ শুধু এখানে: তুকসিতূ শব্দটি সেই ইনসাফের নাম কি না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom Does the Verse Mean?",
          "bn": "আয়াতটি কাদের কথা বলে"
        },
        "p": [
          {
            "en": "At-Tabari states that the people of interpretation differed over whom this verse meant. Mujahid, in his report, said they were those who had believed in Makkah but had not emigrated, and that the believers were not forbidden to ask forgiveness for them and to treat them kindly; al-Qurtubi records the same view from Mujahid. Others, at-Tabari continues, said it meant those outside Makkah who had not emigrated, and he files the report about Asma bint Abi Bakr (RA) and her mother under that view.",
            "bn": "তাবারী জানান, এ আয়াত কাদের উদ্দেশে, তা নিয়ে তাফসীরকারদের মধ্যে মতভেদ হয়েছে। মুজাহিদের বর্ণনায় এরা হলেন সেই লোকেরা, যাঁরা মক্কায় ঈমান এনেছিলেন কিন্তু হিজরত করেননি। তাঁদের জন্য ইস্তিগফার করতে এবং তাঁদের সঙ্গে সদাচার করতে মুমিনদের নিষেধ করা হয়নি। কুরতুবীও মুজাহিদ থেকে একই মত উদ্ধৃত করেন। তাবারী আরও বলেন, অন্যদের মতে এখানে মক্কার বাইরের সেই লোকেরা উদ্দেশ্য, যারা হিজরত করেনি। আসমা বিনতে আবী বকর (রাঃ) ও তাঁর মায়ের ঘটনার বর্ণনাটি তিনি রাখেন এই মতের অধীনে।"
          },
          {
            "en": "A second group ties the verse to treaties. Al-Qurtubi reports from al-Hasan that it is specific to the allies of the Prophet ﷺ and those with whom he had a covenant they had not broken; al-Kalbi names them as Khuza'ah and Banu al-Harith ibn 'Abd Manaf, and Abu Salih as Khuza'ah. Al-Baghawi reports from Ibn 'Abbas that it came down about Khuza'ah, who had made peace with the Prophet ﷺ on condition that they would not fight him or help anyone against him.",
            "bn": "দ্বিতীয় একদল আয়াতটিকে চুক্তির সঙ্গে জুড়ে দেখেন। কুরতুবী হাসান থেকে বর্ণনা করেন, আয়াতটি নবী ﷺ-এর মিত্রদের জন্য এবং যাদের সঙ্গে তাঁর এমন চুক্তি ছিল যা তারা ভাঙেনি, তাদের জন্য নির্দিষ্ট। কালবী তাদের নাম বলেন খুযাআ ও বনু হারিস ইবন আবদে মানাফ, আর আবু সালিহ বলেন খুযাআ। বাগাভী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, আয়াতটি খুযাআ গোত্রের ব্যাপারে নাযিল হয়েছে। তারা নবী ﷺ-এর সঙ্গে সন্ধি করেছিল এই শর্তে যে তাঁর বিরুদ্ধে লড়বে না, কাউকে সাহায্যও করবে না।"
          },
          {
            "en": "A third reading looks at those who do not fight at all. Al-Qurtubi reports, from unnamed commentators, that the verse means women and children, since they are among those who do not fight, and so Allah permitted kindness to them. Ibn Kathir gives women and the weak among the disbelievers as his example of those who do not fight. At-Tabari judges the most correct view to be that it means everyone of every religion and creed who did not fight the believers, because Allah made the description general and singled out no group.",
            "bn": "তৃতীয় এক পাঠের নজর তাদের দিকে, যারা আদৌ লড়াই করে না। কুরতুবী কিছু তাফসীরকারের নাম না নিয়ে তাঁদের মত উল্লেখ করেন: এখানে নারী ও শিশুরা উদ্দেশ্য, কারণ তারা যুদ্ধ করে না, তাই আল্লাহ তাদের প্রতি সদাচারের অনুমতি দিয়েছেন। ইবন কাসীরও যারা লড়ে না তাদের উদাহরণ দেন কাফিরদের নারী ও দুর্বলদের দিয়ে। তাবারী সবচেয়ে সঠিক মনে করেন এটাকে: সব ধর্ম ও মতের যে-ই মুমিনদের সঙ্গে লড়েনি, সে-ই এর আওতায়। কারণ আল্লাহ গুণটি ব্যাপকভাবে বলেছেন, কোনো দলকে আলাদা করে নির্দিষ্ট করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Abrogated, or Still in Force?",
          "bn": "রহিত, নাকি এখনও বহাল?"
        },
        "p": [
          {
            "en": "The sharpest disagreement is over whether the verse still applies. At-Tabari reports a view that it meant those polytheists of Makkah who had not fought the believers or driven them out, and that Allah later abrogated it with the command to fight them. Ibn Zayd, asked about it, said fighting had abrogated it: they were ordered to return to them with swords, and Allah set them a term of four months. Qatadah said it was abrogated by fa-qtulu al-mushrikina haythu wajadtumuhum, kill the polytheists wherever you find them, words from 9:5.",
            "bn": "সবচেয়ে তীক্ষ্ণ মতভেদ এ নিয়ে যে, আয়াতটির বিধান এখনও বহাল কি না। তাবারী একটি মত উদ্ধৃত করেন: মক্কার যে মুশরিকরা মুমিনদের সঙ্গে লড়েনি, তাদের ঘর থেকে বের করেনি, আয়াতে তারাই উদ্দেশ্য, আর পরে যুদ্ধের আদেশ দিয়ে আল্লাহ এ বিধান রহিত করেছেন। ইবন যায়দকে এ আয়াত সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেন, যুদ্ধের বিধান এটিকে রহিত করেছে। তাদের তলোয়ার নিয়ে ফিরে যেতে বলা হয়েছিল, আর আল্লাহ ৪ মাসের মেয়াদ বেঁধে দিয়েছিলেন। কাতাদা বলেন, এটি রহিত হয়েছে ফাকতুলুল মুশরিকীনা হাইসু ওয়াজাদতুমূহুম, মুশরিকদের যেখানে পাও হত্যা করো, এই বাক্য দিয়ে, যা ৯:৫ আয়াতের অংশ।"
          },
          {
            "en": "Al-Qurtubi gives Ibn Zayd's view as: this was at the start of Islam, in the time of truce and before fighting was commanded, and then it was abrogated. He adds an unnamed view that the ruling had a cause, the truce, so that when the truce ended with the conquest of Makkah the ruling was abrogated while its wording remained recited. Against these he reports that most commentators held the verse to be muhkam, not abrogated, and that they argued from the hadith of Asma bint Abi Bakr (RA).",
            "bn": "কুরতুবী ইবন যায়দের মত এভাবে উদ্ধৃত করেন: এটি ছিল ইসলামের শুরুর দিকে, সন্ধির সময়ে, যুদ্ধের আদেশ আসার আগে; পরে তা রহিত হয়। নাম না নিয়ে আরেকটি মতও তিনি আনেন: বিধানটির পেছনে একটা কারণ ছিল, তা হলো সন্ধি। মক্কা বিজয়ের সঙ্গে সন্ধি শেষ হলে বিধানও রহিত হয়, শুধু শব্দগুলো তিলাওয়াতে থেকে যায়। এসবের বিপরীতে তিনি জানান, অধিকাংশ তাফসীরকারের মতে আয়াতটি মুহকাম, অর্থাৎ রহিত নয়। তাঁদের দলিল আসমা বিনতে আবী বকর (রাঃ)-এর হাদীস।"
          },
          {
            "en": "At-Tabari rejects abrogation in so many words. There is no sense, he writes, in saying it is abrogated, because a believer's kindness to people at war with the Muslims, whether relatives or not, is neither forbidden nor prohibited, provided it does not point them to a weak spot of the Muslims or strengthen them with horses or weapons. He cites the report about Asma and her mother as proof of his reading. Each position stands here with its holders; none is chosen.",
            "bn": "তাবারী রহিত হওয়ার মত সরাসরি নাকচ করেন। তাঁর কথায়, একে রহিত বলার কোনো মানে হয় না। কারণ মুসলিমদের সঙ্গে যুদ্ধরত লোকদের প্রতি মুমিনের সদাচার, আত্মীয় হোক বা অনাত্মীয়, হারামও নয়, নিষিদ্ধও নয়। শর্ত হলো, তাতে যেন মুসলিমদের কোনো দুর্বল জায়গার খোঁজ শত্রুর হাতে না যায়, কিংবা ঘোড়া বা অস্ত্র দিয়ে তাদের শক্তি না বাড়ে। নিজের পাঠের পক্ষে তিনি আসমা ও তাঁর মায়ের ঘটনাটি প্রমাণ হিসেবে আনেন। প্রতিটি মত এখানে তার ধারকদের নামসহ রইল, কোনোটিকে বেছে নেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asma, Her Mother and the Gifts",
          "bn": "আসমা, তাঁর মা ও উপহার"
        },
        "p": [
          {
            "en": "Al-Baghawi quotes, with al-Bukhari's own chain, the account of Asma bint Abi Bakr (RA), and Ibn Kathir and al-Qurtubi say al-Bukhari and Muslim both recorded it. Al-Bukhari's version numbered 5978 reads in full: 'My mother came to me, hoping for my favour, in the time of the Prophet ﷺ. I asked the Prophet ﷺ: Shall I keep ties with her? He said: Yes.' Ibn 'Uyaynah said: 'Then Allah revealed about her: Allah does not forbid you regarding those who did not fight you over religion.'",
            "bn": "বাগাভী ইমাম বুখারীর নিজস্ব সনদসহ আসমা বিনতে আবী বকর (রাঃ)-এর বর্ণনাটি উদ্ধৃত করেন। ইবন কাসীর ও কুরতুবী বলেন, বুখারী ও মুসলিম দুজনেই এটি সংকলন করেছেন। বুখারীর ৫৯৭৮ নম্বর বর্ণনাটি পুরোটা এই: ‘নবী ﷺ-এর যুগে আমার মা আমার কাছে এলেন, আমার অনুগ্রহের আশায়। আমি নবী ﷺ-কে জিজ্ঞেস করলাম, আমি কি তাঁর সঙ্গে সম্পর্ক রাখব? তিনি বললেন, হ্যাঁ।’ ইবন উয়াইনা বলেন: ‘তখন আল্লাহ তাঁর ব্যাপারে নাযিল করলেন, দীনের ব্যাপারে যারা তোমাদের সঙ্গে লড়েনি, তাদের ব্যাপারে আল্লাহ তোমাদের নিষেধ করেন না।’"
          },
          {
            "en": "Two details belong to the narrators rather than to Asma. The sentence linking the report to this verse is Sufyan ibn 'Uyaynah's, a narrator in the chain. And al-Bukhari's other version, number 3183, the one al-Baghawi quotes, places the visit in the period of Quraysh's treaty with the Messenger of Allah ﷺ, says her mother was still a polytheist, and gives his answer as: 'Yes, keep ties with her.' Both stand in al-Bukhari's Sahih, which is the grading his collection itself gives them.",
            "bn": "দুটি তথ্য আসমার (রাঃ) নিজের নয়, পরের বর্ণনাকারীদের। এই আয়াতের সঙ্গে ঘটনাটি জোড়া দেওয়ার বাক্যটি সুফইয়ান ইবন উয়াইনার, যিনি সনদের একজন বর্ণনাকারী। আর বুখারীর অন্য বর্ণনাটি, ৩১৮৩ নম্বর, যা বাগাভী উদ্ধৃত করেন, তাতে আছে সফরটি হয়েছিল রাসূলুল্লাহ ﷺ-এর সঙ্গে কুরাইশের চুক্তির মেয়াদে, তাঁর মা তখনও মুশরিক। সেখানে নবীজির উত্তর: ‘হ্যাঁ, তাঁর সঙ্গে সম্পর্ক রাখো।’ দুটিই বুখারীর সহীহ গ্রন্থে আছে, আর সংকলক নিজে এগুলোকে এই মানই দিয়েছেন।"
          },
          {
            "en": "A fuller story comes through 'Abdullah ibn al-Zubayr. Qutaylah came to her daughter Asma with gifts of food while still a polytheist; Asma refused to accept them or let her in until the Messenger of Allah ﷺ permitted it; 'A'ishah asked him, the verse came down, and he told Asma to accept the gift and take her mother in. At-Tabari and Ibn Kathir, citing Imam Ahmad, give it so; al-Baghawi has Asma ask herself. None of them grades it, and no grading is given here. Al-Qurtubi and Ma'arif add that Abu Bakr (RA) had divorced Qutaylah before Islam.",
            "bn": "আবদুল্লাহ ইবনুয যুবাইর (রাঃ)-এর সূত্রে আরও বিস্তারিত একটি ঘটনা এসেছে। কুতাইলা মুশরিক অবস্থায় মেয়ে আসমার কাছে খাবারের উপহার নিয়ে আসেন। আসমা উপহার নিতে এবং মাকে ঘরে ঢুকতে দিতে অস্বীকার করেন, যতক্ষণ না রাসূলুল্লাহ ﷺ অনুমতি দেন। আয়েশা (রাঃ) তাঁকে জিজ্ঞেস করলেন, আয়াত নাযিল হলো, আর তিনি আসমাকে উপহার গ্রহণ করতে ও মাকে ঘরে আনতে বললেন। তাবারী এবং ইমাম আহমাদের সূত্রে ইবন কাসীর ঘটনাটি এভাবেই আনেন। বাগাভীর বর্ণনায় আসমা নিজেই জিজ্ঞেস করেন। তাঁদের কেউ এর মান নির্ণয় করেননি, এখানেও করা হলো না। কুরতুবী ও মাআরিফুল কুরআন আরও জানান, ইসলামের আগেই আবু বকর (রাঃ) কুতাইলাকে তালাক দিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Next Verse Forbids",
          "bn": "পরের আয়াত যা নিষেধ করে"
        },
        "p": [
          {
            "en": "The paired verse, 60:9, opens with innama, only: Allah only forbids you, regarding those who fought you over religion, drove you from your homes and helped in driving you out, that you take them as allies. At-Tabari, with Mujahid, identifies them as the disbelievers of the people of Makkah, and explains the forbidden thing as becoming their awliya and helpers. Those who do so, he says, are the wrongdoers because they have placed their alliance where it does not belong and gone against Allah's command in it.",
            "bn": "জোড়া আয়াত ৬০:৯ শুরু হয় ইন্নামা, অর্থাৎ ‘কেবল’ শব্দ দিয়ে: যারা দীনের ব্যাপারে তোমাদের সঙ্গে লড়েছে, তোমাদের ঘরবাড়ি থেকে বের করে দিয়েছে আর বের করে দিতে সাহায্য করেছে, আল্লাহ কেবল তাদের বন্ধু বানাতে তোমাদের নিষেধ করেন। তাবারী মুজাহিদের সঙ্গে একমত হয়ে বলেন, এরা মক্কার কাফিররা। নিষিদ্ধ বিষয়টি তাঁর ব্যাখ্যায় তাদের আউলিয়া ও সাহায্যকারী হয়ে যাওয়া। যারা তা করে তারাই যালিম, তাবারীর মতে, কারণ তারা বন্ধুত্বকে তার অযোগ্য জায়গায় রেখেছে এবং এ ব্যাপারে আল্লাহর আদেশের বিরোধিতা করেছে।"
          },
          {
            "en": "As-Sa'di draws the line between the two verses plainly. What is forbidden is tawalli, alliance through affection and support in word and deed; your kindness and goodness that is not alliance with the polytheists Allah has not forbidden, and it falls under the general command to do good to relatives and to other people. The verse describes people in a particular history of fighting and expulsion. It describes what the text describes and licenses nothing against any living person or community.",
            "bn": "দুই আয়াতের মাঝের সীমারেখা সা'দী স্পষ্ট করে টেনে দেন। নিষিদ্ধ হলো তাওয়াল্লী, অর্থাৎ ভালোবাসা ও সাহায্যের মাধ্যমে, কথায় ও কাজে, মিত্রতা গড়া। আর যে সদাচার ও উপকার মুশরিকদের সঙ্গে মিত্রতা নয়, তা আল্লাহ নিষেধ করেননি; বরং তা আত্মীয় ও অন্য মানুষের প্রতি ইহসানের সাধারণ আদেশের মধ্যেই পড়ে। আয়াতটি লড়াই ও বহিষ্কারের এক নির্দিষ্ট ইতিহাসের মানুষদের বর্ণনা দেয়। আয়াত যা বর্ণনা করে, কেবল তা-ই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি এতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Loved for Being Fair",
          "bn": "ন্যায্যতার জন্য ভালোবাসা"
        },
        "p": [
          {
            "en": "The verse closes: inna Allaha yuhibbu al-muqsitin, Allah loves those who act justly. At-Tabari explains the muqsitun as the fair-minded who give people their due, who give right and justice from themselves, who are kind to those who are kind to them and do good to whoever does good to them. The Muyassar says: those who are just in their words and their deeds. Ibn Kathir refers back to his comment in Surah al-Hujurat, where 49:9 ends with the same words.",
            "bn": "আয়াতের শেষ বাক্য: ইন্নাল্লাহা ইউহিব্বুল মুকসিতীন, আল্লাহ ন্যায়পরায়ণদের ভালোবাসেন। তাবারীর ব্যাখ্যায় মুকসিত তারা, যারা মানুষকে তার প্রাপ্য বুঝিয়ে দেয়, নিজের দিক থেকে হক ও ইনসাফ আদায় করে। যে তাদের সঙ্গে সদাচার করে, তারাও তার সঙ্গে সদাচার করে; যে উপকার করে, তারাও তার উপকার করে। মুয়াসসার বলে: যারা কথায় ও কাজে ন্যায্য। ইবন কাসীর পাঠককে ফিরিয়ে দেন সূরা হুজুরাতে তাঁর আলোচনার দিকে, যেখানে ৪৯:৯ আয়াতও শেষ হয়েছে ঠিক এই শব্দে।"
          },
          {
            "en": "Under this clause Ibn Kathir brings a hadith he calls sahih. Muslim records it, number 1827, from 'Abdullah ibn 'Amr (RA), from the Prophet ﷺ: 'The just will be with Allah on pulpits of light, at the right hand of the Most Merciful, Mighty and Majestic, and both His hands are right: those who are just in their judgement, with their families, and in what they are given charge of.' The hadith is general and is not attached to this verse; Ibn Kathir sets it beside the closing words.",
            "bn": "এই বাক্যের আলোচনায় ইবন কাসীর একটি হাদীস আনেন, যাকে তিনি সহীহ বলেন। মুসলিম এটি সংকলন করেছেন, ১৮২৭ নম্বরে, আবদুল্লাহ ইবন আমর (রাঃ) থেকে, তিনি নবী ﷺ থেকে: ‘ন্যায়পরায়ণরা আল্লাহর কাছে নূরের মিম্বারে থাকবে, পরম দয়াময়ের ডান পাশে, যিনি মহাপরাক্রমশালী ও মহিমাময়, আর তাঁর দুই হাতই ডান হাত। তারা সেই লোক, যারা বিচারে, পরিবারে আর যে দায়িত্ব তাদের দেওয়া হয় তাতে ইনসাফ করে।’ হাদীসটি সাধারণ, এই আয়াতের সঙ্গে সরাসরি যুক্ত নয়। ইবন কাসীর শুধু আয়াতের শেষ শব্দগুলোর পাশে এটি রেখেছেন।"
          },
          {
            "en": "Al-Qurtubi closes with a caution from Ibn al-'Arabi. Some had argued from this verse that a Muslim son is obliged to maintain his disbelieving father; Ibn al-'Arabi calls that a grave slip, since permitting a thing or lifting a prohibition does not make it obligatory, it gives permissibility only. He also tells of the judge Isma'il ibn Ishaq, who honoured a dhimmi who came to him; those present objected, and he recited this verse to them.",
            "bn": "কুরতুবী শেষ করেন ইবনুল আরাবীর একটি সতর্কবাণী দিয়ে। কেউ কেউ এ আয়াত থেকে দলিল নিয়েছিলেন যে কাফির বাবার ভরণপোষণ মুসলিম ছেলের উপর ওয়াজিব। ইবনুল আরাবী একে বড় ভুল বলেন। কোনো কিছুর অনুমতি দেওয়া বা নিষেধ তুলে নেওয়া সেটিকে ওয়াজিব বানায় না, কেবল বৈধতা প্রমাণ করে। তিনি কাযী ইসমাঈল ইবন ইসহাকের ঘটনাও বলেন। এক যিম্মী তাঁর কাছে এলে তিনি তাকে সম্মান করেন। উপস্থিত লোকেরা আপত্তি তুললে তিনি তাদের এই আয়াত তিলাওয়াত করে শোনান।"
          }
        ]
      }
    ]
  }
});
