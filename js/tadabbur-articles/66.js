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
  "66:6": {
    "sections": [
      {
        "h": {
          "en": "Guard Yourselves and Your Families",
          "bn": "নিজেদের ও পরিবারকে রক্ষা করো"
        },
        "p": [
          {
            "en": "O you who believe, guard yourselves and your families from a Fire whose fuel is people and stones. The command is qu — from the same root as wiqayah and taqwa, the act of putting a shield between yourself and what harms you. Taqwa is usually described as a private matter between a servant and Allah; this verse makes it a household matter as well. The believer's protective duty is given two named objects, and the first of them is his own soul.",
            "bn": "হে ঈমানদারগণ, তোমরা নিজেদের ও তোমাদের পরিবার-পরিজনকে সেই আগুন থেকে রক্ষা করো, যার জ্বালানি মানুষ ও পাথর। এখানে আদেশের শব্দটি হলো 'কূ'। বিকায়া ও তাকওয়াও এসেছে এই একই ধাতু থেকে, যার মানে নিজের আর ক্ষতিকর জিনিসের মাঝখানে একটা ঢাল দাঁড় করানো। তাকওয়াকে সাধারণত বান্দা আর আল্লাহর মধ্যকার একান্ত ব্যাপার বলেই ধরা হয়। এই আয়াত একে ঘর-সংসারেরও ব্যাপার বানিয়ে দেয়। মুমিনকে এখানে নাম ধরে দুটো জিনিস রক্ষা করতে বলা হয়েছে, আর প্রথমটি তার নিজের নফস।"
          },
          {
            "en": "The order matters. Anfusakum comes before ahlikum, because no one can shield a family from a fire he is himself walking toward. The verse then describes what is being shielded against with deliberate severity: a Fire fed by people and by stones, attended by angels stern and severe who do not disobey Allah in what He commands them, but do whatever they are commanded. The stakes are stated first so that the daily work commanded here is never mistaken for a lifestyle preference.",
            "bn": "ক্রমটা গুরুত্বপূর্ণ। আনফুসাকুম আগে, আহলীকুম পরে। কারণ যে নিজেই আগুনের দিকে হেঁটে যাচ্ছে, সে পরিবারকে সেই আগুন থেকে আড়াল করবে কীভাবে? এরপর আয়াতটি জেনেবুঝেই কঠোর ভাষায় বলে দেয়, কিসের থেকে এই রক্ষা: এমন আগুন, যার খোরাক মানুষ আর পাথর; যার পাহারায় আছেন রূঢ়, কঠোর ফেরেশতারা। আল্লাহ তাঁদের যা আদেশ করেন, তাঁরা তা অমান্য করেন না; যা আদেশ পান, তা-ই করেন। বিপদ কত বড়, তা আগেই বলে দেওয়া হয়েছে, যাতে এখানকার প্রতিদিনের দায়িত্বটাকে কেউ রুচি-পছন্দের ব্যাপার ভেবে না বসে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Companions Read It",
          "bn": "সাহাবীরা যেভাবে বুঝেছেন"
        },
        "p": [
          {
            "en": "Al-Tabari relates from Ali (RA) that guarding the family here means: teach them and discipline them. Other early authorities he records give the same sense — command them with what Allah has commanded, and forbid them what He has forbidden. The verse is thus read as a teaching duty, not a controlling one: the shield it orders is built out of knowledge, habit and example, and it has to be built before the day on which it is needed.",
            "bn": "আত-তাবারী আলী (রাঃ) থেকে বর্ণনা করেছেন: এখানে পরিবারকে রক্ষা করার মানে, তাদের শিক্ষা দাও, আদব শেখাও। প্রথম যুগের আরও যাঁদের কথা তিনি উদ্ধৃত করেছেন, তাঁদের কথাও একই: আল্লাহ যা আদেশ করেছেন, তাদের তা করতে বলো; আর তিনি যা নিষেধ করেছেন, তা থেকে তাদের বিরত রাখো। তাই আয়াতটিকে বোঝা হয় শেখানোর দায়িত্ব হিসেবে, কড়া নিয়ন্ত্রণের দায়িত্ব হিসেবে নয়। এখানে যে ঢালের কথা, তা গড়ে ওঠে জ্ঞান, অভ্যাস আর নিজের দৃষ্টান্ত দিয়ে। আর যেদিন এর দরকার পড়বে, তার আগেই তা গড়ে তুলতে হয়।"
          },
          {
            "en": "The Prophet ﷺ set the frame for this responsibility. Al-Bukhari narrates from Ibn Umar (RA): every one of you is a shepherd, and every one of you is answerable for his flock — the ruler over his people, the man over his household, the woman over her husband's house. Guardianship in Islam is distributed, layer by layer; this verse addresses the layer of it that eats at one table and sleeps under one roof.",
            "bn": "নবী ﷺ এই দায়িত্বের কাঠামো ঠিক করে দিয়েছেন। আল-বুখারী ইবনে উমর (রাঃ) থেকে বর্ণনা করেছেন: তোমরা প্রত্যেকেই রাখাল, আর প্রত্যেককেই তার পাল সম্পর্কে জবাবদিহি করতে হবে। শাসক তার প্রজাদের ব্যাপারে, পুরুষ তার পরিবারের ব্যাপারে, নারী তার স্বামীর ঘরের ব্যাপারে। ইসলামে অভিভাবকত্ব এভাবে স্তরে স্তরে ভাগ করা। এই আয়াত কথা বলছে সেই স্তরের সঙ্গে, যারা এক দস্তরখানে খায়, এক ছাদের নিচে ঘুমায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer as the Spine",
          "bn": "নামাজই মেরুদণ্ড"
        },
        "p": [
          {
            "en": "Whenever the Quran shows this duty in action, prayer stands at its centre. In 20:132 the Prophet ﷺ is told: command your family with prayer, and yourself be constant in it. Isma'il (AS) is praised in 19:55 because he used to command his family with prayer and zakah, and his Lord was pleased with him. And Abu Dawud narrates that the Prophet ﷺ instructed parents to command their children to pray at seven years old and to discipline them over it at ten.",
            "bn": "কুরআন যখনই এই দায়িত্বকে কাজের মধ্যে দেখায়, তার কেন্দ্রে থাকে নামাজ। ২০:১৩২ আয়াতে নবী ﷺ-কে বলা হয়েছে: তোমার পরিবারকে নামাজের আদেশ দাও, আর নিজেও তাতে অবিচল থাকো। ১৯:৫৫ আয়াতে ইসমাঈল (আঃ)-এর প্রশংসা করা হয়েছে, কারণ তিনি তাঁর পরিবারকে নামাজ ও যাকাতের আদেশ দিতেন, আর তাঁর রব তাঁর প্রতি সন্তুষ্ট ছিলেন। আবু দাউদ বর্ণনা করেছেন, নবী ﷺ মা-বাবাদের বলেছেন সন্তানদের সাত বছর বয়সে নামাজের আদেশ দিতে, আর দশ বছর বয়সে নামাজের ব্যাপারে শাসন করতে।"
          },
          {
            "en": "The pairing inside 20:132 repays attention: command your family, and yourself persevere. A household learns prayer from watching it loved, not from hearing it demanded. The parent who rises for fajr is teaching fajr; the parent who only orders it teaches, without meaning to, that prayer is a burden adults escape. The verse's own sequence — yourselves, then your families — is visible in almost every home where religion either took root across a generation or quietly withered.",
            "bn": "২০:১৩২ আয়াতের জোড়াটি খেয়াল করার মতো: পরিবারকে আদেশ দাও, আর নিজে লেগে থাকো। পরিবার নামাজ শেখে নামাজকে ভালোবাসতে দেখে, নামাজের হুকুম শুনে নয়। যে মা-বাবা নিজে ফজরে ওঠেন, তাঁরা ফজর শেখাচ্ছেন। আর যাঁরা শুধু হুকুম দেন, তাঁরা না চাইতেই শিখিয়ে দেন যে নামাজ এমন এক বোঝা, বড় হলে যা থেকে রেহাই মেলে। আয়াতের নিজের ক্রম, আগে নিজেরা, তারপর পরিবার, প্রায় প্রতিটি ঘরেই চোখে পড়ে: যেখানে দ্বীন প্রজন্ম ধরে শিকড় গেড়েছে, কিংবা নীরবে শুকিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Families in This Surah",
          "bn": "এই সূরায় পরিবার"
        },
        "p": [
          {
            "en": "Surah at-Tahrim closes with named examples that mark the limits of family influence. In 66:10 the wives of Nuh (AS) and Lut (AS) lived beside two righteous servants and betrayed them, and their nearness availed them nothing against Allah. In 66:11 the wife of Fir'awn believed inside a tyrant's palace and asked for a house near her Lord in Paradise. And in 66:12 Maryam (AS) is honoured for guarding her chastity and affirming the words of her Lord.",
            "bn": "সূরা আত-তাহরীম শেষ হয়েছে কয়েকটি দৃষ্টান্ত দিয়ে, নাম ধরে ধরে। সেগুলো দেখিয়ে দেয়, পরিবারের প্রভাব কতদূর যায়। ৬৬:১০ আয়াতে নূহ (আঃ) ও লূত (আঃ)-এর স্ত্রীরা দুজন নেককার বান্দার সংসারে থেকেও তাঁদের সঙ্গে বিশ্বাসঘাতকতা করেছিল, আর এই নৈকট্য আল্লাহর সামনে তাদের কোনো কাজে আসেনি। ৬৬:১১ আয়াতে ফেরাউনের স্ত্রী এক জালিমের প্রাসাদে থেকেই ঈমান এনেছিলেন, আর তাঁর রবের কাছে জান্নাতে একটি ঘর চেয়েছিলেন। আর ৬৬:১২ আয়াতে মারইয়াম (আঃ)-কে সম্মানিত করা হয়েছে, কারণ তিনি নিজের সতীত্ব রক্ষা করেছিলেন এবং তাঁর রবের বাণীকে সত্য বলে মেনেছিলেন।"
          },
          {
            "en": "That placement is itself commentary. A believing household is a real shelter, which is exactly why 66:6 commands the building of one; yet no household decides anyone's final end. Guidance is not inherited, and doom is not contagious: each soul in the house answers for itself. So the verse commands the effort — teaching, example, prayer — while the surah's ending guards that effort from two opposite mistakes, complacency about our children and despair over them.",
            "bn": "সূরার শেষে এই দৃষ্টান্তগুলো রাখাটাই একধরনের তাফসীর। মুমিন পরিবার সত্যিই এক আশ্রয়, আর ঠিক এ জন্যই ৬৬:৬ আয়াত তা গড়ে তোলার আদেশ দেয়। তবু কোনো পরিবারই কারও শেষ পরিণতি ঠিক করে দিতে পারে না। হিদায়াত উত্তরাধিকারে মেলে না, ধ্বংসও ছোঁয়াচে নয়: ঘরের প্রত্যেকে নিজের জবাব নিজেই দেবে। তাই আয়াতটি চেষ্টার আদেশ দেয়: শেখানো, দৃষ্টান্ত, নামাজ। আর সূরার সমাপ্তি সেই চেষ্টাকে দুটি উল্টো ভুল থেকে বাঁচায়: সন্তানদের নিয়ে নিশ্চিন্ত হয়ে বসে থাকা, আর তাদের নিয়ে নিরাশ হয়ে পড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Home as First School",
          "bn": "ঘরই প্রথম পাঠশালা"
        },
        "p": [
          {
            "en": "Lived out, this verse looks unheroic. A short reading at the table, children taken along to the mosque, questions answered honestly instead of being shushed, haram income kept out of the food, screens and company chosen with the same care given to diet. Warning has its place — the verse itself is a warning — but the door into the duty is love: a family guards together, in the end, only what it has first learned to love together.",
            "bn": "বাস্তব জীবনে এই আয়াতের চেহারা খুবই সাদামাটা। দস্তরখানে বসে অল্প একটু পাঠ; বাচ্চাদের সঙ্গে করে মসজিদে নিয়ে যাওয়া; প্রশ্ন করলে ধমক দিয়ে থামিয়ে না দিয়ে সৎভাবে জবাব দেওয়া; হারাম উপার্জন খাবারে ঢুকতে না দেওয়া; খাবার বাছাইয়ে যতটা যত্ন, স্ক্রিন আর সঙ্গী বাছাইয়েও ততটা যত্ন। সতর্ক করারও জায়গা আছে, আয়াতটি নিজেই তো এক সতর্কবাণী। কিন্তু এই দায়িত্বে ঢোকার দরজা হলো ভালোবাসা। শেষ পর্যন্ত পরিবার একসাথে কেবল সেটাই আগলে রাখে, যা সে আগে একসাথে ভালোবাসতে শিখেছে।"
          },
          {
            "en": "And the first clause never expires. Before every rule set for the household comes the question the verse asks its reader alone: what are you yourself walking toward? Two verses later, 66:8 calls the same believers to sincere repentance and to hope for their sins to be erased — the same audience, and a door held open. The one who keeps returning to Allah has begun the guarding of his family at its true starting point, which is himself.",
            "bn": "আর প্রথম অংশটির মেয়াদ কখনো ফুরায় না। ঘরের জন্য যত নিয়মই বাঁধা হোক, তার আগে আসে সেই প্রশ্ন, যা আয়াতটি প্রত্যেক পাঠককে একান্তে করে: আপনি নিজে কোন দিকে হাঁটছেন? দুই আয়াত পরেই ৬৬:৮ আয়াত এই একই মুমিনদের ডাকে খাঁটি তওবার দিকে, গুনাহ মুছে যাওয়ার আশার দিকে। শ্রোতা সেই একই, আর দরজাটা খোলা। যে বারবার আল্লাহর দিকে ফিরে আসে, সে পরিবারকে রক্ষার কাজ শুরু করে দিয়েছে ঠিক জায়গা থেকে: নিজেকে দিয়ে।"
          }
        ]
      }
    ]
  },
  "66:8": {
    "sections": [
      {
        "h": {
          "en": "A Command to Turn Back",
          "bn": "ফিরে আসার নির্দেশ"
        },
        "p": [
          {
            "en": "The address is to those who already believe: O you who believe, turn to Allah in repentance — tubu ila Allahi tawbatan nasuha. That addressing settles a question before it is asked: tawbah is not the door by which outsiders enter and insiders forget; it is standing business for believers. The Prophet ﷺ himself said, in what Muslim relates, that he turned to Allah in repentance a hundred times in a day. Repentance here is not an emergency exit but a discipline.",
            "bn": "সম্বোধনটা তাদের প্রতি, যারা আগেই ঈমান এনেছে: হে ঈমানদারগণ, আল্লাহর কাছে তওবা করো, 'তূবূ ইলাল্লাহি তাওবাতান নাসূহা'। এই সম্বোধনই একটা প্রশ্ন ওঠার আগেই তার মীমাংসা করে দেয়। তওবা এমন দরজা নয়, যা দিয়ে বাইরের লোক ভেতরে ঢোকে আর ভেতরের লোক তা ভুলে যায়। তওবা মুমিনের নিত্যদিনের কাজ। মুসলিমের বর্ণনায় নবী ﷺ নিজেই বলেছেন, তিনি দিনে একশো বার আল্লাহর কাছে তওবা করেন। তাই এখানে তওবা বিপদে পড়লে বেরোনোর পথ নয়, বরং নিয়মিত সাধনা।"
          },
          {
            "en": "The surah's opening gives the command its edge. At-Tahrim begins with a household matter involving the Prophet's ﷺ wives; 66:4 calls two of them to turn to Allah, for their hearts had inclined. If tawbah is asked of the mothers of the believers in the Prophet's ﷺ own house, then 66:8, widening it to every believer, is not a rebuke reserved for great sinners but the shared road of the best of people.",
            "bn": "সূরার শুরুটা এই নির্দেশকে আরও ধারালো করে। আত-তাহরীম শুরু হয়েছে নবী ﷺ-এর স্ত্রীদের নিয়ে একটি ঘরোয়া ঘটনা দিয়ে। ৬৬:৪ আয়াতে তাঁদের দুজনকে আল্লাহর দিকে ফিরতে বলা হয়েছে, কারণ তাঁদের মন ঝুঁকে পড়েছিল। নবী ﷺ-এর নিজের ঘরে মুমিনদের মায়েদের কাছেই যদি তওবা চাওয়া হয়, তাহলে ৬৬:৮ আয়াত যখন তা প্রত্যেক মুমিনের জন্য বিস্তৃত করে, তখন সেটা বড় গুনাহগারদের জন্য তোলা কোনো তিরস্কার নয়। বরং এ সেই পথ, যে পথে শ্রেষ্ঠ মানুষেরাও সবার সঙ্গে হাঁটেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What Nasuh Means",
          "bn": "নাসূহ মানে কী"
        },
        "p": [
          {
            "en": "Nasuh is from the root of nush, sincerity — the same root as the counsel a true friend gives. A tawbah nasuha is one that is sincere toward its owner: it advises him truly by actually severing him from the sin. Tabari relates from Umar (RA) that it is to repent from the wrong and then never return to it. The definitions the commentators gather circle one centre: an inward truthfulness that shows itself as an outward break.",
            "bn": "'নাসূহ' এসেছে 'নুসহ' ধাতু থেকে, যার অর্থ আন্তরিকতা। সত্যিকারের বন্ধু যে নসিহত করে, সেটাও এই একই ধাতুর শব্দ। 'তাওবাতান নাসূহা' মানে এমন তওবা, যা তওবাকারীর প্রতি আন্তরিক। সে তাকে খাঁটি নসিহত করে, কারণ সত্যিই তাকে গুনাহ থেকে বিচ্ছিন্ন করে দেয়। তাবারী উমর (রাঃ) থেকে বর্ণনা করেছেন: খাঁটি তওবা হলো অন্যায় থেকে তওবা করা, তারপর আর কখনো তাতে ফিরে না যাওয়া। মুফাসসিরগণ যত সংজ্ঞা জড়ো করেছেন, সবগুলোর কেন্দ্র একটাই: ভেতরের সত্যতা, যা বাইরে প্রকাশ পায় গুনাহের সঙ্গে সম্পর্ক ছিন্ন করার মধ্য দিয়ে।"
          },
          {
            "en": "The scholars formalised the parts. An-Nawawi states them: leave the sin, regret its commission, resolve firmly not to return; and if the wrong involved the right of another person, restore that right or seek his pardon. What the conditions exclude is precisely the counterfeit — the apology that plans its own repetition. The verse's single adjective, nasuha, was already excluding it: a repentance that intends to come back was never sincere counsel to its owner.",
            "bn": "আলিমগণ এর শর্তগুলো গুছিয়ে বলেছেন। আন-নববী সেগুলো উল্লেখ করেছেন: গুনাহটি ছেড়ে দেওয়া, তা করার জন্য অনুতপ্ত হওয়া, আর কখনো ফিরে না যাওয়ার দৃঢ় সংকল্প করা। অন্যায়টি যদি অন্য কারও হকের সঙ্গে জড়িত হয়, তাহলে সেই হক ফিরিয়ে দেওয়া, কিংবা তার কাছে মাফ চেয়ে নেওয়া। এই শর্তগুলো ঠিক নকল তওবাকেই বাদ দেয়: সেই মাফ চাওয়া, যা মনে মনে আবার একই কাজ করার পরিকল্পনা করে রাখে। আয়াতের একটিমাত্র বিশেষণ 'নাসূহা' আগেই একে বাদ দিয়ে রেখেছিল। যে তওবা আবার ফিরে আসার নিয়ত রাখে, তা কখনোই তওবাকারীর প্রতি আন্তরিক নসিহত ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "'Asa From Allah",
          "bn": "আল্লাহর পক্ষ থেকে 'আসা'"
        },
        "p": [
          {
            "en": "The reward is phrased with 'asa, it may be: it may be that your Lord will remove from you your misdeeds and admit you into gardens beneath which rivers flow. The commentators, Ibn Kathir among them, note that 'asa from Allah denotes what is due to occur — generosity states its promise as hope so that the servant approaches without presumption, yet the outcome is not in doubt. Removal of sins and entry into the gardens are the two halves of one restoration.",
            "bn": "প্রতিদানের কথা বলা হয়েছে 'আসা' (হয়তো) শব্দ দিয়ে: হয়তো তোমাদের রব তোমাদের গুনাহগুলো মুছে দেবেন এবং তোমাদের এমন জান্নাতে প্রবেশ করাবেন, যার তলদেশে নহর বয়ে চলে। ইবনে কাসীরসহ মুফাসসিরগণ বলেন, আল্লাহর পক্ষ থেকে 'আসা' মানে যা ঘটবেই। এটা দয়ার রীতি: প্রতিশ্রুতিকে আশার ভাষায় বলা, যাতে বান্দা নিজেকে হকদার না ভেবে বিনয়ের সঙ্গে এগিয়ে আসে। অথচ ফল নিয়ে কোনো সন্দেহ নেই। গুনাহ মুছে যাওয়া আর জান্নাতে প্রবেশ, এ দুটো মিলে একটাই পুনরুদ্ধার।"
          },
          {
            "en": "The scale of the offer deserves stating plainly beside 39:53, which says: O My servants who have transgressed against their own souls, do not despair of Allah's mercy; indeed Allah forgives sins altogether. Tawbah nasuha is not the bargaining of a debtor with a reluctant creditor. It is the return of a servant to a Lord who has announced in advance that He forgives all of it, and who loves those who repent, as 2:222 says.",
            "bn": "প্রস্তাবটা কত বড়, তা সোজা ভাষায় বুঝতে ৩৯:৫৩ আয়াতটি পাশে রাখুন: হে আমার বান্দারা, যারা নিজেদের ওপর বাড়াবাড়ি করেছ, আল্লাহর রহমত থেকে নিরাশ হয়ো না; নিশ্চয়ই আল্লাহ সব গুনাহ ক্ষমা করে দেন। 'তাওবাতান নাসূহা' কোনো অনিচ্ছুক পাওনাদারের সঙ্গে দেনাদারের দর-কষাকষি নয়। এ হলো বান্দার এমন রবের কাছে ফিরে আসা, যিনি আগেই ঘোষণা দিয়ে রেখেছেন যে তিনি সবই ক্ষমা করেন, আর ২:২২২ আয়াত যেমন বলে, যিনি তওবাকারীদের ভালোবাসেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day of Uncut Light",
          "bn": "পূর্ণ নূরের দিন"
        },
        "p": [
          {
            "en": "The verse then jumps to the Day when Allah will not disgrace the Prophet ﷺ and those who believed with him: their light runs before them and on their right, and they say, Our Lord, complete for us our light and forgive us; indeed You are over all things competent. 57:12 shows the same scene — light running before the believers — and 57:13 shows the hypocrites asking to borrow from it and being shut off behind a wall.",
            "bn": "এরপর আয়াতটি সোজা চলে যায় সেই দিনে, যেদিন আল্লাহ নবী ﷺ-কে এবং তাঁর সঙ্গে যারা ঈমান এনেছে তাদের লাঞ্ছিত করবেন না। তাদের নূর ছুটবে তাদের সামনে ও ডান দিকে, আর তারা বলবে: হে আমাদের রব, আমাদের নূর আমাদের জন্য পূর্ণ করে দিন এবং আমাদের ক্ষমা করুন; নিশ্চয়ই আপনি সবকিছুর ওপর ক্ষমতাবান। ৫৭:১২ আয়াতে একই দৃশ্য: মুমিনদের সামনে ছুটে চলা নূর। আর ৫৭:১৩ আয়াতে মুনাফিকরা সেই নূর থেকে একটু ধার চায়, তারপর একটা দেয়াল দিয়ে তাদের আটকে দেওয়া হয়।"
          },
          {
            "en": "The mufassirun connect the du'a to that moment: when the light of the hypocrites is put out, the believers ask that theirs be carried through to completion. What is striking is who prays it — people already crossing with light in hand still ask for completion and forgiveness. On the Last Day as on this one, the believer's security is not in his record but in his Lord, and asking remains his posture even inside rescue.",
            "bn": "মুফাসসিরগণ এই দোয়াকে সেই মুহূর্তের সঙ্গে মেলান: মুনাফিকদের আলো যখন নিভিয়ে দেওয়া হবে, মুমিনরা তখন চাইবে, তাদের আলো যেন শেষ পর্যন্ত পূর্ণ থাকে। লক্ষ করার মতো বিষয় হলো, দোয়াটা কারা করছে। যারা আলো হাতে নিয়ে পার হচ্ছে, তারাও পূর্ণতা আর ক্ষমা চাইছে। আজকের মতো কিয়ামতের দিনেও মুমিনের ভরসা তার আমলনামায় নয়, তার রবের ওপর। তাই উদ্ধার পাওয়ার মুহূর্তেও চাওয়াটাই তার স্বভাব হয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Repentance and Light Together",
          "bn": "তওবা ও নূর একসঙ্গে"
        },
        "p": [
          {
            "en": "Placing the two halves of the verse side by side yields its argument: the light of that Day is fuelled here. The same people commanded to a sincere tawbah are the ones shown crossing with light, and the prayer for completed light sits beside the prayer for forgiveness in a single breath — the two requests are one request. Muslim relates that Allah is more joyful at the repentance of His servant than a man who despairs of his mount and provisions in the desert and then finds them; the One receiving the return is gladder than the one returning.",
            "bn": "আয়াতের দুই অংশ পাশাপাশি রাখলেই এর মূল কথা বেরিয়ে আসে: সেই দিনের আলোর জ্বালানি জোগাড় হয় এই দুনিয়াতেই। যাদের খাঁটি তওবার আদেশ দেওয়া হয়েছে, তাদেরই দেখানো হয়েছে আলো নিয়ে পার হতে। আর পূর্ণ নূরের দোয়া আর ক্ষমার দোয়া এসেছে এক নিঃশ্বাসে, পাশাপাশি; দুটো চাওয়া আসলে একই চাওয়া। মুসলিম বর্ণনা করেছেন: মরুভূমিতে কেউ তার বাহন আর রসদ হারিয়ে নিরাশ হয়ে যাওয়ার পর সেগুলো ফিরে পেলে যতটা খুশি হয়, বান্দার তওবায় আল্লাহ তার চেয়েও বেশি খুশি হন। যে ফিরে আসে, তার চেয়ে যিনি ফিরিয়ে নেন, তাঁর আনন্দ বেশি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Practice of Turning",
          "bn": "ফিরে আসার অনুশীলন"
        },
        "p": [
          {
            "en": "The verse's practice begins tonight, not at some cleaner future date, because nasuh describes quality, not timing. Name the sin rather than the mood; leave it in the concrete way it is actually committed; feel its loss as loss; resolve against return; and where someone was wronged, give the right back — the apology, the money, the reputation. Nothing in the list requires a feeling of worthiness. It requires truthfulness, which is available even to the person who fears he will fail again.",
            "bn": "এই আয়াতের আমল শুরু হয় আজ রাতেই, নিজেকে একটু গুছিয়ে নেওয়ার পর ভবিষ্যতের কোনো দিনে নয়। কারণ 'নাসূহ' তওবার মান বোঝায়, সময় নয়। মনের অবস্থার নাম নয়, গুনাহটির নাম নিন। বাস্তবে গুনাহটা যেভাবে করেন, ঠিক সেভাবেই তা ছাড়ুন। এতে যা হারিয়েছেন, তাকে সত্যিকারের ক্ষতি বলে অনুভব করুন। আর ফিরে না যাওয়ার সংকল্প করুন। কারও ওপর অন্যায় হয়ে থাকলে তার হক ফিরিয়ে দিন: মাফ চাওয়া, টাকা, সুনাম। এই তালিকার কোনোটির জন্যই নিজেকে যোগ্য মনে হওয়ার দরকার নেই। দরকার শুধু সত্যবাদিতা, আর সেটা তারও নাগালে আছে, যে ভয় পায় আবার ব্যর্থ হবে।"
          },
          {
            "en": "And if he does fail again? The command remains addressed to him: O you who believe, repent. Each return is judged as itself; sincerity is measured at the time of the turning, not falsified by a later fall. The believers in the verse walk toward the gardens asking for light and forgiveness to the end — so a lifetime that looks like repeated turning back to Allah is not a failed tawbah; it is what the road of the people of 66:8 has always looked like.",
            "bn": "আর সে যদি আবার ব্যর্থ হয়? নির্দেশটা তখনো তাকেই বলা: হে ঈমানদারগণ, তওবা করো। প্রতিটি ফিরে আসার বিচার হয় আলাদাভাবে। আন্তরিকতা মাপা হয় ফিরে আসার মুহূর্তে; পরে আবার পড়ে গেলে আগের আন্তরিকতা মিথ্যা হয়ে যায় না। আয়াতের মুমিনরা শেষ পর্যন্ত নূর আর ক্ষমা চাইতে চাইতে জান্নাতের দিকে হাঁটে। তাই যে জীবন দেখতে বারবার আল্লাহর দিকে ফিরে আসার মতো, তা ব্যর্থ তওবা নয়। ৬৬:৮ আয়াতের মানুষদের পথ চিরকাল এমনই ছিল।"
          }
        ]
      }
    ]
  }
});
