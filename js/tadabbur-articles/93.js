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
          "en": "Two or Three Nights",
          "bn": "দুই কিংবা তিন রাত"
        },
        "p": [
          {
            "en": "Al-Bukhari records in his Sahih (4950) from Jundub ibn Sufyan (RA): the Messenger of Allah ﷺ fell ill and did not rise for two or three nights. A woman came and said: O Muhammad, I hope that your shaytan has left you; I have not seen him come near you for two or three nights. Then Allah, Mighty and Majestic, revealed: by the forenoon, and by the night when it grows still, your Lord has not taken leave of you, nor has He come to hate. Al-Qurtubi quotes it and calls it the soundest of what has been said on the occasion.",
            "bn": "বুখারী তাঁর সহীহ গ্রন্থে (৪৯৫০) জুনদুব ইবন সুফইয়ান (রাঃ) থেকে বর্ণনা করেছেন: রাসূলুল্লাহ ﷺ অসুস্থ হয়ে পড়লেন, দুই কিংবা তিনটি রাত তিনি উঠলেন না। তখন এক নারী এসে বলল, হে মুহাম্মাদ, আমার তো আশা, তোমার শয়তান তোমাকে ছেড়ে গেছে; দুই কিংবা তিনটি রাত ধরে তাকে তোমার কাছে ঘেঁষতে দেখিনি। তখন মহান আল্লাহ নাজিল করলেন: শপথ পূর্বাহ্নের, শপথ রাতের যখন তা নিঝুম হয়, তোমার রব তোমাকে বিদায় দেননি, বিরূপও হননি। কুরতুবী এটি উদ্ধৃত করে বলেন, এই উপলক্ষ নিয়ে যত কথা বলা হয়েছে, তার মধ্যে এটিই সবচেয়ে বিশুদ্ধ।"
          },
          {
            "en": "The sources differ over who spoke. Al-Qurtubi, citing ath-Tha'labi, names her Umm Jamil, the wife of Abu Lahab, and Ma'arif al-Qur'an gives the same name from other reports; al-Bukhari's own wording says only a woman. At-Tabari's chains from Jundub vary: a woman of his household or of his people; the idolaters; a woman who said, I see only that your companion has been slow with you. Two further reports in at-Tabari give the words to Khadija (RA), and in 'Urwa's she says them because of the distress she saw in him.",
            "bn": "কথাটা কে বলেছিল, তা নিয়ে সূত্রগুলো এক নয়। কুরতুবী সা'লাবীর বরাতে তার নাম বলেন উম্মু জামীল, আবু লাহাবের স্ত্রী। মাআরিফুল কুরআনও অন্য বর্ণনার ভিত্তিতে একই নাম দেয়। অথচ বুখারীর নিজের ভাষায় আছে শুধু এক নারী। জুনদুব থেকে তাবারীর সনদগুলোতেও ভিন্নতা আছে: কোথাও তাঁর পরিবারের বা গোত্রের এক নারী, কোথাও মুশরিকরা, কোথাও এক নারী যে বলেছিল, দেখছি তোমার সঙ্গী তোমার কাছে আসতে দেরি করছে। তাবারীর আরও দুটি বর্ণনায় কথাটা খাদীজা (রাঃ)-এর মুখে, আর উরওয়ার বর্ণনায় তিনি তা বলেন নবীজির মধ্যে যে অস্থিরতা দেখছিলেন সে কারণে।"
          },
          {
            "en": "Al-Qurtubi also quotes at-Tirmidhi's version from Jundub, which at-Tirmidhi grades hasan sahih: the Prophet ﷺ was in a cave when his finger bled, and he said, you are only a finger that has bled, and what you met was in the path of Allah; Jibril (AS) was slow to come, the idolaters said Muhammad has been bidden farewell, and the verse came down. Ma'arif al-Qur'an sees no conflict between the accounts: the narrator may have told one part at one time and the other at another.",
            "bn": "কুরতুবী জুনদুব থেকে তিরমিযীর বর্ণনাটিও উদ্ধৃত করেন, তিরমিযী যাকে হাসান সহীহ বলেছেন। নবী ﷺ এক গুহায় ছিলেন, তাঁর আঙুল থেকে রক্ত ঝরল। তিনি বললেন, তুমি তো কেবল এক আঙুল, যার রক্ত ঝরেছে, আর যা পেয়েছ তা আল্লাহর পথেই। জিবরীল (আঃ) আসতে দেরি করলেন, মুশরিকরা বলল, মুহাম্মাদকে বিদায় দেওয়া হয়েছে, তখন আয়াতটি নাজিল হলো। মাআরিফুল কুরআন দুই বর্ণনার মধ্যে কোনো বিরোধ দেখে না। হতে পারে বর্ণনাকারী এক সময় একটা অংশ বলেছেন, আরেক সময় অন্যটা।"
          }
        ]
      },
      {
        "h": {
          "en": "When Jibril Was Slow",
          "bn": "জিবরীল (আঃ) যখন দেরি করলেন"
        },
        "p": [
          {
            "en": "How long the gap lasted is not agreed. Al-Qurtubi lists the figures: Ibn Jurayj said revelation was held back 12 days, Ibn 'Abbas said 15, another view says 25, and Muqatil said 40. The idolaters, he reports, argued that if his affair were from Allah it would have continued, as it had with the prophets before him. In al-'Awfi's report from Ibn 'Abbas, which Ibn Kathir and at-Tabari both carry, Jibril (AS) was slow for some days after the Qur'an began to come, and the idolaters said: his Lord has left him and come to hate him.",
            "bn": "বিরতিটা কত দিনের ছিল, তা নিয়ে মতৈক্য নেই। কুরতুবী হিসাবগুলো তুলে ধরেন: ইবন জুরাইজের মতে ওহি বন্ধ ছিল ১২ দিন, ইবন আব্বাস (রাঃ)-এর মতে ১৫ দিন, আরেক মতে ২৫ দিন, আর মুকাতিলের মতে ৪০ দিন। তিনি জানান, মুশরিকদের যুক্তি ছিল: তাঁর ব্যাপারটা আল্লাহর পক্ষ থেকে হলে ওহি একটানা আসত, যেমন আগের নবীদের কাছে আসত। ইবন আব্বাস (রাঃ) থেকে আওফীর বর্ণনা ইবন কাসীর ও তাবারী দুজনেই এনেছেন। তাতে আছে, কুরআন নাজিল শুরু হওয়ার পর জিবরীল (আঃ) কিছুদিন দেরি করলেন, আর মুশরিকরা বলল, তার রব তাকে ছেড়ে দিয়েছেন, তার প্রতি বিরূপ হয়েছেন।"
          },
          {
            "en": "Other occasions appear in the tafsirs as reports. Al-Qurtubi relates from Khawla, who served the Prophet ﷺ, that a puppy had died under a bed in the house, and revelation came once she swept it out. Under the words it was said, he gives a report linking the pause to questions put to him about the spirit, Dhul-Qarnayn and the Companions of the Cave, ending with 18:23 and 18:24, and another in which Jibril (AS) says he is a servant under command, after which 19:64 came down: we descend only by the command of your Lord.",
            "bn": "তাফসীরে আরও কিছু উপলক্ষ এসেছে, বর্ণনা হিসেবে। কুরতুবী নবীজির ﷺ খাদেমা খাওলা থেকে বর্ণনা করেন: ঘরে খাটের নিচে একটি কুকুরছানা মরে পড়ে ছিল, তিনি ঝাড়ু দিয়ে সেটা বের করার পর ওহি এল। 'বলা হয়' কথাটি দিয়ে তিনি আরেকটি বর্ণনা আনেন, যাতে বিরতিটা যুক্ত হয়েছে রূহ, যুলকারনাইন ও গুহাবাসীদের নিয়ে তাঁকে করা প্রশ্নের সঙ্গে, আর তার শেষে আছে ১৮:২৩ ও ১৮:২৪। আরেক বর্ণনায় জিবরীল (আঃ) বলেন, তিনি হুকুমের অধীন এক বান্দা, তারপর নাজিল হয় ১৯:৬৪: আমরা তোমার রবের হুকুম ছাড়া নামি না।"
          },
          {
            "en": "None of these displaces al-Bukhari's report, which al-Qurtubi ranks above the rest; the others stay what they are, reports. One more thing needs saying plainly. The verses answer what one woman and some Makkan idolaters said on one occasion, and the sources name her. That naming describes what the reports describe. It licenses nothing against any living person or community, and no taunting of anyone who disbelieves today. What the surah does with the taunt is to answer it, not to repay it.",
            "bn": "এগুলোর কোনোটিই বুখারীর বর্ণনার জায়গা নিতে পারে না। কুরতুবী সেটিকেই সবার ওপরে রাখেন। বাকিগুলো বর্ণনা, বর্ণনা হিসেবেই এখানে থাকল। আরেকটা কথা সোজাসুজি বলা দরকার। আয়াতগুলো জবাব দিচ্ছে একটি নির্দিষ্ট ঘটনায় এক নারী আর মক্কার কিছু মুশরিকের কথার। সূত্রগুলো সেই নারীর নাম বলেছে, আর সে নাম কেবল বর্ণনায় যা আছে তা-ই জানায়। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এতে নেই। আজ যে ঈমান আনেনি, তাকে খোঁটা দেওয়ার অনুমতিও নেই। সূরাটি খোঁটার জবাব দেয়, খোঁটা ফিরিয়ে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word for Parting",
          "bn": "বিদায়ের শব্দটি"
        },
        "p": [
          {
            "en": "The two oaths before it, by the forenoon and by the night when it grows still, are in the Muyassar the whole of the day and the night when it settles over creation; Ibn Kathir reads them as a plain proof of the Creator's power. Ma wadda'aka rabbuka wa ma qala is what they are sworn for: at-Tabari, al-Qurtubi and al-Baghawi each call it the answer to the oath. At-Tabari's gloss is plain: your Lord has not left you, O Muhammad, nor hated you, and so says Ibn 'Abbas.",
            "bn": "এর আগের দুটি শপথ, পূর্বাহ্নের শপথ আর নিঝুম রাতের শপথ। মুয়াসসারের ব্যাখ্যায় পূর্বাহ্ন মানে গোটা দিন, আর রাত মানে সৃষ্টিজগতের ওপর যখন তা থিতু হয়ে নামে। ইবন কাসীর এ দুটিকে স্রষ্টার কুদরতের স্পষ্ট প্রমাণ হিসেবে পড়েন। শপথ দুটি করা হয়েছে যে কথার জন্য, তা হলো মা ওয়াদ্দাআকা রাব্বুকা ওয়ামা কালা। তাবারী, কুরতুবী ও বাগাভী তিনজনই একে শপথের জবাব বলেছেন। তাবারীর ব্যাখ্যা সাদামাটা: হে মুহাম্মাদ, তোমার রব তোমাকে ছেড়ে দেননি, তোমার প্রতি বিদ্বেষও রাখেননি। ইবন আব্বাস (রাঃ)-এর কথাও এটাই।"
          },
          {
            "en": "Al-Qurtubi dwells on the verb. The common reading, wadda'aka with a doubled d, comes from tawdi', and he likens it to the farewell of someone parting. Ibn 'Abbas and Ibn az-Zubayr are reported to have read wada'aka, without the doubling, meaning simply left you, a form he says is rarely used. For qala, Ibn Zayd in at-Tabari says the qali is he who hates, and al-Qurtubi gives qila as hatred, citing lines of Arabic poetry for it.",
            "bn": "ক্রিয়াটি নিয়ে কুরতুবী একটু থামেন। প্রচলিত পাঠ ওয়াদ্দাআকা, দাল-এ তাশদীদসহ। এটি এসেছে তাওদী' থেকে, আর তিনি একে তুলনা করেন বিদায় নিয়ে চলে যাওয়া মানুষের বিদায়-সম্ভাষণের সঙ্গে। বর্ণিত আছে, ইবন আব্বাস (রাঃ) ও ইবনুয যুবাইর (রাঃ) তাশদীদ ছাড়া ওয়াদাআকা পড়েছেন, যার অর্থ শুধু তোমাকে ছেড়ে দিয়েছেন। কুরতুবী বলেন, এ রূপটির ব্যবহার কম। কালা প্রসঙ্গে তাবারীতে ইবন যায়দ বলেন, কালী মানে যে বিদ্বেষ রাখে। কুরতুবীও কিলা অর্থ করেন বিদ্বেষ, আর প্রমাণে আরবি কবিতার পঙ্‌ক্তি আনেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Since He Loved You",
          "bn": "যেদিন থেকে ভালোবেসেছেন"
        },
        "p": [
          {
            "en": "Three commentators read a since into the denial, al-Qurtubi for its second half alone. Al-Baghawi: He has not left you since He chose you, nor hated you since He loved you. As-Sa'di widens it: He has not left you since He began to care for you, nor neglected you since He raised and tended you; He has kept raising you in the best way, lifting you degree after degree. The Muyassar names the occasion inside its gloss: the slowing of revelation to you was not your Lord leaving you or hating you.",
            "bn": "তিনজন মুফাসসির এই না-বাচক কথার ভেতরে একটা 'যেদিন থেকে' পড়েন, কুরতুবী শুধু দ্বিতীয় অংশে। বাগাভী বলেন: যেদিন তোমাকে বেছে নিয়েছেন, সেদিন থেকে ছেড়ে দেননি; যেদিন ভালোবেসেছেন, সেদিন থেকে বিদ্বেষ রাখেননি। সা'দী কথাটা আরও ছড়িয়ে দেন: যেদিন থেকে তোমার যত্ন নিতে শুরু করেছেন, তোমাকে ছেড়ে দেননি; যেদিন থেকে তোমাকে লালন করেছেন, অবহেলা করেননি। বরং সবচেয়ে সুন্দরভাবে গড়ে তুলেছেন, এক ধাপ থেকে আরেক ধাপে তুলেছেন। মুয়াসসার উপলক্ষটা ব্যাখ্যার ভেতরেই বলে দেয়: ওহি আসতে দেরি হয়েছে মানে এই নয় যে তোমার রব তোমাকে ছেড়ে দিয়েছেন বা তোমার প্রতি বিরূপ হয়েছেন।"
          },
          {
            "en": "As-Sa'di then states a principle: denying a thing's opposite is evidence that the thing itself holds, and a bare negation is no praise unless it carries an affirmed perfection. So the verse, in his reading, affirms Allah's love for him and its continuance. On the missing you after qala, at-Tabari says the listener's understanding supplies it, since wadda'aka has already named the one addressed. Al-Qurtubi gives a different reason: the kaf was dropped because the word ends a verse, as the object is left unsaid after wa-dh-dhakirat in 33:35.",
            "bn": "এরপর সা'দী একটি নীতি বলেন: কোনো কিছুর বিপরীতকে অস্বীকার করা মানে সেই জিনিসটি যে আছে তার প্রমাণ। আর নিছক 'না' কোনো প্রশংসা নয়, যদি না তার ভেতরে কোনো পূর্ণতার স্বীকৃতি থাকে। তাই তাঁর পাঠে আয়াতটি নবীজির ﷺ প্রতি আল্লাহর ভালোবাসা এবং সে ভালোবাসা যে অটুট আছে, তা-ই প্রতিষ্ঠা করে। কালা-র পরে 'তোমাকে' নেই কেন? তাবারী বলেন, শ্রোতা নিজেই বুঝে নেয়, কারণ ওয়াদ্দাআকা আগেই জানিয়ে দিয়েছে কাকে বলা হচ্ছে। কুরতুবী অন্য কারণ দেন: শব্দটি আয়াতের শেষে, তাই কাফ বাদ পড়েছে, যেমন ৩৩:৩৫ আয়াতে ওয়ায-যাকিরাত-এর পরে কর্মটি উহ্য রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hereafter or the Later Days",
          "bn": "আখিরাত, নাকি পরের দিনগুলো"
        },
        "p": [
          {
            "en": "Wa lal-akhiratu khayrun laka mina l-ula: the akhira is better for you than the ula. The pair can mean the Hereafter and this world, or the later and the earlier. Ibn Kathir reads the abode of the Hereafter as better than this abode, and at-Tabari draws the consequence: do not grieve over what has passed you of this world, for what is yours with Allah is better. The Muyassar agrees. Al-Qurtubi gives Ibn Ishaq: what is with Me at your return to Me is better than the honour I hastened to you in this world.",
            "bn": "ওয়া লাল-আখিরাতু খাইরুল লাকা মিনাল ঊলা: আখিরাহ তোমার জন্য ঊলার চেয়ে উত্তম। শব্দজোড়ার অর্থ হতে পারে আখিরাত আর দুনিয়া, আবার হতে পারে পরের সময় আর আগের সময়। ইবন কাসীরের পাঠে আখিরাতের ঘর এই ঘরের চেয়ে উত্তম। তাবারী এর ফলটা বলে দেন: দুনিয়ার যা কিছু হাতছাড়া হয়েছে, তার জন্য দুঃখ কোরো না, আল্লাহর কাছে তোমার জন্য যা আছে, তা-ই উত্তম। মুয়াসসারও একই কথা বলে। কুরতুবী আনেন ইবন ইসহাকের কথা: আমার কাছে ফিরে এলে আমার কাছে যা পাবে, তা দুনিয়ায় তোমাকে আগেভাগে দেওয়া সম্মানের চেয়ে উত্তম।"
          },
          {
            "en": "As-Sa'di takes the other road: every later state of yours has the advantage over the state before it. He kept rising, as-Sa'di writes, with Allah establishing his religion and helping him against his enemies, until he died having reached what no one before or after him reached. Ma'arif al-Qur'an sets out both meanings, the Hereafter against this world and each later moment of his life against the earlier, including growth in knowledge and in nearness to Allah. Both readings stand in the sources; the article picks neither.",
            "bn": "সা'দী অন্য পথ ধরেন: তোমার প্রতিটি পরের অবস্থা আগের অবস্থার চেয়ে শ্রেষ্ঠ। তিনি লেখেন, নবী ﷺ ক্রমাগত উঁচুতে উঠেছেন। আল্লাহ তাঁর দ্বীনকে প্রতিষ্ঠা দিয়েছেন, শত্রুর বিরুদ্ধে তাঁকে সাহায্য করেছেন। শেষে তিনি এমন অবস্থায় পৌঁছে বিদায় নিয়েছেন, যেখানে আগের বা পরের কেউ পৌঁছায়নি। মাআরিফুল কুরআন দুটি অর্থই তুলে ধরে: দুনিয়ার তুলনায় আখিরাত, আর তাঁর জীবনের প্রতিটি পরের মুহূর্ত আগেরটির তুলনায়, জ্ঞানে ও আল্লাহর নৈকট্যে বেড়ে ওঠাসহ। সূত্রে দুটি পাঠই আছে, এ লেখা কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Rider Under a Tree",
          "bn": "গাছের ছায়ায় এক সওয়ার"
        },
        "p": [
          {
            "en": "Ibn Kathir draws a portrait from the first reading. For this reason, he says, the Messenger of Allah ﷺ was the most abstinent of people towards this world, as is known from his life, and when he was given the choice at the end of his life, he chose what is with Allah over this world. He then cites a narration from Imam Ahmad, as an illustration, not as a report about the verse.",
            "bn": "ইবন কাসীর প্রথম পাঠ থেকে একটি ছবি আঁকেন। তিনি বলেন, এ কারণেই রাসূলুল্লাহ ﷺ দুনিয়ার ব্যাপারে ছিলেন সবচেয়ে নির্লিপ্ত, তাঁর জীবনী থেকে যা সবার জানা। জীবনের শেষ দিকে যখন তাঁকে বেছে নেওয়ার সুযোগ দেওয়া হলো, তিনি দুনিয়ার বদলে আল্লাহর কাছে যা আছে, সেটাই বেছে নিলেন। এরপর তিনি ইমাম আহমাদ থেকে একটি বর্ণনা আনেন। বর্ণনাটি আয়াত সম্পর্কে নয়, কথাটা বোঝাতে তিনি এটিকে দৃষ্টান্ত হিসেবে আনেন।"
          },
          {
            "en": "Ibn Mas'ud (RA) said: the Messenger of Allah ﷺ lay down on a mat and it marked his side. When he woke I began to wipe his side and said, O Messenger of Allah, why did you not tell us, so that we could spread something on the mat for you? He said: what have I to do with this world? What am I and this world? My likeness and the world's is only that of a rider who took shade under a tree, then went on and left it. Ibn Kathir reports that at-Tirmidhi graded it hasan sahih.",
            "bn": "ইবন মাসউদ (রাঃ) বলেন: রাসূলুল্লাহ ﷺ একটি চাটাইয়ে শুয়েছিলেন, তাতে তাঁর পাঁজরে দাগ বসে গেল। তিনি জেগে উঠলে আমি তাঁর পাঁজরে হাত বুলাতে লাগলাম আর বললাম, হে আল্লাহর রাসূল, আমাদের জানালেন না কেন? আমরা চাটাইয়ের ওপর আপনার জন্য কিছু বিছিয়ে দিতাম। তিনি বললেন: দুনিয়ার সঙ্গে আমার কী? আমি আর দুনিয়া, কী সম্পর্ক? আমার আর দুনিয়ার উপমা তো সেই সওয়ারের মতো, যে এক গাছের নিচে ছায়া নিল, তারপর গাছটা ফেলে চলে গেল। ইবন কাসীর জানান, তিরমিযী একে হাসান সহীহ বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gift Left Unnamed",
          "bn": "নাম না-বলা দান"
        },
        "p": [
          {
            "en": "Wa la-sawfa yu'tika rabbuka fa-tarda: your Lord will give you, and you will be pleased. Ma'arif al-Qur'an notes that the verse does not say what will be given. As-Sa'di says the matter could be expressed only by this all-gathering phrase. At-Tabari places the giving in the Hereafter and says the scholars differed over what was promised. One view he gives runs through al-Awza'i to Ibn 'Abbas: the Prophet ﷺ was shown what would be opened to his ummah after him, was glad of it, and was given a thousand palaces in Paradise.",
            "bn": "ওয়া লাসাওফা ইউ'তীকা রাব্বুকা ফাতারদা: তোমার রব তোমাকে দেবেন, আর তুমি সন্তুষ্ট হবে। মাআরিফুল কুরআন খেয়াল করিয়ে দেয়, কী দেওয়া হবে, আয়াতটি তা বলেনি। সা'দী বলেন, বিষয়টা প্রকাশ করার মতো কথা এই সর্বব্যাপী বাক্য ছাড়া আর নেই। তাবারী দানটিকে আখিরাতে রাখেন, আর জানান যে কী ওয়াদা করা হয়েছিল তা নিয়ে আলেমদের মতভেদ আছে। তাঁর আনা একটি মত আওযাঈর সূত্রে ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছায়: নবী ﷺ-কে দেখানো হলো তাঁর পরে তাঁর উম্মতের জন্য কী কী খুলে যাবে, তিনি খুশি হলেন, আর তাঁকে জান্নাতে এক হাজার প্রাসাদ দেওয়া হলো।"
          },
          {
            "en": "Ibn Kathir's text of that report reads a thousand thousand palaces, and he judges its chain sound to Ibn 'Abbas. As-Suddi from Ibn 'Abbas says that part of his pleasure is that none of his household enters the Fire. Al-Qurtubi gives Ibn Ishaq's victory in this world and reward in the next, and a view naming the Hawd and intercession. Al-Baghawi records victory, firm establishment and many believers; Ibn Kathir names the honour prepared for him, al-Kawthar among it. The article chooses none.",
            "bn": "ইবন কাসীরের পাঠে সেই বর্ণনায় আছে এক হাজার হাজার প্রাসাদ, আর তাঁর বিচারে ইবন আব্বাস (রাঃ) পর্যন্ত এর সনদ সহীহ। সুদ্দী ইবন আব্বাস (রাঃ) থেকে বলেন, তাঁর সন্তুষ্টির একটি অংশ হলো, তাঁর পরিবারের কেউ জাহান্নামে যাবে না। কুরতুবী আনেন ইবন ইসহাকের মত: দুনিয়ায় বিজয়, আখিরাতে প্রতিদান। আরেকটি মতও তিনি আনেন, যাতে আছে হাউজ ও শাফাআত। বাগাভী উল্লেখ করেন বিজয়, দৃঢ় প্রতিষ্ঠা আর মুমিনদের সংখ্যা বেড়ে যাওয়ার কথা। ইবন কাসীর বলেন তাঁর জন্য প্রস্তুত রাখা সম্মানের কথা, যার মধ্যে আছে কাওসার। এ লেখা এগুলোর কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "My Ummah, My Ummah",
          "bn": "আমার উম্মত, আমার উম্মত"
        },
        "p": [
          {
            "en": "Most often the sources name intercession. Al-Baghawi has 'Ata from Ibn 'Abbas: it is intercession for his ummah until he is pleased, and he says this is the view of 'Ali and al-Hasan. Ibn Kathir gives it from al-Hasan and Abu Ja'far al-Baqir. Al-Qurtubi relates from 'Ali (RA), with no chain or grading, that the Prophet ﷺ said: Allah will accept my intercession for my ummah until He says, are you pleased, Muhammad? and I say, my Lord, I am pleased. He then cites Sahih Muslim (202).",
            "bn": "সূত্রগুলোতে সবচেয়ে বেশি এসেছে শাফাআতের কথা। বাগাভী আতা থেকে ইবন আব্বাস (রাঃ)-এর কথা আনেন: এ হলো উম্মতের জন্য তাঁর শাফাআত, যতক্ষণ না তিনি সন্তুষ্ট হন। বাগাভী বলেন, এটাই আলী (রাঃ) ও হাসানের মত। ইবন কাসীর এ মত আনেন হাসান ও আবু জা'ফর বাকির থেকে। কুরতুবী আলী (রাঃ) থেকে বর্ণনা করেন, সনদ বা মান উল্লেখ না করে, যে নবী ﷺ বলেছেন: আল্লাহ আমার উম্মতের জন্য আমার শাফাআত কবুল করবেন, শেষে তিনি বলবেন, মুহাম্মাদ, তুমি কি সন্তুষ্ট? আমি বলব, হে আমার রব, আমি সন্তুষ্ট। এরপর তিনি সহীহ মুসলিম (২০২) থেকে উদ্ধৃত করেন।"
          },
          {
            "en": "'Abdullah ibn 'Amr (RA) reported that the Prophet ﷺ recited what Ibrahim (AS) said, my Lord, they have led many people astray, so whoever follows me is of me, and what 'Isa (AS) said, if You punish them, they are Your servants, and if You forgive them, You are the Mighty, the Wise. He raised his hands, said, O Allah, my ummah, my ummah, and wept. Allah said: Jibril, go to Muhammad, and your Lord knows best, and ask what makes him weep. Jibril came, asked, and was told. Allah said: go to Muhammad and say, We will please you concerning your ummah and not grieve you.",
            "bn": "আবদুল্লাহ ইবন আমর (রাঃ) বর্ণনা করেন: নবী ﷺ তিলাওয়াত করলেন ইবরাহীম (আঃ)-এর কথা, হে আমার রব, এরা বহু মানুষকে পথভ্রষ্ট করেছে, তাই যে আমার অনুসরণ করে সে আমার দলের। আর ঈসা (আঃ)-এর কথা, আপনি যদি তাদের শাস্তি দেন, তারা তো আপনারই বান্দা, আর যদি ক্ষমা করেন, আপনি তো পরাক্রমশালী, প্রজ্ঞাময়। তারপর তিনি দুহাত তুলে বললেন, হে আল্লাহ, আমার উম্মত, আমার উম্মত, আর কেঁদে ফেললেন। আল্লাহ বললেন: জিবরীল, মুহাম্মাদের কাছে যাও, আর তোমার রব ভালোই জানেন, তাকে জিজ্ঞেস করো কেন কাঁদছে। জিবরীল (আঃ) এসে জিজ্ঞেস করলেন, তিনি তাঁকে জানালেন। আল্লাহ বললেন: মুহাম্মাদের কাছে গিয়ে বলো, তোমার উম্মতের ব্যাপারে আমি তোমাকে সন্তুষ্ট করব, তোমাকে কষ্ট দেব না।"
          },
          {
            "en": "The hadith does not name this verse; al-Qurtubi and Ma'arif al-Qur'an bring it here for its last words. Al-Qurtubi also writes, with no chain, that when the verse came down the Prophet ﷺ said: then, by Allah, I will not be pleased while one of my ummah is in the Fire; Ma'arif repeats it from him. He has 'Ali (RA) tell the people of Iraq that this, not 39:53, is the most hopeful verse in the Book; al-Baghawi gives that saying from Abu Ja'far Muhammad ibn 'Ali.",
            "bn": "হাদিসটিতে এই আয়াতের নাম নেই। কুরতুবী ও মাআরিফুল কুরআন এর শেষ কথাগুলোর জন্যই এখানে এনেছেন। কুরতুবী সনদ ছাড়া আরও লেখেন, আয়াতটি নাজিল হলে নবী ﷺ বললেন: তাহলে আল্লাহর কসম, আমার উম্মতের একজনও জাহান্নামে থাকতে আমি সন্তুষ্ট হব না। মাআরিফ কথাটি তাঁর কাছ থেকেই নিয়েছে। কুরতুবীর বর্ণনায় আলী (রাঃ) ইরাকবাসীদের বলেন, কিতাবের সবচেয়ে আশা-জাগানো আয়াত ৩৯:৫৩ নয়, বরং এটি। বাগাভী একই কথা আনেন আবু জা'ফর মুহাম্মাদ ইবন আলী থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Orphan Verses",
          "bn": "ইয়াতীমের আয়াতের আগে"
        },
        "p": [
          {
            "en": "Next, 93:6 to 93:8 argue from his past: did He not find him an orphan and shelter him, lost and guide him, poor and enrich him? And 93:11 ends the surah: as for the favour of your Lord, proclaim it. Between the oath and the orphan stand these sentences: not left, not hated; a later better than the earlier, in either sense; a gift left unnamed, measured by his being pleased.",
            "bn": "এরপর ৯৩:৬ থেকে ৯৩:৮ তাঁর অতীত দিয়ে যুক্তি দেয়: তিনি কি তোমাকে ইয়াতীম পেয়ে আশ্রয় দেননি, পথহারা পেয়ে পথ দেখাননি, নিঃস্ব পেয়ে অভাবমুক্ত করেননি? আর ৯৩:১১ সূরাটি শেষ করে: তোমার রবের নিয়ামতের কথা বলে বেড়াও। শপথ আর ইয়াতীমের আয়াতের মাঝখানে দাঁড়িয়ে আছে এই কথাগুলো: ছেড়ে দেননি, বিরূপ হননি; আগের চেয়ে পরেরটা উত্তম, যে অর্থেই পড়ুন; আর এমন এক দান, যার নাম বলা নেই, মাপ কেবল তাঁর সন্তুষ্টি।"
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
          "bn": "তিনটির মধ্যে তৃতীয়"
        },
        "p": [
          {
            "en": "Wa amma bi-ni'mati rabbika fahaddith. Four words, and they close the surah. They are the third of three clauses built the same way: 93:9, as for the orphan, do not oppress him; 93:10, and as for the one who asks, do not repel him; then this one. Two prohibitions and then a command — the sequence stops forbidding and starts requiring something be done.",
            "bn": "ওয়া আম্মা বিনি'মাতি রাব্বিকা ফাহাদ্দিস। চারটি শব্দ, আর এ দিয়েই সূরাটি শেষ। একই ছাঁচে গড়া তিনটি বাক্যের এটি তৃতীয়। ৯৩:৯ বলে: আর ইয়াতীম, তার প্রতি কঠোর হয়ো না। ৯৩:১০ বলে: আর যে চাইতে আসে, তাকে ধমক দিয়ো না। তারপর এই আয়াত। প্রথম দুটি নিষেধ, তারপর একটি আদেশ: এখানে এসে নিষেধ থেমে যায়, শুরু হয় কিছু একটা করার দাবি।"
          },
          {
            "en": "All three front their object before the verb. Arabic does not require that order, and the grammarians read the fronting as emphasis: it is the orphan you must not crush, it is the asker you must not drive off, it is your Lord's favour that you are to speak about. In each sentence the subject matter arrives before you learn what you are supposed to do with it.",
            "bn": "তিনটি বাক্যেই যাকে নিয়ে কথা, সে আগে এসেছে, ক্রিয়া এসেছে পরে। আরবিতে এই ক্রম বাধ্যতামূলক নয়, তাই ব্যাকরণবিদগণ একে জোর দেওয়ার কৌশল হিসেবে দেখেন: ইয়াতীমকেই তুমি দলে-পিষে দেবে না, সাহায্যপ্রার্থীকেই তুমি তাড়িয়ে দেবে না, তোমার প্রতিপালকের নিয়ামতের কথাই তুমি বলবে। প্রতিটি বাক্যে বিষয়টা আগে সামনে আসে, তারপর জানা যায় তাকে নিয়ে কী করতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Haddith, Not Ushkur",
          "bn": "হাদ্দিস, শুকুর নয়"
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
          "bn": "যা দেওয়া হয়েছিল তার সঙ্গে মিলিয়ে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the three commands as answering the three favours listed just before them, in order. 93:6 found him an orphan and gave him refuge, so do not oppress the orphan. 93:7 found him lost and guided him, so do not scorn the one who comes asking. 93:8 found him poor and made him self-sufficient, so tell of your Lord's favour. Each instruction pays forward the very thing that was received.",
            "bn": "ইবনে কাসীর এই তিনটি নির্দেশকে ঠিক আগের তিনটি নিয়ামতের জবাব হিসেবে পড়েন, একই ক্রমে। ৯৩:৬ বলে, তিনি তাঁকে ইয়াতীম অবস্থায় পেয়ে আশ্রয় দিয়েছেন; তাই ইয়াতীমের প্রতি কঠোর হয়ো না। ৯৩:৭ বলে, তাঁকে পথহারা অবস্থায় পেয়ে পথ দেখিয়েছেন; তাই যে চাইতে আসে, তাকে তুচ্ছ কোরো না। ৯৩:৮ বলে, তাঁকে নিঃস্ব অবস্থায় পেয়ে অভাবমুক্ত করেছেন; তাই তোমার প্রতিপালকের নিয়ামতের কথা বলো। নিজে যা পাওয়া গেছে, প্রতিটি নির্দেশ ঠিক সেটাই অন্যের দিকে এগিয়ে দিতে বলে।"
          },
          {
            "en": "That correspondence makes 93:11 concrete rather than vague. The favour to be spoken of is not gratitude in general but the specific relief that was actually granted. And it is not private information. A rescue that nobody hears about teaches nobody, and speech is how what happened to one person becomes something another person is able to hope for.",
            "bn": "এই মিলটিই 93:11-কে অস্পষ্ট না রেখে সুনির্দিষ্ট করে তোলে। যে নিয়ামতের কথা বলতে বলা হচ্ছে তা সাধারণভাবে কৃতজ্ঞতা নয়, বরং বাস্তবে যে নির্দিষ্ট স্বস্তিটি দেওয়া হয়েছিল সেটি। আর এটি ব্যক্তিগত গোপন তথ্যও নয়। যে উদ্ধারের কথা কেউ শোনে না, তা কাউকে কিছু শেখায় না; আর একজনের জীবনে ঘটে যাওয়া ঘটনা অন্যজনের আশার বিষয় হয়ে ওঠে কেবল বলার মধ্য দিয়েই।"
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
            "bn": "মুফাসসিরগণ এর সঙ্গে একটা শর্ত জুড়ে দেন, এবং বেশ জোর দিয়েই: নিয়ামতের কথা বলতে হবে শুকরিয়ার সঙ্গে, অহংকার নিয়ে নয়, আর মনে রাখতে হবে, যিনি দিয়েছেন তিনি চাইলে ফিরিয়েও নিতে পারেন। পার্থক্যটা গলার জোরে নয়, কৃতিত্ব কাকে দেওয়া হচ্ছে তাতে। অহংকার বলে, দেখো আমার কী আছে; নিয়ামতের কথা বলে, দেখো আমার প্রতিপালক কী করেছেন। দুটো প্রায় একই শব্দে বলা যায়, অথচ কাজ একেবারে উল্টো।"
          },
          {
            "en": "The Quran supplies the counter-example. 28:78 records Qarun's reply when he was told not to exult: I was only given it because of knowledge I have. Every part of that sentence is a report of a favour, and it fails, because the credit has been placed in the speaker. Our verse attaches the ni'ma to rabbika, your Lord, before the verb is even reached. The grammar has already settled whom the telling is about.",
            "bn": "এর উল্টো উদাহরণও কুরআনেই আছে। ২৮:৭৮ কারূনের জবাবটা তুলে ধরে, যখন তাকে বলা হয়েছিল দম্ভে মেতো না: আমাকে তো এটা দেওয়া হয়েছে আমার জ্ঞানের কারণেই। বাক্যটির প্রতিটি অংশই একটা নিয়ামতের বিবরণ, তবু তা ব্যর্থ, কারণ কৃতিত্বটা সে নিজের ঘরে তুলেছে। আমাদের আয়াত ক্রিয়াপদে পৌঁছানোর আগেই 'নিয়ামত'-কে জুড়ে দিয়েছে 'রাব্বিকা'র সঙ্গে, অর্থাৎ তোমার প্রতিপালকের সঙ্গে। কাকে নিয়ে বলা হবে, ব্যাকরণই তা আগেভাগে ঠিক করে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "And Thanking People",
          "bn": "আর মানুষকে ধন্যবাদ দেওয়া"
        },
        "p": [
          {
            "en": "Ibn Kathir places a hadith under this verse that widens it. Abu Dawud and at-Tirmidhi narrate from Abu Hurayrah (RA) that the Prophet ﷺ said: he who does not thank people has not thanked Allah. Ibn Kathir reports that at-Tirmidhi graded it sahih. Speaking of what Allah gave and acknowledging the hands He sent it through are treated here as one practice rather than as two that compete.",
            "bn": "ইবনে কাসীর এই আয়াতের নিচে এমন একটি হাদিস রাখেন যা এর পরিধি বাড়িয়ে দেয়। আবু দাউদ ও তিরমিযী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: যে মানুষের শুকরিয়া আদায় করে না, সে আল্লাহরও শুকরিয়া আদায় করে না। ইবনে কাসীর উল্লেখ করেন, তিরমিযী একে সহীহ বলেছেন। আল্লাহ যা দিয়েছেন তার কথা বলা এবং যে হাতগুলোর মাধ্যমে তিনি তা পাঠিয়েছেন তাদের স্বীকৃতি দেওয়া — এখানে দুটিকে পরস্পরবিরোধী নয়, বরং একই আমল হিসেবে দেখা হয়েছে।"
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
            "bn": "যে সূরা শুরু হয়েছিল একটা ভয়ের জবাব দিয়ে, তা শেষ হয় হাতে কাজ তুলে দিয়ে, আর এটিই তার শেষ কাজ। এর জন্য কোনো মঞ্চ লাগে না, বড় শ্রোতাও লাগে না। লাগে শুধু এটুকু: ভালো কিছুর কথা যখন উঠবে, আর উঠবেই, তখন কথার মধ্যে যেন তার উৎসের নাম থাকে। নির্দেশটা নবী ﷺ-কে দেওয়া হলেও মুফাসসিরগণ এ থেকে এই শিক্ষা নেন যে, আল্লাহ পছন্দ করেন তাঁর নিয়ামতের কথা বলা হোক।"
          }
        ]
      }
    ]
  }
});
