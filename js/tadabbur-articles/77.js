/**
 * Tadabbur long-form articles — surah 77.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "77:8": {
    "sections": [
      {
        "h": {
          "en": "A Sign Instead of a Date",
          "bn": "তারিখের বদলে আলামত"
        },
        "p": [
          {
            "en": "Fa-idha an-nujumu tumisat: so when the stars are effaced. Three Arabic words, and they come straight after the sentence for which the opening oaths of the surah were sworn. Ibn Kathir names 77:7, innama tu'aduna la-waqi', what you are promised will surely occur, as the subject of those oaths, and Ma'arif al-Qur'an says the same. The promise has been made and sworn to. The next question any listener would ask is when, and 77:8 is where the surah begins to answer it.",
            "bn": "ফা ইযান নুজূমু তুমিসাত: অতঃপর যখন নক্ষত্রগুলোকে মুছে দেওয়া হবে। আরবিতে মাত্র তিনটি শব্দ। এগুলো আসে ঠিক সেই বাক্যের পরে, যার জন্য সূরার শুরুর শপথগুলো করা হয়েছে। ইবন কাসীর বলেন, ৭৭:৭ আয়াতই ওই শপথগুলোর বিষয়: ইন্নামা তূআদূনা লাওয়াকি', তোমাদের যার ওয়াদা দেওয়া হয়েছে তা অবশ্যই ঘটবে। মাআরিফুল কুরআনও একই কথা বলে। ওয়াদা দেওয়া হয়ে গেছে, শপথ করে পাকা করাও হয়েছে। এরপর যে কোনো শ্রোতার মনে প্রশ্ন জাগে: কবে? ৭৭:৮ আয়াত থেকেই সূরা সেই প্রশ্নের জবাব দিতে শুরু করে।"
          },
          {
            "en": "Al-Qurtubi reads the link in just this way. His comment opens: then He made clear the time of its occurrence, and said, so when the stars are effaced. The fa that begins the verse carries the listener forward from the promise to its moment. Notice what kind of answer it is. No year is named and no count of days is given. The time is fixed by an event, and by an event that no human hand can bring about or hold back. The listener is told not the date of the Day but how it will be recognised.",
            "bn": "কুরতুবী সংযোগটা ঠিক এভাবেই পড়েন। তাঁর ব্যাখ্যা শুরু হয় এ কথায়: তারপর তিনি তা ঘটার সময় স্পষ্ট করলেন এবং বললেন, অতঃপর যখন নক্ষত্রগুলোকে মুছে দেওয়া হবে। আয়াতের শুরুর 'ফা' শ্রোতাকে ওয়াদা থেকে তার মুহূর্তের দিকে এগিয়ে নেয়। জবাবটা কেমন, খেয়াল করুন। কোনো সাল বলা হয়নি, দিনের কোনো হিসাবও দেওয়া হয়নি। সময়টা বাঁধা হয়েছে একটা ঘটনা দিয়ে। আর সে ঘটনা কোনো মানুষের হাতে ঘটানো যায় না, ঠেকানোও যায় না। শ্রোতা জানতে পারে দিনটার তারিখ নয়, বরং দিনটাকে চেনা যাবে কীভাবে।"
          },
          {
            "en": "Ibn Kathir spells out what the promise contains: the establishment of the Hour, the blowing of the horn, the raising of bodies, the gathering of the first and the last on one common ground, and the repaying of every doer according to his deed, good for good and evil for evil. All of this, he says, will come to pass and there is no avoiding it. Then, before turning to 77:8, he puts a heading over the verses that follow: a mention of some of what will occur on the Day of Judgement.",
            "bn": "ওয়াদার ভেতরে কী কী আছে, ইবন কাসীর তা খুলে বলেন: কিয়ামত কায়েম হওয়া, শিঙায় ফুঁক দেওয়া, দেহগুলোকে আবার জীবিত করা, আগের ও পরের সবাইকে এক ময়দানে জড়ো করা, আর প্রত্যেক আমলকারীকে তার আমল অনুযায়ী প্রতিদান দেওয়া। ভালোর বদলে ভালো, মন্দের বদলে মন্দ। তিনি বলেন, এর সবই ঘটবে, এড়ানোর কোনো পথ নেই। এরপর ৭৭:৮ আয়াতে যাওয়ার আগে তিনি সামনের আয়াতগুলোর ওপর একটা শিরোনাম বসান: বিচার দিবসে যা ঘটবে, তার কিছু বিবরণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Like Writing Worn Away",
          "bn": "ক্ষয়ে যাওয়া লেখার মতো"
        },
        "p": [
          {
            "en": "The verb is tumisat, from the root t-m-s. Al-Qurtubi gives the most textured account of it among the commentators fetched for this verse. Their light goes, he says, and their brightness is erased, ka-tamsi al-kitab, like the effacing of writing. Then he gives the word's everyday use: it is said of a thing, tamasa, when it wears away and is rubbed out, and the thing is then matmus. His last example comes from the open ground: the wind effaces tracks, so the wind is the effacer and the track is the effaced.",
            "bn": "ক্রিয়াটি হলো তুমিসাত, ধাতু ত-ম-স। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার মধ্যে কুরতুবীর বিবরণই সবচেয়ে খুঁটিনাটি। তিনি বলেন, তারাগুলোর আলো চলে যাবে, তাদের জ্যোতি মুছে দেওয়া হবে, কাতামসিল কিতাব, যেমন লেখা মুছে যায়। তারপর শব্দটির রোজকার ব্যবহার দেখান। কোনো জিনিস ক্ষয়ে গিয়ে মুছে গেলে বলা হয় তামাসা, আর জিনিসটা তখন মাতমূস। শেষ উদাহরণটা তিনি আনেন খোলা মাঠ থেকে। বাতাস পায়ের ছাপ মুছে দেয়। তাই বাতাস হলো মোছনেওয়ালা, আর ছাপটা হলো মুছে যাওয়া জিনিস।"
          },
          {
            "en": "Both of al-Qurtubi's pictures are of a mark losing its legibility. Writing that has been effaced may leave the page behind, but what was on it can no longer be read. A track the wind has covered was once a sign of who passed that way; afterwards the ground says nothing. Read through his examples, tumisat is less about a thing being smashed than about a thing ceasing to show what it used to show. Whatever else happens to the stars, the light by which they were seen is what the word takes away.",
            "bn": "কুরতুবীর দুটি ছবিই এমন চিহ্নের, যা আর পড়া যায় না। মুছে যাওয়া লেখার কাগজটা হয়তো থেকে যায়, কিন্তু তাতে যা লেখা ছিল তা আর পড়া যায় না। বাতাসে ঢাকা পড়া পায়ের ছাপ একসময় বলে দিত কে এ পথে গেছে। তারপর মাটি আর কিছুই বলে না। তাঁর উদাহরণগুলো দিয়ে পড়লে তুমিসাত মানে কোনো কিছু ভেঙে চুরমার হওয়া ততটা নয়, যতটা আগে যা দেখাত তা আর না দেখানো। তারাগুলোর আর যা-ই ঘটুক, যে আলোয় তাদের দেখা যেত, শব্দটা কেড়ে নেয় সেটাই।"
          },
          {
            "en": "The verb is also passive. The stars do not fade; they are effaced, and the verse does not stop to name who effaces them. The same is true of the three verses that follow. Each of 77:8 to 77:11 is three Arabic words long, each opens with idha, when, followed by a noun, and each ends in a passive verb. Sky, mountains and messengers are all acted upon, like the stars. Only the first of the four opens with fa; the other three join on with wa, and.",
            "bn": "ক্রিয়াটি কর্মবাচ্যেও। তারাগুলো নিজে নিজে ম্লান হয় না, তাদের মুছে দেওয়া হয়। কে মোছেন, আয়াত থেমে তা বলে না। পরের তিনটি আয়াতও একই রকম। ৭৭:৮ থেকে ৭৭:১১ পর্যন্ত প্রতিটি আয়াত আরবিতে তিন শব্দের। প্রতিটি শুরু হয় ইযা, অর্থাৎ যখন, দিয়ে, তারপর একটি বিশেষ্য, আর শেষে একটি কর্মবাচ্য ক্রিয়া। তারার মতোই আকাশ, পাহাড় আর রাসূলগণ, সবার ওপরই কিছু একটা ঘটানো হয়। চারটির মধ্যে শুধু প্রথমটি শুরু হয় 'ফা' দিয়ে। বাকি তিনটি জুড়েছে 'ওয়া', অর্থাৎ এবং, দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Neither Light Nor Glow",
          "bn": "না আলো, না দীপ্তি"
        },
        "p": [
          {
            "en": "Most of the commentators fetched for this verse read tumisat as the loss of the stars' light. At-Tabari puts it fully: the stars, their brightness gone, so that they had neither light nor glow. Al-Baghawi needs only two words, muhiya nuruha, their light was erased. Ibn Kathir in his Arabic tafsir says dhahaba daw'uha, their light went, and the abridged English rendering of his work gives the same: their light will leave. The Muyassar keeps to one line: the stars were effaced and their brightness went.",
            "bn": "এ আয়াতের জন্য দেখা তাফসীরকারদের বেশিরভাগই তুমিসাত মানে বোঝেন তারাগুলোর আলো হারানো। তাবারী কথাটা পুরো করে বলেন: নক্ষত্রগুলোর দীপ্তি চলে গেল, তাদের আর না রইল আলো, না রইল উজ্জ্বলতা। বাগাভীর লাগে মাত্র দুটি শব্দ: মুহিয়া নূরুহা, তাদের আলো মুছে দেওয়া হলো। ইবন কাসীর তাঁর আরবি তাফসীরে বলেন যাহাবা দাওউহা, তাদের আলো চলে গেল। তাঁর গ্রন্থের সংক্ষিপ্ত ইংরেজি রূপেও একই কথা: তাদের আলো বিদায় নেবে। মুয়াসসার এক লাইনেই থামে: নক্ষত্রগুলো মুছে দেওয়া হলো, আর তাদের দীপ্তি চলে গেল।"
          },
          {
            "en": "On this reading the stars stay in the sentence as its subject, and what is taken from them is their shining. At-Tabari's doubled negative, neither light nor glow, leaves no remainder: not a dimming but an ending of the light. Al-Qurtubi, whose word study was traced above, stands with this group too, since his first gloss is that their light goes and their brightness is erased. Put together, these five texts describe a night sky in which the stars give nothing more to be seen by.",
            "bn": "এই পাঠে তারাগুলো বাক্যের কর্তা হয়েই থাকে, তাদের কাছ থেকে কেড়ে নেওয়া হয় শুধু তাদের ঝলক। তাবারীর দ্বিগুণ না, না আলো, না উজ্জ্বলতা, কিছুই বাকি রাখে না। এ আলো কমে আসা নয়, আলো ফুরিয়ে যাওয়া। ওপরে যাঁর শব্দ বিশ্লেষণ দেখা হলো, সেই কুরতুবীও এই দলেই পড়েন। কারণ তাঁর প্রথম ব্যাখ্যাই হলো, তাদের আলো চলে যাবে আর জ্যোতি মুছে দেওয়া হবে। এই পাঁচটি তাফসীর মিলিয়ে যে রাতের আকাশের ছবি দাঁড়ায়, সেখানে তারাগুলো দেখার মতো আর কোনো আলো দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Scattered From Their Places",
          "bn": "নিজের জায়গা থেকে ছিটকে"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse differently. He first sets it inside the event as a whole: when what was promised occurs, the world undergoes such change, and such severe terrors arrive, as unsettle hearts and make distress grow heavy. Then he glosses the verse: fa-tantamisu an-nujumu, the stars are effaced, that is, tatanatharu wa tazulu 'an amakiniha, they scatter and are removed from their places. His explanation does not speak of light at all. For him the effacing is the stars' leaving the places they held.",
            "bn": "সা'দী আয়াতটি পড়েন অন্যভাবে। প্রথমে তিনি একে পুরো ঘটনার ভেতরে বসান: ওয়াদা করা দিনটি এলে দুনিয়ায় এমন পরিবর্তন ঘটবে, আর এমন কঠিন বিভীষিকা নেমে আসবে, যা অন্তরকে অস্থির করে তোলে আর কষ্টকে ভারী করে। তারপর আয়াতের ব্যাখ্যা দেন: নক্ষত্রগুলো মুছে যাবে, অর্থাৎ তাতানাসারু ওয়া তাযূলু আন আমাকিনিহা, তারা ছড়িয়ে পড়বে আর নিজেদের জায়গা থেকে সরে যাবে। তাঁর ব্যাখ্যায় আলোর কথা নেই। তাঁর কাছে মুছে যাওয়া মানে তারাগুলোর নিজ নিজ জায়গা ছেড়ে চলে যাওয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an holds the question open. The stars will be extinguished, it says, which could mean that they will be completely destroyed, or that they will remain but their light will be lost; either way the whole world will be plunged into total darkness. So the texts give two readings. The light goes and the stars remain, in at-Tabari, al-Baghawi, al-Qurtubi, Ibn Kathir and the Muyassar; the stars themselves scatter and leave their places, in as-Sa'di. The verse's word allows the difference, and this article does not settle it.",
            "bn": "মাআরিফুল কুরআন প্রশ্নটা খোলা রাখে। সেখানে বলা হয়েছে, নক্ষত্রগুলো নিভিয়ে দেওয়া হবে। এর মানে হতে পারে সেগুলো পুরোপুরি ধ্বংস হয়ে যাবে, আবার হতে পারে সেগুলো থেকে যাবে কিন্তু তাদের আলো হারিয়ে যাবে। যেভাবেই হোক, গোটা দুনিয়া ডুবে যাবে নিকষ অন্ধকারে। তাহলে তাফসীরগুলোতে দুটি পাঠ পাওয়া গেল। তাবারী, বাগাভী, কুরতুবী, ইবন কাসীর ও মুয়াসসারের মতে আলো চলে যাবে, তারাগুলো থেকে যাবে। সা'দীর মতে তারাগুলো নিজেরাই ছড়িয়ে পড়বে, জায়গা ছেড়ে সরে যাবে। আয়াতের শব্দে দুটোরই অবকাশ আছে, আর এ লেখা কোনোটির পক্ষে রায় দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Verses Ibn Kathir Adds",
          "bn": "ইবন কাসীরের জোড়া দুই আয়াত"
        },
        "p": [
          {
            "en": "Ibn Kathir does not leave the verse alone. Right after his gloss, their light went, he sets two other verses beside it, introducing each with ka-qawlihi, like His saying. The first is 81:2, wa idha an-nujumu nkadarat, which the abridged English renders as and when the stars fall. The second is 82:2, wa idha al-kawakibu ntatharat, rendered and when the stars have fallen and scattered. All three verses open with idha and name the stars, and all three belong to a run of such when-clauses.",
            "bn": "ইবন কাসীর আয়াতটিকে একা ছেড়ে দেন না। 'তাদের আলো চলে গেল', এই ব্যাখ্যার ঠিক পরেই তিনি পাশে আরও দুটি আয়াত বসান, প্রতিটির আগে লেখেন কাকাওলিহি, যেমন তাঁর বাণী। প্রথমটি ৮১:২, ওয়া ইযান নুজূমুন কাদারাত। সংক্ষিপ্ত ইংরেজি রূপে এর অনুবাদ: আর যখন নক্ষত্রগুলো খসে পড়বে। দ্বিতীয়টি ৮২:২, ওয়া ইযাল কাওয়াকিবুন তাসারাত, অনুবাদে: আর যখন নক্ষত্রগুলো খসে পড়ে ছড়িয়ে যাবে। তিনটি আয়াতই শুরু হয় ইযা দিয়ে, তিনটিতেই আছে তারার নাম। আর তিনটিই এমন কিছু 'যখন'-বাক্যের সারির অংশ।"
          },
          {
            "en": "One detail in this pairing is worth seeing. Ibn Kathir's own gloss speaks of light leaving, yet the second verse he cites carries the verb intatharat, from the root n-th-r, to scatter. That is the same root as as-Sa'di's word for the stars in this verse, tatanatharu, they scatter. Ibn Kathir does not comment on the overlap, and nothing here suggests that either scholar was answering the other. But the two readings set out above meet on one page, in the verses a single commentator chose to set beside 77:8.",
            "bn": "এই জোড়া লাগানোর মধ্যে একটা খুঁটিনাটি দেখার মতো। ইবন কাসীরের নিজের ব্যাখ্যায় আছে আলো চলে যাওয়ার কথা। অথচ তাঁর উদ্ধৃত দ্বিতীয় আয়াতের ক্রিয়া ইনতাসারাত, ধাতু ন-স-র, যার অর্থ ছড়িয়ে পড়া। এ আয়াতে তারাগুলো সম্পর্কে সা'দী যে শব্দ ব্যবহার করেছেন, তাতানাসারু, অর্থাৎ ছড়িয়ে পড়ে, সেটিও একই ধাতুর। এই মিল নিয়ে ইবন কাসীর কিছু বলেননি। কেউ কারও জবাব দিচ্ছিলেন, এমন কোনো ইঙ্গিতও এখানে নেই। তবু ওপরের দুটি পাঠ একই পাতায় এসে মেলে, একজন তাফসীরকার ৭৭:৮ আয়াতের পাশে যে আয়াতগুলো বেছে বসিয়েছেন, তাদের ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The First of Four Whens",
          "bn": "চারটি 'যখন'-এর প্রথমটি"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an counts the events in order: the stars are the first, the splitting of the sky the second, the mountains blown away as dust the third, and the fourth comes in 77:11. Ibn Kathir describes the sky as cleft and its edges weakened, and the mountains as removed until no sight or trace of them remains. The Muyassar reads 77:11 as the messengers being given an appointed time for the judgement between them and their nations. Those verses have their own entries; here they matter as the line 77:8 heads.",
            "bn": "মাআরিফুল কুরআন ঘটনাগুলো ক্রমানুসারে গোনে: প্রথম তারাগুলো, দ্বিতীয় আকাশ ফেটে যাওয়া, তৃতীয় পাহাড়গুলো ধূলির মতো উড়ে যাওয়া, আর চতুর্থটি আসে ৭৭:১১ আয়াতে। ইবন কাসীর বলেন, আকাশ ফেটে চৌচির হবে, তার কিনারাগুলো দুর্বল হয়ে পড়বে। আর পাহাড়গুলো এমনভাবে সরিয়ে নেওয়া হবে যে তাদের কোনো চিহ্ন বা ছাপ থাকবে না। মুয়াসসার ৭৭:১১ পড়ে এভাবে: রাসূলগণকে তাঁদের ও তাঁদের উম্মতের মধ্যে ফয়সালার জন্য একটা নির্দিষ্ট সময় দেওয়া হবে। ওই আয়াতগুলোর আলোচনা আলাদা। এখানে সেগুলোর গুরুত্ব শুধু এটুকু যে ৭৭:৮ সেই সারির শুরুতে দাঁড়িয়ে।"
          },
          {
            "en": "Read as a line, the four move from what is highest and farthest to what stands on the earth, and then to the messengers, to people. The stars come first, the lights that seem most remote from any human affair. In the Muyassar's reading of the group, the run ends with the Day of Judgement between all creatures, and with great ruin on that Day for those who deny it. That warning describes what the text describes, and it licenses nothing against any living person or community; it is addressed to whoever hears it.",
            "bn": "সারি হিসেবে পড়লে চারটি ঘটনা এগোয় সবচেয়ে উঁচু আর দূরের জিনিস থেকে মাটির ওপর দাঁড়ানো জিনিসের দিকে, তারপর রাসূলগণের দিকে, অর্থাৎ মানুষের দিকে। সবার আগে আসে তারাগুলো, যে আলোগুলোকে মানুষের যেকোনো ব্যাপার থেকে সবচেয়ে দূরের মনে হয়। মুয়াসসারের পাঠে এই সারি গিয়ে থামে সমস্ত সৃষ্টির মধ্যে ফয়সালার দিনে, আর যারা সেই দিনকে অস্বীকার করে তাদের জন্য সেদিনের মহাধ্বংসে। এ সতর্কবাণী কেবল তা-ই বর্ণনা করে যা পাঠে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। এর লক্ষ্য যে শোনে সে নিজেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited at the Hour of Maghrib",
          "bn": "মাগরিবের সময়ের তিলাওয়াত"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a sound hadith to it, and none gives an occasion of revelation for it. There is a narration about the surah as a whole, which is not attached to this verse. Al-Bukhari records in his Sahih (Bukhari 763) from Ibn 'Abbas: (My mother) Umm al-Fadl heard me reciting Wal-mursalati 'urfan and said, \"O my son! By Allah, your recitation made me remember that it was the last surah I heard from Allah's Messenger ﷺ. He recited it in the Maghrib prayer.\"",
            "bn": "এ আয়াতের জন্য দেখা কোনো তাফসীর এর সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি, নাযিলের কোনো উপলক্ষও উল্লেখ করেনি। পুরো সূরা নিয়ে একটি বর্ণনা আছে, যা এ আয়াতের সঙ্গে যুক্ত নয়। বুখারী তাঁর সহীহ গ্রন্থে (বুখারী ৭৬৩) ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: (আমার মা) উম্মুল ফাদল (রাঃ) আমাকে ওয়াল মুরসালাতি উরফা পড়তে শুনে বললেন, \"হে আমার ছেলে! আল্লাহর কসম, তোমার তিলাওয়াত আমাকে মনে করিয়ে দিল যে এটাই ছিল আল্লাহর রাসূল ﷺ-এর কাছ থেকে শোনা আমার শেষ সূরা। তিনি মাগরিবের নামাযে এটি পড়েছিলেন।\""
          },
          {
            "en": "The narration says nothing about this verse in particular, and nothing should be drawn from it about the stars. But a reader may notice the hour it names. Maghrib is prayed as the daylight leaves and the night begins. Whoever recites this surah in that prayer reaches the words so when the stars are effaced just as the first stars of the evening are coming into view. The sky that the verse speaks of losing is the very sky that is appearing overhead while it is recited.",
            "bn": "এ বর্ণনায় এই আয়াত সম্পর্কে আলাদা কোনো কথা নেই, তাই এ থেকে তারাগুলো নিয়ে কিছু বের করা ঠিক নয়। তবে পাঠক বর্ণনায় উল্লিখিত সময়টা খেয়াল করতে পারেন। মাগরিব পড়া হয় দিনের আলো বিদায় নেওয়ার সময়, রাত যখন শুরু হয়। যে এ নামাযে সূরাটি পড়ে, সে 'যখন নক্ষত্রগুলোকে মুছে দেওয়া হবে' কথাটায় পৌঁছায় ঠিক তখন, যখন সন্ধ্যার প্রথম তারাগুলো চোখে পড়তে শুরু করেছে। যে আকাশ হারিয়ে যাওয়ার কথা আয়াত বলছে, তিলাওয়াতের সময় মাথার ওপর সেই আকাশই ফুটে উঠছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Lights We Steer By",
          "bn": "যে আলো দেখে পথ চলি"
        },
        "p": [
          {
            "en": "For anyone who has looked up on a clear night, the stars seem the least changeable thing in view. Seasons turn, cities rise and fall, and the same lights appear in their places. The verse chooses exactly these as the first sign that the promised Day has come. If what looks most permanent is effaced first, then every lesser light a person leans on, wealth, health, a name, the people one depends on, is held on the same terms. None of them is worthless; none of them was ever the ground to stand on.",
            "bn": "পরিষ্কার রাতে যে কখনো আকাশের দিকে তাকিয়েছে, তার কাছে তারাগুলোকেই মনে হয় চোখের সামনে সবচেয়ে অপরিবর্তনীয় জিনিস। ঋতু বদলায়, শহর গড়ে ওঠে আর ভেঙে পড়ে, অথচ সেই একই আলো নিজ নিজ জায়গায় দেখা দেয়। ওয়াদা করা দিন যে এসে গেছে, তার প্রথম আলামত হিসেবে আয়াত বেছে নিয়েছে ঠিক এগুলোকেই। যা সবচেয়ে স্থায়ী দেখায়, তা-ই যদি আগে মুছে যায়, তবে মানুষ যে ছোট ছোট আলোর ওপর ভর করে, সম্পদ, সুস্থতা, সুনাম, ভরসার মানুষজন, সবই সেই একই শর্তে তার হাতে আছে। এগুলো মূল্যহীন নয়। কিন্তু এগুলো কখনোই দাঁড়ানোর মাটি ছিল না।"
          },
          {
            "en": "What does not fail is the sentence the stars were made to time. The surah swears to 77:7 and then gives signs, not dates, so that the promise can be recognised when it arrives. Ibn Kathir says the angels bring revelation to the messengers carrying excuse for the creatures and warning of Allah's punishment for those who defy His command. The warning, then, comes first, while the stars are still shining. By the time they are effaced, the warning will long since have been given, and heard or ignored.",
            "bn": "যা ব্যর্থ হয় না, তা হলো সেই বাক্য, যার সময় জানাতে তারাগুলোকে আলামত বানানো হয়েছে। সূরা ৭৭:৭ আয়াতের ওপর শপথ করে, তারপর তারিখ নয়, আলামত দেয়, যাতে ওয়াদা এসে পড়লে চেনা যায়। ইবন কাসীর বলেন, ফেরেশতারা রাসূলগণের কাছে ওহী নিয়ে আসেন। তাতে থাকে সৃষ্টির জন্য অজুহাত দূর করার কথা, আর যারা আল্লাহর আদেশের বিরোধিতা করে তাদের জন্য তাঁর শাস্তির সতর্কবাণী। তাহলে সতর্কবাণী আসে আগে, তারাগুলো যখনও জ্বলছে। তারা যখন মুছে যাবে, তার অনেক আগেই সতর্কবাণী পৌঁছে গেছে। কেউ তা শুনেছে, কেউ উপেক্ষা করেছে।"
          },
          {
            "en": "So the verse leaves a quiet task for tonight. Look up, if the sky is clear, and see lights that seem to have been there forever. Each of them has a last night, known to Allah alone. The question is not when that night will be, since the surah has already declined to give a date, but what is being done with the nights before it. The promise of 77:7 will occur. The stars are only how it will be known; the preparing has to happen while they still shine.",
            "bn": "তাই আয়াতটি আজ রাতের জন্য একটা নীরব কাজ রেখে যায়। আকাশ পরিষ্কার থাকলে ওপরে তাকান। দেখবেন এমন সব আলো, যেগুলোকে মনে হয় চিরকাল ওখানেই ছিল। প্রতিটিরই একটা শেষ রাত আছে, যা কেবল আল্লাহই জানেন। প্রশ্নটা সেই রাত কবে, তা নয়। সূরা তো তারিখ দিতে আগেই অস্বীকার করেছে। প্রশ্ন হলো, তার আগের রাতগুলো দিয়ে কী করা হচ্ছে। ৭৭:৭ আয়াতের ওয়াদা ঘটবেই। তারাগুলো শুধু জানিয়ে দেবে কখন। প্রস্তুতি নিতে হবে তারা জ্বলতে জ্বলতেই।"
          }
        ]
      }
    ]
  },
  "77:13": {
    "sections": [
      {
        "h": {
          "en": "An Answer in Two Words",
          "bn": "দুই শব্দের জবাব"
        },
        "p": [
          {
            "en": "Li-yawmi al-fasl: for the Day of Decision. The whole verse is two Arabic words, and it is an answer. Surat al-Mursalat has just run through four conditions, each opened by wa-idha, and when: when the stars are blotted out, when the sky is split, when the mountains are blown away, and when the messengers are given their appointed time (77:8 to 77:11). Then comes a question in 77:12, for what day was it deferred? This verse replies without a verb, naming only the day.",
            "bn": "লিয়াওমিল ফাসল: চূড়ান্ত ফয়সালার দিনের জন্য। গোটা আয়াত আরবিতে মাত্র দুটি শব্দ, আর পুরোটাই একটা জবাব। সূরা আল-মুরসালাত এর ঠিক আগে চারটি অবস্থার কথা বলেছে, প্রতিটির শুরু ওয়া ইযা, অর্থাৎ যখন দিয়ে। যখন নক্ষত্রের আলো মুছে যাবে, যখন আকাশ ফেটে যাবে, যখন পাহাড় উড়িয়ে দেওয়া হবে, আর যখন রসূলদের জন্য সময় ঠিক করে দেওয়া হবে (৭৭:৮ থেকে ৭৭:১১)। তারপর ৭৭:১২ আয়াতে প্রশ্ন: কোন দিনের জন্য একে পিছিয়ে রাখা হয়েছে? এ আয়াত জবাব দেয় কোনো ক্রিয়া ছাড়াই, শুধু দিনটির নাম বলে।"
          },
          {
            "en": "The shape matters. A question raised and answered by the same speaker is not a request for information; it is a way of making the listener wait for the name. Al-Baghawi marks the turn with a single phrase: then He made it clear, and said, for the Day of Decision. As-Sa'di does the same: then He answered with His words. This article stays with the name and with the deferral it answers. The cosmic signs before it and the refrain after it belong to their own verses.",
            "bn": "গঠনটাই এখানে কথা বলে। একই বক্তা যখন প্রশ্ন তোলেন আর নিজেই জবাব দেন, তখন সেটা তথ্য জানতে চাওয়া নয়। শ্রোতাকে নামটার জন্য একটু অপেক্ষা করানোই উদ্দেশ্য। বাগাভী মোড়টা চিহ্নিত করেন এক কথায়: তারপর তিনি স্পষ্ট করে বললেন, ফয়সালার দিনের জন্য। সা'দীও একই কথা বলেন: তারপর তিনি নিজের বাণী দিয়ে জবাব দিলেন। এ লেখা থাকবে নামটি আর যে স্থগিতের প্রশ্নের জবাব এটি, তা নিয়েই। আগের মহাজাগতিক আলামত আর পরের ধুয়া, দুটোরই আলোচনা তাদের নিজ নিজ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Meant to Awe",
          "bn": "বিস্ময় জাগানো প্রশ্ন"
        },
        "p": [
          {
            "en": "Why ask at all? The commentators agree that 77:12 is not a real question. At-Tabari says Allah asks it to make His servants marvel at the terror and severity of that day: for what day were the messengers deferred and given their time, how immense it is and how dreadful. Al-Qurtubi glosses ujjilat as ukhkhirat, it was put back, and calls it a question of ta'zim, of magnifying the day. As-Sa'di uses three words for it: exalting, magnifying and making fearful.",
            "bn": "প্রশ্নটা করার দরকার কী? তাফসীরকারেরা একমত যে ৭৭:১২ আসলে কিছু জানতে চাওয়া নয়। তাবারী বলেন, আল্লাহ এ প্রশ্ন করেন সেই দিনের ভয়াবহতা আর কঠোরতা দেখিয়ে বান্দাদের বিস্মিত করতে। কোন দিনের জন্য রসূলদের পিছিয়ে রাখা হলো, সময় বেঁধে দেওয়া হলো? কত বিরাট সেই দিন, কত ভয়ংকর! কুরতুবী উজ্জিলাত শব্দের অর্থ করেন উখখিরাত, পিছিয়ে দেওয়া হয়েছে। তাঁর মতে প্রশ্নটা তা'যীমের, দিনটির মহিমা বোঝানোর। সা'দী এর জন্য তিনটি শব্দ ব্যবহার করেন: মর্যাদা বাড়ানো, বড় করে দেখানো আর ভয় জাগানো।"
          },
          {
            "en": "Al-Baghawi adds the listener's side. A term was struck for gathering the messengers, he says, and so the servants were made to wonder at that day. Then 77:13 gives the name, and 77:14 asks again, and what will make you know what the Day of Decision is? Al-Qurtubi's comment there is short: He followed magnifying with more magnifying. The pattern is question, name, then a further question, so that the name arrives framed on both sides by wonder. The verse is the still point between them.",
            "bn": "বাগাভী যোগ করেন শ্রোতার দিকটা। তিনি বলেন, রসূলদের একত্র করার জন্য একটা মেয়াদ বেঁধে দেওয়া হয়েছিল, তাই বান্দারা সেই দিনটি নিয়ে বিস্মিত হলো। তারপর ৭৭:১৩ আয়াত নামটা বলে দেয়, আর ৭৭:১৪ আবার জিজ্ঞেস করে: ফয়সালার দিন কী, তা তোমাকে কিসে জানাবে? সেখানে কুরতুবীর মন্তব্য ছোট্ট: মহিমার পরে আরও মহিমা জুড়ে দিলেন। ক্রমটা তাই এরকম: প্রশ্ন, তারপর নাম, তারপর আরেক প্রশ্ন। নামটা আসে দুই দিক থেকে বিস্ময়ে ঘেরা হয়ে। আয়াতটি সেই দুইয়ের মাঝখানের স্থির বিন্দু।"
          }
        ]
      },
      {
        "h": {
          "en": "Messengers Given Their Time",
          "bn": "রসূলদের বেঁধে দেওয়া সময়"
        },
        "p": [
          {
            "en": "What was deferred? The subject of ujjilat is the messengers of 77:11, wa-idha al-rusulu uqqitat. At-Tabari reads it as: when the messengers are deferred to assemble at their time on the Day of Resurrection. He then gives the early glosses. Ibn 'Abbas said uqqitat means they were gathered. Mujahid said it means they were deferred. Ibrahim said they were promised. Ibn Zayd recited 5:109, the Day Allah will gather the messengers, and said their term runs to that day until they reach it.",
            "bn": "পিছিয়ে রাখা হয়েছিল কাকে? উজ্জিলাত ক্রিয়ার কর্তা ৭৭:১১ আয়াতের রসূলগণ: ওয়া ইযার রুসুলু উক্কিতাত। তাবারী অর্থ করেন: যখন রসূলদের কিয়ামতের দিন তাঁদের নির্ধারিত সময়ে একত্র হওয়ার জন্য পিছিয়ে রাখা হবে। তারপর তিনি আগের যুগের ব্যাখ্যাগুলো আনেন। ইবন আব্বাস (রাঃ) বলেন, উক্কিতাত মানে তাঁদের একত্র করা হলো। মুজাহিদ বলেন, পিছিয়ে রাখা হলো। ইবরাহীম বলেন, তাঁদের ওয়াদা দেওয়া হলো। ইবন যায়দ পড়েন ৫:১০৯ আয়াত, যেদিন আল্লাহ রসূলদের একত্র করবেন। তিনি বলেন, সেই দিন পর্যন্তই তাঁদের মেয়াদ, যতক্ষণ না তাঁরা সেখানে পৌঁছান।"
          },
          {
            "en": "Al-Qurtubi sets out two views. The first: the messengers were given a time and a term for the decision and judgement between them and their nations, on the Day of Resurrection. The second, introduced with it is said: this happens in this world, the messengers being gathered to the time set for punishing those who denied them. He judges the first better, because the timing in 77:11 belongs with the blotting of stars and the scattering of mountains, which happen on that Day, and a timing before it does not fit.",
            "bn": "কুরতুবী দুটি মত তুলে ধরেন। প্রথম মত: কিয়ামতের দিন রসূল আর তাঁদের উম্মতদের মধ্যে ফয়সালা ও বিচারের জন্য তাঁদের একটা সময় ও মেয়াদ দেওয়া হয়েছে। দ্বিতীয় মতটি তিনি আনেন 'বলা হয়' দিয়ে: ব্যাপারটা দুনিয়াতেই, যারা রসূলদের অস্বীকার করেছিল তাদের শাস্তির জন্য ঠিক করা সময়ে রসূলদের জমা করা হয়েছে। কুরতুবী প্রথমটিকে উত্তম বলেন। কারণ ৭৭:১১ আয়াতের সময় বেঁধে দেওয়া নক্ষত্রের আলো মুছে যাওয়া আর পাহাড় উড়ে যাওয়ার সঙ্গেই গাঁথা। সেগুলো ঘটবে সেই দিনেই, আর তার আগের কোনো সময় নির্ধারণ এখানে খাপ খায় না।"
          },
          {
            "en": "The word itself was read in more than one way. At-Tabari reports uqqitat with alif and a doubled qaf, wuqqitat with waw and a doubled qaf, and Abu Ja'far's wuqitat with a single qaf. He rules that all are known readings of one meaning, from waqt, time, the waw becoming a hamza because some Arabs find a waw with damma heavy. Ma'arif al-Qur'an cites az-Zamakhshari, through Ruh al-Ma'ani, for the sense of arriving at an appointed time, and prefers it here.",
            "bn": "শব্দটি একাধিকভাবে পড়া হয়েছে। তাবারী জানান, কেউ পড়েছেন আলিফ ও তাশদীদযুক্ত কাফ দিয়ে উক্কিতাত, কেউ ওয়াও ও তাশদীদযুক্ত কাফ দিয়ে ওয়ুক্কিতাত, আর আবু জা'ফর পড়েছেন তাশদীদ ছাড়া ওয়ুকিতাত। তাবারীর রায়: সবগুলোই পরিচিত কিরাআত, অর্থ একটাই। মূল শব্দ ওয়াকত, অর্থাৎ সময়। আরবদের কেউ কেউ পেশযুক্ত ওয়াওকে ভারী মনে করে হামযা বানিয়ে ফেলে, পার্থক্য সেখান থেকেই। মাআরিফুল কুরআন রূহুল মাআনীর সূত্রে যামাখশারীর ব্যাখ্যা আনে: নির্ধারিত সময়ে এসে পৌঁছানো। এখানে এ অর্থটিকেই বেশি মানানসই বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Held Over Until the Hour",
          "bn": "কিয়ামত পর্যন্ত তোলা রাখা"
        },
        "p": [
          {
            "en": "Ibn Kathir names what the deferral holds back: for what day were the messengers deferred and their matter postponed, until the Hour stands. He then reads it beside 14:47 and 14:48: so never think that Allah will fail His promise to His messengers, on the Day the earth is replaced by another earth, and the heavens, and they come out before Allah, the One, the Prevailing. That, he says, is the Day of Decision, as Allah said, li-yawmi al-fasl.",
            "bn": "স্থগিত রাখা হয়েছে কী, ইবন কাসীর তা নাম ধরে বলেন: কোন দিনের জন্য রসূলদের পিছিয়ে রাখা হলো আর তাঁদের বিষয়টা মুলতবি রাখা হলো? কিয়ামত কায়েম হওয়া পর্যন্ত। এরপর তিনি পাশে রাখেন ১৪:৪৭ ও ১৪:৪৮ আয়াত: কখনো ভেবো না আল্লাহ তাঁর রসূলদের দেওয়া ওয়াদা ভঙ্গ করবেন। সেদিন এ পৃথিবী বদলে অন্য পৃথিবী হবে, আসমানও বদলে যাবে, আর সবাই হাজির হবে একমাত্র ও প্রবল আল্লাহর সামনে। ইবন কাসীর বলেন, এটাই ফয়সালার দিন, যেমন আল্লাহ বলেছেন: লিয়াওমিল ফাসল।"
          },
          {
            "en": "Put the two readings together and the deferral has a content. The messengers were sent, they called, and their peoples answered as they answered. In this world their case with those peoples is left open. The Muyassar puts it plainly: the messengers were given a time and a term for the decision between them and the nations. As-Sa'di says the same: deferred for the judgement between them and their nations. What the messengers carried is not closed when they die; it is held over to a day appointed for closing it.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি রাখলে বোঝা যায়, স্থগিতের ভেতরে কী আছে। রসূলদের পাঠানো হয়েছিল, তাঁরা দাওয়াত দিয়েছেন, আর তাঁদের কওম যেভাবে সাড়া দেওয়ার দিয়েছে। দুনিয়াতে কওমের সঙ্গে তাঁদের এ মামলা খোলাই থেকে যায়। মুয়াসসার সোজা কথায় বলে: রসূলদের জন্য একটা সময় আর মেয়াদ ঠিক করা হয়েছে, যাতে তাঁদের আর উম্মতদের মধ্যে ফয়সালা হয়। সা'দীও তাই বলেন: তাঁদের আর তাঁদের উম্মতদের মধ্যে বিচারের জন্য পিছিয়ে রাখা হয়েছে। রসূলরা যা বয়ে এনেছিলেন, তাঁদের মৃত্যুতে তার নিষ্পত্তি হয় না। নিষ্পত্তির জন্য একটা দিন ঠিক করা আছে, সব তোলা থাকে সেই দিনের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Sorting Creatures, Settling Claims",
          "bn": "সৃষ্টিকে বাছাই, দাবির নিষ্পত্তি"
        },
        "p": [
          {
            "en": "Why call it al-fasl? The root f-s-l means to part things from each other, and from that, to decide between parties. At-Tabari gives the fullest gloss: the day on which Allah separates between His creation in judgement, so He takes for the wronged from whoever wronged him, and repays whoever did good for his good and whoever did evil for his evil. He adds that the people of interpretation said the same. Al-Baghawi reports Ibn 'Abbas: the day the Most Merciful decides between the creatures.",
            "bn": "নাম কেন আল-ফাসল? ফ-স-ল ধাতুর মূল অর্থ এক জিনিসকে আরেকটা থেকে আলাদা করা। সেখান থেকেই দুই পক্ষের মধ্যে রায় দেওয়া। তাবারীর ব্যাখ্যা সবচেয়ে বিস্তারিত: সেদিন আল্লাহ বিচারের মাধ্যমে তাঁর সৃষ্টির মধ্যে ফয়সালা করবেন। মাযলুমের পাওনা জালিমের কাছ থেকে আদায় করে দেবেন। সৎকর্মশীলকে তার সৎকাজের প্রতিদান দেবেন, আর মন্দকারীকে তার মন্দের। তাবারী যোগ করেন, তাফসীরবিদরাও এরকমই বলেছেন। বাগাভী ইবন আব্বাস (রাঃ)-এর কথা আনেন: সেদিন পরম দয়ালু সৃষ্টিজগতের মধ্যে ফয়সালা করবেন।"
          },
          {
            "en": "Qatada, in a report at-Tabari carries and al-Qurtubi repeats, puts it as a sorting: the day on which people are separated by their deeds, to the Garden and to the Fire. At-Tabari has and to the Fire; al-Qurtubi's wording has or to the Fire. So the name holds two pictures at once. One is a court, where claims between creatures are settled and every wrong is paid back. The other is a parting of ways, where each person goes, by what he did, to one of two homes.",
            "bn": "কাতাদা এটাকে দেখেন বাছাই হিসেবে। তাবারী তাঁর বর্ণনাটি এনেছেন, কুরতুবীও তা উদ্ধৃত করেছেন: সেদিন মানুষকে তাদের আমল অনুযায়ী আলাদা করা হবে, জান্নাতের দিকে আর জাহান্নামের দিকে। তাবারীর পাঠে আছে 'আর জাহান্নামের দিকে', কুরতুবীর পাঠে 'অথবা জাহান্নামের দিকে'। নামটির ভেতরে তাই একসঙ্গে দুটি ছবি। একটি আদালতের ছবি, যেখানে সৃষ্টির পরস্পরের দাবির নিষ্পত্তি হবে, প্রতিটি জুলুমের বদলা আদায় হবে। আরেকটি পথ ভাগ হয়ে যাওয়ার ছবি, যেখানে প্রত্যেকে নিজের আমল অনুযায়ী দুই ঠিকানার একটিতে যাবে।"
          },
          {
            "en": "These two are not set against each other in the sources. At-Tabari gives the judgement gloss and then cites Qatada's sorting as agreeing with it. As-Sa'di joins them in one line: between the creatures, some of them against others, and the reckoning of each of them on his own. The first half is the court of claims; the second is each person's own account. The Muyassar, glossing the group, calls it the Day of judgement and of decision between the creatures.",
            "bn": "সূত্রগুলো এ দুটিকে পরস্পরের বিপরীতে দাঁড় করায় না। তাবারী আগে বিচারের ব্যাখ্যা দেন, তারপর কাতাদার বাছাইয়ের কথাকে তারই সমর্থন হিসেবে আনেন। সা'দী দুটিকে একটি বাক্যে জোড়েন: সৃষ্টিজগতের মধ্যে, একের বিরুদ্ধে অন্যের দাবি, আর প্রত্যেকের আলাদা আলাদা হিসাব। প্রথম অংশ পরস্পরের দাবির আদালত, দ্বিতীয় অংশ প্রত্যেকের নিজের হিসাব। মুয়াসসার পুরো অংশের ব্যাখ্যায় দিনটিকে বলে সৃষ্টিজগতের মধ্যে বিচার ও ফয়সালার দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked Again, Named Again",
          "bn": "আবার প্রশ্ন, আবার নাম"
        },
        "p": [
          {
            "en": "The name is no sooner given than it is questioned. In 77:14, wa-ma adraka ma yawmu al-fasl, at-Tabari hears Allah addressing His Prophet Muhammad ﷺ: and what has made you know, O Muhammad, what the Day of Decision is, magnifying its matter and the severity of its terror. He cites Qatada: a magnifying of that day. The Muyassar addresses the line instead to you, O human being: what will make you know what the Day of Decision is, its severity and its terror?",
            "bn": "নামটা বলার সঙ্গে সঙ্গেই আবার প্রশ্ন ওঠে। ৭৭:১৪ আয়াতে, ওয়ামা আদরাকা মা ইয়াওমুল ফাসল, তাবারী শোনেন নবী মুহাম্মাদ ﷺ-কে আল্লাহর সম্বোধন: হে মুহাম্মাদ, ফয়সালার দিন কী, তা তোমাকে কিসে জানাল? এতে দিনটির গুরুত্ব আর তার ভয়াবহতার তীব্রতা বড় করে দেখানো হয়েছে। তিনি কাতাদার কথা আনেন: সেই দিনের মহিমা বোঝানো। মুয়াসসার সম্বোধনটা ধরে ভিন্নভাবে: হে মানুষ, ফয়সালার দিন কী, তার কঠোরতা আর ভয়াবহতা কেমন, তা তোমাকে কিসে জানাবে?"
          },
          {
            "en": "So the sources differ on who is first addressed: at-Tabari names the Prophet ﷺ, and the Muyassar names the human being. Both readings leave the same weight on the listener, since what is beyond the Messenger's knowing until it is told is beyond everyone's. The surah does not leave the name there. In 77:38 it returns as a statement on the day itself: this is the Day of Decision; We have gathered you and the former peoples. The deferral of 77:12 ends in that gathering.",
            "bn": "অর্থাৎ প্রথম সম্বোধন কার প্রতি, তা নিয়ে সূত্রগুলো আলাদা কথা বলে। তাবারী বলেন নবী ﷺ-এর কথা, মুয়াসসার বলে মানুষের কথা। দুই ব্যাখ্যাতেই শ্রোতার উপর ভার একই থাকে। রসূলও যা না বলে দেওয়া পর্যন্ত জানেন না, তা অন্য কারও জানার বাইরে তো আরও বেশি। সূরাটি নামটাকে এখানেই ছেড়ে দেয় না। ৭৭:৩৮ আয়াতে সেটা ফিরে আসে সেদিনের ঘোষণা হয়ে: এটাই ফয়সালার দিন, আমি তোমাদেরকে আর আগের লোকেদের একত্র করেছি। ৭৭:১২ আয়াতের স্থগিত শেষ হয় এই সমাবেশে।"
          },
          {
            "en": "Between those two points the surah sets its refrain for the first time, in 77:15: woe that day to the deniers. The Muyassar, closing its gloss on this passage, reads the woe as great ruin on that day for those who deny this promised day. The deniers there are named by what they deny, which is the very day this verse names. What the woe consists of is left as the verse gives it here; the refrain recurs through the surah and is treated where it stands.",
            "bn": "এ দুইয়ের মাঝে সূরাটি প্রথমবারের মতো তার ধুয়া বসায়, ৭৭:১৫ আয়াতে: সেদিন দুর্ভোগ মিথ্যারোপকারীদের জন্য। মুয়াসসার এ অংশের ব্যাখ্যা শেষ করে এভাবে: এই প্রতিশ্রুত দিনকে যারা অস্বীকার করে, সেদিন তাদের জন্য মহা ধ্বংস। সেখানে মিথ্যারোপকারীদের পরিচয় তারা কী অস্বীকার করে তা দিয়ে, আর সেটা ঠিক সেই দিন, যার নাম এ আয়াত বলছে। দুর্ভোগটা কী, এখানে তা আয়াতের ভাষাতেই রেখে দেওয়া হলো। ধুয়াটি সূরাজুড়ে বারবার ফিরে আসে, আর প্রতিটি জায়গায় তার আলোচনা সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Left Unclaimed Here",
          "bn": "যে বর্ণনা এখানে আনা হলো না"
        },
        "p": [
          {
            "en": "None of the tafsirs fetched for this verse attaches a sound hadith to it with a collection and a grading. Al-Qurtubi quotes one narration about people waiting for the decision, introduced only with in the hadith, and names no collection; it could not be confirmed, so it is not reproduced. A report that woe in the refrain is a valley in Jahannam is also left out, since no source fetched here carries it. No occasion of revelation is given for the verse in these texts.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই সংকলন ও মানসহ কোনো সহীহ হাদীস এর সঙ্গে যুক্ত করেনি। কুরতুবী ফয়সালার অপেক্ষায় থাকা মানুষদের নিয়ে একটি বর্ণনা আনেন শুধু 'হাদীসে আছে' বলে, কোনো সংকলনের নাম দেন না। সেটা যাচাই করা যায়নি, তাই এখানে আনা হলো না। ধুয়ার ওয়াইল শব্দটি জাহান্নামের একটি উপত্যকা, এমন বর্ণনাও বাদ রাখা হলো, কারণ এখানে দেখা কোনো সূত্রে তা নেই। এসব সূত্রে আয়াতটির কোনো শানে নুযূলও উল্লেখ নেই।"
          },
          {
            "en": "One thing must be said plainly. The deniers of 77:15 and the former peoples of 77:16 are described as the text describes them, as those who deny the promised day, and the decision on them belongs to Allah on that day. The verse licenses nothing against any living person or community. It names a day on which Allah decides, and that is the point: the judging is His, and it is deferred to Him. No reader is made a judge of anyone by reading it.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। ৭৭:১৫ আয়াতের মিথ্যারোপকারী আর ৭৭:১৬ আয়াতের আগেকার লোকেদের কথা আয়াত যেভাবে বলেছে, সেভাবেই এসেছে: তারা প্রতিশ্রুত দিনকে অস্বীকার করেছে। তাদের ব্যাপারে ফয়সালা সেদিন আল্লাহর হাতে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আয়াতটি এমন এক দিনের নাম বলে, যেদিন আল্লাহ ফয়সালা করবেন। মূল কথা এটাই: বিচার তাঁর, আর তা তাঁর কাছেই তোলা রাখা হয়েছে। এ আয়াত পড়ে কোনো পাঠক কারও বিচারক হয়ে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Before a Fixed Verdict",
          "bn": "নির্ধারিত রায়ের আগের জীবন"
        },
        "p": [
          {
            "en": "The verse teaches a way of reading delay. In 77:12 something is deferred, and the next verse says it is deferred to a named day, not cancelled. Ibn Kathir's pairing with 14:47 makes the same point from the other side: never think Allah will fail His promise. A wronged person who saw no justice in this life has not been overlooked; his claim is on the list of a day whose purpose, in at-Tabari's words, is to take for the wronged from the one who wronged him.",
            "bn": "আয়াতটি দেরিকে কীভাবে দেখতে হয়, তা শেখায়। ৭৭:১২ আয়াতে কিছু একটা পিছিয়ে রাখা হয়েছে, আর পরের আয়াত বলে, পিছিয়েছে একটা নির্দিষ্ট দিনের জন্য, বাতিল হয়নি। ইবন কাসীর ১৪:৪৭ আয়াতকে পাশে রেখে একই কথা অন্য দিক থেকে বলেন: কখনো ভেবো না আল্লাহ ওয়াদা ভঙ্গ করবেন। যে মাযলুম এ জীবনে ইনসাফ দেখেনি, তাকে কেউ ভুলে যায়নি। তার দাবি তোলা আছে এমন এক দিনের তালিকায়, যার কাজই তাবারীর ভাষায় মাযলুমের পাওনা জালিমের কাছ থেকে আদায় করা।"
          },
          {
            "en": "The same reading turns back on the reader. If claims are held over, so are the claims against me. Qatada's sorting is by deeds, and as-Sa'di's reckoning is of each person on his own, so the day that comforts the wronged also waits for whoever wronged them. There is still time on this side of it: to return what was taken, to ask pardon of the one I hurt, and to leave to the Day of Decision the verdicts I was never meant to give.",
            "bn": "একই কথা পাঠকের দিকেও ফিরে আসে। দাবিগুলো যদি তোলা থাকে, তবে আমার বিরুদ্ধে যে দাবি, সেগুলোও তোলা আছে। কাতাদার বাছাই আমল দিয়ে, আর সা'দীর হিসাব প্রত্যেকের আলাদা। তাই যে দিন মাযলুমকে সান্ত্বনা দেয়, সেই দিনই জালিমের জন্যও অপেক্ষা করে আছে। সেই দিনের এপারে এখনো সময় আছে। যা কেড়ে নিয়েছি তা ফিরিয়ে দেওয়ার, যাকে কষ্ট দিয়েছি তার কাছে মাফ চাওয়ার। আর যে রায় দেওয়ার দায়িত্ব কখনো আমার ছিল না, তা ফয়সালার দিনের হাতে ছেড়ে দেওয়ার।"
          }
        ]
      }
    ]
  }
});
