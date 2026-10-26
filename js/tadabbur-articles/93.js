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
          "bn": "তিন আদেশের শেষটি"
        },
        "p": [
          {
            "en": "Wa-amma bi-ni'mati rabbika fa-haddith: and as for the favour of your Lord, speak of it. Surah ad-Duha ends on these four words. They close a run of three commands built alike: 93:9, as for the orphan, do not oppress him; 93:10, as for the one who asks, do not repel him; then this. The surah opened on a pause in revelation that the polytheists took as abandonment, as al-Qurtubi and al-Baghawi recall in their closing notes. 93:3 answered that your Lord has not left you, and the surah ends by handing out work.",
            "bn": "ওয়া আম্মা বিনি'মাতি রাব্বিকা ফাহাদ্দিস: আর তোমার রবের নি'মাতের কথা বলো। এই চারটি শব্দেই সূরা আদ-দুহা শেষ। একই গড়নের তিনটি আদেশের এটি শেষটি। ৯৩:৯ বলে, ইয়াতীমের প্রতি কঠোর হয়ো না; ৯৩:১০ বলে, যে চায় তাকে ধমক দিয়ো না; তারপর এই আয়াত। সূরার শুরু ওহী থেমে থাকার দিনগুলোতে, যখন মুশরিকরা বলেছিল তাঁকে ছেড়ে দেওয়া হয়েছে। কুরতুবী ও বাগাভী সূরার শেষ আলোচনায় ঘটনাটি মনে করিয়ে দেন। ৯৩:৩ জবাব দিয়েছিল, তোমার রব তোমাকে ছেড়ে যাননি। আর শেষে এসে সূরা হাতে তুলে দেয় কাজ।"
          },
          {
            "en": "The Muyassar, which treats 93:9 to 93:11 as a group, paraphrases them together: do not treat the orphan badly; do not scold whoever asks, rather feed him and meet his need; and as for the favour of your Lord which He lavished upon you, speak of it. The first two commands tell the Prophet ﷺ what to hold back from; the third tells him what to bring out, and it alone among the three asks for speech.",
            "bn": "মুয়াসসার ৯৩:৯ থেকে ৯৩:১১ পর্যন্ত তিন আয়াত একসাথে ব্যাখ্যা করে। তার ভাষ্য: ইয়াতীমের সাথে খারাপ আচরণ করো না; যে চায় তাকে ধমকে তাড়িয়ো না, বরং তাকে খাওয়াও, তার প্রয়োজন মিটিয়ে দাও; আর তোমার রব তোমার ওপর যে নি'মাত ঢেলে দিয়েছেন, তার কথা বলো। প্রথম দুটি নিষেধ নবী ﷺ-কে বলে কোথায় থামতে হবে। তৃতীয়টি বলে কী সামনে আনতে হবে। তিনটির মধ্যে কেবল এটিই মুখ খুলে কিছু বলতে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Matched to What Was Given",
          "bn": "যা পেয়েছেন, তারই জবাব"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the three commands as answering the three favours listed just before them, and states it under each verse. On 93:9: just as you were an orphan and Allah sheltered you, do not oppress the orphan; do not humiliate, scold or demean him, but treat him well and gently, and he adds Qatada's line, be to the orphan like a merciful father. On 93:10: just as you were lost and Allah guided you, do not repel whoever asks about knowledge, seeking guidance. On 93:11: just as you were poor and Allah enriched you, speak of Allah's favour upon you.",
            "bn": "ইবন কাসীর তিনটি আদেশকে পড়েন ঠিক আগের তিনটি নি'মাতের জবাব হিসেবে, প্রতিটি আয়াতের আলোচনায় আলাদা করে। ৯৩:৯ সম্পর্কে: তুমি যেমন ইয়াতীম ছিলে আর আল্লাহ তোমাকে আশ্রয় দিয়েছেন, তেমনি ইয়াতীমের প্রতি কঠোর হয়ো না। তাকে অপমান কোরো না, ধমক দিয়ো না, ছোট কোরো না; বরং তার সাথে ভালো ও কোমল আচরণ করো। সাথে তিনি কাতাদার কথা জুড়ে দেন: ইয়াতীমের কাছে দয়ালু বাবার মতো হও। ৯৩:১০ সম্পর্কে: তুমি যেমন পথ হারিয়েছিলে আর আল্লাহ পথ দেখিয়েছেন, তেমনি যে জ্ঞানের কথা জিজ্ঞেস করে পথ খোঁজে, তাকে ধমক দিয়ো না। ৯৩:১১ সম্পর্কে: তুমি যেমন অভাবী ছিলে আর আল্লাহ তোমাকে সচ্ছল করেছেন, তেমনি তোমার ওপর আল্লাহর নি'মাতের কথা বলো।"
          },
          {
            "en": "Al-Baghawi records a reading from Muqatil that draws the same line in one sentence: give thanks for the favour this surah mentions to you, the mending of the orphan, guidance after being lost and enrichment after want, for speaking of Allah's favour is thanks. Ma'arif al-Qur'an likewise pairs the last command with poverty. On the asker, Ibn Kathir adds Qatada: turn the needy away with mercy and gentleness.",
            "bn": "বাগাভী মুকাতিলের একটি ব্যাখ্যা আনেন, যা এক বাক্যেই একই যোগসূত্র টানে: এই সূরায় তোমার ওপর যে নি'মাতের কথা বলা হয়েছে, তার শোকর আদায় করো। ইয়াতীম অবস্থার ক্ষতিপূরণ, পথ হারানোর পর হেদায়াত, অভাবের পর সচ্ছলতা। কারণ আল্লাহর নি'মাতের কথা বলাই শোকর। মাআরিফুল কুরআনও ইবন কাসীরের মতো শেষ আদেশটিকে অভাবের সাথে মিলিয়ে পড়ে। প্রার্থীর ব্যাপারে ইবন কাসীর কাতাদার কথা আনেন: অভাবীকে ফেরাতে হলে ফেরাও দয়া আর নরম কথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Found an Orphan, Found Lost",
          "bn": "ইয়াতীম পেলেন, পথহারা পেলেন"
        },
        "p": [
          {
            "en": "Ibn Kathir opens 93:6 by saying that Allah is here counting His favours on His servant and Messenger. His father died while he was still in his mother's womb, or, it is said, after he was born. His mother Aminah bint Wahb died when he was six. His grandfather 'Abd al-Muttalib cared for him until he died when the boy was eight, and then his uncle Abu Talib took him in and shielded him from his people after the mission began. When Abu Talib died shortly before the Hijrah, the Ansar of Aws and Khazraj sheltered and defended him.",
            "bn": "৯৩:৬-এর আলোচনা ইবন কাসীর শুরু করেন এই বলে যে, আল্লাহ এখানে তাঁর বান্দা ও রাসূলের ওপর নিজের নি'মাতগুলো গুনে গুনে বলছেন। তাঁর বাবা মারা যান তিনি মায়ের গর্ভে থাকতেই; কারও মতে জন্মের পরে। ৬ বছর বয়সে মা আমিনা বিনতে ওয়াহব মারা যান। এরপর দাদা আবদুল মুত্তালিব তাঁর দেখাশোনা করেন, ৮ বছর বয়সে দাদাও মারা যান। তখন চাচা আবু তালিব তাঁকে কাছে টেনে নেন, আর নবুওয়াতের পর কওমের অত্যাচার থেকে আগলে রাখেন। হিজরতের অল্প আগে আবু তালিব মারা গেলে আওস ও খাযরাজের আনসাররা তাঁকে আশ্রয় দেন, পাশে দাঁড়ান।"
          },
          {
            "en": "On 93:7 Ibn Kathir gives three readings of dallan, lost. First he sets it beside 42:52: thus We revealed to you a spirit by Our command; you did not know what the Book was, nor faith, but We made it a light. Then he reports that some said he was lost as a small child in the mountain passes of Makkah and came back, and that it is said he lost the road at night while travelling with his uncle towards Syria; both of these, he notes, al-Baghawi relates.",
            "bn": "৯৩:৭-এর দাল্লান, অর্থাৎ পথহারা শব্দের তিনটি ব্যাখ্যা দেন ইবন কাসীর। প্রথমে তিনি একে ৪২:৫২-এর পাশে রাখেন: এভাবেই আমি নিজের আদেশে তোমার কাছে রূহ ওহী করেছি; তুমি জানতে না কিতাব কী, ঈমান কী, কিন্তু আমি একে বানিয়েছি নূর। তারপর বলেন, কেউ কেউ বলেছেন, ছোটবেলায় তিনি মক্কার গিরিপথে হারিয়ে গিয়েছিলেন, পরে ফিরে আসেন। আরও বলা হয়, চাচার সাথে সিরিয়ার পথে রাতের বেলা তিনি পথ হারিয়েছিলেন। শেষ দুটি বর্ণনা বাগাভীর, ইবন কাসীর তা জানিয়ে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Prophethood or the Qur'an",
          "bn": "নবুওয়াত, নাকি কুরআন"
        },
        "p": [
          {
            "en": "What is the favour of your Lord? A group of reports narrows it. At-Tabari glosses the verb in a word, fa-dhkurhu, so mention it, then cites Mujahid through Abu Bishr: it means prophethood. Al-Qurtubi gives Mujahid twice, once through Ibn Abi Najih saying the Qur'an and once saying prophethood, which he explains as: convey what you were sent with. Ibn Kathir has the same two reports from Mujahid, prophethood and, in another narration, the Qur'an.",
            "bn": "তোমার রবের নি'মাত বলতে কী বোঝানো হয়েছে? একদল বর্ণনা একে নির্দিষ্ট করে। তাবারী ক্রিয়াটির অর্থ দেন এক শব্দে, ফাযকুরহু, অর্থাৎ তার উল্লেখ করো। তারপর আবু বিশরের সূত্রে মুজাহিদের কথা আনেন: এর অর্থ নবুওয়াত। কুরতুবী মুজাহিদকে আনেন দুবার। একবার ইবন আবী নাজীহের সূত্রে, যেখানে অর্থ কুরআন। আরেকবার নবুওয়াত, যার ব্যাখ্যা তিনি দেন এভাবে: যা নিয়ে তোমাকে পাঠানো হয়েছে, তা পৌঁছে দাও। ইবন কাসীরের কাছেও মুজাহিদের এই দুই বর্ণনা আছে: নবুওয়াত, আর অন্য বর্ণনায় কুরআন।"
          },
          {
            "en": "Al-Baghawi sorts the two by narrator. Abu Bishr's report from Mujahid, prophethood, is what al-Zajjaj chose, explaining it as: convey what you were sent with, and speak of the prophethood Allah gave you. Al-Layth's report from Mujahid, the Qur'an, is also the view of al-Kalbi, who took the verse as a command to recite it. On this reading haddith means to convey and to recite: the favour is the message itself, and speaking of it is the work of delivering it.",
            "bn": "বাগাভী বর্ণনাকারী ধরে দুটিকে আলাদা করেন। মুজাহিদ থেকে আবু বিশরের বর্ণনা নবুওয়াত, আর যাজ্জাজ এটিই বেছে নিয়েছেন। তাঁর ব্যাখ্যা: যা নিয়ে তোমাকে পাঠানো হয়েছে তা পৌঁছে দাও, আল্লাহ তোমাকে যে নবুওয়াত দিয়েছেন তার কথা বলো। মুজাহিদ থেকে লাইসের বর্ণনা কুরআন, আর কালবীর মতও তাই। তিনি আয়াতটিকে কুরআন পড়ে শোনানোর আদেশ হিসেবে নিয়েছেন। এই পাঠে হাদ্দিস মানে পৌঁছে দেওয়া আর পড়ে শোনানো। নি'মাত তখন খোদ বার্তাটাই, আর তার কথা বলা মানে সেটি মানুষের কাছে পৌঁছানোর কাজ।"
          },
          {
            "en": "Ibn Ishaq, in Ibn Kathir's text, joins the two: whatever favour and honour of prophethood Allah brought you, speak of it, mention it and call to it. The Messenger of Allah ﷺ began to mention what Allah had blessed him with of prophethood, secretly, to those of his family he trusted; and the prayer was made obligatory for him, and he prayed. In Ibn Ishaq's account, then, the telling began quietly, among the trusted of his own household.",
            "bn": "ইবন কাসীরের লেখায় ইবন ইসহাক দুটিকে এক করে দেন: নবুওয়াতের যে নি'মাত ও সম্মান আল্লাহ তোমাকে দিয়েছেন, তার কথা বলো, তা স্মরণ করাও, তার দিকে ডাকো। নবুওয়াতের যে নি'মাত আল্লাহ রাসূলুল্লাহ ﷺ-কে দিয়েছিলেন, তিনি তা গোপনে বলতে শুরু করেন পরিবারের সেই মানুষদের কাছে, যাঁদের ওপর তাঁর ভরসা ছিল। আর তাঁর ওপর নামায ফরজ হলো, তিনি নামায পড়লেন। ইবন ইসহাকের বর্ণনায় তাই বলার শুরুটা হয়েছিল নিঃশব্দে, নিজের ঘরের ভরসার মানুষদের মাঝে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Favour, Religious and Worldly",
          "bn": "দ্বীনের নি'মাত, দুনিয়ার নি'মাত"
        },
        "p": [
          {
            "en": "The other reading keeps the favour wide. As-Sa'di says the phrase covers favours of religion and of this world alike, and he explains haddith as: praise Allah for them, and mention them specifically if some benefit lies in doing so; otherwise speak of Allah's favours in general terms. Speaking of a favour, he says, calls the speaker to thank for it, and draws hearts to love the Giver, for hearts are made to love whoever does them good. Al-Qurtubi reads the verse as: spread what Allah has blessed you with, through thanks and praise.",
            "bn": "অন্য পাঠটি নি'মাতকে রাখে প্রশস্ত। সা'দী বলেন, কথাটির মধ্যে দ্বীনের নি'মাত আর দুনিয়ার নি'মাত দুটোই পড়ে। হাদ্দিস-এর ব্যাখ্যা তাঁর কাছে এমন: এগুলোর জন্য আল্লাহর প্রশংসা করো। কোনো কল্যাণ থাকলে নির্দিষ্ট করে উল্লেখ করো, নইলে সাধারণভাবে আল্লাহর নি'মাতের কথা বলো। তাঁর মতে নি'মাতের কথা বলা মানুষকে শোকরের দিকে টানে, আর দাতার প্রতি অন্তরে ভালোবাসা জাগায়। কারণ যে উপকার করে, তাকে ভালোবাসাই অন্তরের স্বভাব। কুরতুবীর ব্যাখ্যা: আল্লাহ তোমাকে যা দিয়েছেন, শোকর আর প্রশংসার মধ্য দিয়ে তা ছড়িয়ে দাও।"
          },
          {
            "en": "Al-Qurtubi adds that speaking of Allah's favours and acknowledging them is gratitude, and that while the address is to the Prophet ﷺ, the ruling is general, for him and for others. At-Tabari and Ibn Kathir both cite Abu Nadrah: the Muslims used to hold that part of thanking for favours is to speak of them. Ma'arif al-Qur'an, citing Mazhari, makes gratitude for every favour obligatory and lets its form follow the gift: wealth spent sincerely in Allah's way, bodily strength used in His obligations, knowledge taught to others.",
            "bn": "কুরতুবী যোগ করেন, আল্লাহর নি'মাতের কথা বলা ও তা স্বীকার করাই শোকর। সম্বোধন নবী ﷺ-কে, কিন্তু বিধান সবার জন্য, তাঁর জন্যও, অন্যদের জন্যও। তাবারী ও ইবন কাসীর দুজনেই আবু নাদরার কথা আনেন: মুসলমানরা মনে করতেন, নি'মাতের শোকরের একটা অংশ হলো তার কথা বলা। মাআরিফুল কুরআন মাযহারীর বরাতে বলে, প্রতিটি নি'মাতের শোকর ফরজ, তবে শোকরের ধরন নি'মাত অনুযায়ী। সম্পদ পেলে তার কিছু ইখলাসের সাথে আল্লাহর পথে খরচ করা। শারীরিক শক্তি পেলে তা ফরজ আদায়ে লাগানো। দ্বীনের ইলম পেলে অন্যকে শেখানো।"
          },
          {
            "en": "So the commentators divide. Mujahid's two reports, prophethood and the Qur'an, with al-Zajjaj and al-Kalbi taking them up, make haddith a command to convey and recite. Muqatil, as-Sa'di and the Muyassar make it speech of thanks for the favours given, and al-Qurtubi records Mujahid's narrow reports beside his own wide gloss in a single passage. The fetched commentators keep both readings in view, and this article does not choose between them.",
            "bn": "তাফসীরকারেরা তাই দুই ভাগে। মুজাহিদের দুই বর্ণনা, নবুওয়াত ও কুরআন, যাজ্জাজ ও কালবী যা গ্রহণ করেছেন, হাদ্দিসকে বানায় পৌঁছে দেওয়া ও পড়ে শোনানোর আদেশ। মুকাতিল, সা'দী ও মুয়াসসারের কাছে এটি পাওয়া নি'মাতের জন্য শোকরের কথা। কুরতুবী এক জায়গাতেই মুজাহিদের সংকীর্ণ বর্ণনা আর নিজের প্রশস্ত ব্যাখ্যা পাশাপাশি রাখেন। যে তাফসীরগুলো দেখা হয়েছে, সেগুলো দুটো পাঠই সামনে রাখে, আর এই লেখাও কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Telling the Good One Does",
          "bn": "নিজের ভালো কাজের কথা"
        },
        "p": [
          {
            "en": "Does telling of favours include telling of your own good deeds? Al-Qurtubi reports from al-Hasan ibn 'Ali (RA): if you receive good or do good, tell it to a trustworthy brother. Ibn Kathir has the saying as: whatever good you have done, tell your brothers, through a chain in which the man between al-Layth and al-Hasan is left unnamed.",
            "bn": "নি'মাতের কথা বলার মধ্যে কি নিজের নেক আমলের কথাও পড়ে? কুরতুবী হাসান ইবন আলী (রাঃ)-এর কথা আনেন: কোনো কল্যাণ পেলে বা কোনো ভালো কাজ করলে ভাইদের মধ্যে যে ভরসার যোগ্য, তাকে বলো। ইবন কাসীরের কাছে কথাটি এভাবে: যে ভালো কাজ করেছ, ভাইদের বলো। তবে তাঁর সনদে লাইস আর হাসানের মাঝের লোকটির নাম নেই।"
          },
          {
            "en": "The plainest case is Abu Firas 'Abdullah ibn Ghalib. Each morning, al-Qurtubi relates, he would say: Allah granted me last night such and such; I recited this much, prayed this much, remembered Allah this much. His companions objected that a man like him should not say such things. He answered: Allah says, and as for the favour of your Lord, speak of it, and you say, do not speak of Allah's favour. Al-Qurtubi reports the like from Ayyub as-Sakhtiyani and Abu Raja' al-'Utaridi.",
            "bn": "সবচেয়ে স্পষ্ট উদাহরণ আবু ফিরাস আবদুল্লাহ ইবন গালিব। কুরতুবী বলেন, প্রতিদিন সকালে তিনি বলতেন: কাল রাতে আল্লাহ আমাকে এই দিয়েছেন। এতটুকু তিলাওয়াত করেছি, এতটুকু নামায পড়েছি, এতটুকু আল্লাহর জিকির করেছি। সঙ্গীরা আপত্তি করল, আপনার মতো মানুষের মুখে এমন কথা মানায় না। তিনি জবাব দিলেন: আল্লাহ বলছেন, আর তোমার রবের নি'মাতের কথা বলো। আর তোমরা বলছ, আল্লাহর নি'মাতের কথা বোলো না। কুরতুবী আইয়ুব সাখতিয়ানী ও আবু রাজা উতারিদী থেকেও এমন কথা বর্ণনা করেন।"
          },
          {
            "en": "The telling can also be seen rather than heard. Al-Qurtubi cites an-Nasa'i for a report about a man he names as Malik ibn Nadlah al-Jushami. An-Nasa'i's wording (5224): It was narrated from Abu Al-Ahwas, from his father, that he came to the Prophet ﷺ wearing shabby clothes. The Prophet ﷺ said to him: Do you have any wealth? He said: Yes, all kinds of wealth. He said: What kinds of wealth? He said: Allah has given me camels, cattle, sheep, horses and slaves. He said: If Allah has given you wealth, then let the effect of Allah's blessing and generosity be seen on you. An-Nasa'i gives no grading.",
            "bn": "নি'মাতের কথা শুধু কানে শোনার নয়, চোখে দেখারও হতে পারে। কুরতুবী এ বিষয়ে নাসাঈর একটি বর্ণনার বরাত দেন, যার মানুষটির নাম তিনি বলেন মালিক ইবন নাদলা জুশামী। নাসাঈর ভাষ্য (৫২২৪): আবুল আহওয়াস তাঁর বাবা থেকে বর্ণনা করেন, তিনি জীর্ণ কাপড় পরে নবী ﷺ-এর কাছে এলেন। নবী ﷺ জিজ্ঞেস করলেন, তোমার কি সম্পদ আছে? তিনি বললেন, হ্যাঁ, সব রকমের সম্পদ। তিনি বললেন, কী কী সম্পদ? তিনি বললেন, আল্লাহ আমাকে উট, গরু, ছাগল-ভেড়া, ঘোড়া আর দাস দিয়েছেন। তিনি বললেন, আল্লাহ যখন তোমাকে সম্পদ দিয়েছেন, তখন তোমার গায়ে আল্লাহর নি'মাত আর অনুগ্রহের চিহ্ন যেন দেখা যায়। নাসাঈ কোনো মান উল্লেখ করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanks Owed to People",
          "bn": "মানুষের প্রতি কৃতজ্ঞতা"
        },
        "p": [
          {
            "en": "Ibn Kathir places beside this verse a group of narrations on thanking those through whom a favour comes. One he cites from Abu Dawud and at-Tirmidhi, on the authority of Abu Hurayrah (RA). In at-Tirmidhi's Jami' (1954) it reads: Abu Hurairah narrated that the Messenger of Allah said: Whoever is not grateful to the people, he is not grateful to Allah. At-Tirmidhi grades it hasan sahih. Abu Dawud records it too (4811), from the same Companion, without a grading of his own.",
            "bn": "এই আয়াতের পাশে ইবন কাসীর কয়েকটি বর্ণনা রাখেন, যেগুলোর বিষয় হলো যাদের হাত দিয়ে নি'মাত আসে, তাদের শোকর আদায়। একটি তিনি আনেন আবু দাউদ ও তিরমিযী থেকে, আবু হুরায়রা (রাঃ)-এর সূত্রে। তিরমিযীর জামি'তে (১৯৫৪) তা এরকম: আবু হুরায়রা বর্ণনা করেন, রাসূলুল্লাহ বলেছেন: যে মানুষের প্রতি কৃতজ্ঞ নয়, সে আল্লাহর প্রতিও কৃতজ্ঞ নয়। তিরমিযী একে হাসান সহীহ বলেছেন। আবু দাউদও (৪৮১১) একই সাহাবী থেকে এটি বর্ণনা করেছেন, তবে নিজে কোনো মান উল্লেখ করেননি।"
          },
          {
            "en": "A second, from Jabir ibn 'Abdullah (RA), Ibn Kathir notes is recorded by Abu Dawud alone. Abu Dawud's wording (4814): Narrated Jabir ibn Abdullah: The Prophet ﷺ said: If someone is donated something, and he mentions it, he thanks for it, and if he conceals it, he is ungrateful for it. Abu Dawud adds no grading. The narration sits close to the verse's own verb: mentioning a kindness is a way of thanking for it, and hiding it is a kind of ingratitude.",
            "bn": "দ্বিতীয়টি জাবির ইবন আবদুল্লাহ (রাঃ) থেকে, আর ইবন কাসীর জানান, এটি কেবল আবু দাউদই বর্ণনা করেছেন। আবু দাউদের ভাষ্য (৪৮১৪): জাবির ইবন আবদুল্লাহ বর্ণনা করেন, নবী ﷺ বলেছেন: কাউকে কিছু দেওয়া হলে সে যদি তার উল্লেখ করে, তবে সে তার শোকর আদায় করল; আর যদি গোপন করে, তবে অকৃতজ্ঞ হলো। আবু দাউদ কোনো মান উল্লেখ করেননি। বর্ণনাটি আয়াতের ক্রিয়ার খুব কাছাকাছি। উপকারের উল্লেখ করা শোকরের একটা পথ, আর তা চেপে যাওয়া একরকম নাশোকরি।"
          },
          {
            "en": "A third narration, from an-Nu'man ibn Bashir (RA), contains the very sentence speaking of Allah's favour is gratitude, and al-Qurtubi and al-Baghawi both cite it. Ibn Kathir, however, labels its chain weak, so it is not relied on here. None of these narrations is presented by the commentators as the occasion of the verse. They are gathered under it because they speak of the same practice of naming a favour aloud.",
            "bn": "তৃতীয় একটি বর্ণনা নু'মান ইবন বাশীর (রাঃ) থেকে। তাতে হুবহু এই বাক্যটি আছে: আল্লাহর নি'মাতের কথা বলা শোকর। কুরতুবী ও বাগাভী দুজনেই এটি এনেছেন। কিন্তু ইবন কাসীর এর সনদকে দুর্বল বলেছেন, তাই এখানে এর ওপর ভর দেওয়া হচ্ছে না। তাফসীরকারেরা এগুলোর কোনোটিকেই আয়াত নাযিলের উপলক্ষ হিসেবে পেশ করেননি। এগুলো আয়াতের নিচে জড়ো করা হয়েছে, কারণ সবগুলোর বিষয় একই: নি'মাতের কথা মুখে বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "Takbir From Ad-Duha Onward",
          "bn": "আদ-দুহা থেকে তাকবীর"
        },
        "p": [
          {
            "en": "Al-Baghawi, al-Qurtubi and Ma'arif al-Qur'an close the surah with a practice of recitation. Al-Baghawi says the sunnah in the reading of the people of Makkah is to say Allahu akbar from ad-Duha onward at the head of every surah until the Qur'an is completed, and he gives his chain of readers back through 'Abdullah ibn Kathir, Mujahid, Ibn 'Abbas and Ubayy ibn Ka'b (RA) to the Prophet ﷺ. The reason, he says: when revelation was held back the polytheists taunted that he had been deserted, the Prophet ﷺ grieved, and when ad-Duha came down he said Allahu akbar out of joy.",
            "bn": "বাগাভী, কুরতুবী ও মাআরিফুল কুরআন সূরাটি শেষ করেন তিলাওয়াতের একটি রীতির কথা বলে। বাগাভী বলেন, মক্কাবাসীর কিরাআতে সুন্নাত হলো আদ-দুহা থেকে শুরু করে কুরআন খতম পর্যন্ত প্রতিটি সূরার মাথায় আল্লাহু আকবার বলা। তিনি নিজের কারীদের সনদও দেন, যা আবদুল্লাহ ইবন কাসীর, মুজাহিদ, ইবন আব্বাস ও উবাই ইবন কা'ব (রাঃ) হয়ে নবী ﷺ পর্যন্ত পৌঁছে। কারণ হিসেবে তিনি বলেন: ওহী থেমে থাকলে মুশরিকরা খোঁটা দিয়েছিল যে তাঁকে ত্যাগ করা হয়েছে। নবী ﷺ এতে কষ্ট পেয়েছিলেন। আদ-দুহা নাযিল হলে তিনি আনন্দে আল্লাহু আকবার বলেন।"
          },
          {
            "en": "Al-Qurtubi gives the practice in the transmission of al-Bazzi from 'Abdullah ibn Kathir the Makkan reader: a takbir between the surahs from the end of ad-Duha, kept apart from the surah's last words by a pause. The other readers do not say it, he notes, lest it become a way to add to the Qur'an. His own judgement is careful: the takbir is not Qur'an, whose text came by mass transmission without addition; it is a sunnah established by solitary reports, which 'Abdullah ibn Kathir recommended rather than required.",
            "bn": "কুরতুবী রীতিটি আনেন মক্কার কারী আবদুল্লাহ ইবন কাসীর থেকে বাযযীর রিওয়ায়াতে: আদ-দুহার শেষ থেকে প্রতি দুই সূরার মাঝে একবার তাকবীর, আর সূরার শেষ শব্দ থেকে তা আলাদা রাখা হয় একটু থেমে। তিনি জানান, অন্য কারীরা তাকবীর বলেন না, যাতে তা কুরআনে কিছু বাড়ানোর পথ না হয়ে দাঁড়ায়। তাঁর নিজের রায় সাবধানী। তাকবীর কুরআনের অংশ নয়, কারণ কুরআন এসেছে মুতাওয়াতির সূত্রে, কোনো বাড়তি ছাড়া। এটি একক সূত্রে প্রমাণিত সুন্নাত, যা আবদুল্লাহ ইবন কাসীর মুস্তাহাব বলেছেন, ওয়াজিব নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an ends with an observation of its own: most surahs from ad-Duha to the end of the Qur'an mention Allah's special favours upon the Prophet ﷺ, so that the later part of the Mushaf turns to the one to whom it was revealed. A surah that began with the Prophet ﷺ waiting through a silence closes by telling him what to do with everything he had been given: say it.",
            "bn": "মাআরিফুল কুরআন শেষ করে নিজের একটি পর্যবেক্ষণ দিয়ে। আদ-দুহা থেকে কুরআনের শেষ পর্যন্ত বেশির ভাগ সূরায় নবী ﷺ-এর ওপর আল্লাহর বিশেষ নি'মাতের কথা আছে। ফলে মুসহাফের শেষ অংশ ফিরে তাকায় তাঁর দিকে, যাঁর ওপর কুরআন নাযিল হয়েছে। যে সূরার শুরুতে নবী ﷺ নীরবতার ভেতর অপেক্ষা করছিলেন, তার শেষে তাঁকে বলে দেওয়া হলো, যা কিছু পেয়েছেন তা নিয়ে কী করবেন: তার কথা বলবেন।"
          }
        ]
      }
    ]
  }
});
