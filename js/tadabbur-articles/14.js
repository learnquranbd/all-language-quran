/**
 * Tadabbur long-form articles — surah 14.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "14:1": {
    "sections": [
      {
        "h": {
          "en": "A Book With a Stated Job",
          "bn": "কাজ ঘোষিত এক কিতাব"
        },
        "p": [
          {
            "en": "Surah Ibrahim opens with the disconnected letters, then a single indefinite noun: kitabun, a Book — We have sent it down to you. What follows is a purpose clause, and that clause is the reason the Book is being mentioned at all. Many openings describe the revelation; this one assigns it a task, and states the task as a verb of movement performed upon people. The reader is told in the first line what the rest of the surah is for.",
            "bn": "সূরা ইবরাহীম শুরু হয় বিচ্ছিন্ন হরফ দিয়ে, তারপর একটি অনির্দিষ্ট বিশেষ্য: 'কিতাবুন' — একটি কিতাব, যা আমি তোমার প্রতি নাযিল করেছি। এরপর আসে উদ্দেশ্যবাচক অংশ, আর সেই অংশটির কারণেই কিতাবের উল্লেখ। অনেক সূরার সূচনা ওহীর পরিচয় দেয়; এটি ওহীকে একটি কাজ দিয়ে দেয়, আর সেই কাজকে প্রকাশ করে মানুষের ওপর সম্পন্ন হওয়া এক গতিশীল ক্রিয়াপদ দিয়ে। প্রথম লাইনেই পাঠক জেনে যায়, বাকি সূরাটি কীসের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Bringing Out",
          "bn": "বের করে আনা"
        },
        "p": [
          {
            "en": "Li-tukhrija an-nas: so that you may bring mankind out. The verb is one of extraction, and it assumes a starting position. Nobody in this sentence is standing on neutral ground waiting to be improved; they are inside something and are to be taken out of it. That is a different picture from adding information to a person. It is nearer to what 6:122 describes — one who was dead and was given life, and given a light by which to walk among people.",
            "bn": "'লিতুখরিজান্‌নাস' — যাতে তুমি মানুষকে বের করে আনতে পারো। ক্রিয়াপদটি বের করে আনার, আর তা একটি শুরুর অবস্থান ধরে নেয়। এই বাক্যে কেউ নিরপেক্ষ জায়গায় দাঁড়িয়ে উন্নতির অপেক্ষা করছে না; তারা কোনো কিছুর ভেতরে আছে এবং সেখান থেকে তাদের বের করে আনতে হবে। এটি কারও ভেতরে তথ্য যোগ করার ছবি নয়। এটি বরং 6:122-এর বর্ণনার কাছাকাছি — যে ছিল মৃত, তারপর তাকে জীবন দেওয়া হলো এবং এমন এক আলো দেওয়া হলো যা নিয়ে সে মানুষের মধ্যে চলাফেরা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Darknesses Many, Light One",
          "bn": "অন্ধকার বহু, আলো এক"
        },
        "p": [
          {
            "en": "The Arabic is not symmetrical, and the commentators have long made the point: zulumat is plural, darknesses, while nur is singular. The asymmetry holds across the whole Book — the plural of nur does not occur in the Quran at all. And the verse's own last words keep the singular running: the light is then identified as a sirat, one road. Confusion, appetite, ideology and habit each supply a darkness of their own; the exit is described in the singular every time.",
            "bn": "আরবি এখানে প্রতিসম নয়, আর মুফাসসিরগণ বহুকাল ধরেই বিষয়টি উল্লেখ করে আসছেন: 'যুলুমাত' বহুবচন — অর্থাৎ অন্ধকারসমূহ, আর 'নূর' একবচন। এই অসমতা গোটা কিতাবজুড়েই বজায় থাকে — কুরআনে 'নূর'-এর বহুবচন একবারও আসেনি। আর আয়াতের শেষ শব্দগুলো সেই একবচনকেই টেনে নিয়ে যায়: আলোকে এরপর চিহ্নিত করা হয় 'সিরাত' বলে, অর্থাৎ একটিমাত্র পথ। বিভ্রান্তি, প্রবৃত্তি, মতবাদ আর অভ্যাস — প্রত্যেকেই নিজের মতো একেকটি অন্ধকার জোগায়; কিন্তু বেরিয়ে আসার পথটির বর্ণনা প্রতিবারই একবচনে।"
          }
        ]
      },
      {
        "h": {
          "en": "By Their Lord's Permission",
          "bn": "তাদের প্রতিপালকের অনুমতিক্রমে"
        },
        "p": [
          {
            "en": "Here the bringing out is ascribed to the Prophet ﷺ. Elsewhere it is ascribed to Allah — 2:257 says He brings the believers out of the darknesses into the light, 33:43 attaches it to His blessing and that of the angels, and 5:16 to guidance given by this Book. The clause that reconciles them sits inside this verse: bi-idhni rabbihim, by the permission of their Lord. The messenger performs the act and does not own the power inside it.",
            "bn": "এখানে বের করে আনার কাজটি নবী ﷺ-এর প্রতি আরোপ করা হয়েছে। অন্যত্র তা আরোপ করা হয়েছে আল্লাহর প্রতি — 2:257 বলে, তিনিই মুমিনদের অন্ধকারসমূহ থেকে আলোর দিকে বের করে আনেন; 33:43 একে যুক্ত করে তাঁর ও ফেরেশতাদের রহমতের সঙ্গে; আর 5:16 যুক্ত করে এই কিতাবের মাধ্যমে দেওয়া হিদায়াতের সঙ্গে। যে অংশটি এগুলোকে মিলিয়ে দেয় তা এই আয়াতেই আছে: 'বিইযনি রাব্বিহিম' — তাদের প্রতিপালকের অনুমতিক্রমে। রাসূল কাজটি সম্পাদন করেন, কিন্তু তার ভেতরের শক্তির মালিক তিনি নন।"
          },
          {
            "en": "Notice whose Lord is named. It does not say by the permission of your Lord, addressing the one who carries the Book; it says their Lord, the Lord of the people being brought out. The permission is attached to them. Anyone who teaches, corrects or invites can take two things from that. He is doing real work, since the verb has been handed to him. And he is not the one who decides whether it lands, which is a relief and a discipline at the same time.",
            "bn": "লক্ষ করুন, কার প্রতিপালকের কথা বলা হয়েছে। বলা হয়নি 'তোমার প্রতিপালকের অনুমতিক্রমে', যা কিতাব বহনকারীকে সম্বোধন করত; বলা হয়েছে 'তাদের প্রতিপালক', অর্থাৎ যাদের বের করে আনা হচ্ছে তাদের প্রতিপালক। অনুমতিটি তাদের সঙ্গেই যুক্ত। যিনি শেখান, সংশোধন করেন বা দাওয়াত দেন, তিনি এখান থেকে দুটি জিনিস নিতে পারেন। তিনি সত্যিকারের কাজ করছেন, কারণ ক্রিয়াপদটি তাঁর হাতেই দেওয়া হয়েছে। আর তা কার্যকর হবে কি না, সেই সিদ্ধান্ত তাঁর নয় — যা একই সঙ্গে স্বস্তি এবং সংযম।"
          }
        ]
      },
      {
        "h": {
          "en": "To the Path of the Mighty",
          "bn": "পরাক্রমশালীর পথের দিকে"
        },
        "p": [
          {
            "en": "The verse ends by naming the destination twice over: to the path of al-'Aziz, al-Hamid. Might that cannot be overcome, and praiseworthiness that deserves everything said of it. The pairing matters, because power without the second name would be tyranny and praise without the first would be sentiment. And the sentence does not stop at the surah's opening verse: 14:2 continues in apposition — Allah, to whom belongs whatever is in the heavens and whatever is on the earth.",
            "bn": "আয়াত শেষ হয় গন্তব্যের নাম দুবার করে দিয়ে: 'আল-আযীয' ও 'আল-হামীদ'-এর পথের দিকে। এমন পরাক্রম যাকে পরাস্ত করা যায় না, আর এমন প্রশংসার যোগ্যতা যা তাঁর সম্পর্কে বলা সব কথারই দাবিদার। এই জোড়াটি গুরুত্বপূর্ণ, কারণ দ্বিতীয় নামটি ছাড়া ক্ষমতা হতো স্বেচ্ছাচার, আর প্রথমটি ছাড়া প্রশংসা হতো নিছক আবেগ। আর বাক্যটি সূরার প্রথম আয়াতে এসে থামে না: 14:2 একই বাক্যের ব্যাখ্যা হিসেবে চলতে থাকে — আল্লাহ, আসমানসমূহে ও যমীনে যা কিছু আছে সবই যাঁর।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading a Book Sent to Move You",
          "bn": "যে কিতাব নড়াতে এসেছে, তা পড়া"
        },
        "p": [
          {
            "en": "Taken at its word, this verse sets an expectation for how the Quran is opened. It is not first of all an object of admiration, a source of quotations or a text to have opinions about; it announces itself as the instrument of an extraction. The honest way to read it is therefore to arrive with a particular darkness named — a confusion, a grudge, a habit, a fear — and to read looking for the way out of that one.",
            "bn": "কথাটি আক্ষরিকভাবে নিলে এই আয়াত ঠিক করে দেয়, কুরআন কীভাবে খোলা উচিত। এটি সবার আগে মুগ্ধ হয়ে দেখার বস্তু নয়, উদ্ধৃতির ভাণ্ডার নয়, কিংবা এমন কোনো পাঠ নয় যা নিয়ে মতামত দেওয়া যায়; এটি নিজেকে ঘোষণা করে বের করে আনার যন্ত্র হিসেবে। তাই সৎভাবে পড়ার উপায় হলো নির্দিষ্ট একটি অন্ধকারের নাম নিয়ে আসা — কোনো বিভ্রান্তি, কোনো ক্ষোভ, কোনো অভ্যাস, কোনো ভয় — আর সেই একটি থেকে বেরোনোর পথ খুঁজতে খুঁজতে পড়া।"
          },
          {
            "en": "And the plural keeps the work open-ended. A person is not brought out once and finished. Every stage of a life has its own darkness, and the surah shows the task being handed down: 14:5 sends Musa (AS) with the same instruction, to bring his people out of the darknesses into the light. Whoever teaches a child a surah, or sits with someone in the dark stretch of his life and reads to him, has taken up a share of the verb in this verse.",
            "bn": "আর বহুবচনটি কাজটিকে চিরকালের জন্য খোলা রাখে। মানুষকে একবার বের করে এনে কাজ শেষ হয়ে যায় না। জীবনের প্রতিটি পর্বের নিজস্ব অন্ধকার আছে, আর সূরাটি দেখায় যে এই দায়িত্ব হাতে হাতে চলে আসছে: 14:5-এ মূসা (আঃ)-কে পাঠানো হয় একই নির্দেশ দিয়ে, যেন তিনি তাঁর সম্প্রদায়কে অন্ধকারসমূহ থেকে আলোর দিকে বের করে আনেন। যিনি কোনো শিশুকে একটি সূরা শেখান, কিংবা জীবনের অন্ধকার সময়ে কারও পাশে বসে তাকে পড়ে শোনান, তিনি এই আয়াতের ক্রিয়াপদটির একটি অংশ নিজের কাঁধে তুলে নিয়েছেন।"
          }
        ]
      }
    ]
  },
  "14:7": {
    "sections": [
      {
        "h": {
          "en": "A Proclamation, Not a Remark",
          "bn": "মন্তব্য নয়, ঘোষণা"
        },
        "p": [
          {
            "en": "The verse opens wa idh ta'adhdhana rabbukum, and when your Lord proclaimed. Ta'adhdhana is not the ordinary verb for saying. It comes from the root that gives adhan, the call announced aloud so that a whole town hears it. What follows is therefore public, formal and put on record — a declaration rather than an aside, and the Arabic tells you so before you reach the content.",
            "bn": "আয়াত শুরু হয় ওয়া ইয্ তা’আয্‌যানা রাব্বুকুম দিয়ে — আর যখন তোমাদের রব ঘোষণা করলেন। তা’আয্‌যানা সাধারণ ‘বলা’ ক্রিয়া নয়। এটি এসেছে সেই ধাতু থেকে যা থেকে আযান — উচ্চস্বরে ঘোষিত সেই ডাক যা গোটা জনপদ শোনে। তাই এরপর যা আসে তা প্রকাশ্য, আনুষ্ঠানিক ও লিপিবদ্ধ — পাশ কাটানো মন্তব্য নয়, বরং ঘোষণা; আর বিষয়বস্তুতে পৌঁছার আগেই আরবি তা জানিয়ে দেয়।"
          },
          {
            "en": "Then the content: la'in shakartum la'azidannakum. Both halves carry the emphatic lam, and the verb ends in the doubled nun of confirmation. This is the construction Arabic uses for a sworn undertaking; the plainest English that keeps its weight is if you are grateful, I shall most certainly increase you. Nothing about the promise is left provisional except the condition attached to it.",
            "bn": "এরপর বিষয়বস্তু: লা’ইন শাকারতুম লা’আযীদান্নাকুম। দুই অংশেই আছে জোরদার লাম, আর ক্রিয়ার শেষে দ্বিত্ব নূন। আরবি এই গঠনটি ব্যবহার করে শপথসদৃশ অঙ্গীকারে; এর ভার ধরে রাখে এমন সহজতম অনুবাদ হলো, যদি তোমরা কৃতজ্ঞ হও, আমি অবশ্যই অবশ্যই তোমাদের বাড়িয়ে দেব। প্রতিশ্রুতির কিছুই অনিশ্চিত রাখা হয়নি, কেবল তার সাথে যুক্ত শর্তটি ছাড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Object Left Open",
          "bn": "যে বস্তুটি অনুক্ত"
        },
        "p": [
          {
            "en": "Read the promise again and notice what is missing. I shall increase you — in what? The Arabic gives no object. It does not say increase you in wealth, or in health, or in years. The commentators dwell on this omission: an unnamed object is an unlimited one, so the increase may come in provision, in strength, in knowledge, in ease of worship, in contentment with what is already there.",
            "bn": "প্রতিশ্রুতিটি আবার পড়ুন, আর লক্ষ্য করুন কী অনুপস্থিত। আমি তোমাদের বাড়িয়ে দেব — কীসে? আরবি কোনো কর্ম দেয়নি। বলা হয়নি সম্পদে বাড়িয়ে দেব, বা স্বাস্থ্যে, বা আয়ুতে। মুফাসসিরগণ এই অনুক্ততার ওপরই থামেন: যে কর্মের নাম বলা হয়নি তা অসীম; তাই বৃদ্ধি আসতে পারে রিজিকে, শক্তিতে, জ্ঞানে, ইবাদতের সহজতায়, কিংবা যা ইতিমধ্যেই আছে তাতেই তৃপ্তিতে।"
          },
          {
            "en": "This matters, because the verse is often quoted as though it promised more money to the thankful. It promises more, and leaves the currency to the Giver. A person whose income does not change but who stops resenting it has received exactly what was promised. Shukr in the Quran is not a mood; it is recognition of where a thing came from, expressed by the tongue, the heart and the use made of the gift.",
            "bn": "কথাটি জরুরি, কারণ আয়াতটি প্রায়ই এমনভাবে উদ্ধৃত হয় যেন এটি কৃতজ্ঞদের বেশি অর্থের প্রতিশ্রুতি দিচ্ছে। এটি বেশি কিছুর প্রতিশ্রুতি দেয় বটে, তবে মুদ্রাটি কী হবে তা দাতার হাতেই রেখে দেয়। যার আয় বদলায়নি অথচ যে তা নিয়ে আর বিরক্ত নয়, সে ঠিক তা-ই পেয়েছে যা প্রতিশ্রুত ছিল। কুরআনে শুকর কোনো মেজাজ নয়; এটি স্বীকৃতি যে জিনিসটি কোথা থেকে এসেছে — যা প্রকাশ পায় জিহ্বায়, হৃদয়ে, আর দানটির ব্যবহারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Two Halves Are Not Symmetrical",
          "bn": "দুই অংশ সমান নয়"
        },
        "p": [
          {
            "en": "The second half changes shape: wa la'in kafartum inna adhabi lashadid. If you are ungrateful, indeed My punishment is severe. Read the grammar closely. For gratitude, Allah says I shall increase you — first person, direct, with the servant as the object. For ingratitude, He does not say I shall punish you; He states that His punishment is severe. The threat is stated as an attribute, at one remove.",
            "bn": "দ্বিতীয়ার্ধের গড়ন বদলে যায়: ওয়া লা’ইন কাফারতুম ইন্না ‘আযাবী লাশাদীদ। যদি তোমরা অকৃতজ্ঞ হও, নিশ্চয়ই আমার শাস্তি কঠিন। ব্যাকরণটি মনোযোগ দিয়ে পড়ুন। কৃতজ্ঞতার ক্ষেত্রে আল্লাহ বলেন, আমি তোমাদের বাড়িয়ে দেব — উত্তম পুরুষে, সরাসরি, বান্দাকে কর্ম করে। অকৃতজ্ঞতার ক্ষেত্রে তিনি বলেন না, আমি তোমাদের শাস্তি দেব; তিনি বলেন যে তাঁর শাস্তি কঠিন। হুমকিটি একটি গুণ হিসেবে বলা হয়েছে, এক ধাপ দূরত্ব রেখে।"
          },
          {
            "en": "The verb chosen for ingratitude is worth holding on to as well: kafartum, from the root k-f-r, whose base meaning is to cover. Ingratitude in Arabic is a covering over of a blessing so that it is no longer visible as one. That is why kufr can mean both disbelief and thanklessness — they are the same act performed on different objects. Later in the surah, 14:34 says that if you tried to count the favour of Allah you could not enumerate it.",
            "bn": "অকৃতজ্ঞতার জন্য বেছে নেওয়া ক্রিয়াটিও ধরে রাখার মতো: কাফারতুম, ক-ফ-র ধাতু থেকে, যার মূল অর্থ ঢেকে ফেলা। আরবিতে অকৃতজ্ঞতা মানে নিয়ামতকে এমনভাবে ঢেকে ফেলা যে তা আর নিয়ামত বলে চোখে পড়ে না। এ কারণেই কুফর শব্দটি অবিশ্বাস ও অকৃতজ্ঞতা দুটোই বোঝাতে পারে — ভিন্ন বস্তুর ওপর একই কাজ। সূরার পরের দিকে 14:34 বলে, আল্লাহর নিয়ামত গুনতে চাইলে তোমরা তা গুনে শেষ করতে পারবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken to a Rescued People",
          "bn": "উদ্ধারপ্রাপ্ত এক জাতিকে বলা"
        },
        "p": [
          {
            "en": "The declaration is not floating free. It sits inside the speech of Musa (AS) to his people. 14:5 records that Musa was sent with signs and told to bring his people out of darkness into light and to remind them of the days of Allah. 14:6 then names a specific day: remember when He saved you from the people of Pharaoh, who were inflicting the worst punishment on you.",
            "bn": "ঘোষণাটি শূন্যে ভাসছে না। এটি বসে আছে মূসা (আঃ)-এর নিজ জাতির প্রতি বক্তব্যের ভেতরে। 14:5 জানায় যে মূসাকে নিদর্শনসহ পাঠানো হয়েছিল, আর বলা হয়েছিল তাঁর জাতিকে অন্ধকার থেকে আলোর দিকে বের করে আনতে এবং তাদের আল্লাহর দিনগুলোর কথা স্মরণ করিয়ে দিতে। এরপর 14:6 একটি নির্দিষ্ট দিনের নাম বলে: স্মরণ করো যখন তিনি তোমাদের ফিরআউনের লোকদের হাত থেকে রক্ষা করেছিলেন, যারা তোমাদের নিকৃষ্টতম শাস্তি দিচ্ছিল।"
          },
          {
            "en": "So gratitude is taught here to people who had just been given something enormous and specific. That is the context the verse asks to be read in: not an abstract principle but the right response to a deliverance one has actually lived through. And 14:8 closes the door on any misunderstanding — Musa says, if you and everyone on earth are ungrateful, Allah is Free of need, Praiseworthy. The increase is entirely for the grateful. Nothing is added to Allah by it.",
            "bn": "অর্থাৎ এখানে কৃতজ্ঞতা শেখানো হচ্ছে এমন মানুষদের, যাদের সবেমাত্র বিশাল ও নির্দিষ্ট কিছু দেওয়া হয়েছে। আয়াতটি এই প্রেক্ষাপটেই পড়তে বলে: কোনো বিমূর্ত নীতি নয়, বরং নিজে ভোগ করা এক উদ্ধারের যথাযথ জবাব। আর 14:8 যেকোনো ভুল বোঝাবুঝির দরজা বন্ধ করে দেয় — মূসা বলেন, তোমরা এবং পৃথিবীর সবাই যদি অকৃতজ্ঞ হও, আল্লাহ অভাবমুক্ত, প্রশংসিত। বৃদ্ধিটি পুরোপুরি কৃতজ্ঞদেরই জন্য। এতে আল্লাহর কিছুই বাড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Gratitude in Practice",
          "bn": "কৃতজ্ঞতার আমল"
        },
        "p": [
          {
            "en": "The Sunnah gives this verse concrete form. Sahih al-Bukhari and Sahih Muslim record that the Prophet ﷺ would stand in prayer at night until his feet swelled, and when asked why, when his sins were forgiven, he answered: shall I not be a grateful servant? Gratitude there is not a feeling produced after a gift but a form of worship offered because of one.",
            "bn": "সুন্নাহ এই আয়াতকে বাস্তব রূপ দেয়। সহীহ বুখারী ও সহীহ মুসলিমে আছে, নবী ﷺ রাতে এত দীর্ঘ নামাজে দাঁড়াতেন যে তাঁর পা ফুলে যেত; জিজ্ঞেস করা হলো, তাঁর গুনাহ তো ক্ষমা করা হয়েছে, তবু কেন? তিনি উত্তর দেন: আমি কি একজন কৃতজ্ঞ বান্দা হব না? সেখানে কৃতজ্ঞতা কোনো দান পাওয়ার পরের অনুভূতি নয়, বরং সেই দানের কারণেই পেশ করা ইবাদত।"
          },
          {
            "en": "There is also a short du'a the Prophet ﷺ taught Mu'adh ibn Jabal (RA), telling him he loved him and instructing him not to leave it after any prayer: Allahumma a'inni ala dhikrika wa shukrika wa husni ibadatik — O Allah, help me to remember You, to thank You, and to worship You well. It is preserved in the Sunan collections and graded sound, and it makes the point that shukr itself is something we need help to do.",
            "bn": "নবী ﷺ মু‘আয ইবনে জাবাল (রাঃ)-কে একটি ছোট দোয়াও শিখিয়েছিলেন, তাঁকে বলে যে তিনি তাঁকে ভালোবাসেন, আর নির্দেশ দেন যেন প্রতিটি নামাজের পর এটি না ছাড়েন: আল্লাহুম্মা আ‘ইন্নী ‘আলা যিকরিকা ওয়া শুকরিকা ওয়া হুসনি ‘ইবাদাতিক — হে আল্লাহ, আপনাকে স্মরণ করতে, আপনার শুকরিয়া আদায় করতে ও উত্তমরূপে আপনার ইবাদত করতে আমাকে সাহায্য করুন। এটি সুনান-গ্রন্থগুলোতে সংরক্ষিত ও নির্ভরযোগ্য, আর এটি বুঝিয়ে দেয় যে শুকর নিজেই এমন কিছু যা করতে আমাদের সাহায্য দরকার।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "আজ যেভাবে এটি জীবনে আসে"
        },
        "p": [
          {
            "en": "The practical difficulty with gratitude is that blessings become invisible by being constant. Nobody thanks Allah for a working knee until it stops working. The verb kafara, to cover, describes that process exactly, and the remedy is simply to make the blessing visible again: name one thing out loud each day, and prefer the ones you have never named — eyesight, a functioning household, a name that is not feared.",
            "bn": "কৃতজ্ঞতার বাস্তব সমস্যা হলো, নিয়ামত ধারাবাহিক হওয়ার কারণেই অদৃশ্য হয়ে যায়। হাঁটু কাজ করা বন্ধ না করা পর্যন্ত কেউ সচল হাঁটুর জন্য আল্লাহর শুকরিয়া করে না। কাফারা অর্থাৎ ঢেকে ফেলা ক্রিয়াটি ঠিক এই প্রক্রিয়াটিই বর্ণনা করে, আর প্রতিকার সহজ — নিয়ামতকে আবার দৃশ্যমান করা: প্রতিদিন একটি জিনিসের নাম উচ্চারণ করুন, আর সেগুলোকেই বেছে নিন যেগুলোর নাম আপনি কখনো নেননি — দৃষ্টিশক্তি, চলমান একটি সংসার, এমন একটি নাম যাকে কেউ ভয় পায় না।"
          },
          {
            "en": "The fuller form is to thank with the thing itself. Wealth is thanked by spending some of it, knowledge by teaching it, health by using it in something worth doing, time by not wasting it on what leaves nothing behind. And gratitude is most useful precisely where it is least natural: in a narrow month, in illness, after a loss. That is where the promise of increase stops being decoration and starts doing work.",
            "bn": "পূর্ণতর রূপ হলো জিনিসটি দিয়েই শুকরিয়া করা। সম্পদের শুকরিয়া তার কিছু খরচ করে, জ্ঞানের শুকরিয়া তা শিখিয়ে, স্বাস্থ্যের শুকরিয়া তা মূল্যবান কাজে লাগিয়ে, সময়ের শুকরিয়া তা এমন কিছুতে নষ্ট না করে যা কিছুই রেখে যায় না। আর কৃতজ্ঞতা সবচেয়ে বেশি কাজে লাগে ঠিক সেখানেই যেখানে তা সবচেয়ে কম স্বাভাবিক: টানাটানির মাসে, অসুস্থতায়, ক্ষতির পরে। সেখানেই বৃদ্ধির প্রতিশ্রুতি আর অলংকার থাকে না, কাজ করতে শুরু করে।"
          }
        ]
      }
    ]
  },
  "14:24-26": {
    "sections": [
      {
        "h": {
          "en": "A Question That Draws a Picture",
          "bn": "একটি প্রশ্ন যা ছবি আঁকে"
        },
        "p": [
          {
            "en": "The passage begins with a question: have you not seen how Allah sets forth a parable? A good word is like a good tree — its root firm, its branches in the sky, giving its fruit all the time by the permission of its Lord. Surah Ibrahim keeps returning to what messengers say and what their peoples say back to them, so a parable about words sits at the surah's own centre of gravity. Speech, it insists, is not passing air; it is a living thing that either has roots or does not.",
            "bn": "অনুচ্ছেদটি শুরু হয় একটি প্রশ্ন দিয়ে: তুমি কি দেখোনি আল্লাহ কীভাবে উপমা পেশ করেন? সৎ বাণী এক ভালো গাছের মতো — তার শিকড় দৃঢ়, তার শাখা আকাশে, তার প্রভুর অনুমতিতে সব সময় ফল দেয়। সূরা ইবরাহীম বারবার ফিরে আসে রাসূলগণ কী বলেন আর তাঁদের জাতিরা পাল্টা কী বলে সেই প্রসঙ্গে; তাই বাণী নিয়ে একটি উপমা সূরাটির নিজস্ব ভরকেন্দ্রেই বসে আছে। এর জোর দাবি: কথা উড়ে যাওয়া বাতাস নয়; কথা এক জীবন্ত জিনিস — হয় তার শিকড় আছে, নয়তো নেই।"
          },
          {
            "en": "Each phrase carries weight. Asluha thabit — thabit is an active participle, describing a root that goes on holding, not an act that happens once and passes. Far'uha fis-sama' — its branch is in the sky, so the tree is fed from what falls from above as well as from what lies below. And the fruit comes kulla hin, at every time, yet only bi-idhni rabbiha, by the permission of its Lord: the usefulness is constant, but it is never self-made.",
            "bn": "প্রতিটি শব্দগুচ্ছ ওজন বহন করে। আসলুহা সাবিত — সাবিত একটি কর্তৃবাচক বিশেষণপদ (ইসমুল ফাইল), যা বর্ণনা করে এমন শিকড় যা ধরে রাখতেই থাকে; এটি একবার ঘটে চলে যাওয়া কোনো কাজ নয়। ফারউহা ফিস-সামা — তার শাখা আকাশে, তাই গাছটি নিচে যা আছে তার পাশাপাশি উপর থেকে যা নামে তা থেকেও পুষ্টি পায়। আর ফল আসে কুল্লা হীন, প্রতিটি সময়ে, তবু কেবল বি-ইযনি রাব্বিহা, তার প্রভুর অনুমতিতে: উপকার অবিরাম, কিন্তু তা কখনোই স্বয়ংসৃষ্ট নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Good Word Is",
          "bn": "সৎ বাণীটি কী"
        },
        "p": [
          {
            "en": "The early commentators, as al-Tabari and Ibn Kathir relate, read the good word first of all as the word of tawhid — la ilaha illallah — and the good tree as the believer, or as the date palm. Al-Bukhari narrates from Ibn Umar (RA) that the Prophet ﷺ once asked his companions about a tree whose leaves do not fall and which is like the Muslim; the people's minds went to the trees of the desert, and then he told them, \"It is the date palm.\"",
            "bn": "প্রাথমিক যুগের মুফাসসিরগণ — আত-তাবারী ও ইবনে কাসীর যেমন বর্ণনা করেন — সৎ বাণীকে সর্বপ্রথম পড়েছেন তাওহীদের কালিমা হিসেবে — লা ইলাহা ইল্লাল্লাহ — আর ভালো গাছটিকে মুমিন হিসেবে, অথবা খেজুর গাছ হিসেবে। আল-বুখারী ইবনে উমর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ একবার সাহাবীদের এমন এক গাছের কথা জিজ্ঞেস করলেন যার পাতা ঝরে না এবং যা মুসলিমের মতো; লোকদের মন চলে গেল মরুভূমির গাছগুলোর দিকে, তারপর তিনি তাদের বললেন, \"সেটি খেজুর গাছ।\""
          },
          {
            "en": "The parable widens naturally from there. Every truthful, wholesome word — the testimony of faith, dhikr, honest counsel, kind and healing speech — shares the same shape: hidden roots in a sound heart, a visible reach upward, and fruit that other people eat season after season. The one who plants such a word rarely sees how far its benefit travels, just as a tree does not watch who gathers from its branches or where the seeds of its fruit are carried.",
            "bn": "সেখান থেকে উপমাটি স্বাভাবিকভাবে প্রশস্ত হয়। প্রতিটি সত্য, কল্যাণময় কথা — ঈমানের সাক্ষ্য, যিকর, সৎ পরামর্শ, সদয় ও উপশমকারী কথা — একই আকৃতি বহন করে: সুস্থ অন্তরে লুকানো শিকড়, ঊর্ধ্বমুখী দৃশ্যমান বিস্তার, আর এমন ফল যা অন্য মানুষেরা মৌসুমের পর মৌসুম খেতে থাকে। এমন কথা যে রোপণ করে সে কদাচিৎ দেখতে পায় তার উপকার কত দূর পৌঁছায় — যেমন একটি গাছও দেখে না কে তার ডাল থেকে ফল কুড়ায় বা তার ফলের বীজ কোথায় বাহিত হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Uprooted Tree",
          "bn": "উপড়ানো গাছটি"
        },
        "p": [
          {
            "en": "The contrast in 14:26 is exact: a bad word is like a bad tree, uprooted from above the surface of the earth, having no stability. The verb ijtuththat is passive — the tree did not simply fall, it was torn out — and min fawqil-ard adds that even what showed above ground is gone. The Quran does not name this tree, and the parable does not need it named: everything that defines it is already said in the fact that nothing anchors it.",
            "bn": "14:26 আয়াতের বৈপরীত্য নিখুঁত: মন্দ বাণী এক মন্দ গাছের মতো, ভূপৃষ্ঠের ওপর থেকে উপড়ে ফেলা, যার কোনো স্থিতি নেই। ক্রিয়াপদ ইজতুস্‌সাত কর্মবাচ্যে — গাছটি এমনি পড়ে যায়নি, তাকে ছিঁড়ে তোলা হয়েছে — আর মিন ফাওকিল-আরদ যোগ করে যে মাটির ওপরে যা দেখা যেত তাও আর নেই। কুরআন এই গাছের নাম বলে না, আর উপমার তা বলার দরকারও নেই: যা কিছু একে সংজ্ঞায়িত করে তার সবটাই বলা হয়ে গেছে এই একটি তথ্যে — কোনো কিছুই একে ধরে রাখে না।"
          },
          {
            "en": "Falsehood can look leafy for a season. Shirk had its temples, slander travels fast, and a fashionable lie can shade a whole generation. The parable concedes the appearance and denies the root: ma laha min qarar — it has no place of settling. When the wind of trial arrives, the good tree bends and holds because it is held from below; the other is already lying on the surface of a ground it never truly entered.",
            "bn": "মিথ্যা এক মৌসুমের জন্য পাতাভরা দেখাতে পারে। শিরকের ছিল মন্দির, অপবাদ ছড়ায় দ্রুত, আর একটি হাল-ফ্যাশনের মিথ্যা গোটা এক প্রজন্মকে ছায়া দিতে পারে। উপমাটি এই বাহ্যিক চেহারা মেনে নেয়, কিন্তু শিকড় অস্বীকার করে: মা লাহা মিন কারার — তার থিতু হওয়ার কোনো জায়গা নেই। পরীক্ষার ঝড় যখন আসে, ভালো গাছ নুয়ে পড়েও টিকে থাকে, কারণ নিচ থেকে কিছু তাকে ধরে রেখেছে; অন্যটি ততক্ষণে সেই মাটির ওপরে শুয়ে আছে, যার ভেতরে সে আসলে কখনো ঢোকেইনি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Firm Word in the Grave",
          "bn": "কবরে সুদৃঢ় বাণী"
        },
        "p": [
          {
            "en": "The verse that follows completes the parable's promise: in 14:27 Allah keeps firm those who believe, with the firm word, in the life of this world and in the Hereafter. Al-Bukhari narrates from al-Bara' ibn 'Azib (RA) that the Prophet ﷺ explained this steadying to include the questioning in the grave, when the believer testifies that there is no god but Allah and that Muhammad ﷺ is His messenger — and that this is what the verse means.",
            "bn": "পরের আয়াতটি উপমার প্রতিশ্রুতি সম্পূর্ণ করে: 14:27 আয়াতে আল্লাহ মুমিনদের সুদৃঢ় বাণী দিয়ে দৃঢ়পদ রাখেন — দুনিয়ার জীবনে এবং আখিরাতে। আল-বুখারী আল-বারা ইবনে আযিব (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ ব্যাখ্যা করেছেন এই দৃঢ়পদ রাখা কবরের প্রশ্নোত্তরকেও অন্তর্ভুক্ত করে — যখন মুমিন সাক্ষ্য দেয় যে আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মাদ ﷺ তাঁর রাসূল — আর এটিই এই আয়াতের অর্থ।"
          },
          {
            "en": "This is the parable's deepest layer. The word planted in this life is the same word by which its speaker stands when everything else has been taken away — wealth, family, even the tongue's own strength. A tree with a firm root survives the changing seasons because what holds it is out of the weather's reach; a heart rooted in tawhid survives the one question that no one can rehearse for, except by having lived its answer.",
            "bn": "এটিই উপমার গভীরতম স্তর। এই জীবনে রোপণ করা বাণীটিই সেই বাণী, যার ওপর ভর করে তার বক্তা দাঁড়িয়ে থাকে যখন বাকি সবকিছু কেড়ে নেওয়া হয়েছে — সম্পদ, পরিবার, এমনকি জিহ্বার নিজের শক্তিটুকুও। দৃঢ় শিকড়ের গাছ ঋতুবদল পার হয়ে টিকে থাকে, কারণ যা তাকে ধরে রাখে তা আবহাওয়ার নাগালের বাইরে; তেমনি তাওহীদে শিকড় গাড়া হৃদয় পার হয়ে যায় সেই একটি প্রশ্ন, যার মহড়া কেউ দিতে পারে না — উত্তরটি যাপন করা ছাড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Planting and Weeding",
          "bn": "রোপণ ও আগাছা পরিষ্কার"
        },
        "p": [
          {
            "en": "Lived plainly, the parable becomes a daily audit of speech. Words of dhikr, teaching, truthful witness and gentle counsel are seeds with long lives; a believer can plant them in a child, a class, a conversation, a message, and the fruit keeps returning kulla hin — long after the words have been forgotten by the one who said them. The surah's own model is Ibrahim (AS), whose prayer in 14:40 asks that the establishing of prayer continue in his descendants after him.",
            "bn": "সাদামাটাভাবে যাপন করলে উপমাটি হয়ে ওঠে কথার এক দৈনিক হিসাব-নিরীক্ষা। যিকরের কথা, শিক্ষাদান, সত্য সাক্ষ্য ও কোমল পরামর্শ — এগুলো দীর্ঘজীবী বীজ; একজন মুমিন সেগুলো রোপণ করতে পারে একটি শিশুতে, একটি ক্লাসে, একটি কথোপকথনে, একটি বার্তায়, আর ফল ফিরে আসতে থাকে কুল্লা হীন — বক্তা নিজে কথাগুলো ভুলে যাওয়ার বহু পরেও। সূরাটির নিজের আদর্শ ইবরাহীম (আঃ), যাঁর দোয়া 14:40 আয়াতে চায় — নামায কায়েম করা যেন তাঁর পরে তাঁর বংশধরদের মধ্যেও চলতে থাকে।"
          },
          {
            "en": "The other half of the work is weeding: refusing to pass on the unrooted word — the rumour, the mockery, the confident falsehood. Such speech costs nothing to repeat and nothing to fell, but it can crush whatever it lands on. Whoever keeps the tongue for words with roots is building, in the language of 14:27 itself, the very firmness by which Allah steadies His servant in this world and after death.",
            "bn": "কাজের অন্য অর্ধেক হলো আগাছা পরিষ্কার: শিকড়হীন কথা এগিয়ে দিতে অস্বীকার করা — গুজব, বিদ্রূপ, আত্মবিশ্বাসী মিথ্যা। এমন কথা পুনরাবৃত্তি করতেও খরচ নেই, ভেঙে পড়তেও না — কিন্তু যার ওপর গিয়ে পড়ে তাকে তা পিষে দিতে পারে। যে জিহ্বাকে শিকড়ওয়ালা কথার জন্য তুলে রাখে, সে — 14:27 আয়াতের নিজের ভাষায় — সেই দৃঢ়তাই গড়ে তুলছে, যা দিয়ে আল্লাহ তাঁর বান্দাকে এই দুনিয়ায় এবং মৃত্যুর পরে অবিচল রাখেন।"
          }
        ]
      }
    ]
  },
  "14:34": {
    "sections": [
      {
        "h": {
          "en": "The Sum of a List of Gifts",
          "bn": "উপহারের তালিকার যোগফল"
        },
        "p": [
          {
            "en": "This verse concludes an inventory. In 14:32-33 Allah recounts what He has set to work for mankind: He created the heavens and the earth, sent down water from the sky and brought out fruits as provision, subjected the ships to run upon the sea by His command, the rivers, the sun and the moon persistent in their courses, and the night and the day. Each item is something no human hand built and no human bill ever paid for.",
            "bn": "এই আয়াতটি একটি তালিকার উপসংহার। 14:32-33 আয়াতে আল্লাহ বর্ণনা করেন মানুষের জন্য তিনি কী কী নিয়োজিত করেছেন: তিনি আসমান ও যমীন সৃষ্টি করেছেন, আকাশ থেকে পানি নামিয়ে রিযিক হিসেবে ফলমূল বের করেছেন, তাঁর হুকুমে সমুদ্রে চলার জন্য নৌযানকে অধীন করেছেন, নদীগুলোকে, নিজ নিজ কক্ষপথে অবিরাম চলা সূর্য ও চাঁদকে, আর রাত ও দিনকে অধীন করেছেন। এর প্রতিটিই এমন জিনিস, যা কোনো মানুষের হাত বানায়নি এবং যার জন্য কোনো মানুষের বিল কোনোদিন শোধ হয়নি।"
          },
          {
            "en": "Then comes the summary: wa atakum min kulli ma sa'altumuh, and He gave you from all that you asked of Him. The verb atakum is in the past tense — the giving has already happened, before any thanks were considered. Reading the list and the summary together makes the verse's method plain: it does not argue for gratitude in the abstract, it walks the reader through the warehouse first and then asks them to consider the ledger.",
            "bn": "তারপর আসে সারকথা: ওয়া আতাকুম মিন কুল্লি মা সাআলতুমূহ — আর তোমরা তাঁর কাছে যা চেয়েছ তার সবকিছু থেকেই তিনি তোমাদের দিয়েছেন। আতাকুম ক্রিয়াটি অতীতকালের — দেওয়ার কাজটি আগেই ঘটে গেছে, কৃতজ্ঞতার কথা ভাবার আগেই। তালিকা ও সারকথা একসঙ্গে পড়লে আয়াতের পদ্ধতিটি স্পষ্ট হয়: এটি বিমূর্তভাবে কৃতজ্ঞতার পক্ষে যুক্তি দেয় না; আগে পাঠককে গুদামঘরের ভেতর দিয়ে হাঁটিয়ে আনে, তারপর হিসাবের খাতাটি বিবেচনা করতে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "What You Asked and What You Did Not",
          "bn": "যা চেয়েছেন আর যা চাননি"
        },
        "p": [
          {
            "en": "The commentators pause on min kulli ma sa'altumuh, from all that you asked of Him. Taken one way, it means every category of thing humans have requested has been drawn upon for you. But they also point out that most of what sustains us was never requested at all. No one asked for lungs before drawing a first breath; no one petitioned for the sun. Allah gave in answer to asking, long before asking, and gave what we would never have known to ask.",
            "bn": "মুফাসসিরগণ থামেন 'মিন কুল্লি মা সাআলতুমূহ' — তোমরা তাঁর কাছে যা চেয়েছ তার সবকিছু থেকে — এই অংশে। এক অর্থে এর মানে: মানুষ যত শ্রেণির জিনিস চেয়েছে, তার প্রতিটি থেকেই তোমাদের দেওয়া হয়েছে। কিন্তু তাঁরা এ-ও লক্ষ করেন, আমাদের বাঁচিয়ে রাখে এমন অধিকাংশ জিনিস কখনো চাওয়াই হয়নি। প্রথম নিঃশ্বাস নেওয়ার আগে কেউ ফুসফুস চায়নি; সূর্যের জন্য কেউ আবেদন করেনি। আল্লাহ চাওয়ার জবাবে, চাওয়ার বহু আগে, আর এমন সব জিনিস দিয়েছেন যা চাইতে হয় তা-ও আমরা জানতাম না।"
          },
          {
            "en": "That widening changes how a person prays. If the record shows that the unasked gifts outnumber the asked ones, then asking is not the engine of provision — generosity is. We do not extract blessings from a reluctant giver by the force of our requests; we name a few needs to a Lord who has been supplying thousands of unnamed ones all along. Du'a remains commanded and beloved, riding on a giving that never waited for it.",
            "bn": "এই প্রসারতা মানুষের দুআর ধরন বদলে দেয়। হিসাব যদি দেখায় যে না-চাওয়া দানগুলো চাওয়া দানের চেয়ে বেশি, তবে চাওয়া রিযিকের ইঞ্জিন নয় — ইঞ্জিন হলো দানশীলতা। আমরা অনুরোধের জোরে কোনো অনিচ্ছুক দাতার কাছ থেকে নিয়ামত আদায় করি না; বরং এমন এক রবের কাছে গুটিকয় প্রয়োজনের নাম বলি, যিনি এতকাল ধরে হাজারো নাম-না-জানা প্রয়োজন মিটিয়ে আসছেন। দুআ আদিষ্ট ও প্রিয়ই থাকে — এমন এক দানের ওপর ভর করে, যে দান কখনো দুআর অপেক্ষায় থাকেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Count That Cannot Finish",
          "bn": "যে গণনা শেষ হয় না"
        },
        "p": [
          {
            "en": "Then the famous clause: wa in ta'uddu ni'mata Allahi la tuhsuha, and if you should count the favour of Allah, you could not enumerate it. The verb tuhsuha comes from ihsa', which means exact, exhaustive enumeration — not a rough tally but a complete audit. And the thing being counted is named in the singular, ni'mah, favour: the commentators observe that even a single blessing resists the audit, because each one unfolds into others.",
            "bn": "তারপর বিখ্যাত বাক্যাংশটি: ওয়া ইন তাউদ্দূ নি'মাতাল্লাহি লা তুহসূহা — আর তোমরা আল্লাহর নিয়ামত গণনা করলে তার সংখ্যা নির্ণয় করতে পারবে না। তুহসূহা ক্রিয়াটি এসেছে ইহসা থেকে, যার অর্থ নির্ভুল, পূর্ণাঙ্গ গণনা — মোটামুটি হিসাব নয়, সম্পূর্ণ নিরীক্ষা। আর যা গোনা হচ্ছে তার নাম এসেছে একবচনে — নি'মাহ, নিয়ামত: মুফাসসিরগণ লক্ষ করেন, একটিমাত্র নিয়ামতও এই নিরীক্ষায় ধরা দেয় না, কারণ প্রতিটি নিয়ামত খুলে গেলে আরও নিয়ামত বেরিয়ে আসে।"
          },
          {
            "en": "Test the claim on anything small. Count what one working eye involves: the tear film, the lens, the nerve, the brain's processing, the light itself, and the safety of every day on which nothing struck it. Each item on that list opens its own list. The verse is not exaggerating for effect; it is stating an arithmetic fact about a sum with no bottom. The honest accountant closes the books and converts the audit into thanks.",
            "bn": "দাবিটি ছোট যেকোনো কিছুর ওপর যাচাই করুন। একটি সচল চোখে কী কী জড়িত তা গুনে দেখুন: অশ্রুর আস্তরণ, লেন্স, স্নায়ু, মস্তিষ্কের প্রক্রিয়াকরণ, খোদ আলো, আর সেই প্রতিটি দিনের নিরাপত্তা যেদিন কিছুই তাতে আঘাত করেনি। ওই তালিকার প্রতিটি জিনিস আবার নিজের একটি তালিকা খুলে দেয়। আয়াতটি প্রভাব ফেলার জন্য অতিরঞ্জন করছে না; এটি এমন এক যোগফলের পাটিগণিতীয় সত্য বলছে, যার কোনো তলা নেই। সৎ হিসাবরক্ষক তাই খাতা বন্ধ করে নিরীক্ষাকে শুকরিয়ায় বদলে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Heavy Words at the End",
          "bn": "শেষে দুটি ভারী শব্দ"
        },
        "p": [
          {
            "en": "The verse closes with a diagnosis: inna al-insana la-zalumun kaffar, indeed mankind is persistently unjust, deeply ungrateful. Both words are intensive forms in Arabic — zalum and kaffar are patterns that signal repetition and excess, not an occasional slip. The injustice named here, the commentators explain, includes putting blessings to wrong use and crediting them to the wrong source; the ingratitude is the settled habit of noticing what is missing while consuming what is present.",
            "bn": "আয়াতটি শেষ হয় একটি রোগনির্ণয়ে: ইন্নাল-ইনসানা লা-যালূমুন কাফফার — নিশ্চয়ই মানুষ বড়ই জালিম, ভীষণ অকৃতজ্ঞ। দুটি শব্দই আরবিতে আধিক্যবাচক রূপ — যালূম ও কাফফার এমন গঠন, যা পুনরাবৃত্তি ও মাত্রাছাড়ানোর ইঙ্গিত দেয়, কালেভদ্রে একটি ভুলের নয়। মুফাসসিরগণ ব্যাখ্যা করেন, এখানে যে জুলুমের কথা, তার মধ্যে আছে নিয়ামতের অপব্যবহার এবং তা ভুল উৎসের নামে চালানো; আর অকৃতজ্ঞতা হলো সেই বদ্ধমূল অভ্যাস — যা আছে তা ভোগ করতে করতে যা নেই তা-ই কেবল চোখে পড়া।"
          },
          {
            "en": "The Quran contains a sister clause. In 16:18 the same words appear — if you count the favour of Allah, you cannot enumerate it — but the ending differs: there the verse concludes that Allah is Forgiving, Merciful. The commentators set the two endings side by side. This verse names what we are; that verse names what He is. Faced with an uncountable debt held by an uncounting debtor, His response is not collection but forgiveness — which is itself one more favour that escaped our audit.",
            "bn": "কুরআনে এর একটি সহোদরা বাক্য আছে। 16:18 আয়াতে একই কথাগুলো আসে — আল্লাহর নিয়ামত গণনা করলে তোমরা তার সংখ্যা নির্ণয় করতে পারবে না — কিন্তু সমাপ্তি ভিন্ন: সেখানে আয়াতের উপসংহার, আল্লাহ ক্ষমাশীল, পরম দয়ালু। মুফাসসিরগণ দুটি সমাপ্তিকে পাশাপাশি রাখেন। এই আয়াত বলে আমরা কেমন; ওই আয়াত বলে তিনি কেমন। গণনায় অক্ষম এক দেনাদারের কাঁধে অগণনীয় ঋণ — তার জবাবে তিনি আদায় নন, ক্ষমা বেছে নেন; আর সেটিও তো আরেকটি নিয়ামত, যা আমাদের নিরীক্ষার বাইরে থেকে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Gratitude Multiplies the Gift",
          "bn": "কৃতজ্ঞতা দানকে বাড়িয়ে দেয়"
        },
        "p": [
          {
            "en": "The same surah has already stated what gratitude does. In 14:7 your Lord proclaimed: if you are grateful, I will surely increase you, but if you deny, indeed My punishment is severe. Set beside this verse, the two form a hinge. The favours cannot be counted, and mankind tends to thanklessness — yet the door out of that condition is not to finish the count, which is impossible, but to thank, which multiplies the very thing being counted.",
            "bn": "একই সূরা আগেই বলে দিয়েছে কৃতজ্ঞতা কী করে। 14:7 আয়াতে তোমাদের রব ঘোষণা করেছেন: তোমরা কৃতজ্ঞ হলে আমি অবশ্যই তোমাদের বাড়িয়ে দেব, আর অস্বীকার করলে নিশ্চয়ই আমার শাস্তি কঠিন। এই আয়াতের পাশে রাখলে দুটি মিলে একটি কবজা তৈরি করে। নিয়ামত গোনা যায় না, আর মানুষের ঝোঁক অকৃতজ্ঞতার দিকে — অথচ সেই অবস্থা থেকে বেরোনোর দরজা গণনা শেষ করা নয়, তা তো অসম্ভব; দরজা হলো শুকরিয়া, যা খোদ গণনার বিষয়বস্তুকেই বহুগুণ করে।"
          },
          {
            "en": "The Prophet ﷺ modelled what thanking an uncountable Giver looks like. Al-Bukhari narrates from al-Mughirah ibn Shu'bah (RA) that the Prophet ﷺ would stand in night prayer until his feet swelled, and when asked why he did this when his past and future sins had been forgiven, he answered: should I not be a grateful servant? Gratitude, in that answer, is not payment towards a balance. It is a relationship that grows warmer the more clearly the debt is seen.",
            "bn": "অগণনীয় দাতাকে কীভাবে শুকরিয়া জানাতে হয়, নবী ﷺ তার নমুনা দেখিয়েছেন। বুখারী মুগীরা ইবনে শু'বা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ রাতের নামাযে এত দীর্ঘ দাঁড়াতেন যে তাঁর দুই পা ফুলে যেত; জিজ্ঞেস করা হলো, আপনার আগের-পরের গুনাহ তো মাফ হয়ে গেছে, তবু কেন — তিনি উত্তর দিলেন: আমি কি কৃতজ্ঞ বান্দা হব না? সেই উত্তরে কৃতজ্ঞতা কোনো হিসাব মেটানোর কিস্তি নয়। এটি এমন এক সম্পর্ক, ঋণ যত স্পষ্ট দেখা যায় যা তত উষ্ণ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Begin Counting Anyway",
          "bn": "তবু গোনা শুরু করুন"
        },
        "p": [
          {
            "en": "The verse says the count cannot be finished; it never says the count should not be started. The classical teachers of the heart prescribed exactly this exercise, because the attempt itself is the cure. List ten blessings tonight — specific ones, with names and dates — and the listing will run into the same wall the verse describes: every item splits into more. A person who hits that wall regularly finds complaint harder to sustain, because the inventory keeps interrupting it.",
            "bn": "আয়াতটি বলে গণনা শেষ করা যাবে না; এ কথা কখনো বলে না যে গণনা শুরু করা উচিত নয়। অন্তরের প্রাচীন শিক্ষকগণ ঠিক এই অনুশীলনটিই বাতলে দিয়েছেন, কারণ চেষ্টাটাই ওষুধ। আজ রাতে দশটি নিয়ামতের তালিকা করুন — সুনির্দিষ্টগুলো, নাম-তারিখসহ — দেখবেন তালিকাটি আয়াতে বর্ণিত সেই দেয়ালেই গিয়ে ঠেকছে: প্রতিটি জিনিস ভেঙে আরও জিনিস বেরোচ্ছে। যে মানুষ নিয়মিত ওই দেয়ালে ঠেকে, তার পক্ষে অভিযোগ টিকিয়ে রাখা কঠিন হয়ে পড়ে, কারণ হিসাবের খাতা বারবার তাতে বাধা দেয়।"
          },
          {
            "en": "Gratitude then wants three outlets, as the scholars describe it: the heart's acknowledgement that every gift traces back to Allah, the tongue's praise, and the limbs' use of each blessing in ways its Giver approves. Eyes given free are thanked by what they read and refuse to read; wealth given unasked is thanked at the point of spending. The verse's closing words about injustice and ingratitude stop being our description the moment the counting, the thanking and the using begin.",
            "bn": "এরপর কৃতজ্ঞতা তিনটি পথ খোঁজে, আলিমগণ যেভাবে বর্ণনা করেছেন: অন্তরের স্বীকৃতি যে প্রতিটি দান আল্লাহর কাছ থেকেই এসেছে, জিহ্বার প্রশংসা, আর অঙ্গ-প্রত্যঙ্গ দিয়ে প্রতিটি নিয়ামতকে তার দাতার পছন্দের পথে ব্যবহার। বিনামূল্যে পাওয়া চোখের শুকরিয়া হয় সে কী পড়ে আর কী পড়তে অস্বীকার করে তা দিয়ে; না চাইতে পাওয়া সম্পদের শুকরিয়া হয় খরচের মুহূর্তে। গণনা, শুকরিয়া আর সদ্ব্যবহার শুরু হওয়ামাত্র জুলুম ও অকৃতজ্ঞতা নিয়ে আয়াতের শেষ কথাগুলো আর আমাদের বর্ণনা থাকে না।"
          }
        ]
      }
    ]
  },
  "14:40-41": {
    "sections": [
      {
        "h": {
          "en": "The Close of a Long Prayer",
          "bn": "দীর্ঘ প্রার্থনার সমাপ্তি"
        },
        "p": [
          {
            "en": "These two verses end a passage of Ibrahim's (AS) speech that opens at 14:35, where he asks that this city be made secure and that he and his sons be kept from worshipping idols. Along the way, 14:37 has him settling some of his offspring in an uncultivated valley by the Sacred House liyuqimu as-salah, so that they would establish prayer.",
            "bn": "এই দুটি আয়াত ইবরাহীম (আঃ)-এর সেই বক্তব্যের সমাপ্তি টানে, যা শুরু হয় 14:35-এ — সেখানে তিনি চান এই নগরীকে নিরাপদ করা হোক এবং তিনি ও তাঁর সন্তানেরা মূর্তিপূজা থেকে রক্ষা পান। মাঝপথে 14:37-এ তিনি তাঁর বংশধরদের একাংশকে সম্মানিত ঘরের পাশে শস্যহীন উপত্যকায় বসিয়ে দেন লিইউকীমুস সালাহ — যাতে তারা নামায কায়েম করে।"
          },
          {
            "en": "Just before the closing petitions comes praise rather than a request. In 14:39 he says: praise to Allah, who granted me Isma'il and Ishaq in old age; indeed my Lord is the Hearer of supplication. So the two verses that follow are spoken by a man who has already been answered once, at an age when the answer looked impossible. He does not stop asking after the gift arrives.",
            "bn": "শেষ আবেদনগুলোর ঠিক আগে আসে চাওয়া নয়, প্রশংসা। 14:39-এ তিনি বলেন: সমস্ত প্রশংসা আল্লাহর, যিনি বার্ধক্যে আমাকে ইসমাঈল ও ইসহাক দান করেছেন; নিশ্চয় আমার প্রতিপালক দোয়া শ্রবণকারী। কাজেই পরের দুটি আয়াত সেই ব্যক্তির মুখের কথা, যাঁর একটি দোয়া ইতিমধ্যেই কবুল হয়েছে — এমন এক বয়সে, যখন কবুল হওয়াটাকেই অসম্ভব মনে হচ্ছিল। দান পাওয়ার পরও তিনি চাওয়া থামান না।"
          }
        ]
      },
      {
        "h": {
          "en": "Make Me One Who Establishes Prayer",
          "bn": "আমাকে নামায প্রতিষ্ঠাকারী বানাও"
        },
        "p": [
          {
            "en": "Rabbi ij'alni muqima as-salah. He does not ask to pray; he asks to be made muqim as-salah, an active participle naming a settled kind of person rather than a single act. The difference is the difference between managing a prayer today and being someone through whom prayer keeps standing. He is asking for an identity, and asking for it from the only One who can install it.",
            "bn": "রাব্বিজ'আলনী মুকীমাস সালাহ। তিনি নামায পড়ার সুযোগ চান না; তিনি চান তাঁকে বানানো হোক মুকীমুস সালাহ — এটি একটি কর্তৃবাচক বিশেষণ, যা কোনো একক কাজ নয়, বরং একটি স্থায়ী ধরনের মানুষকে নির্দেশ করে। পার্থক্যটা হলো আজ একটি নামায সামলে নেওয়া, আর এমন একজন হওয়া যার মধ্য দিয়ে নামায দাঁড়িয়ে থাকে — এই দুইয়ের পার্থক্য। তিনি চাইছেন একটি পরিচয়, আর চাইছেন সেই একজনের কাছেই, যিনি তা বসিয়ে দিতে পারেন।"
          },
          {
            "en": "It is worth sitting with the fact that a prophet asks this at the end of his life. He had already left his people, faced a fire, migrated, and settled his family beside the House for the sake of prayer. None of that is offered here as a qualification. The request assumes that steadiness in worship is granted and re-granted, never banked, however long a record of it a person has.",
            "bn": "একটু থেমে ভাবার মতো বিষয় এই যে, জীবনের শেষপ্রান্তে এসে একজন নবী এটিই চাইছেন। তিনি ইতিমধ্যেই স্বজাতি ছেড়েছেন, আগুনের মুখোমুখি হয়েছেন, হিজরত করেছেন এবং নামাযের জন্যই পরিবারকে সেই ঘরের পাশে বসিয়েছেন। এর কোনোটিকেই এখানে যোগ্যতা হিসেবে পেশ করা হয়নি। আবেদনটি ধরে নেয় যে, ইবাদতে অবিচলতা বারবার দান করা হয়, কখনো জমা করে রাখা যায় না — মানুষের অতীত রেকর্ড যত দীর্ঘই হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "And From My Descendants",
          "bn": "আর আমার বংশধরদের থেকেও"
        },
        "p": [
          {
            "en": "The next words are wa min dhurriyyati, and from my descendants. The preposition min introduces a portion, which is why the app's English renders it as many from my descendants rather than all of them. Ibrahim (AS) had been taught the reason for that caution directly. In 2:124 he was made a leader for mankind, asked and of my descendants, and was answered: My covenant does not include the wrongdoers.",
            "bn": "পরের কথাগুলো হলো ওয়া মিন যুররিয়্যাতী — আর আমার বংশধরদের থেকেও। 'মিন' অব্যয়টি একটি অংশ বোঝায়, তাই অ্যাপের ইংরেজি অনুবাদে এটি এসেছে 'আমার বংশধরদের মধ্য হতে অনেককে' — সবাইকে নয়। এই সতর্কতার কারণ ইবরাহীম (আঃ)-কে সরাসরিই শেখানো হয়েছিল। 2:124-এ তাঁকে মানুষের জন্য নেতা করা হয়, তিনি জিজ্ঞেস করেন 'আর আমার বংশধরদের থেকেও?', আর উত্তর আসে: আমার অঙ্গীকার যালিমদের নাগাল পায় না।"
          },
          {
            "en": "So the request is shaped by what he already knew. He does not claim his line; he asks for a portion of it, and for the one thing he most wants continued. The same instinct appears at 2:128, where he and Isma'il (AS) ask that a submitting community be raised from their offspring. A father's prayer here is not for comfort but for worship.",
            "bn": "কাজেই আবেদনটির আকার গড়ে দিয়েছে তাঁর আগে থেকে জানা কথাটিই। তিনি নিজের বংশকে দাবি করেন না; তার একটি অংশ চান — আর চান সেই একটি জিনিসই, যার ধারাবাহিকতা তিনি সবচেয়ে বেশি চান। একই প্রবণতা দেখা যায় 2:128-এ, যেখানে তিনি ও ইসমাঈল (আঃ) চান তাঁদের বংশ থেকে একটি আত্মসমর্পণকারী জাতি উঠুক। এখানে এক পিতার দোয়া আরামের জন্য নয়, ইবাদতের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Accept My Supplication",
          "bn": "আমার দোয়া কবুল করো"
        },
        "p": [
          {
            "en": "Then the address shifts. Up to this point he has said rabbi, my Lord; now he says rabbana, our Lord, and adds wa taqabbal du'a, and accept my supplication. That clause appears nowhere else in the Quran. Having asked for things, he asks that the asking itself be received — a petition about petitions, placed last so that everything before it is covered by it.",
            "bn": "এরপর সম্বোধন বদলে যায়। এতক্ষণ তিনি বলেছেন রাব্বি — হে আমার প্রতিপালক; এখন বলেন রাব্বানা — হে আমাদের প্রতিপালক, এবং যোগ করেন ওয়া তাকাব্বাল দুআ — আর আমার দোয়া কবুল করো। এই বাক্যাংশটি কুরআনে আর কোথাও নেই। বিভিন্ন জিনিস চাওয়ার পর তিনি চান চাওয়াটাই যেন গৃহীত হয় — চাওয়া নিয়ে একটি চাওয়া, যা সবার শেষে রাখা হয়েছে, যাতে তার আগের সবকিছু এর আওতায় এসে যায়।"
          },
          {
            "en": "Across these two verses there are three imperatives: make me, and accept, and forgive. That is a small number for a prayer that reaches so far, and the smallness is instructive. Ibrahim (AS) does not list circumstances or name outcomes. He asks to be made a certain kind of servant, asks that the asking be received, and asks for pardon — and stops.",
            "bn": "এই দুই আয়াতে আদেশবাচক ক্রিয়া আছে তিনটি: আমাকে বানাও, কবুল করো, আর ক্ষমা করো। এত দূর পর্যন্ত পৌঁছানো একটি দোয়ার জন্য সংখ্যাটি ছোট, আর এই ছোট হওয়াটাই শিক্ষণীয়। ইবরাহীম (আঃ) পরিস্থিতির তালিকা দেন না, ফলাফলেরও নাম নেন না। তিনি চান তাঁকে একধরনের বান্দা বানানো হোক, চান চাওয়াটি গৃহীত হোক, আর চান ক্ষমা — তারপর থেমে যান।"
          }
        ]
      },
      {
        "h": {
          "en": "Me, My Parents, the Believers",
          "bn": "আমি, আমার পিতামাতা, মুমিনগণ"
        },
        "p": [
          {
            "en": "In 14:41 the circle widens in one breath: forgive me, and my parents, and the believers. The order is worth noticing. He begins with himself, which is the honest place to begin, moves to the two people he owes most, and ends with everyone who shares his faith, most of whom had not yet been born when he said it.",
            "bn": "14:41-এ বৃত্তটি এক নিঃশ্বাসে প্রশস্ত হয়: আমাকে ক্ষমা করো, আর আমার পিতামাতাকে, আর মুমিনদেরকে। ক্রমটি লক্ষ করার মতো। তিনি শুরু করেন নিজেকে দিয়ে — শুরু করার সৎ জায়গাটি এখানেই; তারপর যান সেই দুজনের কাছে যাঁদের কাছে তাঁর ঋণ সবচেয়ে বেশি; আর শেষ করেন তাঁর দ্বীনে শরিক সকলকে দিয়ে, যাঁদের অধিকাংশই তখনও জন্মায়নি।"
          },
          {
            "en": "The mention of his parents raises a question the Quran itself answers. 9:114 states that Ibrahim's (AS) seeking forgiveness for his father was only because of a promise he had made him, and that when it became clear to him that his father was an enemy to Allah, he disassociated from him. 60:4 then marks that one saying as the sole exception in a pattern otherwise given to us to follow.",
            "bn": "পিতামাতার উল্লেখ একটি প্রশ্ন তোলে, যার উত্তর কুরআন নিজেই দেয়। 9:114 বলে, ইবরাহীম (আঃ)-এর পিতার জন্য ক্ষমা প্রার্থনা কেবল সেই প্রতিশ্রুতির কারণেই ছিল যা তিনি তাঁকে দিয়েছিলেন; আর যখন তাঁর কাছে স্পষ্ট হলো যে তাঁর পিতা আল্লাহর শত্রু, তখন তিনি তাঁর থেকে সম্পর্ক ছিন্ন করেন। এরপর 60:4 সেই একটি কথাকেই ব্যতিক্রম হিসেবে চিহ্নিত করে — বাকি আদর্শটুকু আমাদের অনুসরণের জন্যই দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day the Account Stands",
          "bn": "যেদিন হিসাব কায়েম হবে"
        },
        "p": [
          {
            "en": "The last words fix a time: yawma yaqumu al-hisab, the Day the account is established. The verb is the same root used for standing something upright, the root behind muqim as-salah at the start of 14:40. Prayer is what he asks to have standing now; the reckoning is what will be made to stand then. The prayer opens and closes on the same image.",
            "bn": "শেষ কথাগুলো একটি সময় নির্ধারণ করে দেয়: ইয়াওমা ইয়াকূমুল হিসাব — যেদিন হিসাব কায়েম হবে। ক্রিয়াপদটির মূল সেই একই, যা কোনো কিছু খাড়া করে দাঁড় করানো বোঝায় — 14:40-এর শুরুতে মুকীমুস সালাহ শব্দের পেছনেও এই মূলটিই আছে। নামায হলো সেটিই, যা তিনি এখন দাঁড়িয়ে থাকতে চান; আর হিসাব হলো সেটি, যা তখন দাঁড় করানো হবে। দোয়াটি শুরু ও শেষ হয় একই চিত্রকল্পে।"
          },
          {
            "en": "Lived, the passage gives a shape to du'a that is easy to copy and hard to exhaust. Ask to be made a person of prayer rather than for a good week of it; name your children in the same sentence; carry your parents in it; then widen it to believers you will never meet. Ibrahim (AS) asked for continuity, and the surah records the words he used.",
            "bn": "বাস্তব জীবনে অংশটি দোয়ার এমন একটি কাঠামো দেয়, যা অনুকরণ করা সহজ আর ফুরিয়ে ফেলা কঠিন। ভালো একটি সপ্তাহ নয়, নামাযের মানুষ হওয়াটাই চান; একই বাক্যে সন্তানদের নাম আনুন; তাতে পিতামাতাকে বহন করুন; তারপর তা প্রসারিত করুন সেই মুমিনদের পর্যন্ত, যাঁদের সঙ্গে আপনার কখনো দেখা হবে না। ইবরাহীম (আঃ) চেয়েছিলেন ধারাবাহিকতা, আর সূরাটি তাঁর ব্যবহৃত শব্দগুলোই লিখে রেখেছে।"
          }
        ]
      }
    ]
  }
});
