/**
 * Long-form articles for Seerah events — keyed by the SEERAH_EVENTS id.
 *
 * The event records carry a 60-word description and a one-line lesson. That is
 * a caption: a reader tapping Badr got 41 words, while every one of the 127
 * Companions around him has an 856-word article. These are the full accounts
 * behind each event — what led to it, what happened, what the Quran says about
 * it, and what the sirah writers draw from it.
 *
 * Fetched by js/article-view.js only when a reader opens an event, never when
 * the tab is opened. js/article-index.js says which events have one.
 *
 * `var`, not `const`: article-view.js reads this off `window`, and a top-level
 * const in a classic script is not a window property.
 *
 * Conventions enforced by `npm test`: sections of {h:{en,bn}, p:[{en,bn}]},
 * bare verse references in the prose (the autolinker makes them tappable),
 * no HTML, and every reference bounds-checked in both languages.
 */

var SEERAH_ARTICLES = {
  "hudaybiyyah": {
    sections: [
      {
        h: { en: "A Dream and a Sheathed Sword", bn: "স্বপ্ন আর কোষবদ্ধ তলোয়ার" },
        p: [
          {
            en: "In Dhul-Qa'dah of the sixth year after the Hijrah, early in 628 CE, the Prophet ﷺ told his Companions he had dreamt that he entered the Sacred Mosque. He announced an umrah, not a campaign. The Trench had failed to break Madinah the year before, and he spent that advantage walking unarmed toward the city that had expelled him.",
            bn: "হিজরি ষষ্ঠ সনের জিলকদ মাসে, খ্রিস্টীয় ৬২৮ সালের গোড়ায়, নবী ﷺ সাহাবিদের জানালেন যে তিনি স্বপ্নে নিজেকে মসজিদুল হারামে প্রবেশ করতে দেখেছেন। তিনি যুদ্ধের ডাক দিলেন না, উমরার ঘোষণা দিলেন। আগের বছর খন্দকের অবরোধ মদিনাকে ভাঙতে পারেনি, উদ্যোগ চলে এসেছিল মুসলিমদের হাতে। সেই সুযোগ তিনি যুদ্ধে খরচ করলেন না। নিরস্ত্র হয়ে হাঁটা দিলেন সেই শহরের দিকে, যে শহর তাঁকে বের করে দিয়েছিল।"
          },
          {
            en: "They entered ihram at Dhul-Hulayfah and drove garlanded sacrificial camels ahead of them, carrying only a traveller's sheathed sword. The numbers in the reports differ. Jabir (RA) is recorded in the Sahih collections giving fourteen hundred and, elsewhere, fifteen hundred. Hudaybiyyah was a shallow valley of wells and thorn trees at the edge of the sacred precinct.",
            bn: "জুলহুলাইফায় তাঁরা ইহরাম বাঁধলেন, সামনে হাঁকিয়ে নিলেন গলায় মালা পরানো কুরবানির উট। সঙ্গে কেবল মুসাফিরের কোষবদ্ধ তলোয়ার। সংখ্যা নিয়ে বর্ণনা এক নয়। সহিহ সংকলনে জাবির (রাঃ) থেকে চৌদ্দশ এসেছে, অন্য জায়গায় পনেরোশও এসেছে। হুদায়বিয়া ছিল হারামের সীমানা ঘেঁষা কূপ আর কাঁটাগাছের এক অগভীর উপত্যকা।"
          }
        ]
      },
      {
        h: { en: "The Camel That Knelt", bn: "যে উটনী বসে পড়ল" },
        p: [
          {
            en: "Quraysh pushed Khalid ibn al-Walid, still an opponent then, forward with two hundred horse to Kura al-Ghamim. The Prophet ﷺ turned onto a rough track and came down at Hudaybiyyah from another side. There his camel al-Qaswa knelt and would not rise, and the people said she had turned stubborn. In Bukhari's wording he answered that the One who restrained the elephant had restrained her.",
            bn: "কুরাইশ তখনো বিরোধী খালিদ ইবনে ওয়ালিদকে দুইশ অশ্বারোহী দিয়ে কুরাউল গামিমে এগিয়ে দিল। নবী ﷺ পথ বদলে দুর্গম রাস্তা ধরলেন এবং অন্য দিক থেকে হুদায়বিয়ায় নামলেন। সেখানে তাঁর উটনী কাসওয়া বসে পড়ল, উঠতে চাইল না। লোকেরা বলল, সে গোঁ ধরেছে। বুখারির ভাষায় তিনি জবাব দিলেন, সে গোঁ ধরেনি, এটা তার স্বভাবও নয়; যিনি হাতিকে ঠেকিয়ে দিয়েছিলেন, তিনিই একে ঠেকিয়ে রেখেছেন।"
          },
          {
            en: "Envoys went back and forth. Budayl ibn Warqa of Khuza'ah carried word that the Muslims had come for the House, not for war. Al-Hulays of the Ahabish was turned back by the sight of the garlanded animals. Urwah ibn Mas'ud ath-Thaqafi told Quraysh he had sat before Chosroes and Caesar and never seen a people honour their leader so.",
            bn: "দূত আসা-যাওয়া চলল। খুজাআ গোত্রের বুদায়ল ইবনে ওয়ারকা খবর নিয়ে গেলেন যে মুসলিমরা এসেছে কাবার টানে, যুদ্ধের জন্য নয়। আহাবিশের নেতা হুলায়স কেবল মালা পরানো কুরবানির পশুগুলো দেখেই ফিরে গেলেন। উরওয়া ইবনে মাসউদ সাকাফি শিবিরটা খুঁটিয়ে দেখলেন, তারপর কুরাইশকে বললেন, তিনি কিসরা আর কায়সারের দরবারে বসেছেন, কিন্তু কোনো জাতিকে তার নেতার এমন সম্মান করতে দেখেননি।"
          },
          {
            en: "Uthman ibn Affan (RA) went in as envoy and was held. A rumour of his killing brought on the pledge under the tree, told separately here. He returned alive, and Suhayl ibn Amr came out to negotiate: a ten-year truce, tribes free to join either side, the Muslims to turn back this year and return the next for three days, and any man leaving Quraysh without his guardian's leave to be sent back.",
            bn: "এরপর উসমান ইবনে আফফান (রাঃ) দূত হয়ে ভেতরে গেলেন এবং আটকা পড়লেন। তাঁকে হত্যা করা হয়েছে এই গুজব থেকেই এল গাছের নিচের সেই বায়আত, যার আলাদা ঘটনা এখানেই আছে। তিনি জীবিত ফিরলেন, আর সুহায়ল ইবনে আমর আলোচনায় এলেন। শর্ত দাঁড়াল দশ বছরের যুদ্ধবিরতি, গোত্রগুলো যে কোনো পক্ষের মিত্র হতে পারবে, মুসলিমরা এ বছর ফিরে যাবে আর পরের বছর তিন দিনের জন্য আসবে, এবং অভিভাবকের অনুমতি ছাড়া কুরাইশ ছেড়ে গেলে তাকে ফেরত দিতে হবে।"
          }
        ]
      },
      {
        h: { en: "Named a Clear Conquest", bn: "নাম দেওয়া হলো সুস্পষ্ট বিজয়" },
        p: [
          {
            en: "Surah al-Fath came down on the road home. Its opening, 48:1, is rendered in the app's translation as a clear conquest, and the word is spent on a document signed under humbling terms, not on a battle won. 48:2 adds that Allah will forgive what preceded and what follows, complete His favour and guide to a straight path. The naming arrived before any result was visible.",
            bn: "ফেরার পথে নাযিল হলো সূরা আল-ফাতহ। এর শুরুর আয়াত ৪৮:১ অ্যাপের অনুবাদে এসেছে স্পষ্ট বিজয় হিসেবে, আর শব্দটি খরচ হলো জেতা কোনো যুদ্ধের উপর নয়, অপমানজনক শর্তে সই করা কাগজের উপর। ৪৮:২ আয়াতে আছে, আল্লাহ আগের ও পরের ভুলভ্রান্তি মাফ করবেন, নিয়ামত পূর্ণ করবেন এবং সরল পথে চালাবেন। সন্ধির একটি ফলও তখনো চোখে পড়েনি, নাম দেওয়া হয়ে গেছে।"
          },
          {
            en: "48:26 says the disbelievers put into their hearts the chauvinism of the time of ignorance, while Allah sent His tranquillity down on His Messenger and the believers. Suhayl had refused to let ar-Rahman or Messenger of Allah stand in the text, and the verse marks which side moved by pride. 48:25 gives the reason hands were held back: believing men and women inside Makkah whom the army did not know. 48:27 says the dream was true and would be kept.",
            bn: "৪৮:২৬ আয়াত বলছে, কাফিররা অন্তরে জাহিলি যুগের জিদ আর হঠকারিতা জাগিয়ে তুলল, আর আল্লাহ তাঁর রাসূল ও মুমিনদের উপর প্রশান্তি নামিয়ে দিলেন। সুহায়ল কাগজে আর-রহমান নামটি বা আল্লাহর রাসূল কথাটি থাকতে দেননি; পাশে রাখলে বোঝা যায় কোন পক্ষ জিদে চলছিল। ৪৮:২৫ আয়াত হাত ঠেকিয়ে রাখার কারণ জানায়, মক্কার ভেতরে এমন মুমিন নারী-পুরুষ ছিলেন যাঁদের বাহিনী চিনত না। আর ৪৮:২৭ আয়াত বলছে, স্বপ্নটি সত্য এবং তা পূর্ণ হবেই।"
          }
        ]
      },
      {
        h: { en: "Bukhari's Account of the Camp", bn: "শিবিরের ছবি বুখারির বর্ণনায়" },
        p: [
          {
            en: "The fullest narration is al-Miswar ibn Makhramah's (RA), in Sahih al-Bukhari 2731. Umar (RA) asks whether he is not truly the Messenger of Allah, and is told yes; whether their cause is not just and the enemy's unjust, and is told yes; then why concede in their religion. The answer in that wording: he is Allah's Messenger, does not disobey Him, and will be helped.",
            bn: "সবচেয়ে পূর্ণ বর্ণনাটি মিসওয়ার ইবনে মাখরামা (রাঃ)-এর, সহিহ বুখারি ২৭৩১-এ রক্ষিত। সেখানে উমর (রাঃ) জানতে চান, আপনি কি সত্যিই আল্লাহর রাসূল নন? জবাব আসে, হ্যাঁ। আমাদের পক্ষ কি সত্যের উপর আর শত্রুপক্ষ কি বাতিলের উপর নয়? জবাব আসে, হ্যাঁ। তবে কেন আমরা দ্বীনের ব্যাপারে ছাড় দেব? সেই ভাষ্যে উত্তরটি হলো, আমি আল্লাহর রাসূল, আমি তাঁর নাফরমানি করি না, আর তিনিই আমাকে সাহায্য করবেন।"
          },
          {
            en: "The same narration says Umar (RA) took the questions to Abu Bakr (RA) and got the same answers, and did deeds afterwards on account of what he had said. It also records the end of the crisis. Ordered to slaughter and shave, nobody moved, until on Umm Salamah's (RA) counsel the Prophet ﷺ went out, spoke to nobody, slaughtered his animal and called his barber. Then the camp rose at once.",
            bn: "একই বর্ণনায় আছে, উমর (রাঃ) প্রশ্নগুলো আবু বকর (রাঃ)-এর কাছে নিয়ে যান এবং হুবহু একই জবাব পান। সেদিনের কথাগুলোর কারণে পরে তিনি নানা আমল করে গেছেন। সংকটের শেষটাও এখানেই আছে। কুরবানি করে মাথা মুণ্ডানোর আদেশ এল, কেউ নড়ল না। উম্মে সালামা (রাঃ)-এর পরামর্শে নবী ﷺ কারও সঙ্গে কথা না বলে বেরিয়ে গেলেন, নিজের পশু কুরবানি করলেন, নাপিতকে ডাকলেন। তখন গোটা শিবির একসঙ্গে উঠে দাঁড়াল।"
          }
        ]
      },
      {
        h: { en: "Envoy, Objector, Counsellor", bn: "দূত, আপত্তিকারী, পরামর্শদাতা" },
        p: [
          {
            en: "Uthman (RA) was chosen for Makkah because his own clan could shelter him there. Quraysh offered to let him make tawaf alone; he refused to circle the House while the Messenger of Allah ﷺ was kept outside. Umar (RA) is the opposite study in the same camp: an objection made loudly, an obedience given at once, and years spent paying for one sentence.",
            bn: "মক্কায় দৌত্যের জন্য উসমান ইবনে আফফান (রাঃ)-কে বেছে নেওয়া হলো, কারণ সেখানে তাঁর নিজের গোত্র তাঁকে আশ্রয় দিতে পারত। বর্ণনায় আছে, কুরাইশ তাঁকে একা তাওয়াফ করার সুযোগ দিতে চেয়েছিল, কিন্তু আল্লাহর রাসূল ﷺ বাইরে দাঁড়িয়ে থাকতে তিনি একা কাবা তাওয়াফে রাজি হননি। একই শিবিরে উমর (রাঃ) ঠিক উল্টো পাঠ। আপত্তি জোরে, আনুগত্য সঙ্গে সঙ্গে, আর একটি বাক্যের দাম শোধ করা বাকি জীবন ধরে।"
          },
          {
            en: "Umm Salamah (RA) read that camp better than anyone standing in it, and her counsel is why the sirah keeps her words at all. Suhayl ibn Amr, who dictated the hardest clauses, accepted Islam after the conquest. His son Abu Jandal (RA) arrived in fetters while the ink was wet and was handed back under the very clause his father had insisted on, told to be patient and to expect relief from Allah.",
            bn: "সেই শিবিরকে উপস্থিত আর সবার চেয়ে ভালো পড়েছিলেন উম্মে সালামা (রাঃ), আর তাঁর দেওয়া পরামর্শের কারণেই সিরাত তাঁর কথাগুলো ধরে রেখেছে। যিনি সবচেয়ে কঠিন শর্তগুলো লিখিয়েছিলেন, সেই সুহায়ল ইবনে আমর মক্কা বিজয়ের পর ইসলাম গ্রহণ করেন। কাগজের কালি শুকানোর আগেই তাঁর ছেলে আবু জান্দাল (রাঃ) শিকল পরা অবস্থায় পৌঁছান, আর বাবার জেদ করা শর্তেই তাঁকে ফেরত দেওয়া হয়। তাঁকে বলা হলো, ধৈর্য ধরো, আল্লাহ পথ বের করে দেবেন।"
          }
        ]
      },
      {
        h: { en: "What Two Years of Peace Bought", bn: "দুই বছরের শান্তি যা কিনে দিল" },
        p: [
          {
            en: "The clause about returning fugitives turned in the Muslims' hands. Abu Basir (RA) and Abu Jandal (RA) gathered a band at al-Is on the coast road, outside anyone's jurisdiction, and struck at Quraysh caravans until Quraysh themselves asked the Prophet ﷺ to take the men in and drop the clause. Ibn Ishaq gives that sequence, and it is the plainest evidence that terms reading as surrender were nothing of the kind.",
            bn: "পলাতক ফেরত দেওয়ার শর্তটিই ঘুরে গেল মুসলিমদের পক্ষে। আবু বাসির (রাঃ) ও আবু জান্দাল (রাঃ) সমুদ্রতীরের পথে ঈসে একটি দল গড়ে তোলেন, যেখানে কারও কর্তৃত্ব ছিল না, আর কুরাইশের বাণিজ্য কাফেলার উপর হানা দিতে থাকেন। শেষে কুরাইশই নবী ﷺ-এর কাছে অনুরোধ করে যে ওদের মদিনায় তুলে নিন, শর্তটি বাতিল হোক। ইবনে ইসহাক ঘটনাক্রম এভাবেই দিয়েছেন, আর এর চেয়ে পরিষ্কার প্রমাণ নেই যে আত্মসমর্পণ মনে হওয়া শর্তগুলো আসলে তা ছিল না।"
          },
          {
            en: "Peace opened the roads. The sirah writers quote az-Zuhri: no conquest in Islam before it was greater, and more entered the religion in the two years after it than in all the years before. Khalid ibn al-Walid (RA), Amr ibn al-As (RA) and Uthman ibn Talhah (RA) rode to Madinah in the eighth year. Khaybar was settled and the umrah fulfilled the next year.",
            bn: "শান্তি রাস্তা খুলে দিল। সিরাতকাররা যুহরির কথা তুলে ধরেন, ইসলামে এর আগে এর চেয়ে বড় বিজয় আসেনি, আর এর পরের দুই বছরে যত মানুষ দ্বীনে এসেছে তার আগের সব বছরে তত আসেনি। অষ্টম হিজরিতে খালিদ ইবনে ওয়ালিদ (রাঃ), আমর ইবনুল আস (রাঃ) ও উসমান ইবনে তালহা (রাঃ) মদিনায় এসে বায়আত করেন। খায়বারের বিষয়টি মিটল আর পরের বছর কাযা উমরা আদায় হলো।"
          }
        ]
      },
      {
        h: { en: "Signing What Looks Like Loss", bn: "হেরে যাওয়ার মতো দেখতে সইটা" },
        p: [
          {
            en: "The event trains one instinct. A believer keeps an agreement whose terms hurt, with a party whose good faith is doubtful, because the word was given and a given word is a trust. That holds even when the other side drafts the document. What was surrendered at Hudaybiyyah was style; what was kept was access, and access changed Arabia.",
            bn: "এই ঘটনা একটি স্বভাব গড়ে তোলে। যে চুক্তির শর্ত গায়ে লাগে, যে পক্ষের সততা নিয়ে সন্দেহ আছে, তার সঙ্গেও মুমিন কথা রাখে, কারণ কথা দেওয়া মানেই আমানত। কাগজটা যখন অন্য পক্ষ লেখে আর ভাষার ছাড়টা আপনাকেই দিতে হয়, নিয়ম তখনো একই। হুদায়বিয়ায় ছাড় গেল ভাষা আর ভঙ্গিতে। রয়ে গেল যাতায়াতের পথ, আর সেই পথই আরবকে বদলে দিয়েছে।"
          },
          {
            en: "The second habit is harder. The men in that camp obeyed before they understood and understood two years later. Most of what a believer decides about work, family and community is decided on partial information, and the honest posture is Abu Bakr's (RA): hold on, do what was asked, let the outcome arrive when it arrives. Umar's (RA) expiations show the tradition never pretended the objection was shameful.",
            bn: "দ্বিতীয় অভ্যাসটি গড়া আরও কঠিন। সেই শিবিরের মানুষগুলো বোঝার আগে মেনে নিয়েছিলেন, বুঝেছিলেন দুই বছর পর। কাজ, পরিবার আর সমাজ নিয়ে মুমিন যা যা ঠিক করে তার বেশির ভাগই আধা তথ্যের উপর দাঁড়িয়ে। সৎ অবস্থানটা আবু বকর (রাঃ)-এর মতো। ধরে থাকুন, যা বলা হয়েছে তা করুন, ফল যখন আসার আসবে। উমর (রাঃ) পরে যে কাফফারার আমল করেছেন, তাতেই বোঝা যায় আপত্তিটা মনে আসা লজ্জার কিছু বলে ইসলাম ধরেনি।"
          }
        ]
      }
    ]
  },
  "conquest": {
    sections: [
      {
        h: { en: "A Truce Broken at Night", bn: "রাতের আঁধারে ভাঙা সন্ধি" },
        p: [
          {
            en: "The truce held for roughly twenty-two months. Then Banu Bakr, allies of Quraysh, fell by night on Banu Khuza'ah, allies of the Prophet ﷺ, at the well of al-Watir. Ibn Ishaq records that men of Quraysh supplied arms and some fought under cover of darkness. Amr ibn Salim al-Khuza'i rode to Madinah, recited verses asking for help, and was told he would have it.",
            bn: "হুদায়বিয়ায় সই হওয়া সন্ধি প্রায় বাইশ মাস টিকল। এরপর কুরাইশের মিত্র বনু বকর রাতের আঁধারে ওয়াতির কূপের কাছে হামলা করল নবী ﷺ-এর মিত্র বনু খুজাআর উপর। ইবনে ইসহাক লিখেছেন, কুরাইশের লোকেরা তাদের অস্ত্র জুগিয়েছিল, কেউ কেউ অন্ধকারের আড়ালে লড়েছিলও। আমর ইবনে সালিম খুজাই মদিনায় ছুটে এসে কবিতায় সাহায্য চাইলেন, আর তাঁকে বলা হলো, সাহায্য পাবে।"
          },
          {
            en: "Abu Sufyan ibn Harb came to Madinah to repair the agreement and got nowhere; the sirah has him going from Abu Bakr (RA) to Umar (RA) to Ali (RA), turned away by each. The Prophet ﷺ prepared in secrecy, and Ibn Ishaq preserves his prayer that Quraysh be taken unaware. In Ramadan of the eighth year, 630 CE, the army moved south.",
            bn: "চুক্তিটা মেরামত করতে আবু সুফিয়ান ইবনে হারব মদিনায় এলেন, কিন্তু কিছুই হলো না। সিরাতে আছে, তিনি আবু বকর (রাঃ), উমর (রাঃ) ও আলী (রাঃ)-এর কাছে ঘুরলেন এবং প্রত্যেকের কাছ থেকেই খালি হাতে ফিরলেন। নবী ﷺ গোপনে প্রস্তুতি নিলেন, আর ইবনে ইসহাক তাঁর সেই দোয়াটি রেখে গেছেন যে কুরাইশ যেন টেরই না পায়। হিজরি অষ্টম সনের রমজানে, ৬৩০ খ্রিস্টাব্দে, বাহিনী দক্ষিণে রওনা দিল।"
          }
        ]
      },
      {
        h: { en: "Ten Thousand Fires Before Dawn", bn: "ভোরের আগে দশ হাজার আগুন" },
        p: [
          {
            en: "Ibn Ishaq counts ten thousand in the force that camped at Marr az-Zahran. Sahih al-Bukhari records from Ali (RA) that a letter from Hatib ibn Abi Balta'ah (RA) warning Quraysh was intercepted on the road. Hatib pleaded that he had wanted protection for his family in Makkah; the Prophet ﷺ accepted it and forbade Umar (RA) to call him a hypocrite. The commentators attach 60:1 to this.",
            bn: "মার্‌র আয-যাহরানে যে বাহিনী শিবির ফেলল, ইবনে ইসহাকের হিসাবে তা দশ হাজারের। পথেই ধরা পড়ে হাতিব ইবনে আবি বালতাআ (রাঃ)-এর সেই চিঠি, যাতে তিনি কুরাইশকে সতর্ক করেছিলেন। ঘটনাটি সহিহ বুখারিতে আলী (রাঃ) থেকে এসেছে। হাতিব বললেন, মক্কায় তাঁর পরিবারের জন্য একটু আশ্রয়ের হাত চেয়েছিলেন। নবী ﷺ তাঁর ওজর কবুল করলেন এবং উমর (রাঃ)-কে তাঁকে মুনাফিক বলতে নিষেধ করলেন। মুফাসসিররা ৬০:১ আয়াতটি এই ঘটনার সঙ্গে যুক্ত করেন।"
          },
          {
            en: "That night fires were lit across the valley, and Makkah could see them. Al-Abbas (RA) rode out on the Prophet's ﷺ white mule hoping to warn the city, met Abu Sufyan scouting, and brought him in. His acceptance of Islam that night is told separately. In the morning the Prophet ﷺ declared safe whoever entered Abu Sufyan's house, or shut his own door, or entered the Sacred Mosque.",
            bn: "সেই রাতে গোটা উপত্যকা জুড়ে আগুন জ্বলল, মক্কা থেকে তা দেখা যাচ্ছিল। আল-আব্বাস (রাঃ) নবী ﷺ-এর সাদা খচ্চরে চেপে বেরিয়ে পড়লেন এই আশায় যে কাউকে পেলে শহরকে সতর্ক করবেন। পথে খবর নিতে বেরোনো আবু সুফিয়ানের সঙ্গে দেখা হলো, তাঁকে শিবিরে নিয়ে এলেন। সে রাতে তাঁর ইসলাম গ্রহণের কথা এখানে আলাদা করে বলা আছে। সকালে নবী ﷺ ঘোষণা দিলেন, যে আবু সুফিয়ানের ঘরে ঢুকবে, যে নিজের দরজা বন্ধ করবে, যে মসজিদুল হারামে ঢুকবে, সে নিরাপদ।"
          },
          {
            en: "The army entered in four columns, ordered not to fight except those who fought them. Only Khalid ibn al-Walid's (RA) column met resistance, at al-Khandamah; the sirah names two Muslims killed and puts the Quraysh dead in the low teens. Ibn Ishaq relates that Sa'd ibn Ubadah (RA) called out that today was the day of slaughter, that the Prophet ﷺ answered it was rather the day the Ka'bah would be honoured, and that his banner passed to his son Qays (RA).",
            bn: "বাহিনী চার ভাগে শহরে ঢুকল, নির্দেশ ছিল যারা লড়বে কেবল তাদের সঙ্গেই লড়া হবে। বাধা পেল কেবল খালিদ ইবনে ওয়ালিদ (রাঃ)-এর দলটি, খানদামায় জড়ো হওয়া একটি দলের কাছ থেকে। সিরাতে সেখানে দুজন মুসলিম শহিদের নাম আছে, আর কুরাইশের নিহতের সংখ্যা দশের কোঠায় ধরা হয়েছে। ইবনে ইসহাক লিখেছেন, সাদ ইবনে উবাদা (রাঃ) হেঁকে বলেছিলেন, আজ রক্তপাতের দিন। নবী ﷺ শুধরে দিলেন, আজ বরং কাবাকে সম্মানিত করার দিন, আর তাঁর হাত থেকে পতাকা নিয়ে তাঁর ছেলে কায়স (রাঃ)-কে দেওয়া হয়।"
          }
        ]
      },
      {
        h: { en: "Falsehood Departed From the Sanctuary", bn: "হারাম থেকে মিথ্যার বিদায়" },
        p: [
          {
            en: "Ibn Mas'ud (RA) narrates in Bukhari and Muslim that the Prophet ﷺ entered Makkah with three hundred and sixty idols standing around the House, that he struck them with a stick he held, and that he recited 17:81: truth has come and falsehood has departed, and falsehood is bound to depart. A Makkan verse was read aloud in the exact place it had been describing.",
            bn: "ইবনে মাসউদ (রাঃ) বুখারি ও মুসলিমে বলেছেন, নবী ﷺ যখন মক্কায় ঢুকলেন তখন কাবার চারপাশে দাঁড়ানো ছিল তিনশ ষাটটি মূর্তি। হাতের লাঠি দিয়ে তিনি সেগুলোতে খোঁচা দিচ্ছিলেন আর পড়ছিলেন ১৭:৮১ আয়াত, সত্য এসে গেছে আর মিথ্যা বিলুপ্ত হয়েছে, মিথ্যা তো বিলুপ্ত হওয়ারই। মক্কায় নাযিল হওয়া আয়াত ঠিক যে জায়গার কথা বলেছিল, সেখানেই তা উচ্চারিত হলো।"
          },
          {
            en: "110:1-3 names this hour: when the victory of Allah has come and the conquest, and you see people entering the religion of Allah in multitudes, then exalt your Lord with praise and ask His forgiveness. Bukhari records Ibn Abbas (RA) telling Umar's (RA) council that he read it as notice of the Prophet's ﷺ own end. Victory is met with istighfar, not celebration. At-Tirmidhi and the sirah writers add an address in which he told the people Allah had taken from them the boasting of the age of ignorance, then recited 49:13.",
            bn: "১১০:১-৩ আয়াত এই মুহূর্তেরই নাম ধরে ডাকে। যখন আল্লাহর সাহায্য ও বিজয় আসবে, আর তুমি দেখবে মানুষ দলে দলে আল্লাহর দ্বীনে ঢুকছে, তখন প্রশংসার সঙ্গে রবের পবিত্রতা ঘোষণা করো আর তাঁর কাছে ক্ষমা চাও। বুখারিতে আছে, ইবনে আব্বাস (রাঃ) উমর (রাঃ)-এর মজলিসে বলেছিলেন, তিনি সূরাটিকে নবী ﷺ-এর বিদায় ঘনিয়ে আসার খবর হিসেবেই পড়েন। বিজয়ের সঙ্গে জুড়ে দেওয়া হুকুমটি উৎসবের নয়, ইস্তিগফারের। তিরমিজি ও সিরাতকাররা মক্কার একটি ভাষণের কথাও যোগ করেন, সেখানে তিনি বললেন আল্লাহ তোমাদের থেকে জাহিলি যুগের বড়াই তুলে নিয়েছেন, তারপর পড়লেন ৪৯:১৩ আয়াত।"
          }
        ]
      },
      {
        h: { en: "What Abu Hurayrah Reported", bn: "আবু হুরায়রা যা জানিয়েছেন" },
        p: [
          {
            en: "Sahih Muslim preserves Abu Hurayrah's (RA) long account of the day. In it the Ansar, watching the Prophet ﷺ stand again in his birth city, murmured that he might now stay with his own people. He knew what they had said and answered that he was the servant of Allah and His Messenger, that he had emigrated to Allah and to them, and that his life and his death were with them.",
            bn: "সেদিনের দীর্ঘ বিবরণটি সহিহ মুসলিমে রেখে গেছেন আবু হুরায়রা (রাঃ)। সেখানে আছে, নবী ﷺ-কে আবার তাঁর জন্মশহরে দাঁড়াতে দেখে আনসাররা নিজেদের মধ্যে বলাবলি করলেন, এবার হয়তো তিনি নিজের গোত্রের কাছেই থেকে যাবেন। তিনি তাঁদের কথা জেনে ফেললেন এবং বললেন, তিনি আল্লাহর বান্দা ও তাঁর রাসূল, তিনি হিজরত করেছেন আল্লাহর দিকে ও তাঁদের দিকে, আর তাঁর জীবন-মরণ তাঁদের সঙ্গেই।"
          },
          {
            en: "The most quoted sentence of that morning, go, for you are the freed ones, comes from the sirah rather than the two Sahihs, and is given here on that footing. What Bukhari and Muslim both carry from Ibn Abbas (RA) is what he said that day: there is no emigration after the conquest, but striving and intention, and when you are called out, go out.",
            bn: "সেই সকালের সবচেয়ে বেশি উদ্ধৃত বাক্যটি, যাও, তোমরা মুক্ত, এসেছে সিরাত থেকে। দুই সহিহতে এটি নেই, আর সেভাবেই এখানে রাখা হলো। বুখারি ও মুসলিম উভয়ে ইবনে আব্বাস (রাঃ) থেকে যা এনেছেন তা হলো সেদিন মক্কায় বলা কথাটি, বিজয়ের পর আর হিজরত নেই, আছে জিহাদ ও নিয়ত; আর তোমাদের ডাকা হলে বেরিয়ে পড়ো।"
          }
        ]
      },
      {
        h: { en: "Spared, Restored, Entrusted", bn: "ক্ষমা, ফেরত, আমানত" },
        p: [
          {
            en: "A short list of individuals stood outside the general amnesty; most were pardoned anyway. Ikrimah ibn Abi Jahl (RA) fled toward Yemen; his wife Umm Hakim (RA) accepted Islam, asked for his safety, and went after him herself. Suhayl ibn Amr, who had dictated the terms at Hudaybiyyah two years before, sought protection through his Muslim son and was given it.",
            bn: "নির্দিষ্ট কিছু কাজের জন্য অল্প কয়েকজন সাধারণ ক্ষমার বাইরে ছিলেন, তবু শেষ পর্যন্ত তাঁদের বেশির ভাগই মাফ পেয়েছেন। ইকরিমা ইবনে আবু জাহল (রাঃ) ইয়েমেনের দিকে পালালেন। তাঁর স্ত্রী উম্মে হাকিম (রাঃ) ইসলাম গ্রহণ করে স্বামীর জন্য নিরাপত্তা চাইলেন, তারপর নিজেই তাঁর পিছু নিয়ে তাঁকে ফিরিয়ে আনলেন। দুই বছর আগে হুদায়বিয়ায় যিনি শর্ত লিখিয়েছিলেন, সেই সুহায়ল ইবনে আমর নিজের মুসলিম ছেলের মাধ্যমে আশ্রয় চাইলেন এবং পেলেন।"
          },
          {
            en: "Uthman ibn Talhah (RA), of the family holding the key of the Ka'bah, opened the door and expected to lose the office. Sahih al-Bukhari 1598 records from Ibn Umar (RA) that the Prophet ﷺ entered the House with Usamah ibn Zayd (RA), Bilal (RA) and Uthman ibn Talhah. When he came out he handed the key back to the family that had always held it. Bilal's (RA) adhan from the Ka'bah that day is told separately.",
            bn: "কাবার চাবি যে পরিবারের হাতে ছিল, সেই উসমান ইবনে তালহা (রাঃ) দরজা খুলে দিলেন, ধরেই নিয়েছিলেন পদটি হাতছাড়া হবে। সহিহ বুখারি ১৫৯৮-এ ইবনে উমর (রাঃ) থেকে আছে, নবী ﷺ উসামা ইবনে জায়েদ (রাঃ), বিলাল (রাঃ) ও উসমান ইবনে তালহাকে নিয়ে কাবার ভেতরে ঢোকেন এবং কিছুক্ষণ থাকেন। বেরিয়ে এসে তিনি চাবিটি সেই পরিবারের হাতেই ফিরিয়ে দিলেন। সেদিন বিলাল (রাঃ)-এর আযানের কথা এখানে আলাদা করে বলা আছে।"
          }
        ]
      },
      {
        h: { en: "A City Given Back", bn: "শহরটি ফিরিয়ে দেওয়া হলো" },
        p: [
          {
            en: "The images inside the House were erased and the idols thrown down. What did not happen matters as much. Makkah was not made a capital, the houses seized from the Muhajirun were not reclaimed, and no old scores were reopened. Bukhari records Ibn Abbas (RA) saying they stayed nineteen days shortening the prayer. Attab ibn Asid (RA) was left over the city and the Prophet ﷺ went back to Madinah.",
            bn: "কাবার ভেতরের ছবিগুলো মুছে ফেলা হলো, চারপাশের মূর্তিগুলো ভেঙে ফেলা হলো। যা ঘটেনি, সেটিও সমান গুরুত্বের। মক্কাকে রাজধানী করা হয়নি, নির্যাতনের কালে মুহাজিরদের যেসব ঘরবাড়ি কেড়ে নেওয়া হয়েছিল সেগুলো ফেরত চাওয়া হয়নি, পুরনো হিসাবের কোনো খাতাও খোলা হয়নি। বুখারিতে ইবনে আব্বাস (রাঃ) থেকে আছে, তাঁরা উনিশ দিন ছিলেন এবং নামাজ কসর করেছেন। শহরের দায়িত্বে আত্তাব ইবনে আসিদ (রাঃ)-কে রেখে নবী ﷺ মদিনায় ফিরে গেলেন।"
          },
          {
            en: "The consequences arrived within weeks. Hawazin and Thaqif gathered at Hunayn, and the siege of Ta'if followed, both told separately. Commanders who had led Quraysh against the Muslims now led Muslim columns. Tribes across Arabia read the outcome and began sending delegations to Madinah. The religious centre of Arabia had changed hands without a battle fought for it.",
            bn: "ফলাফল এল কয়েক সপ্তাহের মধ্যেই। হাওয়াজিন ও সাকিফ হুনাইনে জড়ো হলো, এরপর তায়েফ অবরোধ, দুটোরই আলাদা বিবরণ এখানে আছে। যেসব সেনাপতি একদিন মুসলিমদের বিরুদ্ধে কুরাইশকে নেতৃত্ব দিয়েছেন, তাঁরাই এখন মুসলিম বাহিনীর সামনে। আরব জুড়ে গোত্রগুলো ফলটা পড়ে নিল এবং মদিনায় প্রতিনিধিদল পাঠাতে শুরু করল, নবম হিজরি সেই কারণেই মনে রাখা হয়। আরবের ধর্মীয় কেন্দ্রটি হাতবদল হলো, অথচ তার জন্য কোনো যুদ্ধ হলো না।"
          }
        ]
      },
      {
        h: { en: "Mercy When You Hold Power", bn: "হাতে ক্ষমতা থাকা অবস্থায় দয়া" },
        p: [
          {
            en: "The lesson only bites when the power is real. Anyone can forgive from weakness. What the conquest records is what the Prophet ﷺ did when the city that had tortured, boycotted and expelled his community lay open before him with nobody able to stop him. He asked what they expected of him, then let them go. That is the behaviour a believer is asked to copy.",
            bn: "ক্ষমতা যখন সত্যিই হাতে, তখনই শিক্ষাটা কামড় বসায়। দুর্বল অবস্থায় ক্ষমা করা কঠিন নয়। মক্কা বিজয় লিখে রেখেছে, যে শহর তাঁর সমাজকে নির্যাতন করেছে, একঘরে করেছে, তাড়িয়ে দিয়েছে, সেই শহর যখন খোলা পড়ে আছে আর ঠেকানোর কেউ নেই, তখন নবী ﷺ কী করলেন। তিনি জিজ্ঞেস করলেন, তোমরা আমার কাছে কী আশা করো, তারপর সবাইকে ছেড়ে দিলেন। মুমিনকে এই আচরণটিই নকল করতে বলা হচ্ছে।"
          },
          {
            en: "In daily terms: the argument you could win and do not, the debt you could forgive, the old message you could produce and leave where it is. It also means naming the wrong rather than pretending it never happened; the amnesty was not a claim that nothing had been done. Forgiveness that refuses to see what it forgives is not what he modelled.",
            bn: "দিনের ভাষায় এর মানে, যে তর্কটা আপনি জিততে পারতেন কিন্তু জিতলেন না; যে পাওনাটা আদায় করতে পারতেন কিন্তু মাফ করে দিলেন; পুরনো যে বার্তাটা সামনে এনে দাঁড় করাতে পারতেন কিন্তু যেখানে আছে সেখানেই থাকতে দিলেন। এর মানে আরও, অন্যায়টাকে অস্বীকার না করা। মক্কার সাধারণ ক্ষমা এ দাবি করেনি যে কিছুই ঘটেনি। যে ক্ষমা কী মাফ করছে তা দেখতেই রাজি নয়, সেদিন সকালে তিনি তা দেখাননি।"
          }
        ]
      }
    ]
  },
  "farewell": {
    sections: [
      {
        h: { en: "The Only Hajj He Made", bn: "একটিমাত্র হজ" },
        p: [
          {
            en: "In Dhul-Qa'dah of the tenth year after the Hijrah, 632 CE, the Prophet ﷺ announced he would make the pilgrimage. Arabia had entered Islam in the two years since the conquest, and people converged on Madinah to travel with him. The early sources give no reliable count; later histories speak of figures above a hundred thousand, best read as an impression of scale.",
            bn: "হিজরি দশম সনের জিলকদ মাসে, ৬৩২ খ্রিস্টাব্দে, নবী ﷺ ঘোষণা দিলেন যে তিনি হজ করবেন। মক্কা বিজয়ের পর দুই বছরে আরব ইসলামে ঢুকে পড়েছে, আর মানুষ তাঁর সঙ্গে যেতে মদিনায় এসে জড়ো হলো। ভিড়ের নির্ভরযোগ্য কোনো হিসাব পুরনো সূত্রগুলো দেয় না। পরের যুগের ইতিহাসে লাখের উপরে সংখ্যা আসে, সেটিকে নিছক বিশালতার ধারণা হিসেবেই পড়া ভালো।"
          },
          {
            en: "This was the only Hajj he made after the Hijrah. The community had never performed the rites together under his direction, and the Companions travelled knowing they were watching how it was done. Ali (RA) was on his way back from a mission in Yemen and joined them. What the sirah preserves of that month reads less like a journal than like instruction.",
            bn: "হিজরতের পর এটিই ছিল তাঁর একমাত্র হজ। গোটা সমাজ কখনো তাঁর তত্ত্বাবধানে একসঙ্গে হজের আমল করেনি, আর সাহাবিরা জানতেন তাঁরা দেখতে চলেছেন কাজটি ঠিক কীভাবে করতে হয়। ইয়েমেনের দায়িত্ব শেষে ফেরার পথে আলী (রাঃ) তাঁদের সঙ্গে মিলিত হন। সেই মাসের যা কিছু সিরাত ধরে রেখেছে, তা দিনলিপির চেয়ে বেশি শিক্ষার পাঠ।"
          }
        ]
      },
      {
        h: { en: "From Dhul-Hulayfah to the Standing", bn: "জুলহুলাইফা থেকে আরাফার ময়দান" },
        p: [
          {
            en: "They left Madinah late in Dhul-Qa'dah and entered ihram at Dhul-Hulayfah; Jabir (RA) describes the talbiyah rising across the valley. They reached Makkah on the fourth of Dhul-Hijjah and made tawaf and sa'y. Those who had brought no sacrificial animal were told to release the ihram, which some found hard until he said that had he known earlier he would have done the same.",
            bn: "জিলকদের শেষে তাঁরা মদিনা ছাড়েন এবং জুলহুলাইফায় ইহরাম বাঁধেন। জাবির (রাঃ) বলছেন, গোটা উপত্যকা জুড়ে তালবিয়ার আওয়াজ উঠছিল। জিলহজের চার তারিখে মক্কায় পৌঁছে তাঁরা তাওয়াফ ও সাঈ করেন। যাঁরা কুরবানির পশু আনেননি তাঁদের ইহরাম খুলে ফেলতে বলা হলো। কারও কারও কাছে এটি কঠিন ঠেকল, শেষে তিনি বললেন, আগে জানলে তিনি নিজেও তা-ই করতেন।"
          },
          {
            en: "On the eighth they went out to Mina. On the ninth, once the sun had passed its height, he rode into the valley of Uranah at Arafah and spoke from the back of al-Qaswa, a man repeating his words for those beyond earshot. He prayed Zuhr and Asr joined, then stood in supplication until sunset.",
            bn: "আট তারিখে তাঁরা মিনায় গেলেন। নয় তারিখে সূর্য ঢলে পড়ার পর তিনি আরাফার উরানা উপত্যকায় গিয়ে কাসওয়ার পিঠে বসে মানুষের উদ্দেশে কথা বললেন, আর একজন তাঁর কথা দূরের মানুষদের জন্য চেঁচিয়ে বলছিলেন। জোহর ও আসর কসর করে একসঙ্গে পড়লেন, তারপর কিবলামুখী হয়ে সূর্য ডোবা পর্যন্ত দোয়ায় দাঁড়িয়ে রইলেন।"
          },
          {
            en: "He rode to Muzdalifah with Usamah ibn Zayd (RA) behind him, prayed Maghrib and Isha together, and slept. In the morning he came to Mina with al-Fadl ibn al-Abbas (RA) behind him, threw the pebbles at the Jamrat al-Aqabah, sacrificed, shaved and went down to Makkah for the tawaf. He stayed at Mina through the days of tashriq, answering questions about the rites, and made a farewell tawaf before leaving.",
            bn: "উসামা ইবনে জায়েদ (রাঃ)-কে পেছনে বসিয়ে তিনি মুজদালিফায় গেলেন, মাগরিব ও এশা একসঙ্গে পড়লেন, তারপর ঘুমালেন। সকালে আল-ফাদল ইবনে আব্বাস (রাঃ)-কে পেছনে বসিয়ে মিনায় এসে জামরাতুল আকাবায় কঙ্কর মারলেন, কুরবানি করলেন, মাথা মুণ্ডালেন, তারপর তাওয়াফের জন্য মক্কায় নামলেন। আইয়ামে তাশরিকের দিনগুলো মিনায় কাটালেন, হজের আমলের ক্রম নিয়ে প্রশ্নের জবাব দিলেন, আর ফেরার আগে বিদায়ি তাওয়াফ করলেন।"
          }
        ]
      },
      {
        h: { en: "Perfected on the Day of Arafah", bn: "আরাফার দিনে পূর্ণতা" },
        p: [
          {
            en: "5:3 came down that day. In the middle of a passage on forbidden foods it says: this day I have perfected your religion for you, completed My favour upon you, and approved Islam as your religion. Sahih al-Bukhari records a Jewish man telling Umar (RA) that had such a verse come to them they would have made its day a festival; Umar (RA) answered that he knew when it came down, on the day of Arafah, on a Friday.",
            bn: "সেদিনই নাযিল হয় ৫:৩ আয়াত। হারাম খাবারের তালিকার মাঝখানেই কথাটি আসে, আজ আমি তোমাদের জন্য তোমাদের দ্বীন পূর্ণ করে দিলাম, তোমাদের উপর আমার নিয়ামত সম্পূর্ণ করলাম এবং ইসলামকে তোমাদের দ্বীন হিসেবে কবুল করে নিলাম। সহিহ বুখারিতে আছে, এক ইহুদি ব্যক্তি উমর (রাঃ)-কে বলেন, এমন আয়াত তাঁদের কাছে নাযিল হলে তাঁরা সেই দিনটিকে ঈদ বানাতেন। উমর (রাঃ) জবাব দেন, তিনি জানেন কখন তা নেমেছে, আরাফার দিনে, জুমার দিনে।"
          },
          {
            en: "Two more verses stand near this hour. 9:36, that the months with Allah are twelve and four of them sacred, lies behind the statement Bukhari preserves from Abu Bakrah (RA) that time had come round as on the day the heavens and earth were created. Ibn Abbas (RA) is reported to have named 2:281, on fearing a Day when you are returned to Allah, as the last verse revealed.",
            bn: "এই সময়ের কাছাকাছি আরও দুটি আয়াত। ৯:৩৬ আয়াত বলছে, আল্লাহর কাছে মাস বারোটি, তার চারটি নিষিদ্ধ। বুখারিতে আবু বাকরা (রাঃ) থেকে যে কথাটি এসেছে, সময় ঘুরে আকাশ ও জমিন সৃষ্টির দিনের অবস্থায় ফিরে এসেছে, তার ভিত্তি এই আয়াত। আর ইবনে আব্বাস (রাঃ) থেকে বর্ণিত আছে যে সবশেষে নাযিল হওয়া আয়াত ২:২৮১, যেখানে আল্লাহর কাছে ফিরে যাওয়ার দিনটিকে ভয় করতে বলা হয়েছে।"
          }
        ]
      },
      {
        h: { en: "Jabir's Wording of the Sermon", bn: "জাবিরের ভাষ্যে ভাষণটি" },
        p: [
          {
            en: "The sermon is quoted in many wordings. What follows comes from one narration only, Jabir ibn Abdullah's (RA) long account in Sahih Muslim 1218, rather than stitched from variants. Your blood and your property are sacred to you, it runs, as sacred as this day of yours, in this month of yours, in this town of yours. Every claim of the days of ignorance is under my feet.",
            bn: "ভাষণটি নানা ভাষ্যে উদ্ধৃত হয়। এখানে যা আছে তা একটিমাত্র বর্ণনা থেকে নেওয়া, সহিহ মুসলিম ১২১৮-এ জাবির ইবনে আবদুল্লাহ (রাঃ)-এর হজের দীর্ঘ বিবরণ থেকে; নানা ভাষ্য জোড়া দিয়ে বানানো নয়। তাতে আছে, তোমাদের রক্ত ও তোমাদের সম্পদ তোমাদের জন্য পবিত্র, ঠিক যেমন পবিত্র তোমাদের এই দিন, এই মাস আর এই শহর। জাহিলি যুগের সব দাবি আমার পায়ের নিচে।"
          },
          {
            en: "The same narration continues that the blood-revenge of that age is abolished, the first blood cancelled being that of a child of his own family; that its usury is abolished, the first cancelled being the usury owed to his uncle al-Abbas; that they must fear Allah concerning women; and that he has left among them the Book of Allah, holding to which they will not go astray. He then asked what they would say of him; when they answered that he had conveyed, he raised his finger and said three times: O Allah, bear witness.",
            bn: "একই বর্ণনা বলছে, সেই যুগের রক্তের বদলা বাতিল, আর সবার আগে তিনি বাতিল করছেন নিজের পরিবারের এক শিশুর রক্তের দাবি; সেই যুগের সুদ বাতিল, আর সবার আগে বাতিল হচ্ছে তাঁর চাচা আব্বাসের পাওনা সুদ; নারীদের ব্যাপারে আল্লাহকে ভয় করতে হবে, কারণ তাঁদের নেওয়া হয়েছে আল্লাহর জিম্মায়; আর তিনি রেখে যাচ্ছেন আল্লাহর কিতাব, যা আঁকড়ে ধরলে কেউ পথ হারাবে না। এরপর তিনি জানতে চাইলেন, তোমরা আমার সম্পর্কে কী বলবে? তাঁরা বললেন, আপনি পৌঁছে দিয়েছেন, উপদেশ দিয়েছেন। তিনি আঙুল আকাশের দিকে তুলে তিনবার বললেন, হে আল্লাহ, আপনি সাক্ষী থাকুন।"
          }
        ]
      },
      {
        h: { en: "Four Who Preserved the Day", bn: "চারজন, যাঁদের হাতে দিনটি রক্ষা পেল" },
        p: [
          {
            en: "Jabir ibn Abdullah (RA) was a young Ansari who rode close enough to see and hear, and his narration is why the pilgrimage can be reconstructed step by step. Aishah (RA) began menstruating on the journey and wept, and was told to do everything a pilgrim does except circuit the House until she was pure. The ruling drawn from her case is still taught.",
            bn: "জাবির ইবনে আবদুল্লাহ (রাঃ) ছিলেন তরুণ আনসারি, এত কাছে থেকে চলেছেন যে দেখেছেন ও শুনেছেন; তাঁর বর্ণনার জোরেই গোটা হজটি ধাপে ধাপে সাজিয়ে নেওয়া যায়। পথে আয়েশা (রাঃ)-এর হায়েজ শুরু হলে তিনি কেঁদে ফেলেন। তাঁকে বলা হলো, পবিত্র না হওয়া পর্যন্ত কাবার তাওয়াফ ছাড়া হাজি যা যা করেন সবই করবেন। তাঁর ঘটনা থেকে নেওয়া বিধান আজও পড়ানো হয়।"
          },
          {
            en: "Ali (RA) came from Yemen and entered ihram on the same intention as the Prophet ﷺ, which is why he did not release it when most of the pilgrims did; the difference is one of the details Jabir's (RA) narration preserves. Abu Bakrah (RA) preserved the Mina address that Bukhari carries, given on the day of sacrifice, and it is his wording, not Jabir's, that adds honour to the sanctity of blood and property.",
            bn: "আলী (রাঃ) ইয়েমেন থেকে এসে নবী ﷺ-এর নিয়তের উপরই ইহরাম বাঁধেন। তাই বেশির ভাগ হাজি ইহরাম খুলে ফেললেও তিনি খোলেননি। এই পার্থক্যটুকুও জাবির (রাঃ)-এর বর্ণনার জোরেই আমাদের জানা। আর কুরবানির দিনে মিনায় দেওয়া যে ভাষণ বুখারিতে আছে, তা রক্ষা করেছেন আবু বাকরা (রাঃ)। রক্ত ও সম্পদের সঙ্গে সম্মানের কথাটি জাবির (রাঃ)-এর ভাষ্যে নেই, আছে আবু বাকরা (রাঃ)-এর এই বর্ণনাতেই।"
          }
        ]
      },
      {
        h: { en: "Rites Fixed and Feuds Buried", bn: "হজের রূপ পাকা, বিবাদ দাফন" },
        p: [
          {
            en: "The rites were settled that week. Muslim's narration has him say, take your rites from me, and the sequence performed on those days is the Hajj Muslims still perform. At Mina men kept asking about doing things out of order, shaving before sacrificing or sacrificing before throwing, and each time the answer was to do it, no harm. That ease became settled law.",
            bn: "সেই সপ্তাহেই হজের রূপ পাকা হয়ে গেল। মুসলিমের বর্ণনায় তিনি বলেছেন, আমার কাছ থেকে তোমাদের হজের নিয়ম শিখে নাও; আর সেদিনগুলোতে যেভাবে আমল হয়েছে, মুসলিমরা আজও সেভাবেই হজ করে। মিনায় লোকেরা বারবার জানতে চাইছিল ক্রম উল্টে গেলে কী হবে, কুরবানির আগে মাথা মুণ্ডালে, কঙ্কর মারার আগে কুরবানি করলে। প্রতিবারের জবাব ছিল, করে ফেলো, কোনো অসুবিধা নেই। সেই সহজ জবাবগুলোই পরে ফিকহের বিধান হয়ে গেছে।"
          },
          {
            en: "Two institutions that had run Arabian life ended in a sentence each. The blood-feud was abolished with his own family's claim cancelled first, and interest was abolished with his own uncle's income cancelled first; neither was a rule announced for other people. The equality clause most often quoted, that no Arab has precedence over a non-Arab, is carried outside the two Sahihs and belongs to a separate address.",
            bn: "আরব সমাজ চালাত এমন দুটি ব্যবস্থা একটি করে বাক্যে শেষ হয়ে গেল। রক্তের বদলা বাতিল হলো, আর সবার আগে বাতিল হলো তাঁর নিজের পরিবারের দাবি; সুদ বাতিল হলো, আর সবার আগে বাতিল হলো তাঁর নিজের চাচার পাওনা। কোনোটিই অন্যদের মানার নিয়ম হিসেবে ঘোষণা করা হয়নি। সাম্যের যে বাক্যটি বিদায় ভাষণের অংশ বলে সবচেয়ে বেশি উদ্ধৃত হয়, অনারবের উপর আরবের কোনো শ্রেষ্ঠত্ব নেই, সেটি দুই সহিহতে নেই। অন্য সংকলনে এসেছে, আর সেটি আলাদা এক ভাষণের।"
          }
        ]
      },
      {
        h: { en: "Carrying the Sermon Into Ordinary Weeks", bn: "সাধারণ দিনগুলোতে ভাষণটি বয়ে নেওয়া" },
        p: [
          {
            en: "The sermon is short enough to memorise and specific enough to check yourself against, clause by clause. Whose blood, property and honour am I actually treating as sacred? What claim from before am I still pressing that he put under his feet? Where is interest sitting in my income? How would the women of my household describe my conduct toward them?",
            bn: "ভাষণটি এত ছোট যে মুখস্থ হয়, আর এত নির্দিষ্ট যে নিজের সঙ্গে মিলিয়ে দেখা যায়। এর কথাগুলো একটি একটি করে ধরা যায়। কার রক্ত, সম্পদ আর সম্মানকে আমি সত্যিই পবিত্র বলে মানছি? আগের কোন দাবিটা আমি এখনো আঁকড়ে আছি, যা তিনি পায়ের নিচে দিয়ে দিয়েছেন? আমার আয়ের কোথায় সুদ বসে আছে? ঘরের নারীরা আমার আচরণ নিয়ে কী বলবেন?"
          },
          {
            en: "The other half is the last instruction he gave. He left the Book of Allah and said that holding to it is what keeps a people from going astray, so remembering this pilgrimage is less an annual feeling than a daily relationship with the Quran. The pilgrims answered that he had conveyed the message. The question each Dhul-Hijjah is what was done with what he conveyed.",
            bn: "বাকি অর্ধেকটা তাঁর শেষ নির্দেশ। তিনি রেখে গেছেন আল্লাহর কিতাব আর বলে গেছেন, একে আঁকড়ে ধরলেই মানুষ পথ হারায় না। তাই এই হজকে মনে রাখা মানে বছরে একদিনের আবেগ নয়, কুরআনের সঙ্গে রোজকার সম্পর্ক। হাজিরা বলেছিলেন, আপনি পৌঁছে দিয়েছেন। প্রতি জিলহজে প্রশ্নটা তাই, পৌঁছে দেওয়া জিনিসটা নিয়ে আমরা কী করলাম।"
          }
        ]
      }
    ]
  },
  "passing": {
    sections: [
      {
        h: { en: "Three Months After Arafah", bn: "আরাফার তিন মাস পর" },
        p: [
          {
            en: "He came back from the Farewell Pilgrimage to a Madinah at the centre of Muslim Arabia. In Safar of the eleventh year he was preparing Usamah ibn Zayd's (RA) expedition, told separately here, when the illness began with headache and fever. Aishah (RA) narrates in Bukhari that he kept asking where he would be next day, until his wives let him be nursed in her room.",
            bn: "বিদায় হজ থেকে ফিরে তিনি এমন এক মদিনায় এলেন, যা তখন মুসলিম আরবের কেন্দ্র। হিজরি একাদশ সনের সফর মাসে তিনি উসামা ইবনে জায়েদ (রাঃ)-এর নেতৃত্বে অভিযানের প্রস্তুতি নিচ্ছিলেন, যার কথা এখানে আলাদা করে বলা আছে, তখনই মাথাব্যথা ও জ্বর নিয়ে অসুস্থতা শুরু হয়। আয়েশা (রাঃ) বুখারিতে বলেছেন, তিনি বারবার জানতে চাইছিলেন পরদিন তিনি কোথায় থাকবেন। স্ত্রীরা বুঝে নিয়ে তাঁকে আয়েশার কক্ষে থাকার অনুমতি দিলেন।"
          },
          {
            en: "He walked there supported between two men, his feet dragging. Aishah (RA) names one as al-Abbas (RA); Ibn Abbas (RA) identified the other as Ali (RA). The sirah reckons the illness at about a fortnight, without agreeing on the days. The historians place his death on a Monday in Rabi al-Awwal, most on the twelfth, and give his age as sixty-three, the majority figure not the only one.",
            bn: "দুজন মানুষের কাঁধে ভর দিয়ে তিনি সেখানে গেলেন, পা মাটিতে ঘষে যাচ্ছিল। আয়েশা (রাঃ) একজনের নাম বলেছেন আল-আব্বাস (রাঃ); ইবনে আব্বাস (রাঃ) অন্যজনকে আলী (রাঃ) বলে শনাক্ত করেছেন। সিরাত অসুস্থতার মেয়াদ ধরেছে প্রায় দুই সপ্তাহ, দিন গোনায় সবাই এক নন। ঐতিহাসিকরা তাঁর ইন্তেকাল রাখেন রবিউল আউয়ালের সোমবারে, বেশির ভাগ মতে বারো তারিখে, আর বয়স বলেন তেষট্টি বছর, যা একমাত্র মত নয়, সংখ্যাগরিষ্ঠের মত।"
          }
        ]
      },
      {
        h: { en: "A Curtain Lifted on Monday", bn: "সোমবার সকালে পর্দা সরল" },
        p: [
          {
            en: "In one of his last appearances on the minbar, Abu Sa'id al-Khudri (RA) narrates in Bukhari, he said a servant had been given the choice between this world and what is with Allah, and chose what is with Allah. Abu Bakr (RA) wept, and people wondered at an old man weeping over a servant. He also ordered every private door into the mosque closed except Abu Bakr's.",
            bn: "মিম্বরে তাঁর শেষ কয়েকটি উপস্থিতির একটিতে, আবু সাইদ খুদরি (রাঃ) বুখারিতে বলেছেন, তিনি বললেন, এক বান্দাকে দুনিয়া আর আল্লাহর কাছে যা আছে তার মধ্যে বেছে নিতে বলা হয়েছিল, আর সে আল্লাহর কাছের জিনিসটাই বেছে নিয়েছে। আবু বকর (রাঃ) কেঁদে ফেললেন, আর লোকেরা অবাক হলো, এক বৃদ্ধ কেন এক বান্দার পছন্দের কথা শুনে কাঁদছেন। একই ভাষণে তিনি আদেশ দিলেন, মসজিদে খোলা সব ব্যক্তিগত দরজা বন্ধ হোক, কেবল আবু বকরেরটি ছাড়া।"
          },
          {
            en: "When he could no longer lead the prayer he ordered Abu Bakr (RA) to lead it. Aishah (RA) twice asked that her father be excused as too soft-hearted; the answer she reports is that they were the companions of Yusuf (AS), and Abu Bakr was to lead. Bukhari also records that on the Thursday he asked for writing materials, that those present differed over bringing them, and that he told them to leave.",
            bn: "নামাজে ইমামতি করা যখন আর সম্ভব হলো না, তিনি আবু বকর (রাঃ)-কে ইমামতির আদেশ দিলেন। আয়েশা (রাঃ) দুবার বললেন তাঁর বাবাকে অব্যাহতি দিতে, কারণ আবু বকর (রাঃ) কোমল হৃদয়ের মানুষ, কান্নায় ভেঙে পড়বেন। আয়েশা (রাঃ) জানাচ্ছেন, নবী ﷺ বললেন, তোমরা তো ইউসুফ (আঃ)-এর সঙ্গিনীদের মতো, আবু বকরই ইমামতি করবেন। বুখারিতে আরও আছে, বৃহস্পতিবার তিনি লেখার সরঞ্জাম চেয়েছিলেন, উপস্থিতরা তা আনা নিয়ে দ্বিমত করেন, আর তিনি তাঁদের চলে যেতে বলেন।"
          },
          {
            en: "On the Monday morning, Anas (RA) narrates in Bukhari, he lifted the curtain of Aishah's room while the people stood in rows behind Abu Bakr (RA). His face appeared, and Anas (RA) says it was as if it were a page of the Quran. He smiled. Abu Bakr (RA) began to step back, thinking he would come out to lead; he signalled them to finish and let the curtain fall. He died in the forenoon.",
            bn: "সোমবার সকালে, আনাস (রাঃ) বুখারিতে বলেছেন, লোকেরা যখন আবু বকর (রাঃ)-এর পেছনে কাতারে দাঁড়িয়ে, তিনি আয়েশার কক্ষের পর্দা সরালেন। তাঁর চেহারা দেখা গেল, আনাস (রাঃ) বলছেন, মনে হচ্ছিল যেন কুরআনের একটি পাতা। তিনি হাসলেন। আবু বকর (রাঃ) পিছিয়ে আসতে চাইলেন, ভাবলেন তিনি বেরিয়ে ইমামতি করবেন। কিন্তু তিনি ইশারায় নামাজ শেষ করতে বললেন এবং পর্দা নামিয়ে দিলেন। সেদিন চাশতের সময়ে তাঁর ইন্তেকাল হয়।"
          }
        ]
      },
      {
        h: { en: "Messengers Have Passed Before Him", bn: "তাঁর আগেও রাসূলরা গত হয়েছেন" },
        p: [
          {
            en: "3:144 had come down after Uhud, when a rumour that he had been killed broke the Muslim line: Muhammad is not but a messenger, messengers have passed on before him, so if he was to die or be killed, would you turn back on your heels? Abu Bakr (RA) recited it in the mosque on the day the Prophet ﷺ died, and Umar (RA) said it was as though he had never heard the verse.",
            bn: "৩:১৪৪ আয়াত নেমেছিল উহুদের পর, যখন তিনি নিহত হয়েছেন এই গুজবে মুসলিম সারি ভেঙে পড়েছিল। মুহাম্মাদ একজন রাসূল মাত্র, তাঁর আগেও রাসূলরা গত হয়েছেন; কাজেই তিনি মারা গেলে বা নিহত হলে তোমরা কি উল্টো দিকে ঘুরে দাঁড়াবে? ইন্তেকালের দিন আবু বকর (রাঃ) মসজিদে এই আয়াতটিই পড়েন। উমর (রাঃ) পরে বলেছেন, তাঁর মনে হচ্ছিল আয়াতটি তিনি এর আগে কখনো শোনেনইনি।"
          },
          {
            en: "Other verses said the same without softening it. 39:30 addresses him directly: indeed you are to die, and indeed they are to die. 21:34 says no man before him was granted permanence on earth. And 33:40 had already named him the seal of the prophets, so what closed that Monday was not only a life but revelation itself.",
            bn: "আরও কিছু আয়াত কথাটা নরম না করেই বলে রেখেছিল। ৩৯:৩০ আয়াতে সরাসরি তাঁকেই বলা হয়েছে, তুমিও মরবে আর তারাও মরবে। ২১:৩৪ আয়াত বলছে, তাঁর আগে কোনো মানুষকে দুনিয়ায় চিরস্থায়ী করা হয়নি। আর ৩৩:৪০ আয়াত আগেই তাঁকে শেষ নবী বলে ঘোষণা করেছে। তাই সেই সোমবারে কেবল একটি জীবন শেষ হয়নি, ওহিও শেষ হয়েছে। এরপর আর নতুন ওহি নামেনি, নতুন সুন্নাহও নেই।"
          }
        ]
      },
      {
        h: { en: "Aishah's Account of the End", bn: "শেষ মুহূর্ত আয়েশার ভাষ্যে" },
        p: [
          {
            en: "The closest account is hers, in Sahih al-Bukhari. She says he died on her day, in her house, leaning against her chest. Her brother Abd ar-Rahman ibn Abi Bakr (RA) came in with a fresh siwak; she saw him look at it, took it, softened it with her teeth and gave it to him. She counted it a favour that his last siwak came through her hand.",
            bn: "সবচেয়ে কাছের বিবরণটি তাঁরই, সহিহ বুখারিতে। তিনি বলছেন, তাঁর নিজের দিনে, নিজের ঘরে, নিজের বুকে ঠেস দেওয়া অবস্থায় নবী ﷺ ইন্তেকাল করেন। তাঁর ভাই আবদুর রহমান ইবনে আবি বকর (রাঃ) তাজা মিসওয়াক হাতে ঢোকেন। নবী ﷺ-এর দৃষ্টি সেদিকে দেখে আয়েশা মিসওয়াকটি নিয়ে নিজের দাঁতে নরম করে তাঁকে দেন, আর তিনি দাঁত মাজেন। শেষ মিসওয়াকটি তাঁর হাত দিয়ে গেছে, একে তিনি আল্লাহর অনুগ্রহ বলে গণ্য করতেন।"
          },
          {
            en: "In the same narration a vessel of water stood beside him; he dipped his hands and wiped his face, saying there are agonies in death. Then he raised his hand and said: with the highest companion. She understood which choice he had made. The report that a prophet is buried where he dies, which Abu Bakr (RA) recalled when the place was disputed, is in the Sunan collections, not the two Sahihs.",
            bn: "একই বর্ণনায় আছে, পাশে ছিল পানির পাত্র; তিনি তাতে হাত ডুবিয়ে মুখ মুছছিলেন আর বলছিলেন, মৃত্যুর যন্ত্রণা বড় কঠিন। এরপর হাত তুলে বললেন, সর্বোচ্চ সঙ্গীর সাথে। আয়েশা বুঝে নিলেন তিনি কোনটি বেছে নিয়েছেন। দাফনের জায়গা নিয়ে মতভেদ হলে আবু বকর (রাঃ) যে বর্ণনাটি মনে করিয়ে দেন, নবী যেখানে ইন্তেকাল করেন সেখানেই তাঁকে দাফন করা হয়, তা সুনান সংকলনে আছে, দুই সহিহতে নেই।"
          }
        ]
      },
      {
        h: { en: "The Ones Who Bore It", bn: "যাঁদের উপর দিয়ে গেল" },
        p: [
          {
            en: "Umar (RA) stood in the mosque refusing the news. Abu Bakr (RA) came in from as-Sunh, uncovered the face, kissed his forehead, then told the people that whoever worshipped Muhammad should know he has died, and whoever worships Allah should know that Allah is living and never dies. He recited 3:144. Umar (RA) said his legs would not carry him.",
            bn: "উমর (রাঃ) মসজিদে দাঁড়িয়ে খবরটি মানতে চাইছিলেন না। আবু বকর (রাঃ) সুনহ থেকে এসে চেহারার কাপড় সরালেন, কপালে চুমু খেলেন, তারপর বাইরে গিয়ে মানুষকে বললেন, যে মুহাম্মাদের ইবাদত করত সে জেনে রাখুক মুহাম্মাদ ইন্তেকাল করেছেন; আর যে আল্লাহর ইবাদত করে সে জেনে রাখুক আল্লাহ চিরঞ্জীব, তাঁর মৃত্যু নেই। এরপর তিনি ৩:১৪৪ আয়াতটি পড়লেন। উমর (রাঃ) বলেছেন, তাঁর পা তাঁকে আর বইতে পারছিল না, তিনি মাটিতে বসে পড়েন।"
          },
          {
            en: "Aishah (RA) narrates in the Sahih collections that during the illness he whispered to Fatimah (RA) and she wept, then whispered again and she laughed; he had told her he would not survive, then that she would be the first of his household to follow him. Anas (RA) is reported outside the two Sahihs saying no day was brighter than the day he entered Madinah, none darker than the day he died.",
            bn: "সহিহ সংকলনে আয়েশা (রাঃ) বলেছেন, অসুস্থ অবস্থায় নবী ﷺ ফাতিমা (রাঃ)-কে চুপি চুপি কিছু বললেন আর তিনি কেঁদে ফেললেন; আবার কিছু বললেন আর তিনি হেসে ফেললেন। ফাতিমা পরে জানান, প্রথমে তিনি বলেছিলেন এই অসুস্থতা থেকে তিনি আর উঠবেন না, তারপর বলেছিলেন পরিবারের মধ্যে ফাতিমাই সবার আগে তাঁর সঙ্গে গিয়ে মিলবেন। দুই সহিহর বাইরের বর্ণনায় আনাস (রাঃ) বলেছেন, নবী ﷺ যেদিন মদিনায় ঢুকেছিলেন তার চেয়ে উজ্জ্বল দিন হয়নি, আর যেদিন ইন্তেকাল করলেন তার চেয়ে অন্ধকার দিনও হয়নি।"
          }
        ]
      },
      {
        h: { en: "Saqifah, Burial, and What Followed", bn: "সাকিফা, দাফন, তারপর" },
        p: [
          {
            en: "While the burial was still pending, the Ansar gathered in the portico of Banu Sa'idah to settle who should lead. Abu Bakr (RA) went with Umar (RA) and Abu Ubaydah (RA), and after a hard discussion the pledge was given to him there and completed in the mosque next day. The sources report the meeting; Muslims have differed ever since over how the succession should have been settled, and this account takes no side.",
            bn: "দাফন তখনো বাকি, এর মধ্যেই আনসাররা বনু সাইদার ছাউনি দেওয়া চত্বরে জড়ো হন নেতৃত্বের বিষয়টি ঠিক করতে। আবু বকর (রাঃ) সেখানে যান উমর (রাঃ) ও আবু উবায়দা (রাঃ)-কে নিয়ে। কঠিন আলোচনার পর সেখানেই আবু বকর (রাঃ)-এর হাতে বায়আত হয়, আর পরদিন মসজিদে তা প্রকাশ্যে সম্পন্ন হয়। সূত্রগুলো বৈঠক ও সেখানকার যুক্তিগুলো লিখে রেখেছে। উত্তরাধিকারের বিষয়টি কীভাবে মীমাংসা হওয়া উচিত ছিল তা নিয়ে মুসলিমরা এরপর থেকেই ভিন্নমত পোষণ করেছেন, এই বিবরণ সেখানে কোনো পক্ষ নেয় না।"
          },
          {
            en: "Ali (RA) and the family washed him, and he was buried in Aishah's (RA) room, where he had died, on the Tuesday night by the common account. People came group after group to pray over him, with no one leading. Abu Bakr (RA) then refused to recall Usamah's army or to treat zakat as negotiable, and the Quran was gathered after Yamamah.",
            bn: "আলী (রাঃ) ও পরিবারের সদস্যরা তাঁকে গোসল দেন, আর যে কক্ষে তাঁর ইন্তেকাল হয়েছিল সেই আয়েশা (রাঃ)-এর কক্ষেই তাঁকে দাফন করা হয়, প্রচলিত বর্ণনায় মঙ্গলবার রাতে। মানুষ দলে দলে ভেতরে এসে তাঁর জানাজা পড়ে যায়, কেউ ইমামতি করেনি। এরপর আবু বকর (রাঃ) উসামার বাহিনী ফিরিয়ে আনতে রাজি হননি, জাকাতকেও দরকষাকষির বিষয় বলে মানেননি; আর ইয়ামামার ক্ষতির পর কুরআন একটি লিখিত সংকলনে জমা করা হয়।"
          }
        ]
      },
      {
        h: { en: "Following a Prophet Who Died", bn: "যিনি চলে গেছেন, তাঁকে অনুসরণ" },
        p: [
          {
            en: "Abu Bakr's (RA) sentence in the mosque is the working rule. Attachment in this religion is to Allah, who does not die; attachment to any person sits beneath that, a teacher or scholar included. 3:144 does not forbid grief; it forbids turning back on your heels when the person you loved is gone. The two are easy to confuse after a loss.",
            bn: "মসজিদে আবু বকর (রাঃ)-এর বাক্যটিই কাজের নিয়ম। এই দ্বীনে টানটা আল্লাহর সঙ্গে, যিনি মরেন না; মানুষের সঙ্গে যত টান, সবই তার নিচে থাকে, শিক্ষক, আলিম বা কোনো দলের সঙ্গে টানও। ৩:১৪৪ আয়াত শোক করতে নিষেধ করে না, নিষেধ করে প্রিয় মানুষটি চলে গেলে উল্টো দিকে ঘুরে দাঁড়াতে। ক্ষতির পরের সপ্তাহে এই দুটোকে গুলিয়ে ফেলা খুব সহজ।"
          },
          {
            en: "What he left is available every day. The Book was recited to him and is recited still; the Sunnah records how he prayed, traded, ate and spoke at home. The Sunan collections carry his repeated last counsel about the prayer and those under your authority, both of which a believer can act on this afternoon. Sending salawat is the daily form of what the Companions showed that Monday.",
            bn: "তিনি যা রেখে গেছেন তা রোজই হাতের কাছে। কিতাব তাঁর সামনে পড়া হতো, আজও পড়া হয়; সুন্নাহ ধরে রেখেছে তিনি কীভাবে নামাজ পড়তেন, কেনাবেচা করতেন, খেতেন, ঘরের লোকের সঙ্গে কথা বলতেন। সুনান সংকলনে তাঁর বারবার বলা শেষ উপদেশ আছে, নামাজের ব্যাপারে আর অধীনস্থদের ব্যাপারে; দুটোই আজ বিকেলেই করা যায়। সেই সোমবার সাহাবিরা তাঁর প্রতি যে টান দেখিয়েছিলেন, দরুদ পাঠ তারই ছোট দৈনিক রূপ।"
          }
        ]
      }
    ]
  },
  "hira": {
    "sections": [
      {
        "h": { "en": "The Mountain Above Makkah", "bn": "মক্কার উপরের পাহাড়" },
        "p": [
          {
            "en": "By about 610 CE the Prophet ﷺ was nearing forty, married to Khadijah bint Khuwaylid (RA) for some fifteen years. Makkah knew him as al-Amin, whose judgement the clans had accepted when they nearly came to blows over setting the Black Stone. What the city did not see was his habit of leaving it: nights alone in a cave on the mountain later called Jabal an-Nur.",
            "bn": "৬১০ খ্রিস্টাব্দের কাছাকাছি সময়ে নবী ﷺ-এর বয়স চল্লিশের কাছাকাছি। খাদিজা বিনতে খুওয়াইলিদ (রাঃ)-এর সঙ্গে সংসার তখন প্রায় পনেরো বছরের। মক্কা তাঁকে চেনে আল-আমিন নামে; কয়েক বছর আগে হাজরে আসওয়াদ বসানো নিয়ে গোত্রগুলো যখন প্রায় মারামারিতে নেমে গিয়েছিল, তাঁর মীমাংসাই সবাই মেনে নিয়েছিল। কিন্তু শহর যা দেখেনি, তা হলো তাঁর একটা অভ্যাস। তিনি শহর ছেড়ে বেরিয়ে যেতেন, পাহাড়ের এক গুহায় একা রাত কাটাতেন। সেই পাহাড়কেই আরবরা পরে বলেছে জাবালে নূর।"
          },
          {
            "en": "Hira is a narrow cleft near the summit, a hard climb of a couple of miles out of the sanctuary, high enough that the whole valley and the Ka'bah lie below it. Ibn Ishaq and Ibn Sa'd describe the practice as tahannuth, a retreat of worship that the Quraysh knew in some form. Sahih al-Bukhari 3 adds the domestic detail that keeps it human: he carried provisions up with him, and came back down to Khadijah (RA) for more.",
            "bn": "হেরা চূড়ার কাছে সরু এক ফাটল। হারাম থেকে দুই-তিন মাইলের কঠিন চড়াই, আর উপরে উঠলে গোটা উপত্যকা আর কাবা চোখের নিচে পড়ে থাকে। ইবনে ইসহাক ও ইবনে সাদ এই অভ্যাসকে বলেন তাহান্নুস, অর্থাৎ ইবাদতের জন্য নির্জনবাস; কুরাইশরাও এর কোনো না কোনো রূপ জানত। সহিহ বুখারি ৩-এ ঘরোয়া দিকটাও আছে, যা ঘটনাটাকে মাটির কাছে রাখে: তিনি খাবার নিয়ে উঠতেন, ফুরিয়ে গেলে খাদিজা (রাঃ)-এর কাছে নেমে আসতেন।"
          }
        ]
      },
      {
        "h": { "en": "Read, He Was Told", "bn": "তাঁকে বলা হলো, পড়ো" },
        "p": [
          {
            "en": "The sirah writers place the night in Ramadan, reading 2:185 and 97:1 back onto it, though no report fixes the date itself. The angel came and said: Read. He answered that he was not a reader. The angel took hold of him and pressed him until he could bear no more, released him and said Read again. Three times this happened, and on the third the words came that open Surah al-Alaq.",
            "bn": "সিরাত লেখকেরা রাতটিকে রমজানে রাখেন, ২:১৮৫ আর ৯৭:১ আয়াতের ভিত্তিতে; তবে কোনো বর্ণনা দিনক্ষণ নির্দিষ্ট করে না। ফেরেশতা এসে বললেন, পড়ো। তিনি বললেন, আমি তো পড়তে জানি না। ফেরেশতা তাঁকে জড়িয়ে ধরে এমন চাপ দিলেন যে আর সহ্য হচ্ছিল না, তারপর ছেড়ে দিয়ে আবার বললেন, পড়ো। তিনবার এমনই হলো। তৃতীয়বারে এলো সূরা আলাকের শুরুর কথাগুলো।"
          },
          {
            "en": "He came down the mountain with his heart pounding and went to his wife saying, Cover me, cover me. They covered him until the fear left him, and then he told her what he had seen and said, I fear for myself. He did not descend claiming a rank. He came down frightened, the first thing he asked for was a blanket, and the first person he told was his wife.",
            "bn": "বুক কাঁপতে কাঁপতে তিনি পাহাড় থেকে নামলেন, স্ত্রীর কাছে গিয়ে বললেন, আমাকে চাদর দিয়ে ঢেকে দাও। ভয় কেটে যাওয়া পর্যন্ত তাঁকে ঢেকে রাখা হলো। তারপর তিনি সব খুলে বললেন, আর বললেন, আমি নিজের জন্য আশঙ্কা করছি। তিনি কোনো মর্যাদার দাবি নিয়ে নামেননি। নেমেছিলেন ভয় নিয়ে; প্রথমে চেয়েছিলেন একটা চাদর, আর প্রথমে বলেছিলেন নিজের স্ত্রীকে।"
          }
        ]
      },
      {
        "h": { "en": "The First Five Verses", "bn": "প্রথম পাঁচ আয়াত" },
        "p": [
          {
            "en": "96:1-5 are the opening of the Quran in time, not in arrangement. The first word is a command to recite in the name of the Lord who created, and the verse after it says what He created man from. Then 96:3-5 turn to teaching: your Lord is the most Generous, who taught by the pen, taught man that which he knew not. A revelation given to an unlettered man opens by praising writing.",
            "bn": "৯৬:১-৫ কুরআনের প্রথম নাজিল, তবে বিন্যাসের হিসেবে নয়, সময়ের হিসেবে। প্রথম শব্দটাই হুকুম: যিনি সৃষ্টি করেছেন, সেই রবের নামে পড়ো। পরের আয়াত বলে দেয় মানুষকে তিনি কী থেকে বানিয়েছেন। এরপর ৯৬:৩-৫ চলে যায় শেখানোর দিকে — তোমার রব বড়ই অনুগ্রহশীল, যিনি কলম দিয়ে শিখিয়েছেন, মানুষকে শিখিয়েছেন যা সে জানত না। যিনি লেখাপড়া জানতেন না, তাঁর কাছে আসা ওহী শুরুই হলো কলমের প্রশংসা দিয়ে।"
          },
          {
            "en": "The rest of the surah, 96:6-19, belongs to a later setting, where the commentators place the man who tried to stop a servant of Allah from praying. Two passages from outside the surah light this night up. 53:4-5 says the Quran is nothing but revelation revealed, taught to him by one intense in strength, which the commentators read as Jibril (AS). 42:52 says plainly that before this he did not know what the Book was, nor faith.",
            "bn": "সূরার বাকি অংশ, ৯৬:৬-১৯, অন্য এক প্রেক্ষাপটের; মুফাসসিরগণ সেখানে সেই লোকটিকে রাখেন যে আল্লাহর এক বান্দাকে নামাজ থেকে ঠেকাতে চেয়েছিল। সূরার বাইরের দুটি অংশ এই রাতের উপর আলো ফেলে। ৫৩:৪-৫ বলছে, এ ওহী ছাড়া কিছুই নয়, আর শক্তিশালী একজন তাঁকে তা শিখিয়েছেন; মুফাসসিরগণ বলেন, তিনি জিবরিল (আঃ)। আর ৪২:৫২ সোজা বলছে, এর আগে তিনি জানতেন না কিতাব কী, ঈমান কী।"
          }
        ]
      },
      {
        "h": { "en": "Aisha's Account of It", "bn": "আয়িশা (রাঃ)-এর বর্ণনা" },
        "p": [
          {
            "en": "The fullest account is that of Aisha (RA) in Sahih al-Bukhari 3, the third hadith in the collection, in its Book of Revelation. She says that revelation began for him with true dreams that came like the break of morning, that solitude was then made dear to him, and that he would withdraw to Hira and worship there for nights on end before returning to his family.",
            "bn": "সবচেয়ে পূর্ণ বিবরণ আয়িশা (রাঃ)-এর, সহিহ বুখারি ৩-এ; সংকলনের তৃতীয় হাদিস, আছে কিতাবুল ওহীতেই। তিনি বলেন, ওহীর সূচনা হয়েছিল সত্য স্বপ্ন দিয়ে, যা ভোরের আলোর মতো ফুটে উঠত। এরপর তাঁর কাছে প্রিয় করে দেওয়া হলো নির্জনতা। তিনি হেরায় গিয়ে রাতের পর রাত ইবাদত করতেন, তারপর পরিবারের কাছে ফিরে আসতেন।"
          },
          {
            "en": "The same hadith carries the pressing, the three refusals and the five verses, and then Khadijah's answer: never, by Allah, Allah will never disgrace you. She lists her reasons — he kept the ties of kinship, carried the burden of the weak, gave to the destitute, honoured the guest and helped those struck by calamity. It is a narration in which a man's character becomes the evidence for how Allah will deal with him.",
            "bn": "একই হাদিসে আছে সেই চেপে ধরা, তিনবারের জবাব আর পাঁচটি আয়াত। আছে খাদিজা (রাঃ)-এর উত্তরও: কক্ষনো না, আল্লাহর কসম, আল্লাহ আপনাকে কখনো লাঞ্ছিত করবেন না। তিনি কারণগুলোও গুনে দেন। আপনি আত্মীয়তার হক রাখেন, দুর্বলের ভার বহন করেন, নিঃস্বকে দেন, মেহমানের সম্মান করেন, বিপদে পড়া মানুষের পাশে দাঁড়ান। মানুষটার চরিত্রকেই তিনি দলিল বানিয়ে দাঁড় করালেন।"
          }
        ]
      },
      {
        "h": { "en": "Khadijah and Her Cousin", "bn": "খাদিজা (রাঃ) ও তাঁর চাচাতো ভাই" },
        "p": [
          {
            "en": "Khadijah (RA) is the first human being to accept the message, and she accepted it before any argument for it existed. She had provisioned those retreats herself, so she was the one person on earth already prepared for something to happen on that mountain. Her first act was practical: she covered him. Her second was to reason with him. Her third was to take him to someone who might recognise what had come.",
            "bn": "খাদিজা (রাঃ) প্রথম মানুষ যিনি এ বার্তা কবুল করেন, আর করেন কোনো প্রমাণ দাঁড় করানোর আগেই। হেরার প্রতিটি সফরের খাবার তিনিই গুছিয়ে দিতেন, তাই ওই পাহাড়ে কিছু একটা ঘটার জন্য দুনিয়ায় তিনিই সবচেয়ে প্রস্তুত ছিলেন। প্রথমে তিনি কাজের কাজটা করলেন, চাদর দিয়ে ঢেকে দিলেন। দ্বিতীয়ত যুক্তি দিয়ে বোঝালেন। তৃতীয়ত এমন একজনের কাছে নিয়ে গেলেন, যিনি জিনিসটা চিনতে পারেন।"
          },
          {
            "en": "That was Waraqah ibn Nawfal, her cousin, an old man who had become a Christian and used to write out scripture. In Bukhari's wording he said this was the Namus whom Allah sent down to Musa (AS), and wished he were young enough to be alive when the people drove this man out. Asked in astonishment whether they really would, he answered yes: no man brought the like of it without being fought.",
            "bn": "তিনি ওয়ারাকা ইবনে নাওফাল, খাদিজা (রাঃ)-এর চাচাতো ভাই। বৃদ্ধ মানুষ, খ্রিস্টান হয়েছিলেন, নিজের হাতে আসমানি কিতাব লিখতেন। বুখারির ভাষায় তিনি বললেন, ইনি সেই নামুস, যাঁকে আল্লাহ মুসা (আঃ)-এর কাছে পাঠিয়েছিলেন। আফসোস করলেন, সেদিন পর্যন্ত যদি বেঁচে থাকতাম, যেদিন আপনার জাতি আপনাকে বের করে দেবে। নবী ﷺ অবাক হয়ে জানতে চাইলেন, ওরা কি সত্যিই বের করে দেবে? জবাব এলো, হ্যাঁ। এমন কিছু নিয়ে কেউ আসেনি, যার সঙ্গে শত্রুতা করা হয়নি।"
          }
        ]
      },
      {
        "h": { "en": "A Man Becomes a Messenger", "bn": "একজন মানুষ রাসুল হলেন" },
        "p": [
          {
            "en": "Prophethood began that night, and with it a revelation that would continue for about twenty-three years. Nothing about Makkah changed yet. No call had been made, no community existed, and the man who had received it told almost nobody. The change was in what the world now contained: a Book being sent down, and a human being made responsible for carrying it, whether or not the city ever agreed to listen.",
            "bn": "সে রাতেই নবুয়ত শুরু, আর তার সঙ্গে শুরু প্রায় তেইশ বছরের ওহী। মক্কার বাইরের চেহারা তখনো বদলায়নি। দাওয়াত দেওয়া হয়নি, কোনো জামাত গড়ে ওঠেনি, আর যাঁর কাছে ওহী এসেছে তিনি প্রায় কাউকেই বলেননি। বদলটা ছিল দুনিয়ার ভেতরের হিসাবে। এখন একটা কিতাব নাজিল হচ্ছে, আর সেটা বয়ে নেওয়ার দায়িত্বে একজন মানুষ আছেন; শহর শুনুক বা না শুনুক।"
          },
          {
            "en": "Waraqah died soon after, Bukhari 3 says, and revelation paused. That pause has a story of its own. But the shape of the mission was already set by those five verses: knowledge before conquest, reading before ruling, a pen named before a sword. The memorisers, the schools and the scholars of hadith all stand downstream of a command to read, given to a man who could not read.",
            "bn": "বুখারি ৩ বলছে, এর কিছু পরেই ওয়ারাকা মারা যান আর ওহী থেমে যায়। সেই থেমে যাওয়ার আলাদা গল্প আছে। তবে মিশনের ছাঁচ ওই পাঁচ আয়াতেই ঠিক হয়ে গিয়েছিল: বিজয়ের আগে ইলম, শাসনের আগে পড়া, তলোয়ারের আগে কলমের নাম। হাফেজ, মাদ্রাসা আর হাদিসের ইমামরা সবাই দাঁড়িয়ে আছেন একটিমাত্র হুকুমের ধারায়, যে হুকুম দেওয়া হয়েছিল এমন একজনকে যিনি পড়তে জানতেন না।"
          }
        ]
      },
      {
        "h": { "en": "Bringing the Cave Home", "bn": "গুহাটা ঘরে নামিয়ে আনা" },
        "p": [
          {
            "en": "The most literal thing to carry is the reading. The command was not understand, and not believe, but recite, and reciting the Quran is still the act with which a Muslim begins, whatever else he does afterwards. Someone who reads a page a day is doing the thing that was asked first, and doing it in the name of the Lord who created, exactly as 96:1 specifies.",
            "bn": "সবচেয়ে সোজা আমল পড়াটাই। বলা হয়নি বোঝো, বলা হয়নি বিশ্বাস করো; হুকুম ছিল পড়ো। মুসলিমের জীবনে কুরআন তিলাওয়াত আজও সেই শুরুর কাজ, বাকি সব তার পরে। যিনি দিনে এক পৃষ্ঠা পড়েন, তিনি সবার আগে চাওয়া কাজটাই করছেন। আর ৯৬:১ যেভাবে বলে দেয়, সেটা করছেন যিনি সৃষ্টি করেছেন সেই রবের নামেই।"
          },
          {
            "en": "The second thing to carry is the retreat. He climbed that mountain for years with no revelation and no promise of one, simply to be alone with his Lord. Set aside a fixed, unimpressive, unwitnessed slot of your own: the last third of a night, a walk, a corner of a room. Nothing is guaranteed to happen in it. Something happened in his, because he kept climbing.",
            "bn": "দ্বিতীয় আমল নির্জনে বসা। বছরের পর বছর তিনি ওই পাহাড়ে উঠেছেন, তখনো কোনো ওহী আসেনি, আসার কোনো কথাও ছিল না; শুধু রবের সঙ্গে একা থাকতে উঠেছেন। আপনিও একটা নির্দিষ্ট, সাদামাটা, কারো চোখে না পড়া সময় আলাদা করে রাখুন। রাতের শেষ ভাগ, একটু হাঁটা, ঘরের এক কোণ। সেখানে নাটকীয় কিছু ঘটার নিশ্চয়তা নেই। তাঁর বেলায় ঘটেছিল, কারণ তিনি ওঠা ছাড়েননি।"
          }
        ]
      }
    ]
  },
  "fatrah_wahy": {
    "sections": [
      {
        "h": { "en": "After the Cave, Silence", "bn": "গুহার পর নীরবতা" },
        "p": [
          {
            "en": "The first five verses were given, and then nothing came. Waraqah ibn Nawfal, the one man in Makkah who had recognised what happened, died soon after the encounter at Hira, and the sky went quiet. The sirah calls this stretch the fatrah, the pause. The Prophet ﷺ was left with an experience he could not repeat, no instruction, and a city that knew nothing of it.",
            "bn": "প্রথম পাঁচ আয়াত এলো, তারপর আর কিছুই এলো না। মক্কায় একমাত্র যে মানুষটি ব্যাপারটা চিনতে পেরেছিলেন, সেই ওয়ারাকা ইবনে নাওফাল হেরার ঘটনার অল্প পরেই মারা যান। আকাশ চুপ হয়ে গেল। সিরাতে এই সময়টাকে বলা হয় ফাতরাহ, অর্থাৎ বিরতি। নবী ﷺ-এর হাতে রইল এমন এক অভিজ্ঞতা যা তিনি নিজে ঘটাতে পারেন না, রইল না কোনো নির্দেশ, আর শহর এসবের কিছুই জানে না।"
          },
          {
            "en": "How long it lasted is disputed and cannot be settled. Ibn Ishaq gives three years on ash-Sha'bi's authority; a report from Ibn Abbas (RA) gives forty days, and figures of twelve and fifteen days also circulate. Ibn Hajar gathers the disagreement in Fath al-Bari without deciding it, and later writers observe that the three-year figure may have absorbed the three years of quiet calling that came afterwards.",
            "bn": "কতদিন এই বিরতি ছিল, তা নিয়ে মতভেদ আছে আর তা মেটানোও যায় না। ইবনে ইসহাক শাবির সূত্রে তিন বছরের কথা বলেন; ইবনে আব্বাস (রাঃ)-এর এক বর্ণনায় আসে চল্লিশ দিন; বারো বা পনেরো দিনের কথাও চালু আছে। ইবনে হাজার ফাতহুল বারিতে মতগুলো একসঙ্গে এনেছেন, কিন্তু কোনোটিকে চূড়ান্ত বলেননি। পরের লেখকদের অনেকে মনে করেন, তিন বছরের হিসাবটা আসলে পরের গোপন দাওয়াতের তিন বছরের সঙ্গে মিশে গেছে।"
          }
        ]
      },
      {
        "h": { "en": "The Angel on the Chair", "bn": "চেয়ারে বসা ফেরেশতা" },
        "p": [
          {
            "en": "The pause ended on a road. He was walking when he heard a voice from the sky, looked up, and saw the same angel who had come to him at Hira, now seated on a chair between the sky and the earth. The sight terrified him. He turned for home asking to be wrapped up, and the household covered him while he shook.",
            "bn": "বিরতি শেষ হলো পথের উপর। তিনি হাঁটছিলেন, হঠাৎ আকাশ থেকে একটা আওয়াজ শুনলেন। মাথা তুলে দেখলেন, হেরায় যিনি এসেছিলেন সেই ফেরেশতাই আসমান-জমিনের মাঝখানে একটি আসনে বসে আছেন। দৃশ্যটা তাঁকে ভীত করে ফেলল। তিনি ঘরের দিকে ফিরে গিয়ে বললেন, আমাকে ঢেকে দাও। তিনি তখনো কাঁপছেন; ঘরের লোকেরা তাঁকে চাদরে ঢেকে দিলেন।"
          },
          {
            "en": "What came down then was not comfort but a commission. 74:1-7 addresses the man in the garment and tells him to stand up and warn. The narration in Bukhari carries the revelation as far as the command to shun uncleanliness, and adds that after this the wahy came strongly and frequently, with no further break of that kind. The waiting was over, and the public work had been assigned.",
            "bn": "এবার যা নামল, তা সান্ত্বনা নয়, দায়িত্ব। ৭৪:১-৭ বস্ত্রাবৃত মানুষটিকে ডেকে বলছে, উঠে দাঁড়াও আর সতর্ক করো। বুখারির বর্ণনায় ওহীর এ অংশ টানা হয়েছে অপবিত্রতা থেকে দূরে থাকার হুকুম পর্যন্ত, আর সঙ্গে বলা হয়েছে, এরপর ওহী আসতে থাকল জোরালোভাবে ও ঘন ঘন, এমন বিরতি আর আসেনি। অপেক্ষা শেষ, আর প্রকাশ্য কাজের ভার বুঝিয়ে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": { "en": "Two Cloaks, Two Surahs", "bn": "দুই চাদর, দুই সূরা" },
        "p": [
          {
            "en": "74:1-2 pairs an address with an order: O you who covers himself, arise and warn. Three short commands follow in 74:3-5, to glorify your Lord, purify your clothing and keep away from uncleanliness, and two harder ones in 74:6-7, not to give in order to get more, and to be patient for your Lord. Before a doctrine is taught, a way of living is fixed.",
            "bn": "৭৪:১-২ এক সঙ্গে ডাক আর হুকুম: ওহে বস্ত্রাবৃত, উঠো, সতর্ক করো। এরপর ৭৪:৩-৫ আয়াতে ছোট তিনটি হুকুম, রবের শ্রেষ্ঠত্ব ঘোষণা করা, পোশাক পবিত্র রাখা আর অপবিত্রতা থেকে দূরে থাকা। তারপর ৭৪:৬-৭ আয়াতে আরও কঠিন দুটি, বেশি পাওয়ার আশায় কাউকে না দেওয়া আর রবের জন্য ধৈর্য ধরা। কোনো আকিদার পাঠ শুরুর আগেই জীবনযাপনের ছাঁচ ঠিক করে দেওয়া হলো।"
          },
          {
            "en": "Surah ad-Duha answers the fear that silence meant rejection. 93:3 states that your Lord has not taken leave of you, nor has He detested you. 93:5 promises that He will give until you are satisfied, and 93:6-8 argues from his own life: an orphan given shelter, one lost and then guided, one poor and then made self-sufficient. 93:9-11 turns that comfort straight into duties.",
            "bn": "সূরা আদ-দুহা সেই আশঙ্কার জবাব দেয় যে নীরবতা মানে পরিত্যাগ। ৯৩:৩ বলছে, তোমার রব তোমাকে ছেড়ে যাননি, তোমার উপর অসন্তুষ্টও নন। ৯৩:৫ কথা দিচ্ছে, তিনি এত দেবেন যে তুমি সন্তুষ্ট হয়ে যাবে। আর ৯৩:৬-৮ দলিল টানছে তাঁর নিজের জীবন থেকেই: ইয়াতিমকে আশ্রয় দেওয়া হয়েছে, পথ না জানা মানুষকে পথ দেখানো হয়েছে, নিঃস্বকে অভাবমুক্ত করা হয়েছে। ৯৩:৯-১১ এই সান্ত্বনাকেই সরাসরি দায়িত্বে বদলে দেয়।"
          },
          {
            "en": "Two more early surahs sit beside these. The ordering lists differ over whether al-Muddaththir or al-Muzzammil followed al-Alaq, and 73:1-5 opens the same way, on a man wrapped in his clothing, told to stand at night and warned that a heavy word is about to be cast upon him. 68:1-4 swears by the pen and answers the charge of madness with a statement about his character.",
            "bn": "এদের পাশে আছে আরও দুটি শুরুর দিকের সূরা। সূরা আলাকের পরে মুদ্দাসসির নাকি মুযযাম্মিল নেমেছিল, নাজিলের ক্রমের তালিকাগুলোয় সে বিষয়ে মিল নেই। ৭৩:১-৫ আয়াতের শুরুও একইভাবে, চাদরে জড়ানো মানুষটিকে ডেকে: রাতে দাঁড়াও, আর জেনে রাখো, তোমার উপর ভারী কালাম নামতে যাচ্ছে। ৬৮:১-৪ কলমের কসম খায়, আর পাগল বলার অপবাদের জবাব দেয় তাঁর চরিত্রের কথা বলে।"
          }
        ]
      },
      {
        "h": { "en": "Jabir and Jundub Report", "bn": "জাবির ও জুনদুবের বর্ণনা" },
        "p": [
          {
            "en": "Sahih al-Bukhari 4, the hadith straight after Aisha's account of Hira, is Jabir ibn Abdullah's (RA) report of the Prophet's ﷺ own words about the pause: while I was walking I heard a voice from the sky, I raised my head, and there was the angel who came to me at Hira, sitting on a chair between the sky and the earth. I was afraid of him, and came back saying, wrap me.",
            "bn": "সহিহ বুখারি ৪, অর্থাৎ হেরা নিয়ে আয়িশা (রাঃ)-এর বর্ণনার ঠিক পরের হাদিসটি, জাবির ইবনে আবদুল্লাহ (রাঃ)-এর সূত্রে নবী ﷺ-এর নিজের কথা: আমি হাঁটছিলাম, তখন আকাশ থেকে একটা আওয়াজ শুনলাম। মাথা তুলে দেখি, হেরায় যিনি আমার কাছে এসেছিলেন সেই ফেরেশতা আসমান-জমিনের মাঝখানে এক আসনে বসা। তাঁকে দেখে আমি ভয় পেলাম, আর ফিরে এসে বললাম, আমাকে ঢেকে দাও।"
          },
          {
            "en": "The second narration is Bukhari 4950, from Jundub ibn Abdullah (RA). The Prophet ﷺ was unwell and did not stand for the night prayer for two or three nights, and a woman, whom the commentators identify as the wife of Abu Lahab, said she thought his Satan had abandoned him. 93:1-3 came down in answer. The hadith describes that smaller occasion; the commentators read the surah against the longer silence as well.",
            "bn": "দ্বিতীয় বর্ণনাটি বুখারি ৪৯৫০, জুনদুব ইবনে আবদুল্লাহ (রাঃ)-এর সূত্রে। নবী ﷺ অসুস্থ ছিলেন, দুই-তিন রাত তাহাজ্জুদে দাঁড়াতে পারেননি। তখন এক নারী, মুফাসসিরগণ যাকে আবু লাহাবের স্ত্রী বলে শনাক্ত করেন, বলে বসল, মনে হয় তার শয়তান তাকে ছেড়ে গেছে। জবাবে নামল ৯৩:১-৩। হাদিসটি ওই ছোট ঘটনার কথাই বলে; মুফাসসিরগণ সূরাটিকে দীর্ঘ নীরবতার প্রেক্ষাপটেও পড়েন।"
          }
        ]
      },
      {
        "h": { "en": "Those Who Waited With Him", "bn": "যাঁরা তাঁর সঙ্গে অপেক্ষা করেছেন" },
        "p": [
          {
            "en": "Jabir ibn Abdullah (RA) was a small child in Yathrib when this happened, and narrates it as the Prophet's ﷺ own account. That is how much of the earliest sirah reaches us: not from eyewitnesses in Makkah, but from Companions repeating what he told them years afterwards. Jundub ibn Abdullah (RA) transmits the ad-Duha report in the same way, and between them these two gave the period its chain.",
            "bn": "ঘটনাটি যখন ঘটে, জাবির ইবনে আবদুল্লাহ (রাঃ) তখন ইয়াসরিবে নেহাত শিশু। তিনি এটি বর্ণনা করেন নবী ﷺ-এর নিজের বয়ান হিসেবে। শুরুর দিকের সিরাতের বড় অংশ আমাদের কাছে এভাবেই এসেছে; মক্কার চাক্ষুষ সাক্ষীদের কাছ থেকে নয়, বরং বহু বছর পরে সাহাবিরা যা শুনেছিলেন তা বলে যাওয়ার মধ্য দিয়ে। জুনদুব ইবনে আবদুল্লাহ (রাঃ) আদ-দুহার বর্ণনাটি একইভাবে পৌঁছে দেন। এই দুজনই এ সময়টার সনদ দাঁড় করিয়েছেন।"
          },
          {
            "en": "Khadijah (RA) is again the one holding the cloak, and Waraqah's death had removed the only outside voice that had confirmed anything. On the other side stands the woman who mocked the silence. The commentators name her as the wife of Abu Lahab, and her household is dealt with later in the Quran; here she is simply the first person to treat a gap in his experience as evidence against him.",
            "bn": "চাদরটা এবারও ধরে আছেন খাদিজা (রাঃ)। আর ওয়ারাকার মৃত্যুতে বাইরের একমাত্র যে কণ্ঠ ব্যাপারটাকে সমর্থন করেছিল, তাও চলে গেছে। উল্টো দিকে দাঁড়িয়ে সেই নারী, যে নীরবতা নিয়ে ঠাট্টা করেছিল। মুফাসসিরগণ তাকে আবু লাহাবের স্ত্রী বলে চেনান, আর তাদের ঘরের হিসাব কুরআন পরে চুকিয়েছে। এখানে সে শুধু প্রথম মানুষ, যে নবী ﷺ-এর অভিজ্ঞতার একটা ফাঁককে তাঁর বিরুদ্ধে প্রমাণ বানাতে চাইল।"
          }
        ]
      },
      {
        "h": { "en": "From Comfort to Commission", "bn": "সান্ত্বনা থেকে দায়িত্বে" },
        "p": [
          {
            "en": "The title changed. At Hira he received; from 74:2 onward he is a warner with an audience. That one word turned a private experience into a mission with an addressee, and everything that follows in Makkah, from the quiet years to Safa, the boycott and the migration, works out an order to stand up and speak.",
            "bn": "পরিচয়টাই বদলে গেল। হেরায় তিনি ছিলেন গ্রহণকারী; ৭৪:২ থেকে তিনি সতর্ককারী, আর তাঁর সামনে শ্রোতা আছে। এই একটি শব্দ ব্যক্তিগত অভিজ্ঞতাকে বানিয়ে দিল এমন এক দায়িত্ব, যার ঠিকানা আছে। মক্কায় এরপর যা যা ঘটেছে, গোপনে শেখানোর বছরগুলো থেকে শুরু করে সাফার চড়াই, বয়কট আর হিজরত পর্যন্ত সবই ওই একটাই হুকুমের বাস্তবায়ন: উঠে দাঁড়াও, বলো।"
          },
          {
            "en": "The pause itself became part of the training. He learned that revelation was not his to summon, that it arrived when it was sent, and that its absence was not abandonment. Later silences came, and the sirah reports one after the Quraysh put their questions about the Sleepers and the Spirit to him. By then he had already been through this, and had 93:3 to hold on to.",
            "bn": "বিরতিটাও শিক্ষার অংশ হয়ে গেল। তিনি বুঝলেন, ওহী ডেকে আনা তাঁর হাতে নেই; পাঠানো হলে তবেই আসে, আর না আসা মানে ছেড়ে দেওয়া নয়। পরেও নীরবতা এসেছে; সিরাত বলে, কুরাইশরা গুহাবাসী আর রুহ নিয়ে প্রশ্ন করার পর তেমন এক অপেক্ষা গেছে। কিন্তু ততদিনে এই পথ তাঁর চেনা, আর হাতে ধরার মতো ৯৩:৩ আয়াতটিও আছে।"
          }
        ]
      },
      {
        "h": { "en": "When Your Sky Goes Quiet", "bn": "যখন আপনার আকাশ চুপ হয়ে যায়" },
        "p": [
          {
            "en": "Most believers meet a version of this. Prayer turns mechanical, the Quran stops moving anything, and a person concludes that Allah has lost interest in him. 93:3 denies exactly that conclusion. The absence of feeling is not the withdrawal of favour, and the verse does not tell him to manufacture it. It tells him what remains true while it is gone.",
            "bn": "প্রায় প্রত্যেক ঈমানদারই কোনো না কোনোভাবে এর মুখোমুখি হন। নামাজ যন্ত্রের মতো হয়ে যায়, কুরআন পড়ে আর ভেতরে কিছু নড়ে না, আর মানুষ ধরে নেয় আল্লাহ তার দিক থেকে মুখ ফিরিয়ে নিয়েছেন। ৯৩:৩ ঠিক এই সিদ্ধান্তটাকেই নাকচ করে দেয়। অনুভূতি না থাকা মানে অনুগ্রহ উঠে যাওয়া নয়। আয়াতটি অনুভূতি বানিয়ে তোলার কথা বলে না; বলে দেয়, অনুভূতি না থাকা অবস্থাতেও কোন কথাটা সত্য থেকে যায়।"
          },
          {
            "en": "The instruction that follows is practical rather than emotional. 93:9-11 gives three things to do in a dry season: do not oppress the orphan, do not repel the one who asks, and speak of what your Lord has given you. When the inner life goes quiet, the road back runs through duties owed to other people and through gratitude said out loud, not through waiting for a mood to return.",
            "bn": "এরপরের নির্দেশটা আবেগের নয়, কাজের। ৯৩:৯-১১ শুকনো সময়ের জন্য তিনটি কাজ ধরিয়ে দেয়: ইয়াতিমের উপর কঠোর হবে না, যে চায় তাকে ধমকে তাড়াবে না, আর তোমার রব তোমাকে যা দিয়েছেন তার কথা বলবে। ভেতরটা চুপ হয়ে গেলে ফেরার পথ যায় মানুষের হক আদায়ের ভেতর দিয়ে আর মুখে শুকরিয়া বলার ভেতর দিয়ে, মন ভালো হওয়ার অপেক্ষায় বসে থেকে নয়।"
          }
        ]
      }
    ]
  },
  "firstbelievers": {
    "sections": [
      {
        "h": { "en": "A House Before a Mosque", "bn": "মসজিদের আগে একটি ঘর" },
        "p": [
          {
            "en": "Prophethood had begun and nobody in Makkah knew. There was no mosque, no public name for the religion, no prayer performed where anyone could see it. What existed was a household: a man of about forty, his wife, his uncle's son raised in the house, and a freedman who had stayed when his own father came with money to buy him back. It began there.",
            "bn": "নবুয়ত শুরু হয়ে গেছে, অথচ মক্কার কেউ তা জানে না। মসজিদ নেই, প্রকাশ্যে দ্বীনের কোনো নাম নেই, কারো চোখে পড়ে এমন কোথাও নামাজও পড়া হয় না। যা আছে তা একটি ঘর: চল্লিশ ছুঁইছুঁই একজন মানুষ, তাঁর স্ত্রী, ঘরে লালিত-পালিত চাচার এক ছেলে, আর সেই মুক্ত করা যুবক, যিনি নিজের বাবা মুক্তিপণ নিয়ে আসার পরও থেকে যাওয়াটাই বেছে নিয়েছিলেন। জামাতের শুরু ওখান থেকেই।"
          },
          {
            "en": "The city around them ran on a settled religious economy. The Ka'bah drew pilgrims, the pilgrims fed the trade, and the idols set around the sanctuary belonged to clans who took their standing from them. A message that there is no god but Allah threatened all of it. Those who accepted it first accepted a claim with no visible backing, from a man who could show them nothing but himself.",
            "bn": "তাদের চারপাশের শহরটা চলত ধর্মকে ঘিরে গড়ে ওঠা এক পাকা অর্থনীতিতে। কাবা হাজি টানত, হাজিরা ব্যবসা বাঁচিয়ে রাখত, আর হারামের চারপাশে বসানো মূর্তিগুলোর মালিক ছিল সেই গোত্রগুলো, যাদের মর্যাদাই দাঁড়িয়ে ছিল ওইসব মূর্তির উপর। আল্লাহ ছাড়া কোনো ইলাহ নেই, এই কথাটা একসঙ্গে সবকিছুকেই নাড়িয়ে দিত। তাই যাঁরা প্রথমে এ কথা মানলেন, তাঁরা মানলেন এমন এক দাবি, যার পক্ষে চোখে দেখার মতো কিছুই ছিল না; ছিলেন কেবল দাবিদার মানুষটি নিজে।"
          }
        ]
      },
      {
        "h": { "en": "Four Who Said Yes", "bn": "যে চারজন সাড়া দিলেন" },
        "p": [
          {
            "en": "Khadijah (RA) accepted it first, on the night it came, before any argument for it existed. Ali ibn Abi Talib (RA) was living in the house and came upon the two of them praying; he asked what they were doing, and accepted Islam as the first of the young. Ibn Ishaq puts his age at about ten, other reports make him seven or nine, and the sources do not settle it.",
            "bn": "সবার আগে কবুল করেন খাদিজা (রাঃ), যে রাতে ওহী এলো সেই রাতেই, কোনো দলিল দাঁড়ানোর আগেই। আলী ইবনে আবি তালিব (রাঃ) তখন ওই ঘরেই থাকতেন। একদিন তিনি দুজনকে নামাজ পড়তে দেখে জিজ্ঞেস করলেন, আপনারা কী করছেন। তরুণদের মধ্যে তিনিই প্রথম ইসলাম গ্রহণ করেন। ইবনে ইসহাক তাঁর বয়স বলেন দশের কাছাকাছি, অন্য বর্ণনায় আসে সাত বা নয়; সূত্রগুলো এ নিয়ে এক জায়গায় পৌঁছায় না।"
          },
          {
            "en": "Zayd ibn Harithah (RA), freed and living in the same house, was among the earliest to believe. Abu Bakr (RA) was the first free adult man outside it to accept; told that his friend said an angel had come to him, he answered that if Muhammad ﷺ said it, it was true. Uthman, az-Zubayr, Abd ar-Rahman ibn Awf, Sa'd ibn Abi Waqqas and Talhah (RA) all entered through him.",
            "bn": "যায়েদ ইবনে হারিসা (রাঃ) মুক্ত হয়ে ওই ঘরেই ছিলেন, আর প্রথম দিকের ঈমানদারদের একজন। ঘরের বাইরে স্বাধীন প্রাপ্তবয়স্কদের মধ্যে প্রথম কবুল করেন আবু বকর (রাঃ)। তাঁকে যখন বলা হলো, তাঁর বন্ধু বলছেন তাঁর কাছে ফেরেশতা এসেছেন, তিনি বললেন, মুহাম্মদ ﷺ যদি বলে থাকেন তবে তা সত্য। উসমান, যুবাইর, আবদুর রহমান ইবনে আউফ, সাদ ইবনে আবি ওয়াক্কাস আর তালহা (রাঃ) সবাই ইসলামে এসেছেন তাঁরই হাত ধরে।"
          },
          {
            "en": "The classical writers argue over who was strictly first, and the later biographers resolve it by category rather than by clock: the first woman was Khadijah (RA), the first free man Abu Bakr (RA), the first youth Ali (RA), the first freedman Zayd (RA), and among the enslaved, Bilal ibn Rabah (RA). The disagreement is preserved rather than tidied away, as the early sirah usually handles a contested claim.",
            "bn": "ঠিক কে সবার আগে, তা নিয়ে প্রাচীন লেখকদের মধ্যে বিতর্ক আছে। পরবর্তী জীবনীকারেরা মীমাংসাটা করেন ঘড়ির হিসাবে নয়, শ্রেণির হিসাবে: নারীদের মধ্যে প্রথম খাদিজা (রাঃ), স্বাধীন পুরুষদের মধ্যে আবু বকর (রাঃ), তরুণদের মধ্যে আলী (রাঃ), মুক্ত দাসদের মধ্যে যায়েদ (রাঃ), আর দাসদের মধ্যে বিলাল ইবনে রাবাহ (রাঃ)। মতভেদটা মুছে ফেলা হয়নি, রেখে দেওয়া হয়েছে। বিতর্কিত দাবির বেলায় শুরুর দিকের সিরাত সাধারণত এভাবেই চলে।"
          }
        ]
      },
      {
        "h": { "en": "Verses for the Forerunners", "bn": "অগ্রবর্তীদের নিয়ে আয়াত" },
        "p": [
          {
            "en": "No verse was revealed about this moment while it was happening; the Quran names the group afterwards, from Madinah. 9:100 speaks of the first forerunners among the Muhajirun and the Ansar, and those who followed them in good conduct, and says Allah is pleased with them and they with Him. Being early is treated there as a rank earned, not an accident of birth.",
            "bn": "ঘটনাটি ঘটার সময় এ নিয়ে কোনো আয়াত নামেনি; কুরআন এই দলটির নাম নেয় পরে, মদিনা থেকে। ৯:১০০ বলছে মুহাজির ও আনসারদের মধ্যে প্রথম সারির অগ্রণীদের কথা, আর যাঁরা সৎকর্মে তাঁদের অনুসরণ করেছেন তাঁদের কথা; আল্লাহ তাঁদের প্রতি সন্তুষ্ট, তাঁরাও তাঁর প্রতি সন্তুষ্ট। আগে আসাটাকে এখানে ধরা হয়েছে অর্জিত মর্যাদা হিসেবে, জন্মের সময়ের কাকতালীয় হিসাব হিসেবে নয়।"
          },
          {
            "en": "56:10-11 puts the same idea in the language of the Hereafter, thematically rather than about these four: the forerunners, the forerunners, those are the ones brought near. 33:37, revealed years later in Madinah, is the one verse that names a Companion, and the name it carries is Zayd's. And 6:52, from the later Makkan years, forbids sending away those who call on their Lord morning and afternoon seeking His face.",
            "bn": "৫৬:১০-১১ একই কথা বলে আখিরাতের ভাষায়, এই চারজনকে নিয়ে নয়, ভাব হিসেবে: অগ্রবর্তীরা তো অগ্রবর্তীই, তাঁরাই নৈকট্যপ্রাপ্ত। ৩৩:৩৭ নেমেছে অনেক পরে মদিনায়, আর কুরআনে একমাত্র এই আয়াতেই একজন সাহাবির নাম আছে; নামটি যায়েদের। আর মক্কার শেষ দিকের আয়াত ৬:৫২ নিষেধ করে, যাঁরা সকাল-সন্ধ্যায় রবের সন্তুষ্টির খোঁজে তাঁকে ডাকে তাঁদের যেন দূরে সরিয়ে দেওয়া না হয়।"
          }
        ]
      },
      {
        "h": { "en": "Five Slaves and Two Women", "bn": "পাঁচ দাস আর দুই নারী" },
        "p": [
          {
            "en": "Sahih al-Bukhari 3857 preserves the size of the group in the words of a man who was inside it. Ammar ibn Yasir (RA) said that he saw the Messenger of Allah ﷺ when there was nobody with him but five slaves, two women and Abu Bakr (RA). One sentence fixes the scale of the beginning better than any description: the whole of Islam fitted in a room.",
            "bn": "সহিহ বুখারি ৩৮৫৭-এ দলটির আকার ধরা আছে এমন একজনের কথায়, যিনি নিজেই সেই দলে ছিলেন। আম্মার ইবনে ইয়াসির (রাঃ) বলেন, আমি আল্লাহর রাসুল ﷺ-কে এমন সময়ে দেখেছি যখন তাঁর সঙ্গে ছিল কেবল পাঁচজন দাস, দুজন নারী আর আবু বকর (রাঃ)। একটাই বাক্য, অথচ শুরুর মাপটা এটি যেভাবে ধরিয়ে দেয়, লম্বা বর্ণনাও তা পারে না: গোটা ইসলাম তখন এক ঘরেই এঁটে যেত।"
          },
          {
            "en": "The second is Sahih al-Bukhari 3820, from Abu Hurayrah (RA). Jibril (AS) came to the Prophet ﷺ and said that Khadijah (RA) was approaching with a vessel of food or drink, and told him to convey greetings to her from her Lord and from himself, with the good news of a house of qasab in Paradise, with neither noise nor fatigue in it. The first believer was greeted by name from above.",
            "bn": "দ্বিতীয় বর্ণনাটি সহিহ বুখারি ৩৮২০, আবু হুরায়রা (রাঃ)-এর সূত্রে। জিবরিল (আঃ) নবী ﷺ-এর কাছে এসে বললেন, খাদিজা (রাঃ) খাবার বা পানীয়ের পাত্র নিয়ে আসছেন। তাঁকে জানিয়ে দিন তাঁর রবের পক্ষ থেকে সালাম, আর আমার পক্ষ থেকেও; আর সুসংবাদ দিন জান্নাতে কাসাবের তৈরি ঘরের, যেখানে হইচইও নেই, ক্লান্তিও নেই। প্রথম ঈমানদারকে উপর থেকে নাম ধরে সালাম পাঠানো হলো।"
          }
        ]
      },
      {
        "h": { "en": "Wife, Friend, Boy and Freedman", "bn": "স্ত্রী, বন্ধু, বালক ও মুক্ত দাস" },
        "p": [
          {
            "en": "Khadijah (RA) gave the movement its money and its first certainty, and her fortune became the working capital of a religion. Abu Bakr (RA) gave it another kind of credibility: a man of standing, trusted by Quraysh as a genealogist and known never to have bowed to an idol, who accepted on what he knew of the man rather than on a sign.",
            "bn": "খাদিজা (রাঃ) এই দাওয়াতকে দিয়েছেন টাকা আর প্রথম নিশ্চয়তা; তাঁর সম্পদই হয়ে উঠল একটি দ্বীনের চলার পুঁজি। আবু বকর (রাঃ) দিলেন আরেক ধরনের গ্রহণযোগ্যতা। শহরে তাঁর অবস্থান ছিল, বংশতালিকার জ্ঞানের জন্য কুরাইশ তাঁকে মানত, আর সবাই জানত তিনি কোনোদিন মূর্তির সামনে মাথা নোয়াননি। তিনি ঈমান আনলেন কোনো নিদর্শন দেখে নয়, মানুষটাকে চেনার জোরে।"
          },
          {
            "en": "Ali (RA) shows that the message was put to a child and taken seriously by him. He kept it from his father at first out of caution, and, as the sirah reports it, later stood alone with the Prophet ﷺ when the clan was gathered. Zayd (RA) shows the reach downward: once somebody's property, then freed, then declared a son in front of Quraysh, believing before most free men of the city did.",
            "bn": "আলী (রাঃ) দেখিয়ে দেন, বার্তাটা শিশুর সামনেও রাখা হয়েছিল, আর তিনি তা গুরুত্ব দিয়ে নিয়েছিলেন। প্রথমে সাবধানতার জন্য তিনি বাবাকে জানাননি; সিরাত বলছে, পরে গোত্র জড়ো হলে নবী ﷺ-এর পাশে একাই দাঁড়িয়েছিলেন তিনি। যায়েদ (রাঃ) দেখান বার্তাটি কত নিচ পর্যন্ত পৌঁছেছিল। তিনি ছিলেন কারো সম্পত্তি, তারপর মুক্ত, তারপর কুরাইশের সামনে ঘোষিত পুত্র; শহরের বেশির ভাগ স্বাধীন পুরুষের আগেই তিনি ঈমান এনেছিলেন।"
          }
        ]
      },
      {
        "h": { "en": "The Shape of the Ummah", "bn": "উম্মাহর গড়ন" },
        "p": [
          {
            "en": "The composition of the first group set the pattern for everything after it. A wealthy woman, a respected merchant, a boy and a former slave believed together, and no rank among them was allowed to outweigh the others. When the chiefs of Quraysh later offered a hearing on condition that the poor believers leave the room first, those terms were refused.",
            "bn": "প্রথম দলটির গড়নই পরের সবকিছুর ছাঁচ ঠিক করে দিয়েছে। এক সম্পদশালী নারী, এক সম্মানিত ব্যবসায়ী, এক বালক আর এক সাবেক দাস একসঙ্গে ঈমান আনলেন, আর কারো মর্যাদাকে অন্যের উপরে বসতে দেওয়া হলো না। পরে কুরাইশের সরদাররা যখন প্রস্তাব দিল, গরিব ঈমানদারদের আগে ঘর থেকে সরিয়ে দিলে তারা কথা শুনবে, সেই শর্ত মানা হয়নি।"
          },
          {
            "en": "It also fixed the method. Belief spread through people who already trusted one another, which is why five of the ten later given glad tidings came in through Abu Bakr (RA) alone. Within a few years the group needed somewhere to meet, and the house of al-Arqam (RA) near Safa became it. The house came before the mosque, and the friendships came before the house.",
            "bn": "পদ্ধতিটাও এখানেই ঠিক হয়ে যায়। ঈমান ছড়িয়েছে এমন মানুষদের ভেতর দিয়ে, যাঁরা আগে থেকেই একে অন্যকে বিশ্বাস করতেন। তাই পরে জান্নাতের সুসংবাদপ্রাপ্ত দশজনের মধ্যে পাঁচজনই এসেছেন একা আবু বকর (রাঃ)-এর হাত ধরে। কয়েক বছরের মধ্যেই দলটির বসার জায়গা দরকার হলো, আর সাফার কাছে আরকাম (রাঃ)-এর ঘরই হলো সেই জায়গা। মসজিদের আগে এসেছে ঘর, আর ঘরের আগে এসেছে বন্ধুত্ব।"
          }
        ]
      },
      {
        "h": { "en": "Where Your Own Circle Starts", "bn": "আপনার বৃত্তটা শুরু হয় কোথায়" },
        "p": [
          {
            "en": "The first lesson is where to begin. He did not start with the crowd but with the people who ate with him, and those who believed first were the ones who knew him best. Anyone who wants to invite others has the same order: the household, then the friend, then the wider circle. The household is hardest, and it still comes first.",
            "bn": "প্রথম শিক্ষা হলো শুরুটা কোথায় করবেন। তিনি ভিড় দিয়ে শুরু করেননি, শুরু করেছেন যাঁরা তাঁর সঙ্গে খেতেন তাঁদের দিয়ে। আর সবার আগে ঈমান এনেছেন যাঁরা তাঁকে সবচেয়ে ভালো চিনতেন। আপনি যদি কাউকে দ্বীনের দিকে ডাকতে চান, ক্রমটা আপনার হাতেও একই আছে: ঘরের লোক, তারপর বন্ধু, তারপর বাইরের বৃত্ত। ঘরের লোকই সবচেয়ে কঠিন, আর তবু তাঁরাই আগে।"
          },
          {
            "en": "The second is what Abu Bakr (RA) did. He was given no miracle and asked for none; he judged the claim by the character of the man making it, because he had years of evidence about that character. Living so that your word is believed without a sign is what this event asks of a reader, and it is slower work than winning an argument.",
            "bn": "দ্বিতীয় শিক্ষা আবু বকর (রাঃ)-এর কাজটা। তাঁকে কোনো মুজিজা দেখানো হয়নি, তিনি চানওনি। যিনি দাবি করছেন তাঁর চরিত্র দেখেই তিনি দাবিটা যাচাই করেছেন, কারণ সেই চরিত্রের প্রমাণ তাঁর হাতে বছরের পর বছরের। এমনভাবে বাঁচা, যাতে কোনো নিদর্শন ছাড়াই আপনার কথা মানুষ বিশ্বাস করে, এই ঘটনাটি পাঠকের কাছে সেটাই চায়। তর্কে জেতার চেয়ে এ কাজ ধীর, আর অনেক বেশি কঠিন।"
          }
        ]
      }
    ]
  },
  "public": {
    "sections": [
      {
        "h": { "en": "Three Quiet Years", "bn": "চুপচাপ তিনটি বছর" },
        "p": [
          {
            "en": "For about three years after the command to arise and warn, the call stayed quiet; Ibn Ishaq gives that figure. No one was addressed in the public assembly and no claim was made at the Ka'bah. The Prophet ﷺ spoke to individuals he judged ready, and most who accepted came through people they already trusted. Secret here means unadvertised rather than concealed.",
            "bn": "উঠে দাঁড়িয়ে সতর্ক করার হুকুমের পর প্রায় তিন বছর দাওয়াত চলেছে চুপচাপ; সংখ্যাটা ইবনে ইসহাকের। মজলিসে কাউকে সম্বোধন করা হয়নি, কাবার সামনে কোনো ঘোষণাও দেওয়া হয়নি। নবী ﷺ কথা বলতেন এক-একজন মানুষের সঙ্গে, যাঁকে তিনি প্রস্তুত মনে করতেন। আর যাঁরা কবুল করেছেন, তাঁদের বেশির ভাগই এসেছেন চেনা-জানা মানুষের হাত ধরে। গোপন বলতে এখানে বোঝায় প্রচার না করা, লুকিয়ে থাকা নয়; ঈমানদাররা একে অন্যকে ভালোই চিনতেন।"
          },
          {
            "en": "They met at the house of al-Arqam ibn Abi al-Arqam (RA), a young man whose home stood near Safa, and went out to the ravines outside Makkah to pray unseen. Ibn Ishaq records that one such group was interrupted and abused, and that Sa'd ibn Abi Waqqas (RA) struck a man with a camel's jawbone, the first blood shed in the matter of Islam.",
            "bn": "তাঁরা মিলিত হতেন আরকাম ইবনে আবি আল-আরকাম (রাঃ)-এর ঘরে; তরুণ এই সাহাবির বাড়ি ছিল সাফার কাছেই। আর নামাজ পড়তে বেরিয়ে যেতেন মক্কার বাইরের গিরিখাদে, যাতে কেউ না দেখে। ইবনে ইসহাক লিখেছেন, এমনই এক দলকে একদিন বাধা দেওয়া হয় ও গালাগাল করা হয়। সাদ ইবনে আবি ওয়াক্কাস (রাঃ) তখন একজনকে উটের চোয়ালের হাড় দিয়ে আঘাত করেন। ইসলামের পথে এটাই প্রথম ঝরা রক্ত।"
          }
        ]
      },
      {
        "h": { "en": "The Climb Up Safa", "bn": "সাফার চড়াই" },
        "p": [
          {
            "en": "Then 26:214 was revealed: warn your closest kindred. The Prophet ﷺ climbed the hill of Safa and called out clan by clan, O Bani Fihr, O Bani Adi, until Quraysh gathered, and those who could not come sent someone to see what it was. Abu Lahab came too. This was the form a man used to warn the city of a raid, and everyone there knew it.",
            "bn": "এরপর নামল ২৬:২১৪: তোমার নিকটাত্মীয়দের সতর্ক করো। নবী ﷺ সাফা পাহাড়ে উঠে গোত্র ধরে ধরে ডাকতে লাগলেন, হে বনু ফিহর, হে বনু আদি; কুরাইশ জড়ো হলো, আর যারা নিজে আসতে পারল না তারা লোক পাঠাল দেখতে যে ব্যাপারটা কী। আবু লাহাবও এলো সবার সঙ্গে। শহরকে হামলার খবর দিতে হলে মানুষ এভাবেই ডাকত, আর যারা শুনছিল তারা সবাই এই রীতি চিনত।"
          },
          {
            "en": "He asked whether, if he told them cavalry in the valley meant to attack, they would believe him. They answered that they had never known him to say anything but the truth. He said: then I am a warner to you before a severe punishment. Abu Lahab answered, may you perish, all this day, is this why you gathered us. Surah al-Masad came down about him.",
            "bn": "তিনি জিজ্ঞেস করলেন, আমি যদি বলি উপত্যকার ওপাশে অশ্বারোহী বাহিনী তোমাদের উপর হামলার জন্য প্রস্তুত, তোমরা কি আমাকে বিশ্বাস করবে? তারা বলল, আমরা তো আপনাকে সত্য ছাড়া কিছু বলতে শুনিনি। তিনি বললেন, তাহলে আমি কঠিন শাস্তির আগে তোমাদের জন্য একজন সতর্ককারী। আবু লাহাব বলে উঠল, সারাদিন ধ্বংস হোক তোমার, এজন্যই কি আমাদের জড়ো করেছ? তাকে নিয়েই নামল সূরা আল-মাসাদ।"
          },
          {
            "en": "Ibn Ishaq and at-Tabari also preserve a separate gathering, at which the Prophet ﷺ fed the men of Banu Hashim and asked which of them would support him, and only the boy Ali (RA) answered. That report reaches us through weaker channels than the Safa account in Bukhari, and it belongs here as the sirah gives it, not as a sound narration.",
            "bn": "ইবনে ইসহাক ও তাবারি আরেকটি সমাবেশের কথাও রেখেছেন। সেখানে নবী ﷺ বনু হাশিমের লোকদের খাওয়ান, তারপর জিজ্ঞেস করেন, তোমাদের মধ্যে কে আমাকে সাহায্য করবে; জবাব দেন কেবল বালক আলী (রাঃ)। বুখারিতে থাকা সাফার বর্ণনার তুলনায় এ খবরটি এসেছে দুর্বল সূত্রে। তাই এটি এখানে আছে সিরাতের বয়ান হিসেবে, সহিহ হাদিস হিসেবে নয়।"
          }
        ]
      },
      {
        "h": { "en": "Commanded to Proclaim", "bn": "প্রকাশ্যে বলার হুকুম" },
        "p": [
          {
            "en": "26:214 is a single short command, and it fixes the mission's first circle: the nearest kin. What follows is as instructive. 26:215 tells him to lower his wing to the believers who follow him, and 26:216 tells him what to say if they disobey him. The order to confront outsiders arrives together with an order about tenderness towards insiders.",
            "bn": "২৬:২১৪ ছোট্ট একটি হুকুম, আর তা দাওয়াতের প্রথম বৃত্তটা ঠিক করে দেয়: সবচেয়ে কাছের আত্মীয়রা। এরপরের আয়াতগুলোও কম শিক্ষণীয় নয়। ২৬:২১৫ বলছে, যেসব ঈমানদার তাঁর অনুসরণ করে তাদের জন্য অনুকম্পার বাহু প্রসারিত করে দিতে। ২৬:২১৬ শিখিয়ে দিচ্ছে, তারা অবাধ্য হলে কী বলতে হবে। বাইরের মানুষের মুখোমুখি হওয়ার হুকুমের সঙ্গেই আসে ঘরের মানুষের প্রতি কোমল হওয়ার হুকুম।"
          },
          {
            "en": "15:94 widens it: proclaim openly what you are commanded, and turn away from the polytheists. 15:95 promises immediately after it that Allah is sufficient for him against the mockers, which is the answer to what actually happened on that hill. Mockery, not argument, was the first weapon Quraysh reached for, and the verse names it before it names anything else.",
            "bn": "১৫:৯৪ বৃত্তটা আরও বড় করে দেয়: যে হুকুম দেওয়া হয়েছে তা প্রকাশ্যে জোরেশোরে বলো, আর মুশরিকদের থেকে মুখ ফিরিয়ে নাও। ঠিক পরের আয়াত ১৫:৯৫ কথা দিচ্ছে, ঠাট্টাকারীদের বিরুদ্ধে আল্লাহই তাঁর জন্য যথেষ্ট। ওই পাহাড়ে আসলে যা ঘটেছিল, এটাই তার জবাব। কুরাইশ প্রথমে হাতে তুলে নিয়েছিল যুক্তি নয়, ঠাট্টা; আর আয়াতটি অন্য কিছুর আগে ঠাট্টার কথাই বলে।"
          },
          {
            "en": "111:1-3 answers Abu Lahab in his own word. He had said may you perish, all this day; the surah gives that word back to him, this time with his own two hands as its subject: may the hands of Abu Lahab perish, and ruined is he. It adds that his wealth and gains will not avail him, and that he will burn in a flaming fire. It is the Quran's only naming of a living opponent of the Prophet ﷺ.",
            "bn": "১১১:১-৩ আবু লাহাবকে জবাব দেয় তার নিজের ভাষাতেই। সে বলেছিল, সারাদিন ধ্বংস হোক তোমার; সূরাটি তার সেই শব্দটাই ফিরিয়ে দেয়, তবে এবার তার নিজের দুই হাতের উপর: আবু লাহাবের হাত দু’টো ধ্বংস হোক, ধ্বংস হোক সে নিজেও। এরপর বলা হয়, তার ধন-সম্পদ আর যা সে কামিয়েছে কোনো কাজে আসবে না, আর সে লেলিহান আগুনে পুড়বে। নবী ﷺ-এর জীবিত কোনো বিরোধীর নাম কুরআন একমাত্র এখানেই নিয়েছে।"
          }
        ]
      },
      {
        "h": { "en": "What Ibn Abbas Narrated", "bn": "ইবনে আব্বাস যা বর্ণনা করেছেন" },
        "p": [
          {
            "en": "Sahih al-Bukhari 4770, from Ibn Abbas (RA), sits in the collection's commentary on Surah ash-Shu'ara, in the chapter named for 26:214. In its wording the Prophet ﷺ ascended Safa and called out O Bani Fihr, O Bani Adi, naming the clans of Quraysh until they assembled, and a man who could not come sent someone to find out what the call was about.",
            "bn": "সহিহ বুখারি ৪৭৭০, ইবনে আব্বাস (রাঃ)-এর সূত্রে, আছে সংকলনের সূরা আশ-শুআরার তাফসির অংশে, ২৬:২১৪ আয়াতের নামে রাখা অধ্যায়ে। তার ভাষ্য অনুযায়ী নবী ﷺ সাফায় উঠে ডাকলেন, হে বনু ফিহর, হে বনু আদি; এভাবে কুরাইশের গোত্রগুলোর নাম ধরে ডাকতে থাকলেন যতক্ষণ না সবাই জড়ো হলো। যে নিজে আসতে পারেনি, সে লোক পাঠাল দেখতে যে ডাকটা কীসের।"
          },
          {
            "en": "The same hadith carries the exchange about the cavalry, their answer that they had found him nothing but truthful, his declaration as a warner before a severe punishment, Abu Lahab's retort and the revelation of the surah. Sahih Muslim, in its Book of Faith, keeps a version from Abu Hurayrah (RA) in which the Prophet ﷺ calls his clans and his own daughter, telling each that he cannot avail them anything against Allah.",
            "bn": "একই হাদিসে আছে অশ্বারোহী বাহিনীর কথাটা, তাদের জবাব যে তারা তাঁকে সত্যবাদী ছাড়া কিছু পায়নি, তাঁর ঘোষণা যে তিনি কঠিন শাস্তির আগে সতর্ককারী, আবু লাহাবের সেই কটু কথা আর সূরাটির নাজিল হওয়া। সহিহ মুসলিমের কিতাবুল ইমানে আছে আবু হুরায়রা (রাঃ)-এর সূত্রে আরেকটি বয়ান, যেখানে নবী ﷺ নিজের গোত্রগুলোকে আর নিজের মেয়েকেও ডেকে বলেন, আল্লাহর কাছে আমি তোমাদের কোনো কাজে আসতে পারব না।"
          }
        ]
      },
      {
        "h": { "en": "Two Uncles", "bn": "দুই চাচা" },
        "p": [
          {
            "en": "Abu Lahab was the Prophet's ﷺ uncle and a close neighbour, and that morning he answered a warning with an insult in front of the assembled clans. His opposition mattered because it came from inside the family. It told Quraysh that the Hashimite tie could break over this, and it made his household a centre of the campaign against the message.",
            "bn": "আবু লাহাব ছিল নবী ﷺ-এর চাচা আর কাছের প্রতিবেশী। সেই সকালে জড়ো হওয়া গোত্রগুলোর সামনে সে সতর্কবাণীর জবাব দিল গালি দিয়ে। তার বিরোধিতা গুরুত্ব পেয়েছিল, কারণ তা এসেছিল পরিবারের ভেতর থেকেই। কুরাইশ বুঝে গেল, এ ব্যাপারে হাশিমি আত্মীয়তার বাঁধনও ছেঁড়া যায়। আর তার ঘরটাই হয়ে উঠল এ দাওয়াতের বিরুদ্ধে প্রচারের একটা কেন্দ্র।"
          },
          {
            "en": "Abu Talib, another uncle, took the opposite view of the same obligation. The sirah reports that he did not accept the message, but he refused every demand that he hand his nephew over, and that protection is much of why the Makkan years ran as long as they did. His son Ali (RA) was already a believer, standing on the other side of his father's position.",
            "bn": "আরেক চাচা আবু তালিব একই দায়িত্বকে দেখলেন উল্টোভাবে। সিরাত বলছে, তিনি বার্তাটি কবুল করেননি, কিন্তু ভাতিজাকে তুলে দেওয়ার প্রতিটি দাবি তিনি ফিরিয়ে দিয়েছেন। মক্কার বছরগুলো যে এতদিন টিকল, তার বড় কারণ এই আশ্রয়। আর তাঁরই ছেলে আলী (রাঃ) তখন ঈমানদার, বাবার অবস্থানের উল্টো দিকেই দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": { "en": "The Call Becomes Public", "bn": "আহ্বান প্রকাশ্যে এলো" },
        "p": [
          {
            "en": "Before Safa, Islam was a private conviction among people who knew one another. After it, it was a public claim against the religion of the sanctuary, made by name, to the men who ran that sanctuary. Quraysh now had to answer it, and their answer shaped the next decade: pressure on the clans, then on the enslaved and unprotected, then the boycott.",
            "bn": "সাফার আগে ইসলাম ছিল চেনা মানুষদের ভেতরে থাকা ব্যক্তিগত বিশ্বাস। এরপর তা হয়ে দাঁড়াল প্রকাশ্য দাবি। হারামের ধর্মের বিরুদ্ধে দাবি, আর তিনি তা তুলেছেন নাম ধরে, যারা সেই হারাম চালাত তাদেরই মুখের সামনে। কুরাইশকে এবার জবাব দিতেই হতো। তারা যেভাবে জবাব দিল, তাতেই পরের দশ বছরের চেহারা তৈরি হলো: প্রথমে গোত্রগুলোর উপর চাপ, তারপর দাস ও আশ্রয়হীনদের উপর, তারপর বয়কট।"
          },
          {
            "en": "The persecution that fills the next stretch of the timeline starts here, and so does the migration to Abyssinia and finally to Madinah. It also fixed a principle the community kept: the message is delivered whole, to everybody, with no private version for the powerful. He told his own daughter, in Muslim's wording, that he could not avail her anything against Allah.",
            "bn": "সময়রেখার পরের অংশজুড়ে যে নির্যাতন, তার শুরু এখানেই; হাবশায় হিজরত আর শেষ পর্যন্ত মদিনায় হিজরতেরও শুরু এখানেই। এখানেই আরেকটি নীতি পাকা হয়ে গেল, যা এই সমাজ ধরে রেখেছে: বার্তা পুরোটাই পৌঁছাতে হবে, সবার কাছে, ক্ষমতাবানদের জন্য আলাদা কোনো সংস্করণ নেই। মুসলিমের বয়ানে তিনি নিজের মেয়েকেও বলেছেন, আল্লাহর কাছে আমি তোমার কোনো কাজে আসতে পারব না।"
          }
        ]
      },
      {
        "h": { "en": "Speaking Without Shouting", "bn": "চিৎকার না করে বলা" },
        "p": [
          {
            "en": "The method is as carryable as the courage. He established his credibility before making his claim, asked a question that made them state his record themselves, and only then said what they would not want to hear. He addressed people by their clan names, which is to say by who they actually were, and he insulted nobody from that hill.",
            "bn": "সাহসের মতো তাঁর পদ্ধতিটাও গ্রহণ করার মতো। দাবি তোলার আগে তিনি নিজের বিশ্বাসযোগ্যতা দাঁড় করিয়ে নিলেন, এমন প্রশ্ন করলেন যাতে তারা নিজেরাই তাঁর সম্পর্কে সাক্ষ্য দেয়, তারপর বললেন সেই কথাটা যা তারা শুনতে চাইত না। তিনি মানুষকে ডেকেছেন তাদের গোত্রের নাম ধরে, অর্থাৎ তাদের আসল পরিচয় ধরেই। আর ওই পাহাড় থেকে তিনি কাউকে গালি দেননি।"
          },
          {
            "en": "The pairing in 26:214-215 is the practical instruction. Warn the people closest to you, and be gentle with those who follow you. Most of us neglect the second: a man can be bold with strangers and short with the believers in his own house. The two came down as one unit, and are meant to be carried as one.",
            "bn": "২৬:২১৪-২১৫ আয়াত দুটি জোড়া বেঁধেই আসল কাজের কথা বলে। সবচেয়ে কাছের মানুষদের সতর্ক করো, আর যারা তোমার সঙ্গে আছে তাদের সঙ্গে নরম হও। আমরা বেশির ভাগই দ্বিতীয়টা অবহেলা করি; বাইরের মানুষের সামনে সাহসী, অথচ নিজের ঘরের ঈমানদারদের সঙ্গে রুক্ষ। হুকুম দুটি একসঙ্গেই নেমেছে, আর একসঙ্গেই বহন করার কথা।"
          }
        ]
      }
    ]
  },
  "persecution": { sections: [
    { h: { en: "Mockery Turns to Hands", bn: "ঠাট্টা থেকে হাত ওঠা" }, p: [
      { en: "By about 613 CE the call had stopped being private. The Prophet ﷺ had climbed as-Safa and addressed Quraysh openly, and the circle that had gathered quietly for some three years, at al-Arqam's house near that same hill and in the ravines outside the valley, was now a known faction in the city. Quraysh began with ridicule and with pressure applied inside families. When that failed the answer moved to hands, hardest between roughly 613 and 615 CE.", bn: "৬১৩ খ্রিস্টাব্দের কাছাকাছি সময়ে দাওয়াত আর গোপন থাকল না। নবী ﷺ সাফা পাহাড়ে উঠে কুরাইশদের সামনে সোজাসুজি কথা বললেন। প্রায় তিন বছর ধরে ছোট দলটি চুপচাপ জমা হচ্ছিল ওই পাহাড়ের কাছেই আরকামের ঘরে, আর উপত্যকার বাইরের গিরিখাদে। তারা এখন শহরের চেনা একটা পক্ষ। কুরাইশ শুরু করল ঠাট্টা দিয়ে, আর পরিবারের ভেতরে চাপ দিয়ে। তাতে কাজ না হওয়ায় এবার গায়ে হাত পড়তে শুরু করল, আর ৬১৩ থেকে ৬১৫ খ্রিস্টাব্দের মধ্যে নির্যাতন সবচেয়ে ভারী হয়ে ওঠে।" },
      { en: "Makkah had no ruler, no court and no police. A man was safe because his clan would demand blood or payment if he were harmed, so danger was measured by lineage rather than by conviction. A nobleman's son who believed was confined, argued with and shamed. A slave, a freedman, or a man from outside the valley had nobody at all to answer for him.", bn: "মক্কায় শাসক ছিল না, আদালত ছিল না, পুলিশও না। মানুষ নিরাপদ থাকত গোত্রের জোরে; গায়ে হাত পড়লে গোত্র রক্ত বা ক্ষতিপূরণ দাবি করবে। তাই বিপদের মাপ ঠিক হতো বংশ দেখে, ঈমানের জোর দেখে নয়। সম্ভ্রান্ত ঘরের ছেলে ঈমান আনলে তাকে ঘরে আটকে রাখা হতো, বোঝানো হতো, লজ্জা দেওয়া হতো। কিন্তু দাস, আজাদ করা গোলাম কিংবা উপত্যকার বাইরে থেকে আসা লোকের হয়ে কথা বলার কেউ ছিল না।" },
    ] },
    { h: { en: "Who Could Be Touched", bn: "যাদের গায়ে হাত তোলা যেত" }, p: [
      { en: "Ibn Ishaq keeps the names. Bilal ibn Rabah (RA) belonged to Umayyah ibn Khalaf of Banu Jumah, who laid him on the sand at midday with a rock on his chest; the word he answered with was Ahad, Ahad. Khabbab ibn al-Aratt (RA), a blacksmith sold into the city as a boy, was held on heated stones, and Umar (RA) is reported to have seen the marks still on his back years later.", bn: "নামগুলো ইবনে ইসহাক লিখে রেখেছেন। বিলাল ইবনে রাবাহ (রাঃ) ছিলেন বনু জুমাহর উমাইয়া ইবনে খালাফের দাস। দুপুরের রোদে তাঁকে বালির উপর শুইয়ে বুকে পাথর চাপিয়ে দেওয়া হতো, আর জবাবে তিনি বলতেন একটাই কথা: আহাদ, আহাদ। খাব্বাব ইবনুল আরাত (রাঃ) ছোটবেলায় মক্কায় বিক্রি হয়ে আসা কামার। তাঁকে তাতানো পাথরের উপর চেপে ধরা হতো; বহু বছর পরেও উমর (রাঃ) তাঁর পিঠের দাগ দেখেছিলেন বলে বর্ণনা আছে।" },
      { en: "The household of Yasir (RA) had the worst of it, and their account belongs to its own entry in this timeline, not to this one. Against the Prophet ﷺ himself, Abu Talib's protection left Quraysh only what shamed rather than injured: refuse thrown at his door and placed on his back as he prayed, the campaign of Abu Lahab, and envoys sent to offer him wealth and rank if he would stop.", bn: "সবচেয়ে বেশি সহ্য করতে হয়েছে ইয়াসির (রাঃ)-এর পরিবারকে, আর তাঁদের কথা এই তালিকায় আলাদা ঘটনা হিসেবেই আছে। নবী ﷺ-এর গায়ে হাত তোলার সুযোগ আবু তালিবের আশ্রয় কুরাইশকে দেয়নি। তাই তারা বেছে নিল অপমান: দরজায় ময়লা ফেলা, সালাতের সময় পিঠে নোংরা চাপানো, আবু লাহাবের লেগে থাকা বিরোধিতা, আর ধনসম্পদ ও নেতৃত্বের লোভ দেখিয়ে দূত পাঠানো।" },
    ] },
    { h: { en: "Verses for the Tested", bn: "পরীক্ষিতদের জন্য আয়াত" }, p: [
      { en: "Surah al-Ankabut is Meccan, and 29:2-3 asks the sufferers directly whether people imagine they will be left to say we believe and not be tried, when those before them were tried, so that Allah makes evident the truthful and the liars. The Madinan 2:214 looks back on the same pattern: earlier communities touched by poverty and hardship and shaken until their messenger and those with him asked when the help of Allah would come.", bn: "সূরা আনকাবুত মক্কি, আর ২৯:২-৩ আয়াত নির্যাতিতদের সরাসরি জিজ্ঞেস করে: মানুষ কি ভাবে, ‘আমরা ঈমান এনেছি’ বললেই ছেড়ে দেওয়া হবে, পরীক্ষা করা হবে না? তাদের আগের লোকদেরও পরীক্ষা করা হয়েছিল, যাতে কারা সত্যবাদী আর কারা মিথ্যাবাদী তা প্রকাশ পায়। মাদানি ২:২১৪ আয়াত একই ছাঁচ ফিরে দেখে। আগের জাতিগুলো অভাব আর মুসিবতে এমন কেঁপে উঠেছিল যে তাদের নবী আর তাঁর সঙ্গের মুমিনরা পর্যন্ত বলে উঠেছিলেন, আল্লাহর সাহায্য কখন আসবে?" },
      { en: "Two short passages are read by the commentators against Abu Bakr's (RA) spending in these years. 90:12-13 asks what can make you know the difficult pass, and answers first with the freeing of a slave. 92:17-21 describes one who gives his wealth to purify himself, owing no favour that has to be repaid, seeking only the face of his Lord. The concession at 16:106 came out of this persecution and has its own entry.", bn: "দুটি ছোট অংশ মুফাসসিরগণ এ সময়ের আবু বকর (রাঃ)-এর খরচের সাথে মিলিয়ে পড়েন। ৯০:১২-১৩ আয়াত জিজ্ঞেস করে, কঠিন গিরিপথ কী তা আপনি কী করে জানবেন; জবাব শুরু হয় দাসমুক্তি দিয়ে। ৯২:১৭-২১ আয়াত বলে সেই লোকের কথা, যে নিজেকে পবিত্র করতে সম্পদ দেয়, কারও কাছে শোধ করার মতো কোনো অনুগ্রহ যার নেই, আর যে চায় কেবল তার প্রতিপালকের চেহারা। আর ১৬:১০৬ আয়াতের ছাড় এই নির্যাতন থেকেই এসেছে, যার আলাদা ঘটনা এখানে আছে।" },
    ] },
    { h: { en: "In the Shade of the Ka'bah", bn: "কাবার ছায়ায়" }, p: [
      { en: "Sahih al-Bukhari 3612 keeps the exchange in Khabbab's (RA) own words. He and others came to the Prophet ﷺ while he was reclining in the shade of the Ka'bah with his cloak folded under his head, and asked whether he would not seek help for them, whether he would not supplicate for them. He answered with history: men before them were put into a pit and sawn in two, and none of it turned them from their religion.", bn: "সহিহ বুখারি ৩৬১২ কথাটা খাব্বাব (রাঃ)-এর মুখেই ধরে রেখেছে। তিনি আর কয়েকজন এলেন; নবী ﷺ তখন কাবার ছায়ায় নিজের চাদর মাথার নিচে গুটিয়ে হেলান দিয়ে আছেন। তাঁরা বললেন, আপনি কি আমাদের জন্য সাহায্য চাইবেন না, দোয়া করবেন না? জবাবে তিনি ইতিহাস শোনালেন। আগের যুগে মানুষকে গর্তে ফেলে করাত দিয়ে দুই ভাগ করা হতো, তবু কেউ দ্বীন ছাড়েনি।" },
      { en: "Then a promise and a rebuke together. Allah will complete this matter until a rider goes from San'a to Hadramawt fearing none but Allah, and the wolf for his sheep; but you are being hasty. Nothing in it promised rescue from that week. It gave them the outcome, and corrected the timetable the questioners had brought. That is al-Bukhari's wording, and it should not be blended with the other variants.", bn: "এরপর একসাথে ওয়াদা আর ধমক। আল্লাহ এই কাজ পূর্ণ করবেনই; সানআ থেকে হাদরামাউত পর্যন্ত একজন আরোহী যাবে, আল্লাহ ছাড়া কাউকে ভয় করবে না, আর ভেড়ার জন্য নেকড়েকে ভয় করবে। কিন্তু তোমরা তাড়াহুড়ো করছ। সেই সপ্তাহের কষ্ট থেকে বাঁচার কোনো কথা এতে নেই। এতে আছে শেষ পরিণতি, আর প্রশ্নকারীরা যে সময়সূচি নিয়ে এসেছিলেন তার সংশোধন। এ হলো বুখারির শব্দ; অন্য বর্ণনার শব্দের সাথে একে মিশিয়ে ফেলা ঠিক নয়।" },
    ] },
    { h: { en: "Owners, Slaves and a Buyer", bn: "মালিক, দাস আর এক ক্রেতা" }, p: [
      { en: "Bilal (RA) had no clan, which is precisely why he was made the example, and some of the people who later heard his call to prayer in Madinah had watched him held down on that sand. Khabbab (RA) had been sold into Makkah as a boy and had no relatives either. Umayyah ibn Khalaf and Abu Jahl are named here for what they did: they picked out the people nobody would avenge.", bn: "বিলাল (রাঃ)-এর গোত্র ছিল না, আর ঠিক এ কারণেই তাঁকে দৃষ্টান্ত বানানো হয়েছিল। পরে মদিনায় যাঁরা তাঁর আজান শুনতেন, তাঁদের কেউ কেউ তাঁকে ওই বালির উপর চেপে ধরা অবস্থায় দেখেছিলেন। খাব্বাব (রাঃ)-ও ছোটবেলায় মক্কায় বিক্রি হয়ে এসেছিলেন, তাঁরও আত্মীয় ছিল না। উমাইয়া ইবনে খালাফ আর আবু জাহলের নাম এখানে আসে তাদের কাজের জন্য: তারা বেছে নিয়েছিল সেই মানুষগুলোকে, যাদের হয়ে কেউ বদলা নেবে না।" },
      { en: "Abu Bakr (RA) answered with his purse. He bought Bilal (RA) and freed him on the spot, and Ibn Ishaq lists others he freed the same way, among them Amir ibn Fuhayrah (RA) and several enslaved women. His father told him he was wasting money on the weak and should rather have freed strong men who could defend him. He answered that he wanted nothing except what is with Allah.", bn: "আবু বকর (রাঃ) জবাব দিলেন নিজের থলি দিয়ে। বিলাল (রাঃ)-কে কিনে সেখানেই মুক্ত করে দিলেন। ইবনে ইসহাক একইভাবে আজাদ করা আরও কয়েকজনের নাম দেন, তাঁদের মধ্যে আমির ইবনে ফুহায়রা (রাঃ) আর কয়েকজন দাসী। তাঁর বাবা বললেন, দুর্বল লোকের পেছনে টাকা নষ্ট করছ; শক্তসমর্থ লোক মুক্ত করলে তারা তোমাকে বাঁচাত। জবাবে তিনি বললেন, আল্লাহর কাছে যা আছে তা ছাড়া তিনি আর কিছুই চান না।" },
    ] },
    { h: { en: "What the Sand Produced", bn: "বালির উপর যা তৈরি হলো" }, p: [
      { en: "The persecution did not break the community; it sorted it, and then it moved it. Within about two years the Prophet ﷺ would send a group across the sea to Abyssinia, an entry that comes later in this timeline, and the pressure described above is what put them on the water. It also produced a ruling that has stood ever since, excusing the words forced from a believer whose heart holds firm.", bn: "নির্যাতন সমাজটাকে ভাঙতে পারেনি; বরং বাছাই করেছে, তারপর সরিয়ে দিয়েছে। বছর দুয়েকের মধ্যেই নবী ﷺ একদল মানুষকে সমুদ্র পেরিয়ে আবিসিনিয়ায় পাঠালেন; উপরে যে চাপের কথা বলা হলো, সেটাই তাঁদের নৌকায় তুলেছিল। সেই হিজরতের কথা এই তালিকায় সামনে আসছে। এখান থেকেই এসেছে সেই বিধান, যা আজও চালু আছে: দিল ঈমানে অবিচল থাকলে জোর করে বলানো কথায় বান্দা ধরা পড়ে না।" },
      { en: "It settled the question of rank for good. The people Quraysh could hurt at no cost were the people the Quran lifted, and a city that had priced a man by his clan would later be told that the noblest before Allah is the one most conscious of Him. The conversions of Hamzah (RA) and Umar (RA), each with its own entry here, then gave the believers cover enough to pray at the Ka'bah.", bn: "মর্যাদার প্রশ্নটাও এখানেই চুকে গেল। কুরাইশ বিনা খরচে যাদের কষ্ট দিতে পারত, কুরআন তাদেরই উঁচু করল। যে শহর মানুষের দাম ঠিক করত গোত্র দেখে, তাকেই পরে শুনতে হলো, আল্লাহর কাছে সবচেয়ে সম্মানিত সেই, যে সবচেয়ে বেশি তাকওয়া রাখে। এরপর হামজা (রাঃ) আর উমর (রাঃ)-এর ইসলাম গ্রহণ, দুটোরই আলাদা ঘটনা এখানে আছে, ঈমানদারদের এমন আড়াল দিল যে কাবার সামনে সালাত পড়া সম্ভব হলো।" },
    ] },
    { h: { en: "Paying For It Now", bn: "এখন এর দাম দেওয়া" }, p: [
      { en: "Little of this transfers as suffering. The arrangement does. Ask who in your own circle has nobody to answer for them: a convert whose family has cut her off, a worker with no contract, a student far from home. Then be the one who answers. Abu Bakr (RA) made no speech about slavery. He paid the market price, repeatedly, for people who could return him nothing.", bn: "এই কষ্টটা হুবহু আপনার জীবনে আসবে না, আসার কথাও নয়। যা আসে তা হলো বন্দোবস্তটা। খেয়াল করুন, আপনার চারপাশে কার হয়ে কথা বলার কেউ নেই: যে বোন ইসলাম গ্রহণ করায় পরিবার মুখ ফিরিয়ে নিয়েছে, যে শ্রমিকের হাতে কোনো কাগজ নেই, যে ছাত্র বাড়ি থেকে বহু দূরে। আপনিই তার হয়ে দাঁড়ান। আবু বকর (রাঃ) দাসপ্রথা নিয়ে বক্তৃতা দেননি। তিনি বারবার বাজারদরে দাম দিয়েছেন এমন মানুষের জন্য, যারা তাঁকে কিছুই ফিরিয়ে দিতে পারত না।" },
      { en: "And take the answer given in that shade as it was given. The Companions asked for relief and were told that the matter would be completed and that they were hurrying. Ask for both by all means, but do not read a delay as an absence. Keep the daily obligations running through a hard season, name an injustice honestly without abusing the people behind it, and leave the timing where it belongs.", bn: "আর কাবার ছায়ায় যে জবাব এসেছিল, সেটাকে যেমন আছে তেমনই নিন। সাহাবিরা সাহায্য চেয়েছিলেন, শুনলেন কাজ পূর্ণ হবে আর তাঁরা তাড়াহুড়ো করছেন। আপনি দুটোই চান, তাতে দোষ নেই; কিন্তু দেরিকে অনুপস্থিতি ভাববেন না। কঠিন সময়েও দৈনিক আমলগুলো চালু রাখুন, জুলুমকে জুলুম বলুন কিন্তু মানুষকে গালি দেবেন না, আর সময়ের হিসাবটা যাঁর হাতে তাঁর হাতেই থাক।" },
    ] },
  ] },
  "abyssinia": { sections: [
    { h: { en: "A King Who Wrongs No One", bn: "যে রাজার কাছে কেউ জুলুম পায় না" }, p: [
      { en: "In about 615 CE, the fifth year of the call, the persecution described in its own entry here had reached a point Makkah had no answer to. The Prophet ﷺ told a number of the believers to leave for Abyssinia. Ibn Ishaq preserves his words: there is a king there under whom nobody is wronged, and it is a land of truthfulness.", bn: "প্রায় ৬১৫ খ্রিস্টাব্দে, দাওয়াতের পঞ্চম বছরে, এই তালিকায় আলাদা ঘটনা হিসেবে বলা সেই নির্যাতন এমন জায়গায় পৌঁছাল যার কোনো জবাব মক্কার কাছে ছিল না। নবী ﷺ কয়েকজন ঈমানদারকে আবিসিনিয়ায় চলে যেতে বললেন। ইবনে ইসহাক তাঁর কথাগুলো ধরে রেখেছেন: ওখানে এমন এক রাজা আছেন যাঁর কাছে কেউ জুলুমের শিকার হয় না, ওটা সত্যের দেশ।" },
      { en: "Abyssinia was a Christian kingdom on the far side of the Red Sea, and the ruler the Arabs called the Najashi is named in the sources as Ashamah. Trade already ran between its ports and Makkah, so this was no leap into an unknown country. It was a route Quraysh merchants used themselves, which is why they could follow the migrants across it.", bn: "আবিসিনিয়া ছিল লোহিত সাগরের ওপারে খ্রিস্টান রাজ্য, আর আরবরা যাঁকে নাজ্জাশি বলত, বিভিন্ন বর্ণনায় তাঁর নাম আসহামা। সেখানকার বন্দরগুলোর সাথে মক্কার ব্যবসা আগে থেকেই চালু ছিল, তাই এ যাত্রা অচেনা দেশে ঝাঁপ দেওয়া নয়। কুরাইশ বণিকেরা নিজেরাই এ পথ ব্যবহার করত, আর সেজন্যই তারা মুহাজিরদের পিছু পিছু সেখানে পৌঁছাতে পেরেছিল।" },
    ] },
    { h: { en: "Two Crossings and an Embassy", bn: "দুইবার পাড়ি আর এক দূতিয়ালি" }, p: [
      { en: "Ibn Ishaq counts a first party of about eleven men and four women, slipping out to the port of Shu'aybah. Uthman ibn Affan (RA) went with his wife Ruqayyah (RA), and Ibn Ishaq places Uthman ibn Maz'un (RA) at the head of the group. A report then reached them that Quraysh had accepted Islam. It was false, and several of those who came back needed a Makkan protector to enter the city again.", bn: "ইবনে ইসহাকের হিসাবে প্রথম দলে ছিলেন প্রায় এগারোজন পুরুষ আর চারজন নারী, যাঁরা চুপিসারে শুআইবা বন্দরের দিকে বেরিয়ে পড়েন। উসমান ইবনে আফফান (রাঃ) গিয়েছিলেন স্ত্রী রুকাইয়া (রাঃ)-কে নিয়ে, আর ইবনে ইসহাক দলের আগে রাখেন উসমান ইবনে মাজউন (রাঃ)-কে। এরপর তাঁদের কাছে খবর গেল, কুরাইশ ইসলাম গ্রহণ করেছে। খবরটা ভুল ছিল, আর যাঁরা ফিরলেন তাঁদের কয়েকজনকে শহরে ঢুকতে মক্কার কারও আশ্রয় নিতে হলো।" },
      { en: "A second and much larger migration followed. Ibn Ishaq counts eighty-three men, noting a doubt over whether Ammar ibn Yasir (RA) was among them, and eighteen or nineteen women. Quraysh sent two envoys after them with gifts for the king and his generals; Ibn Ishaq names Amr ibn al-As and Abdullah ibn Abi Rabi'ah. The generals were persuaded. The Negus refused to surrender anyone he had not heard out, and summoned the Muslims.", bn: "এরপর হলো দ্বিতীয় ও অনেক বড় হিজরত। ইবনে ইসহাক গোনেন তিরাশিজন পুরুষ, তবে আম্মার ইবনে ইয়াসির (রাঃ) তাঁদের মধ্যে ছিলেন কিনা তা নিয়ে তিনি সন্দেহ জানান, আর নারী আঠারো কিংবা উনিশজন। কুরাইশ রাজা ও তাঁর সেনাপতিদের জন্য উপহার দিয়ে দুজন দূত পাঠাল; ইবনে ইসহাক তাঁদের নাম দেন আমর ইবনুল আস আর আবদুল্লাহ ইবনে আবি রাবিআ। সেনাপতিরা রাজি হয়ে গেলেন। নাজ্জাশি বললেন, কথা না শুনে তিনি কাউকে তুলে দেবেন না, আর মুসলিমদের দরবারে ডাকলেন।" },
    ] },
    { h: { en: "Maryam Read to a Christian Court", bn: "খ্রিস্টান দরবারে মারইয়ামের আয়াত" }, p: [
      { en: "Asked whether he had anything of what had been revealed, Ja'far ibn Abi Talib (RA) recited from Surah Maryam. The passage is 19:16-33. Maryam withdraws from her family to a place toward the east and takes a screen; the angel comes to her as a well-proportioned man with news of a pure boy; she asks how she can have a boy when no man has touched her.", bn: "যা নাযিল হয়েছে তার কিছু আছে কিনা জিজ্ঞেস করা হলে জাফর ইবনে আবি তালিব (রাঃ) সূরা মারইয়াম থেকে পড়লেন। অংশটি ১৯:১৬-৩৩। মারইয়াম পরিবার ছেড়ে পূর্ব দিকে সরে গিয়ে পর্দা টেনে নেন; ফেরেশতা তাঁর কাছে আসেন পূর্ণাঙ্গ মানুষের রূপে আর এক পবিত্র পুত্রের খবর দেন; তিনি বলেন, কোনো পুরুষ আমাকে স্পর্শ করেনি, তবু আমার ছেলে হবে কী করে?" },
      { en: "Then the child answers them from the cradle at 19:30: I am the servant of Allah, He has given me the Scripture and made me a prophet. The passage closes at 19:33 with peace upon him the day he was born, the day he dies and the day he is raised alive. Ibn Ishaq says the Negus wept until his beard was wet, and the bishops around him wept with him.", bn: "এরপর ১৯:৩০ আয়াতে দোলনার শিশু তার সম্প্রদায়কে জবাব দেয়: আমি আল্লাহর বান্দা, তিনি আমাকে কিতাব দিয়েছেন আর নবী করেছেন। অংশটি শেষ হয় ১৯:৩৩ আয়াতে, যেখানে শান্তি নেমে আসে তার উপর যেদিন সে জন্মেছে, যেদিন তার মৃত্যু হবে আর যেদিন তাকে জীবিত করে ওঠানো হবে। ইবনে ইসহাক বলেন, নাজ্জাশি কাঁদলেন এমনভাবে যে তাঁর দাড়ি ভিজে গেল, আর তাঁর পাশের ধর্মযাজকেরাও কাঁদলেন।" },
      { en: "Two other verses stand over the episode. The Madinan 5:82-83 says the nearest of people in affection to the believers are those who say we are Christians, because among them are priests and monks and they are not arrogant, and that their eyes overflow at what they recognise of the truth. And 16:41 promises those who emigrated after being wronged a good settlement here and a greater reward hereafter.", bn: "আরও দুটি আয়াত এই ঘটনার উপর দাঁড়িয়ে আছে। মাদানি ৫:৮২-৮৩ বলে, ঈমানদারদের প্রতি বন্ধুত্বে সবচেয়ে কাছের তারাই, যারা বলে আমরা নাসারা; কারণ তাদের মধ্যে আলিম ও সংসারবিরাগী আছে আর তারা অহংকার করে না, আর সত্য চিনতে পেরে তাদের চোখ ভিজে ওঠে। আর ১৬:৪১ আয়াত জুলুমের শিকার হয়ে হিজরত করা মানুষদের জন্য ওয়াদা করে দুনিয়ায় উত্তম আবাস আর আখিরাতে তার চেয়ে বড় পুরস্কার।" },
    ] },
    { h: { en: "What the Sahihs Attach", bn: "সহিহ গ্রন্থে যা আছে" }, p: [
      { en: "The scene in the court is sirah, not hadith, and it should be cited as what it is. Ibn Ishaq preserves it from Umm Salamah (RA), who was present in Abyssinia, and Ahmad carries it in his Musnad. It is not in Sahih al-Bukhari or Sahih Muslim: the long speech and the exchange about Isa (AS) rest on that sirah transmission.", bn: "দরবারের দৃশ্যটা সিরাতের বর্ণনা, হাদিসগ্রন্থের নয়, আর সেভাবেই একে উল্লেখ করা উচিত। ইবনে ইসহাক এ বর্ণনা পেয়েছেন উম্মে সালামা (রাঃ)-এর সূত্রে, যিনি নিজেই আবিসিনিয়ায় ছিলেন, আর আহমাদ তাঁর মুসনাদে সেটি এনেছেন। সহিহ বুখারি বা সহিহ মুসলিমে এ বর্ণনা নেই। জাফরের লম্বা বক্তব্য আর ঈসা (আঃ) নিয়ে কথাবার্তা টিকে আছে ওই সিরাতের সূত্রেই, দুই সহিহ গ্রন্থের সূত্রে নয়।" },
      { en: "What the Sahihs do carry is the sequel. Al-Bukhari and Muslim both record that when the Negus died the Prophet ﷺ announced it in Madinah and prayed the funeral prayer for him in his absence, and that has its own entry in this timeline. They also record Abu Musa al-Ash'ari (RA) saying that the people of the ship came to the Prophet ﷺ at Khaybar, and were told that they had two migrations.", bn: "সহিহ গ্রন্থে আছে এর পরের অংশ। বুখারি ও মুসলিম দুজনেই লিখেছেন, নাজ্জাশি মারা গেলে নবী ﷺ মদিনায় সেই খবর জানান এবং অনুপস্থিত অবস্থাতেই তাঁর জানাজা পড়েন; এ কথা এই তালিকায় আলাদা ঘটনা হিসেবেই আছে। তাঁরা আরও লিখেছেন আবু মুসা আল-আশআরি (রাঃ)-এর কথা: নৌকার লোকেরা খাইবারে নবী ﷺ-এর কাছে পৌঁছান, আর শোনেন যে তাঁদের হিজরত দুইবার হয়েছে।" },
    ] },
    { h: { en: "The Spokesman and the Envoy", bn: "মুখপাত্র আর দূত" }, p: [
      { en: "Ja'far (RA) spoke for the refugees, and he is the reason they stayed. Ibn Ishaq gives the substance: they had been a people of ignorance who worshipped idols, ate carrion, cut off their relatives and mistreated their neighbours, the strong devouring the weak, until Allah sent them a Messenger from among themselves whose lineage, truthfulness, trustworthiness and chastity they knew.", bn: "শরণার্থীদের হয়ে কথা বলেছিলেন জাফর (রাঃ), আর তাঁর কারণেই তাঁদের থেকে যেতে দেওয়া হয়। ইবনে ইসহাক তাঁর বক্তব্যের সারমর্ম দেন: তাঁরা ছিলেন জাহিলিয়াতের লোক, মূর্তি পূজা করতেন, মরা পশু খেতেন, আত্মীয়তার সম্পর্ক ছিন্ন করতেন, প্রতিবেশীর সাথে খারাপ ব্যবহার করতেন, আর সবল দুর্বলকে গিলে খেত। এরপর আল্লাহ তাঁদের মধ্য থেকেই এমন এক রাসুল পাঠালেন, যাঁর বংশ, সত্যবাদিতা, আমানতদারি ও পবিত্রতা তাঁদের আগে থেকেই জানা ছিল।" },
      { en: "Umm Salamah (RA) is the reason the account survives; she told it, and Ibn Ishaq wrote it from her. Amr ibn al-As (RA) led the embassy that failed, and years later came to Madinah and accepted Islam, asking in Sahih Muslim's report to be forgiven what came before. The Negus refused the gifts and refused to hand over people he had given his word to.", bn: "বর্ণনাটা যে টিকে আছে, তার কারণ উম্মে সালামা (রাঃ); তিনি বলেছেন আর ইবনে ইসহাক তাঁর কাছ থেকে লিখে রেখেছেন। যে দূতিয়ালি ব্যর্থ হলো তার নেতৃত্বে ছিলেন আমর ইবনুল আস (রাঃ), আর বছর কয়েক পরে তিনিই মদিনায় এসে ইসলাম গ্রহণ করেন; সহিহ মুসলিমের বর্ণনায় তিনি বলেছেন, তিনি আগের সব মাফ করে দেওয়ার শর্ত চেয়েছিলেন। নাজ্জাশি উপহার ফিরিয়ে দিয়েছিলেন, আর যাঁদের কথা দিয়েছিলেন তাঁদের তুলে দিতে রাজি হননি।" },
    ] },
    { h: { en: "A Community With Two Homes", bn: "দুই ঠিকানার এক সমাজ" }, p: [
      { en: "This was the first hijrah in Islam, and it settled something that has mattered ever since: a Muslim minority may live, worship and be safe under a just ruler who does not share their religion. Some of the migrants stayed on for years and came back only in the seventh year after the hijrah, reaching the Prophet ﷺ at Khaybar. Ja'far (RA) was among them.", bn: "এটাই ইসলামের প্রথম হিজরত, আর এখান থেকেই এমন একটা কথা ঠিক হয়ে গেল যা আজও কাজে লাগে: ন্যায়পরায়ণ শাসকের অধীনে মুসলিম সংখ্যালঘু বসবাস করতে পারে, ইবাদত করতে পারে, নিরাপদও থাকতে পারে, শাসক ভিন্ন ধর্মের হলেও। মুহাজিরদের কেউ কেউ বছরের পর বছর সেখানে থেকে যান, ফেরেন হিজরতের সপ্তম বছরে, খাইবারে নবী ﷺ-এর কাছে; সেই ফিরতি দলে ছিলেন জাফর (রাঃ)।" },
      { en: "It also changed the calculation in Makkah. Pressure on individuals had not worked, and now the believers had somewhere to go that Quraysh could not reach. So the next move was made against the whole clan rather than against single men, and the boycott of Banu Hashim, which has its own entry here, follows directly from the failure of this embassy.", bn: "মক্কার হিসাবটাও বদলে গেল। একজন একজন করে চাপ দিয়ে কাজ হয়নি, আর এখন ঈমানদারদের যাওয়ার এমন জায়গা আছে যেখানে কুরাইশের হাত পৌঁছায় না। তাই পরের চাল এলো আলাদা মানুষের বিরুদ্ধে নয়, গোটা গোত্রের বিরুদ্ধে। বনু হাশিমের উপর বয়কট, যা এই তালিকায় আলাদা ঘটনা হিসেবে আছে, এই ব্যর্থ দূতিয়ালিরই সরাসরি ফল।" },
    ] },
    { h: { en: "Refuge and Its Manners", bn: "আশ্রয় আর তার আদব" }, p: [
      { en: "Justice is to be recognised and named wherever it is found, including in people who do not share your faith. The Prophet ﷺ sent his most vulnerable followers to a Christian king and was not mistaken to do it. Deal with the neighbour, employer or official who deals justly with you the way the migrants dealt with the Negus: with honesty and gratitude, not suspicion.", bn: "ন্যায় যেখানেই দেখবেন, চিনে নিন আর নাম ধরে স্বীকার করুন, সে মানুষ আপনার দ্বীনের না হলেও। নবী ﷺ নিজের সবচেয়ে অসহায় অনুসারীদের এক খ্রিস্টান রাজার কাছে পাঠিয়েছিলেন, আর সেই সিদ্ধান্ত ভুল ছিল না। যে প্রতিবেশী, যে মালিক বা যে কর্মকর্তা আপনার সাথে ইনসাফ করেন, তাঁর সাথে সেভাবেই চলুন যেভাবে মুহাজিররা নাজ্জাশির সাথে চলেছিলেন: সততা আর কৃতজ্ঞতা নিয়ে, তাঁর ভালোমানুষিকে চাল ভেবে না নিয়ে।" },
      { en: "And notice how Ja'far (RA) spoke. He did not flatter the court, he did not hide the disagreement when he was asked about Isa (AS), and he did not abuse the religion of the people listening. He said what his people had been and what they had been called to, then read scripture and let it do its own work. That is a usable model for anyone explaining Islam to someone with power over them.", bn: "আর জাফর (রাঃ) কীভাবে কথা বলেছিলেন, সেটা খেয়াল করুন। তিনি দরবারকে তোষামোদ করেননি, ঈসা (আঃ) নিয়ে জিজ্ঞেস করা হলে মতপার্থক্য লুকাননি, আবার শ্রোতাদের ধর্ম নিয়ে গালিও দেননি। তিনি বলেছেন তাঁর জাতি আগে কী ছিল, তাদের কীসের দিকে ডাকা হয়েছে, তারপর কিতাব পড়ে শুনিয়ে চুপ করেছেন, বাকি কাজটা কিতাবই করেছে। যাঁর হাতে আপনার ক্ষতি করার ক্ষমতা আছে, তাঁকে ইসলাম বোঝানোর সময় এ পথটা কাজে লাগে।" },
    ] },
  ] },
  "boycott": { sections: [
    { h: { en: "Quraysh Changes Its Method", bn: "কুরাইশ কৌশল বদলায়" }, p: [
      { en: "The sirah writers place the pact in Muharram of the seventh year of the mission, about 617 CE. Hamzah (RA) and Umar (RA) had entered Islam, the embassy sent after the migrants to Abyssinia had come home empty, and pressure on individual believers had produced no lasting recantations. So Quraysh stopped working on people one at a time and began working on a clan.", bn: "সিরাতের লেখকেরা এই চুক্তিকে রাখেন নবুয়তের সপ্তম বছরের মুহাররম মাসে, প্রায় ৬১৭ খ্রিস্টাব্দে। হামজা (রাঃ) আর উমর (রাঃ) ততদিনে ইসলাম গ্রহণ করেছেন, আবিসিনিয়ায় মুহাজিরদের পিছু নেওয়া দূতেরা খালি হাতে ফিরেছে, আর বছরের পর বছর একেকজন ঈমানদারের উপর চাপ দিয়েও টেকসই কিছু আদায় হয়নি। তাই কুরাইশ একজন একজন করে ধরা ছেড়ে দিয়ে হাত দিল গোটা গোত্রে।" },
      { en: "The target was Banu Hashim and Banu al-Muttalib, the two lines of Abd Manaf that stood behind the Prophet ﷺ. Most of the people inside them were not Muslims. What held them there was the plain obligation of a clan to protect its own, and Quraysh demanded that they break exactly that: hand the man over to be killed, and normal dealings would resume.", bn: "লক্ষ্য ছিল বনু হাশিম আর বনুল মুত্তালিব, আবদে মানাফের সেই দুই শাখা যারা নবী ﷺ-এর পাশে দাঁড়িয়েছিল। এই দুই গোত্রের বেশির ভাগ মানুষ মুসলিম ছিলেন না। তাঁদের ধরে রেখেছিল গোত্রের সোজা দায়িত্ববোধ, নিজের লোককে রক্ষা করার কর্তব্য। কুরাইশের দাবি ছিল ঠিক সেটাই ভেঙে ফেলা: লোকটিকে হত্যার জন্য তুলে দাও, তাহলেই লেনদেন আর বিয়ে আগের মতো চালু হবে।" },
    ] },
    { h: { en: "The Document and the Ravine", bn: "দলিল আর সেই উপত্যকা" }, p: [
      { en: "They wrote the terms out and, Ibn Ishaq says, hung the document inside the Ka'bah. Nobody was to marry into the two clans, buy from them, sell to them or sit with them until Muhammad ﷺ was surrendered. Ibn Hisham names the scribe as Mansur ibn Ikrimah. Abu Lahab, himself of Banu Hashim, put himself on the Quraysh side of the line.", bn: "শর্তগুলো লিখে ফেলা হলো, আর ইবনে ইসহাক বলেন, দলিলটা টাঙিয়ে দেওয়া হলো কাবার ভেতরে। মুহাম্মদ ﷺ-কে তুলে না দেওয়া পর্যন্ত ওই দুই গোত্রে বিয়ে নয়, তাদের কাছে বেচা নয়, তাদের থেকে কেনা নয়, তাদের সাথে বসাও নয়। ইবনে হিশাম লেখকের নাম দেন মানসুর ইবনে ইকরিমা। আর আবু লাহাব, নিজে বনু হাশিমের লোক হয়েও, দাঁড়ালেন কুরাইশের দিকে।" },
      { en: "The two clans withdrew into the ravine of Abu Talib at the edge of Makkah. On the length Ibn Ishaq gives two or three years, while Ibn Sa'd and most later writers say three. Food came in only when somebody smuggled it. Ibn Ishaq records Hakim ibn Hizam (RA), then still outside Islam, sending a servant with wheat for his aunt Khadijah (RA), Abu Jahl intercepting the man, and Abu al-Bakhtari forcing the load through.", bn: "দুই গোত্র সরে গেল মক্কার কিনারে আবু তালিবের গিরিসংকটে। কতদিন চলেছিল, তা নিয়ে ইবনে ইসহাক বলেন দুই কিংবা তিন বছর, আর ইবনে সাদ ও পরবর্তী বেশির ভাগ লেখক বলেন তিন বছর। খাবার ঢুকত কেবল কেউ লুকিয়ে পৌঁছে দিলে। ইবনে ইসহাক লিখেছেন, হাকিম ইবনে হিযাম (রাঃ), যিনি তখনো ইসলামের বাইরে, তাঁর ফুফু খাদিজা (রাঃ)-এর জন্য গম নিয়ে চাকর পাঠিয়েছিলেন, আবু জাহল লোকটিকে আটকান, আর আবুল বাখতারি জোর করে বোঝাটা ভেতরে পাঠিয়ে দেন।" },
      { en: "The pact was ended from inside Quraysh. Ibn Ishaq names five men who agreed to break it: Hisham ibn Amr, Zuhayr ibn Abi Umayyah, al-Mut'im ibn Adi, Abu al-Bakhtari ibn Hisham and Zam'ah ibn al-Aswad. Zuhayr spoke first at the Ka'bah and al-Mut'im tore the sheet. The account that the Prophet ﷺ told Abu Talib a termite had eaten it but for the name of Allah is Ibn Ishaq's, sirah rather than hadith.", bn: "চুক্তি ভাঙল কুরাইশের ভেতর থেকেই। ইবনে ইসহাক পাঁচজনের নাম দেন যাঁরা একে ছিঁড়ে ফেলতে রাজি হন: হিশাম ইবনে আমর, যুহাইর ইবনে আবি উমাইয়া, মুতইম ইবনে আদি, আবুল বাখতারি ইবনে হিশাম আর যামআ ইবনুল আসওয়াদ। কাবার সামনে প্রথম মুখ খোলেন যুহাইর, আর কাগজটা ছিঁড়ে ফেলেন মুতইম। নবী ﷺ আবু তালিবকে বলেছিলেন, আল্লাহর নাম ছাড়া বাকি সব উইপোকা খেয়ে ফেলেছে; এ কথাটি ইবনে ইসহাকের বর্ণনা, সিরাতের কথা, হাদিসগ্রন্থের নয়।" },
    ] },
    { h: { en: "Scripture for a Siege", bn: "অবরোধের সময়ের আয়াত" }, p: [
      { en: "No verse is tied to the boycott by a reported occasion of revelation, and the sirah writers do not claim one. What the Quran offers here is thematic. 2:155-157 promises a test with something of fear and hunger and loss of wealth, lives and fruits, then gives glad tidings to the patient, who say when disaster strikes that they belong to Allah and to Him they return.", bn: "কোনো আয়াতের শানে নুযুল হিসেবে এই বয়কটের কথা বর্ণিত হয়নি, আর সিরাত লেখকেরাও তেমন দাবি করেন না। কুরআন এখানে যা দেয় তা বিষয়ের দিক থেকে মেলে। ২:১৫৫-১৫৭ আয়াত বলে, ভয় ও ক্ষুধা দিয়ে, ধনসম্পদ, জীবন আর ফলফসলের ক্ষতি দিয়ে পরীক্ষা হবেই; এরপর সুসংবাদ দেওয়া হয় ধৈর্যশীলদের, যাঁরা বিপদে বলেন, আমরা আল্লাহরই আর তাঁরই কাছে ফিরে যাব।" },
      { en: "3:186 is Madinan and thematic here as well, but it names a boycott's two costs exactly: you will be tested in your possessions and in yourselves, and you will hear much abuse, and patience with taqwa is called a matter of firm resolve. Surah ash-Sharh is Meccan, and 94:5-6 states its sentence twice over: with hardship there is ease, indeed with hardship there is ease.", bn: "৩:১৮৬ আয়াত মাদানি, এখানে বিষয়ের মিলেই আনা, তবু বয়কটের দুটি খরচ সে হুবহু নাম ধরে বলে: ধন আর জানের ব্যাপারে তোমরা পরীক্ষিত হবে, আর অনেক দুঃখজনক কথা শুনবে; ধৈর্য আর তাকওয়াকে সেখানে বলা হয়েছে দৃঢ় সংকল্পের কাজ। সূরা আশ-শারহ মক্কি, আর ৯৪:৫-৬ আয়াত কথাটা দুইবার বলে: কষ্টের সাথেই স্বস্তি আছে, নিশ্চয়ই কষ্টের সাথেই স্বস্তি।" },
    ] },
    { h: { en: "The Place Named at Mina", bn: "মিনায় নাম নেওয়া জায়গাটি" }, p: [
      { en: "Al-Bukhari and Muslim both preserve a single line about it, spoken years afterwards. Coming down from Mina the Prophet ﷺ said that they would camp at the Khayf of Banu Kinanah, where Quraysh had sworn upon disbelief. That is the ground on which the pact against Banu Hashim was concluded. He named the place and did not go back over the men.", bn: "বুখারি আর মুসলিম দুজনেই এ নিয়ে একটি মাত্র কথা ধরে রেখেছেন, যা বলা হয়েছিল বহু বছর পরে। মিনা থেকে নামার সময় নবী ﷺ বললেন, তাঁরা তাঁবু ফেলবেন বনু কিনানার খাইফে, যেখানে কুরাইশ কুফরির উপর শপথ করেছিল। ওই জমিতেই বনু হাশিমের বিরুদ্ধে চুক্তিটা করা হয়েছিল। তিনি জায়গাটার নাম নিলেন, মানুষগুলোর প্রসঙ্গে আর ফিরলেন না।" },
      { en: "Nothing else here carries a chain of that grade, and it is better to say so than to dress the sirah up. The document, the ravine, the smuggled wheat, the five men who tore the sheet and the termite all come from Ibn Ishaq and Ibn Hisham, with Ibn Sa'd, at-Tabari and Ibn Kathir carrying them forward. That is enough to tell the story and not enough to quote as hadith.", bn: "এ ঘটনার আর কিছুই ওই মানের সনদে আসেনি, আর সিরাতকে সাজিয়ে বড় করে দেখানোর চেয়ে কথাটা সোজা বলে দেওয়াই ভালো। দলিল, গিরিসংকট, লুকিয়ে আনা গম, কাগজ ছিঁড়ে ফেলা পাঁচজন, উইপোকা, সবই এসেছে ইবনে ইসহাক ও ইবনে হিশামের হাত ধরে, পরে ইবনে সাদ, তাবারি আর ইবনে কাসীর সেগুলোই বয়ে নিয়েছেন। ঘটনা বলার জন্য এ যথেষ্ট, হাদিস বলে উদ্ধৃত করার জন্য নয়।" },
    ] },
    { h: { en: "Names on Both Sides", bn: "দুই দিকের নামগুলো" }, p: [
      { en: "Abu Talib went into the ravine, kept his nephew alive there, and never accepted the religion; the sirah records him moving the Prophet ﷺ from his sleeping place at night in case somebody came for him. Khadijah (RA) went in as an elderly woman who had lived her whole life in comfort, and what was left of her fortune went on keeping that camp fed.", bn: "আবু তালিব গিরিসংকটে ঢুকেছিলেন, ভাতিজাকে সেখানে বাঁচিয়ে রেখেছিলেন, অথচ দ্বীন কখনো গ্রহণ করেননি; সিরাতে আছে, কেউ যদি রাতে হানা দেয় সেই ভয়ে তিনি নবী ﷺ-এর শোয়ার জায়গা বদলে দিতেন। খাদিজা (রাঃ) সেখানে ঢুকেছিলেন বৃদ্ধা অবস্থায়, যাঁর সারা জীবন কেটেছে স্বচ্ছলতায়। তাঁর সম্পদের যা বাকি ছিল, তা খরচ হলো ওই শিবিরের মানুষগুলোর মুখে খাবার তুলে দিতে।" },
      { en: "On the other side of the ledger, the men who ended the boycott were not believers at the time. Hisham ibn Amr had been bringing food in at night before he organised the rest. Al-Mut'im ibn Adi, who tore the sheet, later gave the Prophet ﷺ the protection that let him re-enter Makkah after Ta'if. Abu Lahab is remembered here for the opposite choice, against his own clan.", bn: "হিসাবের অন্য পিঠে, যাঁরা বয়কট শেষ করলেন তাঁরা তখন ঈমানদার ছিলেন না। হিশাম ইবনে আমর বাকিদের জড়ো করার আগে নিজেই রাতের অন্ধকারে খাবার পৌঁছে দিতেন। মুতইম ইবনে আদি, যিনি কাগজটা ছিঁড়েছিলেন, পরে তায়েফ থেকে ফেরার পর নবী ﷺ-কে সেই আশ্রয় দেন যার জোরে তিনি মক্কায় ঢুকতে পেরেছিলেন। আর আবু লাহাবের নাম এখানে থাকে উল্টো সিদ্ধান্তের জন্য, নিজের গোত্রের বিরুদ্ধে যাওয়ার জন্য।" },
    ] },
    { h: { en: "What the Ravine Cost", bn: "গিরিসংকটের দাম" }, p: [
      { en: "The boycott failed at its stated aim and worked at everything else. The two clans did not hand him over, and the sheet came down. But Quraysh had shown the valley what associating with this man now cost, and the ravine used up the two people who had carried him longest. Khadijah (RA) and Abu Talib both died within months of it ending, which is the entry that follows.", bn: "বয়কট তার ঘোষিত উদ্দেশ্যে ব্যর্থ হলো, আর বাকি সবখানে কাজে লাগল। দুই গোত্র তাঁকে তুলে দেয়নি, কাগজও নেমে গেল। কিন্তু কুরাইশ গোটা উপত্যকাকে দেখিয়ে দিল, এই মানুষটির পাশে দাঁড়ানোর দাম এখন কত। আর গিরিসংকটের বছরগুলো নিঃশেষ করে দিল সেই দুজনকে, যাঁরা তাঁকে সবচেয়ে বেশি দিন বয়ে নিয়েছেন। খাদিজা (রাঃ) আর আবু তালিব দুজনেই মারা যান বয়কট শেষ হওয়ার কয়েক মাসের মধ্যে, যা এখানকার পরের ঘটনা।" },
      { en: "It also settled where the community's future was not. Makkah had proved that it could starve the believers whenever it chose to, so the search for a base began outside the city: first Ta'if, then the tribes met season by season at the pilgrimage, and finally the men of Yathrib at Aqabah. The road to the hijrah starts in that ravine.", bn: "আরও একটা কথা এখানেই ঠিক হয়ে গেল: এই সমাজের ভবিষ্যৎ মক্কায় নেই। মক্কা দেখিয়ে দিয়েছে, ইচ্ছা করলেই সে ঈমানদারদের অনাহারে রাখতে পারে। তাই শহরের বাইরে ঘাঁটি খোঁজা শুরু হলো: প্রথমে তায়েফ, তারপর হজের মৌসুমে একের পর এক গোত্রের সাথে দেখা, আর শেষে আকাবায় ইয়াসরিবের লোকজন। হিজরতের রাস্তা শুরু হয়েছে ওই গিরিসংকট থেকেই।" },
    ] },
    { h: { en: "Holding On Without Hating", bn: "ধরে থাকা, ঘৃণা না করে" }, p: [
      { en: "Being frozen out is not a museum piece. Families still stop speaking to the member who starts praying, workplaces still make practice expensive, and communities still punish whoever says the unpopular true thing. The ravine models holding the obligation without answering it in kind. Those clans kept protecting a man most of them did not follow, and no reprisal is recorded from those years.", bn: "একঘরে করে দেওয়া জাদুঘরের জিনিস নয়। যে মানুষটি সালাত শুরু করে, পরিবার আজও তার সাথে কথা বলা বন্ধ করে দেয়; কর্মক্ষেত্রে দ্বীন মানার দাম আজও চড়া; সমাজ আজও শাস্তি দেয় তাকেই, যে অপ্রিয় সত্য কথাটা বলে। গিরিসংকট শেখায় দায়িত্বটা ধরে রাখা, অথচ একই ভাষায় জবাব না দেওয়া। ওই গোত্রগুলো এমন একজনকে আগলে রেখেছে যাঁকে তাদের বেশির ভাগই মানত না, আর ওই বছরগুলোতে কুরাইশের উপর কোনো প্রতিশোধের কথা বর্ণিত নেই।" },
      { en: "Then do what Hakim ibn Hizam (RA) did long before he believed. He sent wheat to an old woman in a ravine because she was his aunt. When somebody near you is being frozen out, the useful act is usually small, practical and quiet: the meal, the lift, the invitation that costs you something socially. And thank the outsiders who break a boycott, since this one was broken by five men who did not share the faith of the people they rescued.", bn: "ঈমান আনার বহু আগে হাকিম ইবনে হিযাম (রাঃ) যা করেছিলেন, সেটাই করুন। গিরিসংকটের ভেতরে এক বৃদ্ধার কাছে তিনি গম পাঠিয়েছিলেন, কারণ তিনি তাঁর ফুফু। আপনার কাছের কাউকে একঘরে করে দেওয়া হলে কাজের জিনিসটা সাধারণত ছোট, হাতেকলমে আর চুপচাপ: এক বেলার খাবার, পথে তুলে নেওয়া, কিংবা এমন দাওয়াত যার জন্য সমাজে আপনাকে কিছু মূল্য দিতে হয়। আর বয়কট যাঁরা ভাঙেন, বাইরের মানুষ হলেও তাঁদের শুকরিয়া জানান; এই বয়কট তো ভেঙেছিলেন এমন পাঁচজন, যাঁরা নিজেরা এই দ্বীনের লোক ছিলেন না।" },
    ] },
  ] },
  "sorrow": { sections: [
    { h: { en: "Two Losses in One Year", bn: "এক বছরে দুই ক্ষতি" }, p: [
      { en: "The year is about 619 CE, the tenth of the mission, and it opens months after the two clans came out of the ravine. The Prophet ﷺ was around fifty. Abu Talib was an old man and Khadijah (RA) elderly, and both had spent the boycott years on short rations. The name the sirah writers gave the year, am al-huzn, is their label rather than a phrase carried on an early chain.", bn: "সময়টা প্রায় ৬১৯ খ্রিস্টাব্দ, নবুয়তের দশম বছর, আর দুই গোত্র গিরিসংকট থেকে বেরিয়ে আসার মাত্র কয়েক মাস পরেই এর শুরু। নবী ﷺ-এর বয়স তখন পঞ্চাশের কাছাকাছি। আবু তালিব বৃদ্ধ, খাদিজা (রাঃ)-ও বয়সে ভারী, আর দুজনেরই বয়কটের বছরগুলো কেটেছে আধপেটা খেয়ে। সিরাত লেখকেরা বছরটির যে নাম দিয়েছেন, আমুল হুযন, সেটি তাঁদেরই দেওয়া নাম, কোনো প্রাচীন সনদে আসা কথা নয়।" },
      { en: "What the two of them had been to him is the whole of the loss. Abu Talib had taken him in at about the age of eight and stood between him and Quraysh for ten years of the mission without ever accepting the religion. Khadijah (RA) believed before anybody else, spent her fortune on the message and steadied him at home. One guarded the outside, the other the inside.", bn: "এই দুজন তাঁর কাছে কী ছিলেন, তাতেই ক্ষতির পুরো মাপ। আবু তালিব তাঁকে ঘরে তুলে নিয়েছিলেন আট বছর বয়সের কাছাকাছি সময়ে, আর নবুয়তের দশ বছর ধরে কুরাইশ আর ভাতিজার মাঝখানে দাঁড়িয়ে থেকেছেন, অথচ দ্বীন কখনো গ্রহণ করেননি। খাদিজা (রাঃ) সবার আগে ঈমান এনেছেন, নিজের সম্পদ ঢেলেছেন দাওয়াতে, আর ঘরের ভেতরে তাঁকে ধরে রেখেছেন। একজন সামলেছেন বাইরেটা, আরেকজন ভেতরটা।" },
    ] },
    { h: { en: "At Two Deathbeds", bn: "দুই মৃত্যুশয্যার পাশে" }, p: [
      { en: "Abu Talib's last hours are in both Sahihs. Al-Bukhari and Muslim record that the Prophet ﷺ came to him and said, uncle, say there is no god but Allah, a word by which I may plead for you before Allah. Abu Jahl and Abdullah ibn Abi Umayyah sat there asking him whether he would leave the religion of Abd al-Muttalib. The last words he spoke were that he was upon it.", bn: "আবু তালিবের শেষ সময়ের কথা দুই সহিহ গ্রন্থেই আছে। বুখারি ও মুসলিম লিখেছেন, নবী ﷺ তাঁর কাছে এসে বললেন, চাচা, আপনি বলুন আল্লাহ ছাড়া কোনো ইলাহ নেই; এই একটি কথা নিয়ে আমি আল্লাহর কাছে আপনার পক্ষে দাঁড়াতে পারব। পাশে বসা আবু জাহল আর আবদুল্লাহ ইবনে আবি উমাইয়া বারবার জিজ্ঞেস করতে থাকল, আপনি কি আবদুল মুত্তালিবের ধর্ম ছেড়ে দেবেন? শেষ কথায় তিনি বললেন, তিনি সেই ধর্মেই আছেন।" },
      { en: "The Prophet ﷺ answered that he would seek forgiveness for him as long as he was not forbidden to. Khadijah (RA) died in the same period. Ibn Ishaq places the two deaths close together, the reports differ over the interval, and most put Abu Talib's first. She was buried at al-Hajun, and the funeral prayer had not yet been legislated, so the sirah records none said over her.", bn: "নবী ﷺ বললেন, যতক্ষণ না তাঁকে নিষেধ করা হয়, তিনি চাচার জন্য মাগফিরাত চাইতে থাকবেন। এই সময়েই খাদিজা (রাঃ) ইন্তেকাল করেন। ইবনে ইসহাক দুটি মৃত্যুকে কাছাকাছি রাখেন, কতদিনের ব্যবধান তা নিয়ে বর্ণনায় মিল নেই, আর বেশির ভাগ বর্ণনায় আবু তালিবের মৃত্যু আগে। খাদিজা (রাঃ)-কে দাফন করা হয় হাজুনে। জানাজার সালাত তখনো বিধান হয়নি, তাই সিরাতে তাঁর জানাজার কথা নেই।" },
    ] },
    { h: { en: "Guidance Is Not in His Hand", bn: "হেদায়েত তাঁর হাতে নয়" }, p: [
      { en: "28:56 says that you do not guide whom you like, but Allah guides whom He wills, and He knows best the rightly guided. Sahih Muslim attaches the verse to this deathbed. The verse is not a rebuke of the effort he had just made; it draws a line under the outcome. The pleading was his to do, the heart never his to award.", bn: "২৮:৫৬ আয়াত বলে, আপনি যাকে ভালোবাসেন তাকে সৎপথে আনতে পারবেন না, বরং আল্লাহই যাকে চান পথ দেখান, আর কারা পথ পেয়েছে তা তিনিই ভালো জানেন। সহিহ মুসলিম আয়াতটিকে এই মৃত্যুশয্যার সাথে জুড়ে দেয়। এর আলোয় পড়লে আয়াতটি নবী ﷺ-এর সদ্য করা চেষ্টাকে দোষ দিচ্ছে না; সে দাগ টানছে ফলাফলের নিচে। অনুনয়টুকু তাঁর কাজ ছিল, কিন্তু দিল ফেরানো কোনোদিনই তাঁর হাতে ছিল না।" },
      { en: "9:113 came much later, in Madinah: it is not for the Prophet and those who believe to ask forgiveness for the polytheists, even if they are relatives, once it is clear to them that they are companions of the Fire. Al-Bukhari attaches this verse to the same episode too. The two verses put the boundary in one place. Love and du'a run up to it and stop.", bn: "৯:১১৩ আয়াত এসেছে অনেক পরে, মদিনায়: নবী আর ঈমানদারদের জন্য শোভা পায় না মুশরিকদের জন্য মাগফিরাত চাওয়া, তারা আত্মীয় হলেও, যখন তাদের কাছে সুস্পষ্ট হয়ে গেছে যে তারা জাহান্নামের সঙ্গী। বুখারি এই আয়াতটিকেও একই ঘটনার সাথে জুড়ে দেয়। দুটি আয়াত মিলে সীমানাটা এক জায়গাতেই টানে। ভালোবাসা আর দোয়া সেই সীমা পর্যন্ত যায়, তারপর থামে।" },
      { en: "For the grief itself the Quran had already spoken, earlier and in another moment. 93:3 tells him his Lord has not taken leave of him and has not detested him, and 93:6-8 lists what had already been done: an orphan given refuge, one lost and then guided, one poor and then made self-sufficient. Surah ad-Duha was not revealed about this year and is read here thematically.", bn: "শোকের জন্য কুরআন কথা বলেছে আগেই, অন্য এক মুহূর্তে। ৯৩:৩ আয়াত তাঁকে জানায়, তাঁর প্রতিপালক তাঁকে ছেড়ে যাননি, তাঁর উপর অসন্তুষ্টও নন। আর ৯৩:৬-৮ আয়াত গুনে গুনে মনে করিয়ে দেয় আল্লাহ আগে কী কী করেছেন: এতিম পেয়ে আশ্রয় দিয়েছেন, পথ না জানা অবস্থায় পেয়ে পথ দেখিয়েছেন, নিঃস্ব পেয়ে অভাবমুক্ত করেছেন। সূরা আদ-দুহা এই বছর নিয়ে নাযিল হয়নি; এখানে একে আনা হয়েছে বিষয়ের মিল দেখে।" },
    ] },
    { h: { en: "A Greeting Sent From Above", bn: "উপর থেকে পাঠানো সালাম" }, p: [
      { en: "Al-Bukhari records that Jibril (AS) came to the Prophet ﷺ and told him Khadijah (RA) was approaching with a vessel containing food or drink, and that when she reached him he should convey to her the greeting of peace from her Lord and from him, and give her news of a house in Paradise of hollowed pearl, in which there is no noise and no weariness.", bn: "বুখারি লিখেছেন, জিবরিল (আঃ) নবী ﷺ-এর কাছে এসে জানালেন, খাদিজা (রাঃ) খাবার বা পানীয়ের পাত্র হাতে এদিকেই আসছেন। ফেরেশতা বললেন, খাদিজা কাছে এলে তাঁকে তাঁর প্রতিপালকের পক্ষ থেকে আর আমার পক্ষ থেকে সালাম পৌঁছে দিন, আর সুসংবাদ দিন জান্নাতে এমন এক ঘরের, যা ফাঁপা মুক্তার তৈরি, যেখানে কোনো হইচই নেই, ক্লান্তিও নেই।" },
      { en: "About his uncle there is a report in Sahih Muslim from al-Abbas (RA), who asked whether the Prophet ﷺ had been of any benefit to Abu Talib, since he used to guard him and grow angry on his behalf. He answered that Abu Talib is in a shallow part of the Fire, and that were it not for the Prophet ﷺ himself Abu Talib would have been in its lowest depth. The report is given as it stands.", bn: "চাচার ব্যাপারে সহিহ মুসলিমে আব্বাস (রাঃ)-এর একটি বর্ণনা আছে। তিনি নবী ﷺ-কে জিজ্ঞেস করেছিলেন, আবু তালিবের কোনো উপকার কি আপনি করতে পেরেছেন, কারণ তিনি তো আপনাকে আগলে রাখতেন আর আপনার জন্য রাগ করতেন। জবাবে তিনি বললেন, আবু তালিব আছেন আগুনের অগভীর জায়গায়; আমি না থাকলে তিনি থাকতেন সবচেয়ে নিচের স্তরে। বর্ণনাটি যেমন আছে তেমনই রাখা হলো, এর উপর বাড়তি কিছু দাঁড় করানো হয়নি।" },
    ] },
    { h: { en: "A Wife, an Uncle, a Daughter", bn: "স্ত্রী, চাচা, কন্যা" }, p: [
      { en: "Khadijah (RA) had been married to him about twenty-five years and was the mother of all his children but one. He never stopped mentioning her. He would slaughter a sheep and send portions to her friends, and Aishah (RA) said she was never jealous of any wife as she was of a woman she had never met.", bn: "খাদিজা (রাঃ) প্রায় পঁচিশ বছর তাঁর স্ত্রী ছিলেন, আর একজন ছাড়া তাঁর সব সন্তানের মা। এরপরও তিনি খাদিজার কথা বলা কোনোদিন থামাননি। বকরি জবাই করে তার গোশত পাঠাতেন খাদিজার বান্ধবীদের ঘরে। আয়েশা (রাঃ) বলতেন, নবী ﷺ-এর কোনো স্ত্রীকে নিয়ে তাঁর এমন ঈর্ষা হয়নি, যেমন হতো এমন একজনকে নিয়ে যাঁকে তিনি কোনোদিন দেখেননি।" },
      { en: "Abu Talib protected him for ten years and died on the religion of his fathers, and the sirah reports both without softening either. Abu Lahab took over the clan's protection briefly and then withdrew it, Ibn Ishaq says, after asking what his own father's position would be. Ibn Ishaq shows one of the Prophet's ﷺ daughters wiping the dust of the street from his head.", bn: "আবু তালিব দশ বছর তাঁকে আগলে রেখেছেন, আর মারা গেছেন বাপ-দাদার ধর্মেই; সিরাত দুটি কথাই বলে, কোনোটাই নরম করে নয়। আবু লাহাব অল্প কিছুদিনের জন্য গোত্রের আশ্রয়টা নিজের হাতে নেন, তারপর তুলে নেন; ইবনে ইসহাক বলেন, নিজের বাবার পরিণতি কী হবে তা জিজ্ঞেস করার পরেই তিনি সরে যান। ইবনে ইসহাক দেখান, নবী ﷺ-এর এক মেয়ে বাবার মাথা থেকে রাস্তার ধুলো মুছে দিচ্ছেন।" },
    ] },
    { h: { en: "Makkah Without a Shield", bn: "ঢাল ছাড়া মক্কা" }, p: [
      { en: "The protection ended and Quraysh acted on it at once. Ibn Ishaq says they now did what they had never dared while Abu Talib lived, and the dust thrown on his head in the street is his example. In the same year he went out to Ta'if looking for a hearing, the entry that follows, and came back needing al-Mut'im ibn Adi's protection to enter his own city.", bn: "আশ্রয় উঠে গেল, আর কুরাইশ সঙ্গে সঙ্গেই সেটা কাজে লাগাল। ইবনে ইসহাক বলেন, আবু তালিব বেঁচে থাকতে যা করার সাহস তারা পায়নি, এখন তা-ই করল; উদাহরণ হিসেবে তিনি আনেন রাস্তায় তাঁর মাথায় ধুলো ছুড়ে দেওয়ার ঘটনা। ওই বছরেই তিনি কথা শোনানোর মতো কাউকে খুঁজতে তায়েফে যান, যা এখানকার পরের ঘটনা, আর ফিরে এসে নিজের শহরে ঢুকতে মুতইম ইবনে আদির আশ্রয় নিতে হয়।" },
      { en: "The years that follow are the hinge of the whole Meccan period. The night journey and the ascension came, the men of Yathrib gave their pledges at Aqabah, and then the hijrah. The Year of Sorrow is where the plan of enduring inside Makkah quietly ends and the search for a city that would receive the message begins.", bn: "এরপরের বছরগুলোই গোটা মক্কি যুগের মোড়। ইসরা ও মিরাজ হলো, ইয়াসরিবের লোকেরা আকাবায় বাইআত দিলেন, তারপর হিজরত। দুঃখের বছরেই চুপচাপ শেষ হয়ে যায় মক্কার ভেতরে টিকে থাকার পরিকল্পনা, আর সত্যিকারভাবে শুরু হয় এমন শহরের খোঁজ, যে শহর এই বার্তা গ্রহণ করবে।" },
    ] },
    { h: { en: "How Grief Is Carried", bn: "শোক যেভাবে বইতে হয়" }, p: [
      { en: "Grief is allowed. He wept, the year is named for what it was, and there is no report of him pretending the loss was small or hurrying past it. What is asked is of the tongue: no complaint against the decree. And keep the ties of the dead as he did, sending gifts to Khadijah's (RA) friends years after her death and speaking of her until his own.", bn: "শোক করা যায়। তিনি কেঁদেছেন, বছরটার নাম রাখা হয়েছে যা ঘটেছে সেই অনুযায়ী, আর ক্ষতিকে ছোট করে দেখানোর বা তাড়াহুড়ো করে পার হয়ে যাওয়ার কোনো বর্ণনা তাঁর ব্যাপারে নেই। যা চাওয়া হয় তা জিহ্বার কাছে: তাকদিরের বিরুদ্ধে নালিশ নয়। আর যাঁরা চলে গেছেন তাঁদের সম্পর্কগুলো তাঁর মতো ধরে রাখুন। খাদিজা (রাঃ)-এর মৃত্যুর বহু বছর পরেও তিনি তাঁর বান্ধবীদের ঘরে উপহার পাঠাতেন, আর নিজের শেষ দিন পর্যন্ত তাঁর কথা বলতেন।" },
      { en: "Then accept the boundary 28:56 draws. You can make the case for years, keep the relationship intact, pray at every opportunity, and still not deliver a heart, because guidance was never yours to give. A parent praying for a child who will not listen is asked for the effort, not the result. Do the work, leave the verdict, and do not let a refusal spoil how you treat the one refusing.", bn: "এরপর ২৮:৫৬ আয়াত যে সীমা টানে, সেটা মেনে নিন। আপনি বছরের পর বছর বোঝাতে পারেন, সম্পর্ক ঠিক রাখতে পারেন, সুযোগ পেলেই দোয়া করতে পারেন, তবু কারও দিল ফিরিয়ে দিতে পারবেন না; হেদায়েত কোনোদিনই আপনার হাতের জিনিস ছিল না। যে বাবা-মা কথা না শোনা সন্তানের জন্য দোয়া করেন, তাঁদের কাছে চাওয়া হয়েছে চেষ্টাটা, ফলটা নয়। কাজটা করুন, রায় তাঁর হাতে ছেড়ে দিন, আর কেউ না মানলে তার সাথে আপনার ব্যবহারটা যেন নষ্ট না হয়।" },
    ] },
  ] },
  "taif": {
    sections: [
      {
        h: { en: "A Year Without Shelter", bn: "আশ্রয়হীন এক বছর" },
        p: [
          {
            en: "By the tenth year of prophethood, around 619 CE, the Prophet ﷺ had buried Khadijah (RA) and Abu Talib within months of each other. The loss was not only grief. Abu Talib's protection was what had kept Quraysh from killing his nephew, and once it was gone the sirah writers record open abuse in the street with no clan obliged to answer for it.",
            bn: "নবুয়তের দশম বছরে, প্রায় ৬১৯ খ্রিস্টাব্দে, নবী ﷺ কয়েক মাসের ব্যবধানে খাদিজা (রাঃ) আর আবু তালিবকে হারালেন। ক্ষতিটা কেবল শোকের ছিল না। আবু তালিবের আশ্রয়ই ছিল সেই ঢাল, যার জোরে কুরাইশ তাঁর ভাতিজার গায়ে হাত তুলতে সাহস পায়নি। ঢাল সরে যেতেই সিরাতের লেখকরা লেখেন, রাস্তায় খোলাখুলি জ্বালাতন শুরু হলো, আর জবাব দেওয়ার দায় কোনো গোত্রের রইল না।"
          },
          {
            en: "So he looked outside the city. Ta'if lies in the hills roughly sixty miles south-east of Makkah, orchard country belonging to Thaqif and home to the shrine of al-Lat. It was the nearest town with standing enough to shelter a man Quraysh wanted silenced. Ibn Ishaq says he made the journey on foot, and that the only man with him was Zayd ibn Harithah (RA).",
            bn: "তাই তিনি শহরের বাইরে তাকালেন। তায়েফ মক্কার দক্ষিণ-পূর্বে পাহাড়ি এলাকায়, দূরত্ব প্রায় ষাট মাইল। সাকিফ গোত্রের বাগানভরা শহর, সেখানেই ছিল লাতের মন্দির। কুরাইশ যাকে চুপ করাতে চায়, তাকে আশ্রয় দেওয়ার মতো মর্যাদা আশপাশে আর কোনো শহরের ছিল না। ইবনে ইসহাক বলেন, তিনি হেঁটেই গিয়েছিলেন, আর সঙ্গে ছিলেন কেবল যায়েদ ইবনে হারিসা (রাঃ)।"
          }
        ]
      },
      {
        h: { en: "Ten Days Among Thaqif", bn: "সাকিফের মাঝে দশ দিন" },
        p: [
          {
            en: "Ibn Ishaq names the three he went to first: Abd Yalayl, Mas'ud and Habib, brothers and chiefs of Thaqif. He called them to Islam and asked for support against the Makkans fighting him. Their replies are preserved as mockery: could Allah find nobody better to send, would he tear the cover from the Ka'bah if truly sent, and the third would not speak to him at all.",
            bn: "ইবনে ইসহাক প্রথমে যাদের কাছে তিনি গিয়েছিলেন তাদের নাম দেন: আবদ ইয়ালাইল, মাসউদ আর হাবিব, সাকিফের তিন নেতা, নিজেরা ভাই। তিনি তাদের ইসলামের দাওয়াত দিলেন, মক্কার বিরোধীদের বিরুদ্ধে সাহায্য চাইলেন। তাদের জবাব টিকে আছে ঠাট্টা হয়ে। একজন বলল, আল্লাহ পাঠানোর জন্য আর কাউকে পেলেন না? আরেকজন বলল, আল্লাহ সত্যিই পাঠিয়ে থাকলে সে কাবার গিলাফ ছিঁড়ে ফেলবে। তৃতীয়জন কথা বলতেই রাজি হলো না।"
          },
          {
            en: "He stayed about ten days, Ibn Ishaq says, and not one of the town's nobles agreed. When he rose to go, their young men and slaves lined the road and stoned him out of Ta'if. Zayd (RA) took the stones meant for him and was wounded in the head. Bleeding, the Prophet ﷺ turned into a walled garden and made the supplication Ibn Ishaq preserves, complaining of his own weakness and asking into whose care he was being handed. The sirah carries that prayer; the two Sahihs do not.",
            bn: "ইবনে ইসহাক বলেন, তিনি প্রায় দশ দিন সেখানে ছিলেন, শহরের গণ্যমান্যদের একে একে বোঝালেন, কেউ রাজি হলো না। ফেরার সময় তারা যুবক আর গোলামদের রাস্তার দুপাশে দাঁড় করিয়ে পাথর ছুড়ে তাঁকে তায়েফ থেকে বের করে দিল। যায়েদ (রাঃ) তাঁর গায়ে আসা পাথর নিজে নিলেন, মাথা ফেটে গেল। রক্তমাখা পায়ে নবী ﷺ ঢুকলেন এক ঘেরা বাগানে, আর সেখানেই করলেন ইবনে ইসহাকের রক্ষা করা সেই দোয়া: নিজের দুর্বলতার অভিযোগ, আর প্রশ্ন, তাঁকে কার হাতে ছেড়ে দেওয়া হচ্ছে। দোয়াটি আছে সিরাতে, বুখারি-মুসলিমে নেই।"
          },
          {
            en: "The garden belonged to Utbah and Shaybah, sons of Rabi'ah, Makkans and no friends of his. They sent out their Christian slave Addas with a plate of grapes. When the Prophet ﷺ said the name of Allah before eating, Addas told him nobody in that country spoke so. Asked where he came from, he answered Nineveh, and was told that Yunus ibn Matta (AS) was a prophet and a brother of the man before him. Addas then bent over him and kissed his head and his hands.",
            bn: "বাগানটির মালিক ছিল রাবিআর দুই ছেলে উতবা ও শাইবা, মক্কার লোক, তাঁর শুভাকাঙ্ক্ষী নয়। তারা তাদের খ্রিস্টান গোলাম আদ্দাসকে এক থালা আঙুর দিয়ে পাঠাল। নবী ﷺ খাওয়ার আগে আল্লাহর নাম নিলে আদ্দাস বলল, এ দেশের কেউ তো এভাবে বলে না। কোথা থেকে এসেছ শুনে সে বলল, নিনাওয়া থেকে। জবাবে সে শুনল, ইউনুস ইবনে মাত্তা (আঃ) ছিলেন নবী, আর সামনে দাঁড়ানো মানুষটির ভাই। এরপর আদ্দাস ঝুঁকে তাঁর মাথা আর হাতে চুমু খেল।"
          }
        ]
      },
      {
        h: { en: "What the Quran Sets Beside It", bn: "কুরআন যা পাশে রাখে" },
        p: [
          {
            en: "No verse was revealed at Ta'if itself, and it is honest to say so. The card attaches 21:107, which calls the Prophet ﷺ nothing but a mercy to the worlds; thematic here rather than occasioned, it is the sentence the whole episode illustrates. Beside it, 6:34 tells him that messengers before him were denied and harmed and stayed patient until the help of Allah came.",
            bn: "তায়েফে কোনো আয়াত নাজিল হয়নি, আর কথাটা সোজাসুজি বলাই ভালো। কার্ডে দেওয়া আছে ২১:১০৭, যেখানে নবী ﷺ-কে বলা হয়েছে বিশ্ববাসীর জন্য কেবল রহমত। এ আয়াত এই সফরের উপলক্ষে নামেনি, তবু গোটা ঘটনাটাই এ কথার জলজ্যান্ত প্রমাণ। পাশে রাখুন ৬:৩৪, যা তাঁকে জানায়, আগের রাসূলদেরও মিথ্যাবাদী বলা হয়েছে ও কষ্ট দেওয়া হয়েছে, তবু তাঁরা আল্লাহর সাহায্য আসা পর্যন্ত ধৈর্য ধরেছেন।"
          },
          {
            en: "One passage does attach to the return road. Ibn Ishaq places the listening of the jinn at Nakhlah, as the Prophet ﷺ prayed at night on the way back. 46:29 describes jinn turned toward him to hear the Quran, telling one another to listen and going home to their people as warners, and 46:31 gives the call they carried. 72:1-2 records that night in their own words.",
            bn: "ফেরার পথের সঙ্গে একটি অংশ ঠিকই জড়িয়ে আছে। ইবনে ইসহাক জিনদের কুরআন শোনার ঘটনাটি রাখেন নাখলায়, তায়েফ থেকে ফেরার পথে রাতের নামাজের সময়। ৪৬:২৯ আয়াত বলে, জিনদের এক দলকে তাঁর দিকে ফিরিয়ে দেওয়া হয়েছিল কুরআন শোনার জন্য, তারা একে অন্যকে চুপ করতে বলল, আর নিজেদের কওমের কাছে ফিরে গেল সতর্ককারী হয়ে। ৪৬:৩১ আয়াতে আছে তাদের সেই ডাক, আর ৭২:১-২ আয়াতে সে রাতের কথা তাদেরই মুখে।"
          }
        ]
      },
      {
        h: { en: "The Angel of the Mountains", bn: "পাহাড়ের ফেরেশতা" },
        p: [
          {
            en: "Sahih al-Bukhari 3231 records Aishah (RA) asking the Prophet ﷺ whether any day had been harder on him than Uhud. He answered that the hardest was the day of al-Aqabah, when he offered himself to Ibn Abd Yalayl ibn Abd Kulal and was not answered as he had hoped. That ravine is taken to be one near Ta'if, on the strength of the Thaqifi name in the hadith, and not the Aqabah of the later pledges.",
            bn: "সহিহ বুখারি ৩২৩১-এ আছে, আয়েশা (রাঃ) নবী ﷺ-কে জিজ্ঞেস করলেন, উহুদের চেয়ে কঠিন কোনো দিন কি তাঁর গেছে? তিনি বললেন, সবচেয়ে কঠিন ছিল আকাবার দিন, যেদিন তিনি ইবনে আবদ ইয়ালাইল ইবনে আবদ কুলালের কাছে নিজেকে পেশ করেছিলেন আর আশানুরূপ জবাব পাননি। হাদিসে সাকিফের নেতার নাম থাকায় এখানকার গিরিপথটিকে তায়েফের কাছেরই ধরা হয়, পরের শপথগুলোর আকাবা নয়।"
          },
          {
            en: "He left grieving and did not come to himself until Qarn ath-Tha'alib, where a cloud shaded him. Jibril (AS) said that Allah had heard what his people had answered him with and had sent the angel of the mountains to take his command. The angel offered to fold the two mountains, al-Akhshabayn, over them. The narration names only his own people and the two mountains; the commentators differ over whether the offer was over Quraysh at Makkah or over Ta'if on the way back. He answered that he hoped instead that Allah would bring from their loins people who worship Allah alone.",
            bn: "বিষণ্ন মুখে তিনি রওনা হলেন, কারনুস সাআলিব পৌঁছানোর আগে হুঁশই ফিরল না। সেখানে এক টুকরো মেঘ তাঁকে ছায়া দিল। জিবরিল (আঃ) বললেন, তাঁর কওম যা বলেছে আল্লাহ তা শুনেছেন, আর পাহাড়ের ফেরেশতাকে পাঠিয়েছেন হুকুম নেওয়ার জন্য। ফেরেশতা বললেন, চাইলে তিনি আখশাবাইন নামের দুই পাহাড় তাদের উপর মিলিয়ে দেবেন। হাদিসে আছে এটুকুই, তাঁর নিজের কওম আর দুই পাহাড়। প্রস্তাবটি মক্কায় কুরাইশকে ঘিরে, নাকি তায়েফ থেকে ফেরার পথে, তা নিয়ে ব্যাখ্যাকারদের মত এক নয়। নবী ﷺ বললেন, না, বরং আমি আশা রাখি আল্লাহ তাদেরই বংশ থেকে এমন লোক বের করবেন যারা এক আল্লাহর ইবাদত করবে।"
          }
        ]
      },
      {
        h: { en: "Those Who Stood on That Road", bn: "সেই পথে যারা দাঁড়িয়েছিল" },
        p: [
          {
            en: "Zayd ibn Harithah (RA) is the only Companion in the account, and what he did was take stones meant for someone else. He had already chosen the Prophet ﷺ over his own father and tribe, and the road out of Ta'if is where that choice was paid in blood. Addas is the other figure, a slave who recognised a prophet on an afternoon when two cities' chiefs could not.",
            bn: "এই ঘটনায় সাহাবি বলতে কেবল যায়েদ ইবনে হারিসা (রাঃ), আর তিনি করলেন এটুকুই, অন্যের গায়ে আসা পাথর নিজে নিলেন। বাবা আর গোত্রের বদলে নবী ﷺ-কে তিনি আগেই বেছে নিয়েছিলেন। তায়েফের পথেই সেই বাছাইয়ের দাম রক্ত দিয়ে শোধ হলো। অন্য মুখটি আদ্দাসের, এক গোলাম, যেদিন দুই শহরের নেতারা নবী ﷺ-কে চিনতে পারেনি সেদিন সে চিনল।"
          },
          {
            en: "He could not walk back into Makkah unprotected. Ibn Ishaq records that he halted outside and sent to three men of Quraysh for protection; two refused, and Mut'im ibn Adi answered, arming his sons at the Ka'bah while the Prophet ﷺ made tawaf. Mut'im never accepted Islam, and Sahih al-Bukhari has the Prophet ﷺ say at Badr that had Mut'im been alive and spoken to him about these prisoners, he would have released them to him.",
            bn: "আশ্রয় ছাড়া মক্কায় ঢোকা তাঁর পক্ষে সম্ভব ছিল না। ইবনে ইসহাক লেখেন, তিনি শহরের বাইরে থেমে কুরাইশের তিনজনের কাছে আশ্রয় চেয়ে খবর পাঠান। দুজন রাজি হয়নি, সাড়া দিলেন মুতইম ইবনে আদি। তিনি ছেলেদের অস্ত্র হাতে কাবার পাশে দাঁড় করালেন, আর নবী ﷺ ঢুকে তাওয়াফ করলেন। মুতইম কোনোদিন ইসলাম কবুল করেননি। সহিহ বুখারিতে আছে, বদরের দিন নবী ﷺ বলেছিলেন, মুতইম বেঁচে থেকে এই বন্দিদের কথা বললে তিনি তাদের ছেড়ে দিতেন।"
          }
        ]
      },
      {
        h: { en: "What the Road Opened", bn: "পথটি যা খুলে দিল" },
        p: [
          {
            en: "The journey failed at exactly what it went for, and it changed the shape of the mission. From that season the Prophet ﷺ stopped waiting for Makkah to soften and worked the pilgrimage camps, presenting himself to tribe after tribe as they arrived for Hajj. Ta'if is where the message stopped being a Makkan quarrel and started looking for a home.",
            bn: "যে কাজের জন্য যাওয়া, সেখানেই সফরটি ব্যর্থ হলো, অথচ দাওয়াতের ধরনই বদলে গেল। ওই মৌসুম থেকে নবী ﷺ মক্কা নরম হওয়ার অপেক্ষা ছাড়লেন, হজে আসা তাঁবুগুলোতে গিয়ে গোত্রের পর গোত্রের সামনে নিজেকে পেশ করতে লাগলেন। তায়েফের পর এই বার্তা আর মক্কার নিজেদের ঝগড়া রইল না। এখান থেকেই সে নিজের ঠিকানা খুঁজতে শুরু করল।"
          },
          {
            en: "The prayer he made in that garden was answered slowly. Thaqif fought him at Hunayn and held their walls through the siege of 8 AH, and only afterwards did their delegation come to Madinah of its own accord. Whichever town the angel's offer hung over, the answer he gave at Qarn ath-Tha'alib set the measure he kept for both: weigh a people by the grandchildren they may yet produce, not by the afternoon they gave you.",
            bn: "বাগানে করা দোয়াটির জবাব এসেছে ধীরে। সাকিফ হুনাইনে তাঁর বিরুদ্ধে লড়েছে, ৮ হিজরির অবরোধেও প্রাচীর ধরে রেখেছে, আর তার পরেই তাদের প্রতিনিধিদল নিজে থেকে মদিনায় এসেছে। ফেরেশতার প্রস্তাব যে শহরকে ঘিরেই হোক, কারনুস সাআলিবে তিনি যে জবাব দিয়েছিলেন, দুই শহরের বেলায়ই মাপকাঠি সেটাই থেকেছে। কোনো জাতিকে মাপতে হয় তাদের ভবিষ্যৎ বংশ দিয়ে, একটা বিকেল দিয়ে নয়।"
          }
        ]
      },
      {
        h: { en: "Answering Stones Today", bn: "আজকের পাথরের জবাব" },
        p: [
          {
            en: "The usable lesson is not that you should feel nothing. He grieved so hard that the narration says he did not come to himself for miles. The lesson is where the grief was taken. He complained to Allah of his own weakness rather than to people about his enemies, and when power over those enemies was offered he measured them by their grandchildren.",
            bn: "কাজে লাগানোর শিক্ষাটা এই নয় যে আপনার কষ্ট লাগবে না। তাঁর কষ্ট এত গভীর ছিল যে বর্ণনায় আছে, মাইলের পর মাইল তাঁর হুঁশ ফেরেনি। শিক্ষা হলো, কষ্টটা তিনি কোথায় নিয়ে গেলেন। শত্রুদের নামে মানুষের কাছে নালিশ না করে নিজের দুর্বলতার কথা আল্লাহকে বললেন। আর যখন সেই শত্রুদের উপর ক্ষমতা সাধা হলো, তিনি তাদের মাপলেন সেদিনের বিকেল দিয়ে নয়, তাদের নাতিপুতিদের দিয়ে।"
          },
          {
            en: "Concretely: name the people who have shut a door on you, and make du'a for their guidance by name before you complain about them to anyone else. Keep a Zayd near you, and be one for somebody. And when a plan you were certain of collapses, look for the road it opens rather than the door it closed.",
            bn: "হাতে-কলমে: যারা আপনার মুখের উপর দরজা বন্ধ করেছে তাদের নাম মনে করুন, আর অন্য কারও কাছে নালিশ করার আগে নাম ধরে তাদের হেদায়েতের দোয়া করুন। কাছে একজন যায়েদ রাখুন, আর নিজেও কারও যায়েদ হোন। যে পরিকল্পনায় আপনি নিশ্চিত ছিলেন সেটি ভেঙে গেলে বন্ধ দরজার দিকে না তাকিয়ে খুলে যাওয়া পথটা খুঁজুন।"
          }
        ]
      }
    ]
  },
  "isra": {
    sections: [
      {
        h: { en: "The Night After the Sorrow", bn: "দুঃখের বছরের পরের রাত" },
        p: [
          {
            en: "The Isra falls in the stretch after Ta'if and before the Hijra, when the Prophet ﷺ had buried his wife and his uncle and had been refused by two cities. Ibn Ishaq places it in these years. The early sources do not fix a month, and the date of 27 Rajab familiar today comes from later custom rather than from them, so the year is best given loosely.",
            bn: "ইসরার ঘটনা পড়ে তায়েফের পরে আর হিজরতের আগের সময়টায়। ততদিনে নবী ﷺ স্ত্রী আর চাচাকে কবরে রেখে এসেছেন, দুই শহর তাঁকে ফিরিয়ে দিয়েছে। ইবনে ইসহাক ঘটনাটি এই বছরগুলোতেই রাখেন। প্রাচীন সূত্রগুলো কোনো নির্দিষ্ট মাস ঠিক করে না। আজ যে ২৭ রজবের তারিখটি চালু আছে, তা এসেছে পরের প্রচলন থেকে। তাই বছরটা আন্দাজেই বলা ভালো।"
          },
          {
            en: "Sahih al-Bukhari's account has him at the House, in the state between sleeping and waking, when he was taken; Ibn Ishaq relates from Umm Hani bint Abi Talib (RA) that he had passed the night at her house. Most of the classical scholars held the journey was made in the body, while a minority read it as a vision, and the sirah reports that difference rather than hiding it.",
            bn: "সহিহ বুখারির বর্ণনায় আছে, তিনি তখন কাবার পাশে ছিলেন, ঘুম আর জাগরণের মাঝামাঝি অবস্থায়, তখনই তাঁকে নিয়ে যাওয়া হয়। ইবনে ইসহাক উম্মে হানি বিনতে আবু তালিব (রাঃ) থেকে বলেন, রাতটা তিনি তাঁর ঘরেই কাটিয়েছিলেন। বেশিরভাগ প্রাচীন আলিম মনে করেন সফরটি হয়েছিল সশরীরে, অল্প কেউ একে স্বপ্নদর্শন বলেছেন। সিরাত এই মতভেদ চেপে না রেখে সামনেই এনেছে।"
          }
        ]
      },
      {
        h: { en: "From the Sacred Mosque to al-Aqsa", bn: "মসজিদুল হারাম থেকে আকসা" },
        p: [
          {
            en: "Sahih Muslim, in the narration of Anas ibn Malik (RA), describes the mount: a white animal, smaller than a mule and larger than a donkey, which set its hoof at the limit of its sight. It was called al-Buraq. He rode to Bayt al-Maqdis, tied it at the ring the prophets used, entered the mosque and prayed two units of prayer.",
            bn: "সহিহ মুসলিমে আনাস ইবনে মালিক (রাঃ)-এর বর্ণনায় বাহনটির ছবি আছে: সাদা রঙের একটি জন্তু, খচ্চরের চেয়ে ছোট আর গাধার চেয়ে বড়, যার এক কদম পড়ত দৃষ্টির শেষ সীমায়। এর নাম বুরাক। তিনি তাতে চড়ে বাইতুল মাকদিসে পৌঁছালেন, নবীরা যে কড়ায় বাহন বাঁধতেন সেখানেই বাঁধলেন, মসজিদে ঢুকে দুই রাকাত নামাজ পড়লেন।"
          },
          {
            en: "There he was brought two vessels, one of wine and one of milk. He took the milk, and Jibril (AS) told him he had chosen the fitrah, the natural way. Sahih Muslim also records, from Abu Hurayrah (RA), a fuller wording in which Jibril (AS) praises Allah who guided him to the fitrah and says his community would have gone astray had he taken the wine; and from the same Companion, that when the time of prayer came he led the prophets there.",
            bn: "সেখানে তাঁর সামনে দুটি পাত্র আনা হলো, একটিতে মদ আর একটিতে দুধ। তিনি দুধ নিলেন। জিবরিল (আঃ) বললেন, আপনি ফিতরাতই বেছে নিয়েছেন। সহিহ মুসলিমে আবু হুরাইরা (রাঃ)-এর বর্ণনায় কথাটা আরেকটু বড়: জিবরিল (আঃ) সেই আল্লাহর প্রশংসা করলেন যিনি তাঁকে ফিতরাতের পথ দেখিয়েছেন, আর বললেন, মদ নিলে তাঁর উম্মত পথ হারাত। এই সাহাবি থেকেই আসে, নামাজের সময় হলে সেখানে তিনিই নবীদের ইমামতি করেন।"
          },
          {
            en: "From Jerusalem he was taken up through the heavens, where he met the prophets one after another; that meeting has its own account in this timeline. What came down with him was an obligation. He returned the same night, and in the morning told Quraysh. Sahih al-Bukhari records from Jabir ibn Abdullah (RA) that when they called him a liar he stood in the Hijr and described the sanctuary while it was shown to him.",
            bn: "জেরুজালেম থেকে তাঁকে আসমানে তোলা হলো, সেখানে একের পর এক নবীর সঙ্গে দেখা হলো। সেই সাক্ষাতের আলাদা বিবরণ এই সময়রেখায় আছে। তিনি ফিরে এলেন একটি হুকুম নিয়ে। ফেরাটাও সেই রাতেই, আর সকালেই কুরাইশকে কথাটা জানালেন। সহিহ বুখারিতে জাবির ইবনে আবদুল্লাহ (রাঃ) থেকে আছে, তারা তাঁকে মিথ্যাবাদী বললে তিনি হিজরে দাঁড়ালেন, আর চোখের সামনে বাইতুল মাকদিস রেখে তার বর্ণনা দিতে লাগলেন।"
          }
        ]
      },
      {
        h: { en: "The Verses of That Night", bn: "সেই রাতের আয়াত" },
        p: [
          {
            en: "17:1 is the verse of this night, and it repays exact reading. It exalts the One who took His servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings He has blessed, to show him of His signs, and it closes on the Hearing, the Seeing. The verse names the journey to Jerusalem; the ascent above it comes to us through the hadith rather than through 17:1.",
            bn: "এই রাতের আয়াত হলো ১৭:১, আর আয়াতটি মনোযোগ দিয়ে পড়ার মতো। এতে সেই সত্তার পবিত্রতা ঘোষণা করা হয়েছে যিনি তাঁর বান্দাকে রাতে মসজিদুল হারাম থেকে মসজিদুল আকসায় নিয়ে গেছেন, যার চারপাশ তিনি কল্যাণময় করেছেন, উদ্দেশ্য ছিল তাঁকে নিদর্শন দেখানো। শেষ হয় সর্বশ্রোতা ও সর্বদ্রষ্টা নামে। আয়াতটি জেরুজালেমের সফরের কথা বলে; ঊর্ধ্বাকাশে ওঠার কথা আমরা পাই হাদিস থেকে, ১৭:১ আয়াত থেকে নয়।"
          },
          {
            en: "17:60 calls the sight he was shown a trial for the people, which is exactly what it became in Makkah. 53:1-18 defends the truth of what he saw, and within it the mufassirun connect 53:13-18 to this night: a second sighting at the Lote Tree of the Utmost Boundary, near the Garden of Refuge, where the sight neither swerved nor overstepped and he saw the greatest signs of his Lord. Aishah (RA) held in Sahih al-Bukhari that the one seen there was Jibril (AS), and the app's Bengali translation says so too.",
            bn: "১৭:৬০ আয়াত তাঁকে দেখানো সেই দৃশ্যকে মানুষের জন্য পরীক্ষা বলেছে, আর মক্কায় ঠিক তা-ই হয়েছিল। ৫৩:১-১৮ আয়াত তিনি যা দেখেছেন তার সত্যতা রক্ষা করে, আর এর ভেতরেই মুফাসসিরগণ ৫৩:১৩-১৮ আয়াতকে এই রাতের সঙ্গে জোড়েন: শেষ সীমার বরই গাছের কাছে দ্বিতীয়বার দেখা, পাশে জান্নাতুল মাওয়া, যেখানে দৃষ্টি এদিক-ওদিক হয়নি, সীমাও ছাড়ায়নি, আর তিনি প্রতিপালকের বড় বড় নিদর্শন দেখেছেন। সহিহ বুখারিতে আয়েশা (রাঃ)-এর মত হলো, সেখানে যাঁকে দেখা হয়েছে তিনি জিবরিল (আঃ), আর অ্যাপের বাংলা অনুবাদও সেভাবেই পড়ে।"
          }
        ]
      },
      {
        h: { en: "Fifty, and Then Five", bn: "পঞ্চাশ থেকে পাঁচ" },
        p: [
          {
            en: "Sahih al-Bukhari 349, from Anas ibn Malik (RA), carries the part this event is named for. Fifty prayers a day were made obligatory upon him. Coming down, he passed Musa (AS), who asked what he had been given, told him his community would not bear it, and said he had tested people before him. He went back and asked, and the number was reduced.",
            bn: "সহিহ বুখারি ৩৪৯, আনাস ইবনে মালিক (রাঃ)-এর সূত্রে, এই ঘটনার আসল অংশটি ধরে রেখেছে। তাঁর উপর দিনে পঞ্চাশ ওয়াক্ত নামাজ ফরজ করা হলো। নামার পথে মুসা (আঃ)-এর সঙ্গে দেখা। তিনি জিজ্ঞেস করলেন কী দেওয়া হয়েছে, শুনে বললেন, আপনার উম্মত এ বোঝা টানতে পারবে না, আমি আপনার আগের লোকদের যাচাই করে দেখেছি। তিনি ফিরে গিয়ে চাইলেন, সংখ্যা কমানো হলো।"
          },
          {
            en: "It happened again and again, Musa (AS) sending him back and the burden being lightened, until they stood at five. When Musa (AS) told him to ask once more, he answered that he had gone back to his Lord until he was ashamed. Then a caller announced that He had settled His obligation and lightened it on His servants.",
            bn: "এভাবে বারবার হলো। মুসা (আঃ) ফেরত পাঠান, বোঝা হালকা হয়, শেষে দাঁড়ায় পাঁচে। মুসা (আঃ) আরেকবার চাইতে বললে তিনি বললেন, আমি প্রতিপালকের কাছে এতবার গেছি যে এখন লজ্জা লাগছে। তখন ঘোষণা এলো, আমি আমার ফরজ ঠিক করে দিয়েছি আর বান্দাদের উপর হালকা করে দিয়েছি।"
          }
        ]
      },
      {
        h: { en: "Who Believed It", bn: "কারা বিশ্বাস করল" },
        p: [
          {
            en: "Ibn Ishaq records that some who had accepted Islam turned back when they heard the account, and that Quraysh took it to Abu Bakr (RA) expecting the same. He answered that if the Prophet ﷺ had said it then it was true, and that he already believed reports of revelation reaching him from heaven in a morning. That report belongs to the sirah, not to the two Sahihs.",
            bn: "ইবনে ইসহাক লেখেন, ঘটনাটি শুনে ইসলাম গ্রহণ করা কিছু লোক ফিরে গেল, আর কুরাইশ একই আশা নিয়ে খবরটা নিয়ে গেল আবু বকর (রাঃ)-এর কাছে। তিনি বললেন, নবী ﷺ যদি বলে থাকেন তবে তা সত্য, আর আমি তো সকাল না গড়াতেই আসমান থেকে ওহি আসার খবর বিশ্বাস করি। বর্ণনাটি সিরাতের, বুখারি-মুসলিমের নয়।"
          },
          {
            en: "Umm Hani (RA) is the other name the sirah keeps, the household witness to the night. The questioners matter too. Quraysh did not test the claim by argument but by demanding a description of a building they had seen and he had not, and, in Ibn Ishaq's account, by asking after a caravan on the road. Whatever else that night was, they made it checkable in the only way they knew.",
            bn: "সিরাত যে আরেকটি নাম ধরে রেখেছে তা উম্মে হানি (রাঃ)-এর, সে রাতের ঘরোয়া সাক্ষী। প্রশ্নকারীদের কথাও কম নয়। কুরাইশ তর্ক দিয়ে দাবিটি যাচাই করেনি। তারা এমন এক ভবনের বর্ণনা চেয়েছিল যা তারা দেখেছে আর তিনি আগে কখনো দেখেননি, আর ইবনে ইসহাকের বর্ণনায়, জানতে চেয়েছিল পথে থাকা কাফেলার খোঁজ। সে রাত যা-ই হোক, যাচাইয়ের একমাত্র যে পথ তারা জানত, সেভাবেই যাচাই হয়েছে।"
          }
        ]
      },
      {
        h: { en: "A Community Built on Prayer", bn: "নামাজের উপর গড়া সমাজ" },
        p: [
          {
            en: "Every other duty of the religion came down as revelation carried to him where he stood. The sirah writers note that the five prayers were given on this journey, and that no other obligation is described as having been given that way. It is why the prayer is spoken of as the believer's own ascent, and why 17:78 and 17:79 later fix the hours of the day and the night prayer.",
            bn: "দ্বীনের বাকি সব হুকুম নেমেছে ওহি হয়ে, তিনি যেখানে ছিলেন সেখানেই। সিরাতের লেখকরা মনে করিয়ে দেন, পাঁচ ওয়াক্ত নামাজ এসেছে এই সফরে, আর অন্য কোনো ফরজের বেলায় এমন কথা বলা হয়নি। এ কারণেই নামাজকে বলা হয় মুমিনের নিজের মিরাজ। পরে ১৭:৭৮ আর ১৭:৭৯ আয়াত দিনের ওয়াক্তগুলো আর রাতের নামাজের কথা ঠিক করে দেয়।"
          },
          {
            en: "The number that came back was five, and it re-cut the day. 4:103 calls the prayer a decree of specified times upon the believers, and from then the community counted its hours by them. The qibla at this stage was still Jerusalem, the city he had been taken to; the turn to the Ka'bah came later, in Madinah, in the second year after the Hijra.",
            bn: "যে সংখ্যাটা ফিরে এলো তা পাঁচ, আর তাতেই দিনটা নতুন করে কাটা পড়ল। ৪:১০৩ আয়াত নামাজকে বলেছে মুমিনদের উপর নির্দিষ্ট সময়ে বাঁধা ফরজ, আর তখন থেকেই সমাজ ঘণ্টা মাপে এই ওয়াক্ত দিয়ে। এই পর্বে কিবলা তখনো জেরুজালেম, যে শহরে তাঁকে নেওয়া হয়েছিল। কাবার দিকে ফেরার হুকুম আসে পরে, মদিনায়, হিজরতের দ্বিতীয় বছরে।"
          }
        ]
      },
      {
        h: { en: "Five Appointments a Day", bn: "দিনে পাঁচটি সময়" },
        p: [
          {
            en: "The practical weight of this event is an appointment book. Five times a day something is owed at a fixed hour, and the narration's arithmetic gives each deed ten like it. The question for a reader is not really whether they believe the night journey happened. It is whether the gift it brought back is kept as the appointment it is, or fitted into whatever the day leaves over.",
            bn: "এই ঘটনার কাজের দিকটা আসলে একটা সময়সূচি। দিনে পাঁচবার নির্দিষ্ট সময়ে একটা পাওনা শোধ করতে হয়, আর বর্ণনার হিসাবে প্রতিটি নেকির বদলে দশ। পাঠকের আসল প্রশ্ন এই নয় যে রাতের সফরটি তিনি বিশ্বাস করেন কি না। প্রশ্ন হলো, সে রাতের উপহারটি সময় ধরে রাখা হচ্ছে, নাকি দিনের বাকি কাজ সেরে যা সময় বাঁচে তাতে গুঁজে দেওয়া হচ্ছে।"
          },
          {
            en: "So make it concrete. Pray at the beginning of the time rather than the end of it, once a day, this week. 29:45 says the prayer holds a person back from indecency and wrong, which is a claim you can test on yourself over a month. And 107:4-5 warns of people who pray and are heedless of their prayer, which is a different failure from not praying at all.",
            bn: "তাই কাজটা হাতে ধরে করুন। এ সপ্তাহে দিনে অন্তত একবার ওয়াক্তের শেষে নয়, শুরুতে নামাজ পড়ুন। ২৯:৪৫ আয়াত বলে, নামাজ মানুষকে অশ্লীল ও মন্দ কাজ থেকে ঠেকিয়ে রাখে। কথাটা এক মাস ধরে নিজের উপর যাচাই করে দেখা যায়। আর ১০৭:৪-৫ আয়াত সতর্ক করে তাদের নিয়ে যারা নামাজ পড়ে অথচ নিজের নামাজের ব্যাপারেই বেখেয়াল। এটা নামাজ না পড়ার চেয়ে আলাদা এক ব্যর্থতা।"
          }
        ]
      }
    ]
  },
  "aqabah_second": {
    sections: [
      {
        h: { en: "The Season That Turned", bn: "যে মৌসুমে মোড় ঘুরল" },
        p: [
          {
            en: "A year had passed since twelve men of Yathrib gave the first pledge. Mus'ab ibn Umayr (RA) had spent it in their city teaching the Quran, and the Aws and Khazraj, worn down by long feuding, had listened. In the pilgrimage season of about 622 CE a caravan came down from Yathrib carrying a body of Muslims with a decision already made.",
            bn: "ইয়াসরিবের বারোজন প্রথম শপথ নেওয়ার পর এক বছর কেটে গেছে। এই বছরটা মুসআব ইবনে উমায়র (রাঃ) তাদের শহরে কাটিয়েছেন কুরআন শিখিয়ে। আউস আর খাজরাজ নিজেদের দীর্ঘ গোত্রযুদ্ধে ক্লান্ত ছিল, তাই তারা কান পেতেছিল। প্রায় ৬২২ খ্রিস্টাব্দে হজের মৌসুম এলে ইয়াসরিব থেকে বড় এক কাফেলা মক্কায় নামল, আর তার ভেতরে ছিল একদল মুসলিম, যাদের সিদ্ধান্ত আগেই নেওয়া হয়ে গেছে।"
          },
          {
            en: "The meeting was set for the nights in the middle of the days of tashriq, at the ravine of al-Aqabah near Mina, and kept from their own travelling companions. Ibn Ishaq says they slipped out of the camp in ones and twos, once the night was under way. Nothing in the arrangement suggests men who thought they were joining something safe.",
            bn: "সাক্ষাতের সময় ঠিক হলো আইয়ামে তাশরিকের মাঝামাঝি রাতে, মিনার কাছে আকাবা গিরিপথে। নিজেদের সফরসঙ্গীদের কাছ থেকেও পুরো ব্যাপারটা গোপন রাখা হলো। ইবনে ইসহাক বলেন, রাত গড়ালে তারা একজন-দুজন করে চুপচাপ তাঁবু থেকে বেরিয়ে গেল। গোটা আয়োজন দেখে মনে হয় না, তারা নিরাপদ কোনো কিছুতে যোগ দিতে যাচ্ছে।"
          }
        ]
      },
      {
        h: { en: "Stealing Away to the Ravine", bn: "চুপিসারে গিরিপথে" },
        p: [
          {
            en: "Ibn Ishaq's list of those who came runs to seventy-three men and two women, and the round figure of seventy appears in other early reports. The two women were Nusaybah bint Ka'b (RA) of Banu Najjar, known as Umm Umarah, and Asma bint Amr (RA), called Umm Mani'. They were not spectators brought along; both gave the pledge, and the sirah counts them in the number.",
            bn: "ইবনে ইসহাকের তালিকায় সেই রাতে উপস্থিত ছিলেন তেহাত্তরজন পুরুষ ও দুজন নারী, আবার শুরুর অন্য কিছু বর্ণনায় সংখ্যাটা সত্তর বলা হয়েছে। নারী দুজন হলেন বনু নাজ্জারের নুসাইবা বিনতে কাব (রাঃ), যাঁকে উম্মে উমারা বলা হয়, আর আসমা বিনতে আমর (রাঃ), যাঁর ডাকনাম উম্মে মানি। তাঁরা সঙ্গে আসা দর্শক ছিলেন না। দুজনেই শপথ নিয়েছেন, আর সিরাত তাঁদের সংখ্যার ভেতরেই গোনে।"
          },
          {
            en: "Al-Abbas ibn Abd al-Muttalib came with his nephew, still on the religion of his people, and spoke first. Ibn Hisham records his speech: Muhammad's own clan still protects him, so if you can keep what you are about to promise, take him, and if you mean to hand him over later, leave him now. Then the Prophet ﷺ recited Quran and set out his terms.",
            bn: "আব্বাস ইবনে আবদুল মুত্তালিব ভাতিজার সঙ্গে এসেছিলেন, তখনো তিনি নিজের কওমের ধর্মেই ছিলেন, আর কথাটা তিনিই শুরু করলেন। ইবনে হিশাম তাঁর বক্তব্য রেখেছেন: মুহাম্মদকে এখনো তাঁর নিজের গোত্র রক্ষা করছে। যা কথা দিতে যাচ্ছ তা রাখতে পারলে তাঁকে নিয়ে যাও, আর পরে হাতছাড়া করার ইচ্ছা থাকলে এখনই ছেড়ে দাও। এরপর নবী ﷺ কুরআন পাঠ করলেন, তাদের আল্লাহর দিকে ডাকলেন, আর কী চান তা খুলে বললেন।"
          },
          {
            en: "The terms, as Ibn Ishaq gives them: to hear and obey in eagerness and in reluctance, to spend in hardship and in ease, to enjoin good and forbid wrong, to speak for Allah fearing nobody's blame, and to protect him as they protected their own wives and children. Al-Abbas ibn Ubadah ibn Nadlah (RA) stopped them: this meant war with all men. They said they knew, and asked what was theirs if they kept it. The Prophet ﷺ said Paradise.",
            bn: "ইবনে ইসহাকের ভাষায় শর্তগুলো ছিল: আগ্রহে ও অনিচ্ছায় শোনা ও মানা, টানাটানিতে ও সচ্ছলতায় খরচ করা, ভালো কাজের আদেশ ও মন্দ কাজে বাধা দেওয়া, কারও নিন্দার পরোয়া না করে আল্লাহর জন্য কথা বলা, আর নিজেদের স্ত্রী-সন্তানকে যেভাবে রক্ষা করে সেভাবেই তাঁকে রক্ষা করা। আব্বাস ইবনে উবাদা ইবনে নাদলা (রাঃ) মাঝপথে থামিয়ে সোজা বললেন, এ তো গোটা দুনিয়ার সঙ্গে যুদ্ধ। তারা বলল, জানি, আর জিজ্ঞেস করল, পালন করলে আমাদের কী আছে। নবী ﷺ বললেন, জান্নাত।"
          }
        ]
      },
      {
        h: { en: "Where the Quran Names Them", bn: "কুরআন যেখানে তাদের নাম নেয়", },
        p: [
          {
            en: "No verse came down in that ravine, and it is honest to say so. What the Quran gave came afterwards. 8:72, the verse on this card, names those who believed and emigrated and those who gave shelter and aided as allies of one another; both halves of that sentence were made here. 59:9 later praises the city's people for loving the newcomers and preferring them over themselves.",
            bn: "সে রাতে গিরিপথে কোনো আয়াত নামেনি, আর সেটা লুকানোর কিছু নেই। কুরআন যা দিয়েছে তা এসেছে পরে। এই কার্ডে দেওয়া ৮:৭২ আয়াত যারা ঈমান এনে হিজরত করেছে আর যারা আশ্রয় ও সাহায্য দিয়েছে, দুই পক্ষকেই একে অন্যের বন্ধু বলেছে। এই বাক্যের দুই অর্ধেকই তৈরি হয়েছিল সেই বৈঠকে। পরে ৫৯:৯ আয়াত সেই শহরবাসীর প্রশংসা করে, যারা নতুন আসা লোকদের ভালোবেসেছে আর নিজেদের চেয়ে তাদের এগিয়ে রেখেছে।"
          },
          {
            en: "60:12 sets out the terms on which the Prophet ﷺ accepts the pledge of believing women: no association with Allah, no theft, no unlawful intercourse, no killing of their children, no invented slander, and no disobedience to him in what is right. Those are the terms of the earlier pledge, the one Ibn Ishaq calls the pledge of the women; of this night Ibn Ishaq records that Nusaybah (RA) and Asma (RA) were present and gave the pledge. 22:39-40 gave permission to fight to people wronged and driven from their homes for saying their Lord is Allah.",
            bn: "৬০:১২ আয়াত জানিয়ে দেয় কোন শর্তে নবী ﷺ মুমিন নারীদের বাইআত নেবেন: আল্লাহর সঙ্গে কাউকে শরিক না করা, চুরি না করা, ব্যভিচার না করা, সন্তান হত্যা না করা, বানানো অপবাদ না রটানো, আর ভালো কাজে তাঁর অবাধ্য না হওয়া। এই শর্তগুলোই ছিল আগের বছরের শপথের, যাকে ইবনে ইসহাক নারীদের শপথ বলেন। আর এ রাতের ব্যাপারে ইবনে ইসহাক লেখেন, নুসাইবা (রাঃ) আর আসমা (রাঃ) সেখানে ছিলেন আর শপথ নিয়েছেন। আর ২২:৩৯-৪০ আয়াত যুদ্ধের অনুমতি দেয় সেই মজলুমদের, যাদের ‘আমাদের রব আল্লাহ’ বলার অপরাধে ঘরছাড়া করা হয়েছিল।"
          }
        ]
      },
      {
        h: { en: "Ubadah's List of Terms", bn: "উবাদার মুখে শর্তের তালিকা" },
        p: [
          {
            en: "Ubadah ibn as-Samit (RA) was present at both pledges, and he is the Companion who kept repeating the wording to the next generation. Sahih al-Bukhari 7199 records him listing it: to hear and obey in hardship and in ease, in what they liked and disliked, not to contest authority with its holders, and to speak the truth wherever they were, fearing the blame of no blamer.",
            bn: "উবাদা ইবনে সামিত (রাঃ) দুই শপথেই ছিলেন, আর তিনিই পরের প্রজন্মকে বারবার শপথের শব্দগুলো শুনিয়ে গেছেন। সহিহ বুখারি ৭১৯৯-এ তাঁর তালিকা আছে: তারা শপথ করেছিলেন কষ্টে ও স্বাচ্ছন্দ্যে, পছন্দে ও অপছন্দে শোনা ও মানার, ক্ষমতার মালিকদের সঙ্গে ক্ষমতা নিয়ে না লড়ার, আর যেখানেই থাকুন সত্য কথা বলার, কোনো নিন্দুকের নিন্দার পরোয়া না করে।"
          },
          {
            en: "Set the two accounts side by side and say what each carries. The hadith preserves the pledge of hearing, obeying and speaking truth. The clause that made this the pledge of war, that they would defend him with their weapons as they defend their families, comes through Ibn Ishaq rather than the Sahih. Ibn Ishaq calls the earlier pledge the pledge of the women, and this one the pledge of war.",
            bn: "দুই বর্ণনা পাশাপাশি রেখে সোজা কথাটা বলে ফেলা ভালো: কোনটায় কতটুকু আছে। হাদিসে আছে শোনা, মানা আর সত্য বলার শপথ। আর যে শর্তটি একে যুদ্ধের শপথ বানিয়েছে, অর্থাৎ পরিবারকে যেভাবে রক্ষা করে সেভাবে অস্ত্র হাতে তাঁকে রক্ষা করা, সেটি এসেছে ইবনে ইসহাকের বিবরণে, সহিহ হাদিসে নয়। ইবনে ইসহাক নিজেই প্রথম শপথকে বলেন নারীদের শপথ আর এটিকে বলেন যুদ্ধের শপথ।"
          }
        ]
      },
      {
        h: { en: "Twelve Guarantors and Two Women", bn: "বারো জামিনদার ও দুই নারী" },
        p: [
          {
            en: "When the hands had been given, the Prophet ﷺ asked for twelve naqibs, men answerable for their own people, and Ibn Ishaq reports that he told them they stood as guarantors the way the disciples stood for Isa (AS). Nine came from the Khazraj, among them As'ad ibn Zurarah (RA), Abdullah ibn Rawahah (RA), al-Bara ibn Ma'rur (RA) and Sa'd ibn Ubadah (RA).",
            bn: "বাইআত শেষ হলে নবী ﷺ বারোজন নকিব চাইলেন, যারা নিজ নিজ কওমের জন্য জবাবদিহি করবেন। ইবনে ইসহাক বলেন, তিনি তাদের জানিয়ে দিয়েছিলেন, ঈসা (আঃ)-এর হাওয়ারিরা যেমন জামিন ছিলেন, তারাও তেমন। নয়জন এলেন খাজরাজ থেকে, তাঁদের মধ্যে আসআদ ইবনে জুরারা (রাঃ), আবদুল্লাহ ইবনে রাওয়াহা (রাঃ), বারা ইবনে মারুর (রাঃ) আর সাদ ইবনে উবাদা (রাঃ)।"
          },
          {
            en: "Three came from the Aws: Usayd ibn Hudayr (RA), Sa'd ibn Khaythamah (RA), and a third whom the lists give either as Rifa'ah ibn Abd al-Mundhir (RA) or Abu'l-Haytham ibn at-Tayyihan (RA). Beside them stand the two women. Nusaybah (RA) pledged with her husband and her two sons, and what she pledged that night she paid in her own body at Uhud and at Yamamah.",
            bn: "আউস থেকে এলেন তিনজন: উসাইদ ইবনে হুদাইর (রাঃ), সাদ ইবনে খাইসামা (রাঃ), আর তৃতীয়জনকে তালিকাগুলো কখনো রিফাআ ইবনে আবদুল মুনজির (রাঃ), কখনো আবুল হাইসাম ইবনে তাইয়িহান (রাঃ) বলে। তাঁদের পাশে দাঁড়িয়ে আছেন দুই নারী। নুসাইবা (রাঃ) শপথ নিয়েছিলেন স্বামী আর দুই ছেলেকে নিয়ে, আর সে রাতে নেওয়া শপথের দাম তিনি উহুদে ও পরে ইয়ামামায় নিজের শরীর দিয়ে শোধ করেছেন।"
          }
        ]
      },
      {
        h: { en: "The Door to Yathrib", bn: "ইয়াসরিবের দরজা" },
        p: [
          {
            en: "Quraysh had word by morning and came down to the pilgrims' camp demanding to know what had happened. The Yathribites who were not Muslims denied it honestly, because nobody had told them. Sa'd ibn Ubadah (RA) was caught, his hands tied to his neck and beaten through the camp, and released only when Jubayr ibn Mut'im and al-Harith ibn Harb, men he had protected in his trading, intervened.",
            bn: "সকাল হতেই কুরাইশ খবর পেয়ে হাজিদের তাঁবুতে এসে জানতে চাইল কী হয়েছে। ইয়াসরিবের যারা মুসলিম ছিল না তারা সত্যি সত্যিই অস্বীকার করল, কারণ তাদের কিছু জানানোই হয়নি। সাদ ইবনে উবাদা (রাঃ) ধরা পড়লেন, হাত বেঁধে দেওয়া হলো গলার সঙ্গে, তাঁকে মারতে মারতে তাঁবুর ভেতর দিয়ে নেওয়া হলো। ছাড়া পেলেন তখনই, যখন জুবাইর ইবনে মুতইম আর হারিস ইবনে হারব এসে দাঁড়ালেন, যাদের তিনি নিজের ব্যবসার পথে আগে আশ্রয় দিয়েছিলেন।"
          },
          {
            en: "Within weeks the migration began. Families left Makkah in ones and twos for a city that had promised in advance to treat them as its own. By the time the Prophet ﷺ left, almost the whole community had gone ahead of him. The two names the Quran uses for that generation, the Muhajirun and the Ansar, describe a relationship agreed in this ravine before either side had tested the other.",
            bn: "কয়েক সপ্তাহের মধ্যেই হিজরত শুরু হলো। পরিবারগুলো এক-দুই ঘর করে মক্কা ছাড়ল এমন এক শহরের উদ্দেশে, যা আগেই কথা দিয়েছিল তাদের নিজেদের লোক বলে গণ্য করবে। নবী ﷺ যখন বেরোলেন, ততদিনে প্রায় গোটা সমাজ তাঁর আগে চলে গেছে। কুরআন সেই প্রজন্মকে যে দুই নামে ডাকে, মুহাজির আর আনসার, সেই সম্পর্কের কথা এই গিরিপথেই পাকা হয়েছিল, দুই পক্ষ একে অন্যকে যাচাই করার আগেই।"
          }
        ]
      },
      {
        h: { en: "Pledges We Still Give", bn: "যে শপথ আজও নেওয়া হয়" },
        p: [
          {
            en: "The striking thing about that night is that nobody was allowed to swear cheaply. Al-Abbas made them look at the risk first, and al-Abbas ibn Ubadah (RA) made them say out loud that it meant war. A commitment whose cost stays hidden until later is not really a commitment. Read the terms of what you are entering, and say the expensive part aloud before agreeing.",
            bn: "সে রাতের সবচেয়ে চোখে পড়ার মতো দিকটা হলো, কাউকে সস্তায় শপথ নিতে দেওয়া হয়নি। আব্বাস তাদের কথা দেওয়ার আগে ঝুঁকিটা দেখিয়ে দিলেন, আর আব্বাস ইবনে উবাদা (রাঃ) মুখে বলিয়ে নিলেন যে এর মানে যুদ্ধ। যে অঙ্গীকারের দাম পরে গিয়ে জানা যায়, সেটা আসলে অঙ্গীকারই নয়। কোথায় ঢুকছেন তার শর্তগুলো পড়ে নিন, আর রাজি হওয়ার আগে কঠিন অংশটা মুখে উচ্চারণ করুন।"
          },
          {
            en: "The terms themselves are still usable. Hearing and obeying when you would rather not, spending when money is short, commanding good, speaking truth where it costs you standing: take the one you habitually avoid and work on it for a month. And notice that twelve were made answerable for others by name. Take responsibility for a few people you can name, and check on them.",
            bn: "শর্তগুলো আজও কাজে লাগে। মন না চাইলেও শোনা ও মানা, হাতে টাকা কম থাকলেও খরচ করা, ভালো কাজের কথা বলা, আর যেখানে মান খোয়া যায় সেখানেও সত্য বলা। এর মধ্যে যেটা আপনি সবসময় এড়িয়ে যান, এক মাস ধরে সেটা নিয়েই কাজ করুন। আর খেয়াল করুন, তাদের মধ্যে বারোজনকে নাম ধরে অন্যদের জন্য জবাবদিহির ভার দেওয়া হয়েছিল। অল্প কয়েকজন মানুষের দায়িত্ব নিন, যাদের নাম আপনি বলতে পারেন, আর তাদের খোঁজ রাখুন।"
          }
        ]
      }
    ]
  },
  "hijra": {
    sections: [
      {
        h: { en: "The Night of the Plot", bn: "ষড়যন্ত্রের রাত" },
        p: [
          {
            en: "After the pledge at al-Aqabah the believers began leaving Makkah for Yathrib in ones and twos, and Quraysh understood what was being built. Ibn Ishaq records their council in Dar an-Nadwa, where imprisoning and exiling him were proposed and rejected, and the decision taken was that a young man from every clan should strike together, so the blood claim would fall on all Quraysh at once.",
            bn: "আকাবার শপথের পর মুমিনরা একজন-দুজন করে মক্কা ছেড়ে ইয়াসরিবের পথ ধরল, আর কুরাইশ বুঝে গেল কী তৈরি হচ্ছে। ইবনে ইসহাক দারুন নাদওয়ার বৈঠকের কথা লেখেন। সেখানে তাঁকে বন্দি করার আর দেশছাড়া করার প্রস্তাব উঠেছিল, দুটোই বাতিল হয়। শেষে ঠিক হলো, প্রতিটি গোত্র থেকে একজন করে যুবক একসঙ্গে আঘাত করবে, যাতে রক্তের দাবি একবারে গোটা কুরাইশের ঘাড়ে গিয়ে পড়ে।"
          },
          {
            en: "Banu Hashim could not fight every clan at once, which is what the plan was for. By then Makkah had largely emptied of Muslims. Sahih al-Bukhari's narration from Aishah (RA) has Abu Bakr (RA) already keeping two mounts fed and ready for months, waiting for permission; when it came, the Prophet ﷺ arrived at his house at noon, an hour he never called at, with his face covered.",
            bn: "গোটা শহরের সব গোত্রের সঙ্গে বনু হাশিম লড়তে পারবে না, পরিকল্পনাটা সাজানোই হয়েছিল এই হিসাবে। ততদিনে মক্কা মুসলিমশূন্য প্রায়। আয়েশা (রাঃ) থেকে সহিহ বুখারির বর্ণনায় আছে, আবু বকর (রাঃ) মাসের পর মাস দুটি বাহন খাইয়ে তৈরি রেখেছিলেন, অনুমতির অপেক্ষায়। অনুমতি আসতেই নবী ﷺ দুপুরবেলা তাঁর ঘরে এলেন, মুখ ঢাকা, অথচ ওই সময়ে তিনি কখনো আসতেন না।"
          }
        ]
      },
      {
        h: { en: "Three Nights in Thawr", bn: "সাওরে তিন রাত" },
        p: [
          {
            en: "That night Ali ibn Abi Talib (RA) lay in the Prophet's ﷺ bed under his green cloak, so the watchers at the door would see a sleeping man. He stayed behind to return the goods people had deposited with the Prophet ﷺ, some of them belonging to men who wanted him dead. The two travellers went south to the cave of Thawr, away from the Madinah road, and waited there three nights.",
            bn: "সে রাতে আলি ইবনে আবি তালিব (রাঃ) নবী ﷺ-এর বিছানায় তাঁর সবুজ চাদর গায়ে দিয়ে শুয়ে রইলেন, যেন দরজায় পাহারায় থাকা লোকেরা ঘুমন্ত একজনকে দেখতে পায়। তিনি থেকে গেলেন আমানতগুলো ফেরত দেওয়ার জন্য, যা মানুষ নবী ﷺ-এর কাছে গচ্ছিত রেখেছিল, তার মধ্যে সেই লোকদের আমানতও ছিল যারা তাঁকে মেরে ফেলতে চাইছিল। দুই যাত্রী মদিনার পথ ছেড়ে দক্ষিণে সাওর গুহায় গিয়ে তিন রাত অপেক্ষা করলেন।"
          },
          {
            en: "The three nights were run by a family. Abdullah ibn Abi Bakr (RA) spent the days in Makkah listening and came out at night with the news. Amir ibn Fuhayrah (RA) grazed Abu Bakr's flock over the same ground at dusk, so the sheep gave milk and erased the tracks. Asma bint Abi Bakr (RA) carried the provisions and tore her waistband in two to tie the bag and the waterskin.",
            bn: "এই তিন রাত চালিয়ে নিয়েছে একটি পরিবার। আবদুল্লাহ ইবনে আবি বকর (রাঃ) দিনভর মক্কায় কান পেতে থাকতেন, রাতে খবর নিয়ে বেরিয়ে আসতেন। আমির ইবনে ফুহাইরা (রাঃ) সন্ধ্যায় আবু বকরের ভেড়ার পাল সেই একই পথে চরাতেন, তাতে দুধও মিলত, পায়ের ছাপও মুছে যেত। আসমা বিনতে আবি বকর (রাঃ) খাবার পৌঁছে দিতেন, আর থলে আর মশক বাঁধার কিছু না পেয়ে নিজের কোমরবন্ধ ছিঁড়ে দুই ভাগ করেছিলেন।"
          },
          {
            en: "On the fourth day Abdullah ibn Urayqit, a guide hired from outside their religion and trusted with the most dangerous secret in Arabia, brought the camels and took them by the coast road. Sahih al-Bukhari 3906 preserves Suraqah ibn Malik's (RA) own account of chasing them for the hundred-camel bounty and turning back. Ibn Ishaq places the arrival at Quba on a Monday in Rabi' al-Awwal, which another card takes up.",
            bn: "চতুর্থ দিনে আবদুল্লাহ ইবনে উরাইকিত উট নিয়ে এলেন, যিনি ছিলেন ভিন্ন ধর্মের ভাড়া করা পথপ্রদর্শক, অথচ আরবের সবচেয়ে বিপজ্জনক গোপন কথাটা তাঁর হাতে দেওয়া হয়েছিল। তিনি তাঁদের নিলেন সমুদ্রতীরের পথ ধরে। সহিহ বুখারি ৩৯০৬-এ সুরাকা ইবনে মালিক (রাঃ)-এর নিজের মুখেই আছে, একশ উটের পুরস্কারের লোভে তিনি কীভাবে ধাওয়া করেছিলেন আর কীভাবে ফিরে গিয়েছিলেন। ইবনে ইসহাক কুবায় পৌঁছানোর দিনটি রাখেন রবিউল আউয়ালের এক সোমবারে, যেখান থেকে গল্পটা আরেকটি কার্ড তুলে নেয়।"
          }
        ]
      },
      {
        h: { en: "The Cave in the Quran", bn: "কুরআনে গুহার কথা" },
        p: [
          {
            en: "9:40 is the verse this card quotes, and it puts the night on record years afterwards. Allah aided him when those who disbelieved drove him out as one of two, when the two were in the cave, and he said to his companion, do not grieve, indeed Allah is with us. The verse then names what came down: tranquility upon him, and soldiers you did not see.",
            bn: "এই কার্ডে যে আয়াতটি নেওয়া হয়েছে, ৯:৪০, সেটি বছর কয়েক পরে সেই রাতকে দলিল করে রেখেছে। আল্লাহ তাঁকে সাহায্য করেছেন যখন কাফিররা তাঁকে বের করে দিয়েছিল, তিনি ছিলেন দুজনের দ্বিতীয়জন, দুজন যখন গুহার ভেতরে, তখন তিনি সঙ্গীকে বললেন, চিন্তা করো না, আল্লাহ আমাদের সঙ্গে আছেন। এরপর আয়াত জানায় কী নেমে এসেছিল: তাঁর উপর প্রশান্তি, আর এমন সৈন্য, যাদের তোমরা দেখতে পাওনি।"
          },
          {
            en: "8:30 remembers the council itself, the three choices before them of restraining him, killing him or driving him out, and closes on the plan of Allah against theirs. 28:85 promises that the One who imposed the Quran on him will return him to a place of return, which the mufassirun read as Makkah. 4:100 puts both halves on record: whoever emigrates for the cause of Allah finds many places of refuge and abundance in the earth, and whoever leaves his home as an emigrant to Allah and His Messenger and is then overtaken by death has his reward already incumbent upon Allah.",
            bn: "৮:৩০ আয়াত সেই বৈঠকটাই মনে করিয়ে দেয়, তাদের সামনে থাকা তিন পথ, বন্দি করা, হত্যা করা বা দেশছাড়া করা, আর শেষ হয় তাদের কৌশলের বিপরীতে আল্লাহর কৌশল দিয়ে। ২৮:৮৫ আয়াতের ওয়াদা, যিনি তাঁর উপর কুরআন ফরজ করেছেন তিনি তাঁকে মূলভূমিতে ফিরিয়ে আনবেন, মুফাসসিরগণ যাকে মক্কা বলেই বোঝেন। আর ৪:১০০ আয়াত দুই দিকই বলে রাখে। যে আল্লাহর পথে হিজরত করে, সে জমিনে বহু আশ্রয় আর প্রাচুর্য পাবে। আর যে আল্লাহ ও তাঁর রাসূলের দিকে ঘর ছেড়ে বের হয়, পথেই যদি মৃত্যু তাকে পেয়ে বসে, তার সওয়াব আল্লাহর জিম্মায় সাব্যস্ত হয়ে গেছে।"
          }
        ]
      },
      {
        h: { en: "The Third of Whom Is Allah", bn: "যাদের তৃতীয়জন আল্লাহ" },
        p: [
          {
            en: "Sahih al-Bukhari 3653 preserves Abu Bakr (RA) describing the worst moment of those three nights. He looked up at the feet of the searchers standing over their heads and said that if one of them looked down at his own feet he would see them. The Prophet ﷺ answered him with a question: what do you think of two, whose third is Allah?",
            bn: "সহিহ বুখারি ৩৬৫৩-এ আবু বকর (রাঃ) সেই তিন রাতের সবচেয়ে ভয়ংকর মুহূর্তটির বর্ণনা দিয়েছেন। তিনি বলেন, মাথার উপরে দাঁড়ানো খোঁজকারীদের পায়ের দিকে তাকিয়ে তিনি নবী ﷺ-কে বলেছিলেন, এদের কেউ যদি নিজের পায়ের দিকে তাকায় তবে আমাদের দেখে ফেলবে। জবাবে নবী ﷺ তাঁকে উল্টো প্রশ্নই করলেন: তুমি সেই দুজনকে কী মনে করো, যাদের তৃতীয়জন আল্লাহ?"
          },
          {
            en: "The other narration opens Sahih al-Bukhari. Its first hadith has the Prophet ﷺ say that deeds are by intentions, and that whoever migrated for Allah and His Messenger, his migration is to Allah and His Messenger, while whoever migrated for something worldly to gain or a woman to marry, his migration is to what he migrated for. Bukhari began his whole book on the hijra.",
            bn: "আরেকটি বর্ণনা দিয়েই সহিহ বুখারির শুরু। সংকলনের প্রথম হাদিসে নবী ﷺ বলেন, আমল নিয়তের উপর নির্ভর করে। যার হিজরত আল্লাহ ও তাঁর রাসূলের জন্য, তার হিজরত আল্লাহ ও তাঁর রাসূলের দিকেই। আর যার হিজরত দুনিয়ার কিছু পাওয়ার জন্য বা কোনো নারীকে বিয়ে করার জন্য, তার হিজরত সেদিকেই যেদিকে সে গিয়েছিল। বুখারি নিজের গোটা কিতাব শুরু করেছেন হিজরত দিয়ে।"
          }
        ]
      },
      {
        h: { en: "Who Carried the Journey", bn: "যাত্রাটা যারা টেনেছেন" },
        p: [
          {
            en: "Abu Bakr (RA) is in the Quran as the companion in the cave, and the narrations are careful to say that his fear in it was not for himself. Ali (RA) took the bed and the risk of the swords, and stayed behind afterwards until every deposit had been given back to its owner, several of them to men who had joined the plot.",
            bn: "আবু বকর (রাঃ)-এর কথা কুরআনেই আছে, গুহার সঙ্গী হিসেবে। বর্ণনাগুলো খেয়াল করে বলে দেয়, সেখানে তাঁর ভয় নিজের জন্য ছিল না। আলি (রাঃ) নিলেন বিছানা আর তলোয়ারের ঝুঁকি, আর পরে থেকে গেলেন যতক্ষণ না প্রতিটি আমানত তার মালিকের হাতে ফিরেছে। সেই মালিকদের কয়েকজন ছিলেন ষড়যন্ত্রেরই লোক।"
          },
          {
            en: "Asma (RA) was named for what she did, Dhat an-Nitaqayn, the woman of the two waistbands, and she kept the hiding place secret when Abu Jahl came to the door and struck her. Amir ibn Fuhayrah (RA) was a freed slave doing the least visible work in the whole account. Notice too that the guide was not a Muslim: competence and trustworthiness were hired where they were found.",
            bn: "আসমা (রাঃ)-এর নামই হয়ে গেল তাঁর কাজ থেকে, জাতুন নিতাকাইন, দুই কোমরবন্ধের মালিক। আবু জাহল দরজায় এসে চড় মারার পরও তিনি লুকানোর জায়গাটা বলেননি। আমির ইবনে ফুহাইরা (রাঃ) ছিলেন আজাদকৃত গোলাম, গোটা ঘটনার সবচেয়ে চোখে না পড়া কাজটি তাঁরই। আর খেয়াল করুন, পথপ্রদর্শক মুসলিম ছিলেন না। দক্ষতা আর বিশ্বস্ততা যেখানে পাওয়া গেছে সেখান থেকেই নেওয়া হয়েছে।"
          }
        ]
      },
      {
        h: { en: "A Calendar Begins", bn: "বর্ষপঞ্জির শুরু" },
        p: [
          {
            en: "The historians record that Umar (RA) later consulted the Companions on where to begin the Muslim era, and the year of the migration was chosen. Not the birth of the Prophet ﷺ, not the first revelation, but the year a persecuted group became a community with a city, a mosque, a treaty and the right to defend itself. The calendar itself is an argument about what counts as a beginning.",
            bn: "ইতিহাসবিদরা লেখেন, উমর (রাঃ) পরে সাহাবিদের সঙ্গে পরামর্শ করেছিলেন, মুসলিম বর্ষগণনা কোথা থেকে শুরু হবে। বেছে নেওয়া হলো হিজরতের বছর। নবী ﷺ-এর জন্মের বছর নয়, প্রথম ওহির বছরও নয়, বরং যে বছর নির্যাতিত একদল মানুষ শহর পেল, মসজিদ পেল, চুক্তি পেল, নিজেকে রক্ষার অধিকারও পেল, আর সমাজ হয়ে উঠল। বর্ষপঞ্জিটাই একটা কথা বলছে, শুরু বলতে কী বোঝায়।"
          },
          {
            en: "Migration also became a category in the law. While Makkah was closed, leaving it for Madinah was an obligation on those who could; after the city was opened, Sahih al-Bukhari 2783 records the Prophet ﷺ saying there is no hijra after the conquest, but jihad and intention. The obligation ended; what it was for did not, which is why the hadith replaces the journey with a state of readiness.",
            bn: "হিজরত আইনেরও একটি অধ্যায় হয়ে গেল। মক্কা যতদিন বন্ধ ছিল, সামর্থ্যবানদের জন্য মদিনায় চলে যাওয়া ছিল ফরজ। শহর খুলে যাওয়ার পর সহিহ বুখারি ২৭৮৩-এ নবী ﷺ বলেন, বিজয়ের পর আর হিজরত নেই, আছে জিহাদ ও নিয়ত। হুকুমটি শেষ হলো, কিন্তু যে উদ্দেশ্যে তা ছিল সেটি শেষ হয়নি। তাই হাদিস সফরের জায়গায় বসিয়ে দিল প্রস্তুত থাকার অবস্থাটি।"
          }
        ]
      },
      {
        h: { en: "Leaving What Must Be Left", bn: "যা ছাড়তে হয় তা ছাড়া" },
        p: [
          {
            en: "Read the preparation before you read the trust. Abu Bakr (RA) had two mounts fed and ready months early, a guide was hired, Asma (RA) brought the food, the Prophet ﷺ and Abu Bakr (RA) went the wrong way on purpose, hid for three nights and had the tracks wiped behind them. Only after all of that does anyone say Allah is with us. The sentence in 9:40 is no substitute for planning; it is what remained when the planning was done and still not enough.",
            bn: "ভরসার কথা পড়ার আগে প্রস্তুতিটা পড়ুন। আবু বকর (রাঃ) মাস কয়েক আগেই দুটি বাহন খাইয়ে তৈরি রেখেছিলেন, পথপ্রদর্শক ভাড়া করা হয়েছিল, খাবার গুছিয়ে দিয়েছিলেন আসমা (রাঃ)। নবী ﷺ আর আবু বকর (রাঃ) ইচ্ছে করেই উল্টো দিকের পথ ধরেছেন, তিন রাত লুকিয়ে থেকেছেন, পেছনে পায়ের ছাপও মুছিয়ে দিয়েছেন। এত কিছু করার পরে তবেই নবী ﷺ সঙ্গীকে বলেছেন, আল্লাহ আমাদের সঙ্গে আছেন। ৯:৪০ আয়াতের কথাটি পরিকল্পনার বদলি নয়। পরিকল্পনা শেষ করেও যখন তা যথেষ্ট হয়নি, তখন যা বাকি ছিল সেটিই।"
          },
          {
            en: "The practical test is the first hadith of Bukhari. Before your next large move, a job, a country, a marriage, write down in one sentence what you are moving for, and read it again a year later. And count the cost honestly: this migration was paid for by Abu Bakr's wealth, Ali's night on that bed, Asma's face and a freed shepherd's silence. Somebody always pays for a departure.",
            bn: "কাজের যাচাইটা বুখারির প্রথম হাদিসেই। পরের বড় সিদ্ধান্তের আগে, চাকরি হোক, দেশ হোক, বিয়ে হোক, এক বাক্যে লিখে রাখুন আপনি কিসের জন্য যাচ্ছেন, আর এক বছর পর সেটি আবার পড়ুন। আর দামটা সৎভাবে হিসাব করুন। এই হিজরতের দাম মিটিয়েছে আবু বকরের সম্পদ, ওই বিছানায় আলির রাত, আসমার গালের আঘাত আর এক আজাদ রাখালের চুপ থাকা। যাওয়ার দাম কাউকে না কাউকে দিতেই হয়।"
          }
        ]
      }
    ]
  },
  "mosque": {
    sections: [
      {
        h: { en: "Yathrib Before It Was Madinah", bn: "মদিনা হওয়ার আগের ইয়াসরিব" },
        p: [
          { en: "Yathrib in 622 CE, the first year of the Hijra, was an oasis of palm groves and mud-brick strongholds rather than a walled city. The Aws and the Khazraj had worn each other down in feuding that ended at Bu'ath a few years earlier. Three Jewish tribes, Banu Qaynuqa, Banu al-Nadir and Banu Qurayza, held their own quarters, forts and Arab alliances.",
            bn: "৬২২ খ্রিস্টাব্দে, হিজরি প্রথম সনে, ইয়াসরিব প্রাচীরঘেরা কোনো শহর ছিল না। খেজুরবাগান আর কাঁচা ইটের গড়, এই ছিল তার চেহারা। আউস ও খাযরাজ প্রজন্মের পর প্রজন্ম লড়াই করে নিঃশেষ হয়ে এসেছিল, শেষ বড় লড়াই বুআস হয়েছে কয়েক বছর আগেই। বনু কাইনুকা, বনু নাদির ও বনু কুরাইজা নামের তিনটি ইহুদি গোত্রের ছিল নিজেদের মহল্লা, নিজেদের দুর্গ আর আরব পক্ষের সঙ্গে বাঁধা চুক্তি।" },
          { en: "Into it came several hundred Meccans who had left houses, trades and clans behind. The Prophet ﷺ arrived after the days at Quba, and his camel knelt in the quarter of Banu al-Najjar, his grandfather's maternal kin. He was now the arbiter of a place that had never agreed on anything. Three things followed: a mosque, a brotherhood, and a written covenant.",
            bn: "সেখানে এসে ঢুকলেন কয়েকশ মক্কাবাসী, যাঁরা ঘরবাড়ি, ব্যবসা আর গোত্র সব ফেলে এসেছেন। কুবায় কয়েক দিন কাটিয়ে নবী ﷺ মদিনায় ঢোকেন, আর তাঁর উটনী বসে পড়ে বনু নাজ্জারের মহল্লায়, যারা তাঁর দাদার মায়ের দিকের আত্মীয়। তিনি এখন এমন এক জনপদের সালিস, যে জনপদ কোনোদিন কোনো বিষয়ে এক হয়নি। এরপর এল তিনটি জিনিস, মসজিদ, ভ্রাতৃত্ব আর লিখিত সনদ।" },
        ],
      },
      {
        h: { en: "A Yard Bought, Not Taken", bn: "দাম দিয়ে কেনা উঠান" },
        p: [
          { en: "The ground he chose was a drying-yard for dates. Ibn Ishaq says it belonged to two orphan boys, Sahl and Suhayl, sons of Amr, in the care of As'ad ibn Zurarah (RA), and that the Prophet ﷺ insisted on paying rather than accepting a gift. Sahih al-Bukhari 428 records him asking Banu al-Najjar its price, and their answer that they sought it from Allah.",
            bn: "যে জমি তিনি বেছে নিলেন, সেটি ছিল খেজুর শুকানোর উঠান। ইবনে ইসহাক বলেন, জমিটি ছিল আমরের দুই এতিম ছেলে সাহল ও সুহাইলের, দেখাশোনার ভার ছিল আসআদ ইবনে যুরারাহ (রাঃ)-এর হাতে। নবী ﷺ জমিটি উপহার হিসেবে নিতে রাজি হননি, দাম দিয়েই নিয়েছেন। সহিহ বুখারি ৪২৮ নম্বর হাদিসে আছে, তিনি বনু নাজ্জারকে দাম বলতে বলেন, আর তারা জবাব দেয়, এর দাম তারা আল্লাহর কাছেই চায়।" },
          { en: "The yard held old graves from before Islam, ruins and palm trees. Anas (RA) describes the graves dug up, the ruins levelled, the palms felled and set in a row towards the qiblah, which was then Jerusalem. Walls went up in mud brick, a roof of palm branches rested on trunks, the floor was sand. A shaded end housed the destitute, the people of the Suffah.",
            bn: "উঠানে ছিল জাহিলি যুগের পুরনো কবর, ভাঙা ঘরের চিহ্ন আর খেজুরগাছ। আনাস (রাঃ) বলেন, কবরগুলো তুলে ফেলা হলো, ভাঙা অংশ সমান করা হলো, গাছ কেটে কিবলার দিকে সারি করে বসানো হলো। তখনকার কিবলা ছিল বাইতুল মাকদিস। দেয়াল উঠল কাঁচা ইটে, খেজুরকাণ্ডের উপর ডালপালার ছাউনি, নিচে বালির মেঝে। এক পাশের ছায়ায় ঠাঁই পেলেন নিঃস্ব সাহাবিরা, আসহাবে সুফফা।" },
        ],
      },
      {
        h: { en: "Brotherhood and the Document", bn: "ভ্রাতৃত্ব আর সেই দলিল" },
        p: [
          { en: "The mu'akhah, the pairing of each Muhajir with an Ansari, was made in the house of Anas ibn Malik (RA), who reports it himself in Sahih al-Bukhari. The counts differ: Ibn Ishaq's surviving list names a few dozen pairs, while Ibn Sa'd reports ninety men in all. It assigned one named family to one named destitute man, so that no migrant was a general responsibility nobody carried.",
            bn: "প্রত্যেক মুহাজিরকে এক আনসারের সঙ্গে জুড়ে দেওয়া, এই মুআখাত হয় আনাস ইবনে মালিক (রাঃ)-এর ঘরে। কথাটা আনাস (রাঃ) নিজেই সহিহ বুখারিতে বলেছেন। সংখ্যায় সূত্রগুলো এক নয়। ইবনে ইসহাকের টিকে থাকা তালিকায় জোড়া কয়েক ডজন, ইবনে সাদ বলেন মোট নব্বইজন। নাম ধরে এক পরিবারের ঘাড়ে নাম ধরে এক নিঃস্ব মানুষের দায় তুলে দেওয়া হলো, যাতে কোনো মুহাজির সবার দায়িত্ব হয়ে কারও দায়িত্বই না থাকে।" },
          { en: "For a time the bond even carried inheritance, brother inheriting from brother across the two groups. That was later withdrawn and blood relatives restored to their shares, in 8:75 and again in 33:6, which keeps kinship first in Allah's decree while leaving room for a kindness to a close associate. The brotherhood remained as loyalty and support; it stopped being a substitute for lineage.",
            bn: "কিছুকাল এই বাঁধন মিরাসও বহন করেছে, দুই দলের ভাই ভাইয়ের সম্পদের ওয়ারিশ হয়েছে। পরে সেই বিধান তুলে নেওয়া হয়, রক্তের আত্মীয়রা নিজেদের অংশ ফিরে পান। ৮:৭৫ আয়াতে এবং পরে ৩৩:৬ আয়াতে আল্লাহর বিধানে আত্মীয়দেরই আগে রাখা হয়েছে, তবে ঘনিষ্ঠ বন্ধুর জন্য অসিয়তের জায়গা খোলা আছে। ভ্রাতৃত্ব রয়ে গেল বিশ্বস্ততা আর সহযোগিতা হয়ে, বংশের বদলি হিসেবে তার মর্যাদা আর রইল না।" },
          { en: "Ibn Ishaq preserves, through Ibn Hisham, the text of the sahifah that the Prophet ﷺ wrote between the Muhajirun, the Ansar and the Jewish groups of the oasis. Its clauses are practical: each clan keeps paying its own blood-money and ransoming its own captives; the Jews of Banu Awf and the rest form one community with the believers, the Jews with their religion and the Muslims with theirs; all bind themselves against any attack on Yathrib; and every serious dispute returns to Allah and to Muhammad ﷺ. The later breaches by particular tribes are told on their own pages; the covenant came first, in writing.",
            bn: "ইবনে হিশামের মাধ্যমে ইবনে ইসহাক সেই সহিফার পাঠ ধরে রেখেছেন, যে দলিল নবী ﷺ মুহাজির, আনসার ও জনপদের ইহুদি গোষ্ঠীগুলোর মধ্যে লিখে দিয়েছিলেন। ধারাগুলো উঁচু কথার নয়, কাজের কথা। প্রত্যেক গোত্র নিজের দিয়ত নিজে দেবে, নিজের বন্দিদের মুক্তিপণ নিজে গুনবে। বনু আউফের ইহুদিরা ও অন্যরা মুমিনদের সঙ্গে এক উম্মত, ইহুদিদের দ্বীন তাদের আর মুসলিমদের দ্বীন তাদের। ইয়াসরিবে হামলা হলে সবাই মিলে রুখে দাঁড়াবে, আর বড় কোনো বিরোধ ফিরবে আল্লাহ ও মুহাম্মদ ﷺ-এর কাছে। পরে কোন গোত্র কীভাবে এই চুক্তি ভেঙেছে, সে কথা আলাদা পাতায় বলা আছে। চুক্তিটা আগে ছিল, লিখিতভাবেই ছিল।" },
        ],
      },
      {
        h: { en: "One Community in the Verses", bn: "আয়াতে গাঁথা এক জাতি" },
        p: [
          { en: "No single passage narrates the founding of Madinah, but several verses describe what it produced. 3:103 tells the believers to hold to the rope of Allah together and reminds them that they were enemies whom He joined at the heart, brothers by His favour, saved from the edge of a pit of fire. The Aws and the Khazraj read that as recent history.",
            bn: "মদিনা গড়ে ওঠার ঘটনা টানা বর্ণনা করে এমন কোনো একক অংশ কুরআনে নেই, তবে তার ফল কেমন হয়েছিল তা কয়েকটি আয়াত ধরিয়ে দেয়। ৩:১০৩ আয়াতে আল্লাহ মুমিনদের বলছেন সবাই মিলে তাঁর রজ্জু আঁকড়ে ধরতে। মনে করিয়ে দিচ্ছেন, তারা ছিল পরস্পরের শত্রু, তিনি তাদের অন্তর জুড়ে দিয়েছেন, তাঁর অনুগ্রহে তারা ভাই ভাই হয়েছে, আগুনের গর্তের কিনারা থেকে তিনি তাদের বাঁচিয়েছেন। আউস ও খাযরাজের কাছে এটা ছিল সদ্য পেরিয়ে আসা নিজেদের ইতিহাস।" },
          { en: "59:9 praises those already settled in the home and in faith before the migrants came, who love those who emigrated to them and prefer them over themselves even in privation. 8:72 makes the emigrants and those who gave shelter and aid allies of one another, and 8:63 says the wealth of the whole earth could not have joined those hearts. 9:18 names who may keep a mosque standing.",
            bn: "৫৯:৯ আয়াতে প্রশংসা এসেছে তাদের, যারা মুহাজিরদের আসার আগেই নগরীতে বসত করেছিল আর ঈমান এনেছিল। তারা হিজরত করে আসা লোকদের ভালোবাসে, নিজেরা অভাবে থেকেও তাদের নিজেদের উপর অগ্রাধিকার দেয়। ৮:৭২ আয়াতে হিজরতকারী আর আশ্রয়দাতা দুই দলকে পরস্পরের বন্ধু বলা হয়েছে। ৮:৬৩ আয়াত বলছে, দুনিয়ার সব সম্পদ ঢেলে দিলেও ওই অন্তরগুলো জোড়া লাগানো যেত না, আল্লাহই জুড়ে দিয়েছেন। মসজিদ কারা আবাদ রাখার যোগ্য, তা বলে দেয় ৯:১৮ আয়াত।" },
        ],
      },
      {
        h: { en: "What Anas Remembered", bn: "আনাস (রাঃ) যা মনে রেখেছেন" },
        p: [
          { en: "Sahih al-Bukhari 428 preserves Anas ibn Malik's (RA) account of the building. The Prophet ﷺ came to Madinah, ordered a mosque built, asked Banu al-Najjar to name the price of their walled ground, and was told they wanted its price from Allah. Anas then lists what stood on it: graves of idolaters, ruins and palms, with an order given for each.",
            bn: "সহিহ বুখারি ৪২৮ নম্বর হাদিসে আনাস ইবনে মালিক (রাঃ) নিজে মসজিদ নির্মাণের কথা বলেছেন। নবী ﷺ মদিনায় এসে মসজিদ বানানোর নির্দেশ দেন, বনু নাজ্জারকে বলেন তাদের ঘেরা জমির দাম বলতে, আর তারা বলে দামটা তারা আল্লাহর কাছ থেকেই চায়। এরপর আনাস (রাঃ) বলে দেন জমিটিতে কী কী ছিল, মুশরিকদের কবর, ভাঙা ঘরের চিহ্ন আর খেজুরগাছ, আর তিনটির ব্যাপারেই আলাদা কী হুকুম এসেছিল।" },
          { en: "For the brotherhood, Sahih al-Bukhari carries the meeting of Abdur-Rahman ibn Awf (RA) and Sa'd ibn ar-Rabi (RA). Sa'd offered to divide his property in half and to help him marry. Abdur-Rahman asked Allah to bless him in his family and wealth, and asked only to be shown the way to the market. The largest possible offer, the smallest possible taking.",
            bn: "ভ্রাতৃত্বের ব্যাপারে সহিহ বুখারিতে এসেছে আবদুর রহমান ইবনে আউফ (রাঃ) ও সাদ ইবনে রাবি (রাঃ)-এর সাক্ষাৎ। সাদ (রাঃ) নিজের সম্পদ অর্ধেক ভাগ করে দিতে চাইলেন, বিয়ের ব্যবস্থাও করে দিতে চাইলেন। আবদুর রহমান (রাঃ) দোয়া করলেন, আল্লাহ যেন তাঁর পরিবার আর সম্পদে বরকত দেন, আর চাইলেন শুধু বাজারের রাস্তাটা। দেওয়ার বেলায় সবটুকু, নেওয়ার বেলায় সবচেয়ে কম।" },
        ],
      },
      {
        h: { en: "The Household of That Year", bn: "সেই বছরের মানুষগুলো" },
        p: [
          { en: "Abu Ayyub al-Ansari (RA) housed the Prophet ﷺ for months and moved to the lower floor rather than walk above him. As'ad ibn Zurarah (RA), who had carried Islam into Madinah before the Hijra, held the trust of the orphans whose land became the mosque. Abdullah ibn Salam (RA), a Torah scholar among Banu Qaynuqa, looked at the newcomer and said it was not a liar's face.",
            bn: "আবু আইয়ুব আনসারি (রাঃ) কয়েক মাস নবী ﷺ-কে নিজের ঘরে রাখেন, আর তাঁর মাথার উপরে হাঁটতে হবে ভেবে নিজে নিচতলায় নেমে আসেন। আসআদ ইবনে যুরারাহ (রাঃ), যিনি হিজরতের আগেই মদিনায় ইসলাম পৌঁছে দিয়েছিলেন, ছিলেন সেই এতিমদের অভিভাবক যাদের জমিতে মসজিদ উঠল। বনু কাইনুকার তাওরাত-বিশারদ আবদুল্লাহ ইবনে সালাম (রাঃ) নতুন মেহমানকে দেখে বলেছিলেন, ওটা মিথ্যাবাদীর চেহারা নয়।" },
          { en: "Not everyone joined. Abdullah ibn Ubayy ibn Salul had been close to being made a king over Yathrib when the Prophet's ﷺ arrival ended that prospect. He gave outward assent and worked against the community from inside it for years. The mosque and the covenant were built in full view of that opposition, not in its absence.",
            bn: "সবাই যোগ দেয়নি। আবদুল্লাহ ইবনে উবাই ইবনে সালুলকে ইয়াসরিবের বাদশাহ বানানোর আয়োজন প্রায় চূড়ান্ত ছিল, নবী ﷺ-এর আগমনে সেই সম্ভাবনা মুছে যায়। মুখে ইবনে উবাই ইসলাম মেনে নেয়, আর বছরের পর বছর ভেতরে থেকে সমাজের বিরুদ্ধে কাজ করে যায়। মসজিদ আর সনদ এই বিরোধিতার সামনেই গড়ে উঠেছে, বিরোধিতা মিটে যাওয়ার পর নয়।" },
        ],
      },
      {
        h: { en: "Building Where You Live", bn: "নিজের জায়গায় গড়ে তোলা" },
        p: [
          { en: "The order of that first year is repeatable anywhere. Worship got a building before anything else was organised. Need was matched to a named person instead of being left to general goodwill. Relations with neighbours of another religion were written down instead of assumed. A community that begins with funds first, or with a grievance first, is not following that pattern.",
            bn: "প্রথম বছরের এই ধারাবাহিকতা যে কোনো জায়গায় ফিরিয়ে আনা যায়। আগে ইবাদতের জন্য ঘর উঠল, তারপর বাকি সব গোছানো হলো। অভাবীকে সাধারণ সহানুভূতির হাতে না ছেড়ে নাম ধরে একজনের দায়িত্বে দেওয়া হলো। ভিন্ন ধর্মের প্রতিবেশীর সঙ্গে সম্পর্কটা ধরে নেওয়া হলো না, লিখে নেওয়া হলো। যে সমাজ আগে টাকা নিয়ে বা আগে অভিযোগ নিয়ে শুরু করে, সে এই নকশা ধরে চলছে না।" },
          { en: "Concretely: attach yourself to one mosque and to its upkeep rather than merely attending it. If a family arrives in your town with nothing, take one household as your own responsibility by name, and make the offer larger than what will be taken. And where you share a street with people of another faith, know what you have agreed with them, and keep it when keeping it costs you.",
            bn: "কাজের কথায় আসি। কোনো এক মসজিদে শুধু নামাজ পড়তে যাওয়া নয়, তার দেখাশোনার সঙ্গে নিজেকে জুড়ে দিন। আপনার এলাকায় কোনো পরিবার শূন্য হাতে এসে পড়লে নাম ধরে একটি ঘরের দায়িত্ব নিন, আর যতটা নেওয়া হবে তার চেয়ে বেশি সাধুন। আর যে পাড়ায় ভিন্ন ধর্মের মানুষের সঙ্গে আপনার বসবাস, সেখানে তাদের সঙ্গে ঠিক কী কথা হয়েছে তা জেনে রাখুন, আর লোকসান হলেও কথাটা রাখুন।" },
        ],
      },
    ],
  },
  "badr": {
    sections: [
      {
        h: { en: "A Caravan and an Army", bn: "কাফেলা, তারপর বাহিনী" },
        p: [
          { en: "By Ramadan of the second year after the Hijra, March 624 CE, the Muslims of Madinah had spent eighteen months as a community with no property left in Mecca and no settlement with the men who took it. Small parties had already gone out towards the Quraysh trade route. Word came that a large caravan under Abu Sufyan was returning from Syria.",
            bn: "হিজরতের দ্বিতীয় বছরের রমজান, ৬২৪ খ্রিস্টাব্দের মার্চ। মদিনার মুসলিমরা তখন দেড় বছর ধরে সমাজ হিসেবে দাঁড়িয়েছেন, মক্কায় তাঁদের কোনো সম্পত্তি আর অবশিষ্ট নেই, আর যারা তা নিয়ে নিয়েছে তাদের সঙ্গে কোনো মীমাংসাও হয়নি। কুরাইশের বাণিজ্যপথের দিকে ছোট ছোট দল আগেই বেরিয়েছিল। খবর এল, আবু সুফিয়ানের নেতৃত্বে বড় এক কাফেলা সিরিয়া থেকে ফিরছে।" },
          { en: "The march out was for the caravan, not for a battle. Abu Sufyan learned of it, turned towards the coast, and sent Damdam ibn Amr al-Ghifari to Mecca for help. An army came out instead. 8:5-6 describes believers unwilling and arguing after the truth was clear, and 8:7 recalls that they had hoped for the unarmed group.",
            bn: "বের হওয়া হয়েছিল কাফেলার জন্য, যুদ্ধের জন্য নয়। আবু সুফিয়ান খবর পেয়ে পথ ঘুরিয়ে সাগরের দিকে নেয়, আর দামদাম ইবনে আমর গিফারিকে মক্কায় পাঠায় সাহায্য চেয়ে। কাফেলার বদলে এল বাহিনী। ৮:৫ ও ৮:৬ আয়াতে আছে, সত্য স্পষ্ট হওয়ার পরও মুমিনদের একটি দল তা পছন্দ করেনি, বাদানুবাদ করেছে। আর ৮:৭ আয়াত মনে করিয়ে দেয়, তারা নিরস্ত্র দলটিই চেয়েছিল।" },
        ],
      },
      {
        h: { en: "The Night Before the Wells", bn: "কূপের পাশে সেই রাত" },
        p: [
          { en: "At Badr the Prophet ﷺ put the decision to the people. Sahih al-Bukhari 3952 preserves al-Miqdad's (RA) answer, that they would not say what the Children of Israel said to Musa (AS), go and fight, you and your Lord. Ibn Ishaq records that the Prophet ﷺ kept asking until Sa'd ibn Mu'adh (RA) understood the Ansar were meant, and pledged them beyond their original terms.",
            bn: "বদরে পৌঁছে নবী ﷺ সিদ্ধান্তটা সাহাবিদের সামনে রাখেন। সহিহ বুখারি ৩৯৫২ নম্বর হাদিস মিকদাদ (রাঃ)-এর জবাবটি ধরে রেখেছে, তাঁরা সেই কথা বলবেন না যা বনি ইসরাইল মুসা (আঃ)-কে বলেছিল, আপনি আর আপনার রব গিয়ে যুদ্ধ করুন। ইবনে ইসহাক বলেন, নবী ﷺ বারবার জিজ্ঞেস করছিলেন, শেষে সাদ ইবনে মুআয (রাঃ) বুঝলেন আনসারদেরই বলা হচ্ছে, আর তিনি আগের শর্তের চেয়ে বেশি প্রতিশ্রুতি দিলেন।" },
          { en: "Ibn Ishaq also preserves the counsel of al-Hubab ibn al-Mundhir (RA), who asked whether the camping place was revelation or judgement, and on hearing it was judgement advised moving to the nearest well and stopping up the others. Rain fell in the night, firming the sand under the Muslims, which 8:11 describes as purifying them and steadying their feet.",
            bn: "হুবাব ইবনে মুনযির (রাঃ)-এর পরামর্শটিও ইবনে ইসহাক লিখে রেখে গেছেন। হুবাব (রাঃ) জিজ্ঞেস করেন, ঘাঁটি গাড়ার এই জায়গা কি ওহি, নাকি নিজের বিবেচনা। বিবেচনা শুনে তিনি পরামর্শ দেন সবচেয়ে কাছের কূপের পাশে গিয়ে বাকিগুলো বন্ধ করে দিতে। রাতে বৃষ্টি নামে, মুসলিমদের পায়ের নিচের বালু শক্ত হয়ে আসে। ৮:১১ আয়াত একে বলছে পবিত্র করা আর পা মজবুত করে দেওয়া।" },
        ],
      },
      {
        h: { en: "The Morning of the Criterion", bn: "ফুরকানের সকাল" },
        p: [
          { en: "Numbers are given differently. Ibn Ishaq counts about three hundred and thirteen Muslims with two horses and seventy camels ridden in turns; the report of Umar (RA) in Sahih Muslim 1763 says three hundred and nineteen against a thousand. The battle opened with single combat: Hamzah, Ali and Ubaydah ibn al-Harith (RA) went out against Utbah ibn Rabi'ah, his brother Shaybah and his son al-Walid.",
            bn: "সংখ্যা নিয়ে সূত্রগুলো এক নয়। ইবনে ইসহাকের হিসাবে মুসলিম ছিলেন প্রায় তিনশ তেরোজন, সঙ্গে দুটি ঘোড়া আর সত্তরটি উট, যাতে পালা করে চড়া হচ্ছিল। সহিহ মুসলিম ১৭৬৩ নম্বর হাদিসে উমর (রাঃ)-এর বর্ণনায় সংখ্যা তিনশ ঊনিশ, আর সামনে এক হাজার। লড়াই শুরু হয় দ্বৈরথ দিয়ে, হামযা, আলি ও উবাইদা ইবনুল হারিস (রাঃ) এগিয়ে যান উতবা ইবনে রাবিআ, তার ভাই শাইবা আর ছেলে ওয়ালিদের মুখোমুখি।" },
          { en: "Ubaydah (RA) took a wound he later died of, and the lines closed. The Prophet ﷺ threw a handful of pebbles towards the Quraysh, an act 8:17 attributes to Allah rather than to him. Ibn Ishaq's rolls give about seventy Quraysh killed and about as many taken captive, against fourteen Muslim dead. Amr ibn Hisham, whom the Muslims called Abu Jahl, was among the fallen.",
            bn: "উবাইদা (রাঃ) এমন আঘাত পান যাতে পরে তাঁর মৃত্যু হয়, আর দুই সারি মুখোমুখি হয়ে যায়। নবী ﷺ এক মুঠো কাঁকর কুরাইশের দিকে ছুড়ে মারেন, আর ৮:১৭ আয়াত সেই নিক্ষেপ তাঁর নয়, আল্লাহরই বলে ধরিয়ে দেয়। ইবনে ইসহাকের তালিকায় কুরাইশের নিহত প্রায় সত্তরজন, বন্দিও প্রায় ততজন, আর মুসলিমদের শহিদ চৌদ্দজন। মুসলিমরা যাকে আবু জাহল বলতেন, সেই আমর ইবনে হিশাম নিহতদের মধ্যে ছিল।" },
        ],
      },
      {
        h: { en: "Al-Anfal on That Day", bn: "সেই দিনের সুরা আনফাল" },
        p: [
          { en: "Surah al-Anfal came down about this battle, opening with a dispute over the spoils. 8:9 recalls the believers calling for help and the answer that a thousand angels would follow one another; 8:10 says the reinforcement was good tidings and reassurance, and that victory comes only from Allah. 3:123 tells them plainly that Allah gave them victory at Badr while they were weak.",
            bn: "সুরা আনফাল নাজিল হয়েছে এই যুদ্ধ নিয়েই, আর তার শুরু গনিমত নিয়ে মতভেদ দিয়ে। ৮:৯ আয়াতে আছে, মুমিনরা সাহায্য চাইছিলেন আর জবাব এল, পর পর আসা এক হাজার ফেরেশতা দিয়ে সাহায্য করা হবে। ৮:১০ আয়াত বলছে, ওটা ছিল সুসংবাদ আর অন্তরের প্রশান্তি, সাহায্য আসে কেবল আল্লাহর কাছ থেকেই। আর ৩:১২৩ আয়াত সোজা কথায় বলছে, দুর্বল অবস্থাতেই আল্লাহ বদরে তাঁদের সাহায্য করেছেন।" },
          { en: "8:42 describes the ground itself: the Muslims on the near side of the valley, the Quraysh on the far side, the caravan below them, and an appointment they would have missed had they arranged it. 8:41 fixes the fifth of any spoils for Allah, the Messenger ﷺ, his near relatives, orphans, the needy and the traveller, and names that day the day of criterion.",
            bn: "৮:৪২ আয়াতে ভূমিটাই আঁকা হয়েছে, মুসলিমরা উপত্যকার কাছের প্রান্তে, কুরাইশ দূরের প্রান্তে, আর কাফেলা তাঁদের নিচের দিকে। নিজেরা সময় ঠিক করলে এই দেখা কখনোই মিলত না। ৮:৪১ আয়াত গনিমতের এক-পঞ্চমাংশ নির্ধারণ করে আল্লাহ, রাসুল ﷺ, তাঁর নিকটাত্মীয়, এতিম, মিসকিন ও মুসাফিরের জন্য, আর সেই দিনটিকে নাম দেয় ফুরকানের দিন।" },
        ],
      },
      {
        h: { en: "The Prayer in the Shelter", bn: "ছাউনির ভেতরের দোয়া" },
        p: [
          { en: "Sahih Muslim 1763, which Ibn Abbas (RA) narrates from Umar (RA), gives the scene inside the shelter. The Prophet ﷺ looked at the numbers, faced the qiblah, stretched out his hands and asked Allah to fulfil what He had promised him, saying that if this band of Muslims perished He would not be worshipped on the earth. He kept calling until his cloak fell from his shoulders.",
            bn: "সহিহ মুসলিম ১৭৬৩ নম্বর হাদিসে ইবনে আব্বাস (রাঃ) উমর (রাঃ)-এর সূত্রে ছাউনির ভেতরের দৃশ্যটি বলেছেন। নবী ﷺ দুই পক্ষের সংখ্যা দেখলেন, কিবলামুখী হলেন, দুই হাত বাড়িয়ে আল্লাহর কাছে চাইলেন তিনি যে ওয়াদা করেছেন তা পূরণ করতে। তিনি বলছিলেন, এই ছোট দলটি ধ্বংস হয়ে গেলে জমিনে আর তাঁর ইবাদত হবে না। ডাকতেই থাকলেন, এক পর্যায়ে কাঁধ থেকে চাদর খসে পড়ল।" },
          { en: "The same report has Abu Bakr (RA) picking up the cloak, putting it back and telling him that this much appeal to his Lord was enough, for Allah would fulfil what He had promised. Then 8:9 came down. That narration is also the source of the count of three hundred and nineteen, worth reading beside the sirah's own figures rather than instead of them.",
            bn: "একই বর্ণনায় আবু বকর (রাঃ) চাদরটি তুলে তাঁর কাঁধে ফিরিয়ে দেন আর বলেন, রবের কাছে এতটুকু কাকুতিই যথেষ্ট, তিনি তাঁর ওয়াদা পূরণ করবেন। এরপরই নাজিল হয় ৮:৯ আয়াত। তিনশ ঊনিশ সংখ্যাটিও এই বর্ণনা থেকেই আসে। সিরাতের নিজস্ব হিসাবের বদলে নয়, তার পাশে রেখেই এটি পড়া উচিত।" },
        ],
      },
      {
        h: { en: "Champions, Captives, Counsellors", bn: "যোদ্ধা, বন্দি, পরামর্শদাতা" },
        p: [
          { en: "Hamzah ibn Abd al-Muttalib (RA) fought in the opening combat and cut down the man who faced him; a year later the families of the Quraysh dead would set a price on his head. Al-Miqdad (RA) was one of the few who rode a horse. Sa'd ibn Mu'adh (RA) spoke for the Ansar and made the march possible.",
            bn: "হামযা ইবনে আবদুল মুত্তালিব (রাঃ) দ্বৈরথে লড়ে নিজের প্রতিপক্ষকে হত্যা করেন। এক বছর পর কুরাইশের নিহতদের পরিবার তাঁর মাথার দাম ধরবে। হাতেগোনা যে কজন ঘোড়ায় চড়ে গিয়েছিলেন, মিকদাদ (রাঃ) তাঁদের একজন। আর সাদ ইবনে মুআয (রাঃ) আনসারদের পক্ষে কথা বলে যাত্রাটাই সম্ভব করে তোলেন।" },
          { en: "Among the captives were al-Abbas (RA), the Prophet's ﷺ uncle, and his son-in-law Abu al-As, freed not for ransom but on his promise to send Zaynab (RA) to Madinah; the necklace she sent went back to her. Ibn Sa'd reports that literate prisoners bought their freedom by teaching ten children of Madinah to write. Abu Jahl, who had led the persecution in Mecca, was struck down by two young Ansaris and found dying by Abdullah ibn Mas'ud (RA).",
            bn: "বন্দিদের মধ্যে ছিলেন নবী ﷺ-এর চাচা আব্বাস (রাঃ), আর ছিলেন তাঁর জামাতা আবুল আস। মুক্তিপণ নিয়ে নয়, জয়নব (রাঃ)-কে মদিনায় পাঠিয়ে দেওয়ার ওয়াদাতেই তিনি ছাড়া পান। জয়নব (রাঃ) যে হার পাঠিয়েছিলেন, তা তাঁর কাছেই ফিরে যায়। ইবনে সাদ বলেন, লেখাপড়া জানা বন্দিরা মদিনার দশটি শিশুকে লিখতে শিখিয়ে নিজেদের মুক্তি কিনেছিল। মক্কায় নির্যাতনের নেতৃত্ব যে দিয়েছিল, সেই আবু জাহলকে দুই তরুণ আনসারি আঘাত করে ফেলে দেন, আর আবদুল্লাহ ইবনে মাসউদ (রাঃ) তাকে মুমূর্ষু অবস্থায় পান।" },
        ],
      },
      {
        h: { en: "The Day Everything Changed Weight", bn: "যেদিন সব পাল্লা বদলে গেল" },
        p: [
          { en: "Badr removed the assumption that Mecca could dictate to Madinah. It also killed a generation of Quraysh leaders, and left their sons and widows with an obligation of revenge that produced Uhud the following year. Inside Madinah the victory hardened both loyalty and hostility, and the first breach of the city's covenant followed within weeks.",
            bn: "বদরের পর এই ধারণাটাই আর টিকল না যে মক্কা মদিনাকে হুকুম করতে পারে। কুরাইশের একটা গোটা নেতৃত্বের প্রজন্মও সেদিন শেষ হয়ে যায়, আর তাদের ছেলে ও বিধবাদের ঘাড়ে চেপে বসে প্রতিশোধের দায়, যার ফল পরের বছরের উহুদ। মদিনার ভেতরে জয়টা দুই দিকেই মন শক্ত করে দিল, একদিকে আনুগত্য আরও গাঢ় হলো, অন্যদিকে বিদ্বেষ আরও জমাট বাঁধল। কয়েক সপ্তাহের মধ্যেই শহরের সনদ প্রথমবার ভাঙে।" },
          { en: "It settled law as well. The fifth was fixed by 8:41. The treatment of captives was reviewed in 8:67-68, which faults the desire for the goods of this world and says that but for a preceding decree from Allah a great punishment would have followed. Ransom was taken, but a principle was stated: decide a war before counting its profit.",
            bn: "বিধানও এখানে ঠিক হয়ে যায়। গনিমতের এক-পঞ্চমাংশ নির্ধারিত হয় ৮:৪১ আয়াতে। বন্দিদের ব্যাপারে যা করা হয়েছিল, তা নিয়ে আসে ৮:৬৭ ও ৮:৬৮ আয়াত, যেখানে দুনিয়ার স্বার্থ চাওয়াকে দোষ ধরা হয়েছে আর বলা হয়েছে, আল্লাহর পূর্বলিখিত ফায়সালা না থাকলে বড় শাস্তি নেমে আসত। মুক্তিপণ নেওয়া হয়েছিল ঠিকই, তবে নীতিটা বলা হয়ে গেল, লাভ গোনার আগে যুদ্ধের ফায়সালা।" },
        ],
      },
      {
        h: { en: "Counting on Allah, Not Numbers", bn: "সংখ্যা নয়, ভরসা আল্লাহর উপর" },
        p: [
          { en: "The Quran does not present Badr as proof that small groups win. 8:19 tells the other side that their numbers will avail them nothing, and 3:123 makes weakness the very condition under which help arrived. The lesson is about where the outcome is placed, not about arithmetic. Preparation was still made: scouts, a chosen well, a shelter, and a consultation before the decision.",
            bn: "কুরআন বদরকে এই প্রমাণ হিসেবে হাজির করে না যে ছোট দলই জেতে। ৮:১৯ আয়াতে অন্য পক্ষকে বলা হচ্ছে, তাদের সংখ্যা কোনো কাজে আসবে না। আর ৩:১২৩ আয়াত দুর্বলতাকেই সাহায্য আসার শর্ত বানিয়ে দেয়। শিক্ষাটা হিসাব নিয়ে নয়, ফলাফলটা কার হাতে রাখা হলো তা নিয়ে। প্রস্তুতি কিন্তু নেওয়া হয়েছিল, খবর সংগ্রহ, কূপ বেছে নেওয়া, ছাউনি বানানো আর সিদ্ধান্তের আগে পরামর্শ।" },
          { en: "Take the pattern in that order. Ask the people who will carry the consequence before you commit them, the way the Ansar were asked. Take advice from whoever has it, as al-Hubab's question about revelation and judgement was taken. Then do the work and hand the result over. And when it comes out well, 3:123 says what to do next: fear Allah, and be grateful.",
            bn: "এই ধারাটাই ধরুন, এই ক্রমেই। যাদের ঘাড়ে ফলটা পড়বে, সিদ্ধান্তে বাঁধার আগে তাদের জিজ্ঞেস করুন, যেমন আনসারদের জিজ্ঞেস করা হয়েছিল। যার কাছে ভালো পরামর্শ আছে তার কাছ থেকেই নিন, হুবাব (রাঃ)-এর প্রশ্নটি যেভাবে গ্রহণ করা হয়েছিল। তারপর কাজটা করে ফলটা আল্লাহর হাতে ছেড়ে দিন। আর ফল ভালো হলে ৩:১২৩ আয়াত বলে দিচ্ছে পরের কাজ কী, আল্লাহকে ভয় করা আর শোকর করা।" },
        ],
      },
    ],
  },
  "uhud": {
    sections: [
      {
        h: { en: "Revenge Comes to Madinah", bn: "প্রতিশোধ এল মদিনার দুয়ারে" },
        p: [
          { en: "A year after Badr, in Shawwal of the third year after the Hijra, March 625 CE, the Quraysh came north to settle the account. Ibn Ishaq puts their force at three thousand with two hundred horse, and says the caravan profits saved from Badr were spent to raise it. Women came with them beating drums, having lost fathers, brothers and sons at Badr.",
            bn: "বদরের এক বছর পর, হিজরতের তৃতীয় বছরের শাওয়ালে, ৬২৫ খ্রিস্টাব্দের মার্চে কুরাইশ হিসাব চুকাতে উত্তরে আসে। ইবনে ইসহাকের হিসাবে তাদের বাহিনী তিন হাজার, সঙ্গে দুইশ ঘোড়া। তিনি বলেন, বদরে যে কাফেলার মুনাফা বেঁচে গিয়েছিল, সেটাই খরচ হয় এই বাহিনী গড়তে। সঙ্গে এসেছিল নারীরাও, হাতে দফ, বদরে যারা বাবা, ভাই আর ছেলে হারিয়েছে।" },
          { en: "The Prophet ﷺ favoured staying inside Madinah and fighting in its lanes. Ibn Ishaq records that the younger men who had missed Badr pressed to go out, that he accepted the majority view, put on his armour, and refused to take it off when they changed their minds. About a thousand marched out; Abdullah ibn Ubayy turned back with roughly a third.",
            bn: "নবী ﷺ চেয়েছিলেন মদিনার ভেতরে থেকে গলিতে গলিতে লড়তে। ইবনে ইসহাক বলেন, বদরে যেতে না পারা তরুণরা বাইরে গিয়ে মোকাবিলার জন্য চাপ দিতে থাকেন। তিনি সংখ্যাগরিষ্ঠের মতই নেন, বর্ম পরেন, আর পরে তাঁরা মত বদলালে বর্ম খুলতে রাজি হননি। প্রায় এক হাজার লোক বের হন, আর আবদুল্লাহ ইবনে উবাই তাঁদের প্রায় এক-তৃতীয়াংশ নিয়ে ফিরে যায়।" },
        ],
      },
      {
        h: { en: "The Hill of the Archers", bn: "তিরন্দাজদের টিলা" },
        p: [
          { en: "The Prophet ﷺ drew up his line with Mount Uhud behind it, closing the one open flank with archers on a low hill. Sahih al-Bukhari 3039 records that he set fifty of them under Abdullah ibn Jubayr (RA) and told them to hold their place even if they saw birds snatching at the Muslims, and not to come down until word was sent.",
            bn: "নবী ﷺ উহুদ পাহাড়কে পেছনে রেখে সারি সাজান, আর খোলা যে একটি দিক ছিল তা ঢেকে দেন এক নিচু টিলায় তিরন্দাজ বসিয়ে। সহিহ বুখারি ৩০৩৯ নম্বর হাদিসে আছে, তিনি পঞ্চাশজনকে আবদুল্লাহ ইবনে জুবাইর (রাঃ)-এর অধীনে রাখেন আর বলে দেন, পাখিরা মুসলিমদের ছোঁ মেরে নিয়ে যেতে দেখলেও যেন তাঁরা জায়গা না ছাড়েন, খবর না পাঠানো পর্যন্ত যেন না নামেন।" },
          { en: "The battle opened well. Abu Dujana (RA) took the Prophet's ﷺ sword with its right; Hamzah, Ali, az-Zubayr and others broke the Quraysh line; the enemy standard-bearers fell one after another and their army gave way. Then Hamzah (RA) was killed by Wahshi ibn Harb, who had been promised his freedom for that one killing and waited for nothing else.",
            bn: "লড়াইয়ের শুরুটা ভালোই হয়েছিল। আবু দুজানা (রাঃ) নবী ﷺ-এর তলোয়ার নেন তার হক আদায়ের শর্তে। হামযা, আলি, যুবাইর ও অন্যরা কুরাইশের সারি ভেঙে দেন, শত্রুর পতাকাবাহীরা একের পর এক পড়তে থাকে, বাহিনী পিছু হটে। এরই মধ্যে ওয়াহশি ইবনে হারবের হাতে শহিদ হন হামযা (রাঃ)। ওই একটি হত্যার বিনিময়েই তাকে মুক্তির ওয়াদা দেওয়া হয়েছিল, আর সে অন্য কিছুর অপেক্ষাতেই ছিল না।" },
        ],
      },
      {
        h: { en: "When the Line Broke", bn: "সারি ভেঙে যাওয়ার মুহূর্ত" },
        p: [
          { en: "Seeing the camp being plundered, most of the archers left the hill for a share. Ibn Jubayr (RA) held his post with a few and was killed there. Khalid ibn al-Walid, still fighting for Quraysh, brought the cavalry around the uncovered hill and into the Muslim rear. The line was caught between two forces, and a cry went up that the Prophet ﷺ had been killed.",
            bn: "শত্রুশিবির লুট হচ্ছে দেখে তিরন্দাজদের বেশির ভাগ ভাগ নিতে টিলা ছেড়ে নামেন। ইবনে জুবাইর (রাঃ) অল্প কজনকে নিয়ে জায়গা আঁকড়ে থাকেন আর সেখানেই শহিদ হন। খালিদ ইবনুল ওয়ালিদ তখনো কুরাইশের পক্ষে, তিনি অরক্ষিত টিলা ঘুরে অশ্বারোহী নিয়ে মুসলিমদের পেছনে ঢুকে পড়েন। দুই দিকের চাপে সারি আটকে যায়, আর রব ওঠে, নবী ﷺ নিহত হয়েছেন।" },
          { en: "He had not. He was struck in the face, a lower tooth broken and rings of his helmet driven into his cheek. Mus'ab ibn Umayr (RA) was killed holding the banner. Talha (RA) shielded him and lost the use of a hand, and Umm Umarah (RA) fought at his side. Ibn Ishaq's roll of the Muslim dead runs to about seventy, most of them Ansar.",
            bn: "তিনি নিহত হননি। তাঁর মুখে আঘাত লাগে, নিচের একটি দাঁত ভাঙে, শিরস্ত্রাণের কড়া গালে ঢুকে যায়। পতাকা হাতে শহিদ হন মুসআব ইবনে উমাইর (রাঃ)। তালহা (রাঃ) তাঁকে আড়াল করতে গিয়ে একটি হাতের ব্যবহার হারান, উম্মে উমারা (রাঃ) তাঁর পাশে থেকেই লড়ে যান। ইবনে ইসহাকের শহিদ তালিকায় নাম প্রায় সত্তরটি, যাঁদের বেশির ভাগই আনসার।" },
        ],
      },
      {
        h: { en: "Al Imran Reads the Defeat", bn: "আলে ইমরান পড়ছে সেই পরাজয়" },
        p: [
          { en: "A long passage of Al Imran goes over the day. 3:121 opens with the Prophet ﷺ leaving his family in the morning to post the believers at their stations; 3:122 recalls two parties among them almost losing courage. 3:152 states it without softening: Allah fulfilled His promise while they were killing the enemy by His permission, until they lost courage, disputed about the order, and disobeyed.",
            bn: "সুরা আলে ইমরানের দীর্ঘ একটি অংশ সেই দিনটির উপর দিয়ে যায়। ৩:১২১ আয়াতের শুরুতেই নবী ﷺ সকালবেলা পরিবার থেকে বেরিয়ে মুমিনদের যুদ্ধের ঘাঁটিতে বসাচ্ছেন। ৩:১২২ আয়াতে আছে, তাঁদের দুই দল প্রায় ভীরুতা দেখিয়ে ফেলেছিল। আর ৩:১৫২ আয়াত কোনো রাখঢাক ছাড়াই বলছে, আল্লাহ তাঁর ওয়াদা সত্য করে দেখিয়েছিলেন, তাঁরা তাঁর অনুমতিতে শত্রু নিপাত করছিলেন, তারপর নিজেরাই দুর্বল হলেন, হুকুম নিয়ে মতভেদ করলেন, অবাধ্য হলেন।" },
          { en: "3:153 pictures them climbing away without looking back while the Messenger ﷺ called from behind. 3:165 answers the question they asked afterwards, where did this come from, with the words that it is from yourselves. 3:167 exposes those who stayed home, and 3:169 turns to the fallen: do not think them dead, they are alive with their Lord, receiving provision.",
            bn: "৩:১৫৩ আয়াতে ছবিটা আরও স্পষ্ট, তাঁরা উঁচু জমির দিকে উঠে যাচ্ছেন, ফিরে তাকানোর হুঁশ নেই, আর পেছন থেকে রাসুল ﷺ ডাকছেন। পরে তাঁরা প্রশ্ন করেছিলেন, এ বিপদ এল কোথা থেকে। ৩:১৬৫ আয়াত জবাব দেয়, এসেছে তোমাদের নিজেদের কাছ থেকেই। ৩:১৬৭ আয়াত ঘরে বসে থাকাদের চেহারা খুলে দেয়। আর ৩:১৬৯ আয়াত শহিদদের দিকে ফেরে, তাঁদের মৃত ভেবো না, তাঁরা রবের কাছে জীবিত, রিজিকপ্রাপ্ত।" },
        ],
      },
      {
        h: { en: "The Broken Tooth", bn: "ভাঙা দাঁতের বর্ণনা" },
        p: [
          { en: "Sahih Muslim preserves, from Anas (RA), that the Prophet's ﷺ tooth was broken on the day of Uhud and his head wounded, and that as he wiped the blood he said, how will a people prosper who have wounded their Prophet. The report attaches to it the revelation of 3:128, that the decision is not his, whether Allah forgives them or punishes them.",
            bn: "সহিহ মুসলিমে আনাস (রাঃ)-এর বর্ণনায় আছে, উহুদের দিন নবী ﷺ-এর দাঁত ভাঙে আর মাথা জখম হয়। রক্ত মুছতে মুছতে তিনি বললেন, যারা নিজেদের নবী ﷺ-কে রক্তাক্ত করল তারা কী করে কল্যাণ পাবে। এই বর্ণনার সঙ্গেই যুক্ত আছে ৩:১২৮ আয়াতের নাজিল হওয়া, ফায়সালার ভার তাঁর হাতে নয়, আল্লাহ তাদের মাফ করবেন না শাস্তি দেবেন সেটা তাঁরই এখতিয়ার।" },
          { en: "On the burial, Sahih al-Bukhari records that the martyrs of Uhud were buried unwashed in the clothes they died in, without being prayed over, two in one grave, and that the Prophet ﷺ asked which of the two had taken more of the Quran and placed him first towards the qiblah. That is where they lie still.",
            bn: "দাফনের ব্যাপারে সহিহ বুখারিতে আছে, উহুদের শহিদদের গোসল ছাড়াই তাঁদের পরনের কাপড়ে দাফন করা হয়, জানাজা ছাড়াই, এক কবরে দুজন করে। নবী ﷺ জিজ্ঞেস করতেন দুজনের মধ্যে কে কুরআন বেশি ধারণ করেছেন, আর তাঁকেই কিবলার দিকে আগে রাখতেন। আজও তাঁরা সেখানেই শুয়ে আছেন।" },
        ],
      },
      {
        h: { en: "Those Who Stood Their Ground", bn: "যাঁরা জায়গা ছাড়েননি" },
        p: [
          { en: "Abdullah ibn Jubayr (RA) obeyed an order that had stopped making sense to everyone else, and died holding it; the verse about disputing the order concerns the men who left him. Mus'ab ibn Umayr (RA), who had taught Madinah its Quran before the Hijra, carried the banner until he could not, and was buried in a cloak too short to cover him.",
            bn: "আবদুল্লাহ ইবনে জুবাইর (রাঃ) এমন এক হুকুম মেনেছিলেন যেটা তখন আর কারও কাছে যুক্তিসঙ্গত ঠেকছিল না, আর সেটা আঁকড়ে ধরেই তিনি শহিদ হন। হুকুম নিয়ে মতভেদের যে আয়াত, তা তাঁকে ছেড়ে যাওয়া লোকদের নিয়েই। মুসআব ইবনে উমাইর (রাঃ), যিনি হিজরতের আগে মদিনাকে কুরআন শিখিয়েছিলেন, শেষ পর্যন্ত পতাকা ধরে রাখেন, আর দাফন হন এমন চাদরে যা তাঁকে ঢাকতেও পারেনি।" },
          { en: "Hamzah (RA) was mutilated after death, and the Prophet ﷺ stood over him in a grief the sources record plainly. Wahshi ibn Harb (RA), who killed him, later accepted Islam, which is one reason the sirah is not a story of permanent enemies. Hanzalah (RA), who came out from his wedding night, was killed and is remembered as the one the angels washed.",
            bn: "হামযা (রাঃ)-এর দেহ মৃত্যুর পর বিকৃত করা হয়, আর নবী ﷺ তাঁর পাশে দাঁড়িয়ে যে শোক করেছিলেন সূত্রগুলো তা সোজাসুজিই লিখেছে। ওয়াহশি ইবনে হারব (রাঃ), যিনি তাঁকে হত্যা করেছিলেন, পরে ইসলাম গ্রহণ করেন। এ কারণেই সিরাত চিরস্থায়ী শত্রুতার গল্প নয়। হানজালা (রাঃ) বাসররাত থেকে বেরিয়ে এসে শহিদ হন, তাঁকে ফেরেশতারা গোসল করিয়েছিলেন বলেই তিনি স্মরণীয়।" },
        ],
      },
      {
        h: { en: "A Defeat That Purified", bn: "যে পরাজয় সাফ করে দিল" },
        p: [
          { en: "Uhud did not reverse Badr; the Quraysh withdrew without taking Madinah. What changed was the community's understanding of itself. 3:166-167 says the day was permitted so that the believers and the hypocrites would be made evident, and that is what it did. The morning after, the wounded were called out again towards Hamra al-Asad, which has its own page in this timeline.",
            bn: "উহুদ বদরকে উল্টে দেয়নি, কুরাইশ মদিনা দখল না করেই ফিরে যায়। বদলে গেল সমাজের নিজেকে চেনার ধরন। ৩:১৬৬ ও ৩:১৬৭ আয়াত বলছে, সেই দিনটি আল্লাহর অনুমতিতেই এসেছিল, যাতে কে মুমিন আর কে মুনাফিক তা স্পষ্ট হয়ে যায়। ঠিক তা-ই হলো। পরদিন সকালেই আহত সাহাবিদের আবার ডাকা হয় হামরাউল আসাদের দিকে, যার কথা এই সময়রেখার আলাদা পাতায় আছে।" },
          { en: "It also produced one of the plainest instructions on leadership in the Quran. 3:159 tells the Prophet ﷺ that it was by mercy from Allah that he was lenient with them, that harshness would have scattered them, and orders him to pardon them, seek forgiveness for them and consult them, after a defeat their own indiscipline had caused. 3:160 puts the outcome back with Allah.",
            bn: "নেতৃত্ব নিয়ে কুরআনের সবচেয়ে স্পষ্ট নির্দেশগুলোর একটিও এল এখান থেকেই। ৩:১৫৯ আয়াত নবী ﷺ-কে বলছে, আল্লাহর রহমতেই তিনি তাঁদের প্রতি কোমল, রূঢ় হলে তাঁরা সরে যেতেন। এরপর হুকুম, তাঁদের মাফ করে দিন, তাঁদের জন্য ইস্তিগফার করুন, আর কাজে তাঁদের সঙ্গে পরামর্শ করুন। এমন এক পরাজয়ের পর, যা তাঁদের নিজেদের বেপরোয়া আচরণেই হয়েছিল। ৩:১৬০ আয়াত ফলটা আবার আল্লাহর হাতেই ফিরিয়ে দেয়।" },
        ],
      },
      {
        h: { en: "Holding Your Post", bn: "নিজের জায়গা আঁকড়ে থাকা" },
        p: [
          { en: "The archers were not cowards and were not disloyal. They left a position because the reason for holding it appeared to have passed. Almost every avoidable failure a believer has follows that shape: a limit accepted while it costs nothing, abandoned the moment it seems unnecessary. The order had covered exactly this case in advance, and it was still ignored.",
            bn: "তিরন্দাজরা কাপুরুষ ছিলেন না, বিশ্বাসঘাতকও ছিলেন না। তাঁরা জায়গা ছেড়েছিলেন এই ভেবে যে জায়গাটা ধরে রাখার কারণটাই আর নেই। মুমিনের এড়ানো যেত এমন প্রায় প্রতিটি ব্যর্থতার চেহারা এ রকমই। যতক্ষণ কিছু খরচ হচ্ছে না ততক্ষণ সীমাটা মানা, আর অপ্রয়োজনীয় মনে হওয়ামাত্র ছেড়ে দেওয়া। হুকুমটা ঠিক এই অবস্থার কথা আগেই বলে রেখেছিল, তবু তা মানা হয়নি।" },
          { en: "So write down what the instruction actually said, and hold it when the situation looks resolved rather than only when it looks dangerous. And when you have failed in something like that, notice what 3:152 and 3:155 do next: they say Allah has already forgiven them. A defeat caused by your own disobedience is not the end of your standing with Him.",
            bn: "তাই নির্দেশটা ঠিক কী বলেছিল তা লিখে রাখুন, আর ধরে রাখুন তখনই যখন মনে হচ্ছে বিপদ কেটে গেছে, শুধু বিপদের সময় নয়। আর এমন কিছুতে ব্যর্থ হলে খেয়াল করুন ৩:১৫২ ও ৩:১৫৫ আয়াত এরপর কী বলে। বলে, আল্লাহ তাঁদের মাফ করে দিয়েছেন। নিজের অবাধ্যতায় হয়ে যাওয়া পরাজয় তাঁর কাছে আপনার মর্যাদার শেষ কথা নয়।" },
        ],
      },
    ],
  },
  "trench": {
    sections: [
      {
        h: { en: "A Coalition Against One City", bn: "এক শহরের বিরুদ্ধে জোট" },
        p: [
          { en: "In the fifth year after the Hijra, 627 CE, chiefs of Banu al-Nadir exiled to Khaybar went to Mecca and then to Ghatafan to raise an alliance against Madinah. Ibn Ishaq places the siege in Shawwal of 5 AH and the combined force at about ten thousand; Musa ibn Uqbah dated it a year earlier. The Muslims are counted at around three thousand.",
            bn: "হিজরতের পঞ্চম বছরে, ৬২৭ খ্রিস্টাব্দে, খায়বারে নির্বাসিত বনু নাদিরের নেতারা মক্কায় যান, তারপর গাতফানে, মদিনার বিরুদ্ধে জোট বাঁধতে। ইবনে ইসহাক অবরোধটি রাখেন ৫ হিজরির শাওয়ালে আর মিলিত বাহিনীর সংখ্যা বলেন প্রায় দশ হাজার। মুসা ইবনে উকবা অভিযানটির তারিখ দেন এক বছর আগে। মুসলিমদের সংখ্যা ধরা হয় প্রায় তিন হাজার।" },
          { en: "Madinah could not meet a force of that size in the open, and the coalition had cavalry it could not match. On most sides the oasis was protected by lava fields and by dense palm groves and joined houses. The north was open ground, and an attack on the city had to come across it.",
            bn: "এত বড় বাহিনীর সঙ্গে খোলা ময়দানে মদিনার পেরে ওঠার কথা নয়, আর জোটের যে অশ্বারোহী বাহিনী ছিল তার সমকক্ষ কিছু মদিনার ছিল না। জনপদের বেশির ভাগ দিক আগলে রেখেছিল লাভার পাথুরে জমি, ঘন খেজুরবাগান আর গায়ে গায়ে লাগা ঘরবাড়ি। খোলা ছিল কেবল উত্তর দিক, আর শহরে হামলা করতে হলে সেদিক দিয়েই আসতে হতো।" },
        ],
      },
      {
        h: { en: "Digging the Northern Line", bn: "উত্তরের খন্দক খোঁড়া" },
        p: [
          { en: "Salman al-Farsi (RA) said that in Persia, when they were besieged, they dug a trench. The Prophet ﷺ accepted the plan and the whole community dug the exposed northern side in assigned lengths. Sahih al-Bukhari records al-Bara ibn Azib (RA) describing the Prophet ﷺ carrying earth until the dust hid his stomach, reciting verses of Abdullah ibn Rawahah (RA) as he worked.",
            bn: "সালমান ফারসি (রাঃ) বললেন, পারস্যে অবরোধে পড়লে তাঁরা চারপাশে খন্দক খুঁড়তেন। নবী ﷺ পরিকল্পনাটি গ্রহণ করেন, আর গোটা সমাজ ভাগ ভাগ করে উত্তরের খোলা দিকটা খুঁড়তে নামে। সহিহ বুখারিতে বারা ইবনে আজিব (রাঃ) বলেছেন, নবী ﷺ নিজে মাটি বইছিলেন, ধুলায় তাঁর পেট ঢেকে গিয়েছিল, আর কাজ করতে করতে তিনি আবদুল্লাহ ইবনে রাওয়াহা (রাঃ)-এর কবিতা আওড়াচ্ছিলেন।" },
          { en: "They dug hungry. Anas (RA) reports the Prophet ﷺ saying, O Allah, the true life is the life of the next world, so forgive the Ansar and the Muhajirun. The diggers answered with their own pledge chant. Jabir (RA) relates a small meal feeding many. Ibn Ishaq, not the Sahihs, carries the rock struck three times and the promise of Syria, Persia and Yemen.",
            bn: "তাঁরা খুঁড়েছেন খালি পেটে। আনাস (রাঃ) বলেছেন, নবী ﷺ বলতেন, হে আল্লাহ, আসল জীবন তো আখিরাতেরই জীবন, আপনি আনসার ও মুহাজিরদের মাফ করে দিন। জবাবে খননকারীরা তুলতেন নিজেদের বাইআতের ধ্বনি। জাবির (রাঃ) বলেছেন খন্দকে অল্প খাবারে বহু মানুষ খাওয়ানোর ঘটনা। আর তিনবার পাথরে আঘাত আর শাম, পারস্য ও ইয়েমেনের ওয়াদার বর্ণনা এসেছে ইবনে ইসহাকের সূত্রে, দুই সহিহ থেকে নয়।" },
        ],
      },
      {
        h: { en: "Siege, Cold and Rumour", bn: "অবরোধ, শীত আর গুজব" },
        p: [
          { en: "The cavalry could not cross. Ibn Ishaq says a few horsemen found a narrow place and got over, among them Amr ibn Abd Wudd, who was killed by Ali (RA). The siege settled into weeks of arrows, cold and hunger; Ibn Ishaq gives it around twenty nights or more, al-Waqidi a shorter span. Sa'd ibn Mu'adh (RA) took an arrow that opened a vein in his arm.",
            bn: "ঘোড়সওয়াররা খন্দক পার হতে পারেনি। ইবনে ইসহাক বলেন, অল্প কয়েকজন সরু একটা জায়গা পেয়ে পার হয়েছিল, তাদের মধ্যে ছিল আমর ইবনে আবদে উদ, যাকে আলি (রাঃ) হত্যা করেন। এরপর অবরোধ গড়ায় সপ্তাহের পর সপ্তাহ, তির, শীত আর ক্ষুধা নিয়ে। ইবনে ইসহাকের হিসাবে বিশ রাত বা তার বেশি, ওয়াকিদির হিসাবে আরও কম। সাদ ইবনে মুআয (রাঃ) এমন তির খান যাতে হাতের শিরা কেটে যায়।" },
          { en: "Then Huyayy ibn Akhtab persuaded Banu Qurayza to leave the covenant, which is told on its own page in this timeline. Nu'aym ibn Mas'ud (RA), newly Muslim and not yet known to be, spread suspicion between the tribe and the confederates until neither would move first. A cold east wind then tore through the besiegers' camp at night, and they left.",
            bn: "এরই মধ্যে হুয়াই ইবনে আখতাব বনু কুরাইজাকে চুক্তি থেকে সরিয়ে আনে, যে কথা এই সময়রেখার আলাদা পাতায় বলা আছে। নুআইম ইবনে মাসউদ (রাঃ) তখন সদ্য মুসলিম, কেউ তা জানে না। তিনি গোত্র আর জোটের মধ্যে এমন সন্দেহ ছড়িয়ে দেন যে কোনো পক্ষই আগে এগোতে রাজি হলো না। এরপর রাতে পুবের ঠান্ডা ঝড় অবরোধকারীদের শিবির লন্ডভন্ড করে দেয়, আর তারা ফিরে যায়।" },
        ],
      },
      {
        h: { en: "Al-Ahzab on the Siege", bn: "অবরোধ নিয়ে সুরা আহযাব" },
        p: [
          { en: "33:9 tells the believers to remember the favour of Allah when the armies came and He sent against them a wind and forces they did not see. 33:10 describes the fear exactly: they came from above and below, eyes shifted, hearts reached the throats, and the believers assumed various assumptions about Allah. 33:11 says they were tested and shaken with a severe shaking.",
            bn: "৩৩:৯ আয়াতে মুমিনদের বলা হচ্ছে আল্লাহর সেই অনুগ্রহ মনে রাখতে, যখন বাহিনীগুলো এগিয়ে এসেছিল আর তিনি পাঠালেন ঝড়ো হাওয়া ও এমন সৈন্য যা তাঁরা দেখেননি। ৩৩:১০ আয়াত ভয়টাকে হুবহু এঁকে দেয়, শত্রু এল উপর থেকে আর নিচ থেকে, চোখ বিস্ফারিত হলো, প্রাণ কণ্ঠে এসে ঠেকল, আর আল্লাহ সম্পর্কে নানা রকম ধারণা মাথায় এল। ৩৩:১১ আয়াত বলছে, সেখানে তাঁদের পরীক্ষা করা হয়েছিল, ভীষণ কম্পনে কাঁপানো হয়েছিল।" },
          { en: "33:12-13 quotes what was said inside the city: that Allah and His Messenger ﷺ had promised only delusion, that there was no stand to be made in Yathrib so people should go home, and that houses were exposed when they were not. Against that, 33:22 records the believers seeing the armies and saying this is what Allah and His Messenger ﷺ promised us. 33:25 closes the passage: He turned back those who disbelieved in their rage, having gained no good.",
            bn: "শহরের ভেতরে কী বলা হচ্ছিল, তা তুলে ধরে ৩৩:১২ ও ৩৩:১৩ আয়াত। বলা হচ্ছিল, আল্লাহ ও তাঁর রাসুল ﷺ ধোঁকা ছাড়া কিছু দেননি; ইয়াসরিবে দাঁড়ানোর জো নেই, তাই সবাই ঘরে ফিরে যাও; আর আমাদের বাড়িঘর অরক্ষিত, অথচ তা অরক্ষিত ছিল না। এর বিপরীতে ৩৩:২২ আয়াতে মুমিনরা বাহিনীগুলো দেখে বলছেন, আল্লাহ ও তাঁর রাসুল ﷺ এরই ওয়াদা দিয়েছিলেন। আর ৩৩:২৫ আয়াতে অংশটির শেষ, আল্লাহ কাফিরদের তাদের রাগের অবস্থাতেই ফিরিয়ে দিলেন, কোনো কল্যাণ তারা পায়নি।" },
        ],
      },
      {
        h: { en: "The Tent in the Mosque", bn: "মসজিদের ভেতরের তাঁবু" },
        p: [
          { en: "Sahih al-Bukhari 4122 records that when Sa'd ibn Mu'adh (RA) was wounded at the trench the Prophet ﷺ had a tent pitched for him in the mosque, so that he could visit him without going far. The same report carries Sa'd's du'a: if any of the war with Quraysh remained, keep him alive for it; if it had ended, make this wound his martyrdom.",
            bn: "সহিহ বুখারি ৪১২২ নম্বর হাদিসে আছে, খন্দকে সাদ ইবনে মুআয (রাঃ) আহত হলে নবী ﷺ মসজিদের ভেতরেই তাঁর জন্য তাঁবু খাটিয়ে দেন, যাতে কাছ থেকেই তাঁকে দেখতে পারেন। এই ঘটনার সঙ্গেই আছে সাদ (রাঃ)-এর দোয়া, কুরাইশের সঙ্গে যুদ্ধের কিছু বাকি থাকলে যেন তাঁকে সেজন্য বাঁচিয়ে রাখা হয়, আর যুদ্ধ শেষ হয়ে থাকলে যেন এই ক্ষতই তাঁর শাহাদাত হয়।" },
          { en: "Sahih al-Bukhari also preserves the du'a the Prophet ﷺ made against the confederates, addressing Allah as the Revealer of the Book, swift in reckoning, and asking Him to defeat them and shake them. And Sahih Muslim preserves Hudhayfah ibn al-Yaman's (RA) account of being sent alone into the enemy camp on the last freezing night, finding it already breaking up.",
            bn: "সহিহ বুখারি জোটবাহিনীর বিরুদ্ধে নবী ﷺ-এর দোয়াটিও ধরে রেখেছে। তিনি আল্লাহকে ডাকছেন কিতাব নাজিলকারী ও দ্রুত হিসাবগ্রহণকারী বলে, আর চাইছেন যেন তিনি জোটবাহিনীকে পরাস্ত করেন, তাদের নাড়িয়ে দেন। আর সহিহ মুসলিমে আছে হুযায়ফা ইবনুল ইয়ামান (রাঃ)-এর বর্ণনা, শেষ হিম রাতে তাঁকে একা শত্রুশিবিরে পাঠানো হয়েছিল, গিয়ে তিনি দেখেন শিবির ভাঙতে শুরু করেছে।" },
        ],
      },
      {
        h: { en: "The Persian, the Scout, the Chief", bn: "পারস্যের লোক, গুপ্তচর, সর্দার" },
        p: [
          { en: "Salman al-Farsi (RA) had crossed most of the known world looking for this religion and reached Madinah as a slave. His one suggestion at the trench, drawn from Persian siegecraft, changed the campaign; the sirah records, though not by the strongest chain, that the Muhajirun and the Ansar each claimed him and the Prophet ﷺ answered that Salman is of us, the people of the house.",
            bn: "সালমান ফারসি (রাঃ) এই দ্বীনের খোঁজে জানা দুনিয়ার প্রায় পুরোটা পাড়ি দিয়েছিলেন, আর মদিনায় পৌঁছেছিলেন দাস হয়ে। খন্দকে তাঁর একটিমাত্র পরামর্শ, পারস্যের অবরোধযুদ্ধের কৌশল থেকে নেওয়া, গোটা অভিযানের চেহারাই বদলে দেয়। সিরাতে এসেছে, যদিও সনদ খুব মজবুত নয়, মুহাজির ও আনসার দুই পক্ষই তাঁকে নিজেদের লোক বলে দাবি করছিলেন, আর নবী ﷺ বললেন, সালমান আমাদেরই লোক, আহলে বাইতের।" },
          { en: "Hudhayfah (RA) did the one job nobody volunteers for, alone, in a wind that had beaten a whole army. Sa'd ibn Mu'adh (RA) took the wound that would kill him within weeks. Among the opponents, Abu Sufyan led an alliance he could not hold together, and Nu'aym (RA) showed what one trusted man can do to a coalition of people who do not trust each other.",
            bn: "হুযায়ফা (রাঃ) সেই কাজটা করলেন যেটার জন্য কেউ স্বেচ্ছায় হাত তোলে না, একা, এমন ঝড়ের মধ্যে যা গোটা এক বাহিনীকে কাবু করে ফেলেছে। সাদ ইবনে মুআয (রাঃ) নিলেন সেই আঘাত, যা কয়েক সপ্তাহের মধ্যে তাঁর জীবন নেবে। বিপক্ষে আবু সুফিয়ান এমন এক জোটের নেতৃত্বে, যা সে ধরে রাখতে পারেনি। আর নুআইম (রাঃ) দেখিয়ে দিলেন, পরস্পরকে অবিশ্বাস করা জোটের ভেতরে একজন বিশ্বস্ত মানুষ কী করতে পারে।" },
        ],
      },
      {
        h: { en: "The Last Siege of Madinah", bn: "মদিনার শেষ অবরোধ" },
        p: [
          { en: "No confederation of that size was raised against the city again. Sahih al-Bukhari records the Prophet ﷺ saying afterwards that now we will march against them and they will not march against us. The initiative passed, and the road from the trench runs on to Hudaybiyyah the following year and to the opening of Mecca after that.",
            bn: "এত বড় জোট আর কখনো মদিনার বিরুদ্ধে দাঁড়ায়নি। সহিহ বুখারিতে আছে, নবী ﷺ এরপর বলেছিলেন, এখন আমরা তাদের দিকে অভিযান চালাব, তারা আমাদের দিকে আসবে না। উদ্যোগটা হাতবদল হয়ে গেল। খন্দক থেকে যে পথ শুরু, তা পরের বছর হুদায়বিয়ায় গিয়ে পৌঁছায়, আর তারপর মক্কা বিজয়ে।" },
          { en: "The siege also settled two things inside Madinah. It made the position of the hypocrites public rather than private, in the words 33:12-13 quotes back at them. And it left the question of Banu Qurayza's breach of the covenant to be dealt with as soon as the armies withdrew, which is the event that follows this one.",
            bn: "মদিনার ভেতরেও অবরোধ দুটি বিষয় ফয়সালা করে দেয়। মুনাফিকদের অবস্থানটা আর ভেতরের কথা রইল না, প্রকাশ্য হয়ে গেল, ৩৩:১২ ও ৩৩:১৩ আয়াত তাদেরই কথা তাদের সামনে তুলে ধরল। আর বনু কুরাইজার চুক্তিভঙ্গের প্রশ্নটি বাহিনীগুলো সরে যাওয়ার সঙ্গে সঙ্গেই মীমাংসার জন্য রয়ে গেল, যে ঘটনা এই ঘটনার ঠিক পরেই।" },
        ],
      },
      {
        h: { en: "Planning and Trusting Together", bn: "পরিকল্পনা আর ভরসা একসঙ্গে" },
        p: [
          { en: "The Prophet ﷺ took a defensive idea from a Persian convert, an ordinary man in his community, and reorganised the entire campaign around it. Nothing about the trench itself was miraculous. The wind was, and it came after the digging rather than instead of it. That order is the practical content of the whole event.",
            bn: "নবী ﷺ প্রতিরক্ষার একটা বুদ্ধি নিলেন পারস্য থেকে এসে ইসলাম কবুল করা এক সাহাবির কাছ থেকে, যিনি ছিলেন সমাজের একেবারে সাধারণ একজন মানুষ। তারপর গোটা অভিযান সাজালেন সেই বুদ্ধির উপর। খন্দকে অলৌকিক কিছু ছিল না। অলৌকিক ছিল ঝড়টা, আর সেটা এসেছিল খোঁড়ার কাজ শেষ হওয়ার পর, খোঁড়ার বদলে নয়। এই ক্রমটাই গোটা ঘটনার কাজের কথা।" },
          { en: "So do both halves. Bring in the plan of whoever knows the problem, wherever they are from, and put the work in before you ask for relief. Then read 33:22 and notice what the believers said when the armies appeared: not that they would win, but that this was what they had been promised. Fear and trust sat in the same sentence.",
            bn: "তাই দুটো কাজই করুন। সমস্যাটা যে সত্যিই জানে তার পরিকল্পনা কাজে লাগান, সে যেখান থেকেই আসুক, আর মুক্তি চাওয়ার আগে পরিশ্রমটা করে ফেলুন। এরপর ৩৩:২২ আয়াত পড়ুন আর খেয়াল করুন, বাহিনীগুলো দেখে মুমিনরা কী বলেছিলেন। তাঁরা বলেননি যে জয় নিশ্চিত। তাঁরা বলেছিলেন, এরই ওয়াদা আমাদের দেওয়া হয়েছিল। ভয় আর ভরসা একই বাক্যে ছিল।" },
        ],
      },
    ],
  },
};

if (typeof module !== 'undefined' && module.exports) module.exports = { SEERAH_ARTICLES };
