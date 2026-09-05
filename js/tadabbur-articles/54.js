/**
 * Tadabbur long-form articles — surah 54.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "54:17": {
    "sections": [
      {
        "h": {
          "en": "A Refrain, Four Times",
          "bn": "একটি ধ্রুবপদ, চারবার"
        },
        "p": [
          {
            "en": "Surah al-Qamar tells one story repeatedly with different names in it. Nuh's people deny and the waters of the sky and the earth meet over them; Aad deny and a screaming wind carries them off; Thamud deny and a single blast leaves them like the dry twigs of a pen; the people of Lut deny and a storm of stones falls. After each of these four accounts, one line returns unchanged, at 54:17, 54:22, 54:32 and 54:40 — and We have certainly made the Quran easy for remembrance, so is there any who will remember.",
            "bn": "সূরা আল-কামার একই গল্প বারবার বলে, কেবল নামগুলো বদলে যায়। নূহের জাতি অস্বীকার করে আর আসমান ও যমীনের পানি তাদের ওপর মিলিত হয়; আদ অস্বীকার করে আর এক গর্জনকারী ঝড় তাদের উড়িয়ে নেয়; সামূদ অস্বীকার করে আর একটিমাত্র বিকট আওয়াজ তাদের খোঁয়াড়ের শুকনো খড়কুটোর মতো করে ফেলে; লূতের জাতি অস্বীকার করে আর পাথরের ঝড় নেমে আসে। এই চারটি বিবরণের প্রতিটির পরে একই পঙক্তি অপরিবর্তিতভাবে ফিরে আসে — 54:17, 54:22, 54:32 ও 54:40 আয়াতে — আমি কুরআনকে উপদেশ গ্রহণের জন্য সহজ করে দিয়েছি, উপদেশ গ্রহণ করার কেউ আছে কি।"
          },
          {
            "en": "The fifth people, Pharaoh's, are dealt with in 54:41-42 and do not receive the refrain; the surah turns instead to the listeners in Makkah. The closing question by itself, fahal min muddakir, appears twice more — at 54:15 after the ark, and at 54:51 near the end — six times in one surah. Counting them is the quickest way to feel what the surah is doing to its hearer.",
            "bn": "পঞ্চম জাতি, অর্থাৎ ফিরআউনের লোকদের কথা আসে 54:41-42 আয়াতে, আর তারা এই ধ্রুবপদটি পায় না; সূরাটি বরং মক্কার শ্রোতাদের দিকে ফিরে যায়। শেষের প্রশ্নটি একা — ফাহাল মিম মুদ্দাকির — আরও দুবার আসে: 54:15 আয়াতে নৌকার পরে, আর 54:51 আয়াতে শেষের কাছে — এক সূরাতেই ছয়বার। এগুলো গুনে দেখাই দ্রুততম উপায়, সূরাটি তার শ্রোতার সাথে কী করছে তা অনুভব করার।"
          }
        ]
      },
      {
        "h": {
          "en": "Easy for What",
          "bn": "কীসের জন্য সহজ"
        },
        "p": [
          {
            "en": "The claim is precise. Not that the Quran is easy, full stop — a Book carrying law, the unseen and sustained argument is not shallow. It is made easy lidh-dhikr, for remembrance. as-Sa'di divides the ease in two: the wording is eased for recitation and memorisation, and the meanings are eased for understanding and reflection. Neither half promises that mastery of the sciences costs nothing.",
            "bn": "দাবিটি নিখুঁতভাবে নির্দিষ্ট। কথাটি এই নয় যে কুরআন এমনিতেই সহজ — যে কিতাব বিধান, গায়েব ও দীর্ঘ যুক্তি বহন করে তা অগভীর নয়। একে সহজ করা হয়েছে লিয্‌যিকর, অর্থাৎ স্মরণের জন্য। আস-সা'দী এই সহজতাকে দুই ভাগে ভাগ করেন: শব্দগুলো সহজ করা হয়েছে তিলাওয়াত ও মুখস্থ করার জন্য, আর অর্থগুলো সহজ করা হয়েছে বোঝা ও চিন্তা করার জন্য। এর কোনো ভাগই প্রতিশ্রুতি দেয় না যে কুরআনের শাস্ত্রগুলোতে দক্ষতা অর্জন বিনা পরিশ্রমে হবে।"
          },
          {
            "en": "The evidence is unusual for a claim made about a book. Children who speak no Arabic hold the entire text in memory. Blind men have carried it complete. No other book of that length is memorised whole by ordinary people in large numbers, and it has gone on happening for fourteen centuries in every language community that Islam reached.",
            "bn": "একটি কিতাব সম্পর্কে করা দাবির তুলনায় এর প্রমাণটি অস্বাভাবিক। যেসব শিশু আরবি বলতেই পারে না, তারাও পুরো পাঠটি স্মৃতিতে ধরে রাখে। অন্ধ মানুষেরা এটি সম্পূর্ণ বয়ে নিয়েছেন। এই দৈর্ঘ্যের অন্য কোনো বই সাধারণ মানুষ এত বিপুল সংখ্যায় পুরোটা মুখস্থ করে না, আর ইসলাম যে ভাষাগোষ্ঠীতেই পৌঁছেছে সেখানেই চৌদ্দ শতাব্দী ধরে এটি ঘটে চলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Different Easing",
          "bn": "ভিন্ন এক সহজীকরণ"
        },
        "p": [
          {
            "en": "Two other verses use the same verb about the Quran and mean something else by it. 44:58 says We have only eased it in your tongue, that they might be reminded. 19:97 says We have only eased it in your tongue so that you may give good tidings by it to the righteous and warn by it a hostile people. Both ease it in the Prophet's ﷺ tongue — in his language, for delivery.",
            "bn": "আরও দুটি আয়াত কুরআন সম্পর্কে একই ক্রিয়া ব্যবহার করে, কিন্তু অর্থ করে ভিন্ন কিছু। 44:58 বলে, আমি তো একে তোমার ভাষায় সহজ করে দিয়েছি, যাতে তারা উপদেশ গ্রহণ করে। 19:97 বলে, আমি একে তোমার ভাষায় সহজ করেছি, যাতে তুমি এর দ্বারা মুত্তাকীদের সুসংবাদ দিতে পার আর ঝগড়াটে এক সম্প্রদায়কে সতর্ক করতে পার। দুটিই একে সহজ করে নবী ﷺ-এর জিহ্বায় — তাঁর ভাষায়, পৌঁছে দেওয়ার জন্য।"
          },
          {
            "en": "This verse eases it in the hearer instead. There the object of the easing is a messenger's speech; here it is a listener's memory and understanding. Put together, the three describe a complete transmission — a message placed into a language people already spoke, and then made to stay in them. None of the three is a claim that the Quran is simple. All three are claims about access.",
            "bn": "এই আয়াত বরং একে সহজ করে শ্রোতার ভেতরে। সেখানে সহজ করার লক্ষ্য একজন রাসূলের বাচন; এখানে লক্ষ্য একজন শ্রোতার স্মৃতি ও বোধ। একসাথে রাখলে তিনটি আয়াত একটি পূর্ণাঙ্গ হস্তান্তরের বর্ণনা দেয় — এমন এক ভাষায় বার্তা রাখা যা মানুষ আগে থেকেই বলত, আর তারপর তা তাদের ভেতরে গেঁথে দেওয়া। তিনটির কোনোটিই এই দাবি করে না যে কুরআন সরল। তিনটিই দাবি করে নাগাল পাওয়ার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Muddakir",
          "bn": "মুদ্দাকির শব্দটি"
        },
        "p": [
          {
            "en": "The verse is seven words in Arabic, and the last of them repays attention. Muddakir comes from the root of dhikr, remembrance. Its original form was mudhtakir; the grammarians describe how the ta assimilated into the dhal, producing a doubled dal and the compact muddakir that we recite. The word ended up shorter and easier on the tongue than the form it came from.",
            "bn": "আয়াতটি আরবিতে সাতটি শব্দ, আর তার শেষ শব্দটি মনোযোগের প্রতিদান দেয়। মুদ্দাকির এসেছে যিকর অর্থাৎ স্মরণের ধাতু থেকে। এর মূল রূপ ছিল মুয্‌তাকির; ব্যাকরণবিদরা বর্ণনা করেন কীভাবে 'তা' অক্ষরটি 'যাল'-এর সাথে মিশে যায়, ফলে তৈরি হয় দ্বিত্ব 'দাল' আর আমাদের তিলাওয়াত করা সংহত রূপ মুদ্দাকির। শব্দটি শেষ পর্যন্ত যে রূপ থেকে এসেছে তার চেয়ে ছোট ও জিহ্বায় সহজ হয়ে দাঁড়িয়েছে।"
          },
          {
            "en": "There is a quiet demonstration in that. A verse announcing that the Book has been made easy chooses, for its final word, one that Arabic itself has smoothed. And the word is a participle rather than a verb — is there any rememberer — so the question asks after a kind of person, not a single act performed once.",
            "bn": "এর ভেতরে একটি নীরব প্রমাণ আছে। যে আয়াত ঘোষণা করছে কিতাবকে সহজ করা হয়েছে, সেটিই তার শেষ শব্দ হিসেবে বেছে নেয় এমন একটি শব্দ, যাকে আরবি ভাষা নিজেই মসৃণ করে নিয়েছে। আর শব্দটি ক্রিয়া নয়, ইসমে ফাইল — অর্থাৎ 'স্মরণকারী কেউ আছে কি' — তাই প্রশ্নটি খোঁজ করে এক ধরনের মানুষের, একবার করে ফেলা কোনো কাজের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Is There Any",
          "bn": "কেউ কি আছে"
        },
        "p": [
          {
            "en": "The question is left open on purpose. It names nobody, excludes nobody, and is never answered inside the surah. Ibn Kathir preserves a remark of the early scholar Matar al-Warraq on this verse: is there any seeker of knowledge, that he may be helped in it? He read the question not as a complaint about people but as an offer left standing.",
            "bn": "প্রশ্নটি ইচ্ছাকৃতভাবেই খোলা রাখা হয়েছে। এটি কারও নাম নেয় না, কাউকে বাদ দেয় না, আর সূরার ভেতরে কখনো এর উত্তর দেওয়া হয় না। ইবনে কাসীর এই আয়াত সম্পর্কে প্রাচীন যুগের আলিম মাতার আল-ওয়াররাকের একটি উক্তি সংরক্ষণ করেছেন: জ্ঞানের কোনো অন্বেষক আছে কি, যাকে এতে সাহায্য করা হবে? তিনি প্রশ্নটিকে মানুষ সম্পর্কে অভিযোগ হিসেবে নয়, বরং খোলা রেখে দেওয়া এক প্রস্তাব হিসেবে পড়েছেন।"
          },
          {
            "en": "as-Sa'di reads it the same way — that whoever turns towards this Book is helped towards what he turned for. That reframes the whole line. The ease is not merely a description of a text sitting on a shelf; it is a promise attached to the act of approaching it. The one who never begins never finds out whether the promise was true.",
            "bn": "আস-সা'দীও একইভাবে পড়েন — যে-ই এই কিতাবের দিকে ফেরে, সে যার জন্য ফিরেছে সেদিকে তাকে সাহায্য করা হয়। এতে গোটা পঙক্তির অর্থ নতুন করে দাঁড়ায়। এই সহজতা কেবল তাকে তুলে রাখা এক পাঠের বর্ণনা নয়; এটি সেই কিতাবের দিকে এগিয়ে যাওয়ার কাজের সাথে যুক্ত এক প্রতিশ্রুতি। যে কখনো শুরুই করে না, সে কখনো জানতে পারে না প্রতিশ্রুতিটি সত্য ছিল কি না।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking the Offer",
          "bn": "প্রস্তাবটি গ্রহণ করা"
        },
        "p": [
          {
            "en": "Practically, the verse argues for small and constant over large and rare. A few lines memorised properly, a portion read with the meaning in front of you, one verse carried into the day. The placement matters here too: the refrain arrives four times in the middle of accounts of nations that were warned and did not remember, offered each time as the way out that they declined to take.",
            "bn": "বাস্তবে আয়াতটি বড় ও কদাচিৎ-এর বদলে ছোট ও নিয়মিতের পক্ষে যুক্তি দেয়। কয়েকটি পঙক্তি ঠিকভাবে মুখস্থ করা, অর্থ সামনে রেখে এক অংশ পড়া, একটি আয়াত দিনের ভেতর বয়ে নিয়ে যাওয়া। এখানে অবস্থানটিও গুরুত্বপূর্ণ: ধ্রুবপদটি চারবার আসে এমন সব জাতির বিবরণের মাঝখানে, যাদের সতর্ক করা হয়েছিল কিন্তু তারা স্মরণ করেনি — প্রতিবারই এটি পেশ করা হয় সেই বেরিয়ে আসার পথ হিসেবে, যা তারা নিতে অস্বীকার করেছিল।"
          }
        ]
      }
    ]
  }
});
