/**
 * Tadabbur long-form articles — surah 93.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "93:3-5": {
    "sections": [
      {
        "h": {
          "en": "When the Revelation Paused",
          "bn": "ওহি যখন থেমে গিয়েছিল"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Jundub ibn Sufyan (RA) that the Prophet ﷺ was unwell and did not stand in night prayer for a night or two; a woman came and said, O Muhammad, I hope that your shaytan has left you. Then Allah revealed the opening of this surah: by the morning brightness, and by the night when it grows still, your Lord has not forsaken you, nor does He hate. A taunt about abandonment was answered from above the seven heavens.",
            "bn": "বুখারী জুনদুব ইবনে সুফইয়ান (রাঃ) থেকে বর্ণনা করেছেন: নবী ﷺ অসুস্থ ছিলেন, তাই এক-দুই রাত রাতের নামাজে দাঁড়াননি। তখন এক নারী এসে বলল, হে মুহাম্মাদ, আশা করি তোমার শয়তান তোমাকে ছেড়ে গেছে। এরপর আল্লাহ এই সূরার শুরুর অংশ নাজিল করলেন: শপথ পূর্বাহ্নের আলোর, শপথ রাতের, যখন তা নিস্তব্ধ হয়ে আসে; তোমার রব তোমাকে ছেড়ে যাননি, ঘৃণাও করেন না। ছেড়ে যাওয়ার খোঁটার জবাব এল সাত আসমানের ওপর থেকে।"
          },
          {
            "en": "The pause in revelation had weighed on him ﷺ before any taunt named it. The commentators read the surah as consolation shaped exactly to that weight: the gap in revelation felt like silence, and silence can be read as displeasure. The answer does not merely resume revelation; it addresses the fear itself, in the second person, with an oath sworn by Allah — the strongest register the language has — that the fear is false.",
            "bn": "কেউ খোঁটা দেওয়ার আগেই ওহি থেমে থাকার কষ্ট তাঁর ﷺ মনে ভারী হয়ে বসেছিল। মুফাসসিরগণ বলেন, সূরাটি ঠিক সেই কষ্টের মাপে দেওয়া সান্ত্বনা। ওহির বিরতিটা নীরবতার মতো লাগছিল, আর নীরবতা দেখে মনে হতে পারে, আল্লাহ বুঝি অসন্তুষ্ট। জবাবটা শুধু ওহি আবার শুরু করে দেয় না, সেই ভয়টাকেই সরাসরি ধরে। আল্লাহ তাঁকে সামনাসামনি সম্বোধন করে শপথ করে বলছেন, আর ভাষায় শপথের চেয়ে জোরালো কথা হয় না: এই ভয় ভিত্তিহীন।"
          }
        ]
      },
      {
        "h": {
          "en": "Oaths of Light and Stillness",
          "bn": "আলো ও স্তব্ধতার শপথ"
        },
        "p": [
          {
            "en": "The surah opens with two oaths: wad-duha, by the forenoon brightness, and wal-layli idha saja, by the night when it grows still. The commentators hear the oaths already answering the complaint they introduce: day and night are both His arrangement, and the night's stillness is not the death of the sun. Brightness and quiet alternate by design. So too revelation's presence and its pause — the interval was rhythm, not rejection, and the same Lord governs both halves of it.",
            "bn": "সূরাটি শুরু হয় দুটি শপথ দিয়ে: ওয়াদ-দুহা, শপথ পূর্বাহ্নের উজ্জ্বল আলোর; আর ওয়াল-লাইলি ইযা সাজা, শপথ রাতের, যখন তা নিস্তব্ধ হয়ে আসে। মুফাসসিরগণ বলেন, যে অভিযোগের জবাব দিতে শপথ দুটি আনা হয়েছে, সেই জবাব শপথের মধ্যেই শুরু হয়ে গেছে। দিন আর রাত দুটোই আল্লাহর সাজানো, আর রাত নিস্তব্ধ হলেই সূর্য মরে যায় না। আলো আর নীরবতা পালা করে আসে, তাঁরই নিয়মে। ওহির আসা আর থেমে থাকাও তেমনি। বিরতিটা ছিল ছন্দ, প্রত্যাখ্যান নয়; আর দুটো পালারই মালিক একই রব।"
          }
        ]
      },
      {
        "h": {
          "en": "Neither Left Nor Loathed",
          "bn": "ছেড়েও যাননি, ঘৃণাও করেননি"
        },
        "p": [
          {
            "en": "Ma wadda'aka rabbuka wa ma qala — your Lord has not bidden you farewell, nor does He hate. Wada' is the parting word of someone departing; the verb rules out even a courteous leaving. Then the commentators point to a tenderness in the grammar: qala, He does not hate, arrives with its object unstated. The Quran declines to attach the word you to the verb of hatred even inside a negation. The sentence denies the hatred but will not even spell out its direction.",
            "bn": "মা ওয়াদ্দা'আকা রাব্বুকা ওয়া মা কালা: তোমার রব তোমাকে বিদায় জানাননি, ঘৃণাও করেন না। ওয়াদা' হলো চলে যাওয়ার সময়কার বিদায়-সম্ভাষণ; এই ক্রিয়া ভদ্রভাবে বিদায় নিয়ে চলে যাওয়াটুকুও নাকচ করে দেয়। এরপর মুফাসসিরগণ ব্যাকরণের একটা কোমলতা দেখিয়ে দেন। 'কালা' মানে তিনি ঘৃণা করেন না, অথচ কাকে, তা বলা নেই। ঘৃণার ক্রিয়ার সঙ্গে কুরআন 'তোমাকে' শব্দটা জোড়েনি, না-বাচক বাক্যেও না। বাক্যটি ঘৃণাকে অস্বীকার করে, কিন্তু সেই ঘৃণা কার দিকে, সেটুকুও মুখে আনে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Later Is Better",
          "bn": "পরেরটাই উত্তম"
        },
        "p": [
          {
            "en": "93:4 lifts the eyes forward: and the akhirah is better for you than the ula, the later than the earlier. The commentators record both readings and keep them: the Hereafter is better for him ﷺ than this world; and each later stage of his affair is better than what preceded it. Read either way, the sentence is a promise of trajectory, and his ﷺ biography honored it — from concealment to open call, from persecution in Makkah to Madinah, from a lone voice to a community.",
            "bn": "৯৩:৪ দৃষ্টিকে সামনে নিয়ে যায়: আর আখিরাত তোমার জন্য ঊলার চেয়ে উত্তম, অর্থাৎ পরেরটা আগেরটার চেয়ে ভালো। মুফাসসিরগণ দুটি অর্থই উল্লেখ করেছেন এবং দুটিই রেখেছেন। এক, আখিরাত তাঁর ﷺ জন্য দুনিয়ার চেয়ে উত্তম। দুই, তাঁর কাজের প্রতিটি পরের ধাপ আগের ধাপের চেয়ে ভালো। যেভাবেই পড়ুন, আয়াতটি সামনে এগিয়ে চলার প্রতিশ্রুতি, আর তাঁর ﷺ জীবন সে কথা সত্য করে দেখিয়েছে: গোপন দাওয়াত থেকে প্রকাশ্য আহ্বান, মক্কার নির্যাতন থেকে মদীনা, একা এক কণ্ঠ থেকে গোটা এক উম্মাহ।"
          },
          {
            "en": "The promise also disciplines how a believer reads time. The earlier is not the standard the later must recover; the later is where the good is stored. That is the exact reverse of nostalgia, and it was said to a man ﷺ in his hardest years, before any worldly evidence supported it. Trusting a promised trajectory while the present argues against it is the surah's definition of hope.",
            "bn": "এই প্রতিশ্রুতি মুমিনকে সময়ের দিকে তাকানোর ধরনও শিখিয়ে দেয়। আগের দিনগুলো এমন কোনো মাপকাঠি নয় যে পরে সেটাকেই ফিরে পেতে হবে; কল্যাণ জমা আছে সামনের দিনেই। পুরোনো দিনের জন্য হাহুতাশ করার এ ঠিক উল্টো। আর কথাটি বলা হয়েছিল নবী ﷺ-কে, তাঁর সবচেয়ে কঠিন বছরগুলোতে, যখন দুনিয়ার কোনো প্রমাণ তখনো এর পক্ষে ছিল না। বর্তমান যখন উল্টো কথা বলছে, তখনও প্রতিশ্রুত পথের ওপর ভরসা রাখা: এই সূরার কাছে আশা মানে এটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Until You Are Pleased",
          "bn": "যতক্ষণ না আপনি সন্তুষ্ট"
        },
        "p": [
          {
            "en": "93:5 seals it: and your Lord will surely give you, and you will be pleased. The verb is left unbounded — no object limits what will be given. The commentators include within it the victory of the religion in his lifetime, and in the Hereafter his standing, the Hawd, and his interceding for his ummah until he is content. The verse dares to make his ﷺ contentment the measure of the giving: He will keep giving until you are pleased.",
            "bn": "৯৩:৫ কথাটি পাকা করে দেয়: আর অচিরেই তোমার রব তোমাকে দেবেন, আর তুমি সন্তুষ্ট হবে। কী দেবেন, তা বলা নেই; দানের কোনো সীমা টানা হয়নি। মুফাসসিরগণ এর মধ্যে ধরেন তাঁর জীবদ্দশায় দ্বীনের বিজয়, আর আখিরাতে তাঁর মর্যাদা, হাউজ, এবং উম্মতের জন্য তাঁর সুপারিশ, যতক্ষণ না তিনি সন্তুষ্ট হন। আয়াতটি অসাধারণ এক কথা বলে: তাঁর ﷺ সন্তুষ্টিই দানের মাপকাঠি। যতক্ষণ না তুমি সন্তুষ্ট হও, তিনি দিতেই থাকবেন।"
          },
          {
            "en": "The structure of the three verses is a staircase. First the denial of abandonment, clearing the fear; then the comparative promise, better than before; then the open-ended gift, until contentment. Consolation in the Quran does not stop at saying that things are not as bad as they seem; it climbs to a promise better than what was asked. The surah then proves the pattern from his own past — and turns it outward.",
            "bn": "তিন আয়াত মিলে যেন একটি সিঁড়ি। প্রথম ধাপ: তিনি ছেড়ে যাননি, তাই ভয়ের কিছু নেই। দ্বিতীয় ধাপ: তুলনার প্রতিশ্রুতি, আগের চেয়ে ভালো। তৃতীয় ধাপ: সীমাহীন দান, সন্তুষ্ট হওয়া পর্যন্ত। কুরআনের সান্ত্বনা শুধু এটুকু বলে থেমে যায় না যে অবস্থা যতটা খারাপ দেখাচ্ছে ততটা নয়; সে উঠে যায় এমন প্রতিশ্রুতিতে, যা চাওয়ার চেয়েও বেশি। এরপর সূরাটি তাঁর নিজের অতীত থেকেই এই ধারার প্রমাণ দেয়, তারপর সেই শিক্ষা অন্যদের দিকে ফিরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse for Dry Seasons",
          "bn": "খরার দিনের আয়াত"
        },
        "p": [
          {
            "en": "93:6-8 remind him ﷺ of three rescues already delivered: did He not find you an orphan and shelter you, wandering and guide you, poor and enrich you? And 93:9-11 convert the comfort into conduct: so do not oppress the orphan, do not repel the one who asks, and speak of the blessing of your Lord. The consoled become consolers; the pattern of past care is the argument for future care, and gratitude goes public.",
            "bn": "৯৩:৬-৮ তাঁকে ﷺ মনে করিয়ে দেয়, এরই মধ্যে তিনবার তিনি উদ্ধার পেয়েছেন: তিনি কি তোমাকে ইয়াতীম অবস্থায় পাননি, তারপর আশ্রয় দেননি? পথ খুঁজে ফেরা অবস্থায় পাননি, তারপর পথ দেখাননি? নিঃস্ব পাননি, তারপর অভাবমুক্ত করেননি? আর ৯৩:৯-১১ এই সান্ত্বনাকে আমলে পরিণত করে: সুতরাং ইয়াতীমের প্রতি কঠোর হয়ো না, যে চায় তাকে ধমক দিয়ো না, আর তোমার রবের নিয়ামতের কথা বলো। যে সান্ত্বনা পেল, সে-ই হয়ে ওঠে অন্যের সান্ত্বনাদাতা। অতীতে আল্লাহ যেভাবে যত্ন নিয়েছেন, সেটাই সামনে যত্ন পাওয়ার দলিল; আর কৃতজ্ঞতা মনের ভেতরে না থেকে সবার সামনে আসে।"
          },
          {
            "en": "For any believer in a stretch that feels like silence — prayers that feel unanswered, faith that feels flat — the surah offers its method, not only its occasion. Read your own history the way 93:6-8 reads his: name the rescues already delivered. Refuse the taunt, inward or outward, that quiet means rejection. And while waiting, do the three commands, for the orphan, the asker and the telling of blessings are available in every season, including the dry ones.",
            "bn": "যে মুমিনের জীবনে এমন একটা সময় চলছে যা নীরবতার মতো লাগে, দোয়া কবুল হচ্ছে না বলে মনে হয়, ঈমান নিস্তেজ লাগে, তার জন্য সূরাটি শুধু নিজের প্রেক্ষাপট নয়, একটা পদ্ধতিও রেখে গেছে। ৯৩:৬-৮ যেভাবে তাঁর জীবনের দিকে তাকায়, আপনিও সেভাবে নিজের জীবনের দিকে তাকান: এরই মধ্যে যেসব বিপদ থেকে উদ্ধার পেয়েছেন, সেগুলো নাম ধরে মনে করুন। নীরবতা মানেই প্রত্যাখ্যান, এই খোঁটা মানবেন না, তা মনের ভেতর থেকে আসুক বা বাইরে থেকে। আর অপেক্ষার সময়টায় তিনটি নির্দেশ পালন করুন। ইয়াতীম, সাহায্যপ্রার্থী আর নিয়ামতের কথা বলা, এই তিনটি সব মৌসুমেই হাতের কাছে থাকে, খরার মৌসুমেও।"
          }
        ]
      }
    ]
  },
  "93:11": {
    "sections": [
      {
        "h": {
          "en": "The Third of Three",
          "bn": "তিনটির মধ্যে তৃতীয়"
        },
        "p": [
          {
            "en": "Wa amma bi-ni'mati rabbika fahaddith. Four words, and they close the surah. They are the third of three clauses built the same way: 93:9, as for the orphan, do not oppress him; 93:10, and as for the one who asks, do not repel him; then this one. Two prohibitions and then a command — the sequence stops forbidding and starts requiring something be done.",
            "bn": "ওয়া আম্মা বিনি'মাতি রাব্বিকা ফাহাদ্দিস। চারটি শব্দ, আর এ দিয়েই সূরাটি শেষ। একই ছাঁচে গড়া তিনটি বাক্যের এটি তৃতীয়। ৯৩:৯ বলে: আর ইয়াতীম, তার প্রতি কঠোর হয়ো না। ৯৩:১০ বলে: আর যে চাইতে আসে, তাকে ধমক দিয়ো না। তারপর এই আয়াত। প্রথম দুটি নিষেধ, তারপর একটি আদেশ: এখানে এসে নিষেধ থেমে যায়, শুরু হয় কিছু একটা করার দাবি।"
          },
          {
            "en": "All three front their object before the verb. Arabic does not require that order, and the grammarians read the fronting as emphasis: it is the orphan you must not crush, it is the asker you must not drive off, it is your Lord's favour that you are to speak about. In each sentence the subject matter arrives before you learn what you are supposed to do with it.",
            "bn": "তিনটি বাক্যেই যাকে নিয়ে কথা, সে আগে এসেছে, ক্রিয়া এসেছে পরে। আরবিতে এই ক্রম বাধ্যতামূলক নয়, তাই ব্যাকরণবিদগণ একে জোর দেওয়ার কৌশল হিসেবে দেখেন: ইয়াতীমকেই তুমি দলে-পিষে দেবে না, সাহায্যপ্রার্থীকেই তুমি তাড়িয়ে দেবে না, তোমার প্রতিপালকের নিয়ামতের কথাই তুমি বলবে। প্রতিটি বাক্যে বিষয়টা আগে সামনে আসে, তারপর জানা যায় তাকে নিয়ে কী করতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Haddith, Not Ushkur",
          "bn": "হাদ্দিস, শুকুর নয়"
        },
        "p": [
          {
            "en": "The command is not the expected one. Allah does not say be grateful; He says haddith, the second form of the root h-d-th, meaning to relate, to report, to tell as news. It is the root behind the word hadith itself. What is being asked for is speech: an account given to somebody. Gratitude that stays inside the chest satisfies other verses; it does not satisfy the verb in this one.",
            "bn": "এখানে যে নির্দেশটা আশা করা যেত, সেটা আসেনি। আল্লাহ বলেননি 'কৃতজ্ঞ হও'; বলেছেন 'হাদ্দিস'। এটি হা-দাল-সা ধাতুর দ্বিতীয় বাব, অর্থ বর্ণনা করা, জানানো, খবর হিসেবে শোনানো। 'হাদিস' শব্দটিও এই ধাতু থেকেই এসেছে। অর্থাৎ এখানে চাওয়া হচ্ছে মুখের কথা: কাউকে ঘটনাটা খুলে বলা। বুকের ভেতরে চেপে রাখা কৃতজ্ঞতায় অন্য আয়াতের দাবি মেটে; কিন্তু এই আয়াতের ক্রিয়াটির দাবি তাতে মেটে না।"
          },
          {
            "en": "The Quran uses that same form of the verb in only two other places, and one of them is memorable. 99:4 says that on that Day the earth will report its news, tuhaddithu akhbaraha. The ground gives an account of everything that was done on it. Set beside our verse, the parallel is useful: the record gets told either way, and the believer is asked to speak of his Lord's favour while the speaking is still his own to do.",
            "bn": "কুরআনে ক্রিয়ার এই রূপটি আর মাত্র দুই জায়গায় এসেছে, তার একটি মনে রাখার মতো। ৯৯:৪ বলছে, সেদিন যমীন তার সব খবর বলে দেবে: 'তুহাদ্দিসু আখবারাহা'। মাটির ওপর যা কিছু করা হয়েছে, মাটি তার পুরো বিবরণ দেবে। আমাদের আয়াতের পাশে রাখলে মিলটা শিক্ষণীয়: হিসাব একদিন বলা হবেই। তাই মুমিনকে বলা হচ্ছে, বলার সুযোগ যতদিন নিজের হাতে, ততদিনেই প্রতিপালকের নিয়ামতের কথা বলতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Matched to What Was Given",
          "bn": "যা দেওয়া হয়েছিল তার সঙ্গে মিলিয়ে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the three commands as answering the three favours listed just before them, in order. 93:6 found him an orphan and gave him refuge, so do not oppress the orphan. 93:7 found him lost and guided him, so do not scorn the one who comes asking. 93:8 found him poor and made him self-sufficient, so tell of your Lord's favour. Each instruction pays forward the very thing that was received.",
            "bn": "ইবনে কাসীর এই তিনটি নির্দেশকে ঠিক আগের তিনটি নিয়ামতের জবাব হিসেবে পড়েন, একই ক্রমে। ৯৩:৬ বলে, তিনি তাঁকে ইয়াতীম অবস্থায় পেয়ে আশ্রয় দিয়েছেন; তাই ইয়াতীমের প্রতি কঠোর হয়ো না। ৯৩:৭ বলে, তাঁকে পথহারা অবস্থায় পেয়ে পথ দেখিয়েছেন; তাই যে চাইতে আসে, তাকে তুচ্ছ কোরো না। ৯৩:৮ বলে, তাঁকে নিঃস্ব অবস্থায় পেয়ে অভাবমুক্ত করেছেন; তাই তোমার প্রতিপালকের নিয়ামতের কথা বলো। নিজে যা পাওয়া গেছে, প্রতিটি নির্দেশ ঠিক সেটাই অন্যের দিকে এগিয়ে দিতে বলে।"
          },
          {
            "en": "That correspondence makes 93:11 concrete rather than vague. The favour to be spoken of is not gratitude in general but the specific relief that was actually granted. And it is not private information. A rescue that nobody hears about teaches nobody, and speech is how what happened to one person becomes something another person is able to hope for.",
            "bn": "এই মিলটিই 93:11-কে অস্পষ্ট না রেখে সুনির্দিষ্ট করে তোলে। যে নিয়ামতের কথা বলতে বলা হচ্ছে তা সাধারণভাবে কৃতজ্ঞতা নয়, বরং বাস্তবে যে নির্দিষ্ট স্বস্তিটি দেওয়া হয়েছিল সেটি। আর এটি ব্যক্তিগত গোপন তথ্যও নয়। যে উদ্ধারের কথা কেউ শোনে না, তা কাউকে কিছু শেখায় না; আর একজনের জীবনে ঘটে যাওয়া ঘটনা অন্যজনের আশার বিষয় হয়ে ওঠে কেবল বলার মধ্য দিয়েই।"
          }
        ]
      },
      {
        "h": {
          "en": "Telling Against Boasting",
          "bn": "প্রকাশ করা বনাম অহংকার"
        },
        "p": [
          {
            "en": "The commentators put one condition on it and they put it firmly: the favour is to be mentioned with thanks and not with pride, in the awareness that the Giver is able to withdraw what He gave. The line is not drawn at volume but at attribution. Boasting says look at what I have; telling of the favour says look at what my Lord did — and the two can use nearly identical words while doing opposite things.",
            "bn": "মুফাসসিরগণ এর সঙ্গে একটা শর্ত জুড়ে দেন, এবং বেশ জোর দিয়েই: নিয়ামতের কথা বলতে হবে শুকরিয়ার সঙ্গে, অহংকার নিয়ে নয়, আর মনে রাখতে হবে, যিনি দিয়েছেন তিনি চাইলে ফিরিয়েও নিতে পারেন। পার্থক্যটা গলার জোরে নয়, কৃতিত্ব কাকে দেওয়া হচ্ছে তাতে। অহংকার বলে, দেখো আমার কী আছে; নিয়ামতের কথা বলে, দেখো আমার প্রতিপালক কী করেছেন। দুটো প্রায় একই শব্দে বলা যায়, অথচ কাজ একেবারে উল্টো।"
          },
          {
            "en": "The Quran supplies the counter-example. 28:78 records Qarun's reply when he was told not to exult: I was only given it because of knowledge I have. Every part of that sentence is a report of a favour, and it fails, because the credit has been placed in the speaker. Our verse attaches the ni'ma to rabbika, your Lord, before the verb is even reached. The grammar has already settled whom the telling is about.",
            "bn": "এর উল্টো উদাহরণও কুরআনেই আছে। ২৮:৭৮ কারূনের জবাবটা তুলে ধরে, যখন তাকে বলা হয়েছিল দম্ভে মেতো না: আমাকে তো এটা দেওয়া হয়েছে আমার জ্ঞানের কারণেই। বাক্যটির প্রতিটি অংশই একটা নিয়ামতের বিবরণ, তবু তা ব্যর্থ, কারণ কৃতিত্বটা সে নিজের ঘরে তুলেছে। আমাদের আয়াত ক্রিয়াপদে পৌঁছানোর আগেই 'নিয়ামত'-কে জুড়ে দিয়েছে 'রাব্বিকা'র সঙ্গে, অর্থাৎ তোমার প্রতিপালকের সঙ্গে। কাকে নিয়ে বলা হবে, ব্যাকরণই তা আগেভাগে ঠিক করে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "And Thanking People",
          "bn": "আর মানুষকে ধন্যবাদ দেওয়া"
        },
        "p": [
          {
            "en": "Ibn Kathir places a hadith under this verse that widens it. Abu Dawud and at-Tirmidhi narrate from Abu Hurayrah (RA) that the Prophet ﷺ said: he who does not thank people has not thanked Allah. Ibn Kathir reports that at-Tirmidhi graded it sahih. Speaking of what Allah gave and acknowledging the hands He sent it through are treated here as one practice rather than as two that compete.",
            "bn": "ইবনে কাসীর এই আয়াতের নিচে এমন একটি হাদিস রাখেন যা এর পরিধি বাড়িয়ে দেয়। আবু দাউদ ও তিরমিযী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: যে মানুষের শুকরিয়া আদায় করে না, সে আল্লাহরও শুকরিয়া আদায় করে না। ইবনে কাসীর উল্লেখ করেন, তিরমিযী একে সহীহ বলেছেন। আল্লাহ যা দিয়েছেন তার কথা বলা এবং যে হাতগুলোর মাধ্যমে তিনি তা পাঠিয়েছেন তাদের স্বীকৃতি দেওয়া — এখানে দুটিকে পরস্পরবিরোধী নয়, বরং একই আমল হিসেবে দেখা হয়েছে।"
          },
          {
            "en": "As-Sa'di draws the social point out plainly: proclaiming His mercy teaches other people to be grateful and turns their hearts towards the One who gives, because a soul naturally loves whoever is good to it. That is the difference between this command and a private discipline. It is issued to somebody who has been rescued, and the rescue is made public because other people are still waiting on theirs.",
            "bn": "আস-সা'দী সামাজিক দিকটা খোলাখুলি বলেন: আল্লাহর রহমতের কথা প্রচার করলে অন্যরাও কৃতজ্ঞ হতে শেখে, আর তাদের মন দাতার দিকে ফেরে; কারণ যে উপকার করে, মানুষের মন স্বভাবতই তাকে ভালোবাসে। এখানেই এই নির্দেশ আর নিভৃতের কোনো সাধনার মধ্যে পার্থক্য। নির্দেশটা এসেছে এমন একজনের কাছে, যিনি নিজে উদ্ধার পেয়েছেন। সেই উদ্ধারের কথা সবাইকে জানাতে হয়, কারণ অন্যরা এখনও নিজেদের উদ্ধারের অপেক্ষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Surah Lands",
          "bn": "সূরাটি যেখানে এসে থামে"
        },
        "p": [
          {
            "en": "A surah that opened by answering a fear ends by handing out work, and this is the last of it. Nothing in the verse requires a platform or an audience of any size. It requires that when the good thing is mentioned — and it will be mentioned — the sentence names its source. The commentators take the address, given to the Prophet ﷺ, as establishing that Allah loves to have His favours spoken of.",
            "bn": "যে সূরা শুরু হয়েছিল একটা ভয়ের জবাব দিয়ে, তা শেষ হয় হাতে কাজ তুলে দিয়ে, আর এটিই তার শেষ কাজ। এর জন্য কোনো মঞ্চ লাগে না, বড় শ্রোতাও লাগে না। লাগে শুধু এটুকু: ভালো কিছুর কথা যখন উঠবে, আর উঠবেই, তখন কথার মধ্যে যেন তার উৎসের নাম থাকে। নির্দেশটা নবী ﷺ-কে দেওয়া হলেও মুফাসসিরগণ এ থেকে এই শিক্ষা নেন যে, আল্লাহ পছন্দ করেন তাঁর নিয়ামতের কথা বলা হোক।"
          }
        ]
      }
    ]
  }
});
