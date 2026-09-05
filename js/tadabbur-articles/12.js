/**
 * Tadabbur long-form articles — surah 12.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "12:18": {
    "sections": [
      {
        "h": {
          "en": "A Shirt and a Wolf",
          "bn": "একটি জামা ও একটি নেকড়ে"
        },
        "p": [
          {
            "en": "The brothers come back with a story and a piece of evidence. 12:17 gives the story: we went racing and left Yusuf with our belongings, and a wolf ate him, and you would not believe us even if we were truthful. 12:18 gives the evidence, that they came with false blood upon his shirt. The Arabic is bi-damin kadhib, blood qualified by a word for lying, so that grammatically the liar is the blood itself rather than the men carrying it.",
            "bn": "ভাইয়েরা ফিরে আসে একটি গল্প আর একটি প্রমাণ নিয়ে। 12:17 আয়াতে গল্পটি: আমরা দৌড় প্রতিযোগিতা করছিলাম আর ইউসুফকে আমাদের জিনিসপত্রের কাছে রেখে গিয়েছিলাম, তখন তাকে নেকড়ে খেয়ে ফেলল; আর আমরা সত্যবাদী হলেও আপনি আমাদের বিশ্বাস করবেন না। 12:18 আয়াতে প্রমাণটি: তারা তার জামায় মিথ্যা রক্ত মাখিয়ে নিয়ে এসেছিল। আরবি হলো বিদামিন কাযিব — রক্তকে বিশেষায়িত করা হয়েছে মিথ্যা বোঝানো একটি শব্দ দিয়ে, ফলে ব্যাকরণগতভাবে মিথ্যাবাদী রক্ত নিজেই, তা বয়ে আনা লোকগুলো নয়।"
          },
          {
            "en": "The shirt is the object this surah keeps returning to. Here it carries blood that is not Yusuf's (AS). In 12:25-28 a different shirt, torn from the back, is read as testimony and clears him. In 12:93 he sends his own shirt to be cast over his father's face, and in 12:96 the sight returns. A garment manufactures a lie at the start of the story and delivers the truth at the end, and the same old man is on the receiving end of both.",
            "bn": "জামাটিই সেই বস্তু, যেখানে এই সূরা বারবার ফিরে আসে। এখানে তাতে লেগে আছে এমন রক্ত যা ইউসুফ (আঃ)-এর নয়। 12:25-28 আয়াতে আরেকটি জামা, যা পেছন থেকে ছেঁড়া, সাক্ষ্য হিসেবে পড়া হয় এবং আযীযের গৃহে তাঁকে নির্দোষ প্রমাণ করে। 12:93 আয়াতে তিনি নিজের জামা পাঠান পিতার মুখমণ্ডলে রাখার জন্য, আর 12:96 আয়াতে দৃষ্টি ফিরে আসে। গল্পের শুরুতে একটি বস্ত্র দিয়ে মিথ্যা বানানো হয় আর শেষে সেই বস্ত্র দিয়েই সত্য পৌঁছে দেওয়া হয় — আর দুবারই গ্রহীতা সেই একই বৃদ্ধ পিতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Bal: Rather",
          "bn": "'বাল': বরং"
        },
        "p": [
          {
            "en": "Yaqub's (AS) reply opens with bal, a particle that cancels what has just been said and substitutes something else. He does not argue about the wolf, ask for the body, or examine the cloth. He states: rather, your souls have enticed you to something. The verb sawwalat carries the sense of a matter being made attractive and easy in the mind until it is done. He describes the mechanism of the crime while declining to claim details he does not have.",
            "bn": "ইয়াকুব (আঃ)-এর জবাব শুরু হয় 'বাল' দিয়ে — এমন এক অব্যয় যা মাত্র বলা কথাটিকে বাতিল করে অন্য কিছু বসিয়ে দেয়। তিনি নেকড়ে নিয়ে তর্ক করেন না, লাশ চেয়ে বসেন না, কাপড়টিও পরীক্ষা করেন না। তিনি বলেন: বরং, তোমাদের প্রবৃত্তি তোমাদের একটি কাজে প্ররোচিত করেছে। 'সাওওয়ালাত' ক্রিয়াটির অর্থে আছে কোনো বিষয়কে মনের ভেতরে সুন্দর ও সহজ করে তোলা, যতক্ষণ না তা করে ফেলা হয়। তিনি অপরাধটির প্রক্রিয়া বর্ণনা করেন, অথচ যেসব বিবরণ তাঁর জানা নেই সেগুলো দাবি করতে অস্বীকার করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Words With Something Missing",
          "bn": "দুই শব্দ, যাতে কিছু অনুক্ত"
        },
        "p": [
          {
            "en": "Then fa-sabrun jamil, and something in it is unstated. It is a nominal phrase in the nominative with no verb, and either its subject or its predicate left unexpressed, so the grammarians fill the gap in more than one way: my course is a beautiful patience, or beautiful patience is what is fitting. The app's English chooses so patience is most fitting; the Bengali has him say that he will hold to a complete patience. Both readings live inside the Arabic, and the ellipsis is why.",
            "bn": "এরপর আসে ফাসবরুন জামীল, আর এর ভেতরে কিছু একটা অনুক্ত রয়ে যায়। এটি কর্তৃকারকে থাকা একটি নামবাচক বাক্যাংশ, যাতে কোনো ক্রিয়া নেই এবং উদ্দেশ্য বা বিধেয়ও উহ্য; তাই ব্যাকরণবিদগণ শূন্যস্থানটি একাধিকভাবে পূরণ করেন: 'আমার পথ হলো সুন্দর ধৈর্য', কিংবা 'সুন্দর ধৈর্যই শ্রেয়'। অ্যাপের ইংরেজি অনুবাদ বেছে নেয় 'ধৈর্যই সবচেয়ে উপযুক্ত'; আর বাংলা অনুবাদে তিনি বলেন যে তিনি পুরোপুরি ধৈর্য ধারণ করবেন। দুটি পাঠই আরবির ভেতরে বাস করে, আর এই উহ্যতাই তার কারণ।"
          },
          {
            "en": "Jamil means beautiful, and the Quran attaches it to a small family of restraints; 15:85 does it for overlooking an injury. What is unusual here is the form. 70:5 gives the same two roots as a command to the Prophet ﷺ, fasbir sabran jamila, with a verb in the imperative and the noun in the accusative. In Yaqub's (AS) mouth there is no imperative and no verb at all. It is not an instruction issued to a man, but a description a man gives of himself at the moment the blow lands.",
            "bn": "'জামীল' মানে সুন্দর, আর কুরআন শব্দটি জুড়ে দেয় সংযমের একটি ছোট পরিবারের সঙ্গে; 15:85 আয়াতে তা জুড়ে দেওয়া হয়েছে আঘাত উপেক্ষা করার সঙ্গে। এখানে অস্বাভাবিক ব্যাপারটি হলো গঠন। 70:5 আয়াতে একই দুটি ধাতু নবী ﷺ-এর প্রতি নির্দেশ হিসেবে আসে — ফাসবির সবরান জামীলা — যেখানে ক্রিয়াটি আদেশবাচক এবং বিশেষ্যটি কর্মকারকে। ইয়াকুব (আঃ)-এর মুখে কোনো আদেশবাচক শব্দ নেই, ক্রিয়াই নেই। এটি কাউকে দেওয়া নির্দেশ নয়, বরং আঘাত নেমে আসার মুহূর্তে একজন মানুষের নিজের সম্পর্কে দেওয়া বর্ণনা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sentence He Says Twice",
          "bn": "যে বাক্য তিনি দুবার বলেন"
        },
        "p": [
          {
            "en": "Sixty-five verses later he says it again. In 12:83, after the brothers return from Egypt without Binyamin, his reply is word for word what he said here: rather, your souls have enticed you to something, so patience is most fitting. The app's English renders the two identically because the Arabic is identical. What differs is the clause each closes on, and that difference measures the distance travelled between them.",
            "bn": "পঁয়ষট্টি আয়াত পরে তিনি কথাটি আবার বলেন। 12:83 আয়াতে, ভাইয়েরা যখন বিনয়ামীনকে ছাড়া মিসর থেকে ফেরে, তাঁর জবাব অক্ষরে অক্ষরে এখানকার কথাটিই: বরং, তোমাদের প্রবৃত্তি তোমাদের একটি কাজে প্ররোচিত করেছে, কাজেই ধৈর্যই শ্রেয়। অ্যাপের ইংরেজি অনুবাদ দুটিকে অভিন্নভাবে দেয়, কারণ আরবিটাই অভিন্ন; বাংলা অনুবাদ দুই জায়গায় দুইভাবে দিয়েছে। পার্থক্য কেবল শেষ বাক্যাংশে — আর সেই পার্থক্যই মেপে দেয়, এই দুইয়ের মাঝখানে মানুষটি কতদূর পথ হেঁটেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The One Whose Help Is Sought",
          "bn": "যাঁর কাছে সাহায্য চাওয়া হয়"
        },
        "p": [
          {
            "en": "Here the close is wallahu al-musta'anu 'ala ma tasifun. Al-musta'an is a passive participle: the One whose help is sought. And the help is sought against ma tasifun, what you describe, not against the brothers themselves. Yaqub (AS) aims his recourse at the false account rather than at the men who brought it, which is a strikingly narrow target for a father just handed his son's bloodied shirt. 12:83 turns instead to hope — perhaps Allah will bring them all to me — and closes on His being the Knowing, the Wise.",
            "bn": "এখানে সমাপ্তি হলো ওয়াল্লাহুল মুসতাআনু আলা মা তাসিফূন। 'আল-মুসতাআন' একটি কর্মবাচ্য কৃদন্ত পদ: যাঁর কাছে সাহায্য চাওয়া হয়। আর সাহায্য চাওয়া হচ্ছে 'মা তাসিফূন'-এর বিরুদ্ধে, অর্থাৎ তোমরা যা বর্ণনা করছ তার বিরুদ্ধে — ভাইদের বিরুদ্ধে নয়। ইয়াকুব (আঃ) তাঁর আশ্রয় তাক করেন মিথ্যা বিবরণটির দিকে, তা বয়ে আনা লোকদের দিকে নয়; সদ্য ছেলের রক্তমাখা জামা হাতে পাওয়া একজন পিতার জন্য এ এক আশ্চর্য রকম সংকীর্ণ লক্ষ্য। 12:83 বরং আশার দিকে যায়: সম্ভবত আল্লাহ তাদের সবাইকে আমার কাছে এনে দেবেন — আর শেষ হয় তিনি সর্বজ্ঞ ও প্রজ্ঞাময়, এই কথা দিয়ে।"
          },
          {
            "en": "The phrase occurs once more in the Quran, at the very end of Surah al-Anbiya. In 21:112 the Prophet ﷺ says: my Lord, judge in truth; and our Lord is the Most Merciful, the One whose help is sought against what you describe. The same words, from a man facing lies about his message rather than about his son. In both places a false description of reality is in circulation, and neither speaker can pull it back by force.",
            "bn": "কথাটি কুরআনে আর একবার আসে, সূরা আল-আম্বিয়ার একেবারে শেষে। 21:112 আয়াতে নবী ﷺ বলেন: হে আমার প্রতিপালক, সত্য দিয়ে ফয়সালা করে দিন; আর আমাদের প্রতিপালক পরম দয়াময়, তোমরা যা বর্ণনা করছ তার বিরুদ্ধে তাঁরই কাছে সাহায্য চাওয়া হয়। একই কথা, তবে এমন একজনের মুখে যিনি নিজের সন্তান নয়, নিজের বার্তা নিয়ে মিথ্যার প্রচারণার মুখোমুখি। দুই জায়গাতেই বাস্তবতা সম্পর্কে একটি মিথ্যা বিবরণ ছড়িয়ে দেওয়া হয়েছে, আর দুই বক্তার কেউই তা জোর করে ফিরিয়ে আনতে পারেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "At the First Strike",
          "bn": "প্রথম আঘাতের মুহূর্তে"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim relate from Anas (RA) that the Prophet ﷺ passed a woman weeping at a grave and told her to fear Allah and be patient. Not recognising him, she told him to go away, since he had not been afflicted as she had. When she was told who he was she came to his door, found no doorkeepers there, and said she had not known him. He said: patience is only at the first strike.",
            "bn": "বুখারী ও মুসলিম আনাস (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ এক কবরের পাশে কাঁদতে থাকা এক নারীর পাশ দিয়ে যাচ্ছিলেন এবং তাকে বলেন আল্লাহকে ভয় করতে ও ধৈর্য ধরতে। তাঁকে চিনতে না পেরে নারীটি তাঁকে সরে যেতে বলে, কারণ তার মতো বিপদ তো তাঁর ঘটেনি। পরে যখন তাকে জানানো হয় তিনি কে ছিলেন, নারীটি তাঁর দরজায় আসে, সেখানে কোনো দ্বাররক্ষী পায় না, আর বলে যে সে তাঁকে চিনতে পারেনি। তিনি বলেন: ধৈর্য তো প্রথম আঘাতের মুহূর্তেই।"
          },
          {
            "en": "That is the hour this verse belongs to. Yaqub (AS) is not composed because time has softened anything; the blood on the cloth is still wet. What he does has three parts and they can be copied: name the wrong accurately, without inventing a version you cannot verify; decline to prosecute it yourself; and hand the false account to Allah. The grief ran on for decades. The first response set its direction.",
            "bn": "এই আয়াতটি সেই মুহূর্তেরই। ইয়াকুব (আঃ) সংযত এ কারণে নন যে সময় কিছু নরম করে দিয়েছে; কাপড়ের রক্ত তখনো ভেজা। সেই মুহূর্তে তিনি যা করেন তার তিনটি অংশ, আর তিনটিই অনুসরণযোগ্য: অন্যায়টির সঠিক নাম দেওয়া, এমন কোনো বিবরণ না বানিয়ে যা যাচাই করা যায় না; নিজে তার বিচার করতে না বসা; আর গোটা মিথ্যা বিবরণটি আল্লাহর হাতে তুলে দেওয়া। শোক চলেছিল দশকের পর দশক। প্রথম প্রতিক্রিয়াটিই তার দিক ঠিক করে দিয়েছিল।"
          }
        ]
      }
    ]
  },
  "12:64": {
    "sections": [
      {
        "h": {
          "en": "The Guarantee They Had Made Before",
          "bn": "আগেও তারা এই নিশ্চয়তা দিয়েছিল"
        },
        "p": [
          {
            "en": "The sons' request in 12:63 ends on a promise: and indeed we will be his guardians. A reader paying attention has met that sentence already. In 12:12, asking to take Yusuf (AS) out for the day, they said exactly the same thing, that he be sent with them tomorrow to eat well and play, and indeed they would be his guardians. The app's English renders the two guarantees identically, because the Arabic phrase is identical.",
            "bn": "12:63 আয়াতে ছেলেদের অনুরোধ শেষ হয় একটি প্রতিশ্রুতি দিয়ে: আর আমরা অবশ্যই তার রক্ষক হব। মনোযোগী পাঠক এই বাক্যটির সঙ্গে আগেই পরিচিত। 12:12 আয়াতে, ইউসুফ (আঃ)-কে একদিনের জন্য নিয়ে যাওয়ার আবেদনে তারা ঠিক একই কথা বলেছিল — আগামীকাল তাকে আমাদের সঙ্গে পাঠান, সে খাবে আর খেলবে, আর আমরা অবশ্যই তার রক্ষক হব। অ্যাপের ইংরেজি অনুবাদ দুটি নিশ্চয়তাকে অভিন্নভাবে দেয়, কারণ আরবি বাক্যাংশটি অভিন্ন।"
          },
          {
            "en": "In 12:11 they had opened that earlier request with a reproach: why do you not entrust us with Yusuf, when we are sincere counsellors to him? The verb there is ta'manna, from the root of amanah, a trust placed in someone's keeping. So this family has run the exact exchange once before, with the same words on both sides. What 12:64 records is a father recognising a script.",
            "bn": "12:11 আয়াতে সেই আগের আবেদনটি তারা শুরু করেছিল এক অনুযোগ দিয়ে: ইউসুফের ব্যাপারে আপনি আমাদের বিশ্বাস করছেন না কেন, অথচ আমরা তো তার শুভাকাঙ্ক্ষী? সেখানকার ক্রিয়াটি 'তা'মান্না', যার ধাতু 'আমানাহ' — কারও হেফাজতে রাখা আমানত। কাজেই এই পরিবার হুবহু এই সংলাপটি একবার চালিয়ে ফেলেছে, দুই পক্ষেই একই শব্দ নিয়ে। 12:64 আয়াতে যা লিপিবদ্ধ হয়েছে তা হলো একজন পিতার একটি চেনা চিত্রনাট্যকে চিনে ফেলা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question, Not an Answer",
          "bn": "উত্তর নয়, একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "His reply is neither a refusal nor a consent. Hal amanukum 'alayhi illa kama amintukum 'ala akhihi min qabl: shall I entrust you with him except as I entrusted you with his brother before? It is cast as a question, and it turns the sons' own root back on them twice. What he does not do is as deliberate. He brings no charge, revisits no detail of the old crime, and demands no confession, though by this point in the surah he has reason to want one. Seeing people accurately and being at war with them are two different postures, and this line separates them.",
            "bn": "তাঁর জবাব প্রত্যাখ্যানও নয়, সম্মতিও নয়। হাল আমানুকুম আলাইহি ইল্লা কামা আমিনতুকুম আলা আখীহি মিন কাবল — আমি কি তার ব্যাপারে তোমাদের তেমনি বিশ্বাস করব, যেমন আগে তার ভাইয়ের ব্যাপারে করেছিলাম? বাক্যটি প্রশ্নের রূপে গড়া, আর তাতে ছেলেদের নিজেদের ধাতুটিই দুবার তাদের দিকে ফিরিয়ে দেওয়া হয়েছে। তিনি যা করেন না, তা-ও ততটাই সচেতন। তিনি কোনো অভিযোগ আনেন না, পুরনো অপরাধের কোনো বিবরণ খোঁড়েন না, স্বীকারোক্তিও দাবি করেন না — যদিও সূরার এই পর্যায়ে তা চাওয়ার কারণ তাঁর আছে। মানুষকে স্পষ্ট চোখে দেখা আর তাদের সঙ্গে যুদ্ধে নামা — এ দুটি আলাদা অবস্থান, আর এই বাক্যটি দুটিকে আলাদা করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Better as a Guardian",
          "bn": "রক্ষক হিসেবে উত্তম"
        },
        "p": [
          {
            "en": "Then the turn: fa-Allahu khayrun hafizan. Khayr is the elative, which Arabic uses for both better and best; the app renders it the best guardian, and it is measured against something specific, the guarantee his sons have now offered twice. They said they would be hafizun; he answers with their own word and puts Allah above them in it. He does not call their promise worthless. He tells them where the real security has been filed.",
            "bn": "এরপর আসে মোড়: ফাল্লাহু খাইরুন হাফিযা। 'খাইর' ইসমে তাফদীল, যা আরবিতে 'উত্তম' ও 'উত্তমতর' দুই-ই বোঝায়; অ্যাপের অনুবাদে আছে 'আল্লাহই উত্তম সংরক্ষক', আর তুলনাটি করা হচ্ছে নির্দিষ্ট একটি জিনিসের সঙ্গে — ছেলেরা এখন দুবার যে নিশ্চয়তা দিয়েছে তার সঙ্গে। তারা বলেছিল তারা হবে 'হাফিযূন'; তিনি জবাব দেন তাদেরই শব্দ দিয়ে, আর সেই শব্দে আল্লাহকে তাদের সবার ওপরে রাখেন। তিনি তাদের প্রতিশ্রুতিকে মূল্যহীন বলেন না। তিনি বলেন, আসল নিরাপত্তাটি কোথায় জমা আছে।"
          },
          {
            "en": "The Quran uses that construction of itself. In 15:9 Allah says of the revelation He sent down: inna lahu la-hafizun, indeed We are its guardian — the identical phrase the brothers had used of a boy they then left in a well. Set the two side by side and the point needs no commentary. A human guarantee may or may not survive the night; the same words in Allah's speech are not a promise about the future but a description of what is already the case.",
            "bn": "কুরআন এই গঠনটি নিজের সম্পর্কেও ব্যবহার করে। 15:9 আয়াতে আল্লাহ তাঁর নাযিলকৃত ওহী সম্পর্কে বলেন: ইন্না লাহূ লাহাফিযূন — নিশ্চয় আমিই তার সংরক্ষক — হুবহু সেই বাক্যাংশ, যা ভাইয়েরা এমন এক বালক সম্পর্কে বলেছিল যাকে তারা এরপর কূপে ফেলে এসেছিল। দুটি পাশাপাশি রাখলে বক্তব্যটির আর কোনো ব্যাখ্যা লাগে না। মানুষের নিশ্চয়তা এমন এক প্রতিশ্রুতি যা রাতটুকুও টিকতে পারে, না-ও পারে; একই শব্দ আল্লাহর বাণীতে ভবিষ্যৎ সম্পর্কে প্রতিশ্রুতি নয়, বরং যা ইতিমধ্যেই সত্য তারই বর্ণনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Most Merciful of the Merciful",
          "bn": "দয়ালুদের মধ্যে শ্রেষ্ঠ দয়ালু"
        },
        "p": [
          {
            "en": "The verse ends wa huwa arhamu ar-rahimin, and He is the most merciful of the merciful. The superlative fits a father's exact situation: it places Allah above every merciful party in the arrangement, including the sons promising to be careful, and including Yaqub (AS), whose love for the boy cannot travel to Egypt with him. Later in this surah Yusuf (AS) uses the name in 12:92, telling his brothers there is no blame on them today.",
            "bn": "আয়াতটি শেষ হয় ওয়া হুয়া আরহামুর রাহিমীন দিয়ে — আর তিনিই দয়ালুদের মধ্যে শ্রেষ্ঠ দয়ালু। এই শ্রেষ্ঠত্ববাচক রূপটি বেছে নেওয়া হয়েছে ঠিক একজন পিতার অবস্থার জন্য: এটি আল্লাহকে এই বন্দোবস্তের প্রতিটি দয়ালু পক্ষের ঊর্ধ্বে বসায় — সাবধান থাকার প্রতিশ্রুতি দেওয়া ছেলেদের ঊর্ধ্বে, এমনকি স্বয়ং ইয়াকুব (আঃ)-এরও ঊর্ধ্বে, যাঁর সন্তানস্নেহ ছেলেটির সঙ্গে মিসর পর্যন্ত যেতে পারে না। এই সূরারই পরে ইউসুফ (আঃ) নামটি ব্যবহার করেন 12:92 আয়াতে, যখন তিনি ভাইদের বলেন আজ তোমাদের ওপর কোনো ভর্ৎসনা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Did Next",
          "bn": "এরপর তিনি যা করলেন"
        },
        "p": [
          {
            "en": "Reliance in this passage is not passivity, and the surah takes trouble to show it. In 12:66 he refuses to send the boy until they give a solemn oath by Allah to bring him back unless they are overwhelmed, and when they give it he says: Allah, over what we say, is entrusted. In 12:67 he adds a second precaution, that they enter by separate gates rather than one, and then undercuts it himself: I cannot avail you against Allah at all.",
            "bn": "এই অংশে ভরসা মানে নিষ্ক্রিয়তা নয়, আর সূরাটি তা দেখাতে যত্ন নেয়। 12:66 আয়াতে তিনি ছেলেটিকে পাঠাতে অস্বীকার করেন যতক্ষণ না তারা আল্লাহর নামে দৃঢ় অঙ্গীকার দেয় যে তাকে ফিরিয়ে আনবে, যদি না তারা একযোগে ঘেরাও হয়ে যায়; আর তারা অঙ্গীকার দিলে তিনি বলেন: আমরা যা বলছি আল্লাহই তার সাক্ষী ও অভিভাবক। 12:67 আয়াতে তিনি দ্বিতীয় সতর্কতা যোগ করেন — এক দরজা দিয়ে নয়, ভিন্ন ভিন্ন দরজা দিয়ে প্রবেশ করবে — আর তারপর নিজেই তা খাটো করে দেন: আল্লাহর বিরুদ্ধে আমি তোমাদের কোনোই কাজে আসতে পারি না।"
          },
          {
            "en": "12:68 delivers the Quran's own verdict on the manoeuvre. When they entered as their father had ordered, it did not avail them against Allah at all, except as a need in Yaqub's soul which he satisfied; and indeed he was a possessor of knowledge because of what We taught him. The precaution is called what it was, and in the same breath the man who took it is called knowledgeable. Taking measures and depending on them are two different acts.",
            "bn": "12:68 আয়াত এই কৌশলটি সম্পর্কে স্বয়ং কুরআনের রায় দেয়। তারা যখন পিতার নির্দেশ অনুযায়ী প্রবেশ করল, তা আল্লাহর বিরুদ্ধে তাদের কোনোই কাজে এল না; কেবল ইয়াকুবের মনের একটি অভিপ্রায় ছিল, তিনি তা পূর্ণ করলেন — আর আমার শেখানো জ্ঞানের কারণে তিনি অবশ্যই জ্ঞানের অধিকারী ছিলেন। সতর্কতাটিকে তার প্রকৃত নামেই ডাকা হলো, একটি মনের চাহিদা যা তিনি মিটিয়েছেন; আর একই নিঃশ্বাসে যিনি তা নিয়েছেন তাঁকে বলা হলো জ্ঞানী। ব্যবস্থা নেওয়া আর ব্যবস্থার ওপর নির্ভর করা — দুটিকে দুই আলাদা কাজ হিসেবে নাম দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Trusting After Being Failed",
          "bn": "ঠকে যাওয়ার পর ভরসা করা"
        },
        "p": [
          {
            "en": "This is the verse's answer to the harder question, which is how anybody trusts again after being failed by the same people. Yaqub (AS) does not rebuild his confidence in his sons, and nothing in the text suggests that he tries. He moves the weight instead. The oath is taken, the gates are assigned, the boy goes; and the guarantee that the outcome actually rests on has been transferred to the only party in the arrangement who has never once defaulted.",
            "bn": "এটিই কঠিন প্রশ্নটির উত্তর — একই মানুষদের হাতে ঠকে যাওয়ার পর কেউ আবার ভরসা করে কীভাবে। ইয়াকুব (আঃ) ছেলেদের ওপর নিজের আস্থা নতুন করে গড়েন না, আর পাঠে এমন কিছু নেই যা বলে তিনি সে চেষ্টা করেছেন। বরং তিনি ভারটি সরিয়ে দেন। অঙ্গীকার নেওয়া হয়, দরজা ভাগ করে দেওয়া হয়, ছেলেটি রওনা হয় — আর ফলাফল আসলে যার ওপর দাঁড়িয়ে, সেই নিশ্চয়তাটি হস্তান্তরিত হয়ে যায় এই বন্দোবস্তের একমাত্র সেই পক্ষের কাছে, যিনি কখনো একবারও কথা রাখতে ব্যর্থ হননি।"
          },
          {
            "en": "Lived, that is a narrow and usable discipline. Betrayal tends to produce one of two settlements: refuse everyone, or pretend the wound is closed and hand over the next thing on the old terms. The verse takes neither. It keeps the eyes open, the safeguards in place and the sentence about Allah said out loud, because a man who has not said it will quietly turn his precautions into his security, and 12:68 reports how that ends.",
            "bn": "জীবনে প্রয়োগ করলে এটি একটি সংকীর্ণ কিন্তু কাজে লাগার মতো সাধনা। বিশ্বাসভঙ্গ সাধারণত দুটি মীমাংসার কোনো একটি তৈরি করে: সবাইকে অস্বীকার করা, কিংবা ক্ষত শুকিয়ে গেছে ভান করে পরের জিনিসটিও আগের শর্তেই তুলে দেওয়া। আয়াতটি কোনোটিই নেয় না। এটি চোখ খোলা রাখে, সুরক্ষাগুলো বহাল রাখে, আর আল্লাহ সম্পর্কে বাক্যটি মুখে উচ্চারণ করায় — কারণ যে মানুষ তা বলেনি, সে নীরবে নিজের সতর্কতাগুলোকেই নিজের নিরাপত্তা বানিয়ে ফেলবে; আর তার পরিণতি 12:68 আয়াত আগেই জানিয়ে দিয়েছে।"
          }
        ]
      }
    ]
  },
  "12:86-87": {
    "sections": [
      {
        "h": {
          "en": "Grief Upon Grief",
          "bn": "শোকের ওপর শোক"
        },
        "p": [
          {
            "en": "By this point in Surah Yusuf, Yaqub (AS) has lost twice. Yusuf (AS) was taken from him years earlier by his brothers' scheme, and now Binyamin has been detained in Egypt, with a third son remaining behind out of shame. When the old man turns away and mourns Yusuf afresh, his sons rebuke him in 12:85 — by Allah, you will not cease remembering Yusuf until you waste away or perish. His answer, in 12:86, is the sentence this article is about.",
            "bn": "সূরা ইউসুফের এই পর্যায়ে ইয়াকুব (আঃ) দুবার হারিয়েছেন। ইউসুফ (আঃ)-কে বহু বছর আগে তাঁর ভাইদের চক্রান্তে তাঁর কাছ থেকে নিয়ে যাওয়া হয়েছে, আর এখন বিনয়ামীন মিসরে আটক, লজ্জায় আরেক ছেলে সেখানেই রয়ে গেছে। বৃদ্ধ পিতা যখন মুখ ফিরিয়ে ইউসুফের জন্য নতুন করে শোক করেন, তাঁর ছেলেরা 12:85 আয়াতে তাঁকে ভর্ৎসনা করে: আল্লাহর কসম, আপনি ইউসুফকে স্মরণ করা থামাবেন না, যতক্ষণ না ক্ষয়ে যান কিংবা মরে যান। তাঁর উত্তর, 12:86 আয়াতে — সেই বাক্যটিই এই লেখার বিষয়।"
          },
          {
            "en": "I complain of my anguish and my grief only to Allah, and I know from Allah what you do not know. The reply does not deny the grief, does not perform composure for the audience, and does not apologize for decades of sorrow. It states where the sorrow is being delivered. His sons see a man talking to himself about a lost boy; he corrects the address: this conversation has never been with you.",
            "bn": "আমি আমার দুঃসহ বেদনা ও আমার শোকের অভিযোগ কেবল আল্লাহর কাছেই করি, আর আমি আল্লাহর পক্ষ থেকে এমন কিছু জানি যা তোমরা জানো না। উত্তরটি শোককে অস্বীকার করে না, দর্শকদের সামনে ধৈর্যের অভিনয়ও করে না, দশকের পর দশকের দুঃখের জন্য ক্ষমাও চায় না। এটি জানিয়ে দেয় দুঃখটি কোথায় পৌঁছে দেওয়া হচ্ছে। ছেলেরা দেখছে এক বৃদ্ধ হারানো ছেলের কথা আপনমনে বলছেন; তিনি ঠিকানাটি শুধরে দেন: এই কথোপকথন কখনোই তোমাদের সঙ্গে ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Bathth: What Cannot Be Held In",
          "bn": "বাসস: যা চেপে রাখা যায় না"
        },
        "p": [
          {
            "en": "The verse uses two words for sorrow. Huzn is grief in general. Bathth, the word placed first, is explained by the commentators, Qurtubi and Ibn Kathir among them, as anguish so severe that its carrier cannot keep it contained — it spreads and shows. That is a precise self-diagnosis. Yaqub (AS) is saying: the sorrow you can see on me is the kind that cannot be hidden, and even that overflow I am directing to Allah, not to men.",
            "bn": "আয়াতটি দুঃখের জন্য দুটি শব্দ ব্যবহার করে। 'হুযন' সাধারণ অর্থে শোক। আর প্রথমে বসানো শব্দ 'বাসস'-এর ব্যাখ্যায় মুফাসসিরগণ — কুরতুবী ও ইবনে কাসীর তাঁদের অন্যতম — বলেন: এমন তীব্র বেদনা যা তার বাহক চেপে রাখতে পারে না — তা ছড়িয়ে পড়ে, দেখা দিয়ে ফেলে। এ এক নিখুঁত আত্মনির্ণয়। ইয়াকুব (আঃ) বলছেন: আমার ওপর যে দুঃখ তোমরা দেখছ তা সেই জাতের, যা লুকানো যায় না; আর সেই উপচে পড়াটুকুও আমি পাঠাচ্ছি আল্লাহর দিকে, মানুষের দিকে নয়।"
          },
          {
            "en": "This resolves a question believers quietly carry: whether weeping and hurting break patience. Earlier in the surah, at 12:18, Yaqub (AS) had named his course sabrun jamil, a beautiful patience. The commentators explain beautiful patience as patience without complaint to creation. Complaint to the Creator is another matter entirely — it is worship. The eyes may weep and the heart may ache; patience is breached by the address on the complaint, not by the tears.",
            "bn": "এটি সেই প্রশ্নের মীমাংসা করে, যা মুমিনরা চুপচাপ বয়ে বেড়ায়: কান্না ও কষ্ট পাওয়া কি ধৈর্য ভেঙে দেয়? সূরার আগের দিকে, 12:18 আয়াতে, ইয়াকুব (আঃ) নিজের পথের নাম দিয়েছিলেন 'সাবরুন জামীল' — সুন্দর ধৈর্য। মুফাসসিরগণ সুন্দর ধৈর্যের ব্যাখ্যা করেন: সৃষ্টির কাছে অভিযোগহীন ধৈর্য। আর স্রষ্টার কাছে অভিযোগ সম্পূর্ণ ভিন্ন জিনিস — তা ইবাদত। চোখ কাঁদতে পারে, হৃদয় ব্যথায় টনটন করতে পারে; ধৈর্য ভাঙে অভিযোগের ঠিকানায়, অশ্রুতে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowing From Allah",
          "bn": "আল্লাহর পক্ষ থেকে জানা"
        },
        "p": [
          {
            "en": "I know from Allah what you do not know. Ibn Kathir relates that Yaqub (AS) held to the hope that the dream Yusuf (AS) had reported at the beginning of the story, in 12:4 — eleven stars and the sun and the moon prostrating to him — was true and had yet to be fulfilled. His hope was not temperament. It was inference from something Allah had shown, held onto across decades in which every visible fact argued against it.",
            "bn": "আমি আল্লাহর পক্ষ থেকে এমন কিছু জানি যা তোমরা জানো না। ইবনে কাসীর বর্ণনা করেন, ইয়াকুব (আঃ) এই আশা আঁকড়ে ছিলেন যে গল্পের শুরুতে, 12:4 আয়াতে, ইউসুফ (আঃ) যে স্বপ্নের কথা জানিয়েছিলেন — এগারোটি নক্ষত্র এবং সূর্য ও চাঁদ তাঁকে সিজদা করছে — তা সত্য এবং তা পূর্ণ হওয়া তখনো বাকি। তাঁর আশা কোনো মেজাজের ব্যাপার ছিল না। তা ছিল আল্লাহর দেখানো কোনো কিছু থেকে টানা সিদ্ধান্ত — দশকের পর দশক ধরে ধরে রাখা, যখন চোখে দেখা প্রতিটি তথ্য তার বিপক্ষে সাক্ষ্য দিচ্ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Go and Search; Do Not Despair",
          "bn": "যাও, খোঁজো; নিরাশ হয়ো না"
        },
        "p": [
          {
            "en": "Then 12:87 turns the grief into instructions: O my sons, go and inquire about Yusuf and his brother, and do not despair of the rawh of Allah; none despairs of the rawh of Allah except the disbelieving people. Rawh carries the sense of relief, a breath of ease after constriction. The man his sons feared would waste away is the one issuing search orders. Hope anchored in Allah does not sit by the window; it dispatches people to Egypt.",
            "bn": "এরপর 12:87 শোককে নির্দেশে বদলে দেয়: হে আমার ছেলেরা, যাও, ইউসুফ ও তার ভাইয়ের খোঁজ নাও, আর আল্লাহর 'রাওহ' থেকে নিরাশ হয়ো না; কাফির সম্প্রদায় ছাড়া কেউ আল্লাহর রাওহ থেকে নিরাশ হয় না। 'রাওহ' শব্দে আছে স্বস্তির অর্থ — সংকীর্ণতার পরে এক দমকা মুক্ত বাতাস। যে মানুষটির ক্ষয়ে যাওয়ার আশঙ্কা করছিল তাঁর ছেলেরা, তিনিই এখন তল্লাশির নির্দেশ দিচ্ছেন। আল্লাহতে নোঙর করা আশা জানালার পাশে বসে থাকে না; সে মানুষ পাঠায় মিসরে।"
          },
          {
            "en": "The closing clause grades despair with startling severity: it is the mark of the disbelieving people. The same judgement appears in 15:56, where Ibrahim (AS) asks who despairs of the mercy of his Lord except those astray. The logic is doctrinal, not rhetorical. Despair is a claim about Allah — that His power has met its limit or His mercy its end — and both claims contradict what a believer knows of Him. Sadness is human; hopelessness is a creed error.",
            "bn": "শেষ বাক্যাংশটি নৈরাশ্যকে চমকে দেওয়া কঠোরতায় শ্রেণিবদ্ধ করে: তা কাফির সম্প্রদায়ের চিহ্ন। একই রায় 15:56 আয়াতেও আছে, যেখানে ইবরাহীম (আঃ) প্রশ্ন করেন: পথভ্রষ্টরা ছাড়া কে তার রবের রহমত থেকে নিরাশ হয়? যুক্তিটি আকীদাগত, অলংকার নয়। নৈরাশ্য আসলে আল্লাহ সম্পর্কে একটি দাবি — তাঁর ক্ষমতা তার সীমায় পৌঁছে গেছে, নয়তো তাঁর রহমত ফুরিয়ে গেছে — আর দুটি দাবিই মুমিন তাঁর সম্পর্কে যা জানে তার বিরোধী। দুঃখ মানবীয়; আশাহীনতা আকীদার ভুল।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying Sorrow Correctly",
          "bn": "শোক সঠিকভাবে বহন করা"
        },
        "p": [
          {
            "en": "The note behind this article draws the lesson in one line: grief and hope can live in the same heart when both are anchored in God. The anchoring is practical. When sorrow rises, the first draft of it can be given to Allah in private complaint before any of it is posted, vented or performed — Yaqub's (AS) order of address, restored. What people then see is the residue, the bathth that cannot be hidden, and that residue carries no bitterness toward anyone.",
            "bn": "এই লেখার পেছনের নোটটি শিক্ষাটি এক লাইনে টেনে দেয়: শোক ও আশা একই হৃদয়ে বাস করতে পারে, যখন দুটিই আল্লাহতে নোঙর করা থাকে। এই নোঙর করা একেবারে ব্যবহারিক। দুঃখ যখন জেগে ওঠে, তার প্রথম খসড়াটি নির্জন অভিযোগে আল্লাহকে দেওয়া যায় — কোথাও প্রকাশ, উগরে দেওয়া বা প্রদর্শনের আগে; ইয়াকুব (আঃ)-এর ঠিকানার ক্রমটিই পুনঃস্থাপিত। মানুষ এরপর যা দেখে তা কেবল অবশেষ — সেই 'বাসস' যা লুকানো যায় না — আর সেই অবশেষে কারও প্রতি কোনো তিক্ততা থাকে না।"
          },
          {
            "en": "The other half is Yaqub's (AS) verb: go and inquire. Whatever loss is being mourned — a person, a health, a livelihood — hope in Allah takes the form of the next concrete step, taken while the outcome is still invisible. The surah rewards his method on both counts: the searchers he dispatched while grieving are the very caravan that returns with Yusuf's (AS) shirt, and the eyes that had whitened with sorrow see again.",
            "bn": "অন্য অর্ধেকটি ইয়াকুব (আঃ)-এর ক্রিয়াপদ: যাও, খোঁজ নাও। যে ক্ষতির জন্যই শোক হোক — একজন মানুষ, স্বাস্থ্য, জীবিকা — আল্লাহতে আশা রূপ নেয় পরবর্তী বাস্তব পদক্ষেপে, যা নেওয়া হয় ফলাফল তখনো অদৃশ্য থাকা অবস্থায়। সূরাটি তাঁর পদ্ধতিকে দুই দিক থেকেই পুরস্কৃত করে: শোকের মধ্যেই তিনি যে সন্ধানীদের পাঠিয়েছিলেন, সেই কাফেলাই ফিরে আসে ইউসুফ (আঃ)-এর জামা নিয়ে, আর শোকে সাদা হয়ে যাওয়া চোখ দুটি আবার দেখতে পায়।"
          }
        ]
      }
    ]
  },
  "12:101": {
    "sections": [
      {
        "h": {
          "en": "Spoken From the Throne",
          "bn": "সিংহাসন থেকে বলা কথা"
        },
        "p": [
          {
            "en": "The verse before this one shows the scene. In 12:100 Yusuf (AS) raises his parents to the throne, his family falls down before him, and he tells his father that this is the fulfilment of the dream. In the same breath he lists what Allah did: brought him out of the prison, and brought them from the desert life after Shaytan had induced estrangement between him and his brothers.",
            "bn": "ঠিক আগের আয়াতটি দৃশ্যটি দেখিয়ে দেয়। 12:100-এ ইউসুফ (আঃ) তাঁর পিতামাতাকে সিংহাসনে তুলে বসান, তাঁর পরিবার তাঁর সামনে নত হয়, আর তিনি পিতাকে বলেন, এটিই সেই স্বপ্নের বাস্তবায়ন। একই নিঃশ্বাসে তিনি তালিকা করেন আল্লাহ কী করেছেন: তাঁকে কারাগার থেকে বের করে এনেছেন, আর শয়তান তাঁর ও তাঁর ভাইদের মধ্যে বিচ্ছেদ ঘটানোর পরও তাঁদের মরুজীবন থেকে এখানে নিয়ে এসেছেন।"
          },
          {
            "en": "That is the moment 12:101 interrupts. Everything a person could want has just arrived at once: authority, vindication, reunion, an old grief resolved in public. And at exactly this point the speaker turns away from the room he is sitting in and addresses his Lord. Nothing forced the prayer; the circumstances were the opposite of desperate.",
            "bn": "ঠিক এই মুহূর্তেই 12:101 এসে ছেদ টানে। একজন মানুষ যা যা চাইতে পারে, সবই একসঙ্গে এসে গেছে: কর্তৃত্ব, নির্দোষিতার স্বীকৃতি, পুনর্মিলন, আর বহু পুরোনো এক শোকের প্রকাশ্য মীমাংসা। আর ঠিক এই বিন্দুতেই বক্তা যে কক্ষে বসে আছেন সেখান থেকে মুখ ফিরিয়ে তাঁর প্রতিপালককে সম্বোধন করেন। কোনো কিছুই দোয়াটিকে বাধ্য করেনি; পরিস্থিতি ছিল মরিয়া অবস্থার ঠিক উল্টো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ledger Before the Request",
          "bn": "চাওয়ার আগে হিসাব"
        },
        "p": [
          {
            "en": "He opens with two acknowledgements rather than a petition: qad ataytani min al-mulk, You have given me of sovereignty, and 'allamtani min ta'wil al-ahadith, and taught me of the interpretation of accounts. The partitive min sits in both. A man governing Egypt says he was given some of kingship, and a man famous for reading dreams says he was taught some of that reading.",
            "bn": "তিনি শুরু করেন কোনো আবেদন দিয়ে নয়, দুটি স্বীকৃতি দিয়ে: কাদ আতাইতানী মিনাল মুলক — তুমি আমাকে রাজত্বের কিছু দান করেছ; আর আল্লামতানী মিন তা'ঊলিল আহাদীস — আর আমাকে বৃত্তান্তের ব্যাখ্যার কিছু শিখিয়েছ। অংশবাচক 'মিন' দুটিতেই বসে আছে। মিসর শাসন করা একজন মানুষ বলছেন তাঁকে রাজত্বের কিছুটা দেওয়া হয়েছে, আর স্বপ্নের ব্যাখ্যায় খ্যাত একজন বলছেন তাঁকে সেই ব্যাখ্যার কিছুটা শেখানো হয়েছে।"
          },
          {
            "en": "The surah had already recorded where these came from. 12:22 says that when he reached maturity, We gave him judgement and knowledge, and thus do We reward those who do good. So by the time he speaks in 12:101 the credit has been assigned twice, once by the narrative and once by the man himself. Neither the dungeon nor the palace changed his account of the source.",
            "bn": "সূরাটি আগেই লিখে রেখেছিল এগুলো কোথা থেকে এসেছে। 12:22 বলে, যখন সে পূর্ণ যৌবনে পৌঁছল, আমি তাকে বিচারবুদ্ধি ও জ্ঞান দান করলাম; আর এভাবেই আমি সৎকর্মশীলদের প্রতিদান দিই। কাজেই 12:101-এ তিনি যখন কথা বলছেন, ততক্ষণে কৃতিত্ব দুইবার নির্ধারিত হয়ে গেছে — একবার বর্ণনায়, একবার তাঁর নিজের মুখে। কারাগার কিংবা প্রাসাদ, কোনোটিই উৎস সম্পর্কে তাঁর বক্তব্য বদলায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Originator of the Heavens and the Earth",
          "bn": "আসমান ও যমীনের স্রষ্টা"
        },
        "p": [
          {
            "en": "Between the acknowledgements and the requests he inserts a name: Fatir as-samawati wal-ard, Originator of the heavens and the earth. The root carries the sense of splitting something open to bring it into being. Sitting on the highest seat in Egypt, he addresses Allah by the title that dwarfs every throne, and the effect is to put the whole scene into proportion.",
            "bn": "স্বীকৃতি ও আবেদনের মাঝখানে তিনি একটি নাম বসিয়ে দেন: ফাতিরাস সামাওয়াতি ওয়াল আরদ — আসমানসমূহ ও যমীনের স্রষ্টা। শব্দমূলটি এমন অর্থ বহন করে যেখানে কিছু ফেটে খুলে অস্তিত্বে আসে। মিসরের সর্বোচ্চ আসনে বসে তিনি আল্লাহকে ডাকছেন সেই উপাধিতে, যার পাশে প্রতিটি সিংহাসনই ক্ষুদ্র — আর তাতেই গোটা দৃশ্যটি তার আসল মাপে এসে দাঁড়ায়।"
          },
          {
            "en": "Then anta waliyyi fid-dunya wal-akhirah, You are my protector in this world and the Hereafter. A wali is a guardian who takes charge of someone's affairs. The man in the room with the most power over other people's affairs states that his own are in someone else's hands, and that this was true in the pit of his fortunes and is still true at the top of them.",
            "bn": "এরপর আনতা ওয়ালিয়্যী ফিদ-দুনইয়া ওয়াল-আখিরাহ — তুমিই দুনিয়া ও আখিরাতে আমার অভিভাবক। ওয়ালী হলেন সেই অভিভাবক, যিনি কারও বিষয়াদির দায়িত্ব নেন। কক্ষের ভেতরে অন্য মানুষের বিষয়াদির ওপর যাঁর ক্ষমতা সবচেয়ে বেশি, তিনিই ঘোষণা করছেন যে তাঁর নিজের বিষয়াদি অন্য কারও হাতে — আর তা তাঁর ভাগ্যের সবচেয়ে নিচু বিন্দুতেও সত্য ছিল, শীর্ষেও সত্য আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Cause Me to Die a Muslim",
          "bn": "মুসলিম অবস্থায় মৃত্যু দাও"
        },
        "p": [
          {
            "en": "Tawaffani musliman. The verb tawaffa means to take something in full, to collect what is due, and the Quran uses it of death because death is a receiving rather than a destruction. This imperative form, addressed by one speaker for himself, occurs in this verse and nowhere else in the Quran. The plural version is put in other mouths.",
            "bn": "তাওয়াফফানী মুসলিমান। 'তাওয়াফফা' ক্রিয়ার অর্থ কোনো কিছু পুরোপুরি নিয়ে নেওয়া, প্রাপ্য আদায় করে নেওয়া; কুরআন মৃত্যুর জন্য এই শব্দ ব্যবহার করে, কারণ মৃত্যু ধ্বংস নয়, বরং গ্রহণ। একজন বক্তা নিজের জন্য এই আদেশবাচক রূপটি ব্যবহার করেছেন — কুরআনে তা এই আয়াতেই আছে, আর কোথাও নেই। বহুবচন রূপটি বসানো হয়েছে অন্যদের মুখে।"
          },
          {
            "en": "In 3:193 those who heard a caller to faith say: forgive us, and cause us to die with the righteous. In 7:126 the magicians of Fir'awn, under threat of execution, say: pour patience upon us and cause us to die as Muslims. As-Sa'di holds that Yusuf (AS) was not asking for death soon, but for the state in which death should find him. Ibn Kathir allows that he may have said it as he was dying.",
            "bn": "3:193-এ যাঁরা ঈমানের দিকে আহ্বানকারীর ডাক শুনেছিলেন তাঁরা বলেন: আমাদের ক্ষমা করো, আর নেককারদের সঙ্গে আমাদের মৃত্যু দাও। 7:126-এ ফিরআউনের জাদুকরেরা মৃত্যুদণ্ডের হুমকির মুখে বলেন: আমাদের ওপর ধৈর্য ঢেলে দাও, আর মুসলিম অবস্থায় আমাদের মৃত্যু দাও। আস-সা'দী মনে করেন, ইউসুফ (আঃ) শীঘ্র মৃত্যু চাননি, চেয়েছেন মৃত্যু যেন তাঁকে কোন অবস্থায় পায় সেটি। ইবনে কাসীর এই সম্ভাবনাও রাখেন যে তিনি মৃত্যুশয্যায় কথাটি বলেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Join Me With the Righteous",
          "bn": "সৎকর্মশীলদের সঙ্গে মিলিয়ে দাও"
        },
        "p": [
          {
            "en": "The final clause, wa alhiqni bis-salihin, is the same clause Ibrahim (AS) uses in 26:83; the two verses are the only places it appears. Here its force comes from what precedes it. Dying as a Muslim is the condition; being joined to the righteous is what the condition opens onto. Yusuf (AS) asks about the doorway and then about the room.",
            "bn": "শেষ বাক্যাংশ ওয়া আলহিকনী বিস-সালিহীন সেই একই বাক্যাংশ, যা ইবরাহীম (আঃ) 26:83-এ ব্যবহার করেন; কুরআনে কেবল এই দুটি আয়াতেই এটি আছে। এখানে এর জোর আসে এর আগের কথাটি থেকে। মুসলিম অবস্থায় মৃত্যু হলো শর্ত; সৎকর্মশীলদের সঙ্গে যুক্ত হওয়া হলো সেই শর্তটি যেদিকে খুলে দেয়। ইউসুফ (আঃ) আগে দরজাটি নিয়ে চান, তারপর ঘরটি নিয়ে।"
          },
          {
            "en": "Ibn Kathir reads the joining as being placed with the prophets and messengers, and sets beside it a report from the last hours of the Prophet ﷺ. Al-Bukhari and Muslim record from Aishah (RA) that as he was dying he raised his finger and said, three times, O Allah, with the highest companion. The last thing asked for, in both cases, is company.",
            "bn": "ইবনে কাসীর এই মিলিত হওয়াকে পড়েন নবী ও রাসূলগণের সঙ্গে স্থান পাওয়া হিসেবে, আর তার পাশে রাখেন নবী ﷺ-এর শেষ সময়ের একটি বর্ণনা। বুখারী ও মুসলিম আয়িশা (রাঃ) থেকে বর্ণনা করেন যে মৃত্যুর সময় তিনি তাঁর আঙুল তুলে তিনবার বলেছিলেন, হে আল্লাহ, সর্বোচ্চ সঙ্গীর সঙ্গে। দুই ক্ষেত্রেই শেষ চাওয়াটি হলো সঙ্গ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Last Words of the Story",
          "bn": "কাহিনির শেষ কথা"
        },
        "p": [
          {
            "en": "This prayer is the last thing Yusuf (AS) says in the surah. 12:102 turns away from him entirely and addresses the Prophet ﷺ: that is from the news of the unseen which We reveal to you, and you were not with them when they put together their plan. The story of a life closes on a request about its ending, and then the frame closes over it.",
            "bn": "এই দোয়াটিই সূরায় ইউসুফ (আঃ)-এর শেষ উক্তি। 12:102 তাঁর থেকে পুরোপুরি মুখ ফিরিয়ে নবী ﷺ-কে সম্বোধন করে: এটি অদৃশ্য জগতের সংবাদ, যা আমি তোমার প্রতি ওহী করছি; আর তারা যখন তাদের পরিকল্পনা পাকা করছিল তখন তুমি তাদের সঙ্গে ছিলে না। একটি জীবনের গল্প শেষ হয় তার পরিণতি নিয়ে একটি আবেদনে, আর তারপর তার ওপর ফ্রেমটি বন্ধ হয়ে যায়।"
          },
          {
            "en": "The practical shape is unusual because it belongs to good days rather than hard ones. When something you wanted finally arrives, itemise it out loud and say where it came from; then ask for the one part of the story that success cannot secure. Position, knowledge and a restored family were all already in hand, and none of them settles how a person leaves.",
            "bn": "এর ব্যবহারিক রূপটি অস্বাভাবিক, কারণ এটি কঠিন দিনের নয়, ভালো দিনের সম্পদ। আপনি যা চেয়েছিলেন তা যখন অবশেষে এসে যায়, তখন তা উচ্চারণ করে গুনে বলুন আর বলুন কোথা থেকে এলো; তারপর গল্পের সেই অংশটি চান, যা সাফল্য নিশ্চিত করতে পারে না। পদ, জ্ঞান আর ফিরে পাওয়া পরিবার — সবই তখন হাতে ছিল, অথচ এর কোনোটিই ঠিক করে দেয় না একজন মানুষ কীভাবে বিদায় নেবে।"
          }
        ]
      }
    ]
  }
});
