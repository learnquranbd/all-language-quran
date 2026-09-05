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
            "bn": "হে ঈমানদারগণ, নিজেদের ও তোমাদের পরিবার-পরিজনকে রক্ষা করো সেই আগুন থেকে, যার জ্বালানি মানুষ ও পাথর। আদেশটি হলো কূ — ওই একই মূল থেকে, যেখান থেকে বিকায়া ও তাকওয়া এসেছে: নিজের ও ক্ষতিকর জিনিসের মাঝখানে ঢাল বসানোর কাজ। তাকওয়াকে সাধারণত বান্দা ও আল্লাহর মধ্যকার ব্যক্তিগত ব্যাপার বলা হয়; এই আয়াত একে একই সঙ্গে ঘর-সংসারের ব্যাপারও বানিয়ে দেয়। মুমিনের রক্ষার দায়িত্বের দুটি নির্দিষ্ট লক্ষ্য বলা হয়েছে — আর তার প্রথমটি তার নিজের আত্মা।"
          },
          {
            "en": "The order matters. Anfusakum comes before ahlikum, because no one can shield a family from a fire he is himself walking toward. The verse then describes what is being shielded against with deliberate severity: a Fire fed by people and by stones, attended by angels stern and severe who do not disobey Allah in what He commands them, but do whatever they are commanded. The stakes are stated first so that the daily work commanded here is never mistaken for a lifestyle preference.",
            "bn": "ক্রমটি অর্থবহ। আনফুসাকুম আসে আহলীকুমের আগে — কারণ যে আগুনের দিকে কেউ নিজেই হেঁটে যাচ্ছে, সেই আগুন থেকে সে পরিবারকে আড়াল করতে পারে না। আয়াতটি এরপর ইচ্ছাকৃত কঠোরতায় বর্ণনা করে কিসের বিরুদ্ধে এই ঢাল: এমন এক আগুন যার খোরাক মানুষ ও পাথর, যার তদারকিতে আছেন রূঢ়, কঠোর ফেরেশতারা — আল্লাহ তাঁদের যা আদেশ করেন তা তাঁরা অমান্য করেন না, বরং যা আদেশ পান তা-ই করেন। ঝুঁকিটা আগে বলা হয়েছে, যেন এখানে আদেশ করা দৈনন্দিন কাজটিকে কেউ কখনো জীবনধারার পছন্দ-অপছন্দ ভেবে ভুল না করে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Companions Read It",
          "bn": "সাহাবীগণ যেভাবে পড়েছেন"
        },
        "p": [
          {
            "en": "Al-Tabari relates from Ali (RA) that guarding the family here means: teach them and discipline them. Other early authorities he records give the same sense — command them with what Allah has commanded, and forbid them what He has forbidden. The verse is thus read as a teaching duty, not a controlling one: the shield it orders is built out of knowledge, habit and example, and it has to be built before the day on which it is needed.",
            "bn": "আত-তাবারী আলী (রাঃ) থেকে বর্ণনা করেন, এখানে পরিবারকে রক্ষার অর্থ: তাদের শেখাও এবং তাদের আদব-শিষ্টাচার দাও। তিনি প্রাথমিক যুগের আরও যাঁদের বক্তব্য লিপিবদ্ধ করেছেন, তাঁরাও একই অর্থ দেন — আল্লাহ যা আদেশ করেছেন তা তাদের আদেশ করো, আর তিনি যা নিষেধ করেছেন তা থেকে তাদের নিষেধ করো। ফলে আয়াতটি পড়া হয় শেখানোর দায়িত্ব হিসেবে, নিয়ন্ত্রণের দায়িত্ব হিসেবে নয়: এটি যে ঢাল গড়তে বলে, তা জ্ঞান, অভ্যাস ও দৃষ্টান্ত দিয়ে গড়া — আর যেদিন তা দরকার হবে, তার আগেই তা গড়ে তুলতে হয়।"
          },
          {
            "en": "The Prophet ﷺ set the frame for this responsibility. Al-Bukhari narrates from Ibn Umar (RA): every one of you is a shepherd, and every one of you is answerable for his flock — the ruler over his people, the man over his household, the woman over her husband's house. Guardianship in Islam is distributed, layer by layer; this verse addresses the layer of it that eats at one table and sleeps under one roof.",
            "bn": "নবী ﷺ এই দায়িত্বের কাঠামোটি স্থির করে দিয়েছেন। আল-বুখারী ইবনে উমর (রাঃ) থেকে বর্ণনা করেন: তোমাদের প্রত্যেকেই রাখাল, আর তোমাদের প্রত্যেককে তার পালের ব্যাপারে জবাবদিহি করতে হবে — শাসক তার প্রজাদের ব্যাপারে, পুরুষ তার পরিবারের ব্যাপারে, নারী তার স্বামীর ঘরের ব্যাপারে। ইসলামে অভিভাবকত্ব স্তরে স্তরে বণ্টিত; এই আয়াত সম্বোধন করে তার সেই স্তরটিকে — যারা এক টেবিলে খায় আর এক ছাদের নিচে ঘুমায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer as the Spine",
          "bn": "মেরুদণ্ড হিসেবে নামায"
        },
        "p": [
          {
            "en": "Whenever the Quran shows this duty in action, prayer stands at its centre. In 20:132 the Prophet ﷺ is told: command your family with prayer, and yourself be constant in it. Isma'il (AS) is praised in 19:55 because he used to command his family with prayer and zakah, and his Lord was pleased with him. And Abu Dawud narrates that the Prophet ﷺ instructed parents to command their children to pray at seven years old and to discipline them over it at ten.",
            "bn": "কুরআন যখনই এই দায়িত্বকে কর্মরত অবস্থায় দেখায়, তার কেন্দ্রে দাঁড়িয়ে থাকে নামায। 20:132 আয়াতে নবী ﷺ-কে বলা হয়েছে: তোমার পরিবারকে নামাযের আদেশ দাও, আর নিজে তাতে অবিচল থাকো। ইসমাঈল (আঃ) 19:55 আয়াতে প্রশংসিত হয়েছেন — কারণ তিনি তাঁর পরিবারকে নামায ও যাকাতের আদেশ দিতেন, আর তাঁর প্রভু তাঁর প্রতি সন্তুষ্ট ছিলেন। আর আবু দাউদ বর্ণনা করেন, নবী ﷺ অভিভাবকদের নির্দেশ দিয়েছেন — সন্তানদের সাত বছর বয়সে নামাযের আদেশ দিতে এবং দশ বছর বয়সে এ নিয়ে শাসন করতে।"
          },
          {
            "en": "The pairing inside 20:132 repays attention: command your family, and yourself persevere. A household learns prayer from watching it loved, not from hearing it demanded. The parent who rises for fajr is teaching fajr; the parent who only orders it teaches, without meaning to, that prayer is a burden adults escape. The verse's own sequence — yourselves, then your families — is visible in almost every home where religion either took root across a generation or quietly withered.",
            "bn": "20:132 আয়াতের ভেতরের জোড়টি মনোযোগের দাবি রাখে: পরিবারকে আদেশ দাও, আর নিজে লেগে থাকো। একটি পরিবার নামায শেখে তাকে ভালোবাসতে দেখে, দাবি করতে শুনে নয়। যে মা-বাবা ফজরে ওঠেন, তিনি ফজর শেখাচ্ছেন; আর যিনি কেবল হুকুম করেন, তিনি না চাইতেও শেখাচ্ছেন — নামায এমন এক বোঝা, বড়রা যা এড়িয়ে চলে। আয়াতের নিজের ক্রম — আগে নিজেরা, তারপর পরিবার — প্রায় প্রতিটি ঘরে চোখে পড়ে, যেখানে দ্বীন হয় এক প্রজন্ম জুড়ে শিকড় গেড়েছে, নয়তো নীরবে শুকিয়ে গেছে।"
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
            "bn": "সূরা আত-তাহরীম শেষ হয় নাম-ধরা দৃষ্টান্ত দিয়ে, যেগুলো পারিবারিক প্রভাবের সীমা চিহ্নিত করে। 66:10 আয়াতে নূহ (আঃ) ও লূত (আঃ)-এর স্ত্রীরা দুজন নেককার বান্দার পাশে বাস করেও তাঁদের সঙ্গে বিশ্বাসঘাতকতা করেছিল — আর সেই নৈকট্য আল্লাহর মোকাবিলায় তাদের কোনো কাজে আসেনি। 66:11 আয়াতে ফিরআউনের স্ত্রী এক অত্যাচারীর প্রাসাদের ভেতরে ঈমান এনেছিলেন এবং তাঁর প্রভুর কাছে জান্নাতে একটি ঘর চেয়েছিলেন। আর 66:12 আয়াতে মারইয়াম (আঃ) সম্মানিত হয়েছেন — নিজের সতীত্ব রক্ষা করায় ও তাঁর প্রভুর বাণী সত্য বলে গ্রহণ করায়।"
          },
          {
            "en": "That placement is itself commentary. A believing household is a real shelter, which is exactly why 66:6 commands the building of one; yet no household decides anyone's final end. Guidance is not inherited, and doom is not contagious: each soul in the house answers for itself. So the verse commands the effort — teaching, example, prayer — while the surah's ending guards that effort from two opposite mistakes, complacency about our children and despair over them.",
            "bn": "এই বিন্যাসটিই একটি তাফসীর। মুমিন পরিবার সত্যিকারের আশ্রয় — ঠিক এ কারণেই 66:6 আয়াত তা গড়ে তোলার আদেশ দেয়; তবু কোনো পরিবারই কারও চূড়ান্ত পরিণতি ঠিক করে দেয় না। হিদায়াত উত্তরাধিকারসূত্রে মেলে না, আর ধ্বংসও ছোঁয়াচে নয়: ঘরের প্রতিটি আত্মা নিজের জবাব নিজে দেবে। তাই আয়াতটি আদেশ করে চেষ্টার — শেখানো, দৃষ্টান্ত, নামায — আর সূরার সমাপ্তি সেই চেষ্টাকে রক্ষা করে দুটি বিপরীত ভুল থেকে: সন্তানদের নিয়ে আত্মতুষ্টি, আর তাদের নিয়ে নিরাশা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Home as First School",
          "bn": "প্রথম বিদ্যালয় হিসেবে ঘর"
        },
        "p": [
          {
            "en": "Lived out, this verse looks unheroic. A short reading at the table, children taken along to the mosque, questions answered honestly instead of being shushed, haram income kept out of the food, screens and company chosen with the same care given to diet. Warning has its place — the verse itself is a warning — but the door into the duty is love: a family guards together, in the end, only what it has first learned to love together.",
            "bn": "যাপনের চেহারায় এই আয়াত মোটেও বীরত্বব্যঞ্জক নয়। খাবার টেবিলে ছোট্ট একটি পাঠ, শিশুদের সঙ্গে করে মসজিদে নেওয়া, প্রশ্নের জবাব ধমকে থামিয়ে না দিয়ে সততার সঙ্গে দেওয়া, খাবার থেকে হারাম উপার্জন দূরে রাখা, খাদ্যতালিকা বাছাইয়ের মতো একই যত্নে পর্দা ও সঙ্গ বাছাই। সতর্কবার্তার জায়গা আছে — আয়াতটি নিজেই এক সতর্কবার্তা — কিন্তু এই দায়িত্বে ঢোকার দরজাটি ভালোবাসা: একটি পরিবার শেষ পর্যন্ত একসাথে কেবল সেটাই পাহারা দেয়, যা সে আগে একসাথে ভালোবাসতে শিখেছে।"
          },
          {
            "en": "And the first clause never expires. Before every rule set for the household comes the question the verse asks its reader alone: what are you yourself walking toward? Two verses later, 66:8 calls the same believers to sincere repentance and to hope for their sins to be erased — the same audience, and a door held open. The one who keeps returning to Allah has begun the guarding of his family at its true starting point, which is himself.",
            "bn": "আর প্রথম বাক্যাংশটির মেয়াদ কখনো ফুরায় না। ঘরের জন্য বাঁধা প্রতিটি নিয়মের আগে আসে সেই প্রশ্ন, যা আয়াতটি কেবল তার পাঠককে একা করে: তুমি নিজে কোন দিকে হাঁটছ? দুই আয়াত পরে 66:8 আয়াত এই একই মুমিনদের ডাকে আন্তরিক তাওবার দিকে, গুনাহ মুছে যাওয়ার আশার দিকে — সেই একই শ্রোতা, আর খোলা রাখা একটি দরজা। যে বারবার আল্লাহর দিকে ফিরে আসে, সে তার পরিবারের পাহারা শুরু করে দিয়েছে তার প্রকৃত সূচনাবিন্দু থেকে — যা সে নিজে।"
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
            "bn": "সম্বোধনটি তাদের প্রতি, যারা ইতিমধ্যে ঈমান এনেছে: হে ঈমানদারগণ, আল্লাহর কাছে তওবা করো — 'তূবূ ইলাল্লাহি তাওবাতান নাসূহা'। এই সম্বোধনই প্রশ্ন ওঠার আগে তার মীমাংসা করে দেয়: তওবা এমন দরজা নয় যা দিয়ে বাইরের মানুষ ঢোকে আর ভেতরের মানুষ ভুলে যায়; এটি মুমিনদের নিয়মিত কারবার। নবী ﷺ নিজেই বলেছেন — মুসলিম যা বর্ণনা করেন — তিনি দিনে একশো বার আল্লাহর কাছে তওবা করতেন। এখানে তওবা কোনো জরুরি নির্গমন পথ নয়, বরং একটি শৃঙ্খলা।"
          },
          {
            "en": "The surah's opening gives the command its edge. At-Tahrim begins with a household matter involving the Prophet's ﷺ wives; 66:4 calls two of them to turn to Allah, for their hearts had inclined. If tawbah is asked of the mothers of the believers in the Prophet's ﷺ own house, then 66:8, widening it to every believer, is not a rebuke reserved for great sinners but the shared road of the best of people.",
            "bn": "সূরার শুরু নির্দেশটিকে তার ধার দেয়। আত-তাহরীম শুরু হয় নবী ﷺ-এর স্ত্রীদের সংশ্লিষ্ট একটি গৃহস্থালি বিষয় দিয়ে; 66:4 তাঁদের দুজনকে আল্লাহর দিকে ফিরতে বলে, কারণ তাঁদের হৃদয় ঝুঁকে পড়েছিল। নবী ﷺ-এর নিজের ঘরে মুমিনদের মায়েদের কাছেই যদি তওবা চাওয়া হয়, তবে 66:8 — যা একে প্রতিটি মুমিনের জন্য প্রশস্ত করে — বড় পাপীদের জন্য তুলে রাখা কোনো ভর্ৎসনা নয়, বরং শ্রেষ্ঠ মানুষদেরও অভিন্ন পথ।"
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
            "bn": "'নাসূহ' এসেছে 'নুসহ' — আন্তরিকতা — ধাতু থেকে; সত্যিকারের বন্ধু যে উপদেশ দেয়, সেটিও একই ধাতুর। 'তাওবাতান নাসূহা' হলো সেই তওবা, যা তার মালিকের প্রতি আন্তরিক: সে তাকে সত্যিকারের উপদেশ দেয় — তাকে পাপ থেকে সত্যিই বিচ্ছিন্ন করে দিয়ে। তাবারী উমর (রাঃ) থেকে বর্ণনা করেন: তা হলো অন্যায় থেকে তওবা করা, তারপর আর কখনো তাতে ফিরে না যাওয়া। মুফাসসিরগণ যে সংজ্ঞাগুলো জড়ো করেন, সেগুলো একটিই কেন্দ্র ঘিরে ঘোরে: এমন এক ভেতরের সত্যবাদিতা, যা বাইরের ছেদ হয়ে প্রকাশ পায়।"
          },
          {
            "en": "The scholars formalised the parts. An-Nawawi states them: leave the sin, regret its commission, resolve firmly not to return; and if the wrong involved the right of another person, restore that right or seek his pardon. What the conditions exclude is precisely the counterfeit — the apology that plans its own repetition. The verse's single adjective, nasuha, was already excluding it: a repentance that intends to come back was never sincere counsel to its owner.",
            "bn": "আলিমগণ অংশগুলোকে সূত্রবদ্ধ করেছেন। আন-নববী সেগুলো বলেন: পাপটি ছেড়ে দেওয়া, তা করার জন্য অনুতপ্ত হওয়া, ফিরে না যাওয়ার দৃঢ় সংকল্প করা; আর অন্যায়টি যদি অন্য কোনো মানুষের হকের সঙ্গে জড়িত হয়, তবে সেই হক ফিরিয়ে দেওয়া বা তার ক্ষমা চাওয়া। শর্তগুলো ঠিক যেটিকে বাদ দেয় তা হলো নকলটি — যে ক্ষমাপ্রার্থনা নিজের পুনরাবৃত্তির পরিকল্পনা করে রাখে। আয়াতের একটিমাত্র বিশেষণ 'নাসূহা' আগেই তা বাদ দিয়ে রেখেছিল: যে তওবা ফিরে আসার নিয়ত রাখে, তা কখনোই তার মালিকের প্রতি আন্তরিক উপদেশ ছিল না।"
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
            "bn": "প্রতিদানটি বলা হয়েছে 'আসা' — হতে পারে — দিয়ে: হতে পারে তোমাদের রব তোমাদের পাপগুলো মুছে দেবেন এবং তোমাদের প্রবেশ করাবেন এমন জান্নাতে, যার তলদেশে নহর বয়ে চলে। মুফাসসিরগণ — ইবনে কাসীর তাঁদের মধ্যে — লক্ষ করেন, আল্লাহর পক্ষ থেকে 'আসা' বোঝায় যা ঘটারই কথা — দানশীলতা তার প্রতিশ্রুতি আশার ভাষায় বলে, যাতে বান্দা ধৃষ্টতা ছাড়া এগিয়ে আসে, অথচ ফলাফলে কোনো সন্দেহ নেই। পাপ মুছে যাওয়া আর জান্নাতে প্রবেশ — একই পুনরুদ্ধারের দুই অর্ধেক।"
          },
          {
            "en": "The scale of the offer deserves stating plainly beside 39:53, which says: O My servants who have transgressed against their own souls, do not despair of Allah's mercy; indeed Allah forgives sins altogether. Tawbah nasuha is not the bargaining of a debtor with a reluctant creditor. It is the return of a servant to a Lord who has announced in advance that He forgives all of it, and who loves those who repent, as 2:222 says.",
            "bn": "প্রস্তাবটির বিশালতা 39:53 আয়াতের পাশে রেখে স্পষ্ট করে বলার দাবি রাখে: হে আমার বান্দারা, যারা নিজেদের আত্মার ওপর বাড়াবাড়ি করেছ, আল্লাহর রহমত থেকে নিরাশ হয়ো না; নিশ্চয়ই আল্লাহ সব গুনাহ ক্ষমা করে দেন। 'তাওবাতান নাসূহা' কোনো অনিচ্ছুক পাওনাদারের সঙ্গে ঋণীর দরকষাকষি নয়। এটি এক বান্দার ফিরে আসা এমন এক রবের কাছে, যিনি আগেই ঘোষণা করে রেখেছেন যে তিনি সবটাই ক্ষমা করেন, এবং যিনি তওবাকারীদের ভালোবাসেন — যেমন 2:222 বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day of Uncut Light",
          "bn": "অখণ্ড আলোর দিন"
        },
        "p": [
          {
            "en": "The verse then jumps to the Day when Allah will not disgrace the Prophet ﷺ and those who believed with him: their light runs before them and on their right, and they say, Our Lord, complete for us our light and forgive us; indeed You are over all things competent. 57:12 shows the same scene — light running before the believers — and 57:13 shows the hypocrites asking to borrow from it and being shut off behind a wall.",
            "bn": "আয়াতটি এরপর লাফ দেয় সেই দিনে, যেদিন আল্লাহ নবী ﷺ-কে এবং তাঁর সঙ্গে ঈমান আনা লোকদের লাঞ্ছিত করবেন না: তাদের নূর ছুটে চলবে তাদের সামনে ও ডানে, আর তারা বলবে — হে আমাদের রব, আমাদের নূর আমাদের জন্য পূর্ণ করে দাও এবং আমাদের ক্ষমা করো; নিশ্চয়ই তুমি সবকিছুর ওপর ক্ষমতাবান। 57:12 একই দৃশ্য দেখায় — মুমিনদের সামনে ছুটে চলা নূর — আর 57:13 দেখায় মুনাফিকদের, যারা তা থেকে ধার চাইছে এবং একটি দেয়ালের আড়ালে আটকে যাচ্ছে।"
          },
          {
            "en": "The mufassirun connect the du'a to that moment: when the light of the hypocrites is put out, the believers ask that theirs be carried through to completion. What is striking is who prays it — people already crossing with light in hand still ask for completion and forgiveness. On the Last Day as on this one, the believer's security is not in his record but in his Lord, and asking remains his posture even inside rescue.",
            "bn": "মুফাসসিরগণ দোয়াটিকে সেই মুহূর্তের সঙ্গে যুক্ত করেন: মুনাফিকদের আলো যখন নিভিয়ে দেওয়া হবে, মুমিনরা তখন চাইবে তাদেরটি যেন শেষ পর্যন্ত পূর্ণতায় পৌঁছে। লক্ষণীয় হলো কারা এই দোয়া করছে — হাতে আলো নিয়ে পার হতে থাকা মানুষরাও পূর্ণতা ও ক্ষমা চাইছে। শেষ দিনেও, যেমন আজকের দিনে, মুমিনের নিরাপত্তা তার আমলনামায় নয়, তার রবের কাছে — আর উদ্ধারের ভেতরে থেকেও চাওয়াই তার ভঙ্গি থেকে যায়।"
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
            "bn": "আয়াতের দুই অর্ধেক পাশাপাশি রাখলেই এর যুক্তিটি বেরিয়ে আসে: সেই দিনের আলোর জ্বালানি জোগানো হয় এখানে। যাদের আন্তরিক তওবার নির্দেশ দেওয়া হয়েছে, তাদেরই দেখানো হয়েছে আলো নিয়ে পার হতে, আর পূর্ণ আলোর দোয়াটি ক্ষমার দোয়ার পাশে বসে আছে একই নিঃশ্বাসে — দুটি চাওয়া আসলে একটিই চাওয়া। মুসলিম বর্ণনা করেন: বান্দার তওবায় আল্লাহ তার চেয়েও বেশি আনন্দিত হন, যে ব্যক্তি মরুভূমিতে তার বাহন ও রসদ হারিয়ে নিরাশ হওয়ার পর তা ফিরে পায়; যিনি প্রত্যাবর্তন গ্রহণ করেন, তিনি প্রত্যাবর্তনকারীর চেয়েও বেশি খুশি।"
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
            "bn": "আয়াতটির অনুশীলন শুরু হয় আজ রাতেই — ভবিষ্যতের কোনো পরিচ্ছন্নতর তারিখে নয় — কারণ 'নাসূহ' মানের বর্ণনা, সময়ের নয়। মেজাজ নয়, পাপটির নাম নিন; যেভাবে তা বাস্তবে করা হয়, ঠিক সেই বাস্তব উপায়েই তা ছাড়ুন; তার ক্ষতিকে ক্ষতি হিসেবে অনুভব করুন; ফিরে না যাওয়ার সংকল্প করুন; আর কারও প্রতি অন্যায় হয়ে থাকলে হকটি ফিরিয়ে দিন — ক্ষমাপ্রার্থনা, টাকা, সুনাম। তালিকার কোনোটিতেই নিজেকে যোগ্য মনে হওয়া লাগে না। লাগে সত্যবাদিতা — যা সেই মানুষটিরও নাগালে, যে ভয় পায় সে আবার ব্যর্থ হবে।"
          },
          {
            "en": "And if he does fail again? The command remains addressed to him: O you who believe, repent. Each return is judged as itself; sincerity is measured at the time of the turning, not falsified by a later fall. The believers in the verse walk toward the gardens asking for light and forgiveness to the end — so a lifetime that looks like repeated turning back to Allah is not a failed tawbah; it is what the road of the people of 66:8 has always looked like.",
            "bn": "আর সে যদি আবার ব্যর্থ হয়? নির্দেশটি তখনো তাকেই সম্বোধন করছে: হে ঈমানদারগণ, তওবা করো। প্রতিটি ফিরে আসা তার নিজের মতো করে বিচার্য; আন্তরিকতা মাপা হয় ফেরার মুহূর্তে — পরের কোনো পতন তাকে মিথ্যা বানায় না। আয়াতের মুমিনরা শেষ পর্যন্ত নূর ও ক্ষমা চাইতে চাইতে জান্নাতের দিকে হাঁটে — সুতরাং যে জীবন দেখতে বারবার আল্লাহর দিকে ফিরে আসার মতো, তা ব্যর্থ তওবা নয়; 66:8 আয়াতের মানুষদের পথ চিরকাল এ রকমই দেখতে।"
          }
        ]
      }
    ]
  }
});
