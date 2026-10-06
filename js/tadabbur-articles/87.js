/**
 * Tadabbur long-form articles — surah 87.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "87:10": {
    "sections": [
      {
        "h": {
          "en": "A Promise in Three Words",
          "bn": "তিন শব্দের প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Sa-yadhdhakkaru man yakhsha: he who fears will be reminded. The verse is three Arabic words long, and it arrives directly after a command of four words in 87:9, fa-dhakkir in nafa'ati adh-dhikra, so remind, if the reminder benefits. The command is addressed to the Prophet ﷺ, yet the verse that answers it does not describe the person who reminds. It describes the person who receives. Before anything else, the surah turns from the speaker to the listener, and asks what kind of heart the reminder needs.",
            "bn": "সাইয়াযযাক্কারু মান ইয়াখশা: যে ভয় করে, সে উপদেশ গ্রহণ করবে। আরবিতে আয়াতটির শব্দ মাত্র তিনটি। ঠিক আগে ৮৭:৯ আয়াতে চারটি শব্দের এক আদেশ: ফাযাক্কির ইন নাফাআতিয যিকরা, কাজেই উপদেশ দাও, যদি উপদেশ উপকার দেয়। আদেশটা নবী ﷺ-এর প্রতি। কিন্তু তার জবাবে যে আয়াত এল, তা উপদেশদাতার কথা বলে না। বলে গ্রহণকারীর কথা। বক্তা থেকে সূরা মুখ ফেরায় শ্রোতার দিকে, আর জানতে চায়, উপদেশ ধারণ করতে কেমন অন্তর লাগে।"
          },
          {
            "en": "The root dh-k-r carries the link. It appears twice in 87:9, in the command dhakkir and in the noun adh-dhikra, and once more here, in yadhdhakkaru. The reminder is given in the first verse and taken in the next. At-Tabari reads the connection in exactly those terms: whoever fears Allah will take the reminder, O Muhammad, when you remind those whom I have commanded you to remind. On his reading the verse is the other half of the command, telling the Prophet ﷺ where his reminding will bear fruit.",
            "bn": "দুই আয়াতকে জুড়ে রেখেছে যাল-কাফ-রা ধাতু। ৮৭:৯ আয়াতে তা এসেছে দুবার, আদেশ যাক্কির আর বিশেষ্য আয-যিকরা রূপে। এখানে আরেকবার, ইয়াযযাক্কারু শব্দে। এক আয়াতে উপদেশ দেওয়া হয়, পরের আয়াতে তা নেওয়া হয়। তাবারী সংযোগটা ঠিক এভাবেই পড়েন। আল্লাহ বলছেন: হে মুহাম্মাদ, যাদের উপদেশ দিতে তোমাকে আদেশ করেছি তাদের যখন উপদেশ দেবে, তখন তা গ্রহণ করবে সে, যে আল্লাহকে ভয় করে। তাঁর পাঠে আয়াতটি আদেশেরই বাকি অর্ধেক। নবী ﷺ-কে জানিয়ে দেয়, তাঁর উপদেশ কোথায় ফল দেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear Aimed at Allah",
          "bn": "ভয়ের লক্ষ্য আল্লাহ"
        },
        "p": [
          {
            "en": "The Arabic gives yakhsha no object. It says only man yakhsha, whoever fears, and leaves the reader to ask: fears what? Each commentator fetched for this verse answers, and the answers overlap without being identical. Al-Baghawi supplies the object in two words: Allah, Mighty and Majestic. The Muyassar says whoever fears his Lord. Al-Qurtubi glosses it with two verbs, whoever is mindful of Allah, yattaqi, and fears Him. In each of these the fear has Allah as its object.",
            "bn": "আরবিতে ইয়াখশা ক্রিয়ার কোনো কর্ম বলা নেই। শুধু মান ইয়াখশা, যে ভয় করে। পাঠকের মনে প্রশ্ন জাগে: কীসের ভয়? এ আয়াতের জন্য সংগৃহীত প্রতিটি তাফসীর এর উত্তর দেয়। উত্তরগুলো কাছাকাছি, তবে হুবহু এক নয়। বাগাভী দুই শব্দে কর্মটি বসিয়ে দেন: মহিমান্বিত ও মহান আল্লাহ। মুয়াসসার বলে, যে তার রবকে ভয় করে। কুরতুবী দুটি ক্রিয়া দিয়ে ব্যাখ্যা করেন: যে আল্লাহর তাকওয়া অবলম্বন করে, ইয়াত্তাকী, আর তাঁকে ভয় করে। এদের প্রত্যেকের কাছে ভয়ের লক্ষ্য আল্লাহ।"
          },
          {
            "en": "At-Tabari adds a second clause: whoever fears Allah and fears His punishment, yakhafu 'iqabahu. Ibn Kathir, in the Arabic and in the English abridgement alike, places the fear in the heart and pairs it with knowledge: a person whose heart fears Allah and who knows that he will meet Him. As-Sa'di pairs it with a different knowledge, the servant's knowledge that Allah will requite him for his deeds. So three readings add something to the bare fear: a punishment, a meeting, a recompense.",
            "bn": "তাবারী আরেকটি অংশ জুড়ে দেন: যে আল্লাহকে ভয় করে এবং তাঁর শাস্তিকে ভয় করে, ইয়াখাফু ইকাবাহু। ইবন কাসীর আরবি মূল আর ইংরেজি সংক্ষেপ দুই জায়গাতেই ভয়কে রাখেন অন্তরে, আর তার সঙ্গে জোড়েন এক জ্ঞান: যার অন্তর আল্লাহকে ভয় করে এবং যে জানে তাঁর সঙ্গে তার সাক্ষাৎ হবে। সা'দী জোড়েন ভিন্ন এক জ্ঞান। বান্দা জানে, আল্লাহ তার আমলের প্রতিদান দেবেন। ফলে তিনটি পাঠ খালি ভয়ের সঙ্গে কিছু যোগ করে: শাস্তি, সাক্ষাৎ, প্রতিদান।"
          },
          {
            "en": "None of these is set against the others in the texts, and this article does not choose among them. What they share is worth noticing. Not one commentator here defines the fear as a mood. Each ties it to Allah, and several tie it to something the one who fears knows: that a meeting is coming, that deeds will be answered. Read this way, the one who fears in 87:10 is first of all someone who has taken a fact seriously, and the feeling follows from the fact.",
            "bn": "তাফসীরগুলোতে এই পাঠগুলোকে পরস্পরের বিপরীতে দাঁড় করানো হয়নি, আর এ লেখাও এদের মধ্যে কোনোটা বেছে নেয় না। তবে এদের মিলটুকু খেয়াল করার মতো। এখানে কোনো মুফাসসিরই ভয়কে নিছক মনের অবস্থা বলে সংজ্ঞায়িত করেননি। প্রত্যেকে একে আল্লাহর সঙ্গে বেঁধেছেন। কয়েকজন আবার বেঁধেছেন এমন কিছুর সঙ্গে, যা ভয়কারী জানে: সাক্ষাৎ আসছে, আমলের জবাব দিতে হবে। এভাবে পড়লে ৮৭:১০ আয়াতের ভয়কারী আগে এমন একজন, যে একটি সত্যকে গুরুত্ব দিয়েছে। অনুভূতি আসে সেই সত্য থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Being Reminded Does",
          "bn": "উপদেশ নেওয়ার চেহারা"
        },
        "p": [
          {
            "en": "Sa-yadhdhakkaru is glossed most often with one word. Ibn Kathir, al-Baghawi and the Muyassar all give sa-yatta'izu, he will take admonition, will be moved by the warning. Ibn Kathir names its source: he will take admonition from what you convey, O Muhammad. The reminder in this reading is not new information. It is a message already delivered, and the verse is about whether it is taken in. The English abridgement of Ibn Kathir has him receive admonition from what the Prophet ﷺ conveys to him.",
            "bn": "সাইয়াযযাক্কারু শব্দের ব্যাখ্যায় সবচেয়ে বেশি এসেছে একটি শব্দ। ইবন কাসীর, বাগাভী আর মুয়াসসার তিনজনই বলেন সাইয়াত্তাইযু: সে নসিহত গ্রহণ করবে, সতর্কবাণীতে নাড়া খাবে। ইবন কাসীর উৎসটাও বলে দেন। হে মুহাম্মাদ, তুমি যা পৌঁছে দাও, তা থেকেই সে নসিহত নেবে। এ পাঠে উপদেশ নতুন কোনো খবর নয়। বার্তা আগেই পৌঁছে গেছে, আয়াতের প্রশ্ন হলো তা ভেতরে নেওয়া হয় কি না। ইবন কাসীরের ইংরেজি সংক্ষেপেও আছে, নবী ﷺ যা পৌঁছে দেন, তা থেকে সে উপদেশ গ্রহণ করবে।"
          },
          {
            "en": "As-Sa'di opens his comment by naming the group: as for those who benefit, al-muntafi'un, He mentions them in His words, he who fears will be reminded. He then states what the benefit looks like. Fear of Allah, together with the servant's knowledge that Allah will requite his deeds, obliges the servant to hold back from sins and to strive in good works. For as-Sa'di, then, being reminded is measured in conduct: what a person stops doing, and what a person sets out to do.",
            "bn": "সা'দী তাঁর ব্যাখ্যা শুরু করেন দলটির নাম দিয়ে: যারা উপকৃত হয়, আল-মুনতাফিঊন, তাদের কথা আল্লাহ বলেছেন এই বাণীতে, যে ভয় করে সে উপদেশ গ্রহণ করবে। তারপর তিনি বলেন উপকারটা দেখতে কেমন। আল্লাহর ভয়, সঙ্গে এই জ্ঞান যে তিনি আমলের প্রতিদান দেবেন, বান্দাকে গুনাহ থেকে বিরত থাকতে আর নেক কাজে চেষ্টা করতে বাধ্য করে। সা'দীর কাছে তাই উপদেশ নেওয়ার মাপকাঠি আচরণ। কী ছাড়া হলো, আর কী শুরু হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Fear and Not Hope",
          "bn": "আশা নয়, ভয় কেন"
        },
        "p": [
          {
            "en": "Al-Qurtubi records an observation from al-Mawardi that meets a question a reader may well ask: why does the verse tie the reminder to fear? Al-Mawardi says that the one who hopes, man yarjuhu, may also be reminded. But the reminder of the one who fears is more effective, ablagh, than the reminder of the one who hopes, and so Allah attached it to fear rather than to hope, even though it attaches to both fear and hope.",
            "bn": "কুরতুবী মাওয়ারদীর একটি পর্যবেক্ষণ উদ্ধৃত করেন, যা পাঠকের মনে স্বাভাবিকভাবে জাগা এক প্রশ্নের জবাব দেয়: আয়াত উপদেশকে ভয়ের সঙ্গেই বাঁধল কেন? মাওয়ারদী বলেন, যে আশা করে, মান ইয়ারজূহু, সেও উপদেশ গ্রহণ করতে পারে। তবে ভয়কারীর উপদেশ গ্রহণ আশাবাদীর চেয়ে বেশি কার্যকর, আবলাগ। তাই আল্লাহ একে আশার বদলে ভয়ের সঙ্গে জুড়েছেন, যদিও উপদেশের সম্পর্ক ভয় আর আশা দুটোর সঙ্গেই।"
          },
          {
            "en": "Two things follow from his wording, and both are his, not this article's. First, hope is not excluded: the reminder can reach a hopeful heart too. Second, the choice of fear in the verse is a matter of which works more strongly, not of which alone is valid. Al-Mawardi does not say why fear reaches deeper, and the fetched texts give no reason, so this article leaves the point where he left it.",
            "bn": "তাঁর কথা থেকে দুটি বিষয় বেরিয়ে আসে, আর দুটিই তাঁর, এ লেখার নয়। প্রথমত, আশাকে বাদ দেওয়া হয়নি। আশাবাদী অন্তরেও উপদেশ পৌঁছাতে পারে। দ্বিতীয়ত, আয়াতে ভয়কে বেছে নেওয়ার কারণ হলো কোনটা বেশি জোরে কাজ করে, কোনটা একমাত্র বৈধ তা নয়। ভয় কেন আরও গভীরে পৌঁছায়, মাওয়ারদী তা বলেননি। সংগৃহীত তাফসীরগুলোতেও কারণটা নেই। তাই এ লেখা বিষয়টা সেখানেই রেখে দেয়, যেখানে তিনি রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing the Word If",
          "bn": "'যদি' শব্দটির ওজন"
        },
        "p": [
          {
            "en": "The verse before attaches a condition to the command: remind, in nafa'ati adh-dhikra, if the reminder benefits. This verse names who benefits, and the sources fetched for it read the relation in more than one way. Ibn Kathir, whose English abridgement treats 87:9 and 87:10 in one passage, reads the condition plainly: remind where reminding is beneficial. He draws from it the etiquette of spreading knowledge, that it should not be wasted upon those who are not suitable or worthy of it.",
            "bn": "আগের আয়াত আদেশের সঙ্গে একটি শর্ত জুড়েছে: উপদেশ দাও, ইন নাফাআতিয যিকরা, যদি উপদেশ উপকার দেয়। আর এ আয়াত জানায় উপকার পায় কে। দুই আয়াতের সম্পর্কটা সংগৃহীত সূত্রগুলো একাধিকভাবে পড়েছে। ইবন কাসীরের ইংরেজি সংক্ষেপে ৮৭:৯ ও ৮৭:১০ একই অংশে আলোচিত। তিনি শর্তটা সরাসরি পড়েন: যেখানে উপদেশ উপকারে আসে, সেখানে উপদেশ দাও। এ থেকে তিনি ইলম প্রচারের একটি আদব বের করেন। যারা এর উপযুক্ত বা যোগ্য নয়, তাদের পেছনে ইলম অপচয় করা উচিত নয়।"
          },
          {
            "en": "In support he cites two sayings of 'Ali (RA). In the abridgement's English, the first reads: \"You do not tell people any statement that their intellects do not grasp except that it will be a Fitnah (trial) for some of them.\" The second reads: \"Tell people that which they know. Would you like for Allah and His Messenger to be rejected\". These are a Companion's sayings that Ibn Kathir cites under 87:9; the passage gives no chain and no grading for them.",
            "bn": "সমর্থনে তিনি আলী (রাঃ)-এর দুটি উক্তি আনেন। প্রথমটির মর্ম: মানুষের বুদ্ধি যে কথা ধরতে পারে না, এমন কথা তাদের বললে তা তাদের কারও কারও জন্য ফিতনা, অর্থাৎ পরীক্ষা হয়ে দাঁড়ায়। দ্বিতীয়টির মর্ম: মানুষকে সেটুকুই বলো যা তারা জানে। তোমরা কি চাও আল্লাহ ও তাঁর রাসূলকে অস্বীকার করা হোক? এগুলো একজন সাহাবীর উক্তি, ইবন কাসীর ৮৭:৯ আয়াতের আলোচনায় এনেছেন। সেখানে এগুলোর কোনো সনদ বা মান উল্লেখ নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the same particle differently. It says the verse contains the conditional particle in, if, which apparently makes the sentence a conditional statement, but that the command is not in fact meant to be conditional; it is an emphatic statement. The verse, on this reading, says that preaching truth and righteousness is certainly useful, and therefore the beneficial thing should never be abandoned at any time.",
            "bn": "মাআরিফুল কুরআন একই অব্যয়টি পড়ে ভিন্নভাবে। সেখানে বলা হয়েছে, আয়াতে শর্তবাচক অব্যয় ইন, যদি, আছে বলে বাক্যটিকে আপাতদৃষ্টিতে শর্তযুক্ত মনে হয়। কিন্তু আদেশটি আসলে শর্তসাপেক্ষ করা উদ্দেশ্য নয়, এটি জোর দিয়ে বলা কথা। এ পাঠে আয়াতের বক্তব্য হলো, সত্য ও সৎকাজের দাওয়াত নিশ্চয়ই উপকারী। তাই উপকারী এ কাজ কোনো সময়েই ছেড়ে দেওয়া উচিত নয়।"
          },
          {
            "en": "Al-Qurtubi, under 87:10, records a third view with the words wa-qila, it is said, and notes that al-Qushayri reported it: make the reminder and the admonition general, even though admonition benefits only the one who fears, for you still obtain the reward of calling. So one reading places the reminder where it will benefit, another holds that it always benefits, and a third has it given to all while only some take it. The texts set them side by side, and so does this article.",
            "bn": "কুরতুবী ৮৭:১০ আয়াতের আলোচনায় 'বলা হয়েছে', ওয়া কীলা, শব্দে তৃতীয় একটি মত আনেন, আর জানান কুশাইরী এটি বর্ণনা করেছেন। মতটি হলো: তুমি উপদেশ ও নসিহত সবার জন্য ব্যাপক করো। নসিহত যদিও কেবল ভয়কারীরই উপকারে আসে, তবু দাওয়াতের সওয়াব তুমি পাবেই। তাহলে এক পাঠে উপদেশ দিতে হবে যেখানে তা উপকারে আসে। আরেক পাঠে উপদেশ সব সময়ই উপকারী। তৃতীয় পাঠে উপদেশ সবাইকে দেওয়া হবে, নেবে কেউ কেউ। তাফসীরগুলো মতগুলোকে পাশাপাশি রেখেছে, এ লেখাও তাই রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse That Follows",
          "bn": "ঠিক পরের আয়াত"
        },
        "p": [
          {
            "en": "The verse that follows, 87:11, names the other side: one who avoids the reminder. The Muyassar's comment under 87:10 already reads the two together. The one who fears his Lord will take admonition, it says, and the most wretched, al-ashqa, who does not fear his Lord, keeps away from the reminder. The contrast turns on fear of the same Lord: one fears his Lord, the other does not. What becomes of that one is the subject of the verses after, and this article leaves them to their own place.",
            "bn": "পরের আয়াত, ৮৭:১১, অন্য পক্ষের কথা বলে: যে উপদেশ এড়িয়ে চলে। মুয়াসসার ৮৭:১০ আয়াতের ব্যাখ্যাতেই দুটিকে একসঙ্গে পড়ে। সেখানে বলা হয়েছে, যে তার রবকে ভয় করে সে নসিহত নেবে, আর সবচেয়ে হতভাগা, আল-আশকা, যে তার রবকে ভয় করে না, সে উপদেশ থেকে দূরে সরে যায়। বৈপরীত্যটা রবের ভয়কে ঘিরে: একজন রবকে ভয় করে, অন্যজন করে না। তার পরিণতি কী হবে, সেটি পরের আয়াতগুলোর বিষয়। এ লেখা সেগুলোকে তাদের নিজের জায়গায় রেখে দেয়।"
          },
          {
            "en": "Because the pair is framed as two groups, one point needs saying plainly. The verse describes what the text describes, one who fears and is reminded, set against one who avoids the reminder, and it licenses nothing against any living person or community. It hands no reader the right to sort the people around him into those who fear and those who do not. Ibn Kathir's gloss places the fear in the heart, and no one reading this verse is given sight of another person's heart.",
            "bn": "জোড়াটি যেহেতু দুই দলের ছবি হিসেবে এসেছে, একটি কথা সোজাসুজি বলা দরকার। আয়াতটি শুধু তা-ই বর্ণনা করে যা পাঠে আছে: একজন ভয় করে ও উপদেশ নেয়, অন্যজন উপদেশ এড়িয়ে চলে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আশপাশের মানুষদের ভয়কারী আর ভয়হীন বলে ভাগ করার অধিকারও কোনো পাঠককে দেয় না। ইবন কাসীরের ব্যাখ্যা ভয়কে রাখে অন্তরে। আর এ আয়াত পড়ে কেউ অন্যের অন্তর দেখার চোখ পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Read From Its Placement",
          "bn": "অবস্থান থেকেই পাঠ"
        },
        "p": [
          {
            "en": "None of the tafsirs fetched for this verse attaches a sound hadith to it, and this article quotes none. The hadiths Ibn Kathir gathers in the same grouped passage concern the surah as a whole, its early recitation and its place in particular prayers, and another he cites belongs to a later verse. None is about 87:10, so none is used here. Nor does this article rely on an occasion of revelation for the verse. None is established in the sources consulted, so the verse is read here from its placement.",
            "bn": "এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি, এ লেখাও কোনো হাদীস উদ্ধৃত করে না। একই অংশে ইবন কাসীর যে হাদীসগুলো এনেছেন, সেগুলো পুরো সূরা নিয়ে: এর প্রথম দিকের তিলাওয়াত আর নির্দিষ্ট কিছু নামাযে এর স্থান। আরেকটি হাদীস পরের এক আয়াতের সঙ্গে সম্পর্কিত। কোনোটিই ৮৭:১০ আয়াত নিয়ে নয়, তাই এখানে কোনোটিই নেওয়া হয়নি। আয়াতটির কোনো শানে নুযূলের উপরও এ লেখা নির্ভর করে না। ব্যবহৃত সূত্রগুলোতে তেমন কিছু প্রতিষ্ঠিত নয়, তাই আয়াতটি এখানে পড়া হয়েছে তার অবস্থান থেকে।"
          },
          {
            "en": "That placement is itself a guide. The surah has just told the Prophet ﷺ that he will be made to recite and will not forget, and that he will be eased toward ease, in 87:6, 87:7 and 87:8; then it commands him to remind. The verses before speak of the reminder's carrier, and this verse of its receiver. Ma'arif al-Qur'an makes the first half of that move in its own words: the preceding verses described the facilities Allah created for the Holy Prophet in performing his prophetic obligation, and 87:9 commands him to perform it.",
            "bn": "অবস্থানটাই পথ দেখায়। ৮৭:৬, ৮৭:৭ ও ৮৭:৮ আয়াতে সূরা সবেমাত্র নবী ﷺ-কে জানিয়েছে, তাঁকে পড়িয়ে দেওয়া হবে আর তিনি ভুলবেন না, আর সহজ পথ তাঁর জন্য আরও সহজ করে দেওয়া হবে। তারপর আসে উপদেশ দেওয়ার আদেশ। আগের আয়াতগুলো উপদেশের বাহককে নিয়ে, আর এ আয়াত তার গ্রহীতাকে নিয়ে। মাআরিফুল কুরআন নিজের ভাষায় এর প্রথম অংশটুকু বলে। আগের আয়াতগুলোতে নবুওয়াতের দায়িত্ব পালনে আল্লাহ নবী ﷺ-এর জন্য যেসব সুবিধা দিয়েছেন তার বর্ণনা ছিল, আর ৮৭:৯ আয়াত তাঁকে সেই দায়িত্ব পালনের আদেশ দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping the Meeting in View",
          "bn": "সাক্ষাতের কথা মনে রেখে"
        },
        "p": [
          {
            "en": "Read as a mirror, the verse asks a question about the reader, not about anyone else. Reminders reach most people constantly: a verse heard in prayer, a funeral, a word from a friend. The verse says the reminder will be taken by one who fears. If reminders keep passing over me without changing anything, the first place to look, on the verse's own terms, is not the reminder itself but the fear behind my listening, or its absence.",
            "bn": "আয়না হিসেবে পড়লে আয়াতটি প্রশ্ন করে পাঠককেই, অন্য কাউকে নয়। উপদেশ তো প্রায় সবার কাছে বারবার আসে: নামাযে শোনা কোনো আয়াত, কোনো জানাযা, বন্ধুর মুখের একটা কথা। আয়াত বলছে, উপদেশ নেবে সে, যে ভয় করে। উপদেশ যদি বারবার আমার উপর দিয়ে চলে যায় আর কিছুই না বদলায়, তবে আয়াতের নিজের হিসাবে প্রথমে দেখার জায়গা উপদেশটা নয়। দেখার জায়গা আমার শোনার পেছনের ভয়টুকু, কিংবা তার না থাকা।"
          },
          {
            "en": "The commentators give that fear a shape one can work with. Ibn Kathir's gloss pairs it with knowing that one will meet Allah; as-Sa'di's pairs it with knowing that deeds will be requited, and measures the reminder by sins left and good deeds sought. Neither describes a feeling to be manufactured. Both describe a fact to be kept in view. A reader who keeps the meeting in view at the hour of a decision has begun to take the reminder in the way their glosses describe.",
            "bn": "মুফাসসিরগণ এই ভয়কে এমন রূপ দেন, যা নিয়ে কাজ করা যায়। ইবন কাসীরের ব্যাখ্যায় ভয়ের সঙ্গী এই জ্ঞান যে আল্লাহর সঙ্গে সাক্ষাৎ হবে। সা'দীর ব্যাখ্যায় এর সঙ্গী এই জ্ঞান যে আমলের প্রতিদান মিলবে। আর উপদেশের মাপ তিনি নেন ছেড়ে দেওয়া গুনাহ আর খোঁজা নেক কাজ দিয়ে। কেউই জোর করে বানানো কোনো অনুভূতির কথা বলেন না। দুজনেই বলেন একটি সত্যের কথা, যা চোখের সামনে রাখতে হয়। সিদ্ধান্তের মুহূর্তে যে পাঠক সাক্ষাতের কথা মনে রাখে, সে তাঁদের ব্যাখ্যার ধারায় উপদেশ নিতে শুরু করেছে।"
          },
          {
            "en": "And for anyone who reminds others, the two verses together offer both caution and relief. Ibn Kathir's reading counsels care about where knowledge is offered and how much. Ma'arif al-Qur'an's reading, and the view al-Qurtubi records from al-Qushayri, counsel that it not be withheld. The verse itself places the taking of the reminder with whoever fears, and the view al-Qushayri reported adds that whoever reminds has the reward of calling either way.",
            "bn": "যিনি অন্যদের উপদেশ দেন, তাঁর জন্য দুই আয়াত মিলে সতর্কতাও দেয়, স্বস্তিও দেয়। ইবন কাসীরের পাঠ বলে, ইলম কোথায় আর কতটুকু দেওয়া হচ্ছে সে ব্যাপারে যত্নবান হতে। মাআরিফুল কুরআনের পাঠ আর কুশাইরী থেকে কুরতুবীর আনা মত বলে, উপদেশ আটকে রাখা যাবে না। আয়াত নিজে উপদেশ গ্রহণের ভার রাখে ভয়কারীর কাঁধে। আর কুশাইরীর বর্ণিত মত যোগ করে, যিনি উপদেশ দেন, ফল যা-ই হোক, দাওয়াতের সওয়াব তিনি পাবেন।"
          }
        ]
      }
    ]
  },
  "87:14-17": {
    "sections": [
      {
        "h": {
          "en": "Success, Declared",
          "bn": "সাফল্য ঘোষিত"
        },
        "p": [
          {
            "en": "Qad aflaha man tazakka — truly he has succeeded who purifies himself. The particle qad with the past tense announces the matter as settled: this person has already succeeded; the result is in. Falah is the Quran's word for genuine success — thriving, attaining, lasting — the same word the adhan calls to five times a day: hayya alal-falah. Surah al-A'la, which opens in 87:1 by commanding glorification of the name of the Lord Most High, here defines what winning actually is.",
            "bn": "কাদ আফলাহা মান তাযাক্কা — নিশ্চিতই সে সফল হয়েছে, যে নিজেকে পবিত্র করেছে। অতীত কালের ক্রিয়ার সাথে কাদ শব্দটি বিষয়টিকে মীমাংসিত ঘোষণা করে: এই মানুষটি ইতিমধ্যেই সফল; ফলাফল এসে গেছে। ফালাহ হলো প্রকৃত সাফল্যের জন্য কুরআনের শব্দ — সমৃদ্ধ হওয়া, অর্জন করা, টিকে থাকা — সেই একই শব্দ, যার দিকে আযান দিনে পাঁচবার ডাকে: হাইয়া আলাল-ফালাহ। সূরা আল-আ'লা, যা 87:1 আয়াতে মহান সর্বোচ্চ রবের নামের তাসবীহর নির্দেশ দিয়ে শুরু হয়, এখানে সংজ্ঞা দেয় — জেতা আসলে কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Verbs in Order",
          "bn": "ক্রমে তিন ক্রিয়া"
        },
        "p": [
          {
            "en": "The definition has three verbs in sequence: purified himself, tazakka; remembered the name of his Lord, dhakara isma rabbihi; and prayed, fa-salla. The commentators read the order as instructive: cleansing comes first — from shirk, from sins, from the diseases of the heart — then remembrance fills the cleaned space, and prayer carries the remembrance into the limbs. The fa before salla binds prayer tightly to remembrance: the prayer meant here flows from a heart already turned.",
            "bn": "সংজ্ঞাটিতে পরপর তিনটি ক্রিয়া: নিজেকে পবিত্র করল — তাযাক্কা; তার রবের নাম স্মরণ করল — যাকারা ইসমা রাব্বিহি; আর নামায পড়ল — ফাসাল্লা। মুফাসসিরগণ এই ক্রমকে শিক্ষণীয় হিসেবে পড়েন: আগে পরিশুদ্ধি — শিরক থেকে, গুনাহ থেকে, অন্তরের ব্যাধি থেকে — তারপর স্মরণ সেই পরিষ্কার জায়গাটি ভরে তোলে, আর নামায সেই স্মরণকে অঙ্গ-প্রত্যঙ্গে বয়ে নেয়। সাল্লার আগের ফা নামাযকে স্মরণের সাথে শক্ত করে বাঁধে: এখানে যে নামাযের কথা, তা এমন অন্তর থেকে প্রবাহিত হয় যা আগেই ফিরেছে।"
          },
          {
            "en": "Some early commentators, as al-Qurtubi records, connected these verses to the charity given at the end of Ramadan and the Eid prayer that follows it — purification through sadaqat al-fitr, remembrance in the takbirs, then the prayer. The wording itself remains general, and the general reading stands: any purifying, any remembering, any praying enters the verse. The specific application shows how concretely the early generations read their Quran — they looked for days on the calendar where the three verbs lined up.",
            "bn": "কিছু প্রাচীন মুফাসসির, যেমন আল-কুরতুবী লিপিবদ্ধ করেন, এই আয়াতগুলোকে যুক্ত করেছেন রমযানের শেষে দেওয়া দানের সাথে এবং তার পরের ঈদের নামাযের সাথে — সাদাকাতুল ফিতরের মাধ্যমে পরিশুদ্ধি, তাকবীরে স্মরণ, তারপর নামায। শব্দগুলো নিজে অবশ্য সাধারণই রয়ে গেছে, আর সাধারণ পাঠটিই বহাল: যেকোনো পবিত্রকরণ, যেকোনো স্মরণ, যেকোনো নামায আয়াতটিতে ঢোকে। নির্দিষ্ট প্রয়োগটি দেখায় প্রথম প্রজন্মগুলো তাদের কুরআন কতটা হাতে-কলমে পড়ত — তারা পঞ্জিকায় এমন দিন খুঁজত যেখানে তিনটি ক্রিয়া এক সারিতে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Honest Diagnosis",
          "bn": "সৎ রোগনির্ণয়"
        },
        "p": [
          {
            "en": "Then the surah turns from definition to diagnosis: bal tu'thirun al-hayata ad-dunya — rather, you prefer the life of this world. The verb is athara, to prefer, to choose one thing over another; the charge is not that people use the world but that, choice after choice, they rank it first. The address is plural and undefended; the Quran states it as a plain fact about us. No argument is offered, because none is needed — our calendars and accounts testify.",
            "bn": "তারপর সূরাটি সংজ্ঞা থেকে রোগনির্ণয়ে ফেরে: বাল তু'সিরূনাল-হায়াতাদ-দুনইয়া — বরং তোমরা দুনিয়ার জীবনকেই প্রাধান্য দাও। ক্রিয়াটি আসারা — প্রাধান্য দেওয়া, এক জিনিসকে আরেকটির উপরে বেছে নেওয়া; অভিযোগটি এই নয় যে মানুষ দুনিয়া ব্যবহার করে, বরং এই যে, পছন্দের পর পছন্দে তারা একেই প্রথমে রাখে। সম্বোধন বহুবচনে, কোনো আত্মপক্ষ ছাড়া; কুরআন এটিকে আমাদের সম্পর্কে সরল সত্য হিসেবেই বলে। কোনো যুক্তি হাজির করা হয় না, কারণ দরকারও নেই — আমাদের সময়সূচি আর হিসাবের খাতাই সাক্ষ্য দেয়।"
          },
          {
            "en": "The correction follows in the same breath: wal-akhiratu khayrun wa abqa — while the Hereafter is better and more lasting. Two comparatives, each aimed at one leg of the preference. We choose the world because it seems good: the Hereafter is better. We cling to it because it is here: the Hereafter lasts. 42:36 makes the same pairing — what is with Allah is better and more enduring for those who believe and rely upon their Lord.",
            "bn": "সংশোধনটি আসে একই নিঃশ্বাসে: ওয়াল-আখিরাতু খাইরুন ওয়া আবকা — অথচ আখিরাত উত্তম ও অধিক স্থায়ী। দুটি তুলনাবাচক শব্দ, প্রতিটির নিশানা প্রাধান্যের এক-একটি পা। আমরা দুনিয়া বেছে নিই কারণ তা ভালো মনে হয়: আখিরাত উত্তম। আমরা তা আঁকড়ে ধরি কারণ তা হাতের কাছে: আখিরাত টিকে থাকে। 42:36 একই জোড় তৈরি করে — আল্লাহর কাছে যা আছে তা উত্তম ও অধিক স্থায়ী, তাদের জন্য যারা ঈমান আনে ও তাদের রবের উপর ভরসা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "In the First Scriptures",
          "bn": "প্রাচীন সহীফাসমূহে"
        },
        "p": [
          {
            "en": "The surah then discloses the age of this teaching: indeed this is in the former scriptures, the scriptures of Ibrahim (AS) and Musa (AS), as 87:18-19 declare. The commentators discuss what this points back to; the nearest passage is this very definition of success and diagnosis of preference. The claim is quietly enormous: the core spiritual arithmetic — purify, remember, pray, and do not trade the lasting for the immediate — was not new with the Quran. It is the oldest message there is, restated.",
            "bn": "এরপর সূরাটি এই শিক্ষার বয়স প্রকাশ করে: নিশ্চয়ই এ কথা আছে পূর্ববর্তী সহীফাগুলোতে — ইবরাহীম (আঃ) ও মূসা (আঃ)-এর সহীফায় — 87:18-19। এই ইঙ্গিত কোন কথার দিকে, তা নিয়ে মুফাসসিরগণ আলোচনা করেন; নিকটতম অনুচ্ছেদটি হলো সাফল্যের এই সংজ্ঞা আর প্রাধান্যের এই রোগনির্ণয়ই। দাবিটি নীরবে বিশাল: মূল আধ্যাত্মিক পাটিগণিত — পবিত্র হও, স্মরণ করো, নামায পড়ো, আর স্থায়ীকে তাৎক্ষণিকের বিনিময়ে বেচে দিয়ো না — কুরআনের সাথে নতুন আসেনি। এ হলো প্রাচীনতম বার্তা, নতুন করে বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Surah He Kept Close",
          "bn": "যে সূরা তিনি কাছে রাখতেন"
        },
        "p": [
          {
            "en": "Muslim records from an-Nu'man ibn Bashir (RA) that the Prophet ﷺ used to recite Sabbih isma rabbika al-a'la and Hal ataka hadithul-ghashiyah in the two Eid prayers and in the Friday prayer, and when Eid and Friday fell on the same day he recited them both in both. The choice means the ummah's largest regular gatherings repeatedly heard success redefined. On the days most given to celebration and appearance, the congregation was told again what winning is: purification, remembrance, prayer.",
            "bn": "মুসলিম নু'মান ইবনে বাশীর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ দুই ঈদের নামাযে ও জুমার নামাযে সাব্বিহিসমা রাব্বিকাল-আ'লা এবং হাল আতাকা হাদীসুল-গাশিয়াহ পড়তেন, আর ঈদ ও জুমা একই দিনে পড়লে দুটিতেই দুটিই পড়তেন। এই বাছাইয়ের মানে — উম্মাহর সবচেয়ে বড় নিয়মিত সমাবেশগুলো বারবার শুনেছে সাফল্যের নতুন সংজ্ঞা। যে দিনগুলো সবচেয়ে বেশি উদযাপন ও সাজসজ্জার, সেই দিনগুলোতেই জামাতকে আবার বলা হয়েছে জেতা কাকে বলে: পরিশুদ্ধি, স্মরণ, নামায।"
          }
        ]
      },
      {
        "h": {
          "en": "Running the Definition",
          "bn": "সংজ্ঞাটি চালু করা"
        },
        "p": [
          {
            "en": "The three verbs convert directly into a day's architecture. Purify: keep tawbah current, and let charity clean what wealth accumulates. Remember: attach the name of your Lord to thresholds — waking, eating, leaving, returning. Pray: guard the five, and let them be the remembrance walking. Then use the diagnosis as a lens on small choices: in each trade-off between the immediate and the lasting, notice which way the hand reaches. The preference is corrected in increments, not in proclamations.",
            "bn": "তিনটি ক্রিয়া সরাসরি একটি দিনের স্থাপত্যে রূপ নেয়। পবিত্র করুন: তাওবা হালনাগাদ রাখুন, আর সম্পদ যা জমায় দান তা পরিষ্কার করুক। স্মরণ করুন: আপনার রবের নাম চৌকাঠগুলোতে জুড়ে দিন — ঘুম ভাঙা, খাওয়া, বেরোনো, ফেরা। নামায পড়ুন: পাঁচ ওয়াক্ত পাহারা দিন, আর সেগুলোই হোক হেঁটে চলা স্মরণ। তারপর রোগনির্ণয়টিকে ছোট ছোট পছন্দের লেন্স বানান: তাৎক্ষণিক আর স্থায়ীর প্রতিটি দর-কষাকষিতে খেয়াল করুন হাত কোন দিকে বাড়ে। প্রাধান্যের সংশোধন হয় কিস্তিতে কিস্তিতে, ঘোষণায় নয়।"
          },
          {
            "en": "The verse's tense is also its comfort. Success is declared already attained by whoever does these things — not deferred until wealth, recognition or ease arrive. A person of modest means who purifies, remembers and prays has succeeded, in the present tense, on the authority of the One who defines the term. What remains is the choice the surah names, made freshly each day, between the thing in the hand and the thing that endures.",
            "bn": "আয়াতের কালই তার সান্ত্বনা। যে এই কাজগুলো করে, তার সাফল্য ইতিমধ্যে অর্জিত বলে ঘোষিত — সম্পদ, স্বীকৃতি বা স্বাচ্ছন্দ্য আসা পর্যন্ত মুলতবি নয়। সামান্য সামর্থ্যের যে মানুষ পবিত্র হয়, স্মরণ করে ও নামায পড়ে, সে সফল — বর্তমান কালে, সেই সত্তার কর্তৃত্বে যিনি শব্দটির সংজ্ঞা দেন। বাকি থাকে সূরাটির নাম-করা সেই পছন্দ, যা প্রতিদিন নতুন করে করতে হয় — হাতের জিনিস আর টিকে-থাকা জিনিসের মধ্যে।"
          }
        ]
      }
    ]
  }
});
