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
          "en": "A Sentence Already Running",
          "bn": "আগে থেকে চলা এক বাক্য"
        },
        "p": [
          {
            "en": "Alladhi ahsana kulla shay'in khalaqahu: who made well everything He created. The verse opens with a relative pronoun, so it carries on a sentence already under way. 32:4 began with Allah, who created the heavens and the earth and what lies between them in six days, then rose over the Throne; 32:5 has Him directing the affair from the heaven to the earth; 32:6 names Him the Knower of the unseen and the witnessed, the Mighty, the Merciful. The Muyassar makes the link plain by opening its gloss with the name itself: Allah, who made firm the creation of everything.",
            "bn": "আল্লাযী আহসানা কুল্লা শাইয়িন খালাকাহু: যিনি যা কিছু সৃষ্টি করেছেন, সবই উত্তম করে গড়েছেন। আয়াতের শুরু ‘যিনি’ দিয়ে। অর্থাৎ নতুন বাক্য এখানে শুরু হয়নি, আগের বাক্যটাই চলছে। ৩২:৪ শুরু হয়েছিল আল্লাহর নামে: তিনি আকাশমণ্ডলী, পৃথিবী আর এ দুয়ের মাঝের সবকিছু ছয়টি দিনে সৃষ্টি করেছেন, তারপর আরশের উপর সমুন্নত হয়েছেন। ৩২:৫ বলে, আকাশ থেকে পৃথিবী পর্যন্ত সব বিষয় তিনিই পরিচালনা করেন। ৩২:৬ তাঁকে চেনায় দৃশ্য ও অদৃশ্যের জ্ঞানী, মহাপরাক্রমশালী, পরম দয়ালু বলে। মুয়াসসার ব্যাখ্যার শুরুতেই নামটা বসিয়ে যোগসূত্রটা পরিষ্কার করে দেয়: আল্লাহ, যিনি প্রতিটি জিনিসের সৃষ্টি মজবুত করেছেন।"
          },
          {
            "en": "As-Sa'di, on 32:4, says the heavens and the earth took six days although He was able to create them in an instant, because He is gentle and wise, and he calls the rising over the Throne a rising befitting His majesty. On this verse he reaches for the same word: everything Allah made, He made in a way that befits it and suits it. Ibn Kathir describes the turn the passage takes next. Having mentioned the creation of the heavens and the earth, He begins to mention the creation of man.",
            "bn": "সা'দী ৩২:৪-এর আলোচনায় বলেন, আল্লাহ এক মুহূর্তেই আকাশ ও পৃথিবী সৃষ্টি করতে সক্ষম ছিলেন, তবু ছয়টি দিন লাগিয়েছেন, কারণ তিনি কোমল ও প্রজ্ঞাময়। আরশের উপর সমুন্নত হওয়াকে তিনি বলেন এমন সমুন্নতি, যা তাঁর মহিমার উপযুক্ত। এ আয়াতে এসে সা'দী একই শব্দ ব্যবহার করেন: আল্লাহ যা কিছু বানিয়েছেন, এমনভাবে বানিয়েছেন যা সেটার উপযুক্ত, সেটার সঙ্গে মানানসই। এরপর আলোচনা কোন দিকে মোড় নেয়, ইবন কাসীর তা বলে দেন। আকাশ ও পৃথিবীর সৃষ্টির কথা বলার পর আল্লাহ মানুষের সৃষ্টির কথা শুরু করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Khalaqahu or Khalqahu",
          "bn": "খালাকাহু, নাকি খালকাহু"
        },
        "p": [
          {
            "en": "The last word of the clause is read two ways. At-Tabari reports that some readers of Makkah, Madinah and Basra read khalqahu, with the lam unvowelled, while some Madinans and most Kufans read khalaqahu, with a vowel on it. Al-Qurtubi names names: the Makkan reciter Ibn Kathir, Abu 'Amr and Ibn 'Amir read khalqahu, and the rest khalaqahu, which Abu 'Ubayd and Abu Hatim preferred for its ease. Al-Baghawi states it from the other side: Nafi' and the people of Kufa read khalaqahu, as a verb, and the others khalqahu.",
            "bn": "বাক্যাংশের শেষ শব্দটা দুইভাবে পড়া হয়। তাবারী জানান, মক্কা, মদীনা ও বসরার কিছু কারী পড়েছেন খালকাহু, লামে সাকিন দিয়ে। আর মদীনার কিছু কারী ও কুফার অধিকাংশ পড়েছেন খালাকাহু, লামে যবর দিয়ে। কুরতুবী নাম ধরে বলেন: মক্কার কারী ইবন কাসীর, আবু আমর ও ইবন আমির পড়েছেন খালকাহু, বাকিরা খালাকাহু। আবু উবায়দ ও আবু হাতিম সহজ বলে খালাকাহু বেছে নিয়েছিলেন। বাগাভী কথাটা বলেন উল্টো দিক থেকে: নাফি' ও কুফাবাসী পড়েছেন খালাকাহু, ক্রিয়া হিসেবে, আর অন্যরা খালকাহু।"
          },
          {
            "en": "The difference changes what the clause is about. Read khalaqahu, a past-tense verb, and al-Qurtubi parses it as describing shay': He made well every thing that He created. Read khalqahu, and the creating itself becomes the object: He made well the creation of everything, as al-Baghawi glosses it. At-Tabari declines to rank them. Both are well-known readings, he says, each recited by scholars among the reciters and each sound in meaning, since Allah made firm His creation and made firm every thing He created. Whichever the reciter follows, he is right.",
            "bn": "পার্থক্যটা বাক্যাংশের বিষয়ই বদলে দেয়। খালাকাহু পড়লে শব্দটা অতীতকালের ক্রিয়া, আর কুরতুবী একে ধরেন ‘শাই’ শব্দের বিশেষণ হিসেবে: তিনি যে জিনিসই সৃষ্টি করেছেন, তাকে উত্তম করেছেন। খালকাহু পড়লে সৃষ্টি করার কাজটাই হয়ে যায় কর্ম: তিনি প্রতিটি জিনিসের সৃষ্টিকে উত্তম করেছেন। বাগাভী অর্থটা এভাবেই করেন। তাবারী দুটির মধ্যে কোনোটাকে এগিয়ে রাখেন না। তাঁর কথায়, দুটিই প্রসিদ্ধ কিরাআত, দুটিই কারী আলেমরা পড়েছেন, আর দুটির অর্থই সঠিক। কারণ আল্লাহ তাঁর সৃষ্টিকে মজবুত করেছেন, আবার যা কিছু সৃষ্টি করেছেন তাকেও মজবুত করেছেন। কারী যেটাই পড়ুন, ঠিকই পড়লেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Parsing the Verbal Noun",
          "bn": "ক্রিয়াবিশেষ্যের ব্যাকরণ"
        },
        "p": [
          {
            "en": "Al-Qurtubi sets out how the grammarians account for khalqahu. For Sibawayh it is a verbal noun, because saying He made well every thing already implies that He created every thing a creating, as with sun'a Allah, the work of Allah, in 27:88, and kitaba Allahi 'alaykum, Allah's decree upon you, in 4:24. Others take it as a substitute for kulla, giving: who made well the creation of everything. Some read it as a specifying accusative, made every thing well in creation, and some as the remnant of a dropped preposition: made every thing well in its creation.",
            "bn": "খালকাহু শব্দের ব্যাকরণ নিয়ে নাহুবিদদের মতগুলো কুরতুবী সাজিয়ে দেন। সিবাওয়াইহের মতে এটি মাসদার, অর্থাৎ ক্রিয়াবিশেষ্য। কারণ ‘তিনি প্রতিটি জিনিসকে উত্তম করেছেন’ কথাটার ভেতরেই আছে যে তিনি প্রতিটি জিনিস সৃষ্টি করেছেন। একই গঠন দেখা যায় ২৭:৮৮-এ সুন‘আল্লাহ, আল্লাহর কারিগরি, আর ৪:২৪-এ কিতাবাল্লাহি আলাইকুম, তোমাদের উপর আল্লাহর বিধান। অন্যদের মতে শব্দটি ‘কুল্লা’ থেকে বদল, তখন অর্থ দাঁড়ায়: যিনি প্রতিটি জিনিসের সৃষ্টিকে উত্তম করেছেন। কেউ একে তাময়ীয ধরেন: সৃষ্টির দিক থেকে প্রতিটি জিনিসকে উত্তম করেছেন। কেউ বলেন, এখানে একটি অব্যয় উহ্য: প্রতিটি জিনিসকে তার সৃষ্টিতে উত্তম করেছেন।"
          },
          {
            "en": "Ibn Kathir, through Malik from Zayd ibn Aslam, glosses the clause as: He made well the creation of every thing, and remarks that Zayd seems to treat it as words placed forward and back. At-Tabari reports the same view, that the word set first is meant to come after, and supports it with two lines of poetry in which a noun is set before the one it belongs to. Al-Qurtubi notes one further possibility that grammar allows, khalquhu in the nominative, as if to say: that is His creation. Al-Qurtubi lists these analyses one after another and ranks none of them.",
            "bn": "ইবন কাসীর মালিকের সূত্রে যায়দ ইবন আসলাম থেকে অর্থটা আনেন এভাবে: তিনি প্রতিটি জিনিসের সৃষ্টিকে উত্তম করেছেন। সঙ্গে মন্তব্য করেন, যায়দ যেন একে আগে-পিছে বসানো শব্দের দৃষ্টান্ত হিসেবে দেখেছেন। তাবারীও এ মতটা উল্লেখ করেন: যে শব্দ আগে এসেছে, অর্থে তার জায়গা পরে। এর সমর্থনে তিনি দুটি কবিতার পঙক্তি আনেন, যেখানে একটি বিশেষ্য তার মালিকের আগে বসেছে। কুরতুবী আরও একটি সম্ভাবনার কথা বলেন, যা ব্যাকরণে বৈধ: পেশ দিয়ে খালকুহু, যেন বলা হচ্ছে, এ তাঁরই সৃষ্টি। কুরতুবী বিশ্লেষণগুলো একটার পর একটা উল্লেখ করেন, কোনোটাকে এগিয়ে রাখেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ahsana as Made Firm",
          "bn": "আহসানা মানে মজবুত গড়া"
        },
        "p": [
          {
            "en": "The first gloss of ahsana is to make firm and exact, atqana and ahkama. At-Tabari gives it with chains. Through 'Ikrima, Ibn 'Abbas said of this verse: the monkey's rear is not beautiful, but He made its creation firm; a second chain has him reciting the verse with the vowelled khalaqahu and saying the same. Through Ibn Abi Najih, Mujahid said: He made firm every thing He created. Through another chain at-Tabari has Mujahid say ahsa, He counted every thing. Ibn Kathir's own paraphrase gathers the gloss: He made well the creation of things, made it exact and firm.",
            "bn": "আহসানা শব্দের প্রথম ব্যাখ্যা: মজবুত ও নিখুঁত করা, আরবিতে আতকানা ও আহকামা। তাবারী এটি সনদসহ আনেন। ইকরিমার সূত্রে ইবন আব্বাস (রাঃ) এ আয়াত সম্পর্কে বলেছেন: বানরের পশ্চাদ্দেশ সুন্দর নয়, তবে আল্লাহ তার গঠন মজবুত করেছেন। আরেক সনদে আছে, তিনি আয়াতটি খালাকাহু পড়তেন আর একই কথা বলতেন। ইবন আবী নাজীহের সূত্রে মুজাহিদ বলেছেন: তিনি যা কিছু সৃষ্টি করেছেন, সবই মজবুত করেছেন। আরেক সনদে তাবারী মুজাহিদ থেকে আনেন ‘আহসা’, অর্থাৎ তিনি প্রতিটি জিনিস গুনে রেখেছেন। ইবন কাসীর নিজের ভাষায় ব্যাখ্যাটা গুছিয়ে বলেন: তিনি সব জিনিসের সৃষ্টি উত্তম করেছেন, নিখুঁত ও মজবুত করেছেন।"
          },
          {
            "en": "Al-Qurtubi gives the same sense from Ibn 'Abbas with an explanation attached: He made firm every thing He created, meaning He brought it as He willed, and it did not depart from His will. A thing is ahsan, on this view, with respect to the purposes for which it was intended. He repeats the monkey report from Ibn 'Abbas and 'Ikrima: the monkey's rear is not beautiful, but it is exact and firmly made. Al-Baghawi has Ibn 'Abbas say simply: He made it exact and firm. The Muyassar, as noted, uses the single verb ahkama.",
            "bn": "কুরতুবীও ইবন আব্বাস (রাঃ) থেকে একই অর্থ আনেন, সঙ্গে একটা ব্যাখ্যা জুড়ে দেন: তিনি যা সৃষ্টি করেছেন সবই মজবুত করেছেন, মানে যেমন চেয়েছেন তেমনই এনেছেন, তাঁর ইচ্ছা থেকে কিছুই সরে যায়নি। এ মতে কোনো জিনিস ‘উত্তম’, কারণ যে উদ্দেশ্যে তাকে বানানো হয়েছে, সে কাজের জন্য সে ঠিকঠাক। কুরতুবী ইবন আব্বাস (রাঃ) ও ইকরিমা থেকে বানরের কথাটাও আবার আনেন: বানরের পশ্চাদ্দেশ সুন্দর নয়, কিন্তু তা নিখুঁত ও মজবুত। বাগাভী ইবন আব্বাস (রাঃ)-এর কথা আনেন সংক্ষেপে: তিনি একে নিখুঁত ও মজবুত করেছেন। মুয়াসসার, আগেই দেখা গেছে, শুধু আহকামা ক্রিয়াটি ব্যবহার করে।"
          },
          {
            "en": "At-Tabari prefers this gloss on the reading khalaqahu, and gives his reason. Read that way, he argues, the verb can carry only one of two senses: making firm and exact, or making beautiful in the sense of comeliness. Since among the things He created there are some whose ugliness and unsightliness no one doubts, the verse cannot mean that He made beautiful all that He created. It means that He made each thing firm and perfected its making. That is his judgement on one of the two readings, and he gives a different preference for the other.",
            "bn": "খালাকাহু কিরাআতে তাবারী এই ব্যাখ্যাকেই অগ্রাধিকার দেন, আর কারণও বলেন। তাঁর যুক্তি, এভাবে পড়লে ক্রিয়াটির দুটি অর্থের একটিই হতে পারে: মজবুত ও নিখুঁত করা, অথবা রূপ ও সৌন্দর্যের অর্থে সুন্দর করা। আল্লাহর সৃষ্টির মধ্যে এমন জিনিসও আছে, যার কদর্যতা ও শ্রীহীনতা নিয়ে কারও সন্দেহ নেই। তাই আয়াতের অর্থ হতে পারে না যে তিনি যা সৃষ্টি করেছেন সবই সুন্দর করেছেন। অর্থ হলো, তিনি প্রতিটি জিনিস মজবুত করেছেন, তার কারিগরি নিখুঁত করেছেন। এ রায় দুই কিরাআতের একটির ব্যাপারে। অন্যটির বেলায় তিনি আলাদা ব্যাখ্যা বেছে নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Case for Beauty",
          "bn": "সৌন্দর্যের পক্ষের মত"
        },
        "p": [
          {
            "en": "The second gloss keeps the plain sense of husn, goodness and beauty. At-Tabari's report from Qatada reads: He made it good after the manner in which He created it. Al-Baghawi's from Qatada is a single word, hassanahu, He made it good. Al-Qurtubi records a further argument: every thing He created is good, because no one could produce its like, and it points to its Maker. He then notes a division over the reach of kulla shay'. Some say the phrase is general in wording but particular in meaning: He made good the creation of every good thing.",
            "bn": "দ্বিতীয় ব্যাখ্যা হুসন শব্দের সরল অর্থটাই ধরে রাখে: ভালো ও সুন্দর। কাতাদা থেকে তাবারীর বর্ণনা: তিনি যেভাবে সৃষ্টি করেছেন, সেভাবেই তাকে সুন্দর করেছেন। বাগাভীর বর্ণনায় কাতাদার কথা এক শব্দে: হাসসানাহু, তিনি তাকে সুন্দর করেছেন। কুরতুবী আরেকটি যুক্তি উল্লেখ করেন: তাঁর সৃষ্ট প্রতিটি জিনিসই সুন্দর, কারণ এর মতো কিছু বানানোর সাধ্য কারও নেই, আর প্রতিটি জিনিস তার স্রষ্টার দিকে ইশারা করে। এরপর তিনি দেখান, ‘কুল্লা শাই’ কতদূর পর্যন্ত বিস্তৃত, তা নিয়ে মতভেদ আছে। কারও মতে শব্দে ব্যাপক হলেও অর্থে সীমিত: তিনি প্রত্যেক সুন্দর জিনিসের সৃষ্টিকে সুন্দর করেছেন।"
          },
          {
            "en": "Others, al-Qurtubi continues, take it as general in wording and meaning alike: He made every thing He created good, so that even the dog is good in its make, and he attributes this to Ibn 'Abbas. He then closes with Qatada: in the monkey's rear there is beauty. So one animal serves both sides. In Ibn 'Abbas's report through 'Ikrima it is the example of a thing firmly made but not beautiful; in Qatada's saying it is the example of beauty where none is expected. Al-Qurtubi's text carries Ibn 'Abbas on both sides and leaves the two reports unreconciled.",
            "bn": "কুরতুবী আরও বলেন, অন্যদের মতে কথাটা শব্দে ও অর্থে দুই দিকেই ব্যাপক: তিনি যা কিছু সৃষ্টি করেছেন সবই সুন্দর করেছেন, এমনকি কুকুরকেও তার গড়নে সুন্দর করেছেন। এ মত তিনি ইবন আব্বাস (রাঃ)-এর বলে উল্লেখ করেন। শেষে আনেন কাতাদার কথা: বানরের পশ্চাদ্দেশেও সৌন্দর্য আছে। ফলে একই প্রাণী দুই পক্ষেরই উদাহরণ। ইকরিমার সূত্রে ইবন আব্বাস (রাঃ)-এর বর্ণনায় সে এমন জিনিসের নমুনা, যা মজবুত কিন্তু সুন্দর নয়। কাতাদার কথায় সে সৌন্দর্যের নমুনা, যেখানে কেউ সৌন্দর্য আশা করে না। কুরতুবীর লেখায় ইবন আব্বাস (রাঃ) দুই পক্ষেই আছেন, আর দুই বর্ণনার মিল তিনি দেখাননি।"
          },
          {
            "en": "Ma'arif al-Qur'an takes the wide view. Allah made all He created under the dictate of His wisdom and with regard to what benefits the whole system, so each thing has a beauty of its own; dogs, pigs, snakes, scorpions and wolves, commonly thought bad, are not really bad in terms of the world's overall good. Quoting the author of Bayan ul-Qur'an, it adds that even anger and greed are bad only when used out of place, while in human acts whatever Allah has not allowed is not good. As-Sa'di's line is briefer: each thing made to befit and suit it, and this, he says, is general.",
            "bn": "মাআরিফুল কুরআন ব্যাপক মতটাই নেয়। আল্লাহ যা কিছু সৃষ্টি করেছেন, নিজের প্রজ্ঞা অনুযায়ী আর গোটা ব্যবস্থার কল্যাণের দিকে খেয়াল রেখে করেছেন। তাই প্রতিটি জিনিসের নিজস্ব সৌন্দর্য আছে। কুকুর, শূকর, সাপ, বিছা, নেকড়েকে সাধারণত খারাপ ভাবা হয়, কিন্তু দুনিয়ার সামগ্রিক কল্যাণের হিসাবে এরা আসলে খারাপ নয়। বায়ানুল কুরআনের লেখকের কথা উদ্ধৃত করে মাআরিফ আরও বলে, রাগ বা লোভও খারাপ হয় কেবল অস্থানে ব্যবহারে। তবে মানুষের কাজের বেলায় আল্লাহ যা অনুমতি দেননি, তা ভালো নয়। সা'দীর কথা আরও সংক্ষিপ্ত: প্রতিটি জিনিস তার উপযুক্ত ও মানানসই করে বানানো, আর তাঁর ভাষায় এ কথা সবার জন্য প্রযোজ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Taught What Each Needs",
          "bn": "প্রত্যেককে প্রয়োজনটুকু শেখানো"
        },
        "p": [
          {
            "en": "A third group, at-Tabari reports, read ahsana as a'lama: He made known to every thing He created. They took the verse to mean that He inspired His creatures with what they need, deriving ahsana from the idiom fulan yuhsinu kadha, so-and-so is good at a thing, meaning he knows it. Through Khasif, Mujahid glossed the clause: He gave every thing its creation, the human to the human, the horse to the horse, the donkey to the donkey. Al-Baghawi gives Muqatil's version from the same idiom: He knew how to create every thing.",
            "bn": "তাবারী জানান, তৃতীয় একদল আহসানা শব্দকে পড়েছেন আ‘লামা অর্থে: তিনি যা কিছু সৃষ্টি করেছেন, প্রত্যেককে জানিয়ে দিয়েছেন। তাঁদের মতে আয়াতের অর্থ, আল্লাহ তাঁর সৃষ্টিকে তাদের প্রয়োজনের জ্ঞান ইলহাম করেছেন। শব্দটা তাঁরা নিয়েছেন আরবি বাগধারা থেকে: ‘ফুলান ইউহসিনু কাযা’, অমুক এ কাজটা ভালো পারে, মানে সে তা জানে। খুসাইফের সূত্রে মুজাহিদ বাক্যাংশটির ব্যাখ্যা করেছেন: তিনি প্রতিটি জিনিসকে তার সৃষ্টি দিয়েছেন, মানুষকে মানুষের জন্য, ঘোড়াকে ঘোড়ার জন্য, গাধাকে গাধার জন্য। বাগাভী একই বাগধারা থেকে মুকাতিলের ব্যাখ্যা আনেন: তিনি জানেন প্রতিটি জিনিস কীভাবে সৃষ্টি করতে হয়।"
          },
          {
            "en": "Al-Qurtubi registers the grammar this gloss requires: if ahsana means afhama and a'lama, made to understand and made to know, the verb takes two objects and khalqahu becomes the second. At-Tabari prefers this sense on the reading khalqahu, because there it is the most evident of the word's meanings, and he cites 20:50, where Musa (AS) says: our Lord is He who gave every thing its form, then guided it. So at-Tabari's own preference follows the reading: firmness and exactness for khalaqahu, knowledge and inspiration for khalqahu.",
            "bn": "এ ব্যাখ্যার জন্য যে ব্যাকরণ লাগে, কুরতুবী তা উল্লেখ করেন। আহসানা যদি আফহামা ও আ‘লামা অর্থে হয়, অর্থাৎ বুঝিয়ে দেওয়া ও জানিয়ে দেওয়া, তবে ক্রিয়াটির দুটি কর্ম লাগবে, আর খালকাহু হবে দ্বিতীয় কর্ম। খালকাহু কিরাআতে তাবারী এই অর্থকেই অগ্রাধিকার দেন, কারণ সেখানে শব্দটির অর্থগুলোর মধ্যে এটিই সবচেয়ে স্পষ্ট। সঙ্গে তিনি আনেন ২০:৫০, যেখানে মূসা (আঃ) বলেন: আমাদের রব তিনি, যিনি প্রতিটি জিনিসকে তার আকৃতি দিয়েছেন, তারপর পথ দেখিয়েছেন। ফলে তাবারীর নিজের পছন্দ কিরাআতের সঙ্গে বদলায়। খালাকাহু হলে মজবুত ও নিখুঁত করা, খালকাহু হলে জ্ঞান ও ইলহাম দেওয়া।"
          },
          {
            "en": "The same verse, 20:50, also carries a related reading that does not turn on knowledge. At-Tabari reports from Mujahid, through Ibn Jurayj and al-A'raj, that this verse is like 20:50: He did not put the make of beasts into the make of people, nor the make of people into beasts, but created each thing and measured it exactly. Al-Qurtubi gives the same comparison. Al-Baghawi reports, under it is said, that each animal was created in its own form, complete and good, every limb measured to what its life needs. Mujahid's name thus stands behind four different glosses in at-Tabari's text alone.",
            "bn": "২০:৫০ আয়াতকে ঘিরে আরেকটি কাছাকাছি ব্যাখ্যাও আছে, যা জ্ঞানের অর্থের উপর নির্ভর করে না। তাবারী ইবন জুরাইজ ও আ'রাজের সূত্রে মুজাহিদ থেকে আনেন, এ আয়াত ২০:৫০-এর মতো: তিনি পশুর গড়ন মানুষের গড়নে রাখেননি, মানুষের গড়নও পশুর গড়নে রাখেননি, বরং প্রতিটি জিনিস সৃষ্টি করে তাকে মাপমতো নির্ধারণ করেছেন। কুরতুবীও একই তুলনা টানেন। বাগাভী ‘বলা হয়’ বলে আনেন: প্রত্যেক প্রাণীকে তার নিজস্ব আকৃতিতে সৃষ্টি করা হয়েছে, সে তার গড়নে পূর্ণ ও সুন্দর, আর তার প্রতিটি অঙ্গ জীবনধারণের প্রয়োজন মাফিক মাপা। এভাবে শুধু তাবারীর লেখাতেই মুজাহিদের নামে চারটি আলাদা ব্যাখ্যা পাওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "From Clay, Then a Drop",
          "bn": "মাটি থেকে, তারপর এক ফোঁটা"
        },
        "p": [
          {
            "en": "Wa bada'a khalqa al-insani min tin: and He began the creation of man from clay. At-Tabari, al-Qurtubi, al-Baghawi and the Muyassar all say the man meant here is Adam (AS); Ibn Kathir calls him the father of mankind, created from clay. As-Sa'di reads the clause as a narrowing: the first sentence was general, then He singled out the human being for his honour and rank. Ibn Kathir (en) carries the line into 32:8: Adam's offspring reproduce from a nutfah, the despised fluid of the next verse, which comes from the loins of men.",
            "bn": "ওয়া বাদাআ খালকাল ইনসানি মিন তীন: আর তিনি মানুষ সৃষ্টির সূচনা করেছেন মাটি থেকে। তাবারী, কুরতুবী, বাগাভী ও মুয়াসসার সবাই বলেন, এখানে মানুষ বলতে আদম (আঃ)। ইবন কাসীর তাঁকে বলেন মানবজাতির পিতা, যাঁকে মাটি থেকে সৃষ্টি করা হয়েছে। সা'দী বাক্যাংশটিকে দেখেন পরিসর ছোট করে আনা হিসেবে। প্রথম বাক্য ছিল সবার জন্য, তারপর আল্লাহ মানুষকে আলাদা করে উল্লেখ করেছেন তার মর্যাদা ও শ্রেষ্ঠত্বের কারণে। ইংরেজি সংক্ষিপ্ত ইবন কাসীর কথাটা ৩২:৮ পর্যন্ত টেনে নেন: আদমের বংশধরেরা জন্মায় নুতফা থেকে, পরের আয়াতের সেই তুচ্ছ পানি, যা আসে পুরুষের পৃষ্ঠদেশ থেকে।"
          },
          {
            "en": "On 32:9, Ibn Kathir (en) explains then He fashioned him as His shaping Adam and making him upright once He had created him from clay, takes the hearts as reason, and says the truly blessed one uses these faculties to worship and obey his Lord. Ma'arif al-Qur'an draws the contrast: man is the most beautiful of creation, citing 95:4, in the best of stature, yet the essential ingredient of his making was as lowly as semen, and the rest was the masterpiece of perfect power and profound wisdom.",
            "bn": "৩২:৯-এর ‘তারপর তিনি তাকে সুঠাম করেছেন’ অংশের ব্যাখ্যায় ইংরেজি ইবন কাসীর বলেন, আদমকে মাটি থেকে সৃষ্টি করার পর আল্লাহ তাঁকে আকৃতি দিয়েছেন, সোজা করে দাঁড় করিয়েছেন। অন্তর বলতে তিনি বোঝেন বিবেক-বুদ্ধি। আর বলেন, সত্যিকারের সৌভাগ্যবান সে, যে এই শক্তিগুলো রবের ইবাদত ও আনুগত্যে লাগায়। মাআরিফুল কুরআন একটা বৈপরীত্য দেখায়। মানুষ সৃষ্টির মধ্যে সবচেয়ে সুন্দর, এর প্রমাণে আনে ৯৫:৪, সর্বোত্তম গড়নে। অথচ তার সৃষ্টির মূল উপাদান বীর্যের মতো তুচ্ছ জিনিস। বাকিটা আল্লাহর পূর্ণ কুদরত ও গভীর প্রজ্ঞার কারিগরি।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Glosses, One Object",
          "bn": "তিন ব্যাখ্যা, এক বস্তু"
        },
        "p": [
          {
            "en": "None of the eight tafsir texts fetched for this verse attaches a hadith to it, so none is quoted here. What they leave instead is a verse that holds its readings open. At-Tabari accepts both vowellings as correct, and the glosses of ahsana stand side by side in his pages and al-Qurtubi's: made firm, made beautiful, taught what it needs. This article chooses none of them. A reader can turn all three on the same object, a body, an animal, a single day, and find each one asking something different of him.",
            "bn": "এ আয়াতের জন্য যে আটটি তাফসীর সংগ্রহ করা হয়েছে, তার কোনোটিই আয়াতের সঙ্গে কোনো হাদীস জুড়ে দেয়নি, তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি। তার বদলে তাফসীরগুলো আয়াতের পাঠ খোলা রেখে দেয়। তাবারী দুই কিরাআতকেই সঠিক মানেন। আর আহসানার তিন ব্যাখ্যা তাঁর ও কুরতুবীর লেখায় পাশাপাশি আছে: মজবুত করা, সুন্দর করা, প্রয়োজন শিখিয়ে দেওয়া। এ লেখা কোনোটিকেই বেছে নেয় না। পাঠক তিনটি ব্যাখ্যাই একই জিনিসের উপর রেখে দেখতে পারেন, নিজের শরীর, একটা প্রাণী বা একটা দিন, আর দেখবেন প্রত্যেকটি তাঁর কাছে আলাদা কিছু চায়।"
          },
          {
            "en": "Ma'arif al-Qur'an's opening rule gives the practical edge: everything in this world is good, and evil comes through its wrong use. Ibn Kathir's closing line on 32:9 points the same way, toward faculties spent in obedience. The surah turns next to those who doubt a new creation, and later to the believers whose sides forsake their beds at night in 32:16, for whom 32:17 promises a hidden comfort.",
            "bn": "মাআরিফুল কুরআনের শুরুর কথাটা ব্যবহারিক দিকটা ধরিয়ে দেয়: এ দুনিয়ার সবকিছুই ভালো, মন্দ আসে ভুল ব্যবহার থেকে। ৩২:৯ নিয়ে ইবন কাসীরের শেষ কথাও একই দিকে ইশারা করে: আল্লাহর দেওয়া শক্তিগুলো আনুগত্যে খরচ করা। এরপর সূরা ফেরে তাদের দিকে, যারা নতুন সৃষ্টিতে সন্দেহ করে। আরও পরে ৩২:১৬-এ আসে সেই মুমিনদের কথা, রাতে যাদের পার্শ্বদেশ বিছানা থেকে আলাদা থাকে, আর ৩২:১৭ তাদের জন্য লুকানো চোখজুড়ানো প্রতিদানের প্রতিশ্রুতি দেয়।"
          }
        ]
      }
    ]
  },
  "32:16": {
    "sections": [
      {
        "h": {
          "en": "Sides Drawn From the Bed",
          "bn": "বিছানা ছেড়ে সরে যাওয়া পার্শ্ব"
        },
        "p": [
          {
            "en": "Tatajafa junubuhum 'ani-l-madaji': their sides draw away from their beds. At-Tabari explains the verb as built on jafa', which he defines as nubuw, a springing away from something, and quotes a line of rajaz verse that uses the same word. Al-Qurtubi glosses it as their sides rise and spring away from the places of lying down, and reports from az-Zajjaj and ar-Rummani that tajafi is moving aside in an upward direction, the same word used for passing over someone who has wronged you with abuse.",
            "bn": "তাতাজাফা জুনূবুহুম আনিল মাদাজি: তাদের পার্শ্ব বিছানা থেকে সরে যায়। তাবারী বলেন, ক্রিয়াটির মূল জাফা, আর জাফা মানে নুবূ, কোনো কিছু থেকে ছিটকে দূরে থাকা। একই শব্দওয়ালা এক রাজায কবিতার চরণও তিনি সাক্ষী হিসেবে আনেন। কুরতুবীর ব্যাখ্যায় তাদের পার্শ্ব শোয়ার জায়গা থেকে উঠে যায়, আলগা হয়ে যায়। যাজ্জাজ ও রুম্মানী থেকে তিনি আনেন, তাজাফী মানে উপরের দিকে সরে যাওয়া। কেউ গালমন্দ করলে তাকে পাশ কাটিয়ে মাফ করে দেওয়ার বেলাতেও এই শব্দই চলে।"
          },
          {
            "en": "Junub is the plural of janb, the side, and madaji' the plural of madja', which al-Qurtubi defines as the places of sleep. The word could be taken as the time of lying down, he notes, but that is a figurative sense and the literal sense has the better claim. He reads the clause as a hal, a description of their state: their sides held away. At-Tabari states why the Qur'an pictures them this way: because they left lying down to sleep, busy with prayer.",
            "bn": "জুনূব শব্দটি জানবের বহুবচন, মানে পাশ বা পাঁজর। মাদাজি হলো মাদজার বহুবচন, কুরতুবীর সংজ্ঞায় ঘুমানোর জায়গা। তিনি মানেন, শব্দটিকে শোয়ার সময় অর্থেও নেওয়া যায়। তবে সেটা রূপক অর্থ, আর আক্ষরিক অর্থটাই বেশি হকদার। পুরো বাক্যাংশকে তিনি হাল হিসেবে পড়েন, মানে তাদের অবস্থার বর্ণনা: পার্শ্ব বিছানা থেকে আলাদা। কুরআন কেন তাদের এভাবে আঁকল, তাবারী তা খোলাখুলি বলেন: নামাযে ব্যস্ত হয়ে তারা ঘুমের জন্য শোয়া ছেড়ে দিয়েছিল।"
          },
          {
            "en": "The verse names no subject of its own. It continues 32:15: only those believe in Our verses who, when reminded of them, fall down prostrate, glorify their Lord with praise, and are not arrogant. At-Tabari and the Muyassar both identify the people of 32:16 as these believers in Allah's signs. Ma'arif al-Qur'an marks the turn in the passage: the verses before it warned the deniers of the Day of Judgement, and from 32:15 onward it sets out the qualities of sincere believers.",
            "bn": "আয়াতে আলাদা করে কারও নাম নেই। কথাটা চলছে ৩২:১৫ থেকে: আমার আয়াতে কেবল তারাই ঈমান আনে, যাদের সেগুলো দিয়ে উপদেশ দিলে সিজদায় লুটিয়ে পড়ে, প্রশংসার সঙ্গে রবের পবিত্রতা ঘোষণা করে, আর অহংকার করে না। তাবারী ও মুয়াসসার দুজনেই বলেন, ৩২:১৬-এর মানুষগুলো আল্লাহর আয়াতে বিশ্বাসী এরাই। মাআরিফুল কুরআন মোড়টা দেখিয়ে দেয়। আগের আয়াতগুলোতে কিয়ামত অস্বীকারকারীদের সতর্ক করা হয়েছিল, আর ৩২:১৫ থেকে শুরু হয় খাঁটি মুমিনদের গুণের বিবরণ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night Is in the Word",
          "bn": "শব্দের ভেতরেই রাত"
        },
        "p": [
          {
            "en": "Before weighing any report, at-Tabari settles something from the language. When the Arabs describe a man by saying his side sprang away from his bed, he says, they mean he forsook sleep at the time people are known to sleep, and that is the night, not the day. So on his reading the verse is a night verse before anyone asks which prayer it means. His witness is a line by 'Abdullah ibn Rawaha al-Ansari (RA) describing the Prophet ﷺ: he passes the night keeping his side from his bed, when the beds weigh heavy upon the idolaters.",
            "bn": "কোনো বর্ণনা যাচাইয়ের আগে তাবারী ভাষা থেকেই একটা বিষয় মীমাংসা করে নেন। তিনি বলেন, আরবরা যখন কারও সম্পর্কে বলে তার পাঁজর বিছানা থেকে ছিটকে গেছে, তখন বোঝায় মানুষ যে সময় সাধারণত ঘুমায়, সে তখন ঘুম ছেড়েছে। সে সময়টা রাত, দিন নয়। তাই তাঁর পাঠে কোন নামায, সে প্রশ্ন ওঠার আগেই আয়াতটি রাতের আয়াত। সাক্ষী হিসেবে তিনি আনেন আব্দুল্লাহ ইবন রাওয়াহা আল-আনসারী (রাঃ)-এর একটি চরণ, যা নবী ﷺ-এর বর্ণনায় রচিত: মুশরিকদের বিছানা যখন ঘুমে ভারী, তিনি তখন রাত কাটান বিছানা থেকে পাঁজর আলগা রেখে।"
          },
          {
            "en": "The line is more than a grammarian's proof. Al-Bukhari records it (Bukhari 1155) in a report from Abu Hurayrah (RA) recalling the Prophet ﷺ: a brother of yours does not speak obscenity, meaning Ibn Rawaha. Among us is the Messenger of Allah, reciting His Book when the known light of dawn breaks; he showed us guidance after blindness, so our hearts are certain that what he said will come to pass; he passes the night keeping his side from his bed, when the beds weigh heavy upon the idolaters. Al-Baghawi brings it under this verse with a chain that runs through al-Bukhari.",
            "bn": "চরণটি শুধু ব্যাকরণবিদের দলিল নয়। বুখারী এটি বর্ণনা করেছেন (বুখারী ১১৫৫) আবু হুরায়রা (রাঃ)-এর এমন এক বর্ণনায়, যেখানে নবী ﷺ-এর প্রসঙ্গ আছে: তোমাদের এক ভাই অশ্লীল কথা বলে না, অর্থাৎ ইবন রাওয়াহা। তারপর সেই কবিতা: আমাদের মাঝে আছেন আল্লাহর রাসূল, ভোরের চেনা আলো ফুটলে তিনি তাঁর কিতাব তিলাওয়াত করেন। অন্ধত্বের পর তিনি আমাদের হিদায়াত দেখিয়েছেন, তাই আমাদের হৃদয় নিশ্চিত, তিনি যা বলেছেন তা ঘটবেই। মুশরিকদের বিছানা যখন ঘুমে ভারী, তিনি তখন রাত কাটান বিছানা থেকে পাঁজর আলগা রেখে। বাগাভী এ আয়াতের অধীনে এটি এনেছেন এমন সনদে, যা বুখারীর মধ্য দিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Six Answers, Many Names",
          "bn": "ছয় উত্তর, অনেক নাম"
        },
        "p": [
          {
            "en": "What pulls them from the bed? Al-Qurtubi first splits the answers in two. Some say it is the remembrance of Allah, in prayer or outside it, a view he gives to Ibn 'Abbas and ad-Dahhak; at-Tabari reports it in their words: whenever they wake they remember Allah, in prayer, standing, sitting or on their sides, and they never stop. Others say it is prayer, and then disagree about which prayer. Al-Qurtubi counts four views, and at-Tabari, Ibn Kathir and al-Baghawi fill in the names.",
            "bn": "তাদের বিছানা থেকে টেনে তোলে কী? কুরতুবী প্রথমে উত্তরগুলোকে দুই ভাগ করেন। এক দলের মতে সেটা আল্লাহর জিকির, নামাযের ভেতরে হোক বা বাইরে। এ মত তিনি ইবন আব্বাস ও দাহহাকের বলে উল্লেখ করেন। তাবারী তাঁদেরই ভাষায় আনেন: যখনই তারা জেগে ওঠে, আল্লাহকে স্মরণ করে, নামাযে, দাঁড়িয়ে, বসে কিংবা কাত হয়ে, আর এ স্মরণ কখনো থামে না। অন্য দলের মতে সেটা নামায, তবে কোন নামায, তা নিয়ে তাঁরা একমত নন। কুরতুবী চারটি মত গোনেন, আর তাবারী, ইবন কাসীর ও বাগাভী নামগুলো পূরণ করেন।"
          },
          {
            "en": "The first is voluntary prayer at night. Al-Qurtubi calls it the view of the majority of commentators, the reading that carries the praise, and names Mujahid, al-Awza'i, Malik ibn Anas, al-Hasan al-Basri and Abu al-'Aliyah. Al-Baghawi calls it the best known of the sayings, and at-Tabari adds Ibn Zayd: these are the ones who keep vigil for the night prayer. The second is voluntary prayer between maghrib and 'isha. Ibn Kathir names Anas, 'Ikrimah, Muhammad ibn al-Munkadir, Abu Hazim and Qatadah, and al-Baghawi says the last two called it salat al-awwabin.",
            "bn": "প্রথম মত রাতের নফল নামায। কুরতুবী একে বলেন অধিকাংশ মুফাসসিরের মত, যে পাঠে প্রশংসাটা সবচেয়ে স্পষ্ট। তিনি নাম নেন মুজাহিদ, আওযায়ী, মালিক ইবন আনাস, হাসান বসরী ও আবুল আলিয়ার। বাগাভী একে বলেন সবচেয়ে প্রসিদ্ধ মত। তাবারী যোগ করেন ইবন যায়দের কথা: এরা রাতের নামাযের জন্য তাহাজ্জুদগুজার। দ্বিতীয় মত মাগরিব ও ইশার মাঝের নফল। ইবন কাসীর নাম নেন আনাস, ইকরিমা, মুহাম্মাদ ইবনুল মুনকাদির, আবু হাযিম ও কাতাদার। বাগাভী জানান, শেষোক্ত দুজন একে বলতেন সালাতুল আওয়াবীন।"
          },
          {
            "en": "The third is 'isha itself, the prayer called al-'atamah: al-Qurtubi gives it to al-Hasan and 'Ata', at-Tabari to 'Ata' and Abu Salamah. Beside it stands waiting for 'isha, reported from Anas, and in al-Baghawi from 'Ata': those who do not sleep until they have prayed the later 'isha. The fourth is 'isha and fajr in congregation: Ibn Kathir has it from ad-Dahhak, al-Qurtubi adds Abu ad-Darda' and 'Ubadah, al-Baghawi adds Abu Dharr. Al-Hasan, ad-Dahhak and Anas each appear under different views, because each tafsir carries different reports from them.",
            "bn": "তৃতীয় মত স্বয়ং ইশা, যে নামাযকে আতামা বলা হতো। কুরতুবী এ মত দেন হাসান ও আতাকে, তাবারী দেন আতা ও আবু সালামাকে। এর পাশেই আছে ইশার অপেক্ষার মত, যা আনাস থেকে বর্ণিত, আর বাগাভীতে আতা থেকেও: এরা শেষ ইশা না পড়া পর্যন্ত ঘুমায় না। চতুর্থ মত জামাআতে ইশা ও ফজর। ইবন কাসীর এটি আনেন দাহহাক থেকে, কুরতুবী যোগ করেন আবুদ দারদা ও উবাদার নাম, বাগাভী যোগ করেন আবু যারের নাম। হাসান, দাহহাক ও আনাসের নাম একাধিক মতের নিচে আসে, কারণ একেক তাফসীর তাঁদের থেকে একেক বর্ণনা বহন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Reports Carried From Anas",
          "bn": "আনাস (রাঃ)-এর নামে বর্ণনাগুলো"
        },
        "p": [
          {
            "en": "Several of these views lean on reports about the verse's descent. Al-Baghawi relates from Anas (RA): it was revealed about us, the company of the Ansar; we would pray maghrib and not go back to our homes until we had prayed 'isha with the Prophet ﷺ. At-Tabari carries, through Malik ibn Dinar, that Anas said it was revealed about men among the Companions who prayed between maghrib and 'isha. Ibn Kathir adds al-Bazzar's report in which Bilal (RA) says the same, and al-Bazzar notes it has no other route.",
            "bn": "এসব মতের কয়েকটি আয়াত নাযিলের প্রেক্ষাপট নিয়ে বর্ণনার উপর ভর করে। বাগাভী আনাস (রাঃ) থেকে আনেন: আয়াতটি নাযিল হয়েছে আমাদের, আনসারদের ব্যাপারে। আমরা মাগরিব পড়তাম, তারপর নবী ﷺ-এর সঙ্গে ইশা না পড়া পর্যন্ত ঘরে ফিরতাম না। তাবারী মালিক ইবন দীনারের সূত্রে আনেন, আনাস বলেছেন, আয়াতটি নাযিল হয়েছে নবীর এমন কিছু সাহাবীর ব্যাপারে, যাঁরা মাগরিব ও ইশার মাঝে নামায পড়তেন। ইবন কাসীর বাযযারের এক বর্ণনা যোগ করেন, যেখানে বিলাল (রাঃ) একই কথা বলেন। বাযযার নিজেই জানান, এর আর কোনো সূত্র নেই।"
          },
          {
            "en": "Abu Dawud records the route through Qatadah (Abu Dawud 1321). His wording from Anas on this verse is: they used to stay awake between maghrib and 'isha, praying; and al-Hasan used to say: standing in prayer at night. No grading of his own accompanies it. At-Tirmidhi records another report (Tirmidhi 3196): Anas said this verse was revealed about waiting for this prayer that is called al-'atamah. In the text fetched, at-Tirmidhi calls it hasan sahih gharib and says he knows it only through this one chain; al-Qurtubi quotes his verdict as hasan gharib.",
            "bn": "কাতাদার সূত্রটি আবু দাউদ বর্ণনা করেছেন (আবু দাউদ ১৩২১)। এ আয়াত প্রসঙ্গে আনাস থেকে তাঁর শব্দ: তারা মাগরিব ও ইশার মাঝে জেগে থেকে নামায পড়ত। আর হাসান বলতেন: এর মানে রাতে নামাযে দাঁড়ানো। আবু দাউদ নিজে এর কোনো মান উল্লেখ করেননি। তিরমিযী ভিন্ন একটি বর্ণনা এনেছেন (তিরমিযী ৩১৯৬): আনাস বলেন, এ আয়াত নাযিল হয়েছে আতামা নামে পরিচিত এই নামাযের অপেক্ষা নিয়ে। যে পাঠ সংগ্রহ করা হয়েছে, তাতে তিরমিযী একে হাসান সহীহ গরীব বলেছেন এবং জানিয়েছেন, এই একটি সূত্র ছাড়া তিনি এটি চেনেন না। কুরতুবী অবশ্য তাঁর রায় উদ্ধৃত করেন হাসান গরীব বলে।"
          },
          {
            "en": "Why single out waiting? Al-Qurtubi reports from Anas that the Prophet ﷺ used to delay 'isha until about a third of the night, and from Ibn 'Atiyyah that in the Jahiliyyah people slept from sunset or whenever they liked, so staying up for 'isha came as something strange and hard. Ibn Kathir adds that Ibn Jarir transmits the waiting report with a good chain. The reports do not name one occasion. They describe different evenings in the early community, so none of them settles the question alone.",
            "bn": "অপেক্ষাকেই বা আলাদা করে ধরা কেন? কুরতুবী আনাস থেকে জানান, নবী ﷺ ইশা প্রায় রাতের এক-তৃতীয়াংশ পর্যন্ত দেরিতে পড়তেন। ইবন আতিয়্যা থেকে তিনি আনেন, জাহিলিয়াতে লোকেরা সূর্য ডোবার পর থেকেই, কিংবা যখন খুশি, ঘুমিয়ে পড়ত। তাই ইশার জন্য জেগে থাকা তাদের কাছে ছিল অচেনা ও কষ্টের। ইবন কাসীর যোগ করেন, অপেক্ষার বর্ণনাটি ইবন জারীর উত্তম সনদে এনেছেন। বর্ণনাগুলো কোনো একটি ঘটনার নাম দেয় না। প্রথম যুগের ভিন্ন ভিন্ন সন্ধ্যার ছবি দেয়, তাই এককভাবে কোনোটিই প্রশ্নের মীমাংসা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Ways of Weighing",
          "bn": "মেলানোর তিন পথ"
        },
        "p": [
          {
            "en": "At-Tabari reasons from the wording. Allah described these people by their sides springing from their beds without tying it to any particular state or hour of the night, so the description covers the whole night. Whoever prays between maghrib and 'isha, waits for the later 'isha, stands the night or part of it, remembers Allah in its hours, or prays al-'atamah falls under the verse's outward sense. Still, he says, reading it as night prayer pleases him most, because that is its most evident meaning and the report from the Prophet ﷺ came with it.",
            "bn": "তাবারী যুক্তি টানেন আয়াতের শব্দ থেকে। আল্লাহ এ মানুষগুলোর বর্ণনা দিয়েছেন বিছানা থেকে পাঁজর সরে যাওয়া দিয়ে, রাতের কোনো বিশেষ অবস্থা বা প্রহরের সঙ্গে বেঁধে দেননি। কাজেই বর্ণনাটি গোটা রাতকেই ধরে। যে মাগরিব ও ইশার মাঝে নামায পড়ে, শেষ ইশার অপেক্ষায় থাকে, পুরো রাত বা রাতের কিছু অংশ দাঁড়িয়ে কাটায়, রাতের প্রহরে আল্লাহর জিকির করে, কিংবা আতামা পড়ে, সে আয়াতের বাহ্যিক অর্থের ভেতরেই পড়ে। তবু তিনি বলেন, একে কিয়ামুল লাইল, অর্থাৎ রাতের নামায অর্থে নেওয়াই তাঁর কাছে বেশি পছন্দের। কারণ এটাই এর সবচেয়ে স্পষ্ট অর্থ, আর নবী ﷺ থেকে আসা বর্ণনাও এ অর্থেই এসেছে।"
          },
          {
            "en": "Al-Qurtubi calls ad-Dahhak's view, 'isha and fajr in congregation, a good view that gathers the others in meaning. Whoever waits for 'isha is in prayer while he waits, and whoever keeps fajr early in its time usually rises before dawn to wash, pray and remember Allah, so the drawing away happens at both ends of the night. He supports it with Muslim's report from 'Uthman ibn 'Affan (RA) (Muslim 656): whoever prays 'isha in congregation, it is as if he stood half the night; and whoever prays the dawn prayer in congregation, it is as if he prayed the whole night.",
            "bn": "কুরতুবী দাহহাকের মত, অর্থাৎ জামাআতে ইশা ও ফজরকে, বলেন উত্তম মত, যা অর্থের দিক থেকে বাকি সব মতকে এক করে। যে ইশার অপেক্ষায় থাকে, অপেক্ষার পুরো সময়টা সে নামাযের মধ্যেই আছে। আর যে ফজর প্রথম ওয়াক্তে পড়ার অভ্যাস রাখে, সে সাধারণত ভোরের আগেই উঠে অযু করে, নামায পড়ে, জিকির করে। এভাবে রাতের শুরু আর শেষ, দুই প্রান্তেই বিছানা ছাড়া হয়ে যায়। সমর্থনে তিনি আনেন উসমান ইবন আফফান (রাঃ) থেকে মুসলিমের বর্ণনা (মুসলিম ৬৫৬): যে জামাআতে ইশা পড়ে, সে যেন অর্ধেক রাত নামাযে দাঁড়াল। আর যে জামাআতে ফজর পড়ে, সে যেন সারা রাত নামায পড়ল।"
          },
          {
            "en": "Ma'arif al-Qur'an takes a third road. It reports that Ibn Kathir and other authorities saw no contradiction among these sayings: the verse includes them all, while prayer late in the night stays the highest, and the Bayan ul-Qur'an chose the same. Each of the three verdicts is its commentator's own, and this article does not choose between them.",
            "bn": "মাআরিফুল কুরআন ধরে তৃতীয় পথ। তার বর্ণনায় ইবন কাসীর ও অন্য তাফসীরবিদেরা এসব মতের মধ্যে কোনো বিরোধ দেখেননি। আয়াতটি সবগুলোকেই শামিল করে, তবে শেষ রাতের নামাযই সবার উপরে থাকে। বয়ানুল কুরআনও এই পথই বেছে নিয়েছে। তিনটি রায়ের প্রতিটি তার নিজ নিজ মুফাসসিরের, আর এ লেখা তাদের কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Between Dread and Longing",
          "bn": "ভয় আর আশার মাঝখানে"
        },
        "p": [
          {
            "en": "Yad'una rabbahum khawfan wa tama'an: they call on their Lord in fear and hope. The glosses differ over what is feared and what is hoped for. Ibn Kathir: fear of the ruin of His punishment, hope in His abundant reward. Ibn 'Abbas, in al-Baghawi: fear of the Fire, hope of Paradise. Qatadah, in at-Tabari: fear of Allah's punishment, hope in His mercy. As-Sa'di adds a pair that turns the fear inward: fear that their deeds will be rejected, and hope that they will be accepted.",
            "bn": "ইয়াদঊনা রব্বাহুম খাওফাওঁ ওয়া তামাআ: তারা ভয় ও আশা নিয়ে তাদের রবকে ডাকে। কিসের ভয়, কিসের আশা, তা নিয়ে ব্যাখ্যাগুলো ভিন্ন। ইবন কাসীর বলেন, তাঁর শাস্তির পরিণামের ভয়, আর তাঁর বিপুল প্রতিদানের আশা। বাগাভীতে ইবন আব্বাস বলেন, জাহান্নামের ভয়, জান্নাতের আশা। তাবারীতে কাতাদা বলেন, আল্লাহর আযাবের ভয়, তাঁর রহমতের আশা। সা'দী এমন এক জোড়া যোগ করেন যা ভয়কে ভেতরের দিকে ফেরায়: আমল ফিরিয়ে দেওয়া হবে, সেই ভয়, আর কবুল হবে, সেই আশা।"
          },
          {
            "en": "As-Sa'di reads the two as held together at once, and he widens the calling itself: they ask for what serves their religion and their worldly life, and for harm to both to be turned away. Al-Qurtubi parses khawfan as the purpose for which they call, while allowing it to be a verbal noun, and lets yad'una describe either their state as their sides draw away or a fresh trait: they call on their Lord in every state, night and day. Ma'arif al-Qur'an says it is the pairing itself that keeps them returning, anxious and eager at once.",
            "bn": "সা'দীর পাঠে দুটি গুণ একসঙ্গে ধরা থাকে, একটি আরেকটিকে বাদ দেয় না। ডাকার পরিধিও তিনি বাড়িয়ে দেন: দীন ও দুনিয়ার যা কল্যাণ, তারা তা চায়, আর দুটোরই ক্ষতি দূর হোক, সেই দুআ করে। কুরতুবী ব্যাকরণে খাওফান শব্দকে ধরেন ডাকার উদ্দেশ্য হিসেবে, তবে একে মাসদার পড়ারও সুযোগ রাখেন। ইয়াদঊনা তাঁর মতে হয় পাঁজর সরে যাওয়ার সময়ের অবস্থা, নয়তো নতুন এক গুণ: দিনে রাতে সব অবস্থায় তারা রবকে ডাকে। মাআরিফুল কুরআনের মতে এই জোড়াটাই তাদের বারবার ফিরিয়ে আনে, একই সঙ্গে উদ্বিগ্ন আর উদ্দীপ্ত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Out of What We Gave Them",
          "bn": "আমার দেওয়া রিযিক থেকে"
        },
        "p": [
          {
            "en": "Wa mimma razaqnahum yunfiqun: and from what We have provided them, they spend. At-Tabari says they spend in the way of Allah and pay from it the dues He made binding on them; Qatadah, in his report, says in obedience to Allah and in His path. Al-Qurtubi records two views on what is meant: the obligatory zakat, or voluntary giving, which he calls the more praiseworthy reading. Al-Baghawi likewise gives obligatory charity and, as the other view, a sense covering both the binding and the voluntary.",
            "bn": "ওয়া মিম্মা রাযাকনাহুম ইউনফিকূন: আর আমি তাদের যে রিযিক দিয়েছি, তা থেকে তারা খরচ করে। তাবারী বলেন, তারা আল্লাহর পথে খরচ করে, আর এ থেকেই আদায় করে আল্লাহ তাদের উপর যে হক ফরয করেছেন। কাতাদার বর্ণনায় আছে, আল্লাহর আনুগত্যে ও তাঁর পথে। কুরতুবী দুটি মত আনেন: ফরয যাকাত, অথবা নফল দান। দ্বিতীয়টিকে তিনি বেশি প্রশংসার পাঠ বলেন। বাগাভীও এক মতে ফরয সদকা আর অন্য মতে ফরয ও নফল দুটোকেই ধরার কথা বলেন।"
          },
          {
            "en": "As-Sa'di makes the openness the point. The verse names no limit and no recipient, he says, so that it covers everything: binding spending such as zakat, expiations and maintenance of wives and relatives, and recommended spending in good causes, from provision little or much. Giving is good wherever it lands, rich or poor, near or far, though its reward rises with the benefit it brings. Ibn Kathir notes what the clause adds to the portrait: these people join acts of nearness that stay with the doer to acts whose good reaches others.",
            "bn": "সা'দী এই খোলা রাখাটাকেই মূল কথা বানান। তিনি বলেন, আয়াতে খরচের কোনো সীমা বা কার জন্য খরচ, তা বলা নেই, যাতে সবকিছু এর ভেতরে আসে। ফরয খরচ, যেমন যাকাত, কাফফারা, স্ত্রী ও আত্মীয়দের ভরণপোষণ, আর ভালো কাজে মুস্তাহাব খরচ, রিযিক অল্প হোক বা বেশি। দান যেখানেই পৌঁছাক, ভালো, ধনীর হাতে হোক বা গরিবের, কাছের লোকের হোক বা দূরের। তবে উপকার যত বেশি, সওয়াবও তত বেশি। ইবন কাসীর দেখান, এ অংশ ছবিটায় কী যোগ করে: যে আমলের ফল আমলকারীর নিজের কাছে থাকে, তার সঙ্গে তারা জুড়ে দেয় এমন আমল, যার কল্যাণ অন্যের কাছেও পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Doors of Good in the Dark",
          "bn": "অন্ধকারে কল্যাণের দরজা"
        },
        "p": [
          {
            "en": "The report at-Tabari leans on comes through Mu'adh ibn Jabal (RA), and Ibn Kathir, al-Qurtubi and al-Baghawi bring it here too. At-Tirmidhi records it (Tirmidhi 2616): on a journey Mu'adh asked for a deed to admit him to Paradise and keep him from the Fire. After naming the pillars, the Prophet ﷺ said: Shall I not guide you to the doors of good? Fasting is a shield, and charity extinguishes sin as water extinguishes fire, and a man's prayer in the depth of the night.",
            "bn": "তাবারী যে বর্ণনার উপর ভর করেন, তা এসেছে মুআয ইবন জাবাল (রাঃ)-এর সূত্রে। ইবন কাসীর, কুরতুবী ও বাগাভীও এটি এ আয়াতের অধীনে এনেছেন। তিরমিযী বর্ণনা করেছেন (তিরমিযী ২৬১৬): এক সফরে মুআয এমন আমলের কথা জানতে চাইলেন, যা তাঁকে জান্নাতে নেবে আর জাহান্নাম থেকে দূরে রাখবে। নবী ﷺ ইসলামের স্তম্ভগুলোর কথা বলার পর বললেন: আমি কি তোমাকে কল্যাণের দরজাগুলোর সন্ধান দেব না? রোযা ঢাল। সদকা গুনাহ নিভিয়ে দেয়, যেমন পানি আগুন নেভায়। আর গভীর রাতে মানুষের নামায।"
          },
          {
            "en": "Then he recited this verse up to ya'malun, the last word of 32:17, and went on to the head of the matter, its pillar and its peak, ending with a warning about what tongues reap. At-Tirmidhi says: this hadith is hasan sahih. Al-Qurtubi finds the night-prayer reading confirmed by that next verse too: no soul knows what comfort of the eyes is hidden for them, and he explains that they were repaid for what they hid with what is hidden.",
            "bn": "তারপর তিনি এ আয়াত থেকে তিলাওয়াত করে গেলেন ইয়ামালূন পর্যন্ত, যা ৩২:১৭-এর শেষ শব্দ। এরপর তিনি বললেন দীনের মাথা, তার খুঁটি আর তার চূড়ার কথা, আর শেষ করলেন জিহ্বার ফসল নিয়ে সতর্কবাণী দিয়ে। তিরমিযী বলেন, হাদীসটি হাসান সহীহ। কুরতুবী রাতের নামাযের পাঠের সমর্থন পান পরের আয়াতেও: কেউ জানে না, তাদের জন্য কোন চোখজুড়ানো প্রতিদান লুকিয়ে রাখা আছে। তাঁর ব্যাখ্যায়, তারা যা গোপনে করেছিল, তার প্রতিদানও এল গোপন রাখা জিনিস দিয়ে।"
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
