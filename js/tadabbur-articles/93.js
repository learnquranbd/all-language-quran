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
          "bn": "যখন ওহী থেমে ছিল"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Jundub ibn Sufyan (RA) that the Prophet ﷺ was unwell and did not stand in night prayer for a night or two; a woman came and said, O Muhammad, I hope that your shaytan has left you. Then Allah revealed the opening of this surah: by the morning brightness, and by the night when it grows still, your Lord has not forsaken you, nor does He hate. A taunt about abandonment was answered from above the seven heavens.",
            "bn": "বুখারী জুনদুব ইবনে সুফইয়ান (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ অসুস্থ ছিলেন এবং এক-দুই রাত রাতের নামাযে দাঁড়াননি; এক নারী এসে বলল, হে মুহাম্মাদ, আশা করি তোমার শয়তান তোমাকে ছেড়ে গেছে। তখন আল্লাহ এই সূরার শুরুটা নাযিল করলেন: শপথ পূর্বাহ্নের আলোর, আর রাতের — যখন তা স্তব্ধ হয়, তোমার রব তোমাকে ছেড়ে যাননি, ঘৃণাও করেন না। পরিত্যাগের এক খোঁচার জবাব এলো সাত আসমানের উপর থেকে।"
          },
          {
            "en": "The pause in revelation had weighed on him ﷺ before any taunt named it. The commentators read the surah as consolation shaped exactly to that weight: the gap in revelation felt like silence, and silence can be read as displeasure. The answer does not merely resume revelation; it addresses the fear itself, in the second person, with an oath sworn by Allah — the strongest register the language has — that the fear is false.",
            "bn": "কোনো খোঁচা নাম দেওয়ার আগেই ওহীর বিরতি তাঁর ﷺ উপর ভারী হয়ে চেপেছিল। মুফাসসিরগণ সূরাটিকে পড়েন ঠিক সেই ভারের মাপে গড়া সান্ত্বনা হিসেবে: ওহীর ফাঁকটাকে নীরবতা মনে হচ্ছিল, আর নীরবতাকে অসন্তোষ বলে পড়ে ফেলা যায়। জবাবটি কেবল ওহী আবার চালু করে না; ভয়টিকেই সরাসরি সম্বোধন করে — মধ্যম পুরুষে, আল্লাহর করা শপথ দিয়ে — ভাষার সবচেয়ে জোরালো স্বরে — যে ভয়টি মিথ্যা।"
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
            "bn": "সূরাটি খোলে দুটি শপথে: ওয়াদ-দুহা — পূর্বাহ্নের আলোর শপথ, আর ওয়াল-লাইলি ইযা সাজা — রাতের শপথ, যখন তা স্তব্ধ হয়। মুফাসসিরগণ শোনেন, শপথ দুটি যে অভিযোগের ভূমিকা করছে তার জবাবও আগেই দিয়ে দিচ্ছে: দিন ও রাত দুটোই তাঁর বিন্যাস, আর রাতের স্তব্ধতা মানে সূর্যের মৃত্যু নয়। আলো আর নীরবতা নকশা অনুযায়ীই পালা বদল করে। তেমনি ওহীর উপস্থিতি ও তার বিরতিও — বিরতিটি ছিল ছন্দ, প্রত্যাখ্যান নয়; আর এর দুই অর্ধেরই নিয়ন্তা একই রব।"
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
            "bn": "মা ওয়াদ্দা'আকা রাব্বুকা ওয়া মা কালা — তোমার রব তোমাকে বিদায় বলেননি, ঘৃণাও করেন না। ওয়াদা' হলো প্রস্থানকারীর বিদায়-সম্ভাষণ; ক্রিয়াটি এমনকি সৌজন্যের বিদায়ও নাকচ করে। তারপর মুফাসসিরগণ ব্যাকরণের এক কোমলতা দেখিয়ে দেন: কালা — তিনি ঘৃণা করেন না — আসে তার কর্ম অনুক্ত রেখে। কুরআন ঘৃণার ক্রিয়াপদের গায়ে তুমি শব্দটি জুড়তে অস্বীকার করে — এমনকি নেতিবাচক বাক্যের ভেতরেও। বাক্যটি ঘৃণাকে অস্বীকার করে, কিন্তু তার অভিমুখটুকুও উচ্চারণ করতে রাজি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Later Is Better",
          "bn": "পরবর্তীটাই উত্তম"
        },
        "p": [
          {
            "en": "93:4 lifts the eyes forward: and the akhirah is better for you than the ula, the later than the earlier. The commentators record both readings and keep them: the Hereafter is better for him ﷺ than this world; and each later stage of his affair is better than what preceded it. Read either way, the sentence is a promise of trajectory, and his ﷺ biography honored it — from concealment to open call, from persecution in Makkah to Madinah, from a lone voice to a community.",
            "bn": "93:4 দৃষ্টি সামনে তোলে: আর আখিরাত — অর্থাৎ পরবর্তীটি — তোমার জন্য ঊলা, অর্থাৎ পূর্ববর্তীটির চেয়ে উত্তম। মুফাসসিরগণ দুটি পাঠই লিপিবদ্ধ করেন এবং দুটিই রাখেন: আখিরাত তাঁর ﷺ জন্য দুনিয়ার চেয়ে উত্তম; আবার তাঁর কাজের প্রতিটি পরবর্তী পর্যায় পূর্ববর্তীটির চেয়ে উত্তম। যেভাবেই পড়া হোক, বাক্যটি এক গতিপথের প্রতিশ্রুতি, আর তাঁর ﷺ জীবনী তা পূর্ণ করেছে — গোপন দাওয়াত থেকে প্রকাশ্য আহ্বানে, মক্কার নিপীড়ন থেকে মদীনায়, একা এক কণ্ঠ থেকে এক উম্মাহয়।"
          },
          {
            "en": "The promise also disciplines how a believer reads time. The earlier is not the standard the later must recover; the later is where the good is stored. That is the exact reverse of nostalgia, and it was said to a man ﷺ in his hardest years, before any worldly evidence supported it. Trusting a promised trajectory while the present argues against it is the surah's definition of hope.",
            "bn": "প্রতিশ্রুতিটি মুমিনের সময়-পাঠকেও শৃঙ্খলায় আনে। পূর্ববর্তী সময়টা কোনো মানদণ্ড নয় যা পরবর্তীকে ফিরিয়ে আনতে হবে; কল্যাণ জমা আছে পরবর্তীটিতেই। এ হলো স্মৃতিকাতরতার হুবহু উল্টো, আর কথাটি বলা হয়েছিল এক মানুষকে ﷺ তাঁর কঠিনতম বছরগুলোতে — কোনো পার্থিব প্রমাণ তার পক্ষে দাঁড়ানোর আগেই। বর্তমান যখন বিপক্ষে যুক্তি দিচ্ছে তখনও প্রতিশ্রুত গতিপথে ভরসা রাখা — এটিই সূরাটির দেওয়া আশার সংজ্ঞা।"
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
            "bn": "93:5 সিলমোহর দেয়: আর অচিরেই তোমার রব তোমাকে দেবেন, আর তুমি সন্তুষ্ট হবে। ক্রিয়াটি অবাধ রাখা হয়েছে — কোনো কর্মপদ দানের সীমা টানে না। মুফাসসিরগণ এর মধ্যে রাখেন তাঁর জীবদ্দশায় দ্বীনের বিজয়, আর আখিরাতে তাঁর মর্যাদা, হাউয, এবং তাঁর উম্মতের জন্য তাঁর সুপারিশ — যতক্ষণ না তিনি তুষ্ট হন। আয়াতটি সাহস করে তাঁর ﷺ সন্তুষ্টিকেই দানের মাপকাঠি বানায়: তিনি দিতে থাকবেন, যতক্ষণ না তুমি সন্তুষ্ট হও।"
          },
          {
            "en": "The structure of the three verses is a staircase. First the denial of abandonment, clearing the fear; then the comparative promise, better than before; then the open-ended gift, until contentment. Consolation in the Quran does not stop at saying that things are not as bad as they seem; it climbs to a promise better than what was asked. The surah then proves the pattern from his own past — and turns it outward.",
            "bn": "তিন আয়াতের কাঠামো একটি সিঁড়ি। প্রথমে পরিত্যাগের অস্বীকার — ভয়টি সাফ করা; তারপর তুলনামূলক প্রতিশ্রুতি — আগের চেয়ে উত্তম; তারপর অবাধ দান — সন্তুষ্টি পর্যন্ত। কুরআনে সান্ত্বনা এই বলে থেমে যায় না যে, অবস্থা যতটা খারাপ দেখাচ্ছে ততটা নয়; তা উঠে যায় এমন প্রতিশ্রুতিতে, যা চাওয়ার চেয়েও উত্তম। সূরাটি এরপর প্যাটার্নটি প্রমাণ করে তাঁর নিজের অতীত থেকে — এবং তাকে বাইরের দিকে ঘুরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse for Dry Seasons",
          "bn": "শুষ্ক মৌসুমের আয়াত"
        },
        "p": [
          {
            "en": "93:6-8 remind him ﷺ of three rescues already delivered: did He not find you an orphan and shelter you, wandering and guide you, poor and enrich you? And 93:9-11 convert the comfort into conduct: so do not oppress the orphan, do not repel the one who asks, and speak of the blessing of your Lord. The consoled become consolers; the pattern of past care is the argument for future care, and gratitude goes public.",
            "bn": "93:6-8 তাঁকে ﷺ স্মরণ করিয়ে দেয় ইতিমধ্যে পৌঁছে দেওয়া তিনটি উদ্ধারের কথা: তিনি কি তোমাকে ইয়াতীম পাননি, তারপর আশ্রয় দেননি; পথের খোঁজে পাননি, তারপর পথ দেখাননি; নিঃস্ব পাননি, তারপর অভাবমুক্ত করেননি? আর 93:9-11 সান্ত্বনাটিকে আচরণে রূপান্তর করে: সুতরাং ইয়াতীমের প্রতি কঠোর হয়ো না, প্রার্থীকে ধমক দিয়ো না, আর তোমার রবের নিয়ামতের কথা বলো। সান্ত্বনাপ্রাপ্তরাই হয়ে ওঠে সান্ত্বনাদাতা; অতীত যত্নের প্যাটার্নই ভবিষ্যৎ যত্নের যুক্তি, আর কৃতজ্ঞতা প্রকাশ্যে আসে।"
          },
          {
            "en": "For any believer in a stretch that feels like silence — prayers that feel unanswered, faith that feels flat — the surah offers its method, not only its occasion. Read your own history the way 93:6-8 reads his: name the rescues already delivered. Refuse the taunt, inward or outward, that quiet means rejection. And while waiting, do the three commands, for the orphan, the asker and the telling of blessings are available in every season, including the dry ones.",
            "bn": "নীরবতার মতো লাগা কোনো পর্বে থাকা যেকোনো মুমিনের জন্য — দোয়া যেখানে জবাবহীন মনে হয়, ঈমান যেখানে নিস্তেজ লাগে — সূরাটি শুধু তার উপলক্ষ নয়, তার পদ্ধতিটাও দেয়। নিজের ইতিহাস পড়ুন যেভাবে 93:6-8 তাঁরটা পড়ে: ইতিমধ্যে পৌঁছে দেওয়া উদ্ধারগুলোর নাম নিন। ভেতরের হোক বা বাইরের — এই খোঁচা প্রত্যাখ্যান করুন যে, নীরবতা মানে প্রত্যাখ্যান। আর অপেক্ষার ফাঁকে তিনটি নির্দেশ পালন করুন — কারণ ইয়াতীম, প্রার্থী আর নিয়ামতের কথা বলা প্রতিটি মৌসুমেই হাতের কাছে, শুষ্ক মৌসুমগুলোতেও।"
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
            "bn": "ওয়া আম্মা বিনি'মাতি রাব্বিকা ফাহাদ্দিস। চারটি শব্দ, আর এ দিয়েই সূরাটি শেষ হয়। এটি একইভাবে গড়া তিনটি বাক্যের তৃতীয়টি: 93:9 — ইয়াতীমের ব্যাপারে বলছে, তার প্রতি কঠোরতা কোরো না; 93:10 — যে সাহায্য চেয়ে আসে তার ব্যাপারে বলছে, তাকে ধমক দিয়ো না; আর তারপর এই আয়াতটি। দুটি নিষেধ, তারপর একটি আদেশ — ধারাটি নিষেধ করা থামিয়ে কিছু একটা করতে বলা শুরু করে।"
          },
          {
            "en": "All three front their object before the verb. Arabic does not require that order, and the grammarians read the fronting as emphasis: it is the orphan you must not crush, it is the asker you must not drive off, it is your Lord's favour that you are to speak about. In each sentence the subject matter arrives before you learn what you are supposed to do with it.",
            "bn": "তিনটি বাক্যেই কর্ম বা সংশ্লিষ্ট পদটি ক্রিয়ার আগে বসানো হয়েছে। আরবিতে এই ক্রম বাধ্যতামূলক নয়, আর ব্যাকরণবিদগণ এই অগ্রবর্তীকরণকে গুরুত্ব ও জোর দেওয়ার লক্ষণ হিসেবে পড়েন: ইয়াতীমকেই তুমি পিষে ফেলবে না, সাহায্যপ্রার্থীকেই তুমি তাড়িয়ে দেবে না, আর তোমার প্রতিপালকের নিয়ামতের কথাই তুমি বলবে। প্রতিটি বাক্যেই বিষয়টি আগে এসে দাঁড়ায়, তারপর জানা যায় তার সঙ্গে কী করতে হবে।"
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
            "bn": "নির্দেশটি প্রত্যাশিত নির্দেশ নয়। আল্লাহ বলছেন না 'কৃতজ্ঞ হও'; তিনি বলছেন 'হাদ্দিস' — হা-দাল-সা ধাতুর দ্বিতীয় বাব, যার অর্থ বর্ণনা করা, জানানো, সংবাদ হিসেবে বলা। 'হাদীস' শব্দটিও এই ধাতু থেকেই এসেছে। এখানে যা চাওয়া হচ্ছে তা হলো উচ্চারণ: কারও কাছে একটি বিবরণ পেশ করা। বুকের ভেতরে থেকে যাওয়া কৃতজ্ঞতা অন্য অনেক আয়াতের দাবি পূরণ করে; কিন্তু এই আয়াতের ক্রিয়াপদটির দাবি তাতে পূরণ হয় না।"
          },
          {
            "en": "The Quran uses that same form of the verb in only two other places, and one of them is memorable. 99:4 says that on that Day the earth will report its news, tuhaddithu akhbaraha. The ground gives an account of everything that was done on it. Set beside our verse, the parallel is useful: the record gets told either way, and the believer is asked to speak of his Lord's favour while the speaking is still his own to do.",
            "bn": "কুরআন এই ক্রিয়ারূপটি আর মাত্র দুই জায়গায় ব্যবহার করে, তার একটি স্মরণীয়। 99:4 বলে, সেদিন যমীন তার সংবাদ বলে দেবে — 'তুহাদ্দিসু আখবারাহা'। মাটি তার ওপরে যা কিছু করা হয়েছে তার সবটুকুর বিবরণ দিয়ে দেবে। আমাদের আয়াতের পাশে রাখলে মিলটি কাজে লাগে: বিবরণটি যেকোনোভাবেই বলা হবে, আর মু'মিনকে বলা হচ্ছে তার প্রতিপালকের নিয়ামতের কথা তখনই বলতে, যতক্ষণ বলাটা তার নিজের হাতে আছে।"
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
            "bn": "ইবনে কাসীর এই তিনটি নির্দেশকে পড়েন ঠিক আগের তিনটি নিয়ামতের জবাব হিসেবে, একই ক্রমে। 93:6 বলে, তিনি তাঁকে ইয়াতীম অবস্থায় পেয়ে আশ্রয় দিয়েছেন — তাই ইয়াতীমের প্রতি কঠোরতা কোরো না। 93:7 বলে, তিনি তাঁকে পথের দিশাহীন অবস্থায় পেয়ে সঠিক পথ দেখিয়েছেন — তাই যে চেয়ে আসে তাকে তুচ্ছ কোরো না। 93:8 বলে, তিনি তাঁকে নিঃস্ব অবস্থায় পেয়ে অভাবমুক্ত করেছেন — তাই তোমার প্রতিপালকের নিয়ামতের কথা বলো। প্রতিটি নির্দেশই যা পাওয়া গিয়েছিল ঠিক তা-ই সামনের দিকে পরিশোধ করে।"
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
            "bn": "মুফাসসিরগণ এর ওপর একটি শর্ত আরোপ করেন, আর দৃঢ়ভাবেই করেন: নিয়ামতের কথা বলতে হবে শুকরিয়ার সঙ্গে, অহংকারের সঙ্গে নয় — এই সচেতনতা নিয়ে যে দাতা চাইলে তাঁর দান ফিরিয়ে নিতে পারেন। সীমারেখাটি টানা হয়েছে কতটা জোরে বলা হলো তা দিয়ে নয়, বরং কৃতিত্বটি কাকে দেওয়া হলো তা দিয়ে। অহংকার বলে, দেখো আমার কী আছে; নিয়ামতের কথা বলা মানে বলা, দেখো আমার প্রতিপালক কী করেছেন — অথচ দুটি প্রায় একই শব্দে বলা যায়, যদিও কাজ দুটি বিপরীত।"
          },
          {
            "en": "The Quran supplies the counter-example. 28:78 records Qarun's reply when he was told not to exult: I was only given it because of knowledge I have. Every part of that sentence is a report of a favour, and it fails, because the credit has been placed in the speaker. Our verse attaches the ni'ma to rabbika, your Lord, before the verb is even reached. The grammar has already settled whom the telling is about.",
            "bn": "কুরআন এর বিপরীত উদাহরণটিও জোগায়। 28:78-এ কারূনকে যখন উল্লসিত না হতে বলা হলো, তার জবাবটি লিপিবদ্ধ আছে: আমাকে তো এটি দেওয়া হয়েছে আমার নিজের জ্ঞানের কারণেই। বাক্যটির প্রতিটি অংশই একটি নিয়ামতের বিবরণ, তবু তা ব্যর্থ হয় — কারণ কৃতিত্বটি বক্তা নিজের ঘরে তুলে নিয়েছেন। আমাদের আয়াতটি 'নিয়ামত' শব্দটিকে 'রাব্বিকা' অর্থাৎ তোমার প্রতিপালকের সঙ্গে জুড়ে দেয় ক্রিয়াপদে পৌঁছানোরও আগে। ব্যাকরণই ঠিক করে দিয়েছে, বলাটি কাকে নিয়ে।"
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
            "bn": "ইবনে কাসীর এই আয়াতের নিচে এমন একটি হাদীস রাখেন যা এর পরিধি বাড়িয়ে দেয়। আবু দাউদ ও তিরমিযী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: যে মানুষের শুকরিয়া আদায় করে না, সে আল্লাহরও শুকরিয়া আদায় করে না। ইবনে কাসীর উল্লেখ করেন, তিরমিযী একে সহীহ বলেছেন। আল্লাহ যা দিয়েছেন তার কথা বলা এবং যে হাতগুলোর মাধ্যমে তিনি তা পাঠিয়েছেন তাদের স্বীকৃতি দেওয়া — এখানে দুটিকে পরস্পরবিরোধী নয়, বরং একই আমল হিসেবে দেখা হয়েছে।"
          },
          {
            "en": "As-Sa'di draws the social point out plainly: proclaiming His mercy teaches other people to be grateful and turns their hearts towards the One who gives, because a soul naturally loves whoever is good to it. That is the difference between this command and a private discipline. It is issued to somebody who has been rescued, and the rescue is made public because other people are still waiting on theirs.",
            "bn": "আস-সা'দী সামাজিক দিকটি সরাসরি তুলে ধরেন: তাঁর রহমতের কথা প্রচার করা অন্য মানুষকে কৃতজ্ঞ হতে শেখায় এবং তাদের হৃদয়কে দাতার দিকে ফেরায়, কারণ যে তার প্রতি ইহসান করে, মানুষের অন্তর স্বভাবতই তাকে ভালোবাসে। এখানেই এই নির্দেশ আর কোনো ব্যক্তিগত সাধনার পার্থক্য। এটি দেওয়া হয়েছে এমন একজনকে যাকে উদ্ধার করা হয়েছে, আর সেই উদ্ধারের কথা প্রকাশ করা হচ্ছে কারণ অন্য মানুষেরা এখনও নিজেদের উদ্ধারের অপেক্ষায় আছে।"
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
            "bn": "যে সূরাটি একটি ভয়ের জবাব দিয়ে শুরু হয়েছিল, তা শেষ হয় কাজ ভাগ করে দিয়ে — আর এটিই তার শেষ কাজ। আয়াতটির কোথাও কোনো মঞ্চ বা বড় শ্রোতার প্রয়োজন নেই। প্রয়োজন কেবল এটুকু যে, ভালো ঘটনাটির কথা যখন উঠবে — আর উঠবেই — তখন বাক্যটি যেন তার উৎসের নাম বলে দেয়। মুফাসসিরগণ নবী ﷺ-কে দেওয়া এই সম্বোধন থেকে সিদ্ধান্ত নেন যে, আল্লাহ তাঁর নিয়ামতের কথা বলা পছন্দ করেন।"
          }
        ]
      }
    ]
  }
});
