/**
 * Tadabbur long-form articles — surah 13.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "13:11": {
    "sections": [
      {
        "h": {
          "en": "Where the Verse Sits",
          "bn": "আয়াতটি কোথায় বসে আছে"
        },
        "p": [
          {
            "en": "Surah ar-Ra'd opens with the signs of a Lord who runs the sky and the earth and knows everything without exception. The verse just before, 13:10, makes that knowledge personal: the one who hides his words and the one who speaks aloud, the one concealed by night and the one walking in daylight, are all the same to Him. 13:11 then moves from being known to being kept: escorts travel with each person, in front of him and behind him.",
            "bn": "সূরা আর-রা'দ শুরু হয় সেই রবের নিদর্শন দিয়ে, যিনি আসমান ও যমীন পরিচালনা করেন এবং ব্যতিক্রম ছাড়া সবকিছু জানেন। ঠিক আগের আয়াত 13:10 সেই জ্ঞানকে ব্যক্তিগত করে তোলে: যে কথা গোপন করে আর যে উচ্চস্বরে বলে, যে রাতের আঁধারে লুকিয়ে থাকে আর যে দিনের আলোয় চলে — সবাই তাঁর কাছে সমান। এরপর 13:11 জানা থেকে রক্ষিত হওয়ার দিকে এগোয়: প্রতিটি মানুষের সঙ্গে চলে প্রহরী — তার সামনে ও পেছনে।"
          },
          {
            "en": "So the famous middle clause about change does not float alone; it is set between guarding and decree. The verse names three facts in order: each person is watched over by appointed guardians, Allah does not alter a people's condition until they alter what is in themselves, and when His decree of harm arrives nothing can turn it back. Read together, the parts answer one another, and each part disciplines how the others may be understood.",
            "bn": "সুতরাং পরিবর্তন নিয়ে বিখ্যাত মাঝের বাক্যটি একা ভেসে থাকে না; সেটি বসানো হয়েছে রক্ষণাবেক্ষণ ও ফায়সালার মাঝখানে। আয়াতটি পরপর তিনটি সত্য বলে: প্রত্যেক মানুষকে নিযুক্ত রক্ষীরা পাহারা দেয়, আল্লাহ কোনো জাতির অবস্থা বদলান না যতক্ষণ না তারা নিজেদের ভেতরের অবস্থা বদলায়, আর তাঁর ক্ষতির ফায়সালা এসে গেলে কিছুই তা ফেরাতে পারে না। একসঙ্গে পড়লে অংশগুলো একে অন্যের জবাব দেয়, আর প্রতিটি অংশ ঠিক করে দেয় বাকিগুলো কীভাবে বোঝা যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Angels Who Take Turns",
          "bn": "পালা বদল করা ফেরেশতারা"
        },
        "p": [
          {
            "en": "The word for the escorts is mu'aqqibat, from a root meaning to follow one another in succession — shifts that relieve each other, the way sentries change guard. The commentators, Tabari and Ibn Kathir among them, say these are angels charged with each person, before him and behind him, and that they guard him by the command of Allah. The protection is real, but it is delegated; the angels have no power of their own.",
            "bn": "প্রহরীদের জন্য ব্যবহৃত শব্দটি মুআক্কিবাত — এর মূল অর্থ একের পর এক পালাক্রমে আসা; যেভাবে পাহারাদাররা পালা বদল করে, সেভাবে একদল আরেক দলকে অব্যাহতি দেয়। মুফাসসিরগণ — তাবারী ও ইবনে কাসীর তাঁদের মধ্যে — বলেন, এরা ফেরেশতা, প্রত্যেক মানুষের সামনে ও পেছনে নিযুক্ত, এবং তারা আল্লাহর নির্দেশে তাকে রক্ষা করে। এই সুরক্ষা বাস্তব, কিন্তু তা অর্পিত দায়িত্ব; ফেরেশতাদের নিজস্ব কোনো ক্ষমতা নেই।"
          },
          {
            "en": "Al-Bukhari narrates from Abu Hurayrah (RA) that angels take turns among you by night and by day, and that they gather at the Fajr prayer and the 'Asr prayer. Ibn Kathir adds the point the verse itself implies: when Allah's decree comes, the guards stand aside, because their guarding was only ever by His command. A person is therefore kept safe every hour by a mercy he neither sees nor pays for.",
            "bn": "বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, ফেরেশতারা রাতে ও দিনে তোমাদের মধ্যে পালাক্রমে আসে, আর তারা ফজর ও আসরের নামাযে একত্র হয়। ইবনে কাসীর সেই কথাটি যোগ করেন যা আয়াত নিজেই ইঙ্গিত করে: আল্লাহর ফায়সালা এসে গেলে রক্ষীরা সরে দাঁড়ায়, কারণ তাদের পাহারা বরাবরই ছিল কেবল তাঁর নির্দেশে। ফলে মানুষ প্রতিটি ঘণ্টা নিরাপদ থাকে এমন এক রহমতে, যা সে দেখেও না, যার মূল্যও দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Clause the World Quotes",
          "bn": "যে বাক্যটি সবাই উদ্ধৃত করে"
        },
        "p": [
          {
            "en": "Allah does not change ma bi-qawmin, what is in a people, until they change ma bi-anfusihim, what is in themselves. Two changes are named, and the second precedes the first. The wording is about a qawm, a people, not only an individual: collective conditions track collective interiors. And what must change first is not circumstance, wealth or rulers, but what sits inside — conviction, intention, habit, and what a community tolerates in itself.",
            "bn": "আল্লাহ 'মা বি-কাওমিন' — কোনো জাতির মধ্যে যা আছে — তা বদলান না, যতক্ষণ না তারা 'মা বি-আনফুসিহিম' — নিজেদের ভেতরে যা আছে — তা বদলায়। এখানে দুটি পরিবর্তনের কথা বলা হয়েছে, এবং দ্বিতীয়টি প্রথমটির আগে ঘটে। শব্দবিন্যাসে বলা হয়েছে 'কাওম' — একটি জাতির কথা, শুধু ব্যক্তির নয়: সমষ্টিগত অবস্থা সমষ্টিগত অন্তরের অনুগামী। আর যা আগে বদলাতে হবে তা পরিস্থিতি, সম্পদ বা শাসক নয়, বরং যা ভেতরে বসে আছে — বিশ্বাস, নিয়ত, অভ্যাস, এবং একটি সমাজ নিজের মধ্যে যা সহ্য করে নেয়।"
          },
          {
            "en": "The classical commentators read the clause first as a warning. Tabari and Ibn Kathir set it beside 8:53, which says Allah never changes a favour He has bestowed on a people until they change what is in themselves. Security, provision and standing are held in place by obedience, and are forfeited from the inside before they collapse on the outside. Yet the wording here is general, so it also carries the hopeful direction: return begins within too.",
            "bn": "ধ্রুপদী মুফাসসিরগণ বাক্যটিকে প্রথমত সতর্কবার্তা হিসেবে পড়েন। তাবারী ও ইবনে কাসীর এটিকে 8:53 আয়াতের পাশে রাখেন, যেখানে বলা হয়েছে: আল্লাহ কোনো জাতিকে দেওয়া নিয়ামত কখনো বদলান না, যতক্ষণ না তারা নিজেদের ভেতরের অবস্থা বদলায়। নিরাপত্তা, রিযিক ও মর্যাদা টিকে থাকে আনুগত্যের ওপর, আর বাইরে ভেঙে পড়ার আগে সেগুলো হারিয়ে যায় ভেতর থেকে। তবে এখানকার শব্দবিন্যাস ব্যাপক, তাই এটি আশার দিকটিও বহন করে: ফিরে আসাও শুরু হয় ভেতর থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "No Repelling, No Protector",
          "bn": "ফেরানোর কেউ নেই, অভিভাবকও নেই"
        },
        "p": [
          {
            "en": "The verse ends: when Allah intends harm for a people there is no repelling it, and they have no wali — no protector to manage their affairs — besides Him. This closes the loophole the heart looks for. The same angels who guard by His command cannot guard against His command. Whoever hopes to be shielded from the decree by connections, wealth or precaution is looking for a protector the verse has just said does not exist.",
            "bn": "আয়াতটি শেষ হয় এভাবে: আল্লাহ যখন কোনো জাতির অকল্যাণ চান, তখন তা ফেরানোর কেউ নেই, আর তিনি ছাড়া তাদের কোনো ওয়ালী নেই — এমন কোনো অভিভাবক নেই যে তাদের বিষয় সামলাবে। এতে বন্ধ হয়ে যায় সেই ফাঁকটি, যা হৃদয় খুঁজে ফেরে। যে ফেরেশতারা তাঁর নির্দেশে পাহারা দেয়, তারাই তাঁর নির্দেশের বিরুদ্ধে পাহারা দিতে পারে না। যে ব্যক্তি পরিচিতি, সম্পদ বা সাবধানতার জোরে ফায়সালা থেকে বাঁচার আশা করে, সে এমন এক রক্ষকের খোঁজ করছে, আয়াত এইমাত্র যার অস্তিত্ব অস্বীকার করেছে।"
          },
          {
            "en": "This is why the middle clause matters so much. If harm cannot be repelled once it is intended, then the only place a person can work is upstream of it — in the state that draws mercy or forfeits it. Responsibility and outcome are split cleanly: the change within is ours to make; the change of condition, and the protection while we make it, remain wholly with Allah.",
            "bn": "এ কারণেই মাঝের বাক্যটি এত গুরুত্বপূর্ণ। ক্ষতির ইচ্ছা একবার হয়ে গেলে যদি তা ফেরানো না যায়, তবে মানুষের কাজ করার একমাত্র জায়গা তার উজানে — সেই অবস্থায়, যা রহমত টেনে আনে অথবা তা হারায়। দায়িত্ব ও ফলাফল পরিষ্কারভাবে ভাগ হয়ে যায়: ভেতরের পরিবর্তন করা আমাদের কাজ; আর অবস্থার পরিবর্তন, এবং সেই কাজের সময়কার সুরক্ষা — দুটোই সম্পূর্ণ আল্লাহর হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Changing Within Means",
          "bn": "ভেতরের পরিবর্তন মানে কী"
        },
        "p": [
          {
            "en": "As-Sa'di spells out what the inner change is: a people move from obedience to disobedience, or from gratitude for blessings to abusing them, and the outward condition follows; and if they change what is in themselves by returning, Allah's mercy returns with them. Nothing here promises that effort manufactures outcomes. It says that inner states are the level at which Allah has chosen to deal with communities, which is a different and larger claim.",
            "bn": "আস-সা'দী ভেতরের পরিবর্তনটি খুলে বলেন: একটি জাতি আনুগত্য থেকে অবাধ্যতায় সরে যায়, অথবা নিয়ামতের কৃতজ্ঞতা থেকে তার অপব্যবহারে — আর বাইরের অবস্থা তার অনুগামী হয়; আবার তারা যদি ফিরে এসে নিজেদের ভেতরের অবস্থা বদলায়, আল্লাহর রহমতও তাদের সঙ্গে ফিরে আসে। এখানে এমন প্রতিশ্রুতি নেই যে চেষ্টাই ফলাফল তৈরি করে। বরং বলা হচ্ছে: ভেতরের অবস্থাই সেই স্তর, যেখানে আল্লাহ জাতিগুলোর সঙ্গে লেনদেন করা বেছে নিয়েছেন — যা ভিন্ন এবং আরও বড় একটি কথা।"
          },
          {
            "en": "In practice the verse redirects complaint. A household, a community or a person asking why conditions do not improve is sent first to an audit that costs nothing and hurts more: what is being tolerated within — in prayer, in honesty, in what is consumed and what is neglected? The verse does not forbid changing circumstances; the rest of the Quran commands striving. It fixes the order: the inside first, because that is what the outside waits upon.",
            "bn": "বাস্তবে আয়াতটি অভিযোগের মুখ ঘুরিয়ে দেয়। কোনো পরিবার, সমাজ বা ব্যক্তি যখন জিজ্ঞেস করে অবস্থার উন্নতি হচ্ছে না কেন, তাকে প্রথমে পাঠানো হয় এমন এক হিসাব-নিরীক্ষায়, যাতে খরচ নেই কিন্তু ব্যথা বেশি: ভেতরে কী সহ্য করে নেওয়া হচ্ছে — নামাযে, সততায়, যা খাওয়া হচ্ছে আর যা অবহেলা করা হচ্ছে তাতে? আয়াতটি পরিস্থিতি বদলাতে নিষেধ করে না; কুরআনের বাকি অংশ তো চেষ্টারই নির্দেশ দেয়। এটি কেবল ক্রম ঠিক করে দেয়: আগে ভেতর, কারণ বাইরের পরিবর্তন তারই অপেক্ষায় থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Between the Two Truths",
          "bn": "দুই সত্যের মাঝে বসবাস"
        },
        "p": [
          {
            "en": "The believer who carries this verse walks with two facts at once. He is guarded — escorted through every ordinary day by angels in relay he has never seen — so gratitude, not anxiety, is the baseline. And he is responsible: the part of his condition that waits on anyone waits on him. The verse leaves no room for the fatalism that waits for rescue, nor for the self-reliance that forgets who commands the guards.",
            "bn": "এই আয়াত যে মুমিন বহন করে, সে একসঙ্গে দুটি সত্য নিয়ে চলে। সে রক্ষিত — প্রতিটি সাধারণ দিনে তাকে পাহারা দিয়ে চলে পালা বদল করা ফেরেশতারা, যাদের সে কখনো দেখেনি — তাই তার ভিত্তি হওয়া উচিত কৃতজ্ঞতা, উদ্বেগ নয়। আবার সে দায়বদ্ধও: তার অবস্থার যে অংশ কারও অপেক্ষায় আছে, তা তারই অপেক্ষায় আছে। আয়াতটি সেই ভাগ্যবাদের জায়গা রাখে না যা উদ্ধারের অপেক্ষায় বসে থাকে, আবার সেই আত্মনির্ভরতারও নয় যা ভুলে যায় রক্ষীদের নির্দেশ কে দেন।"
          },
          {
            "en": "Its neighbour 13:28 completes the picture: hearts find rest in the remembrance of Allah. The inner change the verse asks for is not a technique but a turning — intention corrected, wrong left, obedience taken up — done while trusting the One whose way of dealing does not change, as the verse itself guarantees. That guarantee is the comfort: the door to a changed condition is never locked from His side.",
            "bn": "প্রতিবেশী আয়াত 13:28 ছবিটি সম্পূর্ণ করে: আল্লাহর স্মরণেই হৃদয় প্রশান্তি পায়। আয়াতটি যে ভেতরের পরিবর্তন চায় তা কোনো কৌশল নয়, বরং একটি ফেরা — নিয়ত শুধরে নেওয়া, অন্যায় ছেড়ে দেওয়া, আনুগত্য ধরে নেওয়া — আর তা করা হয় তাঁর ওপর ভরসা রেখে, যাঁর লেনদেনের রীতি বদলায় না, যেমনটি আয়াত নিজেই নিশ্চয়তা দেয়। সেই নিশ্চয়তাই সান্ত্বনা: বদলে যাওয়া অবস্থার দরজা তাঁর দিক থেকে কখনো তালাবদ্ধ নয়।"
          }
        ]
      }
    ]
  },
  "13:17": {
    "sections": [
      {
        "h": {
          "en": "Between Two Questions About Sight",
          "bn": "দৃষ্টি নিয়ে দুই প্রশ্নের মাঝখানে"
        },
        "p": [
          {
            "en": "In Surah ar-Ra'd this parable arrives inside an argument. The verse just before it, 13:16, asks who is Lord of the heavens and the earth, answers Allah, and then sets two questions side by side: is the blind equal to the seeing, or darkness to light? Two verses later 13:19 asks it again, about the one who knows what was revealed and the one who is blind.",
            "bn": "সূরা আর-রা'দে এই উপমাটি আসে একটি যুক্তিতর্কের ভেতরে। ঠিক আগের আয়াত 13:16 প্রশ্ন করে, আসমান ও যমীনের প্রতিপালক কে, উত্তর দেয় — আল্লাহ, তারপর পাশাপাশি রাখে দুটি প্রশ্ন: অন্ধ ও চক্ষুষ্মান কি সমান, কিংবা অন্ধকার ও আলো কি সমান? দুই আয়াত পরে 13:19 আবার একই প্রশ্ন তোলে — এবার তার সম্পর্কে যে জানে যা নাযিল হয়েছে, আর তার সম্পর্কে যে অন্ধ।"
          },
          {
            "en": "The argument needed something an eye could check, and this verse supplies it. Rather than assert that truth outlasts falsehood, it points at two processes the first listeners had all watched happen: a valley after rain, and a fire lit under ore. Both are ordinary, both end the same way, and the claim about truth and falsehood is then laid over a pattern the listener has already conceded.",
            "bn": "যুক্তিটির এমন কিছু দরকার ছিল যা চোখ যাচাই করতে পারে, আর এই আয়াত তা-ই দেয়। সত্য যে মিথ্যার চেয়ে টেকে — এ কথা কেবল ঘোষণা না করে আয়াতটি দেখিয়ে দেয় দুটি প্রক্রিয়া, যা প্রথম শ্রোতারা সবাই ঘটতে দেখেছে: বৃষ্টির পরের উপত্যকা, আর আকরিকের নিচে জ্বালানো আগুন। দুটোই সাধারণ, দুটোরই পরিণতি এক; আর সত্য-মিথ্যা সম্পর্কে দাবিটি তখন বসানো হয় এমন এক নিয়মের ওপর, যা শ্রোতা আগেই মেনে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Water Down a Valley",
          "bn": "উপত্যকা বেয়ে নামা পানি"
        },
        "p": [
          {
            "en": "He sends down water from the sky, and valleys flow bi-qadariha, each according to its own measure. Ibn Kathir reads those measures as a picture of hearts: a wide valley holds a great deal of what came down and a narrow one holds little, though the water was one water. As-Sa'di takes the rain as the guidance sent down and the valleys as the hearts that receive it.",
            "bn": "তিনি আকাশ থেকে পানি নামান, আর উপত্যকাগুলো প্রবাহিত হয় বিকদরিহা — প্রত্যেকটি নিজের পরিমাণ অনুযায়ী। ইবনে কাসীর এই পরিমাণকে হৃদয়ের চিত্র হিসেবে পড়েন: প্রশস্ত উপত্যকা নেমে আসা পানির অনেকটা ধরে রাখে, সংকীর্ণটি ধরে অল্প, অথচ পানি ছিল একই পানি। আস-সা'দী বৃষ্টিকে নাযিলকৃত হিদায়াত আর উপত্যকাগুলোকে সেই হৃদয় হিসেবে নেন, যারা তা গ্রহণ করে।"
          },
          {
            "en": "Then the torrent carries zabadan rabiyan, a foam that swells and rides on top. Nothing in the wording makes it small or quiet; rabin means rising, mounting, growing. It is the part of the flood visible from a distance, and it is produced by the flood's own violence. The water beneath is doing the work of the sentence, and the froth above it is doing the announcing.",
            "bn": "এরপর স্রোত বয়ে নিয়ে যায় যাবাদান রাবিয়ান — এমন ফেনা যা ফুলে ওঠে ও উপরিভাগে ভাসে। শব্দবিন্যাসের কোথাও একে ছোট বা নীরব বলা হয়নি; রাবিন অর্থ উঁচু হয়ে ওঠা, ফুলে ওঠা, বেড়ে যাওয়া। এটিই বন্যার সেই অংশ যা দূর থেকে চোখে পড়ে, আর এটি জন্ম নেয় বন্যার নিজেরই প্রচণ্ডতা থেকে। নিচের পানি কাজটা করছে, আর উপরের ফেনা করছে ঘোষণা।"
          }
        ]
      },
      {
        "h": {
          "en": "Froth Off the Fire",
          "bn": "আগুনের ওপরের ফেনা"
        },
        "p": [
          {
            "en": "The second image moves indoors. And from that which they heat in the fire, seeking ornament or utensil, is a foam like it. A smith melting gold for jewellery or copper for a pot watches scum rise off the melt and skims it away. The Arabic says zabadun mithluhu, a foam like it: the verse itself ties the workshop to the valley.",
            "bn": "দ্বিতীয় চিত্রটি চলে যায় ঘরের ভেতরে। আর অলংকার বা তৈজসপত্রের উদ্দেশ্যে তারা আগুনে যা উত্তপ্ত করে, তাতেও থাকে অনুরূপ ফেনা। অলংকারের জন্য সোনা বা পাত্রের জন্য তামা গলানোর সময় কারিগর দেখে, গলিত ধাতুর ওপরে ময়লা ভেসে ওঠে, আর সে তা ছেঁকে ফেলে দেয়। আরবিতে বলা হয়েছে যাবাদুন মিসলুহু — অনুরূপ ফেনা; অর্থাৎ আয়াত নিজেই কারখানাকে উপত্যকার সঙ্গে বেঁধে দেয়।"
          },
          {
            "en": "The word zabad occurs only in this verse of the Quran, three times. Ibn Kathir treats the two pictures as one argument stated twice, from nature and from craft, so that no listener can dismiss it as an accident of landscape. Rain is something Allah sends down; smelting is something people do. In both, the useless part floats, and in both it is separated off.",
            "bn": "যাবাদ শব্দটি কুরআনে কেবল এই আয়াতেই এসেছে, আর এর ভেতরে এসেছে তিনবার। ইবনে কাসীর দুটি চিত্রকে একই যুক্তির দুইবার উপস্থাপন হিসেবে দেখেন — একবার প্রকৃতি থেকে, একবার কারিগরি থেকে — যাতে কোনো শ্রোতা একে ভূপ্রকৃতির আকস্মিকতা বলে উড়িয়ে দিতে না পারে। বৃষ্টি আল্লাহ নামান; ধাতু গলানো মানুষ করে। দুটোতেই অকেজো অংশটিই ভেসে থাকে, আর দুটোতেই তা আলাদা হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Two Pictures Prove",
          "bn": "দুই চিত্র যা প্রমাণ করে"
        },
        "p": [
          {
            "en": "Kadhalika yadribullahu al-haqqa wal-batil — thus Allah presents truth and falsehood. Only at this point does the verse name what it has been describing. Then the resolution: as for the foam, it goes jufa'an, cast off as refuse; as for what benefits people, it yamkuth, it stays put in the earth. Two images, one law, stated in a single sentence, with no third example offered.",
            "bn": "কাযালিকা ইয়াদরিবুল্লাহুল হাক্কা ওয়াল বাতিল — এভাবেই আল্লাহ সত্য ও মিথ্যার দৃষ্টান্ত দেন। ঠিক এখানে এসেই আয়াতটি নাম ধরে বলে, এতক্ষণ সে কী বর্ণনা করছিল। এরপর মীমাংসা: ফেনার ব্যাপার হলো, তা চলে যায় জুফাআন — আবর্জনার মতো নিক্ষিপ্ত হয়ে; আর যা মানুষের উপকার করে, তা ইয়ামকুস — যমীনে থেকে যায়। দুটি চিত্র, একটি নিয়ম, এক বাক্যে বলা — তৃতীয় কোনো উদাহরণ দেওয়া হয়নি।"
          },
          {
            "en": "Notice the test the verse actually uses. Truth is not separated from falsehood here by volume, by noise, or by how long something has been visible. The dividing line is ma yanfa'u an-nas, what benefits the people. The water soaks in and the purified metal is kept, and both were useful in a way the froth was not for a single moment. Usefulness is what survives.",
            "bn": "লক্ষ করুন, আয়াতটি আসলে কোন মানদণ্ড ব্যবহার করে। এখানে সত্যকে মিথ্যা থেকে আলাদা করা হয় না পরিমাণ দিয়ে, শোরগোল দিয়ে, কিংবা কতদিন ধরে কিছু চোখে পড়ছে তা দিয়ে। বিভাজনরেখাটি হলো মা ইয়ানফাউন নাস — যা মানুষের উপকারে আসে। পানি মাটিতে মিশে যায়, বিশুদ্ধ ধাতু রেখে দেওয়া হয়; দুটোই এমনভাবে উপকারী ছিল, যেভাবে ফেনা এক মুহূর্তের জন্যও ছিল না। উপকারিতাই টিকে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Froth Looks Bigger",
          "bn": "ফেনা কেন বড় দেখায়"
        },
        "p": [
          {
            "en": "Foam has exactly one advantage, and it is position. It sits on top of the flood and of the melt, so it is seen first and counted most easily. The dominance falsehood enjoys in any period is a fact about where it sits, not what it is made of. This verse concedes the appearance completely, then tells you how the scene ends.",
            "bn": "ফেনার সুবিধা ঠিক একটিই, আর তা হলো অবস্থান। সে বসে থাকে বন্যার উপরে আর গলিত ধাতুর উপরে, তাই সে-ই প্রথমে চোখে পড়ে এবং তাকেই গোনা সবচেয়ে সহজ। যেকোনো যুগে মিথ্যা যে প্রাধান্য ভোগ করে, তা তার অবস্থান সম্পর্কে সত্য, তার উপাদান সম্পর্কে নয়। এই আয়াত বাহ্যিক চেহারাটি পুরোপুরি মেনে নেয়, তারপর জানিয়ে দেয় দৃশ্যটি কীভাবে শেষ হয়।"
          },
          {
            "en": "The verse straight after it presses the same point in another currency. 13:18 says that those who responded to their Lord have al-husna, the best, while those who did not would offer everything on earth and its like again as ransom — and theirs is the worst account, with Hell for a refuge. What looked like the whole of the flood is worth nothing at the moment of reckoning.",
            "bn": "ঠিক পরের আয়াতটি একই কথা বলে ভিন্ন মুদ্রায়। 13:18 বলে, যারা তাদের প্রতিপালকের ডাকে সাড়া দিয়েছে তাদের জন্য আছে আল-হুসনা, সর্বোত্তম প্রতিদান; আর যারা সাড়া দেয়নি, তারা যমীনের সবকিছু এবং তার সমপরিমাণ আরও মুক্তিপণ হিসেবে দিতে চাইবে — অথচ তাদের হিসাব হবে কঠিনতম, আর তাদের আবাস জাহান্নাম। যা গোটা বন্যা বলে মনে হচ্ছিল, হিসাবের মুহূর্তে তার কোনো মূল্যই থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sorting Your Own Flood",
          "bn": "নিজের বন্যাটি বাছাই করা"
        },
        "p": [
          {
            "en": "Read as a personal audit, the parable puts one plain question to anything you are investing in: when the noise of it has passed, is there anything left in the ground that a person could use? Attention, applause and the appearance of momentum are foam by the verse's own definition. Knowledge taught, wealth spent well, a child raised, a wrong repaired — these soak in and stay.",
            "bn": "নিজের জীবনের হিসাব হিসেবে পড়লে উপমাটি আপনি যাতে বিনিয়োগ করছেন তার সামনে একটিই সরল প্রশ্ন রাখে: এর শোরগোল থেমে গেলে মাটিতে এমন কিছু কি পড়ে থাকে, যা কোনো মানুষের কাজে লাগে? মনোযোগ, হাততালি আর গতির বাহ্যিক চেহারা — আয়াতের নিজস্ব সংজ্ঞা অনুযায়ী এগুলো ফেনা। শেখানো জ্ঞান, সঠিক পথে ব্যয় করা সম্পদ, মানুষ করা সন্তান, শুধরে দেওয়া অন্যায় — এগুলো মাটিতে মিশে থেকে যায়।"
          },
          {
            "en": "The other half of the parable is bi-qadariha, according to its measure. No valley is blamed for being narrow; each carries what it can hold of the very same rain. That guards a reader against two errors at once, despising a smaller capacity and mistaking a larger one for personal merit. What came down came from the sky, and what remains will remain because it was useful.",
            "bn": "উপমার অন্য অর্ধেকটি হলো বিকদরিহা — নিজের পরিমাণ অনুযায়ী। সংকীর্ণ হওয়ার জন্য কোনো উপত্যকাকে দোষ দেওয়া হয় না; প্রত্যেকে একই বৃষ্টি থেকে ততটুকুই বহন করে, যতটুকু সে ধরতে পারে। এটি পাঠককে একসঙ্গে দুটি ভুল থেকে বাঁচায় — ছোট ধারণক্ষমতাকে তুচ্ছ জ্ঞান করা, আর বড় ধারণক্ষমতাকে নিজের কৃতিত্ব ভাবা। যা নেমেছে তা আকাশ থেকেই নেমেছে, আর যা থেকে যাবে তা থেকে যাবে কারণ তা উপকারী ছিল।"
          }
        ]
      }
    ]
  },
  "13:24": {
    "sections": [
      {
        "h": {
          "en": "Whose Words These Are",
          "bn": "এ কথা কার"
        },
        "p": [
          {
            "en": "The greeting is spoken by angels, and the sentence introducing them is the verse before. 13:23 names the Gardens of perpetual residence which they enter along with whoever was righteous among their forefathers, their spouses and their descendants, and then adds that the angels enter upon them from every gate. The quotation itself begins at 13:24 and runs to the end of it. Getting that boundary right matters, because the honour here is not that people say this to each other but that it is said to them on arrival.",
            "bn": "অভিবাদনটি ফেরেশতাদের মুখের, আর তাঁদের পরিচয় দেওয়া বাক্যটি আগের আয়াতে। 13:23 আয়াত স্থায়ী জান্নাতের নাম নেয়, যেখানে তারা প্রবেশ করবে তাদের পিতৃপুরুষ, স্বামী-স্ত্রী ও সন্তানদের মধ্যে যারা সৎকর্মশীল ছিল তাদের সঙ্গে; তারপর যোগ করে যে ফেরেশতারা প্রতিটি দরজা দিয়ে তাদের কাছে প্রবেশ করবে। উদ্ধৃতিটি শুরু হয় 13:24 আয়াতে এবং সেখানেই শেষ হয়। এই সীমানাটি ঠিক রাখা জরুরি, কারণ সম্মানটি এই নয় যে মানুষ পরস্পরকে এটি বলে, বরং এই যে পৌঁছানোর মুহূর্তে তাদের এটি বলা হয়।"
          },
          {
            "en": "Min kulli bab, from every gate. The picture is of a household whose visitors arrive at all its doors at once, and it is worth holding beside what 13:25 gives the other party immediately afterwards: those who break the covenant of Allah after binding it get the curse and the worst home. The same surah shows both arrivals. One is met at every entrance; the other is turned out of one.",
            "bn": "মিন কুল্লি বাব — প্রতিটি দরজা দিয়ে। ছবিটি এমন এক গৃহের, যার অতিথিরা একসঙ্গে সব দরজা দিয়ে এসে হাজির হন; আর এর পাশে রাখা দরকার ঠিক পরেই 13:25 আয়াত অন্য পক্ষকে যা দেয়: যারা আল্লাহর সঙ্গে দৃঢ় অঙ্গীকার করার পর তা ভাঙে, তাদের জন্য অভিশাপ এবং নিকৃষ্টতম আবাস। একই সূরা দুই ধরনের আগমনই দেখায়। একজনকে প্রতিটি প্রবেশপথে অভ্যর্থনা জানানো হয়; অন্যজনকে একটি পথ দিয়ে বের করে দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Because You Were Patient",
          "bn": "কারণ তোমরা ধৈর্য ধরেছিলে"
        },
        "p": [
          {
            "en": "Salamun 'alaykum bima sabartum. The mufassirun read the ba here as causal: peace be upon you on account of what you endured. That single word decides the tone of the whole greeting. It is not a general welcome extended to everyone present; it names a reason, and the reason is drawn from the visitors' own record rather than from the beauty of the place they have entered.",
            "bn": "সালামুন আলাইকুম বিমা সাবারতুম। মুফাসসিরগণ এখানে 'বা' অক্ষরটিকে কারণবাচক হিসেবে পড়েন: তোমরা যা সহ্য করেছ তার কারণে তোমাদের প্রতি শান্তি। এই একটি শব্দই গোটা অভিবাদনের সুর নির্ধারণ করে দেয়। এটি উপস্থিত সবার জন্য সাধারণ কোনো স্বাগত নয়; এটি একটি কারণের নাম নেয়, আর কারণটি নেওয়া হয়েছে আগন্তুকদের নিজেদের রেকর্ড থেকে — তারা যে জায়গায় ঢুকল তার সৌন্দর্য থেকে নয়।"
          },
          {
            "en": "Look at what else could have been named. 13:20-22 describes these people as those who fulfil the covenant of Allah and do not break the contract, who join what Allah ordered to be joined, who fear their Lord and dread an evil reckoning, who establish prayer, who spend from what He provided secretly and publicly, and who repel evil with good. From all of that, the angels at the door name one thing: sabr.",
            "bn": "লক্ষ করুন আর কী কী নাম নেওয়া যেত। 13:20-22 আয়াতগুলো এই মানুষদের বর্ণনা করে এভাবে — তারা আল্লাহর অঙ্গীকার পূর্ণ করে ও প্রতিশ্রুতি ভাঙে না, যা জুড়ে রাখার আদেশ আল্লাহ দিয়েছেন তা জুড়ে রাখে, তাদের রবকে ভয় করে ও ভয়াবহ হিসাবকে ভয় পায়, নামায কায়েম করে, তিনি যা দিয়েছেন তা থেকে গোপনে ও প্রকাশ্যে ব্যয় করে, আর মন্দকে ভালো দিয়ে প্রতিহত করে। এত কিছুর ভেতর থেকে দরজায় দাঁড়ানো ফেরেশতারা একটি জিনিসের নাম নেন: সবর।"
          },
          {
            "en": "But the sabr they name is a qualified one. 13:22 does not say those who were patient and leave it there; it says those who were patient ibtigha'a wajhi rabbihim, seeking the face of their Lord. Endurance on its own is a common human capacity and a stubborn man has plenty of it. What is greeted at the gate is endurance that had an addressee — the same difficulty carried, but carried toward Someone.",
            "bn": "তবে তাঁরা যে সবরের নাম নেন, তা শর্তযুক্ত। 13:22 আয়াত কেবল 'যারা ধৈর্য ধরেছে' বলে থেমে যায় না; বলে — যারা ধৈর্য ধরেছে ইবতিগা'আ ওয়াজহি রাব্বিহিম, তাদের রবের চেহারার সন্ধানে। নিছক সহ্যক্ষমতা মানুষের এক সাধারণ গুণ, আর একগুঁয়ে মানুষের তা প্রচুর থাকে। দরজায় যাকে অভিবাদন জানানো হয় তা এমন সহ্য যার একজন প্রাপক ছিল — একই কষ্ট বহন করা, তবে কারও দিকে মুখ করে বহন করা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Salam",
          "bn": "সালাম শব্দটি"
        },
        "p": [
          {
            "en": "Salam is built from a root of soundness and safety, the same root behind Islam. In this life the word is a wish: you say it over someone whose safety is not yet settled. Said at that door it is a report of fact. 15:48 describes the people of the Garden as those whom no fatigue touches and who are never removed from it, so there is nothing left for the wish to be about. 10:10 states that their greeting therein is salam, and 36:58 gives it as a word from a Merciful Lord.",
            "bn": "সালাম শব্দটি গড়া হয়েছে সুস্থতা ও নিরাপত্তার ধাতু থেকে — ইসলাম শব্দের পেছনেও সেই একই ধাতু। এই জীবনে শব্দটি একটি কামনা: আপনি তা বলেন এমন কারও জন্য যার নিরাপত্তা এখনো নিষ্পন্ন হয়নি। ওই দরজায় বলা হলে তা একটি বাস্তব সংবাদ। 15:48 আয়াত জান্নাতবাসীদের বর্ণনা করে এমনদের হিসেবে যাদের কোনো ক্লান্তি স্পর্শ করে না এবং যাদের সেখান থেকে কখনো বের করা হয় না — কাজেই কামনা করার মতো কিছু আর অবশিষ্ট থাকে না। 10:10 আয়াত বলে সেখানে তাদের অভিবাদন সালাম, আর 36:58 আয়াত একে দেয় পরম দয়ালু রবের পক্ষ থেকে এক বাণী হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Excellent Is the Outcome",
          "bn": "কতই না উত্তম পরিণাম"
        },
        "p": [
          {
            "en": "Fa ni'ma 'uqba ad-dar. 'Uqba comes from a root meaning what follows on the heels of a thing: the sequel, the end that a matter arrives at. So the exclamation is not simply that the home is excellent. It is that the outcome of the home is excellent — the praise falls on how the story finished, which is what a person who has just walked a long road would want said.",
            "bn": "ফা নি'মা 'উক্‌বাদ দার। 'উক্‌বা এসেছে এমন ধাতু থেকে যার অর্থ কোনো কিছুর গোড়ালির পিছু পিছু যা আসে: পরিণাম, যে শেষে গিয়ে বিষয়টি পৌঁছায়। কাজেই বিস্ময়োক্তিটি নিছক এই নয় যে ঘরটি উত্তম। বরং এই যে ঘরের পরিণামটি উত্তম — প্রশংসা পড়ে গল্পটি কীভাবে শেষ হলো তার ওপর, আর দীর্ঘ পথ হেঁটে আসা মানুষ ঠিক এই কথাটিই শুনতে চায়।"
          },
          {
            "en": "The phrase is not new when the angels use it. Two verses earlier, 13:22 has already closed on it: those are the ones for whom is 'uqba ad-dar. So what the angels exclaim at the gate is the very promise that was made about these people while they were still enduring. The words that were once a statement of what would be are now spoken back to them as what is, by those who came to the door to say it.",
            "bn": "ফেরেশতারা যখন কথাটি বলেন তখন তা নতুন নয়। দুই আয়াত আগেই 13:22 আয়াতটি এতেই শেষ হয়েছিল: তারাই তারা যাদের জন্য রয়েছে 'উক্‌বাদ দার। অর্থাৎ ফেরেশতারা দরজায় দাঁড়িয়ে যা বিস্ময়ের সঙ্গে বলেন, তা ঠিক সেই প্রতিশ্রুতি যা এই মানুষদের সম্পর্কে দেওয়া হয়েছিল যখন তারা তখনো সহ্য করে যাচ্ছিল। যে কথা একদিন ছিল 'কী হবে' তার বিবৃতি, আজ তা তাদেরই কাছে ফিরিয়ে বলা হচ্ছে 'কী আছে' হিসেবে — আর বলছেন তাঁরাই, যাঁরা কথাটি বলতেই দরজায় এসেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Toward the Greeting",
          "bn": "অভিবাদনের দিকে বেঁচে থাকা"
        },
        "p": [
          {
            "en": "The passage this belongs to shares a phrase with another. 13:22 and 35:29 both describe people who establish the prayer and spend from what Allah has provided them secretly and publicly, in identical wording. In ar-Ra'd the list opens with patience; in Fatir it opens with recitation of the Book. The overlap suggests these are not two elite groups but one ordinary practice described from two sides.",
            "bn": "যে অংশের সঙ্গে এটি জড়িত, তার সঙ্গে আরেকটি অংশের একটি বাক্যাংশ অভিন্ন। 13:22 এবং 35:29 — দুটি আয়াতই হুবহু একই শব্দে এমন মানুষদের বর্ণনা করে যারা নামায কায়েম করে আর আল্লাহ তাদের যা দিয়েছেন তা থেকে গোপনে ও প্রকাশ্যে ব্যয় করে। সূরা আর-রা'দে তালিকাটি শুরু হয় ধৈর্য দিয়ে; সূরা ফাতিরে শুরু হয় কিতাব তিলাওয়াত দিয়ে। এই মিল ইঙ্গিত দেয় যে এরা দুটি বিশেষ শ্রেণি নয়, বরং একটিই সাধারণ অনুশীলন দুই দিক থেকে বর্ণিত।"
          },
          {
            "en": "What the verse changes in practice is the status of an ordinary bad week. Difficulty that is merely survived is not what this greeting is for; difficulty carried toward Allah is. The two look identical from outside and are separated by one intention, renewed as often as it lapses. Someone nursing a parent, holding a job under an unfair manager or waiting years on a du'a is being addressed here. The greeting at the door names precisely that, and names nothing else.",
            "bn": "বাস্তব জীবনে আয়াতটি যা বদলে দেয় তা হলো একটি সাধারণ খারাপ সপ্তাহের মর্যাদা। কেবল কোনোভাবে টিকে থাকা কষ্টের জন্য এই অভিবাদন নয়; আল্লাহর দিকে মুখ করে বহন করা কষ্টের জন্য। বাইরে থেকে দুটিকে একরকম দেখায়, আর আলাদা করে কেবল একটি নিয়ত — যা ফুরিয়ে গেলেই আবার নবায়ন করতে হয়। যে মানুষ অসুস্থ বাবা-মাকে সেবা করছে, অন্যায় বসের অধীনে চাকরি টিকিয়ে রাখছে, কিংবা বছরের পর বছর একটি দোয়ার অপেক্ষায় আছে — তাকেই এখানে সম্বোধন করা হচ্ছে। দরজার অভিবাদন ঠিক সেই জিনিসটিরই নাম নেয়, আর কিছুরই নয়।"
          }
        ]
      }
    ]
  },
  "13:28": {
    "sections": [
      {
        "h": {
          "en": "A Word for Settling",
          "bn": "স্থির হওয়ার একটি শব্দ"
        },
        "p": [
          {
            "en": "The key term is itmi'nan, from a root used in classical Arabic for ground that is low and level, the kind of place where a traveller can finally put things down. The verse says hearts tatma'inn, come to rest, bi dhikrillah, through the remembrance of Allah. The image is not excitement or elation. It is the specific relief of something restless finally sitting still.",
            "bn": "মূল শব্দটি 'ইতমিনান', যার ধাতুটি ধ্রুপদী আরবিতে ব্যবহৃত হয় নিচু ও সমতল ভূমির জন্য — এমন জায়গা যেখানে পথিক অবশেষে বোঝা নামিয়ে রাখতে পারে। আয়াত বলে, হৃদয় 'তাতমাইন্ন' — স্থির হয়, প্রশান্ত হয় — 'বিযিকরিল্লাহ', আল্লাহর স্মরণে। এই চিত্রকল্প উত্তেজনা বা উচ্ছ্বাসের নয়। এটি সেই নির্দিষ্ট স্বস্তি, যা অস্থির কোনো কিছু অবশেষে থিতু হলে আসে।"
          },
          {
            "en": "The sentence is then said twice, and the second time it is reversed. First a description of a group: those who believe and whose hearts find rest in the remembrance of Allah. Then a general law introduced by ala, an alerting particle that Arabic uses to make a listener look up: unquestionably, it is in the remembrance of Allah that hearts find rest. The particular has become a rule about hearts as such.",
            "bn": "এরপর কথাটি দুইবার বলা হয়, আর দ্বিতীয়বার ক্রম উল্টে যায়। প্রথমে একটি দলের বর্ণনা: যারা ঈমান এনেছে এবং যাদের হৃদয় আল্লাহর স্মরণে প্রশান্তি পায়। তারপর একটি সাধারণ বিধান, যা শুরু হয় 'আলা' দিয়ে — সতর্ককারী একটি অব্যয়, যা আরবিতে শ্রোতাকে মুখ তুলে তাকাতে বাধ্য করে: জেনে রাখো, আল্লাহর স্মরণেই হৃদয় প্রশান্তি পায়। বিশেষ বর্ণনাটি হয়ে গেল হৃদয় সম্পর্কে এক সাধারণ নিয়ম।"
          }
        ]
      },
      {
        "h": {
          "en": "An Answer to a Demand",
          "bn": "একটি দাবির জবাব"
        },
        "p": [
          {
            "en": "Surah ar-Ra'd is Makkan, and the verses around this one are dominated by the deniers' demand for a spectacular sign. Verse 13:27 quotes them asking why a sign has not been sent down to him from his Lord, and the reply given is that Allah lets go astray whom He wills and guides to Himself whoever turns to Him. This verse then completes the thought by describing what that turning feels like from inside.",
            "bn": "সূরা আর-রা'দ মক্কী, আর এই আয়াতের আশেপাশের আয়াতগুলোতে প্রাধান্য পেয়েছে অস্বীকারকারীদের চমকপ্রদ নিদর্শনের দাবি। 13:27 আয়াতে তাদের প্রশ্ন উদ্ধৃত হয়েছে — তার রবের কাছ থেকে তার ওপর কোনো নিদর্শন নাযিল হয় না কেন? জবাবে বলা হয়, আল্লাহ যাকে চান পথভ্রষ্ট করেন, আর যে তাঁর দিকে ফিরে আসে তাকে নিজের দিকে পথ দেখান। এরপর এই আয়াত সেই ফিরে আসাটি ভেতর থেকে কেমন অনুভূত হয়, তা বর্ণনা করে ভাবনাটি পূর্ণ করে।"
          },
          {
            "en": "The placement carries an argument. People asking for a miracle were being told that certainty does not actually arrive through spectacle. Hearts settle through remembrance, which is available to anyone at any hour and requires no display. The verse immediately following, 13:29, adds the outcome: for them is tuba, a word the commentators explain as blessedness and goodness of life, and a good place of return.",
            "bn": "এই অবস্থানের ভেতরেই একটি যুক্তি আছে। যারা মুজিযা দাবি করছিল, তাদের বলা হচ্ছে যে নিশ্চয়তা আসলে দর্শনীয় চমক দিয়ে আসে না। হৃদয় প্রশান্ত হয় স্মরণে — যা যেকোনো মানুষের জন্য যেকোনো সময়ে সহজলভ্য এবং যার জন্য কোনো প্রদর্শনীর প্রয়োজন নেই। ঠিক পরের আয়াত 13:29 পরিণতিটুকু যোগ করে: তাদের জন্য রয়েছে 'তূবা' — মুফাসসিরগণ যে শব্দটিকে ব্যাখ্যা করেন কল্যাণ ও জীবনের সৌন্দর্য অর্থে — এবং উত্তম প্রত্যাবর্তনস্থল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Senses of Dhikr",
          "bn": "যিকরের দুটি অর্থ"
        },
        "p": [
          {
            "en": "The commentators offer two readings of dhikrillah here, and most combine them rather than choosing. The first is the servant's remembrance of Allah: the phrases of tasbih and tahlil, the tongue and heart returning to His name. The second is the Quran itself, which Allah repeatedly calls a dhikr, as in 15:9 where He names it and undertakes its preservation. On that reading, hearts settle when the revealed word is present with them.",
            "bn": "এখানে 'যিকরুল্লাহ'-র দুটি পাঠ মুফাসসিরগণ উপস্থাপন করেন, আর বেশিরভাগই একটি বেছে না নিয়ে দুটিকেই একসঙ্গে রাখেন। প্রথমটি হলো বান্দার পক্ষ থেকে আল্লাহর স্মরণ: তাসবীহ ও তাহলীলের বাক্যগুলো, জিহ্বা ও হৃদয়ের বারবার তাঁর নামে ফিরে আসা। দ্বিতীয়টি হলো স্বয়ং কুরআন, যাকে আল্লাহ বারবার 'যিকর' বলেছেন — যেমন 15:9-এ, যেখানে তিনি এর নাম দেন এবং এর সংরক্ষণের দায়িত্ব নেন। এই পাঠ অনুযায়ী, নাযিলকৃত বাণী সঙ্গে থাকলেই হৃদয় প্রশান্ত হয়।"
          },
          {
            "en": "Both senses point at the same practice, which is why the combination is natural. Reciting the Quran is dhikr; the adhkar are drawn largely from the Quran and the sunnah; and the effect described is not a technique but a relationship being maintained. The commentators generally resist making this verse into a promise about mood, and read it instead as a statement about where the heart's stability is actually located.",
            "bn": "দুটি অর্থই একই আমলের দিকে ইঙ্গিত করে, আর সে কারণেই সংযোগটি স্বাভাবিক। কুরআন তিলাওয়াত নিজেই যিকর; আর যিকরের বাক্যগুলোর বড় অংশ কুরআন ও সুন্নাহ থেকেই নেওয়া; আর যে ফলাফলের কথা বলা হয়েছে তা কোনো কৌশল নয়, বরং একটি সম্পর্ককে টিকিয়ে রাখা। মুফাসসিরগণ সাধারণত এই আয়াতকে মেজাজ সম্পর্কে প্রতিশ্রুতি বানানো থেকে বিরত থাকেন, বরং একে পড়েন হৃদয়ের স্থিরতা আসলে কোথায় অবস্থিত — সেই বিষয়ে একটি বিবৃতি হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prophet ﷺ and Unsettled Hours",
          "bn": "নবী ﷺ ও অস্থির প্রহর"
        },
        "p": [
          {
            "en": "Muslim records from Aishah (RA) that the Prophet ﷺ used to remember Allah at all his times, which describes a life in which dhikr was not reserved for crises. Al-Bukhari and Muslim also preserve the words he said at moments of distress, beginning with the declaration that there is no god but Allah, the Immense, the Forbearing, and continuing with His lordship over the Throne and the heavens and the earth.",
            "bn": "মুসলিম আয়িশা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ সর্বাবস্থায় আল্লাহকে স্মরণ করতেন — অর্থাৎ তাঁর জীবনে যিকর কেবল সংকটের জন্য তুলে রাখা ছিল না। বুখারী ও মুসলিমে সংকলিত আছে দুশ্চিন্তার মুহূর্তে তাঁর বলা বাক্যগুলোও, যা শুরু হয় এই ঘোষণা দিয়ে যে আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি মহান ও পরম সহনশীল — এবং এরপর আসে আরশ, আসমান ও যমীনের ওপর তাঁর প্রভুত্বের কথা।"
          },
          {
            "en": "The pattern in those narrations is worth noticing. The remembrance taught for hard moments is largely made of statements about Allah rather than statements about the problem. The heart is being given something solid to stand on, not being talked out of its fear. That is closer to how this verse works than any idea of dhikr as a calming exercise performed for its own sake.",
            "bn": "এই বর্ণনাগুলোর ধরনটি লক্ষ করার মতো। কঠিন মুহূর্তের জন্য শেখানো যিকরের বড় অংশই সমস্যা সম্পর্কে নয়, বরং আল্লাহ সম্পর্কে বিবৃতি দিয়ে গড়া। হৃদয়কে দাঁড়ানোর মতো শক্ত জমি দেওয়া হচ্ছে; তার ভয়কে যুক্তি দিয়ে ভুলিয়ে দেওয়া হচ্ছে না। যিকরকে নিছক মন শান্ত করার অনুশীলন ভাবার চেয়ে এই বোঝাপড়াটিই এই আয়াতের কাজের ধরনের অনেক কাছাকাছি।"
          }
        ]
      },
      {
        "h": {
          "en": "What Peace Is Not",
          "bn": "প্রশান্তি যা নয়"
        },
        "p": [
          {
            "en": "Honesty about this verse requires saying what it does not claim. It does not say that a believer never feels anxious, that grief will not return, or that remembrance replaces medical care, counselling or sleep. The Prophet ﷺ himself grieved, and the Quran records the fear of prophets in moments of danger, as in 20:67 where Musa (AS) felt fear within himself. Distress is not evidence of a defective heart.",
            "bn": "এই আয়াত নিয়ে সৎ থাকতে হলে বলতে হয়, এটি কী দাবি করে না। এটি বলে না যে মুমিন কখনো উদ্বিগ্ন হয় না, শোক আর ফিরে আসে না, কিংবা যিকর চিকিৎসা, পরামর্শ বা ঘুমের বিকল্প। স্বয়ং নবী ﷺ শোক করেছেন, আর কুরআন বিপদের মুহূর্তে নবীদের ভয়ের কথাও লিপিবদ্ধ করেছে — যেমন 20:67-এ মূসা (আঃ) নিজের ভেতরে ভয় অনুভব করেছিলেন। মানসিক কষ্ট কোনো ত্রুটিপূর্ণ হৃদয়ের প্রমাণ নয়।"
          },
          {
            "en": "What the verse promises is a floor rather than a ceiling: a place the heart can return to that does not move when circumstances do. Many people describe it as the difference between a problem that fills the whole horizon and the same problem seen as one item inside a much larger reality. Nothing external has changed. What has changed is that the heart is no longer suspended in mid-air.",
            "bn": "আয়াতটি যা প্রতিশ্রুতি দেয় তা ছাদ নয়, মেঝে: এমন একটি জায়গা যেখানে হৃদয় ফিরে আসতে পারে এবং যা পরিস্থিতি বদলালেও সরে যায় না। বহু মানুষ একে বর্ণনা করেন এভাবে — এক সমস্যা যখন গোটা দিগন্ত ঢেকে ফেলে, আর সেই একই সমস্যা যখন অনেক বড় এক বাস্তবতার ভেতরে একটি বিষয় মাত্র হিসেবে দেখা যায়, এই দুইয়ের পার্থক্য। বাইরের কিছুই বদলায়নি। যা বদলেছে তা হলো, হৃদয় আর শূন্যে ঝুলে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Small and Repeated",
          "bn": "ছোট ও পুনরাবৃত্ত"
        },
        "p": [
          {
            "en": "The practice this verse recommends is unimpressive by design. A few phrases repeated with attention will do more than an ambitious programme abandoned in a week. Subhanallah, alhamdulillah, la ilaha illallah, Allahu akbar, and astaghfirullah cover most of what a heart needs to say. Attaching them to fixed points, after prayers and before sleep, is what turns them from an idea into a habit.",
            "bn": "এই আয়াত যে আমলের পরামর্শ দেয়, তা ইচ্ছাকৃতভাবেই দেখনদারিহীন। মনোযোগ দিয়ে পুনরাবৃত্ত কয়েকটি বাক্য এক সপ্তাহে ছেড়ে দেওয়া উচ্চাভিলাষী কর্মসূচির চেয়ে বেশি কাজ করবে। সুবহানাল্লাহ, আলহামদুলিল্লাহ, লা ইলাহা ইল্লাল্লাহ, আল্লাহু আকবার আর আসতাগফিরুল্লাহ — হৃদয়ের বলার মতো প্রায় সবকিছুই এতে চলে আসে। নির্দিষ্ট সময়ের সঙ্গে — নামাযের পরে ও ঘুমানোর আগে — এগুলো বেঁধে দিলেই তা ধারণা থেকে অভ্যাসে পরিণত হয়।"
          },
          {
            "en": "It also helps to notice where the heart currently goes for settling. For most people the honest answer is a screen, and the relief it gives lasts exactly as long as the scrolling does. The verse is not asking anyone to enjoy silence immediately. It is claiming that one of these two places actually holds weight, and it invites a person to test the claim over a few ordinary weeks.",
            "bn": "হৃদয় এখন স্থির হওয়ার জন্য কোথায় যায়, তা লক্ষ করাও কাজে দেয়। বেশিরভাগ মানুষের সৎ উত্তর হলো একটি পর্দা, আর তা যে স্বস্তি দেয় তা ঠিক ততক্ষণই টেকে যতক্ষণ স্ক্রল চলে। আয়াতটি কাউকে বলছে না যে সঙ্গে সঙ্গে নীরবতা উপভোগ করতে হবে। এটি দাবি করছে যে এই দুই জায়গার একটিই কেবল ভার বইতে পারে — আর দাবিটি কয়েকটি সাধারণ সপ্তাহ ধরে যাচাই করে দেখার আমন্ত্রণ জানাচ্ছে।"
          }
        ]
      }
    ]
  }
});
