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
  "birth": {
    "sections": [
      {
        "h": {
          "en": "Makkah Before the Elephant",
          "bn": "হস্তীবর্ষের আগের মক্কা"
        },
        "p": [
          {
            "en": "Makkah before 570 CE lived off two things the sanctuary made possible: the pilgrimage, and caravans that travelled safely because the Ka'bah stood there. The Quraysh divided the offices of the House among their clans, and Banu Hashim held the watering of the pilgrims after Abd al-Muttalib reopened Zamzam. His son Abdullah married Aminah bint Wahb of Banu Zuhrah.",
            "bn": "৫৭০ খ্রিস্টাব্দের আগের মক্কা বেঁচে ছিল দুটো জিনিসের উপর, আর দুটোই সম্ভব হয়েছিল হারামের কারণে। এক, হজ্জের মৌসুম। দুই, বাণিজ্য কাফেলা, যা নিরাপদে চলত কারণ কাবা এখানেই দাঁড়ানো। কুরাইশরা কাবার দায়িত্বগুলো গোত্রে গোত্রে ভাগ করে নিয়েছিল। আবদুল মুত্তালিব জমজম কূপ আবার খুলে দেওয়ার পর হাজীদের পানি খাওয়ানোর কাজ ছিল বনু হাশিমের হাতে। তাঁর ছেলে আবদুল্লাহ বিয়ে করেন বনু জুহরার আমিনা বিনতে ওয়াহবকে।"
          },
          {
            "en": "Abdullah did not live to see him. Ibn Ishaq places his death while the child was still in the womb, on a journey, among his kin at Yathrib; Ibn Sa'd preserves reports putting it some months after the birth. The estate was five camels, a flock, and an Abyssinian servant called Barakah. It passed to a boy who had not yet been born.",
            "bn": "আবদুল্লাহ ছেলেকে দেখে যেতে পারেননি। ইবনে ইসহাক বলেন, সন্তান তখনো মায়ের গর্ভে, এমন সময় সফরে গিয়ে ইয়াসরিবে আত্মীয়দের ঘরে তিনি ইন্তেকাল করেন। ইবনে সাদ আবার এমন বর্ণনাও রেখেছেন যেখানে জন্মের কয়েক মাস পরের কথা বলা হয়েছে। রেখে গিয়েছিলেন পাঁচটি উট, কিছু ছাগল আর বারাকা নামের এক হাবশি দাসী। সেই সামান্য উত্তরাধিকার গিয়ে পড়ল এমন এক সন্তানের নামে, যাঁর তখনো জন্মই হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The March on the House",
          "bn": "কাবার দিকে অভিযান"
        },
        "p": [
          {
            "en": "Yemen was then governed for the Abyssinians by Abrahah, who raised a great church at Sana'a and wanted the Arabs to make their pilgrimage there. Ibn Ishaq reports that a man of Kinanah defiled it, and that Abrahah marched north to pull down the Ka'bah in answer. He brought an elephant with him, and the tribes who tried to stop him on the road were beaten aside.",
            "bn": "তখন ইয়ামান শাসন করছিলেন আবরাহা, হাবশিদের পক্ষ থেকে। সানআয় তিনি বিশাল এক গির্জা তোলেন এবং চাইছিলেন আরবের হজ্জ ওদিকেই ঘুরে যাক। ইবনে ইসহাক বলেন, কিনানা গোত্রের এক লোক সেই গির্জা নাপাক করে দেয়, আর তারই জবাবে আবরাহা কাবা ভাঙতে উত্তরে রওনা দেন। সঙ্গে ছিল হাতি। পথে যে গোত্রগুলো বাধা দিতে এসেছিল, তারা হেরে সরে যায়।"
          },
          {
            "en": "At al-Mughammis his troops drove off the grazing herds of the town, two hundred camels of Abd al-Muttalib among them. The old man came to the camp and asked for his camels. Ibn Ishaq has Abrahah astonished that he said nothing of the House he had come to destroy, and Abd al-Muttalib answering that he owned the camels, while the House had an Owner who would defend it.",
            "bn": "মুগাম্মিসে পৌঁছে আবরাহার সৈন্যরা মক্কার চরানো পশু হাঁকিয়ে নিয়ে যায়, তার মধ্যে আবদুল মুত্তালিবের দুইশ উটও ছিল। বৃদ্ধ লোকটি ছাউনিতে গিয়ে নিজের উট ফেরত চান। ইবনে ইসহাকের বর্ণনায় আবরাহা অবাক হয়ে বলেন, যে ঘর ভাঙতে তিনি এসেছেন সে ঘর নিয়ে এই লোকের কোনো কথাই নেই। আবদুল মুত্তালিব জবাব দেন, উটের মালিক আমি, আর ঘরের মালিক আলাদা, তিনিই তাঁর ঘর বাঁচাবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Birds and Eaten Straw",
          "bn": "ঝাঁকে ঝাঁকে পাখি"
        },
        "p": [
          {
            "en": "The Quraysh withdrew into the hills and left the sanctuary empty. In Ibn Ishaq's account the elephant knelt at the edge of the sacred ground and would not be driven towards Makkah, though it rose readily when turned any other way. Then flights of birds passed over the army carrying stones, and the men they struck died. Abrahah died at Sana'a.",
            "bn": "কুরাইশরা পাহাড়ে সরে গিয়ে হারাম খালি ছেড়ে দেয়। ইবনে ইসহাকের বর্ণনায় হাতিটি হারামের সীমানায় এসে বসে পড়ে; মক্কার দিকে কিছুতেই তাকে আর ওঠানো যায়নি, অথচ অন্য দিকে মুখ ঘোরালেই সে দিব্যি উঠে দাঁড়াত। এরপর ঝাঁকে ঝাঁকে পাখি এসে বাহিনীর উপর দিয়ে উড়ে যায়, সঙ্গে পাথর। যাকেই পাথর লাগল, সে মারা পড়ল। আবরাহা সানআয় গিয়ে মারা যান।"
          },
          {
            "en": "Arabia dated by it afterwards. The Year of the Elephant became the fixed point the biographers count from, which is why the sirah can say the Prophet ﷺ was about thirty-five when the Ka'bah was rebuilt and about forty at Hira. An army that never took the town ended up giving a peninsula its calendar.",
            "bn": "এরপর থেকে আরবরা এই বছর ধরেই হিসাব করত। হস্তীবর্ষ হয়ে যায় সীরাত লেখকদের নির্দিষ্ট মাপকাঠি। এ কারণেই বলা যায়, কাবা পুনর্নির্মাণের সময় নবী ﷺ-এর বয়স ছিল প্রায় পঁয়ত্রিশ, আর হেরার সময় প্রায় চল্লিশ। যে বাহিনী শহরটাই দখল করতে পারল না, গোটা উপদ্বীপ তার নাম ধরে বছর গুনতে শুরু করল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Monday in Rabi al-Awwal",
          "bn": "রবিউল আউয়ালের এক সোমবার"
        },
        "p": [
          {
            "en": "In that year Muhammad ﷺ was born in the quarter of Banu Hashim, to a widow. Ibn Ishaq names the day a Monday in Rabi al-Awwal and gives the twelfth; other early reports name the second and the eighth, and the biographers never settled it. Abd al-Muttalib came, carried the child into the Ka'bah and gave thanks, then returned him to his mother.",
            "bn": "সেই বছরেই বনু হাশিমের মহল্লায় এক বিধবার ঘরে মুহাম্মদ ﷺ জন্ম নেন। ইবনে ইসহাক দিনটিকে বলেন রবিউল আউয়াল মাসের সোমবার, তারিখ বারো। আগেকার অন্য বর্ণনায় দুই ও আট তারিখও এসেছে; সীরাত লেখকরা কখনো এক তারিখে থিতু হননি। আবদুল মুত্তালিব এসে শিশুটিকে কাবার ভেতরে নিয়ে যান, শোকর আদায় করেন, তারপর মায়ের কোলে ফিরিয়ে দেন।"
          },
          {
            "en": "He named him Muhammad. Asked why he had chosen a name nobody in Quraysh carried, Ibn Ishaq reports him saying that he hoped the boy would be praised in heaven and on earth. The marvels later attached to that night, the palaces of Syria lit and the arches of Khosrau falling, come from much later material with no early chain.",
            "bn": "নাম রাখলেন মুহাম্মদ। কুরাইশের কেউ যে নাম রাখে না, সেটাই কেন বাছলেন জিজ্ঞেস করা হলে ইবনে ইসহাকের বর্ণনায় তিনি বলেন, তিনি চান ছেলেটি আসমানে ও জমিনে প্রশংসিত হোক। সেই রাতকে ঘিরে পরে যেসব অলৌকিক কথা জুড়ে গেছে, যেমন শামের প্রাসাদ আলোয় ভরে ওঠা বা কিসরার মহলের খিলান ভেঙে পড়া, সেগুলো অনেক পরের বইয়ে এসেছে এবং আগের কোনো সনদ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Fil and the Winter Caravan",
          "bn": "সূরা ফীল ও শীতের কাফেলা"
        },
        "p": [
          {
            "en": "The event has a surah of its own. 105:1 asks whether he has not considered how his Lord dealt with the companions of the elephant, and 105:2 whether He did not turn their plan into misguidance. 105:3 sends birds in flocks against them, 105:4 has those birds strike with stones of hard clay, and 105:5 leaves the army like eaten straw.",
            "bn": "ঘটনাটির জন্য কুরআনে আলাদা সূরা আছে। ১০৫:১ জিজ্ঞেস করে, হাতিওয়ালাদের সঙ্গে তোমার রব কী করেছিলেন তুমি কি দেখোনি। ১০৫:২ বলে, তিনি কি তাদের চক্রান্ত ব্যর্থ করে দেননি। ১০৫:৩ পাঠায় ঝাঁকে ঝাঁকে পাখি, ১০৫:৪ আয়াতে সেই পাখিরা ছোড়ে পাথরের কাঁকর, আর ১০৫:৫ গোটা বাহিনীকে করে দেয় ভক্ষিত তৃণ-ভুষির মতো।"
          },
          {
            "en": "The surah after it draws the conclusion Quraysh missed. 106:1 and 106:2 name what Quraysh had grown accustomed to, the caravan of winter and summer; 106:3 tells them to worship the Lord of this House, who according to 106:4 fed them against hunger and made them safe from fear. 3:96 says the same from another side: the first House set up for mankind, at Bakkah, blessed and a guidance for the worlds.",
            "bn": "পরের সূরাটি সেই সিদ্ধান্তে পৌঁছে দেয়, যা কুরাইশরা ধরতে পারেনি। ১০৬:১ ও ১০৬:২ কুরাইশ যাতে অভ্যস্ত হয়ে উঠেছিল সেই কথাই বলে, শীত ও গ্রীষ্মের সফর। ১০৬:৩ বলে, এই ঘরের রবের ইবাদত করাই তাদের কাজ; ১০৬:৪ অনুযায়ী তিনিই ক্ষুধায় খাবার দিয়েছেন আর ভয় থেকে নিরাপদ করেছেন। ৩:৯৬ অন্য দিক থেকে একই কথা বলে, মানুষের জন্য স্থাপিত প্রথম ঘর মক্কায়, বরকতময় এবং সারা জাহানের পথপ্রদর্শক।"
          }
        ]
      },
      {
        "h": {
          "en": "Why He Fasted on Mondays",
          "bn": "সোমবারের রোজা কেন"
        },
        "p": [
          {
            "en": "Sahih Muslim 1162 carries the only narration about his birth that comes from the Prophet ﷺ himself. Abu Qatadah (RA) reports that he was asked about fasting on Monday and answered: on it I was born, and on it revelation was sent down to me. He did not mark the day with a story. He marked it with a fast, and joined it to the day the Quran began.",
            "bn": "নিজের জন্ম নিয়ে নবী ﷺ-এর মুখ থেকে আসা বর্ণনা একটাই, সহিহ মুসলিম ১১৬২-তে। আবু কাতাদা (রাঃ) বলেন, সোমবারের রোজা নিয়ে জিজ্ঞেস করা হলে তিনি বলেছিলেন, এই দিনেই আমি জন্মেছি আর এই দিনেই আমার উপর ওহি নাজিল হয়েছে। দিনটিকে তিনি কোনো গল্প দিয়ে চিহ্নিত করেননি। করেছেন রোজা দিয়ে, আর জুড়ে দিয়েছেন কুরআন নাজিলের দিনের সঙ্গে।"
          },
          {
            "en": "Nothing in the Sahih collections describes the night of the birth itself. The Year of the Elephant is narrated to us by the biographers and by 105:1-5; al-Bukhari and Muslim carry no account of it, and touch it only in passing, as when the Prophet ﷺ said at Hudaybiyyah that the One who restrained the elephant had restrained his camel. That is worth saying plainly, because a reader raised on the marvels expects to find them somewhere. What the sound record gives of the birth is a Monday, a fast, and five short verses.",
            "bn": "জন্মের রাতটা কেমন ছিল, সহিহ সংকলনগুলোতে তার কোনো বর্ণনা নেই। হস্তীবর্ষের ঘটনা বিস্তারিত এসেছে সীরাত লেখকদের হাত ধরে আর ১০৫:১ থেকে ১০৫:৫ আয়াতে। বুখারি বা মুসলিমে ঘটনার কোনো বিবরণ নেই, কথা এসেছে কেবল প্রসঙ্গক্রমে। হুদায়বিয়ায় নবী ﷺ বলেছিলেন, যিনি হাতিকে ঠেকিয়ে দিয়েছিলেন, তিনিই তাঁর উটনীকে ঠেকিয়ে রেখেছেন। কথাটা সোজাসুজি বলা দরকার, কারণ ছোটবেলা থেকে অলৌকিক গল্প শুনে আসা পাঠক সেগুলো কোথাও না কোথাও খুঁজবেনই। জন্ম নিয়ে সহিহ সূত্র যা দেয় তা হলো একটা সোমবার, একটা রোজা আর পাঁচটি ছোট আয়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "Aminah, Abdullah and the Chief",
          "bn": "আমিনা, আবদুল্লাহ ও গোত্রপ্রধান"
        },
        "p": [
          {
            "en": "Aminah bint Wahb of Banu Zuhrah was widowed while carrying her first and only child. The sirah keeps almost nothing of her: a marriage, a birth, one journey and a grave beside a road. Abdullah ibn Abd al-Muttalib is known chiefly by his absence. His son lived a whole life without meeting him, and everything he left his heir fitted into one short list.",
            "bn": "বনু জুহরার আমিনা বিনতে ওয়াহব বিধবা হন প্রথম ও একমাত্র সন্তান গর্ভে থাকা অবস্থায়। সীরাত তাঁর সম্পর্কে প্রায় কিছুই ধরে রাখেনি; শুধু একটা বিয়ে, একটা জন্ম, একটা সফর আর পথের পাশে একটা কবর। আবদুল্লাহ ইবনে আবদুল মুত্তালিবকে চেনা যায় মূলত তাঁর না-থাকা দিয়ে। নবী ﷺ গোটা জীবন কাটিয়েছেন বাবাকে না দেখেই, আর ওয়ারিশের জন্য তিনি যা রেখে গিয়েছিলেন তা এক লাইনেই ধরে যায়।"
          },
          {
            "en": "Abd al-Muttalib is the third figure and the most visible. He was old, chief of a clan whose standing rested on water and hospitality, and Ibn Ishaq shows him doing the two things a grandfather could do: giving thanks inside the House, and choosing a name with an ambition folded into it. Abrahah is the fourth, and the Quran keeps his name out of the account entirely.",
            "bn": "তৃতীয় জন আবদুল মুত্তালিব, আর তাঁকেই সবচেয়ে স্পষ্ট দেখা যায়। বয়স হয়েছে, এমন এক গোত্রের সরদার যাদের মর্যাদা টিকে আছে পানি আর মেহমানদারির উপর। ইবনে ইসহাকের বর্ণনায় তিনি সেই দুটো কাজই করেন যা একজন দাদার পক্ষে করা সম্ভব: কাবার ভেতরে গিয়ে শোকর আদায় করা, আর এমন নাম বেছে নেওয়া যার ভেতরে একটা আশা লুকিয়ে আছে। চতুর্থ জন আবরাহা, আর কুরআন তাঁর নামটাই বাদ রেখে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Rescue Taught Makkah",
          "bn": "এই রক্ষা পাওয়া মক্কাকে যা শেখাল"
        },
        "p": [
          {
            "en": "The rescue changed how Makkah saw itself. The tribes had watched a foreign army with an elephant break against a town that never fought it, and the city's standing as a protected sanctuary was fixed for a generation. That certainty later worked against the message: a people already sure they are favoured are hard to warn.",
            "bn": "এই রক্ষা পাওয়া মক্কার নিজের সম্পর্কে ধারণাই বদলে দিল। আরবরা দেখল, হাতিসহ এক বিদেশি বাহিনী এমন এক শহরের গায়ে এসে ভেঙে পড়ল, যে শহর একটা তীরও ছোড়েনি। এক প্রজন্মের জন্য নিরাপদ হারাম হিসেবে মক্কার মর্যাদা পাকা হয়ে গেল। পরে এই নিশ্চিন্তিই দাওয়াতের পথে বাধা হয়ে দাঁড়ায়। যারা আগেই ধরে নিয়েছে আল্লাহ তাদের পক্ষে, তাদের সাবধান করা কঠিন।"
          },
          {
            "en": "Two things carry. The first is Monday: the Prophet ﷺ answered a question about his own birth with a fast, so a believer who wants to mark that day can do exactly what he did, and know why. The second is 106:3. Quraysh read their safety as a certificate; the verse read it as a debt. A secure home, work, a hospital nearby, are 106:4 arriving in a life, and what they ask for is worship.",
            "bn": "নেওয়ার মতো জিনিস দুটো। প্রথমটা সোমবার। নিজের জন্মদিন নিয়ে প্রশ্নের জবাবে নবী ﷺ রোজার কথা বলেছিলেন, তাই কেউ দিনটিকে স্মরণ করতে চাইলে ঠিক সেই কাজটাই করতে পারেন, এবং কেন করছেন তা জেনে করতে পারেন। দ্বিতীয়টা ১০৬:৩ আয়াতের কথা। কুরাইশরা নিজেদের নিরাপত্তাকে ভেবেছিল সনদ, আয়াতটি সেটাকে দেখাল দায় হিসেবে। নিরাপদ ঘর, কাজ, কাছেই হাসপাতাল, এসবই ১০৬:৪ আয়াতের বাস্তব চেহারা, আর এগুলো ইবাদতই দাবি করে।"
          }
        ]
      }
    ]
  },
  "orphan": {
    "sections": [
      {
        "h": {
          "en": "The Household He Came Back To",
          "bn": "যে ঘরে তিনি ফিরে এলেন"
        },
        "p": [
          {
            "en": "By about 576 CE the boy was back in Makkah with his mother, the desert years with Halimah as-Sa'diyah (RA) behind him. The household was small: Aminah, a widow with no other child, and Barakah, the Abyssinian servant his father had left. Abd al-Muttalib, very old by now, was still chief of Banu Hashim and still the man who watered the pilgrims.",
            "bn": "৫৭৬ খ্রিস্টাব্দের কাছাকাছি সময়ে ছেলেটি মায়ের কাছে মক্কায় ফিরে এসেছে; হালিমা সাদিয়া (রাঃ)-এর সঙ্গে মরুভূমির বছরগুলো তখন পেছনে। ঘরটা ছোট। আমিনা, যাঁর আর কোনো সন্তান নেই, আর বারাকা, বাবার রেখে যাওয়া সেই হাবশি দাসী। আবদুল মুত্তালিব তখন অনেক বৃদ্ধ, তবু তিনিই বনু হাশিমের সরদার এবং তিনিই হাজীদের পানি খাওয়ান।"
          },
          {
            "en": "Makkah had no institution for a child in that position. Guardianship ran through the clan, passing a fatherless boy down a line of male relatives until one of them took him in. The Prophet ﷺ was about to travel that line twice inside two years, and the Quran would later address this stretch of his life directly and by name.",
            "bn": "এমন অবস্থার শিশুর জন্য মক্কায় আলাদা কোনো ব্যবস্থা ছিল না। অভিভাবকত্ব চলত গোত্রের ভেতর দিয়ে; বাবাহারা ছেলেকে পুরুষ আত্মীয়দের সারি ধরে এগিয়ে দেওয়া হতো, যতক্ষণ না কেউ তাকে ঘরে তুলে নেয়। নবী ﷺ-কে দুই বছরের মধ্যে সেই সারি দুইবার পার হতে হবে। জীবনের এই অংশটুকু নিয়ে কুরআন পরে সরাসরি কথা বলবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Road Back from Yathrib",
          "bn": "ইয়াসরিব থেকে ফেরার পথ"
        },
        "p": [
          {
            "en": "Ibn Ishaq relates that Aminah took her son to Yathrib to visit Banu Adi ibn an-Najjar, his grandfather's maternal kin, and the grave where Abdullah had been buried. Barakah travelled with them. They stayed some weeks, and on the road home Aminah fell ill and died at al-Abwa, a village between Makkah and Madinah, when the boy was six.",
            "bn": "ইবনে ইসহাক বলেন, আমিনা ছেলেকে নিয়ে ইয়াসরিবে যান বনু আদি ইবনে নাজ্জারের কাছে, যারা ছেলেটির দাদার মায়ের দিকের আত্মীয়, আর যেখানে আবদুল্লাহকে দাফন করা হয়েছিল সেই কবরের কাছে। বারাকাও সঙ্গে ছিলেন। কয়েক সপ্তাহ থেকে তাঁরা ফিরছিলেন। ফেরার পথে আমিনা অসুস্থ হয়ে পড়েন এবং মক্কা ও মদিনার মাঝখানে আবওয়া নামের জায়গায় ইন্তেকাল করেন। ছেলেটির বয়স তখন ছয়।"
          },
          {
            "en": "Barakah brought him the rest of the way to Makkah and handed him to his grandfather. Nothing in the early material tells us what he said or felt on that road. What the sources do record is the sequence: a father he never met, a mother buried beside a road he had just travelled, and a servant with no family of her own walking a six-year-old home.",
            "bn": "বাকি পথটুকু বারাকা তাঁকে মক্কায় নিয়ে আসেন এবং দাদার হাতে তুলে দেন। সেই পথে শিশু মুহাম্মদ ﷺ কী বলেছিলেন বা কী অনুভব করেছিলেন, আগের কোনো বর্ণনা তা জানায় না। সূত্রগুলো যা ধরে রেখেছে তা হলো ঘটনার ক্রম। বাবাকে তিনি কোনোদিন দেখেননি, মাকে দাফন করতে হলো সদ্য পার হওয়া পথের পাশে, আর ছয় বছরের ছেলেটিকে হাঁটিয়ে বাড়ি ফেরালেন এমন একজন, মক্কায় যাঁর নিজের কোনো গোত্রই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Years in His Grandfather's Shade",
          "bn": "দাদার ছায়ায় দুই বছর"
        },
        "p": [
          {
            "en": "Abd al-Muttalib took him in and favoured him openly. Ibn Ishaq preserves the scene at the Ka'bah: a carpet was spread in the shade of the House for the chief, and his grown sons sat around it and never on it. The boy would come and sit on it, and when his uncles pulled him off, Abd al-Muttalib told them to leave him, for his grandson had a great future.",
            "bn": "আবদুল মুত্তালিব তাঁকে ঘরে তুলে নেন এবং খোলাখুলিভাবেই বাড়তি আদর করতেন। কাবার পাশের দৃশ্যটি ইবনে ইসহাক ধরে রেখেছেন। ঘরের ছায়ায় সরদারের জন্য বিছানো থাকত একটি চাদর; তাঁর বড় ছেলেরা তার চারপাশে বসতেন, কেউ তার উপরে বসতেন না। শিশু মুহাম্মদ ﷺ এসে সেই চাদরের উপরেই বসে পড়তেন। চাচারা টেনে সরাতে গেলে আবদুল মুত্তালিব বলতেন, ওকে ছেড়ে দাও, আমার এই নাতির সামনে বড় কিছু আছে।"
          },
          {
            "en": "It lasted about two years. Ibn Ishaq puts the grandfather's death in the boy's eighth year, eight years after the Year of the Elephant, and preserves the words of Umm Ayman (RA), who said she saw him following the bier and weeping. Guardianship then passed to his uncle Abu Talib, whose household carries its own card in this timeline. By eight he had buried a mother and a grandfather, and had never met his father.",
            "bn": "এভাবে কাটল প্রায় দুই বছর। ইবনে ইসহাক দাদার ইন্তেকাল রাখেন ছেলেটির আট বছর বয়সে, হস্তীবর্ষের আট বছর পরে। তিনি উম্মে আইমান (রাঃ)-এর কথাও ধরে রেখেছেন; তিনি বলেছেন, খাটিয়ার পেছনে কাঁদতে কাঁদতে হাঁটতে তিনি ছেলেটিকে দেখেছেন। এরপর অভিভাবকত্ব যায় চাচা আবু তালিবের হাতে, যাঁর ঘর নিয়ে এই সময়রেখায় আলাদা কার্ড আছে। আট বছর বয়সেই মা আর দাদাকে দাফন করা হয়ে গেছে, আর বাবাকে তিনি কোনোদিন দেখেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Morning Light Verses",
          "bn": "সূরা দুহার আয়াতগুলো"
        },
        "p": [
          {
            "en": "The Quran returns to this period once, in a surah given years later during a pause in revelation. 93:6 asks: did He not find you an orphan and give you refuge? The verse does not soften the fact. It names the loss, then names what Allah did with it. 93:7 and 93:8 continue the pattern, finding him lost and guiding him, finding him poor and enriching him.",
            "bn": "কুরআন এই সময়টিতে ফিরে আসে একবারই, অনেক পরে নাজিল হওয়া এক সূরায়, ওহি থেমে থাকার দিনগুলোতে। ৯৩:৬ জিজ্ঞেস করে, তিনি কি তোমাকে ইয়াতিম অবস্থায় পাননি, তারপর আশ্রয় দেননি? আয়াতটি সত্যিটা নরম করে বলে না। আগে ক্ষতিটার নাম বলে, তারপর বলে আল্লাহ সেই ক্ষতি দিয়ে কী করেছেন। ৯৩:৭ ও ৯৩:৮ একই ধারা ধরে রাখে, পথের দিশা না পাওয়া অবস্থায় পেয়ে পথ দেখানো, নিঃস্ব অবস্থায় পেয়ে অভাবমুক্ত করা।"
          },
          {
            "en": "Then the surah turns the memory into an instruction. 93:9 tells him not to be harsh with the orphan, and 93:10 not to repel the one who asks. The man who had been that child is told to build the rule out of his own history. 93:11 completes it: speak of the favour of your Lord. This card's own verse is 93:9, and it is spoken to an orphan first.",
            "bn": "এরপর সূরাটি স্মৃতিকে বদলে দেয় নির্দেশে। ৯৩:৯ বলে, ইয়াতিমের সঙ্গে কঠোরতা করবে না; ৯৩:১০ বলে, যে চাইতে আসে তাকে ধমক দিয়ে তাড়াবে না। যিনি একদিন সেই ইয়াতিম শিশু ছিলেন, তাঁকেই বলা হচ্ছে নিজের জীবন থেকে নিয়মটি গড়ে তুলতে। ৯৩:১১ কথাটা পূর্ণ করে, তোমার রবের নিয়ামতের কথা বলতে থাকো। এই কার্ডের আয়াত ৯৩:৯, আর কথাটা সবার আগে শোনানো হয়েছে একজন ইয়াতিমকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Fingers and One Grave",
          "bn": "দুই আঙুল আর একটি কবর"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari 5304 records from Sahl ibn Sa'd (RA) that the Prophet ﷺ said: I and the one who looks after an orphan will be in Paradise like this, and he held up his index and middle fingers with a little space between them. The gesture is the hadith. Nearness to him in the next life is offered for work that nobody watches in this one.",
            "bn": "সহিহ বুখারি ৫৩০৪-এ সাহল ইবনে সাদ (রাঃ) বলেন, নবী ﷺ বলেছেন, আমি আর ইয়াতিমের দেখাশোনাকারী জান্নাতে এভাবে থাকব; বলে তিনি শাহাদাত ও মধ্যমা আঙুল তুলে দুটোর মাঝে সামান্য ফাঁক রাখলেন। ইশারাটাই এখানে হাদিস। আখিরাতে তাঁর এত কাছে থাকার প্রতিশ্রুতি দেওয়া হচ্ছে এমন এক কাজের বিনিময়ে, দুনিয়ায় যা কেউ তাকিয়েও দেখে না।"
          },
          {
            "en": "Sahih Muslim 976 attaches the second narration to this event directly. Abu Hurayrah (RA) reports that the Prophet ﷺ visited his mother's grave and wept until those with him wept, and said: I asked my Lord permission to seek forgiveness for her and was not given it; I asked permission to visit her grave and was given it. So visit graves, for they remind you of death.",
            "bn": "সহিহ মুসলিম ৯৭৬-এর বর্ণনাটি সরাসরি এই ঘটনার সঙ্গেই জড়ানো। আবু হুরায়রা (রাঃ) বলেন, নবী ﷺ তাঁর মায়ের কবরের কাছে গিয়ে কাঁদলেন, আর তাঁর কান্নায় আশপাশের সবাই কেঁদে ফেলল। তারপর তিনি বললেন, আমি আমার রবের কাছে তাঁর জন্য মাগফিরাত চাওয়ার অনুমতি চেয়েছিলাম, অনুমতি পাইনি; কবর জিয়ারতের অনুমতি চেয়েছিলাম, তা পেয়েছি। তোমরা কবর জিয়ারত কোরো, এতে মৃত্যুর কথা মনে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Who Held Him",
          "bn": "যে তিনজন তাঁকে ধরে রেখেছিলেন"
        },
        "p": [
          {
            "en": "Aminah bint Wahb had six years with her son and is remembered for the journey that killed her. Barakah, later called Umm Ayman (RA), had no clan in Makkah and no claim on the child, and stayed with him regardless; she carried him home from al-Abwa, lived to accept Islam, migrated twice, and the Prophet ﷺ called her what was left of his family.",
            "bn": "আমিনা বিনতে ওয়াহব ছেলের সঙ্গে পেয়েছিলেন ছয়টি বছর, আর মনে রাখা হয়েছে তাঁকে সেই সফরটির জন্য, যে সফর তাঁর জীবন নিয়েছে। বারাকা, যাঁকে পরে উম্মে আইমান (রাঃ) বলা হতো, মক্কায় তাঁর কোনো গোত্র ছিল না, ছেলেটির উপর কোনো দাবিও ছিল না; তবু তিনি ছাড়েননি। আবওয়া থেকে তিনিই নবী ﷺ-কে ঘরে ফেরান, পরে ইসলাম কবুল করেন, দুইবার হিজরত করেন, আর নবী ﷺ তাঁকে বলতেন নিজের পরিবারের অবশিষ্ট অংশ।"
          },
          {
            "en": "Abd al-Muttalib is the guardian the sources show most clearly. He was a man of authority who spent his last two years defending a small grandson's right to sit on his carpet. The pattern in all three is the same. The care that reached this child came from people, one at a time, and 93:6 calls that arrangement shelter given by Allah.",
            "bn": "সূত্রগুলোতে সবচেয়ে স্পষ্ট দেখা যায় আবদুল মুত্তালিবকে। ক্ষমতাবান একজন মানুষ, যিনি জীবনের শেষ দুই বছর খরচ করেছেন ছোট্ট এক নাতির চাদরে বসার অধিকার রক্ষা করতে। তিনজনের বেলাতেই ছবিটা এক। এই শিশুর কাছে যত্ন এসেছে মানুষের হাত ধরে, একজন একজন করে। ৯৩:৬ সেই ব্যবস্থাটাকেই বলছে আল্লাহর দেওয়া আশ্রয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Orphans Written Into the Law",
          "bn": "ইয়াতিম যেভাবে শরিয়তে ঢুকল"
        },
        "p": [
          {
            "en": "When the community finally had a law to make, orphans came near the front of it. 4:2 orders that orphans be given their property, that nobody swap bad for good, and that their wealth not be folded into one's own. 4:10 is blunter still: those who consume an orphan's property unjustly are swallowing fire. 2:220 answers a question about shared households with, they are your brothers.",
            "bn": "উম্মত যখন সত্যিই আইন গড়ার জায়গায় পৌঁছাল, ইয়াতিমের প্রসঙ্গ এল একেবারে সামনের সারিতে। ৪:২ হুকুম দেয়, ইয়াতিমদের সম্পদ তাদের বুঝিয়ে দাও, ভালোর বদলে মন্দ ধরিয়ে দিও না, আর তাদের মাল নিজের মালের সঙ্গে মিশিয়ে খেয়ো না। ৪:১০ আরও সোজা কথা বলে, যারা অন্যায়ভাবে ইয়াতিমের সম্পদ গ্রাস করে তারা পেটে আগুনই ভরছে। একসঙ্গে ঘর করা নিয়ে প্রশ্নের জবাবে ২:২২০ বলে, তারা তো তোমাদেরই ভাই।"
          },
          {
            "en": "The theme runs wider than property. 107:1 asks about the man who denies the Recompense, and 107:2 identifies him as the one who drives away the orphan. 89:17 accuses a people of not honouring the orphan. 90:11 says man has not broken through the difficult pass, and 90:14-15 places inside that pass the feeding, on a day of severe hunger, of an orphan of near relationship. In each of these a whole society is measured by what happens to its least protected child.",
            "bn": "বিষয়টা কেবল সম্পত্তির নয়। ১০৭:১ প্রশ্ন তোলে সেই লোকটিকে নিয়ে, যে কর্মফলের দিনকে অস্বীকার করে; ১০৭:২ তাকে চিনিয়ে দেয়, সে-ই ইয়াতিমকে ধাক্কা দিয়ে সরায়। ৮৯:১৭ গোটা এক জাতিকে অভিযুক্ত করে, তোমরা ইয়াতিমকে সম্মান করো না। ৯০:১১ বলে, মানুষ দুর্গম গিরিপথে ঢুকলই না; আর ৯০:১৪ ও ৯০:১৫ সেই গিরিপথের ভেতরে রাখে দুর্ভিক্ষের দিনে নিকটাত্মীয় ইয়াতিমকে খাওয়ানোর কাজটি। প্রতিটি জায়গাতেই মাপকাঠি একটাই: তার সবচেয়ে অরক্ষিত শিশুটির সঙ্গে কী হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Orphan Is Yours",
          "bn": "আপনার ইয়াতিম কে"
        },
        "p": [
          {
            "en": "The application here is unusually concrete. Sponsoring an orphan is a defined act with a defined reward, and a monthly transfer puts it within reach of ordinary people. But the wording in the Sahl hadith is looking after, not funding, so the fuller version of the deed is knowing the child's name, their school year, and what they are afraid of.",
            "bn": "এখানে করণীয়টা অস্বাভাবিক রকম স্পষ্ট। ইয়াতিমের দায়িত্ব নেওয়া নির্দিষ্ট একটা আমল, তার সওয়াবও নির্দিষ্ট, আর মাসে মাসে কিছু টাকা পাঠানো সাধারণ মানুষের সাধ্যের ভেতরেই। তবে সাহল (রাঃ)-এর হাদিসে কথাটা টাকা দেওয়া নয়, দেখাশোনা করা। তাই আমলটির পূর্ণ চেহারা হলো শিশুটির নাম জানা, কোন ক্লাসে পড়ে জানা, আর কীসে সে ভয় পায় তা জানা।"
          },
          {
            "en": "There is a second, quieter carry. 93:9 forbids harshness to the orphan, and the harshness it forbids is not only violence; it includes the tone people use with a child who has nobody to complain to. And Muslim 976 gives permission for something many readers need. Go to your parents' graves, stand there, and let it do to you what it did to him.",
            "bn": "দ্বিতীয় শিক্ষাটা আরও চুপচাপ। ৯৩:৯ ইয়াতিমের সঙ্গে কঠোরতা নিষেধ করে, আর এই কঠোরতা কেবল হাত তোলা নয়। যে শিশুর নালিশ করার কেউ নেই, তার সঙ্গে মানুষ যে গলায় কথা বলে, সেটাও এর ভেতরে পড়ে। আর মুসলিম ৯৭৬ অনেক পাঠকের দরকারি একটা অনুমতি দিয়ে দেয়। বাবা-মায়ের কবরের কাছে যান, দাঁড়ান, আর তাঁর সঙ্গে যা হয়েছিল আপনার সঙ্গেও তা হতে দিন।"
          }
        ]
      }
    ]
  },
  "khadijah": {
    "sections": [
      {
        "h": {
          "en": "A Merchant of Banu Asad",
          "bn": "বনু আসাদের এক ব্যবসায়ী"
        },
        "p": [
          {
            "en": "By about 595 CE the Prophet ﷺ was twenty-five, living in Abu Talib's crowded house and working, as young men of Quraysh did, in the caravan trade. Makkah's wealth moved twice a year, north to Syria in the summer and south to Yemen in the winter, and the men who carried other people's goods were paid a share of the profit.",
            "bn": "৫৯৫ খ্রিস্টাব্দের কাছাকাছি সময়ে নবী ﷺ-এর বয়স পঁচিশ। থাকেন আবু তালিবের ভরা সংসারে, আর কুরাইশের অন্য তরুণদের মতোই কাফেলার ব্যবসায় খাটেন। মক্কার সম্পদ বছরে দুইবার নড়ত, গ্রীষ্মে উত্তরে শামের দিকে আর শীতে দক্ষিণে ইয়ামানের দিকে। যাঁরা অন্যের মাল বয়ে নিয়ে যেতেন, তাঁরা পেতেন লাভের একটা ভাগ।"
          },
          {
            "en": "Khadijah bint Khuwaylid (RA) was among those who owned the goods. Ibn Ishaq describes her as a merchant woman of dignity and wealth who hired men on a profit-sharing basis and did not travel with the caravans herself. She was of Banu Asad, twice widowed, and by the reckoning of Quraysh the best-born woman in the city. She chose her agents carefully.",
            "bn": "মালের মালিকদের একজন ছিলেন খাদিজা বিনতে খুওয়াইলিদ (রাঃ)। ইবনে ইসহাক তাঁকে বলেন মর্যাদাবান ও ধনী ব্যবসায়ী নারী, যিনি লাভের ভাগের শর্তে লোক রাখতেন এবং নিজে কাফেলার সঙ্গে যেতেন না। তিনি বনু আসাদের মেয়ে, দুইবার বিধবা, আর কুরাইশের হিসাবে শহরের সবচেয়ে অভিজাত বংশের নারী। লোক বাছাইয়ের ব্যাপারে তিনি ছিলেন খুঁতখুঁতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Journey to Syria",
          "bn": "শামের সেই সফর"
        },
        "p": [
          {
            "en": "Ibn Ishaq reports that when she heard of his truthfulness and honourable character she sent for him and offered him more than she paid others to take her goods to Syria, with a servant of hers named Maysarah. He accepted. The two travelled north to the Syrian markets, sold, bought and came back, and the venture returned more than she had expected.",
            "bn": "ইবনে ইসহাক বলেন, তাঁর সততা ও ভালো চরিত্রের কথা শুনে খাদিজা (রাঃ) লোক পাঠিয়ে তাঁকে ডেকে আনেন এবং প্রস্তাব দেন, তাঁর মাল নিয়ে শামে যেতে হবে, আর পারিশ্রমিক হবে অন্যদের চেয়ে বেশি। সঙ্গে যাবে তাঁর গোলাম মাইসারা। তিনি রাজি হন। দুজন উত্তরে শামের বাজারে যান, বেচাকেনা করে ফেরেন, আর লাভ হয় খাদিজা (রাঃ)-এর হিসাবের চেয়ে বেশি।"
          },
          {
            "en": "What decided the matter was not the profit. Maysarah gave her his own account of how the man behaved on the road, and she sent word back to him. Ibn Ishaq preserves what she said when she raised the subject: that she liked him for their kinship, his standing among his people, his trustworthiness, his good character and his truthfulness. The first two were his by lineage. The last three, trustworthiness, character and truthfulness, are earned, and they are what Maysarah's account confirmed.",
            "bn": "তবে সিদ্ধান্তটা লাভের অঙ্ক দেখে হয়নি। পথে লোকটি কেমন আচরণ করেছেন, মাইসারা নিজে তা বলে শোনান, আর এরপর খাদিজা (রাঃ) তাঁর কাছে খবর পাঠান। ইবনে ইসহাক ধরে রেখেছেন কথাটা তিনি কীভাবে তুলেছিলেন: আত্মীয়তার কারণে, নিজের লোকদের মধ্যে তাঁর মর্যাদার কারণে, তাঁর আমানতদারি, ভালো চরিত্র আর সত্যবাদিতার কারণে তিনি তাঁকে পছন্দ করেন। প্রথম দুটি তাঁর বংশের সূত্রে পাওয়া। শেষের তিনটি, আমানতদারি, চরিত্র আর সত্যবাদিতা, অর্জন করতে হয়, আর মাইসারার বিবরণ সেগুলোরই সাক্ষ্য দিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Proposal and the Dower",
          "bn": "প্রস্তাব ও মোহর"
        },
        "p": [
          {
            "en": "Ibn Sa'd names Nafisah bint Munyah as the woman who first carried the question to him. He then told his uncles, and Ibn Ishaq has Hamza ibn Abd al-Muttalib go with him to ask for her formally. Ibn Ishaq gives her father Khuwaylid as the man who married her to him; other reports, since Khuwaylid may already have died, name her uncle Amr ibn Asad instead.",
            "bn": "ইবনে সাদ বলেন, প্রশ্নটা প্রথম তাঁর কাছে নিয়ে যান নাফিসা বিনতে মুনইয়া। এরপর তিনি চাচাদের জানান, আর ইবনে ইসহাকের বর্ণনায় হামজা ইবনে আবদুল মুত্তালিব তাঁর সঙ্গে গিয়ে আনুষ্ঠানিকভাবে প্রস্তাব দেন। ইবনে ইসহাকের বর্ণনায় বিয়ে দেন খাদিজা (রাঃ)-এর বাবা খুওয়াইলিদ। অন্য বর্ণনায় বলা হয়, খুওয়াইলিদ ততদিনে মারা গিয়েছিলেন, বিয়ে দিয়েছিলেন তাঁর চাচা আমর ইবনে আসাদ।"
          },
          {
            "en": "Two numbers need care. The dower Ibn Ishaq records is twenty she-camels. Her age is the harder one: most of the biographers, Ibn Sa'd among them, give forty, while Ibn Sa'd also preserves a report of twenty-eight, and Ibn Kathir notes the disagreement without settling it. His own age of twenty-five is far better attested. Anyone who states her age flatly is choosing one report and hiding the rest.",
            "bn": "দুটো সংখ্যা সাবধানে ধরতে হয়। ইবনে ইসহাকের বর্ণনায় মোহর ছিল বিশটি উটনী। বয়সের প্রশ্নটা আরও জটিল। ইবনে সাদসহ অধিকাংশ সীরাত লেখক খাদিজা (রাঃ)-এর বয়স বলেন চল্লিশ; ইবনে সাদ আবার আটাশের বর্ণনাও রেখেছেন, আর ইবনে কাসির মতভেদটা উল্লেখ করেই ছেড়ে দিয়েছেন। নবী ﷺ-এর পঁচিশ বছর বয়সের কথাটি অনেক বেশি মজবুত সূত্রে এসেছে। যিনি খাদিজা (রাঃ)-এর বয়স নিয়ে সাফ কথা বলে দেন, তিনি আসলে একটি বর্ণনা বেছে নিয়ে বাকিগুলো চেপে যাচ্ছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "No Verse for a Wedding",
          "bn": "বিয়ের জন্য কোনো আয়াত নেই"
        },
        "p": [
          {
            "en": "No revelation is tied to this marriage; the Quran had not begun. The closest verse in theme is 30:21, which calls it a sign of Allah that He made mates for you from among yourselves so that you might find rest in them, and placed affection and mercy between you. Read against a marriage that produced the first believer, the verse is a description before it is an ideal.",
            "bn": "এই বিয়ের সঙ্গে কোনো ওহি জড়িত নয়; কুরআন তখনো নাজিল হয়নি। ভাবের দিক থেকে সবচেয়ে কাছের আয়াত ৩০:২১। সেখানে আল্লাহ বলছেন, তোমাদের মধ্য থেকেই তিনি তোমাদের সঙ্গিনী বানিয়েছেন যেন তোমরা শান্তি পাও, আর তোমাদের মাঝে রেখেছেন ভালোবাসা ও দয়া। যে বিয়ে থেকে প্রথম ঈমানদার এসেছেন, তার পাশে রাখলে আয়াতটি আদর্শের আগে বাস্তবের বর্ণনা হয়ে ওঠে।"
          },
          {
            "en": "Two other verses are read against this event by the commentators. 93:8 says Allah found him poor and made him self-sufficient, and the wealth in question came in through this marriage and went out again on the message. And the quality that got him hired is legislated in 17:35: give full measure and weigh with an even balance, that is best in the end. 83:1-3 states the same rule from the other side.",
            "bn": "তাফসিরকারকরা আরও দুটি আয়াত এই ঘটনার পাশে রাখেন। ৯৩:৮ বলে, আল্লাহ তাঁকে নিঃস্ব অবস্থায় পেয়ে অভাবমুক্ত করেছেন; আর সেই সম্পদ ঘরে এসেছিল এই বিয়ের হাত ধরে, আবার বেরিয়ে গেছে দাওয়াতের কাজে। যে গুণের জোরে তিনি কাজ পেয়েছিলেন, সেটাই হুকুম হয়ে এসেছে ১৭:৩৫ আয়াতে, মাপ পূর্ণ করো আর ওজন করো ত্রুটিহীন দাঁড়িপাল্লায়, পরিণামে এটাই ভালো। ৮৩:১ থেকে ৮৩:৩ একই নিয়ম বলে উল্টো দিক থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "As Aisha (RA) Remembered It",
          "bn": "আয়েশা (রাঃ) যেভাবে মনে রেখেছেন"
        },
        "p": [
          {
            "en": "The narration attached to this marriage is not about the wedding but about how long it lasted inside him. Sahih Muslim preserves, in its chapter on the merits of Khadijah (RA), Aisha's (RA) report that she was never as jealous of any wife as of a woman she never saw, because he mentioned her so often, and would slaughter a sheep and send portions to her friends.",
            "bn": "এই বিয়ের সঙ্গে যে হাদিসটি জড়ানো, তা বিয়ের অনুষ্ঠান নিয়ে নয়, বরং এই বিয়ে তাঁর ভেতরে কতদিন থেকে গিয়েছিল তা নিয়ে। সহিহ মুসলিমে খাদিজা (রাঃ)-এর ফজিলতের অধ্যায়ে আয়েশা (রাঃ)-এর কথা আছে। তিনি বলেন, নবী ﷺ-এর কোনো স্ত্রীকে নিয়ে তাঁর এত ঈর্ষা হয়নি যত হয়েছে এমন একজনকে নিয়ে, যাঁকে তিনি কোনোদিন দেখেননি; কারণ নবী ﷺ তাঁর কথা বলতেন বারবার, আর বকরি জবাই করে খাদিজা (রাঃ)-এর বান্ধবীদের কাছে মাংস পাঠাতেন।"
          },
          {
            "en": "In the same narration she once told him it was as though there had been no woman in the world but Khadijah, and he answered that she was such and such, and that he had had his children from her. The caravan, the proposal and the dower come from the sirah writers rather than from the hadith collections, and they are given here on that authority.",
            "bn": "সেই বর্ণনাতেই আছে, একদিন তিনি নবী ﷺ-কে বলেছিলেন, দুনিয়ায় যেন খাদিজা ছাড়া আর কোনো নারীই ছিল না। জবাবে নবী ﷺ বললেন, তিনি এমন ছিলেন, তেমন ছিলেন, আর তাঁর থেকেই আমার সন্তান হয়েছে। কাফেলা, প্রস্তাব আর মোহরের বিবরণ এসেছে সীরাত লেখকদের কাছ থেকে, হাদিস সংকলন থেকে নয়; এখানে সেগুলো তাঁদের বরাতেই দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Maysarah, Hamza, Zayd",
          "bn": "মাইসারা, হামজা, জায়েদ"
        },
        "p": [
          {
            "en": "Khadijah (RA) is the centre of this event and the one who acts in it. She hired, she assessed, she proposed. Maysarah matters more than his single appearance suggests: a servant's honest report about the man he travelled with is what set the whole thing moving, and that is exactly the kind of testimony history usually loses.",
            "bn": "এই ঘটনার কেন্দ্রে খাদিজা (রাঃ), আর কাজগুলো তিনিই করেছেন। তিনি লোক নিয়োগ করেছেন, যাচাই করেছেন, প্রস্তাব দিয়েছেন। মাইসারার ভূমিকা তাঁর একবারের উপস্থিতির চেয়ে অনেক বড়। সফরসঙ্গী সম্পর্কে এক গোলামের সৎ সাক্ষ্যই গোটা ব্যাপারটাকে নাড়িয়ে দিয়েছে, আর এমন সাক্ষ্য ইতিহাস সাধারণত হারিয়েই ফেলে।"
          },
          {
            "en": "Hamza ibn Abd al-Muttalib (RA) speaks for the family here, an uncle close to his nephew in age. Zayd ibn Harithah (RA) enters the household through this marriage: Ibn Sa'd relates that Hakim ibn Hizam (RA) bought him at the market of Ukaz and gave him to his aunt Khadijah (RA), who gave him to the Prophet ﷺ. Barakah was freed at this marriage and stayed on.",
            "bn": "এখানে পরিবারের হয়ে কথা বলেন হামজা ইবনে আবদুল মুত্তালিব (রাঃ), বয়সে ভাতিজার প্রায় সমান এক চাচা। জায়েদ ইবনে হারিসা (রাঃ) এই বিয়ের সূত্রেই ঘরে আসেন। ইবনে সাদ বলেন, হাকিম ইবনে হিজাম (রাঃ) তাঁকে উকাজের বাজার থেকে কিনে ফুফু খাদিজা (রাঃ)-কে দেন, আর খাদিজা (রাঃ) তাঁকে দেন নবী ﷺ-কে। এই বিয়ের সময়েই বারাকা মুক্তি পান এবং ঘরেই থেকে যান।"
          }
        ]
      },
      {
        "h": {
          "en": "Twenty-Five Years, One Wife",
          "bn": "পঁচিশ বছর, একজন স্ত্রী"
        },
        "p": [
          {
            "en": "The marriage lasted about twenty-five years, and he took no other wife while she lived. All of his children but Ibrahim were born to her: al-Qasim, Zaynab, Ruqayyah, Umm Kulthum, Fatimah and Abdullah, whom some reports also name at-Tayyib and at-Tahir. The sons all died in childhood, and the four daughters lived to see the migration to Madinah.",
            "bn": "এই সংসার টিকেছিল প্রায় পঁচিশ বছর, আর তাঁর জীবদ্দশায় নবী ﷺ আর কোনো বিয়ে করেননি। ইবরাহিম ছাড়া তাঁর সব সন্তান খাদিজা (রাঃ)-এর গর্ভে জন্মেছে: কাসিম, জয়নব, রুকাইয়া, উম্মে কুলসুম, ফাতিমা আর আবদুল্লাহ, যাঁকে কিছু বর্ণনায় তাইয়িব ও তাহির নামেও ডাকা হয়েছে। ছেলেরা শিশু অবস্থায়ই মারা যায়। চার মেয়েই মদিনায় হিজরতের সময়টা দেখে গেছেন।"
          },
          {
            "en": "Her wealth changed what he could do with his time. A man no longer obliged to be in the market could spend nights alone on a mountain, and Ibn Ishaq records that he later took his young cousin Ali (RA) into his own house to relieve Abu Talib in a hard season. When revelation finally came, the first person he told was already in the room, and she believed him.",
            "bn": "তাঁর সম্পদ নবী ﷺ-এর সময়ের হিসাব বদলে দিল। যাঁকে আর প্রতিদিন বাজারে পড়ে থাকতে হয় না, তিনি পাহাড়ে একা রাত কাটাতে পারেন। ইবনে ইসহাক বলেন, কঠিন এক মৌসুমে আবু তালিবের বোঝা হালকা করতে তিনি পরে চাচাতো ভাই আলী (রাঃ)-কে নিজের ঘরে নিয়ে আসেন। ওহি যখন এল, প্রথম যাঁকে তিনি কথাটা বললেন, তিনি ঘরেই ছিলেন, আর তিনি বিশ্বাস করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How People Are Chosen",
          "bn": "মানুষ বাছাই যেভাবে হয়"
        },
        "p": [
          {
            "en": "The event carries a plain rule about choosing a spouse. A woman of wealth and standing chose a man who had neither wealth nor means of his own, on the evidence of how he handled other people's property and other people's servants. The list she gave is the specification: kinship, standing, trustworthiness, character, truthfulness. Two of the five came with his lineage; the other three, trustworthiness, character and truthfulness, are earned, and those are the ones a person can test before a marriage rather than after it.",
            "bn": "জীবনসঙ্গী বাছাই নিয়ে এই ঘটনা সোজা একটা নিয়ম রেখে যায়। সম্পদ ও মর্যাদার অধিকারী এক নারী এমন একজনকে বেছে নিলেন যাঁর নিজের সম্পদ বা সঙ্গতি কোনোটাই ছিল না। প্রমাণ ছিল একটাই, অন্যের মাল আর অন্যের চাকরের সঙ্গে তিনি কেমন ব্যবহার করেন। খাদিজা (রাঃ) নিজেই তালিকা দিয়ে গেছেন: আত্মীয়তা, মর্যাদা, আমানতদারি, চরিত্র, সত্যবাদিতা। পাঁচটির মধ্যে দুটি তাঁর বংশের সূত্রে পাওয়া। বাকি তিনটি, আমানতদারি, চরিত্র আর সত্যবাদিতা, অর্জন করতে হয়, আর এই তিনটিই বিয়ের আগে যাচাই করে নেওয়া যায়, পরে নয়।"
          },
          {
            "en": "It also reframes what a household is for. Her estate stopped being a family fortune and became the working capital of a mission, and no record survives of her ever mentioning that. A believer with means can read that as a job description. The practice the Aisha (RA) narration preserves, honouring a spouse's friends after her death, is the small imitable half of the same loyalty.",
            "bn": "একটা সংসার কীসের জন্য, সেই প্রশ্নটাও এই ঘটনা নতুন করে সাজায়। তাঁর সম্পদ আর পারিবারিক ধন থাকল না, হয়ে গেল একটা দাওয়াতের চলতি পুঁজি। অথচ তিনি কখনো সে কথা তুলেছেন, এমন কোনো বর্ণনা নেই। সামর্থ্যবান ঈমানদার এখান থেকে নিজের কাজের বিবরণ পড়ে নিতে পারেন। আর আয়েশা (রাঃ)-এর বর্ণনায় যে অভ্যাসটি রয়ে গেছে, স্ত্রীর মৃত্যুর পরও তাঁর বান্ধবীদের সম্মান করা, সেটি একই বিশ্বস্ততার ছোট ও অনুকরণযোগ্য অংশ।"
          }
        ]
      }
    ]
  },
  "kaaba": {
    "sections": [
      {
        "h": {
          "en": "A House of Loose Stone",
          "bn": "শুকনো পাথরের এক ঘর"
        },
        "p": [
          {
            "en": "By about 605 CE the Prophet ﷺ was around thirty-five and ten years married. The Ka'bah at that time was not the building a pilgrim pictures today. Its walls were dry stone laid without mortar, standing only a little above a man's height, and it had no roof, so whatever was kept inside lay open to the weather and to thieves.",
            "bn": "৬০৫ খ্রিস্টাব্দের কাছাকাছি সময়ে নবী ﷺ-এর বয়স প্রায় পঁয়ত্রিশ, সংসারের বয়স দশ বছর। কাবা তখন আজকের হাজীর কল্পনার সেই ঘর নয়। দেয়াল ছিল শুকনো পাথরের গাঁথুনি, মসলা ছাড়া, উচ্চতা মানুষের মাথার চেয়ে সামান্য বেশি। ছাদ ছিল না। ফলে ভেতরে যা রাখা হতো, তা রোদ-বৃষ্টি আর চোরের সামনে খোলাই পড়ে থাকত।"
          },
          {
            "en": "Two accidents forced the issue. Ibn Ishaq reports a flood that ran through the sanctuary and cracked the walls, and a fire that started when a woman fumigating the House with incense let a spark reach its covering. The Quraysh decided to pull the building down and raise it roofed and higher, and then hesitated before anyone dared touch it.",
            "bn": "দুটো দুর্ঘটনা তাদের বাধ্য করল। ইবনে ইসহাক বলেন, হারামের ভেতর দিয়ে বন্যার পানি বয়ে গিয়ে দেয়াল ফাটিয়ে দেয়। আর এক নারী কাবায় ধূপ জ্বালাতে গেলে ফুলকি লেগে গিলাফে আগুন ধরে যায়। কুরাইশরা ঠিক করল, ঘর ভেঙে আবার তুলবে, এবার ছাদসহ এবং আরও উঁচু করে। তারপর অনেকক্ষণ তারা ইতস্তত করল, গায়ে হাত দিতে কেউ সাহস পাচ্ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Only Lawful Money",
          "bn": "কেবল হালাল টাকা"
        },
        "p": [
          {
            "en": "They agreed on a condition first. Ibn Ishaq records that they resolved to put nothing into the House except money earned lawfully, with no proceeds of prostitution, of usury, or of anything taken wrongfully from a person. Timber came from a Byzantine ship wrecked at the port of Shu'aybah, and a Coptic carpenter living in Makkah, named Baqum, worked it for them.",
            "bn": "প্রথমে তারা একটা শর্তে একমত হলো। ইবনে ইসহাক বলেন, তারা ঠিক করল কাবায় হালাল কামাই ছাড়া আর কোনো টাকা লাগানো হবে না; ব্যভিচারের আয়, সুদের টাকা কিংবা কারও কাছ থেকে জুলুম করে নেওয়া কিছুই নয়। কাঠ এসেছিল শুআইবা বন্দরে ভেঙে পড়া এক রোমীয় জাহাজ থেকে, আর মক্কায় থাকা বাকুম নামের এক কিবতি ছুতার সেই কাঠ কেটে দিয়েছিলেন।"
          },
          {
            "en": "Al-Walid ibn al-Mughirah struck the first blow with a pick, saying they intended only what was best, and the rest of Quraysh waited overnight to see whether anything happened to him. Nothing did, and in the morning they all joined in, each clan taking one face of the building. The lawful money then ran out before the walls could enclose the whole old foundation, so they shortened the plan, left part of the original ground outside behind a low curved wall, and set the door high above the ground.",
            "bn": "কোদাল হাতে প্রথম আঘাত করেন ওয়ালিদ ইবনে মুগিরা, বলে নেন যে তাঁদের নিয়তে ভালো ছাড়া কিছু নেই। বাকি কুরাইশ রাতটা অপেক্ষা করল, দেখা যাক তাঁর কিছু হয় কি না। কিছুই হলো না। সকালে সবাই কাজে নেমে পড়ল, প্রতিটি গোত্র নিল ঘরের এক-এক দিক। কিন্তু পুরনো ভিতের পুরোটা ঘেরার আগেই হালাল টাকা ফুরিয়ে গেল। তাই নকশা ছোট করে আনা হলো, আসল ভিতের একটা অংশ বাইরে রেখে নিচু বাঁকানো দেয়াল দিয়ে ঘিরে দেওয়া হলো, আর দরজা বসানো হলো মাটি থেকে অনেকটা উপরে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Cloak and Four Corners",
          "bn": "একটি চাদর ও চারটি কোণ"
        },
        "p": [
          {
            "en": "The work went up without trouble until the Black Stone had to be returned to its corner. Every clan wanted the honour. Ibn Ishaq says the argument ran for four or five nights and hardened into a sworn alliance over a bowl of blood, with Banu Abd ad-Dar and Banu Adi binding themselves to fight rather than yield. The city was close to a war inside its own sanctuary.",
            "bn": "কাজ ভালোভাবেই এগোচ্ছিল, বাধল হাজরে আসওয়াদ নিজের কোণে ফিরিয়ে বসানোর সময়। সম্মানটুকু প্রতিটি গোত্রই চাইছিল। ইবনে ইসহাক বলেন, তর্ক চলল চার-পাঁচ রাত, আর তা গিয়ে দাঁড়াল রক্তের পাত্রে হাত ডুবিয়ে শপথ নেওয়ায়; বনু আবদুদ দার আর বনু আদি কথা দিল, হার মানার বদলে তারা লড়বে। শহরটা তখন নিজের হারামের ভেতরেই যুদ্ধ বাধিয়ে ফেলার কাছাকাছি।"
          },
          {
            "en": "Then Abu Umayyah ibn al-Mughirah, the oldest man among them, proposed that they accept as judge the first person to walk in through the gate. The first was Muhammad ﷺ, and Ibn Ishaq reports them saying, here is al-Amin, we accept him. He called for a cloak, laid the stone in the middle, told each clan to take an edge, and had them raise it together. Then he set it in place himself.",
            "bn": "তখন তাদের মধ্যে সবচেয়ে বয়োজ্যেষ্ঠ আবু উমাইয়া ইবনে মুগিরা প্রস্তাব দিলেন, দরজা দিয়ে সবার আগে যে ঢুকবে তার ফয়সালাই সবাই মেনে নেবে। প্রথমে ঢুকলেন মুহাম্মদ ﷺ। ইবনে ইসহাকের বর্ণনায় তারা বলে উঠল, এই তো আল-আমিন, আমরা রাজি। তিনি একটা চাদর আনালেন, তার মাঝখানে পাথরটি রাখলেন, প্রতিটি গোত্রকে বললেন এক-একটা কিনারা ধরতে, আর সবাই মিলে চাদরটা তুলল। এরপর নিজের হাতেই তিনি পাথরটি জায়গামতো বসিয়ে দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The First House for Mankind",
          "bn": "মানুষের জন্য প্রথম ঘর"
        },
        "p": [
          {
            "en": "No verse was revealed about the rebuilding. What the Quran gives instead is the House's own history, which the Quraysh were handling without knowing it. 2:127 shows Ibrahim (AS) and Isma'il (AS) raising the foundations and praying that it be accepted, and 2:125 has Allah make the House a place of return and of security. 22:26 has Him show Ibrahim (AS) the site itself.",
            "bn": "এই পুনর্নির্মাণ নিয়ে কোনো আয়াত নাজিল হয়নি। কুরআন বরং দেয় ঘরটির নিজের ইতিহাস, যা কুরাইশরা না বুঝেই হাতে নিয়ে নাড়াচাড়া করছিল। ২:১২৭ দেখায়, ইবরাহিম (আঃ) ও ইসমাইল (আঃ) ভিত তুলছেন আর দোয়া করছেন যেন কাজটা কবুল হয়। ২:১২৫ বলে, আল্লাহ এই ঘরকে বানিয়েছেন মানুষের মিলনকেন্দ্র ও নিরাপদ আশ্রয়। ২২:২৬ বলে, তিনিই ইবরাহিম (আঃ)-কে ঘরের জায়গাটা চিনিয়ে দিয়েছিলেন।"
          },
          {
            "en": "3:96 calls it the first House set up for mankind, at Bakkah, blessed and a guidance for the worlds, and 3:97 adds that whoever enters it is safe. 106:3 names its Lord as the One the Quraysh owed worship to. The men arguing over a corner stone were caretakers of a building whose deed, in the Quran's telling, was never in their names.",
            "bn": "৩:৯৬ একে বলে মানুষের জন্য স্থাপিত প্রথম ঘর, মক্কায়, বরকতময় ও সারা জাহানের পথপ্রদর্শক; ৩:৯৭ যোগ করে, যে এখানে ঢোকে সে নিরাপদ। ১০৬:৩ বলে দেয়, এই ঘরের রবের ইবাদতই কুরাইশের উপর পাওনা ছিল। যাঁরা এক কোণের পাথর নিয়ে ঝগড়া করছিলেন, তাঁরা এমন এক ঘরের দেখাশোনার লোক, কুরআনের হিসাবে যে ঘরের দলিল কোনোদিনই তাঁদের নামে ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Foundations of Ibrahim (AS)",
          "bn": "ইবরাহিম (আঃ)-এর ভিত"
        },
        "p": [
          {
            "en": "Sahih Muslim 1333 records Aisha (RA) reporting that the Prophet ﷺ said to her: do you not see that your people, when they built the Ka'bah, fell short of the foundations of Ibrahim (AS)? She asked whether he would not restore it to them, and he answered that were her people not so recently out of disbelief, he would do so. Al-Bukhari records the same report.",
            "bn": "সহিহ মুসলিম ১৩৩৩-এ আয়েশা (রাঃ) বলেন, নবী ﷺ তাঁকে বলেছিলেন, তুমি কি দেখো না, তোমার লোকেরা কাবা বানানোর সময় ইবরাহিম (আঃ)-এর ভিত পর্যন্ত পৌঁছাতে পারেনি? তিনি জিজ্ঞেস করলেন, আপনি কি সেই ভিতের উপর ঘরটি ফিরিয়ে দেবেন না? নবী ﷺ বললেন, তোমার লোকেরা কুফর ছেড়ে সদ্য বেরিয়ে এসেছে, তা না হলে আমি সেটাই করতাম। বুখারিতেও একই বর্ণনা আছে।"
          },
          {
            "en": "It is a striking piece of restraint. He knew the building was wrong, he had the authority to correct it after the conquest, and he left it because the correction would have unsettled people new to faith. Al-Bukhari and Muslim also preserve Jabir's (RA) account of the rebuilding, in which al-Abbas (RA) told him to put his waist-wrapper on his shoulder against the stones.",
            "bn": "এটা সংযমের একটা চমকপ্রদ নমুনা। তিনি জানতেন ঘরটি ঠিক জায়গায় নেই, মক্কা বিজয়ের পর সেটা শুধরে দেওয়ার ক্ষমতাও তাঁর ছিল, তবু তিনি হাত দেননি; কারণ ঠিক করতে গেলে সদ্য ইমান আনা মানুষেরা নড়ে যেত। সহিহ বুখারি ও সহিহ মুসলিমে জাবির (রাঃ)-এর বর্ণনাও আছে সেই নির্মাণকাজ নিয়ে। আব্বাস (রাঃ) তাঁকে বলেছিলেন লুঙ্গিটা কাঁধে তুলে নিতে, যাতে পাথরে কষ্ট না হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Men on the Walls",
          "bn": "দেয়ালের উপরের মানুষগুলো"
        },
        "p": [
          {
            "en": "Al-Walid ibn al-Mughirah of Makhzum is the man who dared to begin, and he later became one of the fiercest opponents of the message that came from the same House. Abu Umayyah ibn al-Mughirah found the way out of the deadlock, not by judging the case himself but by taking it away from the clans altogether.",
            "bn": "মাখজুম গোত্রের ওয়ালিদ ইবনে মুগিরা প্রথম হাত দেওয়ার সাহস দেখিয়েছিলেন; পরে এই একই ঘর থেকে আসা দাওয়াতের কঠোরতম বিরোধীদের একজন হয়ে ওঠেন তিনি। জট খোলার পথ বের করেন আবু উমাইয়া ইবনে মুগিরা। তিনি নিজে বিচার করতে বসেননি, বিষয়টা গোত্রগুলোর হাত থেকেই সরিয়ে নিয়েছিলেন।"
          },
          {
            "en": "Al-Abbas ibn Abd al-Muttalib (RA) appears in the narration carrying stones beside his nephew. And the Prophet ﷺ, thirty-five years old and holding no office at all, is accepted as arbitrator by men who had just sworn to fight each other over a corner of masonry. What they trusted was not his rank. It was years of having called him al-Amin and meaning it.",
            "bn": "বর্ণনায় আব্বাস ইবনে আবদুল মুত্তালিব (রাঃ)-কে দেখা যায় ভাতিজার পাশে পাথর বইতে। আর নবী ﷺ, বয়স পঁয়ত্রিশ, হাতে কোনো পদ নেই, তাঁকেই বিচারক মেনে নিল সেই লোকেরা, যারা কিছুক্ষণ আগে এক কোণের গাঁথুনি নিয়ে পরস্পরের সঙ্গে লড়ার শপথ করেছে। তারা তাঁর পদমর্যাদায় ভরসা করেনি। ভরসা করেছিল বছরের পর বছর তাঁকে আল-আমিন ডাকার অভ্যাসে, আর সেই ডাকটা তারা মন থেকেই ডাকত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Judgement Makkah Remembered",
          "bn": "মক্কা যে ফয়সালা মনে রেখেছিল"
        },
        "p": [
          {
            "en": "Two things came out of it. The building the Quraysh raised, short of Ibrahim's (AS) foundation, is the shape the sanctuary has kept, which is why pilgrims walk their tawaf outside the low curved wall rather than through it. Abdullah ibn az-Zubayr (RA) did rebuild it on the older foundation in his own time, and after him it was returned to the Quraysh plan.",
            "bn": "এখান থেকে দুটো জিনিস বেরিয়ে এসেছে। কুরাইশ যে ঘর তুলেছিল, ইবরাহিম (আঃ)-এর ভিত পর্যন্ত না পৌঁছেই, হারাম আজও সেই আকারেই দাঁড়িয়ে। এ কারণেই হাজীরা তাওয়াফ করেন নিচু বাঁকানো দেয়ালের বাইরে দিয়ে, ভেতর দিয়ে নয়। আবদুল্লাহ ইবনে জুবাইর (রাঃ) নিজের সময়ে ঘরটি পুরনো ভিতের উপর আবার তুলেছিলেন, তবে তাঁর পরে সেটি কুরাইশের নকশাতেই ফিরিয়ে নেওয়া হয়।"
          },
          {
            "en": "The other outcome was a reputation. A man who had settled a quarrel between armed clans without handing any of them a defeat is a man other people will later ask to judge. That is part of why a delegation from Yathrib, worn out by its own feud, was willing years afterwards to take him. And 4:58, revealed later, commanded rendering trusts and judging with justice to a community that had watched it done.",
            "bn": "দ্বিতীয় ফল হলো একটা সুনাম। যিনি অস্ত্রধারী গোত্রগুলোর ঝগড়া মিটিয়েছেন কাউকেই হারিয়ে না দিয়ে, তাঁকেই পরে মানুষ বিচার করতে ডাকে। বহু বছর পরে ইয়াসরিব থেকে আসা প্রতিনিধিদল তাঁকে নিতে রাজি হয়েছিল; নিজেদের গোত্রীয় দ্বন্দ্বে শহরটা তখন ক্লান্ত, আর এই সুনামও এর একটা কারণ। আর ৪:৫৮ পরে যখন হুকুম দিল হকদারের হক পৌঁছে দিতে আর ন্যায়ের সঙ্গে বিচার করতে, তখন কথাটা পৌঁছাল এমন একদল মানুষের কাছে, যারা কাজটা হতে দেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Give Everyone a Corner",
          "bn": "সবাইকে একটা কোণ দিন"
        },
        "p": [
          {
            "en": "The method is the transferable part. He did not decide who deserved the honour; he changed the question, so that a contest for a single prize became a job with room for everybody in it. Anyone who has to settle a quarrel over credit, over precedence, over whose name goes first, has a working technique here, and it takes about a minute to apply.",
            "bn": "নেওয়ার মতো জিনিসটা হলো পদ্ধতি। সম্মানটা কার প্রাপ্য, তিনি সেই ফয়সালা করতেই যাননি। তিনি প্রশ্নটাই বদলে দিয়েছেন। একটামাত্র পুরস্কারের কাড়াকাড়ি হয়ে গেল এমন এক কাজ, যেখানে সবার জায়গা আছে। কৃতিত্ব নিয়ে, আগে-পরে বসা নিয়ে, কার নাম আগে যাবে তা নিয়ে যে ঝগড়া মেটাতে হয়, তার জন্য এখানে কাজে লাগানোর মতো একটা কৌশল আছে, আর সেটা প্রয়োগ করতে এক মিনিটও লাগে না।"
          },
          {
            "en": "The second lesson is harder, and it comes from Muslim 1333. He left standing a building he knew was in the wrong place, rather than shake people new to faith. A correction you are entitled to make is not always a correction to make now. 16:90 orders justice and good conduct in one breath, and this event shows both together.",
            "bn": "দ্বিতীয় শিক্ষাটা কঠিন, আর সেটা আসে মুসলিম ১৩৩৩ থেকে। যে ঘরটি ঠিক জায়গায় নেই তা তিনি জানতেন, তবু সেটাকে দাঁড়ানো অবস্থাতেই রেখে দিলেন, যাতে সদ্য ইমান আনা মানুষগুলো নড়ে না যায়। যে সংশোধন করার অধিকার আপনার আছে, সেটা সবসময় এখনই করার মতো সংশোধন নয়। ১৬:৯০ এক নিঃশ্বাসে ন্যায়বিচার আর সদাচরণের হুকুম দেয়; এই ঘটনাটাই দেখায় দুটো একসঙ্গে কেমন দেখায়।"
          }
        ]
      }
    ]
  },
  "dar_arqam": { sections: [
    { h: { en: "Nowhere Left to Meet", bn: "বসার জায়গা ছিল না" }, p: [
      { en: "By about 614 CE the message had been public for a year. The Prophet ﷺ had called Quraysh up to as-Safa and named what he was calling them to, and the city answered first with ridicule and then with hands. Makkah had no ruler, no court and no police. A man was safe because his clan would answer for him, which protected a chief's son and left a slave with nobody.", bn: "৬১৪ খ্রিস্টাব্দের কাছাকাছি সময়ে দাওয়াত প্রকাশ্য হয়েছে বছরখানেক। নবী ﷺ সাফা পাহাড়ে কুরাইশদের ডেকে খোলাখুলি বলে দিয়েছেন কীসের দিকে ডাকছেন। শহর জবাব দিল প্রথমে ঠাট্টায়, তারপর হাত তুলে। মক্কায় শাসক ছিল না, আদালত ছিল না, পাহারাও না। মানুষ বাঁচত গোত্রের জোরে, কারণ ক্ষতি হলে গোত্র হিসাব চাইবে। এই ব্যবস্থা সরদারের ছেলেকে আগলে রাখত, আর দাসের পাশে দাঁড়ানোর কেউ থাকত না।" },
      { en: "A place was needed and it had to be steady. Ibn Ishaq records that the believers went out to the ravines around Makkah to pray unseen, and that one such gathering was found and abused. A ravine hides a prayer for an hour; it teaches nobody. What was needed was a room where a man could hear what had come down, learn the prayer, and say the shahadah aloud without the news reaching the sanctuary by evening.", bn: "জায়গা দরকার ছিল, আর সেটা হতে হতো পাকাপোক্ত। ইবনে ইসহাক লিখেছেন, ঈমানদাররা মক্কার আশপাশের গিরিপথে গিয়ে আড়ালে সালাত পড়তেন, আর একবার তেমন এক জমায়েত ধরা পড়ে যায়। গিরিপথ এক ঘণ্টার সালাত আড়াল করতে পারে, কাউকে শেখাতে পারে না। দরকার ছিল একটা ঘর। যেখানে বসে শোনা যাবে কী নাযিল হয়েছে, শেখা যাবে সালাতের নিয়ম, আর কালিমা মুখে বলা যাবে এমনভাবে যাতে সন্ধ্যার আগেই খবরটা কাবার চত্বরে না পৌঁছায়।" },
    ] },
    { h: { en: "A Door Nobody Watched", bn: "যে দরজায় কেউ নজর রাখেনি" }, p: [
      { en: "The house belonged to al-Arqam ibn Abi al-Arqam (RA), a young man of Banu Makhzum, and it stood on the slope of as-Safa a short walk from the sanctuary. Makhzum was also the clan of Amr ibn Hisham, whom the Muslims called Abu Jahl and who was the hardest of the persecutors. The believers were sitting in a house belonging to his kin, and Quraysh never raided it in the years it served them.", bn: "ঘরটি ছিল বনু মাখজুমের তরুণ আরকাম ইবনে আবি আল-আরকাম (রাঃ)-এর, সাফা পাহাড়ের ঢালে, কাবা থেকে অল্প হাঁটা পথ। মাখজুম আবার আমর ইবনে হিশামেরও গোত্র, যাকে মুসলিমরা আবু জাহল বলতেন, আর নির্যাতনে সে-ই ছিল সবচেয়ে কঠোর। ঈমানদাররা বসতেন তারই আত্মীয়ের ঘরে, আর যতদিন ঘরটি কাজে লেগেছে কুরাইশ সেখানে হানা দেয়নি।" },
      { en: "Inside, the work was ordinary. The Prophet ﷺ recited what had come down, taught the prayer, and received those who came to accept. Ibn Hisham names Mus'ab ibn Umayr (RA) among the men who took Islam in that house, and the reports have Suhayb ar-Rumi (RA) and Ammar ibn Yasir (RA) reaching its door on one day. Ibn Ishaq's account of Umar's (RA) arrival puts about forty people inside by the end.", bn: "ভেতরের কাজটা ছিল সাদামাটা। নবী ﷺ যা নাযিল হয়েছে তা পড়ে শোনাতেন, সালাত শেখাতেন, আর যারা ইসলাম নিতে আসত তাদের গ্রহণ করতেন। ইবনে হিশাম বলছেন, মুসআব ইবনে উমাইর (রাঃ) এই ঘরেই ইসলাম নেন; আর বর্ণনায় আছে, সুহাইব আর-রুমি (রাঃ) ও আম্মার ইবনে ইয়াসির (রাঃ) একই দিনে এর দরজায় এসেছিলেন। উমর (রাঃ)-এর আসার বিবরণে ইবনে ইসহাক শেষদিকে ভেতরে চল্লিশ জনের মতো লোকের কথা বলেন।" },
    ] },
    { h: { en: "Verses for a Small Circle", bn: "ছোট মজলিসের জন্য আয়াত" }, p: [
      { en: "96:9-10 asks whether you have seen the one who forbids a servant when he prays. The commentators place these verses of al-Alaq later than the five that opened the revelation, and the sirah reads them against the obstruction of prayer at the sanctuary. Whatever the occasion, the Quran names the exact difficulty this house answered: prayer had become a thing a man could be stopped from doing in Makkah.", bn: "৯৬:৯ আয়াত জিজ্ঞেস করে, তুমি কি তাকে দেখেছ যে বাধা দেয়, আর ৯৬:১০ বলে, এক বান্দাকে যখন সে সালাত পড়ে। মুফাসসিরগণ সূরা আলাকের এই আয়াতগুলোকে প্রথম পাঁচ আয়াতের পরের সময়ের বলেন, আর সীরাত এগুলো পড়ে কাবার চত্বরে সালাতে বাধা দেওয়ার প্রসঙ্গে। শানে নুযূল যাই হোক, কুরআন এখানে ঠিক সেই সমস্যাটার নাম নিচ্ছে যার জবাব ছিল ওই ঘর। মক্কার ভেতরে সালাত হয়ে দাঁড়িয়েছিল এমন কাজ, যা করতে গেলে বাধা দেওয়া যেত।" },
      { en: "18:28 tells the Prophet ﷺ to keep himself patient with those who call upon their Lord morning and evening seeking His face, and not to let his eyes pass beyond them desiring the adornment of worldly life. Most of the people in that room were poor, or young, or owned by somebody else. The verse ranks such a gathering above the men of standing outside it. Nothing was revealed about the house itself. The nearest description of the work inside it is Madinan and thematic: 62:2 has a Messenger reciting Allah's verses to the unlettered, purifying them, teaching them the Book and wisdom.", bn: "১৮:২৮ আয়াতে নবী ﷺ-কে বলা হয়েছে সকাল-সন্ধ্যা যারা তাঁদের রবকে ডাকে তাদের সাথেই ধৈর্য ধরে থাকতে, আর দুনিয়ার শোভা চেয়ে তাদের থেকে চোখ না সরাতে। ওই ঘরের বেশির ভাগ মানুষ ছিলেন গরিব, নয়তো কমবয়সী, নয়তো অন্যের মালিকানাধীন। আয়াতটি এমন মজলিসকেই বাইরের সম্মানিত লোকদের উপরে বসিয়ে দেয়। ঘরটি নিয়ে আলাদা কোনো আয়াত নাযিল হয়নি। ভেতরের কাজের সবচেয়ে কাছের বর্ণনা মাদানী এবং বিষয়গত: ৬২:২ আয়াতে রাসূল নিরক্ষরদের কাছে আল্লাহর আয়াত পড়ে শোনান, তাদের পবিত্র করেন, আর কিতাব ও হিকমত শেখান।" },
    ] },
    { h: { en: "No Narration Names It", bn: "কোনো হাদীসে ঘরটির নাম নেই" }, p: [
      { en: "It should be said plainly: neither Sahih al-Bukhari nor Sahih Muslim carries a narration naming the house of al-Arqam. What we have is sirah: Ibn Ishaq through Ibn Hisham, Ibn Sa'd's Tabaqat, and Ibn Hajar on al-Arqam (RA) himself in al-Isabah. That is enough to know the house existed and what it was for, and it is not the same class of report as a hadith.", bn: "কথাটা সোজাসুজি বলা দরকার। সহীহ বুখারী বা সহীহ মুসলিম কোথাও আরকামের ঘরের নাম ধরে কোনো হাদীস নেই। যা আছে তা সীরাতের বর্ণনা: ইবনে হিশামের হাতে আসা ইবনে ইসহাক, ইবনে সাদের তাবাকাত, আর আরকাম (রাঃ)-এর ব্যাপারে ইবনে হাজারের আল-ইসাবা। ঘরটা ছিল এবং কী কাজে ছিল, তা জানতে এটুকুই যথেষ্ট। তবু এ ধরনের বর্ণনা আর হাদীস এক জিনিস নয়।" },
      { en: "The nearest sound narration is a general one, and its subject is a mosque rather than a private house. Sahih Muslim 2699, from Abu Hurayrah (RA), has the Prophet ﷺ say that no people gather in a house among the houses of Allah, reciting the Book of Allah and studying it among themselves, except that tranquillity descends upon them, mercy covers them, the angels surround them, and Allah mentions them to those with Him. The room on as-Safa is where that habit began.", bn: "সবচেয়ে কাছের সহীহ বর্ণনাটি সাধারণ, আর তার বিষয় মসজিদ, কোনো ব্যক্তিগত ঘর নয়। সহীহ মুসলিম ২৬৯৯-এ আবু হুরায়রা (রাঃ) থেকে এসেছে, নবী ﷺ বলেছেন, আল্লাহর ঘরগুলোর কোনো এক ঘরে যখন কিছু মানুষ আল্লাহর কিতাব পড়তে আর নিজেদের মধ্যে তা নিয়ে আলোচনা করতে বসে, তখন তাদের উপর প্রশান্তি নামে, রহমত ঢেকে নেয়, ফেরেশতারা ঘিরে ধরে, আর তাঁর কাছে যারা আছে তাদের মাঝে আল্লাহ তাদের কথা বলেন। সাফার ওই ঘর থেকেই অভ্যাসটার শুরু।" },
    ] },
    { h: { en: "The Host and His Guests", bn: "ঘরের মালিক আর তাঁর মেহমানরা" }, p: [
      { en: "Al-Arqam (RA) is remembered for one decision. He was young, he had a house, and he gave over its address when an address was the one thing a believer could not hide. The sources do not agree on his place among the early converts, and Ibn Sa'd and Ibn Hajar preserve that disagreement rather than settle it. Ibn Sa'd adds that he later endowed the house upon his descendants.", bn: "আরকাম (রাঃ)-কে মনে রাখা হয় একটাই সিদ্ধান্তের জন্য। বয়স কম, হাতে একটা ঘর, আর তিনি সেই ঘরের ঠিকানাটাই দিয়ে দিলেন এমন সময়ে যখন ঠিকানাই ছিল ঈমানদারের একমাত্র না লুকানো জিনিস। প্রথম দিকের কে কোন ক্রমে ইসলাম নিয়েছেন, তা নিয়ে বর্ণনাগুলো একমত নয়; ইবনে সাদ ও ইবনে হাজার সেই মতভেদ মিটিয়ে না দিয়ে রেখেই দিয়েছেন। ইবনে সাদ আরও বলেন, পরে তিনি ঘরটি সন্তানদের জন্য ওয়াকফ করে যান।" },
      { en: "Mus'ab ibn Umayr (RA) came into that house from the most comfortable household in Makkah, was cut off by his mother and his clan for it, and was later the first teacher the Prophet ﷺ sent to Yathrib. Suhayb (RA) had a trader's purse and no tribe; Ammar (RA) had neither. Wealth, poverty and slavery sat in one room, and the room did not seat them by rank.", bn: "মুসআব ইবনে উমাইর (রাঃ) এই ঘরে এসেছিলেন মক্কার সবচেয়ে আরামের পরিবার থেকে। এর জন্য মা ও গোত্র তাঁকে ত্যাগ করে, আর পরে নবী ﷺ তাঁকেই প্রথম শিক্ষক করে ইয়াসরিবে পাঠান। সুহাইব (রাঃ)-এর ছিল ব্যবসায়ীর থলে, কিন্তু গোত্র ছিল না; আম্মার (রাঃ)-এর দুটোর একটাও ছিল না। ধনী, গরিব আর দাস এক ঘরে বসেছিল, আর ঘরটা মর্যাদা দেখে কাউকে বসায়নি।" },
    ] },
    { h: { en: "From One Room Outward", bn: "এক ঘর থেকে বাইরে" }, p: [
      { en: "When the group finally left that house it was no longer a set of scattered individuals. It had one text, one way of praying, and teachers its members knew by name. The people who crossed to Abyssinia, and later the people who went to Madinah, had already been taught. After Umar (RA) accepted Islam the believers prayed at the Ka'bah, and the work of the house was finished.", bn: "যখন দলটা শেষ পর্যন্ত ওই ঘর ছেড়ে বেরোল, তখন তারা আর ছড়ানো কিছু মানুষ নয়। তাদের হাতে ছিল এক কিতাব, এক নিয়মে সালাত, আর নাম ধরে চেনা কয়েকজন শিক্ষক। যাঁরা হাবশায় পাড়ি দিলেন, পরে যাঁরা মদিনায় গেলেন, তাঁদের শেখা আগেই হয়ে গিয়েছিল। উমর (রাঃ) ইসলাম নেওয়ার পর মুসলিমরা কাবার সামনে সালাত পড়লেন, আর সেখানেই ওই ঘরের কাজ শেষ হলো।" },
      { en: "The method outlasted the building. A teacher, a small circle and a text taken in order is the shape that continued after Madinah had a mosque, and the students of the Suffah are its heirs. Al-Azraqi, the early historian of Makkah, records that the house later passed to al-Khayzuran, mother of Harun ar-Rashid, and was known afterwards by her name.", bn: "পদ্ধতিটা ঘরটির চেয়েও বেশি দিন টিকেছে। একজন শিক্ষক, ছোট একটা হালকা, আর ধারাবাহিকভাবে পড়া একটা কিতাব; মদিনায় মসজিদ ওঠার পরেও এই আকৃতিই চলেছে, আর সুফফার ছাত্ররা তারই উত্তরাধিকারী। মক্কার পুরোনো ইতিহাসকার আল-আযরাকি লিখেছেন, ঘরটি পরে হারুনুর রশিদের মা খায়যুরানের হাতে যায় এবং এরপর তাঁর নামেই পরিচিত হতো।" },
    ] },
    { h: { en: "Keeping a Room Open", bn: "একটা ঘর খোলা রাখা" }, p: [
      { en: "A community does not begin with a building. It begins with a room where the text is taught in sequence and somebody is responsible for who comes in. Give up your sitting room one evening a week. Teach your own children the prayer. Where there is no mosque the religion continues; where there is nowhere to learn, it stalls.", bn: "সমাজ গড়া শুরু হয় দালান দিয়ে নয়, একটা ঘর দিয়ে, যেখানে ধারাবাহিকভাবে কিতাব পড়ানো হয় আর কে আসছে তার দায়িত্ব কেউ নেয়। সপ্তাহে এক সন্ধ্যা নিজের বসার ঘরটা ছেড়ে দিন। ছেলেমেয়েকে সালাতটা নিজে ধরে ধরে শেখান, কোনো ক্লাস শিখিয়ে দেবে ভেবে বসে থাকবেন না। মসজিদ না থাকলেও দ্বীন চলে, কিন্তু শেখার জায়গা না থাকলে থেমে যায়।" },
      { en: "Then there is what al-Arqam (RA) risked. He gave the one asset that cannot be given quietly, his own address, and not a single speech of his is recorded. What you lend costs more than what you say. And 18:28 applies inside the circle too: do not let clothing or accent decide who is welcome to sit down.", bn: "এরপর আছে আরকাম (রাঃ)-এর ঝুঁকি। তিনি দিয়েছিলেন এমন জিনিস যা চুপচাপ দেওয়া যায় না, নিজের ঠিকানা; আর তাঁর একটা বক্তৃতাও ইতিহাসে নেই। কথার চেয়ে ধার দেওয়া জিনিসটার দামই বেশি পড়ে। আর ১৮:২৮ আয়াতের নির্দেশ মজলিসের ভেতরেও খাটে: কার পোশাক বা কার টান শুনে ঠিক করবেন না কে ভেতরে বসার যোগ্য।" },
    ] },
  ] },
  "first_martyrs": { sections: [
    { h: { en: "Clients of Makhzum", bn: "মাখজুমের আশ্রিত পরিবার" }, p: [
      { en: "By about 615 CE the campaign against the believers Quraysh could reach had been running for two years or more. Yasir ibn Amir had come up to Makkah from Yemen looking for a lost brother and had stayed, living under the protection of Abu Hudhayfah ibn al-Mughirah of Banu Makhzum. Ibn Sa'd records that Abu Hudhayfah married him to Sumayyah bint Khayyat of his own household, and their son Ammar was born in the city.", bn: "৬১৫ খ্রিস্টাব্দের কাছাকাছি সময়ে কুরাইশ যাদের নাগাল পেত সেই ঈমানদারদের উপর নির্যাতন চলছে দুই বছরের বেশি। ইয়াসির ইবনে আমির ইয়েমেন থেকে মক্কায় এসেছিলেন হারানো ভাইকে খুঁজতে, আর থেকে গিয়েছিলেন বনু মাখজুমের আবু হুযাইফা ইবনে আল-মুগিরার আশ্রয়ে। ইবনে সাদ লিখেছেন, আবু হুযাইফা নিজের ঘরের সুমাইয়া বিনতে খাইয়াতের সাথে তাঁর বিয়ে দেন, আর তাঁদের ছেলে আম্মারের জন্ম হয় এই শহরেই।" },
      { en: "Protection in that city was a private arrangement and not a right. It held while the protector lived and chose to keep it. When Abu Hudhayfah died the family kept a household name and had no defenders left. A report from Abdullah ibn Mas'ud (RA) lists seven who declared Islam openly at the beginning, and two of the seven, Ammar (RA) and his mother Sumayyah (RA), were from this one house.", bn: "ওই শহরে আশ্রয় ছিল ব্যক্তিগত বন্দোবস্ত, কোনো অধিকার নয়। আশ্রয়দাতা বেঁচে থাকতে এবং চাইতে থাকলে তা টিকত। আবু হুযাইফা মারা যাওয়ার পর পরিবারটির কাছে রইল কেবল একটা ঘরের পরিচয়, পক্ষ নেওয়ার কেউ রইল না। আবদুল্লাহ ইবনে মাসউদ (রাঃ)-এর এক বর্ণনায় শুরুর দিকে প্রকাশ্যে ইসলাম ঘোষণা করা সাতজনের নাম আছে, আর তাঁদের দুজন, আম্মার (রাঃ) ও তাঁর মা সুমাইয়া (রাঃ), এই এক ঘরেরই মানুষ।" },
    ] },
    { h: { en: "Taken Out at Midday", bn: "দুপুরের রোদে বের করে নেওয়া" }, p: [
      { en: "The sources have the family taken out to the open ground of Makkah in the fiercest heat of the day and tormented there. Abu Jahl, a chief of Makhzum, led it, so the demand came from the very clan whose protection they had lived under. It was simple and repeated: say a word against your Lord and go home. Ibn Ishaq preserves what the Prophet ﷺ said as he passed them, that they should have patience, family of Yasir, for their appointed place is Paradise.", bn: "বর্ণনায় আছে, পরিবারটিকে দিনের সবচেয়ে কড়া রোদে মক্কার খোলা মাঠে নিয়ে গিয়ে কষ্ট দেওয়া হতো। নেতৃত্বে ছিল মাখজুমের সরদার আবু জাহল, অর্থাৎ দাবিটা আসছিল সেই গোত্র থেকেই যাদের আশ্রয়ে এতদিন তাঁরা ছিলেন। দাবিটা সহজ, আর রোজই একই: রবের বিরুদ্ধে একটা কথা বলো, তারপর ঘরে ফিরে যাও। পাশ দিয়ে যাওয়ার সময় নবী ﷺ যা বলেছিলেন, ইবনে ইসহাক তা ধরে রেখেছেন। ধৈর্য ধরো, ইয়াসিরের পরিবার, তোমাদের ঠিকানা জান্নাত।" },
      { en: "Sumayyah (RA) would not say it. Abu Jahl killed her with a thrust of a spear, and she was the first person to die for this religion. The reports call her an old woman and do not linger over the manner of it, which is how it should be left. Yasir (RA) died under the same treatment. Ammar (RA) was pressed past the end of his strength and said with his tongue the thing they wanted said.", bn: "সুমাইয়া (রাঃ) কথাটা বলেননি। আবু জাহল বর্শার আঘাতে তাঁকে হত্যা করল, আর এই দ্বীনের পথে তিনিই প্রথম প্রাণ দিলেন। বর্ণনাগুলো তাঁকে বয়সী নারী বলে, আর হত্যার ধরন নিয়ে বিস্তারিত টানে না; এভাবে রাখাই ঠিক। ইয়াসির (রাঃ) একই নির্যাতনে মারা যান। আম্মার (রাঃ)-কে চাপ দেওয়া হয় তাঁর সহ্যের শেষ সীমা পার করে, আর তিনি মুখে বলে ফেলেন ওরা যা শুনতে চেয়েছিল।" },
    ] },
    { h: { en: "The Verse of Compulsion", bn: "বাধ্য হওয়ার আয়াত" }, p: [
      { en: "16:106 is the verse that came out of this ground. It rules on whoever disbelieves in Allah after having believed, and it sets an exception alongside that ruling: except one who is compelled while his heart is secure in faith. The wrath and the great punishment it names fall on those who open their breasts to disbelief willingly. 16:107 gives the reason, that such people preferred the worldly life to the Hereafter.", bn: "১৬:১০৬ আয়াতটি এই মাঠ থেকেই এসেছে। আয়াতটি রায় দেয় তার ব্যাপারে, যে ঈমান আনার পর আল্লাহকে অস্বীকার করে; আর সেই রায়ের সাথেই একটা ব্যতিক্রম রেখে দেয়, যাকে বাধ্য করা হয় অথচ তার দিল ঈমানের উপর অবিচল থাকে। যে গযব ও বড় শাস্তির কথা আয়াতে আছে, তা পড়ে তাদের উপর যারা নিজের বুক কুফরির জন্য খুলে দেয়। ১৬:১০৭ আয়াত কারণটাও বলে দেয়, তারা আখিরাতের চেয়ে দুনিয়ার জীবনকেই বেশি ভালোবেসেছে।" },
      { en: "Four verses on, 16:110 promises that your Lord, to those who emigrated after they were compelled and then strove and were patient, is Forgiving and Merciful. The mufassirun attach the passage to Ammar's (RA) case, and at-Tabari and Ibn Kathir both carry that report, though its chain does not reach back to Ammar (RA) himself. For his parents the fitting verse is Madinan and thematic. 2:154 forbids calling those killed in the way of Allah dead.", bn: "এর চার আয়াত পরে ১৬:১১০ আয়াত বলছে, যারা নির্যাতিত হওয়ার পর হিজরত করে, তারপর জিহাদ করে ও ধৈর্য ধরে, তাদের জন্য তোমার রব ক্ষমাশীল ও দয়ালু। মুফাসসিরগণ এই অংশটিকে আম্মার (রাঃ)-এর ঘটনার সাথে যুক্ত করেন, আর তাবারি ও ইবনে কাসির দুজনেই সেই বর্ণনা এনেছেন; তবে তার সনদ আম্মার (রাঃ) পর্যন্ত পৌঁছায় না। তাঁর মা-বাবার জন্য মানানসই আয়াতটি মাদানী এবং বিষয়গত। ২:১৫৪ আয়াত আল্লাহর পথে নিহতদের মৃত বলতে নিষেধ করে।" },
    ] },
    { h: { en: "What the Sirah Preserves", bn: "সীরাত যা ধরে রেখেছে" }, p: [
      { en: "Neither Sahih al-Bukhari nor Sahih Muslim narrates the killing of Sumayyah (RA) and Yasir (RA). The account is sirah: Ibn Ishaq through Ibn Hisham and Ibn Sa'd's Tabaqat, while al-Hakim records a version of the words spoken to the family of Yasir in his Mustadrak. That is not a reason to doubt that it happened. It is a reason not to present the report as a hadith.", bn: "সহীহ বুখারী বা সহীহ মুসলিম, কোনোটিতেই সুমাইয়া (রাঃ) ও ইয়াসির (রাঃ)-এর হত্যার বর্ণনা নেই। ঘটনাটি এসেছে সীরাতের বইয়ে: ইবনে হিশামের হাতে আসা ইবনে ইসহাক আর ইবনে সাদের তাবাকাত; আর ইয়াসিরের পরিবারকে বলা কথাগুলোর একটি রূপ হাকিম তাঁর মুস্তাদরাকে এনেছেন। এতে ঘটনাটি নিয়ে সন্দেহ করার কিছু নেই। তবে বর্ণনাটিকে হাদীস বলে চালানোরও কিছু নেই।" },
      { en: "The exchange with Ammar (RA) afterwards is preserved the same way. At-Tabari carries it in his commentary on 16:106: the Prophet ﷺ asked him how he found his heart, he answered that he found it at rest upon faith, and he was told that if they came back to it he should do the same again. The chain stops short of Ammar (RA), and the ruling in the verse does not rest on it.", bn: "এরপর আম্মার (রাঃ)-এর সাথে যে কথা হয়েছিল, তাও একইভাবে রক্ষিত। তাবারি তাঁর তাফসিরে ১৬:১০৬ আয়াতের ব্যাখ্যায় এনেছেন: নবী ﷺ জিজ্ঞেস করলেন, তুমি তোমার দিল কেমন পাচ্ছ; তিনি বললেন, ঈমানের উপর শান্ত পাচ্ছি; নবী ﷺ বললেন, ওরা আবার করলে তুমিও আবার তাই কোরো। সনদটি আম্মার (রাঃ) পর্যন্ত পৌঁছায় না, আর আয়াতের হুকুম এই বর্ণনার উপর দাঁড়িয়েও নেই।" },
    ] },
    { h: { en: "A Mother, a Father, a Son", bn: "মা, বাবা আর ছেলে" }, p: [
      { en: "Sumayyah (RA) was old, poor and outside every clan that might have spoken for her, and the decision she made was not made once. It was put to her again the next day and the day after that. Yasir (RA) had come to Makkah looking for a brother and never acquired a tribe of his own; he is remembered for holding the same line to the same end.", bn: "সুমাইয়া (রাঃ) ছিলেন বয়সী, গরিব, আর এমন কোনো গোত্রের ভেতরে ছিলেন না যারা তাঁর হয়ে কথা বলতে পারত। সিদ্ধান্তটা তিনি একবার নেননি। পরদিনও তাঁর সামনে সেই একই প্রশ্ন রাখা হয়েছিল, তার পরদিনও। ইয়াসির (রাঃ) মক্কায় এসেছিলেন ভাইকে খুঁজতে, নিজের কোনো গোত্র কোনোদিন হয়নি; তাঁকে মনে রাখা হয় একই কথায় শেষ পর্যন্ত অটল থাকার জন্য।" },
      { en: "Ammar (RA) is the one the concession was given for, and his life after Makkah belongs to his own entry. Abu Jahl is named here for what he did rather than with abuse. He picked out the members of a household nobody in the city would avenge, and he picked them from among the people his own clan was supposed to be protecting.", bn: "আম্মার (রাঃ) হলেন সেই মানুষ, যাঁর জন্য ছাড়টা এসেছিল; মক্কার পরের জীবনটা তাঁর নিজের পাতায় আছে। আবু জাহলের নাম এখানে আসছে তার কাজের কারণে, গালি দেওয়ার জন্য নয়। সে বেছে নিয়েছিল এমন এক ঘরের মানুষকে, যাদের হয়ে শহরের কেউ প্রতিশোধ নিত না; আর বেছে নিয়েছিল নিজের গোত্রেরই আশ্রিতদের ভেতর থেকে।" },
    ] },
    { h: { en: "The First Name Recorded", bn: "তালিকার প্রথম নাম" }, p: [
      { en: "The ruling in 16:106 became permanent. A believer forced under real duress to utter words of disbelief, whose heart stays at rest with faith, has not left the religion, and the jurists have worked from that verse ever since. The religion did not ask of Ammar (RA) what his mother had given it. One episode produced both the first martyr and the door of ease.", bn: "১৬:১০৬ আয়াতের হুকুম স্থায়ী হয়ে গেল। সত্যিকারের চাপে পড়ে কেউ যদি কুফরির কথা মুখে বলে ফেলে অথচ তার দিল ঈমানের উপর শান্ত থাকে, সে দ্বীন থেকে বেরিয়ে যায় না; ফকীহগণ এরপর থেকে এই আয়াত ধরেই কাজ করেছেন। আম্মার (রাঃ)-এর কাছে দ্বীন তা চায়নি, যা তাঁর মা দিয়েছিলেন। একই ঘটনা থেকে এল প্রথম শহীদ, আর এল সহজ করার দরজাটাও।" },
      { en: "The other consequence is the order of the names. The first person to die for Islam was a clanless old woman, and the ummah has never since arranged its roll of honour by rank. Within roughly a year of these deaths a group of believers crossed the sea to Abyssinia, and what happened on that open ground is part of what made staying impossible.", bn: "আরেকটা ফল নামের ক্রম। ইসলামের জন্য প্রথম প্রাণ দিলেন গোত্রহীন এক বয়সী নারী, আর এরপর থেকে উম্মাহ নিজের সম্মানের তালিকা আর পদমর্যাদা দিয়ে সাজাতে পারেনি। এই মৃত্যুগুলোর বছরখানেকের মধ্যে একদল ঈমানদার সমুদ্র পেরিয়ে হাবশায় যান, আর ওই খোলা মাঠে যা ঘটেছিল তা মক্কায় থেকে যাওয়াকে অসম্ভব করে তোলার একটা বড় কারণ।" },
    ] },
    { h: { en: "When You Are Made to Speak", bn: "যখন মুখে বলতে বাধ্য করা হয়" }, p: [
      { en: "The concession is worth understanding precisely, because it is easy to widen. It covers a person under genuine compulsion, not a person who finds the truth inconvenient. If a threat to your life or your body forces words out of you, the verse is for you and you have not lost your religion. If you are dodging an awkward conversation at work, it is not speaking about you.", bn: "ছাড়টা ঠিকভাবে বোঝা দরকার, কারণ একে বাড়িয়ে নেওয়া সহজ। এটি তার জন্য যাকে সত্যিই বাধ্য করা হয়েছে, তার জন্য নয় যার কাছে সত্য কথাটা কেবল অস্বস্তিকর। জান বা শরীরের উপর হুমকি দিয়ে যদি আপনার মুখ থেকে কথা বের করা হয়, আয়াতটি আপনার জন্য, আর আপনার দ্বীন যায়নি। আর অফিসে একটা অস্বস্তিকর আলোচনা এড়াতে চাইলে আয়াতটি আপনাকে নিয়ে কথা বলছে না।" },
      { en: "The second thing to carry is a habit of naming. Most Muslims can name a general who won a battle and cannot name the woman whose name opens the register of martyrs. Teach Sumayyah (RA) and Yasir (RA) to your children by name. And notice what her steadfastness actually looked like: not one heroic afternoon, but the same refusal repeated at the same hour, day after day, with no rescue arriving.", bn: "দ্বিতীয় যেটা সাথে নেবেন, তা হলো নাম মনে রাখার অভ্যাস। বেশির ভাগ মুসলিম যুদ্ধজয়ী সেনাপতির নাম বলতে পারেন, অথচ শহীদদের তালিকার প্রথম নামটি যাঁর, সেই নারীর নাম বলতে পারেন না। সন্তানদের সুমাইয়া (রাঃ) ও ইয়াসির (রাঃ)-এর নাম ধরে শেখান। আর খেয়াল করুন তাঁর অবিচলতা আসলে দেখতে কেমন ছিল: কোনো এক বিকেলের বীরত্ব নয়, বরং রোজ একই সময়ে একই অস্বীকার, আর কোনো উদ্ধার আসেনি।" },
    ] },
  ] },
  "hamza_islam": { sections: [
    { h: { en: "An Uncle Who Had Not Chosen", bn: "যে চাচা এখনো পক্ষ নেননি" }, p: [
      { en: "The sirah places this at about 615 CE, several years into a mission that Abu Talib's protection had kept alive. Hamzah ibn Abd al-Muttalib was the Prophet's ﷺ uncle, close to him in age, and his foster-brother as well, since Thuwaybah had nursed them both. He was known in Makkah for strength and for hunting, and he was one of the notable young men of Banu Hashim.", bn: "সীরাত ঘটনাটি রাখে আনুমানিক ৬১৫ খ্রিস্টাব্দে, দাওয়াতের এমন সময়ে যখন আবু তালিবের আশ্রয়ই কাজটাকে টিকিয়ে রেখেছিল। হামজা ইবনে আবদুল মুত্তালিব ছিলেন নবী ﷺ-এর চাচা, বয়সে প্রায় সমান, আর দুধভাইও; সুওয়াইবা দুজনকেই দুধ পান করিয়েছিলেন। মক্কায় তাঁর পরিচয় ছিল গায়ের জোর আর শিকারের জন্য, আর বনু হাশিমের নামকরা তরুণদের একজন হিসেবে।" },
      { en: "For those years he stood outside the matter. He was not among the persecutors and he had not accepted the religion, and the sources leave him there without softening it. Quraysh could not kill a man Abu Talib was covering, so their method against the Prophet ﷺ was public humiliation. In a city where a family's standing was a running public account, an uncle who said nothing was himself saying something.", bn: "এই বছরগুলোতে তিনি ব্যাপারটার বাইরেই ছিলেন। নির্যাতনকারীদের দলে ছিলেন না, আবার দ্বীনও নেননি; সূত্রগুলো তাঁকে সেখানেই রাখে, কোনো রং না চড়িয়ে। আবু তালিবের আশ্রয়ে থাকা মানুষকে কুরাইশ মারতে পারত না, তাই নবী ﷺ-এর বিরুদ্ধে তাদের পথ ছিল প্রকাশ্যে অপমান। যে শহরে পরিবারের মান-সম্মান ছিল সবার সামনে খোলা এক হিসাবের খাতা, সেখানে চুপ করে থাকা চাচাও আসলে একটা কথা বলছিলেন।" },
    ] },
    { h: { en: "Home From the Hunt", bn: "শিকার থেকে ফিরে" }, p: [
      { en: "Ibn Ishaq, through Ibn Hisham, is the source for what followed. Abu Jahl met the Prophet ﷺ near as-Safa, abused him at length and struck his head, and the Prophet ﷺ answered nothing. Abu Jahl then went and sat with the men of Quraysh in their assembly beside the Ka'bah. A freedwoman of Abdullah ibn Jud'an had watched the whole of it from her house.", bn: "এরপর যা ঘটেছিল তার সূত্র ইবনে ইসহাক, ইবনে হিশামের হাত ধরে আসা। আবু জাহল সাফার কাছে নবী ﷺ-এর দেখা পেয়ে অনেকক্ষণ গালমন্দ করল এবং তাঁর মাথায় আঘাত করল; নবী ﷺ কোনো জবাব দেননি। এরপর আবু জাহল গিয়ে কাবার পাশে কুরাইশদের মজলিসে বসল। আবদুল্লাহ ইবনে জুদআনের এক আজাদ করা দাসী নিজের ঘর থেকে পুরো ব্যাপারটা দেখেছিলেন।" },
      { en: "Hamzah came back from hunting with his bow still on him, and it was his habit to circle the Ka'bah before going home. The woman told him what had been done to his nephew. He went into the assembly, struck Abu Jahl with the bow and opened a wound in his head, and said: will you abuse him when I follow his religion and say what he says? Strike me back if you can.", bn: "হামজা শিকার থেকে ফিরছিলেন, ধনুক তখনো কাঁধে; ঘরে ঢোকার আগে কাবা তাওয়াফ করা ছিল তাঁর অভ্যাস। ওই নারী তাঁকে জানালেন, ভাতিজার সাথে কী করা হয়েছে। তিনি সোজা মজলিসে ঢুকে ধনুক দিয়ে আবু জাহলকে এমন আঘাত করলেন যে মাথা কেটে গেল, আর বললেন, তাঁকে গালি দিচ্ছ, অথচ আমি তাঁর দ্বীনেই আছি আর তিনি যা বলেন আমিও তাই বলি? পারলে আমাকে পাল্টা মারো।" },
      { en: "Men of Makhzum rose to answer him and Abu Jahl called them off, saying he had abused Hamzah's nephew shamefully. Ibn Ishaq is candid that this began as clan pride rather than belief, and equally candid that it did not remain there. Hamzah (RA) went home unsettled, asked his Lord to show him whether the thing was true, and afterwards came to the Prophet ﷺ and accepted Islam without conditions.", bn: "মাখজুমের লোকেরা জবাব দিতে উঠে দাঁড়াল, কিন্তু আবু জাহল তাদের থামিয়ে দিল এই বলে যে সে হামজার ভাতিজাকে খারাপভাবে গালি দিয়েছে। ইবনে ইসহাক খোলাখুলি লেখেন, শুরুটা ছিল গোত্রের অহংকার থেকে, ঈমান থেকে নয়; আর একইভাবে খোলাখুলি লেখেন যে ব্যাপারটা সেখানেই থামেনি। হামজা (রাঃ) ঘরে ফিরে অস্থির হয়ে পড়েন, রবের কাছে চান তিনি যেন দেখিয়ে দেন কথাটা সত্যি কি না, আর তারপর নবী ﷺ-এর কাছে এসে শর্তহীনভাবে ইসলাম গ্রহণ করেন।" },
    ] },
    { h: { en: "Dead, Then Given Light", bn: "মৃত ছিল, তারপর আলো" }, p: [
      { en: "6:122 asks whether one who was dead, and whom We gave life and made for him a light by which to walk among the people, is like one in darkness from which he never emerges. Read against that afternoon the verse is exact. Hamzah (RA) had been alive, respected and armed, and by the measure the Quran is using he had not yet begun.", bn: "৬:১২২ আয়াত প্রশ্ন করে, যে মৃত ছিল, আর আমি তাকে জীবন দিলাম এবং তার জন্য এমন আলোর ব্যবস্থা করলাম যা নিয়ে সে মানুষের মাঝে চলে, সে কি অন্ধকারে ডুবে থাকা লোকের মতো, যেখান থেকে সে কখনো বেরোয় না? ওই বিকেলের পাশে রাখলে আয়াতটা একদম মেপে বসে। হামজা (রাঃ) বেঁচে ছিলেন, সম্মানও ছিল, হাতে অস্ত্রও ছিল; অথচ কুরআন যে মাপে মাপছে, সে হিসাবে তাঁর শুরুই হয়নি তখনো।" },
      { en: "6:125 says that whoever Allah wants to guide, He expands his breast to Islam. The supplication Ibn Ishaq reports from that night asks for that and for nothing else. Looking back from Madinah, 8:26 tells the believers to remember when they were few and oppressed in the land, fearing that people might snatch them away, and He sheltered them and supported them.", bn: "৬:১২৫ আয়াত বলে, আল্লাহ যাকে হিদায়াত দিতে চান, তার বুক ইসলামের জন্য খুলে দেন। ওই রাতের যে দোয়া ইবনে ইসহাক এনেছেন, তাতে ঠিক এটুকুই চাওয়া হয়েছে, আর কিছু নয়। মদিনা থেকে পেছন ফিরে তাকিয়ে ৮:২৬ আয়াত ঈমানদারদের মনে করিয়ে দেয় সেই সময়ের কথা, যখন তারা সংখ্যায় কম ছিল, দুর্বল গণ্য হতো, ভয় পেত যে মানুষ তাদের ছোঁ মেরে নিয়ে যাবে; তখন তিনি তাদের আশ্রয় দিলেন আর শক্তি জোগালেন।" },
    ] },
    { h: { en: "What Bukhari Keeps of Abu Jahl", bn: "আবু জাহল প্রসঙ্গে বুখারী যা রাখেন" }, p: [
      { en: "The Sahihs do not carry the episode of the bow; it is Ibn Ishaq's. What they do keep of Abu Jahl's conduct at the sanctuary is Sahih al-Bukhari 240, from Abdullah ibn Mas'ud (RA). While the Prophet ﷺ was prostrating near the Ka'bah, Abu Jahl asked which of them would fetch the entrails of a slaughtered camel and put them on his back, and one of them did it.", bn: "ধনুকের ঘটনাটি সহীহ বুখারী বা সহীহ মুসলিমে নেই, এটি ইবনে ইসহাকের বর্ণনা। কাবার চত্বরে আবু জাহলের আচরণ নিয়ে সহীহ যা রাখে, তা সহীহ বুখারী ২৪০, আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে। নবী ﷺ কাবার কাছে সিজদায় থাকা অবস্থায় আবু জাহল বলল, তোমাদের কে জবাই করা উটের নাড়িভুঁড়ি এনে তাঁর পিঠে রাখবে; তাদেরই একজন কাজটা করল।" },
      { en: "In the same narration the Prophet's ﷺ daughter Fatimah (RA) came and pulled it off him, and the Prophet ﷺ then supplicated against the men who had done it, naming them one by one. Ibn Mas'ud (RA) says that he later saw them killed on the day of Badr. That is the kind of thing an uncle standing aside would have been hearing about his nephew in his own city.", bn: "একই বর্ণনায় আছে, নবী ﷺ-এর মেয়ে ফাতিমা (রাঃ) এসে জিনিসটা টেনে সরিয়ে দেন, আর নবী ﷺ তখন যারা কাজটা করেছিল তাদের একজন একজন করে নাম নিয়ে বদদোয়া করেন। ইবনে মাসউদ (রাঃ) বলেন, পরে বদরের দিনে তিনি তাদের নিহত হতে দেখেছেন। এক পাশে দাঁড়িয়ে থাকা চাচা নিজের শহরে নিজের ভাতিজাকে নিয়ে এ ধরনের কথাই শুনতেন।" },
    ] },
    { h: { en: "The Woman Who Told Him", bn: "যে নারী তাঁকে খবরটা দিলেন" }, p: [
      { en: "The freedwoman of Abdullah ibn Jud'an is not named in the report. She had no clan, no property and nothing to gain, and the largest conversion of that year happened because she told a man what she had watched from her doorway. The turning points of this history are not all held by the famous names inside it.", bn: "আবদুল্লাহ ইবনে জুদআনের সেই আজাদ করা দাসীর নাম বর্ণনায় নেই। তাঁর গোত্র ছিল না, সম্পত্তি ছিল না, পাওয়ারও কিছু ছিল না; অথচ ওই বছরের সবচেয়ে বড় ইসলাম গ্রহণটা ঘটল কেবল এজন্য যে তিনি নিজের দরজা থেকে যা দেখেছেন তা একজনকে বলে দিয়েছিলেন। এই ইতিহাসের মোড়গুলো সবসময় বিখ্যাত নামগুলোর হাতে থাকে না।" },
      { en: "Hamzah (RA) is shown here as a man whose loyalty ran ahead of his belief and who then let the belief catch up with it. Abu Jahl is described by what he did. He abused a man who would not answer him, and when a man who would answer arrived, he called his own clansmen off and swallowed the insult in front of everybody.", bn: "হামজা (রাঃ)-কে এখানে দেখা যায় এমন একজন হিসেবে, যাঁর আনুগত্য ঈমানের আগে ছুটেছিল, আর যিনি পরে ঈমানকে সেটা ধরে ফেলতে দিয়েছিলেন। আবু জাহলের পরিচয় এখানে তার কাজেই। যে জবাব দেবে না তাকে সে গালি দিয়েছে; আর যে জবাব দেবে সে এসে দাঁড়াতেই নিজের গোত্রের লোকদের থামিয়ে দিয়ে সবার সামনে অপমানটা হজম করেছে।" },
    ] },
    { h: { en: "Cover for the Weak", bn: "দুর্বলদের জন্য আড়াল" }, p: [
      { en: "Quraysh now had to reckon with the strongest man of Banu Hashim standing publicly with his nephew. Ibn Ishaq says they drew back somewhat, understanding that the Prophet ﷺ now had a protector who would fight. The method shifted for a while toward offers, the delegations that came to Abu Talib and to the Prophet ﷺ with wealth and rank, rather than only blows.", bn: "কুরাইশকে এখন হিসাব করতে হলো বনু হাশিমের সবচেয়ে শক্তিশালী লোকটি প্রকাশ্যে ভাতিজার পাশে দাঁড়িয়েছেন। ইবনে ইসহাক বলেন, তারা কিছুটা পিছিয়ে আসে, কারণ তারা বুঝে যায় নবী ﷺ-এর পাশে এখন এমন একজন আছেন যিনি লড়বেন। কিছুদিনের জন্য তাদের পথ বদলে যায় প্রস্তাবের দিকে; আবু তালিবের কাছে আর নবী ﷺ-এর কাছে সম্পদ ও পদের প্রস্তাব নিয়ে প্রতিনিধিরা আসতে থাকে, কেবল মারধরটাই আর রইল না।" },
      { en: "Umar's (RA) Islam followed within about a year, and with the two of them in it the believers prayed at the Ka'bah. Hamzah (RA) carried one of the first banners the Prophet ﷺ tied in Madinah, fought at Badr and was killed at Uhud, where he is remembered as the chief of the martyrs. Those days have their own entries here.", bn: "বছরখানেকের মধ্যেই উমর (রাঃ) ইসলাম নেন, আর এই দুজন দলে আসার পর ঈমানদাররা কাবার সামনে সালাত পড়েন। মদিনায় নবী ﷺ প্রথম যেসব পতাকা বেঁধে দিয়েছিলেন, তার একটি ছিল হামজা (রাঃ)-এর হাতে; তিনি বদরে লড়েন এবং উহুদে শহীদ হন, যেখানে তাঁকে মনে রাখা হয় শহীদদের সরদার হিসেবে। সেসব দিনের জন্য এই সময়রেখায় আলাদা পাতা আছে।" },
    ] },
    { h: { en: "When Anger Opens a Door", bn: "রাগ যখন দরজা খুলে দেয়" }, p: [
      { en: "The door he came through was anger at an injustice done to somebody else, and the sirah does not apologise for that. But he did not leave it as anger. He went home, sat with the question of whether the thing was actually true, asked to be shown, and then submitted. Defending someone is not yet believing; it can become believing if you refuse to stop at the defence.", bn: "যে দরজা দিয়ে তিনি ঢুকেছিলেন তা ছিল অন্যের উপর অন্যায় দেখে জেগে ওঠা রাগ, আর সীরাত এর জন্য কোনো অজুহাত দেয় না। তবে তিনি ব্যাপারটাকে রাগেই ফেলে রাখেননি। ঘরে ফিরে প্রশ্নটা নিয়ে বসেছেন, কথাটা আসলেই সত্যি কি না, চেয়েছেন যেন তাঁকে দেখিয়ে দেওয়া হয়, তারপর মাথা নুইয়েছেন। কারো পাশে দাঁড়ানো এখনো ঈমান নয়; কিন্তু পাশে দাঁড়ানোতেই থেমে না গেলে তা ঈমান হয়ে উঠতে পারে।" },
      { en: "The other half is what he actually did. He stood beside a man being humiliated, in the room where the humiliation was happening, in front of the people whose opinion he cared about. Most of us can manage the smaller version of that, which is to say the sentence at the time rather than in private afterwards. It cost him his standing with Quraysh in a single afternoon.", bn: "আরেক দিকটা হলো তিনি আসলে কাজটা কী করেছিলেন। যাকে অপমান করা হচ্ছিল তাঁর পাশে গিয়ে দাঁড়িয়েছেন, ঠিক যে ঘরে অপমানটা হচ্ছিল সেখানেই, আর যাদের মতামত তাঁর কাছে দাম রাখত তাদেরই সামনে। এর ছোট রূপটা আমাদের বেশির ভাগের পক্ষেই সম্ভব: কথাটা তখনই বলা, পরে আড়ালে নয়। এক বিকেলেই কুরাইশের কাছে তাঁর মান-মর্যাদা শেষ হয়ে গিয়েছিল।" },
    ] },
  ] },
  "umar_islam": { sections: [
    { h: { en: "The Sword and the Errand", bn: "তলোয়ার আর যে কাজে বেরোনো" }, p: [
      { en: "The sirah puts this at about 616 CE, in the sixth year of the prophethood. A group of believers had already crossed to Abyssinia, turning a local quarrel into something Quraysh had to explain abroad. Umar ibn al-Khattab belonged to Banu Adi, the clan that carried Quraysh's embassies, and Ibn Sa'd puts his age then at about twenty-six.", bn: "সীরাত ঘটনাটি রাখে আনুমানিক ৬১৬ খ্রিস্টাব্দে, নবুয়তের ষষ্ঠ বছরে। ততদিনে একদল ঈমানদার সমুদ্র পেরিয়ে হাবশায় পৌঁছে গেছেন, ফলে শহরের ভেতরের ঝগড়াটা এমন এক ব্যাপার হয়ে উঠেছে যার জবাব কুরাইশকে বাইরেও দিতে হচ্ছে। উমর ইবনে আল-খাত্তাব ছিলেন বনু আদির লোক, যে গোত্র অন্য গোত্রের কাছে কুরাইশের দূত বয়ে নিত। ইবনে সাদ তখন তাঁর বয়স লেখেন ছাব্বিশের কাছাকাছি।" },
      { en: "He could write in a city where few could, he was physically formidable, and he was among the fiercest opponents of the believers. He struck those within his reach, and his own words in later years returned to that period with grief, not pride. One day he put on his sword and went out meaning to end the whole matter by killing the man himself.", bn: "যে শহরে লেখাপড়া জানা লোক ছিল হাতেগোনা, সেখানে তিনি লিখতে পারতেন; গায়ের জোরও ছিল ভয় পাওয়ার মতো; আর ঈমানদারদের বিরুদ্ধে যারা সবচেয়ে কড়া ছিল তিনি তাদেরই একজন। নাগালের ভেতরে যাকে পেতেন তার গায়ে হাত তুলতেন। পরের বছরগুলোতে নিজের কথাতেই তিনি ওই সময়টায় ফিরে গেছেন, গর্ব নিয়ে নয়, দুঃখ নিয়ে। একদিন তলোয়ার বেঁধে বেরোলেন, ঠিক করে যে লোকটিকে নিজ হাতে মেরে গোটা ব্যাপারটার শেষ করে দেবেন।" },
    ] },
    { h: { en: "A Detour to His Sister", bn: "বোনের বাড়িতে এক ঘোরাপথ" }, p: [
      { en: "What follows is Ibn Ishaq's account through Ibn Hisham, and it is sirah rather than hadith. On the way he met Nu'aym ibn Abdullah of his own clan, who asked where he was going and, hearing the answer, told him to look first to his own household: his sister Fatimah bint al-Khattab and her husband Sa'id ibn Zayd had accepted Islam.", bn: "এরপরের বিবরণটি ইবনে ইসহাকের, ইবনে হিশামের হাত ধরে আসা, আর এটি সীরাতের বর্ণনা, হাদীস নয়। পথে তাঁর দেখা হলো নিজের গোত্রের নুআইম ইবনে আবদুল্লাহর সাথে, যিনি জিজ্ঞেস করলেন কোথায় যাচ্ছেন। জবাব শুনে তিনি বললেন, আগে নিজের ঘরের দিকে তাকান; আপনার বোন ফাতিমা বিনতে আল-খাত্তাব আর তাঁর স্বামী সাঈদ ইবনে যায়েদ ইসলাম নিয়েছেন।" },
      { en: "He turned for their house. Khabbab ibn al-Aratt (RA) was inside teaching them from a written sheet, and hid when Umar was heard at the door. Umar struck Sa'id (RA), and struck his sister when she came between them, and drew blood. She told him to do what he liked, they had become Muslims. He asked for the sheet, and she made him wash before he touched it.", bn: "তিনি বোনের বাড়ির দিকে ঘুরলেন। ভেতরে খাব্বাব ইবনে আল-আরাত (রাঃ) লেখা এক পাতা থেকে তাঁদের পড়াচ্ছিলেন, আর দরজায় উমরের সাড়া পেয়ে লুকিয়ে পড়লেন। উমর সাঈদ (রাঃ)-এর গায়ে হাত তুললেন, আর মাঝখানে এসে পড়ায় বোনের গায়েও; রক্ত বেরিয়ে গেল। বোন বললেন, যা খুশি করুন, আমরা মুসলিম হয়ে গেছি। তিনি পাতাটা চাইলেন, আর বোন তাঁকে ছোঁয়ার আগে গোসল করিয়ে নিলেন।" },
    ] },
    { h: { en: "The Page in His Hands", bn: "হাতে ধরা সেই পাতা" }, p: [
      { en: "He washed and read what was on it, and the sirah has him saying how fine and noble this speech is. The sheet held the opening of Surah Ta-Ha. 20:2 tells the Prophet ﷺ that the Quran was not sent down upon him to cause him distress, and 20:3 that it came as a reminder for the one who fears his Lord.", bn: "গোসল সেরে তিনি পাতাটা পড়লেন, আর সীরাতে আছে তিনি বললেন, এ কথা কী সুন্দর, কী সম্মানের। পাতাটিতে ছিল সূরা তা-হার শুরুর অংশ। ২০:২ আয়াত নবী ﷺ-কে বলছে, তোমাকে কষ্ট দেওয়ার জন্য কুরআন নাযিল করা হয়নি; আর ২০:৩ আয়াত বলছে, এ এসেছে সতর্কবাণী হয়ে, যে তার রবকে ভয় করে তার জন্য।" },
      { en: "The verse the reports have stopping him is 20:14: indeed, I am Allah, there is no deity except Me, so worship Me and establish prayer for My remembrance. It states the claim and hands over the duty in one breath. 39:23, thematically rather than about this morning, describes skins that shiver at the recitation and hearts that soften at the remembrance of Allah.", bn: "বর্ণনায় যে আয়াতটিতে তিনি থেমে যান, সেটি ২০:১৪। প্রকৃতই আমি আল্লাহ, আমি ছাড়া সত্যিকারের কোনো ইলাহ নেই; কাজেই আমার ইবাদত করো, আর আমাকে স্মরণ করতে সালাত কায়েম করো। এক নিঃশ্বাসেই দাবিটাও বলা হলো, দায়িত্বটাও হাতে দেওয়া হলো। ৩৯:২৩ আয়াত এই সকালের কথা বলছে না, বিষয়টার কথা বলছে: তিলাওয়াতে গা শিউরে ওঠে, তারপর আল্লাহর স্মরণে দেহ-মন নরম হয়ে আসে।" },
    ] },
    { h: { en: "Where the Reports Come From", bn: "বর্ণনাগুলো কোথা থেকে আসে" }, p: [
      { en: "The Ta-Ha account is Ibn Ishaq's, stands in neither Sahih, and should be read as what it is. Ibn Ishaq also preserves a second and quite different account, given in Umar's own words, in which he went out at night, found the Prophet ﷺ praying at the Ka'bah and reciting Surah al-Haqqah, and stood listening until the Quran had done its work.", bn: "তা-হার বিবরণটি ইবনে ইসহাকের, আর তা সহীহ বুখারী বা সহীহ মুসলিম কোনোটিতেই নেই; একে যা, তাই বলেই পড়া উচিত। ইবনে ইসহাক আরেকটি বিবরণও রেখে গেছেন, একেবারে অন্যরকম, উমরের নিজের মুখের কথায়। তাতে তিনি রাতে বেরিয়ে দেখেন নবী ﷺ কাবার কাছে সালাতে দাঁড়িয়ে সূরা আল-হাক্কা পড়ছেন, আর তিনি দাঁড়িয়ে শুনতে থাকেন যতক্ষণ না কুরআন নিজের কাজ সেরে ফেলে।" },
      { en: "The collections keep the consequence rather than the scene. Sahih al-Bukhari has Abdullah ibn Mas'ud (RA) say that the Muslims could not pray at the Ka'bah until Umar accepted Islam. At-Tirmidhi 3681 records the supplication that Allah strengthen Islam with the dearer to Him of two men, Abu Jahl or Umar ibn al-Khattab, and grades it hasan sahih gharib.", bn: "হাদীসের কিতাবগুলো দৃশ্যটা নয়, ফলটাই ধরে রাখে। সহীহ বুখারীতে আবদুল্লাহ ইবনে মাসউদ (রাঃ) বলেন, উমর ইসলাম না নেওয়া পর্যন্ত মুসলিমরা কাবার কাছে সালাত পড়তে পারতেন না। তিরমিযি ৩৬৮১-এ এসেছে সেই দোয়া, হে আল্লাহ, আবু জাহল ও উমর ইবনে আল-খাত্তাব, এই দুজনের মধ্যে যিনি আপনার কাছে বেশি প্রিয় তাঁকে দিয়ে ইসলামকে শক্তি দিন; তিরমিযি একে হাসান সহীহ গরীব বলেছেন।" },
    ] },
    { h: { en: "A Sister and a Teacher", bn: "এক বোন আর এক শিক্ষক" }, p: [
      { en: "Fatimah bint al-Khattab (RA) is the person the account turns on. She was struck and bleeding in her own house and did not soften a word of what she had said, and it was her refusal rather than any argument that stopped her brother. Her husband Sa'id ibn Zayd (RA), whose father had rejected the idols before the revelation came, had accepted the religion with her.", bn: "গোটা ঘটনাটা ঘোরে ফাতিমা বিনতে আল-খাত্তাব (রাঃ)-কে ধরে। নিজের ঘরেই মার খেয়ে রক্ত ঝরছে, তবু নিজের বলা কথার একটা শব্দও তিনি নরম করেননি; আর ভাইকে থামিয়েছে কোনো যুক্তি নয়, তাঁর ওই অস্বীকারটাই। তাঁর স্বামী সাঈদ ইবনে যায়েদ (রাঃ) তাঁর সাথেই দ্বীন নিয়েছিলেন; সাঈদের বাবা ওহী নাযিল হওয়ার আগেই মূর্তিপূজা ছেড়ে দিয়েছিলেন।" },
      { en: "Khabbab (RA) was the teacher who kept coming back to that house, knowing whose sister lived in it. Nu'aym ibn Abdullah (RA) told an angry armed man the truth on a morning when a lie would have been safer. None of the three did anything spectacular. Between them they got the Quran into the room and let it work.", bn: "খাব্বাব (রাঃ) ছিলেন সেই শিক্ষক, যিনি বারবার ওই বাড়িতে আসতেন, খুব ভালো করেই জেনে যে ঘরের মানুষটি কার বোন। নুআইম ইবনে আবদুল্লাহ (রাঃ) এমন এক সকালে রেগে থাকা সশস্ত্র লোকটিকে সত্যি কথাটা বলেছিলেন, যেদিন মিথ্যা বলাই ঢের নিরাপদ ছিল। তিনজনের কেউই চমকে দেওয়ার মতো কিছু করেননি। তাঁরা মিলে কেবল কুরআনটাকে ঘরের ভেতরে পৌঁছে দিয়েছিলেন, বাকি কাজটা কুরআনই করেছে।" },
    ] },
    { h: { en: "Prayer at the Ka'bah", bn: "কাবার সামনে সালাত" }, p: [
      { en: "Ibn Ishaq counts Umar (RA) the fortieth to accept, which is his count rather than a settled fact. What is not in doubt is what changed. He asked whether they were not upon the truth, and being told they were, asked why they were hiding; a report Ibn Ishaq carries has the believers going out to the sanctuary in two ranks, one behind Hamzah (RA) and one behind him.", bn: "ইবনে ইসহাক উমর (রাঃ)-কে চল্লিশতম মুসলিম হিসেবে গোনেন, আর এটি তাঁর গোনা, পাকা কোনো তথ্য নয়। যা নিয়ে সন্দেহ নেই তা হলো কী বদলে গেল। তিনি জিজ্ঞেস করলেন, আমরা কি সত্যের উপর নই; জবাবে হ্যাঁ শুনে বললেন, তাহলে লুকিয়ে আছি কেন। ইবনে ইসহাকের এক বর্ণনায় আছে, ঈমানদাররা দুই সারিতে হারামের দিকে বেরিয়ে যান, এক সারির সামনে হামজা (রাঃ), অন্য সারির সামনে তিনি।" },
      { en: "The gatherings in al-Arqam's house ended and the prayer moved into the open. The title al-Faruq attached to him early, though the reports differ on where it came from. Quraysh, no longer able to reach the believers one at a time, moved within about a year to an instrument that could reach a whole clan, the boycott.", bn: "আরকামের ঘরের মজলিস শেষ হয়ে গেল, আর সালাত চলে এল খোলা জায়গায়। আল-ফারুক উপাধিটি তাঁর সাথে জুড়ে যায় শুরুর দিকেই, যদিও উপাধিটি কোথা থেকে এসেছে তা নিয়ে বর্ণনাগুলো একমত নয়। ঈমানদারদের একজন একজন করে নাগালে পাওয়ার পথ বন্ধ হয়ে যাওয়ায় কুরাইশ বছরখানেকের মধ্যে এমন হাতিয়ারে যায় যা গোটা গোত্রকে ধরতে পারে, অর্থাৎ বয়কটে।" },
    ] },
    { h: { en: "What Turns a Hard Man", bn: "কঠিন মানুষ যেভাবে ঘোরে" }, p: [
      { en: "The lesson usually drawn is that anybody can change, which is true and too easy. What actually changed him was a text he had spent years refusing to read, put in front of him by relatives who would not pretend. Nobody argued him into it. They kept doing the thing he hated, and he met the words himself.", bn: "সাধারণত শেখানো হয়, যে কেউ বদলাতে পারে; কথাটা সত্যি, তবে বড্ড সহজ। তাঁকে আসলে বদলে দিয়েছিল এমন এক কিতাব, যা তিনি বছরের পর বছর পড়তে অস্বীকার করে এসেছেন, আর যা তাঁর সামনে খুলে ধরেছিলেন এমন আত্মীয়রা, যাঁরা ভান করতে রাজি হননি। কেউ তর্ক করে তাঁকে জেতায়নি। তাঁরা কেবল যে কাজটা তিনি ঘৃণা করতেন সেটাই করে গেছেন, আর কথাগুলোর সামনে তিনি নিজেই এসে দাঁড়িয়েছেন।" },
      { en: "So there are two jobs here and they belong to different people. If you are the one on the outside, read the thing you have already decided about without reading it. If you are the family, keep the practice steady and honest in a house where somebody despises it, and do not soften what you believe to keep the peace.", bn: "এখানে কাজ দুটো, আর দুটো দুই মানুষের। আপনি যদি বাইরের দিকের মানুষ হন, তবে যে জিনিসটা না পড়েই রায় দিয়ে রেখেছেন সেটা একবার পড়ুন। আর আপনি যদি ঘরের মানুষ হন, তাহলে যে বাড়িতে কেউ এই আমল দেখতে পারে না সেখানেও আমলটা সোজা আর সৎভাবে চালিয়ে যান; শান্তি রাখার জন্য নিজের বিশ্বাসের কথাটা হালকা করে বলবেন না।" },
    ] },
    { h: { en: "Questions to Carry", bn: "সাথে নেওয়ার প্রশ্ন" }, p: [
      { en: "Which of your settled opinions have you never examined, and who is waiting for you to look at it properly? When someone in your own family disagrees with your religion, do you argue with them, or do you simply let them see you praying? Which of the two has ever changed anybody you know? And what would it cost you to try the other one this month?", bn: "আপনার কোন পাকাপোক্ত মতটা আপনি আসলে কখনো যাচাই করে দেখেননি, আর কে অপেক্ষা করে আছে আপনি একবার ভালো করে তাকাবেন বলে? ঘরের কেউ যখন আপনার দ্বীনের সাথে দ্বিমত করে, আপনি কি তার সাথে তর্কে যান, নাকি কেবল তাকে আপনার সালাতটা দেখতে দেন? এই দুইয়ের কোনটা আপনার চেনা কাউকে সত্যিই বদলাতে দেখেছেন? আর এ মাসে অন্যটা একবার চেষ্টা করে দেখলে আপনার কী খরচ হতো?" },
      { en: "Umar (RA) walked into a house he had been hunting and asked to be taken to the man he had set out to kill. What would you have to admit was wrong before you could do something of that shape? And is there someone you have written off as beyond reach, whom the Prophet ﷺ would have named in a du'a instead?", bn: "উমর (রাঃ) সেই ঘরে গিয়ে ঢুকলেন যেটি তিনি খুঁজে বেড়াচ্ছিলেন, আর চাইলেন যেন তাঁকে সেই মানুষটির কাছে নিয়ে যাওয়া হয় যাঁকে মারতে তিনি বেরিয়েছিলেন। এমন কিছু করতে হলে আপনাকে আগে কোন ভুলটা স্বীকার করতে হবে? আর এমন কেউ কি আছেন যাঁকে আপনি মনে মনে বাতিল করে দিয়েছেন, অথচ নবী ﷺ যাঁর নাম ধরে দোয়া করতেন?" },
    ] },
  ] },
  "quba": {
    sections: [
      {
        h: { en: "A Few Days Among Banu Amr", bn: "বনু আমরের মাঝে কয়েক দিন" },
        p: [
          {
            en: "Quba stood on the southern approach to Yathrib, a settlement of Banu Amr ibn Awf of the Aws, with its own wells, palm groves and mud-brick strongholds. The Prophet ﷺ and Abu Bakr (RA) reached it after the flight from Makkah, in Rabi' al-Awwal of the year the Muslims would afterwards count as the first of the Hijra, September 622 CE. Ibn Ishaq places the arrival on a Monday.",
            bn: "ইয়াসরিবে ঢোকার দক্ষিণ মুখে পড়ত কুবা। আউস গোত্রের শাখা বনু আমর ইবনে আওফের বসতি, নিজস্ব কূপ, খেজুরবাগান আর কাঁচা ইটের ছোট ছোট গড়। মক্কা থেকে বেরিয়ে নবী ﷺ ও আবু বকর (রাঃ) এখানেই এসে থামেন। সময়টা রবিউল আউয়াল, ৬২২ খ্রিস্টাব্দের সেপ্টেম্বর; মুসলিমরা পরে এই বছরকেই হিজরি সনের প্রথম বছর ধরবেন। ইবনে ইসহাক পৌঁছানোর দিনটিকে সোমবার বলেন।"
          },
          {
            en: "Sahih al-Bukhari keeps the scene of the waiting. The Muslims of Madinah went out each morning to the black stony ground beyond the houses and stood until the noon heat sent them home. A man of the Jewish quarter, up on a fort for his own errand, saw riders in white and shouted that the good fortune they had waited for had come. Nobody could tell the Prophet ﷺ from Abu Bakr (RA) until the shade left him and Abu Bakr rose with his cloak.",
            bn: "অপেক্ষার দৃশ্যটা ধরা আছে সহিহ বুখারিতে। মদিনার মুসলিমরা খবর পেয়েছিলেন তিনি পথে আছেন, তাই প্রতিদিন সকালে বসতির বাইরে কালো পাথুরে জমিতে গিয়ে দাঁড়াতেন, দুপুরের রোদ না তাড়ানো পর্যন্ত। ইহুদি পাড়ার এক লোক নিজের কাজে গড়ের উপরে উঠে সাদা কাপড়ে কয়েকজন আরোহীকে দেখে চেঁচিয়ে ওঠেন, যাঁর জন্য অপেক্ষা তিনি এসে গেছেন। কে নবী ﷺ আর কে আবু বকর (রাঃ), কেউ বুঝতে পারেননি; ছায়া সরে গেলে আবু বকর (রাঃ) উঠে চাদর তুলে ধরলে তবেই বোঝা গেল।"
          }
        ]
      },
      {
        h: { en: "A Foundation Laid by Hand", bn: "নিজ হাতে রাখা ভিত" },
        p: [
          {
            en: "He lodged with Kulthum ibn al-Hidm (RA). Ibn Ishaq records that others named Sa'd ibn Khaythamah (RA) as the host, and settles it by putting the lodging in one house and the sitting with people in the other. Sa'd was unmarried, so migrants with no family here stayed with him, and his house was called the house of the bachelors.",
            bn: "তিনি উঠেছিলেন কুলসুম ইবনুল হিদম (রাঃ)-এর ঘরে। ইবনে ইসহাক জানান, কেউ কেউ সাদ ইবনে খায়সামা (রাঃ)-কে মেজবান বলেছেন; দুই বর্ণনা তিনি মিলিয়ে দেন এভাবে, থাকতেন এক ঘরে আর মানুষের সঙ্গে বসতেন অন্য ঘরে। সাদ (রাঃ) ছিলেন অবিবাহিত, তাই পরিবার ছাড়া যেসব মুহাজির এসেছিলেন তাঁরা তাঁর কাছেই উঠতেন, আর ঘরটির নাম হয়ে যায় অবিবাহিতদের ঘর।"
          },
          {
            en: "How long he remained is not agreed. The narration in al-Bukhari gives some ten nights; Ibn Ishaq has him arrive on the Monday and leave on the Friday. In those days he marked out a mosque and built it, handling the stones himself. It was an enclosure more than a building: low walls, palm trunks, branches overhead, bare ground for a floor. This is the first mosque Islam raised.",
            bn: "কত দিন তিনি সেখানে ছিলেন, তা নিয়ে বর্ণনা এক নয়। বুখারির বর্ণনায় দশ রাতের মতো, আর ইবনে ইসহাকের হিসাবে সোমবারে পৌঁছে শুক্রবারে রওনা। এই দিনগুলোতেই তিনি মসজিদের সীমানা কেটে নিজ হাতে পাথর বসিয়ে তা গড়ে তোলেন। ইমারত বলতে যা বোঝায় তা নয়, বরং ঘেরা একটা জায়গা: নিচু দেয়াল, খুঁটির বদলে খেজুরগাছের গুঁড়ি, উপরে ডালপালা, নিচে মাটিই মেঝে। ইসলামের প্রথম মসজিদ এটিই।"
          },
          {
            en: "Prayer had already been organised at Quba before he came. Sahih al-Bukhari records that Salim, the freedman of Abu Hudhayfah (RA), led the first migrants there because he carried more of the Quran than the rest, and that Abu Bakr and Umar (RA) prayed behind him. A man once owned by another led the noblest converts of Quraysh, and the narration reports no objection from anyone.",
            bn: "তিনি আসার আগেই কুবায় জামাত দাঁড়িয়ে গিয়েছিল। সহিহ বুখারিতে আছে, আবু হুযায়ফা (রাঃ)-এর আজাদ করা গোলাম সালিম (রাঃ) সেখানে প্রথম মুহাজিরদের ইমামতি করতেন, কারণ কুরআন তাঁরই বেশি মুখস্থ ছিল; আবু বকর ও উমর (রাঃ) দাঁড়াতেন তাঁর পেছনে। এক সময়ের ক্রীতদাস দাঁড়ালেন কুরাইশের সবচেয়ে সম্ভ্রান্ত মুসলিমদের সামনে, আর কারও আপত্তির কথা বর্ণনায় নেই।"
          }
        ]
      },
      {
        h: { en: "A Verse From the Ninth Year", bn: "নবম হিজরির আয়াত" },
        p: [
          {
            en: "9:108 is the verse this mosque is remembered by, and it came down long afterwards, in the ninth year, when a rival building near Quba was raised to divide the Muslims. 9:107 describes that structure and its builders swearing they meant only good. Against it, 9:108 forbids the Prophet ﷺ ever to stand there and calls a mosque founded on righteousness from the first day worthier of him, praising the men in it who love to purify themselves.",
            bn: "এই মসজিদকে মানুষ চেনে ৯:১০৮ আয়াত দিয়ে, অথচ আয়াতটি নেমেছে অনেক পরে, নবম হিজরিতে। তখন কুবার কাছেই আরেকটি ঘর তোলা হয়েছিল মুসলিমদের মধ্যে ফাটল ধরানোর জন্য। ৯:১০৭ আয়াতে আছে সেই ঘর আর তার নির্মাতাদের কসম, তারা বলেছিল ভালো ছাড়া কিছুই চায়নি। এর বিপরীতে ৯:১০৮ আয়াত নবী ﷺ-কে বলে সেখানে কখনো না দাঁড়াতে, প্রথম দিন থেকে তাকওয়ার ভিতে গড়া মসজিদকেই তাঁর জন্য বেশি উপযুক্ত বলে, আর প্রশংসা করে সেখানকার সেই মানুষদের, যাঁরা পবিত্র থাকতে ভালোবাসেন।"
          },
          {
            en: "Which mosque that describes is an old question. Al-Bukhari's account of the migration calls the one at Quba the mosque founded on taqwa, while Sahih Muslim carries Abu Sa'id al-Khudri's (RA) report that two men argued over it and the Prophet ﷺ answered that it was this mosque of his in Madinah. Ibn Kathir transmits both and observes that the description fits each. 9:109 then makes it a question about foundations, and 24:36 names houses Allah ordered raised.",
            bn: "কোন মসজিদের কথা বলা হচ্ছে, প্রশ্নটি পুরনো। বুখারির হিজরতের বর্ণনাতেই কুবার মসজিদকে তাকওয়ার ভিতে গড়া মসজিদ বলা হয়েছে। আবার সহিহ মুসলিমে আবু সাঈদ খুদরি (রাঃ) জানান, দুজন এ নিয়ে তর্ক করলে নবী ﷺ বলেছিলেন, তা তাঁর এই মসজিদই, অর্থাৎ মদিনার মসজিদ। ইবনে কাসীর দুই পক্ষের বর্ণনাই এনে বলেন, কথাটি দুটোর সঙ্গেই খাটে। এরপর ৯:১০৯ আয়াত পুরো ব্যাপারটাকে ভিতের প্রশ্নে বদলে দেয়, আর ২৪:৩৬ আয়াত এমন ঘরগুলোকেই বলে, যেগুলো উঁচু রাখতে আল্লাহ নির্দেশ দিয়েছেন।"
          }
        ]
      },
      {
        h: { en: "Saturdays on the Quba Road", bn: "শনিবারে কুবার পথ" },
        p: [
          {
            en: "Sahih al-Bukhari records from Abdullah ibn Umar (RA) that the Prophet ﷺ used to come to the mosque of Quba every Saturday, walking and riding, and pray two rak'ahs there; Ibn Umar (RA) kept the practice up after him. He visited it weekly for the rest of his life, although a larger mosque stood at his own door.",
            bn: "সহিহ বুখারিতে আব্দুল্লাহ ইবনে উমর (রাঃ) থেকে আছে, নবী ﷺ প্রতি শনিবার কুবার মসজিদে যেতেন, কখনো হেঁটে কখনো সওয়ারিতে, আর সেখানে দুই রাকাত পড়তেন; ইবনে উমর (রাঃ) নিজেও পরে এ অভ্যাস ধরে রাখেন। কয়েক দিনে গড়া সেই মসজিদে তিনি সারা জীবন সপ্তাহে একবার যেতেন, যদিও মদিনায় তাঁর ঘরের পাশেই আরও বড় মসজিদ ছিল।"
          },
          {
            en: "The reward attached to the place comes through Sahl ibn Hunayf (RA): whoever purifies himself in his house, then comes to the mosque of Quba and prays a prayer in it, has a reward like that of an Umrah. That wording sits in Sunan Ibn Majah, Jami' at-Tirmidhi and Sunan an-Nasa'i, not the two Sahihs, and it says a prayer, without fixing a number of units.",
            bn: "জায়গাটির সঙ্গে জড়িত সওয়াবের কথা এসেছে সাহল ইবনে হুনাইফ (রাঃ)-এর সূত্রে: যে নিজ ঘরে পবিত্রতা অর্জন করে কুবার মসজিদে এসে সালাত আদায় করে, সে উমরার সমান সওয়াব পায়। এই শব্দে হাদিসটি আছে সুনানে ইবনে মাজাহ, জামে তিরমিজি ও সুনানে নাসাইতে, দুই সহিহতে নয়। আর বলা হয়েছে সালাত, রাকাতের কোনো সংখ্যা এখানে বেঁধে দেওয়া হয়নি।"
          }
        ]
      },
      {
        h: { en: "The Host and the Bachelors", bn: "মেজবান আর অবিবাহিতদের ঘর" },
        p: [
          {
            en: "Kulthum ibn al-Hidm (RA) was an elderly man of Banu Amr ibn Awf who had accepted Islam before the Hijra and opened his door to the most hunted man in Arabia. He died not long afterwards. Hospitality is his whole recorded part in the sirah, and it was enough to keep his name on the week that began Madinah.",
            bn: "কুলসুম ইবনুল হিদম (রাঃ) ছিলেন বনু আমর ইবনে আওফের এক বৃদ্ধ। হিজরতের আগেই ইসলাম গ্রহণ করেছিলেন, আর আরবের সবচেয়ে বেশি খোঁজ পড়া মানুষটির জন্য দরজা খুলে দিয়েছিলেন। এর অল্প পরেই তিনি ইন্তেকাল করেন। সিরাতে তাঁর ভূমিকা বলতে এই মেহমানদারিটুকুই, আর মদিনার সূচনার সপ্তাহটির সঙ্গে নাম টিকে থাকতে এটুকুই যথেষ্ট হয়েছে।"
          },
          {
            en: "Sa'd ibn Khaythamah (RA) handed his house to the single migrants and was killed at Badr less than two years later. Salim (RA), a freedman, led the prayer on the strength of what he had memorised. Put the three side by side and the settlement shows what it counted: a door opened, a need met by name, and the Quran carried in someone's chest.",
            bn: "সাদ ইবনে খায়সামা (রাঃ) নিজের ঘর ছেড়ে দিয়েছিলেন একা আসা মুহাজিরদের জন্য; দুই বছরও পার হয়নি, বদরে তিনি শহীদ হন। আজাদ করা গোলাম সালিম (রাঃ) ইমামতি পেয়েছিলেন মুখস্থ কুরআনের জোরে। এই তিনজনকে পাশাপাশি রাখলে বোঝা যায় নতুন বসতিতে কী গোনা হতো: খোলা দরজা, নাম ধরে দায়িত্ব নেওয়া, আর বুকের ভেতরে বয়ে আনা কুরআন।"
          }
        ]
      },
      {
        h: { en: "What a First Building Decides", bn: "প্রথম ঘরটি যা ঠিক করে দেয়" },
        p: [
          {
            en: "The order of that week was not accidental. Before a market was laid out, before a treaty was written, before the boundaries of the new community were drawn, a place to pray went up on the edge of the oasis, raised by a man who had been in the country a few days and owned nothing in it.",
            bn: "ওই সপ্তাহের ক্রমটি হঠাৎ ঘটে যাওয়া কিছু নয়। বাজার বসার আগে, চুক্তি লেখার আগে, নতুন সমাজের সীমারেখা টানার আগে মরূদ্যানের কিনারায় দাঁড়িয়ে গেল সালাতের একটি জায়গা। যিনি তা গড়লেন, এই দেশে তাঁর আসার বয়স তখন কয়েক দিন, আর এখানে তাঁর নিজের বলতে কিছুই নেই।"
          },
          {
            en: "It also settled what a mosque is: ground given for Allah, plain enough for anyone to copy, led by whoever knows most of the Book, open to men who arrived with nothing. Eight years later 9:107-109 made that a test the community could apply, asking what a mosque was founded on and whom it gathers. The building still stands, rebuilt many times over.",
            bn: "মসজিদ জিনিসটা কী, তাও এখানেই ঠিক হয়ে যায়: আল্লাহর জন্য ছেড়ে দেওয়া জমি, এত সাদামাটা যে যে কারও পক্ষে নকল করা সম্ভব, ইমাম সেই যিনি কিতাব বেশি জানেন, আর দরজা খোলা তাঁদের জন্য যাঁরা খালি হাতে এসেছেন। আট বছর পর ৯:১০৭ থেকে ৯:১০৯ পর্যন্ত আয়াতগুলো এটিকেই যাচাইয়ের মাপকাঠি বানিয়ে দেয়: মসজিদটি কিসের ভিতে গড়া, আর কাকে জড়ো করে। ঘরটি আজও দাঁড়িয়ে আছে, বহুবার নতুন করে গাঁথা।"
          }
        ]
      },
      {
        h: { en: "Where You Arrive, Build", bn: "যেখানে পৌঁছাবেন, সেখানেই গড়ুন" },
        p: [
          {
            en: "The first habit to take from it is the ablution at home. The narration ties the reward to purifying yourself in your own house and then setting out, so the prayer begins at your door and not at the mosque gate. Make the wudu deliberately before you leave, and treat the walk as worship rather than the errand before it.",
            bn: "প্রথম যে অভ্যাসটি এখান থেকে নেওয়ার, তা হলো ঘরে বসেই ওজু করা। হাদিসে সওয়াবটা বাঁধা আছে নিজ ঘরে পবিত্র হয়ে বেরিয়ে পড়ার সঙ্গে, অর্থাৎ সালাত শুরু হয় আপনার দরজা থেকে, মসজিদের ফটক থেকে নয়। বেরোনোর আগে মন দিয়ে ওজু সেরে নিন, আর পথটুকুকে ইবাদতের অংশ ধরুন, ইবাদতের আগের দৌড়ঝাঁপ নয়।"
          },
          {
            en: "The second is a weekly visit that costs something. He had the finest mosque in Madinah at his door and still went out to a small one on the edge of town every Saturday. Choose a small mosque near you that nobody drives to, and be there once a week. And when you move to a new city, find the mosque before you furnish the house.",
            bn: "দ্বিতীয়টি হলো সপ্তাহে এমন এক যাওয়া, যাতে একটু কষ্ট হয়। মদিনার সবচেয়ে ভালো মসজিদ তাঁর দরজার পাশেই ছিল, তবু প্রতি শনিবার তিনি শহরের কিনারার ছোট মসজিদটিতে যেতেন। আপনার আশপাশে এমন ছোট একটি মসজিদ বেছে নিন যেখানে কেউ গাড়ি চালিয়ে আসে না, আর সপ্তাহে একদিন সেখানে হাজির হন। নতুন শহরে গেলে ঘর গোছানোর আগে মসজিদটা খুঁজে নিন।"
          }
        ]
      }
    ]
  },
  "qibla": {
    sections: [
      {
        h: { en: "Sixteen Months Facing North", bn: "ষোলো মাস উত্তরমুখী" },
        p: [
          {
            en: "From the first prayers in Madinah the Muslims faced Bayt al-Maqdis in Jerusalem, north of the oasis. How long that lasted is reported in more than one way. Al-Bara ibn Azib (RA), in Sahih al-Bukhari 40, says sixteen or seventeen months; Ibn Ishaq, through Ibn Hisham, puts the change in Sha'ban at the head of the eighteenth month. Either way it covers the whole first year of the Hijra.",
            bn: "মদিনায় প্রথম দিনগুলো থেকেই মুসলিমরা সালাতে মুখ করতেন উত্তরে, জেরুজালেমের বায়তুল মাকদিসের দিকে। এ কত দিন চলেছিল, বর্ণনা একরকম নয়। সহিহ বুখারি ৪০-এ বারা ইবনে আজিব (রাঃ) বলেন ষোলো কি সতেরো মাস; ইবনে ইসহাক ইবনে হিশামের সূত্রে পরিবর্তনটি রাখেন শাবানে, মদিনায় পৌঁছানোর পর আঠারো মাসের মাথায়। যেভাবেই ধরুন, হিজরতের পুরো প্রথম বছরটা এর মধ্যে পড়ে।"
          },
          {
            en: "The direction was not a small matter of orientation. Madinah held a long argument over who truly inherited Ibrahim (AS), and a borrowed qibla was used in it against the Muslims. The Ka'bah was the house Ibrahim and Isma'il (AS) had raised, and it stood in the city that had driven the believers out. To ask for it was to ask for a centre they had no power over.",
            bn: "দিকটা নিছক মুখ ফেরানোর ব্যাপার ছিল না। মদিনায় দীর্ঘ তর্ক চলছিল ইবরাহিম (আঃ)-এর উত্তরাধিকার আসলে কার, আর ধার করা কিবলা সেই তর্কে মুসলিমদের বিরুদ্ধে ব্যবহার হতো। কাবা সেই ঘর, যা ইবরাহিম ও ইসমাইল (আঃ) তুলেছিলেন, আর সেটি দাঁড়িয়ে আছে এমন শহরে যেখান থেকে ঈমানদারদের তাড়িয়ে দেওয়া হয়েছে। ওই দিক চাওয়া মানে এমন এক কেন্দ্র চাওয়া, যার উপর তাঁদের কোনো ক্ষমতাই নেই।"
          }
        ]
      },
      {
        h: { en: "The News Reaches a Bowed Row", bn: "রুকুতে থাকা কাতারে খবর" },
        p: [
          {
            en: "Al-Bara (RA) reports that the first prayer the Prophet ﷺ offered toward the Ka'bah was Asr, and that a man who had prayed it with him went out and passed a group of the Ansar already bowing. He called out what had happened, and they turned toward the Ka'bah where they stood, without straightening up and without leaving the prayer to check.",
            bn: "বারা (রাঃ) জানান, কাবার দিকে ফিরে নবী ﷺ প্রথম যে সালাত পড়েন তা ছিল আসর। তাঁর সঙ্গে সেই সালাত পড়া এক ব্যক্তি বেরিয়ে গিয়ে দেখেন আনসারের একটি দল তখন রুকুতে। তিনি ঘটনাটা জানিয়ে দিলে তাঁরা যে অবস্থায় ছিলেন সেভাবেই কাবার দিকে ঘুরে যান, উঠে দাঁড়ালেন না, সালাত ছেড়ে যাচাই করতেও গেলেন না।"
          },
          {
            en: "Sahih al-Bukhari carries a second scene from Abdullah ibn Umar (RA). People were praying the dawn prayer at Quba when a man came and told them that Quran had come down in the night and the Prophet ﷺ had been ordered to face the Ka'bah, so face it. Their faces were toward Sham, and they turned. The change reached the oasis mosque by mosque.",
            bn: "সহিহ বুখারিতে দ্বিতীয় দৃশ্যটি এসেছে আব্দুল্লাহ ইবনে উমর (রাঃ) থেকে। কুবায় লোকজন ফজরের সালাত পড়ছিলেন, এমন সময় এক ব্যক্তি এসে বললেন, রাতে নবী ﷺ-এর উপর কুরআন নাজিল হয়েছে আর তাঁকে কাবার দিকে ফিরতে বলা হয়েছে, তোমরাও ফেরো। তাঁদের মুখ ছিল সিরিয়ার দিকে, তাঁরা ঘুরে গেলেন কাবার দিকে। খবরটা ছড়িয়েছিল এক মসজিদ থেকে আরেক মসজিদে।"
          },
          {
            en: "A mosque in the quarter of Banu Salamah has long been called Masjid al-Qiblatayn, the mosque of the two qiblas, and local memory places a mid-prayer turn there. That naming comes from the sirah and from Madinan tradition; the reports in the two Sahihs name Quba and an unnamed group of the Ansar without attaching the event to a mosque by name.",
            bn: "বনু সালামার মহল্লার একটি মসজিদকে বহু আগে থেকেই বলা হয় মসজিদুল কিবলাতাইন, দুই কিবলার মসজিদ, আর মদিনার স্মৃতি সেখানেই সালাতের মাঝপথে ঘুরে যাওয়ার ঘটনাটি রাখে। নামটি এসেছে সিরাত ও স্থানীয় ধারা থেকে। দুই সহিহর বর্ণনায় নাম আছে কুবার আর নাম না জানা আনসারদের এক দলের, কোনো মসজিদের নামের সঙ্গে ঘটনাটি সেখানে জোড়া হয়নি।"
          }
        ]
      },
      {
        h: { en: "Al-Baqarah Answers the Objectors", bn: "আপত্তির জবাব সূরা বাকারায়" },
        p: [
          {
            en: "2:142 puts the objection into the mouths of the foolish before anyone raised it, asking what turned them from the qiblah they used to face, and answers that the east and the west belong to Allah. 2:143 then names the believers a middle community, explains the first qiblah as a test of who follows the Messenger and who turns back on his heels, and promises that Allah would never let their faith go to waste.",
            bn: "২:১৪২ আয়াত আপত্তিটা কারও মুখে ওঠার আগেই নির্বোধদের মুখে বসিয়ে দেয়: কিসে তাদের ফিরিয়ে দিল সেই কিবলা থেকে, যা তারা অনুসরণ করত? জবাব আসে, পূর্ব আর পশ্চিম আল্লাহরই। এরপর ২:১৪৩ আয়াত ঈমানদারদের মধ্যপন্থী উম্মত বলে, প্রথম কিবলাকে ব্যাখ্যা করে যাচাই হিসেবে, কে রাসূলের অনুসরণ করে আর কে পায়ের ভরে উল্টো ফেরে। আর কথা দেয়, আল্লাহ তাঁদের ঈমান নষ্ট হতে দেবেন না।"
          },
          {
            en: "2:144 begins with the turning of the Prophet's ﷺ face toward the sky and gives the command: turn toward al-Masjid al-Haram, and wherever you are, turn toward it. 2:145 warns that those given the Scripture will not follow his qiblah whatever sign is brought. 2:148 tells each community to race to what is good, and 2:150 repeats the command with its purpose, that people have no argument left against them.",
            bn: "২:১৪৪ আয়াত শুরু হয় আকাশের দিকে নবী ﷺ-এর মুখ ফেরানোর কথা দিয়ে, তারপর আসে হুকুম: মসজিদুল হারামের দিকে মুখ ফেরাও, আর তোমরা যেখানেই থাকো সেদিকেই ফেরো। ২:১৪৫ আয়াত জানিয়ে দেয়, যত নিদর্শনই আনা হোক কিতাবধারীরা তাঁর কিবলার অনুসরণ করবে না। ২:১৪৮ আয়াত প্রত্যেককে বলে সৎ কাজের দিকে ছুটতে, আর ২:১৫০ আয়াত হুকুমটি ফের বলে উদ্দেশ্যসহ, যাতে মানুষের হাতে তাঁদের বিরুদ্ধে কোনো যুক্তি না থাকে।"
          }
        ]
      },
      {
        h: { en: "Al-Bara Tells the Sequence", bn: "বারা যেভাবে ক্রমটি বলেন", },
        p: [
          {
            en: "The narration that holds the whole event together is Sahih al-Bukhari 40, from al-Bara ibn Azib (RA). In its wording the Prophet ﷺ prayed toward Bayt al-Maqdis for sixteen or seventeen months while wishing to face the Ka'bah, until 2:144 came down; he turned, and the Ansar who heard the news turned where they were, still bowing. The report is the anchor for every later account of the day.",
            bn: "পুরো ঘটনাটিকে এক সুতোয় বাঁধে সহিহ বুখারি ৪০, বারা ইবনে আজিব (রাঃ)-এর বর্ণনা। তাঁর ভাষায়, নবী ﷺ ষোলো কি সতেরো মাস বায়তুল মাকদিসের দিকে ফিরে সালাত পড়েছেন, অথচ মন পড়ে ছিল কাবার দিকে; এরপর ২:১৪৪ আয়াত নাজিল হয়। তিনি ঘুরে গেলেন, আর যে আনসাররা খবর পেলেন তাঁরা রুকুর অবস্থাতেই ঘুরে গেলেন। দিনটির পরবর্তী সব বর্ণনা এই হাদিসের উপরেই দাঁড়ানো।"
          },
          {
            en: "The same report carries the question that came next. Men had died in those sixteen months who had prayed only toward the first qiblah, and people asked what became of their prayers. Al-Bara (RA) says that the clause in 2:143, that Allah would never cause their faith to be lost, came down about them. At-Tirmidhi transmits the question and answer as well.",
            bn: "একই বর্ণনায় আছে এর পরের প্রশ্নটি। ওই ষোলো মাসে এমন কয়েকজন ইন্তেকাল করেছেন, যাঁরা কেবল প্রথম কিবলার দিকেই সালাত পড়েছেন; মানুষ জানতে চাইল তাঁদের সালাতের কী হলো। বারা (রাঃ) বলেন, ২:১৪৩ আয়াতের সেই কথাটি তাঁদের নিয়েই নেমেছে, আল্লাহ তাঁদের ঈমান নষ্ট হতে দেবেন না। তিরমিজিও প্রশ্ন ও জবাব দুটোই এনেছেন।"
          }
        ]
      },
      {
        h: { en: "Witnesses, Objectors, a Grave", bn: "সাক্ষী, আপত্তিকারী, একটি কবর" },
        p: [
          {
            en: "The two men whose memory fixes the day were both young. Al-Bara ibn Azib (RA) was an Ansari boy too young to fight at Badr, and it is his account that gives the months, the Asr prayer and the bowing row. Abdullah ibn Umar (RA) was refused that day for the same reason, and it is his account that puts the dawn congregation at Quba on the following morning.",
            bn: "যে দুজনের স্মৃতি দিনটিকে ধরে রেখেছে, তাঁরা দুজনই তখন তরুণ। বারা ইবনে আজিব (রাঃ) ছিলেন আনসারের কিশোর, বয়সের কারণে বদরে যুদ্ধ করতে পারেননি; মাসের হিসাব, আসরের সালাত আর রুকুতে ঘুরে যাওয়া কাতার তাঁর বর্ণনাতেই আছে। আব্দুল্লাহ ইবনে উমর (রাঃ)-কেও একই কারণে সেদিন ফিরিয়ে দেওয়া হয়েছিল, আর পরদিন সকালে কুবার ফজরের জামাতের খবর এসেছে তাঁর কাছ থেকেই।"
          },
          {
            en: "Ibn Ishaq preserves an earlier moment. Al-Bara ibn Ma'rur (RA), on the road to the pledge at Aqabah, decided to pray toward the Ka'bah; his companions objected, and the Prophet ﷺ told him he had had a qiblah if he had kept to it. He died before the change came. As for those who asked what had turned the Muslims away, the Quran answers the question and leaves the questioners unnamed.",
            bn: "ইবনে ইসহাক এর আগের একটি ঘটনাও রেখে গেছেন। আকাবার বাইআতের পথে বারা ইবনে মারুর (রাঃ) ঠিক করলেন তিনি কাবার দিকে ফিরে সালাত পড়বেন; সঙ্গীরা আপত্তি করলেন, আর নবী ﷺ বললেন, তোমার একটা কিবলা তো ছিল, সেটাতেই থাকলে ভালো হতো। পরিবর্তন আসার আগেই তিনি ইন্তেকাল করেন। আর যারা জানতে চেয়েছিল কিসে মুসলিমদের ফেরাল, কুরআন তাদের প্রশ্নের জবাব দেয়, নাম ধরে কাউকে ডাকে না।"
          }
        ]
      },
      {
        h: { en: "A Centre of Its Own", bn: "নিজস্ব এক কেন্দ্র", },
        p: [
          {
            en: "After that day facing the Ka'bah became a condition of the prayer, and the mosques already standing in Madinah were turned. Every mosque built anywhere since has been laid out by that line, so a Muslim in any city can tell at a glance which wall is the front. A community scattered across continents keeps one geometrical centre it does not own.",
            bn: "সেদিনের পর কাবার দিকে মুখ করা সালাতের শর্ত হয়ে যায়, আর মদিনায় আগে থেকে দাঁড়িয়ে থাকা মসজিদগুলোর মুখ ঘুরিয়ে দেওয়া হয়। এরপর পৃথিবীর যেখানেই মসজিদ উঠেছে, ওই এক রেখা ধরেই তার নকশা হয়েছে; তাই যে কোনো শহরে ঢুকে একজন মুসলিম এক নজরে বুঝে নেন কোন দেয়ালটা সামনের। মহাদেশে মহাদেশে ছড়ানো একটি উম্মতের কেন্দ্রটি এক, অথচ সেই কেন্দ্র তাদের দখলে নেই।"
          },
          {
            en: "The reassurance in 2:143 became a working principle as well. Obedience under a ruling that is later replaced is not wasted, which is the ground of the fiqh that a traveller who works out the direction as best he can and gets it wrong has still prayed. And the year that turned the qiblah made Ramadan obligatory and ended at Badr: a refuge was becoming a community with its own law, month and direction.",
            bn: "২:১৪৩ আয়াতের সান্ত্বনাটি পরে কাজের নীতিও হয়ে দাঁড়ায়। যে হুকুম পরে বদলে যায়, তার অধীনে করা আনুগত্য বৃথা যায় না; এখান থেকেই ফিকহের সেই কথা, মুসাফির সাধ্যমতো দিক ঠিক করে ভুল করলেও তাঁর সালাত হয়ে যায়। আর যে বছর কিবলা ঘুরল, সেই বছরেই রোজা ফরজ হলো আর বদর হলো। আশ্রয়ের জায়গাটি তখন হয়ে উঠছে এমন এক সমাজ, যার নিজের বিধান আছে, নিজের মাস আছে, নিজের দিক আছে।"
          }
        ]
      },
      {
        h: { en: "Turning Before the Argument Ends", bn: "তর্ক শেষ হওয়ার আগেই ঘুরে যাওয়া" },
        p: [
          {
            en: "The practical half is small and learnable. Know how to find the qiblah without help: the sun, a compass, the shape of the town. Pray in the airport, the workshop or the ward rather than carrying the prayer home past its time. And if you settle the direction honestly and later learn you were wrong, the verse has already answered you.",
            bn: "এর কাজের দিকটা ছোট আর শেখা যায়। কারও সাহায্য ছাড়া কিবলা বের করতে শিখুন: সূর্য, কম্পাস, শহরের গড়ন। বিমানবন্দরে, কারখানায়, হাসপাতালের ওয়ার্ডে সালাত পড়ে নিন, ওয়াক্ত পার করে বাড়ি নিয়ে যাবেন না। আর সাধ্যমতো ভেবে দিক ঠিক করার পর যদি জানেন ভুল হয়েছিল, আয়াত আপনাকে জবাব দিয়ে রেখেছে।"
          },
          {
            en: "The harder half is the row that turned while still bowing. They did not straighten up, send someone to confirm it, or finish the old way and change tomorrow. Most of us meet commands the other way round, keeping the argument open while the practice stays as it was. Pick the instruction you have kept under discussion and act on it once this week.",
            bn: "কঠিন দিকটা হলো রুকুতে থেকেই ঘুরে যাওয়া কাতারটি। তাঁরা উঠে দাঁড়াননি, কাউকে পাঠিয়ে খবর যাচাই করেননি, আগের নিয়মে সালাত শেষ করে কাল থেকে বদলাব বলেও ভাবেননি। আমাদের বেলায় হয় উল্টোটা: তর্কটা খোলা থাকে, আর আমল যেমন ছিল তেমনই চলতে থাকে। যে হুকুমটি আপনি অনেক দিন ধরে আলোচনার মধ্যে ঝুলিয়ে রেখেছেন, এই সপ্তাহে অন্তত একবার সেটি করে ফেলুন।"
          }
        ]
      }
    ]
  },
  "ramadan_fast": {
    sections: [
      {
        h: { en: "Sha'ban of the Second Year", bn: "দ্বিতীয় বছরের শাবান" },
        p: [
          {
            en: "By the second year of the Hijra the community in Madinah had a mosque, a written covenant with its neighbours, and a prayer direction of its own. Ibn Sa'd places the making of the Ramadan fast obligatory in Sha'ban of that year, a month or so before the first Ramadan the Muslims would keep. The turning of the qiblah and the ordaining of the fast fall weeks apart.",
            bn: "হিজরতের দ্বিতীয় বছরে মদিনার সমাজের হাতে ছিল একটি মসজিদ, প্রতিবেশীদের সঙ্গে লিখিত এক সনদ, আর সালাতের নিজস্ব এক দিক। ইবনে সাদ রমজানের রোজা ফরজ হওয়ার সময় রাখেন সেই বছরের শাবানে, মুসলিমদের প্রথম রমজান শুরুর মাসখানেক আগে। কিবলা ঘুরে যাওয়া আর রোজা ফরজ হওয়া, দুটির মাঝে ব্যবধান কয়েক সপ্তাহের।"
          },
          {
            en: "Fasting itself was not new to them. Sahih al-Bukhari records from Aishah (RA) that Quraysh used to fast the day of Ashura before Islam, that the Prophet ﷺ fasted it and ordered it fasted in Madinah, and that when Ramadan was made obligatory he left Ashura to whoever wished. Ibn Abbas (RA) adds that he found the Jews of Madinah fasting that day and said the Muslims had more right to Musa (AS).",
            bn: "রোজা জিনিসটা তাঁদের কাছে নতুন ছিল না। সহিহ বুখারিতে আয়েশা (রাঃ) থেকে আছে, ইসলামের আগেও কুরাইশ আশুরার দিন রোজা রাখত; মদিনায় এসে নবী ﷺ নিজে রাখেন ও রাখতে বলেন; আর রমজান ফরজ হলে আশুরা ছেড়ে দেন যার ইচ্ছা তার উপর। ইবনে আব্বাস (রাঃ) যোগ করেন, মদিনার ইহুদিদের ওই দিনে রোজা রাখতে দেখে তিনি বলেছিলেন, মুসা (আঃ)-এর উপর তাঁদের চেয়ে মুসলিমদেরই হক বেশি।"
          }
        ]
      },
      {
        h: { en: "Legislated in Stages", bn: "ধাপে ধাপে আসা বিধান" },
        p: [
          {
            en: "The obligation did not arrive whole. 2:183 came addressed to the believers, using the verb of decree that this stretch of al-Baqarah uses for retribution and bequest. 2:184 then spoke of a limited number of days and let those able to fast only with hardship feed a poor person instead. Sahih al-Bukhari records from Salamah ibn al-Akwa (RA) that while that stood, whoever wished broke the fast and paid the ransom.",
            bn: "হুকুমটি একবারে পুরো আসেনি। ২:১৮৩ আয়াত নামে ঈমানদারদের সম্বোধন করে, সেই ফরজ করার ক্রিয়াপদেই, যা সূরা বাকারার এ অংশে কিসাস আর ওসিয়তের বেলাতেও এসেছে। এরপর ২:১৮৪ আয়াতে আসে গোনা কয়েক দিনের কথা, আর যাঁদের জন্য রোজা রাখা ভারী হয়ে যায়, তাঁদের জন্য বদলে একজন মিসকিনকে খাওয়ানোর ছাড়। সহিহ বুখারিতে সালামা ইবনুল আকওয়া (রাঃ) থেকে আছে, এ হুকুম যতদিন ছিল, যিনি চাইতেন রোজা না রেখে ফিদইয়া দিতেন।"
          },
          {
            en: "Then 2:185 settled it on everyone present and able. It named the month, gave the reason for choosing it, repeated the concession for the sick and the traveller, and stated that Allah intends ease and not hardship. Salamah (RA) says the verse after abrogated the choice. What had been an option for the strong became the fourth pillar of Islam.",
            bn: "এরপর ২:১৮৫ আয়াত বিষয়টি স্থির করে দেয় প্রত্যেক সুস্থ ও উপস্থিত মানুষের উপর। আয়াতটি মাসের নাম বলে, কেন এই মাস তা জানায়, অসুস্থ ও মুসাফিরের ছাড় আবার বলে, আর নীতি হিসেবে বলে দেয় আল্লাহ তোমাদের জন্য সহজ চান, কঠিন চান না। সালামা (রাঃ) বলেন, পরের আয়াতটি আগের সেই এখতিয়ার রহিত করে দেয়। সবল মানুষের জন্য যা ছিল ইচ্ছাধীন, তা হয়ে গেল ইসলামের পাঁচ স্তম্ভের চতুর্থটি।"
          },
          {
            en: "The nights were legislated last. In the first months, once a man had slept after breaking his fast, food, drink and his wife were closed to him until the following sunset. That is what 2:187 lifted. It permitted the night, fixed the eating to end at the whitening of dawn, and ruled on the conduct of those who stay in the mosques for i'tikaf.",
            bn: "রাতের হুকুম আসে সবার শেষে। প্রথম মাসগুলোতে নিয়ম ছিল, ইফতারের পর একবার ঘুমিয়ে পড়লে পরের সূর্যাস্ত পর্যন্ত খাওয়া, পান করা আর স্ত্রীর কাছে যাওয়া বন্ধ। ২:১৮৭ আয়াত সেই কড়াকড়ি তুলে নেয়। রাতটুকু খুলে দেয়, খাওয়ার শেষ সীমা বেঁধে দেয় ভোরের সাদা রেখা ফোটা পর্যন্ত, আর মসজিদে ইতিকাফে থাকা মানুষের আচরণের হুকুম দেয়।"
          }
        ]
      },
      {
        h: { en: "What Each Verse Adds", bn: "প্রতিটি আয়াত যা যোগ করে" },
        p: [
          {
            en: "2:183 ends on the purpose rather than the rule: that you may become people of taqwa. The comparison with those before carries no detail of their forms, so the point is companionship in discipline rather than history. 2:185 gives the reason this month was chosen, that the Quran was sent down in it as guidance and criterion, and 97:1 names the night of that sending.",
            bn: "২:১৮৩ আয়াত শেষ হয় বিধান দিয়ে নয়, উদ্দেশ্য দিয়ে: যাতে তোমরা মুত্তাকি হতে পারো। আগের জাতিদের সঙ্গে তুলনাটা এসেছে তাদের রোজার ধরন না জানিয়েই, তাই কথাটা ইতিহাসের নয়, একই সাধনায় সঙ্গী হওয়ার। ২:১৮৫ আয়াত বলে দেয় এই মাসটিকেই কেন বাছা হলো, কারণ এতে কুরআন নেমেছে হিদায়াত ও ফুরকান হয়ে; আর ৯৭:১ আয়াত সেই নাজিলের রাতটির নাম বলে।"
          },
          {
            en: "2:186 sits inside the fasting passage and answers a question about nearness with a sentence that has no messenger in it: I am near, I answer the caller when he calls Me. Then 2:187 calls husband and wife a covering for one another, marks the fast from the white thread of dawn until night, and names these the limits of Allah, not to be approached.",
            bn: "২:১৮৬ আয়াত বসে আছে রোজার আয়াতগুলোর ভেতরেই, আর নৈকট্যের প্রশ্নের জবাব দেয় এমন এক বাক্যে যেখানে কোনো মাধ্যম নেই: আমি তো নিকটেই, আহবানকারী ডাকলে আমি সাড়া দিই। এরপর ২:১৮৭ আয়াত স্বামী-স্ত্রীকে একে অপরের আচ্ছাদন বলে, রোজার সীমা টেনে দেয় ভোরের সাদা রেখা থেকে রাত পর্যন্ত, আর এগুলোকে আল্লাহর সীমা বলে, যার কাছেও যেতে নেই।"
          }
        ]
      },
      {
        h: { en: "Qays ibn Sirmah's Long Day", bn: "কায়েস ইবনে সিরমার লম্বা দিন" },
        p: [
          {
            en: "Sahih al-Bukhari preserves, from al-Bara (RA), the case that brought 2:187 down. Qays ibn Sirmah al-Ansari (RA) worked his land all day while fasting. At sunset he asked his wife for food; she had none ready and went out to find some, and sleep overtook him. By midday the next day he had fainted, and when this reached the Prophet ﷺ the verse came down. Al-Bara adds that they rejoiced greatly.",
            bn: "২:১৮৭ আয়াত কোন ঘটনায় নেমেছে, সহিহ বুখারি তা রেখে গেছে বারা (রাঃ)-এর সূত্রে। কায়েস ইবনে সিরমা আনসারি (রাঃ) রোজা রেখে সারা দিন নিজের জমিতে কাজ করেছেন। সূর্য ডুবলে ঘরে এসে স্ত্রীর কাছে খাবার চাইলেন; ঘরে তৈরি কিছু ছিল না, স্ত্রী খুঁজতে বেরোলেন, আর এর মধ্যেই তাঁর ঘুম এসে গেল। পরদিন দুপুর নাগাদ তিনি অজ্ঞান হয়ে পড়েন। কথাটা নবী ﷺ-এর কাছে পৌঁছালে আয়াতটি নাজিল হয়, আর বারা (রাঃ) বলেন, এতে তাঁরা খুব খুশি হয়েছিলেন।"
          },
          {
            en: "The same collection carries how literally the new limit was first taken. Sahl ibn Sa'd (RA) reports that when the words about the white thread and the black thread came down, a man would tie one white and one black thread to his leg and eat until he could tell them apart. Then the words of dawn were revealed, and they understood that night and daybreak were meant.",
            bn: "নতুন সীমাটি প্রথমে কত আক্ষরিকভাবে ধরা হয়েছিল, তাও একই সংকলনে আছে। সাহল ইবনে সাদ (রাঃ) জানান, সাদা সুতা ও কালো সুতার কথা নাজিল হলে কেউ কেউ পায়ে একটি সাদা আর একটি কালো সুতা বেঁধে রাখতেন, আর দুটো আলাদা করে চেনা না যাওয়া পর্যন্ত খেতে থাকতেন। পরে আল্লাহ ভোরের কথাটি নাজিল করলে তাঁরা বুঝলেন, রাত আর ভোরের কথাই বলা হচ্ছে।"
          }
        ]
      },
      {
        h: { en: "Names in the First Ramadan", bn: "প্রথম রমজানের কয়েকটি নাম" },
        p: [
          {
            en: "Qays ibn Sirmah (RA) is remembered for one bad evening. He was a working man, not a scholar or a captain, and the ruling that eased the nights of Ramadan for every Muslim since came down over his fainting in a field. Salamah ibn al-Akwa (RA), an archer of Aslam remembered above all as a runner, preserves how the earlier stage worked before it was replaced.",
            bn: "কায়েস ইবনে সিরমা (রাঃ)-কে মানুষ মনে রেখেছে একটি খারাপ সন্ধ্যার জন্য। তিনি আলিম ছিলেন না, সেনাপতিও নন, ছিলেন খেটে খাওয়া মানুষ; আর তাঁর মাঠে অজ্ঞান হয়ে পড়া থেকেই নামল সেই হুকুম, যা এরপর থেকে সব মুসলিমের রমজানের রাত সহজ করে দিয়েছে। সালামা ইবনুল আকওয়া (রাঃ), আসলাম গোত্রের তিরন্দাজ, তবে খ্যাতি তাঁর দৌড়ের জন্যই, আগের ধাপটি কেমন ছিল তার সাক্ষী।"
          },
          {
            en: "Sahl ibn Sa'd (RA) was a boy in Madinah then and lived long enough to be among the last Companions in the city, so much of the early practice reaches later generations through him. Aishah (RA) supplies the fast that Ramadan replaced, and her report is the one that settles the standing of Ashura afterwards: kept by whoever wishes, no longer required.",
            bn: "সাহল ইবনে সাদ (রাঃ) ওই বছরগুলোতে মদিনার এক বালক, আর বেঁচেছিলেন এত দীর্ঘ যে শহরের শেষ সাহাবিদের একজন হয়ে যান; তাই গোড়ার দিনের অনেক আমল পরের প্রজন্মের কাছে এসেছে তাঁর হাত ধরে। রমজান যে রোজার জায়গা নিল, সেটির খবর দেন আয়েশা (রাঃ), আর আশুরার পরবর্তী মর্যাদাও তাঁর বর্ণনাতেই স্থির হয়: যার ইচ্ছা রাখবে, ফরজ আর নয়।"
          }
        ]
      },
      {
        h: { en: "A Month Built Into the Year", bn: "বছরের ভেতরে গাঁথা এক মাস" },
        p: [
          {
            en: "One month of the calendar was now given over to the worship of the whole community, and its institutions gathered quickly. Ibn Sa'd places the sadaqah of Fitr and the first Eid prayer in the same year, and Sunan Abu Dawud carries from Anas (RA) that the Prophet ﷺ found Madinah keeping two days of play and told them Allah had given them two better days.",
            bn: "বছরের একটি গোটা মাস এবার একসঙ্গে পুরো সমাজের ইবাদতের জন্য ছেড়ে দেওয়া হলো, আর মাসটির নিয়মকানুন জমে উঠল দ্রুত। ইবনে সাদ সদকাতুল ফিতর ও প্রথম ঈদের সালাত রাখেন এই একই বছরে। সুনানে আবু দাউদে আনাস (রাঃ) থেকে আছে, মদিনার মানুষের দুটি খেলার দিন ছিল, আর নবী ﷺ তাঁদের বলেছিলেন, আল্লাহ এর বদলে এর চেয়ে ভালো দুটি দিন দিয়েছেন।"
          },
          {
            en: "The month also became the season of the Quran. Sahih al-Bukhari records from Ibn Abbas (RA) that Jibril (AS) met the Prophet ﷺ every night of Ramadan and went through the Quran with him, and the retreat of the last ten nights settled into his practice. The first Ramadan the Muslims fasted was the Ramadan in which they fought at Badr.",
            bn: "মাসটি হয়ে উঠল কুরআনেরও মৌসুম। সহিহ বুখারিতে ইবনে আব্বাস (রাঃ) থেকে আছে, রমজানের প্রতি রাতে জিবরিল (আঃ) নবী ﷺ-এর সঙ্গে দেখা করতেন আর তাঁর সঙ্গে কুরআন দোহরাতেন; শেষ দশ রাতের ইতিকাফও তাঁর আমলে থিতু হয়ে যায়। আর মুসলিমরা প্রথম যে রমজানের রোজা রাখলেন, সেই রমজানেই তাঁরা বদরে লড়েছেন।"
          }
        ]
      },
      {
        h: { en: "Taking the Concessions Given", bn: "যে ছাড় দেওয়া হয়েছে তা নেওয়া" },
        p: [
          {
            en: "Read the order of the legislation and one thing stands out: the exemptions are not a later softening but part of the founding verses. 2:184 and 2:185 carry the sick and the traveller, and 2:187 came down because a man collapsed in a field. So learn the concessions before Ramadan, and if illness, pregnancy or the road applies to you, take what the Lawgiver gave and make up the days.",
            bn: "বিধান আসার ক্রমটা পড়লে একটি জিনিস চোখে পড়ে: ছাড়গুলো পরে যোগ করা নরমি নয়, সেগুলো গোড়ার আয়াতেই আছে। ২:১৮৪ ও ২:১৮৫ আয়াতে অসুস্থ আর মুসাফিরের কথা আছে, আর ২:১৮৭ আয়াত নেমেছে একজন মানুষ মাঠে পড়ে যাওয়ার পর। তাই ছাড়ের হুকুমগুলো রমজানের মধ্যে নয়, তার আগেই শিখে রাখুন। অসুখ, গর্ভাবস্থা বা সফর যদি আপনার বেলায় খাটে, শরিয়ত যা দিয়েছে তা নিন আর পরে দিনগুলো পূরণ করুন।"
          },
          {
            en: "The other lesson is the pace. A community was moved from a voluntary day to an obligatory month in stages, each small enough to carry. Do the same with yourself: fix the obligation first and add extra fasts afterwards, and give the month a fixed daily portion of Quran rather than a plan you abandon in the first week. Then keep part of it standing in the other eleven months.",
            bn: "দ্বিতীয় শিক্ষাটি গতির। একটি সমাজকে ইচ্ছাধীন এক দিনের রোজা থেকে ফরজ এক মাসে আনা হয়েছে ধাপে ধাপে, প্রতিটি ধাপ এমন ছোট যে বহন করা যায়। নিজের বেলায়ও তাই করুন: আগে ফরজটা ঠিক করুন, নফল রোজা পরে যোগ করুন; আর মাসটির জন্য কুরআনের একটা নির্দিষ্ট দৈনিক অংশ ঠিক করুন, প্রথম সপ্তাহেই ভেঙে পড়ে এমন পরিকল্পনা নয়। এরপর তার একটা অংশ বাকি এগারো মাসেও দাঁড় করিয়ে রাখুন।"
          }
        ]
      }
    ]
  },
  "adhan_institution": {
    sections: [
      {
        h: { en: "Guessing at the Hour", bn: "সময় আন্দাজ করে নেওয়া" },
        p: [
          {
            en: "The mosque was standing and the congregation had grown from a few dozen migrants to a settlement of hundreds. Sahih al-Bukhari records from Abdullah ibn Umar (RA) that when the Muslims first came to Madinah they would gather and estimate the time of prayer, and nobody called for it. The five prayers had been obligatory since the night of the Isra, each one falling in its own portion of the day, so the hour could not be left loose.",
            bn: "মসজিদ দাঁড়িয়ে গেছে, আর জামাত গুটিকয় মুহাজির থেকে বেড়ে হয়েছে কয়েকশ মানুষের বসতি। সহিহ বুখারিতে আব্দুল্লাহ ইবনে উমর (রাঃ) থেকে আছে, মদিনায় আসার পর মুসলিমরা জড়ো হতেন আর সালাতের সময় আন্দাজ করে নিতেন, কেউ ডাক দিত না। ইসরার রাত থেকেই পাঁচ ওয়াক্ত সালাত ফরজ, আর প্রতিটির সময় দিনের নির্দিষ্ট ভাগে বাঁধা; কাজেই ওয়াক্ত ঢিলা রাখার মতো ছিল না।"
          },
          {
            en: "In Makkah the question had never come up. The believers were few, watched, and often prayed in ones and twos, so there was nobody to summon. In Madinah men were spread through palm groves, workshops and separate quarters, and the mosque had low walls and no clock. The Prophet ﷺ put the problem to the Muslims for counsel, and the sirah records a discussion rather than a revelation.",
            bn: "মক্কায় প্রশ্নটাই ওঠেনি। ঈমানদাররা তখন অল্প, নজরদারিতে, আর প্রায়ই একা বা দুজনে সালাত পড়তেন; ডাকার মতো কেউ ছিল না। মদিনায় মানুষ ছড়িয়ে আছে খেজুরবাগানে, কারখানায়, আলাদা আলাদা মহল্লায়; মসজিদের দেয়াল নিচু, ঘড়ি বলে কিছু নেই। নবী ﷺ সমস্যাটি মুসলিমদের সামনে পরামর্শের বিষয় হিসেবে তোলেন, আর সিরাত একে ওহি নয়, আলোচনা হিসেবেই লিখে রেখেছে।"
          }
        ]
      },
      {
        h: { en: "What the Neighbours Used", bn: "প্রতিবেশীরা যা ব্যবহার করত" },
        p: [
          {
            en: "Sahih Muslim carries from Anas (RA) that when the Muslims increased they talked of a sign for the time of prayer, and some spoke of kindling a fire while some spoke of the naqus, the wooden clapper the Christians struck. A horn like the one the Jews sounded was proposed too. Ibn Umar's report adds that Umar (RA) suggested sending a man out to call people.",
            bn: "সহিহ মুসলিমে আনাস (রাঃ) থেকে আছে, মুসলিমদের সংখ্যা বাড়লে সালাতের সময় জানানোর জন্য কোনো একটা চিহ্ন ঠিক করার কথা ওঠে; কেউ বলেন আগুন জ্বালানোর কথা, কেউ বলেন নাকুসের কথা, অর্থাৎ খ্রিস্টানদের কাঠের ঘণ্টার। ইহুদিদের মতো শিঙার প্রস্তাবও আসে। ইবনে উমর (রাঃ)-এর বর্ণনায় আছে, উমর (রাঃ) বলেছিলেন, একজন লোক পাঠিয়ে ডেকে দিলেই তো হয়।"
          },
          {
            en: "Each borrowed signal was set aside, since the Muslims' prayer would then be announced by another assembly's instrument, and the gathering broke up. That night Abdullah ibn Zayd ibn Abd Rabbih (RA), an Ansari present at the second pledge of Aqabah, saw a man in his sleep carrying a bell, and asked to buy it for calling people to prayer. The man offered something better and taught him the words.",
            bn: "ধার করা প্রতিটি চিহ্নই বাদ পড়ে যায়, কারণ তাতে মুসলিমদের সালাতের ঘোষণা হতো অন্য কোনো জামাতের যন্ত্র দিয়ে। বৈঠক ভাঙে কোনো সিদ্ধান্ত ছাড়াই। সেই রাতে আব্দুল্লাহ ইবনে জায়েদ ইবনে আব্দে রাব্বিহি (রাঃ), দ্বিতীয় আকাবার বাইআতে উপস্থিত এক আনসার, স্বপ্নে দেখেন এক ব্যক্তি ঘণ্টা হাতে দাঁড়িয়ে। তিনি ঘণ্টাটি কিনতে চাইলেন, বললেন এটি দিয়ে সালাতের ডাক দেওয়া হবে। লোকটি এর চেয়ে ভালো কিছুর কথা বলে তাঁকে শব্দগুলো শিখিয়ে দেন।"
          },
          {
            en: "In the morning he told the Prophet ﷺ, who said it was a true vision if Allah willed and told him to teach the words to Bilal (RA), whose voice carried further. Bilal (RA) called it, and Umar (RA) came out trailing his cloak to say he had seen the same. The Prophet ﷺ answered that to Allah belongs the praise. The report is Sunan Abu Dawud 499.",
            bn: "সকালে তিনি নবী ﷺ-কে জানালে তিনি বলেন, ইনশাআল্লাহ এটি সত্য স্বপ্ন, আর নির্দেশ দেন বিলাল (রাঃ)-এর পাশে দাঁড়িয়ে তাঁকে শব্দগুলো শিখিয়ে দিতে, কেননা বিলালের কণ্ঠ আরও দূর যায়। বিলাল (রাঃ) আজান দিলেন, আর উমর (রাঃ) চাদর টানতে টানতে বেরিয়ে এসে বললেন, তিনিও ঠিক এটিই দেখেছেন। নবী ﷺ বললেন, সব প্রশংসা আল্লাহরই। বর্ণনাটি সুনানে আবু দাউদ ৪৯৯।"
          }
        ]
      },
      {
        h: { en: "No Verse Gave the Words", bn: "শব্দগুলো কোনো আয়াত দেয়নি" },
        p: [
          {
            en: "No verse narrates the night the words were given, and the Quran nowhere sets out the wording of the call. What it supplies is the reason one was needed: 4:103 makes prayer a decree at specified times. The closest thematic verse is 22:27, where Ibrahim (AS) is told to proclaim the hajj, and people come on foot and on every lean camel from every distant pass.",
            bn: "শব্দগুলো যে রাতে দেওয়া হয়, সে রাতের বিবরণ কোনো আয়াতে নেই; আজানের বাক্যগুলোও কুরআন কোথাও সাজিয়ে দেয়নি। কুরআন যা দেয় তা হলো প্রয়োজনটির কারণ: ৪:১০৩ আয়াত সালাতকে নির্দিষ্ট সময়ে ঈমানদারদের উপর ফরজ করে। ভাব হিসেবে সবচেয়ে কাছের আয়াতটি ২২:২৭, যেখানে ইবরাহিম (আঃ)-কে বলা হয় মানুষের মাঝে হজের ঘোষণা দিতে, যাতে তারা পায়ে হেঁটে আর শীর্ণ উটের পিঠে দূরের সব পথ বেয়ে আসে।"
          },
          {
            en: "5:58 comes later, in al-Ma'idah, and looks back at a call already in daily use: when you call to prayer, they take it in ridicule and amusement, because they are a people who do not use reason. It is evidence that the adhan had become the community's ordinary signal. 62:9 then gives it an order of its own, telling the believers to leave trade for the remembrance of Allah on Friday.",
            bn: "৫:৫৮ আয়াত এসেছে পরে, সূরা মায়িদায়, আর তাকিয়ে আছে ইতিমধ্যেই রোজকার হয়ে যাওয়া এক ডাকের দিকে: তোমরা যখন সালাতের জন্য আহবান করো, তারা তা নিয়ে তামাশা করে, কারণ তারা নির্বোধ সম্প্রদায়। আয়াতটিই প্রমাণ, আজান তখন সমাজের স্বাভাবিক চিহ্ন হয়ে গেছে। এরপর ৬২:৯ আয়াত ডাকটির নিজস্ব হুকুম দেয়: জুমার দিনে আহবান হলে বেচাকেনা ছেড়ে আল্লাহর স্মরণের দিকে ছোটো।"
          }
        ]
      },
      {
        h: { en: "Even Call, Odd Iqamah", bn: "জোড় আজান, বেজোড় ইকামত" },
        p: [
          {
            en: "The dream report sits in the Sunan collections and in Ahmad's Musnad, not in the two Sahihs, and that is worth saying plainly. What al-Bukhari and Muslim carry is the consultation and the order to Bilal (RA). Sahih al-Bukhari records from Anas (RA) that Bilal (RA) was commanded to make the phrases of the adhan even and those of the iqamah odd.",
            bn: "স্বপ্নের বর্ণনাটি আছে সুনান সংকলনগুলোতে আর আহমাদের মুসনাদে, সহিহ বুখারি বা সহিহ মুসলিমে নয়; কথাটা সোজাসুজি বলে রাখা দরকার। দুই সহিহতে যা আছে তা হলো পরামর্শের ঘটনা আর বিলাল (রাঃ)-কে দেওয়া আদেশ। সহিহ বুখারিতে আনাস (রাঃ) থেকে আছে, বিলাল (রাঃ)-কে বলা হয়েছিল আজানের বাক্যগুলো জোড় করে আর ইকামতের বাক্যগুলো বেজোড় করে বলতে।"
          },
          {
            en: "The Sahih collections also show the call treated as evidence. Anas (RA) reports that on a raid the Prophet ﷺ would wait until dawn and listen: if he heard a call to prayer he held back, and if not he went forward. Within a few years the words had become the way to tell whether a settlement belonged to this community.",
            bn: "সহিহ সংকলনগুলোতেই দেখা যায়, ডাকটিকে প্রমাণ হিসেবেও ধরা হচ্ছে। আনাস (রাঃ) জানান, অভিযানে বেরিয়ে নবী ﷺ ভোরবেলা আক্রমণের আগে কান পাততেন: সালাতের ডাক শুনলে থেমে যেতেন, না শুনলে এগোতেন। কয়েকটি বাক্য অল্প কয়েক বছরেই হয়ে উঠল কোনো বসতি এই সমাজের কি না তা চেনার উপায়।"
          }
        ]
      },
      {
        h: { en: "The Men Who Carried It", bn: "যাঁরা ডাকটি বয়ে নিলেন" },
        p: [
          {
            en: "Bilal ibn Rabah (RA) had been enslaved in Makkah and held down on hot sand for refusing to name another god. In Madinah his first duty was to say aloud, five times a day, that Allah is the greatest. Abdullah ibn Zayd (RA) was shown the words and then told to hand them to a stronger voice; the reports have him teaching Bilal phrase by phrase, and no complaint.",
            bn: "বিলাল ইবনে রাবাহ (রাঃ) মক্কায় দাসত্বে ছিলেন, আর অন্য কোনো ইলাহর নাম নিতে অস্বীকার করায় তপ্ত বালুতে তাঁকে চেপে ধরে রাখা হতো। মদিনায় তাঁকে প্রথম যে কাজটি দেওয়া হলো, তা হলো দিনে পাঁচবার উঁচু গলায় বলা, আল্লাহ সবচেয়ে বড়। আব্দুল্লাহ ইবনে জায়েদ (রাঃ) শব্দগুলো পেয়েছিলেন, আর তাঁকে বলা হলো সেগুলো আরও জোরালো এক কণ্ঠের হাতে তুলে দিতে; বর্ণনায় আছে তিনি বিলালকে বাক্য ধরে ধরে শিখিয়ে দিচ্ছেন, আর কোনো অভিযোগের কথা নেই।"
          },
          {
            en: "Umar (RA) had proposed a man calling out, and then found the same words shown to him in sleep. Abdullah ibn Umm Maktum (RA), who was blind, shared the duty: Sahih al-Bukhari 617 has the Prophet ﷺ saying that Bilal calls the adhan at night, so eat and drink until Ibn Umm Maktum calls. At Makkah, later, Abu Mahdhurah (RA) was taught a form with the two testimonies said twice over.",
            bn: "উমর (রাঃ) নিজেই বলেছিলেন একজন মানুষ ডেকে দিক, আর পরে দেখলেন ঠিক ওই শব্দগুলোই তাঁকে স্বপ্নে দেখানো হয়েছে। দৃষ্টিহীন আব্দুল্লাহ ইবনে উম্মে মাকতুম (রাঃ) দায়িত্বটি ভাগ করে নেন: সহিহ বুখারি ৬১৭-তে নবী ﷺ বলছেন, বিলাল রাত থাকতে আজান দেয়, তাই ইবনে উম্মে মাকতুম আজান না দেওয়া পর্যন্ত খাও ও পান করো। পরে মক্কায় আবু মাহজুরা (রাঃ)-কে এমন এক রূপ শেখানো হয়, যাতে দুই সাক্ষ্য দুবার করে বলা হয়।"
          }
        ]
      },
      {
        h: { en: "A Call With No Instrument", bn: "যন্ত্রহীন এক আহবান" },
        p: [
          {
            en: "What was settled that week has held for fourteen centuries without machinery. The call needs no bell, no building and no ordained class: a Muslim with a clear voice and the words is enough, so it travelled wherever Muslims went and cost nothing to plant. It also made the times public property, so the poorest man in a town knew the hour when the richest did.",
            bn: "সেই সপ্তাহে যা ঠিক হয়েছিল, তা চৌদ্দ শ বছর টিকে আছে কোনো যন্ত্রপাতি ছাড়াই। এই ডাকের জন্য ঘণ্টা লাগে না, ঘর লাগে না, আলাদা কোনো পুরোহিত শ্রেণিও লাগে না; পরিষ্কার গলা আর শব্দগুলো জানা একজন মুসলিমই যথেষ্ট। তাই মুসলিমরা যেখানে গেছেন সেখানেই এটি গেছে, আর বসাতে কোনো খরচ লাগেনি। ওয়াক্তও এতে সবার সম্পত্তি হয়ে গেল, শহরের সবচেয়ে গরিব মানুষটি সময় জানল সবচেয়ে ধনী মানুষটির সঙ্গেই।"
          },
          {
            en: "More than one transmitted wording came down from it. Bilal's call in Madinah and the form taught to Abu Mahdhurah (RA) differ in the repetition of the testimonies, and the Sunan collections carry the added words before the dawn prayer that prayer is better than sleep. The schools weigh these transmissions differently, which is why the call sounds slightly different from country to country.",
            bn: "এখান থেকেই একাধিক বর্ণিত রূপ এসেছে। মদিনায় বিলালের আজান আর মক্কায় আবু মাহজুরা (রাঃ)-কে শেখানো রূপটির পার্থক্য সাক্ষ্য দুটির পুনরাবৃত্তিতে, আর ফজরের আগে যে বাড়তি বাক্য, সালাত ঘুমের চেয়ে উত্তম, তা এসেছে সুনান সংকলনগুলোতে। মাজহাবগুলো এই বর্ণনাগুলোকে ভিন্নভাবে ওজন করেন; তাই এক দেশের আজান আরেক দেশের থেকে একটু আলাদা শোনায়।"
          }
        ]
      },
      {
        h: { en: "Answering What You Hear", bn: "যা শুনছেন তার জবাব দেওয়া" },
        p: [
          {
            en: "Start with the response the Sunnah attaches to it. Repeat the words after the muadhdhin, then ask Allah for the station promised to the Prophet ﷺ. That alone turns the call from background sound into something you take part in five times a day, and it is open to a person stuck in traffic or standing behind a counter.",
            bn: "শুরু করুন সুন্নাহ যে জবাবটি জুড়ে দিয়েছে তা দিয়ে। মুয়াজ্জিনের পিছু পিছু শব্দগুলো বলুন, তারপর নবী ﷺ-এর জন্য প্রতিশ্রুত মর্যাদাটি আল্লাহর কাছে চান। এটুকুতেই ডাকটি আর পেছনের আওয়াজ থাকে না, দিনে পাঁচবার আপনি তাতে শরিক হন। জ্যামে আটকে থাকা মানুষ বা দোকানের কাউন্টারে দাঁড়ানো মানুষও এটি পারেন।"
          },
          {
            en: "Then make the hour audible where you live. If no call reaches your street, let one sound in the house rather than checking a screen, and let the children learn the words by hearing them. Learn the call well enough to give it, and give it once at home or on a journey, so the practice is not left to paid men alone.",
            bn: "এরপর যেখানে থাকেন সেখানে ওয়াক্তটিকে শোনার মতো করে তুলুন। আপনার পাড়ায় যদি আজান না পৌঁছায়, পর্দায় সময় দেখার বদলে ঘরেই আজান বাজতে দিন, আর শিশুরা শুনে শুনে শব্দগুলো শিখুক। আজানটা এমনভাবে শিখুন যেন নিজে দিতে পারেন, আর অন্তত একবার দিন, ঘরে বা সফরে; কাজটি যেন কেবল বেতনভুক্ত মানুষদের হয়ে না থাকে।"
          }
        ]
      }
    ]
  },
  "banu_qurayza": {
    "sections": [
      {
        "h": { "en": "A Covenant Inside One City", "bn": "এক শহরের ভেতরের চুক্তি" },
        "p": [
          { "en": "When the Prophet ﷺ reached Yathrib in 622 CE he had a document drawn up, preserved by Ibn Ishaq through Ibn Hisham. It bound the Muhajirun, the Ansar and the Jewish clans into one body for defence: each kept its own religion and property, none would make a separate peace, all would help against whoever attacked the city.",
            "bn": "৬২২ সালে নবী ﷺ ইয়াসরিবে পৌঁছে যে সনদ লিখিয়ে নেন, ইবনে ইসহাকের সূত্রে ইবনে হিশাম তা রেখে গেছেন। মুহাজির, আনসার আর মরুদ্যানের ইহুদি গোত্রগুলো তাতে প্রতিরক্ষার একই দেহ হয়ে বাঁধা পড়ে। যে যার দ্বীন আর সম্পদে থাকবে, কেউ আলাদা সন্ধি করবে না, শহরে হামলা এলে সবাই একসঙ্গে রুখে দাঁড়াবে।" },
          { "en": "Banu Qurayza held land and forts to the south-east and were party to it. Two other Jewish tribes had already gone: Banu Qaynuqa after Badr, Banu al-Nadir in the fourth year. Qurayza stayed through both with the treaty intact, and still held it in Shawwal of 5 AH, 627 CE, when a coalition Ibn Ishaq counts at about ten thousand reached Madinah.",
            "bn": "বনু কুরাইজা ছিল সেই সনদের পক্ষ, তাদের জমি আর দুর্গ ছিল দক্ষিণ-পূর্বে। আরও দুটি ইহুদি গোত্র ততদিনে চলে গেছে: বদরের পর বনু কাইনুকা, চতুর্থ বছরে বনু নাদির। দুই সংকটেই কুরাইজার চুক্তি অটুট ছিল। পাঁচ হিজরির শাওয়ালেও তা বহাল, অর্থাৎ ৬২৭ সালে, যখন ইবনে ইসহাকের হিসাবে প্রায় দশ হাজারের এক জোট মদিনায় এসে নামে।" }
        ]
      },
      {
        "h": { "en": "The Door Huyayy Opened", "bn": "হুয়াই যে দরজাটা খুলল" },
        "p": [
          { "en": "Ibn Ishaq is specific about the breach. Huyayy ibn Akhtab, a Nadir chief in exile who had helped raise the coalition, came to Ka'b ibn Asad, who held the treaty for Banu Qurayza. Ka'b shut his door, saying he had known Muhammad ﷺ only as truthful and faithful. Huyayy kept at him, promising to enter the fort himself if Quraysh withdrew.",
            "bn": "চুক্তিটা ঠিক কীভাবে ভাঙল, ইবনে ইসহাক তা খুঁটিয়ে বলেন। নির্বাসিত নাদিরের সরদার হুয়াই ইবনে আখতাব, যিনি জোট গড়তে সাহায্য করেছিলেন, এলেন কাব ইবনে আসাদের কাছে; বনু কুরাইজার পক্ষে চুক্তি তাঁরই জিম্মায় ছিল। কাব দরজা বন্ধ করে বললেন, মুহাম্মাদ ﷺ-কে তিনি সত্যবাদী আর বিশ্বস্ত ছাড়া কিছু পাননি। হুয়াই ছাড়লেন না, কথা দিলেন কুরাইশ ফিরে গেলে তিনি নিজেই দুর্গে ঢুকবেন।" },
          { "en": "Ka'b tore the document up. The Prophet ﷺ sent Sa'd ibn Mu'adh (RA), Sa'd ibn Ubadah (RA), Abdullah ibn Rawahah (RA) and Khawwat ibn Jubayr (RA) to check. It was true, and they brought it back in a coded phrase rather than say it aloud in a besieged city whose women and children were in the forts.",
            "bn": "কাব সনদ ছিঁড়ে ফেললেন। খবরটা যাচাই করতে নবী ﷺ পাঠালেন সা’দ ইবনে মুয়ায (রাঃ), সা’দ ইবনে উবাদা (রাঃ), আবদুল্লাহ ইবনে রাওয়াহা (রাঃ) আর খাওওয়াত ইবনে জুবায়র (রাঃ)-কে। খবর সত্যি ছিল। অবরুদ্ধ শহরের ভেতর, যেখানে নারী ও শিশুরা দুর্গে আশ্রয় নিয়ে আছে, তাঁরা কথাটা মুখে না বলে ইশারার ভাষায় জানিয়ে দিলেন।" }
        ]
      },
      {
        "h": { "en": "Twenty-Five Nights and an Arbiter", "bn": "পঁচিশ রাত আর এক সালিস" },
        "p": [
          { "en": "The coalition scattered in a cold wind. Ibn Ishaq relates that the Prophet ﷺ returned, laid down his arms, and was told to go out to Banu Qurayza; he gives the siege as twenty-five nights, al-Waqidi about fifteen. Ka'b ibn Asad put three courses to his people, one of them Islam; Ibn Ishaq says all three were refused.",
            "bn": "শীতের ঝড়ে জোট ছত্রভঙ্গ হয়ে গেল। ইবনে ইসহাক বলেন, নবী ﷺ ফিরে এসে অস্ত্র নামিয়ে রাখলেন, তখনই তাঁকে বনু কুরাইজার দিকে যেতে বলা হয়। অবরোধকে তিনি বলেন পঁচিশ রাত, ওয়াকিদি বলেন প্রায় পনেরো। কাব ইবনে আসাদ নিজের লোকদের সামনে তিনটি পথ রাখেন, তার একটি ইসলাম। ইবনে ইসহাকের বর্ণনায় তিনটিই ফিরিয়ে দেওয়া হয়।" },
          { "en": "They asked for Abu Lubabah (RA) of the Aws, allies of theirs from before Islam; the gesture he made there sent him straight to a pillar of the mosque, where he bound himself for some days until his repentance was accepted. Then they came down on the Prophet's ﷺ judgement. The Aws pleaded for their allies, so he offered an arbiter from among them: Sa'd ibn Mu'adh (RA), wounded in a tent inside the mosque.",
            "bn": "তারা চাইল আওসের আবু লুবাবা (রাঃ) এসে পরামর্শ দিন; ইসলামের আগে থেকেই দুই পক্ষ মিত্র। সেখানে তিনি যে ইশারাটি করে ফেলেন, তারপর সোজা গিয়ে মসজিদের এক স্তম্ভে নিজেকে বেঁধে ফেলেন। কয়েক দিন বাঁধা থাকার পর তাঁর তওবা কবুল হয়। এরপর তারা নেমে এসে নবী ﷺ-এর ফয়সালা মেনে নেয়। আওস সুপারিশ করলে তিনি তাদেরই একজনকে সালিস মানার প্রস্তাব দেন, আর নাম বলেন মসজিদের তাঁবুতে আহত হয়ে শুয়ে থাকা সা’দ ইবনে মুয়ায (রাঃ)-এর।" },
          { "en": "Sa'd (RA) took an undertaking from both sides that his ruling would bind them, then gave it: the fighting men killed, the women and children taken captive, the property divided. Nobody counted. Ibn Ishaq gives six or seven hundred and reports that some say eight or nine hundred; al-Waqidi sits in the same range, every figure written long afterwards.",
            "bn": "সা’দ (রাঃ) আগে দুই পক্ষ থেকেই অঙ্গীকার নেন যে রায় সবার উপর বর্তাবে। তারপর রায় দেন: যোদ্ধা পুরুষদের মৃত্যুদণ্ড, নারী ও শিশুরা বন্দি, সম্পদ ভাগ। কেউ তাদের গুনে রাখেনি। ইবনে ইসহাক বলেন ছয় বা সাতশ, আর জানান কেউ কেউ আটশ-নয়শ বলেন; ওয়াকিদির হিসাবও ওই ঘরেই। প্রতিটি সংখ্যাই অনেক পরে লেখা।" }
        ]
      },
      {
        "h": { "en": "Where al-Ahzab Ends", "bn": "সুরা আহযাব যেখানে শেষ হয়" },
        "p": [
          { "en": "The card points to 33:26, where the Quran turns from the confederates to the tribe inside the city. Allah brought down those of the People of the Scripture who had backed the confederates from their fortresses and cast terror into their hearts, so that a party was killed and a party taken captive. The verse gives its reason in its opening clause.",
            "bn": "কার্ডটি ৩৩:২৬ আয়াতের দিকে ইশারা করে, যেখানে কুরআন সম্মিলিত বাহিনী থেকে ফিরে শহরের ভেতরের গোত্রটির কথায় আসে। কিতাবধারীদের যারা সম্মিলিত বাহিনীকে সাহায্য করেছিল, আল্লাহ তাদের দুর্গ থেকে নামিয়ে আনলেন, তাদের অন্তরে ভীতি ঢেলে দিলেন; একদল নিহত হলো, একদল বন্দি। কারণটা আয়াত নিজের প্রথম বাক্যেই বলে দেয়।" },
          { "en": "33:27 adds that their land, homes and property passed to the Muslims, along with a land not yet trodden, which many commentators read as Khaybar a year ahead. The rule underneath it all is 8:58: where you fear treachery from a people you hold a treaty with, throw that treaty back openly, so both sides stand equal.",
            "bn": "৩৩:২৭ যোগ করে, তাদের ভূমি, ঘরবাড়ি আর সম্পদ মুসলিমদের হাতে এল, সঙ্গে এমন এক ভূখণ্ড যেখানে তারা তখনো পা রাখেনি; বহু তাফসিরকার এতে এক বছর পরের খায়বার দেখেন। গোটা ঘটনার নিচের নীতিটি ৮:৫৮ আয়াতে: যাদের সঙ্গে চুক্তি আছে তাদের বিশ্বাসঘাতকতার আশঙ্কা হলে চুক্তি খোলাখুলি ফিরিয়ে দাও, যাতে দুই পক্ষ সমান জায়গায় দাঁড়ায়।" }
        ]
      },
      {
        "h": { "en": "Rise to Your Chief", "bn": "তোমাদের নেতার জন্য উঠে দাঁড়াও" },
        "p": [
          { "en": "Sahih al-Bukhari 946 records from Ibn Umar (RA) that on the return from the Confederates the Prophet ﷺ said none should pray Asr except at Banu Qurayza. Some prayed on the road as the time ran out, others delayed until they arrived, and he faulted neither. Jurists have argued from that report ever since about letter and purpose.",
            "bn": "সহিহ বুখারি ৯৪৬-এ ইবনে উমর (রাঃ) থেকে এসেছে, সম্মিলিত বাহিনীর অবরোধ থেকে ফেরার দিন নবী ﷺ বলেন, বনু কুরাইজা ছাড়া কেউ যেন আসর না পড়ে। ওয়াক্ত ফুরিয়ে আসছে দেখে কেউ পথেই পড়ে নেন, কেউ পৌঁছে পড়েন। তিনি কাউকেই দোষ দেননি। ওই একটি বর্ণনা ধরেই ফকিহরা আজও তর্ক করেন, নির্দেশ কখন অক্ষরে ধরতে হয় আর কখন উদ্দেশ্যে।" },
          { "en": "Sahih al-Bukhari 3043 and Sahih Muslim 1768 preserve Abu Sa'id al-Khudri's (RA) account: Sa'd (RA) brought in on a donkey, the Ansar told to rise for their chief, the ruling given, and the answer that he had judged by Allah's judgement. Sunan Abu Dawud and Jami' at-Tirmidhi carry Atiyyah al-Qurazi's (RA) report that he was released as a boy.",
            "bn": "সহিহ বুখারি ৩০৪৩ আর সহিহ মুসলিম ১৭৬৮-এ আবু সাঈদ খুদরি (রাঃ)-এর বর্ণনায় সালিসের ছবিটা আছে: গাধায় চড়িয়ে সা’দ (রাঃ)-কে আনা হচ্ছে, আনসারদের বলা হচ্ছে নিজেদের নেতার জন্য উঠে দাঁড়াতে, রায় দেওয়া হচ্ছে, আর জবাব আসছে যে তিনি আল্লাহর ফয়সালা অনুযায়ীই রায় দিয়েছেন। সুনানে আবু দাউদ ও জামে তিরমিজিতে আতিয়্যা আল-কুরাজি (রাঃ) নিজেই বলেন, বালক বলে তিনি ছাড়া পেয়েছিলেন।" }
        ]
      },
      {
        "h": { "en": "Five Men in the Account", "bn": "বর্ণনার ভেতরের পাঁচজন" },
        "p": [
          { "en": "Ka'b ibn Asad held the treaty and tore it under pressure from a man with nothing left to lose. Huyayy ibn Akhtab had promised to share whatever came of it, kept that promise, and was taken with them. Abu Lubabah (RA), sent to counsel, said afterwards that his feet had not moved before he knew he had betrayed a trust.",
            "bn": "চুক্তিটা ছিল কাব ইবনে আসাদের জিম্মায়, আর তিনি তা ছিঁড়ে ফেলেন এমন একজনের চাপে যার নিজের হারানোর কিছু বাকি ছিল না। হুয়াই ইবনে আখতাব কথা দিয়েছিলেন পরিণতি যা-ই হোক ভাগ নেবেন; কথা রেখেছিলেন, তাদের সঙ্গেই ধরা পড়েন। আবু লুবাবা (রাঃ) গিয়েছিলেন পরামর্শ দিতে; পরে বলেছেন, পা সরার আগেই তিনি বুঝে গিয়েছিলেন আমানত নষ্ট করেছেন।" },
          { "en": "Sa'd ibn Mu'adh (RA), pressed by his own tribe to spare their allies, answered that the time had come not to care for anyone's reproach; his wound reopened after the judgement and killed him. Ibn Ishaq names Amr ibn Su'da of Banu Qurayza, who refused to break the covenant and left, and of whom the Prophet ﷺ said Allah delivered him for his faithfulness.",
            "bn": "নিজের গোত্রই সা’দ ইবনে মুয়ায (রাঃ)-কে চাপ দিয়েছিল মিত্রদের রেহাই দিতে; তিনি জবাব দেন, কারও নিন্দার পরোয়া না করার সময় এসেছে। রায়ের পর ক্ষত খুলে যায়, তাতেই তিনি মারা যান। ইবনে ইসহাক আমর ইবনে সুআদার নামও রাখেন, বনু কুরাইজারই একজন, যিনি চুক্তি ভাঙতে রাজি হননি এবং বেরিয়ে যান। নবী ﷺ বলেন, বিশ্বস্ততার কারণেই আল্লাহ তাঁকে রক্ষা করেছেন।" }
        ]
      },
      {
        "h": { "en": "What the Siege Settled", "bn": "অবরোধ যা মীমাংসা করে দিল" },
        "p": [
          { "en": "The last treaty-holding tribe inside the oasis was gone, and no army besieged Madinah again. Land and property went to people who had spent weeks digging and going hungry. The second front behind the first closed, and Hudaybiyyah, Khaybar and the opening of Makkah are fought outward from a city that no longer watched its own back.",
            "bn": "মরুদ্যানের ভেতরে চুক্তিবদ্ধ শেষ গোত্রটিও আর রইল না, মদিনা আর কখনো অবরোধের মুখে পড়েনি। জমি আর সম্পদ গেল এমন লোকদের হাতে, যারা সদ্য কয়েক সপ্তাহ না খেয়ে খন্দক খুঁড়েছে। সামনের ফ্রন্টের পেছনে আরেক ফ্রন্টের প্রশ্ন মিটে গেল। এরপরের হুদায়বিয়া, খায়বার আর মক্কা বিজয়, সবই বাইরের দিকে লড়া, এমন এক শহর থেকে যাকে আর পিছন ফিরে তাকাতে হয়নি।" },
          { "en": "What it did not settle was any verdict on a people. The Prophet ﷺ dealt with Jewish farmers, lenders and neighbours to the end: Sahih al-Bukhari records from Aishah (RA) that he died with his armour pledged to a Jewish man of Madinah for barley. One tribe was held to one treaty it had signed and broken.",
            "bn": "যা মীমাংসা হয়নি তা হলো কোনো জাতি সম্পর্কে ঢালাও রায়। নবী ﷺ শেষ দিন পর্যন্ত ইহুদি কৃষক, মহাজন আর প্রতিবেশীদের সঙ্গে লেনদেন চালিয়ে গেছেন। সহিহ বুখারিতে আয়িশা (রাঃ) থেকে আছে, ইন্তেকালের সময় তাঁর বর্ম মদিনার এক ইহুদির কাছে যবের বদলে বন্ধক রাখা ছিল। এক গোত্রকে ধরা হয়েছিল তার নিজের সই করা ও ভাঙা এক চুক্তির জন্য।" }
        ]
      },
      {
        "h": { "en": "Reading This Without Borrowing It", "bn": "এ ঘটনা পড়া, ধার না করে" },
        "p": [
          { "en": "Carry the weight of a signature. 8:58 forbids even a quiet betrayal of a party you distrust; you give notice openly and both sides stand equal. Carry the judgement's shape second: an arbitration the accused had accepted, from a man of their own allied tribe, with undertakings taken from both sides before a word was spoken.",
            "bn": "প্রথমে সঙ্গে নিন সইয়ের ভার। ৮:৫৮ আয়াত যাকে আপনি অবিশ্বাস করেন তার সঙ্গেও চুপিসারে বিশ্বাসঘাতকতার অনুমতি দেয় না; জানিয়ে দিতে হয় খোলাখুলি, দুই পক্ষ সমান জায়গায় থাকে। দ্বিতীয়ত সঙ্গে নিন ফয়সালার গড়ন: সালিস অভিযুক্তরা নিজেরাই মেনে নিয়েছিল, সালিস তাদেরই মিত্র গোত্রের লোক, আর রায়ের একটি শব্দ ওঠার আগেই দুই পক্ষ থেকে অঙ্গীকার নেওয়া হয়েছিল।" },
          { "en": "Third, 5:8, given to this same community: stand as witnesses in justice, and never let hatred of a people push you out of fairness. Hold that verse hardest where it costs most, against the community you have just read about at its worst. If this page leaves you with a grievance against a neighbour, it has been read backwards.",
            "bn": "তৃতীয়ত ৫:৮ আয়াত, এই সমাজকেই দেওয়া: ন্যায়ের সাক্ষী হয়ে দাঁড়াও, কোনো সম্প্রদায়ের প্রতি বিদ্বেষ যেন কখনো ইনসাফ থেকে সরিয়ে না দেয়। যে সম্প্রদায়কে নিয়ে আপনি এইমাত্র তার সবচেয়ে খারাপ সময়ে পড়লেন, তাদের বেলাতেই আয়াতটি সবচেয়ে শক্ত করে ধরুন। এই পাতা পড়ে যদি প্রতিবেশীর প্রতি ক্ষোভ নিয়ে ওঠেন, পড়াটা উল্টো হয়েছে।" }
        ]
      }
    ]
  },
  "ifk": {
    "sections": [
      {
        "h": { "en": "The Lot and the Lost Necklace", "bn": "কুরআর ফল আর হারানো হার" },
        "p": [
          { "en": "The campaign against Banu al-Mustaliq was fought at the well of al-Muraysi. Ibn Ishaq dates it to Sha'ban of 6 AH; most of the maghazi writers, Ibn Sa'd among them, place it a year earlier, and the card carries both. As was his custom, the Prophet ﷺ drew lots among his wives before setting out, and it fell to Aishah (RA), who travelled in a curtained howdah lifted onto the camel.",
            "bn": "বনু আল-মুস্তালিকের বিরুদ্ধে অভিযান হয় মুরাইসি কূপের পাশে। ইবনে ইসহাক একে রাখেন ছয় হিজরির শাবানে। মাগাজির অধিকাংশ লেখক, তাঁদের মধ্যে ইবনে সা’দ, রাখেন তার এক বছর আগে; কার্ডে দুটোই আছে। রওনার আগে নবী ﷺ নিয়ম মতো স্ত্রীদের মধ্যে কুরআ করেন, আর কুরআ ওঠে আয়িশা (রাঃ)-এর নামে। তিনি চলতেন উটের পিঠে তোলা পর্দাঘেরা হাওদায়।" },
          { "en": "On the way back, at a halt near Madinah, she stepped away and found her onyx necklace had broken. She went looking for it. The men lifted the howdah onto the camel without noticing it was empty, because she was young and weighed almost nothing, and the army moved off. She came back to bare ground and sat down.",
            "bn": "ফেরার পথে মদিনার কাছে এক বিরতিতে তিনি শিবির থেকে একটু দূরে যান, আর দেখেন তাঁর পাথরের হারটা ছিঁড়ে গেছে। সেটি খুঁজতে গেলেন। লোকেরা হাওদা তুলে উটের পিঠে বসিয়ে দিল, ভেতরে কেউ নেই টেরই পেল না; তিনি ছিলেন অল্পবয়সী, ওজন প্রায় ছিলই না। বাহিনী রওনা দিয়ে দিল। ফিরে এসে তিনি ফাঁকা মাটি পেলেন, আর যেখানে ছিলেন সেখানেই বসে রইলেন।" }
        ]
      },
      {
        "h": { "en": "A Month She Knew Nothing", "bn": "যে মাসটা তিনি জানতেনই না" },
        "p": [
          { "en": "Safwan ibn al-Mu'attal (RA), who was travelling behind the army, came on her at first light. He recognised her, said nothing but the words of return to Allah, made his camel kneel, and led it on foot to the midday halt. Out of that walk men in Madinah built a story, and Abdullah ibn Ubayy took the largest share.",
            "bn": "সাফওয়ান ইবনে মুআত্তাল (রাঃ) চলতেন বাহিনীর পেছনে। ভোরের আলোয় তিনি তাঁকে দেখতে পান। চিনে ফেলে ইন্না লিল্লাহ ছাড়া আর কিছু বলেননি, উট বসিয়ে দেন, তারপর পায়ে হেঁটে উট টেনে দুপুরের বিরতিতে বাহিনীর কাছে পৌঁছে দেন। ওই হাঁটাটুকু নিয়েই মদিনায় কিছু লোক গল্প বানায়, আর তার সবচেয়ে বড় ভাগ নেয় আবদুল্লাহ ইবনে উবাই।" },
          { "en": "Aishah (RA) fell ill on arrival and lay for weeks knowing nothing, aware only that the Prophet's ﷺ kindness had cooled. She learned it one night from Umm Mistah (RA), who stumbled in her gown and cursed her own son. She asked leave to go to her parents, and wept there two nights and a day, saying afterwards that she thought her liver would burst.",
            "bn": "ফিরে এসে আয়িশা (রাঃ) অসুস্থ হয়ে পড়েন, সপ্তাহের পর সপ্তাহ শুয়ে থাকেন কিছু না জেনেই; শুধু বুঝতেন নবী ﷺ-এর চিরচেনা কোমলতা যেন ঠান্ডা হয়ে গেছে। এক রাতে উম্মে মিসতাহ (রাঃ)-এর মুখে কথাটা শোনেন; উম্মে মিসতাহ কাপড়ে পা জড়িয়ে হোঁচট খেয়ে নিজের ছেলেকেই বকে ওঠেন। এরপর তিনি বাবা-মায়ের ঘরে যাওয়ার অনুমতি নেন। সেখানে দুই রাত এক দিন না ঘুমিয়ে কেঁদেছেন, পরে বলেছেন, মনে হচ্ছিল কলিজা ফেটে যাবে।" }
        ]
      },
      {
        "h": { "en": "The Name She Could Not Recall", "bn": "যে নামটা মনে এল না" },
        "p": [
          { "en": "No revelation came, and the Prophet ﷺ asked those around him. Barirah (RA) of the household said she knew nothing against her but that the girl fell asleep over the dough until the goat ate it. He asked Zaynab bint Jahsh (RA), the wife who competed with her most, and she answered that she guarded her hearing and sight, and knew nothing of her but good.",
            "bn": "ওহি নামছিল না, তাই নবী ﷺ কাছের মানুষদের জিজ্ঞেস করলেন। ঘরের কাজে থাকা বারিরা (রাঃ) বললেন, তাঁর বিরুদ্ধে বলার মতো এটুকুই আছে যে অল্পবয়সী মেয়েটা ময়দা মাখতে বসে ঘুমিয়ে পড়ত, আর ছাগল এসে তা খেয়ে যেত। জয়নব বিনতে জাহশ (রাঃ)-কেও জিজ্ঞেস করলেন, স্ত্রীদের মধ্যে যিনি তাঁর সঙ্গে সবচেয়ে বেশি পাল্লা দিতেন। তিনি বললেন, নিজের কান আর চোখ তিনি হেফাজত করেন, আয়িশার ভালো ছাড়া কিছু জানেন না।" },
          { "en": "Then he came to her parents' house and said that if she was innocent Allah would clear her, and if she had done wrong she should repent. Her tears dried. She asked her father to answer for her; neither he nor her mother knew what to say. Reaching for Ya'qub's (AS) words, she forgot his name and said: the father of Yusuf (AS).",
            "bn": "তারপর তিনি তাঁর বাবার ঘরে এসে বসলেন এবং বললেন, নির্দোষ হলে আল্লাহ নিজেই তা প্রকাশ করবেন, আর কিছু করে থাকলে যেন ক্ষমা চেয়ে তওবা করেন। তাঁর চোখের পানি শুকিয়ে গেল। বাবাকে বললেন জবাব দিতে, বাবা বললেন কী বলবেন জানেন না; মা-ও একই কথা বললেন। ইয়াকুব (আঃ)-এর কথাগুলো বলতে গিয়ে তাঁর নামটাই মনে পড়ল না, তাই বললেন: ইউসুফ (আঃ)-এর বাবা।" }
        ]
      },
      {
        "h": { "en": "Ten Verses of an-Nur", "bn": "সুরা নূরের দশ আয়াত" },
        "p": [
          { "en": "What she quoted was 12:18: beautiful patience, and Allah is the One whose help is sought against what you describe. Before the gathering broke up the revelation came, ten verses, 24:11-20. 24:11 tells the believers not to think the affair bad for them but good, and says every slanderer carries what he earned, the one who took the greater share most of all.",
            "bn": "তিনি যা বলেছিলেন তা ১২:১৮ আয়াত: সুন্দর ধৈর্য, আর তোমরা যা বানাচ্ছ তার বিরুদ্ধে আল্লাহই আশ্রয়। বৈঠক ভাঙার আগেই ওহি নামল, দশটি আয়াত, ২৪:১১ থেকে ২৪:২০ পর্যন্ত। ২৪:১১ মুমিনদের বলে, ঘটনাটাকে যেন তারা নিজেদের জন্য খারাপ না ভাবে, বরং ভালোই মনে করে; অপবাদ রটানো প্রত্যেকে নিজের কামাই বইবে, আর যে সবচেয়ে বড় ভাগ নিয়েছে তার জন্য আছে মহা শাস্তি।" },
          { "en": "24:12 asks why the believing men and women did not think well of their own and say plainly that this was an obvious falsehood. 24:13 asks why four witnesses were not produced, and rules that without them the speakers are the liars before Allah. 24:15 names the mechanism: taken up on the tongues, spoken without knowledge, reckoned slight while with Allah it was enormous.",
            "bn": "২৪:১২ প্রশ্ন করে, মুমিন পুরুষ ও নারীরা কেন নিজেদের লোক সম্পর্কে ভালো ধারণা করল না, কেন সোজা বলল না যে এটা খোলাখুলি অপবাদ। ২৪:১৩ জানতে চায়, চারজন সাক্ষী হাজির করা হলো না কেন, আর রায় দেয়: সাক্ষী নেই, তাই আল্লাহর কাছে বক্তারাই মিথ্যাবাদী। ২৪:১৫ কৌশলটা ধরিয়ে দেয়: মুখে মুখে নেওয়া, না জেনে বলা, আর ছোট ব্যাপার ভাবা, অথচ আল্লাহর কাছে তা ছিল বিরাট।" }
        ]
      },
      {
        "h": { "en": "Her Own Account, Word for Word", "bn": "তাঁর নিজের বয়ান, শব্দে শব্দে" },
        "p": [
          { "en": "The whole month survives as one long narration from Aishah (RA) herself, in Sahih al-Bukhari 4141 and Sahih Muslim 2770. It is first-person and she does not spare herself: the illness, the ignorance, the weeping, the anger. When her mother told her to get up and go to the Prophet ﷺ, she said she would not, and would praise nobody but Allah.",
            "bn": "গোটা মাসটা টিকে আছে আয়িশা (রাঃ)-এর নিজের এক দীর্ঘ বর্ণনায়, সহিহ বুখারি ৪১৪১ আর সহিহ মুসলিম ২৭৭০-এ রাখা। বয়ানটা তাঁর নিজের মুখের, আর নিজেকে তিনি ছাড় দেননি: অসুস্থতা, না জানা, কান্না, রাগ, সবই আছে। মা যখন বললেন উঠে নবী ﷺ-এর কাছে যেতে, তিনি বললেন যাবেন না, আর আল্লাহ ছাড়া কারও প্রশংসা করবেন না।" },
          { "en": "The same narration keeps the line that shows how she saw herself. She thought her case too slight for Quran to come down about it, and had hoped only that the Prophet ﷺ might be shown a dream clearing her. It records his first words when the state of revelation left him: Aishah, praise Allah, for Allah has declared you innocent.",
            "bn": "ওই বর্ণনাতেই আছে সেই কথাটা, যা দেখায় নিজেকে তিনি কত ছোট ভাবতেন। ভেবেছিলেন তাঁকে নিয়ে কুরআন নাজিল হওয়ার মতো বড় তিনি নন; আশা ছিল শুধু এটুকু যে নবী ﷺ হয়তো স্বপ্নে তাঁর নির্দোষিতা দেখবেন। আর ওহির অবস্থা কেটে যাওয়ার পর তাঁর প্রথম কথাটাও সেখানে রাখা: আয়িশা, আল্লাহর প্রশংসা করো, তিনি তোমাকে নির্দোষ ঘোষণা করেছেন।" }
        ]
      },
      {
        "h": { "en": "Who Spoke and Who Kept Silent", "bn": "কে বলল আর কে চুপ ছিল" },
        "p": [
          { "en": "Safwan (RA) said one sentence in the whole affair. Abu Bakr (RA) sat in his own house unable to answer for his daughter, and Umm Ruman (RA) beside him the same, which is the honest picture of what a rumour does to a family. Zaynab (RA) had every worldly reason to let the talk work for her, and said only what she knew.",
            "bn": "গোটা ঘটনায় সাফওয়ান (রাঃ)-এর মুখে একটি বাক্যই ছিল। আবু বকর (রাঃ) নিজের ঘরে বসে মেয়ের হয়ে জবাব দিতে পারেননি, পাশে উম্মে রুমান (রাঃ)-ও তাই; গুজব একটা পরিবারের সঙ্গে কী করে, এটাই তার সৎ ছবি। জয়নব (রাঃ)-এর দুনিয়াবি সব কারণ ছিল কথাটা নিজের পক্ষে কাজ করতে দেওয়ার। তিনি যা জানতেন কেবল তা-ই বললেন।" },
          { "en": "Abdullah ibn Ubayy, the loudest voice against the Prophet ﷺ inside Madinah for years, took the greater share, and 24:11 leaves him to it. The others who repeated it were believers who fell: Ibn Ishaq and the books of asbab an-nuzul name Hassan ibn Thabit (RA), Mistah ibn Uthathah (RA) and Hamnah bint Jahsh (RA) among those flogged under 24:4.",
            "bn": "বছরের পর বছর মদিনার ভেতরে নবী ﷺ-এর বিরুদ্ধে সবচেয়ে উঁচু গলা ছিল আবদুল্লাহ ইবনে উবাইয়ের; সে-ই সবচেয়ে বড় ভাগ নেয়, আর ২৪:১১ তাকে সেখানেই ছেড়ে দেয়। বাকি যারা কথাটা ছড়িয়েছিল তারা ছিল পড়ে যাওয়া মুমিন। ইবনে ইসহাক ও আসবাবে নুজুলের কিতাবগুলো নাম রাখে হাসসান ইবনে সাবিত (রাঃ), মিসতাহ ইবনে উসাসা (রাঃ) আর হামনা বিনতে জাহশ (রাঃ)-এর, যাঁদের উপর ২৪:৪ আয়াতের বেত্রাঘাত কার্যকর হয়।" }
        ]
      },
      {
        "h": { "en": "A Law Against the Tongue", "bn": "জিহ্বার বিরুদ্ধে এক বিধান" },
        "p": [
          { "en": "The affair left law behind it. 24:4 fixes eighty lashes on anyone who accuses a chaste woman without four witnesses, and refuses that person's testimony afterwards. 24:23 puts the accuser of chaste, unwary believing women under a curse in this world and the next. In Islamic law such an accusation became one of the hardest claims to prove and the most dangerous to make.",
            "bn": "ঘটনাটা পেছনে বিধান রেখে গেছে। ২৪:৪ আয়াত সতী নারীর প্রতি অপবাদ দিয়ে চারজন সাক্ষী আনতে না পারলে আশি বেত্রাঘাত নির্ধারণ করে, আর তার সাক্ষ্য এরপর আর নেওয়া হয় না। ২৪:২৩ সতী, সরলমনা মুমিন নারীর প্রতি অপবাদদাতাকে দুনিয়া ও আখিরাতে অভিশপ্ত বলে। ইসলামি আইনে এ ধরনের অভিযোগ প্রমাণ করা সবচেয়ে কঠিন আর করা সবচেয়ে বিপজ্জনক দাবিগুলোর একটি হয়ে যায়।" },
          { "en": "It settled something inside Madinah too. Abu Bakr (RA) had sworn to stop supporting Mistah (RA), a poor relative who had joined in; 24:22 asked whether he would not rather Allah forgive him, and he restored it at once. The standing of Abdullah ibn Ubayy was now public. 24:11 called the whole affair good for the believers, and part of the good was that.",
            "bn": "মদিনার ভেতরেও কিছু একটা মিটে গেল। আবু বকর (রাঃ) কসম করেছিলেন, নিজের গরিব আত্মীয় মিসতাহ (রাঃ)-কে আর সাহায্য করবেন না; মিসতাহ (রাঃ) অপবাদে যোগ দিয়েছিলেন। ২৪:২২ জিজ্ঞেস করল, তিনি কি চান না আল্লাহ তাঁকে মাফ করুন? তিনি সঙ্গে সঙ্গে ভাতা ফিরিয়ে দিলেন। আর আবদুল্লাহ ইবনে উবাইয়ের অবস্থান এখন সবার জানা। ২৪:১১ গোটা ঘটনাকে মুমিনদের জন্য ভালো বলেছিল; এটাও সেই ভালোর অংশ।" }
        ]
      },
      {
        "h": { "en": "Before You Pass It On", "bn": "কথাটা এগিয়ে দেওয়ার আগে" },
        "p": [
          { "en": "The verses aim at the audience rather than the author, and that is where the weight sits. 24:12 asks why the believers did not assume good of their own. 24:16 hands them the sentence they owed the rumour: it is not for us to speak of this. 49:6 adds the general rule, that news from a disobedient one is verified before it moves.",
            "bn": "আয়াতগুলোর লক্ষ্য রটনাকারী নয়, শ্রোতা, আর কাজের ভারটা ওখানেই। ২৪:১২ জিজ্ঞেস করে, মুমিনরা নিজেদের লোক সম্পর্কে ভালো ধারণা করল না কেন। ২৪:১৬ হাতে ধরিয়ে দেয় সেই বাক্যটা যা গুজবের জবাবে বলা উচিত ছিল: এ নিয়ে আমাদের কথা বলাই ঠিক নয়। ৪৯:৬ সাধারণ নিয়মটা যোগ করে: পাপাচারী কারও খবর আগে যাচাই করো, তারপর এগোতে দাও।" },
          { "en": "24:15 names the excuse most people use, that it seemed a slight thing, and answers it in the same breath. Forwarding is speech. Aishah (RA) spent a month unable to defend herself; those repeating it spent seconds. Before you pass on anything about a believer, ask whether you would say it with four witnesses behind you; 24:13 is the standard.",
            "bn": "মানুষ আসলে যে অজুহাতটা দেয়, ২৪:১৫ তার নাম ধরেই বলে দেয়: ছোট ব্যাপার মনে হয়েছিল। আর একই নিঃশ্বাসে জবাবও দিয়ে দেয়। ফরওয়ার্ড করাও কথা বলা। আয়িশা (রাঃ) এক মাস নিজেকে বাঁচাতে পারেননি, আর যারা কথাটা এগিয়ে দিয়েছিল তাদের লেগেছিল কয়েক সেকেন্ড। কোনো মুমিনের ব্যাপারে কিছু এগিয়ে দেওয়ার আগে ভাবুন, পেছনে চারজন সাক্ষী নিয়ে কথাটা বলতে পারবেন কি না; ২৪:১৩ আয়াতই মাপকাঠি।" }
        ]
      }
    ]
  },
  "khaybar": {
    "sections": [
      {
        "h": { "en": "The Oasis to the North", "bn": "উত্তরের মরুদ্যান" },
        "p": [
          { "en": "The truce at Hudaybiyyah was signed in Dhul-Qa'dah of 6 AH. Ibn Ishaq relates that the Prophet ﷺ stayed in Madinah a short while and then set out for Khaybar in Muharram of 7 AH, early in 628 CE. Khaybar was a few days' march north: a belt of springs, date groves and stone fortresses held by a settled farming population.",
            "bn": "হুদায়বিয়ার সন্ধি সই হয় ছয় হিজরির জিলকদে। ইবনে ইসহাক বলেন, নবী ﷺ মদিনায় অল্প কিছুদিন থেকে সাত হিজরির মহররমে খায়বারের দিকে রওনা হন, অর্থাৎ ৬২৮ সালের শুরুতে। খায়বার ছিল কয়েক দিনের পথ উত্তরে: ঝর্না, খেজুরবাগান আর পাথরের দুর্গ নিয়ে গড়া এক অঞ্চল, যেখানে থিতু কৃষিজীবী জনগোষ্ঠী বাস করত।" },
          { "en": "The sirah names the grievance precisely. The chiefs of Banu al-Nadir who settled at Khaybar after their banishment went to Makkah and to Ghatafan to raise the confederate army that besieged Madinah, and Khaybar had gone on courting Ghatafan afterwards. The sirah puts the Muslim force at about fourteen hundred with two hundred horse, drawn from those who had been at Hudaybiyyah.",
            "bn": "অভিযোগটা সিরাত খুব নির্দিষ্ট করেই বলে। নির্বাসনের পর খায়বারে গিয়ে বসা বনু নাদিরের সরদাররা মক্কা ও গাতাফানে গিয়ে সেই সম্মিলিত বাহিনী গড়ে তোলেন, যা মদিনা অবরোধ করেছিল। তারপরও খায়বার গাতাফানকে নিজেদের দিকে টানার কাজ চালিয়ে গেছে। সিরাতের হিসাবে মুসলিম বাহিনী ছিল প্রায় চৌদ্দশ, সঙ্গে দুইশ ঘোড়া, আর সবাই ছিলেন হুদায়বিয়ায় উপস্থিত লোকদের মধ্য থেকে।" }
        ]
      },
      {
        "h": { "en": "Fort After Fort", "bn": "একের পর এক দুর্গ" },
        "p": [
          { "en": "He came by a road that set his camp between Khaybar and Ghatafan, so the two could not join, and Ghatafan turned back. Khaybar was not one place but three groups of forts, an-Natat, ash-Shiqq and al-Katibah, and they were taken one at a time. The sources put the siege at something over twenty nights and do not agree closely.",
            "bn": "তিনি এমন পথে এলেন যে শিবির পড়ল খায়বার আর গাতাফানের মাঝখানে, দুই পক্ষ আর মিলতে পারল না; গাতাফান ফিরে গেল। খায়বার এক জায়গা ছিল না, ছিল তিন গুচ্ছ দুর্গ: নাতাত, শিক্ক আর কাতিবা। একটার পর একটা করে সেগুলো হাতে আসে। অবরোধের সময় সূত্রগুলো বিশ রাতের কিছু বেশি বলে, তবে সংখ্যায় তারা একমত নয়।" },
          { "en": "The hardest fighting was at an-Natat, where Marhab came out for single combat, and at al-Qamus, the fort of the house of Abi al-Huqayq. When al-Katibah was reached the remaining people asked for terms and the fighting stopped. Ibn Ishaq relates that Kinanah ibn ar-Rabi, who had undertaken to hand over the treasure of Banu al-Nadir and hid it instead, was put to death.",
            "bn": "সবচেয়ে কঠিন লড়াই হয় নাতাতে, যেখানে মারহাব দ্বৈরথে বেরিয়ে আসে, আর কামুসে, যা ছিল আবিল হুকাইকের পরিবারের দুর্গ। কাতিবা পর্যন্ত পৌঁছালে বাকিরা শর্ত চায় এবং লড়াই থেমে যায়। ইবনে ইসহাক বলেন, কিনানা ইবনে রাবি বনু নাদিরের গচ্ছিত ধন হস্তান্তরের দায়িত্ব নিয়েও তা লুকিয়ে রাখেন, আর সে কারণে তাঁকে মৃত্যুদণ্ড দেওয়া হয়।" }
        ]
      },
      {
        "h": { "en": "Terms in the Palm Groves", "bn": "খেজুরবাগানের শর্ত" },
        "p": [
          { "en": "What was done with the land is the part most worth knowing. Sahih al-Bukhari, in its book of sharecropping, records from Ibn Umar (RA) that the Prophet ﷺ handed the land and palms of Khaybar back to the people of Khaybar on condition that they work them and take half the produce. The jurists built muzara'ah and musaqah on that contract.",
            "bn": "জমি নিয়ে কী করা হলো, সেটাই সবচেয়ে জানার মতো অংশ। সহিহ বুখারির মুজারাআ অধ্যায়ে ইবনে উমর (রাঃ) থেকে আছে, নবী ﷺ খায়বারের জমি আর খেজুরবাগান খায়বারবাসীদের হাতেই ফিরিয়ে দেন, শর্ত ছিল তারা তা চাষ করবে আর উৎপাদনের অর্ধেক নেবে। ফকিহরা মুজারাআ ও মুসাকাতের বিধান এই চুক্তির উপরেই দাঁড় করিয়েছেন।" },
          { "en": "Fadak came in by agreement without fighting, which put it under the rule of 59:6 and 59:7 as fay rather than battle spoils. And at Khaybar a woman of the settlement sent a roasted sheep that had been poisoned; Bishr ibn al-Bara (RA) ate of it and died. Sahih al-Bukhari records the Prophet ﷺ still feeling that food in his final illness.",
            "bn": "ফাদাক বিনা যুদ্ধে চুক্তির মাধ্যমে আসে, ফলে তা যুদ্ধলব্ধ গনিমত নয়, ৫৯:৬ ও ৫৯:৭ আয়াতের ফাই-এর বিধানে পড়ে। খায়বারেই এক নারী বিষ মেশানো ভুনা বকরি পাঠান; বিশর ইবনে বারা (রাঃ) তা খেয়ে মারা যান। সহিহ বুখারিতে আছে, শেষ অসুখের সময়ও নবী ﷺ ওই খাবারের প্রভাব টের পেতেন।" }
        ]
      },
      {
        "h": { "en": "Al-Fath on the Spoils", "bn": "গনিমত নিয়ে সুরা ফাতহ" },
        "p": [
          { "en": "48:15 says that those who stayed behind will ask to come along when the believers set out to take the spoils, and are answered that they will not follow. The app's Bengali rendering names this campaign in its own gloss on that verse. 48:11 had already quoted their excuse, that their property and families had kept them busy.",
            "bn": "৪৮:১৫ বলে, মুমিনরা যখন গনিমত নিতে বেরোবে তখন পিছিয়ে থাকা লোকেরা সঙ্গে যেতে চাইবে, আর জবাব পাবে যে তারা যেতে পারবে না। অ্যাপের বাংলা অনুবাদ ওই আয়াতের টীকাতেই এই অভিযানের নাম করে দেয়। ৪৮:১১ আগেই তাদের অজুহাত তুলে ধরেছিল: মালধন আর পরিবার-পরিজন তাদের ব্যস্ত রেখেছিল।" },
          { "en": "48:19 promises much booty that they will take. 48:20 says Allah promised them that booty, hastened this one for them, and held people's hands back from them, so that it would be a sign for the believers. 48:21 keeps other victories still in His hand. Many commentators also read the untrodden land of 33:27 as Khaybar, a year before it fell.",
            "bn": "৪৮:১৯ বিপুল গনিমতের ওয়াদা দেয়, যা তারা পাবে। ৪৮:২০ বলে, আল্লাহ সেই গনিমতের ওয়াদা দিয়েছেন, এটি আগেভাগে দিয়ে দিয়েছেন, আর মানুষের হাত তাদের থেকে সরিয়ে রেখেছেন, যাতে তা মুমিনদের জন্য নিদর্শন হয়। ৪৮:২১ বাকি বিজয়গুলো এখনো তাঁর হাতেই রাখে। বহু তাফসিরকার ৩৩:২৭ আয়াতের পা না রাখা ভূখণ্ডকেও খায়বার বলেই পড়েন, পতনের এক বছর আগে।" }
        ]
      },
      {
        "h": { "en": "The Banner Given at Dawn", "bn": "ভোরে দেওয়া পতাকা" },
        "p": [
          { "en": "Sahih al-Bukhari 3009 records that the Prophet ﷺ said he would give the banner tomorrow to a man who loves Allah and His Messenger ﷺ and whom Allah and His Messenger love, and that Allah would give victory through his hands. The men spent the night wondering which of them it would be. In the morning he called for Ali (RA), whose eyes were sore, and they were healed.",
            "bn": "সহিহ বুখারি ৩০০৯-এ আছে, নবী ﷺ বলেন, আগামীকাল তিনি পতাকা দেবেন এমন একজনকে যিনি আল্লাহ ও তাঁর রাসূল ﷺ-কে ভালোবাসেন এবং আল্লাহ ও তাঁর রাসূলও যাঁকে ভালোবাসেন, আর তাঁর হাতেই আল্লাহ বিজয় দেবেন। সারা রাত লোকেরা ভাবতে থাকে, কে সেই লোক। সকালে তিনি ডাকেন আলী (রাঃ)-কে, যাঁর চোখ ব্যথায় ভুগছিল, আর চোখ সেরে যায়।" },
          { "en": "The same narration carries the order that went with the banner, and it is the part usually left out. Ali (RA) asked whether to fight them until they became like the Muslims. He was told to go steadily until he reached their open ground, then call them to Islam and tell them their duty, because one man guided through him was better for him than red camels.",
            "bn": "একই বর্ণনায় পতাকার সঙ্গে দেওয়া নির্দেশটিও আছে, আর সেটুকুই সাধারণত বাদ পড়ে যায়। আলী (রাঃ) জিজ্ঞেস করলেন, মুসলিমদের মতো না হওয়া পর্যন্ত কি তিনি লড়ে যাবেন। তাঁকে বলা হলো, ধীরেসুস্থে গিয়ে তাদের আঙিনায় পৌঁছাতে, তারপর ইসলামের দাওয়াত দিতে আর তাদের কর্তব্য জানিয়ে দিতে; কারণ তাঁর মাধ্যমে একজন মানুষ হেদায়েত পাওয়া তাঁর জন্য লাল উটের চেয়েও ভালো।" }
        ]
      },
      {
        "h": { "en": "Who Came Back That Month", "bn": "সেই মাসে যাঁরা ফিরে এলেন" },
        "p": [
          { "en": "Salamah ibn al-Akwa (RA) lost his uncle Amir at Khaybar, killed when his own sword recoiled on him; when people said his deeds were void the Prophet ﷺ answered that he had two rewards, and Bukhari and Muslim both record it. Abu Hurayrah (RA) reached Madinah while the army was still at Khaybar, and was given a share of what came.",
            "bn": "খায়বারে সালামা ইবনুল আকওয়া (রাঃ) তাঁর চাচা আমিরকে হারান; নিজের তলোয়ার ফিরে এসে লাগায় তিনি নিহত হন। লোকে যখন বলল তাঁর আমল বরবাদ, নবী ﷺ বললেন তাঁর জন্য দুটি প্রতিদান আছে; বুখারি ও মুসলিম দুই কিতাবেই তা আছে। আবু হুরায়রা (রাঃ) মদিনায় পৌঁছান যখন বাহিনী তখনো খায়বারে, আর তিনি প্রাপ্ত সম্পদের ভাগ পান।" },
          { "en": "Sahih al-Bukhari preserves Abu Musa al-Ash'ari's (RA) own account of arriving by sea with his people at the same time, together with the emigrants coming home from Abyssinia after more than a decade. The card notes that return, and this is where it belongs. Safiyyah bint Huyayy (RA) was freed and married after the forts fell, which has its own page here.",
            "bn": "সহিহ বুখারিতে আবু মুসা আশআরি (রাঃ)-এর নিজের বয়ান আছে, তিনি ঠিক সেই সময়েই স্বজনদের নিয়ে সমুদ্রপথে পৌঁছান, সঙ্গে ছিলেন আবিসিনিয়া থেকে এক দশকেরও বেশি সময় পর ঘরে ফেরা মুহাজিররা। কার্ডে ওই ফেরার কথা আছে, আর তার জায়গা এখানেই। দুর্গগুলো পড়ার পর সাফিয়্যা বিনতে হুয়াই (রাঃ) মুক্তি ও বিবাহ পান, যার নিজস্ব পাতা এখানে আলাদা আছে।" }
        ]
      },
      {
        "h": { "en": "Half the Harvest", "bn": "ফসলের অর্ধেক" },
        "p": [
          { "en": "The northern threat ended without the population being moved. The settlement that had helped raise the confederates stayed on its own land under a contract and paid half the crop, and that is a different outcome from Qaynuqa, Nadir and Qurayza. It became the working model for farmland taken later, and the jurists still argue the fiqh of tenancy from it.",
            "bn": "উত্তরের হুমকি শেষ হলো, অথচ জনগোষ্ঠীকে সরানো হলো না। যে বসতি সম্মিলিত বাহিনী গড়তে সাহায্য করেছিল, তারাই নিজের জমিতে চুক্তির অধীনে রয়ে গেল আর ফসলের অর্ধেক দিল। কাইনুকা, নাদির আর কুরাইজার চেয়ে এটি ভিন্ন পরিণতি। পরে জয় করা কৃষিজমির ক্ষেত্রে এটিই চালু নমুনা হয়ে দাঁড়ায়, আর ফকিহরা বর্গার ফিকহ আজও এখান থেকেই টানেন।" },
          { "en": "The relief was material and it was felt. Sahih al-Bukhari records Ibn Umar (RA) saying that they did not eat their fill until Khaybar was opened. Families who had been apart since the migration to Abyssinia were back in one city. The road north was safe, and the letters to the rulers and the umrah of the following year go out from that footing.",
            "bn": "স্বস্তিটা ছিল হাতে-কলমে, আর তা টেরও পাওয়া গেছে। সহিহ বুখারিতে ইবনে উমর (রাঃ) বলেন, খায়বার না খোলা পর্যন্ত তাঁরা পেট ভরে খেতে পাননি। আবিসিনিয়ার হিজরতের পর থেকে আলাদা হয়ে থাকা পরিবারগুলো এক শহরে ফিরে এল। উত্তরের পথ নিরাপদ হলো, আর রাজা-বাদশাহদের কাছে পত্র ও পরের বছরের উমরা এই ভিতের উপর দাঁড়িয়েই হয়।" }
        ]
      },
      {
        "h": { "en": "When the Long Hunger Ends", "bn": "দীর্ঘ ক্ষুধা যখন শেষ হয়" },
        "p": [
          { "en": "Sudden relief tests a person more quietly than hunger does. The community that had dug the trench on empty stomachs now held the palm groves of Khaybar, and the first thing done with them was a contract that left the people who knew those palms working them. Wealth arriving is a moment for terms, not for taking everything the moment allows.",
            "bn": "হঠাৎ আসা স্বস্তি মানুষকে ক্ষুধার চেয়ে চুপচাপ পরীক্ষা করে। যে সমাজ খালি পেটে খন্দক খুঁড়েছিল, তারাই এখন খায়বারের খেজুরবাগানের মালিক। আর সেই জমি নিয়ে প্রথম কাজটি হলো এমন চুক্তি লেখা, যাতে খেজুরগাছ যারা চেনে তারাই কাজ চালিয়ে যেতে পারে। সম্পদ আসার মুহূর্তটা শর্ত ঠিক করার সময়, সুযোগ যতটুকু দেয় ততটুকু কেড়ে নেওয়ার নয়।" },
          { "en": "The second habit is the order in Bukhari 3009. Go steadily, call people before you press them, and count one person guided as worth more than red camels. Whatever strength you hold, the invitation comes first. And 48:15 is a warning about a familiar character: absent for the journey, present for the harvest, and offended at being told so.",
            "bn": "দ্বিতীয় অভ্যাসটা বুখারি ৩০০৯-এর নির্দেশে। ধীরেসুস্থে এগোনো, চাপ দেওয়ার আগে ডাকা, আর একজন মানুষের হেদায়েতকে লাল উটের চেয়ে বড় গণা। হাতে যত শক্তিই থাক, দাওয়াত আগে। আর ৪৮:১৫ চেনা এক চরিত্র নিয়ে সতর্ক করে: সফরের সময় নেই, ফসলের সময় হাজির, আর কথাটা শুনলে অভিমান।" }
        ]
      }
    ]
  },
  "ridwan": {
    "sections": [
      {
        "h": { "en": "A Camp Waiting on One Man", "bn": "একজনের অপেক্ষায় বসা শিবির" },
        "p": [
          { "en": "In Dhul-Qa'dah of 6 AH, early in 628 CE, the Prophet ﷺ came toward Makkah in ihram with garlanded sacrificial camels, announcing an umrah and not a campaign. Quraysh stopped him, and he camped at Hudaybiyyah on the edge of the sacred precinct. The treaty signed there has its own page; this is the hour before it, when nothing had been settled.",
            "bn": "ছয় হিজরির জিলকদে, অর্থাৎ ৬২৮ সালের গোড়ায়, নবী ﷺ ইহরাম বেঁধে, গলায় মালা পরানো কোরবানির উট সঙ্গে নিয়ে মক্কার দিকে আসেন; ঘোষণা ছিল উমরার, অভিযানের নয়। কুরাইশ পথ আটকায়, আর তিনি হারামের সীমানার কিনারে হুদায়বিয়ায় শিবির ফেলেন। সেখানকার সন্ধির নিজস্ব পাতা আছে; এটি তার আগের প্রহর, যখন কিছুই ঠিক হয়নি।" },
          { "en": "He first sent Khirash ibn Umayyah al-Khuza'i (RA) into the city. Ibn Ishaq relates that Quraysh hamstrung his camel under him and would have killed the man had the Ahabish not stepped in. He then called Umar (RA), who declined the errand for a plain reason: his own clan in Makkah was too small to shield him. He named Uthman (RA) instead.",
            "bn": "প্রথমে তিনি শহরে পাঠান খিরাশ ইবনে উমাইয়া আল-খুজাই (রাঃ)-কে। ইবনে ইসহাক বলেন, কুরাইশ তাঁর নিচেই উটের পা কেটে দেয়, আর আহাবিশ এগিয়ে না এলে তারা লোকটিকেই মেরে ফেলত। এরপর তিনি ডাকেন উমর (রাঃ)-কে। উমর সোজা কারণ দেখিয়ে দায়িত্ব নিলেন না: মক্কায় তাঁর গোত্র এত ছোট যে তাঁকে আড়াল করতে পারবে না। তিনি বরং উসমান (রাঃ)-এর নাম বলেন।" }
        ]
      },
      {
        "h": { "en": "Called Under the Acacia", "bn": "কাঁটাগাছের নিচে ডাক" },
        "p": [
          { "en": "Uthman (RA) entered Makkah under the protection of Aban ibn Sa'id ibn al-As and delivered the message. Quraysh offered to let him make the circuit of the House by himself, and he refused to walk around it while the Messenger of Allah ﷺ was kept outside. Then he was held in the city, and word reached the camp that he had been killed.",
            "bn": "আবান ইবনে সাঈদ ইবনুল আসের হেফাজতে উসমান (রাঃ) মক্কায় ঢোকেন এবং বার্তা পৌঁছে দেন। কুরাইশ তাঁকে একা কাবা তাওয়াফের সুযোগ দিতে চাইল। তিনি অস্বীকার করলেন; আল্লাহর রাসূল ﷺ বাইরে আটকে থাকতে তিনি ঘরের চারপাশে ঘুরবেন না। এরপর তাঁকে শহরেই আটকে রাখা হয়, আর শিবিরে খবর পৌঁছায় যে তাঁকে মেরে ফেলা হয়েছে।" },
          { "en": "The Prophet ﷺ said they would not leave until they had fought them, and called for a pledge. He sat under a thorn tree, a samurah, and took the hands of the Muslims one at a time. Sahih al-Bukhari records that he then struck one of his own hands against the other and said that this one was for Uthman (RA).",
            "bn": "নবী ﷺ বললেন, ওদের মোকাবিলা না করে তাঁরা এখান থেকে নড়বেন না, আর বায়আতের ডাক দিলেন। তিনি সামুরা নামের কাঁটাগাছের নিচে বসলেন এবং একজন একজন করে মুসলিমদের হাত নিলেন। সহিহ বুখারিতে আছে, শেষে তিনি নিজের এক হাত অন্য হাতের উপর চাপড়ে বললেন, এটি উসমান (রাঃ)-এর পক্ষ থেকে।" }
        ]
      },
      {
        "h": { "en": "Al-Fath Names the Tree", "bn": "সুরা ফাতহ গাছটির কথা বলে" },
        "p": [
          { "en": "48:18 is the verse the card carries. Allah was pleased with the believers when they pledged to you under the tree; He knew what was in their hearts, sent tranquillity down upon them, and rewarded them with a near conquest. The pleasure is stated as finished business, in the past tense, over one specific act by a countable group of people.",
            "bn": "কার্ডে যে আয়াতটি আছে, তা ৪৮:১৮। মুমিনদের প্রতি আল্লাহ সন্তুষ্ট হলেন, যখন তারা গাছের নিচে তোমার কাছে বায়আত করল; তিনি জানতেন তাদের অন্তরে কী আছে, তাই তাদের উপর প্রশান্তি নামালেন আর পুরস্কার দিলেন আসন্ন এক বিজয়। সন্তুষ্টিটা বলা হয়েছে শেষ হয়ে যাওয়া কাজ হিসেবে, অতীত কালে, গোনা যায় এমন কিছু মানুষের একটি নির্দিষ্ট কাজের উপর।" },
          { "en": "48:10 sets the terms of any pledge at all: those who pledge to you are pledging to Allah, the hand of Allah is over their hands, and whoever breaks his word breaks it against himself. 48:4 names the tranquillity that was sent down. 9:100 places the foremost of the Muhajirun and the Ansar among those with whom Allah is pleased and who are pleased with Him.",
            "bn": "যেকোনো বায়আতের শর্ত ঠিক করে দেয় ৪৮:১০: যারা তোমার কাছে বায়আত করে তারা আসলে আল্লাহর কাছেই করে, তাদের হাতের উপর আল্লাহর হাত, আর যে ওয়াদা ভাঙে সে নিজের ক্ষতিই করে। যে প্রশান্তি নেমেছিল, ৪৮:৪ তার নাম ধরে বলে। ৯:১০০ মুহাজির ও আনসারদের অগ্রণীদের সেই দলে রাখে যাদের প্রতি আল্লাহ সন্তুষ্ট আর যারা আল্লাহর প্রতি সন্তুষ্ট।" }
        ]
      },
      {
        "h": { "en": "What Exactly Was Pledged", "bn": "শপথটা ঠিক কীসের উপর" },
        "p": [
          { "en": "The Sahihs keep two answers to that question and the difference is worth keeping too. Sahih Muslim 1856 has Jabir (RA) saying that they pledged not to flee, and that they did not pledge on death. Sahih al-Bukhari records Salamah ibn al-Akwa (RA) answering the same question with a single word: on death. Both men were standing there.",
            "bn": "এই প্রশ্নের দুটি জবাব সহিহ কিতাবগুলো রেখে দিয়েছে, আর পার্থক্যটাও রাখার মতো। সহিহ মুসলিম ১৮৫৬-এ জাবির (রাঃ) বলেন, তাঁরা বায়আত করেছিলেন পালাবেন না বলে, মৃত্যুর উপর নয়। সহিহ বুখারিতে সালামা ইবনুল আকওয়া (রাঃ) একই প্রশ্নের জবাব দেন এক কথায়: মৃত্যুর উপর। দুজনই সেদিন সেখানে দাঁড়িয়ে ছিলেন।" },
          { "en": "Jabir (RA) also gives the count in Sahih al-Bukhari 4154, fourteen hundred, while other reports give fifteen hundred and Ibn Ishaq settles at about fourteen hundred. Jabir (RA) says only one man kept out of it, al-Jadd ibn Qays, hiding behind the belly of his camel. Sahih Muslim 2496 has the Prophet ﷺ telling Hafsah (RA) that none who pledged under the tree will enter the Fire, if Allah wills.",
            "bn": "সংখ্যাটাও জাবির (রাঃ) দেন, সহিহ বুখারি ৪১৫৪-এ: চৌদ্দশ। অন্য বর্ণনায় পনেরোশ আসে, আর ইবনে ইসহাক প্রায় চৌদ্দশতেই থিতু হন। জাবির (রাঃ) বলেন, একজনই কেবল সরে ছিলেন, জাদ ইবনে কায়স, উটের পেটের আড়ালে লুকিয়ে। সহিহ মুসলিম ২৪৯৬-এ নবী ﷺ হাফসা (রাঃ)-কে বলেন, গাছের নিচে যারা বায়আত করেছে তাদের কেউ জাহান্নামে যাবে না, আল্লাহ চাইলে।" }
        ]
      },
      {
        "h": { "en": "The Envoy and the Absentee", "bn": "দূত আর অনুপস্থিত জন" },
        "p": [
          { "en": "Uthman (RA) is the reason the pledge was called, and the one man counted in it who was not there to give it. Umar (RA) turned the errand down for a sober reason and named someone better placed, which is a form of courage people rarely credit. Both of them have their own articles in this app, and Uthman's (RA) carries this day.",
            "bn": "বায়আতের ডাক এসেছিল উসমান (রাঃ)-এর কারণেই, আর তিনিই সেই একজন যিনি সেখানে না থেকেও এর ভেতরে গোনা হলেন। উমর (রাঃ) ঠান্ডা মাথায় কারণ দেখিয়ে দায়িত্ব নেননি এবং আরও উপযুক্ত একজনের নাম বলেছেন; এ-ও এক ধরনের সাহস, যার কদর মানুষ কমই করে। দুজনেরই নিজস্ব লেখা এই অ্যাপে আছে, আর উসমান (রাঃ)-এর লেখায় এই দিনটির কথা আছে।" },
          { "en": "Jabir (RA) and Salamah ibn al-Akwa (RA) are the two who carried the day into the books, and they remembered its wording differently without either being doubted for it. Al-Jadd ibn Qays hid behind a camel and is remembered for that alone; the narration says nothing worse about him, and neither should anyone reading it now.",
            "bn": "দিনটিকে কিতাবে তুলে এনেছেন জাবির (রাঃ) আর সালামা ইবনুল আকওয়া (রাঃ)। শপথের ভাষা তাঁরা আলাদা মনে রেখেছেন, তবু কারও বর্ণনা নিয়ে সন্দেহ করা হয়নি। জাদ ইবনে কায়স উটের আড়ালে লুকিয়েছিলেন, আর তাঁকে ওইটুকুর জন্যই মনে রাখা হয়; বর্ণনা তাঁর সম্পর্কে এর বেশি কিছু বলে না, পাঠকেরও বলা উচিত নয়।" }
        ]
      },
      {
        "h": { "en": "A Rank the Community Kept", "bn": "যে মর্যাদা সমাজ ধরে রাখল" },
        "p": [
          { "en": "From that afternoon the Companions of the Tree were a named group. Uthman (RA) came back alive, Suhayl ibn Amr came out to negotiate, and the treaty was written; the pledge is what let men accept humbling clauses without it looking like flight, because they had already decided the harder question. The near conquest promised in 48:18 is generally read as Khaybar.",
            "bn": "ওই বিকেল থেকেই গাছের সাথিরা একটি নাম-পাওয়া দল। উসমান (রাঃ) জীবিত ফিরে এলেন, সুহাইল ইবনে আমর আলোচনায় বেরিয়ে এলেন, আর সন্ধি লেখা হলো। বায়আতই সেই জিনিস যা মানুষকে অপমানজনক শর্ত মেনে নিতে দিল, অথচ তা পালানো মনে হলো না; কারণ কঠিন প্রশ্নটার ফয়সালা তাঁরা আগেই করে ফেলেছিলেন। ৪৮:১৮ যে আসন্ন বিজয়ের ওয়াদা দেয়, সাধারণত তাকে খায়বার বলেই পড়া হয়।" },
          { "en": "The pledge then became a legal fact. When the army went out for Khaybar, 48:15 refused the men who had stayed behind any share in it, on the ground that they had not been at the tree. Later jurists took the day as the pattern for bay'ah to a leader, and they quote 48:10 on what an oath weighs once it is given.",
            "bn": "এরপর বায়আতটা আইনি বাস্তবতা হয়ে গেল। খায়বারের দিকে বাহিনী রওনা হলে ৪৮:১৫ পিছিয়ে থাকা লোকদের তাতে কোনো ভাগ দিতে অস্বীকার করে, কারণ তারা গাছের নিচে ছিল না। পরবর্তী ফকিহরা এই দিনটিকেই নেতার হাতে বায়আতের নমুনা ধরেছেন, আর শপথ একবার দেওয়া হলে তার ওজন কত, সে প্রসঙ্গে ৪৮:১০ আয়াতই উদ্ধৃত করেন।" }
        ]
      },
      {
        "h": { "en": "The Tree Nobody Could Find", "bn": "যে গাছ কেউ খুঁজে পায়নি" },
        "p": [
          { "en": "Sahih al-Bukhari carries a report from Sa'id ibn al-Musayyib, from his father, who was among those who gave the pledge, that when they came back the following year they had forgotten which tree it was and could not agree on it. Ibn Sa'd and later writers relate that Umar (RA) had a tree people had begun visiting cut down.",
            "bn": "সহিহ বুখারিতে সাঈদ ইবনুল মুসাইয়িব তাঁর বাবার সূত্রে বর্ণনা করেন, বাবা নিজেই বায়আতকারীদের একজন ছিলেন। পরের বছর ফিরে এসে তাঁরা ভুলে গিয়েছিলেন কোনটি সেই গাছ, আর একমতও হতে পারেননি। ইবনে সা’দ ও পরের লেখকেরা জানান, লোকজন যে গাছটিতে যাতায়াত শুরু করেছিল, উমর (রাঃ) তা কেটে ফেলান।" },
          { "en": "The point outlived its own landmark, which is the useful part. Allah praised a pledge, not a piece of wood, and the community that lost the tree kept the verse. Nothing in the sirah asks a believer to find the spot; 48:18 asks what was in the hearts of the people standing on it, which is a question that travels.",
            "bn": "চিহ্নটা হারিয়ে গেলেও কথাটা টিকে গেছে, আর কাজের অংশ সেটাই। আল্লাহ প্রশংসা করেছেন একটি বায়আতের, কাঠের টুকরার নয়; গাছ হারিয়ে ফেলা সমাজ আয়াতটি ধরে রেখেছে। সিরাত কোথাও বলে না জায়গাটা খুঁজে বের করতে। ৪৮:১৮ জানতে চায় সেখানে দাঁড়ানো মানুষগুলোর অন্তরে কী ছিল, আর এ প্রশ্ন সব জায়গায় সঙ্গে যায়।" }
        ]
      },
      {
        "h": { "en": "Standing Before You Know", "bn": "না জেনেই দাঁড়ানো" },
        "p": [
          { "en": "The pledge was given on a false report. Uthman (RA) was alive the whole time, and the men taking the Prophet's ﷺ hand did not know it. 48:18 rests the pleasure of Allah on what was in their hearts at that moment, not on how the news turned out. What you commit to on bad information measures what you would do on good.",
            "bn": "বায়আতটা হয়েছিল একটি ভুল খবরের উপর দাঁড়িয়ে। উসমান (রাঃ) সারাক্ষণই বেঁচে ছিলেন, আর নবী ﷺ-এর হাত ধরা লোকেরা তা জানতেন না। ৪৮:১৮ আল্লাহর সন্তুষ্টি রাখে ওই মুহূর্তে তাদের অন্তরে যা ছিল তার উপর, খবরটা শেষে কী দাঁড়াল তার উপর নয়। ভুল খবরের উপর দাঁড়িয়ে আপনি কী কথা দেন, তাতেই মাপা যায় সঠিক খবর হাতে থাকলে আপনি কী করতেন।" },
          { "en": "So keep the practical shape of it. Give your word to what you can actually hold, in front of someone who will hold you to it, and read 48:10 on whose loss it is when a word is broken. And notice what the two narrators agreed the pledge was about: not fleeing. Most obligations in a life are kept simply by not leaving.",
            "bn": "কাজের চেহারাটা তাই ধরে রাখুন। যতটা সত্যিই ধরে রাখতে পারবেন ততটুকুই কথা দিন, এমন কারও সামনে দিন যিনি আপনাকে তাতে ধরে রাখবেন, আর ওয়াদা ভাঙলে ক্ষতিটা কার, তা ৪৮:১০ আয়াতে পড়ে নিন। আর খেয়াল করুন, দুই বর্ণনাকারী যেটুকুতে একমত ছিলেন: পালানো চলবে না। জীবনের বেশির ভাগ দায়িত্ব আসলে না পালিয়েই রক্ষা হয়।" }
        ]
      }
    ]
  },
  "hunayn": {
    sections: [
      {
        h: { en: "Weeks After the Conquest", bn: "বিজয়ের কয়েক সপ্তাহের মধ্যেই" },
        p: [
          {
            en: "Makkah fell in Ramadan of the eighth year, 630 CE, and the army had not dispersed when word came that Hawazin were mustering under Malik ibn Awf an-Nasri, with Thaqif of Ta'if beside them. The Prophet ﷺ marched in Shawwal. Ibn Ishaq counts twelve thousand: the ten thousand who had taken the city, and two thousand Makkans who had been Muslim a fortnight.",
            bn: "অষ্টম হিজরির রমজানে মক্কা বিজয় হলো, ৬৩০ খ্রিস্টাব্দ। বাহিনী তখনো ছত্রভঙ্গ হয়নি, এর মধ্যেই খবর এল হাওয়াজিন জড়ো হচ্ছে মালিক ইবনে আউফ আন-নাসরির নেতৃত্বে, সঙ্গে তায়েফের সাকিফ। শাওয়াল মাসে নবী ﷺ বেরিয়ে পড়লেন। ইবনে ইসহাকের হিসাবে বাহিনী বারো হাজার। এর দশ হাজার মক্কা জয় করা লোক, আর দুই হাজার মক্কাবাসী, যাঁরা মুসলিম হয়েছেন সবে পনেরো দিন।"
          },
          {
            en: "Hunayn is a valley on the road east toward Ta'if, narrow where it climbs. Malik had put the herds, women and children of Hawazin behind his fighters so no man could run without abandoning his family. Ibn Ishaq relates that Durayd ibn as-Simmah, an aged war leader carried in a litter, warned him a routed man is not held back by his flocks, and was overruled.",
            bn: "হুনাইন তায়েফের দিকে যাওয়া পথের উপত্যকা, উপরের দিকে সরু। মালিক যোদ্ধাদের পেছনে হাওয়াজিনের পশুপাল, নারী ও শিশুদের এনে বসিয়েছিলেন, যাতে পালাতে হলে কাউকে নিজের পরিবার ফেলে যেতে হয়। ইবনে ইসহাক লিখেছেন, পালকিতে বয়ে আনা বৃদ্ধ যুদ্ধবিশারদ দুরাইদ ইবনে সিম্মা তাঁকে ধরিয়ে দিয়েছিলেন, ভয় পেয়ে পালানো লোককে পশুপাল দিয়ে আটকানো যায় না। তাঁর কথা কেউ শুনল না।"
          }
        ]
      },
      {
        h: { en: "Broken in the Narrow Ground", bn: "সরু গিরিপথে ভেঙে পড়া" },
        p: [
          {
            en: "The column entered the valley in the last dark before dawn. Hawazin bowmen were waiting in the side gullies and the volley came at once. The vanguard broke, and the rout ran back through the army until, in Ibn Ishaq's telling, men were streaming past the Prophet ﷺ without stopping. An hour earlier the number had been a comfort.",
            bn: "ভোরের আগের শেষ অন্ধকারে বাহিনী উপত্যকায় ঢুকল। পাশের খাদগুলোতে ওত পেতে ছিল হাওয়াজিনের তিরন্দাজরা, আর তিরের ঝাঁক এল একসঙ্গে। সামনের সারি ভেঙে গেল, আর সেই ভাঙন পেছনের দিকে ছুটতে ছুটতে গোটা বাহিনীকে টেনে নিল। ইবনে ইসহাকের বর্ণনায় লোকজন নবী ﷺ-এর পাশ দিয়ে ছুটে যাচ্ছিল, থামছিল না। ঘণ্টাখানেক আগে ওই সংখ্যাটাই ছিল ভরসা।"
          },
          {
            en: "He turned his white mule toward the enemy, al-Abbas (RA) at the bridle and Abu Sufyan ibn al-Harith (RA) at the stirrup, calling out that he was the Prophet, no lie, the son of Abd al-Muttalib. Al-Abbas had a carrying voice and was told to call the people. He cried out to the companions of the acacia tree, the men of the pledge at Hudaybiyyah, and they turned back.",
            bn: "তিনি সাদা খচ্চরটিকে শত্রুর দিকে ঘোরালেন। আল-আব্বাস (রাঃ) লাগাম ধরে আছেন, আবু সুফিয়ান ইবনুল হারিস (রাঃ) ধরে আছেন রেকাব। তিনি হাঁক দিলেন, তিনিই নবী, এতে মিথ্যা নেই, তিনি আবদুল মুত্তালিবের সন্তান। আল-আব্বাসের গলা দূর পর্যন্ত পৌঁছাত, তাঁকেই বলা হলো লোকদের ডাকতে। তিনি ডাকলেন বাবলা গাছের সাথিদের, হুদায়বিয়ায় যাঁরা বাইআত করেছিলেন। ডাক শুনে তাঁরা ফিরে দাঁড়ালেন।"
          },
          {
            en: "The Hawazin line broke and their camp was taken whole; the sirah names only a handful of Muslim dead. Awtas and the siege of Ta'if followed. Captives and property were held at al-Ji'ranah, where Ibn Ishaq's figures are his own: six thousand captives, twenty-four thousand camels. When a Hawazin delegation came, the Prophet ﷺ made them choose between their families and their goods, and they chose their families.",
            bn: "এবার ভাঙল হাওয়াজিনের সারি, আর গোটা শিবিরটাই হাতে এল। সিরাত মুসলিম শহিদদের নাম দেয় হাতেগোনা কয়েকজনের। এরপর আওতাসের লড়াই, তারপর তায়েফ অবরোধ। বন্দি আর মালপত্র রাখা হলো জিইররানায়। ইবনে ইসহাকের দেওয়া সংখ্যাগুলো তাঁরই হিসাব: ছয় হাজার বন্দি, চব্বিশ হাজার উট। হাওয়াজিনের প্রতিনিধিদল এলে নবী ﷺ তাদের বেছে নিতে বললেন, পরিবার না মালপত্র। তারা পরিবারকেই বেছে নিল।"
          }
        ]
      },
      {
        h: { en: "The Valley the Quran Names", bn: "কুরআন যে উপত্যকার নাম ধরে ডাকে" },
        p: [
          {
            en: "9:25 names the place. With Badr in 3:123, Hunayn is one of only two battlefields the Quran calls by name. Allah has already given you victory in many regions, it says, and on the day of Hunayn, when your great number pleased you but availed you nothing, and the earth was confining for you despite its vastness. The rebuke falls on the pleasure, not the count.",
            bn: "৯:২৫ আয়াত জায়গাটার নাম ধরেই ডাকে। ৩:১২৩ আয়াতের বদর আর এই হুনাইন, নাম ধরে ডাকা যুদ্ধক্ষেত্র কুরআনে এ দুটিই। আয়াতটি বলছে, আল্লাহ বহু জায়গায় তোমাদের সাহায্য করেছেন, আর হুনাইনের দিনও, যেদিন তোমাদের সংখ্যার আধিক্য তোমাদের গর্বে মাতোয়ারা করেছিল অথচ কোনো কাজে আসেনি; সুপ্রশস্ত হওয়া সত্ত্বেও জমিন সংকীর্ণ হয়ে এসেছিল। ভর্ৎসনাটা সংখ্যার উপর নয়, সংখ্যা নিয়ে করা গর্বের উপর।"
          },
          {
            en: "9:26 gives what followed: Allah sent down His tranquility upon His Messenger and upon the believers, and sent soldiers whom you did not see. The verse's order is the morning's order, relief resting first on the one who never moved and then on the men who came back to him. 9:27 leaves a door open behind the defeated, and the Hawazin delegation walked through it.",
            bn: "৯:২৬ আয়াত বলছে এরপর কী হলো। আল্লাহ তাঁর রাসূলের উপর ও মুমিনদের উপর প্রশান্তি নাযিল করলেন, আর পাঠালেন এমন বাহিনী যা তোমরা দেখতে পাওনি। আয়াতের ক্রমটাই সেই সকালের ক্রম: প্রশান্তি আগে নামল যিনি এক পা নড়েননি তাঁর উপর, তারপর যাঁরা ফিরে এলেন তাঁদের উপর। ৯:২৭ আয়াত পরাজিতদের পেছনে দরজাটা খোলা রাখে, আর হাওয়াজিনের প্রতিনিধিদল সেই দরজা দিয়েই ঢুকেছিল।"
          }
        ]
      },
      {
        h: { en: "Two Reports From the Day", bn: "সেদিনের দুটি বর্ণনা" },
        p: [
          {
            en: "Sahih Muslim 1775 preserves al-Abbas's (RA) own account. He and Abu Sufyan ibn al-Harith (RA) stuck to the Messenger of Allah ﷺ and did not leave him; he was told to call out to the companions of the acacia tree, and did; and when the fighting closed in, the Prophet ﷺ took a handful of pebbles, threw them toward the enemy's faces, and said: they are defeated, by the Lord of Muhammad.",
            bn: "সহিহ মুসলিম ১৭৭৫-এ আছে আল-আব্বাস (রাঃ)-এর নিজের বিবরণ। তিনি বলছেন, তিনি আর আবু সুফিয়ান ইবনুল হারিস (রাঃ) আল্লাহর রাসূল ﷺ-এর সঙ্গে লেগে ছিলেন, এক মুহূর্তও সরেননি। তাঁকে বলা হলো বাবলা গাছের সাথিদের ডাকতে, তিনি ডাকলেন। আর লড়াই যখন গায়ের উপর এসে পড়ল, নবী ﷺ এক মুঠো কঙ্কর তুলে শত্রুর মুখের দিকে ছুড়ে বললেন, মুহাম্মদের রবের কসম, তারা পরাজিত।"
          },
          {
            en: "The spoils were divided, hundreds of camels going to Makkan chiefs whose Islam was days old. Bukhari and Muslim carry Anas's (RA) report of what the Ansar said among themselves: Quraysh are given, and our swords are still wet. The Prophet ﷺ gathered them apart and asked whether they were not content that the people go home with sheep and camels while they went home with the Messenger of Allah ﷺ.",
            bn: "গনিমত ভাগ হলো, আর কয়েকশ উট গেল মক্কার সেই সরদারদের কাছে যাঁদের ইসলাম মাত্র কয়েক দিনের। আনাস (রাঃ) থেকে বুখারি ও মুসলিম দুই জায়গাতেই আছে আনসাররা নিজেদের মধ্যে কী বলাবলি করেছিলেন: কুরাইশকে দেওয়া হচ্ছে, অথচ আমাদের তলোয়ার এখনো ভেজা। নবী ﷺ কেবল তাঁদের আলাদা ডেকে জিজ্ঞেস করলেন, তোমরা কি এতে খুশি নও যে লোকেরা ছাগল-উট নিয়ে ঘরে ফিরবে আর তোমরা ফিরবে আল্লাহর রাসূল ﷺ-কে নিয়ে? তাঁরা কেঁদেছিলেন, দাড়ি ভিজে গিয়েছিল।"
          }
        ]
      },
      {
        h: { en: "Those Who Did Not Run", bn: "যাঁরা পালাননি" },
        p: [
          {
            en: "Al-Abbas ibn Abd al-Muttalib (RA) was the Prophet's ﷺ uncle in Makkah before he was his Companion, and what he gave at Hunayn was a voice loud enough to reach a fleeing army. Abu Sufyan ibn al-Harith (RA), a cousin who had attacked him in verse for nearly twenty years and had accepted Islam only weeks earlier, was the man holding the stirrup.",
            bn: "আল-আব্বাস ইবনে আবদুল মুত্তালিব (রাঃ) সাহাবি হওয়ার আগে মক্কায় ছিলেন নবী ﷺ-এর চাচা। হুনাইনে তিনি যা দিলেন তা একটা গলা, যা পালিয়ে যাওয়া বাহিনীর কানে পৌঁছায়। আবু সুফিয়ান ইবনুল হারিস (রাঃ) সেই চাচাতো ভাই, যিনি প্রায় বিশ বছর কবিতায় তাঁকে আক্রমণ করেছেন আর ইসলাম গ্রহণ করেছেন মাত্র কয়েক সপ্তাহ আগে। রেকাব ধরে ছিলেন তিনিই।"
          },
          {
            en: "Sahih Muslim 1809 puts Umm Sulaym (RA) on that field, pregnant, with a dagger; asked about it, she said that if an idolater came near she would open his belly, and the Prophet ﷺ laughed. Malik ibn Awf (RA), who had lost the battle he designed, came afterwards and accepted Islam, and Ibn Ishaq says he was set over those of his people who did the same.",
            bn: "সহিহ মুসলিম ১৮০৯ সেই ময়দানে দাঁড় করায় উম্মে সুলাইম (রাঃ)-কে, গর্ভবতী অবস্থায়, হাতে ছোরা। নবী ﷺ জিজ্ঞেস করলে তিনি বললেন, কোনো মুশরিক কাছে এলে পেট চিরে দেবেন। জবাবটা শুনে নবী ﷺ হেসে ফেললেন। যে যুদ্ধের নকশা নিজে কেটেছিলেন সেই যুদ্ধ হেরে মালিক ইবনে আউফ (রাঃ) পরে এসে ইসলাম গ্রহণ করেন। ইবনে ইসহাক বলছেন, তাঁর গোত্রের যাঁরা একই পথ নিলেন, তাঁদের উপর তাঁকেই বসানো হয়।"
          }
        ]
      },
      {
        h: { en: "What the Rout Left Behind", bn: "সেই পলায়ন যা রেখে গেল" },
        p: [
          {
            en: "Hunayn was the last time a pagan Arab coalition took the field against Madinah. Men who had handed over Makkah a month earlier now fought beside the army that took it, and the camels given to their chiefs were the price of binding them in. 9:60 lists, among the eight uses of zakat, those whose hearts are to be brought together; the jurists have read al-Ji'ranah as that category in practice.",
            bn: "হুনাইনের পর আরবের কোনো মুশরিক জোট আর মদিনার বিরুদ্ধে ময়দানে নামেনি। এক মাস আগে যাঁরা মক্কা তুলে দিয়েছিলেন, তাঁরাই এবার লড়লেন সেই বাহিনীর পাশে। তাঁদের সরদারদের যে উটগুলো দেওয়া হলো, সেটাই ছিল তাঁদের বেঁধে নেওয়ার দাম। ৯:৬০ আয়াতে যাকাতের আট খাতের একটি হলো যাদের মন জয় করা উদ্দেশ্য। ফকিহরা তখন থেকেই জিইররানার ওই দানকে সেই খাতের বাস্তব নমুনা ধরে আসছেন।"
          },
          {
            en: "The other legacy is the sentence the Ansar were given. Political generosity had gone one way and the religion another, and the difference was said out loud in front of everybody. Ta'if held out that season and sent its own delegation the year after. Within a year the road from this valley ran into the season when tribe after tribe came to Madinah.",
            bn: "আরেকটি উত্তরাধিকার সেই কথাটি, যা আনসারদের বলা হয়েছিল। রাজনৈতিক উদারতা গেছে এক দিকে, দ্বীন গেছে আরেক দিকে, আর তফাতটা সবার সামনে মুখ ফুটে বলে দেওয়া হলো। তায়েফ সেই মৌসুমে টিকে গেল, তবে পরের বছর নিজেই প্রতিনিধিদল পাঠাল। বছর ঘুরতে না ঘুরতে এই উপত্যকার পথ গিয়ে মিশল সেই মৌসুমে, যখন একের পর এক গোত্র মদিনায় আসতে লাগল।"
          }
        ]
      },
      {
        h: { en: "Counting Your Own Strength", bn: "নিজের জোর গোনা" },
        p: [
          {
            en: "The verse does not say twelve thousand men were a mistake. It says the pleasure taken in the number was. The usable question is what a believer quietly leans on once he has enough of something: savings that make trust in Allah feel theoretical, a qualification that makes du'a feel optional, a majority that makes an argument feel already won. 9:25 describes the hour preparation stops being a means.",
            bn: "আয়াতটি বলছে না যে বারো হাজার লোক জড়ো করা ভুল ছিল। বলছে, সংখ্যা নিয়ে যে গর্ব, সেটাই ভুল ছিল। কাজের প্রশ্নটা হলো, কোনো জিনিস যথেষ্ট হয়ে গেলে মুমিন চুপচাপ কীসের উপর ভর দিয়ে বসে। জমানো টাকা, যার পর আল্লাহর উপর ভরসা কথার কথা মনে হয়। সনদ, যার পর দোয়াকে বাড়তি মনে হয়। সংখ্যাগরিষ্ঠতা, যার পর তর্কটা আগেই জেতা মনে হয়। ৯:২৫ আয়াত ধরিয়ে দেয় সেই মুহূর্তটি, যখন প্রস্তুতি আর উপায় থাকে না।"
          },
          {
            en: "The second thing to carry is the recovery. What 9:26 records came down on men who had already run and then heard a voice and turned round. Nobody at Hunayn was told his morning did not count; they were told tranquility came afterwards. A day that began badly is not finished, and the distance back is one call you decide to answer.",
            bn: "দ্বিতীয় যে জিনিসটা সঙ্গে নেওয়ার, তা ফিরে আসা। ৯:২৬ আয়াত যাঁদের কথা বলছে তাঁরা একবার পালিয়েই গিয়েছিলেন, তারপর ডাক শুনে ঘুরে দাঁড়িয়েছেন। হুনাইনে কাউকে বলা হয়নি যে তার সকালটা ধরা হবে না; বলা হয়েছে, প্রশান্তি নেমেছে তার পরে। যে দিনটা খারাপভাবে শুরু হয়েছে সেটা এখনো শেষ হয়ে যায়নি, আর ফেরার দূরত্ব একটা ডাকে সাড়া দেওয়ার সমান।"
          }
        ]
      }
    ]
  },
  "tabuk": {
    sections: [
      {
        h: { en: "A March Announced in Advance", bn: "গন্তব্য আগেই বলে দেওয়া অভিযান" },
        p: [
          {
            en: "Tabuk came in Rajab of the ninth year, 630 CE, about nine months after Hunayn. Reports had reached Madinah of Byzantine forces gathering in Syria, and a small Muslim column had met Byzantine troops at Mu'tah the year before. The Prophet ﷺ normally masked his destination. This time he named it, because the road ran several hundred miles north and nobody could be marched into it unprepared.",
            bn: "তাবুক অভিযান নবম হিজরির রজব মাসে, ৬৩০ খ্রিস্টাব্দ, হুনাইনের প্রায় নয় মাস পর। মদিনায় খবর এসেছিল, সিরিয়ায় রোমান বাহিনী জড়ো হচ্ছে; আগের বছর মুতায় ছোট একটি মুসলিম বাহিনী রোমান সৈন্যদের মুখোমুখি হয়েছিল। নবী ﷺ সাধারণত গন্তব্য গোপন রাখতেন। এবার তিনি নাম ধরে বলে দিলেন, কারণ পথ উত্তরে কয়েকশ মাইল, আর না জানিয়ে কাউকে ওই পথে নামানো যায় না।"
          },
          {
            en: "It was the hottest stretch of the year, a season of drought, and the dates were ripe on the trees. Men were being asked to walk away from a harvest for a march that promised no plunder. The sirah calls the force jaysh al-usrah, the army of hardship, and 9:117 uses the same word for the moment: those who followed him in the hour of difficulty.",
            bn: "বছরের সবচেয়ে গরম সময়, তার উপর খরার মৌসুম, আর গাছে গাছে খেজুর পেকে ঝুলছে। মানুষকে বলা হচ্ছে ফসল ফেলে রেখে এমন এক অভিযানে বেরোতে, যাতে গনিমতের কোনো আশা নেই। সিরাতে এই বাহিনীর নাম জাইশুল উসরা, কষ্টের বাহিনী। ৯:১১৭ আয়াত সেই মুহূর্তটিকে ধরে একই শব্দে, সংকটকালে যাঁরা তাঁকে অনুসরণ করেছিল।"
          }
        ]
      },
      {
        h: { en: "The Army of Hardship", bn: "কষ্টের বাহিনী" },
        p: [
          {
            en: "The call went out for contributions. Uthman ibn Affan (RA) equipped a large part of the army with mounts, saddles and provisions; the saying that nothing he did after that day would harm him is reported with a criticised chain. At-Tirmidhi records that Umar (RA) brought half his wealth and Abu Bakr (RA) brought all of it, saying he had left his family Allah and His Messenger.",
            bn: "দান দেওয়ার আহ্বান গেল। উসমান ইবনে আফফান (রাঃ) বাহিনীর বড় অংশের জন্য বাহন, জিন ও রসদ জোগালেন। সেদিনের পর তাঁর কোনো আমল তাঁর ক্ষতি করবে না, এই কথাটি বর্ণিত আছে, তবে তার সনদ নিয়ে সমালোচনা আছে। তিরমিজিতে আছে, উমর (রাঃ) নিজের অর্ধেক সম্পদ এনেছিলেন আর আবু বকর (রাঃ) এনেছিলেন সবটুকু, বলেছিলেন পরিবারের জন্য রেখে এসেছেন আল্লাহ ও তাঁর রাসূলকে।"
          },
          {
            en: "The sirah writers put the force at about thirty thousand, the largest the Prophet ﷺ ever led, and that figure is theirs rather than a narration's. Mounts were short, so men rode a single camel by turns, and the historians describe a stretch of road where the water gave out. The hardship in the army's name was not a figure of speech.",
            bn: "সিরাতকারদের হিসাবে বাহিনী প্রায় ত্রিশ হাজার, নবী ﷺ-এর নেতৃত্বে সবচেয়ে বড় বাহিনী। সংখ্যাটি তাঁদেরই হিসাব, কোনো হাদিসের নয়। বাহন কম পড়েছিল, তাই একটি উটে কয়েকজন পালা করে চড়েছেন। ঐতিহাসিকরা পথের এমন এক অংশের কথা লিখেছেন যেখানে পানি ফুরিয়ে গিয়েছিল। বাহিনীর নামে যে কষ্টের কথা আছে, তা কথার কথা ছিল না।"
          },
          {
            en: "No Byzantine army appeared. Ibn Ishaq says the halt lasted rather more than ten nights, and in it Yuhannah ibn Ru'bah of Aylah came in and took terms, as did the people of Jarba and Adhruh, while Khalid ibn al-Walid (RA) was sent against Dumat al-Jandal and brought back its chief Ukaydir. On the return the mosque of harm near Quba, which 9:107 condemns, was pulled down.",
            bn: "রোমান বাহিনী শেষ পর্যন্ত আসেনি। ইবনে ইসহাক বলছেন, তাবুকে অবস্থান ছিল দশ রাতের কিছু বেশি। সেখানেই আয়লার ইউহান্না ইবনে রুবা এসে সন্ধি করলেন, একইভাবে জারবা ও আজরুহর লোকেরাও। খালিদ ইবনে ওয়ালিদ (রাঃ)-কে পাঠানো হলো দুমাতুল জান্দালে, তিনি সেখানকার সরদার উকায়দিরকে ধরে আনলেন। ফেরার পথে কুবার কাছের সেই ক্ষতিসাধনের মসজিদ ভেঙে ফেলা হলো, যার কথা ৯:১০৭ আয়াতে আছে।"
          }
        ]
      },
      {
        h: { en: "The Surah That Exposed Them", bn: "যে সূরা পর্দা সরিয়ে দিল" },
        p: [
          {
            en: "Surah at-Tawbah is this expedition's own commentary, and the early commentators knew it by the nickname al-Fadihah, the exposer. 9:38 asks the believers what is the matter with them that when they are told to go forth they cling heavily to the earth. 9:41 answers with a command that leaves no gradation: go forth, light or heavy, and strive with your wealth and your lives.",
            bn: "সূরা আত-তাওবাই এই অভিযানের নিজস্ব ভাষ্য, আর প্রাচীন মুফাসসিররা সূরাটিকে ডাকতেন আল-ফাদিহা, অর্থাৎ পর্দা সরিয়ে দেয় যে। ৯:৩৮ আয়াত মুমিনদের জিজ্ঞেস করছে, তোমাদের হয়েছে কী, বেরিয়ে পড়তে বলা হলে তোমরা মাটি কামড়ে ধরো? ৯:৪১ আয়াত জবাব দেয় এমন হুকুমে যেখানে ওজরের কোনো ধাপ অবশিষ্ট থাকে না: বেরিয়ে পড়ো, অবস্থা হালকাই হোক আর ভারীই হোক, আর মাল ও জান দিয়ে জিহাদ করো।"
          },
          {
            en: "9:42 says the journey was too far for some, and 9:81 quotes what was said at home, do not go forth in the heat, with the reply that Hell is hotter. Against that, 9:91 lifts all blame from the weak, the ill and those with nothing to spend, and 9:92 records men turning away with eyes overflowing because no mount could be found. The verse after 9:117 concerns three men, told separately.",
            bn: "৯:৪২ আয়াত বলছে, কারও কারও কাছে পথটাই বড় বেশি দীর্ঘ ঠেকেছিল। ৯:৮১ আয়াত ঘরে বসে বলা কথাটি তুলে ধরে, গরমের মধ্যে বেরিও না, আর জবাব দেয়, জাহান্নামের আগুন তাপে আরও প্রচণ্ড। এর উল্টো দিকে ৯:৯১ আয়াত দুর্বল, অসুস্থ ও যাদের খরচ করার কিছু নেই তাদের উপর থেকে সব অভিযোগ তুলে নেয়। ৯:৯২ আয়াতে আছে সেই লোকেরা, বাহন না পেয়ে যাঁরা চোখ ভিজিয়ে ফিরে গিয়েছিলেন। ৯:১১৭ আয়াতের পরের আয়াতটি তিনজনকে নিয়ে, তাঁদের কথা আলাদা করে বলা আছে।"
          }
        ]
      },
      {
        h: { en: "Held Back by Excuse", bn: "ওজর যাঁদের আটকে রেখেছিল" },
        p: [
          {
            en: "Sahih al-Bukhari records from Anas ibn Malik (RA) that the Prophet ﷺ said of this campaign: there are men in Madinah who were with you at every step you took and every valley you crossed. They asked how that could be when the men were in Madinah, and he answered that they were in Madinah, and it was excuse that had held them back.",
            bn: "সহিহ বুখারিতে আনাস ইবনে মালিক (রাঃ) থেকে আছে, নবী ﷺ এই অভিযান নিয়ে বলেছেন, মদিনায় এমন কিছু লোক আছে, তোমরা যত পথ হেঁটেছ আর যত উপত্যকা পার হয়েছ, প্রতিটিতে তারা তোমাদের সঙ্গেই ছিল। সাহাবিরা জিজ্ঞেস করলেন, তারা তো মদিনায়। তিনি বললেন, হ্যাঁ, তারা মদিনাতেই; ওজর তাদের আটকে রেখেছে।"
          },
          {
            en: "Sahih Muslim keeps Mu'adh ibn Jabal's (RA) report of the road, which includes the joining of two prayers on the march and the arrival at the spring. The water was scooped by hand until it ran, and Mu'adh was told that if his life were long he would see this place filled with gardens. The reply looked past the expedition into a settled future.",
            bn: "সহিহ মুসলিমে রক্ষিত আছে মুয়ায ইবনে জাবাল (রাঃ)-এর পথের বিবরণ, যেখানে সফরে দুই ওয়াক্ত নামাজ একত্রে পড়ার কথা আছে, আর আছে ঝরনার কাছে পৌঁছানোর কথা। হাতে করে পানি তোলা হলো, তারপর ঝরনা বইতে লাগল। মুয়াযকে বলা হলো, হায়াত লম্বা হলে তিনি দেখবেন এই জায়গা বাগানে ভরে গেছে। জবাবটি অভিযানের সীমা ছাড়িয়ে থিতু হওয়া এক ভবিষ্যতের দিকে তাকিয়ে ছিল।"
          }
        ]
      },
      {
        h: { en: "Who Gave and Who Followed", bn: "কে দিলেন, কে পিছু নিলেন" },
        p: [
          {
            en: "Uthman ibn Affan (RA) paid for what the treasury could not; Tabuk is the clearest place where a man's whole share of the struggle was his wealth. Ali ibn Abi Talib (RA), left in charge of Madinah, rode after the army when talk reached him that he had been left behind as a burden. The Sahih collections carry the answer: he stood to the Prophet ﷺ as Harun (AS) stood to Musa (AS), except that there is no prophet after the Prophet ﷺ.",
            bn: "রাষ্ট্রীয় কোষাগার যা পারেনি, উসমান ইবনে আফফান (রাঃ) তা দিলেন। সিরাতে এটিই সবচেয়ে স্পষ্ট জায়গা যেখানে একজন মানুষের গোটা অংশগ্রহণই ছিল তাঁর সম্পদ। মদিনার দায়িত্বে রাখা হলো আলী ইবনে আবি তালিব (রাঃ)-কে। কথা উঠল, তাঁকে বোঝা মনে করে ফেলে রাখা হয়েছে; শুনে তিনি বাহিনীর পিছু নিলেন। সহিহ গ্রন্থগুলোতে তাঁকে দেওয়া জবাবটি আছে, মুসা (আঃ)-এর কাছে হারুন (আঃ) যেমন, নবী ﷺ-এর কাছে তিনিও তেমন, তবে নবী ﷺ-এর পরে আর কোনো নবী নেই।"
          },
          {
            en: "Abu Khaythamah (RA) had stayed behind, and Ibn Ishaq relates that he came home one hot day to shade, cool water and his wives, looked at it, said this was not fair, and rode until he caught the army at Tabuk. Ibn Ishaq also carries the account of Abu Dharr (RA), whose camel gave out and who shouldered his baggage and walked in alone. Neither report is in the Sahih collections.",
            bn: "আবু খায়সামা (রাঃ) পিছিয়ে ছিলেন। ইবনে ইসহাক লিখেছেন, গরমের এক দিনে ঘরে ফিরে তিনি পেলেন ছায়া, ঠান্ডা পানি আর স্ত্রীদের। কিছুক্ষণ তাকিয়ে থেকে বললেন, এ তো ইনসাফ হলো না। তারপর বেরিয়ে পড়ে তাবুকে গিয়ে বাহিনীর নাগাল পেলেন। ইবনে ইসহাক আবু যর (রাঃ)-এর কথাও এনেছেন, যাঁর উট পথে বসে পড়লে তিনি মালপত্র কাঁধে তুলে একা হেঁটে পৌঁছান। দুটি বিবরণের কোনোটিই সহিহ গ্রন্থে নেই।"
          }
        ]
      },
      {
        h: { en: "What the Last March Settled", bn: "শেষ অভিযান যা ঠিক করে দিল" },
        p: [
          {
            en: "Tabuk was the last expedition the Prophet ﷺ led in person. It fixed a northern frontier and set the pattern for how the border communities on it would be handled: Aylah, Jarba, Adhruh and Dumat al-Jandal kept their religion and their property under written terms and a tax. Within a decade the same instrument was in use across Syria and Iraq.",
            bn: "নবী ﷺ নিজে নেতৃত্ব দিয়েছেন এমন শেষ অভিযান এটিই। এতে উত্তরের সীমান্ত নির্ধারিত হলো, আর সীমান্তের জনগোষ্ঠীগুলোর সঙ্গে আচরণের ধরনটাও দাঁড়িয়ে গেল। আয়লা, জারবা, আজরুহ ও দুমাতুল জান্দাল লিখিত শর্ত ও কর দেওয়ার বিনিময়ে নিজেদের ধর্ম ও সম্পদ রেখে দিল। দশ বছরের মধ্যে সিরিয়া ও ইরাক জুড়ে এই একই দলিল ব্যবহৃত হয়েছে।"
          },
          {
            en: "It also broke the hypocrite faction as an organised body. Their mosque was demolished, their excuses were read out in the surah while they listened, and 9:84 forbade the funeral prayer over them. What was left in Madinah was a community that had walked a month into a desert and come back with nothing visible, and Arabia had watched it do so.",
            bn: "সংগঠিত শক্তি হিসেবে মুনাফিক দলটিও এখানেই ভেঙে যায়। তাদের মসজিদ গুঁড়িয়ে দেওয়া হলো, তাদের ওজরগুলো সূরার ভেতরে পড়ে শোনানো হলো তাদের সামনেই, আর ৯:৮৪ আয়াত তাদের জানাজা পড়তে নিষেধ করল। মদিনায় রয়ে গেল এমন এক সমাজ, যারা মরুভূমিতে এক মাস হেঁটে খালি হাতে ফিরেছে। গোটা আরব এই দৃশ্যটাই দেখেছিল।"
          }
        ]
      },
      {
        h: { en: "When the Call Is Inconvenient", bn: "ডাকটা যখন কেবলই অসুবিধার" },
        p: [
          {
            en: "The distinguishing mark of Tabuk is that the call was inconvenient rather than dangerous. Nobody fought. What was measured was whether a man would leave ripe dates and a shaded courtyard for a long road with no return on it. Most tests of religion arrive in that shape rather than the shape of Badr, and 9:38 states the choice plainly as this world set against the next.",
            bn: "তাবুকের আলাদা বৈশিষ্ট্য হলো, ডাকটা বিপজ্জনক ছিল না, ছিল কেবল অসুবিধার। কেউ লড়াই করেনি। মাপা হয়েছিল কেবল এটুকু, পাকা খেজুর আর ছায়াভরা উঠান ছেড়ে কেউ এমন দীর্ঘ পথে নামে কি না, যে পথে ফেরার সময় হাতে কিছুই থাকবে না। দ্বীনের পরীক্ষা বেশির ভাগ সময় বদরের চেহারায় আসে না, আসে এই চেহারাতেই। ৯:৩৮ আয়াত পছন্দটা সোজা করেই রাখে, দুনিয়া এক পাল্লায় আর আখিরাত অন্য পাল্লায়।"
          },
          {
            en: "The other half of the lesson is 9:91 and 9:92. The men who wept because no mount could be found for them were written into the Quran beside those who marched, and the Prophet ﷺ said of that kind that excuse had held them back. Effort genuinely blocked is counted in full. What is not counted is the excuse assembled afterwards.",
            bn: "শিক্ষার বাকি অর্ধেক ৯:৯১ আর ৯:৯২ আয়াতে। বাহন না পেয়ে যাঁরা কেঁদেছিলেন, কুরআন তাঁদের নাম লিখে রেখেছে যাঁরা রওনা দিয়েছিলেন তাঁদের পাশেই। নবী ﷺ এই ধরনের মানুষদের নিয়েই বলেছেন, ওজর তাদের আটকে রেখেছে। সত্যিকারের বাধা পাওয়া চেষ্টার পুরো হিসাব হয়। যে ওজর ঘটনার পরে বানানো হয়, তার হিসাব হয় না।"
          }
        ]
      }
    ]
  },
  "kab_malik": {
    sections: [
      {
        h: { en: "The Army Comes Home", bn: "বাহিনী ফিরে এল" },
        p: [
          {
            en: "The army came back from Tabuk in Ramadan of the ninth year, and the Prophet ﷺ did as always on return: two rak'ahs in the mosque, then a seat for the people. Those who had stayed behind came swearing excuses. Ka'b ibn Malik (RA) counted them at rather more than eighty. The Prophet ﷺ took them at their word, asked forgiveness, and left their secrets to Allah.",
            bn: "নবম হিজরির রমজানে বাহিনী তাবুক থেকে ফিরল। নবী ﷺ ফিরে এসে যা সবসময় করতেন তা-ই করলেন, মসজিদে দুই রাকাত, তারপর লোকদের জন্য বসা। যাঁরা পিছিয়ে ছিলেন তাঁরা এসে কসম খেয়ে ওজর পেশ করতে লাগলেন। কাব ইবনে মালিক (রাঃ)-এর গোনায় তাঁরা আশির কিছু বেশি। নবী ﷺ তাঁদের বাইরের কথা কবুল করলেন, মাগফিরাত চাইলেন, আর ভেতরের হিসাব আল্লাহর উপর ছেড়ে দিলেন।"
          },
          {
            en: "Three men did not join that queue. Ka'b ibn Malik of the Khazraj, Murarah ibn ar-Rabi and Hilal ibn Umayyah had missed the march with nothing to plead, and not one produced a reason he did not have. What happened over the next fifty nights is in the Quran, and told at length in Ka'b's own words in both Sahih collections.",
            bn: "তিনজন সেই সারিতে দাঁড়াননি। খাজরাজের কাব ইবনে মালিক, মুরারা ইবনুর রাবি ও হিলাল ইবনে উমাইয়া, তিনজনই অভিযানে যাননি আর পেশ করার মতো কিছুই তাঁদের ছিল না। কেউই এমন কারণ বানাননি যা আসলে ছিল না। পরের পঞ্চাশ রাতে তাঁদের কী হলো, কুরআন তা লিখে রেখেছে, আর দুই সহিহ গ্রন্থে কাব নিজেই তা বিস্তারিত বলে গেছেন।"
          }
        ]
      },
      {
        h: { en: "Three Men Who Did Not Lie", bn: "যে তিনজন মিথ্যা বলেননি" },
        p: [
          {
            en: "Ka'b said afterwards that he could argue as well as anyone and talk his way out. What stopped him was a calculation about time. A false excuse might satisfy the Prophet ﷺ today, he reasoned, and Allah would turn him against me tomorrow; if I tell the truth, I can hope for a good end from Allah in it.",
            bn: "কাব পরে বলেছেন, তর্কে তিনি কারও চেয়ে কম ছিলেন না, কথা সাজিয়ে বেরিয়ে আসতে পারতেন। তাঁকে থামাল সময় নিয়ে করা একটা হিসাব। মিথ্যা ওজরে নবী ﷺ আজ হয়তো সন্তুষ্ট হবেন, তিনি ভাবলেন, কিন্তু আল্লাহ কাল তাঁকে আমার উপর অসন্তুষ্ট করে দেবেন। আর সত্য বললে আল্লাহর কাছ থেকে ভালো পরিণামের আশা আমি রাখতে পারি।"
          },
          {
            en: "He said it plainly: by Allah, he had no excuse, and he had never been stronger or better provided than on the night he stayed behind. The reply was that this one had spoken the truth, and that he should rise until Allah decided about him. His clan urged him to invent something; he nearly turned back before hearing two others had answered the same.",
            bn: "তিনি সোজা কথাটাই বললেন। আল্লাহর কসম, তাঁর কোনো ওজর ছিল না; যে রাতে তিনি পিছিয়ে থাকলেন, সেই রাতের চেয়ে সবল ও সচ্ছল তিনি জীবনে কখনো ছিলেন না। জবাব এল, এই লোকটি সত্য বলেছে; ওঠো, আল্লাহ তোমার ব্যাপারে ফয়সালা না দেওয়া পর্যন্ত অপেক্ষা করো। গোত্রের লোকেরা তাঁকে কিছু একটা বানিয়ে ফেলতে বলতে লাগল। তিনি প্রায় ফিরেই যাচ্ছিলেন, তখনই শুনলেন আরও দুজন একই জবাব দিয়েছেন।"
          }
        ]
      },
      {
        h: { en: "Fifty Nights of Silence", bn: "পঞ্চাশ রাতের নীরবতা" },
        p: [
          {
            en: "The Prophet ﷺ forbade the Muslims to speak to the three, and Madinah changed shape around them. Murarah and Hilal, the older two, stayed indoors and wept. Ka'b, the youngest and strongest, went out into it daily: praying in the mosque, walking the markets, greeting people who would not answer, watching the Prophet's ﷺ eyes slide away when he prayed nearby.",
            bn: "নবী ﷺ মুসলিমদের নিষেধ করলেন এই তিনজনের সঙ্গে কথা বলতে, আর মদিনা তাঁদের চারপাশে বদলে গেল। বড় দুজন, মুরারা ও হিলাল, ঘরে বসে কাঁদতেন। কাব ছিলেন সবচেয়ে কম বয়সী ও সবল, তিনি রোজ বাইরে বেরোতেন। মসজিদে নামাজ পড়তেন, বাজারে হাঁটতেন, সালাম দিতেন এমন লোকদের যাঁরা জবাব দেবেন না। কাছেই নামাজ পড়ার সময় দেখতেন, নবী ﷺ-এর চোখ তাঁর দিক থেকে সরে যাচ্ছে।"
          },
          {
            en: "A letter reached him from the king of Ghassan offering him a place; he read it, called it part of the trial, and burned it in an oven. After forty nights the three were ordered to keep away from their wives. Hilal was old with nobody to serve him, so his wife was allowed to care for him. Ka'b sent his wife away and stayed alone.",
            bn: "গাসসানের রাজার কাছ থেকে চিঠি এল, সেখানে তাঁর জন্য জায়গা আছে। কাব চিঠিটা পড়ে বললেন, এটাও পরীক্ষারই অংশ, তারপর চুলায় পুড়িয়ে দিলেন। চল্লিশ রাত পার হলে তিনজনকে হুকুম দেওয়া হলো স্ত্রীদের থেকে দূরে থাকতে। হিলাল ছিলেন বৃদ্ধ, সেবা করার কেউ ছিল না। তাই তাঁর স্ত্রীকে স্বামীর সেবা করার অনুমতি নবী ﷺ দিলেন। কাব স্ত্রীকে পাঠিয়ে দিয়ে একাই রইলেন।"
          }
        ]
      },
      {
        h: { en: "The Verse That Named Them", bn: "যে আয়াত তাঁদের কথা তুলল" },
        p: [
          {
            en: "9:117 forgives the Prophet ﷺ, the Muhajirun and the Ansar who followed him in the hour of difficulty, after the hearts of a party of them had almost inclined away. 9:118 turns to the three left behind, until the earth closed in despite its vastness, their souls confined them, and they knew there was no refuge from Allah except in Him.",
            bn: "৯:১১৭ আয়াত ক্ষমার কথা বলছে নবী ﷺ, মুহাজির ও আনসারদের নিয়ে, যাঁরা সংকটকালে তাঁকে অনুসরণ করেছিলেন, এমনকি তাঁদের কারও কারও অন্তর বেঁকে যাওয়ার উপক্রম হওয়ার পরেও। ৯:১১৮ আয়াত ফেরে পিছিয়ে থাকা সেই তিনজনের দিকে, যাঁদের কাছে সুপ্রশস্ত হওয়া সত্ত্বেও পৃথিবী সংকীর্ণ হয়ে এসেছিল, নিজেদের জীবনও দুর্বিষহ হয়ে উঠেছিল, আর তাঁরা বুঝে গিয়েছিলেন আল্লাহ ছাড়া তাঁদের আর কোনো আশ্রয় নেই।"
          },
          {
            en: "The order of the verbs in 9:118 is the point: He turned to them so that they could repent. His turning comes first and theirs follows from it. 9:119 draws the command out of the episode, to fear Allah and be with those who are true. The same image of the earth closing in appears ninety-three verses earlier, in 9:25, about Hunayn.",
            bn: "৯:১১৮ আয়াতে ক্রিয়াগুলোর ক্রমটাই আসল কথা। তিনি তাঁদের দিকে ফিরলেন, যাতে তাঁরা তাঁর দিকে ফিরতে পারেন। আল্লাহর ফেরা আগে, বান্দার ফেরা তার পরে এবং তারই ফলে। ৯:১১৯ আয়াত গোটা ঘটনা থেকে হুকুমটি বের করে আনে, আল্লাহকে ভয় করো আর সত্যপন্থীদের সঙ্গে থাকো। পৃথিবী সংকীর্ণ হয়ে আসার একই ছবি এই সূরায় তিরানব্বই আয়াত আগেও আছে, ৯:২৫ আয়াতে, হুনাইন প্রসঙ্গে।"
          }
        ]
      },
      {
        h: { en: "The Cry From Mount Sal", bn: "সাল পাহাড় থেকে ভেসে আসা ডাক" },
        p: [
          {
            en: "Ka'b told it himself; it is preserved in Sahih al-Bukhari 4418 and Sahih Muslim's book of repentance. On the morning of the fiftieth night he had prayed fajr on a rooftop and was sitting in exactly the state the Quran describes, when a man climbed Mount Sal and shouted at the top of his voice: Ka'b ibn Malik, good news.",
            bn: "পুরো ঘটনাটি কাব নিজেই বলে গেছেন; তা রক্ষিত আছে সহিহ বুখারি ৪৪১৮-এ আর সহিহ মুসলিমের তওবা অধ্যায়ে। পঞ্চাশতম রাতের সকালে তিনি ছাদে ফজর পড়ে বসে ছিলেন, ঠিক সেই অবস্থাতেই যা কুরআন বর্ণনা করেছে। তখনই একজন সাল পাহাড়ে উঠে গলা ছেড়ে ডাকল, কাব ইবনে মালিক, সুসংবাদ।"
          },
          {
            en: "He fell into prostration, knowing relief had come. He gave the messenger the two garments he was wearing, borrowed others, and went to the mosque, where Talhah ibn Ubaydillah (RA) got up and ran to shake his hand. The Prophet's ﷺ face was shining, and he told Ka'b to be glad of the best day that had passed over him since his mother bore him.",
            bn: "সেখানেই সিজদায় পড়ে গেলেন, বুঝে গেছেন মুক্তি এসেছে। সুসংবাদ যে আনল তাকে তিনি নিজের পরনের দুই কাপড় দিয়ে দিলেন, তারপর ধার করা কাপড় পরে মসজিদে গেলেন। সেখানে তালহা ইবনে উবাইদুল্লাহ (রাঃ) উঠে দৌড়ে এসে তাঁর হাত ধরলেন। নবী ﷺ-এর চেহারা ঝলমল করছিল। তিনি কাবকে বললেন, মায়ের গর্ভ থেকে বেরোনোর পর তোমার উপর দিয়ে যাওয়া সবচেয়ে ভালো দিনটির সুসংবাদ নাও।"
          }
        ]
      },
      {
        h: { en: "Badr Men and a Cousin", bn: "বদরের দুজন ও এক চাচাতো ভাই" },
        p: [
          {
            en: "Murarah ibn ar-Rabi and Hilal ibn Umayyah (RA) were both men of Badr, which is why Ka'b held firm once he learned they had answered as he had. Men with that record had least to prove and told the truth anyway. They took the fifty nights indoors, and they are in the Quran's account without one sentence of their own preserved.",
            bn: "মুরারা ইবনুর রাবি ও হিলাল ইবনে উমাইয়া (রাঃ) দুজনই ছিলেন বদরের লোক। এ কারণেই তাঁরা একই জবাব দিয়েছেন শুনে কাব শক্ত হয়ে দাঁড়াতে পারলেন। যাঁদের এমন রেকর্ড, তাঁদের নিজেকে প্রমাণ করার দরকার সবচেয়ে কম ছিল, তবু তাঁরা সত্যই বললেন। পঞ্চাশ রাত তাঁরা ঘরেই কাটালেন, আর কুরআনের বিবরণে তাঁরা আছেন, অথচ তাঁদের নিজেদের একটি বাক্যও রক্ষিত হয়নি।"
          },
          {
            en: "Abu Qatadah (RA) shows what the order cost on the other side. Ka'b's cousin, and dearest to him. When Ka'b climbed his wall and asked him by Allah whether he knew he loved Allah and His Messenger, all he would say was that Allah and His Messenger know best. Talhah (RA) is the man Ka'b named decades later, for crossing a crowded floor first.",
            bn: "হুকুমটি পালন করতে গিয়ে অন্য পাশের লোকদের কী দিতে হয়েছে, তা দেখা যায় আবু কাতাদা (রাঃ)-র মধ্যে। তিনি কাবের চাচাতো ভাই, তাঁর কাছে সবচেয়ে প্রিয় মানুষ। কাব দেয়াল ডিঙিয়ে গিয়ে আল্লাহর নামে জিজ্ঞেস করলেন, তিনি কি জানেন যে কাব আল্লাহ ও তাঁর রাসূলকে ভালোবাসেন? জবাবে এটুকুই এল, আল্লাহ ও তাঁর রাসূলই ভালো জানেন। আর তালহা (রাঃ)-এর নাম কাব যুগ পেরিয়েও মনে রেখেছেন, কারণ ভরা মজলিসে তিনিই আগে এগিয়ে এসেছিলেন।"
          }
        ]
      },
      {
        h: { en: "What Truthfulness Settled", bn: "সত্যবাদিতা যা মীমাংসা করে দিল" },
        p: [
          {
            en: "The episode fixed a distinction the community has used ever since. More than eighty men swore excuses, were taken at their word, and were left to Allah. Three told the truth, were disciplined in the open, and were then forgiven by revelation. Being accepted outwardly settled nothing at all, and the harder treatment turned out to be the honour.",
            bn: "এই ঘটনা এমন একটি পার্থক্য গেঁথে দিল, যা সমাজ আজও কাজে লাগায়। আশির বেশি মানুষ কসম খেয়ে ওজর পেশ করলেন, তাঁদের কথা মেনে নেওয়া হলো, আর বাকিটা আল্লাহর উপর ছেড়ে দেওয়া হলো। তিনজন সত্য বললেন, প্রকাশ্যে শাস্তি পেলেন, তারপর ওহী নাযিল হয়ে তাঁদের মাফ করা হলো। বাইরে থেকে কবুল হওয়ায় কিছুই মীমাংসা হলো না, আর কঠিন আচরণটাই শেষ পর্যন্ত হয়ে দাঁড়াল সম্মান।"
          },
          {
            en: "It also gave the jurists their clearest precedent for hajr: a boycott ordered by authority, for a defined fault, aimed at bringing a man back rather than pushing him out. Ka'b offered his whole property and was told to keep part of it, then vowed to speak nothing but truth for life. He called that truthfulness the greatest favour Allah gave him after Islam.",
            bn: "ফকিহরাও এখান থেকেই হাজরের সবচেয়ে পরিষ্কার নজিরটি পেয়েছেন। কর্তৃপক্ষের হুকুমে, নির্দিষ্ট অপরাধের জন্য, আর উদ্দেশ্য লোকটিকে বের করে দেওয়া নয়, ফিরিয়ে আনা। কাব নিজের সব সম্পত্তি দিয়ে দিতে চাইলেন, তাঁকে বলা হলো কিছু রেখে দিতে। এরপর তিনি কসম করলেন, বাকি জীবন সত্য ছাড়া কিছু বলবেন না। তিনি বলতেন, ইসলামের পর আল্লাহর দেওয়া সবচেয়ে বড় নিয়ামত এই সত্য বলাটাই।"
          }
        ]
      },
      {
        h: { en: "The Excuse That Would Be Believed", bn: "যে ওজর সবাই বিশ্বাস করত" },
        p: [
          {
            en: "The usable question is not whether you would lie under interrogation. It is what you do with an excuse that would be believed. Ka'b's was available, socially acceptable and would have closed the matter in an afternoon. What he worked out is that a lie which satisfies people now moves the reckoning to a court where nothing can be settled at all.",
            bn: "কাজের প্রশ্নটা এই নয় যে জেরার মুখে আপনি মিথ্যা বলবেন কি না। প্রশ্নটা হলো, যে ওজর সবাই বিশ্বাস করে নেবে, সেটা নিয়ে আপনি কী করেন। কাবের হাতে তেমন ওজর ছিল, সমাজ সেটা মেনেও নিত, আর এক বিকেলেই ব্যাপারটা চুকে যেত। তিনি হিসাব কষে দেখলেন, যে মিথ্যা আজ মানুষকে সন্তুষ্ট করে, সেটা হিসাবটাকে এমন এক আদালতে সরিয়ে নেয় যেখানে আর কোনো মীমাংসা হয় না।"
          },
          {
            en: "The rest of the practice is patience with a consequence you have earned. Ka'b was never told how long the silence would last, and he did not look for a shortcut or a sympathetic hearing elsewhere. When the letter from Ghassan came he read it as part of the test rather than a way out. 9:119 is the instruction this story was written to carry.",
            bn: "বাকি আমলটুকু হলো নিজের অর্জিত পরিণামের সঙ্গে ধৈর্য ধরা। নীরবতা কত দিন চলবে কাবকে কেউ বলেনি, আর তিনিও কোনো শর্টকাট খোঁজেননি, সুপারিশ ধরেননি, বাইরে গিয়ে সহানুভূতির আসরও খোঁজেননি। গাসসানের চিঠি যখন এল, তিনি সেটাকে পরীক্ষার অংশ হিসেবেই পড়লেন, পালানোর দরজা হিসেবে নয়। ৯:১১৯ আয়াতই সেই হুকুম, যা বহন করার জন্য গোটা ঘটনাটি লেখা হয়েছে।"
          }
        ]
      }
    ]
  },
  "deputation_year": {
    sections: [
      {
        h: { en: "Arabia Makes Up Its Mind", bn: "আরব সিদ্ধান্ত নিয়ে ফেলল" },
        p: [
          {
            en: "The ninth year after the Hijrah, running through 630 into 631 CE, found Makkah in Muslim hands, Ta'if unconquered but isolated, and an army just back from Tabuk. In Dhu al-Hijjah Abu Bakr (RA) led the pilgrimage and the opening verses of Surah at-Tawbah were proclaimed at Mina. Arabia had run out of reasons to wait and see.",
            bn: "হিজরতের নবম বছর, ৬৩০ পেরিয়ে ৬৩১ খ্রিস্টাব্দ। মক্কা তখন মুসলিমদের হাতে, তায়েফ জয় না হলেও একা পড়ে গেছে, আর উত্তরের সীমান্ত তাবুক থেকে বাহিনী সবে ফিরেছে। জিলহজে হজের নেতৃত্ব দিলেন আবু বকর (রাঃ), আর মিনায় ঘোষণা করা হলো সূরা আত-তাওবার সূচনা আয়াতগুলো। অপেক্ষা করে দেখার মতো আর কোনো কারণ আরবের হাতে রইল না।"
          },
          {
            en: "Ibn Ishaq gives the reason the Arabs gave themselves. They had been waiting on Quraysh, who held the sanctuary and the leadership of the Arabs, and while that argument was unsettled most tribes stayed out of it. Once Makkah was taken the question was decided for them, and Ibn Ishaq says they came into the religion in droves.",
            bn: "আরবরা নিজেরা যে কারণ দেখিয়েছিল, ইবনে ইসহাক তা লিখে রেখেছেন। তারা তাকিয়ে ছিল কুরাইশের দিকে, কারণ হারামের দায়িত্ব ও আরবের নেতৃত্ব ছিল কুরাইশের হাতে। ওই ফয়সালা না হওয়া পর্যন্ত বেশির ভাগ গোত্র দূরে দাঁড়িয়ে ছিল। মক্কা হাতবদল হতেই তাদের হয়ে প্রশ্নটার মীমাংসা হয়ে গেল, আর ইবনে ইসহাক বলছেন, এরপর তারা দলে দলে দ্বীনে ঢুকতে লাগল।"
          }
        ]
      },
      {
        h: { en: "Delegation After Delegation", bn: "একের পর এক প্রতিনিধিদল" },
        p: [
          {
            en: "Ibn Sa'd gives the delegations a long section of the Tabaqat, and the historians' lists do not agree on a total. They were lodged as guests, answered in the mosque, and sent home with a teacher, written instruction on prayer and zakat, or a governor of their own. Thabit ibn Qays (RA) answered their orators and Hassan ibn Thabit (RA) their poets.",
            bn: "ইবনে সাদ তাঁর তাবাকাতে প্রতিনিধিদলগুলোর জন্য দীর্ঘ একটি অধ্যায় রেখেছেন, মোট কতগুলো, ঐতিহাসিকদের তালিকা তাতে একমত নয়। তাদের মেহমান হিসেবে রাখা হতো, মসজিদে জবাব দেওয়া হতো, আর ফেরার সময় সঙ্গে দেওয়া হতো শিক্ষক, নামাজ ও যাকাতের লিখিত নির্দেশনা, কিংবা নিজেদের একজন আমির। তাদের বক্তাদের জবাব দিতেন সাবিত ইবনে কায়স (রাঃ), আর কবিদের জবাব দিতেন হাসসান ইবনে সাবিত (রাঃ)।"
          },
          {
            en: "Banu Tamim arrived with their best speaker and poet and were answered in kind; the mufassirun attach 49:4, about those who call from behind the chambers, to that visit. Abd al-Qays came from Bahrain asking for something short enough to carry home. Tayy came in the person of Adiyy ibn Hatim (RA), who had fled a Muslim column and was argued back by his sister.",
            bn: "বনু তামিম এল তাদের সেরা বক্তা ও কবিকে নিয়ে, আর জবাবও পেল সেই মাপেই। মুফাসসিররা ৪৯:৪ আয়াতটিকে এই আসার সঙ্গে যুক্ত করেন, যেখানে হুজরার বাইরে থেকে ডাকা লোকদের কথা আছে। পূর্ব দিক থেকে, বাহরাইন থেকে এল আবদুল কায়স, তারা চাইল এমন কিছু যা সঙ্গে করে বাড়ি নিয়ে যাওয়া যায়। তাইয়ের হয়ে এলেন আদি ইবনে হাতিম (রাঃ), যিনি মুসলিম বাহিনীর সামনে থেকে পালিয়েছিলেন, আর নিজের বোনের যুক্তিতেই ফিরে এসেছিলেন।"
          },
          {
            en: "Thaqif made its peace a year after the siege of Ta'if, and a Christian delegation from Najran came to argue about Isa (AS) and went home under a treaty; both have their own cards. The sirah places Musaylimah among the Banu Hanifah delegation from Yamamah, though accounts of what he did there differ. Wa'il ibn Hujr (RA) of Hadramawt came on his own account, not as a tribe's negotiator.",
            bn: "তায়েফ অবরোধের এক বছর পর সাকিফ সন্ধি করল। নাজরান থেকে খ্রিস্টান প্রতিনিধিদল এল ঈসা (আঃ)-কে নিয়ে বিতর্ক করতে, আর চুক্তি করে ফিরে গেল; দুটোরই আলাদা বিবরণ এখানে আছে। ইয়ামামার বনু হানিফার প্রতিনিধিদলে মুসায়লামাকে রাখে সিরাত, তবে সেখানে সে কী করেছিল তা নিয়ে বর্ণনাগুলো এক নয়। হাদরামাউতের ওয়াইল ইবনে হুজর (রাঃ) এসেছিলেন নিজের হয়ে, কোনো গোত্রের দরকষাকষির লোক হিসেবে নয়।"
          }
        ]
      },
      {
        h: { en: "Say Rather, We Have Submitted", bn: "বরং বলো, আমরা আনুগত্য করেছি" },
        p: [
          {
            en: "Surah an-Nasr belongs to this stretch of the story. 110:1-3 reads: when the victory of Allah has come and the conquest, and you see the people entering the religion of Allah in multitudes, then exalt Him with praise of your Lord and ask forgiveness of Him. Its placing is disputed: the mufassirun set it with the conquest, with the years of the delegations, and with the Farewell Pilgrimage.",
            bn: "সূরা আন-নাসর এই পর্বেরই সঙ্গী। ১১০:১ থেকে ১১০:৩ আয়াতে আছে, যখন আল্লাহর সাহায্য ও বিজয় আসবে, আর তুমি দেখবে মানুষ দলে দলে আল্লাহর দ্বীনে প্রবেশ করছে, তখন প্রশংসাসহ তোমার রবের পবিত্রতা ঘোষণা করবে আর তাঁর কাছে ক্ষমা চাইবে। কখন নাযিল হয়েছে তা নিয়ে মতভেদ আছে; মুফাসসিররা কেউ রাখেন মক্কা বিজয়ের সঙ্গে, কেউ প্রতিনিধিদলের বছরগুলোর সঙ্গে, কেউ বিদায় হজের সঙ্গে।"
          },
          {
            en: "What the surah does not order is a celebration. The response commanded is tasbih and istighfar. Sahih al-Bukhari records from Aishah (RA) that after it came down the Prophet ﷺ would often say in bowing and prostration: glory be to You, our Lord, and praise be to You; O Allah, forgive me. He was applying the surah to himself, inside the prayer.",
            bn: "সূরাটি উৎসবের হুকুম দেয় না। যে জবাবের হুকুম দেওয়া হয়েছে তা তাসবিহ ও ইস্তিগফার। সহিহ বুখারিতে আয়েশা (রাঃ) থেকে আছে, সূরাটি নাযিল হওয়ার পর নবী ﷺ রুকু ও সিজদায় প্রায়ই বলতেন, হে আমাদের রব, তোমার পবিত্রতা ও প্রশংসা; হে আল্লাহ, আমাকে মাফ করো। নামাজের ভেতরেই তিনি সূরার হুকুমটি নিজের উপর প্রয়োগ করছিলেন।"
          },
          {
            en: "The same season produced a warning against reading crowds as faith. 49:14 answers bedouins who said they had believed: say rather, we have submitted, for faith has not yet entered your hearts. 49:17 answers those who counted their Islam as a favour done to him, telling them the favour is Allah's, for having guided them. The distinction was drawn while the arrivals kept coming.",
            bn: "একই মৌসুমে এল ভিড় দেখে ঈমান মেপে ফেলার বিরুদ্ধে সতর্কতাও। ৪৯:১৪ আয়াত জবাব দেয় সেই বেদুইনদের, যারা বলেছিল তারা ঈমান এনেছে: বরং বলো, আমরা আনুগত্য স্বীকার করেছি, ঈমান এখনো তোমাদের অন্তরে ঢোকেনি। ৪৯:১৭ আয়াত জবাব দেয় তাদের, যারা নিজেদের ইসলামকে নবী ﷺ-এর প্রতি অনুগ্রহ মনে করছিল; বলা হলো, অনুগ্রহ আল্লাহরই, তিনি তাদের হেদায়েত দিয়েছেন। যারা আসছিল, তারা আসতে থাকতেই পার্থক্যটা টেনে দেওয়া হলো।"
          }
        ]
      },
      {
        h: { en: "What Abd al-Qays Were Told", bn: "আবদুল কায়সকে যা বলা হলো" },
        p: [
          {
            en: "The delegation of Abd al-Qays left the collections one of their best-known reports, in Sahih al-Bukhari's book of faith. They explained that the tribes between them and Madinah meant they could only reach him in a sacred month, and asked for a command they could take back to their own people and enter Paradise by acting on it.",
            bn: "আবদুল কায়সের প্রতিনিধিদল হাদিসগ্রন্থগুলোকে দিয়ে গেছে সবচেয়ে পরিচিত বর্ণনাগুলোর একটি, যা আছে সহিহ বুখারির ঈমান অধ্যায়ে। তারা বলল, তাদের আর মদিনার মাঝখানে অন্য গোত্রগুলো থাকায় কেবল হারাম মাসেই তাঁর কাছে আসা যায়। তারা এমন একটি হুকুম চাইল, যা নিয়ে ফিরে গিয়ে নিজেদের লোকদের বলা যায় আর যা মেনে চললে জান্নাতে যাওয়া যায়।"
          },
          {
            en: "He ordered belief in Allah alone, asked whether they knew what that meant, and answered it himself: the testimony that there is no god but Allah and that Muhammad is His Messenger, establishing the prayer, giving the zakat, fasting Ramadan, and giving a fifth of the spoils. Sahih Muslim adds that he told their chief he had two qualities Allah loves, forbearance and deliberateness.",
            bn: "তিনি তাদের হুকুম দিলেন এক আল্লাহর উপর ঈমান আনতে, তারপর জিজ্ঞেস করলেন, তারা জানে কি এর অর্থ কী। জবাবটাও তিনিই দিলেন: সাক্ষ্য দেওয়া যে আল্লাহ ছাড়া কোনো ইলাহ নেই আর মুহাম্মদ আল্লাহর রাসূল, নামাজ কায়েম করা, যাকাত দেওয়া, রমজানের রোজা রাখা, আর গনিমতের এক-পঞ্চমাংশ দেওয়া। সহিহ মুসলিমে আরও আছে, তিনি তাদের সরদারকে বলেছিলেন, তাঁর মধ্যে এমন দুটি গুণ আছে যা আল্লাহ ভালোবাসেন, সহনশীলতা আর তাড়াহুড়া না করা।"
          }
        ]
      },
      {
        h: { en: "Faces From the Far Tribes", bn: "দূরের গোত্রগুলোর মুখ" },
        p: [
          {
            en: "Adiyy ibn Hatim (RA) arrived wearing a cross of gold and went home a Muslim chief of Tayy, living to see two of three things he was told that day come true. Uthman ibn Abi al-As (RA), youngest in the Thaqif delegation, was left with the baggage while his elders negotiated; he spent those hours learning Quran and was appointed over Ta'if for it.",
            bn: "আদি ইবনে হাতিম (রাঃ) এসেছিলেন গলায় সোনার ক্রুশ পরে, ফিরে গিয়েছিলেন তাইয়ের মুসলিম সরদার হয়ে। সেদিন তাঁকে যে তিনটি কথা বলা হয়েছিল, তার দুটি নিজের চোখে দেখে যাওয়ার মতো হায়াত তিনি পেয়েছিলেন। সাকিফের প্রতিনিধিদলে সবচেয়ে কম বয়সী ছিলেন উসমান ইবনে আবিল আস (রাঃ), মালপত্রের কাছে তাঁকে রেখে বড়রা দরকষাকষিতে যেতেন। সেই সময়টুকু তিনি কুরআন শিখে কাটাতেন, আর সে কারণেই তায়েফের দায়িত্ব তাঁর উপর পড়ে।"
          },
          {
            en: "Thabit ibn Qays (RA) held a post with no name before him, answering visiting orators on the community's behalf. Al-Ashajj (RA) of Abd al-Qays is remembered less for tribe or rank than for a sentence about his manner. That is a fair summary of the year: men arrived as delegates and went home as individuals with something particular to carry.",
            bn: "সাবিত ইবনে কায়স (রাঃ) এমন এক দায়িত্বে ছিলেন, তাঁর আগে যার কোনো নামই ছিল না; বাইরে থেকে আসা বক্তাদের জবাব তিনি দিতেন গোটা সমাজের পক্ষ থেকে। আবদুল কায়সের আশাজ্জ (রাঃ)-কে মনে রাখা হয় তাঁর গোত্র বা পদমর্যাদার জন্য নয়, তাঁর স্বভাব নিয়ে বলা একটি বাক্যের জন্য। বছরটির সারকথাও তা-ই: মানুষ এসেছে প্রতিনিধি হয়ে, ফিরে গেছে নিজের মতো করে কিছু একটা নিয়ে।"
          }
        ]
      },
      {
        h: { en: "A State Made of Envoys", bn: "দূত দিয়ে গড়া রাষ্ট্র" },
        p: [
          {
            en: "The delegations turned a city into an administration. Teachers, judges and zakat collectors went out with them or after them, written instructions were drawn up, and Yemen received Mu'adh ibn Jabal (RA) on those terms. What had been a community around one mosque now had provinces, and the wars of apostasy would soon test how deep any of it had gone.",
            bn: "প্রতিনিধিদলগুলো একটি শহরকে প্রশাসনে বদলে দিল। তাদের সঙ্গে বা পিছু পিছু বেরিয়ে গেলেন শিক্ষক, বিচারক ও যাকাত আদায়কারীরা, তৈরি হলো লিখিত নির্দেশনা, আর ইয়েমেন সেই শর্তেই পেল মুয়ায ইবনে জাবাল (রাঃ)-কে। এক মসজিদ ঘিরে গড়ে ওঠা সমাজের এখন প্রদেশ আছে। রিদ্দার যুদ্ধগুলো শিগগিরই যাচাই করবে, এর কতটুকু গভীরে গিয়েছিল।"
          },
          {
            en: "The year also closes an arc that began in Makkah. The man who had once counted his followers on his fingers now had to find days in the calendar for the tribes who wanted to see him. 110:2 describes exactly that, people entering the religion of Allah in multitudes, and the command tied to it in 110:3 is to ask forgiveness.",
            bn: "বছরটি মক্কায় শুরু হওয়া একটি বৃত্তও বন্ধ করে দেয়। যে মানুষটি একসময় আঙুলে গুনে অনুসারীদের হিসাব রাখতে পারতেন, তাঁকে এখন দেখা করতে চাওয়া গোত্রগুলোর জন্য পঞ্জিকায় দিন খুঁজতে হচ্ছে। ১১০:২ আয়াত ঠিক এ কথাই বলছে, মানুষ দলে দলে আল্লাহর দ্বীনে ঢুকছে। আর ১১০:৩ আয়াতে তার সঙ্গে জুড়ে দেওয়া হুকুমটি হলো ক্ষমা চাওয়া।"
          }
        ]
      },
      {
        h: { en: "Numbers Are Not Iman", bn: "সংখ্যা ঈমান নয়" },
        p: [
          {
            en: "The obvious lesson is patience over a long horizon, and it is real; about twenty years separate the first years in Makkah from the delegations. But the sharper lesson is 110:3. The instruction handed to the man at the head of the movement, in the season it was won, was to declare his Lord far above all of it and ask to be forgiven.",
            bn: "সহজ শিক্ষাটি হলো লম্বা সময় ধরে ধৈর্য ধরা, আর সেটি সত্যিকারের শিক্ষাই; মক্কার শুরুর বছরগুলো থেকে প্রতিনিধিদলের বছর পর্যন্ত প্রায় বিশ বছরের দূরত্ব। তবে আরও ধারালো শিক্ষাটি ১১০:৩ আয়াতে। আন্দোলন যে মৌসুমে জিতে গেল, সেই মৌসুমে আন্দোলনের প্রধান মানুষটির হাতে যে হুকুম দেওয়া হলো তা হলো, রবের পবিত্রতা ঘোষণা করো আর নিজের জন্য মাফ চাও।"
          },
          {
            en: "The other thing to carry is 49:14 turned on yourself. Being counted in a Muslim community, by birth or by arrival, is islam. Whether faith has entered the heart is a separate question, and the verse asks it out loud. The year of delegations is the best possible occasion for that question, because it is the year the numbers looked most convincing.",
            bn: "দ্বিতীয় যেটি সঙ্গে নেওয়ার, তা হলো ৪৯:১৪ আয়াতকে নিজের দিকে ঘুরিয়ে দেওয়া। মুসলিম সমাজে গোনা হওয়া, জন্মসূত্রে হোক বা এসে যোগ দিয়ে, সেটা ইসলাম। ঈমান অন্তরে ঢুকেছে কি না, সে প্রশ্ন আলাদা, আর আয়াতটি প্রশ্নটা মুখ ফুটেই করে। প্রতিনিধিদলের বছরই এই প্রশ্নের সবচেয়ে ভালো উপলক্ষ, কারণ সংখ্যাটা সবচেয়ে বিশ্বাসযোগ্য দেখিয়েছিল সেই বছরেই।"
          }
        ]
      }
    ]
  },
};

if (typeof module !== 'undefined' && module.exports) module.exports = { SEERAH_ARTICLES };
