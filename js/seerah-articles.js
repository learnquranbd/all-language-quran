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
};

if (typeof module !== 'undefined' && module.exports) module.exports = { SEERAH_ARTICLES };
