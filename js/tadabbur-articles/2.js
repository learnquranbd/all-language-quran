/**
 * Tadabbur long-form articles — surah 2.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "2:2": {
    "sections": [
      {
        "h": {
          "en": "A Book Named From a Distance",
          "bn": "দূর থেকে ডাকা এক কিতাব"
        },
        "p": [
          {
            "en": "The surah opens with the disjointed letters of 2:1 and then, before any law or story, names what the reader is holding. Dhalika al-kitab: that is the Book. Arabic has a nearer demonstrative, hadha, and it is not used. The commentators read the far demonstrative as a mark of elevation rather than distance, the way we point to something high up rather than something out of reach. The definite article does the rest. Not a book among books, but the Book.",
            "bn": "সূরাটি শুরু হয় 2:1 আয়াতের বিচ্ছিন্ন হরফ দিয়ে, তারপর কোনো বিধান বা কাহিনি আসার আগেই পাঠক যা হাতে ধরে আছে তার নাম বলে দেয়। যালিকাল কিতাব — এই সেই কিতাব। আরবিতে নিকটবর্তীর জন্য 'হাযা' শব্দ আছে, অথচ তা ব্যবহার করা হয়নি। মুফাসসিরগণ দূরবাচক ইঙ্গিতটিকে দূরত্বের চিহ্ন নয়, বরং মর্যাদার চিহ্ন হিসেবে পড়েন — যেমন আমরা নাগালের বাইরের কিছুর দিকে নয়, বরং উঁচুতে থাকা কিছুর দিকে আঙুল তুলি। নির্দিষ্টতাবাচক 'আল' বাকিটা সেরে দেয়। এটি বহু কিতাবের একটি নয়, এটি সেই কিতাব।"
          },
          {
            "en": "The written mushaf preserves a detail readers often miss. Two small pause marks sit in this verse, one after la rayba and one after fihi, and they are the embracing marks: the reciter may stop at either place but not at both. Stop at fihi and the sense is that there is no doubt in it, and it is guidance. Stop earlier and the sense becomes that there is no doubt at all, and in it is guidance.",
            "bn": "লিখিত মুসহাফ এমন একটি খুঁটিনাটি রক্ষা করে যা পাঠকের চোখ প্রায়ই এড়িয়ে যায়। এই আয়াতে দুটি ছোট ওয়াকফ-চিহ্ন আছে, একটি 'লা রাইবা'-র পরে আর একটি 'ফীহি'-র পরে, আর এগুলো পরস্পরকে জড়িয়ে থাকা চিহ্ন: পাঠক দুটির যেকোনো একটিতে থামতে পারেন, দুটিতেই নয়। 'ফীহি'-তে থামলে অর্থ দাঁড়ায় — এতে কোনো সন্দেহ নেই, আর এটি হিদায়াত। আগে থামলে অর্থ দাঁড়ায় — কোনো সন্দেহই নেই, আর এর ভেতরে আছে হিদায়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "No Doubt In It",
          "bn": "এতে কোনো সন্দেহ নেই"
        },
        "p": [
          {
            "en": "Rayb is not mild uncertainty. The Arabic carries doubt mixed with unease, the suspicion that something is being hidden from you. The negation used here is the one that denies an entire category, so the sentence is not saying that most people find the Book convincing. It is saying that the Book contains nothing that gives doubt a place to stand. That is a claim, and the surah knows it. It does not leave the claim resting on assertion for long.",
            "bn": "'রাইব' মানে হালকা অনিশ্চয়তা নয়। আরবি শব্দটি এমন সন্দেহ বহন করে যার সঙ্গে মিশে থাকে অস্বস্তি — এই আশঙ্কা যে তোমার কাছ থেকে কিছু লুকানো হচ্ছে। এখানে যে অস্বীকৃতি ব্যবহৃত হয়েছে তা গোটা শ্রেণিকেই অস্বীকার করে, ফলে বাক্যটি বলছে না যে বেশির ভাগ মানুষ কিতাবটিকে বিশ্বাসযোগ্য মনে করে। বলছে, এই কিতাবে এমন কিছু নেই যার ওপর সন্দেহ দাঁড়াতে পারে। এটি একটি দাবি, আর সূরা তা জানে। দাবিটিকে সে বেশিক্ষণ কেবল ঘোষণার ওপর ছেড়ে রাখে না।"
          },
          {
            "en": "Twenty-one verses later the same root returns as a challenge. If you are in rayb about what We have sent down upon Our servant, then bring one surah like it and call your witnesses besides Allah, if you are truthful. That is 2:23, and 2:24 adds that they will never be able to. The Book answers doubt by handing the doubter a test he can run himself. The confidence of 2:2 is not asking to be taken on trust.",
            "bn": "একুশ আয়াত পরে সেই একই ধাতু ফিরে আসে চ্যালেঞ্জ হয়ে। আমি আমার বান্দার প্রতি যা নাযিল করেছি তাতে যদি তোমাদের 'রাইব' থাকে, তবে তার মতো একটি সূরা নিয়ে এসো এবং আল্লাহ ছাড়া তোমাদের সাক্ষীদের ডাকো, যদি তোমরা সত্যবাদী হও। এটি 2:23 আয়াত, আর 2:24 আয়াত যোগ করে যে তারা কখনোই পারবে না। কিতাব সন্দেহের জবাব দেয় সন্দেহকারীর হাতে এমন এক পরীক্ষা তুলে দিয়ে যা সে নিজেই চালাতে পারে। 2:2 আয়াতের আত্মবিশ্বাস অন্ধভাবে মেনে নেওয়ার আবেদন করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Guidance Offered to Everyone",
          "bn": "হিদায়াত সবার জন্য উন্মুক্ত"
        },
        "p": [
          {
            "en": "Then the scope narrows: hudan lil-muttaqin, guidance for those conscious of Allah. Read alone that sounds like a locked door, but the Quran describes its own guidance in wider terms elsewhere. In 2:185 the same Book is called hudan lin-nas, guidance for mankind. In 41:44 it is called a guidance and a cure for those who believe, while for others there is deafness in their ears. The same revelation is described both ways, and the mufassirun explain why.",
            "bn": "এরপর পরিধি সংকুচিত হয়: হুদাল লিল-মুত্তাকীন — মুত্তাকীদের জন্য পথনির্দেশ। কেবল এটুকু পড়লে মনে হয় দরজা বন্ধ, অথচ কুরআন অন্যত্র নিজের হিদায়াতকে আরও ব্যাপক ভাষায় বর্ণনা করে। 2:185 আয়াতে সেই একই কিতাবকে বলা হয়েছে হুদাল লিন-নাস — মানুষের জন্য পথনির্দেশ। 41:44 আয়াতে বলা হয়েছে, যারা ঈমান আনে তাদের জন্য এটি হিদায়াত ও আরোগ্য, আর অন্যদের কানে রয়েছে বধিরতা। একই ওহীকে দুইভাবেই বর্ণনা করা হয়েছে, আর মুফাসসিরগণ ব্যাখ্যা করেন কেন।"
          },
          {
            "en": "Their standard answer distinguishes two things the one word covers. There is guidance as showing the way, offered to every human being without exception, for which the Book is a public road sign. And there is guidance as being made to walk it, which Allah grants. The first is why the Book was sent to mankind at large; the second is why this verse names those who receive it.",
            "bn": "তাঁদের পরিচিত উত্তর একটি শব্দের ভেতরে থাকা দুটি বিষয়কে আলাদা করে। এক হলো পথ দেখিয়ে দেওয়ার অর্থে হিদায়াত, যা ব্যতিক্রমহীনভাবে প্রত্যেক মানুষকে দেওয়া হয়েছে এবং যার জন্য এই কিতাব সবার জন্য উন্মুক্ত এক পথনির্দেশক ফলক। আর দুই হলো সেই পথে চালিয়ে নেওয়ার অর্থে হিদায়াত, যা আল্লাহ দান করেন। প্রথমটির কারণেই কিতাব গোটা মানবজাতির কাছে পাঠানো হয়েছে; দ্বিতীয়টির কারণেই এই আয়াত নাম নেয় তাদের, যারা তা গ্রহণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Muttaqin Are Named",
          "bn": "কেন মুত্তাকীদের নাম নেওয়া হলো"
        },
        "p": [
          {
            "en": "As-Sa'di gives the plainest reason. A benefit is attributed to the one who actually takes it. The sun rises over everyone and the one who opens his shutters is the one it lights, so the Book is called guidance for the God-conscious because they are the ones in whom it does its work. The Quran uses the same idiom elsewhere: 79:45 tells the Prophet ﷺ that he is only a warner to those who fear the Hour, though he was sent to all people.",
            "bn": "আস-সাদী সবচেয়ে সরল কারণটি দেন। কোনো উপকারকে সেই ব্যক্তির সঙ্গে যুক্ত করা হয় যে আসলে তা গ্রহণ করে। সূর্য সবার ওপরেই ওঠে, কিন্তু যে জানালা খুলে দেয় তারই ঘর আলোকিত হয়; তাই কিতাবকে মুত্তাকীদের হিদায়াত বলা হয়েছে, কারণ তাদের ভেতরেই এটি কাজ করে। কুরআন অন্যত্রও একই ভঙ্গি ব্যবহার করে: 79:45 আয়াতে নবী ﷺ-কে বলা হয়েছে তিনি কেবল তাদেরই সতর্ককারী যারা কিয়ামতকে ভয় করে, যদিও তাঁকে সব মানুষের কাছেই পাঠানো হয়েছিল।"
          },
          {
            "en": "There is a second reading that fits alongside it. Taqwa comes from a root meaning to shield oneself, and its beginning is small: a willingness to be corrected, a reluctance to be caught doing wrong. That much a person brings to the first page. What the Book then does is enlarge it, which is exactly what 47:17 states, that those who are guided are increased in guidance and given their taqwa. The little that is brought is not the price of entry. It is the opening the Book widens.",
            "bn": "এর পাশে বসে এমন আরেকটি পাঠও আছে। 'তাকওয়া' শব্দের ধাতুর অর্থ নিজেকে আড়াল করা বা ঢাল বানানো, আর এর শুরুটা খুব ছোট: সংশোধিত হওয়ার প্রস্তুতি, অন্যায় করতে গিয়ে ধরা পড়ার অস্বস্তি। এটুকু মানুষ প্রথম পৃষ্ঠাতেই সঙ্গে নিয়ে আসে। এরপর কিতাব সেটিকেই বড় করে তোলে, আর 47:17 আয়াত ঠিক এ কথাই বলে — যারা হিদায়াত পেয়েছে আল্লাহ তাদের হিদায়াত বাড়িয়ে দেন এবং তাদের তাকওয়া দান করেন। যেটুকু নিয়ে আসা হয় তা প্রবেশমূল্য নয়। তা সেই ফাঁক, যা কিতাব প্রশস্ত করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Does Not Leave Them Vague",
          "bn": "আয়াত তাদের অস্পষ্ট রাখে না"
        },
        "p": [
          {
            "en": "Whoever these God-conscious are, the surah refuses to let them stay an abstraction. The description runs straight on into the verses that follow: 2:3 names belief in the unseen, established prayer and spending from what has been provided; 2:4 adds belief in what was revealed to the Prophet ﷺ and before him, and certainty about the Hereafter; 2:5 closes with the verdict that these are upon guidance from their Lord and these are the successful. The qualification is a checklist, not a mystery.",
            "bn": "এই মুত্তাকীরা যেই হোন, সূরা তাঁদের কোনো বিমূর্ত ধারণা হয়ে থাকতে দেয় না। বর্ণনাটি সরাসরি পরের আয়াতগুলোতে গড়িয়ে যায়: 2:3 আয়াতে আসে গায়েবের প্রতি ঈমান, নামায কায়েম করা এবং যা রিযিক দেওয়া হয়েছে তা থেকে ব্যয় করা; 2:4 আয়াত যোগ করে নবী ﷺ-এর প্রতি ও তাঁর আগে যা নাযিল হয়েছে তাতে ঈমান এবং আখিরাত সম্পর্কে দৃঢ় বিশ্বাস; 2:5 আয়াত শেষ করে এই রায় দিয়ে যে তারাই তাদের রবের পক্ষ থেকে হিদায়াতের ওপর আছে এবং তারাই সফলকাম। শর্তটি এক রহস্য নয়, বরং একটি তালিকা।"
          }
        ]
      },
      {
        "h": {
          "en": "How to Open It Tomorrow",
          "bn": "আগামীকাল একে কীভাবে খুলবেন"
        },
        "p": [
          {
            "en": "Practically this changes the posture more than the schedule. Come to the page as one being addressed rather than one auditing a text, and ask before reading, the way 3:8 teaches, that hearts not be turned away after guidance has come. Then act on one clear instruction from the sitting before opening the next. Guidance in this verse is not information waiting to be collected. It is a road, described by where people stand when they finish reading.",
            "bn": "ব্যবহারিকভাবে এটি সময়সূচির চেয়ে বেশি বদলে দেয় ভঙ্গিটাকে। পৃষ্ঠার সামনে এমনভাবে আসুন যেন আপনাকেই সম্বোধন করা হচ্ছে, কোনো লেখা যাচাই করতে বসেননি; আর পড়ার আগে চান — যেভাবে 3:8 আয়াত শেখায় — হিদায়াত আসার পর যেন অন্তর বেঁকে না যায়। এরপর পরের পৃষ্ঠা খোলার আগে সেই বৈঠকের একটি স্পষ্ট নির্দেশ কাজে লাগান। এই আয়াতে হিদায়াত মানে সংগ্রহের অপেক্ষায় থাকা তথ্য নয়। এটি একটি পথ, পড়া শেষে মানুষ কোথায় দাঁড়ায় তা দিয়েই এর পরিচয়।"
          }
        ]
      }
    ]
  },
  "2:8-10": {
    "sections": [
      {
        "h": {
          "en": "Three Groups at the Gate",
          "bn": "প্রবেশপথে তিন দল"
        },
        "p": [
          {
            "en": "The Quran's longest surah opens by sorting humanity into three. Four verses, 2:2-5, describe the believers and end with their success. Two verses, 2:6-7, dispatch the open disbelievers, sealed against warning. Then thirteen verses, 2:8-20, are given to a third group: those who say they believe and do not. The commentators draw the obvious lesson from the arithmetic — the concealed disease needed the longest description, because it is the hardest to see.",
            "bn": "কুরআনের দীর্ঘতম সূরা শুরু হয় মানুষকে তিন ভাগে সাজিয়ে। চারটি আয়াত, 2:2-5, মুমিনদের বর্ণনা করে এবং শেষ হয় তাদের সাফল্যে। দুটি আয়াত, 2:6-7, প্রকাশ্য কাফিরদের কথা সেরে ফেলে — সতর্কবার্তার বিরুদ্ধে যারা মোহরাঙ্কিত। তারপর তেরোটি আয়াত, 2:8-20, বরাদ্দ তৃতীয় এক দলের জন্য: যারা বলে আমরা বিশ্বাস করি, অথচ করে না। এই পাটিগণিত থেকে মুফাসসিরগণ স্বাভাবিক শিক্ষাটিই টানেন — লুকানো রোগটির জন্যই দীর্ঘতম বর্ণনা দরকার ছিল, কারণ সেটিই দেখা সবচেয়ে কঠিন।"
          },
          {
            "en": "The hypocrites of Madinah were a fact of the community this surah addressed: men who entered Islam outwardly, for safety or advantage, after the believers grew strong, while their hearts stayed behind. But the passage is worded without names, in the present tense of every generation — wa minan-nas, and among mankind are those who say. The Quran preserved the description and not the roster, because the disease outlives its first patients.",
            "bn": "মদীনার মুনাফিকরা ছিল এই সূরার সম্বোধিত সমাজের এক বাস্তবতা: মুমিনরা শক্তিশালী হওয়ার পর নিরাপত্তা বা সুবিধার জন্য বাহ্যিকভাবে ইসলামে ঢোকা মানুষ, যাদের হৃদয় পেছনেই রয়ে গিয়েছিল। কিন্তু অংশটির ভাষায় কোনো নাম নেই — তা প্রতিটি প্রজন্মের বর্তমান কালে লেখা: ওয়া মিনান-নাস — আর মানুষের মধ্যে এমন কিছু লোক আছে যারা বলে। কুরআন সংরক্ষণ করেছে বর্ণনাটি, তালিকাটি নয় — কারণ রোগ তার প্রথম রোগীদের চেয়ে বেশি দিন বাঁচে।"
          }
        ]
      },
      {
        "h": {
          "en": "Words Without the Heart's Signature",
          "bn": "হৃদয়ের সই ছাড়া কথা"
        },
        "p": [
          {
            "en": "Their sentence is doctrinally perfect: we believe in Allah and in the Last Day — the opening and the end of faith, the two articles that carry all the rest. The refutation does not accuse them of misstating anything; it goes beneath the words: wa ma hum bi-mu'minin, and they are not believers at all, with an emphatic particle pressed into the denial. The Quran here separates two things we habitually merge — the content of a statement, and the truthfulness of its speaker.",
            "bn": "তাদের বাক্যটি আকীদার দিক থেকে নিখুঁত: আমরা ঈমান এনেছি আল্লাহর প্রতি ও শেষ দিবসের প্রতি — ঈমানের সূচনা ও সমাপ্তি, যে দুটি স্তম্ভ বাকি সবকিছু বহন করে। খণ্ডনটি তাদের কথায় কোনো ভুল ধরেনি; তা নেমে যায় শব্দের নিচে: ওয়া মা হুম বি-মু'মিনীন — আর তারা মোটেও মুমিন নয়; অস্বীকৃতির ভেতরে চেপে বসানো এক জোরদার অব্যয়সহ। কুরআন এখানে আলাদা করে দেয় দুটি জিনিস, যা আমরা অভ্যাসবশে মিশিয়ে ফেলি — বক্তব্যের বিষয়বস্তু, আর বক্তার সত্যবাদিতা।"
          },
          {
            "en": "That separation returns in 63:1, where hypocrites state a true sentence — that Muhammad ﷺ is the Messenger of Allah — and Allah, affirming the sentence itself, testifies that they are liars in saying it. Truth in the mouth does not certify truth in the heart. A claim of faith is weighed not against a creed but against the person making it, and only One party can weigh that.",
            "bn": "সেই বিভাজন ফিরে আসে 63:1 আয়াতে — মুনাফিকরা একটি সত্য বাক্যই বলে: মুহাম্মাদ ﷺ আল্লাহর রাসূল; আর আল্লাহ, বাক্যটিকে নিজেই সত্যায়ন করে, সাক্ষ্য দেন যে এ কথা বলায় তারা মিথ্যাবাদী। মুখের সত্য হৃদয়ের সত্যের সনদ নয়। ঈমানের দাবি ওজন করা হয় আকীদার বিপরীতে নয়, দাবিদার মানুষটির বিপরীতে — আর সেই ওজন করার সাধ্য কেবল এক সত্তারই।"
          }
        ]
      },
      {
        "h": {
          "en": "Deception That Circles Back",
          "bn": "ঘুরে আসা প্রতারণা"
        },
        "p": [
          {
            "en": "They seek to deceive Allah and those who believe — yukhadi'un, a verb form that pictures deception as an attempted contest. The verse's answer removes the other contestant: they deceive none but themselves, and they perceive it not. Nothing lands on Allah, who knows what they conceal, and nothing lands durably on the believers. What remains is the deceiver himself, spending his one life maintaining a performance whose only permanent audience is the performer.",
            "bn": "তারা আল্লাহ ও মুমিনদের প্রতারিত করতে চায় — ইউখাদিঊন, এমন এক ক্রিয়ারূপ যা প্রতারণাকে আঁকে চেষ্টা করা এক প্রতিযোগিতা হিসেবে। আয়াতের জবাব অপর প্রতিযোগীকেই সরিয়ে দেয়: তারা নিজেদের ছাড়া কাউকে প্রতারিত করে না, অথচ টের পায় না। আল্লাহর ওপর কিছুই পড়ে না — তারা যা লুকায় তিনি তা জানেন; মুমিনদের ওপরও স্থায়ীভাবে কিছু পড়ে না। পড়ে থাকে কেবল প্রতারক নিজে — তার একটিমাত্র জীবন খরচ করছে এমন এক অভিনয় টিকিয়ে রাখতে, যার একমাত্র স্থায়ী দর্শক অভিনেতা নিজেই।"
          },
          {
            "en": "The lack of perception is the frightening clause. Hypocrisy in this passage is not a cold decision renewed each morning; it becomes a condition its carrier can no longer feel. Each successful performance makes the mask more comfortable, until the actor forgets it is a mask. That is why the passage speaks of a disease rather than a crime — crimes are known to their doers, while a disease can spread precisely because it goes unfelt.",
            "bn": "টের না পাওয়াটাই ভয়ের বাক্যাংশ। এই অংশে মুনাফিকি প্রতিদিন সকালে নতুন করে নেওয়া কোনো ঠান্ডা সিদ্ধান্ত নয়; তা এমন এক অবস্থায় পরিণত হয়, যা তার বাহক আর অনুভবই করতে পারে না। প্রতিটি সফল অভিনয় মুখোশটিকে আরও আরামদায়ক করে তোলে, শেষে অভিনেতা ভুলে যায় যে ওটি একটি মুখোশ। এ কারণেই অংশটি অপরাধ নয়, রোগের ভাষায় কথা বলে — অপরাধ তার কর্তার জানা থাকে; কিন্তু রোগ ছড়াতে পারে ঠিক এই জন্যই যে, তা অনুভূত হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Disease That Is Fed",
          "bn": "যে রোগকে খোরাক দেওয়া হয়"
        },
        "p": [
          {
            "en": "Fi qulubihim marad — in their hearts is a disease. The early commentators gloss it as doubt, and Ibn Kathir relates their view that this is a disease in the religion rather than the body. Then a clause of precise justice: fa-zadahumu Allahu marada, so Allah increased them in disease. The increase is recompense in kind, measure for measure — as they chose falseness, more falseness was opened to them. No spiritual state stands still; it compounds in whichever direction it is fed.",
            "bn": "ফী কুলূবিহিম মারাদ — তাদের হৃদয়ে আছে এক রোগ। প্রাচীন মুফাসসিরগণ এর অর্থ করেছেন সন্দেহ, আর ইবনে কাসীর তাঁদের এই বক্তব্য বর্ণনা করেন যে এটি শরীরের নয়, দ্বীনের রোগ। তারপর সূক্ষ্ম ইনসাফের একটি বাক্যাংশ: ফা-যাদাহুমুল্লাহু মারাদা — ফলে আল্লাহ তাদের রোগ বাড়িয়ে দিলেন। এই বৃদ্ধি সমজাতীয় প্রতিদান, মাপে মাপে — তারা যেহেতু মিথ্যাকে বেছে নিল, তাদের জন্য খুলে দেওয়া হলো আরও মিথ্যা। কোনো আধ্যাত্মিক অবস্থাই স্থির থাকে না; যে দিকে খোরাক পায়, সেদিকেই তা চক্রবৃদ্ধিতে বাড়ে।"
          },
          {
            "en": "The sentence of punishment is attached to a habit, not an act: a painful punishment bima kanu yakdhibun — for what they used to lie, the Arabic construction of kana with the present verb marking continuous, habitual practice. The passage indicts lying as a settled way of being. One lie is a sin to repent of; lying as a maintained system is the load-bearing wall of hypocrisy itself, and the punishment clause names the wall, not a single brick.",
            "bn": "শাস্তির রায়টি জোড়া হয়েছে কোনো একক কাজের সঙ্গে নয়, অভ্যাসের সঙ্গে: যন্ত্রণাদায়ক শাস্তি — বিমা কানূ ইয়াকযিবূন, তারা যে মিথ্যা বলে আসছিল সে কারণে; আরবিতে কানা-র সঙ্গে বর্তমান ক্রিয়ার এই গঠন বোঝায় চলমান, অভ্যাসগত চর্চা। অংশটি অভিযুক্ত করে মিথ্যাকে এক থিতু হয়ে বসা জীবনধারা হিসেবে। একটি মিথ্যা তওবাযোগ্য একটি গুনাহ; কিন্তু ব্যবস্থা হিসেবে টিকিয়ে রাখা মিথ্যা খোদ মুনাফিকির ভারবাহী দেয়াল — আর শাস্তির বাক্যাংশ নাম নেয় দেয়ালটির, কোনো একটি ইটের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Passage Continues",
          "bn": "অংশটি যেভাবে এগোয়"
        },
        "p": [
          {
            "en": "The following verses extend the portrait. In 2:11-12 they answer the charge of corruption with a claim of reform — we are only setters-right — and the Quran replies that they are the corrupters, though they perceive not. In 2:14 the two faces are shown in motion: meeting the believers they say we believe, and alone with their devils they say we are with you, we were only mocking. Every scene repeats the first one — a public sentence, a private reality, and a gap.",
            "bn": "পরের আয়াতগুলো প্রতিকৃতিটি আরও বিস্তৃত করে। 2:11-12 আয়াতে বিপর্যয় ঘটানোর অভিযোগের জবাবে তারা তোলে সংস্কারের দাবি — আমরা তো কেবল সংশোধনকারী — আর কুরআন জবাব দেয়: তারাই বিপর্যয়কারী, অথচ টের পায় না। 2:14 আয়াতে দুই মুখ দেখা যায় চলমান অবস্থায়: মুমিনদের সঙ্গে দেখা হলে বলে আমরা ঈমান এনেছি, আর নিজেদের শয়তানদের সঙ্গে একা হলে বলে আমরা তোমাদের সঙ্গেই আছি, আমরা তো কেবল ঠাট্টা করছিলাম। প্রতিটি দৃশ্য প্রথম দৃশ্যেরই পুনরাবৃত্তি — একটি প্রকাশ্য বাক্য, একটি গোপন বাস্তবতা, আর মাঝখানে ফাঁক।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding the Mirror Honestly",
          "bn": "আয়নাটি সৎভাবে ধরা"
        },
        "p": [
          {
            "en": "The passage is a mirror, and mirrors are for the person in front of them. Its use is not to diagnose neighbours but to run the audit inward: where do my words about faith outrun my heart — in public religiosity, in pious phrases typed without feeling, in commitments announced and quietly dropped? The verses warn that the gap does not hold steady. Whatever is performed and not meant widens it; whatever is meant and practised heals it.",
            "bn": "অংশটি একটি আয়না, আর আয়না তার সামনের মানুষটির জন্যই। এর ব্যবহার প্রতিবেশীর রোগনির্ণয়ে নয়, ভেতরমুখী হিসাব নেওয়ায়: ঈমান নিয়ে আমার কথা কোথায় আমার হৃদয়কে ছাড়িয়ে যায় — প্রকাশ্য ধার্মিকতায়, অনুভূতি ছাড়া টাইপ করা ভক্তিবাক্যে, ঘোষণা দিয়ে চুপিচুপি ছেড়ে দেওয়া অঙ্গীকারে? আয়াতগুলো সতর্ক করে: এই ফাঁক স্থির থাকে না। যা অভিনয় করা হয় অথচ মন থেকে নয়, তা ফাঁকটি চওড়া করে; যা মন থেকে চাওয়া ও চর্চা করা হয়, তা সারিয়ে তোলে।"
          },
          {
            "en": "The passage also shows the direction of repair by naming the mechanics of decline. If lying as a habit feeds the disease, truthfulness as a habit starves it: one commitment kept exactly as announced, one pious sentence not said because it was not yet true, one deed moved from the seen column to the unseen. The believers described in 2:2-5 differ not by grander claims but by smaller gaps — and the gap, not the claim, is what this passage measures.",
            "bn": "অবনতির কলকব্জার নাম নিয়ে অংশটি মেরামতের দিকও দেখিয়ে দেয়। অভ্যাসের মিথ্যা যদি রোগের খোরাক হয়, অভ্যাসের সত্যবাদিতা তাকে উপোস রাখে: ঘোষণামতো হুবহু রক্ষা করা একটি অঙ্গীকার, এখনো সত্য হয়ে ওঠেনি বলে না-বলা একটি ভক্তিবাক্য, দেখার ঘর থেকে না-দেখার ঘরে সরিয়ে নেওয়া একটি আমল। 2:2-5 আয়াতে বর্ণিত মুমিনরা আলাদা বড় দাবিতে নয়, ছোট ফাঁকে — আর এই অংশ মাপে দাবিটি নয়, ফাঁকটিই।"
          }
        ]
      }
    ]
  },
  "2:22": {
    "sections": [
      {
        "h": {
          "en": "The First Command, the First Prohibition",
          "bn": "প্রথম আদেশ, প্রথম নিষেধ"
        },
        "p": [
          {
            "en": "Ibn Kathir notes that the first imperative addressed to human beings in the order of the mushaf is 2:21, worship your Lord who created you and those before you, and that the first prohibition follows here. That placement is worth holding. Before any ruling on food, marriage, war or wealth, the Book issues one instruction and one ban, and they are two sides of a single matter: give worship to Him, and do not hand it to anything else.",
            "bn": "ইবনে কাসীর উল্লেখ করেন, মুসহাফের ক্রম অনুসারে মানুষের উদ্দেশে প্রথম আদেশটি হলো 2:21 আয়াত — তোমাদের সেই রবের ইবাদত করো যিনি তোমাদের ও তোমাদের পূর্ববর্তীদের সৃষ্টি করেছেন — আর প্রথম নিষেধাজ্ঞাটি আসে এখানেই। এই অবস্থানটি মনে রাখার মতো। খাদ্য, বিবাহ, যুদ্ধ বা সম্পদ নিয়ে কোনো বিধান আসার আগেই কিতাব একটি আদেশ ও একটি নিষেধ জারি করে, আর দুটিই একই বিষয়ের দুই পিঠ: ইবাদত তাঁকেই দাও, আর অন্য কিছুর হাতে তুলে দিয়ো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Bed and a Ceiling",
          "bn": "বিছানা আর ছাদ"
        },
        "p": [
          {
            "en": "The evidence offered is domestic, not astronomical. He made the earth firash for you, the word for bedding spread out to lie on, and the sky bina', a built structure raised over it. Put together they describe a house: a floor prepared for rest and a roof above it. The argument is not that these facts are surprising. It is that they are so ordinary that we walk across the floor and under the roof all day without registering that someone laid them out.",
            "bn": "এখানে যে প্রমাণ পেশ করা হয় তা জ্যোতির্বিজ্ঞানের নয়, ঘরকন্নার। তিনি তোমাদের জন্য যমীনকে করেছেন 'ফিরাশ' — বিছিয়ে দেওয়া বিছানা, যার ওপর শোয়া যায়; আর আকাশকে করেছেন 'বিনা' — তার ওপরে তোলা এক নির্মিত কাঠামো। দুটি মিলিয়ে একটি ঘরের বর্ণনা: বিশ্রামের জন্য প্রস্তুত মেঝে আর তার ওপরে ছাদ। যুক্তিটি এই নয় যে এসব তথ্য বিস্ময়কর। যুক্তিটি হলো, এগুলো এতই সাধারণ যে আমরা সারাদিন সেই মেঝের ওপর দিয়ে হাঁটি ও সেই ছাদের নিচে থাকি, অথচ খেয়ালই করি না কেউ এগুলো বিছিয়ে দিয়েছেন।"
          },
          {
            "en": "Then the chain of provision: He sent down water from the sky and brought out by it fruits as rizq for you. Notice that the sentence does not stop at rain and plants. It runs all the way to your table and names what arrives there as provision addressed to you. The Arabic marks this twice, once at the start with lakum, for you, and once at the end with lakum again. The whole arrangement is framed as something done on your behalf.",
            "bn": "এরপর আসে রিযিকের ধারা: তিনি আকাশ থেকে পানি নামিয়েছেন এবং তা দিয়ে ফলমূল বের করেছেন তোমাদের রিযিক হিসেবে। লক্ষ করুন, বাক্যটি বৃষ্টি আর গাছপালাতেই থামে না। এটি গড়িয়ে যায় একেবারে আপনার খাবারের পাত পর্যন্ত এবং সেখানে যা পৌঁছায় তাকে নাম দেয় আপনার উদ্দেশে দেওয়া রিযিক। আরবি এটি দুবার চিহ্নিত করে — শুরুতে একবার 'লাকুম', অর্থাৎ তোমাদের জন্য, আর শেষে আবার 'লাকুম'। গোটা ব্যবস্থাটিকেই উপস্থাপন করা হয় তোমাদের পক্ষে করা কিছু হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb That Turns Around",
          "bn": "যে ক্রিয়াপদ ঘুরে দাঁড়ায়"
        },
        "p": [
          {
            "en": "The prohibition reuses the verse's own opening verb, and the effect is easy to miss in translation. He is the one who made, ja'ala, the earth and the sky for you. So do not make, taj'alu, rivals for Allah. The same act of assigning a role is being described twice: He assigned these things to your benefit, so do not assign His place to them. Read that way the ban is not an arbitrary rule but the exact reversal of what has just been established.",
            "bn": "নিষেধাজ্ঞাটি আয়াতের নিজের শুরুর ক্রিয়াপদটিই আবার ব্যবহার করে, আর অনুবাদে এই প্রতিধ্বনি সহজেই হারিয়ে যায়। তিনিই সেই সত্তা যিনি তোমাদের জন্য যমীন ও আকাশকে 'জাআলা' করেছেন — বানিয়েছেন। সুতরাং তোমরা আল্লাহর জন্য সমকক্ষ 'তাজআলূ' করো না — বানিয়ো না। একই ভূমিকা নির্ধারণের কাজ দুবার বর্ণিত হচ্ছে: তিনি এসব জিনিসকে তোমাদের উপকারে নিয়োজিত করেছেন, সুতরাং তাঁর জায়গাটি এগুলোকে দিয়ে দিয়ো না। এভাবে পড়লে নিষেধটি খামখেয়ালি বিধান নয়, বরং একটু আগে যা প্রতিষ্ঠিত হলো তারই হুবহু উল্টো।"
          },
          {
            "en": "Andad is the plural of nidd, a rival or a match, something set up as an equal in a matter. It is a broader word than idol. A nidd is whatever is given a share of the reliance, fear, love or obedience that belongs to Allah alone. The Musnad of Ahmad records from Ibn Abbas (RA) that when a man said to the Prophet ﷺ, what Allah wills and what you will, he replied, have you made me a rival to Allah, and told him to say what Allah alone wills.",
            "bn": "'আনদাদ' হলো 'নিদ'-এর বহুবচন — প্রতিদ্বন্দ্বী বা সমকক্ষ, কোনো বিষয়ে যাকে সমান করে দাঁড় করানো হয়। শব্দটি 'মূর্তি'র চেয়ে ব্যাপক। যাকেই আল্লাহর একচ্ছত্র প্রাপ্য নির্ভরতা, ভয়, ভালোবাসা বা আনুগত্যের ভাগ দেওয়া হয়, সে-ই একটি 'নিদ'। ইমাম আহমদের মুসনাদে ইবনে আব্বাস (রাঃ) থেকে বর্ণিত আছে, এক ব্যক্তি নবী ﷺ-কে বলল, আল্লাহ যা চান আর আপনি যা চান; তিনি বললেন, তুমি কি আমাকে আল্লাহর সমকক্ষ বানিয়ে দিলে, আর তাকে বললেন বলতে — কেবল আল্লাহ যা চান।"
          }
        ]
      },
      {
        "h": {
          "en": "While You Know",
          "bn": "অথচ তোমরা জানো"
        },
        "p": [
          {
            "en": "The verse closes on two Arabic words that change the nature of the charge: wa antum ta'lamun, while you know. The people first addressed were not ignorant of Allah. They acknowledged Him as Creator and still divided their worship, which is why 35:3 can ask them whether there is any creator besides Allah who provides for them from the sky and the earth. The Quran rarely treats shirk as an information problem. It treats it as a failure to act on knowledge already held.",
            "bn": "আয়াতটি শেষ হয় আরবি দুটি শব্দে, যা অভিযোগের ধরনই বদলে দেয়: 'ওয়া আনতুম তা'লামূন' — অথচ তোমরা জানো। যাদের উদ্দেশে এটি প্রথম নাযিল হয়, তারা আল্লাহ সম্পর্কে অজ্ঞ ছিল না। তারা তাঁকে স্রষ্টা বলে স্বীকার করত, তবু ইবাদত ভাগ করে দিত; সে কারণেই 35:3 আয়াত তাদের প্রশ্ন করতে পারে, আল্লাহ ছাড়া আর কোনো স্রষ্টা আছে কি যে আকাশ ও যমীন থেকে তোমাদের রিযিক দেয়। কুরআন শিরককে খুব কমই তথ্যের ঘাটতি হিসেবে দেখে। সে একে দেখে ইতিমধ্যে জানা জ্ঞানের ওপর কাজ না করার ব্যর্থতা হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What a Rival Looks Like Now",
          "bn": "আজ সমকক্ষ দেখতে কেমন"
        },
        "p": [
          {
            "en": "Few readers today keep a carved figure at home, which can make the prohibition feel historical. Luqman's warning in 31:13 keeps it current by calling shirk a great wrong rather than a foreign custom. The question the verse leaves is functional: what actually holds the place of ultimate reliance? A salary, a passport, a reputation, a person whose approval decides your choices. Anything trusted the way Allah is meant to be trusted has quietly been assigned a share of what 2:22 forbids.",
            "bn": "আজকের খুব কম পাঠকের ঘরেই খোদাই করা মূর্তি থাকে, ফলে নিষেধটিকে ইতিহাসের বিষয় বলে মনে হতে পারে। 31:13 আয়াতে লুকমানের সতর্কবাণী একে সমকালীন রাখে, কারণ সেখানে শিরককে বলা হয়েছে মহা অন্যায় — কোনো বিদেশি প্রথা নয়। আয়াতটি যে প্রশ্ন রেখে যায় তা কার্যকারিতার প্রশ্ন: চূড়ান্ত নির্ভরতার আসনটি আসলে কে দখল করে আছে? বেতন, পাসপোর্ট, সুনাম, কিংবা এমন কেউ যার সম্মতি আপনার সিদ্ধান্ত ঠিক করে দেয়। আল্লাহর ওপর যেভাবে ভরসা করার কথা, সেভাবে যাকেই ভরসা করা হয়, তাকেই নীরবে 2:22 আয়াতের নিষিদ্ধ ভাগটি দিয়ে দেওয়া হয়েছে।"
          },
          {
            "en": "Al-Bukhari and Muslim both narrate from Mu'adh ibn Jabal (RA) that the Prophet ﷺ told him the right of Allah upon His servants is that they worship Him and associate nothing with Him. The verse gives the same claim its evidence rather than its wording. Every meal already eaten and every night already slept through is the argument. Gratitude noticed at the level of the floor and the roof is what keeps worship from being divided.",
            "bn": "ইমাম বুখারী ও মুসলিম উভয়েই মুআয ইবনে জাবাল (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ তাঁকে বলেছিলেন, বান্দাদের ওপর আল্লাহর হক হলো তারা তাঁরই ইবাদত করবে এবং তাঁর সঙ্গে কিছুকে শরিক করবে না। আয়াতটি একই দাবিকে ভাষা নয়, প্রমাণ দেয়। ইতিমধ্যে খাওয়া প্রতিটি খাবার আর নিশ্চিন্তে কাটানো প্রতিটি রাতই সেই প্রমাণ। মেঝে ও ছাদের স্তরে যে কৃতজ্ঞতা টের পাওয়া যায়, সেটিই ইবাদতকে ভাগ হয়ে যাওয়া থেকে বাঁচায়।"
          }
        ]
      }
    ]
  },
  "2:45-46": {
    "sections": [
      {
        "h": {
          "en": "Two Handholds for the Struggling",
          "bn": "সংগ্রামীর জন্য দুটি অবলম্বন"
        },
        "p": [
          {
            "en": "Seek help through patience and prayer. The verb is ista'inu — ask for aid, the same root a Muslim recites in every unit of prayer: You alone we worship, You alone we ask for help. The verse names two instruments: sabr, which holds the self steady, and salah, which connects it upward. In its context the address falls within a long passage to the Children of Israel, who were being called to let go of status and follow the truth; the counsel is general because that struggle is.",
            "bn": "ধৈর্য ও নামাযের মাধ্যমে সাহায্য চাও। ক্রিয়াপদটি 'ইসতাঈনূ' — সাহায্য প্রার্থনা করো; একই মূল থেকে মুসলিম প্রতি রাকাতে পড়ে: আমরা কেবল তোমারই ইবাদত করি, কেবল তোমারই সাহায্য চাই। আয়াতটি দুটি উপকরণের নাম নেয়: সবর, যা নিজেকে স্থির রাখে; আর সালাত, যা তাকে ঊর্ধ্বমুখে যুক্ত করে। প্রেক্ষাপটে সম্বোধনটি পড়েছে বনী ইসরাঈলের প্রতি এক দীর্ঘ অনুচ্ছেদের ভেতরে — যাদের ডাকা হচ্ছিল মর্যাদার মোহ ছেড়ে সত্য অনুসরণে; উপদেশটি সর্বজনীন, কারণ সেই সংগ্রামটাও সর্বজনীন।"
          },
          {
            "en": "The same command returns in 2:153, this time addressed to the believers directly, with an addition: indeed Allah is with the patient. The Quran issuing one prescription twice, to two different audiences, marks it as the standing treatment for difficulty as such — not for one community's crisis. Whatever the weight is, these are the two hands offered for carrying it.",
            "bn": "একই আদেশ 2:153 আয়াতে ফিরে আসে — এবার সরাসরি মুমিনদের সম্বোধন করে, একটি সংযোজনসহ: নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। কুরআন একই ব্যবস্থাপত্র দুবার, দুটি ভিন্ন শ্রোতাকে দিচ্ছে — এ থেকেই বোঝা যায়, এটি কোনো এক জাতির সংকটের ওষুধ নয়, বরং কষ্ট মাত্রেরই স্থায়ী চিকিৎসা। বোঝাটা যা-ই হোক, তা বইবার জন্য এই দুটিই বাড়িয়ে দেওয়া হাত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Quran Admits It Is Heavy",
          "bn": "কুরআন স্বীকার করে — এটা ভারী"
        },
        "p": [
          {
            "en": "Then comes a sentence of remarkable candor: and indeed it is kabirah — heavy, a big thing — except for the khashi'in. The Quran does not pretend that rising for prayer while anxious, tired or wronged is easy. It certifies the difficulty in the same breath as the command. That honesty matters pastorally: the person who finds prayer hard is not failing at some effortless thing; he is experiencing exactly what the Book said he would, and is being told where the lightness comes from.",
            "bn": "তারপর আসে বিস্ময়কর রকমের অকপট একটি বাক্য: আর নিশ্চয়ই তা 'কাবীরা' — ভারী, বড় এক ব্যাপার — খুশূ অবলম্বনকারীরা ('খাশিঈন') ছাড়া সবার জন্য। কুরআন ভান করে না যে দুশ্চিন্তা, ক্লান্তি বা মজলুম অবস্থায় নামাযে দাঁড়ানো সহজ। আদেশের সঙ্গে একই নিঃশ্বাসে সে কাঠিন্যটাও প্রত্যয়ন করে। এই সততার এক সান্ত্বনার দিক আছে: নামায যার কঠিন লাগে, সে কোনো সহজ কাজে ব্যর্থ হচ্ছে না; কিতাব যা বলেছিল সে ঠিক তা-ই অনুভব করছে — আর তাকে বলে দেওয়া হচ্ছে, হালকা হওয়াটা আসে কোথা থেকে।"
          },
          {
            "en": "Khushu' is the lowered, humbled attentiveness of a heart that knows before Whom it stands. The verse makes it the dividing line: the same prayer that is a burden to one person is a relief to another, and the difference is not in the prayer but in the state of the one praying. Weight, here, is a symptom to be read — heaviness in worship invites a question about the heart, not about the worship.",
            "bn": "খুশূ হলো সেই অবনত, বিনীত মনোযোগ — যে হৃদয় জানে সে কার সামনে দাঁড়িয়েছে, তার মনোযোগ। আয়াতটি একেই বিভাজনরেখা বানায়: একই নামায একজনের কাছে বোঝা, আরেকজনের কাছে স্বস্তি; আর পার্থক্যটা নামাযে নয়, নামাযীর অবস্থায়। ভার এখানে এক উপসর্গ, যা পড়ে নিতে হয় — ইবাদতে ভারবোধ প্রশ্ন তোলে হৃদয় নিয়ে, ইবাদত নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Makes It Light",
          "bn": "যা একে হালকা করে"
        },
        "p": [
          {
            "en": "The next verse, 2:46, defines the khashi'in: those who think that they will meet their Lord and that to Him they will return. The verb is yazunnuna, ordinarily to suppose — but the commentators, at-Tabari among them, are explicit that zann here means certainty, yaqin, as it does in several places in the Quran. What lightens prayer is not technique but conviction: the settled knowledge that the meeting will happen and that every road ends at Him.",
            "bn": "পরের আয়াত, 2:46, খাশিঈনদের সংজ্ঞা দেয়: যারা মনে করে যে তারা তাদের রবের সঙ্গে সাক্ষাৎ করবে এবং তাঁরই দিকে ফিরে যাবে। ক্রিয়াপদটি 'ইয়াযুন্নূনা' — সাধারণ অর্থে ধারণা করা; কিন্তু মুফাসসিরগণ — তাঁদের মধ্যে আত-তাবারীও — স্পষ্ট বলেছেন, এখানে 'যন' মানে নিশ্চিত বিশ্বাস, ইয়াকীন — কুরআনের আরও কয়েক জায়গায় যেমন। নামাযকে যা হালকা করে তা কোনো কৌশল নয়, প্রত্যয়: এই স্থির জ্ঞান যে সাক্ষাৎটি ঘটবেই, আর প্রতিটি পথ তাঁর কাছেই গিয়ে শেষ হয়।"
          },
          {
            "en": "The logic is simple once stated. A person stands willingly, even eagerly, before someone he is certain he will answer to and hope in. If the meeting feels theoretical, the standing feels pointless, and pointless acts are always heavy. So the verse quietly diagnoses every season of heavy worship: the weight is proportional to the distance the return has drifted from the center of one's attention.",
            "bn": "যুক্তিটি একবার বললেই সরল। মানুষ স্বেচ্ছায়, এমনকি আগ্রহ নিয়েই, তার সামনে দাঁড়ায় — যার কাছে সে নিশ্চিত জবাব দিতে হবে এবং যার কাছে তার আশা। সাক্ষাৎটি যদি কেবল তত্ত্ব মনে হয়, দাঁড়ানোটাও অর্থহীন মনে হয় — আর অর্থহীন কাজ সবসময়ই ভারী। তাই আয়াতটি নীরবে ভারী ইবাদতের প্রতিটি মৌসুমের রোগনির্ণয় করে দেয়: প্রত্যাবর্তনের কথাটি মনোযোগের কেন্দ্র থেকে যতটা দূরে সরে গেছে, ভারও ঠিক ততটা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prophet's Own Refuge",
          "bn": "নবীজির নিজের আশ্রয়"
        },
        "p": [
          {
            "en": "The Prophet ﷺ lived this verse before teaching it. It is reported in the collection of Abu Dawud that when a matter distressed him, he would turn to prayer. He also said to Bilal (RA), in words preserved in the same collection: give us rest by it, O Bilal — the call to prayer announcing not another duty on a hard day, but the hard day's relief. Prayer in his practice was where pressure was taken, not where pressure accumulated.",
            "bn": "নবী ﷺ এই আয়াত শেখানোর আগে নিজে তা যাপন করেছেন। আবু দাউদের সংকলনে বর্ণিত আছে, কোনো বিষয় তাঁকে পীড়িত করলে তিনি নামাযে ফিরতেন। একই সংকলনে সংরক্ষিত কথায় তিনি বিলাল (রাঃ)-কে বলেছেন: হে বিলাল, এর দ্বারা আমাদের প্রশান্তি দাও — আযান তখন কঠিন দিনে আরেকটি দায়িত্বের ঘোষণা নয়, বরং কঠিন দিনটিরই স্বস্তি। তাঁর অনুশীলনে নামায ছিল সেই জায়গা যেখানে চাপ নামিয়ে রাখা হয়, চাপ জমা করা নয়।"
          },
          {
            "en": "That ordering is the verse's practical teaching: prayer as first response, not last resort. The common pattern is reversed — we exhaust the phone calls, the worrying and the planning, and pray when nothing is left. The verse and the Prophet's ﷺ example put the prayer at the front of the emergency, where the help is actually sought from the One who can give it, as 29:45 adds that prayer itself restrains and that the remembrance of Allah is greatest.",
            "bn": "এই ক্রমটিই আয়াতের ব্যবহারিক শিক্ষা: নামায প্রথম প্রতিক্রিয়া, শেষ উপায় নয়। প্রচলিত ধরনটা উল্টো — আমরা ফোন, দুশ্চিন্তা আর পরিকল্পনা নিঃশেষ করি, আর কিছু বাকি না থাকলে দোয়ায় বসি। আয়াতটি এবং নবী ﷺ-এর দৃষ্টান্ত নামাযকে বসায় বিপদের সামনের সারিতে — যেখানে সাহায্য সত্যিই তাঁর কাছে চাওয়া হয়, যিনি তা দিতে পারেন; যেমন 29:45 যোগ করে যে নামায নিজেই মন্দ থেকে বিরত রাখে, আর আল্লাহর স্মরণই সর্বশ্রেষ্ঠ।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience and Prayer, Woven",
          "bn": "সবর ও সালাত, একসূত্রে"
        },
        "p": [
          {
            "en": "The two instruments reinforce each other. Patience keeps a person praying when answers are slow; prayer replenishes the patience that daily life spends. One works horizontally, absorbing what people and circumstances inflict; the other works vertically, drawing from what does not run out. The believer under pressure alternates between them the way a climber moves between two handholds — never releasing both at once.",
            "bn": "উপকরণ দুটি পরস্পরকে শক্তি জোগায়। জবাব আসতে দেরি হলে সবর মানুষকে নামাযে টিকিয়ে রাখে; আর দৈনন্দিন জীবন যে সবর খরচ করে ফেলে, নামায তা আবার ভরে দেয়। একটি কাজ করে আনুভূমিকভাবে — মানুষ ও পরিস্থিতি যা চাপায় তা শুষে নিয়ে; অন্যটি উল্লম্বভাবে — যা ফুরায় না তা থেকে টেনে এনে। চাপে থাকা মুমিন এ দুয়ের মধ্যে পালা করে চলে — যেমন পর্বতারোহী দুটি অবলম্বনের মধ্যে চলে, কখনোই দুটো একসঙ্গে ছাড়ে না।"
          },
          {
            "en": "Living the verse can begin the same week it is read. When the next difficulty announces itself, pray two rak'ahs before opening the laptop or making the calls, and name the difficulty to Allah inside them. Then practice one deliberate act of sabr in the same matter — a complaint withheld, a decision delayed until calm. Small as they are, these are the verse's own two handholds, offered to the khashi'in and to everyone still becoming one of them.",
            "bn": "আয়াতটি যাপন শুরু হতে পারে পড়ার সপ্তাহেই। পরের কষ্টটি যখন জানান দেবে, ল্যাপটপ খোলা বা ফোন করার আগে দুই রাকাত পড়ুন, আর তার ভেতরেই কষ্টটির নাম ধরে আল্লাহকে বলুন। তারপর একই বিষয়ে একটি সচেতন সবরের কাজ করুন — একটি অভিযোগ চেপে রাখা, শান্ত না হওয়া পর্যন্ত একটি সিদ্ধান্ত মুলতবি রাখা। ছোট হলেও, এগুলোই আয়াতের নিজের দুটি অবলম্বন — খাশিঈনদের জন্য, আর তাদের একজন হয়ে ওঠার পথে থাকা প্রত্যেকের জন্য।"
          }
        ]
      }
    ]
  },
  "2:49-50": {
    "sections": [
      {
        "h": {
          "en": "Two Memories Before Two Commands",
          "bn": "দুই হুকুমের আগে দুই স্মৃতি"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and from 2:40 it turns to the Children of Israel, the community in Madinah that already held a scripture. The address opens with remember My favour and closes, many verses later, with the same call in 2:122. Between the two frames runs a long recital of what Allah did for them and what they did in return. 2:49 and 2:50 are the first two scenes of that recital. Before them, 2:47 has repeated the summons to remember, and 2:48 has warned of a Day when no soul can stand in for another. After them, 2:51 moves straight to the calf.",
            "bn": "সূরা বাকারা মাদানী সূরা। ২:৪০ থেকে এর কথা ঘুরে যায় বনী ইসরাঈলের দিকে, মদীনার সেই সম্প্রদায়ের দিকে যাদের হাতে আগে থেকেই কিতাব ছিল। সম্বোধন শুরু হয় 'আমার নিয়ামত স্মরণ কর' দিয়ে, আর বহু আয়াত পরে ২:১২২ আয়াতে সেই একই ডাক দিয়ে শেষ হয়। মাঝখানে লম্বা এক হিসাব: আল্লাহ তাদের জন্য কী করেছেন, আর বদলে তারা কী করেছে। ২:৪৯ ও ২:৫০ সেই হিসাবের প্রথম দুই দৃশ্য। ঠিক আগে ২:৪৭ আবার স্মরণের ডাক দিয়েছে, ২:৪৮ সাবধান করেছে এমন এক দিনের কথা বলে যেদিন কেউ কারো বদলে দাঁড়াতে পারবে না। ঠিক পরে ২:৫১ সোজা চলে যায় বাছুরের ঘটনায়।"
          },
          {
            "en": "The placement matters. The reader is asked to remember before being asked to believe, and to face a Day of no substitutes before hearing the story of a rescue. That order keeps the memory honest: the favour is real, but it does not buy anyone a place on the Day. What the sequence is doing across 2:40 to 2:123 is laying favour, ingratitude and renewed mercy in layer after layer, so that by the end nobody can mistake the pattern. These two verses lay the first layer, and they lay it with the gentlest of the favours, a rescue.",
            "bn": "এই বিন্যাসের মানে আছে। ঈমান আনতে বলার আগে মনে করতে বলা হচ্ছে, আর উদ্ধারের গল্প শোনানোর আগে দেখানো হচ্ছে সেই দিন, যেদিন কেউ কারো বদলি হবে না। এতে স্মৃতিটা খাঁটি থাকে: নিয়ামত সত্যি, কিন্তু সেই নিয়ামত দিয়ে কেয়ামতের দিনে জায়গা কেনা যায় না। ২:৪০ থেকে ২:১২৩ পর্যন্ত পুরো অংশটা যা করছে তা হল, নিয়ামত, অকৃতজ্ঞতা আর নতুন করে রহমত, এই তিনটিকে স্তরে স্তরে সাজানো, যাতে শেষে গিয়ে ধরনটা কারো চোখ এড়াতে না পারে। এই দুই আয়াত প্রথম স্তরটা বসায়, আর বসায় সবচেয়ে কোমল নিয়ামত দিয়ে: উদ্ধার।"
          }
        ]
      },
      {
        "h": {
          "en": "Rescued, Driven, Tried",
          "bn": "উদ্ধার, পীড়ন, পরীক্ষা"
        },
        "p": [
          {
            "en": "Three words carry the first verse. Najjaynakum, We saved you, is from the root n-j-w, to escape or be brought to safety; 2:49 uses the intensive form najjayna, while 2:50, 7:141 and 14:6 tell the same deliverance with anja, a lighter form of the same root. Yasumunakum, they were afflicting you, is from s-w-m, to impose a thing on someone and keep driving him under it; Abu Ubaydah glossed it as humiliation, and the imperfect tense pictures the torment as continuous rather than a single blow. The sons slaughtered and the women left alive then spell out what that torment was.",
            "bn": "প্রথম আয়াত দাঁড়িয়ে আছে তিনটি শব্দের উপর। 'নাজ্জাইনাকুম', আমি তোমাদের উদ্ধার করেছিলাম, এর মূল ন-জ-ও, বিপদ থেকে বেরিয়ে নিরাপদে পৌঁছানো। ২:৪৯ আয়াতে এসেছে জোরালো রূপ 'নাজ্জাইনা', আর ২:৫০, ৭:১৪১ ও ১৪:৬ আয়াতে একই উদ্ধারের কথা বলা হয়েছে একই মূলের হালকা রূপ 'আনজা' দিয়ে। 'ইয়াসুমুনাকুম', তারা তোমাদের যাতনা দিত, এর মূল স-ও-ম, কারো উপর কিছু চাপিয়ে তাকে তার নিচে ঠেলে রাখা। আবু উবাইদা এর অর্থ করেছেন লাঞ্ছনা। ক্রিয়ার চলমান রূপ বোঝায়, যাতনা এক ঘায়ের ব্যাপার ছিল না, ছিল বছরের পর বছর। ছেলেদের জবাই আর মেয়েদের বাঁচিয়ে রাখা, এই দুটো তখন খুলে বলে যাতনাটা আসলে কী ছিল।"
          },
          {
            "en": "The third word is bala'. From b-l-w, to test, it names a trial that reveals what a thing is made of, and the Quran uses it for hardship and for ease alike, as 21:35 says openly. Here the sentence is deliberately open: and in that was a great trial from your Lord. In what? The slaughter, or the saving? The grammar leaves room for both, and the commentators, as the next section shows, took it both ways. The reader is being told that suffering and deliverance are both examinations, and that the second is not easier to pass.",
            "bn": "তৃতীয় শব্দ 'বালা'। মূল ব-ল-ও, পরীক্ষা করা, যে পরীক্ষায় ধরা পড়ে জিনিসটা আসলে কী দিয়ে তৈরি। কুরআন শব্দটি কষ্টের জন্যও ব্যবহার করে, স্বাচ্ছন্দ্যের জন্যও, ২১:৩৫ আয়াতে খোলাখুলি সেটাই বলা আছে। এখানে বাক্যটি ইচ্ছে করেই খোলা রাখা: 'আর এতে ছিল তোমাদের রবের পক্ষ থেকে মহাপরীক্ষা।' কীসে? জবাইয়ে, না উদ্ধারে? ব্যাকরণ দুটোরই জায়গা রাখে, আর মুফাসসিররা দুভাবেই নিয়েছেন, পরের অংশে তা দেখা যাবে। পাঠককে বলা হচ্ছে, কষ্টও পরীক্ষা, মুক্তিও পরীক্ষা, আর দ্বিতীয়টায় পাশ করা সহজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Parted With You In It",
          "bn": "তোমাদের নিয়েই সাগর চিরে"
        },
        "p": [
          {
            "en": "2:50 says faraqna bikum al-bahr, We parted the sea by you, with the preposition bi attached to the people rather than to the sea. Al-Qurtubi and others read it as the sea being split on their account and, on one reading, as they entered it, so that the parting happened with them inside it, not before they arrived. Then two verbs in quick succession: We saved you, We drowned. The same water, the same hour, two opposite outcomes, and the difference between them was nothing the people had done that morning. That is what a favour looks like when it is stated without decoration.",
            "bn": "২:৫০ বলছে 'ফারাকনা বিকুমুল বাহর', আমি তোমাদের দিয়ে সাগর বিভক্ত করেছিলাম। 'বি' অব্যয়টি লেগে আছে মানুষের সাথে, সাগরের সাথে নয়। কুরতুবী ও অন্যরা এর অর্থ নিয়েছেন: সাগর চিরেছিল তাদেরই কারণে, আর এক পাঠে, তারা যখন ঢুকছিল তখন, অর্থাৎ তারা পৌঁছানোর আগে নয়, তাদের ভেতরে রেখেই। তারপর পরপর দুটো ক্রিয়া: তোমাদের বাঁচালাম, ওদের ডোবালাম। একই পানি, একই ঘণ্টা, দুই উল্টো পরিণতি। আর সেই সকালে এই ফারাক তারা নিজেদের কোনো কাজে অর্জন করেনি। সাজসজ্জা ছাড়া নিয়ামতকে বললে এমনই দেখায়।"
          },
          {
            "en": "The verse ends with wa antum tanzurun, while you were looking on. It is a small clause with a large purpose. The people addressed in Madinah had seen none of it; their ancestors had. Yet the Quran says you throughout, treating the nation as one body across the centuries, the way a family speaks of what happened to us. The watching is also part of the gift. As-Sa'di notes that they were made to see their enemy's end with their own eyes so that their hearts could be settled.",
            "bn": "আয়াত শেষ হয় 'ওয়া আনতুম তানযুরুন' দিয়ে, আর তোমরা দেখছিলে। ছোট কথা, বড় উদ্দেশ্য। মদীনায় যাদের ডাকা হচ্ছে তারা এর কিছুই দেখেনি, দেখেছিল তাদের পূর্বপুরুষ। তবু কুরআন পুরোটা জুড়ে বলছে 'তোমরা', জাতিকে শতাব্দী পেরিয়ে এক দেহ ধরে, যেভাবে পরিবারের লোক বলে 'আমাদের সাথে যা হয়েছিল'। দেখাটাও নিয়ামতের অংশ। সা'দী লিখেছেন, শত্রুর শেষ পরিণতি তাদের নিজের চোখে দেখানো হয়েছিল যাতে মন ঠান্ডা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Read",
          "bn": "মুফাসসিররা যা পড়েছেন"
        },
        "p": [
          {
            "en": "At-Tabari takes the trial at the end of 2:49 as the rescue itself: the saving of your fathers from Pharaoh's torment was a great blessing from your Lord, since bala' in Arabic can mean a gift by which a person is tested. Ar-Razi lays both senses side by side and lets them stand: bala' is used for hardship, mihnah, and for favour, ni'mah, and here the slaughter was the first and the saving was the second. On this reading the verse describes not one trial but two, and the second is the one the audience is still living inside.",
            "bn": "তাবারী ২:৪৯ এর শেষের 'পরীক্ষা'কে ধরেছেন উদ্ধারটাই: ফেরাউনের যাতনা থেকে তোমাদের বাপদাদাকে বাঁচানো ছিল তোমাদের রবের পক্ষ থেকে বিরাট নিয়ামত, কারণ আরবিতে 'বালা' এমন দানকেও বলে যা দিয়ে মানুষকে যাচাই করা হয়। রাযী দুটো অর্থ পাশাপাশি রেখে দুটোকেই দাঁড় করান: 'বালা' কষ্টের জন্যও আসে, মিহনা, নিয়ামতের জন্যও আসে। এখানে জবাই ছিল প্রথমটা, উদ্ধার দ্বিতীয়টা। এই পাঠে আয়াত এক পরীক্ষার কথা বলছে না, দুই পরীক্ষার, আর দ্বিতীয়টার ভেতরেই শ্রোতারা এখনো বাস করছে।"
          },
          {
            "en": "Ibn Kathir follows at-Tabari on the blessing but adds, citing 21:35 and 7:168, that within every blessing there is a test, exactly as within every hardship. He also notes that the killing of sons is the explanation of the worst torment, not an item added to it. Al-Qurtubi, on yasumunakum, prefers the sense of an excess in tormenting, going beyond what any ruler needs to keep a people down. As-Sa'di draws the practical line: a favour done to the fathers is a favour to the sons, which is why the descendants are addressed as if they had stood on the shore.",
            "bn": "ইবনে কাসীর নিয়ামতের ব্যাপারে তাবারীর সাথে যান, তবে ২১:৩৫ ও ৭:১৬৮ টেনে যোগ করেন: প্রতিটি নিয়ামতের ভেতরে পরীক্ষা আছে, ঠিক যেমন প্রতিটি কষ্টের ভেতরে। তিনি এটাও ধরিয়ে দেন, ছেলেদের হত্যা 'নিকৃষ্টতম যাতনা'র ব্যাখ্যা, তার সাথে জোড়া বাড়তি কিছু নয়। কুরতুবী 'ইয়াসুমুনাকুম' শব্দে পছন্দ করেন বাড়াবাড়ির অর্থ: একটা জাতিকে দাবিয়ে রাখতে যতটা লাগে তার চেয়ে অনেক বেশি যাতনা। সা'দী টানেন কাজের লাইনটা: বাপদাদার উপর নিয়ামত মানে সন্তানের উপরও নিয়ামত, তাই বংশধরদের এমনভাবে ডাকা হচ্ছে যেন তারাই তীরে দাঁড়িয়ে ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day of Ashura",
          "bn": "আশুরার দিন"
        },
        "p": [
          {
            "en": "The one sound hadith the classical commentators attach to this rescue is about a fast. Sahih al-Bukhari 2004 records from Ibn Abbas (RA): the Prophet ﷺ came to Madinah and found the Jews fasting the day of Ashura. He asked, 'What is this?' They said, 'This is a good day; this is the day on which Allah saved the Children of Israel from their enemy, so Musa fasted it.' He said, 'I have more right to Musa than you,' and he fasted it and commanded that it be fasted.",
            "bn": "এই উদ্ধারের সাথে ক্লাসিক মুফাসসিররা যে একটি সহীহ হাদীস জুড়ে দেন, সেটি রোজার। সহীহ বুখারী ২০০৪, ইবনে আব্বাস (রাঃ) থেকে: নবী ﷺ মদীনায় এসে দেখলেন ইহুদীরা আশুরার দিন রোজা রাখছে। জিজ্ঞেস করলেন, 'এটা কী?' তারা বলল, 'এ এক ভালো দিন। এই দিনে আল্লাহ বনী ইসরাঈলকে তাদের শত্রুর হাত থেকে বাঁচিয়েছিলেন, তাই মূসা এই দিনে রোজা রেখেছিলেন।' তিনি বললেন, 'মূসার উপর তোমাদের চেয়ে আমার হক বেশি।' তারপর তিনি নিজে সেই রোজা রাখলেন এবং রাখতে হুকুম দিলেন।"
          },
          {
            "en": "Notice what the hadith does with the verse. It takes a favour done to another community and makes it a reason for this community to worship. The Prophet ﷺ did not say that the Exodus was their story and not his; he claimed Musa (AS), and with him the memory, for every believer. Ibn Kathir places the report exactly here, under 2:50, so that the reader who has just been told to remember has a way to do it with his body once a year. Gratitude in the Sunnah is rarely left as a feeling; it is given a day and a fast.",
            "bn": "হাদীসটি আয়াতকে নিয়ে কী করছে, খেয়াল করুন। অন্য এক সম্প্রদায়ের উপর করা নিয়ামতকে সে এই উম্মতের ইবাদতের কারণ বানিয়ে দেয়। নবী ﷺ বলেননি, ওটা ওদের গল্প, আমার নয়। তিনি মূসা (আঃ)-কে দাবি করলেন, আর তাঁর সাথে স্মৃতিটাকেও, প্রত্যেক মুমিনের জন্য। ইবনে কাসীর রেওয়ায়েতটি রাখেন ঠিক এখানে, ২:৫০ আয়াতের নিচে, যাতে যে পাঠককে এইমাত্র মনে করতে বলা হল, সে বছরে একদিন শরীর দিয়ে মনে করার উপায় পায়। সুন্নাহতে কৃতজ্ঞতা কমই শুধু অনুভূতি হয়ে থাকে, তাকে দেওয়া হয় একটা দিন আর একটা রোজা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Deliverance Elsewhere",
          "bn": "একই উদ্ধার অন্য সূরায়"
        },
        "p": [
          {
            "en": "The Exodus is retold across the Quran, and each telling adds a stroke. 14:6 has Musa (AS) himself reminding his people of this exact favour, in almost the same words, which shows that the call to remember began with the rescuer's own prophet, not with a later rebuke. 28:4 gives Pharaoh's method: he split the population into factions and crushed one of them, so that the slaughter of sons was policy, not madness. 26:63 supplies the moment 2:50 compresses into one verb, the staff striking the water and each half standing like a great mountain.",
            "bn": "এই উদ্ধারের কথা কুরআন বারবার বলেছে, আর প্রতিবার নতুন একটা রেখা যোগ হয়। ১৪:৬ আয়াতে মূসা (আঃ) নিজেই তাঁর কওমকে প্রায় একই শব্দে এই নিয়ামত মনে করিয়ে দিচ্ছেন। মনে রাখার এই ডাক তাহলে পরের কোনো ভর্ৎসনা থেকে শুরু হয়নি, শুরু হয়েছিল উদ্ধারের নবীর মুখেই। ২৮:৪ ফেরাউনের কায়দা দেখায়: সে জনগণকে দলে দলে ভাগ করে একটা দলকে পিষে রেখেছিল, তাই ছেলেদের জবাই ছিল রাষ্ট্রের নীতি, কারো পাগলামি নয়। ২৬:৬৩ দেয় সেই মুহূর্তটা, যাকে ২:৫০ একটি ক্রিয়ায় চেপে রেখেছে: লাঠির আঘাত পানিতে, আর দুই ভাগ দাঁড়িয়ে গেল বিশাল পাহাড়ের মতো।"
          },
          {
            "en": "10:92 finishes the drowning with a sentence 2:50 does not need but the reader does: Pharaoh's body would be preserved as a sign for those after him, and many people pass Allah's signs heedlessly. Finally 21:35 states the rule that makes bala' intelligible, that Allah tests with evil and with good alike. Read together, these verses turn 2:49-50 from an isolated reminder into a keyhole through which the whole story can be seen: the oppression, the method, the sea, the sign left behind, and the test that ease itself becomes.",
            "bn": "১০:৯২ ডুবে যাওয়ার ঘটনাটা শেষ করে এমন এক বাক্যে যা ২:৫০ আয়াতের দরকার নেই, কিন্তু পাঠকের দরকার আছে: ফেরাউনের দেহ রক্ষা করা হবে পরবর্তীদের জন্য নিদর্শন হিসেবে, অথচ অনেক মানুষ আল্লাহর নিদর্শন থেকে বেখেয়াল। শেষে ২১:৩৫ সেই নিয়মটা বলে দেয় যা 'বালা' শব্দকে বোধগম্য করে: আল্লাহ মন্দ দিয়েও পরীক্ষা করেন, ভালো দিয়েও। সবগুলো একসাথে পড়লে ২:৪৯-৫০ আর বিচ্ছিন্ন স্মৃতি থাকে না, হয়ে যায় চাবির ফুটো, যার ভেতর দিয়ে পুরো গল্পটা দেখা যায়: জুলুম, তার কায়দা, সাগর, পেছনে রেখে যাওয়া নিদর্শন, আর স্বাচ্ছন্দ্য নিজেই যে পরীক্ষা হয়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Rescue You Did Not Witness",
          "bn": "যে উদ্ধার আপনি দেখেননি"
        },
        "p": [
          {
            "en": "The verse addresses people who inherited a rescue, and that is most of us. Somebody's illness that did not take them, a family that survived a war or a famine, a parent who was brought out of poverty or out of misguidance: the reader stands on the far shore of deliverances he was not old enough, or not yet born, to watch. The first practice is simply to name them. Once a week, perhaps on Friday, a believer can list three things he was saved from without lifting a hand, and say alhamdulillah for each by name rather than in general.",
            "bn": "আয়াতের শ্রোতারা উদ্ধার পেয়েছিল উত্তরাধিকারে, আর আমাদের অধিকাংশেরই অবস্থা তাই। কারো অসুখ যা তাকে নিয়ে যায়নি, একটা পরিবার যা যুদ্ধ বা দুর্ভিক্ষ পার হয়ে এসেছে, বাবা বা মা যাকে দারিদ্র্য থেকে কিংবা গোমরাহি থেকে বের করে আনা হয়েছিল। পাঠক দাঁড়িয়ে আছেন এমন সব উদ্ধারের ওপারের তীরে, যা দেখার বয়স তাঁর হয়নি, বা তখনো জন্মই হয়নি। প্রথম আমল স্রেফ নাম ধরে ডাকা। সপ্তাহে একদিন, হয়তো জুমার দিনে, তিনটি জিনিসের তালিকা করুন যা থেকে হাত না তুলেই আপনাকে বাঁচানো হয়েছে, আর প্রতিটির জন্য আলাদা করে আলহামদুলিল্লাহ বলুন, মোটের উপর নয়।"
          },
          {
            "en": "The second practice is harder. The verse calls the rescue a trial, so the believer should ask what his ease is currently testing. A comfortable season tempts a person to think the sea parted because of him. The corrective is to spend a portion of what the rescue gave: time, if health was returned; money, if income was; teaching, if guidance was. And on Ashura, the fast the Prophet ﷺ claimed from Musa (AS) is the ready-made act: a day when the body remembers a favour the mind has stopped noticing.",
            "bn": "দ্বিতীয় আমলটা কঠিন। আয়াত উদ্ধারকে বলছে পরীক্ষা, তাই মুমিনের জিজ্ঞেস করা উচিত, আমার স্বাচ্ছন্দ্য এখন কীসের পরীক্ষা নিচ্ছে। আরামের মৌসুমে মনে হতে থাকে, সাগর তো আমার জন্যই চিরেছিল। এর ওষুধ হল উদ্ধার যা দিয়েছে তার একটা অংশ খরচ করা: স্বাস্থ্য ফিরে এলে সময়, রোজগার ফিরে এলে টাকা, হেদায়েত পেলে শেখানো। আর আশুরার দিনে সেই রোজা, যা নবী ﷺ মূসা (আঃ) থেকে নিজের বলে দাবি করেছিলেন, তৈরি আমল হয়ে হাতের কাছেই আছে। একটা দিন, যেদিন মন যে নিয়ামত খেয়াল করা ছেড়ে দিয়েছে, শরীর সেটা মনে করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a From the Shore",
          "bn": "তীর থেকে এক দোয়া"
        },
        "p": [
          {
            "en": "The verse is not itself a supplication, and no specific Sunnah du'a is attached to it beyond the fast already mentioned. A short du'a in its own vocabulary, offered here as a composed prayer and not as a transmitted text, might run: O Allah, You saved the people of Musa from the worst of torments and parted the sea while they watched. Save us from every Pharaoh outside us and every Pharaoh within us, and when You save us, make the saving a trial that we pass.",
            "bn": "আয়াতটি নিজে দোয়া নয়, আর উপরে বলা রোজা ছাড়া এর সাথে নির্দিষ্ট কোনো সুন্নাহ দোয়াও জোড়া নেই। আয়াতের নিজের শব্দে ছোট একটা দোয়া, যা এখানে দেওয়া হচ্ছে রচিত দোয়া হিসেবে, বর্ণিত হাদীস হিসেবে নয়: হে আল্লাহ, আপনি মূসার কওমকে নিকৃষ্টতম যাতনা থেকে বাঁচিয়েছেন, তাদের চোখের সামনে সাগর চিরে দিয়েছেন। আমাদেরও বাঁচান বাইরের প্রতিটি ফেরাউন থেকে আর ভেতরের প্রতিটি ফেরাউন থেকে। আর যখন বাঁচাবেন, সেই বাঁচানোকে এমন পরীক্ষা বানান যাতে আমরা পাশ করি।"
          },
          {
            "en": "The reader can say it in any language and in his own words; the point is the vocabulary, najjaytana, You saved us, and bala', the trial, so that the du'a carries the verse's two halves and not only the first. It can be said after a hardship ends, which is exactly when most people stop making du'a. The believer who asks to be made grateful at the moment of relief is doing what the verse was revealed to produce: turning a rescue into remembrance before it can turn into entitlement.",
            "bn": "পাঠক নিজের ভাষায় নিজের কথায় বলতে পারেন। আসল কথা শব্দ দুটো: 'নাজ্জাইতানা', আপনি আমাদের বাঁচিয়েছেন, আর 'বালা', পরীক্ষা, যাতে দোয়ায় আয়াতের দুই অংশই থাকে, শুধু প্রথমটা নয়। কষ্ট কেটে যাওয়ার পর এই দোয়া বলা যায়, আর ঠিক তখনই বেশিরভাগ মানুষ দোয়া করা থামিয়ে দেয়। যে মুমিন মুক্তির মুহূর্তে কৃতজ্ঞ হওয়ার তৌফিক চান, তিনি ঠিক সেটাই করছেন যার জন্য আয়াত নাজিল হয়েছিল: উদ্ধারকে স্মরণে বদলে দেওয়া, তা প্রাপ্য মনে করার আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Which deliverances in my own life did I merely inherit, and when did I last thank Allah for them by name? When a hardship of mine ended, did I remember the ending as a favour from my Lord, or file it away as luck and move on? The people watched their enemy drown: what did I feel, honestly, the last time someone who had wronged me fell, and did I remember Who had done the saving?",
            "bn": "আমার নিজের জীবনে কোন উদ্ধারগুলো আমি স্রেফ উত্তরাধিকারে পেয়েছি, আর সেগুলোর জন্য নাম ধরে আল্লাহর শুকরিয়া শেষ কবে করেছি? আমার কোনো কষ্ট যখন কেটে গেল, সেই কেটে যাওয়াকে কি আমার রবের নিয়ামত বলে মনে রেখেছি, নাকি 'কপাল ভালো' বলে তুলে রেখে এগিয়ে গেছি? তারা শত্রুকে ডুবতে দেখেছিল। যে আমার উপর জুলুম করেছিল, সে শেষবার যখন পড়ে গেল, সত্যি করে বলুন, আমি কী অনুভব করেছি, আর বাঁচানোটা কে করলেন সেটা কি মনে ছিল?"
          },
          {
            "en": "If ease is a trial as much as hardship, what is my present ease examining in me, and how would I know whether I am passing? The Prophet ﷺ gave gratitude a day and a fast: what one act, on a date I can name, will carry my remembrance of the favours this verse describes, so that the memory lives in my calendar and not only in my mood?",
            "bn": "স্বাচ্ছন্দ্য যদি কষ্টের মতোই পরীক্ষা হয়, তবে আমার এখনকার আরাম আমার ভেতরের কী যাচাই করছে, আর পাশ করছি কি না তা বুঝব কীভাবে? নবী ﷺ শুকরিয়াকে একটা দিন আর একটা রোজা দিয়েছেন। এই আয়াত যে নিয়ামতগুলোর কথা বলে, তার স্মরণ বহন করবে এমন একটা কাজ, এমন একটা তারিখ, যার নাম আমি বলতে পারি, সেটা কী? যাতে স্মৃতিটা শুধু মেজাজে নয়, আমার ক্যালেন্ডারেও থাকে।"
          }
        ]
      }
    ]
  },
  "2:58-59": {
    "sections": [
      {
        "h": {
          "en": "After the Manna, a Door",
          "bn": "মান্নার পরে এক দরজা"
        },
        "p": [
          {
            "en": "The verse stands in the middle of the recital that began at 2:40, in which Allah reminds the Children of Israel of favour after favour and of what met each one. 2:57 has just described the cloud, the manna and the quails, and closed with the line that they wronged not Us but themselves. 2:58 opens with the same wa idh, and when, that has introduced most of the scenes since 2:49: and when We said, enter this town. 2:59 records what some of them did with the instruction, and 2:60 moves on to the water struck from the rock.",
            "bn": "আয়াতটি বসে আছে সেই হিসাবের মাঝখানে যা শুরু হয়েছিল ২:৪০ আয়াতে, যেখানে আল্লাহ বনী ইসরাঈলকে একের পর এক নিয়ামত মনে করিয়ে দেন, আর প্রতিটির জবাবে কী ঘটেছিল তাও। ঠিক আগে ২:৫৭ বলেছে মেঘের ছায়া, মান্না আর সালওয়ার কথা, আর শেষ করেছে এই কথায় যে তারা আমার উপর জুলুম করেনি, করেছে নিজেদের উপর। ২:৫৮ শুরু হয় সেই একই 'ওয়া ইয' দিয়ে, 'আর যখন', যা ২:৪৯ থেকে বেশিরভাগ দৃশ্যের মুখবন্ধ: আর যখন আমি বললাম, এই জনপদে ঢোকো। ২:৫৯ লেখে সেই নির্দেশ নিয়ে তাদের কেউ কেউ কী করল, আর ২:৬০ এগিয়ে যায় পাথর থেকে বের হওয়া পানির দিকে।"
          },
          {
            "en": "The commentators place the scene after the wandering. Ibn Kathir explains that when the people refused to enter the holy land, in the episode told at 5:21-26, they were left to wander, and that this command to enter came when the wandering was over. Which town is meant is a real difference among them, as a later section shows. What matters for placement is the pattern: a provision, an instruction attached to it, a response, and a consequence. The verse is the recital's clearest case of a mercy that arrived with its own small conditions and was met with a change of words.",
            "bn": "মুফাসসিররা দৃশ্যটিকে রাখেন মরুভূমিতে ঘোরার পরে। ইবনে কাসীর বুঝিয়েছেন, ৫:২১-২৬ আয়াতে বলা ঘটনায় লোকেরা যখন পবিত্র ভূমিতে ঢুকতে অস্বীকার করল, তখন তাদের ঘুরে বেড়াতে ছেড়ে দেওয়া হল, আর ঢোকার এই হুকুম এল সেই ঘোরা শেষ হলে। কোন জনপদ, এ নিয়ে তাঁদের মধ্যে সত্যিকারের মতভেদ আছে, পরের এক অংশে তা আসবে। অবস্থানের জন্য যা জরুরি তা হল ধরনটা: একটা রিজিক, তার সাথে জোড়া একটা নির্দেশ, একটা জবাব, একটা পরিণতি। পুরো হিসাবে এর চেয়ে পরিষ্কার উদাহরণ নেই, যেখানে রহমত এসেছিল নিজের ছোট শর্ত নিয়ে আর তার জবাব হল শব্দ বদলে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Plenty, Bowing, One Word",
          "bn": "প্রাচুর্য, নত মাথা, একটি শব্দ"
        },
        "p": [
          {
            "en": "Raghadan, in ease and abundance, is from r-gh-d, a life that is wide and untroubled; the Quran uses the same word for Adam (AS) and his wife in the garden at 2:35. Eat wherever you will, then, is not rationing but its opposite. Sujjadan is the plural of sajid, one who prostrates or bows, from s-j-d, the root of sujud in prayer. Placed beside a gate it cannot mean full prostration while walking, so the word is stretched to its wider sense: entering bent, lowered, humbled. The plenty and the bowing come in the same breath.",
            "bn": "'রাগাদান', স্বচ্ছন্দে ও প্রাচুর্যে, মূল র-গ-দ, এমন জীবন যা প্রশস্ত আর নিরুদ্বেগ। ২:৩৫ আয়াতে জান্নাতে আদম (আঃ) ও তাঁর স্ত্রীর জন্য কুরআন ঠিক এই শব্দই ব্যবহার করেছে। 'সেখান থেকে যেখানে খুশি খাও', তাহলে রেশন নয়, তার উল্টো। 'সুজ্জাদান' হল 'সাজিদ' এর বহুবচন, যে সিজদা করে বা নত হয়, মূল স-জ-দ, নামাজের সিজদার মূল। দরজার পাশে বসলে এর অর্থ হাঁটতে হাঁটতে পুরো সিজদা হতে পারে না, তাই শব্দটি প্রসারিত হয় তার বড় অর্থে: ঝুঁকে, নিচু হয়ে, বিনীত হয়ে ঢোকা। প্রাচুর্য আর নত হওয়া, দুটো এক নিঃশ্বাসে।"
          },
          {
            "en": "Hittah is the word the story turns on. From h-t-t, to put down or lift off a load, it means a putting-down: put our burdens down from us. Al-Qurtubi points out that it stands in the nominative, as if the people were to say our request is a hittah, a lifting of sins. The command is to say one word, and the reward follows without pause: We will forgive your sins for you. The verse then adds, and We will increase the doers of good, a promise beyond forgiveness for those who do more.",
            "bn": "'হিত্তাহ' সেই শব্দ, যার উপর গল্পটা ঘোরে। মূল হ-ত-ত, বোঝা নামানো বা তুলে নেওয়া, তাই অর্থ 'নামিয়ে দেওয়া': আমাদের বোঝা আমাদের থেকে নামিয়ে দিন। কুরতুবী ধরিয়ে দেন, শব্দটি এসেছে 'আমাদের আরজি হিত্তাহ' এই ধাঁচে, অর্থাৎ লোকেরা যেন বলছে, আমাদের চাওয়া গুনাহ তুলে নেওয়া। হুকুম একটি শব্দ বলার, আর পুরস্কার আসে বিরতি ছাড়াই: আমি তোমাদের গুনাহ মাফ করব। তারপর আয়াত যোগ করে, আর নেককারদের আমি বাড়িয়ে দেব। মাফের উপরে আরেক ওয়াদা, তাদের জন্য যারা ন্যূনতমের চেয়ে বেশি করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Changed Into Something Else",
          "bn": "বদলে দিল অন্য কথায়"
        },
        "p": [
          {
            "en": "2:59 uses baddala, from b-d-l, to exchange one thing for another; it is the same root as the verb in 2:61, where the people trade a better food for a lesser. What was exchanged here was a word: those who wronged changed it for a saying other than what had been said to them. The Quran does not report the substitute. The commentators fill the gap from a hadith, quoted below, but the verse itself keeps the focus on the act of changing, not on the joke. Whatever the replacement was, it was not what they were told to say.",
            "bn": "২:৫৯ ব্যবহার করেছে 'বাদ্দালা', মূল ব-দ-ল, এক জিনিসের বদলে আরেকটা নেওয়া। ২:৬১ আয়াতের ক্রিয়াটি একই মূল থেকে, যেখানে লোকেরা ভালো খাবারের বদলে নিকৃষ্টটা নেয়। এখানে যা বদল হল তা একটা শব্দ: যারা জুলুম করল তারা, যা তাদের বলা হয়েছিল তার বদলে অন্য কথা বলল। বদলে কী বলেছিল, কুরআন জানায় না। মুফাসসিররা ফাঁকটা ভরেন একটি হাদীস দিয়ে, নিচে তা আসছে, কিন্তু আয়াত নিজে নজর রাখে বদলানোর কাজটার উপর, ঠাট্টার উপর নয়। বদলি যা-ই হোক, যা বলতে বলা হয়েছিল তা সেটা ছিল না।"
          },
          {
            "en": "Notice the restriction repeated twice: those who wronged changed, and upon those who wronged We sent down. Not everyone changed the word, and the punishment fell only on those who did. The rijz that came from the sky is glossed by Ibn Abbas as punishment wherever the word appears in the Book, and many commentators, on the basis of the hadith about the plague below, take it here as an epidemic, which the English translation adds in brackets. The verse ends on bima kanu yafsuqun, because they were persistently rebelling, a verb of continuous action, so the plague answered a habit, not one lapse.",
            "bn": "একটা সীমাবদ্ধতা দুবার এসেছে, খেয়াল করুন: 'যারা জুলুম করল তারা বদলাল', আর 'যারা জুলুম করল তাদের উপর নামালাম'। সবাই শব্দ বদলায়নি, আর শাস্তি পড়েছিল কেবল যারা বদলেছিল তাদের উপর। আকাশ থেকে যে 'রিজয' এল, ইবনে আব্বাস বলেন, কিতাবে যেখানেই শব্দটি আছে অর্থ শাস্তি। অনেক মুফাসসির, নিচের মহামারীর হাদীসের ভিত্তিতে, এখানে একে ধরেন মহামারী; ইংরেজি অনুবাদে বন্ধনীতে মহামারী লেখা আছে। আয়াত শেষ হয় 'বিমা কানু ইয়াফসুকুন' দিয়ে, কারণ তারা লাগাতার নাফরমানি করত। চলমান ক্রিয়া, তাই মহামারী জবাব দিয়েছিল একটা অভ্যাসের, এক মুহূর্তের ভুলের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Town, the Gate, the Word",
          "bn": "জনপদ, দরজা, শব্দ"
        },
        "p": [
          {
            "en": "Which town? Ibn Kathir reports that as-Suddi, Qatadah and ar-Rabi ibn Anas held it to be Jerusalem, Bayt al-Maqdis, and that a report from Ibn Abbas and Abdur-Rahman ibn Zayd named Jericho; he prefers the first. On sujjadan, al-Hasan al-Basri took it as literal prostration on entering, while ar-Razi rejected that, and others read it as humility of body, since people walking through a gate cannot prostrate; Ibn Abbas said simply, bowing. The two readings share the point: the body was to say what the tongue was about to say.",
            "bn": "কোন জনপদ? ইবনে কাসীর জানান, সুদ্দী, কাতাদা ও রাবী ইবনে আনাস বলেছেন জেরুজালেম, বাইতুল মাকদিস, আর ইবনে আব্বাস ও আবদুর রহমান ইবনে যায়েদ থেকে এক বর্ণনায় এসেছে জেরিকো। তিনি নিজে প্রথমটাকে অগ্রাধিকার দেন। 'সুজ্জাদান' নিয়ে হাসান বসরী নিয়েছেন ঢোকার সময় আক্ষরিক সিজদা, রাযী তা নাকচ করেছেন, আর অন্যরা একে পড়েছেন দেহের বিনয় হিসেবে, কারণ দরজা দিয়ে হাঁটতে থাকা মানুষ সিজদা করতে পারে না। ইবনে আব্বাস সোজা বলেছেন, ঝুঁকে। দুই পাঠের কথা এক: জিহ্বা যা বলতে যাচ্ছে, শরীর আগে তা বলবে।"
          },
          {
            "en": "On hittah, Ibn Abbas glossed it as istighfar, seeking forgiveness, and al-Hasan and Qatadah as the plain request, take our errors down from us. The difference is small and both are true to the root. As-Sa'di reads We will increase the doers of good as increase in goodness and reward, while noting that the forgiveness was promised to everyone who did the two things asked. Ibn Kathir sums up the changed word in 2:59 as a change of both word and deed, the mocking phrase being the outward sign of an inward refusal.",
            "bn": "'হিত্তাহ' নিয়ে ইবনে আব্বাস অর্থ করেছেন ইস্তিগফার, মাফ চাওয়া। হাসান ও কাতাদা নিয়েছেন সরল আরজি: আমাদের ভুলগুলো আমাদের থেকে নামিয়ে দিন। ফারাক সামান্য, আর দুটোই মূলের অনুগত। সা'দী 'নেককারদের বাড়িয়ে দেব' পড়েছেন নেকি ও সওয়াবে বাড়তি হিসেবে। সাথে ধরিয়ে দেন, মাফের ওয়াদা ছিল প্রত্যেকের জন্য যে চাওয়া দুটো কাজ করেছে। ইবনে কাসীর ২:৫৯ আয়াতের বদলানো শব্দের সারকথা বলেন শব্দ ও কাজ দুটোরই বদল: ঠাট্টার বাক্যটা ছিল ভেতরের অস্বীকারের বাইরের চিহ্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Prophet ﷺ Said Happened",
          "bn": "নবী ﷺ যা বলেছেন"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari 4479 records from Abu Hurairah (RA) that the Prophet ﷺ said: 'It was said to the Children of Israel, enter the gate bowing and say hittah. But they entered crawling on their buttocks and changed it, and said, a grain in a hair.' The report supplies what the verse withheld: the bowing was mocked with a posture, and the word was mocked with a rhyme, habbah for hittah, a seed in place of a lifting of sins. The hadith is the reason every commentary tells the story the way it does.",
            "bn": "সহীহ বুখারী ৪৪৭৯, আবু হুরায়রা (রাঃ) থেকে, নবী ﷺ বলেছেন: 'বনী ইসরাঈলকে বলা হয়েছিল, দরজা দিয়ে নত হয়ে ঢোকো আর বলো হিত্তাহ। কিন্তু তারা নিতম্বে ভর দিয়ে হামাগুড়ি দিয়ে ঢুকল, আর কথাটা বদলে বলল, চুলের ভেতর একটা দানা।' আয়াত যা চেপে রেখেছিল, রেওয়ায়েতটি তা দিয়ে দেয়: নত হওয়াকে ঠাট্টা করা হল এক ভঙ্গি দিয়ে, আর শব্দটাকে ঠাট্টা করা হল মিল দিয়ে, হিত্তাহর জায়গায় হাব্বাহ, গুনাহ তুলে নেওয়ার জায়গায় এক দানা। প্রতিটি তাফসীর গল্পটা যেভাবে বলে, তার কারণ এই হাদীস।"
          },
          {
            "en": "A second report explains the punishment. Sahih al-Bukhari 3473 records from Usamah ibn Zayd (RA) that the Prophet ﷺ said: 'The plague is an affliction that was sent upon a group of the Children of Israel, or upon those before you. So when you hear of it in a land, do not go to it, and when it breaks out in a land where you are, do not leave in flight from it.' The classical commentators connect this to the rijz from the sky, and it turns the verse into a living instruction: a believer's conduct in an epidemic descends, in part, from 2:59.",
            "bn": "শাস্তির ব্যাখ্যা দেয় দ্বিতীয় এক রেওয়ায়েত। সহীহ বুখারী ৩৪৭৩, উসামা ইবনে যায়েদ (রাঃ) থেকে, নবী ﷺ বলেছেন: 'মহামারী এক আপদ, যা পাঠানো হয়েছিল বনী ইসরাঈলের এক দলের উপর, অথবা তোমাদের আগে যারা ছিল তাদের উপর। তাই কোনো ভূমিতে তা শুনলে সেখানে যেয়ো না, আর তোমরা যে ভূমিতে আছ সেখানে তা দেখা দিলে পালিয়ে বেরিয়ো না।' ক্লাসিক মুফাসসিররা একে আকাশ থেকে আসা 'রিজয' এর সাথে জোড়েন, আর তাতে আয়াত হয়ে যায় জীবন্ত নির্দেশ: মহামারীতে মুমিনের আচরণ আংশিকভাবে নেমে এসেছে ২:৫৯ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Door in Other Surahs",
          "bn": "অন্য সূরায় সেই দরজা"
        },
        "p": [
          {
            "en": "7:161-162 tell the same scene with small differences that the commentators noticed: there the command is dwell rather than enter, and say hittah comes before enter the gate. The two orderings are both true, since the people were to do both, and reading them together stops a reader from making the story hang on a single sequence. 4:154 lists enter the gate bowing among the terms of their covenant, side by side with do not transgress on the Sabbath, so the gate was a covenant matter and not a passing courtesy.",
            "bn": "৭:১৬১-১৬২ একই দৃশ্য বলে ছোট ছোট ফারাক নিয়ে, যা মুফাসসিররা খেয়াল করেছেন: সেখানে হুকুম 'ঢোকো' নয়, 'বাস করো', আর 'হিত্তাহ বলো' আসে 'দরজা দিয়ে ঢোকো'র আগে। দুই ক্রমই সত্য, কারণ লোকেদের দুটোই করতে হত। একসাথে পড়লে পাঠক গল্পটাকে একটা মাত্র ধারাক্রমের উপর ঝুলিয়ে রাখেন না। ৪:১৫৪ তাদের অঙ্গীকারের শর্তের তালিকায় 'দরজা দিয়ে নত হয়ে ঢোকো' রেখেছে, ঠিক 'শনিবারে সীমা লঙ্ঘন করো না'র পাশে। দরজাটা তাহলে অঙ্গীকারের বিষয় ছিল, চলতি ভদ্রতা নয়।"
          },
          {
            "en": "5:21 gives Musa (AS) commanding his people to enter the blessed land, and 5:24 gives their earlier refusal, we will never enter it as long as they are in it. That refusal is the background the commentators assume for 2:58: the entry finally offered had already been refused once. And 110:3 shows what the gate was for. When help and victory come, the Prophet ﷺ is told to glorify his Lord and seek His forgiveness. Ibn Kathir sets the two beside each other: victory is the moment to bow and say hittah, not to straighten up.",
            "bn": "৫:২১ আয়াতে মূসা (আঃ) তাঁর কওমকে বরকতময় ভূমিতে ঢুকতে হুকুম দিচ্ছেন, আর ৫:২৪ আয়াতে তাদের আগের অস্বীকার: ওরা যতদিন ওখানে আছে আমরা কখনো ঢুকব না। ২:৫৮ আয়াতের পটভূমি হিসেবে মুফাসসিররা এই অস্বীকারটাই ধরে নেন: শেষে যে প্রবেশের সুযোগ দেওয়া হল, তা আগে একবার ফিরিয়ে দেওয়া হয়েছিল। আর ১১০:৩ দেখায় দরজাটা কীসের জন্য ছিল। সাহায্য আর বিজয় এলে নবী ﷺ-কে বলা হচ্ছে রবের প্রশংসায় তাসবীহ পড়তে আর তাঁর কাছে মাফ চাইতে। ইবনে কাসীর দুটোকে পাশাপাশি রাখেন: বিজয়ের মুহূর্তটাই নত হয়ে হিত্তাহ বলার সময়, পিঠ সোজা করার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "At the Gate of Every Mercy",
          "bn": "প্রতিটি রহমতের দরজায়"
        },
        "p": [
          {
            "en": "Every mercy in a believer's life arrives with a small instruction attached. A new job comes with the instruction to be honest in it; recovery from illness with the instruction to use the body for what it was returned for; a marriage with the instruction of kindness; a Ramadan with the instruction to fast it and not merely to eat at night. The verse trains a person to look for the sujjadan and the hittah in each blessing, the posture and the word that are being asked of him at the door, and to give them before he sits down to eat.",
            "bn": "মুমিনের জীবনে প্রতিটি রহমত আসে ছোট একটা নির্দেশ সাথে নিয়ে। নতুন চাকরি আসে তাতে সৎ থাকার নির্দেশ নিয়ে। অসুখ থেকে সেরে ওঠা আসে এই নির্দেশ নিয়ে যে শরীরটা যে কাজের জন্য ফেরত দেওয়া হল সেই কাজেই লাগাতে হবে। বিয়ে আসে সদাচরণের নির্দেশ নিয়ে, রমজান আসে রোজা রাখার নির্দেশ নিয়ে, শুধু রাতে খাওয়ার নয়। আয়াত মানুষকে শেখায় প্রতিটি নিয়ামতে 'সুজ্জাদান' আর 'হিত্তাহ' খুঁজতে। দরজায় তাঁর কাছে কোন ভঙ্গি আর কোন শব্দ চাওয়া হচ্ছে, সেটা খেয়াল করতে, আর খেতে বসার আগেই তা দিয়ে দিতে।"
          },
          {
            "en": "The practical discipline is in the words of worship. The people were told to say one thing and said another that sounded like it. A believer can go through the phrases he says mechanically: the istighfar after prayer, the tasbih on the fingers, the du'a before food. Do they still mean what they were given to mean, or have they worn into a rhyme? This week, choose one fixed phrase and say it slowly, once, with the meaning in front of the mind. And when good news comes, before telling anyone, bow and ask forgiveness; that is the order 2:58 and 110:3 both give.",
            "bn": "কাজের অনুশীলনটা ইবাদতের শব্দে। লোকেদের একটা কথা বলতে বলা হয়েছিল, তারা বলল তার মতো শোনায় এমন অন্য কথা। মুমিন যে বাক্যগুলো যন্ত্রের মতো বলে যান, সেগুলো একবার ঝালিয়ে নিতে পারেন: নামাজের পরের ইস্তিগফার, আঙুলে গোনা তাসবীহ, খাওয়ার আগের দোয়া। সেগুলো কি এখনো তা-ই বোঝায় যা বোঝানোর জন্য দেওয়া হয়েছিল, নাকি ক্ষয়ে গিয়ে শুধু ছন্দ হয়ে গেছে? এই সপ্তাহে একটা বাঁধা বাক্য বেছে নিন, একবার ধীরে বলুন, অর্থটা মনের সামনে রেখে। আর সুখবর এলে কাউকে বলার আগে নত হয়ে মাফ চান। ২:৫৮ ও ১১০:৩, দুটোই এই ক্রম দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a From the Word's Root",
          "bn": "শব্দের মূল থেকে দোয়া"
        },
        "p": [
          {
            "en": "The verse contains its own du'a, one word long, and the Sunnah gives a fuller form built on the same idea. Sahih al-Bukhari records, from Abu Musa al-Ash'ari (RA), that the Prophet ﷺ used to say: 'O Allah, forgive me my sin and my ignorance and my excess in my affair, and what You know better than I. O Allah, forgive me my earnest and my jest, my mistake and my deliberate act, and all of that is with me.' The word for sin there, khati'ah, is the singular of khataya in the verse.",
            "bn": "আয়াতের ভেতরেই তার দোয়া আছে, এক শব্দের, আর সুন্নাহ একই ভাবনার উপর একটা পূর্ণ রূপ দিয়েছে। সহীহ বুখারীতে আবু মূসা আশআরী (রাঃ) থেকে এসেছে, নবী ﷺ বলতেন: 'হে আল্লাহ, আমার গুনাহ, আমার অজ্ঞতা, আমার কাজে আমার বাড়াবাড়ি, আর যা আপনি আমার চেয়ে ভালো জানেন, সব মাফ করুন। হে আল্লাহ, আমার গম্ভীর কথা আর আমার ঠাট্টা, আমার ভুল আর আমার ইচ্ছাকৃত কাজ মাফ করুন, আর এসব সবই আমার মধ্যে আছে।' সেখানে গুনাহর জন্য শব্দটি 'খাতীআহ', আয়াতের 'খাতায়া'র একবচন।"
          },
          {
            "en": "Saying it at a door is the way to make it the verse's du'a: on entering the mosque, on the threshold of a new home, at the start of a journey or a contract. The Children of Israel were asked for one word at a gate; the Prophet ﷺ gave his community many words for the same posture. A believer who says hittah in his own language, put my burden down, and then says the Bukhari du'a in full, has done what the verse asked and what the people who changed the word refused to do.",
            "bn": "দরজায় দাঁড়িয়ে বললেই এটা আয়াতের দোয়া হয়ে যায়: মসজিদে ঢোকার সময়, নতুন বাড়ির চৌকাঠে, সফর বা চুক্তির শুরুতে। বনী ইসরাঈলের কাছে দরজায় একটা শব্দ চাওয়া হয়েছিল, নবী ﷺ তাঁর উম্মতকে একই ভঙ্গির জন্য অনেক শব্দ দিয়ে গেছেন। যে মুমিন নিজের ভাষায় হিত্তাহ বলেন, আমার বোঝা নামিয়ে দিন, তারপর বুখারীর দোয়াটি পুরো পড়েন, তিনি সেটাই করলেন যা আয়াত চেয়েছিল, আর যা শব্দ বদলানো লোকেরা করতে চায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "When Allah's mercy asks something small of me, a bowed head, a plain admission, do I give it, or does the smallness make me treat it as beneath me? Which words of worship have I worn down over the years into sounds that no longer say what they were given to say? What am I doing at the gate of the blessing I am in right now: bowing, or walking in upright as if I had built the town myself?",
            "bn": "আল্লাহর রহমত যখন আমার কাছে ছোট কিছু চায়, নত মাথা, সোজা স্বীকারোক্তি, আমি কি তা দিই, নাকি ছোট বলেই সেটাকে নিজের মানের নিচে ভাবি? বছরের পর বছর ইবাদতের কোন শব্দগুলো আমি ক্ষয় করে এমন আওয়াজে নামিয়ে এনেছি যা আর তা বলে না যা বলার জন্য দেওয়া হয়েছিল? এই মুহূর্তে আমি যে নিয়ামতের ভেতরে আছি তার দরজায় আমি করছি কী: নত হচ্ছি, নাকি এমন সোজা হয়ে ঢুকছি যেন জনপদটা আমিই বানিয়েছি?"
          },
          {
            "en": "Is there an instruction attached to a favour I received this year that I have quietly set aside while keeping the favour itself? The punishment fell only on those who changed the word: do I take comfort in the fact that others changed it too, or do I ask what I myself am saying at the door, and whether it is still the word I was given?",
            "bn": "এই বছর পাওয়া কোনো নিয়ামতের সাথে জোড়া এমন কোনো নির্দেশ কি আছে, যা আমি চুপচাপ সরিয়ে রেখেছি, অথচ নিয়ামতটা রেখে দিয়েছি? শাস্তি পড়েছিল কেবল তাদের উপর যারা শব্দ বদলেছিল। অন্যরাও বদলেছে, এই ভেবে আমি কি স্বস্তি পাই, নাকি নিজেকে জিজ্ঞেস করি, দরজায় দাঁড়িয়ে আমি নিজে কী বলছি, আর সেটা কি এখনো সেই শব্দ যা আমাকে দেওয়া হয়েছিল?"
          }
        ]
      }
    ]
  },
  "2:61": {
    "sections": [
      {
        "h": {
          "en": "Twelve Springs, Then a Complaint",
          "bn": "বারো ঝর্ণা, তারপর অভিযোগ"
        },
        "p": [
          {
            "en": "2:61 is one of the longest verses in the address to the Children of Israel that runs from 2:40, and it is where the run of remembered scenes that began at 2:49 first reaches a verdict. Just before it, 2:60 has Musa (AS) praying for water and twelve springs breaking from a rock, with the instruction eat and drink from Allah's provision and do not spread corruption. Just after it, 2:62 opens a wider door, promising reward to whoever believes in Allah and the Last Day and does right, whatever community he came from. Between the water and the promise stands a complaint about food.",
            "bn": "২:৪০ থেকে বনী ইসরাঈলকে যে সম্বোধন চলছে, তার সবচেয়ে দীর্ঘ আয়াতগুলোর একটি ২:৬১, আর ২:৪৯ থেকে মনে করিয়ে দেওয়া দৃশ্যের যে সারি চলছিল, তা এখানে এসেই প্রথম রায়ে পৌঁছায়। ঠিক আগে ২:৬০ আয়াতে মূসা (আঃ) পানির জন্য দোয়া করছেন, পাথর থেকে বারোটি ঝর্ণা ফুটছে, সাথে নির্দেশ: আল্লাহর রিজিক থেকে খাও ও পান কর, আর জমিনে ফাসাদ ছড়িয়ো না। ঠিক পরে ২:৬২ খুলে দেয় আরও বড় দরজা: যে-ই আল্লাহ ও শেষ দিনে ঈমান আনে আর নেক কাজ করে, সে যে সম্প্রদায় থেকেই আসুক, তার পুরস্কার আছে। পানি আর ওয়াদার মাঝখানে দাঁড়িয়ে আছে খাবার নিয়ে এক অভিযোগ।"
          },
          {
            "en": "The verse has two halves that read differently. The first is narrative: a request, a reply from Musa (AS), a dismissal. The second is verdict: humiliation and neediness struck upon them, anger from Allah, and two chained explanations beginning with that was because. The sequence from 2:49 has been building toward this: every favour met with a lapse, every lapse met with forgiveness, until the verse where the pattern is named. The reader should notice that the verdict is not about vegetables. It is about what the request for vegetables was a symptom of.",
            "bn": "আয়াতের দুই অর্ধেক দুই রকমভাবে পড়ে। প্রথমটা কাহিনি: একটা আবদার, মূসা (আঃ)-এর জবাব, এক ধমক। দ্বিতীয়টা রায়: তাদের উপর চাপল লাঞ্ছনা আর অভাব, আল্লাহর গজব, আর 'তা এজন্য যে' দিয়ে শুরু হওয়া দুটো শিকলবাঁধা ব্যাখ্যা। ২:৪৯ থেকে ধারাটা এদিকেই এগোচ্ছিল: প্রতিটি নিয়ামতের জবাবে একটা করে চ্যুতি, প্রতিটি চ্যুতির জবাবে মাফ, যতক্ষণ না এই আয়াতে এসে ধরনটার নাম বলা হয়। পাঠক খেয়াল করুন, রায়টা শাকসবজি নিয়ে নয়। শাকসবজির আবদারটা কীসের লক্ষণ ছিল, রায় সেটা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "We Will Not Be Patient",
          "bn": "আমরা ধৈর্য ধরব না"
        },
        "p": [
          {
            "en": "The complaint opens with lan nasbira, we will never be patient, from the root s-b-r that the surah has just praised at 2:45. Lan is the emphatic negation of the future in Arabic, so the sentence is not a sigh but a refusal. What they could not bear was ta'am wahid, one kind of food: the manna and quails of 2:57. The list that follows, herbs, cucumbers, fum, lentils and onions, is deliberately ordinary. The word fum has been read as garlic and as wheat, and translations still divide over it; the verse's point survives either way, since all five grow from any patch of earth.",
            "bn": "অভিযোগ শুরু হয় 'লান নাসবিরা' দিয়ে, আমরা কখনো ধৈর্য ধরব না, সেই স-ব-র মূল থেকে যার প্রশংসা সূরা এইমাত্র ২:৪৫ আয়াতে করেছে। আরবিতে ভবিষ্যতের জোরালো না-বাচক হল 'লান', তাই বাক্যটা দীর্ঘশ্বাস নয়, সরাসরি অস্বীকার। যা তারা সইতে পারছিল না তা 'তাআম ওয়াহিদ', এক রকম খাবার: ২:৫৭ আয়াতের মান্না ও সালওয়া। এরপরের তালিকা, শাক, শসা, ফুম, মসুর, পেঁয়াজ, ইচ্ছে করেই সাদামাটা। 'ফুম' শব্দটি রসুন হিসেবেও পড়া হয়েছে, গম হিসেবেও, অনুবাদগুলো এখনো এ নিয়ে দুই ভাগ। আয়াতের কথা দুভাবেই টেকে, কারণ পাঁচটার সবই যেকোনো টুকরো জমিতে জন্মায়।"
          },
          {
            "en": "Musa's (AS) reply uses two comparatives: adna, the lower or nearer, and khayr, the better. Atastabdiluna, would you exchange, is from b-d-l, the same root as the changed word in 2:59; the surah keeps returning to the act of swapping what Allah gave for what the self prefers. Ihbitu misran, go down to a town, uses the verb of descent that 2:36 and 2:38 used for leaving the garden. What they asked for was easy to get and beneath what they had, so it would not be brought down from the sky; they could walk to it.",
            "bn": "মূসা (আঃ)-এর জবাবে দুটো তুলনা: 'আদনা', নিচু বা কাছের, আর 'খাইর', উত্তম। 'আতাসতাবদিলুন', তোমরা কি বদলে নিতে চাও, এসেছে ব-দ-ল মূল থেকে, ২:৫৯ আয়াতে বদলানো শব্দের সেই একই মূল। আল্লাহ যা দিলেন তার বদলে নফস যা চায় তা নেওয়া, সূরা বারবার এই কাজে ফিরে আসে। 'ইহবিতু মিসরান', কোনো শহরে নেমে যাও, এখানে সেই নামার ক্রিয়া যা ২:৩৬ ও ২:৩৮ আয়াতে জান্নাত ছেড়ে আসার জন্য এসেছিল। তারা যা চাইল তা পাওয়া সহজ, আর যা তাদের হাতে ছিল তার চেয়ে নিচু, তাই তা আকাশ থেকে নামানো হবে না। হেঁটে গেলেই পাওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Struck Upon Them",
          "bn": "তাদের উপর চাপল"
        },
        "p": [
          {
            "en": "Duribat 'alayhim, was struck upon them, is the verb used for pitching a tent or fixing a stamp: the dhillah, humiliation, and maskanah, neediness, are pictured as fastened over them like a covering. Ba'u bi-ghadab, they returned with anger from Allah, uses ba'a, to come back carrying something; at-Tabari explains it by 5:29, where the same verb describes carrying a burden of sin back with oneself. The grammar is passive and the agent is unnamed, which keeps the verse from being a boast by anyone; what fell on them fell from Allah, on account of what follows.",
            "bn": "'দুরিবাত আলাইহিম', তাদের উপর মারা হল, এই ক্রিয়া তাঁবু খাটানো বা ছাপ বসানোর জন্য ব্যবহার হয়: 'যিল্লাহ', লাঞ্ছনা, আর 'মাসকানাহ', অভাব, যেন আচ্ছাদনের মতো তাদের উপর আটকে দেওয়া হল। 'বাউ বিগাদাব', তারা আল্লাহর গজব নিয়ে ফিরল, এখানে 'বাআ' মানে কিছু বয়ে নিয়ে ফেরা। তাবারী এর ব্যাখ্যা দেন ৫:২৯ দিয়ে, যেখানে একই ক্রিয়া গুনাহর বোঝা নিজের সাথে বয়ে ফেরার কথা বলে। বাক্যে কে করল তার নাম নেই, তাই আয়াত কারো বড়াই হয়ে ওঠে না। যা তাদের উপর পড়ল তা আল্লাহর পক্ষ থেকে পড়ল, এরপরে যে কারণ আসছে সেই কারণে।"
          },
          {
            "en": "Then the two dhalika clauses. That was because they disbelieved in Allah's signs and killed the prophets without right; that was because they disobeyed and were transgressing. The second clause explains the first, not the humiliation directly: the great crimes are traced back to ordinary disobedience and habitual overstepping. Kanu ya'tadun, they used to transgress, is again the continuous form. The verse is drawing a line downward, from small persistent sins to the rejection of prophets, and it is drawing the line for whoever reads it. This is the verse's most transferable content, and the commentators below make it explicit.",
            "bn": "তারপর দুটো 'যালিকা'। তা এজন্য যে তারা আল্লাহর নিদর্শন অস্বীকার করত আর নবীদের অন্যায়ভাবে হত্যা করত; তা এজন্য যে তারা নাফরমানি করত আর সীমা লঙ্ঘন করত। দ্বিতীয় বাক্যটা প্রথমটার ব্যাখ্যা, সরাসরি লাঞ্ছনার নয়: বড় অপরাধগুলোর শিকড় খোঁজা হচ্ছে সাধারণ নাফরমানি আর অভ্যাসের সীমালঙ্ঘনে। 'কানু ইয়া'তাদুন', তারা সীমা লঙ্ঘন করত, আবার সেই চলমান রূপ। আয়াত একটা রেখা টানছে নিচের দিকে, ছোট লেগে থাকা গুনাহ থেকে নবীদের প্রত্যাখ্যান পর্যন্ত, আর যে-ই পড়ুক তার জন্যই টানছে। আয়াতের এই অংশটাই সবচেয়ে বেশি নিজের জীবনে নেওয়ার মতো, নিচে মুফাসসিররা তা খোলাখুলি বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Words, One Meaning",
          "bn": "তিন শব্দ, এক অর্থ"
        },
        "p": [
          {
            "en": "The commentators differ on three words and agree on the meaning. On fum, Ibn Kathir reports that Ibn Mas'ud read it as thum, garlic, and that Ibn Abbas glossed it the same way, while others took it as wheat; al-Bukhari recorded the view that it covers any grain eaten. On misran, Ibn Abbas read the indefinite noun as any city, while Abu al-Aliyah and ar-Rabi ibn Anas took it as Egypt itself; Ibn Kathir prefers any city, since the reply is that what you asked for is common everywhere. On maskanah, Abu al-Aliyah and as-Suddi said poverty, and Atiyah al-Awfi said the tribute they came to pay.",
            "bn": "মুফাসসিররা তিনটি শব্দে ভিন্নমত, অর্থে একমত। 'ফুম' নিয়ে ইবনে কাসীর জানান, ইবনে মাসউদ পড়েছেন 'সুম', রসুন, ইবনে আব্বাসও একই অর্থ করেছেন, আর অন্যরা নিয়েছেন গম। বুখারী লিখে রেখেছেন এই মত যে খাওয়ার যেকোনো শস্য এর মধ্যে পড়ে। 'মিসরান' নিয়ে ইবনে আব্বাস অনির্দিষ্ট শব্দটিকে পড়েছেন যেকোনো শহর, আর আবুল আলিয়া ও রাবী ইবনে আনাস নিয়েছেন খোদ মিশর। ইবনে কাসীর যেকোনো শহরকে অগ্রাধিকার দেন, কারণ জবাবটাই হল, তোমরা যা চেয়েছ তা সব জায়গায় সস্তা। 'মাসকানাহ' নিয়ে আবুল আলিয়া ও সুদ্দী বলেছেন দারিদ্র্য, আতিয়া আওফী বলেছেন যে কর তাদের দিতে হত।"
          },
          {
            "en": "Al-Hasan al-Basri gives the reading of the heart behind the request: they were bored with one food and remembered the meals of the life they had left. As-Sa'di reads the two that was because clauses as a chain, disobedience and transgression leading on to disbelief and to violence against prophets, so that the verse warns against the first link by showing the last. Ibn Kathir reads the humiliation as a lasting consequence of that conduct; 2:62, which follows at once, keeps the door open to whoever believes and does right, so the reader hears a rule about conduct, not about descent.",
            "bn": "আবদারের পেছনের মনটা পড়ে দেন হাসান বসরী: তারা এক খাবারে বিরক্ত হয়ে গিয়েছিল আর যে জীবন ছেড়ে এসেছিল তার খাওয়া-দাওয়া মনে পড়ছিল। সা'দী 'তা এজন্য যে' বাক্য দুটোকে পড়েন এক শিকল হিসেবে: নাফরমানি আর সীমালঙ্ঘন গড়াতে গড়াতে পৌঁছায় কুফরে আর নবীদের উপর হাত তোলায়, তাই আয়াত শেষ কড়াটা দেখিয়ে প্রথম কড়া থেকে সাবধান করে। ইবনে কাসীর লাঞ্ছনাকে পড়েন সেই আচরণের স্থায়ী পরিণতি হিসেবে। আর ঠিক পরেই ২:৬২ দরজা খোলা রাখে যে-ই ঈমান আনে আর নেক কাজ করে তার জন্য, তাই পাঠক শোনেন আচরণের নিয়ম, বংশের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hadith Ibn Kathir Brings",
          "bn": "ইবনে কাসীর যে হাদীস আনেন"
        },
        "p": [
          {
            "en": "No sound hadith is attached to the request for vegetables itself, and the classical commentaries do not pretend otherwise. What Ibn Kathir brings to the verse is a narration on its second half, the disbelief in signs and the killing of prophets. Sahih Muslim 91 records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ said: 'Pride is rejecting the truth and looking down on people.' Ibn Kathir's point is that the two crimes named in the verse are the two halves of that definition: signs rejected, and the men who carried them held in contempt.",
            "bn": "শাকসবজির আবদারটা নিয়ে সরাসরি কোনো সহীহ হাদীস নেই, আর ক্লাসিক তাফসীরগুলো তার ভান করে না। ইবনে কাসীর আয়াতে যা আনেন তা এর দ্বিতীয় অর্ধেকের উপর, নিদর্শন অস্বীকার আর নবী হত্যার উপর। সহীহ মুসলিম ৯১, আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে, নবী ﷺ বলেছেন: 'অহংকার হল হককে ঠেলে দেওয়া আর মানুষকে তুচ্ছ করা।' ইবনে কাসীরের কথা হল, আয়াতে নাম করা দুই অপরাধ ওই সংজ্ঞার দুই অর্ধেক: নিদর্শন ঠেলে দেওয়া, আর যারা তা বয়ে এনেছিলেন তাঁদের তুচ্ছ করা।"
          },
          {
            "en": "The hadith keeps the verse from being about them. Pride as the Prophet ﷺ defines it is a posture available to anyone, and its two movements, batar al-haqq and ghamt an-nas, refusing what is true and belittling those who bring it, can be practised at a dinner table as easily as in a court. The believer who reads 2:61 with Muslim 91 beside it stops asking why they wanted onions and starts asking where in his own week he has rejected a truth because he did not like the person who told him.",
            "bn": "হাদীসটি আয়াতকে 'ওদের' ব্যাপার হতে দেয় না। নবী ﷺ অহংকারের যে সংজ্ঞা দিয়েছেন, সেই ভঙ্গি যে কারো জন্য খোলা, আর তার দুই চাল, 'বাতারুল হক' আর 'গামতুন নাস', সত্যকে ঠেলে দেওয়া আর যে সত্য আনে তাকে ছোট করা, আদালতে যেমন, খাবার টেবিলেও তেমনি চর্চা করা যায়। যে মুমিন মুসলিম ৯১ পাশে রেখে ২:৬১ পড়েন, তিনি 'ওরা পেঁয়াজ চাইল কেন' জিজ্ঞেস করা ছেড়ে দেন। জিজ্ঞেস করতে শুরু করেন, এই সপ্তাহে কোথায় আমি একটা সত্য ঠেলে দিয়েছি শুধু এই কারণে যে যে বলেছে তাকে আমার পছন্দ হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Manna in Other Surahs",
          "bn": "অন্য সূরায় মান্না"
        },
        "p": [
          {
            "en": "7:160 tells the same provision, the twelve springs, the cloud, the manna and the quails, and ends with the same sentence as 2:57, they wronged not Us but themselves; it shows the food was a favour before it was a complaint. 20:81 gives the instruction that came with the food, eat of the good things and do not transgress therein, lest My anger descend, and the anger of 2:61 is the anger 20:81 warned of. 3:112 repeats 2:61's closing verdict almost word for word, humiliation, anger, disbelief in signs, killing prophets, disobedience, transgression, and adds an exception, a rope from Allah and a rope from the people.",
            "bn": "৭:১৬০ একই রিজিকের কথা বলে, বারো ঝর্ণা, মেঘ, মান্না ও সালওয়া, আর শেষ করে ২:৫৭ আয়াতের সেই একই বাক্যে, তারা আমার উপর জুলুম করেনি, করেছে নিজেদের উপর। এই আয়াত দেখায়, খাবারটা অভিযোগ হওয়ার আগে নিয়ামত ছিল। ২০:৮১ দেয় খাবারের সাথে আসা নির্দেশ: ভালো জিনিস থেকে খাও, আর এতে সীমা ছাড়িয়ো না, নইলে আমার গজব নেমে আসবে। ২:৬১ আয়াতের গজব সেই গজব, যার সাবধানবাণী ২০:৮১ দিয়েছিল। ৩:১১২ প্রায় হুবহু ২:৬১ আয়াতের শেষ রায়টা আবার বলে, লাঞ্ছনা, গজব, নিদর্শন অস্বীকার, নবী হত্যা, নাফরমানি, সীমালঙ্ঘন, আর যোগ করে এক ব্যতিক্রম: আল্লাহর ও মানুষের আশ্রয় ছাড়া।"
          },
          {
            "en": "5:70 states plainly what killing the prophets meant: whenever a messenger came with what they did not desire, some they denied and some they killed. And 14:7 gives the law the whole verse illustrates from its other side: if you are grateful I will surely increase you, and if you are ungrateful, My punishment is severe. Read together, these sisters set the food request inside a pattern that begins with a gift, passes through impatience, and ends, when the impatience hardens into rejection, with the loss of what was given.",
            "bn": "৫:৭০ পরিষ্কার বলে নবীদের হত্যা করা মানে কী ছিল: যখনই কোনো রাসূল এমন কিছু নিয়ে এলেন যা তাদের মনে ধরেনি, কাউকে তারা অস্বীকার করল, কাউকে হত্যা করল। আর ১৪:৭ পুরো আয়াত যে নিয়মের উদাহরণ, সেটা উল্টো দিক থেকে বলে দেয়: শুকরিয়া করলে আমি অবশ্যই তোমাদের বাড়িয়ে দেব, আর অকৃতজ্ঞ হলে আমার শাস্তি কঠিন। সব মিলিয়ে এই আয়াতগুলো খাবারের আবদারকে বসিয়ে দেয় এমন এক ধরনের ভেতরে, যা শুরু হয় দান দিয়ে, যায় অধৈর্যের ভেতর দিয়ে, আর অধৈর্য যখন জমে প্রত্যাখ্যান হয়ে যায়, তখন শেষ হয় যা দেওয়া হয়েছিল তা হারিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Bored With Manna",
          "bn": "মান্নায় বিরক্ত"
        },
        "p": [
          {
            "en": "The most common form of ingratitude is not denial but boredom. The same spouse, the same job, the same city, the same prayer five times a day, the same Quran with the same surahs: a believer wakes one morning and finds that what he once asked Allah for has become one kind of food. The verse names that moment and refuses to treat it as small. The first practice is to catch the sentence lan nasbira in one's own mouth, I cannot stand this any more, and ask whether the thing complained of is in fact adna or khayr, lesser or better.",
            "bn": "অকৃতজ্ঞতার সবচেয়ে চেনা চেহারা অস্বীকার নয়, বিরক্তি। একই জীবনসঙ্গী, একই চাকরি, একই শহর, দিনে পাঁচবার একই নামাজ, একই সূরা দিয়ে একই কুরআন। মুমিন একদিন সকালে জেগে দেখেন, যা তিনি একদিন আল্লাহর কাছে চেয়েছিলেন, তা হয়ে গেছে 'এক রকম খাবার'। আয়াত সেই মুহূর্তটার নাম বলে, আর একে ছোট বলে ধরে না। প্রথম আমল হল নিজের মুখে 'লান নাসবিরা' বাক্যটা ধরে ফেলা, এটা আর সহ্য হচ্ছে না, আর জিজ্ঞেস করা, যা নিয়ে অভিযোগ, সেটা আসলে 'আদনা' না 'খাইর', নিচু না উত্তম।"
          },
          {
            "en": "The second practice is to make change the right way. The verse does not forbid wanting variety; it rebukes trading down and demanding that heaven deliver what any town sells. A believer who wants a different job, house or routine may ask Allah for it, but should first list what the present one is giving that he would be handing back. And the two that was because clauses give a rule for self-examination: a large failing in one's religion usually has a small persistent disobedience underneath it, and the small one is the one to treat.",
            "bn": "দ্বিতীয় আমল হল বদল চাওয়ার সঠিক পথ ধরা। আয়াত বৈচিত্র্য চাওয়া নিষেধ করে না। ধমক দেয় নিচে নামার লেনদেনকে, আর যেকোনো শহরে যা বিক্রি হয় তা আসমান থেকে নামানোর দাবিকে। যে মুমিন ভিন্ন চাকরি, বাড়ি বা রুটিন চান, তিনি আল্লাহর কাছে চাইতে পারেন, তবে আগে লিখে নিন এখনকারটা কী দিচ্ছে যা তিনি ফেরত দিতে যাচ্ছেন। আর 'তা এজন্য যে' বাক্য দুটো নিজেকে যাচাইয়ের একটা নিয়ম দেয়: দ্বীনে বড় কোনো খামতির নিচে সাধারণত ছোট একটা লেগে থাকা নাফরমানি থাকে, আর চিকিৎসা করতে হয় ছোটটার।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a for Sufficiency",
          "bn": "যথেষ্ট থাকার দোয়া"
        },
        "p": [
          {
            "en": "The verse pairs humiliation with maskanah, and the Sunnah has a du'a that asks for the opposite of both. Sahih Muslim 2721 records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ used to say: 'O Allah, I ask You for guidance, piety, chastity and self-sufficiency.' The last word, ghina, is the state of needing nothing beyond what one has, which is exactly what the people of 2:61 lacked while the manna was still falling. Said daily, the du'a asks for the heart that could have eaten the one food with thanks.",
            "bn": "আয়াত লাঞ্ছনার সাথে জুড়েছে 'মাসকানাহ', আর সুন্নাহতে এমন এক দোয়া আছে যা দুটোরই উল্টো জিনিস চায়। সহীহ মুসলিম ২৭২১, আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে, নবী ﷺ বলতেন: 'হে আল্লাহ, আমি আপনার কাছে চাই হেদায়েত, তাকওয়া, পবিত্রতা আর অভাবমুক্তি।' শেষ শব্দ 'গিনা', যা আছে তার বাইরে কিছু না চাওয়ার অবস্থা, ঠিক যা ২:৬১ আয়াতের মানুষগুলোর ছিল না, যখন মান্না তখনো নামছিল। রোজ পড়লে এই দোয়া সেই মন চায়, যে মন এক খাবারই শুকরিয়ার সাথে খেতে পারত।"
          },
          {
            "en": "A composed du'a in the verse's own vocabulary, offered as such, could add: O Allah, make what You have chosen for me better in my eyes than what I would choose for myself, make me patient with the one provision until You change it, and do not let my complaint over the small thing become a habit that reaches the great. The Prophet's ﷺ du'a is the one to memorise; the second only turns the verse's warning into a request, so that the reader asks for the patience the verse's speakers refused.",
            "bn": "আয়াতের নিজের শব্দে রচিত একটা দোয়া, রচিত বলেই দেওয়া হচ্ছে, এর সাথে যোগ করা যায়: হে আল্লাহ, আপনি আমার জন্য যা বেছেছেন তা আমার চোখে সেটার চেয়ে ভালো করে দিন যা আমি নিজে বাছতাম। আপনি বদলে না দেওয়া পর্যন্ত এক রিজিকে আমাকে ধৈর্য দিন। আর ছোট জিনিস নিয়ে আমার অভিযোগকে এমন অভ্যাস হতে দেবেন না যা বড়টায় গিয়ে পৌঁছায়। মুখস্থ করার মতো দোয়া নবী ﷺ-এরটাই, দ্বিতীয়টা শুধু আয়াতের সাবধানবাণীকে চাওয়ায় বদলে দেয়, যাতে পাঠক সেই ধৈর্যটাই চান যা আয়াতের বক্তারা ফিরিয়ে দিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Which blessing in my life have I grown bored of purely because it is reliable, and what would I feel if it were taken? When I ask Allah for a change, am I trading a better thing for a lesser one that I merely find more familiar? What is the one kind of food I keep complaining about, and Who provided it, and have I thanked Him for it once this week?",
            "bn": "আমার জীবনের কোন নিয়ামতে আমি বিরক্ত হয়ে গেছি স্রেফ এই কারণে যে সেটা ভরসার মতো টিকে আছে, আর তা নিয়ে নেওয়া হলে আমার কেমন লাগত? আল্লাহর কাছে যখন বদল চাই, আমি কি ভালো একটা জিনিস দিয়ে নিচু একটা জিনিস নিচ্ছি, যেটা শুধু আমার বেশি চেনা? আমার সেই 'এক রকম খাবার'টা কী, যা নিয়ে আমি অভিযোগ করেই যাই, আর সেটা দিলেন কে, আর এই সপ্তাহে একবারও কি তাঁর শুকরিয়া করেছি?"
          },
          {
            "en": "Where in my own life did a small disobedience, repeated, quietly become a habit of refusing what I know is true? The Prophet ﷺ defined pride as rejecting the truth and looking down on people: when did I last reject something true because I did not like who said it, and what would it take to accept it now?",
            "bn": "আমার নিজের জীবনে কোথায় একটা ছোট নাফরমানি, বারবার করতে করতে, চুপচাপ হয়ে গেল সত্য বলে যা জানি তা ঠেলে দেওয়ার অভ্যাস? নবী ﷺ অহংকারের সংজ্ঞা দিয়েছেন হককে ঠেলে দেওয়া আর মানুষকে তুচ্ছ করা: শেষ কবে আমি কোনো সত্য কথা ঠেলে দিয়েছি শুধু এই কারণে যে কে বলেছে তা আমার পছন্দ হয়নি, আর এখন সেটা মেনে নিতে কী লাগবে?"
          }
        ]
      }
    ]
  },
  "2:65-66": {
    "sections": [
      {
        "h": {
          "en": "The Verse That Assumes You Know",
          "bn": "যে আয়াত ধরে নেয় আপনি জানেন"
        },
        "p": [
          {
            "en": "The scene sits inside the run of remembered scenes that began at 2:49. 2:63 recalled the covenant taken under the raised mount, and 2:64 said they turned away after it, adding that but for Allah's favour and mercy they would have been among the losers. 2:65 then changes the verb. Most scenes so far have opened with and when; this one opens with wa laqad 'alimtum, and you certainly knew. The Sabbath story is not being told to them; it is being cited as something they already carry. 2:66 gives its purpose, and 2:67 begins the cow.",
            "bn": "২:৪৯ থেকে মনে করিয়ে দেওয়া দৃশ্যের যে সারি চলছে, এই দৃশ্য তারই ভেতরে। ২:৬৩ মনে করিয়েছে উঁচু করে ধরা পাহাড়ের নিচে নেওয়া অঙ্গীকার, ২:৬৪ বলেছে এরপরও তারা মুখ ফিরিয়ে নিল, আর যোগ করেছে, আল্লাহর অনুগ্রহ ও রহমত না থাকলে তারা ক্ষতিগ্রস্তদের দলে পড়ত। ২:৬৫ এসে ক্রিয়াটা বদলে দেয়। এতক্ষণ বেশিরভাগ দৃশ্য খুলেছে 'আর যখন' দিয়ে, এটা খোলে 'ওয়া লাকাদ আলিমতুম' দিয়ে, আর তোমরা অবশ্যই জান। শনিবারের গল্পটা তাদের শোনানো হচ্ছে না, উল্লেখ করা হচ্ছে এমন কিছু হিসেবে যা তারা আগে থেকেই বয়ে বেড়ায়। ২:৬৬ বলে এর উদ্দেশ্য, আর ২:৬৭ শুরু করে গরুর ঘটনা।"
          },
          {
            "en": "The placement is deliberate. A verse about mercy, 2:64, is followed at once by one of the surah's most severe scenes, and the severity is aimed at those who transgressed among you, not at all of them. Then 2:66 splits the audience a second time: the same event is a deterrent for one kind of person and a lesson for another. The sequence from 2:40 has been showing favour, lapse and mercy in turn; this pair shows what happens when a limit set by the covenant is crossed with contrivance, and, in the same breath, whom the story is for.",
            "bn": "বিন্যাসটা ইচ্ছাকৃত। রহমতের আয়াত ২:৬৪, তার ঠিক পরেই সূরার সবচেয়ে কঠোর দৃশ্যগুলোর একটি, আর কঠোরতার নিশানা 'তোমাদের মধ্যে যারা সীমা লঙ্ঘন করেছিল', সবাই নয়। তারপর ২:৬৬ শ্রোতাদের আরেকবার ভাগ করে: একই ঘটনা এক রকম মানুষের জন্য শাস্তির নজির, আরেক রকম মানুষের জন্য উপদেশ। ২:৪০ থেকে ধারাটা পালা করে দেখাচ্ছিল নিয়ামত, চ্যুতি আর রহমত। এই জোড়া দেখায়, অঙ্গীকারে বাঁধা কোনো সীমা যখন চালাকি করে পার হওয়া হয় তখন কী হয়, আর একই নিঃশ্বাসে বলে দেয়, গল্পটা কার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Crossed, Driven Off, Made a Fetter",
          "bn": "সীমা পার, তাড়িয়ে দেওয়া, শিকল বানানো"
        },
        "p": [
          {
            "en": "I'tadaw, they transgressed, is from '-d-w, to cross over a line; the same root gives 'udwan, aggression, and the ya'tadun of 2:61. The line here was the Sabbath, sabt, the day of ceasing that was set for them, as 16:124 says, and that 4:154 lists as a term of their covenant. Khasi'in, despised, is from kh-s-', which describes a dog driven off and kept at a distance; the Quran uses the same root for the eye that returns khasi'an, humbled and defeated, in 67:4. It is a word about being pushed out of the circle, not only about looking different.",
            "bn": "'ই'তাদাও', তারা সীমা লঙ্ঘন করল, মূল আ-দ-ও, একটা রেখা পার হয়ে যাওয়া। একই মূল থেকে 'উদওয়ান', আগ্রাসন, আর ২:৬১ আয়াতের 'ইয়া'তাদুন'। এখানে রেখাটা ছিল শনিবার, 'সাবত', থেমে থাকার দিন, যা তাদের জন্য নির্ধারিত হয়েছিল, ১৬:১২৪ যেমন বলে, আর ৪:১৫৪ যাকে তাদের অঙ্গীকারের শর্ত হিসেবে গুনেছে। 'খাসিঈন', ঘৃণিত, মূল খ-স-আ, যা এমন কুকুরকে বোঝায় যাকে তাড়িয়ে দূরে রাখা হয়। ৬৭:৪ আয়াতে যে চোখ 'খাসিআন', নত ও ব্যর্থ হয়ে ফিরে আসে, কুরআন সেখানেও এই মূলই ব্যবহার করেছে। শব্দটা বৃত্তের বাইরে ঠেলে দেওয়ার, শুধু দেখতে অন্যরকম হওয়ার নয়।"
          },
          {
            "en": "Nakal, in 2:66, is the word the verse's purpose hangs on. Its root n-k-l gives nikl, a fetter or shackle, and the verb means to restrain; a nakal is a punishment shaped so that it holds others back from the same act. The Arabic of 79:25 uses it for Pharaoh's end. Maw'izah, from w-'-z, is the counsel that softens a heart. The verse thus names two effects of one event: it fetters some and it teaches others. Which effect a hearer receives is decided by the last word, lil-muttaqin, for those who fear Allah.",
            "bn": "২:৬৬ আয়াতের 'নাকাল' সেই শব্দ, যার উপর আয়াতের উদ্দেশ্য ঝুলে আছে। এর মূল ন-ক-ল থেকে 'নিকল', বেড়ি বা শিকল, আর ক্রিয়ার অর্থ আটকে রাখা। 'নাকাল' এমন শাস্তি, যার গড়নই এমন যে অন্যদের একই কাজ থেকে ধরে রাখে। ৭৯:২৫ আয়াতের আরবিতে ফেরাউনের পরিণতির জন্য এই শব্দই এসেছে। 'মাওইযাহ', মূল ও-আ-য, সেই নসিহত যা মন নরম করে। আয়াত তাহলে এক ঘটনার দুই ফলের নাম বলছে: কাউকে সে বেঁধে রাখে, কাউকে শেখায়। শ্রোতা কোন ফলটা পাবেন, তা ঠিক করে শেষ শব্দ, 'লিল মুত্তাকীন', যারা আল্লাহকে ভয় করে তাদের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Be, and They Were",
          "bn": "হও, আর তারা হল"
        },
        "p": [
          {
            "en": "Fa-qulna lahum kunu, so We said to them, be. The Quran gives the creative command in this same word, kun, at 36:82: when He intends a thing, He says to it be, and it is. The transformation is therefore given as a word, not a process, and the verse offers no description beyond the two words qiradatan khasi'in. Everything a reader may have heard about how it looked, how long it lasted, or who among them became what, is absent from the text; the Quran gives the sentence and withholds the spectacle.",
            "bn": "'ফাকুলনা লাহুম কুনু', তখন আমি তাদের বললাম, হও। সৃষ্টির হুকুমও কুরআন এই একই শব্দে দেয়, 'কুন', ৩৬:৮২ আয়াতে: তিনি যখন কিছু চান, তাকে বলেন হও, আর তা হয়ে যায়। রূপান্তরটা তাই দেওয়া হয়েছে একটা শব্দ হিসেবে, ধাপে ধাপে ঘটা কিছু হিসেবে নয়, আর আয়াত 'কিরাদাতান খাসিঈন', এই দুটো শব্দের বাইরে কোনো বর্ণনা দেয় না। দেখতে কেমন ছিল, কতদিন টিকেছিল, তাদের কে কী হয়েছিল, এসব নিয়ে পাঠক যা-ই শুনে থাকুন, পাঠ্যে তার কিছুই নেই। কুরআন রায়টা দেয়, তামাশাটা দেয় না।"
          },
          {
            "en": "Lahum, to them, restricts the sentence to those who transgressed among you, the alladhina i'tadaw minkum of the verse's first half. The Quran is exact about this, and 7:165 is more exact still: those who forbade the evil were saved, and those who wronged were seized. The address to the whole community is you knew; the sentence is passed on a subset. A reader who takes the verse as a verdict on a people has misread its grammar. It is a verdict on an act, and the act is available to anyone who can find a clever way around a clear command.",
            "bn": "'লাহুম', তাদের, রায়টাকে সীমিত করে 'তোমাদের মধ্যে যারা সীমা লঙ্ঘন করেছিল' তাদের মধ্যে, আয়াতের প্রথম অর্ধেকের 'আল্লাযীনা ই'তাদাও মিনকুম'। কুরআন এ ব্যাপারে নিখুঁত, আর ৭:১৬৫ আরও নিখুঁত: যারা মন্দ থেকে নিষেধ করত তাদের বাঁচানো হল, আর যারা জুলুম করেছিল তাদের পাকড়াও করা হল। পুরো সম্প্রদায়কে বলা হচ্ছে 'তোমরা জান', রায় দেওয়া হচ্ছে একটা অংশের উপর। যে পাঠক আয়াতকে একটা জাতির উপর রায় ধরেন, তিনি এর ব্যাকরণই ভুল পড়েছেন। এ রায় একটা কাজের উপর, আর সেই কাজ যে কারো নাগালে, যে পরিষ্কার হুকুমের পাশ কাটানোর চালাক পথ খুঁজে পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Bodies or Hearts",
          "bn": "দেহ না অন্তর"
        },
        "p": [
          {
            "en": "The commentators differ on the transformation and agree on its meaning. Ibn Abbas, Qatadah and the majority took kunu qiradatan literally: their bodies were changed. Mujahid held that it was their hearts that were changed and that the verse speaks by way of a likeness, as 62:5 likens others to a donkey carrying books. At-Tabari reports Mujahid's view and rejects it as against the apparent sense of the words, and Ibn Kathir follows at-Tabari. The reader should know that both readings existed among the early scholars and that the majority reading is literal.",
            "bn": "রূপান্তর নিয়ে মুফাসসিররা ভিন্নমত, অর্থ নিয়ে একমত। ইবনে আব্বাস, কাতাদা ও অধিকাংশ 'কুনু কিরাদাতান'কে আক্ষরিক নিয়েছেন: তাদের দেহ বদলে দেওয়া হয়েছিল। মুজাহিদের মত, বদলেছিল তাদের অন্তর, আর আয়াত কথা বলছে উপমার ভঙ্গিতে, যেমন ৬২:৫ অন্যদের তুলনা করেছে কিতাব বওয়া গাধার সাথে। তাবারী মুজাহিদের মত উল্লেখ করেন আর শব্দের প্রকাশ্য অর্থের বিরুদ্ধে বলে নাকচ করেন, ইবনে কাসীর তাবারীকে অনুসরণ করেন। পাঠকের জানা দরকার, প্রথম যুগের আলেমদের মধ্যে দুই পাঠই ছিল, আর সংখ্যাগরিষ্ঠের পাঠ আক্ষরিক।"
          },
          {
            "en": "On 2:66 the differences are about pronouns. Ibn Kathir, following Ibn Abbas, takes the it that was made a deterrent as the town, and what is before it and behind it as the settlements around it. Others, whose reading most translations follow, take the phrase in time: those present then and those who came after. As-Sa'di explains lil-muttaqin by observing that only the God-fearing profit from a warning, since the others hear the story and feel nothing. Ibn Kathir adds that Allah preserved the account so that the reminder would reach those who came later, which is the reader.",
            "bn": "২:৬৬ নিয়ে ফারাকটা সর্বনামে। ইবনে কাসীর, ইবনে আব্বাসকে অনুসরণ করে, যে 'তা'কে শাস্তির নজির বানানো হল সেটা ধরেন জনপদটাকে, আর 'তার সামনে ও পেছনে যা আছে'কে ধরেন আশপাশের বসতি। অন্যরা, যাঁদের পাঠ অধিকাংশ অনুবাদ অনুসরণ করে, বাক্যাংশটিকে সময়ের হিসেবে নেন: তখন যারা উপস্থিত ছিল আর যারা পরে এল। সা'দী 'লিল মুত্তাকীন' বুঝিয়েছেন এই লক্ষ করে যে সাবধানবাণী থেকে লাভ তোলে কেবল আল্লাহভীরুরা, বাকিরা গল্প শোনে আর কিছুই অনুভব করে না। ইবনে কাসীর যোগ করেন, আল্লাহ ঘটনাটা সংরক্ষণ করেছেন যাতে স্মরণটা পরে যারা আসবে তাদের কাছে পৌঁছায়, আর সেটা পাঠক নিজেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Prophet ﷺ Clarified",
          "bn": "নবী ﷺ যা পরিষ্কার করেছেন"
        },
        "p": [
          {
            "en": "The sound hadith on the transformation answers the question people most often ask. Sahih Muslim 2663 records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ was asked whether the apes and pigs were from those who had been transformed, and he said: 'Allah did not destroy a people, or punish a people, and then make offspring for them; the apes and pigs existed before that.' The transformed had no line. The animals a person sees are creation, not the remnant of a punishment, and the hadith closes a door that curiosity keeps trying to open.",
            "bn": "রূপান্তর নিয়ে যে সহীহ হাদীস আছে, তা সেই প্রশ্নের জবাব দেয় যা মানুষ সবচেয়ে বেশি করে। সহীহ মুসলিম ২৬৬৩, আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে: নবী ﷺ-কে জিজ্ঞেস করা হয়েছিল, বানর আর শূকর কি রূপান্তরিত মানুষদের বংশ? তিনি বললেন: 'আল্লাহ কোনো কওমকে ধ্বংস করে, বা কোনো কওমকে শাস্তি দিয়ে, তারপর তাদের বংশধর বানাননি; আর বানর ও শূকর তার আগে থেকেই ছিল।' রূপান্তরিতদের কোনো বংশধারা ছিল না। মানুষ যে প্রাণী দেখে তা সৃষ্টি, কোনো শাস্তির অবশেষ নয়, আর কৌতূহল যে দরজাটা বারবার খুলতে চায়, হাদীস সেটা বন্ধ করে দেয়।"
          },
          {
            "en": "That is all the sound narration says. What the hadith teaches by its restraint is worth noticing: the Prophet ﷺ was asked about the apes and answered about the apes, and did not narrate the story's interior. The verse itself gives two words for the sentence and a full verse for its purpose, and that proportion is the guide. A believer who reads 2:65 for the spectacle has read it upside down; the weight of the text is on 2:66, the deterrent and the lesson, and that is the part he is meant to carry out of the story.",
            "bn": "সহীহ বর্ণনা এইটুকুই বলে। হাদীসটি তার সংযম দিয়ে যা শেখায়, তা লক্ষ করার মতো: নবী ﷺ-কে বানর নিয়ে জিজ্ঞেস করা হল, তিনি বানর নিয়ে জবাব দিলেন, গল্পের ভেতরটা বর্ণনা করলেন না। আয়াত নিজে রায়ের জন্য দিয়েছে দুটো শব্দ, আর তার উদ্দেশ্যের জন্য পুরো একটা আয়াত। এই অনুপাতই পথনির্দেশ। যে মুমিন তামাশা দেখতে ২:৬৫ পড়েন, তিনি উল্টো করে পড়েছেন। পাঠ্যের ভার ২:৬৬ আয়াতে, শাস্তির নজির আর উপদেশে, আর গল্প থেকে তাঁর সেটাই বয়ে নিয়ে বের হওয়ার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Town by the Sea",
          "bn": "সমুদ্রের ধারের সেই জনপদ"
        },
        "p": [
          {
            "en": "7:163 tells what 2:65 assumes: a town by the sea, the fish coming openly on the Sabbath and staying away on other days, a test set precisely at the point of their weakness. 7:164 records a dispute inside the town, some asking why bother warning a people Allah will punish, and the warners answering, to be clear before your Lord, and perhaps they will fear Him. 7:165 gives the outcome the Quran wants noticed: those who forbade evil were saved, and only those who wronged were seized. 7:166 then repeats the sentence of 2:65 in the same words.",
            "bn": "২:৬৫ যা ধরে নেয়, ৭:১৬৩ তা বলে দেয়: সমুদ্রের ধারে এক জনপদ, শনিবারে মাছ প্রকাশ্যে চলে আসত আর অন্য দিন আসত না, ঠিক তাদের দুর্বলতার জায়গায় পাতা এক পরীক্ষা। ৭:১৬৪ লেখে জনপদের ভেতরের এক তর্ক: কেউ কেউ বলছে, যাদের আল্লাহ শাস্তি দেবেন তাদের নসিহত করে লাভ কী, আর নসিহতকারীরা জবাব দিচ্ছে, তোমাদের রবের কাছে দায়মুক্ত থাকতে, আর হয়তো তারা ভয় করবে। ৭:১৬৫ দেয় সেই ফল যা কুরআন চায় আপনি লক্ষ করুন: যারা মন্দ থেকে নিষেধ করত তাদের বাঁচানো হল, আর কেবল যারা জুলুম করেছিল তাদের পাকড়াও করা হল। ৭:১৬৬ তারপর ২:৬৫ আয়াতের রায় একই শব্দে আবার বলে।"
          },
          {
            "en": "4:47 turns the story into a warning addressed to the People of the Book in Madinah, before We curse them as We cursed the people of the Sabbath, which shows that the event was cited in the Prophet's ﷺ own time as a live precedent. 16:124 explains that the Sabbath itself was appointed for those who differed over it, a rule tied to a people, not a rule for all. And 12:111 states the principle that 2:66 applies: in their stories there is a lesson for those of understanding. Story, restriction, and lesson are the three things these sisters supply.",
            "bn": "৪:৪৭ গল্পটাকে বানিয়ে দেয় মদীনার আহলে কিতাবের প্রতি সাবধানবাণী: শনিবারওয়ালাদের যেমন লানত করেছিলাম, তোমাদেরও তেমনি লানত করার আগে। বোঝা যায়, নবী ﷺ-এর নিজের সময়েও ঘটনাটা জীবন্ত নজির হিসেবে উল্লেখ হত। ১৬:১২৪ বুঝিয়ে দেয়, শনিবার নিজেই নির্ধারিত হয়েছিল তাদের জন্য যারা এ নিয়ে মতভেদ করেছিল, এক কওমের সাথে বাঁধা নিয়ম, সবার জন্য নয়। আর ১২:১১১ বলে সেই নীতি যা ২:৬৬ প্রয়োগ করে: তাদের কাহিনিতে বোধসম্পন্নদের জন্য শিক্ষা আছে। গল্প, সীমা, আর শিক্ষা, এই তিনটি জিনিস এই সহোদর আয়াতগুলো জোগায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Loophole and the Limit",
          "bn": "ফাঁক আর সীমা"
        },
        "p": [
          {
            "en": "The offence in this story was not open defiance. Ibn Kathir describes it as a contrivance: a way of taking on the Sabbath what the Sabbath forbade, arranged so that the letter seemed kept. That is the form of sin most available to religious people. A trade structured so that the interest is called something else; a fast kept while the tongue does what the fast was meant to stop; a promise kept in wording and broken in substance; a rule of one's employer or one's state satisfied on paper. The verse's warning is aimed at the clever, and the reader should assume he is one of them.",
            "bn": "এই গল্পের অপরাধটা খোলা বিদ্রোহ ছিল না। ইবনে কাসীর একে বলেন কৌশল: শনিবার যা নিষেধ করেছিল, শনিবারেই তা নেওয়ার এমন ব্যবস্থা, যাতে বাইরে থেকে মনে হয় নিয়মের অক্ষর রক্ষা হয়েছে। দ্বীনদার মানুষের হাতের সবচেয়ে কাছে গুনাহর এই চেহারাটাই থাকে। এমন লেনদেন যেখানে সুদের অন্য নাম দেওয়া হয়। এমন রোজা যেখানে জিহ্বা ঠিক সেটাই করে যা থামাতে রোজা দেওয়া হয়েছিল। এমন ওয়াদা যা কথায় রাখা হয় আর কাজে ভাঙা হয়। মালিক বা রাষ্ট্রের এমন নিয়ম যা কাগজে পূরণ হয়। আয়াতের সাবধানবাণীর নিশানা চালাক লোক, আর পাঠক ধরে নিন, তিনি তাদেরই একজন।"
          },
          {
            "en": "The practice is a weekly question, best asked on the day one has set apart for it: where this week did I find a way around a command while keeping its words? Name one such arrangement and undo it. The second practice comes from 7:165: be among those who forbid the evil, quietly and without contempt, since that was the group that was saved. A believer who cannot stop a wrong can still be recorded as having spoken against it, and the Quran says that this was enough to separate him from the sentence.",
            "bn": "আমল হল সপ্তাহে একটা প্রশ্ন, যে দিনটা এর জন্য আলাদা রাখা হয়েছে সেদিন করলে সবচেয়ে ভালো: এই সপ্তাহে কোথায় আমি কোনো হুকুমের শব্দ ঠিক রেখে তার পাশ কাটানোর পথ খুঁজেছি? এমন একটা ব্যবস্থার নাম বলুন আর তা ভেঙে দিন। দ্বিতীয় আমল আসে ৭:১৬৫ থেকে: যারা মন্দ থেকে নিষেধ করে তাদের একজন হোন, চুপচাপ, অবজ্ঞা ছাড়া, কারণ ওই দলটাই বাঁচানো হয়েছিল। যে মুমিন কোনো অন্যায় থামাতে পারেন না, তাঁর নামও লেখা থাকতে পারে যারা এর বিরুদ্ধে বলেছিল তাদের খাতায়, আর কুরআন বলছে, রায় থেকে আলাদা হতে এটুকুই যথেষ্ট ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a Against Sudden Wrath",
          "bn": "আচমকা গজব থেকে বাঁচার দোয়া"
        },
        "p": [
          {
            "en": "The Sunnah has a du'a that fits the verse exactly. Sahih Muslim 2739 records from Abdullah ibn Umar (RA) that among the supplications of the Prophet ﷺ was: 'O Allah, I seek refuge in You from the removal of Your favour, the change of the well-being You have given, the suddenness of Your punishment, and all of Your displeasure.' The Sabbath-breakers lost a favour, saw their well-being changed, and met a punishment that arrived in a word. The du'a asks to be kept from each of those four.",
            "bn": "সুন্নাহতে এমন এক দোয়া আছে যা আয়াতের সাথে হুবহু মেলে। সহীহ মুসলিম ২৭৩৯, আবদুল্লাহ ইবনে উমর (রাঃ) থেকে, নবী ﷺ-এর দোয়াগুলোর একটি ছিল: 'হে আল্লাহ, আমি আপনার আশ্রয় চাই আপনার নিয়ামত চলে যাওয়া থেকে, আপনার দেওয়া নিরাপত্তা বদলে যাওয়া থেকে, আপনার শাস্তির আচমকা আসা থেকে, আর আপনার সব রকম অসন্তুষ্টি থেকে।' শনিবারের সীমালঙ্ঘনকারীরা নিয়ামত হারিয়েছিল, তাদের নিরাপত্তা বদলে গিয়েছিল, আর এমন শাস্তি পেয়েছিল যা এসেছিল একটি শব্দে। দোয়াটি এই চারটির প্রতিটি থেকে রক্ষা চায়।"
          },
          {
            "en": "A composed supplication in the verse's own vocabulary, offered as such, could follow it: O Allah, make me among the muttaqin for whom this story is a lesson, and not among those for whom it had to become a fetter. Keep me from crossing Your limits by cleverness, and when I see a wrong I cannot stop, let me at least be counted among those who forbade it. The Muslim du'a is the one to memorise; the second only turns 2:66 into a request.",
            "bn": "আয়াতের নিজের শব্দে রচিত এক দোয়া, রচিত বলেই দেওয়া হচ্ছে, এর পরে বলা যেতে পারে: হে আল্লাহ, আমাকে সেই মুত্তাকীদের একজন করুন যাদের জন্য এই গল্প উপদেশ, তাদের একজন নয় যাদের জন্য একে শিকল হতে হয়েছিল। চালাকি করে আপনার সীমা পার হওয়া থেকে আমাকে বাঁচান, আর যে অন্যায় আমি থামাতে পারি না তা দেখলে অন্তত যারা নিষেধ করেছিল তাদের মধ্যে আমাকে গুনে নিন। মুখস্থ করার দোয়া মুসলিমেরটাই, দ্বিতীয়টা শুধু ২:৬৬ আয়াতকে চাওয়ায় বদলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Where in my religion have I found a way around a rule while keeping its letter, and whom am I fooling by it? When I hear that someone was punished for a trick I also use, do I take the warning, or do I take comfort that I have not yet been caught? The story is a lesson only for the God-fearing: which kind of reader am I, and how would my week look different if I were the other kind?",
            "bn": "আমার দ্বীনে কোথায় আমি কোনো নিয়মের অক্ষর রেখে তার পাশ কাটানোর পথ খুঁজে নিয়েছি, আর তাতে ঠকাচ্ছি কাকে? যে চাল আমিও চালি, সেই চালের জন্য কেউ শাস্তি পেয়েছে শুনলে আমি কি সাবধান হই, নাকি স্বস্তি পাই যে আমি এখনো ধরা পড়িনি? গল্পটা উপদেশ কেবল আল্লাহভীরুদের জন্য: আমি কোন রকম পাঠক, আর অন্য রকম হলে আমার সপ্তাহটা কেমন আলাদা দেখাত?"
          },
          {
            "en": "What day, or what limit, has Allah set apart in my life that I have quietly renegotiated with myself? The ones who forbade the evil were saved: is there a wrong around me that I have decided is not my business, and what is the smallest honest thing I could say about it this week, to whom, and when?",
            "bn": "আল্লাহ আমার জীবনে কোন দিন, বা কোন সীমা, আলাদা করে রেখেছেন যা আমি নিজের সাথে চুপচাপ নতুন করে দরকষাকষি করে নিয়েছি? যারা মন্দ থেকে নিষেধ করেছিল তাদের বাঁচানো হয়েছিল: আমার আশপাশে এমন কোনো অন্যায় কি আছে যা আমি ঠিক করে নিয়েছি আমার ব্যাপার নয়, আর এই সপ্তাহে তা নিয়ে সবচেয়ে ছোট সৎ কথাটা কী বলতে পারি, কাকে, কখন?"
          }
        ]
      }
    ]
  },
  "2:74": {
    "sections": [
      {
        "h": {
          "en": "After the Dead Man Rose",
          "bn": "মৃত লোকটা জেগে ওঠার পর"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and from 2:40 onward it addresses the Children of Israel through a long chain of reminders, most opened with 'and when'. The story of the cow runs from 2:67 to 2:73: a killing, a dispute, a command to sacrifice, the questions that made the command harder than it needed to be, and finally the slain man struck with part of the animal so that Allah shows how He brings the dead to life. 2:73 closes with the purpose of the whole scene, 'that you might reason'. Our verse records what came instead of reasoning.",
            "bn": "সূরা বাকারা মাদানি সূরা। 2:40 আয়াত থেকে বানী ইসরাঈলকে ডেকে একের পর এক স্মরণ করিয়ে দেওয়া শুরু হয়, বেশিরভাগের শুরুতে ‘আর যখন’। গরুর ঘটনা চলে 2:67 থেকে 2:73 পর্যন্ত: একটা খুন, দোষারোপ, কুরবানির হুকুম, প্রশ্নের পর প্রশ্ন করে সেই হুকুমকে অকারণে কঠিন বানানো, আর শেষে গরুর একটা অংশ দিয়ে নিহতকে আঘাত করা। আল্লাহ দেখালেন তিনি মৃতকে কীভাবে জীবিত করেন। 2:73 আয়াত শেষ হয় গোটা দৃশ্যের উদ্দেশ্য দিয়ে: ‘যেন তোমরা বোঝো’। বোঝার বদলে যা এল, আমাদের আয়াত তারই খবর দেয়।"
          },
          {
            "en": "The word thumma, 'then', opens the verse and carries the rebuke inside it: after that, after a dead man rose in front of you, your hearts hardened. 2:75 then turns from the Israelites to the believers and asks whether they still hope such people will believe, when a party among them distorted the word of Allah after understanding it. The verse therefore stands between a miracle and a warning to Muslims. It describes a heart that signs no longer reach, and then tells the believers what to expect from it. No occasion of revelation is reported for it; it belongs to the sequence.",
            "bn": "আয়াত শুরু হয় ‘সুম্মা’ শব্দে, ‘তারপর’। ধমকটা এই একটা শব্দের ভেতরেই: এর পরেও, চোখের সামনে মৃত মানুষ উঠে দাঁড়ানোর পরেও, তোমাদের হৃদয় শক্ত হয়ে গেল। এরপর 2:75 আয়াত বানী ইসরাঈল থেকে মুখ ফিরিয়ে মুমিনদের জিজ্ঞেস করে, তোমরা কি এখনো আশা কর এরা ঈমান আনবে? অথচ এদের একদল আল্লাহর কথা বুঝে নেওয়ার পরও বিকৃত করত। তাই আয়াতটা দাঁড়িয়ে আছে এক মুজিযা আর মুসলমানদের প্রতি এক সতর্কবার্তার মাঝখানে। প্রথমে এমন এক হৃদয়ের ছবি, নিদর্শন যাকে আর ছোঁয় না। তারপর মুমিনদের বলে দেওয়া, এমন হৃদয়ের কাছে কী আশা করা যায়। এর কোনো আলাদা শানে নুযুল বর্ণিত নেই, এটা ধারাবাহিকতার অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Qasat, Hijarah, Yatafajjar",
          "bn": "কাসাত, হিজারা, ইয়াতাফাজ্জার"
        },
        "p": [
          {
            "en": "Qasat comes from the root q-s-w. Ar-Raghib in al-Mufradat explains qaswah as coarseness of the heart, the quality of a stone that is hard and dry, and Arabic uses the same root for a hard stone and a hard heart, carrying it from the stone to the heart. The verse then names hijarah, stones, the plural of hajar, and adds aw ashaddu qaswah, 'or harder in hardness'. Ibn Kathir records that the scholars agreed that 'or' here does not express doubt. The phrase is a measurement, and the measurement finds the heart to be the harder of the two.",
            "bn": "‘কাসাত’ এসেছে ক-স-ও মূল থেকে। রাগিব ইসফাহানি আল-মুফরাদাতে ‘কাসওয়া’র মানে দিয়েছেন হৃদয়ের রুক্ষতা, শুকনো শক্ত পাথরের যে গুণ। আরবিতে শক্ত পাথর আর শক্ত হৃদয়, দুটোর জন্যই একই মূল ব্যবহার হয়। শব্দটা পাথর থেকে হৃদয়ে এসেছে। এরপর আয়াত বলে ‘হিজারা’, পাথরসমূহ, ‘হাজার’ শব্দের বহুবচন। তার সাথে যোগ করে ‘আও আশাদ্দু কাসওয়া’, ‘কিংবা কাঠিন্যে আরও শক্ত’। ইবনে কাসীর লিখেছেন, আলেমরা একমত যে এখানে ‘কিংবা’ কোনো সন্দেহ বোঝায় না। এটা একটা মাপ। আর মাপ শেষে দেখা যায়, দুটোর মধ্যে হৃদয়টাই বেশি শক্ত।"
          },
          {
            "en": "Three verbs then describe what stones do. Yatafajjar, from f-j-r, is the same root as fajr, the dawn that bursts through the dark; rivers burst out of some stones. Yashshaqqaq, from sh-q-q, is to split, and water comes out of others. Yahbit, from h-b-t, is to fall down, and some fall min khashyatillah, from the fear of Allah. The sequence moves from the greatest response to the least: an outpouring, then a trickle, then a mere collapse. Even the smallest of the three is more than the hardened heart offered after it had watched a dead man rise.",
            "bn": "এরপর তিনটি ক্রিয়াপদ বলে পাথর কী করে। ‘ইয়াতাফাজ্জার’, ফ-জ-র মূল থেকে, ফজরের সেই একই মূল, যে ভোর অন্ধকার ফুঁড়ে বেরিয়ে আসে। কোনো কোনো পাথর থেকে নদী ফেটে বেরোয়। ‘ইয়াশশাক্কাক’, শ-ক-ক মূল থেকে, মানে ফেটে যাওয়া। কোনোটা ফাটে, পানি বের হয়। ‘ইয়াহবিত’, হ-ব-ত মূল থেকে, মানে নিচে পড়া। কোনোটা পড়ে ‘মিন খাশইয়াতিল্লাহ’, আল্লাহর ভয়ে। ক্রমটা নামছে বড় সাড়া থেকে ছোট সাড়ায়: প্রথমে স্রোত, তারপর ধারা, তারপর শুধু গড়িয়ে পড়া। এই তিনের সবচেয়ে ছোটটাও সেই হৃদয়ের চেয়ে বেশি, যে হৃদয় মৃত মানুষকে জেগে উঠতে দেখেও কিছুই দেয়নি।"
          },
          {
            "en": "Each of the three clauses is built on inna with the emphatic lam, 'indeed there are certainly some', so the Arabic insists three times that stones respond. The verse closes with wa ma Allahu bighafilin 'amma ta'malun, 'and Allah is not unaware of what you do', a sentence that returns in 2:85 at the end of the next passage about the same people. Hardness, the ending says, is not a private condition. A heart that shows no reaction to signs is still being watched by the One who sent the signs, and its stillness is itself something that it does.",
            "bn": "তিনটি বাক্যাংশের প্রতিটি গড়া হয়েছে ‘ইন্না’ আর জোর দেওয়ার ‘লাম’ দিয়ে: ‘নিশ্চয়ই এমন কিছু অবশ্যই আছে’। আরবি তিনবার জোর দিয়ে বলে, পাথর সাড়া দেয়। আয়াত শেষ হয় ‘ওয়া মাল্লাহু বিগাফিলিন আম্মা তা’মালুন’ দিয়ে, ‘তোমরা যা কর আল্লাহ তা থেকে বেখেয়াল নন’। একই বাক্য ফিরে আসে 2:85 আয়াতে, এই একই লোকদের নিয়ে পরের অংশের শেষে। এই শেষ কথাটা বলছে, কাঠিন্য কারও ব্যক্তিগত ব্যাপার নয়। নিদর্শনের সামনে যে হৃদয় কোনো সাড়া দেখায় না, নিদর্শন যিনি পাঠিয়েছেন তিনি সেটাও দেখছেন। তার নিশ্চুপ থাকাটাও তার একটা কাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Mufassirun Read It",
          "bn": "মুফাসসিররা কীভাবে পড়েছেন"
        },
        "p": [
          {
            "en": "At-Tabari sets out the readings of aw ashaddu. Some took 'or' as 'and': like stones and harder. Some took it as 'rather': like stones, no, harder than that. He himself preferred a third: the hearts are of two kinds, some like stone and some harder, so that the verse describes a whole people without claiming that every heart among them is the same. Ibn Kathir accepts at-Tabari's preference and finds the same pattern in 2:17 and 2:19, where the hypocrites are likened first to a man who kindled a fire and then to people caught in a rainstorm, two pictures for two groups.",
            "bn": "তাবারি ‘আও আশাদ্দু’র পাঠগুলো সাজিয়ে দেখান। কেউ ‘কিংবা’কে নিয়েছেন ‘এবং’ অর্থে: পাথরের মতো এবং তার চেয়েও শক্ত। কেউ নিয়েছেন ‘বরং’ অর্থে: পাথরের মতো, না, তার চেয়েও শক্ত। তিনি নিজে পছন্দ করেছেন তৃতীয়টা: হৃদয়গুলো দুই রকম, কিছু পাথরের মতো, কিছু তার চেয়েও শক্ত। ফলে আয়াত একটা গোটা জাতির ছবি আঁকে, কিন্তু দাবি করে না যে তাদের প্রতিটি হৃদয় এক রকম। ইবনে কাসীর তাবারির এই পছন্দ মেনে নেন এবং একই ধরন খুঁজে পান 2:17 আর 2:19 আয়াতে। সেখানে মুনাফিকদের তুলনা প্রথমে আগুন জ্বালানো এক লোকের সাথে, তারপর ঝড়বৃষ্টিতে আটকে পড়া লোকদের সাথে। দুই দলের জন্য দুটো ছবি।"
          },
          {
            "en": "On the stones that fall from the fear of Allah, the commentators divide. Ibn Kathir reports that some held the phrase to be a figure of speech. Ar-Razi and al-Qurtubi, he says, saw no need for that, since Allah creates in stones whatever awareness He wills, and Ibn Kathir supports them with 33:72, where the mountains shrink from carrying the trust, and 17:44, where everything glorifies Him. Ibn Ishaq narrates from Ibn Abbas (RA) the plainest gloss of all: some stones are softer than your hearts, for they acknowledge the truth that you are being called to.",
            "bn": "আল্লাহর ভয়ে যে পাথর পড়ে যায়, তা নিয়ে মুফাসসিররা দুই ভাগ। ইবনে কাসীর জানান, কেউ কেউ এটাকে নিছক কথার অলংকার ধরেছেন। কিন্তু রাযি আর কুরতুবি, তাঁর ভাষায়, এমন ব্যাখ্যার দরকার দেখেননি। আল্লাহ পাথরের ভেতর যে বোধ চান তা সৃষ্টি করেন। ইবনে কাসীর তাঁদের পক্ষে দাঁড় করান 33:72 আয়াতকে, যেখানে আমানত বহন করতে পাহাড় পিছিয়ে যায়, আর 17:44 আয়াতকে, যেখানে সবকিছু তাঁর তাসবিহ করে। ইবনে ইসহাক ইবনে আব্বাস (রাঃ) থেকে সবচেয়ে সোজা ব্যাখ্যাটা এনেছেন: কিছু পাথর তোমাদের হৃদয়ের চেয়ে নরম, কারণ যে হকের দিকে তোমাদের ডাকা হচ্ছে, তারা তা মেনে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Stone in Makkah",
          "bn": "মক্কার এক পাথর"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches to this verse a report in Sahih Muslim from Jabir ibn Samurah (RA): the Messenger of Allah ﷺ said, 'I know a stone in Makkah that used to greet me with salam before I was sent; I recognise it even now' (Muslim 2277). He cites it to show that the fear of stones in the verse is real. A stone once greeted a prophet. A heart that has heard the Quran for years and gives no greeting back has, in the verse's own terms, fallen below that stone.",
            "bn": "ইবনে কাসীর এই আয়াতের সাথে সহিহ মুসলিমের একটি হাদিস জুড়ে দেন। জাবির ইবনে সামুরা (রাঃ) বলেন, রাসূলুল্লাহ ﷺ বলেছেন, ‘মক্কায় এমন এক পাথরকে আমি চিনি, নবুওয়াত পাওয়ার আগে সে আমাকে সালাম দিত; এখনো আমি তাকে চিনি’ (মুসলিম ২২৭৭)। তিনি এটা আনেন এই দেখাতে যে আয়াতে পাথরের ভয় সত্যিকারের। একটা পাথর একদিন এক নবীকে সালাম দিয়েছিল। বছরের পর বছর কুরআন শুনেও যে হৃদয় কোনো সালাম ফেরায় না, আয়াতের নিজের হিসাবে সে ওই পাথরের নিচে নেমে গেছে।"
          },
          {
            "en": "Muslim also narrates from Ibn Mas'ud (RA) that between the Companions' acceptance of Islam and Allah's reproach in 57:16, the verse about hearts hardening over a long term, there passed only four years (Muslim 3027). Nothing in that report is about the Children of Israel; it is about us. At-Tirmidhi carries a report from Ibn Umar (RA) that much talk without the remembrance of Allah hardens the heart, but at-Tirmidhi himself graded it hasan gharib (at-Tirmidhi 2411) and its chain has been questioned, so this article does not rest on it. The two reports in Muslim are enough.",
            "bn": "মুসলিমে ইবনে মাসউদ (রাঃ) থেকে আরেকটি বর্ণনা আছে: সাহাবিদের ইসলাম কবুল আর 57:16 আয়াতে আল্লাহর তিরস্কারের মাঝে ব্যবধান ছিল মাত্র চার বছর (মুসলিম ৩০২৭)। দীর্ঘ সময়ে হৃদয় শক্ত হওয়ার সেই আয়াত। এই বর্ণনায় বানী ইসরাঈলের কথা নেই, কথাটা আমাদের নিয়ে। তিরমিযিতে ইবনে উমর (রাঃ) থেকে একটি বর্ণনা আছে, আল্লাহর জিকির ছাড়া বেশি কথা হৃদয় শক্ত করে। কিন্তু তিরমিযি নিজেই একে ‘হাসান গরিব’ বলেছেন (তিরমিযি ২৪১১), আর এর সনদ নিয়ে প্রশ্ন তোলা হয়েছে। তাই এই লেখা তার ওপর ভর করেনি। মুসলিমের দুটো বর্ণনাই যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Sisters in the Quran",
          "bn": "কুরআনে এর সহোদর আয়াত"
        },
        "p": [
          {
            "en": "57:16 is the verse Ibn Kathir reads beside this one. It asks the believers whether the time has not come for their hearts to humble at the remembrance of Allah, and warns them not to become like the earlier people of the Book whose hearts hardened when a long period passed over them. 5:13 names a cause: the breaking of the covenant, after which Allah made their hearts hard. 6:43 shows the same stone in another people. When the punishment came they did not humble themselves; their hearts hardened, and Shaytan made their deeds attractive to them.",
            "bn": "ইবনে কাসীর এই আয়াতের পাশে রাখেন 57:16 আয়াতকে। সেখানে মুমিনদের জিজ্ঞেস করা হয়, আল্লাহর জিকিরে তাদের হৃদয় বিনীত হওয়ার সময় কি এখনো আসেনি? আর সতর্ক করা হয়, আগের আহলে কিতাবের মতো যেন তারা না হয়, দীর্ঘ সময় পেরিয়ে যাওয়ায় যাদের হৃদয় শক্ত হয়ে গিয়েছিল। 5:13 আয়াত একটা কারণ ধরিয়ে দেয়: অঙ্গীকার ভাঙা, যার পরে আল্লাহ তাদের হৃদয় শক্ত করে দিলেন। 6:43 আয়াত একই পাথর দেখায় অন্য এক জাতির ভেতর। শাস্তি এলেও তারা নত হলো না। তাদের হৃদয় শক্ত হয়ে গেল, আর শয়তান তাদের কাজগুলো তাদের চোখে সুন্দর করে দিল।"
          },
          {
            "en": "The opposite condition has its own verses. 39:23 describes the skins of those who fear their Lord shivering at the Book, then their skins and hearts relaxing at the remembrance of Allah: awe, then rest, in a heart still soft enough to move. 8:2 makes that movement the definition of a believer: when Allah is mentioned their hearts tremble, and when His verses are recited their faith grows. Read together, the sisters say that a heart's response to reminder is not a passing mood but a diagnosis of its condition.",
            "bn": "উল্টো অবস্থার জন্যও আয়াত আছে। 39:23 আয়াতে যারা তাদের রবকে ভয় করে, কিতাব শুনে তাদের গা শিউরে ওঠে, তারপর আল্লাহর জিকিরে তাদের গা আর হৃদয় শান্ত হয়। আগে ভয়, তারপর স্বস্তি, এমন এক হৃদয়ে যা নড়ার মতো নরম আছে। 8:2 আয়াত এই নড়াটাকেই মুমিনের সংজ্ঞা বানিয়ে দেয়: আল্লাহর নাম নিলে তাদের হৃদয় কেঁপে ওঠে, তাঁর আয়াত পড়া হলে তাদের ঈমান বাড়ে। সব মিলিয়ে সহোদর আয়াতগুলো বলছে, নসিহতে হৃদয় কেমন সাড়া দেয়, সেটা ক্ষণিকের মেজাজ নয়। সেটা হৃদয়ের অবস্থার রিপোর্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Checking Your Own Heart",
          "bn": "নিজের হৃদয় পরখ করা"
        },
        "p": [
          {
            "en": "The verse is a mirror, not a window; it is not for looking at anyone else. Take the three stones as a test. When you hear a verse that once made you weep, is there an outpouring, a trickle, a small collapse, or nothing? When a funeral passes, when a warning lands, when you are shown a mercy you did not earn, what moves inside? The verse does not ask for a performance of tears. It asks whether anything still answers, because a heart that has seen signs and stayed still has already begun to set.",
            "bn": "এই আয়াত আয়না, জানালা নয়। অন্য কাউকে দেখার জন্য এটা নয়। তিনটি পাথরকে পরীক্ষা হিসেবে নিন। যে আয়াত শুনে একদিন আপনার চোখে পানি এসেছিল, আজ সেটা শুনলে কী হয়? স্রোত, ধারা, একটু গড়িয়ে পড়া, নাকি কিছুই না? জানাজা সামনে দিয়ে গেলে, কোনো সতর্কবাণী গায়ে লাগলে, না চাইতেই কোনো রহমত পেলে ভেতরে কী নড়ে? আয়াত কান্নার অভিনয় চায় না। চায় শুধু জানতে, ভেতরে কিছু এখনো সাড়া দেয় কি না। কারণ নিদর্শন দেখেও যে হৃদয় স্থির রইল, সে জমতে শুরু করে দিয়েছে।"
          },
          {
            "en": "The remedies are the ones the sister verses name. Recite a short passage slowly each day with the intention that it reach you, not merely pass over you. Keep a fixed portion of dhikr, since 57:16 places softening at the remembrance of Allah. Guard the covenant in small things, since 5:13 links hardness to broken promises. Give something away when your heart feels closed, because tightness and hardness travel together. And treat any day in which nothing moved you as a warning to act on, not as an ordinary day.",
            "bn": "প্রতিকার সেগুলোই, যা সহোদর আয়াতগুলো নাম ধরে বলে দিয়েছে। রোজ ছোট একটা অংশ ধীরে তিলাওয়াত করুন, এই নিয়তে যে কথাটা আপনার ভেতরে পৌঁছাক, শুধু উপর দিয়ে চলে না যাক। জিকিরের একটা বাঁধা পরিমাণ রাখুন, কারণ 57:16 আয়াত নরম হওয়াকে রেখেছে আল্লাহর জিকিরের কাছে। ছোট ছোট ওয়াদা রক্ষা করুন, কারণ 5:13 আয়াত কাঠিন্যকে জুড়েছে ওয়াদা ভাঙার সাথে। হৃদয় বন্ধ লাগলে কিছু দান করুন, কারণ কৃপণতা আর কাঠিন্য একসাথে চলে। আর যে দিন কিছুই আপনাকে নাড়ায়নি, সে দিনটাকে সাধারণ দিন ভাববেন না। সেটাকে সতর্কবার্তা ধরে কাজে নামুন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Refuge From the Unhumbled Heart",
          "bn": "অবিনীত হৃদয় থেকে পানাহ"
        },
        "p": [
          {
            "en": "The Prophet ﷺ taught a du'a that names this disease. Muslim narrates from Zayd ibn Arqam (RA) that he used to say: 'O Allah, I seek refuge in You from knowledge that does not benefit, from a heart that does not humble itself, from a soul that is never satisfied, and from a supplication that is not answered' (Muslim 2722). The heart that does not humble itself is qalbin la yakhsha'. The du'a asks for the humbling, khushu', that the verse's stones show by falling from the fear of Allah: two words for one movement. The Sunnah puts into the believer's mouth a request against exactly what 2:74 describes.",
            "bn": "নবী ﷺ এমন এক দোয়া শিখিয়েছেন, যা এই রোগটার নাম ধরে ডাকে। মুসলিমে যায়েদ ইবনে আরকাম (রাঃ) বলেন, তিনি বলতেন: ‘হে আল্লাহ, আমি আপনার কাছে পানাহ চাই এমন ইলম থেকে যা উপকার দেয় না, এমন হৃদয় থেকে যা বিনীত হয় না, এমন নফস থেকে যা কখনো তৃপ্ত হয় না, আর এমন দোয়া থেকে যা কবুল হয় না’ (মুসলিম ২৭২২)। যে হৃদয় বিনীত হয় না, আরবিতে ‘কালবিন লা ইয়াখশা’। দোয়াটা চায় সেই নত হওয়া, সেই ‘খুশু’, যা আয়াতের পাথর দেখায় আল্লাহর ভয়ে গড়িয়ে পড়ে। দুটো শব্দ, নড়াটা একটাই। 2:74 আয়াত যে অবস্থার ছবি আঁকে, সুন্নাহ ঠিক তার বিরুদ্ধেই একটা চাওয়া মুমিনের মুখে তুলে দেয়।"
          },
          {
            "en": "A shorter plea can be drawn from the verse's own words; it is composed here, not narrated: 'O Allah, do not let my heart become like stone or harder. Make it a heart from which rivers of remembrance burst, that splits open at Your Book, and that falls down at Your fear. You are not unaware of what I do, so make what I do pleasing to You.' Say it after the Sunnah du'a rather than instead of it, and say it before the first reading of the Quran each day.",
            "bn": "আয়াতের নিজের শব্দ থেকে আরও ছোট একটা মিনতি বানানো যায়। এটা রচিত, কোনো বর্ণনা নয়: ‘হে আল্লাহ, আমার হৃদয়কে পাথরের মতো বা তার চেয়ে শক্ত হতে দেবেন না। একে এমন হৃদয় বানান, যা থেকে জিকিরের নদী বেরোয়, যা আপনার কিতাবে ফেটে যায়, যা আপনার ভয়ে নুয়ে পড়ে। আমি যা করি আপনি তা থেকে বেখেয়াল নন, তাই আমার কাজকে আপনার পছন্দের বানিয়ে দিন।’ সুন্নাহর দোয়ার বদলে নয়, তার পরে এটা বলুন। আর বলুন রোজ কুরআনের প্রথম তিলাওয়াতের আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "When did a verse of the Quran last stop me where I stood, and what did I do in the hour after it? If my heart were one of the stones in this verse, which of the three would it be today, and would I even know if it were none of them? The verse says the hearts hardened after that, after a sign. What signs have I been given in my own life that I have already filed away as ordinary events?",
            "bn": "কুরআনের কোনো আয়াত শেষ কবে আমাকে থমকে দিয়েছিল, আর তার পরের এক ঘণ্টায় আমি কী করেছিলাম? আমার হৃদয় যদি এই আয়াতের পাথরগুলোর একটা হতো, আজ সেটা তিনের কোনটা হতো, আর কোনোটাই না হলে আমি কি তা টের পেতাম? আয়াত বলছে, নিদর্শনের পরে হৃদয় শক্ত হলো। আমার নিজের জীবনে কোন কোন নিদর্শন আমি পেয়েছি, যেগুলো এরই মধ্যে সাধারণ ঘটনা বলে সরিয়ে রেখেছি?"
          },
          {
            "en": "Which small covenant with Allah, a promise about my prayer, my tongue, or my earnings, have I quietly stopped keeping, and does 5:13 describe what followed inside me? What would it look like this week to sit deliberately under the rain of remembrance, in the rows of prayer and in front of an open mushaf, rather than to wait for my heart to soften on its own, and who, in my house, would notice first if it did?",
            "bn": "আল্লাহর সাথে ছোট কোন ওয়াদাটা, নামায নিয়ে, জবান নিয়ে বা রোজগার নিয়ে, আমি চুপচাপ রাখা ছেড়ে দিয়েছি, আর তারপর আমার ভেতরে যা ঘটেছে, 5:13 আয়াত কি তারই বর্ণনা? হৃদয় নিজে নিজে নরম হবে বলে বসে না থেকে, এ সপ্তাহে ইচ্ছা করে জিকিরের বৃষ্টির নিচে বসলে, নামাযের কাতারে আর খোলা মুসহাফের সামনে, তার চেহারা কেমন হবে, আর সত্যিই নরম হলে আমার ঘরে সবার আগে কে টের পাবে?"
          }
        ]
      }
    ]
  },
  "2:83": {
    "sections": [
      {
        "h": {
          "en": "A Covenant Read Back to Them",
          "bn": "তাদেরই সামনে পড়ে শোনানো অঙ্গীকার"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and the long address to the Children of Israel that began at 2:40 has just passed through their claim in 2:80 that the Fire would touch them only for numbered days. 2:81 and 2:82 answer that claim with a rule that applies to everyone: whoever earns evil and is encircled by his sin belongs to the Fire, and whoever believes and does righteous deeds belongs to Paradise. Our verse then opens a new reminder with 'and when', and this time the reminder is a list of duties.",
            "bn": "সূরা বাকারা মাদানি সূরা। 2:40 আয়াত থেকে বানী ইসরাঈলকে যে লম্বা সম্বোধন শুরু হয়েছে, তা সবে পেরিয়ে এসেছে 2:80 আয়াতের সেই দাবি: আগুন তাদের ছোঁবে শুধু গোনা কয়েকটা দিন। 2:81 আর 2:82 আয়াত সেই দাবির জবাব দেয় এমন এক নিয়মে, যা সবার জন্য খাটে। যে গুনাহ কামায় আর গুনাহ যাকে ঘিরে ফেলে, সে জাহান্নামি। যে ঈমান আনে আর নেক আমল করে, সে জান্নাতি। এরপর আমাদের আয়াত ‘আর যখন’ বলে নতুন একটা স্মরণ শুরু করে। এবার স্মরণটা একটা দায়িত্বের তালিকা।"
          },
          {
            "en": "The list is followed at once, in 2:84, by a second covenant about blood and homes, and in 2:85 by the charge that they believed in part of the Book and rejected part. So 2:83 is the first of a pair, the general terms before the specific breach. No occasion of revelation is reported for it; its place is in the sequence of reminders. Its final clause, 'then you turned away, except a few of you, and you were refusing', is the verdict that the next two verses will document in detail.",
            "bn": "তালিকার ঠিক পরেই, 2:84 আয়াতে, আসে দ্বিতীয় অঙ্গীকার, রক্ত আর ঘরবাড়ি নিয়ে। তারপর 2:85 আয়াতে অভিযোগ: তোমরা কিতাবের কিছু অংশ মানো, কিছু অংশ অস্বীকার কর। তাই 2:83 আয়াত একটা জোড়ার প্রথমটা। আগে সাধারণ শর্ত, পরে নির্দিষ্ট ভঙ্গ। এর কোনো আলাদা শানে নুযুল বর্ণিত নেই, এর জায়গা স্মরণের এই ধারার ভেতরে। এর শেষ কথাটা, ‘তারপর অল্প কয়েকজন ছাড়া তোমরা মুখ ফিরিয়ে নিলে, আর তোমরা অস্বীকারকারী ছিলে’, একটা রায়। পরের দুই আয়াত সেই রায়ের দলিল খুঁটিয়ে দেখায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Mithaq, Ihsan, Husna",
          "bn": "মিসাক, ইহসান, হুসনা"
        },
        "p": [
          {
            "en": "Mithaq comes from the root w-th-q, which is the language of tying something fast; a wathaq is a bond or fetter, and a mithaq is a promise pulled tight so that it cannot slip. The Quran uses the word for what Allah takes from prophets and from peoples, never for a casual undertaking. When the verse says the mithaq was taken from the Children of Israel, it means they were bound, and the binding was of the kind that leaves no room to say the terms were unclear.",
            "bn": "‘মিসাক’ এসেছে ও-স-ক মূল থেকে, শক্ত করে বাঁধার ভাষা। ‘ওয়াসাক’ মানে বাঁধন বা শিকল, আর ‘মিসাক’ এমন ওয়াদা, যা এমন টান দিয়ে বাঁধা যে খুলে যাওয়ার উপায় নেই। কুরআন এই শব্দ ব্যবহার করে আল্লাহ নবীদের আর জাতিগুলোর কাছ থেকে যা নেন তার জন্য, হালকা কোনো কথার জন্য নয়। আয়াত যখন বলে বানী ইসরাঈলের কাছ থেকে মিসাক নেওয়া হয়েছিল, মানে তারা বাঁধা পড়েছিল। আর সে বাঁধন এমন যে ‘শর্ত পরিষ্কার ছিল না’ বলার কোনো জায়গা থাকে না।"
          },
          {
            "en": "Ihsan, from h-s-n, is more than being kind; it is doing a thing well, to the point of beauty, and here it stands in the accusative, ihsanan, with its verb left unspoken, as if to say 'and towards parents, excellence', so that the noun carries the whole weight of the command. The same construction returns in 17:23 and 4:36. Then the verse says qulu lin-nasi husna. In the reading of Hafs the word is husnan, the noun 'goodness' itself; in the reading of Hamzah and al-Kisa'i it is hasanan, 'a good word'.",
            "bn": "‘ইহসান’, হ-স-ন মূল থেকে, শুধু দয়া নয়। কোনো কাজ ভালো করে করা, এত ভালো যে তা সুন্দর হয়ে ওঠে। এখানে শব্দটা ‘ইহসানান’ রূপে এসেছে, ক্রিয়াপদ উহ্য রেখে, যেন বলা হচ্ছে ‘আর মা-বাবার প্রতি, ইহসান’। ফলে হুকুমের পুরো ভার এই একটা শব্দের ওপর। একই গঠন ফিরে আসে 17:23 আর 4:36 আয়াতে। তারপর আয়াত বলে ‘কুলু লিন-নাসি হুসনা’। হাফসের পাঠে শব্দটা ‘হুসনান’, খোদ ‘ভালোত্ব’ নামের বিশেষ্য। হামযা আর কিসাঈর পাঠে ‘হাসানান’, ‘একটা ভালো কথা’।"
          },
          {
            "en": "Two features of the wording carry meaning. La ta'buduna illa Allah is a statement in form, 'you will not worship except Allah', yet it functions as a command; at-Tabari reads it as a prohibition in the form of a report, and az-Zamakhshari adds that this form is more forceful than a bare 'do not', because it treats the outcome as settled. And the verse begins by reporting about 'the Children of Israel' in the third person, then swings round to 'you turned away' in the second. The listeners who thought they were hearing history discover they are being addressed.",
            "bn": "শব্দবিন্যাসের দুটো দিক আলাদা মানে বহন করে। ‘লা তা’বুদুনা ইল্লাল্লাহ’ গঠনে একটা বিবৃতি, ‘তোমরা আল্লাহ ছাড়া কারও ইবাদত করবে না’, কিন্তু কাজ করে হুকুম হিসেবে। তাবারি একে পড়েছেন খবরের চেহারায় বলা নিষেধ হিসেবে, আর যামাখশারি যোগ করেছেন, এই চেহারা খালি ‘করো না’র চেয়ে জোরালো। কারণ তাতে ফলাফলকে ধরে নেওয়া হয় মীমাংসিত। আর আয়াতে প্রথমে বানী ইসরাঈলের কথা যেন দূর থেকে, তারপর ঘুরে সরাসরি তাদেরই: ‘তোমরা মুখ ফিরিয়ে নিলে’। যারা ভেবেছিল ইতিহাস শুনছে, তারা টের পায় কথাটা তাদেরই বলা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Order of the List",
          "bn": "তালিকার ক্রম"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the list as a ranking of rights. First is the right of Allah, that He be worshipped alone, the reason for which creation was made; then the rights of creatures, and foremost among them the parents. He observes that Allah habitually pairs the parents' right with His own, and cites 31:14, 'be grateful to Me and to your parents', and 17:23, where the same two duties open the same sentence. On 'speak good to people' he gives the plain sense, good words and lenience, and adds that commanding good and forbidding wrong are included within it.",
            "bn": "ইবনে কাসীর এই তালিকাকে পড়েন হকের ক্রম হিসেবে। সবার আগে আল্লাহর হক, একমাত্র তাঁরই ইবাদত, যে কারণে সৃষ্টি হয়েছে। তারপর সৃষ্টির হক, আর তার শীর্ষে মা-বাবা। তিনি খেয়াল করেন, আল্লাহ সাধারণত মা-বাবার হককে নিজের হকের সাথে জুড়ে বলেন। প্রমাণে আনেন 31:14 আয়াত, ‘আমার শোকর কর আর তোমার মা-বাবার’, আর 17:23 আয়াত, যেখানে একই দুই দায়িত্ব একই বাক্যের শুরুতে। ‘মানুষের সাথে ভালো কথা বল’ প্রসঙ্গে তিনি সোজা অর্থই দেন, ভালো কথা আর নরম ব্যবহার। সাথে যোগ করেন, সৎ কাজের আদেশ আর অন্যায়ের নিষেধও এর ভেতরে পড়ে।"
          },
          {
            "en": "Al-Hasan al-Basri, quoted by Ibn Kathir, widened the good word further: enjoining good, forbidding wrong, patience, and pardon, every kind of conduct Allah is pleased with. As-Sa'di explains the reason the command takes this shape: a person cannot reach everyone with his wealth, so Allah commanded the one form of ihsan that can reach every creature, goodness in speech. At-Tabari records both readings, husnan and hasanan, and treats their sense as close. The difference between the commentators is one of scope, not of substance: how far 'good' stretches, and whether it names the word or the manner.",
            "bn": "হাসান বসরি, ইবনে কাসীরের বরাতে, ভালো কথার পরিধি আরও বাড়িয়েছেন: সৎ কাজের আদেশ, অন্যায়ের নিষেধ, সবর আর মাফ, আল্লাহ যত আচরণে খুশি হন সবই। সাদি বুঝিয়েছেন হুকুমটা এই চেহারা কেন নিল। মানুষ নিজের সম্পদ দিয়ে সবার কাছে পৌঁছাতে পারে না, তাই আল্লাহ এমন এক ইহসানের হুকুম দিলেন, যা প্রতিটি সৃষ্টির কাছে পৌঁছাতে পারে। সেটা কথার ইহসান। তাবারি দুটো পাঠই লিপিবদ্ধ করেছেন, ‘হুসনান’ আর ‘হাসানান’, আর দুটোর অর্থ কাছাকাছি ধরেছেন। মুফাসসিরদের মাঝে যে তফাত, তা পরিধির, মূল কথার নয়: ‘ভালো’ কতদূর ছড়ায়, আর তা কথাটার নাম নাকি বলার ধরনের।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer on Time, a Cheerful Face",
          "bn": "সময়মতো নামায, হাসিমুখ"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches to the parents' clause the report of Ibn Mas'ud (RA) in the two Sahihs. In al-Bukhari's wording: I asked the Prophet ﷺ, which deed is dearest to Allah? He said, prayer at its proper time. I asked, then which? He said, kindness to parents. I asked, then which? He said, jihad in the way of Allah (al-Bukhari 527). The hadith places the two duties the verse places together, worship and parents, side by side at the top, and in the same order the verse gives them.",
            "bn": "মা-বাবার শর্তটার সাথে ইবনে কাসীর জুড়ে দেন দুই সহিহে থাকা ইবনে মাসউদ (রাঃ)-এর বর্ণনা। বুখারির ভাষায়: আমি নবী ﷺ-কে জিজ্ঞেস করলাম, কোন আমল আল্লাহর কাছে সবচেয়ে প্রিয়? তিনি বললেন, সময়মতো নামায। আমি বললাম, তারপর কোনটা? বললেন, মা-বাবার সাথে সদ্ব্যবহার। আমি বললাম, তারপর কোনটা? বললেন, আল্লাহর পথে জিহাদ (বুখারি ৫২৭)। আয়াত যে দুই দায়িত্বকে পাশাপাশি রেখেছে, ইবাদত আর মা-বাবা, হাদিস সে দুটোকেই সবার উপরে পাশাপাশি রাখে। আর ক্রমটাও আয়াতের ক্রম।"
          },
          {
            "en": "To 'speak good to people' Ibn Kathir joins a report of Abu Dharr (RA). In Muslim's wording, the Prophet ﷺ said: do not belittle any good deed, even meeting your brother with a cheerful face (Muslim 2626). Ibn Kathir notes that the verse commands good speech immediately after commanding good treatment, so that two kinds of conduct are named together, words and deeds. The hadith lowers the bar to where anyone can reach it. A face is speech before the mouth opens, and the covenant counts it.",
            "bn": "‘মানুষের সাথে ভালো কথা বল’ অংশের সাথে ইবনে কাসীর জুড়ে দেন আবু যর (রাঃ)-এর বর্ণনা। মুসলিমের ভাষায় নবী ﷺ বলেছেন: ‘কোনো নেক কাজকে ছোট মনে করো না, হোক তা তোমার ভাইয়ের সাথে হাসিমুখে দেখা করা’ (মুসলিম ২৬২৬)। ইবনে কাসীর লক্ষ করেন, আয়াত ভালো ব্যবহারের হুকুমের ঠিক পরেই ভালো কথার হুকুম দেয়। ফলে দুই রকম আচরণ একসাথে নাম পায়, কথা আর কাজ। হাদিস মানদণ্ডটা এত নিচে নামিয়ে আনে যে যে কেউ পৌঁছাতে পারে। মুখ খোলার আগেই চেহারা একটা কথা। আর অঙ্গীকার সেটাও গোনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Sisters in the Quran",
          "bn": "কুরআনে এর সহোদর আয়াত"
        },
        "p": [
          {
            "en": "17:23 gives the same opening pair, worship none but Him and treat parents well, then turns it into detail: not even 'uff' to them in their old age, and a noble word instead. 4:36 is the sister Ibn Kathir names outright, since it repeats the verse's list to this ummah and lengthens it with neighbours, the companion at one's side, the traveller and those in one's charge; what was a covenant with Israel is, in 4:36, a command to us. 31:14 explains why parents come straight after Allah: the mother carried him in weakness upon weakness.",
            "bn": "17:23 আয়াতে একই প্রথম জোড়া, তিনি ছাড়া কারও ইবাদত নয় আর মা-বাবার সাথে সদ্ব্যবহার, তারপর সেটা খুঁটিনাটিতে নামে: বার্ধক্যে তাদের ‘উফ’ পর্যন্ত বলা যাবে না, বলতে হবে সম্মানের কথা। 4:36 আয়াতকে ইবনে কাসীর সরাসরি সহোদর বলে নাম নেন। কারণ সেটা এই আয়াতের তালিকা এই উম্মতের সামনে আবার পড়ে আর লম্বা করে: প্রতিবেশী, পাশের সাথী, মুসাফির আর অধীনস্থরা। বানী ইসরাঈলের সাথে যা ছিল অঙ্গীকার, 4:36 আয়াতে তা আমাদের প্রতি হুকুম। 31:14 আয়াত বুঝিয়ে দেয় আল্লাহর ঠিক পরেই মা-বাবা কেন: মা তাকে বহন করেছেন দুর্বলতার ওপর দুর্বলতা নিয়ে।"
          },
          {
            "en": "2:177 restates most of the same list as the definition of righteousness itself: belief, giving wealth despite love of it to relatives, orphans, the needy and the traveller, establishing prayer, giving zakah, and keeping promises when they are made. That last clause is the one 2:83 says was broken. 16:90 gathers the whole into three words, justice, ihsan and giving to relatives, and calls it an admonition. Together the sisters show that the covenant of 2:83 was never a special burden on one people; it is the standing shape of a believing life.",
            "bn": "2:177 আয়াত প্রায় একই তালিকা আবার বলে, এবার খোদ নেকির সংজ্ঞা হিসেবে: ঈমান, আত্মীয়, ইয়াতিম, মিসকিন আর মুসাফিরকে সম্পদ দেওয়া, নামায কায়েম, যাকাত আদায়, আর ওয়াদা করলে তা রক্ষা করা। এই শেষ কথাটাই 2:83 আয়াত বলছে ভাঙা হয়েছিল। 16:90 আয়াত পুরোটাকে তিন শব্দে জড়ো করে, ইনসাফ, ইহসান আর আত্মীয়কে দেওয়া, আর একে বলে নসিহত। সব মিলিয়ে সহোদর আয়াতগুলো দেখায়, 2:83 আয়াতের অঙ্গীকার কোনো এক জাতির ওপর বিশেষ বোঝা ছিল না। মুমিনের জীবনের স্থায়ী চেহারাটাই এমন।"
          }
        ]
      },
      {
        "h": {
          "en": "Working Through the Terms",
          "bn": "শর্তগুলো ধরে ধরে কাজ"
        },
        "p": [
          {
            "en": "Read the verse as your own covenant and take one term a day over the coming days. Worship none but Allah: on the first day notice what you feared, hoped in or obeyed more readily than Him. Parents: on the second, call or visit, and if they have died, pray for them and give something in their name. Relatives, orphans, the needy: on the next three days, one each, find a name, not a category, and do something for that person that costs you. Then good speech, then prayer and zakah. The point is to find where you have quietly turned away.",
            "bn": "আয়াতটাকে নিজের অঙ্গীকার হিসেবে পড়ুন আর কয়েক দিন ধরে রোজ একটা শর্ত নিন। আল্লাহ ছাড়া কারও ইবাদত নয়: প্রথম দিন খেয়াল করুন, তাঁর চেয়ে বেশি সহজে আপনি কাকে ভয় পেয়েছেন, কার কাছে আশা করেছেন, কার কথা মেনেছেন। মা-বাবা: দ্বিতীয় দিন ফোন করুন বা দেখা করুন, আর তাঁরা না থাকলে দোয়া করুন ও তাঁদের নামে কিছু দান করুন। আত্মীয়, ইয়াতিম, মিসকিন: পরের তিন দিন, প্রত্যেকের জন্য এক দিন, একটা নাম খুঁজুন, কোনো শ্রেণি নয়, আর সেই মানুষটার জন্য এমন কিছু করুন যাতে আপনার খরচ হয়। তারপর ভালো কথা, তারপর নামায আর যাকাত। উদ্দেশ্য একটাই, কোথায় আপনি চুপচাপ মুখ ফিরিয়ে নিয়েছেন তা খুঁজে বের করা।"
          },
          {
            "en": "The term most people fail is the one that costs nothing: speaking good to people. The verse says an-nas, people, not believers, not the deserving. It includes the shopkeeper who overcharged you, the driver who cut in, the relative who has never once asked after you, and the person online you will never meet. Muslim's hadith sets the floor at a cheerful face. Try one full day in which no sentence leaves your mouth that you would be ashamed to hear read back as part of a covenant with Allah, and see how far into the day you get.",
            "bn": "যে শর্তে সবচেয়ে বেশি মানুষ ফেল করে, সেটাতে কোনো খরচ নেই: মানুষের সাথে ভালো কথা। আয়াত বলছে ‘আন-নাস’, মানুষ, মুমিন নয়, যোগ্য লোক নয়। এর ভেতরে পড়ে যে দোকানদার আপনার কাছে বেশি নিয়েছে, যে ড্রাইভার হুট করে সামনে ঢুকে পড়েছে, যে আত্মীয় জীবনে একবারও আপনার খোঁজ নেয়নি, আর অনলাইনে যার সাথে কোনোদিন দেখা হবে না। মুসলিমের হাদিস নিচের সীমা বেঁধে দিয়েছে হাসিমুখে। একটা পুরো দিন চেষ্টা করুন, যাতে এমন কোনো বাক্য মুখ থেকে না বেরোয়, যা আল্লাহর সাথে অঙ্গীকারের অংশ হিসেবে পড়ে শোনালে আপনার লজ্জা লাগবে। দেখুন দিনের কতদূর পর্যন্ত যেতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a From the Verse",
          "bn": "আয়াত থেকে একটি দোয়া"
        },
        "p": [
          {
            "en": "For the second term of the covenant the Quran itself supplies the supplication. 17:24 follows the parents' clause of 17:23 with the words to say: 'My Lord, have mercy upon them as they brought me up when I was small.' It is the du'a the Quran sets beside the parents' clause, for their lifetime and after it, and it is short enough to say after every prayer. Saying it daily keeps the second line of the covenant alive even on days when the phone call did not happen.",
            "bn": "অঙ্গীকারের দ্বিতীয় শর্তের জন্য দোয়াটা কুরআন নিজেই দিয়েছে। 17:23 আয়াতের মা-বাবার অংশের পরেই 17:24 আয়াতে আসে বলার কথাটা: ‘হে আমার রব, তাদের প্রতি রহম করুন, যেমন তারা আমাকে ছোটবেলায় লালন করেছেন।’ মা-বাবার হকের ঠিক পাশে কুরআন এই দোয়াটাই রেখেছে, তাঁদের জীবদ্দশার জন্য আর তার পরের জন্যও। এত ছোট যে প্রতি নামাযের পরে বলা যায়। রোজ বললে অঙ্গীকারের দ্বিতীয় লাইনটা বেঁচে থাকে, এমন দিনেও যেদিন ফোনটা করা হয়নি।"
          },
          {
            "en": "For the covenant as a whole, a supplication in the verse's own vocabulary, composed here and not narrated: 'O Allah, You took a covenant and I have turned away from parts of it. Make me worship none but You, make me excellent to my parents, and make my hands reach the relative, the orphan and the needy. Put a good word on my tongue for all people, keep me standing in prayer and giving what is due, and do not write me among those who turned away, but among the few.'",
            "bn": "পুরো অঙ্গীকারের জন্য আয়াতের নিজের শব্দে একটা দোয়া। এটা রচিত, কোনো বর্ণনা নয়: ‘হে আল্লাহ, আপনি অঙ্গীকার নিয়েছেন, আর আমি তার কিছু অংশ থেকে মুখ ফিরিয়ে নিয়েছি। আমাকে দিয়ে শুধু আপনারই ইবাদত করান, মা-বাবার প্রতি আমাকে ইহসানকারী বানান, আর আমার হাত পৌঁছে দিন আত্মীয়, ইয়াতিম আর মিসকিনের কাছে। সব মানুষের জন্য আমার জবানে ভালো কথা দিন, আমাকে নামাযে দাঁড় করিয়ে রাখুন আর হক আদায়ে লাগিয়ে রাখুন। যারা মুখ ফিরিয়ে নিয়েছে আমাকে তাদের মাঝে লিখবেন না, লিখুন সেই অল্প কয়েকজনের মাঝে।’"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "If the terms of this verse were read aloud in my house as my own signed covenant, which line would make me look at the floor, and which single term, kept for a month, would change that house most? The verse puts parents immediately after Allah. Where do they actually sit in my week, measured in minutes rather than in feelings? Who is the orphan or the needy person I could name right now, and if I cannot name one, what does that say about how far my list of people extends?",
            "bn": "এই আয়াতের শর্তগুলো যদি আমার সই করা অঙ্গীকার হিসেবে আমার ঘরে জোরে পড়া হয়, কোন লাইনে আমি মেঝের দিকে তাকাব, আর কোন একটা শর্ত এক মাস ধরে রাখলে সেই ঘরটা সবচেয়ে বেশি বদলাবে? আয়াত মা-বাবাকে রাখে আল্লাহর ঠিক পরেই। আমার সপ্তাহে তাঁরা আসলে কোথায় আছেন, অনুভূতিতে নয়, মিনিটের হিসাবে? এই মুহূর্তে কোন ইয়াতিম বা কোন অভাবী মানুষের নাম আমি বলতে পারি, আর বলতে না পারলে সেটা কী বলে দেয়, আমার মানুষের তালিকা কতদূর পর্যন্ত যায়?"
          },
          {
            "en": "The covenant makes good speech to all people a religious duty. Whom do I speak to carelessly because I have decided they do not count? The verse ends by saying that most turned away while a few did not. What did the few do differently, and is there anything stopping me from being one of them starting with the next person I speak to?",
            "bn": "অঙ্গীকার সব মানুষের সাথে ভালো কথা বলাকে দ্বীনের দায়িত্ব বানিয়েছে। কার সাথে আমি অসাবধানে কথা বলি, কারণ ঠিক করে নিয়েছি তার হিসাব রাখার দরকার নেই? আয়াত শেষ হয় এই বলে যে বেশিরভাগ মুখ ফিরিয়ে নিল, অল্প কয়েকজন নেয়নি। সেই অল্প কয়েকজন আলাদা কী করেছিল, আর পরের যে মানুষটার সাথে আমি কথা বলব, তাকে দিয়ে শুরু করে তাদের একজন হতে আমাকে কী আটকাচ্ছে?"
          }
        ]
      }
    ]
  },
  "2:84-86": {
    "sections": [
      {
        "h": {
          "en": "Two Covenants and One Breach",
          "bn": "দুই অঙ্গীকার, একটি ভঙ্গ"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and the reminders to the Children of Israel that began at 2:40 have just listed, in 2:83, the general terms of their covenant: worship, parents, kin, orphans, the needy, good speech, prayer and zakah. 2:84 now recalls a second and more specific covenant, no shedding of one another's blood and no eviction from homes, which they acknowledged and witnessed. 2:85 sets their conduct against it and asks the question that gives the passage its name, and 2:86 pronounces the verdict. 2:87 then moves on to the messengers they rejected.",
            "bn": "সূরা বাকারা মাদানি সূরা। 2:40 আয়াত থেকে বানী ইসরাঈলকে যে স্মরণ করানো চলছে, তা 2:83 আয়াতে সবে গুনিয়ে দিয়েছে তাদের অঙ্গীকারের সাধারণ শর্ত: ইবাদত, মা-বাবা, আত্মীয়, ইয়াতিম, মিসকিন, ভালো কথা, নামায আর যাকাত। এবার 2:84 আয়াত মনে করায় দ্বিতীয় ও আরও নির্দিষ্ট এক অঙ্গীকার, একে অন্যের রক্ত ঝরাবে না, কাউকে ঘর থেকে তাড়াবে না। তারা তা মেনে নিয়েছিল, নিজেরাই সাক্ষী ছিল। 2:85 আয়াত তাদের কাজকে সেই অঙ্গীকারের পাশে রাখে আর সেই প্রশ্নটা করে, যে প্রশ্নে এই অংশ পরিচিত। 2:86 আয়াত রায় শোনায়। তারপর 2:87 আয়াত চলে যায় সেই রাসূলদের দিকে, যাঁদের তারা প্রত্যাখ্যান করেছিল।"
          },
          {
            "en": "The occasion is a sirah report, not a fabricated tale. Ibn Kathir records from Ibn Ishaq, from Ibn Abbas (RA), that before Islam the Jews of Madinah were split between the two Arab tribes: Banu Qaynuqa were allies of the Khazraj, and Banu an-Nadir and Banu Qurayzah were allies of the Aws. When the Aws and Khazraj fought, each Jewish group fought beside its ally, killing and expelling fellow Jews, and when the fighting ended each ransomed its captives because the Torah required it. The Torah, Ibn Abbas noted, forbade both the killing and the expulsion.",
            "bn": "শানে নুযুলটা সিরাতের বর্ণনা, বানানো গল্প নয়। ইবনে কাসীর ইবনে ইসহাকের সূত্রে ইবনে আব্বাস (রাঃ) থেকে লিখেছেন, ইসলামের আগে মদিনার ইহুদিরা দুই আরব গোত্রের মাঝে ভাগ হয়ে ছিল। বনু কায়নুকা ছিল খাযরাজের মিত্র, আর বনু নাযির ও বনু কুরায়যা ছিল আউসের মিত্র। আউস আর খাযরাজে যুদ্ধ বাঁধলে প্রত্যেক ইহুদি দল নিজের মিত্রের পাশে দাঁড়িয়ে লড়ত, নিজেদেরই জাতভাই ইহুদিদের মারত, ঘরছাড়া করত। যুদ্ধ থামলে প্রত্যেকে নিজেদের বন্দিদের মুক্তিপণ দিয়ে ছাড়াত, কারণ তাওরাত তা চাইত। অথচ, ইবনে আব্বাস (রাঃ) বলেন, খুন আর বহিষ্কার দুটোই তাওরাতে হারাম ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Anfusakum, Tazaharun, Ba'd",
          "bn": "আনফুসাকুম, তাযাহারুন, বা’দ"
        },
        "p": [
          {
            "en": "The covenant says la tasfikuna dima'akum, you will not shed 'your blood', and la tukhrijuna anfusakum, you will not evict 'yourselves'. Anfusakum, from n-f-s, means literally 'your own selves', and the Quran uses it for a community so bound together that a wrong done to one member is done to oneself. Ibn Kathir compares 2:54, where the same word describes the killing that was to be carried out within the people after the calf. The verse could have said 'one another'; it said 'yourselves', so that the breach is exposed as self-harm before it is anything else.",
            "bn": "অঙ্গীকারে বলা হয় ‘লা তাসফিকুনা দিমাআকুম’, তোমরা ‘তোমাদের রক্ত’ ঝরাবে না, আর ‘লা তুখরিজুনা আনফুসাকুম’, তোমরা ‘নিজেদের’ বের করে দেবে না। ‘আনফুসাকুম’, ন-ফ-স মূল থেকে, আক্ষরিক অর্থে ‘তোমাদের নিজের সত্তা’। কুরআন শব্দটা ব্যবহার করে এমন এক জামাতের জন্য, যারা এতটা একসাথে বাঁধা যে একজনের ওপর জুলুম মানে নিজের ওপর জুলুম। ইবনে কাসীর তুলনা টানেন 2:54 আয়াতের সাথে, বাছুরের ঘটনার পর জাতির ভেতরে যে হত্যা চালানোর কথা, সেখানেও একই শব্দ। আয়াত বলতে পারত ‘একে অন্যকে’। বলেছে ‘নিজেদেরকে’, যেন অঙ্গীকার ভাঙাটা অন্য কিছু হওয়ার আগে ধরা পড়ে নিজের ক্ষতি হিসেবে।"
          },
          {
            "en": "Tazaharuna, from z-h-r, the word for the back, means to stand back to back with someone, to back one another up; here they back one another 'in sin and aggression', bil-ithmi wal-'udwan, the exact pair the Quran forbids cooperating in elsewhere. Then tufaduhum, you ransom them, carried in two canonical readings that at-Tabari records, tufaduhum and tafduhum, both meaning to redeem a captive. The clause wa huwa muharramun 'alaykum ikhrajuhum, 'while their eviction was forbidden to you', is a parenthesis dropped between the ransom and the question, so the reader cannot reach the question without passing the prohibition.",
            "bn": "‘তাযাহারুন’, য-হ-র মূল থেকে, যে মূলে পিঠ শব্দটা, মানে কারও সাথে পিঠে পিঠ লাগিয়ে দাঁড়ানো, একে অন্যকে পিঠ দেওয়া। এখানে তারা পিঠ দিচ্ছে ‘গুনাহ আর সীমালঙ্ঘনে’, ‘বিল-ইসমি ওয়াল-উদওয়ান’, ঠিক সেই জোড়া, যাতে সহযোগিতা কুরআন অন্যত্র নিষেধ করেছে। তারপর ‘তুফাদুহুম’, তোমরা তাদের মুক্তিপণ দিয়ে ছাড়াও। এর দুটো স্বীকৃত পাঠ তাবারি লিপিবদ্ধ করেছেন, ‘তুফাদুহুম’ আর ‘তাফদুহুম’, দুটোরই মানে বন্দি ছাড়ানো। ‘ওয়া হুয়া মুহাররামুন আলাইকুম ইখরাজুহুম’, ‘অথচ তাদের বের করে দেওয়া তোমাদের জন্য হারাম ছিল’, এই অংশটা মুক্তিপণ আর প্রশ্নের মাঝখানে বসানো একটা বন্ধনী। পাঠক নিষেধটা না পেরিয়ে প্রশ্ন পর্যন্ত পৌঁছাতে পারে না।"
          },
          {
            "en": "The centre of the passage is a-fa-tu'minuna bi-ba'dil-kitabi wa takfuruna bi-ba'd. The hamzah of denial joined to fa, 'so do you then', is the Quran's grammar for a question whose answer condemns the one asked. Ba'd, part, is set against ba'd, part, with the two verbs 'believe' and 'disbelieve' hung on them, so that the sentence itself is split down the middle like the conduct it describes. 2:85 opens with thumma antum ha'ula'i, 'then you are these very ones', a pointing demonstrative that refuses to let the listeners hide behind the past. It ends, as 2:74 did, with 'Allah is not unaware of what you do'.",
            "bn": "এই অংশের কেন্দ্র হলো ‘আ-ফা-তু’মিনুনা বি-বা’দিল-কিতাবি ওয়া তাকফুরুনা বি-বা’দ’। অস্বীকারের ‘হামযা’র সাথে ‘ফা’ জুড়ে, ‘তবে কি তোমরা’, এটা কুরআনের সেই প্রশ্নের ব্যাকরণ, যার উত্তর প্রশ্ন শোনা লোককেই দোষী করে। ‘বা’দ’, অংশ, বসানো হয়েছে ‘বা’দ’, অংশের মুখোমুখি, আর দুটোর গায়ে ঝোলানো দুটো ক্রিয়া, ‘ঈমান আনো’ আর ‘কুফরি কর’। ফলে বাক্যটা নিজেই মাঝখান থেকে দুই ভাগ, যে আচরণের বর্ণনা দিচ্ছে ঠিক তার মতো। 2:85 আয়াত শুরু হয় ‘সুম্মা আনতুম হাউলাই’ দিয়ে, ‘তারপর তোমরাই তো এই লোক’, আঙুল তুলে দেখানো এমন শব্দ, যা শ্রোতাকে অতীতের আড়ালে লুকাতে দেয় না। শেষ হয় ঠিক 2:74 আয়াতের মতো: ‘তোমরা যা কর আল্লাহ তা থেকে বেখেয়াল নন’।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Ransoming Counts Against Them",
          "bn": "মুক্তিপণ কেন তাদের বিপক্ষে"
        },
        "p": [
          {
            "en": "Ibn Kathir gives the reading that most commentators share: believing in part is the ransoming, which the Torah commands; disbelieving in part is the killing and expulsion, which the Torah forbids. As-Sa'di reads the two parts the same way. Ibn Kathir adds why 'yourselves' is the right word, quoting the Prophet ﷺ that the believers are like one body, and he notes the verdict's two halves: the disgrace of this world for defying the law in their hands, and the severest punishment on the Day for defying the Book itself.",
            "bn": "ইবনে কাসীর সেই ব্যাখ্যাটা দেন, যা বেশিরভাগ মুফাসসিরের: কিছু অংশে ঈমান মানে মুক্তিপণ দেওয়া, যা তাওরাত হুকুম করে। কিছু অংশে কুফরি মানে খুন আর বহিষ্কার, যা তাওরাত নিষেধ করে। সাদিও দুই অংশকে একইভাবে পড়েন। ইবনে কাসীর আরও যোগ করেন ‘নিজেদের’ শব্দটা কেন ঠিক শব্দ, নবী ﷺ-এর সেই কথা এনে, মুমিনরা এক দেহের মতো। আর তিনি রায়ের দুই ভাগ আলাদা করে দেখান: হাতে থাকা শরিয়ত অমান্য করার জন্য দুনিয়ার লাঞ্ছনা, আর খোদ কিতাব অমান্য করার জন্য কিয়ামতের দিনে কঠিনতম শাস্তি।"
          },
          {
            "en": "Ar-Razi presses a question the text invites: ransoming captives was itself obedience to the Torah, so how can it appear in a list of charges? His answer is that the ransom is not the charge; it is the evidence. It proves they knew the Book was binding, which removes the excuse of ignorance for the killing. At-Tabari, working through the readings and the grammar clause by clause, keeps to the plain sense of each phrase and lets the charge stand as worded. The commentators differ in emphasis, from grammar to law to psychology, but none softens the charge.",
            "bn": "রাযি এমন একটা প্রশ্ন চেপে ধরেন, যা আয়াত নিজেই তুলে দেয়: বন্দি ছাড়ানো তো নিজেই তাওরাতের আনুগত্য, তাহলে সেটা অভিযোগের তালিকায় আসে কী করে? তাঁর জবাব: মুক্তিপণটা অভিযোগ নয়, প্রমাণ। এটা প্রমাণ করে তারা জানত কিতাব মানা ফরজ। ফলে খুনের ব্যাপারে ‘জানতাম না’ বলার অজুহাত আর থাকে না। তাবারি পাঠ আর ব্যাকরণ ধরে ধরে বাক্যাংশ বাক্যাংশ এগোন, প্রতিটির সোজা অর্থের কাছে থাকেন, আর অভিযোগটাকে যেমন বলা হয়েছে তেমনই দাঁড় করিয়ে রাখেন। মুফাসসিররা জোর দেন ভিন্ন ভিন্ন জায়গায়, ব্যাকরণ, বিধান, মনের হিসাব। কিন্তু কেউই অভিযোগটা নরম করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Body",
          "bn": "এক দেহ"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches to 'do not shed your own blood' the hadith of an-Nu'man ibn Bashir (RA). In Muslim's wording, the Messenger of Allah ﷺ said: the believers, in their mutual love, mercy and compassion, are like a single body; when one limb complains, the rest of the body responds with sleeplessness and fever (Muslim 2586). The hadith explains the word anfusakum from inside. If the community is one body, then to kill a member and then pay to redeem him is to wound a limb and bandage it, and to call the bandage obedience.",
            "bn": "‘তোমাদের নিজের রক্ত ঝরাবে না’ অংশের সাথে ইবনে কাসীর জুড়ে দেন নু’মান ইবনে বশির (রাঃ)-এর হাদিস। মুসলিমের ভাষায় রাসূলুল্লাহ ﷺ বলেছেন: মুমিনরা পরস্পরের ভালোবাসা, দয়া ও মমতায় এক দেহের মতো। দেহের একটা অঙ্গ কষ্ট পেলে বাকি দেহ জেগে থেকে আর জ্বরে সাড়া দেয় (মুসলিম ২৫৮৬)। হাদিসটা ‘আনফুসাকুম’ শব্দটাকে ভেতর থেকে বুঝিয়ে দেয়। জামাত যদি এক দেহ হয়, তবে একজনকে মেরে তারপর তাকে ছাড়াতে টাকা দেওয়া মানে একটা অঙ্গ কেটে তাতে ব্যান্ডেজ বাঁধা। আর ব্যান্ডেজটাকে আনুগত্য বলে ডাকা।"
          },
          {
            "en": "On the question 'do you believe in part and disbelieve in part' itself, no sound hadith is attached in the classical tafsir, and this article does not supply one. What the Sunnah offers instead is the standard the question assumes. In Sahih Muslim, Ubadah ibn as-Samit (RA) describes the pledge the Companions gave the Prophet ﷺ: to hear and obey in hardship and in ease, in what they liked and in what they disliked. Obedience in what one likes is not what a pledge is for. The pledge exists for the other half.",
            "bn": "‘তোমরা কি কিছু অংশ মানো আর কিছু অংশ অস্বীকার কর’ এই প্রশ্নটার সাথে ধ্রুপদী তাফসিরে কোনো সহিহ হাদিস জোড়া নেই, আর এই লেখাও কোনোটা বানিয়ে বসায়নি। বদলে সুন্নাহ দেয় সেই মানদণ্ড, প্রশ্নটা যা ধরে নেয়। সহিহ মুসলিমে উবাদা ইবনে সামিত (রাঃ) সাহাবিদের দেওয়া বায়াতের বর্ণনা দেন: নবী ﷺ-এর কথা শুনব আর মানব, কষ্টে ও স্বাচ্ছন্দ্যে, যা ভালো লাগে তাতে আর যা ভালো লাগে না তাতেও। যা ভালো লাগে তাতে আনুগত্যের জন্য বায়াত লাগে না। বায়াত আছে বাকি অর্ধেকটার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Sisters in the Quran",
          "bn": "কুরআনে এর সহোদর আয়াত"
        },
        "p": [
          {
            "en": "4:150 describes people who say 'we believe in some and disbelieve in others' about the messengers and want a path in between; 4:151 names them the disbelievers in truth. The same split, applied to messengers instead of commands, receives the same verdict. 24:48 shows the reflex in action: called to Allah and His Messenger for judgement, a party turns aside, and 24:51 gives the believers' answer in its place, 'we hear and we obey'. The pair sets the two possible responses to a command one does not like side by side.",
            "bn": "4:150 আয়াত এমন লোকদের ছবি আঁকে, যারা রাসূলদের নিয়ে বলে ‘কাউকে মানি, কাউকে মানি না’ আর মাঝামাঝি একটা পথ চায়। 4:151 আয়াত তাদের বলে আসল কাফির। একই বিভাজন, হুকুমের বদলে রাসূলদের ওপর খাটানো, একই রায় পায়। 24:48 আয়াত এই স্বভাবটাকে কাজে দেখায়: ফয়সালার জন্য আল্লাহ ও তাঁর রাসূলের দিকে ডাকলে একদল মুখ ফিরিয়ে নেয়। আর 24:51 আয়াত তার জায়গায় মুমিনদের জবাব বসায়, ‘আমরা শুনলাম ও মানলাম’। অপছন্দের হুকুমের সামনে দুটো সম্ভাব্য জবাব এই জোড়া পাশাপাশি রেখে দেয়।"
          },
          {
            "en": "2:100 widens the charge from one breach to a pattern: every time they took a covenant, a party of them threw it away. 62:5 gives the image that follows from partial faith: those entrusted with the Torah who did not carry it are like a donkey carrying volumes of books, in possession of every page and bound by none. Read beside 2:85, these sisters say that believing in part is not a lesser form of belief; it is a way of owning the Book without being owned by it.",
            "bn": "2:100 আয়াত অভিযোগটাকে একটা ভঙ্গ থেকে একটা স্বভাবে ছড়িয়ে দেয়: যখনই তারা অঙ্গীকার করেছে, তাদের একদল তা ছুড়ে ফেলেছে। 62:5 আয়াত দেয় সেই ছবি, আংশিক ঈমান থেকে যা দাঁড়ায়: তাওরাতের দায়িত্ব পেয়ে যারা তা বহন করেনি, তারা কিতাবের বোঝা বওয়া গাধার মতো। সব পাতা কাছে আছে, কোনো পাতায় বাঁধা নেই। 2:85 আয়াতের পাশে পড়লে এই সহোদররা বলে, কিছু অংশে ঈমান কোনো ছোট মাপের ঈমান নয়। এটা কিতাবের মালিক হওয়ার একটা কায়দা, কিতাবের কাছে নিজে বাঁধা না পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Question Turned Inward",
          "bn": "প্রশ্নটা নিজের দিকে"
        },
        "p": [
          {
            "en": "The verse is not a text for judging others; the only person whose 'part' you can inspect is yourself. Make an honest list. The commands that cost you little, you probably keep: fasting Ramadan, the Friday prayer, avoiding pork. Now write the commands that cost you something: the source of your income, the interest on your loan, the backbiting in your family group, the prayer at dawn, the relative you have cut off, the wife or husband whose rights you have quietly reduced. Where a command sits on the second list and you have made peace with leaving it, you have found your ransom and your killing.",
            "bn": "এই আয়াত অন্যকে বিচার করার লেখা নয়। যার ‘অংশ’ আপনি পরখ করতে পারেন, সে একজনই, আপনি নিজে। সৎভাবে একটা তালিকা করুন। যে হুকুমে খরচ কম, সেগুলো আপনি সম্ভবত রাখেন: রমযানের রোযা, জুমার নামায, শুয়োর থেকে দূরে থাকা। এবার লিখুন যে হুকুমে খরচ আছে: রোজগারের উৎস, ঋণের সুদ, পারিবারিক গ্রুপে গিবত, ফজরের নামায, যে আত্মীয়র সাথে সম্পর্ক কেটেছেন, যে স্ত্রী বা স্বামীর হক চুপচাপ কমিয়ে দিয়েছেন। দ্বিতীয় তালিকার কোনো হুকুম ছেড়ে দেওয়া নিয়ে যেখানে আপনি শান্তিতে আছেন, সেখানেই আপনার মুক্তিপণ আর আপনার খুন পাশাপাশি পাওয়া গেল।"
          },
          {
            "en": "Then take one item from the second list and treat it as the Israelites should have treated the ban on killing: as a term of a covenant you have witnessed. Do not try to fix the whole list; the verse's own example is one breach beside one obedience. Tell someone you trust which command you are returning to, so the return is witnessed the way the covenant was. And notice the trade 2:86 names. Whatever you gain from the command you leave out, it is being paid for with the Hereafter, and that price does not go down over time.",
            "bn": "এবার দ্বিতীয় তালিকা থেকে একটা জিনিস নিন। খুনের নিষেধকে বানী ইসরাঈলের যেভাবে ধরা উচিত ছিল, একে সেভাবে ধরুন: এমন এক অঙ্গীকারের শর্ত, যার আপনি নিজে সাক্ষী। পুরো তালিকা একবারে ঠিক করতে যাবেন না। আয়াতের নিজের উদাহরণেও একটা আনুগত্যের পাশে একটা ভঙ্গ। যাকে ভরসা করেন, তাকে বলুন কোন হুকুমে আপনি ফিরছেন, যাতে ফেরাটাও সাক্ষী পায়, অঙ্গীকার যেমন পেয়েছিল। আর 2:86 আয়াত যে সওদার নাম নিয়েছে, তা খেয়াল করুন। যে হুকুম বাদ দিচ্ছেন তা থেকে যা-ই পান, দামটা দেওয়া হচ্ছে আখিরাত দিয়ে। আর সে দাম সময়ের সাথে কমে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Forgiveness, Our Lord",
          "bn": "আপনার মাফ, হে আমাদের রব"
        },
        "p": [
          {
            "en": "The Quran answers the divided faith of 2:85 with a whole one at the surah's end. 2:285 describes the believers who make no distinction between any of Allah's messengers and who say 'we hear and we obey', and it gives their supplication in the same breath: 'Your forgiveness, our Lord, and to You is the destination.' That is the du'a to carry from this verse, because it joins the undivided obedience that 2:85 found missing to the plea for pardon that anyone honest about his own list will need. Say it, in Arabic or in your own tongue, after every prayer this week.",
            "bn": "2:85 আয়াতের দুই ভাগ হওয়া ঈমানের জবাব কুরআন দেয় সূরার শেষে অখণ্ড এক ঈমান দিয়ে। 2:285 আয়াত সেই মুমিনদের ছবি আঁকে, যারা আল্লাহর রাসূলদের কারও মাঝে তফাত করে না, যারা বলে ‘আমরা শুনলাম ও মানলাম’। আর একই নিঃশ্বাসে তাদের দোয়াটা দিয়ে দেয়: ‘আপনার মাফ, হে আমাদের রব, আর আপনার কাছেই ফেরা।’ এই আয়াত থেকে সাথে নেওয়ার দোয়া এটাই। কারণ এটা জুড়ে দেয় সেই অখণ্ড আনুগত্য, যা 2:85 আয়াত খুঁজে পায়নি, আর সেই মাফের মিনতি, নিজের তালিকা নিয়ে সৎ যে কারও যা লাগবে। এ সপ্তাহে প্রতি নামাযের পর বলুন, আরবিতে বা নিজের ভাষায়।"
          },
          {
            "en": "A supplication in the passage's own vocabulary, composed here and not narrated: 'O Allah, I acknowledged Your covenant and witnessed it, and then I kept the part that suited me and left the part that cost me. Do not let me believe in part of Your Book and disbelieve in part. Make me hear and obey in what I like and in what I dislike, and do not let me buy this life with the next. You are not unaware of what I do; make what I do whole.'",
            "bn": "এই অংশের নিজের শব্দে একটা দোয়া। এটা রচিত, কোনো বর্ণনা নয়: ‘হে আল্লাহ, আমি আপনার অঙ্গীকার মেনেছি, সাক্ষী থেকেছি, তারপর সুবিধার অংশটা রেখেছি আর খরচের অংশটা ছেড়েছি। আমাকে আপনার কিতাবের কিছু অংশে ঈমান আর কিছু অংশে কুফরি করতে দেবেন না। যা ভালো লাগে তাতে আর যা ভালো লাগে না তাতেও আমাকে দিয়ে শোনান ও মানান। আখিরাত দিয়ে দুনিয়া কিনতে দেবেন না। আমি যা করি আপনি তা থেকে বেখেয়াল নন। আমার কাজকে অখণ্ড করে দিন।’"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Which command have I obeyed for years mainly because it costs me nothing, and which one have I left for years mainly because it does? If a stranger reconstructed my creed from my bank statement, my phone and my family gatherings, which parts of the Book would he conclude I believe in? The Israelites paid ransoms and called it faith. What is the obedience I point to when my conscience raises the disobedience I would rather not discuss?",
            "bn": "কোন হুকুম আমি বছরের পর বছর মেনেছি মূলত এ কারণে যে তাতে আমার কিছু খরচ হয় না? আর কোনটা বছরের পর বছর ছেড়ে রেখেছি মূলত এ কারণে যে হয়? আমার ব্যাংকের হিসাব, ফোন আর পারিবারিক আসর থেকে কোনো অচেনা লোক আমার আকিদা দাঁড় করালে সে কী ধরে নেবে, কিতাবের কোন অংশে আমি বিশ্বাস করি? বানী ইসরাঈল মুক্তিপণ দিয়ে তাকে ঈমান বলত। আমার বিবেক যখন সেই নাফরমানির কথা তোলে, যা নিয়ে আমি কথা বলতে চাই না, তখন আমি কোন আনুগত্যটা দেখিয়ে দিই?"
          },
          {
            "en": "The verse says they acknowledged the covenant and witnessed it. What have I said in prayer, in public, or to my children that my private conduct contradicts, and who is watching the gap? 2:86 names the price of partial faith as the Hereafter. What, exactly, am I buying with it, and would I sign that contract if it were written out in full in front of me?",
            "bn": "আয়াত বলছে তারা অঙ্গীকার মেনে নিয়েছিল আর সাক্ষী ছিল। নামাযে, লোকের সামনে বা সন্তানদের কাছে আমি কী বলেছি, যা আমার গোপন আচরণ অস্বীকার করে? আর এই ফাঁকটা কে দেখছে? 2:86 আয়াত আংশিক ঈমানের দাম বলেছে আখিরাত। ঠিক কী কিনছি আমি এই দামে? আর এই চুক্তি যদি পুরোটা লিখে আমার সামনে রাখা হতো, আমি কি সই করতাম?"
          }
        ]
      }
    ]
  },
  "2:93": {
    "sections": [
      {
        "h": {
          "en": "The Mount, Raised Again",
          "bn": "পাহাড়, আবার তোলা"
        },
        "p": [
          {
            "en": "Surah al-Baqarah is Madinan, and the surah has already told this scene once. 2:63 recalled the covenant, the mount raised over them, and the command to take what they were given with determination and remember what is in it, and 2:64 recorded that they turned away after that. Our verse returns to the same moment inside a second, sharper sequence. 2:87 to 2:91 have charged them with rejecting and killing messengers and with claiming to believe only in what was sent to them; 2:92 has just said that Musa (AS) brought them clear proofs and they took the calf after that.",
            "bn": "সূরা বাকারা মাদানি সূরা, আর এই দৃশ্য সূরা একবার বলে ফেলেছে। 2:63 আয়াত মনে করিয়েছিল অঙ্গীকার, তাদের ওপর তোলা পাহাড়, আর হুকুম, যা দেওয়া হয়েছে তা দৃঢ়ভাবে ধরো আর তাতে যা আছে স্মরণ রাখো। 2:64 আয়াত লিখে রেখেছিল, এর পরেও তারা মুখ ফিরিয়ে নিল। আমাদের আয়াত সেই একই মুহূর্তে ফেরে, তবে দ্বিতীয় ও আরও ধারালো এক ধারার ভেতরে। 2:87 থেকে 2:91 আয়াত তাদের অভিযুক্ত করেছে রাসূলদের অস্বীকার ও হত্যার দায়ে, আর ‘শুধু আমাদের ওপর যা নাযিল হয়েছে তা মানি’ বলার দায়ে। 2:92 আয়াত সবে বলেছে, মূসা (আ) তাদের কাছে স্পষ্ট প্রমাণ এনেছিলেন, তারপরও তারা বাছুরকে ধরল।"
          },
          {
            "en": "So when 2:93 says 'and when We took your covenant and raised over you the mount', it is not adding information; it is placing the calf and the covenant in the same frame. The command this time is 'take what We have given you with determination and listen', and the reported answer is 'we hear and we disobey'. Then comes the diagnosis, the calf drunk into their hearts, and the verdict, spoken through 'Say', that addresses their claim to faith. 2:94 follows with a challenge: if the Hereafter is yours alone, wish for death. No separate occasion of revelation is reported; the verse belongs to the argument.",
            "bn": "তাই 2:93 আয়াত যখন বলে ‘আর যখন আমি তোমাদের অঙ্গীকার নিলাম আর তোমাদের ওপর পাহাড় তুললাম’, তখন নতুন কোনো তথ্য যোগ হয় না। বাছুর আর অঙ্গীকারকে একই ফ্রেমে বসানো হয়। এবার হুকুম, ‘যা দিলাম দৃঢ়ভাবে ধরো আর শোনো’, আর লিখে রাখা জবাব, ‘আমরা শুনলাম আর অমান্য করলাম’। এরপর রোগ ধরা পড়ে, হৃদয়ে পান করানো বাছুর। তারপর রায়, ‘বলো’ দিয়ে শুরু, যা তাদের ঈমানের দাবিকে সোজা সম্বোধন করে। 2:94 আয়াত আসে চ্যালেঞ্জ নিয়ে: আখিরাত যদি শুধু তোমাদেরই হয়, মৃত্যু কামনা করো। আলাদা কোনো শানে নুযুল বর্ণিত নেই। আয়াত এই যুক্তির ধারার অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Ushribu fi Qulubihim al-'Ijl",
          "bn": "উশরিবু ফি কুলুবিহিমুল-ইজল"
        },
        "p": [
          {
            "en": "Ushribu is the passive of the fourth form of sh-r-b, to drink: not 'they drank' but 'they were made to drink', so that the heart appears as something into which a liquid was poured. The verse says fi qulubihim, 'in their hearts', not 'upon' them. A stain lies on a surface; a drink goes inside and spreads. Then the object is al-'ijl, the calf itself. A calf cannot be drunk, so at-Tabari supplies the omitted word: the love of the calf, hubb al-'ijl, a love so complete that the calf and its love are named by one word.",
            "bn": "‘উশরিবু’ শ-র-ব মূল থেকে, পান করা। কিন্তু শব্দটা ‘তারা পান করল’ নয়, ‘তাদের পান করানো হলো’। ফলে হৃদয়কে দেখা যায় এমন পাত্র হিসেবে, যাতে কোনো তরল ঢালা হয়েছে। আয়াত বলে ‘ফি কুলুবিহিম’, ‘তাদের হৃদয়ের ভেতরে’, ওপরে নয়। দাগ থাকে উপরিতলে। পানীয় ভেতরে যায় আর ছড়ায়। তারপর কর্ম হিসেবে আসে ‘আল-ইজল’, খোদ বাছুরটা। বাছুর তো পান করা যায় না, তাই তাবারি বাদ পড়া শব্দটা বসিয়ে দেন: বাছুরের ভালোবাসা, ‘হুব্বুল-ইজল’। এত পুরো ভালোবাসা যে বাছুর আর তার ভালোবাসাকে এক শব্দে ডাকা চলে।"
          },
          {
            "en": "Why drinking rather than any other image? Water reaches parts of the body that food never touches, and it does so quickly and without being noticed; the Arabs spoke of a dye that a cloth had drunk. Commentators such as ash-Shawkani in Fath al-Qadir give the speed and reach of a drink as the reason the verse chose the word. Then bi-kufrihim, 'because of their disbelief': the ba' is the ba' of cause. The verse does not say the drinking caused the disbelief. It says the disbelief caused the drinking.",
            "bn": "অন্য কোনো ছবি না দিয়ে পান করার ছবি কেন? পানি শরীরের এমন জায়গায় পৌঁছায়, যেখানে খাবার কখনো যায় না, আর যায় দ্রুত, চোখে না পড়ে। আরবরা বলত, কাপড়টা রং পান করেছে। শাওকানির মতো মুফাসসিররা, যেমন ফাতহুল কাদিরে, পানীয়ের এই দ্রুত ছড়িয়ে পড়াকেই আয়াতের শব্দ বাছাইয়ের কারণ বলেছেন। তারপর ‘বি-কুফরিহিম’, ‘তাদের কুফরির কারণে’। এখানকার ‘বা’ কারণের ‘বা’। আয়াত বলছে না, পান করানোটা কুফরির কারণ। বলছে, কুফরিই পান করানোর কারণ।"
          },
          {
            "en": "Two more features shape the verse. 'We hear and we disobey', sami'na wa 'asayna, is built to be heard against sami'na wa ata'na, 'we hear and we obey', the believers' words in 2:285 near the surah's end: the first word identical, the second its opposite. And the closing sentence, 'wretched is what your faith commands you, if you are believers', is irony. Faith commands no such thing; the verse lets them keep the word 'faith' for one clause and then hangs a condition on it, in kuntum mu'minin, that the whole verse has already shown they fail.",
            "bn": "আরও দুটো দিক আয়াতের চেহারা গড়ে। ‘সামি’না ওয়া আসাইনা’, ‘আমরা শুনলাম আর অমান্য করলাম’, গড়া হয়েছে ‘সামি’না ওয়া আতা’না’র মুখোমুখি শোনার জন্য, ‘আমরা শুনলাম আর মানলাম’, সূরার শেষের দিকে 2:285 আয়াতে মুমিনদের কথা। প্রথম শব্দ হুবহু এক, দ্বিতীয়টা তার উল্টো। আর শেষ বাক্য, ‘তোমাদের ঈমান যার হুকুম দেয় তা কত নিকৃষ্ট, যদি তোমরা মুমিন হও’, এটা বিদ্রূপ। ঈমান এমন কোনো হুকুম দেয় না। আয়াত তাদের ‘ঈমান’ শব্দটা রাখতে দেয় একটা বাক্যাংশের জন্য, তারপর তাতে একটা শর্ত ঝুলিয়ে দেয়, ‘ইন কুনতুম মু’মিনিন’। গোটা আয়াত এরই মধ্যে দেখিয়ে দিয়েছে, সে শর্তে তারা ফেল।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Mufassirun Said",
          "bn": "মুফাসসিররা যা বলেছেন"
        },
        "p": [
          {
            "en": "At-Tabari reads 'we hear and we disobey' literally, as words spoken: we heard your saying and disobeyed your command. Others read it as the speech of their conduct rather than of their tongues, since what a people does with a command is the answer it gives. Both readings arrive at the same place, which is why at-Tabari's literal sense has never troubled the other. On the calf, at-Tabari supplies the omitted 'love' and treats the verb as an image of how deeply that love had penetrated, not as a report of any physical drink.",
            "bn": "তাবারি ‘আমরা শুনলাম আর অমান্য করলাম’ পড়েন আক্ষরিক অর্থে, মুখে বলা কথা হিসেবে: আপনার কথা শুনলাম আর আপনার হুকুম অমান্য করলাম। অন্যরা একে পড়েন জবানের নয়, আচরণের কথা হিসেবে। একটা হুকুম নিয়ে একটা জাতি যা করে, সেটাই তার জবাব। দুই পাঠ একই জায়গায় পৌঁছায়, তাই তাবারির আক্ষরিক অর্থ অন্যটার সাথে কখনো ঠোকাঠুকি করেনি। বাছুর প্রসঙ্গে তাবারি বাদ পড়া ‘ভালোবাসা’ শব্দটা বসান, আর ক্রিয়াপদটাকে ধরেন সেই ভালোবাসা কত গভীরে ঢুকেছিল তার ছবি হিসেবে, কোনো সত্যিকারের পানীয়ের খবর হিসেবে নয়।"
          },
          {
            "en": "Ibn Kathir gathers the early authorities on the phrase. Qatadah said they absorbed its love until that love settled in their hearts, and Abu al-Aliyah and ar-Rabi' ibn Anas said the same. On the closing line Ibn Kathir reads more widely than the words strictly require: the wretched thing their faith commands, he says, includes their whole history of breaking covenants and disbelieving in the signs of Allah, down to their rejection of the final Messenger ﷺ. Commentators such as ash-Shawkani, as noted above, give the speed and reach of a drink as the reason for the image. The commentators differ in reach, not in direction.",
            "bn": "ইবনে কাসীর এই বাক্যাংশ নিয়ে প্রাথমিক যুগের মতগুলো জড়ো করেন। কাতাদা বলেছেন, তারা এর ভালোবাসা শুষে নিয়েছিল, যতক্ষণ না সে ভালোবাসা তাদের হৃদয়ে থিতু হলো। আবুল আলিয়া আর রাবি ইবনে আনাস একই কথা বলেছেন। শেষ লাইনে ইবনে কাসীর শব্দগুলো যতটা কড়া অর্থে চায়, তার চেয়ে বড় করে পড়েন: তাদের ঈমান যে নিকৃষ্ট কাজের হুকুম দেয়, তাঁর মতে তার ভেতরে পড়ে অঙ্গীকার ভাঙা আর আল্লাহর নিদর্শন অস্বীকারের পুরো ইতিহাস, একেবারে শেষ রাসূল ﷺ-কে প্রত্যাখ্যান পর্যন্ত। শাওকানির মতো মুফাসসিররা, আগে যেমন বলা হলো, পানীয়ের দ্রুত ছড়িয়ে পড়াকেই এই ছবির কারণ বলেছেন। মুফাসসিরদের তফাত পরিধিতে, দিকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearts Between Two Fingers",
          "bn": "দুই আঙুলের মাঝে হৃদয়"
        },
        "p": [
          {
            "en": "No sound hadith is attached in the classical tafsir to the phrase about drinking the calf, and this article will not fill that space with a weak one. What the Sunnah does give is the verse's premise, that hearts can be turned. Muslim narrates from Abdullah ibn Amr (RA) that the Messenger of Allah ﷺ said: the hearts of all the children of Adam are between two of the fingers of the Most Merciful, as one heart, and He turns them wherever He wills. Then he said: O Allah, Turner of hearts, turn our hearts to Your obedience (Muslim 2654).",
            "bn": "বাছুর পান করানোর এই বাক্যাংশের সাথে ধ্রুপদী তাফসিরে কোনো সহিহ হাদিস জোড়া নেই, আর এই লেখা সে জায়গা কোনো দুর্বল বর্ণনা দিয়ে ভরাবে না। সুন্নাহ যা দেয় তা হলো আয়াতের ভিত্তিটা, হৃদয়কে ঘোরানো যায়। মুসলিমে আবদুল্লাহ ইবনে আমর (রাঃ) বলেন, রাসূলুল্লাহ ﷺ বলেছেন: আদম সন্তানের সব হৃদয় পরম দয়াময়ের দুই আঙুলের মাঝে, যেন একটাই হৃদয়। তিনি যেদিকে চান সেদিকে ঘোরান। তারপর তিনি বললেন: হে আল্লাহ, হৃদয়ের পরিবর্তনকারী, আমাদের হৃদয়কে আপনার আনুগত্যের দিকে ঘুরিয়ে দিন (মুসলিম ২৬৫৪)।"
          },
          {
            "en": "The other half of the verse, hearing without obeying, has its closest echo not in a hadith but in 4:46. There the Quran reports that some of the Jews of Madinah said the very words of the mount, 'we hear and disobey', twisting their tongues, and adds that had they said 'we hear and obey' it would have been better for them and more upright. The verse then names the same cause 2:93 names: Allah cursed them for their disbelief. The answer at the mount was not a lapse of one day; it had become a saying, and the cure was still the two words they would not say.",
            "bn": "আয়াতের বাকি অর্ধেক, না মেনে শোনা, তার সবচেয়ে কাছের প্রতিধ্বনি কোনো হাদিসে নয়, 4:46 আয়াতে। সেখানে কুরআন জানায়, মদিনার ইহুদিদের কেউ কেউ পাহাড়ের নিচের সেই কথাটাই বলত, ‘আমরা শুনলাম ও অমান্য করলাম’, জিভ বাঁকিয়ে। আর যোগ করে, তারা যদি বলত ‘আমরা শুনলাম ও মেনে নিলাম’, তবে তা তাদের জন্য উত্তম ও সঙ্গত হতো। এরপর আয়াত সেই একই কারণ ধরিয়ে দেয়, যা 2:93 আয়াত ধরিয়েছে: তাদের কুফরির কারণে আল্লাহ তাদের লানত করেছেন। পাহাড়ের নিচের জবাবটা এক দিনের পা পিছলানো ছিল না। সেটা একটা বুলি হয়ে গিয়েছিল। আর ওষুধ তখনো সেই দুটো শব্দই, যা তারা বলতে চায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Sisters in the Quran",
          "bn": "কুরআনে এর সহোদর আয়াত"
        },
        "p": [
          {
            "en": "2:63 is the first telling of this scene and must be read with it; there the command was to take the Book firmly and remember what is in it, and 2:64 records the turning away. 2:285, at the surah's close, holds the answer the mount was waiting for: the believers say 'we hear and we obey', and the sentence continues into a plea for forgiveness. 20:91 shows the calf's love in the people's own mouths, when they tell Harun (AS) they will not cease being devoted to it until Musa (AS) returns. That is what a heart that has drunk something sounds like.",
            "bn": "2:63 আয়াত এই দৃশ্যের প্রথম বয়ান, এর সাথে পড়া দরকার। সেখানে হুকুম ছিল কিতাব শক্ত করে ধরো আর তাতে যা আছে স্মরণ রাখো, আর 2:64 আয়াত লিখে রাখে মুখ ফিরিয়ে নেওয়া। 2:285 আয়াত, সূরার শেষে, ধরে রেখেছে সেই জবাব, পাহাড় যার অপেক্ষায় ছিল: মুমিনরা বলে ‘আমরা শুনলাম ও মানলাম’, আর বাক্যটা গড়িয়ে যায় মাফের মিনতিতে। 20:91 আয়াত বাছুরের ভালোবাসাকে দেখায় লোকদের নিজের মুখে, যখন তারা হারুন (আ) কে বলে, মূসা (আ) ফিরে না আসা পর্যন্ত আমরা এর পূজায় লেগেই থাকব। কিছু পান করে ফেলা হৃদয়ের আওয়াজ এমনই হয়।"
          },
          {
            "en": "83:14 gives the neighbouring image: a stain has covered their hearts from what they used to earn, a film that settles on the outside; 2:93 goes one step further in, to what was drunk. 7:152 states the outcome for those who took the calf: anger from their Lord and humiliation in this life, the same disgrace 2:85 promised for believing in part. Read together, the sisters trace a single line: what the heart is filled with governs what the mouth answers, and what the mouth answers governs what follows.",
            "bn": "83:14 আয়াত পাশের ছবিটা দেয়: তাদের কামাই তাদের হৃদয়ে জং ধরিয়ে দিয়েছে, বাইরে জমে বসা একটা আস্তর। 2:93 আয়াত আরও এক ধাপ ভেতরে যায়, যা পান করা হয়েছে সেখানে। 7:152 আয়াত বলে দেয় যারা বাছুরকে ধরেছিল তাদের পরিণতি: তাদের রবের গজব আর দুনিয়ার জীবনে লাঞ্ছনা, কিছু অংশে ঈমানের জন্য 2:85 আয়াত যে লাঞ্ছনার ওয়াদা করেছিল সেটাই। একসাথে পড়লে সহোদর আয়াতগুলো একটা রেখা টানে: হৃদয়ে যা ভরা থাকে তা ঠিক করে মুখ কী জবাব দেবে, আর মুখের জবাব ঠিক করে এরপর কী আসবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Has My Heart Drunk?",
          "bn": "আমার হৃদয় কী পান করেছে?"
        },
        "p": [
          {
            "en": "The verse is about a people at a mountain, and it is about you. Start with the order it gives: the drinking came first, the refusal came out of it. So do not begin with the commands you fail; begin with what your heart is absorbing every day without your permission. Count the hours of screens, the accounts you follow, the person whose approval you check for, the purchase you keep returning to in your mind. None of these is a calf. But whatever is being poured in daily, unnoticed, is what will speak for you when the next command arrives.",
            "bn": "আয়াতটা এক পাহাড়ের নিচের এক জাতিকে নিয়ে, আর আপনাকে নিয়ে। আয়াত যে ক্রম দিয়েছে তা দিয়ে শুরু করুন: আগে পান করানো, তার ভেতর থেকে অস্বীকার। তাই যে হুকুমে আপনি ফেল করেন তা দিয়ে শুরু করবেন না। শুরু করুন আপনার অনুমতি ছাড়াই রোজ আপনার হৃদয় যা শুষে নিচ্ছে তা দিয়ে। স্ক্রিনের ঘণ্টা গুনুন, যেসব অ্যাকাউন্ট অনুসরণ করেন, যার মন পাওয়ার জন্য বারবার দেখেন, যে কেনাকাটা মনে বারবার ফিরে আসে। এর কোনোটাই বাছুর নয়। কিন্তু রোজ কারও নজরে না পড়ে যা ঢালা হচ্ছে, পরের হুকুম এলে সেটাই আপনার হয়ে কথা বলবে।"
          },
          {
            "en": "Then practise the other formula. The next time a verse or a hadith reaches you with a command you did not want, say 'we hear and we obey' aloud, and do one small thing towards it within the hour: a message sent, a subscription cancelled, a debt repaid in part, a prayer moved earlier. Obedience acted on immediately after hearing is what keeps hearing from decaying into the Israelites' answer. And pour something in on purpose: a fixed daily portion of the Quran, taken firmly, as the mount commanded, so that the heart has been drinking that before anything else is offered.",
            "bn": "তারপর অন্য বাক্যটা অভ্যাস করুন। পরের বার কোনো আয়াত বা হাদিস এমন কোনো হুকুম নিয়ে আপনার কাছে পৌঁছালে, যা আপনি চাননি, জোরে বলুন ‘আমরা শুনলাম ও মানলাম’। আর এক ঘণ্টার ভেতরে সেদিকে ছোট একটা কাজ করুন: একটা বার্তা পাঠানো, একটা সাবস্ক্রিপশন বন্ধ করা, ঋণের কিছুটা শোধ করা, নামায একটু আগে পড়া। শোনার ঠিক পরেই কাজে নামা আনুগত্যই শোনাকে বানী ইসরাঈলের জবাবে পচে যাওয়া থেকে বাঁচায়। আর ইচ্ছা করে কিছু ঢালুন: কুরআনের বাঁধা একটা দৈনিক অংশ, শক্ত করে ধরা, পাহাড়ের নিচে যেমন হুকুম ছিল। যাতে অন্য কিছু সামনে আসার আগেই হৃদয় সেটা পান করে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Turner of Hearts",
          "bn": "হৃদয়ের পরিবর্তনকারী"
        },
        "p": [
          {
            "en": "The du'a for this verse is the one the Prophet ﷺ attached to his own words about hearts. In Muslim's narration from Abdullah ibn Amr (RA), after saying that hearts are between two fingers of the Most Merciful, he said: Allahumma musarrifal-qulub, sarrif qulubana 'ala ta'atik, 'O Allah, Turner of hearts, turn our hearts to Your obedience' (Muslim 2654). It asks for exactly what 2:93 says the Israelites lacked, a heart turned towards obeying rather than towards the calf, and it asks it from the only One who turns hearts.",
            "bn": "এই আয়াতের দোয়া সেটাই, যা নবী ﷺ হৃদয় নিয়ে নিজের কথার সাথে জুড়ে দিয়েছিলেন। মুসলিমে আবদুল্লাহ ইবনে আমর (রাঃ)-এর বর্ণনায়, হৃদয় পরম দয়াময়ের দুই আঙুলের মাঝে বলার পর তিনি বলেন: ‘আল্লাহুম্মা মুসাররিফাল-কুলুব, সাররিফ কুলুবানা আলা তা’আতিক’, ‘হে আল্লাহ, হৃদয়ের পরিবর্তনকারী, আমাদের হৃদয়কে আপনার আনুগত্যের দিকে ঘুরিয়ে দিন’ (মুসলিম ২৬৫৪)। 2:93 আয়াত বলছে বানী ইসরাঈলের যা ছিল না, এই দোয়া ঠিক সেটাই চায়, বাছুরের দিকে নয়, মানার দিকে ফেরানো হৃদয়। আর চায় একমাত্র তাঁর কাছে, যিনি হৃদয় ঘোরান।"
          },
          {
            "en": "A supplication in the verse's own vocabulary, composed here and not narrated, may follow it: 'O Allah, do not let my heart be made to drink anything but Your love and the love of what You love. Let me take what You have given me with determination, and when I hear, let me obey. Empty from my heart every calf that has settled there, and do not let my faith command me to anything You hate.' Say the Sunnah du'a first; the composed one only names, in the verse's words, what the Sunnah du'a already asks.",
            "bn": "এর পরে আয়াতের নিজের শব্দে একটা দোয়া বলা যায়। এটা রচিত, কোনো বর্ণনা নয়: ‘হে আল্লাহ, আমার হৃদয়কে আপনার ভালোবাসা আর আপনি যা ভালোবাসেন তার ভালোবাসা ছাড়া আর কিছু পান করাবেন না। আপনি যা দিয়েছেন তা আমাকে দৃঢ়ভাবে ধরতে দিন, আর যখন শুনি, তখন মানতে দিন। আমার হৃদয়ে থিতু হয়ে বসা প্রতিটি বাছুর খালি করে দিন। আর আমার ঈমানকে এমন কিছুর হুকুম দিতে দেবেন না, যা আপনি ঘৃণা করেন।’ সুন্নাহর দোয়াটা আগে বলুন। রচিত দোয়াটা শুধু আয়াতের শব্দে নাম ধরে বলে, সুন্নাহর দোয়া এমনিতেই যা চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সাথে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "Which command have I heard clearly, many times, and answered with my life in the words 'we hear and we disobey', without ever saying them? The verse explains the refusal by the drinking. What has my heart been given to drink this year, and who poured it? If my choices over the last month were read back as the commands of my faith, what would a listener conclude my faith is?",
            "bn": "কোন হুকুম আমি পরিষ্কার শুনেছি, বহুবার, আর মুখে না বলেও জীবন দিয়ে জবাব দিয়েছি ‘আমরা শুনলাম আর অমান্য করলাম’? আয়াত অস্বীকারটা বুঝিয়েছে পান করানো দিয়ে। এ বছর আমার হৃদয়কে কী পান করতে দেওয়া হয়েছে, আর ঢেলেছে কে? গত এক মাসের আমার পছন্দগুলো যদি আমার ঈমানের হুকুম হিসেবে পড়ে শোনানো হয়, শ্রোতা কী ধরে নেবে আমার ঈমান কী?"
          },
          {
            "en": "4:46 says it would have been better for them to have said 'we hear and we obey'. When did I last say that to a command I disliked, and how long ago was that? The Prophet ﷺ, who knew hearts are turned by Allah, still asked for his to be turned. If he asked, what stops me from asking every day, and from naming in that du'a the one calf, the one thing my heart has settled on, that I could name honestly tonight?",
            "bn": "4:46 আয়াত বলছে, ‘আমরা শুনলাম ও মেনে নিলাম’ বললে তা তাদের জন্য উত্তম হতো। ভালো না লাগা কোনো হুকুমকে আমি শেষ কবে এই কথাটা বলেছি, আর সেটা কতদিন আগে? নবী ﷺ জানতেন হৃদয় আল্লাহই ঘোরান, তবু নিজের হৃদয় ঘোরানোর জন্য চাইতেন। তিনি চাইলে আমাকে রোজ চাইতে কী আটকায়, আর সেই চাওয়ার ভেতরে একটা বাছুরের নাম নিতে, যার ওপর আমার হৃদয় থিতু হয়ে বসেছে আর আজ রাতেই যার নাম আমি সৎভাবে বলতে পারি?"
          }
        ]
      }
    ]
  },
  "2:128": {
    "sections": [
      {
        "h": {
          "en": "One Supplication, Three Verses",
          "bn": "একটি দু'আ, তিনটি আয়াত"
        },
        "p": [
          {
            "en": "The prayer does not begin here. 2:127 opens with Ibrahim (AS) raising the foundations of the House together with Isma'il (AS), and their words start there: our Lord, accept from us; indeed You are the Hearing, the Knowing. Our verse continues with rabbana wa-j'alna — our Lord, and make us — the wa tying it to what came before. 2:129 continues again in the same way with a third request.",
            "bn": "দু'আটি এখান থেকে শুরু হয়নি। 2:127 শুরু হয় ইবরাহীম (আঃ) ও ইসমাঈল (আঃ)-এর কাবাগৃহের ভিত্তি তোলার দৃশ্য দিয়ে, আর তাঁদের কথা সেখানেই শুরু: হে আমাদের প্রতিপালক, আমাদের পক্ষ থেকে কবুল করুন; নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ। আমাদের আয়াতটি এগিয়ে চলে 'রাব্বানা ওয়াজ'আলনা' দিয়ে — হে আমাদের প্রতিপালক, আর আমাদের বানান — যেখানে 'ওয়া' একে আগের কথার সঙ্গে বেঁধে দেয়। 2:129 আবার একইভাবে তৃতীয় একটি আবেদন নিয়ে এগোয়।"
          },
          {
            "en": "The supplication ends there. 2:130 leaves their speech entirely and comments on them in the third person: and who would be averse to the religion of Ibrahim except one who makes a fool of himself. So the boundary is 2:127 to 2:129, three verses of one prayer, and this verse is its middle. Reading it alone loses both the occasion — two men with their hands on the stones — and the request that completes it.",
            "bn": "দু'আটি সেখানেই শেষ। 2:130 তাঁদের কথা সম্পূর্ণ ছেড়ে দিয়ে তৃতীয় পুরুষে তাঁদের সম্পর্কে মন্তব্য করে: সেই নির্বোধ ছাড়া আর কে ইবরাহীমের দ্বীন থেকে মুখ ফিরিয়ে নেবে। অর্থাৎ সীমা হলো 2:127 থেকে 2:129 — একটি দু'আর তিনটি আয়াত, আর আমাদের আয়াতটি তার মাঝখানে। একে একা পড়লে দুটোই হারায়: প্রেক্ষাপট, অর্থাৎ পাথরের ওপর হাত রাখা দুজন মানুষ; এবং সেই আবেদন, যা দু'আটিকে সম্পূর্ণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Make Us Two Submitters",
          "bn": "আমাদের দুজনকে অনুগত করুন"
        },
        "p": [
          {
            "en": "The first request is in the dual. Muslimayni laka — two submitters to You — because two people are speaking, a father and a son. What they ask for is the thing an onlooker would assume they already had. They are building the House of Allah on His instruction, and one of the first things out of their mouths is a request to be made submitters, preceded in the verse before by a plea that the work be accepted at all.",
            "bn": "প্রথম আবেদনটি দ্বিবচনে। মুসলিমাইনি লাকা — আপনার কাছে অনুগত দুজন — কারণ কথা বলছেন দুজন, এক পিতা ও এক পুত্র। তাঁরা ঠিক সেই জিনিসটিই চাইছেন, যা তাঁদের ইতিমধ্যেই আছে বলে যে কোনো দর্শক ধরে নিত। তাঁরা আল্লাহরই নির্দেশে তাঁর ঘর নির্মাণ করছেন, অথচ তাঁদের মুখ থেকে বেরোনো প্রথম কথাগুলোর একটি হলো অনুগত বানিয়ে দেওয়ার আবেদন — আর তার আগের আয়াতে ছিল এই মিনতি যে কাজটি আদৌ যেন কবুল হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Requests, Then a Reason",
          "bn": "তিনটি আবেদন, তারপর একটি কারণ"
        },
        "p": [
          {
            "en": "Count the imperatives in the verse and there are three: make us, show us, and turn to us. Everything else is either the content of a request or the ground for one. The closing words — indeed You are the Accepting of repentance, the Merciful — are not a fourth petition; they are the reason the third one was worth making. The prayer names two divine attributes and asks for exactly what those two attributes give.",
            "bn": "আয়াতের আদেশবাচক ক্রিয়াগুলো গুনলে পাওয়া যায় তিনটি: আমাদের বানান, আমাদের দেখান, আর আমাদের প্রতি ফিরুন। বাকি সবই হয় কোনো আবেদনের বিষয়বস্তু, নয়তো কোনো আবেদনের ভিত্তি। শেষ কথাগুলো — নিশ্চয়ই আপনি তাওবা কবুলকারী, পরম দয়ালু — চতুর্থ কোনো আবেদন নয়; বরং সেগুলোই সেই কারণ, যার জন্য তৃতীয় আবেদনটি করার মতো ছিল। দু'আটি আল্লাহর দুটি গুণের নাম নেয় এবং ঠিক সেই জিনিসই চায়, যা এই দুটি গুণ দিয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "From Our Offspring",
          "bn": "আমাদের বংশধরদের থেকে"
        },
        "p": [
          {
            "en": "The request for a nation is worded carefully: wa min dhurriyyatina ummatan muslimatan laka — and from our offspring, a nation submitting to You. The min is partitive. He does not ask that all his descendants be that nation, and he had already learned why. In 2:124, when Ibrahim (AS) was made a leader for the people and asked whether the covenant extended to his descendants, the answer was that it does not include the wrongdoers.",
            "bn": "একটি জাতির জন্য আবেদনটি অত্যন্ত সাবধানে গঠিত: ওয়া মিন যুররিয়্যাতিনা উম্মাতাম মুসলিমাতাল লাকা — আর আমাদের বংশধরদের থেকে আপনার অনুগত একটি জাতি। এখানে 'মিন' অংশবাচক। তিনি চাননি যে তাঁর সব বংশধরই সেই জাতি হোক, আর কেন নয় তা তিনি আগেই শিখেছিলেন। 2:124-এ যখন ইবরাহীম (আঃ)-কে মানুষের নেতা করা হয় এবং তিনি জিজ্ঞেস করেন অঙ্গীকার তাঁর বংশধরদের পর্যন্তও পৌঁছবে কি না, জবাব আসে যে তা জালিমদের অন্তর্ভুক্ত করে না।"
          },
          {
            "en": "So this is hope that has been to school. In 2:126 the same man, having heard the answer of 2:124, asked provision only for those of the city who believe, and Allah extended it even to the disbeliever, for a little while, before the punishment of the Fire. He had asked broadly once and learned the limit; he asked narrowly the second time and was answered more generously than he asked. By our verse he asks for a portion of his line rather than the whole of it.",
            "bn": "অর্থাৎ এটি এমন আশা যা শিক্ষা পেয়ে এসেছে। 2:124 আয়াতের জবাব শোনার পর এই মানুষটিই 2:126 আয়াতে শহরের কেবল ঈমানদার অধিবাসীদের জন্য জীবিকা চেয়েছিলেন, আর আল্লাহ তা বাড়িয়ে দিলেন কাফেরের জন্যও, কিছুকালের ভোগ, তারপর জাহান্নামের শাস্তি। একবার তিনি ব্যাপকভাবে চেয়ে সীমাটি শিখেছিলেন; দ্বিতীয়বার সংকীর্ণ করে চাইলেন, আর যা চেয়েছিলেন তার চেয়ে উদারভাবে জবাব পেলেন। আমাদের আয়াতে এসে তিনি নিজের বংশের একটি অংশ চাইছেন, পুরোটা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Show Us Our Rites",
          "bn": "আমাদের ইবাদতের নিয়ম দেখান"
        },
        "p": [
          {
            "en": "Arina manasikana — show us our rites. Manasik is the plural of mansak, and the commentators read it primarily of the rites of the hajj, and more widely of the ways of drawing near to Allah. The request is not for the desire to worship, which the two of them plainly had; it is for the instruction. Even a prophet building the Ka'bah does not deduce from his own sincerity how the worship at it is to be done.",
            "bn": "আরিনা মানাসিকানা — আমাদের ইবাদতের নিয়মগুলো দেখিয়ে দিন। মানাসিক হলো 'মানসাক'-এর বহুবচন, আর মুফাসসিরগণ একে প্রধানত হজের বিধি-নিয়ম অর্থে পড়েন, আর ব্যাপকতর অর্থে আল্লাহর নৈকট্য লাভের পদ্ধতি অর্থে। আবেদনটি ইবাদতের আগ্রহের জন্য নয় — সেটি তাঁদের দুজনের স্পষ্টতই ছিল; আবেদনটি শিক্ষার জন্য। কাবা নির্মাণরত একজন নবীও নিজের আন্তরিকতা থেকে অনুমান করে বের করেন না যে সেখানে ইবাদত কীভাবে করতে হবে।"
          },
          {
            "en": "That is a large principle inside a short clause, and it is still operating. Later, at 22:27, the proclamation of the hajj is commanded, and the rites Muslims perform around that House every year are the answer to a request made while its foundations were still going up. Worship in Islam is received rather than composed, and this verse is where one of the builders of the House asks to receive it.",
            "bn": "ছোট একটি বাক্যাংশের ভেতরে এটি একটি বড় নীতি, আর তা এখনো কার্যকর। পরে 22:27-এ হজের ঘোষণা দেওয়ার নির্দেশ আসে, আর মুসলিমরা প্রতি বছর সেই ঘরের চারপাশে যে বিধিগুলো পালন করেন সেগুলোই এমন এক আবেদনের জবাব, যা করা হয়েছিল ঘরটির ভিত্তি তখনো ওঠার সময়ে। ইসলামে ইবাদত রচনা করা হয় না, গ্রহণ করা হয় — আর এই আয়াতেই সেই ঘরের একজন নির্মাতা তা গ্রহণ করার আবেদন জানাচ্ছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "And Turn to Us",
          "bn": "আর আমাদের প্রতি ফিরুন"
        },
        "p": [
          {
            "en": "The last request is the one that startles readers: wa tub 'alayna, and turn to us. Tawbah from the servant's side is a returning; from Allah's side, as the name at-Tawwab indicates, it is a turning towards the one who returns. Two people engaged in the most conspicuous act of obedience in their lives close the sentence by asking for that. Nothing in the verse names a particular sin; the request is simply treated as ordinary.",
            "bn": "শেষ আবেদনটিই পাঠককে চমকে দেয়: ওয়া তুব আলাইনা — আর আমাদের প্রতি ফিরুন। বান্দার দিক থেকে তাওবা মানে ফিরে আসা; আর আল্লাহর দিক থেকে, যেমনটি আত-তাওয়াব নামটি বোঝায়, তা হলো যে ফিরে আসে তার দিকে ফিরে তাকানো। নিজেদের জীবনের সবচেয়ে দৃশ্যমান আনুগত্যের কাজে নিয়োজিত দুজন মানুষ বাক্যটি শেষ করছেন ঠিক সেই আবেদন দিয়ে। আয়াতে কোনো নির্দিষ্ট গুনাহের নাম নেই; আবেদনটিকে কেবল স্বাভাবিক বিষয় হিসেবেই রাখা হয়েছে।"
          },
          {
            "en": "The verse after theirs was answered in wording anyone can check. 2:129 asks for a messenger from among them who would recite Allah's verses, teach the Book and wisdom, and purify them. 3:164 and 62:2 describe what Allah actually did with the same three items, though not in the same order — reciting, purifying, then teaching. A prayer made at a foundation was answered across a gap the two of them did not live to see.",
            "bn": "তাঁদের এর পরের আয়াতটির জবাব এসেছে এমন ভাষায় যা যে কেউ মিলিয়ে দেখতে পারে। 2:129-এ চাওয়া হয়েছে তাদেরই মধ্য থেকে এমন এক রাসূল, যিনি আল্লাহর আয়াত পড়ে শোনাবেন, কিতাব ও হিকমাত শেখাবেন, এবং তাদের পরিশুদ্ধ করবেন। 3:164 ও 62:2 বর্ণনা করে আল্লাহ প্রকৃতপক্ষে কী করেছেন — সেই একই তিনটি বিষয় নিয়ে, তবে একই ক্রমে নয়: পড়ে শোনানো, পরিশুদ্ধ করা, তারপর শেখানো। ভিত্তির পাশে করা একটি দু'আর জবাব এল এমন এক ব্যবধান পেরিয়ে, যা তাঁরা দুজন জীবদ্দশায় দেখে যাননি।"
          }
        ]
      }
    ]
  },
  "2:152": {
    "sections": [
      {
        "h": {
          "en": "An Exchange in Four Words",
          "bn": "চার শব্দে এক বিনিময়"
        },
        "p": [
          {
            "en": "The Arabic is startlingly short: fadhkuruni adhkurkum. Remember Me, I will remember you. Both verbs come from the same root, dhikr, which covers mentioning with the tongue, recalling in the mind and keeping present in the heart. The Quran does not say worship Me and I will reward you, though that is true elsewhere. Here the same word is used on both sides, so the sentence reads as an exchange between two parties rather than a transaction.",
            "bn": "আরবি বাক্যটি বিস্ময়করভাবে সংক্ষিপ্ত: ফাযকুরূনী আযকুরকুম। আমাকে স্মরণ করো, আমি তোমাদের স্মরণ করব। দুটি ক্রিয়াপদই এসেছে একই ধাতু 'যিকর' থেকে, যা একইসঙ্গে জিহ্বায় উচ্চারণ, মনে জাগরূক রাখা এবং হৃদয়ে উপস্থিত রাখা — সবকিছু বোঝায়। কুরআন এখানে বলেনি 'আমার ইবাদত করো, আমি প্রতিদান দেব', যদিও সে কথাও অন্যত্র সত্য। এখানে দুই পাশে একই শব্দ ব্যবহৃত হয়েছে, ফলে বাক্যটি লেনদেন নয়, বরং দুই পক্ষের মধ্যে এক বিনিময়ের মতো শোনায়।"
          },
          {
            "en": "The second half sets up an opposition that is easy to miss in translation: washkuru li wa la takfurun. Be grateful to Me and do not be ungrateful. The opposite of shukr in Quranic Arabic is kufr, from a root meaning to cover something over. The farmer who buries a seed uses the same verb. Ingratitude, in this picture, is not loud denial. It is quietly covering a gift until it is no longer visible.",
            "bn": "দ্বিতীয় অংশটি এমন এক বৈপরীত্য দাঁড় করায়, যা অনুবাদে সহজে হারিয়ে যায়: ওয়াশকুরূ লী ওয়ালা তাকফুরূন। আমার প্রতি কৃতজ্ঞ হও, আর অকৃতজ্ঞ হয়ো না। কুরআনি আরবিতে 'শুকর'-এর বিপরীত হলো 'কুফর', যার ধাতুগত অর্থ কোনো কিছু ঢেকে দেওয়া। যে কৃষক বীজ মাটিচাপা দেয়, সেও এই একই ক্রিয়াপদ ব্যবহার করে। এই চিত্রে অকৃতজ্ঞতা মানে উচ্চস্বরে অস্বীকার নয়; বরং নিঃশব্দে একটি নিয়ামতকে ঢেকে ফেলা, যতক্ষণ না তা আর চোখেই পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Before and After",
          "bn": "আগের ও পরের আয়াত"
        },
        "p": [
          {
            "en": "The verse is general in application, with no particular occasion of revelation attached to it, but its position in Surah al-Baqarah is instructive. It closes the long passage on the change of the qiblah, 2:142-152, in which the direction of prayer was turned from Jerusalem to the Sacred Mosque and the community was tested by the objections that followed. Remembrance is being commanded to a people who had just been unsettled publicly.",
            "bn": "আয়াতটির প্রয়োগ সাধারণ, এর সঙ্গে নির্দিষ্ট কোনো শানে নুযূল যুক্ত নেই; তবে সূরা আল-বাকারায় এর অবস্থান শিক্ষণীয়। এটি কিবলা পরিবর্তনের দীর্ঘ অংশটি — 2:142-152 — শেষ করে, যেখানে নামাযের দিক বায়তুল মাকদিস থেকে মসজিদুল হারামের দিকে ঘুরিয়ে দেওয়া হয় এবং এর পরের আপত্তিগুলো দিয়ে সমাজটিকে পরীক্ষা করা হয়। অর্থাৎ স্মরণের আদেশ এমন এক জাতিকে দেওয়া হচ্ছে, যারা সবেমাত্র প্রকাশ্যে নাড়া খেয়েছে।"
          },
          {
            "en": "The immediately preceding verse, 2:151, lists what Allah has already given them: a messenger from among themselves who recites His signs, purifies them and teaches them the Book and wisdom. So remember Me arrives as a response to a favour already itemised. The verse that follows, 2:153, tells them to seek help through patience and prayer. Remembrance is placed exactly between a gift received and a hardship expected.",
            "bn": "ঠিক আগের আয়াত 2:151-এ তালিকাভুক্ত হয়েছে আল্লাহ তাঁদের ইতিমধ্যে কী দিয়েছেন: তাঁদের ভেতর থেকেই একজন রাসূল, যিনি তাঁদের কাছে তাঁর আয়াত পাঠ করেন, তাঁদের পরিশুদ্ধ করেন এবং কিতাব ও হিকমত শেখান। ফলে 'আমাকে স্মরণ করো' কথাটি আসে ইতিমধ্যে গুনে দেখানো এক অনুগ্রহের জবাব হিসেবে। এর পরের আয়াত 2:153 তাঁদের বলে ধৈর্য ও নামাযের মাধ্যমে সাহায্য চাইতে। অর্থাৎ স্মরণকে ঠিক বসানো হয়েছে প্রাপ্ত নিয়ামত আর প্রত্যাশিত কষ্টের মাঝখানে।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Remembers Us With",
          "bn": "তিনি কী দিয়ে স্মরণ করেন"
        },
        "p": [
          {
            "en": "The commentators are careful with the second half of the exchange. Allah's remembrance of a servant is not of the same kind as ours of Him; it is understood as befitting Him, and is explained as mention, favour, protection and reward. A hadith qudsi recorded by al-Bukhari and Muslim supplies the clearest gloss: Allah says He is as His servant expects of Him, that if the servant mentions Him within himself He mentions him within Himself, and if the servant mentions Him in a gathering He mentions him in a better gathering.",
            "bn": "এই বিনিময়ের দ্বিতীয় অংশ নিয়ে মুফাসসিরগণ অত্যন্ত সতর্ক। আল্লাহর পক্ষ থেকে বান্দাকে স্মরণ করা আমাদের স্মরণের মতো নয়; একে তাঁর শানের উপযোগী অর্থে বোঝা হয় এবং ব্যাখ্যা করা হয় উল্লেখ, অনুগ্রহ, রক্ষা ও পুরস্কার হিসেবে। বুখারী ও মুসলিমে সংকলিত একটি হাদীসে কুদসী সবচেয়ে স্পষ্ট ব্যাখ্যা দেয়: আল্লাহ বলেন, বান্দা তাঁর সম্পর্কে যেমন ধারণা রাখে তিনি তেমনই; বান্দা যদি তাঁকে নিজের ভেতরে স্মরণ করে, তিনি তাকে নিজের কাছে স্মরণ করেন, আর বান্দা যদি কোনো মজলিসে তাঁকে স্মরণ করে, তিনি তাকে তার চেয়ে উত্তম মজলিসে স্মরণ করেন।"
          },
          {
            "en": "That reading keeps the verse from becoming sentimental. The promise is not that a warm feeling follows every recitation. It is that a person who keeps Allah present is themselves kept present with Allah, and that this happens whether or not it is felt at the time. Many of the early scholars are reported to have said that dhikr done without any sweetness is still dhikr, and that the sweetness usually comes to those who continued anyway.",
            "bn": "এই পাঠ আয়াতটিকে আবেগসর্বস্ব হয়ে পড়া থেকে বাঁচায়। প্রতিশ্রুতি এই নয় যে প্রতিটি তিলাওয়াতের পর একটি উষ্ণ অনুভূতি আসবে। প্রতিশ্রুতি হলো, যে ব্যক্তি আল্লাহকে উপস্থিত রাখে, সে নিজেও আল্লাহর কাছে উপস্থিত থাকে — সেই মুহূর্তে তা অনুভূত হোক বা না হোক। পূর্ববর্তী বহু আলিম থেকে বর্ণিত আছে, কোনো মাধুর্য ছাড়া করা যিকরও যিকরই; আর মাধুর্য সাধারণত তাদেরই কাছে আসে, যারা অনুভূতি না পেয়েও চালিয়ে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Was Practised",
          "bn": "কীভাবে এটি চর্চিত হয়েছে"
        },
        "p": [
          {
            "en": "The Prophet ﷺ tied remembrance and gratitude together exactly as the verse does. Abu Dawud and an-Nasa'i report that he took Mu'adh ibn Jabal (RA) by the hand, told him he loved him, and instructed him not to leave the end of any prayer without saying: O Allah, help me to remember You, to thank You, and to worship You well. The three requests match the verse's two commands and add the means of fulfilling them.",
            "bn": "নবী ﷺ স্মরণ ও কৃতজ্ঞতাকে ঠিক আয়াতের মতোই একসঙ্গে বেঁধেছেন। আবু দাউদ ও নাসাঈ বর্ণনা করেন, তিনি মু'আয ইবনে জাবাল (রাঃ)-এর হাত ধরে বলেন যে তিনি তাঁকে ভালোবাসেন, এবং নির্দেশ দেন যেন তিনি কোনো নামাযের শেষে এই দোয়া না বলে না যান: হে আল্লাহ, আপনাকে স্মরণ করতে, আপনার শোকর আদায় করতে এবং আপনার উত্তম ইবাদত করতে আমাকে সাহায্য করুন। তিনটি আবেদন আয়াতের দুটি আদেশের সঙ্গে মেলে এবং সেগুলো পালনের উপায়টিও যোগ করে।"
          },
          {
            "en": "His own remembrance was constant rather than occasional. Aishah (RA) reported, as narrated in Muslim, that he used to remember Allah at all his times. The pattern preserved from him is not long isolated sessions but short phrases attached to ordinary actions: waking, dressing, eating, leaving the house, entering the mosque, seeing rain, and lying down again at night. Remembrance was threaded through the day rather than scheduled against it.",
            "bn": "তাঁর নিজের যিকর ছিল অবিরাম, মাঝেমধ্যের নয়। আয়িশা (রাঃ) থেকে মুসলিমে বর্ণিত আছে, তিনি সর্বাবস্থায় আল্লাহকে স্মরণ করতেন। তাঁর থেকে সংরক্ষিত ধরনটি দীর্ঘ বিচ্ছিন্ন বৈঠক নয়, বরং সাধারণ কাজের সঙ্গে জুড়ে দেওয়া ছোট ছোট বাক্য: ঘুম থেকে ওঠা, পোশাক পরা, খাওয়া, ঘর থেকে বের হওয়া, মসজিদে ঢোকা, বৃষ্টি দেখা, আর রাতে আবার শুয়ে পড়া। যিকর দিনের বিরুদ্ধে সময় বরাদ্দ করে নয়, দিনের ভেতর দিয়েই বোনা ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Gratitude That Names Things",
          "bn": "যে কৃতজ্ঞতা নাম ধরে বলে"
        },
        "p": [
          {
            "en": "Gratitude in the Quran is more than a mood. The classical scholars describe it as having three parts: recognising the blessing as coming from Allah, expressing that with the tongue, and using the blessing in a way its Giver would approve. By that definition a person can feel thankful and still not be grateful, and a person can be grateful in the middle of a difficult week because the third part is an action rather than a feeling.",
            "bn": "কুরআনে কৃতজ্ঞতা কেবল একটি মেজাজ নয়। ধ্রুপদী আলিমগণ একে তিন অংশে বর্ণনা করেন: নিয়ামতটিকে আল্লাহর পক্ষ থেকে এসেছে বলে স্বীকার করা, জিহ্বা দিয়ে তা প্রকাশ করা, এবং নিয়ামতটিকে এমনভাবে ব্যবহার করা যা এর দাতার পছন্দ। এই সংজ্ঞা অনুসারে একজন মানুষ কৃতজ্ঞ বোধ করেও প্রকৃত শোকরগুজার না হতে পারে; আবার কঠিন এক সপ্তাহের মাঝখানেও কেউ শোকরগুজার হতে পারে, কারণ তৃতীয় অংশটি অনুভূতি নয়, কাজ।"
          },
          {
            "en": "This is where the verse becomes practical. Vague thankfulness fades quickly; named thankfulness does not. Naming three specific things at a fixed point in the day, saying alhamdulillah aloud when something ordinary goes right, and spending one blessing deliberately in obedience are all small enough to sustain. The verse warns against covering blessings over, and nothing uncovers a blessing faster than saying what it is.",
            "bn": "এখানেই আয়াতটি ব্যবহারিক হয়ে ওঠে। অস্পষ্ট কৃতজ্ঞতা দ্রুত মিলিয়ে যায়; নাম ধরে বলা কৃতজ্ঞতা যায় না। দিনের নির্দিষ্ট একটি সময়ে তিনটি সুনির্দিষ্ট নিয়ামতের নাম বলা, সাধারণ কোনো কিছু ঠিকঠাক হলে মুখে 'আলহামদুলিল্লাহ' বলা, আর একটি নিয়ামতকে সচেতনভাবে আনুগত্যের কাজে ব্যয় করা — এগুলো এতটাই ছোট যে ধরে রাখা যায়। আয়াতটি নিয়ামত ঢেকে ফেলার বিরুদ্ধে সতর্ক করে, আর নিয়ামতের ঢাকনা সরানোর দ্রুততম উপায় হলো সেটির নাম উচ্চারণ করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping the Line Open",
          "bn": "সংযোগটি খোলা রাখা"
        },
        "p": [
          {
            "en": "One reason this verse is loved is that it sets no minimum. There is no threshold of piety to cross before the exchange begins, no state of purity required for the tongue to move. A person returning after years away starts at the same place as anyone else: with a phrase. The verse's grammar makes remembrance the first move, which means the servant is never waiting for permission to begin.",
            "bn": "এই আয়াতটি যে কারণে এত প্রিয়, তার একটি হলো এখানে কোনো ন্যূনতম শর্ত নেই। বিনিময় শুরু হওয়ার আগে পার হওয়ার মতো কোনো তাকওয়ার সীমারেখা নেই, জিহ্বা নড়ার জন্য কোনো বিশেষ পবিত্রতার অবস্থাও আবশ্যক নয়। বছরের পর বছর দূরে থেকে ফিরে আসা মানুষটি শুরু করে ঠিক সেখান থেকেই, যেখান থেকে আর সবাই শুরু করে: একটি বাক্য দিয়ে। আয়াতের ব্যাকরণ স্মরণকে প্রথম পদক্ষেপ বানিয়েছে, অর্থাৎ বান্দাকে শুরু করার জন্য কারও অনুমতির অপেক্ষায় বসে থাকতে হয় না।"
          },
          {
            "en": "What sustains it in a modern week is usually anchoring rather than ambition. Tie a short phrase to something you already do without fail, such as unlocking a phone, waiting at a light or climbing stairs. Keep the morning and evening adhkar short enough that you will not abandon them when tired. The measure of success is not intensity on one day but the line staying open across ordinary ones.",
            "bn": "আধুনিক জীবনে এটি টিকিয়ে রাখে সাধারণত উচ্চাকাঙ্ক্ষা নয়, বরং নোঙর। যে কাজটি আপনি প্রতিদিন নিশ্চিতভাবে করেন — ফোন আনলক করা, সিগন্যালে অপেক্ষা করা, সিঁড়ি ভাঙা — তার সঙ্গে একটি ছোট বাক্য বেঁধে দিন। সকাল-সন্ধ্যার যিকরকে এতটাই সংক্ষিপ্ত রাখুন যেন ক্লান্ত দিনেও তা ছেড়ে দিতে না হয়। সফলতার মাপকাঠি কোনো একদিনের প্রবলতা নয়, বরং সাধারণ দিনগুলোতে সংযোগটি খোলা থাকা।"
          }
        ]
      }
    ]
  },
  "2:153": {
    "sections": [
      {
        "h": {
          "en": "An Equipment List",
          "bn": "সরঞ্জামের একটি তালিকা"
        },
        "p": [
          {
            "en": "The verse opens with the call the Quran reserves for its own people: O you who believe. What follows is not a ruling but equipment: ista'inu, seek help, bi-s-sabri wa-s-salah, through patience and prayer. The verb concedes something first — that believers will need help, that faith exempts no one from weight. The question the verse answers is not whether hardship comes but what to lean on when it does, and it names two supports: one inward, one enacted.",
            "bn": "আয়াতটি শুরু হয় সেই সম্বোধনে, যা কুরআন তার নিজের মানুষদের জন্য তুলে রাখে: হে ঈমানদারগণ। এরপর যা আসে তা কোনো বিধান নয়, সরঞ্জাম: 'ইসতাঈনূ' — সাহায্য চাও — 'বিস-সাবরি ওয়াস-সালাহ' — ধৈর্য ও নামাযের মাধ্যমে। ক্রিয়াপদটি আগে একটি কথা মেনে নেয় — মুমিনদের সাহায্য লাগবে, ঈমান কাউকে ভার থেকে রেহাই দেয় না। আয়াতটি যে প্রশ্নের উত্তর দেয় তা এই নয় যে কষ্ট আসবে কি না, বরং এই যে কষ্ট এলে কীসে ভর দিতে হবে — আর সে দুটি অবলম্বনের নাম নেয়: একটি ভেতরের, একটি কাজে করা।"
          },
          {
            "en": "The pairing has already appeared at 2:45, addressed there to the Children of Israel, with the warning that prayer is heavy except for the humble. Repeated now to the believers, it gains an ending the earlier verse lacked: inna Allaha ma'a as-sabirin, Allah is with the patient. The same prescription, but written this time with the companionship attached — as if to say the medicine is old, and the believers are being told what taking it earns.",
            "bn": "এই জোড় আগেই এসেছে 2:45 আয়াতে — সেখানে সম্বোধন ছিল বনী ইসরাঈলকে, সঙ্গে সতর্কবার্তা: নামায ভারী, বিনয়ীদের ছাড়া। এখন মুমিনদের কাছে পুনরাবৃত্ত হয়ে এটি এমন এক সমাপ্তি পায়, যা আগের আয়াতে ছিল না: 'ইন্নাল্লাহা মাআস-সাবিরীন' — আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। সেই একই ব্যবস্থাপত্র, কিন্তু এবার লেখা হয়েছে সাহচর্যটুকু জুড়ে দিয়ে — যেন বলা হচ্ছে: ওষুধটি পুরোনো, আর মুমিনদের জানানো হচ্ছে তা সেবনে কী অর্জিত হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Sabr Is",
          "bn": "সবর কী"
        },
        "p": [
          {
            "en": "Sabr in Arabic is confinement: holding the self in place. The scholars — as-Sa'di lays it out — divide it into three: patience upon obedience until it is done, patience away from sin until it passes, and patience under the decree without rage at it. All three are active. Nothing in the word means passivity; the person of sabr is holding a line under pressure, which is the opposite of doing nothing.",
            "bn": "আরবিতে 'সবর' মানে আটকে রাখা: নিজেকে জায়গায় ধরে রাখা। আলিমগণ — আস-সা'দী তা গুছিয়ে বলেন — একে তিন ভাগে ভাগ করেন: আনুগত্যের ওপর ধৈর্য, যতক্ষণ না তা সম্পন্ন হয়; পাপ থেকে দূরে থাকার ধৈর্য, যতক্ষণ না তা কেটে যায়; আর তাকদীরের অধীনে ধৈর্য — তার বিরুদ্ধে ক্ষোভ না করে। তিনটিই সক্রিয়। শব্দটির কোথাও নিষ্ক্রিয়তার অর্থ নেই; সবরকারী মানুষ চাপের মুখে একটি অবস্থান ধরে রাখছে — যা কিছু না করার ঠিক বিপরীত।"
          },
          {
            "en": "Ya'qub (AS) models a crucial distinction: he vowed beautiful patience in 12:83, and in 12:86 said, I only complain of my anguish and my grief to Allah. Complaint to Allah does not break sabr; complaint against Allah does. Nor do tears break it: the Prophet ﷺ wept when his son Ibrahim died and said the eye weeps and the heart grieves, but we say only what pleases our Lord — al-Bukhari relates it from Anas (RA).",
            "bn": "ইয়াকুব (আঃ) একটি গুরুত্বপূর্ণ পার্থক্যের নমুনা দেখান: তিনি 12:83 আয়াতে সুন্দর ধৈর্যের অঙ্গীকার করেন, আর 12:86 আয়াতে বলেন — আমি আমার অস্থিরতা ও দুঃখের অভিযোগ কেবল আল্লাহর কাছেই করছি। আল্লাহর কাছে অভিযোগ সবর ভাঙে না; আল্লাহর বিরুদ্ধে অভিযোগ ভাঙে। অশ্রুও তা ভাঙে না: পুত্র ইবরাহীমের মৃত্যুতে নবী ﷺ কেঁদেছিলেন এবং বলেছিলেন — চোখ অশ্রু ঝরায়, হৃদয় শোক করে, কিন্তু আমরা কেবল তা-ই বলি যা আমাদের রবকে সন্তুষ্ট করে — বুখারী এটি আনাস (রাঃ) থেকে বর্ণনা করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer as Help",
          "bn": "সাহায্য হিসেবে নামায"
        },
        "p": [
          {
            "en": "The second support is salah — named here not as duty but as help. Prayer helps in a way the praying person can verify: it interrupts the siege. Five times a day the matter that fills the horizon is set down, the body is placed before Allah, and the words of 1:5 — You alone we worship, You alone we ask for help — are said by someone who currently means them. Abu Dawud relates that when a matter distressed the Prophet ﷺ, he hastened to prayer.",
            "bn": "দ্বিতীয় অবলম্বন সালাত — এখানে তার নাম নেওয়া হয়েছে কর্তব্য হিসেবে নয়, সাহায্য হিসেবে। নামায এমনভাবে সাহায্য করে, যা নামাযি নিজে যাচাই করতে পারে: এটি অবরোধ ভেঙে দেয়। দিনে পাঁচবার দিগন্তজোড়া সমস্যাটি নামিয়ে রাখা হয়, দেহকে আল্লাহর সামনে দাঁড় করানো হয়, আর 1:5 আয়াতের শব্দগুলো — আমরা কেবল তোমারই ইবাদত করি, কেবল তোমারই কাছে সাহায্য চাই — উচ্চারণ করে এমন একজন, যে এই মুহূর্তে সত্যিই তা বোঝাতে চাইছে। আবু দাউদ বর্ণনা করেন, কোনো বিষয় নবী ﷺ-কে পীড়িত করলে তিনি দ্রুত নামাযে চলে যেতেন।"
          },
          {
            "en": "The commentators note the order of the pair: sabr, then salah — the general steadying, then the specific refuge. And they note what prayer presumes: that in hardship the first movement is toward Allah, not merely toward solutions. The one who prays about a problem has already refused to face it alone, and that refusal, repeated five times daily, is itself a treatment for the despair that isolation manufactures.",
            "bn": "মুফাসসিরগণ জোড়টির ক্রম লক্ষ করেন: আগে সবর, পরে সালাত — প্রথমে সাধারণ স্থিরতা, তারপর নির্দিষ্ট আশ্রয়। আর তাঁরা লক্ষ করেন নামায কী ধরে নেয়: কষ্টের সময় প্রথম পদক্ষেপ আল্লাহর দিকে, শুধু সমাধানের দিকে নয়। যে ব্যক্তি কোনো সমস্যা নিয়ে নামাযে দাঁড়ায়, সে ইতিমধ্যে একা তার মুখোমুখি হতে অস্বীকার করেছে — আর দিনে পাঁচবার পুনরাবৃত্ত সেই অস্বীকৃতিই একাকীত্বের তৈরি হতাশার একটি চিকিৎসা।"
          }
        ]
      },
      {
        "h": {
          "en": "With the Patient",
          "bn": "ধৈর্যশীলদের সঙ্গে"
        },
        "p": [
          {
            "en": "Inna Allaha ma'a as-sabirin. The scholars distinguish two kinds of withness in the Quran: the general one of knowledge — He is with you wherever you are, as 57:4 says — and a special one of support and protection reserved for particular servants. This verse states the special kind. It is a companionship of aid: help, steadying and care attached to the patient specifically, while His knowledge already covered everyone. The patient person is not merely observed; he is accompanied.",
            "bn": "'ইন্নাল্লাহা মাআস-সাবিরীন'। আলিমগণ কুরআনে দুই ধরনের 'সঙ্গে থাকা'র পার্থক্য করেন: জ্ঞানের সাধারণ সাহচর্য — তোমরা যেখানেই থাকো তিনি তোমাদের সঙ্গে আছেন, যেমন 57:4 বলে — আর সমর্থন ও হেফাজতের এক বিশেষ সাহচর্য, যা নির্দিষ্ট বান্দাদের জন্য তুলে রাখা। এই আয়াতে বলা হয়েছে বিশেষটির কথা। এটি সাহায্যের সাহচর্য: সহায়তা, স্থিরতা ও তত্ত্বাবধান — বিশেষভাবে ধৈর্যশীলদের সঙ্গে জোড়া, যেখানে তাঁর জ্ঞান তো আগেই সবাইকে ঘিরে রেখেছে। ধৈর্যশীল মানুষ কেবল পর্যবেক্ষিত নয়; সে সঙ্গপ্রাপ্ত।"
          },
          {
            "en": "The verse's neighbours show why the equipment was issued here. 2:154 corrects how the believers speak of those killed in Allah's path. 2:155 promises testing with fear, hunger and loss of wealth, lives and fruits, and sends glad tidings — to the patient. 2:156-157 then hand them their sentence for calamity, inna lillahi wa inna ilayhi raji'un, and name the return: salawat from their Lord, and mercy, and it is they who are guided.",
            "bn": "আয়াতটির প্রতিবেশীরা দেখায়, সরঞ্জামটি এখানে কেন সরবরাহ করা হলো। 2:154 শুধরে দেয়, আল্লাহর পথে নিহতদের সম্পর্কে মুমিনরা কীভাবে কথা বলবে। 2:155 প্রতিশ্রুতি দেয় ভয়, ক্ষুধা এবং সম্পদ, জীবন ও ফল-ফসলের ক্ষতি দিয়ে পরীক্ষার — আর সুসংবাদ পাঠায় ধৈর্যশীলদের কাছে। এরপর 2:156-157 তাদের হাতে তুলে দেয় বিপদের সময়ের বাক্য — 'ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন' — এবং প্রতিদানের নাম বলে: তাদের রবের পক্ষ থেকে সালাওয়াত ও রহমত, আর তারাই হিদায়াতপ্রাপ্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Believer's Whole Weather",
          "bn": "মুমিনের সব ঋতু"
        },
        "p": [
          {
            "en": "Muslim relates from Suhayb (RA) that the Prophet ﷺ said: wondrous is the affair of the believer, for all of his affair is good, and that belongs to no one but the believer — if ease reaches him he is grateful, and that is good for him; if harm reaches him he is patient, and that is good for him. Between that hadith and this verse, no weather is wasted on a believer; both halves of life have a productive response.",
            "bn": "মুসলিম সুহাইব (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: মুমিনের ব্যাপারটি আশ্চর্যের — তার সব ব্যাপারই কল্যাণের, আর তা মুমিন ছাড়া আর কারও জন্য নয় — স্বাচ্ছন্দ্য এলে সে শোকর করে, তা তার জন্য কল্যাণ; ক্ষতি পৌঁছালে সে সবর করে, তা-ও তার জন্য কল্যাণ। এই হাদীস আর এই আয়াত মিলিয়ে দেখলে, মুমিনের কোনো ঋতুই নষ্ট হয় না; জীবনের দুই অর্ধেকেরই একটি ফলদায়ক জবাব আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Practising the Pair",
          "bn": "জোড়টির অনুশীলন"
        },
        "p": [
          {
            "en": "The verse's practice is concrete because its nouns are concrete. When the hard thing arrives: first, hold — do not resign, retaliate, publish or decide in the first surge; that holding is sabr. Second, pray — not eventually, but as the Prophet ﷺ did, moving toward salah while the matter is still hot. The order of operations fits how a person actually breaks: speech first, then despair; so the verse steadies the tongue first and then fills it with prayer.",
            "bn": "আয়াতটির অনুশীলন সুনির্দিষ্ট, কারণ এর শব্দগুলো সুনির্দিষ্ট। কঠিন জিনিসটি এসে পড়লে: প্রথমে, ধরে রাখুন — প্রথম ঢেউয়ের মধ্যে হাল ছাড়বেন না, প্রতিশোধ নেবেন না, প্রচার করবেন না, সিদ্ধান্তও নেবেন না; সেই ধরে রাখাটাই সবর। দ্বিতীয়ত, নামায পড়ুন — 'পরে কখনো' নয়, বরং নবী ﷺ যেমন করতেন — বিষয়টি তেতে থাকা অবস্থাতেই সালাতের দিকে এগিয়ে। কাজের এই ক্রম মানুষের ভেঙে পড়ার প্রকৃত ধরনটির সঙ্গে মেলে: আগে মুখ, তারপর হতাশা; তাই আয়াতটি আগে জিহ্বাকে স্থির করে, তারপর তাকে দোয়ায় পূর্ণ করে।"
          },
          {
            "en": "And carry the ending as the point: Allah is with the patient. Patience in the Quran is never a lonely road; it is the most accompanied road there is. The relief may be slow, and the test may not lift — 2:155 promised testing, not exemption — but the company is immediate, from the first moment of holding on. That is the exchange the patient have always judged worthwhile: hardship with Him over ease without Him.",
            "bn": "আর সমাপ্তিটিকে মূল কথা হিসেবে বহন করুন: আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। কুরআনে ধৈর্য কখনো নিঃসঙ্গ পথ নয়; বরং এটিই সবচেয়ে বেশি সঙ্গপ্রাপ্ত পথ। স্বস্তি ধীরে আসতে পারে, পরীক্ষা না-ও উঠতে পারে — 2:155 পরীক্ষারই প্রতিশ্রুতি দিয়েছিল, অব্যাহতির নয় — কিন্তু সাহচর্যটি তাৎক্ষণিক, ধরে রাখার প্রথম মুহূর্ত থেকেই। এটিই সেই বিনিময়, যা ধৈর্যশীলরা বরাবর লাভজনক বিবেচনা করে এসেছে: তাঁকে ছাড়া স্বাচ্ছন্দ্যের চেয়ে তাঁর সঙ্গে কষ্ট।"
          }
        ]
      }
    ]
  },
  "2:155-157": {
    "sections": [
      {
        "h": {
          "en": "Testing Announced in Advance",
          "bn": "আগেই ঘোষিত পরীক্ষা"
        },
        "p": [
          {
            "en": "The sentence begins with an emphasis translation can barely carry: wa la-nabluwannakum, We will most certainly test you. Nothing here is conditional. The verse was given to the believers of Madinah in the early years, when insecurity, shortage and death in Allah's path were near realities, and it does not promise them exemption. It promises them information: the tests are coming, they are from Him, and they have a stated shape and a stated exit.",
            "bn": "বাক্যটি শুরু হয় এমন এক জোর দিয়ে, অনুবাদ যা কোনোমতে বহন করে: ওয়া লানাবলুওয়ান্নাকুম — আমি অবশ্যই অবশ্যই তোমাদের পরীক্ষা করব। এখানে কিছুই শর্তসাপেক্ষ নয়। আয়াতটি মদীনার প্রথম যুগের মুমিনদের দেওয়া হয়েছিল, যখন নিরাপত্তাহীনতা, অভাব আর আল্লাহর পথে মৃত্যু ছিল হাতের কাছের বাস্তবতা — আর এটি তাদের অব্যাহতির প্রতিশ্রুতি দেয় না। দেয় তথ্যের প্রতিশ্রুতি: পরীক্ষা আসছে, তা তাঁরই পক্ষ থেকে, আর তার একটি ঘোষিত রূপ ও ঘোষিত নিষ্ক্রমণপথ আছে।"
          },
          {
            "en": "Its neighbours set the frame. 2:153 has just told the believers to seek help through patience and prayer, and 2:154 has forbidden them to call those killed in Allah's path dead. Then comes the testing verse. The order matters: the equipment is issued before the trial is announced. Patience is not improvised in the middle of grief; it is a discipline the surah has already prescribed before naming what it will be needed for.",
            "bn": "প্রতিবেশী আয়াতগুলোই কাঠামো তৈরি করে। 2:153 এইমাত্র মুমিনদের বলেছে সবর ও নামাযের মাধ্যমে সাহায্য চাইতে, আর 2:154 নিষেধ করেছে আল্লাহর পথে নিহতদের মৃত বলতে। তারপর আসে পরীক্ষার আয়াত। এই ক্রমটি গুরুত্বপূর্ণ: পরীক্ষা ঘোষণার আগেই সরঞ্জাম বিতরণ করা হয়েছে। সবর শোকের মাঝখানে তাৎক্ষণিক বানানো জিনিস নয়; এটি এমন এক অনুশীলন, যা কীসের জন্য লাগবে তা বলার আগেই সূরা নির্ধারণ করে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Something of Fear",
          "bn": "সামান্য কিছু ভয়"
        },
        "p": [
          {
            "en": "The wording is merciful in a way easy to miss: bi-shay'in min al-khawf, with something of fear — a portion, not the whole. Commentators such as Ibn Kathir and as-Sa'di pause on this: whatever any believer faces, it is a measured fraction of what could be, sized to capacity. The list then names five doors through which loss enters a life: fear, hunger, loss of wealth, of lives, and of fruits — the harvests and earnings a person laboured over.",
            "bn": "শব্দচয়নে এমন এক রহমত আছে যা সহজে চোখ এড়ায়: বি-শাইয়িম মিনাল খাওফ — ভয়ের কিছু অংশ দিয়ে; পুরোটা নয়, একটি ভাগ। ইবনে কাসীর ও আস-সা'দীর মতো মুফাসসিরগণ এখানে থামেন: কোনো মুমিন যা-ই মোকাবিলা করুক, তা যা হতে পারত তার একটি মাপা ভগ্নাংশ — সামর্থ্য অনুযায়ী মাপা। এরপর তালিকায় আসে জীবনে ক্ষতি ঢোকার পাঁচটি দরজা: ভয়, ক্ষুধা, সম্পদের ক্ষতি, প্রাণের ক্ষতি, আর ফল-ফসলের ক্ষতি — মানুষ যে ফসল ও উপার্জনের জন্য পরিশ্রম করেছে।"
          },
          {
            "en": "At the end of the announcement stands a surprising word: wa bashshir as-sabirin, and give good news to the patient. Bushra is the vocabulary of victory and glad tidings, and here it is fastened to a list of losses. The verse is teaching a redefinition. For the patient, the trial is not only subtraction; it is the very ground on which the three gifts of 2:157 will be given, and so news of it can honestly be called good.",
            "bn": "ঘোষণার শেষে দাঁড়িয়ে আছে এক বিস্ময়কর শব্দ: ওয়া বাশশিরিস সাবিরীন — আর ধৈর্যশীলদের সুসংবাদ দাও। বুশরা হলো বিজয় ও খুশখবরের শব্দভান্ডার, অথচ এখানে তা জোড়া হয়েছে ক্ষতির এক তালিকার সঙ্গে। আয়াতটি একটি নতুন সংজ্ঞা শেখাচ্ছে। ধৈর্যশীলের কাছে পরীক্ষা কেবল বিয়োগ নয়; এটিই সেই জমি, যার ওপর 2:157-এর তিনটি উপহার দেওয়া হবে — তাই এর খবরকে সত্যিই সুসংবাদ বলা চলে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Patient Say",
          "bn": "ধৈর্যশীলরা যা বলে"
        },
        "p": [
          {
            "en": "2:156 defines the patient not by feeling less but by saying something true when struck: inna lillahi wa inna ilayhi raji'un — we belong to Allah, and to Him we return. The sentence contains two facts. We are His property, so what He reclaims was always His; and we are travelling toward Him, so no loss is final that ends where He is. Grief re-described this way still hurts, but it stops accusing.",
            "bn": "2:156 ধৈর্যশীলদের সংজ্ঞা দেয় কম কষ্ট অনুভব করা দিয়ে নয়, বরং আঘাতের মুহূর্তে একটি সত্য কথা বলা দিয়ে: ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন — আমরা আল্লাহরই, আর তাঁরই দিকে ফিরে যাব। বাক্যটিতে দুটি সত্য আছে। আমরা তাঁর সম্পত্তি, তাই তিনি যা ফিরিয়ে নেন তা বরাবরই তাঁর ছিল; আর আমরা তাঁরই দিকে চলেছি, তাই যে ক্ষতির শেষ তাঁর কাছে, তা চূড়ান্ত নয়। এভাবে নতুন করে বর্ণিত শোক তবু ব্যথা দেয়, কিন্তু অভিযোগ করা থামিয়ে দেয়।"
          },
          {
            "en": "The verse says idha asabat-hum musibah — when affliction strikes them, not some time afterwards. The Prophet ﷺ said, in the agreed-upon hadith, that patience is only at the first blow. The istirja is therefore meant to be ready before it is needed, kept close like a document one must produce at a checkpoint. Those who must first argue with the decree before accepting it have accepted something, but not quite what this verse describes.",
            "bn": "আয়াত বলে: ইযা আসাবাতহুম মুসীবাহ — যখন বিপদ তাদের আঘাত করে; পরে কোনো এক সময়ে নয়। নবী ﷺ বুখারী-মুসলিমে একমত হাদীসে বলেছেন, সবর তো প্রথম আঘাতের সময়েই। তাই ইস্তিরজার বাক্যটি দরকারের আগেই প্রস্তুত রাখার জিনিস — চেকপোস্টে দেখাতে হয় এমন কাগজের মতো কাছে রাখা। যারা তাকদীর মেনে নেওয়ার আগে তার সঙ্গে তর্ক সেরে নেন, তারা কিছু একটা মেনেছেন ঠিকই — কিন্তু এই আয়াত যা বর্ণনা করে, ঠিক তা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Umm Salamah's Exchange",
          "bn": "উম্মে সালামার বিনিময়"
        },
        "p": [
          {
            "en": "Muslim relates from Umm Salamah (RA) that the Prophet ﷺ taught: no servant is struck by an affliction and says — inna lillahi wa inna ilayhi raji'un; O Allah, reward me in my affliction and give me better in its place — except that Allah rewards him and gives him better. When her husband Abu Salamah (RA) died, she said the words, while wondering who could possibly be better than him.",
            "bn": "ইমাম মুসলিম উম্মে সালামা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ শিখিয়েছেন: কোনো বান্দা বিপদে পড়ে যদি বলে — ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন; হে আল্লাহ, আমার বিপদে আমাকে প্রতিদান দিন এবং এর বদলে উত্তম কিছু দিন — আল্লাহ তাকে প্রতিদান দেন এবং উত্তম বদল দেন। স্বামী আবু সালামা (রাঃ)-এর মৃত্যুর পর তিনি কথাগুলো বললেন — মনে মনে ভাবতে ভাবতে, আবু সালামার চেয়ে উত্তম আর কে হতে পারে।"
          },
          {
            "en": "Then the Prophet ﷺ himself sent for her in marriage, and she would later tell the story as its own proof: Allah gave her better than Abu Salamah. The narration turns the verse from doctrine into biography. The promise attached to patience is not deferred entirely to the next life; sometimes the replacement arrives in this one, and arrives in a form the mourner could not have had the imagination to request.",
            "bn": "এরপর স্বয়ং নবী ﷺ তাঁকে বিয়ের প্রস্তাব পাঠালেন, আর পরে তিনি ঘটনাটিকে তার নিজেরই প্রমাণ হিসেবে বলতেন: আল্লাহ তাঁকে আবু সালামার চেয়ে উত্তম দিয়েছেন। এই বর্ণনা আয়াতটিকে মতবাদ থেকে জীবনী বানিয়ে দেয়। সবরের সঙ্গে বাঁধা প্রতিশ্রুতি পুরোপুরি পরকালের জন্য স্থগিত নয়; কখনো কখনো বদলটি এই জীবনেই আসে — আর এমন রূপে আসে, যা চাওয়ার কল্পনাও শোকার্ত মানুষটির ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Salawat, Mercy, Guidance",
          "bn": "সালাওয়াত, রহমত, হিদায়াত"
        },
        "p": [
          {
            "en": "2:157 names what descends on such people: salawat from their Lord, and mercy, and the declaration that they are the guided. That Allah should send salawat — His praise and commendation — upon a grieving servant is an extraordinary honour, and the commentators note that patience is here itself called guidance: it is those people, the verse says, who are the muhtadun. Losing rightly turns out to be one of the ways of being found.",
            "bn": "2:157 বলে দেয় এমন মানুষদের ওপর কী নেমে আসে: তাদের রবের পক্ষ থেকে সালাওয়াত, রহমত, আর এই ঘোষণা যে তারাই হিদায়াতপ্রাপ্ত। শোকার্ত এক বান্দার ওপর আল্লাহ সালাওয়াত — তাঁর প্রশংসা ও স্বীকৃতি — পাঠাবেন, এ এক অসাধারণ সম্মান; আর মুফাসসিরগণ লক্ষ করেন, এখানে সবরকেই হিদায়াত বলা হয়েছে: আয়াত বলে, তারাই মুহতাদুন। দেখা যাচ্ছে, ঠিকভাবে হারাতে জানা আসলে পথ খুঁজে পাওয়ারই একটি উপায়।"
          },
          {
            "en": "Other verses complete the picture. 39:10 promises the patient their reward without measure, the only deed given that open-ended wage, and 64:11, revealed about calamity, says that whoever believes in Allah, He guides his heart. The lived practice is unglamorous: learn the words now, say them at the first blow, ask for the replacement, and let the ownership statement do its slow work on the accusation grief wants to make.",
            "bn": "অন্য আয়াতগুলো ছবিটি সম্পূর্ণ করে। 39:10 ধৈর্যশীলদের বেহিসাব প্রতিদানের প্রতিশ্রুতি দেয় — একমাত্র আমল যাকে এমন সীমাহীন মজুরি দেওয়া হয়েছে; আর বিপদ প্রসঙ্গে নাযিল হওয়া 64:11 বলে, যে আল্লাহর ওপর ঈমান আনে, তিনি তার হৃদয়কে পথ দেখান। বাস্তব অনুশীলনটি একেবারেই সাদামাটা: কথাগুলো এখনই শিখে নিন, প্রথম আঘাতেই বলুন, বদল চেয়ে নিন — আর মালিকানার ঘোষণাটিকে সুযোগ দিন, শোক যে অভিযোগ তুলতে চায় তার ওপর ধীরে ধীরে কাজ করার।"
          }
        ]
      }
    ]
  },
  "2:163": {
    "sections": [
      {
        "h": {
          "en": "One Sentence, the Whole Creed",
          "bn": "এক বাক্যে গোটা আকীদা"
        },
        "p": [
          {
            "en": "Wa ilahukum ilahun wahid — and your God is one God. Then the negation and affirmation that define Islam: there is no deity except Him, ar-Rahman, ar-Rahim. The verse is short enough to memorize in a minute, yet the commentators treat it as one of the Quran's fullest statements of tawheed: it names the claim, excludes every rival, and immediately tells you what the One you now worship alone is like.",
            "bn": "ওয়া ইলাহুকুম ইলাহুন ওয়াহিদ — আর তোমাদের ইলাহ এক ইলাহ। তারপর সেই অস্বীকৃতি ও স্বীকৃতি যা ইসলামকে সংজ্ঞায়িত করে: তিনি ছাড়া কোনো ইলাহ নেই — আর-রাহমান, আর-রাহীম। আয়াতটি এত ছোট যে এক মিনিটে মুখস্থ হয়, অথচ মুফাসসিরগণ একে কুরআনের পূর্ণতম তাওহীদ-ঘোষণাগুলোর একটি গণ্য করেন: এটি দাবিটি উচ্চারণ করে, প্রতিটি প্রতিদ্বন্দ্বীকে বাদ দেয়, আর সঙ্গে সঙ্গে জানিয়ে দেয় — যাঁর একার ইবাদত এখন করছেন, তিনি কেমন।"
          },
          {
            "en": "Ilah does not mean creator only; the mushrikun of Makkah agreed Allah created the heavens and the earth. Ilah is the one worshipped — loved, feared, hoped in, obeyed at the deepest level. So the verse's claim is not settled by conceding a Creator exists. It is settled only when worship, in all those inward senses, is actually given to Him alone.",
            "bn": "ইলাহ অর্থ কেবল স্রষ্টা নয়; মক্কার মুশরিকরাও মানত যে আসমান-যমীন আল্লাহই সৃষ্টি করেছেন। ইলাহ হলেন যাঁর ইবাদত করা হয় — যাঁকে ভালোবাসা হয়, ভয় করা হয়, যাঁর কাছে আশা রাখা হয়, গভীরতম স্তরে যাঁর আনুগত্য করা হয়। তাই স্রষ্টার অস্তিত্ব স্বীকার করলেই আয়াতের দাবি মিটে যায় না। তা মেটে কেবল তখনই, যখন ইবাদত — এর সব অন্তর্গত অর্থসহ — বাস্তবে একমাত্র তাঁকেই দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Claim, Then the Evidence",
          "bn": "দাবি, তারপর প্রমাণ"
        },
        "p": [
          {
            "en": "Placement carries argument in the Quran. Immediately after this verse comes 2:164, which sweeps through the heavens and the earth, night and day, the ships, the rain, the scattered creatures, the winds and the clouds, and calls them signs for a people who reason. The commentators read the pair together: 2:163 states that your God is one, and 2:164 lays out the evidence in front of every eye that will look.",
            "bn": "কুরআনে অবস্থানও যুক্তি বহন করে। এই আয়াতের ঠিক পরেই আসে 2:164, যা আসমান-যমীন, রাত-দিন, জাহাজ, বৃষ্টি, ছড়িয়ে থাকা প্রাণী, বায়ু আর মেঘ পেরিয়ে যায় এবং এসবকে বলে বোঝে এমন জাতির জন্য নিদর্শন। মুফাসসিরগণ জোড়াটিকে একসঙ্গে পড়েন: 2:163 ঘোষণা করে তোমাদের ইলাহ এক, আর 2:164 প্রমাণগুলো সাজিয়ে দেয় প্রতিটি চোখের সামনে, যে চোখ তাকাতে রাজি।"
          },
          {
            "en": "Two verses later, 2:165 describes the failure the claim excludes: people who take rivals besides Allah and love them as Allah should be loved — while those who believe are stronger in love for Allah. The sequence moves from doctrine to evidence to the heart, which is where the Quran always locates shirk and tawheed alike: not merely in what is said, but in what is loved most.",
            "bn": "দুই আয়াত পরে 2:165 বর্ণনা করে সেই ব্যর্থতা যা এই দাবি বাদ দেয়: যারা আল্লাহর পাশাপাশি প্রতিদ্বন্দ্বী গ্রহণ করে এবং আল্লাহকে যেমন ভালোবাসা উচিত তেমনভাবে তাদের ভালোবাসে — অথচ যারা ঈমান এনেছে তারা আল্লাহর ভালোবাসায় দৃঢ়তর। ধারাটি এগোয় আকীদা থেকে প্রমাণে, প্রমাণ থেকে হৃদয়ে — আর কুরআন শিরক ও তাওহীদ দুটিকেই সবসময় সেখানেই স্থাপন করে: কেবল মুখের কথায় নয়, সবচেয়ে বেশি কী ভালোবাসা হয় তাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Oneness Paired With Mercy",
          "bn": "একত্বের সঙ্গে রহমত"
        },
        "p": [
          {
            "en": "The verse could have closed with names of power — the Mighty, the Compeller — and the theology would stand. Instead it closes with ar-Rahman ar-Rahim, the two names of mercy the Quran opens with in 1:1-5, and the pairing is deliberate teaching. The One who tolerates no rival in worship is not a distant force to be appeased; He is overflowing in mercy toward the very servants He commands.",
            "bn": "আয়াতটি ক্ষমতার নাম দিয়ে শেষ হতে পারত — পরাক্রমশালী, মহাপ্রতাপশালী — তাতেও আকীদা দাঁড়িয়ে থাকত। বরং এটি শেষ হয় আর-রাহমান আর-রাহীম দিয়ে — রহমতের সেই দুই নাম যা দিয়ে কুরআন 1:1-5 অংশে শুরু হয়। এই জোড় সচেতন শিক্ষা। ইবাদতে যিনি কোনো প্রতিদ্বন্দ্বী সহ্য করেন না, তিনি তুষ্ট করার মতো কোনো দূরবর্তী শক্তি নন; যে বান্দাদের তিনি আদেশ করেন, তাদের প্রতিই তিনি রহমতে উপচে পড়া।"
          },
          {
            "en": "This changes what exclusive worship feels like from the inside. If the only God were only powerful, tawheed would be submission to strength. Because the only God is the Most Merciful, tawheed is also trust, closeness and relief: every need brought to one door, and behind that one door, mercy. The commentators note that the verse gives hope its foundation in the same breath that it removes every rival.",
            "bn": "এতে একনিষ্ঠ ইবাদতের ভেতরের অনুভবটাই বদলে যায়। একমাত্র ইলাহ যদি কেবল ক্ষমতাবান হতেন, তাওহীদ হতো শক্তির কাছে বশ্যতা। যেহেতু একমাত্র ইলাহ পরম করুণাময়, তাই তাওহীদ একই সঙ্গে ভরসা, নৈকট্য ও স্বস্তি: প্রতিটি প্রয়োজন এক দরজায় আনা, আর সেই এক দরজার পেছনে রহমত। মুফাসসিরগণ লক্ষ করেন, আয়াতটি যে নিঃশ্বাসে প্রতিটি প্রতিদ্বন্দ্বী সরায়, সেই নিঃশ্বাসেই আশার ভিত্তি গড়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Quran's Own Argument",
          "bn": "কুরআনের নিজস্ব যুক্তি"
        },
        "p": [
          {
            "en": "The Quran does not leave oneness as bare assertion. 21:22 argues: had there been in the heavens and the earth gods besides Allah, both would have fallen into ruin — two absolute wills cannot share one universe that runs this smoothly. And 23:91 adds: had there been gods with Him, each god would have taken away what it created and sought to overcome the others. The seamlessness of the world testifies to a single hand.",
            "bn": "কুরআন একত্বকে নিছক ঘোষণা হিসেবে ফেলে রাখে না। 21:22 যুক্তি দেয়: আসমান ও যমীনে আল্লাহ ছাড়া আরও ইলাহ থাকলে উভয়ই ধ্বংস হয়ে যেত — দুটি চূড়ান্ত ইচ্ছা এমন মসৃণভাবে চলা একটি মহাবিশ্ব ভাগ করে নিতে পারে না। আর 23:91 যোগ করে: তাঁর সঙ্গে অন্য ইলাহ থাকলে প্রত্যেক ইলাহ নিজের সৃষ্টি নিয়ে আলাদা হয়ে যেত এবং একে অন্যের ওপর প্রাধান্য চাইত। জগতের নিরবচ্ছিন্নতাই এক হাতের সাক্ষ্য দেয়।"
          },
          {
            "en": "This is why 2:163 can stand beside 2:164 without strain: the order of nature is not just beautiful, it is evidence. One law from the depth of the sea to the edge of the sky, one water feeding a thousand kinds of fruit, one pattern of night and day for every land — a plurality of gods would show seams, and there are none.",
            "bn": "এ কারণেই 2:163 কোনো টানাপোড়েন ছাড়া 2:164 আয়াতটির পাশে দাঁড়াতে পারে: প্রকৃতির শৃঙ্খলা কেবল সুন্দর নয়, তা প্রমাণ। সাগরের গভীর থেকে আকাশের প্রান্ত পর্যন্ত এক নিয়ম, এক পানি হাজার রকম ফল ফলায়, প্রতিটি ভূখণ্ডে রাত-দিনের এক ছন্দ — ইলাহ একাধিক হলে জোড়ার দাগ দেখা যেত, অথচ কোথাও কোনো দাগ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "One God, One Direction",
          "bn": "এক ইলাহ, এক অভিমুখ"
        },
        "p": [
          {
            "en": "Tawheed simplifies a life. Whoever serves many masters is pulled apart by them, as 39:29 pictures in its parable of the slave owned by quarrelling partners against the slave owned by one man — are the two equal? Fear of one God replaces a thousand scattered anxieties about people, luck and loss; hope in one God replaces the exhausting courting of everyone who might be useful.",
            "bn": "তাওহীদ জীবনকে সরল করে। যে বহু মনিবের সেবা করে, তারা তাকে টেনে ছিঁড়ে ফেলে — যেমন 39:29 চিত্রিত করে ঝগড়াটে অংশীদারদের মালিকানাধীন দাস বনাম এক ব্যক্তির মালিকানাধীন দাসের উপমায় — এই দুজন কি সমান? এক আল্লাহর ভয় মানুষ, ভাগ্য ও ক্ষতি নিয়ে হাজারো ছড়ানো দুশ্চিন্তার জায়গা নেয়; এক আল্লাহর আশা কাজে লাগতে পারে এমন প্রত্যেককে তোষামোদের ক্লান্তিকর চেষ্টার জায়গা নেয়।"
          },
          {
            "en": "The verse also guards against the subtler rivals that 2:165 warns of — not carved idols but loves that outrank Allah: wealth, status, opinion, ambition. The test of ilahun wahid is not whether we can recite it but what we obey when obedience becomes costly, and what we reach for first when we are afraid.",
            "bn": "আয়াতটি সেই সূক্ষ্মতর প্রতিদ্বন্দ্বীদের থেকেও রক্ষা করে, যাদের ব্যাপারে 2:165 সতর্ক করে — খোদাই করা মূর্তি নয়, বরং আল্লাহর ওপরে স্থান পাওয়া ভালোবাসাগুলো: সম্পদ, মর্যাদা, লোকের মতামত, উচ্চাকাঙ্ক্ষা। ইলাহুন ওয়াহিদের পরীক্ষা এটি মুখে বলতে পারি কি না তা নয়; বরং আনুগত্য যখন মূল্য দাবি করে তখন কার আনুগত্য করি, আর ভয় পেলে সবার আগে কার দিকে হাত বাড়াই — সেটিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping It Daily",
          "bn": "প্রতিদিনের চর্চায়"
        },
        "p": [
          {
            "en": "La ilaha illa Huwa is the sentence Islam begins with, and the tradition keeps it on the tongue: in the adhan, in the tashahhud of every prayer, in the remembrances of morning and evening. Repetition is not redundancy; it is maintenance. Each recitation re-centres the heart that has drifted during the day toward smaller fears and smaller hopes.",
            "bn": "লা ইলাহা ইল্লা হুয়া সেই বাক্য যা দিয়ে ইসলাম শুরু হয়, আর ঐতিহ্য একে জিহ্বায় জারি রাখে: আযানে, প্রতিটি নামাযের তাশাহহুদে, সকাল-সন্ধ্যার যিকিরে। পুনরাবৃত্তি বাহুল্য নয়; তা রক্ষণাবেক্ষণ। প্রতিটি উচ্চারণ সেই হৃদয়কে আবার কেন্দ্রে ফেরায়, যা দিনের মধ্যে ছোট ছোট ভয় আর ছোট ছোট আশার দিকে সরে গিয়েছিল।"
          },
          {
            "en": "Let the verse also set the tone of your asking. Because He is one, take every need to Him first, before any created door; because He is ar-Rahman ar-Rahim, take it to Him expecting kindness, not reluctance. That is tawheed made practice: absolute oneness, met with all-encompassing mercy, worshipped without rivals and approached without dread.",
            "bn": "আয়াতটিকে আপনার চাওয়ার সুরও ঠিক করতে দিন। তিনি এক বলে প্রতিটি প্রয়োজন প্রথমে তাঁর কাছেই নিন — কোনো সৃষ্টির দরজার আগে; তিনি আর-রাহমান আর-রাহীম বলে তাঁর কাছে যান দয়ার প্রত্যাশা নিয়ে, অনিচ্ছার আশঙ্কা নিয়ে নয়। এটিই চর্চায় পরিণত তাওহীদ: পরম একত্ব, সর্বব্যাপী রহমতের সঙ্গে মিলিত — প্রতিদ্বন্দ্বীহীন ইবাদত, আতঙ্কহীন উপস্থিতি।"
          }
        ]
      }
    ]
  },
  "2:164": {
    "sections": [
      {
        "h": {
          "en": "The Evidence After the Claim",
          "bn": "দাবির পর প্রমাণ"
        },
        "p": [
          {
            "en": "The verse before this one, 2:163, makes the largest claim a sentence can carry: your God is one God; there is no deity except Him. This verse immediately opens the case file. Indeed, in the creation of the heavens and the earth, the alternation of night and day, the ships, the rain, the creatures, the winds and the clouds — are signs for a people who reason. Assertion first, then evidence, laid out for any mind willing to work.",
            "bn": "এর আগের আয়াত 2:163 করে বসে একটি বাক্যে বহনযোগ্য বৃহত্তম দাবিটি: তোমাদের ইলাহ এক ইলাহ; তিনি ছাড়া কোনো ইলাহ নেই। এই আয়াতটি সঙ্গে সঙ্গে মামলার নথি খুলে দেয়। নিশ্চয় আসমান-যমীনের সৃষ্টিতে, রাত-দিনের আবর্তনে, জাহাজে, বৃষ্টিতে, প্রাণীদের মধ্যে, বাতাস আর মেঘে — নিদর্শন রয়েছে বোঝে এমন জাতির জন্য। আগে ঘোষণা, তারপর প্রমাণ — সাজিয়ে রাখা যেকোনো মনের সামনে, যে মন খাটতে রাজি।"
          },
          {
            "en": "The commentators note the pairing as a model of how the Quran argues. It does not demand belief in oneness as a blind leap; it points at the world and says: examine. The verse's closing phrase — li-qawmin ya'qilun, for a people who use reason — makes intellect the intended audience. Reason, in the Quran, is not faith's rival to be subdued but faith's instrument, invited to do its best work on the evidence.",
            "bn": "মুফাসসিরগণ এই জোড়টিকে লক্ষ করেন কুরআনের যুক্তি দেওয়ার এক আদর্শ নমুনা হিসেবে। এটি একত্বে বিশ্বাসকে অন্ধ লাফ হিসেবে দাবি করে না; জগতের দিকে আঙুল তুলে বলে: পরীক্ষা করো। আয়াতের সমাপ্তি-বাক্য — লি-কাওমিন ইয়াকিলূন, বোঝে এমন জাতির জন্য — বুদ্ধিকেই অভীষ্ট শ্রোতা বানায়। কুরআনে বিবেক ঈমানের দমনযোগ্য প্রতিদ্বন্দ্বী নয়, ঈমানের হাতিয়ার — প্রমাণের ওপর নিজের সেরা কাজটি করার আমন্ত্রিত অতিথি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Signs the Verse Gathers",
          "bn": "আয়াতে গাঁথা নিদর্শনসমূহ"
        },
        "p": [
          {
            "en": "Count what the verse gathers: the creation of the heavens and the earth; the alternation of night and day; the ships running through the sea with what benefits people; the water Allah sends down, giving life to the earth after its death; every creature He has scattered through it; the turning of the winds; and the clouds held subjected between sky and earth. From cosmic architecture down to a drifting cloud, one unbroken chain of evidence.",
            "bn": "গুনে দেখুন আয়াতটি কী কী একত্র করে: আসমান-যমীনের সৃষ্টি; রাত-দিনের আবর্তন; মানুষের উপকারী পণ্য নিয়ে সাগরে চলা জাহাজ; আল্লাহর নামানো পানি — যা মরে যাওয়ার পর যমীনকে জীবন দেয়; তাতে ছড়িয়ে দেওয়া প্রতিটি প্রাণী; বাতাসের দিক বদল; আর আকাশ ও যমীনের মাঝখানে অনুগত রাখা মেঘ। মহাজাগতিক স্থাপত্য থেকে ভেসে চলা এক টুকরো মেঘ পর্যন্ত — প্রমাণের এক অবিচ্ছিন্ন শৃঙ্খল।"
          },
          {
            "en": "The selection has a quiet logic. Some signs are pure divine act — sky, rain, life. One is human craft: the ship, built by hands yet carried only because water bears weight, winds blow and stars guide, all by His ordering. Including it teaches that technology sails inside His laws, never outside them, and that human skill, honestly traced, ends at dependencies no human made.",
            "bn": "নির্বাচনটির এক নীরব যুক্তি আছে। কিছু নিদর্শন বিশুদ্ধ ইলাহি কাজ — আকাশ, বৃষ্টি, জীবন। একটি মানুষের কারিগরি: জাহাজ — হাতে গড়া, অথচ ভেসে থাকে কেবল এ কারণে যে পানি ভার বহন করে, বাতাস বয়, তারা পথ দেখায় — সবই তাঁর বিন্যাসে। একে অন্তর্ভুক্ত করা শেখায়: প্রযুক্তি তাঁর নিয়মের ভেতরে চলে, কখনো বাইরে নয়; আর মানুষের দক্ষতা, সততার সঙ্গে উৎস ধরে গেলে, গিয়ে থামে এমন সব নির্ভরতায় যা কোনো মানুষ বানায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ordinary Made Loud",
          "bn": "সাধারণ যখন সরব"
        },
        "p": [
          {
            "en": "Nothing in the list is exotic. No one alive has missed a sunrise, a rainfall or a cloud; that is precisely the point. The Quran locates its evidence in what familiarity has silenced, and the word it uses for these things — ayat, signs — is the same word used for its own verses. Scholars have long drawn the conclusion: creation and revelation are two books from one Author, and this verse is where a page of each is held up together.",
            "bn": "তালিকার কিছুই দুর্লভ নয়। জীবিত কেউ সূর্যোদয়, বৃষ্টি বা মেঘ দেখেনি এমন নেই; ঠিক এটিই মূল কথা। কুরআন তার প্রমাণ রাখে সেখানেই, যাকে অতিপরিচিতি নীরব করে দিয়েছে; আর এসবের জন্য যে শব্দটি ব্যবহার করে — আয়াত, নিদর্শন — সেটি তার নিজের বাক্যগুলোর জন্য ব্যবহৃত শব্দই। আলিমগণ বহু আগেই সিদ্ধান্তটি টেনেছেন: সৃষ্টি ও ওহী এক লেখকের দুই কিতাব — আর এই আয়াতে দুটিরই এক-একটি পাতা পাশাপাশি তুলে ধরা হয়েছে।"
          },
          {
            "en": "Familiarity is treated as a veil to be lifted, not a verdict of insignificance. The rain that bores a commuter fed every civilization; the night that merely ends a day rests every body on earth. 30:21-24 works the same method on sleep, lightning and the love between spouses — ordinary mercies re-announced as signs — each paragraph ending by naming the audience able to hear it: those who listen, those who reason, those who reflect.",
            "bn": "অতিপরিচিতিকে গণ্য করা হয় সরিয়ে ফেলার পর্দা হিসেবে, তুচ্ছতার রায় হিসেবে নয়। যে বৃষ্টি নিত্যযাত্রীকে বিরক্ত করে তা প্রতিটি সভ্যতাকে খাইয়েছে; যে রাত কেবল একটি দিন শেষ করে তা পৃথিবীর প্রতিটি দেহকে বিশ্রাম দেয়। 30:21-24 একই পদ্ধতি খাটায় ঘুম, বিদ্যুৎ আর দম্পতির ভালোবাসার ওপর — সাধারণ রহমতগুলো নতুন করে ঘোষিত হয় নিদর্শন হিসেবে — প্রতিটি অংশ শেষ হয় শুনতে সক্ষম শ্রোতার নাম নিয়ে: যারা শোনে, যারা বোঝে, যারা চিন্তা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Rain and the Resurrection",
          "bn": "বৃষ্টি ও পুনরুত্থান"
        },
        "p": [
          {
            "en": "One sign in the list carries doctrine as well as wonder: the water that gives life to the earth after its death. The Quran repeatedly holds this up as the visible rehearsal of resurrection; 35:9 completes the analogy in so many words — He drives the clouds to a dead land and revives the earth with it: thus is the resurrection. Every rainfall re-stages what 36:33 also names a sign: the dead earth, revived, from which they eat.",
            "bn": "তালিকার একটি নিদর্শন বিস্ময়ের সঙ্গে আকীদাও বহন করে: সেই পানি যা মরে যাওয়ার পর যমীনকে জীবন দেয়। কুরআন বারবার একে তুলে ধরে পুনরুত্থানের দৃশ্যমান মহড়া হিসেবে; 35:9 উপমাটি স্পষ্ট ভাষায় সম্পূর্ণ করে — তিনি মেঘকে হাঁকিয়ে নেন মৃত ভূখণ্ডের দিকে এবং তা দিয়ে যমীনকে জীবিত করেন: পুনরুত্থানও এমনই। প্রতিটি বৃষ্টি নতুন করে মঞ্চস্থ করে যাকে 36:33 আয়াতও নিদর্শন বলে নাম নেয়: মৃত যমীন, জীবিত করা, যা থেকে তারা খায়।"
          },
          {
            "en": "The mufassirun read the whole list this way, as evidence with directions. Upward, it establishes the Creator's oneness — the seamless coordination of sky, sea and wind is the argument of 21:22 made visible. Forward, it establishes His power to repeat what He began. The verse thus quietly carries the Quran's two great contested claims, tawheed and resurrection, on the back of phenomena no denier could deny experiencing.",
            "bn": "মুফাসসিরগণ পুরো তালিকাটিই এভাবে পড়েন — দিকনির্দেশসহ প্রমাণ হিসেবে। ঊর্ধ্বমুখে এটি প্রতিষ্ঠা করে স্রষ্টার একত্ব — আকাশ, সাগর ও বাতাসের নিখুঁত সমন্বয় হলো 21:22 আয়াতের যুক্তি চোখের সামনে। সম্মুখমুখে এটি প্রতিষ্ঠা করে তাঁর ক্ষমতা — যা তিনি শুরু করেছেন তা আবার করার। আয়াতটি তাই নীরবে বহন করে কুরআনের দুটি সবচেয়ে বিতর্কিত দাবি — তাওহীদ ও পুনরুত্থান — এমন সব ঘটনার কাঁধে চাপিয়ে, যেগুলোর অভিজ্ঞতা কোনো অস্বীকারকারীও অস্বীকার করতে পারত না।"
          }
        ]
      },
      {
        "h": {
          "en": "For a People Who Reason",
          "bn": "বোঝে এমন জাতির জন্য"
        },
        "p": [
          {
            "en": "Li-qawmin ya'qilun. The Quran ends its sign-verses with varied conditions — for those who reflect, who listen, who are certain — and the variation is deliberate, matching each set of signs to the faculty that best receives it. Here, where the signs form an interlocking system, the summons is to aql, reason: the capacity that connects, infers and refuses to believe that an unbroken order assembled itself from nowhere.",
            "bn": "লি-কাওমিন ইয়াকিলূন। কুরআন তার নিদর্শন-আয়াতগুলো শেষ করে বিভিন্ন শর্তে — যারা চিন্তা করে, যারা শোনে, যারা দৃঢ় বিশ্বাসী — আর এই বৈচিত্র্য ইচ্ছাকৃত: প্রতিটি নিদর্শনগুচ্ছকে মেলানো হয় সেই বোধশক্তির সঙ্গে, যা তাকে সবচেয়ে ভালো গ্রহণ করে। এখানে, যেখানে নিদর্শনগুলো এক আন্তঃসংযুক্ত ব্যবস্থা গড়ে, আহ্বানটি আকলের — বিবেকের প্রতি: সেই ক্ষমতা যা জোড়ে, সিদ্ধান্ত টানে, এবং মানতে অস্বীকার করে যে এক অবিচ্ছিন্ন শৃঙ্খলা শূন্য থেকে নিজে নিজে জুড়ে গেছে।"
          },
          {
            "en": "3:190-191 paints the people who answer the summons: in the creation of the heavens and the earth and the alternation of night and day are signs for those of understanding — who remember Allah standing, sitting and on their sides, and reflect on creation until it issues in speech: our Lord, You did not create this in vain. Observation, remembrance, reflection, then prayer — a complete method in two verses.",
            "bn": "3:190-191 এঁকে দেয় সেই মানুষদের, যারা আহ্বানে সাড়া দেয়: আসমান-যমীনের সৃষ্টিতে এবং রাত-দিনের আবর্তনে নিদর্শন রয়েছে বোধসম্পন্নদের জন্য — যারা দাঁড়িয়ে, বসে ও কাত হয়ে আল্লাহকে স্মরণ করে এবং সৃষ্টি নিয়ে চিন্তা করে, যতক্ষণ না তা ফুটে ওঠে কথায়: আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি। পর্যবেক্ষণ, স্মরণ, চিন্তা, তারপর প্রার্থনা — দুই আয়াতে এক সম্পূর্ণ পদ্ধতি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Habit of Looking",
          "bn": "দেখার অভ্যাস"
        },
        "p": [
          {
            "en": "The verse's practice is tafakkur, and it needs scheduling like anything precious. Take one item from the list per week and actually look: follow one rainfall from cloud to soil; learn what keeps a laden ship above thousands of metres of water; notice which creatures share your street. End each looking the way 3:191 ends, with the mind's discovery handed up as praise.",
            "bn": "আয়াতের চর্চা তাফাক্কুর, আর মূল্যবান সবকিছুর মতো এরও সময়সূচি লাগে। প্রতি সপ্তাহে তালিকা থেকে একটি বিষয় নিন এবং সত্যিই তাকান: একটি বৃষ্টিকে মেঘ থেকে মাটি পর্যন্ত অনুসরণ করুন; শিখুন হাজার হাজার মিটার পানির ওপরে বোঝাই জাহাজকে কী ভাসিয়ে রাখে; খেয়াল করুন কোন প্রাণীরা আপনার পাড়া ভাগ করে নেয়। প্রতিটি দেখা শেষ করুন যেভাবে 3:191 শেষ হয় — মনের আবিষ্কারটুকু প্রশংসা হয়ে ওপরে তুলে দিয়ে।"
          },
          {
            "en": "Done steadily, the habit converts the daily commute into a gallery and dulls the false division between thinking and worship. The verse asked for a people who reason; it is inviting you to be one of them — someone for whom the sky is no longer background, the rain no longer weather only, and every ordinary thing has resumed its first job: pointing, insistently and precisely, at its Maker.",
            "bn": "নিয়মিত করলে অভ্যাসটি প্রতিদিনের যাতায়াতকে চিত্রশালায় বদলে দেয় এবং চিন্তা ও ইবাদতের মধ্যকার মিথ্যা দেয়ালটি ভোঁতা করে দেয়। আয়াতটি চেয়েছে বোঝে এমন এক জাতি; সে আপনাকেই তাদের একজন হওয়ার আমন্ত্রণ জানাচ্ছে — এমন কেউ, যার কাছে আকাশ আর পটভূমি নয়, বৃষ্টি আর কেবল আবহাওয়া নয়, আর প্রতিটি সাধারণ জিনিস ফিরে পেয়েছে তার প্রথম কাজ: অবিরাম ও নিখুঁতভাবে তার নির্মাতার দিকে ইশারা করা।"
          }
        ]
      }
    ]
  },
  "2:165": {
    "sections": [
      {
        "h": {
          "en": "Rivals in the Heart",
          "bn": "হৃদয়ের ভেতরের প্রতিদ্বন্দ্বী"
        },
        "p": [
          {
            "en": "The verse opens with a diagnosis: among mankind are those who take, besides Allah, andad — rivals — loving them as they love Allah. Andad is the plural of nidd, which in Arabic is not any competitor but a peer, something treated as an equal and a match. The charge is precise. These people did not deny Allah; the pagans of Makkah affirmed Him as Creator. Their disease was dividing the heart's supreme love and handing a share of it elsewhere.",
            "bn": "আয়াতটি শুরু হয় একটি রোগনির্ণয় দিয়ে: মানুষের মধ্যে কেউ কেউ আল্লাহকে ছেড়ে 'আনদাদ' — প্রতিদ্বন্দ্বী — গ্রহণ করে, তাদের ভালোবাসে আল্লাহকে ভালোবাসার মতো করে। আনদাদ শব্দটি নিদ্দ-এর বহুবচন, যা আরবিতে যেকোনো প্রতিযোগী নয়, বরং সমকক্ষ — যাকে সমান ও জুড়ি গণ্য করা হয়। অভিযোগটি সুনির্দিষ্ট। এই লোকেরা আল্লাহকে অস্বীকার করেনি; মক্কার মুশরিকরা তাঁকে স্রষ্টা বলে মানত। তাদের রোগ ছিল হৃদয়ের সর্বোচ্চ ভালোবাসাকে ভাগ করে তার একটি অংশ অন্যত্র তুলে দেওয়া।"
          },
          {
            "en": "The word nidd carries a weight the Prophet ﷺ himself underlined. Al-Bukhari narrates from Ibn Mas'ud (RA) that he asked the Prophet ﷺ which sin is greatest in Allah's sight, and the answer began: that you set up a nidd for Allah while He created you. The greatest of all wrongs, in that answer, is not first an act of violence but a transaction of the heart — giving to a creature what belongs to the One who made you.",
            "bn": "নিদ্দ শব্দটির ভার নবী ﷺ নিজেই রেখাঙ্কিত করেছেন। বুখারী ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেন, তিনি নবী ﷺ-কে জিজ্ঞেস করেন আল্লাহর কাছে কোন গুনাহ সবচেয়ে বড়, আর উত্তর শুরু হয়: তুমি আল্লাহর জন্য নিদ্দ স্থির করবে অথচ তিনিই তোমাকে সৃষ্টি করেছেন। সেই উত্তরে সব অন্যায়ের বৃহত্তমটি প্রথমত কোনো সহিংস কাজ নয়, বরং হৃদয়ের একটি লেনদেন — যিনি আপনাকে বানিয়েছেন তাঁর প্রাপ্য একটি সৃষ্টিকে দিয়ে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Rivals Wear Many Faces",
          "bn": "প্রতিদ্বন্দ্বীর বহু চেহারা"
        },
        "p": [
          {
            "en": "The commentators refuse to leave the verse safely in the past with carved idols. A nidd, they explain, is whatever receives the love, hope, fear or obedience that belong to Allah alone — a leader followed into clear disobedience, wealth pursued past every limit, a person whose approval outweighs the Creator's command. The verse says these attachments are loved ka-hubbillah, as Allah is loved: the same longing, the same sacrifice, the same fear of loss, aimed at something that cannot sustain it.",
            "bn": "মুফাসসিরগণ আয়াতটিকে খোদাই করা মূর্তিসহ অতীতে নিরাপদে ফেলে রাখতে অস্বীকার করেন। তাঁরা ব্যাখ্যা করেন, নিদ্দ হলো তা-ই, যা পায় সেই ভালোবাসা, আশা, ভয় বা আনুগত্য, যা কেবল আল্লাহর প্রাপ্য — স্পষ্ট নাফরমানিতে অনুসৃত কোনো নেতা, সব সীমা ছাড়িয়ে পিছু নেওয়া সম্পদ, এমন কোনো ব্যক্তি যার সন্তুষ্টি স্রষ্টার নির্দেশের চেয়ে ভারী। আয়াত বলে, এই সংযুক্তিগুলোকে ভালোবাসা হয় 'কাহুব্বিল্লাহ' — যেভাবে আল্লাহকে ভালোবাসা হয়: একই আকুতি, একই ত্যাগ, একই হারানোর ভয় — তাক করা এমন কিছুর দিকে, যা তা বহন করতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Stronger in Love",
          "bn": "ভালোবাসায় প্রগাঢ়তর"
        },
        "p": [
          {
            "en": "Against this the verse sets its counterweight: but those who believe are ashaddu hubban lillah, more intense in love for Allah. The commentators ask why the believers' love is stronger and answer from the verse's own logic. It is undivided, while the idolater's love is scattered among many claimants. It rests on knowledge of the One loved, so it does not collapse when circumstances turn. And it is anchored in the source of every blessing rather than in one of the blessings.",
            "bn": "এর বিপরীতে আয়াত তার প্রতিভার স্থাপন করে: কিন্তু যারা ঈমান এনেছে তারা 'আশাদ্দু হুব্বাল লিল্লাহ' — আল্লাহর প্রতি ভালোবাসায় প্রগাঢ়তর। মুফাসসিরগণ প্রশ্ন করেন, মুমিনদের ভালোবাসা কেন বেশি শক্তিশালী, আর উত্তর দেন আয়াতের নিজস্ব যুক্তি থেকে। এই ভালোবাসা অবিভক্ত, অথচ মুশরিকের ভালোবাসা বহু দাবিদারের মধ্যে ছড়ানো। এটি দাঁড়িয়ে আছে প্রিয়জন সম্পর্কে জ্ঞানের ওপর, তাই পরিস্থিতি বদলে গেলে তা ভেঙে পড়ে না। আর এটি নোঙর করা প্রতিটি নিয়ামতের উৎসে, কোনো একটি নিয়ামতে নয়।"
          },
          {
            "en": "The Quran demonstrates the difference at sea. In 29:65, when the idolaters board a ship, they call on Allah alone, sincere to Him in religion — then, delivered safely to land, they return to their partners. Crisis strips their rivals of pretence in a moment. The believer's love is precisely what remains when that stripping happens, made permanent: the crisis-sincerity of the drowning man, held steadily on dry land.",
            "bn": "কুরআন এই পার্থক্য দেখায় সমুদ্রে। 29:65 আয়াতে, মুশরিকরা যখন নৌযানে আরোহণ করে, তারা একনিষ্ঠ হয়ে কেবল আল্লাহকেই ডাকে — তারপর নিরাপদে ডাঙায় পৌঁছে দেওয়া হলে তারা তাদের শরীকদের কাছে ফিরে যায়। সংকট এক মুহূর্তে তাদের প্রতিদ্বন্দ্বীদের ভান খুলে ফেলে। মুমিনের ভালোবাসা ঠিক তা-ই, যা সেই খুলে ফেলার পরে অবশিষ্ট থাকে — স্থায়ী রূপে: ডুবন্ত মানুষের সংকট-মুহূর্তের একনিষ্ঠতা, শুকনো ডাঙায় স্থিরভাবে ধরে রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "When All Power Is Seen",
          "bn": "যখন সমস্ত শক্তি দৃশ্যমান হবে"
        },
        "p": [
          {
            "en": "The verse then looks forward with a sentence of terrible clarity: if only those who wronged could see, when they see the punishment, that power belongs to Allah entirely, and that Allah is severe in punishment. The rivals were loved because they seemed to hold benefit — status, protection, provision. On the Day the truth is unveiled, every ounce of quwwah, power, is seen where it always was. The beloved rivals hold nothing and never did.",
            "bn": "এরপর আয়াতটি সামনে তাকায় ভয়ংকর স্পষ্টতার একটি বাক্যে: হায়, যারা জুলুম করেছে তারা যদি দেখত — যখন তারা শাস্তি দেখবে — যে সমস্ত শক্তি সম্পূর্ণরূপে আল্লাহর, আর আল্লাহ শাস্তিদানে কঠোর। প্রতিদ্বন্দ্বীদের ভালোবাসা হতো কারণ মনে হতো তাদের হাতে উপকার আছে — মর্যাদা, সুরক্ষা, রিযিক। যেদিন সত্য উন্মোচিত হবে, সেদিন 'কুওয়াহ' — শক্তির — প্রতিটি কণা দেখা যাবে সেখানেই, যেখানে তা বরাবর ছিল। প্রিয় প্রতিদ্বন্দ্বীদের হাতে কিছুই নেই, কখনো ছিলও না।"
          },
          {
            "en": "The two verses that follow, 2:166-167, complete the scene: the followed disown their followers, the bonds between them are cut, and those who followed wish for one return to the world so they could disown in turn. Every love built on a rival ends in mutual repudiation. The Quran shows this not to satisfy curiosity about the Last Day but so that the repudiation can happen now, voluntarily, while it still counts.",
            "bn": "পরের দুটি আয়াত 2:166-167 দৃশ্যটি সম্পূর্ণ করে: যাদের অনুসরণ করা হতো তারা অনুসারীদের অস্বীকার করবে, তাদের মধ্যের বন্ধন ছিন্ন হবে, আর অনুসারীরা কামনা করবে দুনিয়ায় একবার ফিরে যাওয়ার — যেন তারাও পাল্টা অস্বীকার করতে পারে। প্রতিদ্বন্দ্বীর ওপর গড়া প্রতিটি ভালোবাসার শেষ পারস্পরিক অস্বীকৃতিতে। কুরআন এটি দেখায় শেষ দিবস নিয়ে কৌতূহল মেটাতে নয়, বরং যেন সেই অস্বীকৃতি এখনই ঘটে — স্বেচ্ছায়, যখন তা এখনো কাজে লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Love with a Test Attached",
          "bn": "মানদণ্ডসহ ভালোবাসা"
        },
        "p": [
          {
            "en": "How does a person know which love actually rules his heart? The Quran supplies the instrument in 3:31, where the claim of loving Allah is tested by following His Messenger ﷺ, and Allah's love and forgiveness are promised in return. Feelings can be argued about endlessly; following can be observed. The supreme love this verse describes is therefore not a private glow but a standing arrangement of one's life around the Beloved's word.",
            "bn": "মানুষ কীভাবে জানবে কোন ভালোবাসা আসলে তার হৃদয় শাসন করছে? কুরআন যন্ত্রটি সরবরাহ করে 3:31 আয়াতে, যেখানে আল্লাহকে ভালোবাসার দাবি যাচাই হয় তাঁর রাসূল ﷺ-এর অনুসরণ দিয়ে, আর বিনিময়ে প্রতিশ্রুত হয় আল্লাহর ভালোবাসা ও ক্ষমা। অনুভূতি নিয়ে অন্তহীন তর্ক চলে; অনুসরণ চোখে দেখা যায়। তাই এই আয়াত যে সর্বোচ্চ ভালোবাসার কথা বলে, তা কোনো গোপন আবেশ নয়, বরং প্রিয়তমের বাণীকে ঘিরে নিজের জীবনের একটি স্থায়ী বিন্যাস।"
          }
        ]
      },
      {
        "h": {
          "en": "Auditing the Heart",
          "bn": "হৃদয়ের হিসাব নেওয়া"
        },
        "p": [
          {
            "en": "The verse invites an audit that no one else can run for you. Ask what you sacrifice for without being asked, what you obey reflexively, what loss frightens you most, what your thoughts return to when they are free. The answers mark where your strongest love currently sits. Nothing in the verse forbids loving family, wealth or comfort; the Quran commands kindness to kin and calls wealth a favour. The question is only ever about rank.",
            "bn": "আয়াতটি এমন এক হিসাবের আমন্ত্রণ জানায়, যা আপনার হয়ে আর কেউ চালাতে পারে না। জিজ্ঞেস করুন — কীসের জন্য আপনি না চাইতেই ত্যাগ করেন, কীসের আনুগত্য করেন প্রায় প্রতিবর্তী ক্রিয়ায়, কোন ক্ষতি আপনাকে সবচেয়ে ভয় দেখায়, অবসরে আপনার চিন্তা কোথায় ফিরে যায়। উত্তরগুলোই চিহ্নিত করে আপনার প্রবলতম ভালোবাসা এখন কোথায় বসে আছে। পরিবার, সম্পদ বা স্বাচ্ছন্দ্য ভালোবাসতে আয়াতের কিছুই নিষেধ করে না; কুরআন আত্মীয়ের প্রতি সদাচার আদেশ করে এবং সম্পদকে অনুগ্রহ বলে। প্রশ্নটি বরাবরই কেবল ক্রমের।"
          },
          {
            "en": "And rank is corrected the way it was corrupted — gradually, by direction of attention. Love for Allah grows by knowing Him: reading His words as addressed to you, tracing His names in what happens to you, remembering Him until remembrance becomes the heart's default. As that love thickens, the rivals shrink back into what they really are — gifts to be received from Him, enjoyed for Him and, when He asks, surrendered to Him.",
            "bn": "আর ক্রম শোধরায় সেই পথেই, যে পথে তা বিকৃত হয়েছিল — ধীরে ধীরে, মনোযোগের অভিমুখ বদলে। আল্লাহর প্রতি ভালোবাসা বাড়ে তাঁকে জানার মধ্য দিয়ে: তাঁর বাণী নিজের প্রতি সম্বোধন হিসেবে পড়া, নিজের জীবনে যা ঘটে তাতে তাঁর নামগুলোর ছাপ খোঁজা, তাঁকে স্মরণ করতে থাকা যতক্ষণ না স্মরণই হৃদয়ের সহজাত অবস্থা হয়ে ওঠে। সেই ভালোবাসা ঘন হতে হতে প্রতিদ্বন্দ্বীরা সংকুচিত হয়ে ফিরে যায় তাদের আসল পরিচয়ে — উপহার, যা তাঁর কাছ থেকে গ্রহণ করার, তাঁর জন্য উপভোগ করার, আর তিনি চাইলে তাঁর হাতে সমর্পণ করার।"
          }
        ]
      }
    ]
  },
  "2:183": {
    "sections": [
      {
        "h": {
          "en": "Written, As It Was Written",
          "bn": "লেখা হলো, যেমন লেখা হয়েছিল"
        },
        "p": [
          {
            "en": "The verse uses the vocabulary of decree: kutiba alaykumus-siyam, fasting has been written upon you. In this same stretch of Surah al-Baqarah the identical verb prescribes just retribution in 2:178 and the bequest in 2:180. Fasting arrives with that weight — not a recommendation for the devout, but legislation for the whole community, addressed as you who believe. It was made obligatory in Madinah, in the second year after the hijrah.",
            "bn": "আয়াতটি ফরমানের ভাষা ব্যবহার করে: কুতিবা আলাইকুমুস সিয়াম — তোমাদের ওপর রোযা লিখে দেওয়া হয়েছে। সূরা আল-বাকারার এই একই অংশে একই ক্রিয়াপদ 2:178-এ কিসাস এবং 2:180-এ অসিয়ত ফরয করেছে। রোযা সেই ওজন নিয়েই আসে — ধার্মিকদের জন্য পরামর্শ নয়, বরং গোটা সম্প্রদায়ের জন্য বিধান, যাদের সম্বোধন করা হয়েছে 'হে ঈমানদারগণ' বলে। এটি ফরয হয়েছিল মদীনায়, হিজরতের দ্বিতীয় বছরে।"
          },
          {
            "en": "Then comes a clause that changes the mood of the command: kama kutiba alal-ladhina min qablikum, as it was written upon those before you. Communities before this ummah were also given fasting in some form; the Quran does not detail their forms, and the differing reports the commentators relate about them settle nothing. The point of the comparison is companionship in discipline: restraining the self for Allah's sake is not an innovation but an old, shared road.",
            "bn": "এরপর আসে এমন এক বাক্যাংশ, যা আদেশের আবহ বদলে দেয়: কামা কুতিবা আলাল্লাযীনা মিন কাবলিকুম — যেমন লেখা হয়েছিল তোমাদের আগের লোকদের ওপর। এই উম্মতের আগের সম্প্রদায়গুলোকেও কোনো না কোনো রূপে রোযা দেওয়া হয়েছিল; কুরআন তাদের রূপগুলোর বিস্তারিত দেয়নি, আর মুফাসসিরগণ যে বিবরণগুলো এনেছেন সেগুলোও পরস্পর ভিন্ন — কোনোটিই চূড়ান্ত নয়। তুলনাটির মূল কথা হলো অনুশীলনে সঙ্গ: আল্লাহর জন্য নিজেকে সংযত করা কোনো নতুন উদ্ভাবন নয় — এক পুরোনো, ভাগাভাগি করা পথ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Purpose Clause",
          "bn": "উদ্দেশ্যের বাক্যাংশ"
        },
        "p": [
          {
            "en": "The verse ends by telling us what fasting is for: la'allakum tattaqun, that you may attain taqwa. Taqwa is guarding — placing something between yourself and what harms you. The training logic is plain. A person who can refuse permitted food, drink and marital relations from dawn to sunset, for no reason except that Allah said so, is building exactly the muscle needed to refuse what Allah forbade in the other eleven months.",
            "bn": "আয়াত শেষ হয় রোযার উদ্দেশ্য জানিয়ে: লাআল্লাকুম তাত্তাকুন — যেন তোমরা তাকওয়া অর্জন করো। তাকওয়া মানে সুরক্ষা — নিজের ও ক্ষতিকর জিনিসের মাঝে কিছু একটা রাখা। প্রশিক্ষণের যুক্তিটি সরল। যে মানুষ ভোর থেকে সূর্যাস্ত পর্যন্ত হালাল খাবার, পানীয় ও দাম্পত্য সম্পর্ক ফিরিয়ে দিতে পারে — কেবল আল্লাহ বলেছেন বলে — সে ঠিক সেই পেশিই গড়ছে, যা বাকি এগারো মাসে আল্লাহর নিষিদ্ধ জিনিস ফিরিয়ে দিতে লাগবে।"
          },
          {
            "en": "The commentators add a second mechanism: fasting narrows the routes of appetite. Hunger quietens the demands of the self, and with them much of what leads to sin. So the fast is aimed at the interior; the empty stomach is the instrument, not the achievement. A fast measured only in hours endured has been read at the level of the husk. The verse itself states the target, and the target is taqwa.",
            "bn": "মুফাসসিরগণ দ্বিতীয় একটি প্রক্রিয়ার কথা যোগ করেন: রোযা প্রবৃত্তির পথগুলো সংকীর্ণ করে দেয়। ক্ষুধা নফসের দাবিগুলোকে শান্ত করে, আর সেই সঙ্গে গুনাহের দিকে টানে এমন অনেক কিছুকেও। তাই রোযার নিশানা অন্তর; খালি পেট হলো যন্ত্র, অর্জন নয়। যে রোযা কেবল সহ্য করা ঘণ্টা দিয়ে মাপা হয়, তা খোসার স্তরেই পড়া হয়েছে। আয়াত নিজেই লক্ষ্য বলে দিয়েছে — লক্ষ্য তাকওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "From Numbered Days to the Month",
          "bn": "গোনা কয়েক দিন থেকে পুরো মাস"
        },
        "p": [
          {
            "en": "The legislation unfolds across the passage. 2:184 speaks of numbered days and records concessions; 2:185 then names the month and gives the reason for its choice: Ramadan, in which the Quran was sent down as guidance for mankind. The month of fasting is the month of revelation — the discipline of the body is tied to the arrival of the Book, as if an emptier vessel were being prepared to carry it.",
            "bn": "বিধানটি ধাপে ধাপে খোলে। 2:184 বলে গোনা কয়েকটি দিনের কথা এবং ছাড়ের বিধান লিপিবদ্ধ করে; এরপর 2:185 মাসটির নাম নেয় এবং তা বেছে নেওয়ার কারণ জানায়: রমযান, যাতে মানবজাতির হিদায়াত হিসেবে কুরআন নাযিল হয়েছে। রোযার মাসই ওহীর মাস — দেহের সংযমকে বাঁধা হয়েছে কিতাব আগমনের সঙ্গে, যেন একটি অপেক্ষাকৃত খালি পাত্রকে তা বহনের জন্য প্রস্তুত করা হচ্ছে।"
          },
          {
            "en": "The same verse insists twice on gentleness: whoever is ill or travelling may make up the days later, for Allah intends ease for you, and does not intend hardship for you. The command that trains restraint is itself restrained. Any presentation of fasting as competitive severity has left the text; the Lawgiver built the exemptions into the founding verses themselves, in the same breath as the obligation.",
            "bn": "একই আয়াত দু'বার কোমলতার ওপর জোর দেয়: যে অসুস্থ বা সফরে আছে, সে পরে দিনগুলো পূরণ করবে — কারণ আল্লাহ তোমাদের জন্য সহজ চান, কঠিন চান না। যে আদেশ সংযম শেখায়, সেই আদেশ নিজেই সংযত। রোযাকে প্রতিযোগিতামূলক কঠোরতা হিসেবে দেখানো মানেই মূল পাঠ থেকে সরে যাওয়া; বিধানদাতা ছাড়গুলো ভিত্তি-আয়াতের ভেতরেই রেখেছেন — ফরয করার সেই একই নিঃশ্বাসে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse in the Middle",
          "bn": "মাঝখানে বসানো আয়াতটি"
        },
        "p": [
          {
            "en": "Between the fasting legislation of 2:183-185 and the night regulations of 2:187 sits 2:186: when My servants ask you about Me, I am near; I answer the call of the caller when he calls. Commentators have long noticed the placement, and also what is missing from the verse: the usual instruction say does not appear between Allah and the asker. In the middle of hunger and rules stands the most intimate sentence of nearness in the surah.",
            "bn": "2:183-185-এর রোযার বিধান আর 2:187-এর রাতের নিয়মকানুনের মাঝখানে বসে আছে 2:186: আমার বান্দারা যখন আমার সম্পর্কে তোমাকে জিজ্ঞেস করে — আমি তো নিকটেই; আহ্বানকারী যখন ডাকে, আমি তার ডাকে সাড়া দিই। মুফাসসিরগণ বহুকাল ধরে এই অবস্থানটি লক্ষ করেছেন, আর লক্ষ করেছেন আয়াতে কী নেই: আল্লাহ ও প্রশ্নকারীর মাঝে প্রচলিত 'বলো' নির্দেশটিই এখানে অনুপস্থিত। ক্ষুধা আর নিয়মের মাঝখানে দাঁড়িয়ে আছে সূরার সবচেয়ে অন্তরঙ্গ নৈকট্যের বাক্য।"
          },
          {
            "en": "The arrangement teaches what the month is for. Fasting empties; du'a fills. A person weakened by the day's abstention is, precisely then, addressed by I am near. Whoever keeps Ramadan as a diet with rituals has missed the door the text itself placed mid-passage: the fasting person is being positioned, day after day, as a caller whom Allah has announced in advance that He answers.",
            "bn": "এই বিন্যাসই শেখায় মাসটি কীসের জন্য। রোযা খালি করে; দোয়া পূর্ণ করে। দিনের সংযমে দুর্বল হয়ে পড়া মানুষটিকে ঠিক তখনই সম্বোধন করা হয়: আমি তো নিকটেই। যে রমযানকে কিছু আচারসহ ডায়েট বানিয়ে রাখে, সে মূল পাঠের মাঝখানে বসানো দরজাটিই হারিয়েছে: রোযাদারকে দিনের পর দিন এমন এক আহ্বানকারীর জায়গায় দাঁড় করানো হচ্ছে, যার ডাকে সাড়া দেওয়ার কথা আল্লাহ আগেই ঘোষণা করে রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Fast That Changes Conduct",
          "bn": "যে রোযা আচরণ বদলায়"
        },
        "p": [
          {
            "en": "The Prophet ﷺ tied the fast to behaviour in words al-Bukhari preserves: whoever does not give up false speech and acting upon it, Allah has no need of his giving up his food and his drink. And in the agreed-upon hadith, fasting is a shield, and the fasting person is told not to answer abuse in kind but to say: I am fasting. The fast extends from the stomach to the tongue and the temper.",
            "bn": "নবী ﷺ রোযাকে আচরণের সঙ্গে বেঁধেছেন এমন কথায়, যা ইমাম বুখারী সংরক্ষণ করেছেন: যে মিথ্যা কথা ও সে অনুযায়ী আমল ছাড়ল না, তার খাবার ও পানীয় ছাড়ায় আল্লাহর কোনো প্রয়োজন নেই। আর বুখারী-মুসলিমে একমত হাদীসে রোযা এক ঢাল, এবং রোযাদারকে বলা হয়েছে গালাগালির জবাব একইভাবে না দিয়ে বলতে: আমি রোযাদার। রোযা পেট থেকে বিস্তৃত হয় জিভ ও মেজাজ পর্যন্ত।"
          },
          {
            "en": "So the honest yearly measure is the one the verse itself installs: la'allakum tattaqun. Did the month leave more guarding behind — over speech, over earnings, over the eyes — than it found? The verse's opening comfort still stands: believers before us walked this same road, and it was written for them as it was written for us, because the goal at its end, taqwa, has never changed.",
            "bn": "তাই বছরের সৎ মাপকাঠি সেটিই, যা আয়াত নিজে বসিয়ে দিয়েছে: লাআল্লাকুম তাত্তাকুন। মাসটি কি যাওয়ার সময় আগের চেয়ে বেশি সুরক্ষা রেখে গেল — কথায়, উপার্জনে, দৃষ্টিতে? আয়াতের শুরুর সান্ত্বনাটি এখনো দাঁড়িয়ে: আমাদের আগের মুমিনরাও এই একই পথে হেঁটেছেন, তাদের ওপরও লেখা হয়েছিল যেমন আমাদের ওপর লেখা হয়েছে — কারণ পথের শেষের লক্ষ্যটি, তাকওয়া, কখনো বদলায়নি।"
          }
        ]
      }
    ]
  },
  "2:186": {
    "sections": [
      {
        "h": {
          "en": "An Answer Without a Messenger",
          "bn": "মধ্যস্থতা ছাড়া উত্তর"
        },
        "p": [
          {
            "en": "The verse begins with a question being reported: and when My servants ask you about Me. Elsewhere in the Quran, when people put a question to the Prophet ﷺ, the answer opens with qul, say to them. Here that word is absent. The reply comes straight back: fa inni qarib, then indeed I am near. The commentators note the omission and read it as part of the meaning rather than a stylistic accident.",
            "bn": "আয়াতটি শুরু হয় একটি প্রশ্নের বর্ণনা দিয়ে: আর যখন আমার বান্দারা আপনাকে আমার সম্পর্কে জিজ্ঞেস করে। কুরআনের অন্যত্র যখন মানুষ নবী ﷺ-কে কোনো প্রশ্ন করে, উত্তর শুরু হয় 'কুল' দিয়ে — অর্থাৎ 'বলে দিন'। এখানে সেই শব্দটি নেই। জবাব সরাসরি ফিরে আসে: ফা-ইন্নী কারীব — নিশ্চয়ই আমি নিকটেই আছি। মুফাসসিরগণ এই অনুপস্থিতি লক্ষ করেন এবং একে ভাষার আকস্মিকতা নয়, বরং অর্থেরই অংশ হিসেবে পড়েন।"
          },
          {
            "en": "Two more details carry weight. Allah calls them 'ibadi, My servants, a term of belonging, before saying anything about their request. And He describes Himself as qarib, near, using an adjective rather than a verb, so nearness is stated as a permanent quality and not as something that happens when we call. The response clause follows: ujibu da'wata ad-da'i idha da'ani, I answer the call of the caller when he calls Me.",
            "bn": "আরও দুটি বিষয় গুরুত্ব বহন করে। আল্লাহ প্রথমে তাদের বলেন 'ইবাদী' — আমার বান্দারা, যা সম্পর্ক ও আপনত্বের পরিভাষা — তাদের আবেদন সম্পর্কে কিছু বলার আগেই। আর তিনি নিজেকে বর্ণনা করেন 'কারীব' বলে, যা ক্রিয়াপদ নয়, বিশেষণ; ফলে নৈকট্য এখানে একটি স্থায়ী গুণ হিসেবে ঘোষিত, আমরা ডাকলে তবেই ঘটে এমন কিছু নয়। এরপর আসে সাড়া দেওয়ার বাক্য: উজীবু দা'ওয়াতাদ্‌ দা'ই ইযা দা'আন — আহ্বানকারী যখন আমাকে ডাকে, আমি তার ডাকে সাড়া দিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Placed Inside Ramadan",
          "bn": "রমযানের ভেতরে স্থাপিত"
        },
        "p": [
          {
            "en": "The setting is unmistakable. Verse 2:185 has just described Ramadan as the month in which the Quran was sent down and given the concession for the traveller and the ill. Verse 2:187 goes on to the rules of the nights of fasting. Between these two sits a verse about nearness and supplication, with nothing on its surface about fasting at all. The commentators treat this placement as the point: du'a belongs to the month.",
            "bn": "প্রেক্ষাপটটি অস্পষ্ট নয়। ঠিক আগের আয়াত 2:185 রমযানকে বর্ণনা করেছে সেই মাস হিসেবে যাতে কুরআন নাযিল হয়েছে, এবং মুসাফির ও অসুস্থের জন্য ছাড় দিয়েছে। পরের আয়াত 2:187 রোযার রাতগুলোর বিধানে চলে যায়। এই দুইয়ের মাঝখানে বসে আছে নৈকট্য ও দোয়া সম্পর্কে একটি আয়াত, যার উপরিভাগে রোযার কোনো উল্লেখই নেই। মুফাসসিরগণ এই অবস্থানটিকেই মূল বার্তা হিসেবে দেখেন: দোয়া এই মাসেরই অঙ্গ।"
          },
          {
            "en": "Several reports in the tafsir literature describe companions or a bedouin asking whether their Lord is near, so that they might whisper to Him, or far, so that they should call out. These reports vary in strength and are relayed through different chains, so it is safer to say that the verse answers a real and recurring human question than to fix it to one incident. Its wording is general and speaks to anyone who has wondered how far away God is.",
            "bn": "তাফসীরের সাহিত্যে একাধিক বর্ণনায় এসেছে যে কিছু সাহাবী কিংবা এক বেদুইন জিজ্ঞেস করেছিলেন — আমাদের রব কি নিকটে, যাতে আমরা ফিসফিস করে বলি; নাকি দূরে, যাতে আমরা উচ্চস্বরে ডাকি? এই বর্ণনাগুলোর সনদ ও মান ভিন্ন ভিন্ন, তাই একে কোনো একটি ঘটনার সঙ্গে বেঁধে ফেলার চেয়ে বলা নিরাপদ যে আয়াতটি মানুষের এক বাস্তব ও বারবার ফিরে আসা প্রশ্নের জবাব দেয়। এর ভাষা সাধারণ, আর তা সেই সবার সঙ্গে কথা বলে যারা কখনো ভেবেছে — আল্লাহ ঠিক কতটা দূরে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Response Means",
          "bn": "সাড়া দেওয়ার অর্থ"
        },
        "p": [
          {
            "en": "The verse promises a response, and the commentators are careful not to flatten that into getting whatever is asked. A hadith in the Musnad of Ahmad, with a similar report in at-Tirmidhi, describes three possible outcomes for a supplication made without sin or severing of kinship: it is given, or it is stored for the hereafter, or an equivalent harm is turned away. On that reading no du'a is wasted, though not every du'a arrives in the shape it was posted.",
            "bn": "আয়াতটি সাড়ার প্রতিশ্রুতি দেয়, আর মুফাসসিরগণ সতর্ক থাকেন যেন একে 'যা চাওয়া হয় তা-ই পাওয়া' অর্থে সংকুচিত না করা হয়। মুসনাদে আহমাদে বর্ণিত — এবং তিরমিযীতে কাছাকাছি ভাষায় আসা — একটি হাদীসে বলা হয়েছে, পাপ বা আত্মীয়তা ছিন্ন করার উদ্দেশ্য ছাড়া করা দোয়ার তিনটি সম্ভাব্য পরিণতি: তা দেওয়া হয়, কিংবা আখিরাতের জন্য জমা রাখা হয়, কিংবা সমপরিমাণ কোনো ক্ষতি সরিয়ে দেওয়া হয়। এই পাঠ অনুযায়ী কোনো দোয়াই বৃথা যায় না, যদিও প্রতিটি দোয়া ঠিক যে আকারে পাঠানো হয়েছিল সেই আকারে ফিরে আসে না।"
          },
          {
            "en": "The verse then turns the direction around: falyastajibu li walyu'minu bi, so let them respond to Me and believe in Me, that they may be rightly guided. The same verb used for Allah answering the servant is now used for the servant answering Allah. Asking and obeying are placed on one continuum. The commentators generally read this as a condition of quality rather than eligibility: the more responsive the servant, the more the relationship works in both directions.",
            "bn": "এরপর আয়াতটি দিক ঘুরিয়ে দেয়: ফাল-ইয়াস্তাজীবূ লী ওয়াল-ইউ'মিনূ বী — অতএব তারা আমার ডাকে সাড়া দিক ও আমার প্রতি ঈমান আনুক, যাতে তারা সঠিক পথ পায়। আল্লাহর সাড়া দেওয়ার জন্য যে ক্রিয়াপদ ব্যবহৃত হয়েছে, বান্দার সাড়া দেওয়ার জন্যও এখন সেই একই ক্রিয়াপদ। চাওয়া ও মানা একই ধারাবাহিকতায় বসানো হয়েছে। মুফাসসিরগণ সাধারণত একে যোগ্যতার শর্ত নয়, বরং গুণমানের শর্ত হিসেবে পড়েন: বান্দা যত বেশি সাড়া দেয়, সম্পর্কটি ততই দুই দিক থেকেই কাজ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Prophet ﷺ Asked",
          "bn": "নবী ﷺ কীভাবে চাইতেন"
        },
        "p": [
          {
            "en": "The Prophet ﷺ called du'a the very substance of worship, in a report transmitted by at-Tirmidhi. His own supplications, preserved in large numbers, are marked by a few consistent habits: praising Allah before asking, sending salawat, using His names appropriate to the request, and asking for the small along with the great. A report in at-Tirmidhi, though of debated strength, has him teaching that a servant should ask Allah even for the strap of his sandal when it breaks.",
            "bn": "তিরমিযীতে বর্ণিত এক হাদীসে নবী ﷺ দোয়াকে ইবাদতের মূল সারবস্তু বলেছেন। তাঁর নিজের দোয়াগুলো বিপুল সংখ্যায় সংরক্ষিত, আর সেগুলোতে কয়েকটি ধারাবাহিক অভ্যাস স্পষ্ট: চাওয়ার আগে আল্লাহর প্রশংসা করা, দরূদ পাঠ করা, আবেদনের সঙ্গে মানানসই তাঁর নামগুলো ব্যবহার করা, আর বড় জিনিসের পাশাপাশি ছোট জিনিসও চাওয়া। তিরমিযীর একটি বর্ণনায় — যার সনদের মান নিয়ে মতভেদ আছে — এসেছে, তিনি শিখিয়েছেন: বান্দা যেন জুতার ফিতা ছিঁড়ে গেলেও তা আল্লাহর কাছেই চায়।"
          },
          {
            "en": "Certain times were emphasised in his practice. Al-Bukhari and Muslim record that Allah descends, in a manner befitting Him, in the last third of the night and calls out who is asking of Me that I may give him. Other reports single out the moment of prostration, the time between the adhan and the iqamah, and the last hour of Friday. None of these makes du'a exclusive to a slot; they mark hours when hearts are usually more awake.",
            "bn": "তাঁর আমলে কিছু সময়কে বিশেষভাবে গুরুত্ব দেওয়া হয়েছে। বুখারী ও মুসলিমে বর্ণিত আছে, রাতের শেষ তৃতীয়াংশে আল্লাহ তাঁর শানের উপযোগী পদ্ধতিতে অবতরণ করেন এবং ডেকে বলেন — কে আছে আমার কাছে চাইবে, আমি তাকে দেব? অন্যান্য বর্ণনায় বিশেষভাবে উল্লেখ আছে সিজদার মুহূর্ত, আযান ও ইকামতের মধ্যবর্তী সময় এবং জুমার দিনের শেষ প্রহর। এর কোনোটিই দোয়াকে নির্দিষ্ট সময়ে সীমাবদ্ধ করে না; বরং এগুলো সেই সময়গুলো চিহ্নিত করে যখন হৃদয় সাধারণত বেশি জাগ্রত থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Answer Is Slow",
          "bn": "যখন উত্তর দেরিতে আসে"
        },
        "p": [
          {
            "en": "The hardest part of this verse is living in the gap between asking and receiving. The Prophet ﷺ addressed that gap directly, warning in a report in al-Bukhari and Muslim that a servant's supplication is answered so long as he is not hasty, and explaining haste as saying I called and I called and was not answered, and then giving up. The failure named there is abandoning the asking, not the delay itself.",
            "bn": "এই আয়াতের সবচেয়ে কঠিন দিকটি হলো চাওয়া ও পাওয়ার মাঝখানের ফাঁকটুকুতে বেঁচে থাকা। নবী ﷺ সেই ফাঁকটির কথা সরাসরি বলেছেন। বুখারী ও মুসলিমে বর্ণিত এক হাদীসে তিনি সতর্ক করেন যে বান্দার দোয়া কবুল হতে থাকে যতক্ষণ না সে তাড়াহুড়া করে; আর তাড়াহুড়ার ব্যাখ্যায় বলেন — 'আমি ডাকলাম, ডাকলাম, সাড়া পেলাম না' বলে সে চাওয়া ছেড়ে দেয়। এখানে যে ব্যর্থতাটি চিহ্নিত করা হয়েছে তা দেরি নয়, বরং চাওয়া ছেড়ে দেওয়া।"
          },
          {
            "en": "It is worth saying plainly what the verse does not say. It does not promise that a specific illness will lift, that a marriage will be restored, or that a result will land on a date we choose. It promises nearness and a hearing. For many people in long waits, that distinction is what makes the verse survivable: they are not being ignored, and the file is not closed, even when nothing visible has moved for a very long time.",
            "bn": "আয়াতটি যা বলেনি, তা স্পষ্ট করে বলা দরকার। এটি প্রতিশ্রুতি দেয়নি যে কোনো নির্দিষ্ট রোগ সেরে যাবে, কোনো বিচ্ছিন্ন সংসার জোড়া লাগবে, কিংবা আমাদের বেছে নেওয়া তারিখে ফলাফল এসে হাজির হবে। এটি প্রতিশ্রুতি দেয় নৈকট্যের ও শোনার। দীর্ঘ অপেক্ষায় থাকা বহু মানুষের জন্য এই পার্থক্যটুকুই আয়াতটিকে বহনযোগ্য করে তোলে: তাদের উপেক্ষা করা হচ্ছে না, আর ফাইলটি বন্ধ হয়ে যায়নি — এমনকি যখন বহুদিন ধরে দৃশ্যমান কিছুই নড়েনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Making It a Habit",
          "bn": "একে অভ্যাসে পরিণত করা"
        },
        "p": [
          {
            "en": "In practice, the people who keep asking tend to be the ones who made asking small and specific. A short list carried in the head or the phone, three or four items named plainly in one's own language, revisited after a prayer rather than in a special session. Du'a in the mother tongue outside of prayer is agreed upon by the scholars, and honesty in wording usually does more for presence of heart than eloquence.",
            "bn": "বাস্তবে যারা চাওয়া চালিয়ে যেতে পারে, তারা সাধারণত চাওয়াটিকে ছোট ও সুনির্দিষ্ট করে নিয়েছে। মাথায় বা ফোনে রাখা একটি ছোট তালিকা, নিজের ভাষায় স্পষ্ট করে বলা তিন-চারটি বিষয়, আর আলাদা কোনো আয়োজন নয় — নামাযের পরই একবার তা ফিরে দেখা। নামাযের বাইরে মাতৃভাষায় দোয়া করার বৈধতায় আলিমগণ একমত, আর শব্দের সৌন্দর্যের চেয়ে শব্দের সততাই সাধারণত হৃদয়ের উপস্থিতি বেশি বাড়ায়।"
          },
          {
            "en": "The verse also quietly changes what asking is for. If nearness is the permanent fact and the response is guaranteed in some form, then du'a stops being a lottery ticket and becomes the way a servant stays in contact with the One in charge of the outcome. People who pray this way report that the asking itself steadies them, well before anything in the situation has changed.",
            "bn": "আয়াতটি নিঃশব্দে বদলে দেয় চাওয়ার উদ্দেশ্যও। যদি নৈকট্যই স্থায়ী সত্য হয় এবং সাড়া কোনো না কোনো রূপে নিশ্চিত হয়, তবে দোয়া আর লটারির টিকিট থাকে না; বরং তা হয়ে ওঠে সেই পথ, যা দিয়ে বান্দা পরিণামের মালিকের সঙ্গে যোগাযোগ ধরে রাখে। যারা এভাবে দোয়া করেন, তাঁরা বলেন যে চাওয়াটাই তাঁদের স্থির করে দেয় — পরিস্থিতির কিছু বদলানোর অনেক আগেই।"
          }
        ]
      }
    ]
  },
  "2:201": {
    "sections": [
      {
        "h": {
          "en": "Two Kinds of Asking",
          "bn": "দুই রকমের চাওয়া"
        },
        "p": [
          {
            "en": "The verse sits inside the passage on the rites of pilgrimage. After the command to remember Allah when the rites are done, 2:200 describes one kind of person: among the people is he who says, our Lord, give us in this world — and he has no share in the Hereafter. Then this verse presents the contrast: and among them is he who says, our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
            "bn": "আয়াতটি বসে আছে হজের আহকাম-সংক্রান্ত অনুচ্ছেদের ভেতরে। আহকাম শেষ হলে আল্লাহকে স্মরণের নির্দেশের পর, 2:200 এক শ্রেণির মানুষের বর্ণনা দেয়: মানুষের মধ্যে কেউ বলে — হে আমাদের রব, আমাদের দুনিয়াতেই দিন; আখিরাতে তার কোনো অংশ নেই। তারপর এই আয়াত বৈপরীত্যটি তুলে ধরে: আর তাদের মধ্যে কেউ বলে — হে আমাদের রব, আমাদের দুনিয়ায় কল্যাণ দিন এবং আখিরাতেও কল্যাণ দিন, আর আমাদের আগুনের শাস্তি থেকে রক্ষা করুন।"
          },
          {
            "en": "The difference between the two askers is not that one prays and the other does not — both are shown praying, at the same holy site, to the same Lord. The difference is the horizon of the request. One vocabulary ends at this world; the other spans both lives and adds a plea for safety. The verse after, 2:202, gives the verdict: those people will have a portion of what they earned, and Allah is swift in account.",
            "bn": "দুই প্রার্থনাকারীর পার্থক্য এটা নয় যে একজন দোয়া করে আর অন্যজন করে না — দুজনকেই দেখানো হয়েছে দোয়ারত অবস্থায়, একই পবিত্র স্থানে, একই রবের কাছে। পার্থক্যটা চাওয়ার দিগন্তে। একজনের শব্দভান্ডার এই দুনিয়াতেই শেষ; অন্যজনেরটা দুই জীবন জুড়ে বিস্তৃত, সঙ্গে নিরাপত্তার আরজিও। পরের আয়াত, 2:202, রায় দেয়: তারা যা অর্জন করেছে তার অংশ তারা পাবে, আর আল্লাহ হিসাব গ্রহণে দ্রুত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Breadth of Hasanah",
          "bn": "হাসানার ব্যাপ্তি"
        },
        "p": [
          {
            "en": "The prayer's key word, hasanah, is deliberately broad — a good thing, unspecified. The commentators fill in examples without closing the list: in this world, well-being, a righteous spouse, beneficial knowledge, lawful provision; in the Hereafter, Paradise and what leads to it, with some noting that the ultimate hasanah there is Allah's pleasure. The openness is the craft of the du'a. It asks for the category of good and leaves the selection to the One who knows what is good for us.",
            "bn": "দোয়াটির মূল শব্দ 'হাসানা' ইচ্ছাকৃতভাবেই ব্যাপক — কোনো কল্যাণ, অনির্দিষ্ট। মুফাসসিরগণ তালিকা বন্ধ না করেই উদাহরণ ভরে দেন: দুনিয়ায় — সুস্থতা, নেককার জীবনসঙ্গী, উপকারী জ্ঞান, হালাল রিযিক; আখিরাতে — জান্নাত ও যা তার দিকে নিয়ে যায়; কেউ কেউ বলেন, সেখানকার চূড়ান্ত হাসানা আল্লাহর সন্তুষ্টি। এই খোলা রাখাটাই দোয়াটির কারিগরি। এটি কল্যাণের শ্রেণিটি চায়, আর বাছাইয়ের ভার ছেড়ে দেয় তাঁর ওপর — আমাদের জন্য কোনটা ভালো, যিনি তা জানেন।"
          },
          {
            "en": "Note also what the prayer does not do. It does not renounce the world — it asks for good in it, in harmony with the counsel given to Qarun in 28:77 not to forget one's share. And it does not assume that worldly good automatically continues into the next life; the second clause has to be asked for separately. The grammar itself teaches that the two goods are distinct requests with one Giver.",
            "bn": "দোয়াটি কী করে না, সেটাও লক্ষণীয়। এটি দুনিয়া বর্জন করে না — বরং দুনিয়ার মধ্যেই কল্যাণ চায়; যেমন 28:77 আয়াতে কারুনকে দেওয়া উপদেশে নিজের অংশ না ভোলার কথা আছে, তারই সঙ্গে সঙ্গতি রেখে। আবার এটি ধরেও নেয় না যে দুনিয়ার কল্যাণ আপনাআপনি পরের জীবনে গড়াবে; দ্বিতীয় অংশটুকু আলাদা করে চাইতে হয়। ব্যাকরণটিই শিখিয়ে দেয় — কল্যাণ দুটি ভিন্ন ভিন্ন চাওয়া, কিন্তু দাতা একজনই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Third Clause",
          "bn": "তৃতীয় অংশ"
        },
        "p": [
          {
            "en": "The du'a could have stopped at two symmetrical requests, but it adds: and protect us from the punishment of the Fire. The addition concedes something humbling — that receiving good in both worlds does not by itself guarantee safety, and that the Fire is a real destination requiring a specific plea. Comfort in this life can even become material for heedlessness; the third clause is insurance against the success of the first.",
            "bn": "দোয়াটি দুটি সুষম চাওয়াতেই থামতে পারত, কিন্তু যোগ করে: আর আমাদের আগুনের শাস্তি থেকে রক্ষা করুন। এই সংযোজন এক বিনয়ী স্বীকারোক্তি বহন করে — দুই জগতে কল্যাণ পাওয়াটাই নিরাপত্তার নিশ্চয়তা নয়, আর জাহান্নাম এমন এক বাস্তব গন্তব্য যার জন্য সুনির্দিষ্ট আরজি লাগে। এ জীবনের স্বাচ্ছন্দ্য এমনকি গাফিলতির উপকরণও হয়ে উঠতে পারে; তৃতীয় অংশটি প্রথম অংশের সাফল্যের বিরুদ্ধেই এক বিমা।"
          },
          {
            "en": "Ordering matters too. The prayer moves from the near to the far to the ultimate: today's needs, the eternal home, and deliverance from ruin. A person who repeats it attentively rehearses a complete worldview several times a day — engaged with this world, aimed at the next, and never presuming immunity from loss. Few sentences carry that much orientation in so few words.",
            "bn": "ক্রমটাও অর্থবহ। দোয়াটি এগোয় নিকট থেকে দূরে, তারপর চূড়ান্তে: আজকের প্রয়োজন, চিরস্থায়ী আবাস, আর ধ্বংস থেকে মুক্তি। যে ব্যক্তি মনোযোগ দিয়ে এটি বারবার পড়ে, সে দিনে কয়েকবার একটি পূর্ণাঙ্গ জীবনদৃষ্টির মহড়া দেয় — দুনিয়ায় সক্রিয়, আখিরাতমুখী, আর ক্ষতি থেকে নিরাপদ ভাবার দুঃসাহসহীন। এত কম শব্দে এতটা দিকনির্দেশ বহন করা বাক্য বিরল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prophet's Most Frequent Du'a",
          "bn": "নবীজির সবচেয়ে বেশি পড়া দোয়া"
        },
        "p": [
          {
            "en": "Anas ibn Malik (RA) reported that the most frequent supplication of the Prophet ﷺ was this very prayer: our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire. The report is agreed upon in al-Bukhari and Muslim. Of everything he ﷺ could have made his daily refrain, he chose the du'a of balance — which is itself a commentary on what a well-aimed life asks for.",
            "bn": "আনাস ইবনে মালিক (রাঃ) বর্ণনা করেন, নবী ﷺ-এর সবচেয়ে বেশি পড়া দোয়া ছিল এটিই: হে আমাদের রব, আমাদের দুনিয়ায় কল্যাণ দিন এবং আখিরাতেও কল্যাণ দিন, আর আমাদের আগুনের শাস্তি থেকে রক্ষা করুন। বর্ণনাটি বুখারী ও মুসলিমে ঐকমত্যে এসেছে। যা কিছু তিনি ﷺ তাঁর দৈনন্দিন আওড়ানো বাক্য বানাতে পারতেন, তার মধ্যে তিনি বেছে নিলেন ভারসাম্যের দোয়াটি — যা নিজেই এক ভাষ্য: সুনিশানা জীবন আসলে কী চায়।"
          },
          {
            "en": "Muslim also narrates through Anas (RA) that the Prophet ﷺ visited a Muslim who had grown as frail as a chick, because he had asked Allah to advance his Hereafter punishment into this world. The Prophet ﷺ told him he could not bear that, and asked: why did you not say — and taught him this du'a. Then he prayed it for him and Allah cured him. The story fixes the prayer's character: it is the correction of extreme asking.",
            "bn": "মুসলিম আরও বর্ণনা করেন আনাস (রাঃ)-এর সূত্রে: নবী ﷺ এমন এক মুসলিমকে দেখতে গেলেন, যে পাখির ছানার মতো দুর্বল হয়ে গিয়েছিল — কারণ সে আল্লাহর কাছে চেয়েছিল, তার আখিরাতের শাস্তি যেন দুনিয়াতেই এগিয়ে দেওয়া হয়। নবী ﷺ তাকে বললেন, সে তা বইতে পারবে না, এবং জিজ্ঞেস করলেন: তুমি কেন বললে না — এরপর তাকে এই দোয়াটি শেখালেন। তারপর তিনি তার জন্য তা পড়লেন এবং আল্লাহ তাকে সুস্থ করে দিলেন। ঘটনাটি দোয়াটির চরিত্র স্থির করে দেয়: এটি বাড়াবাড়ি চাওয়ার সংশোধন।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying the Balance",
          "bn": "ভারসাম্য বহন করা"
        },
        "p": [
          {
            "en": "The prayer is short enough to say between two breaths, and Islam has placed it throughout the day — many Muslims say it in prostration, after prayers, and pilgrims say it between the Yemeni corner and the Black Stone during tawaf. Its frequency is the training: each repetition re-centers the compass, pulling the heart back from whichever extreme the day pushed it toward, worldliness or despair of the world.",
            "bn": "দোয়াটি এতই ছোট যে দুই নিঃশ্বাসের ফাঁকে বলা যায়, আর ইসলাম একে ছড়িয়ে রেখেছে দিনজুড়ে — বহু মুসলিম এটি বলে সিজদায়, নামাযের পরে; আর হাজীরা তাওয়াফে রুকনে ইয়ামানী ও হাজরে আসওয়াদের মাঝখানে এটি পড়েন। এই পুনরাবৃত্তিই প্রশিক্ষণ: প্রতিবার পড়ায় দিকনির্ণয় যন্ত্রটি আবার কেন্দ্রে ফেরে — দিন হৃদয়কে যে প্রান্তেই ঠেলে থাকুক, দুনিয়াদারি হোক বা দুনিয়া নিয়ে হতাশা।"
          },
          {
            "en": "A practical exercise makes it personal: occasionally unpack the word hasanah before saying it. Name, in your own mind, what good in this world would actually mean this month, and what good in the Hereafter you are working toward — then say the words with those meanings loaded. The du'a of the Prophet ﷺ was frequent but never mechanical, and one loaded recitation shapes a day more than many empty ones.",
            "bn": "একটি ব্যবহারিক অনুশীলন একে ব্যক্তিগত করে তোলে: মাঝে মাঝে বলার আগে 'হাসানা' শব্দটি খুলে দেখুন। নিজের মনে ঠিক করুন — এই মাসে দুনিয়ার কল্যাণ মানে আসলে কী, আর আখিরাতের কোন কল্যাণের দিকে আপনি কাজ করছেন — তারপর সেই অর্থগুলো ভরে নিয়ে শব্দগুলো বলুন। নবী ﷺ-এর দোয়া ঘন ঘন ছিল, কিন্তু কখনো যান্ত্রিক ছিল না; আর অর্থভরা একটি পাঠ বহু ফাঁকা পাঠের চেয়ে দিনকে বেশি গড়ে দেয়।"
          }
        ]
      }
    ]
  },
  "2:216": {
    "sections": [
      {
        "h": {
          "en": "A Command and an Admission",
          "bn": "একটি আদেশ ও একটি স্বীকৃতি"
        },
        "p": [
          {
            "en": "The verse opens with kutiba 'alaykumul-qital, fighting has been prescribed for you. The same verb, kutiba, was used a few verses earlier for fasting in 2:183, so the wording places this among the ordained duties rather than among appeals. Then comes something unusual: wa huwa kurhun lakum, and it is disliked by you. Allah states the feeling of those He is commanding before He argues with it.",
            "bn": "আয়াতটি শুরু হয় 'কুতিবা আলাইকুমুল কিতাল' দিয়ে — তোমাদের ওপর যুদ্ধ ফরয করা হয়েছে। এই একই ক্রিয়াপদ 'কুতিবা' কয়েক আয়াত আগে 2:183-এ রোযার ক্ষেত্রেও ব্যবহৃত হয়েছে, ফলে শব্দচয়ন একে আবেদনের কাতারে নয়, নির্ধারিত দায়িত্বের কাতারে বসায়। এরপর আসে অস্বাভাবিক একটি কথা: ওয়া হুয়া কুরহুন লাকুম — আর তা তোমাদের কাছে অপছন্দনীয়। আল্লাহ যাদের আদেশ দিচ্ছেন, তাদের অনুভূতিটি তিনি নিজেই বলে দেন, তা নিয়ে যুক্তি দেওয়ার আগেই।"
          },
          {
            "en": "That admission is the door into the rest of the verse. Nobody is told that they should have enjoyed the prospect. Then the principle arrives in two balanced clauses: it may be that you dislike a thing and it is good for you, and it may be that you love a thing and it is bad for you. The particle 'asa speaks of what may be so, addressing our limited view rather than laying down a universal rule; the verse does not claim that everything disliked is secretly good.",
            "bn": "এই স্বীকৃতিটিই বাকি আয়াতে প্রবেশের দরজা। কাউকে বলা হয়নি যে এই সম্ভাবনায় তাদের উৎফুল্ল হওয়া উচিত ছিল। এরপর নীতিটি আসে দুটি ভারসাম্যপূর্ণ বাক্যে: হতে পারে তোমরা এমন কিছু অপছন্দ করো যা তোমাদের জন্য কল্যাণকর, আর হতে পারে তোমরা এমন কিছু ভালোবাসো যা তোমাদের জন্য ক্ষতিকর। 'আসা' শব্দটি বলে — এমন হতেই পারে; এটি আমাদের সীমিত দৃষ্টিকে সম্বোধন করে, কোনো সর্বজনীন নিয়ম ঘোষণা করে না। আয়াত এ দাবি করে না যে অপছন্দের প্রতিটি জিনিসের ভেতরেই গোপন কল্যাণ লুকিয়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Was Revealed",
          "bn": "কোন প্রেক্ষাপটে নাযিল"
        },
        "p": [
          {
            "en": "The verse belongs to the Madinan passages of Surah al-Baqarah dealing with the community's new and unwelcome reality of armed conflict. It sits shortly after 2:214, which asks whether people supposed they would enter the Garden without the trials that came upon those before them, and just before 2:217, which answers a question about fighting in the sacred month. The setting is a specific and serious obligation, not an abstract meditation on fate.",
            "bn": "আয়াতটি সূরা আল-বাকারার সেই মাদানী অংশের অন্তর্ভুক্ত, যেখানে সদ্যগঠিত সমাজের সামনে সশস্ত্র সংঘাতের নতুন ও অনাকাঙ্ক্ষিত বাস্তবতা নিয়ে কথা বলা হয়েছে। এটি 2:214-এর কিছু পরে বসে, যেখানে প্রশ্ন করা হয়েছে — মানুষ কি ধরে নিয়েছে যে পূর্ববর্তীদের ওপর আসা পরীক্ষাগুলো ছাড়াই তারা জান্নাতে প্রবেশ করবে? আর ঠিক আগে বসে 2:217, যা পবিত্র মাসে যুদ্ধ সম্পর্কে একটি প্রশ্নের জবাব দেয়। প্রেক্ষাপটটি একটি সুনির্দিষ্ট ও গুরুতর দায়িত্ব, ভাগ্য নিয়ে বিমূর্ত ভাবনা নয়।"
          },
          {
            "en": "Keeping that origin in view matters, because the closing principle is stated in fully general terms and has therefore travelled far beyond its original subject. That travel is legitimate: the Quran often states a universal rule at the end of a particular ruling. But a reader who forgets the setting can end up using the verse to explain away every disappointment, which is a heavier claim than the words make.",
            "bn": "এই উৎসটি মনে রাখা জরুরি, কারণ আয়াতের শেষ নীতিটি সম্পূর্ণ সাধারণ ভাষায় বলা হয়েছে এবং সে কারণেই তা তার মূল বিষয়ের অনেক বাইরে ছড়িয়ে পড়েছে। এই বিস্তার বৈধ: কুরআন প্রায়ই কোনো নির্দিষ্ট বিধানের শেষে একটি সর্বজনীন নীতি ঘোষণা করে। কিন্তু প্রেক্ষাপট ভুলে যাওয়া পাঠক এই আয়াত দিয়ে প্রতিটি হতাশাকে ব্যাখ্যা করে উড়িয়ে দিতে পারেন, যা আয়াতের শব্দগুলোর চেয়ে অনেক ভারী দাবি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Limits of Our Sight",
          "bn": "আমাদের দৃষ্টির সীমা"
        },
        "p": [
          {
            "en": "The verse ends with wallahu ya'lamu wa antum la ta'lamun: and Allah knows while you do not know. The commentators generally read the whole verse as a correction of a specific error, which is judging outcomes by present feeling. Human preference works on visible, immediate information. Divine knowledge takes in what the same choice produces years later and in the hereafter. The two will not always agree, and when they do not, the verse says which is reliable.",
            "bn": "আয়াত শেষ হয় 'ওয়াল্লাহু ইয়া'লামু ওয়া আনতুম লা তা'লামূন' দিয়ে — আল্লাহ জানেন, আর তোমরা জানো না। মুফাসসিরগণ সাধারণত পুরো আয়াতটিকে একটি নির্দিষ্ট ভুলের সংশোধন হিসেবে পড়েন: বর্তমান অনুভূতি দিয়ে পরিণতি বিচার করা। মানুষের পছন্দ কাজ করে দৃশ্যমান, তাৎক্ষণিক তথ্যের ওপর। আর আল্লাহর জ্ঞান ধরে রাখে সেই একই সিদ্ধান্ত বহু বছর পরে এবং আখিরাতে কী ফল দেবে তা-ও। এই দুটি সবসময় মিলবে না; আর যখন মেলে না, আয়াত বলে দেয় কোনটি নির্ভরযোগ্য।"
          },
          {
            "en": "It is important to notice what this does not establish. The verse does not teach that hardship is always disguised benefit, nor that a person should stop preferring health to illness or safety to danger. It teaches that our ranking of possibilities is provisional. The commentators tend to draw from it a posture rather than an explanation: do what is right, prefer what is lawful, and do not build certainty on a forecast you are not equipped to make.",
            "bn": "এটি যা প্রতিষ্ঠা করে না, তা লক্ষ করা জরুরি। আয়াতটি শেখায় না যে কষ্ট সবসময় ছদ্মবেশে কল্যাণ, কিংবা মানুষের উচিত অসুস্থতার চেয়ে সুস্থতা বা বিপদের চেয়ে নিরাপত্তা পছন্দ করা ছেড়ে দেওয়া। এটি শেখায় যে সম্ভাবনাগুলোর ব্যাপারে আমাদের ক্রমতালিকা সাময়িক। মুফাসসিরগণ এ থেকে সাধারণত একটি ব্যাখ্যা নয়, বরং একটি অবস্থান গ্রহণ করেন: যা সঠিক তা করো, যা বৈধ তা পছন্দ করো, আর এমন পূর্বাভাসের ওপর নিশ্চয়তা গড়ে তুলো না যা তৈরি করার যোগ্যতা তোমার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Lived by the Companions",
          "bn": "সাহাবীদের জীবনে"
        },
        "p": [
          {
            "en": "The generation who first heard this verse did not pretend to relish what it commanded. Their example is one of acting rightly while still disliking the task, which is a far more usable model than manufactured enthusiasm. The verse's honesty about kurh is what makes that possible: obedience is measured by what a person does, and feelings are allowed to lag behind without invalidating the deed.",
            "bn": "যাঁরা প্রথম এই আয়াত শুনেছিলেন, তাঁরা ভান করেননি যে আদেশটি তাঁদের ভালো লাগছে। তাঁদের দৃষ্টান্ত হলো — অপছন্দ থাকা সত্ত্বেও সঠিক কাজটি করা; আর এই আদর্শ কৃত্রিম উদ্দীপনার চেয়ে অনেক বেশি ব্যবহারযোগ্য। 'কুরহ' সম্পর্কে আয়াতের এই সততাই তা সম্ভব করে: আনুগত্য মাপা হয় মানুষ কী করল তা দিয়ে, আর অনুভূতি পিছিয়ে থাকলেও কাজটি বাতিল হয়ে যায় না।"
          },
          {
            "en": "Muslim narrates that when Umm Salamah (RA) lost her husband Abu Salamah (RA) she said the supplication the Prophet ﷺ had taught, asking Allah to reward her in her affliction and to replace it with something better, and she admitted she wondered who could possibly be better than Abu Salamah. She was later married to the Prophet ﷺ. She did not know at the time; that is the whole point of the account, and she did not claim to.",
            "bn": "মুসলিম বর্ণনা করেন, উম্মে সালামা (রাঃ) যখন তাঁর স্বামী আবু সালামা (রাঃ)-কে হারান, তখন তিনি নবী ﷺ-এর শেখানো সেই দোয়াটি পড়েন — যাতে আল্লাহর কাছে বিপদের প্রতিদান এবং তার বদলে উত্তম কিছু চাওয়া হয়। তিনি স্বীকার করেন, তখন তাঁর মনে হয়েছিল আবু সালামার চেয়ে উত্তম আবার কে হতে পারে। পরে তিনি নবী ﷺ-এর স্ত্রী হন। সেই মুহূর্তে তিনি জানতেন না — গোটা ঘটনার মূল কথাই এটি, আর তিনি জানার দাবিও করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading It in Real Pain",
          "bn": "প্রকৃত কষ্টের মধ্যে এই আয়াত"
        },
        "p": [
          {
            "en": "This verse is often quoted to people in the middle of loss, and it can be quoted badly. Told to a grieving parent, it may sound like a claim that their child's death was good for them, which the verse does not say and which no one is in a position to say. What the verse asserts is the limit of our knowledge, and a limit on our knowledge is not a licence to speak confidently about someone else's calamity.",
            "bn": "এই আয়াতটি প্রায়ই এমন মানুষকে শোনানো হয় যাঁরা ক্ষতির মাঝখানে আছেন — আর তা খারাপভাবেও শোনানো যায়। শোকগ্রস্ত কোনো বাবা-মাকে বললে তা এমন শোনাতে পারে যেন দাবি করা হচ্ছে সন্তানের মৃত্যু তাঁদের জন্য মঙ্গলজনক ছিল; আয়াত সে কথা বলে না, আর তেমন কথা বলার অবস্থানে কেউ নেই। আয়াত যা ঘোষণা করে তা হলো আমাদের জ্ঞানের সীমা — আর জ্ঞানের সীমা কখনো অন্যের বিপদ নিয়ে আত্মবিশ্বাসের সঙ্গে কথা বলার ছাড়পত্র নয়।"
          },
          {
            "en": "Read in the first person it works quite differently. It gives permission to stop demanding an explanation as the price of continuing, and it leaves the future genuinely open rather than sealed by present appearances. The Quran nowhere asks a person to call a wound sweet. It asks them to keep going without concluding that the story has ended badly, when they are not the one who can see the end.",
            "bn": "কিন্তু প্রথম পুরুষে, নিজের জন্য পড়লে এটি সম্পূর্ণ অন্যভাবে কাজ করে। এটি অনুমতি দেয় — এগিয়ে যাওয়ার শর্ত হিসেবে ব্যাখ্যা দাবি করা বন্ধ করার; আর ভবিষ্যৎকে বর্তমানের চেহারা দিয়ে সিল করে না দিয়ে সত্যিকার অর্থেই খোলা রাখে। কুরআন কোথাও কাউকে বলে না যে ক্ষতটিকে মিষ্টি বলো। বলা হয় — চলতে থাকো, আর সিদ্ধান্তে পৌঁছে যেয়ো না যে গল্পটি খারাপভাবে শেষ হয়েছে, যেখানে শেষটা দেখার ক্ষমতা তোমার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Using It Well",
          "bn": "একে সঠিকভাবে ব্যবহার"
        },
        "p": [
          {
            "en": "There is a decision-making use for this verse that costs nothing and often helps. Before a choice, do the work: gather the facts, take advice, weigh the lawful options, pray istikharah. Then act on the best available reading and hand the outcome over. The verse is not an argument for passivity; it is an argument against treating your own preference as knowledge, which is a different and more specific thing.",
            "bn": "এই আয়াতের একটি সিদ্ধান্তগ্রহণমূলক ব্যবহার আছে, যার কোনো খরচ নেই অথচ প্রায়ই তা কাজে লাগে। কোনো সিদ্ধান্তের আগে কাজটুকু করুন: তথ্য সংগ্রহ করুন, পরামর্শ নিন, বৈধ বিকল্পগুলো ওজন করুন, ইস্তিখারা করুন। তারপর হাতে থাকা সর্বোত্তম বিবেচনার ভিত্তিতে কাজ করুন এবং পরিণতিটি সঁপে দিন। আয়াতটি নিষ্ক্রিয়তার পক্ষে যুক্তি নয়; এটি যুক্তি এই কথার বিরুদ্ধে যে নিজের পছন্দকে জ্ঞান বলে ধরে নেওয়া — আর এটি ভিন্ন ও অনেক সুনির্দিষ্ট একটি বিষয়।"
          },
          {
            "en": "Afterwards, it changes how disappointment is carried. A rejected application, a refused proposal, a job that fell through: each can be recorded as a closed door whose reason is not yet available, rather than as proof of being unwanted. Many people find that keeping a short record of past turns they resented, and revisiting it a few years later, teaches this verse more convincingly than any amount of argument.",
            "bn": "আর পরে, এটি বদলে দেয় হতাশা বহনের ধরন। প্রত্যাখ্যাত আবেদন, ভেঙে যাওয়া বিয়ের প্রস্তাব, হাতছাড়া হওয়া চাকরি — প্রতিটিকে অবাঞ্ছিত হওয়ার প্রমাণ হিসেবে নয়, বরং এমন এক বন্ধ দরজা হিসেবে লিখে রাখা যায় যার কারণ এখনো জানা যায়নি। বহু মানুষ দেখেন, অতীতে যে মোড়গুলোতে তাঁরা বিরক্ত হয়েছিলেন তার একটি ছোট তালিকা রেখে কয়েক বছর পরে তা আবার পড়লে, এই আয়াতটি যেকোনো যুক্তির চেয়ে বেশি বিশ্বাসযোগ্যভাবে বোঝা যায়।"
          }
        ]
      }
    ]
  },
  "2:222": {
    "sections": [
      {
        "h": {
          "en": "A Question Asked Openly",
          "bn": "খোলাখুলি জিজ্ঞাসিত এক প্রশ্ন"
        },
        "p": [
          {
            "en": "Surah al-Baqarah carries a run of questions the companions brought to the Prophet ﷺ, each introduced with the words: they ask you. They ask about what to spend in 2:215, about fighting in the sacred month in 2:217, about wine and gambling in 2:219, and here about menstruation. The Quran treats none of these as too awkward to answer. A matter of the body receives its reply in the same Book, in the same measured voice, as matters of war and wealth.",
            "bn": "সূরা আল-বাকারায় সাহাবীগণ নবী ﷺ-এর কাছে যেসব প্রশ্ন নিয়ে এসেছিলেন তার একটি ধারাবাহিকতা আছে, প্রতিটি শুরু হয় এই শব্দে: তারা আপনাকে জিজ্ঞেস করে। 2:215 আয়াতে কী ব্যয় করবে তা নিয়ে, 2:217 আয়াতে পবিত্র মাসে যুদ্ধ নিয়ে, 2:219 আয়াতে মদ ও জুয়া নিয়ে, আর এখানে হায়েয নিয়ে প্রশ্ন। কুরআন এগুলোর কোনোটিকেই উত্তর দেওয়ার পক্ষে খুব বিব্রতকর মনে করেনি। দেহঘটিত একটি বিষয় সেই একই কিতাবে, সেই একই সংযত কণ্ঠে জবাব পায়, যেভাবে পায় যুদ্ধ ও সম্পদের বিষয়গুলো।"
          },
          {
            "en": "The occasion is preserved by Muslim from Anas (RA). Among the Jews of Madinah, when a woman menstruated they would not eat with her nor stay with her in the house. The companions asked the Prophet ﷺ, this verse came down, and he said: do everything except intercourse. The revealed answer neither adopted the surrounding practice of exclusion nor erased all restraint. It drew one precise line and left the woman's place at the table, and in the home, exactly where it was.",
            "bn": "ঘটনাটি আনাস (রাঃ) থেকে মুসলিম সংরক্ষণ করেছেন। মদীনার ইহুদিদের মধ্যে নিয়ম ছিল, কোনো নারীর হায়েয হলে তারা তার সাথে খেত না, ঘরে তার সাথে থাকত না। সাহাবীগণ নবী ﷺ-কে জিজ্ঞেস করলেন, এই আয়াত নাযিল হলো, আর তিনি বললেন: সহবাস ছাড়া সবকিছু করো। ওহীর এই জবাব আশপাশের বর্জনের প্রথাকেও গ্রহণ করেনি, আবার সব সংযমও মুছে দেয়নি। এটি একটিমাত্র সুনির্দিষ্ট সীমারেখা টেনেছে, আর খাবারের টেবিলে ও ঘরের ভেতরে নারীর অবস্থান ঠিক যেখানে ছিল সেখানেই রেখে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Harm, Not Shame",
          "bn": "কষ্ট, লজ্জা নয়"
        },
        "p": [
          {
            "en": "Asked what menstruation is, the verse answers with a single word: adha, a hurt. The word describes a condition, not a person. The verse does not call the woman impure, and it attaches no blame to a process she did not choose. The commentators observe that the instruction which follows rests on this word: because there is hurt, there is distance of one specific kind, and when the hurt passes, the distance passes with it. The logic of the ruling is protective, not punitive.",
            "bn": "হায়েয কী — এই প্রশ্নের জবাবে আয়াত একটিমাত্র শব্দ ব্যবহার করে: আযা, অর্থাৎ কষ্ট। শব্দটি একটি অবস্থার বর্ণনা, কোনো ব্যক্তির নয়। আয়াতটি নারীকে অপবিত্র বলেনি, আর যে প্রক্রিয়া তার নিজের বেছে নেওয়া নয় তার জন্য কোনো দোষও চাপায়নি। মুফাসসিরগণ লক্ষ করেন, এরপরের নির্দেশটি এই শব্দের ওপরই দাঁড়িয়ে: যেহেতু কষ্ট আছে, তাই একটি নির্দিষ্ট ধরনের দূরত্ব আছে; কষ্ট চলে গেলে দূরত্বও সাথে সাথে চলে যায়। বিধানটির যুক্তি সুরক্ষামূলক, শাস্তিমূলক নয়।"
          },
          {
            "en": "The command to keep away from women during menstruation could have been stretched wide. The Prophet's ﷺ own words in the report of Anas (RA) fixed its scope: everything except intercourse itself. Shared meals, affection and ordinary company all continue. The same narration records the Jews complaining that this man leaves nothing of their practice without differing from it — a measure of how deliberately the verse marked out its own path between exclusion on one side and no restraint at all on the other.",
            "bn": "হায়েযকালে স্ত্রীদের থেকে দূরে থাকার নির্দেশটিকে অনেক প্রশস্ত করে টানা যেত। আনাস (রাঃ)-এর বর্ণনায় নবী ﷺ-এর নিজের কথাই এর পরিধি নির্ধারণ করে দেয়: শুধু সহবাস ছাড়া সবকিছু। একসাথে খাওয়া, স্নেহ ও স্বাভাবিক সাহচর্য — সবই চলতে থাকে। একই বর্ণনায় আছে, ইহুদিরা অভিযোগ করে বলেছিল, এই লোকটি আমাদের কোনো রীতিই ভিন্নতা ছাড়া রাখতে চান না — যা দেখিয়ে দেয়, একদিকে বর্জন আর অন্যদিকে সংযমহীনতার মাঝে আয়াতটি কত সচেতনভাবে নিজের পথ চিহ্নিত করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Verbs of Purity",
          "bn": "পবিত্রতার দুটি ক্রিয়াপদ"
        },
        "p": [
          {
            "en": "The verse's timeline turns on two related verbs. Do not approach them, it says, hatta yathurna — until they become pure, the bleeding itself ending. Then: fa-idha tatahharna — when they have purified themselves, a verb form whose added letters signal a deliberate act a person performs. The wording pictures two stages, something that happens to a woman and something she then does, and only after both does the permission return, from where Allah has commanded you.",
            "bn": "আয়াতের সময়রেখা দুটি সম্পর্কিত ক্রিয়াপদের ওপর ঘোরে। বলা হয়েছে, তাদের কাছে যেয়ো না — হাত্তা ইয়াতহুরনা — যতক্ষণ না তারা পবিত্র হয়, অর্থাৎ স্রাব নিজেই বন্ধ হয়। তারপর: ফা-ইযা তাতাহহারনা — যখন তারা নিজেদের পবিত্র করে নেয় — এমন এক ক্রিয়ারূপ, যার অতিরিক্ত বর্ণগুলো মানুষের সচেতনভাবে সম্পাদিত কাজের ইঙ্গিত দেয়। শব্দবিন্যাসটি দুটি ধাপ আঁকে: একটি নারীর সাথে ঘটে, অন্যটি সে নিজে করে; আর দুটির পরেই অনুমতি ফিরে আসে — যেখান থেকে আল্লাহ তোমাদের আদেশ করেছেন।"
          },
          {
            "en": "The mufassirun — at-Tabari, Ibn Kathir, al-Qurtubi — pause over how much guidance this one sentence carries while staying wholly free of coarseness. Everything intimate is said through modest indirection: keep away, do not approach, come to them. Al-Baqarah handles the nights of Ramadan in 2:187 with the same pairing of frankness about the subject and restraint in the wording. The Quran demonstrates that speech about the body can be perfectly clear without ever becoming crude.",
            "bn": "মুফাসসিরগণ — তাবারী, ইবনে কাসীর, কুরতুবী — থেমে লক্ষ করেন, একটিমাত্র বাক্য কতটা দিকনির্দেশনা বহন করছে, অথচ পুরোপুরি স্থূলতামুক্ত থেকে। ঘনিষ্ঠ সবকিছু বলা হয়েছে শালীন পরোক্ষতায়: দূরে থাকো, কাছে যেয়ো না, তাদের কাছে যাও। আল-বাকারা 2:187 আয়াতে রমযানের রাতগুলোর বিষয়ও একই ভঙ্গিতে সামলেছে — বিষয়ে স্পষ্টতা, শব্দে সংযম। কুরআন দেখিয়ে দেয়, দেহ নিয়ে কথা সম্পূর্ণ স্পষ্ট হতে পারে কখনো স্থূল না হয়েও।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom Allah Loves",
          "bn": "আল্লাহ যাদের ভালোবাসেন"
        },
        "p": [
          {
            "en": "The closing sentence lifts the whole passage: indeed Allah loves at-tawwabin and loves al-mutatahhirin. At-tawwabin is an intensive form — not those who repented once, but those who keep returning. Al-mutatahhirin is a participle of deliberate effort — those who take purification upon themselves as a practice. A verse of bodily regulation thus ends with the love of Allah, joining the outward washing just legislated to the inward washing of tawbah, and naming both as qualities He loves.",
            "bn": "শেষ বাক্যটি পুরো অনুচ্ছেদকে উপরে তুলে নেয়: নিশ্চয়ই আল্লাহ ভালোবাসেন আত-তাওয়াবীনদের এবং ভালোবাসেন আল-মুতাতাহহিরীনদের। আত-তাওয়াবীন একটি আধিক্যবোধক রূপ — যারা একবার তওবা করেছে তারা নয়, বরং যারা বারবার ফিরে আসে। আল-মুতাতাহহিরীন সচেতন প্রচেষ্টার কর্তৃবাচক পদ — যারা পবিত্রতাকে নিজেদের অভ্যাস হিসেবে গ্রহণ করে। দেহঘটিত বিধানের একটি আয়াত এভাবে শেষ হয় আল্লাহর ভালোবাসায় — সদ্য বিধিবদ্ধ বাহ্যিক ধোয়াকে তওবার আন্তরিক ধোয়ার সাথে যুক্ত করে, এবং দুটিকেই তাঁর প্রিয় গুণ হিসেবে নাম দিয়ে।"
          },
          {
            "en": "The pairing recurs elsewhere. Praising the people of a mosque founded upon taqwa, the Quran says in 9:108 that in it are men who love to purify themselves, and that Allah loves those who purify themselves. Purity in the Quran is never merely hygienic; it is a quality of the person that Allah Himself declares beloved. And tawbah is named first in our verse: before it praises the washing of the body, it praises the washing of the heart.",
            "bn": "এই জুটি অন্যত্রও ফিরে আসে। তাকওয়ার ওপর প্রতিষ্ঠিত এক মসজিদের মানুষদের প্রশংসা করে কুরআন 9:108 আয়াতে বলে, সেখানে এমন লোক আছে যারা পবিত্র হতে ভালোবাসে, আর আল্লাহ পবিত্রতা অর্জনকারীদের ভালোবাসেন। কুরআনে পবিত্রতা কখনোই কেবল স্বাস্থ্যবিধি নয়; এটি মানুষের এমন এক গুণ, যাকে আল্লাহ নিজে প্রিয় বলে ঘোষণা করেছেন। আর আমাদের আয়াতে তওবার নাম এসেছে আগে: দেহ ধোয়ার প্রশংসার আগে আয়াতটি হৃদয় ধোয়ার প্রশংসা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dignity in the Ruling",
          "bn": "বিধানের ভেতরের মর্যাদা"
        },
        "p": [
          {
            "en": "Lived rightly, the verse protects women from two injustices at once. It forbids treating a menstruating woman as unfit company — the exclusion it was revealed to end — and it acknowledges the hurt of those days rather than pretending they are nothing. A household shaped by this verse neither banishes nor ignores; it adjusts one thing and honors everything else. The days a woman may find hardest each month are met, in this ruling, with consideration instead of stigma.",
            "bn": "সঠিকভাবে যাপিত হলে আয়াতটি নারীদের একসাথে দুটি অবিচার থেকে রক্ষা করে। এটি হায়েযগ্রস্ত নারীকে সঙ্গের অযোগ্য গণ্য করা নিষেধ করে — যে বর্জন শেষ করতেই এটি নাযিল হয়েছিল — আবার সেই দিনগুলোর কষ্টকে কিছুই না ভান করার বদলে স্বীকারও করে। এই আয়াতে গড়া একটি সংসার কাউকে দূরেও ঠেলে না, উপেক্ষাও করে না; একটি বিষয় সমন্বয় করে আর বাকি সবকিছুর সম্মান রাখে। মাসের যে দিনগুলো একজন নারীর কাছে সবচেয়ে কঠিন হতে পারে, এই বিধানে সেগুলোর জবাব কলঙ্ক নয়, বিবেচনা।"
          },
          {
            "en": "The verse also trains the asking of questions. The companions carried a delicate matter to revelation instead of settling it by the customs around them, and the answer corrected those customs. Whoever teaches this verse inherits both habits: to answer honest questions about the body without embarrassment, and to measure inherited practice against what Allah actually revealed rather than assuming the two must already agree.",
            "bn": "আয়াতটি প্রশ্ন করার শিষ্টাচারও শেখায়। সাহাবীগণ একটি সূক্ষ্ম বিষয়কে চারপাশের প্রথা দিয়ে মিটিয়ে না ফেলে ওহীর কাছে নিয়ে গিয়েছিলেন, আর প্রাপ্ত জবাব সেই প্রথাগুলোকেই সংশোধন করে দেয়। যে-ই এই আয়াত শেখায়, সে দুটি অভ্যাসের উত্তরাধিকার পায়: দেহ নিয়ে সৎ প্রশ্নের উত্তর বিব্রত না হয়ে দেওয়া, আর উত্তরাধিকারসূত্রে পাওয়া প্রথাকে আল্লাহ প্রকৃতপক্ষে যা নাযিল করেছেন তার মানদণ্ডে যাচাই করা — দুটো এমনিতেই মিলে যাবে ধরে না নেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying the Ending",
          "bn": "শেষ বাক্যটি বহন করা"
        },
        "p": [
          {
            "en": "The practical residue of the verse is its last line. Whoever performs wudu or ghusl is invited to intend by it the quality Allah loves, not a mechanical routine. And whoever falls, in any matter at all, is invited into the first word: the tawwab is precisely the one who has something to return from, again and again. The verse refuses despair as firmly as it refuses shamelessness — the beloved here are not the faultless, but the returning and the purifying.",
            "bn": "আয়াতটির ব্যবহারিক উত্তরাধিকার এর শেষ পঙক্তিতে। যে-ই ওযু বা গোসল করে, তাকে আমন্ত্রণ জানানো হয় যেন সে এর দ্বারা যান্ত্রিক রুটিন নয়, আল্লাহর প্রিয় গুণটির নিয়ত করে। আর যে-ই কোনো বিষয়ে পড়ে যায়, তার জন্য আমন্ত্রণ প্রথম শব্দটিতে: তাওয়াব সে-ই, যার বারবার ফিরে আসার মতো কিছু আছে। আয়াতটি নির্লজ্জতাকে যেমন দৃঢ়ভাবে প্রত্যাখ্যান করে, হতাশাকেও তেমনই — এখানে প্রিয়জন নিখুঁতরা নয়, বরং প্রত্যাবর্তনকারী ও পবিত্রতা অর্জনকারীরা।"
          }
        ]
      }
    ]
  },
  "2:238": {
    "sections": [
      {
        "h": {
          "en": "A Prayer Verse Among Family Laws",
          "bn": "পারিবারিক বিধানের ভেতর নামাযের আয়াত"
        },
        "p": [
          {
            "en": "The placement of this verse surprises every first-time reader. Surah al-Baqarah has been working through marriage and separation for many verses: 2:237 settles what a husband owes if he divorces before consummation with a dower already fixed. Then, without transition, comes a command about guarding the prayers. Then 2:239 continues on prayer, and only afterwards does the surah return to the rights of widows.",
            "bn": "এই আয়াতের অবস্থান প্রথমবার পড়া প্রত্যেক পাঠককেই চমকে দেয়। সূরা আল-বাকারা তখন বহু আয়াত ধরে বিয়ে ও বিচ্ছেদের বিধান নিয়ে এগোচ্ছে: 2:237 ঠিক করে দেয়, মহর নির্ধারিত থাকা অবস্থায় স্পর্শ করার আগে তালাক দিলে স্বামীর উপর কী বর্তায়। এরপর কোনো ভূমিকা ছাড়াই আসে সালাতের হেফাজতের নির্দেশ। তারপর 2:239 সালাতের কথাই চালিয়ে যায়, আর তার পরেই কেবল সূরাটি বিধবাদের অধিকারের প্রসঙ্গে ফেরে।"
          },
          {
            "en": "The mufassirun read the placement as deliberate. A household coming apart is exactly the situation in which prayers are lost: the timings go, the mind is elsewhere, and the very worship that would steady a person is the first casualty of what is unsettling them. Dropping this command into the middle of the divorce rulings puts it where it is hardest to keep and most needed.",
            "bn": "মুফাসসিরগণ এই অবস্থানকে উদ্দেশ্যপ্রণোদিত হিসেবেই পড়েন। ভেঙে পড়া সংসার ঠিক সেই অবস্থা যেখানে নামায হারিয়ে যায়: ওয়াক্ত ফসকে যায়, মন অন্যত্র থাকে, আর যে ইবাদত মানুষকে স্থির রাখত সেটিই তার অস্থিরতার প্রথম শিকার হয়। তালাকের বিধানগুলোর মাঝখানে এই নির্দেশটি ফেলে দেওয়া মানে একে ঠিক সেখানে বসানো, যেখানে তা রক্ষা করা সবচেয়ে কঠিন এবং সবচেয়ে বেশি দরকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Guard Them, Not Merely Perform",
          "bn": "হেফাজত কর, নিছক আদায় নয়"
        },
        "p": [
          {
            "en": "The command is hafizu, from the root of hifz, keeping and protecting, in a form that carries sustained and effortful attention. The verse does not say pray the prayers; it says guard them. Something guarded has a value that can be lost and a threat that can take it. The commentators list what is being guarded: their appointed times, their conditions of purity, their pillars and postures, and the presence of heart within them.",
            "bn": "নির্দেশটি হাফিযূ, যা হিফয — রক্ষা করা ও আগলে রাখা — ধাতু থেকে এসেছে, এমন এক গঠনে যা টানা ও পরিশ্রমী মনোযোগের অর্থ বহন করে। আয়াতটি বলেনি নামাযগুলো পড়ো; বলেছে নামাযগুলোকে হেফাজত কর। যা হেফাজত করা হয় তার এমন একটি মূল্য থাকে যা হারানো সম্ভব, আর এমন একটি হুমকি থাকে যা তা কেড়ে নিতে পারে। মুফাসসিরগণ তালিকা করেন কী কী হেফাজত করতে হবে: তাদের নির্ধারিত সময়, পবিত্রতার শর্ত, রুকন ও অঙ্গভঙ্গি, আর তার ভেতরে হৃদয়ের উপস্থিতি।"
          },
          {
            "en": "Times come first, because 4:103 calls the prayer a decree of specified times upon the believers. And the same root returns as a mark of the successful believer, in 23:9 and again in 70:34, where those who carefully maintain their prayers are named among the saved. In both places the description is not that they pray but that they keep guard over praying, which is a different and harder claim.",
            "bn": "সময়ই আগে আসে, কারণ 4:103 নামাযকে মুমিনদের উপর নির্দিষ্ট সময়ের বিধান বলে অভিহিত করে। আর একই ধাতু সফল মুমিনের পরিচয় হিসেবে ফিরে আসে — 23:9 এবং আবার 70:34 আয়াতে, যেখানে যারা নিজেদের নামাযের ব্যাপারে যত্নবান তাদের মুক্তিপ্রাপ্তদের মধ্যে গণ্য করা হয়। দুই জায়গাতেই বর্ণনাটি এই নয় যে তারা নামায পড়ে, বরং এই যে তারা নামাযের পাহারা দেয় — যা ভিন্ন এবং কঠিনতর একটি দাবি।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Is the Middle Prayer",
          "bn": "মধ্যবর্তী সালাত কোনটি"
        },
        "p": [
          {
            "en": "Then one prayer is singled out: was-salat al-wusta, and the middle prayer. Which one is meant is a genuine and old disagreement. The view of the majority is that it is Asr, and it rests on the strongest evidence: Muslim narrates from Ali (RA) that on the day of the Trench the Prophet ﷺ said the enemy had kept them from the middle prayer, the prayer of Asr, and prayed against them.",
            "bn": "এরপর একটি নামাযকে আলাদা করে উল্লেখ করা হয়: ওয়াস-সালাতুল উসতা — আর মধ্যবর্তী সালাত। কোনটি বোঝানো হয়েছে তা নিয়ে প্রকৃত ও প্রাচীন মতভেদ আছে। অধিকাংশ আলিমের মত হলো এটি আসর, আর এই মতের পক্ষেই সবচেয়ে শক্ত দলিল: ইমাম মুসলিম আলী (রাঃ) থেকে বর্ণনা করেন যে খন্দকের দিনে নবী ﷺ বলেছিলেন, শত্রুরা তাঁদেরকে মধ্যবর্তী সালাত অর্থাৎ আসরের সালাত থেকে ব্যস্ত রেখেছে, এবং তিনি তাদের বিরুদ্ধে বদদোয়া করেছিলেন।"
          },
          {
            "en": "But it should be stated as the majority position and not as a settled fact, because respected early authorities held otherwise, some naming Fajr, others Zuhr, and other views besides. Some commentators suggest the wording was left short of naming the prayer outright so that a worshipper, unsure which one carries the extra emphasis, would guard all five with the same care. Whichever reading is taken, that is the practical result the verse produces.",
            "bn": "তবে একে অধিকাংশের অবস্থান হিসেবেই বলা উচিত, চূড়ান্ত মীমাংসিত সত্য হিসেবে নয়, কারণ প্রাচীন যুগের সম্মানিত আলিমদের কেউ কেউ ভিন্ন মত রেখেছেন — কেউ ফজরের কথা বলেছেন, কেউ যোহরের, আর এর বাইরেও মত আছে। কোনো কোনো মুফাসসির মনে করেন, নামাযটির নাম সরাসরি না বলে রাখা হয়েছে যাতে মুসল্লি — কোনটির উপর বাড়তি জোর তা নিশ্চিত না জেনে — পাঁচটিকেই সমান যত্নে হেফাজত করে। যে পাঠই নেওয়া হোক, বাস্তবে আয়াতটি এই ফলই তৈরি করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Qanitin",
          "bn": "কানিতীন হয়ে দাঁড়ানো"
        },
        "p": [
          {
            "en": "The second half turns from the schedule to the state: and stand before Allah qanitin. Qunut in Arabic carries obedience joined to humility and stillness, the bearing of someone who has stopped arguing. It is a description of posture and of heart at once, and it rules out standing there while everything except the prayer runs through the mind.",
            "bn": "আয়াতের দ্বিতীয়ার্ধ সময়সূচি থেকে ফিরে আসে অবস্থার দিকে: আর আল্লাহর সামনে কানিতীন হয়ে দাঁড়াও। আরবিতে কুনূত মানে আনুগত্য, তার সঙ্গে বিনয় ও স্থিরতা — এমন মানুষের ভঙ্গি যে আর তর্ক করছে না। এটি একই সঙ্গে দেহভঙ্গি ও হৃদয়ের বর্ণনা, আর এটি বাতিল করে দেয় সেই দাঁড়ানো যেখানে নামায ছাড়া বাকি সবকিছু মনের ভেতর দিয়ে দৌড়ে যাচ্ছে।"
          },
          {
            "en": "Muslim narrates from Zayd ibn Arqam (RA) that the Companions used to speak to one another during the prayer, a man addressing his neighbour about his own affairs, until this clause was revealed and they were ordered to be silent and forbidden from speaking. The clause therefore has a history: it cleared the prayer of ordinary conversation. What it asks for now is the same clearing, one level further in, of the conversation still running inside the head.",
            "bn": "ইমাম মুসলিম যায়েদ ইবনে আরকাম (রাঃ) থেকে বর্ণনা করেন, সাহাবীগণ নামাযের ভেতর একে অপরের সঙ্গে কথা বলতেন — কেউ পাশের জনকে নিজের কাজের কথা বলতেন — যতক্ষণ না এই বাক্যটি নাযিল হয় এবং তাঁদেরকে চুপ থাকার আদেশ ও কথা বলার নিষেধ দেওয়া হয়। তাই বাক্যটির একটি ইতিহাস আছে: এটি নামাযকে সাধারণ কথাবার্তা থেকে খালি করেছিল। এখন এটি সেই একই খালি করার দাবি জানায়, তবে এক ধাপ ভেতরে — মাথার ভেতরে চলতে থাকা কথোপকথনটির।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Dropped Even in Fear",
          "bn": "ভয়ের মধ্যেও ছাড়া নয়"
        },
        "p": [
          {
            "en": "How seriously the guarding is meant becomes clear in 2:239, which follows at once: if you are in fear, then pray on foot or riding, and when you are secure, remember Allah as He taught you what you did not know. The form of the prayer bends as far as walking or on the back of an animal in the middle of danger. What it does not do is stop. A duty that survives that will survive a busy afternoon.",
            "bn": "এই হেফাজত কতটা গুরুত্বের সঙ্গে বোঝানো হয়েছে তা স্পষ্ট হয় 2:239 আয়াতে, যা সঙ্গে সঙ্গেই আসে: যদি তোমরা ভয়ের মধ্যে থাক, তবে হেঁটে বা আরোহী অবস্থায়ই নামায পড়ো, আর যখন নিরাপদ হও তখন আল্লাহকে স্মরণ কর যেভাবে তিনি তোমাদের শিখিয়েছেন যা তোমরা জানতে না। বিপদের মধ্যে নামাযের রূপ হাঁটা অবস্থা বা পশুর পিঠ পর্যন্ত নমনীয় হয়। যা হয় না, তা হলো থেমে যাওয়া। যে কর্তব্য এটুকু টিকে যায়, তা একটি ব্যস্ত বিকেলও টিকে যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "How Guarding Is Done",
          "bn": "হেফাজত কীভাবে হয়"
        },
        "p": [
          {
            "en": "Guarding is mostly done before the prayer rather than in it. Know the times rather than waiting to be told them; put the phone out of reach; arrive at the mat with a minute in hand instead of at the last legal moment. Then, standing, give the opening takbir the weight of a door closing behind you. 2:45 admits the difficulty plainly, calling prayer heavy except upon the humble, which is a promise that the heaviness lifts as the humility grows.",
            "bn": "হেফাজতের কাজটি বেশিরভাগই হয় নামাযের ভেতরে নয়, তার আগে। ওয়াক্তগুলো নিজে জানুন, কেউ মনে করিয়ে দেওয়ার অপেক্ষায় থাকবেন না; ফোনটি নাগালের বাইরে রাখুন; শেষ বৈধ মুহূর্তে নয়, হাতে এক মিনিট রেখে জায়নামাযে পৌঁছান। তারপর দাঁড়িয়ে তাকবীরে তাহরীমাকে এমন ওজন দিন যেন পেছনে একটি দরজা বন্ধ হলো। 2:45 কঠিনতাটি সরাসরি স্বীকার করে, নামাযকে বিনয়ীদের ছাড়া বাকি সবার জন্য ভারী বলে — আর এটিই প্রতিশ্রুতি যে বিনয় বাড়ার সঙ্গে সঙ্গে ভার হালকা হয়।"
          }
        ]
      }
    ]
  },
  "2:255": {
    "sections": [
      {
        "h": {
          "en": "No God But He, the Living",
          "bn": "তিনি ছাড়া কোনো ইলাহ নেই"
        },
        "p": [
          {
            "en": "The verse opens by clearing the ground: la ilaha illa Huwa, there is no god except He. Arabic negates first and affirms second, so the sentence empties the heart of every rival before it names the One who remains. Two names follow immediately, and the commentators treat them as the pillars the rest of the verse stands on: al-Hayy, the Ever-Living, whose life was never granted and will never end, and al-Qayyum, the Self-Subsisting who holds everything else in being.",
            "bn": "আয়াতটি শুরু হয় জায়গা খালি করে দিয়ে: লা ইলাহা ইল্লা হুয়া — তিনি ছাড়া কোনো ইলাহ নেই। আরবি আগে অস্বীকার করে, পরে স্বীকার করে; ফলে বাক্যটি প্রথমে হৃদয় থেকে সব প্রতিদ্বন্দ্বী সরিয়ে দেয়, তারপর যিনি থাকেন তাঁর নাম নেয়। এরপরই আসে দুটি নাম, আর মুফাসসিরগণ এ দুটিকেই বাকি আয়াতের ভিত্তি হিসেবে দেখেন: আল-হাইয়্য — চিরঞ্জীব, যাঁর জীবন কারও দেওয়া নয় এবং যা কখনো শেষ হয় না; আর আল-কাইয়্যূম — স্বয়ংপ্রতিষ্ঠিত, যিনি অন্য সবকিছুকে ধরে রাখেন।"
          },
          {
            "en": "Then comes a denial that sounds gentle and is enormous. Neither sinah nor nawm takes hold of Him: sinah is the drowsiness that arrives before sleep, nawm is sleep itself. The wording climbs from the smaller to the greater and rules out both. Every living thing we have ever met must stop and rest; the One described here does not pause, and so creation is never for a single moment left unattended while its Sustainer is not watching.",
            "bn": "এরপর আসে এমন এক অস্বীকৃতি যা শুনতে কোমল কিন্তু অর্থে বিশাল। তাঁকে সিনাহ্‌ও স্পর্শ করে না, নাওম-ও নয়: সিনাহ্‌ হলো ঘুমের আগের তন্দ্রা, আর নাওম হলো ঘুম নিজেই। শব্দবিন্যাস ছোট থেকে বড়র দিকে উঠে যায় এবং দুটোকেই বাদ দেয়। আমরা যত প্রাণী চিনি, সবাইকে একসময় থামতে ও বিশ্রাম নিতে হয়; কিন্তু এখানে বর্ণিত সত্তা কখনো থামেন না, তাই সৃষ্টিজগৎ এক মুহূর্তের জন্যও এমন অবস্থায় পড়ে না যখন তার রক্ষক দেখছেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ownership, Permission, Knowledge",
          "bn": "মালিকানা, অনুমতি, জ্ঞান"
        },
        "p": [
          {
            "en": "To Him belongs whatever is in the heavens and whatever is on the earth. The Arabic particle ma, whatever, sweeps in what we have named and catalogued and everything we have not. Then a question shaped so that it answers itself: who is there that can intercede with Him except by His permission? The people first addressed by this verse believed their idols would speak on their behalf. The sentence removes that at the root without denying that intercession exists at all.",
            "bn": "আসমানসমূহে যা কিছু আছে আর যমীনে যা কিছু আছে, সবই তাঁর। আরবি শব্দ 'মা' — অর্থাৎ 'যা কিছু' — আমাদের নামকরা ও তালিকাভুক্ত সবকিছুকে যেমন ধরে, তেমনি ধরে যা আমরা কখনো জানিনি। তারপর আসে এমন এক প্রশ্ন যা নিজেই নিজের উত্তর দেয়: তাঁর অনুমতি ছাড়া কে তাঁর কাছে সুপারিশ করতে পারে? এই আয়াত প্রথমে যাদের উদ্দেশে নাযিল হয়, তারা বিশ্বাস করত তাদের দেবমূর্তিরা তাদের পক্ষে কথা বলবে। বাক্যটি সেই বিশ্বাসকে গোড়া থেকে সরিয়ে দেয়, অথচ সুপারিশের অস্তিত্বকে একেবারে অস্বীকার করে না।"
          },
          {
            "en": "What is left standing is intercession by permission, granted to whom He allows. Knowledge follows: He knows what is before them and what is behind them, and they encompass nothing of His knowledge except what He wills. Read slowly, that clause describes every scholar, every specialist and every anxious planner. Whatever any of us knows is a portion that has been measured out, and it has been measured out by the One who holds the whole of it.",
            "bn": "যা টিকে থাকে তা হলো অনুমতিসাপেক্ষ সুপারিশ — তিনি যাকে অনুমতি দেন কেবল তারই। এরপর আসে জ্ঞানের কথা: তাদের সামনে যা আছে ও পেছনে যা আছে সবই তিনি জানেন, আর তারা তাঁর জ্ঞানের কিছুই আয়ত্ত করতে পারে না, তিনি যতটুকু চান তা ছাড়া। ধীরে পড়লে বোঝা যায়, এই বাক্যটি প্রত্যেক আলিম, প্রত্যেক বিশেষজ্ঞ এবং প্রত্যেক উদ্বিগ্ন পরিকল্পনাকারীর বর্ণনা। আমরা যে যা-ই জানি, তা মেপে দেওয়া একটি অংশ — আর মেপে দিয়েছেন তিনিই, যাঁর কাছে পুরোটা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Kursi and the Guarding",
          "bn": "কুরসী ও রক্ষণাবেক্ষণ"
        },
        "p": [
          {
            "en": "His Kursi extends over the heavens and the earth. The commentators differ over the word. A group of the early authorities relate that the Kursi is something other than the 'Arsh, the Throne, and far smaller than it; others read the word as an image of His knowledge or His sovereign command. The mainstream Sunni position is to affirm the word exactly as revealed, without asking how and without imagining a seat resembling the chair of a king.",
            "bn": "তাঁর কুরসী আসমানসমূহ ও যমীনকে পরিব্যাপ্ত করে আছে। শব্দটি নিয়ে মুফাসসিরগণের মধ্যে মতভেদ আছে। প্রাচীন যুগের একদল বর্ণনাকারী বলেন, কুরসী আরশ থেকে আলাদা এবং তার তুলনায় বহু ছোট; আবার কেউ কেউ শব্দটিকে তাঁর জ্ঞান বা তাঁর কর্তৃত্বের রূপক হিসেবে পড়েন। আহলুস সুন্নাহর মূলধারার অবস্থান হলো: শব্দটি যেভাবে নাযিল হয়েছে ঠিক সেভাবেই স্বীকার করা, 'কীভাবে' প্রশ্ন না তোলা, এবং রাজার আসনের মতো কোনো চিত্র কল্পনা না করা।"
          },
          {
            "en": "The clause that follows is the one people carry home with them: preserving them both does not weary Him. The verb carries the sense of being burdened by a heavy task. The verse then closes with al-'Aliyy al-'Azim, the Most High, the Most Great. Notice the order of the whole: majesty, then knowledge, then care, then the assurance that the care costs Him nothing at all. The reader is left feeling very small and entirely safe.",
            "bn": "এরপরের বাক্যটিই মানুষ সবচেয়ে বেশি সঙ্গে নিয়ে ফেরে: এ দুটির রক্ষণাবেক্ষণ তাঁকে ক্লান্ত করে না। ক্রিয়াপদটি ভারী কাজের বোঝা বয়ে ক্লান্ত হওয়ার অর্থ বহন করে। আয়াত শেষ হয় আল-আলিয়্য ও আল-আযীম নামে — সর্বোচ্চ ও মহান। পুরো আয়াতের ক্রমটি লক্ষ করুন: মহিমা, তারপর জ্ঞান, তারপর রক্ষণাবেক্ষণ, আর শেষে এই আশ্বাস যে সেই রক্ষণাবেক্ষণে তাঁর কোনো ক্লান্তি নেই। পাঠক নিজেকে খুব ছোট, অথচ সম্পূর্ণ নিরাপদ বোধ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Verse Sits",
          "bn": "আয়াতটি কোথায় বসে আছে"
        },
        "p": [
          {
            "en": "No sound report fixes a particular occasion of revelation for this verse; like most of Surah al-Baqarah it is general, and it is honest to say so rather than invent an incident. Its placement, however, is clearly deliberate. The verse just before it, 2:254, tells the believers to spend from what they have been given before a day arrives in which there is no bargaining, no friendship and no intercession.",
            "bn": "এই আয়াতের জন্য নির্দিষ্ট কোনো শানে নুযূল সহীহ সূত্রে প্রমাণিত নয়; সূরা আল-বাকারার অধিকাংশ অংশের মতো এটিও সাধারণ নির্দেশনা — কোনো ঘটনা বানিয়ে বলার চেয়ে কথাটি সরাসরি বলাই সৎ। তবে আয়াতটির অবস্থান স্পষ্টতই উদ্দেশ্যপ্রণোদিত। ঠিক আগের আয়াত 2:254-এ মুমিনদের বলা হয়েছে, তাদের যা দেওয়া হয়েছে তা থেকে ব্যয় করতে — এমন এক দিন আসার আগে, যেদিন কোনো বেচাকেনা থাকবে না, কোনো বন্ধুত্ব থাকবে না, কোনো সুপারিশও থাকবে না।"
          },
          {
            "en": "Ayat al-Kursi then explains why that day works that way: because intercession belongs to His permission alone. The verse after it, 2:256, states that there is no compulsion in religion, since guidance has become clear from error. Placed side by side, the three verses move from what we owe, to who Allah is, to how faith must be entered. Reciting Ayat al-Kursi with its neighbours in view stops it drifting free as an isolated formula.",
            "bn": "আয়াতুল কুরসী এরপর ব্যাখ্যা করে সেই দিনটি কেন এমন: কারণ সুপারিশ কেবল তাঁর অনুমতির অধীন। এর পরের আয়াত 2:256 বলে, দ্বীনের ব্যাপারে কোনো জবরদস্তি নেই, কারণ হিদায়াত ভ্রান্তি থেকে স্পষ্ট হয়ে গেছে। পাশাপাশি রাখলে তিনটি আয়াত এগিয়ে যায় — আমাদের দায়িত্ব থেকে আল্লাহ কে সেই পরিচয়ে, আর সেখান থেকে ঈমান কীভাবে গ্রহণ করতে হয় সেই কথায়। প্রতিবেশী আয়াতগুলো সামনে রেখে পড়লে আয়াতুল কুরসী কেবল একটি বিচ্ছিন্ন বাক্যবন্ধ হয়ে ভেসে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Was Used",
          "bn": "এই আয়াতের ব্যবহার"
        },
        "p": [
          {
            "en": "Muslim narrates that the Prophet ﷺ asked Ubayy ibn Ka'b (RA) which verse of the Book of Allah he held to be greatest, and when Ubayy answered with Ayat al-Kursi the Prophet ﷺ struck him on the chest and congratulated him on his knowledge. The verse is not called greatest for its length. It is greatest because from beginning to end it has one subject and one only, which is Allah Himself.",
            "bn": "মুসলিম বর্ণনা করেন, নবী ﷺ উবাই ইবনে কা'ব (রাঃ)-কে জিজ্ঞেস করেন, আল্লাহর কিতাবের কোন আয়াতটি তাঁর কাছে সবচেয়ে মহান। উবাই যখন আয়াতুল কুরসীর কথা বলেন, নবী ﷺ তাঁর বুকে মৃদু আঘাত করে তাঁকে এই জ্ঞানের জন্য অভিনন্দন জানান। আয়াতটিকে দৈর্ঘ্যের কারণে মহান বলা হয়নি। এটি মহান, কারণ শুরু থেকে শেষ পর্যন্ত এর বিষয়বস্তু একটিই — স্বয়ং আল্লাহ।"
          },
          {
            "en": "Al-Bukhari relates the account of Abu Hurayrah (RA), left to guard the zakat stores of Ramadan, who caught a thief on three successive nights; on the last the thief bought his release by teaching him that whoever recites Ayat al-Kursi before sleeping has a guardian from Allah with him until morning, and the Prophet ﷺ confirmed that the words were true even though the one who spoke them was a devil. Reciting it after each obligatory prayer is reported from the Prophet ﷺ in the collection of an-Nasa'i.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ)-এর ঘটনাটি বর্ণনা করেন, যেখানে তাঁকে রমযানের যাকাতের সম্পদ পাহারার দায়িত্ব দেওয়া হয়েছিল এবং তিনি টানা তিন রাত এক চোরকে ধরেন; শেষ রাতে চোরটি নিজের মুক্তির বিনিময়ে তাঁকে শেখায় যে ঘুমানোর আগে আয়াতুল কুরসী পড়লে সকাল পর্যন্ত আল্লাহর পক্ষ থেকে একজন রক্ষক থাকবে। নবী ﷺ নিশ্চিত করেন, কথাটি সত্য হলেও বক্তা ছিল একটি শয়তান। প্রতিটি ফরয নামাযের পর এটি পাঠ করার কথা নবী ﷺ থেকে নাসাঈর সংকলনে বর্ণিত হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying It Through the Day",
          "bn": "দিনভর এটি বহন করা"
        },
        "p": [
          {
            "en": "The practical shape of this verse is small and repeatable: after every obligatory prayer, and again before sleep. What changes with practice is not the count but the attention. Read the clauses as statements about reality rather than as sounds to complete — He does not sleep, He is not wearied, He knows what lies ahead of you — and the verse begins to work on the particular worry that made you reach for it.",
            "bn": "এই আয়াতের ব্যবহারিক রূপটি ছোট ও পুনরাবৃত্তিযোগ্য: প্রতিটি ফরয নামাযের পর, আর ঘুমানোর আগে। অভ্যাসের সঙ্গে যা বদলায় তা সংখ্যা নয়, মনোযোগ। বাক্যগুলোকে কেবল শেষ করার মতো শব্দ হিসেবে নয়, বাস্তবতা সম্পর্কে বিবৃতি হিসেবে পড়ুন — তিনি ঘুমান না, তিনি ক্লান্ত হন না, আপনার সামনে যা আছে তিনি তা জানেন — তখনই আয়াতটি সেই নির্দিষ্ট দুশ্চিন্তার ওপর কাজ শুরু করে, যার কারণে আপনি এটি ধরেছিলেন।"
          },
          {
            "en": "It also disciplines hope. If nothing is guaranteed by any intercessor except by His permission, then contacts, reputations and favours are not where safety actually lies. And if He is never wearied by preserving the heavens and the earth, the matter you are carrying is not too much to hand over to Him tonight. Anxiety loses weight, not because the problem became smaller, but because the One in charge of it has been described accurately.",
            "bn": "এটি আশাকেও শৃঙ্খলায় আনে। যদি তাঁর অনুমতি ছাড়া কোনো সুপারিশকারীই কিছু নিশ্চিত করতে না পারে, তবে পরিচিতি, সুনাম বা পক্ষপাত — এগুলোর কোনোটাই প্রকৃত নিরাপত্তার জায়গা নয়। আর আসমান-যমীনের রক্ষণাবেক্ষণ যদি তাঁকে ক্লান্ত না করে, তবে আজ রাতে আপনি যে বোঝাটি বইছেন, তা তাঁর হাতে তুলে দেওয়ার জন্য বেশি বড় নয়। দুশ্চিন্তার ওজন কমে — সমস্যা ছোট হয়ে গেছে বলে নয়, বরং যিনি সেটির দায়িত্বে আছেন তাঁকে যথাযথভাবে চেনা হয়েছে বলে।"
          }
        ]
      }
    ]
  },
  "2:257": {
    "sections": [
      {
        "h": {
          "en": "The Sentence and Its Mirror",
          "bn": "বাক্য ও তার প্রতিবিম্ব"
        },
        "p": [
          {
            "en": "Allah is the wali of those who believe; He brings them out of the darknesses into the light. And those who disbelieve — their patrons are the taghut, who bring them out of the light into the darknesses. The verse is built as a mirror: the same verb of bringing out, the same two destinations, opposite directions. Everyone in it is moving; no one is standing still. The only question the verse leaves open is which way you are being led.",
            "bn": "আল্লাহ মুমিনদের ওয়ালী; তিনি তাদের অন্ধকারসমূহ থেকে আলোয় বের করে আনেন। আর যারা কুফর করে — তাদের অভিভাবক তাগূত, যারা তাদের আলো থেকে অন্ধকারসমূহে বের করে নেয়। আয়াতটি আয়নার মতো গড়া: বের করে আনার একই ক্রিয়া, একই দুই গন্তব্য, বিপরীত দুই দিক। এর ভেতরের প্রত্যেকে চলমান; কেউ স্থির দাঁড়িয়ে নেই। আয়াতটি কেবল একটি প্রশ্নই খোলা রাখে: আপনাকে কোন দিকে নিয়ে যাওয়া হচ্ছে।"
          },
          {
            "en": "Wali is a rich word: ally, protector, guardian, the one who takes charge of your affairs and stands closest to you. When Allah names Himself wali of the believers, He is not describing a feeling but a working relationship — guidance given, protection extended, affairs managed by One who neither sleeps, as 2:255 has just said, nor is ever absent.",
            "bn": "ওয়ালী শব্দটি সমৃদ্ধ: মিত্র, রক্ষক, অভিভাবক — যিনি আপনার বিষয়গুলোর দায়িত্ব নেন এবং আপনার সবচেয়ে কাছে দাঁড়ান। আল্লাহ যখন নিজেকে মুমিনদের ওয়ালী বলেন, তিনি কোনো অনুভূতির বর্ণনা দিচ্ছেন না, বরং এক কার্যকর সম্পর্কের: হিদায়াত দেওয়া হয়, সুরক্ষা প্রসারিত হয়, বিষয়াদি পরিচালনা করেন এমন এক সত্তা — যিনি ঘুমান না, যেমন 2:255 এইমাত্র বলেছে, এবং কখনো অনুপস্থিতও নন।"
          }
        ]
      },
      {
        "h": {
          "en": "After the Kursi and the Choice",
          "bn": "কুরসী ও সিদ্ধান্তের পরে"
        },
        "p": [
          {
            "en": "The verse does not stand alone. 2:255 has just described the God whose Kursi extends over the heavens and the earth. 2:256 then declares there is no compulsion in religion, for guidance has become clear from error, and promises that whoever rejects the taghut and believes in Allah has grasped the firmest handle, which never breaks. 2:257 completes the movement: it shows what happens after the hand closes on the handle — or refuses it.",
            "bn": "আয়াতটি একা দাঁড়িয়ে নেই। 2:255 এইমাত্র সেই আল্লাহর বর্ণনা দিয়েছে যাঁর কুরসী আসমান-যমীন পরিব্যাপ্ত। এরপর 2:256 ঘোষণা করে দ্বীনে কোনো জবরদস্তি নেই, কারণ হিদায়াত ভ্রান্তি থেকে স্পষ্ট হয়ে গেছে, আর প্রতিশ্রুতি দেয়: যে তাগূতকে প্রত্যাখ্যান করে আল্লাহর প্রতি ঈমান আনে, সে ধরেছে সেই মজবুত হাতল যা কখনো ভাঙে না। 2:257 গতিটি সম্পূর্ণ করে: দেখায় হাত হাতলটি আঁকড়ে ধরার পরে — কিংবা প্রত্যাখ্যান করার পরে — কী ঘটে।"
          },
          {
            "en": "Read as a sequence, the three verses answer three questions in order. Who is Allah? The Living, the Sustainer, as 2:255 declares. How is faith entered? Freely, by a clear choice, as 2:256 rules. What does the choice deliver? A guardian, and a lifelong movement toward light, as 2:257 promises. The commentators read the passage as one lesson in three steps rather than three isolated sayings.",
            "bn": "ধারাবাহিকভাবে পড়লে তিনটি আয়াত পরপর তিনটি প্রশ্নের উত্তর দেয়। আল্লাহ কে? চিরঞ্জীব, সর্বসত্তার ধারক — যেমন 2:255 ঘোষণা করে। ঈমানে প্রবেশ কীভাবে? স্বাধীনভাবে, স্পষ্ট এক সিদ্ধান্তে — যেমন 2:256 বিধান দেয়। সেই সিদ্ধান্ত কী এনে দেয়? একজন অভিভাবক, আর আলোর দিকে আজীবনের এক যাত্রা — যেমন 2:257 প্রতিশ্রুতি দেয়। মুফাসসিরগণ অংশটিকে তিনটি বিচ্ছিন্ন উক্তি নয়, তিন ধাপের এক শিক্ষা হিসেবে পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Darknesses Plural, Light Singular",
          "bn": "অন্ধকার বহু, আলো এক"
        },
        "p": [
          {
            "en": "The Arabic is precise: zulumat, darknesses, always plural in this idiom; nur, light, singular. The commentators draw the meaning out: falsehood is many — sects, superstitions, desires, ideologies, each a darkness of its own — while truth is one road. 6:153 states it as a command: this is My path, straight, so follow it, and do not follow the other ways, for they will scatter you from His way.",
            "bn": "আরবিটি সূক্ষ্ম: যুলুমাত — অন্ধকারসমূহ — এই প্রয়োগে সবসময় বহুবচন; নূর — আলো — একবচন। মুফাসসিরগণ অর্থটি টেনে বের করেন: বাতিল অনেক — দল, কুসংস্কার, প্রবৃত্তি, মতবাদ, প্রতিটি নিজস্ব এক অন্ধকার — অথচ সত্য একটিই পথ। 6:153 একে আদেশ আকারে বলে: এই আমার পথ, সরল; সুতরাং এরই অনুসরণ করো, অন্য পথগুলোর অনুসরণ কোরো না, কারণ সেগুলো তোমাদের তাঁর পথ থেকে বিচ্ছিন্ন করে দেবে।"
          },
          {
            "en": "Darkness in the Quran's usage is not only ignorance of doctrine. It is every state in which a person cannot see where they are going: confusion about what matters, blindness to consequences, a conscience dimmed by habit. Light, correspondingly, is not information but sight — the ability to see the world, the self and the road ahead as they actually are.",
            "bn": "কুরআনের ব্যবহারে অন্ধকার কেবল আকীদার অজ্ঞতা নয়। এটি সেই প্রতিটি অবস্থা, যাতে মানুষ দেখতে পায় না সে কোথায় যাচ্ছে: কোনটি গুরুত্বপূর্ণ তা নিয়ে বিভ্রান্তি, পরিণতির প্রতি অন্ধতা, অভ্যাসে নিষ্প্রভ হয়ে আসা বিবেক। আলোও সেই অনুপাতে কেবল তথ্য নয়, দৃষ্টি — জগৎ, নিজ সত্তা ও সামনের পথকে যেমন তারা আসলে আছে তেমন দেখতে পারার ক্ষমতা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Taghut",
          "bn": "তাগূত কারা"
        },
        "p": [
          {
            "en": "Taghut, from a root meaning to overflow all bounds, is the Quran's name for whatever is served or obeyed in place of Allah — idols, tyrants, soothsayers, and in every age its newer forms. The scholars' definitions vary in wording and agree in substance: anything that takes for itself, or is given, what belongs to Allah alone. Such patrons come in the plural where the true wali is one, and the verse's grammar carries exactly that contrast.",
            "bn": "তাগূত — সীমা ছাড়িয়ে উপচে পড়া অর্থের ধাতু থেকে — আল্লাহর জায়গায় যার সেবা বা আনুগত্য করা হয় তার কুরআনি নাম: মূর্তি, স্বৈরাচারী, গণক, আর প্রতিটি যুগে এর নতুন নতুন রূপ। আলিমদের সংজ্ঞা শব্দে ভিন্ন হলেও মর্মে একমত: যা নিজের জন্য নিয়ে নেয়, বা যাকে দিয়ে দেওয়া হয়, কেবল আল্লাহর প্রাপ্য বিষয়গুলো। এমন অভিভাবক আসে বহুবচনে, অথচ প্রকৃত ওয়ালী এক — আর আয়াতের ব্যাকরণ ঠিক এই বৈপরীত্যই বহন করে।"
          },
          {
            "en": "Their direction of pull is the verse's sharpest point: out of the light into the darknesses. The commentators explain that the light was available to them — the clear proofs of 2:256, the sound nature every person is created upon — and their false patrons turn them away from it. No one begins in neutral. Turning from light that has reached you is itself a movement into the dark.",
            "bn": "তাদের টানের দিকটিই আয়াতের তীক্ষ্ণতম কথা: আলো থেকে অন্ধকারসমূহের দিকে। মুফাসসিরগণ ব্যাখ্যা করেন, আলো তাদের নাগালে ছিল — 2:256 আয়াতের স্পষ্ট প্রমাণসমূহ, আর যে বিশুদ্ধ স্বভাবের ওপর প্রতিটি মানুষ সৃষ্ট — এবং তাদের মিথ্যা অভিভাবকরা তাদের সেখান থেকে ফিরিয়ে নেয়। কেউ নিরপেক্ষ অবস্থান থেকে শুরু করে না। যে আলো আপনার কাছে পৌঁছেছে তা থেকে মুখ ফেরানোই অন্ধকারের দিকে এক চলা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Promise Elsewhere",
          "bn": "অন্যত্র একই প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Bringing out of darknesses into light is one of the Quran's steady descriptions of what Allah does for believers. 5:16 says He guides by the Quran those who pursue His pleasure into the ways of peace and brings them out of darknesses into light by His permission. 14:1 gives the Book that very purpose, and 65:11 attaches it to the Messenger reciting clear verses. 33:43 adds that He and His angels send blessings on the believers to bring them out of darknesses into light.",
            "bn": "অন্ধকারসমূহ থেকে আলোয় বের করে আনা — মুমিনদের জন্য আল্লাহ যা করেন তার এক স্থায়ী কুরআনি বর্ণনা। 5:16 বলে, যারা তাঁর সন্তুষ্টির অনুসরণ করে তিনি কুরআনের মাধ্যমে তাদের শান্তির পথগুলোতে চালান এবং নিজ অনুমতিতে অন্ধকারসমূহ থেকে আলোয় বের করে আনেন। 14:1 কিতাবকে ঠিক এই উদ্দেশ্যই দেয়, আর 65:11 এটি যুক্ত করে স্পষ্ট আয়াত তিলাওয়াতকারী রাসূলের সঙ্গে। 33:43 যোগ করে: তিনি ও তাঁর ফেরেশতারা মুমিনদের ওপর রহমত বর্ষণ করেন তাদের অন্ধকারসমূহ থেকে আলোয় বের করে আনতে।"
          },
          {
            "en": "Gather the passages and the instruments of the bringing-out appear: the Book, the Messenger ﷺ, and Allah's own mercy and blessing. The believer is not asked to generate light; he is asked to stay attached to the sources of it. Detach from revelation, and the verse's other current — the pull of the many darknesses — does not stop running.",
            "bn": "অংশগুলো একত্র করলে বের করে আনার উপকরণগুলো ফুটে ওঠে: কিতাব, রাসূল ﷺ, আর আল্লাহর নিজের রহমত ও বরকত। মুমিনকে আলো উৎপাদন করতে বলা হয়নি; বলা হয়েছে আলোর উৎসগুলোর সঙ্গে যুক্ত থাকতে। ওহী থেকে বিচ্ছিন্ন হোন — আয়াতের অন্য স্রোত, বহু অন্ধকারের টান, তখনো বইতে থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Auditing Your Allegiances",
          "bn": "নিজের আনুগত্য যাচাই"
        },
        "p": [
          {
            "en": "The verse invites a plain audit. Everyone has patrons in practice: voices obeyed, sources trusted, company kept, feeds followed. The test it offers is directional — after a season under this influence, do I see more clearly or less? Am I closer to prayer, honesty and remembrance, or further? Movement toward light and movement toward darkness both happen gradually, which is why the audit has to be deliberate.",
            "bn": "আয়াতটি এক সরল যাচাইয়ের আমন্ত্রণ জানায়। কার্যত প্রত্যেকেরই অভিভাবক আছে: যে কণ্ঠের আনুগত্য করা হয়, যে উৎসে ভরসা রাখা হয়, যে সঙ্গ রাখা হয়, যা নিয়মিত দেখা-শোনা হয়। এর দেওয়া পরীক্ষাটি দিকনির্ণায়ক — এই প্রভাবের অধীনে একটা সময় কাটানোর পর আমি কি আগের চেয়ে স্পষ্ট দেখি, নাকি কম? নামায, সততা ও স্মরণের কাছাকাছি এসেছি, নাকি দূরে গেছি? আলোর দিকে চলা আর অন্ধকারের দিকে চলা দুটিই ঘটে ধীরে ধীরে — তাই যাচাইটি হতে হয় সচেতনভাবে।"
          },
          {
            "en": "And the promise is personal. Taking Allah as wali is not a mood but a set of acts: obeying Him when it costs, consulting His Book before other counsel, asking Him first. Whoever does this has His word that the direction of their life is out of every darkness — confusion, sin, despair — and into light, and that the Guardian managing the journey never hands it off.",
            "bn": "আর প্রতিশ্রুতিটি ব্যক্তিগত। আল্লাহকে ওয়ালী হিসেবে গ্রহণ করা কোনো মেজাজ নয়, কতগুলো কাজ: মূল্য দিতে হলেও তাঁর আনুগত্য, অন্য পরামর্শের আগে তাঁর কিতাবের শরণ, সবার আগে তাঁর কাছে চাওয়া। যে এমন করে, তার জন্য তাঁর কথা রইল: তার জীবনের অভিমুখ প্রতিটি অন্ধকার থেকে — বিভ্রান্তি, গুনাহ, হতাশা — আলোর দিকে; আর এই যাত্রার পরিচালক অভিভাবক কখনো দায়িত্ব অন্য হাতে তুলে দেন না।"
          }
        ]
      }
    ]
  },
  "2:261": {
    "sections": [
      {
        "h": {
          "en": "A Seed in the Spending Passage",
          "bn": "ব্যয়ের অনুচ্ছেদে একটি বীজ"
        },
        "p": [
          {
            "en": "The verse opens a sustained passage on spending that continues through 2:274 without a break. Earlier, in 2:254 the believers were told to spend from what they had been given before a day arrives with no bargaining and no friendship; now the Quran turns from warning to invitation. The example of those who spend their wealth in the way of Allah is like a grain that grows seven ears, in every ear a hundred grains. The image is drawn from farming, the most familiar economy its first hearers knew.",
            "bn": "আয়াতটি ব্যয় বিষয়ে এক দীর্ঘ অনুচ্ছেদের সূচনা করে, যা বিরতিহীনভাবে 2:274 পর্যন্ত চলে। এর আগে 2:254 আয়াতে মুমিনদের বলা হয়েছিল এমন এক দিন আসার আগে ব্যয় করতে, যেদিন কোনো বেচাকেনা থাকবে না, কোনো বন্ধুত্বও না; এখন কুরআন সতর্কবার্তা থেকে আমন্ত্রণে ফেরে। যারা আল্লাহর পথে নিজেদের সম্পদ ব্যয় করে তাদের উপমা একটি দানার মতো, যা থেকে সাতটি শীষ গজায়, প্রতিটি শীষে একশত দানা। চিত্রটি নেওয়া হয়েছে কৃষি থেকে — এর প্রথম শ্রোতারা যে অর্থনীতিকে সবচেয়ে ভালো চিনত।"
          },
          {
            "en": "The choice of picture matters. A merchant's profit returns to him alone; a seed becomes food for others, and its growth is slow, hidden, and entirely dependent on what Allah sends of rain and sun. The verb is anbatat — the grain itself \"produced\" seven ears — yet every listener knew that no grain grows itself. From the first line, then, giving is placed inside a world where increase is Allah's work, not the giver's, and where the visible loss of burying a seed is simply what sowing looks like.",
            "bn": "ছবিটির নির্বাচন অর্থবহ। ব্যবসায়ীর মুনাফা কেবল তার নিজের কাছে ফেরে; কিন্তু একটি বীজ অন্যদের খাদ্য হয়ে ওঠে, আর তার বৃদ্ধি ধীর, অদৃশ্য এবং আল্লাহ যে বৃষ্টি ও রোদ পাঠান তার ওপর সম্পূর্ণ নির্ভরশীল। ক্রিয়াপদটি হলো আনবাতাত — দানাটি নিজেই সাতটি শীষ \"উৎপন্ন করল\" — অথচ প্রত্যেক শ্রোতা জানত, কোনো দানা নিজে নিজে গজায় না। তাই প্রথম পঙ্‌ক্তি থেকেই দানকে এমন এক জগতে বসানো হয়েছে যেখানে বৃদ্ধি আল্লাহর কাজ, দাতার নয়, আর বীজ পুঁতে ফেলার দৃশ্যমান ক্ষতিটাই আসলে বপনের স্বাভাবিক চেহারা।"
          }
        ]
      },
      {
        "h": {
          "en": "Seven Hundred From One",
          "bn": "এক থেকে সাতশত"
        },
        "p": [
          {
            "en": "The arithmetic is stated so that it can be done: seven ears with a hundred grains in each is seven hundred grains from a single seed. Ibn Kathir places beside the verse a report that Muslim narrates from Abu Mas'ud al-Ansari (RA): a man brought a haltered she-camel and said, \"This is in the way of Allah,\" and the Prophet ﷺ told him that on the Day of Resurrection he would have seven hundred she-camels, all of them haltered. The parable was not poetry alone; it was applied as a real rate.",
            "bn": "হিসাবটি এমনভাবে বলা হয়েছে যেন তা কষে দেখা যায়: প্রতিটিতে একশত দানাসহ সাতটি শীষ মানে একটিমাত্র বীজ থেকে সাতশত দানা। ইবনে কাসীর আয়াতটির পাশে সেই বর্ণনাটি রাখেন যা মুসলিম আবু মাসউদ আল-আনসারী (রাঃ) থেকে বর্ণনা করেন: এক ব্যক্তি লাগামসহ একটি উটনী এনে বলল, \"এটি আল্লাহর পথে,\" আর নবী ﷺ তাকে বললেন, কিয়ামতের দিন সে পাবে সাতশত উটনী, সবগুলোই লাগামসহ। উপমাটি কেবল কাব্য ছিল না; একে বাস্তব হার হিসেবেই প্রয়োগ করা হয়েছিল।"
          },
          {
            "en": "Then the verse refuses to close the ledger: and Allah multiplies for whom He wills. Seven hundred is a floor for this door of deeds, not a ceiling, and what lies beyond it is left to His will — tied, as-Sa'di explains, to the giver's faith and sincerity and to the benefit the gift actually brings. The verse ends with two names, al-Wasi' al-'Alim: His giving is vast enough to afford all of this, and He knows exactly who gave what, from what, and why.",
            "bn": "এরপর আয়াতটি খাতা বন্ধ করতে অস্বীকার করে: আর আল্লাহ যাকে চান তার জন্য বহুগুণ বাড়িয়ে দেন। সাতশত এই আমলের দরজার নিচের সীমা, উপরের সীমা নয়, আর এর ঊর্ধ্বে যা আছে তা তাঁর ইচ্ছার হাতে ছেড়ে দেওয়া হয়েছে — আস-সা'দী ব্যাখ্যা করেন, তা যুক্ত দাতার ঈমান ও আন্তরিকতার সঙ্গে এবং দানটি বাস্তবে যে উপকার আনে তার সঙ্গে। আয়াত শেষ হয় দুটি নামে, আল-ওয়াসি' আল-'আলীম: তাঁর দান এত প্রশস্ত যে এই সবকিছু দেওয়া তাঁর পক্ষে সহজ, আর তিনি ঠিকঠিক জানেন কে কী দিল, কোথা থেকে দিল, কেন দিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Guard the Gift",
          "bn": "যে আয়াতগুলো দানকে পাহারা দেয়"
        },
        "p": [
          {
            "en": "What follows shows that the harvest can be lost after the sowing. In 2:262 those who spend and do not follow their gift with reminders of favour or with injury are promised their reward with their Lord, with no fear and no grief. In 2:264 charity followed by reminders and hurt is likened to rain falling on a smooth stone carrying a little soil — the downpour leaves it bare and hard. Spending plants the seed, but pride and cruelty afterwards can strip the whole field.",
            "bn": "এরপরের আয়াতগুলো দেখায়, বপনের পরেও ফসল হারিয়ে যেতে পারে। 2:262 আয়াতে যারা ব্যয় করে এবং দানের পেছনে খোঁটা বা কষ্ট দেওয়া জুড়ে দেয় না, তাদের প্রতিশ্রুতি দেওয়া হয়েছে তাদের প্রভুর কাছে প্রতিদান, কোনো ভয় নেই, কোনো দুঃখও নেই। 2:264 আয়াতে খোঁটা ও কষ্ট দেওয়ায় অনুসৃত দানকে তুলনা করা হয়েছে সামান্য মাটি জমা মসৃণ পাথরের ওপর বৃষ্টির সঙ্গে — প্রবল বর্ষণ সেটিকে ন্যাড়া ও শক্ত করে রেখে যায়। ব্যয় বীজ রোপণ করে, কিন্তু পরবর্তী অহংকার ও নিষ্ঠুরতা গোটা ক্ষেত উজাড় করে দিতে পারে।"
          },
          {
            "en": "The passage then gives the opposite picture. In 2:265 those who spend seeking Allah's pleasure and the steadying of their own souls are like a garden on high ground: heavy rain doubles its fruit, and even a drizzle is enough for it. And in 2:271 both open and secret giving are honoured, with quiet giving to the poor called better for the giver. Read together, the passage teaches not only that we should give, but how a gift keeps its value once given.",
            "bn": "অনুচ্ছেদটি এরপর বিপরীত ছবিটি দেয়। 2:265 আয়াতে যারা আল্লাহর সন্তুষ্টি ও নিজেদের আত্মার দৃঢ়তার খোঁজে ব্যয় করে, তারা উঁচু ভূমির এক বাগানের মতো: ভারী বৃষ্টি তার ফল দ্বিগুণ করে, আর গুঁড়িগুঁড়ি বৃষ্টিও তার জন্য যথেষ্ট। আর 2:271 আয়াতে প্রকাশ্য ও গোপন দুই দানই সম্মানিত, তবে গরিবকে নীরবে দেওয়া দাতার জন্য উত্তম বলা হয়েছে। একসাথে পড়লে অনুচ্ছেদটি শুধু এটুকু শেখায় না যে আমাদের দেওয়া উচিত, বরং এটাও শেখায় — দেওয়ার পরে একটি দান কীভাবে তার মূল্য ধরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wider Economy of Giving",
          "bn": "দানের বৃহত্তর অর্থনীতি"
        },
        "p": [
          {
            "en": "Other verses use the same daring language about the same act. In 2:245 spending is called a goodly loan to Allah, which He multiplies many times over; in 34:39 He promises that whatever you spend, He will replace it. The general rule for good deeds appears in 6:160 — whoever brings a good deed shall have ten times its like — while charity in this verse reaches seven hundred, which tells us how highly this particular deed ranks.",
            "bn": "অন্য আয়াতগুলোও একই কাজ নিয়ে একই সাহসী ভাষা ব্যবহার করে। 2:245 আয়াতে ব্যয়কে বলা হয়েছে আল্লাহকে দেওয়া উত্তম ঋণ, যা তিনি বহুগুণে বাড়িয়ে দেন; 34:39 আয়াতে তিনি প্রতিশ্রুতি দেন, তোমরা যা-ই ব্যয় করবে তিনি তার বিনিময় দেবেন। নেক আমলের সাধারণ নিয়মটি আছে 6:160 আয়াতে — যে একটি সৎকাজ আনবে সে পাবে তার দশ গুণ — অথচ এই আয়াতে দান পৌঁছে যায় সাতশতে, যা বলে দেয় এই বিশেষ আমলটির মর্যাদা কত উঁচুতে।"
          },
          {
            "en": "The Prophet ﷺ said, in a hadith that Muslim narrates, that charity does not diminish wealth. And al-Bukhari narrates that two angels descend every morning, one praying, \"O Allah, give the one who spends a replacement,\" and the other, \"O Allah, give the one who withholds ruin.\" The seed-picture of 2:261 makes the same claim as an image: what has left the hand has not left the ledger, and the only spending that is truly gone is the spending that never happened.",
            "bn": "নবী ﷺ বলেছেন — হাদীসটি মুসলিম বর্ণনা করেন — দান সম্পদ কমায় না। আর আল-বুখারী বর্ণনা করেন, প্রতিদিন সকালে দুজন ফেরেশতা নেমে আসেন; একজন দোয়া করেন, \"হে আল্লাহ, ব্যয়কারীকে বিনিময় দিন,\" আর অন্যজন, \"হে আল্লাহ, কৃপণকে ধ্বংস দিন।\" 2:261 আয়াতের বীজ-চিত্র একই দাবিকে ছবিতে রূপ দেয়: যা হাত থেকে গেছে তা হিসাবের খাতা থেকে যায়নি, আর প্রকৃত অর্থে হারিয়ে যাওয়া ব্যয় কেবল সেটাই — যে ব্যয় কখনো করাই হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Parable",
          "bn": "উপমাটি যাপন করা"
        },
        "p": [
          {
            "en": "A farmer does not grieve when the seed leaves his hand and disappears under the soil; he calls that day the beginning of the crop, not the loss of the grain. The verse asks the giver to feel the same way at the exact moment of parting with money, which is precisely the moment giving hurts. It also frees the small giver: a single grain is a tiny thing, and it is exactly the tiny thing that the parable chooses to magnify seven hundredfold.",
            "bn": "কৃষক দুঃখ করে না যখন বীজ তার হাত ছেড়ে মাটির নিচে অদৃশ্য হয়; সে ওই দিনটিকে বলে ফসলের শুরু, দানা হারানো নয়। আয়াতটি দাতাকে ঠিক সেই অনুভূতিটিই চায় টাকা হাতছাড়া করার মুহূর্তে — যা কিনা ঠিক সেই মুহূর্ত যখন দান করা কষ্ট দেয়। এটি ছোট দাতাকেও মুক্ত করে: একটিমাত্র দানা অতি ক্ষুদ্র জিনিস, আর ঠিক সেই ক্ষুদ্র জিনিসটিকেই উপমাটি সাতশত গুণে বড় করে দেখায়।"
          },
          {
            "en": "The open clause — Allah multiplies for whom He wills — turns attention from the amount to the giver. Two people may give the same coin and sow very different harvests. So the practical work of this verse is inward and outward at once: find something to give today, keep it free of reminders and of show, and let the mathematics of seven ears and a hundred grains, together with whatever lies beyond them, remain what the verse leaves it — Allah's own business.",
            "bn": "খোলা বাক্যাংশটি — আল্লাহ যাকে চান তার জন্য বহুগুণ বাড়িয়ে দেন — মনোযোগকে অঙ্ক থেকে দাতার দিকে ফেরায়। দুজন মানুষ একই মুদ্রা দান করে খুব ভিন্ন ফসল বুনতে পারে। তাই এই আয়াতের ব্যবহারিক কাজ একই সঙ্গে ভেতরের ও বাইরের: আজ দেওয়ার মতো কিছু খুঁজে নিন, তাকে খোঁটা ও লোকদেখানো থেকে মুক্ত রাখুন, আর সাত শীষ ও একশত দানার গণিতকে — এবং তার ঊর্ধ্বে যা কিছু আছে তাকে — সেখানেই থাকতে দিন যেখানে আয়াত রেখেছে: আল্লাহর নিজের এখতিয়ারে।"
          }
        ]
      }
    ]
  },
  "2:281": {
    "sections": [
      {
        "h": {
          "en": "Planted in the Middle of a Ledger",
          "bn": "হিসাবের খাতার মাঝখানে বসানো"
        },
        "p": [
          {
            "en": "This verse sits inside the longest stretch of financial law in the Quran. 2:275 to 2:279 deal with riba and end by telling those who repent that they may have their principal, wronging nobody and being wronged by nobody. 2:280 requires that a debtor in hardship be given respite until ease, and adds that remitting the debt as charity is better. Then comes our verse, and after it 2:282, the longest verse in the Book, on writing debts down.",
            "bn": "এই আয়াতটি বসে আছে কুরআনের সবচেয়ে দীর্ঘ আর্থিক বিধানের অংশের ভেতরে। 2:275 থেকে 2:279 সুদ নিয়ে আলোচনা করে এবং শেষ হয় এই কথা দিয়ে যে, যারা তাওবা করে তারা তাদের মূলধন পেতে পারে — তারা কারও ওপর জুলুম করবে না, তাদের ওপরও জুলুম করা হবে না। 2:280 দাবি করে, অভাবগ্রস্ত ঋণগ্রহীতাকে সচ্ছলতা আসা পর্যন্ত অবকাশ দিতে হবে, আর যোগ করে যে ঋণ মাফ করে দেওয়া আরও ভালো। এরপর আসে আমাদের আয়াত, আর তার পরে 2:282 — কিতাবের দীর্ঘতম আয়াত, ঋণ লিখে রাখা নিয়ে।"
          },
          {
            "en": "The placement is the first thing to notice. Between a rule about forgiving what you are owed and a rule about documenting what you lend, the Quran inserts a sentence about being returned to Allah. It does not conclude the financial passage from outside; it is planted in the middle of it, where the money is. Whatever else this verse is, it is a verse about the Day of Judgement addressed to creditors and to debtors.",
            "bn": "প্রথমে যা লক্ষ করার তা হলো এর অবস্থান। আপনার প্রাপ্য মাফ করে দেওয়ার বিধান আর আপনার দেওয়া ঋণ লিখে রাখার বিধান — এই দুইয়ের মাঝখানে কুরআন বসিয়ে দেয় আল্লাহর কাছে ফিরিয়ে নেওয়া হওয়ার একটি বাক্য। এটি বাইরে থেকে আর্থিক অংশটির উপসংহার টানে না; বরং একেবারে তার মাঝখানে বসানো, যেখানে টাকাপয়সা আছে। এই আয়াত আর যা-ই হোক, এটি কিয়ামত দিবস নিয়ে এমন এক আয়াত যা পাওনাদার ও দেনাদারকে সম্বোধন করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "You Will Be Returned",
          "bn": "তোমাদের ফিরিয়ে নেওয়া হবে"
        },
        "p": [
          {
            "en": "Turja'una is passive: you will be brought back, not you will return. The distinction matters because the whole passage is about parties who decide things — who lends, who waits, who forgives, who writes it down. This clause names the one appointment that nobody arranges for himself. 29:57 states it the same way, with every soul tasting death and then being returned to Him, and the Arabic there is passive too.",
            "bn": "'তুরজাঊন' কর্মবাচ্য: তোমাদের ফিরিয়ে আনা হবে, তোমরা নিজে ফিরে যাবে না। পার্থক্যটি গুরুত্বপূর্ণ, কারণ গোটা অংশটিই এমন পক্ষদের নিয়ে যারা সিদ্ধান্ত নেয় — কে ঋণ দেবে, কে অপেক্ষা করবে, কে মাফ করবে, কে লিখে রাখবে। এই বাক্যাংশটি নাম নেয় সেই একটিমাত্র সাক্ষাতের, যার আয়োজন কেউ নিজে করে না। 29:57 একইভাবে বলে — প্রত্যেক প্রাণ মৃত্যুর স্বাদ নেবে, তারপর তাদের তাঁর দিকেই ফিরিয়ে নেওয়া হবে — এবং সেখানকার আরবিও কর্মবাচ্য।"
          },
          {
            "en": "There is a second shift inside the sentence. It opens by addressing you in the plural — fear a Day when you will be returned — and closes speaking about them: every soul will be paid in full what it earned, and they will not be wronged. The audience gathered at the start has dispersed by the end into individual souls. A room can be addressed together. It cannot be judged together.",
            "bn": "বাক্যটির ভেতরে দ্বিতীয় আরেকটি পরিবর্তন আছে। এটি শুরু হয় বহুবচনে 'তোমাদের' সম্বোধন করে — সেই দিনকে ভয় করো যেদিন তোমাদের ফিরিয়ে নেওয়া হবে — আর শেষ হয় 'তাদের' নিয়ে কথা বলে: প্রত্যেক প্রাণকে তার অর্জন পুরোপুরি দেওয়া হবে, আর তাদের ওপর জুলুম করা হবে না। শুরুতে জড়ো হওয়া শ্রোতারা শেষে এসে আলাদা আলাদা প্রাণে ছড়িয়ে গেছে। একটি ঘরভর্তি মানুষকে একসঙ্গে সম্বোধন করা যায়; একসঙ্গে বিচার করা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Paid in Full",
          "bn": "পুরোপুরি পরিশোধ"
        },
        "p": [
          {
            "en": "Tuwaffa is from the root of wafa', completing and discharging in full; it is the root behind the command to give full measure and behind tawaffa, the taking of a soul. The Quran chose a settlement word and set it inside a passage about settlements. Every clause around it involves an amount owed — the principal, the delay, the remission, the written term — and this verse says that a final account will be paid out to the last unit.",
            "bn": "'তুওয়াফফা' এসেছে 'ওয়াফা' ধাতু থেকে, যার অর্থ পূর্ণ করা ও পুরোপুরি পরিশোধ করা; এই একই ধাতু থেকে এসেছে পুরো মাপ দেওয়ার নির্দেশ, আর 'তাওয়াফফা' — প্রাণ পূর্ণরূপে নিয়ে নেওয়া। কুরআন একটি হিসাব-নিষ্পত্তির শব্দ বেছে নিয়ে তা বসিয়েছে হিসাব-নিষ্পত্তি নিয়ে আলোচনার ভেতরে। এর চারপাশের প্রতিটি বাক্যেই কোনো না কোনো প্রাপ্য অঙ্ক আছে — মূলধন, বিলম্ব, মাফ, লিখিত মেয়াদ — আর এই আয়াত বলছে, চূড়ান্ত হিসাবটি শেষ এককটি পর্যন্ত মিটিয়ে দেওয়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Earned",
          "bn": "যা সে অর্জন করেছে"
        },
        "p": [
          {
            "en": "Kasabat here is neutral and covers everything a soul brings. That is worth marking, because the same surah later separates the verbs. In 2:286 the good is laha ma kasabat, hers is what she earned, and the evil is 'alayha ma iktasabat, against her is what she acquired, in a form that carries added effort. Here one verb carries both, because the point is not the difference between them but that the total is paid.",
            "bn": "এখানে 'কাসাবাত' নিরপেক্ষ, আর তা প্রাণটি যা কিছু নিয়ে আসে সবই ধরে। এটি লক্ষ করার মতো, কারণ এই সূরাই পরে ক্রিয়াপদ দুটিকে আলাদা করে দেয়। 2:286-এ কল্যাণ সম্পর্কে বলা হয়েছে 'লাহা মা কাসাবাত' — সে যা অর্জন করেছে তা তারই; আর মন্দ সম্পর্কে 'আলাইহা মাক্‌তাসাবাত' — সে যা কামাই করেছে তা তার বিরুদ্ধে, এমন এক গঠনে যা বাড়তি প্রচেষ্টার অর্থ বহন করে। এখানে একটিই ক্রিয়াপদ দুটোকেই বহন করছে, কারণ এখানে বিষয় দুইয়ের পার্থক্য নয়, বরং পুরো অঙ্কটি পরিশোধ হওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Among the Last, But Which Last",
          "bn": "শেষ আয়াতগুলোর একটি, তবে কোনটি শেষ"
        },
        "p": [
          {
            "en": "Reports from the early generations place this verse among the last portions of the Quran to be revealed, and some of them name a number of days that the Prophet ﷺ lived afterwards. The reports do not agree with one another. Other narrations name the verse of kalalah at 4:176 as the last revealed, and others point to 2:278 on riba or to 5:3 on the completion of the religion.",
            "bn": "প্রাচীন যুগের বর্ণনাগুলো এই আয়াতকে কুরআনের সবশেষে নাযিল হওয়া অংশগুলোর মধ্যে রাখে, আর কোনো কোনো বর্ণনায় বলা হয় এরপর নবী ﷺ কত দিন জীবিত ছিলেন। বর্ণনাগুলো পরস্পরের সঙ্গে মেলে না। অন্য কিছু বর্ণনা 4:176-এর কালালা সংক্রান্ত আয়াতকে সবশেষে নাযিল হওয়া আয়াত বলে, আবার কিছু বর্ণনা সুদ সংক্রান্ত 2:278 বা দ্বীন পূর্ণ হওয়া সংক্রান্ত 5:3-এর দিকে ইঙ্গিত করে।"
          },
          {
            "en": "The honest position is that the reports differ, and that no single verse can be declared the final one on their strength. Some of the difference is a difference of question: last revealed of all, last revealed on a ruling, last revealed of a particular passage. What the reports do agree on is that this verse is late, and that what a community was left with near the end was a sentence about being returned to Allah.",
            "bn": "সৎ অবস্থানটি হলো: বর্ণনাগুলো ভিন্ন, আর সেগুলোর ভিত্তিতে কোনো একটি আয়াতকে সর্বশেষ আয়াত বলে ঘোষণা করা যায় না। এই ভিন্নতার কিছুটা আসলে প্রশ্নের ভিন্নতা: সব মিলিয়ে সর্বশেষ, না কোনো বিধানের ব্যাপারে সর্বশেষ, না কোনো নির্দিষ্ট অংশের সর্বশেষ। বর্ণনাগুলো যে বিষয়ে একমত তা হলো, এই আয়াতটি শেষদিকের; আর একটি জাতির হাতে শেষ পর্যায়ে যা রেখে যাওয়া হলো তা আল্লাহর কাছে ফিরিয়ে নেওয়া হওয়ার একটি বাক্য।"
          }
        ]
      },
      {
        "h": {
          "en": "They Will Not Be Wronged",
          "bn": "তাদের ওপর জুলুম করা হবে না"
        },
        "p": [
          {
            "en": "The verse's closing verb has already been heard in this passage. 2:279 told those who give up riba that they may keep their capital — la tazlimuna wa la tuzlamun, wronging nobody and being wronged by nobody. Here the same root is applied to the reckoning, and turned to the third person: wa hum la yuzlamun. Justice between two traders and justice on the Day are named with one term, which is this surah's way of saying that they are the same standard at two different scales.",
            "bn": "আয়াতের শেষ ক্রিয়াপদটি এই অংশে আগেও শোনা গেছে। 2:279 সুদ পরিত্যাগকারীদের বলেছে, তারা তাদের মূলধন রাখতে পারে — 'লা তাযলিমূনা ওয়ালা তুযলামূন', তারা কারও ওপর জুলুম করবে না, তাদের ওপরও জুলুম করা হবে না। এখানে সেই একই ধাতু প্রয়োগ করা হলো হিসাব-নিকাশের ওপর, আর তা ঘুরিয়ে দেওয়া হলো নাম-পুরুষে: 'ওয়া হুম লা ইউযলামূন'। দুই ব্যবসায়ীর মধ্যেকার ন্যায় আর কিয়ামতের দিনের ন্যায় — দুটিকেই একই শব্দে নাম দেওয়া হয়েছে, আর এভাবেই এই সূরা বলে যে এ দুটি আসলে একই মানদণ্ড, কেবল দুই মাপে।"
          },
          {
            "en": "6:160 closes with this identical clause after describing how deeds are repaid, so the phrase is the Quran's standing guarantee at the ledger. What it rules out on the human side is straightforward. A debt collected harshly from someone in hardship, a term quietly altered, a document not written because trust was assumed — each of these is an entry, and the verse says the entry survives the death of both parties.",
            "bn": "6:160-ও আমল কীভাবে প্রতিদান পাবে তা বর্ণনার পর ঠিক এই বাক্যাংশ দিয়েই শেষ হয়, অর্থাৎ কথাটি হিসাবের খাতায় কুরআনের স্থায়ী নিশ্চয়তা। মানুষের দিক থেকে এটি যা বাতিল করে তা সহজবোধ্য। অভাবগ্রস্ত কারও কাছ থেকে কঠোরভাবে আদায় করা ঋণ, নীরবে বদলে দেওয়া মেয়াদ, বিশ্বাসের দোহাই দিয়ে না-লেখা দলিল — এর প্রতিটিই একেকটি ভুক্তি, আর আয়াত বলছে সেই ভুক্তি দুই পক্ষেরই মৃত্যুর পরও টিকে থাকে।"
          }
        ]
      }
    ]
  },
  "2:284": {
    "sections": [
      {
        "h": {
          "en": "Where the Ending Begins",
          "bn": "যেখানে সমাপ্তি শুরু"
        },
        "p": [
          {
            "en": "This verse opens the closing group of Surah al-Baqarah. Immediately before it, 2:283 finishes the long passage on debts, pledges and witnesses with a warning about the inside of a person: do not conceal testimony, for whoever conceals it, his heart is sinful. The next verse takes that verb, concealing, out of the courtroom and applies it to everything a human being keeps out of sight.",
            "bn": "এই আয়াত দিয়েই সূরা আল-বাকারার সমাপ্তি-অংশ শুরু হয়। ঠিক এর আগে 2:283 আয়াত ঋণ, বন্ধক ও সাক্ষ্য নিয়ে দীর্ঘ আলোচনাটি শেষ করে মানুষের ভেতরটা নিয়ে এক সতর্কবাণী দিয়ে: সাক্ষ্য গোপন করো না, যে তা গোপন করে তার অন্তর পাপী। পরের আয়াতটি সেই 'গোপন করা' ক্রিয়াটিকে আদালত-কক্ষ থেকে তুলে এনে মানুষ যা কিছু দৃষ্টির আড়ালে রাখে তার সবটিতে প্রয়োগ করে।"
          },
          {
            "en": "The verse states ownership first — to Allah belongs whatever is in the heavens and whatever is in the earth — a clause the reader has already met in 2:255 earlier in this same surah. Then the accounting: whether you show what is within yourselves or conceal it, Allah will bring you to account for it. Then two possibilities, and the order is worth noticing: He forgives whom He wills, and He punishes whom He wills. Forgiveness is named first.",
            "bn": "আয়াতটি আগে মালিকানার কথা বলে — আসমানসমূহে যা কিছু আছে আর যমীনে যা কিছু আছে সবই আল্লাহর — এই বাক্যাংশটির সঙ্গে পাঠকের পরিচয় এই সূরাতেই আগে 2:255 আয়াতে হয়ে গেছে। তারপর হিসাবের কথা: তোমাদের অন্তরে যা আছে তা প্রকাশ করো বা গোপন করো, আল্লাহ তার হিসাব নেবেন। তারপর দুটি সম্ভাবনা, আর ক্রমটি লক্ষ করার মতো: তিনি যাকে ইচ্ছা ক্ষমা করেন, আর যাকে ইচ্ছা শাস্তি দেন। ক্ষমার নামই আগে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night It Fell Heavy",
          "bn": "যে রাতে তা ভারী ঠেকল"
        },
        "p": [
          {
            "en": "Muslim narrates from Abu Hurayrah (RA) that when this verse came down it weighed on the Companions. They came to the Prophet ﷺ, knelt, and said that they had been charged with duties they could carry — prayer, fasting, striving, charity — but that this verse was beyond their strength. He answered by asking whether they wished to say what the two communities of the People of the Book before them had said: we hear and we disobey.",
            "bn": "ইমাম মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, এই আয়াত নাযিল হলে তা সাহাবীদের উপর ভারী ঠেকে। তাঁরা নবী ﷺ-এর কাছে এসে হাঁটু গেড়ে বসেন এবং বলেন, তাঁদের এমন দায়িত্ব দেওয়া হয়েছে যা তাঁরা বহন করতে পারেন — নামায, রোযা, জিহাদ, সদকা — কিন্তু এই আয়াতটি তাঁদের শক্তির বাইরে। নবী ﷺ পাল্টা প্রশ্ন করেন, তাঁরা কি তাঁদের আগের আহলে কিতাবের দুই সম্প্রদায় যা বলেছিল তা-ই বলতে চান — আমরা শুনলাম এবং অমান্য করলাম?"
          },
          {
            "en": "He told them to say instead: we hear and we obey, Your forgiveness, our Lord, and to You is the destination. They said it, and the narration reports that their tongues submitted to it. What they had just been taught to say is then found word for word at the close of 2:285, which came down after. Then 2:286 came, and in this narration the answer given to each petition of that closing supplication is: Yes. A second narration in Muslim, from Ibn Abbas (RA), reports the answer as: I have done so.",
            "bn": "তিনি তাঁদের বরং বলতে বলেন: আমরা শুনলাম এবং মানলাম; হে আমাদের প্রতিপালক, তোমার ক্ষমা চাই, আর প্রত্যাবর্তন তোমারই দিকে। তাঁরা তা বলেন, আর বর্ণনায় আছে যে তাঁদের জিহ্বা তাতে বশ মানে। তাঁদের যা বলতে শেখানো হলো, ঠিক সেই কথাগুলোই হুবহু পাওয়া যায় 2:285 আয়াতের শেষে, যা এরপর নাযিল হয়। তারপর নাযিল হয় 2:286, আর এই বর্ণনায় সেই সমাপনী দু'আর প্রতিটি আবেদনের জবাব আসে: হ্যাঁ। মুসলিমের আরেকটি বর্ণনায়, ইবনে আব্বাস (রাঃ) থেকে, জবাবটি এসেছে: আমি তা করলাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Abrogated, or Explained?",
          "bn": "রহিত, না ব্যাখ্যাকৃত?"
        },
        "p": [
          {
            "en": "The narration in Muslim itself uses the word: Allah then abrogated it. Al-Bukhari records a Companion's statement that this verse was abrogated by what came after it. So the abrogation reading is not an invention of later scholars; it is in the reports. But it is not the only reading among the early authorities, and pretending otherwise would misrepresent the field.",
            "bn": "মুসলিমের বর্ণনাটি নিজেই শব্দটি ব্যবহার করে: এরপর আল্লাহ তা রহিত করে দেন। ইমাম বুখারী এক সাহাবীর বক্তব্য উদ্ধৃত করেন যে এই আয়াতটি পরবর্তী আয়াত দ্বারা রহিত হয়েছে। কাজেই রহিত হওয়ার ব্যাখ্যাটি পরবর্তী যুগের আলিমদের বানানো কিছু নয়; তা বর্ণনাতেই আছে। কিন্তু প্রাচীন যুগের কর্তৃপক্ষদের মধ্যে এটিই একমাত্র ব্যাখ্যা নয়, আর অন্যরকম ভান করলে বিষয়টিকে ভুলভাবে উপস্থাপন করা হবে।"
          },
          {
            "en": "Ibn Kathir reports the other position as well: that nothing was lifted, and that what happened was clarification. On that reading a person is called to account for what the heart settles on and acts upon, not for the involuntary thought that crosses it and is refused. Those who hold it cite al-Bukhari's narration from Abu Hurayrah (RA) that Allah has pardoned this community for what occurs to their minds so long as they do not act on it or speak it. The difference is old, and the honest thing is to say that the scholars differ.",
            "bn": "ইবনে কাসীর অন্য অবস্থানটিও উল্লেখ করেন: কিছুই তুলে নেওয়া হয়নি, যা ঘটেছে তা হলো ব্যাখ্যা স্পষ্ট করা। সেই পাঠ অনুযায়ী মানুষকে হিসাব দিতে হবে অন্তর যাতে স্থির হয় এবং যার উপর সে আমল করে তার জন্য, অনিচ্ছাকৃতভাবে মনে উঁকি দিয়ে প্রত্যাখ্যাত হওয়া ভাবনার জন্য নয়। এই মত যাঁরা ধরেন তাঁরা বুখারীর সেই বর্ণনাটি উল্লেখ করেন, যা আবু হুরাইরা (রাঃ) থেকে বর্ণিত — আল্লাহ এই উম্মতের মনে যা উদয় হয় তা মাফ করে দিয়েছেন, যতক্ষণ না তারা সে অনুযায়ী কাজ করে বা তা মুখে বলে। মতভেদটি পুরনো, আর সৎ কথা হলো এটাই যে আলিমগণ এখানে ভিন্নমত পোষণ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Heart Is Not Exempt",
          "bn": "অন্তর ছাড়ের বাইরে নয়"
        },
        "p": [
          {
            "en": "Whichever reading is taken, the inner life is not left unaccountable, because other verses say the same thing without any dispute attached. 2:225 says Allah does not take you to task for what is unintentional in your oaths, but for what your hearts have earned. 33:5 says there is no blame for an honest mistake, but there is for what your hearts intended. In both, the settled intent of the heart is the thing recorded.",
            "bn": "যে পাঠই নেওয়া হোক, অন্তর্জীবন হিসাবের বাইরে থাকে না, কারণ অন্য আয়াতগুলো একই কথা বলে যেখানে কোনো মতভেদ জড়িত নেই। 2:225 আয়াত বলে, আল্লাহ তোমাদের অর্থহীন শপথের জন্য পাকড়াও করবেন না, কিন্তু তোমাদের অন্তর যা অর্জন করেছে তার জন্য করবেন। 33:5 আয়াত বলে, আন্তরিক ভুলের জন্য কোনো গুনাহ নেই, কিন্তু তোমাদের অন্তরের সংকল্পের জন্য আছে। উভয় ক্ষেত্রেই অন্তরের স্থির সংকল্পই লিপিবদ্ধ হওয়া জিনিসটি।"
          },
          {
            "en": "3:29 states the knowledge side in almost the same words as this verse: whether you conceal what is in your breasts or reveal it, Allah knows it. Read together, the verses close a door that most of us leave quietly open — the assumption that the interior of a person is unpoliced territory, where motives can be kept for private use and never audited.",
            "bn": "3:29 আয়াত জ্ঞানের দিকটি প্রায় এই আয়াতেরই শব্দে বলে: তোমরা তোমাদের অন্তরের বিষয় গোপন করো বা প্রকাশ করো, আল্লাহ তা জানেন। একসঙ্গে পড়লে আয়াতগুলো এমন একটি দরজা বন্ধ করে দেয় যা আমাদের অধিকাংশই চুপচাপ খোলা রেখে দিই — এই ধারণা যে মানুষের ভেতরটা পাহারাবিহীন এলাকা, যেখানে নিয়তগুলো ব্যক্তিগত ব্যবহারের জন্য রেখে দেওয়া যায় এবং কখনো তার নিরীক্ষা হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under It",
          "bn": "এর নিচে বেঁচে থাকা"
        },
        "p": [
          {
            "en": "The practical weight of the verse falls on motive rather than on thought. A passing resentment that arrives and is pushed away is not the target; a grudge that is fed, or a public good deed done for the look of it, is. The work it asks for is quiet and continuous: check what you actually want from an action before you do it, and again afterwards, when the reason tends to change.",
            "bn": "আয়াতটির ব্যবহারিক ভারটি ভাবনার উপর নয়, নিয়তের উপর পড়ে। ক্ষণিকের এক বিরক্তি যা আসে আর ঠেলে সরিয়ে দেওয়া হয় — তা লক্ষ্যবস্তু নয়; কিন্তু যে বিদ্বেষকে খাইয়ে পুষে রাখা হয়, কিংবা লোক-দেখানোর জন্য করা প্রকাশ্য কোনো ভালো কাজ — সেটাই। এটি যে কাজটি চায় তা নীরব ও অবিরাম: কোনো কাজ করার আগে যাচাই করুন আপনি আসলে তা থেকে কী চাইছেন, আর কাজের পরেও আবার যাচাই করুন, যখন কারণটা বদলে যেতে থাকে।"
          },
          {
            "en": "It is worth ending where the verse ends, and where the passage it opens ends. This verse names forgiveness before punishment. The three verses it begins close with 2:286 and a supplication that was answered request by request. Being seen through, in this Book, is never presented as a reason for despair; it is presented as a reason to bring the inside into line with the outside.",
            "bn": "আয়াতটি যেখানে শেষ হয়, আর যে অংশটি সে শুরু করেছে তা যেখানে শেষ হয় — সেখানেই থামা ভালো। এই আয়াতে শাস্তির আগে ক্ষমার নাম আসে। যে তিন আয়াতের সূচনা সে করেছে, তা শেষ হয় 2:286 আয়াতে, এমন এক দু'আয় যার প্রতিটি আবেদন কবুল হয়েছিল। এই কিতাবে ভেতর পর্যন্ত দেখে ফেলা হওয়াকে কখনোই হতাশার কারণ হিসেবে পেশ করা হয় না; পেশ করা হয় ভেতরটাকে বাইরের সঙ্গে মিলিয়ে নেওয়ার কারণ হিসেবে।"
          }
        ]
      }
    ]
  },
  "2:286": {
    "sections": [
      {
        "h": {
          "en": "Capacity, Not Cruelty",
          "bn": "সাধ্য, নিষ্ঠুরতা নয়"
        },
        "p": [
          {
            "en": "The verse begins with a rule that governs the whole of the law: Allah does not burden a soul beyond its wus'. The word is worth pausing on. Wus' is not the utmost a person can manage before collapsing; it is the comfortable room a person has, the space within their capacity. The commentators point out that Allah could have used a word meaning maximum effort and did not. The obligations of Islam sit inside our range, not at its outer edge.",
            "bn": "আয়াতটি শুরু হয় এমন এক নীতি দিয়ে যা গোটা শরীয়তকে পরিচালনা করে: আল্লাহ কোনো প্রাণকে তার 'উস'-এর বাইরে দায়িত্ব দেন না। শব্দটির ওপর একটু থামা দরকার। 'উস' মানে ভেঙে পড়ার আগমুহূর্ত পর্যন্ত সর্বোচ্চ চেষ্টা নয়; এর অর্থ মানুষের সামর্থ্যের ভেতরে যে স্বস্তির জায়গাটুকু থাকে, সেটুকু। মুফাসসিরগণ লক্ষ করেন, আল্লাহ চাইলে 'সর্বোচ্চ শক্তি' অর্থে শব্দ ব্যবহার করতে পারতেন, কিন্তু করেননি। ইসলামের দায়িত্বগুলো আমাদের সামর্থ্যের ভেতরে বসে আছে, তার শেষ প্রান্তে নয়।"
          },
          {
            "en": "The next clause turns on a small grammatical shift that the commentators regularly note. For good it says laha ma kasabat, hers is what she earned; for evil, wa 'alayha ma iktasabat, against her is what she acquired. The second verb is a form that carries added effort. Good is written down as soon as it is earned; evil is recorded as something a person had to work at. The asymmetry is not an accident of style.",
            "bn": "পরের বাক্যটি একটি ছোট ব্যাকরণগত পরিবর্তনের ওপর দাঁড়িয়ে, যা মুফাসসিরগণ প্রায়ই উল্লেখ করেন। কল্যাণ সম্পর্কে বলা হয়েছে 'লাহা মা কাসাবাত' — সে যা অর্জন করেছে তা তারই; আর মন্দ সম্পর্কে 'ওয়া আলাইহা মাক্‌তাসাবাত' — সে যা কামাই করেছে তা তার বিরুদ্ধে। দ্বিতীয় ক্রিয়াপদটি এমন এক গঠনে, যা বাড়তি প্রচেষ্টার অর্থ বহন করে। ভালো কাজ অর্জিত হওয়ামাত্র লেখা হয়; মন্দ কাজ লেখা হয় এমন কিছু হিসেবে যার জন্য মানুষকে পরিশ্রম করতে হয়েছে। এই অসমতা কেবল ভাষার কারুকাজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night the Weight Lifted",
          "bn": "যে রাতে বোঝা নেমে গেল"
        },
        "p": [
          {
            "en": "This is one of the places where a sound occasion of revelation is preserved. Muslim narrates that when 2:284 came down, saying that Allah will call to account whatever the servants disclose or conceal within themselves, the companions found it heavy and came to the Prophet ﷺ saying that this was beyond their power. He told them not to answer as the People of the Book had answered, but to say: we hear and we obey.",
            "bn": "এটি সেই কয়েকটি জায়গার একটি যেখানে সহীহ সূত্রে শানে নুযূল সংরক্ষিত আছে। মুসলিম বর্ণনা করেন, যখন 2:284 নাযিল হয় — অর্থাৎ বান্দারা নিজেদের ভেতরে যা প্রকাশ করে বা গোপন রাখে, আল্লাহ সবকিছুর হিসাব নেবেন — সাহাবীরা তা ভারী বোধ করেন এবং নবী ﷺ-এর কাছে এসে বলেন, এটি তাঁদের সাধ্যের বাইরে। নবী ﷺ তাঁদের বলেন, আহলে কিতাব যেভাবে জবাব দিয়েছিল সেভাবে বলো না; বরং বলো — আমরা শুনলাম এবং মানলাম।"
          },
          {
            "en": "When they said it and their tongues submitted to it, this verse came down and lifted what they had feared. In this narration the answer given to each request in the closing supplication is: Yes. A second narration in Muslim, from Ibn Abbas (RA), reports the answer as: I have done so. That is the emotional shape of the passage. A community expressed obedience before it received relief, and then relief arrived request by request. The verse is the last of Surah al-Baqarah, and it ends the longest surah on an answered prayer.",
            "bn": "তাঁরা যখন তা বললেন এবং তাঁদের জিহ্বা তাতে নত হলো, তখন এই আয়াত নাযিল হয়ে তাঁদের ভয়টুকু তুলে নেয়। এই বর্ণনায় শেষাংশের দোয়ার প্রতিটি আবেদনের জবাব আসে — হ্যাঁ। মুসলিমের আরেকটি বর্ণনায়, ইবনে আব্বাস (রাঃ) থেকে, জবাবটি এসেছে — আমি তা করে দিলাম। এটিই এই অংশের আবেগগত কাঠামো। একটি জাতি স্বস্তি পাওয়ার আগেই আনুগত্য ঘোষণা করেছিল, আর তারপর স্বস্তি এসেছিল আবেদন ধরে ধরে। আয়াতটি সূরা আল-বাকারার শেষ আয়াত, আর কুরআনের দীর্ঘতম সূরাটি শেষ হয় একটি কবুল হওয়া দোয়া দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Requests in Order",
          "bn": "ক্রমানুসারে পাঁচটি আবেদন"
        },
        "p": [
          {
            "en": "The supplication is carefully ordered. First, do not take us to task if we forget or fall into error, which asks for the two failures that are not deliberate. Then, do not place upon us an isr, a heavy binding burden such as was placed on those before us. Then, do not make us bear what we have no strength for. Notice that the servant asks for ease even after being told the law is already within capacity.",
            "bn": "দোয়াটি অত্যন্ত সুবিন্যস্ত। প্রথমে: আমরা যদি ভুলে যাই বা ভুল করি, আমাদের পাকড়াও করবেন না — অর্থাৎ যে দুই ধরনের ত্রুটি ইচ্ছাকৃত নয়, সেগুলোর কথা। এরপর: আমাদের ওপর 'ইসর' চাপিয়ে দেবেন না — সেই ভারী, বাঁধনদায়ী বোঝা, যা আমাদের পূর্ববর্তীদের ওপর দেওয়া হয়েছিল। এরপর: আমাদের এমন কিছু বহন করাবেন না যার শক্তি আমাদের নেই। লক্ষ করুন, শরীয়ত সাধ্যের ভেতরেই আছে জানার পরও বান্দা স্বস্তির প্রার্থনা করছে।"
          },
          {
            "en": "The last three words for mercy are not repetition. 'Afw is erasure, that the offence be wiped away as though it had not happened; maghfirah comes from covering, that it be veiled from exposure; rahmah is the mercy that gives after the debt is settled. The prayer ends by naming Allah our mawla, our protector and patron, and asking for help against those who reject faith. Weakness has been turned, sentence by sentence, into a claim on His care.",
            "bn": "শেষের তিনটি শব্দ কেবল পুনরাবৃত্তি নয়। 'আফও মানে মুছে ফেলা — অপরাধটি যেন ঘটেইনি, এমনভাবে মিটিয়ে দেওয়া; মাগফিরাত এসেছে আবরণের অর্থ থেকে — অর্থাৎ তা ঢেকে রাখা, প্রকাশ না করা; আর রহমত হলো সেই দয়া, যা দেনা মিটে যাওয়ার পরও দান করে। দোয়াটি শেষ হয় আল্লাহকে 'মাওলা' — আমাদের অভিভাবক ও পৃষ্ঠপোষক — বলে ডেকে, আর অস্বীকারকারী সম্প্রদায়ের বিরুদ্ধে সাহায্য চেয়ে। বাক্যে বাক্যে দুর্বলতাকে বদলে দেওয়া হয়েছে তাঁর যত্নের ওপর এক দাবিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Draw",
          "bn": "মুফাসসিরগণ যা গ্রহণ করেন"
        },
        "p": [
          {
            "en": "The majority of exegetes take the opening rule as a foundation of Islamic legal reasoning rather than a comforting sentiment. From it the jurists derive that inability removes obligation: the one who cannot stand prays sitting, the one who cannot fast makes up or feeds, the one under genuine compulsion is not held as the free actor is. Whole chapters of fiqh on concession and necessity rest on this single clause.",
            "bn": "অধিকাংশ মুফাসসির আয়াতের সূচনা-নীতিটিকে কেবল সান্ত্বনার বাক্য নয়, বরং ইসলামী আইনচিন্তার একটি ভিত্তি হিসেবে গ্রহণ করেন। এখান থেকেই ফকীহগণ নীতি নেন যে অক্ষমতা দায়িত্ব রহিত করে: যে দাঁড়াতে পারে না সে বসে নামায পড়ে, যে রোযা রাখতে পারে না সে কাযা করে বা ফিদইয়া দেয়, আর যে প্রকৃত বাধ্যবাধকতার মধ্যে আছে তাকে স্বাধীন ব্যক্তির মতো ধরা হয় না। ছাড় ও প্রয়োজনের ওপর ফিকহের বহু অধ্যায় এই একটি বাক্যের ওপর দাঁড়িয়ে।"
          },
          {
            "en": "They also read the verse against 2:284 rather than apart from it. The earlier verse establishes that Allah knows the inner life completely; this one clarifies that He does not punish the passing thought a person neither acted on nor settled into. Knowledge is total; accountability is measured. Holding both together is what keeps a believer honest without becoming paralysed by self-inspection.",
            "bn": "তাঁরা আয়াতটিকে 2:284 থেকে বিচ্ছিন্ন করে নয়, বরং তার পাশে রেখে পড়েন। আগের আয়াত প্রতিষ্ঠা করে যে আল্লাহ অন্তরের সবকিছু পূর্ণরূপে জানেন; আর এই আয়াত স্পষ্ট করে যে ক্ষণিকের যে ভাবনা মানুষ কাজে রূপ দেয়নি বা মনে স্থায়ী করেনি, তার জন্য তিনি শাস্তি দেন না। জ্ঞান পূর্ণ; জবাবদিহি পরিমিত। এই দুটোকে একসঙ্গে ধরে রাখলেই মুমিন সৎ থাকে, অথচ আত্মপরীক্ষার ভারে অবশ হয়ে পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "In the Practice of the Prophet ﷺ",
          "bn": "নবী ﷺ-এর আমলে"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both record that the Prophet ﷺ said whoever recites the last two verses of Surah al-Baqarah in a night, they will suffice him. Whatever the precise scope of that sufficiency, the practice it produced is clear: these verses became part of the believer's night, recited as protection and as the closing statement of the day. Many companions are reported to have kept them as a fixed habit before sleeping.",
            "bn": "বুখারী ও মুসলিম উভয়েই বর্ণনা করেন, নবী ﷺ বলেছেন — যে ব্যক্তি কোনো রাতে সূরা আল-বাকারার শেষ দুই আয়াত পাঠ করবে, তা তার জন্য যথেষ্ট হবে। সেই 'যথেষ্ট' হওয়ার পরিধি যা-ই হোক, এর ফলে যে আমলটি গড়ে উঠেছে তা স্পষ্ট: এই আয়াতগুলো মুমিনের রাতের অংশ হয়ে যায় — নিরাপত্তা হিসেবে, আবার দিনের সমাপ্তি-ঘোষণা হিসেবেও। বহু সাহাবী থেকে বর্ণিত আছে, ঘুমানোর আগে তাঁরা এটিকে নিয়মিত অভ্যাসে পরিণত করেছিলেন।"
          },
          {
            "en": "Muslim also narrates that these closing verses, together with al-Fatihah, were given to the Prophet ﷺ as two lights not given to any prophet before him. The wording matters for how a Muslim uses them. They are described as a gift and a light, not as an incantation. Recited without meaning they are still recitation; recited with meaning they are a conversation the believer has already been told was answered.",
            "bn": "মুসলিম আরও বর্ণনা করেন যে সূরা ফাতিহা এবং এই শেষ আয়াতগুলো নবী ﷺ-কে দুটি নূর হিসেবে দেওয়া হয়েছিল, যা তাঁর আগে কোনো নবীকে দেওয়া হয়নি। শব্দচয়নটি গুরুত্বপূর্ণ, কারণ এটি ঠিক করে দেয় একজন মুসলিম এগুলো কীভাবে ব্যবহার করবে। এগুলোকে বলা হয়েছে উপহার ও আলো — কোনো মন্ত্র নয়। অর্থ না বুঝে পড়লেও তা তিলাওয়াত; কিন্তু অর্থ বুঝে পড়লে তা এমন এক কথোপকথন, যার জবাব দেওয়া হয়েছে বলে আমাদের আগেই জানানো হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living With Your Limits",
          "bn": "নিজের সীমা নিয়ে বেঁচে থাকা"
        },
        "p": [
          {
            "en": "It helps to be exact about what the opening promise covers. It says that Allah does not impose religious obligation beyond capacity. It does not promise that life will never feel overwhelming, that grief will stay manageable, or that a person will never need help, rest or treatment. Reading it as a claim that no believer can ever be crushed by circumstances turns a mercy into a burden, which is the opposite of the verse's own direction.",
            "bn": "আয়াতের শুরুর প্রতিশ্রুতিটি ঠিক কী কভার করে, সে বিষয়ে নির্ভুল হওয়া দরকার। এটি বলছে, আল্লাহ সাধ্যের অতিরিক্ত ধর্মীয় দায়িত্ব চাপান না। এটি প্রতিশ্রুতি দিচ্ছে না যে জীবন কখনো অসহনীয় মনে হবে না, শোক সবসময় সামলানোর মতো থাকবে, কিংবা মানুষের কখনো সাহায্য, বিশ্রাম বা চিকিৎসার দরকার হবে না। একে যদি এভাবে পড়া হয় যে কোনো মুমিন কখনো পরিস্থিতির চাপে ভেঙে পড়তে পারে না, তবে একটি রহমতকে বোঝায় পরিণত করা হয় — যা আয়াতের নিজের গতিরই বিপরীত।"
          },
          {
            "en": "Used properly it does two things at once. When a duty feels impossible, it asks whether the duty is truly beyond capacity or merely beyond current habit, and the difference is usually clear on inspection. And when a person is genuinely at the end of their strength, it hands them a supplication that Allah Himself taught for exactly that moment, ending not in a complaint but in the words: You are our protector, so help us.",
            "bn": "সঠিকভাবে ব্যবহার করলে এটি একসঙ্গে দুটি কাজ করে। যখন কোনো দায়িত্ব অসম্ভব মনে হয়, তখন এটি প্রশ্ন করে — দায়িত্বটি কি সত্যিই সাধ্যের বাইরে, নাকি কেবল বর্তমান অভ্যাসের বাইরে? একটু খতিয়ে দেখলে পার্থক্যটা সাধারণত পরিষ্কার হয়ে যায়। আর যখন কেউ সত্যিই নিজের শক্তির শেষ প্রান্তে পৌঁছে যায়, তখন এটি তার হাতে তুলে দেয় ঠিক সেই মুহূর্তের জন্য আল্লাহর শেখানো একটি দোয়া, যা অভিযোগে শেষ হয় না, শেষ হয় এই কথায় — আপনি আমাদের অভিভাবক, তাই আমাদের সাহায্য করুন।"
          }
        ]
      }
    ]
  }
});
