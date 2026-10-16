/**
 * Tadabbur long-form articles — surah 32.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "32:4": {
    "sections": [
      {
        "h": {
          "en": "The Charge and Its Answer",
          "bn": "অভিযোগ আর তার জবাব"
        },
        "p": [
          {
            "en": "Just before this verse, the Makkans sneer that Muhammad ﷺ invented the Qur'an, and 32:3 answers that it is rather the truth from your Lord. The next line does not argue in the abstract; it points at the sky: it is Allah who created the heavens and the earth. Ma'arif al-Qur'an reads the run of verses together and says all three carry a single affirmation of the truthfulness of the Qur'an and its Prophet. The proof of the message is the majesty of the One who sent it.",
            "bn": "এ আয়াতের ঠিক আগে মক্কার লোকেরা বিদ্রূপ করে বলছিল, মুহাম্মদ ﷺ কুরআন নিজেই বানিয়েছেন। ৩২:৩ আয়াত জবাব দেয়: বরং তা তোমার রবের পক্ষ থেকে আসা সত্য। পরের কথাটি কোনো তাত্ত্বিক তর্কে যায় না, সোজা আকাশের দিকে আঙুল তোলে: আল্লাহই আকাশ ও পৃথিবী সৃষ্টি করেছেন। মাআরিফুল কুরআন আয়াতগুলো একসঙ্গে পড়ে বলে, তিনটি আয়াত মিলে একটাই কথা ঘোষণা করে: কুরআন সত্য, তার নবীও সত্য। বার্তা যে সত্য, তার প্রমাণ যিনি পাঠিয়েছেন তাঁর মহিমা।"
          },
          {
            "en": "Al-Qurtubi catches why the proof is framed as creation. Allah made them know the perfection of His power, he says, so that they would listen to the Qur'an and ponder it. A people who will not credit a book can still look up at a built sky, and the verse walks them from the thing they cannot deny to the Author they keep denying. To create, al-Qurtubi adds, is to originate and bring into being after sheer nothingness, when the thing was not a thing at all.",
            "bn": "প্রমাণটা কেন সৃষ্টির কথা দিয়ে দেওয়া হলো, কুরতুবী তা ধরিয়ে দেন। তাঁর ভাষায়, আল্লাহ তাদের নিজের কুদরতের পূর্ণতা চিনিয়ে দিয়েছেন, যাতে তারা কুরআন শোনে আর তা নিয়ে ভাবে। যে জাতি কিতাব মানতে রাজি নয়, তারাও মাথা তুলে এই গড়া আকাশটা দেখতে পারে। যা অস্বীকার করার উপায় নেই, আয়াত সেখান থেকে তাদের হাত ধরে নিয়ে যায় সেই স্রষ্টার কাছে, যাঁকে তারা বারবার অস্বীকার করে। কুরতুবী আরও বলেন, সৃষ্টি করা মানে একেবারে শূন্য থেকে অস্তিত্বে আনা, যখন জিনিসটা কোনো জিনিসই ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Six Days at All",
          "bn": "ছয় দিন কেন"
        },
        "p": [
          {
            "en": "Then comes a measure that has long occupied the commentators: in six days. Al-Qurtubi lays the readings side by side. These run from Sunday through Friday, he reports, and al-Hasan took them as ordinary days of this world. Ibn Abbas, however, held that each of the six days was itself a span of a thousand years as this world counts years, while ad-Dahhak read the whole as six thousand years, days measured by the reckoning of the Hereafter. The verse fixes the number and leaves the length an open question.",
            "bn": "এরপর আসে একটা মাপ, যা নিয়ে তাফসীরকারেরা দীর্ঘ আলোচনা করেছেন: ছয় দিনে। কুরতুবী বিভিন্ন মত পাশাপাশি রাখেন। তিনি জানান, দিনগুলো রোববার থেকে শুক্রবার পর্যন্ত, আর হাসান এগুলোকে দুনিয়ার সাধারণ দিন ধরেছেন। তবে ইবন আব্বাসের মতে, ছয় দিনের প্রতিটি দিন দুনিয়ার হিসাবে হাজার বছরের সমান। দাহহাক পুরোটাকে ধরেছেন ছয় হাজার বছর, অর্থাৎ আখিরাতের হিসাবে দিন। আয়াত সংখ্যাটা ঠিক করে দেয়, কিন্তু দিনগুলো কত লম্বা, সে প্রশ্ন খোলা রাখে।"
          },
          {
            "en": "Ibn Kathir relays here a narration, recorded by an-Nasai and present in Muslim's collection, that assigns a work of creation to each day, the soil and the mountains and the trees and the rest, and places the rising over the Throne on the seventh day. He does not leave it unexamined. Al-Bukhari, he notes, judged the report defective in his great book of history, holding it more likely to trace back to Kab al-Ahbar than to the Prophet ﷺ, and other masters of hadith agreed. So the article does not rest the meaning of the days upon it, and the dispute over their length stays open.",
            "bn": "এখানে ইবন কাসীর একটি বর্ণনা আনেন, যা নাসাঈ লিপিবদ্ধ করেছেন, মুসলিমের সংকলনেও আছে। বর্ণনাটিতে প্রতিটি দিনের জন্য একেকটি সৃষ্টিকর্ম ঠিক করা আছে: মাটি, পাহাড়, গাছপালা আর বাকি সব। আর আরশে সমুন্নত হওয়াকে রাখা হয়েছে সপ্তম দিনে। তবে ইবন কাসীর বর্ণনাটি যাচাই না করে ছেড়ে দেন না। তিনি জানান, বুখারী তাঁর বড় ইতিহাসগ্রন্থে একে ত্রুটিপূর্ণ বলেছেন। তাঁর মতে এটি নবী ﷺ-এর কথা হওয়ার চেয়ে কাব আল-আহবারের কথা হওয়ার সম্ভাবনাই বেশি, আর হাদিসের অন্য ইমামরাও তাঁর সঙ্গে একমত। তাই এ লেখা দিনগুলোর অর্থ এই বর্ণনার উপর দাঁড় করায় না, আর দিনগুলোর দৈর্ঘ্য নিয়ে মতভেদ খোলাই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Slow, Though He Says Be",
          "bn": "ধীরে, অথচ কুন বললেই হতো"
        },
        "p": [
          {
            "en": "Why unfold creation across days at all, when a word would do? The Muyassar answers that the six days carry a wisdom Allah knows, while He remains able to bring the whole of it into being with the single word Be, and it is. As-Sa'di draws the same contrast: He could have created it in a single instant, yet He is Gentle and Wise, and He chose the measured way instead. A power that can act at once and still declines to is teaching something to everyone who watches.",
            "bn": "একটা কথাতেই যখন হয়ে যেত, তখন সৃষ্টিকে ছয় দিনে ভাগ করে মেলে ধরা কেন? মুয়াসসার জবাব দেয়, এই ছয় দিনে এমন হিকমত আছে যা আল্লাহ জানেন, অথচ তিনি শুধু 'কুন' (হও) বললেই গোটা সৃষ্টি অস্তিত্বে আনতে পারেন, আর তা হয়ে যায়। সা'দীও একই তুলনা টানেন: তিনি চাইলে এক নিমেষেই সৃষ্টি করতে পারতেন, কিন্তু তিনি কোমল ও প্রজ্ঞাময়, তাই ধাপে ধাপে করার পথ বেছে নিয়েছেন। যে শক্তি এক পলকে সব করতে পারে, তবু তা করে না, সে আসলে চেয়ে থাকা প্রত্যেককে কিছু শেখাচ্ছে।"
          },
          {
            "en": "There is mercy in a God who does not rush, and a pattern for the servant who is forever rushing. The same hand that could finish in an instant lets a seed take its season and a child take its years. What the commentators point to is not that Allah is slow but that He is deliberate, and that the very slowness we chafe against in our own lives may be the gentleness this verse is naming. Haste belongs to us; wisdom in timing belongs to Him.",
            "bn": "যে রব তাড়াহুড়ো করেন না, তাঁর মধ্যে আছে রহমত, আর সারাক্ষণ তাড়াহুড়োয় থাকা বান্দার জন্য আছে শিক্ষা। যে হাত এক নিমেষে সব শেষ করতে পারত, সেই হাতই বীজকে তার মৌসুম দেয়, শিশুকে তার বছরগুলো দেয়। তাফসীরকারেরা বোঝাতে চান না যে আল্লাহ ধীর। তাঁরা বোঝান, তিনি প্রতিটি কাজ মেপে মেপে, ভেবেচিন্তে করেন। নিজের জীবনে যে ধীরগতিতে আমরা অস্থির হয়ে উঠি, হয়তো সেটাই সেই কোমলতা, যার কথা এ আয়াত বলছে। তাড়াহুড়ো আমাদের স্বভাব, ঠিক সময়ের হিকমত তাঁর।"
          }
        ]
      },
      {
        "h": {
          "en": "Known, but Not Its How",
          "bn": "জানা, তবু ধরন অজানা"
        },
        "p": [
          {
            "en": "Then He rose over the Throne. Here the believer treads carefully, the way the first generations trod. The Muyassar renders istawa as He ascended and rose high over His Throne, a rising that befits His majesty, given no how and likened to nothing among created things. As-Sa'di says the same in fewer words: a rising that befits His majesty, over the Throne that is the roof of all created things. The attribute is affirmed exactly as Allah affirmed it, and not a step beyond.",
            "bn": "এরপর তিনি আরশে সমুন্নত হলেন। এখানে মুমিন সাবধানে পা ফেলে, যেমন পা ফেলতেন প্রথম যুগের মানুষেরা। মুয়াসসার 'ইসতাওয়া'-র অর্থ করেছে: তিনি তাঁর আরশের উপরে উঠলেন ও সমুন্নত হলেন। এ সমুন্নত হওয়া তাঁর মহিমার উপযোগী। এর ধরন বলা হয় না, সৃষ্টির কোনো কিছুর সঙ্গে এর তুলনাও চলে না। সা'দী অল্প কথায় একই কথা বলেন: তাঁর মহিমার উপযোগী সমুন্নত হওয়া, সেই আরশের উপরে, যা সমস্ত সৃষ্টির ছাদ। আল্লাহ গুণটি যেভাবে জানিয়েছেন, মুমিন ঠিক সেভাবেই মানে, এর বাইরে এক কদমও নয়।"
          },
          {
            "en": "This is the path of Ahl as-Sunnah and the early imams: to affirm the attribute without draining it of meaning and without likening it to creation. Their well-known words, carried down from Imam Malik and his teacher before him, put it precisely: the rising is known in the language, its how is unknown, belief in it is obligatory, and asking how is an innovation. To strip the word of meaning is a mistake, and to picture Allah seated or settled as a body settles is the opposite mistake. The believer keeps the word and refuses both errors.",
            "bn": "আহলুস সুন্নাহ ও প্রথম যুগের ইমামদের পথ এটাই: গুণটিকে অর্থশূন্য না করে, সৃষ্টির সঙ্গে তুলনাও না করে মেনে নেওয়া। ইমাম মালিক ও তাঁর আগে তাঁর উস্তাদ থেকে চলে আসা প্রসিদ্ধ কথাটি বিষয়টা নিখুঁতভাবে বলে দেয়: সমুন্নত হওয়ার অর্থ ভাষায় জানা, এর ধরন অজানা, এতে বিশ্বাস রাখা ফরজ, আর 'কীভাবে' প্রশ্ন করা বিদআত। শব্দটিকে অর্থহীন করে দেওয়া এক ভুল। আল্লাহকে কোনো দেহের মতো বসে থাকা বা থিতু হওয়া কল্পনা করা তার উল্টো ভুল। মুমিন শব্দটি আঁকড়ে ধরে, আর দুটো ভুলই এড়িয়ে চলে।"
          },
          {
            "en": "Later theological schools read the word another way, taking istawa to mean that He prevailed and rose in sovereignty over the Throne. Al-Qurtubi, passing this verse, directs the reader to the long discussion the scholars held over these words, which he set out in full elsewhere. That this interpretation exists among sincere Muslims is simply a fact, and it is held in good faith as a way of guarding Allah above any resemblance to His creation. This article leads with the way of the salaf and names the other reading with respect, without sitting in judgement over a dispute the great scholars themselves carried.",
            "bn": "পরবর্তী কালের কালামশাস্ত্রের ধারাগুলো শব্দটিকে অন্যভাবে বুঝেছে। তাদের মতে 'ইসতাওয়া' মানে তিনি আরশের উপর কর্তৃত্বে প্রবল ও সমুন্নত হলেন। কুরতুবী এ আয়াতে এসে পাঠককে পাঠিয়ে দেন এই শব্দ নিয়ে আলিমদের দীর্ঘ আলোচনার দিকে, যা তিনি অন্য জায়গায় বিস্তারিত লিখেছেন। আন্তরিক মুসলিমদের মধ্যে এই ব্যাখ্যা আছে, এটা সোজা বাস্তবতা। তাঁরা এটা ধরেন সরল নিয়তে, আল্লাহকে সৃষ্টির সব সাদৃশ্য থেকে ঊর্ধ্বে রাখার জন্য। এ লেখা সালাফের পথকে আগে রাখে, আর অন্য ব্যাখ্যাটির কথা বলে সম্মানের সঙ্গে। বড় বড় আলিমরা নিজেরাই যে মতভেদ বহন করে গেছেন, এ লেখা তার বিচারক সাজে না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Protector Beside Him",
          "bn": "তিনি ছাড়া কোনো অভিভাবক নেই"
        },
        "p": [
          {
            "en": "From the Throne the verse turns to us: you have, besides Him, no protector. At-Tabari unfolds the word. You have no guardian apart from Him to manage your affair and to defend you against Him, should He intend some harm for you. So take Him, and Him alone, as your protector, at-Tabari urges, and seek His aid in all your affairs; for when He moves to shield you from whoever means you ill, none can overpower Him, and none can turn back what He has willed.",
            "bn": "আরশের কথা থেকে আয়াত আমাদের দিকে ফেরে: তিনি ছাড়া তোমাদের কোনো অভিভাবক নেই। তাবারী শব্দটি খুলে বলেন: তিনি ছাড়া তোমাদের এমন কোনো অভিভাবক নেই, যে তোমাদের কাজ সামলাবে, আর তিনি তোমাদের কোনো ক্ষতি চাইলে তাঁর হাত থেকে বাঁচাবে। তাই তাবারীর তাগিদ: তাঁকে, কেবল তাঁকেই অভিভাবক বানাও, আর সব কাজে তাঁরই সাহায্য চাও। কারণ যে তোমার অনিষ্ট চায়, তিনি যখন তার থেকে তোমাকে আড়াল করতে চান, কেউ তাঁকে হারাতে পারে না, আর তিনি যা চেয়েছেন তা কেউ ফেরাতে পারে না।"
          },
          {
            "en": "Ibn Kathir widens it to the whole of existence: Allah owns the reins of every affair, the Creator and Controller of all things, so His creation has no protector but Him. Al-Qurtubi reads the words against the disbelievers in particular, who will find no protector to fend their punishment off. Set together, the sentence empties every rival throne at once. Whatever you have been counting on to stand between you and the consequence of your deeds, if it is not Allah, it cannot stand there at all.",
            "bn": "ইবন কাসীর কথাটিকে গোটা অস্তিত্বে ছড়িয়ে দেন: প্রতিটি বিষয়ের লাগাম আল্লাহর হাতে, তিনিই সবকিছুর স্রষ্টা ও পরিচালক, তাই তাঁর সৃষ্টির তিনি ছাড়া কোনো অভিভাবক নেই। কুরতুবী কথাটি বিশেষ করে কাফিরদের প্রসঙ্গে পড়েন: তাদের শাস্তি ঠেকানোর মতো কোনো অভিভাবক তারা পাবে না। দুটো মিলিয়ে পড়লে বাক্যটি একসঙ্গে সব প্রতিদ্বন্দ্বী সিংহাসন খালি করে দেয়। নিজের আমলের পরিণতি আর আপনার মাঝখানে দাঁড়াবে ভেবে আপনি যার উপরেই ভরসা করে এসেছেন, সে যদি আল্লাহ না হয়, সেখানে দাঁড়ানোর সাধ্যই তার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Intercession Only by Leave",
          "bn": "সুপারিশ কেবল অনুমতিতে"
        },
        "p": [
          {
            "en": "And no intercessor. This asks for care, because the Qur'an elsewhere affirms that intercession does take place. Ibn Kathir supplies the key in a single clause: there is no intercessor except after His permission. As-Sa'di states the positive side, that to Allah belongs the whole of intercession; it is entirely His to grant. So the verse does not deny that anyone will ever intercede. It denies that anyone intercedes on their own authority, like a patron you could hire against the Judge. The same truth stands in Ayat al-Kursi, 2:255: who can intercede with Him except by His leave?",
            "bn": "আর কোনো সুপারিশকারী নেই। এখানে সতর্কতা দরকার, কারণ কুরআন অন্যত্র জানায় যে সুপারিশ ঘটে বটে। ইবন কাসীর মূল কথাটা এক বাক্যে দিয়ে দেন: তাঁর অনুমতির পরেই কেবল সুপারিশকারী থাকে, এর আগে নয়। সা'দী ইতিবাচক দিকটা বলেন, গোটা সুপারিশ আল্লাহরই, তা দেওয়া পুরোপুরি তাঁর হাতে। তাই আয়াত এটা অস্বীকার করে না যে কেউ কখনো সুপারিশ করবে। এটা অস্বীকার করে যে কেউ নিজের ক্ষমতাবলে সুপারিশ করবে, যেন বিচারকের বিরুদ্ধে ভাড়া করা কোনো উকিল। একই সত্য আছে আয়াতুল কুরসিতে, ২:২৫৫: তাঁর অনুমতি ছাড়া কে তাঁর কাছে সুপারিশ করতে পারে?"
          },
          {
            "en": "The Prophet ﷺ showed how that leave works. He said that every prophet has a supplication that is granted, and that he had chosen to store his own away as intercession for his community on the Day of Resurrection, as al-Bukhari records. Notice the shape of it: the intercession is real and precious, and yet it is a gift the Prophet ﷺ receives and reserves, not a lever he works upon his Lord. Even he whose intercession we long for approaches as a servant who was granted leave, never as a protector set beside God.",
            "bn": "এই অনুমতি কীভাবে কাজ করে, নবী ﷺ নিজেই দেখিয়ে দিয়েছেন। বুখারীর বর্ণনায় তিনি বলেছেন, প্রত্যেক নবীর একটি দোয়া আছে যা কবুল হয়। আর তিনি নিজের দোয়াটি তুলে রেখেছেন কিয়ামতের দিন তাঁর উম্মতের জন্য সুপারিশ হিসেবে। ব্যাপারটা খেয়াল করুন: সুপারিশ সত্যি, আর অনেক দামি। তবু তা এমন এক দান, যা নবী ﷺ পেয়েছেন আর তুলে রেখেছেন। রবের উপর খাটানোর মতো কোনো জোর এটা নয়। যাঁর সুপারিশের জন্য আমরা ব্যাকুল, তিনিও এগিয়ে আসেন অনুমতি পাওয়া বান্দা হিসেবে, আল্লাহর পাশে বসানো কোনো অভিভাবক হিসেবে কখনো নয়।"
          },
          {
            "en": "This keeps both truths intact at once. The door of intercession is not slammed shut, so the believer's hope in the Prophet's ﷺ intercession, and in the mercy of Allah, stands on solid ground. And the seat of ultimate authority stays uncrowded: no saint, no angel, no idol holds a lever over God that He did not hand them. Fear and hope run to the very same address. You do not bribe a broker to reach Him; you ask Him directly, who needs no permission from any to give.",
            "bn": "এভাবে দুটো সত্যই একসঙ্গে অটুট থাকে। সুপারিশের দরজা বন্ধ করে দেওয়া হয়নি, তাই নবী ﷺ-এর সুপারিশ আর আল্লাহর রহমতের উপর মুমিনের আশা শক্ত মাটিতে দাঁড়িয়ে আছে। আবার চূড়ান্ত ক্ষমতার আসনে আর কারও জায়গা নেই: কোনো অলি, কোনো ফেরেশতা, কোনো মূর্তির হাতে আল্লাহর উপর এমন কোনো জোর নেই, যা তিনি নিজে তাদের দেননি। ভয় আর আশা দুটোই ছুটে যায় একই ঠিকানায়। তাঁর কাছে পৌঁছাতে কোনো দালালকে ঘুষ দিতে হয় না। সরাসরি তাঁর কাছেই চান, যিনি দিতে কারও অনুমতির মুখাপেক্ষী নন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Question at the Close",
          "bn": "শেষের সেই প্রশ্ন"
        },
        "p": [
          {
            "en": "So will you not take heed? At-Tabari hears in the closing question a command dressed as an appeal: reflect, O people, until you know that besides Him you have no protector and no intercessor, and then give Him alone your worship and cast away the rivals you have set beside Him. Al-Qurtubi points the reflection toward His power and the things He has made. The verse has walked from the widest sky down to the quietest corner of the heart, and it ends by asking that heart to draw the only honest conclusion.",
            "bn": "তবে কি তোমরা উপদেশ নেবে না? তাবারী শেষের এই প্রশ্নে শুনতে পান অনুরোধের মোড়কে একটা আদেশ: হে মানুষ, ভেবে দেখো, যতক্ষণ না বুঝতে পারো যে তিনি ছাড়া তোমাদের কোনো অভিভাবক নেই, কোনো সুপারিশকারীও নেই। তারপর শুধু তাঁরই ইবাদত করো, আর তাঁর পাশে যাদের দাঁড় করিয়েছ তাদের ছুড়ে ফেলো। কুরতুবী এই ভাবনাকে নিয়ে যান তাঁর কুদরত আর তাঁর সৃষ্টির দিকে। আয়াতটি সবচেয়ে বিশাল আকাশ থেকে নেমে এসেছে হৃদয়ের সবচেয়ে নিরিবিলি কোণে, আর শেষে সেই হৃদয়কে বলছে একমাত্র সৎ সিদ্ধান্তটায় পৌঁছাতে।"
          },
          {
            "en": "As-Sa'di gathers the whole verse into a single argument. The Maker of the heavens and the earth, risen over the mighty Throne, who alone arranges your affairs and takes you into His care, is the One who deserves every kind of worship. The shape of it is a proof, not a mood: because He created, because He is above all, because He alone protects and alone permits intercession, therefore worship belongs to Him by right. To grasp the first half of the verse and still divide your worship is to have read it and not taken heed.",
            "bn": "সা'দী গোটা আয়াতকে এক যুক্তিতে জড়ো করেন। আকাশ ও পৃথিবীর স্রষ্টা, মহান আরশের উপরে সমুন্নত, যিনি একাই তোমাদের কাজকর্ম সাজান আর তোমাদের নিজ তত্ত্বাবধানে নেন, তিনিই একমাত্র সত্তা যিনি সব ধরনের ইবাদতের যোগ্য। এর গড়নটা একটা প্রমাণ, কোনো মেজাজ নয়: যেহেতু তিনি সৃষ্টি করেছেন, যেহেতু তিনি সবকিছুর ঊর্ধ্বে, যেহেতু তিনিই একা রক্ষা করেন আর একাই সুপারিশের অনুমতি দেন, সেহেতু ইবাদত তাঁরই প্রাপ্য। আয়াতের প্রথমার্ধ বুঝেও যদি কেউ নিজের ইবাদত ভাগ করে, তবে সে পড়েছে কিন্তু উপদেশ নেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under His Throne",
          "bn": "তাঁর আরশের নিচে জীবন"
        },
        "p": [
          {
            "en": "What does this change on an ordinary Tuesday? A heart that truly settles this verse stops shopping for protectors. It carries its fear, its debt, its illness, its unspoken dread straight to the One above the Throne, having understood that every lesser door opens only onto His. It stops arranging intercessors and leverage, and begins to ask, plainly and directly, of the Lord who needs no middleman. The majesty at the start of the verse is not cold. It is the very thing that makes the invitation at its end safe to accept.",
            "bn": "রোজকার সাধারণ একটা দিনে এ আয়াত কী বদলায়? যে হৃদয় সত্যিই এ আয়াত মেনে নেয়, সে আর অভিভাবক খুঁজে বেড়ায় না। নিজের ভয়, ঋণ, অসুখ, মুখে না আনা আতঙ্ক সে সোজা নিয়ে যায় আরশের উপরে যিনি আছেন তাঁর কাছে। কারণ সে বুঝে গেছে, ছোট ছোট সব দরজা শেষ পর্যন্ত তাঁর দরজাতেই গিয়ে খোলে। সে সুপারিশকারী আর তদবির জোগাড় করা ছেড়ে দেয়, আর সরাসরি, সহজ ভাষায় চাইতে শুরু করে সেই রবের কাছে, যাঁর কাছে যেতে কোনো দালাল লাগে না। আয়াতের শুরুর মহিমা শীতল কিছু নয়। ওই মহিমার কারণেই শেষের আহ্বানে নিশ্চিন্তে সাড়া দেওয়া যায়।"
          },
          {
            "en": "A final word on how this verse was handled above. The rising of Allah over His Throne is a matter of creed, and creed is held here as the scholars of the ummah have held it: the attribute affirmed, its how left to Allah, and the interpretive reading noted with respect. None of this is a charge against any Muslim who holds that reading in good faith. On this, as on the Throne itself, the safest place for the heart is to affirm what Allah has said and to leave the how to Him.",
            "bn": "উপরে এ আয়াত নিয়ে যেভাবে আলোচনা হলো, সে বিষয়ে শেষ একটা কথা। আল্লাহর আরশে সমুন্নত হওয়া আকিদার বিষয়। এখানে আকিদা সেভাবেই ধরা হয়েছে, যেভাবে উম্মাহর আলিমরা ধরে এসেছেন: গুণটি মেনে নেওয়া, এর ধরন আল্লাহর উপর ছেড়ে দেওয়া, আর ব্যাখ্যাভিত্তিক মতটির কথা সম্মানের সঙ্গে বলা। যে মুসলিম সরল নিয়তে সেই মত ধরেন, এর কোনো কথাই তাঁর বিরুদ্ধে অভিযোগ নয়। আরশের বিষয়ে যেমন, এ বিষয়েও হৃদয়ের সবচেয়ে নিরাপদ জায়গা হলো: আল্লাহ যা বলেছেন তা মেনে নেওয়া, আর ধরনটা তাঁর উপর ছেড়ে দেওয়া।"
          }
        ]
      }
    ]
  },
  "32:7": {
    "sections": [
      {
        "h": {
          "en": "Where the Sentence Begins",
          "bn": "বাক্যটি যেখানে শুরু"
        },
        "p": [
          {
            "en": "This verse is not a fresh sentence. It opens with alladhi, a relative pronoun, and hangs on what came before it: 32:6 had named Him the Knower of the unseen and the witnessed, the Exalted in Might, the Merciful. So the One who made everything well is being added to a run of names already under way, not announced separately. The craftsmanship is presented as another of His attributes rather than as a separate claim about the world.",
            "bn": "এই আয়াত নতুন কোনো বাক্য দিয়ে শুরু হয়নি। শুরুতে আছে 'আল্লাযী', অর্থাৎ 'যিনি', আর এই শব্দ আয়াতটিকে আগের কথার সঙ্গে জুড়ে রাখে। ৩২:৬ আয়াতে তাঁকে বলা হয়েছিল অদৃশ্য ও দৃশ্যমানের জ্ঞানী, মহাপরাক্রমশালী, পরম দয়ালু। তাই 'যিনি সবকিছু উত্তম করে গড়েছেন' কথাটি আলাদা কোনো ঘোষণা নয়। আগে থেকে চলতে থাকা নামের সারিতে এটি আরেকটি সংযোজন। অর্থাৎ এই নিপুণ কারিগরি জগৎ সম্পর্কে আলাদা কোনো দাবি নয়, এটি তাঁরই আরেকটি গুণ।"
          },
          {
            "en": "The clause itself is five words: alladhi ahsana kulla shay'in khalaqah. Ahsana is the fourth form of the root of husn, beauty and goodness; the fourth form makes it transitive, so the verb means to make a thing good, or to do a thing well. Kulla shay' — every single thing — is as wide as Arabic can make a phrase, and no exception is attached to it anywhere in the verse or the ones around it.",
            "bn": "বাক্যাংশটি মাত্র পাঁচ শব্দের: আল্লাযী আহসানা কুল্লা শাইইন খালাকাহ। 'আহসানা' এসেছে 'হুসন' ধাতু থেকে, যার অর্থ সৌন্দর্য ও কল্যাণ। এটি ধাতুর চতুর্থ রূপ, আর এই রূপ ক্রিয়াটিকে সকর্মক করে। তাই এর অর্থ দাঁড়ায় কোনো কিছুকে উত্তম করা, বা কোনো কাজ উত্তমভাবে করা। 'কুল্লা শাইইন' মানে প্রতিটি জিনিস। আরবিতে এর চেয়ে ব্যাপক শব্দবন্ধ হয় না, আর এই আয়াতে বা আশপাশের আয়াতে কোথাও এর সঙ্গে কোনো ব্যতিক্রম জোড়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of One Word",
          "bn": "এক শব্দের দুই কিরাআত"
        },
        "p": [
          {
            "en": "The last word of the clause is vowelled two ways, and both are transmitted among the canonical readings. Read khalaqahu, a past-tense verb, the sentence says: who made good everything He created — the goodness is asserted of the thing itself. Read khalqahu, a verbal noun, and it says: who made good the creation of everything — the goodness is asserted of the making. The early authorities pass on both, and neither reading is treated as the correction of the other.",
            "bn": "বাক্যাংশের শেষ শব্দটি দুইভাবে হরকত দিয়ে পড়া হয়, আর দুটিই স্বীকৃত কিরাআতে বর্ণিত। 'খালাকাহু' পড়লে এটি অতীতকালের ক্রিয়া, আর অর্থ হয়: যিনি তাঁর সৃষ্ট প্রতিটি জিনিসকে উত্তম করেছেন। এখানে উত্তম বলা হচ্ছে জিনিসটিকেই। 'খালকাহু' পড়লে এটি ক্রিয়াবাচক বিশেষ্য, আর অর্থ হয়: যিনি প্রতিটি জিনিসের সৃষ্টিকে উত্তম করেছেন। এখানে উত্তম বলা হচ্ছে গড়ার কাজটিকে। প্রথম যুগের ইমামরা দুটিই বর্ণনা করেছেন, আর কেউ একটিকে অন্যটির সংশোধন বলে ধরেননি।"
          },
          {
            "en": "The second reading's construction appears plainly elsewhere. In 20:50 Musa (AS) answers Fir'awn: our Lord is He who gave each thing its form, then guided it — the same two elements, kulla shay' and khalq, set side by side. The two readings of this verse do not compete so much as hand you different things to look at: one an object made well, the other a making done well. A reader is not required to choose.",
            "bn": "দ্বিতীয় পাঠের গঠনটি অন্য জায়গায় স্পষ্ট দেখা যায়। ২০:৫০ আয়াতে মূসা (আঃ) ফেরাউনকে জবাব দেন: আমাদের রব তিনি, যিনি প্রতিটি জিনিসকে তার আকৃতি দিয়েছেন, তারপর পথ দেখিয়েছেন। এখানেও সেই দুটি শব্দ, 'কুল্লা শাইইন' আর 'খালক', পাশাপাশি বসানো। এই আয়াতের দুই পাঠ একে অপরের প্রতিদ্বন্দ্বী নয়। দুটি আপনার সামনে দুটি ভিন্ন জিনিস রাখে: একটিতে উত্তমভাবে গড়া জিনিস, অন্যটিতে উত্তমভাবে করা গড়ার কাজ। পাঠককে কোনো একটি বেছে নিতে হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Good, Meaning Fitted",
          "bn": "উত্তম, অর্থাৎ যথাযথ"
        },
        "p": [
          {
            "en": "The claim covers everything, including what a person finds frightening or ugly, so it is worth being precise about what is being claimed. The word is about a thing being what its purpose required, not about a thing pleasing us. 25:2 makes the same point with a different word: He created every thing and determined it with exact determination. 54:49 states it flatly: indeed, everything We created is by measure.",
            "bn": "দাবিটি সবকিছুর বেলায়, মানুষের কাছে যা ভয়ংকর বা কুৎসিত লাগে তার বেলায়ও। তাই ঠিক কী দাবি করা হচ্ছে, সেটা পরিষ্কার বোঝা দরকার। শব্দটির কথা হলো, জিনিসটি তার উদ্দেশ্য অনুযায়ী ঠিক যেমন হওয়ার তেমন হয়েছে। আমাদের ভালো লাগা এখানে মাপকাঠি নয়। ২৫:২ আয়াত অন্য শব্দে একই কথা বলে: তিনি প্রতিটি জিনিস সৃষ্টি করেছেন, তারপর তা যথাযথ মাপে নির্ধারণ করেছেন। ৫৪:৪৯ আয়াত সরাসরি বলে: নিশ্চয়ই আমি প্রতিটি জিনিস সৃষ্টি করেছি নির্দিষ্ট পরিমাণে।"
          },
          {
            "en": "That is why the Quran is willing to hand the claim over for inspection. 67:3 says you see no disparity in the creation of ar-Rahman, then tells you to look again and see whether you can find any cracks. A maker who says his work is good and then invites the audit is making a different kind of statement from one who only asks to be praised. Here in as-Sajdah the same claim is put as a name, without the challenge attached.",
            "bn": "এ কারণেই কুরআন দাবিটিকে যাচাইয়ের জন্য খুলে দিতে প্রস্তুত। ৬৭:৩ আয়াত বলে, রহমানের সৃষ্টিতে তুমি কোনো অসংগতি দেখবে না। তারপর বলে, আবার তাকাও, কোথাও কোনো ফাটল চোখে পড়ে কি? যে কারিগর নিজের কাজকে উত্তম বলেন, তারপর পরখ করে দেখার ডাক দেন, তাঁর কথা আর যিনি শুধু প্রশংসা চান তাঁর কথা এক জাতের নয়। এখানে সূরা সাজদায় একই দাবি এসেছে একটি নাম হিসেবে, সঙ্গে চ্যালেঞ্জটা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "And He Began Man From Clay",
          "bn": "আর মানুষের সূচনা মাটি থেকে"
        },
        "p": [
          {
            "en": "The second clause narrows from everything to one case: wa bada'a khalqa al-insani min tin, and He began the creation of man from clay. Bada'a is to begin, and a beginning asks for what follows. The next two verses supply it. 32:8 says He then made his progeny from an extract of a despised fluid, and 32:9 says He then proportioned him and breathed into him of His spirit and made for you hearing and sight and hearts.",
            "bn": "দ্বিতীয় বাক্যাংশে কথা সবকিছু থেকে নেমে আসে একটি উদাহরণে: ওয়া বাদাআ খালকাল ইনসানি মিন তীন, আর তিনি মানুষের সৃষ্টি শুরু করেছেন মাটি থেকে। 'বাদাআ' মানে শুরু করা, আর শুরু থাকলে তার পরেও কিছু থাকে। পরের দুই আয়াত সেটাই জানায়। ৩২:৮ বলে, তারপর তিনি তার বংশধর বানিয়েছেন তুচ্ছ পানির নির্যাস থেকে। আর ৩২:৯ বলে, তারপর তিনি তাকে সুঠাম করেছেন, তাতে তাঁর পক্ষ থেকে রূহ ফুঁকে দিয়েছেন, আর তোমাদের দিয়েছেন শ্রবণশক্তি, দৃষ্টিশক্তি ও অন্তর।"
          },
          {
            "en": "Placing the clay next to the perfecting is the argument of the passage. Excellence is not claimed in spite of the material; the material is named in the same breath, twice over, and the second naming is blunter than the first. And 32:9 tells you what the whole sequence was building toward, because it ends not with a conclusion about creation but with a complaint about us: little are you grateful.",
            "bn": "উত্তম করে গড়ার কথার পাশেই মাটির কথা বসানো, এটাই এই অংশের মূল যুক্তি। উপাদানকে পাশ কাটিয়ে নিপুণতার দাবি করা হয়নি। একই নিঃশ্বাসে উপাদানের নাম নেওয়া হয়েছে, তাও দুবার, আর দ্বিতীয়বারের কথা প্রথমবারের চেয়েও খোলামেলা। আর পুরো ধারাটা কোথায় গিয়ে পৌঁছাচ্ছিল, ৩২:৯ তা বলে দেয়। কারণ সেটা সৃষ্টি নিয়ে কোনো উপসংহারে শেষ হয় না, শেষ হয় আমাদের নিয়ে একটা অনুযোগে: তোমরা খুব কমই শোকর করো।"
          }
        ]
      },
      {
        "h": {
          "en": "Ihsan Prescribed Back to Us",
          "bn": "ইহসান এবার আমাদের দায়িত্ব"
        },
        "p": [
          {
            "en": "The verb of this verse returns as an obligation. Muslim records from Shaddad ibn Aws (RA) that the Prophet ﷺ said: Allah has prescribed ihsan upon everything; so when you kill, kill well, and when you slaughter, slaughter well. The wording is striking beside 32:7 — the same root, the same kulli shay', now written upon the servant. What is described of Allah as a fact about His making is laid on us as a duty in ours.",
            "bn": "এই আয়াতের ক্রিয়াপদটি আবার ফিরে আসে, এবার দায়িত্ব হয়ে। শাদ্দাদ ইবনে আউস (রাঃ) থেকে ইমাম মুসলিম বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ প্রতিটি বিষয়ে ইহসান লিখে দিয়েছেন। তাই যখন হত্যা করো, উত্তমভাবে হত্যা করো, আর যখন জবাই করো, উত্তমভাবে জবাই করো। ৩২:৭-এর পাশে রাখলে শব্দগুলো চোখে পড়ার মতো: একই ধাতু, একই 'কুল্লি শাইইন', এবার বান্দার উপর লেখা। আল্লাহর গড়া নিয়ে যা একটা বাস্তব সত্য, আমাদের কাজে সেটাই আমাদের দায়িত্ব।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under a Made Thing",
          "bn": "গড়া জিনিসের ভেতরে বেঁচে থাকা"
        },
        "p": [
          {
            "en": "Three things follow for a reader. Gratitude, because 32:9 says our supply of it is short and names the faculties it is short about. Then a guard against contempt — for your own body, your own circumstances, the plain and unglamorous parts of a life that was assembled deliberately. And then the standard for your own work, since the hadith puts the same word in your hands. A world made well is not only something to admire. It is a brief.",
            "bn": "পাঠকের জন্য এখান থেকে তিনটি শিক্ষা আসে। প্রথমত শোকর, কারণ ৩২:৯ বলে আমাদের শোকর খুব কম, আর কোন কোন ক্ষমতার বেলায় কম তাও নাম ধরে বলে। দ্বিতীয়ত তুচ্ছজ্ঞান থেকে সাবধান থাকা: নিজের শরীর, নিজের অবস্থা, জীবনের সাদামাটা চাকচিক্যহীন অংশগুলোকে তুচ্ছ না ভাবা, কারণ এ জীবন ভেবেচিন্তে জোড়া দেওয়া। তৃতীয়ত নিজের কাজের মান, কারণ হাদিসটি সেই একই শব্দ আপনার হাতে তুলে দিয়েছে। উত্তম করে গড়া জগৎ শুধু মুগ্ধ হয়ে দেখার জিনিস নয়। এটা আপনার জন্য একটা কাজের নির্দেশও।"
          }
        ]
      }
    ]
  },
  "32:16": {
    "sections": [
      {
        "h": {
          "en": "Sides and Lying-Places",
          "bn": "পার্শ্ব ও শয্যা"
        },
        "p": [
          {
            "en": "The verse opens with a body, not a feeling: tatajafa junubuhum an al-madaji'. Tajafa is to be held away from something, to keep clear of it. Junub are the sides. Madaji' is the plural of madja', the place where a person lies down. Read literally, their sides are held away from their lying-places. Nothing is said about what they feel while it happens, and nothing is said about how long it lasts.",
            "bn": "আয়াতটি শুরু হয় শরীর দিয়ে, অনুভূতি দিয়ে নয়: তাতাজাফা জুনূবুহুম আনিল মাদাজি'। 'তাজাফা' মানে কোনো কিছু থেকে দূরে থাকা, তা থেকে সরে থাকা। 'জুনূব' মানে পার্শ্বদেশ। 'মাদাজি'' হলো 'মাদজা'-এর বহুবচন, মানুষ যেখানে শুয়ে থাকে সেই জায়গা। আক্ষরিক অর্থে: তাদের পার্শ্বদেশ বিছানা থেকে আলাদা থাকে। তখন তাদের মনে কী চলে, আয়াত তা বলে না। কতক্ষণ চলে, তাও বলে না।"
          },
          {
            "en": "The verb is in the imperfect, which in this context describes a habit rather than a single night, and every element is plural. So the picture is not one exceptional person on one exceptional night but a settled practice among a group. It follows 32:15, which had described the same people by what they do when reminded of the verses: they fall down in prostration, glorify their Lord with praise, and are not arrogant.",
            "bn": "ক্রিয়াপদটি মুদারি' রূপে, যা এখানে এক রাতের ঘটনা নয়, একটা অভ্যাস বোঝায়। আর বাক্যের প্রতিটি অংশ বহুবচনে। তাই ছবিটা কোনো এক অসাধারণ রাতে এক অসাধারণ মানুষের নয়। এটা একদল মানুষের মধ্যে স্থায়ী হয়ে যাওয়া অভ্যাসের ছবি। আয়াতটি আসে ৩২:১৫-এর পরে, যেখানে এই মানুষদেরই চেনানো হয়েছিল তাদের আচরণ দিয়ে: আয়াত দিয়ে উপদেশ দেওয়া হলে তারা সিজদায় লুটিয়ে পড়ে, প্রশংসার সঙ্গে তাদের রবের পবিত্রতা ঘোষণা করে, আর অহংকার করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Prayer Is Meant",
          "bn": "কোন নামাজের কথা"
        },
        "p": [
          {
            "en": "Ibn Kathir reports that Mujahid and al-Hasan took the clause to mean the voluntary night prayer. He also transmits from ad-Dahhak a narrower and more surprising reading: it means Isha in congregation and Fajr in congregation. The second reading is worth keeping, because it takes the verse away from a specialised devotion and hands it to anyone who leaves a warm bed twice in the dark. Both readings agree on the one thing the verse actually states, which is what the bed does not get.",
            "bn": "ইবনে কাসীর জানান, মুজাহিদ ও হাসান এ বাক্যাংশের অর্থ নিয়েছেন রাতের নফল নামাজ। দাহহাক থেকে তিনি আরও সংকীর্ণ, আর একটু অবাক করা একটি ব্যাখ্যা আনেন: এর অর্থ জামাতে ইশা আর জামাতে ফজর। এই দ্বিতীয় ব্যাখ্যাটি মনে রাখার মতো। কারণ এটি আয়াতকে বিশেষ কোনো সাধনার গণ্ডি থেকে বের করে এনে তুলে দেয় এমন যে কারও হাতে, যে অন্ধকারে দুবার গরম বিছানা ছেড়ে ওঠে। আয়াত আসলে যে কথাটা বলে, সেখানে দুই ব্যাখ্যাই একমত: বিছানা যা পাওয়ার কথা, তা পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear and Aspiration",
          "bn": "ভয় ও আশা"
        },
        "p": [
          {
            "en": "The second clause names what they are doing while upright: yad'una rabbahum khawfan wa tama'an, they call upon their Lord in fear and aspiration. Ibn Kathir glosses the pair as fear of His punishment and hope of His reward. Both words stand in the accusative, read by the grammarians either as the state the callers are in or as the motive they call from. Either way, neither is a stage a worshipper passes through on the way to the other.",
            "bn": "দ্বিতীয় বাক্যাংশ বলে, বিছানা ছেড়ে উঠে তারা কী করে: ইয়াদউনা রব্বাহুম খাওফান ওয়া তামাআন, তারা ভয় ও আশা নিয়ে তাদের রবকে ডাকে। ইবনে কাসীর জোড়াটির ব্যাখ্যা দেন: তাঁর শাস্তির ভয়, আর তাঁর পুরস্কারের আশা। শব্দ দুটি মানসূব অবস্থায় আছে। ব্যাকরণবিদরা একে পড়েন হয় যারা ডাকছে তাদের অবস্থা হিসেবে, নয়তো যে তাগিদে তারা ডাকে সেই কারণ হিসেবে। যেভাবেই পড়া হোক, কোনোটিই এমন ধাপ নয়, যা পার হয়ে অন্যটিতে যেতে হয়।"
          },
          {
            "en": "The same pair appears in daylight at 7:56 — do not cause corruption in the earth after its setting right, and call upon Him in fear and aspiration; indeed the mercy of Allah is near to the doers of good. There the state belongs to public conduct; here it belongs to a dark room. That the identical pair covers both suggests it is not a mood produced by the hour but the ordinary posture of a servant who has understood his position.",
            "bn": "একই জোড়া দিনের আলোতেও আসে, ৭:৫৬ আয়াতে: সংশোধনের পর পৃথিবীতে বিপর্যয় সৃষ্টি করো না, আর তাঁকে ডাকো ভয় ও আশা নিয়ে। নিশ্চয়ই আল্লাহর রহমত সৎকর্মশীলদের কাছেই। সেখানে কথাটা প্রকাশ্য আচরণের, এখানে এক অন্ধকার ঘরের। একই জোড়া দুই জায়গাতেই আসায় বোঝা যায়, এটা রাতের কারণে জাগা কোনো সাময়িক ভাব নয়। নিজের অবস্থান যে বান্দা বুঝে ফেলেছে, এটা তার স্বাভাবিক ভঙ্গি।"
          }
        ]
      },
      {
        "h": {
          "en": "And They Spend",
          "bn": "আর তারা ব্যয় করে"
        },
        "p": [
          {
            "en": "The third clause moves from the night to the wallet: wa mimma razaqnahum yunfiqun, and from what We have provided them, they spend. Notice the turn in the speaker. Allah has been spoken of in the third person — their Lord — and now speaks in the first: what We have provided. The provision is claimed by its owner at precisely the moment the spending of it is mentioned, which quietly settles whose money was being given away.",
            "bn": "তৃতীয় বাক্যাংশ রাত থেকে চলে আসে টাকার থলিতে: ওয়া মিম্মা রাযাকনাহুম ইউনফিকুন, আর আমি তাদের যে রিজিক দিয়েছি তা থেকে তারা খরচ করে। বক্তার বদলটা খেয়াল করুন। এতক্ষণ আল্লাহর কথা আসছিল দূর থেকে, 'তাদের রব' বলে। এখন তিনি নিজেই 'আমি' বলে কথা বলছেন: 'আমি যা দিয়েছি'। ঠিক যখন রিজিক খরচের কথা আসে, তখনই তার মালিক তাকে নিজের বলে দাবি করেন। আর তাতেই চুপচাপ মীমাংসা হয়ে যায়, কার সম্পদ আসলে বিলানো হচ্ছিল।"
          },
          {
            "en": "Mimma is partitive: from what, a portion of it, not the whole. And the clause is not new vocabulary invented for these worshippers. The identical words close 2:3, where spending from what We have provided is the third mark of the believers at the opening of Surah al-Baqarah. So the night in this verse is not being offered as a substitute for the daytime obligations. It is placed on top of them.",
            "bn": "'মিম্মা' মানে 'যা থেকে', অর্থাৎ তার একটা অংশ, পুরোটা নয়। আর এই বাক্যাংশ এই ইবাদতকারীদের জন্য নতুন করে বানানো কোনো কথা নয়। ঠিক এই শব্দগুলো দিয়েই ২:৩ আয়াত শেষ হয়েছে। সূরা বাকারার শুরুতে সেখানে মুমিনদের তৃতীয় পরিচয় হলো, 'আমি যা দিয়েছি তা থেকে খরচ করা'। তাই এই আয়াতের রাত দিনের দায়িত্বগুলোর বদলি হিসেবে আসেনি। এসেছে সেগুলোর উপরে, বাড়তি হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hidden Deed, a Hidden Reward",
          "bn": "গোপন আমল, গোপন পুরস্কার"
        },
        "p": [
          {
            "en": "32:17, immediately after, says that no soul knows what has been hidden for them of comfort of the eyes, as a reward for what they used to do. Ibn Kathir relates from al-Hasan al-Basri the reading that fits the pairing exactly: because they concealed their deeds, Allah concealed their reward. Al-Bukhari records from Abu Hurayrah (RA) that Allah says He has prepared for His righteous servants what no eye has seen, no ear has heard, and what has never crossed the heart of a human being.",
            "bn": "ঠিক পরের আয়াত 32:17 বলে, কোনো প্রাণই জানে না তাদের কৃতকর্মের পুরস্কার হিসেবে তাদের জন্য চোখজুড়ানো কী লুকিয়ে রাখা হয়েছে। ইবনে কাসীর হাসান বসরী থেকে এমন একটি পাঠ বর্ণনা করেন যা জোড়াটির সাথে হুবহু মেলে: তারা যেহেতু নিজেদের আমল গোপন রেখেছিল, তাই আল্লাহ তাদের পুরস্কার গোপন রেখেছেন। ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে আল্লাহ বলেন, তিনি তাঁর নেক বান্দাদের জন্য এমন কিছু প্রস্তুত রেখেছেন যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, আর কোনো মানুষের অন্তরে যার কল্পনাও জাগেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "One of the Gates of Good",
          "bn": "কল্যাণের দরজাগুলোর একটি"
        },
        "p": [
          {
            "en": "Imam Ahmad records that Mu'adh ibn Jabal (RA) asked the Prophet ﷺ for a deed that would admit him to Paradise and keep him from the Fire. After naming the pillars, the Prophet ﷺ said: shall I not direct you to the gates of goodness? Fasting is a shield, charity extinguishes sin, and the prayer of a man in the depth of the night — and then he recited this verse and 32:17 after it. The report was recorded by at-Tirmidhi, an-Nasa'i and Ibn Majah as well; at-Tirmidhi graded it hasan sahih.",
            "bn": "ইমাম আহমাদ বর্ণনা করেন যে মুআয ইবনে জাবাল (রাঃ) নবী ﷺ-এর কাছে এমন একটি আমল জানতে চান যা তাঁকে জান্নাতে প্রবেশ করাবে ও জাহান্নাম থেকে দূরে রাখবে। স্তম্ভগুলোর নাম নেওয়ার পর নবী ﷺ বলেন: আমি কি তোমাকে কল্যাণের দরজাগুলো দেখিয়ে দেব না? রোজা ঢাল, সাদাকা গুনাহ নিভিয়ে দেয়, আর রাতের গভীরে মানুষের নামাজ — এরপর তিনি এই আয়াতটি এবং তার পরের 32:17 আয়াতটি পড়ে শোনান। বর্ণনাটি তিরমিযী, নাসাঈ ও ইবনে মাজাহও লিপিবদ্ধ করেছেন; তিরমিযী একে হাসান সহীহ বলেছেন।"
          }
        ]
      }
    ]
  },
  "32:17": {
    "sections": [
      {
        "h": {
          "en": "No Soul Knows",
          "bn": "কোনো প্রাণই জানে না"
        },
        "p": [
          {
            "en": "Fala ta'lamu nafsun is three words, and the grammar of them is doing work. Nafsun is indefinite standing inside a negation, which in Arabic sweeps the category clean: not one soul, of any kind, knows. The fa at the head ties the sentence to 32:16, the verse just before, which had described people whose sides leave their beds while they call on their Lord in fear and aspiration. What follows is presented as the consequence of that.",
            "bn": "'ফালা তা'লামু নাফসুন' মাত্র তিনটি শব্দ, আর এদের ব্যাকরণই এখানে আসল কাজটা করছে। 'নাফসুন' অনির্দিষ্ট, আর বসেছে না-বাচক বাক্যের ভেতরে। আরবিতে এই গঠন কাউকে বাদ রাখে না: কোনো প্রাণই, সে যে-ই হোক, জানে না। শুরুর 'ফা' বাক্যটিকে বেঁধে দেয় ঠিক আগের আয়াত ৩২:১৬-এর সঙ্গে। সেখানে বলা হয়েছিল সেই মানুষদের কথা, যাদের পার্শ্বদেশ বিছানা থেকে আলাদা থাকে, আর তারা ভয় ও আশা নিয়ে তাদের রবকে ডাকে। এরপর যা আসে, তা ওই আমলেরই ফল।"
          },
          {
            "en": "The verb is in the present: no soul knows — now. That is not the same as saying the reward is unknowable in principle. Two verses on, 32:19 will state plainly that those who believed and did righteous deeds have the Gardens of Refuge. So the surah is willing to name the address. What this verse withholds is not the fact of the reward but the experience of it, and it withholds it from everyone alike.",
            "bn": "ক্রিয়াপদটি বর্তমান কালে: কোনো প্রাণ জানে না, মানে এখন জানে না। এর মানে এই নয় যে পুরস্কারটি কখনোই জানা সম্ভব নয়। দুই আয়াত পরেই ৩২:১৯ পরিষ্কার বলে দেবে, যারা ঈমান এনেছে ও নেক আমল করেছে, তাদের জন্য আছে জান্নাতুল মাওয়া। অর্থাৎ সূরাটি ঠিকানা জানাতে রাজি। এই আয়াত যা আড়াল করে রাখে, তা পুরস্কারের অস্তিত্ব নয়, তার স্বাদ। আর তা আড়াল রাখা হয়েছে সবার কাছ থেকে সমানভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hidden, and by Whom",
          "bn": "লুকানো, কিন্তু কে লুকালেন"
        },
        "p": [
          {
            "en": "Ma ukhfiya lahum: what has been hidden for them. The verb is passive and no agent is named inside the clause, though the surrounding verses leave no doubt who hid it. Arabic uses the passive in this way when the fact of the action matters more than the actor, and here the fact is concealment. What is concealed is left indefinite too — min qurrati a'yun, some coolness of eyes, with no quantity and no list.",
            "bn": "'মা উখফিয়া লাহুম': তাদের জন্য যা লুকিয়ে রাখা হয়েছে। ক্রিয়াটি কর্মবাচ্যে, বাক্যাংশের ভেতরে কর্তার নাম নেই। তবে কে লুকিয়েছেন, আশপাশের আয়াত পড়লে তা নিয়ে কোনো সন্দেহ থাকে না। কাজটা কে করল তার চেয়ে কাজটা যে হয়েছে সেটাই যখন বড় কথা, আরবি তখন এভাবে কর্মবাচ্য ব্যবহার করে। আর এখানে বড় কথা হলো গোপন রাখা। যা লুকানো, তাও রাখা হয়েছে অনির্দিষ্ট: 'মিন কুররাতি আ'ইউন', কিছু চোখজুড়ানো জিনিস। কতটুকু, কী কী, তার কোনো হিসাব বা তালিকা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Coolness of the Eyes",
          "bn": "চোখের শীতলতা"
        },
        "p": [
          {
            "en": "Qurra comes from qarra, to be cool and to settle. Arabic blesses a person by saying may Allah cool your eye, and the picture behind the idiom is an eye that stops moving because it has finally found what it was scanning for. It is not the language of dazzle. It is the language of a search ending, which is why the expression suits a reward that nobody has to keep looking past.",
            "bn": "'কুররা' এসেছে 'কাররা' থেকে, যার অর্থ শীতল হওয়া, থিতু হওয়া। আরবিতে কাউকে দোয়া দিয়ে বলা হয়, আল্লাহ তোমার চোখ শীতল করুন। এই বাগধারার পেছনের ছবিটা এমন এক চোখের, যা এদিক-ওদিক ঘোরা থামিয়েছে, কারণ যা খুঁজছিল অবশেষে তা পেয়ে গেছে। এটা চোখ ধাঁধানোর ভাষা নয়। এটা খোঁজ শেষ হওয়ার ভাষা। তাই এমন পুরস্কারের সঙ্গে কথাটা মানায়, যা পাওয়ার পর আর কিছু খুঁজতে হয় না।"
          },
          {
            "en": "Everywhere else the Quran uses the phrase, it is for something near and human. In 25:74 the servants of ar-Rahman ask their Lord for coolness of the eyes from their spouses and offspring. In 28:9 the wife of Fir'awn says of the infant Musa (AS) that he will be a coolness of the eye for me and for you. The verse takes the warmest word available for ordinary joy and says the hidden thing is of that family, and past reporting.",
            "bn": "কুরআন অন্য যেখানেই এই কথাটা ব্যবহার করেছে, সেখানে তা কাছের, মানুষের চেনা কোনো কিছুর জন্য। ২৫:৭৪ আয়াতে রহমানের বান্দারা তাদের রবের কাছে চায়, যেন স্ত্রী ও সন্তানদের মাধ্যমে তাদের চোখ শীতল হয়। ২৮:৯ আয়াতে ফেরাউনের স্ত্রী শিশু মূসা (আঃ) সম্পর্কে বলেন, এ আমার ও তোমার চোখের শীতলতা হবে। সাধারণ আনন্দের জন্য ভাষায় যে শব্দটি সবচেয়ে উষ্ণ, আয়াতটি সেটাই তুলে নেয়। তারপর বলে, লুকানো জিনিসটি সেই জাতেরই, তবে তা বর্ণনার বাইরে।"
          }
        ]
      },
      {
        "h": {
          "en": "What No Eye Has Seen",
          "bn": "যা কোনো চোখ দেখেনি"
        },
        "p": [
          {
            "en": "Abu Hurayrah (RA), who narrates the hadith of what no eye has seen and no ear has heard, attached it to these very words himself: al-Bukhari records him saying, recite if you wish — and he recited this verse. Muslim records the report as well. The tag is a Companion's own, not a later commentator's, which is why the two are read together. And it fixes the hidden thing of this verse as the same thing the hadith puts past every sense a person has.",
            "bn": "'যা কোনো চোখ দেখেনি, কোনো কান শোনেনি', এই হাদিসটির বর্ণনাকারী আবু হুরাইরা (রাঃ) নিজেই একে এই আয়াতের সঙ্গে জুড়ে দিয়েছেন। বুখারীর বর্ণনায় তিনি বলেন, চাইলে পড়ে দেখো, তারপর এই আয়াতটি পাঠ করেন। মুসলিমও বর্ণনাটি এনেছেন। এই জুড়ে দেওয়া একজন সাহাবীর নিজের কাজ, পরের কোনো মুফাসসিরের নয়। এ কারণেই দুটিকে একসঙ্গে পড়া হয়। আর এর ফলে বোঝা যায়, এই আয়াতে যা লুকানো, হাদিসে সেটাকেই মানুষের সব ইন্দ্রিয়ের নাগালের বাইরে বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Requital, Then Hospitality",
          "bn": "প্রতিদান, তারপর মেহমানদারি"
        },
        "p": [
          {
            "en": "The verse ends jaza'an bima kanu ya'malun, as requital for what they used to do. Jaza' is an exact settling, a return matched to what was given. And kanu with the imperfect after it is Arabic's way of saying used to — a habit carried over years, not one night of it. So the thing beyond description is tied, in the same breath, to something quite unspectacular: what a person did repeatedly when it was ordinary to do it.",
            "bn": "আয়াতটি শেষ হয় 'জাযাআন বিমা কানূ ইয়া'মালূন' দিয়ে: তারা যা করত তার প্রতিদান হিসেবে। 'জাযা' মানে হিসাব পুরোপুরি মিটিয়ে দেওয়া, যা দেওয়া হয়েছিল তার মাপে ফিরিয়ে দেওয়া। আর 'কানূ'-র পরে মুদারি' ক্রিয়া এলে আরবিতে তার অর্থ হয় 'করত'। অর্থাৎ বছরের পর বছর চলা অভ্যাস, এক রাতের ব্যাপার নয়। ফলে বর্ণনার অতীত সেই জিনিসটিকে একই নিঃশ্বাসে বেঁধে দেওয়া হলো একেবারে সাদামাটা একটা ব্যাপারের সঙ্গে: কাজটা যখন নিছক রোজকার ব্যাপার ছিল, তখনো মানুষটি তা বারবার করে গেছে।"
          },
          {
            "en": "Two verses later the same tail returns with a different noun in front of it. 32:19 says the Gardens of Refuge are theirs nuzulan bima kanu ya'malun, and nuzul in Arabic is what a host sets out for a guest on arrival. Put the two together and a shape appears: the welcome laid ready at the door is named and describable, and the thing this verse says no soul knows is what lies past it.",
            "bn": "দুই আয়াত পরে একই শেষাংশ আবার আসে, শুধু সামনে অন্য একটি শব্দ নিয়ে। ৩২:১৯ বলে, জান্নাতুল মাওয়া তাদের জন্য 'নুযুলান বিমা কানূ ইয়া'মালূন'। আরবিতে 'নুযুল' মানে মেহমান এসে পৌঁছালে মেজবান যে আপ্যায়ন সামনে সাজিয়ে দেন। দুটো পাশাপাশি রাখলে একটা ছবি ফুটে ওঠে: দরজায় সাজানো আপ্যায়নের নাম আছে, বর্ণনাও আছে। আর এই আয়াত যে জিনিসের কথা বলছে, যা কোনো প্রাণ জানে না, তা রয়েছে সেই দরজার ওপারে।"
          }
        ]
      },
      {
        "h": {
          "en": "They Are Not Equal",
          "bn": "তারা সমান নয়"
        },
        "p": [
          {
            "en": "The very next verse asks the question the concealment was building to. 32:18: is one who was a believer like one who was defiantly disobedient? They are not equal. Notice the order the passage chose. It hides the reward first and asserts the inequality second, so the comparison is settled before any of the evidence for it has been shown. Nobody is being asked to weigh two displayed outcomes against each other.",
            "bn": "ঠিক পরের আয়াতই সেই প্রশ্নটা করে, যার দিকে এই গোপন রাখা এগোচ্ছিল। ৩২:১৮: যে মুমিন ছিল, সে কি তার মতো, যে ফাসিক ছিল? তারা সমান নয়। এই অংশ কোন ক্রমটা বেছে নিয়েছে, খেয়াল করুন। আগে পুরস্কার লুকানো হলো, তারপর বলা হলো দুই দল সমান নয়। ফলে কোনো প্রমাণ দেখানোর আগেই তুলনার মীমাংসা হয়ে গেল। চোখের সামনে রাখা দুটো পরিণতি পাল্লায় মেপে দেখতে কাউকে বলা হচ্ছে না।"
          },
          {
            "en": "That is also how the verse is lived. Any picture a person builds of what is waiting will be too small, because it is assembled from things eyes have already seen. So the discipline the verse trains is to stop negotiating for a described outcome and to attend instead to the tail of the sentence, what they used to do, which is the only part of the arrangement that has been placed in your hands.",
            "bn": "আয়াতটি জীবনে এভাবেই কাজে আসে। সামনে কী অপেক্ষা করছে, তা নিয়ে মানুষ যে ছবিই আঁকুক, তা ছোট হবেই। কারণ সে ছবি জোড়া লাগানো হয় চোখের আগে দেখা জিনিস দিয়ে। তাই আয়াতটি এই শিক্ষা দেয়: বর্ণনা করা কোনো ফলাফলের জন্য দর কষাকষি থামান। বরং মন দিন বাক্যের শেষ অংশে, 'তারা যা করত'। গোটা ব্যবস্থার মধ্যে শুধু এই অংশটুকুই আপনার হাতে দেওয়া হয়েছে।"
          }
        ]
      }
    ]
  },
  "32:23": {
    "sections": [
      {
        "h": {
          "en": "The Comfort After the Warning",
          "bn": "ধমকের পরেই সান্ত্বনা"
        },
        "p": [
          {
            "en": "The verse just before is severe: who is more unjust than whoever is reminded of his Lord's signs, then turns away? From the criminals Allah will take retribution. Then, without pause, comes a different register. Wa-laqad ātaynā Mūsā al-Kitāb — and We certainly gave Mūsā the Book. The oath-particle la and the past tense qad together close the matter: this already happened, it is beyond dispute, and the Prophet ﷺ is being steadied against the rejection the earlier verse described.",
            "bn": "এর আগের আয়াতটা কঠোর: যাকে তার রবের নিদর্শন দিয়ে উপদেশ দেওয়া হয় অথচ সে মুখ ফিরিয়ে নেয়, তার চেয়ে বড় জালিম আর কে? অপরাধীদের কাছ থেকে আল্লাহ প্রতিশোধ নেবেন। এরপরই কোনো বিরতি ছাড়া আসে অন্য এক সুর। ওয়ালাক্বাদ আতাইনা মূসাল কিতাব — আমি তো মূসাকে কিতাব দিয়েছিলাম। কসমের লা আর অতীতকালের ক্বাদ মিলে কথাটা চূড়ান্ত করে দেয়: এটা ঘটে গেছে, এতে তর্কের অবকাশ নেই। আগের আয়াত যে প্রত্যাখ্যানের ছবি আঁকল, তার মুখে নবী ﷺ-কে এখানে স্থির করা হচ্ছে।"
          },
          {
            "en": "At-Tabari reads the link plainly: We gave Mūsā the Torah, O Muḥammad, just as We gave you the Furqān. Al-Muyassar keeps the very same line — as We gave you the Qur'an, O Messenger, so We gave him the Scripture. The sentence is built as a comparison before it says anything about doubt. The Prophet ﷺ is not the first to carry a Book to a resisting people; one came before him, to a messenger before him, and that is the ground on which the next clause rests.",
            "bn": "তাবারী সংযোগটা সোজাসুজি পড়েন: হে মুহাম্মদ, যেমন তোমাকে ফুরকান দিয়েছি, তেমনি মূসাকে তাওরাত দিয়েছি। মুয়াসসারও ঠিক একই কথা বলে: হে রাসূল, যেমন তোমাকে কুরআন দিয়েছি, তেমনি তাঁকে দিয়েছি কিতাব। সন্দেহের কথা তোলার আগেই বাক্যটা দাঁড়িয়ে আছে একটা তুলনার উপর। অবাধ্য জাতির কাছে কিতাব নিয়ে যাওয়া প্রথম মানুষ নবী ﷺ নন। তাঁর আগেও একটি কিতাব এসেছিল, তাঁর আগের এক রাসূলের কাছে। পরের বাক্যটা এই ভিত্তির উপরই দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Strange New Thing",
          "bn": "নতুন বা অচেনা কিছু নয়"
        },
        "p": [
          {
            "en": "As-Saʿdī makes the consolation explicit. When Allah had mentioned the signs by which He reminds His servants — the Qur'an sent down on Muḥammad ﷺ — He then noted that this Book is no novelty among the scriptures, and the one who came with it is no oddity among the prophets. Allah had already given Mūsā the Book, the Torah that confirms the Qur'an, so that the truth of the two matches and their evidence is established. The point is directed at a rejected messenger: you are walking a road already walked.",
            "bn": "সাদী সান্ত্বনাটা স্পষ্ট করে বলেন। আল্লাহ যখন সেই নিদর্শনগুলোর কথা বললেন যা দিয়ে তিনি বান্দাদের উপদেশ দেন, অর্থাৎ মুহাম্মদ ﷺ-এর উপর নাজিল হওয়া কুরআন, তখন তিনি জানালেন যে এই কিতাব আসমানি কিতাবগুলোর মধ্যে নতুন কিছু নয়, আর যিনি তা নিয়ে এসেছেন তিনিও নবীদের মধ্যে অচেনা কেউ নন। আল্লাহ আগেই মূসাকে কিতাব দিয়েছিলেন, সেই তাওরাত যা কুরআনকে সত্যায়ন করে। তাই দুই কিতাবের সত্য মিলে যায়, দুইয়ের প্রমাণ প্রতিষ্ঠিত হয়। একজন প্রত্যাখ্যাত রাসূলের উদ্দেশে কথাটা: তিনি এমন পথেই হাঁটছেন যে পথ আগেও মাড়ানো হয়েছে।"
          },
          {
            "en": "As-Saʿdī adds a note of proportion. Because the proofs of the truth have come one after another — a Book then a Book, a prophet then a prophet — no room is left for doubt or wavering. He then draws a line the earlier verses had set up: the Torah was made guidance for the Children of Israel in their time, while this Qur'an Allah made a guidance for all people, in their religion and their worldly life, until the Day of Resurrection. The old Book steadies faith; the final Book widens its reach.",
            "bn": "সাদী একটা মাত্রার কথা যোগ করেন। সত্যের প্রমাণ একের পর এক এসেছে, একটা কিতাবের পর আরেকটা কিতাব, একজন নবীর পর আরেকজন নবী, তাই সন্দেহ বা দ্বিধার কোনো জায়গা আর থাকে না। এরপর তিনি আগের আয়াতগুলোর তৈরি করা একটা পার্থক্য টানেন: তাওরাত বানী ইসরাঈলের জন্য তাদের সময়ে পথপ্রদর্শক করা হয়েছিল, আর এই কুরআনকে আল্লাহ করেছেন সব মানুষের জন্য পথপ্রদর্শক, তাদের দ্বীন ও দুনিয়ার ব্যাপারে, ক্বিয়ামত পর্যন্ত। পুরনো কিতাব ঈমানকে স্থির করে, শেষ কিতাব তার পরিধি বাড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Meeting Is Meant",
          "bn": "কার সঙ্গে সাক্ষাৎ"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an states the question the clause forces: fa-lā takun fī miryatin min liqāʾih — so be not in doubt of the meeting. Meeting of whom, with whom? The commentators differ, and the differences are worth keeping apart. On the first and most reported reading, the pronoun in liqāʾih returns to Mūsā, and the meaning is that the Prophet ﷺ will meet Mūsā. Al-Qurtubī attributes this to Ibn ʿAbbās: do not be in doubt, O Muḥammad, of meeting Mūsā, for he met him on the Night of the Ascent.",
            "bn": "মাআরিফুল কুরআন বাক্যটা যে প্রশ্ন সামনে আনে তা বলে দেয়: ফালা তাকুন ফী মিরইয়াতিম মিন লিক্বাইহি — সেই সাক্ষাৎ নিয়ে সন্দেহে পড়ো না। কার সাক্ষাৎ, কার সঙ্গে? তাফসীরকারেরা এখানে ভিন্নমত পোষণ করেন, আর এই পার্থক্যগুলো আলাদা করে রাখা দরকার। প্রথম এবং সবচেয়ে বেশি বর্ণিত পাঠে লিক্বাইহি-র সর্বনাম ফিরে যায় মূসার দিকে, আর অর্থ দাঁড়ায় নবী ﷺ মূসার সঙ্গে সাক্ষাৎ করবেন। কুরতুবী এটি ইবন আব্বাসের দিকে সম্বন্ধ করেন: হে মুহাম্মদ, মূসার সঙ্গে সাক্ষাৎ নিয়ে সন্দেহে থেকো না, কেননা মিরাজের রাতে তিনি তাঁর সাক্ষাৎ পেয়েছেন।"
          },
          {
            "en": "Qatādah shades it slightly, as at-Tabarī records him: do not be in doubt that you met him, or will meet him, on the night you were taken by night. At-Tabarī, Ibn Kathīr, al-Baghawī and al-Muyassar all carry this reading, tying the meeting to the Isrāʾ. The difference between Ibn ʿAbbās and Qatādah is small — whether the stress falls on the future certainty of the meeting or on the fact of it having happened — and al-Qurtubī notes that the meaning comes to one thing.",
            "bn": "তাবারীর বর্ণনায় কাতাদা কথাটায় সামান্য ভিন্ন রং দেন: সন্দেহে থেকো না যে তুমি তাঁর সাক্ষাৎ পেয়েছ, কিংবা পাবে, সেই রাতে, যে রাতে তোমাকে রাতের ভ্রমণে নিয়ে যাওয়া হয়েছিল। তাবারী, ইবন কাসীর, বাগাভী আর মুয়াসসার সবাই এই ব্যাখ্যা এনেছেন, আর সাক্ষাৎটাকে ইসরার সঙ্গে জুড়ে দিয়েছেন। ইবন আব্বাস আর কাতাদার পার্থক্য সামান্য: জোর পড়ছে সাক্ষাৎ যে ভবিষ্যতে নিশ্চিত হবে তার উপর, নাকি তা যে ঘটে গেছে তার উপর। কুরতুবী বলেন, শেষ পর্যন্ত অর্থ একটাই।"
          },
          {
            "en": "A second family of readings turns the pronoun away from Mūsā and toward a Book. Al-Qurtubī reports from Mujāhid and az-Zajjāj: do not be in doubt of Mūsā's meeting the Book, that is, of his receiving it with acceptance; al-Baghawī gives the same from as-Suddī — of Mūsā's receiving the Scripture of Allah with contentment. Ma'arif al-Qur'an records a related reading in which the pronoun returns to the Book itself, meaning the Qur'an: as Mūsā was given his Book, the Prophet ﷺ too should have no doubt about receiving his, a sense it supports with 27:6.",
            "bn": "দ্বিতীয় এক দল ব্যাখ্যা সর্বনামটাকে মূসার দিক থেকে ঘুরিয়ে নেয় কিতাবের দিকে। কুরতুবী মুজাহিদ ও যাজ্জাজ থেকে বর্ণনা করেন: মূসা যে কিতাবের সাক্ষাৎ পেয়েছেন, অর্থাৎ তা মেনে নিয়ে গ্রহণ করেছেন, তা নিয়ে সন্দেহে থেকো না। বাগাভী সুদ্দী থেকে একই কথা আনেন: মূসা সন্তুষ্ট মনে আল্লাহর কিতাব গ্রহণ করেছেন, তা নিয়ে সন্দেহ নয়। মাআরিফুল কুরআন এর কাছাকাছি আরেকটি ব্যাখ্যা উল্লেখ করে। সেখানে সর্বনাম ফিরে যায় কিতাবের দিকেই, অর্থাৎ কুরআনের দিকে: মূসাকে যেমন তাঁর কিতাব দেওয়া হয়েছিল, তেমনি নিজের কিতাব পাওয়া নিয়ে নবী ﷺ-এরও কোনো সন্দেহ থাকার কথা নয়। এই অর্থের পক্ষে গ্রন্থটি ২৭:৬ আয়াত দেখায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Lord, and the Day",
          "bn": "রব, আর সেই দিন"
        },
        "p": [
          {
            "en": "A third direction reads the meeting as an encounter not between two prophets but with the Lord. Ibn Kathīr records, through at-Tabarānī from Ibn ʿAbbās, a reading of min liqāʾih as from Mūsā's meeting his Lord, mighty and majestic. Al-Qurtubī preserves yet another: do not be in doubt of meeting Mūsā on the Day of Resurrection, and you will indeed meet him there. Here the pronoun and the horizon shift together — from a night already passed to a Day still to come, or from a man to his Maker.",
            "bn": "তৃতীয় এক ধারার ব্যাখ্যায় সাক্ষাৎটা দুই নবীর মধ্যে নয়, রবের সঙ্গে। ইবন কাসীর তাবারানীর সূত্রে ইবন আব্বাস থেকে একটি ব্যাখ্যা আনেন: মিন লিক্বাইহি মানে মূসার তাঁর মহাপরাক্রমশালী ও মহিমান্বিত রবের সঙ্গে সাক্ষাৎ। কুরতুবী আরও একটি ব্যাখ্যা ধরে রেখেছেন: কিয়ামতের দিন মূসার সঙ্গে সাক্ষাৎ নিয়ে সন্দেহে থেকো না, সেখানে তুমি অবশ্যই তাঁর দেখা পাবে। এখানে সর্বনাম আর দিগন্ত দুটোই একসঙ্গে সরে যায়: পেরিয়ে যাওয়া এক রাত থেকে সামনে আসা এক দিনের দিকে, কিংবা এক মানুষ থেকে তাঁর স্রষ্টার দিকে।"
          },
          {
            "en": "Al-Qurtubī records one more, grammatically bolder. Some read a transposition in the passage, so that the clause belongs with the earlier words of the sūrah about the angel of death — say, the angel of death who is charged with you will take you — and the meeting is then the meeting with Allah after death, the clause sitting as a parenthesis between the giving of the Book and its being made a guide. On this view the doubt forbidden is doubt about the final return, not about any single encounter.",
            "bn": "কুরতুবী আরও একটি ব্যাখ্যা আনেন, ব্যাকরণের দিক থেকে যা আরও সাহসী। কেউ কেউ এখানে কথার আগে-পরে উল্টানো ধরেন। তাতে বাক্যাংশটি জুড়ে যায় সূরার আগের দিকে মৃত্যুর ফেরেশতা নিয়ে বলা কথার সঙ্গে: বলুন, তোমাদের দায়িত্বে নিযুক্ত মৃত্যুর ফেরেশতা তোমাদের জান কবজ করবেন। তখন সাক্ষাৎ মানে মৃত্যুর পর আল্লাহর সঙ্গে সাক্ষাৎ, আর বাক্যাংশটি কিতাব দেওয়া আর তাকে পথনির্দেশ বানানোর মাঝখানে বন্ধনীর মতো বসে থাকে। এই ব্যাখ্যায় যে সন্দেহ নিষেধ করা হয়েছে, তা শেষ প্রত্যাবর্তন নিয়ে, কোনো একটি নির্দিষ্ট সাক্ষাৎ নিয়ে নয়।"
          },
          {
            "en": "Four horizons, then, for one pronoun: the Prophet's meeting with Mūsā on the Isrāʾ, Mūsā's meeting with the Book, Mūsā's meeting with his Lord, and the believer's meeting with Allah at the end. The commentators record them side by side and do not force a single verdict, and this reflection follows them in that. What every reading shares is a command against doubt — whatever the meeting is, the verse was sent to still a wavering heart, not to feed its questions.",
            "bn": "তাহলে এক সর্বনামের চার দিগন্ত: ইসরার রাতে মূসার সঙ্গে নবী ﷺ-এর সাক্ষাৎ, কিতাবের সঙ্গে মূসার সাক্ষাৎ, রবের সঙ্গে মূসার সাক্ষাৎ, আর শেষে আল্লাহর সঙ্গে মুমিনের সাক্ষাৎ। তাফসীরকারেরা এগুলো পাশাপাশি রেখে দেন, কোনো একটি রায় চাপিয়ে দেন না। এই আলোচনাও সে পথেই চলে। সব ব্যাখ্যায় যা একই থাকে, তা হলো সন্দেহ না করার আদেশ। সাক্ষাৎ যা-ই হোক, আয়াতটি নাজিল হয়েছে টলমল হৃদয়কে স্থির করতে, তার প্রশ্নের খোরাক জোগাতে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Harder, Rarer Reading",
          "bn": "কঠিন ও বিরল পাঠ"
        },
        "p": [
          {
            "en": "Al-Hasan al-Baṣrī read the clause in a way that turns it into open consolation. On his reading the pronoun hangs on an unspoken antecedent, and the meaning is: just as Mūsā was given the Book and was then harmed and belied, do not be in doubt that what met him will meet you. The pain inflicted on Mūsā is the thing not to be doubted. Ma'arif al-Qur'an carries the same from al-Hasan: let the Prophet ﷺ expect the treatment his predecessors met, count it the way of the prophets, and endure.",
            "bn": "হাসান বসরি বাক্যটা এমনভাবে পড়েন যা একে খোলাখুলি সান্ত্বনায় বদলে দেয়। তাঁর পাঠে সর্বনামটা একটা উহ্য পূর্বপদের উপর ঝুলে থাকে, আর অর্থ দাঁড়ায়: মূসাকে যেমন কিতাব দেওয়া হয়েছিল, এরপর তাঁকে কষ্ট দেওয়া হয়েছিল ও মিথ্যুক বলা হয়েছিল, তেমনি সন্দেহে থেকো না যে তাঁর যা হয়েছিল তা তোমারও হবে। মূসার উপর চাপানো সেই যন্ত্রণাই হলো সেই জিনিস, যা নিয়ে সন্দেহ করা যাবে না। মাআরিফুল কুরআন হাসান থেকে একই কথা আনে: নবী ﷺ যেন তাঁর পূর্বসূরিদের পাওয়া আচরণেরই প্রত্যাশা রাখেন, একে নবীদের রীতি হিসেবে গণ্য করেন, আর ধৈর্য ধরেন।"
          },
          {
            "en": "Al-Qurtubī does not let this reading pass unmarked. He reports an-Naḥḥās judging it gharīb — odd, out of the ordinary — and noting that it comes by way of ʿAmr ibn ʿUbayd. The caution matters: a meaning can be spiritually rich and still stand on a thin chain, and a careful reader keeps the two apart. Its comfort, though, lies close to the sūrah's drift. The verses around it answer men who turn from the signs; a messenger who meets the same turning is told that he walks a long and honored road.",
            "bn": "কুরতুবী এই ব্যাখ্যাটি মন্তব্য ছাড়া ছেড়ে দেন না। তিনি নাহহাসের কথা আনেন, যিনি একে গারীব বলেছেন, অর্থাৎ অদ্ভুত, প্রচলিত ধারার বাইরে। নাহহাস আরও বলেছেন, এটি এসেছে আমর ইবন উবাইদের সূত্রে। এই সতর্কতা জরুরি। কোনো অর্থ আধ্যাত্মিকভাবে সমৃদ্ধ হয়েও দুর্বল সূত্রের উপর দাঁড়িয়ে থাকতে পারে, আর সতর্ক পাঠক দুটোকে আলাদা রাখেন। তবু এর সান্ত্বনা সূরার মূল সুরের খুব কাছাকাছি। আশপাশের আয়াতগুলো তাদের জবাব দেয়, যারা নিদর্শন থেকে মুখ ফিরিয়ে নেয়। যে রাসূলকে একই রকম মুখ ফেরানোর মুখোমুখি হতে হয়, তাঁকে বলা হচ্ছে: তিনি এক দীর্ঘ ও সম্মানিত পথে হাঁটছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen on the Night Journey",
          "bn": "মিরাজের রাতে দেখা"
        },
        "p": [
          {
            "en": "The Isrāʾ reading rests on a sound narration. Al-Bukhārī records in his Ṣaḥīḥ, from Ibn ʿAbbās, that the Prophet ﷺ said: On the night of my ascent I saw Mūsā, a tall brown-skinned man with curly hair, as if from the men of Shanūʾah; and I saw ʿĪsā, of medium build, between red and white, with lank hair; and I saw Mālik the keeper of the Fire, and the Dajjāl — among the signs Allah showed him. The report then recites our verse: so be not in doubt of meeting him.",
            "bn": "ইসরার পাঠটা একটি সহীহ বর্ণনার উপর দাঁড়ানো। বুখারী তাঁর সহীহ-তে ইবন আব্বাস থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আমার মিরাজের রাতে আমি মূসাকে দেখলাম, দীর্ঘদেহী বাদামি রঙের কোঁকড়া চুলের একজন মানুষ, যেন শানূআ গোত্রের লোকদের মতো; আর ঈসাকে দেখলাম মাঝারি গড়নের, লাল আর সাদার মাঝামাঝি রঙের, সোজা চুলের; আর দেখলাম জাহান্নামের রক্ষক মালিককে, আর দাজ্জালকে — এসব নিদর্শনের মধ্যে যা আল্লাহ তাঁকে দেখিয়েছিলেন। এরপর বর্ণনায় আমাদের এই আয়াত পড়া হয়: কাজেই তাঁর সাক্ষাৎ নিয়ে সন্দেহে থেকো না।"
          },
          {
            "en": "Because the Companion who transmits the verse's meaning is the same who transmits the vision, the two lock together: Ibn ʿAbbās reads min liqāʾih as the meeting with Mūsā, and al-Bukhārī's ḥadīth shows that meeting taking place. Al-Baghawī also reports, from Anas, that on the Night Journey the Prophet ﷺ saw Mūsā praying in his grave, and the known account of the Ascent has them meet in the heavens over the matter of the prayers. The sound narration of al-Bukhārī is the backing the first reading has; the other readings rest on grammar and sense rather than on a report like it.",
            "bn": "আয়াতের অর্থ যে সাহাবী বর্ণনা করেন, দৃশ্যটিও তিনিই বর্ণনা করেন। তাই দুটি একসঙ্গে মিলে যায়: ইবন আব্বাস মিন লিক্বাইহি পড়েন মূসার সঙ্গে সাক্ষাৎ অর্থে, আর বুখারীর হাদিস দেখায় সেই সাক্ষাৎ সত্যিই ঘটেছে। বাগাভী আনাস থেকেও বর্ণনা করেন যে, ইসরার রাতে নবী ﷺ মূসাকে তাঁর কবরে নামাজ পড়তে দেখেছেন। আর মিরাজের প্রসিদ্ধ বিবরণে আসমানে নামাজের বিষয় নিয়ে তাঁদের দেখা হয়। প্রথম ব্যাখ্যার পেছনে আছে বুখারীর এই সহীহ বর্ণনা। বাকি ব্যাখ্যাগুলো এমন কোনো বর্ণনার উপর নয়, দাঁড়িয়ে আছে ব্যাকরণ আর অর্থের যুক্তির উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "A Guide for His People",
          "bn": "তাঁর জাতির পথপ্রদর্শক"
        },
        "p": [
          {
            "en": "The verse ends: wa-jaʿalnāhu hudan li-banī Isrāʾīl — and We made it a guidance for the Children of Israel. The pronoun hu carries two readings. Al-Qurtubī gives both: on Qatādah's, We made Mūsā a guidance, a right-guide his people reach the truth by following; on al-Ḥasan's, We made the Book a guidance. Ibn Kathīr takes it as the Book We gave him, and as-Saʿdī the same — the Scripture given to Mūsā, by which they are guided in the roots of their religion, its branches and its laws suited to that age.",
            "bn": "আয়াত শেষ হয়: ওয়া জাআলনাহু হুদাল লিবানী ইসরাঈল — আর আমি তা বানী ইসরাঈলের জন্য পথপ্রদর্শক করেছিলাম। হু সর্বনামটি দুটি পাঠ বহন করে। কুরতুবী দুটোই দেন: কাতাদার পাঠে আমি মূসাকে পথপ্রদর্শক করেছি, এমন এক দিশারি যাঁকে অনুসরণ করে তাঁর জাতি সত্যে পৌঁছায়; হাসানের পাঠে আমি কিতাবকে পথপ্রদর্শক করেছি। ইবন কাসীর একে নেন আমি তাঁকে যে কিতাব দিয়েছি সেই অর্থে, আর সাদীও তাই। মূসাকে দেওয়া কিতাব, যা দিয়ে তারা তাদের দ্বীনের মূল, শাখা আর সেই যুগের উপযোগী বিধানে পথ পায়।"
          },
          {
            "en": "Ibn Kathīr links the clause to its twin in Sūrat al-Isrāʾ: And We gave Mūsā the Scripture and made it a guidance for the Children of Israel — take none but Me as trustee (17:2). The Torah, in its time and for its people, was real guidance from Allah, and the verse honors it as such. It is said with care here: this is not a verse about a people's failing but about a Book's mercy. It licenses nothing against any living community, and it is no ground to disparage the Jews or the Scripture given through Mūsā.",
            "bn": "ইবন কাসীর বাক্যটিকে সূরা ইসরার যমজ আয়াতের সঙ্গে মেলান: আর আমি মূসাকে কিতাব দিয়েছি এবং তা বানী ইসরাঈলের জন্য পথপ্রদর্শক করেছি, আমাকে ছাড়া আর কাউকে কর্মবিধায়ক গ্রহণ কোরো না (১৭:২)। তাওরাত, তার সময়ে আর তার জাতির জন্য, আল্লাহর পক্ষ থেকে প্রকৃত পথপ্রদর্শন ছিল, আর আয়াত সেটাকে সেভাবেই সম্মান দেয়। এখানে কথাটা সাবধানে বলা দরকার: এটি কোনো জাতির ব্যর্থতার আয়াত নয়, এক কিতাবের রহমতের আয়াত। এটি কোনো জীবিত সম্প্রদায়ের বিরুদ্ধে কিছুর অনুমতি দেয় না, আর ইহুদি জাতি কিংবা মূসার মাধ্যমে দেওয়া কিতাবকে হেয় করার কোনো ভিত্তিও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Doubt It Removes",
          "bn": "যে সন্দেহ দূর হয়"
        },
        "p": [
          {
            "en": "Set side by side, the readings point one way. A Book was given, a prophet was met or will be met, a Lord will be encountered, a people were guided — and across all of it the single imperative is: do not doubt. The verse does not argue the doubter out of his questions. It reminds him that the ground under his feet is old. What Allah has settled in the past He does not reopen for the mood of a present hour, and a believer's certainty is meant to rest on that settled past.",
            "bn": "পাশাপাশি রাখলে সব ব্যাখ্যা একই দিকে ইশারা করে। একটি কিতাব দেওয়া হলো, এক নবীর সঙ্গে সাক্ষাৎ হলো বা হবে, রবের সঙ্গে সাক্ষাৎ হবে, এক জাতি পথ পেল। আর এ সবকিছুর ভেতর দিয়ে একটাই আদেশ: সন্দেহ কোরো না। আয়াতটি তর্ক করে সন্দেহকারীর প্রশ্ন মেটাতে বসে না। বরং মনে করিয়ে দেয়, তার পায়ের নিচের মাটি অনেক পুরনো। আল্লাহ অতীতে যা মীমাংসা করে দিয়েছেন, এই মুহূর্তের মেজাজের জন্য তিনি তা আবার খোলেন না। মুমিনের নিশ্চয়তা দাঁড়ানোর কথা সেই মীমাংসিত অতীতের উপরেই।"
          },
          {
            "en": "That is the reflection the verse presses. When conviction thins — not because the evidence changed but because the day was heavy — the cure is not to re-litigate what was long ago decided, but to stand where the prophets stood. Mūsā was given a Book and was belied; so was the one who came after him; so may anyone be who carries the truth into a resisting room. The pattern is honored and the outcome is sure. Do not be in doubt is, in the end, a mercy: a hand laid on a wavering heart.",
            "bn": "এই ভাবনার দিকেই আয়াতটি ঠেলে দেয়। কখনো বিশ্বাস পাতলা হয়ে আসে, প্রমাণ বদলেছে বলে নয়, দিনটা ভারী গেছে বলে। তখন ওষুধ হলো অনেক আগে মীমাংসা হয়ে যাওয়া বিষয়ে নতুন করে মামলা না তোলা, বরং নবীরা যেখানে দাঁড়িয়েছিলেন সেখানে গিয়ে দাঁড়ানো। মূসাকে কিতাব দেওয়া হয়েছিল, আর তাঁকে মিথ্যুক বলা হয়েছিল। তাঁর পরে যিনি এলেন, তাঁর বেলায়ও তাই হলো। যে কেউ সত্য নিয়ে বিরোধী লোকদের সামনে দাঁড়ায়, তার বেলায়ও তা-ই হতে পারে। এই ধারা সম্মানের, আর পরিণতি নিশ্চিত। 'সন্দেহে থেকো না' কথাটি শেষ পর্যন্ত এক রহমত: টলমল হৃদয়ের উপর রাখা একটি হাত।"
          }
        ]
      }
    ]
  },
  "32:27": {
    "sections": [
      {
        "h": {
          "en": "Water Steered, Not Fallen",
          "bn": "ঝরে পড়া নয়, চালিয়ে আনা পানি"
        },
        "p": [
          {
            "en": "The verse opens on a motion, not a downpour. Nasuqu al-ma: We drive the water. The verb sawq is what a herdsman does to a flock, a steady urging of something from behind until it reaches where it must go. Ibn Kathir reads the water as reaching the land either from the sky or from the sayh, the flow that rivers carry and that comes down from the mountains to the lands that need it, each at its appointed time. The water does not merely fall; it is sent, aimed, delivered.",
            "bn": "আয়াতের শুরুতে বৃষ্টির ঝমঝম নয়, আছে চলার ছবি। নাসূকুল মা: আমি পানিকে হাঁকিয়ে নিয়ে যাই। সাওক হলো রাখালের কাজ: পেছন থেকে একটানা তাড়া দিয়ে পালকে এগিয়ে নেওয়া, যতক্ষণ না সেটা ঠিক জায়গায় পৌঁছায়। ইবন কাসীর বলেন, এই পানি জমিতে আসে হয় আকাশ থেকে, নয়তো সায়হ থেকে। সায়হ হলো সেই স্রোত, যা নদী বয়ে আনে আর পাহাড় থেকে নেমে যায় যেসব জমির পানি দরকার সেদিকে, প্রত্যেকটি তার নির্ধারিত সময়ে। পানি শুধু ঝরে পড়ে না; তাকে পাঠানো হয়, নিশানা করে চালানো হয়, ঠিক জায়গায় পৌঁছে দেওয়া হয়।"
          },
          {
            "en": "Ma'arif al-Qur'an notices how unusual this phrasing is. Normally the Qur'an describes dry ground being revived by rain that falls upon it directly. Here there is no mention of rain landing on the field at all. Instead the water is made to travel overland to the barren place. Rain is dropped where the soil can hold it, and from there the water is channelled, sometimes for a great distance, to ground that never felt a cloud. The provision is routed deliberately to where it is lacking.",
            "bn": "মাআরিফুল কুরআন লক্ষ করেছে, এখানে বলার ধরনটা কতটা ব্যতিক্রমী। সাধারণত কুরআন বলে, বৃষ্টি সরাসরি শুকনো জমির উপর পড়ে আর তাতেই জমি জেগে ওঠে। এখানে মাঠের উপর বৃষ্টি পড়ার কোনো কথাই নেই। বরং পানিকে ডাঙা পেরিয়ে চালিয়ে আনা হয় ঊষর জায়গা পর্যন্ত। বৃষ্টি পড়ে এমন জায়গায়, যেখানকার মাটি তা ধরে রাখতে পারে। সেখান থেকে পানিকে বইয়ে নেওয়া হয়, কখনো বহু দূর, এমন জমিতে যার উপর কোনোদিন মেঘের ছায়াও পড়েনি। রিজিক ইচ্ছে করেই পৌঁছে দেওয়া হয় ঠিক সেখানে, যেখানে তার অভাব।"
          },
          {
            "en": "That steering carries a quiet lesson about how Allah gives. The rain that becomes your harvest may have fallen on a land you will never visit, drawn across hills and down rivers to arrive at your door. What looks like a local blessing is the end of a long errand you did not arrange and cannot see. Before a single blade of green appears, a whole hidden economy of cloud, slope and current has already been set to work on your behalf.",
            "bn": "আল্লাহ কীভাবে দেন, এই চালিয়ে নেওয়ার মধ্যে তার একটা নীরব শিক্ষা আছে। যে বৃষ্টি আপনার ফসল হয়ে ওঠে, তা হয়তো পড়েছে এমন কোনো জমিতে যেখানে আপনি কোনোদিন যাবেন না। পাহাড় পেরিয়ে নদী বেয়ে তা এসে পৌঁছেছে আপনার দুয়ারে। যাকে মনে হয় ঘরের কাছের নিয়ামত, তা আসলে এক লম্বা সফরের শেষ ধাপ; সে সফর আপনি সাজাননি, চোখেও দেখেন না। একটা সবুজ পাতা মাথা তোলার আগেই মেঘ, ঢাল আর স্রোতের গোটা এক লুকানো কারবার আপনার জন্য কাজে লেগে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ground That Devours",
          "bn": "যে মাটি সব খায়"
        },
        "p": [
          {
            "en": "Why call barren ground al-juruz? At-Tabari traces the word to a vivid root. A naqa jaruz is a she-camel that eats everything in reach and leaves nothing behind; a sword called juraz cuts clean through whatever it meets. So al-ard al-juruz is land that, like that devouring camel, swallows up whatever grows on it until its surface is left bare. At-Tabari also notes that the Arabs voiced the word in several forms, with the people of Banu Tamim opening it to jarz.",
            "bn": "ঊষর জমিকে 'জুরুয' বলা হলো কেন? তাবারী শব্দটির মূল খুঁজে পান এক জীবন্ত ছবিতে। 'নাকা জারূয' হলো এমন উটনী, যে নাগালের সব খেয়ে ফেলে, কিছুই বাকি রাখে না। 'জুরায' নামের তলোয়ার যা সামনে পায় তা-ই এক কোপে কেটে ফেলে। তাই 'আল-আরদুল জুরুয' সেই জমি, যে ওই রাক্ষুসে উটনীর মতো নিজের বুকে যা গজায় সব গিলে খায়, শেষে পড়ে থাকে ন্যাড়া মাটি। তাবারী আরও বলেন, আরবরা শব্দটি কয়েকভাবে উচ্চারণ করত; বনু তামীম গোত্রের লোকেরা প্রথম অক্ষরে যবর দিয়ে বলত 'জারয'।"
          },
          {
            "en": "Al-Qurtubi carries the picture further and records a careful distinction from az-Zamakhshari. Al-juruz, on this reading, is land whose vegetation has been jaraza, cut off, whether for want of water or because grazing stripped it away. It is not the same as permanently sterile ground such as salt flats, which never grow anything at all. The proof, al-Qurtubi says, is the next clause itself: fa-nukhriju bihi zar'an, We bring forth crops with it. A field that yields a crop was never truly dead soil; it was only waiting.",
            "bn": "কুরতুবী ছবিটা আরও এগিয়ে নেন এবং যামাখশারীর একটি সূক্ষ্ম পার্থক্য উল্লেখ করেন। এই ব্যাখ্যায় 'জুরুয' সেই জমি, যার গাছপালা 'জারায' হয়েছে, মানে কেটে সাফ হয়ে গেছে, হয় পানির অভাবে, নয়তো পশু চরে খেয়ে ফেলায়। লোনা প্রান্তরের মতো চিরবন্ধ্যা মাটি এটা নয়; সেখানে তো কখনো কিছুই জন্মায় না। কুরতুবী বলেন, এর প্রমাণ পরের অংশেই: ফানুখরিজু বিহি যারআ, আমি তা দিয়ে ফসল ফলাই। যে মাঠে ফসল হয়, সেটা কখনো সত্যিকারের মরা মাটি ছিল না, শুধু অপেক্ষায় ছিল।"
          },
          {
            "en": "The name, then, is doing double work. It marks the land as hopeless to the eye, ground that has consumed its own green and shows only dust, which Qatada glosses simply as the dusty earth. Yet the same word hints that what was cut off can be given back. The Qur'an chooses a term for emptiness exactly where it is about to display fullness, so that the reader feels the gap between how the ground looks and what its Lord is about to do with it.",
            "bn": "তাহলে নামটা একসঙ্গে দুটো কাজ করছে। চোখের সামনে সে জমিটাকে দেখায় আশাহীন: যে মাটি নিজের সবুজ নিজেই খেয়ে ফেলেছে, এখন শুধু ধুলো দেখায়। কাতাদা একে সোজা কথায় বলেন ধুলোমাখা জমি। অথচ এই শব্দই ইঙ্গিত দেয়, যা কেটে গেছে তা আবার ফিরিয়ে দেওয়া যায়। কুরআন শূন্যতার শব্দটা বেছে নেয় ঠিক সেখানে, যেখানে সে পূর্ণতা দেখাতে যাচ্ছে। ফলে পাঠক টের পান, জমিটা দেখতে কেমন আর তার রব এর সঙ্গে কী করতে যাচ্ছেন, এ দুয়ের মাঝে কত বড় ফারাক।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Barren Land",
          "bn": "কোন সেই ঊষর ভূমি"
        },
        "p": [
          {
            "en": "Where is this juruz land? Here the commentators frankly disagree, and the Qur'an does not settle it. Ibn Abbas said it was a land in Yemen; Mujahid named Abyan near Aden; Ikrimah called it simply the thirsty land, and ad-Dahhak the dead and thirsty earth. Mujahid is also reported as pointing to the land of the Nile, and al-Qurtubi records that this ground has no rivers of its own and lies far from the sea, so water reaches it afresh each year and its people sow three times annually.",
            "bn": "এই 'জুরুয' জমি কোথায়? এখানে তাফসীরকারেরা খোলাখুলি দ্বিমত করেছেন, আর কুরআনও বিষয়টি নির্দিষ্ট করে দেয়নি। ইবন আব্বাস বলেছেন, এটি ইয়েমেনের একটি জমি। মুজাহিদ বলেছেন আদেনের কাছের আবইয়ানের কথা। ইকরিমা একে বলেছেন শুধু তৃষ্ণার্ত জমি, আর দাহহাক বলেছেন মরা ও তৃষ্ণার্ত মাটি। মুজাহিদ থেকে এ-ও বর্ণিত আছে যে তিনি নীল নদের দেশের দিকে ইঙ্গিত করেছেন। কুরতুবী লেখেন, সেই জমির নিজের কোনো নদী নেই, সমুদ্র থেকেও দূরে, তাই প্রতি বছর নতুন করে পানি এসে পৌঁছায় আর সেখানকার মানুষ বছরে তিনবার ফসল বোনে।"
          },
          {
            "en": "Against pinning it to one place, Muhammad ibn Yazid argued that the definite article in al-ard makes the phrase general rather than a single named valley. Ibn Kathir takes the same view: Egypt, watered by the Nile that swells with the rains of Abyssinia and carries red silt over its sandy soil, is certainly meant, he says, but it is not meant alone. Every ground that lives only because water is driven to it falls under the verse. The disagreement over the map leaves the lesson untouched, and perhaps sharpens it: this sign is not somewhere else.",
            "bn": "মুহাম্মাদ ইবন ইয়াযীদ একে এক জায়গায় বেঁধে ফেলার বিপক্ষে। তাঁর যুক্তি, 'আল-আরদ' শব্দের 'আল' কথাটাকে সাধারণ করে দেয়; এটা নাম ধরে বলা কোনো এক উপত্যকা নয়। ইবন কাসীরও একই মত দেন। তাঁর কথায়, মিসর অবশ্যই এর মধ্যে পড়ে। আবিসিনিয়ার বৃষ্টিতে নীল নদ ফুলে ওঠে আর মিসরের বালুময় মাটিতে লাল পলি বয়ে আনে। তবে আয়াতের লক্ষ্য শুধু মিসর নয়। যে জমি কেবল চালিয়ে আনা পানির জোরে বাঁচে, তার সবই এ আয়াতের আওতায়। মানচিত্র নিয়ে মতভেদ শিক্ষাটির কোনো ক্ষতি করে না, বরং হয়তো তাকে আরও ধারালো করে: এই নিদর্শন অন্য কোথাও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Fodder and Daily Bread",
          "bn": "পশুর ঘাস, মানুষের দানা"
        },
        "p": [
          {
            "en": "With that water God brings forth zar', growing things, and names two tables it serves. Al-Qurtubi divides them: the livestock eat of the grass and herbage, while the people eat of the grain, greens and fruits. Al-Baghawi draws the same line, grass and straw for the animals, grain and staples for their owners. As-Sa'di adds that the growth comes up in many kinds at once, and al-Muyassar that it rises in varied colours. One rain, and the whole range of food for beast and man is laid out together.",
            "bn": "সেই পানি দিয়ে আল্লাহ বের করেন 'যারআ', মানে গজিয়ে ওঠা ফসল, আর বলে দেন এ ফসল দুই পাত ভরায়। কুরতুবী ভাগ করে দেখান: গবাদি পশু খায় ঘাস ও লতাপাতা, আর মানুষ খায় দানা, শাকসবজি ও ফল। বাগভীও একই ভাগ করেন: পশুর জন্য ঘাস ও খড়, তাদের মালিকদের জন্য দানা ও প্রধান খাদ্যশস্য। সাদী যোগ করেন, ফসল একসঙ্গে নানা জাতের হয়ে ওঠে; মুয়াসসার বলেন, ওঠে হরেক রঙে। একটিই বৃষ্টি, আর পশু ও মানুষের খাবারের পুরো পসরা একসঙ্গে সাজানো হয়ে যায়।"
          },
          {
            "en": "Notice the order the verse keeps: their livestock eat of it, and themselves. The animals are named first, the people second. The green that feeds a household feeds its herds on the way, and the two are set on one ledger of provision. Nothing in the chain is beneath God's arranging, down to the fodder of a grazing animal. The same driven water that will become a family's bread first becomes the grass beneath its cattle's mouths.",
            "bn": "আয়াতের ক্রমটা খেয়াল করুন: তাদের গবাদি পশু তা খায়, আর তারা নিজেরাও। পশুর নাম আগে, মানুষের নাম পরে। যে সবুজ একটা সংসারকে খাওয়ায়, পথে সে তার পশুপালকেও খাওয়ায়; রিজিকের একই খাতায় দুটোরই হিসাব। এই ধারার কোনো কিছুই আল্লাহর ব্যবস্থার বাইরে নয়, চরে খাওয়া পশুর ঘাসটুকু পর্যন্ত না। যে পানি চালিয়ে আনা হলো, তা-ই একদিন পরিবারের রুটি হবে; কিন্তু তার আগে সেটা হয় তাদের গবাদি পশুর মুখের সামনের ঘাস।"
          },
          {
            "en": "Ibn Kathir reads the whole picture as an unfolding of God's gentleness and kindness towards His creatures, that He should route water to a lifeless place for their sake. He sets beside it the command, let man look at his food (80:24), for We poured the water down in abundance. The verse is not displaying an abstract power; it is pointing at the loaf and the meal. The food before you is the argument, and your own need of it is part of the proof.",
            "bn": "ইবন কাসীরের চোখে গোটা ছবিটা সৃষ্টির প্রতি আল্লাহর কোমলতা ও দয়ার প্রকাশ: তাদেরই জন্য তিনি প্রাণহীন জায়গায় পানি পৌঁছে দেন। এর পাশে তিনি রাখেন এই আদেশ: মানুষ যেন তার খাবারের দিকে তাকায় (৮০:২৪), আমি তো প্রচুর পানি বর্ষণ করেছি। আয়াতটি কোনো বিমূর্ত ক্ষমতা দেখাচ্ছে না; সে আঙুল তুলছে রুটি আর খাবারের দিকে। আপনার সামনের খাবারই দলিল, আর সেই খাবারের প্রতি আপনার নিজের প্রয়োজনও প্রমাণের অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Rain on Three Soils",
          "bn": "তিন মাটিতে এক বৃষ্টি"
        },
        "p": [
          {
            "en": "The Qur'an's image of water meeting different ground has a famous echo in the Sunnah, though it is not a commentary on this verse and is not reported in connection with it. In Sahih al-Bukhari, Abu Musa relates that the Prophet (peace be upon him) said the guidance and knowledge God sent him with are like abundant rain falling on land. Part of that land was fertile, drank the water in, and brought forth grass and herbage in plenty.",
            "bn": "পানি যখন নানা রকম মাটিতে পড়ে, কুরআনের এই ছবির একটা বিখ্যাত প্রতিধ্বনি পাওয়া যায় সুন্নাহয়। তবে সেটি এই আয়াতের ব্যাখ্যা নয়, এ আয়াতের প্রসঙ্গে বর্ণিতও হয়নি। সহীহ বুখারীতে আবূ মূসা বর্ণনা করেন, নবী ﷺ বলেছেন, আল্লাহ তাঁকে যে হেদায়েত ও ইলম দিয়ে পাঠিয়েছেন, তা যেন জমিতে পড়া প্রচুর বৃষ্টি। সেই জমির এক অংশ ছিল উর্বর; সে পানি শুষে নিল আর প্রচুর ঘাস ও লতাপাতা গজাল।"
          },
          {
            "en": "A second part of the land, he said, was hard; it held the water so that God gave people benefit through it, and they drank and gave drink and watered their crops. Another part was barren level ground that neither held water nor grew anything. These are three responses to one rain: soil that drinks and gives, ground that stores for others, and hard flats that take nothing in at all. The water was equal; the earth was not.",
            "bn": "তিনি বললেন, জমির আরেক অংশ ছিল শক্ত। সে পানি আটকে রাখল, আর আল্লাহ তা দিয়ে মানুষের উপকার করলেন: তারা নিজেরা পান করল, অন্যদের পান করাল, ফসলে সেচ দিল। আরেক অংশ ছিল ন্যাড়া সমতল, যা না পানি ধরে রাখে, না কিছু জন্মায়। একই বৃষ্টিতে তিন রকম সাড়া: যে মাটি পান করে আর বিলিয়ে দেয়, যে মাটি অন্যের জন্য জমিয়ে রাখে, আর যে শক্ত সমতল কিছুই ভেতরে নেয় না। পানি ছিল সবার জন্য সমান, মাটি সমান ছিল না।"
          },
          {
            "en": "The Prophet (peace be upon him) read the three soils as three hearts meeting revelation: one that learns and teaches, one that preserves and passes on, and one that lifts not its head to it at all. Laid against our verse, the warning turns inward. The ground outside is not the only juruz that water can be driven toward. A heart can sit under the same guidance as everyone else and still stay the hard flat that simply lets it run off.",
            "bn": "নবী ﷺ এই তিন মাটিকে মিলিয়েছেন ওহির সামনে দাঁড়ানো তিন রকম হৃদয়ের সঙ্গে: একটি শেখে ও শেখায়, একটি সংরক্ষণ করে ও অন্যের কাছে পৌঁছে দেয়, আর একটি এর দিকে মাথা তুলেও তাকায় না। আমাদের আয়াতের পাশে রাখলে সতর্কবাণীটা ফেরে নিজের দিকে। বাইরের মাটিই একমাত্র 'জুরুয' নয়, যার দিকে পানি চালিয়ে আনা যায়। একটি হৃদয় সবার মতো একই হেদায়েতের নিচে বসে থেকেও রয়ে যেতে পারে সেই শক্ত সমতল, যার গা বেয়ে পানি কেবল গড়িয়ে চলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Without Seeing",
          "bn": "দেখেও না দেখা"
        },
        "p": [
          {
            "en": "The verse ends where it began its challenge, on the eye: afala yubsirun, then will they not see? As-Sa'di draws out the sting. By this favour God revives the land and its people, and the sight of it should carry a watcher on to insight and so to the straight path. But blindness overcame them and heedlessness took hold. They did look, he says, yet not with the seeing of men of understanding; they looked with the glance of habit and mere routine, and so were granted no good by it.",
            "bn": "আয়াতের চ্যালেঞ্জ যেখান থেকে শুরু, শেষও সেখানে, চোখে: 'আফালা ইউবসিরূন', তবুও কি তারা দেখবে না? সাদী এর হুলটা ধরিয়ে দেন। এই নিয়ামত দিয়ে আল্লাহ জমি ও তার মানুষকে জীবন্ত করেন। এ দৃশ্য যে দেখে, তার তো এখান থেকে অন্তর্দৃষ্টিতে পৌঁছানোর কথা, আর সেখান থেকে সরল পথে। কিন্তু তাদের পেয়ে বসেছে অন্ধত্ব, জেঁকে বসেছে উদাসীনতা। সাদী বলেন, তারা তাকিয়েছিল ঠিকই, তবে বুঝদার মানুষের মতো দেখে নয়; তারা তাকিয়েছিল অভ্যাসের চোখে, নিছক রুটিনমাফিক। তাই এ থেকে তাদের ভাগ্যে কোনো কল্যাণ জোটেনি।"
          },
          {
            "en": "That is the gap the verse presses: between looking and seeing. Eyes report that a field is green; sight asks who turned it green and what that fact tells me. The disbelievers in the passage are not blind men; they are men with working eyes who have decided, by sheer repetition, that nothing here needs explaining. Familiarity is the quiet thief of wonder. What we see daily we stop examining, and the most constant signs become the easiest to walk straight past.",
            "bn": "আয়াত এই ফারাকটাই চেপে ধরে: তাকানো আর দেখার মাঝের ফারাক। চোখ জানায়, মাঠটা সবুজ; দেখার চোখ জিজ্ঞেস করে, কে একে সবুজ করল, আর এ থেকে আমি কী বুঝব। এই অংশের কাফিররা অন্ধ নয়। তাদের চোখ ঠিকই কাজ করে, তবু একই জিনিস বারবার দেখতে দেখতে তারা ধরে নিয়েছে, এখানে বোঝার কিছু নেই। চেনা জিনিস চুপিসারে বিস্ময় চুরি করে নেয়। যা রোজ দেখি, তা আর খুঁটিয়ে দেখি না; আর যে নিদর্শন সবসময় চোখের সামনে, সেটাকেই সবচেয়ে সহজে পাশ কাটিয়ে চলে যাই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ear, Then the Eye",
          "bn": "আগে কান, পরে চোখ"
        },
        "p": [
          {
            "en": "This closing question answers one asked a verse earlier. In 32:26 the heedless walk among the ruins of nations God destroyed, and that verse ends, then will they not hear? Here, over living fields, it ends, then will they not see? Two senses, two kinds of sign. The ear is summoned by the silence of the dead past; the eye, by the green of the present. The ruins witness against them, and the harvest witnesses for them, and both are met with the same inattention.",
            "bn": "এই শেষ প্রশ্নটা এক আয়াত আগের আরেকটি প্রশ্নের জবাব। ৩২:২৬ আয়াতে উদাসীনেরা হেঁটে বেড়ায় আল্লাহর ধ্বংস করা জাতিগুলোর ধ্বংসাবশেষের মাঝে, আর আয়াতটি শেষ হয় এই প্রশ্নে: তবুও কি তারা শুনবে না? এখানে, জীবন্ত মাঠের দৃশ্যে, শেষ হয়: তবুও কি তারা দেখবে না? দুই ইন্দ্রিয়, দুই রকম নিদর্শন। কানকে ডাকে মৃত অতীতের নীরবতা, চোখকে ডাকে বর্তমানের সবুজ। ধ্বংসাবশেষ তাদের বিরুদ্ধে সাক্ষ্য দেয়, ফসল তাদের পক্ষে সাক্ষ্য দেয়, আর দুটোর জবাবেই তারা দেয় একই অমনোযোগ।"
          },
          {
            "en": "The commentators are near unanimous that the reviving of dead ground is set here as a proof of the reviving of the dead. Al-Muyassar and at-Tabari both read it so: the Power that greens a barren field can raise bodies from their graves. The mockers who follow, in 32:28, ask when this decision will come, as if it were far off. The answer is under their feet each spring. He who settles seed into dust and lifts it living has already shown, in miniature, the very day they doubt.",
            "bn": "তাফসীরকারেরা প্রায় সবাই একমত: মরা জমিকে জীবিত করার কথা এখানে এসেছে মৃতকে জীবিত করার প্রমাণ হিসেবে। মুয়াসসার আর তাবারী দুজনেই এভাবে পড়েন: যে কুদরত ঊষর মাঠকে সবুজ করে, সেই কুদরতই কবর থেকে দেহগুলো তুলে আনতে পারে। পরের আয়াতে (৩২:২৮) বিদ্রূপকারীরা জিজ্ঞেস করে, এই ফয়সালা কবে আসবে, যেন তা বহু দূরের ব্যাপার। জবাবটা প্রতি বসন্তে তাদের পায়ের নিচেই। যিনি বীজকে ধুলোয় শুইয়ে আবার জীবন্ত করে তোলেন, তিনি ছোট্ট পরিসরে আগেই দেখিয়ে দিয়েছেন সেই দিনটি, যা নিয়ে তারা সন্দেহ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "At Your Own Table",
          "bn": "আপনার পাতেই নিদর্শন"
        },
        "p": [
          {
            "en": "So the verse hands you a practice, not only a doctrine. The sign it names is no rare eclipse or distant mountain; it is the food on your plate, arriving three times a day from ground that water was driven to reach. Ibn Kathir frames the whole act as God's kindness to His creatures, and the Qur'an turns the same scene toward gratitude elsewhere: We revived the dead earth and brought grain from it, so that they eat of it (36:33); will they not then give thanks (36:35)?",
            "bn": "তাই আয়াত আপনার হাতে শুধু একটা আকিদা নয়, একটা আমলও তুলে দেয়। যে নিদর্শনের কথা আয়াত বলছে, তা কোনো বিরল গ্রহণ বা দূরের পাহাড় নয়; তা আপনার পাতের খাবার। দিনে তিনবার তা আসে এমন মাটি থেকে, যেখানে পৌঁছাতে পানিকে চালিয়ে আনতে হয়েছে। ইবন কাসীর গোটা ব্যাপারটিকে দেখেন সৃষ্টির প্রতি আল্লাহর দয়া হিসেবে, আর কুরআন অন্য জায়গায় একই দৃশ্যকে শুকরিয়ার দিকে ঘুরিয়ে দেয়: আমি মরা জমিকে জীবিত করেছি আর তা থেকে দানা বের করেছি, যা থেকে তারা খায় (৩৬:৩৩); তবুও কি তারা শুকরিয়া আদায় করবে না (৩৬:৩৫)?"
          },
          {
            "en": "The move the verse asks is tiny and within reach. Before the next meal, follow the bread back: to the mill, the field, the rain that fell on a hill you have never climbed, the water steered over dry miles to one green patch. Do that once with full attention and the plate stops being ordinary. To see, in this verse, is to let a daily mercy register as mercy, and to answer it, as the earth answers water, by bringing something good forth.",
            "bn": "আয়াত যা চায়, তা ছোট্ট একটা কাজ, আর আপনার নাগালেই। পরের বার খেতে বসার আগে রুটির পথ ধরে পেছনে হাঁটুন: আটার কল পর্যন্ত, মাঠ পর্যন্ত, সেই বৃষ্টি পর্যন্ত যা পড়েছিল এমন এক পাহাড়ে যেখানে আপনি কখনো ওঠেননি, সেই পানি পর্যন্ত যাকে শুকনো মাইলের পর মাইল পার করে এক টুকরো সবুজে পৌঁছে দেওয়া হয়েছে। একবার পুরো মন দিয়ে এটা করে দেখুন, পাতের খাবার আর সাধারণ মনে হবে না। এই আয়াতের ভাষায় দেখা মানে রোজকার রহমতকে রহমত বলে টের পাওয়া, আর মাটি যেমন পানির জবাব দেয়, তেমনি ভালো কিছু ফলিয়ে তার জবাব দেওয়া।"
          }
        ]
      }
    ]
  }
});
