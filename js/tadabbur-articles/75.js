/**
 * Tadabbur long-form articles — surah 75.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "75:7": {
    "sections": [
      {
        "h": {
          "en": "A Scene Instead of a Date",
          "bn": "তারিখের বদলে একটি দৃশ্য"
        },
        "p": [
          {
            "en": "Fa-idha bariqa al-basar: so when the sight is dazzled. Three Arabic words, and the opening particle fa ties them to what came just before. In 75:5 man wants to go on sinning in the days ahead of him, and in 75:6 he asks, ayyana yawm al-qiyamah, when is the Day of Resurrection? At-Tabari reads that question as procrastination: he asks it while putting off his repentance, and so Allah made the matter clear to him with this verse and the two after it. Al-Qurtubi likewise says the verse carries the sense of an answer to what man asked.",
            "bn": "ফা ইযা বারিকাল বাসার: অতঃপর যখন দৃষ্টি ধাঁধিয়ে যাবে। আরবিতে মাত্র তিনটি শব্দ। শুরুর 'ফা' অব্যয়টি এগুলোকে ঠিক আগের কথার সঙ্গে বেঁধে দেয়। ৭৫:৫ আয়াতে মানুষ সামনের দিনগুলোতেও গুনাহ করে যেতে চায়, আর ৭৫:৬ আয়াতে সে জিজ্ঞেস করে, আইয়্যানা ইয়াওমুল কিয়ামাহ, কিয়ামত কবে? তাবারীর চোখে এ প্রশ্ন আসলে টালবাহানা। তওবা পিছিয়ে রাখতে রাখতেই সে এমন জিজ্ঞেস করে। তাই আল্লাহ এ আয়াত আর পরের দুই আয়াত দিয়ে বিষয়টা তার সামনে খুলে দিলেন। কুরতুবীও বলেন, মানুষ যা জানতে চেয়েছিল, আয়াতটিতে তারই জবাবের অর্থ রয়েছে।"
          },
          {
            "en": "Ibn Kathir, in the abridged English, treats the question as denial, a rejection of the Day's very existence rather than a wish to learn its hour. Whatever the motive, the reply refuses the terms on which it was asked. No year is named and no count of days is given. Instead the asker is shown what will happen to the very faculty with which he looked at the world and doubted. His question was about time; the answer is about him, and about his own eyes.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি ভাষ্য এ প্রশ্নকে বলে অস্বীকারের প্রশ্ন। দিনটার সময় জানার ইচ্ছা নয়, দিনটার অস্তিত্বকেই নাকচ করা। উদ্দেশ্য যা-ই হোক, জবাব প্রশ্নের শর্ত মেনে নেয় না। কোনো সালের নাম আসে না, দিনের কোনো হিসাবও না। তার বদলে প্রশ্নকারীকে দেখানো হয়, যে ইন্দ্রিয় দিয়ে সে দুনিয়ার দিকে তাকিয়ে সন্দেহ করত, তার কী দশা হবে। তার প্রশ্ন ছিল সময় নিয়ে। জবাবটা তাকে নিয়ে, তার নিজের চোখ নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Bariqa or Baraqa",
          "bn": "বারিকা, না বারাকা"
        },
        "p": [
          {
            "en": "The verb was read in two ways. Al-Qurtubi reports that Nafi', and Aban transmitting from Asim, read baraqa, with a fatha on the ra, while the rest read bariqa, with a kasra. Al-Baghawi gives the same division by place: the people of Madinah read baraqa and the others bariqa, and he adds that the two are simply two dialectal forms of the word. The written text is identical either way. What differs is a single short vowel, and with it a shade of the picture.",
            "bn": "ক্রিয়াটি দুইভাবে পড়া হয়েছে। কুরতুবী জানান, নাফি' এবং আসিম থেকে বর্ণনাকারী আবান পড়েছেন বারাকা, অর্থাৎ 'রা' অক্ষরে যবর দিয়ে। বাকিরা পড়েছেন বারিকা, যের দিয়ে। বাগাভী একই ভাগ দেখান অঞ্চল ধরে: মদীনাবাসীরা পড়েন বারাকা, অন্যরা বারিকা। তিনি যোগ করেন, এ দুটি আসলে শব্দটির দুই ভাষারূপ। লেখায় শব্দ হুবহু এক। তফাত কেবল একটি হ্রস্ব স্বরে, আর তার সঙ্গে ছবিটার রঙে সামান্য বদল।"
          },
          {
            "en": "Ibn Kathir begins from the other side. He cites Abu Amr ibn al-Ala on bariqa with the kasra, glossed as hara, to be bewildered, and then notes that others read it with the fatha, which he says is close in meaning to the first. Al-Qurtubi also records the same note of convergence: it has been said that the kasra and the fatha are two dialects with a single meaning. The commentators record a real variation in reading without treating it as a quarrel, and each reading adds its own shade to the same scene.",
            "bn": "ইবন কাসীর শুরু করেন উল্টো দিক থেকে। তিনি আবু আমর ইবনুল আলার কথা আনেন: যের দিয়ে বারিকা, মানে হা-রা, দিশেহারা হয়ে যাওয়া। তারপর বলেন, অন্যরা যবর দিয়ে পড়েছেন, আর অর্থে তা প্রথমটির কাছাকাছি। কুরতুবীও এই মিলের কথা উল্লেখ করেন: বলা হয়েছে, যের আর যবর দুই ভাষারূপ, অর্থ একই। তাফসীরকারেরা তাই কিরাআতের সত্যিকারের ভিন্নতা লিখে রাখেন, কিন্তু তাকে বিবাদ বানান না। প্রতিটি কিরাআত একই দৃশ্যে নিজের একটা রং যোগ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Eyes With Nowhere to Rest",
          "bn": "চোখ থামার জায়গা পায় না"
        },
        "p": [
          {
            "en": "Take the kasra reading first. Al-Qurtubi gives its sense as tahayyara fa-lam yatrif, it was bewildered and did not blink, a gloss he credits to Abu Amr, al-Zajjaj and others. Al-Farra and al-Khalil, as he quotes them, define bariqa as to be terrified, stunned and bewildered, and he adds that the Arabs say of a man struck dumb with confusion, qad bariqa fa-huwa bariq. Al-Baghawi quotes the same pair of philologists: bariqa means alarmed and bewildered at the wonders the person sees.",
            "bn": "প্রথমে যেরওয়ালা কিরাআত। কুরতুবী এর অর্থ দেন তাহাইয়ারা ফালাম ইয়াতরিফ: দিশেহারা হয়ে গেল, পলক পড়ল না। এ ব্যাখ্যা তিনি আবু আমর, যাজ্জাজ ও অন্যদের বলে উল্লেখ করেন। তাঁর উদ্ধৃতিতে ফাররা ও খলীল বারিকার সংজ্ঞা দেন এভাবে: ভয় পাওয়া, হতবাক হওয়া, দিশা হারানো। কুরতুবী আরও জানান, বিভ্রান্তিতে বোবা হয়ে যাওয়া মানুষকে আরবরা বলে, কাদ বারিকা ফাহুয়া বারিক। বাগাভীও এই দুই ভাষাবিদের কথা আনেন: বারিকা মানে যে আশ্চর্য জিনিস চোখে পড়ে, তাতে আতঙ্কিত ও দিশেহারা হওয়া।"
          },
          {
            "en": "Al-Qurtubi supports this with poetry. He cites Dhu al-Rumma: were Mayy to show herself unveiled to the eyes of Luqman the Wise, he would almost bariqa, almost be stunned out of his composure. From al-Farra he quotes a line urging a wounded man not to bariqa at the number of his wounds, which al-Qurtubi explains as do not panic. In both lines the word names a person overwhelmed by what is in front of him. The trouble is not that the eye cannot see; it is that it sees too much.",
            "bn": "কুরতুবী কবিতা দিয়ে এ অর্থের সমর্থন আনেন। যুর রুম্মার পঙক্তি: মাইয়া যদি জ্ঞানী লুকমানের চোখের সামনে মুখ খোলা অবস্থায় এসে দাঁড়াত, তিনিও প্রায় বারিকা হয়ে যেতেন, হতবাক হয়ে স্থিরতা হারাতেন। ফাররা থেকে তিনি আরেকটি পঙক্তি আনেন, যেখানে আহত লোককে বলা হচ্ছে, জখমের সংখ্যা দেখে বারিকা হয়ো না। কুরতুবী এর মানে করেন, ঘাবড়ে যেয়ো না। দুই পঙক্তিতেই শব্দটা এমন মানুষের কথা বলে, সামনের জিনিস যাকে কাবু করে ফেলেছে। সমস্যা এই নয় যে চোখ দেখতে পায় না। সমস্যা হলো, সে বড় বেশি দেখে ফেলে।"
          },
          {
            "en": "Ibn Kathir draws the picture out with another verse. Abu Amr's sense, he says, resembles la yartaddu ilayhim tarfuhum, their gaze does not return to them, in 14:43: they look this way and that in fright, and their sight cannot settle on anything because of the severity of the terror. Al-Muyassar puts the whole of it in a line: the sight is bewildered and stunned, in fright at what it sees of the horrors of the Day of Resurrection. The eye keeps moving, but it finds nowhere to stop.",
            "bn": "ইবন কাসীর আরেকটি আয়াত দিয়ে ছবিটা আরও খুলে দেন। তিনি বলেন, আবু আমরের অর্থ ১৪:৪৩ আয়াতের লা ইয়ারতাদ্দু ইলাইহিম তারফুহুম, তাদের দৃষ্টি তাদের দিকে ফিরে আসবে না, কথাটির মতো। ভয়ে তারা এদিক-ওদিক তাকাবে, আতঙ্কের তীব্রতায় কোনো কিছুর উপর তাদের চোখ স্থির হবে না। মুয়াসসার পুরো কথাটা এক লাইনে বলে: কিয়ামতের বিভীষিকা দেখে ভয়ে দৃষ্টি দিশেহারা ও হতবাক হয়ে যাবে। চোখ নড়তেই থাকে, কিন্তু থামার কোনো জায়গা পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Wide Open and Unblinking",
          "bn": "বিস্ফারিত, পলকহীন চোখ"
        },
        "p": [
          {
            "en": "The fatha reading turns the picture slightly. Al-Qurtubi explains baraqa as lama'a basaruhu min shiddati shukhusihi: his sight glints from the intensity of its fixed stare, so that you see him not blinking. Abu Ubayda, as al-Qurtubi reports, says baraqa means to split the eyes open and widen them, and quotes a line of al-Kilabi in which a man given a gift of camels baraqa, opened his eyes wide. Al-Baghawi joins the two senses: baraqa is to split the eye and open it, from al-bariq, which is glittering.",
            "bn": "যবরওয়ালা কিরাআত ছবিটাকে একটু ঘুরিয়ে দেয়। কুরতুবী বারাকার ব্যাখ্যা দেন লামাআ বাসারুহু মিন শিদ্দাতি শুখূসিহি: স্থির দৃষ্টির তীব্রতায় তার চোখ চকচক করে, দেখবেন সে পলক ফেলছে না। কুরতুবীর বর্ণনায় আবু উবায়দা বলেন, বারাকা মানে চোখ ফেড়ে বড় করে খোলা। প্রমাণ হিসেবে তিনি কিলাবীর এক পঙক্তি আনেন: উট উপহার পেয়ে লোকটি বারাকা করল, অর্থাৎ চোখ বড় বড় করে তাকাল। বাগাভী দুটি অর্থ জুড়ে দেন: বারাকা মানে চোখ ফেড়ে খুলে রাখা, শব্দটা এসেছে আল-বারীক থেকে, যার মানে ঝিলিক।"
          },
          {
            "en": "Here the commentators also say what the eye is staring at. Qatadah and Muqatil, in al-Baghawi, say the sight stares without blinking at the wonders it used to deny in the world. As-Sa'di, without pausing on the readings, says that when the Resurrection comes the eyes flash from the immense terror and stare without blinking, and he quotes 14:42 and 14:43: a day on which eyes will stare, heads raised, their gaze not returning to them and their hearts empty. Ma'arif al-Qur'an renders bariqa as dazzled and unable to see consistently.",
            "bn": "চোখ কীসের দিকে তাকিয়ে আছে, তাফসীরকারেরা সেটাও বলেন। বাগাভীর উদ্ধৃতিতে কাতাদা ও মুকাতিল বলেন, দুনিয়াতে যেসব আশ্চর্য বিষয় সে অস্বীকার করত, সেগুলোর দিকে দৃষ্টি পলকহীন হয়ে আটকে থাকবে। সা'দী কিরাআতের আলোচনায় না গিয়ে বলেন, কিয়ামত যখন আসবে, প্রচণ্ড আতঙ্কে চোখ ঝলসে উঠবে আর পলক না ফেলে তাকিয়ে থাকবে। সঙ্গে তিনি ১৪:৪২ ও ১৪:৪৩ উদ্ধৃত করেন: সেদিন চোখ স্থির হয়ে যাবে, মাথা উঁচু, দৃষ্টি তাদের দিকে ফিরবে না, অন্তর থাকবে শূন্য। মাআরিফুল কুরআন বারিকার অর্থ করে, চোখ ধাঁধিয়ে যাওয়া আর ঠিকমতো দেখতে না পারা।"
          },
          {
            "en": "Notice what both readings share. Al-Qurtubi glosses the kasra as bewildered and not blinking, and the fatha as glinting from a stare in which you see no blink. Qatadah and Muqatil use the same phrase, la yatrif, and so does as-Sa'di. The blink is the smallest rest the eye has, a fraction of a second in which it may close on what it sees. In this scene even that is gone. Whether the eye roams or locks in place, it has lost the power to look away.",
            "bn": "খেয়াল করুন, দুই কিরাআতের মধ্যে মিলটা কোথায়। কুরতুবী যেরের অর্থ করেন দিশেহারা ও পলকহীন, আর যবরের অর্থ এমন স্থির দৃষ্টির ঝিলিক যাতে পলক পড়তে দেখা যায় না। কাতাদা ও মুকাতিলও একই কথা বলেন, লা ইয়াতরিফ, সা'দীও তাই। পলক চোখের সবচেয়ে ছোট বিশ্রাম। মুহূর্তের এক ভগ্নাংশ, যখন চোখ সামনের জিনিসের উপর বন্ধ হতে পারে। এ দৃশ্যে সেটুকুও নেই। চোখ ঘুরে বেড়াক বা আটকে থাকুক, অন্যদিকে তাকানোর ক্ষমতা সে হারিয়ে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "At Death or at the Rising",
          "bn": "মৃত্যুকালে, নাকি পুনরুত্থানে"
        },
        "p": [
          {
            "en": "When does the sight do this? Here the commentators genuinely differ, and the difference is worth keeping. Al-Qurtubi reports that Mujahid and others said this happens at death, while al-Hasan said it is on the Day of Resurrection. Al-Baghawi also records the view that it happens at death, introducing it with qil, it has been said, and he adds al-Kalbi's narrower placement: the eyes of the disbelievers are dazzled when they see Hell. Neither al-Qurtubi nor al-Baghawi rules between these views; each sets them side by side.",
            "bn": "দৃষ্টির এ দশা কখন হবে? এখানে তাফসীরকারদের মধ্যে সত্যিকারের মতভেদ আছে, আর সেই মতভেদ ধরে রাখা দরকার। কুরতুবী জানান, মুজাহিদ ও অন্যরা বলেছেন, এটা মৃত্যুর সময়ে ঘটবে। আর হাসান বলেছেন, এটা কিয়ামতের দিন। বাগাভীও মৃত্যুকালের মতটি উল্লেখ করেন 'কীল', অর্থাৎ 'বলা হয়েছে' শব্দ দিয়ে। সঙ্গে তিনি কালবীর আরও সীমিত মতটি আনেন: জাহান্নাম দেখে কাফিরদের চোখ ধাঁধিয়ে যাবে। কুরতুবী বা বাগাভী কেউই এ মতগুলোর মধ্যে রায় দেন না, দুজনই মতগুলো পাশাপাশি রেখে দেন।"
          },
          {
            "en": "The other works read the verse with the Day in view. As-Sa'di opens with idha kanat al-qiyamah, when the Resurrection comes; Ibn Kathir says the eyes will be dazzled, humbled, bewildered and abased on the Day of Resurrection; al-Muyassar and Ma'arif al-Qur'an both speak of its horrors and its scenes. The verses that follow, about the moon and the sun in 75:8 and 75:9, belong to that larger scene, and this article leaves them for their own place. Both placements are on record, and both are left standing here.",
            "bn": "বাকি তাফসীরগুলো আয়াতটি পড়ে কিয়ামতের দিনকে সামনে রেখে। সা'দী শুরুই করেন ইযা কানাতিল কিয়ামাহ, যখন কিয়ামত আসবে, এই কথায়। ইবন কাসীর বলেন, কিয়ামতের দিন চোখ ধাঁধিয়ে যাবে, অবনত হবে, দিশা হারাবে, লাঞ্ছিত হবে। মুয়াসসার আর মাআরিফুল কুরআন দুটিই সেদিনের বিভীষিকা ও দৃশ্যের কথা বলে। পরের আয়াত দুটি, ৭৫:৮ ও ৭৫:৯, চাঁদ ও সূর্যের কথা বলে। সেগুলো এই বড় দৃশ্যেরই অংশ, তবে এ লেখা সেগুলোকে তাদের নিজের জায়গার জন্য রেখে দেয়। দুটি মতই লিপিবদ্ধ আছে, আর এখানে দুটিকেই রেখে দেওয়া হলো।"
          },
          {
            "en": "For a reader, the two placements do not compete so much as nest inside each other. If the moment is at death, it comes to each person alone and on no announced day, which is nearer than any answer to when. If it is at the Rising, it comes to everyone together, and no one is excused from it. Either way, the man who asked to be told the hour has been given something more useful than a date: a reason not to wait any longer.",
            "bn": "পাঠকের কাছে দুই মত পরস্পরের প্রতিদ্বন্দ্বী নয়, বরং একটার ভেতরে আরেকটা বসানো। মুহূর্তটা যদি মৃত্যুর সময়ে হয়, তবে তা আসে প্রত্যেকের কাছে আলাদা করে, কোনো ঘোষিত দিন ছাড়াই। 'কবে' প্রশ্নের যেকোনো উত্তরের চেয়ে তা কাছে। আর যদি পুনরুত্থানের দিনে হয়, তবে আসে সবার কাছে একসঙ্গে, কেউ রেহাই পায় না। যেটাই হোক, যে লোক সময়টা জানতে চেয়েছিল, সে তারিখের চেয়ে কাজের জিনিস পেয়ে গেছে: আর দেরি না করার একটা কারণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Tongue Asks, Eyes Answer",
          "bn": "জিভে প্রশ্ন, চোখে জবাব"
        },
        "p": [
          {
            "en": "There is a fitting turn in this. The man of 75:6 asked with his tongue; he is answered through his eyes. He looked at the world and saw nothing in it that pointed beyond it, and the words of Qatadah and Muqatil fix on exactly that: the wonders he used to deny. The faculty he trusted to judge what was real becomes the faculty that can no longer look away, or can no longer settle. Whichever reading is followed, sight stops being something he directs and becomes something that happens to him.",
            "bn": "এখানে একটা মানানসই মোড় আছে। ৭৫:৬ আয়াতের লোকটি প্রশ্ন করেছিল জিভ দিয়ে, জবাব পায় চোখ দিয়ে। দুনিয়ার দিকে সে তাকিয়েছিল, কিন্তু এর ওপারের দিকে ইশারা করে এমন কিছু তাতে দেখেনি। কাতাদা ও মুকাতিলের কথাও ঠিক সেখানেই আঙুল রাখে: যেসব আশ্চর্য বিষয় সে অস্বীকার করত। কোনটা সত্য, তা যাচাই করতে যে ইন্দ্রিয়ের উপর সে ভরসা করত, সেটাই হয়ে যায় এমন ইন্দ্রিয়, যা আর চোখ ফেরাতে পারে না, কিংবা আর স্থির হতে পারে না। যে কিরাআতই ধরা হোক, দৃষ্টি আর তার চালানোর জিনিস থাকে না। দৃষ্টি তখন তার উপর ঘটে যাওয়া এক অবস্থা।"
          },
          {
            "en": "At-Tabari, in a report on 75:6 that runs back to Qatadah, includes a saying attributed to Umar ibn al-Khattab: whoever is asked about the Day of Resurrection, let him recite this surah. It is a Companion's saying, not a hadith of the Prophet ﷺ, and at-Tabari gives it no grading. None of the commentaries consulted for this verse attaches a sound prophetic hadith to 75:7 itself, so this article cites none. By Umar's counsel, the surah is its own reply to the question.",
            "bn": "৭৫:৬ আয়াতের আলোচনায় তাবারী কাতাদা পর্যন্ত পৌঁছানো এক বর্ণনায় উমর ইবনুল খাত্তাব (রাঃ)-এর নামে একটি কথা আনেন: কিয়ামত সম্পর্কে যাকে জিজ্ঞেস করা হয়, সে যেন এই সূরা পড়ে শোনায়। এটা একজন সাহাবীর কথা, নবী ﷺ-এর হাদীস নয়, আর তাবারী এর কোনো মান নির্ধারণ করেননি। এ আয়াতের জন্য দেখা তাফসীরগুলোর কোনোটিই ৭৫:৭ আয়াতের সঙ্গে সরাসরি কোনো সহীহ হাদীস জোড়েনি, তাই এ লেখাও কোনো হাদীস উদ্ধৃত করছে না। উমর (রাঃ)-এর পরামর্শ অনুযায়ী, প্রশ্নের জবাব এই সূরা নিজেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Describing, Not Accusing",
          "bn": "বর্ণনা, অভিযোগ নয়"
        },
        "p": [
          {
            "en": "A plain word is needed here. The verse describes what it describes: the sight of the human being of 75:5 and 75:6, at the moment of death or on the Day, and al-Kalbi in al-Baghawi narrows it to the eyes of disbelievers before Hell. It licenses nothing against any living person or community. It hands nobody the right to name who will stare in terror and who will be spared, or to read that terror into a neighbour's face. The verse speaks to its reader about its reader.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: ৭৫:৫ ও ৭৫:৬ আয়াতের মানুষটির দৃষ্টি, মৃত্যুর মুহূর্তে কিংবা কিয়ামতের দিনে। বাগাভীর উদ্ধৃতিতে কালবী একে আরও সীমিত করে জাহান্নামের সামনে কাফিরদের চোখের কথা বলেন। কিন্তু কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। কে আতঙ্কে চেয়ে থাকবে আর কে রেহাই পাবে, তা ঠিক করে দেওয়ার অধিকার এ আয়াত কাউকে দেয় না। প্রতিবেশীর চেহারায় সেই আতঙ্ক খুঁজে বেড়ানোরও না। আয়াতটি পাঠকের সঙ্গে কথা বলে পাঠকেরই ব্যাপারে।"
          },
          {
            "en": "That is how the passage frames it too. Its subject throughout is al-insan, the human being, not a named people, and its questions are put to whoever hears them. Read this way, the dazzled sight is less a portrait of others than a mirror. The asker who says when may be any of us, at the moment we push a duty into an undated later. The verse does not ask us to identify him in someone else; it asks whether, in some corner of our own life, we have become him.",
            "bn": "অংশটি নিজেও বিষয়টা এভাবেই সাজায়। গোটা অংশে কথা হচ্ছে আল-ইনসান, অর্থাৎ মানুষকে নিয়ে, নাম ধরে কোনো জাতিকে নিয়ে নয়। এর প্রশ্নগুলো যে শোনে তার দিকেই ছোড়া। এভাবে পড়লে ধাঁধিয়ে যাওয়া দৃষ্টি অন্যদের ছবি নয়, বরং আয়না। যে প্রশ্নকারী 'কবে' বলে, সে আমাদের যে কেউ হতে পারে, যখনই আমরা কোনো দায়িত্বকে তারিখহীন এক 'পরে'-তে ঠেলে দিই। আয়াত চায় না আমরা অন্য কারও মধ্যে তাকে খুঁজে বের করি। আয়াত জানতে চায়, নিজের জীবনের কোনো কোণে আমরাই কি সেই লোক হয়ে গেছি?"
          }
        ]
      },
      {
        "h": {
          "en": "While the Eyes Still Obey",
          "bn": "চোখ যতদিন কথা শোনে"
        },
        "p": [
          {
            "en": "The question of 75:6 is still asked, sometimes aloud and more often silently, by anyone who means to set things right later. The verse does not answer it with a date, and a date would only let the postponing run on until the deadline. It answers with a condition of the self. The sight that today is free to look wherever it chooses will, at death or at the Rising, be either bewildered or fixed. The time to choose what the eyes look at is now.",
            "bn": "৭৫:৬ আয়াতের প্রশ্ন আজও করা হয়, কখনো মুখে, বেশির ভাগ সময় মনে মনে। যে-ই ভাবে পরে সব ঠিক করে নেবে, সে-ই এ প্রশ্ন করে। আয়াত এর জবাব তারিখ দিয়ে দেয় না। তারিখ পেলে তো টালবাহানা সময়সীমা পর্যন্ত চলতেই থাকত। জবাব আসে মানুষের নিজের এক অবস্থা দিয়ে। যে দৃষ্টি আজ যেদিকে খুশি তাকাতে পারে, মৃত্যুকালে বা পুনরুত্থানের দিনে তা হয় দিশেহারা হবে, নয়তো আটকে যাবে। চোখ কীসের দিকে তাকাবে, তা বেছে নেওয়ার সময় এখনই।"
          },
          {
            "en": "The verses that follow, 75:10 and 75:12, carry the scene to the cry for a place to flee and to the reply that the place of settling that Day is with your Lord. For the reader, the lesson of 75:7 is quieter. Look now, steadily and by choice, at what you will someday be unable to look away from. Turn the eyes from what corrodes toward what reminds. Then the question when loses its power to delay, because readiness no longer waits for its answer.",
            "bn": "পরের আয়াতগুলো, ৭৫:১০ ও ৭৫:১২, দৃশ্যটাকে নিয়ে যায় পালানোর জায়গা খোঁজার আর্তনাদে, আর সেই জবাবে যে সেদিন ঠাঁই কেবল আপনার রবের কাছে। পাঠকের জন্য ৭৫:৭ আয়াতের শিক্ষা আরও নীরব। যে জিনিস থেকে একদিন চোখ ফেরাতে পারবেন না, আজ নিজের ইচ্ছায়, স্থির চোখে তার দিকে তাকান। যা ভেতরটা ক্ষইয়ে দেয়, তা থেকে চোখ সরিয়ে যা মনে করিয়ে দেয়, তার দিকে ফেরান। তখন 'কবে' প্রশ্নটা আর দেরির অজুহাত হতে পারে না, কারণ প্রস্তুতি তখন আর তার জবাবের অপেক্ষায় বসে থাকে না।"
          }
        ]
      }
    ]
  },
  "75:36": {
    "sections": [
      {
        "h": {
          "en": "The Same Question Twice",
          "bn": "একই প্রশ্ন দু'বার"
        },
        "p": [
          {
            "en": "The phrase ayahsabu al-insanu, does man think, occurs exactly twice in the Quran, and both times in this surah. The first is 75:3, asking whether he thinks We will not assemble his bones. The last is this verse, asking whether he thinks he will be left suda. Surah al-Qiyamah opens with a doubt about the body and closes with a doubt about the point of it.",
            "bn": "'আ ইয়াহসাবুল ইনসান' — মানুষ কি মনে করে — এই বাক্যাংশটি কুরআনে ঠিক দু'বার এসেছে, আর দু'বারই এই সূরায়। প্রথমটি 75:3 আয়াত, যা জিজ্ঞেস করে সে কি ভাবে আমি তার হাড়গুলো একত্র করব না। শেষটি এই আয়াত, যা জিজ্ঞেস করে সে কি ভাবে তাকে 'সুদা' অবস্থায় ছেড়ে দেওয়া হবে। সূরা আল-কিয়ামাহ শুরু হয় দেহ নিয়ে এক সন্দেহ দিয়ে, আর শেষ হয় তার উদ্দেশ্য নিয়ে এক সন্দেহ দিয়ে।"
          },
          {
            "en": "The placement is pointed. 75:31 and 75:32 describe a man who neither believed nor prayed but denied and turned away, and 75:33 has him walking back to his people swaggering. 75:34 and 75:35 pronounce woe over him twice. The question of this verse lands directly after that portrait. The man who strutted home is asked what exactly he imagined the arrangement was.",
            "bn": "অবস্থানটি তাৎপর্যপূর্ণ। 75:31 ও 75:32 আয়াত এমন এক ব্যক্তির বর্ণনা দেয় যে বিশ্বাসও করেনি, নামাযও পড়েনি, বরং প্রত্যাখ্যান করেছে ও মুখ ফিরিয়ে নিয়েছে; আর 75:33 আয়াতে সে দম্ভভরে নিজের পরিবারের কাছে ফিরে যায়। 75:34 ও 75:35 আয়াত তার উপর দু'বার দুর্ভোগ উচ্চারণ করে। এই আয়াতের প্রশ্নটি এসে পড়ে ঠিক সেই চিত্রটির পরেই। যে লোকটি দম্ভভরে ঘরে ফিরেছিল, তাকেই জিজ্ঞেস করা হচ্ছে — সে আসলে ভেবেছিলটা কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Suda",
          "bn": "সুদা"
        },
        "p": [
          {
            "en": "The word suda occurs once in the whole Quran, here. It describes livestock turned loose with no herdsman — a camel left to graze where it likes, unclaimed, uncounted, answerable to nobody. Ibn Kathir's gloss is compact: left neglected, neither commanded nor forbidden. The app renders it left neglected, and that is the sense to hold: not unloved, but unsupervised.",
            "bn": "'সুদা' শব্দটি গোটা কুরআনে একবারই এসেছে, এখানে। এটি এমন গবাদিপশু বোঝায় যাকে রাখাল ছাড়াই ছেড়ে দেওয়া হয়েছে — যে উট যেখানে খুশি চরে বেড়ায়, যার কোনো দাবিদার নেই, হিসাব নেই, কারও কাছে জবাবদিহি নেই। ইবনে কাসীরের ব্যাখ্যাটি সংক্ষিপ্ত: উপেক্ষিত অবস্থায় ছেড়ে দেওয়া, যাকে কোনো আদেশও করা হয় না, নিষেধও করা হয় না। অ্যাপের অনুবাদ বলে 'এমনি ছেড়ে দেওয়া' — অর্থটি এভাবেই ধরতে হবে: অপ্রিয় নয়, বরং তত্ত্বাবধানহীন।"
          },
          {
            "en": "That distinction changes what the verse is accusing us of. It is not asking whether anyone thinks Allah does not exist, and it is not asking whether anyone doubts the resurrection outright. It is asking whether a person quietly assumes that his own life, unlike everything else, has been left running without instructions and will not be collected at the end.",
            "bn": "এই পার্থক্যটি বদলে দেয় আয়াতটি আমাদের বিরুদ্ধে কী অভিযোগ আনছে। এটি জিজ্ঞেস করছে না কেউ আল্লাহর অস্তিত্বে অবিশ্বাসী কি না, কিংবা কেউ পুনরুত্থানকে সরাসরি অস্বীকার করে কি না। এটি জিজ্ঞেস করছে, মানুষ কি চুপচাপ ধরে নেয় যে অন্য সব কিছুর বিপরীতে তার নিজের জীবনটিকে কোনো নির্দেশনা ছাড়াই চলতে দেওয়া হয়েছে এবং শেষে তা আর তুলে নেওয়া হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "It Is a Question",
          "bn": "এটি একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse never states that man will not be left neglected. It asks whether he thinks he will be. That form matters. An assertion can be argued with from the outside; a question of this shape makes the listener produce the claim himself and then look at it, which is far harder to shrug off, because the belief being examined is one he has never said aloud.",
            "bn": "আয়াতটি কোথাও বলে না যে মানুষকে উপেক্ষিত অবস্থায় ছেড়ে দেওয়া হবে না। এটি জিজ্ঞেস করে, সে কি তা-ই মনে করে। এই গঠনটি গুরুত্বপূর্ণ। বিবৃতির সঙ্গে বাইরে থেকে তর্ক করা যায়; কিন্তু এই ধরনের প্রশ্ন শ্রোতাকে দিয়েই দাবিটি উচ্চারণ করায় এবং তারপর তার দিকে তাকাতে বাধ্য করে — যা ঝেড়ে ফেলা অনেক কঠিন, কারণ যে বিশ্বাসটি পরীক্ষা করা হচ্ছে সে তা কখনো মুখে বলেনি।"
          },
          {
            "en": "The Quran then declines to answer with an assertion either. 75:37 to 75:39 walk backwards through the reader's own origin — a drop of fluid, then a clinging clot, then a form created and proportioned, then made into the two mates, male and female. And 75:40 closes the surah with one more question: is not that One able to give life to the dead? A doubt about purpose is answered with evidence about power.",
            "bn": "এরপর কুরআন কোনো বিবৃতি দিয়েও উত্তর দিতে অস্বীকার করে। 75:37 থেকে 75:39 আয়াত পাঠকের নিজের উৎপত্তির পথ ধরে পিছিয়ে যায় — এক ফোঁটা তরল, তারপর জমাট রক্তপিণ্ড, তারপর সৃষ্ট ও সুবিন্যস্ত এক আকৃতি, তারপর তা থেকে জোড়া — পুরুষ ও নারী। আর 75:40 আয়াত সূরাটি শেষ করে আরও একটি প্রশ্ন দিয়ে: এমন সত্তা কি মৃতকে জীবিত করতে সক্ষম নন? উদ্দেশ্য নিয়ে সন্দেহের জবাব আসে ক্ষমতা নিয়ে প্রমাণ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Was Made in Play",
          "bn": "কিছুই খেলাচ্ছলে বানানো হয়নি"
        },
        "p": [
          {
            "en": "The principle behind the question is stated flatly elsewhere. 21:16 and 44:38 both deny that the heavens, the earth and what lies between them were created in play, and 44:39 adds that they were created only in truth. 38:27 says the same and then names the alternative honestly: that assumption belongs to those who disbelieve. This verse takes a rule already applied to the sky and applies it to one person.",
            "bn": "প্রশ্নটির পেছনের নীতিটি অন্যত্র সরাসরিই বলা হয়েছে। 21:16 ও 44:38 উভয় আয়াতই অস্বীকার করে যে আসমান, যমীন ও এ দুয়ের মাঝে যা আছে তা খেলাচ্ছলে সৃষ্টি করা হয়েছে, আর 44:39 আয়াত যোগ করে যে তা সৃষ্টি করা হয়েছে কেবল সত্য উদ্দেশ্যেই। 38:27 আয়াত একই কথা বলে, তারপর বিকল্প ধারণাটির নাম সৎভাবে বলে দেয়: এ ধারণা কাফিরদেরই। এই আয়াত আসমানের উপর ইতিমধ্যেই প্রযুক্ত একটি নীতিকে একজন মানুষের উপর প্রয়োগ করে।"
          },
          {
            "en": "23:115 puts the identical challenge in the second person plural, asking a whole audience whether they thought they were created uselessly and would not be returned. Read side by side, the two verses close the gap that heedlessness lives in: a universe with a purpose does not contain one exempt species, and a species with a purpose does not contain one exempt afternoon.",
            "bn": "23:115 আয়াত হুবহু একই চ্যালেঞ্জ রাখে মধ্যম পুরুষের বহুবচনে, গোটা শ্রোতৃমণ্ডলীকে জিজ্ঞেস করে — তারা কি ভেবেছিল তাদের অনর্থক সৃষ্টি করা হয়েছে এবং তাদের ফিরিয়ে আনা হবে না। পাশাপাশি পড়লে আয়াত দুটি সেই ফাঁকটি বন্ধ করে দেয় যেখানে গাফলতি বাস করে: উদ্দেশ্যসম্পন্ন এক বিশ্বে ছাড়প্রাপ্ত কোনো প্রজাতি থাকে না, আর উদ্দেশ্যসম্পন্ন এক প্রজাতির মধ্যে ছাড়প্রাপ্ত কোনো বিকেল থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Bites",
          "bn": "যেখানে এটি বেঁধে"
        },
        "p": [
          {
            "en": "Because suda means unsupervised rather than sinful, the verse reaches past the obvious failures. Most people have some region of life they treat as off the record — how they speak when tired, what they do with an idle hour, the standard they hold to when no one whose opinion matters is watching. That region is exactly what the question is about.",
            "bn": "যেহেতু 'সুদা' মানে পাপাচারী নয়, বরং তত্ত্বাবধানহীন, তাই আয়াতটি স্পষ্ট ব্যর্থতাগুলোর ওপারেও পৌঁছে যায়। বেশির ভাগ মানুষেরই জীবনের এমন কোনো এলাকা থাকে যাকে তারা হিসাবের বাইরের বলে ধরে নেয় — ক্লান্ত অবস্থায় তারা কীভাবে কথা বলে, অলস একটি ঘণ্টা তারা কীভাবে কাটায়, যার মতামত গুরুত্বপূর্ণ এমন কেউ না দেখলে তারা কোন মান বজায় রাখে। প্রশ্নটি ঠিক সেই এলাকাটিকে নিয়েই।"
          },
          {
            "en": "The remedy the surah offers is not more anxiety but a better memory. Someone took that much trouble over your making, working from a drop of fluid to a finished human being, and the verses that follow the question say so in order. Such care does not lose interest halfway. Live the ordinary hours as claimed hours, and the question stops being frightening and starts being steadying.",
            "bn": "সূরাটি যে প্রতিকার দেয় তা বাড়তি উদ্বেগ নয়, বরং উন্নততর স্মৃতি। কেউ একজন আপনার নির্মাণের পেছনে এতটা যত্ন করেছেন, এক ফোঁটা তরল থেকে শুরু করে পূর্ণাঙ্গ এক মানুষ পর্যন্ত — প্রশ্নটির পরের আয়াতগুলো ক্রম ধরে সে কথাই বলে। এমন যত্ন মাঝপথে আগ্রহ হারায় না। সাধারণ ঘণ্টাগুলোকে দাবিকৃত ঘণ্টা হিসেবে যাপন করুন, তখন প্রশ্নটি আর ভয় দেখায় না, বরং স্থির করে দেয়।"
          }
        ]
      }
    ]
  }
});
