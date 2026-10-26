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
  "76:12-22": {
    "sections": [
      {
        "h": {
          "en": "The Price Is Named First",
          "bn": "দামের কথা আগে"
        },
        "p": [
          {
            "en": "Wa jazahum bima sabaru jannatan wa harira — and He rewarded them, for their patience, with a garden and silk. The passage opens with the payment and the reason for it in a single line, and everything down to 76:22 is that line unpacked. Bima sabaru states the cause plainly: what is being paid for is endurance, and the verses before have already said what was endured.",
            "bn": "ওয়া জাযাহুম বিমা সাবারূ জান্নাতাও ওয়া হারীরা: আর তাদের ধৈর্যের প্রতিদানে তিনি তাদের দিলেন জান্নাত ও রেশম। অনুচ্ছেদের শুরুতেই এক বাক্যে প্রতিদান আর তার কারণ, দুটোই বলা হয়েছে; ৭৬:২২ পর্যন্ত বাকি সবটুকু সেই বাক্যেরই বিস্তার। 'বিমা সাবারূ' কারণটা সোজাসুজি বলে দেয়: দাম দেওয়া হচ্ছে সবরের। আর কী সইতে হয়েছিল, আগের আয়াতগুলো তা আগেই বলে এসেছে।"
          },
          {
            "en": "76:7 describes them fulfilling vows and fearing a Day whose evil spreads wide. 76:8 has them giving food, over their own love for it, to a needy person, an orphan and a captive. Ibn Kathir prefers the reading in which the love is love of the food itself, and 3:92 says the same thing outright: you will not attain righteousness until you spend from what you love.",
            "bn": "৭৬:৭ আয়াতে তাদের বর্ণনা: তারা মানত পূরণ করে, আর ভয় করে এমন এক দিনকে, যার বিপদ চারদিকে ছড়িয়ে পড়বে। ৭৬:৮ আয়াতে তারা ভালোবাসা সত্ত্বেও খাবার খাওয়ায় মিসকীন, ইয়াতীম ও বন্দীকে। অ্যাপের বাংলা অনুবাদ 'আলা হুব্বিহি'-কে আল্লাহর প্রতি ভালোবাসা অর্থে পড়ে; ইবনে কাসীর প্রাধান্য দেন সেই ব্যাখ্যাকে, যেখানে ভালোবাসাটা খাবারেরই প্রতি। ৩:৯২ আয়াত কথাটা সরাসরি বলে: তোমরা যা ভালোবাস তা থেকে ব্যয় না করা পর্যন্ত কখনো প্রকৃত নেকি অর্জন করতে পারবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Two Words They Refused",
          "bn": "যে দুটি শব্দ তারা নিতে চায়নি"
        },
        "p": [
          {
            "en": "76:9 records what they said as they gave: we feed you only for the Face of Allah; we want from you neither jaza' nor shukur — neither repayment nor thanks. Hold those two words. 76:22, the last verse of the passage, is what they are told at the end: inna hadha kana lakum jaza'an wa kana sa'yukum mashkura — indeed this is a reward for you, and your effort has been thanked.",
            "bn": "দেওয়ার সময় তারা কী বলত, ৭৬:৯ আয়াত তা লিখে রেখেছে: আমরা কেবল আল্লাহর চেহারার (সন্তুষ্টির) জন্য তোমাদের খাওয়াই; তোমাদের কাছে আমরা 'জাযা' চাই না, 'শুকূর'ও চাই না, অর্থাৎ প্রতিদানও না, কৃতজ্ঞতাও না। শব্দ দুটি মনে রাখুন। অনুচ্ছেদের শেষ আয়াত ৭৬:২২-এ তাদের বলা হয়: 'ইন্না হাযা কানা লাকুম জাযাআও ওয়া কানা সা'ইউকুম মাশকূরা', নিশ্চয়ই এটা তোমাদের প্রতিদান, আর তোমাদের চেষ্টার শুকরিয়া জানানো হয়েছে।"
          },
          {
            "en": "The two things they declined to take from human beings are returned to them by name, from the only source that can give them without putting anyone in debt. That is the architecture of the whole passage, and it is why the reward reads as an answer rather than as a list. Everything between 76:12 and 76:22 sits inside that exchange.",
            "bn": "মানুষের কাছ থেকে যে দুটি জিনিস তারা নিতে চায়নি, ঠিক সেই দুটিই নাম ধরে তাদের ফিরিয়ে দেওয়া হলো। দিলেন একমাত্র তিনি, যিনি কাউকে ঋণী না করেই দিতে পারেন। গোটা অনুচ্ছেদ এই কাঠামোর উপরই দাঁড়িয়ে; এজন্যই প্রতিদানের বর্ণনা তালিকার মতো নয়, জবাবের মতো শোনায়। ৭৬:১২ থেকে ৭৬:২২ পর্যন্ত সবকিছু এই লেনদেনের ভেতরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Climate, Not a Landscape",
          "bn": "দৃশ্য নয়, আবহাওয়া"
        },
        "p": [
          {
            "en": "76:13 has them reclining on ara'ik, which Ibn Kathir describes as couches beneath curtained canopies, and then denies two things at once: they will see in it neither sun nor zamharir, neither burning heat nor biting cold. 76:14 brings the shade near and lowers the fruit — dhullilat qutufuha tadhlila. Mujahid says that if he stands it rises with him, and if he sits it comes down to him.",
            "bn": "৭৬:১৩ আয়াতে তারা হেলান দিয়ে বসে 'আরাইক'-এ। ইবনে কাসীরের বর্ণনায় এগুলো পর্দাঘেরা চাঁদোয়ার নিচে রাখা আসন। তারপর একসঙ্গে দুটি জিনিস নাকচ করা হয়: সেখানে তারা দেখবে না সূর্য, দেখবে না 'যামহারীর'; না জ্বালাপোড়া গরম, না হাড়কাঁপানো শীত। ৭৬:১৪ আয়াত ছায়াকে কাছে এনে দেয়, ফলগুলো নামিয়ে দেয়: 'যুল্লিলাত কুতূফুহা তাযলীলা'। মুজাহিদ বলেন, সে দাঁড়ালে ফল তার সঙ্গে উপরে ওঠে, বসলে তার কাছে নেমে আসে।"
          },
          {
            "en": "Nothing here is described by its scenery. It is described by the absence of effort and of extremes: no reaching, no weather, no waiting. For people whose distinguishing act was carrying food to someone else while they wanted it themselves, that is a precise reversal. The strain they took on has been taken off them again, item by item.",
            "bn": "এখানে কোনো কিছুর বর্ণনাই দৃশ্য দিয়ে নয়। বর্ণনা হচ্ছে যা নেই তা দিয়ে: পরিশ্রম নেই, কোনো চরম অবস্থা নেই। হাত বাড়াতে হয় না, আবহাওয়ার কষ্ট নেই, অপেক্ষা নেই। যাদের পরিচয়ই ছিল নিজে খেতে চেয়েও খাবারটা অন্যের কাছে পৌঁছে দেওয়া, তাদের জন্য এ একেবারে ঠিকঠাক উল্টো চিত্র। যে কষ্ট তারা নিজের কাঁধে নিয়েছিল, এক এক করে তা নামিয়ে নেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Served, and Measured",
          "bn": "পরিবেশন, মাপমতো"
        },
        "p": [
          {
            "en": "76:15 sends vessels of silver and cups round among them; 76:16 calls the cups qawarir min fiddah, which Ibn Abbas, Mujahid and al-Hasan al-Basri explain as the whiteness of silver with the transparency of glass. Then qaddaruha taqdira: the measure is exact. Ibn Abbas, Mujahid, Sa'id ibn Jubayr and Qatadah read it as filled to the drinker's thirst, no more and no less.",
            "bn": "৭৬:১৫ আয়াতে তাদের মাঝে ঘুরে ঘুরে পরিবেশন করা হয় রুপার পাত্র আর পানপাত্র। ৭৬:১৬ আয়াত সেই পানপাত্রগুলোকে বলে 'কাওয়ারীরা মিন ফিদ্দাহ'। ইবনে আব্বাস, মুজাহিদ ও হাসান আল-বসরী এর ব্যাখ্যা করেন: রুপার শুভ্রতা, সঙ্গে কাচের স্বচ্ছতা। তারপর 'কাদ্দারূহা তাকদীরা': মাপ একেবারে নিখুঁত। ইবনে আব্বাস, মুজাহিদ, সাঈদ ইবনে জুবাইর ও কাতাদাহ এর অর্থ করেন, পানকারীর তৃষ্ণা যতটুকু, ঠিক ততটুকু ভরা; বেশিও না, কমও না।"
          },
          {
            "en": "76:19 sends the servants: wildan mukhalladun, boys of unchanging youth, whom you would take for scattered pearls when you saw them dispersing. 76:20 turns to the onlooker — and when you look there, you see delight and a great dominion. The people who once served the poor are now the people served, and it is put as a scene that someone else walks in upon.",
            "bn": "৭৬:১৯ আয়াত পাঠায় সেবকদের: 'ওয়িলদানুম মুখাল্লাদূন', চিরকিশোর বালকেরা। তাদের চারদিকে ছড়িয়ে পড়তে দেখলে তুমি ভাববে, যেন মুক্তা ছড়িয়ে আছে। ৭৬:২০ আয়াত ফেরে দর্শকের দিকে: আর তুমি যখন সেখানে তাকাবে, দেখবে অফুরন্ত নিয়ামত আর বিশাল রাজত্ব। যারা একসময় গরিবদের সেবা করত, এখন তারাই সেবা পাচ্ছে। আর কথাটা বলা হয়েছে এমন এক দৃশ্য হিসেবে, যেখানে অন্য কেউ এসে দাঁড়িয়ে দেখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Cold, Then Warm, Then Clean",
          "bn": "শীতল, তারপর উষ্ণ, তারপর পবিত্র"
        },
        "p": [
          {
            "en": "There are three drinks in this surah and they are not the same. 76:5 mixes the cup of the righteous with kafur, camphor, which cools; 76:17 mixes it with zanjabil, ginger, which warms; Ibn Kathir notes the balance between the two. 76:18 names the spring the second comes from: Salsabil, so called, Mujahid says, for how easily and how strongly it runs.",
            "bn": "এই সূরায় তিনটি পানীয়ের কথা আছে, আর তিনটি এক নয়। ৭৬:৫ আয়াতে নেককারদের পানপাত্রে মেশানো হয় 'কাফূর', অর্থাৎ কর্পূর, যা শীতল করে। ৭৬:১৭ আয়াতে মেশানো হয় 'যানজাবীল', অর্থাৎ আদা, যা উষ্ণ করে। ইবনে কাসীর দুটির মাঝের ভারসাম্যের দিকে দৃষ্টি আকর্ষণ করেন। ৭৬:১৮ আয়াত দ্বিতীয় পানীয়টির ঝরনার নাম বলে: সালসাবীল। মুজাহিদ বলেন, এ নাম হয়েছে তার স্রোতের সহজ গতি আর প্রবল বেগের কারণে।"
          },
          {
            "en": "The third is different in kind. 76:21 ends: wa saqahum rabbuhum sharaban tahura — and their Lord gave them a purifying drink to drink. No servant carries this one, and the Giver is named. Nor does tahur describe a flavour: Ibn Kathir explains that it cleanses their insides of envy, rancour, hatred and whatever ugliness of character was left in them.",
            "bn": "তৃতীয়টি একেবারে অন্য জাতের। ৭৬:২১ আয়াত শেষ হয় এভাবে: 'ওয়া সাকাহুম রাব্বুহুম শারাবান তাহূরা', আর তাদের রব তাদের পান করালেন পবিত্রকারী পানীয়। এটা কোনো সেবক বয়ে আনে না, আর দাতার নাম স্পষ্ট বলা আছে। 'তাহূর' কোনো স্বাদের বর্ণনাও নয়। ইবনে কাসীর ব্যাখ্যা করেন, এই পানীয় তাদের ভেতর থেকে হিংসা, বিদ্বেষ, ঘৃণা আর চরিত্রের যত কদর্যতা বাকি ছিল, সব ধুয়ে পরিষ্কার করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Silver Bracelets and a Word of Thanks",
          "bn": "রুপার কঙ্কণ ও কৃতজ্ঞতার একটি শব্দ"
        },
        "p": [
          {
            "en": "76:21 dresses them in green sundus and istabraq — fine silk and heavy brocade — and adorns them with bracelets of silver. Ibn Kathir notes that this is the description given of al-abrar, the righteous, while 22:23 gives bracelets of gold and pearl. The passage holds its own register throughout: silver vessels, silver cups, silver bracelets, all of one piece.",
            "bn": "৭৬:২১ আয়াত তাদের পরায় সবুজ 'সুনদুস' ও 'ইস্তাবরাক', অর্থাৎ মিহি রেশম ও পুরু রেশম, আর সাজায় রুপার কঙ্কণে। ইবনে কাসীর লক্ষ করান, এ বর্ণনা 'আল-আবরার' তথা নেককারদের; অন্যদিকে ২২:২৩ আয়াতে আছে সোনা ও মুক্তার কঙ্কণ। অনুচ্ছেদটি শুরু থেকে শেষ পর্যন্ত নিজের সুর ধরে রাখে: রুপার পাত্র, রুপার পানপাত্র, রুপার কঙ্কণ, সবই এক সুতোয় গাঁথা।"
          },
          {
            "en": "The last word is the one to carry away. Sa'y is effort, the work of walking and striving; mashkur, from shukr, is a passive participle: thanked. The people who told the poor they wanted no thanks are thanked by Allah for what they did. If you are looking for something to do with this passage, 76:8 and 76:9 are the instruction, and all the rest of it is the answer.",
            "bn": "মনে রাখার মতো শব্দটি একেবারে শেষে। 'সা'ই' মানে চেষ্টা, হেঁটে চলা আর খেটে যাওয়ার কাজ। 'মাশকূর' এসেছে 'শুকর' থেকে, এটি কর্মবাচ্য রূপ (ইসমে মাফউল): যার শুকরিয়া জানানো হয়েছে। যারা গরিবদের বলেছিল যে তারা কোনো শুকরিয়া চায় না, তাদের কাজের জন্য আল্লাহ নিজে তাদের শুকরিয়া জানান। এই অনুচ্ছেদ থেকে কিছু আমল করতে চাইলে ৭৬:৮ আর ৭৬:৯ আয়াতই নির্দেশনা, বাকি সবটুকু তার জবাব।"
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
