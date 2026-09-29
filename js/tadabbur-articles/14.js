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
  "14:13": {
    "sections": [
      {
        "h": {
          "en": "Where the Argument Ended",
          "bn": "তর্ক যেখানে থামল"
        },
        "p": [
          {
            "en": "From 14:9 the surah has been replaying a long exchange between the messengers and their peoples. The peoples said they doubted; the messengers asked whether there could be doubt about Allah, Creator of the heavens and the earth. The peoples said you are only men like us; the messengers agreed they were men, and in 14:12 promised to bear patiently whatever harm was done to them. Now, in 16 Arabic words, the peoples stop arguing and start threatening, and a single sentence from the Lord of the messengers answers them.",
            "bn": "১৪:৯ আয়াত থেকে সূরাটি রসূলগণ আর তাঁদের কওমের মধ্যে এক দীর্ঘ কথোপকথন তুলে ধরছে। কওম বলেছিল, আমরা সন্দেহে আছি। রসূলগণ জিজ্ঞেস করেছিলেন, আসমান ও যমীনের স্রষ্টা আল্লাহকে নিয়েও কি সন্দেহ? কওম বলেছিল, তোমরা তো আমাদেরই মতো মানুষ। রসূলগণ মেনে নিয়েছিলেন যে তাঁরা মানুষই, আর ১৪:১২ আয়াতে বলেছিলেন, তোমরা যত কষ্ট দাও, আমরা সবর করব। এবার আরবি ১৬টি শব্দে কওম যুক্তি ছেড়ে হুমকিতে নামে। আর রসূলদের রবের একটিমাত্র বাক্য তার জবাব দেয়।"
          },
          {
            "en": "As-Sa'di reads the verse as the end-point of that story. Having told of the messengers' call, their persistence and their refusal to tire, Allah now mentions the furthest the situation reached with their peoples. He calls the threat the most extreme form of rejection there can be: after it there was no hope left in them. Al-Qurtubi notes the grammar of the oath. The lam on la-nukhrijannakum is a lam of oath, as though they said: by God, we will drive you out.",
            "bn": "সা'দী আয়াতটিকে পড়েন সেই কাহিনির শেষ সীমা হিসেবে। রসূলদের দাওয়াত, তাতে লেগে থাকা আর ক্লান্ত না হওয়ার কথা বলার পর আল্লাহ এখানে জানাচ্ছেন, কওমের সঙ্গে ব্যাপারটা শেষমেশ কোথায় গিয়ে ঠেকেছিল। সা'দীর ভাষায়, এ হুমকি প্রত্যাখ্যানের চরম রূপ। এরপর তাদের কাছ থেকে আর কোনো আশা বাকি থাকে না। কুরতুবী কসমের ব্যাকরণের দিকে ইশারা করেন। লানুখরিজান্নাকুম শব্দের লাম হলো কসমের লাম। যেন তারা বলছে: আল্লাহর কসম, আমরা তোমাদের বের করে দেবই।"
          }
        ]
      },
      {
        "h": {
          "en": "Leave, Unless You Conform",
          "bn": "হয় মানো, নয় বেরোও"
        },
        "p": [
          {
            "en": "At-Tabari glosses the two halves plainly. Out of our land means out of our country: we will drive you from it. Aw la-ta'udunna fi millatina means unless you return into our religion, the one we hold, the worship of idols. He then explains aw. Here, he says, it carries the sense of illa, unless, or hatta, until, as when an Arab says: I will beat you, or you confess to me. The Muyassar and al-Baghawi keep the same sense: we will expel you until you come back to our religion.",
            "bn": "তাবারী দুই অংশের অর্থ সোজাসুজি বলেন। আমাদের দেশ থেকে মানে আমাদের জনপদ থেকে, সেখান থেকে তোমাদের তাড়িয়ে দেব। আও লাতাঊদুন্না ফী মিল্লাতিনা মানে, যদি না তোমরা আমাদের ধর্মে ফেরো, যে ধর্মের উপর আমরা আছি, অর্থাৎ মূর্তিপূজা। তারপর তিনি আও শব্দটি ব্যাখ্যা করেন। তাঁর মতে এখানে এর অর্থ ইল্লা, অর্থাৎ যদি না, কিংবা হাত্তা, অর্থাৎ যতক্ষণ না। যেমন আরবরা বলে: তোমাকে মারবই, যতক্ষণ না আমার কাছে স্বীকার করো। মুয়াসসার আর বাগাভীও একই অর্থ রাখেন: আমাদের ধর্মে না ফেরা পর্যন্ত তোমাদের তাড়িয়ে দেব।"
          },
          {
            "en": "At-Tabari supports the reading with poetry. He cites Imru' al-Qays telling a weeping companion on the road to Caesar: we are only seeking a kingdom, or we die and are excused. Some Arabs, he explains, give the verb after aw a different ending from the verb before it, to show that the clause is cut off from what precedes it and means until or unless. On this reading the verse describes one sentence with an exit: expulsion is the penalty, and conformity is the only way to escape it.",
            "bn": "তাবারী এ অর্থের পক্ষে কবিতা আনেন। ইমরুল কায়সের একটি পঙক্তি তিনি উদ্ধৃত করেন। কায়সারের কাছে যাওয়ার পথে কাঁদতে থাকা সঙ্গীকে কবি বলছেন: আমরা রাজত্বের চেষ্টা করছি, নয়তো মরে গিয়ে অজুহাত পাব। তাবারী বুঝিয়ে দেন, কিছু আরব আও-এর পরের ক্রিয়াপদের শেষাংশ আগের ক্রিয়াপদ থেকে আলাদা করে পড়ে। এতে বোঝানো হয় যে বাক্যাংশটি আগের কথা থেকে বিচ্ছিন্ন, আর এর অর্থ যতক্ষণ না বা যদি না। এ পাঠে আয়াতের হুমকি একটাই শাস্তি, সঙ্গে একটা বেরোনোর পথ। শাস্তি হলো দেশছাড়া হওয়া, আর তা থেকে বাঁচার একমাত্র উপায় তাদের মতো হয়ে যাওয়া।"
          },
          {
            "en": "Al-Qurtubi reports at-Tabari's reading, until you return or unless you return, and adds that others held it too. Then he quotes Ibn al-'Arabi, who says the verse has no need of that assumed meaning: aw keeps its ordinary sense of choice. The disbelievers gave the messengers a choice between returning to their creed and being driven from their land. Ibn al-'Arabi calls this Allah's way with His messengers and His servants, and points to 17:76 and 17:77. Al-Qurtubi records both readings side by side and does not choose between them.",
            "bn": "কুরতুবী তাবারীর পাঠটি উল্লেখ করেন, অর্থাৎ যতক্ষণ না ফেরো বা যদি না ফেরো, আর জানান যে আরও অনেকে এ মত দিয়েছেন। তারপর তিনি ইবনুল আরাবীর কথা আনেন। ইবনুল আরাবীর মতে এ অনুমিত অর্থের কোনো দরকার নেই। আও তার স্বাভাবিক অর্থেই আছে, অর্থাৎ দুটির একটি বেছে নেওয়া। কাফিররা রসূলদের সামনে দুটি পথ রেখেছিল: হয় তাদের মিল্লাতে ফেরা, নয়তো দেশ থেকে বহিষ্কৃত হওয়া। ইবনুল আরাবী একে বলেন রসূল ও বান্দাদের ব্যাপারে আল্লাহর চিরাচরিত রীতি, আর দলিল হিসেবে দেখান ১৭:৭৬ ও ১৭:৭৭ আয়াত। কুরতুবী দুটি পাঠ পাশাপাশি রাখেন, কোনোটিকে বেছে নেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Puzzle of Returning",
          "bn": "ফিরে আসার ধাঁধা"
        },
        "p": [
          {
            "en": "Read quickly, la-ta'udunna, you must return, could sound as if the messengers had once shared their peoples' creed. The commentators on this verse do not take the question up here. At-Tabari and the Muyassar simply gloss it as coming back to our religion, and al-Qurtubi says the meaning was already treated in al-A'raf. There, at 7:88, the people of Shu'ayb (AS) make the same threat in almost the same words, and the commentators on that verse give several answers. Each is reported below with its name, and this article takes no side.",
            "bn": "তাড়াহুড়ো করে পড়লে লাতাঊদুন্না, অর্থাৎ তোমাদের ফিরতেই হবে, শুনে মনে হতে পারে রসূলগণ একসময় কওমের মিল্লাতে ছিলেন। এ আয়াতের তাফসীরকারেরা এখানে প্রশ্নটি তোলেন না। তাবারী আর মুয়াসসার শুধু অর্থ করেন, আমাদের ধর্মে ফিরে আসা। কুরতুবী বলেন, এর অর্থ সূরা আ'রাফে আগেই আলোচিত হয়েছে। সেখানে ৭:৮৮ আয়াতে শু'আইব (আঃ)-এর কওম প্রায় একই ভাষায় একই হুমকি দেয়। ওই আয়াতের তাফসীরে তাফসীরকারেরা কয়েকটি জবাব দিয়েছেন। নিচে প্রতিটি জবাব তার বক্তার নামসহ দেওয়া হলো। এই লেখা কোনো পক্ষ নেয় না।"
          },
          {
            "en": "Al-Qurtubi, on 7:88, gives three. First, la-ta'udunna means la-tasirunna: you must come over to our creed, with no earlier state implied. Second, introduced with it is said: Shu'ayb's followers had been disbelievers before they believed in him, so the threat means come back to us as you were. Third, he quotes az-Zajjaj: the verb of returning can mean a beginning, as in the idiom 'ada ilayya min fulan makruh, harm came to me from so-and-so, said even when no harm had come from him before.",
            "bn": "কুরতুবী ৭:৮৮ আয়াতের তাফসীরে তিনটি জবাব দেন। প্রথমত, লাতাঊদুন্না মানে লাতাসীরুন্না, অর্থাৎ তোমাদেরকে আমাদের মিল্লাতে আসতেই হবে। এতে আগের কোনো অবস্থার ইঙ্গিত নেই। দ্বিতীয়ত, 'বলা হয়' কথাটি জুড়ে তিনি আনেন: শু'আইবের অনুসারীরা তাঁর উপর ঈমান আনার আগে কুফরের উপর ছিল। তাই হুমকির অর্থ, আগে যেমন ছিলে তেমনি আমাদের দিকে ফিরে এসো। তৃতীয়ত, তিনি যাজ্জাজের কথা আনেন। ফেরার ক্রিয়াটি শুরু বোঝাতেও পারে। আরবরা বলে, আদা ইলাইয়া মিন ফুলানিন মাকরূহ, অমুকের কাছ থেকে আমার উপর কষ্ট এল। আগে তার কাছ থেকে কোনো কষ্ট না এলেও কথাটা এভাবে বলা হয়।"
          },
          {
            "en": "Ibn Kathir, on the same verse, gives a fourth answer. The words are addressed to the messenger, he says, but what is meant is his followers who were with him. When Shu'ayb (AS) replies, if we returned to your creed we would have invented a great lie against Allah, Ibn Kathir says he is speaking for his followers. These answers stand on 7:88, carried here because al-Qurtubi himself sends his reader there. Whichever one a reader finds strongest, none of these commentators says that a messenger ever held the creed he was sent to leave behind.",
            "bn": "একই আয়াতে ইবন কাসীর চতুর্থ একটি জবাব দেন। তাঁর মতে কথাটা বলা হয়েছে রসূলকে, কিন্তু উদ্দেশ্য তাঁর সঙ্গে থাকা অনুসারীরা। শু'আইব (আঃ) যখন জবাবে বলেন, তোমাদের মিল্লাতে ফিরলে আমরা আল্লাহর উপর বিরাট মিথ্যা আরোপ করে বসব, তখন ইবন কাসীরের মতে তিনি কথা বলছেন তাঁর অনুসারীদের হয়ে। এ জবাবগুলো ৭:৮৮ আয়াতের তাফসীর থেকে নেওয়া। এখানে আনা হলো, কারণ কুরতুবী নিজেই পাঠককে সেখানে পাঠান। পাঠক যে জবাবটিকেই সবচেয়ে জোরালো মনে করুন, এই তাফসীরকারদের কেউ বলেন না যে কোনো রসূল কখনো সেই মিল্লাতের উপর ছিলেন, যা থেকে মানুষকে ফেরাতে তাঁকে পাঠানো হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Our Land, They Said",
          "bn": "আমাদের দেশ, তারা বলল"
        },
        "p": [
          {
            "en": "As-Sa'di stops on a single word: ardina, our land. It was not enough for them to turn away from guidance, he says. They threatened the messengers with expulsion from their homes, claimed the land as their own, and asserted that the messengers had no right in it, which he counts among the greatest of wrongs. Allah brought His servants out onto the earth, commanded them to worship Him, and made the earth and all on it serve them as a help in that worship.",
            "bn": "সা'দী একটি শব্দে থামেন: আরদিনা, আমাদের দেশ। তিনি বলেন, হেদায়াত থেকে মুখ ফিরিয়ে নেওয়াই তাদের কাছে যথেষ্ট মনে হয়নি। তারা রসূলদের ঘরবাড়ি থেকে বের করে দেওয়ার হুমকি দিল, দেশটাকে নিজেদের বলে দাবি করল, আর বলল এতে রসূলদের কোনো হক নেই। সা'দীর চোখে এ সবচেয়ে বড় যুলমগুলোর একটি। আল্লাহই তো তাঁর বান্দাদের যমীনে এনেছেন, তাঁর ইবাদতের হুকুম দিয়েছেন। আর যমীন ও তার উপরের সবকিছু তাদের অধীন করে দিয়েছেন, যাতে তারা এর সাহায্যে তাঁর ইবাদত করতে পারে।"
          },
          {
            "en": "So, as-Sa'di reasons, whoever uses the earth to worship Allah may do so lawfully, while whoever uses it for disbelief has no clean claim to it; in truth the enemies of the messengers owned nothing of the land they threatened to expel them from. He then argues on ordinary custom as well. The messengers were people of their own countries, individuals from among their own peoples. By what right, he asks, could anyone deny them so plain a right, unless religion and common decency had been lost altogether?",
            "bn": "সা'দীর যুক্তি তাই এমন: যে যমীনকে আল্লাহর ইবাদতে কাজে লাগায়, তার জন্য তা হালাল। আর যে তা কুফর ও নাফরমানিতে লাগায়, তার জন্য তা খাঁটি নয়, হালালও নয়। কাজেই রসূলদের শত্রুরা আসলে সেই যমীনের কিছুরই মালিক ছিল না, যেখান থেকে তারা রসূলদের তাড়ানোর হুমকি দিচ্ছিল। এরপর তিনি সাধারণ প্রথার দিক থেকেও যুক্তি দেন। রসূলগণ তো নিজ নিজ দেশেরই মানুষ, নিজ কওমেরই সদস্য। তাহলে এত স্পষ্ট একটা হক থেকে তাঁদের বঞ্চিত করার অধিকার কে দিল? সা'দী বলেন, দ্বীন আর ভদ্রতা পুরোপুরি হারিয়ে না গেলে এমন হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "An Old Threat, Often Repeated",
          "bn": "পুরোনো হুমকি, বারবার"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse as a report of what the disbelieving nations threatened their messengers with: expulsion from their land and banishment from their midst. He lines up the parallels. The people of Shu'ayb (AS) at 7:88, already met above; the people of Lut (AS), who said at 27:56, drive the family of Lut out of your town; the idolaters of Quraysh, who nearly unsettled the Prophet ﷺ to drive him from the land, at 17:76; and the plot at 8:30 to confine him, kill him or drive him out.",
            "bn": "ইবন কাসীর আয়াতটিকে পড়েন কাফির জাতিগুলোর সেই হুমকির বিবরণ হিসেবে, যা তারা নিজেদের রসূলদের দিয়েছিল: দেশ থেকে বের করে দেওয়া, নিজেদের মাঝ থেকে নির্বাসিত করা। তিনি একই ধরনের আয়াতগুলো পাশাপাশি রাখেন। ৭:৮৮ আয়াতে শু'আইব (আঃ)-এর কওম, যাদের কথা ওপরে এসেছে। ২৭:৫৬ আয়াতে লূত (আঃ)-এর কওম, যারা বলেছিল, লূতের পরিবারকে তোমাদের জনপদ থেকে বের করে দাও। ১৭:৭৬ আয়াতে কুরাইশের মুশরিকরা, যারা নবী ﷺ-কে দেশ থেকে উৎখাত করার উপক্রম করেছিল। আর ৮:৩০ আয়াতে তাঁকে বন্দি করা, হত্যা করা বা বের করে দেওয়ার চক্রান্ত।"
          },
          {
            "en": "Then Ibn Kathir traces what Allah did. He gave His Messenger victory, and by means of his leaving Makkah gave him helpers and supporters. He kept raising him stage by stage until He opened for him the very Makkah that had expelled him, and people entered the religion of Allah in crowds. That, says Ibn Kathir, is why Allah said: We will surely destroy the wrongdoers. The English abridgement groups 14:13 to 14:17; only its 14:13 part is used here, and it matches the Arabic.",
            "bn": "এরপর ইবন কাসীর দেখান, আল্লাহ কী করলেন। তিনি তাঁর রসূলকে বিজয় দিলেন। মক্কা ছেড়ে যাওয়াকেই উপলক্ষ বানিয়ে তাঁকে দিলেন আনসার ও সাহায্যকারী। তাঁকে ধাপে ধাপে ওপরে তুলতে থাকলেন, শেষে সেই মক্কাই তাঁর হাতে খুলে দিলেন, যে মক্কা তাঁকে বের করে দিয়েছিল। আর মানুষ দলে দলে আল্লাহর দ্বীনে প্রবেশ করল। ইবন কাসীর বলেন, এজন্যই আল্লাহ বলেছেন: আমি যালিমদের অবশ্যই ধ্বংস করব। তাঁর তাফসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ ১৪:১৩ থেকে ১৪:১৭ পর্যন্ত একসঙ্গে আলোচনা করে। এখানে শুধু ১৪:১৩ আয়াতের অংশটুকু নেওয়া হয়েছে, আর তা আরবি মূলের সঙ্গে মেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reply Went to the Messengers",
          "bn": "জবাব গেল রসূলদের কাছে"
        },
        "p": [
          {
            "en": "Fa-awha ilayhim rabbuhum: so their Lord revealed to them. The pronoun points to the messengers; the Muyassar says it outright, that Allah revealed to His messengers that He would destroy those who denied Him and His messengers. The threateners are answered, but not to their faces. The reply is a word of assurance to the threatened. As-Sa'di reads the sequence as a turning point: once their plotting against the messengers had reached this state, nothing remained but for Allah to carry out His command and help His friends.",
            "bn": "ফাআওহা ইলাইহিম রব্বুহুম: তখন তাদের রব তাদের কাছে ওহী পাঠালেন। সর্বনামটি রসূলদের দিকে ইশারা করে। মুয়াসসার সরাসরি বলে দেয়, আল্লাহ তাঁর রসূলদের ওহী করে জানালেন যে, যারা তাঁকে ও তাঁর রসূলদের অস্বীকার করেছে, তিনি তাদের ধ্বংস করবেন। হুমকিদাতারা জবাব পেল, কিন্তু সামনাসামনি নয়। জবাবটা আসলে হুমকির শিকারদের জন্য আশ্বাসের বাণী। সা'দী এ ধারাবাহিকতাকে মোড় ঘোরার মুহূর্ত হিসেবে পড়েন। রসূলদের বিরুদ্ধে তাদের চক্রান্ত যখন এ পর্যায়ে পৌঁছল, তখন আল্লাহর ফয়সালা কার্যকর করা আর তাঁর বন্ধুদের সাহায্য করা ছাড়া আর কিছু বাকি রইল না।"
          },
          {
            "en": "At-Tabari gives two senses of al-zalimin. They are those who wronged themselves, bringing Allah's punishment on themselves by their disbelief. It may also be, he says, that they were called wrongdoers for worshipping idols and gods that may not be worshipped: putting worship where it does not belong is a wrong, and they were named for it. As-Sa'di adds only that the destruction came by various kinds of punishment. What follows the destruction, the promise in 14:14 to settle the believers in the land after them, is that verse's own subject.",
            "bn": "তাবারী আয-যালিমীন শব্দের দুটি অর্থ দেন। তারা নিজেদের উপর যুলম করেছে, কুফরের কারণে নিজেদের উপর আল্লাহর শাস্তি অবধারিত করেছে। আবার এমনও হতে পারে, তাঁর মতে, মূর্তি আর উপাস্যদের পূজা করার কারণেই তাদের যালিম বলা হয়েছে, যাদের ইবাদত বৈধ নয়। ইবাদতকে তার জায়গার বাইরে রাখাই যুলম, আর সে নামেই তাদের ডাকা হয়েছে। সা'দী শুধু যোগ করেন, ধ্বংস এসেছিল নানা রকম শাস্তির মাধ্যমে। ধ্বংসের পরে কী, অর্থাৎ ১৪:১৪ আয়াতে মু'মিনদের তাদের পরে দেশে বসবাস করানোর প্রতিশ্রুতি, সেটা ওই আয়াতেরই আলোচ্য বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Story, Not a Warrant",
          "bn": "কাহিনি, অনুমতিপত্র নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes past peoples and their messengers, as the text itself describes them, and a verdict that Allah Himself announced and Himself carried out. It licenses no expulsion, no coercion and no hostility by anyone today, against any person or community, Muslim or not. No reader is made Allah's instrument by reading it. If anything, the verse condemns the very thing a reader might be tempted to borrow from it: driving people from their homes to force them into a creed.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি অতীতের কিছু জাতি আর তাদের রসূলদের কথা বলে, ঠিক যেভাবে কুরআন নিজে বলেছে। আর যে ফয়সালার কথা বলে, তা আল্লাহ নিজে ঘোষণা করেছেন, নিজেই কার্যকর করেছেন। আজ কারও জন্য এতে কাউকে দেশ থেকে তাড়ানোর, জোর করার বা শত্রুতা করার কোনো অনুমতি নেই, সে মুসলিম হোক বা অমুসলিম, ব্যক্তি হোক বা গোষ্ঠী। আয়াত পড়ে কোনো পাঠক আল্লাহর হাতিয়ার হয়ে যায় না। বরং পাঠকের যে জিনিসটা ধার করার লোভ হতে পারে, আয়াতটি ঠিক সেটারই নিন্দা করে: মানুষকে তার ঘর থেকে তাড়িয়ে জোর করে কোনো ধর্মে ঢোকানো।"
          },
          {
            "en": "Two notes on sources. None of the commentaries fetched for this verse attaches a hadith to it; the one narration in the English Ibn Kathir belongs to 14:15, the obstinate tyrant, and is not used here. Ma'arif al-Qur'an treats 14:8 to 14:17 as one passage, but its entry as fetched speaks only of Musa's (AS) words in 14:8, so it contributes nothing on this verse. What the article reports comes from at-Tabari, al-Qurtubi, as-Sa'di, Ibn Kathir, al-Baghawi and the Muyassar.",
            "bn": "উৎস নিয়ে দুটি কথা। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি। ইবন কাসীরের ইংরেজি সংস্করণে যে একটি বর্ণনা আছে, তা ১৪:১৫ আয়াতের উদ্ধত স্বৈরাচারী প্রসঙ্গে, তাই এখানে নেওয়া হয়নি। মাআরিফুল কুরআন ১৪:৮ থেকে ১৪:১৭ পর্যন্ত একসঙ্গে আলোচনা করে। কিন্তু যে অংশটুকু পাওয়া গেছে, তাতে কেবল ১৪:৮ আয়াতে মূসা (আঃ)-এর কথার ব্যাখ্যা আছে, তাই এ আয়াতে এর কোনো অবদান নেই। এ লেখার সব কথা এসেছে তাবারী, কুরতুবী, সা'দী, ইবন কাসীর, বাগাভী ও মুয়াসসার থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Firm, Without Rancour",
          "bn": "অটল থাকা, বিদ্বেষ ছাড়া"
        },
        "p": [
          {
            "en": "The pressure in this verse has a familiar shape. It comes from the many, it speaks of our land and our ways, and it offers belonging on one condition: become like us. Most readers will never be threatened with exile. But the same terms arrive at smaller scale in a family, a workplace or a circle of friends: laugh along or be left out, bend the rule or lose the post, keep your prayer out of sight. The question the verse puts to the reader is what they measure right by.",
            "bn": "এ আয়াতের চাপটা চেনা চেহারার। তা আসে সংখ্যাগরিষ্ঠের দিক থেকে। তার ভাষা: আমাদের দেশ, আমাদের রীতি। আর সে দলে জায়গা দেয় একটাই শর্তে: আমাদের মতো হয়ে যাও। বেশিরভাগ পাঠককে হয়তো কখনো দেশছাড়া হওয়ার হুমকি শুনতে হবে না। কিন্তু সেই একই শর্ত ছোট আকারে আসে পরিবারে, কর্মস্থলে, বন্ধুদের আড্ডায়। সবার সঙ্গে হাসো, নইলে একঘরে হও। নিয়মটা একটু বাঁকাও, নইলে পদ হারাও। নামাজটা লোকচক্ষুর আড়ালে রাখো। আয়াত পাঠককে জিজ্ঞেস করে: ঠিক-বেঠিক আপনি কী দিয়ে মাপেন?"
          },
          {
            "en": "The messengers' own answer came one verse earlier. In 14:12 they said: why should we not rely on Allah when He has guided us to our ways, and we will surely bear patiently whatever harm you do us. They did not threaten back, and they did not give way. The verdict in 14:13 was not theirs to issue; it came from their Lord. Holding firm, then, is not the same as holding a grudge. A believer can refuse the terms and still wish the people offering them well.",
            "bn": "রসূলদের নিজেদের জবাব এসেছে ঠিক আগের আয়াতে। ১৪:১২ আয়াতে তাঁরা বলেছিলেন: আমরা আল্লাহর উপর ভরসা করব না কেন, তিনিই তো আমাদের পথ দেখিয়েছেন। আর তোমরা আমাদের যে কষ্টই দাও, আমরা অবশ্যই সবর করব। তাঁরা পাল্টা হুমকি দেননি, আবার মাথাও নোয়াননি। ১৪:১৩ আয়াতের ফয়সালা দেওয়ার দায়িত্ব তাঁদের ছিল না, তা এসেছে তাঁদের রবের কাছ থেকে। তাই অটল থাকা আর মনে ক্ষোভ পুষে রাখা এক জিনিস নয়। একজন মু'মিন শর্তগুলো প্রত্যাখ্যান করেও শর্তদাতাদের কল্যাণ কামনা করতে পারেন।"
          },
          {
            "en": "So the practice is modest and daily. Notice when a habit is only yours because it is everyone's. When you must refuse, refuse with patience, in few words and without contempt, so that the refusal stays about the truth and not about you. Leave the judgment of those who press you with Allah, who alone knows how each story ends. And turn the verse around once: ask whether you have ever been the voice of the many, telling someone else to fit in or step out.",
            "bn": "তাই অনুশীলনটা ছোট, প্রতিদিনের। খেয়াল করুন, কোন অভ্যাসটা আপনার শুধু এজন্য যে সবার ওটা আছে। না বলতেই যদি হয়, সবরের সঙ্গে বলুন, অল্প কথায়, অবজ্ঞা ছাড়া। তাহলে প্রত্যাখ্যানটা সত্যের ব্যাপারেই থাকবে, আপনার অহংয়ের ব্যাপার হয়ে উঠবে না। যারা চাপ দেয়, তাদের বিচার আল্লাহর হাতে ছেড়ে দিন। প্রতিটি কাহিনির শেষ কেবল তিনিই জানেন। আর একবার আয়াতটা নিজের দিকে ঘুরিয়ে দেখুন। আপনি নিজেই কি কখনো সংখ্যাগরিষ্ঠের কণ্ঠ হয়ে কাউকে বলেছেন: হয় মানিয়ে চলো, নয়তো সরে দাঁড়াও?"
          }
        ]
      }
    ]
  },
  "14:21": {
    "sections": [
      {
        "h": {
          "en": "No Screen on the Plain",
          "bn": "ময়দানে কোনো আড়াল নেই"
        },
        "p": [
          {
            "en": "Wa-barazu lillahi jami'an: and they will come out before Allah, all together. Al-Qurtubi explains buruz as appearing, and baraz as a wide open place, named for how exposed it is; they emerge from their graves on the Day of Resurrection. The verb is past in form and future in meaning, he notes, and he ties it back to 14:15: they asked for a decision, were destroyed, and are then raised for the reckoning, standing before Allah with nothing to hide them. Lillah, he says, means at Allah's command to come out.",
            "bn": "ওয়া বারাযূ লিল্লাহি জামী'আ: আর তারা সবাই একসঙ্গে আল্লাহর সামনে বেরিয়ে আসবে। কুরতুবী বলেন, বুরূয মানে প্রকাশ পাওয়া। আর বারায হলো খোলা প্রশস্ত জায়গা, সবকিছু চোখের সামনে থাকে বলেই এই নাম। কিয়ামতের দিন তারা কবর থেকে বেরিয়ে আসবে। ক্রিয়াটি অতীতকালের, কিন্তু অর্থ ভবিষ্যতের, এটাও তিনি লক্ষ করেন। তিনি একে ১৪:১৫ আয়াতের সঙ্গে জুড়ে দেন: তারা ফায়সালা চেয়েছিল, ধ্বংস হয়েছিল, তারপর হিসাবের জন্য তাদের ওঠানো হবে। তখন আল্লাহর সামনে তাদের ঢেকে রাখার কিছুই থাকবে না। আর লিল্লাহ মানে, তাঁর মতে, বেরিয়ে আসার জন্য আল্লাহর হুকুমে।"
          },
          {
            "en": "Ibn Kathir pictures an open stretch of ground where nothing screens anyone. As-Sa'di describes the trumpet blown, people coming out of the graves to their Lord and standing on a level plain, in the words of 20:106 and 20:107, with nothing of them hidden from Him. The commentators differ on who is meant by they. Ibn Kathir says all creation, the righteous and the wicked; the Muyassar says the creatures come out to be judged. At-Tabari reads they as those who disbelieved, the people the preceding verses have been describing.",
            "bn": "ইবন কাসীরের বর্ণনায় এ এক খোলা প্রান্তর, যেখানে কেউ কারও আড়ালে থাকতে পারে না। সা'দী বলেন, শিঙায় ফুঁ দেওয়া হলে মানুষ কবর থেকে বেরিয়ে তাদের রবের দিকে যাবে। দাঁড়াবে এক সমতল ময়দানে, যার বর্ণনা ২০:১০৬ ও ২০:১০৭ আয়াতের ভাষায়। তাদের কোনো কিছুই তাঁর কাছে গোপন থাকবে না। 'তারা' কারা, এ নিয়ে মুফাসসিরদের মত আলাদা। ইবন কাসীর বলেন, সমস্ত সৃষ্টি, নেককার ও বদকার সবাই। মুয়াসসার বলে, বিচারের জন্য সৃষ্টিকুল বেরিয়ে আসবে। তাবারী কিন্তু এখানে 'তারা' বলতে বোঝেন কাফিরদের, আগের আয়াতগুলো যাদের কথা বলে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Weak Were",
          "bn": "দুর্বল বলতে কারা"
        },
        "p": [
          {
            "en": "Fa-qala al-du'afa'u li-lladhina istakbaru: then the weak will say to those who were arrogant. At-Tabari reads it as the followers speaking to the followed, who in this world were too proud to worship Allah sincerely and to follow the messengers sent to them. He cites Ibn Jurayj: the weak are the followers, the arrogant are the leaders. Al-Baghawi says the same and adds that the arrogant were proud over people, the leaders and chiefs. Ibn Kathir has followers of their chiefs, masters and great ones, who would not worship Allah alone or go along with the messengers.",
            "bn": "ফাকালাদ দু'আফাউ লিল্লাযীনাস তাকবারূ: তখন দুর্বলরা অহংকারীদের বলবে। তাবারীর ব্যাখ্যায় কথা বলছে অনুসারীরা, যাদের তারা মানত তাদের উদ্দেশে। এই মান্য লোকেরা দুনিয়ায় অহংকারবশত আল্লাহর খাঁটি ইবাদত করেনি, তাদের কাছে পাঠানো রসূলদেরও মানেনি। তাবারী ইবন জুরাইজের কথা আনেন: দুর্বলরা হলো অনুসারী, অহংকারীরা নেতা। বাগাভীও তাই বলেন। তিনি যোগ করেন, এরা মানুষের উপর বড়াই করত, এরাই ছিল নেতা ও সর্দার। ইবন কাসীরের ভাষায় দুর্বলরা তাদের সর্দার, মনিব আর বড়দের অনুসারী। আর সেই বড়রা এক আল্লাহর ইবাদত করতে ও রসূলদের সঙ্গে চলতে রাজি হয়নি।"
          },
          {
            "en": "As-Sa'di chooses a sharper word. The weak, he says, are al-tabi'un wa-l-muqallidun, the followers and the imitators, and the arrogant are those followed, the leaders in misguidance. On taba'an, followers, the grammarians are close: at-Tabari takes it as the plural of tabi', as ghayab is of gha'ib, and al-Baghawi and al-Qurtubi compare haras from haris. Al-Qurtubi also allows a verbal noun, meaning people of following. On every reading, what the weak put forward is simply that they followed.",
            "bn": "সা'দী এখানে আরও ধারালো শব্দ বেছে নেন। তাঁর মতে দুর্বলরা হলো আত-তাবি'ঊন ওয়াল মুকাল্লিদূন: অনুসারী আর অন্ধ অনুকরণকারী। আর অহংকারীরা হলো যাদের অনুসরণ করা হতো, গোমরাহির পথের নেতারা। তাবা'আ শব্দ নিয়ে ব্যাকরণের ব্যাখ্যাগুলো কাছাকাছি। তাবারী একে তাবি'-এর বহুবচন ধরেন, যেমন গা'ইব থেকে গায়াব। বাগাভী আর কুরতুবী তুলনা দেন হারিস থেকে হারাস শব্দের সঙ্গে। কুরতুবী একে ক্রিয়াবাচক বিশেষ্য হিসেবেও পড়ার সুযোগ রাখেন, তখন অর্থ হয় অনুসরণের লোক। যেভাবেই পড়া হোক, দুর্বলদের হাতে দেখানোর মতো একটাই জিনিস আছে: তারা অনুসরণ করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Obedience Presented as a Claim",
          "bn": "আনুগত্যের বিনিময় দাবি"
        },
        "p": [
          {
            "en": "Inna kunna lakum taba'an: we were your followers. Ibn Kathir glosses it: whatever you ordered, we carried out. At-Tabari fills in the orders: they obeyed their leaders in worshipping idols and disbelieving in Allah, and kept away from what the leaders forbade them, which was following Allah's messengers. As-Sa'di has the weak say it more bitterly: you ordered us to misguidance, you made it look fair to us, and you led us astray. All three place the following in this world, where it was given freely.",
            "bn": "ইন্না কুন্না লাকুম তাবা'আ: আমরা তো তোমাদেরই অনুসারী ছিলাম। ইবন কাসীরের ব্যাখ্যা: তোমরা যা হুকুম করতে, আমরা তা-ই পালন করতাম। হুকুমগুলো কী ছিল, তাবারী তা খুলে বলেন। মূর্তিপূজা আর আল্লাহকে অস্বীকার করার ব্যাপারে তারা নেতাদের কথা মেনেছিল। নেতারা যা নিষেধ করত তা থেকেও দূরে থেকেছিল, আর সেই নিষিদ্ধ জিনিসটা ছিল আল্লাহর রসূলদের অনুসরণ। সা'দীর বর্ণনায় দুর্বলদের কণ্ঠে তিক্ততা বেশি: তোমরা আমাদের গোমরাহির হুকুম দিয়েছিলে, তা আমাদের চোখে সুন্দর করে সাজিয়েছিলে, আর আমাদের পথভ্রষ্ট করেছিলে। তিনজনই অনুসরণটা রাখেন দুনিয়ায়, যেখানে তা দেওয়া হয়েছিল স্বেচ্ছায়।"
          },
          {
            "en": "Fa-hal antum mughnuna 'anna: so can you avail us anything? Al-Qurtubi separates two uses of the verb: aghna 'anhu is to push harm away from someone, while aghnahu is to bring him benefit, so the question is whether they can push anything away. At-Tabari adds one word, today. Ibn Kathir and the Muyassar both add a reminder, as you used to promise us, and as-Sa'di: even an atom's weight. The followers do not plead for mercy. They present their obedience as if it had bought them something.",
            "bn": "ফাহাল আনতুম মুগনূনা 'আন্না: তাহলে তোমরা কি আমাদের থেকে কিছু সরাতে পারবে? কুরতুবী এই ক্রিয়ার দুটি ব্যবহার আলাদা করেন। আগনা 'আনহু মানে কারও উপর থেকে কষ্ট সরিয়ে দেওয়া, আর আগনাহু মানে তার কাছে উপকার পৌঁছে দেওয়া। তাই প্রশ্নটা হলো, তারা কি কিছু ঠেকাতে পারবে। তাবারী একটা শব্দ যোগ করেন: আজ। ইবন কাসীর আর মুয়াসসার দুজনেই যোগ করেন একটা খোঁটা: যেমনটা তোমরা আমাদের কথা দিতে। সা'দী বলেন: এক কণা পরিমাণ হলেও। অনুসারীরা দয়া ভিক্ষা করছে না। তারা নিজেদের আনুগত্যকে দেখাচ্ছে এমনভাবে, যেন তা দিয়ে কিছু কেনা হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Guided to What?",
          "bn": "কোন পথের হিদায়াত?"
        },
        "p": [
          {
            "en": "Law hadana Allahu la-hadaynakum: had Allah guided us, we would have guided you. Al-Qurtubi lists three meanings. First: had Allah guided us to faith, we would have guided you to it. Then, each introduced with it is said: had He guided us to the road to Paradise; and had He saved us from the punishment, we would have saved you. At-Tabari takes a reading close to that last one: had Allah shown us anything by which to fend off His punishment today, we would have shown it to you, so that you could fend it off yourselves.",
            "bn": "লাও হাদানাল্লাহু লাহাদাইনাকুম: আল্লাহ আমাদের হিদায়াত দিলে আমরাও তোমাদের হিদায়াত দিতাম। কুরতুবী তিনটি অর্থ উল্লেখ করেন। প্রথমটি: আল্লাহ আমাদের ঈমানের পথ দেখালে আমরাও তোমাদের সে পথ দেখাতাম। বাকি দুটি তিনি আনেন 'বলা হয়' দিয়ে। একটি হলো, তিনি আমাদের জান্নাতের রাস্তা দেখালে আমরাও দেখাতাম। অন্যটি, তিনি আমাদের আযাব থেকে বাঁচালে আমরাও তোমাদের বাঁচাতাম। তাবারী যে অর্থ নেন তা শেষটির কাছাকাছি। আজ তাঁর আযাব ঠেকানোর মতো কিছু যদি আল্লাহ আমাদের বাতলে দিতেন, আমরা তা তোমাদেরও বাতলে দিতাম, যাতে তোমরা নিজেরাই তা ঠেকাতে পারো।"
          },
          {
            "en": "On at-Tabari's reading the leaders are answering the question they were asked, and guidance here means a way out, not the faith they refused in the world. The Muyassar takes the other road: had Allah guided us to faith we would have directed you to it, but He did not grant us success, so we went astray and led you astray. Al-Baghawi is close: we would have called you to guidance, and when He left us astray, we called you to misguidance. As-Sa'di sets beside the sentence the words we led you astray as we went astray, an echo of 28:63.",
            "bn": "তাবারীর পাঠে নেতারা ঠিক সেই প্রশ্নেরই জবাব দিচ্ছে, যা তাদের করা হয়েছিল। এখানে হিদায়াত মানে বেরোনোর রাস্তা, দুনিয়ায় যে ঈমান তারা প্রত্যাখ্যান করেছিল সেটা নয়। মুয়াসসার চলে অন্য পথে। আল্লাহ আমাদের ঈমানের পথ দেখালে আমরাও তোমাদের সে পথে ডাকতাম। কিন্তু তিনি আমাদের তাওফীক দেননি, তাই আমরা নিজেরা পথ হারিয়েছি, তোমাদেরও হারিয়েছি। বাগাভীর কথাও কাছাকাছি: আমরা তোমাদের হিদায়াতের দিকে ডাকতাম, আর তিনি যখন আমাদের পথভ্রষ্ট থাকতে দিলেন, আমরা তোমাদের ডাকলাম গোমরাহির দিকে। সা'দী এ বাক্যের পাশে বসান আরেকটি কথা: আমরা নিজেরা যেমন বিপথে গিয়েছিলাম, তোমাদেরও তেমনি বিপথে নিয়েছিলাম। কথাটি ২৮:৬৩ আয়াতের প্রতিধ্বনি।"
          },
          {
            "en": "Ibn Kathir carries the leaders' speech further in his paraphrase: but the word of our Lord has come true against us, Allah's decree went before, in us and in you, and the word of punishment is due upon the disbelievers. So the fetched texts do not agree on what guidance means here. At-Tabari reads a way to escape; the Muyassar, al-Baghawi and al-Qurtubi's first meaning read guidance to faith; Ibn Kathir frames the reply with decree. As-Sa'di draws the plain conclusion in his own words: so none can avail another.",
            "bn": "ইবন কাসীর নিজের ভাষায় নেতাদের কথা আরও খানিকটা এগিয়ে নেন। কিন্তু আমাদের বিরুদ্ধে আমাদের রবের কথা সত্য হয়ে গেছে। আমাদের আর তোমাদের ব্যাপারে আল্লাহর তাকদীর আগেই নির্ধারিত ছিল। আর কাফিরদের উপর আযাবের বাণী অবধারিত হয়ে গেছে। তাহলে দেখা যাচ্ছে, এখানে হিদায়াত মানে কী, সে বিষয়ে সংগৃহীত তাফসীরগুলো একমত নয়। তাবারীর কাছে এটা বাঁচার পথ। মুয়াসসার, বাগাভী আর কুরতুবীর প্রথম অর্থে এটা ঈমানের পথ। আর ইবন কাসীর জবাবটাকে দেখেন তাকদীরের আলোয়। সা'দী নিজের ভাষায় সোজা উপসংহার টানেন: কাজেই কেউ কারও কোনো কাজে আসবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "An Excuse That Changes Nothing",
          "bn": "যে অজুহাতে কিছুই বদলায় না"
        },
        "p": [
          {
            "en": "None of the fetched commentators stops to weigh the leaders' sentence as an argument, and none of them calls it a sound one; they explain what the words mean and move on. The Qur'an gives a fuller version of the same quarrel in 34:31 to 34:33, which Ibn Kathir places at the gathering. The weak say: had it not been for you, we would have been believers. The arrogant answer: did we turn you away from guidance after it had come to you? No, you were criminals. The weak reply: it was your plotting by night and day, when you ordered us to disbelieve in Allah.",
            "bn": "সংগৃহীত তাফসীরগুলোর কেউই নেতাদের এ কথাকে যুক্তি হিসেবে মেপে দেখতে থামেননি, কেউ একে গ্রহণযোগ্য যুক্তিও বলেননি। শব্দগুলোর অর্থ বুঝিয়ে দিয়েই তাঁরা এগিয়ে গেছেন। একই বিবাদের আরও পূর্ণ ছবি কুরআন দেয় ৩৪:৩১ থেকে ৩৪:৩৩ আয়াতে, আর ইবন কাসীর সেটাকে রাখেন হাশরের ময়দানে। দুর্বলরা বলে: তোমরা না থাকলে আমরা অবশ্যই মুমিন হতাম। অহংকারীরা জবাব দেয়: তোমাদের কাছে হিদায়াত আসার পর আমরা কি তোমাদের তা থেকে ফিরিয়ে রেখেছিলাম? বরং তোমরা নিজেরাই অপরাধী ছিলে। দুর্বলরা বলে: বরং দিনরাত তোমাদের চক্রান্তই ছিল, যখন তোমরা আমাদের আল্লাহকে অস্বীকার করার হুকুম দিতে।"
          },
          {
            "en": "Read beside 14:21, that exchange has each side admitting what the other says: guidance had come, and orders were given and taken. In 14:21 itself the leaders never deny being followed. Whatever their reply means, the words that follow show it changes nothing, for panic and patience are now the same to them. The next verse, 14:22, gives the speech of Satan once the matter has been decided, and it belongs to its own reading.",
            "bn": "১৪:২১ আয়াতের পাশে রেখে পড়লে দেখা যায়, সেখানে দুই পক্ষই অপরপক্ষের কথা মেনে নিচ্ছে। হিদায়াত এসেছিল, আর হুকুম দেওয়াও হয়েছিল, মানাও হয়েছিল। ১৪:২১ আয়াতে নেতারা কোথাও অস্বীকার করে না যে লোকেরা তাদের অনুসরণ করত। তাদের জবাবের অর্থ যা-ই হোক, পরের কথাগুলোই দেখিয়ে দেয় যে তাতে কিছুই বদলায় না। অস্থিরতা আর সবর এখন তাদের কাছে একই। পরের আয়াত ১৪:২২-এ আছে বিচার শেষ হওয়ার পর শয়তানের ভাষণ, সেটা আলাদা পাঠের বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "In the Fire, or Before?",
          "bn": "আগুনে, নাকি তার আগেই"
        },
        "p": [
          {
            "en": "Where does this exchange happen? Ibn Kathir says the apparent sense is that it takes place in the Fire, after they have entered it, and he lines up the sister verses. In 40:47 and 40:48 they argue within the Fire, the weak ask the arrogant to take a share of it off them, and the answer comes: we are all in it; Allah has judged between His servants. In 7:38 and 7:39 each nation that enters curses its sister, and the last asks double punishment for the first. In 33:66 to 33:68 they say: we obeyed our masters and our great ones, and they led us astray.",
            "bn": "এ কথোপকথন কোথায় ঘটবে? ইবন কাসীর বলেন, বাহ্যত মনে হয় আগুনে প্রবেশের পর সেখানেই এটা ঘটবে। এরপর তিনি একে একে সাজিয়ে দেন সমধর্মী আয়াতগুলো। ৪০:৪৭ ও ৪০:৪৮ আয়াতে তারা আগুনের ভেতরে বিতর্ক করে। দুর্বলরা অহংকারীদের বলে, আগুনের কিছু অংশ আমাদের থেকে নিয়ে নাও। জবাব আসে: আমরা সবাই তো এর মধ্যেই আছি, আল্লাহ বান্দাদের মাঝে ফায়সালা করে ফেলেছেন। ৭:৩৮ ও ৭:৩৯ আয়াতে প্রতিটি দল প্রবেশের সময় তার সমগোত্রীয় দলকে লানত দেয়, আর পরের দল আগের দলের জন্য দ্বিগুণ শাস্তি চায়। ৩৩:৬৬ থেকে ৩৩:৬৮ আয়াতে তারা বলে: আমরা আমাদের নেতা ও বড়দের কথা মেনেছিলাম, আর তারাই আমাদের পথভ্রষ্ট করেছে।"
          },
          {
            "en": "The quarrel at the gathering itself, Ibn Kathir says, is that of 34:31 to 34:33. As-Sa'di places 14:21 there too: once people have come out onto the plain, they begin to argue, each defending himself as far as he can, though that will not be granted them. The Muyassar also sets the words on the Day of Resurrection, when all appear to be judged. The fetched texts leave the difference standing, as does this article. Another sister, 2:166 and 2:167, completes the picture: the followed disown those who followed them, and every tie between them is cut.",
            "bn": "ইবন কাসীরের মতে হাশরের ময়দানের বিবাদ হলো ৩৪:৩১ থেকে ৩৪:৩৩ আয়াতেরটি। সা'দী ১৪:২১ আয়াতকেও রাখেন সেখানেই। মানুষ যখন ময়দানে বেরিয়ে আসবে, তখন তারা তর্ক শুরু করবে, প্রত্যেকে যতটা পারে নিজেকে বাঁচানোর চেষ্টা করবে। কিন্তু সে সুযোগ তারা পাবে কোথায়? মুয়াসসারও কথাগুলো রাখে কিয়ামতের দিনে, যখন সবাই বিচারের জন্য হাজির হবে। সংগৃহীত তাফসীরগুলো এ মতভেদ মিটিয়ে দেয়নি, এ লেখাও মেটাচ্ছে না। আরও কিছু সমধর্মী আয়াত ছবিটা পূর্ণ করে, ২:১৬৬ ও ২:১৬৭। সেখানে যাদের অনুসরণ করা হতো, তারা অনুসারীদের সঙ্গে সম্পর্ক অস্বীকার করে, আর তাদের মাঝের সব বন্ধন ছিঁড়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Panic and Patience Weighed Equal",
          "bn": "অস্থিরতা আর সবর সমান ওজনের"
        },
        "p": [
          {
            "en": "Sawa'un 'alayna a-jazi'na am sabarna ma lana min mahis: it is the same for us whether we panic or are patient; there is no escape for us. Al-Qurtubi explains mahis as a place of flight and refuge, from hasa, to flee or swerve aside: we have no way to put distance between us and the Fire. At-Tabari glosses it as a place to veer off to. Ibn Kathir: there is no deliverance from what we are in, whether we bear it or rage at it. At-Tabari puts it in the leaders' mouths: we have panicked, and neither panic nor patience has helped us.",
            "bn": "সাওয়াউন 'আলাইনা আজাযি'না আম সাবারনা মা লানা মিম মাহীস: আমরা অস্থির হই বা সবর করি, দুটোই আমাদের জন্য সমান, আমাদের পালানোর কোনো জায়গা নেই। কুরতুবী বলেন, মাহীস মানে পালানোর আর আশ্রয় নেওয়ার জায়গা। শব্দটা এসেছে হা-সা থেকে, অর্থাৎ পালানো বা পাশ কাটিয়ে সরে যাওয়া। মানে দাঁড়ায়: আগুন থেকে নিজেদের দূরে সরানোর কোনো উপায় আমাদের নেই। তাবারীর ব্যাখ্যায় এটা এমন জায়গা যেদিকে সরে যাওয়া যায়। ইবন কাসীর বলেন, যে অবস্থায় আমরা আছি তা থেকে মুক্তি নেই, সবর করি বা হা-হুতাশ করি। তাবারী নেতাদের মুখে কথাটা বসান এভাবে: আমরা অস্থির হয়েছি, কিন্তু অস্থিরতাও কাজে আসেনি, সবরও না।"
          },
          {
            "en": "Some commentators carry reports of how the people of the Fire came to say this. At-Tabari gives, with his chain through Yunus and Ibn Wahb, the words of Ibn Zayd, which Ibn Kathir also quotes: they said, the people of Paradise reached it by weeping and humbling themselves before Allah, so let us weep; when that did not help, they said, they reached it by patience, so let us be patient; they showed a patience never seen, it did not help, and then they said this verse. These are Ibn Zayd's words, not a hadith.",
            "bn": "জাহান্নামীরা কীভাবে এ কথায় পৌঁছাল, সে বিষয়ে কিছু বর্ণনা মুফাসসিররা এনেছেন। তাবারী ইউনুস ও ইবন ওয়াহবের মাধ্যমে নিজের সনদে ইবন যায়দের কথা আনেন, ইবন কাসীরও তা উদ্ধৃত করেন। তারা বলল, জান্নাতীরা জান্নাত পেয়েছে আল্লাহর কাছে কান্নাকাটি আর কাকুতি-মিনতি করে, চলো আমরাও কাঁদি। তাতে কাজ হলো না। তখন বলল, তারা জান্নাত পেয়েছে সবরের কারণে, চলো আমরাও সবর করি। এমন সবর করল যা আগে কেউ দেখেনি। তাতেও কাজ হলো না। তখন তারা এ আয়াতের কথাগুলো বলল। এটা ইবন যায়দের নিজের কথা, কোনো হাদীস নয়।"
          },
          {
            "en": "A second report, from Muhammad ibn Ka'b al-Qurazi, is in at-Tabari, al-Qurtubi and al-Baghawi: they agreed on patience, it lasted long, then they panicked. In at-Tabari's version he opens it with it reached me, or was mentioned to me, and the editor's note in the fetched at-Tabari text calls its chain ruined, one narrator being unknown or abandoned. Al-Baghawi cites Muqatil, without a chain: panic for five hundred years, then patience for five hundred. Al-Qurtubi gives the reverse order under it is narrated from the Prophet ﷺ, with no chain or grading, so this article does not rely on it. No fetched tafsir attaches a sound hadith to this verse.",
            "bn": "দ্বিতীয় বর্ণনাটি মুহাম্মাদ ইবন কা'ব আল-কুরাযীর, তাবারী, কুরতুবী ও বাগাভী তিনজনই এনেছেন। তারা সবর করার ব্যাপারে একমত হলো, সবর দীর্ঘ হলো, তারপর অস্থির হয়ে পড়ল। তাবারীর বর্ণনায় তিনি শুরু করেন এই বলে: আমার কাছে পৌঁছেছে, অথবা আমাকে বলা হয়েছে। সংগৃহীত তাবারীর টীকায় সম্পাদক এর সনদকে অকেজো বলেছেন, কারণ একজন বর্ণনাকারী অজ্ঞাত, নয়তো পরিত্যক্ত। বাগাভী কোনো সনদ ছাড়াই মুকাতিলের কথা আনেন: পাঁচশো বছর অস্থিরতা, তারপর পাঁচশো বছর সবর। কুরতুবী ঠিক উল্টো ক্রমটি আনেন 'নবী ﷺ থেকে বর্ণিত আছে' বলে, কিন্তু কোনো সনদ বা মান উল্লেখ করেন না। তাই এ লেখা সেটির উপর ভর করছে না। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো সহীহ হাদীস জোড়েনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Following While It Can Be Checked",
          "bn": "যাচাইয়ের সময় থাকতেই অনুসরণ"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes the Hereafter as the text describes it: a scene of that Day and a conversation among people whose outcome has already been decided. It licenses no contempt for any living person or community, and no one alive is to be labelled one of the weak or one of the arrogant because of it. While a person lives, the choice of whom to follow is still open to them. The verse is not a set of labels for sorting one's neighbours; it is a warning addressed to whoever is reading it.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি আখিরাতের সেই ছবিই দেখায়, যা কুরআনের ভাষায় আছে: সেদিনের একটি দৃশ্য, আর এমন কিছু মানুষের কথোপকথন যাদের পরিণাম আগেই ঠিক হয়ে গেছে। বেঁচে থাকা কোনো মানুষ বা কোনো সম্প্রদায়কে তুচ্ছ করার অনুমতি এ আয়াত দেয় না। এ আয়াতের জোরে জীবিত কাউকে দুর্বলদের দলে বা অহংকারীদের দলে ফেলা যায় না। মানুষ যতদিন বেঁচে আছে, কার পেছনে চলবে সে পথ তার সামনে খোলা। প্রতিবেশীদের গায়ে তকমা লাগানোর তালিকা এটা নয়। এটা সতর্কবাণী, আর তা যে পড়ছে তার উদ্দেশেই।"
          },
          {
            "en": "As-Sa'di's word, al-muqallidun, the imitators, names the habit the verse is about: taking a road because someone ahead is on it, without asking where it goes. The followers in the verse never say they were forced. They say only that they followed. Everyone follows someone, a parent, a teacher, a scholar, a crowd, a screen. The question the verse leaves with the reader is whether that following is being checked against what Allah revealed and what His Messenger ﷺ taught while checking can still change something.",
            "bn": "সা'দীর ব্যবহার করা শব্দ আল-মুকাল্লিদূন, অর্থাৎ অন্ধ অনুকরণকারী। এ আয়াত যে অভ্যাসের কথা বলছে, শব্দটা ঠিক সেটাকেই চিহ্নিত করে। সামনে কেউ হাঁটছে বলে একই রাস্তা ধরা, রাস্তাটা কোথায় গেছে তা না জেনেই। আয়াতের অনুসারীরা কোথাও বলে না যে তাদের জোর করা হয়েছিল। তারা শুধু বলে, আমরা তোমাদের অনুসরণ করেছিলাম। প্রত্যেকেই কারও না কারও পেছনে চলে। বাবা-মা, শিক্ষক, আলেম, ভিড়, কিংবা মোবাইলের পর্দা। আয়াত পাঠকের হাতে যে প্রশ্ন রেখে যায় তা হলো: এই অনুসরণ কি আল্লাহর নাযিল করা বাণী আর তাঁর রসূল ﷺ-এর শিক্ষার সঙ্গে মিলিয়ে দেখা হচ্ছে? এখনই মিলিয়ে দেখার সময়, যখন তাতে কিছু বদলানো যায়।"
          },
          {
            "en": "The verse shows the moment when I was only following is finally said aloud and buys nothing, and the ones who were followed cannot even answer for themselves. That is why the check belongs to today. Of any voice that shapes my faith or my conduct I can ask: where does this lead, and on what proof? Would this person stand for me then? And if others follow me, at home, at work or anywhere else, the verse speaks to me from the other side as well, for in it the followed stand beside their followers with nothing to give them.",
            "bn": "আয়াতটি সেই মুহূর্ত দেখায়, যখন 'আমি তো শুধু অনুসরণ করেছি' কথাটা শেষমেশ মুখে উচ্চারিত হয়, অথচ তাতে কিছুই মেলে না। আর যাদের অনুসরণ করা হয়েছিল, তারা নিজেদের দায়ও নিতে পারে না। এ কারণেই যাচাইয়ের কাজটা আজকের। আমার ঈমান বা আচরণকে যে কণ্ঠ গড়ে দিচ্ছে, তাকে আমি জিজ্ঞেস করতে পারি: এ পথ কোথায় নিয়ে যায়, আর তার দলিল কী? সেদিন কি এই মানুষটি আমার হয়ে দাঁড়াবে? আর ঘরে, কাজে বা অন্য কোথাও কেউ যদি আমার পেছনে চলে, তাহলে আয়াতটি আমাকে অন্য দিক থেকেও ডাকছে। কারণ এখানে যাদের অনুসরণ করা হতো, তারা অনুসারীদের পাশেই দাঁড়িয়ে, অথচ তাদের দেওয়ার মতো কিছুই নেই।"
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
