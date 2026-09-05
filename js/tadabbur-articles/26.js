/**
 * Tadabbur long-form articles — surah 26.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "26:80": {
    "sections": [
      {
        "h": {
          "en": "In the Middle of a Description",
          "bn": "একটি বর্ণনার মাঝখানে"
        },
        "p": [
          {
            "en": "Ibrahim (AS) has asked his people what they worship, and 26:74 gives their answer: we found our fathers doing so. He replies in 26:77 that all of them are enemies to him except the Lord of the worlds, and then, instead of continuing the argument, he describes that Lord. 26:78-82 is the description. Only afterwards, from 26:83, does he ask Him for anything at all.",
            "bn": "ইবরাহীম (আঃ) তাঁর জাতিকে জিজ্ঞেস করেছেন তারা কীসের পূজা করে, আর 26:74 দেয় তাদের উত্তর: আমরা আমাদের পিতৃপুরুষদের এমনই করতে দেখেছি। তিনি 26:77-এ জবাব দেন যে বিশ্বজগতের প্রতিপালক ছাড়া তারা সবাই তাঁর শত্রু; এরপর যুক্তিতর্ক চালিয়ে যাওয়ার বদলে তিনি সেই প্রতিপালকেরই বর্ণনা দিতে শুরু করেন। 26:78-82 সেই বর্ণনা। কেবল তার পরেই, 26:83 থেকে, তিনি তাঁর কাছে কিছু চান।"
          }
        ]
      },
      {
        "h": {
          "en": "A Chain, and One Break",
          "bn": "একটি শৃঙ্খল, আর একটি ছেদ"
        },
        "p": [
          {
            "en": "In the mushaf, 26:78, 26:79, 26:80 and 26:81 are four words each, and 26:82 runs longer. Four of the five clauses hang on the same relative pronoun, alladhi, the One who: the One who created me, and the One who feeds me, and the One who causes me to die, and the One who I hope will forgive me. The pattern is steady enough that the exception is audible.",
            "bn": "মুসহাফে 26:78, 26:79, 26:80 ও 26:81 প্রতিটি চার শব্দের, আর 26:82 তার চেয়ে দীর্ঘ। পাঁচটি বাক্যাংশের চারটিই ঝুলে আছে একই সম্বন্ধবাচক শব্দ 'আল্লাযী'—অর্থাৎ 'যিনি'—এর ওপর: যিনি আমাকে সৃষ্টি করেছেন, আর যিনি আমাকে খাওয়ান, আর যিনি আমার মৃত্যু ঘটাবেন, আর যিনি সম্পর্কে আমি আশা করি তিনি আমাকে ক্ষমা করবেন। ছন্দটি এতটাই স্থির যে ব্যতিক্রমটি কানে ধরা পড়ে।"
          },
          {
            "en": "26:80 is that exception. It does not begin with alladhi. It begins with a condition and a first-person verb: wa idha maridtu, and when I fall ill — and only then, fahuwa yashfin, He cures me. Illness is the one item in the whole list that is not built into a description of the Lord. It is placed on the speaker's own side of the sentence, and the cure is attributed afterwards.",
            "bn": "26:80 সেই ব্যতিক্রম। এটি 'আল্লাযী' দিয়ে শুরু হয় না। এটি শুরু হয় একটি শর্ত ও উত্তম পুরুষের ক্রিয়া দিয়ে: 'ওয়া ইযা মারিদতু' — আর আমি যখন অসুস্থ হই; আর কেবল তখনই আসে 'ফাহুয়া ইয়াশফীন' — তিনিই আমাকে আরোগ্য দেন। গোটা তালিকায় অসুস্থতাই একমাত্র বিষয় যা প্রতিপালকের বর্ণনার ভেতরে গাঁথা হয়নি। একে রাখা হয়েছে বাক্যের সেই পাশে যেখানে বক্তা নিজে আছেন, আর আরোগ্যের সম্বন্ধ জোড়া হয়েছে তারপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Credited With What",
          "bn": "কার নামে কী লেখা হলো"
        },
        "p": [
          {
            "en": "Follow the attributions across the five verses and a pattern appears that is easy to miss when they are read as one flowing prayer. Creating, guiding, feeding, giving drink, curing, causing death, giving life and forgiving are all attributed to Him. The two things placed on the speaker are his illness and his fault — khati'ati, my sin. What is good is said of the Lord; what is unwelcome is spoken in the first person.",
            "bn": "পাঁচটি আয়াত জুড়ে সম্বন্ধগুলো অনুসরণ করলে এমন এক ধরন ধরা পড়ে, যা একটানা প্রার্থনা হিসেবে পড়লে সহজেই চোখ এড়িয়ে যায়। সৃষ্টি করা, পথ দেখানো, খাওয়ানো, পান করানো, আরোগ্য দেওয়া, মৃত্যু ঘটানো, জীবন দেওয়া ও ক্ষমা করা — সবই তাঁরই দিকে সম্বন্ধিত। আর বক্তার ঘাড়ে রাখা হয়েছে দুটি জিনিস: তাঁর অসুস্থতা আর তাঁর ত্রুটি — 'খাতীআতী', আমার অপরাধ। যা কল্যাণ তা বলা হয়েছে প্রতিপালকের নামে; যা অপ্রীতিকর তা বলা হয়েছে উত্তম পুরুষে।"
          },
          {
            "en": "The pattern is not a blanket rule about avoiding hard subjects, and the passage itself shows it. Death is attributed to Allah directly in 26:81 — the One who causes me to die and then gives me life — because dying is not an evil in the Quran's account of it, but an appointed transition. And the last clause changes register too: it does not state forgiveness, it hopes for it.",
            "bn": "এই ধরনটি কঠিন বিষয় এড়িয়ে যাওয়ার কোনো ঢালাও নিয়ম নয়, আর অনুচ্ছেদটি নিজেই তা দেখিয়ে দেয়। 26:81-এ মৃত্যুর সম্বন্ধ সরাসরি আল্লাহর দিকেই করা হয়েছে — যিনি আমার মৃত্যু ঘটাবেন, তারপর আমাকে জীবিত করবেন — কারণ কুরআনের বর্ণনায় মৃত্যু কোনো অকল্যাণ নয়, বরং একটি নির্ধারিত উত্তরণ। আর শেষ বাক্যাংশটির সুরও বদলে যায়: এটি ক্ষমার ঘোষণা দেয় না, ক্ষমার আশা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ibn Kathir on the Manner",
          "bn": "ইবনে কাসীর এই রীতি প্রসঙ্গে"
        },
        "p": [
          {
            "en": "Ibn Kathir treats this as deliberate courtesy of speech. Ibrahim (AS) related falling ill to himself and the cure to Allah, he writes, although the illness too is by Allah's decree and making. He then points to two other places where the Quran speaks in the same manner, which is what makes the observation more than an appreciation of a single verse.",
            "bn": "ইবনে কাসীর এটিকে দেখেন ইচ্ছাকৃত ভাষিক ভদ্রতা হিসেবে। তিনি লেখেন, ইবরাহীম (আঃ) রোগাক্রান্ত হওয়ার সম্বন্ধ করেছেন নিজের দিকে আর আরোগ্যের সম্বন্ধ করেছেন আল্লাহর দিকে, অথচ রোগও আল্লাহরই নির্ধারণ ও সৃষ্টি। এরপর তিনি আরও দুটি জায়গার দিকে ইঙ্গিত করেন যেখানে কুরআন একই রীতিতে কথা বলে — আর এ কারণেই পর্যবেক্ষণটি কেবল একটি আয়াতের সৌন্দর্য উপভোগ করার চেয়ে বেশি কিছু।"
          },
          {
            "en": "The first is Surah al-Fatiha. 1:7 attributes the favour directly, those upon whom You have bestowed favour, while the anger is named without an agent, those who have earned anger. The second is 72:10, where the jinn say they do not know whether evil is intended for those on earth or whether their Lord intends for them a right course. The right course is attributed; the evil is left unattached.",
            "bn": "প্রথমটি সূরা আল-ফাতিহা। 1:7 অনুগ্রহের সম্বন্ধ সরাসরি করে — যাদের ওপর আপনি অনুগ্রহ করেছেন; অথচ গযবের কথা বলা হয় কর্তার নাম না নিয়ে — যারা গযবপ্রাপ্ত। দ্বিতীয়টি 72:10, যেখানে জিনরা বলে, তারা জানে না পৃথিবীবাসীর জন্য অকল্যাণ চাওয়া হয়েছে, নাকি তাদের প্রতিপালক তাদের জন্য সঠিক পথ চান। সঠিক পথের সম্বন্ধ করা হয়েছে; অকল্যাণকে কারও সঙ্গে জোড়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Is Not Denying",
          "bn": "আয়াতটি যা অস্বীকার করছে না"
        },
        "p": [
          {
            "en": "The sentence names who cures. It does not say that there is nothing to be done. Al-Bukhari relates from Abu Hurayrah (RA) that the Prophet ﷺ said Allah has not sent down a disease except that He has sent down a cure for it, which is an instruction to go and look for the cure. And where the Quran describes healing at a creature's hands, in 3:49 and again in 5:110, it attaches the permission of Allah in the same breath.",
            "bn": "বাক্যটি বলে দেয় কে আরোগ্য দেন। এটি বলে না যে করার মতো কিছু নেই। ইমাম বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, আল্লাহ এমন কোনো রোগ নাযিল করেননি যার জন্য তিনি আরোগ্যও নাযিল করেননি — এটি তো আরোগ্য খুঁজে বের করারই নির্দেশ। আর কুরআন যেখানে কোনো সৃষ্টির হাতে আরোগ্যের বর্ণনা দেয় — 3:49-এ, আবার 5:110-এ — সেখানে একই নিঃশ্বাসে 'আল্লাহর অনুমতিক্রমে' কথাটি জুড়ে দেয়।"
          },
          {
            "en": "So the verse sorts causes rather than abolishing them. Medicine, surgery, rest and a competent doctor are the means through which the cure named here arrives, and pursuing them is not a lapse in tawakkul. What the verse rules out is the quiet transfer of confidence from the One who cures to the thing He cures through, which usually happens without anybody deciding on it.",
            "bn": "অর্থাৎ আয়াতটি উপায়-উপকরণ বাতিল করে না, বরং সেগুলোকে সাজিয়ে দেয়। ওষুধ, অস্ত্রোপচার, বিশ্রাম ও দক্ষ চিকিৎসক — এগুলোই সেই মাধ্যম যার ভেতর দিয়ে এখানে উল্লেখিত আরোগ্য এসে পৌঁছায়, আর এগুলোর পেছনে ছোটা তাওয়াক্কুলের ঘাটতি নয়। আয়াতটি যা বাতিল করে তা হলো নিঃশব্দে ভরসাটিকে সরিয়ে নেওয়া — যিনি আরোগ্য দেন তাঁর কাছ থেকে সেই জিনিসের দিকে যার মাধ্যমে তিনি আরোগ্য দেন; আর এটি সাধারণত ঘটে কারও সিদ্ধান্ত ছাড়াই।"
          }
        ]
      },
      {
        "h": {
          "en": "Saying It in the Ward",
          "bn": "হাসপাতালের ঘরে কথাটি বলা"
        },
        "p": [
          {
            "en": "The grammar carries one last piece of comfort. Ibrahim (AS) does not say if I fall ill; he says when. The Arabic idha is used of what is expected rather than of what merely might occur, so illness enters his description of a well-ordered life as a normal event and not as an interruption of one. That alone changes how a diagnosis is heard.",
            "bn": "ব্যাকরণটি শেষ একটি সান্ত্বনাও বহন করে। ইবরাহীম (আঃ) বলেন না 'যদি আমি অসুস্থ হই'; তিনি বলেন 'যখন'। আরবি 'ইযা' ব্যবহৃত হয় প্রত্যাশিত বিষয়ের ক্ষেত্রে, নিছক ঘটতে পারে এমন কিছুর ক্ষেত্রে নয়; ফলে সুবিন্যস্ত এক জীবনের বর্ণনায় অসুস্থতা ঢোকে স্বাভাবিক ঘটনা হিসেবে, সেই জীবনের ব্যাঘাত হিসেবে নয়। কেবল এটুকুই বদলে দেয় কোনো রোগনির্ণয় কীভাবে শোনা যাবে।"
          },
          {
            "en": "And the whole passage is in the first person. It is not a doctrine about illness in general but a man saying aloud what he knows about his own Lord, in front of people who disagreed with him. Said in a hospital corridor, four words in Arabic, the sentence does the same work it did then: it puts the illness on one side, and the One who cures on the other.",
            "bn": "আর গোটা অনুচ্ছেদটি উত্তম পুরুষে। এটি সাধারণভাবে অসুস্থতা নিয়ে কোনো মতবাদ নয়, বরং একজন মানুষের উচ্চস্বরে বলা কথা — নিজের প্রতিপালক সম্পর্কে সে যা জানে, তা-ই বলছে, এমন মানুষদের সামনে যারা তার সঙ্গে একমত ছিল না। হাসপাতালের করিডোরে বলা হলেও, আরবিতে চারটি শব্দের এই বাক্যটি সেদিনকার কাজটিই করে: অসুস্থতাকে এক পাশে রাখে, আর যিনি আরোগ্য দেন তাঁকে অন্য পাশে।"
          }
        ]
      }
    ]
  },
  "26:83-85": {
    "sections": [
      {
        "h": {
          "en": "After the Argument, the Asking",
          "bn": "তর্কের পর প্রার্থনা"
        },
        "p": [
          {
            "en": "Surah ash-Shu'ara tells the story of Ibrahim (AS) from 26:69, where the Prophet ﷺ is told to recite his news. He questions his people about what they worship, they answer that they found their fathers doing so, and he turns from arguing with them to describing his Lord — the One who created me and guides me, who feeds me and gives me drink, and who cures me when I am ill.",
            "bn": "সূরা আশ-শুআরা ইবরাহীম (আঃ)-এর ঘটনা শুরু করে 26:69 থেকে, যেখানে নবী ﷺ-কে তাঁর বৃত্তান্ত পাঠ করে শোনাতে বলা হয়। তিনি তাঁর সম্প্রদায়কে প্রশ্ন করেন, তারা কীসের ইবাদত করে; তারা উত্তর দেয়, তারা তাদের পূর্বপুরুষদের এমনটাই করতে পেয়েছে। এরপর তিনি তাদের সঙ্গে তর্ক থেকে সরে এসে নিজের প্রতিপালকের বর্ণনা দেন — যিনি আমাকে সৃষ্টি করেছেন ও পথ দেখান, যিনি আমাকে খাওয়ান ও পান করান, আর অসুস্থ হলে যিনি আমাকে সুস্থ করেন।"
          },
          {
            "en": "The description keeps climbing until 26:81-82, where he says that his Lord will cause him to die and then give him life, and that he hopes for forgiveness of his fault on the Day of Recompense. Only then does he ask for anything. The sequence is the lesson before the content: he establishes who is being addressed, at length and in public, and the petitions come afterwards.",
            "bn": "বর্ণনাটি উঠতে থাকে 26:81-82 পর্যন্ত, যেখানে তিনি বলেন, তাঁর প্রতিপালকই তাঁর মৃত্যু ঘটাবেন, তারপর তাঁকে জীবিত করবেন; আর তিনি আশা করেন, বিচার দিবসে তাঁর ত্রুটি ক্ষমা করা হবে। ঠিক এরপরেই তিনি কিছু চান। ক্রমটিই বিষয়বস্তুর আগের শিক্ষা: তিনি প্রথমে দীর্ঘভাবে ও প্রকাশ্যে স্থির করে নেন কাকে সম্বোধন করা হচ্ছে, আর আবেদনগুলো আসে তার পরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Grant Me Hukm",
          "bn": "আমাকে হুকম দাও"
        },
        "p": [
          {
            "en": "The first request is rabbi hab li hukman. Translators part company here: the app's English renders hukm as authority, its Bengali as wisdom, and other renderings give sound judgement. The early commentators split the same way. Ibn Kathir reports Ibn Abbas (RA) glossing hukm as knowledge, Ikrimah as intellect, Mujahid as the Quran, and as-Suddi as prophethood.",
            "bn": "প্রথম চাওয়াটি হলো রাব্বি হাব লী হুকমান। অনুবাদকেরা এখানে ভিন্ন পথে যান: অ্যাপের ইংরেজিতে হুকম অনূদিত হয়েছে কর্তৃত্ব হিসেবে, বাংলায় প্রজ্ঞা হিসেবে, আর অন্যান্য অনুবাদে সুবিবেচনা হিসেবে। প্রাচীন মুফাসসিরগণও একইভাবে ভাগ হয়েছেন। ইবনে কাসীর উদ্ধৃত করেন, ইবনে আব্বাস (রাঃ) হুকম-এর ব্যাখ্যা করেছেন জ্ঞান বলে, ইকরিমা বলেছেন বিবেক, মুজাহিদ বলেছেন কুরআন, আর সুদ্দী বলেছেন নবুওয়াত।"
          },
          {
            "en": "What the readings share is that hukm is an inward equipment rather than an outward possession. It is the capacity to weigh a matter and come down in the right place, whether that capacity is called knowledge, reason or revelation. Ibrahim (AS) asks for it first, before reputation and before Paradise, because the two requests that follow both depend on judging rightly in the years between.",
            "bn": "সব ব্যাখ্যায় যা অভিন্ন, তা হলো — হুকম বাইরের কোনো সম্পদ নয়, ভেতরের সরঞ্জাম। এটি হলো কোনো বিষয় ওজন করে সঠিক জায়গায় স্থির হওয়ার ক্ষমতা, সেই ক্ষমতাকে জ্ঞান বলুন, বিবেক বলুন, কিংবা ওহী বলুন। ইবরাহীম (আঃ) এটিই আগে চান — সুনামের আগে, জান্নাতের আগে; কারণ পরের দুটি চাওয়াই নির্ভর করে মাঝখানের বছরগুলোতে সঠিক বিচার করার ওপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Attach Me to the Righteous",
          "bn": "সৎকর্মশীলদের সঙ্গে যুক্ত করো"
        },
        "p": [
          {
            "en": "Wa alhiqni bis-salihin. The verb alhaqa means to attach one thing to another, to make someone catch up with a party already moving. He does not ask to be counted better than the righteous, or to lead them; he asks to be joined on. Ibn Kathir explains the request as asking to be made one of the righteous in this world and in the Hereafter, not only at the end.",
            "bn": "ওয়া আলহিকনী বিস-সালিহীন। 'আলহাকা' ক্রিয়ার অর্থ এক জিনিসকে আরেকটির সঙ্গে জুড়ে দেওয়া, কাউকে আগে থেকেই চলতে থাকা কাফেলার সঙ্গে মিলিয়ে দেওয়া। তিনি সৎকর্মশীলদের চেয়ে উত্তম গণ্য হতে চান না, তাদের নেতৃত্বও চান না; তিনি চান তাদের সঙ্গে জুড়ে যেতে। ইবনে কাসীর ব্যাখ্যা করেন, আবেদনটি হলো দুনিয়া ও আখিরাত — উভয় জায়গাতেই সৎকর্মশীলদের একজন হওয়ার, কেবল শেষে নয়।"
          },
          {
            "en": "This exact clause occurs twice in the Quran and nowhere else. It is here, in Ibrahim's (AS) prayer, and it is the last thing Yusuf (AS) says in 12:101, spoken from the height of authority in Egypt. Two prophets separated by generations and circumstances place the same clause in their recorded supplications, asking not for a rank but for a company.",
            "bn": "এই হুবহু বাক্যাংশটি কুরআনে দুইবার এসেছে, আর কোথাও নয়। একবার এখানে, ইবরাহীম (আঃ)-এর দোয়ায়; আর একবার 12:101-এ, যা ইউসুফ (আঃ)-এর শেষ উক্তি — মিসরের ক্ষমতার শীর্ষ থেকে বলা। প্রজন্ম ও পরিস্থিতির ব্যবধানে দাঁড়ানো দুই নবী তাঁদের লিপিবদ্ধ দোয়ায় একই বাক্যাংশ রাখেন — কোনো মর্যাদা নয়, একটি সঙ্গ চেয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Tongue of Truth Afterwards",
          "bn": "পরবর্তীদের মাঝে সত্যভাষ"
        },
        "p": [
          {
            "en": "The second verse asks for lisana sidqin fil-akhirin, literally a tongue of truthfulness among the later ones. The app's English reads it as a mention of honour, its Bengali as being truthful among those who come after; both senses live in the phrase. Ibn Kathir explains it as asking to be remembered well after death, so that people speak of him and take him as a good example.",
            "bn": "দ্বিতীয় আয়াতে চাওয়া হয় লিসানা সিদকিন ফিল-আখিরীন — আক্ষরিক অর্থে পরবর্তীদের মধ্যে সত্যতার এক ভাষা। অ্যাপের ইংরেজিতে এটি এসেছে সম্মানজনক স্মরণ হিসেবে, বাংলায় এসেছে পরবর্তীদের মধ্যে সত্যভাষী হওয়া হিসেবে; দুটি অর্থই বাক্যাংশটির ভেতরে আছে। ইবনে কাসীর ব্যাখ্যা করেন, এটি মৃত্যুর পর ভালোভাবে স্মরণীয় হওয়ার আবেদন — যাতে মানুষ তাঁর কথা বলে এবং তাঁকে উত্তম আদর্শ হিসেবে গ্রহণ করে।"
          },
          {
            "en": "The phrase occurs in two verses of the Quran. The other is 19:50, where Allah says of Ibrahim (AS) and those given after him that He granted them of His mercy and made for them a lofty tongue of truth, rendered there as a mention of high honour. What was asked in one surah is recorded as given in another, and 37:108-109 shows its form: We left for him among the later generations, peace upon Ibrahim.",
            "bn": "বাক্যাংশটি কুরআনের দুটি আয়াতে এসেছে। অন্যটি 19:50, যেখানে আল্লাহ ইবরাহীম (আঃ) ও তাঁর পরে দেওয়া বংশধরদের সম্পর্কে বলেন, তিনি তাঁদের নিজের রহমত থেকে দান করেছেন এবং তাঁদের জন্য সত্যের এক সুউচ্চ ভাষা রেখে দিয়েছেন — যা সেখানে অনূদিত হয়েছে সুউচ্চ সুখ্যাতি হিসেবে। এক সূরায় যা চাওয়া হয়েছিল, আরেক সূরায় তা দেওয়া হয়েছে বলে লেখা আছে; আর 37:108-109 দেখায় তার রূপ: আমি তাঁর জন্য পরবর্তীদের মাঝে রেখে দিলাম — ইবরাহীমের ওপর শান্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Inheriting a Garden",
          "bn": "জান্নাতের উত্তরাধিকার"
        },
        "p": [
          {
            "en": "The third verse asks to be made min warathati jannat an-na'im, one of the inheritors of the Garden of Delight. Inheritance is a strange word for Paradise, since an inheritor receives what was never his by earning. The Quran keeps the word deliberately: 23:10-11 calls the successful ones the inheritors, those who will inherit al-Firdaws and abide there.",
            "bn": "তৃতীয় আয়াতে চাওয়া হয় মিন ওয়ারাসাতি জান্নাতিন নাঈম — নিয়ামতপূর্ণ জান্নাতের উত্তরাধিকারীদের একজন হওয়া। জান্নাতের জন্য 'উত্তরাধিকার' শব্দটি অদ্ভুত, কারণ উত্তরাধিকারী এমন কিছু পায় যা উপার্জন করে তার হয়নি। কুরআন শব্দটি ইচ্ছা করেই ধরে রাখে: 23:10-11 সফলদের বলে উত্তরাধিকারী — যারা ফিরদাউসের উত্তরাধিকার পাবে এবং সেখানে চিরকাল থাকবে।"
          },
          {
            "en": "The word also keeps two truths in balance that are easy to separate. 7:43 has the people of the Garden told that they were made to inherit it for what they used to do, and in the same verse they say they would never have been guided had Allah not guided them. Deeds matter and do not purchase; the estate is entered by grant, and the grant is not arbitrary.",
            "bn": "শব্দটি এমন দুটি সত্যকেও ভারসাম্যে রাখে, যা আলাদা করে ফেলা সহজ। 7:43-এ জান্নাতবাসীদের বলা হয়, তারা যা করত তার ফলেই তাদের এর উত্তরাধিকারী করা হয়েছে; আর একই আয়াতে তারা বলে, আল্লাহ পথ না দেখালে তারা কখনোই পথ পেত না। আমল গুরুত্বপূর্ণ, অথচ আমল দিয়ে কেনা যায় না; সম্পত্তিতে প্রবেশ ঘটে দান হিসেবে, আর সেই দান খেয়ালখুশির নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Imperatives, One Direction",
          "bn": "চারটি আদেশবাচক, এক দিক"
        },
        "p": [
          {
            "en": "Across these three verses there are four imperatives: grant me, join me, make for me, and make me. Set them in order and they map a life forwards. Hukm is for now, the years in which decisions are made. The company of the righteous is for now and after. The truthful tongue is for after he is gone. The Garden is for what has no after.",
            "bn": "এই তিন আয়াতে আদেশবাচক ক্রিয়া আছে চারটি: আমাকে দাও, আমাকে যুক্ত করো, আমার জন্য করো, আর আমাকে বানাও। ক্রম অনুসারে সাজালে এগুলো একটি জীবনকে সামনের দিকে এঁকে দেয়। হুকম এখনকার জন্য — যে বছরগুলোতে সিদ্ধান্ত নিতে হয়। সৎকর্মশীলদের সঙ্গ এখনকার ও পরের জন্য। সত্যভাষ তাঁর চলে যাওয়ার পরের জন্য। আর জান্নাত সেই সময়ের জন্য, যার কোনো 'পরে' নেই।"
          },
          {
            "en": "Read as a model for our own asking, the striking thing is what is absent. Nothing here is requested about safety, wealth, victory over the people he had just argued with, or the outcome of any project. A man in the middle of open conflict asks for equipment, company, a good name afterwards and a good end. That is the whole of these three verses.",
            "bn": "নিজেদের চাওয়ার আদর্শ হিসেবে পড়লে সবচেয়ে চোখে পড়ে যা নেই, সেটিই। নিরাপত্তা, সম্পদ, যাদের সঙ্গে তিনি সবে তর্ক করলেন তাদের ওপর বিজয়, কিংবা কোনো কাজের ফলাফল — এর কোনোটি নিয়েই এখানে কিছু চাওয়া হয়নি। প্রকাশ্য সংঘাতের মাঝখানে দাঁড়ানো একজন মানুষ চান সরঞ্জাম, সঙ্গ, চলে যাওয়ার পরে ভালো নাম, আর উত্তম পরিণতি। এই তিন আয়াতের তালিকা এটুকুই।"
          }
        ]
      }
    ]
  },
  "26:88-89": {
    "sections": [
      {
        "h": {
          "en": "The Summit of a Prophet's Prayer",
          "bn": "এক নবীর দু'আর চূড়া"
        },
        "p": [
          {
            "en": "In Surah ash-Shu'ara, Ibrahim (AS) first describes his Lord — who created me and guides me, who feeds me and gives me drink, who will cause me to die and bring me to life — and then turns to ask. The prayer runs through 26:83-87 and its petitions include sound judgement and the company of the righteous, a truthful tongue among later generations, inheritance of the Garden of Delight, and that he not be disgraced on the Day all are raised. Then 26:88-89 continue his words, describing that very Day.",
            "bn": "সূরা আশ-শু'আরায় ইবরাহীম (আঃ) প্রথমে তাঁর রবের পরিচয় দেন — যিনি আমাকে সৃষ্টি করেছেন ও পথ দেখান, যিনি আমাকে খাওয়ান ও পান করান, যিনি আমার মৃত্যু ঘটাবেন ও আবার জীবিত করবেন — তারপর চাইতে শুরু করেন। দু'আটি চলে 26:83-87 আয়াতজুড়ে, আর তার প্রার্থনাগুলোর মধ্যে আছে: সঠিক বিচারবোধ ও সৎকর্মশীলদের সাহচর্য, পরবর্তী প্রজন্মগুলোর মাঝে সত্যভাষী জিহ্বা, নিয়ামতে ভরা জান্নাতের উত্তরাধিকার, আর সবাইকে ওঠানোর দিনে যেন তাঁকে লাঞ্ছিত না করা হয়। এরপর 26:88-89 আয়াতে তাঁরই কথা চলতে থাকে — ঠিক সেই দিনটির বিবরণ দিয়ে।"
          },
          {
            "en": "The placement matters. These two verses are not a detached description of the Judgement; they are the summit of a prophet's supplication, the reason behind his final request. Ibrahim (AS) asks not to be disgraced on that Day and immediately defines the Day by what fails on it and what succeeds. Whoever wants to know what to ask of Allah can study what the father of prophets asked when he reached the end of his prayer.",
            "bn": "অবস্থানটিই তাৎপর্যপূর্ণ। এই দুটি আয়াত কিয়ামতের কোনো বিচ্ছিন্ন বিবরণ নয়; এগুলো এক নবীর মুনাজাতের চূড়া — তাঁর শেষ প্রার্থনাটির পেছনের কারণ। ইবরাহীম (আঃ) চান, সেই দিনে তাঁকে যেন লাঞ্ছিত না করা হয়, আর সঙ্গে সঙ্গেই দিনটির সংজ্ঞা দেন — কী সেদিন ব্যর্থ হয়, আর কী সফল হয় তা দিয়ে। আল্লাহর কাছে কী চাইতে হয় জানতে চাইলে দেখা যেতে পারে, নবীদের পিতা তাঁর দু'আর শেষ প্রান্তে পৌঁছে কী চেয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Two Securities That Fail",
          "bn": "যে দুই নিরাপত্তা ব্যর্থ হয়"
        },
        "p": [
          {
            "en": "Wealth and children — mal and banun — are precisely the pair the Quran elsewhere names as this world's ornament: 18:46 calls wealth and children the adornment of the life of this world, before weighing them against lasting righteous deeds. They are also humanity's two oldest instincts of safety: resources against want, and heirs against being erased. The verse does not choose obscure examples of what fails on that Day; it names the two strongest things people actually lean on.",
            "bn": "সম্পদ ও সন্তান — মাল ও বানূন — ঠিক সেই জুটি, যাকে কুরআন অন্যত্র এই দুনিয়ার অলংকার বলেছে: 18:46 আয়াত সম্পদ ও সন্তানকে পার্থিব জীবনের শোভা বলে, তারপর স্থায়ী সৎকর্মের সঙ্গে তাদের ওজন করে। এ দুটি মানুষের নিরাপত্তার দুই প্রাচীনতম প্রবৃত্তিও: অভাবের বিরুদ্ধে সম্পদ, আর মুছে যাওয়ার বিরুদ্ধে উত্তরসূরি। সেদিন কী ব্যর্থ হবে তার জন্য আয়াতটি কোনো অখ্যাত উদাহরণ বাছেনি; নাম নিয়েছে সেই দুটি সবচেয়ে শক্ত জিনিসের, যার ওপর মানুষ সত্যিই ভর দেয়।"
          },
          {
            "en": "The Quran lets us hear the discovery in the first person. In 69:28-29 a man on that Day cries: my wealth has not availed me; my authority has perished from me. And 3:10 states the rule for those who disbelieved: neither their wealth nor their children will avail them against Allah at all. The verses in Ibrahim's (AS) prayer say the same thing beforehand and most gently — as counsel before the fact rather than a cry after it.",
            "bn": "কুরআন আমাদের সেই আবিষ্কার শোনায় উত্তম-পুরুষে। 69:28-29 আয়াতে সেদিন এক ব্যক্তি হাহাকার করে: আমার সম্পদ আমার কোনো কাজে এল না; আমার ক্ষমতা আমার থেকে বিলুপ্ত হয়ে গেছে। আর 3:10 আয়াত কাফিরদের জন্য নিয়মটি ঘোষণা করে: আল্লাহর মোকাবিলায় তাদের সম্পদ ও সন্তান কোনোই কাজে আসবে না। ইবরাহীম (আঃ)-এর দু'আর আয়াত দুটি একই কথা বলে আগেভাগে এবং সবচেয়ে কোমলভাবে — ঘটনার পরের আর্তনাদ হিসেবে নয়, ঘটনার আগের উপদেশ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sound Heart",
          "bn": "বিশুদ্ধ হৃদয়"
        },
        "p": [
          {
            "en": "The exception is illa man ata Allaha bi-qalbin salim — except one who comes to Allah with a sound heart. Salim is an adjective from the root of salima, to be safe and whole: a heart intact, undiseased, unbroken by what corrupts hearts. At-Tabari relates from early authorities that it is the heart safe from shirk, testifying that there is no god but Allah. As-Sa'di widens the description: safe from shirk, from doubt, and from the love of evil — settled instead in certainty and the love of good.",
            "bn": "ব্যতিক্রমটি হলো ইল্লা মান আতাল্লাহা বিকালবিন সালীম — কেবল সে ছাড়া, যে আল্লাহর কাছে আসে বিশুদ্ধ হৃদয় নিয়ে। সালীম শব্দটি সালিমা মূল থেকে আসা বিশেষণ — নিরাপদ ও অক্ষত থাকা: এমন হৃদয় যা অটুট, ব্যাধিমুক্ত, হৃদয়কে যা কলুষিত করে তাতে ভাঙেনি। আত-তাবারী প্রাচীন ইমামদের থেকে বর্ণনা করেন, এটি শিরক থেকে নিরাপদ হৃদয় — যে সাক্ষ্য দেয়, আল্লাহ ছাড়া কোনো ইলাহ নেই। আস-সা'দী বিবরণটি প্রশস্ত করেন: শিরক থেকে, সংশয় থেকে এবং মন্দের ভালোবাসা থেকে নিরাপদ — বদলে যা স্থিত হয়েছে ইয়াকীনে ও কল্যাণের ভালোবাসায়।"
          },
          {
            "en": "Notice what the verse measures. Not the sound body, though we spend fortunes on it; not the sound reputation or portfolio. The heart is the one organ whose condition travels across death, and its soundness is defined against tawhid first, because shirk is the disease that Day exposes absolutely. Worship, knowledge, and struggle all serve, in the end, one purpose here: returning the heart whole to the One who first gave it whole.",
            "bn": "লক্ষ করুন, আয়াতটি কী মাপে। সুস্থ শরীর নয় — যদিও তার পেছনে আমরা বিপুল অর্থ ঢালি; সুনাম বা সম্পদের খাতাও নয়। হৃদয়ই একমাত্র অঙ্গ, যার অবস্থা মৃত্যু পেরিয়ে সঙ্গে যায়; আর তার বিশুদ্ধতার সংজ্ঞা প্রথমে তাওহীদের নিরিখে — কারণ শিরকই সেই ব্যাধি, যা সেদিন সম্পূর্ণ উন্মোচিত হয়। ইবাদত, জ্ঞান ও সংগ্রাম — সবই এখানে শেষ বিচারে একটি উদ্দেশ্যে কাজ করে: হৃদয়টিকে অক্ষত অবস্থায় তাঁর কাছে ফিরিয়ে দেওয়া, যিনি প্রথমে সেটি অক্ষতই দিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Only Other Place",
          "bn": "একমাত্র অন্য জায়গাটি"
        },
        "p": [
          {
            "en": "The phrase qalb salim occurs in exactly one other verse of the Quran. In 37:84 it is said of Ibrahim (AS) himself: when he came to his Lord with a sound heart. The one who taught the standard in his prayer is the one whom Allah testifies met it. This is the Quran's quiet way of certifying a teacher — the definition of success on the Last Day is voiced by a man whose own heart is described with the very same words.",
            "bn": "কালব সালীম শব্দবন্ধটি কুরআনের ঠিক আর একটি আয়াতেই আছে। 37:84 আয়াতে তা বলা হয়েছে স্বয়ং ইবরাহীম (আঃ) সম্পর্কে: যখন তিনি তাঁর রবের কাছে এলেন বিশুদ্ধ হৃদয় নিয়ে। যিনি নিজের দু'আয় মানদণ্ডটি শেখালেন, আল্লাহ সাক্ষ্য দিলেন — তিনিই তা পূরণ করেছেন। এ হলো শিক্ষককে প্রত্যয়িত করার কুরআনের নীরব পদ্ধতি — শেষ দিনের সাফল্যের সংজ্ঞা উচ্চারণ করছেন এমন একজন মানুষ, যাঁর নিজের হৃদয়ের বর্ণনায় ব্যবহৃত হয়েছে হুবহু সেই শব্দগুলোই।"
          }
        ]
      },
      {
        "h": {
          "en": "What Allah Looks At",
          "bn": "আল্লাহ যা দেখেন"
        },
        "p": [
          {
            "en": "Muslim relates from Abu Hurairah (RA) that the Prophet ﷺ said: Allah does not look at your forms and your wealth, but He looks at your hearts and your deeds. The pairing is the verse's pairing — form and wealth are what people measure; the heart is what the Maker measures. The gaze of Allah passes straight through everything the Day will strip away, and rests on the thing the Day will weigh.",
            "bn": "মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ তোমাদের আকৃতি ও সম্পদের দিকে তাকান না, বরং তাকান তোমাদের হৃদয় ও আমলের দিকে। এই জুটি আয়াতেরই জুটি — আকৃতি ও সম্পদ মাপে মানুষ; হৃদয় মাপেন স্রষ্টা। আল্লাহর দৃষ্টি সোজা ভেদ করে যায় সেসব কিছু, যা সেদিন খসে পড়বে — আর স্থির হয় সেই জিনিসটির ওপর, যা সেদিন ওজন করা হবে।"
          },
          {
            "en": "The hadith adds deeds to hearts, and the addition guards against a mistake. A sound heart is not a private mood detached from behavior; in the Quran and Sunnah the heart drives the limbs, and its soundness shows in what the hands do and the tongue says. Claiming a clean heart while living an unclean life inverts the order. The heart certified in 37:84 belonged to a man who left his people for Allah, faced the fire, and offered his son when commanded.",
            "bn": "হাদীসটি হৃদয়ের সঙ্গে আমল যোগ করে, আর এই যোগ একটি ভুল থেকে রক্ষা করে। বিশুদ্ধ হৃদয় আচরণ থেকে বিচ্ছিন্ন কোনো ব্যক্তিগত মেজাজ নয়; কুরআন ও সুন্নাহয় হৃদয়ই অঙ্গ-প্রত্যঙ্গ চালায়, আর তার বিশুদ্ধতা ধরা পড়ে হাত কী করে ও জিহ্বা কী বলে তাতে। অপরিচ্ছন্ন জীবন যাপন করে পরিচ্ছন্ন হৃদয়ের দাবি করা ক্রমটাই উল্টে দেওয়া। 37:84 আয়াতে প্রত্যয়িত হৃদয়টি ছিল এমন এক মানুষের, যিনি আল্লাহর জন্য নিজের জাতি ছেড়েছেন, আগুনের মুখোমুখি হয়েছেন, আর আদেশ পেয়ে নিজের পুত্রকে কুরবানির জন্য পেশ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Investing Where It Counts",
          "bn": "যেখানে গণ্য হবে সেখানে বিনিয়োগ"
        },
        "p": [
          {
            "en": "The verses reorder a lifetime's budget. Most effort flows toward what will not cross the line — accumulating, upgrading, securing — while the one asset that crosses is often left untended. Tadabbur here is an audit: what portion of an ordinary week directly tends the heart? The verse does not condemn wealth or children; Ibrahim (AS) had wealth and prayed for righteous offspring. It denies that they, of themselves, can save. They stay behind, while the heart travels on.",
            "bn": "আয়াত দুটি গোটা জীবনের বাজেট নতুন করে সাজায়। বেশির ভাগ পরিশ্রম বয়ে যায় সেদিকে, যা সীমানা পার হবে না — জমানো, বাড়ানো, নিরাপদ করা — অথচ যে একটিমাত্র সম্পদ পার হয়, সেটিই প্রায়ই অযত্নে পড়ে থাকে। এখানে তাদাব্বুর মানে এক নিরীক্ষা: সাধারণ এক সপ্তাহের কতটুকু অংশ সরাসরি হৃদয়ের যত্নে যায়? আয়াতটি সম্পদ বা সন্তানকে নিন্দা করে না; ইবরাহীম (আঃ)-এর সম্পদ ছিল এবং তিনি সৎ সন্তানের জন্য দু'আ করেছেন। আয়াতটি অস্বীকার করে যে এগুলো নিজে থেকে বাঁচাতে পারে। এগুলো পেছনে থেকে যায়, আর হৃদয় এগিয়ে চলে।"
          },
          {
            "en": "Practical heart-work follows the definitions the commentators gave: uproot shirk in its open and subtle forms, including the hunger to be seen; resolve doubt with knowledge rather than letting it fester; and starve rancor, envy, and the love of harm. None of this is done once. A heart is kept sound the way anything living is kept sound — fed, guarded, and examined regularly — with the prayer of Ibrahim (AS) as the standing model of where it must arrive.",
            "bn": "হৃদয়ের ব্যবহারিক কাজ মুফাসসিরগণের দেওয়া সংজ্ঞাগুলোকেই অনুসরণ করে: শিরককে তার প্রকাশ্য ও সূক্ষ্ম রূপে উপড়ে ফেলা — দেখা হওয়ার ক্ষুধাটিসহ; সংশয়কে পুষতে না দিয়ে জ্ঞান দিয়ে মীমাংসা করা; আর বিদ্বেষ, হিংসা ও ক্ষতির ভালোবাসাকে না খাইয়ে মারা। এর কোনোটিই একবারে সারা যায় না। হৃদয়কে বিশুদ্ধ রাখা হয় ঠিক যেভাবে যেকোনো জীবন্ত জিনিসকে সুস্থ রাখা হয় — নিয়মিত খাওয়ানো, পাহারা দেওয়া ও পরীক্ষা করা — আর কোথায় পৌঁছাতে হবে তার স্থায়ী নমুনা হয়ে থাকে ইবরাহীম (আঃ)-এর দু'আ।"
          }
        ]
      }
    ]
  }
});
