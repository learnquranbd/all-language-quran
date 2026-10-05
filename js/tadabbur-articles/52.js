/**
 * Tadabbur long-form articles — surah 52.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "52:10": {
    "sections": [
      {
        "h": {
          "en": "Three Words, Two Echoes",
          "bn": "তিন শব্দ, দুই প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "Wa tasiru al-jibalu sayra: and the mountains will move, a real moving. In Arabic the verse is three words: a verb, its subject, and a verbal noun from the same root as the verb, s-y-r, to go or to travel. The motion is named and then named again. The verse before it is built the same way: yawma tamuru al-sama'u mawra, on the Day the sky sways, a swaying. Two short verses, each with its doubled root, one about what is above and one about what is below.",
            "bn": "ওয়া তাসীরুল জিবালু সাইরা: আর পাহাড়গুলো চলবে, সত্যিকারের চলা। আরবিতে আয়াতটিতে মাত্র তিনটি শব্দ। একটি ক্রিয়া, তার কর্তা, আর সেই ক্রিয়ার ধাতু থেকেই গড়া একটি ক্রিয়াবাচক বিশেষ্য। ধাতুটা স-য়-র, যার অর্থ চলা বা পথ পাড়ি দেওয়া। চলার কথা একবার বলে আবার বলা হলো। আগের আয়াতের গড়নও হুবহু এক: ইয়াওমা তামূরুস সামাউ মাওরা, যেদিন আকাশ দুলবে, প্রবল দোলা। দুটি ছোট আয়াত, প্রতিটিতে একই ধাতু দুবার। একটি উপরের কথা বলে, অন্যটি নিচের।"
          },
          {
            "en": "Both verses hang on what came just before them. Allah has sworn by the Mount, the inscribed Book, the frequented House, the raised roof and the sea, and the answer to the oath is 52:7 and 52:8: the punishment of your Lord will surely fall, and nothing can avert it. At-Tabari says the word yawm, Day, in 52:9 is joined to waqi', will fall. Al-Qurtubi says the same and spells it out: the punishment falls on them on the Day of Resurrection, the Day on which the sky sways. The wa that opens 52:10 adds the mountains to that same Day.",
            "bn": "দুটো আয়াতই ঝুলে আছে ঠিক আগের কথার উপর। আল্লাহ শপথ করেছেন তূর পাহাড়ের, লিখিত কিতাবের, আবাদ ঘরের, সুউচ্চ ছাদের আর সমুদ্রের। শপথের জবাব আসে ৫২:৭ ও ৫২:৮ আয়াতে: তোমার রবের শাস্তি অবশ্যই আসবে, কেউ তা ঠেকাতে পারবে না। তাবারী বলেন, ৫২:৯ আয়াতের ইয়াওম, অর্থাৎ দিন, শব্দটি যুক্ত আছে ওয়াকি', মানে সংঘটিত হবে, শব্দের সঙ্গে। কুরতুবীও একই কথা বলেন, আরও খুলে: শাস্তি তাদের উপর আসবে কিয়ামতের দিন, যেদিন আকাশ দুলবে। ৫২:১০ আয়াতের শুরুর ওয়া সেই একই দিনে পাহাড়গুলোকেও যোগ করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Travel That Ends in Dust",
          "bn": "যে চলার শেষ ধুলোয়"
        },
        "p": [
          {
            "en": "What does sayr mean here? At-Tabari answers in one line: the mountains move from their places on the earth, a moving, and become haba'an munbaththan, dust scattered abroad. Al-Baghawi has them cease from their places and become haba'an manthuran, dust strewn about. Ibn Kathir in his Arabic tafsir writes that they go away and become scattered dust, and are torn up and blown away. In each of these the verb of travel ends in disappearance. The mountains do not arrive anywhere; they come apart.",
            "bn": "এখানে সাইর মানে কী? তাবারীর জবাব একটিমাত্র বাক্যে: পাহাড়গুলো পৃথিবীর বুকে নিজেদের জায়গা থেকে সরে চলবে, তারপর হয়ে যাবে হাবাআম মুম্বাসসা, চারদিকে ছড়ানো ধুলো। বাগাভী বলেন, পাহাড় নিজের জায়গা থেকে সরে যাবে আর হবে হাবাআম মানসূরা, বিক্ষিপ্ত ধুলিকণা। ইবন কাসীর তাঁর আরবি তাফসীরে লেখেন, পাহাড় চলে যাবে, ছড়ানো ধুলো হয়ে যাবে, সমূলে উপড়ে উড়িয়ে দেওয়া হবে। লক্ষ করুন, প্রতিটি ব্যাখ্যায় চলার ক্রিয়াটা গিয়ে থামে মিলিয়ে যাওয়ায়। পাহাড় কোথাও গিয়ে পৌঁছায় না, ভেঙে খান খান হয়ে যায়।"
          },
          {
            "en": "The abridged English Ibn Kathir keeps the same line: the mountains will fade away and become scattered particles of dust blown away by the wind. The Muyassar, which keeps to short plain sentences, puts it in two steps: the mountains leave their places and move as clouds move. So even among the briefest commentaries there are two pictures. In one, the moving is the start of their vanishing. In the other, the moving is a drift, like cloud across the sky. Al-Qurtubi, as the next section shows, keeps both.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও একই পথে চলে: পাহাড়গুলো মিলিয়ে যাবে, বাতাসে উড়ে যাওয়া ধুলিকণা হয়ে ছড়িয়ে পড়বে। মুয়াসসার ছোট ছোট সহজ বাক্যে কথা বলে। সেখানে বিষয়টা দুই ধাপে: পাহাড় নিজের জায়গা ছেড়ে যাবে, আর চলবে মেঘের চলার মতো। তাহলে সবচেয়ে সংক্ষিপ্ত ব্যাখ্যাগুলোর মধ্যেই দুটো ছবি পাওয়া যায়। একটিতে চলাটাই বিলীন হওয়ার শুরু। অন্যটিতে চলা মানে ভেসে যাওয়া, আকাশে মেঘ যেভাবে ভেসে যায়। পরের অংশে দেখা যাবে, কুরতুবী দুটো ছবিই রেখে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Levelled, or Drifting Like Cloud",
          "bn": "মাটির সমান, নাকি মেঘের মতো"
        },
        "p": [
          {
            "en": "Al-Qurtubi's note on the verse is short, but it holds a real difference. He first reports Muqatil: the mountains move from their places until they are level with the earth. Then, with the words wa qila, and it is said, he gives a second reading: they move as clouds move today, in this world. He reports Muqatil's words without a chain, and the second view has no named source, so neither comes with a grading. He does not choose between them.",
            "bn": "আয়াতটির উপর কুরতুবীর আলোচনা ছোট, কিন্তু তাতে সত্যিকারের একটা মতভেদ আছে। প্রথমে তিনি মুকাতিলের কথা আনেন: পাহাড়গুলো নিজেদের জায়গা থেকে চলতে চলতে শেষে মাটির সঙ্গে সমান হয়ে যাবে। তারপর ওয়া কীলা, অর্থাৎ বলা হয়েছে, এই শব্দে দ্বিতীয় ব্যাখ্যাটি আনেন: পাহাড় চলবে, যেমন আজ এই দুনিয়ায় মেঘ চলে। মুকাতিলের কথা তিনি কোনো সনদ ছাড়াই উদ্ধৃত করেছেন। দ্বিতীয় মতের কোনো বক্তার নামও নেই। তাই কোনোটির সঙ্গেই মানের বিচার আসেনি। দুটোর মধ্যে তিনি কোনোটিকে বেছেও নেননি।"
          },
          {
            "en": "For the second reading al-Qurtubi names its bayan, its clarification, from the Qur'an itself, 27:88: wa tara al-jibala tahsabuha jamidatan wa hiya tamurru marra al-sahab, and you see the mountains and think them firmly fixed, while they pass as the clouds pass. Muqatil's reading looks to where the process ends, the mountains flattened into the ground. The cloud reading looks at the motion itself, its lightness and its drift. This article keeps the two side by side, exactly as al-Qurtubi keeps them.",
            "bn": "দ্বিতীয় ব্যাখ্যার বায়ান বা স্পষ্টীকরণ কুরতুবী আনেন কুরআন থেকেই, ২৭:৮৮ আয়াত: ওয়া তারাল জিবালা তাহসাবুহা জামিদাতাও ওয়া হিয়া তামুররু মাররাস সাহাব। তুমি পাহাড় দেখে ভাবো তা অনড়, অথচ তা চলছে মেঘের চলার মতো। মুকাতিলের ব্যাখ্যা তাকায় শেষ পরিণতির দিকে, যেখানে পাহাড় মাটিতে মিশে সমতল হয়ে যায়। মেঘের ব্যাখ্যা তাকায় চলাটার দিকে, তার হালকা ভাব আর ভেসে যাওয়ার দিকে। কুরতুবী যেমন দুটোকে পাশাপাশি রেখেছেন, এ লেখাও তেমনি দুটি মতকেই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Event, Three Verb Forms",
          "bn": "এক ঘটনা, ক্রিয়ার তিন রূপ"
        },
        "p": [
          {
            "en": "Al-Qurtubi closes his note with a pointer: this meaning has already been covered in al-Kahf. His note there is on 18:47, wa yawma nusayyiru al-jibal, and the Day We set the mountains moving, and that note quotes 52:10 itself. In 18:47 the verb is causative and the speaker is Allah: We set them in motion. In 52:10 the same root comes as a plain verb with the mountains as its subject. One verse names the One who moves them; the other shows only the mountains on the move.",
            "bn": "আলোচনার শেষে কুরতুবী একটা ইশারা দেন: এ অর্থের কথা সূরা কাহফে আগেই বলা হয়েছে। সেখানে তাঁর আলোচনা ১৮:৪৭ আয়াতের উপর: ওয়া ইয়াওমা নুসাইয়িরুল জিবাল, আর যেদিন আমি পাহাড়গুলোকে চালিয়ে দেব। সেই আলোচনায় তিনি ৫২:১০ আয়াতটিও উদ্ধৃত করেন। ১৮:৪৭ আয়াতে ক্রিয়াটি অন্যকে দিয়ে করানোর রূপে, আর বক্তা আল্লাহ নিজে: আমি তাদের চালাব। ৫২:১০ আয়াতে একই ধাতু এসেছে সাধারণ ক্রিয়া হয়ে, কর্তা পাহাড়। এক আয়াত বলে দেয় কে চালান। অন্য আয়াত শুধু দেখায় পাহাড় চলছে।"
          },
          {
            "en": "In that note al-Qurtubi also gives the readings of 18:47. Several reciters, Abu 'Amr and Ibn 'Amir among them, read tusayyaru al-jibalu, the mountains will be set moving, and he gives 81:3 as its support: wa idha al-jibalu suyyirat, and when the mountains are set moving. Ibn Muhaysin and Mujahid read tasiru al-jibalu, the mountains will move, and its support, he says, is our verse. Abu 'Ubayd preferred nusayyiru, with the first person, because the verse goes on, wa hasharnahum, and We gathered them.",
            "bn": "সেই আলোচনায় কুরতুবী ১৮:৪৭ আয়াতের কিরাআতগুলোও উল্লেখ করেন। আবু আমর ও ইবন আমিরসহ কয়েকজন কারী পড়েছেন তুসাইয়ারুল জিবালু, পাহাড়গুলোকে চালানো হবে। এর পক্ষে তিনি দলিল দেন ৮১:৩ আয়াত: ওয়া ইযাল জিবালু সুয়্যিরাত, আর যখন পাহাড়গুলোকে চালানো হবে। ইবন মুহাইসিন ও মুজাহিদ পড়েছেন তাসীরুল জিবালু, পাহাড়গুলো চলবে। তিনি বলেন, এর দলিল আমাদের এই আয়াতটিই। আবু উবাইদ পছন্দ করেছেন নুসাইয়িরু, উত্তম পুরুষের রূপ। কারণ আয়াতটি এগিয়ে গিয়ে বলে ওয়া হাশারনাহুম, আর আমি তাদের একত্র করব।"
          },
          {
            "en": "His note on 18:47 also sets out a sequence. Allah removes the mountains from their places on the face of the earth and moves them as clouds are moved, as He says in 27:88; then they are broken and fall back to the earth, as He says in 56:5 and 56:6: wa bussati al-jibalu bassa, fa-kanat haba'an munbaththa, and the mountains are crumbled to powder and become dust scattered abroad. In that note the two pictures from 52:10 are not rivals but stages: first the drift like cloud, then the crumbling into dust.",
            "bn": "১৮:৪৭ আয়াতের আলোচনায় তিনি একটা ধারাবাহিকতাও সাজান। আল্লাহ পাহাড়গুলোকে পৃথিবীর বুক থেকে তাদের জায়গা থেকে সরাবেন, মেঘের মতো চালাবেন, যেমন ২৭:৮৮ আয়াতে বলেছেন। তারপর সেগুলো ভেঙে চুরমার হয়ে মাটিতে ফিরে আসবে, যেমন ৫৬:৫ ও ৫৬:৬ আয়াতে: ওয়া বুস্সাতিল জিবালু বাস্সা, ফাকানাত হাবাআম মুম্বাসসা। পাহাড়গুলো গুঁড়ো গুঁড়ো হবে, তারপর হয়ে যাবে চারদিকে ছড়ানো ধুলো। সেই আলোচনায় ৫২:১০ আয়াতের দুই ছবি আর প্রতিদ্বন্দ্বী থাকে না, হয়ে যায় দুই ধাপ। আগে মেঘের মতো ভেসে চলা, তারপর ধুলো হয়ে ভেঙে পড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Stage After Stage",
          "bn": "ধাপে ধাপে বিলীন"
        },
        "p": [
          {
            "en": "As-Sa'di gives the fullest sequence in his note on 52:10. The mountains leave their places and move as clouds move; they take on colours like carded wool, ka-l-'ihni al-manfush; then they are scattered until they become like dust. On 18:47 he tells it again in slightly different steps: Allah removes them from their places and makes them a heap of sand, then like carded wool, then they dwindle and fade away into scattered dust, and the earth is laid bare as a level plain with no crookedness and no rise in it.",
            "bn": "৫২:১০ আয়াতের আলোচনায় সবচেয়ে বিস্তারিত ধারাবাহিকতা দেন সা'দী। পাহাড়গুলো নিজেদের জায়গা ছেড়ে মেঘের মতো চলবে। ধুনা পশমের মতো নানা রং ধরবে, কাল ইহনিল মানফূশ। তারপর ছড়িয়ে পড়তে পড়তে হয়ে যাবে ধুলোর মতো। ১৮:৪৭ আয়াতে তিনি একই কথা বলেন একটু ভিন্ন ধাপে। আল্লাহ সেগুলোকে জায়গা থেকে সরিয়ে বালির স্তূপ বানাবেন, তারপর ধুনা পশমের মতো। তারপর সেগুলো ক্ষয়ে ক্ষয়ে মিলিয়ে যাবে, হয়ে যাবে ছড়ানো ধুলো। আর পৃথিবী খোলা পড়ে থাকবে সমতল ময়দান হয়ে, যেখানে না আছে কোনো বাঁক, না কোনো উঁচু টিলা।"
          },
          {
            "en": "Then he gives the reason the verse paints it at all: all of that is for the vastness of the terror of the Day of Resurrection, and for the alarming matters and unsettling quakes in it, which have shaken these huge bodies. And he ends with a question: fa-kayfa bi-l-adamiyyi al-da'if, so how then the weak human being? The mountain is not the subject of his lesson; it is the measure. If the most massive things on earth cannot hold their places, the listener is left to ask where he himself will stand.",
            "bn": "তারপর তিনি বলেন, আয়াত কেন এ ছবি আঁকে। এসব কিয়ামতের দিনের ভয়াবহতার বিশালতার কারণে। সেদিনের আতঙ্কজাগানো ঘটনা আর অস্থির করে দেওয়া কম্পন এই বিশাল বস্তুগুলোকেও নাড়িয়ে দেবে। শেষে তিনি একটা প্রশ্ন রাখেন: ফাকাইফা বিল আদামিয়্যিদ দঈফ, তাহলে দুর্বল মানুষের কী অবস্থা হবে? তাঁর শিক্ষার আসল বিষয় পাহাড় নয়, পাহাড় এখানে মাপকাঠি। পৃথিবীর সবচেয়ে ভারী জিনিসও যদি জায়গায় টিকে থাকতে না পারে, তবে শ্রোতাকে নিজেকেই জিজ্ঞেস করতে হয়, সে নিজে কোথায় দাঁড়াবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sky That Sways Above",
          "bn": "মাথার উপরে দুলন্ত আকাশ"
        },
        "p": [
          {
            "en": "52:10 is the second half of a pair, and its partner deserves a close reading. On mawr in 52:9 at-Tabari gives his own gloss first: the sky revolves and sways. He then lists the early reports with their chains: from Ibn 'Abbas, a moving; from Mujahid, it revolves, a revolving; from Qatadah, its moving; from ad-Dahhak, its revolving and moving by the command of Allah, its parts surging into one another. A second report from Ibn 'Abbas, by another chain, says the sky splits apart.",
            "bn": "৫২:১০ আয়াত একটি জোড়ার দ্বিতীয় অর্ধেক। তার সঙ্গীটিকেও মন দিয়ে পড়া দরকার। ৫২:৯ আয়াতের মাওর শব্দের ব্যাখ্যায় তাবারী আগে নিজের অর্থ দেন: আকাশ ঘুরবে আর দোল খাবে। তারপর সনদসহ পূর্বসূরিদের বর্ণনা সাজান। ইবন আব্বাস (রাঃ) থেকে: নড়াচড়া। মুজাহিদ থেকে: ঘুরবে, প্রবল ঘূর্ণন। কাতাদা থেকে: তার নড়ে ওঠা। দাহহাক থেকে: আল্লাহর হুকুমে তার ঘূর্ণন আর নড়াচড়া, তার এক অংশ আরেক অংশে ঢেউয়ের মতো আছড়ে পড়বে। ইবন আব্বাস (রাঃ) থেকে ভিন্ন সনদে আরেকটি বর্ণনা বলে, আকাশ ফেটে যাবে।"
          },
          {
            "en": "Al-Baghawi says the sky will revolve as a millstone revolves and tilt with its people as a ship tilts, and adds that mawr in the language gathers all these senses: going and coming, wavering, revolving and agitation. Ma'arif al-Qur'an gives the word's lexical meaning as violent shaking, or movement caused by unrest. As-Sa'di says the sky revolves and is agitated, its motion lasting in turmoil with no rest. The Muyassar says the sky moves, its order breaks down and its parts are thrown into disorder, at the end of the life of this world.",
            "bn": "বাগাভী বলেন, আকাশ ঘুরবে যাঁতার মতো, আর তার বাসিন্দাদের নিয়ে কাত হবে যেমন জাহাজ কাত হয়। তিনি যোগ করেন, ভাষায় মাওর শব্দটি এ সবকটি অর্থ ধরে রাখে: যাওয়া-আসা, দোদুল্যমানতা, ঘূর্ণন আর অস্থিরতা। মাআরিফুল কুরআন শব্দটির আভিধানিক অর্থ দেয় প্রচণ্ড ঝাঁকুনি, বা অস্থিরতা থেকে জাগা নড়াচড়া। সা'দী বলেন, আকাশ ঘুরবে আর টলমল করবে, তার গতি চলতেই থাকবে অস্থির হয়ে, কোনো বিরাম ছাড়া। মুয়াসসার বলে, দুনিয়ার জীবনের শেষে আকাশ নড়ে উঠবে, তার শৃঙ্খলা ভেঙে পড়বে, অংশগুলো এলোমেলো হয়ে যাবে।"
          },
          {
            "en": "One small detail joins the two verses. To illustrate mawr, at-Tabari reports that Abu 'Ubayda Ma'mar ibn al-Muthanna recited a line of al-A'sha describing a woman's walk as mawr al-sahaba, the swaying of a cloud, neither slow nor hurried; others, he notes, recite it marr al-sahaba, the passing of a cloud. Al-Qurtubi and Ibn Kathir quote the line as well. So the cloud turns up on both sides of the pair: the sky's motion glossed with a cloud's gait, and the mountains' motion likened, in one reading, to cloud.",
            "bn": "ছোট্ট একটা খুঁটিনাটি দুই আয়াতকে জুড়ে দেয়। মাওর বোঝাতে তাবারী জানান, আবু উবাইদা মা'মার ইবনুল মুসান্না কবি আ'শার একটি পঙ্‌ক্তি আবৃত্তি করতেন। তাতে এক নারীর হাঁটাকে বলা হয়েছে মাওরুস সাহাবা, মেঘের দোল খেয়ে চলা, না ধীর, না তাড়াহুড়ো। তাবারী এটাও জানান, অন্যরা পঙ্‌ক্তিটি পড়েন মাররুস সাহাবা, মেঘের পেরিয়ে যাওয়া। কুরতুবী ও ইবন কাসীরও পঙ্‌ক্তিটি উদ্ধৃত করেন। ফলে জোড়ার দুই দিকেই মেঘ এসে পড়ে। আকাশের দোলাকে বোঝানো হয় মেঘের চলন দিয়ে, আর এক ব্যাখ্যায় পাহাড়ের চলাকে তুলনা করা হয় মেঘের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Description Stops",
          "bn": "বর্ণনার সীমানা যেখানে"
        },
        "p": [
          {
            "en": "This is a scene from the unseen, and the commentators handle it with restraint. Ibn Zayd, reported by at-Tabari on 52:9, says: this is the Day of Resurrection; as for the mawr, we have no knowledge of it. None of the commentaries consulted here explains how the mountains will move or what the swaying of the sky consists of. They give word meanings, likenesses from the Qur'an and the effect on the heart, and stop there. This article stops there too, and adds no physics or geology that the sources do not contain.",
            "bn": "এটি গায়েবের জগতের দৃশ্য, আর তাফসীরকারেরা একে সামলান সংযমের সঙ্গে। তাবারী ৫২:৯ আয়াতে ইবন যায়দের কথা উদ্ধৃত করেন: এটা কিয়ামতের দিন। আর মাওর, সে সম্পর্কে আমাদের কোনো জ্ঞান নেই। এখানে যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই বলে না পাহাড় কীভাবে চলবে বা আকাশের দোলা আসলে কী দিয়ে গড়া। তাঁরা শব্দের অর্থ দেন, কুরআন থেকে উপমা আনেন, হৃদয়ে এর ছাপ কেমন পড়ে তা দেখান, তারপর থেমে যান। এ লেখাও সেখানেই থামছে। উৎসে নেই এমন কোনো পদার্থবিদ্যা বা ভূতত্ত্ব এখানে জোড়া হয়নি।"
          },
          {
            "en": "The reports themselves deserve their labels. The words of Ibn 'Abbas, Mujahid, Qatadah and ad-Dahhak on 52:9 come in at-Tabari with chains that he does not grade, and the two reports from Ibn 'Abbas do not agree with each other. Muqatil's reading of 52:10 comes in al-Qurtubi with no chain at all, and the cloud reading is introduced only as it is said. No commentary consulted attaches a hadith of the Prophet ﷺ to this verse, so none is quoted here.",
            "bn": "বর্ণনাগুলোর গায়েও ঠিক ঠিক পরিচয় লেখা থাকা দরকার। ৫২:৯ আয়াতে ইবন আব্বাস (রাঃ), মুজাহিদ, কাতাদা ও দাহহাকের কথা তাবারী এনেছেন সনদসহ, কিন্তু সনদের মান বিচার করেননি। ইবন আব্বাস (রাঃ) থেকে আসা দুটি বর্ণনাও একে অন্যের সঙ্গে মেলে না। ৫২:১০ আয়াতে মুকাতিলের ব্যাখ্যা কুরতুবী এনেছেন কোনো সনদ ছাড়াই। মেঘের ব্যাখ্যাটি এসেছে শুধু 'বলা হয়েছে' কথাটি দিয়ে। দেখা তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে নবী ﷺ-এর কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Woe That Follows",
          "bn": "পরের আয়াতের সতর্কবাণী"
        },
        "p": [
          {
            "en": "The next verse turns from the scene to what it means for people: fa-waylun yawma'idhin li-l-mukadhdhibin, then woe that Day to the deniers, and 52:12 describes them as those who play in empty talk. In the abridged Ibn Kathir that woe is Allah's punishment and affliction directed at them, and their playing is living in falsehood and making the religion a subject of mockery and jest. The woe is fixed to yawma'idhin, that Day: the Day of 52:9 and 52:10, when the sky sways and the mountains move.",
            "bn": "পরের আয়াত দৃশ্য থেকে ফেরে মানুষের দিকে: ফাওয়াইলুই ইয়াওমাইযিল লিল মুকাযযিবীন, সেদিন দুর্ভোগ মিথ্যা প্রতিপন্নকারীদের জন্য। ৫২:১২ আয়াত তাদের পরিচয় দেয়: যারা অর্থহীন কথায় মেতে খেলা করে। ইবন কাসীরের সংক্ষিপ্ত সংস্করণে এই দুর্ভোগ হলো তাদের দিকে পাঠানো আল্লাহর শাস্তি আর বিপদ। আর তাদের খেলা মানে বাতিলের মধ্যে জীবন কাটানো, দ্বীনকে ঠাট্টা-তামাশার বিষয় বানানো। দুর্ভোগ বাঁধা আছে ইয়াওমাইযিন শব্দে, অর্থাৎ সেই দিনে। ৫২:৯ ও ৫২:১০ আয়াতের দিন, যেদিন আকাশ দুলবে আর পাহাড় চলবে।"
          },
          {
            "en": "This needs saying plainly. The verses describe a group the Qur'an identifies by what they did: they denied, and they played. They license nothing against any living person or community, and no reader is given the right to point at someone and place him under this woe. The verse is aimed inward first. The question it leaves is not who the deniers around me are, but whether the swaying sky and the moving mountains are real to me, or only a picture I admire and set aside.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতগুলো এমন এক দলের বর্ণনা দেয়, যাদের কুরআন চিনিয়েছে তাদের কাজ দিয়ে: তারা মিথ্যা বলে উড়িয়ে দিয়েছে, আর খেলায় মেতে থেকেছে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কাউকে আঙুল তুলে এই দুর্ভোগের নিচে দাঁড় করানোর অধিকার কোনো পাঠককে দেওয়া হয়নি। আয়াতের তির আগে নিজের দিকে। প্রশ্নটা তাই এই নয় যে আমার আশপাশে অস্বীকারকারী কারা। প্রশ্নটা হলো, দুলন্ত আকাশ আর চলন্ত পাহাড় কি আমার কাছে সত্য, নাকি শুধু এক সুন্দর ছবি, যা দেখে সরিয়ে রাখি?"
          }
        ]
      },
      {
        "h": {
          "en": "Things That Only Look Fixed",
          "bn": "যা শুধু অটল দেখায়"
        },
        "p": [
          {
            "en": "The verse al-Qurtubi brings in, 27:88, has a phrase that stays with the reader: tahsabuha jamidatan, you think them firmly fixed. A mountain is the natural picture of what does not change, and on that Day the thought is overturned. As-Sa'di's question can be carried a step further, in the reader's own life. If the mountains leave their places, what of the plans, the possessions and the standing that a person treats as if they were mountains, solid enough to lean the whole weight of a life upon?",
            "bn": "কুরতুবী যে আয়াতটি টেনে আনেন, সেই ২৭:৮৮ আয়াতে একটা কথা মনে গেঁথে থাকে: তাহসাবুহা জামিদাহ, তুমি ভাবো এগুলো অনড়। যা বদলায় না, তার স্বাভাবিক ছবি হলো পাহাড়। আর সেদিন এই ধারণাটাই উল্টে যাবে। সা'দীর প্রশ্নটাকে পাঠক নিজের জীবনে আরেক ধাপ এগিয়ে নিতে পারেন। পাহাড়ই যদি জায়গা ছেড়ে যায়, তবে সেই পরিকল্পনা, সম্পদ আর মর্যাদার কী হবে, যেগুলোকে মানুষ পাহাড়ের মতো মজবুত ভেবে গোটা জীবনের ভার তুলে দেয়?"
          },
          {
            "en": "None of this is meant to frighten for its own sake. The oath at the start of the surah was about a punishment that falls on the deniers, and the surah describes it so that a listener may take heed while there is still time. The practical reading is modest. Hold the things of this world as things that move, and give your real trust to the One who sets the mountains moving and is not moved. Then the scene of 52:10 is less a spectacle to watch than a reminder of where to stand.",
            "bn": "এর কিছুই শুধু ভয় দেখানোর জন্য নয়। সূরার শুরুর শপথ ছিল সেই শাস্তি নিয়ে, যা মিথ্যা প্রতিপন্নকারীদের উপর আসবে। সূরা তা বর্ণনা করে, যাতে শ্রোতা সময় থাকতেই সাবধান হয়। এর বাস্তব শিক্ষা খুব সাদামাটা। দুনিয়ার জিনিসগুলোকে ধরুন চলমান জিনিস হিসেবে। আর আসল ভরসা রাখুন সেই একজনের উপর, যিনি পাহাড় চালান অথচ নিজে টলেন না। তখন ৫২:১০ আয়াতের দৃশ্যটা তাকিয়ে দেখার মতো কোনো তামাশা থাকে না। হয়ে যায় এক স্মরণ, কোথায় দাঁড়াতে হবে তার।"
          }
        ]
      }
    ]
  },
  "52:17": {
    "sections": [
      {
        "h": {
          "en": "Straight Out of the Fire",
          "bn": "আগুনের দৃশ্য থেকে সোজা বাগানে"
        },
        "p": [
          {
            "en": "Surat at-Tur reaches this verse directly from the Fire. 52:11 pronounces woe on the deniers that Day, and 52:12 describes them as amusing themselves in empty talk. 52:13 shows them thrust towards Hell, and 52:14 to 52:16 give the words said to them: this is the Fire you used to deny; is this magic, or do you not see; burn in it, patient or impatient, it is all the same; you are only repaid for what you used to do. Then, with no transition, the next sentence opens with inna: indeed, the muttaqin are in gardens and bliss.",
            "bn": "সূরা আত-তূর এই আয়াতে পৌঁছায় সরাসরি আগুনের দৃশ্য থেকে। ৫২:১১ সেদিন অস্বীকারকারীদের জন্য ধ্বংসের ঘোষণা দেয়। ৫২:১২ তাদের পরিচয় দেয় এমন লোক হিসেবে, যারা অর্থহীন কথার খেলায় মেতে থাকত। ৫২:১৩ দেখায়, তাদের ধাক্কা দিয়ে জাহান্নামের দিকে নেওয়া হচ্ছে। তারপর ৫২:১৪ থেকে ৫২:১৬ আয়াতে তাদের উদ্দেশে বলা কথাগুলো আসে। এই সেই আগুন, যাকে তোমরা মিথ্যা বলতে। এটা কি জাদু, নাকি তোমরা দেখতে পাচ্ছ না? এতে প্রবেশ করো, ধৈর্য ধরো বা না ধরো, সবই সমান। তোমরা যা করতে, শুধু তারই প্রতিফল পাচ্ছ। ঠিক এর পরেই, কোনো যোগসূত্র ছাড়া, পরের বাক্য শুরু হয় ইন্না দিয়ে: নিশ্চয়ই মুত্তাকীরা থাকবে জান্নাতে আর পরম সুখে।"
          },
          {
            "en": "The commentators read the turn as a deliberate pairing. Al-Qurtubi's whole note on the verse is that pairing in a sentence: having mentioned the state of the disbelievers, He mentioned the state of the believers as well. Ibn Kathir says Allah is here telling of the state of the fortunate, and that it is the opposite of the punishment and exemplary penalty the others are in. His word is didd, the reverse side. The two pictures are meant to be seen together, each making the other sharper, and the verse cannot be fully heard without the verses before it.",
            "bn": "তাফসীরকারেরা এই মোড়কে দেখেন পরিকল্পিত জোড় হিসেবে। এ আয়াতে কুরতুবীর পুরো টীকাই এক বাক্যে সেই জোড়ের কথা: কাফিরদের অবস্থা বলার পর আল্লাহ মুমিনদের অবস্থাও বললেন। ইবন কাসীর বলেন, এখানে আল্লাহ সৌভাগ্যবানদের অবস্থার খবর দিচ্ছেন। আর সে অবস্থা ওরা যে আযাব ও দৃষ্টান্তমূলক শাস্তির মধ্যে আছে, ঠিক তার বিপরীত। তাঁর ব্যবহৃত শব্দটি দিদ্দ, মানে উল্টো পিঠ। দুটি ছবি একসঙ্গে দেখার জন্যই আঁকা। একটি অন্যটিকে আরও স্পষ্ট করে। তাই আগের আয়াতগুলো বাদ দিয়ে এ আয়াতকে পুরোপুরি শোনা যায় না।"
          },
          {
            "en": "Because 52:11 to 52:16 speak about a group, one caution belongs here. Those verses describe what the text describes: people who denied, who spent their days in idle talk, and their end on the Day of Judgement. They license nothing against any living person or community, and they give no reader the right to place a named neighbour among them. The verse that follows names a quality, taqwa, not a membership list. The pair is offered so that a reader can examine his own heart, not so that he can sort other people into the two crowds.",
            "bn": "৫২:১১ থেকে ৫২:১৬ আয়াত একটি দলের কথা বলে, তাই এখানে একটা সতর্কতা জরুরি। আয়াতগুলো কেবল তা-ই বর্ণনা করে, যা পাঠে আছে: যারা অস্বীকার করেছিল, অর্থহীন কথায় দিন কাটিয়েছিল, আর বিচারের দিনে তাদের পরিণতি। আজ বেঁচে থাকা কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াতগুলো কিছুরই অনুমতি দেয় না। পরিচিত কাউকে নাম ধরে ওই দলে বসিয়ে দেওয়ার অধিকারও কোনো পাঠকের নেই। পরের আয়াত একটি গুণের নাম বলে, তাকওয়া, কোনো দলের তালিকা নয়। এই জোড় দেওয়া হয়েছে নিজের অন্তর যাচাই করার জন্য, অন্যদের দুই দলে ভাগ করার জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Warning and Hope in One Breath",
          "bn": "এক নিঃশ্বাসে সতর্কতা ও আশা"
        },
        "p": [
          {
            "en": "As-Sa'di explains why the passage turns this way. Having mentioned the punishment of those who denied, he says, Allah mentioned the bliss of the muttaqin, in order to join targhib and tarhib, encouragement and warning, so that hearts remain between khawf and raja', fear and hope. On his reading the placement is itself guidance. The listener who has just felt the heat of 52:13 to 52:16 is not left there, and the listener drawn to the gardens has only just been shown the alternative.",
            "bn": "আয়াতগুচ্ছ কেন এভাবে মোড় নেয়, সা'দী তা ব্যাখ্যা করেন। তাঁর কথায়, অস্বীকারকারীদের শাস্তির কথা বলার পর আল্লাহ মুত্তাকীদের সুখের কথা বললেন। উদ্দেশ্য তারগীব আর তারহীবকে, অর্থাৎ উৎসাহ আর সতর্কবাণীকে, একসঙ্গে জুড়ে দেওয়া। তাতে অন্তর থাকে খাওফ আর রাজা, ভয় আর আশার মাঝখানে। সা'দীর পাঠে আয়াতের এই অবস্থানটাই হিদায়াত। ৫২:১৩ থেকে ৫২:১৬ আয়াতের উত্তাপ যে শ্রোতা এইমাত্র টের পেয়েছে, তাকে সেখানে ফেলে রাখা হয় না। আর যে শ্রোতা বাগানের দিকে টান অনুভব করছে, তাকে একটু আগেই অন্য পরিণতিটা দেখানো হয়েছে।"
          },
          {
            "en": "This shapes how the verse is read on its own. Lifted out of its place, it can sound like a promise waiting to be collected. In its place it is half of a pair, and as-Sa'di's phrase names the state the pair is meant to produce. Read that way, fear by itself is not the goal, since it can harden into despair, and hope by itself is not the goal either, since it can soften into carelessness. The heart is meant to stand between them, and a reader who quotes only one half has changed what the passage does.",
            "bn": "এতে আয়াতটিকে আলাদা করে পড়ার ধরনও বদলে যায়। জায়গা থেকে তুলে আনলে একে মনে হতে পারে শুধু আদায়ের অপেক্ষায় থাকা এক প্রতিশ্রুতি। নিজের জায়গায় এটি একটি জোড়ের অর্ধেক। সা'দীর কথাটি সেই অবস্থার নাম বলে দেয়, যা এই জোড় তৈরি করতে চায়। এভাবে পড়লে শুধু ভয় লক্ষ্য নয়, কারণ শুধু ভয় শক্ত হয়ে হতাশায় গড়াতে পারে। শুধু আশাও লক্ষ্য নয়, কারণ তা ঢিলে হয়ে গাফিলতিতে নামতে পারে। অন্তরের জায়গা দুয়ের মাঝখানে। যে পাঠক কেবল এক অর্ধেক উদ্ধৃত করেন, তিনি আয়াতগুচ্ছের কাজটাই বদলে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Mindfulness You Can Count",
          "bn": "যে তাকওয়া গোনা যায়"
        },
        "p": [
          {
            "en": "Who are the muttaqin of this verse? At-Tabari answers with conduct: those who were mindful of Allah by carrying out the duties He made obligatory and avoiding acts of disobedience to Him. As-Sa'di gives their mindfulness an object and a method. They are muttaqin li-rabbihim, mindful of their Lord, who guarded against His displeasure and His punishment by doing what leads to safety from them: obeying His commands and keeping away from what He prohibited. Neither commentator, on this verse, defines taqwa as a feeling or a mood.",
            "bn": "এ আয়াতের মুত্তাকী কারা? তাবারী জবাব দেন আচরণ দিয়ে: যারা আল্লাহর ফরজ আদায় করে আর তাঁর নাফরমানি থেকে দূরে থেকে তাঁকে ভয় করে চলেছে। সা'দী তাদের তাকওয়ার লক্ষ্য আর পদ্ধতি দুটোই বলে দেন। তারা মুত্তাকীনা লি-রাব্বিহিম, নিজেদের রবের ব্যাপারে সাবধান। তারা তাঁর অসন্তুষ্টি আর আযাব থেকে বেঁচেছে এমন কাজ করে, যা সেগুলো থেকে বাঁচায়: তাঁর হুকুম মানা আর তাঁর নিষেধ থেকে দূরে থাকা। এ আয়াতে দুজন তাফসীরকারের কেউই তাকওয়াকে নিছক অনুভূতি বা মেজাজ বলে সংজ্ঞা দেননি।"
          },
          {
            "en": "Both definitions are practical. Each names deeds that can be counted at the end of an ordinary day: a duty done, a forbidden thing left alone. That matters for the contrast with what came before. The deniers of 52:12 are described by what they did with their time, wading in talk and amusing themselves. The muttaqin are described, by the commentators, by what they did with theirs. Both groups are defined by conduct, and both speeches on the Day, as the next sections show, end by naming what people used to do.",
            "bn": "দুটো সংজ্ঞাই হাতে-কলমে। প্রতিটি এমন আমলের নাম বলে, যা সাধারণ একটা দিনের শেষে গুনে দেখা যায়: একটা ফরজ আদায় হলো কি না, একটা হারাম ছাড়া হলো কি না। আগের আয়াতগুলোর সঙ্গে তুলনায় এর গুরুত্ব আছে। ৫২:১২ অস্বীকারকারীদের পরিচয় দেয় তারা সময় দিয়ে কী করত তা দিয়ে: বাজে কথায় ডুবে থাকা আর খেলায় মেতে থাকা। তাফসীরকারেরা মুত্তাকীদের পরিচয়ও দেন তারা নিজেদের সময় দিয়ে কী করেছে তা দিয়ে। দুই দলই চেনা যায় আচরণে। সামনের অংশগুলোতে দেখা যাবে, সেদিনের দুই সম্বোধনই শেষ হয় মানুষ কী করত তার উল্লেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Gardens, and Then Na'im",
          "bn": "জান্নাত, তারপর নাঈম"
        },
        "p": [
          {
            "en": "Jannat is plural and indefinite. At-Tabari glosses it as basatin, orchards, and adds that this is in the Hereafter. As-Sa'di also reads it as orchards, and he alone describes them: gardens whose meadows are clothed with intertwining trees, gushing rivers, palaces on every side and ornamented dwellings. Ibn Kathir and al-Qurtubi say nothing further about the gardens in their notes on this verse, al-Baghawi's entry quotes the verse without comment, and this page will not describe them beyond what the fetched commentators say.",
            "bn": "জান্নাত শব্দটি বহুবচন, অনির্দিষ্ট। তাবারী এর ব্যাখ্যা করেন বাসাতীন, অর্থাৎ বাগিচা দিয়ে, আর যোগ করেন যে এটা আখিরাতের কথা। সা'দীও একে বাগিচা হিসেবে পড়েন, আর কেবল তিনিই এর বর্ণনা দেন: এমন বাগান, যার প্রান্তর ঢাকা পরস্পর জড়ানো গাছে, যেখানে উপচে পড়া নদী, চারদিক ঘিরে প্রাসাদ আর সাজানো বাসস্থান। এ আয়াতে ইবন কাসীর আর কুরতুবী বাগান নিয়ে আর কিছু বলেন না। বাগাভীর টীকায় আছে কেবল আয়াতটির উদ্ধৃতি, কোনো ব্যাখ্যা নেই। তাই এই লেখাও সংগৃহীত তাফসীরের বাইরে গিয়ে জান্নাতের কোনো বর্ণনা দেবে না।"
          },
          {
            "en": "The second noun is where this verse gives its own emphasis. Na'im shares its root, n-'-m, with ni'ma, a blessing. At-Tabari reads it as bliss within the gardens, na'im fiha, so that the gardens name where they are and the na'im names how they are there. The Muyassar calls it na'im 'azim, a great bliss, and when it paraphrases the next verse it uses the word again: they delight in what Allah gave them of na'im, of the various kinds of pleasure. The gardens are the setting; the bliss is the life lived in them.",
            "bn": "দ্বিতীয় বিশেষ্যটিতেই এ আয়াতের নিজস্ব জোর। নাঈম শব্দের মূল ন-আ-ম, নি'মা বা নিয়ামতেরও মূল একই। তাবারী একে পড়েন বাগানের ভেতরের সুখ হিসেবে, নাঈমুন ফীহা। তাহলে জান্নাত বলে তারা কোথায়, আর নাঈম বলে সেখানে তারা কেমন আছে। মুয়াসসার একে বলে নাঈমুন আযীম, বিরাট সুখ। পরের আয়াতের ব্যাখ্যায় শব্দটি সেখানে আবার আসে: আল্লাহ তাদের যে নাঈম দিয়েছেন, নানা রকম আনন্দের যে উপকরণ দিয়েছেন, তারা তা উপভোগ করে। বাগান হলো পটভূমি, আর সুখ হলো সেখানে যাপিত জীবন।"
          }
        ]
      },
      {
        "h": {
          "en": "Heart, Spirit and Body",
          "bn": "হৃদয়, রূহ আর দেহ"
        },
        "p": [
          {
            "en": "As-Sa'di's gloss on na'im is the shortest line in his note and the widest. The word, he says, includes the bliss of the heart, of the spirit and of the body. He does not list what each consists of, and nothing in the texts fetched for this verse does it for him. What he does is refuse to narrow the word. The bliss of the verse is not only food and shade, and not only an inner calm. On his reading it reaches all three parts of a person together, and none is left out.",
            "bn": "নাঈম শব্দের উপর সা'দীর টীকাটি তাঁর আলোচনার সবচেয়ে ছোট লাইন, আবার সবচেয়ে বিস্তৃতও। তিনি বলেন, শব্দটি হৃদয়ের সুখ, রূহের সুখ আর দেহের সুখ, সবকিছুকে শামিল করে। প্রতিটির ভেতরে কী আছে, তার তালিকা তিনি দেন না। এ আয়াতের জন্য সংগৃহীত কোনো লেখাও তা দেয় না। তিনি যা করেন তা হলো শব্দটিকে সংকীর্ণ হতে না দেওয়া। আয়াতের সুখ কেবল খাবার আর ছায়া নয়, কেবল ভেতরের প্রশান্তিও নয়। তাঁর পাঠে এ সুখ মানুষের তিনটি দিকেই একসঙ্গে পৌঁছায়, কোনোটি বাদ পড়ে না।"
          },
          {
            "en": "That reading sits well in this passage. The punishment just described also reached more than the body. In 52:13 the deniers are thrust towards the Fire; in 52:15 they are asked whether this is magic or whether they cannot see; in 52:16 they are told that patience and its absence are now the same. Against that, as-Sa'di's na'im covers the same ground in reverse. The contrast he names in his first sentence, punishment and then bliss, carries on down into the detail of the passage, verse by verse.",
            "bn": "এই পাঠ আয়াতগুচ্ছের সঙ্গে ভালো মেলে। একটু আগে বর্ণিত শাস্তিও শুধু দেহে থেমে থাকেনি। ৫২:১৩ আয়াতে অস্বীকারকারীদের ধাক্কা দিয়ে আগুনের দিকে নেওয়া হয়। ৫২:১৫ আয়াতে তাদের জিজ্ঞেস করা হয়, এটা কি জাদু, নাকি তোমরা দেখতে পাচ্ছ না। ৫২:১৬ আয়াতে বলা হয়, ধৈর্য ধরা আর না ধরা এখন সমান। এর বিপরীতে সা'দীর নাঈম একই জায়গাগুলো উল্টো দিক থেকে ঢেকে দেয়। প্রথম বাক্যে তিনি যে বৈপরীত্যের কথা বলেন, আগে শাস্তি তারপর সুখ, তা আয়াতে আয়াতে খুঁটিনাটি পর্যন্ত গড়িয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Given, and Guarded, by Their Lord",
          "bn": "রবের দান, রবেরই হেফাজত"
        },
        "p": [
          {
            "en": "52:18 continues the sentence: fakihin bima atahum rabbuhum, enjoying what their Lord has given them, wa-waqahum rabbuhum 'adhaba l-jahim, and their Lord has guarded them from the punishment of the Blaze. The Muyassar paraphrases the two verses together: in gardens and great bliss, they delight in what Allah gave them, of the various kinds of pleasure, and Allah rescued them from the punishment of the Fire. Ibn Kathir, in the abridged English, names some of those kinds: foods, drinks, clothes, dwelling places, mounts and so forth.",
            "bn": "৫২:১৮ বাক্যটিকে এগিয়ে নেয়: ফাকিহীনা বিমা আতাহুম রাব্বুহুম, তাদের রব তাদের যা দিয়েছেন তা তারা উপভোগ করবে; ওয়া ওয়াকাহুম রাব্বুহুম আযাবাল জাহীম, আর তাদের রব তাদের জাহান্নামের আযাব থেকে রক্ষা করেছেন। মুয়াসসার দুই আয়াতকে এক সঙ্গে ব্যাখ্যা করে। জান্নাত আর বিরাট সুখের মাঝে থেকে আল্লাহর দেওয়া নানা রকম আনন্দ তারা উপভোগ করে, আর আল্লাহ তাদের আগুনের আযাব থেকে উদ্ধার করেছেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ সেই আনন্দের কয়েকটি ধরন উল্লেখ করে: খাবার, পানীয়, পোশাক, বাসস্থান, বাহন ইত্যাদি।"
          },
          {
            "en": "On the second half Ibn Kathir makes a point that is easy to pass over: being saved from the Fire is a bounty in itself. The rescue is counted among the gifts. In the Arabic, rabbuhum, their Lord, is said twice in the verse, once with the giving and once with the guarding, so that both are traced to the same Lord. A reader who has just heard 52:13 to 52:16 knows what that guarding spared them from. Beyond the rescue, Ibn Kathir adds, they entered Paradise, with delights no eye has seen, no ear has heard, nor a heart imagined.",
            "bn": "দ্বিতীয় অংশ নিয়ে ইবন কাসীরের একটি কথা সহজেই চোখ এড়িয়ে যায়: আগুন থেকে বেঁচে যাওয়াটাই নিজে এক নিয়ামত। উদ্ধার পাওয়ার জায়গা দানের তালিকাতেই। আরবিতে আয়াতটিতে রাব্বুহুম, তাদের রব, শব্দটি এসেছে দুইবার। একবার দেওয়ার সঙ্গে, একবার রক্ষা করার সঙ্গে। দুটোই ফিরে যায় একই রবের দিকে। যে পাঠক এইমাত্র ৫২:১৩ থেকে ৫২:১৬ পর্যন্ত শুনেছেন, তিনি জানেন সেই রক্ষা তাদের কিসের হাত থেকে বাঁচিয়েছে। ইবন কাসীর আরও বলেন, এই উদ্ধারের ওপরে তারা প্রবেশ করেছে জান্নাতে, যেখানে এমন আনন্দ আছে যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, কোনো হৃদয় কল্পনাও করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Eat and Drink at Ease",
          "bn": "তৃপ্তিভরে খাও, পান করো"
        },
        "p": [
          {
            "en": "52:19 gives the words spoken to them: kulu wa-shrabu hani'an bima kuntum ta'malun, eat and drink with ease, for what you used to do. Ibn Kathir sets it beside 69:24, eat and drink at ease for what you sent ahead in days gone by, and explains it plainly: this is the just reward for your deeds. Then, in the same sentence, he adds that surely all of this is a favour from Allah and a reward from Him. He holds both thoughts together, recompense and grace, without letting either cancel the other.",
            "bn": "৫২:১৯ আয়াতে তাদের উদ্দেশে বলা কথা: কুলূ ওয়াশরাবূ হানীআন বিমা কুনতুম তা'মালূন, তৃপ্তির সঙ্গে খাও আর পান করো, তোমরা যা করতে তার বিনিময়ে। ইবন কাসীর একে পাশে রাখেন ৬৯:২৪ আয়াতের, যেখানে বলা হয়েছে, বিগত দিনগুলোতে যা আগে পাঠিয়েছ তার বিনিময়ে তৃপ্তিভরে খাও, পান করো। তাঁর ব্যাখ্যা সোজা: এটাই তোমাদের আমলের ন্যায্য প্রতিদান। একই বাক্যে তিনি আবার যোগ করেন, নিশ্চয়ই এ সবই আল্লাহর অনুগ্রহ এবং তাঁর দেওয়া পুরস্কার। প্রতিদান আর অনুগ্রহ, দুটো কথাই তিনি একসঙ্গে ধরে রাখেন। কোনোটি দিয়ে অন্যটিকে বাতিল করেন না।"
          },
          {
            "en": "Now set the closing phrases of 52:16 and 52:19 side by side. The deniers were told, innama tujzawna ma kuntum ta'malun: you are only repaid what you used to do. The muttaqin are told to eat and drink bima kuntum ta'malun: for what you used to do. The same two words, kuntum ta'malun, close both speeches. Ibn Kathir's opening remark, that the state of the fortunate is the reverse of what the others are in, could hardly be shown more simply. Two crowds hear a sentence about their own deeds, and hear opposite outcomes.",
            "bn": "এবার ৫২:১৬ আর ৫২:১৯ আয়াতের শেষ অংশ দুটো পাশাপাশি রাখুন। অস্বীকারকারীদের বলা হয়েছিল, ইন্নামা তুজযাওনা মা কুনতুম তা'মালূন: তোমরা যা করতে, কেবল তারই প্রতিফল পাচ্ছ। মুত্তাকীদের বলা হচ্ছে খাও আর পান করো, বিমা কুনতুম তা'মালূন: তোমরা যা করতে তার বিনিময়ে। কুনতুম তা'মালূন, এই দুই শব্দেই দুটো সম্বোধনের শেষ। সৌভাগ্যবানদের অবস্থা অন্যদের অবস্থার বিপরীত, ইবন কাসীরের শুরুর এই কথাটি এর চেয়ে সহজে দেখানো কঠিন। দুই দল নিজেদের আমল নিয়ে একই ধরনের বাক্য শোনে, আর শোনে সম্পূর্ণ উল্টো পরিণতির কথা।"
          },
          {
            "en": "The description goes on beyond these verses. 52:20 has them reclining on couches set in rows and paired with companions, 52:21 speaks of believers joined by their offspring who followed them in faith, and 52:22 and 52:23 continue with fruit, meat and a cup passed among them, with the passage running on to 52:28. Each of those verses has, or will have, its own page in this series, and the commentary on them belongs there. This page stays with the opening line and the two verses that complete its sentence.",
            "bn": "বর্ণনা এই আয়াতগুলোর পরেও চলতে থাকে। ৫২:২০ আয়াতে তারা সারি করে সাজানো আসনে হেলান দিয়ে বসে, আর তাদের সঙ্গিনী দেওয়া হয়। ৫২:২১ বলে সেই মুমিনদের কথা, যাদের সন্তানেরা ঈমানে তাদের অনুসরণ করেছে, আর তাদের মিলিয়ে দেওয়া হবে। ৫২:২২ ও ৫২:২৩ আয়াতে আসে ফল, গোশত আর হাতে হাতে ঘোরা পানপাত্রের কথা। আয়াতগুচ্ছ এভাবে চলে ৫২:২৮ পর্যন্ত। এসব আয়াতের প্রতিটির জন্য এই সিরিজে আলাদা লেখা আছে বা থাকবে, সেগুলোর ব্যাখ্যা সেখানেই। এই লেখা থাকছে শুরুর বাক্যটি আর তাকে পূর্ণ করা দুই আয়াতের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hope That Comes With Work",
          "bn": "যে আশার সঙ্গে আমলও আসে"
        },
        "p": [
          {
            "en": "What can a reader do with these five words? First, keep them in their place. Read 52:17 straight after 52:16, aloud if possible, so the turn is heard as the commentators heard it: the reverse of the Fire, joined to it on purpose, so that fear and hope arrive together. Second, take the commentators' account of the muttaqin as a check at the end of each day. At-Tabari's duties and sins, and as-Sa'di's commands and prohibitions, come down to a plain question: what did I do today, and what did I leave?",
            "bn": "এই পাঁচটি শব্দ নিয়ে পাঠক কী করতে পারেন? প্রথমত, শব্দগুলোকে তাদের জায়গাতেই রাখুন। ৫২:১৬ পড়ার ঠিক পরে ৫২:১৭ পড়ুন, পারলে জোরে, যাতে মোড়টা সেভাবে কানে আসে যেভাবে তাফসীরকারেরা শুনেছেন। আগুনের উল্টো পিঠ, ইচ্ছে করে তার সঙ্গে জোড়া, যেন ভয় আর আশা একসঙ্গে আসে। দ্বিতীয়ত, মুত্তাকীদের যে পরিচয় তাফসীরকারেরা দিয়েছেন, তা দিয়ে প্রতিদিনের শেষে নিজেকে যাচাই করুন। তাবারীর ফরজ আর নাফরমানি, সা'দীর হুকুম আর নিষেধ, সব মিলে একটা সোজা প্রশ্নে এসে দাঁড়ায়: আজ আমি কী করলাম, আর কী ছাড়লাম?"
          },
          {
            "en": "Third, let as-Sa'di's widest gloss widen the hope. Na'im of the heart, the spirit and the body reminds a reader that the longing for Paradise can be more than appetite, and that the inner life is inside the word too. Fourth, count the guarding as a gift, as Ibn Kathir does in his note on 52:18. Every harm a believer has been spared can turn the mind to that rescue. And let the phrase that closes 52:16 and 52:19 alike stay with the reader: what you used to do is being written down now, today.",
            "bn": "তৃতীয়ত, সা'দীর সবচেয়ে বিস্তৃত ব্যাখ্যাটি আশাকেও বড় করুক। হৃদয়, রূহ আর দেহের নাঈম মনে করিয়ে দেয়, জান্নাতের প্রতি টান শুধু ভোগের আকাঙ্ক্ষা না হলেও চলে, ভেতরের জীবনও এই শব্দের অন্তর্ভুক্ত। চতুর্থত, ইবন কাসীর ৫২:১৮ আয়াতের আলোচনায় যেমন করেছেন, রক্ষা পাওয়াকেও নিয়ামত বলে গুনুন। মুমিন যত বিপদ থেকে বেঁচে গেছেন, প্রতিটিই মনকে সেই বড় উদ্ধারের দিকে ফেরাতে পারে। আর ৫২:১৬ ও ৫২:১৯ আয়াত যে কথায় শেষ হয়, তা পাঠকের মনে থেকে যাক: তোমরা যা করতে, তা লেখা হচ্ছে এখনই, আজকেই।"
          }
        ]
      }
    ]
  },
  "52:20": {
    "sections": [
      {
        "h": {
          "en": "From the Blaze to the Couches",
          "bn": "আগুন থেকে আসনের দিকে"
        },
        "p": [
          {
            "en": "The passage turns sharply. Verses 52:14 to 52:16 address the people of the Fire: this is what you used to deny; burn in it, and patience or impatience is all the same for you. Then 52:17 opens on the other side. The righteous are in gardens and delight, enjoying what their Lord has given them, protected from the punishment of the blaze, and told in 52:19 to eat and drink with ease for what they used to do. Verse 52:20 carries the same description on without a break, in seven Arabic words.",
            "bn": "অনুচ্ছেদটি হঠাৎ মোড় নেয়। ৫২:১৪ থেকে ৫২:১৬ আয়াত পর্যন্ত কথা হচ্ছে জাহান্নামবাসীদের সঙ্গে: এই সেই আগুন যাকে তোমরা মিথ্যা বলতে, এখন এতে জ্বলো, ধৈর্য ধরো বা না ধরো, তোমাদের জন্য দুই-ই সমান। তারপর ৫২:১৭ আয়াত খুলে দেয় অন্য পাশের দরজা। মুত্তাকীরা আছে বাগানে আর নিয়ামতে। রব যা দিয়েছেন তা উপভোগ করছে, জাহান্নামের আযাব থেকে তিনি তাদের বাঁচিয়েছেন। ৫২:১৯ আয়াতে তাদের বলা হয়, তোমাদের আমলের বিনিময়ে তৃপ্তি নিয়ে খাও আর পান করো। ৫২:২০ আয়াত কোনো বিরতি ছাড়াই সেই বর্ণনা এগিয়ে নেয়, মাত্র সাতটি আরবি শব্দে।"
          },
          {
            "en": "The verse has two halves joined by and. The first describes how they sit: muttaki'ina 'ala sururin masfufa, reclining on couches set in rows. The second describes whom they are with: wa-zawwajnahum bi-hurin 'in, and We paired them, or married them, with hur 'in. The commentaries fetched for this verse are brief on it, and they do not all read its words the same way. This article reports what they say, word by word, and keeps their differences as differences, without choosing between them.",
            "bn": "আয়াতের দুটি অংশ, মাঝখানে 'আর' দিয়ে জোড়া। প্রথম অংশ বলে তারা কীভাবে বসে আছে: মুত্তাকিঈনা আলা সুরুরিম মাসফূফাহ, সারি করে সাজানো আসনে হেলান দিয়ে। দ্বিতীয় অংশ বলে তারা কাদের সঙ্গে আছে: ওয়া যাওয়াজনাহুম বিহূরিন ঈন, আর আমি তাদের জুড়ে দিয়েছি, বা বিয়ে দিয়েছি, হূরুন ঈনের সঙ্গে। এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলোর আলোচনা সংক্ষিপ্ত। শব্দগুলোর পাঠও সবার এক নয়। এ লেখা শব্দ ধরে ধরে তাঁদের কথা তুলে ধরবে। মতভেদ থাকলে মতভেদ হিসেবেই রাখবে, কোনো পক্ষ বেছে নেবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Seated With Nowhere to Hurry",
          "bn": "তাড়াহীন স্থির বসা"
        },
        "p": [
          {
            "en": "Muttaki'in is the plural participle of ittika', reclining. As-Sa'di defines it as sitting in a manner of firmness, rest and settledness: al-julus 'ala wajh at-tamakkun wa-r-raha wa-l-istiqrar. It is the posture of someone who is not about to get up, who has nowhere to hurry to and nothing to guard against. The couches are sururin, which al-Qurtubi explains as the plural of sarir. As-Sa'di describes them as ara'ik, couches adorned with every kind of finery, rich coverings and bright furnishings.",
            "bn": "মুত্তাকিঈন শব্দটি ইত্তিকা থেকে, মানে হেলান দিয়ে বসা। সা'দী এর সংজ্ঞা দেন এভাবে: স্থিরতা, আরাম আর নিশ্চিন্ত অবস্থান নিয়ে বসা। আল-জুলূসু আলা ওয়াজহিত তামাক্কুনি ওয়ার রাহাতি ওয়াল ইসতিকরার। এ এমন মানুষের বসা, যে এখনই উঠে পড়ার কথা ভাবছে না। কোথাও ছুটে যাওয়ার তাড়া নেই, কোনো কিছু থেকে নিজেকে সামলে রাখারও দরকার নেই। আসনগুলোর নাম সুরুর। কুরতুবী বলেন, এটি সারীর শব্দের বহুবচন। সা'দীর বর্ণনায় এগুলো আরাইক, নানা রকম সাজে সাজানো আসন, তাতে দামি আবরণ আর ঝলমলে বিছানা।"
          },
          {
            "en": "Two commentators notice something left unsaid. At-Tabari says the verse leaves out the words on cushions, namariq, because what it does mention already points to them. Al-Qurtubi likewise reads an omission in the phrase, which he spells out as reclining on the cushions of couches. Ibn Kathir opens his comment with a report from ath-Thawri, through Husayn and Mujahid, from Ibn 'Abbas: the couches are in al-hijal. The abridged English edition of Ibn Kathir renders the phrase as thrones in howdahs.",
            "bn": "দুজন মুফাসসির এমন একটা কথা খেয়াল করেন, যা আয়াতে উহ্য রয়েছে। তাবারী বলেন, এখানে 'গদির উপর', অর্থাৎ নামারিক শব্দটি বাদ দেওয়া হয়েছে, কারণ যা বলা হয়েছে তা থেকেই সেটা বোঝা যায়। কুরতুবীও এখানে একটি উহ্য অংশ পড়েন এবং পুরো কথাটা খুলে বলেন: আসনের গদিতে হেলান দিয়ে। ইবন কাসীর তাঁর আলোচনা শুরু করেন সাওরীর একটি বর্ণনা দিয়ে। তিনি হুসাইন ও মুজাহিদের মাধ্যমে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: আসনগুলো রয়েছে আল-হিজালের মধ্যে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ এ কথাটির অনুবাদ করেছে হাওদার ভেতরের সিংহাসন।"
          }
        ]
      },
      {
        "h": {
          "en": "Rows Turned Inward",
          "bn": "ভেতরমুখী সারি"
        },
        "p": [
          {
            "en": "The commentators tie masfufa to the idea of a row, and unpack it in slightly different ways. At-Tabari: they have been made into rows. Al-Baghawi: set each beside the other. Al-Qurtubi quotes Ibn al-A'rabi: joined to each other until they become a row. These three agree on the picture of an ordered line. Ibn Kathir adds a direction. The meaning of masfufa, he says, is that their faces are turned towards each other, and he cites 37:44, on couches, facing each other.",
            "bn": "মাসফূফাহ শব্দটিকে মুফাসসিরগণ সারির ধারণার সঙ্গে যুক্ত করেন, তবে ব্যাখ্যায় সামান্য তফাত আছে। তাবারী বলেন, এগুলোকে সারি সারি করে রাখা হয়েছে। বাগাভী বলেন, একটি আরেকটির পাশে রাখা। কুরতুবী ইবনুল আরাবীর কথা উদ্ধৃত করেন: একটির সঙ্গে আরেকটি জোড়া লাগানো, এভাবে মিলে একটা সারি হয়ে যায়। এই তিনটি ব্যাখ্যা একই ছবি আঁকে, সুশৃঙ্খল একটি সারি। ইবন কাসীর এর সঙ্গে দিক যোগ করেন। তাঁর মতে মাসফূফাহর অর্থ হলো, তাদের মুখ পরস্পরের দিকে ফেরানো। প্রমাণ হিসেবে তিনি ৩৭:৪৪ আয়াত আনেন: আসনে বসে, মুখোমুখি।"
          },
          {
            "en": "The Muyassar, which treats 52:19 and 52:20 together, glosses the couches as mutaqabila, facing each other, the word of 37:44. So the commentators do not only line the couches up; at least two of them turn them inward. Al-Qurtubi also passes on reports about the couches' material, their size and how they lower themselves for the person who sits, the first two put to Ibn 'Abbas and the last to unnamed reports; no chain is given for any of them in the text fetched, so this article leaves them out.",
            "bn": "মুয়াসসার ৫২:১৯ ও ৫২:২০ আয়াত একসঙ্গে ব্যাখ্যা করে। সেখানে আসনগুলোকে বলা হয়েছে মুতাকাবিলা, মুখোমুখি। ৩৭:৪৪ আয়াতেও এই শব্দই আছে। তাহলে মুফাসসিরগণ আসনগুলোকে শুধু সারিতে সাজান না, অন্তত দুজন সেগুলোকে ভেতরের দিকে, পরস্পরের দিকে ঘুরিয়ে দেন। কুরতুবী আসনগুলোর উপাদান, আকার, আর বসতে গেলে সেগুলো কীভাবে নিচু হয়ে আসে, এসব নিয়ে কিছু বর্ণনাও এনেছেন। উপাদান আর আকারের দুই কথা ইবন আব্বাস (রাঃ)-এর নামে, আর নিচু হওয়ার কথাটি নামহীন বর্ণনা থেকে। সংগৃহীত লেখায় এগুলোর কোনোটিরই সনদ দেওয়া নেই, তাই এ লেখা সেগুলো বাদ রাখছে।"
          },
          {
            "en": "As-Sa'di draws the fullest meaning from the word. Allah described the couches as masfufa, he says, to point to their great number and their fine arrangement, to the gathering of their people, and to their joy in each other's good company and the gentleness with which they speak to each other. The Qur'an shows that company a few verses on. In 52:25 they come towards each other, asking questions, and in 52:26 they say that before, among their own families, they used to live in fear.",
            "bn": "শব্দটি থেকে সবচেয়ে বেশি অর্থ বের করেন সা'দী। তিনি বলেন, আল্লাহ আসনগুলোকে মাসফূফাহ বলেছেন এটা বোঝাতে যে আসন অনেক, সাজানোও সুন্দর। জান্নাতবাসীরা সেখানে একত্র হয়, পরস্পরের ভালো সাহচর্যে আনন্দ পায়, আর একে অপরের সঙ্গে কথা বলে কোমল ভাষায়। সেই সাহচর্যের ছবি কুরআন দেখায় কয়েক আয়াত পরেই। ৫২:২৫ আয়াতে তারা একে অপরের দিকে এগিয়ে যায়, প্রশ্ন করে। ৫২:২৬ আয়াতে বলে, আগে নিজেদের পরিবারের মাঝে থেকেও আমরা ভয়ে ভয়ে থাকতাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Paired, Joined or Married",
          "bn": "জোড়া, সঙ্গী, নাকি বিয়ে"
        },
        "p": [
          {
            "en": "Then the second half: wa-zawwajnahum bi-hurin 'in. Common English renderings say We will marry them to, and the fetched texts include a reading that says exactly that. Ibn Kathir reports that Mujahid explained zawwajnahum as ankahnahum, We married them, using the verb of marriage itself. Ibn Kathir's own gloss holds two things together: We made for them righteous companions, qarinat salihat, and beautiful wives, zawjat hisan, from the hur 'in. His abridged English edition renders this as righteous spouses and beautiful wives.",
            "bn": "এবার দ্বিতীয় অংশ: ওয়া যাওয়াজনাহুম বিহূরিন ঈন। প্রচলিত ইংরেজি অনুবাদে আছে, আমি তাদের বিয়ে দেব। সংগৃহীত তাফসীরেও ঠিক এই পাঠ আছে। ইবন কাসীর জানান, মুজাহিদ যাওয়াজনাহুমের ব্যাখ্যা করেছেন আনকাহনাহুম দিয়ে, অর্থাৎ আমি তাদের বিয়ে দিয়েছি। এখানে তিনি সরাসরি বিয়ের ক্রিয়াটিই ব্যবহার করেছেন। ইবন কাসীরের নিজের ব্যাখ্যায় দুটি কথা একসঙ্গে আছে: আমি তাদের জন্য করেছি নেক সঙ্গিনী, কারীনাত সালিহাত, আর হূরুন ঈন থেকে সুন্দরী স্ত্রী, যাওজাত হিসান। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণ এর অনুবাদ করেছে নেক জীবনসঙ্গী ও সুন্দরী স্ত্রী।"
          },
          {
            "en": "At-Tabari reads the verb from its sense of pairing. Allah says, he explains, We paired the males among these righteous with spouses, hur 'in, from among women. He illustrates from ordinary speech: a man says zawwij this single leather sock, or this single sandal, with the other, meaning make the two of them a pair. On this reading the verb names the matching of what was single. At-Tabari adds that he has explained the meaning of zawj earlier in his work and will not repeat it here.",
            "bn": "তাবারী ক্রিয়াটি পড়েন জোড়া বানানোর অর্থে। তাঁর ব্যাখ্যায় আল্লাহ বলছেন: এই মুত্তাকীদের মধ্যে যারা পুরুষ, তাদের আমি জোড়া মিলিয়ে দিয়েছি নারীদের মধ্য থেকে হূরুন ঈন জীবনসঙ্গিনীর সঙ্গে। উদাহরণ তিনি আনেন সাধারণ কথাবার্তা থেকে। কেউ বলে, এই একলা চামড়ার মোজাটা বা এই একলা জুতোটাকে ওই একলাটার সঙ্গে যাওয়িজ করো, মানে দুটিকে মিলিয়ে একজোড়া বানাও। এই পাঠে ক্রিয়াটির মানে, যা একা ছিল তাকে জোড়া মেলানো। তাবারী আরও বলেন, যাওজ শব্দের অর্থ তিনি তাঁর কিতাবে আগেই ব্যাখ্যা করেছেন, এখানে আর পুনরাবৃত্তি করবেন না।"
          },
          {
            "en": "Al-Qurtubi goes further in that direction. His gloss is qarannahum bihinna, We joined them with them. He quotes Yunus ibn Habib: the Arabs say zawwajtuhu imra'atan and tazawwajtu imra'atan, with no preposition, and tazawwajtu bi-mra'atin is not their speech. So the bi- in this verse, he says, means joining, as in 37:22, gather those who did wrong and their azwaj, that is, their companions. Al-Qurtubi then sets al-Farra' beside him: tazawwajtu bi-mra'atin is a usage in the dialect of Azd Shanu'a.",
            "bn": "কুরতুবী এই দিকে আরও এগিয়ে যান। তাঁর ব্যাখ্যা: কারান্নাহুম বিহিন্না, আমি তাদের ওদের সঙ্গে মিলিয়ে দিয়েছি। তিনি ইউনুস ইবন হাবীবের কথা উদ্ধৃত করেন। আরবরা বলে যাওয়াজতুহু ইমরাআতান, তাযাওয়াজতু ইমরাআতান, মাঝে কোনো অব্যয় ছাড়া। তাযাওয়াজতু বিমরাআতিন আরবদের ভাষা নয়। তাই এ আয়াতের 'বি' বোঝায় সঙ্গী করে দেওয়া, যেমন ৩৭:২২ আয়াতে: জালিমদের আর তাদের আযওয়াজকে একত্র করো, মানে তাদের সঙ্গীদের। এরপর কুরতুবী পাশে রাখেন ফাররার মত: তাযাওয়াজতু বিমরাআতিন আযদ শানূআ গোত্রের উপভাষায় প্রচলিত।"
          },
          {
            "en": "So the fetched texts keep two readings side by side. Mujahid, through Ibn Kathir, gives the verb of marriage. Al-Qurtubi, through Yunus ibn Habib, reads joining and companionship, while recording, through al-Farra', the dialect that would allow the other. At-Tabari's pairing of what was single sits between them, and Ibn Kathir names both companions and wives. This article does not decide between them, and neither reading needs more than its own words to be understood.",
            "bn": "অর্থাৎ সংগৃহীত লেখাগুলোতে দুটি পাঠ পাশাপাশি রয়ে গেছে। ইবন কাসীরের মাধ্যমে মুজাহিদ দেন বিয়ের ক্রিয়া। কুরতুবী ইউনুস ইবন হাবীবের সূত্রে পড়েন মিলিয়ে দেওয়া আর সঙ্গী করা অর্থে, আবার ফাররার সূত্রে সেই উপভাষার কথাও লিখে রাখেন, যা অন্য পাঠের সুযোগ দেয়। তাবারীর একাকীকে জোড়া মেলানোর ব্যাখ্যা এ দুয়ের মাঝামাঝি। ইবন কাসীর সঙ্গিনী আর স্ত্রী দুটোই বলেন। এ লেখা কোনো একটিকে বেছে নিচ্ছে না। প্রতিটি পাঠ তার নিজের শব্দেই বোঝা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Glosses on Hur and 'In",
          "bn": "হূর আর ঈনের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "The commentators define the two descriptive words briefly. At-Tabari: hur is the plural of hawra', she in whose eye the white is intensely white and the dark of the eye intensely dark; 'in is the plural of 'ayna', she whose eyes are large, in beauty and breadth. The Muyassar renders the phrase as women, fair, wide-eyed and beautiful. As-Sa'di says of 'in: beautiful of eye, their white and their black both clear. Ibn Kathir and at-Tabari each say they have described the hur more fully elsewhere and will not repeat it here.",
            "bn": "মুফাসসিরগণ বিশেষণ দুটির সংক্ষিপ্ত সংজ্ঞা দেন। তাবারী বলেন, হূর হলো হাওরা শব্দের বহুবচন। হাওরা সেই নারী, যার চোখের সাদা অংশ খুব সাদা আর কালো অংশ খুব কালো। ঈন হলো আইনা শব্দের বহুবচন, যার চোখ বড়, সৌন্দর্যে ও প্রশস্ততায়। মুয়াসসার পুরো কথাটির অর্থ দেয়: উজ্জ্বল, ডাগর চোখের, সুন্দরী নারী। সা'দী ঈন সম্পর্কে বলেন: সুন্দর চোখের অধিকারিণী, যাদের চোখের সাদা ও কালো দুটোই স্বচ্ছ। ইবন কাসীর ও তাবারী দুজনেই বলেন, হূরদের বিস্তারিত বিবরণ তাঁরা অন্য জায়গায় দিয়েছেন, এখানে আর পুনরাবৃত্তি করবেন না।"
          },
          {
            "en": "As-Sa'di places the clause inside the whole description. Once there had been gathered for them, he says, delight of heart, spirit and body beyond what the mind can picture, food and drink and fine gatherings, there remained the enjoyment of women, without whom joy is not complete. So Allah mentioned that they have spouses who are the most perfect of women in qualities, in form and in character. The hur, in his words, are women who have joined outward beauty of form to excellent character, akhlaq fadila.",
            "bn": "সা'দী এই অংশটিকে পুরো বর্ণনার ভেতরে রেখে পড়েন। তিনি বলেন, তাদের জন্য যখন হৃদয়, আত্মা ও দেহের এমন নিয়ামত জড়ো হলো যা কল্পনাতেও আসে না, খাবার, পানীয়, সুন্দর মজলিস সবই হলো, তখন বাকি রইল নারীদের সাহচর্যের আনন্দ, যা ছাড়া আনন্দ পূর্ণ হয় না। তাই আল্লাহ জানালেন, তাদের জন্য আছে এমন জীবনসঙ্গিনী, যারা গুণে, গঠনে ও চরিত্রে নারীদের মধ্যে সবচেয়ে পরিপূর্ণ। তাঁর ভাষায় হূর সেই নারীরা, যারা বাইরের রূপের সৌন্দর্যের সঙ্গে উত্তম চরিত্র, আখলাকে ফাদিলা, একসঙ্গে ধারণ করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where These Texts Fall Silent",
          "bn": "যেখানে এই লেখাগুলো নীরব"
        },
        "p": [
          {
            "en": "Several questions readers bring to this verse are not taken up in the texts fetched for it. None of them discusses whether the hur are women created for Paradise or whether the believing women of this world are among them, and the fuller descriptions that at-Tabari and Ibn Kathir point back to were not fetched for this verse. At-Tabari mentions that the people of interpretation differed over the hur and that he gave his preferred view earlier. That earlier discussion is not before us, so this article reports the fact of the difference and nothing of its content.",
            "bn": "পাঠকেরা এ আয়াত নিয়ে যেসব প্রশ্ন নিয়ে আসেন, তার কয়েকটির আলোচনা এ আয়াতের জন্য সংগৃহীত লেখাগুলোতে নেই। হূররা কি জান্নাতের জন্য সৃষ্ট নারী, নাকি দুনিয়ার মুমিন নারীরাও তাদের মধ্যে আছেন, এ প্রশ্ন কোনো লেখাতেই আলোচিত হয়নি। তাবারী ও ইবন কাসীর যে বিস্তারিত বিবরণের দিকে ইঙ্গিত করেন, সেগুলোও এ আয়াতের জন্য সংগ্রহ করা হয়নি। তাবারী উল্লেখ করেন, হূর নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে, আর নিজের পছন্দের মত তিনি আগেই জানিয়েছেন। সেই আগের আলোচনা আমাদের সামনে নেই। তাই এ লেখা শুধু মতভেদ থাকার কথাটুকু জানাচ্ছে, তার বিষয়বস্তু নয়।"
          },
          {
            "en": "The verse speaks of the righteous in masculine forms, and at-Tabari's gloss names the pairing for the males among the muttaqin. None of the commentaries fetched for this verse speaks of the reward of the believing women, so this article says nothing about it here. Ibn Kathir carries two narrations on the reclining: one through Ibn Abi Hatim from al-Haytham ibn Malik at-Ta'i, ascribed to the Prophet ﷺ, and one from Thabit, introduced with it has reached us. Neither could be confirmed in the collections this article checks, so both are left out.",
            "bn": "আয়াত মুত্তাকীদের কথা বলে পুংলিঙ্গের রূপে, আর তাবারীর ব্যাখ্যা জোড়া মেলানোর কথাটি বলে মুত্তাকীদের মধ্যে পুরুষদের জন্য। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর মুমিন নারীদের প্রতিদান নিয়ে কিছু বলেনি, তাই এ লেখাও এখানে সে বিষয়ে কিছু বলছে না। ইবন কাসীর হেলান দিয়ে বসা নিয়ে দুটি বর্ণনা এনেছেন। একটি ইবন আবী হাতিমের সূত্রে হাইসাম ইবন মালিক তাঈ থেকে, নবী ﷺ-এর নামে। অন্যটি সাবিত থেকে, শুরু হয়েছে 'আমাদের কাছে পৌঁছেছে' কথাটি দিয়ে। এ লেখা যে হাদীসগ্রন্থগুলো যাচাই করে, তার কোনোটিতে এ দুটির কোনোটি নিশ্চিত করা যায়নি, তাই দুটিই বাদ দেওয়া হলো।"
          },
          {
            "en": "That leaves this verse, in these texts, without a sound hadith attached to it, and the article says so rather than filling the gap. The other verses that readers often set beside this verse, on the hur and on couches facing each other, are cited here only where a fetched commentary cites them: 37:44 by Ibn Kathir and the Muyassar's word, and 37:22 by al-Qurtubi. Anything further on the nature of the hur, or on their number, is not in the texts before us, and this article does not supply it from elsewhere.",
            "bn": "ফলে এই লেখাগুলোর ভিত্তিতে এ আয়াতের সঙ্গে যুক্ত কোনো সহীহ হাদীস পাওয়া গেল না। ফাঁক ভরাট না করে এ লেখা সে কথা সোজাসুজি জানিয়ে দিচ্ছে। হূর বা মুখোমুখি আসন নিয়ে আরও যেসব আয়াত পাঠকেরা প্রায়ই পাশে রাখেন, সেগুলোর মধ্যে এখানে কেবল সেগুলোই এসেছে যা সংগৃহীত কোনো তাফসীর উল্লেখ করেছে। ৩৭:৪৪ এনেছেন ইবন কাসীর, মুয়াসসারের শব্দও সেখানেই মেলে। ৩৭:২২ এনেছেন কুরতুবী। হূরদের প্রকৃতি বা সংখ্যা নিয়ে এর বেশি কিছু আমাদের সামনের লেখায় নেই, আর এ লেখা অন্য কোথাও থেকে তা জুড়ে দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Verb Is It?",
          "bn": "ক্রিয়াটি কার"
        },
        "p": [
          {
            "en": "Read the verse's two verbs side by side. Muttaki'in describes what the people of the Garden do: they recline. Zawwajnahum is spoken by Allah in the first person plural: We paired them. The verses around it keep the same balance. In 52:18 they enjoy what their Lord has given them, and it is their Lord who protected them from the punishment of the blaze. In 52:19 they are told to eat and drink for what they used to do. Their deeds are named, and so is His giving.",
            "bn": "আয়াতের দুটি ক্রিয়াপদ পাশাপাশি রেখে পড়ুন। মুত্তাকিঈন বলে জান্নাতবাসীরা কী করছে: তারা হেলান দিয়ে বসে আছে। যাওয়াজনাহুম আল্লাহর নিজের মুখের কথা, বহুবচনে: আমি তাদের জুড়ে দিয়েছি। আশপাশের আয়াতগুলোও এই ভারসাম্য রাখে। ৫২:১৮ আয়াতে তারা উপভোগ করছে যা তাদের রব দিয়েছেন, আর জাহান্নামের আযাব থেকে তাদের বাঁচিয়েছেন তাদের রবই। ৫২:১৯ আয়াতে তাদের বলা হয়, যে আমল তোমরা করতে তার বিনিময়ে খাও আর পান করো। তাদের আমলের কথাও আছে, তাঁর দানের কথাও আছে।"
          },
          {
            "en": "The abridged English Ibn Kathir, which treats 52:17 to 52:20 as a single passage, holds the same balance in a single sentence on 52:19: this is the just reward for your deeds, and surely all this is a favor from Allah and a reward from Him. On 52:18 he counts protection from the Fire as a bounty in itself, before anything else is added to it. The reclining and the pairing of 52:20 come after that. First comes rescue, then rest, then company.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৫২:১৭ থেকে ৫২:২০ আয়াত একটি অনুচ্ছেদ হিসেবে ব্যাখ্যা করে। ৫২:১৯ আয়াতের আলোচনায় একটিমাত্র বাক্যে সেখানেও একই ভারসাম্য: এ তোমাদের আমলের ন্যায্য প্রতিদান, আর নিশ্চয়ই এ সবই আল্লাহর অনুগ্রহ ও তাঁর পক্ষ থেকে পুরস্কার। ৫২:১৮ আয়াতের আলোচনায় তিনি জাহান্নাম থেকে রক্ষা পাওয়াকেই আলাদা একটি নিয়ামত বলে গণ্য করেন, অন্য কিছু যোগ হওয়ার আগেই। ৫২:২০ আয়াতের হেলান দিয়ে বসা আর জোড়া মেলানো আসে তার পরে। প্রথমে উদ্ধার, তারপর বিশ্রাম, তারপর সাহচর্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Towards That Rest",
          "bn": "সেই বিশ্রামের পথে জীবন"
        },
        "p": [
          {
            "en": "The posture is the first thing the verse gives, and it says something about the life that comes before it. As-Sa'di's word for reclining is settledness: sitting with no need to rise. Much of life in this world is spent on the edge of the seat, ready to move, guarding against loss. The verse does not invite the reader to fill its scene with imagined detail, and the commentators themselves keep their glosses short. It asks for something plainer: to want that rest enough to live towards it.",
            "bn": "আয়াত সবার আগে দেয় বসার ভঙ্গি, আর তাতে আগের জীবন সম্পর্কেও কিছু কথা আছে। হেলান দিয়ে বসার জন্য সা'দীর শব্দ হলো স্থিরতা, এমন বসা যেখান থেকে ওঠার তাড়া নেই। দুনিয়ার জীবনের অনেকটাই কাটে আসনের কিনারায়, সবসময় নড়ার জন্য তৈরি, ক্ষতি ঠেকানোর পাহারায়। আয়াত পাঠককে কল্পনার রং দিয়ে দৃশ্যটা ভরাট করতে ডাকে না। মুফাসসিরগণ নিজেরাও তাঁদের ব্যাখ্যা ছোট রেখেছেন। আয়াত চায় আরও সাদামাটা একটা জিনিস: সেই বিশ্রামকে এতটা চাওয়া, যাতে জীবনটা তার দিকেই চলে।"
          },
          {
            "en": "And the rest is shared. The couches stand in rows, and some of the commentators turn them to face each other; the next verses show the people of the Garden talking together and remembering their fear among their families. The neighbouring verse, 52:21, adds that believers whose descendants followed them in faith will have those descendants joined to them, and it has its own reflection. Here the verse leaves a question: whose company do I hope to share then, and am I keeping it now in the gentle speech that as-Sa'di gives to theirs?",
            "bn": "আর সেই বিশ্রাম একার নয়। আসনগুলো সারিতে সাজানো, আর কোনো কোনো মুফাসসির সেগুলোকে মুখোমুখি করে দেন। পরের আয়াতগুলোতে জান্নাতবাসীরা একসঙ্গে কথা বলে, পরিবারের মাঝে কাটানো ভয়ের দিনগুলো মনে করে। পাশের আয়াত ৫২:২১ যোগ করে, যে মুমিনদের সন্তানরা ঈমান নিয়ে তাদের অনুসরণ করেছে, সেই সন্তানদের তাদের সঙ্গে মিলিয়ে দেওয়া হবে। সে আয়াতের আলোচনা আলাদা। এখানে আয়াত একটা প্রশ্ন রেখে যায়: সেদিন কাদের সঙ্গে বসতে চাই? আর সা'দী জান্নাতবাসীদের যে কোমল কথাবার্তার কথা বলেন, আজ তাদের সঙ্গে আমার কথায় কি সেই কোমলতা আছে?"
          }
        ]
      }
    ]
  },
  "52:29": {
    "sections": [
      {
        "h": {
          "en": "Straight After the Garden",
          "bn": "জান্নাতের দৃশ্যের ঠিক পরে"
        },
        "p": [
          {
            "en": "Fa-dhakkir fa-ma anta bi-ni'mati rabbika bi-kahinin wa la majnun: so remind, for by the favour of your Lord you are neither a soothsayer nor a madman. Eight Arabic words, and they arrive straight after a long scene. For several verses the surah has been in the Garden, and the scene closes on the believers' own words: we used to call on Him before; He is the Most Kind, the Most Merciful (52:28). Then, with a single fa, the speech turns from the people of the Garden to the one who must remind those still in this world.",
            "bn": "ফাযাক্কির ফামা আনতা বিনি‘মাতি রাব্বিকা বিকাহিনিন ওয়ালা মাজনূন: কাজেই তুমি উপদেশ দিতে থাকো, তোমার রবের অনুগ্রহে তুমি গণকও নও, পাগলও নও। আরবিতে মাত্র আটটি শব্দ, আর সেগুলো আসে লম্বা এক দৃশ্যের ঠিক পরে। কয়েক আয়াত ধরে সূরাটি ছিল জান্নাতে। সেই দৃশ্য শেষ হয় মুমিনদের নিজেদের কথায়: আমরা আগে তাঁকেই ডাকতাম, তিনিই পরম উপকারী, পরম দয়ালু (৫২:২৮)। তারপর ছোট্ট একটি ‘ফা’ দিয়ে কথা জান্নাতবাসীদের থেকে সরে আসে তাঁর দিকে, যাঁকে এই দুনিয়ায় থাকা মানুষদের মনে করিয়ে দিতে হবে।"
          },
          {
            "en": "The fetched commentators read the command as the Prophet's standing task. Ibn Kathir says Allah commands His Messenger ﷺ to convey His message to His servants and to remind them of what Allah sent down to him; then He clears him of what the people of slander and wickedness, ahl al-buhtan wa-l-fujur, threw at him. In Ibn Kathir's order the verse has two movements: an order, then a defence. The order is not withdrawn because of the charges. It comes first, and the charges are answered inside the same sentence.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, সেগুলো আদেশটিকে নবী ﷺ-এর স্থায়ী দায়িত্ব হিসেবে পড়ে। ইবন কাসীর বলেন, আল্লাহ তাঁর রাসূলকে আদেশ করছেন, তিনি যেন বান্দাদের কাছে তাঁর বার্তা পৌঁছে দেন আর তাঁর উপর যা নাযিল হয়েছে তা দিয়ে তাদের মনে করিয়ে দেন। তারপর কুৎসা আর পাপাচারের লোকেরা, আহলুল বুহতানি ওয়াল ফুজূর, তাঁর দিকে যা ছুড়ে মারত, আল্লাহ তা থেকে তাঁকে মুক্ত ঘোষণা করেন। ইবন কাসীরের ক্রমে আয়াতের তাই দুটি ধাপ: আগে আদেশ, পরে পক্ষ সমর্থন। অপবাদের কারণে আদেশ ফিরিয়ে নেওয়া হয়নি। আদেশ এসেছে আগে, আর অপবাদের জবাব এসেছে সেই একই বাক্যের ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Remind Whom, and With What",
          "bn": "কাকে মনে করাবে, কী দিয়ে"
        },
        "p": [
          {
            "en": "The commentators differ, mildly, over whom the reminder is for. At-Tabari has Muhammad ﷺ told to remind those to whom he was sent, from his own people and others. Al-Qurtubi says: your people. Al-Baghawi names them as the people of Makkah. The Muyassar keeps to those to whom you were sent. As-Sa'di widens the circle openly: the people, their Muslims and their disbelievers alike. These read less as rival positions than as two frames, the first hearers in Makkah and the wider sending, and the texts set no argument between them.",
            "bn": "উপদেশ কাদের জন্য, তা নিয়ে তাফসীরকারদের কথায় হালকা পার্থক্য আছে। তাবারীর মতে নবী ﷺ-কে বলা হচ্ছে, যাদের কাছে তাঁকে পাঠানো হয়েছে তাদের মনে করিয়ে দিতে, তাঁর নিজের কওম হোক বা অন্যরা। কুরতুবী বলেন: তোমার কওমকে। বাগাভী তাদের পরিচয় দেন মক্কাবাসী বলে। মুয়াসসার এটুকুতেই থামে: যাদের কাছে তোমাকে পাঠানো হয়েছে। সা'দী পরিধিটা খোলাখুলি বড় করেন: সব মানুষ, তাদের মুসলিম আর কাফির দুই-ই। এগুলো পরস্পরবিরোধী মত মনে হয় না। দুটি দৃষ্টিকোণ বলা যায়: মক্কার প্রথম শ্রোতারা, আর রিসালাতের বড় পরিধি। লেখাগুলোতে এদের মধ্যে কোনো বিতর্ক নেই।"
          },
          {
            "en": "With what is he to remind? Al-Qurtubi, al-Baghawi and the Muyassar all say: with the Qur'an. Ibn Kathir says: with what Allah sent down to him. At-Tabari adds a phrase of his own, wa-'izhum bi-ni'ami llahi 'indahum: admonish them with the blessings of Allah that they have. As-Sa'di gives the purpose: so that Allah's proof stands against the wrongdoers, and those granted success are guided by his reminding. On his reading the reminder does two things at once. It guides whoever is open to it, and it removes the excuse of whoever is not.",
            "bn": "কী দিয়ে মনে করাবেন? কুরতুবী, বাগাভী আর মুয়াসসার তিনজনই বলেন: কুরআন দিয়ে। ইবন কাসীর বলেন: আল্লাহ তাঁর উপর যা নাযিল করেছেন তা দিয়ে। তাবারী নিজের একটি বাক্য যোগ করেন, ওয়া ‘ইযহুম বিনি‘আমিল্লাহি ‘ইনদাহুম: তাদের কাছে আল্লাহর যত নিয়ামত আছে, সেগুলোর কথা বলে তাদের নসিহত করো। সা'দী উদ্দেশ্যটা বলে দেন: যাতে জালিমদের বিরুদ্ধে আল্লাহর হুজ্জত প্রতিষ্ঠিত হয়, আর যাদের তাওফীক দেওয়া হয়েছে তারা তাঁর উপদেশে হিদায়াত পায়। তাঁর পাঠে নসিহত একসঙ্গে দুটি কাজ করে। যে মন খুলে রেখেছে, তাকে পথ দেখায়। আর যে খোলেনি, তার অজুহাত শেষ করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "By Your Lord's Favour",
          "bn": "রবের অনুগ্রহের কথা"
        },
        "p": [
          {
            "en": "Between the command and the denial sits a short phrase, bi-ni'mati rabbika, by the favour of your Lord, and the commentators gloss it in several ways. For at-Tabari it is the favour of Allah upon you. The Muyassar makes it specific: Allah's favouring you with prophethood and with soundness of mind, rajahat al-'aql. Al-Qurtubi reads it as the message of your Lord, bi-risalati rabbik. Al-Baghawi reads it as His mercy and His protection, bi-rahmatihi wa-'ismatihi. As-Sa'di says: from Him and from His kindness, minhu wa-lutfihi.",
            "bn": "আদেশ আর অপবাদ নাকচের মাঝখানে ছোট একটি বাক্যাংশ: বিনি‘মাতি রাব্বিকা, তোমার রবের অনুগ্রহে। তাফসীরকারেরা একে নানাভাবে ব্যাখ্যা করেন। তাবারীর কাছে এটা তোমার উপর আল্লাহর অনুগ্রহ। মুয়াসসার আরও নির্দিষ্ট করে বলে: নবুওয়াত আর সুস্থ বিবেক-বুদ্ধি দিয়ে তোমার প্রতি আল্লাহর অনুগ্রহ, রাজাহাতুল ‘আকল। কুরতুবী পড়েন তোমার রবের রিসালাত হিসেবে, বিরিসালাতি রাব্বিক। বাগাভী পড়েন তাঁর রহমত আর তাঁর হেফাজত হিসেবে, বিরাহমাতিহি ওয়া ‘ইসমাতিহি। সা'দী বলেন: তাঁর পক্ষ থেকে, তাঁর দয়া থেকে, মিনহু ওয়া লুতফিহি।"
          },
          {
            "en": "Ibn Kathir gives no separate gloss. He restates the clause as lasta bi-hamdi llahi bi-kahin: you are not, praise be to Allah, a soothsayer. Each gloss names a different side of one gift, and together they make a point. What clears the Prophet ﷺ of the charge is not presented as his own achievement; it is something given to him. The prophethood, the sound mind, the protection, the message itself all come from his Lord, and the denial rests on them.",
            "bn": "ইবন কাসীর আলাদা কোনো ব্যাখ্যা দেন না। তিনি বাক্যটা নতুন করে বলেন এভাবে: লাসতা বিহামদিল্লাহি বিকাহিন, আলহামদুলিল্লাহ, তুমি গণক নও। প্রতিটি ব্যাখ্যা একই দানের একেকটা দিক তুলে ধরে, আর সব মিলিয়ে একটা কথা দাঁড়ায়। নবী ﷺ-কে অপবাদ থেকে যা মুক্ত করছে, তা তাঁর নিজের অর্জন হিসেবে আসেনি, এসেছে দান হিসেবে। নবুওয়াত, সুস্থ বুদ্ধি, হেফাজত, রিসালাত, সবই তাঁর রবের দেওয়া। আর অপবাদ নাকচ হচ্ছে এগুলোর ভিত্তিতেই।"
          },
          {
            "en": "Al-Qurtubi also records a grammatical disagreement over the phrase, and leaves it open. One view, introduced with qila, it is said, makes it an oath: by the favour of Allah, you are neither a soothsayer nor a madman. The other, also introduced with qila, says it is not an oath at all, but works the way one says, you are not, praise be to Allah, an ignorant man, meaning that Allah has cleared you of that. He states both and chooses neither, and this article leaves the question where he left it.",
            "bn": "কুরতুবী বাক্যাংশটি নিয়ে ব্যাকরণগত একটি মতভেদও উল্লেখ করেন, আর সেটা খোলা রাখেন। একটি মত তিনি আনেন 'বলা হয়' দিয়ে। এ মতে এটা শপথ: আল্লাহর অনুগ্রহের শপথ, তুমি গণকও নও, পাগলও নও। অন্য মতটিও তিনি আনেন 'বলা হয়' দিয়ে। এ মতে এটা শপথ নয়। কথাটা তেমন, যেমন কেউ বলে: আলহামদুলিল্লাহ, তুমি মূর্খ নও। অর্থাৎ আল্লাহ তোমাকে এ থেকে মুক্ত রেখেছেন। কুরতুবী দুটো মতই বলেন, কোনোটিকে বেছে নেন না। এ লেখাও প্রশ্নটা সেখানেই রেখে দিচ্ছে, যেখানে তিনি রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What a Kahin Claimed",
          "bn": "গণক কী দাবি করত"
        },
        "p": [
          {
            "en": "The first charge is kahin, usually rendered soothsayer. The fetched definitions agree on the core and differ in detail. Ibn Kathir: the one to whom a ra'iy, a familiar from the jinn, comes with a word picked up from the news of heaven. As-Sa'di: the one with a ra'iy from the jinn who brings him reports of some hidden things, to which he adds a hundred lies. Al-Qurtubi and al-Baghawi give the same wording: one who invents speech and tells what will happen tomorrow without revelation, min ghayri wahy.",
            "bn": "প্রথম অপবাদ: কাহিন, সাধারণত যার অনুবাদ গণক। যে সংজ্ঞাগুলো পাওয়া গেছে, সেগুলো মূল কথায় এক, খুঁটিনাটিতে আলাদা। ইবন কাসীর বলেন, গণক সে, যার কাছে জিনদের মধ্য থেকে একজন সঙ্গী, রায়ী, আসমানের খবর থেকে কুড়িয়ে পাওয়া একটা কথা নিয়ে আসে। সা'দীর সংজ্ঞায় তার একজন জিন-সঙ্গী আছে, যে তাকে কিছু গায়েবি খবর এনে দেয়, আর গণক তার সঙ্গে জুড়ে দেয় একশো মিথ্যা। কুরতুবী আর বাগাভী একই ভাষায় বলেন: যে মনগড়া কথা বানায় আর ওহী ছাড়াই আগামীকাল কী হবে তার খবর দেয়, মিন গাইরি ওয়াহয়।"
          },
          {
            "en": "The Muyassar's version is the shortest: one who tells of the unseen without knowledge. Set side by side, the definitions suggest why the charge could be made at all. A kahin also spoke of hidden things, so the accusers could try to file the Prophet ﷺ in a drawer the listeners already knew. The phrase min ghayri wahy marks the difference the verse insists on. In these definitions the soothsayer's source is a stolen scrap and a heap of invention; the clause in al-Qurtubi and al-Baghawi names what the Messenger had instead, which is revelation.",
            "bn": "মুয়াসসারের সংজ্ঞা সবচেয়ে ছোট: যে জ্ঞান ছাড়াই গায়েবের খবর দেয়। সংজ্ঞাগুলো পাশাপাশি রাখলে বোঝা যায়, অপবাদটা আদৌ তোলা গেল কীভাবে। গণকও গোপন বিষয়ের কথা বলত। তাই অপবাদকারীরা নবী ﷺ-কে শ্রোতাদের চেনা একটা খোপে ঢুকিয়ে দেওয়ার চেষ্টা করতে পারত। মিন গাইরি ওয়াহয়, ওহী ছাড়া, এই কথাটাই সেই পার্থক্য, যার উপর আয়াত জোর দেয়। এসব সংজ্ঞায় গণকের উৎস চুরি করা এক টুকরো কথা আর এক গাদা বানানো কথা। কুরতুবী আর বাগাভীর বাক্যাংশটি বলে দেয় রাসূলের কাছে তার বদলে কী ছিল: ওহী।"
          }
        ]
      },
      {
        "h": {
          "en": "The Charge of Madness",
          "bn": "পাগল বলার অপবাদ"
        },
        "p": [
          {
            "en": "The second charge is majnun, madman. Ibn Kathir defines him as one whom the devil has struck down with his touch, yatakhabbatuhu sh-shaytanu mina l-mass. The Muyassar: one who does not understand what he says, as they claim. At-Tabari's gloss is unusual. He renders the denial as: nor a madman who has a ra'iy that tells him what he then reports to his people. In his reading the familiar spirit belongs to the madman as well. In Ibn Kathir's definitions, too, both charges point away from Allah: a familiar of the jinn for one, a devil's touch for the other.",
            "bn": "দ্বিতীয় অপবাদ: মাজনূন, পাগল। ইবন কাসীরের সংজ্ঞায় মাজনূন সে, যাকে শয়তান ছুঁয়ে দিয়ে দিশেহারা করে ফেলেছে, ইয়াতাখাব্বাতুহুশ শাইতানু মিনাল মাস। মুয়াসসার বলে: যে নিজের কথা নিজেই বোঝে না, যেমন তারা দাবি করে। তাবারীর ব্যাখ্যা একটু ভিন্ন। তিনি অপবাদ নাকচ করেন এভাবে: তুমি এমন পাগলও নও, যার একজন জিন-সঙ্গী আছে, সে তাকে খবর দেয় আর সে তা কওমকে শোনায়। তাঁর পাঠে জিন-সঙ্গী পাগলেরও থাকে। ইবন কাসীরের সংজ্ঞাতেও দুটো অপবাদই আল্লাহ ছাড়া অন্য উৎসের দিকে ইঙ্গিত করে: একটিতে জিন-সঙ্গী, অন্যটিতে শয়তানের ছোঁয়া।"
          },
          {
            "en": "As-Sa'di answers the charge with its opposite. A majnun is one who has lost his reason, faqid li-l-'aql; rather, he says, you are the most complete of people in reason, the farthest of them from the devils, the greatest of them in truthfulness, the most exalted and the most complete. At-Tabari closes his comment on another note: but you are the Messenger of Allah, and Allah does not forsake you; He helps you. One commentator answers with the Prophet's own qualities, the other with Allah's support, and the verse holds room for both.",
            "bn": "সা'দী অপবাদের জবাব দেন তার উল্টোটা দিয়ে। মাজনূন মানে বুদ্ধিহারা, ফাকিদুন লিল ‘আকল। তিনি বলেন, বরং তুমি মানুষের মধ্যে সবচেয়ে পূর্ণ বুদ্ধির অধিকারী, শয়তান থেকে সবচেয়ে দূরে, সত্যবাদিতায় সবার বড়, সবচেয়ে মর্যাদাবান আর পূর্ণ। তাবারী তাঁর ব্যাখ্যা শেষ করেন অন্য সুরে: বরং তুমি আল্লাহর রাসূল, আল্লাহ তোমাকে ছেড়ে দেন না, তিনি তোমাকে সাহায্য করেন। একজন জবাব দেন নবী ﷺ-এর নিজের গুণ দিয়ে, অন্যজন আল্লাহর সাহায্য দিয়ে। আয়াতে দুটোরই জায়গা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Was Saying It",
          "bn": "কারা এসব বলত"
        },
        "p": [
          {
            "en": "The commentators name the speakers in different ways. Ibn Kathir: the ignorant among the disbelievers of Quraysh. Al-Qurtubi says the verse answers what they said about the Prophet ﷺ, and he names names: 'Uqba ibn Abi Mu'ayt said he was mad, Shayba ibn Rabi'a said he was a sorcerer, and others said soothsayer, so Allah gave them the lie and answered them. Al-Baghawi says it came down about those who divided the passes of Makkah among themselves, accusing the Messenger of Allah ﷺ of soothsaying, sorcery, madness and poetry.",
            "bn": "কারা এসব বলত, তাফসীরকারেরা তা ভিন্ন ভিন্নভাবে বলেন। ইবন কাসীর বলেন: কুরাইশের কাফিরদের মধ্যে যারা মূর্খ। কুরতুবী বলেন, আয়াতটি নবী ﷺ সম্পর্কে তাদের কথার জবাব, আর তিনি নামও উল্লেখ করেন। উকবা ইবন আবী মু‘আইত বলেছিল, তিনি পাগল। শাইবা ইবন রাবী‘আ বলেছিল, তিনি জাদুকর। অন্যরা বলেছিল গণক। আল্লাহ তাদের মিথ্যাবাদী সাব্যস্ত করেন আর তাদের জবাব দেন। বাগাভী বলেন, আয়াতটি নাযিল হয়েছিল তাদের ব্যাপারে, যারা মক্কার গিরিপথগুলো নিজেদের মধ্যে ভাগ করে নিয়েছিল আর রাসূলুল্লাহ ﷺ-কে গণক, জাদুকর, পাগল ও কবি বলে অপবাদ দিত।"
          },
          {
            "en": "Al-Baghawi gives no chain for that statement in the text fetched here, and no other fetched commentary repeats it, so it stands as his remark and is not treated as an established occasion of revelation. As-Sa'di adds a sharper point about the accusers: they used these words to turn people away from following him, while knowing that he was the farthest of people from them. On his reading the labels were not a mistaken judgement but a tactic, aimed at the listeners rather than at the truth.",
            "bn": "এখানে যে পাঠ দেখা হয়েছে, তাতে বাগাভী এ কথার কোনো সনদ দেননি, আর অন্য কোনো তাফসীরেও কথাটি নেই। তাই একে তাঁর মন্তব্য হিসেবেই রাখা হলো, প্রতিষ্ঠিত শানে নুযূল হিসেবে নয়। সা'দী অপবাদকারীদের সম্পর্কে আরও তীক্ষ্ণ একটি কথা বলেন। এসব কথা দিয়ে তারা মানুষকে তাঁর অনুসরণ থেকে ফেরাত, অথচ তারা জানত, এসব দোষ থেকে তিনি সব মানুষের চেয়ে দূরে। তাঁর পাঠে এই তকমাগুলো ভুল ধারণা ছিল না, ছিল কৌশল। নিশানা ছিল শ্রোতারা, সত্য নয়।"
          },
          {
            "en": "This needs saying plainly. The verse describes particular accusers in Makkah who met a messenger with slander, and it rejects what they said. It describes what the text describes. It licenses nothing against any living person or community, and gives no one the right to cast a present-day neighbour as one of those accusers. Nor do the fetched commentaries attach any hadith to this verse. The narrations in the Ma'arif al-Qur'an passage fetched with it concern 52:21, so none is quoted here.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি মক্কার নির্দিষ্ট কিছু অপবাদকারীর কথা বলে, যারা একজন রাসূলের মোকাবিলা করেছিল কুৎসা দিয়ে, আর আয়াত তাদের কথা নাকচ করে। আয়াত শুধু সেটুকুই বলে, যা তাতে আছে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। আজকের কোনো প্রতিবেশীকে সেই অপবাদকারীদের একজন বানিয়ে দেওয়ার অধিকারও কাউকে দেয় না। যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটি এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। এর সঙ্গে আনা মাআরিফুল কুরআনের অংশে যে বর্ণনাগুলো আছে, সেগুলো ৫২:২১ আয়াত নিয়ে। তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Order Before the Answer",
          "bn": "জবাবের আগে আদেশ"
        },
        "p": [
          {
            "en": "Read the verse again in its own order. The command comes first, fa-dhakkir, and the denial after it, fa-ma anta. As-Sa'di ties them together with wa-li-hadha, and for this reason. The Prophet ﷺ is to remind people without minding the words of the deniers, their harm, or the sayings with which they turn people from following him; and for that reason Allah denied every defect they threw at him. The defence is not a pause in the work for a hearing. It is the ground on which the work goes on.",
            "bn": "আয়াতটা আবার তার নিজের ক্রমে পড়ুন। আদেশ আগে, ফাযাক্কির। অপবাদ নাকচ পরে, ফামা আনতা। সা'দী দুটো অংশ জুড়ে দেন ওয়া লিহাযা, এ কারণেই, কথাটি দিয়ে। নবী ﷺ মানুষকে মনে করিয়ে যাবেন, অস্বীকারকারীদের কথা, তাদের দেওয়া কষ্ট আর মানুষকে তাঁর অনুসরণ থেকে ফেরানোর কথাবার্তার পরোয়া না করে। এ কারণেই আল্লাহ সেই সব দোষ তাঁর থেকে নাকচ করেন, যা তারা তাঁর উপর চাপাত। আত্মপক্ষ সমর্থনের জন্য কাজ থামিয়ে শুনানি বসানো হয়নি। অপবাদের নাকচই কাজ চালিয়ে যাওয়ার ভিত্তি।"
          },
          {
            "en": "The next verses press the matter further. Do they say he is a poet for whom they await the turns of fate (52:30)? Do their minds command them to this (52:32)? Do they say he made it up (52:33)? Then comes a challenge: let them bring a speech like it, if they are truthful (52:34). Those verses have their own ground, and this article does not open them. It is enough to see that 52:29 is the first in a run of answers, and that the run begins with an instruction to keep going.",
            "bn": "পরের আয়াতগুলো বিষয়টাকে আরও সামনে নেয়। তারা কি বলে, সে এক কবি, আমরা তার জন্য কালের বিপদের অপেক্ষায় আছি (৫২:৩০)? তাদের বুদ্ধি কি তাদের এ কথা বলতে বলে (৫২:৩২)? তারা কি বলে, সে নিজে বানিয়ে নিয়েছে (৫২:৩৩)? তারপর আসে চ্যালেঞ্জ: তারা সত্যবাদী হলে এর মতো একটি বাণী নিয়ে আসুক (৫২:৩৪)। সেই আয়াতগুলোর নিজস্ব আলোচনা আছে, এ লেখা সেগুলো খুলছে না। এটুকু দেখাই যথেষ্ট যে ৫২:২৯ এক সারি জবাবের প্রথমটি, আর সেই সারি শুরু হয়েছে কাজ চালিয়ে যাওয়ার আদেশ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Labels and the Listener",
          "bn": "তকমা আর শ্রোতা"
        },
        "p": [
          {
            "en": "No one today carries what the Prophet ﷺ carried, and the clearing in this verse was his. A reader who meets criticism has no right to cast it as the slander of Quraysh and himself as beyond reproach. The verse's lesson for the reader runs the other way. The accusers' tool was a label that made the message unnecessary to answer, and that tool is still within reach of anyone who does not want to hear something.",
            "bn": "নবী ﷺ যা বহন করেছেন, আজ কেউ তা বহন করে না। এ আয়াতের নির্দোষ ঘোষণা তাঁরই জন্য। কেউ সমালোচনার মুখে পড়লে সেটাকে কুরাইশের কুৎসা আর নিজেকে সব দোষের ঊর্ধ্বে ভাবার অধিকার তার নেই। পাঠকের জন্য আয়াতের শিক্ষা বরং উল্টো দিকে। অপবাদকারীদের হাতিয়ার ছিল একটা তকমা, যা লাগালে বার্তার জবাব দেওয়ার আর দরকার পড়ে না। যে কোনো কথা শুনতে চায় না, সেই হাতিয়ার আজও তার হাতের নাগালে।"
          },
          {
            "en": "So the first use of the verse is a test of the listener. When a reminder reaches me, do I answer what was said, or do I name the person who said it? Old-fashioned, naive, too strict: labels like these can do the work that kahin and majnun once did, and spare me the trouble of weighing the words. At-Tabari's gloss on the command, admonish them with the blessings of Allah that they have, suggests what a reminder often carries: less an accusation than a list of gifts already received.",
            "bn": "তাই আয়াতের প্রথম কাজ শ্রোতার পরীক্ষা। কোনো নসিহত আমার কাছে পৌঁছালে আমি কি বলা কথাটার জবাব দিই, নাকি যে বলল তাকে একটা নাম দিয়ে দিই? সেকেলে, সরল, বেশি কড়া: এমন তকমা আজ সেই কাজটাই করতে পারে, যা একসময় গণক আর পাগল শব্দ দুটো করত। কথাগুলো ওজন করার ঝামেলা থেকে তা আমাকে রেহাই দেয়। তাবারী আদেশটির ব্যাখ্যায় বলেছেন, তাদের কাছে আল্লাহর যে নিয়ামতগুলো আছে, তা দিয়ে নসিহত করো। এতে বোঝা যায়, নসিহত অনেক সময় অভিযোগ নয়। বরং আগেই পাওয়া উপহারের একটা তালিকা।"
          },
          {
            "en": "The second use is for whoever has a true word to pass on, to family, to a friend, to a circle that meets to learn. Mockery may come. As as-Sa'di reads the command to the Prophet ﷺ, mockery was no reason for him to stop, and it is no better reason for us. What makes a reminder worth giving is the favour of the Lord behind it, the favour this verse names, and not the approval of whoever hears it. So remind, gently and truthfully, and leave the weighing of the words to the listener and to Allah.",
            "bn": "দ্বিতীয় কাজ তার জন্য, যার কাছে পৌঁছে দেওয়ার মতো সত্য কথা আছে: পরিবারের কাছে, বন্ধুর কাছে, শেখার কোনো মজলিসে। ঠাট্টা আসতে পারে। নবী ﷺ-এর প্রতি আদেশটা সা'দী যেভাবে পড়েন, তাতে ঠাট্টা তাঁর থেমে যাওয়ার কারণ ছিল না। আমাদের জন্যও তা থামার ভালো কারণ নয়। নসিহতের মূল্য আসে তার পেছনে থাকা রবের অনুগ্রহ থেকে, যে অনুগ্রহের কথা এই আয়াত বলছে। শ্রোতার বাহবা থেকে নয়। তাই নরমভাবে, সত্য কথায় মনে করিয়ে দিন। আর কথাগুলো ওজন করার ভার ছেড়ে দিন শ্রোতা আর আল্লাহর উপর।"
          }
        ]
      }
    ]
  },
  "52:31": {
    "sections": [
      {
        "h": {
          "en": "A Reply in Six Words",
          "bn": "ছয়টি শব্দে উত্তর"
        },
        "p": [
          {
            "en": "Qul tarabbasu fa-inni ma'akum mina l-mutarabbisin: say, wait, for I am, with you, among those who wait. The verse is a reply, and it only makes sense beside the claim it answers. In 52:30 the deniers are quoted: a poet, natarabbasu bihi rayba l-manun, for whom we await a blow of fate. The same word for waiting appears once in their claim and twice in the reply. They used it first; the answer hands it straight back to them, and adds nothing else.",
            "bn": "কুল তারাব্বাসূ ফাইন্নী মাআকুম মিনাল মুতারাব্বিসীন: বলো, অপেক্ষা করো, আমিও তোমাদের সঙ্গে অপেক্ষাকারীদের একজন। আয়াতটি একটি জবাব। যে দাবির জবাব, সেটা পাশে না রাখলে এর মানে পুরো খোলে না। ৫২:৩০ আয়াতে অস্বীকারকারীদের কথা উদ্ধৃত হয়েছে: সে একজন কবি, নাতারাব্বাসু বিহী রাইবাল মানূন, আমরা তার উপর কালের আঘাত নেমে আসার অপেক্ষায় আছি। অপেক্ষা বোঝানোর একই শব্দ ওদের দাবিতে আসে একবার, আর জবাবে দুবার। শব্দটা ওরাই প্রথম মুখে এনেছিল। জবাব সেটাই সোজা ওদের হাতে ফিরিয়ে দেয়, এর বেশি কিছু যোগ করে না।"
          },
          {
            "en": "The verse sits in a run of questions about what the deniers said of the Prophet ﷺ. The verse before their claim, 52:29, tells him to keep reminding, and it is treated in its own place. Here the command is a single word, qul, say. At-Tabari spells out who is to hear it: say, O Muhammad, to these polytheists who tell you that you are a poet for whom they await the blow of fate. As-Sa'di calls the reply an answer to this feeble talk, al-kalam as-sakhif.",
            "bn": "নবী ﷺ সম্পর্কে অস্বীকারকারীরা যা বলত, তা নিয়ে পরপর কয়েকটি প্রশ্নের মাঝখানে আয়াতটির জায়গা। ওদের দাবির আগের আয়াত ৫২:২৯ তাঁকে উপদেশ দিয়ে যেতে বলে, সে আলোচনা তার নিজের জায়গায়। এখানে হুকুমটা একটিমাত্র শব্দ: কুল, বলো। কাকে শোনাতে হবে, তাবারী তা খুলে বলেন। হে মুহাম্মাদ, এই মুশরিকদের বলো, যারা তোমাকে বলে তুমি একজন কবি আর তারা তোমার উপর কালের আঘাতের অপেক্ষায় আছে। সা'দী এ জবাবকে বলেন এই অসার কথার উত্তর, আল-কালামুস সাখীফ।"
          }
        ]
      },
      {
        "h": {
          "en": "Counting the Days to a Death",
          "bn": "মৃত্যুর দিন গোনা"
        },
        "p": [
          {
            "en": "What were they waiting for? The Muyassar, explaining 52:30 and 52:31 together, puts it in one word: death. They say he is a poet for whom we await the coming down of death, nuzul al-mawt, and the reply runs: wait for my death. Al-Baghawi and as-Sa'di gloss tarabbasu the same way, intaziru bi l-mawt, wait for my death. Ibn Kathir, in the abridged English covering 52:29 to 52:34, has them say they await a disaster, death for example, and will bear with him until it comes.",
            "bn": "ওরা অপেক্ষা করছিল কিসের? মুয়াসসার ৫২:৩০ ও ৫২:৩১ একসঙ্গে ব্যাখ্যা করে, আর উত্তরটা দেয় এক শব্দে: মৃত্যু। ওরা বলে, সে একজন কবি, আমরা তার উপর মৃত্যু নেমে আসার অপেক্ষায় আছি, নুযূলুল মাওত। জবাবটা তখন দাঁড়ায়: আমার মৃত্যুর অপেক্ষা করো। বাগাভী আর সা'দীও তারাব্বাসূ শব্দের একই ব্যাখ্যা দেন: ইনতাযিরূ বিল মাওত, আমার মৃত্যুর অপেক্ষায় থাকো। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ৫২:২৯ থেকে ৫২:৩৪ পর্যন্ত একসঙ্গে আলোচনা করে। সেখানে ওদের কথা এভাবে আসে: আমরা কোনো বিপদের অপেক্ষায় আছি, যেমন মৃত্যু। তা না আসা পর্যন্ত আমরা তাকে সহ্য করে যাব।"
          },
          {
            "en": "That same English text gives the motive: so that we may be rid of his bother and of his Message. The hope was not only that a man would die, but that what he brought would die with him. Ibn Kathir's Arabic on 52:31 then carries a report through Muhammad ibn Ishaq, from Abdullah ibn Abi Najih, from Mujahid, from Ibn Abbas. When Quraysh met in Dar an-Nadwa over the Prophet's affair, one of them said: hold him in bonds, then wait for the blow of fate until he perishes.",
            "bn": "ওই ইংরেজি পাঠেই উদ্দেশ্যটা বলা আছে: যাতে তার উৎপাত আর তার বাণী, দুটো থেকেই আমরা রেহাই পাই। অর্থাৎ ওদের আশা শুধু একজন মানুষের মৃত্যু ছিল না। ওরা চাইছিল, তিনি যা নিয়ে এসেছেন তা-ও তাঁর সঙ্গেই মরে যাক। এরপর ৫২:৩১ আয়াতে ইবন কাসীরের আরবি তাফসীর একটি বর্ণনা আনে। সূত্রটা এই: মুহাম্মাদ ইবন ইসহাক, আবদুল্লাহ ইবন আবী নাজীহ থেকে, তিনি মুজাহিদ থেকে, তিনি ইবন আব্বাস থেকে। নবী ﷺ-এর ব্যাপারে পরামর্শ করতে কুরাইশ দারুন নাদওয়ায় জমা হলে তাদের একজন বলল: ওকে শিকলে বেঁধে রাখো। তারপর কালের আঘাতের অপেক্ষা করো, যতক্ষণ না সে মারা যায়।"
          },
          {
            "en": "The speaker went on: just as the poets before him perished, Zuhayr and an-Nabigha, for he is only one of them. Ibn Kathir adds that Allah revealed about this saying of theirs the words of 52:30. He gives the chain and no verdict on it in the text fetched here, so this article reports it as his report and does not treat it as an established occasion of revelation. Its point is clear enough without that: the label poet was a way of filing him with men whose words had not stopped them from dying.",
            "bn": "লোকটা আরও বলল: আগের কবিরা যেমন মারা গেছে, যুহাইর আর নাবিগা, এ-ও তেমনি মরবে। এ তো ওদেরই একজন। ইবন কাসীর জানান, ওদের এই কথা সম্পর্কেই আল্লাহ ৫২:৩০ আয়াত নাযিল করেন। এখানে যে পাঠ আনা হয়েছে, তাতে তিনি সনদ উল্লেখ করেছেন, কিন্তু বর্ণনাটির মান নিয়ে কোনো রায় দেননি। তাই এই লেখা একে তাঁর আনা বর্ণনা হিসেবেই উল্লেখ করছে, নিশ্চিত শানে নুযূল হিসেবে ধরছে না। তবে মূল কথাটা এমনিতেই পরিষ্কার। কবি তকমাটা ছিল তাঁকে সেই মানুষদের কাতারে ফেলার কৌশল, যাদের কাব্য তাদের মৃত্যু ঠেকাতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Waiting With an Object",
          "bn": "যে অপেক্ষার লক্ষ্য আছে"
        },
        "p": [
          {
            "en": "Every commentator fetched here glosses tarabbasu with the ordinary verb intaziru, wait. Al-Qurtubi gives only that. Ibn Kathir completes the sentence: wait, for I am waiting with you, fa-inni muntazirun ma'akum. Al-Baghawi and as-Sa'di attach the object the deniers had in mind, my death. At-Tabari pairs two verbs, intaziru wa-tamahhalu: wait, and take your time over me with the blow of fate. The second verb concedes them time. Take as long as you like, it says; the length of the wait is not what decides the matter.",
            "bn": "এখানে যত তাফসীর আনা হয়েছে, সবগুলোই তারাব্বাসূ শব্দের ব্যাখ্যা দেয় সাধারণ ক্রিয়া ইনতাযিরূ দিয়ে, অর্থাৎ অপেক্ষা করো। কুরতুবী এটুকুই বলেন। ইবন কাসীর বাক্যটা পূর্ণ করেন: অপেক্ষা করো, আমিও তোমাদের সঙ্গে অপেক্ষায় আছি, ফাইন্নী মুনতাযিরুন মাআকুম। বাগাভী আর সা'দী জুড়ে দেন অস্বীকারকারীদের মনের সেই লক্ষ্য, আমার মৃত্যু। তাবারী দুটি ক্রিয়া পাশাপাশি রাখেন, ইনতাযিরূ ওয়া তামাহহালূ: অপেক্ষা করো, আর আমার ব্যাপারে কালের আঘাতের জন্য যত খুশি সময় নাও। দ্বিতীয় ক্রিয়াটা ওদের সময় ছেড়ে দেয়। যতদিন খুশি অপেক্ষা করো। অপেক্ষা কত লম্বা হলো, তা দিয়ে ফয়সালা হবে না।"
          },
          {
            "en": "The reply's second half gets an object too. At-Tabari reads it as al-mutarabbisina bikum, among those who wait regarding you, the same shape as the deniers' natarabbasu bihi, we wait regarding him. Al-Qurtubi and the Muyassar fill in what is awaited: al-muntazirina bikum al-'adhab, those who wait for the punishment to fall on you. So in these glosses neither side is idle. Each is watching for something to come upon the other, and the verse leaves both watches running side by side.",
            "bn": "জবাবের দ্বিতীয় অংশেরও একটা লক্ষ্য আছে। তাবারী একে পড়েন আল-মুতারাব্বিসীনা বিকুম, তোমাদের ব্যাপারে অপেক্ষাকারীদের একজন। গড়নটা হুবহু অস্বীকারকারীদের নাতারাব্বাসু বিহী-র মতো, যার মানে আমরা তার ব্যাপারে অপেক্ষা করছি। কিসের অপেক্ষা, কুরতুবী আর মুয়াসসার তা বলে দেন: আল-মুনতাযিরীনা বিকুমুল আযাব, যারা তোমাদের উপর আযাব নেমে আসার অপেক্ষায় আছে। এই ব্যাখ্যাগুলোতে তাই কোনো পক্ষই বসে নেই। প্রত্যেকে তাকিয়ে আছে অন্য পক্ষের উপর কিছু একটা নেমে আসার দিকে। আয়াতটি দুটো পাহারাকেই পাশাপাশি চলতে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Was Told to Await",
          "bn": "তাঁর অপেক্ষা কিসের জন্য"
        },
        "p": [
          {
            "en": "On the Prophet's side, the commentators name the end he waited for in different degrees of detail. At-Tabari says he waits with them hatta ya'tiya amru llahi fikum, until the command of Allah comes upon you, and al-Baghawi uses the same words. Ibn Kathir frames it as a disclosure: you will come to know to whom the final outcome and the victory belong, al-'aqibatu wa-n-nusratu, in this world and the Hereafter. The Muyassar says more briefly: you will see to whom the outcome belongs.",
            "bn": "নবী ﷺ কিসের অপেক্ষায় ছিলেন, তাফসীরকারেরা তা বলেন ভিন্ন ভিন্ন মাত্রার বিস্তারে। তাবারী বলেন, তিনি ওদের সঙ্গে অপেক্ষা করবেন হাত্তা ইয়া'তিয়া আমরুল্লাহি ফীকুম, যতক্ষণ না তোমাদের ব্যাপারে আল্লাহর হুকুম এসে পড়ে। বাগাভীও হুবহু একই কথা বলেন। ইবন কাসীর এটাকে দেখেন একটা উন্মোচন হিসেবে। তোমরা জানতে পারবে, শেষ পরিণতি আর বিজয় কার, আল-আকিবাতু ওয়ান নুসরাহ, দুনিয়াতে এবং আখিরাতে। মুয়াসসার আরও সংক্ষেপে বলে: তোমরা দেখতে পাবে, পরিণতি কার পক্ষে যায়।"
          },
          {
            "en": "Two commentators tie the waiting to an event. Al-Qurtubi, after glossing the reply as waiting for the punishment to fall on you, adds: fa-'udhdhibu yawma Badrin bi s-sayf, and they were punished on the day of Badr by the sword. Al-Baghawi closes his short note with the same clause. As-Sa'di names no event but gives two routes: that Allah strike you with a punishment from Himself, or by our hands, aw bi-aydina. He leaves both open and does not say which came, or whether both did.",
            "bn": "দুজন তাফসীরকার এ অপেক্ষাকে একটা ঘটনার সঙ্গে বেঁধে দেন। কুরতুবী জবাবটির ব্যাখ্যা দেন, তোমাদের উপর আযাব নেমে আসার অপেক্ষা। তারপর যোগ করেন: ফা উযযিবূ ইয়াওমা বাদরিন বিস সাইফ, আর বদরের দিন তরবারির মাধ্যমে তাদের শাস্তি হলো। বাগাভীও তাঁর ছোট্ট টীকা একই বাক্যে শেষ করেন। সা'দী কোনো ঘটনার নাম নেন না, তবে দুটি পথের কথা বলেন। আল্লাহ হয়তো নিজের পক্ষ থেকে তোমাদের উপর আযাব পাঠাবেন, নয়তো আমাদের হাতে, আও বিআইদীনা। দুটো পথই তিনি খোলা রাখেন। কোনটা এসেছিল বা দুটোই এসেছিল কি না, তা তিনি বলেন না।"
          },
          {
            "en": "These readings differ in reach rather than flatly contradicting each other, and the difference is worth keeping as it stands. At-Tabari, Ibn Kathir and the Muyassar leave the end as Allah's command or an outcome still to be seen; al-Qurtubi and al-Baghawi point to Badr; as-Sa'di keeps both channels open without choosing. This article takes no side on which the verse intends. The words of the verse themselves are sparer than any of the glosses: the reply sets no date and names no form for the end. Those details come from the commentators.",
            "bn": "এই ব্যাখ্যাগুলো একে অপরকে সরাসরি খণ্ডন করে না, পার্থক্যটা বিস্তারের। তবু পার্থক্যটা যেমন আছে তেমনই রাখা ভালো। তাবারী, ইবন কাসীর আর মুয়াসসার শেষটাকে রেখে দেন আল্লাহর হুকুম বা ভবিষ্যতে দেখা যাবে এমন পরিণতি হিসেবে। কুরতুবী আর বাগাভী ইঙ্গিত করেন বদরের দিকে। সা'দী দুটো পথই খোলা রাখেন, কোনোটা বেছে নেন না। আয়াতটি ঠিক কোনটা বোঝাতে চায়, এই লেখা সে বিষয়ে কোনো পক্ষ নিচ্ছে না। তবে আয়াতের নিজের শব্দগুলো যেকোনো ব্যাখ্যার চেয়ে মিতব্যয়ী। জবাবে কোনো তারিখ নেই, পরিণতির কোনো রূপের কথাও নেই। এসব খুঁটিনাটি এসেছে তাফসীরকারদের কাছ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Waitings in One Room",
          "bn": "এক ঘরে দুই অপেক্ষা"
        },
        "p": [
          {
            "en": "The small word ma'akum, with you, does a great deal. It places the Prophet ﷺ in the same stretch of time as the people waiting for his death, and it does not dispute that time will pass. The reply does not argue about whether he will die. What it moves is the question that matters. Their bet, in the words Ibn Kathir's English gives them, was to be rid of the man and his Message together. The reply points instead to the outcome, which at-Tabari and al-Baghawi call the command of Allah.",
            "bn": "মাআকুম, তোমাদের সঙ্গে: ছোট্ট এই শব্দ অনেক কাজ করে। যারা তাঁর মৃত্যুর অপেক্ষায় আছে, নবী ﷺ-কে তা তাদের সঙ্গে একই সময়ের ভেতরে দাঁড় করায়। সময় যে বয়ে যাবে, তা নিয়ে কোনো আপত্তি তোলে না। তিনি মারা যাবেন কি না, জবাবটি সে তর্কে যায়ই না। আসল প্রশ্নটাকে সে অন্য জায়গায় সরিয়ে নেয়। ইবন কাসীরের ইংরেজি পাঠ অনুযায়ী ওদের বাজি ছিল মানুষটি আর তাঁর বাণী, দুটো থেকে একসঙ্গে রেহাই পাওয়া। জবাব চোখ ফেরায় পরিণতির দিকে, তাবারী ও বাগাভী যাকে বলেন আল্লাহর হুকুম।"
          },
          {
            "en": "The manner of the reply is part of its meaning. There is no curse in it, no list of their faults, no plea to be believed. It is a calm statement that he, too, is waiting. That calm has a ground the surah states openly at its close, in 52:48, where he is told to be patient for the judgement of his Lord, fa-innaka bi-a'yunina, for you are under Our eyes; that verse has its own article. Here the patience is already audible: a man who knows whose decree ends the wait has no need to shout.",
            "bn": "জবাবটা কীভাবে দেওয়া হলো, সেটাও এর অর্থের অংশ। এতে কোনো অভিশাপ নেই, ওদের দোষের ফিরিস্তি নেই, বিশ্বাস করার জন্য কোনো অনুনয়ও নেই। আছে শুধু শান্ত একটা ঘোষণা: আমিও অপেক্ষা করছি। এই শান্তির ভিত্তি কী, সূরাটি তার শেষে ৫২:৪৮ আয়াতে খোলাখুলি বলে দেয়। সেখানে তাঁকে বলা হয় রবের ফয়সালার জন্য ধৈর্য ধরতে, ফাইন্নাকা বিআ'ইউনিনা, কারণ তুমি আমার চোখের সামনেই আছ। সে আয়াত নিয়ে আলাদা লেখা আছে। তবে এখানেই ধৈর্যের সুরটা কানে আসে। কার ফয়সালায় অপেক্ষার শেষ হবে, যিনি তা জানেন, তাঁর গলা চড়ানোর দরকার পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Waiters Were",
          "bn": "আয়াতটি কাদের উদ্দেশে"
        },
        "p": [
          {
            "en": "The waiters in this verse are a particular group: the Makkan polytheists who called the Prophet ﷺ a poet and hoped to see him dead, ha'ula'i l-mushrikin, these polytheists, in at-Tabari's words. The verse describes what the text describes and licenses nothing against any living person or community. It is not a formula to aim at a neighbour, a rival, another faith or a fellow Muslim. The punishment at Badr that al-Qurtubi and al-Baghawi mention belongs to its own time, as they record it, and is no template for anyone now.",
            "bn": "এ আয়াতের অপেক্ষাকারীরা একটা নির্দিষ্ট দল: মক্কার সেই মুশরিকরা, যারা নবী ﷺ-কে কবি বলত আর তাঁর মৃত্যু দেখার আশায় ছিল। তাবারীর ভাষায়, হা-উলাইল মুশরিকীন, এই মুশরিকরা। আয়াতটি কেবল সেটুকুই বর্ণনা করে, যা এর পাঠে আছে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। প্রতিবেশী, প্রতিদ্বন্দ্বী, ভিন্ন ধর্মের মানুষ বা কোনো মুসলিম ভাইয়ের দিকে তাক করার মতো কোনো সূত্রও এটা নয়। কুরতুবী ও বাগাভী বদরের যে শাস্তির কথা বলেন, তাঁদের বর্ণনামতে তা সেই সময়েরই ঘটনা। আজ কারও জন্য তা কোনো ছাঁচ নয়।"
          },
          {
            "en": "Nor does the verse let a reader wish death on anyone. The Prophet ﷺ is told to say that he waits; the outcome is left with Allah, and the reader is handed no part of it. On the hadith side, none of the six commentaries fetched for this verse attaches a narration to it, so none is quoted here. The report Ibn Kathir carries from Dar an-Nadwa concerns 52:30 and is given above as his report. Nothing else has been added from outside these texts.",
            "bn": "কারও মৃত্যু কামনা করার অনুমতিও এ আয়াত পাঠককে দেয় না। নবী ﷺ-কে শুধু বলতে বলা হয়েছে যে তিনিও অপেক্ষা করছেন। পরিণতি রয়ে গেছে আল্লাহর কাছে, পাঠকের হাতে তার কোনো অংশ তুলে দেওয়া হয়নি। হাদীসের কথা বললে, এ আয়াতের জন্য যে ছয়টি তাফসীর আনা হয়েছে, তার কোনোটিই আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি। দারুন নাদওয়ার যে বর্ণনা ইবন কাসীর আনেন, তা ৫২:৩০ সম্পর্কে, আর ওপরে সেটা তাঁর বর্ণনা হিসেবেই এসেছে। এই পাঠগুলোর বাইরে থেকে আর কিছু যোগ করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Questions That Follow",
          "bn": "এরপর যে প্রশ্নগুলো আসে"
        },
        "p": [
          {
            "en": "After the reply the surah keeps pressing. 52:32 asks whether their minds, ahlamuhum, command them to say this, or whether they are a people who transgress; 52:33 asks whether they say he made it up; 52:34 challenges them to bring a discourse like it if they are truthful. Those verses are their own ground and are not explained here. What 52:31 does before them is narrower: it takes the matter of time out of the deniers' hands, so that the argument which follows is not hostage to anyone's death.",
            "bn": "জবাবের পরেও সূরাটি চাপ দিতে থাকে। ৫২:৩২ আয়াত জিজ্ঞেস করে, ওদের বুদ্ধি, আহলামুহুম, কি ওদের এ কথা বলতে বলে, নাকি ওরা সীমালঙ্ঘনকারী এক জাতি? ৫২:৩৩ জিজ্ঞেস করে, ওরা কি বলে তিনি এটা নিজে বানিয়েছেন? ৫২:৩৪ চ্যালেঞ্জ দেয়, সত্যবাদী হলে এর মতো একটা বাণী নিয়ে আসুক। ওই আয়াতগুলোর আলোচনা তাদের নিজের জায়গায়, এখানে নয়। তার আগে ৫২:৩১ যা করে, তা আরও সীমিত। সময়ের ব্যাপারটা সে অস্বীকারকারীদের হাত থেকে নিয়ে নেয়। ফলে পরের যুক্তিগুলো আর কারও মৃত্যুর উপর ঝুলে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Among Watchers",
          "bn": "চোখ রাখা লোকদের মাঝে"
        },
        "p": [
          {
            "en": "Few people are mocked as a prophet was, but many live under watchers of a smaller kind. A colleague waits for the first mistake. Relatives predict that a marriage will not last. Old friends expect someone who has returned to prayer to drift away again. The temptation in each case is to spend the day answering the watchers in one's head, or to start living for their verdict. The verse offers another posture: name the waiting calmly, and then refuse to be governed by it.",
            "bn": "নবীর মতো ঠাট্টার শিকার খুব কম মানুষই হয়। কিন্তু ছোট পরিসরে অনেকেই এমন চোখের নিচে বাঁচে, যে চোখ পতনের অপেক্ষায় থাকে। সহকর্মী প্রথম ভুলটার জন্য ওত পেতে থাকে। আত্মীয়রা ভবিষ্যদ্বাণী করে, এ বিয়ে টিকবে না। পুরোনো বন্ধুরা ধরে নেয়, যে লোকটা নতুন করে নামায ধরেছে, সে আবার ছেড়ে দেবে। এমন সময় মন চায় সারা দিন মনে মনে ওদের সঙ্গে তর্ক চালিয়ে যেতে, কিংবা ওদের রায় মাথায় রেখেই চলতে। আয়াতটি অন্য একটা ভঙ্গি শেখায়। অপেক্ষাটাকে শান্তভাবে চিনে নিন, তারপর তার হাতে নিজের লাগাম তুলে দেবেন না।"
          },
          {
            "en": "Waiting, in the Prophet's reply, was not idleness. The command to keep reminding in 52:29 did not lapse while the waiting went on, and in at-Tabari's gloss what he waited for was Allah's command, not a rival's collapse. For a believer under watchers, the parallel is plain work: keep the prayer, keep the promise, keep the household steady, and let Allah, whose decree governs every ending, decide how this ends. The watchers can count days; they cannot decide what those days will bring.",
            "bn": "নবী ﷺ-এর জবাবে অপেক্ষা মানে হাত গুটিয়ে বসে থাকা ছিল না। ৫২:২৯ আয়াতে উপদেশ দিয়ে যাওয়ার যে হুকুম, অপেক্ষার পুরো সময়টাতেও তা বহাল ছিল। আর তাবারীর ব্যাখ্যায় তিনি অপেক্ষা করছিলেন আল্লাহর হুকুমের, প্রতিপক্ষের ধসে পড়ার নয়। যে মুমিনের দিকে লোকে চোখ রেখে বসে আছে, তার জন্য এর সোজা মানে হলো কাজ চালিয়ে যাওয়া। নামায ধরে রাখুন, কথা রাখুন, সংসার স্থির রাখুন। আর এই অপেক্ষার শেষটা ছেড়ে দিন তাঁর হাতে, যাঁর ফয়সালায় প্রতিটি পরিণতি ঠিক হয়। ওরা দিন গুনতে পারে, কিন্তু সেই দিনগুলো কী নিয়ে আসবে, তা ওরা ঠিক করে না।"
          },
          {
            "en": "One guard is needed. Waiting for Allah's decree is not the same as waiting for someone else's ruin, and the second can slip in under cover of the first. The verse gives the believer composure, not a grudge. The fuller hope for anyone who waits for our failure is that they come to see differently, and the surest answer to them is a life that keeps its course. Say little, wait well, and leave the outcome to the One who already holds it.",
            "bn": "একটা সতর্কতা দরকার। আল্লাহর ফয়সালার অপেক্ষা আর অন্য কারও সর্বনাশের অপেক্ষা এক জিনিস নয়। অথচ প্রথমটার আড়ালে দ্বিতীয়টা চুপিচুপি ঢুকে পড়তে পারে। এ আয়াত মুমিনকে স্থিরতা দেয়, মনে পুষে রাখার মতো কোনো আক্রোশ দেয় না। যে আমাদের ব্যর্থতার অপেক্ষায় আছে, তার জন্যও বড় আশা হলো সে একদিন অন্যভাবে দেখতে শিখুক। আর তাকে দেওয়ার সবচেয়ে মজবুত জবাব হলো এমন এক জীবন, যা নিজের পথ থেকে সরে না। কম বলুন, ভালোভাবে অপেক্ষা করুন, আর পরিণতি ছেড়ে দিন তাঁর হাতে, যাঁর হাতে তা আগে থেকেই আছে।"
          }
        ]
      }
    ]
  },
  "52:48": {
    "sections": [
      {
        "h": {
          "en": "The Last Word of at-Tur",
          "bn": "আত-তূরের শেষ কথা"
        },
        "p": [
          {
            "en": "Surah at-Tur is Makkan, and its later stretch is an interrogation. From 52:30 onward the questions come one after another, most of them opening with am, or: or do they say he is a poet whose death they await, or were they created out of nothing, or do they own the treasuries of your Lord, or have they a god besides Allah. Nothing is left standing in their position by the time 52:43 closes the run.",
            "bn": "সূরা আত-তূর মক্কী, আর এর শেষ দিকের অংশটি এক দীর্ঘ জেরা। 52:30 থেকে শুরু করে প্রশ্নগুলো একটার পর একটা আসে, অধিকাংশই শুরু হয় 'আম' দিয়ে, অর্থাৎ 'নাকি' — নাকি তারা বলে সে একজন কবি, যার মৃত্যুর জন্য তারা অপেক্ষা করছে; নাকি তাদের সৃষ্টি করা হয়েছে কিছু ছাড়াই; নাকি তাদের কাছে তোমার প্রতিপালকের ভাণ্ডার আছে; নাকি আল্লাহ ছাড়া তাদের অন্য কোনো ইলাহ আছে। 52:43 যখন এই ধারা শেষ করে, তাদের অবস্থানে আর কিছুই দাঁড়িয়ে থাকে না।"
          },
          {
            "en": "Coming after that, wasbir li-hukmi rabbika is not an afterthought. The commentators note the preposition. Arabic could have said isbir 'ala, be patient over a thing pressing down on you; the verse says li-hukmi, be patient for your Lord's judgement, which is the patience of someone waiting on a verdict already settled and not yet read out. The delay is itself part of the ruling. The same imperative closes similar arguments at 68:48 and at 76:24, and in both places it is followed by something the Prophet ﷺ is told not to do.",
            "bn": "এই জেরার পরে 'ওয়াসবির লি-হুকমি রাব্বিকা' কোনো বাড়তি কথা নয়। মুফাসসিরগণ অব্যয়টির দিকে নজর দেন। আরবি বলতে পারত 'ইসবির আলা' — তোমার উপর চেপে বসা কিছুর উপর ধৈর্য ধরো; কিন্তু আয়াত বলে 'লি-হুকমি' — তোমার প্রতিপালকের ফয়সালার জন্য ধৈর্য ধরো। এ হলো এমন একজনের ধৈর্য, যে এমন রায়ের অপেক্ষায় আছে যা ইতিমধ্যেই স্থির হয়ে গেছে, কেবল পড়ে শোনানো বাকি। বিলম্বটাও সেই রায়েরই অংশ। একই নির্দেশ 68:48 ও 76:24 আয়াতেও অনুরূপ যুক্তির শেষে আসে, আর দুই জায়গাতেই এর পরে নবী ﷺ-কে বলা হয় এমন কিছু, যা তিনি করবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Bi-A'yunina",
          "bn": "বি-আ'ইউনিনা"
        },
        "p": [
          {
            "en": "Then the reason, and the pronoun shifts as it is given. The clause before speaks of your Lord in the third person; this one speaks in the first: fa-innaka bi-a'yunina, for indeed you are before Our eyes. The mufassirun explain the phrase as meaning that he is within His sight and under His safekeeping, since in Arabic to say a thing is before someone's eye is to say it is in his care. The settled Sunni posture is to affirm the wording exactly as it was revealed, without asking how and without emptying it of meaning.",
            "bn": "এরপর আসে কারণটি, আর তা দেওয়ার সময় সর্বনাম বদলে যায়। আগের বাক্যাংশ 'তোমার প্রতিপালক' বলে উত্তম পুরুষের বাইরে থেকে; এই বাক্যাংশ বলে প্রথম পুরুষে: 'ফা-ইন্নাকা বি-আ'ইউনিনা' — নিশ্চয় তুমি আমাদের চোখের সামনেই আছ। মুফাসসিরগণ বাক্যাংশটির ব্যাখ্যা করেন এই অর্থে যে, তিনি তাঁর দৃষ্টির ভেতরে ও তাঁর হেফাযতে আছেন; কারণ আরবিতে কোনো কিছুকে কারও চোখের সামনে বলার অর্থ হলো তা তার তত্ত্বাবধানে আছে। আহলুস সুন্নাহর স্থির অবস্থান হলো, শব্দগুলো যেভাবে নাযিল হয়েছে ঠিক সেভাবেই স্বীকার করা — 'কীভাবে' প্রশ্ন না তোলা, আবার অর্থ শূন্য করেও না দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Else the Phrase Falls",
          "bn": "এই শব্দবন্ধ আর কোথায় আসে"
        },
        "p": [
          {
            "en": "The expression is rare, and the places it appears are worth setting side by side. In 11:37 — and again word for word at 23:27 — Nuh (AS) is told to build the ship bi-a'yunina wa wahyina, before Our eyes and by Our revelation, while his people walk past a boat rising on dry ground; in 54:14 the same ship is described sailing bi-a'yunina once the water has come. 20:39 uses the singular for the infant Musa (AS), whose basket goes into the river so that he may be raised 'ala 'ayni, before My eye. Each one looks from outside like abandonment, and the phrase is the correction.",
            "bn": "শব্দবন্ধটি বিরল, আর যেসব জায়গায় এটি আসে সেগুলো পাশাপাশি রাখার মতো। 11:37 আয়াতে — আর হুবহু একই শব্দে 23:27 আয়াতেও — নূহ (আঃ)-কে বলা হয় 'বি-আ'ইউনিনা ওয়া ওয়াহইনা' — আমাদের চোখের সামনে ও আমাদের ওহী অনুযায়ী — নৌকা বানাতে, আর তাঁর জাতি শুকনো মাটিতে গড়ে ওঠা এক নৌকার পাশ দিয়ে হেঁটে যায়; 54:14 আয়াতে সেই একই নৌকাকে বর্ণনা করা হয় পানি আসার পর 'বি-আ'ইউনিনা' চলতে থাকা অবস্থায়। 20:39 আয়াতে শিশু মূসা (আঃ)-এর জন্য একবচন ব্যবহৃত হয়: তাঁর সিন্দুক নদীতে যায় যাতে তাঁকে 'আলা আইনি' — আমার চোখের সামনে — গড়ে তোলা হয়। প্রতিটিই বাইরে থেকে পরিত্যক্ত হওয়ার মতো দেখায়, আর এই শব্দবন্ধই তার সংশোধন।"
          }
        ]
      },
      {
        "h": {
          "en": "Praise When You Rise",
          "bn": "যখন তুমি ওঠো, প্রশংসা করো"
        },
        "p": [
          {
            "en": "The verse does not stop at patience. Wa sabbih bi-hamdi rabbika hina taqum, and glorify your Lord with praise when you arise. The commentators give hina taqum more than one reading and do not treat them as rivals: when you rise from sleep, when you stand up from a gathering, and when you rise for prayer. All three are moments of transition, and a transition is exactly where a person's frame of mind for the next stretch gets set.",
            "bn": "আয়াতটি ধৈর্যেই থেমে থাকে না। 'ওয়া সাব্বিহ বিহামদি রাব্বিকা হীনা তাকূম' — আর যখন তুমি ওঠো তখন তোমার প্রতিপালকের প্রশংসাসহ তাঁর মহিমা ঘোষণা করো। মুফাসসিরগণ 'হীনা তাকূম' নিয়ে একাধিক ব্যাখ্যা দেন এবং সেগুলোকে পরস্পরের প্রতিদ্বন্দ্বী মনে করেন না: যখন তুমি ঘুম থেকে ওঠো, যখন তুমি কোনো মজলিস থেকে ওঠো, আর যখন তুমি নামাযের জন্য দাঁড়াও। তিনটিই পরিবর্তনের মুহূর্ত, আর পরবর্তী সময়টার জন্য মানুষের মনের ঢঙটা ঠিক এই পরিবর্তনের মুহূর্তেই বসে যায়।"
          },
          {
            "en": "52:49 then adds a part of the night and the receding of the stars, so the surah ends on a small timetable rather than on an argument. The pairing of the two words matters. Tasbih declares Him free of every defect; hamd praises Him for what He is and what He does. Together they are the precise answer to a long wait: the delay is not a flaw in His management, and He is to be thanked inside the waiting rather than only after it.",
            "bn": "এরপর 52:49 যোগ করে রাতের একটি অংশ আর তারকারাজির অস্তমিত হওয়ার সময়; ফলে সূরাটি শেষ হয় কোনো যুক্তিতে নয়, বরং একটি ছোট সময়সূচিতে। দুটি শব্দের জোড়টি গুরুত্বপূর্ণ। তাসবীহ ঘোষণা করে যে তিনি সব ত্রুটি থেকে মুক্ত; হামদ প্রশংসা করে তিনি যা এবং তিনি যা করেন তার জন্য। একসঙ্গে এ দুটিই দীর্ঘ অপেক্ষার সঠিক জবাব: বিলম্ব তাঁর পরিচালনার কোনো ত্রুটি নয়, আর তাঁকে শোকর জানাতে হবে অপেক্ষার ভেতরেই, কেবল অপেক্ষা শেষ হওয়ার পরে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience With a Witness",
          "bn": "সাক্ষীসহ ধৈর্য"
        },
        "p": [
          {
            "en": "What the verse changes is not the length of the trial but its loneliness. Most of the weight of a long difficulty is the suspicion that it is unobserved, that the effort is going into a room nobody enters. 20:46 gives Musa (AS) and Harun (AS) the same medicine before they face Pharaoh: fear not, indeed I am with you both, I hear and I see. Being seen by the One who decides the outcome is a different condition from simply holding out alone.",
            "bn": "আয়াতটি পরীক্ষার দৈর্ঘ্য বদলায় না, বদলায় তার নিঃসঙ্গতা। দীর্ঘ কষ্টের ওজনের বেশিরভাগই আসে এই সন্দেহ থেকে যে কেউ তা দেখছে না, যে পরিশ্রমটুকু এমন এক ঘরে ঢালা হচ্ছে যেখানে কেউ ঢোকে না। 20:46 আয়াতে মূসা (আঃ) ও হারূন (আঃ)-কে ফিরআউনের মুখোমুখি হওয়ার আগে একই ওষুধ দেওয়া হয়: ভয় করো না, নিশ্চয় আমি তোমাদের দুজনের সঙ্গে আছি, আমি শুনি ও দেখি। যিনি পরিণাম ঠিক করবেন তাঁর দৃষ্টিতে থাকা, আর একা একা টিকে থাকা — এ দুটি সম্পূর্ণ ভিন্ন অবস্থা।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "কীভাবে এটি যাপন করা যায়"
        },
        "p": [
          {
            "en": "The practical form is the one the verse supplies. Attach praise to the moments you rise: the first minute out of bed, the moment you stand up from a seat, the standing at the start of prayer. Subhana rabbi wa bihamdih costs nothing and fits in any of them. Done deliberately for a week, it turns a verse about a Prophet's ﷺ trial into a personal timetable, which is precisely what the closing lines of at-Tur are for.",
            "bn": "ব্যবহারিক রূপটি আয়াত নিজেই জুগিয়ে দেয়। ওঠার মুহূর্তগুলোর সঙ্গে প্রশংসা জুড়ে দিন: বিছানা ছাড়ার প্রথম মিনিট, আসন থেকে ওঠার মুহূর্ত, নামায শুরুর দাঁড়ানোটা। 'সুবহানা রাব্বিয়া ওয়া বিহামদিহ' বলতে কিছুই খরচ হয় না, আর তা এই সবগুলোতেই এঁটে যায়। এক সপ্তাহ ইচ্ছা করে করলে এটি এক নবীর ﷺ পরীক্ষা নিয়ে বলা একটি আয়াতকে বদলে দেয় ব্যক্তিগত সময়সূচিতে — আত-তূরের শেষ পঙক্তিগুলো ঠিক এ কাজেরই জন্য।"
          },
          {
            "en": "And when the trial is the kind with no visible end, an illness, a case, a child who will not come back, the middle clause is the one to carry. You are not waiting in an empty room. The wait has a witness, and the witness is the One who will settle it. The surah's instruction for the interval is not to be told how long it will run, but to fill it with the praise of the One who already knows.",
            "bn": "আর পরীক্ষাটি যদি এমন হয় যার শেষ চোখে দেখা যায় না — কোনো অসুখ, কোনো মামলা, ফিরে না আসা কোনো সন্তান — তবে মাঝের বাক্যাংশটিই সঙ্গে নেওয়ার জিনিস। আপনি খালি ঘরে অপেক্ষা করছেন না। এই অপেক্ষার একজন সাক্ষী আছেন, আর সেই সাক্ষীই তা মীমাংসা করবেন। মধ্যবর্তী সময়টির জন্য সূরার নির্দেশ এই নয় যে আপনাকে জানিয়ে দেওয়া হবে তা কতদিন চলবে; বরং নির্দেশ হলো, যিনি ইতিমধ্যেই জানেন তাঁর প্রশংসা দিয়ে সময়টা ভরে রাখা।"
          }
        ]
      }
    ]
  }
});
