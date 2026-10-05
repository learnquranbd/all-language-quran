/**
 * Tadabbur long-form articles — surah 80.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "80:7": {
    "sections": [
      {
        "h": {
          "en": "Four Words, Turned to Him",
          "bn": "চার শব্দে তাঁকেই সম্বোধন"
        },
        "p": [
          {
            "en": "Wa-ma 'alayka alla yazzakka: and what is upon you if he does not purify himself? The verse is four Arabic words, and the second of them carries the address. 'Alayka, upon you, is singular and turns to the Prophet ﷺ himself, continuing the speech that opens the surah. At-Tabari and al-Baghawi both write the third word out as an la, that not, so the clause concerns an outcome that fails to happen: a man not becoming pure, and how much of that is the Prophet's to bear.",
            "bn": "ওয়ামা আলাইকা আল্লা ইয়াযযাক্কা: সে পরিশুদ্ধ না হলে তোমার উপর কী দায়? আয়াতে আরবি শব্দ মোট চারটি, আর সম্বোধন বহন করছে দ্বিতীয় শব্দটি। আলাইকা মানে তোমার উপর। শব্দটি একবচন, সরাসরি নবী ﷺ-কে লক্ষ্য করে বলা, সূরার শুরু থেকে যে কথা চলছে তারই ধারাবাহিকতায়। তাবারী ও বাগাভী দুজনেই তৃতীয় শব্দটিকে ভেঙে লেখেন আন লা, অর্থাৎ যেন না। ফলে বাক্যটি এমন এক পরিণতির কথা বলে যা ঘটছে না: একজন মানুষ পরিশুদ্ধ হচ্ছে না। আর প্রশ্ন হলো, তার কতটুকু ভার নবী ﷺ-এর।"
          },
          {
            "en": "The verse completes a pair that begins in 80:5 and 80:6: as for him who considered himself free of need, to him you gave your attention. The pronoun in yazzakka points back to that same man. What follows in 80:8 turns to someone else entirely, so this verse stands at a hinge between two people. What it settles is narrow and exact. It answers who must account for the purity of a person who has decided that he needs nothing, and it answers before the passage moves on.",
            "bn": "৮০:৫ ও ৮০:৬ আয়াতে যে জোড় শুরু হয়েছিল, এ আয়াত তা পূর্ণ করে: যে নিজেকে অমুখাপেক্ষী ভাবল, তার দিকেই তুমি মনোযোগ দিলে। ইয়াযযাক্কা ক্রিয়ার সর্বনাম ফিরে যায় সেই মানুষটির দিকেই। ৮০:৮ আয়াতে কথা ঘুরে যায় সম্পূর্ণ আরেকজনের দিকে। তাই এ আয়াত দাঁড়িয়ে আছে দুজন মানুষের মাঝখানে, কবজার মতো। এর মীমাংসা সংকীর্ণ, কিন্তু নিখুঁত। যে লোক ঠিক করে নিয়েছে তার কিছুই দরকার নেই, তার পরিশুদ্ধির হিসাব কে দেবে, পরের প্রসঙ্গে যাওয়ার আগেই আয়াতটি সেই প্রশ্নের উত্তর দিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Question or Plain Denial",
          "bn": "প্রশ্ন, নাকি সরাসরি না"
        },
        "p": [
          {
            "en": "The commentators fetched here read the opening ma in two ways. At-Tabari takes it as a question: and what thing is upon you, he paraphrases, if he does not purify himself of his disbelief and so submit? The Muyassar, which comments on 80:5 to 80:7 together, asks the same question almost word for word, after describing a man who considered himself in no need of the Prophet's guidance while the Prophet ﷺ put himself in his way and listened closely to his words.",
            "bn": "এখানে যেসব তাফসীর দেখা হয়েছে, সেগুলো শুরুর মা শব্দটিকে দুইভাবে পড়ে। তাবারী একে প্রশ্ন ধরেন। তাঁর ব্যাখ্যায়: সে যদি নিজের কুফর থেকে পবিত্র হয়ে ইসলাম গ্রহণ না করে, তাতে তোমার উপর কী এমন দায়? মুয়াসসার ৮০:৫ থেকে ৮০:৭ পর্যন্ত একসঙ্গে ব্যাখ্যা করে, আর প্রায় হুবহু একই প্রশ্ন তোলে। তার আগে সে লোকটির বর্ণনা দেয় এভাবে: সে নিজেকে নবীর হেদায়েতের মুখাপেক্ষী মনে করেনি, অথচ নবী ﷺ তার দিকে এগিয়ে গেছেন আর মন দিয়ে তার কথা শুনেছেন।"
          },
          {
            "en": "Ibn Kathir reads the same words as a plain statement. In his Arabic: you are not held answerable for it if purification does not come about for him. The English abridgement puts it as you are not responsible for him if he does not attain purification. As-Sa'di agrees and spells out the consequence: it is not upon you that he does not purify himself, so if he does not, you will not be called to account for the evil he has done. The translations printed with this verse take the same line.",
            "bn": "ইবন কাসীর একই শব্দগুলোকে পড়েন সোজা বিবৃতি হিসেবে। তাঁর আরবি ভাষ্য: তার পরিশুদ্ধি না এলে এর জন্য তোমার কাছে কৈফিয়ত চাওয়া হবে না। ইংরেজি সংক্ষিপ্ত সংস্করণে কথাটা এমন: সে পরিশুদ্ধি অর্জন না করলে তার দায়িত্ব তোমার নয়। সা'দী এতে একমত, আর পরিণতিটাও খুলে বলেন: সে পরিশুদ্ধ না হলে সে দায় তোমার উপর নয়। কাজেই সে যদি পবিত্র না হয়, তার করা মন্দ কাজের হিসাব তোমার কাছে নেওয়া হবে না। এ আয়াতের সঙ্গে ছাপা অনুবাদগুলোও এই পথেই গেছে।"
          },
          {
            "en": "This is a difference of grammar more than of outcome. A question asking what is upon you, in this setting, expects the answer nothing; a statement that nothing is upon you gives that answer outright. Read either way, none of the commentators fetched for this verse places the man's refusal on the Prophet's account. What differs is the tone. The question invites the listener to reach the conclusion himself, while the statement hands it to him complete, and the translations printed here chose the statement.",
            "bn": "পার্থক্যটা যতটা ব্যাকরণের, ততটা ফলাফলের নয়। এ প্রেক্ষাপটে তোমার উপর কী দায়, এই প্রশ্নের প্রত্যাশিত উত্তর হলো: কিছুই না। আর তোমার উপর কোনো দায় নেই, এই বিবৃতি সে উত্তর সরাসরি দিয়ে দেয়। যেভাবেই পড়া হোক, এ আয়াতে দেখা কোনো তাফসীরকার লোকটির প্রত্যাখ্যানের দায় নবী ﷺ-এর ঘাড়ে চাপান না। তফাত শুধু সুরে। প্রশ্ন শ্রোতাকে নিজে সিদ্ধান্তে পৌঁছাতে ডাকে। বিবৃতি সিদ্ধান্তটা পুরোপুরি তার হাতে তুলে দেয়। এখানে ছাপা অনুবাদগুলো বেছে নিয়েছে বিবৃতির রূপ।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Beyond the Conveying",
          "bn": "পৌঁছে দেওয়ার বাইরে কিছু নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi frame the verse by what the Prophet ﷺ is charged with. Al-Qurtubi: if this disbeliever is not guided and does not believe, you are only a messenger, and upon you is nothing but the conveying. Al-Baghawi's gloss runs almost the same: he does not believe and is not guided, and upon you is only the conveying. Both turn the verse from a question about blame into a statement about office. The messenger's work is defined, and its edge is the delivery of the message.",
            "bn": "কুরতুবী ও বাগাভী আয়াতটিকে দেখেন নবী ﷺ-এর দায়িত্বের সীমা দিয়ে। কুরতুবী বলেন: এই কাফের যদি হেদায়েত না পায়, ঈমান না আনে, তবে তুমি তো কেবল একজন রাসূল, পৌঁছে দেওয়া ছাড়া তোমার উপর আর কিছু নেই। বাগাভীর ব্যাখ্যাও প্রায় একই: সে ঈমান আনে না, হেদায়েতও পায় না, আর তোমার উপর শুধু পৌঁছে দেওয়ার দায়িত্ব। দুজনেই আয়াতটিকে দোষের প্রশ্ন থেকে সরিয়ে দায়িত্বের বিবরণে নিয়ে যান। রাসূলের কাজের সীমা নির্ধারিত, আর সে সীমা হলো বার্তা পৌঁছে দেওয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an, commenting on 80:5 and 80:6 with this verse in view, says that those who turned away were being pursued in the hope that they would somehow become Muslims, 'while this is not your responsibility. If they do not embrace the faith, there will be no blame on you.' Its wording sits close to the bracketed English translation. Taken together, these readings describe a burden lifted rather than a fault found: what the listener does with the message is the listener's own affair.",
            "bn": "মাআরিফুল কুরআন ৮০:৫ ও ৮০:৬ আয়াতের আলোচনায়, এ আয়াতকে সামনে রেখে, বলে: যারা মুখ ফিরিয়ে নিয়েছে, তাদের পেছনে লেগে থাকা হচ্ছিল এই আশায় যে তারা কোনোভাবে মুসলমান হবে, 'অথচ এটা তোমার দায়িত্ব নয়। তারা ঈমান না আনলে তোমার উপর কোনো দোষ বর্তাবে না।' এ ভাষা ইংরেজি অনুবাদের বন্ধনীর কথার খুব কাছাকাছি। সব মিলিয়ে এই ব্যাখ্যাগুলো কোনো দোষ ধরে না, বরং একটা বোঝা নামিয়ে দেয়। বার্তা পেয়ে শ্রোতা কী করবে, সেটা শ্রোতার নিজের ব্যাপার।"
          }
        ]
      },
      {
        "h": {
          "en": "Pure of What, Exactly",
          "bn": "পবিত্রতা, কিসের থেকে"
        },
        "p": [
          {
            "en": "What would it mean for this man to yazzakka? The commentators fill the word in different ways. At-Tabari makes it purification from disbelief that issues in submission: that he purify himself of his disbelief and so become Muslim. The Muyassar keeps that sense. Al-Qurtubi and al-Baghawi render it as being guided and believing. Ibn Kathir's Arabic speaks simply of purification, zakah, coming about for him. In each, the purity in question is the purity of faith itself, the first step rather than a later refinement.",
            "bn": "এই লোকটির ইয়াযযাক্কা হওয়ার মানে কী? তাফসীরকারেরা শব্দটির ভেতরটা ভরাট করেন ভিন্ন ভিন্নভাবে। তাবারীর কাছে এ হলো কুফর থেকে পবিত্র হওয়া, যার পরিণতি আত্মসমর্পণ: সে নিজের কুফর থেকে পাক হয়ে মুসলিম হবে। মুয়াসসারও এই অর্থ ধরে রাখে। কুরতুবী ও বাগাভী এর মানে করেন হেদায়েত পাওয়া আর ঈমান আনা। ইবন কাসীরের আরবি ভাষ্যে কথাটা সাদামাটা: তার জন্য পরিশুদ্ধি, যাকাত, অর্জিত হওয়া। সবগুলো ব্যাখ্যাতেই এখানে পবিত্রতা মানে ঈমানের পবিত্রতা। এটা প্রথম ধাপ, পরের কোনো সূক্ষ্ম পরিমার্জন নয়।"
          },
          {
            "en": "The same word, in the same form, closes 80:3, where it is said of the blind man who came, and closes this verse, where it is said of the man who turned away. It is held up twice, first as a hope and then as a refusal. The surah thereby places two people side by side under a single measure, and the measure is not wealth, rank or influence. It is whether a person is willing to be purified, and that is the scale on which the passage weighs the encounter.",
            "bn": "হুবহু একই শব্দ, একই রূপে, ৮০:৩ আয়াতের শেষে আছে, যেখানে কথাটা বলা হয়েছে সেই অন্ধ মানুষটির সম্পর্কে, যিনি এসেছিলেন। আবার এ আয়াতের শেষেও আছে, যেখানে কথাটা মুখ ফিরিয়ে নেওয়া লোকটির সম্পর্কে। শব্দটি দুবার সামনে আসে, প্রথমবার আশা হয়ে, পরেরবার প্রত্যাখ্যান হয়ে। এভাবে সূরাটি দুজন মানুষকে পাশাপাশি দাঁড় করায় একই মাপকাঠিতে। সে মাপকাঠি সম্পদ, পদমর্যাদা বা প্রভাব নয়। মাপকাঠি হলো, মানুষটি পরিশুদ্ধ হতে রাজি কি না। এই পাল্লাতেই আয়াতগুলো ঘটনাটিকে ওজন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man Who Needed Nothing",
          "bn": "যে ভাবত তার কিছুই লাগবে না"
        },
        "p": [
          {
            "en": "Who was he? The abridged English Ibn Kathir reports from more than one of the commentators that the Messenger of Allah ﷺ was speaking with one of the great leaders of Quraysh, hoping he would accept Islam, when Ibn Umm Maktum (RA), an early Muslim, came and began asking him about something, pressing his request. The text fetched does not name that leader, and this article does not supply a name from elsewhere. At-Tabari speaks of his disbelief; al-Qurtubi calls him this disbeliever.",
            "bn": "লোকটি কে ছিল? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একাধিক তাফসীরকারের সূত্রে জানায়: আল্লাহর রাসূল ﷺ কুরাইশের বড় নেতাদের একজনের সঙ্গে কথা বলছিলেন, আশা করছিলেন সে ইসলাম গ্রহণ করবে। এমন সময় এলেন ইবনে উম্মে মাকতুম (রাঃ), যিনি একেবারে শুরুর দিকের মুসলিম। তিনি কোনো একটা বিষয়ে প্রশ্ন করতে লাগলেন, বারবার অনুনয় করে। যে লেখা দেখা হয়েছে, তাতে সেই নেতার নাম নেই। এ প্রবন্ধও অন্য কোথাও থেকে নাম জুড়ে দিচ্ছে না। তাবারী তার কুফরের কথা বলেন, আর কুরতুবী তাকে বলেন এই কাফের।"
          },
          {
            "en": "The commentators also describe him by his stance rather than his name. The Muyassar: he considered himself in no need of your guidance. As-Sa'di: the wealthy man who thought himself self-sufficient, who neither asks nor seeks a ruling, because he has no desire for good. Ma'arif al-Qur'an speaks of those who turn away from you and your religion. In their readings the word istaghna in 80:5 gathers two things, worldly sufficiency and a felt lack of need for guidance, and the verse answers the second.",
            "bn": "তাফসীরকারেরা তাকে চেনান নাম দিয়ে নয়, তার মনোভাব দিয়ে। মুয়াসসার বলে: সে নিজেকে তোমার হেদায়েতের মুখাপেক্ষী মনে করেনি। সা'দী বলেন: সে ধনী, নিজেকে স্বয়ংসম্পূর্ণ ভাবে, কিছু জিজ্ঞেস করে না, কোনো বিধানও জানতে চায় না, কারণ কল্যাণের প্রতি তার কোনো আগ্রহ নেই। মাআরিফুল কুরআন বলে তাদের কথা, যারা তোমার থেকে আর তোমার দ্বীন থেকে মুখ ফিরিয়ে নেয়। তাঁদের ব্যাখ্যায় ৮০:৫ আয়াতের ইসতাগনা শব্দে দুটি জিনিস মিশে আছে: দুনিয়াবি সচ্ছলতা, আর হেদায়েতের কোনো প্রয়োজন বোধ না করা। আয়াতটি জবাব দেয় দ্বিতীয়টির।"
          },
          {
            "en": "This needs saying plainly. The verse describes what the text describes: one man, at a single moment, who turned from guidance while it was being offered to him. It licenses nothing against any living person or community. It does not make wealth a mark of rejection, nor turn the rich, the powerful or the members of any tribe or people today into the man of 80:5. Whoever reads it that way has taken a verse about where attention belongs and made it a verdict the verse never gives.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। লেখায় যা আছে, আয়াত শুধু তারই বর্ণনা দেয়: একজন মানুষ, এক নির্দিষ্ট মুহূর্তে, হেদায়েত সামনে থাকা অবস্থায় যে মুখ ফিরিয়ে নিয়েছিল। এ আয়াত আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। ধনসম্পদকে প্রত্যাখ্যানের চিহ্ন বানায় না। আজকের ধনী, ক্ষমতাবান বা কোনো গোত্র কিংবা জাতির মানুষকে ৮০:৫ আয়াতের সেই লোক বানিয়ে দেয় না। কেউ এভাবে পড়লে, মনোযোগ কোথায় দেওয়া উচিত সে বিষয়ের একটি আয়াতকে সে এমন এক রায়ে পরিণত করল, যা আয়াত কখনো দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Aishah's Account, Graded",
          "bn": "আয়িশা (রাঃ)-এর বর্ণনা ও তার মান"
        },
        "p": [
          {
            "en": "At-Tirmidhi records, as hadith 3331, a narration from Aishah (RA): \"'He frowned and turned away' was revealed about Ibn Umm Maktum the blind man. He came to the Messenger of Allah saying: 'O Messenger of Allah! Guide me.' At that time, there was a revered man from the idolaters with the Messenger of Allah. So the Messenger of Allah turned away from him and faced the other man, saying: 'Do you think that there is something wrong with what I am saying?' He said: 'No.' So it was about that that it was revealed.\"",
            "bn": "তিরমিযী ৩৩৩১ নম্বরে আয়িশা (রাঃ)-এর এই বর্ণনা এনেছেন: \"'আবাসা ওয়া তাওয়াল্লা' নাযিল হয়েছিল অন্ধ ইবনে উম্মে মাকতুম সম্পর্কে। তিনি আল্লাহর রাসূলের কাছে এসে বলতে লাগলেন: 'হে আল্লাহর রাসূল! আমাকে পথ দেখান।' তখন আল্লাহর রাসূলের কাছে মুশরিকদের এক গণ্যমান্য ব্যক্তি ছিল। আল্লাহর রাসূল তাঁর দিক থেকে মুখ ফিরিয়ে অন্যজনের দিকে মনোযোগ দিচ্ছিলেন, আর বলছিলেন: 'আমি যা বলছি, তাতে কি কোনো সমস্যা দেখছ?' সে বলছিল: 'না।' এ বিষয়েই নাযিল হয়েছিল।\""
          },
          {
            "en": "At-Tirmidhi grades it hasan gharib. He adds that some narrated it from Hisham ibn Urwah from his father, saying that 'He frowned and turned away' was revealed about Ibn Umm Maktum, without mentioning Aishah. The narration concerns the opening of the surah and names no later verse, so it is not attached to this verse in particular. It also leaves the leader unnamed, calling him only a revered man from among the idolaters, which matches what the commentators fetched here gave.",
            "bn": "তিরমিযী একে হাসান গরীব বলেছেন। তিনি আরও জানান, কেউ কেউ হাদীসটি হিশাম ইবনে উরওয়া থেকে তাঁর পিতার সূত্রে বর্ণনা করেছেন। সেখানে বলা হয়েছে 'আবাসা ওয়া তাওয়াল্লা' নাযিল হয়েছে ইবনে উম্মে মাকতুম সম্পর্কে, কিন্তু আয়িশা (রাঃ)-এর নাম নেই। বর্ণনাটি সূরার শুরুর অংশ নিয়ে, পরের কোনো আয়াতের নাম তাতে নেই। তাই এটি বিশেষভাবে এ আয়াতের সঙ্গে যুক্ত নয়। সেই নেতার নামও এতে নেই, শুধু বলা হয়েছে মুশরিকদের এক গণ্যমান্য ব্যক্তি। এখানে দেখা তাফসীরগুলোর বক্তব্যের সঙ্গে এটি মিলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Certain Before the Supposed",
          "bn": "নিশ্চিত লাভ আগে, অনুমান পরে"
        },
        "p": [
          {
            "en": "As-Sa'di draws a rule from the passage. The benefit a seeker takes, he says, is the very purpose for which messengers are sent, preachers preach and reminders remind. Turning toward the man who came of his own accord, in need of it, is in his words the more fitting course and the required one. From this he takes what he calls a well-known principle: a known matter is not left for an imagined one, nor a benefit already secured for a benefit only supposed.",
            "bn": "সা'দী এ আয়াতগুলো থেকে একটি নীতি বের করেন। তাঁর মতে, জ্ঞানপ্রার্থী যে উপকার পায়, সেটাই রাসূল পাঠানোর, ওয়ায়েজদের ওয়াজের আর উপদেশদাতাদের উপদেশের আসল উদ্দেশ্য। যে মানুষ নিজে থেকে প্রয়োজন নিয়ে এসেছে, তার দিকে মনোযোগ দেওয়াই তাঁর ভাষায় বেশি মানানসই, এবং সেটাই করণীয়। এখান থেকে তিনি একটি প্রসিদ্ধ নীতির কথা বলেন: জানা বিষয় কাল্পনিক বিষয়ের জন্য ছাড়া যায় না, আর নিশ্চিত কল্যাণ ছাড়া যায় না অনুমিত কল্যাণের আশায়।"
          },
          {
            "en": "He closes with a practical instruction: attention should go to the seeker of knowledge who needs it and is eager for it, more than to others. Ibn Kathir, in the abridged English, draws a different rule from the same verses. Allah commands His Messenger not to single anyone out with the warning, but to warn equally the noble and the weak, the poor and the rich, the master and the slave, the men and the women, the young and the old; then Allah guides whomever He chooses to a straight path.",
            "bn": "শেষে তিনি একটি বাস্তব নির্দেশনা দেন: যে জ্ঞানপ্রার্থীর প্রয়োজন আছে আর আগ্রহও আছে, অন্যদের চেয়ে তার দিকে বেশি মনোযোগ দেওয়া উচিত। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একই আয়াতগুলো থেকে ভিন্ন একটি নিয়ম টানে। আল্লাহ তাঁর রাসূলকে আদেশ করছেন, সতর্কবাণীর জন্য কাউকে আলাদা করে বেছে নেবেন না। অভিজাত ও দুর্বল, গরিব ও ধনী, মনিব ও দাস, পুরুষ ও নারী, তরুণ ও বৃদ্ধ, সবাইকে সমানভাবে সতর্ক করবেন। তারপর আল্লাহ যাকে চান সরল পথে পরিচালিত করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an, on the surrounding verses, sets out a related principle for teachers and preachers. Faced at once with teaching a believer and guiding those outside the faith, it says, the first takes priority, and educating Muslims should not be delayed for the sake of the second. Ibn Kathir's wording stresses equality in the call; Ma'arif and as-Sa'di stress an order of attention. The texts do not set these against each other, but they place their weight differently, and both emphases are left standing here.",
            "bn": "আশেপাশের আয়াতগুলোর আলোচনায় মাআরিফুল কুরআন শিক্ষক ও দাঈদের জন্য কাছাকাছি একটি নীতি দেয়। একই সময়ে যদি একজন মুমিনকে শেখানো আর ঈমানের বাইরের মানুষকে পথ দেখানো, দুটো কাজ সামনে আসে, তবে প্রথমটি অগ্রাধিকার পাবে। দ্বিতীয়টির জন্য মুসলমানদের শিক্ষা পিছিয়ে দেওয়া ঠিক নয়। ইবন কাসীরের ভাষ্যে জোর দাওয়াতে সমতার উপর। মাআরিফ ও সা'দীর জোর মনোযোগের ক্রমের উপর। লেখাগুলো এ দুটিকে পরস্পরের বিরুদ্ধে দাঁড় করায় না, তবে ভার রাখে ভিন্ন জায়গায়। এখানে দুটো জোরই যেমন আছে তেমন রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Answerable for the Effort",
          "bn": "হিসাব চেষ্টার, ফলের নয়"
        },
        "p": [
          {
            "en": "A reader who carries no prophetic office still finds a line here worth keeping. Parents, teachers and friends who share what they believe to be good often carry the refusals of others as personal failures. The commentators fetched here locate the task of the Prophet ﷺ in conveying, and the hearer's response with the hearer. If that holds for the Messenger, it holds for anyone who passes the message on: answerable for how it is passed, and not for whether the heart receiving it opens.",
            "bn": "যাঁর কাঁধে নবুওয়াতের দায়িত্ব নেই, এমন পাঠকের জন্যও এখানে মনে রাখার মতো একটি সীমারেখা আছে। মা-বাবা, শিক্ষক, বন্ধু, যাঁরা ভালো মনে করে কিছু অন্যকে বলেন, তাঁরা প্রায়ই অন্যের প্রত্যাখ্যানকে নিজের ব্যর্থতা বলে বয়ে বেড়ান। এখানে দেখা তাফসীরগুলো নবী ﷺ-এর কাজ নির্ধারণ করে পৌঁছে দেওয়ায়, আর শ্রোতার সাড়া রাখে শ্রোতার কাছেই। রাসূলের বেলায় যদি এ কথা খাটে, তবে যে-ই বার্তাটি অন্যের কাছে নিয়ে যায়, তার বেলাতেও খাটে। সে জবাবদিহি করবে কীভাবে পৌঁছাল তার, যার কাছে পৌঁছাল তার অন্তর খুলল কি না তার নয়।"
          },
          {
            "en": "The verse also corrects where effort goes. The man who needed nothing received attention he did not seek, while someone else, described in 80:8 and the verses after it, came seeking. The passage then turns, in 80:11 and 80:12, to say that these verses are a reminder, and whoever wills may take heed. The choice to take heed belongs to the hearer. The duty to offer the reminder to all, and to place it first where it is sought, belongs to whoever carries it.",
            "bn": "চেষ্টা কোথায় যাবে, আয়াতটি সেটাও ঠিক করে দেয়। যার কিছুই দরকার ছিল না, সে এমন মনোযোগ পেল যা সে চায়নি। অথচ আরেকজন, যার বর্ণনা ৮০:৮ ও তার পরের আয়াতগুলোতে, এসেছিল খুঁজতে খুঁজতে। এরপর ৮০:১১ ও ৮০:১২ আয়াতে কথা ঘুরে যায়: এ আয়াতগুলো উপদেশ, যার ইচ্ছা সে তা গ্রহণ করবে। উপদেশ গ্রহণ করার সিদ্ধান্ত শ্রোতার। আর সবার কাছে উপদেশ পৌঁছে দেওয়া, যেখানে তা চাওয়া হচ্ছে সেখানে আগে পৌঁছানো, এই দায়িত্ব যে বহন করে তার।"
          }
        ]
      }
    ]
  },
  "80:24": {
    "sections": [
      {
        "h": {
          "en": "Four Words of Command",
          "bn": "চার শব্দের নির্দেশ"
        },
        "p": [
          {
            "en": "The command is four words long: falyanzuri al-insanu ila ta'amih. The verb carries the lam of the imperative in the third person, an order issued about somebody rather than to him — let man look. 86:5 opens with the identical two words, falyanzuri al-insanu, and it too runs to four; there what he is told to look at is the substance he was made from. Twice the Quran stops a person and points, and both times the thing pointed at is already in front of him.",
            "bn": "নির্দেশটি চার শব্দের: 'ফালইয়ানযুরিল ইনসানু ইলা তাআমিহ'। ক্রিয়াপদটি বহন করে তৃতীয় পুরুষের আদেশসূচক 'লাম' — অর্থাৎ কাউকে সরাসরি নয়, তার সম্পর্কে দেওয়া আদেশ: মানুষ দেখুক। 86:5 শুরু হয় ঠিক এই একই দুটি শব্দ দিয়ে — 'ফালইয়ানযুরিল ইনসানু' — আর সেটিও চার শব্দেরই; সেখানে তাকে দেখতে বলা হয় সেই উপাদানটি যা থেকে তাকে সৃষ্টি করা হয়েছে। কুরআন দুবার মানুষকে থামিয়ে আঙুল তোলে, আর দুবারই যেদিকে আঙুল ওঠে তা তার সামনেই আছে।"
          },
          {
            "en": "Nazar with the preposition ila is ordinarily the look of the eye, and that is part of the point, since the thing to be looked at is visible without instruments. But the commentators gloss what is actually wanted as i'tibar, drawing the lesson, because nobody learns anything from merely seeing bread. The order is not to inspect the food. It is to follow it backwards, and the verses that come next perform the following-back for anyone unsure where to begin.",
            "bn": "'ইলা' অব্যয়সহ 'নাযার' সাধারণত চোখের দেখা বোঝায়, আর সেটিও প্রসঙ্গেরই অংশ — কারণ যা দেখতে বলা হচ্ছে তা কোনো যন্ত্র ছাড়াই দৃশ্যমান। তবে মুফাসসিরগণ ব্যাখ্যা করেন, আসলে যা চাওয়া হচ্ছে তা হলো 'ই'তিবার' — শিক্ষা গ্রহণ; কারণ কেবল রুটি দেখে কেউ কিছু শেখে না। নির্দেশটি খাবার পরখ করার নয়। নির্দেশটি হলো তাকে পেছন দিকে অনুসরণ করা — আর পরের আয়াতগুলো সেই অনুসরণটি করে দেখায়, যাতে কোথা থেকে শুরু করতে হবে তা কারও অজানা না থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Came Just Before",
          "bn": "ঠিক আগে যা ছিল"
        },
        "p": [
          {
            "en": "The setting is severe. 80:17 curses man and exclaims at how great his denial is, and 80:18-22 answer by tracing him: from what thing did He create him — from a drop He created him and proportioned him, then eased the way for him, then caused him to die and gave him a grave, then when He wills He will raise him. 80:23 then delivers the charge: no, he has not accomplished what He commanded him. Only then comes the redirection to his food.",
            "bn": "প্রেক্ষাপটটি কঠোর। 80:17 মানুষকে অভিশাপ দেয় ও তার সত্য-প্রত্যাখ্যানের মাত্রা তুলে ধরে, আর 80:18-22 উত্তর দেয় তার পরিচয় ধরে ধরে: কোন জিনিস থেকে তিনি তাকে সৃষ্টি করলেন — এক ফোঁটা থেকে সৃষ্টি করে পরিমিত করলেন, তারপর তার পথ সহজ করলেন, তারপর তার মৃত্যু ঘটিয়ে কবরস্থ করলেন, তারপর যখন ইচ্ছে করবেন তাকে আবার উঠাবেন। এরপর 80:23 অভিযোগটি উচ্চারণ করে: না, তিনি তাকে যে নির্দেশ দিয়েছিলেন তা সে পূর্ণ করেনি। কেবল তখনই আসে খাদ্যের দিকে মোড় ফেরানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Verb Is His",
          "bn": "প্রতিটি ক্রিয়াপদই তাঁর"
        },
        "p": [
          {
            "en": "80:25-27 answer the look, and the answer is a run of first-person verbs. We poured down the water in a pouring; then We split the earth in a splitting; then We caused to grow in it. Man was told to look at his food, and the first thing the looking discloses is that every action involved in producing it belongs to Someone else. Nothing in the sequence is credited to the one holding the plate.",
            "bn": "80:25-27 সেই দেখার উত্তর দেয়, আর উত্তরটি উত্তম পুরুষের ক্রিয়াপদের এক ধারা। আমি পানি ঢেলেছি ঢালার মতো করে; তারপর আমি যমীনকে বিদীর্ণ করেছি বিদীর্ণ করার মতো করে; তারপর আমি তাতে উৎপন্ন করেছি। মানুষকে তার খাদ্যের দিকে তাকাতে বলা হয়েছিল, আর সেই তাকানো প্রথমেই যা ফাঁস করে দেয় তা হলো: এই খাদ্য উৎপাদনের সঙ্গে জড়িত প্রতিটি কাজই অন্য কারও। এই ধারার কোনো কিছুরই কৃতিত্ব প্লেট হাতে ধরে থাকা লোকটির নয়।"
          },
          {
            "en": "What grows is then named across five verses, eight things in all: grain, then grapes and qadb, then olive and palm, then dense gardens, then fruit and abb. That last word is unfamiliar even in Arabic; the lexicons gloss abb as pasture, the growth that animals graze. The list has moved, without announcing that it is moving, from what is on the man's plate to what is standing in his herd's field.",
            "bn": "এরপর যা উৎপন্ন হয় তার নাম আসে পাঁচটি আয়াত জুড়ে, মোট আটটি জিনিস: শস্য, তারপর আঙুর ও 'কাদ্‌ব', তারপর যায়তূন ও খেজুর, তারপর ঘন বাগান, তারপর ফল ও 'আব্ব'। শেষ শব্দটি আরবিতেও অপরিচিত; অভিধানগুলো 'আব্ব'-এর অর্থ করে তৃণভূমি — পশুরা যা চরে খায়। তালিকাটি নিজে ঘোষণা না করেই সরে এসেছে মানুষের প্লেটে যা আছে তা থেকে তার পশুপালের মাঠে যা দাঁড়িয়ে আছে তার দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Down to the Livestock",
          "bn": "পশুপাল পর্যন্ত"
        },
        "p": [
          {
            "en": "80:32 closes the passage by saying so outright: provision for you and for your grazing livestock. The same rain, the same opened earth and the same crop feed the man and the animal at his gate, and the verse states it without embarrassment. What separates the two is not the meal, and it is not the digestion. It is that one of them was addressed eight verses earlier and told to look at what he was eating.",
            "bn": "80:32 অংশটি শেষ করে কথাটি সরাসরি বলে দিয়ে: তোমাদের ও তোমাদের গৃহপালিত পশুদের ভোগের জন্য। একই বৃষ্টি, একই বিদীর্ণ মাটি আর একই ফসল খাওয়ায় মানুষকে এবং তার দরজার পাশের পশুটিকে — আয়াতটি কোনো সংকোচ ছাড়াই তা বলে। এই দুইয়ের পার্থক্য খাবারে নয়, হজমেও নয়। পার্থক্য এটুকুই যে তাদের একজনকে আট আয়াত আগে সম্বোধন করে বলা হয়েছিল, সে কী খাচ্ছে তা দেখে নিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "At the Table",
          "bn": "খাবার টেবিলে"
        },
        "p": [
          {
            "en": "The argument of the passage is complete without anyone leaving the plate. Man's origin was traced for him in 80:18-22 and he did not respond, so 80:24 lowers the evidence to the level of a meal. Nobody has to travel, study or wait for a sign. Two or three times a day something arrives that a person did not make, could not make and did not water, and it arrives whether or not he says anything about it.",
            "bn": "এই অংশের যুক্তি সম্পূর্ণ হয়ে যায় প্লেট ছেড়ে না উঠেই। 80:18-22-এ মানুষের সামনে তার নিজের উৎপত্তি বর্ণনা করা হয়েছিল, সে সাড়া দেয়নি; তাই 80:24 প্রমাণটিকে নামিয়ে আনে এক বেলার খাবারের স্তরে। কাউকে ভ্রমণ করতে হয় না, পড়াশোনা করতে হয় না, কোনো নিদর্শনের অপেক্ষাও করতে হয় না। দিনে দুই-তিনবার এমন কিছু এসে হাজির হয় যা মানুষ বানায়নি, বানাতে পারত না এবং যাতে পানিও দেয়নি — আর তা আসে, সে সে সম্পর্কে কিছু বলুক বা না বলুক।"
          },
          {
            "en": "The discipline is small enough to keep. Before eating, follow one item backwards as far as it will go: the rain that fell on it, the soil that opened for it, the season that had to hold, the hands that were not yours. The chain runs out of human agents very quickly. That is the whole of what the verse asked for. It does not ask for gratitude in the abstract; it asks for a look, and gratitude is what an honest look produces.",
            "bn": "অনুশীলনটি এত ছোট যে ধরে রাখা যায়। খাওয়ার আগে যেকোনো একটি জিনিসকে যত দূর যায় পেছন দিকে অনুসরণ করুন: যে বৃষ্টি তার উপর পড়েছিল, যে মাটি তার জন্য ফেটেছিল, যে ঋতুটিকে অটুট থাকতে হয়েছিল, যে হাতগুলো আপনার ছিল না। এই শৃঙ্খলে মানুষ-কর্তা খুব দ্রুতই ফুরিয়ে যায়। আয়াতটি এটুকুই চেয়েছিল। এটি বিমূর্ত কৃতজ্ঞতা চায় না; এটি একটি দৃষ্টি চায় — আর সৎভাবে তাকালে কৃতজ্ঞতা এমনিতেই জন্মায়।"
          }
        ]
      }
    ]
  }
});
