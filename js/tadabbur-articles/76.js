/**
 * Tadabbur long-form articles — surah 76.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "76:1": {
    "sections": [
      {
        "h": {
          "en": "A Question That Affirms",
          "bn": "যে প্রশ্ন আসলে ঘোষণা"
        },
        "p": [
          {
            "en": "Hal ata 'ala-l-insani hinun mina-d-dahri lam yakun shay'an madhkura: has there come upon man a stretch of time when he was not a thing mentioned? The sentence opens with hal, the ordinary particle of a question, yet at-Tabari reads it here as qad: there certainly came. In this place, he says, hal states and does not deny, as when a man asks another, to make him acknowledge it, did I honour you, when he had honoured him. Elsewhere, he adds, the same particle can deny: does anyone do such a thing, meaning no one does.",
            "bn": "হাল আতা আলাল ইনসানি হীনুম মিনাদ দাহরি লাম ইয়াকুন শাইআম মাযকূরা: মানুষের উপর কি মহাকালের এমন এক সময় আসেনি, যখন সে উল্লেখ করার মতো কিছুই ছিল না? বাক্যের শুরু 'হাল' দিয়ে, যা আরবিতে প্রশ্নের সাধারণ অব্যয়। তবু তাবারী এখানে একে পড়েন 'কাদ' অর্থে: নিশ্চয়ই এসেছে। তিনি বলেন, এই জায়গায় হাল খবর দেয়, অস্বীকার করে না। যেমন কেউ অন্যকে দিয়ে স্বীকার করাতে জিজ্ঞেস করে, আমি কি তোমাকে সম্মান করেছি? অথচ সম্মান সে করেছেই। অন্য জায়গায় একই অব্যয় অস্বীকারও বোঝাতে পারে, তিনি যোগ করেন। যেমন, কেউ কি এমন কাজ করে? মানে, কেউ করে না।"
          },
          {
            "en": "Al-Qurtubi gives the same reading a longer pedigree. Hal in the sense of qad, he says, was the view of al-Kisa'i, al-Farra' and Abu 'Ubaydah, and it is reported from Sibawayh too. Al-Farra' draws the line: hal can deny or it can state, and this is the stating kind, as when you ask did I give you, making the other admit you gave. Al-Qurtubi also records, under 'it was said', that it keeps the force of a question. Ma'arif al-Qur'an explains the effect: a question about a self-evident truth draws the same answer from anyone, at any time.",
            "bn": "কুরতুবী এই পাঠের পেছনে আরও কয়েকটি নাম দেখান। তাঁর বর্ণনায়, হালকে কাদ অর্থে নেওয়া কিসাঈ, ফাররা ও আবু উবাইদার মত, আর সিবাওয়াইহ থেকেও এমন বর্ণনা আছে। ফাররা দুটি ব্যবহারের মধ্যে সীমা টানেন। হাল কখনো অস্বীকার বোঝায়, কখনো খবর দেয়, আর এখানে খবরের ব্যবহার। যেমন আপনি জিজ্ঞেস করলেন, আমি কি তোমাকে দিয়েছি? এতে অপরজনকে স্বীকার করাচ্ছেন যে আপনি দিয়েছেন। কুরতুবী 'বলা হয়েছে' বলে আরেকটি মতও আনেন: এটি প্রশ্নের অর্থেই আছে। মাআরিফুল কুরআন এর ফলটা বুঝিয়ে দেয়: স্বতঃসিদ্ধ সত্য নিয়ে প্রশ্ন করলে যে কেউ, যে কোনো সময়, একই উত্তর দেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Adam, or Every One of Us",
          "bn": "আদম, নাকি আমরা সবাই"
        },
        "p": [
          {
            "en": "Who is al-insan here? At-Tabari answers: Adam (AS). He brings the reading from Qatada, who said a time came upon Adam, and from Sufyan, who said simply, Adam. Qatada also gave the reason the line fits him: man was created recently, and we know of no creature Allah made after him; in another chain, Adam was the last of creation to be made. Al-Qurtubi names Qatada, ath-Thawri, 'Ikrimah and as-Suddi for the same view, and al-Baghawi glosses al-insan as Adam (AS) without naming anyone.",
            "bn": "এখানে আল-ইনসান কে? তাবারীর উত্তর: আদম (আঃ)। এই পাঠ তিনি আনেন কাতাদা থেকে, যিনি বলেছেন আদমের উপর এক সময় এসেছিল, আর সুফিয়ান থেকে, যিনি শুধু বলেছেন, আদম। আয়াতটি কেন তাঁর বেলায় খাটে, কাতাদা তার কারণও বলেছেন। মানুষকে সৃষ্টি করা হয়েছে সবার শেষে, তার পরে আল্লাহর বানানো আর কোনো সৃষ্টির কথা আমাদের জানা নেই। আরেক সনদে তাঁর কথা: সৃষ্টির মধ্যে আদমই ছিলেন সর্বশেষ। কুরতুবী একই মতের জন্য কাতাদা, সাওরী, ইকরিমা ও সুদ্দীর নাম নেন। বাগাভী কারও নাম না নিয়েই আল-ইনসানের ব্যাখ্যা দেন আদম (আঃ)।"
          },
          {
            "en": "Muqatil, in al-Qurtubi's report, reads the sentence with its order turned: has there come a stretch of time when man was not a thing mentioned, since Allah made him after all the animals and made no animal after him. Al-Qurtubi then records, under 'it has been said', a second identification: al-insan here is the human kind, Adam's descendants, and the stretch is the nine months a child spends in its mother's womb, unmentioned while it is a clot and a lump of flesh, a thing of no weight in that state.",
            "bn": "কুরতুবীর বর্ণনায় মুকাতিল বাক্যটিকে পড়েন শব্দের ক্রম উল্টে: এমন কোনো সময় কি আসেনি যখন মানুষ উল্লেখযোগ্য কিছুই ছিল না? কারণ আল্লাহ তাকে বানিয়েছেন সব প্রাণীর পরে, তার পরে আর কোনো প্রাণী বানাননি। এরপর কুরতুবী 'বলা হয়েছে' বলে আরেকটি পরিচয় আনেন। এখানে আল-ইনসান মানে মানবজাতি, আদমের বংশধরেরা। আর সময়টা হলো মায়ের পেটে কাটানো ৯ মাস। তখন সে জমাট রক্ত, তারপর মাংসপিণ্ড, তার কোনো উল্লেখ নেই। সেই অবস্থায় তার কোনো গুরুত্বই নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an calls this second reading the view of most commentators: the period runs from conception to birth, through every stage from drop to body to life, while no one knows the child's sex, name, shape or size. So there are two genuine readings, each with its holders: Adam before the spirit, and every human being before birth. This article keeps both and chooses neither. The verse's force does not hang on the choice, since either way whoever is listening now once went unmentioned.",
            "bn": "মাআরিফুল কুরআন এই দ্বিতীয় পাঠকে বলে অধিকাংশ তাফসীরকারের মত। সময়টা গর্ভধারণ থেকে জন্ম পর্যন্ত। ফোঁটা থেকে দেহ, দেহ থেকে প্রাণ, সব ধাপ এর মধ্যে। তখনো কেউ জানে না শিশুটি ছেলে না মেয়ে, তার নাম কী, চেহারা বা আকার কেমন। তাহলে পাঠ দুটি, দুটিই খাঁটি, দুটিরই ধারক আছেন: রূহ ফুঁকে দেওয়ার আগের আদম, আর জন্মের আগের প্রতিটি মানুষ। এই লেখা দুটিকেই রাখে, কোনোটিকে বেছে নেয় না। আয়াতের জোর এই বাছাইয়ের উপর নির্ভর করে না। যে পাঠই নিন, আজ যিনি শুনছেন, তিনিও একসময় ছিলেন অনুল্লিখিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Forty Years, or No Count",
          "bn": "চল্লিশ বছর, নাকি অগণিত কাল"
        },
        "p": [
          {
            "en": "Hinun mina-d-dahr: a stretch out of time. At-Tabari reports that the people of interpretation disagreed over how long this hin was. Some said forty years: Adam's clay lay shaped, with no spirit breathed into it, for forty years, and that is the length meant. A shaped body was already a thing, they argued, but not yet a thing mentioned. Others said the hin here has no limit. On ad-dahr itself at-Tabari is brief: in this place it has no boundary that can be fixed.",
            "bn": "হীনুম মিনাদ দাহর: মহাকালের এক টুকরো সময়। তাবারী জানান, এই হীন কত দীর্ঘ, তা নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। কেউ বলেছেন চল্লিশ বছর। আদমের মাটির দেহ গড়া অবস্থায় পড়ে ছিল চল্লিশ বছর, তাতে রূহ ফুঁকে দেওয়া হয়নি, আর এটাই সেই সময়। তাঁদের যুক্তি, গড়া দেহ তখনই একটা কিছু, কিন্তু উল্লেখ করার মতো কিছু নয়। অন্যরা বলেছেন, এখানে হীনের কোনো সীমা নেই। আর দাহর সম্পর্কে তাবারীর কথা সংক্ষিপ্ত: এখানে এর এমন কোনো সীমা নেই যা নির্দিষ্ট করা যায়।"
          },
          {
            "en": "The forty years come with more detail in other commentaries, and every figure is a report, not a measurement. Al-Baghawi has Adam lying as clay between Makkah and at-Ta'if for forty years before the spirit, and adds, from Ibn 'Abbas, that He then created him after 120 years. Al-Qurtubi gives stages: from Ibn 'Abbas, through ad-Dahhak, forty years as clay, forty as altered mud, forty as dry ringing clay; and from Ibn Mas'ud, forty more as dust, a hundred and sixty in all.",
            "bn": "অন্য তাফসীরে চল্লিশ বছরের কথা আসে আরও খুঁটিনাটিসহ, তবে প্রতিটি সংখ্যাই বর্ণনা, মাপজোখ নয়। বাগাভীর বর্ণনায় রূহ আসার আগে আদম চল্লিশ বছর মাটির দেহ হয়ে পড়ে ছিলেন মক্কা ও তায়েফের মাঝখানে। তিনি ইবন আব্বাস থেকে যোগ করেন, এরপর ১২০ বছর পরে আল্লাহ তাঁকে সৃষ্টি করেন। কুরতুবী ধাপগুলো সাজিয়ে দেন। দাহহাকের সূত্রে ইবন আব্বাস থেকে: চল্লিশ বছর মাটি, চল্লিশ বছর গন্ধযুক্ত কাদা, চল্লিশ বছর শুকনো ঠনঠনে মাটি। আর ইবন মাসঊদ যোগ করেন ধুলো হিসেবে আরও চল্লিশ বছর, সব মিলিয়ে একশো ষাট।"
          },
          {
            "en": "Al-Qurtubi also keeps a report, through al-Mawardi and again from Ibn 'Abbas, that the measure of this hin is not known at all. Ma'arif al-Qur'an reads the nunation of hinun as marking a long and indefinite period, and allows a wider sense: the food from which a person's origin is formed existed long before him, so the stretch may run to thousands of years. The Muyassar keeps to the plain line: a long span of time passed over man before the spirit was breathed into him.",
            "bn": "কুরতুবী আরেকটি বর্ণনাও রাখেন, মাওয়ারদীর সূত্রে, সেটিও ইবন আব্বাস থেকে: এই হীনের পরিমাণ কারও জানা নেই। মাআরিফুল কুরআন বলে, হীনুন শব্দের তানবীন বোঝায় দীর্ঘ ও অনির্দিষ্ট সময়। সে আরও বিস্তৃত অর্থের সুযোগ রাখে। মানুষের সূচনা যে খাবার থেকে, সে খাবার তার বহু আগে থেকেই ছিল। তাই সময়টা হাজার হাজার বছরও হতে পারে। মুয়াসসার সাদামাটা কথায় থামে: মানুষের উপর দিয়ে দীর্ঘ সময় পার হয়েছে, তারপর তাতে রূহ ফুঁকে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Unknown, Unnamed, Unremarked",
          "bn": "নাম নেই, খবর নেই"
        },
        "p": [
          {
            "en": "Lam yakun shay'an madhkura: he was not a thing mentioned. Al-Baghawi explains it as not spoken of, not known, his name not known nor what was intended by him; he was a thing, but not mentioned, from his creation out of clay until the spirit was breathed in. Al-Qurtubi gives the same gloss from al-Farra', Qutrub and Tha'lab: a shaped body of dust and clay, not spoken of and not known, until the spirit came into it and he became mentioned.",
            "bn": "লাম ইয়াকুন শাইআম মাযকূরা: সে উল্লেখযোগ্য কিছু ছিল না। বাগাভী এর ব্যাখ্যা দেন এভাবে: তার কথা কেউ বলত না, কেউ তাকে চিনত না, জানত না তার নাম কী, তাকে দিয়ে কী উদ্দেশ্য। মাটি থেকে গড়ার সময় থেকে রূহ ফুঁকে দেওয়া পর্যন্ত সে একটা কিছু ছিল, তবে তার উল্লেখ ছিল না। কুরতুবী একই ব্যাখ্যা আনেন ফাররা, কুতরুব ও সা'লাব থেকে। ধুলো আর মাটির গড়া একটা দেহ, যার কথা কেউ বলে না, যাকে কেউ চেনে না। তারপর তাতে রূহ এল, আর সে হয়ে উঠল উল্লেখযোগ্য।"
          },
          {
            "en": "At-Tabari, reporting those who held the forty-year view, takes madhkur as standing: he was not a thing with any renown, rank or honour; he was only sticky clay and altered mud. Ibn Kathir gives the reason in a phrase: he was not a thing worth mention because of his lowliness and weakness. And from Ibn 'Abbas, through ad-Dahhak, al-Qurtubi records the widest sweep of all: he was mentioned neither in heaven nor on earth.",
            "bn": "তাবারী চল্লিশ বছরের মতের ধারকদের কথা তুলে ধরে মাযকূর বলতে বোঝান মর্যাদা। তার কোনো খ্যাতি ছিল না, পদমর্যাদা ছিল না, সম্মান ছিল না। সে ছিল শুধু আঠালো মাটি আর গন্ধযুক্ত কাদা। ইবন কাসীর কারণটা বলেন অল্প কথায়: নিজের তুচ্ছতা আর দুর্বলতার কারণে সে উল্লেখ করার মতো কিছু ছিল না। আর দাহহাকের সূত্রে ইবন আব্বাস থেকে কুরতুবী সবচেয়ে বিস্তৃত কথাটা আনেন: আকাশেও তার উল্লেখ ছিল না, জমিনেও না।"
          },
          {
            "en": "Al-Qurtubi then refines what mention means. Yahya ibn Sallam said man was not mentioned among creation, though with Allah he was mentioned, and al-Qushayri said the same. Another view holds that this dhikr is not report, since the Lord's telling of what exists is from eternity, but standing and worth, as one calls a man madhkur, a man of note; al-Qurtubi cites 43:44, it is a dhikr for you and your people. Then, when Allah told the angels He had made Adam a vicegerent and laid the trust on him, his excellence showed, and he became mentioned.",
            "bn": "এরপর কুরতুবী উল্লেখ কথাটার অর্থ আরও সূক্ষ্ম করেন। ইয়াহইয়া ইবন সাল্লাম বলেছেন, সৃষ্টির মধ্যে মানুষের উল্লেখ ছিল না, যদিও আল্লাহর কাছে তার উল্লেখ ছিল। কুশাইরীও একই কথা বলেছেন। আরেক মতে, এখানে যিকর মানে খবর দেওয়া নয়, কারণ সৃষ্টজগৎ সম্পর্কে রবের বলা অনাদি। বরং যিকর মানে মর্যাদা ও মূল্য, যেমন কাউকে বলা হয় মাযকূর, অর্থাৎ নামডাকওয়ালা লোক। কুরতুবী প্রমাণ দেন ৪৩:৪৪ থেকে: এটি আপনার ও আপনার কওমের জন্য যিকর। তারপর আল্লাহ যখন ফেরেশতাদের জানালেন যে আদমকে খলিফা বানিয়েছেন এবং তাঁর উপর আমানত তুলে দিয়েছেন, তখন তাঁর মর্যাদা প্রকাশ পেল, তিনি হলেন উল্লেখযোগ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Something, or Nothing at All",
          "bn": "কিছু একটা, নাকি কিছুই না"
        },
        "p": [
          {
            "en": "Beneath the glosses lies a real question: was man something during that stretch, or nothing at all? At-Tabari raises a point of language. Allah said a time came upon man, and it is not natural speech to say a time came upon a person before he existed; to mean that, one would say a time came before he was created, not upon him. Ma'arif al-Qur'an makes the same argument: time could not come upon man in a state of pure non-existence, so he existed in some form, though not worth mentioning.",
            "bn": "ব্যাখ্যাগুলোর নিচে একটা আসল প্রশ্ন লুকিয়ে আছে। সেই সময়ে মানুষ কি একটা কিছু ছিল, নাকি একেবারেই কিছু ছিল না? তাবারী ভাষার একটা দিক তোলেন। আল্লাহ বলেছেন মানুষের উপর এক সময় এসেছিল। অথচ কেউ অস্তিত্বে আসার আগে তার উপর সময় এসেছিল, এমন কথা স্বাভাবিক আরবিতে বলা হয় না। সে অর্থ বোঝাতে হলে বলা হতো, তাকে সৃষ্টির আগে এক সময় এসেছিল, তার উপর নয়। মাআরিফুল কুরআনও একই যুক্তি দেয়। সম্পূর্ণ অনস্তিত্বে থাকা মানুষের উপর সময় আসতে পারে না। কাজেই সে কোনো না কোনো রূপে ছিল, শুধু উল্লেখের মতো ছিল না।"
          },
          {
            "en": "Al-Qurtubi records the short form of this view from al-Farra', through Muhammad ibn al-Jahm: he was a thing, and he was not mentioned. He also records the opposite view, that the negation falls on thing itself: ages passed while Adam was not yet a thing, nor created, nor mentioned to any creature, since he was the last kind Allah made; this, he says, is the sense of Qatada and Muqatil. As-Sa'di reads the verse in that direction too: a long age passed over man before his existence, while he was non-existent, not even mentioned.",
            "bn": "কুরতুবী মুহাম্মাদ ইবনুল জাহমের সূত্রে ফাররা থেকে এই মতের সংক্ষিপ্ত রূপটি আনেন: সে একটা কিছু ছিল, তবে তার উল্লেখ ছিল না। বিপরীত মতটিও তিনি রাখেন। সে মতে না-বোধকতা গিয়ে পড়ে 'কিছু' শব্দের উপরেই। যুগের পর যুগ কেটেছে, আর আদম তখনো কিছুই ছিলেন না, সৃষ্টও না, কোনো সৃষ্টির কাছে উল্লিখিতও না, কারণ আল্লাহ সব শেষে তাঁকে বানিয়েছেন। কুরতুবী বলেন, কাতাদা ও মুকাতিলের কথার অর্থ এটাই। সা'দীও আয়াতটিকে এই দিকেই পড়েন। মানুষের অস্তিত্বের আগে তার উপর দিয়ে দীর্ঘ কাল গেছে, যখন সে ছিল অনস্তিত্বে, উল্লেখের প্রশ্নই ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Would That It Had Ended There",
          "bn": "যদি সেখানেই শেষ হতো"
        },
        "p": [
          {
            "en": "Two Companions are reported to have stopped at this verse. Al-Baghawi writes, under 'it is reported', that 'Umar (RA) heard a man recite lam yakun shay'an madhkura and said, would that it had been completed; al-Baghawi explains that he meant, would that man had remained as he was. Al-Qurtubi carries the same remark from 'Umar, and before it a remark from Abu Bakr (RA), who on reciting the verse said, would that it had been completed, so that we were not put to the test.",
            "bn": "বর্ণনা আছে, দুজন সাহাবি এই আয়াতে এসে থেমে গিয়েছিলেন। বাগাভী 'বর্ণিত আছে' বলে লেখেন, উমর (রাঃ) এক ব্যক্তিকে লাম ইয়াকুন শাইআম মাযকূরা পড়তে শুনে বললেন, হায়, এটা যদি পূর্ণ হয়ে যেত! বাগাভী বুঝিয়ে দেন, তাঁর মানে ছিল, মানুষ যদি যেমন ছিল তেমনই থেকে যেত। কুরতুবীও উমরের এই কথাটি আনেন। তার আগে আনেন আবু বকর (রাঃ)-এর কথা। আয়াতটি পড়ে তিনি বলেছিলেন, এটা যদি পূর্ণ হয়ে যেত, তাহলে আমাদের পরীক্ষায় পড়তে হতো না।"
          },
          {
            "en": "Al-Qurtubi explains Abu Bakr's wish: would that the period over Adam, when he was not a thing mentioned, had run its course that way, so that he fathered no children and his children were not tested. Neither commentator gives a chain for these words, so they stand here as reports and no more. What they show is how the verse was heard: not as a boast that man has risen, but as a reminder that coming into mention also meant coming under trial, which is exactly where 76:2 goes next.",
            "bn": "আবু বকরের ইচ্ছাটা কুরতুবী খুলে বলেন। আদমের উপর দিয়ে যে সময় গেছে, যখন তিনি উল্লেখযোগ্য কিছু ছিলেন না, সেটা যদি ওভাবেই শেষ হতো! তাহলে তাঁর সন্তান হতো না, আর সন্তানদেরও পরীক্ষা দিতে হতো না। দুই তাফসীরকারের কেউই এ কথাগুলোর সনদ দেননি। তাই এখানে এগুলো শুধু বর্ণনা হিসেবেই থাকছে। তবে এগুলো দেখায়, আয়াতটি তখন কীভাবে শোনা হতো। মানুষ বড় হয়ে উঠেছে, এমন গর্বের কথা হিসেবে নয়। বরং উল্লেখের জগতে আসা মানেই পরীক্ষার মুখে আসা, এই স্মরণ হিসেবে। ঠিক সেদিকেই যায় পরের আয়াত, ৭৬:২।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited at Friday Dawn",
          "bn": "জুমার দিনের ফজরে"
        },
        "p": [
          {
            "en": "Ibn Kathir opens the surah with a hadith he cites from Sahih Muslim, and Muslim records it (879) from Ibn 'Abbas: the Prophet ﷺ used to recite in the dawn prayer on Friday Alif Lam Mim Tanzil, as-Sajdah, and Hal ata 'ala-l-insani hinun mina-d-dahr; and the Prophet ﷺ used to recite in the Friday prayer Surat al-Jumu'ah and al-Munafiqun. Muslim placed it in his Sahih, his collection of sound reports. It concerns the surah as a whole and its place in worship; it does not explain this verse.",
            "bn": "ইবন কাসীর সূরাটি শুরু করেন সহীহ মুসলিমের একটি হাদীস দিয়ে। মুসলিম (৮৭৯) ইবন আব্বাস থেকে বর্ণনা করেন: নবী ﷺ জুমার দিন ফজরের নামাজে পড়তেন আলিফ লাম মীম তানযীল, অর্থাৎ সূরা সাজদা, আর হাল আতা আলাল ইনসানি হীনুম মিনাদ দাহর। আর নবী ﷺ জুমার নামাজে পড়তেন সূরা জুমুআ ও সূরা মুনাফিকূন। মুসলিম হাদীসটি রেখেছেন তাঁর সহীহ গ্রন্থে, যা বিশুদ্ধ বর্ণনার সংকলন। হাদীসটি গোটা সূরা আর ইবাদতে তার জায়গা নিয়ে, এই আয়াতের ব্যাখ্যা নিয়ে নয়।"
          },
          {
            "en": "Ibn Kathir and al-Qurtubi also carry a report, through Ibn Zayd, of a black man who died of longing when the surah's description of Paradise was recited; Ibn Kathir himself labels it mursal gharib, its chain stopping short of a Companion and its line single, so this article does not lean on it. No sound hadith attached to the meaning of 76:1 appears in the files read for it. On placement the sources differ: Ibn Kathir calls the surah Makkan, al-Baghawi reports Makkan from 'Ata' and Madinan from Mujahid and Qatada, and al-Qurtubi reports Makkan from Ibn 'Abbas and Madinan from the majority.",
            "bn": "ইবন কাসীর ও কুরতুবী ইবন যায়দের সূত্রে আরেকটি বর্ণনাও আনেন। এক কৃষ্ণাঙ্গ ব্যক্তির সামনে সূরাটির জান্নাতের বর্ণনা পড়া হলে জান্নাতের আকুলতায় তিনি মারা যান। ইবন কাসীর নিজেই একে বলেছেন মুরসাল গরীব, অর্থাৎ সনদ সাহাবি পর্যন্ত পৌঁছায়নি, আর সূত্রও একক। তাই এই লেখা এর উপর ভর দেয় না। ৭৬:১-এর অর্থের সঙ্গে যুক্ত কোনো সহীহ হাদীস এই আয়াতের জন্য পড়া তাফসীরগুলোতে নেই। সূরাটি কোথায় নাযিল, তা নিয়ে সূত্রগুলো একমত নয়। ইবন কাসীর বলেন মক্কী। বাগাভী আতা থেকে মক্কী আর মুজাহিদ ও কাতাদা থেকে মাদানী বর্ণনা করেন। কুরতুবী ইবন আব্বাস থেকে মক্কী আর অধিকাংশের মতে মাদানী বর্ণনা করেন।"
          },
          {
            "en": "Al-Qurtubi also mentions al-Qushayri's statement that the surah came down concerning 'Ali ibn Abi Talib (RA), and answers it in a sentence: the purpose of the surah is general, and the same holds for everything said to have come down for some particular cause. No occasion of revelation is used here for 76:1. The verse is read as the sources read it, as a statement about man's beginning that reaches every hearer.",
            "bn": "কুরতুবী কুশাইরীর একটি কথাও উল্লেখ করেন, সূরাটি নাকি আলী ইবন আবী তালিব (রাঃ)-কে নিয়ে নাযিল হয়েছে। এর জবাব তিনি দেন এক বাক্যে: সূরার উদ্দেশ্য সবার জন্য, আর কোনো বিশেষ উপলক্ষে নাযিল হয়েছে বলে যা কিছু বলা হয়, সবার বেলায় কথা একই। তাই ৭৬:১-এর জন্য এখানে কোনো শানে নুযূল ব্যবহার করা হয়নি। সূত্রগুলো আয়াতটিকে যেভাবে পড়ে, এখানেও সেভাবেই পড়া হলো: মানুষের সূচনা নিয়ে এমন এক খবর, যা প্রত্যেক শ্রোতার কাছে পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Seventy-One Years Ago",
          "bn": "একাত্তর বছর আগে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the next verse as the explanation of the present verse: then Allah explains it, We created man from a mingled drop, amshaj meaning mixed, in order to test him, and gave him hearing and sight to use in obedience or disobedience; he sets the test beside 67:2. Then 76:3, We guided him to the way, which he glosses as We explained it and made it clear, and he is either grateful or ungrateful. As-Sa'di says at the outset that the surah sets out man's first state, his beginning, his middle and his end.",
            "bn": "ইবন কাসীর পরের আয়াতকে পড়েন এই আয়াতের ব্যাখ্যা হিসেবে। আল্লাহ বুঝিয়ে দিচ্ছেন: আমি মানুষকে সৃষ্টি করেছি মিশ্রিত ফোঁটা থেকে, তাকে পরীক্ষা করার জন্য। আমশাজ মানে মিশ্রিত। তাকে দিয়েছি শোনার ও দেখার শক্তি, যাতে সে তা আনুগত্যে বা নাফরমানিতে লাগাতে পারে। এই পরীক্ষার পাশে তিনি রাখেন ৬৭:২। তারপর ৭৬:৩: আমি তাকে পথ দেখিয়েছি। তাঁর ব্যাখ্যায়, পথটা আমি তাকে বুঝিয়ে দিয়েছি, স্পষ্ট করে দিয়েছি। এখন সে হয় কৃতজ্ঞ, নয় অকৃতজ্ঞ। সা'দী শুরুতেই বলেন, সূরাটি তুলে ধরে মানুষের প্রথম অবস্থা, তার সূচনা, মাঝখান আর শেষ।"
          },
          {
            "en": "Ma'arif al-Qur'an turns the verse into an exercise. A man of seventy, it says, should reflect that seventy-one years ago nothing at all could be said of him; even his parents had not pictured him in particular. What gathered particles from across the earth into a person who hears, sees and understands? Asked honestly, the question leaves little room for pride and a great deal for thanks. The one who was not a thing mentioned is now addressed in revelation, and the very next verses ask what he will do with that.",
            "bn": "মাআরিফুল কুরআন আয়াতটিকে বানিয়ে দেয় একটা অনুশীলন। সত্তর বছরের একজন মানুষ ভাবুক, একাত্তর বছর আগে তার সম্পর্কে কিছুই বলার ছিল না। এমনকি তার বাবা-মাও আলাদা করে তার কথা কল্পনা করেননি। তাহলে কে পৃথিবীর নানা প্রান্ত থেকে কণা জড়ো করে এমন একজন মানুষ গড়লেন, যে শোনে, দেখে, বোঝে? প্রশ্নটা সৎভাবে করলে অহংকারের জায়গা থাকে সামান্য, শুকরিয়ার জায়গা থাকে অনেক। যে একসময় উল্লেখের মতো কিছুই ছিল না, ওহি আজ তাকেই সম্বোধন করছে। আর ঠিক পরের আয়াতগুলো জানতে চায়, এ নিয়ে সে কী করবে।"
          }
        ]
      }
    ]
  },
  "76:3": {
    "sections": [
      {
        "h": {
          "en": "Hearing, Seeing, Then the Way",
          "bn": "শোনা, দেখা, তারপর পথ"
        },
        "p": [
          {
            "en": "Inna hadaynahu as-sabila imma shakiran wa imma kafura: indeed, We guided him to the way, be he grateful or be he ungrateful. Seven Arabic words, and the surah's argument turns on them. The verse before, 76:2, says that Allah created man from a mixed drop in order to test him, and made him hearing and seeing. The verse after, 76:4, names what is prepared for the disbelievers. Before both, 76:1, treated at length separately, asks whether there came upon man a stretch of time when he was nothing remembered.",
            "bn": "ইন্না হাদাইনাহুস সাবীলা ইম্মা শাকিরাও ওয়া ইম্মা কাফূরা: আমি তাকে পথ দেখিয়ে দিয়েছি, হয় সে কৃতজ্ঞ হবে, নয়তো অকৃতজ্ঞ। আরবিতে মাত্র সাতটি শব্দ, অথচ গোটা সূরার যুক্তি এদের উপর ভর করে ঘোরে। আগের আয়াত ৭৬:২ বলে, আল্লাহ মানুষকে মিশ্রিত শুক্রবিন্দু থেকে সৃষ্টি করেছেন তাকে পরীক্ষা করার জন্য, আর তাকে বানিয়েছেন শ্রবণ ও দৃষ্টিশক্তির অধিকারী। পরের আয়াত ৭৬:৪ জানিয়ে দেয় কাফিরদের জন্য কী প্রস্তুত আছে। তারও আগে ৭৬:১ প্রশ্ন তোলে, মানুষের উপর কি এমন এক কাল আসেনি যখন সে উল্লেখ করার মতো কিছুই ছিল না? সে আয়াত নিয়ে আলাদা বিস্তারিত লেখা আছে।"
          },
          {
            "en": "The commentators read the two verses as one movement. Al-Muyassar explains the test of 76:2 as the test of the religious obligations that come later, and says hearing and sight were given for that purpose: to hear the signs and to see the proofs. It then runs straight on into 76:3. At-Tabari reports from Ibn Zayd, on the words from 76:2 to We guided him to the way: We look at what he will do, which of the two roads he takes and which of the two things he chooses; and this, Ibn Zayd says, is the testing.",
            "bn": "তাফসীরকারেরা দুটি আয়াতকে মিলিয়ে একটি অখণ্ড বক্তব্য হিসেবে পড়েন। মুয়াসসারের ব্যাখ্যায় ৭৬:২-এর পরীক্ষা মানে পরে আসা শরীয়তের বিধিবিধান দিয়ে পরীক্ষা। শোনা আর দেখার শক্তি দেওয়ার উদ্দেশ্যও সেখানে বলা আছে: মানুষ যেন আয়াত শোনে আর প্রমাণগুলো চোখে দেখে। তারপর কোনো বিরতি ছাড়াই মুয়াসসার চলে যায় ৭৬:৩-এ। তাবারী ইবন যায়দের কথা আনেন, যিনি ৭৬:২ থেকে 'আমি তাকে পথ দেখিয়েছি' পর্যন্ত অংশের ব্যাখ্যায় বলেছেন: আমি দেখি সে কী করে, দুই রাস্তার কোনটা ধরে, দুই বিষয়ের কোনটা বেছে নেয়। ইবন যায়দের ভাষায়, এটাই পরীক্ষা।"
          }
        ]
      },
      {
        "h": {
          "en": "Explained, Made Clear, Shown",
          "bn": "বুঝিয়ে, স্পষ্ট করে, দেখিয়ে"
        },
        "p": [
          {
            "en": "What does hadaynahu mean here? Ibn Kathir answers with three verbs: We explained it to him, We made it clear to him, and We made him see it. He supports the gloss with two verses. In 41:17 Allah says of Thamud, We guided them, but they preferred blindness to guidance; the guidance there is something a people received and then turned from. In 90:10 Allah says, And We showed him the two ways, which Ibn Kathir explains as the path of good and the path of evil.",
            "bn": "এখানে হাদাইনাহু শব্দের মানে কী? ইবন কাসীর জবাব দেন তিনটি ক্রিয়া দিয়ে: আমি তাকে তা বুঝিয়ে দিয়েছি, তার কাছে স্পষ্ট করেছি, আর তাকে তা দেখিয়ে দিয়েছি। এই ব্যাখ্যার পক্ষে তিনি দুটি আয়াত আনেন। ৪১:১৭ আয়াতে সামূদ জাতি সম্পর্কে আল্লাহ বলেন, আমি তাদের পথ দেখিয়েছিলাম, কিন্তু তারা হিদায়াতের চেয়ে অন্ধত্বকেই বেশি পছন্দ করল। সেখানে হিদায়াত এমন জিনিস, যা একটি জাতি পেয়েছিল এবং পরে মুখ ফিরিয়ে নিয়েছিল। ৯০:১০ আয়াতে আল্লাহ বলেন, আমি তাকে দুটি পথ দেখিয়েছি। ইবন কাসীর এর ব্যাখ্যা দেন: ভালোর পথ আর মন্দের পথ।"
          },
          {
            "en": "He names those who held this reading: Ikrimah, Atiyyah, Ibn Zayd, and Mujahid in the well-known report from him, together with the majority. The other commentators gloss the verb the same way, each with a slightly different object. At-Tabari: We made clear to him the road to Paradise and made its path known to him. Al-Baghawi: We made clear to him the path of truth and falsehood, of guidance and misguidance, and made known to him the road of good and evil. Al-Muyassar pairs the same terms.",
            "bn": "এ ব্যাখ্যা কাদের, তাও তিনি জানান: ইকরিমা, আতিয়্যা, ইবন যায়দ, মুজাহিদ (তাঁর থেকে প্রসিদ্ধ বর্ণনা অনুযায়ী), আর অধিকাংশ আলেম। অন্য তাফসীরকারেরাও ক্রিয়াটিকে একইভাবে বোঝেন, শুধু কী দেখানো হলো সেখানে একটু করে তফাত। তাবারীর ভাষায়: আমি তার কাছে জান্নাতের রাস্তা স্পষ্ট করেছি এবং সে পথ তাকে চিনিয়ে দিয়েছি। বাগাভীর ভাষায়: হক ও বাতিলের পথ, হিদায়াত ও গোমরাহির পথ তার কাছে স্পষ্ট করেছি, ভালো ও মন্দের রাস্তা তাকে চিনিয়েছি। মুয়াসসারও একই জোড়া শব্দ ব্যবহার করে।"
          },
          {
            "en": "Al-Qurtubi adds the means: We made known to him the road of guidance and misguidance, of good and evil, by sending the messengers, and then he believed or disbelieved; he too cites 90:10. As-Sa'di lays the act out in sequence. Allah sent him messengers and revealed books to him, guided him to the road that leads to Allah and made him desire it, told him what awaits him on arrival, then told him of the road that leads to ruin, warned him from it, and tested him by both.",
            "bn": "কুরতুবী মাধ্যমটির কথাও বলেন: রাসূলদের পাঠিয়ে আমি তাকে হিদায়াত ও গোমরাহির, ভালো ও মন্দের রাস্তা চিনিয়েছি, তারপর সে ঈমান এনেছে অথবা কুফরি করেছে। তিনিও ৯০:১০ উদ্ধৃত করেন। সা'দী পুরো কাজটা ধাপে ধাপে সাজান। আল্লাহ তার কাছে রাসূল পাঠিয়েছেন, কিতাব নাজিল করেছেন, আল্লাহর কাছে পৌঁছানোর রাস্তা দেখিয়েছেন এবং সে পথের প্রতি আগ্রহ জাগিয়েছেন। সেখানে পৌঁছালে কী মিলবে, তাও জানিয়েছেন। তারপর ধ্বংসের দিকে নিয়ে যাওয়া রাস্তার খবর দিয়েছেন, তা থেকে ভয় দেখিয়েছেন, আর এই দুই দিয়েই তাকে পরীক্ষা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Womb and Other Readings",
          "bn": "মাতৃগর্ভ ও অন্য ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Not every early authority took the way to be the way of religion. Ibn Kathir reports from Mujahid, Abu Salih, ad-Dahhak and as-Suddi that the way here means the child's coming out of the womb. He calls this a strange view (gharib) and says the sound, well-known reading is the first. Al-Qurtubi reports the womb reading from ad-Dahhak, Abu Salih and as-Suddi, then adds an opinion under it is said: the way is a person's benefits and harms, which he finds by his nature and the completeness of his intellect.",
            "bn": "প্রাথমিক যুগের সবাই এখানে পথ বলতে দীনের পথ বোঝেননি। ইবন কাসীর মুজাহিদ, আবু সালিহ, দাহহাক ও সুদ্দী থেকে বর্ণনা করেন যে এখানে পথ মানে মায়ের গর্ভ থেকে শিশুর বেরিয়ে আসা। তিনি একে বিরল মত (গরীব) বলেন, আর জানান যে সহীহ ও প্রসিদ্ধ ব্যাখ্যা প্রথমটিই। কুরতুবী গর্ভের ব্যাখ্যাটি আনেন দাহহাক, আবু সালিহ ও সুদ্দী থেকে। তারপর 'বলা হয়' দিয়ে আরেকটি মত যোগ করেন: পথ মানে মানুষের লাভ ও ক্ষতির বিষয়গুলো, যেগুলো সে নিজের স্বভাব আর পূর্ণ বুদ্ধি দিয়ে চিনে নেয়।"
          },
          {
            "en": "Mujahid appears again with a different gloss. In al-Qurtubi he says: We made clear to him the way to wretchedness and to felicity. At-Tabari carries the same report, through Ibn Abi Najih from Mujahid: the way is wretchedness and felicity. Al-Qurtubi also records a point of usage. One says hadaytuhu as-sabil, hadaytuhu lis-sabil and hadaytuhu ila as-sabil: the verb takes the way directly or through either preposition. In 76:3 it takes it directly, with nothing between the verb and the way.",
            "bn": "মুজাহিদের নাম আবার আসে, ভিন্ন এক ব্যাখ্যা নিয়ে। কুরতুবীতে তিনি বলেন: আমি তার কাছে দুর্ভাগ্য ও সৌভাগ্যের পথ স্পষ্ট করেছি। তাবারীও ইবন আবী নাজীহের সূত্রে মুজাহিদ থেকে একই বর্ণনা আনেন: পথ মানে দুর্ভাগ্য আর সৌভাগ্য। কুরতুবী ভাষার ব্যবহার নিয়েও একটি কথা লিখে রাখেন। আরবিতে বলা যায় হাদাইতুহুস সাবীল, হাদাইতুহু লিস সাবীল, আবার হাদাইতুহু ইলাস সাবীল। অর্থাৎ ক্রিয়াটি পথকে সরাসরি গ্রহণ করতে পারে, দুটি অব্যয়ের যেকোনোটির মাধ্যমেও পারে। ৭৬:৩ আয়াতে ক্রিয়া আর পথের মাঝে কিছু নেই, সরাসরি।"
          }
        ]
      },
      {
        "h": {
          "en": "Showing, and What Follows",
          "bn": "দেখানো, তারপর যা আসে"
        },
        "p": [
          {
            "en": "The commentators who gloss hadaynahu as making plain are speaking of guidance as showing. On that reading the road was put in view, and the verb does not say who walks it. Al-Qurtubi records an opinion, under it is said, that names what lies beyond the showing. Hadaynahu means We guided him to right conduct: We made clear to him the path of tawhid by setting up the proofs for it. Then, if We create guidance in him, he is guided and believes; and if We forsake him, he disbelieves.",
            "bn": "যে তাফসীরকারেরা হাদাইনাহু-কে স্পষ্ট করে দেওয়া অর্থে নেন, তাঁরা হিদায়াত বলতে দেখিয়ে দেওয়া বোঝান। এ ব্যাখ্যায় রাস্তাটা চোখের সামনে রাখা হয়েছে, কিন্তু কে সে রাস্তায় হাঁটবে, ক্রিয়াটি তা বলে না। কুরতুবী 'বলা হয়' দিয়ে এমন একটি মত আনেন, যা দেখানোর পরের ধাপের কথা বলে। সে মতে হাদাইনাহু মানে আমি তাকে সঠিক পথের দিশা দিয়েছি, প্রমাণ দাঁড় করিয়ে তাওহীদের রাস্তা তার কাছে স্পষ্ট করেছি। তারপর আমি যদি তার মধ্যে হিদায়াত সৃষ্টি করি, সে হিদায়াত পায় ও ঈমান আনে। আর যদি তাকে সাহায্য না করে ছেড়ে দিই, সে কুফরি করে।"
          },
          {
            "en": "The same opinion gives an everyday comparison: it is as when you say, I have advised you; if you wish, accept, and if you wish, leave it. Imma shakiran, it adds, is like that, and al-Qurtubi closes with and Allah knows best. Ma'arif al-Qur'an states the human side directly: Allah sent Prophets and Books to show both ways, and man has been given a choice to adopt either. In these tafsirs the second step, being actually guided, appears in that recorded opinion; the verb itself speaks of the showing.",
            "bn": "একই মত দৈনন্দিন জীবনের একটি উপমাও দেয়: যেমন আপনি কাউকে বললেন, আমি তোমাকে উপদেশ দিয়েছি, চাইলে গ্রহণ করো, চাইলে ছেড়ে দাও। মতটি বলে, ইম্মা শাকিরান কথাটাও তেমনই। কুরতুবী শেষ করেন 'আল্লাহই ভালো জানেন' বলে। মাআরিফুল কুরআন মানুষের দিকটা সোজাসুজি বলে: দুটি পথ দেখাতে আল্লাহ নবী ও কিতাব পাঠিয়েছেন, আর যেকোনো একটি বেছে নেওয়ার স্বাধীনতা মানুষকে দেওয়া হয়েছে। এই তাফসীরগুলোতে দ্বিতীয় ধাপ, মানে সত্যিই হিদায়াত পাওয়া, আসে কেবল কুরতুবীর উদ্ধৃত ওই মতে। ক্রিয়াটি নিজে বলে দেখিয়ে দেওয়ার কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Imma, and Imma",
          "bn": "ইম্মা, আর ইম্মা"
        },
        "p": [
          {
            "en": "The grammar of the second half divides the commentators. Ibn Kathir reads shakiran and kafuran as accusative because they are circumstantial (hal) to the pronoun him in hadaynahu; the implied sense, in his words, is that he is, in that, either wretched or happy. At-Tabari allows the same analysis as a second option. Imma and imma may carry one meaning, as in 9:106, either He will punish them or He will turn to them; the phrase is then a hal: We guided him to the way, either wretched or happy.",
            "bn": "আয়াতের দ্বিতীয় অংশের ব্যাকরণ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। ইবন কাসীরের মতে শাকিরান ও কাফূরান যবরযুক্ত, কারণ এ দুটি হাদাইনাহু-র 'তাকে' সর্বনামের অবস্থা (হাল) বোঝায়। তাঁর ভাষায় ভেতরের অর্থ হলো: সে এ অবস্থায় হয় দুর্ভাগা, নয় সৌভাগ্যবান। তাবারী দ্বিতীয় সম্ভাবনা হিসেবে একই বিশ্লেষণ মেনে নেন। তাঁর মতে দুটি ইম্মা একই অর্থ বহন করতে পারে, যেমন ৯:১০৬ আয়াতে: হয় তিনি তাদের শাস্তি দেবেন, নয়তো তাদের তওবা কবুল করবেন। তখন কথাটা হাল হয়ে দাঁড়ায়: আমি তাকে পথ দেখিয়েছি, হয় দুর্ভাগা অবস্থায়, নয় সৌভাগ্যবান অবস্থায়।"
          },
          {
            "en": "At-Tabari adds that some grammarians of Basra read it this way, comparing 19:75, either the punishment or the Hour, as though imma had not been said; they also allowed a fresh clause after it in the nominative. Readers of the abridged English Ibn Kathir will find This is his decree at this point. The Arabic word there is taqdiruhu, and in Ibn Kathir's sentence it introduces the implied wording of the construction he has just named; it is not a statement about decree.",
            "bn": "তাবারী জানান, বসরার কিছু ব্যাকরণবিদও এভাবে পড়তেন। তাঁরা তুলনা টানতেন ১৯:৭৫ আয়াতের সঙ্গে, যেখানে আছে: হয় শাস্তি, নয় কিয়ামত। সেখানে ইম্মা যেন উচ্চারিতই হয়নি, এমনভাবে বাক্যটি চলে। তাঁরা পরের অংশকে নতুন বাক্য ধরে পেশযুক্ত পড়ারও অনুমতি দিতেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি অনুবাদে এখানে লেখা আছে 'This is his decree', অর্থাৎ এটাই তার তাকদীর। কিন্তু আরবিতে শব্দটি তাকদীরুহু, আর ইবন কাসীরের বাক্যে সেটা সদ্য উল্লেখ করা ব্যাকরণগত গঠনের ভেতরের অর্থ খুলে দেয়। এটা তাকদীর বিষয়ে কোনো বক্তব্য নয়।"
          },
          {
            "en": "The other reading makes the sentence conditional. At-Tabari gives it first: We made clear to him the road to Paradise, if he gives thanks or disbelieves; on that sense imma and imma carry the meaning of a condition. Al-Qurtubi traces it to the grammarians of Kufa: the in of imma is conditional and the ma is added, and al-Farra' chose this. The Basrans did not allow it, he says, since a conditional in does not come before nouns unless a verb is understood after it. Al-Baghawi records the conditional reading under it is said.",
            "bn": "অন্য পাঠে বাক্যটি শর্তবাচক। তাবারী এটিকেই আগে আনেন: আমি তার কাছে জান্নাতের রাস্তা স্পষ্ট করেছি, সে শোকর করুক অথবা কুফরি করুক। এ অর্থে দুটি ইম্মা শর্তের মানে বহন করে। কুরতুবী এ মতকে কূফার ব্যাকরণবিদদের দিকে ফেরান। তাঁদের মতে ইম্মা-র 'ইন' শর্তবাচক, আর 'মা' অতিরিক্ত। ফাররা এ মতটিই বেছে নিয়েছিলেন। কুরতুবী বলেন, বসরীরা একে বৈধ মানেননি, কারণ শর্তের 'ইন' বিশেষ্যের আগে বসে না, যদি না তার পরে কোনো ক্রিয়া উহ্য থাকে। বাগাভীও 'বলা হয়' দিয়ে শর্তবাচক পাঠটি উল্লেখ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "One Person, or Two Parties",
          "bn": "একজন মানুষ, নাকি দুই দল"
        },
        "p": [
          {
            "en": "A second question sits beside the grammar: do the two words describe two possible states of the one guided person, or the two kinds into which people divide? The hal reading of Ibn Kathir and at-Tabari ties both words to the single him of the verse: the one shown the way is, in that, either wretched or happy. Al-Qurtubi keeps to the individual as well: whichever of the two he does, We have made it clear to him. Al-Baghawi glosses: either a believer, felicitous, or a disbeliever, wretched.",
            "bn": "ব্যাকরণের পাশেই আরেকটি প্রশ্ন আছে। শব্দ দুটি কি পথ-দেখানো একজন মানুষের সম্ভাব্য দুটি অবস্থার কথা বলে, নাকি মানুষ যে দুই ভাগে ভাগ হয়ে যায় তার কথা? ইবন কাসীর ও তাবারীর হাল-পাঠ দুটি শব্দকেই আয়াতের ওই এক 'তাকে'-র সঙ্গে বেঁধে দেয়: যাকে পথ দেখানো হয়েছে, সে এ অবস্থায় হয় দুর্ভাগা, নয় সৌভাগ্যবান। কুরতুবীও ব্যক্তির উপরই নজর রাখেন: দুটির যেটাই সে করুক, আমি তার কাছে তা স্পষ্ট করে দিয়েছি। বাগাভীর ব্যাখ্যা: হয় সৌভাগ্যবান মুমিন, নয় দুর্ভাগা কাফির।"
          },
          {
            "en": "As-Sa'di reads a division of humankind. After describing the two roads he says that people therefore split into two: a party grateful for Allah's blessing upon him, upholding the rights Allah laid on him; and a party ungrateful for that blessing, who was given blessings of religion and of the world, rejected them, disbelieved in his Lord, and took the road that leads to ruin. Ma'arif al-Qur'an likewise speaks of mankind falling into two groups. Both readings are held, and this article does not choose between them.",
            "bn": "সা'দী আয়াতে মানবজাতির বিভাজন দেখেন। দুই রাস্তার বর্ণনা দিয়ে তিনি বলেন, এর ফলে মানুষ দুই ভাগ হয়ে গেল। এক ভাগ নিজের উপর আল্লাহর নিয়ামতের শোকর আদায় করে, আল্লাহ তার উপর যে হকগুলো চাপিয়েছেন সেগুলো পালন করে। আরেক ভাগ সেই নিয়ামতের প্রতি অকৃতজ্ঞ। আল্লাহ তাকে দীন ও দুনিয়ার নিয়ামত দিয়েছিলেন, সে তা ফিরিয়ে দিয়েছে, নিজের রবের সঙ্গে কুফরি করেছে, আর ধ্বংসের রাস্তা ধরেছে। মাআরিফুল কুরআনও মানবজাতির দুই দলে ভাগ হওয়ার কথা বলে। দুটি পাঠই আলেমদের মধ্যে আছে, এ লেখা কোনোটিকে বেছে নেয় না।"
          },
          {
            "en": "Why is the counterpart of kafur here shakir, grateful, and not believer? The commentators answer by naming what the thanks or ingratitude is for. Qatadah, in at-Tabari, says: grateful for the blessings, or ungrateful for them. As-Sa'di's two parties are defined by Allah's blessing, accepted or rejected. Al-Muyassar joins the two vocabularies: either a believer who is grateful, or an ungrateful denier. Ma'arif al-Qur'an does the same: the first group appreciated Allah's bounties, gave thanks and believed; the other stayed ungrateful and disbelieved.",
            "bn": "এখানে কাফূরের বিপরীতে কেন শাকির, অর্থাৎ কৃতজ্ঞ, এল, মুমিন নয়? তাফসীরকারেরা এর জবাব দেন শোকর আর অকৃতজ্ঞতা কীসের জন্য, তা বলে দিয়ে। তাবারীতে কাতাদা বলেন: নিয়ামতের জন্য কৃতজ্ঞ, অথবা নিয়ামতের প্রতি অকৃতজ্ঞ। সা'দীর দুই দলের পরিচয়ও আল্লাহর নিয়ামত দিয়ে: কেউ তা গ্রহণ করে, কেউ ফিরিয়ে দেয়। মুয়াসসার দুই ধরনের শব্দকে এক করে: হয় কৃতজ্ঞ মুমিন, নয় অস্বীকারকারী অকৃতজ্ঞ। মাআরিফুল কুরআনও তা-ই করে। এক দল আল্লাহর নিয়ামতের কদর বুঝে শোকর করেছে ও ঈমান এনেছে, অন্য দল অকৃতজ্ঞ থেকে কুফরি করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Shakir, Not Shakur",
          "bn": "শাকির, শাকূর নয়"
        },
        "p": [
          {
            "en": "The two words are not built on the same pattern. Kafur is an intensive form; shakir is the plain participle, where an intensive shakur was available. Al-Qurtubi asks why the verse pairs shakir with kafur, and not shakur with kafur, though the latter pair would match in intensity. He relays an answer from al-Mawardi: the pairing denies intensity in thanks and affirms it in ingratitude, because the thanks owed to Allah can never be fully paid, so intensity is withheld from it, and it is not withheld from ingratitude.",
            "bn": "শব্দ দুটি একই ছাঁচে গড়া নয়। কাফূর আধিক্যবাচক রূপ। শাকির সাধারণ কর্তৃবাচক রূপ, যদিও আধিক্যবাচক শাকূর ব্যবহার করা যেত। কুরতুবী প্রশ্ন তোলেন: আয়াতে শাকিরের সঙ্গে কাফূর কেন, শাকূরের সঙ্গে কাফূর কেন নয়, যখন দ্বিতীয় জোড়াটি তীব্রতায় সমান হতো? তিনি মাওয়ারদীর একটি জবাব উদ্ধৃত করেন। এই জোড়া শোকরের বেলায় আধিক্য নাকচ করে আর কুফরের বেলায় তা সাব্যস্ত করে। কারণ আল্লাহর শোকর কখনো পুরোপুরি আদায় করা যায় না, তাই শোকর থেকে আধিক্য সরিয়ে নেওয়া হয়েছে। কুফর থেকে তা সরানো হয়নি।"
          },
          {
            "en": "Al-Mawardi's last clause, as al-Qurtubi gives it, turns on proportion. A person's thanks is little, measured against the many blessings upon him; and his ingratitude is much, even when it is little, measured against the kindness shown to him. On that account a small ingratitude already earns the intensive word, while the fullest thanks a person can offer stays short of it. In the tafsirs fetched for this verse it is the only explanation of the contrast, and al-Qurtubi presents it as al-Mawardi's.",
            "bn": "কুরতুবীর বর্ণনায় মাওয়ারদীর শেষ কথাটি অনুপাত নিয়ে। মানুষের উপর নিয়ামত এত বেশি যে তার তুলনায় তার শোকর সামান্য। আর তার প্রতি যে অনুগ্রহ করা হয়েছে, তার তুলনায় তার কুফর সামান্য হলেও অনেক। এ হিসাবে ছোট্ট একটু অকৃতজ্ঞতাও আধিক্যবাচক শব্দের যোগ্য হয়ে যায়, অথচ মানুষ যত পূর্ণ শোকরই করুক, তা ওই শব্দ পর্যন্ত পৌঁছায় না। এ আয়াতের জন্য সংগৃহীত তাফসীরগুলোতে এই বৈপরীত্যের এটাই একমাত্র ব্যাখ্যা, আর কুরতুবী একে মাওয়ারদীর কথা হিসেবেই পেশ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Morning, a Sale",
          "bn": "প্রতি ভোরে বেচাকেনা"
        },
        "p": [
          {
            "en": "Ibn Kathir sets one hadith from the six collections beside his gloss either wretched or happy. Muslim records it in his Sahih from Abu Malik al-Ash'ari (RA). Ibn Kathir quotes only its last sentence, with the two outcomes in reverse order; Muslim's own wording is longer and is given here whole. He also cites a narration from Jabir that ends with the words of this verse, and two from Ahmad's Musnad; none is confirmed here, so they are left aside.",
            "bn": "ছয়টি হাদীসগ্রন্থের একটি থেকে ইবন কাসীর একটি হাদীস আনেন, তাঁর 'হয় দুর্ভাগা, নয় সৌভাগ্যবান' ব্যাখ্যার পাশে। ইমাম মুসলিম তাঁর সহীহ গ্রন্থে আবু মালিক আশআরী (রাঃ) থেকে এটি বর্ণনা করেছেন। ইবন কাসীর শুধু শেষ বাক্যটি উদ্ধৃত করেন, তাও দুই পরিণতির ক্রম উল্টে। সহীহ মুসলিমের নিজস্ব ভাষ্য আরও দীর্ঘ, এখানে তা পুরোটাই দেওয়া হলো। তিনি জাবির (রাঃ) থেকে এমন একটি বর্ণনাও আনেন, যা শেষ হয় এই আয়াতের শব্দ দিয়েই, আর ইমাম আহমাদের মুসনাদ থেকে আনেন দুটি। এগুলোর কোনোটিই এখানে যাচাই করা হয়নি, তাই বাদ রাখা হলো।"
          },
          {
            "en": "The Messenger of Allah (ﷺ) said: Cleanliness is half of faith and al-Hamdu Lillah (all praise and gratitude is for Allah alone) fills the scale, and Subhan Allah (Glory be to Allah) and al-Hamdu Lillah fill up what is between the heavens and the earth, and prayer is a light, and charity is proof (of one's faith) and endurance is a brightness and the Holy Qur'an is a proof on your behalf or against you. All men go out early in the morning and sell themselves, thereby setting themselves free or destroying themselves. (Sahih Muslim 223)",
            "bn": "রাসূলুল্লাহ ﷺ বলেছেন: পবিত্রতা ঈমানের অর্ধেক। আলহামদুলিল্লাহ (সব প্রশংসা আল্লাহর) মীযান ভরে দেয়। সুবহানাল্লাহ (আল্লাহ পবিত্র) ও আলহামদুলিল্লাহ আসমান ও জমিনের মাঝখানের সবকিছু ভরে দেয়। নামাজ আলো, সদকা (একজন মানুষের ঈমানের) প্রমাণ, সবর দীপ্তি, আর কুরআন তোমার পক্ষে অথবা তোমার বিপক্ষে দলিল। প্রত্যেক মানুষ ভোরে বেরিয়ে পড়ে এবং নিজেকে বিক্রি করে। তারপর হয় নিজেকে মুক্ত করে, নয়তো ধ্বংস করে। (সহীহ মুসলিম, হাদীস ২২৩)"
          },
          {
            "en": "The surah moves on at once. 76:4 names what is prepared for the disbelievers: chains, shackles and a blaze. As-Sa'di says the verses now give the state of the two parties at the recompense, and Ma'arif al-Qur'an notes that the disbelievers' end comes first. From 76:5 the righteous drink from a cup mixed with kafur; 76:12 to 76:22, and 76:25, are treated separately. The verse describes a condemned group by what it chose, and it licenses nothing against any living person or community.",
            "bn": "সূরাটি সঙ্গে সঙ্গে সামনে এগোয়। ৭৬:৪ আয়াত জানায় কাফিরদের জন্য কী প্রস্তুত: শেকল, বেড়ি আর জ্বলন্ত আগুন। সা'দী বলেন, এখান থেকে প্রতিদানের সময়ে দুই দলের অবস্থার কথা আসছে। মাআরিফুল কুরআন লক্ষ করে, আগে আসে কাফিরদের পরিণতি। ৭৬:৫ থেকে নেককারেরা কর্পুর মেশানো পানপাত্র থেকে পান করে। ৭৬:১২ থেকে ৭৬:২২ এবং ৭৬:২৫ নিয়ে আলাদা লেখা আছে। আয়াতটি একটি নিন্দিত দলকে বর্ণনা করে তাদের নিজেদের বেছে নেওয়া পথ দিয়ে। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না।"
          }
        ]
      }
    ]
  },
  "76:5": {
    "sections": [
      {
        "h": {
          "en": "From the Blaze to the Cup",
          "bn": "আগুনের পরেই পেয়ালা"
        },
        "p": [
          {
            "en": "Inna al-abrara yashrabuna min ka'sin kana mizajuha kafura: indeed the righteous will drink from a cup whose mixture is kafur. The verse stands directly after 76:4, where Allah says He has prepared chains, shackles and a blaze for the disbelievers. Ibn Kathir marks the hinge in a single clause: having mentioned the blaze He prepared for those wretched ones, He then said this. 76:3 had already named the two outcomes, grateful or ungrateful. Count the verses that follow: one for the first end, and from here to 76:22 for the second.",
            "bn": "ইন্নাল আবরারা ইয়াশরাবূনা মিন কা'সিন কানা মিযাজুহা কাফূরা: নিশ্চয়ই নেককারেরা এমন পেয়ালা থেকে পান করবে, যার মিশ্রণ কাফূর। আয়াতটি এসেছে ঠিক ৭৬:৪-এর পরে। সেখানে আল্লাহ বলছেন, কাফিরদের জন্য তিনি শেকল, বেড়ি আর জ্বলন্ত আগুন প্রস্তুত রেখেছেন। ইবন কাসীর এক বাক্যে মোড়টা দেখিয়ে দেন: ওই হতভাগাদের জন্য প্রস্তুত আগুনের কথা বলার পর তিনি এ কথা বললেন। ৭৬:৩ আগেই দুই পরিণতির নাম বলে দিয়েছে: কৃতজ্ঞ, নয়তো অকৃতজ্ঞ। এবার আয়াত গুনে দেখুন। প্রথম পরিণতির জন্য একটি আয়াত, আর দ্বিতীয়টির জন্য এখান থেকে ৭৬:২২ পর্যন্ত।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the order the same way: after the punishment of the disbelievers come great bounties for the believers and the righteous, and among them drinks are mentioned first. The Muyassar gives the plain sense: the people of obedience and sincerity, who render Allah His due, will drink on the Day of Resurrection from a cup of wine mixed with the finest of fragrances, the water of kafur. 76:4 states what awaits those who reject; it names no living person and licenses nothing against anyone.",
            "bn": "মাআরিফুল কুরআনও ক্রমটা এভাবেই পড়ে। কাফিরদের শাস্তির পর আসে মুমিন ও নেককারদের জন্য বিশাল নিয়ামতের কথা, আর তার মধ্যে প্রথমে পানীয়। মুয়াসসার সোজা অর্থটা দেয়: আনুগত্য ও ইখলাসের লোকেরা, যারা আল্লাহর হক আদায় করে, কিয়ামতের দিন এমন পেয়ালা থেকে পান করবে, যাতে আছে শ্রেষ্ঠ সুগন্ধে মেশানো শরাব, আর সেই সুগন্ধ কাফূরের পানি। ৭৬:৪ জানায় অস্বীকারকারীদের জন্য কী অপেক্ষা করছে। কোনো জীবিত মানুষের নাম সেখানে নেই, কারও বিরুদ্ধে কিছু করার অনুমতিও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Abrar, Defined by Obedience",
          "bn": "আবরার: আনুগত্যে যাদের পরিচয়"
        },
        "p": [
          {
            "en": "Who are al-abrar? At-Tabari answers with deeds: those who were dutiful through obeying their Lord, in performing what He made obligatory and avoiding disobedience to Him. Al-Baghawi says they are the believers truthful in their faith and obedient to their Lord. He also gives the grammar. The singular may be baarr, on the pattern of shahid and ashhad or nasir and ansar, or barr, on the pattern of nahr and anhar. Either way the word names a settled quality.",
            "bn": "আবরার কারা? তাবারী উত্তর দেন আমল দিয়ে: যারা রবের আনুগত্যের মাধ্যমে সদাচারী হয়েছে, তাঁর ফরজগুলো আদায় করেছে আর তাঁর নাফরমানি থেকে দূরে থেকেছে। বাগাভী বলেন, তারা সেই মুমিনেরা, যারা ঈমানে সত্যবাদী আর রবের অনুগত। ব্যাকরণটাও তিনি জানান। একবচন হতে পারে আলিফসহ 'বার্‌র', যেমন শাহিদ থেকে আশহাদ বা নাসির থেকে আনসার। আবার হতে পারে আলিফ ছাড়া 'বার্‌র', যেমন নাহর থেকে আনহার। যে রূপেই হোক, শব্দটা এক স্থায়ী গুণের নাম।"
          },
          {
            "en": "Al-Qurtubi opens with a short definition: the abrar are the people of truthfulness, and the barr is the one who carries out Allah's command. He adds, as something said, that the barr is the one who affirms Allah's oneness. Then he quotes al-Jawhari's Sihah: one says that a man yabirru his Creator, meaning he obeys Him, and that a mother is barra to her child. One root holds both duty to the Creator and a mother's tenderness.",
            "bn": "কুরতুবী শুরু করেন ছোট্ট এক সংজ্ঞা দিয়ে: আবরার হলো সত্যবাদীরা, আর বার্‌র সেই ব্যক্তি, যে আল্লাহর হুকুম পালন করে। তিনি 'বলা হয়' বলে আরেকটি মতও আনেন: বার্‌র মানে তাওহীদে বিশ্বাসী। তারপর জাওহারীর সিহাহ থেকে উদ্ধৃত করেন। আরবরা বলে, অমুক তার স্রষ্টার প্রতি 'ইয়াবিররু', মানে সে তাঁর আনুগত্য করে। আবার বলে, মা তার সন্তানের প্রতি 'বার্‌রা', মানে স্নেহময়ী। একই ধাতুতে ধরা আছে স্রষ্টার প্রতি দায়িত্ব আর মায়ের মমতা।"
          },
          {
            "en": "Qatadah, in al-Qurtubi's record, ties the name to what comes next: the abrar are those who render Allah His due and fulfil the vow. That second phrase is the wording of 76:7, which begins the surah's account of what these people did. Those deeds have their own verses and are not retold here; this one gives them only a name and a drink.",
            "bn": "কুরতুবীর বর্ণনায় কাতাদা সামনের কথার সঙ্গে এর যোগ দেখিয়ে দেন: আবরার তারা, যারা আল্লাহর হক আদায় করে আর মানত পূর্ণ করে। শেষ অংশটা হুবহু ৭৬:৭-এর ভাষা। সেখান থেকেই সূরা শুরু করে এই মানুষগুলোর কাজের বিবরণ। সেসব আমলের জন্য আলাদা আয়াত আছে, এখানে তার পুনরাবৃত্তি নেই। এ আয়াত তাদের দেয় শুধু একটা নাম আর একটা পানীয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Even an Ant Harmed",
          "bn": "একটা পিঁপড়াও কষ্ট পায় না"
        },
        "p": [
          {
            "en": "As-Sa'di describes al-abrar from the inside out. They are those whose hearts became barr through what filled them: love of Allah, knowledge of Him, and beautiful character. Because the hearts were so, the limbs became so as well, and they put them to work in deeds of birr. In his definition goodness is first a condition of the heart, and the visible acts are what that condition produces.",
            "bn": "সা'দী আবরারের বর্ণনা দেন ভেতর থেকে বাইরের দিকে। তারা সেই মানুষ, যাদের অন্তর নেককার হয়েছে ভেতরে যা ছিল তার কারণে: আল্লাহর ভালোবাসা, তাঁর পরিচয়, আর সুন্দর চরিত্র। অন্তর এমন হওয়ায় অঙ্গপ্রত্যঙ্গও নেককার হয়েছে, আর তারা সেগুলোকে খাটিয়েছে নেক আমলে। তাঁর সংজ্ঞায় ভালো হওয়া আগে অন্তরের অবস্থা। চোখে পড়া আমলগুলো সেই অবস্থারই ফল।"
          },
          {
            "en": "Al-Qurtubi gathers sayings that push the word outward. Al-Hasan said: the barr is the one who does not harm even the dharr, the smallest ants. Al-Qurtubi also relays two reports ascribed to the Prophet ﷺ on why they are called abrar, one of them through Ibn 'Umar (RA). He names no collector and no chain for either report, so their wording is not quoted, and this page sets them aside and keeps al-Hasan's line as al-Hasan's own.",
            "bn": "কুরতুবী এমন কিছু উক্তি জড়ো করেন, যা শব্দটাকে বাইরের দিকে ছড়িয়ে দেয়। হাসান বলেছেন: বার্‌র সেই ব্যক্তি, যে ক্ষুদ্রতম পিঁপড়াকেও কষ্ট দেয় না। কেন তাদের আবরার বলা হয়, সে বিষয়ে কুরতুবী নবী ﷺ-এর নামে দুটি বর্ণনাও আনেন, তার একটি ইবন উমর (রাঃ) থেকে। দুটো বর্ণনার কোনোটির সংগ্রাহক বা সনদ তিনি উল্লেখ করেননি। তাই সেগুলোর শব্দ উদ্ধৃত করা হলো না, এ লেখা সেগুলোর উপর ভর করে না। হাসানের কথাটা থাকছে হাসানেরই কথা হিসেবে।"
          },
          {
            "en": "None of the tafsirs read for this verse attaches a sound hadith to 76:5 itself. A general narration on the same word is in Sahih Muslim, not tied to this verse by any of them. An-Nawwas ibn Sam'an said he asked the Messenger of Allah ﷺ about birr and sin, and he said: \"Birr is good character, and sin is what rankles in your chest and you dislike that people should come to know of it\" (Muslim 2553). It sits close to as-Sa'di's emphasis on character.",
            "bn": "এ আয়াতের জন্য পড়া তাফসীরগুলোর কোনোটিই ৭৬:৫-এর সঙ্গে সরাসরি কোনো সহীহ হাদীস যুক্ত করেনি। একই শব্দ নিয়ে একটি সাধারণ বর্ণনা আছে সহীহ মুসলিমে, যা তাঁদের কেউ এ আয়াতের সঙ্গে জোড়েননি। নাওয়াস ইবন সাম'আন (রাঃ) বলেন, তিনি রাসূলুল্লাহ ﷺ-কে নেকি ও গুনাহ সম্পর্কে জিজ্ঞেস করেছিলেন। তিনি বললেন: \"নেকি হলো সুন্দর চরিত্র। আর গুনাহ হলো তা, যা তোমার বুকে খচখচ করে এবং মানুষ তা জেনে ফেলুক, তা তুমি অপছন্দ করো\" (মুসলিম ২৫৫৩)। চরিত্রের উপর সা'দীর জোরের সঙ্গে এ হাদীসের মিল স্পষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ka's Is Never Empty",
          "bn": "কা'স কখনো খালি নয়"
        },
        "p": [
          {
            "en": "Yashrabuna min ka'sin: they drink from a cup. At-Tabari defines a ka's as any vessel that has drink in it. Al-Qurtubi tightens the definition: in the language, a ka's is a vessel containing drink, and when there is no drink in it, it is not called a ka's. He cites a line from 'Amr ibn Kulthum to show the usage. The word itself, then, already holds something to drink. Ibn 'Abbas, in al-Qurtubi's report, said that what is meant is wine.",
            "bn": "ইয়াশরাবূনা মিন কা'স: তারা পেয়ালা থেকে পান করবে। তাবারীর সংজ্ঞায় কা'স হলো এমন যেকোনো পাত্র, যাতে পানীয় আছে। কুরতুবী সংজ্ঞাটা আরও আঁটসাঁট করেন। ভাষার দিক থেকে কা'স সেই পাত্র, যাতে পানীয় আছে। পানীয় না থাকলে তাকে কা'স বলা হয় না। প্রয়োগ দেখাতে তিনি আমর ইবন কুলসূমের একটি পঙক্তি আনেন। মানে শব্দটার ভেতরেই পান করার জিনিস ধরা আছে। কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেছেন, এখানে উদ্দেশ্য শরাব।"
          },
          {
            "en": "As-Sa'di reads it the same way: a delicious drink of wine that has been mixed with kafur, blended with it to cool it and break its sharpness. Kana mizajuha: its mixture was. Al-Qurtubi glosses mizaj as what is blended and mingled into a drink, citing a line of Hassan in which a drink's mixture is honey and water. He also treats kana here as an added word, so the sense is simply a cup whose mixture is kafur.",
            "bn": "সা'দীও তা-ই বলেন: শরাবের এক সুস্বাদু পানীয়, যাতে কাফূর মেশানো হয়েছে, যেন তা ঠান্ডা হয় আর তার ঝাঁঝ ভাঙে। কানা মিযাজুহা: তার মিশ্রণ ছিল। কুরতুবী মিযাজের ব্যাখ্যা দেন, পানীয়ের সঙ্গে যা মেশানো ও গুলিয়ে দেওয়া হয়। প্রমাণ হিসেবে হাসসানের একটি পঙক্তি আনেন, যেখানে এক পানীয়ের মিশ্রণ মধু আর পানি। তাঁর মতে এখানে 'কানা' অতিরিক্ত শব্দ। অর্থ দাঁড়ায় সোজা: এমন পেয়ালা, যার মিশ্রণ কাফূর।"
          },
          {
            "en": "'Ikrimah read the word differently. Al-Qurtubi and al-Baghawi both record him saying that mizajuha means its taste. On his reading the verse speaks less of something poured in than of how the drink tastes. Neither al-Qurtubi nor al-Baghawi chooses between blend and flavour; both list the two, and either way the drink's character is kafur.",
            "bn": "ইকরিমা শব্দটা পড়েছেন অন্যভাবে। কুরতুবী ও বাগাভী দুজনেই তাঁর উক্তি এনেছেন: মিযাজুহা মানে তার স্বাদ। তাঁর পাঠে আয়াতের কথা ঢেলে দেওয়া কোনো জিনিস নিয়ে নয়, পানীয়ের স্বাদ নিয়ে। মিশ্রণ নাকি স্বাদ, কুরতুবী বা বাগাভী কেউই এর একটা বেছে নেননি, দুজনেই দুটো মত রেখেছেন। যেটাই হোক, পানীয়ের বৈশিষ্ট্য কাফূর।"
          }
        ]
      },
      {
        "h": {
          "en": "Substance, Simile or Spring",
          "bn": "বস্তু, উপমা, নাকি ঝরনা"
        },
        "p": [
          {
            "en": "What is the kafur? The first reading takes it as the substance known by that name, camphor. Ibn Kathir says its properties are known, coolness and a good scent, together with the delight that is added to it in Paradise. At-Tabari explains the verse as a drink like kafur in the pleasantness of its scent, and states that the general body of interpreters took kafur as a description of the drink. He cites Mujahid, who said it is mixed, and Qatadah: a people for whom it is mixed with kafur and sealed with musk.",
            "bn": "কাফূর আসলে কী? প্রথম পাঠ একে ধরে ওই নামের পরিচিত বস্তু হিসেবে, অর্থাৎ কর্পূর। ইবন কাসীর বলেন, এর গুণ সবার জানা, শীতলতা আর সুগন্ধ। জান্নাতে এর সঙ্গে যুক্ত হবে বাড়তি স্বাদ। তাবারী আয়াতের ব্যাখ্যা দেন এমন পানীয় হিসেবে, যা সুবাসে কাফূরের মতো। তিনি জানান, তাফসীরকারদের অধিকাংশ কাফূরকে পানীয়ের বিশেষণ হিসেবে নিয়েছেন। মুজাহিদের কথা আনেন: তা মেশানো হবে। কাতাদার কথাও আনেন: এমন এক দল, যাদের জন্য তা কাফূরে মেশানো হবে আর মুশক দিয়ে মুখ বন্ধ করা হবে।"
          },
          {
            "en": "The second reading makes Kafur a name. Al-Qurtubi reports Ibn 'Abbas: it is the name of a spring of water in Paradise, called the spring of Kafur, and the water of that spring is blended into the drink. Al-Baghawi gives the same from 'Ata' and al-Kalbi. At-Tabari mentions it with the words it has been said, and al-Qurtubi, on 76:6, records al-Farra' holding it. Ma'arif al-Qur'an also reports some commentators taking it as a fountain.",
            "bn": "দ্বিতীয় পাঠে কাফূর একটা নাম। কুরতুবী ইবন আব্বাস (রাঃ)-এর কথা আনেন: এটি জান্নাতের এক পানির ঝরনার নাম, যাকে বলা হয় কাফূরের ঝরনা। সেই ঝরনার পানি পানীয়ের সঙ্গে মেশানো হবে। বাগাভী একই কথা আনেন আতা ও কালবী থেকে। তাবারী এটি উল্লেখ করেন 'বলা হয়েছে' বলে। আর ৭৬:৬-এর আলোচনায় কুরতুবী জানান, ফাররাও এ মত পোষণ করতেন। মাআরিফুল কুরআনও জানায়, কিছু তাফসীরকার একে ঝরনা ধরেছেন।"
          },
          {
            "en": "A third reading makes it a likeness. Al-Baghawi gives it from the scholars of meanings: like kafur in its whiteness, its good scent and its coolness, because kafur is not drunk, just as hatta idha ja'alahu naran in 18:96 means until he made it like fire. Al-Qurtubi carries the same under it was said, with another view: the kafur is in its scent, not its taste. The commentators keep these side by side, and so does this page.",
            "bn": "তৃতীয় পাঠে এটি উপমা। বাগাভী এ মত আনেন অর্থবিদ আলেমদের থেকে: শুভ্রতায়, সুগন্ধে আর শীতলতায় কাফূরের মতো, কারণ কাফূর পান করার জিনিস নয়। যেমন ১৮:৯৬-এ 'হাত্তা ইযা জা'আলাহূ নারা' মানে, যতক্ষণ না তিনি তাকে আগুনের মতো করলেন। কুরতুবীও 'বলা হয়' বলে এ মত আনেন, সঙ্গে আরেকটি: কাফূর থাকবে এর ঘ্রাণে, স্বাদে নয়। তাফসীরকারেরা মতগুলো পাশাপাশি রেখেছেন, এ লেখাও তা-ই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Our Word for His Gift",
          "bn": "আমাদের শব্দে তাঁর দান"
        },
        "p": [
          {
            "en": "Whichever reading one takes, several commentators draw a limit. Al-Qurtubi records Muqatil: it is not the kafur of this world, but Allah named what is with Him by the names of what is with you, so that hearts might find their way to it. The word is borrowed because it is the one we have; it points towards the thing without describing it in full.",
            "bn": "যে পাঠই নেওয়া হোক, একাধিক তাফসীরকার একটা সীমা টেনে দেন। কুরতুবী মুকাতিলের কথা আনেন: এটা দুনিয়ার কাফূর নয়। বরং আল্লাহ তাঁর কাছে যা আছে, তার নাম দিয়েছেন তোমাদের কাছে যা আছে তার নামে, যাতে অন্তর সেদিকে পথ পায়। শব্দটা ধার করা, কারণ আমাদের কাছে এ শব্দটাই আছে। তা জিনিসটার দিকে ইশারা করে, পূর্ণ বিবরণ দেয় না।"
          },
          {
            "en": "As-Sa'di turns the same limit into a rule. This kafur, at the height of delight, is free of everything that spoils or troubles, the defects found in the kafur of this world. Then he generalises: whatever defect exists in this world in the things Allah names as being in Paradise will be absent in the hereafter. He gives examples from the Qur'an, among them the thornless lote trees and the talh trees layered with fruit in 56:28 and 56:29, and 43:71, which says Paradise holds whatever souls desire and eyes delight in.",
            "bn": "সা'দী একই সীমাকে একটা নিয়মে রূপ দেন। চরম স্বাদের এই কাফূর সব রকম কলুষ আর বিরক্তিকর জিনিস থেকে মুক্ত, যা দুনিয়ার কাফূরে পাওয়া যায়। তারপর তিনি কথাটা সাধারণ করে বলেন: আল্লাহ জান্নাতে যেসব জিনিসের নাম নিয়েছেন, দুনিয়াতে সেগুলোর যে ত্রুটি আছে, আখিরাতে তা থাকবে না। কুরআন থেকে তিনি উদাহরণ দেন। তার মধ্যে আছে ৫৬:২৮ ও ৫৬:২৯-এর কাঁটাহীন কুলগাছ আর থরে থরে ফলে ভরা তালহ গাছ, আর ৪৩:৭১, যেখানে বলা হয়েছে জান্নাতে থাকবে মন যা চায় আর চোখ যাতে তৃপ্ত হয়।"
          },
          {
            "en": "Ma'arif al-Qur'an makes a related point in plain terms: if camphor is taken in its popular sense, that does not mean the camphor of Paradise is the same as the camphor of this world, since the worldly kind is not palatable. This page goes no further than these texts. The verse gives a name and the commentators give its known qualities, coolness, fragrance and whiteness; what the drink truly is, and how it is mixed, is left with Allah.",
            "bn": "মাআরিফুল কুরআন একই রকম কথা বলে সহজ ভাষায়। কর্পূরকে প্রচলিত অর্থে নিলেও তার মানে এই নয় যে জান্নাতের কর্পূর আর দুনিয়ার কর্পূর এক, কারণ দুনিয়ার কর্পূর খাওয়ার উপযোগী নয়। এ লেখা এই বক্তব্যগুলোর বাইরে যাচ্ছে না। আয়াত একটা নাম দিয়েছে, তাফসীরকারেরা দিয়েছেন তার পরিচিত গুণ: শীতলতা, সুবাস, শুভ্রতা। পানীয়টা আসলে কী, কীভাবেই বা মেশানো হবে, সেই জ্ঞান আল্লাহর কাছেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Spring Led Where They Will",
          "bn": "ইচ্ছেমতো বইয়ে নেওয়া ঝরনা"
        },
        "p": [
          {
            "en": "The sentence does not end at kafur. 76:6 continues: 'aynan yashrabu biha 'ibadu llahi yufajjirunaha tafjira, a spring from which Allah's servants drink, making it gush forth abundantly. At-Tabari shows how the reading of kafur shapes the grammar. If Kafur is a spring, the word 'aynan explains it. If kafur describes the drink, 'aynan states where the mixture comes from. It may also be the object of they drink, or a word of praise. Al-Qurtubi gives az-Zajjaj's reading, from a spring.",
            "bn": "বাক্যটা কাফূরে এসে থামে না। ৭৬:৬ বলে: আইনান ইয়াশরাবু বিহা ইবাদুল্লাহি ইউফাজ্জিরূনাহা তাফজীরা, এমন এক ঝরনা, যা থেকে আল্লাহর বান্দারা পান করবে, আর তারা তা ইচ্ছেমতো প্রবাহিত করবে। কাফূরের পাঠ কীভাবে ব্যাকরণ বদলে দেয়, তাবারী তা দেখান। কাফূর যদি ঝরনার নাম হয়, তবে 'আইনান' শব্দটা তার ব্যাখ্যা। কাফূর যদি পানীয়ের বিশেষণ হয়, তবে 'আইনান' জানায় মিশ্রণটা কোথা থেকে আসে। এটি 'তারা পান করবে' ক্রিয়ার কর্মও হতে পারে, আবার প্রশংসাসূচক শব্দও। কুরতুবী আনেন যাজ্জাজের পাঠ: ঝরনা থেকে।"
          },
          {
            "en": "Yashrabu biha: literally, they drink with it. Al-Farra', quoted by at-Tabari and al-Qurtubi, says drinking with it and drinking it mean the same, carrying the sense of being quenched by it. Ibn Kathir says the verb takes on the meaning of quenching, which is why it is joined to bi. Who are 'ibad Allah? Al-Baghawi reports Ibn 'Abbas: the friends of Allah. At-Tabari: the servants of Allah whom He admits into Paradise. Ibn Kathir: the near ones among Allah's servants, who drink this spring pure and unmixed, while for the abrar it is mixed.",
            "bn": "ইয়াশরাবু বিহা: শাব্দিক অর্থে, তা দিয়ে পান করে। তাবারী ও কুরতুবী ফাররার কথা আনেন: 'তা দিয়ে পান করা' আর 'তা পান করা' একই অর্থ, সঙ্গে আছে তৃষ্ণা মেটার ভাব। ইবন কাসীর বলেন, ক্রিয়াটি তৃপ্ত হওয়ার অর্থ ধারণ করেছে, তাই 'বি' দিয়ে যুক্ত হয়েছে। ইবাদুল্লাহ, আল্লাহর বান্দা কারা? বাগাভীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন: আল্লাহর ওলিরা। তাবারী বলেন: আল্লাহর সেই বান্দারা, যাদের তিনি জান্নাতে প্রবেশ করাবেন। ইবন কাসীরের মতে তারা আল্লাহর নৈকট্যপ্রাপ্ত বান্দা। তারা এই ঝরনা খাঁটি অবস্থায় পান করবে, কিছু না মিশিয়ে, আর আবরারদের জন্য তা মেশানো হবে।"
          },
          {
            "en": "Yufajjirunaha tafjira: they make it gush. Mujahid, in at-Tabari and Ibn Kathir, said they lead it wherever they wish. Qatadah said its water is obedient to them, and Sufyan said they turn it wherever they want. At-Tabari adds: from their dwellings and their palaces, as they please. As-Sa'di draws a further point from the word spring: they need not fear the cup running out, because it has a source that does not stop, ever overflowing, and they may turn it to gardens or between their homes.",
            "bn": "ইউফাজ্জিরূনাহা তাফজীরা: তারা তা উৎসারিত করবে। তাবারী ও ইবন কাসীরের বর্ণনায় মুজাহিদ বলেন, তারা যেখানে চাইবে সেখানে তা টেনে নিয়ে যাবে। কাতাদা বলেন, তার পানি তাদের অনুগত। সুফইয়ান বলেন, তারা যেদিকে চাইবে সেদিকে তা ঘুরিয়ে দেবে। তাবারী যোগ করেন: নিজেদের বাসস্থান আর প্রাসাদ থেকে, যেমন খুশি। 'ঝরনা' শব্দ থেকে সা'দী আরেকটা কথা বের করেন। পেয়ালা ফুরিয়ে যাওয়ার ভয় তাদের নেই, কারণ এর উৎস কখনো থামে না, সারাক্ষণ উপচে পড়ছে। তারা চাইলে তা বাগানের দিকে বইয়ে দেবে, কিংবা ঘরবাড়ির মাঝখান দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Coolness, and a Name to Earn",
          "bn": "শীতলতা, আর অর্জনের মতো এক নাম"
        },
        "p": [
          {
            "en": "Two voices set kafur beside ginger. Ibn Kathir quotes al-Hasan: the coolness of kafur within the pleasantness of zanjabil, and then brings in 76:6. Ibn Kaysan, in al-Qurtubi and al-Baghawi, said the drink is perfumed with musk, kafur and ginger. Ginger is named in the surah at 76:17, and the article on 76:12 to 76:22 takes up what is said there. Al-Qurtubi also relays a report on four springs of Paradise from al-Hakim at-Tirmidhi, without a grading; nothing here rests on it.",
            "bn": "দুজন আলেম কাফূরকে আদার পাশে রেখেছেন। ইবন কাসীর হাসানের কথা আনেন: আদার মনোরম স্বাদের ভেতরে কাফূরের শীতলতা। তারপর তিনি ৭৬:৬ উল্লেখ করেন। কুরতুবী ও বাগাভীর বর্ণনায় ইবন কাইসান বলেন, পানীয়টি সুবাসিত হবে মুশক, কাফূর আর আদা দিয়ে। এ সূরায় আদার নাম এসেছে ৭৬:১৭ আয়াতে। সেখানে কী বলা হয়েছে, ৭৬:১২ থেকে ৭৬:২২-এর লেখায় তার আলোচনা আছে। কুরতুবী হাকীম তিরমিযী থেকে জান্নাতের চারটি ঝরনা নিয়ে একটি বর্ণনাও আনেন, কোনো মান উল্লেখ ছাড়া। এ লেখার কিছুই সেটির উপর দাঁড়িয়ে নেই।"
          },
          {
            "en": "What follows is this page's own reflection. The verse before speaks of fire; this one answers with coolness, and gives the people a name before it gives them anything else. In these glosses al-abrar is not a title handed out at the gate. In at-Tabari's it is earned by obedience, in as-Sa'di's it grows from the heart outward, and in al-Hasan's line it reaches as far as an ant. The drink cannot be pictured. The name can be checked, today, against how one treats the Lord and the people nearest at hand.",
            "bn": "এর পরের কথাগুলো এ লেখার নিজস্ব ভাবনা। আগের আয়াত আগুনের কথা বলে, এ আয়াত জবাব দেয় শীতলতা দিয়ে। আর কিছু দেওয়ার আগে মানুষগুলোকে একটা নাম দেয়। এসব ব্যাখ্যায় আবরার এমন কোনো উপাধি নয়, যা দরজায় পৌঁছে হাতে তুলে দেওয়া হয়। তাবারীর ব্যাখ্যায় তা অর্জিত হয় আনুগত্যে। সা'দীর ব্যাখ্যায় তা বেড়ে ওঠে অন্তর থেকে বাইরের দিকে। হাসানের কথায় তা পৌঁছে যায় একটা পিঁপড়া পর্যন্ত। পানীয়টার ছবি আঁকা যায় না। কিন্তু নামটা আজই যাচাই করা যায়: রবের সঙ্গে আর হাতের কাছের মানুষদের সঙ্গে আমি কেমন আচরণ করি।"
          }
        ]
      }
    ]
  },
  "76:8": {
    "sections": [
      {
        "h": {
          "en": "Craving It, Then Giving It",
          "bn": "নিজের মন চায়, তবু দিয়ে দেয়"
        },
        "p": [
          {
            "en": "Wa-yut'imuna at-ta'ama 'ala hubbihi: and they give food despite their love for it. The verse continues the portrait of al-abrar, the righteous, which began at 76:5 and turned to their deeds at 76:7 with vows kept and a Day feared. At-Tabari reads the phrase plainly: these righteous ones fed others with food they loved and craved. He says the people of interpretation said the same, and gives Mujahid's words, 'while they desire it', and the answer of Sulayman ibn Qays, father of Muqatil ibn Sulayman: 'out of their love for the food'.",
            "bn": "ওয়া ইউত‘ইমূনাত তা‘আমা ‘আলা হুব্বিহী: আর তারা খাবারের প্রতি ভালোবাসা থাকা সত্ত্বেও খাবার খাওয়ায়। ৭৬:৫ আয়াত থেকে আল-আবরার, অর্থাৎ নেককারদের যে ছবি আঁকা শুরু হয়েছিল, ৭৬:৭ আয়াতে তা তাদের আমলের দিকে ঘুরেছে: তারা মানত পূরণ করে, সেই দিনকে ভয় করে। এ আয়াত সেই ছবিটাই এগিয়ে নেয়। তাবারী কথাটা সরলভাবে পড়েন: এই নেককাররা অন্যকে এমন খাবার খাওয়াত, যা তারা নিজেরাই ভালোবাসত, খেতে চাইত। তিনি জানান, তাফসীরকারেরা এমনটাই বলেছেন। প্রমাণ হিসেবে আনেন মুজাহিদের কথা, 'অথচ তারা তা খেতে চায়', আর মুকাতিল ইবন সুলাইমানের বাবা সুলাইমান ইবন কাইসের জবাব, 'খাবারের প্রতি তাদের ভালোবাসা থাকা অবস্থায়'।"
          },
          {
            "en": "The others fill in what that love means. Al-Baghawi joins love of the food to its scarcity, their desire for it and their need of it; the Muyassar has them feed 'despite their love for it and their need of it'. Ibn Kathir calls this the most evident reading, names Mujahid and Muqatil for it, says Ibn Jarir chose it, and sets beside it 2:177, gives wealth despite love for it, and 3:92, you will not attain righteousness until you spend from what you love. Ma'arif al-Qur'an draws the line sharply: not that they eat their fill and hand the remains to the poor.",
            "bn": "সেই ভালোবাসার ভেতরে কী আছে, অন্যরা তা খুলে বলেন। বাগাভী খাবারের ভালোবাসার সঙ্গে জুড়ে দেন এর স্বল্পতা, তাদের খাওয়ার ইচ্ছা আর তাদের নিজেদের প্রয়োজন। মুয়াসসার বলে, খাবারের প্রতি ভালোবাসা আর নিজেদের দরকার থাকা সত্ত্বেও তারা খাওয়াত। ইবন কাসীর এটাকেই সবচেয়ে স্পষ্ট অর্থ বলেন। তিনি এর পক্ষে মুজাহিদ ও মুকাতিলের নাম নেন, আর জানান ইবন জারীর এ মতটি বেছে নিয়েছেন। পাশে রাখেন ২:১৭৭, যেখানে ভালোবাসা সত্ত্বেও সম্পদ দেওয়ার কথা, আর ৩:৯২: প্রিয় জিনিস থেকে ব্যয় না করা পর্যন্ত তোমরা পুণ্যে পৌঁছাতে পারবে না। মাআরিফুল কুরআন সীমারেখাটা পরিষ্কার করে দেয়। পেট ভরে খেয়ে বাকিটা গরিবকে দেওয়া, এ আয়াতের কথা সেটা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Love Does Hubbihi Name?",
          "bn": "হুব্বিহী: কার প্রতি ভালোবাসা?"
        },
        "p": [
          {
            "en": "The pronoun hi, 'it' or 'Him', can point back to more than one thing, and the commentators record the alternatives. Ibn Kathir reports that it has been said: out of love for Allah, the pronoun returning to Him because the context points to Him. Al-Baghawi gives the same reading with the same 'it has been said'. Al-Qurtubi names a holder for it, ad-Darani, and a third reading from al-Fudayl ibn 'Iyad: out of love for feeding itself. So three objects of love are on record: the food, Allah, and the giving.",
            "bn": "হি সর্বনামটি একাধিক জিনিসের দিকে ফিরতে পারে, আর তাফসীরকারেরা সেই বিকল্পগুলো লিখে রেখেছেন। ইবন কাসীর জানান, কেউ কেউ বলেছেন এর অর্থ আল্লাহর প্রতি ভালোবাসায়। তাঁদের মতে সর্বনামটি আল্লাহর দিকে ফেরে, কারণ প্রসঙ্গ সেদিকেই ইঙ্গিত করে। বাগাভীও একই অর্থ আনেন, একইভাবে 'বলা হয়েছে' কথাটি দিয়ে। কুরতুবী এ মতের একজন ধারকের নাম বলেন, দারানী। সঙ্গে আনেন ফুদাইল ইবন ‘ইয়াদের তৃতীয় একটি মত: খাওয়ানোর কাজটাকেই ভালোবেসে। তাহলে ভালোবাসার তিনটি লক্ষ্য লিপিবদ্ধ আছে: খাবার, আল্লাহ, আর দান করা।"
          },
          {
            "en": "Ibn Kathir and at-Tabari keep the pronoun on the food; al-Baghawi lists it first and gives love of Allah as a further view. As-Sa'di folds the two together without naming either side: they are in a state where they love wealth and food, yet they have put love of Allah ahead of love of themselves. Read that way, the readings stop competing. The love of food is the cost, and the love of Allah is what pays it. This article takes no side between them.",
            "bn": "ইবন কাসীর ও তাবারী সর্বনামটিকে খাবারের সঙ্গেই রাখেন। বাগাভী এটাকে প্রথমে আনেন, আর আল্লাহর ভালোবাসাকে আরেকটি মত হিসেবে উল্লেখ করেন। সা'দী কোনো পক্ষের নাম না নিয়ে দুটি মতকে একসঙ্গে বেঁধে দেন। তাঁর কথায়, তারা এমন অবস্থায় আছে যখন সম্পদ ও খাবার তাদের প্রিয়, তবু তারা নিজেদের মনের ভালোবাসার আগে আল্লাহর ভালোবাসাকে রেখেছে। এভাবে পড়লে মতগুলোর মধ্যে আর টানাটানি থাকে না। খাবারের ভালোবাসা হলো মূল্য, আর আল্লাহর ভালোবাসা সেই মূল্য পরিশোধ করে। এ লেখা তাঁদের মধ্যে কোনো পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sugar, Grapes and a Latecomer",
          "bn": "চিনি, আঙুর আর দেরিতে আসা শিশু"
        },
        "p": [
          {
            "en": "The commentators also illustrate the phrase from the early generations. Al-Qurtubi reports that whenever a beggar came to ar-Rabi' ibn Khuthaym, he would say: feed him sugar, for ar-Rabi' loves sugar. Ibn Kathir relays from al-Bayhaqi, through Nafi', that Ibn 'Umar (RA) fell ill and longed for grapes when they were first in season. His wife Safiyyah bought a bunch for a dirham; a beggar followed the messenger to the door, and Ibn 'Umar said, give it to him. It happened twice before she bought a third bunch.",
            "bn": "তাফসীরকারেরা প্রথম যুগের মানুষদের জীবন থেকেও কথাটার ছবি দেখান। কুরতুবী জানান, রবী‘ ইবন খুসাইমের কাছে কোনো ভিক্ষুক এলে তিনি বলতেন, ওকে চিনি খাওয়াও, কারণ রবী‘ চিনি ভালোবাসে। ইবন কাসীর বাইহাকী থেকে নাফি‘-এর সূত্রে একটি ঘটনা আনেন। ইবন উমার (রাঃ) অসুস্থ হলেন, তখন সবে আঙুরের মৌসুম শুরু, আর তাঁর আঙুর খেতে মন চাইল। তাঁর স্ত্রী সাফিয়্যা এক দিরহামে এক থোকা আঙুর কিনে আনালেন। যে লোক আনতে গিয়েছিল, তার পিছু পিছু এক ভিক্ষুক দরজায় এসে হাজির। ইবন উমার বললেন, ওকে দিয়ে দাও। এমন হলো দুবার, তারপর তৃতীয় থোকাটি কেনা হলো।"
          },
          {
            "en": "On the second time Safiyyah sent word to the beggar: by Allah, if you come back you will never get any good from it. Al-Qurtubi adds, from al-Hasan, that an orphan who used to join Ibn 'Umar's meals once came after the food was finished, and Ibn 'Umar called for sawiq, a barley mash, with honey for him. These are reports of the early Muslims, not sayings of the Prophet ﷺ. The first two make the verse concrete, the gift being the very thing the giver wanted; the third shows an orphan remembered even when he came late.",
            "bn": "দ্বিতীয়বারের পর সাফিয়্যা ভিক্ষুকের কাছে খবর পাঠালেন: আল্লাহর কসম, আবার এলে এখান থেকে আর কখনো কিছু পাবে না। কুরতুবী হাসানের সূত্রে আরেকটি দৃশ্য যোগ করেন। এক ইয়াতীম ইবন উমারের খাবারের সময় নিয়মিত আসত। একবার সে এল খাওয়া শেষ হয়ে যাওয়ার পরে। ইবন উমার তখন তার জন্য মধুর সঙ্গে ছাতু আনালেন। এগুলো প্রথম যুগের মুসলিমদের ঘটনা, নবী ﷺ-এর বাণী নয়। প্রথম দুটি ঘটনায় আয়াতটি চোখের সামনে বাস্তব হয়ে ওঠে: দাতা নিজে যা চাইছিলেন, ঠিক সেটাই দিয়ে দিয়েছেন। তৃতীয়টি দেখায়, দেরিতে এলেও ইয়াতীমকে ভোলা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Healthy, Tight-Fisted, Afraid of Want",
          "bn": "সুস্থ শরীর, কৃপণ মন, অভাবের ভয়"
        },
        "p": [
          {
            "en": "Ibn Kathir supports the food reading with a hadith he cites from 'the Sahih'. Al-Bukhari records it in his Sahih (1419) from Abu Hurayrah (RA): 'A man came to the Prophet ﷺ and asked, \"O Allah's Messenger! Which charity is the most superior in reward?\" He replied, \"The charity which you practice while you are healthy, niggardly and afraid of poverty and wish to become wealthy. Do not delay it to the time of approaching death and then say, 'Give so much to such and such, and so much to such and such.' And it has already belonged to such and such.\"'",
            "bn": "খাবারের দিকেই সর্বনাম ফেরে, এ মতের পক্ষে ইবন কাসীর 'সহীহ' গ্রন্থ থেকে একটি হাদীস আনেন। বুখারী তাঁর সহীহ গ্রন্থে (১৪১৯) আবু হুরাইরা (রাঃ) থেকে তা বর্ণনা করেছেন: 'এক ব্যক্তি নবী ﷺ-এর কাছে এসে জিজ্ঞেস করল, হে আল্লাহর রাসূল, কোন সাদাকার সওয়াব সবচেয়ে বেশি? তিনি বললেন, তুমি যখন সুস্থ, মনে কৃপণতা আছে, দারিদ্র্যের ভয় করছ আর ধনী হওয়ার আশা রাখছ, তখনকার সাদাকা। আর দেরি কোরো না, যতক্ষণ না প্রাণ কণ্ঠনালিতে এসে পৌঁছায় আর তুমি বলো, অমুকের জন্য এত, অমুকের জন্য এত। অথচ তখন তো তা অমুকের হয়েই গেছে।'"
          },
          {
            "en": "Ibn Kathir explains the link: the best charity is given while you love wealth, are eager for it and need it, 'and that is why Allah said: and they give food despite their love for it'. The hadith is a general one on charity and is not tied to this verse by any report; the tie is Ibn Kathir's. Still, it names the state the verse praises. The gift that counts most is the one given while the hand still wants to close, not the bequest dictated at death.",
            "bn": "ইবন কাসীর যোগসূত্রটা বুঝিয়ে দেন। সবচেয়ে উত্তম সাদাকা হলো সেটি, যা দেওয়া হয় যখন সম্পদ আপনার প্রিয়, তার প্রতি আপনার লোভ আছে, আর তা আপনার দরকারও। 'এজন্যই আল্লাহ বলেছেন: আর তারা খাবারের প্রতি ভালোবাসা সত্ত্বেও খাবার খাওয়ায়।' হাদীসটি সাদাকা বিষয়ে একটি সাধারণ হাদীস। কোনো বর্ণনা একে এ আয়াতের সঙ্গে জুড়ে দেয়নি, জোড়াটা ইবন কাসীরের নিজের। তবু আয়াত যে অবস্থার প্রশংসা করে, হাদীসটি সেই অবস্থার নাম বলে দেয়। সবচেয়ে মূল্যবান দান সেটি, যা দেওয়া হয় হাত যখন এখনো মুঠো করে রাখতে চায়। মৃত্যুশয্যায় বলে যাওয়া অসিয়ত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Humbled by Need, Left Fatherless",
          "bn": "অভাবে নত, বাবা-হারা"
        },
        "p": [
          {
            "en": "Then the three who are fed. Miskin, at-Tabari says, means those in need whom need has humbled. Al-Baghawi: a poor person who has no wealth. The Muyassar: a poor person unable to earn, who owns nothing of the world's goods. Al-Qurtubi relays from Ibn 'Abbas, through Abu Salih, that the miskin is he who goes round asking you for your wealth. Yatim, at-Tabari says, is the child whose father has died and who has nothing; al-Baghawi, a young child without a father; al-Qurtubi glosses it as the orphans of the Muslims.",
            "bn": "এবার সেই তিনজন, যাদের খাওয়ানো হয়। তাবারী বলেন, মিসকীন হলো অভাবী মানুষ, অভাব যাদের নত করে দিয়েছে। বাগাভীর ভাষায়, এমন গরিব, যার কোনো সম্পদ নেই। মুয়াসসার বলে, এমন গরিব, যে উপার্জন করতে অক্ষম, দুনিয়ার কোনো সম্বল যার হাতে নেই। কুরতুবী আবু সালিহের সূত্রে ইবন আব্বাস (রাঃ) থেকে আনেন, মিসকীন সে, যে ঘুরে ঘুরে আপনার কাছে আপনার সম্পদ চায়। ইয়াতীম সম্পর্কে তাবারী বলেন, যে শিশুর বাবা মারা গেছে আর তার কিছুই নেই। বাগাভী বলেন, বাবা-হারা ছোট শিশু। কুরতুবী একে মুসলিমদের ইয়াতীম বলে ব্যাখ্যা করেন।"
          },
          {
            "en": "As-Sa'di adds a point about choosing: in their feeding they seek out the most deserving and the neediest of people, and the verse then names them. At-Tabari states the motive in a single clause. Allah praised these righteous ones for feeding such people seeking closeness to Him and His pleasure, and out of mercy for them. Both halves are there, devotion upward and compassion outward. The next verse, 76:9, gives what they say or intend as they feed, and is read on its own.",
            "bn": "সা'দী বাছাইয়ের একটি দিক যোগ করেন। খাওয়ানোর সময় তারা মানুষের মধ্যে সবচেয়ে হকদার আর সবচেয়ে অভাবী লোক খোঁজে, আর আয়াতটি তারপর তাদের নাম বলে দেয়। তাবারী তাদের উদ্দেশ্যটা এক কথায় বলেন। আল্লাহ এই নেককারদের প্রশংসা করেছেন, কারণ তারা এদের খাওয়াত আল্লাহর নৈকট্য আর তাঁর সন্তুষ্টির আশায়, আর এদের প্রতি দয়া থেকে। দুটো দিকই আছে: উপরের দিকে ইবাদত, আর মানুষের দিকে মমতা। পরের আয়াত, ৭৬:৯, বলে খাওয়ানোর সময় তারা কী বলে বা মনে রাখে। সেটার আলোচনা আলাদা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Captive From Either Side",
          "bn": "যে পক্ষেরই হোক, বন্দি তো বন্দি"
        },
        "p": [
          {
            "en": "The third, asir, the captive, is where the commentators differ most. At-Tabari defines him two ways: a fighter from the land of war taken by force, or one of the people of the qiblah taken and held in custody by right. Then he lays out the disagreement. Qatadah said Allah commanded good treatment of captives, and their captives in those days were idolaters; in another wording Qatadah adds, 'and your Muslim brother has more right that you feed him'. 'Ikrimah and al-Hasan likewise said the captives of that time were only polytheists. Ibn Kathir gives the same from Ibn 'Abbas.",
            "bn": "তৃতীয়জন আসীর, বন্দি। তাফসীরকারদের মতভেদ এখানেই সবচেয়ে বেশি। তাবারী দুইভাবে এর সংজ্ঞা দেন। হয় যুদ্ধরত দেশের কোনো যোদ্ধা, যাকে জোর করে ধরে আনা হয়েছে। নয়তো কিবলার অনুসারীদের কেউ, যাকে ন্যায্য কারণে ধরে আটক রাখা হয়েছে। তারপর তিনি মতভেদটা সাজিয়ে দেন। কাতাদা বলেছেন, আল্লাহ বন্দিদের সঙ্গে সদ্ব্যবহারের আদেশ দিয়েছেন, অথচ সেকালে তাদের বন্দিরা ছিল মুশরিক। আরেক বর্ণনায় কাতাদা যোগ করেন, 'আর তোমার মুসলিম ভাই তো খাওয়ানোর আরও বেশি হকদার।' ইকরিমা ও হাসানও বলেছেন, সে যুগের বন্দিরা মুশরিকই ছিল। ইবন কাসীর ইবন আব্বাস (রাঃ) থেকেও একই কথা আনেন।"
          },
          {
            "en": "Others read it as the Muslim held in custody. Mujahid said the asir is the one imprisoned, al-mahbus; Ibn Kathir names Sa'id ibn Jubayr, al-Hasan and ad-Dahhak for 'from the people of the qiblah'. Sa'id ibn Jubayr, in at-Tabari's chain, says both: from the people of the qiblah and others, and 'Ata' agreed. At-Tabari's verdict is that the word covers both groups, and the statement stays general until something binding narrows it. The verse is not about those vow-keepers alone but about everyone with this description, then and until the Hour.",
            "bn": "অন্যরা একে আটক মুসলিম বলে পড়েছেন। মুজাহিদ বলেছেন, আসীর মানে কারাবন্দি, আল-মাহবূস। ইবন কাসীর 'কিবলার অনুসারীদের মধ্য থেকে' মতটির জন্য সা‘ঈদ ইবন জুবাইর, হাসান ও দাহহাকের নাম নেন। তাবারীর সনদে সা‘ঈদ ইবন জুবাইর দুটোই বলেন: কিবলার অনুসারী আর অন্যরাও। আতা-ও একই কথা বলেছেন। তাবারীর সিদ্ধান্ত হলো, শব্দটি দুই দলকেই ধারণ করে। আর মেনে নেওয়ার মতো কোনো দলিল সীমিত না করা পর্যন্ত কথাটি ব্যাপক থাকবে। আয়াতটি সে যুগের মানত পূরণকারীদের নিয়েই শুধু নয়। এ গুণ যার মধ্যে আছে, সে যুগে এবং কিয়ামত পর্যন্ত, তাদের সবার কথা বলছে।"
          },
          {
            "en": "Ibn Kathir supports the polytheist reading by saying that at Badr the Messenger ﷺ ordered his Companions to honour the captives, and they would put them before themselves at the morning meal; he names no collection for it here. Ma'arif al-Qur'an applies the word to all prisoners, Muslim offenders and non-Muslims alike, held under the Shari'ah, and calls feeding them, even non-Muslims, an act of reward. Al-Baghawi draws the same conclusion: feeding captives, even polytheists, is good and its reward is hoped for. The verse praises feeding a man who may well be an enemy.",
            "bn": "মুশরিক বন্দির মতের পক্ষে ইবন কাসীর বলেন, বদরের দিন রাসূল ﷺ সাহাবিদের বন্দিদের সম্মান করতে আদেশ দিয়েছিলেন, আর তাঁরা সকালের খাবারে বন্দিদের নিজেদের আগে রাখতেন। এখানে তিনি এর কোনো হাদীসগ্রন্থের নাম বলেননি। মাআরিফুল কুরআন শব্দটিকে সব বন্দির উপর প্রয়োগ করে, শরীয়তের নিয়মে আটক মুসলিম অপরাধী হোক বা অমুসলিম। তাদের খাওয়ানোকে, অমুসলিম হলেও, সওয়াবের কাজ বলে। বাগাভীর সিদ্ধান্তও একই: বন্দিদের খাওয়ানো, মুশরিক হলেও, ভালো কাজ, এর সওয়াবের আশা করা যায়। আয়াতটি এমন মানুষকে খাওয়ানোর প্রশংসা করছে, যে হয়তো শত্রুই।"
          }
        ]
      },
      {
        "h": {
          "en": "Slave, Wife, or Captive of Madness",
          "bn": "দাস, স্ত্রী, নাকি পাগলামির বন্দি"
        },
        "p": [
          {
            "en": "Three wider readings stretch the word further. 'Ikrimah said the captives are slaves; Ibn Kathir reports it and recalls that the Prophet ﷺ urged good treatment of the enslaved in several hadiths. Abu Dawud records (5156), without a grading of his own, from 'Ali (RA): 'The last words which the Messenger of Allah ﷺ spoke were: Prayer, prayer; fear Allah about those whom your right hands possess.' That narration is general and is not tied to this verse.",
            "bn": "আরও তিনটি মত শব্দটিকে আরও প্রশস্ত করে। ইকরিমা বলেছেন, বন্দি মানে দাস। ইবন কাসীর এ মত উল্লেখ করে মনে করিয়ে দেন, নবী ﷺ একাধিক হাদীসে দাসদের সঙ্গে সদ্ব্যবহারের তাগিদ দিয়েছেন। আবু দাউদ (৫১৫৬) আলী (রাঃ) থেকে বর্ণনা করেছেন, নিজে কোনো মান উল্লেখ না করে: 'রাসূলুল্লাহ ﷺ-এর শেষ কথা ছিল: নামাজ, নামাজ। তোমাদের ডান হাত যাদের মালিক, তাদের ব্যাপারে আল্লাহকে ভয় করো।' বর্ণনাটি সাধারণ, এ আয়াতের সঙ্গে যুক্ত নয়।"
          },
          {
            "en": "A second reading makes the captive a wife. Al-Qurtubi gives it from Abu Hamzah ath-Thumali, al-Baghawi with 'it has been said', and both rest it on the Prophet's ﷺ description of wives as 'awan, captives, in a man's household. At-Tirmidhi records that description within a longer Farewell Hajj sermon (1163), grades it hasan sahih, and himself explains 'awan as captives in your hands. A third reading is offered by al-Mawardi as a possibility, quoted by al-Qurtubi: the one lacking in reason, held captive by his madness.",
            "bn": "দ্বিতীয় মতে বন্দি মানে স্ত্রী। কুরতুবী এটি আনেন আবু হামযা সুমালী থেকে, আর বাগাভী আনেন 'বলা হয়েছে' দিয়ে। দুজনেই এর ভিত্তি করেন নবী ﷺ-এর সেই কথার উপর, যেখানে তিনি স্ত্রীদের পুরুষের ঘরে ‘আওয়ান, অর্থাৎ বন্দি বলেছেন। তিরমিযী বিদায় হজ্জের এক দীর্ঘ ভাষণের ভেতরে এ কথাটি বর্ণনা করেছেন (১১৬৩), একে হাসান সহীহ বলেছেন, আর নিজেই ‘আওয়ান শব্দের ব্যাখ্যা দিয়েছেন: তোমাদের হাতে বন্দি। তৃতীয় মতটি মাওয়ার্দী একটি সম্ভাবনা হিসেবে বলেছেন, কুরতুবী তা উদ্ধৃত করেন: যার বুদ্ধি অপূর্ণ, যে তার উন্মাদনার হাতে বন্দি।"
          },
          {
            "en": "Al-Qurtubi also records a claim of abrogation, attributed to Sa'id ibn Jubayr: feeding the miskin was abrogated by the verse of sadaqat, and feeding the captive by the verse of the sword. Others, he says, held the ruling still standing, feeding the orphan and the poor being voluntary. Al-Qurtubi himself leans to 'Ata's general view that the captive may be of the people of the qiblah or others, calling it a view that gathers all the rest. Feeding a polytheist captive is then an act of closeness to Allah, though from voluntary charity, not the obligatory kind.",
            "bn": "কুরতুবী রহিত হওয়ার একটি দাবিও লিখে রেখেছেন, যা সা‘ঈদ ইবন জুবাইরের নামে বর্ণিত। তাঁর মতে মিসকীনকে খাওয়ানোর বিধান সাদাকার আয়াত দিয়ে, আর বন্দিকে খাওয়ানোর বিধান তরবারির আয়াত দিয়ে রহিত হয়ে গেছে। কুরতুবী জানান, অন্যরা বলেছেন বিধানটি এখনো বহাল, ইয়াতীম ও মিসকীনকে খাওয়ানো স্বেচ্ছায় করা দান। কুরতুবী নিজে আতার ব্যাপক মতের দিকে ঝোঁকেন: বন্দি কিবলার অনুসারী হতে পারে, অন্য কেউও হতে পারে। তাঁর ভাষায়, এ মত বাকি সব মতকে এক করে। তাহলে মুশরিক বন্দিকে খাওয়ানোও আল্লাহর নৈকট্যের কাজ। তবে তা নফল সাদাকা থেকে, ফরজ সাদাকা থেকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Stories Told About Its Revelation",
          "bn": "নাযিলের প্রেক্ষাপট নিয়ে নানা বর্ণনা"
        },
        "p": [
          {
            "en": "Several occasions of revelation are relayed for this verse, and none is settled. Al-Baghawi and al-Qurtubi both report from Muqatil that it came down about a man of the Ansar who in a single day fed a poor man, an orphan and a captive. Al-Qurtubi, under 76:9, adds others: that it concerned seven Emigrants who took charge of the captives of Badr, as al-Mawardi mentions; and a story from ath-Tha'labi of an Ansari couple who fed three hungry petitioners in turn. Al-Baghawi opens them by noting that the scholars differed over the cause of revelation.",
            "bn": "এ আয়াত নাযিলের কয়েকটি প্রেক্ষাপট বর্ণিত হয়েছে, কোনোটাই প্রতিষ্ঠিত নয়। বাগাভী ও কুরতুবী দুজনেই মুকাতিল থেকে জানান, আয়াতটি এক আনসারী ব্যক্তিকে নিয়ে নেমেছে, যিনি একই দিনে এক মিসকীন, এক ইয়াতীম আর এক বন্দিকে খাইয়েছিলেন। কুরতুবী ৭৬:৯ আয়াতের আলোচনায় আরও কয়েকটি বর্ণনা আনেন। মাওয়ার্দীর উল্লেখমতে, এটি সেই ৭ জন মুহাজির সম্পর্কে, যাঁরা বদরের বন্দিদের দায়িত্ব নিয়েছিলেন। আর সা‘লাবীর বরাতে এক আনসারী দম্পতির ঘটনা, যাঁরা পরপর তিনজন ক্ষুধার্ত প্রার্থীকে খাইয়েছিলেন। বাগাভী এগুলোর শুরুতেই বলে নেন, নাযিলের কারণ নিয়ে আলেমদের মতভেদ আছে।"
          },
          {
            "en": "The best known is told of 'Ali ibn Abi Talib (RA). Al-Baghawi relays, through Mujahid and 'Ata' from Ibn 'Abbas, that 'Ali (RA) worked for a Jewish man for some barley, and the household cooked it a third at a time; each time it was ready a poor man, then an orphan, then a polytheist captive asked, was given it, and they went hungry that day. Al-Baghawi passes no judgement on it. Al-Qurtubi relays a longer version, through Layth from Mujahid from Ibn 'Abbas, with Fatimah (RA), a servant girl, their two young sons and a vow of three days' fasting.",
            "bn": "সবচেয়ে প্রসিদ্ধ বর্ণনাটি আলী ইবন আবী তালিব (রাঃ)-কে নিয়ে। বাগাভী মুজাহিদ ও আতার সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: আলী (রাঃ) কিছু যবের বিনিময়ে এক ইহুদির কাজ করেছিলেন। পরিবারটি সেই যব তিনটি ভাগে ভাগ করে এক এক ভাগ রান্না করল। প্রতিবার খাবার তৈরি হতেই কেউ এসে চাইল: প্রথমে এক মিসকীন, তারপর এক ইয়াতীম, তারপর এক মুশরিক বন্দি। প্রত্যেককে খাবারটা দিয়ে দেওয়া হলো, আর সেদিন তাঁরা না খেয়ে রইলেন। বাগাভী এ বর্ণনা নিয়ে কোনো মন্তব্য করেননি। কুরতুবী লাইসের সূত্রে মুজাহিদ হয়ে ইবন আব্বাস (রাঃ) থেকে একটি দীর্ঘতর রূপ আনেন। তাতে আছেন ফাতিমা (রাঃ), এক দাসী, তাঁদের দুই ছোট ছেলে, আর তিন দিন রোজা রাখার মানত।"
          },
          {
            "en": "Al-Qurtubi judges that longer narration plainly: a report that is not sound and not established. He quotes al-Hakim at-Tirmidhi, in Nawadir al-Usul, calling it embellished and counterfeit, arguing that providing for dependants is a duty and that no thinking person would suppose 'Ali (RA) kept small children hungry for three days. Al-Qurtubi's own conclusion is that the correct view is that the verse came down about all the righteous and everyone who does a good deed, so it is general. What it praises is open to any household, then and now.",
            "bn": "দীর্ঘ বর্ণনাটি নিয়ে কুরতুবীর রায় পরিষ্কার: এটি সহীহ নয়, প্রমাণিতও নয়। তিনি 'নাওয়াদিরুল উসূল' গ্রন্থ থেকে হাকীম তিরমিযীর কথা উদ্ধৃত করেন, যিনি একে সাজানো ও জাল বলেছেন। তাঁর যুক্তি, পরিবার-পরিজনের ভরণপোষণ দেওয়া ফরজ। কোনো বুদ্ধিমান মানুষ ভাবতে পারে না যে আলী (রাঃ) ছোট ছোট শিশুদের টানা তিনটি দিন অনাহারে রেখেছেন। কুরতুবীর নিজের সিদ্ধান্ত হলো, সঠিক মত এই যে আয়াতটি সব নেককার আর যে-ই ভালো কাজ করে, তাদের সবার সম্পর্কে নেমেছে। তাই এর বিধান ব্যাপক। আয়াত যে কাজের প্রশংসা করে, তার দরজা সব ঘরের জন্য খোলা, তখনও, এখনও।"
          }
        ]
      }
    ]
  },
  "76:12-22": {
    "sections": [
      {
        "h": {
          "en": "The Price Is Named First",
          "bn": "আগে দাম, পরে বর্ণনা"
        },
        "p": [
          {
            "en": "Wa jazahum bima sabaru jannatan wa harira: and He rewarded them, for their patience, with a garden and silk. Before a single couch or cup is described, 76:12 names what is being paid for. Ibn Kathir reads the phrase as a cause: because of their patience He gave them a garden and silk, which he glosses as a spacious home, an easy life and fine clothing. At-Tabari words it as reward for their patience in this world in obeying Allah and in doing what pleases Him.",
            "bn": "ওয়া জাযাহুম বিমা সাবারূ জান্নাতান ওয়া হারীরা: তাদের ধৈর্যের বিনিময়ে তিনি তাদের দিলেন জান্নাত ও রেশম। কোনো আসন বা পেয়ালার বর্ণনা আসার আগেই ৭৬:১২ বলে দেয়, দামটা কীসের। ইবন কাসীর বাক্যটিকে কারণ হিসেবে পড়েন: তাদের ধৈর্যের কারণেই তিনি তাদের দিলেন জান্নাত ও রেশম। তাঁর ব্যাখ্যায় এর মানে প্রশস্ত বাসস্থান, স্বচ্ছন্দ জীবন আর সুন্দর পোশাক। তাবারী কথাটা বলেন এভাবে: দুনিয়াতে আল্লাহর আনুগত্যে আর তাঁর পছন্দের কাজে তারা যে ধৈর্য ধরেছিল, এ তারই প্রতিদান।"
          },
          {
            "en": "That patience has a history in the verses just before. 76:7 to 76:10 describe people who fulfil their vows, feed the needy, the orphan and the captive while loving the food themselves, and say they want neither reward nor thanks, only fearing a Day. Ibn Kathir records Mujahid and Sa'id ibn Jubayr saying they did not speak this aloud; Allah knew it in their hearts and praised them for it. The surah opened in 76:1 with man before he was anything mentioned, and 76:3 left him grateful or ungrateful. Here the grateful are paid.",
            "bn": "এই ধৈর্যের পেছনের ঘটনা ঠিক আগের আয়াতগুলোতেই আছে। ৭৬:৭ থেকে ৭৬:১০ এমন মানুষের কথা বলে, যারা মানত পূরণ করে, নিজেরা খাবারটা ভালোবেসেও মিসকীন, ইয়াতীম ও বন্দীকে খাওয়ায়, আর বলে, আমরা প্রতিদানও চাই না, কৃতজ্ঞতাও চাই না, শুধু একটি দিনকে ভয় করি। ইবন কাসীর মুজাহিদ ও সাঈদ ইবন জুবাইরের কথা আনেন: তারা মুখে এসব বলেনি। আল্লাহ তাদের অন্তরের কথা জানতেন, তাই এর প্রশংসা করেছেন। সূরাটি শুরু হয়েছিল ৭৬:১ আয়াতে মানুষের সেই সময় দিয়ে, যখন সে উল্লেখযোগ্য কিছুই ছিল না। ৭৬:৩ তাকে রেখে গিয়েছিল কৃতজ্ঞ অথবা অকৃতজ্ঞ হিসেবে। এখানে কৃতজ্ঞদের পাওনা মিটিয়ে দেওয়া হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience Facing Three Ways",
          "bn": "ধৈর্যের তিন দিক"
        },
        "p": [
          {
            "en": "What were they patient about? At-Tabari answers in Qatadah's words: they were patient in obeying Allah, and patient in keeping away from disobeying Him and from what He forbade. As-Sa'di divides the same patience three ways: over obedience to Allah, so they did what they could of it; away from disobedience, so they left it; and under Allah's painful decrees, so they did not resent them. Al-Baghawi gives the first pair in a single phrase, obeying Allah and avoiding disobedience to Him, before he lists narrower readings.",
            "bn": "কীসের উপর তারা ধৈর্য ধরেছিল? তাবারী জবাব দেন কাতাদার ভাষায়: আল্লাহর আনুগত্যে তারা ধৈর্য ধরেছিল, আর ধৈর্য ধরেছিল তাঁর নাফরমানি ও তাঁর হারাম করা জিনিস থেকে দূরে থাকতে। সা'দী একই ধৈর্যকে তিনটি ভাগে সাজান। আল্লাহর আনুগত্যে ধৈর্য, তাই যতটুকু পেরেছে আমল করেছে। নাফরমানি থেকে ধৈর্য, তাই তা ছেড়ে দিয়েছে। আর আল্লাহর কষ্টদায়ক তাকদীরে ধৈর্য, তাই তাতে অসন্তুষ্ট হয়নি। বাগাভী প্রথম দুটি একটি বাক্যেই বলেন: আল্লাহর আনুগত্য আর তাঁর নাফরমানি থেকে বেঁচে থাকা। তারপর তিনি আরও সরু কিছু ব্যাখ্যা তুলে ধরেন।"
          },
          {
            "en": "Those narrower readings each name a cost. Al-Baghawi reports ad-Dahhak saying patience over poverty, and 'Ata' saying over hunger. Al-Qurtubi opens with poverty, records al-Qurazi saying fasting, and has 'Ata' specify hunger for three days, the days of the vow. Ibn Kathir carries a scene from Ibn 'Asakir: when this verse was recited to Abu Sulayman ad-Darani, he said it meant patience in leaving desires in this world, and recited lines on how many a person desire has killed or taken captive.",
            "bn": "এই সরু ব্যাখ্যাগুলোর প্রতিটি একেকটা দামের নাম বলে। বাগাভী দাহহাকের মত আনেন: দারিদ্র্যের উপর ধৈর্য। আতার মত: ক্ষুধার উপর ধৈর্য। কুরতুবী শুরু করেন দারিদ্র্য দিয়ে, কুরাযীর মত আনেন যে এ হলো রোজা, আর আতার কথায় আরও নির্দিষ্ট করে বলেন: টানা তিনটি দিনের ক্ষুধা, মানতের সেই দিনগুলো। ইবন কাসীর ইবন আসাকির থেকে একটি দৃশ্য আনেন। আবু সুলাইমান দারানীর সামনে এই আয়াত পড়া হলে তিনি বললেন, এর মানে দুনিয়ার কামনা ছেড়ে দেওয়ার ধৈর্য। তারপর তিনি কবিতা আবৃত্তি করলেন: কামনা কত মানুষকে মেরেছে, কত মানুষকে বন্দী করেছে।"
          },
          {
            "en": "Al-Qurtubi adds a point of grammar that carries a judgement. The ma in bima sabaru makes a verbal noun, 'for their patience', and he says this fits the view that the verse came down about all the righteous. Under 76:13 he also carries, introduced only by 'Ibn 'Abbas said', a report in which the people of Paradise see a light, are told it is 'Ali and Fatimah (RA) laughing, and hear that the surah was revealed about them. He gives it no chain and no weighing; nothing here rests on it.",
            "bn": "কুরতুবী ব্যাকরণের একটা কথা যোগ করেন, যার ভেতরে একটা সিদ্ধান্তও আছে। বিমা সাবারূ-র 'মা' ক্রিয়াকে ক্রিয়াবাচক বিশেষ্যে বদলে দেয়, অর্থ দাঁড়ায় 'তাদের ধৈর্যের কারণে'। তাঁর মতে এটি সেই মতের সঙ্গে মেলে, যাতে আয়াতটি সব নেককারের ব্যাপারে নাযিল হয়েছে। ৭৬:১৩ আয়াতের আলোচনায় তিনি শুধু 'ইবন আব্বাস বলেছেন' বলে একটি বর্ণনাও আনেন। তাতে জান্নাতবাসীরা একটা আলো দেখে, তাদের বলা হয় এ আলী ও ফাতিমা (রাঃ)-এর হাসি, আর সূরাটি তাঁদের ব্যাপারেই নাযিল হয়েছে। কুরতুবী এর কোনো সনদ দেননি, যাচাইও করেননি। এই লেখার কিছুই এর উপর দাঁড়িয়ে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Silk for Those Who Refrained",
          "bn": "যারা বিরত ছিল, তাদের রেশম"
        },
        "p": [
          {
            "en": "Of everything in the garden, why name silk beside it? As-Sa'di suggests, with a careful 'perhaps', that Allah singled out silk because it is their outward dress, the clothing that shows the state of the one who wears it. Al-Qurtubi ties the silk to restraint: whoever wears silk in this world will not wear it in the next, and those clothed in it there receive it in exchange for holding themselves back here from the garments Allah forbade.",
            "bn": "জান্নাতের এত কিছুর মধ্যে তার পাশে আলাদা করে রেশমের নাম কেন? সা'দী সাবধানে 'সম্ভবত' বলে একটা কারণ দেখান: রেশম তাদের বাইরের পোশাক, আর পোশাকই বলে দেয় পরিধানকারীর অবস্থা। তাই আল্লাহ রেশমকে আলাদা করে উল্লেখ করেছেন। কুরতুবী রেশমকে জুড়ে দেন সংযমের সঙ্গে। যে দুনিয়াতে রেশম পরে, সে আখিরাতে তা পরবে না। আর সেখানে যাদের রেশম পরানো হবে, তারা তা পাবে দুনিয়াতে আল্লাহর হারাম করা পোশাক থেকে নিজেদের আটকে রাখার বিনিময়ে।"
          },
          {
            "en": "76:13 seats them: muttaki'ina fiha 'ala al-ara'ik, reclining in it on couches. At-Tabari explains the ara'ik as beds within curtained canopies, citing Ibn 'Abbas (RA), Qatadah and Mujahid, and al-Baghawi adds that a couch is only called an arika when bed and canopy come together. Al-Qurtubi notices something in the grammar: muttaki'in describes those whom He rewarded and depends on the verb of rewarding, not on 'they were patient', because the patience was in this world and the reclining is in the next.",
            "bn": "৭৬:১৩ তাদের বসিয়ে দেয়: মুত্তাকিঈনা ফীহা আলাল আরাইক, সেখানে তারা আসনে হেলান দিয়ে থাকবে। তাবারী আরাইকের ব্যাখ্যা দেন পর্দাঘেরা চাঁদোয়ার ভেতরের খাট হিসেবে, আর এর পক্ষে আনেন ইবন আব্বাস (রাঃ), কাতাদা ও মুজাহিদের কথা। বাগাভী যোগ করেন, খাট আর চাঁদোয়া একসঙ্গে না হলে তাকে আরীকা বলা হয় না। কুরতুবী ব্যাকরণে একটা জিনিস লক্ষ করেন। মুত্তাকিঈন শব্দটি তাদের অবস্থা বোঝায় যাদের তিনি প্রতিদান দিয়েছেন, আর এটি নির্ভর করে প্রতিদান দেওয়ার ক্রিয়ার উপর, 'তারা ধৈর্য ধরেছিল' ক্রিয়ার উপর নয়। কারণ ধৈর্য ছিল দুনিয়াতে, আর হেলান দিয়ে বসা আখিরাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Neither Sun Nor Zamharir",
          "bn": "সূর্যও নয়, যামহারীরও নয়"
        },
        "p": [
          {
            "en": "La yarawna fiha shamsan wa la zamharira: they will see in it neither sun nor zamharir. At-Tabari explains: no sun whose heat would hurt them, and no zamharir, which is severe cold, whose chill would hurt them. He cites Mujahid calling it appalling cold, and Qatadah: Allah knew that fierce heat harms and fierce cold harms, so He shielded them from both. Ibn Kathir calls it one lasting, unbroken climate, and quotes 18:108: they will not wish to move from it.",
            "bn": "লা ইয়ারাওনা ফীহা শামসান ওয়ালা যামহারীরা: সেখানে তারা সূর্যও দেখবে না, যামহারীরও না। তাবারীর ব্যাখ্যা: এমন সূর্য নেই যার তাপ তাদের কষ্ট দেবে, আর যামহারীর নেই, অর্থাৎ তীব্র শীত, যার ঠান্ডা তাদের কষ্ট দেবে। তিনি মুজাহিদের কথা আনেন, যিনি একে বলেছেন ভয়ংকর ঠান্ডা। কাতাদার কথাও আনেন: আল্লাহ জানেন, প্রচণ্ড গরমও কষ্ট দেয়, প্রচণ্ড শীতও কষ্ট দেয়, তাই তিনি দুটো থেকেই তাদের রক্ষা করেছেন। ইবন কাসীরের ভাষায় সেখানকার আবহাওয়া একই রকম, স্থায়ী, কখনো বদলায় না। তিনি ১৮:১০৮ উদ্ধৃত করেন: তারা সেখান থেকে সরে যেতে চাইবে না।"
          },
          {
            "en": "Al-Qurtubi records a second sense of the word. Tha'lab said zamharir is the moon in the dialect of the tribe of Tayyi', and al-Qurtubi quotes one of their poets to show it. On that reading the verse says they see no sun like this world's sun and no moon like its moon: they live in lasting light, with neither night nor day, since daylight comes from the sun and night's light from the moon. Both readings stand in his text, and this article chooses neither.",
            "bn": "কুরতুবী শব্দটির আরেকটি অর্থও লিখে রাখেন। সা'লাব বলেছেন, তাই গোত্রের ভাষায় যামহারীর মানে চাঁদ। কুরতুবী প্রমাণ হিসেবে তাদের একজন কবির পঙ্‌ক্তি উদ্ধৃত করেন। এই পাঠে আয়াতের অর্থ দাঁড়ায়: তারা দুনিয়ার সূর্যের মতো সূর্য দেখবে না, দুনিয়ার চাঁদের মতো চাঁদও দেখবে না। তারা থাকবে স্থায়ী আলোয়, যেখানে রাতও নেই, দিনও নেই। কারণ দিনের আলো আসে সূর্য থেকে, আর রাতের আলো চাঁদ থেকে। দুটো পাঠই তাঁর লেখায় পাশাপাশি আছে, আর এই লেখা কোনোটিকেই বেছে নিচ্ছে না।"
          },
          {
            "en": "At-Tabari and al-Qurtubi both attach a hadith here, and al-Bukhari records it in his Sahih (3260) from Abu Hurairah (RA): Allah's Messenger ﷺ said, \"The (Hell) Fire complained to its Lord saying, 'O my Lord! My different parts eat up each other.' So, He allowed it to take two breaths, one in the winter and the other in summer, and this is the reason for the severe heat and the bitter cold you find (in weather).\" The report's Arabic word for that bitter cold is zamharir.",
            "bn": "তাবারী ও কুরতুবী দুজনেই এখানে একটি হাদীস যুক্ত করেছেন। বুখারী তাঁর সহীহ গ্রন্থে (৩২৬০) এটি আবু হুরায়রা (রাঃ) থেকে এনেছেন: আল্লাহর রাসূল ﷺ বলেছেন, \"জাহান্নামের আগুন তার রবের কাছে অভিযোগ করে বলল, 'হে আমার রব! আমার এক অংশ আরেক অংশকে খেয়ে ফেলছে।' তখন তিনি তাকে দুটি নিঃশ্বাসের অনুমতি দিলেন, একটি শীতে, আরেকটি গ্রীষ্মে। তোমরা যে প্রচণ্ড গরম আর তীব্র শীত পাও, তা এরই কারণে।\" সেই বর্ণনার আরবিতে তীব্র শীতের শব্দটি যামহারীর।"
          }
        ]
      },
      {
        "h": {
          "en": "Silver You Can See Through",
          "bn": "যে রুপার ভেতর দেখা যায়"
        },
        "p": [
          {
            "en": "76:15 sends vessels of silver round among them, and cups that were qawarir, a word Ibn Kathir says is used only of glass. 76:16 then joins the two: qawarira min fiddah, glass of silver. At-Tabari explains that Allah made them silver while they have the clearness of glass, so they hold the whiteness of silver and the clarity of glass, and he cites Ibn 'Abbas (RA), Mujahid, Qatadah and al-Hasan. Ibn Kathir draws the consequence: these cups are silver yet transparent, their contents seen from outside, and nothing in this world is like them.",
            "bn": "৭৬:১৫ তাদের সামনে ঘুরিয়ে আনে রুপার পাত্র, আর এমন পানপাত্র যা ছিল কাওয়ারীর। ইবন কাসীর বলেন, এই শব্দ শুধু কাচের জন্যই ব্যবহৃত হয়। তারপর ৭৬:১৬ দুটিকে মিলিয়ে দেয়: কাওয়ারীরা মিন ফিদ্দাহ, রুপার তৈরি কাচ। তাবারীর ব্যাখ্যা: আল্লাহ এগুলো বানিয়েছেন রুপা দিয়ে, অথচ এগুলোতে আছে কাচের স্বচ্ছতা। তাই এতে একসঙ্গে রুপার শুভ্রতা আর কাচের স্বচ্ছতা। এর পক্ষে তিনি ইবন আব্বাস (রাঃ), মুজাহিদ, কাতাদা ও হাসানের কথা আনেন। ইবন কাসীর এর ফল টানেন: পাত্রগুলো রুপার, তবু স্বচ্ছ, ভেতরে কী আছে বাইরে থেকে দেখা যায়। দুনিয়াতে এর কোনো তুলনা নেই।"
          },
          {
            "en": "Ibn Kathir also carries a report, passed through Ibn al-Mubarak from an unnamed man, that Ibn 'Abbas said everything in Paradise has some likeness given in this world except the glass of silver. Then qaddaruha taqdira: they measured them exactly. Ibn Kathir names Ibn 'Abbas, Mujahid, Sa'id ibn Jubayr, Qatadah and others for 'to the measure of their thirst, no more and no less', and a second report from Ibn 'Abbas, 'measured to the hand', which he says does not conflict. As-Sa'di gives the reason: more would spoil the pleasure, less would not quench.",
            "bn": "ইবন কাসীর একটি বর্ণনাও আনেন, যা ইবন মুবারক থেকে এক অজ্ঞাতনামা ব্যক্তির মাধ্যমে এসেছে। তাতে ইবন আব্বাস বলেছেন, জান্নাতের সব কিছুর কোনো না কোনো সাদৃশ্য দুনিয়াতে দেওয়া হয়েছে, শুধু রুপার কাচ ছাড়া। তারপর কাদ্দারূহা তাকদীরা: তারা সেগুলো মেপে ঠিক করেছে। ইবন কাসীর ইবন আব্বাস, মুজাহিদ, সাঈদ ইবন জুবাইর, কাতাদা ও আরও অনেকের নাম নেন এই অর্থের পক্ষে: তৃষ্ণা মেটার ঠিক মাপে, বেশিও না, কমও না। ইবন আব্বাস থেকে আরেকটি বর্ণনা আছে, 'হাতের মাপে', আর ইবন কাসীর বলেন, দুটোর মধ্যে বিরোধ নেই। সা'দী কারণটা বলেন: বেশি হলে স্বাদ কমে যেত, কম হলে তৃষ্ণা মিটত না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ginger, and a Spring Called Smooth",
          "bn": "আদা আর এক মসৃণ ঝর্ণা"
        },
        "p": [
          {
            "en": "76:17 mixes their cup with zanjabil, ginger. Ibn Kathir sets it beside the kafur of 76:5: sometimes their drink is mixed with camphor, which is cool, and sometimes with ginger, which is warm, so that it is balanced, while the muqarrabun drink each pure, as Qatadah and others said. Al-Qurtubi explains the flavour: the Arabs relished drink mixed with ginger, so they were drawn to the next life by what they held to be the height of pleasure.",
            "bn": "৭৬:১৭ তাদের পেয়ালায় মিশিয়ে দেয় যানজাবীল, অর্থাৎ আদা। ইবন কাসীর একে রাখেন ৭৬:৫ আয়াতের কাফূরের পাশে। কখনো তাদের পানীয়ে মেশানো হয় কর্পূর, যা ঠান্ডা, কখনো আদা, যা গরম, যাতে ভারসাম্য থাকে। আর মুকাররাবূন দুটোই খাঁটি অবস্থায় পান করে, যেমন কাতাদা ও অন্যরা বলেছেন। কুরতুবী স্বাদের কারণটা বলেন: আরবরা আদা মেশানো পানীয় খুব পছন্দ করত। তাই তারা যাকে আনন্দের চূড়া মনে করত, তা দিয়েই তাদের আখিরাতের দিকে আগ্রহী করা হয়েছে।"
          },
          {
            "en": "76:18 then names a spring: 'aynan fiha tusamma salsabila. Whether salsabil is a name is disputed. Ibn Kathir reports 'Ikrimah: it is the name of a spring in Paradise. At-Tabari holds that tusamma here means 'is described', and that salsabil describes the spring as smooth in the throat, swift in its flow and yielding to the people of Paradise, who turn it where they wish, as Mujahid and Qatadah said; he says the interpreters agree it is a description, not a name. Al-Baghawi says most scholars hold the same. Both views are kept here.",
            "bn": "তারপর ৭৬:১৮ একটি ঝর্ণার নাম বলে: আইনান ফীহা তুসাম্মা সালসাবীলা। সালসাবীল নাম কি না, তা নিয়ে মতভেদ আছে। ইবন কাসীর ইকরিমার কথা আনেন: এটি জান্নাতের একটি ঝর্ণার নাম। তাবারীর মত ভিন্ন। তাঁর মতে এখানে তুসাম্মা মানে 'বর্ণনা করা হয়'। সালসাবীল ঝর্ণাটির গুণ: গলায় সহজে নামে, দ্রুত বয়ে চলে, আর জান্নাতবাসীদের বশে থাকে, তারা যেদিকে চায় সেদিকে ঘুরিয়ে নেয়, যেমন মুজাহিদ ও কাতাদা বলেছেন। তাবারী বলেন, তাফসীরকারেরা একমত যে এটি গুণবাচক শব্দ, নাম নয়। বাগাভী বলেন, অধিকাংশ আলেমের মতও তাই। এখানে দুই মতই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Youths Like Scattered Pearls",
          "bn": "ছড়ানো মুক্তার মতো কিশোর"
        },
        "p": [
          {
            "en": "76:19 sends wildanun mukhalladun round among them, and at-Tabari sets out the disagreement over mukhalladun. Qatadah said it means they do not die. Others said they wear bracelets, which at-Tabari also reports as the word's sense in the dialect of Himyar; others said they wear earrings; and it was said their youth is permanent and never moves from that age. At-Tabari adds Arab usage: a man who grows old while his hair stays black is called mukhallad. He takes this to confirm Qatadah, since what stays in one state neither ages nor dies.",
            "bn": "৭৬:১৯ তাদের মাঝে ঘুরিয়ে আনে উইলদানুম মুখাল্লাদূন, আর মুখাল্লাদূন শব্দ নিয়ে মতভেদটা তাবারী গুছিয়ে দেখান। কাতাদা বলেছেন, এর মানে তারা মরবে না। কেউ বলেছেন, তারা কঙ্কণ পরা। তাবারী এটাও জানান যে হিমইয়ার গোত্রের ভাষায় শব্দটির এই অর্থ। কেউ বলেছেন, তারা কানের দুল পরা। আবার বলা হয়েছে, তাদের কৈশোর স্থায়ী, সেই বয়স থেকে তারা কখনো সরে না। তাবারী আরবদের ব্যবহারও আনেন: কেউ বুড়ো হয়ে গেল অথচ চুল কালোই থেকে গেল, তাকে বলা হয় মুখাল্লাদ। তাঁর মতে এতে কাতাদার কথাই পোক্ত হয়, কারণ যে একই অবস্থায় থাকে, সে বুড়োও হয় না, মরেও না।"
          },
          {
            "en": "Ibn Kathir reads it as one unchanging state, their age never passing beyond it, and says those who explained it as earrings expressed the meaning that way because earrings suit the young. This article does not choose among them. On the pearls, al-Baghawi says pearls scattered on a carpet look finer than when strung, and that the youths are likened to scattered pearls because they spread out in service; al-Qurtubi contrasts the hur, likened to hidden pearls because they are not set to serve.",
            "bn": "ইবন কাসীর একে পড়েন একই অপরিবর্তিত অবস্থা হিসেবে, যার বাইরে তাদের বয়স কখনো যায় না। তিনি বলেন, যারা একে কানের দুল দিয়ে ব্যাখ্যা করেছেন, তারা অর্থটা এভাবে প্রকাশ করেছেন, কারণ দুল ছোটদেরই মানায়। এই লেখা এগুলোর কোনোটিকে বেছে নিচ্ছে না। মুক্তার উপমা নিয়ে বাগাভী বলেন, গালিচায় ছড়ানো মুক্তা মালায় গাঁথা মুক্তার চেয়ে সুন্দর দেখায়। কিশোরদের ছড়ানো মুক্তার সঙ্গে তুলনা করা হয়েছে, কারণ খেদমতে তারা চারদিকে ছড়িয়ে থাকে। কুরতুবী এর পাশে হূরদের কথা রাখেন: তাদের তুলনা লুকিয়ে রাখা মুক্তার সঙ্গে, কারণ তাদের খেদমতে লাগানো হয় না।"
          },
          {
            "en": "The rest can be gathered briefly. 76:14 brings the fruit within reach whether he stands, sits or lies, as Mujahid says in at-Tabari. For the great dominion of 76:20, at-Tabari reports Mujahid and Sufyan: the angels greeting them and asking leave to enter, and al-Qurtubi links this to 13:24, 'peace be upon you for what you patiently endured'. 76:21 dresses them in sundus and istabraq, two kinds of silk, adorns them with silver bracelets, which Ibn Kathir calls the description of the righteous, and gives them a pure drink that, he says, cleanses their inner selves of envy and rancour.",
            "bn": "বাকিগুলো সংক্ষেপে বলা যায়। ৭৬:১৪ ফলকে নাগালে এনে দেয়। তাবারীতে মুজাহিদ বলেন, সে দাঁড়াক, বসুক বা শুয়ে থাকুক, ফল তার হাতের কাছে থাকে। ৭৬:২০ আয়াতের বিশাল রাজত্ব সম্পর্কে তাবারী মুজাহিদ ও সুফিয়ানের কথা আনেন: ফেরেশতারা তাদের সালাম দেবে আর ভেতরে আসার অনুমতি চাইবে। কুরতুবী একে জুড়ে দেন ১৩:২৪ আয়াতের সঙ্গে: 'তোমাদের উপর শান্তি, তোমরা যে ধৈর্য ধরেছিলে তার বিনিময়ে।' ৭৬:২১ তাদের পরায় সুনদুস ও ইসতাবরাক, দুই রকমের রেশম, সাজায় রুপার কঙ্কণে। ইবন কাসীর বলেন, এ নেককারদের বর্ণনা। আর তাদের দেওয়া হয় পবিত্র পানীয়, যা তাঁর ভাষায় তাদের ভেতর থেকে হিংসা ও বিদ্বেষ ধুয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanked for a Little Effort",
          "bn": "অল্প চেষ্টারও কদর"
        },
        "p": [
          {
            "en": "The passage closes on words spoken to them: inna hadha kana lakum jaza'an wa kana sa'yukum mashkura, indeed this is a reward for you, and your effort has been appreciated. At-Tabari explains that it will be said to them that the honour given them is a reward for the good they did in the world, and that their work was mashkur: their Lord praised them for it, was pleased with it, and rewarded them. He cites Qatadah twice: 'He forgave them the sin and thanked them for the good', and 'Allah has thanked a little striving.'",
            "bn": "অংশটি শেষ হয় তাদের উদ্দেশে বলা কথায়: ইন্না হাযা কানা লাকুম জাযাআন ওয়া কানা সা'য়ুকুম মাশকূরা, নিশ্চয়ই এ তোমাদের প্রতিদান, আর তোমাদের চেষ্টার কদর করা হয়েছে। তাবারীর ব্যাখ্যা: তাদের বলা হবে, যে সম্মান তোমাদের দেওয়া হলো, তা দুনিয়াতে তোমাদের নেক আমলের প্রতিদান। আর তোমাদের আমল ছিল মাশকূর: তোমাদের রব এর জন্য তোমাদের প্রশংসা করেছেন, তোমাদের জন্য তাতে সন্তুষ্ট হয়েছেন, আর এর বিনিময়ে প্রতিদান দিয়েছেন। তিনি কাতাদার দুটি কথা আনেন: 'তিনি তাদের গুনাহ মাফ করেছেন আর তাদের নেকির কদর করেছেন।' আর: 'আল্লাহ অল্প চেষ্টারও কদর করেছেন।'"
          },
          {
            "en": "Al-Qurtubi defines what this thanks means when it comes from Allah: His thanking of the servant is His accepting the servant's obedience, praising him and rewarding him. He records Mujahid glossing mashkur as maqbul, accepted, and says the meanings are close, since when He accepts a deed He thanks it, and when He thanks it He rewards it abundantly. Ibn Kathir says it is spoken to them as honour and kindness, citing 69:24 and 7:43, and explains: Allah rewarded you for the little with much.",
            "bn": "আল্লাহর পক্ষ থেকে এই কদরের মানে কী, কুরতুবী তা স্পষ্ট করেন: বান্দার প্রতি তাঁর শোকর মানে বান্দার আনুগত্য কবুল করা, তার প্রশংসা করা আর তাকে প্রতিদান দেওয়া। তিনি মুজাহিদের ব্যাখ্যা আনেন: মাশকূর মানে মাকবূল, কবুল করা। কুরতুবী বলেন, অর্থ দুটি কাছাকাছি। কারণ তিনি কোনো আমল কবুল করলে তার কদর করেন, আর কদর করলে প্রচুর প্রতিদান দেন। ইবন কাসীর বলেন, তাদের সম্মান ও অনুগ্রহ দেখাতেই এ কথা বলা হবে। তিনি ৬৯:২৪ ও ৭:৪৩ উদ্ধৃত করেন, আর ব্যাখ্যা দেন: আল্লাহ তোমাদের অল্পের বিনিময়ে অনেক দিয়েছেন।"
          },
          {
            "en": "Al-Qurtubi also carries here a report from Ibn 'Umar about an Abyssinian man who wept until he died on hearing this surah; Ibn Kathir, giving it from at-Tabarani under 76:20, calls it very strange, so nothing is built on it. What any reader can check is the vocabulary. In 76:9 the righteous told people they wanted from them neither jaza' nor shukur; 76:22 gives them jaza' and calls their effort mashkur, from the root of shukur. The surah then turns to the Prophet ﷺ: patience in 76:24, his Lord's name morning and evening in 76:25.",
            "bn": "কুরতুবী এখানে ইবন উমর থেকে একটি বর্ণনাও আনেন: এক হাবশী ব্যক্তি এই সূরা শুনে কাঁদতে কাঁদতে মারা গিয়েছিলেন। ইবন কাসীর ৭৬:২০ আয়াতের আলোচনায় তাবারানী থেকে এটি এনে একে খুবই গরীব, অর্থাৎ অত্যন্ত অপরিচিত বলেছেন। তাই এর উপর কিছু দাঁড় করানো হলো না। তবে শব্দগুলো যে কেউ নিজে মিলিয়ে দেখতে পারেন। ৭৬:৯ আয়াতে নেককাররা মানুষকে বলেছিল, তোমাদের কাছে আমরা জাযাও চাই না, শুকূরও না। ৭৬:২২ তাদের দেয় জাযা, আর তাদের চেষ্টাকে বলে মাশকূর, যা শুকূরেরই ধাতু থেকে। এরপর সূরা ফেরে নবী ﷺ-এর দিকে: ৭৬:২৪ আয়াতে ধৈর্য, ৭৬:২৫ আয়াতে সকাল-সন্ধ্যায় রবের নাম।"
          }
        ]
      }
    ]
  },
  "76:25": {
    "sections": [
      {
        "h": {
          "en": "After the Heavy Command",
          "bn": "ভারী নির্দেশের ঠিক পরে"
        },
        "p": [
          {
            "en": "The surah has just finished describing the garden, the silver bracelets and the purifying drink, and the word of thanks for an effort accepted. Then it turns to one man. In 76:23 Allah reminds His Messenger ﷺ that it is He who sent the Qur'an down to him in stages. In 76:24 come two commands: be patient for the decision of your Lord, and do not obey a sinner or an ungrateful one among them. This verse follows, joined by a simple and: wa-dhkur, and mention.",
            "bn": "সূরাটি এইমাত্র জান্নাতের বর্ণনা শেষ করেছে: রুপার কঙ্কণ, পবিত্র পানীয়, আর কবুল হওয়া চেষ্টার জন্য কৃতজ্ঞতার কথা। এবার কথা ফেরে একজন মানুষের দিকে। ৭৬:২৩ আয়াতে আল্লাহ তাঁর রাসূল ﷺ-কে মনে করিয়ে দেন, ধাপে ধাপে কুরআন তিনিই তাঁর উপর নাজিল করেছেন। ৭৬:২৪ আয়াতে আসে দুটি নির্দেশ: রবের ফয়সালার জন্য ধৈর্য ধরুন, আর তাদের মধ্যে কোনো পাপাচারী বা অকৃতজ্ঞের আনুগত্য করবেন না। এরপর আমাদের আয়াত, জোড়া লেগেছে ছোট্ট একটি 'ওয়া' দিয়ে: ওয়াযকুর, আর স্মরণ করুন।"
          },
          {
            "en": "The Muyassar reads the two verses as one instruction. Be patient with your Lord's decree of what happens and accept it, it says, and carry on with His religious ruling; do not obey anyone among the idolaters who is sunk in his desires or extreme in disbelief and misguidance; and keep up the remembrance of your Lord's name and calling on Him at the start of the day and at its end. In that reading, the verse is the third part of one answer to pressure, not a separate topic.",
            "bn": "মুয়াসসার দুটি আয়াতকে পড়ে একটিমাত্র নির্দেশ হিসেবে। তার ভাষ্যে: যা ঘটে, রবের সেই তাকদীরি ফয়সালায় ধৈর্য ধরুন আর তা মেনে নিন; তাঁর দ্বীনি বিধানের উপর চলতে থাকুন। মুশরিকদের মধ্যে যে প্রবৃত্তিতে ডুবে আছে, বা কুফর ও গোমরাহিতে সীমা ছাড়িয়েছে, তার কথা মানবেন না। আর দিনের শুরুতে ও শেষে নিয়মিত রবের নামের জিকির ও তাঁর কাছে দোয়া চালিয়ে যান। এ পাঠে আয়াতটি আলাদা কোনো প্রসঙ্গ নয়। চাপের মুখে দেওয়া একই জবাবের তৃতীয় অংশ।"
          },
          {
            "en": "Ibn Kathir glosses the patience as: just as you have been honoured by what was revealed to you, be patient with His decree and know that He will manage your affairs well. Ma'arif al-Qur'an says the remembrance and worship that follow will serve as a remedy for the persecution. The sinner and the ungrateful in 76:24 are the Prophet's opponents in that setting. The verses describe them as the text describes them, and license nothing against any living person or community.",
            "bn": "ধৈর্যের ব্যাখ্যায় ইবন কাসীর বলেন: আপনার উপর যা নাজিল হয়েছে তা দিয়ে যেমন আপনাকে সম্মানিত করা হয়েছে, তেমনি তাঁর ফয়সালায় ধৈর্য ধরুন, আর জেনে রাখুন তিনি আপনার কাজ সুন্দরভাবে সামলে দেবেন। মাআরিফুল কুরআন বলে, এরপর যে জিকির আর ইবাদতের কথা আসে, তা নির্যাতনের ওষুধ হয়ে কাজ করবে। ৭৬:২৪ আয়াতের পাপাচারী ও অকৃতজ্ঞ হলো সেই প্রেক্ষাপটে নবী ﷺ-এর বিরোধীরা। আয়াতগুলো তাদের সেভাবেই বর্ণনা করে যেভাবে পাঠে আছে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এগুলো দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Edges of Daylight",
          "bn": "দিনের আলোর দুই কিনারা"
        },
        "p": [
          {
            "en": "The verse names its times with two words, bukratan and asilan, and the commentators gloss them by the edges of the day rather than by any hour. Ibn Kathir, in the Arabic, writes only: that is, the first part of the day and its last. The abridged English of his commentary says the same, at the beginning of the day and at its end. As-Sa'di uses the identical pair of phrases, and so does the Muyassar. Morning and evening here mean the day's two borders.",
            "bn": "আয়াতটি সময় বলে দেয় দুটি শব্দে: বুকরাতান ও আসীলান। তাফসীরকারেরা এগুলোর ব্যাখ্যা দেন দিনের প্রান্ত দিয়ে, ঘড়ির কোনো নির্দিষ্ট ঘণ্টা দিয়ে নয়। আরবি তাফসীরে ইবন কাসীর লেখেন শুধু এটুকু: অর্থাৎ দিনের প্রথম ভাগ আর শেষ ভাগ। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি রূপও একই কথা বলে, দিনের শুরুতে আর শেষে। সা'দী ঠিক এই জোড়া শব্দই ব্যবহার করেন, মুয়াসসারও তাই। এখানে সকাল আর সন্ধ্যা মানে দিনের দুই সীমানা।"
          },
          {
            "en": "Al-Qurtubi pauses on the second word. The plural of asil, he says, is asa'il and also usul, on the pattern of safa'in and sufun for ships, and asa'il is a plural of a plural. He quotes two lines of poetry to show both forms in use, one of them about a house whose people the poet honours and in whose shade he sits in the late afternoons. Then he says the subject was covered in full at the close of Surat al-A'raf, and does not repeat it here.",
            "bn": "কুরতুবী দ্বিতীয় শব্দটিতে একটু থামেন। তিনি বলেন, আসীলের বহুবচন আসাইল, আবার উসুলও হয়, যেমন জাহাজ অর্থে সাফাইন ও সুফুন। আর আসাইল হলো বহুবচনের বহুবচন। দুটি রূপই যে চালু ছিল, তা দেখাতে তিনি কবিতার দুটি পঙ্‌ক্তি তুলে ধরেন। তার একটিতে কবি এমন এক ঘরের কথা বলেন, যার লোকদের তিনি সম্মান করেন আর যার ছায়ায় বিকেলবেলা বসে থাকেন। তারপর তিনি জানান, সূরা আল-আ'রাফের শেষে বিষয়টি পুরোপুরি আলোচনা হয়ে গেছে, তাই এখানে আর পুনরাবৃত্তি করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Prayers, by Whose Count",
          "bn": "কোন নামাজ, কার হিসাবে"
        },
        "p": [
          {
            "en": "Two of the commentators read the mention as prayer and attach it to particular prayers. At-Tabari reports from Ibn Zayd, through Yunus and Ibn Wahb: bukratan is the morning prayer, salat as-subh, which is Fajr; and asilan is the Zuhr prayer, which Ibn Zayd calls the asil prayer. In his reading each edge of the day holds one prayer. At-Tabari's own words on this verse are not in the passage consulted; what it carries for 76:25 is this report.",
            "bn": "তাফসীরকারদের মধ্যে দুজন এই স্মরণকে নামাজ হিসেবে পড়েন এবং নির্দিষ্ট নামাজের সঙ্গে মিলিয়ে দেন। তাবারী ইউনুস ও ইবন ওয়াহবের সূত্রে ইবন যায়দ থেকে বর্ণনা করেন: বুকরাতান মানে সকালের নামাজ, সালাতুস সুবহ, অর্থাৎ ফজর। আর আসীলান মানে যোহরের নামাজ, ইবন যায়দ যাকে বলেন আসীলের নামাজ। তাঁর পাঠে দিনের প্রতিটি প্রান্তে একটি করে নামাজ। এ আয়াত নিয়ে তাবারীর নিজের কোনো ব্যাখ্যা পাওয়া অংশে নেই; ৭৬:২৫ সম্পর্কে সেখানে আছে এই বর্ণনাটুকুই।"
          },
          {
            "en": "Al-Qurtubi opens with a paraphrase: that is, pray to your Lord at the start of the day and at its end. At its start, he says, is the morning prayer; at its end, the Zuhr and the 'Asr. So the two agree on bukratan, the dawn prayer, and differ on asilan. Ibn Zayd names one prayer for it, Zuhr; al-Qurtubi names two, Zuhr and 'Asr. Both readings are reported here as they stand, and the article does not choose between them.",
            "bn": "কুরতুবী শুরু করেন এক বাক্যের ব্যাখ্যা দিয়ে: অর্থাৎ দিনের শুরুতে আর শেষে আপনার রবের জন্য নামাজ পড়ুন। তিনি বলেন, শুরুতে আছে সকালের নামাজ, আর শেষে যোহর ও আসর। তাহলে বুকরাতান নিয়ে দুজন একমত, এটা ভোরের নামাজ। মতভেদ আসীলান নিয়ে। ইবন যায়দ এর জন্য একটি নামাজের নাম বলেন, যোহর। কুরতুবী বলেন দুটি নামাজের কথা, যোহর ও আসর। দুটি মতই এখানে যেমন আছে তেমন রাখা হলো, কোনোটিকে বেছে নেওয়া হচ্ছে না।"
          },
          {
            "en": "Al-Qurtubi carries the scheme into the next verse. And of the night prostrate to Him means Maghrib and the later 'Isha; and glorify Him a long night means voluntary prayer by night. He closes with the words: Ibn Habib said it, and later adds that Ibn Habib's view is good. Read across the two verses, his scheme places the five prayers and the night's voluntary prayer. Ibn Zayd, as at-Tabari reports him, reads the night verse another way, taken up below.",
            "bn": "কুরতুবী এই হিসাব পরের আয়াতেও টেনে নেন। 'আর রাতের কিছু অংশে তাঁর জন্য সিজদা করুন' মানে মাগরিব ও শেষের ইশা। 'আর রাতের দীর্ঘ সময় তাঁর তাসবীহ করুন' মানে রাতের নফল নামাজ। শেষে তিনি লেখেন: এটি ইবন হাবীবের কথা। পরে যোগ করেন, ইবন হাবীবের মতটি উত্তম। দুই আয়াত মিলিয়ে পড়লে তাঁর হিসাবে পাঁচ ওয়াক্ত নামাজ আর রাতের নফল, সবই জায়গা পেয়ে যায়। তাবারীর বর্ণনায় ইবন যায়দ রাতের আয়াতটি পড়েন অন্যভাবে, সে কথা সামনে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer, Remembrance, or Both",
          "bn": "নামাজ, জিকির, নাকি দুটোই"
        },
        "p": [
          {
            "en": "Not every commentator makes the mention a prayer. The Muyassar says: keep up the remembrance of your Lord's name and calling on Him, at the start of the day and its end, with no prayer named. As-Sa'di holds the two together. After glossing the times, he says that into the command enter the prescribed prayers and the voluntary prayers that follow them, and also remembrance, tasbih, tahlil and takbir at those times: glorifying Allah, declaring there is no god but He, and proclaiming Him greatest.",
            "bn": "সব তাফসীরকার এই স্মরণকে নামাজ বানান না। মুয়াসসার বলে: দিনের শুরুতে ও শেষে নিয়মিত রবের নামের জিকির আর তাঁর কাছে দোয়া চালিয়ে যান। কোনো নামাজের নাম সেখানে নেই। সা'দী দুটি দিককেই একসঙ্গে ধরেন। সময়ের ব্যাখ্যা দেওয়ার পর তিনি বলেন, এই নির্দেশের ভেতরে পড়ে ফরজ নামাজ আর তার সঙ্গের নফল, আর সেই সময়গুলোর জিকির, তাসবীহ, তাহলীল ও তাকবীর। অর্থাৎ সুবহানাল্লাহ বলা, আল্লাহ ছাড়া কোনো ইলাহ নেই বলা, আর আল্লাহু আকবার বলা।"
          },
          {
            "en": "Al-Qurtubi's notes on the next verse record the same division. Ibn Abbas and Sufyan, he reports, said that every tasbih in the Qur'an is prayer. Another view, given without a name, says it is remembrance in general, whether inside prayer or outside it. Ma'arif al-Qur'an has both in one line: the Prophet ﷺ is commanded to pronounce the name of Allah and to worship Him day and night. Ibn Kathir, for his part, names no act at all for this verse, only the two times.",
            "bn": "পরের আয়াতের আলোচনায় কুরতুবী একই ভাগাভাগি তুলে ধরেন। তাঁর বর্ণনায় ইবন আব্বাস (রাঃ) ও সুফিয়ান বলেছেন, কুরআনে যেখানেই তাসবীহ, সেখানেই তা নামাজ। আরেকটি মত, কারও নাম ছাড়া, বলে এটা সাধারণ জিকির, নামাজের ভেতরে হোক বা বাইরে। মাআরিফুল কুরআন এক বাক্যেই দুটো রাখে: নবী ﷺ-কে আদেশ দেওয়া হয়েছে আল্লাহর নাম উচ্চারণ করতে আর দিনরাত তাঁর ইবাদত করতে। ইবন কাসীর এ আয়াতে কোনো আমলের নামই বলেন না, শুধু দুটি সময়ের কথা বলেন।"
          },
          {
            "en": "So the readings run along a line. For Ibn Zayd and al-Qurtubi the mention is set prayer at set times. For the Muyassar it is remembrance and supplication. As-Sa'di and Ma'arif al-Qur'an include both. None of these texts says the other readings are wrong, and nothing in them forces a choice. The wording itself is the mention of the name, ism, of your Lord, the same rabbika whose decision the Prophet ﷺ was told just a verse earlier to wait for with patience.",
            "bn": "তাহলে ব্যাখ্যাগুলো সাজানো যায় এক সারিতে। ইবন যায়দ ও কুরতুবীর কাছে এ স্মরণ মানে নির্দিষ্ট সময়ের নির্দিষ্ট নামাজ। মুয়াসসারের কাছে জিকির আর দোয়া। সা'দী ও মাআরিফুল কুরআন দুটোকেই ধরেন। যে পাঠগুলো হাতে আছে, তার কোনোটিই অন্য মতকে ভুল বলে না, বেছে নিতেও বাধ্য করে না। আয়াতের নিজের শব্দ হলো রবের নাম, ইসম, স্মরণ করা। এ সেই রাব্বিকা, যাঁর ফয়সালার জন্য ঠিক আগের আয়াতে নবী ﷺ-কে ধৈর্য ধরে অপেক্ষা করতে বলা হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Prostration Through the Night",
          "bn": "রাতভর সিজদার আহ্বান"
        },
        "p": [
          {
            "en": "The next verse, 76:26, completes the day: and during the night prostrate to Him, and glorify Him a long night. At-Tabari's gloss is direct. Prostrate to Him in your prayer, he says, and glorify Him a long night, meaning most of the night, as Allah says elsewhere, and he quotes 73:2 to 73:4: stand the night except a little, half of it, or reduce from it a little, or add to it. He notes that the people of interpretation said the same, and reports Ibn Abbas: it means the prayer and the tasbih.",
            "bn": "পরের আয়াত, ৭৬:২৬, দিনটাকে পূর্ণ করে: আর রাতের কিছু অংশে তাঁর জন্য সিজদা করুন, আর রাতের দীর্ঘ সময় তাঁর তাসবীহ করুন। তাবারীর ব্যাখ্যা সরাসরি। তিনি বলেন, নামাজে তাঁর জন্য সিজদা করুন, আর দীর্ঘ রাত তাসবীহ করুন, মানে রাতের বেশির ভাগ সময়। এর সমর্থনে তিনি ৭৩:২ থেকে ৭৩:৪ আয়াত তুলে আনেন: অল্প কিছু অংশ বাদে রাতে দাঁড়ান, অর্ধেক রাত, বা তার চেয়ে একটু কম, বা একটু বেশি। তিনি জানান, ব্যাখ্যাকারেরা এমনটাই বলেছেন, আর ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: এর মানে নামাজ ও তাসবীহ।"
          },
          {
            "en": "Ibn Kathir, in the abridged English, sets the night verse beside 17:79: and in some parts of the night offer the prayer with it as an additional prayer for you; it may be that your Lord will raise you to a praised station. He also sets it beside 73:1 to 73:4, the address to the man wrapped in garments, told to stand the night and recite the Qur'an in measured tones. Both commentators, then, read the night verse alongside passages spoken to the Prophet ﷺ about his own night prayer.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি রূপ রাতের আয়াতটিকে রাখে ১৭:৭৯ আয়াতের পাশে: রাতের কিছু অংশে কুরআন নিয়ে নামাজে দাঁড়ান, এটা আপনার জন্য অতিরিক্ত। আশা করা যায় আপনার রব আপনাকে প্রশংসিত স্থানে পৌঁছে দেবেন। তিনি একে রাখেন ৭৩:১ থেকে ৭৩:৪ আয়াতের পাশেও, যেখানে চাদর জড়ানো মানুষটিকে রাতে দাঁড়াতে আর থেমে থেমে কুরআন পড়তে বলা হয়েছে। দুই তাফসীরকারই তাহলে রাতের আয়াতটি পড়েন এমন সব আয়াতের সঙ্গে মিলিয়ে, যেগুলো নবী ﷺ-কে তাঁর নিজের রাতের নামাজ নিয়ে বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "From Duty to Voluntary",
          "bn": "ফরজ থেকে নফলের পথে"
        },
        "p": [
          {
            "en": "Ibn Zayd, in at-Tabari's report, says of the night verse: this was the first thing to be made obligatory. He recited 73:1 to 73:3, then 73:20: your Lord knows that you stand nearly two-thirds of the night, and half of it, and a third of it, as far as so recite what is easy of the Qur'an. Then he said: this was removed from the Messenger of Allah ﷺ and from the people, and He made it voluntary, saying in 17:79, as an additional prayer for you.",
            "bn": "তাবারীর বর্ণনায় ইবন যায়দ রাতের আয়াতটি সম্পর্কে বলেন: এটাই ছিল সবার আগে ফরজ হওয়া বিধান। তিনি তিলাওয়াত করেন ৭৩:১ থেকে ৭৩:৩ আয়াত, তারপর ৭৩:২০ আয়াত: আপনার রব জানেন, আপনি রাতের প্রায় দুই-তৃতীয়াংশ, কখনো অর্ধেক, কখনো এক-তৃতীয়াংশ দাঁড়িয়ে থাকেন। পড়েন 'কাজেই কুরআনের যতটুকু সহজ ততটুকু পড়ো' পর্যন্ত। তারপর বলেন: আল্লাহর রাসূল ﷺ ও মানুষের উপর থেকে এটা তুলে নেওয়া হলো, আর তিনি একে নফল করে দিলেন। এর দলিল ১৭:৭৯ আয়াত: আপনার জন্য অতিরিক্ত।"
          },
          {
            "en": "Al-Qurtubi lists the views on glorify Him a long night without settling all of them. Ibn Zayd and others say it was abrogated by the five daily prayers. Another view says it is a recommendation. Another says it is particular to the Prophet ﷺ. Al-Qurtubi refers the reader to his discussion in Surat al-Muzzammil, and judges Ibn Habib's reading, voluntary prayer by night, to be good. These are attributed positions; the article itself makes no ruling on the night prayer's status.",
            "bn": "'রাতের দীর্ঘ সময় তাঁর তাসবীহ করুন' নিয়ে কুরতুবী কয়েকটি মত তুলে ধরেন, সবগুলোর নিষ্পত্তি করেন না। ইবন যায়দ ও অন্যরা বলেন, পাঁচ ওয়াক্ত নামাজ এসে এ বিধান রহিত করেছে। আরেক মত বলে, এটা মুস্তাহাব পর্যায়ের নির্দেশ। আরেক মতে, এটা শুধু নবী ﷺ-এর জন্য নির্দিষ্ট। কুরতুবী পাঠককে সূরা আল-মুযযাম্মিলের আলোচনায় ফেরত পাঠান, আর ইবন হাবীবের ব্যাখ্যা, অর্থাৎ রাতের নফল নামাজ, উত্তম বলে মত দেন। এগুলো যার যার নামে বলা মত। রাতের নামাজের বিধান নিয়ে এ লেখা নিজে কোনো রায় দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken First to Him",
          "bn": "কথাটা প্রথমে তাঁকেই বলা"
        },
        "p": [
          {
            "en": "The commentators read the address as the Prophet's own. Ibn Kathir frames the passage as Allah reminding His Messenger ﷺ of the Qur'an and commanding him to be patient and to remember. Ma'arif al-Qur'an lists the revelation, and then this remembrance and night worship, among the special favours given to the Prophet ﷺ, and calls the remembrance a remedy for what his opponents were doing to him. None of the commentaries consulted here attaches a hadith to this verse or gives an occasion of revelation for it, and this article cites none.",
            "bn": "তাফসীরকারেরা সম্বোধনটিকে নবী ﷺ-এর নিজের প্রতি বলেই পড়েন। ইবন কাসীর অংশটির পরিচয় দেন এভাবে: আল্লাহ তাঁর রাসূল ﷺ-কে কুরআনের নিয়ামতের কথা মনে করিয়ে দিচ্ছেন, ধৈর্য ধরতে আর স্মরণ করতে বলছেন। মাআরিফুল কুরআন ওহি নাজিলকে, তারপর এই জিকির ও রাতের ইবাদতকে, নবী ﷺ-কে দেওয়া বিশেষ নিয়ামতের তালিকায় রাখে। বিরোধীরা তাঁর সঙ্গে যা করছিল, এ জিকিরকে বলে তারই ওষুধ। হাতে থাকা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস জোড়ে না, নাজিলের কোনো উপলক্ষও বলে না। এ লেখাও তাই কোনো হাদিস উদ্ধৃত করছে না।"
          },
          {
            "en": "How far it reaches beyond him, they do not say with a single voice. In Ibn Zayd's report the night duty was lifted from the Messenger ﷺ and from the people, so in his account the people had carried it too. Al-Qurtubi and as-Sa'di gloss the day verse by the prescribed prayers, acts that are not his alone, though neither says here that the command itself passes to others. Al-Qurtubi also records the view that the long night glorification is particular to the Prophet ﷺ. The article goes no further than they do.",
            "bn": "তাঁর বাইরে অন্যদের পর্যন্ত কথাটা কতদূর যায়, এ নিয়ে তাঁরা এক সুরে কথা বলেন না। ইবন যায়দের বর্ণনায় রাতের দায়িত্ব রাসূল ﷺ ও মানুষ, দুই পক্ষের উপর থেকেই তুলে নেওয়া হয়েছিল। তাঁর বর্ণনা অনুযায়ী তাহলে মানুষও সে দায়িত্ব বহন করত। কুরতুবী ও সা'দী দিনের আয়াতটি ব্যাখ্যা করেন ফরজ নামাজ দিয়ে, যা শুধু তাঁর একার আমল নয়। তবে এখানে তাঁদের কেউই বলেন না যে নির্দেশটি নিজেই অন্যদের উপর বর্তায়। কুরতুবী এ মতও উল্লেখ করেন যে রাতের দীর্ঘ তাসবীহ শুধু নবী ﷺ-এর জন্য নির্দিষ্ট। তাঁরা যেখানে থামেন, এ লেখাও সেখানেই থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name at Both Borders",
          "bn": "দুই সীমানায় রবের নাম"
        },
        "p": [
          {
            "en": "Notice what the five words leave out. They promise no quick relief and give no instruction about the opponents; that was settled in 76:24. They give an order of life instead: the revelation first, then patience, then refusing to obey, then the Lord's name at the day's two borders and prostration in the night. The Muyassar's verb for it is keep up, dawim, which is not a single act but a habit. Ma'arif al-Qur'an calls the habit a remedy, given to a man under pressure.",
            "bn": "লক্ষ করুন, পাঁচটি শব্দ কী বাদ রাখে। দ্রুত মুক্তির কোনো প্রতিশ্রুতি নেই, বিরোধীদের নিয়েও কোনো নির্দেশ নেই, সে কথা ৭৬:২৪ আয়াতেই মীমাংসা হয়ে গেছে। তার বদলে আসে জীবনের একটা ক্রম: আগে ওহি, তারপর ধৈর্য, তারপর আনুগত্যে অস্বীকৃতি, তারপর দিনের দুই সীমানায় রবের নাম আর রাতে সিজদা। মুয়াসসার এর জন্য যে ক্রিয়া বেছে নেয় তা হলো দাওয়িম, নিয়মিত চালিয়ে যাও। এ কোনো এক দফার কাজ নয়, অভ্যাস। মাআরিফুল কুরআন এই অভ্যাসকে বলে ওষুধ, চাপের মধ্যে থাকা একজন মানুষকে দেওয়া।"
          },
          {
            "en": "Whether the mention is Fajr at dawn with Zuhr alone or Zuhr and 'Asr at the day's end, or remembrance and supplication, or all of these, every reading consulted here puts the name of the Lord at the edges of the day, where the day is opened and closed. Without going past the commentators, a reader can at least look at the edges of his or her own day, and ask what is placed there, and whose name is spoken first when the morning begins and last when the light goes.",
            "bn": "এ স্মরণ ভোরের ফজর আর দিনশেষে শুধু যোহর হোক, বা যোহর ও আসর দুটোই হোক, বা জিকির ও দোয়া হোক, কিংবা সবগুলো একসঙ্গে, হাতে থাকা প্রতিটি ব্যাখ্যাই রবের নামকে রাখে দিনের কিনারায়, যেখানে দিন খোলে আর বন্ধ হয়। তাফসীরকারদের ছাড়িয়ে না গিয়েও একজন পাঠক অন্তত নিজের দিনের কিনারাগুলোর দিকে তাকাতে পারেন। সেখানে কী রাখা আছে? সকাল শুরু হলে প্রথম কার নাম মুখে আসে, আর আলো নিভে এলে শেষ নামটি কার?"
          }
        ]
      }
    ]
  }
});
