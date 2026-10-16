/**
 * Tadabbur long-form articles — surah 33.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "33:6": {
    "sections": [
      {
        "h": {
          "en": "After the Three Denials",
          "bn": "তিন অস্বীকৃতির পর"
        },
        "p": [
          {
            "en": "Surah al-Ahzab opens on the pain inflicted on the Prophet ﷺ by the disbelievers and the hypocrites, and Ma'arif al-Qur'an reads the verses just before it as cutting away three customs of the age of ignorance: that a man might carry two hearts in a single chest, that a wife put away by zihar becomes a mother, and that an adopted son becomes a real son, in 33:4 and 33:5. Each false tie is severed, and the verse then raises the true ties in their place, the first being the believer's bond to the Prophet.",
            "bn": "সূরা আহযাব শুরু হয় কাফির ও মুনাফিকদের হাতে নবী ﷺ-এর পাওয়া কষ্টের কথা দিয়ে। মাআরিফুল কুরআন বলছে, এ আয়াতের ঠিক আগে ৩৩:৪ ও ৩৩:৫ আয়াত জাহিলিয়্যাতের তিনটি রীতি বাতিল করে দেয়: এক বুকে কারও দুটি অন্তর থাকতে পারে; জিহার করলে স্ত্রী মা হয়ে যায়; আর পালকপুত্র আসল ছেলে হয়ে যায়। এভাবে প্রতিটি মিথ্যা বাঁধন কেটে দেওয়ার পর এ আয়াত সেই জায়গায় সত্যিকারের বাঁধনগুলো দাঁড় করায়। তার প্রথমটি হলো নবীর সঙ্গে মু'মিনের বাঁধন।"
          },
          {
            "en": "Ma'arif al-Qur'an states the point of the verse plainly: reverence for the Prophet ﷺ and obedience to him, above the whole of creation, is wajib, a duty of the strongest degree. The clauses that follow do not wander from it. They fix where the believer's deepest loyalty sits, who stands in the place of a mother to the community, and how a family's wealth passes on. Each answer corrects something the old order had placed wrongly.",
            "bn": "মাআরিফুল কুরআন আয়াতের মূল কথাটা সোজাসুজি বলে: গোটা সৃষ্টির উপরে নবী ﷺ-কে সম্মান করা আর তাঁর আনুগত্য করা ওয়াজিব, সবচেয়ে জোরালো স্তরের কর্তব্য। পরের বাক্যগুলোও এ কথা থেকে সরে যায় না। সেগুলো ঠিক করে দেয় মু'মিনের সবচেয়ে গভীর টান কোথায় থাকবে, উম্মাহর কাছে মায়ের জায়গায় কারা, আর পরিবারের সম্পদ কীভাবে উত্তরাধিকারে যায়। পুরোনো ব্যবস্থা যা ভুল জায়গায় বসিয়েছিল, প্রতিটি জবাব তা ঠিক করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Nearer Than One's Own Self",
          "bn": "নিজের চেয়েও কাছে"
        },
        "p": [
          {
            "en": "An-Nabiyyu awla bi'l-mu'minina min anfusihim: the Prophet has a greater claim on the believers than they have on themselves. Al-Baghawi reads awla here as the carrying-out of his command and the duty of obeying him. As-Sa'di sets the weight of it in a single line: the nearest thing to a person, and what holds the first claim on him, is his own self, yet the Messenger ﷺ has a greater claim on him than that self has. The word speaks of precedence, not of ownership.",
            "bn": "আন-নাবিয়্যু আওলা বিল-মু'মিনীনা মিন আনফুসিহিম: মু'মিনদের উপর তাদের নিজেদের চেয়েও নবীর দাবি বেশি। বাগাভী এখানে 'আওলা'-র অর্থ করেন তাঁর হুকুম পালন করা আর তাঁর আনুগত্য ফরজ হওয়া। সা'দী এক বাক্যেই কথাটার ওজন বুঝিয়ে দেন: মানুষের সবচেয়ে কাছের, আর তার উপর সবার আগে যার দাবি, সে তার নিজের সত্তা; অথচ সেই সত্তার চেয়েও তার উপর রাসূল ﷺ-এর দাবি বেশি। শব্দটা অগ্রাধিকারের কথা বলে, মালিকানার নয়।"
          },
          {
            "en": "The commentators give the rule a working edge. Al-Baghawi cites Ibn Abbas and Ata: when the Prophet ﷺ calls a man to a thing while his own self calls him to its opposite, obeying the Prophet is more entitled to him than obeying himself. Al-Qurtubi adds that he is more worthy to rule over the believers; Ibn Kathir ties this to 4:65, where faith is withheld until they make him judge and find no resistance within. Ibn Zayd likens it to the binding force of a master's decree, an image of command, not of possession.",
            "bn": "তাফসীরকারেরা নিয়মটাকে বাস্তব জীবনে নামিয়ে আনেন। বাগাভী ইবন আব্বাস (রাঃ) ও আতার কথা আনেন: নবী ﷺ যখন কাউকে এক কাজের দিকে ডাকেন আর তার মন ডাকে উল্টো দিকে, তখন নিজের মনের কথা মানার চেয়ে নবীর আনুগত্যই তার উপর বেশি হক রাখে। কুরতুবী যোগ করেন, মু'মিনদের উপর হুকুম চালানোর তিনিই বেশি যোগ্য। ইবন কাসীর একে ৪:৬৫ আয়াতের সঙ্গে মেলান। সে আয়াত বলছে, তাঁকে বিচারক না মানা আর মনে কোনো আপত্তি না রাখা পর্যন্ত তারা মু'মিন হতে পারে না। ইবন যায়দ একে তুলনা করেন মনিবের হুকুমের সঙ্গে, যা মানতেই হয়। এটা হুকুমের ছবি, মালিকানার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding Us by the Waistband",
          "bn": "কোমর ধরে রাখা"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a reason for the greater claim that goes to its heart. Ibn Atiyya reports from some of the knowing scholars: he is more entitled to them than their own selves because their selves call them to destruction, while he calls them to deliverance. Ibn Atiyya strengthens this with a hadith, and al-Qurtubi notes that Muslim recorded it in his Sahih from Abu Hurayra: the Prophet ﷺ likened himself to a man who kindled a fire into which the moths kept falling, while he held them back by their waistbands. From Jabir come the words, and you are slipping out of my hands.",
            "bn": "কুরতুবী এই বড় দাবির এমন এক কারণ তুলে ধরেন, যা একেবারে মূলে গিয়ে পৌঁছায়। ইবন আতিয়্যা কিছু জ্ঞানী আলিমের কথা আনেন: তাদের উপর তাদের নিজের সত্তার চেয়ে তাঁর হক বেশি, কারণ নিজের সত্তা তাদের ডাকে ধ্বংসের দিকে, আর তিনি ডাকেন মুক্তির দিকে। ইবন আতিয়্যা একটি হাদিস দিয়ে কথাটা মজবুত করেন, আর কুরতুবী জানান, মুসলিম তাঁর সহীহ গ্রন্থে এটি আবু হুরায়রা (রাঃ) থেকে এনেছেন: নবী ﷺ নিজেকে তুলনা করেছেন এমন একজনের সঙ্গে, যে আগুন জ্বালাল আর পোকা-পতঙ্গ বারবার সেই আগুনে ঝাঁপিয়ে পড়ছে, আর তিনি কোমর ধরে তাদের টেনে রাখছেন। জাবির (রাঃ)-এর বর্ণনায় আছে: আর তোমরা আমার হাত ফসকে বেরিয়ে যাচ্ছ।"
          },
          {
            "en": "As-Sa'di gathers the same truth from the other side. The Messenger ﷺ, he writes, was the most merciful and most tender of all creation toward them, and not the weight of an atom of good ever reached them, nor was the like of it in harm ever turned away from them, except by his hand and through him. A claim like that is earned, not merely announced. The response as-Sa'di draws from it is to set his love above all people, and never to go ahead of him.",
            "bn": "সা'দী একই সত্যে পৌঁছান উল্টো দিক থেকে। তিনি লেখেন, রাসূল ﷺ ছিলেন গোটা সৃষ্টির মধ্যে তাদের প্রতি সবচেয়ে দয়ালু, সবচেয়ে কোমল। এক অণু পরিমাণ কল্যাণও তাদের কাছে পৌঁছেনি, এক অণু পরিমাণ অকল্যাণও তাদের থেকে সরেনি, তাঁর হাত দিয়ে আর তাঁর মাধ্যমে ছাড়া। এমন দাবি শুধু ঘোষণা করে পাওয়া যায় না, অর্জন করতে হয়। সা'দী এ থেকে যে শিক্ষা টানেন তা হলো, সব মানুষের উপরে তাঁর ভালোবাসাকে রাখা, আর কখনো তাঁর আগে না বাড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Dearer Than Everything",
          "bn": "সবকিছুর চেয়ে প্রিয়"
        },
        "p": [
          {
            "en": "The verse carries its own hadith. Ibn Kathir, at-Tabari and al-Baghawi each narrate, by their chains back to Abu Hurayra, that the Prophet ﷺ said: there is no believer but that I am the closest of all people to him, in this world and the next; recite if you wish, The Prophet is closer to the believers than themselves. Ibn Kathir reports it as recorded by al-Bukhari alone, and placed also in the Book of Loans; al-Qurtubi says the two Sahihs carry it.",
            "bn": "এ আয়াতের সঙ্গে একটি হাদিসও এসেছে। ইবন কাসীর, তাবারী ও বাগাভী প্রত্যেকে নিজ নিজ সনদে আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: দুনিয়া ও আখিরাতে আমিই প্রত্যেক মু'মিনের সবচেয়ে কাছের মানুষ; চাইলে পড়ে নাও, 'নবী মু'মিনদের নিকট তাদের নিজেদের চেয়েও ঘনিষ্ঠ।' ইবন কাসীর জানান, এটি কেবল বুখারী বর্ণনা করেছেন, আর কিতাবুল ইসতিকরাদেও এনেছেন; কুরতুবী বলেন, দুই সহীহ গ্রন্থেই এটি আছে।"
          },
          {
            "en": "The same hadith draws out the inheritance clause before the verse itself reaches it: whoever leaves wealth, let his kin inherit it; and whoever leaves a debt or dependents with no support, let him come to me, for I am his guardian. So the Prophet's prior claim is not a demand laid on the believer but a care taken up for him. Ibn Kathir sets beside it the sound report that none of you truly believes until the Prophet ﷺ is dearer to him than his own self, his wealth, his children and all people.",
            "bn": "একই হাদিস আয়াত সেখানে পৌঁছানোর আগেই মীরাসের কথাটা টেনে আনে: যে সম্পদ রেখে যায়, তার আত্মীয়রাই তা পাবে; আর যে ঋণ বা অসহায় পরিজন রেখে যায়, সে আমার কাছে আসুক, কারণ আমিই তার অভিভাবক। তাই নবীর অগ্রাধিকার মু'মিনের উপর চাপানো কোনো দাবি নয়, বরং তার জন্য নেওয়া এক দায়িত্ব। ইবন কাসীর এর পাশে রাখেন সেই সহীহ বর্ণনা: তোমাদের কেউ পূর্ণ মু'মিন হয় না, যতক্ষণ না নবী ﷺ তার কাছে তার নিজের সত্তা, সম্পদ, সন্তান আর সব মানুষের চেয়ে প্রিয় হন।"
          },
          {
            "en": "Ibn Kathir records how Umar learned its measure. Umar said, by Allah, you are dearer to me than everything except myself; the Prophet ﷺ answered, no, Umar, not until I am dearer to you than your own self. Umar returned: now, by Allah, you are dearer to me than everything, even myself, and the Prophet said, now, Umar. The love this verse requires is the love Umar reached only once he had set the Prophet ﷺ above his own self.",
            "bn": "উমর (রাঃ) কীভাবে এ ভালোবাসার মাপ বুঝলেন, ইবন কাসীর তা লিখে রেখেছেন। উমর (রাঃ) বললেন, আল্লাহর কসম, আমার নিজের প্রাণ ছাড়া আর সবকিছুর চেয়ে আপনি আমার কাছে প্রিয়। নবী ﷺ বললেন, না উমর, যতক্ষণ না আমি তোমার কাছে তোমার নিজের প্রাণের চেয়েও প্রিয় হই। উমর (রাঃ) আবার বললেন, আল্লাহর কসম, এখন আপনি আমার কাছে সবকিছুর চেয়ে প্রিয়, আমার নিজের প্রাণের চেয়েও। নবী ﷺ বললেন, এখন হলো, উমর। এ আয়াত যে ভালোবাসা চায়, উমর (রাঃ) তাতে পৌঁছালেন তখনই, যখন নবী ﷺ-কে নিজের প্রাণের উপরে স্থান দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Mothers in Honour",
          "bn": "সম্মানে মা"
        },
        "p": [
          {
            "en": "Wa azwajuhu ummahatuhum: and his wives are their mothers. Every commentator fetched here guards the sense carefully. Ibn Kathir, al-Baghawi, as-Sa'di and al-Qurtubi agree that they are mothers in reverence, honour and veneration, and in the permanent unlawfulness of marrying them, which Allah states outright in 33:53. They are not mothers in the remaining rulings: not in seclusion or mahram status, not in inheritance, not in the lifting of the hijab. Ma'arif al-Qur'an says this plainly, and points to the close of the verse itself.",
            "bn": "ওয়া আযওয়াজুহু উম্মাহাতুহুম: আর তাঁর স্ত্রীগণ তাদের মা। এখানে যাঁদের তাফসীর দেখা হয়েছে, তাঁরা প্রত্যেকে অর্থটা খুব সাবধানে আগলে রাখেন। ইবন কাসীর, বাগাভী, সা'দী ও কুরতুবী একমত: তাঁরা মা সম্মানে, মর্যাদায় ও শ্রদ্ধায়, আর এই অর্থে যে তাঁদের বিয়ে করা চিরকালের জন্য হারাম, যা আল্লাহ ৩৩:৫৩ আয়াতে স্পষ্ট বলে দিয়েছেন। বাকি বিধানে তাঁরা মা নন: তাঁদের সঙ্গে নির্জনে থাকা বা মাহরাম হওয়ার বিধানে নন, মীরাসে নন, পর্দা উঠে যাওয়ার বিধানেও নন। মাআরিফুল কুরআন কথাটা সাফ বলে, আর প্রমাণ হিসেবে আয়াতের শেষ অংশের দিকেই ইশারা করে।"
          },
          {
            "en": "The fiqh is kept exact, so that nothing is overreached. Ibn Kathir notes, by consensus, that this motherhood does not pass to their daughters or sisters; al-Baghawi cites ash-Shafi'i, that az-Zubayr married Asma bint Abi Bakr, the sister of a Mother of the Believers, and none called her an aunt of the believers. Al-Baghawi reports Aisha's own words to a woman who addressed her as mother: I am not a mother to you; I am the mother of your men, which shows, he says, that this motherhood carries the meaning of the prohibition of marriage.",
            "bn": "ফিকহের সীমাও এখানে মেপে রাখা, যাতে কোথাও বাড়াবাড়ি না হয়। ইবন কাসীর বলেন, ইজমা অনুযায়ী এ মাতৃত্ব তাঁদের মেয়ে বা বোনদের পর্যন্ত গড়ায় না। বাগাভী ইমাম শাফিঈর কথা আনেন: যুবায়র (রাঃ) বিয়ে করেছিলেন আসমা বিনতে আবু বকর (রাঃ)-কে, যিনি এক উম্মুল মু'মিনীনের বোন, অথচ কেউ তাঁকে মু'মিনদের খালা বলেননি। বাগাভী আয়িশা (রাঃ)-এর নিজের কথাও আনেন। এক নারী তাঁকে 'মা' বলে ডাকলে তিনি বলেন, আমি তোমার মা নই, আমি তোমাদের পুরুষদের মা। বাগাভী বলেন, এতে বোঝা যায়, এ মাতৃত্বের অর্থ হলো তাঁদের বিয়ে করা হারাম।"
          },
          {
            "en": "One thing must be said with the reverence the subject is owed. The honour of the Mothers of the Believers is a matter of creed; al-Muyassar closes the verse by noting that whoever reviles them has come away in loss. To hold them in esteem is simply to obey the verse, and it carries nothing against any living person or community.",
            "bn": "একটি কথা বলা দরকার, এ বিষয়ের প্রাপ্য পূর্ণ শ্রদ্ধা নিয়েই। উম্মাহাতুল মু'মিনীনের সম্মান আকিদার বিষয়। মুয়াসসার এ আয়াতের ব্যাখ্যা শেষ করেছে এই কথায়: যে তাঁদের গালি দেয়, সে ক্ষতি নিয়েই ফেরে। তাঁদের সম্মান করা মানে স্রেফ আয়াতটি মেনে চলা, আর এতে জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Disputed Fatherhood",
          "bn": "বিতর্কিত পিতৃত্ব"
        },
        "p": [
          {
            "en": "Two genuine disagreements sit in this clause, and the commentators let them stand. The first: are the wives mothers of the believing women as well as the men? Al-Baghawi and al-Qurtubi report that Aisha, answering a woman who called her mother, said, I am the mother of your men, which some read as restricting the title to men; Ibn al-Arabi held that report sound. Al-Qurtubi himself inclined the other way, that they are mothers of men and women alike, out of honour for their right over both.",
            "bn": "এ বাক্য নিয়ে দুটি সত্যিকারের মতভেদ আছে, আর তাফসীরকারেরা কোনোটিকেই চাপা দেননি। প্রথমটি: স্ত্রীগণ কি পুরুষদের মতো মু'মিন নারীদেরও মা? বাগাভী ও কুরতুবী বর্ণনা করেন, এক নারী আয়িশা (রাঃ)-কে 'মা' বলে ডাকলে তিনি বলেন, আমি তোমাদের পুরুষদের মা। কেউ কেউ এ থেকে বোঝেন, উপাধিটা শুধু পুরুষদের জন্য; ইবনুল আরাবী এ বর্ণনাকে সহীহ মনে করতেন। কুরতুবী নিজে উল্টো মতের দিকে ঝুঁকেছেন: নারী-পুরুষ উভয়ের উপর তাঁদের যে হক, তার সম্মানে তাঁরা সবারই মা।"
          },
          {
            "en": "The second turns on a word not in the recited text. At-Tabari, al-Qurtubi and Ibn Kathir note a reading in the codices of Ubayy ibn Ka'b and Ibn Abbas, the Prophet is closer to the believers than themselves, and he is a father to them, and his wives are their mothers. Al-Qurtubi reports that Umar heard this reading and objected, and that Ubayy answered him sharply, standing by what was in his codex. The clause he is a father to them is not part of the recited Uthmanic text.",
            "bn": "দ্বিতীয়টি ঘোরে এমন এক শব্দ নিয়ে, যা তিলাওয়াতের পাঠে নেই। তাবারী, কুরতুবী ও ইবন কাসীর জানান, উবাই ইবন কা'ব (রাঃ) ও ইবন আব্বাস (রাঃ)-এর মুসহাফে একটি পাঠ ছিল: নবী মু'মিনদের নিকট তাদের নিজেদের চেয়ে ঘনিষ্ঠ, আর তিনি তাদের পিতা, আর তাঁর স্ত্রীগণ তাদের মা। কুরতুবী বলেন, উমর (রাঃ) এ পাঠ শুনে আপত্তি করেন, আর উবাই (রাঃ) নিজের মুসহাফে যা ছিল তা আগলে কড়াভাবে জবাব দেন। 'তিনি তাদের পিতা' অংশটি উম্মাহর তিলাওয়াত করা উসমানী পাঠের অংশ নয়।"
          },
          {
            "en": "So may the Prophet ﷺ be called a father to the believers? Al-Qurtubi records both views. Some refused it, citing 33:40, Muhammad is not the father of any of your men. The sounder position, he says, allows it in the sense of reverence and sanctity, while 33:40 denies it in the sense of lineage. As-Sa'di reads the same balance into the verse: the believers are, in a sense, all his children, raised by him as a father raises his own, yet no descent is claimed through him.",
            "bn": "তাহলে নবী ﷺ-কে কি মু'মিনদের পিতা বলা যায়? কুরতুবী দুটো মতই তুলে ধরেন। কেউ কেউ তা নাকচ করেছেন, দলিল হিসেবে ৩৩:৪০ আয়াত এনে: মুহাম্মদ তোমাদের পুরুষদের কারও পিতা নন। কুরতুবী বলেন, বেশি সঠিক মত হলো, সম্মান ও মর্যাদার অর্থে তা বলা যায়; ৩৩:৪০ আয়াত যা নাকচ করে, তা বংশের অর্থে পিতৃত্ব। সা'দীও আয়াত থেকে একই ভারসাম্য বের করেন: এক অর্থে মু'মিনরা সবাই তাঁর সন্তান, বাবা যেমন নিজের সন্তানকে গড়ে তোলেন, তিনিও তাদের তেমনি গড়েছেন; তবু তাঁর মাধ্যমে কোনো বংশ দাবি করা হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Blood Reclaims Inheritance",
          "bn": "রক্তের কাছে ফিরল মীরাস"
        },
        "p": [
          {
            "en": "Wa ulu al-arham ba'duhum awla bi-ba'd fi kitabi -llah: and those of blood kinship are more entitled to each other in the decree of Allah. The same word awla returns, now for relatives. Al-Baghawi, Ibn Kathir and at-Tabari explain that this abrogated an earlier practice by which believers inherited not by blood but by the bond the Prophet ﷺ had tied between the Emigrants and the Helpers. On where the earlier rule came from, al-Qurtubi records two readings: that the verse abrogated inheritance by the hijra, or by the pact of brotherhood.",
            "bn": "ওয়া উলুল-আরহামি বা'দুহুম আওলা বিবা'দিন ফী কিতাবিল্লাহ: আর আল্লাহর বিধানে রক্তের আত্মীয়রা একে অন্যের উপর বেশি হকদার। সেই 'আওলা' শব্দটাই আবার আসে, এবার আত্মীয়দের বেলায়। বাগাভী, ইবন কাসীর ও তাবারী বলেন, এ আয়াত আগের একটি রীতি রহিত করেছে। তখন মু'মিনরা রক্তের সম্পর্কে নয়, বরং নবী ﷺ মুহাজির ও আনসারদের মধ্যে যে ভ্রাতৃত্ব বেঁধে দিয়েছিলেন, তার ভিত্তিতে একে অন্যের ওয়ারিস হতেন। আগের নিয়মটি কিসের ভিত্তিতে ছিল, তা নিয়ে কুরতুবী দুটি ব্যাখ্যা আনেন: আয়াতটি রহিত করেছে হিজরতের ভিত্তিতে উত্তরাধিকার, নাকি ভ্রাতৃত্ব-চুক্তির ভিত্তিতে উত্তরাধিকার।"
          },
          {
            "en": "Ibn Kathir and al-Qurtubi carry az-Zubayr's own account. We of Quraysh, he said, reached Madina with no property, and found in the Ansar the best of brothers; we made brotherhood with them and inherited from each other. Abu Bakr was paired with Kharija ibn Zayd, and az-Zubayr with Ka'b ibn Malik; had Ka'b died then, az-Zubayr alone would have inherited him, until Allah sent down this verse and they returned to inheriting by kin. The decree of Allah here, al-Qurtubi notes, may mean the Qur'an or the Preserved Tablet; by the believers and the emigrants some early readers understood the Ansar and the Quraysh.",
            "bn": "ইবন কাসীর ও কুরতুবী যুবায়র (রাঃ)-এর নিজের বর্ণনা আনেন। তিনি বলেন, আমরা কুরাইশরা মদীনায় পৌঁছেছিলাম কোনো সম্পদ ছাড়া, আর আনসারদের পেয়েছিলাম সবচেয়ে ভালো ভাই হিসেবে; আমরা তাঁদের সঙ্গে ভ্রাতৃত্বের বন্ধন করি আর একে অন্যের ওয়ারিস হই। আবু বকর (রাঃ)-এর জোড়া হন খারিজা ইবন যায়দ, আর যুবায়রের জোড়া কা'ব ইবন মালিক। তখন কা'ব মারা গেলে একা যুবায়রই তাঁর ওয়ারিস হতেন। শেষে আল্লাহ এ আয়াত নাজিল করলেন, আর তাঁরা আবার রক্তের সম্পর্কে উত্তরাধিকারে ফিরে গেলেন। কুরতুবী বলেন, এখানে 'আল্লাহর বিধান' মানে কুরআনও হতে পারে, লাওহে মাহফুজও হতে পারে; আর 'মু'মিন ও মুহাজির' বলতে প্রথম যুগের কেউ কেউ বুঝেছেন আনসার ও কুরাইশকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Kindness by Bequest",
          "bn": "অসিয়তের মাধ্যমে অনুগ্রহ"
        },
        "p": [
          {
            "en": "Illa an taf'alu ila awliya'ikum ma'rufan: except that you do some kindness to your close allies. Inheritance by the old pact is gone, yet a door stays open. Al-Baghawi explains the ma'ruf as a bequest to those bound to you by alliance, for when Allah ended inheritance by pact and migration He permitted a man to will to such an ally whatever he wished, up to a third of his estate. Mujahid read the ma'ruf differently, as support and the keeping of the bond's honour rather than a transfer of wealth.",
            "bn": "ইল্লা আন তাফ'আলূ ইলা আওলিয়াইকুম মা'রূফা: তবে তোমরা তোমাদের ঘনিষ্ঠ বন্ধুদের প্রতি কোনো অনুগ্রহ করতে চাইলে, তা পার। পুরোনো চুক্তির জোরে উত্তরাধিকার আর নেই, তবু একটা পথ খোলা রইল। বাগাভী 'মা'রূফ'-এর অর্থ করেন চুক্তির বন্ধনে বাঁধা লোকদের জন্য অসিয়ত। কারণ আল্লাহ যখন চুক্তি ও হিজরতের ভিত্তিতে উত্তরাধিকার তুলে দিলেন, তখন মানুষকে অনুমতি দিলেন, এমন বন্ধুর জন্য নিজের সম্পদের এক-তৃতীয়াংশ পর্যন্ত যা ইচ্ছা অসিয়ত করতে পারে। মুজাহিদ 'মা'রূফ'-এর অর্থ নেন ভিন্নভাবে: সম্পদ দিয়ে দেওয়া নয়, বরং পাশে দাঁড়ানো আর বন্ধনের মর্যাদা রক্ষা করা।"
          },
          {
            "en": "Here the mufassirun differ, and the difference is kept. Ibn al-Hanafiyya and Qatada, by at-Tabari's report, took the allies to include non-Muslim kin, so that a man might bequeath even to a relative outside the faith, though such a relative does not inherit. At-Tabari himself preferred that the allies meant are those the Prophet ﷺ had made brothers, since a polytheist, he reasoned, is kin but not a wali, Allah having forbidden the believers to take His enemies as allies. Both readings are old, and both are named with their holders.",
            "bn": "এ জায়গায় মুফাসসিরগণের মতভেদ আছে, আর দুটো মতই এখানে থাকছে। তাবারীর বর্ণনায় ইবনুল হানাফিয়্যা ও কাতাদা মনে করতেন, 'বন্ধু'-র মধ্যে অমুসলিম আত্মীয়ও পড়ে। তাই কেউ চাইলে ঈমানের বাইরের আত্মীয়ের জন্যও অসিয়ত করতে পারে, যদিও এমন আত্মীয় মীরাস পায় না। তাবারী নিজে পছন্দ করেছেন অন্য মত: এখানে 'বন্ধু' মানে তাঁরা, নবী ﷺ যাঁদের মধ্যে ভ্রাতৃত্ব বেঁধে দিয়েছিলেন। তাঁর যুক্তি, মুশরিক আত্মীয় হতে পারে, কিন্তু ওয়ালী হতে পারে না, কারণ আল্লাহ মু'মিনদের নিষেধ করেছেন তাঁর শত্রুদের বন্ধু বানাতে। দুটো মতই পুরোনো, আর কোন মত কার, নামসহ তা জানা আছে।"
          },
          {
            "en": "The verse seals itself: kana dhalika fi -l-kitabi masturan, that was in the Book, inscribed. Mujahid and others read the Book as the Preserved Tablet, where this ruling was written before it was lived; al-Qurazi said it was in the Torah. Taken whole, the verse arranges a believer's deepest loyalty, the honour owed a household, and the passing-on of wealth, and settles each with precision rather than sentiment, leaving no licence for harm to anyone.",
            "bn": "আয়াতটি শেষ হয় এই কথায়: কানা যালিকা ফিল-কিতাবি মাসতূরা, এটা কিতাবে লেখা ছিল। মুজাহিদ ও অন্যরা বলেন, 'কিতাব' মানে লাওহে মাহফুজ, যেখানে এ বিধান মানুষের জীবনে আসার আগেই লেখা ছিল; আর কুরাজী বলেন, এটা ছিল তাওরাতে। পুরো আয়াতটি মিলিয়ে দেখলে তা সাজিয়ে দেয় মু'মিনের সবচেয়ে গভীর আনুগত্য, নবী-পরিবারের প্রাপ্য সম্মান আর সম্পদের উত্তরাধিকার। প্রতিটি বিষয় মীমাংসা করে আবেগ দিয়ে নয়, নিখুঁত মাপে, আর কারও ক্ষতি করার কোনো সুযোগ রাখে না।"
          }
        ]
      }
    ]
  },
  "33:9": {
    "sections": [
      {
        "h": {
          "en": "The Command to Recall",
          "bn": "স্মরণ করার আদেশ"
        },
        "p": [
          {
            "en": "The verse opens not with the battle but with an order: O you who have believed, remember the favour of Allah upon you. As-Sa'di reads the whole āyah as Allah reminding His believing servants of His blessing and urging them to be grateful for it. The command is adhkurū, remember; the object is niʿmah, favour. Before a single detail of the siege is named, the listener is told what the story is for. It is not an account to be relived but a mercy to be counted.",
            "bn": "আয়াতটি যুদ্ধের বর্ণনা দিয়ে শুরু হয় না, শুরু হয় একটা আদেশ দিয়ে: হে মু’মিনগণ, তোমাদের প্রতি আল্লাহর অনুগ্রহের কথা স্মরণ কর। সা’দীর কাছে গোটা আয়াতটাই এই: আল্লাহ তাঁর মু’মিন বান্দাদের নিজের নিয়ামতের কথা মনে করিয়ে দিচ্ছেন, আর সেজন্য শুকরিয়া আদায়ের তাগিদ দিচ্ছেন। আদেশের শব্দটি আযকুরূ, স্মরণ কর; আর যা স্মরণ করতে হবে তা নিয়ামত, অনুগ্রহ। অবরোধের একটি খুঁটিনাটিও বলার আগে শ্রোতাকে জানিয়ে দেওয়া হয়, কাহিনিটা কিসের জন্য। এটা সেই ভয়ের দিনগুলো আবার মনে মনে ভোগ করার গল্প নয়; এটা গুনে রাখার মতো এক রহমত।"
          },
          {
            "en": "This matters because fear is easy to remember and rescue is easy to forget. The confederate armies that pressed Madinah left a deep mark, and the next verses describe eyes that shifted and hearts that reached the throats. Yet Allah does not begin there. He begins with the favour, and only afterwards recalls the hardship that the favour answered. As-Sa'di notes that the siege dragged on a long while and the trial was severe. The opening word reorders the memory: gratitude first, and the terror set inside it.",
            "bn": "কথাটা গুরুত্বপূর্ণ, কারণ ভয়ের কথা সহজেই মনে থাকে, আর উদ্ধারের কথা সহজেই ভুলে যাই। মদীনাকে চেপে ধরা সম্মিলিত বাহিনী গভীর দাগ রেখে গিয়েছিল; পরের আয়াতগুলো বলে, চোখ ঘুরে গিয়েছিল আর প্রাণ কণ্ঠাগত হয়েছিল। তবু আল্লাহ সেখান থেকে শুরু করেন না। তিনি শুরু করেন অনুগ্রহ দিয়ে, আর যে কষ্ট থেকে সেই অনুগ্রহ উদ্ধার করেছিল, তার কথা আনেন পরে। সা’দী বলেন, অবরোধ অনেক দিন ধরে চলেছিল আর পরীক্ষাটা ছিল কঠিন। শুরুর শব্দটাই স্মৃতির ক্রম বদলে দেয়: আগে শুকরিয়া, আর সেই আতঙ্ক তার ভেতরে রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Ten Thousand at the Gate",
          "bn": "দুয়ারে দশ হাজার"
        },
        "p": [
          {
            "en": "The junūd, the armies, were a coalition. At-Tabari names them as Quraysh, Ghatafān and the Jews of Banū an-Naḍīr; Ibn Kathīr traces how it formed, when leaders of Banū an-Naḍīr whom the Prophet ﷺ had expelled to Khaybar went to Makkah and incited Quraysh, then Ghatafān, to war. In all, Ibn Kathīr reports, they numbered close to ten thousand. When news of their march reached Madinah, the Muslims dug a trench around the city on the advice of Salmān al-Fārisī, and the Prophet ﷺ carried earth and dug alongside them.",
            "bn": "জুনূদ, অর্থাৎ সৈন্যবাহিনী, ছিল এক জোট। তাবারী তাদের নাম দেন কুরাইশ, গাতফান আর বনূ নাদীরের ইহুদীরা। ইবন কাসীর দেখান জোটটা কীভাবে গড়ে উঠল: বনূ নাদীরের যেসব নেতাকে নবী ﷺ খায়বারে বের করে দিয়েছিলেন তারা মক্কায় গিয়ে কুরাইশকে, এরপর গাতফানকে, যুদ্ধে উসকে দিল। ইবন কাসীরের বর্ণনায় তাদের সংখ্যা ছিল প্রায় ১০ হাজার। তাদের অভিযানের খবর মদীনায় পৌঁছালে মুসলমানরা সালমান ফারসী (রাঃ)-এর পরামর্শে শহরের চারপাশে পরিখা খুঁড়ল, আর নবী ﷺ নিজে মাটি বয়ে এনে তাদের সঙ্গে খুঁড়লেন।"
          },
          {
            "en": "Ibn Kathīr places the event in Shawwāl of the fifth year after the Hijrah, calling this the well-known and correct view, while noting that Mūsā ibn ʿUqbah and others held it to be the fourth year. The siege, by his report, lasted almost a month without a pitched battle. At-Tabari adds that the Jews of Banū Qurayẓah, bound by a treaty, were persuaded to break it and join the attackers, so that the city was pressed from above and below at once. Human means had been stretched to their very limit.",
            "bn": "ইবন কাসীর ঘটনাটিকে রাখেন হিজরতের পঞ্চম বছরের শাওয়াল মাসে, আর বলেন, এটাই প্রসিদ্ধ ও সঠিক মত; তবে জানান, মূসা ইবন উকবা ও অন্যরা একে চতুর্থ বছরের ঘটনা বলে মনে করতেন। তাঁর বর্ণনায় অবরোধ প্রায় এক মাস চলেছিল, অথচ সামনাসামনি কোনো লড়াই হয়নি। তাবারী যোগ করেন, বনূ কুরাইযার ইহুদীরা চুক্তিতে বাঁধা ছিল, কিন্তু তাদের বুঝিয়ে চুক্তি ভাঙানো হলো, আর তারা আক্রমণকারীদের দলে যোগ দিল। ফলে শহরটা একসঙ্গে উপর আর নিচ দুই দিক থেকে চাপে পড়ল। মানুষের সাধ্যে যা ছিল, তা তখন শেষ সীমায় পৌঁছে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wind They Called Ṣabā",
          "bn": "যে হাওয়ার নাম সবা"
        },
        "p": [
          {
            "en": "Then came the turn: fa-arsalnā ʿalayhim rīḥan, and We sent against them a wind. At-Tabari reports, on the authority of ʿIkrimah and Mujāhid, that this was rīḥ aṣ-ṣabā, the east wind. Mujāhid describes what it did: it overturned their cooking pots onto their mouths and tore up their tents until it drove them away. Al-Muyassar sums it plainly, a fierce wind that uprooted their tents and flung down their pots. The besiegers' camp came apart not by the sword but by the weather. At-Tabari keeps a witness to its force, who said the wind drove his iron-bound shield against him until it forced the metal into the ground.",
            "bn": "তারপর এল মোড়: ফা-আরসালনা আলাইহিম রীহান, তখন আমি তাদের বিরুদ্ধে পাঠালাম এক হাওয়া। তাবারী ইকরিমা ও মুজাহিদের সূত্রে বর্ণনা করেন, এটা ছিল রীহুস সবা, পুবের হাওয়া। হাওয়াটা কী করেছিল, মুজাহিদ তা বলেন: তাদের রান্নার হাঁড়ি মুখের উপর উল্টে দিল, তাঁবু ছিঁড়ে উপড়ে ফেলল, শেষে তাদের তাড়িয়েই দিল। মুয়াসসার সোজা কথায় সারকথা বলে: প্রচণ্ড এক হাওয়া তাদের তাঁবু উপড়ে ফেলল আর হাঁড়িগুলো ছুঁড়ে ফেলে দিল। অবরোধকারীদের শিবির ভেঙে পড়ল তলোয়ারে নয়, আবহাওয়ায়। এর প্রচণ্ডতার একজন সাক্ষীর কথাও তাবারী রেখেছেন। তিনি বলেছিলেন, হাওয়া তাঁর লোহা-বাঁধানো ঢাল তাঁর গায়ে এমনভাবে আছড়ে ফেলছিল যে শেষে লোহাটা মাটিতে গেঁথে গেল।"
          },
          {
            "en": "The naming of the wind is itself attested. Al-Qurtubi and al-Baghawi both report, from Ibn ʿAbbās, the Prophet's words: I was given victory by the east wind, and ʿĀd were destroyed by the west wind. Al-Qurtubi draws out a further wonder. The Prophet ﷺ and the Muslims lay close to that storm, with only the width of the trench between them and it, yet they were kept safe from it and no news of it even reached them. The same wind that scattered one camp passed the other by.",
            "bn": "হাওয়ার নামটাও বর্ণনায় প্রমাণিত। কুরতুবী ও বাগাভী দুজনেই ইবন আব্বাস (রাঃ) থেকে নবীর কথা আনেন: আমাকে পুবের হাওয়া দিয়ে সাহায্য করা হয়েছে, আর আদ জাতিকে ধ্বংস করা হয়েছে পশ্চিমের হাওয়া দিয়ে। কুরতুবী আরও একটা বিস্ময় টেনে আনেন। নবী ﷺ আর মুসলমানরা সেই ঝড়ের কাছেই ছিলেন, তাঁদের আর ঝড়ের মাঝে ছিল কেবল পরিখার চওড়াটুকু, তবু তাঁরা তা থেকে নিরাপদ থাকলেন, এমনকি এর কোনো খবরও তাঁদের কাছে পৌঁছাল না। যে হাওয়া এক শিবির ছত্রভঙ্গ করল, সে অন্য শিবিরকে পাশ কাটিয়ে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Night Told by Ḥudhayfah",
          "bn": "হুযায়ফার বলা সেই রাত"
        },
        "p": [
          {
            "en": "Sahih Muslim preserves what that night felt like from inside the believers' lines. Ḥudhayfah ibn al-Yamān, answering a man who imagined he would have fought bravely had he lived in the Prophet's day, told him not to be so sure, and then described the cold and the fear that gripped them all. The narration, graded sound by its place in Muslim's Ṣaḥīḥ, is given here in his collector's wording, quoted as a single report rather than blended with any other version. The man's boast, that he would have striven hard beside the Prophet ﷺ, is the frame Ḥudhayfah answers, and the answer is a night of cold, not of glory.",
            "bn": "সেই রাতটা মু’মিনদের কাতারের ভেতর থেকে কেমন ছিল, সহীহ মুসলিম তা ধরে রেখেছে। এক লোকের ধারণা ছিল, নবীর যুগে থাকলে সে খুব সাহসের সঙ্গে লড়ত। হুযায়ফা ইবনুল ইয়ামান (রাঃ) তাকে বললেন, অত নিশ্চিত হয়ো না। তারপর বর্ণনা করলেন সেই ঠান্ডা আর সেই ভয়ের কথা, যা তাঁদের সবাইকে চেপে ধরেছিল। মুসলিমের সহীহ গ্রন্থে থাকায় বর্ণনাটি সহীহ। এখানে তা সংকলকের ভাষাতেই একটি বর্ণনা হিসেবে দেওয়া হলো, অন্য কোনো বর্ণনার সঙ্গে মেশানো হয়নি। নবী ﷺ-এর পাশে থেকে প্রাণপণ লড়ার যে বড়াই লোকটি করেছিল, হুযায়ফার জবাব সেটারই উত্তর। আর সে জবাব হলো গৌরবের কোনো রাত নয়, ঠান্ডার এক রাত।"
          },
          {
            "en": "On the night of the Confederates, Ḥudhayfah said, a violent wind and bitter cold took hold of them. The Prophet ﷺ asked three times, Is there a man who will bring me news of the enemy? Allah will place him with me on the Day of Resurrection. Each time, gripped by cold and dread, none answered. At last he called by name, Get up, Ḥudhayfah, and bring us news of the enemy. Called directly, Ḥudhayfah had no choice but to rise and go.",
            "bn": "হুযায়ফা বলেন, আহযাবের সেই রাতে প্রচণ্ড হাওয়া আর তীব্র ঠান্ডা তাঁদের ঘিরে ধরেছিল। নবী ﷺ তিনবার জিজ্ঞেস করলেন, এমন কেউ কি আছে, যে আমাকে শত্রুদের খবর এনে দেবে? কিয়ামতের দিন আল্লাহ তাকে আমার সঙ্গে রাখবেন। ঠান্ডা আর ভয়ে সবাই এমন জমে ছিল যে প্রতিবারই কেউ সাড়া দিল না। শেষে তিনি নাম ধরে ডাকলেন, ওঠো হুযায়ফা, আমাদের শত্রুদের খবর এনে দাও। সরাসরি নাম ধরে ডাকায় হুযায়ফার আর উঠে যাওয়া ছাড়া উপায় রইল না।"
          },
          {
            "en": "The Prophet ﷺ sent him with one restraint: Go and bring me news of the people, but do not alarm them against me. Ḥudhayfah reached the camp and saw Abū Sufyān warming his back at the fire. He fitted an arrow to his bow and could have struck him, then remembered the order and held his hand. Returning, he found the Prophet ﷺ praying, who wrapped him in the spare cloak he used to pray in. Ḥudhayfah slept until morning, when the Prophet ﷺ woke him, Get up, O sleeper.",
            "bn": "নবী ﷺ তাঁকে একটা শর্ত দিয়ে পাঠালেন: যাও, লোকদের খবর এনে দাও, কিন্তু তাদের আমার বিরুদ্ধে খেপিয়ে দিয়ো না। হুযায়ফা শিবিরে পৌঁছে দেখলেন আবু সুফিয়ান আগুনে পিঠ গরম করছে। তিনি ধনুকে তীর বসালেন, চাইলে মেরে ফেলতে পারতেন, তারপর আদেশটা মনে পড়ল আর হাত থামিয়ে নিলেন। ফিরে এসে দেখলেন নবী ﷺ নামাজে দাঁড়িয়ে, তিনি হুযায়ফাকে নিজের নামাজে পরার বাড়তি চাদরে জড়িয়ে নিলেন। হুযায়ফা সকাল পর্যন্ত ঘুমালেন, আর সকালে নবী ﷺ তাঁকে জাগালেন, ওঠো, ঘুমকাতুরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Army No Eye Saw",
          "bn": "যে বাহিনী চোখে পড়েনি"
        },
        "p": [
          {
            "en": "Wa junūdan lam tarawhā, and armies you did not see. On this the commentators are agreed: the hidden armies were the angels. Mujāhid, Qatādah and Yazīd ibn Rūmān, all cited by at-Tabari, read junūd here as al-malāʾikah, the angels. Mujāhid adds a striking qualification, that the angels did not fight that day. Their presence alone, unseen and without clashing, was the help. The decisive army in the decisive hour never once drew a weapon, and still the siege broke. That the unseen army never struck a blow yet decided the day is the heart of the favour the verse tells them to remember.",
            "bn": "ওয়া জুনূদান লাম তারাওহা, আর এমন বাহিনী, যাদের তোমরা দেখোনি। এ ব্যাপারে তাফসীরকারেরা একমত: অদৃশ্য বাহিনী মানে ফেরেশতা। তাবারী মুজাহিদ, কাতাদা আর ইয়াযীদ ইবন রূমানের কথা এনেছেন; তাঁরা সবাই বলেছেন, এখানে জুনূদ মানে আল-মালাইকা, অর্থাৎ ফেরেশতা। মুজাহিদ আরেকটি লক্ষ করার মতো কথা যোগ করেন: সেদিন ফেরেশতারা লড়াই করেননি। চোখের আড়ালে, কোনো সংঘর্ষ ছাড়া, শুধু তাঁদের উপস্থিতিই ছিল সাহায্য। চূড়ান্ত মুহূর্তের চূড়ান্ত বাহিনী একবারও অস্ত্র তোলেনি, তবু অবরোধ ভেঙে গেল। অদৃশ্য বাহিনী একটি আঘাতও না করে দিনের ফয়সালা করে দিল; আয়াত যে অনুগ্রহ মনে রাখতে বলছে, তার মূল কথা এটাই।"
          },
          {
            "en": "What the angels did, the mufassirūn describe through the wind's effects. Al-Qurtubi reports that Allah sent the angels, who pulled out the tent pegs, cut the ropes, put out the fires, overturned the pots and sent the horses bolting into each other. Al-Baghawi adds that the angels' takbīr multiplied through the enemy camp, until each chieftain was calling his clan to gather, then crying, Flee, flee. Qatādah, in at-Tabari, says Allah cast terror, ruʿb, among them, so that every fire they lit was put out. By dawn the camp was breaking up, each clan told to flee, and the Confederates withdrew without a battle won.",
            "bn": "ফেরেশতারা কী করলেন, মুফাসসিরগণ তা বর্ণনা করেন হাওয়ার ফলাফলের ভেতর দিয়ে। কুরতুবী বলেন, আল্লাহ ফেরেশতা পাঠালেন, যাঁরা তাঁবুর খুঁটি উপড়ে ফেললেন, দড়ি কেটে দিলেন, আগুন নিভিয়ে দিলেন, হাঁড়ি উল্টে দিলেন আর ঘোড়াগুলোকে একে অন্যের গায়ে ছুটিয়ে দিলেন। বাগাভী যোগ করেন, শত্রুশিবিরে ফেরেশতাদের তাকবীর বেড়ে উঠল, শেষে প্রতিটি গোত্রপতি নিজের গোত্রকে ডাকতে লাগল একত্র হতে, তারপর চিৎকার করল, পালাও, পালাও। তাবারীতে কাতাদা বলেন, আল্লাহ তাদের মধ্যে আতঙ্ক, রু’ব, ঢেলে দিলেন, ফলে তাদের জ্বালানো প্রতিটি আগুন নিভে গেল। ভোরের মধ্যে শিবির গুটিয়ে যাচ্ছিল, প্রতিটি গোত্রকে পালাতে বলা হলো, আর মিত্রবাহিনী কোনো যুদ্ধ না জিতেই ফিরে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "When They Asked for Words",
          "bn": "যখন তারা দোয়ার কথা জানতে চাইল"
        },
        "p": [
          {
            "en": "At-Tabari records, through Abū Saʿīd, what the believers reached for as the pressure mounted. They came to the Prophet ﷺ and said, Our hearts have reached our throats; is there anything we may say? He answered, Yes: say, O Allah, cover our weaknesses and calm our fears. At-Tabari's narration then says that Allah struck the faces of His enemies with the wind and routed them with the wind. Ibn Kathīr reports the same, from Ibn Abī Ḥātim. The prayer and the rescue sit in a single breath.",
            "bn": "চাপ যখন বাড়ছিল, মু’মিনরা তখন কিসের আশ্রয় খুঁজেছিলেন, তাবারী আবু সাঈদ (রাঃ)-এর সূত্রে তা বর্ণনা করেন। তাঁরা নবী ﷺ-এর কাছে এসে বললেন, আমাদের প্রাণ কণ্ঠাগত হয়ে গেছে; আমরা বলতে পারি, এমন কিছু কি আছে? তিনি বললেন, হ্যাঁ, বলো: হে আল্লাহ, আমাদের দুর্বলতাগুলো ঢেকে দিন, আর আমাদের ভয় দূর করে নিরাপত্তা দিন। তাবারীর বর্ণনায় এরপর আছে, আল্লাহ হাওয়া দিয়ে তাঁর শত্রুদের মুখে আঘাত করলেন, আর হাওয়া দিয়েই তাদের পরাজিত করলেন। ইবন কাসীরও ইবন আবী হাতিম থেকে একই কথা এনেছেন। দোয়া আর উদ্ধার যেন একই নিঃশ্বাসে।"
          },
          {
            "en": "The sequence is the point. The believers did not first see the angels or command the wind; they asked, in plain words, to be covered and calmed. The answer came from a quarter they could not reach. As-Sa'di frames the whole episode as one the servants are called to be grateful for, not one they engineered. Their part was to hold on, to dig, to pray and to send a scout into the dark; the turning of that night was not their doing but Allah's. The scout sent into the dark was a human act; the rout that followed was not.",
            "bn": "ক্রমটাই আসল কথা। মু’মিনরা আগে ফেরেশতা দেখেননি, হাওয়াকেও হুকুম করেননি; তাঁরা সোজা ভাষায় চেয়েছিলেন, তাঁদের দুর্বলতা যেন ঢাকা পড়ে, মন যেন শান্ত হয়। জবাব এল এমন দিক থেকে, যেখানে তাঁদের হাত পৌঁছায় না। সা’দী গোটা ঘটনাটিকে দেখেন এমন এক নিয়ামত হিসেবে, যার জন্য বান্দাদের শুকরিয়া আদায় করতে বলা হচ্ছে; এটা তাঁদের নিজেদের ঘটানো কিছু নয়। তাঁদের কাজ ছিল টিকে থাকা, পরিখা খোঁড়া, দোয়া করা আর অন্ধকারে একজন গোয়েন্দা পাঠানো। সেই রাতের মোড় ঘুরিয়েছেন আল্লাহ, তাঁরা নন। অন্ধকারে গোয়েন্দা পাঠানো ছিল মানুষের কাজ; এরপর শত্রুদের যে ছত্রভঙ্গ দশা, তা মানুষের কাজ ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeing of What You Do",
          "bn": "তোমরা যা কর তিনি দেখেন"
        },
        "p": [
          {
            "en": "The verse closes, wa kāna llāhu bimā taʿmalūna baṣīran, and Allah is ever, of what you do, Seeing. At-Tabari explains the deeds in view: Allah was Seeing of your actions that day, meaning your patience under the hardship and distress you were in, and your steadfastness before your enemy. The rescue was not blind. It answered a people whom Allah had watched endure. The closing name, Baṣīr, the All-Seeing, ties the help to the seen effort of those who received it. At-Tabari adds that He saw it in order to requite them for it, so the seeing is not bare observation but the ground of reward.",
            "bn": "আয়াত শেষ হয় এভাবে: ওয়া কানাল্লাহু বিমা তা’মালূনা বাসীরা, আর তোমরা যা কর, আল্লাহ তা দেখেন। কোন আমলের কথা বলা হচ্ছে, তাবারী তা খুলে বলেন: সেদিন আল্লাহ তোমাদের কাজ দেখছিলেন, মানে যে কষ্ট আর সংকটে তোমরা ছিলে তাতে তোমাদের সবর, আর শত্রুর সামনে তোমাদের অটল থাকা। উদ্ধারটা অন্ধভাবে আসেনি। আল্লাহ যে দলকে এতক্ষণ কষ্ট সয়ে যেতে দেখছিলেন, উদ্ধার এসেছিল তাদেরই জন্য। শেষের নাম বাসীর, সর্বদ্রষ্টা, সাহায্যটাকে জুড়ে দেয় সাহায্যপ্রাপ্তদের সেই চেষ্টার সঙ্গে, যা তিনি দেখছিলেন। তাবারী যোগ করেন, তিনি তা দেখেছিলেন তাদের প্রতিদান দেওয়ার জন্য। তাই এ দেখা নিছক তাকিয়ে থাকা নয়, প্রতিদানের ভিত্তি।"
          },
          {
            "en": "This guards the lesson from a lazy reading. The unseen help did not descend on a people doing nothing; it met believers who had dug the trench, kept the watch and prayed through the cold while being watched by the Lord who sends the wind. Gratitude for the hidden hand and seriousness in the visible work are not rivals here. The same āyah that remembers the wind and the angels also remembers what the besieged themselves did, and tells them Allah saw it.",
            "bn": "এ কথা শিক্ষাটাকে আলসেমির ব্যাখ্যা থেকে বাঁচায়। অদৃশ্য সাহায্য হাত গুটিয়ে বসে থাকা কোনো দলের উপর নামেনি। সাহায্য এসেছিল এমন মু’মিনদের কাছে, যাঁরা পরিখা খুঁড়েছিলেন, পাহারা দিয়েছিলেন, ঠান্ডার মধ্যে দোয়া করে গেছেন, আর যিনি হাওয়া পাঠান, সেই রব তাঁদের দেখছিলেন। অদৃশ্য হাতের জন্য শুকরিয়া আর চোখের সামনের কাজে আন্তরিক চেষ্টা এখানে পরস্পরের প্রতিদ্বন্দ্বী নয়। যে আয়াত হাওয়া আর ফেরেশতার কথা মনে করায়, সেই আয়াতই মনে করায় অবরুদ্ধ মানুষগুলো নিজেরা কী করেছিলেন, আর জানিয়ে দেয় যে আল্লাহ তা দেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Remembering the Hidden Hand",
          "bn": "অদৃশ্য হাত মনে রাখা"
        },
        "p": [
          {
            "en": "Return, then, to the command the āyah opened with: remember. The favour to be remembered is not merely that the siege lifted, but how it lifted, from a direction no eye was watching. The believers had spent every human means and come to the end of them. The help that broke the siege was a wind they did not raise and an army they did not see. As-Sa'di reads the āyah as a summons to gratitude, and gratitude here means recounting exactly this: the rescue that came from the unseen. That is why the command is to remember, dhikr, and not merely to feel relieved that it ended.",
            "bn": "তাহলে ফিরে যাই আয়াতের শুরুর সেই আদেশে: স্মরণ কর। যে অনুগ্রহ মনে রাখতে হবে, তা শুধু এটুকু নয় যে অবরোধ উঠে গিয়েছিল; বরং কীভাবে উঠেছিল, এমন এক দিক থেকে, যেদিকে কারও চোখ ছিল না। মানুষের সাধ্যে যত উপায় ছিল, মু’মিনরা সব খরচ করে শেষ সীমায় পৌঁছে গিয়েছিলেন। অবরোধ ভাঙল এমন এক হাওয়ায়, যা তাঁরা তোলেননি, আর এমন এক বাহিনীতে, যাদের তাঁরা দেখেননি। সা’দী আয়াতটিকে দেখেন শুকরিয়ার ডাক হিসেবে, আর এখানে শুকরিয়া মানে ঠিক এ কথাটাই গুনে গুনে বলা: উদ্ধার এসেছিল গায়েব থেকে। এজন্যই আদেশটা স্মরণের, জিকিরের; বিপদ কেটে গেছে বলে শুধু হাঁফ ছেড়ে বাঁচার নয়।"
          },
          {
            "en": "For the listener, the lesson is not to court danger or to neglect the trench. It is to place the final weight of trust where the decisive help actually comes from. When means are exhausted and the walls feel close, this āyah does not ask us to relive the fear of those nights, which belongs to the verses that follow. It asks us to remember the favour, and to keep remembering it, so that gratitude for the unseen becomes the very shape of our trust. A favour once counted reshapes the next fear, which is met not with despair but with the memory of a wind that came unbidden.",
            "bn": "শ্রোতার জন্য শিক্ষাটা বিপদ ডেকে আনা বা পরিখা খোঁড়ায় অবহেলা করা নয়। শিক্ষা হলো, চূড়ান্ত সাহায্য আসলে যেখান থেকে আসে, ভরসার শেষ ভারটা সেখানেই রাখা। উপায় যখন ফুরিয়ে যায় আর মনে হয় চারদিক থেকে দেয়াল চেপে আসছে, এ আয়াত আমাদের সেই রাতগুলোর ভয় আবার ভোগ করতে বলে না; সে ভয়ের কথা তো পরের আয়াতগুলোতে। এ আয়াত বলে অনুগ্রহটা মনে রাখতে, আর মনে রাখতেই থাকতে, যেন অদৃশ্যের জন্য শুকরিয়াই হয়ে ওঠে আমাদের ভরসার আসল চেহারা। যে অনুগ্রহ একবার গুনে রাখা হয়েছে, তা পরের ভয়টাকে বদলে দেয়। তখন সে ভয়ের সামনে মানুষ দাঁড়ায় হতাশা নিয়ে নয়, বরং না-ডাকতেই এসে পড়া সেই হাওয়ার স্মৃতি নিয়ে।"
          }
        ]
      }
    ]
  },
  "33:18": {
    "sections": [
      {
        "h": {
          "en": "Set in the Siege",
          "bn": "ঘেরাওয়ের দিনের আয়াত"
        },
        "p": [
          {
            "en": "Sūra al-Ahzab opens onto the Battle of the Trench, when allied armies had pressed Madina to a siege. Ma'arif al-Qur'an reads the run of verses before this one as an exposure of the hypocrites: first their claim that Allah and His Messenger ﷺ had promised them only delusion, then two groups who were part of the defence in name only. One group called out, O people of Yathrib, there is no place for you, so go back (33:13). Verse eighteen turns to a quieter sabotage.",
            "bn": "সূরা আহযাব শুরু হয় খন্দকের যুদ্ধ দিয়ে, যখন মিত্রবাহিনী মদীনাকে ঘেরাও করে ফেলেছিল। মাআরিফুল কুরআন এ আয়াতের আগের আয়াতগুলোকে মুনাফিকদের মুখোশ খোলা হিসেবে পড়ে। প্রথমে তাদের দাবি, আল্লাহ ও তাঁর রাসূল ﷺ তাদের ধোঁকা ছাড়া কিছুই দেননি। তারপর দুটি দল, যারা প্রতিরক্ষায় ছিল কেবল নামেই। একটি দল হাঁক দিল, হে ইয়াসরিববাসী, তোমাদের এখানে থাকার জায়গা নেই, ফিরে যাও (৩৩:১৩)। আঠারো নম্বর আয়াত ফেরে আরও চুপচাপ এক অন্তর্ঘাতের দিকে।"
          },
          {
            "en": "The verse itself falls into two movements. Already Allah knows the hinderers among you, and those who say to their brothers, Come to us; and they do not come to the fight except a little (33:18). The first names a kind of person; the second quotes their whispered invitation; the closing clause measures what they actually contribute. The commentators read each part against the siege, and together they draw a precise anatomy of how fear and faithlessness behave when an effort turns costly.",
            "bn": "আয়াতটি দুই ভাগে এগোয়। আল্লাহ তোমাদের মধ্যকার বাধাদানকারীদের ভালো করেই জানেন, আর তাদেরও, যারা নিজেদের ভাইদের বলে, আমাদের কাছে চলে এসো; আর তারা যুদ্ধে আসে সামান্যই (৩৩:১৮)। প্রথম অংশ এক ধরনের মানুষকে চিনিয়ে দেয়। দ্বিতীয় অংশ তাদের ফিসফিসে ডাকটা তুলে ধরে। শেষ অংশ মেপে দেখায়, তারা আসলে কতটুকু দেয়। তাফসীরকারেরা প্রতিটি অংশ ঘেরাওয়ের পটভূমিতে পড়েন। সব মিলিয়ে ফুটে ওঠে এক নিখুঁত ছবি: কোনো কাজে যখন দাম দিতে হয়, তখন ভয় আর ঈমানহীনতা কেমন আচরণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Men Who Sapped Resolve",
          "bn": "যারা মনোবল ভাঙত"
        },
        "p": [
          {
            "en": "At-Tabari takes al-muʿawwiqīn as those who hold people back from the Messenger ﷺ, steering them away from standing with him in the fight, out of hypocrisy and a wish to dishearten the Muslims from Islam itself. Al-Qurtubi fixes the word's root. It comes, he says, from ʿāqanī ʿan kadhā, he turned me away from such a thing, and the form ʿawwaqa carries intensity, the act done again and again. The plain sense of al-ʿawq, he adds, is prevention and diversion: to block a man and steer him off his course.",
            "bn": "তাবারী আল-মুআওয়িকীন বলতে বোঝেন তাদের, যারা মানুষকে রাসূল ﷺ-এর কাছ থেকে টেনে রাখে, যুদ্ধে তাঁর পাশে দাঁড়ানো থেকে সরিয়ে দেয়, আর তা করে মুনাফিকি থেকে এবং মুসলিমদের ইসলাম থেকেই নিরুৎসাহ করার মতলবে। কুরতুবী শব্দটির মূল ধরিয়ে দেন। তিনি বলেন, এটি এসেছে 'আ-কানী আন কাযা' থেকে, মানে সে আমাকে কোনো কিছু থেকে ফিরিয়ে দিল। আর 'আওয়াকা' গড়নটি জোর বহন করে, কাজটা বারবার করার অর্থ। আল-আওক কথাটার সোজা মানে, তিনি যোগ করেন, বাধা দেওয়া আর সরিয়ে দেওয়া: কাউকে আটকে তার পথ থেকে ঘুরিয়ে দেওয়া।"
          },
          {
            "en": "The other commentators reach for near-synonyms that fill out the portrait. As-Sa'di pairs the word with al-mukhadhilīn, those who spread discouragement, and notes that they hold people back from going out at all. Al-Baghawi reads al-muʿawwiqīn as al-muthabbiṭīn, the ones who weigh others down and damp their will. Al-Muyassar keeps the same sense: they dishearten people from striving in the path of Allah. Across all of them the figure is not the loud traitor but the man who drains the resolve out of those around him.",
            "bn": "বাকি তাফসীরকারেরা কাছাকাছি প্রতিশব্দ এনে ছবিটা পূর্ণ করেন। সা'দী শব্দটির সঙ্গে জোড়েন আল-মুখাযযিলীন, মানে যারা মানুষের মনে হতাশা ছড়ায়, আর বলেন, তারা মানুষকে বেরোনো থেকেই আটকে রাখে। বাগভী আল-মুআওয়িকীন পড়েন আল-মুসাব্বিতীন অর্থে, যারা অন্যের মন ভারী করে দেয় আর তার উদ্যম নিভিয়ে দেয়। মুয়াসসার একই অর্থ রাখেন: তারা মানুষকে আল্লাহর পথে চেষ্টা-সংগ্রাম থেকে নিরুৎসাহ করে। সবার বর্ণনায় লোকটা উঁচু গলার বিশ্বাসঘাতক নয়, বরং সেই মানুষ, যে চারপাশের লোকের মনোবল শুষে নেয়।"
          },
          {
            "en": "Two details sharpen the charge. The verb is intensive, so this is not one slip of cowardice but a settled habit of pulling others down. And the Qur'an places them minkum, among you, inside the believing ranks rather than across the trench with the enemy. That is what makes the hindrance dangerous. It wears the dress of counsel, comes from a familiar face, and reaches a brother's ear before the louder dangers outside the wall ever could.",
            "bn": "দুটি খুঁটিনাটি অভিযোগটাকে আরও ধারালো করে। ক্রিয়াটি জোরালো গড়নের, তাই এটা ভীরুতার একবারের হোঁচট নয়, বরং অন্যকে টেনে নামানোর পাকা অভ্যাস। আর কুরআন তাদের রাখে 'মিনকুম', তোমাদের মধ্যেই: পরিখার ওপারে শত্রুর কাতারে নয়, মুমিনদের কাতারের ভেতরে। এ কারণেই এ বাধা এত বিপজ্জনক। এটা আসে উপদেশের পোশাকে, চেনা মুখ থেকে, আর দেয়ালের বাইরের উঁচু গলার বিপদ পৌঁছানোর আগেই ভাইয়ের কানে পৌঁছে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Whispered Come Over",
          "bn": "ফিসফিসিয়ে ডাকা"
        },
        "p": [
          {
            "en": "Halumma ilaynā means simply, come over to us. At-Tabari fills in the rest of the sentence as the hinderers meant it: come to us, leave Muhammad, do not stand with him at his post, for we fear you will be destroyed when he is. Ibn Kathir hears the same pull toward comfort, come to where we are, to our ease in the shade and the fruit. As-Sa'di reads the call as return to us, the very word the deserters used in verse thirteen, O people of Yathrib, so go back (33:13).",
            "bn": "হালুম্মা ইলাইনা মানে সোজা কথায়, আমাদের কাছে চলে এসো। বাধাদানকারীরা কথাটা যেভাবে বোঝাত, তাবারী বাক্যের বাকিটা সেভাবে ভরে দেন: আমাদের কাছে এসো, মুহাম্মাদকে ছাড়ো, তাঁর পাশে তাঁর ঘাঁটিতে দাঁড়িয়ো না, কারণ আমাদের ভয় হয়, তিনি ধ্বংস হলে তোমরাও তাঁর সঙ্গে ধ্বংস হবে। ইবন কাসীরও এতে আরামের দিকে একই টান শুনতে পান: আমরা যেখানে আছি সেখানে চলে এসো, ছায়া আর ফলমূলের আরামে। সা'দী ডাকটাকে পড়েন 'ফিরে এসো' অর্থে, ঠিক যে কথা পলাতকেরা তেরো নম্বর আয়াতে বলেছিল: হে ইয়াসরিববাসী, ফিরে যাও (৩৩:১৩)।"
          },
          {
            "en": "Al-Qurtubi pauses on the word itself. Halumma, he notes, is the usage of the people of the Hijaz, who keep one form whether they address a man, a woman, or a crowd; other Arabs say halummū to a group and halummī to a woman. He traces it to hā, a particle of drawing attention, joined to lum, with the vowel then lightened, and he glosses its meaning as aqbil, come forward. A small word, and the commentator weighs it, because everything turns on where that beckoning hand points.",
            "bn": "কুরতুবী শব্দটার ওপরেই একটু থামেন। তিনি বলেন, হালুম্মা হিজাযবাসীদের ব্যবহার: তারা পুরুষ, নারী বা দল, যাকেই ডাকুক, একই রূপ রাখে; অন্য আরবরা দলকে বলে হালুম্মূ আর নারীকে হালুম্মী। তাঁর মতে শব্দটির উৎস 'হা', যা মনোযোগ টানার অব্যয়, তার সঙ্গে 'লুম' জুড়ে, পরে উচ্চারণ হালকা করা হয়েছে। এর অর্থ তিনি বলেন 'আকবিল', মানে এগিয়ে এসো। ছোট্ট একটা শব্দ, তবু তাফসীরকার তা মেপে দেখেন, কারণ ইশারার হাতটা কোন দিকে ডাকছে, সবকিছু তার উপরই নির্ভর করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Voices Were These",
          "bn": "কাদের মুখের কথা"
        },
        "p": [
          {
            "en": "Al-Qurtubi notes that the verse may describe two sets of people: those who hold back, and those who call others away. On the identity of the callers he records three views, and keeps them as views. The first: they are the hypocrites, who told the Muslims that Muhammad and his companions were no more than a morsel for the eating, a doomed man and whoever stood with him, so come over to us. At-Tabari and al-Baghawi carry the same report from Qatada, in his blunt image of the morsel.",
            "bn": "কুরতুবী বলেন, আয়াতটি হয়তো দুই ধরনের মানুষের কথা বলছে: যারা নিজেরা পিছিয়ে থাকে, আর যারা অন্যদের ডেকে সরিয়ে নেয়। যারা ডাকছিল তারা কারা, এ নিয়ে তিনি তিনটি মত এনেছেন, আর তিনটিকে মত হিসেবেই রেখেছেন। প্রথম মত: তারা মুনাফিক। তারা মুসলিমদের বলত, মুহাম্মাদ আর তাঁর সঙ্গীরা তো এক গ্রাস খাবার মাত্র, ধ্বংস হতে চলা এক লোক আর তার সঙ্গে যারা আছে; তাই আমাদের কাছে চলে এসো। তাবারী ও বাগভী কাতাদা থেকে একই বর্ণনা এনেছেন, গ্রাসের সেই কাটা-কাটা উপমাসহ।"
          },
          {
            "en": "The second view makes the callers the Jews of Banu Qurayza, who said to their allies among the hypocrites, come over to us, part from Muhammad, for he is doomed, and if Abu Sufyan wins he will leave none of you alive. Al-Baghawi tells it more fully on the authority of Muqatil: the Jews sent word asking why the hypocrites would throw their lives away, you are our brothers and neighbours, come to us. So Abdullah ibn Ubayy and his circle turned to the believers to unsettle them, and the believers only grew in faith.",
            "bn": "দ্বিতীয় মতে, যারা ডাকছিল তারা বনু কুরাইযার ইহুদি। তারা মুনাফিকদের মধ্যে নিজেদের মিত্রদের বলত, আমাদের কাছে চলে এসো, মুহাম্মাদকে ছাড়ো, সে তো ধ্বংস হতে চলেছে, আর আবু সুফিয়ান জিতলে তোমাদের একজনকেও বাঁচিয়ে রাখবে না। বাগভী মুকাতিলের সূত্রে ঘটনাটা আরও বিস্তারিত বলেন: ইহুদিরা খবর পাঠাল, তোমরা কেন নিজেদের জান খোয়াবে? তোমরা তো আমাদের ভাই আর প্রতিবেশী, আমাদের কাছে চলে এসো। তখন আবদুল্লাহ ইবন উবাই আর তার দলবল মুমিনদের মন টলাতে তাদের দিকে ফিরল, আর তাতে মুমিনদের ঈমান উল্টো আরও বেড়ে গেল।"
          },
          {
            "en": "The third view, from Ibn Zayd, is a single scene rather than a party. On the day of the Confederates a man left the Prophet ﷺ and found his own brother at ease with roast meat, bread and drink. He said, you sit here while the Messenger ﷺ is among the spears and swords? The brother answered, come over to this instead; Muhammad will not come through it. The man refused, swore he would report it to the Prophet ﷺ, and went. At-Tabari and al-Qurtubi relate that he found Jibril had already brought down this very verse.",
            "bn": "তৃতীয় মত, ইবন যায়দের বর্ণনায়, কোনো দল নয়, বরং একটিমাত্র দৃশ্য। আহযাবের দিনে এক লোক নবী ﷺ-এর কাছ থেকে ফিরে এসে দেখল তার নিজের ভাই আয়েশ করছে ভুনা গোশত, রুটি আর পানীয় নিয়ে। সে বলল, তুমি এখানে বসে, আর রাসূল ﷺ বর্শা আর তলোয়ারের মাঝে? ভাই জবাব দিল, বরং এর কাছে চলে এসো; মুহাম্মাদ এ থেকে বেরোতে পারবে না। লোকটি রাজি হলো না, কসম খেল যে সে নবী ﷺ-কে এ কথা জানাবে, আর রওনা দিল। তাবারী ও কুরতুবী বলেন, সে গিয়ে দেখল জিবরীল এরই মধ্যে এই আয়াতটিই নামিয়ে এনেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Present, But Barely Fighting",
          "bn": "যুদ্ধে আসে সামান্যই"
        },
        "p": [
          {
            "en": "The closing clause weighs their worth to the fight. Al-Baghawi glosses al-baʾs plainly as war, and the verse says they do not come to it except a little. At-Tabari explains that even when they turn up, it is only taʿdhīr, a token appearance to make an excuse and to shield themselves from the believers' blame. Al-Muyassar sharpens the motive: they attend the fighting only rarely, and then for show, for a name, and from fear of being exposed as absent.",
            "bn": "শেষ অংশটি মাপে যুদ্ধে তাদের দাম কতটুকু। বাগভী আল-বাস শব্দের সোজা মানে দেন যুদ্ধ, আর আয়াত বলছে তারা তাতে আসে সামান্যই। তাবারী বোঝান, তারা যখন হাজিরও হয়, সেটা নিছক 'তাজির', মানে অজুহাত বানাতে আর মুমিনদের ভর্ৎসনা থেকে নিজেদের বাঁচাতে লোক-দেখানো উপস্থিতি। মুয়াসসার মতলবটা আরও স্পষ্ট করেন: তারা যুদ্ধে আসে কালেভদ্রে, তাও লোক-দেখানোর জন্য, নাম কুড়ানোর জন্য, আর গরহাজির বলে ধরা পড়ার ভয়ে।"
          },
          {
            "en": "Two commentators turn the little back on the reader. Al-Baghawi adds a line that lifts the verse above mere blame: had that little been done for Allah, it would have counted as much. The problem was never the quantity of the effort but the heart behind it. Al-Qurtubi gives the reasons they held back: fear of death, and the wish to be seen, for the little they did was for show and reputation rather than for the sake of Allah.",
            "bn": "দুই তাফসীরকার এই 'সামান্য' কথাটা পাঠকের দিকেই ঘুরিয়ে দেন। বাগভী এমন একটা কথা জোড়েন যা আয়াতটাকে নিছক দোষারোপের ওপরে তোলে: ওই সামান্যটুকুও যদি আল্লাহর জন্য হতো, তবে তা অনেক বলে গণ্য হতো। সমস্যাটা কখনোই চেষ্টার পরিমাণ ছিল না, ছিল তার পেছনের অন্তর। কুরতুবী তাদের পিছিয়ে থাকার কারণ দেন: মৃত্যুর ভয়, আর লোকের চোখে পড়ার শখ। কারণ যতটুকু তারা করত তা ছিল দেখানো আর নাম কুড়ানোর জন্য, আল্লাহর সন্তুষ্টির জন্য নয়।"
          },
          {
            "en": "As-Sa'di gathers the clause into a single judgement. These, he says, are the keenest of all people to stay behind, because the thing that would drive a believer forward, faith and patient endurance, is missing in them, while the thing that drives a man to cowardice, hypocrisy and the absence of faith, is fully present. The little they offer is not a lapse in otherwise willing servants. It is the most their hearts can spare.",
            "bn": "সা'দী এ অংশটুকু এক রায়ে গুছিয়ে আনেন। তিনি বলেন, পিছিয়ে থাকার আগ্রহ এদের মতো আর কারও নেই। কারণ যে জিনিস একজন মুমিনকে সামনে ঠেলে দেয়, অর্থাৎ ঈমান আর সবর, তা তাদের মধ্যে নেই; আর যে জিনিস মানুষকে ভীরু বানায়, অর্থাৎ মুনাফিকি আর ঈমানের অভাব, তা তাদের মধ্যে পুরোপুরি আছে। তারা যে সামান্যটুকু দেয়, তা মনেপ্রাণে রাজি কোনো বান্দার সাময়িক ত্রুটি নয়। ওটুকুই তাদের অন্তর বড়জোর দিতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Known Before It Was Reported",
          "bn": "খবর আসার আগেই জানা"
        },
        "p": [
          {
            "en": "The verse opens, not with an accusation to the Prophet ﷺ, but with a statement about Allah's knowledge: qad yaʿlamu Allah, already Allah knows the hinderers among you. As-Sa'di reads the whole verse as a threat and a warning aimed straight at the discouragers. The hindrance was done in low voices, in private tents, under the cover of concern for a brother's safety. The answer does not come from the ranks catching them out. It comes from above, naming the thing exactly as it was done.",
            "bn": "আয়াতটি শুরু হয় নবী ﷺ-এর কাছে কোনো নালিশ দিয়ে নয়, বরং আল্লাহর জ্ঞানের ঘোষণা দিয়ে: কাদ ইয়া'লামুল্লাহ, আল্লাহ তোমাদের মধ্যে বাধাদানকারীদের আগেই জানেন। সা'দীর চোখে গোটা আয়াতটা মনোবল ভাঙানো এই লোকদের প্রতি সরাসরি এক হুমকি আর হুঁশিয়ারি। বাধা দেওয়ার কাজটা চলছিল নিচু গলায়, আড়ালের তাঁবুতে, ভাইয়ের নিরাপত্তার চিন্তার ছদ্মবেশে। কাতারের লোকেরা তাদের হাতেনাতে ধরেনি; জবাব এসেছে ওপর থেকে, কাজটা যেভাবে হয়েছিল ঠিক সেভাবেই তার নাম ধরে।"
          },
          {
            "en": "The scene Ibn Zayd reported makes the point vivid. The faithful brother hurried off to tell the Prophet ﷺ what he had heard, and arrived to learn that Jibril had already come down with this verse. Human report was overtaken by divine knowledge. Whatever the hinderers murmured and to whomever, it was logged before any witness could carry it. That is the quiet terror and the quiet mercy of the line: nothing done in the dark around the effort stays hidden from the Lord the effort is for.",
            "bn": "ইবন যায়দের বর্ণিত দৃশ্যটি কথাটাকে জীবন্ত করে তোলে। বিশ্বাসী ভাইটি যা শুনেছিল তা নবী ﷺ-কে জানাতে ছুটে গেল, আর গিয়ে জানল জিবরীল এরই মধ্যে এই আয়াত নামিয়ে এনেছেন। মানুষের খবরকে ছাপিয়ে গেল আল্লাহর জ্ঞান। বাধাদানকারীরা যা-ই ফিসফিসিয়ে বলুক, যাকেই বলুক, কোনো সাক্ষী তা বয়ে আনার আগেই তা লেখা হয়ে গিয়েছিল। এখানেই আয়াতের চুপচাপ ভয় আর চুপচাপ দয়া: চেষ্টাকে ঘিরে অন্ধকারে যা কিছু করা হয়, যাঁর জন্য সেই চেষ্টা, তাঁর কাছে তার কিছুই গোপন থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Portrait Darkens Further",
          "bn": "ছবিটা আরও গাঢ় হয়"
        },
        "p": [
          {
            "en": "The next verse continues the same portrait, and a glance at it sharpens verse eighteen. It calls them ashiḥḥatan ʿalaykum, grudging toward you (33:19). Ibn Kathir explains this as men with no love or mercy for the believers, while as-Suddi reads the grudging as being over the spoils. Then, when fear comes, you see their eyes rolling like a man fainting in death, which Ibn Kathir attributes to the sheer depth of a coward's terror of the fight. The hinderer and the trembler are one man.",
            "bn": "পরের আয়াতেও একই ছবি চলতে থাকে, আর সেদিকে এক নজর তাকালে আঠারো নম্বর আয়াত আরও স্পষ্ট হয়। সে আয়াত তাদের বলে 'আশিহ্হাতান আলাইকুম', তোমাদের প্রতি কৃপণ (৩৩:১৯)। ইবন কাসীর ব্যাখ্যা করেন, এরা এমন লোক, মুমিনদের প্রতি যাদের কোনো ভালোবাসা বা দয়া নেই; আর সুদ্দীর মতে এ কৃপণতা গনিমতের মাল নিয়ে। তারপর আয়াত বলে, ভয় এলে দেখবে, মৃত্যুর ঘোরে বেহুঁশ মানুষের মতো তাদের চোখ ঘুরছে। ইবন কাসীর বলেন, যুদ্ধের প্রতি ভীরুর গভীর আতঙ্কই এর কারণ। যে বাধা দেয় আর যে ভয়ে কাঁপে, তারা একই লোক।"
          },
          {
            "en": "When the danger passes, the same verse says, they lash you with sharp tongues. Ibn Kathir carries Ibn Abbas's reading, that they start to run you down in talk, and Qatada's, that when the spoils are shared they crowd in with give us, give us, we were there with you, though in the fighting they were the first to fail. They are grudging toward any good. The deeds of such men, the passage ends, Allah renders worthless. The whisper to come away and the loud claim afterward belong to the same empty account.",
            "bn": "বিপদ কেটে গেলে, একই আয়াত বলে, তারা ধারালো জিভে তোমাদের আক্রমণ করে। ইবন কাসীর ইবন আব্বাসের ব্যাখ্যা আনেন: তারা কথায় কথায় তোমাদের ছোট করতে শুরু করে। আর কাতাদার ব্যাখ্যা: গনিমত ভাগের সময় তারা ভিড় করে এসে বলে, 'আমাদের দাও, আমাদের দাও, আমরাও তো তোমাদের সঙ্গে ছিলাম', অথচ লড়াইয়ের সময় তারাই সবার আগে পিছু হটেছিল। যেকোনো কল্যাণের বেলায় তারা কৃপণ। আয়াতের শেষে আছে, এমন লোকদের আমল আল্লাহ নিষ্ফল করে দেন। সরে আসার ফিসফিস আর পরে জোর গলার দাবি, দুটোই একই শূন্য খাতার হিসাব।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Marks and a Mirror",
          "bn": "তিন চিহ্ন ও আয়না"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a sound, verse-specific hadith to it, so none is forced into the gap. One well-known narration, though not tied to this verse, draws the same figure from another angle. Abu Huraira reported that the Prophet ﷺ said the marks of a hypocrite are three: when he speaks he lies, when he promises he breaks it, and when he is trusted he betrays (Sahih al-Bukhari 33). The whispered come to us, the false alarm, the hollow after-boast all live along those three marks.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে নির্দিষ্টভাবে এ আয়াত-সংক্রান্ত কোনো সহিহ হাদিস জোড়েনি, তাই জোর করে সে ফাঁক ভরা হয়নি। তবে একটি সুপরিচিত বর্ণনা, এ আয়াতের সঙ্গে সরাসরি যুক্ত না হলেও, একই ধরনের মানুষকে আরেক দিক থেকে দেখায়। আবু হুরাইরা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন, মুনাফিকের চিহ্ন তিনটি: কথা বললে মিথ্যা বলে, ওয়াদা করলে ভাঙে, আর তার কাছে আমানত রাখলে খিয়ানত করে (সহিহ বুখারি ৩৩)। 'আমাদের কাছে চলে এসো' বলে সেই ফিসফিস, মিথ্যা ভয় দেখানো, পরে ফাঁপা বড়াই: সবই ওই তিন চিহ্নের মধ্যেই পড়ে।"
          },
          {
            "en": "One thing must be said plainly. The verse describes a particular behaviour at a particular siege, as the Qur'an and the commentators describe it, and the Qur'an itself leaves the final verdict on these people to Allah, who may punish them or turn to them in mercy (33:24). It gives no one a licence to hang the label munafiq on a named living person, group or community, or to turn a charge of hypocrisy into a weapon. Reading it that way repeats the very sin it exposes.",
            "bn": "একটি কথা সোজাসুজি বলা দরকার। আয়াতটি এক নির্দিষ্ট ঘেরাওয়ের সময়কার এক নির্দিষ্ট আচরণের বর্ণনা দেয়, যেভাবে কুরআন ও তাফসীরকারেরা তা বর্ণনা করেছেন। আর এসব লোকের চূড়ান্ত ফয়সালা কুরআন নিজেই আল্লাহর হাতে ছেড়ে দিয়েছে: তিনি চাইলে তাদের শাস্তি দেবেন, চাইলে দয়া করে তাদের দিকে ফিরবেন (৩৩:২৪)। কোনো জীবিত ব্যক্তি, দল বা সম্প্রদায়ের গায়ে 'মুনাফিক' তকমা সাঁটার, কিংবা নিফাকের অভিযোগকে অস্ত্র বানানোর কোনো অনুমতি এ আয়াত কাউকে দেয় না। সেভাবে পড়লে আয়াত যে গুনাহ ধরিয়ে দেয়, সেটাই আবার করা হয়।"
          },
          {
            "en": "What the verse does license is a hard look inward. Every believer carries a small hinderer and a small whisperer, the voice that talks a friend out of the harder good and spares itself the cost. The siege of Madina is long over, but the test it staged is not. The verse hands the reader a mirror, not a list of names. It asks who I quietly pull back, where my come to us hides behind concern, and how much of the real effort I ever turn up for.",
            "bn": "তবে আয়াতটি থেকে যা নেওয়া যায়, তা হলো কড়া চোখে নিজের ভেতরে তাকানো। প্রত্যেক মুমিনের ভেতরেই একটা ছোট্ট বাধাদানকারী আর একটা ছোট্ট ফিসফিসে কণ্ঠ থাকে। সেই কণ্ঠ বন্ধুকে কঠিন ভালো কাজ থেকে বুঝিয়ে-সুঝিয়ে সরিয়ে আনে, আর নিজেও দাম দেওয়া থেকে বেঁচে যায়। মদীনার ঘেরাও বহু আগে শেষ, কিন্তু সে ঘেরাও যে পরীক্ষা নিয়েছিল, তা শেষ হয়নি। আয়াতটি পাঠকের হাতে তুলে দেয় একটা আয়না, নামের তালিকা নয়। সে আয়না জিজ্ঞেস করে: আমি চুপিসারে কাকে পিছু টানি, আমার 'আমাদের কাছে চলে এসো' কোথায় দরদের আড়ালে লুকিয়ে থাকে, আর সত্যিকারের চেষ্টায় আমি আদৌ কতটুকু হাজির হই।"
          }
        ]
      }
    ]
  },
  "33:21": {
    "sections": [
      {
        "h": {
          "en": "Declared During a Siege",
          "bn": "অবরোধের মধ্যে ঘোষিত"
        },
        "p": [
          {
            "en": "The verse does not float free; it sits in the middle of Surah al-Ahzab's account of the siege of Madinah. The passage around it describes eyes swerving and hearts reaching throats in 33:10, hypocrites saying Allah and His Messenger promised us only delusion in 33:12, and believers whose faith only grew at the sight of the armies in 33:22. Exactly there, the text says: in the Messenger of Allah you have an excellent example.",
            "bn": "আয়াতটি আলাদা কোনো কথা নয়; এটি এসেছে সূরা আল-আহযাবে মদীনা অবরোধের বিবরণের ঠিক মাঝখানে। আশপাশের আয়াতগুলোতে আছে: ৩৩:১০-এ ভয়ে চোখ ঘুরে যাওয়া আর কলিজা কণ্ঠাগত হওয়ার কথা; ৩৩:১২-এ মুনাফিকদের কথা, আল্লাহ ও তাঁর রাসূল আমাদের কেবল ধোঁকার প্রতিশ্রুতিই দিয়েছেন; আর ৩৩:২২-এ সেই মুমিনরা, শত্রুবাহিনী দেখে যাদের ঈমান আরও বেড়ে গিয়েছিল। ঠিক সেখানেই কুরআন বলে: আল্লাহর রাসূলের মধ্যে তোমাদের জন্য রয়েছে উত্তম আদর্শ।"
          },
          {
            "en": "The placement fixes the meaning. The uswa hasanah was declared not over a serene teaching scene but over a Prophet ﷺ enduring siege with his companions — sound reports describe him digging the trench and carrying its earth with them, hungry as they were hungry. The example offered is a whole man under full pressure: his steadfastness, his labour alongside his people, his refusal of despair while the confederates surrounded the city.",
            "bn": "আয়াতের এই অবস্থানই এর অর্থ ঠিক করে দেয়। উসওয়া হাসানার ঘোষণা এসেছিল কোনো শান্ত শিক্ষার আসরে নয়, বরং এমন সময়ে, যখন নবী ﷺ সাহাবীদের সঙ্গে অবরোধের কষ্ট সইছিলেন। সহীহ বর্ণনায় আছে, তিনি তাঁদের সঙ্গে পরিখা খুঁড়ছিলেন, মাটি বইছিলেন, আর তাঁরা যেমন ক্ষুধার্ত ছিলেন, তিনিও তেমনি ক্ষুধার্ত ছিলেন। এখানে যে আদর্শ সামনে রাখা হয়েছে, তা পূর্ণ চাপের মধ্যে থাকা এক পূর্ণ মানুষ: তাঁর অবিচলতা, নিজের লোকদের পাশে থেকে তাঁর পরিশ্রম, আর সম্মিলিত বাহিনী শহর ঘিরে রাখার মধ্যেও হতাশায় ডুবে না যাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Uswa",
          "bn": "উসওয়া শব্দটি"
        },
        "p": [
          {
            "en": "An uswa is a pattern one traces — the model a person moulds their conduct upon. The Quran uses the phrase uswatun hasanah for only one other figure: Ibrahim (AS) and those with him, in 60:4 and 60:6, for their clean break from the worship of other than Allah. In this verse the pattern is the Messenger of Allah ﷺ himself — not a list of rules extracted from him but the lived shape of the man, laqad kana lakum, established for you as fact.",
            "bn": "উসওয়া এমন এক নকশা, যা দেখে দেখে মানুষ নিজের আচরণ গড়ে তোলে; এমন এক ছাঁচ, যার আদলে নিজের চালচলন সাজায়। কুরআন 'উসওয়াতুন হাসানা' কথাটি আর মাত্র একজনের ক্ষেত্রে ব্যবহার করেছে: ইবরাহীম (আঃ) ও তাঁর সঙ্গীদের জন্য, ৬০:৪ ও ৬০:৬ আয়াতে, কারণ তাঁরা আল্লাহ ছাড়া অন্যের ইবাদত থেকে পুরোপুরি সম্পর্ক ছিন্ন করেছিলেন। এ আয়াতে সেই নকশা স্বয়ং আল্লাহর রাসূল ﷺ। তাঁর জীবন থেকে বের করে আনা নিয়মের তালিকা নয়, বরং মানুষটির পুরো জীবনযাপন। লাকাদ কানা লাকুম: এটা তোমাদের জন্য প্রতিষ্ঠিত সত্য।"
          },
          {
            "en": "A pattern differs from a biography. A biography is read; a pattern is traced, act by act, onto one's own conduct. The verse's claim is that the Prophet's ﷺ way of dealing — with fear, hunger, family, money, enemies, defeat and victory — is transferable, designed for imitation by ordinary people. That is why the community preserved the Sunnah with such care: it understood the record as a template it was commanded to use, not a treasure it was merely commanded to admire.",
            "bn": "নকশা আর জীবনী এক জিনিস নয়। জীবনী পড়া হয়; নকশা ধরে ধরে, এক এক কাজে, নিজের আচরণে এঁকে নিতে হয়। আয়াতের দাবি হলো, ভয়, ক্ষুধা, পরিবার, টাকাপয়সা, শত্রু, পরাজয় আর বিজয়ের সময় নবী ﷺ যেভাবে চলেছেন, তা অন্যের পক্ষেও অনুসরণ করা সম্ভব; সাধারণ মানুষ যেন অনুকরণ করতে পারে, সেভাবেই তা সাজানো। এ কারণেই উম্মত এত যত্নে সুন্নাহ সংরক্ষণ করেছে। উম্মত বুঝেছিল, এ বিবরণ এমন এক ছাঁচ, যা কাজে লাগানোর হুকুম এসেছে; এ শুধু মুগ্ধ হয়ে দেখার মতো কোনো রত্নভান্ডার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Keys to Benefit",
          "bn": "উপকৃত হওয়ার তিন চাবি"
        },
        "p": [
          {
            "en": "The verse then restricts who actually profits: li-man kana yarjullaha wal-yawmal-akhira wa dhakarallaha kathiran — for whoever hopes in Allah and the Last Day and remembers Allah much. The example stands open to all, but it transfers only to a person already oriented: hoping in Allah, accountable to a Last Day, kept awake by abundant remembrance. Without those, the sirah shrinks into history — admired, quoted, and not followed.",
            "bn": "এরপর আয়াত বলে দেয়, আসলে কারা এ থেকে উপকৃত হবে: লিমান কানা ইয়ারজুল্লাহা ওয়াল ইয়াওমাল আখিরা ওয়া যাকারাল্লাহা কাসীরা, তার জন্য, যে আল্লাহ ও শেষ দিনের আশা রাখে এবং আল্লাহকে বেশি বেশি স্মরণ করে। আদর্শটি সবার জন্য খোলা, কিন্তু তা জীবনে নামে কেবল তার মধ্যে, যার মুখ আগে থেকেই সঠিক দিকে ফেরানো: যে আল্লাহর কাছে আশা রাখে, শেষ দিনে জবাবদিহির কথা মনে রাখে, আর অনেক বেশি জিকির তাকে সজাগ রাখে। এগুলো না থাকলে সীরাত ছোট হয়ে নিছক ইতিহাস হয়ে যায়: লোকে প্রশংসা করে, উদ্ধৃতি দেয়, কিন্তু মেনে চলে না।"
          },
          {
            "en": "The three conditions also explain how imitation survives cost. Following the Prophet ﷺ at the trench meant hunger and fear; hope in Allah and the Last Day is what makes such a pattern rational to copy. The one who expects nothing beyond this world will imitate only what pays within it. The verse is candid about this: the example is excellent absolutely, but it is usable in proportion to the imitator's hope and remembrance.",
            "bn": "এই তিন শর্ত আরও একটা কথা বুঝিয়ে দেয়: দাম দিতে হলেও অনুকরণ টিকে থাকে কীভাবে। পরিখার দিনে নবী ﷺ-কে অনুসরণ করা মানে ছিল ক্ষুধা আর ভয়। আল্লাহ ও শেষ দিনের প্রতি আশাই এমন নকশা অনুসরণ করাকে বুদ্ধিমানের কাজ বানায়। যে এই দুনিয়ার বাইরে কিছুই আশা করে না, সে কেবল ততটুকুই অনুসরণ করবে, যতটুকুতে দুনিয়াতেই লাভ আছে। আয়াত এ ব্যাপারে খোলাখুলি: আদর্শটি সব দিক থেকেই উত্তম, কিন্তু যার আশা আর জিকির যত বেশি, সে একে তত বেশি কাজে লাগাতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "His Character Was the Quran",
          "bn": "তাঁর চরিত্রই ছিল কুরআন"
        },
        "p": [
          {
            "en": "Asked to describe the Prophet's ﷺ character, Aisha (RA) gave the answer Muslim preserves: his character was the Quran. The Book commanding justice, mercy, honesty and restraint had in him a walking demonstration. 68:4 had already sworn to it — indeed, you are upon a magnificent character. So the uswa is not an addition to the Quran but the Quran made visible; imitating him ﷺ and obeying the Book are one motion.",
            "bn": "নবী ﷺ-এর চরিত্র কেমন ছিল, জানতে চাওয়া হলে আয়েশা (রাঃ) যে উত্তর দিয়েছিলেন, ইমাম মুসলিম তা সংরক্ষণ করেছেন: তাঁর চরিত্রই ছিল কুরআন। যে কিতাব ইনসাফ, রহমত, সততা আর সংযমের হুকুম দেয়, তাঁর জীবনে সেই কিতাব চলাফেরা করত। ৬৮:৪ আয়াত আগেই এর সাক্ষ্য দিয়েছে: নিশ্চয় আপনি মহান চরিত্রের ওপর প্রতিষ্ঠিত। তাই উসওয়া কুরআনের বাড়তি কিছু নয়, বরং চোখে দেখা কুরআন। তাঁকে ﷺ অনুসরণ করা আর কিতাব মেনে চলা একই কাজ।"
          },
          {
            "en": "3:31 makes the imitation a test of love: say, if you love Allah, then follow me; Allah will love you and forgive your sins. Claimed love of Allah is verified by following the pattern, and answered — the verse promises — by Allah's love in return. This turns the study of his ﷺ life from an optional devotion into the appointed route by which affection for Allah becomes something demonstrable.",
            "bn": "৩:৩১ আয়াত অনুসরণকে ভালোবাসার পরীক্ষা বানিয়ে দেয়: বলুন, তোমরা যদি আল্লাহকে ভালোবাসো তবে আমার অনুসরণ করো; আল্লাহ তোমাদের ভালোবাসবেন এবং তোমাদের গুনাহ ক্ষমা করবেন। কেউ আল্লাহকে ভালোবাসে বলে দাবি করলে, সে দাবি যাচাই হয় এই নকশা অনুসরণে; আর আয়াতের ওয়াদা, এর জবাবে আল্লাহও তাকে ভালোবাসবেন। ফলে তাঁর ﷺ জীবন জানা আর ইচ্ছাধীন কোনো ভক্তির ব্যাপার থাকে না; এটা হয়ে যায় সেই নির্ধারিত পথ, যে পথে আল্লাহর প্রতি ভালোবাসা প্রমাণ করা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Tracing the Pattern",
          "bn": "নকশা ধরে চলা"
        },
        "p": [
          {
            "en": "Imitation begins in the ordinary, because most of his ﷺ recorded life is ordinary: how he spoke to servants and children, kept promises, greeted, ate, thanked, repaid debts, controlled anger, visited the sick. Choosing one verified habit and practising it until it holds is following this verse; admiring the whole and adopting nothing is not. The Companions (RA) learned him piecemeal and lifelong — the pattern was traced in small, repeated strokes.",
            "bn": "অনুসরণ শুরু হয় দৈনন্দিন সাধারণ কাজ থেকে, কারণ তাঁর ﷺ জীবনের যা কিছু লিপিবদ্ধ আছে, তার বেশির ভাগই সাধারণ দিনের কথা: খাদেম আর শিশুদের সঙ্গে তিনি কীভাবে কথা বলতেন, কীভাবে ওয়াদা রাখতেন, সালাম দিতেন, খেতেন, শুকরিয়া জানাতেন, ঋণ শোধ করতেন, রাগ সামলাতেন, অসুস্থকে দেখতে যেতেন। যাচাই করা একটি অভ্যাস বেছে নিয়ে তা পাকা না হওয়া পর্যন্ত চর্চা করাই এ আয়াতের অনুসরণ; পুরোটার প্রশংসা করে কিছুই না নেওয়া অনুসরণ নয়। সাহাবীগণ (রাঃ) তাঁকে শিখেছেন একটু একটু করে, সারা জীবন ধরে। নকশাটা আঁকা হয়েছে ছোট ছোট রেখায়, বারবার টেনে।"
          },
          {
            "en": "And the verse's context adds the harder half: the example includes conduct under siege. Fear, shortage and public panic have a Prophetic pattern too — steadiness, labour alongside others, hope spoken aloud when arguments for despair were plentiful. Whoever hopes in Allah and the Last Day is told where to look when the armies gather, whatever form they take in a given life: in the Messenger of Allah ﷺ there is an excellent example.",
            "bn": "আর আয়াতের প্রেক্ষাপট যোগ করে কঠিনতর অংশটুকু: এ আদর্শের মধ্যে অবরোধের সময়ের আচরণও আছে। ভয়, অভাব আর চারদিকে আতঙ্কের সময়েরও একটি নববী নকশা আছে: অবিচল থাকা, অন্যদের পাশে থেকে খাটা, আর হতাশ হওয়ার কারণ যখন অনেক, তখনও মুখে আশার কথা বলা। যে আল্লাহ ও শেষ দিনের আশা রাখে, তাকে বলে দেওয়া হয়েছে, শত্রুবাহিনী জড়ো হলে কোন দিকে তাকাতে হবে, তার জীবনে সে বাহিনী যে রূপেই আসুক: আল্লাহর রাসূল ﷺ-এর মধ্যেই রয়েছে উত্তম আদর্শ।"
          }
        ]
      }
    ]
  },
  "33:28": {
    "sections": [
      {
        "h": {
          "en": "Where the Choice Falls",
          "bn": "পছন্দের প্রশ্নটি কোথায় এল"
        },
        "p": [
          {
            "en": "These words open a long passage addressed to the Prophet's household, set just after the account of the confederate siege. Ma'arif al-Qur'an notes that a central concern of Surah al-Ahzab is that nothing from those closest to the Prophet should cause him pain, and that they obey Allah and His Messenger wholeheartedly. The siege verses had shown the hurt the disbelievers and hypocrites inflicted on him; now the lens turns inward, to his own home, with the same tenderness and the same high standard.",
            "bn": "এ আয়াত দিয়ে শুরু হয় নবী-পরিবারকে উদ্দেশ করে একটি দীর্ঘ আলোচনা, আর তা এসেছে সম্মিলিত বাহিনীর অবরোধের বর্ণনার ঠিক পরেই। মাআরিফুল কুরআন বলে, সূরা আহযাবের একটি বড় লক্ষ্য হলো, নবী ﷺ-এর সবচেয়ে কাছের মানুষদের কাছ থেকে যেন তিনি কোনো কষ্ট না পান, আর তাঁরা যেন মনেপ্রাণে আল্লাহ ও তাঁর রাসূলের আনুগত্য করেন। অবরোধের আয়াতগুলো দেখিয়েছিল, কাফির ও মুনাফিকদের হাতে তিনি কত কষ্ট পেয়েছেন। এবার দৃষ্টি ফেরে ভেতরের দিকে, তাঁর নিজের ঘরে, সেই একই কোমলতা আর একই উঁচু মান নিয়ে।"
          },
          {
            "en": "The passage does not scold. It lays out two roads and lets each wife walk the road she chooses. If she wants the worldly life and its adornment, she will be provided for and released with honour; if she wants Allah, His Messenger, and the home of the Hereafter, a great reward is prepared for the doers of good among them, as the following verse says. Reading 33:28 without 33:29 breaks the sentence in half; the choice is only a choice because both sides are named.",
            "bn": "আয়াত কাউকে তিরস্কার করে না। দুটি পথ সামনে রেখে দেয়, আর প্রত্যেক স্ত্রীকে নিজের পথ নিজে বেছে নিতে দেয়। কেউ যদি দুনিয়ার জীবন আর তার সাজসজ্জা চান, তাঁকে কিছু সম্পদ দিয়ে সম্মানের সঙ্গে বিদায় দেওয়া হবে; আর কেউ যদি আল্লাহ, তাঁর রাসূল আর আখিরাতের ঘর চান, তবে পরের আয়াত বলছে, তাঁদের মধ্যে যাঁরা নেককার, তাঁদের জন্য মহা পুরস্কার প্রস্তুত। ৩৩:২৮ আয়াতকে ৩৩:২৯ ছাড়া পড়লে বাক্যটা মাঝখানে ভেঙে যায়। দুই দিকই নাম ধরে বলা আছে বলেই পছন্দটা সত্যিকারের পছন্দ।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Wives Had Asked",
          "bn": "স্ত্রীরা যা চেয়েছিলেন"
        },
        "p": [
          {
            "en": "The commentators tie the verse to a request. As-Sa'di relates that the Prophet's wives had asked for greater spending and clothing, pressing for what he could not always give, until the matter weighed on him. Ibn Kathir and al-Qurtubi record the same background: some had asked for a wider share of the world, others for an increase in maintenance. The reports differ in detail, and they agree on the heart of it. This was about provision, not about any fault in faith or affection.",
            "bn": "তাফসীরকারেরা আয়াতটিকে একটি আবদারের সঙ্গে জুড়ে দেন। সা'দী বর্ণনা করেন, নবী ﷺ-এর স্ত্রীরা আরও খরচ আর পোশাক চেয়েছিলেন, এমন কিছু চেয়ে বসেছিলেন যা তিনি সব সময় দিতে পারতেন না, আর তা তাঁর মনে ভার হয়ে বসেছিল। ইবন কাসীর ও কুরতুবী একই পটভূমি তুলে ধরেন: কেউ দুনিয়ার আরও বড় ভাগ চেয়েছিলেন, কেউ চেয়েছিলেন খরচের বাড়তি। বর্ণনাগুলোর খুঁটিনাটিতে ভিন্নতা আছে, মূল কথায় তারা একমত। ব্যাপারটা ছিল সংসারের খরচ নিয়ে, ঈমান বা ভালোবাসার কোনো ঘাটতি নিয়ে নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an, drawing on Abu Hayyan, sets the scene. After the campaigns that followed the siege, a measure of ease had spread among the Muslims, and the wives supposed a share had come to the Prophet too. They appealed together, mentioning how the wives of kings lived adorned and served. They never imagined their words would grieve him; they had only wished for what those around them now had. It is a human moment, reported without a hint of blame toward the Mothers of the Believers.",
            "bn": "মাআরিফুল কুরআন আবু হাইয়ানের সূত্রে দৃশ্যটা আঁকে। অবরোধের পরের অভিযানগুলোর পর মুসলিমদের মধ্যে কিছুটা সচ্ছলতা ছড়িয়েছিল, আর স্ত্রীরা ভেবেছিলেন তার একটা ভাগ হয়তো নবী ﷺ-এর কাছেও এসেছে। তাঁরা একসঙ্গে আবদার জানালেন, মনে করিয়ে দিলেন রাজা-বাদশাহর স্ত্রীরা কেমন সাজসজ্জা আর সেবায় থাকেন। তাঁরা কল্পনাও করেননি এ কথা তাঁকে কষ্ট দেবে; তাঁরা কেবল চেয়েছিলেন আশপাশের মানুষের হাতে এখন যা আছে তাই। এ এক মানবিক মুহূর্ত, উম্মুল মু'মিনীনদের প্রতি সামান্যতম দোষারোপ ছাড়াই বর্ণিত।"
          },
          {
            "en": "As-Sa'di adds that the strain reached the point where the Prophet withdrew from his wives for a time. Yet the Qur'an does not freeze the moment as a quarrel. Allah willed, as-Sa'di puts it, to make the matter easy for His Messenger, to raise the rank of his wives, and to remove from them anything that would lessen their reward. What began as a request about the world was lifted, by revelation, into an invitation to the highest station a woman could hold.",
            "bn": "সা'দী আরও বলেন, টানাপোড়েন এতদূর গড়িয়েছিল যে নবী ﷺ কিছুদিনের জন্য স্ত্রীদের থেকে আলাদা থাকেন। তবু কুরআন ঘটনাটাকে একটা ঝগড়া হিসেবে আটকে রাখে না। সা'দীর ভাষায়, আল্লাহ চাইলেন তাঁর রাসূলের জন্য ব্যাপারটা সহজ করে দিতে, তাঁর স্ত্রীদের মর্যাদা বাড়াতে, আর যা কিছু তাঁদের প্রতিদান কমিয়ে দিতে পারে, তা তাঁদের থেকে দূর করে দিতে। শুরুটা ছিল দুনিয়ার কিছু চাওয়া দিয়ে; ওহি সেটাকে তুলে নিয়ে গেল এক দাওয়াতে, একজন নারী যত উঁচু মর্যাদা পেতে পারেন, সেই মর্যাদার দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Invitation, Not a Threat",
          "bn": "ধমক নয়, মর্যাদার ডাক"
        },
        "p": [
          {
            "en": "Ibn Kathir frames the command plainly: Allah ordered His Messenger to let his wives choose between parting from him, to seek elsewhere the world they wanted, and patience with the narrowness of his home, for which a great reward awaited them with Allah. The verse does not demand that they stay. It honours them with a decision. To be given a true choice, with both outcomes laid out honestly, is itself a mark of respect, and here the one offering it is the Messenger of Allah.",
            "bn": "ইবন কাসীর আদেশটা সোজা ভাষায় বুঝিয়ে দেন। আল্লাহ তাঁর রাসূলকে আদেশ দিলেন স্ত্রীদের দুটির একটি বেছে নেওয়ার সুযোগ দিতে: তাঁকে ছেড়ে গিয়ে অন্য কোথাও নিজেদের কাঙ্ক্ষিত দুনিয়া খোঁজা, অথবা তাঁর ঘরের টানাটানিতে সবর করা, যার জন্য আল্লাহর কাছে তাঁদের অপেক্ষায় আছে মহা প্রতিদান। আয়াত তাঁদের থেকে যেতে বাধ্য করে না। বরং সিদ্ধান্তের ভার তাঁদের হাতে দিয়ে তাঁদের সম্মান করে। দুই দিকের পরিণাম সততার সঙ্গে সামনে রেখে সত্যিকারের বাছাইয়ের সুযোগ দেওয়াটাই এক সম্মান। আর এখানে সেই সুযোগ দিচ্ছেন স্বয়ং আল্লাহর রাসূল।"
          },
          {
            "en": "The worldly side is named here: the life of this world and its adornment, az-zina, the finery and ease a home can hold. The other side is named in 33:29: Allah, His Messenger, and the home of the Hereafter, with a great reward prepared for the doers of good. The pairing is deliberate. The world is set not against poverty but against Allah Himself, so the wives are not asked to choose hardship for its own sake, but to choose what hardship is worth.",
            "bn": "দুনিয়ার দিকটা এই আয়াতেই নাম ধরে বলা আছে: দুনিয়ার জীবন আর তার শোভা, আয-যীনাহ, অর্থাৎ একটা ঘরে যত সাজসজ্জা আর আরাম থাকতে পারে। অন্য দিকটা আসে ৩৩:২৯ আয়াতে: আল্লাহ, তাঁর রাসূল আর আখিরাতের ঘর, সঙ্গে সৎকর্মশীলদের জন্য তৈরি রাখা মহা প্রতিদান। এই জোড়া ইচ্ছা করেই বাঁধা। দুনিয়াকে দাঁড় করানো হয়েছে দারিদ্র্যের মুখোমুখি নয়, স্বয়ং আল্লাহর মুখোমুখি। তাই স্ত্রীদের কষ্টের জন্যই কষ্ট বেছে নিতে বলা হচ্ছে না; বলা হচ্ছে সেটাই বেছে নিতে, যার জন্য কষ্ট সওয়া সার্থক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Provision Named",
          "bn": "ভোগসামগ্রীর প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Umattiʿkunna, 'I will provide for you,' names a specific thing. At-Tabari explains it as the muta'ah, the parting gift Allah made a due upon men for women they divorce, and he reads it through 2:236, where provision is set 'upon the wealthy according to his means and upon the straitened according to his means.' Al-Baghawi says the same in a word: this is the muta'ah of divorce. The release, if chosen, would not leave a woman empty-handed; it carried a settlement that Allah Himself had legislated.",
            "bn": "উমাত্তি'কুন্না, 'তোমাদের ভোগসামগ্রী দিয়ে দেব', কথাটি একটি নির্দিষ্ট জিনিস বোঝায়। তাবারী বলেন, এ হলো মুতআহ: তালাক দেওয়া স্ত্রীকে বিদায়ের সময় যে উপহার দেওয়া আল্লাহ পুরুষের ওপর ওয়াজিব করেছেন। তিনি একে বোঝেন ২:২৩৬ আয়াতের আলোকে, যেখানে এই ভোগসামগ্রী ঠিক করা হয়েছে 'সচ্ছলের ওপর তার সাধ্যমতো আর অসচ্ছলের ওপর তার সাধ্যমতো।' বাগভী এক কথায় একই কথা বলেন: এটা তালাকের মুতআহ। তাই কেউ বিদায় বেছে নিলেও খালি হাতে যেতেন না; সঙ্গে থাকত আল্লাহর নিজের দেওয়া বিধানে ঠিক করা পাওনা।"
          },
          {
            "en": "At-Tabari then reads wa-usarrihkunna, 'and I will release you,' through the law of parting Allah taught in 65:1: 'When you divorce women, divorce them for their waiting period.' The verb is not a man losing his temper and sending a woman away. It is a release ordered and shaped by revelation, with its timing, its waiting period, and its rights all observed. Even the ending of a marriage, in this telling, is an act of worship bounded by Allah's instruction, not a private storm.",
            "bn": "এরপর তাবারী 'ওয়া উসাররিহকুন্না', অর্থাৎ 'আর তোমাদের বিদায় দেব', কথাটি বোঝেন ৬৫:১ আয়াতে আল্লাহর শেখানো বিচ্ছেদের বিধান দিয়ে: 'তোমরা যখন নারীদের তালাক দাও, তাদের ইদ্দতের হিসাব রেখে তালাক দাও।' এখানে ক্রিয়াটি এমন কোনো পুরুষের ছবি নয়, যে রাগের মাথায় স্ত্রীকে বের করে দেয়। এ বিদায়ের হুকুম এসেছে ওহি থেকে, তার রূপও ওহিই ঠিক করে দিয়েছে: কখন হবে, ইদ্দত কীভাবে, কার কী হক, সবকিছু মেনে। এই ব্যাখ্যায় বিয়ে ভাঙাও আল্লাহর নির্দেশে বাঁধা এক ইবাদত, মনের ঝড়ে নেওয়া কোনো ব্যক্তিগত সিদ্ধান্ত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gracious Release",
          "bn": "সুন্দর বিদায়ের আদব"
        },
        "p": [
          {
            "en": "Sarahan jamilan, 'a gracious release,' is the phrase the verse lingers on. Al-Qurtubi defines it as a release along the sunnah, with no harm and no withholding of what is owed to her. Al-Muyassar renders it 'I will part from you without harm or injury.' As-Sa'di adds the inner tone: without anger or abuse, but with an open heart and a settled mind, before matters ever reach what is unbecoming. The parting is not merely permitted; it is required to be kind.",
            "bn": "সারাহান জামীলান, 'সুন্দর বিদায়': আয়াত এই কথাটির ওপর বিশেষ করে থামে। কুরতুবী বলেন, এ হলো সুন্নাহ মোতাবেক বিদায়, যাতে স্ত্রীর কোনো ক্ষতি করা হয় না, তার পাওনাও আটকে রাখা হয় না। মুয়াসসার অর্থ করে: 'কোনো ক্ষতি বা কষ্ট না দিয়ে তোমাদের থেকে আলাদা হব।' সা'দী ভেতরের সুরটাও ধরিয়ে দেন: রাগ বা গালমন্দ ছাড়া, খোলা মনে আর ঠান্ডা মাথায়, ব্যাপারটা অশোভন কিছুতে গড়ানোর আগেই। অর্থাৎ বিদায় শুধু জায়েজ নয়, সে বিদায় সদয় হওয়াও জরুরি।"
          },
          {
            "en": "There is a quiet teaching here that reaches far beyond this household. Ma'arif al-Qur'an draws from the verse that when a husband and wife cannot find ease together, the fitting path is to give her the choice to stay content or to leave with honour, sent off graciously and with a gift, as the sunnah directs. Islam does not pretend every marriage will hold. What it insists on is that if a bond is loosed, it be loosed with dignity, and never turned into a weapon.",
            "bn": "এখানে একটা চুপচাপ শিক্ষা আছে, যা এই এক পরিবারের গণ্ডি ছাড়িয়ে বহু দূর পৌঁছায়। মাআরিফুল কুরআন আয়াত থেকে এই শিক্ষা বের করে: স্বামী-স্ত্রী যখন একসঙ্গে শান্তি পান না, তখন সঠিক পথ হলো স্ত্রীকে বেছে নিতে দেওয়া। চাইলে তিনি সন্তুষ্ট মনে থেকে যাবেন, নয়তো সম্মানের সঙ্গে বিদায় নেবেন, আর সুন্নাহর নির্দেশমতো তাঁকে বিদায় দেওয়া হবে সৌজন্য আর উপহারসহ। ইসলাম এমন ভান করে না যে প্রতিটি বিয়ে টিকে থাকবে। তার জোর এক জায়গায়: বাঁধন যদি খুলতেই হয়, তবে মর্যাদার সঙ্গে খুলতে হবে, কখনো তাকে অস্ত্র বানানো চলবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of the Choice",
          "bn": "পছন্দের দুই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Al-Qurtubi records that the scholars read the nature of this choice in two ways. On the first, held by Aisha, Mujahid, Ikrimah and others, the wives were given a choice between remaining in the marriage and being released, and they chose to remain. On the second, reported from al-Hasan and Qatada, they were offered only the choice between the world and the Hereafter, to be kept or let go, with no power of divorce placed in their hands. Al-Qurtubi himself judges the first the stronger.",
            "bn": "কুরতুবী জানান, এই বাছাইয়ের ধরন আলিমরা দুইভাবে বুঝেছেন। প্রথম মতটি আয়িশা, মুজাহিদ, ইকরিমা ও আরও অনেকের: স্ত্রীদের সুযোগ দেওয়া হয়েছিল বিয়েতে থেকে যাওয়া আর বিদায় নেওয়ার মধ্যে একটি বেছে নেওয়ার, আর তাঁরা থেকে যাওয়াই বেছে নেন। দ্বিতীয় মতটি হাসান ও কাতাদা থেকে বর্ণিত: তাঁদের সামনে রাখা হয়েছিল কেবল দুনিয়া আর আখিরাতের মধ্যে বাছাই, যার ভিত্তিতে তাঁদের রাখা হবে বা ছেড়ে দেওয়া হবে; তালাকের কোনো ক্ষমতা তাঁদের হাতে দেওয়া হয়নি। কুরতুবী নিজে প্রথম মতটিকেই বেশি শক্তিশালী মনে করেন।"
          },
          {
            "en": "The difference is not idle. Aisha said that the Messenger of Allah gave them the choice and they chose him, and he did not count it as a divorce; al-Bukhari and Muslim both record this. Al-Qurtubi reasons that the instruction to consult her parents cannot have been about preferring the Hereafter over the world, for no believer needs counsel to choose Allah. It must have concerned the parting itself. The wives, choosing him, lost nothing of their marriage; the choice only proved where their hearts lay.",
            "bn": "এই মতভেদ নিছক কথার কথা নয়। আয়িশা বলেছেন, আল্লাহর রাসূল তাঁদের বাছাইয়ের সুযোগ দিয়েছিলেন, তাঁরা তাঁকেই বেছে নিয়েছিলেন, আর তিনি একে তালাক হিসেবে গণ্য করেননি; বুখারী ও মুসলিম দুজনেই এটি বর্ণনা করেছেন। কুরতুবীর যুক্তি: বাবা-মায়ের পরামর্শ নিতে বলাটা দুনিয়ার বদলে আখিরাত বেছে নেওয়ার ব্যাপারে হতে পারে না, কারণ আল্লাহকে বেছে নিতে কোনো মু'মিনের কারও পরামর্শ লাগে না। কাজেই কথাটা নিশ্চয়ই বিচ্ছেদ নিয়েই ছিল। স্ত্রীরা তাঁকে বেছে নিয়ে নিজেদের বিয়ের কিছুই হারাননি; এই বাছাই শুধু দেখিয়ে দিল তাঁদের মন কোথায় বাঁধা।"
          }
        ]
      },
      {
        "h": {
          "en": "She Chose First",
          "bn": "তিনি আগে বেছে নিলেন"
        },
        "p": [
          {
            "en": "The soundest report of what happened comes from Aisha herself, and al-Bukhari preserves it with a short chain. When the command came, the Prophet did not gather his wives for a verdict. He went to each in turn, and he began with Aisha, telling her first not to rush, as a kindness, since he knew which way her parents would guide her. Here is how she remembered that morning, in the wording recorded by al-Bukhari.",
            "bn": "যা ঘটেছিল তার সবচেয়ে সহীহ বর্ণনা এসেছে স্বয়ং আয়িশার মুখ থেকে, আর বুখারী তা সংরক্ষণ করেছেন সংক্ষিপ্ত সনদে। আদেশ আসার পর নবী ﷺ রায় শোনার জন্য স্ত্রীদের একসঙ্গে ডাকেননি। তিনি একে একে প্রত্যেকের কাছে গেলেন, শুরু করলেন আয়িশাকে দিয়ে। মমতা থেকেই তাঁকে আগে বলে নিলেন তাড়াহুড়ো না করতে, কারণ তিনি জানতেন তাঁর বাবা-মা তাঁকে কোন দিকে পরামর্শ দেবেন। সেই সকালের কথা আয়িশা যেভাবে মনে রেখেছিলেন, বুখারীর বর্ণনার ভাষায় তা এই:"
          },
          {
            "en": "She said: 'Allah's Messenger came to me when Allah ordered him to give option to his wives. So Allah's Messenger started with me, saying: I am going to mention to you something, but you should not hasten to give your reply unless you consult your parents. He knew that my parents would not order me to leave him. Then he said: Allah says, O Prophet, say to your wives. On that I said to him: Then why should I consult my parents? Verily, I seek Allah, His Apostle and the Home of the Hereafter.'",
            "bn": "তিনি বলেন: 'আল্লাহ যখন তাঁর রাসূলকে স্ত্রীদের এখতিয়ার দেওয়ার আদেশ দিলেন, তখন আল্লাহর রাসূল আমার কাছে এলেন। তিনি আমাকে দিয়েই শুরু করলেন, বললেন: তোমাকে একটা কথা বলব, তবে বাবা-মায়ের সঙ্গে পরামর্শ না করে জবাব দিতে তাড়াহুড়ো কোরো না। তিনি জানতেন, আমার বাবা-মা কখনো আমাকে তাঁকে ছেড়ে যেতে বলবেন না। তারপর তিনি বললেন: আল্লাহ বলছেন, হে নবী, তোমার স্ত্রীদের বলে দাও। তখন আমি তাঁকে বললাম: এ ব্যাপারে আমি আবার বাবা-মায়ের পরামর্শ নেব কেন? আমি তো আল্লাহ, তাঁর রাসূল আর আখিরাতের ঘরই চাই।'"
          },
          {
            "en": "Her answer was immediate, and it set the pattern. The same report adds that all of the Prophet's wives then did as Aisha had done, each choosing Allah and His Messenger. This hadith stands in Sahih al-Bukhari and is recorded by Muslim as well. In another sound narration the Prophet told Aisha that Allah had not sent him to be harsh, but as a gentle teacher who makes things easy. The choice honoured them, and the manner of asking honoured them too.",
            "bn": "আয়িশার জবাব এল সঙ্গে সঙ্গে, আর সেটাই হয়ে গেল সবার পথ। একই বর্ণনায় আছে, এরপর নবী ﷺ-এর সব স্ত্রী আয়িশার মতোই করলেন; প্রত্যেকে আল্লাহ ও তাঁর রাসূলকেই বেছে নিলেন। এ হাদিস সহীহ বুখারীতে আছে, মুসলিমও এটি বর্ণনা করেছেন। আরেকটি সহীহ বর্ণনায় নবী ﷺ আয়িশাকে বলেন, আল্লাহ তাঁকে কঠোর করে পাঠাননি; পাঠিয়েছেন কোমল শিক্ষক করে, যিনি সবকিছু সহজ করে দেন। বাছাইয়ের সুযোগটা যেমন তাঁদের সম্মান করেছিল, জিজ্ঞেস করার ধরনটাও তেমনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Honour, Not a Template",
          "bn": "সম্মান, কোনো ছাঁচ নয়"
        },
        "p": [
          {
            "en": "This passage must be read with care, and said plainly: it describes the household of the Prophet at a unique moment, under direct revelation, and it licenses nothing against anyone living. It is not a script a man may wave at his wife, nor a verse to belittle women who ask for their needs, nor a club against the Prophet's family, whom Allah Himself purified and whom every believer is bound to honour. The wives who asked were the Mothers of the Believers, and the asking was no sin.",
            "bn": "এই অংশ পড়তে হবে সাবধানে, আর একটা কথা পরিষ্কার করে বলে রাখা দরকার। এখানে নবী ﷺ-এর পরিবারের এক অনন্য সময়ের বর্ণনা, যখন সরাসরি ওহি নাজিল হচ্ছিল। আজ বেঁচে থাকা কারও বিরুদ্ধে এ আয়াত কিছুই বৈধ করে না। এটা এমন কোনো ছক নয়, যা কোনো পুরুষ স্ত্রীর মুখের সামনে নেড়ে দেখাবে। নিজের প্রয়োজনের কথা মুখে আনেন যে নারীরা, তাঁদের ছোট করার জন্যও এ আয়াত নয়। নবী-পরিবারের বিরুদ্ধে লাঠি হিসেবেও নয়, যাঁদের আল্লাহ নিজে পবিত্র করেছেন আর যাঁদের সম্মান করা প্রতিটি মু'মিনের কর্তব্য। যাঁরা চেয়েছিলেন, তাঁরা উম্মুল মু'মিনীন; আর তাঁদের চাওয়াটা কোনো গুনাহ ছিল না।"
          },
          {
            "en": "What it does leave us is a mirror and a measure. The quiet question put to that household is put, in softer form, to every heart: when the world offers its adornment on easy terms, what is it worth beside Allah, His Messenger, and the home of the Hereafter? And when something must be let go, a job, a friendship, a marriage, the verse sets the manner: release it graciously, with no harm and no bitterness. To choose the higher thing, and to part from the lesser with dignity, is the whole of what these words teach.",
            "bn": "আমাদের জন্য এ আয়াত রেখে যায় একটা আয়না আর একটা মাপকাঠি। ওই পরিবারকে যে নীরব প্রশ্ন করা হয়েছিল, একটু নরম করে সেই প্রশ্ন প্রতিটি অন্তরকেই করা হয়: দুনিয়া যখন সহজ শর্তে তার শোভা সামনে এনে ধরে, আল্লাহ, তাঁর রাসূল আর আখিরাতের ঘরের পাশে তার দাম কতটুকু? আর যখন কিছু ছাড়তেই হয়, হোক তা চাকরি, বন্ধুত্ব বা বিয়ে, আয়াত শিখিয়ে দেয় কীভাবে ছাড়তে হয়: সুন্দরভাবে ছাড়ুন, কারও ক্ষতি না করে, মনে তিক্ততা না রেখে। উঁচুটাকে বেছে নেওয়া আর নিচুটা থেকে মর্যাদার সঙ্গে সরে আসা, এই দুটিই এ আয়াতের পুরো শিক্ষা।"
          }
        ]
      }
    ]
  },
  "33:35": {
    "sections": [
      {
        "h": {
          "en": "A Question That Was Answered",
          "bn": "যে প্রশ্নের জবাব এসেছিল"
        },
        "p": [
          {
            "en": "This is one of the verses whose occasion of revelation is well attested. Umm Salamah (RA), a wife of the Prophet ﷺ, asked why women were not mentioned in the Quran as men were. The report is preserved in the collections of Ahmad and an-Nasa'i, and at-Tirmidhi records the same question from Umm 'Imarah al-Ansariyyah (RA), and this verse came down in reply — naming men and women explicitly, ten times over, in a single sentence.",
            "bn": "যেসব আয়াতের শানে নুযূল সুপ্রমাণিত, এটি তার একটি। নবী ﷺ-এর স্ত্রী উম্মে সালামা (রাঃ) জিজ্ঞেস করেছিলেন, কুরআনে পুরুষদের কথা যেভাবে আসে, নারীদের কথা সেভাবে আসে না কেন। বর্ণনাটি আহমাদ ও নাসাঈর সংকলনে আছে; তিরমিযী একই প্রশ্ন বর্ণনা করেছেন উম্মে 'ইমারা আনসারিয়া (রাঃ)-এর সূত্রে। জবাবে এই আয়াত নাজিল হয়, আর একটি বাক্যের ভেতরেই দশবার পুরুষ ও নারীর নাম আলাদা করে উল্লেখ করে।"
          },
          {
            "en": "That detail changes how the verse should be heard. Its repetitive structure is not accidental style; the doubling is the answer. Arabic can address a mixed group with the masculine plural alone, and the Quran often does. Here it deliberately does not, and the reason recorded is a question a woman asked out loud and had answered from above.",
            "bn": "এই তথ্য জানলে আয়াতটা অন্যভাবে কানে বাজে। এর বারবার ফিরে আসা গঠন নিছক লেখার ঢং নয়; জোড়ায় জোড়ায় বলাটাই আসলে জবাব। আরবিতে নারী-পুরুষ মেশানো দলকে শুধু পুংলিঙ্গ বহুবচন দিয়েই সম্বোধন করা যায়, আর কুরআন প্রায়ই তাই করে। এখানে ইচ্ছা করেই তা করা হয়নি। কারণ হিসেবে বর্ণনায় আছে এক নারীর মুখ ফুটে করা একটি প্রশ্ন, যার জবাব এসেছিল আসমান থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Sits in al-Ahzab",
          "bn": "আল-আহযাবে এর অবস্থান"
        },
        "p": [
          {
            "en": "The verses just before it, 33:28-34, address the wives of the Prophet ﷺ directly and no one else: the choice offered between the world and Allah and His Messenger, the reminder that they are not like any other women, and the instruction to remember what is recited in their houses of the verses of Allah and wisdom. Then, without transition, the address opens out to every believing man and woman on earth.",
            "bn": "ঠিক আগের আয়াতগুলো, 33:28-34, সরাসরি শুধু নবী ﷺ-এর স্ত্রীদের সম্বোধন করে: দুনিয়া আর আল্লাহ ও তাঁর রাসূলের মধ্যে বেছে নেওয়ার সুযোগ, তাঁরা যে অন্য কোনো নারীর মতো নন সেই কথা মনে করিয়ে দেওয়া, আর তাঁদের ঘরে আল্লাহর যে আয়াত ও হিকমত তিলাওয়াত হয় তা মনে রাখার নির্দেশ। তারপর কোনো ভূমিকা ছাড়াই সম্বোধন ছড়িয়ে পড়ে দুনিয়ার প্রতিটি মুমিন পুরুষ ও নারীর দিকে।"
          },
          {
            "en": "The verse that follows keeps the same breadth: 33:36 states that no believing man or woman has a choice in a matter once Allah and His Messenger have decided it. Al-Ahzab is a surah about the Battle of the Trench, about the Prophet's household, and about a community reordering its family law; in the middle of all that, the standard of worth is stated in terms that have nothing to do with rank, lineage or sex.",
            "bn": "পরের আয়াতও একই ব্যাপ্তি ধরে রাখে: 33:36 বলে, আল্লাহ ও তাঁর রাসূল কোনো বিষয়ে ফয়সালা দিয়ে দিলে সে ব্যাপারে কোনো মুমিন পুরুষ বা মুমিন নারীর নিজের পছন্দের আর সুযোগ থাকে না। আল-আহযাব সূরার বিষয় খন্দকের যুদ্ধ, নবী ﷺ-এর পরিবার, আর এমন এক সমাজ যে নিজের পারিবারিক বিধান নতুন করে সাজাচ্ছে। এত কিছুর মাঝখানে মানুষের মূল্য মাপার মানদণ্ড বলা হলো এমন ভাষায়, যার সঙ্গে পদমর্যাদা, বংশ বা নারী-পুরুষ হওয়ার কোনো সম্পর্ক নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The First Five Pairs",
          "bn": "প্রথম পাঁচ জোড়া"
        },
        "p": [
          {
            "en": "The list begins al-muslimin wal-muslimat, then al-mu'minin wal-mu'minat. The order is not arbitrary. Islam is the outward act of submission; iman is the inward assent, and the commentators consistently read the pair in that order, matching the way the two are distinguished in the well-known hadith of Jibril recorded in the two Sahihs. You enter by the door of islam; iman is what fills the house.",
            "bn": "তালিকা শুরু হয় আল-মুসলিমীন ওয়াল-মুসলিমাত দিয়ে, তারপর আল-মু’মিনীন ওয়াল-মু’মিনাত। এই ক্রম এলোমেলো নয়। ইসলাম হলো বাইরের আত্মসমর্পণ, ঈমান অন্তরের সায়। মুফাসসিরগণ বরাবর জোড়াটি এই ক্রমেই বোঝেন, ঠিক যেভাবে দুই সহীহ গ্রন্থে সংরক্ষিত জিবরীলের প্রসিদ্ধ হাদিসে দুটিকে আলাদা করা হয়েছে। ইসলামের দরজা দিয়ে ঘরে ঢোকা যায়; ঘরটা ভরে তোলে ঈমান।"
          },
          {
            "en": "Then al-qanitin, from qunut, sustained and willing obedience rather than a single act. Then as-sadiqin, the truthful — sidq covers truth in speech, in promise and in intention. Then as-sabirin, those who hold on: sabr in Arabic is restraint, staying at a post rather than merely enduring quietly. Each of the five is a practice that can be measured over time, not a status a person is born into.",
            "bn": "এরপর আল-ক্বানিতীন, শব্দটি ক্বুনূত থেকে; অর্থাৎ একবারের কোনো কাজ নয়, দীর্ঘ সময় ধরে মন থেকে মেনে চলা। এরপর আস-সাদিকীন, সত্যবাদীরা; সিদক মানে কথায়, ওয়াদায় আর নিয়তে সত্য থাকা। এরপর আস-সাবিরীন, যারা টিকে থাকে: আরবিতে সবর মানে নিজেকে সংযত রাখা, নিজের জায়গা আঁকড়ে থাকা, কেবল চুপচাপ সয়ে যাওয়া নয়। এই পাঁচটির প্রত্যেকটি এমন আমল, যা সময়ের সঙ্গে মাপা যায়; জন্মসূত্রে পাওয়া কোনো মর্যাদা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Second Five",
          "bn": "পরের পাঁচ"
        },
        "p": [
          {
            "en": "The list continues al-khashi'in, the humble — khushu' again, the lowering of the self before Allah. Then al-mutasaddiqin, those who give sadaqah, and as-sa'imin, those who fast: two practices with bodies attached, one costing money and the other appetite. Then al-hafizina furujahum, those who guard their chastity, where the masculine carries the explicit object and the feminine follows it without repetition, as Arabic allows.",
            "bn": "তালিকা এগোয় আল-খাশি‘ঈন দিয়ে, অর্থাৎ বিনয়ী মানুষেরা; আবারও সেই খুশূ‘, আল্লাহর সামনে নিজেকে নিচু করা। এরপর আল-মুতাসাদ্দিকীন, যারা সদকা দেয়, আর আস-সাইমীন, যারা রোজা রাখে। দুটি আমলই শরীরের সঙ্গে জড়িত: একটির মূল্য দিতে হয় টাকায়, অন্যটির খিদেয়। এরপর আল-হাফিযীনা ফুরূজাহুম, যারা নিজেদের সতীত্ব রক্ষা করে। এখানে কর্মপদটি স্পষ্ট বলা আছে কেবল পুংলিঙ্গ রূপের সঙ্গে; স্ত্রীলিঙ্গ রূপ তা আর না বলে পেছনে পেছনে আসে, আরবিতে যার সুযোগ আছে।"
          },
          {
            "en": "The tenth pair is the only one given a qualifier: adh-dhakirina Allaha kathiran wadh-dhakirat, those who remember Allah much, and the women who do so. Kathiran, abundantly, is attached to no other item in the list. Sahih Muslim preserves a narration in which the Prophet ﷺ says the mufarridun have gone ahead, and identifies them using this very phrase — those who remember Allah much, men and women.",
            "bn": "দশম জোড়াটিই একমাত্র, যার সঙ্গে একটি বিশেষণ জুড়ে আছে: আয্‌যাকিরীনাল্লাহা কাসীরাও ওয়ায্‌যাকিরাত, যারা আল্লাহকে বেশি বেশি স্মরণ করে, আর যে নারীরা স্মরণ করে। কাসীরান মানে প্রচুর; তালিকার আর কোনো গুণের সঙ্গে এ শব্দ নেই। সহীহ মুসলিমের এক বর্ণনায় নবী ﷺ বলেন, মুফাররিদূন এগিয়ে গেছে। তারপর তাদের পরিচয় দেন ঠিক এই কথাতেই: আল্লাহকে বেশি বেশি স্মরণকারী পুরুষ ও নারী।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Draw",
          "bn": "মুফাসসিরগণ যা বের করেন"
        },
        "p": [
          {
            "en": "The commentators note that every item on the list is an action or a settled disposition, and that not one of them depends on wealth, health, freedom, learning or public role. That is the point about equality the verse actually makes: not that men and women have identical duties in law, but that the road to forgiveness and reward is open on identical terms, and that terms are set by what a person does.",
            "bn": "মুফাসসিরগণ লক্ষ করেন, তালিকার প্রতিটি গুণই হয় কোনো আমল, নয়তো মনের স্থায়ী অভ্যাস। এর একটিও সম্পদ, স্বাস্থ্য, স্বাধীনতা, পড়াশোনা বা সমাজে কোনো পদের ওপর নির্ভর করে না। সমতা নিয়ে আয়াতটি আসলে এই কথাই বলে। শরীয়তে নারী ও পুরুষের দায়িত্ব হুবহু এক, এমন নয়। বরং মাগফিরাত আর প্রতিদানের পথ দুজনের জন্য একই শর্তে খোলা, আর সেই শর্ত ঠিক হয় মানুষ কী আমল করে তা দিয়ে।"
          },
          {
            "en": "The same principle is stated across the Quran in other words. 3:195 declares that Allah does not let the work of any worker among you be lost, male or female. 16:97 promises a good life and a better reward to whoever does righteousness, male or female, while a believer. And 4:124 says the same again. The commentators treat 33:35 as the fullest of these statements because it does not summarise; it enumerates.",
            "bn": "কুরআনের নানা জায়গায় একই নীতি ভিন্ন ভাষায় এসেছে। 3:195 ঘোষণা করে, তোমাদের কোনো আমলকারীর আমল আল্লাহ নষ্ট করেন না, পুরুষ হোক বা নারী। 16:97 উত্তম জীবন আর আরও ভালো প্রতিদানের ওয়াদা দেয় তাকে, যে মুমিন অবস্থায় নেক আমল করে, পুরুষ হোক বা নারী। আর 4:124 আবার সেই একই কথা বলে। মুফাসসিরগণ এসবের মধ্যে 33:35 আয়াতকে সবচেয়ে পূর্ণাঙ্গ মনে করেন, কারণ এ আয়াত সংক্ষেপে সারে না; গুনে গুনে প্রতিটি গুণ বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "জীবনে কীভাবে মানা যায়"
        },
        "p": [
          {
            "en": "Read as a checklist, the verse is unusually usable. Nine of the ten can be attempted this week by almost anyone: submitting in something you have been resisting, obeying in one specific matter, telling an inconvenient truth, holding your position under provocation, praying one prayer with attention, giving a small amount that you will notice, fasting one day, guarding the eyes as well as the body, and remembering Allah while doing something else entirely.",
            "bn": "করণীয়ের তালিকা হিসেবে পড়লে আয়াতটি আশ্চর্য রকম কাজের। দশটির নয়টিই প্রায় যে কেউ এই সপ্তাহেই চেষ্টা করে দেখতে পারেন: যে ব্যাপারে এতদিন মন সায় দেয়নি সেখানে মাথা নোয়ানো, নির্দিষ্ট একটি বিষয়ে আনুগত্য, অস্বস্তিকর একটা সত্য কথা বলা, কেউ উসকানি দিলেও নিজের জায়গায় অটল থাকা, এক ওয়াক্ত নামাজ মন দিয়ে পড়া, এমন পরিমাণ দান করা যা গায়ে লাগে, একদিন রোজা রাখা, শরীরের সঙ্গে চোখেরও হেফাজত করা, আর সম্পূর্ণ অন্য কাজে ব্যস্ত থাকতে থাকতেও আল্লাহকে স্মরণ করা।"
          },
          {
            "en": "The last of these is the one most available to people whose lives leave little room. Dhikr requires no schedule, no clothing, no company and no quiet room. That is worth saying in a verse revealed because a woman noticed she was not being named, since much of the work that fills a life — a household, care of the sick, a long shift — has no witnesses. The verse names both the worker and the wage.",
            "bn": "শেষটিই তাদের জন্য সবচেয়ে সহজ, যাদের জীবনে অবসর খুব কম। জিকিরের জন্য সময়সূচি লাগে না, বিশেষ পোশাক লাগে না, সঙ্গী লাগে না, নিরিবিলি ঘরও লাগে না। কথাটা বিশেষ করে বলার মতো, কারণ এ আয়াত নাজিল হয়েছিল এক নারী লক্ষ করেছিলেন বলে যে তাঁর নাম আসছে না। জীবনের অনেক কাজই তো এমন, যার কোনো সাক্ষী থাকে না: সংসার সামলানো, অসুস্থের সেবা, দীর্ঘ শিফটের চাকরি। আয়াতটি কর্মীর নামও বলে, তার মজুরির কথাও বলে।"
          }
        ]
      }
    ]
  },
  "33:41-42": {
    "sections": [
      {
        "h": {
          "en": "Two Commands to the Believers",
          "bn": "মুমিনদের প্রতি দুটি নির্দেশ"
        },
        "p": [
          {
            "en": "These two verses carry two commands. O you who believe, remember Allah with much remembrance, and glorify Him morning and evening. They arrive in Surah al-Ahzab, a surah of siege, treaties and household legislation — the most crowded of circumstances — a few verses after 33:35, whose list of praiseworthy qualities in men and women ends with the men who remember Allah much and the women who remember, for whom forgiveness and an immense reward are prepared.",
            "bn": "এই দুই আয়াতে দুটি নির্দেশ: হে মুমিনগণ, তোমরা আল্লাহকে বেশি বেশি স্মরণ করো, আর সকাল-সন্ধ্যা তাঁর পবিত্রতা ঘোষণা করো। আয়াত দুটি এসেছে সূরা আল-আহযাবে, যে সূরায় অবরোধ, চুক্তি আর পারিবারিক বিধানের কথা; অর্থাৎ জীবনের সবচেয়ে ব্যস্ত পরিস্থিতির মাঝখানে। এর কয়েক আয়াত আগে 33:35, যেখানে নারী-পুরুষের প্রশংসনীয় গুণের তালিকা শেষ হয়েছে আল্লাহকে বেশি বেশি স্মরণকারী পুরুষ ও স্মরণকারী নারীদের দিয়ে, যাদের জন্য তৈরি রাখা হয়েছে মাগফিরাত আর মহা প্রতিদান।"
          },
          {
            "en": "The placement teaches before the words do. Remembrance is not commanded from a hermitage; it is commanded to people mid-battle and mid-marriage, in the same breath as laws about debts of loyalty and family life. The Quran evidently does not consider a crowded life an excuse for a silent heart. It considers a crowded life the exact place where remembrance earns its adjective: much.",
            "bn": "শব্দ কিছু বলার আগেই আয়াতের অবস্থান শিক্ষা দেয়। জিকিরের আদেশ কোনো নির্জন আস্তানার মানুষকে দেওয়া হয়নি। দেওয়া হয়েছে যুদ্ধের মাঝখানে আর সংসারের মাঝখানে থাকা মানুষদের, আনুগত্যের দায় আর পারিবারিক জীবনের বিধানের সঙ্গে একই নিঃশ্বাসে। বোঝাই যায়, কুরআন ব্যস্ত জীবনকে নীরব অন্তরের অজুহাত মনে করে না। বরং ব্যস্ত জীবনই সেই জায়গা, যেখানে জিকির তার বিশেষণটি অর্জন করে: অধিক।"
          }
        ]
      },
      {
        "h": {
          "en": "Much, With No Ceiling",
          "bn": "অধিক, যার কোনো সীমা নেই"
        },
        "p": [
          {
            "en": "The grammar of the first command doubles its own emphasis. Udhkuru is an imperative verb; dhikran kathiran adds the cognate noun with an adjective — remember with much remembering. Arabic uses this construction to intensify, and the Quran here attaches the intensity to quantity: the target is abundance itself. No number is given, no threshold after which a believer has remembered enough. The command is open-ended by design, and the design is the point.",
            "bn": "প্রথম নির্দেশের ব্যাকরণেই জোর দ্বিগুণ। উযকুরূ আদেশসূচক ক্রিয়া; তার সঙ্গে যিকরান কাসীরান যোগ করে একই ধাতুর বিশেষ্য আর একটি বিশেষণ: স্মরণ করো, বেশি বেশি স্মরণ। আরবিতে জোর বাড়াতে এই গঠন ব্যবহার হয়, আর কুরআন এখানে সেই জোর বেঁধে দিয়েছে পরিমাণের সঙ্গে: লক্ষ্যই হলো প্রাচুর্য। কোনো সংখ্যা বলা হয়নি, এমন কোনো সীমা নেই যা পেরোলে বলা যাবে মুমিনের স্মরণ যথেষ্ট হয়েছে। নির্দেশটা ইচ্ছা করেই খোলা রাখা হয়েছে, আর এই খোলা রাখাটাই আসল কথা।"
          },
          {
            "en": "A remark related from Ibn Abbas (RA), which Ibn Kathir quotes under this verse, states the uniqueness plainly: every duty Allah imposed has a known limit, and its people are excused in valid circumstances — except remembrance, for which He set no limit, and no one has an excuse for abandoning it short of losing his mind. The traveller shortens prayer and the sick pray sitting, but no situation exists in which dhikr becomes impossible, because a heart travels light.",
            "bn": "ইবনে আব্বাস (রাঃ) থেকে বর্ণিত একটি উক্তি, যা ইবনে কাসীর এই আয়াতের আলোচনায় এনেছেন, এই বিশেষত্ব সোজাসুজি বলে দেয়: আল্লাহ যত ফরজ দিয়েছেন, প্রত্যেকটির একটা নির্দিষ্ট সীমা আছে, আর সংগত ওজর থাকলে মানুষ তা থেকে ছাড় পায়। ব্যতিক্রম কেবল জিকির। এর কোনো সীমা তিনি বেঁধে দেননি, আর পাগল হয়ে যাওয়া ছাড়া এটা ছেড়ে দেওয়ার কোনো ওজর কারও নেই। মুসাফির নামাজ কসর করে, অসুস্থ মানুষ বসে নামাজ পড়ে; কিন্তু এমন কোনো অবস্থা নেই যখন জিকির অসম্ভব, কারণ অন্তরের সফরে কোনো বোঝা লাগে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Morning and Evening",
          "bn": "সকাল ও সন্ধ্যা"
        },
        "p": [
          {
            "en": "The second command narrows from quantity to schedule: sabbihu, glorify Him, bukratan wa asilan — in the early morning and as the day declines. Tasbih is the specific remembrance that declares Allah free of every imperfection, and the two times named are the day's hinges, when night turns into day and day leans back towards night. The same frame appears in 20:130, where glorification before the rising of the sun and before its setting is commanded to the Prophet ﷺ.",
            "bn": "দ্বিতীয় নির্দেশ পরিমাণ থেকে সময়ের দিকে আসে: সাব্বিহূ, তাঁর পবিত্রতা ঘোষণা করো, বুকরাতান ওয়া আসীলা, ভোরে আর দিন যখন ঢলে পড়ে। তাসবীহ হলো সেই বিশেষ জিকির, যা ঘোষণা করে আল্লাহ সব ত্রুটি থেকে পবিত্র। আর যে দুটি সময়ের নাম এসেছে, সেগুলো দিনের দুই কবজা: যখন রাত দিনে গড়ায়, আর দিন আবার রাতের দিকে হেলে পড়ে। একই কাঠামো আছে 20:130 আয়াতে, যেখানে নবী ﷺ-কে সূর্য ওঠার আগে আর ডোবার আগে তাসবীহ পড়ার আদেশ দেওয়া হয়েছে।"
          },
          {
            "en": "The pairing of the two commands is practical wisdom. An open-ended obligation with no anchor tends to evaporate; an anchored routine with no aspiration tends to shrink. So the verses give both: remember much, without ceiling, and glorify at these two fixed posts, without fail. The morning and evening remembrances fence the day at both ends, and whatever falls between them has been claimed in advance for Allah.",
            "bn": "দুটি নির্দেশ একসঙ্গে দেওয়ার মধ্যে আছে বাস্তব প্রজ্ঞা। যে খোলা দায়িত্বের কোনো নোঙর নেই, তা সাধারণত হারিয়ে যায়; আর যে বাঁধা রুটিনের পেছনে বড় কোনো আকাঙ্ক্ষা নেই, তা ধীরে ধীরে ছোট হয়ে আসে। তাই আয়াত দুটি দুটোই দেয়: বেশি বেশি স্মরণ করো, কোনো সীমা ছাড়া; আর এই দুই নির্দিষ্ট সময়ে তাসবীহ পড়ো, কোনো দিন বাদ না দিয়ে। সকাল-সন্ধ্যার জিকির দিনটাকে দুই মাথা থেকে ঘিরে রাখে, আর মাঝখানে যা কিছু আসে, তা আগেভাগেই আল্লাহর নামে লেখা হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Counts as Remembrance",
          "bn": "কোনটা স্মরণ বলে গণ্য"
        },
        "p": [
          {
            "en": "The commentators keep the definition of dhikr wide. It includes the tongue's formulas — tasbih, tahmid, takbir, tahlil, recitation of the Quran and du'a — but also the heart's silent awareness of Allah while the hands work, and the deliberate remembering of His commands at the moment of temptation. A trader who recalls Allah at the instant an easy deception offers itself is performing remembrance of a high order, which is why 62:10 commands those dispersing for trade to seek Allah's bounty and remember Him much.",
            "bn": "মুফাসসিরগণ জিকিরের সংজ্ঞা প্রশস্ত রাখেন। এর মধ্যে আছে মুখের নির্দিষ্ট বাক্যগুলো: তাসবীহ, তাহমীদ, তাকবীর, তাহলীল, কুরআন তিলাওয়াত আর দুআ। আবার হাত যখন কাজে ব্যস্ত, তখন অন্তরে নীরবে আল্লাহকে মনে রাখাও জিকির। প্রলোভনের মুহূর্তে জেনেবুঝে তাঁর হুকুম মনে করাও জিকির। সহজে ঠকানোর সুযোগ সামনে আসামাত্র যে ব্যবসায়ী আল্লাহকে মনে করে, সে উঁচু স্তরের জিকির করছে। এজন্যই 62:10 আয়াতে ব্যবসার জন্য ছড়িয়ে পড়া মানুষদের আদেশ দেওয়া হয়েছে আল্লাহর অনুগ্রহ তালাশ করতে আর তাঁকে বেশি বেশি স্মরণ করতে।"
          },
          {
            "en": "The Quran also names the postures: in 3:191 the people of understanding remember Allah standing, sitting and lying on their sides. Those three positions cover essentially every state a body passes through in a day. The command to remember much is therefore not a demand for more free time; it is a demand that the time already passing — commuting, cooking, waiting, resting — be threaded with remembrance instead of running empty.",
            "bn": "কুরআন দেহের অবস্থাগুলোরও নাম বলে: 3:191 আয়াতে বোধসম্পন্ন মানুষেরা আল্লাহকে স্মরণ করে দাঁড়িয়ে, বসে আর কাত হয়ে শুয়ে। দিনে শরীর যত অবস্থায় থাকে, মোটামুটি সবই এই তিনটির মধ্যে পড়ে। তাই বেশি বেশি স্মরণের আদেশ বাড়তি অবসরের দাবি নয়। দাবিটা হলো, যে সময় এমনিতেই কেটে যাচ্ছে, যাতায়াতে, রান্নায়, অপেক্ষায়, বিশ্রামে, তা যেন খালি না কেটে জিকিরে গাঁথা থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ones Who Pulled Ahead",
          "bn": "যারা এগিয়ে গেছে"
        },
        "p": [
          {
            "en": "Muslim narrates from Abu Hurayrah (RA) that the Prophet ﷺ said: the mufarridun have gone ahead. When asked who they were, he answered: the men who remember Allah much and the women who remember. The image is of a race in which a quiet category of people has already pulled clear of the field — not by extra wealth or extraordinary deeds, but by keeping their hearts and tongues occupied while everyone else's ran idle.",
            "bn": "মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: মুফাররিদূন এগিয়ে গেছে। জিজ্ঞেস করা হলো, তারা কারা? তিনি বললেন: আল্লাহকে বেশি বেশি স্মরণকারী পুরুষ আর স্মরণকারী নারীরা। ছবিটা একটা দৌড়ের, যেখানে চুপচাপ একদল মানুষ এরই মধ্যে বাকি সবাইকে অনেক পেছনে ফেলে দিয়েছে। বাড়তি সম্পদ বা অসাধারণ কোনো কীর্তি দিয়ে নয়; অন্যদের অন্তর আর জিহ্বা যখন অলস পড়ে ছিল, তখনো তারা নিজেদের অন্তর আর জিহ্বা ব্যস্ত রেখেছিল বলে।"
          },
          {
            "en": "Al-Bukhari narrates from Abu Musa al-Ash'ari (RA) that the Prophet ﷺ said: the likeness of the one who remembers his Lord and the one who does not remember his Lord is the likeness of the living and the dead. The comparison is physiological, not poetic decoration. A heart cut off from remembrance still beats, but the verse's own audience knew the difference between a body that breathes and a person who is alive to the One who made them.",
            "bn": "বুখারী আবু মূসা আল-আশআরী (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: যে তার রবকে স্মরণ করে আর যে তার রবকে স্মরণ করে না, তাদের উপমা জীবিত আর মৃতের মতো। তুলনাটা জীবন-মৃত্যুর বাস্তব তুলনা, কবিতার সাজ নয়। জিকির থেকে বিচ্ছিন্ন হৃদয়ও ধুকধুক করে চলে; কিন্তু যারা প্রথম এ কথা শুনেছিলেন, তাঁরা জানতেন নিঃশ্বাস নেওয়া একটা শরীর আর যিনি তাকে সৃষ্টি করেছেন তাঁর প্রতি জেগে থাকা একজন মানুষের মধ্যে তফাত কোথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Anchoring the Day",
          "bn": "দিনটাকে নোঙর করা"
        },
        "p": [
          {
            "en": "Practice begins where the verses point: fix the two posts first. The morning remembrances after Fajr and the evening ones as the day declines take minutes, and their regularity matters more than their length. Then let dhikr colonise the day's dead time — the phrases of tasbih need no ablution, no direction, no mat. What the verses forbid, in effect, is the assumption that remembrance must wait for the right setting. It was commanded to people under siege.",
            "bn": "আমল শুরু হয় সেখান থেকে, যেদিকে আয়াত দুটি ইশারা করে: আগে দুটি খুঁটি পাকা করুন। ফজরের পর সকালের জিকির আর দিন ঢলে পড়লে সন্ধ্যার জিকির, দুটো মিলিয়ে কয়েক মিনিটের ব্যাপার; কত লম্বা তার চেয়ে বড় কথা, নিয়মিত হচ্ছে কি না। তারপর দিনের ফাঁকা সময়গুলো জিকির দখল করে নিক। তাসবীহর বাক্যের জন্য অজু লাগে না, কিবলা লাগে না, জায়নামাজও লাগে না। আয়াত দুটি আসলে যে ধারণাটা নাকচ করে দেয় তা হলো, জিকিরের জন্য উপযুক্ত পরিবেশের অপেক্ষা করতে হবে। এই আদেশ তো দেওয়া হয়েছিল অবরোধে ঘেরা মানুষদের।"
          },
          {
            "en": "The return on this practice is stated in 13:28 — those who believe and whose hearts find rest in the remembrance of Allah — unquestionably, in the remembrance of Allah do hearts find rest. A heart that remembers Allah often stays anchored no matter what the day brings, because its point of reference sits outside the day's weather. The news changes, the diagnosis arrives, the market falls; the One being remembered morning and evening does not.",
            "bn": "এই আমলের ফল বলা আছে 13:28 আয়াতে: যারা ঈমান আনে আর আল্লাহর স্মরণে যাদের অন্তর প্রশান্ত হয়; জেনে রাখো, আল্লাহর স্মরণেই অন্তর প্রশান্তি পায়। যে অন্তর প্রায়ই আল্লাহকে স্মরণ করে, দিন যা-ই নিয়ে আসুক, সে নোঙর ফেলে স্থির থাকে, কারণ তার ভরসার জায়গা দিনের আবহাওয়ার বাইরে। খবর বদলায়, রোগ ধরা পড়ার খবর আসে, বাজার পড়ে যায়; কিন্তু সকাল-সন্ধ্যা যাঁকে স্মরণ করা হয়, তিনি বদলান না।"
          }
        ]
      }
    ]
  },
  "33:45": {
    "sections": [
      {
        "h": {
          "en": "A Verse of Honour Amid Trial",
          "bn": "সংকটের ভেতরে এক সম্মানের আয়াত"
        },
        "p": [
          {
            "en": "Sūrat al-Aḥzāb takes its name from the Confederates who besieged Madīnah, and much of it moves through trial — the siege, the slander against the household, the testing of the believers. In the middle of that pressure the address suddenly lifts: Yā ayyuhā an-Nabī, O Prophet. As-Saʿdi notes that what follows is no incidental praise but the very heart of the Messenger's ﷺ mission, its essence and its foundations. When a community is shaken, Allah steadies it by reminding it who stands at its head and what he was sent to be.",
            "bn": "সূরা আল-আহযাব নাম পেয়েছে সেই জোটবদ্ধ শত্রুদের থেকে যারা মদীনা ঘেরাও করেছিল, আর সূরার অনেকটাই চলে পরীক্ষার ভেতর দিয়ে—ঘেরাও, নবীপরিবারের বিরুদ্ধে অপবাদ, ঈমানদারদের কঠিন পরীক্ষা। সেই চাপের মাঝখানেই সম্বোধনটা হঠাৎ উঁচু হয়ে ওঠে: ইয়া আইয়ুহান নাবী, হে নবী। সাদী বলেন, এরপর যা আসে তা নিছক প্রশংসা নয়, বরং রাসূল ﷺ-এর দায়িত্বের একেবারে কেন্দ্র, তার সারমর্ম আর ভিত্তি। কোনো সমাজ যখন কেঁপে ওঠে, আল্লাহ তাকে স্থির করেন এই মনে করিয়ে দিয়ে যে তার শীর্ষে কে দাঁড়িয়ে আছেন আর তাঁকে কী হওয়ার জন্য পাঠানো হয়েছে।"
          },
          {
            "en": "Two verses earlier Allah had said He brings the believers out of darkness into light (33:43); two verses on, He tells the Prophet ﷺ to give the believers glad tidings of great bounty (33:47). Between them sits this naming. At-Tabari reads the whole as Allah speaking directly to Muḥammad ﷺ: We have sent you as a witness, a bearer of good news, a warner. The roles are not titles of rank but a description of work — what this man is in the world.",
            "bn": "দুই আয়াত আগে আল্লাহ বলেছেন, তিনি ঈমানদারদের অন্ধকার থেকে বের করে আলোতে আনেন (৩৩:৪৩); দুই আয়াত পরে তিনি নবী ﷺ-কে বলেন ঈমানদারদের বড় অনুগ্রহের সুসংবাদ দিতে (৩৩:৪৭)। এই দুইয়ের মাঝখানে বসে আছে এই নামকরণ। তাবারী গোটা কথাটিকে পড়েন আল্লাহ সরাসরি মুহাম্মাদ ﷺ-কে বলছেন বলে: আমি তোমাকে পাঠিয়েছি সাক্ষীরূপে, সুসংবাদদাতা আর সতর্ককারীরূপে। এগুলো পদমর্যাদার উপাধি নয়, বরং কাজের বর্ণনা। এই মানুষটি দুনিয়ায় আসলে কী, তারই পরিচয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Offices in One Breath",
          "bn": "এক নিঃশ্বাসে তিন দায়িত্ব"
        },
        "p": [
          {
            "en": "Three words carry three offices: shāhid, a witness; mubashshir, a bringer of glad tidings; nadhīr, a warner. Each is an active participle, naming not a single act but a standing role. The Muyassar links them to what follows in 33:46 — dāʿī ilā Allāh, a caller to Allah by His leave, and sirāj munīr, an illuminating lamp — so the fuller portrait holds five attributes in all. Yet the weight of this verse rests on the first three, which gather the Messenger's ﷺ work toward his people into a single line.",
            "bn": "তিনটি শব্দ বহন করছে তিনটি দায়িত্ব: শাহিদ, একজন সাক্ষী; মুবাশশির, সুসংবাদদাতা; নাযীর, সতর্ককারী। প্রতিটি কর্তৃবাচক বিশেষণ, যা কোনো একটা কাজ নয়, বরং একটা স্থায়ী ভূমিকার নাম দেয়। মুয়াসসার এগুলোকে জুড়ে দেয় ৩৩:৪৬-এ যা আসে তার সঙ্গে: দাঈ ইলাল্লাহ, আল্লাহর অনুমতিক্রমে তাঁর পথে আহবানকারী, আর সিরাজ মুনীর, আলোকপ্রদ প্রদীপ। তাই পূর্ণ ছবিতে মোট পাঁচটি গুণ ধরা পড়ে। তবু এই আয়াতের ভার থাকে প্রথম তিনটিতে, যা রাসূল ﷺ-এর উম্মতমুখী কাজকে এক লাইনে জড়ো করে দেয়।"
          },
          {
            "en": "The order itself teaches. He is first a witness, one who sees and will testify; then a bearer of good news, before he is a warner. As-Saʿdi observes that naming the glad tidings and the warning entails naming who receives each, what they are promised or warned of, and the deeds that earn either. The one verse opens onto the whole of the revealed law, since the detail of its promise and its caution is what the Book and the Sunnah spell out.",
            "bn": "ক্রমটাই শেখায়। তিনি প্রথমে সাক্ষী, যিনি দেখেন আর সাক্ষ্য দেবেন; এরপর সুসংবাদদাতা, তারপর সতর্ককারী। সাদী লক্ষ করেন, সুসংবাদ আর সতর্কবাণীর নাম নিলে আপনাআপনি এসে পড়ে কারা তা পায়, কী নিয়ে তাদের সুসংবাদ বা সতর্ক করা হয়, আর কোন আমল তা অর্জন করায়। এই একটি আয়াত খুলে দেয় গোটা শরীয়তের দিকে, কারণ এর প্রতিশ্রুতি আর সতর্কতার খুঁটিনাটিই কুরআন ও সুন্নাহ বিস্তারিত বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Witness For and Witness Over",
          "bn": "পক্ষেও সাক্ষী, উপরেও সাক্ষী"
        },
        "p": [
          {
            "en": "The first office, shāhid, carries a double sense the commentators draw out. At-Tabari explains it as a witness over the Prophet's ﷺ community by having delivered to them the message he was sent with. As-Saʿdi widens it: a witness over his ummah for what they did, of good and evil alike, and he calls the Messenger ﷺ a just and accepted witness. The believer is therefore both represented and observed — the one who conveyed the truth will also speak to how it was received.",
            "bn": "প্রথম দায়িত্ব শাহিদ বহন করে এক দ্বৈত অর্থ, যা তাফসীরকারেরা খুলে বলেন। তাবারী একে বোঝান এভাবে: তিনি তাঁর উম্মতের উপর সাক্ষী, কারণ যে বার্তা নিয়ে তাঁকে পাঠানো হয়েছিল তা তিনি তাদের কাছে পৌঁছে দিয়েছেন। সাদী একে আরও প্রশস্ত করেন: তিনি তাঁর উম্মতের আমলের উপর সাক্ষী, ভালো-মন্দ সবকিছুর, আর রাসূল ﷺ-কে তিনি বলেন একজন ন্যায়পরায়ণ, গ্রহণযোগ্য সাক্ষী। তাই ঈমানদারের পক্ষেও বলা হয়, আবার তার দিকে চোখও থাকে। যিনি সত্য পৌঁছে দিয়েছেন, তিনিই বলবেন তা কীভাবে গ্রহণ করা হলো।"
          },
          {
            "en": "Ibn Kathir joins a third strand: shāhid means a witness to Allah's Oneness, that there is no god but He, and a witness against mankind for their deeds on the Day of Resurrection. He anchors this in two verses. One has Allah say, And We bring you as a witness against these (4:41). The other makes the pattern mutual: that you be witnesses over mankind and the Messenger be a witness over you (2:143). The witnessing runs in both directions.",
            "bn": "ইবন কাসীর এর সঙ্গে তৃতীয় একটি সুর যোগ করেন: শাহিদ মানে আল্লাহর একত্বের সাক্ষী, যে তিনি ছাড়া কোনো ইলাহ নেই, আর কিয়ামতের দিন মানুষের আমলের ব্যাপারে তাদের বিরুদ্ধে সাক্ষী। তিনি একে দুটি আয়াতের উপর দাঁড় করান। একটিতে আল্লাহ বলেন, আর আমি তোমাকে এদের উপর সাক্ষীরূপে আনব (৪:৪১)। অন্যটি সম্পর্কটাকে পারস্পরিক করে দেয়: যাতে তোমরা মানুষের উপর সাক্ষী হও আর রাসূল তোমাদের উপর সাক্ষী হন (২:১৪৩)। সাক্ষ্য তাই দুই দিকেই বয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Witness Is He?",
          "bn": "তিনি কার সাক্ষী?"
        },
        "p": [
          {
            "en": "Here the mufassirūn differ, and the difference is worth keeping. Qatāda, reported by both at-Tabari and al-Qurtubi, gives two objects for the witnessing: the Prophet ﷺ is a witness over his own community by his conveyance to them, and a witness over all the earlier nations by the conveyance their prophets made to them. On this reading he testifies that every messenger before him discharged the trust. The witness of the last prophet reaches back across every prophet who came before.",
            "bn": "এখানে তাফসীরকারেরা মতভেদ করেন, আর এই মতভেদটা রেখে দেওয়ার মতো। কাতাদা, যাঁর কথা তাবারী আর কুরতুবী দুজনেই আনেন, সাক্ষ্যের দুটি বিষয় দেন: নবী ﷺ তাঁর নিজের উম্মতের উপর সাক্ষী, কারণ তিনি তাদের কাছে পৌঁছে দিয়েছেন; আবার আগের সব জাতির উপরও সাক্ষী, কারণ তাদের নবীরা তাদের কাছে পৌঁছে দিয়েছিলেন। এই পাঠে তিনি সাক্ষ্য দেন যে তাঁর আগের প্রত্যেক রাসূল আমানত আদায় করেছেন। শেষ নবীর সাক্ষ্য তাই পেছনে ফিরে ছুঁয়ে যায় আগের প্রতিটি নবীকে।"
          },
          {
            "en": "Al-Baghawi leans to that second sense plainly, glossing shāhid as a witness for the messengers that they delivered their message. Others, as we have seen, keep the eye on his own ummah and its deeds. The verse does not force a choice, and the commentators do not resolve it into one; both readings stand on the single word. What is common to them is that his seeing is never idle — it is testimony that will one day be spoken.",
            "bn": "বাগাভী স্পষ্টভাবে এই দ্বিতীয় অর্থের দিকেই ঝোঁকেন, শাহিদের ব্যাখ্যা দেন রাসূলদের পক্ষে সাক্ষী হিসেবে যে তাঁরা নিজ নিজ বার্তা পৌঁছে দিয়েছেন। অন্যরা, যেমন আমরা দেখেছি, চোখ রাখেন তাঁর নিজের উম্মত আর তার আমলের উপর। আয়াতটি কোনো একটা বেছে নিতে বাধ্য করে না, আর তাফসীরকারেরাও একে এক পাঠে মিলিয়ে ফেলেন না; দুটি পাঠই দাঁড়িয়ে থাকে এই একটি শব্দের উপর। দুয়ের মধ্যে মিল এটুকু যে তাঁর দেখা কখনো অকেজো নয়। একদিন তা সাক্ষ্য হয়ে উচ্চারিত হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Promise and the Caution",
          "bn": "প্রতিশ্রুতি আর সতর্কতা"
        },
        "p": [
          {
            "en": "The second and third offices move together: mubashshir and nadhīr, glad tidings and warning. At-Tabari pairs them with their audiences — good news of Paradise for those who believe the Messenger ﷺ and act on what he brought from their Lord, and warning of the Fire for those who deny him and oppose it. Al-Qurtubi frames the glad tidings as mercy and Paradise for the believers, and the warning as the Fire and lasting punishment for the defiant and the deniers.",
            "bn": "দ্বিতীয় আর তৃতীয় দায়িত্ব চলে একসঙ্গে: মুবাশশির আর নাযীর, সুসংবাদ আর সতর্কবাণী। তাবারী এ দুটিকে তাদের শ্রোতাদের সঙ্গে জুড়ে দেন—যারা রাসূল ﷺ-কে বিশ্বাস করে আর রবের কাছ থেকে তিনি যা এনেছেন তার উপর আমল করে, তাদের জন্য জান্নাতের সুসংবাদ; আর যারা তাঁকে অস্বীকার করে ও বিরোধিতা করে, তাদের জন্য জাহান্নামের সতর্কবাণী। কুরতুবী সুসংবাদকে বোঝান ঈমানদারদের জন্য আল্লাহর রহমত ও জান্নাত হিসেবে, আর সতর্কবাণীকে অবাধ্য ও অস্বীকারকারীদের জন্য আগুন ও চিরস্থায়ী শাস্তি হিসেবে।"
          },
          {
            "en": "As-Saʿdi draws the two portraits fully. Those who receive the good news are the believers who fear Allah, joining faith to righteous deeds and the leaving of sins; theirs is glad tidings in this life and lasting bliss in the next. Those who are warned are the wrongdoers given to injustice and ignorance; theirs is caution against punishment here and a long, severe punishment hereafter. The one Messenger ﷺ holds out both at once, and the balance is deliberate.",
            "bn": "সাদী দুটি ছবিই পুরোপুরি এঁকে দেন। যারা সুসংবাদ পায় তারা সেই মুত্তাকী ঈমানদার, যারা ঈমানের সঙ্গে নেক আমল আর গুনাহ ছেড়ে দেওয়াকে মিলিয়ে নিয়েছে; তাদের জন্য সুসংবাদ এই জীবনে, আর পরকালে চিরস্থায়ী নিয়ামত। আর যাদের সতর্ক করা হয় তারা সেই যালিম, যারা জুলুম আর অজ্ঞতায় ডুবে আছে; তাদের জন্য সতর্কতা এখানে শাস্তির, আর আখিরাতে দীর্ঘ কঠিন আযাবের। একই রাসূল ﷺ দুটিকেই একসঙ্গে বাড়িয়ে ধরেন, আর এই ভারসাম্য উদ্দেশ্যমূলক।"
          },
          {
            "en": "Neither office cancels the other. Hope without warning turns careless; warning without hope turns to despair. The believer is meant to live between them — carried forward by the promise, kept honest by the caution. That the glad tidings is named first, here and in the Torah description, tilts the balance gently toward mercy, without letting go of the warning that makes the mercy worth seeking.",
            "bn": "কোনো দায়িত্ব অন্যটিকে বাতিল করে না। সতর্কতা ছাড়া আশা মানুষকে বেপরোয়া করে; আশা ছাড়া সতর্কতা নিয়ে যায় নিরাশার দিকে। ঈমানদারের থাকার কথা এ দুইয়ের মাঝখানে। প্রতিশ্রুতি তাকে সামনে টানে, আর সতর্কতা তাকে সৎ রাখে। এখানে আর তাওরাতের বর্ণনাতেও সুসংবাদের কথা আগে এসেছে। এতে পাল্লা আলতো করে রহমতের দিকে ঝোঁকে, তবু সেই সতর্কতা ছেড়ে দেওয়া হয় না, যার কারণেই রহমত খোঁজার মতো জিনিস হয়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Caller and the Lamp",
          "bn": "আহবানকারী ও প্রদীপ"
        },
        "p": [
          {
            "en": "The next verse completes the picture, and it helps to read it alongside: wa dāʿiyan ilā Allāh bi-idhnihi wa sirājan munīran — a caller to Allah by His leave and an illuminating lamp (33:46). Ibn Kathir explains the calling: you summon mankind to worship their Lord because He has commanded you to do so. The Muyassar adds that the call is to Allah's Oneness and to worshipping Him alone, carried out by His command — the mission is His, entrusted to the Messenger ﷺ.",
            "bn": "পরের আয়াত ছবিটা পূর্ণ করে, আর একে পাশাপাশি পড়লে সুবিধা হয়: ওয়া দাঈয়ান ইলাল্লাহি বিইযনিহি ওয়া সিরাজান মুনীরা, আল্লাহর অনুমতিক্রমে তাঁর পথে আহবানকারী আর আলোকপ্রদ প্রদীপ (৩৩:৪৬)। ইবন কাসীর এই আহবানের ব্যাখ্যা দেন: তুমি মানুষকে তাদের রবের ইবাদতের দিকে ডাকো, কারণ তিনি তোমাকে সে আদেশ দিয়েছেন। মুয়াসসার যোগ করে, এই ডাক আল্লাহর একত্বের দিকে আর কেবল তাঁরই ইবাদতের দিকে, আর তা হয় তাঁরই আদেশে। দায়িত্বটা তাঁর, রাসূল ﷺ-এর হাতে সঁপে দেওয়া।"
          },
          {
            "en": "The last image is light. Ibn Kathir reads sirāj munīr to mean that the message the Prophet ﷺ brings is as clear as the sun in its brightness, and none denies it but the stubborn. The Muyassar speaks of a lamp for whoever seeks light by him. It answers the earlier verse: He who brings the believers from darkness into light (33:43) sends among them a lamp. The guidance has a source they can see by.",
            "bn": "শেষ ছবিটা আলোর। ইবন কাসীর সিরাজ মুনীর পড়েন এই অর্থে যে নবী ﷺ যে বার্তা আনেন তা সূর্যের উজ্জ্বলতার মতোই স্পষ্ট, একগুঁয়ে ছাড়া কেউ তা অস্বীকার করে না। মুয়াসসার বলে, যে তাঁর আলোয় আলোকিত হতে চায় তার জন্য এক প্রদীপ। এ যেন আগের আয়াতেরই জবাব: যিনি ঈমানদারদের অন্ধকার থেকে আলোতে আনেন (৩৩:৪৩), তিনিই তাদের মাঝে পাঠান এক প্রদীপ। হেদায়েতের এমন এক উৎস আছে যার আলোয় তারা দেখতে পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Foretold in the Torah",
          "bn": "তাওরাতে আগাম বর্ণনা"
        },
        "p": [
          {
            "en": "A sound report ties the verse to a striking fact. Al-Bukhārī records, on the authority of ʿAbdullāh ibn ʿAmr ibn al-ʿĀṣ, that ʿAṭāʾ ibn Yasār asked him about the description of the Messenger ﷺ in the Torah. He answered, By Allah, he is described in the Torah with some of the qualities attributed to him in the Qurʾān: 'O Prophet, We have sent you as a witness and a bearer of glad tidings and a warner, and a guardian for the unlettered.' Being in al-Bukhārī's collection, the report is ṣaḥīḥ.",
            "bn": "একটি সহীহ বর্ণনা আয়াতটিকে এক চমকপ্রদ সত্যের সঙ্গে বেঁধে দেয়। বুখারী আবদুল্লাহ ইবন আমর ইবনুল আস (রাঃ) থেকে বর্ণনা করেন যে আতা ইবন ইয়াসার তাঁকে জিজ্ঞেস করেছিলেন তাওরাতে রাসূল ﷺ-এর বর্ণনা নিয়ে। তিনি উত্তর দিলেন, আল্লাহর কসম, কুরআনে তাঁর যেসব গুণ বলা হয়েছে তার কিছু তাওরাতেও তাঁর ব্যাপারে বলা আছে: 'হে নবী, আমি তোমাকে পাঠিয়েছি সাক্ষী, সুসংবাদদাতা আর সতর্ককারীরূপে, এবং নিরক্ষরদের রক্ষাকারীরূপে।' বুখারীর সংকলনে থাকায় বর্ণনাটি সহীহ।"
          },
          {
            "en": "The same narration continues in the Torah's words: You are My servant and My Messenger; I have named you al-Mutawakkil, the one who relies on Me. You are not harsh, nor coarse, nor loud in the markets; you do not repay an evil deed with its like, but pardon and forgive. The very titles of this verse, it says, were written before the Qurʾān was sent down — the witness, the bearer of good news, the warner — a mission foretold, not improvised.",
            "bn": "একই বর্ণনা তাওরাতের ভাষায় চলতে থাকে: তুমি আমার বান্দা ও আমার রাসূল; আমি তোমার নাম রেখেছি আল-মুতাওয়াক্কিল, যে আমার উপর ভরসা করে। তুমি রূঢ় নও, কর্কশ নও, বাজারে হট্টগোলকারীও নও; তুমি মন্দের বদলা মন্দ দিয়ে দাও না, বরং ক্ষমা করো আর মাফ করে দাও। এই আয়াতের নামগুলোই, বর্ণনাটি বলছে, কুরআন নাজিল হওয়ার আগেই লেখা ছিল। সাক্ষী, সুসংবাদদাতা, সতর্ককারী—এ এমন এক দায়িত্ব যা আগেই জানানো, হঠাৎ গড়ে ওঠা নয়।"
          },
          {
            "en": "Ibn Kathir and al-Qurtubi also report, from Ibn ʿAbbās, that when this verse came down the Prophet ﷺ sent ʿAlī and Muʿādh toward Yemen with the charge, Give glad tidings and do not repel; make things easy and do not make them hard. The office of mubashshir was not left as a word on a page; it was handed on, as a manner, to those he sent out in his name.",
            "bn": "ইবন কাসীর আর কুরতুবী ইবন আব্বাস (রাঃ) থেকে আরও বর্ণনা করেন যে এই আয়াত যখন নাজিল হয়, নবী ﷺ আলী আর মুআয (রাঃ)-কে ইয়ামানের দিকে পাঠান এই নির্দেশ দিয়ে: সুসংবাদ দাও, বিমুখ করো না; সহজ করো, কঠিন করো না। মুবাশশিরের দায়িত্ব পাতায় লেখা একটা শব্দ হয়ে পড়ে থাকেনি। এক আচরণ হিসেবে তা তাঁর নামে পাঠানো মানুষদের হাতে তুলে দেওয়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Names, One Steadying",
          "bn": "বহু নাম, এক ভরসা"
        },
        "p": [
          {
            "en": "Al-Qurtubi pauses on how many of the Messenger's ﷺ names this single verse holds, and how many he bears in all. He recalls the Prophet's ﷺ own words that he has several names — Muḥammad, Aḥmad, and others — and notes that scholars gathered them at length: Qāḍī ʿIyāḍ in ash-Shifāʾ, Ibn al-ʿArabī who counted dozens from this passage, and a report from Ibn ʿAbbās of many more. A man described from so many sides was sent for a work that touched every side of life.",
            "bn": "কুরতুবী থামেন এই ভেবে যে এই একটি আয়াতই রাসূল ﷺ-এর কত নাম ধরে রেখেছে, আর মোট কত নাম তিনি বহন করেন। তিনি নবী ﷺ-এর নিজের কথা মনে করান যে তাঁর কয়েকটি নাম আছে—মুহাম্মাদ, আহমাদ, আরও কিছু। আর তিনি বলেন, আলেমরা এগুলো বিস্তারিত জড়ো করেছেন: কাযী ইয়ায তাঁর 'আশ-শিফা' গ্রন্থে, ইবনুল আরাবী যিনি এই আয়াত থেকেই অনেকগুলো নাম গুনেছেন, আর ইবন আব্বাস (রাঃ) থেকে আসা আরও বহু নামের বর্ণনা। এত দিক থেকে যাঁর বর্ণনা, তাঁকে পাঠানো হয়েছিল এমন এক কাজের জন্য যা জীবনের প্রতিটি দিক ছুঁয়ে যায়।"
          },
          {
            "en": "For the one who follows him, the three offices are a steadying. In a surah of siege and strain, the believer is told that he walks behind a witness who sees his days, a bearer of glad tidings who points to mercy worth reaching for, and a warner whose caution is itself a kindness. To take all three to heart is to live watched, hopeful, and awake — which is exactly what a season of trial asks of a believer.",
            "bn": "যে তাঁকে অনুসরণ করে, তার জন্য এই তিন দায়িত্ব এক ভরসা। ঘেরাও আর টানাপোড়েনের এই সূরায় ঈমানদারকে জানানো হচ্ছে, সে কার পেছনে হাঁটছে: এমন এক সাক্ষী, যিনি তার দিনগুলো দেখেন; এমন এক সুসংবাদদাতা, যিনি দেখিয়ে দেন কোন রহমতের জন্য চেষ্টা করা সার্থক; আর এমন এক সতর্ককারী, যাঁর সতর্ক করাটাই দয়া। তিনটিকেই অন্তরে নেওয়ার মানে, কেউ দেখছেন জেনে বাঁচা, বুকে আশা রাখা আর সজাগ থাকা। পরীক্ষার মৌসুমে ঈমানদারের কাছে ঠিক এটাই চাওয়া হয়।"
          }
        ]
      }
    ]
  },
  "33:50": {
    "sections": [
      {
        "h": {
          "en": "Set Among Personal Rulings",
          "bn": "ব্যক্তিগত বিধানের মাঝে"
        },
        "p": [
          {
            "en": "The fiftieth verse of al-Ahzab sits inside a run of rulings that touch the Prophet ﷺ and his household directly. The verses just before had named his offices — witness, bearer of good tidings, warner, and caller to Allah — and had given the believers a rule of their own about releasing a wife divorced before the marriage was consummated in 33:49. Now the address turns fully to him. Allah sets out, almost name by name, the women whom marriage has made lawful to His Messenger, and the verses in 33:51 and 33:52 will first order and then narrow that circle.",
            "bn": "আল-আহযাবের পঞ্চাশতম আয়াত এমন একগুচ্ছ বিধানের ভেতরে বসে আছে, যেগুলো সরাসরি নবী ﷺ ও তাঁর ঘরকে স্পর্শ করে। ঠিক আগের আয়াতগুলো তাঁর দায়িত্বগুলো নাম ধরে বলেছিল: সাক্ষী, সুসংবাদদাতা, সতর্ককারী ও আল্লাহর পথে আহ্বানকারী। আর মুমিনদের দিয়েছিল তাদের নিজেদের বিধান—স্পর্শের আগে তালাক পাওয়া স্ত্রীকে কীভাবে বিদায় দিতে হয়, ৩৩:৪৯ আয়াতে। এবার সম্বোধন পুরোপুরি তাঁর দিকে ফেরে। আল্লাহ প্রায় নাম ধরে ধরে জানিয়ে দেন, বিয়ের দিক থেকে কোন নারীরা তাঁর রাসূলের জন্য বৈধ। আর পরের ৩৩:৫১ ও ৩৩:৫২ আয়াত সেই বৃত্তকে আগে সাজাবে, তারপর সংকুচিত করবে।"
          },
          {
            "en": "Al-Qurtubi points out that the words made lawful imply that something had first been withheld. Before this, he relays from Ibn ʿAbbas, the Prophet ﷺ could marry among the people as he wished, and his wives felt that keenly; then Allah restricted him to those named here, and they were glad of it. Al-Qurtubi adds that although this verse stands earlier in the recited order, it was sent down after the verse that limited him, much as the two verses on widows in al-Baqarah are placed in one order and were revealed in another.",
            "bn": "কুরতুবী বলেন, 'বৈধ করেছি' কথাটি বুঝিয়ে দেয় যে আগে কিছু একটা আটকে রাখা ছিল। ইবন আব্বাস থেকে তিনি বর্ণনা করেন, এর আগে নবী ﷺ মানুষের মধ্যে যাকে ইচ্ছে বিয়ে করতে পারতেন, আর তাঁর স্ত্রীদের কাছে তা ভারী ঠেকত। তারপর আল্লাহ তাঁকে এখানে উল্লেখ করা নারীদের মধ্যেই সীমিত করে দেন, আর এতে তাঁরা স্বস্তি পান। কুরতুবী আরও বলেন, তিলাওয়াতের ক্রমে এ আয়াত আগে থাকলেও নাজিল হয়েছে সেই আয়াতের পরে যা তাঁকে সীমিত করেছিল—যেমন আল-বাকারায় বিধবাদের নিয়ে দুটি আয়াত এক ক্রমে সাজানো, অথচ নাজিল হয়েছে অন্য ক্রমে।"
          }
        ]
      },
      {
        "h": {
          "en": "Wives Whose Dues Were Paid",
          "bn": "যাদের মোহর দেওয়া হয়েছে"
        },
        "p": [
          {
            "en": "The verse opens with your wives to whom you have given their due. At-Tabari and Ibn Kathir read the word rendered compensation as the mahr, the marriage-gift, citing Mujahid that it means their dowries. These are not women he is now being told to seek; they are the wives already in his house, whose bridal dues he had already settled. The permission gathers them up and affirms them rather than opening a new door — a reassurance set before the clauses that do open new doors.",
            "bn": "আয়াত শুরু হয় 'তোমার স্ত্রীগণ, যাদের মোহর তুমি দিয়ে দিয়েছ' দিয়ে। তাবারী ও ইবন কাসীর 'উজূর' শব্দটিকে মোহর অর্থে পড়েন, বিয়ের দেনমোহর, আর মুজাহিদ থেকে তাঁরা আনেন যে এর মানে তাদের মোহরানা। এরা এমন কোনো নারী নন যাদের এখন খুঁজে নিতে বলা হচ্ছে। এরা তাঁর ঘরে থাকা স্ত্রীরাই, যাদের দেনমোহর তিনি আগেই চুকিয়ে দিয়েছেন। অনুমতিটি তাঁদের একসঙ্গে ধরে নিশ্চিত করে, নতুন কোনো দরজা খোলে না। যে ধারাগুলো সত্যিই নতুন দরজা খোলে, তার আগে এ যেন এক আশ্বাস।"
          },
          {
            "en": "Ma'arif al-Qur'an makes a careful point here. The phrase to whom you have given their due is not a condition on which wife is lawful; it states a fact — that the Prophet ﷺ had paid each wife her mahr promptly and in full, never leaving it an unpaid debt, and that this is a practice for the community to imitate. What is genuinely particular to him appears only by implication: at the time these words came down he already had more than four wives, which is lawful for him though not for the believers.",
            "bn": "মাআরিফুল কুরআন এখানে একটি সূক্ষ্ম কথা তোলে। 'যাদের মোহর তুমি দিয়ে দিয়েছ'—এটি কোন স্ত্রী বৈধ তার শর্ত নয়, বরং একটি বাস্তবতা জানায়: নবী ﷺ প্রত্যেক স্ত্রীর মোহর তৎক্ষণাৎ ও পুরোপুরি আদায় করেছেন, কখনো তা বকেয়া রেখে দেননি, আর এটি উম্মতের অনুসরণের জন্য আদর্শ। সত্যিকার অর্থে তাঁর নিজস্ব যা, তা কেবল ইঙ্গিতে আসে: এ কথা যখন নাজিল হয় তখনই তাঁর ঘরে চারজনের বেশি স্ত্রী ছিলেন, যা তাঁর জন্য বৈধ হলেও মুমিনদের জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Read in Its Own Century",
          "bn": "নিজের শতকের আলোয়"
        },
        "p": [
          {
            "en": "Next comes and those your right hand possesses from what Allah has returned to you. At-Tabari and al-Baghawi explain this of the bondwomen who came into his keeping through what war returned to the Muslims, and al-Qurtubi notes that fayʾ means what Allah gave back from the disbelievers. This is a clause that must be read inside its own world: the institution of captivity was part of warfare across the whole of the seventh-century Near East, and the Qur'an addresses a reality it did not invent.",
            "bn": "এরপর আসে 'আর আল্লাহ তোমাকে যা ফিরিয়ে দিয়েছেন তার মধ্য থেকে তোমার মালিকানাধীন যারা'। তাবারী ও বাগভী এটিকে ব্যাখ্যা করেন সেই দাসীদের দিয়ে, যারা যুদ্ধের মাধ্যমে মুসলিমদের হাতে এসে তাঁর তত্ত্বাবধানে এসেছিল। কুরতুবী বলেন, 'ফায়' মানে আল্লাহ কাফিরদের কাছ থেকে যা ফিরিয়ে দিয়েছেন। এ ধারা অবশ্যই তার নিজের কালের ভেতরে রেখে পড়তে হবে: বন্দিত্বের প্রথা তখন গোটা সপ্তম শতকের নিকট-প্রাচ্যজুড়ে যুদ্ধেরই অংশ ছিল। কুরআন এমন এক বাস্তবতাকে সম্বোধন করছে, যা সে নিজে তৈরি করেনি।"
          },
          {
            "en": "Ibn Kathir's examples show the direction the law actually moved: Safiyyah bint Huyayy, taken among the captives of Khaybar, he set free and made her freedom her bridal gift, and Juwayriyah bint al-Harith he likewise freed and then married. The whole weight of the Qur'an falls on chastity and dignity, and here the movement runs toward liberation and lawful marriage. So the clause needs stating plainly: it describes a law of its own age and licenses nothing against any living person, is no warrant for cruelty or seizure, and its trajectory ran toward the freeing of slaves the Qur'an urges as worship.",
            "bn": "ইবন কাসীরের উদাহরণগুলো দেখিয়ে দেয়, বিধান আসলে কোন দিকে এগিয়েছে: খায়বারের বন্দিদের মধ্য থেকে পাওয়া সাফিয়্যা বিনতে হুয়াই-কে তিনি মুক্ত করে তাঁর মুক্তিকেই দেনমোহর বানান, আর জুওয়াইরিয়া বিনতে হারিসকেও একইভাবে মুক্ত করে তারপর বিয়ে করেন। কুরআনের গোটা ভার পড়ে সতীত্ব ও মর্যাদার ওপর, আর এখানে গতিটা চলে মুক্তি ও বৈধ বিয়ের দিকে। তাই ধারাটি নিয়ে একটা কথা পরিষ্কার বলে রাখা দরকার। এটি নিজের যুগের এক বিধানের বর্ণনা। আজ বেঁচে থাকা কারও বিরুদ্ধে এটি কিছুই বৈধ করে না, নিষ্ঠুরতা বা কাউকে ধরে নিয়ে যাওয়ার ছাড়পত্রও এটি নয়। এর গতিপথ ছিল দাসমুক্তির দিকে, যাকে কুরআন ইবাদত হিসেবে উৎসাহ দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Cousins Who Emigrated",
          "bn": "হিজরতকারী চাচাত-মামাত বোনেরা"
        },
        "p": [
          {
            "en": "The verse then names the daughters of your paternal uncles and aunts and of your maternal uncles and aunts who emigrated with you. Ibn Kathir reads the permission of cousin-marriage as a balanced middle: the Shariah, he argues, allows marriage to a cousin while forbidding the nearer unions some peoples permitted and the far distance others imposed. Al-Baghawi glosses the paternal line as the women of Quraysh and the maternal line as the women of Banu Zuhrah, the Prophet's ﷺ own kin on both sides.",
            "bn": "এরপর আয়াত নাম নেয় তোমার চাচা ও ফুফুর কন্যাদের, আর তোমার মামা ও খালার কন্যাদের, যারা তোমার সঙ্গে হিজরত করেছে। ইবন কাসীর চাচাত-মামাত বিবাহের অনুমতিকে পড়েন ভারসাম্যপূর্ণ এক মধ্যপন্থা হিসেবে: শরীয়ত চাচাত বোনকে বিয়ের অনুমতি দেয়, অথচ কেউ কেউ যে নিকটতর সম্পর্কের অনুমতি দিত আর কেউ যে বহু দূরত্ব চাপিয়ে দিত, তা নিষেধ করে। বাগভী চাচার দিকটিকে ব্যাখ্যা করেন কুরাইশের নারী বলে, আর মামার দিকটিকে বানু যুহরার নারী বলে, দুই দিক থেকেই নবী ﷺ-এর আপন আত্মীয়।"
          },
          {
            "en": "The restriction who emigrated with you drew disagreement that the commentators preserve. Al-Qurtubi records two readings: that only those kinswomen who made the hijrah to Medina were lawful to him, or that the word points to those who embraced Islam. As-Sa'di holds the migration to be a genuine restriction laid on the Prophet ﷺ, the sounder of the two views, while noting it was never a condition of a valid marriage for anyone else. Al-Baghawi reports that the hijrah condition was later lifted.",
            "bn": "'যারা তোমার সঙ্গে হিজরত করেছে'—এই শর্ত নিয়ে মতভেদ ছিল, যা তাফসীরকারেরা ধরে রেখেছেন। কুরতুবী দুটি পাঠ উল্লেখ করেন: হয় তাঁর আত্মীয়াদের মধ্যে কেবল যারা মদীনায় হিজরত করেছিলেন তারাই তাঁর জন্য বৈধ, নয়তো শব্দটি তাদের বোঝায় যারা ইসলাম গ্রহণ করেছিলেন। সা'দী মনে করেন, হিজরত নবী ﷺ-এর ওপর রাখা একটি প্রকৃত শর্ত, আর এটিই দুটি মতের মধ্যে অধিক সঠিক; তবে তিনি বলেন, অন্য কারও বৈধ বিবাহের জন্য এ কখনো শর্ত ছিল না। বাগভী জানান, হিজরতের শর্ত পরে তুলে নেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Offered Without a Dower",
          "bn": "মোহর ছাড়া নিবেদন"
        },
        "p": [
          {
            "en": "Then the clause the verse itself marks as unique: a believing woman, if she offers herself to the Prophet, if the Prophet wishes to marry her — exclusively for you, not for the believers. A woman might give herself in marriage without a dower, and he might accept, should he wish; and then the fence, khalisatan laka, this alone is for you. The Qur'an does not leave the exclusivity to be inferred. It says it in the sentence itself, so no reader can mistake a special permission for a common rule.",
            "bn": "তারপর সেই ধারা, যাকে আয়াত নিজেই আলাদা বলে চিহ্নিত করে: কোনো মুমিন নারী যদি নিজেকে নবীর কাছে নিবেদন করে, আর নবী যদি তাকে বিয়ে করতে চান—এটা কেবল তোমার জন্য, মুমিনদের জন্য নয়। কোনো নারী মোহর ছাড়াই নিজেকে বিয়ের জন্য নিবেদন করতে পারে, আর তিনি চাইলে কবুল করতে পারেন। তারপরই বেড়া, খালিসাতান লাকা, এটা একমাত্র তোমার জন্য। কুরআন এই বিশেষত্বকে অনুমানের ওপর ছাড়ে না। বাক্যের ভেতরেই তা বলে দেয়, যাতে কোনো পাঠক বিশেষ অনুমতিকে সাধারণ বিধান বলে ভুল না করে।"
          },
          {
            "en": "Ma'arif al-Qur'an shows how sharp the exception is. For every other Muslim a dower is essential, so essential that if the couple agree to waive it the agreement is void and a customary dower falls due anyway. Only the Prophet ﷺ was permitted to marry on a gift, without any dower, when a woman desired it. Ibn Kathir cites Ikrimah and Qatadah that no woman may offer herself to any man without a guardian and a dower — the one exception in all of this being the Messenger of Allah.",
            "bn": "মাআরিফুল কুরআন দেখায়, এই ব্যতিক্রম কতটা তীক্ষ্ণ। অন্য প্রত্যেক মুসলিমের জন্য মোহর অপরিহার্য, এতটাই যে দম্পতি তা মাফ করে দিতে রাজি হলেও সে চুক্তি বাতিল আর প্রচলিত মোহর তবুও বর্তায়। কেবল নবী ﷺ-কেই অনুমতি দেওয়া হয়েছিল মোহর ছাড়া, হিবার ভিত্তিতে বিয়ে করার, যখন কোনো নারী তা চাইত। ইবন কাসীর ইকরিমা ও কাতাদা থেকে আনেন যে, অভিভাবক ও মোহর ছাড়া কোনো নারী কোনো পুরুষের কাছে নিজেকে নিবেদন করতে পারে না—এই গোটা বিষয়ে একমাত্র ব্যতিক্রম আল্লাহর রাসূল।"
          },
          {
            "en": "As-Sa'di draws the same line from the words themselves. Khalisatan laka, he says, means that the permission of marriage by gift is the Prophet's ﷺ alone; the believers may not marry a woman merely because she has offered herself. So even here, inside a privilege, the verse keeps the believers' ordinary law in view. The honour widens his path where theirs stays fixed, and the text is at pains to keep the two from blurring into each other.",
            "bn": "সা'দী শব্দগুলো থেকেই একই সীমারেখা টানেন। তিনি বলেন, খালিসাতান লাকা মানে হিবার মাধ্যমে বিয়ের অনুমতি কেবল নবী ﷺ-এরই; কোনো নারী নিজেকে নিবেদন করেছে বলেই মুমিনরা তাকে বিয়ে করতে পারে না। তাই এই বিশেষ অধিকারের ভেতরেও আয়াত মুমিনদের সাধারণ বিধানকে চোখের সামনে রাখে। সম্মান তাঁর পথ প্রশস্ত করে, যেখানে তাদের পথ যেমন ছিল তেমনই থাকে। আর আয়াতের ভাষা বিশেষভাবে খেয়াল রাখে, যাতে দুটি পথ মিশে এক না হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "An Unsettled Permission",
          "bn": "অমীমাংসিত এক অনুমতি"
        },
        "p": [
          {
            "en": "Did the Prophet ﷺ ever act on this clause? The commentators disagree, and they keep the disagreement open rather than settling it. At-Tabari and al-Qurtubi relay from Ibn ʿAbbas, and from Mujahid, that he never took a wife by gift at all — that every wife came to him by a marriage contract or through lawful ownership, and that the words if she offers herself state a condition that need not have come to pass. On this view the clause grants a permission he simply never used.",
            "bn": "নবী ﷺ কি কখনো এ ধারা অনুযায়ী আমল করেছিলেন? এ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে, আর তাঁরা মতভেদটা মিটিয়ে না দিয়ে খোলাই রেখেছেন। তাবারী ও কুরতুবী ইবন আব্বাস ও মুজাহিদ থেকে বর্ণনা করেন, হিবা হিসেবে, অর্থাৎ কোনো নারীর নিজেকে দান করার মাধ্যমে, তিনি কখনো কোনো স্ত্রী গ্রহণ করেননি। তাঁর প্রত্যেক স্ত্রী এসেছেন বিয়ের আকদের মাধ্যমে, নয়তো বৈধ মালিকানার সূত্রে। আর 'যদি নিজেকে নিবেদন করে' কথাটি একটি শর্ত মাত্র; শর্তটি বাস্তবে ঘটতেই হবে, এমন নয়। এই মত অনুযায়ী ধারাটি তাঁকে এমন এক অনুমতি দিয়েছে, যা তিনি কখনো কাজে লাগাননি।"
          },
          {
            "en": "Others held that he did have such a wife, but then they differ over who she was. Al-Baghawi and al-Qurtubi gather the names that were proposed: Maymunah bint al-Harith, Zaynab bint Khuzaymah, Umm Sharik, and Khawla bint Hakim, with az-Zamakhshari counting four such women in all. Al-Qurtubi himself observes that the reports conflict. The honest conclusion is the one the sources leave us: the ruling stands in the Qur'an whether or not it was ever exercised, and no single woman can be named as the one beyond dispute.",
            "bn": "অন্য একদল আলিমের মতে, এমন স্ত্রী তাঁর ছিলেন; কিন্তু তিনি কে, তা নিয়ে আবার তাঁদের মধ্যে মতভেদ। যেসব নাম এসেছে, বাগভী ও কুরতুবী সেগুলো একত্র করেছেন: মাইমূনা বিনতে হারিস, যাইনাব বিনতে খুযাইমা, উম্মে শারিক আর খাওলা বিনতে হাকিম। যামাখশারীর হিসাবে এমন নারী মোট চারজন। কুরতুবী নিজেই বলেছেন, বর্ণনাগুলো একটি আরেকটির সঙ্গে মেলে না। তাই সূত্রগুলো আমাদের যেখানে রেখে যায়, সৎভাবে সেখানেই থামতে হয়: অনুমতিটি কাজে লাগানো হোক বা না হোক, বিধানটি কুরআনে আছে; আর কোনো একজন নারীকে নিঃসন্দেহে 'সেই নারী' বলা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What ʿĀʾishah Witnessed",
          "bn": "আয়েশা যা দেখেছেন"
        },
        "p": [
          {
            "en": "One sound report ties the whole clause to a scene in the Prophet's ﷺ own house. Al-Bukhari records in his Sahih, from ʿĀʾishah: Khawla bint Hakim was one of those ladies who presented themselves to the Prophet ﷺ for marriage. ʿĀʾishah said, Doesn't a lady feel ashamed for presenting herself to a man? But when the verse You may postpone the turn of any of them you please (33:51) was revealed, ʿĀʾishah said, O Allah's Messenger ﷺ, I do not see but that your Lord hurries in pleasing you.",
            "bn": "একটি সহীহ বর্ণনা গোটা ধারাটিকে নবী ﷺ-এর নিজের ঘরের একটি ঘটনার সঙ্গে জুড়ে দেয়। ইমাম বুখারী তাঁর সহীহ গ্রন্থে আয়েশা থেকে বর্ণনা করেছেন: খাওলা বিনতে হাকিম ছিলেন সেই নারীদের একজন, যাঁরা বিয়ের জন্য নবী ﷺ-এর কাছে নিজেদের পেশ করেছিলেন। আয়েশা বললেন, একজন নারী পুরুষের কাছে নিজেকে পেশ করতে লজ্জা পায় না? কিন্তু যখন নাজিল হলো, 'তাদের মধ্যে যাকে ইচ্ছে তুমি পিছিয়ে রাখতে পার' (৩৩:৫১), তখন আয়েশা বললেন, হে আল্লাহর রাসূল ﷺ, আমি তো দেখছি, আপনার রব আপনার ইচ্ছা পূরণে একটুও দেরি করেন না।"
          },
          {
            "en": "The report settles several things at once. The offering of oneself in marriage was real and known in Medina, not a mere hypothesis; more than one woman did it, for ʿĀʾishah speaks of those ladies; and yet it remained the Prophet's ﷺ exclusive permission, never a door opened for the believers. ʿĀʾishah's own frankness, her surprise and even her jealousy, is preserved in the Sahih without embarrassment, a mark of how honestly the household's life was recorded for later readers.",
            "bn": "এই এক বর্ণনা থেকেই কয়েকটি বিষয় পরিষ্কার হয়ে যায়। বিয়ের জন্য নিজেকে পেশ করার ঘটনা মদীনায় সত্যিই ঘটত, সবাই তা জানত; এটা নিছক কোনো অনুমান নয়। একজনের বেশি নারী এমন করেছিলেন, কারণ আয়েশা 'সেই নারীদের' কথা বলছেন। তবু এ অনুমতি ছিল কেবল নবী ﷺ-এর জন্য খাস; অন্য মুমিনদের জন্য এ পথ কখনো খোলা হয়নি। আয়েশার খোলামেলা কথা, তাঁর বিস্ময়, এমনকি তাঁর ঈর্ষাও সহীহ গ্রন্থে কোনো সংকোচ ছাড়াই সংরক্ষিত আছে। এতে বোঝা যায়, পরের পাঠকদের জন্য নবী-পরিবারের জীবন কতটা সততার সঙ্গে লিখে রাখা হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Believers' Settled Rule",
          "bn": "মুমিনদের নির্ধারিত বিধান"
        },
        "p": [
          {
            "en": "Having set out what is special to him, the verse turns to the community: We certainly know what We have obligated upon them concerning their wives and those their right hands possess. At-Tabari and Ibn Kathir read this as the settled law for the believers — no more than four free wives, and marriage only with a guardian, two witnesses, and a dower, as 4:3 lays down the limit. The Prophet's ﷺ permissions are named as exceptions precisely so the norm is not mistaken for them.",
            "bn": "নবী ﷺ-এর জন্য যা বিশেষ, তা বলে দেওয়ার পর আয়াত সাধারণ মুমিনদের দিকে ফেরে: 'মুমিনদের ওপর তাদের স্ত্রী ও মালিকানাধীন দাসীদের ব্যাপারে আমি যা ফরজ করেছি, তা আমি ভালোই জানি।' তাবারী ও ইবন কাসীর এখানে মুমিনদের জন্য স্থির হয়ে থাকা বিধানটি দেখেন: স্বাধীন স্ত্রী চারজনের বেশি নয়, আর বিয়ে হবে কেবল অভিভাবক, দুজন সাক্ষী ও মোহর দিয়ে; ৪:৩ আয়াত এই সীমা বেঁধে দিয়েছে। নবী ﷺ-এর অনুমতিগুলোকে কুরআন আলাদা করে ব্যতিক্রম বলে চিনিয়ে দিয়েছে ঠিক এ কারণেই, যাতে কেউ সাধারণ নিয়মকে সেগুলোর সঙ্গে গুলিয়ে না ফেলে।"
          },
          {
            "en": "The verse closes its address to him with so that there be no hardship upon you. Ma'arif al-Qur'an draws out the subtlety: some of these rulings plainly ease his way, such as more than four wives and marriage without a dower, while others add conditions that look harder, such as the requirement that his wife be a believer who had emigrated. Yet all of them are gathered under the lifting of hardship, because the stricter clauses spared him a distress that laxity would have brought.",
            "bn": "নবী ﷺ-কে সম্বোধন শেষ হয় এই কথায়: 'যাতে তোমার ওপর কোনো অসুবিধা না থাকে।' মাআরিফুল কুরআন এখানে একটি সূক্ষ্ম কথা ধরিয়ে দেয়। এসব বিধানের কিছু স্পষ্টই তাঁর পথ সহজ করে দেয়, যেমন চারজনের বেশি স্ত্রী আর মোহর ছাড়া বিয়ে। আবার কিছু বিধান এমন শর্ত জুড়ে দেয়, যা দেখতে বেশি কঠিন, যেমন তাঁর স্ত্রীকে মুমিন ও হিজরতকারী হতে হবে। তবু সবগুলোকেই 'অসুবিধা দূর করা'র মধ্যে ধরা হয়েছে, কারণ কড়া শর্তগুলো তাঁকে এমন এক কষ্ট থেকে বাঁচিয়েছে, যা ঢিলেঢালা নিয়ম থাকলে আসত।"
          }
        ]
      },
      {
        "h": {
          "en": "Burden, Not Indulgence",
          "bn": "ভার, ভোগ নয়"
        },
        "p": [
          {
            "en": "Behind the legal clauses lies a life shaped by mission, not appetite. The Prophet's ﷺ marriages carried the work of prophethood: alliances that knit tribes to the new community, the care of widows left after battle, and above all the teaching of the ummah through the Mothers of the Believers, who carried his household's guidance to the world. The commentators note restraint, not indulgence; soon after this verse, 33:52 forbade him further wives, and al-Qurtubi lists marriage among the few things made lawful to him while far more was made forbidden or obligatory.",
            "bn": "এসব বিধানের পেছনে আছে এমন এক জীবন, যা গড়ে উঠেছিল দাওয়াতের দায়িত্বে, প্রবৃত্তির টানে নয়। নবী ﷺ-এর বিয়েগুলোও ছিল নবুয়তের কাজেরই অংশ: এতে বিভিন্ন গোত্র নতুন মুসলিম সমাজের সঙ্গে বাঁধা পড়েছে, যুদ্ধে স্বামী হারানো বিধবারা আশ্রয় পেয়েছেন। সবচেয়ে বড় কথা, উম্মুল মুমিনীনদের মাধ্যমে উম্মত দ্বীন শিখেছে; তাঁরাই তাঁর ঘরের শিক্ষা দুনিয়ার কাছে পৌঁছে দিয়েছেন। তাফসীরকারেরা এখানে সংযম দেখেন, ভোগ নয়। এ আয়াতের অল্প পরেই ৩৩:৫২ তাঁকে আর কোনো বিয়ে করতে নিষেধ করে। আর কুরতুবী দেখান, তাঁর জন্য যে অল্প কয়েকটি জিনিস বিশেষভাবে হালাল করা হয়েছিল, বিয়ে তার একটি; অথচ তাঁর জন্য হারাম বা ফরজ করা বিষয় ছিল এর চেয়ে অনেক বেশি।"
          },
          {
            "en": "This needs saying without hedging. The verse concerns the Prophet's ﷺ unique station before Allah, and it licenses nothing against any living person. It is not a template for men today, who are held to the believers' law of a dower, a guardian, and witnesses; and it is not a demeaning of women, whose dignity the verse guards — in the mahr paid, in the faith required, in the honour of the marriages it names. To read it as a permission for oneself is to miss the one word the Qur'an placed there to prevent exactly that: khalisatan.",
            "bn": "এ কথা কোনো রাখঢাক ছাড়াই বলা দরকার। আয়াতটি আল্লাহর কাছে নবী ﷺ-এর অনন্য মর্যাদার কথা বলে; আজকের কোনো জীবিত মানুষের বিরুদ্ধে কিছু করার অনুমতি এতে নেই। আজকের পুরুষদের জন্য এটা অনুসরণের নমুনা নয়; তারা মুমিনদের সাধারণ বিধানেই বাঁধা: মোহর, অভিভাবক আর সাক্ষী। নারীর অবমাননাও এতে নেই। বরং আয়াত নারীর মর্যাদা রক্ষা করে: আদায় করা মোহরে, শর্ত করা ঈমানে, আর যে বিয়েগুলোর কথা বলে সেগুলোর সম্মানে। একে নিজের জন্য অনুমতি ভেবে পড়লে সেই শব্দটিই চোখ এড়িয়ে যায়, যা কুরআন ঠিক এই ভুল ঠেকাতে সেখানে বসিয়েছে: খালিসাতান।"
          },
          {
            "en": "And then the verse rests on mercy: and ever is Allah Forgiving and Merciful. As-Sa'di reads the closing as part of Allah's special care for His Messenger, widening for him what was not widened for others; al-Muyassar hears in it forgiveness for the believers' sins and mercy in the ease granted them. For the reader the lesson travels home: an honour from Allah is a trust to be carried, its limits kept and its weight borne, and never an excuse turned loose on other people.",
            "bn": "তারপর আয়াত এসে থামে রহমতে: 'আল্লাহ বড়ই ক্ষমাশীল, পরম দয়ালু।' সা'দীর মতে এই শেষ কথাটি তাঁর রাসূলের প্রতি আল্লাহর বিশেষ যত্নেরই অংশ: অন্যদের জন্য যা প্রশস্ত করা হয়নি, তাঁর জন্য তা প্রশস্ত করা হয়েছে। আর মুয়াসসার এতে শোনেন মুমিনদের গুনাহের মাগফিরাত, আর তাদের যে সহজতা দেওয়া হয়েছে তাতে রহমত। পাঠকের জন্যও শিক্ষাটা ঘরের কথা: আল্লাহর দেওয়া সম্মান একটি আমানত। তার সীমা মানতে হয়, তার ভার বইতে হয়; অন্যের ওপর চড়াও হওয়ার অজুহাত হিসেবে তাকে কখনো ব্যবহার করা চলে না।"
          }
        ]
      }
    ]
  },
  "33:59": {
    "sections": [
      {
        "h": {
          "en": "Placed Among Warnings",
          "bn": "সতর্কবাণীর মাঝে বসানো"
        },
        "p": [
          {
            "en": "This verse sits in a run of al-Ahzab about harm and its prevention. Just before it, 33:57 warns those who abuse Allah and His Messenger, and 33:58 condemns those who harm believing men and women for no fault they have earned. Then comes a practical measure. Ma'arif al-Qur'an reads the sequence as a single thread: the surah has just forbidden causing pain to any Muslim, and now it moves to shield a group who were being made to suffer in the streets of Madinah.",
            "bn": "আয়াতটি সূরা আহযাবের এমন এক অংশে বসেছে, যেখানে কষ্ট দেওয়া আর তা ঠেকানোর কথা চলছে। এর ঠিক আগে ৩৩:৫৭ আয়াত সতর্ক করে তাদের, যারা আল্লাহ ও তাঁর রাসূলকে কষ্ট দেয়, আর ৩৩:৫৮ আয়াত নিন্দা করে তাদের, যারা মু'মিন নর-নারীকে বিনা দোষে কষ্ট দেয়। এরপর আসে এক হাতেকলমে ব্যবস্থা। মাআরিফুল কুরআন গোটা ধারাটাকে এক সুতোয় গাঁথা দেখে: সূরা এইমাত্র কোনো মুসলিমকে কষ্ট দেওয়া নিষেধ করল, আর এখন সে এগিয়ে যায় এমন একদল মানুষকে আড়াল দিতে, যাদের মদিনার পথে কষ্ট পেতে হচ্ছিল।"
          },
          {
            "en": "Ma'arif al-Qur'an names two kinds of harm the hypocrites were causing. Loose men would molest bondwomen as they came out on household errands, and at times they mistreated free women, taking them for bondwomen. This verse answers the second harm directly, by a sign that free believing women could carry. The verse that follows, 33:60, answers the first by a stern warning to the offenders. Read together, the two verses close the street from both ends.",
            "bn": "মাআরিফুল কুরআন মুনাফিকদের দুই ধরনের কষ্টের কথা বলে। বখাটে লোকেরা ঘরের কাজে বেরোনো দাসীদের উত্যক্ত করত, আর কখনো স্বাধীন নারীদেরও দাসী ভেবে বিরক্ত করত। এ আয়াত সরাসরি দ্বিতীয় কষ্টের জবাব দেয়, এমন এক চিহ্ন দিয়ে যা স্বাধীন মু'মিন নারীরা বহন করতে পারতেন। পরের আয়াত, ৩৩:৬০, প্রথম কষ্টের জবাব দেয় অপরাধীদের প্রতি কড়া হুঁশিয়ারি দিয়ে। দুই আয়াত একসঙ্গে পড়লে বোঝা যায়, এরা দুই দিক থেকেই পথটা বন্ধ করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Addressed First",
          "bn": "প্রথমে ডাক কাদের কাছে"
        },
        "p": [
          {
            "en": "The command is routed through the Prophet ﷺ: O Prophet, tell your wives and your daughters and the women of the believers. Ibn Kathir notes that his wives and daughters are named first because of their honour, so that the believing women would follow the lead of the Prophet's ﷺ own household. The address then widens outward in three rings, from the closest to the whole community, so that the teaching reaches every believing woman and not a single household.",
            "bn": "আদেশটা দেওয়া হয়েছে নবী ﷺ-এর মাধ্যমে: হে নবী, তোমার স্ত্রীদের, তোমার কন্যাদের আর মু'মিনদের নারীদের বলে দাও। ইবন কাসীর বলেন, তাঁর স্ত্রী ও কন্যাদের নাম প্রথমে এসেছে তাঁদের সম্মানের কারণে, যাতে মু'মিন নারীরা নবী ﷺ-এর নিজের ঘরকে দেখে পথ ধরেন। এরপর সম্বোধন তিনটি বলয়ে বাইরের দিকে ছড়িয়ে যায়, সবচেয়ে কাছের জন থেকে গোটা সমাজ পর্যন্ত, যাতে শিক্ষাটা শুধু এক পরিবারে নয়, প্রতিটি মু'মিন নারীর কাছে পৌঁছায়।"
          },
          {
            "en": "As-Sa'di draws out why the household comes first. Whoever commands others, he writes, should begin with his own family before anyone else, and he reads the order against Allah's words, guard yourselves and your families against a Fire (66:6). The lesson sits inside the grammar: reform asked of the wider community is asked first of whoever carries it, and of those closest to him. No believer is told to impose on others what has not reached their own door.",
            "bn": "ঘর থেকে কেন শুরু, সা'দী তা খুলে বলেন। তিনি লেখেন, যে অন্যকে আদেশ করে, তার উচিত সবার আগে নিজের পরিবার দিয়ে শুরু করা। এই ক্রমটি তিনি মিলিয়ে দেখেন আল্লাহর সেই বাণীর সঙ্গে: নিজেদের আর নিজেদের পরিবারকে আগুন থেকে বাঁচাও (৬৬:৬)। শিক্ষাটা আয়াতের গঠনের ভেতরেই আছে: গোটা সমাজের কাছে যে সংশোধন চাওয়া হয়, তা আগে চাওয়া হয় যে এই আহ্বান বয়ে নিয়ে যায় তার কাছে, আর তার সবচেয়ে কাছের মানুষদের কাছে। যা নিজের ঘরে পৌঁছায়নি, তা অন্যের ওপর চাপাতে কোনো মু'মিনকে বলা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Jilbāb Is",
          "bn": "জিলবাব জিনিসটা কী"
        },
        "p": [
          {
            "en": "The word at the centre of the verse is the jilbāb, drawn here in the plural, jalābīb. Ibn Kathir defines it as the ridā', the wrap worn over the khimār or headscarf, and he lists a line of early authorities for this reading: Ibn Mas'ud, 'Ubayda, Qatada, al-Hasan al-Basri, Sa'id bin Jubayr, Ibrahim an-Nakha'i and 'Ata' al-Khurasani. It is, he says, like the izār of his own day, and he quotes al-Jawhari that the jilbāb is the milḥafa, the large outer sheet.",
            "bn": "আয়াতের কেন্দ্রে যে শব্দ, তা হলো জিলবাব, এখানে বহুবচনে জালাবীব। ইবন কাসীর একে বলেন রিদা, অর্থাৎ খিমার বা মাথার ওড়নার উপর পরা চাদর, আর এ অর্থের পক্ষে তিনি সারি বেঁধে আনেন প্রাচীন মনীষীদের নাম: ইবন মাসউদ (রাঃ), উবায়দা, কাতাদা, হাসান বসরি, সাঈদ ইবন জুবায়র, ইবরাহীম নাখায়ী আর আতা খুরাসানী। তাঁর ভাষায় এটি তাঁর সময়ের ইযারের মতো, আর তিনি জাওহারির কথা তুলে ধরেন যে জিলবাব হলো মিলহাফা, বড় বাইরের চাদর।"
          },
          {
            "en": "The other commentators circle the same object. Al-Baghawi calls it the mulā'a, the sheet a woman wraps about herself over her shift and her khimār. As-Sa'di describes the jalābīb as what is worn above the clothes, a milḥafa or khimār or ridā' and the like, with which she covers herself. Al-Muyassar renders the verse with their wraps and sheets, drawn down to screen the head, face and chest. The jilbāb, in short, is the large outer garment pulled over the everyday clothes.",
            "bn": "বাকি তাফসীরকারেরা একই জিনিসকেই ঘিরে বলেন। বাগভী একে বলেন মুলাআ, যে চাদর নারী তার জামা আর খিমারের উপর নিজের গায়ে জড়িয়ে নেয়। সা'দী জালাবীবের বর্ণনা দেন পোশাকের উপরে পরা কাপড় হিসেবে, মিলহাফা বা খিমার বা রিদা জাতীয় কিছু, যা দিয়ে নারী নিজেকে ঢাকে। মুয়াসসার আয়াতটিকে অনুবাদ করেন তাদের চাদর ও ওড়না হিসেবে, যা মাথা, মুখ আর বুক ঢাকতে নামিয়ে নেওয়া হয়। সোজা কথায়, জিলবাব হলো প্রতিদিনের পোশাকের উপর টেনে নেওয়া বড় বাইরের কাপড়।"
          },
          {
            "en": "Al-Qurtubi states it as a garment larger than the khimār, and reports the reading that it is the ridā', and another that it is the qinā' or veil. His own preference is plain: the sound view, he writes, is that the jilbāb is the garment that covers the whole body. For all the shades of definition, the commentators agree on the core: not an ornament but a covering, loose and outer, meant to be drawn down over whatever a woman is already wearing.",
            "bn": "কুরতুবী বলেন, এটি খিমারের চেয়ে বড় কাপড়। তিনি একটি মত আনেন যে এটি রিদা, আরেকটি মত যে এটি 'কিনা', অর্থাৎ মুখাবরণ। তবে তাঁর নিজের পছন্দ স্পষ্ট। তিনি লেখেন, সঠিক মত হলো: জিলবাব সেই কাপড়, যা গোটা শরীর ঢেকে দেয়। সংজ্ঞায় খুঁটিনাটি পার্থক্য থাকলেও মূল কথায় তাফসীরকারেরা একমত: এটা সাজের জিনিস নয়, আবরণ। ঢিলেঢালা, বাইরের কাপড়, যা নারী আগে থেকে যা পরে আছেন তার ওপর টেনে দেবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How Far It Is Drawn",
          "bn": "কতদূর টেনে নামানো হবে"
        },
        "p": [
          {
            "en": "On how far the garment is to be drawn, the commentators preserve a real disagreement, and it is worth keeping as one. At-Tabari records two main readings. The first, from Ibn 'Abbas and from 'Ubayda as-Salmani, is that a woman covers her face and head and shows only a single eye to see her way; Ibn Sirin relates that when he asked 'Ubayda about the verse, the old scholar demonstrated by wrapping his own face and leaving the left eye clear.",
            "bn": "কাপড়টা কতদূর টেনে নামাতে হবে, এ নিয়ে তাফসীরকারদের মধ্যে সত্যিকারের মতভেদ আছে, আর একে মতভেদ হিসেবেই রাখা উচিত। তাবারী দুটি প্রধান ব্যাখ্যা উল্লেখ করেন। প্রথমটি ইবন আব্বাস (রাঃ) ও উবায়দা সালমানি থেকে: নারী মুখ ও মাথা ঢেকে রাখবেন, শুধু পথ দেখার জন্য একটি চোখ খোলা থাকবে। ইবন সিরিন বলেন, তিনি উবায়দাকে আয়াতটি সম্পর্কে জিজ্ঞেস করলে প্রবীণ এই আলিম নিজের মুখ কাপড়ে জড়িয়ে বাঁ চোখটি খোলা রেখে দেখিয়ে দিলেন।"
          },
          {
            "en": "The second reading at-Tabari carries, again from Ibn 'Abbas and from Qatada, is that she binds the wrap above the forehead and folds it across, so that it covers the chest and most of the face though the eyes may still show. Al-Qurtubi collects the same spread and adds al-Hasan al-Basri's view that she covers half her face. The difference is not about whether to cover, but about how much, and the texts hand it down as a spread of honest opinion.",
            "bn": "তাবারী দ্বিতীয় যে ব্যাখ্যা আনেন, সেটিও ইবন আব্বাস (রাঃ) ও কাতাদা থেকে: নারী চাদরটি কপালের ওপর বেঁধে ঘুরিয়ে আনবেন, ফলে বুক আর মুখের বেশির ভাগ ঢাকা পড়বে, যদিও চোখ খোলা থাকতে পারে। কুরতুবীও এই মতগুলো একত্র করেছেন, আর সঙ্গে যোগ করেছেন হাসান বসরির মত: নারী মুখের অর্ধেক ঢাকবেন। অর্থাৎ মতভেদটা ঢাকা হবে কি না তা নিয়ে নয়, কতটা ঢাকা হবে তা নিয়ে। সূত্রগুলো একে আন্তরিক আলিমদের নানা মত হিসেবেই আমাদের হাতে তুলে দিয়েছে।"
          },
          {
            "en": "Ma'arif al-Qur'an sets this within the wider juristic debate: the majority held that even the face and hands, though not strictly part of what must be covered, should be screened where temptation is feared, while it notes that Ibn Hazm and others read the verse without requiring the face to be veiled. This article takes no side between them and declares neither sinful. A genuine difference among the scholars is reported here as a difference, which is how the early commentators themselves left it.",
            "bn": "মাআরিফুল কুরআন বিষয়টিকে আরও বড় ফিকহি আলোচনার মধ্যে রাখে। অধিকাংশ আলিমের মত ছিল, মুখ ও হাত মূলত সতরের অংশ না হলেও ফিতনার আশঙ্কা থাকলে সেগুলোও ঢেকে রাখা উচিত। আবার কিতাবটি এ কথাও উল্লেখ করে যে ইবন হাযম ও অন্য কেউ কেউ আয়াতটি থেকে মুখ ঢাকা জরুরি মনে করেন না। এ লেখা এঁদের কারও পক্ষ নেয় না, কাউকে গুনাহগারও বলে না। আলিমদের মধ্যে সত্যিকারের মতভেদকে এখানে মতভেদ হিসেবেই তুলে ধরা হলো; প্রথম যুগের তাফসীরকারেরাও একে এভাবেই রেখে গেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Known, and Not Harmed",
          "bn": "চেনা যাবে, কষ্ট পাবে না"
        },
        "p": [
          {
            "en": "Then the verse gives its reason: that is more fitting that they be known and not be harmed. Ibn Kathir explains being known to mean recognised as free, chaste women, not as slaves or women of the street, so that no corrupt man would trouble them. As-Suddi fills in the scene: immoral men of Madinah would go out after dark to the lanes; the houses were cramped, so women went out at night for their needs, and these men would accost any woman they took for a slave.",
            "bn": "এরপর আয়াত কারণটা জানায়: এতে তাদের চেনা সহজ হবে, ফলে তাদের কষ্ট দেওয়া হবে না। ইবন কাসীর বোঝান, চেনা যাওয়ার মানে হলো তাঁদের স্বাধীন ও সতী নারী বলে চেনা যাবে, দাসী বা রাস্তার মেয়ে বলে নয়; তাই কোনো নষ্ট লোক তাঁদের বিরক্ত করবে না। সুদ্দী পুরো দৃশ্যটা এঁকে দেন: মদিনার বখাটে লোকেরা অন্ধকার নামলে গলিতে বেরিয়ে পড়ত। ঘরগুলো ছিল ছোট আর ঘিঞ্জি, তাই নারীরা প্রয়োজন সারতে রাতে বাইরে যেতেন, আর এরা যাকেই দাসী ভাবত, তাকেই উত্যক্ত করত।"
          },
          {
            "en": "Mujahid reads it the same way: when a woman wore the jilbāb it was known she was free, and no corrupt man would trouble her with harm or suspicion. Al-Qurtubi, with al-Hasan, records how it began: before the verse came down a believing woman would go out for some need, a loose man would accost her thinking her a slave, she would cry out and he would flee; they brought the complaint to the Prophet ﷺ, and the verse was revealed in answer to it.",
            "bn": "মুজাহিদও একই কথা বলেন: কোনো নারী জিলবাব পরলে বোঝা যেত তিনি স্বাধীন, তখন কোনো নষ্ট লোক তাঁকে কষ্ট দিত না, বাজে সন্দেহও করত না। কুরতুবী হাসানের সূত্রে ঘটনার শুরুটা বর্ণনা করেন: আয়াত নাজিলের আগে কোনো মু'মিন নারী প্রয়োজনে বাইরে গেলে কোনো বখাটে তাঁকে দাসী ভেবে উত্যক্ত করত; তিনি চিৎকার করলে লোকটা পালিয়ে যেত। তাঁরা নবী ﷺ-এর কাছে এ নিয়ে অভিযোগ জানালেন, আর এর জবাবেই আয়াতটি নাজিল হলো।"
          },
          {
            "en": "As-Sa'di draws the point out: the covering cuts off the designs of those who prey on women, for where there is no covering, the diseased of heart suppose a woman is not chaste and move against her. Al-Qurtubi adds a careful qualification: to be known here means to be known as a free, protected woman, not that any particular woman be identified by name. The aim throughout is dignity and safety, a God-given honour, not surveillance.",
            "bn": "সা'দী কথাটা আরও খুলে বলেন: এই আবরণ নারীদের পেছনে লেগে থাকা লোকদের মতলব নষ্ট করে দেয়। কারণ আবরণ না থাকলে যাদের অন্তরে রোগ আছে, তারা ভাবে এ নারী হয়তো সতী নয়, আর তার দিকে হাত বাড়ায়। কুরতুবী সাবধানে একটি শর্ত যোগ করেন: এখানে চেনা মানে স্বাধীন, সুরক্ষিত নারী হিসেবে চেনা; কোনো নির্দিষ্ট নারীকে নাম ধরে শনাক্ত করা নয়। পুরো বিষয়টার লক্ষ্য সম্মান আর নিরাপত্তা, আল্লাহর দেওয়া মর্যাদা; নজরদারি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Does Not License",
          "bn": "আয়াত যার অনুমতি দেয় না"
        },
        "p": [
          {
            "en": "This has to be said plainly, in the verse's own spirit. The aim stated in the words is that women not be harmed; it cannot be turned into a warrant to shame, coerce or harass any woman over her dress, which would be the very harm the verse came to end. The burden is not laid on women alone. The same scripture tells believing men to lower their gaze and guard their modesty first (24:30). Decency is a shared duty, and the gaze is named before the garment.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, আয়াতের নিজের সুরেই। আয়াত নিজেই লক্ষ্যটা বলে দিয়েছে: নারীরা যেন কষ্ট না পান। তাই একে কোনো নারীকে তার পোশাক নিয়ে লজ্জা দেওয়া, জোর খাটানো বা হয়রানি করার ছাড়পত্র বানানো যায় না; সেটাই তো সেই কষ্ট, যা থামাতে আয়াতটি এসেছে। ভারটা শুধু নারীর কাঁধে চাপানো হয়নি। একই কুরআন আগে মু'মিন পুরুষদের বলেছে দৃষ্টি নিচু রাখতে আর লজ্জাস্থান হেফাজত করতে (২৪:৩০)। শালীনতা দুই পক্ষেরই দায়িত্ব, আর পোশাকের আগে দৃষ্টির কথাই বলা হয়েছে।"
          },
          {
            "en": "The historical frame should also be read as history. The commentators describe a seventh-century Madinan setting in which free women and bondwomen were treated differently by predatory men, and the verse used a sign to protect the women being attacked. Describing that setting licenses nothing against any person or community today, and passes no verdict on any woman's worth by her clothing. The verse ennobles and protects women; it does not hand anyone a rod to measure or punish them.",
            "bn": "ঐতিহাসিক পটভূমিটাকেও ইতিহাস হিসেবেই পড়া উচিত। তাফসীরকারেরা সপ্তম শতকের মদিনার এমন এক পরিবেশের বর্ণনা দেন, যেখানে শিকারি স্বভাবের লোকেরা স্বাধীন নারী আর দাসীদের সঙ্গে আলাদা আচরণ করত, আর আয়াত এক চিহ্ন দিয়ে আক্রান্ত নারীদের রক্ষা করেছিল। সেই পরিবেশের বর্ণনা আজকের কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না, আর কোনো নারীর মূল্য তার পোশাক দিয়ে বিচারও করে না। আয়াত নারীকে মর্যাদা দেয় আর রক্ষা করে; কাউকে মাপার বা শাস্তি দেওয়ার লাঠি এটি কারও হাতে তুলে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Women Who Answered",
          "bn": "যে নারীরা সাড়া দিলেন"
        },
        "p": [
          {
            "en": "Two narrations show how the first community received the verse. Umm Salamah said that when the words to draw their outer garments over themselves were revealed, the women of the Ansar came out so wrapped in dark cloaks that it was as if crows sat upon their heads. This is recorded in Sunan Abi Dawud (4101), and the same chain, through Safiyya bint Shayba from Umm Salamah, is cited by Ibn Kathir from Ibn Abi Hatim; Abu Dawud passes it on without attaching his own grade.",
            "bn": "প্রথম যুগের মুসলিমরা আয়াতটা কীভাবে গ্রহণ করেছিলেন, দুটি বর্ণনায় তা দেখা যায়। উম্মু সালামা (রাঃ) বলেন, যখন নাজিল হলো 'তারা যেন নিজেদের ওপর চাদরের কিছু অংশ টেনে দেয়', তখন আনসার নারীরা কালো চাদরে এমনভাবে জড়িয়ে বেরোলেন, যেন তাঁদের মাথার ওপর কাক বসে আছে। বর্ণনাটি সুনানে আবু দাউদে (৪১০১) আছে। ইবন কাসীরও ইবন আবি হাতিমের সূত্রে একই সনদে এটি উদ্ধৃত করেছেন: সাফিয়্যা বিনতে শায়বা, তিনি উম্মু সালামা (রাঃ) থেকে। আবু দাউদ নিজে এর কোনো মান উল্লেখ না করেই বর্ণনা করেছেন।"
          },
          {
            "en": "The second is firmly sound. Umm 'Atiyya reported that the Prophet ﷺ commanded the women to come out to the two Eid prayers, and she said, Messenger of Allah, one of us has no jilbāb; he answered, let her sister clothe her from her own jilbāb. It is recorded in Sahih Muslim (890), so it carries the collection's grade of ṣaḥīḥ, and al-Qurtubi cites it on this very verse. The word jilbāb here is the garment the verse names.",
            "bn": "দ্বিতীয় বর্ণনাটি নিঃসন্দেহে সহিহ। উম্মু আতিয়্যা (রাঃ) বলেন, নবী ﷺ নারীদের দুই ঈদের নামাজে বের হতে আদেশ করলেন। উম্মু আতিয়্যা বললেন, হে আল্লাহর রাসূল, আমাদের একজনের তো জিলবাব নেই। তিনি বললেন, তার বোন যেন নিজের জিলবাব থেকে তাকে পরিয়ে দেয়। হাদিসটি সহিহ মুসলিমে (৮৯০) আছে, তাই এটি ওই গ্রন্থের সহিহ মান বহন করে; আর কুরতুবী এই আয়াতের আলোচনাতেই এটি উদ্ধৃত করেছেন। এখানে জিলবাব বলতে সেই কাপড়ই বোঝানো হয়েছে, যার নাম আয়াতে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy at the Close",
          "bn": "শেষে এসে রহমত"
        },
        "p": [
          {
            "en": "The verse ends not on warning but on mercy: and ever is Allah Forgiving and Merciful. Ibn Kathir reads the forgiveness as covering what passed in the days before, when the women had no knowledge of this command. At-Tabari says the same and adds the mercy: that Allah would not punish them, after they repented and drew their garments close, for the covering they had left off earlier. As-Sa'di and al-Muyassar both tie the mercy to His having made the lawful and the forbidden clear.",
            "bn": "আয়াত শেষ হয় হুঁশিয়ারিতে নয়, রহমতে: আল্লাহ অতি ক্ষমাশীল, পরম দয়ালু। ইবন কাসীর এ ক্ষমাকে পড়েন আগের দিনগুলোর জন্য, যখন নারীরা এ আদেশ সম্পর্কে জানতেন না। তাবারী একই কথা বলেন আর যোগ করেন সেই দয়ার দিক: তারা তওবা করে চাদর টেনে নেওয়ার পর আগের না-ঢাকার জন্য আল্লাহ তাদের শাস্তি দেবেন না। সা'দী ও মুয়াসসার দুজনেই এ রহমতকে জুড়ে দেন আল্লাহর হালাল-হারাম স্পষ্ট করে দেওয়ার সঙ্গে।"
          },
          {
            "en": "Al-Qurtubi calls the closing words a reassurance to the women for having gone without the jilbāb before this was legislated. The command, in other words, opens a door rather than closing it. It does not reach back to condemn anyone for a past lived without it; it sets a way forward and wraps even that in forgiveness. A ruling that could have ended on fear ends instead on the two names of gentleness, and that is where the believer is meant to rest.",
            "bn": "কুরতুবী বলেন, শেষের কথাগুলো নারীদের জন্য সান্ত্বনা: এ বিধান আসার আগে তাঁরা যে জিলবাব ছাড়া চলেছেন, তার জন্য তাঁদের ভয়ের কিছু নেই। অর্থাৎ আদেশটি দরজা বন্ধ করে না, খুলে দেয়। জিলবাব ছাড়া কাটানো অতীতের জন্য কাউকে পেছন ফিরে দোষ দেয় না; সামনে চলার পথ দেখায়, আর সেই পথকেও ক্ষমায় মুড়ে দেয়। যে বিধান ভয়ের কথায় শেষ হতে পারত, তা শেষ হয়েছে কোমলতার দুটি নামে, আর মু'মিনের মন সেখানেই স্থির হওয়ার কথা।"
          }
        ]
      }
    ]
  },
  "33:63": {
    "sections": [
      {
        "h": {
          "en": "The Question Everyone Keeps Asking",
          "bn": "বারবার আসা সেই প্রশ্ন"
        },
        "p": [
          {
            "en": "Al-Ahzab has moved through the Confederates' siege, the Prophet's ﷺ household, the slander the believers suffered, and the hypocrites who spread rumours in Madinah. Now, near the surah's close, it turns to a question people keep bringing: yas'aluka an-nas 'ani s-sa'ah, the people ask you about the Hour. At-Tabari reads the plain sense: they are asking when it will stand, when the world will end and the reckoning begin. It is the oldest human curiosity, and the verse meets it head on. The timing of the end has always drawn the human mind, and here that pull is met not with data but with redirection.",
            "bn": "সূরা আল-আহযাব একে একে পার হয়ে এসেছে সম্মিলিত বাহিনীর অবরোধ, নবী ﷺ-এর পরিবারের প্রসঙ্গ, মু'মিনদের ওপর চাপানো অপবাদ, আর মদীনায় গুজব ছড়ানো মুনাফিকদের কথা। এবার সূরার শেষের দিকে এসে সে এমন এক প্রশ্নে ফেরে, যা মানুষ বারবার নিয়ে আসে: ইয়াসআলুকান নাসু আনিস সাআহ, লোকে তোমাকে ক্বিয়ামত সম্পর্কে জিজ্ঞেস করে। তাবারী সোজা অর্থটাই ধরেন: তারা জানতে চায়, ক্বিয়ামত কবে কায়েম হবে, কবে দুনিয়া শেষ হয়ে হিসাব শুরু হবে। এটা মানুষের সবচেয়ে পুরোনো কৌতূহল, আর আয়াত সরাসরি এর মুখোমুখি হয়। শেষ সময়ের প্রশ্ন চিরকাল মানুষের মনকে টেনেছে; এখানে সেই টানের জবাব আসে তথ্য দিয়ে নয়, প্রশ্নের মোড় ঘুরিয়ে দিয়ে।"
          },
          {
            "en": "The question is natural, but the answer the Prophet ﷺ is told to give refuses to satisfy its surface. He is not handed a date to pass on, nor a sign to compute. Instead he is told where the knowledge sits and then made to turn the question back on whoever brought it. The whole verse is three movements: its knowledge is only with Allah, what would make you perceive, and perhaps the Hour is near. Each movement takes something away from the questioner and gives back something harder to hold.",
            "bn": "প্রশ্নটা স্বাভাবিক, কিন্তু নবী ﷺ-কে যে জবাব দিতে বলা হয়, তা প্রশ্নের বাইরের চাহিদা মেটায় না। লোকদের জানিয়ে দেওয়ার মতো কোনো তারিখ তাঁকে দেওয়া হয়নি, হিসাব কষার মতো কোনো আলামতও নয়। বরং তাঁকে জানানো হয়, এ জ্ঞান কোথায় আছে; তারপর প্রশ্নটা যে এনেছে, তার দিকেই ফিরিয়ে দিতে বলা হয়। গোটা আয়াতটি তিন ধাপে চলে: তার জ্ঞান কেবল আল্লাহর কাছে; কিসে তোমাকে জানাবে; আর হয়তো ক্বিয়ামত কাছেই। প্রতিটি ধাপ প্রশ্নকারীর হাত থেকে কিছু একটা নিয়ে নেয়, আর বদলে এমন কিছু দেয়, যা বহন করা আরও কঠিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Was Really Asking",
          "bn": "আসলে কারা জিজ্ঞেস করত"
        },
        "p": [
          {
            "en": "Who was asking, and why? The commentators give a range rather than one answer. Al-Qurtubi ties the question to the people just condemned for hurting the Messenger ﷺ: threatened with punishment, they asked about the Hour out of disbelief and scorn, istib'adan wa takdhiban, hinting that it would never come at all. Al-Muyassar reads the same two motives into the asking, saying they raised it reckoning the Hour far-fetched and calling it a lie. The detail matters: the question is not posed in good faith but as a taunt, a way of brushing the warning aside.",
            "bn": "কারা জিজ্ঞেস করত, আর কেন? তাফসীরকারেরা এক জবাব দেন না, কয়েক রকম জবাব দেন। কুরতুবী প্রশ্নটাকে জুড়ে দেন সেই লোকদের সঙ্গে, রাসূল ﷺ-কে কষ্ট দেওয়ার জন্য একটু আগেই যাদের নিন্দা করা হয়েছে। শাস্তির হুমকি শুনে তারা ক্বিয়ামত নিয়ে প্রশ্ন তুলত অবিশ্বাস আর তাচ্ছিল্য থেকে, ইসতিবআদান ওয়া তাকযীবান; ভাবখানা এমন, যেন তা কোনোদিন আসবেই না। মুয়াসসারও এই প্রশ্নে একই দুটি উদ্দেশ্য দেখেন: তারা ক্বিয়ামতকে অসম্ভব মনে করত আর মিথ্যা বলত। খুঁটিনাটিটা গুরুত্বপূর্ণ: প্রশ্নটা সরল মনে করা হয়নি, করা হয়েছে খোঁচা দিতে, সতর্কবাণীটা উড়িয়ে দেওয়ার কৌশল হিসেবে।"
          },
          {
            "en": "As-Sa'di widens it further. Some asked while trying to hurry the Hour on, isti'jalan, as if daring the Lord who had promised it; others asked to deny it outright. Ma'arif al-Qur'an sets the mockery against the surah's warnings: factions who denied any resurrection would ask, when will this Day come? So the askers run from sneering deniers to the merely impatient, and the single answer is built to serve them all at once. A single answer meets the scoffer and the impatient alike, because both have fixed on the wrong thing, and the verse refuses to feed either appetite.",
            "bn": "সা'দী পরিসরটা আরও বড় করেন। কেউ কেউ জিজ্ঞেস করত ক্বিয়ামতকে তাড়াতাড়ি ডেকে এনে, ইসতিজালান; যেন যে রব এর ওয়াদা দিয়েছেন, তাঁকেই চ্যালেঞ্জ করছে। আবার কেউ জিজ্ঞেস করত একেবারে অস্বীকার করার জন্য। মাআরিফুল কুরআন এই ঠাট্টাকে সূরার সতর্কবাণীর পাশে রেখে দেখায়: যে দলগুলো পুনরুত্থান মানতই না, তারা বলত, এই দিন কবে আসবে? তাহলে প্রশ্নকারীদের মধ্যে ছিল বিদ্রূপকারী অস্বীকারকারী থেকে শুরু করে নিছক অধৈর্য মানুষ পর্যন্ত, আর একটিমাত্র জবাবেই সবার উত্তর হয়ে যায়। ঠাট্টাকারী আর অধৈর্য, দুজনের কাছেই জবাবটা পৌঁছায়, কারণ দুজনেই ভুল জিনিস নিয়ে পড়ে আছে, আর আয়াত কারও এই খিদে মেটাতে রাজি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Knowledge Is Only with Allah",
          "bn": "জ্ঞান কেবল আল্লাহর কাছে"
        },
        "p": [
          {
            "en": "Qul innama 'ilmuha 'inda-llah: say, its knowledge is only with Allah. The word innama fences the knowledge in, with Allah and nowhere else. At-Tabari puts it flatly: none knows the time of its standing but He. This is the same reply the Prophet ﷺ had already been given in Meccan revelation, Ibn Kathir notes, and the Medinan verse holds the line without moving it an inch. The timing is not a secret waiting to leak; it is knowledge that was never lodged with any creature.",
            "bn": "কুল ইন্নামা ইলমুহা ইনদাল্লাহ: বল, তার জ্ঞান কেবল আল্লাহর কাছে। ইন্নামা শব্দটি এই জ্ঞানের চারপাশে বেড়া দিয়ে দেয়: তা আছে শুধু আল্লাহর কাছে, আর কোথাও নয়। তাবারী সোজাসুজি বলেন: ক্বিয়ামত কবে কায়েম হবে, তিনি ছাড়া কেউ জানে না। ইবন কাসীর মনে করিয়ে দেন, মক্কী ওহিতেই নবী ﷺ-কে এই একই জবাব দেওয়া হয়েছিল; মাদানী এই আয়াত সেই সীমা থেকে এক চুলও সরেনি। সময়টা এমন কোনো গোপন কথা নয়, যা একদিন ফাঁস হয়ে যাবে। এ এমন জ্ঞান, যা কোনো সৃষ্টির কাছে কখনো রাখাই হয়নি।"
          },
          {
            "en": "Al-Qurtubi draws out what this does not mean. Allah's keeping the Hour hidden from His Prophet ﷺ takes nothing from his prophethood, for a prophet is not required to know the unseen except as Allah teaches him. Prophethood is about what God discloses, not about a stockpile of hidden facts the prophet carries. So the honest answer, I do not know, is not a crack in his authority. It is the exact shape of a servant who speaks only what he is given. To admit the limit is itself an act of worship, marking the line between the Creator who knows and the servant who waits.",
            "bn": "কুরতুবী খুলে বলেন, এর মানে কী নয়। আল্লাহ ক্বিয়ামতের সময় নবী ﷺ-এর কাছ থেকে গোপন রেখেছেন, এতে তাঁর নবুয়তের কিছুই কমে না; কারণ আল্লাহ যা শেখান তার বাইরে গায়েব জানা নবীর জন্য জরুরি নয়। নবুয়তের ভিত্তি আল্লাহ যা জানান তার ওপর, নবীর বুকে জমা থাকা গোপন তথ্যের ভাণ্ডারের ওপর নয়। তাই সৎ জবাবটা, 'আমি জানি না', তাঁর কর্তৃত্বে কোনো ফাটল ধরায় না। বরং এটাই সেই বান্দার আসল চেহারা, যে শুধু ততটুকুই বলে, যতটুকু তাকে দেওয়া হয়েছে। নিজের সীমা স্বীকার করাও এক ইবাদত। এতে স্রষ্টা আর বান্দার মাঝের রেখাটা স্পষ্ট হয়: তিনি জানেন, বান্দা অপেক্ষা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Will Make You Perceive?",
          "bn": "কিসে তোমাকে জানাবে"
        },
        "p": [
          {
            "en": "Wa ma yudrika: and what would make you perceive? At-Tabari glosses it as wa ma ash'araka, what would make you aware; al-Baghawi presses harder, asking what thing could possibly teach you the matter of the Hour and when it comes. You do not know it. The rhetoric lifts the question off the asker's lips and sets it back in his hands. The turn is gentle but total: curiosity is not answered, it is converted into self-examination. He came looking for a date; he leaves holding the fact that the very man he asked was told no more than he was.",
            "bn": "ওয়া মা ইউদরীকা: আর কিসে তোমাকে জানাবে? তাবারী এর ব্যাখ্যা দেন ওয়া মা আশআরাকা দিয়ে, অর্থাৎ কিসে তোমাকে টের পাওয়াবে। বাগভী আরও জোর দিয়ে বলেন: কোন জিনিস তোমাকে ক্বিয়ামতের ব্যাপারটা আর তা কবে আসবে, তা শেখাতে পারে? তুমি তা জানো না। প্রশ্নটা প্রশ্নকারীর মুখ থেকে তুলে নিয়ে কুরআন তার নিজের হাতেই ফিরিয়ে দেয়। মোড়টা কোমল, কিন্তু পুরোপুরি: কৌতূহলের জবাব দেওয়া হয় না, কৌতূহলকেই আত্মজিজ্ঞাসায় বদলে দেওয়া হয়। সে এসেছিল তারিখ জানতে; ফিরে যায় এই সত্য নিয়ে যে, যাঁকে সে জিজ্ঞেস করেছিল, তাঁকেও তার চেয়ে বেশি কিছু জানানো হয়নি।"
          },
          {
            "en": "The Prophet ﷺ lived this answer. In the hadith of Jibril, reported by Abu Hurayra in Sahih al-Bukhari, the angel came in human form and asked, when is the Hour? The Prophet ﷺ replied that the answerer knows no more about it than the questioner, and then recited that with Allah is the knowledge of the Hour, 31:34. The messenger who received the Qur'an answered the Hour's date with the same empty hands the verse hands every questioner. What he could give was its signs, not its day.",
            "bn": "নবী ﷺ নিজের জীবনেই এই জবাব দেখিয়ে গেছেন। আবু হুরায়রা (রাঃ) থেকে সহীহ বুখারীতে বর্ণিত জিবরীলের হাদিসে ফেরেশতা মানুষের রূপে এসে জিজ্ঞেস করলেন, ক্বিয়ামত কবে? নবী ﷺ বললেন, যাকে জিজ্ঞেস করা হচ্ছে, সে এ ব্যাপারে জিজ্ঞাসাকারীর চেয়ে বেশি জানে না। তারপর তিনি তিলাওয়াত করলেন: আল্লাহর কাছেই ক্বিয়ামতের জ্ঞান (৩১:৩৪)। যে রাসূলের ওপর কুরআন নাজিল হয়েছে, ক্বিয়ামতের তারিখের প্রশ্নে তিনিও খালি হাতে জবাব দিলেন, ঠিক যেমন আয়াত প্রতিটি প্রশ্নকারীকে খালি হাতে ফেরায়। তিনি দিতে পেরেছিলেন এর আলামত, এর দিনক্ষণ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Perhaps It Is Near",
          "bn": "হয়তো তা নিকটেই"
        },
        "p": [
          {
            "en": "La'alla s-sa'ata takunu qariban: perhaps the Hour is near. Having withheld the date, the verse does not leave the questioner with nothing. It presses a single certainty into his hand, nearness. At-Tabari paraphrases: perhaps its standing is near to you; its time has drawn close, the moment of its coming is at hand. The date stays sealed, but the direction is fixed. Whatever you cannot calculate, you have no warrant to assume is far. Certainty of nearness without certainty of timing is the exact posture the verse wants: sure that it comes, unsure when, and therefore never off guard.",
            "bn": "লাআল্লাস সাআতা তাকূনু কারীবা: হয়তো ক্বিয়ামত কাছেই। তারিখ গোপন রাখলেও আয়াত প্রশ্নকারীকে খালি হাতে ফেরায় না। তার হাতে একটি নিশ্চিত কথা গুঁজে দেয়: ক্বিয়ামত কাছে। তাবারী ব্যাখ্যা করেন: হয়তো তার কায়েম হওয়া তোমার খুব কাছে; তার সময় ঘনিয়ে এসেছে, আসার মুহূর্ত দোরগোড়ায়। তারিখ বন্ধ খামেই থেকে যায়, কিন্তু দিকটা ঠিক হয়ে আছে। যা আপনি হিসাব করতে পারেন না, তাকে দূরে ভেবে নেওয়ার কোনো অধিকার আপনার নেই। কাছে যে, তা নিশ্চিত; কবে, তা অজানা। আয়াত ঠিক এই অবস্থাই চায়: আসবে, এ ব্যাপারে নিশ্চিত; কবে, তা জানা নেই; তাই কখনো অসতর্ক থাকা চলে না।"
          },
          {
            "en": "Ibn Kathir reads qarib alongside the Qur'an's other announcements of nearness: the Hour has drawn near and the moon was split, 54:1; the reckoning for mankind has drawn near while they turn away heedless, 21:1; the command of Allah is coming, so do not seek to hasten it, 16:1. Laid together, these verses make nearness a settled theme, not a passing remark. The end is spoken of as something already leaning over the present, not a far horizon. The pattern is deliberate; the Qur'an returns to the theme of nearness so that no reader can file the Hour away as a distant rumour.",
            "bn": "ইবন কাসীর কারীব শব্দটিকে পড়েন কুরআনের নিকটত্ব ঘোষণার অন্য আয়াতগুলোর পাশে রেখে: ক্বিয়ামত ঘনিয়ে এসেছে আর চাঁদ ফেটে গেছে, ৫৪:১; মানুষের হিসাব ঘনিয়ে এসেছে অথচ তারা উদাসীন হয়ে মুখ ফিরিয়ে আছে, ২১:১; আল্লাহর হুকুম এসে পড়ছে, তাই তা তাড়াতাড়ি চেয়ো না, ১৬:১। পাশাপাশি রাখলে এই আয়াতগুলো নিকটত্বকে একটা থিতু বিষয় বানায়, কেবল চলতি কোনো মন্তব্য নয়। শেষকে এমনভাবে বলা হয় যেন তা এখনই বর্তমানের উপর ঝুঁকে আছে, দূরের কোনো দিগন্ত নয়। ধরনটা ইচ্ছাকৃত; কুরআন নিকটত্বের প্রসঙ্গে বারবার ফিরে আসে, যাতে কোনো পাঠক ক্বিয়ামতকে দূরের গুজব বলে তুলে রাখতে না পারে।"
          },
          {
            "en": "The Messenger ﷺ drew the nearness as a picture. In Sahih al-Bukhari, Sahl reports that he said, I have been sent, and the Hour, like these two, and he held up his index and middle fingers, stretching them out side by side. Al-Qurtubi cites the same hadith to gloss qarib. The gap between the Prophet's ﷺ mission and the end is the gap between two fingers raised together: not touching, yet with nothing of substance set between them.",
            "bn": "রাসূল ﷺ এই নৈকট্য একটি ছবি দিয়ে বুঝিয়েছেন। সহীহ বুখারীতে সাহল (রাঃ) বর্ণনা করেন, তিনি বলেছেন: আমি আর ক্বিয়ামত এই দুটির মতো পাঠানো হয়েছি। বলে তিনি শাহাদাত আঙুল আর মধ্যমা পাশাপাশি মেলে ধরলেন। কুরতুবী কারীব শব্দের ব্যাখ্যায় এই হাদিসটিই আনেন। নবী ﷺ-এর নবুয়ত আর দুনিয়ার শেষের মধ্যে দূরত্ব যেন পাশাপাশি তোলা দুই আঙুলের ফাঁক: একটি আরেকটিকে ছুঁয়ে নেই, তবু মাঝখানে উল্লেখ করার মতো কিছুই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Qarīban, Not Qarība",
          "bn": "কারীবান, কারীবা নয়"
        },
        "p": [
          {
            "en": "A small grammatical knot sits in the word qariban. The Hour, as-sa'ah, is feminine, so the ear expects qariba; the Qur'an says qariban, as though the subject were masculine. Al-Qurtubi explains that the feminine ending is dropped because as-sa'ah is being treated by its sense as al-yawm, the Day. He sets beside it a parallel: the mercy of Allah is near, qarib, to the doers of good, 7:56, where mercy, rahmah, also takes the masculine form because it is read in the sense of pardon.",
            "bn": "কারীবান শব্দে ছোট্ট একটা ব্যাকরণের গিঁট আছে। সাআহ শব্দটি স্ত্রীবাচক, তাই কান আশা করে কারীবা; কুরআন বলে কারীবান, যেন কর্তাটি পুংবাচক। কুরতুবী ব্যাখ্যা করেন, স্ত্রীবাচক শেষাংশ ফেলে দেওয়া হয়েছে, কারণ সাআহকে এখানে অর্থের দিক থেকে ইয়াওম তথা দিন ধরা হচ্ছে। তিনি পাশে রাখেন একটি নজির: আল্লাহর রহমত সৎকর্মশীলদের কাছে কারীব তথা নিকটবর্তী, ৭:৫৬, যেখানে রহমতও পুংবাচক রূপ নেয়, কারণ তা মাফের অর্থে পড়া হয়।"
          },
          {
            "en": "Al-Qurtubi notes another reading too: some take la'alla in the sense of a wish, as if to say, would that the Hour were near. He leaves both on the table without forcing a choice, which is how a careful reader keeps a genuine ambiguity open. Either way the drift is the same. Whether the verse states the nearness or longs for it, it will not let the Hour be pushed off to a comfortable distance. Holding the two readings side by side is itself a lesson in restraint before the text, refusing to flatten what the language leaves open.",
            "bn": "কুরতুবী আরেকটি ব্যাখ্যাও উল্লেখ করেন: কেউ কেউ লাআল্লা শব্দটিকে আকাঙ্ক্ষার অর্থে নেন, যেন বলা হচ্ছে, আহা, ক্বিয়ামত যদি কাছে হতো! তিনি দুটো ব্যাখ্যাই রেখে দেন, কোনো একটি বেছে নিতে জোর করেন না। সতর্ক পাঠক এভাবেই সত্যিকারের দ্ব্যর্থতাকে খোলা রাখেন। যেভাবেই ধরুন, মূল কথা একই। আয়াত নিকটত্বের খবর দিক বা তার জন্য আকুতি জানাক, ক্বিয়ামতকে নিশ্চিন্ত কোনো দূরত্বে ঠেলে রাখতে দেয় না। দুটি ব্যাখ্যা পাশাপাশি রেখে দেওয়াটাও কুরআনের সামনে সংযমের শিক্ষা: ভাষা যা খোলা রেখেছে, তাকে জোর করে এক অর্থে বেঁধে না ফেলা।"
          }
        ]
      },
      {
        "h": {
          "en": "Readiness at Every Moment",
          "bn": "প্রতি মুহূর্তে প্রস্তুতি"
        },
        "p": [
          {
            "en": "Why hide the date at all? Al-Qurtubi gives the reason in a line: the Hour's time was concealed so that the servant would stay ready for it at every moment. A known date would invite delay, repentance deferred to the final year, worship saved for the end. A hidden date closes that escape. If it could fall today, then today is the only safe time to be prepared, and so is every day after it. The hidden date is thus a mercy, not a withholding; it keeps the heart awake where a fixed deadline would have lulled it to sleep.",
            "bn": "তারিখটা আড়ালে রাখা হলো কেন? কুরতুবী এক কথায় কারণ দেন: ক্বিয়ামতের সময় গোপন রাখা হয়েছে যাতে বান্দা প্রতি মুহূর্তে তার জন্য প্রস্তুত থাকে। জানা তারিখ দেরিকে ডেকে আনত। তওবা ঠেলে দেওয়া হতো শেষ বছরটার জন্য, ইবাদত জমিয়ে রাখা হতো একদম শেষে। গোপন তারিখ সেই পালানোর পথ বন্ধ করে দেয়। যদি তা আজই নেমে আসতে পারে, তবে প্রস্তুত থাকার একমাত্র নিরাপদ সময় আজকেই, আর তার পরের প্রতিটি দিনও। তাই গোপন তারিখ এক রহমত, কিছু আটকে রাখা নয়; নির্ধারিত সময়সীমা যেখানে অন্তরকে ঘুম পাড়িয়ে দিত, সেখানে এটি অন্তরকে জাগিয়ে রাখে।"
          },
          {
            "en": "Ma'arif al-Qur'an reaches the same place from the reader's side: because nobody knows the exact day, everyone should live as though it were very close. It adds a further thought, that set against the Hour's own terrors, the whole of worldly life, even stretched across thousands of years, will later look brief, and so the Hour will seem to have been near all along. Distance in time is not distance in weight. Measured against what follows, the longest life is short. Felt rightly, this shrinks the grip of the world and enlarges the weight of what waits beyond it.",
            "bn": "মাআরিফুল কুরআন পাঠকের দিক থেকে একই জায়গায় পৌঁছায়: যেহেতু সঠিক দিন কেউ জানে না, সবার উচিত এমনভাবে বাঁচা যেন তা একেবারে কাছে। সে আরেকটি কথা যোগ করে। ক্বিয়ামতের নিজের ভয়াবহতার সামনে দাঁড় করালে গোটা দুনিয়ার জীবন, হাজার হাজার বছর ধরে বিস্তৃত হলেও, পরে সংক্ষিপ্ত মনে হবে, আর তাই ক্বিয়ামতকে মনে হবে সারাক্ষণই কাছে ছিল। সময়ের দূরত্ব ওজনের দূরত্ব নয়। যা আসছে তার সঙ্গে মাপলে দীর্ঘতম জীবনও সংক্ষিপ্ত। ঠিকভাবে অনুভব করলে এটি দুনিয়ার দখল ছোট করে দেয় আর তার ওপারে যা অপেক্ষা করছে তার ওজন বড় করে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Better Question",
          "bn": "আসল প্রশ্নটা অন্য"
        },
        "p": [
          {
            "en": "As-Sa'di turns the whole exchange on its edge. The bare arrival of the Hour, near or far, carries no benefit in itself; nothing hangs on the date as such. What carries weight is the other question entirely: does a servant earn punishment, or earn reward? That, he says, is what the verses go on to answer, describing who deserves the Fire and who deserves the garden. The questioner asked about a time; the Qur'an redirects him to a state. Timing is a fact about the world; readiness is a fact about you, and only the second is within your reach to change.",
            "bn": "সা'দী পুরো আলাপটাকে অন্য দিক থেকে দেখেন। ক্বিয়ামত কাছে আসুক বা দূরে, শুধু তার আসার খবরে নিজে থেকে কোনো লাভ নেই; তারিখের ওপর কিছুই নির্ভর করে না। আসল গুরুত্ব সম্পূর্ণ আরেকটি প্রশ্নের: বান্দা শাস্তির যোগ্য হচ্ছে, নাকি পুরস্কারের? তিনি বলেন, পরের আয়াতগুলো ঠিক এরই জবাব দেয়, কে জাহান্নামের উপযুক্ত আর কে জান্নাতের, তা বলে দিয়ে। প্রশ্নকারী জানতে চেয়েছিল সময়; কুরআন তাকে নিয়ে গেল তার নিজের অবস্থার দিকে। সময়টা দুনিয়ার ব্যাপার; প্রস্তুতি আপনার নিজের ব্যাপার, আর বদলানো আপনার হাতে আছে শুধু দ্বিতীয়টিই।"
          },
          {
            "en": "That is why the verse unsettles rather than informs. It takes away a date the asker was never going to get, and hands back a summons he cannot shelve. The Hour may be near; you will not be told when; therefore live now as the ready live. Read on from here and the surah names the unready, the disbelievers cursed and awaiting the Fire, 33:64, but the verse itself asks only this of its reader: not to date the end, but to meet it prepared. Nothing here invites fear for its own sake; the aim is a life arranged now around a meeting that is certain to come.",
            "bn": "এ কারণেই আয়াতটি তথ্য দেয় না, নাড়া দেয়। প্রশ্নকারী যে তারিখ কোনোদিন পেতই না, তা সরিয়ে নেয়, আর বদলে দেয় এমন এক ডাক, যা ফেলে রাখা যায় না। ক্বিয়ামত হয়তো কাছে; কবে, তা জানানো হবে না; তাই এখনই প্রস্তুত মানুষের মতো জীবন কাটান। আরও পড়লে দেখবেন, সূরা অপ্রস্তুতদের কথা বলে: কাফিররা অভিশপ্ত, তাদের জন্য অপেক্ষা করছে জাহান্নাম (৩৩:৬৪)। কিন্তু এই আয়াত পাঠকের কাছে শুধু এটুকুই চায়: শেষের তারিখ বের করা নয়, প্রস্তুত হয়ে তার মুখোমুখি হওয়া। এখানে ভয় দেখানোর জন্য ভয় দেখানো হয়নি; লক্ষ্য হলো, যে সাক্ষাৎ নিশ্চিত আসবে, তাকে সামনে রেখে এখনই জীবন গুছিয়ে নেওয়া।"
          }
        ]
      }
    ]
  },
  "33:70": {
    "sections": [
      {
        "h": {
          "en": "Late Commands in al-Ahzab",
          "bn": "আল-আহযাবের শেষের আদেশ"
        },
        "p": [
          {
            "en": "Surah al-Ahzab is a surah of pressures: the siege of the confederates, the rumours and annoyances spread by hypocrites, verses answering tongues that wounded. Near its end, in 33:69, the believers are warned not to be like those who harmed Musa (AS) with what they said, and whom Allah cleared of what they alleged. Immediately after comes 33:70, addressed to those who believe: have taqwa of Allah, and speak qawlan sadida — straight speech.",
            "bn": "সূরা আল-আহযাব নানা চাপের সূরা: সম্মিলিত বাহিনীর অবরোধ, মুনাফিকদের ছড়ানো গুজব আর জ্বালাতন, মানুষের কটু কথার জবাবে নাজিল হওয়া আয়াত। সূরার শেষ দিকে ৩৩:৬৯ আয়াতে মুমিনদের সাবধান করা হয়েছে: তোমরা তাদের মতো হয়ো না, যারা কথা দিয়ে মূসা (আঃ)-কে কষ্ট দিয়েছিল; আল্লাহ তাঁকে তাদের অপবাদ থেকে নির্দোষ প্রমাণ করেছিলেন। ঠিক তার পরেই আসে ৩৩:৭০ আয়াত, মুমিনদের উদ্দেশে: আল্লাহর তাকওয়া অবলম্বন করো, আর বলো কাওলান সাদীদা, অর্থাৎ সোজা, লক্ষ্যভেদী কথা।"
          },
          {
            "en": "The placement is the first commentary. After chapters of damage done by talk — the taunts during the siege, the abuse aimed at a prophet one verse earlier — the surah's closing counsel to believers concerns the tongue. Taqwa and speech are issued in one breath, as one command with two faces, because most of what conscience must govern in an ordinary day passes through words.",
            "bn": "আয়াতটি কোথায় বসেছে, সেটাই এর প্রথম তাফসীর। গোটা সূরাজুড়ে কথার ক্ষতি দেখা গেছে: অবরোধের দিনগুলোর বিদ্রূপ, এক আয়াত আগে একজন নবীকে নিয়ে কটূক্তি। এরপর মুমিনদের জন্য সূরার শেষ উপদেশটি এসেছে জিভ নিয়েই। তাকওয়া আর কথার আদেশ এসেছে এক নিঃশ্বাসে, যেন একই আদেশের দুই পিঠ। কারণ সাধারণ একটি দিনে বিবেককে যা কিছু সামলাতে হয়, তার বেশির ভাগই আসে মুখের কথার পথ ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Arrow Aimed True",
          "bn": "লক্ষ্যভেদী তীর"
        },
        "p": [
          {
            "en": "Sadid comes from a root whose verb is used for aiming an arrow so that it strikes the mark. Qawl sadid is speech with that quality: true, first of all — the most common gloss of the mufassirun — but also straight in its aim: accurate, fitting the occasion, free of crookedness, exaggeration and spin. A sentence can be technically true and still bent, implying what is false or wounding what needed healing. Sadid excludes the bend, not only the lie.",
            "bn": "সাদীদ শব্দের মূলধাতু থেকে যে ক্রিয়া আসে, তা বলা হয় তীর এমনভাবে তাক করাকে, যাতে ঠিক নিশানায় লাগে। কাওলে সাদীদ মানে এই গুণের কথা। প্রথমত তা সত্য; মুফাসসিরগণ সবচেয়ে বেশি এই ব্যাখ্যাই দিয়েছেন। সেই সঙ্গে নিশানাতেও সোজা: নির্ভুল, পরিস্থিতির উপযোগী, বাঁকা কথা, বাড়াবাড়ি আর ঘুরিয়ে-প্যাঁচিয়ে বলা থেকে মুক্ত। কোনো কথা আক্ষরিক অর্থে সত্য হয়েও বাঁকা হতে পারে: হয়তো তা মিথ্যার ইঙ্গিত দেয়, কিংবা যেখানে মলম দরকার ছিল সেখানে আঘাত করে। সাদীদ শুধু মিথ্যাকে নয়, এই বাঁককেও বাদ দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Commands, Two Gifts",
          "bn": "দুই আদেশ, দুই উপহার"
        },
        "p": [
          {
            "en": "The next verse states the return on obedience. For the two commands of 33:70 — taqwa and straight speech — 33:71 announces two gifts: He will set your deeds right for you, and He will forgive you your sins; and whoever obeys Allah and His Messenger has won a great triumph. The commentators dwell on the order of cause and effect: speech is placed upstream of deeds, so that straightening the tongue becomes a means by which Allah straightens the rest of a life.",
            "bn": "পরের আয়াতটি আনুগত্যের প্রতিদান ঘোষণা করে। ৩৩:৭০ আয়াতের দুই আদেশ, তাকওয়া আর সোজা কথা, এর বিনিময়ে ৩৩:৭১ আয়াতে দুটি উপহারের ঘোষণা: তিনি তোমাদের আমলগুলো শুধরে দেবেন এবং তোমাদের গুনাহ মাফ করে দেবেন; আর যে আল্লাহ ও তাঁর রাসূলের আনুগত্য করে, সে মহাসাফল্য অর্জন করেছে। মুফাসসিরগণ কারণ আর ফলের এই ক্রমটি নিয়ে বিশেষভাবে ভাবেন: কথাকে রাখা হয়েছে আমলের উজানে। ফলে জিভ সোজা করাটাই হয়ে ওঠে সেই উপায়, যার মাধ্যমে আল্লাহ জীবনের বাকিটাও সোজা করে দেন।"
          },
          {
            "en": "The logic is observable. Words are commitments that deeds must then chase: an exaggerated promise manufactures a future failure, while an honest one sizes the deed to fit. Words are also the deeds' accountants — a person who will not lie about what he did acquires a reason not to do what he would have to lie about. Guard the report, and the behaviour reported on begins to reform. The verse compresses that mechanism into a divine promise.",
            "bn": "যুক্তিটা চোখেই দেখা যায়। কথা একধরনের অঙ্গীকার, যার পেছনে পরে আমলকে ছুটতে হয়। বাড়িয়ে দেওয়া প্রতিশ্রুতি ভবিষ্যতের একটা ব্যর্থতা আগেই তৈরি করে রাখে; আর সৎ প্রতিশ্রুতি কাজটাকে সামর্থ্যের মাপে বেঁধে দেয়। কথা আমলের হিসাবরক্ষকও। যে মানুষ নিজের কাজ নিয়ে মিথ্যা বলবে না, সে এমন কাজ না করার একটা কারণ পেয়ে যায়, যা করলে পরে তাকে মিথ্যা বলতে হতো। নিজের কাজের বিবরণ সত্য রাখুন, দেখবেন কাজটাই শুধরাতে শুরু করেছে। আয়াতটি এই পুরো নিয়মকে অল্প কথায় আল্লাহর এক প্রতিশ্রুতিতে বেঁধে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Speech Under Watch",
          "bn": "নজরদারিতে থাকা কথা"
        },
        "p": [
          {
            "en": "The Quran's wider teaching on the tongue frames the command. In 50:18 no word is uttered without a ready watcher recording it. In 14:24-25 a good word is likened to a good tree, its root firm and its branches in the sky, giving its fruit all the time by its Lord's permission. In 17:53 the servants are told to say that which is best, because Shaytan sows discord between them — degraded speech is named as his working surface among people.",
            "bn": "জিভ নিয়ে কুরআনের বৃহত্তর শিক্ষার মধ্যেই এই আদেশটিকে বুঝতে হয়। ৫০:১৮ আয়াতে বলা হয়েছে, মানুষ যে কথাই উচ্চারণ করে, তা লিখে রাখার জন্য একজন প্রহরী প্রস্তুত থাকে। ১৪:২৪-২৫ আয়াতে ভালো কথাকে তুলনা করা হয়েছে ভালো গাছের সঙ্গে: তার শিকড় মজবুত, ডালপালা আকাশে, রবের অনুমতিতে সব সময় ফল দেয়। ১৭:৫৩ আয়াতে বান্দাদের বলা হয়েছে, যা সবচেয়ে উত্তম তা-ই বলতে, কারণ শয়তান তাদের মধ্যে বিভেদ ছড়ায়। অর্থাৎ মন্দ কথাই মানুষের মাঝে শয়তানের কাজের জমি।"
          },
          {
            "en": "And in 2:83, among the covenant obligations taken from the Children of Israel, alongside worship of Allah and kindness to parents, stands the command to speak to people what is good. The instruction sits in a list of foundational duties, addressed to speech toward people in general, not believers only. Straight, good speech in the Quran is not etiquette; it is covenant material, listed with prayer and zakah.",
            "bn": "আর ২:৮৩ আয়াতে বনী ইসরাঈলের কাছ থেকে যে অঙ্গীকার নেওয়া হয়েছিল, তার দায়গুলোর মধ্যে আল্লাহর ইবাদত আর পিতামাতার প্রতি সদাচরণের পাশেই আছে এই আদেশ: মানুষের সঙ্গে ভালো কথা বলো। নির্দেশটি এসেছে মৌলিক দায়িত্বের তালিকায়, আর তা সাধারণভাবে সব মানুষের সঙ্গে কথা বলা নিয়ে, শুধু মুমিনদের সঙ্গে নয়। কুরআনে সোজা, ভালো কথা নিছক আদবকায়দা নয়; তা অঙ্গীকারেরই অংশ, নামাজ আর যাকাতের সঙ্গে একই তালিকায় রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prophet's ﷺ Guarantees",
          "bn": "নবী ﷺ-এর জামিন"
        },
        "p": [
          {
            "en": "Al-Bukhari relates from Abu Hurayrah (RA): whoever believes in Allah and the Last Day, let him speak good or keep silent. The hadith gives speech a default setting — silence — that a word must justify leaving. Al-Bukhari also relates from Sahl ibn Sa'd (RA) that the Prophet ﷺ said: whoever guarantees me what is between his jaws and what is between his legs, I guarantee him Paradise. Of the body's members, the tongue is one of the two whose discipline carries that promise.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন: যে আল্লাহ ও শেষ দিবসে বিশ্বাস রাখে, সে যেন ভালো কথা বলে, নয়তো চুপ থাকে। এই হাদিস অনুযায়ী কথার স্বাভাবিক অবস্থা হলো নীরবতা; সেই নীরবতা ভাঙার কারণ প্রতিটি কথাকেই দেখাতে হয়। ইমাম বুখারী সাহল ইবনে সা'দ (রাঃ) থেকেও বর্ণনা করেন, নবী ﷺ বলেছেন: যে আমাকে তার দুই চোয়ালের মাঝের অঙ্গ আর দুই পায়ের মাঝের অঙ্গের জামিন দেবে, আমি তার জন্য জান্নাতের জামিন হব। শরীরের অঙ্গগুলোর মধ্যে যে দুটির সংযমের সঙ্গে এই প্রতিশ্রুতি জড়িত, জিভ তার একটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Straightening the Day's Words",
          "bn": "দিনের কথা সোজা করা"
        },
        "p": [
          {
            "en": "The verse converts into concrete checks. Before repeating a report: is it verified, or merely interesting? Before a promise: is it sized to what I will actually do? In anger: is this sentence aimed at the problem or at the person? Online, where words travel farthest and cost least, qawl sadid means writing about opponents only what could be defended in their presence. Each check is small; the verse's promise attaches to their accumulation.",
            "bn": "আয়াতটিকে কয়েকটি বাস্তব যাচাইয়ে রূপ দেওয়া যায়। কোনো খবর ছড়ানোর আগে: এটা কি যাচাই করা, নাকি শুধু মুখরোচক? কথা দেওয়ার আগে: আমি সত্যিই যতটুকু করব, কথাটা কি সেই মাপে? রাগের সময়: এই কথার নিশানা কি সমস্যাটা, নাকি মানুষটা? অনলাইনে কথা সবচেয়ে দূরে যায়, অথচ খরচ সবচেয়ে কম। সেখানে কাওলে সাদীদ মানে প্রতিপক্ষ সম্পর্কে শুধু সেটুকুই লেখা, যা তাদের সামনে দাঁড়িয়েও সমর্থন করা যেত। প্রতিটি যাচাই ছোট, কিন্তু আয়াতের প্রতিশ্রুতি জড়িয়ে আছে এই ছোট ছোট যাচাই জমে ওঠার সঙ্গে।"
          },
          {
            "en": "The verse after the promise sets the stakes: 33:72 describes the amanah, the trust offered to the heavens, the earth and the mountains, which they declined and man carried. Speech is part of that carried trust, every word an act inside it. Taqwa of Allah and straightness of speech, kept together as the verse keeps them, are how an ordinary talkative human being carries the trust safely — with deeds set right and sins forgiven along the way.",
            "bn": "প্রতিশ্রুতির পরের আয়াতটি দেখিয়ে দেয়, বিষয়টা কত বড়: ৩৩:৭২ আয়াতে আছে আমানতের কথা। সেই আমানত পেশ করা হয়েছিল আসমান, জমিন আর পাহাড়ের কাছে; তারা তা নিতে অস্বীকার করল, আর মানুষ তা বহন করল। কথাও সেই আমানতেরই অংশ, প্রতিটি শব্দ তার ভেতরের একেকটি কাজ। আল্লাহর তাকওয়া আর সোজা কথা, আয়াত যেভাবে দুটিকে একসঙ্গে রেখেছে, সেভাবে একসঙ্গে ধরে রাখলেই একজন সাধারণ, কথা বলতে ভালোবাসা মানুষ আমানতটি নিরাপদে বয়ে নিতে পারে; পথে পথে তার আমল শুধরে যায়, গুনাহ মাফ হয়।"
          }
        ]
      }
    ]
  }
});
