/**
 * Tadabbur long-form articles — surah 19.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "19:4": {
    "sections": [
      {
        "h": {
          "en": "Mercy Named Before the Story",
          "bn": "কাহিনির আগেই রহমতের নাম"
        },
        "p": [
          {
            "en": "Surah Maryam opens its first story with a heading: dhikru rahmati rabbika 'abdahu Zakariyya, a mention of your Lord's mercy to His servant Zakariyya. Ibn Kathir reads it as a reminder of Allah's mercy upon His servant, and notes that Yahya ibn Ya'mar recited it as a verb, dhakkara, He has reminded. So the reader knows the outcome is mercy before a single word of the prayer has been heard.",
            "bn": "সূরা মারইয়াম তার প্রথম কাহিনি শুরু করে একটা শিরোনাম দিয়ে: যিকরু রাহমাতি রাব্বিকা আবদাহু যাকারিয়্যা, তোমার রবের রহমতের বিবরণ, তাঁর বান্দা যাকারিয়্যার প্রতি। ইবন কাসীর বলেন, এ হলো বান্দার প্রতি আল্লাহর রহমতের স্মরণ। তিনি আরও জানান, ইয়াহইয়া ইবন ইয়া'মার শব্দটি ক্রিয়া হিসেবে পড়েছেন: যাক্কারা, তিনি স্মরণ করিয়ে দিলেন। দোয়ার একটি শব্দ শোনার আগেই পাঠক তাই জেনে যান, এ গল্পের শেষটা রহমতে।"
          },
          {
            "en": "19:3 sets the scene: idh nada rabbahu nida'an khafiyya, when he called to his Lord a hidden call. At-Tabari carries a report from as-Suddi that Zakariyya (AS) longed for a child, so he stood and prayed, and then called upon his Lord in secret with the words of 19:4 through to 19:6. At-Tabari then makes the link explicit: the hidden call with which he called his Lord was exactly this, that he said rabbi inni wahana al-'azmu minni. 19:4 is not a second prayer after the quiet one; it is the quiet one, given in full.",
            "bn": "১৯:৩ আয়াত দৃশ্যটা সাজিয়ে দেয়: ইয নাদা রাব্বাহু নিদাআন খাফিয়্যা, যখন তিনি তাঁর রবকে ডেকেছিলেন গোপন ডাকে। তাবারী সুদ্দীর একটি বর্ণনা আনেন। যাকারিয়্যা (আঃ)-এর মনে সন্তানের আকাঙ্ক্ষা জাগল। তিনি উঠে নামায পড়লেন, তারপর চুপিচুপি রবকে ডাকলেন ১৯:৪ থেকে ১৯:৬ আয়াতের কথাগুলো দিয়ে। এরপর তাবারী যোগসূত্রটা খুলে বলেন: যে গোপন ডাকে তিনি রবকে ডেকেছিলেন, তা ছিল ঠিক এই কথা, রাব্বি ইন্নী ওয়াহানাল আযমু মিন্নী। কাজেই ১৯:৪ আলাদা কোনো দোয়া নয়। ওই গোপন ডাকটাই এখানে পুরোটা শোনানো হয়েছে।"
          },
          {
            "en": "Why quietly? Ibn Kathir, in the abridged English, answers that he made his supplication in secret because that is more beloved to Allah, and he brings Qatada's comment on the verse: Allah knows the pious heart, and He hears the hidden voice. So the words that follow had a single Listener, and He already knew everything they describe.",
            "bn": "চুপিচুপি কেন? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি ভাষ্য জবাব দেয়: গোপনে দোয়া করা আল্লাহর কাছে বেশি প্রিয়, তাই তিনি গোপনে ডেকেছিলেন। সঙ্গে আয়াতটির ওপর কাতাদার মন্তব্য আনা হয়েছে: আল্লাহ মুত্তাকী হৃদয়কে চেনেন, গোপন আওয়াজও শোনেন। পরের কথাগুলোর শ্রোতা তাই একজনই, আর যা কিছু বলা হবে তার সবটাই তিনি আগে থেকে জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Thinned by the Years",
          "bn": "বয়সে ক্ষয়ে যাওয়া হাড়"
        },
        "p": [
          {
            "en": "Rabbi inni wahana al-'azmu minni: my Lord, the bone in me has weakened. Al-Qurtubi notes that wahana is read with each of the three short vowels on its middle letter, and in every reading it means to become weak; he gives the conjugation wahana yahinu, and records a second one from Abu Zayd. At-Tabari glosses wahana as weakened and grew thin, from old age, and al-Baghawi gives the same two verbs with the same cause. The Muyassar paraphrases the whole clause in the first person: I have grown old, and my bone has weakened.",
            "bn": "রাব্বি ইন্নী ওয়াহানাল আযমু মিন্নী: হে আমার রব, আমার ভেতরের হাড় দুর্বল হয়ে গেছে। কুরতুবী জানান, ওয়াহানা শব্দের মাঝের অক্ষরটি তিনটি হরকতেই পড়া হয়েছে, আর প্রতিটি পাঠেই অর্থ দুর্বল হওয়া। তিনি ওয়াহানা ইয়াহিনু রূপটি দেন, আর আবু যায়দ থেকে আরেকটি রূপ উল্লেখ করেন। তাবারীর ব্যাখ্যায় ওয়াহানা মানে দুর্বল হলো ও পাতলা হয়ে গেল, বার্ধক্যের কারণে। বাগাভীও একই দুই ক্রিয়া আর একই কারণ বলেন। মুয়াসসার পুরো বাক্যটাকে উত্তম পুরুষে খুলে বলে: আমি বুড়ো হয়ে গেছি, আমার হাড় দুর্বল হয়ে পড়েছে।"
          },
          {
            "en": "The early authorities at-Tabari cites put it just as plainly. Qatada says: the bone in me has weakened. Mujahid says nahala al-'azm, the bone has wasted and grown thin. Al-Baghawi adds from Qatada a concrete detail: he was complaining of his molars falling out. At-Tabari also records, through 'Abd ar-Razzaq, that Sufyan ath-Thawri said: it has reached me that Zakariyya was seventy years old. Ath-Thawri names no source for it, so it is reported here only as what reached him.",
            "bn": "তাবারী পূর্বসূরিদের যেসব কথা আনেন, সেগুলোও একই রকম সোজা। কাতাদা বলেন: আমার হাড় দুর্বল হয়ে গেছে। মুজাহিদ বলেন: নাহালাল আযম, হাড় ক্ষয়ে শীর্ণ হয়ে গেছে। বাগাভী কাতাদা থেকে একটা বাস্তব খুঁটিনাটি যোগ করেন: তিনি মাড়ির দাঁত পড়ে যাওয়ার কষ্টের কথা বলছিলেন। তাবারী আবদুর রাযযাকের সূত্রে সুফইয়ান সাওরীর একটি কথাও আনেন: আমার কাছে খবর পৌঁছেছে, যাকারিয়্যার বয়স তখন সত্তর বছর। সাওরী এর কোনো সূত্র বলেননি, তাই কথাটা এখানে শুধু তাঁর কাছে পৌঁছানো খবর হিসেবেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Pillar of the Body",
          "bn": "দেহের মূল খুঁটি"
        },
        "p": [
          {
            "en": "Why name the bone, rather than strength in general? Al-Qurtubi gives two reasons. The bone is the body's pillar: by it the body stands, and it is the foundation of its build, so that when it weakens, the rest of a person's strength gives way and collapses with it. And it is the hardest and firmest thing in the body, so if it has weakened, whatever lies beyond it is weaker still. As-Sa'di makes the first point in a single line: when the bone, the support of the body, weakens, everything else weakens too.",
            "bn": "সাধারণভাবে শক্তির কথা না বলে হাড়ের নাম কেন? কুরতুবী দুটি কারণ দেখান। প্রথমত, হাড় দেহের খুঁটি। এর ওপর ভর করেই শরীর দাঁড়িয়ে থাকে, এটাই তার গঠনের ভিত। হাড় দুর্বল হলে মানুষের বাকি সব শক্তিও একে একে ভেঙে পড়ে। দ্বিতীয়ত, দেহে হাড়ের চেয়ে শক্ত আর মজবুত কিছু নেই। সবচেয়ে শক্ত জিনিসটাই যদি দুর্বল হয়ে যায়, বাকিগুলোর অবস্থা তো আরও নাজুক। সা'দী প্রথম কথাটা এক বাক্যে বলে দেন: হাড় দেহের অবলম্বন, হাড় দুর্বল হলে বাকি সবই দুর্বল হয়ে পড়ে।"
          },
          {
            "en": "Al-Qurtubi also explains the singular. The verse does not say al-'izam, the bones, because the singular is what points to the kind as such: the very kind of thing that is the body's pillar and its hardest component has been touched by weakness. A plural, he says, would have aimed at a different meaning, that not some of his bones had weakened but all of them. Ma'arif al-Qur'an makes the bodily point for its reader: the bones keep the body firm and upright, and when they lose their strength the whole body turns weak.",
            "bn": "একবচনের ব্যাখ্যাও কুরতুবী দেন। আয়াত আল-ইযাম, অর্থাৎ হাড়গুলো, বলেনি। কারণ একবচনই গোটা জাতটাকে বোঝায়। যে জিনিস দেহের খুঁটি, দেহের সবচেয়ে শক্ত উপাদান, সেই জিনিসটাকেই দুর্বলতা ছুঁয়ে ফেলেছে। তাঁর মতে বহুবচন হলে অর্থ অন্যদিকে যেত। তখন বোঝাত, কিছু হাড় নয়, সব হাড়ই দুর্বল হয়েছে। মাআরিফুল কুরআন কথাটা শরীরের ভাষায় বলে: হাড়ই দেহকে মজবুত ও সোজা রাখে, হাড় শক্তি হারালে গোটা শরীরটাই দুর্বল হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "White Spreading Like Flame",
          "bn": "আগুনের মতো ছড়ানো শুভ্রতা"
        },
        "p": [
          {
            "en": "Washta'ala ar-ra'su shayban: and the head has blazed with white. Al-Qurtubi calls this one of the finest metaphors in the speech of the Arabs. Ishti'al, he explains, is the spreading of fire's rays, and the spread of white hair across the head is likened to it; the sense is, I have grown old and weak. Ma'arif al-Qur'an gives the literal meaning as a sudden burst of fire, used here for grey hair covering the head like a glow of fire.",
            "bn": "ওয়াশতাআলার রা'সু শাইবা: আর মাথা জ্বলে উঠেছে শুভ্রতায়। কুরতুবী একে আরবদের ভাষার সবচেয়ে সুন্দর রূপকগুলোর একটি বলেছেন। তাঁর ব্যাখ্যায় ইশতিআল মানে আগুনের শিখা চারদিকে ছড়িয়ে পড়া। মাথায় পাকা চুলের ছড়িয়ে পড়াকে তার সঙ্গে তুলনা করা হয়েছে। মর্ম হলো: আমি বুড়ো হয়েছি, দুর্বল হয়েছি। মাআরিফুল কুরআন শব্দটির আক্ষরিক অর্থ বলে হঠাৎ দপ করে জ্বলে ওঠা আগুন। এখানে তা উপমা হয়েছে পাকা চুলের, যা আগুনের আভার মতো মাথা ঢেকে ফেলেছে।"
          },
          {
            "en": "Al-Qurtubi notices two more things in the wording. The blazing is attributed to the head, the place where the hair grows and springs from, rather than to the hair itself. And the verse says the head, not my head, content that the listener knows whose head it is: Zakariyya's own. The Muyassar's paraphrase sets the image aside for the plain fact: the white has spread through my head. Al-Baghawi's is plainer still: the hair of the head turned white.",
            "bn": "শব্দবিন্যাসে কুরতুবী আরও দুটি জিনিস লক্ষ করেন। জ্বলে ওঠার কাজটা চুলের ওপর নয়, চাপানো হয়েছে মাথার ওপর, অর্থাৎ যেখানে চুল জন্মায় ও গজায়। আবার আয়াত বলেছে শুধু মাথা, আমার মাথা বলেনি। কার মাথা, শ্রোতা তা জানেন: যাকারিয়্যা (আঃ)-এর নিজের। মুয়াসসার রূপকটা পাশে রেখে সোজা তথ্যটা বলে: আমার মাথায় পাকা চুল ছড়িয়ে পড়েছে। বাগাভী আরও সরল: মাথার চুল সাদা হয়ে গেছে।"
          },
          {
            "en": "Ibn Kathir reads the image as white catching fire inside the black: the grey has blazed up among the dark hair. He supports it with lines from the Maqsura of Ibn Durayd, in which the poet's head, in its colour, resembles the fringe of dawn beneath the trailing skirts of night, and the white kindles in its black as fire kindles in embers of ghada wood. Then Ibn Kathir states the purpose of the whole sentence: to tell of weakness and old age, and of their signs, the outward and the inward.",
            "bn": "ইবন কাসীর ছবিটা দেখেন এভাবে: কালোর ভেতরে সাদা আগুন ধরেছে, কালো চুলের মাঝে পাকা চুল দাউদাউ করে উঠেছে। সমর্থনে তিনি ইবন দুরাইদের মাকসূরা কাব্য থেকে কয়েকটি চরণ আনেন। সেখানে কবির মাথার রং যেন রাতের ঝুলে থাকা আঁচলের নিচে ভোরের প্রথম কিনারা। আর তার কালোর মধ্যে সাদা জ্বলে উঠেছে, যেমন গাযা কাঠের অঙ্গারে আগুন জ্বলে। তারপর ইবন কাসীর পুরো বাক্যের উদ্দেশ্য বলে দেন: দুর্বলতা আর বার্ধক্যের খবর দেওয়া, সঙ্গে তার বাইরের ও ভেতরের লক্ষণগুলোরও।"
          }
        ]
      },
      {
        "h": {
          "en": "One Accusative, Two Readings",
          "bn": "এক যবর, দুই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "The accusative shayban, in white, divided the grammarians, and both at-Tabari and al-Qurtubi keep the difference open. At-Tabari reports that some grammarians of Basra took it as a verbal noun drawn from the sense of the sentence: in saying ishta'ala he meant shaba, he went grey, so shayban stands as its verbal noun; they denied it was like tafaqqa'tu shahman, I burst with fat. Another took it as a specification, since it is possible to say both my head's grey has blazed and my head has blazed in grey, exactly as in that phrase.",
            "bn": "শাইবান শব্দের যবর নিয়ে নাহবিদদের মধ্যে মতভেদ আছে। তাবারী ও কুরতুবী দুজনেই মতভেদটা খোলা রেখেছেন। তাবারী জানান, বসরার কিছু নাহবিদ একে মাসদার ধরেছেন, যা এসেছে বাক্যের অর্থ থেকে। ইশতাআলা বলে আসলে বোঝানো হয়েছে শাবা, অর্থাৎ চুল পেকেছে, তাই শাইবান তার মাসদার। তাঁরা মানতেন না যে এটা তাফাক্কা'তু শাহমান, অর্থাৎ চর্বিতে ফেটে পড়ছি, ধরনের বাক্য। আরেকজন একে তাফসীর বা নির্দিষ্টকারী পদ ধরেছেন। কারণ বলা যায় আমার মাথার পাকা চুল জ্বলে উঠেছে, আবার বলা যায় আমার মাথা জ্বলে উঠেছে পাকা চুলে, ঠিক ওই বাক্যের মতো।"
          },
          {
            "en": "Al-Qurtubi names the two sides. The verbal-noun reading is al-Akhfash's, on the ground that ishta'ala means shaba; az-Zajjaj held it to be a specification, tamyiz. Al-Qurtubi then cites an-Nahhas, who preferred al-Akhfash's view because shayban is derived from a verb, and so a verbal noun suits it better. At-Tabari leaves the two side by side without choosing. Either way the meaning of the clause is unchanged.",
            "bn": "কুরতুবী দুই পক্ষের নাম বলেন। মাসদারের মতটি আখফাশের, কারণ তাঁর মতে ইশতাআলা মানে শাবা। যাজ্জাজের মতে এটি তাময়ীয, অর্থাৎ নির্দিষ্টকারী পদ। এরপর কুরতুবী নাহহাসের কথা আনেন। নাহহাস আখফাশের মতকে অগ্রাধিকার দিয়েছেন, কারণ শাইবান ক্রিয়া থেকে গঠিত, তাই মাসদার হিসেবেই একে বেশি মানায়। তাবারী দুটি মত পাশাপাশি রেখেছেন, কোনোটি বেছে নেননি। যেটাই ধরা হোক, বাক্যের অর্থে কোনো বদল আসে না।"
          },
          {
            "en": "Two smaller notes complete the picture. Al-Qurtubi records that Abu 'Amr merged the sin of ar-ra'su into the shin of shayban in recitation, and he defines shayb as white hair mixing with black. Al-Baghawi glosses shayban with shamat, the grey of hair in which white and black are mingled. Both definitions fit Ibn Kathir's image of white blazing among the black, and the Muyassar's verb for it, intashara, spread.",
            "bn": "আরও দুটি ছোট কথা ছবিটা পূর্ণ করে। কুরতুবী জানান, তিলাওয়াতে আবু আমর আর-রা'সু শব্দের সীন অক্ষরকে শাইবান শব্দের শীন অক্ষরের সঙ্গে মিলিয়ে পড়েছেন। তিনি শাইবের সংজ্ঞাও দেন: কালো চুলের সঙ্গে সাদা চুলের মিশে যাওয়া। বাগাভী শাইবানের অর্থ বলেন শামাত, অর্থাৎ সাদা-কালো মেশানো পাকা চুল। দুটি সংজ্ঞাই মেলে ইবন কাসীরের ছবির সঙ্গে, যেখানে কালোর মাঝে সাদা জ্বলে উঠছে। মুয়াসসারের ক্রিয়াটিও তাই বলে: ইনতাশারা, ছড়িয়ে পড়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Lifetime of Answered Calls",
          "bn": "সারা জীবনের সাড়া পাওয়া ডাক"
        },
        "p": [
          {
            "en": "Then the clause that turns the verse: wa lam akun bi-du'a'ika rabbi shaqiyya, and I have never been, in calling on You, my Lord, shaqiyy. At-Tabari explains: I was never made wretched, my Lord, by calling on You, because You never disappointed my prayer before, when I called on You in my need; rather You answered and fulfilled it. He cites Ibn Jurayj: You used to let me know the answer in times past. Ibn Kathir: I have known nothing from You but the answer, and You never once turned me back in anything I asked of You.",
            "bn": "এরপর সেই বাক্য, যা আয়াতের মোড় ঘুরিয়ে দেয়: ওয়া লাম আকুন বিদুআইকা রাব্বি শাকিয়্যা, হে আমার রব, তোমাকে ডেকে আমি কখনো শাকী হইনি। তাবারীর ব্যাখ্যা: হে রব, তোমাকে ডেকে আমি কখনো হতভাগা হইনি। কারণ আগে যখনই প্রয়োজনে তোমাকে ডেকেছি, তুমি আমার দোয়া ব্যর্থ করোনি, বরং সাড়া দিয়েছ, প্রয়োজন মিটিয়েছ। তিনি ইবন জুরাইজের কথা আনেন: অতীতে তুমি আমাকে কবুলের স্বাদ চিনিয়ে দিয়েছ। ইবন কাসীর বলেন: তোমার কাছ থেকে আমি কবুল ছাড়া আর কিছু পাইনি, যা চেয়েছি তাতে তুমি কখনো আমাকে ফিরিয়ে দাওনি।"
          },
          {
            "en": "Al-Qurtubi gives the word's core: shaqiya bi-kadha is said of a person who toiled at a thing and did not obtain what he sought. So the clause means: You did not let my prayer come to nothing when I called on You; You accustomed me to being answered. As-Sa'di widens it: You never sent me back disappointed or deprived of an answer; You have always been gracious to me and answered my prayer, and Your kindnesses have followed in succession. The Muyassar: I was never before deprived of the answer to prayer.",
            "bn": "শব্দটির মূল অর্থ কুরতুবী বলে দেন: শাকিয়া বিকাযা বলা হয় তখন, যখন কেউ কোনো কাজে খেটে মরেছে অথচ যা চেয়েছিল তা পায়নি। তাহলে বাক্যটির মানে দাঁড়ায়: তোমাকে ডাকলে তুমি আমার দোয়া বৃথা যেতে দাওনি, আমাকে সাড়া পেয়েই অভ্যস্ত করেছ। সা'দী কথাটা আরও খুলে বলেন: হে রব, তুমি আমাকে কখনো নিরাশ করে বা কবুল থেকে বঞ্চিত করে ফেরাওনি। বরং সব সময় আমার প্রতি সদয় থেকেছ, আমার দোয়ায় সাড়া দিয়েছ, তোমার অনুগ্রহ একের পর এক আসতেই থেকেছে। মুয়াসসার বলে: আগে কখনো আমি দোয়া কবুল থেকে বঞ্চিত হইনি।"
          },
          {
            "en": "Al-Baghawi agrees with this reading, then records a second under qila, it is said: the meaning is, when You called me to faith, I believed, and I was not made wretched by abandoning faith. On that reading du'a'ika is Allah's call to Zakariyya, not Zakariyya's call to Allah. Al-Baghawi gives it without preferring it, and the other commentators read the clause only as a report of prayers already answered.",
            "bn": "বাগাভীও এই ব্যাখ্যার সঙ্গে একমত। তারপর 'কীলা', অর্থাৎ বলা হয়, বলে তিনি দ্বিতীয় একটি ব্যাখ্যা আনেন: তুমি যখন আমাকে ঈমানের দিকে ডেকেছ, আমি ঈমান এনেছি, ঈমান ছেড়ে হতভাগা হইনি। এ ব্যাখ্যায় বিদুআইকা মানে যাকারিয়্যার আল্লাহকে ডাকা নয়, বরং যাকারিয়্যাকে আল্লাহর ডাক। বাগাভী একে অগ্রাধিকার দেননি। অন্য তাফসীরকারেরা বাক্যটিকে কেবল আগের কবুল হওয়া দোয়ার বিবরণ হিসেবেই পড়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Weakness and Favour as Means",
          "bn": "দুর্বলতা ও অনুগ্রহ, দুটোই ওসিলা"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as two kinds of tawassul, of drawing near to Allah through a means. White hair, he says, is the evidence of weakness and age, the messenger of death, its forerunner and its warner. So Zakariyya (AS) sought nearness to Allah through his weakness and incapacity, and this, as-Sa'di says, is among the means most beloved to Allah, because it shows a person disowning any power and strength of his own and attaching his heart to Allah's power and strength.",
            "bn": "সা'দী আয়াতটিতে দুই ধরনের তাওয়াসসুল দেখেন, অর্থাৎ কোনো মাধ্যম ধরে আল্লাহর নৈকট্য চাওয়া। তিনি বলেন, পাকা চুল দুর্বলতা ও বার্ধক্যের প্রমাণ। এ হলো মৃত্যুর দূত, তার অগ্রদূত, তার সতর্ককারী। তাই যাকারিয়্যা (আঃ) নিজের দুর্বলতা আর অক্ষমতাকে ওসিলা বানিয়ে আল্লাহর কাছে গেলেন। সা'দীর মতে আল্লাহর কাছে এটা সবচেয়ে প্রিয় ওসিলাগুলোর একটি। কারণ এতে বান্দা নিজের সব ক্ষমতা ও শক্তির দাবি ছেড়ে দেয়, আর তার মন জুড়ে যায় আল্লাহর ক্ষমতা ও শক্তির সঙ্গে।"
          },
          {
            "en": "The second means is the record of past answers. As-Sa'di calls it tawassul through Allah's favour upon him and His answering of his earlier prayers: he asked the One who had been good to him before to complete that goodness afterwards. Al-Qurtubi states a general rule in the name of the scholars: it is recommended that a person mention in his supplication Allah's blessings upon him and whatever befits humility. Wahana al-'azmu minni is a display of humility; the final clause is a display of Allah's habitual favour in answering his prayers.",
            "bn": "দ্বিতীয় ওসিলা হলো আগের কবুল হওয়া দোয়ার হিসাব। সা'দী একে বলেন আল্লাহর অনুগ্রহ আর আগের দোয়াগুলো কবুলের মাধ্যমে তাওয়াসসুল। যিনি আগে দয়া করেছেন, তাঁর কাছেই তিনি চাইলেন দয়াটা পরেও পূর্ণ করে দিতে। কুরতুবী আলেমদের নামে একটা সাধারণ নিয়ম বলেন: দোয়ায় নিজের ওপর আল্লাহর নেয়ামতের কথা আর বিনয়ের উপযোগী কথা বলা মুস্তাহাব। ওয়াহানাল আযমু মিন্নী হলো বিনয়ের প্রকাশ। আর শেষ বাক্যটি প্রকাশ করে দোয়া কবুলে আল্লাহর চিরাচরিত অনুগ্রহ।"
          },
          {
            "en": "Al-Qurtubi closes with an anecdote that makes the second means vivid. A man in need came to someone and said: I am the one you were good to at such and such a time. The other replied: welcome to one who seeks a means to us through us, and met his need. Ma'arif al-Qur'an, citing al-Qurtubi, draws the lesson for its reader: for a supplication to be accepted it is better to mention one's weakness, destitution and inadequacy, and scholars have stressed recounting Allah's blessings and one's own need before asking.",
            "bn": "দ্বিতীয় ওসিলাটা স্পষ্ট করতে কুরতুবী একটা ঘটনা দিয়ে শেষ করেন। এক অভাবী লোক একজনের কাছে এসে বলল: আমি সেই লোক, যার প্রতি আপনি অমুক সময়ে দয়া করেছিলেন। তিনি বললেন: স্বাগতম তাকে, যে আমাদের কাছে আমাদেরকেই ওসিলা বানিয়ে এসেছে। তারপর তার প্রয়োজন মিটিয়ে দিলেন। মাআরিফুল কুরআন কুরতুবীর বরাতে পাঠকের জন্য শিক্ষাটা বের করে: দোয়া কবুলের জন্য নিজের দুর্বলতা, অভাব আর অক্ষমতার কথা বলা উত্তম। আলেমরা জোর দিয়েছেন, চাওয়ার আগে আল্লাহর নেয়ামত আর নিজের প্রয়োজনের কথা বলে নিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Request Still to Come",
          "bn": "চাওয়াটা আসে পরে"
        },
        "p": [
          {
            "en": "19:4 asks for nothing yet. The request comes in 19:5 and 19:6. Ibn Kathir, in the abridged English, reports from Mujahid, Qatada and as-Suddi that the mawali he feared were his succeeding relatives, and that he feared they would be a wicked generation; so he asked for a son who would be a prophet after him and guide them. Ibn Kathir argues that the inheritance meant is prophethood, not wealth, and cites Mujahid that it was knowledge. The glad tidings of Yahya in 19:7 and Zakariyya's question in 19:8 have their own articles.",
            "bn": "১৯:৪ আয়াতে এখনো কিছু চাওয়া হয়নি। চাওয়াটা আসে ১৯:৫ ও ১৯:৬ আয়াতে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি ভাষ্য মুজাহিদ, কাতাদা ও সুদ্দী থেকে জানায়, তিনি যে মাওয়ালীর ভয় করছিলেন তারা তাঁর পরবর্তী আত্মীয়স্বজন। তাঁর ভয় ছিল, পরের প্রজন্মটা অসৎ হবে। তাই তিনি এমন পুত্র চাইলেন, যে তাঁর পরে নবী হয়ে তাদের পথ দেখাবে। ইবন কাসীরের যুক্তি, এখানে উত্তরাধিকার মানে নবুওয়াত, সম্পদ নয়। মুজাহিদের মতে তা ছিল ইলম। ১৯:৭ আয়াতে ইয়াহইয়ার সুসংবাদ আর ১৯:৮ আয়াতে যাকারিয়্যা (আঃ)-এর প্রশ্ন নিয়ে আলাদা লেখা আছে।"
          },
          {
            "en": "None of the commentaries on 19:4 attaches a hadith to this verse, so none is offered here. What the verse leaves is a shape for asking. Name your weakness plainly, as he named the bone and the white hair, since confessing weakness is, in as-Sa'di's words, among the means Allah loves most. Then name what Allah has already done for you. The whole preface rests on two things a servant can say truthfully: I have no strength of my own, and You have never once failed me.",
            "bn": "১৯:৪ আয়াতের কোনো তাফসীরেই এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করা হয়নি, তাই এখানেও কোনো হাদীস আনা হলো না। আয়াতটি রেখে যায় চাওয়ার একটা ধরন। নিজের দুর্বলতার কথা খোলাখুলি বলুন, যেমন তিনি হাড় আর পাকা চুলের কথা বলেছেন। সা'দীর ভাষায়, দুর্বলতা স্বীকার করা আল্লাহর সবচেয়ে প্রিয় ওসিলাগুলোর একটি। তারপর বলুন, আল্লাহ এ পর্যন্ত আপনার জন্য কী কী করেছেন। পুরো ভূমিকাটা দাঁড়িয়ে আছে দুটি সত্য কথার ওপর, যা বান্দা মন খুলে বলতে পারে: আমার নিজের কোনো শক্তি নেই, আর তুমি আমাকে কখনো ফেরাওনি।"
          }
        ]
      }
    ]
  },
  "19:8": {
    "sections": [
      {
        "h": {
          "en": "The Question After the Gift",
          "bn": "উপহারের পরের প্রশ্ন"
        },
        "p": [
          {
            "en": "Verse seven has just been spoken over Zakariyya (AS): glad tidings of a boy named Yahya, a name given to no one before him. And in verse eight his answer comes back as a question. My Lord, how will I have a boy, when my wife has been barren and I have reached extreme old age? Ibn Kathir reads the moment as one of overwhelming joy; the old man, whose plea had just been answered, rejoiced greatly and asked in what manner the child would come to him.",
            "bn": "৭ নম্বর আয়াতে যাকারিয়্যা (আঃ)-কে সবেমাত্র শোনানো হয়েছে সুসংবাদ: এক পুত্র, নাম ইয়াহইয়া, যে নাম আগে কাউকে দেওয়া হয়নি। আর ৮ নম্বর আয়াতে তাঁর জবাব ফিরে আসে একটা প্রশ্ন হয়ে। হে আমার রব, আমার ছেলে হবে কী করে, যখন আমার স্ত্রী বন্ধ্যা আর আমি বার্ধক্যের শেষ প্রান্তে পৌঁছে গেছি? ইবন কাসীর এই মুহূর্তটাকে দেখেন প্রবল আনন্দের মুহূর্ত হিসেবে। যে বৃদ্ধের দোয়া এইমাত্র কবুল হলো, তিনি ভীষণ খুশি হলেন আর জিজ্ঞেস করলেন সন্তান তাঁর কাছে কোন ধরনে আসবে।"
          },
          {
            "en": "As-Sa'di traces the feeling underneath. When Zakariyya (AS) first made his plea, the longing for a child was so strong in his heart that he did not pause over the obstacle standing in the way. Now that the answer has arrived, the obstacle returns to view all at once, and he is astonished. The question is not a retreat from what he asked for. It is the wonder of a man who prayed for the impossible and has just been told it is granted.",
            "bn": "এর তলার অনুভূতিটা সা'দী ধরিয়ে দেন। যাকারিয়্যা (আঃ) যখন প্রথম দোয়া করেছিলেন, সন্তানের আকুতি তাঁর অন্তরে এত প্রবল ছিল যে পথের বাধাটার কথা তিনি থমকে ভাবেননি। এখন যেই জবাব এসে গেল, বাধাটা একসঙ্গে আবার চোখের সামনে ভেসে উঠল, আর তিনি বিস্মিত হলেন। এ প্রশ্ন তিনি যা চেয়েছিলেন তা থেকে পিছিয়ে আসা নয়। বরং এ সেই মানুষের বিস্ময়, যে অসম্ভবের জন্য দোয়া করেছিল আর এইমাত্র শুনল তা মঞ্জুর হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Denial but Wonder",
          "bn": "অস্বীকার নয়, বিস্ময়"
        },
        "p": [
          {
            "en": "Al-Qurtubi settles the sense of the question in a single line. It is not, he says, spoken in the sense of denial of what Allah has told him, but by way of wonder at the power of Allah to bring a child out of a barren woman and an aged old man. The wonder is aimed at the greatness of what is promised, not against the One who promised it. Ibn Kathir reads the same astonishment into the words.",
            "bn": "প্রশ্নটার মানে কুরতুবী এক লাইনে থিতু করে দেন। তিনি বলেন, আল্লাহ যা জানিয়েছেন তা অস্বীকার করার অর্থে এ কথা নয়, বরং আল্লাহর ক্ষমতা নিয়ে বিস্ময়ের অর্থে। বন্ধ্যা এক নারী আর বৃদ্ধ এক মানুষের কোল থেকে যে তিনি সন্তান বের করে আনবেন, তা নিয়েই এই বিস্ময়। বিস্ময়টা প্রতিশ্রুত জিনিসের বিশালতার দিকে, যিনি প্রতিশ্রুতি দিয়েছেন তাঁর বিরুদ্ধে নয়। ইবন কাসীরও এ কথাগুলোয় সেই একই বিস্ময় পড়েন।"
          },
          {
            "en": "At-Tabari reaches the same place by a different road. He takes the question as Zakariyya (AS) seeking from his Lord firm knowledge of the way by which the promised child would come, and states plainly that it is not a denial from him of the reality of what Allah promised. His proof is the man's own earlier words: this is the one who had begun by asking, give me from Yourself an heir, after saying my bones have weakened. A man does not deny the very gift he just begged for.",
            "bn": "তাবারী একই জায়গায় পৌঁছান অন্য পথ ধরে। তাঁর মতে, যাকারিয়্যা (আঃ) রবের কাছে পাকা করে জেনে নিতে চাইছেন, প্রতিশ্রুত সন্তান কোন পথে আসবে। আর তিনি স্পষ্ট বলেন, যাকারিয়্যা এতে আল্লাহর ওয়াদার সত্যতা অস্বীকার করছেন না। তাঁর প্রমাণ মানুষটির নিজেরই আগের কথা। ইনিই তো শুরুতে বলেছিলেন, আমার হাড় দুর্বল হয়ে গেছে, তারপর চেয়েছিলেন, আপনার পক্ষ থেকে আমাকে একজন উত্তরাধিকারী দিন। যে দান কেউ এইমাত্র কাকুতি-মিনতি করে চেয়েছে, সেটাকেই সে অস্বীকার করে না।"
          },
          {
            "en": "At-Tabari also records a narration going back to as-Suddi in which, after the call reached him, a whisper came suggesting the voice was not from Allah. At-Tabari does not adopt this as the meaning of the verse; his own verdict, as above, is that the question asks about the manner and denies nothing. The reading to carry, shared by al-Qurtubi and Ibn Kathir, is wonder at how Allah's power will work, not any wavering in a prophet's certainty about his Lord.",
            "bn": "তাবারী সুদ্দী পর্যন্ত পৌঁছানো একটি বর্ণনাও তুলে ধরেন, যেখানে ডাক আসার পর একটা কুমন্ত্রণা এসে বলে, স্বরটা আল্লাহর কাছ থেকে নয়। তাবারী একে আয়াতের অর্থ হিসেবে গ্রহণ করেন না। উপরে বলা তাঁর নিজের রায় হলো, প্রশ্নটা ধরন নিয়ে, কিছুই অস্বীকার করছে না। যে পাঠটা সঙ্গে নিতে হবে, কুরতুবী ও ইবন কাসীর যাতে একমত, তা হলো বিস্ময়—আল্লাহর ক্ষমতা কীভাবে কাজ করবে তা নিয়ে, কোনো নবীর রব সম্পর্কে নিশ্চয়তায় টাল খাওয়া নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "By What Door",
          "bn": "কোন পথ ধরে"
        },
        "p": [
          {
            "en": "The word anna carries the question's real weight. At-Tabari glosses it as from what direction will this be for me, and al-Baghawi reads it simply as from where. The word does not ask whether the thing can be; it asks by which route it will arrive. Zakariyya (AS) is looking for the door. He has been promised a son, and he wants to know through which opening a son can still enter a house where both the natural ways are closed.",
            "bn": "প্রশ্নের আসল ভার বহন করে 'আন্না' শব্দটা। তাবারী এর অর্থ করেন, কোন দিক থেকে এটা আমার হবে, আর বাগাভী সোজা পড়েন, কোথা থেকে। শব্দটা জিজ্ঞেস করে না জিনিসটা হতে পারে কি না; জিজ্ঞেস করে কোন পথ ধরে তা আসবে। যাকারিয়্যা (আঃ) দরজাটা খুঁজছেন। তাঁকে এক পুত্রের ওয়াদা দেওয়া হয়েছে, আর তিনি জানতে চান কোন ফাঁক গলে সেই পুত্র এমন এক ঘরে ঢুকবে, যেখানে স্বাভাবিক দুটো পথই বন্ধ।"
          },
          {
            "en": "At-Tabari even lays out the possibilities the old man may be weighing. Will his Lord strengthen him past the weakness that has overtaken him and make his barren wife bear? Or will the child come by some other way, such as a marriage to a wife who is not the barren one? Zakariyya (AS) does not choose between them. He hands the manner back to his Lord, who is able to do this and whatever else He wills, and simply asks to be shown which it will be.",
            "bn": "তাবারী বৃদ্ধ মানুষটির মনে যেসব সম্ভাবনা ঘুরছে তা-ও খুলে দেন। তাঁর রব কি তাঁকে যে দুর্বলতা পেয়ে বসেছে তা থেকে শক্তি ফিরিয়ে দেবেন আর তাঁর বন্ধ্যা স্ত্রীকে সন্তানধারিণী করবেন? নাকি সন্তান আসবে অন্য কোনো পথে, যেমন বন্ধ্যা নয় এমন কোনো স্ত্রীর সঙ্গে বিয়ের মাধ্যমে? যাকারিয়্যা (আঃ) দুটোর মধ্যে একটাও বেছে নেন না। ধরনটা তিনি রবের হাতে ফিরিয়ে দেন, যিনি এটা এবং তিনি যা চান সবই করতে সক্ষম, আর শুধু জানতে চান কোনটা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Wife Who Never Bore",
          "bn": "চিরবন্ধ্যা স্ত্রী"
        },
        "p": [
          {
            "en": "The first barrier is his wife. Wa kanat imra'ati aqiran: and my wife has been barren. At-Tabari glosses aqir as one who does not conceive, and Ibn Kathir sharpens it: she had not given birth from the beginning of her life. This is not a woman who bore and then stopped. It is a lifetime with no child at all, and now that lifetime has run into old age. The one womb that might have carried an heir never carried anything.",
            "bn": "প্রথম বাধা তাঁর স্ত্রী। ওয়া কানাত ইমরাতী আকির: আর আমার স্ত্রী বন্ধ্যা। তাবারী আকির-এর অর্থ করেন, যে গর্ভধারণ করে না, আর ইবন কাসীর তা আরও ধারালো করেন: সে জীবনের শুরু থেকেই কোনো সন্তান জন্ম দেয়নি। এ এমন নারী নয় যে সন্তান জন্ম দিয়ে পরে থেমে গেছে। এ পুরো একটা জীবন একটিও সন্তান ছাড়া, আর এখন সেই জীবন বার্ধক্যে গিয়ে ঠেকেছে। যে একটিমাত্র গর্ভ উত্তরাধিকারী বহন করতে পারত, তা কখনো কিছুই বহন করেনি।"
          },
          {
            "en": "As-Sa'di draws the two barriers together. The impediment to a child, he says, was present in both of them, in Zakariyya (AS) and in his wife alike. It is worth pausing on how completely the way was shut. Barrenness on her side, extreme age on his, and no ordinary means left between them by which a child arrives. The verse builds the wall high on purpose, so that what follows can be seen for what it is: a thing no natural cause can explain.",
            "bn": "সা'দী দুই বাধাকে এক জায়গায় আনেন। তিনি বলেন, সন্তান না হওয়ার কারণ দুজনের মধ্যেই ছিল, যাকারিয়্যা (আঃ) আর তাঁর স্ত্রী উভয়ের মধ্যে। পথটা কতটা পুরোপুরি বন্ধ ছিল, একটু ভেবে দেখুন। একদিকে বন্ধ্যাত্ব, অন্যদিকে চরম বার্ধক্য, আর তাঁদের মাঝে সন্তান আসার কোনো স্বাভাবিক উপায় বাকি নেই। আয়াত ইচ্ছে করেই দেয়ালটা উঁচু করে তোলে, যাতে এরপর যা ঘটে তাকে তার আসল রূপে চেনা যায়: এমন কিছু, কোনো স্বাভাবিক কারণ দিয়ে যার ব্যাখ্যা চলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Dried Branch",
          "bn": "শুকনো ডাল"
        },
        "p": [
          {
            "en": "Then the second barrier, in a word chosen with striking force: wa qad balaghtu min al-kibar itiyya. At-Tabari explains itiyy through an image from the desert. The Arabs said of a stick that had dried out that it ata ya'tu, it withered and hardened past all suppleness. A man who has reached itiyy, at-Tabari says, has become of thinned and dried-out bone. Al-Baghawi and al-Qurtubi carry the same picture: the aged man is like the branch gone to dryness and brittleness.",
            "bn": "এরপর দ্বিতীয় বাধা, আর সেটা আসে ভীষণ জোরালো একটি শব্দে: ওয়া কাদ বালাগতু মিনাল কিবারি ইতিয়্যা। তাবারী ইতিয়্য বোঝান মরুভূমির এক ছবি দিয়ে। শুকিয়ে যাওয়া ডাল সম্পর্কে আরবরা বলত, তা 'আতা ইয়া'তু', অর্থাৎ নমনীয়তা হারিয়ে শুকিয়ে শক্ত হয়ে গেছে। তাবারী বলেন, যে মানুষ ইতিয়্যে পৌঁছেছে, তার হাড় সরু হয়ে শুকিয়ে গেছে। বাগাভী ও কুরতুবীর কাছেও একই ছবি: বৃদ্ধ মানুষটা যেন শুকিয়ে ভঙ্গুর হয়ে যাওয়া ডাল।"
          },
          {
            "en": "The commentators bring the image down to the body. Mujahid glosses itiyy as the thinning of the bone, and Qatada reads it the same way. The Muyassar renders the whole clause as I have reached the utmost of old age and the thinning of the bone. Ibn Kathir puts it most bluntly: his bone had withered and grown thin, and there remained in him no fertility. The word does not describe a tired man. It describes a body whose capacity for fathering has physically dried up.",
            "bn": "তাফসীরকারেরা ছবিটা শরীরে নামিয়ে আনেন। মুজাহিদ ইতিয়্য-এর অর্থ করেন হাড় সরু হয়ে যাওয়া, আর কাতাদা পড়েন একইভাবে। মুয়াসসার গোটা বাক্যটা অনুবাদ করে এভাবে: আমি বার্ধক্যের আর হাড় সরু হয়ে যাওয়ার শেষ প্রান্তে পৌঁছে গেছি। ইবন কাসীর কথাটা সবচেয়ে স্পষ্ট করে বলেন: তার হাড় শুকিয়ে সরু হয়ে গেছে, আর তার মধ্যে সন্তান জন্মদানের ক্ষমতা আর অবশিষ্ট নেই। শব্দটা ক্লান্ত মানুষ বোঝায় না। বোঝায় এমন এক শরীর, যার সন্তান জন্ম দেওয়ার সামর্থ্য শারীরিকভাবেই শুকিয়ে গেছে।"
          },
          {
            "en": "Al-Qurtubi gathers the senses into three: the utmost in old age, in dryness, and in withering. He cites al-Asma'i that the root is used of a thing that has dried and gone hard. Ma'arif al-Qur'an, in English, traces the word to a root meaning unresponsive or insensitive, and settles here on the dryness of the bones. Across every source the direction is the same: this is age at the very end of its road, the sap gone out of the wood.",
            "bn": "কুরতুবী অর্থগুলো তিন ভাগে জড়ো করেন: বার্ধক্যের শেষ সীমা, শুষ্কতার শেষ সীমা, আর শুকিয়ে যাওয়ার শেষ সীমা। তিনি আসমাঈর সূত্রে বলেন, ধাতুটা এমন জিনিসের বেলায় ব্যবহার হয়, যা শুকিয়ে শক্ত হয়ে গেছে। মাআরিফুল কুরআনের ইংরেজি সংস্করণ শব্দটির মূল খুঁজে পায় এমন এক ধাতুতে, যার অর্থ সাড়াহীন বা অসাড়; আর এখানে অর্থ ধরে হাড়ের শুষ্কতা। প্রতিটি সূত্রেই দিকটা এক: এ বার্ধক্য তার পথের একেবারে শেষে, কাঠ থেকে রস শুকিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Old Age or Withering",
          "bn": "বার্ধক্য নাকি শুকিয়ে যাওয়া"
        },
        "p": [
          {
            "en": "On exactly how much the word says, the early authorities differ, and the difference is worth keeping. Ibn Abbas and ad-Dahhak, as at-Tabari reports them, read itiyy as simply old age. Mujahid reads it more narrowly as the thinning of the bone, a bodily state within old age rather than the years themselves. Ibn Kathir weighs the two and inclines to the narrower reading: what is apparent, he says, is that the word is more specific than old age. Both readings sit in the sources side by side.",
            "bn": "শব্দটা ঠিক কতটুকু বলে, তা নিয়ে আদি বিশেষজ্ঞরা ভিন্নমত পোষণ করেন, আর সেই ভিন্নতা ধরে রাখা দরকার। ইবন আব্বাস ও দাহহাক, তাবারী যেমন তাঁদের বর্ণনা করেন, ইতিয়্য-কে পড়েন শুধু বার্ধক্য অর্থে। মুজাহিদ পড়েন আরও সংকীর্ণভাবে, হাড় সরু হয়ে যাওয়া অর্থে, যা বছরের সংখ্যা নয় বরং বার্ধক্যের ভেতরের এক শারীরিক অবস্থা। ইবন কাসীর দুটি ওজন করে সংকীর্ণ পাঠের দিকে ঝোঁকেন: যা স্পষ্ট মনে হয়, তিনি বলেন, তা হলো শব্দটা বার্ধক্যের চেয়ে বেশি নির্দিষ্ট। দুটি পাঠই সূত্রে পাশাপাশি বসে আছে।"
          },
          {
            "en": "Qatada adds a figure: this was a man of some seventy-odd years. There is also a note about the reading itself. At-Tabari and Ibn Kathir both carry a report from Ibn Abbas that he knew the whole sunna yet was unsure how the Messenger recited this one word, whether itiyya or asiyya, two forms al-Qurtubi records as two dialects of the same sense. It is an honest transmitter's admission, and it leaves the meaning untouched: withered, dried, at the end of age, however the letter is voiced.",
            "bn": "কাতাদা একটা সংখ্যা জুড়ে দেন: ইনি ছিলেন সত্তরের কোঠার এক মানুষ। পাঠ নিয়েও একটা কথা আছে। তাবারী ও ইবন কাসীর দুজনেই ইবন আব্বাসের একটি বর্ণনা তুলে ধরেন, যেখানে তিনি বলেন গোটা সুন্নাহ তিনি জানেন, তবু এই একটি শব্দ রাসূল ﷺ কীভাবে পড়তেন তা তিনি নিশ্চিত নন—ইতিয়্যা নাকি আসিয়্যা। কুরতুবী এ দুটোকে একই অর্থের দুই উপভাষা বলে লেখেন। এ এক সৎ বর্ণনাকারীর স্বীকারোক্তি, আর এতে অর্থ অটুট থাকে: শুকনো, শুষ্ক, বার্ধক্যের শেষে, হরফটা যেভাবেই উচ্চারিত হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Means Are Gone",
          "bn": "উপায় যখন ফুরিয়ে যায়"
        },
        "p": [
          {
            "en": "Set the two barriers together and the shape of the test appears. A womb that has never held a child, and a body dried past fathering, are not two ordinary difficulties. They are the closing of every natural road by which a child comes into the world. This is the setting the verse has been building, clause by clause, from the barren wife to the withered bone. The question rises exactly here, where the means have run out and only the Giver of means remains.",
            "bn": "দুই বাধা পাশাপাশি রাখলে পরীক্ষার আকৃতিটা ফুটে ওঠে। যে গর্ভ কখনো সন্তান ধারণ করেনি আর যে শরীর সন্তান জন্ম দেওয়ার বয়স পেরিয়ে শুকিয়ে গেছে, এ দুটো সাধারণ অসুবিধা নয়। এ হলো সন্তান পৃথিবীতে আসার প্রতিটি স্বাভাবিক পথের বন্ধ হয়ে যাওয়া। আয়াত ঠিক এই পরিবেশটাই গড়ে তুলছিল, বাক্যাংশে বাক্যাংশে, বন্ধ্যা স্ত্রী থেকে শুকনো হাড় পর্যন্ত। প্রশ্নটা ঠিক এখানেই ওঠে, যেখানে উপায় ফুরিয়ে গেছে আর শুধু উপায়ের দাতাই বাকি।"
          },
          {
            "en": "This is why the commentators are careful to name the wonder correctly. Al-Qurtubi ties it directly to the power of Allah: the astonishment is at how that power will bring a child from a barren woman and an aged man. The wonder faces the means, not the Giver. A servant can stand before something his own strength cannot reach and marvel at it, while never once supposing that his Lord's reach ends where his own does. That is the posture the verse puts on record.",
            "bn": "এ কারণেই তাফসীরকারেরা বিস্ময়টাকে ঠিকভাবে চিহ্নিত করতে যত্নশীল। কুরতুবী একে সরাসরি আল্লাহর ক্ষমতার সঙ্গে বাঁধেন: বিস্ময়টা এই নিয়ে যে সেই ক্ষমতা কীভাবে বন্ধ্যা নারী আর বৃদ্ধ মানুষের কোল থেকে সন্তান আনবে। বিস্ময়টা উপায়ের মুখোমুখি, দাতার বিরুদ্ধে নয়। বান্দা এমন কিছুর সামনে দাঁড়িয়ে বিস্মিত হতে পারে যা তার নিজের শক্তির নাগালের বাইরে, অথচ একটিবারও ভাবে না যে তার রবের নাগাল সেখানেই শেষ যেখানে তার নিজেরটা শেষ। আয়াত এই ভঙ্গিটাই নথিভুক্ত করে।"
          },
          {
            "en": "One honest note belongs here. No sound hadith of the Prophet (peace be upon him) comes attached to this particular verse in the tafsirs consulted; what the commentators transmit are the words of the Companions and Followers about the language and the sense, not a marfu report on the meaning of the ayah. Where there is no sound narration to add, the right course is to say so and let the verse and its language carry the weight.",
            "bn": "এখানে একটা সৎ কথা বলা দরকার। যেসব তাফসীর দেখা হয়েছে, তাতে এই নির্দিষ্ট আয়াতের সঙ্গে নবী ﷺ-এর কোনো সহীহ হাদিস জুড়ে আসেনি। তাফসীরকারেরা যা বর্ণনা করেন তা সাহাবা ও তাবিঈদের কথা, ভাষা আর অর্থ নিয়ে, আয়াতের মানে নিয়ে কোনো মারফূ বর্ণনা নয়। যেখানে জোড়ার মতো কোনো সহীহ বর্ণনা নেই, সেখানে সঠিক পথ হলো তা বলে দেওয়া আর আয়াত ও তার ভাষাকেই ভার বহন করতে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing at the Impossible",
          "bn": "অসম্ভবের কিনারায়"
        },
        "p": [
          {
            "en": "For the believer who reads this, the verse models a way to stand. Zakariyya (AS) had asked for a child when his own words admitted his bones were weak, and when the answer came against every odd, he did not turn suspicious of it. He marvelled, and he asked, in effect, show me how. There is a lesson in praying like a man who means it, and then, when granted the thing you had no natural claim to, receiving it as a wonder rather than a problem to solve.",
            "bn": "যে মুমিন এ আয়াত পড়ে, আয়াত তাকে দেখিয়ে দেয় এমন মুহূর্তে কীভাবে দাঁড়াতে হয়। যাকারিয়্যা (আঃ) সন্তান চেয়েছিলেন এমন সময়, যখন তিনি নিজের মুখেই স্বীকার করছিলেন যে তাঁর হাড় দুর্বল। আর সব হিসাব উল্টে দিয়ে যখন জবাব এল, তিনি তাতে সন্দেহ করেননি। তিনি বিস্মিত হলেন, আর যেন বললেন, আমাকে দেখান, কীভাবে হবে। এখানে শিক্ষা আছে: দোয়া করুন এমন মানুষের মতো, যে সত্যিই চায়। তারপর যে জিনিস পাওয়ার স্বাভাবিক কোনো দাবি আপনার ছিল না, তা পেলে সেটাকে সমস্যা হিসেবে নয়, বিস্ময় হিসেবে গ্রহণ করুন।"
          },
          {
            "en": "There is a warning folded in as well. Because the words can be misread as doubt, they hold up a mirror to our own asking. When we pray for something and the means for it are visibly gone, do we quietly stop, deciding the door is shut for good? And when an answer arrives that we cannot account for, is our first response gratitude and amazement, or a suspicious search for the ordinary cause behind it? The verse trains the heart to keep asking and to keep marvelling.",
            "bn": "এর ভেতরে একটা সতর্কবার্তাও লুকিয়ে আছে। কথাগুলো যেহেতু সন্দেহ বলে ভুল পড়া যায়, তাই তা আমাদের নিজেদের চাওয়ার সামনে একটা আয়না ধরে। আমরা যখন কিছুর জন্য দোয়া করি আর তার উপায় চোখের সামনে ফুরিয়ে যায়, আমরা কি চুপচাপ থেমে যাই, ভেবে নিই দরজা চিরতরে বন্ধ? আর এমন জবাব এলে, যার হিসাব আমরা মেলাতে পারি না, আমাদের প্রথম সাড়া কি কৃতজ্ঞতা আর বিস্ময়, নাকি সন্দেহ নিয়ে এর পেছনের সাধারণ কারণ খোঁজা? আয়াত অন্তরকে শেখায় চাইতে থাকতে আর বিস্মিত হতে থাকতে।"
          },
          {
            "en": "So Zakariyya (AS) hands the how back to his Lord who promised, and waits. That is where the verse leaves him, and it is a settled place to be. The believer is not asked to see the mechanism before he trusts the outcome; he is asked to hold the promise firmly while the manner remains his Lord's business. A servant who can carry a promise he cannot yet explain has learned the very lesson this old man is teaching from the edge of the impossible.",
            "bn": "তাই যাকারিয়্যা (আঃ) 'কীভাবে'-র ভার ফিরিয়ে দেন ওয়াদাকারী রবের হাতে, আর অপেক্ষা করেন। আয়াত তাঁকে এখানেই রেখে যায়, আর জায়গাটা স্থির, নিশ্চিন্ত। মুমিনকে বলা হয়নি, ফলাফলে ভরসা করার আগে ভেতরের কলকবজা দেখে নিতে। বলা হয়েছে প্রতিশ্রুতিটা শক্ত করে ধরে রাখতে, আর কীভাবে হবে তা রবের হাতে ছেড়ে দিতে। যে বান্দা এমন প্রতিশ্রুতি বুকে ধরে রাখতে পারে, যার ব্যাখ্যা সে এখনো জানে না, সে সেই শিক্ষাটাই শিখে নিয়েছে, যা এই বৃদ্ধ মানুষটি অসম্ভবের কিনারে দাঁড়িয়ে শেখাচ্ছেন।"
          }
        ]
      }
    ]
  },
  "19:16": {
    "sections": [
      {
        "h": {
          "en": "The Page Turns to Maryam",
          "bn": "পাতা ফেরে মারইয়ামের দিকে"
        },
        "p": [
          {
            "en": "The story opens with a command. At-Tabari reads it as Allah telling His Prophet Muhammad ﷺ: mention in the Book that We sent down to you in truth, Maryam the daughter of Imran, when she withdrew from her family. Al-Qurtubi gives the same address to the Prophet ﷺ and adds its purpose — make her story known to them, so they may recognise the perfection of Our power. The passage is not a stray reminiscence; it is handed to the Prophet as something to recite and pass on.",
            "bn": "কাহিনিটা শুরু হয় একটি নির্দেশ দিয়ে। তাবারী বলেন, আল্লাহ এখানে তাঁর নবী মুহাম্মদ ﷺ-কে বলছেন: যে কিতাব আমি সত্যসহ তোমার ওপর নাজিল করেছি, তাতে ইমরানের কন্যা মারইয়ামের কথা বর্ণনা কর, যখন সে তার পরিবার থেকে সরে গিয়েছিল। কুরতুবীও সম্বোধনটা নবী ﷺ-এর প্রতিই ধরেন, আর এর উদ্দেশ্যও জানান: তাদের কাছে তার কাহিনি তুলে ধরো, যাতে তারা আমাদের কুদরতের পূর্ণতা বুঝতে পারে। এ কোনো এলোমেলো স্মৃতিচারণ নয়। আল্লাহ কাহিনিটা নবীর হাতে তুলে দিয়েছেন তিলাওয়াত করে অন্যদের কাছে পৌঁছে দেওয়ার জন্য।"
          },
          {
            "en": "Ibn Kathir sets the placement plainly. After the account of Zakariyya, whom Allah blessed with a pure and righteous child in old age while his wife was barren, the surah turns to Maryam, from whom Allah brought forth her son Isa with no father at all. Between the two accounts, Ibn Kathir writes, lies a real kinship and likeness, which is why the same pairing stands in Surah Al Imran, here, and in Surah al-Anbiya — set together to show His servants His power, the might of His authority, and that He is able over whatever He wills.",
            "bn": "কাহিনিটা কেন এখানে, ইবন কাসীর তা সোজা ভাষায় বলেন। আগে এসেছে যাকারিয়ার কথা, যাঁকে আল্লাহ বার্ধক্যে, বন্ধ্যা স্ত্রীর ঘরে, এক পবিত্র নেক সন্তান দিয়েছিলেন। এরপর সূরা ফেরে মারইয়ামের দিকে, যাঁর কোলে আল্লাহ কোনো পিতা ছাড়াই এনেছিলেন পুত্র ঈসা (আঃ)-কে। ইবন কাসীর লেখেন, দুই কাহিনির মাঝে আছে সত্যিকারের মিল ও সাদৃশ্য। এ জন্যই সূরা আলে ইমরানে, এখানে আর সূরা আম্বিয়ায় কাহিনি দুটি পাশাপাশি এসেছে, যাতে বান্দারা দেখে তাঁর কুদরত, তাঁর রাজত্বের প্রতাপ, আর এই সত্য যে তিনি যা চান তা-ই করতে পারেন।"
          },
          {
            "en": "As-Sa'di reads the arrangement as a climb. Having told the wonder of Zakariyya and Yahya, the surah moves to something more wondrous still, rising by degrees from the lesser to the greater. A child given to an aged father and a barren mother is a marvel; a child given with no father at all is a greater marvel. Both rest on the same truth as-Sa'di keeps returning to: nothing at all constrains the Lord when He wills a thing into being.",
            "bn": "সা'দীর চোখে এই বিন্যাস যেন সিঁড়ি বেয়ে ওঠা। যাকারিয়া ও ইয়াহইয়ার বিস্ময় বলার পর সূরা এগোয় আরও বড় বিস্ময়ের দিকে, ধাপে ধাপে ছোট থেকে বড়র দিকে। বৃদ্ধ পিতা আর বন্ধ্যা মায়ের ঘরে সন্তান আসা এক আশ্চর্য; কোনো পিতা ছাড়াই সন্তান আসা তার চেয়ে বড় আশ্চর্য। দুটোই দাঁড়িয়ে সেই একই সত্যের ওপর, যার কাছে সা'দী বারবার ফেরেন: রব যখন কোনো কিছু অস্তিত্বে আনতে চান, তাঁকে আটকানোর মতো কিছুই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Kept in the Book",
          "bn": "কিতাবে রয়ে যাওয়া নাম"
        },
        "p": [
          {
            "en": "As-Sa'di dwells on the honour of the naming itself. Among the greatest of Maryam's merits, he writes, is that she is mentioned in this mighty Book — recited by Muslims across the east and the west of the earth, remembered there with the finest mention and the best praise. He reads it as a reward answering her excellent deed and her complete striving. Her name is not preserved by accident of history; it is set down by the choice of the Lord who was pleased with her.",
            "bn": "সা'দী বিশেষ করে থামেন নাম নেওয়ার এই সম্মানে। তিনি লেখেন, মারইয়ামের সবচেয়ে বড় ফজিলতের একটি হলো, এই মহান কিতাবে তাঁর কথা এসেছে। পৃথিবীর পুবে-পশ্চিমে মুসলিমরা এই কিতাব তিলাওয়াত করে, আর তাতে তাঁর স্মরণ আছে সবচেয়ে সুন্দর ভাষায়, সেরা প্রশংসায়। সা'দী একে দেখেন তাঁর উত্তম আমল আর পূর্ণ চেষ্টার প্রতিদান হিসেবে। তাঁর নাম ইতিহাসের কোনো আকস্মিকতায় টিকে যায়নি। যে রব তাঁর ওপর সন্তুষ্ট ছিলেন, তিনিই বেছে নিয়ে নামটা লিখে রেখেছেন।"
          },
          {
            "en": "Ibn Kathir fills in who she was. She is Maryam the daughter of Imran, of the line of Dawud, from a pure and wholesome house among the Children of Israel. Her mother had pledged her, freed for the service of the Sacred House in Jerusalem, and Allah accepted the gift. Ibn Kathir cites the words of Surah Al Imran: so her Lord accepted her with goodly acceptance and made her grow in a goodly manner (3:37). The withdrawing woman is, from the start, already dedicated.",
            "bn": "ইবন কাসীর জানান, তিনি কে ছিলেন। তিনি ইমরানের কন্যা মারইয়াম, দাউদ (আঃ)-এর বংশধর, বনী ইসরাইলের এক পবিত্র, ভালো পরিবারের মেয়ে। তাঁর মা তাঁকে মানত করেছিলেন, বায়তুল মাকদিসের খেদমতের জন্য মুক্ত করে দিয়েছিলেন, আর আল্লাহ সে দান কবুল করলেন। ইবন কাসীর সূরা আলে ইমরানের কথা তুলে ধরেন: তার রব তাকে উত্তমভাবে কবুল করলেন আর সুন্দরভাবে বাড়িয়ে তুললেন (৩:৩৭)। যে নারী এবার সরে যাচ্ছেন, তিনি গোড়া থেকেই আল্লাহর জন্য নিবেদিত।"
          },
          {
            "en": "The upbringing matters for what follows. Ibn Kathir describes Maryam as a devoted worshipper, known among the Children of Israel for remarkable worship, devotion and perseverance, raised under the care of Zakariyya, a Prophet the people turned to in their religion. At her side Zakariyya met astonishing signs — sustenance found out of its season, winter fruit in summer and summer fruit in winter, as Al Imran records. So the woman who now draws apart is no stranger to seclusion with Allah; it is the pattern of her life.",
            "bn": "সামনে যা ঘটবে, তা বুঝতে এই বেড়ে ওঠার কথা জানা দরকার। ইবন কাসীর মারইয়ামকে বর্ণনা করেন এক নিবেদিতা ইবাদতগুজার হিসেবে, যিনি বনী ইসরাইলের মধ্যে অসাধারণ ইবাদত, তাবাত্তুল আর অধ্যবসায়ের জন্য পরিচিত ছিলেন, আর বড় হয়েছিলেন যাকারিয়ার তত্ত্বাবধানে, সেই নবী, দ্বীনের ব্যাপারে লোকে যাঁর কাছে ফিরত। তাঁর কাছে গিয়ে যাকারিয়া বিস্ময়কর নিদর্শন দেখতেন: অসময়ের রিযিক, শীতে গ্রীষ্মের ফল আর গ্রীষ্মে শীতের ফল, যেমন আলে ইমরান বলে। তাই যে নারী এখন আলাদা হয়ে যাচ্ছেন, আল্লাহর সঙ্গে নিরিবিলি থাকা তাঁর অচেনা নয়; এ তাঁর জীবনেরই ধারা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb of Casting Away",
          "bn": "ছুড়ে ফেলার অর্থে এক ক্রিয়া"
        },
        "p": [
          {
            "en": "The verb carries the sense of casting away. At-Tabari explains intabadhat as a form built from an-nabdh, and an-nabdh means to throw or to cast off; so she set herself apart and drew away from her family. Ma'arif al-Qur'an traces the same root — nabadha, to throw away — and renders intibadh as withdrawing from the crowd. Al-Qurtubi glosses it as moving aside and drawing far off, and points to the Qur'an's own use of the root elsewhere: so they cast it behind their backs.",
            "bn": "ক্রিয়াটির ভেতরে ছুড়ে ফেলার ভাব লুকিয়ে আছে। তাবারী বোঝান, ইনতাবাযাত শব্দটা এসেছে নবয থেকে, আর নবয মানে ছুড়ে ফেলা বা দূরে সরিয়ে দেওয়া; তাই তিনি নিজেকে আলাদা করে পরিবার থেকে দূরে সরে গেলেন। মাআরিফুল কুরআন একই মূলের কথা বলে, নবাযা মানে ছুড়ে ফেলা, আর ইনতিবাযকে বোঝায় ভিড় থেকে সরে আসা হিসেবে। কুরতুবী এর অর্থ করেন সরে যাওয়া আর দূরে চলে যাওয়া, আর দেখান কুরআন নিজেই অন্য জায়গায় এই মূল ব্যবহার করেছে: তারা তা তাদের পিঠের পেছনে ছুড়ে ফেলল।"
          },
          {
            "en": "On min ahliha the commentators agree. Qatadah, cited by at-Tabari, reads it as she separated herself from her family. Al-Qurtubi glosses ahliha as those who were with her, and al-Baghawi has her withdraw and seclude herself from her people. Al-Muyassar keeps the line at its plainest: she distanced herself from her family and took to a place toward the east. Every reading meets at the same fact — a deliberate, bodily drawing apart — and parts only over the reason behind it.",
            "bn": "মিন আহলিহা নিয়ে তাফসীরকারেরা একমত। তাবারী কাতাদার কথা আনেন: তিনি তাঁর পরিবার থেকে আলাদা হয়ে গেলেন। কুরতুবী আহলিহার অর্থ করেন, যারা তাঁর সঙ্গে ছিল; আর বাগভীর বর্ণনায় তিনি নিজের সম্প্রদায় থেকে সরে গিয়ে নিরিবিলি হলেন। মুয়াসসার কথাটা রাখেন সবচেয়ে সাদামাটাভাবে: তিনি পরিবার থেকে দূরে সরে পুব দিকের এক জায়গায় গিয়ে উঠলেন। সব ব্যাখ্যাই এক জায়গায় মেলে: তিনি ইচ্ছা করে, সশরীরে সরে গিয়েছিলেন। মতভেদ শুধু এর কারণ নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why She Drew Apart",
          "bn": "কেন তিনি আলাদা হলেন"
        },
        "p": [
          {
            "en": "Why she drew apart divides the commentators. As-Suddi, reported by at-Tabari and Ibn Kathir, says she went out to the side of the prayer chamber because a menses had come upon her. Al-Qurtubi frames it the same way — that she withdrew to purify herself from menstrual or postnatal bleeding — while al-Baghawi has her already purified and going out to bathe. This strand of the commentary ties the leaving to purification, a private need drawing her away from the household.",
            "bn": "কেন তিনি সরে গেলেন, এ নিয়ে তাফসীরকারদের মত ভিন্ন। তাবারী ও ইবন কাসীরের বর্ণনায় সুদ্দী বলেন, তিনি মিহরাবের এক পাশে গিয়েছিলেন, কারণ তাঁর হায়েয শুরু হয়েছিল। কুরতুবীও একইভাবে বলেন, তিনি হায়েয বা নিফাসের রক্ত থেকে পবিত্র হতে সরে গিয়েছিলেন; আর বাগভীর বর্ণনায় তিনি আগেই পবিত্র হয়ে গিয়েছিলেন, গোসল করতে বেরিয়েছিলেন। ব্যাখ্যার এই ধারা সরে যাওয়াকে জুড়ে দেয় পবিত্রতার সঙ্গে: একান্ত এক প্রয়োজন তাঁকে ঘর থেকে দূরে নিয়ে গিয়েছিল।"
          },
          {
            "en": "Against that stands the reading al-Qurtubi prefers. He reports another view — that she withdrew in order to worship Allah — and calls it the sound view, since Maryam was given over to the guardianship and service of the sanctuary. She drew apart from people for that, he says, entering the eastern side by the prayer niche to be alone in her devotion. Ma'arif al-Qur'an notes that al-Qurtubi gave this explanation the preference, and Nawf al-Bikali, in Ibn Kathir, has her take a dwelling to worship in.",
            "bn": "এর বিপরীতে আছে সেই ব্যাখ্যা, যা কুরতুবী বেশি পছন্দ করেন। তিনি আরেকটি মত আনেন: মারইয়াম সরে গিয়েছিলেন আল্লাহর ইবাদত করতে। কুরতুবী একেই সঠিক মত বলেন, কারণ মারইয়াম ছিলেন ইবাদতখানার দেখাশোনা আর খেদমতে নিবেদিত। কুরতুবী বলেন, এ জন্যই তিনি মানুষ থেকে আলাদা হয়েছিলেন, আর মিহরাবের পুব পাশে ঢুকেছিলেন একান্তে ইবাদত করতে। মাআরিফুল কুরআন জানায়, কুরতুবী এই ব্যাখ্যাকেই অগ্রাধিকার দিয়েছেন; আর ইবন কাসীরের বর্ণনায় নওফ আল-বিকালি বলেন, তিনি ইবাদতের জন্য একটা আবাস বেছে নিয়েছিলেন।"
          },
          {
            "en": "The remaining reports are held side by side, not ranked. Muhammad ibn Ishaq, in Ibn Kathir, has her go out with her water jug to draw water, and al-Baghawi adds that it was a bitterly cold winter day and she sat in a sunlit spot. The commentators keep these as differing accounts, not rival verdicts, and not a single account lowers her. Whatever the reason taken, the verse shows a chaste and worshipping woman seeking her own privacy, and the honour the Qur'an gives her is left untouched.",
            "bn": "বাকি বর্ণনাগুলো তাফসীরকারেরা পাশাপাশি রাখেন, ওপর-নিচ করেন না। ইবন কাসীরের বর্ণনায় মুহাম্মদ ইবন ইসহাক বলেন, তিনি কলস নিয়ে পানি আনতে বেরিয়েছিলেন; আর বাগভী যোগ করেন, সেদিন ছিল কনকনে শীত, তিনি রোদ পড়া এক জায়গায় বসেছিলেন। এগুলো তাঁদের কাছে ভিন্ন ভিন্ন বর্ণনা, একে অন্যের বিরুদ্ধে রায় নয়, আর একটি বর্ণনাও তাঁকে ছোট করে না। কারণ যেটাই ধরা হোক, আয়াত দেখায় এক সতী, ইবাদতগুজার নারীকে, যিনি নিজের নিরিবিলি খুঁজছেন; আর কুরআন তাঁকে যে সম্মান দেয়, তা অটুট থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Place Toward Sunrise",
          "bn": "সূর্য ওঠার দিকের জায়গা"
        },
        "p": [
          {
            "en": "The place is named only as eastward. At-Tabari has her withdraw to a spot toward the rising of the sun rather than its setting, and Qatadah, whom he cites, reads it as the eastern side, and elsewhere as a far and remote place. As-Suddi sets it to the east of the prayer chamber; as-Sa'di reads it simply as toward the east from them; al-Baghawi places it within the house, on the side that faces the sunrise. The word fixes a direction, not an address.",
            "bn": "জায়গাটার পরিচয় শুধু এটুকু: পুব দিকে। তাবারীর বর্ণনায় তিনি সরে গিয়েছিলেন সূর্য ওঠার দিকে, অস্ত যাওয়ার দিকে নয়; আর তাবারী যাঁর কথা আনেন, সেই কাতাদা একে পড়েন পুব পাশ হিসেবে, আবার অন্য জায়গায় দূরের নির্জন জায়গা হিসেবে। সুদ্দী একে রাখেন মিহরাবের পুব দিকে; সা'দী পড়েন সরলভাবে, তাদের থেকে পুব দিকে; বাগভী রাখেন ঘরের ভেতরেই, যে পাশটা সূর্যোদয়ের দিকে ফেরানো। শব্দটা একটা দিক ঠিক করে, ঠিকানা নয়।"
          },
          {
            "en": "Al-Qurtubi pauses on the word itself. Ash-sharq, with the ra at rest, is the place where the sun rises; ash-sharaq, with the ra in motion, is the sun. He notes that the spot was singled out as the eastern spot, and reads the choice of east as carrying more than a bearing on a compass. That reading, which al-Qurtubi credits to at-Tabari, opens onto a question the next lines take up: why the east at all, and not any other quarter.",
            "bn": "কুরতুবী থামেন শব্দটার ওপরই। 'শারক', রা সাকিন দিয়ে, মানে যেখানে সূর্য ওঠে; 'শারাক', রা-তে যবর দিয়ে, মানে খোদ সূর্য। তিনি বলেন, জায়গাটাকে আলাদা করে পুবের জায়গা বলা হয়েছে, আর পুব বেছে নেওয়ার মধ্যে তিনি কম্পাসের নিছক দিকের চেয়ে বেশি কিছু দেখেন। এই ব্যাখ্যার কৃতিত্ব কুরতুবী দেন তাবারীকে। আর এখান থেকেই পরের প্রশ্নটা ওঠে: পুবই কেন, অন্য কোনো দিক নয় কেন?"
          }
        ]
      },
      {
        "h": {
          "en": "Why the East",
          "bn": "পুবের দিক কেন"
        },
        "p": [
          {
            "en": "The commentators explain the eastward choice. At-Tabari passes on that she came to a place toward the sunrise because, among her people, what lay to the east was better than what lay to the west, and the same esteem was held among the Arabs. Al-Qurtubi carries the point and credits it to at-Tabari: the spot was named eastern because they magnified the direction of the east and the quarter from which the lights rise, holding the eastern side of everything to be the more excellent.",
            "bn": "পুব কেন, তাফসীরকারেরা তার ব্যাখ্যা দেন। তাবারী জানান, তিনি সূর্যোদয়ের দিকের এক জায়গায় গিয়েছিলেন, কারণ তাঁর সম্প্রদায়ের কাছে পশ্চিমের চেয়ে পুব দিক ছিল উত্তম; আরবদের মধ্যেও পুবের একই কদর ছিল। কুরতুবীও কথাটা আনেন, আর তাবারীর নামেই আনেন: জায়গাটাকে পুবের বলা হয়েছে, কারণ তারা পুব দিককে, যেদিক থেকে আলো ওঠে সেদিককে, বড় করে দেখত; যেকোনো জিনিসের পুব পাশটাকেই বেশি মর্যাদার মনে করত।"
          },
          {
            "en": "Ibn Abbas draws a striking conclusion from the verse. He said, as at-Tabari, Ibn Kathir, al-Qurtubi and Ma'arif al-Qur'an all report, that he was the most knowing of people as to why the Christians took the east for their direction of prayer: it was because of this verse, for they took the birthplace of Isa as their qibla. Al-Qurtubi adds their own saying — that had any part of the earth been better than the east, Maryam would have laid Isa there.",
            "bn": "আয়াত থেকে ইবন আব্বাস এক চমকপ্রদ সিদ্ধান্ত টানেন। তাবারী, ইবন কাসীর, কুরতুবী আর মাআরিফুল কুরআন সবাই তাঁর কথাটা বর্ণনা করেছেন: খ্রিস্টানরা কেন পুবকে নিজেদের সালাতের দিক বানাল, তা মানুষের মধ্যে তিনিই সবচেয়ে ভালো জানেন। কারণ এই আয়াতই; তারা ঈসা (আঃ)-এর জন্মস্থানকে কিবলা বানিয়েছে। কুরতুবী তাদের নিজেদের একটা কথাও যোগ করেন: জমিনের কোনো অংশ যদি পুবের চেয়ে ভালো হতো, মারইয়াম সেখানেই ঈসা (আঃ)-কে প্রসব করতেন।"
          },
          {
            "en": "A second report from Ibn Abbas points the same way. Carried by at-Tabari and Ibn Kathir, it says the People of the Book had been commanded to pray toward the House and to make its pilgrimage, and nothing turned them away but their reading of this verse, so they prayed toward the sunrise. Al-Baghawi traces the Christians' eastward prayer to al-Hasan. The commentaries agree on the fact and part over the exact chain, and none of it disturbs the verse's plain sense: a chosen woman withdrew eastward.",
            "bn": "ইবন আব্বাসের দ্বিতীয় একটি বর্ণনাও একই দিকে ইঙ্গিত করে। তাবারী আর ইবন কাসীরের বরাতে আসে, আহলে কিতাবকে হুকুম দেওয়া হয়েছিল বায়তুল্লাহর দিকে সালাত পড়তে আর তার হজ করতে; কেবল এই আয়াতের পাঠই তাদের সেখান থেকে ফিরিয়ে দিল, তাই তারা সূর্যোদয়ের দিকে সালাত পড়ল। বাগভী খ্রিস্টানদের পুবমুখী সালাতের কথাটা আনেন হাসানের বরাতে। ঘটনাটায় তাফসীরগুলো একমত, আলাদা শুধু সনদের খুঁটিনাটিতে। আর এর কিছুই আয়াতের সরল অর্থকে টলায় না: আল্লাহর মনোনীতা এক নারী পুব দিকে সরে গিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Reports Rest On",
          "bn": "বর্ণনাগুলোর ভিত্তি কোথায়"
        },
        "p": [
          {
            "en": "Every reading here rests on the early authorities. The explanations come from the Companions and the Successors — Ibn Abbas, Qatadah, as-Suddi, Nawf al-Bikali and Muhammad ibn Ishaq — carried in the commentaries of at-Tabari, Ibn Kathir, al-Qurtubi, al-Baghawi and as-Sa'di. None of these commentaries attaches a sound Prophetic report to this verse's account of her withdrawal. So the reports are given as what they are, the words of those early authorities, and nothing is added beyond what the sources hold.",
            "bn": "এখানকার প্রতিটি ব্যাখ্যা দাঁড়িয়ে আছে পূর্বসূরি আলেমদের কথার ওপর। ব্যাখ্যাগুলো এসেছে সাহাবা আর তাবিয়ীদের কাছ থেকে: ইবন আব্বাস, কাতাদা, সুদ্দী, নওফ আল-বিকালি আর মুহাম্মদ ইবন ইসহাক। তাঁদের কথা পাওয়া যায় তাবারী, ইবন কাসীর, কুরতুবী, বাগভী আর সা'দীর তাফসীরে। এই তাফসীরগুলোর কোনোটিই তাঁর সরে যাওয়ার এই বর্ণনার সঙ্গে কোনো সহীহ নববী হাদিস জোড়ে না। তাই আমরা বর্ণনাগুলো যেমন আছে তেমনই দিলাম, সেই পূর্বসূরিদের কথা হিসেবে; সূত্রে যা আছে, তার বাইরে কিছু যোগ করিনি।"
          },
          {
            "en": "Al-Qurtubi does record a genuine disagreement over her rank. Some, he says, held Maryam to be a prophetess; others held her not a prophetess but a woman of the highest truth and favour, among the purest of her people. He marks the first position as the more apparent and refers the full treatment back to Surah Al Imran. The difference is kept here as a difference, both sides named and no verdict pressed, for her honour stands whole on either reading.",
            "bn": "তবে তাঁর মর্যাদা নিয়ে একটি সত্যিকারের মতভেদ কুরতুবী লিখে রেখেছেন। তিনি বলেন, কেউ কেউ মারইয়ামকে নবী মনে করেছেন; আবার কেউ বলেছেন, তিনি নবী নন, বরং সত্যনিষ্ঠা ও আল্লাহর অনুগ্রহে সর্বোচ্চ স্তরের এক নারী, নিজের সম্প্রদায়ের সবচেয়ে পবিত্রদের একজন। কুরতুবী প্রথম মতটিকে বেশি স্পষ্ট বলেন, আর পূর্ণ আলোচনার জন্য পাঠককে ফিরিয়ে দেন সূরা আলে ইমরানে। আমরাও মতভেদটাকে মতভেদ হিসেবেই রাখলাম: দুই পক্ষের কথাই রইল, কোনো রায় চাপাইনি। কারণ যে মতই ধরা হোক, তাঁর সম্মান পুরোপুরি অটুট।"
          }
        ]
      },
      {
        "h": {
          "en": "Withdrawing Toward Your Lord",
          "bn": "রবের দিকে সরে আসা"
        },
        "p": [
          {
            "en": "The verse hands us a picture before it hands us an event. A woman deliberately steps away from her people toward the east, and the Book lingers on the leaving itself. Whether she withdrew to purify herself, as as-Suddi held, or to worship, as al-Qurtubi preferred, the shape is the same: a turning aside from the crowd to be alone with her Lord. What the reader meets here is a settled habit of drawing apart for God, not a stray moment in a story.",
            "bn": "আয়াত আমাদের হাতে ঘটনা তুলে দেওয়ার আগে তুলে দেয় একটা ছবি। এক নারী ইচ্ছা করে নিজের লোকজন ছেড়ে পুব দিকে সরে যান, আর কিতাব থেমে থাকে সেই সরে যাওয়াটার ওপরই। তিনি পবিত্র হতে সরেছিলেন, যেমন সুদ্দী বলেন, নাকি ইবাদত করতে, যেমন কুরতুবী পছন্দ করেন, ছবিটা একই: ভিড় ছেড়ে সরে এসে রবের সঙ্গে একা হওয়া। পাঠক এখানে কাহিনির কোনো এলোমেলো মুহূর্ত দেখেন না; দেখেন আল্লাহর জন্য আলাদা হওয়ার এক স্থির অভ্যাস।"
          },
          {
            "en": "As-Sa'di found her lasting reward in exactly this — that she is named in the Book Muslims recite across the east and the west. A life spent in quiet worship, unseen by any crowd, was written down where no hand could erase it. What is done in seclusion for Allah is not lost to the eye of the world; it is the very thing He chose to keep. The reader is left to weigh how much of his own worship could bear to go unwitnessed.",
            "bn": "সা'দী তাঁর চিরস্থায়ী প্রতিদান খুঁজে পান ঠিক এখানেই: তাঁর নাম এসেছে সেই কিতাবে, যা মুসলিমরা পুবে-পশ্চিমে তিলাওয়াত করে। নিরিবিলি ইবাদতে কাটানো এক জীবন, কোনো ভিড়ের চোখে যা পড়েনি, লেখা হয়ে গেছে এমন জায়গায়, যেখান থেকে কোনো হাত তা মুছতে পারবে না। আল্লাহর জন্য নিরিবিলিতে যা করা হয়, তা দুনিয়ার চোখ থেকে হারিয়ে যায় না; বরং ঠিক সেটাই তিনি রেখে দিতে বেছে নিয়েছেন। পাঠকের জন্য রয়ে যায় একটা প্রশ্ন: নিজের ইবাদতের কতটুকু কারও চোখে না পড়েও টিকে থাকতে পারবে?"
          }
        ]
      }
    ]
  },
  "19:19": {
    "sections": [
      {
        "h": {
          "en": "He Names His Sender",
          "bn": "সে জানায় কে পাঠিয়েছে"
        },
        "p": [
          {
            "en": "Qala innama ana rasulu rabbiki: he said, I am only the messenger of your Lord. The figure who had appeared to Maryam in the shape of a well-proportioned man, in 19:17, now speaks, and his answer to her plea in 19:18 is not a defence of himself but a naming of the One who sent him. As-Sa'di reads his words this way: when Jibril saw the alarm and fear in her, he said that his whole task and occupation was to carry out his Lord's message to her. The stranger begins by making himself small.",
            "bn": "কালা ইন্নামা আনা রাসূলু রব্বিকি: সে বলল, আমি তো তোমার রবের বার্তাবাহক মাত্র। যে আগন্তুক ১৯:১৭ আয়াতে পূর্ণাঙ্গ মানুষের রূপে মারইয়ামের সামনে এসেছিল, সে এবার কথা বলে। ১৯:১৮ আয়াতে তাঁর আকুতির জবাবে সে নিজের পক্ষে সাফাই গায় না, বরং জানিয়ে দেয় কে তাকে পাঠিয়েছেন। সাদী তার কথার অর্থ এভাবে ধরেন: জিবরীল তাঁর মধ্যে ভয় ও শঙ্কা দেখে বলল, তার একমাত্র কাজ আর দায়িত্ব হলো তার রবের বার্তা তাঁর কাছে পৌঁছে দেওয়া। আগন্তুক শুরুই করে নিজেকে ছোট করে।"
          },
          {
            "en": "The particle innama does careful work here. It restricts: it says nothing but this. He is not what she fears, not a suitor and not a threat, but a messenger and no more. The abridged Ibn Kathir catches the sense in plain words, that the angel said to her, in order to remove the fear she felt within herself, that he was not what she thought but the messenger of her Lord, meaning Allah had sent him to her. His identity is entirely borrowed. He stands there as an errand, not as a man with wishes of his own.",
            "bn": "ইন্নামা শব্দটি এখানে সূক্ষ্ম কাজ করে। শব্দটি গণ্ডি টেনে দেয়: এ ছাড়া আর কিছু নয়। তিনি যা ভয় পাচ্ছেন, সে তা নয়; বিয়ের প্রস্তাব নিয়ে আসা কেউ নয়, বিপদও নয়। সে কেবল একজন বার্তাবাহক, এর বেশি কিছু নয়। সংক্ষেপিত ইবন কাসীর কথাটা সোজা ভাষায় ধরে: ফেরেশতা তাঁর মনের ভয় দূর করতে বলল, তিনি যা ভাবছেন সে তা নয়, বরং তাঁর রবের বার্তাবাহক, অর্থাৎ আল্লাহ তাকে তাঁর কাছে পাঠিয়েছেন। তার পরিচয়টুকু পুরোপুরি ধার করা। সে সেখানে দাঁড়িয়ে আছে একটা দায়িত্ব হয়ে, নিজের চাওয়া-পাওয়া আছে এমন মানুষ হয়ে নয়।"
          },
          {
            "en": "Read against the verse before it, the reply lands exactly where her fear was. She had not asked who he was; she had sought protection from him. He answers the fear underneath the question. He does not say trust me, or you have nothing to worry about from me as a man. He moves the ground entirely off himself and onto his Sender, so that whatever comes next will arrive as your Lord's word and not as a stranger's proposal. Everything that follows in the verse rests on this opening: he is a carrier, and the message is not his.",
            "bn": "আগের আয়াতের পাশে রেখে পড়লে জবাবটা ঠিক সেখানেই গিয়ে পড়ে যেখানে তাঁর ভয় ছিল। তিনি জিজ্ঞেস করেননি সে কে, তিনি তার হাত থেকে আশ্রয় চেয়েছিলেন। সে প্রশ্নের তলায় লুকানো ভয়টারই জবাব দেয়। সে বলে না আমাকে বিশ্বাস করো, কিংবা মানুষ হিসেবে আমাকে নিয়ে তোমার ভয়ের কিছু নেই। সে গোটা মনোযোগ নিজের ওপর থেকে সরিয়ে নেয় তার প্রেরকের ওপর, যেন এরপর যা আসবে তা আসে রবের কথা হয়ে, কোনো আগন্তুকের প্রস্তাব হয়ে নয়। আয়াতের বাকি সবকিছু এই শুরুটার ওপরই দাঁড়িয়ে: সে একজন বাহক, আর বার্তাটা তার নিজের নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Answering Her Refuge",
          "bn": "আশ্রয় চাওয়ার জবাব"
        },
        "p": [
          {
            "en": "Her words in 19:18 had reached for the Most Merciful: I seek refuge in ar-Rahman from you, if you are God-fearing. She did not fight the stranger; she named her Lord and put herself behind that name. The messenger answers on the same ground she chose. He meets her mention of the Most Merciful by declaring himself the Most Merciful's envoy, as if to say the very Lord she fled to is the Lord who sent him. Her refuge and his errand turn out to have the same address, and the fear she felt has nowhere left to stand.",
            "bn": "১৯:১৮ আয়াতে তাঁর কথা রহমানের দিকে হাত বাড়িয়েছিল: আমি তোমা হতে রহমানের আশ্রয় চাই, যদি তুমি আল্লাহভীরু হও। তিনি আগন্তুকের সঙ্গে লড়াই করেননি, নিজের রবের নাম নিয়ে সেই নামের পেছনে আশ্রয় নিয়েছেন। বার্তাবাহক তাঁরই বেছে নেওয়া জায়গায় দাঁড়িয়ে জবাব দেয়। রহমানের কথা তোলার জবাবে সে নিজেকে রহমানেরই দূত বলে ঘোষণা করে, যেন বলছে, যাঁর কাছে তিনি পালিয়েছেন সেই তো তাকে পাঠিয়েছেন। তাঁর আশ্রয় আর তার দায়িত্ব দুটোরই ঠিকানা মিলে যায়, আর যে ভয় তিনি পেয়েছিলেন তার দাঁড়ানোর জায়গা আর থাকে না।"
          },
          {
            "en": "The abridged Ibn Kathir preserves an added report and marks it clearly as reported, with the words it is said: that when Maryam named ar-Rahman, Jibril fell apart from the human form and returned to his true shape as an angel, and then answered. The wording keeps its distance from certainty, and so should we; the point does not depend on it. What the verse itself makes plain is enough: he came to calm, not to frighten, and he did it by pointing past his own borrowed body to the Lord whose word he had come to carry.",
            "bn": "সংক্ষেপিত ইবন কাসীর একটি বাড়তি বর্ণনা রেখে দেয় এবং 'বলা হয়' কথাটি দিয়ে স্পষ্ট করে দেয় যে এটি বর্ণিত মাত্র: মারইয়াম যখন রহমানের নাম নিলেন, জিবরীল মানুষের রূপ থেকে সরে গিয়ে ফেরেশতার আসল আকৃতিতে ফিরে গেল, তারপর জবাব দিল। শব্দগুলো নিশ্চয়তা থেকে দূরত্ব রাখে, আমাদেরও তা-ই রাখা উচিত, কারণ মূল কথাটা এর ওপর নির্ভর করে না। আয়াত নিজেই যা স্পষ্ট করে দেয় তা-ই যথেষ্ট: সে এসেছে শান্ত করতে, ভয় দেখাতে নয়। আর সে কাজটা করেছে নিজের ধার করা শরীরকে পেরিয়ে সেই রবের দিকে ইশারা করে, যাঁর কথা বইতে সে এসেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Ways To Read",
          "bn": "দুই রকম পাঠ"
        },
        "p": [
          {
            "en": "The next words carry a famous difference among the reciters, and the commentators lay it out rather than hide it. At-Tabari reports that the general body of reciters of the Hijaz and Iraq, apart from Abu Amr, read li-ahaba laki, that I may give you, taken as the messenger relating his errand. Abu Amr ibn al-Ala read li-yahaba laki, that He may give you, meaning your Lord will give you the boy. Ibn Kathir names the same pair, that Abu Amr read li-yahaba and the others li-ahaba, and adds that both readings have a sound sense and each entails the other.",
            "bn": "পরের শব্দগুলোয় কারীদের মধ্যে একটি প্রসিদ্ধ পার্থক্য আছে, আর তাফসীরকারেরা তা লুকান না, খুলে বলেন। তাবারী জানান, আবু আমর ছাড়া হিজায ও ইরাকের অধিকাংশ কারী পড়েছেন লিআহাবা লাকি, অর্থাৎ যাতে আমি তোমাকে দিই; এখানে বার্তাবাহক নিজের দায়িত্বের কথা বলছেন। আবু আমর ইবনুল আলা পড়েছেন লিয়াহাবা লাকি, অর্থাৎ যাতে তিনি তোমাকে দেন, মানে তোমার রব তোমাকে ছেলেটি দেবেন। ইবন কাসীরও এই দুটি পাঠের কথা বলেন: আবু আমর পড়েছেন লিয়াহাবা, অন্যরা লিআহাবা। তিনি যোগ করেন, দুটি পাঠের অর্থই সঠিক, আর একটির মধ্যে অন্যটি এসে যায়।"
          },
          {
            "en": "Al-Baghawi records the same split and puts the two meanings side by side. Nafi and the people of Basra read li-yahaba, that your Lord may give you; the others read li-ahaba, ascribing the verb to the messenger. Al-Qurtubi adds that Warsh, transmitting from Nafi, read li-yahaba on the meaning Allah has sent me that He may give you. So the disagreement is real and it is textual: does the verb sit in the mouth of the angel who conveys, or does it name the Lord who bestows? Both are read, both are carried in the tradition, and neither reader is faulted by these commentators.",
            "bn": "বাগভী একই বিভাজন লিপিবদ্ধ করেন এবং অর্থ দুটি পাশাপাশি রাখেন। নাফি ও বসরার লোকেরা পড়েছেন লিয়াহাবা, অর্থাৎ তোমার রব তোমাকে দেবেন; অন্যরা পড়েছেন লিআহাবা, ক্রিয়াটি বার্তাবাহকের দিকে ফিরিয়ে। কুরতুবী যোগ করেন, ওয়ারশ নাফি থেকে বর্ণনা করে পড়েছেন লিয়াহাবা, এই অর্থে যে আল্লাহ আমাকে পাঠিয়েছেন যাতে তিনি তোমাকে দেন। তাই মতভেদটি সত্যিকারের, আর তা পাঠের: ক্রিয়াটি কি সংবাদদাতা ফেরেশতার মুখে বসে, নাকি দাতা রবের নাম করে? দুটোই পড়া হয়, দুটোই ঐতিহ্যে বাহিত, আর এই তাফসীরকারেরা কোনো কারীকেই দোষ দেন না।"
          },
          {
            "en": "At-Tabari, having laid out both, states his own preference without unseating the other. He judges the correct reading to be the one the reciters of the great cities hold, li-ahaba with the alif rather than the ya, and his reason is textual: this is how it stands in the copies of the Qur'an the Muslims hold, and it is the reading of their old and their recent reciters apart from Abu Amr; he adds that it is not right to differ with what they agreed upon. This is a preference argued from the written tradition, not a charge that the other reading is wrong.",
            "bn": "দুটো পাঠই তুলে ধরার পর তাবারী নিজের পছন্দ জানান, তবে অন্যটিকে বাতিল না করে। তিনি সঠিক পাঠ ধরেন সেটিকে, যা বড় শহরগুলোর কারীরা পড়েন: ইয়া নয়, আলিফ দিয়ে লিআহাবা। তাঁর কারণটি লিখিত পাঠের: মুসলিমদের হাতে থাকা মুসহাফগুলোয় এভাবেই লেখা, আর আবু আমর ছাড়া আগের ও পরের সব কারীর পাঠ এটাই। তিনি যোগ করেন, তাঁরা যে বিষয়ে একমত হয়েছেন, তার বিরোধিতা করা ঠিক নয়। এ পছন্দের যুক্তি লিখিত পরম্পরা থেকে; অন্য পাঠকে তিনি ভুল বলছেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Gift Stays Allah's",
          "bn": "দান থেকে যায় আল্লাহরই"
        },
        "p": [
          {
            "en": "The reason the difference does not trouble the meaning is that both readings end in the same place. Al-Baghawi states it directly: on the reading that ascribes the verb to the messenger, the giving is still from Allah, and it is only attributed to the messenger because Allah sent him with it. Al-Qurtubi says the same about Jibril, that he made the giving from himself because the announcing of it was from him. The angel's hand appears in the sentence, but the gift never becomes his. He is the one who tells; the Lord is the One who gives.",
            "bn": "পার্থক্যটি অর্থে গোলমাল বাধায় না, কারণ দুটি পাঠই একই জায়গায় গিয়ে থামে। বাগভী সোজাসুজি বলেন: যে পাঠে ক্রিয়াটি বার্তাবাহকের দিকে ফেরানো হয়, সেখানেও দান আল্লাহর কাছ থেকেই আসে, আর তা বার্তাবাহকের দিকে ফেরানো হয় কেবল এ কারণে যে আল্লাহ তাকে সেটা নিয়ে পাঠিয়েছেন। কুরতুবী জিবরীল সম্পর্কে একই কথা বলেন, সে দানটা নিজের দিক থেকে বলেছে কারণ ঘোষণাটা তার দিক থেকেই ছিল। ফেরেশতার হাত বাক্যে দেখা যায়, কিন্তু দান কখনো তার হয়ে যায় না। সে-ই খবর দেয়; আর রব-ই দেন।"
          },
          {
            "en": "Ma'arif al-Qur'an explains the mechanism behind the ascription. Jibril attributed the gift of the child to himself because Allah had sent him to breathe into her collar, and this breath would be the means of her conceiving, whereas in reality this gift was by the act of Allah. So even the angel's part is instrumental, a means placed in his keeping and then withdrawn once it has served. The verb that seems to seat the giving in his hand is, on inspection, only pointing back up the chain to its source. The messenger conveys a decree; he does not author it.",
            "bn": "জিবরীল কেন দানটা নিজের দিকে ফিরিয়েছিল, মাআরিফুল কুরআন তা খুলে বলে। আল্লাহ তাকে পাঠিয়েছিলেন মারইয়ামের জামার গলায় ফুঁ দিতে, আর এই ফুঁ-ই হতো তাঁর গর্ভধারণের মাধ্যম; অথচ আসলে এই দান ছিল আল্লাহরই কাজ। তাই ফেরেশতার ভূমিকাটুকুও একটা উপলক্ষ মাত্র, তার হাতে রাখা একটি মাধ্যম, যা কাজ শেষ হলে তুলে নেওয়া হয়। যে ক্রিয়া দেখে মনে হয় দানটা তার হাতে, তা আসলে ধাপে ধাপে ওপরের দিকে, আসল উৎসের দিকেই ইশারা করছে। বার্তাবাহক একটি ফয়সালা পৌঁছে দেয়; সে নিজে তা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word For Pure",
          "bn": "পবিত্র শব্দটির ভার"
        },
        "p": [
          {
            "en": "Ghulaman zakiyyan: a pure boy. At-Tabari glosses az-zakiyy as the one kept clean of sins, and notes that the Arabs say both zakin and zakiyy for the same sense. Al-Muyassar keeps to the plain line, a boy pure of sins, and al-Baghawi reads it as a righteous child, pure of sins. The purity named here is not a hope pinned on the boy but part of the promise itself. Before he is born, before Maryam has even asked how, the announcement already tells her the kind of son he will be.",
            "bn": "গুলামান যাকিয়্যান: এক পুত-পবিত্র পুত্র। তাবারী যাকিয়্য শব্দের অর্থ করেন গুনাহ থেকে পাক রাখা হয়েছে এমন, আর বলেন আরবরা একই অর্থে যাকিন ও যাকিয়্য দুটোই বলে। মুয়াসসার সাদামাটা কথায় থাকে, গুনাহ থেকে পবিত্র এক ছেলে, আর বাগভী পড়েন গুনাহ থেকে পাক এক নেক সন্তান হিসেবে। এখানে যে পবিত্রতার নাম নেওয়া হলো তা ছেলেটির ওপর ঝুলিয়ে রাখা কোনো আশা নয়, তা প্রতিশ্রুতিরই অংশ। জন্মের আগে, মারইয়াম কেমন করে বলে জিজ্ঞেস করার আগেই ঘোষণা তাঁকে জানিয়ে দেয় ছেলেটি কেমন হবে।"
          },
          {
            "en": "As-Sa'di reads the word as a great glad tiding, both of the boy and of his purity, and unfolds what zakaa carries: it requires his being cleansed of blameworthy traits and marked instead by praiseworthy ones. Purity here is not merely the absence of stain but the presence of good grown in its place. The same surah has already used this note. A few verses earlier, in 19:13, Yahya is given with purity from his Lord, so the reader meets a second child described by the same quality, each one made pure not by himself but by the gift that brought him.",
            "bn": "সাদী শব্দটিকে পড়েন এক মহা সুসংবাদ হিসেবে, ছেলেটির জন্মের আর তার পবিত্রতার, দুটোরই। আর যাকা শব্দে কী আছে তা খুলে বলেন: নিন্দনীয় স্বভাব থেকে তাকে পরিচ্ছন্ন হতে হবে, আর তার জায়গায় থাকবে প্রশংসনীয় গুণ। এখানে পবিত্রতা মানে কেবল দাগ না থাকা নয়, দাগের জায়গায় ভালো কিছু গজিয়ে ওঠাও। এই সূরায় কথাটা আগেও এসেছে। কয়েক আয়াত আগে, ১৯:১৩-এ, ইয়াহইয়াকে দেওয়া হয়েছে তাঁর রবের পক্ষ থেকে পবিত্রতাসহ। ফলে পাঠক একই গুণে বর্ণিত দ্বিতীয় এক সন্তানের দেখা পান। দুজনের কেউই নিজে নিজে পবিত্র হননি; পবিত্র করেছে সেই দান, যা তাঁদের এনেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Given, Never Begotten",
          "bn": "দান, কারও ঔরসজাত নয়"
        },
        "p": [
          {
            "en": "It is worth pausing on the plain shape of the sentence, because the surah will spend much of its length on exactly this. A boy is being given. The abridged Ibn Kathir frames the whole passage as Allah granting Maryam a child without a father involved, and names this child His servant and His Messenger. A gift has a Giver and a recipient, and the two are never the same. The One who bestows the boy stands on one side of the verse, and the boy who is bestowed stands on the other. The grammar itself keeps the Lord and the servant apart.",
            "bn": "বাক্যটার সরল গড়নে একটু থামা দরকার, কারণ সূরার বড় একটা অংশ ঠিক এই কথাটাকে ঘিরেই। একটি ছেলে দেওয়া হচ্ছে। সংক্ষেপিত ইবন কাসীর গোটা অংশটাকে দেখে এভাবে: আল্লাহ মারইয়ামকে পিতা ছাড়াই এক সন্তান দান করছেন; আর এই সন্তানকে বলেন তাঁর বান্দা ও তাঁর রাসূল। দানের একজন দাতা থাকেন, একজন গ্রহীতা থাকে, আর দুজন কখনো এক নয়। যিনি ছেলেটিকে দেন, তিনি আয়াতের এক পাশে; যে ছেলেটিকে দেওয়া হয়, সে অন্য পাশে। ব্যাকরণ নিজেই রব আর বান্দাকে আলাদা করে রাখে।"
          },
          {
            "en": "This is why the announcement of a pure boy is quietly the surah's answer to a claim it names later, that Allah has taken a son. A son who must be given, whose purity must be granted, whose coming a messenger must announce, is by that very description a creature and not a Creator. The point can be made without heat. The verse does not argue; it simply describes a gift, and a gift received is the plainest proof that the one who receives it does not own all things. Isa is honoured here as servant and prophet, and honoured most by being placed exactly there.",
            "bn": "এ জন্যই পুত-পবিত্র এক ছেলের ঘোষণা নিঃশব্দে জবাব দিয়ে রাখে এমন এক দাবির, যার কথা সূরা পরে তুলবে: আল্লাহ সন্তান গ্রহণ করেছেন। যে সন্তানকে দিতে হয়, যার পবিত্রতা দান করতে হয়, যার আসার খবর একজন বার্তাবাহককে দিতে হয়, এই বর্ণনা থেকেই বোঝা যায় তিনি সৃষ্টি, স্রষ্টা নন। কথাটা উত্তেজনা ছাড়াই বলা যায়। আয়াত তর্ক করে না, শুধু একটি দানের বর্ণনা দেয়। আর যে দান গ্রহণ করে, সে যে সবকিছুর মালিক নয়, তার সবচেয়ে সরল প্রমাণ ওই দান গ্রহণ করাই। ঈসা (আঃ) এখানে সম্মানিত বান্দা ও নবী হিসেবে, আর তাঁর সবচেয়ে বড় সম্মান ঠিক সেই জায়গাতেই থাকা।"
          }
        ]
      },
      {
        "h": {
          "en": "No Report Fixed Here",
          "bn": "এ আয়াতে বাঁধা হাদিস নেই"
        },
        "p": [
          {
            "en": "Honesty about the sources means saying what is not there. None of the tafsir works consulted for this verse attaches a sound, verse-specific hadith to the words I am only the messenger of your Lord. The commentary here is philology and creed, the reading of the verb and the meaning of purity, not a chain of narration tied to the ayah. That is a normal and acceptable outcome. Where no sound report is fixed to a verse, the honest course is to leave the slot empty rather than fill it with something that was never transmitted about these words.",
            "bn": "সূত্রের ব্যাপারে সততা মানে যা নেই, সেটাও বলা। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই 'আমি তো তোমার রবের বার্তাবাহক মাত্র' কথাটির সঙ্গে আয়াত-নির্দিষ্ট কোনো সহীহ হাদিস জুড়ে দেয় না। এখানকার আলোচনা ভাষা আর আকীদার: ক্রিয়াটি কীভাবে পড়া হয়, পবিত্রতার অর্থ কী। আয়াতের সঙ্গে বাঁধা কোনো বর্ণনাসূত্র নয়। এমনটা হওয়া স্বাভাবিক, এতে দোষের কিছু নেই। যে আয়াতের সঙ্গে কোনো সহীহ বর্ণনা বাঁধা নেই, সেখানে সততার দাবি হলো জায়গাটা খালি রাখা; এই কথাগুলো নিয়ে যা কখনো বর্ণিতই হয়নি, তা দিয়ে ফাঁক ভরানো নয়।"
          },
          {
            "en": "One sound narration is worth naming only as a distant echo, and it must be marked as such: it is not a comment on this verse. Sahih al-Bukhari records that among those whom Allah will shade on the Day when there is no shade but His is a youth who grew up in the worship of his Lord. Al-Bukhari graded it sound. It speaks to the theme of a boy given in purity and raised toward his Lord, and no further; it was transmitted about the shade of the Judgement, not about Maryam or Jibril, and it is offered here as resonance, not as tafsir.",
            "bn": "একটি সহীহ বর্ণনার নাম নেওয়া চলে কেবল দূরের একটা প্রতিধ্বনি হিসেবে, আর সেটিকে সেভাবেই চিহ্নিত করতে হবে: এটি এ আয়াতের ব্যাখ্যা নয়। সহীহ বুখারী বর্ণনা করে, যেদিন তাঁর ছায়া ছাড়া আর কোনো ছায়া থাকবে না সেদিন আল্লাহ যাদের ছায়া দেবেন তাদের একজন সেই যুবক, যে তার রবের ইবাদতে বেড়ে উঠেছে। বুখারী এটিকে সহীহ বলেছেন। এটি এক পুত-পবিত্র ছেলে দান আর রবের দিকে বেড়ে ওঠার ভাবনার সঙ্গে মেলে, এর বেশি নয়। এটি বর্ণিত হয়েছে কিয়ামতের ছায়া নিয়ে, মারইয়াম বা জিবরীলকে নিয়ে নয়, আর এখানে দেওয়া হলো অনুরণন হিসেবে, তাফসীর হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying What Is Lent",
          "bn": "ধার পাওয়া আমানত বয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Step back from the philology and the verse leaves the reader with a picture of a perfect servant at work. The messenger arrives, calms a frightened woman, and delivers news that will change her life, and in the whole exchange he claims nothing. He does not linger over his own dignity or the wonder of what he carries. He says who sent him, he names the gift as the Lord's, and he is gone. Whatever the reciter's tongue does with the verb, the messenger's posture is fixed: he holds the good and hands it on.",
            "bn": "ভাষার আলোচনা থেকে একটু সরে দাঁড়ালে আয়াত পাঠকের সামনে রেখে যায় দায়িত্ব পালনরত এক নিখুঁত বান্দার ছবি। বার্তাবাহক আসে, ভয় পাওয়া এক নারীকে শান্ত করে, আর এমন খবর দেয় যা তাঁর জীবন বদলে দেবে; অথচ পুরো কথোপকথনে সে নিজের জন্য কিছুই দাবি করে না। নিজের মর্যাদা কিংবা যা বয়ে এনেছে তার বিস্ময় নিয়ে সে দাঁড়িয়ে থাকে না। সে জানায় কে তাকে পাঠিয়েছেন, দানটাকে রবের বলে জানায়, তারপর চলে যায়। ক্রিয়াটি যে পাঠেই পড়া হোক, বার্তাবাহকের ভঙ্গি একই: ভালো জিনিসটা সে হাতে নেয়, আর পৌঁছে দেয়।"
          },
          {
            "en": "There is a whole way of living folded into that posture. Almost everything good in a person's hands is lent, not owned: health, a skill, wealth, a word of comfort someone needs to hear, even the faith that lets them speak of their Lord at all. To carry these as this messenger carried his news, saying plainly whose they are and passing them on without pocketing the credit, is to imitate the manners of an angel. The reader who learns to say I am only a carrier has learned the humility the verse was quietly teaching all along.",
            "bn": "এই ভঙ্গির ভেতরেই লুকিয়ে আছে জীবন যাপনের পুরো একটা পথ। মানুষের হাতে থাকা ভালো জিনিসের প্রায় সবই ধার পাওয়া, নিজের নয়: স্বাস্থ্য, দক্ষতা, সম্পদ, কারও শোনার দরকার এমন একটা সান্ত্বনার কথা, এমনকি সেই ঈমান, যার জোরে সে রবের কথা মুখে আনতে পারে। এই বার্তাবাহক যেভাবে খবর বয়ে এনেছিল, সেভাবে এগুলো বয়ে নেওয়া, সোজা বলে দেওয়া এগুলো কার, আর কৃতিত্ব নিজের পকেটে না ভরে পৌঁছে দেওয়া, এ হলো ফেরেশতার আদব অনুসরণ করা। যে পাঠক বলতে শেখে 'আমি তো কেবল একজন বাহক', সে সেই বিনয়ই শিখে নিল, যা আয়াত এতক্ষণ চুপচাপ শেখাচ্ছিল।"
          }
        ]
      }
    ]
  },
  "19:25": {
    "sections": [
      {
        "h": {
          "en": "The Palm She Was Sent To",
          "bn": "যে খেজুর গাছের কাছে পাঠানো হলো"
        },
        "p": [
          {
            "en": "The pains of childbirth had driven Maryam (AS) to the trunk of a palm tree, and she had cried out that she wished she had died before this day and been wholly forgotten (19:23). A voice then called to her from below, telling her not to grieve and pointing to a stream her Lord had placed beneath her (19:24). The commentators dispute whether that voice was the angel or the newborn ʿIsa (AS), and this reflection does not try to settle it. What matters here is what comes next: a command about the palm.",
            "bn": "প্রসবের ব্যথা মারইয়াম (আঃ)-কে টেনে নিয়ে গিয়েছিল এক খেজুর গাছের কাণ্ডের কাছে। তিনি আর্তনাদ করে উঠেছিলেন, হায়, এই দিনের আগেই যদি মরে যেতাম, মানুষের মন থেকে একেবারে মুছে যেতাম (১৯:২৩)। তখন নিচের দিক থেকে এক ডাক এল: দুঃখ কোরো না, তোমার রব তোমার পায়ের নিচে একটি ঝরনা বইয়ে দিয়েছেন (১৯:২৪)। সেই ডাক ফেরেশতার ছিল নাকি সদ্যজাত ঈসা (আঃ)-এর, তা নিয়ে তাফসীরকারদের মতভেদ আছে; এই আলোচনা তা মীমাংসা করতে যায় না। এখানে দেখার বিষয় এর পরের কথা: খেজুর গাছ নিয়ে একটি আদেশ।"
          },
          {
            "en": "The order is startling in its plainness. 'And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates' (19:25). At-Tabari and al-Baghawi read the verb huzzi as simply 'move it, shake it.' Ibn Zayd glossed it that way, and al-Baghawi notes that the Arabs say hazzahu and hazza bihi, shook it, with or without the connecting particle. A woman at the very end of her strength is told not to wait for rescue but to take hold of a tree and pull it toward herself.",
            "bn": "আদেশটা এত সাদামাটা যে অবাক লাগে। 'খেজুর গাছের কান্ড ধরে তুমি তোমার দিকে নাড়া দাও, তা তোমার উপর তাজা পরিপক্ব খেজুর ফেলবে' (১৯:২৫)। তাবারী ও বাগাভী 'হুযযী' ক্রিয়াটির সোজা অর্থ করেন: নাড়াও, ঝাঁকাও। ইবন যায়দও এই ব্যাখ্যাই দিয়েছেন। বাগাভী আরও বলেন, আরবেরা 'হাযযাহু' আর 'হাযযা বিহি' দুটোই বলে; জোড়-অব্যয় থাকুক বা না থাকুক, মানে একই: নাড়ানো। শক্তি যাঁর একেবারে ফুরিয়ে এসেছে, সেই নারীকে উদ্ধারের অপেক্ষায় বসে থাকতে বলা হচ্ছে না। বলা হচ্ছে গাছটা ধরে নিজের দিকে টানতে।"
          },
          {
            "en": "One small feature of the wording drew comment. The verse says bi-jidhʿ, 'by the trunk,' with a particle that could have been left out. At-Tabari, al-Qurtubi and al-Baghawi all treat this baʾ as an added, emphatic particle, the difference between saying 'take the reins' and 'take by the reins.' The meaning is the same either way: lay your hand on the trunk and shake. The grammar does not soften the command; it only underlines that her own hand is the instrument here, and the effort is asked of her plainly.",
            "bn": "শব্দচয়নের একটা ছোট্ট দিক তাফসীরকারদের নজর কেড়েছে। আয়াতে আছে 'বিজিয্‌ই', অর্থাৎ 'কান্ড ধরে', আর এখানে যে অব্যয়টা আছে তা বাদ দিলেও চলত। তাবারী, কুরতুবী ও বাগাভী তিনজনেই এই 'বা'-কে বাড়তি অব্যয় ধরেন, যা কেবল কথায় জোর আনে, যেমন কেউ 'লাগাম ধরো' না বলে বলে 'লাগামটা ধরে ফেলো'। অর্থ দুভাবেই এক: কান্ডে হাত রাখো আর নাড়াও। ব্যাকরণ আদেশটাকে নরম করে না। বরং আরও জোর দিয়ে বোঝায়, কাজটা হবে তাঁর নিজের হাতেই, আর খাটুনিটা সোজাসুজি তাঁর কাছেই চাওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Kind Of Tree",
          "bn": "গাছটা কেমন ছিল"
        },
        "p": [
          {
            "en": "The mufassirun did not agree on what the tree was. Ibn ʿAbbas said it was a dry, withered trunk, and Abu Nahik said the same. Mujahid read it as a fruit-bearing palm and named the variety ʿajwa, while ath-Thawri reported from Abu Dawud al-Aʿma that it was the kind called ṣarfana. As-Suddi went further and said it was a cut length of trunk that became a whole palm again once she shook it. The reports are kept here as they stand, a genuine difference among the early authorities rather than a settled picture.",
            "bn": "গাছটা আসলে কী ছিল, তা নিয়ে মুফাসসিরগণ একমত হননি। ইবন আব্বাস বলেন, ওটা ছিল শুকনো, মরা এক কান্ড; আবু নাহিকও তা-ই বলেন। মুজাহিদের মতে ওটা ছিল ফলধরা খেজুর গাছ, আর জাতের নামও তিনি বলেন: 'আজওয়া'। সাওরী আবু দাউদ আল-আ'মা থেকে বর্ণনা করেন, ওটা ছিল 'সারফানা' নামের খেজুর। সুদ্দী আরও এগিয়ে বলেন, ওটা ছিল কেটে রাখা এক টুকরো কান্ড, যা নাড়া দিতেই আবার আস্ত খেজুর গাছ হয়ে গেল। বর্ণনাগুলো এখানে যেমন আছে তেমনই রাখা হলো। আদি আলেমদের মধ্যে এ নিয়ে সত্যিকারের মতভেদ ছিল, কোনো একটা ছবিতে সবাই একমত হননি।"
          },
          {
            "en": "Ibn Kathir weighed these and preferred a middle reading: outwardly it was a real tree, but not in its season of fruiting, as Wahb ibn Munabbih held. That is why the dates were a favour worth mentioning at all, food and drink set beside a woman who had nothing. At-Tabari, for his part, judged that the differing reports converge: whether one pictures the bare trunk shedding fruit or the whole palm doing so, the result the verse describes is one and the same, and the argument over it changes little.",
            "bn": "ইবন কাসীর এসব মত যাচাই করে মাঝামাঝি একটা ব্যাখ্যা পছন্দ করেন, যা ওয়াহব ইবন মুনাব্বিহেরও মত: বাহ্যত ওটা সত্যিকারের গাছই ছিল, তবে তখন ফল ধরার মৌসুম ছিল না। এ কারণেই খেজুরগুলো আলাদা করে উল্লেখ করার মতো অনুগ্রহ। যাঁর হাতে কিছুই ছিল না, তাঁর পাশেই রেখে দেওয়া হলো খাবার আর পানীয়। তাবারী আবার মনে করেন, ভিন্ন ভিন্ন বর্ণনা শেষে একই জায়গায় এসে মেলে। খালি কান্ড থেকে ফল ঝরল নাকি গোটা গাছ থেকে, যেভাবেই ভাবা হোক, আয়াত যে ফলের কথা বলে তা একই। তাই এ নিয়ে তর্কে তেমন কিছু বদলায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Shake, Though The Fruit Is Given",
          "bn": "নাড়ো, যদিও ফল তাঁরই দেওয়া"
        },
        "p": [
          {
            "en": "Here al-Qurtubi opens the deepest question in the verse. He says Allah ordered Maryam to shake the dry trunk so that she might see a further sign, the reviving of dead wood. Then he notes what some drew from it: provision, though it is decreed and certain, is still tied by Allah to some effort of the servant's own. He commanded her to shake the palm in order to bring the sign about, when that very sign could just as easily have come to her with no shaking at all.",
            "bn": "এখানেই কুরতুবী আয়াতের সবচেয়ে গভীর প্রশ্নটা তোলেন। তিনি বলেন, আল্লাহ মারইয়ামকে শুকনো কান্ডটা নাড়াতে বললেন, যাতে তিনি আরও একটি নিদর্শন দেখেন: মরা কাঠে প্রাণ ফিরে আসা। এরপর তিনি জানান, কেউ কেউ এখান থেকে একটা শিক্ষা নিয়েছেন: রিজিক তাকদীরে লেখা ও নিশ্চিত, তবু আল্লাহ তা বান্দার নিজের কিছু চেষ্টার সঙ্গে বেঁধে দিয়েছেন। নিদর্শনটা ঘটানোর জন্য আল্লাহ তাঁকে গাছ নাড়াতে বললেন, অথচ একটুও না নাড়ালেও সেই নিদর্শন একই রকম সহজে তাঁর কাছে আসতে পারত।"
          },
          {
            "en": "This is the balance the verse teaches. Al-Qurtubi calls the command to work for your provision the very way of Allah with His servants, and says plainly that it takes nothing away from reliance upon Him, against the claim of the ignorant among the would-be ascetics. Trust is not the stilling of the hand. He who could have fed her without her lifting a finger chose instead to let the fruit fall only after she reached out for the trunk and moved it with her own strength.",
            "bn": "আয়াতটা এই ভারসাম্যই শেখায়। কুরতুবী বলেন, রিজিকের জন্য খাটার হুকুম বান্দাদের সঙ্গে আল্লাহর চিরকালের রীতি। তিনি সাফ জানিয়ে দেন, এতে আল্লাহর উপর ভরসার কিছুই কমে না; যারা নিজেদের দুনিয়াবিমুখ সাধক বলে দাবি করে, তাদের মধ্যে কিছু মূর্খের ধারণা এর উল্টো। ভরসা মানে হাত গুটিয়ে বসে থাকা নয়। মারইয়াম একটা আঙুলও না নাড়ালেও যিনি তাঁকে খাওয়াতে পারতেন, তিনিই ঠিক করলেন: আগে মারইয়াম হাত বাড়িয়ে কান্ডটা ধরবেন, নিজের শক্তিতে নাড়াবেন, তারপরই ফল ঝরবে।"
          },
          {
            "en": "The lesson reaches past Maryam (AS). If the Provider Himself ties His gift to a movement of her hand, then work and trust were never opposites to be balanced against each other. The believer who plants, trades, studies or treats the sick is not showing a weaker faith than someone who waits empty-handed; he is doing exactly what Allah did with the mother of His prophet. To reach for the means is obedience, and the certainty that the outcome is God's is what keeps the reaching calm and free of panic.",
            "bn": "শিক্ষাটা মারইয়াম (আঃ)-কে ছাড়িয়ে আরও দূরে যায়। রিজিকদাতা নিজেই যদি তাঁর দান মারইয়ামের হাতের একটু নড়াচড়ার সঙ্গে বেঁধে দেন, তবে বোঝা যায়, খাটুনি আর ভরসা কখনোই পরস্পরবিরোধী ছিল না যে একটাকে আরেকটার সঙ্গে মেপে মেপে চলতে হবে। যে মুমিন চাষ করে, ব্যবসা করে, পড়াশোনা করে বা রোগীর চিকিৎসা করে, খালি হাতে বসে থাকা লোকের চেয়ে তার ঈমান দুর্বল নয়। সে বরং ঠিক সেটাই করছে, যা আল্লাহ তাঁর নবীর মায়ের সঙ্গে করেছেন। উপায় অবলম্বন করা আল্লাহর হুকুম মানারই অংশ। আর ফল আল্লাহর হাতে, এই বিশ্বাসই সেই চেষ্টাকে শান্ত রাখে, অস্থির হতে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "When Provision Came Unasked",
          "bn": "না চাইতেই যখন রিজিক আসত"
        },
        "p": [
          {
            "en": "Al-Qurtubi sharpens the point with a contrast from Maryam's own earlier life. Before this, provision had reached her with no earning at all: 'whenever Zakariyya entered upon her the sanctuary, he found provision with her' (3:37). Fruit simply appeared beside her. Yet now, having given birth, she is told to shake a tree for her food. Something has changed between the two scenes, and al-Qurtubi's teachers offered a tender reading of what it was, one that turns the labour into a mercy rather than a loss.",
            "bn": "কুরতুবী মারইয়ামের আগের জীবনের সঙ্গে একটা তুলনা টেনে কথাটা আরও ধারালো করেন। আগে তাঁর রিজিক আসত কোনো উপার্জন ছাড়াই: 'যখনই যাকারিয়া মিহরাবে তার কাছে ঢুকতেন, তার কাছে রিজিক পেতেন' (৩:৩৭)। ফল আপনা থেকেই তাঁর পাশে হাজির থাকত। অথচ এখন, সন্তান প্রসবের পর, খাবারের জন্য তাঁকে গাছ নাড়াতে বলা হচ্ছে। দুই দৃশ্যের মাঝে কিছু একটা বদলে গেছে। কুরতুবীর উস্তাদেরা সেই বদলের এক কোমল ব্যাখ্যা দিয়েছেন, যাতে খাটুনিটা আর ক্ষতি থাকে না, হয়ে ওঠে রহমত।"
          },
          {
            "en": "When her heart was empty of all but her Lord, they said, Allah spared her limbs the toil and sent her sustenance directly. Once ʿIsa (AS) was born and her heart filled with love and care for him, she was returned to the ordinary way of His servants, the way of reaching for means. The lifting of the burden had matched the emptiness of the heart; the return of the labour matched a heart now full. Provision through effort was not a punishment but a homecoming to the normal path.",
            "bn": "তাঁরা বলেন, মারইয়ামের মন যখন রব ছাড়া আর সবকিছু থেকে খালি ছিল, তখন আল্লাহ তাঁকে হাত-পায়ের খাটুনি থেকে রেহাই দিয়ে সরাসরি রিজিক পাঠাতেন। ঈসা (আঃ)-এর জন্মের পর যখন তাঁর মন ছেলের ভালোবাসা আর চিন্তায় ভরে উঠল, তখন তাঁকে ফিরিয়ে আনা হলো বান্দাদের সাধারণ পথে, উপায় অবলম্বনের পথে। মন যখন খালি ছিল, বোঝাও তখন তুলে নেওয়া হয়েছিল; মন যখন ভরে উঠল, খাটুনিও ফিরে এল। খেটে রিজিক পাওয়া তাই শাস্তি ছিল না, ছিল চেনা পথে ঘরে ফেরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Ripe And Freshly Picked",
          "bn": "তাজা, সদ্য পাড়া খেজুর"
        },
        "p": [
          {
            "en": "The dates are described as ruṭaban janiyyan, and the commentators dwell on the second word. At-Tabari explains jani as 'taken fresh,' fruit plucked while it is still moist. Al-Qurtubi records the answer of Abu ʿAmr ibn al-ʿAlaʾ, who said jani means the fruit has not dried out, has not hardened, and has not been kept long away from the hand that picks it, and al-Qurtubi calls this the sound explanation. Al-Baghawi adds that jani is fruit which has reached its peak and come to the very hour of picking.",
            "bn": "খেজুরকে বলা হয়েছে 'রুতাবান জানিয়্যান', আর তাফসীরকারেরা দ্বিতীয় শব্দটা নিয়ে বিশেষ করে কথা বলেন। তাবারী 'জানী'-র অর্থ করেন 'তাজা অবস্থায় তোলা', অর্থাৎ রস থাকতে থাকতেই পাড়া ফল। কুরতুবী আবু আমর ইবনুল আলার জবাব উদ্ধৃত করেন: জানী মানে যে ফল শুকিয়ে যায়নি, শক্ত হয়নি, আর পাড়ার পর বেশিক্ষণ পড়েও থাকেনি। কুরতুবী একেই সঠিক ব্যাখ্যা বলেন। বাগাভী যোগ করেন, জানী সেই ফল যা পুরোপুরি পেকে ঠিক পাড়ার সময়ে এসে পৌঁছেছে।"
          },
          {
            "en": "As-Saʿdi keeps it to a handful of warm words: fresh, delicious, and beneficial. Al-Muyassar renders the sense as dates soft and just gathered, picked at that very moment. Ruṭab, the mufassirun note, are the soft ripe dates, not the dried tamr that is kept in storage. Nothing about the description is incidental. To a woman spent by labour, in a wilderness, out of the fruiting season, what falls is not a hard mouthful to be soaked and saved but the softest, freshest food a palm can give.",
            "bn": "সা'দী অল্প কয়েকটা দরদি শব্দেই কথাটা সারেন: তাজা, সুস্বাদু, উপকারী। মুয়াসসার অর্থ করেন: নরম, সদ্য তোলা খেজুর, ঠিক সেই মুহূর্তেই পাড়া। মুফাসসিরগণ বলেন, রুতাব হলো নরম পাকা খেজুর, তুলে রাখা শুকনো তামর নয়। এই বর্ণনার কিছুই অকারণে নয়। মারইয়াম তখন প্রসবের কষ্টে নিঃশেষ, চারপাশে বিরান প্রান্তর, ফলের মৌসুমও নয়। এমন সময় যা ঝরে পড়ল, তা ভিজিয়ে নরম করতে হয় বা তুলে রাখতে হয় এমন শক্ত খেজুর নয়, বরং খেজুর গাছ যা দিতে পারে তার মধ্যে সবচেয়ে নরম, সবচেয়ে তাজা খাবার।"
          }
        ]
      },
      {
        "h": {
          "en": "The Trunk Comes Back To Life",
          "bn": "মরা কান্ডে ফিরে আসা প্রাণ"
        },
        "p": [
          {
            "en": "Al-Qurtubi preserves a vivid picture from Ibn ʿAbbas of how the barren trunk answered her hand. It was decayed wood; when she shook it she looked up and saw the fronds sprout, then the flowering spadix break out from between them, then the small dates form green, redden, and ripen, all in the space of a single glance. And the ripe dates fell before her without one of them bruising as it landed. Dead wood carried living fruit in the time it takes to blink an eye.",
            "bn": "কুরতুবী ইবন আব্বাস থেকে একটা জীবন্ত ছবি তুলে ধরেন: বন্ধ্যা কান্ডটা কীভাবে মারইয়ামের হাতের ছোঁয়ায় সাড়া দিল। কান্ডটা ছিল পচা কাঠ। নাড়া দিতেই তিনি উপরে তাকিয়ে দেখলেন, পাতা গজাচ্ছে, তারপর পাতার ফাঁক থেকে ফুলের মঞ্জরি বেরোচ্ছে, তারপর ছোট ছোট খেজুর ধরল, সবুজ থেকে লাল হলো, পেকে গেল, সবই এক পলকের মধ্যে। আর পাকা খেজুরগুলো তাঁর সামনে ঝরে পড়ল, মাটিতে পড়ে একটাও থেঁতলে গেল না। চোখের পলক ফেলতে যতক্ষণ লাগে, ততক্ষণেই মরা কাঠে জীবন্ত ফল ধরল।"
          },
          {
            "en": "The reciters of old differed over whether the verb of dropping belonged to the trunk or to the whole palm, and al-Qurtubi lists the readings the grammarians recorded. At-Tabari, surveying them, said they meet in one meaning, for if the trunk sheds ripe dates while it stands, then the palm has shed them too. Wahb ibn Munabbih even placed the event in winter, far outside the season of dates, so that the whole scene declares a single thing: this fruit is a sign given, not a harvest gathered.",
            "bn": "পুরনো কারিগণ মতভেদ করেছেন, ঝরে পড়ার ক্রিয়াটা কান্ডের নাকি গোটা গাছের, আর কুরতুবী ব্যাকরণবিদদের লিপিবদ্ধ পাঠগুলো সাজিয়ে দেন। তাবারী সেগুলো পর্যালোচনা করে বলেন, সবই একই অর্থে মেলে, কারণ কান্ড দাঁড়িয়ে থেকেই যদি পাকা খেজুর ঝরায়, তবে গাছও তা ঝরিয়েছে। ওয়াহব ইবন মুনাব্বিহ ঘটনাটিকে শীতকালেও রাখেন, খেজুরের মৌসুম থেকে বহু দূরে, যাতে গোটা দৃশ্য একটি কথাই ঘোষণা করে: এই ফল দেওয়া এক নিদর্শন, কুড়ানো ফসল নয়।"
          },
          {
            "en": "There is a quiet fitness in the sign. A trunk with no life in it brings forth fresh fruit at a word, in the same hours that a woman with no husband has brought forth a child at His word. The commentators do not press the parallel, yet the verse sets the two side by side: the palm and the newborn, each a life where the ordinary course of things allowed for none. Maryam (AS) is being fed by the very kind of miracle she has just lived through herself.",
            "bn": "নিদর্শনটার মধ্যে একটা নীরব মিল আছে। যে কান্ডে প্রাণ নেই, তা এক কথায় তাজা ফল দিচ্ছে; আর ঠিক সেই সময়েই স্বামী ছাড়া এক নারী আল্লাহর কথায় সন্তান জন্ম দিয়েছেন। তাফসীরকারেরা এই মিলের উপর জোর দেন না, তবু আয়াত দুটোকে পাশাপাশি রেখেছে: খেজুর গাছ আর সদ্যোজাত শিশু। স্বাভাবিক নিয়মে দুটোর কোনোটিতেই প্রাণ আসার কথা ছিল না। মারইয়াম (আঃ)-কে খাওয়ানো হচ্ছে ঠিক সেই ধরনের মুজিজা দিয়ে, যা তিনি এইমাত্র নিজের জীবনে দেখে এলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Dates For The One In Childbirth",
          "bn": "প্রসূতির জন্য খেজুর"
        },
        "p": [
          {
            "en": "Several of the early commentators tie the choice of dates to the body of a woman in labour. ʿAmr ibn Maymun, having recited this verse, said there is nothing better for a woman in childbed than dates, fresh and dried alike; at-Tabari and Ibn Kathir both carry his words. Ar-Rabiʿ ibn Khuthaym said the like: nothing is better for the woman in childbirth than fresh dates, and had Allah known of anything better for her, He would have fed it to Maryam (AS) herself.",
            "bn": "আদি তাফসীরকারদের কয়েকজন খেজুর বেছে নেওয়ার কারণ খুঁজেছেন প্রসূতির শরীরের প্রয়োজনে। আমর ইবন মায়মূন এই আয়াত পড়ে বলেন, প্রসূতির জন্য খেজুরের চেয়ে ভালো কিছু নেই, তাজা হোক বা শুকনো। তাবারী আর ইবন কাসীর দুজনেই তাঁর কথাটি উল্লেখ করেছেন। রাবী ইবন খুসাইমও একই রকম বলেন: প্রসূতির জন্য তাজা খেজুরের চেয়ে ভালো কিছু নেই; আল্লাহ যদি এর চেয়ে ভালো কিছু জানতেন, তবে মারইয়াম (আঃ)-কে সেটাই খাওয়াতেন।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both record ar-Rabiʿ's saying, and al-Qurtubi links it to the later custom of giving dates to a mother and of taḥnik, softening a date for a newborn's mouth. These are the words of the early Muslims read alongside the verse, not sayings the mufassirun trace back to the Prophet ﷺ. It is worth stating plainly: none of the tafsir gathered here attaches a sound, elevated Prophetic hadith directly to this verse, and nothing beyond what the sources give has been claimed above.",
            "bn": "কুরতুবী আর বাগাভী দুজনেই রাবীর কথাটি লিপিবদ্ধ করেছেন। কুরতুবী একে পরের যুগের রীতির সঙ্গে জুড়ে দেন: প্রসূতি মাকে খেজুর খাওয়ানো, আর তাহনীক, মানে খেজুর নরম করে নবজাতকের মুখে দেওয়া। এগুলো আদি মুসলিমদের কথা, তাঁরা আয়াতটির সঙ্গে মিলিয়ে বলেছেন; মুফাসসিররা এগুলোকে নবী ﷺ পর্যন্ত পৌঁছান না। সোজাসুজি বলে রাখা দরকার: এখানে যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এই আয়াতের সঙ্গে সরাসরি কোনো সহীহ মারফূ হাদিস জোড়ে না। আর সূত্রে যা আছে, তার বেশি কিছু উপরে দাবি করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "What The Shaking Teaches",
          "bn": "নাড়া দেওয়া যা শেখায়"
        },
        "p": [
          {
            "en": "Return to the tenderness of the whole scene. Maʿarif al-Qurʾan notes the order of the gifts: water is named first, in the stream beneath her, and then the food to eat, the dates above her. Ibn Kathir says simply that Allah blessed her with food and drink in her hour of need. To a woman who had just wished herself dead, the answer from her Lord was not a reproach but a cool stream and soft fruit, placed exactly where a worn-out body would reach them without straining.",
            "bn": "এবার গোটা দৃশ্যের কোমলতার দিকে ফিরে তাকাই। মাআরিফুল কুরআন দানগুলোর ক্রম ধরিয়ে দেয়: আগে পানির কথা, তাঁর পায়ের নিচে বয়ে চলা ঝরনা; তারপর খাবারের কথা, মাথার উপরের খেজুর। ইবন কাসীর সোজা বলেন, প্রয়োজনের মুহূর্তে আল্লাহ তাঁকে খাবার আর পানীয় দিয়ে অনুগ্রহ করলেন। যিনি একটু আগেই নিজের মৃত্যু কামনা করেছিলেন, তাঁর রবের জবাব তিরস্কার ছিল না। জবাব ছিল শীতল ঝরনা আর নরম ফল, রাখা ঠিক সেখানে, যেখানে ক্লান্ত শরীর বেশি কষ্ট না করেই হাত বাড়িয়ে নাগাল পায়।"
          },
          {
            "en": "Al-Qurtubi records that Ṭalḥa ibn Sulayman found two mercies together in the stream and the dates: one for the body, its food and drink, and another for the heart, the comfort of watching two miracles unfold before her. That is the shape of the verse for anyone who reads it. The command to shake is real, and so is the certainty that the fruit is His to give. Reliance does not empty the hand; it steadies it, and lets it reach for the trunk that stands in front of it.",
            "bn": "কুরতুবী লিখেছেন, তালহা ইবন সুলায়মান ঝরনা আর খেজুরে একসঙ্গে দুটি রহমত দেখতে পান: একটি শরীরের জন্য, তার খাবার আর পানীয়; আরেকটি মনের জন্য, চোখের সামনে দুটি মুজিজা ঘটতে দেখার প্রশান্তি। যে-ই এ আয়াত পড়ুক, আয়াতের শিক্ষা তার কাছে এটাই। নাড়া দেওয়ার হুকুম সত্যি, আবার এটাও সত্যি যে ফল দেওয়া তাঁরই হাতে। ভরসা হাত গুটিয়ে নিতে বলে না; বরং হাতকে স্থির রাখে, আর সামনে দাঁড়ানো কান্ডটার দিকে হাত বাড়াতে দেয়।"
          }
        ]
      }
    ]
  },
  "19:31": {
    "sections": [
      {
        "h": {
          "en": "Whose He Is First",
          "bn": "প্রথম পরিচয়: আল্লাহর বান্দা"
        },
        "p": [
          {
            "en": "In 19:30 the child in the cradle answers his people with the plainest words a person can say about himself: indeed I am the servant of Allah. Ibn Kathir notes that the very first thing ʿĪsā (AS) uttered was a declaration of his Lord's honour and freedom from having any son, and an admission that he himself is a worshipper. Everything in 19:31 then continues that same self-portrait. It is not a claim of rank but a servant's account of what has been done with him.",
            "bn": "১৯:৩০ আয়াতে কোলের শিশু ঈসা (আঃ) তাঁর কওমের জবাবে নিজের সম্পর্কে সবচেয়ে সোজা কথাটি বলেন: আমি তো আল্লাহর বান্দা। ইবন কাসীর ধরিয়ে দেন, ঈসা (আঃ) সবার আগে মুখে যা আনলেন তা হলো রবের মর্যাদার ঘোষণা, তিনি যে সন্তান থেকে পবিত্র সেই ঘোষণা, আর নিজে যে একজন ইবাদতকারী বান্দা সেই স্বীকৃতি। ১৯:৩১ আয়াতের প্রতিটি কথা সেই আত্মপরিচয়েরই ধারাবাহিকতা। এখানে কোনো মর্যাদার দাবি নেই। আছে এক বান্দার বিবরণ, আল্লাহ তাঁকে নিয়ে কী করেছেন।"
          },
          {
            "en": "Read the verse's verbs and see who acts in them. He made me blessed, jaʿalanī; He enjoined upon me, awṣānī. In each clause Allah is the subject and ʿĪsā (AS) is acted upon. A person who says he was made blessed did not bless himself, and whoever reports that he was enjoined to pray and give stands beneath a command rather than above it. The grammar of 19:31 is, from beginning to end, the grammar of a servant describing his Master and not himself.",
            "bn": "আয়াতের ক্রিয়াগুলো পড়ুন, দেখুন কে সেখানে কাজ করছেন। তিনি আমাকে বরকতময় করেছেন, জাআলানী; তিনি আমাকে হুকুম দিয়েছেন, আওসানী। প্রতিটি বাক্যে আল্লাহই কর্তা, আর ঈসা (আঃ) যাঁর উপর কাজটি হচ্ছে। যে বলে তাকে বরকতময় করা হয়েছে, সে নিজে নিজেকে বরকত দেয়নি। আর যে জানায় তাকে নামাজ ও যাকাতের হুকুম দেওয়া হয়েছে, সে হুকুমের উপরে নয়, নিচে দাঁড়িয়ে। ১৯:৩১ আয়াতের ভাষা গোড়া থেকে শেষ পর্যন্ত এমন এক বান্দার ভাষা, যে নিজের নয়, নিজের মালিকের কথা বলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Blessed In Every Place",
          "bn": "সবখানেই বরকতময়"
        },
        "p": [
          {
            "en": "The next words are mubārakan ayna mā kuntu: made blessed wherever I am. Al-Muyassar renders the sense simply, that Allah made him great in good and benefit wherever he is found. What is striking is the phrase wherever I am. The blessing is not fastened to a temple, a homeland, or a single favoured hour; it travels with the person. As-Saʿdī glosses ayna mā kuntu as in any place and any time, so that no location and no season falls outside the reach of the good he was made to carry.",
            "bn": "এরপরের কথা: মুবারাকান আইনা মা কুনতু, যেখানেই থাকি, তিনি আমাকে বরকতময় করেছেন। মুয়াসসার অর্থটা সহজ করে বলে: আল্লাহ তাঁকে কল্যাণ ও উপকারে বড় করেছেন, তিনি যেখানেই থাকুন। বিশেষ করে নজর কাড়ে 'যেখানেই থাকি' কথাটা। বরকত কোনো উপাসনালয়, কোনো জন্মভূমি বা কোনো বিশেষ মুহূর্তে বাঁধা নয়; মানুষটার সঙ্গে সঙ্গেই তা চলে। সাদী 'আইনা মা কুনতু'-এর ব্যাখ্যা করেন: যেকোনো জায়গায়, যেকোনো সময়ে। অর্থাৎ এমন কোনো স্থান বা কাল নেই, যেখানে তাঁকে দেওয়া কল্যাণের নাগাল পৌঁছায় না।"
          },
          {
            "en": "So what is this blessing for? As-Saʿdī draws the picture outward: everyone who sat with him or met him attained his blessing, and whoever kept his company was made happy by it. That turns barakah from a private honour into something that reaches other people. It is not a warmth he keeps for himself but a good that others pick up merely by being near him. A blessed person, on this reading, is someone whose presence leaves the people around him better than it found them.",
            "bn": "তাহলে এই বরকত কীসের জন্য? সাদী ছবিটা আরও বড় করে দেখান: যে-ই তাঁর সঙ্গে বসেছে বা তাঁর দেখা পেয়েছে, সে-ই তাঁর বরকত পেয়েছে; যে তাঁর সঙ্গ পেয়েছে, সে তাতে সুখী হয়েছে। এতে বরকত আর কারও একার সম্মান থাকে না, তা অন্য মানুষের কাছেও পৌঁছে যায়। এটা এমন উষ্ণতা নয় যা তিনি নিজের কাছে জমিয়ে রাখেন; এ এমন কল্যাণ, যা কেবল কাছে থাকলেই অন্যরা পেয়ে যায়। এই ব্যাখ্যায় বরকতময় মানুষ তিনিই, যাঁর সংস্পর্শে এসে চারপাশের মানুষ আগের চেয়ে ভালো হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What The Blessing Was",
          "bn": "বরকত আসলে কী"
        },
        "p": [
          {
            "en": "At-Tabari records that the commentators differed over what this blessing was. One reading he transmits from Mujahid is that it means naffāʿan, one of great benefit to others. Another, which at-Tabari also carries from Mujahid and from Sufyan, is that Allah made him muʿalliman li'l-khayr, a teacher of good, wherever he went. Already the accounts pull in the same direction: whatever else it means, the blessing is something ʿĪsā (AS) does for the people he is among, not a comfort he enjoys apart from them.",
            "bn": "তাবারী জানান, এই বরকত কী ছিল তা নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। মুজাহিদ থেকে তিনি একটি ব্যাখ্যা আনেন: এর অর্থ নাফফাআন, অর্থাৎ অন্যের জন্য খুব উপকারী। আরেকটি ব্যাখ্যাও তাবারী মুজাহিদ ও সুফইয়ান থেকে আনেন: আল্লাহ তাঁকে বানিয়েছেন মুআল্লিমান লিল-খাইর, কল্যাণের শিক্ষক, যেখানেই তিনি যান। এখানেই বোঝা যায়, বর্ণনাগুলো একই দিকে যাচ্ছে। অর্থ আর যা-ই হোক, এই বরকত এমন কিছু যা ঈসা (আঃ) আশপাশের মানুষের জন্য করেন; তাদের থেকে আলাদা হয়ে একা ভোগ করার কোনো আরাম নয়।"
          },
          {
            "en": "A further reading is stronger still. At-Tabari and Ibn Kathir both carry a report through Wuhayb ibn al-Ward that his blessing was commanding good and forbidding evil, which the report calls the very religion of Allah that He sent His prophets with to His servants. On this reading the scholars, it says, agreed in understanding the verse, and when asked what his blessing was the answer came back: commanding good and forbidding evil, wherever he was. The blessing is thus tied directly to the work of calling people toward what is right.",
            "bn": "আরেকটি ব্যাখ্যা আরও জোরালো। তাবারী ও ইবন কাসীর দুজনেই ওহাইব ইবনুল ওয়ারদের সূত্রে একটি বর্ণনা এনেছেন: তাঁর বরকত ছিল সৎকাজের আদেশ আর অসৎকাজে নিষেধ। বর্ণনায় একে বলা হয়েছে আল্লাহরই দ্বীন, যা দিয়ে তিনি নবীদের তাঁর বান্দাদের কাছে পাঠিয়েছেন। বর্ণনাটি আরও বলে, আলিমরা আয়াতটির এই অর্থেই একমত ছিলেন। তাঁর বরকত কী ছিল, জিজ্ঞেস করা হলে জবাব আসত: সৎকাজের আদেশ আর অসৎকাজে নিষেধ, যেখানেই তিনি থাকুন। তাই বরকত সরাসরি জুড়ে আছে মানুষকে ভালোর দিকে ডাকার কাজের সঙ্গে।"
          },
          {
            "en": "Al-Qurtubi gathers the strands: he was made one of blessings and benefits in the religion, in calling toward it, and in teaching it, and he cites at-Tustarī that ʿĪsā would command good, forbid evil, guide the astray, help the wronged, and aid the distressed. As-Saʿdī reads the barakah as teaching good and calling to Allah in word and deed, and al-Baghawi adds ʿAṭāʾ's gloss that he calls people to Allah, to His oneness and His worship. Not one of them makes the blessing a private privilege; every reading turns it outward, toward others.",
            "bn": "কুরতুবী সুতোগুলো একসঙ্গে গোছান, তাঁকে বানানো হয়েছে দ্বীনের বরকত ও উপকারে ভরা একজন, দ্বীনের দিকে ডাকায় আর তা শেখানোয়। তিনি তুসতারীর উক্তি আনেন যে ঈসা সৎকাজের আদেশ দিতেন, অসৎকাজে বাধা দিতেন, পথহারাকে পথ দেখাতেন, মজলুমকে সাহায্য করতেন আর বিপন্নকে উদ্ধার করতেন। সাদী বরকতকে পড়েন কল্যাণ শেখানো আর কথায় ও কাজে আল্লাহর দিকে ডাকা হিসেবে। বাগভী জোড়েন আতার ব্যাখ্যা, তিনি মানুষকে ডাকেন আল্লাহর দিকে, তাঁর একত্ব ও তাঁর ইবাদতের দিকে। কেউই বরকতকে নিজের একার সম্মান বানান না, প্রতিটি ব্যাখ্যাই তা বাইরের দিকে, অন্যের দিকে ফেরায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Enjoined To Pray",
          "bn": "নামাজের হুকুম"
        },
        "p": [
          {
            "en": "The verse turns from what he was made to what he was told: wa awṣānī bi'ṣ-ṣalāti wa'z-zakāti, and He enjoined upon me prayer and zakāh. Ma'arif al-Qur'an points out that the verb awṣānī comes from waṣiyyah, which usually means to bequeath, but in the setting of an order it carries the force of an emphatic command, which is why it is rendered enjoined. ʿĪsā (AS) is reporting that Allah bound him to prayer and to almsgiving and pressed both upon him as duties to keep with care.",
            "bn": "আয়াত এবার তাঁকে কী বানানো হয়েছে সে কথা থেকে সরে আসে তাঁকে কী বলা হয়েছে সে কথায়: ওয়া আওসানী বিস-সালাতি ওয়াজ-জাকাতি, তিনি আমাকে নামাজ ও যাকাতের হুকুম দিয়েছেন। মাআরিফুল কুরআন ধরিয়ে দেয়, আওসানী ক্রিয়াটি এসেছে ওয়াসিয়্যাত থেকে, যার সাধারণ অর্থ অসিয়ত করা। কিন্তু আদেশের প্রসঙ্গে এলে শব্দটা জোরালো হুকুম বোঝায়, তাই অনুবাদে 'হুকুম দিয়েছেন'। ঈসা (আঃ) জানাচ্ছেন, আল্লাহ তাঁকে নামাজ আর দান-খয়রাতের সঙ্গে বেঁধে দিয়েছেন, আর দুটোকেই যত্নে পালন করার দায়িত্ব হিসেবে জোর দিয়ে তাঁর উপর দিয়েছেন।"
          },
          {
            "en": "Ma'arif adds that these two acts of worship, prayer and zakāh, were made obligatory in the law of every prophet from Ādam to the last of them, Muhammad ﷺ, though their details differed from code to code, and in the law given to ʿĪsā (AS) both were likewise made binding. At-Tabari explains the command over prayer as keeping to its limits and establishing it as it was prescribed for him. The point beneath the detail is quiet but firm: he is one who receives the command, not one who issues it.",
            "bn": "মাআরিফ আরও বলে, নামাজ ও যাকাত, এই দুই ইবাদত আদম থেকে শেষ নবী মুহাম্মদ ﷺ পর্যন্ত প্রত্যেক নবীর শরীয়তে ফরজ ছিল, যদিও শরীয়তভেদে খুঁটিনাটি আলাদা ছিল। ঈসা (আঃ)-কে দেওয়া শরীয়তেও দুটোই ফরজ ছিল। তাবারী নামাজের হুকুমের ব্যাখ্যা দেন এভাবে: তার সীমা মেনে চলা, আর যেভাবে তাঁর জন্য ফরজ করা হয়েছে সেভাবে কায়েম করা। খুঁটিনাটির আড়ালে কথাটা বলা হয়েছে নরম স্বরে, কিন্তু দৃঢ়ভাবে: তিনি হুকুম পান, হুকুম দেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings Of Zakāh",
          "bn": "যাকাতের দুই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "The word zakāh here divides the commentators, because ʿĪsā (AS) held no wealth. At-Tabari lays out two senses. One is zakāt al-māl, the due paid out of one's property. The other is a purification of the body from the filth of sins, so that the command becomes an order to abandon wrongdoing and shun disobedience. At-Tabari leans toward this second sense, reasoning that ʿĪsā is described as one who stored nothing for the morrow, so no wealth-tax would fall due on him, unless his prescribed zakāh was giving away all that exceeded his sustenance, which he allows as a sound reading too.",
            "bn": "এখানে যাকাত শব্দের অর্থ নিয়ে তাফসীরকারদের মত দুই ভাগ, কারণ ঈসা (আঃ)-এর কোনো সম্পদ ছিল না। তাবারী দুটি অর্থ তুলে ধরেন। একটি যাকাতুল-মাল, অর্থাৎ সম্পদ থেকে আদায় করা প্রাপ্য। অন্যটি গুনাহের ময়লা থেকে দেহকে পবিত্র রাখা; সে অর্থে হুকুমটা দাঁড়ায় অন্যায় ছেড়ে দেওয়া আর নাফরমানি থেকে দূরে থাকা। তাবারী দ্বিতীয় অর্থের দিকেই ঝোঁকেন। তাঁর যুক্তি: ঈসা আগামীকালের জন্য কিছুই জমিয়ে রাখতেন না, তাই সম্পদের যাকাত তাঁর উপর ফরজ হওয়ার কথা নয়। তবে তাঁর জন্য নির্ধারিত যাকাত যদি হয় খোরাকের বাইরে যা থাকে তার সবটা দান করে দেওয়া, তবে সেই ব্যাখ্যাকেও তিনি সঠিক বলে মানেন।"
          },
          {
            "en": "Ma'arif al-Qur'an holds instead to the plain sense of a charity on wealth. The rule of the niṣāb, it says, is general: whoever owns the threshold amount is liable, and this applied to ʿĪsā (AS) as well, so that whenever he owned that much he would pay, and if his wealth stayed below the threshold all his life he would never owe it, which sits at no odds with the ordinary law. Al-Baghawi keeps both doors open, glossing it as zakāh were I to have wealth, and also as increasing in good, while al-Qurtubi reads it as performing the two duties once he is able and answerable for them.",
            "bn": "মাআরিফুল কুরআন অবশ্য সম্পদের যাকাত, এই সোজা অর্থটাই ধরে থাকে। তার কথা: নিসাবের বিধান সবার জন্য। যে নিসাব পরিমাণ সম্পদের মালিক, তার উপরই যাকাত ফরজ, আর ঈসা (আঃ)-এর বেলায়ও তা-ই। যখনই তাঁর কাছে অতটা সম্পদ থাকত, তিনি যাকাত দিতেন; আর সারা জীবন সম্পদ নিসাবের নিচে থাকলে তাঁর উপর কখনো যাকাত আসত না। এতে সাধারণ বিধানের সঙ্গে কোনো বিরোধ নেই। বাগভী দুই দিকই খোলা রাখেন: এর অর্থ হতে পারে 'আমার সম্পদ থাকলে তার যাকাত', আবার হতে পারে 'কল্যাণে বেড়ে চলা'। আর কুরতুবীর ব্যাখ্যা: সামর্থ্য হলে এবং দায় বর্তালে এই দুই দায়িত্ব পালন করা।"
          },
          {
            "en": "It is worth letting this stay a disagreement rather than forcing it shut. Some read the zakāh as a due on property, real but conditional on his ever owning enough; others read it as a purity of the soul and a giving of surplus that does not wait on wealth at all. The verse itself does not settle between them, and neither reading needs the other to be wrong. What both hold in common is the thing that matters most here: ʿĪsā (AS) stands under an obligation to give, just as he stands under an obligation to pray.",
            "bn": "এই মতভেদকে জোর করে মিটিয়ে না ফেলে মতভেদ হিসেবেই থাকতে দেওয়া ভালো। কেউ যাকাত বলতে বোঝেন সম্পদের উপর প্রাপ্য, যা বাস্তব, তবে শর্ত হলো কখনো যথেষ্ট সম্পদের মালিক হওয়া। কেউ বোঝেন মনের পবিত্রতা আর প্রয়োজনের বাড়তিটুকু দান করে দেওয়া, যার জন্য সম্পদের অপেক্ষা করতে হয় না। আয়াত নিজে এর কোনোটার পক্ষে রায় দেয় না, আর একটা ঠিক হতে হলে অন্যটাকে ভুল হতে হয় না। দুই ব্যাখ্যার যেখানে মিল, এখানে সেটাই সবচেয়ে জরুরি: নামাজ পড়া যেমন ঈসা (আঃ)-এর দায়িত্ব, দান করাও তেমনি তাঁর দায়িত্ব।"
          }
        ]
      },
      {
        "h": {
          "en": "For As Long As I Live",
          "bn": "যতদিন আমি জীবিত থাকি"
        },
        "p": [
          {
            "en": "The clause mā dumtu ḥayyan sets the term of all this: as long as I remain alive. At-Tabari reads it as for as long as I am living and present in this world. Ma'arif al-Qur'an says the injunction of prayer and zakāh is thus forever, meaning for the whole of his life, and that the reference is plainly to life in this world, since these duties can only be discharged here. There is no season in which the servant is off duty; the command runs to the last breath and stops only there.",
            "bn": "মা দুমতু হাইয়্যান কথাটি এই সবকিছুর মেয়াদ বেঁধে দেয়: যতদিন আমি জীবিত থাকি। তাবারী এর অর্থ করেন: যতদিন আমি বেঁচে আছি, এই দুনিয়ায় আছি। মাআরিফুল কুরআন বলে, নামাজ ও যাকাতের এই হুকুম তাই চিরকালের, মানে তাঁর গোটা জীবনের জন্য। আর এখানে স্পষ্টতই দুনিয়ার জীবনের কথা বলা হচ্ছে, কারণ এই দায়িত্বগুলো কেবল এখানেই পালন করা যায়। বান্দার ছুটির কোনো মৌসুম নেই। হুকুম চলে শেষ নিঃশ্বাস পর্যন্ত, থামে কেবল সেখানেই।"
          },
          {
            "en": "Ibn Kathir sets this line beside Allah's word to the Prophet Muhammad ﷺ in 15:99, worship your Lord until the certainty comes to you, that is, until death. He then relates through Mālik ibn Anas that in telling ʿĪsā (AS) his duty would last until he died, Allah was informing him of what his whole affair would be, and Mālik calls this the firmest proof against those who deny Allah's decree, since a life of obedience foretold in the cradle could only be a life already known to Him who ordained it.",
            "bn": "ইবন কাসীর এই বাক্যকে রাখেন ১৫:৯৯ আয়াতে নবী মুহাম্মদ ﷺ-কে বলা আল্লাহর কথার পাশে, তোমার রবের ইবাদত করো যতক্ষণ না নিশ্চিত জিনিস তোমার কাছে আসে, অর্থাৎ মৃত্যু। এরপর তিনি মালিক ইবন আনাসের সূত্রে আনেন যে, ঈসা (আঃ)-কে মৃত্যু পর্যন্ত তাঁর দায়িত্ব থাকার কথা জানিয়ে আল্লাহ তাঁকে জানিয়ে দিয়েছেন তাঁর গোটা ভবিষ্যৎ কী হবে। মালিক একে বলেন আল্লাহর তাকদীর অস্বীকারকারীদের বিরুদ্ধে সবচেয়ে পোক্ত দলিল, কারণ কোলে থাকতেই যে আনুগত্যের জীবনের খবর দেওয়া হলো, তা কেবল সেই জীবনই হতে পারে যা এর নির্ধারণকারীর আগে থেকেই জানা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Narrations Behind It",
          "bn": "আয়াতের পেছনের বর্ণনা"
        },
        "p": [
          {
            "en": "It is worth being clear about what kind of material the readings above rest on. They reach us as athar, transmitted comments from early figures such as Mujahid, Sufyan ath-Thawrī, ʿAmr ibn Qays, Wuhayb ibn al-Ward, ʿAṭāʾ, and the report carried from Mālik, all preserved inside the tafsirs rather than as sayings of the Prophet ﷺ himself. In the commentaries consulted here, no sound Prophetic hadith is attached directly to 19:31; the verse's meaning rests on its own wording and on these transmitted explanations, and that is enough.",
            "bn": "উপরের ব্যাখ্যাগুলো কী ধরনের উৎসের উপর দাঁড়িয়ে, তা পরিষ্কার করে বলা দরকার। এগুলো 'আসার', অর্থাৎ পূর্বসূরিদের বর্ণিত মন্তব্য: মুজাহিদ, সুফইয়ান সাওরী, আমর ইবন কায়স, ওহাইব ইবনুল ওয়ারদ, আতা প্রমুখের কথা, আর মালিক থেকে আসা বর্ণনা। এ সবই সংরক্ষিত আছে তাফসীরের ভেতরে, নবী ﷺ-এর নিজের বাণী হিসেবে নয়। এখানে যেসব তাফসীর দেখা হয়েছে, তাতে ১৯:৩১ আয়াতের সঙ্গে সরাসরি জোড়া কোনো সহীহ মারফূ হাদিস নেই। আয়াতের অর্থ দাঁড়িয়ে আছে তার নিজের শব্দের উপর আর এই বর্ণিত ব্যাখ্যাগুলোর উপর, আর সেটুকুই যথেষ্ট।"
          },
          {
            "en": "Nor does 19:31 come with a reported occasion of revelation; it belongs to the flow of the cradle-speech that runs from 19:29 through the verses that follow, in which ʿĪsā (AS) answers the charge laid against his mother by testifying to what Allah has made him and enjoined upon him. The verses just after, 19:32 and 19:33, carry that same self-description forward, into dutifulness to his mother and the peace upon him at birth, death, and resurrection. Those belong to their own reflection; here it is enough to see that 19:31 is one link in a servant's unbroken testimony about himself.",
            "bn": "১৯:৩১ আয়াতের কোনো বর্ণিত শানে নুযূলও নেই। এটা কোলে থেকে দেওয়া সেই ভাষণের অংশ, যা ১৯:২৯ থেকে শুরু হয়ে পরের আয়াতগুলো জুড়ে চলে। সেখানে ঈসা (আঃ) তাঁর মায়ের বিরুদ্ধে তোলা অভিযোগের জবাব দেন সাক্ষ্য দিয়ে: আল্লাহ তাঁকে কী বানিয়েছেন আর কীসের হুকুম দিয়েছেন। ঠিক পরের দুই আয়াত, ১৯:৩২ ও ১৯:৩৩, সেই আত্মপরিচয়কে আরও এগিয়ে নেয়: মায়ের প্রতি সদাচার, আর জন্ম, মৃত্যু ও পুনরুত্থানের দিনে তাঁর উপর শান্তি। সেগুলোর আলোচনা আলাদা। এখানে এটুকু দেখাই যথেষ্ট যে এক বান্দা নিজের সম্পর্কে যে টানা সাক্ষ্য দিয়ে চলেছেন, ১৯:৩১ তারই একটি অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Servant, Never Lord",
          "bn": "বান্দা, প্রভু নন"
        },
        "p": [
          {
            "en": "Gather the whole verse now and hear whose testimony it is. He made me blessed; He enjoined upon me prayer and zakāh; the term of it is my life. In every clause the speaker is acted upon, and Allah is the actor. Ibn Kathir puts it directly: the first thing ʿĪsā (AS) said, in 19:30, was to declare his Lord's honour and his own servanthood. A being who receives his blessing and his commands from another is, by his own account, a servant of that other, and nothing higher.",
            "bn": "এবার গোটা আয়াত একসঙ্গে ধরুন, আর শুনুন এটা কার সাক্ষ্য। তিনি আমাকে বরকতময় করেছেন; তিনি আমাকে নামাজ ও যাকাতের হুকুম দিয়েছেন; এর মেয়াদ আমার জীবন। প্রতিটি বাক্যে কাজ করছেন আল্লাহ, আর যিনি কথা বলছেন, কাজটা হচ্ছে তাঁর উপর। ইবন কাসীর সোজাসুজি বলেন, ১৯:৩০ আয়াতে ঈসা (আঃ) সবার আগে যা বললেন, তা হলো রবের মর্যাদার ঘোষণা আর নিজে বান্দা হওয়ার স্বীকৃতি। বরকত আর হুকুম, দুটোই যিনি অন্যের কাছ থেকে পান, তিনি নিজের কথাতেই সেই দাতার বান্দা, এর চেয়ে উঁচু কিছু নন।"
          },
          {
            "en": "So the very verse that a later tradition would raise ʿĪsā (AS) above his station on is, in his own mouth, his clearest word that he is a creature of Allah, blessed because Allah blessed him and bound because Allah bound him. It is said not in dispute but gently, by a prophet honoured above almost every creature, pointing away from himself toward Him whom he serves. The reader is simply asked to take him as he described himself. And that is where our own share opens: to be, like him, a servant who leaves good in every place and keeps the standing order to pray and give until death.",
            "bn": "পরবর্তী কালের এক ধারা যে আয়াতকে ধরে ঈসা (আঃ)-কে তাঁর মর্যাদার উপরে তুলতে চায়, সেই আয়াতই তাঁর নিজের মুখে সবচেয়ে স্পষ্ট ঘোষণা যে তিনি আল্লাহর এক সৃষ্টি। তিনি বরকতময়, কারণ আল্লাহ তাঁকে বরকত দিয়েছেন; তিনি দায়বদ্ধ, কারণ আল্লাহ তাঁকে দায়িত্বে বেঁধেছেন। কথাটা তিনি তর্কের সুরে বলেননি, বলেছেন নরম করে। সৃষ্টির প্রায় সবার উপরে সম্মান পাওয়া এক নবী নিজের দিক থেকে চোখ সরিয়ে ইশারা করছেন তাঁর দিকে, যাঁর তিনি ইবাদত করেন। পাঠকের কাছে চাওয়া শুধু এটুকু: তিনি নিজের যে পরিচয় দিয়েছেন, তাঁকে সেভাবেই মানা। আর এখানেই আমাদের নিজেদের ভাগের কথা আসে: তাঁর মতো বান্দা হওয়া, যে প্রতিটি জায়গায় কল্যাণ রেখে যায়, আর মৃত্যু পর্যন্ত নামাজ ও দানের স্থায়ী হুকুম আঁকড়ে থাকে।"
          }
        ]
      }
    ]
  },
  "19:37": {
    "sections": [
      {
        "h": {
          "en": "After the Clear Word",
          "bn": "স্পষ্ট কথার পরেই"
        },
        "p": [
          {
            "en": "The verse opens on a single connecting letter, faʾ: then, and so. What sits before it is the plainest possible word about ʿĪsā (AS), spoken in his own voice in 19:36 — Allah is my Lord and your Lord, so worship Him; this is a straight path. Ibn Kathir reads faktalafa al-aḥzāb as the People of the Book differing about ʿĪsā after his affair had been made clear and his situation laid bare. As-Sa'di frames it the same way: the dispute came after the clarity, not before it.",
            "bn": "আয়াতটি শুরু হয় একটিমাত্র সংযোগ-অক্ষর দিয়ে, 'ফা', অর্থাৎ অতঃপর, তখন। এর ঠিক আগে আছে ঈসা (আঃ)-কে নিয়ে সবচেয়ে স্পষ্ট কথাটি, যা ১৯:৩৬ আয়াতে তিনি নিজের মুখে বলেছেন: আল্লাহই আমার ও তোমাদের রব, কাজেই তাঁরই ইবাদাত করো, এটাই সোজা পথ। ইবন কাসীর ‘ফাখতালাফাল আহযাব’-এর অর্থ করেন: ঈসার ব্যাপারটা স্পষ্ট হয়ে যাওয়ার পর, তাঁর অবস্থা খোলাসা হওয়ার পরও আহলে কিতাব তাঁকে নিয়ে মতভেদ করল। সাদীও একই কথা বলেন: বিতর্কটা এসেছে স্পষ্টতার পরে, আগে নয়।"
          },
          {
            "en": "This placement carries its own argument. Sūrah Maryam has walked through ʿĪsā's birth, his speech from the cradle, his confession of servanthood, and then, in 19:35, the flat denial that Allah takes a son. Only after all of that does the differing begin. The disagreement is not the fumbling of people who were never told; it is a turning from a matter already settled in front of them. That is why the woe that follows lands on a particular failure, not on honest confusion.",
            "bn": "আয়াতের এই জায়গাটাই একটা যুক্তি। সূরা মারইয়াম একে একে বলে এসেছে ঈসার জন্ম, দোলনা থেকে তাঁর কথা বলা, নিজে বান্দা হওয়ার স্বীকৃতি, তারপর ১৯:৩৫ আয়াতে সাফ ঘোষণা যে আল্লাহ সন্তান গ্রহণ করেন না। এত কিছুর পরেই মতভেদ শুরু। এ মতভেদ এমন লোকদের হাতড়ানো নয়, যাদের কখনো কিছু বলা হয়নি; এ হলো চোখের সামনে মীমাংসা হয়ে যাওয়া বিষয় থেকে মুখ ফিরিয়ে নেওয়া। তাই পরের ধ্বংসবাণী পড়ে একটা নির্দিষ্ট ব্যর্থতার উপর, সরল মনের বিভ্রান্তির উপর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who The Factions Were",
          "bn": "দলগুলো কারা ছিল"
        },
        "p": [
          {
            "en": "The word is al-aḥzāb, the parties or factions. At-Tabari carries from Mujahid the plain gloss that they are the People of the Book. Al-Muyassar and as-Sa'di read them the same way, as the sects of the People of the Book, Jews and Christians; as-Sa'di widens it to the factions of misguidance of every class. Al-Baghawi narrows the reference to the Christians in particular, calling them aḥzāb because they had broken into three parties over ʿĪsā — the Nasṭūriyya, the Malkāniyya and the Yaʿqūbiyya.",
            "bn": "শব্দটা ‘আল-আহযাব’, দল বা পক্ষ। তাবারী মুজাহিদের সূত্রে সাদামাটা অর্থ দেন: এরা আহলে কিতাব। মুয়াসসার আর সাদীও একইভাবে পড়েন, আহলে কিতাবের বিভিন্ন দল, ইহুদি ও নাসারা; সাদী একে আরও বাড়িয়ে বলেন সব শ্রেণির গোমরাহ দল। বাগাভী অর্থটা সংকীর্ণ করে বিশেষভাবে নাসারাদের বোঝান, আর তাদের ‘আহযাব’ বলেন এ কারণে যে তারা ঈসাকে নিয়ে তিনটি দলে ভেঙে গিয়েছিল: নাসতূরিয়া, মালকানিয়া আর ইয়াকূবিয়া।"
          },
          {
            "en": "Al-Qurtubi preserves a second reading, and it is worth keeping as a genuine difference rather than smoothing it away. Where most of the commentators take al-aḥzāb as the ancient sects who split over ʿĪsā, Ibn ʿAbbas is reported to have understood the parties as those who banded together against the Prophet ﷺ and denied him, from among the idolaters of his own day. The two readings are not reconciled here; the wording carries both, and this article follows the majority reading while noting that Ibn ʿAbbas read it otherwise.",
            "bn": "কুরতুবী দ্বিতীয় একটা পাঠও ধরে রাখেন, আর সেটাকে সত্যিকার মতপার্থক্য হিসেবেই রাখা ভালো, চেপে যাওয়া নয়। অধিকাংশ তাফসীরকার যেখানে ‘আল-আহযাব’ বোঝেন সেই পুরনো দলগুলো যারা ঈসাকে নিয়ে ভাগ হয়েছিল, সেখানে ইবন আব্বাস থেকে বর্ণিত আছে যে তিনি এই দল বলতে বুঝতেন তাদের, যারা নবী ﷺ-এর বিরুদ্ধে জোট বেঁধেছিল আর তাঁকে অস্বীকার করেছিল, অর্থাৎ তাঁর যুগের মুশরিকদের। দুই পাঠকে এখানে মিলিয়ে ফেলা হয়নি। আয়াতের শব্দ দুটোকেই ধারণ করে; আলোচনা অধিকাংশের পাঠ অনুসরণ করছে, তবে ইবন আব্বাসের ভিন্ন পাঠটাও উল্লেখ থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Opposite Extremes",
          "bn": "দুই বিপরীত প্রান্ত"
        },
        "p": [
          {
            "en": "The commentators agree on the shape of the error before its content: it ran to two opposite edges. Al-Qurtubi puts it in a balanced pair: the Christians went to excess, the Jews fell short. Ma'arif al-Qur'an describes the same two extremes: one side exalted ʿĪsā until they called him the son of Allah, the other denigrated him. As-Sa'di sorts every faction as going beyond bounds or falling away. Truth, in each telling, was the narrow ground both sides had abandoned.",
            "bn": "ভুলটার বিষয়বস্তুতে যাওয়ার আগে তার ধরন নিয়ে তাফসীরকারেরা একমত: ভুলটা গেছে দুই বিপরীত প্রান্তে। কুরতুবী কথাটা বলেন সুষম এক জোড়ায়: নাসারা বাড়াবাড়ি করল, ইহুদি কমতি করল। মাআরিফুল কুরআনও একই দুই প্রান্তের কথা বলে: একদল ঈসাকে এত উপরে তুলল যে তাঁকে আল্লাহর সন্তান বলে বসল, আরেক দল তাঁকে হেয় করল। সাদী প্রতিটি দলকে এই দুইয়ের কোনো একটিতে ফেলেন: হয় সীমা ছাড়িয়েছে, নয়তো ঘাটতি করেছে। প্রতিটি বর্ণনাতেই সত্য ছিল মাঝখানের সেই সরু জমি, যা দুই পক্ষই ছেড়ে গিয়েছিল।"
          },
          {
            "en": "On the side of excess, the reports line up three positions, listed alike by al-Muyassar, as-Sa'di and Ibn Kathir: some said ʿĪsā was Allah, some the son of Allah, some the third of three — al-Muyassar breaking off to add, exalted is Allah above what they say. Al-Qurtubi and al-Baghawi attach the three to named parties: the Yaʿqūbiyya said he was Allah, the Nasṭūriyya his son, the Malkāniyya one of three. Three doors out of one truth, each opened by going too far.",
            "bn": "বাড়াবাড়ির দিকে বর্ণনাগুলো তিনটি অবস্থান সাজিয়ে দেয়। মুয়াসসার, সাদী আর ইবন কাসীর প্রত্যেকে গুনে বলেন: কেউ বলল ঈসাই আল্লাহ, কেউ বলল তিনি আল্লাহর সন্তান, কেউ বলল তিনি তিনজনের একজন; মুয়াসসার এখানে থেমে যোগ করেন, তারা যা বলে আল্লাহ তার থেকে অনেক ঊর্ধ্বে। কুরতুবী আর বাগাভী এই তিনটিকে নির্দিষ্ট দলের সঙ্গে জোড়েন: ইয়াকূবিয়া বলত তিনি আল্লাহ, নাসতূরিয়া বলত তিনি আল্লাহর সন্তান, আর মালকানিয়া বলত তিনি তিনজনের একজন। এক সত্য থেকে বেরোনোর তিনটি দরজা, প্রতিটি খোলা হয়েছিল বাড়াবাড়ি করে।"
          },
          {
            "en": "On the side of deficiency, the same sources report the opposite. Al-Muyassar has this faction call ʿĪsā a sorcerer and the son of Yūsuf the carpenter. Ibn Kathir and as-Sa'di report a group that branded him a child of adultery, dismissing his speech from the cradle as mere magic. These were the ancient factions' positions, and the Qur'an has already answered them: 19:34 calls ʿĪsā the word of truth, and 19:35 that no son befits Allah at all. The excess and the insult are two ways of missing the same servant.",
            "bn": "ঘাটতির দিকে একই সূত্রগুলো উল্টো কথা বর্ণনা করে। মুয়াসসারের বর্ণনায় এই দল ঈসাকে জাদুকর বলে, আর বলে তিনি কাঠমিস্ত্রি ইউসুফের ছেলে। ইবন কাসীর আর সাদী এমন একদলের কথা বলেন, যারা তাঁকে ব্যভিচারের সন্তান বলে দাগিয়ে দিল, আর দোলনা থেকে তাঁর কথা বলাকে নিছক জাদু বলে উড়িয়ে দিল। এগুলো সেই পুরনো দলগুলোর অবস্থান, আর কুরআন আগেই এর জবাব দিয়ে রেখেছে: ১৯:৩৪ ঈসাকে বলে সত্য কথা, আর ১৯:৩৫ বলে, সন্তান গ্রহণ আল্লাহর শানে মোটেই শোভা পায় না। বাড়াবাড়ি আর অপমান, দুটোই একই বান্দাকে চিনতে ভুল করার দুই পথ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Four Who Were Asked",
          "bn": "প্রশ্ন করা হলো চারজনকে"
        },
        "p": [
          {
            "en": "At-Tabari and Ibn Kathir both carry a longer narration from Qatādah, opened with the guarded it was mentioned to us. After ʿĪsā was raised up, the Children of Israel picked four of their scholars and asked each in turn what he said about ʿĪsā. The first answered that he was Allah, come to earth, giving life and dealing death, then risen; a body of people followed him. The other three declared him a liar. The scene is not abstract theology; it is a bench of scholars breaking apart one answer at a time.",
            "bn": "তাবারী আর ইবন কাসীর দুজনেই কাতাদার সূত্রে একটি দীর্ঘ বর্ণনা আনেন, যা শুরু হয় সাবধানী ভাষায়: আমাদের কাছে উল্লেখ করা হয়েছে। বর্ণনায় আছে, ঈসাকে তুলে নেওয়ার পর বনী ইসরাঈল তাদের চারজন আলেমকে বেছে নিল, আর একে একে প্রত্যেককে জিজ্ঞেস করল: ঈসার ব্যাপারে তুমি কী বলো? প্রথমজন বলল, তিনি আল্লাহ; যমীনে নেমে এসেছিলেন, জীবন দিয়েছেন, মৃত্যু দিয়েছেন, তারপর আবার উপরে উঠে গেছেন। একদল মানুষ তার অনুসারী হলো। বাকি তিনজন তাকে মিথ্যুক বলল। এটা কোনো বিমূর্ত তত্ত্বকথা নয়; এ যেন আলেমদের এক মজলিস, একেকটা জবাবের সঙ্গে সঙ্গে যা টুকরো টুকরো হয়ে যাচ্ছে।"
          },
          {
            "en": "The second scholar said ʿĪsā was the son of Allah and gathered a following; the third said that ʿĪsā, his mother and Allah were three gods, and gathered a third party. Only the fourth held that ʿĪsā was the servant of Allah and His messenger, His word and a spirit from Him. He argued from the plainest facts, that ʿĪsā ate and slept while Allah does neither, and in the report the true believers held the ground. At-Tabari adds that the factions then came to blows, and reads Āl ʿImrān 3:21, on killing those who enjoin justice, as revealed about it.",
            "bn": "দ্বিতীয় আলেম বলল, ঈসা আল্লাহর সন্তান, আর সে নিজের অনুসারী জোটাল। তৃতীয়জন বলল, ঈসা, তাঁর মা আর আল্লাহ, এই তিনজনই উপাস্য; সে-ও তৃতীয় একটা দল জোটাল। কেবল চতুর্থজন অটল রইল যে ঈসা আল্লাহর বান্দা ও তাঁর রাসূল, তাঁর কালেমা এবং তাঁর কাছ থেকে আসা এক রূহ। সে যুক্তি দিল সবচেয়ে সাদামাটা সত্য দিয়ে: ঈসা খেতেন, ঘুমাতেন, অথচ আল্লাহ এর কোনোটাই করেন না। বর্ণনামতে খাঁটি মুমিনরাই শেষে টিকে রইল। তাবারী যোগ করেন, এরপর দলগুলোর মধ্যে মারামারি বাধল; আর আলে ইমরান ৩:২১ আয়াত, যেখানে ন্যায়ের আদেশদাতাদের হত্যার কথা আছে, তাঁর মতে এই ঘটনা নিয়েই নাজিল হয়েছে।"
          },
          {
            "en": "Two cautions keep this in proportion. The account is Qatādah's own telling, opened with it was mentioned to us, not a saying traced to the Prophet ﷺ; the commentators carry it to show how the sects hardened, not as a ruling. Ibn Kathir sets beside it what historians record of a great council gathered under Constantine, where thousands of bishops differed and only a few hundred settled on one creed that the ruler then backed. Whichever detail one weighs, the verse's own point stands above the history: clarity was given, and men still divided over it.",
            "bn": "দুটি সতর্কতা মনে রাখলে বর্ণনাটা তার ঠিক জায়গায় থাকে। এটা কাতাদার নিজের বর্ণনা, শুরু হয়েছে 'আমাদের কাছে উল্লেখ করা হয়েছে' বলে; নবী ﷺ পর্যন্ত পৌঁছানো কোনো হাদিস নয়। আর তাফসীরকারেরা এটা আনেন দলগুলো কীভাবে কট্টর হয়ে উঠল তা দেখাতে, কোনো বিধান হিসেবে নয়। ইবন কাসীর এর পাশে রাখেন ঐতিহাসিকদের বর্ণনা: কনস্টানটাইনের আমলে ডাকা এক বিশাল সভা, যেখানে হাজার হাজার পাদ্রি মতভেদ করল, আর মাত্র কয়েকশো জন একটি আকীদায় একমত হলো, যাকে পরে শাসক সমর্থন দিল। খুঁটিনাটি যেভাবেই বিচার করা হোক, আয়াতের মূল কথা ইতিহাসের উপরে: স্পষ্ট করে বলে দেওয়া হয়েছিল, তবু মানুষ তা নিয়ে ভাগ হয়ে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Statement Of Truth",
          "bn": "সত্য কথাটি"
        },
        "p": [
          {
            "en": "Set against the three excesses and the one insult, the sources name a single position as true. Ibn Kathir states it directly: ʿĪsā is the servant of Allah, His messenger, His word that He cast to Maryam and a spirit from Him; this, he writes, is the statement of truth Allah guided the believers to. He reports the same from ʿAmr b. Maymūn, Ibn Jurayj and Qatādah. It answers 19:34, where ʿĪsā is the word of truth they dispute; the quarrel of 19:37 is the dispute that verse foretold.",
            "bn": "তিনটি বাড়াবাড়ি আর একটি অপমানের বিপরীতে সূত্রগুলো একটিমাত্র অবস্থানকে সত্য বলে চিহ্নিত করে। ইবন কাসীর সরাসরি বলেন: ঈসা আল্লাহর বান্দা, তাঁর রাসূল, তাঁর কালেমা যা তিনি মারইয়ামের কাছে পাঠিয়েছেন, এবং তাঁর কাছ থেকে আসা এক রূহ। তিনি লেখেন, এটাই সেই সত্য কথা, যার দিকে আল্লাহ মুমিনদের পথ দেখিয়েছেন। একই কথা তিনি আমর ইবন মাইমূন, ইবন জুরাইজ আর কাতাদা থেকেও বর্ণনা করেন। এটা ১৯:৩৪ আয়াতের সঙ্গে মিলে যায়, যেখানে ঈসাকে বলা হয়েছে সেই সত্য কথা, যা নিয়ে তারা বিতর্ক করে। ১৯:৩৭-এর বিবাদ সেই বিবাদই, যার কথা ঐ আয়াত আগেই জানিয়ে রেখেছিল।"
          },
          {
            "en": "The true statement is powerful precisely because it sits between the two edges. It neither lifts ʿĪsā to godhood nor drags him to fraud; it holds him at the exact rank he claimed one verse earlier, a servant who worships his Lord. Ma'arif al-Qur'an, following al-Qurtubi, notes a reading of 19:34 in which the word of truth describes ʿĪsā himself, titled the word of Allah, since he came to be by Allah's word without an ordinary cause. To honour him rightly is to keep him where he placed himself.",
            "bn": "সত্য কথাটা এ কারণেই শক্তিশালী যে তা দুই কিনারার ঠিক মাঝখানে দাঁড়ায়। এটা ঈসাকে খোদায়ীতে তোলে না, আবার জালিয়াতিতেও নামায় না; বরং এক আয়াত আগে তিনি নিজের জন্য যে মর্যাদা দাবি করেছিলেন সেখানেই তাঁকে রাখে, এক বান্দা যিনি তাঁর রবের ইবাদাত করেন। মাআরিফুল কুরআন, কুরতুবীকে অনুসরণ করে, ১৯:৩৪ আয়াতের একটি পাঠের কথা বলে যেখানে ‘সত্য কথা’ ঈসাকেই বোঝায়, যেমন তাঁকে ‘আল্লাহর কালেমা’ বলা হয়, কারণ তিনি কোনো সাধারণ কারণ ছাড়াই আল্লাহর কথায় অস্তিত্বে এসেছেন। তাঁকে যথাযথ সম্মান দেওয়ার অর্থ তাঁকে সেখানেই রাখা, যেখানে তিনি নিজেকে রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What The Sound Report Fixes",
          "bn": "সহীহ হাদিস যা পাকা করে দেয়"
        },
        "p": [
          {
            "en": "Ibn Kathir ends on a sound narration that fixes the true statement in the Prophet's ﷺ own words: Sahih al-Bukhari 3435, from ʿUbādah b. aṣ-Ṣāmit (RA), who reported that the Prophet ﷺ said: whoever testifies that there is no god but Allah alone, with no partner, that Muhammad is His slave and messenger, and that ʿĪsā is the slave of Allah and His messenger and His word which He cast to Maryam and a spirit from Him, and that Paradise is true and the Fire is true, Allah will admit him into Paradise, whatever his deeds. Graded sound in Bukhari's Sahih.",
            "bn": "ইবন কাসীর আলোচনা শেষ করেন একটি সহীহ বর্ণনা দিয়ে, যা সত্য কথাটাকে নবী ﷺ-এর নিজের ভাষায় পাকা করে দেয়। হাদিসটি সহীহ বুখারীর ৩৪৩৫ নম্বর, উবাদা ইবনুস সামিত (রাঃ) থেকে বর্ণিত। নবী ﷺ বলেছেন: যে সাক্ষ্য দেয় যে আল্লাহ ছাড়া কোনো সত্য উপাস্য নেই, তিনি একক, তাঁর কোনো শরিক নেই; মুহাম্মদ তাঁর বান্দা ও রাসূল; ঈসা আল্লাহর বান্দা ও তাঁর রাসূল, তাঁর কালেমা যা তিনি মারইয়ামের কাছে পৌঁছে দিয়েছেন, এবং তাঁর কাছ থেকে আসা এক রূহ; জান্নাত সত্য, জাহান্নাম সত্য; তার আমল যেমনই হোক, আল্লাহ তাকে জান্নাতে প্রবেশ করাবেন। সহীহ বুখারীতে হাদিসটির মান: সহীহ।"
          },
          {
            "en": "The narration earns its place twice over. First, it repeats almost word for word the position the sources drew from the verse: ʿĪsā as slave, messenger, the word cast to Maryam and a spirit from Him; the sects had wandered from exactly this. Second, it binds that creed to the Hereafter, making belief in a real Paradise and Fire part of the same testimony. That is the ground 19:37 stands on: its woe is not settled here but on a Day, and the Prophet ﷺ ties the true word about ʿĪsā to that very reckoning.",
            "bn": "বর্ণনাটা দুই কারণে এখানে আসার যোগ্য। প্রথমত, সূত্রগুলো আয়াত থেকে যে অবস্থান বের করেছিল, এটা প্রায় হুবহু সেটাই বলে: ঈসা বান্দা, রাসূল, মারইয়ামের কাছে পাঠানো কালেমা আর তাঁর কাছ থেকে আসা রূহ। দলগুলো ঠিক এখান থেকেই সরে গিয়েছিল। দ্বিতীয়ত, এটা সেই আকীদাকে আখিরাতের সঙ্গে বেঁধে দেয়: সত্যিকার জান্নাত আর জাহান্নামে বিশ্বাসও একই সাক্ষ্যের অংশ। ১৯:৩৭ এর উপরই দাঁড়িয়ে। আয়াতে যে ধ্বংসের কথা, তার ফয়সালা এই দুনিয়ায় নয়, হবে সেই মহাদিনে। আর নবী ﷺ ঈসা সম্পর্কে সত্য কথাটাকে ঠিক সেই হিসাবের দিনের সঙ্গেই জুড়ে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Scene Of That Day",
          "bn": "সেই দিনের দৃশ্য"
        },
        "p": [
          {
            "en": "The threat turns on a single scene: min mashhadi yawmin ʿaẓīm, from the scene of a tremendous Day. At-Tabari explains wayl as the valley of Jahannam that bears that name, promised to those who disbelieved — among them those who claim Allah has a son — arising from their witnessing a Day whose matter is immense, and that Day, he says, is the Resurrection. Qatādah, whom he quotes, glosses it simply: they witnessed a tremendous terror. Al-Baghawi and the others agree that the Day meant is the Day of Standing.",
            "bn": "হুমকিটা ঘোরে একটিমাত্র দৃশ্য ঘিরে: মিন মাশহাদি ইয়াওমিন আযীম, এক ভয়াবহ দিনের দৃশ্য থেকে। তাবারী বলেন, 'ওয়াইল' জাহান্নামের এক উপত্যকার নাম। কাফিরদের জন্য তা নির্ধারিত, আর আল্লাহর সন্তান আছে বলে যারা দাবি করে, তারাও তাদের মধ্যে। এই দুর্ভোগ আসবে এমন এক দিনের সাক্ষী হওয়ার কারণে, যার ব্যাপার বিরাট; আর সেই দিন, তাবারীর ভাষায়, কিয়ামতের দিন। কাতাদা, যাঁকে তিনি উদ্ধৃত করেন, সহজ করে বলেন: তারা এক বিরাট ভয়ংকর দৃশ্যের সাক্ষী হবে। বাগাভী ও অন্যরাও একমত যে এখানে দিন বলতে কিয়ামতের দিনই বোঝানো হয়েছে।"
          },
          {
            "en": "Al-Qurtubi turns the word mashhad over three ways. Read as a verbal noun, it is the disbelievers' attendance at the Resurrection, the woe of being made to stand there. Read as a place, it is the ground the whole creation is gathered to witness, like the maḥshar. And he offers a third, sharper sense: woe to them from the great assembly they once gathered in, the council where they agreed together on disbelief, saying that Allah was the third of three. On that reading, the very meeting where the doctrine was fixed becomes part of the charge.",
            "bn": "কুরতুবী ‘মাশহাদ’ শব্দটাকে তিনভাবে উল্টেপাল্টে দেখেন। ক্রিয়ামূল হিসেবে পড়লে এটা কিয়ামতের দিনে কাফিরদের নিজেদের উপস্থিতি, আর ধ্বংস আসে তাদের সেখানে দাঁড় করানো থেকে। স্থান হিসেবে পড়লে এটা সেই জমি যেখানে গোটা সৃষ্টিকে সাক্ষী করতে জড়ো করা হয়, যেমন হাশরের ময়দানে সবাইকে হাঁকিয়ে আনা হয়। আর তিনি তৃতীয় একটি ধারালো অর্থ দেন: ধ্বংস তাদের জন্য সেই বড় সমাবেশ থেকে, যেখানে তারা একদিন জড়ো হয়েছিল, যে মজলিসে পরামর্শ করে তারা একসঙ্গে কুফরিতে একমত হয়েছিল, বলেছিল আল্লাহ তিনজনের একজন। এই পাঠে, যে বৈঠকে আকীদাটা পাকা হলো, সেটাই অভিযোগের অংশ হয়ে যায়।"
          },
          {
            "en": "As-Sa'di dwells on why the Day is called tremendous. It is the scene the first and the last are brought to, the people of heaven and earth, the Creator and every creature; filled with quaking and terror, carrying the settling of accounts. On that Day, he writes, what people hid and what they showed are at last laid open. The doctrine argued over in secret councils and public creeds does not stay a matter of opinion; it is carried to a place where every claim is finally seen for what it was.",
            "bn": "এই দিনকে কেন ভয়াবহ বলা হলো, সাদী সে কথায় একটু থামেন। এটা সেই দৃশ্য, যেখানে আগের ও পরের সবাইকে হাজির করা হবে, আসমান ও যমীনের অধিবাসী সবাই, স্রষ্টা ও প্রতিটি সৃষ্টি। দিনটি কম্পন আর আতঙ্কে ভরা, আর সেদিনই হবে আমলের হিসাব-নিকাশ। তিনি লেখেন, সেই দিন মানুষ যা লুকিয়ে রেখেছিল আর যা প্রকাশ করেছিল, সবই শেষমেশ খুলে যাবে। গোপন মজলিসে আর প্রকাশ্য আকীদায় যে মতবাদ নিয়ে এত তর্ক, তা আর মতামতের বিষয় থাকবে না। তা পৌঁছাবে এমন জায়গায়, যেখানে প্রতিটি দাবির আসল চেহারা শেষ পর্যন্ত দেখা যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What The Woe Does Not License",
          "bn": "এই ধ্বংসবাণী যার অনুমতি দেয় না"
        },
        "p": [
          {
            "en": "This must be said plainly. This verse describes a doctrinal error, the ancient sects splitting into factions over the nature of ʿĪsā (AS), as the commentators reported it. It licenses nothing against any living person or community, and hands no one today a verdict over his neighbour. The woe is Allah's to pronounce, tied not to any earthly quarrel but to a tremendous Day where He alone judges. To read the verse as a warrant for contempt toward a people is to misread it exactly as the factions misread ʿĪsā, by dragging a clear word somewhere it never went.",
            "bn": "একটা কথা সাফ বলে রাখা দরকার। এই আয়াত একটি আকীদাগত ভুলের বর্ণনা দেয়: তাফসীরকারদের বর্ণনামতে, ঈসা (আঃ)-এর প্রকৃতি নিয়ে পুরনো দলগুলোর ভাগ ভাগ হয়ে যাওয়া। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটা কোনো কিছুরই অনুমতি দেয় না, আর কাউকে প্রতিবেশীর উপর রায় দেওয়ার অধিকারও দেয় না। ধ্বংসবাণী উচ্চারণ করার এখতিয়ার আল্লাহর। তিনি একে বেঁধেছেন দুনিয়ার কোনো বিবাদের সঙ্গে নয়, এক ভয়াবহ দিনের সঙ্গে, যেখানে বিচার করবেন কেবল তিনিই। এই আয়াতকে কোনো জাতিকে তুচ্ছ করার ছাড়পত্র বানানো মানে আয়াতটাকে ঠিক সেভাবেই ভুল পড়া, যেভাবে দলগুলো ঈসাকে ভুল বুঝেছিল: স্পষ্ট একটা কথাকে টেনে এমন জায়গায় নেওয়া, যেখানে তা কখনো যায়নি।"
          },
          {
            "en": "The verse also holds up a mirror, because the drift it describes is a human habit, not a dead one. A clear word is spoken; and instead of bending to it, people sort themselves into camps and then read the word through the camp. The cure is the one the fourth man reached for: to keep to the plainest facts and the plainest speech, and to let them, not our loyalties, decide. ʿĪsā (AS) placed himself as a servant on a straight path. To honour that word as it stands, over any side we have already chosen, is the whole burden of the verse.",
            "bn": "আয়াতটা আমাদের সামনে একটা আয়নাও ধরে, কারণ যে বিচ্যুতির কথা এটা বলে, তা মানুষের চিরকালের অভ্যাস, অতীতের মরা কোনো ঘটনা নয়। স্পষ্ট একটা কথা বলা হয়; আর তার সামনে মাথা নোয়ানোর বদলে মানুষ দলে দলে ভাগ হয়ে যায়, তারপর কথাটাকে পড়ে নিজের দলের চোখ দিয়ে। এর প্রতিকার সেটাই, যা চতুর্থ লোকটি ধরেছিল: সবচেয়ে সাদামাটা তথ্য আর সবচেয়ে সাফ কথা আঁকড়ে থাকা, আর ফয়সালার ভার নিজের পক্ষপাতকে নয়, সেগুলোকেই দেওয়া। ঈসা (আঃ) নিজেকে রেখেছিলেন সোজা পথের উপর এক বান্দা হিসেবে। আমরা আগে থেকে যে পক্ষই বেছে নিয়ে থাকি না কেন, তার উপরে সেই কথাকে যেমন আছে তেমনই মেনে নেওয়া, এটাই এ আয়াতের পুরো দাবি।"
          }
        ]
      }
    ]
  },
  "19:49": {
    "sections": [
      {
        "h": {
          "en": "The Answer After the Argument",
          "bn": "তর্কের পরের জবাব"
        },
        "p": [
          {
            "en": "Just before this, Ibrahim's father had answered his son's gentle call with a threat: desist, or I will stone you, and keep away from me for a long while. Ibrahim (AS) replied with a greeting of peace and a promise to seek forgiveness for him, then said he would withdraw from them all and call upon his own Lord instead, in the hope that calling on Him he would not be left wretched. Ma'arif al-Qur'an reads that closing hope as a quiet prayer, a plea that Allah would not abandon him to loneliness once he had walked away from his house and his family.",
            "bn": "এ আয়াতের ঠিক আগেই ইবরাহীম (আঃ)-এর বাবা ছেলের নরম ডাকের জবাব দিয়েছিল হুমকি দিয়ে: থামো, নইলে আমি তোমাকে পাথর মেরে মারব, আর অনেক দিনের জন্য আমার কাছ থেকে দূরে থাকো। ইবরাহীম (আঃ) জবাবে সালাম জানালেন, বাবার জন্য ক্ষমা চাওয়ার ওয়াদা করলেন, তারপর বললেন তিনি তাদের সবাইকে ছেড়ে সরে যাবেন আর তার বদলে নিজের রবকেই ডাকবেন, এই আশায় যে তাঁকে ডেকে তিনি বঞ্চিত হবেন না। মাআরিফুল কুরআন এই শেষ আশাটুকুকে পড়ে এক নীরব দোয়া হিসেবে, ঘর আর পরিবার ছেড়ে আসার পর আল্লাহ যেন তাঁকে একাকীত্বে ফেলে না রাখেন, সেই মিনতি হিসেবে।"
          },
          {
            "en": "This verse is the answer to that prayer, and the voice changes to deliver it. In the previous line Ibrahim (AS) is the speaker: I will withdraw from you. Here it is Allah who speaks about him: so when he had withdrawn from them, We gave him. The opening word, fa-lamma, so when, ties the two halves together like a cause and its consequence. Ma'arif al-Qur'an says the sentence describes the very manner in which his hope was granted. He had feared being left alone, and the reply names exactly what came in to fill the emptiness.",
            "bn": "এই আয়াত সেই দোয়ারই জবাব, আর জবাব দিতে গিয়ে কণ্ঠ বদলে যায়। আগের লাইনে বলছেন ইবরাহীম (আঃ): আমি আপনাদের ছেড়ে সরে যাব। এখানে আল্লাহ তাঁর সম্পর্কে বলছেন: অতঃপর সে যখন তাদের ছেড়ে সরে গেল, আমি তাকে দান করলাম। শুরুর শব্দ ফালাম্মা, অর্থাৎ অতঃপর যখন, দুই দিককে জুড়ে দেয় কারণ আর ফলের মতো করে। মাআরিফুল কুরআন বলে, বাক্যটি ঠিক সেই ধরনটাই দেখিয়ে দেয় যেভাবে তাঁর আশা পূরণ হলো। তিনি একা পড়ে থাকার ভয় করছিলেন, আর জবাব ধরিয়ে দেয় কী এসে সেই শূন্যতা ভরল।"
          }
        ]
      },
      {
        "h": {
          "en": "Leaving Them and Their Idols",
          "bn": "তাদের ও তাদের মূর্তি ছেড়ে"
        },
        "p": [
          {
            "en": "What did the withdrawal include? At-Tabari fills it in: when Ibrahim withdrew from his people and from the worship of the idols they served besides Allah. Al-Muyassar keeps both objects in view, saying that he parted from them and from their gods, the ones they worshipped in place of Allah. The leaving, then, was not only of persons. It was of persons and of a whole apparatus of false worship at once, the family he loved and the religion he could no longer share bound up so tightly that to keep one he had to let go of the other.",
            "bn": "সরে যাওয়ার মধ্যে কী কী ছিল? তাবারী বিষয়টা খুলে বলেন: ইবরাহীম (আঃ) সরে গেলেন তাঁর কওম থেকে, আর আল্লাহকে বাদ দিয়ে তারা যেসব মূর্তির ইবাদত করত, সেই ইবাদত থেকে। মুয়াসসারও দুটো দিকই সামনে রাখেন: তিনি তাদের ছেড়ে গেলেন, ছেড়ে গেলেন তাদের সেই উপাস্যদেরও, আল্লাহর বদলে যাদের তারা পূজা করত। অর্থাৎ শুধু কিছু মানুষকে ছাড়া নয়। একসঙ্গে ছাড়তে হলো মানুষগুলোকে আর মিথ্যা উপাসনার গোটা ব্যবস্থাটাকে। যে পরিবারকে তিনি ভালোবাসতেন, আর যে ধর্মে তিনি আর তাদের সঙ্গী হতে পারছিলেন না, দুটো এমন শক্ত করে জড়ানো ছিল যে একটাকে রাখতে গেলে অন্যটাকে ছাড়তেই হতো।"
          },
          {
            "en": "This was iʿtizal, a deliberate stepping aside for the sake of faith, not a falling-out over property or wounded pride. Ibrahim (AS) had brought his father knowledge and warning and had been met with rejection and the threat of stones. Withdrawing was the last move left to a man set on keeping his religion when the people nearest to him would not keep it with him. Yet he did not curse them as he went. The verse just before shows him leaving with a greeting of peace on his lips and a prayer still there for the very father who had driven him away.",
            "bn": "এ ছিল ইতিযাল, ঈমানের খাতিরে ইচ্ছে করে সরে দাঁড়ানো, সম্পত্তি বা আহত অহংকার নিয়ে ঝগড়া নয়। ইবরাহীম (আঃ) বাবার কাছে এনেছিলেন জ্ঞান আর সতর্কবার্তা, বিনিময়ে পেয়েছিলেন প্রত্যাখ্যান আর পাথরের হুমকি। কাছের মানুষগুলো যখন তাঁর সঙ্গে ধর্ম রাখল না, তখন ধর্ম আঁকড়ে রাখতে চাওয়া মানুষটার হাতে সরে যাওয়া ছাড়া আর কিছু বাকি ছিল না। তবু যাওয়ার সময় তিনি তাদের অভিশাপ দেননি। ঠিক আগের আয়াতই দেখায়, তিনি বেরিয়ে যাচ্ছেন ঠোঁটে সালাম নিয়ে, আর যে বাবা তাঁকে তাড়িয়ে দিল তার জন্য তখনো দোয়া রেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Left For Allah",
          "bn": "আল্লাহর জন্য যা ছাড়া হয়"
        },
        "p": [
          {
            "en": "Before he names the gift, as-Sa'di pauses on the cost. Leaving one's homeland, one's familiar surroundings, one's family and one's people, he writes, is among the hardest things the soul can bear, for many well-known reasons. Among them is that a person is cut off from the very people through whom he feels strong and by whom his numbers are swelled. To walk away alone is to give up not merely a place but the whole sense of standing backed by a crowd. That is the weight this verse is about to lift off him.",
            "bn": "দানের কথায় যাওয়ার আগে সা'দী একটু থামেন, এই ছেড়ে আসার দাম কত চড়া তা নিয়ে। তিনি লেখেন, নিজের দেশ, চেনা পরিবেশ, পরিবার আর কওম ছেড়ে যাওয়া মানুষের মনের পক্ষে সবচেয়ে কঠিন কাজগুলোর একটি, আর এর পেছনে বহু জানা কারণ আছে। তার একটি হলো, মানুষ তখন সেই আপনজনদের থেকে বিচ্ছিন্ন হয়ে পড়ে, যাদের নিয়ে সে নিজেকে শক্তিশালী মনে করে, যাদের কারণে তার দল ভারী হয়। একা বেরিয়ে পড়া মানে কেবল একটা জায়গা ছাড়া নয়; পেছনে লোকবল আছে, এই ভরসাটুকুও ছেড়ে দেওয়া। এ আয়াত এখন তাঁর কাঁধ থেকে ঠিক এই বোঝাটাই নামিয়ে দিতে চলেছে।"
          },
          {
            "en": "Then as-Sa'di states the rule the whole story turns on: whoever leaves a thing for the sake of Allah, Allah replaces it for him with something better than it. Ibrahim (AS) had left his people, so Allah gave him a family. Ma'arif al-Qur'an makes the same point plainly: when Ibrahim left his home, his family and their idols, Allah rewarded him with a son to make up for what he had lost, and it was revealed that this son would live long and himself father a son. The loss was real, and the compensation was just as real.",
            "bn": "তারপর সা'দী সেই নিয়মটা বলেন, গোটা কাহিনি যার উপর ঘোরে: যে আল্লাহর জন্য কিছু ছাড়ে, আল্লাহ তাকে তার বদলে আরও ভালো কিছু দেন। ইবরাহীম (আঃ) কওম ছেড়েছিলেন, তাই আল্লাহ তাঁকে দিলেন এক পরিবার। মাআরিফুল কুরআনও সোজা ভাষায় একই কথা বলে: ইবরাহীম (আঃ) যখন ঘর, পরিবার আর তাদের মূর্তিগুলো ছেড়ে এলেন, তখন তিনি যা হারিয়েছিলেন তা পুষিয়ে দিতে আল্লাহ তাঁকে এক পুত্র দিলেন। সেই সঙ্গে জানিয়ে দেওয়া হলো, এই পুত্র দীর্ঘ আয়ু পাবেন, আর নিজেও এক পুত্রের বাবা হবেন। হারানোটা যেমন সত্যি ছিল, পুষিয়ে দেওয়াটাও ঠিক ততটাই সত্যি।"
          },
          {
            "en": "Notice the shape of this exchange. Ibrahim (AS) gave up what he could see and hold, a household already gathered around him, for the sake of a Lord he could not see at all. What came back to him was not paid in the same coin but in a far better one: not the household he had left, which had turned against him, but a household of prophets who would carry his faith forward through the ages. The verse does not promise that every loss is repaid in kind. It promises the thing under the story: that nothing handed over to Allah is ever handed into nothing.",
            "bn": "এই লেনদেনের ধরনটা খেয়াল করুন। যা চোখে দেখা যায়, হাতে ধরা যায়, ইবরাহীম (আঃ) তা ছেড়েছিলেন: চারপাশে গড়ে ওঠা নিজের সংসার। ছেড়েছিলেন এমন এক রবের জন্য, যাঁকে চোখে দেখাই যায় না। বদলে তিনি যা পেলেন, তা একই জিনিসে শোধ নয়, তার চেয়ে অনেক বড় কিছু। যে পরিবার তাঁর বিরুদ্ধে দাঁড়িয়েছিল সেটা ফেরত নয়, বরং নবীদের এক পরিবার, যাঁরা যুগ যুগ ধরে তাঁর ঈমান বয়ে নিয়ে যাবেন। আয়াত এমন কথা দেয় না যে প্রতিটি ক্ষতি একই জিনিসে পূরণ হবে। আয়াতের ওয়াদা কাহিনির গভীরের কথাটা: আল্লাহর হাতে যা তুলে দেওয়া হয়, তা কখনো বৃথা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Consoling the Solitude",
          "bn": "একাকীত্বে সান্ত্বনা"
        },
        "p": [
          {
            "en": "The commentators dwell on the tenderness inside the reward. At-Tabari says that Allah consoled his loneliness at being parted from them, and gave him in their place those who were better and nobler in Allah's sight. Al-Baghawi echoes it: We consoled his loneliness and gladdened his eye with children honoured before Allah. Both read the gift not as a bare making-up of numbers but as a healing of the particular wound the leaving had opened, the ache of a man suddenly left without any of his own around him.",
            "bn": "এই প্রতিদানের ভেতরে যে কোমলতা আছে, তাফসীরকারেরা সেখানে থামেন। তাবারী বলেন, কওম থেকে বিচ্ছিন্ন হওয়ার একাকীত্বে আল্লাহ তাঁকে সান্ত্বনা দিলেন, আর তাদের জায়গায় দিলেন এমন মানুষ, যাঁরা আল্লাহর কাছে তাদের চেয়ে ভালো আর বেশি সম্মানিত। বাগভীও একই সুরে বলেন: আমি তাঁর একাকীত্বে সান্ত্বনা দিলাম আর আল্লাহর কাছে সম্মানিত সন্তান দিয়ে তাঁর চোখ জুড়ালাম। দুজনের কাছেই এই দান শুধু সংখ্যা পূরণ নয়। ছেড়ে আসার ফলে যে বিশেষ ক্ষতটা তৈরি হয়েছিল, এ দান সেটাকে সারিয়ে তোলা: হঠাৎ আপন কেউ পাশে না থাকার যে যন্ত্রণা, তার উপশম।"
          },
          {
            "en": "Al-Qurtubi carries a narration to the same effect, reported from Ibn Abbas and others: Allah consoled his loneliness with a child. It is a small phrase, but it fixes the meaning of the whole verse. The gift was measured out to the size of the loss. Ibrahim (AS) had lost the company of a father and of a people; what he was handed first was company again, a son, and then that son's son, so that the house left empty by his faith began at once to fill with a faith of its own.",
            "bn": "কুরতুবী একই অর্থের একটি বর্ণনা আনেন, ইবন আব্বাস ও অন্যদের থেকে বর্ণিত: আল্লাহ এক সন্তান দিয়ে তাঁর একাকীত্বে সান্ত্বনা দিলেন। কথাটা ছোট, তবে গোটা আয়াতের মানে এটাই ঠিক করে দেয়। দান মাপা হয়েছিল ক্ষতির মাপ ধরে। ইবরাহীম (আঃ) হারিয়েছিলেন এক বাবা আর এক কওমের সঙ্গ। তাঁকে প্রথমে যা দেওয়া হলো তা আবার সেই সঙ্গ, এক পুত্র, তারপর সেই পুত্রের পুত্র, যাতে ঈমানের কারণে খালি হয়ে যাওয়া ঘর সঙ্গে সঙ্গে নিজের ঈমানে ভরতে শুরু করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Isaac and Jacob",
          "bn": "কেন ইসহাক ও ইয়াকুব"
        },
        "p": [
          {
            "en": "One name is missing here, and it is worth pausing over. Ismail (AS), Ibrahim's firstborn, is not mentioned in this verse; he is honoured on his own a few lines later, at 19:54. Why name Ishaq and Yaʿqub and leave him out? Al-Baghawi points to the timing of the gift. Ibrahim, he says, went out as a migrant, and it was after that migration that Allah gave him Ishaq and Yaʿqub. The two named in this verse are, on Baghawi's reading, the children who came to him once he had already left.",
            "bn": "এখানে একটি নাম অনুপস্থিত, আর সেটার দিকে একটু থামা দরকার। ইসমাঈল (আঃ), ইবরাহীম (আঃ)-এর প্রথম সন্তান, এ আয়াতে নেই। তাঁকে আলাদা করে সম্মান দেওয়া হয়েছে কয়েক লাইন পরে, ১৯:৫৪ আয়াতে। তবে ইসহাক (আঃ) আর ইয়াকুব (আঃ)-এর নাম নিয়ে তাঁকে বাদ কেন? বাগভী দানের সময়ের দিকে ইঙ্গিত করেন। ইবরাহীম (আঃ), তিনি বলেন, বেরিয়ে গেলেন মুহাজির হয়ে, আর সেই হিজরতের পরেই আল্লাহ তাঁকে দিলেন ইসহাক (আঃ) আর ইয়াকুব (আঃ)-কে। এ আয়াতে নাম-নেওয়া দুজন, বাগভীর পড়ায়, সেই সন্তান যারা আগেই ছেড়ে আসার পরে তাঁর কাছে এসেছিল।"
          },
          {
            "en": "Ibn Kathir gives a second reason drawn from the wording itself. Allah mentioned only Ishaq and Yaʿqub here, he says, to show that He raised up prophets from among Ibrahim's own descendants and successors, and did so within Ibrahim's lifetime, so that his eyes were gladdened by them while he still lived. On this reading the two names are chosen to make a point about the line: prophethood did not merely follow Ibrahim (AS) at some distance in time, it was already running in his own house in his own days.",
            "bn": "ইবন কাসীর শব্দ থেকেই দ্বিতীয় একটি কারণ বের করেন। তিনি বলেন, আল্লাহ এখানে শুধু ইসহাক (আঃ) আর ইয়াকুব (আঃ)-এর নাম নিয়েছেন এটা দেখাতে যে তিনি ইবরাহীম (আঃ)-এর নিজের বংশধর ও উত্তরসূরিদের মধ্য থেকেই নবী তুলে এনেছেন, আর তা করেছেন ইবরাহীম (আঃ)-এর জীবদ্দশাতেই, যাতে বেঁচে থাকতেই তাঁদের দেখে তাঁর চোখ জুড়ায়। এই ব্যাখ্যায় নাম দুটো বেছে নেওয়া হয়েছে বংশধারা সম্পর্কে একটা কথা বোঝাতে: নবুয়ত ইবরাহীম (আঃ)-এর অনেক পরে কোনো এক সময় তাঁর বংশে এসেছে, ব্যাপারটা এমন নয়; তাঁর নিজের জীবদ্দশায়, তাঁর নিজের ঘরেই তা চালু হয়ে গিয়েছিল।"
          },
          {
            "en": "It is worth being exact about what the commentaries consulted here do and do not say. They explain the naming through the migration and through this lineage of prophethood arriving in Ibrahim's lifetime. They do not, in the texts consulted here, rest it on the point that Ismail was left in Makkah while Ishaq's line settled elsewhere. What can be said with confidence is only what they actually say: Ismail (AS) has his own place in the surah, and this verse is turned toward the two who came to Ibrahim after the leaving.",
            "bn": "এখানে যেসব তাফসীর দেখা হয়েছে, সেগুলো কী বলে আর কী বলে না, তা ঠিকঠাক বলা দরকার। সেগুলো নামকরণটা ব্যাখ্যা করে হিজরত দিয়ে, আর ইবরাহীম (আঃ)-এর জীবদ্দশায় নবুয়তের এই ধারা শুরু হওয়া দিয়ে। এই যুক্তির উপর সেগুলো ভর দেয় না যে ইসমাঈল (আঃ) মক্কায় থেকে গিয়েছিলেন আর ইসহাক (আঃ)-এর বংশ অন্যত্র থিতু হয়েছিল। নিশ্চিত করে কেবল ততটুকুই বলা যায়, যতটুকু তাফসীরগুলো আসলে বলে: সূরায় ইসমাঈল (আঃ)-এর নিজের আলাদা জায়গা আছে, আর এ আয়াতের নজর সেই দুজনের দিকে, যাঁরা ছেড়ে আসার পরে ইবরাহীম (আঃ)-এর কাছে এসেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Son and Grandson",
          "bn": "পুত্র ও পৌত্র"
        },
        "p": [
          {
            "en": "Who exactly are the two? Ibn Kathir spells out the relation: Ishaq is Ibrahim's son, and Yaʿqub is Ishaq's son, which makes Yaʿqub Ibrahim's grandson. He supports it from elsewhere in the Qur'an, where Yaʿqub is named as a grandson given over and above the son, in 21:72, and where the promise reads that after Ishaq there came Yaʿqub, in 11:71. So the single gift of this verse reaches across two generations at once, a son and, through that son, a grandson.",
            "bn": "এই দুজন আসলে কারা? ইবন কাসীর সম্পর্কটা খুলে বলেন: ইসহাক (আঃ) ইবরাহীম (আঃ)-এর পুত্র, আর ইয়াকুব (আঃ) ইসহাক (আঃ)-এর পুত্র, ফলে ইয়াকুব (আঃ) হলেন ইবরাহীম (আঃ)-এর পৌত্র। কুরআনের অন্য জায়গা থেকেও তিনি এর সমর্থন আনেন: ২১:৭২ আয়াতে ইয়াকুব (আঃ)-কে পুত্রের উপরি পাওনা হিসেবে পৌত্র বলে উল্লেখ করা হয়েছে, আর ১১:৭১ আয়াতের সুসংবাদে আছে, ইসহাক (আঃ)-এর পরে ইয়াকুব (আঃ)। তাই এ আয়াতের একটিমাত্র দান একসঙ্গে দুই প্রজন্ম ছুঁয়ে যায়: এক পুত্র, আর সেই পুত্রের মাধ্যমে এক পৌত্র।"
          },
          {
            "en": "Ibn Kathir adds that there is no disagreement at all that Ishaq is the father of Yaʿqub, and points to the plain text of the Qur'an in 2:133, where Yaʿqub, near death, gathers his sons and asks what they will worship after him, and they answer: the God of your fathers, Ibrahim and Ismail and Ishaq. The verse settles the family tree from Yaʿqub's own mouth, and with it the shape of the gift Ibrahim received. He was given not a single prophet but the head of a whole prophetic line.",
            "bn": "ইবন কাসীর আরও বলেন, ইসহাক (আঃ)-ই যে ইয়াকুব (আঃ)-এর বাবা, এতে কোনো মতভেদই নেই। তিনি দেখিয়ে দেন ২:১৩৩ আয়াতের স্পষ্ট বক্তব্য: মৃত্যুর সময় ঘনিয়ে এলে ইয়াকুব (আঃ) ছেলেদের ডেকে জিজ্ঞেস করেন, আমার পরে তোমরা কার ইবাদত করবে? তারা জবাব দেয়: আপনার পিতৃপুরুষ ইবরাহীম, ইসমাঈল আর ইসহাকের ইলাহের। ইয়াকুব (আঃ)-এর নিজের মুখেই এ আয়াত বংশধারাটা নিশ্চিত করে দেয়, আর সেই সঙ্গে ইবরাহীম (আঃ) যে দান পেয়েছিলেন তার রূপটাও। তিনি পেয়েছিলেন শুধু একজন নবী নয়, গোটা এক নবী-বংশের সূচনা।"
          }
        ]
      },
      {
        "h": {
          "en": "And Each a Prophet",
          "bn": "আর প্রত্যেকে নবী"
        },
        "p": [
          {
            "en": "Then the closing clause: wa kullan jaʿalna nabiyyan, and each of them We made a prophet. At-Tabari notices the grammar. Allah said nabiyyan, a prophet, in the singular, rather than anbiyaa, prophets, in the plural, because the word kull, each, is itself singular in form and governs what follows it. That small choice keeps the eye on them singly. It is not a crowd being labelled from a distance; it is each of them, on his own, raised to prophethood by name.",
            "bn": "তারপর শেষ অংশ: ওয়া কুল্লান জাআলনা নাবিয়্যা, আর তাদের প্রত্যেককে আমি নবী করলাম। তাবারী এখানকার ব্যাকরণ লক্ষ করেন। আল্লাহ বলেছেন নাবিয়্যান, একবচনে 'একজন নবী'; বহুবচনে আম্বিয়া, 'নবীগণ', বলেননি। কারণ কুল্ল, অর্থাৎ 'প্রত্যেক', শব্দটা নিজেই গঠনে একবচন, আর পরের শব্দকেও সেভাবেই চালায়। এই ছোট্ট বাছাইটুকু নজর রাখে প্রত্যেকের উপর আলাদা করে। দূর থেকে একটা দলের গায়ে নাম সেঁটে দেওয়া হচ্ছে না; প্রত্যেককে আলাদাভাবে, নাম ধরে, নবুয়তের মর্যাদায় তোলা হচ্ছে।"
          },
          {
            "en": "As-Sa'di draws out the honour in it. What Ibrahim received, he says, was the gift of these righteous ones, messengers sent to people, whom Allah singled out with His revelation, chose for His message, and selected out of all the worlds. Read against the opening of the same verse, the contrast is stark. A man walks away from his people carrying nothing, and what is placed in his hands in return is a lineage that Allah Himself picks out of the whole of creation to carry His word.",
            "bn": "সা'দী এখানে সম্মানের দিকটা খুলে দেখান। তিনি বলেন, ইবরাহীম (আঃ) পেয়েছিলেন এই নেককার মানুষদের দান: মানুষের কাছে পাঠানো রাসূল, যাঁদের আল্লাহ নিজের ওহি দিয়ে আলাদা করেছেন, নিজের রিসালাতের জন্য মনোনীত করেছেন, আর গোটা জগতের মধ্য থেকে বাছাই করেছেন। একই আয়াতের শুরুটার পাশে রেখে পড়লে তফাতটা চোখে লাগে। একজন মানুষ খালি হাতে নিজের কওম ছেড়ে চলে গেলেন, আর বদলে তাঁর হাতে এল এমন এক বংশধারা, যাকে আল্লাহ নিজে গোটা সৃষ্টির মধ্য থেকে বেছে নিয়েছেন তাঁর বাণী বহনের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Narration of the Line",
          "bn": "বংশধারার হাদিস"
        },
        "p": [
          {
            "en": "Ibn Kathir finds a further point in the clause. Had Yaʿqub not already been a prophet in Ibrahim's lifetime, he argues, the promise here would not have stopped at him; Yusuf, Yaʿqub's own son, was a prophet too, and yet he is not named in this verse. The naming of Ishaq and Yaʿqub alone, and the stopping there, is itself evidence that both of them were prophets within Ibrahim's own days. To seal the point, Ibn Kathir turns to a hadith about this very line of fathers and sons.",
            "bn": "এই অংশে ইবন কাসীর আরেকটা সূক্ষ্ম কথা খুঁজে পান। তাঁর যুক্তি: ইবরাহীম (আঃ)-এর জীবদ্দশাতেই যদি ইয়াকুব (আঃ) নবী না হতেন, তবে এখানকার ওয়াদা তাঁর কাছে এসে থামত না। ইয়াকুব (আঃ)-এর নিজের ছেলে ইউসুফ (আঃ)-ও তো নবী ছিলেন, অথচ এ আয়াতে তাঁর নাম নেই। শুধু ইসহাক (আঃ) আর ইয়াকুব (আঃ)-এর নাম নিয়ে সেখানেই থেমে যাওয়াটাই প্রমাণ করে যে দুজনেই ইবরাহীম (আঃ)-এর জীবদ্দশাতেই নবী ছিলেন। কথাটা পাকা করতে ইবন কাসীর বাবা-ছেলের এই ধারা নিয়ে একটি হাদিস আনেন।"
          },
          {
            "en": "The hadith is recorded in Sahih al-Bukhari, number 3353. Abu Huraira relates that the people asked, Messenger of Allah, who is the most honourable of people? He said, the most God-fearing of them. They said, this is not what we are asking you. He said: then Yusuf, the prophet of Allah, the son of the prophet of Allah, the son of the prophet of Allah, the son of the khalil of Allah, that is Yusuf son of Yaʿqub son of Ishaq son of Ibrahim. Ibn Kathir cites it as agreed upon between the two Shaykhs, and it is sound.",
            "bn": "হাদিসটি সহীহ বুখারীতে আছে, নম্বর ৩৩৫৩। আবু হুরায়রা (রাঃ) বর্ণনা করেন, লোকেরা জিজ্ঞেস করল, হে আল্লাহর রাসূল, মানুষের মধ্যে সবচেয়ে সম্মানিত কে? তিনি ﷺ বললেন, তাদের মধ্যে যে আল্লাহকে সবচেয়ে বেশি ভয় করে। তারা বলল, আমরা আপনাকে এ কথা জিজ্ঞেস করছি না। তিনি ﷺ বললেন: তাহলে ইউসুফ, আল্লাহর নবী, আল্লাহর নবীর পুত্র, আল্লাহর নবীর পুত্র, আল্লাহর খলিলের পুত্র; অর্থাৎ ইউসুফ ইবনে ইয়াকুব ইবনে ইসহাক ইবনে ইবরাহীম। ইবন কাসীর একে দুই শায়খের মুত্তাফাক আলাইহি হাদিস বলে উল্লেখ করেন, আর হাদিসটি সহীহ।"
          }
        ]
      }
    ]
  },
  "19:53": {
    "sections": [
      {
        "h": {
          "en": "After He Was Brought Near",
          "bn": "কাছে টেনে নেওয়ার পর"
        },
        "p": [
          {
            "en": "Surah Maryam moves like a roll-call of prophets, each one named and briefly praised. Just before this verse Moses (AS) is introduced: chosen, a messenger and a prophet, called from the right side of the mount and brought near for whispered speech (19:51 to 19:52). Ibn Kathir notes the ordering — after Abraham, the friend of God, the surah turns to al-Kalim, the one God spoke to directly. The listener naturally expects the account to continue with Moses himself. Instead the next line looks sideways, to someone standing beside him.",
            "bn": "সূরা মারইয়াম যেন নবীদের নাম ডেকে ডেকে এগোয়: একেকজনের নাম আসে, সঙ্গে দু-এক কথায় প্রশংসা। এ আয়াতের ঠিক আগে এসেছে মূসা (আঃ)-এর পরিচয়: তিনি মনোনীত, রাসূল ও নবী, তূর পাহাড়ের ডান দিক থেকে আল্লাহ তাঁকে ডেকেছেন আর একান্তে কথা বলার জন্য কাছে টেনে নিয়েছেন (১৯:৫১ ও ১৯:৫২)। ইবন কাসীর ক্রমটা ধরিয়ে দেন: আল্লাহর খলীল ইবরাহীম (আঃ)-এর পর সূরা আসে আল-কালীমের কথায়, যাঁর সঙ্গে আল্লাহ সরাসরি কথা বলেছেন। শ্রোতা স্বাভাবিকভাবেই ভাবে, এবার মূসা (আঃ)-কে নিয়েই কথা চলবে। অথচ পরের লাইনটা পাশ ফিরে তাকায়, তাঁর পাশে দাঁড়ানো একজনের দিকে।"
          },
          {
            "en": "That someone is his brother. The whole of verse 53 is seven words in Arabic: and We gave him, out of Our mercy, his brother Aaron, a prophet. It records no miracle of Moses, no sign before Pharaoh, no parting of a sea. It records a gift of company. In a passage crowded with a single man's honours, one whole line is spent on the man beside him, and on the fact that he too was made a prophet, not a mere assistant handed over for the errand.",
            "bn": "সেই একজন তাঁর ভাই। আরবিতে ৫৩ নম্বর আয়াতটি মাত্র সাত শব্দের: আর আমি নিজ রহমতে তাকে দান করলাম তার ভাই হারূনকে, নবী করে। এতে মূসার কোনো মুজিযার কথা নেই, ফেরাউনের সামনে কোনো নিদর্শনের কথা নেই, সাগর দুই ভাগ হওয়ার কথাও নেই। আছে শুধু একজন সঙ্গী দান করার কথা। যে অংশ একজন মানুষের সম্মানের বর্ণনায় ভরা, সেখানে পুরো একটা লাইন রাখা হলো তাঁর পাশের মানুষটির জন্য। আর জানিয়ে দেওয়া হলো, তিনিও নবী; কাজ সারার জন্য হাতে তুলে দেওয়া নিছক কোনো সহকারী নন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Brother, Given",
          "bn": "উপহার হয়ে আসা ভাই"
        },
        "p": [
          {
            "en": "The verb is wahabna, We gave, from the root of hiba, a gift. Ma'arif al-Qur'an, citing Mazhari, notes that hiba literally means a gift freely bestowed, and that because this very word is used here, Aaron (AS) came to be known as the Gift of God, hibatullah. Al-Baghawi makes the same connection: God answered Moses's prayer and sent Aaron, and for that reason He named him a gift to his brother. Aaron is not described as appointed or assigned. He is given.",
            "bn": "ক্রিয়াপদটি ওয়াহাবনা, অর্থাৎ আমি দান করলাম। এর মূলে আছে হিবা, মানে উপহার। মাআরিফুল কুরআন মাযহারীর বরাতে বলে, হিবার আক্ষরিক অর্থ খুশিমনে, বিনিময় ছাড়া দেওয়া দান। আর এখানে ঠিক এই শব্দটি এসেছে বলেই হারূন (আঃ) পরিচিত হলেন হিবাতুল্লাহ, অর্থাৎ আল্লাহর দান নামে। বাগাভীও একই সূত্র ধরেন: আল্লাহ মূসার দোয়া কবুল করে হারূনকে পাঠালেন, আর এ কারণেই তাঁকে ভাইয়ের জন্য দান বলে নাম দিলেন। হারূনকে নিয়োগ দেওয়া হয়েছে বা দায়িত্বে বসানো হয়েছে, এমন বলা হয়নি। তাঁকে দান করা হয়েছে।"
          },
          {
            "en": "The word also links this line to what came a few verses earlier. Of Abraham (AS) the surah had said, We gave him Isaac and Jacob, and each We made a prophet, and We gave them of Our mercy (19:49 to 19:50). The same generosity now reaches Moses. Where Abraham was given sons and grandsons, Moses is given a brother, his elder and now a partner in office. The gift is not always a new generation; sometimes it is the person already at your side, raised.",
            "bn": "এই শব্দটি এ লাইনকে কয়েক আয়াত আগের কথার সঙ্গেও জুড়ে দেয়। ইবরাহীম (আঃ) সম্পর্কে সূরা বলেছিল, আমি তাকে দান করলাম ইসহাক ও ইয়াকুব, প্রত্যেককে নবী করলাম, আর তাদের দিলাম আমার রহমত থেকে (১৯:৪৯ ও ১৯:৫০)। সেই একই দানশীলতা এবার মূসার কাছে পৌঁছাল। ইবরাহীম পেয়েছিলেন ছেলে ও নাতি; মূসা পেলেন একজন ভাই, বয়সে তাঁর চেয়ে বড়, আর এখন দায়িত্বেও অংশীদার। দান সবসময় নতুন প্রজন্ম হয়ে আসে না। কখনো তা আগে থেকেই আপনার পাশে থাকা মানুষটি, যাঁকে উপরে তুলে দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Out of His Mercy",
          "bn": "তাঁর রহমত থেকে"
        },
        "p": [
          {
            "en": "The gift is qualified by two words that are easy to read past: min rahmatina, out of Our mercy. The help Moses received is not filed under strategy or reward but under mercy. The same phrase had just described what Abraham's line was given (19:50), so the surah is deliberate: a supportive companion for a hard task is one of the forms that mercy takes. It is not softer than mercy, and not less than it. A helper, here, is the mercy itself.",
            "bn": "দানের সঙ্গে দুটি শব্দ জুড়ে আছে, যা পড়ার সময় সহজেই চোখ এড়িয়ে যায়: মিন রাহমাতিনা, আমার রহমত থেকে। মূসা যে সাহায্য পেলেন, তা কৌশল বা পুরস্কারের খাতায় লেখা হয়নি, লেখা হয়েছে রহমতের খাতায়। একটু আগে ইবরাহীমের বংশধরদের দান নিয়েও ঠিক এই কথাটাই এসেছে (১৯:৫০)। তাই সূরা বুঝেশুনেই বলছে: কঠিন কাজে পাশে দাঁড়ানো একজন সঙ্গী রহমতেরই একটা রূপ। সে রহমতের চেয়ে হালকা কিছু নয়, কমও নয়। এখানে সাহায্যকারী মানুষটিই রহমত।"
          },
          {
            "en": "This reframes how we might think of the people who carry things with us. We are used to counting mercy in rescue and provision, the danger averted, the need met. The verse adds another column. The brother who shoulders half the errand, the companion who confirms you when you fear being called a liar, is listed by God under the same heading as rain and forgiveness. To be given a good partner is to have been shown mercy, whether or not it ever felt like a gift.",
            "bn": "যারা আমাদের সঙ্গে বোঝা বয়ে চলে, তাদের নিয়ে এ আয়াত নতুন করে ভাবায়। রহমত আমরা সাধারণত গুনি বিপদ থেকে উদ্ধার আর রিজিকে: বিপদ কেটে গেল, অভাব মিটল। আয়াত এখানে আরেকটা খাত যোগ করে। যে ভাই কাজের অর্ধেক নিজের কাঁধে নেয়, লোকে মিথ্যুক বলবে এই ভয়ের সময় যে সঙ্গী আপনার কথার সত্যতা স্বীকার করে, আল্লাহ তাকে বৃষ্টি আর মাগফিরাতের সঙ্গে একই শিরোনামে রাখেন। একজন ভালো সঙ্গী পাওয়া মানেই রহমত পাওয়া, তা কখনো উপহার বলে মনে হোক বা না হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Helper He Prayed For",
          "bn": "যে সহযোগী তিনি চেয়েছিলেন"
        },
        "p": [
          {
            "en": "Aaron was not an unrequested surprise. Al-Qurtubi and al-Baghawi both tie this gift to Moses's own prayer: appoint for me a minister from my family, Aaron my brother (Ta-Ha 20:29 to 20:30). Moses had named the man he wanted and named the reason, a heavy tongue, a hard errand, a fear of being disbelieved. Al-Baghawi says God answered that supplication and sent Aaron, and this is precisely why the verse calls him a gift. The gift has the shape of the request.",
            "bn": "হারূন না-চাইতে আসা কোনো চমক ছিলেন না। কুরতুবী ও বাগাভী দুজনেই এ দানকে মূসার নিজের দোয়ার সঙ্গে জুড়ে দেন: আমার পরিবার থেকে আমার জন্য একজন সহকারী করে দিন, আমার ভাই হারূনকে (তা-হা ২০:২৯ ও ২০:৩০)। মূসা যাঁকে চান, তাঁর নাম বলেছিলেন, কারণও বলেছিলেন: জবানে জড়তা, দায়িত্ব কঠিন, আর ভয়, লোকে তাঁকে বিশ্বাস করবে না। বাগাভী বলেন, আল্লাহ সেই দোয়া কবুল করে হারূনকে পাঠালেন, আর ঠিক এ কারণেই আয়াত তাঁকে দান বলে। যা চাওয়া হয়েছিল, দানটা হুবহু তারই মাপে এসেছে।"
          },
          {
            "en": "Ibn Kathir gathers the other places where the same answer is recorded. In one, Moses says, my brother Aaron is more eloquent than me in speech, so send him with me as a helper who confirms me; I fear they will deny me (al-Qasas 28:34). In another, God replies, you have been granted your request, O Moses (Ta-Ha 20:36). In a third, Moses pleads, so send for Aaron, I fear they will kill me (ash-Shu'ara 26:13 to 26:14). The single line here is the granting of all of it.",
            "bn": "একই জবাব কুরআনের আর যেসব জায়গায় এসেছে, ইবন কাসীর সেগুলো এক জায়গায় করেন। এক জায়গায় মূসা বলেন, আমার ভাই হারূন আমার চেয়ে স্পষ্ট করে কথা বলতে পারে, তাই তাকে আমার সাহায্যকারী করে আমার সঙ্গে পাঠান, সে আমার কথার সত্যতা স্বীকার করবে; আমার ভয় হয়, তারা আমাকে মিথ্যাবাদী বলবে (আল-কাসাস ২৮:৩৪)। আরেক জায়গায় আল্লাহ জবাব দেন, হে মূসা, তোমার চাওয়া তোমাকে দেওয়া হলো (তা-হা ২০:৩৬)। তৃতীয় জায়গায় মূসা মিনতি করেন, তাই হারূনের কাছেও বার্তা পাঠান; আমার ভয় হয়, তারা আমাকে হত্যা করবে (আশ-শুআরা ২৬:১৩ ও ২৬:১৪)। এখানকার এক লাইনেই এর সবকিছু মঞ্জুর হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pleading for His Brother",
          "bn": "ভাইয়ের জন্য আরজি"
        },
        "p": [
          {
            "en": "There is something striking in what Moses asked for. He did not pray only for strength, or for the mission to be made lighter on himself. He prayed that his brother be raised, made a prophet alongside him, a sharer in the very office. Ibn Kathir reports that some of the early Muslims said no one in this world ever interceded for another with an intercession greater than Moses's plea for Aaron to be made a prophet. The ask was large, and it was for someone else.",
            "bn": "মূসা কী চেয়েছিলেন, সেখানে একটা ব্যাপার নজর কাড়ে। তিনি শুধু শক্তি চাননি, নিজের দায়িত্বটা হালকা করে দেওয়ার দোয়াও করেননি। তিনি চেয়েছেন তাঁর ভাইকে উপরে তোলা হোক, তাঁর পাশে নবী করা হোক, একই দায়িত্বের শরিক করা হোক। ইবন কাসীর জানান, সালাফদের কেউ কেউ বলেছেন: দুনিয়ায় কেউ কারও জন্য এর চেয়ে বড় সুপারিশ করেনি, যেমন সুপারিশ মূসা করেছিলেন হারূনকে নবী বানানোর জন্য। চাওয়াটা ছিল অনেক বড়, আর তা ছিল অন্য একজনের জন্য।"
          },
          {
            "en": "As-Sa'di reads the whole episode as among Moses's finest qualities, his goodness and his sincere counsel toward his brother. Moses wanted Aaron not beneath him but beside him, sharing his rank and his burden. It is a rare kind of ambition: to want the highest thing not for yourself alone but for the person nearest you, and then to press that request before God. The verse quietly praises whoever prays his brother upward rather than guarding the height for himself.",
            "bn": "সাদী গোটা ঘটনাটিকে পড়েন মূসার অন্যতম সেরা গুণ হিসেবে, ভাইয়ের প্রতি তাঁর ইহসান আর খাঁটি কল্যাণকামিতা। মূসা হারূনকে নিজের নিচে নয়, নিজের পাশে চেয়েছিলেন, তাঁর মর্যাদা আর বোঝা ভাগ করে নিতে। এ এক বিরল ধরনের আকাঙ্ক্ষা: সর্বোচ্চ জিনিসটা কেবল নিজের জন্য নয়, নিজের সবচেয়ে কাছের মানুষটির জন্যও চাওয়া, আর সে চাওয়া আল্লাহর সামনে পেশ করা। আয়াত চুপচাপ তাঁরই প্রশংসা করে, যিনি উচ্চতা আঁকড়ে না রেখে ভাইকেও উপরে ওঠার দোয়া করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Elder Who Followed",
          "bn": "বড় ভাই, তবু অনুগামী"
        },
        "p": [
          {
            "en": "A detail preserved by the commentators complicates the picture in a useful way. At-Tabari and Ibn Kathir both record, on the authority of Ibn Abbas, that Aaron was older than Moses. He was the elder brother, yet Moses is the one addressed, the one sent first, the one for whom Aaron is the gift and the helper. The narration adds that the meaning of the verse is that God granted Aaron his prophethood; the seniority of years did not decide the order of the mission.",
            "bn": "তাফসীরকারদের সংরক্ষিত একটি তথ্য ছবিটাকে একটু জটিল করে, আর সেই জটিলতা কাজেরই। তাবারী ও ইবন কাসীর দুজনেই ইবন আব্বাসের বরাতে লেখেন, হারূন বয়সে মূসার চেয়ে বড় ছিলেন। বড় ভাই তিনিই, তবু আল্লাহ সম্বোধন করেন মূসাকে, আগে পাঠান মূসাকেই, আর মূসার জন্যই হারূন দান ও সহায়। বর্ণনায় আরও আছে, আয়াতের অর্থ হলো আল্লাহ হারূনকে নবুওয়াত দান করলেন। কে আগে দায়িত্ব পাবেন, তা বয়সের জ্যেষ্ঠতা ঠিক করেনি।"
          },
          {
            "en": "The grading matters, so it is worth stating plainly. This is a saying of the companion Ibn Abbas, not a report from the Prophet ﷺ, and Ibn Kathir notes that Ibn Abi Hatim carried it with a suspended chain (mu'allaq). It is taken as an explanatory note, not as a binding proof. What the Qur'an itself asserts is only that Aaron was made a prophet out of mercy; the ages of the two brothers are the commentators' addition, offered to explain how the elder came to follow.",
            "bn": "বর্ণনাটির মান এখানে গুরুত্বপূর্ণ, তাই সোজাসুজি বলে রাখা ভালো। এটি সাহাবি ইবন আব্বাসের উক্তি, নবী ﷺ থেকে বর্ণিত কোনো হাদিস নয়। ইবন কাসীর জানান, ইবন আবী হাতিম এটি এনেছেন মুআল্লাক (ঝুলন্ত) সনদে। তাই একে ব্যাখ্যার সহায়ক টীকা হিসেবে নেওয়া হয়, চূড়ান্ত দলিল হিসেবে নয়। কুরআন নিজে শুধু এটুকু বলে যে হারূনকে রহমত করে নবী বানানো হয়েছিল। দুই ভাইয়ের বয়সের কথাটা তাফসীরকারদের যোগ করা, বড় ভাই কেন ছোট ভাইয়ের অনুগামী হলেন তা বোঝানোর জন্য।"
          },
          {
            "en": "As-Sa'di draws the relationship out: Aaron's prophethood, he says, is subordinate to Moses's, following it and supporting it, peace be upon them both. This does not shrink Aaron. He is a full prophet, addressed by God, entrusted with the people when Moses climbs the mountain. But the mission has one primary voice, and the older brother is content to strengthen it. Rank in this account is not measured by age, and being second in order is no diminishment when the cause is one.",
            "bn": "সাদী সম্পর্কটা খুলে বলেন: তাঁর ভাষায় হারূনের নবুওয়াত মূসার নবুওয়াতের অধীন, তার অনুগামী ও সহায়ক; তাঁদের দুজনের উপর শান্তি বর্ষিত হোক। এতে হারূন ছোট হয়ে যান না। তিনি পূর্ণ নবী, আল্লাহ তাঁকেও সম্বোধন করেছেন, আর মূসা যখন পাহাড়ে যান, তখন কওমের দায়িত্ব তাঁর হাতেই থাকে। তবু দাওয়াতের মূল কণ্ঠ একটাই, আর বড় ভাই সেই কণ্ঠকে শক্তি জোগাতে পেরেই খুশি। এখানে মর্যাদা বয়স দিয়ে মাপা হয় না। লক্ষ্য যখন এক, তখন ক্রমে দ্বিতীয় হওয়া কোনো হীনতা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent to Strengthen Him",
          "bn": "শক্তি জোগাতে পাঠানো"
        },
        "p": [
          {
            "en": "What was the gift for? The commentators answer with a cluster of near-synonyms. At-Tabari glosses the word prophet here as meaning God strengthened Moses with Aaron's prophethood and aided him by it. Al-Muyassar keeps the plain sense: We gave him his brother Aaron, a prophet, to support him and back him. As-Sa'di says Aaron helped Moses in his affair and assisted him upon it. The gift is not decorative; it is functional. Aaron is in this verse to make Moses stronger for what is coming.",
            "bn": "দানটা কীসের জন্য? তাফসীরকারেরা জবাব দেন কাছাকাছি অর্থের কয়েকটি শব্দে। তাবারী এখানে 'নবী' কথাটির ব্যাখ্যায় বলেন, আল্লাহ হারূনের নবুওয়াত দিয়ে মূসাকে শক্তি জোগালেন, তাঁকে সাহায্য করলেন। মুয়াসসার সরল অর্থটাই রাখে: আমি তাকে দান করলাম তার ভাই হারূনকে, নবী করে, যেন সে তার পাশে দাঁড়ায়, তাকে সমর্থন করে। সাদী বলেন, হারূন মূসার কাজে তাঁর সহযোগী ছিলেন, তাঁকে সাহায্য করতেন। দানটা শোভার জন্য নয়, কাজের জন্য। সামনে যা আসছে, তার জন্য মূসাকে শক্ত করতেই এ আয়াতে হারূনের উপস্থিতি।"
          },
          {
            "en": "This is worth sitting with. The mission to Pharaoh was among the hardest any prophet was sent on, and God's provision for it was not a weapon or a shield but a person, a brother. Someone to speak when Moses's tongue caught, to confirm him when he feared the lie, to share the weight of standing before a tyrant. Divine help often arrives wearing a human face. The answer to the impossible errand was another believer, made able and sent to stand at your shoulder.",
            "bn": "এখানে একটু থেমে ভাবা দরকার। ফেরাউনের কাছে যাওয়ার দায়িত্ব ছিল নবীদের পাওয়া সবচেয়ে কঠিন দায়িত্বগুলোর একটি। অথচ এর জন্য আল্লাহ যে ব্যবস্থা দিলেন, তা কোনো অস্ত্র বা ঢাল নয়, একজন মানুষ, একজন ভাই। মূসার জবান আটকে গেলে যে কথা বলবে, মিথ্যাবাদী বলার ভয় যখন চেপে ধরবে তখন যে তাঁর কথার সত্যতা স্বীকার করবে, জালিম শাসকের সামনে দাঁড়ানোর ভার যে ভাগ করে নেবে। আল্লাহর সাহায্য প্রায়ই আসে মানুষের চেহারা নিয়ে। অসম্ভব মনে হওয়া দায়িত্বের জবাব ছিল আরেকজন মুমিন, যাঁকে আল্লাহ যোগ্য করে আপনার কাঁধে কাঁধ মিলিয়ে দাঁড়াতে পাঠান।"
          }
        ]
      },
      {
        "h": {
          "en": "What Stands Behind the Verse",
          "bn": "আয়াতের পেছনে যা আছে"
        },
        "p": [
          {
            "en": "It is worth being honest about the sources. The commentaries on this verse rest on two things: the Qur'an's own cross-references, where Moses's prayer and its granting are recorded (Ta-Ha, al-Qasas and ash-Shu'ara), and the companion-report from Ibn Abbas about Aaron's age. None of the tafsirs consulted attaches a sound saying of the Prophet ﷺ directly to this verse, and there is no established occasion of revelation for it; it stands as part of the surah's ordered procession of prophets. Where the record is thin, it is better named than dressed up.",
            "bn": "সূত্রের ব্যাপারে খোলাখুলি থাকা দরকার। এ আয়াতের তাফসীর দুটি জিনিসের উপর দাঁড়িয়ে: এক, কুরআনের অন্য আয়াত, যেখানে মূসার দোয়া আর তা কবুল হওয়ার কথা আছে (তা-হা, আল-কাসাস ও আশ-শুআরা); দুই, হারূনের বয়স নিয়ে সাহাবি ইবন আব্বাসের বর্ণনা। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই নবী ﷺ-এর কোনো সহীহ হাদিস সরাসরি এ আয়াতের সঙ্গে জোড়ে না। এ আয়াতের কোনো প্রতিষ্ঠিত শানে নুযূলও নেই; সূরার সাজানো নবী-মিছিলের অংশ হিসেবেই আয়াতটি এসেছে। বর্ণনা যেখানে কম, সেখানে সাজিয়ে-গুছিয়ে বাড়ানোর চেয়ে সেটা খোলাখুলি স্বীকার করাই ভালো।"
          },
          {
            "en": "What remains is plain and strong. A man was given a heavy task and a companion to carry it with, and both the task and the companion came from mercy. He had asked for that help by name, and had asked that his brother be raised rather than merely used. When the answer came, it came as a person made a prophet. The verse leaves the reader with a small, exacting question: when help stands next to me in human form, do I see it as the gift it is?",
            "bn": "এরপর যা থাকে, তা সহজ কথা, আর জোরালো কথা। একজন মানুষকে ভারী এক দায়িত্ব দেওয়া হলো, সঙ্গে সেই ভার বইবার একজন সঙ্গী; আর দায়িত্ব ও সঙ্গী দুটোই এলো রহমত থেকে। তিনি নাম ধরে সেই সাহায্য চেয়েছিলেন। চেয়েছিলেন তাঁর ভাইকে উপরে তোলা হোক, শুধু কাজে লাগানো না হোক। জবাব যখন এলো, এলো একজন মানুষ হয়ে, যাঁকে নবী করা হয়েছে। আয়াত পাঠকের সামনে ছোট অথচ কঠিন একটা প্রশ্ন রেখে যায়: সাহায্য যখন মানুষের রূপে আমার পাশে এসে দাঁড়ায়, আমি কি চিনতে পারি যে এ এক দান?"
          }
        ]
      }
    ]
  },
  "19:58": {
    "sections": [
      {
        "h": {
          "en": "One Verse Gathers Them",
          "bn": "এক আয়াতে সবাই জড়ো"
        },
        "p": [
          {
            "en": "Ulaika alladhina anama Allahu alayhim mina an-nabiyyin: those were the ones upon whom Allah bestowed favour, from among the prophets. After naming Zakariyya, Yahya, Isa, Ibrahim, Ishaq, Yaqub, Musa, Harun, Ismail and Idris across the surah, one demonstrative pronoun now reaches back and gathers every one of them. Ibn Kathir notes that the verse does not mean only those named here; it moves from the individuals to the whole class of prophets, so the honour just paid to the named few is quietly widened to all whom Allah ever sent.",
            "bn": "উলাইকাল্লাযীনা আনআমাল্লাহু আলাইহিম মিনান নাবিয়্যীন: এঁরাই নবীদের মধ্যে তাঁরা, যাঁদের উপর আল্লাহ অনুগ্রহ করেছেন। সূরাজুড়ে যাকারিয়্যা, ইয়াহইয়া, ঈসা, ইবরাহীম, ইসহাক, ইয়াকুব, মূসা, হারূন, ইসমাঈল ও ইদরীস (আঃ)-এর নাম এসেছে। এবার 'উলাইকা', অর্থাৎ 'এঁরাই', এই একটি শব্দ পেছনে ফিরে সবাইকে এক জায়গায় জড়ো করে। ইবন কাসীর বলেন, এখানে শুধু নাম নেওয়া কয়েকজন উদ্দেশ্য নন; আয়াত ব্যক্তি থেকে সরে গোটা নবী-সমাজের কথা বলছে। ফলে নাম ধরে বলা এই কজনকে যে সম্মান দেওয়া হলো, নীরবে তা ছড়িয়ে যায় আল্লাহর পাঠানো সব নবীর উপর।"
          },
          {
            "en": "As-Sa'di weighs the word anama, favoured. The favour meant, he says, is a grace that none can catch up to and a gift that none came before — the favour of prophethood and messengership itself. He then makes a link a worshipper prays every day: these are the very ones Allah taught us to ask to be guided among, the path of those upon whom You have bestowed favour. To obey Allah, as-Sa'di adds, is to be gathered with them, at the far end of that same road.",
            "bn": "সা'দী 'আনআমা', অর্থাৎ অনুগ্রহ করা, শব্দটি নিয়ে ভাবেন। তিনি বলেন, এখানে অনুগ্রহ মানে এমন নিয়ামত, যার নাগাল আর কেউ পায় না, এমন দান, যাতে কেউ তাঁদের আগে পৌঁছায়নি: নবুওয়াত ও রিসালাতের নিয়ামত। তারপর তিনি এমন এক যোগসূত্র দেখান, যা একজন বান্দা প্রতিদিন নামাজে পড়ে। এঁরাই সেই মানুষ, যাঁদের দলে থাকার জন্য দোয়া করতে আল্লাহ আমাদের শিখিয়েছেন: 'তাঁদের পথ, যাঁদের উপর আপনি অনুগ্রহ করেছেন।' সা'দী আরও বলেন, আল্লাহর আনুগত্য করা মানেই সেই একই পথের শেষ মাথায় তাঁদের সঙ্গে মিলিত হওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Lines of Descent",
          "bn": "বংশের চার ধারা"
        },
        "p": [
          {
            "en": "The verse sorts the favoured into four lines of descent, and the early commentators map each one. Reporting as-Suddi and Ibn Jarir at-Tabari, Ibn Kathir assigns them thus: from the seed of Adam, Idris; from those We carried with Nuh, Ibrahim; from the seed of Ibrahim, Ishaq, Yaqub and Ismail; and from the seed of Israel — that is, Yaqub — Musa, Harun, Zakariyya, Yahya and Isa son of Maryam. At-Tabari gives the same division in his own words, closing his list with Isa and his mother Maryam.",
            "bn": "আয়াতটি অনুগ্রহপ্রাপ্তদের চারটি বংশধারায় সাজিয়ে দেয়, আর আদি তাফসীরকারেরা প্রতিটি ধারার হিসাব মিলিয়ে দেন। সুদ্দী ও ইবন জারীর তাবারীর বরাত দিয়ে ইবন কাসীর এভাবে ভাগ করেন: আদমের বংশ থেকে ইদরীস; নূহের সঙ্গে যাদেরকে আমি আরোহণ করিয়েছিলাম তাদের থেকে ইবরাহীম; ইবরাহীমের বংশ থেকে ইসহাক, ইয়াকুব ও ইসমাঈল; আর ইসরাঈল অর্থাৎ ইয়াকুবের বংশ থেকে মূসা, হারূন, যাকারিয়্যা, ইয়াহইয়া ও মারইয়াম-তনয় ঈসা (আঃ)। তাবারী নিজের ভাষায় একই ভাগ দেন, আর তালিকা শেষ করেন ঈসা ও তাঁর মা মারইয়ামকে দিয়ে।"
          },
          {
            "en": "Al-Baghawi and al-Qurtubi keep the same frame but widen the first line: from the seed of Adam, they read, Idris and Nuh both, since both stand near Adam in descent. Al-Baghawi then anchors the second line in lineage, noting that Ibrahim is counted among the seed of those carried in the ship because he was born of Sam, the son of Nuh. So Idris and Nuh take the honour of nearness to Adam, al-Qurtubi says, Ibrahim the honour of nearness to Nuh, and Ishaq, Yaqub and Ismail the honour of nearness to Ibrahim.",
            "bn": "বাগভী ও কুরতুবী একই কাঠামো রাখেন, তবে প্রথম ধারাটি একটু প্রশস্ত করেন: আদমের বংশ থেকে তাঁরা পড়েন ইদরীস ও নূহ দুজনকেই, কেননা বংশক্রমে দুজনেই আদমের কাছের। এরপর বাগভী দ্বিতীয় ধারাটির শিকড় বংশে খুঁজে দেন। তিনি বলেন, ইবরাহীমকে নৌকায় আরোহণকারীদের বংশে গোনা হয়েছে, কারণ তিনি জন্মেছিলেন নূহের ছেলে সামের ঔরসে। তাই ইদরীস ও নূহ পেলেন আদমের নৈকট্যের শরফ, ইবরাহীম পেলেন নূহের নৈকট্যের শরফ, আর ইসহাক, ইয়াকুব ও ইসমাঈল পেলেন ইবরাহীমের নৈকট্যের শরফ, কুরতুবীর ভাষায়।"
          },
          {
            "en": "Al-Muyassar smooths the third and fourth lines into one flow, naming the seed of Ibrahim and then the seed of Yaqub, since Israel is Yaqub's own name. The mapping is not the verse's main work, but it repays attention: every prophet in the surah is being tied by blood to Adam, to Nuh, to Ibrahim, so that the favour reads as one long inheritance running down a single family tree.",
            "bn": "মুয়াসসার তৃতীয় ও চতুর্থ ধারাকে এক টানে মিলিয়ে দেন: আগে ইবরাহীমের বংশ, তারপর ইয়াকুবের বংশ, কেননা ইসরাঈল তো ইয়াকুবেরই নাম। বংশের এই হিসাব আয়াতের মূল কথা নয়, তবু খেয়াল করার মতো। সূরার প্রতিটি নবীকে রক্তের সম্পর্কে বেঁধে দেওয়া হচ্ছে আদমের সঙ্গে, নূহের সঙ্গে, ইবরাহীমের সঙ্গে। ফলে অনুগ্রহটা মনে হয় একটাই বংশবৃক্ষ বেয়ে নেমে আসা দীর্ঘ এক উত্তরাধিকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Idris Belongs",
          "bn": "ইদরীস কোন দলে"
        },
        "p": [
          {
            "en": "Why split the genealogies at all, when Adam fathers every one of them? Ibn Jarir answers that among the favoured is one who does not descend from those who sailed with Nuh, and that is Idris; for Idris, he holds, was the grandfather of Nuh. Placing Idris under the seed of Adam rather than under Nuh's passengers is therefore not loose grouping but exact lineage. Ibn Kathir calls this the most apparent reading — that Idris stands in the ancestral line of Nuh, and so must be counted from Adam directly.",
            "bn": "আদমই যখন সবার পিতা, তখন বংশগুলো আলাদা করার দরকার কী? ইবন জারীর জবাব দেন: অনুগ্রহপ্রাপ্তদের মধ্যে একজন আছেন, যিনি নূহের সঙ্গে নৌকায় ওঠা লোকদের বংশধর নন। তিনি ইদরীস, কারণ তাঁর মতে ইদরীস ছিলেন নূহের দাদা। তাই ইদরীসকে নূহের নৌকার যাত্রীদের বংশে না রেখে আদমের বংশে রাখা ঢিলেঢালা কোনো ভাগ নয়, একেবারে নিখুঁত বংশপরিচয়। ইবন কাসীরও এ পাঠকেই সবচেয়ে স্পষ্ট বলেন: ইদরীস নূহের পূর্বপুরুষদের একজন, তাই তাঁকে সরাসরি আদম থেকেই গুনতে হবে।"
          },
          {
            "en": "But Ibn Kathir does not close the door. It has been said, he reports, that Idris was rather one of the prophets of the Children of Israel, a view drawn from the narration of the Night Journey: when the Prophet passed Idris in the heavens, Idris greeted him as the righteous brother, not as the righteous son, the words Adam and Ibrahim had used. Ibn Kathir sets the two readings side by side and states his own preference without silencing the other; the surah leaves the exact branch of Idris an open question.",
            "bn": "তবে ইবন কাসীর অন্য মতের দরজা বন্ধ করেন না। তিনি জানান, কেউ কেউ বলেছেন, ইদরীস বরং বনী ইসরাঈলের নবীদেরই একজন। এ মতের ভিত্তি মিরাজের বর্ণনা: আকাশে নবী ﷺ যখন ইদরীসের কাছ দিয়ে যান, ইদরীস তাঁকে স্বাগত জানান 'নেককার ভাই' বলে, 'নেককার পুত্র' বলে নয়; আদম ও ইবরাহীম তাঁকে বলেছিলেন 'নেককার পুত্র'। ইবন কাসীর দুটি মত পাশাপাশি রাখেন, নিজের পছন্দটাও জানান, তবে অন্যটিকে বাতিল করে দেন না। ইদরীস ঠিক কোন শাখার, সূরা সে প্রশ্ন খোলা রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited To, They Fell",
          "bn": "পড়া হলে লুটিয়ে পড়ত"
        },
        "p": [
          {
            "en": "Idha tutla alayhim ayatu ar-Rahmani kharru sujjadan wa bukiyya: when the verses of the Most Merciful were recited to them, they fell down prostrate and weeping. Here the verse turns from lineage to response, and this is its heart. Ibn Kathir reads it plainly: when they heard the speech of Allah, carrying His proofs and evidences, they prostrated to their Lord in humility and submission, in praise and thanks for the vast favours they had been given. The prostration is not a ritual performed on cue; it is what the words did to them where they stood.",
            "bn": "ইযা তুতলা আলাইহিম আয়াতুর রাহমানি খাররু সুজ্জাদাও ওয়া বুকিয়্যা: দয়াময়ের আয়াত যখন তাঁদের সামনে পড়া হতো, তাঁরা কাঁদতে কাঁদতে সিজদায় লুটিয়ে পড়তেন। এখানে এসে আয়াত বংশপরিচয় ছেড়ে সাড়ার কথায় আসে, আর এটাই আয়াতের প্রাণ। ইবন কাসীর সোজা অর্থই নেন: আল্লাহর কালাম, যাতে আছে তাঁর প্রমাণ ও দলিল, শুনলেই তাঁরা বিনয় আর আত্মসমর্পণ নিয়ে রবের সামনে সিজদায় পড়ে যেতেন; পাওয়া বিশাল নিয়ামতের জন্য তাঁর প্রশংসা ও শোকর আদায় করতেন। এ সিজদা ইশারা পেয়ে করা কোনো আনুষ্ঠানিকতা নয়। কথাগুলো শুনে যেখানে ছিলেন সেখানেই তাঁরা লুটিয়ে পড়তেন; এ সিজদা কালামেরই প্রভাব।"
          },
          {
            "en": "As-Sa'di fills in what those verses carried: news of the unseen and of the attributes of the Knower of all that is hidden, word of the Last Day, the promise and the threat. Faced with this, he writes, their hearts bowed and were awed; faith, longing and fear worked in them until weeping, turning back to Allah, and prostration were the only fit answer. And he sets them against a second kind of listener, the one who, when the verses of Allah are recited, falls upon them deaf and blind. The same words reach two hearts and part them.",
            "bn": "সেই আয়াতগুলোতে কী থাকত, সা'দী তা খুলে বলেন: গায়েবের খবর, যিনি সব গোপন জানেন তাঁর গুণাবলি, আখিরাতের কথা, ওয়াদা আর সতর্কবাণী। তিনি লেখেন, এসব শুনে তাঁদের অন্তর নুয়ে পড়ত, ভয়ে-শ্রদ্ধায় কেঁপে উঠত। ঈমান, আগ্রহ আর ভয় ভেতরে এমনভাবে কাজ করত যে কান্না, আল্লাহর দিকে ফিরে আসা আর সিজদা ছাড়া আর কোনো জবাব মানাত না। এর বিপরীতে তিনি আরেক ধরনের শ্রোতাকে দাঁড় করান, যে আল্লাহর আয়াত শুনে তার উপর বধির ও অন্ধের মতো পড়ে থাকে। একই কথা দুটি অন্তরে পৌঁছায়, আর দুটিকে দুই দিকে আলাদা করে দেয়।"
          },
          {
            "en": "This is one of the places where the reader of the Qur'an prostrates. The end of the verse carries the sajda mark, and when a reciter reaches these words he sets his own forehead down, joining the very act the verse is describing. The description does not stay on the page; it steps off it and tells the reader to do the thing being praised. Here reciting the verse and obeying it meet at a single point, and the moment of hearing becomes at once a deed.",
            "bn": "কুরআনের যে কয়েকটি জায়গায় পাঠক সিজদা করেন, এটি তার একটি। আয়াতের শেষে সিজদার চিহ্ন আছে। তিলাওয়াতকারী এ কথাগুলোয় পৌঁছে নিজের কপাল মাটিতে রাখেন, আর আয়াত যে কাজের বর্ণনা দিচ্ছে, নিজেও ঠিক সেই কাজে শামিল হন। বর্ণনাটা পাতায় আটকে থাকে না; পাতা থেকে নেমে এসে পাঠককে বলে, যে কাজের প্রশংসা হচ্ছে, সেটা আপনিও করুন। এখানে আয়াত পড়া আর আয়াত মানা এক বিন্দুতে মিলে যায়; শোনার মুহূর্তটাই হয়ে ওঠে আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Tears the Verse Praises",
          "bn": "যে কান্নার প্রশংসা"
        },
        "p": [
          {
            "en": "No commentator here attaches a saying of the Prophet to the wording of this verse; what they do attach is the practice of those who first received it. At-Tabari and Ibn Kathir report, through Ibrahim an-Nakhai, that Umar ibn al-Khattab recited Surah Maryam, prostrated at this verse, and then said: this is the prostration — so where is the weeping? He had performed the sajda the verse commands and missed the tears it praises, and he named the lack aloud. The report is a saying of Umar, carried by Ibn Jarir and Ibn Abi Hatim, not a Prophetic hadith.",
            "bn": "এখানকার কোনো তাফসীরকার এ আয়াতের শব্দের সঙ্গে নবী ﷺ-এর কোনো বাণী জোড়েন না। তাঁরা জোড়েন সেই মানুষদের আমল, যাঁদের কাছে প্রথম এ আয়াত এসেছিল। তাবারী ও ইবন কাসীর ইবরাহীম নাখঈর সূত্রে বর্ণনা করেন, উমর ইবনুল খাত্তাব (রাঃ) সূরা মারইয়াম পড়লেন, এ আয়াতে এসে সিজদা করলেন, তারপর বললেন: সিজদা তো হলো, কিন্তু কান্না কোথায়? আয়াত যে সিজদার হুকুম দেয়, তা তিনি আদায় করেছিলেন; কিন্তু যে কান্নার প্রশংসা করে, তা তাঁর হয়নি। আর সেই কমতির কথা তিনি মুখ ফুটে বলে ফেললেন। বর্ণনাটি উমর (রাঃ)-এর নিজের কথা, ইবন জারীর ও ইবন আবী হাতিম এনেছেন; এটি নবীর হাদিস নয়।"
          },
          {
            "en": "Ibn Kathir does cite a sound report near this theme: in Sahih al-Bukhari, Mujahid asked Ibn Abbas whether there is a prostration in Surah Sad; he said yes, recited that Allah's guided prophets are those whose guidance we are told to follow, and added that our Prophet is among those commanded to follow them. On the tears themselves, Sahih al-Bukhari elsewhere praises, among those Allah will shade, a man who remembered Allah alone and his eyes overflowed — a sound narration on the weeping this verse honours, though the commentators do not tie it to these words.",
            "bn": "এ প্রসঙ্গের কাছাকাছি ইবন কাসীর একটি সহীহ বর্ণনা আনেন। সহীহ বুখারীতে আছে, মুজাহিদ ইবন আব্বাসকে জিজ্ঞেস করলেন, সূরা সাদে কি সিজদা আছে? তিনি বললেন, হ্যাঁ। তারপর সেই আয়াত তিলাওয়াত করলেন, যাতে আল্লাহর হেদায়েতপ্রাপ্ত নবীদের পথ অনুসরণ করতে বলা হয়েছে, আর যোগ করলেন, আমাদের নবী ﷺ-ও তাঁদের একজন, যাঁদের সেই নবীদের অনুসরণ করার আদেশ দেওয়া হয়েছে। আর কান্নার ব্যাপারে, সহীহ বুখারীর আরেক জায়গায় আছে: আল্লাহ যাদের ছায়া দেবেন, তাদের একজন সেই ব্যক্তি, যে একা আল্লাহর জিকির করল আর তার চোখ দিয়ে অশ্রু ঝরল। এ আয়াত যে কান্নাকে সম্মান দেয়, এটি তার পক্ষে সহীহ বর্ণনা, যদিও তাফসীরকারেরা একে এ আয়াতের শব্দের সঙ্গে জোড়েন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Name ar-Rahman",
          "bn": "নাম কেন আর-রাহমান"
        },
        "p": [
          {
            "en": "The verse does not say the verses of Allah, or the verses of your Lord; it says the verses of ar-Rahman, the Most Merciful. As-Sa'di draws the point out: attaching the verses to this name shows that His verses are themselves part of His mercy to His servants. By them He guided them to the truth, gave them sight after blindness, pulled them out of misguidance, and taught them out of ignorance. Revelation is not a demand laid on people from outside; it is the same mercy that made them, now put into words.",
            "bn": "আয়াত বলে না 'আল্লাহর আয়াত', বলে না 'তোমার রবের আয়াত'; বলে 'আর-রাহমানের আয়াত', পরম দয়াময়ের আয়াত। সা'দী এর তাৎপর্য খুলে বলেন: আয়াতগুলোকে এই নামের সঙ্গে জোড়া হয়েছে, কারণ তাঁর আয়াত নিজেই বান্দাদের প্রতি তাঁর রহমতের অংশ। এই আয়াত দিয়েই তিনি তাদের সত্যের পথ দেখিয়েছেন, অন্ধত্বের পর চোখ খুলে দিয়েছেন, গোমরাহি থেকে টেনে তুলেছেন, অজ্ঞতা দূর করে শিখিয়েছেন। ওহি বাইরে থেকে মানুষের ঘাড়ে চাপানো কোনো দাবি নয়। যে রহমত মানুষকে সৃষ্টি করেছে, ওহি সেই রহমতই, এবার কথার রূপে।"
          },
          {
            "en": "What are these verses of ar-Rahman? Al-Qurtubi records more than one answer. Al-Hasan took it that they fell prostrate and wept within the prayer itself. Al-Asamm read the verses of ar-Rahman as the revealed Books that carry His oneness and His proofs, at whose recitation they would prostrate and weep. And it is related from Ibn Abbas that the Qur'an in particular is meant. The three answers differ over the reference but agree on the result, and it is the result the verse presses on a living heart.",
            "bn": "আর-রাহমানের এই আয়াত বলতে কী বোঝানো হয়েছে? কুরতুবী একাধিক জবাব উল্লেখ করেন। হাসান (বসরী) বুঝেছেন, তাঁরা নামাজের ভেতরেই সিজদায় লুটিয়ে পড়তেন আর কাঁদতেন। আসাম্মের মতে আর-রাহমানের আয়াত মানে নাজিল হওয়া কিতাবগুলো, যাতে আছে আল্লাহর একত্ব ও তাঁর প্রমাণ; সেগুলোর তিলাওয়াত শুনে তাঁরা সিজদা করতেন, কাঁদতেন। আর ইবন আব্বাস থেকে বর্ণিত, এখানে বিশেষভাবে কুরআনই উদ্দেশ্য। আয়াত বলতে কী বোঝায়, তা নিয়ে তিনটি জবাব আলাদা, কিন্তু ফল নিয়ে একমত। আর জীবন্ত অন্তরের কাছে আয়াত সেই ফলটাই চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Is the Prostration Owed",
          "bn": "সিজদা কি ওয়াজিব"
        },
        "p": [
          {
            "en": "That the reader prostrates here is agreed; whether he must is not. Ibn Kathir reports the scholars' consensus that prostration at this verse is legislated, done in imitation of these prophets and in step with their way of worship. Al-Qurtubi carries the sharper question. Abu Bakr ar-Razi argued from this very verse that the prostration is an obligation on reciter and hearer alike. Al-Kiya answered that this is far-fetched, for the description covers all of Allah's verses without exception, and shows the prophets' way of magnifying Him rather than proving a duty at one fixed verse.",
            "bn": "এখানে পাঠক সিজদা করেন, এ ব্যাপারে সবাই একমত; সিজদা করা বাধ্যতামূলক কিনা, তাতে একমত নন। ইবন কাসীর আলিমদের ইজমা উল্লেখ করেন যে এ আয়াতে সিজদা শরিয়তসম্মত (মাশরূ), এই নবীদের অনুসরণে এবং তাঁদের ইবাদতের ধারার সঙ্গে মিল রেখে। কুরতুবী আরও কঠিন প্রশ্নটি তোলেন। আবু বকর রাযী এই আয়াত থেকেই যুক্তি দেন, পাঠক ও শ্রোতা দুজনের উপরই এ সিজদা ওয়াজিব। ইলকিয়া জবাব দেন, এ যুক্তি টানাটানির, কারণ এ বর্ণনা আল্লাহর সব আয়াতের বেলায় খাটে, কোনো ব্যতিক্রম নেই। এটি নবীদের আল্লাহর বড়ত্ব ঘোষণার ধারা দেখায়, নির্দিষ্ট একটি আয়াতে কোনো বাধ্যবাধকতা প্রমাণ করে না।"
          },
          {
            "en": "Both al-Qurtubi and Ma'arif al-Quran add a gentler note: the scholars held it good for whoever prostrates at a sajda-verse to pray something fitted to the verse he has just read. For this one they teach a supplication that turns its own words back to Allah — O Allah, make me one of Your servants upon whom You bestowed favour, the guided who prostrate to You, who weep at the recitation of Your verses. The reader is being handed the very language of the verse to ask for the state it describes.",
            "bn": "কুরতুবী ও মাআরিফুল কুরআন দুটোতেই একটি কোমল কথা আছে: আলিমরা পছন্দ করেছেন, সিজদার আয়াতে যে সিজদা করে, সে যেন সদ্য পড়া আয়াতের সঙ্গে মিলিয়ে কোনো দোয়া করে। এ আয়াতের জন্য তাঁরা এমন একটি দোয়া শেখান, যা আয়াতের নিজের কথাগুলোই আল্লাহর কাছে ফিরিয়ে দেয়: হে আল্লাহ, আমাকে আপনার সেই বান্দাদের একজন করুন, যাঁদের উপর আপনি অনুগ্রহ করেছেন, যাঁরা হেদায়েতপ্রাপ্ত, আপনাকে সিজদা করেন, আপনার আয়াত তিলাওয়াতের সময় কাঁদেন। আয়াতের ভাষাটাই পাঠকের হাতে তুলে দেওয়া হচ্ছে, যেন আয়াত যে অবস্থার কথা বলে, সে সেটাই চেয়ে নিতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Known by Their Falling",
          "bn": "লুটিয়ে পড়াতেই পরিচয়"
        },
        "p": [
          {
            "en": "Ma'arif al-Quran, following Bayan ul-Quran, reads a purpose into the placing of this verse. The surah has just raised prophet after prophet very high, and a danger sits in that height: people have overstepped it before, as some called Uzair a son of God and others said the same of Isa. So the moment the exalting is done, the next stroke shows these same prophets face-down and in tears before Allah. Their greatness is real, and it is the greatness of servants — the higher the verse lifts them, the lower it shows them bowing.",
            "bn": "মাআরিফুল কুরআন, বায়ানুল কুরআনের অনুসরণে, এ আয়াতের অবস্থানে একটি উদ্দেশ্য দেখতে পায়। সূরা এইমাত্র একের পর এক নবীকে অনেক উঁচুতে তুলে ধরেছে, আর সেই উচ্চতায় একটা বিপদ লুকিয়ে থাকে। মানুষ আগেও সীমা ছাড়িয়েছে: কেউ উযায়েরকে আল্লাহর পুত্র বলেছে, কেউ ঈসা সম্পর্কে একই কথা বলেছে। তাই মর্যাদা তুলে ধরা শেষ হতেই পরের কথায় দেখানো হয়, এই নবীরাই আল্লাহর সামনে সিজদায় লুটিয়ে আছেন, চোখে পানি। তাঁদের মহত্ত্ব সত্য, তবে তা বান্দার মহত্ত্ব। আয়াত তাঁদের যত উঁচুতে তোলে, তত নিচু হয়ে নুয়ে পড়তে দেখায়।"
          },
          {
            "en": "So the sign of the favoured is set before us, and it is not out of reach. They were not marked by wonders we cannot copy but by what they did when the words came: they went down and they wept. The path we ask for daily is the path of exactly these people. To walk it is to let ar-Rahman's verses reach far enough in that the forehead follows and the eyes fill. Nothing rarer is asked of us, and nothing plainer. That is the imitation the verse invites.",
            "bn": "তাই অনুগ্রহপ্রাপ্তদের চিহ্ন আমাদের সামনে রাখা হলো, আর তা নাগালের বাইরে নয়। তাঁদের পরিচয় এমন কোনো অলৌকিক কাজে নয়, যা আমরা করতে পারি না। তাঁদের পরিচয় সেই কাজে, যা আল্লাহর কালাম এলে তাঁরা করতেন: সিজদায় লুটিয়ে পড়তেন, কাঁদতেন। যে পথ আমরা প্রতিদিন চাই, তা ঠিক এই মানুষগুলোরই পথ। সে পথে চলা মানে আর-রাহমানের আয়াতকে ভেতরে এতদূর পৌঁছাতে দেওয়া, যাতে কপাল নিজে থেকেই মাটিতে নেমে আসে, চোখ ভিজে ওঠে। আমাদের কাছে এর চেয়ে দুর্লভ কিছু চাওয়া হয়নি, এর চেয়ে সহজ কিছুও নয়। আয়াত এই অনুসরণের দিকেই ডাকে।"
          }
        ]
      }
    ]
  },
  "19:65": {
    "sections": [
      {
        "h": {
          "en": "The Visit That Came Late",
          "bn": "যে সাক্ষাৎ দেরিতে এল"
        },
        "p": [
          {
            "en": "Rabbu-s-samawati wa-l-ardi wa ma baynahuma, fa'budhu wa-stabir li-'ibadatihi, hal ta'lamu lahu samiyya: Lord of the heavens and the earth and whatever is between them, so worship Him and be steadfast in His worship; do you know of any samiyy for Him? The verse is hard to read apart from the verse before it. 19:64 says: and we do not descend except by the command of your Lord; to Him belongs what is before us and what is behind us and what is between that, and your Lord is never forgetful.",
            "bn": "রাব্বুস সামাওয়াতি ওয়াল আরদি ওয়া মা বাইনাহুমা, ফা'বুদহু ওয়াসতাবির লি-ইবাদাতিহি, হাল তা'লামু লাহু সামিয়্যা: তিনি আসমানসমূহ, যমীন আর এ দুয়ের মাঝে যা কিছু আছে সবকিছুর রব। কাজেই তাঁর ইবাদত করো আর তাঁর ইবাদতে অবিচল থাকো। তুমি কি তাঁর কোনো 'সামিয়্য' জান? আগের আয়াত বাদ দিয়ে এ আয়াত পড়া কঠিন। ১৯:৬৪ বলে: আমরা আপনার রবের আদেশ ছাড়া অবতরণ করি না। আমাদের সামনে যা আছে, পেছনে যা আছে আর এ দুয়ের মাঝে যা আছে, সবই তাঁর। আর আপনার রব কখনো ভুলে যান না।"
          },
          {
            "en": "Ibn Kathir, on that verse, says Imam Ahmad recorded from Ibn 'Abbas (RA) the Prophet's ﷺ question to Jibril (AS), and adds that al-Bukhari also recorded it, in his tafsir of the verse. The wording in Sahih al-Bukhari (4731) is: \"Narrated Ibn 'Abbas: The Prophet ﷺ said to Gabriel, 'What prevents you from visiting us more often than you visit us now?' So there was revealed: 'And we (angels) descend not but by the command of your Lord. To Him belongs what is before us and what is behind us...' (19:64).\" It stands in al-Bukhari's Sahih, and it concerns 19:64.",
            "bn": "ইবন কাসীর ১৯:৬৪-এর আলোচনায় বলেন, ইমাম আহমাদ ইবন আব্বাস (রাঃ) থেকে জিবরীল (আঃ)-এর কাছে নবী ﷺ-এর প্রশ্নটি বর্ণনা করেছেন। তিনি যোগ করেন, বুখারীও এটি এনেছেন, এই আয়াতের তাফসীর অধ্যায়ে। সহীহ বুখারীর (৪৭৩১) ভাষ্য এই: \"ইবন আব্বাস (রাঃ) বর্ণনা করেন, নবী ﷺ জিবরীলকে বললেন, 'আপনি এখন যতবার আসেন, তার চেয়ে বেশি আমাদের কাছে আসতে কীসে আপনাকে বাধা দেয়?' তখন নাযিল হলো: 'আর আমরা (ফেরেশতারা) আপনার রবের আদেশ ছাড়া অবতরণ করি না। আমাদের সামনে যা আছে আর আমাদের পেছনে যা আছে, সবই তাঁর...' (১৯:৬৪)।\" হাদীসটি বুখারীর সহীহ গ্রন্থে আছে, আর তা ১৯:৬৪ সম্পর্কে।"
          },
          {
            "en": "Ibn Kathir then brings a second report, through al-'Awfi from Ibn 'Abbas, that fills in the feeling: Jibril was kept from visiting the Messenger ﷺ, who was disturbed and grieved by it, until Jibril came and said, O Muhammad, we do not descend except by the command of your Lord. Ibn Kathir gives no grading for this report, so it is cited here only as his. On the last clause of 19:64 he quotes Mujahid: your Lord has not forgotten you. Our verse opens straight out of that assurance.",
            "bn": "এরপর ইবন কাসীর আওফীর সূত্রে ইবন আব্বাস (রাঃ) থেকে আরেকটি বর্ণনা আনেন, যাতে মনের অবস্থাটা ফুটে ওঠে। জিবরীল (আঃ) কিছুদিন রাসূলুল্লাহ ﷺ-এর কাছে আসেননি। এতে তিনি অস্থির ও দুঃখিত হয়ে পড়েন। তারপর জিবরীল এসে বললেন, হে মুহাম্মাদ, আমরা আপনার রবের আদেশ ছাড়া অবতরণ করি না। এ বর্ণনার কোনো মান ইবন কাসীর উল্লেখ করেননি, তাই এখানে এটি কেবল তাঁর উদ্ধৃতি হিসেবেই রইল। ১৯:৬৪-এর শেষ অংশে তিনি মুজাহিদের কথা আনেন: আপনার রব আপনাকে ভোলেননি। আমাদের আয়াত শুরু হয় ঠিক এই আশ্বাসের পর থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Voice Carries On",
          "bn": "কথা চলছে কার মুখে"
        },
        "p": [
          {
            "en": "Who is speaking in 19:65? None of the commentaries fetched for this verse says in so many words that Jibril's speech runs on through it, and none says that it stops. At-Tabari reads the two verses as one sentence. He takes rabb as nominative, referring back to rabbuka at the end of 19:64, so the sense is: your Lord, O Muhammad, Lord of the heavens and the earth and what is between them, was never forgetful. Were He forgetful, he reasons, none of that could stand upright; it would perish but for His keeping it.",
            "bn": "১৯:৬৫-এ কথা বলছে কে? এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, তার কোনোটিই স্পষ্ট করে বলে না যে জিবরীল (আঃ)-এর কথা এখানেও চলছে। আবার কোনোটি এ কথাও বলে না যে তাঁর কথা এখানে থেমে গেছে। তাবারী দুই আয়াতকে একটি বাক্য হিসেবে পড়েন। তাঁর মতে 'রাব্বু' শব্দটি পেশযুক্ত, কারণ তা ১৯:৬৪-এর শেষে 'রাব্বুকা'-র দিকে ফিরে যায়। তখন অর্থ দাঁড়ায়: হে মুহাম্মাদ, আপনার রব, যিনি আসমান, যমীন ও এ দুয়ের মাঝের সবকিছুর রব, কখনো ভুলে যান না। তাবারীর যুক্তি: তিনি ভুলে গেলে এর কিছুই ঠিকঠাক টিকে থাকত না। তাঁর হেফাজত না থাকলে সবকিছু ধ্বংস হয়ে যেত।"
          },
          {
            "en": "As-Sa'di reads the link the same way: the verse gives the reason for the reach of His knowledge and for His never forgetting. Ibn Kathir's English abridgement introduces both the middle of 19:64 and our verse with the words Allah said. The English translation printed with the verse closes Gabriel's quotation at the end of 19:65, but that is the translator's punctuation, not a commentary. Where the commentators name the addressee, the answer is plain: at-Tabari says O Muhammad, al-Muyassar says O Prophet, and al-Qurtubi tells him not to grieve over the delay of revelation.",
            "bn": "সা'দীও যোগসূত্রটি এভাবেই দেখেন। তাঁর মতে আয়াতটি কারণ বলে দেয়: কেন আল্লাহর জ্ঞান সবকিছু ঘিরে আছে, আর কেন তিনি কখনো ভোলেন না। ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ ১৯:৬৪-এর মাঝের অংশ আর আমাদের আয়াত, দুটোর আগেই লিখেছে: আল্লাহ বলেছেন। আয়াতের সঙ্গে ছাপা ইংরেজি অনুবাদে জিবরীলের উদ্ধৃতি শেষ হয়েছে ১৯:৬৫-এর শেষে। তবে সেটা অনুবাদকের যতিচিহ্ন, কোনো তাফসীর নয়। কাকে সম্বোধন করা হচ্ছে, সে প্রশ্নে মুফাসসিরদের উত্তর পরিষ্কার। তাবারী বলেন: হে মুহাম্মাদ। মুয়াসসার বলে: হে নবী। আর কুরতুবী তাঁকে বলেন, ওহি আসতে দেরি হওয়ায় দুঃখ করবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Lord of Times and Things",
          "bn": "সময়ের রব, বস্তুরও রব"
        },
        "p": [
          {
            "en": "What does rabb hold here? Ibn Kathir: the Creator of all that and its Disposer, the Judge over it and its Controller, whose decision none can reverse. Al-Muyassar opens with He is Allah, then glosses Owner, Creator and Disposer of it all. Al-Qurtubi: their Lord, their Creator and the Creator of what is between them, their Owner and the Owner of what is between them; and he adds that just as the ordering of the times belongs to Him, so does the ordering of the things themselves.",
            "bn": "এখানে 'রব' শব্দে কী কী ধরা আছে? ইবন কাসীর বলেন: তিনি এসবের স্রষ্টা ও পরিচালক, এর ওপর ফয়সালাকারী, এতে যা খুশি করার অধিকারী, তাঁর ফয়সালা কেউ উল্টাতে পারে না। মুয়াসসার শুরু করে এভাবে: তিনিই আল্লাহ। তারপর বলে, তিনি এ সবকিছুর মালিক, স্রষ্টা ও পরিচালক। কুরতুবীর ব্যাখ্যা: তিনি আসমান ও যমীনের রব, এ দুয়ের এবং এ দুয়ের মাঝের সবকিছুর স্রষ্টা ও মালিক। তিনি আরও বলেন, সময়ের ব্যবস্থাপনা যেমন তাঁর হাতে, তেমনি বস্তুসমূহের ব্যবস্থাপনাও তাঁরই হাতে।"
          },
          {
            "en": "That last remark looks back to 19:64, where Ibn Kathir reports what before us, behind us and between were taken to mean: this world, the Hereafter, and the span between the two blasts of the Trumpet, from Abu al-'Aliyah, 'Ikrimah and Mujahid; or the Hereafter still to come, this life already past, and what lies between, the reading he says Ibn Jarir preferred. Al-Qurtubi also draws a doctrinal point: rabb here can only mean Owner, so whatever people acquire by their deeds falls within what He owns, which he calls the position of the people of truth.",
            "bn": "কুরতুবীর এই শেষ কথাটি ১৯:৬৪-এর দিকে ইঙ্গিত করে। সেখানে 'আমাদের সামনে', 'আমাদের পেছনে' আর 'এ দুয়ের মাঝে' কথাগুলোর ব্যাখ্যা ইবন কাসীর দুইভাবে উল্লেখ করেন। আবুল আলিয়া, ইকরিমা ও মুজাহিদের মতে এর মানে দুনিয়া, আখিরাত আর শিঙার দুই ফুঁৎকারের মাঝের সময়। অন্য মতে, সামনে মানে আখিরাতের আগত বিষয়, পেছনে মানে দুনিয়ার ঘটে যাওয়া বিষয়, আর মাঝে মানে এ দুয়ের মধ্যবর্তী সময়। ইবন কাসীর বলেন, ইবন জারীর এই দ্বিতীয় মতটিকেই অগ্রাধিকার দিয়েছেন। কুরতুবী এখান থেকে একটি আকীদাগত কথাও টানেন। তাঁর মতে এখানে 'রব' মানে কেবল মালিক। তাই মানুষ নিজের আমলে যা অর্জন করে, তাও তাঁর মালিকানার ভেতরে পড়ে। এটিকে তিনি আহলুল হকের মত বলে উল্লেখ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship Drawn From Lordship",
          "bn": "রুবুবিয়্যাত থেকে ইবাদত"
        },
        "p": [
          {
            "en": "Fa'budhu: so worship Him. The command arrives as a consequence of the description, and as-Sa'di spells the step out. His lordship over the heavens and the earth, set in the finest and most complete order, with no heedlessness in it, no neglect, nothing left aimless and nothing false, is for him a decisive proof of His all-embracing knowledge. Then he turns to the listener: so do not occupy yourself with that, but occupy yourself with what benefits you and returns its yield to you, which is worshipping Him alone, without partner.",
            "bn": "ফা'বুদহু: কাজেই তাঁর ইবাদত করো। আদেশটি এসেছে আগের বর্ণনার ফল হিসেবে, আর সা'দী ধাপটি খুলে বলেন। আসমান ও যমীন সবচেয়ে সুন্দর ও পূর্ণ শৃঙ্খলায় চলছে। তাতে কোনো উদাসীনতা নেই, অবহেলা নেই, কিছুই উদ্দেশ্যহীন বা অনর্থক নয়। তাঁর মতে এই রুবুবিয়্যাতই আল্লাহর সর্বব্যাপী জ্ঞানের অকাট্য প্রমাণ। তারপর তিনি শ্রোতার দিকে ফেরেন: কাজেই ওই চিন্তায় নিজেকে ব্যস্ত রেখো না। নিজেকে ব্যস্ত রাখো এমন কাজে, যা তোমার উপকারে আসে আর যার ফল তোমার কাছেই ফিরে আসে। সেটা হলো শরীকহীনভাবে কেবল তাঁরই ইবাদত।"
          },
          {
            "en": "The others gloss the same command in their own terms. At-Tabari: hold fast to His obedience, and humble yourself before His command and His prohibition. Al-Qurtubi: worship Him alone, for that reason, meaning because He is the Lord just described. He then defines the reality of worship as obedience with the utmost submission, and says that none deserves it except the Owner who is worshipped. Al-Muyassar keeps it to a few words: worship Him alone, O Prophet. Each puts lordship first and draws the worship from it.",
            "bn": "অন্য মুফাসসিররাও একই আদেশ নিজের ভাষায় ব্যাখ্যা করেন। তাবারী বলেন: তাঁর আনুগত্যে লেগে থাকো, তাঁর আদেশ-নিষেধের সামনে নিজেকে নত করো। কুরতুবী বলেন: সে কারণেই কেবল তাঁর ইবাদত করো, অর্থাৎ যেহেতু তিনিই সেই রব, যাঁর বর্ণনা এইমাত্র এল। এরপর তিনি ইবাদতের মূল সংজ্ঞা দেন: চূড়ান্ত বিনয়ের সঙ্গে আনুগত্য। আর বলেন, যিনি মালিক ও মা'বুদ, তিনি ছাড়া কেউ এর হকদার নয়। মুয়াসসার অল্প কথায় সারে: হে নবী, কেবল তাঁরই ইবাদত করুন। প্রত্যেকেই আগে রুবুবিয়্যাতের কথা বলেন, তারপর সেখান থেকে ইবাদতের দাবি টানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Istabir, a Word Built for Strain",
          "bn": "ইসতাবির: ভার বইবার শব্দ"
        },
        "p": [
          {
            "en": "The verb chosen is wa-stabir, from the root of sabr but not its plain imperative. Al-Qurtubi explains how the word was built: its base is istabara, but the ta and the sad sit heavily together because they differ, so the ta was changed to a ta', as istama is formed from sawm. He records only that change of sound. The sense of strain is given by Ma'arif al-Qur'an: istibar means perseverance in the face of acute distress and hardship, so whoever wishes to be constant in his prayers must be ready to undergo pain and suffering.",
            "bn": "এখানে বেছে নেওয়া ক্রিয়াটি 'ওয়াসতাবির'। ধাতু সবরেরই, তবে সাধারণ আদেশসূচক রূপ নয়। কুরতুবী শব্দটির গঠন ব্যাখ্যা করেন। এর মূল রূপ ছিল 'ইসতাবারা'। কিন্তু 'তা' আর 'সাদ' দুটি ভিন্ন ধরনের অক্ষর, পাশাপাশি বসলে উচ্চারণ ভারী হয়। তাই 'তা'-কে 'ত্বা' দিয়ে বদলে দেওয়া হয়েছে, যেমন 'সাওম' থেকে হয় 'ইসতামা'। কুরতুবী শুধু এই ধ্বনিবদলের কথাই বলেন। কষ্টের অর্থটি আসে মাআরিফুল কুরআন থেকে। সেখানে বলা হয়েছে, 'ইসতিবার' মানে তীব্র কষ্ট ও কঠিন অবস্থার মুখে অবিচল থাকা। তাই যে নিজের নামাযে নিয়মিত ও দৃঢ় থাকতে চায়, তাকে কষ্ট ও যন্ত্রণা সইতে প্রস্তুত থাকতে হবে।"
          },
          {
            "en": "What the patience is for is glossed in several ways. At-Tabari: hold yourself to carrying out His command and His prohibition and to acting in His obedience, and you will win His good pleasure. Al-Baghawi: be patient upon His command and His prohibition. As-Sa'di: hold yourself to it and strive against yourself, and stand to it in the fullest and most complete way your ability allows. Al-Qurtubi: for His obedience; do not grieve at the delay of revelation, but busy yourself with what you were commanded. Al-Muyassar widens the circle: you and those who follow you.",
            "bn": "এই ধৈর্য কীসের জন্য, তার ব্যাখ্যা কয়েক রকম। তাবারী বলেন: তাঁর আদেশ-নিষেধ পালনে আর তাঁর আনুগত্যের আমলে নিজেকে ধরে রাখো, তাহলে তাঁর সন্তুষ্টি লাভ করবে। বাগাভী বলেন: তাঁর আদেশ ও নিষেধের ওপর ধৈর্য ধরো। সা'দী বলেন: নিজেকে এর ওপর ধরে রাখো, নিজের নফসের সঙ্গে লড়াই করো, আর সাধ্যমতো সবচেয়ে পূর্ণভাবে তা আদায় করো। কুরতুবী বলেন: তাঁর আনুগত্যের জন্য ধৈর্য ধরো। ওহি আসতে দেরি হচ্ছে বলে দুঃখ করো না, বরং যা করতে বলা হয়েছে তাতে মন দাও। মুয়াসসার বৃত্তটা বড় করে: আপনি এবং আপনার অনুসারীরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship That Consoles",
          "bn": "ইবাদতেই সান্ত্বনা"
        },
        "p": [
          {
            "en": "As-Sa'di adds a line that turns the command from a weight into a relief: in being occupied with the worship of Allah there is consolation for the worshipper from every attachment and every craving. He supports it with 20:131, and do not extend your eyes toward what We have given some pairs of them to enjoy, the flower of the life of this world, so that We may test them by it, and then 20:132, and enjoin prayer on your family and be steadfast in it. The verb there is wa-stabir again, this time with 'alayha, upon it.",
            "bn": "সা'দী আরেকটি কথা যোগ করেন, যাতে আদেশটা বোঝা থেকে স্বস্তিতে বদলে যায়। আল্লাহর ইবাদতে ব্যস্ত থাকার মধ্যেই ইবাদতকারীর জন্য সান্ত্বনা আছে, সব রকম টান আর সব রকম লালসা থেকে। এর সমর্থনে তিনি ২০:১৩১ আনেন: তাদের কোনো কোনো দলকে পরীক্ষার জন্য দুনিয়ার জীবনের যে চাকচিক্য ভোগ করতে দিয়েছি, সেদিকে চোখ তুলে তাকিয়ো না। তারপর আনেন ২০:১৩২: তোমার পরিবারকে নামাযের আদেশ দাও, আর নিজেও তাতে অবিচল থাকো। সেখানেও ক্রিয়াটি সেই 'ওয়াসতাবির', এবার সঙ্গে 'আলাইহা', অর্থাৎ তার ওপর।"
          },
          {
            "en": "Read after the occasion Ibn Kathir reports for 19:64, the shape of the answer stands out. A question about how seldom the visits came is met by naming the Lord of everything and handing over a task, with no timetable for the next visit. As-Sa'di closes his comment by stating the order himself: He commanded worship of Him alone and steadfastness for it, and grounded that in His perfection and in His being alone in greatness and in the most beautiful names. That last phrase is where the verse's closing question begins.",
            "bn": "১৯:৬৪-এর যে প্রেক্ষাপট ইবন কাসীর বর্ণনা করেন, তার পরে পড়লে জবাবের ধরনটা চোখে পড়ে। প্রশ্ন ছিল, সাক্ষাৎ এত কম কেন। জবাবে পরের সাক্ষাতের কোনো সময়সূচি দেওয়া হয়নি। বরং সবকিছুর রবের পরিচয় দেওয়া হয়েছে, আর হাতে তুলে দেওয়া হয়েছে একটি কাজ। সা'দী নিজের আলোচনা শেষ করেন এই বিন্যাসটি বলে দিয়ে। আল্লাহ কেবল তাঁর ইবাদত আর তাতে অবিচল থাকার আদেশ দিয়েছেন, আর এর ভিত্তি রেখেছেন তাঁর পূর্ণতায়, মহত্ত্বে তাঁর একক হওয়ায় এবং তাঁর সুন্দরতম নামসমূহে। আয়াতের শেষ প্রশ্নটি শুরু হয় ঠিক এখান থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Namesake, Peer or Rival",
          "bn": "সমনামী, সমকক্ষ, না প্রতিদ্বন্দ্বী"
        },
        "p": [
          {
            "en": "Hal ta'lamu lahu samiyya. The commentators read samiyy in more than one way, and their reports do not settle into one. The first reading is namesake. Ibn Kathir has 'Ikrimah from Ibn 'Abbas: no one is named ar-Rahman except Him. Al-Qurtubi gives it through Isra'il from Simak from 'Ikrimah, and quotes an-Nahhas: this is the finest chain I know for this word, it is a sound statement, and ar-Rahman is said of none but Allah. Al-Qurtubi gives Qatadah and al-Kalbi, and al-Baghawi al-Kalbi: do you know anyone called Allah other than Allah? Ma'arif al-Qur'an favours this literal sense.",
            "bn": "হাল তা'লামু লাহু সামিয়্যা। মুফাসসিররা 'সামিয়্য' শব্দটি একাধিকভাবে পড়েছেন, আর তাঁদের বর্ণনাগুলো এক অর্থে এসে থামে না। প্রথম পাঠ: সমনামী। ইবন কাসীর ইকরিমার সূত্রে ইবন আব্বাস (রাঃ) থেকে আনেন: তিনি ছাড়া আর কারও নাম আর-রহমান নয়। কুরতুবী একই কথা আনেন ইসরাঈল, সিমাক ও ইকরিমার সূত্রে, আর নাহহাসের মন্তব্য উদ্ধৃত করেন: এ শব্দের ব্যাখ্যায় আমার জানা সবচেয়ে উত্তম সনদ এটি, কথাটি সঠিক, আর আর-রহমান আল্লাহ ছাড়া কাউকে বলা হয় না। কুরতুবী কাতাদা ও কালবী থেকে, আর বাগাভী কালবী থেকে আনেন: আল্লাহ ছাড়া আর কাউকে কি আল্লাহ নামে ডাকা হয় বলে জান? মাআরিফুল কুরআন এই আক্ষরিক অর্থটিকেই অগ্রাধিকার দেয়।"
          },
          {
            "en": "The second reading is a like or an equal. At-Tabari and Ibn Kathir carry it from Ibn 'Abbas through 'Ali ibn Abi Talhah: do you know for the Lord a likeness or anything resembling Him? Ibn Kathir adds that Mujahid, Sa'id ibn Jubayr, Qatadah, Ibn Jurayj and others said the same. At-Tabari gives Mujahid: a resemblance, a likeness; Qatadah: Allah has no samiyy and no equal; Ibn Jurayj: no partner and no like. Al-Qurtubi has Ibn al-Musayyab: an equal. As-Sa'di reads it as any creature that rivals, resembles or matches Him. At-Tabari makes this reading his own.",
            "bn": "দ্বিতীয় পাঠ: সদৃশ বা সমকক্ষ। তাবারী ও ইবন কাসীর এটি আনেন আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) থেকে: রবের কোনো তুলনা বা সাদৃশ্যপূর্ণ কিছু কি তুমি জান? ইবন কাসীর যোগ করেন, মুজাহিদ, সাঈদ ইবন জুবাইর, কাতাদা, ইবন জুরাইজ ও আরও অনেকে এ কথাই বলেছেন। তাবারী মুজাহিদ থেকে আনেন: সাদৃশ্যপূর্ণ কেউ, সমতুল্য কেউ। কাতাদা থেকে: আল্লাহর কোনো সামিয়্য নেই, কোনো সমকক্ষও নেই। ইবন জুরাইজ থেকে: তাঁর কোনো শরীক নেই, তাঁর মতো কেউ নেই। কুরতুবী আনেন ইবনুল মুসাইয়িবের কথা: সমকক্ষ। সা'দীর ব্যাখ্যায় এর মানে সৃষ্টির মধ্যে এমন কেউ, যে তাঁর প্রতিদ্বন্দ্বী, তাঁর সদৃশ বা তাঁর সমান। তাবারী এই পাঠটিকেই নিজের মত হিসেবে গ্রহণ করেন।"
          },
          {
            "en": "A third strand ties the word to deserving and to rivalry. Al-Qurtubi's first report from Ibn 'Abbas reads: do you know for Him a child, meaning a counterpart, a likeness or a resemblance, who deserves the like of His name ar-Rahman? He also records, without further gloss, Mujahid's remark that the word is taken from al-musamah. At-Tabari frames the likeness through worship: a like in generosity and bounty, whom you would worship in hope of his favour instead of Him, and no such thing exists. Qatadah appears on more than one side, depending on which commentary carries him. The article chooses none.",
            "bn": "তৃতীয় একটি ধারা শব্দটিকে যোগ্যতা ও প্রতিদ্বন্দ্বিতার সঙ্গে জুড়ে দেয়। কুরতুবীর প্রথম বর্ণনায় ইবন আব্বাস (রাঃ) বলেন: তুমি কি তাঁর কোনো সন্তান জান, অর্থাৎ এমন কোনো সমতুল্য, সদৃশ বা অনুরূপ, যে তাঁর আর-রহমান নামের মতো নামের যোগ্য? কুরতুবী মুজাহিদের এ মন্তব্যও আনেন যে শব্দটি 'আল-মুসামাহ' থেকে নেওয়া, তবে আর কোনো ব্যাখ্যা দেন না। তাবারী সাদৃশ্যের কথাটা ইবাদতের দিক থেকে বলেন: দানশীলতা ও অনুগ্রহে তাঁর মতো এমন কেউ, যার অনুগ্রহের আশায় তুমি তাঁকে বাদ দিয়ে তার ইবাদত করবে। এমন কিছুর অস্তিত্বই নেই। লক্ষ করার মতো যে, কোন তাফসীর বর্ণনা করছে তার ওপর নির্ভর করে কাতাদার নাম একাধিক পাঠের পক্ষে আসে। এ প্রবন্ধ কোনোটিকেই বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question That Means No",
          "bn": "যে প্রশ্নের উত্তর 'না'"
        },
        "p": [
          {
            "en": "Two commentators say outright what kind of question this is. Al-Qurtubi: hal here has the sense of la, that is, you do not know. As-Sa'di: a question meaning negation, known by reason. He gives the reasoning: He is the Lord and everything else is lorded over; the Creator, and everything else created; free of need in every respect, while everything else is needy in its very being; perfect with an absolute perfection, while everything else lacks, except what Allah has given it. This, he says, is decisive proof that Allah alone deserves worship.",
            "bn": "এটা কেমন প্রশ্ন, দুজন মুফাসসির তা সরাসরি বলে দেন। কুরতুবী বলেন: এখানে 'হাল' মানে 'লা', অর্থাৎ তুমি জান না। সা'দী বলেন: প্রশ্নটি না-বাচক অর্থে, আর তা বিবেক দিয়েই বোঝা যায়। তিনি যুক্তিটাও সাজিয়ে দেন। তিনি রব, বাকি সবাই প্রতিপালিত। তিনি স্রষ্টা, বাকি সবাই সৃষ্ট। তিনি সব দিক থেকে অভাবমুক্ত, আর বাকি সবাই নিজ সত্তাতেই সব দিক থেকে অভাবী। তিনি নিরঙ্কুশ পূর্ণতার অধিকারী, আর বাকি সবাই অপূর্ণ, আল্লাহ যতটুকু দিয়েছেন তার বাইরে তাদের কোনো পূর্ণতা নেই। সা'দীর ভাষায়, এটাই অকাট্য প্রমাণ যে কেবল আল্লাহই ইবাদতের হকদার।"
          },
          {
            "en": "Al-Muyassar puts it in one line: nothing is like Him in His essence, His names, His attributes or His acts; its words laysa ka-mithlihi shay' are those of 42:11. Qatadah, in at-Tabari, adds that all His creatures affirm Him as their Creator, and recites: and if you asked them who created them, they would surely say Allah (43:87). The next verses turn to the man who asks, when I have died, will I be brought out alive (19:66), and answer him: does man not remember that We created him before, when he was nothing (19:67). The verse between leaves its hearer a command and a question.",
            "bn": "মুয়াসসার এক বাক্যে বলে: সত্তায়, নামে, গুণে বা কাজে তাঁর মতো কিছুই নেই। 'লাইসা কামিসলিহি শাইউন' কথাটি হুবহু ৪২:১১-এর শব্দ। তাবারীর বর্ণনায় কাতাদা যোগ করেন, তাঁর সৃষ্টির সবাই তাঁকে নিজের স্রষ্টা বলে স্বীকার করে। তারপর তিনি পড়েন: তুমি যদি তাদের জিজ্ঞেস করো, কে তাদের সৃষ্টি করেছে, তারা অবশ্যই বলবে, আল্লাহ (৪৩:৮৭)। পরের আয়াতগুলো এমন এক মানুষের দিকে ফেরে, যে বলে: আমি মরে গেলে কি আমাকে আবার জীবিত করে বের করা হবে (১৯:৬৬)? জবাব আসে: মানুষ কি স্মরণ করে না যে, আমি তাকে আগেই সৃষ্টি করেছি, যখন সে কিছুই ছিল না (১৯:৬৭)? মাঝের এ আয়াত শ্রোতার হাতে রেখে যায় একটি আদেশ আর একটি প্রশ্ন।"
          }
        ]
      }
    ]
  },
  "19:68": {
    "sections": [
      {
        "h": {
          "en": "A Scoff, Then an Oath",
          "bn": "বিদ্রূপ, তারপর কসম"
        },
        "p": [
          {
            "en": "Two verses earlier a man had tossed out a question meant to end the conversation: when I am dead, am I going to be brought forth alive? At-Tabari reads our verse as the answer God tells His Prophet Muhammad to carry back: by your Lord, We will surely gather these very people who said they would never be raised from their graves. The scoffer wanted the subject closed. The reply does not argue him down point by point. It swears. An oath is what you reach for when a person has stopped listening to reasons, and this is a denial that no ordinary reason had moved.",
            "bn": "দুই আয়াত আগে একজন মানুষ এমন এক প্রশ্ন ছুড়ে দিয়েছিল, যা দিয়ে সে আলোচনাটাই থামিয়ে দিতে চেয়েছিল: মরে যাওয়ার পর আমাকে কি জীবিত করে তোলা হবে? তাবারী এ আয়াতকে পড়েন সেই জবাব হিসেবে, যা আল্লাহ তাঁর নবী মুহাম্মদ ﷺ-কে পৌঁছে দিতে বলেন: তোমার রবের কসম, যারা বলেছিল কবর থেকে তাদের কখনো ওঠানো হবে না, ঠিক তাদেরই আমি অবশ্যই একত্র করব। বিদ্রূপকারী চেয়েছিল প্রসঙ্গটা চাপা পড়ুক। জবাব তার সঙ্গে একটা একটা করে যুক্তির লড়াইয়ে নামে না। জবাব কসম খায়। মানুষ যখন যুক্তি শোনাই বন্ধ করে দেয়, তখন কসমের আশ্রয় নিতে হয়। আর এ এমন অস্বীকার, যাকে সাধারণ কোনো যুক্তি টলাতে পারেনি।"
          },
          {
            "en": "Al-Qurtubi notices where the oath is placed. God swears by Himself, he says, after the proof is already established — the proof of the verse just before, that He created this man when he was nothing at all. The gathering He now swears to is no stranger act than the first making; it is the same Lord doing again what He has done before. He will gather these deniers from their graves, al-Qurtubi adds, just as He gathers the believers. The raising they laughed at is not reserved for them; it is the common road of everyone who ever lived.",
            "bn": "কসমটা ঠিক কোথায় বসানো, কুরতুবী তা লক্ষ করেন। তিনি বলেন, প্রমাণ দাঁড় করানোর পরেই আল্লাহ নিজের কসম খান। সেই প্রমাণ আগের আয়াতে: মানুষ যখন কিছুই ছিল না, তখন তিনি তাকে সৃষ্টি করেছেন। এখন যে একত্র করার কসম, তা প্রথম সৃষ্টির চেয়ে অদ্ভুত কোনো কাজ নয়। যা আগে করেছেন, সেই একই রব তা আবার করছেন। কুরতুবী আরও বলেন, এই অস্বীকারকারীদের তিনি কবর থেকে একত্র করবেন, ঠিক যেভাবে মুমিনদের একত্র করবেন। যে পুনরুত্থান নিয়ে তারা হাসাহাসি করেছিল, তা শুধু তাদের জন্য রাখা নয়। দুনিয়ায় যত মানুষ এসেছে, এ সবারই পথ।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Oath Rests On",
          "bn": "কসমের ভিত্তি"
        },
        "p": [
          {
            "en": "Ibn Kathir says plainly what God swears by here: He swears by His own Noble Self that He will surely gather all of these who worshipped others beside Him, and their devils along with them. As-Sa'di reads the same oath as sworn by His Lordship, His being everyone's Rabb, and pauses to remind the reader that the One swearing is the most truthful of all who speak. When such a One binds His word with His own name, the thing sworn to is as settled as anything can be. There is nothing left to add to the certainty; the oath is not persuasion but announcement.",
            "bn": "এখানে আল্লাহ কীসের কসম খান, ইবন কাসীর তা সোজাসুজি বলেন: নিজের সম্মানিত সত্তার কসম খান যে, তাঁকে ছেড়ে অন্যের ইবাদত করা এই সবাইকে তিনি অবশ্যই একত্র করবেন, তাদের শয়তানদেরসহ। সা'দী একই কসমকে পড়েন তাঁর রুবুবিয়্যাতের কসম হিসেবে, তিনি যে সবার রব সেই সূত্রে। আর থেমে পাঠককে মনে করিয়ে দেন, যিনি কসম খাচ্ছেন তিনি সব বক্তার মধ্যে সবচেয়ে সত্যবাদী। এমন একজন যখন নিজের নাম দিয়ে নিজের কথা বাঁধেন, তখন যা নিয়ে কসম তা যতটা নিশ্চিত হওয়া সম্ভব ততটাই নিশ্চিত। নিশ্চয়তার সঙ্গে আর কিছু যোগ করার নেই। কসমটা বোঝানোর জন্য নয়, ঘোষণার জন্য।"
          },
          {
            "en": "At-Tabari keeps the address close and personal: by your Lord, O Muhammad. It is the same Lord the surah has just been naming — the Lord of the heavens and the earth and all that lies between, whom 19:65 told the Prophet to worship and to hold fast in worship. The denier had set his small certainty against the whole order of creation. The oath answers him with the Owner of that order. When a claim that death is the end runs up against the Lord of the heavens and the earth, it is the claim, not the Lord, that has misjudged its size.",
            "bn": "তাবারী সম্বোধনটা কাছের ও ব্যক্তিগত রাখেন: হে মুহাম্মদ, তোমার রবের কসম। এ সেই রব, সূরা যাঁকে এইমাত্র নাম ধরে বলছিল, আকাশ ও যমীন এবং এ দুয়ের মাঝে যা কিছু আছে তার রব, যাঁর ইবাদত করতে আর ইবাদতে অবিচল থাকতে ১৯:৬৫ আয়াত নবীকে বলেছিল। অস্বীকারকারী তার ছোট্ট নিশ্চয়তাটা দাঁড় করিয়েছিল গোটা সৃষ্টির শৃঙ্খলার বিরুদ্ধে। কসম তাকে জবাব দেয় সেই শৃঙ্খলার মালিককে দিয়ে। মৃত্যুই শেষ, এমন দাবি যখন আকাশ ও যমীনের রবের মুখোমুখি হয়, তখন নিজের মাপ ভুল বুঝেছে দাবিটাই, রব নন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Proof Behind the Vow",
          "bn": "কসমের পেছনের প্রমাণ"
        },
        "p": [
          {
            "en": "Ibn Kathir draws out the logic the oath rests on, taken from the verse just before. God uses the beginning of creation as proof of its repetition: He made the human being when he was nothing, so can He not remake him after the human has actually become something? The second making is not harder than the first. The denier's whole objection was that raising the dead is far-fetched, a stretch beyond reason. The Qur'an answers that he has the difficulty backwards. The strange thing already happened, when he was brought out of nothing; doing it again to something that already exists asks less, not more.",
            "bn": "কসম যে যুক্তির উপর দাঁড়িয়ে, ইবন কাসীর আগের আয়াত থেকে তা বের করে আনেন। আল্লাহ প্রথম সৃষ্টিকে দ্বিতীয়বার সৃষ্টির প্রমাণ হিসেবে দাঁড় করান: মানুষ যখন কিছুই ছিল না, তখন তিনি তাকে সৃষ্টি করেছেন; তাহলে মানুষ সত্যি সত্যি কিছু একটা হয়ে যাওয়ার পর তিনি কি তাকে আবার গড়তে পারবেন না? দ্বিতীয়বার গড়া প্রথমবারের চেয়ে কঠিন নয়। অস্বীকারকারীর পুরো আপত্তি ছিল, মৃতকে জীবিত করা অবাস্তব, যুক্তির বাইরে। কুরআন জবাব দেয়, সে কঠিন-সহজের হিসাবটাই উল্টো বুঝেছে। আশ্চর্য কাজটা তো আগেই ঘটে গেছে, যখন তাকে শূন্য থেকে বের করে আনা হয়েছিল। যা আগে থেকেই আছে, তাকে আবার গড়তে লাগে কম, বেশি নয়।"
          },
          {
            "en": "Ibn Kathir attaches here a sound hadith, Sahih al-Bukhari 4974, reported from Abu Hurayra; the Prophet Muhammad relayed God's words: \"The son of Adam denies Me, though he has no right to do so, and he abuses Me, though he has no right to do so. His denying Me is his saying that I will not recreate him as I created him the first time — yet the first creation was not easier for Me than recreating him. His abusing Me is his saying that God has taken a child, while I am the One, the Self-Sufficient, who begets not, nor was begotten, and there is none like unto Me.\"",
            "bn": "ইবন কাসীর এখানে একটি সহীহ হাদিসে কুদসী আনেন, সহীহ বুখারী ৪৯৭৪, আবু হুরাইরা (রাঃ)-এর সূত্রে। নবী মুহাম্মদ ﷺ আল্লাহর বাণী বর্ণনা করেন: \"আদম-সন্তান আমাকে মিথ্যা প্রতিপন্ন করে, অথচ তার সে অধিকার নেই; আর আমাকে গালি দেয়, অথচ তার সে অধিকারও নেই। আমাকে মিথ্যা প্রতিপন্ন করা হলো তার এই কথা যে, আমি তাকে প্রথমবার যেভাবে সৃষ্টি করেছি, সেভাবে আর সৃষ্টি করব না। অথচ তাকে দ্বিতীয়বার সৃষ্টি করার চেয়ে প্রথম সৃষ্টি আমার জন্য সহজ ছিল না। আর আমাকে গালি দেওয়া হলো তার এই কথা যে, আল্লাহ সন্তান গ্রহণ করেছেন। অথচ আমি এক, অমুখাপেক্ষী; আমি জন্ম দিইনি, জন্ম নিইনি, আর আমার সমকক্ষ কেউ নেই।\""
          }
        ]
      },
      {
        "h": {
          "en": "Chained to the Whisperer",
          "bn": "কুমন্ত্রণাদাতার সঙ্গে বাঁধা"
        },
        "p": [
          {
            "en": "We will surely gather them and the devils. At-Tabari reads it as gathering them coupled with their allies among the devils. Al-Baghawi takes the connecting word here to carry the sense of with rather than merely and: every disbeliever is gathered with his devil, he says, joined in a single chain. The picture is not of two crowds herded to the same field, the humans over here and the devils over there. It is of pairs. Each person is fastened to the particular spirit whose company he kept, so that the gathering itself displays who was walking beside whom.",
            "bn": "আমি তাদের অবশ্যই একত্র করব, আর শয়তানদেরও। তাবারীর ব্যাখ্যায়, তাদের একত্র করা হবে শয়তানদের মধ্যে তাদের বন্ধুদের সঙ্গে জুড়ে দিয়ে। বাগাভী এখানে সংযোজক শব্দটিকে শুধু 'আর' অর্থে নেন না, নেন 'সঙ্গে' অর্থে। তিনি বলেন, প্রত্যেক কাফিরকে একত্র করা হবে তার শয়তানের সঙ্গে, একই শিকলে বেঁধে। ছবিটা এমন নয় যে দুটি ভিড়কে একই মাঠে তাড়িয়ে আনা হলো, মানুষ এদিকে আর শয়তান ওদিকে। ছবিটা জোড়ায় জোড়ায়। প্রত্যেক মানুষকে বাঁধা হয় সেই নির্দিষ্ট শয়তানের সঙ্গে, যার সঙ্গ সে ধরে রেখেছিল। ফলে এই জমায়েতই দেখিয়ে দেয়, কে কার পাশে পাশে হেঁটেছিল।"
          },
          {
            "en": "Al-Qurtubi weighs the grammar and lands the same way: reading the particle as with is the more fitting sense, and the meaning is that they are gathered with the devils who led them astray, each disbeliever linked to a devil in a chain. Beside it he sets another verse of gathering — gather those who did wrong and their kinds. As-Sa'di puts it simply: they and their devils, brought together for a known day. The same note sounds across them all: the influence a person chose in life is not left behind at death; it is what he is tied to when he rises.",
            "bn": "কুরতুবী ব্যাকরণ ওজন করে একই সিদ্ধান্তে পৌঁছান: শব্দটিকে 'সঙ্গে' অর্থে পড়াই বেশি মানানসই। অর্থ দাঁড়ায়, যে শয়তানরা তাদের পথভ্রষ্ট করেছিল, তাদের সঙ্গেই তাদের একত্র করা হবে; প্রত্যেক কাফির এক শয়তানের সঙ্গে শিকলে বাঁধা। পাশাপাশি তিনি একত্র করার আরেকটি আয়াত আনেন: যারা জুলুম করেছে তাদের আর তাদের সমগোত্রীয়দের একত্র কর। সা'দী সহজ করে বলেন: তারা আর তাদের শয়তানরা, এক নির্ধারিত দিনের জন্য একত্র। সবার কথায় একই সুর: জীবনে মানুষ যার প্রভাব বেছে নিয়েছিল, মৃত্যুর সময় তা পেছনে পড়ে থাকে না। আবার যখন ওঠানো হবে, তার সঙ্গেই সে বাঁধা থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Only the Deniers, or Everyone?",
          "bn": "শুধু অস্বীকারকারী, না সবাই?"
        },
        "p": [
          {
            "en": "There is a genuine question the commentators leave open, and it is worth keeping so. Who are the them that will be gathered? Al-Qurtubi raises it directly: if the man of the earlier verses means the disbelievers in particular, gathering them with the devils is straightforward — each is chained to the spirit who ruined him. But if the word is read for humankind at large, how does gathering all of them with the devils hold? His answer: when everyone is gathered together, and the disbelievers among them are chained to devils, then in that sense all have been gathered with the devils, as all were gathered with the disbelievers.",
            "bn": "এখানে একটা সত্যিকারের প্রশ্ন আছে, যা তাফসীরকারেরা মীমাংসা না করে খোলা রাখেন, আর খোলা রাখাই ভালো। যাদের একত্র করা হবে, সেই 'তারা' কারা? কুরতুবী সরাসরি প্রশ্নটা তোলেন। আগের আয়াতগুলোর 'মানুষ' যদি বিশেষভাবে কাফিরদের বোঝায়, তবে শয়তানদের সঙ্গে তাদের একত্র করার কথা সোজা: প্রত্যেকে সেই শয়তানের সঙ্গে শিকলে বাঁধা, যে তাকে ধ্বংস করেছে। কিন্তু শব্দটাকে যদি সব মানুষের জন্য ধরা হয়, তবে সবাইকে শয়তানদের সঙ্গে একত্র করার কথা কীভাবে খাটে? তাঁর জবাব: যখন সবাইকে এক জায়গায় জড়ো করা হবে আর তাদের মধ্যকার কাফিররা শয়তানদের সঙ্গে শিকলে বাঁধা থাকবে, তখন সেই অর্থে সবাইকেই শয়তানদের সঙ্গে একত্র করা হলো, যেমন সবাইকে কাফিরদের সঙ্গেও একত্র করা হলো।"
          },
          {
            "en": "Ma'arif al-Qur'an lays the two readings out without forcing a choice. On the first, every rejecter is brought before God along with his own devil, and the verse is about the gathering of the rejecters and their devils. On the wider reading, believers and rejecters are assembled at once, so the devils stand gathered among the whole assembly. The commentators disagree, and the disagreement is no flaw to be smoothed over; it marks the edge of what the words alone decide. What both readings share is the certainty of the gathering, and that whoever chose a whisperer will not, on that day, stand apart from it.",
            "bn": "মাআরিফুল কুরআন দুটি পাঠই পাশাপাশি রাখে, কোনো একটি বেছে নিতে চাপ দেয় না। প্রথম পাঠে প্রত্যেক অস্বীকারকারীকে তার নিজের শয়তানসহ আল্লাহর সামনে হাজির করা হবে, আর আয়াতটি অস্বীকারকারী ও তাদের শয়তানদের একত্র করার কথা বলছে। ব্যাপক পাঠে মুমিন ও অস্বীকারকারী সবাইকে একসঙ্গে জড়ো করা হবে, ফলে শয়তানরাও সেই পুরো জমায়েতের মধ্যে থাকবে। তাফসীরকারেরা এখানে একমত নন, আর এই মতভেদ ঘষেমেজে মুছে ফেলার মতো কোনো খুঁত নয়। শুধু শব্দ দিয়ে কতটুকু মীমাংসা হয়, এ তারই সীমারেখা। দুই পাঠেই যা এক: একত্র হওয়া নিশ্চিত, আর যে কুমন্ত্রণাদাতাকে বেছে নিয়েছে, সেদিন সে তার থেকে আলাদা হয়ে দাঁড়াতে পারবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Brought to the Knees",
          "bn": "নতজানু করে আনা"
        },
        "p": [
          {
            "en": "Then We will bring them round Hell, jithiyy. The Muyassar renders the word directly: kneeling upon their knees, from the sheer severity of the terror they are in, unable to stand up. As-Sa'di reads it the same and lengthens the scene — kneeling on their knees from the ferocity of the horrors, the many convulsions, the ghastliness of the conditions, waiting for the ruling of the Great, the Most High. Both take jithiyy as a posture forced by dread. These are not people arranged in ranks. They are people whose legs have given out, brought to the edge of the Fire in the only position terror has left them.",
            "bn": "অতঃপর আমি তাদের জাহান্নামের চারপাশে হাজির করব, জিছিয়্যা অবস্থায়। মুয়াসসার শব্দটার সরাসরি অর্থ দেয়: হাঁটু গেড়ে বসা; যে আতঙ্কের মধ্যে তারা আছে, তার তীব্রতায় উঠে দাঁড়ানোর শক্তিটুকুও নেই। সা'দীও একই অর্থ নেন, আর দৃশ্যটা আরও বিস্তার করেন: ভয়াবহতার প্রচণ্ডতায়, একের পর এক কম্পনে, অবস্থার বীভৎসতায় তারা হাঁটু গেড়ে বসে আছে, মহান ও সর্বোচ্চ আল্লাহর ফয়সালার অপেক্ষায়। দুজনেই জিছিয়্যাকে ধরেন ভয়ে বাধ্য হয়ে নেওয়া এক ভঙ্গি হিসেবে। এরা সারি বেঁধে দাঁড়ানো মানুষ নয়। এদের পা আর ভার বইতে পারছে না। আতঙ্ক তাদের এই একটি ভঙ্গিতেই রেখে দিয়েছে, আর সেভাবেই তাদের আগুনের কিনারায় আনা হয়েছে।"
          },
          {
            "en": "The early authorities did not read the one word alike, and the commentators preserve the difference rather than paper over it. Al-Baghawi lists three: Ibn Abbas took jithiyy to mean groups, heaps of people gathered kind by kind; al-Hasan and ad-Dahhak took it as kneeling on the knees; as-Suddi read it as standing on the knees, on account of how cramped the place is. Ibn Kathir carries the split too, reporting from Ibn Abbas the sense of sitting, likened to the verse you will see every nation kneeling, and from as-Suddi and Ibn Mas'ud the sense of standing.",
            "bn": "এই একটি শব্দ আদি যুগের আলিমরা এক রকম বোঝেননি, আর তাফসীরকারেরা সেই মতভেদ চাপা না দিয়ে রেখে দিয়েছেন। বাগাভী তিনটি মত উল্লেখ করেন: ইবন আব্বাস (রাঃ) জিছিয়্যা মানে বলেছেন দল, শ্রেণি ধরে ধরে জড়ো হওয়া মানুষের স্তূপ; হাসান ও দাহহাক বলেছেন হাঁটু গেড়ে বসা; আর সুদ্দী বলেছেন হাঁটুর উপর দাঁড়ানো, জায়গাটা এতই সংকীর্ণ বলে। ইবন কাসীরও এই মতভেদ উল্লেখ করেন: ইবন আব্বাস (রাঃ) থেকে বসা অর্থ, যাকে 'তুমি প্রত্যেক জাতিকে নতজানু দেখবে' আয়াতের সঙ্গে মেলানো হয়; আর সুদ্দী ও ইবন মাসউদ (রাঃ) থেকে দাঁড়ানো অর্থ।"
          },
          {
            "en": "Al-Qurtubi gathers all of this and adds his own picture. Read of the disbelievers in particular, they are dragged from the standing-place to the shore of Hell in the very state they were already in — kneeling on their knees, not walking on their feet — since the whole assembly is described elsewhere as kneeling. The reason, he explains, is the restless dread of that station, or a matter too heavy to stand under. He also notes an older reading, from Ibn Abbas and Muqatil, of jithiyy as heaps and gatherings, one company set apart from another.",
            "bn": "কুরতুবী এসব মত একত্র করেন, আর নিজের একটা ছবিও যোগ করেন। বিশেষভাবে কাফিরদের কথা ধরলে, তাদের হাশরের ময়দান থেকে জাহান্নামের কিনারায় টেনে আনা হবে ঠিক যে অবস্থায় তারা আগে থেকেই ছিল: হাঁটু গেড়ে, পায়ে হেঁটে নয়; কারণ অন্য আয়াতে গোটা জমায়েতকেই নতজানু বলা হয়েছে। কারণ হিসেবে তিনি বলেন, হয় সেই স্থানের অস্থির করা আতঙ্ক, নয়তো এমন ভারী ব্যাপার, যার নিচে দাঁড়িয়ে থাকা যায় না। ইবন আব্বাস (রাঃ) ও মুকাতিল থেকে তিনি একটি পুরোনো ব্যাখ্যাও উল্লেখ করেন: জিছিয়্যা মানে স্তূপ ও দল, এক দল আরেক দল থেকে আলাদা।"
          }
        ]
      },
      {
        "h": {
          "en": "Around the Fire, Waiting",
          "bn": "আগুন ঘিরে, অপেক্ষায়"
        },
        "p": [
          {
            "en": "The word around carries its own weight. Al-Qurtubi notes that round Hell can be read as at its rim, encircling it before entry, or even as within it, the way a group may sit round a house yet inside it. On either reading the posture is the same, and the moment is one of suspension: brought to the edge, held kneeling, not yet where they are going. As-Sa'di fixes what fills the pause — they await the ruling of the Great, the Most High. The kneeling is not yet the punishment. It is the standing before it, the dread of a verdict known to be coming and not yet spoken.",
            "bn": "'চারপাশে' শব্দটারও নিজস্ব ওজন আছে। কুরতুবী বলেন, 'জাহান্নামের চারপাশে' মানে হতে পারে তার কিনারায়, ঢোকার আগে তাকে ঘিরে; আবার তার ভেতরেও হতে পারে, যেমন একদল লোক ঘরের চারপাশে বসে, অথচ ঘরের ভেতরেই। যে অর্থই ধরা হোক, ভঙ্গি একই, আর মুহূর্তটা ঝুলে থাকার: কিনারায় আনা হয়েছে, হাঁটু গেড়ে বসিয়ে রাখা হয়েছে, গন্তব্যে তখনো পৌঁছায়নি। এই বিরতিটুকু কীসে ভরা, সা'দী তা বলে দেন: তারা মহান, সর্বোচ্চ আল্লাহর ফয়সালার অপেক্ষায়। হাঁটু গেড়ে বসে থাকাটা এখনো শাস্তি নয়। এ শাস্তির আগের অপেক্ষা, এমন রায়ের ভয়, যা আসছে বলে জানা, অথচ এখনো ঘোষণা হয়নি।"
          },
          {
            "en": "Read in its wider sense, al-Qurtubi and Ma'arif al-Qur'an explain why the assembly is not sorted first. The happy are not parted from the wretched at this gathering the way they will be at the recompense; all are brought kneeling round the Fire together, so that those God saves may see with their own eyes the state He kept them from. The passage then turns to what follows — the dragging out of the worst, the crossing, the parting of the saved from the wrongdoers — but that is the ground of the verses ahead. Here the view holds on the ring of kneeling figures, the verdict still held back.",
            "bn": "ব্যাপক অর্থে পড়লে কেন জমায়েতকে আগে বাছাই করা হয় না, কুরতুবী ও মাআরিফুল কুরআন তা ব্যাখ্যা করেন। প্রতিদানের সময় যেভাবে সৌভাগ্যবানদের হতভাগাদের থেকে আলাদা করা হবে, এই জমায়েতে সেভাবে করা হয় না। সবাইকে একসঙ্গে আগুনের চারপাশে হাঁটু গেড়ে বসিয়ে আনা হয়, যেন আল্লাহ যাদের বাঁচাবেন, তারা নিজের চোখে দেখে নেয় কোন অবস্থা থেকে তিনি তাদের রক্ষা করেছেন। এরপর আয়াতগুলো সামনের ঘটনায় যায়: সবচেয়ে অবাধ্যদের টেনে বের করা, পার হওয়া, জালিমদের থেকে রক্ষা-পাওয়াদের আলাদা করা। তবে সেটা পরের আয়াতগুলোর বিষয়। এখানে দৃষ্টি থেমে থাকে হাঁটু গেড়ে বসা মানুষের সেই বৃত্তে, রায় তখনো ঘোষণা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Does Not Hand Us",
          "bn": "যা আয়াত আমাদের হাতে দেয় না"
        },
        "p": [
          {
            "en": "This must be said plainly, in case the scene is misread. The verse describes what the Hereafter will do to those who denied the raising and followed the whisperer — a gathering, a chaining, a bringing to the knees around the Fire. It is a picture of God's justice on His own day, and it hands nobody a verdict to pass on any living person or community. No reader may set a neighbour in that ring. The gathering belongs to the Lord who swore it; carrying it out is His, not ours. What this verse gives the living is warning about oneself, never a warrant against another.",
            "bn": "দৃশ্যটা যাতে ভুল না বোঝা হয়, তাই কথাটা সোজাসুজি বলা দরকার। পুনরুত্থান যারা অস্বীকার করেছিল আর কুমন্ত্রণাদাতার পিছু নিয়েছিল, আখিরাতে তাদের কী হবে, আয়াত সেটাই বর্ণনা করে: একত্র করা, শিকলে বাঁধা, আগুনের চারপাশে হাঁটু গেড়ে বসানো। এ হলো আল্লাহর নিজের দিনে তাঁর ইনসাফের ছবি। কোনো জীবিত মানুষ বা জনগোষ্ঠীর ব্যাপারে রায় দেওয়ার অধিকার এ আয়াত কাউকে দেয় না। কোনো পাঠক তার প্রতিবেশীকে ওই বৃত্তে বসিয়ে দিতে পারে না। এ জমায়েতের মালিক সেই রব, যিনি এর কসম খেয়েছেন; তা কার্যকর করাও তাঁর কাজ, আমাদের নয়। জীবিতদের জন্য এ আয়াত নিজের ব্যাপারে সতর্কবাণী, অন্যের বিরুদ্ধে ছাড়পত্র কখনো নয়।"
          },
          {
            "en": "And so the verse turns back on whoever recites it. The scoffer was sure, and his sureness had a source he did not examine — a voice he had let sit close. Everyone carries some certainty they have never checked against the Lord of the heavens and the earth, and some voice they trust more than they would admit. The oath does not ask me to fear a scene I cannot picture. It asks a plainer thing: to notice what I dismiss because it will not fit inside my imagining, and to notice whose company I am keeping at the very moment I dismiss it.",
            "bn": "এভাবে আয়াতটি ফিরে আসে যে পড়ছে, তার নিজের দিকেই। বিদ্রূপকারী নিশ্চিত ছিল, আর তার নিশ্চয়তার একটা উৎস ছিল, যা সে কখনো যাচাই করেনি: এমন এক কণ্ঠ, যাকে সে কাছে ঘেঁষতে দিয়েছিল। প্রত্যেকেই এমন কোনো নিশ্চয়তা বয়ে বেড়ায়, যা কখনো আকাশ ও যমীনের রবের সামনে রেখে যাচাই করা হয়নি; আর এমন কোনো কণ্ঠকে ভরসা করে, যতটা সে মুখে স্বীকার করবে তার চেয়েও বেশি। কসম আমাকে এমন কোনো দৃশ্যকে ভয় করতে বলে না, যা আমি কল্পনাই করতে পারি না। বলে আরও সহজ একটা কথা: আমার কল্পনায় আঁটে না বলে আমি কী কী উড়িয়ে দিই, তা খেয়াল করা; আর ঠিক যে মুহূর্তে উড়িয়ে দিই, তখন আমি কার সঙ্গে আছি, তা-ও খেয়াল করা।"
          }
        ]
      }
    ]
  },
  "19:75": {
    "sections": [
      {
        "h": {
          "en": "Reply to a Boast",
          "bn": "গর্বের জবাব"
        },
        "p": [
          {
            "en": "Say. The verse opens with a command to the Prophet, and at-Tabari fixes exactly whom he is to address: those idolaters who, when Our clear verses are recited, ask which of the two parties is better in station and finer in assembly. That question is the taunt of 19:73, thrown by the wealthy at the poor believers. Ibn Kathir adds that these same deniers claimed to be on the truth and the believers on falsehood. So this is not a new subject; it is the answer to a boast just made.",
            "bn": "বল। আয়াতটি শুরু হয় নবীকে দেওয়া এক নির্দেশ দিয়ে, আর তাবারী ঠিক ধরিয়ে দেন কাদের উদ্দেশ্যে তা বলতে হবে: সেই মুশরিকরা, আমার স্পষ্ট আয়াত যখন তাদের সামনে পড়া হয় তখন যারা জিজ্ঞেস করে, দুই দলের মধ্যে মর্যাদায় কে শ্রেষ্ঠ আর মজলিসে কে উত্তম। এই প্রশ্নটাই ১৯:৭৩ আয়াতের সেই টিটকারি, ধনী কাফিররা যা ছুঁড়ে দিত গরিব মু'মিনদের দিকে। ইবন কাসীর যোগ করেন, এই অস্বীকারকারীরাই দাবি করত তারা হকের উপর আর মু'মিনরা বাতিলের উপর। তাই এটা নতুন কোনো প্রসঙ্গ নয়, সদ্য করা এক গর্বের জবাব।"
          },
          {
            "en": "Notice what the answer refuses to concede. At-Tabari and Ibn Kathir both read whoever is in error as covering us and you alike — the Prophet is told to say, whichever of the two of us is astray, let the Merciful extend him. The station the deniers were counting was material: Ma'arif al-Qur'an describes them as rich, with retinues, followers and supporters, while the believers were poor. Their mistake was to read that abundance as a token of God's favour and their own merit, a mistake history has buried under many ruined nations.",
            "bn": "জবাবটি কী মানতে অস্বীকার করছে, খেয়াল করুন। তাবারী আর ইবন কাসীর দুজনেই 'যে গুমরাহীতে আছে' কথাটিকে পড়েন আমাদের ও তোমাদের উভয়কে ধরে। নবীকে বলা হচ্ছে, আমাদের দুই পক্ষের যে-ই পথভ্রষ্ট, রহমান তাকেই ঢিল দিন। কাফিররা যে মর্যাদার হিসাব কষছিল, তা ছিল বস্তুগত। মাআরিফুল কুরআন জানায়, তারা ছিল ধনী, সঙ্গে লোকলস্কর, অনুসারী আর সমর্থক; আর মু'মিনরা তখন গরিব। তাদের ভুল ছিল এই প্রাচুর্যকে আল্লাহর অনুগ্রহ আর নিজেদের যোগ্যতার প্রমাণ ভেবে নেওয়া। এই ভুলকে ইতিহাস বহু বিলুপ্ত জাতির ধ্বংসস্তূপের নিচে চাপা দিয়ে রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Command That Predicts",
          "bn": "যে নির্দেশ আসলে সংবাদ"
        },
        "p": [
          {
            "en": "Let the Most Merciful extend for him an extension. The wording is an imperative — let Him extend — but al-Baghawi and al-Qurtubi both stop to say the form is a command whose meaning is a statement. It is not the Prophet ordering God to do anything; it is God reporting what He does: whoever is content with error, He leaves in it. At-Tabari and Ibn Kathir gloss the phrase with Mujahid's short line, that Allah leaves him in his transgression, and at-Tabari adds his own word for it, imlaa, a granting of respite.",
            "bn": "রহমান তাকে ঢিল দিন, লম্বা ঢিল। শব্দগুলো আদেশের রূপে: তিনি ঢিল দিন। কিন্তু বাগাভী আর কুরতুবী দুজনেই থেমে বলেন, রূপটা আদেশের হলেও অর্থটা সংবাদের। নবী এখানে আল্লাহকে কিছু করার হুকুম দিচ্ছেন না; আল্লাহ জানাচ্ছেন তিনি কী করেন: যে গোমরাহিতে সন্তুষ্ট, তাকে তিনি তাতেই ছেড়ে রাখেন। তাবারী আর ইবন কাসীর এর ব্যাখ্যায় মুজাহিদের ছোট্ট কথাটি আনেন: আল্লাহ তাকে তার সীমালঙ্ঘনে ছেড়ে দেন। আর তাবারী নিজের একটি শব্দও যোগ করেন: ইমলা, অর্থাৎ অবকাশ দেওয়া।"
          },
          {
            "en": "Al-Qurtubi records a second reading he does not dismiss. On it, the sentence is a supplication the Prophet is told to make, the way a wronged man says, whoever stole my property, may God cut off his hand. Read that way, extend for him is a prayer against the misguided, not a prediction about them, and the imperative keeps its plain force. Al-Qurtubi lays both readings side by side without ruling between them. Either way the outcome is the same: the extension runs against the very person it is granted to.",
            "bn": "কুরতুবী আরেকটি পাঠও উল্লেখ করেন, আর সেটাকে তিনি উড়িয়ে দেন না। এই পাঠে বাক্যটি আসলে একটি দোয়া, যা নবীকে করতে বলা হচ্ছে। মজলুম যেমন বলে: যে আমার মাল চুরি করেছে, আল্লাহ তার হাত কেটে দিন। এভাবে পড়লে 'তার জন্য ঢিল দিন' গুমরাহদের সম্পর্কে কোনো ভবিষ্যদ্বাণী নয়, তাদের বিরুদ্ধে বদদোয়া; আর আদেশটি তার সোজা অর্থেই থাকে। কুরতুবী দুটি পাঠ পাশাপাশি রেখে দেন, কোনটি ঠিক তা বলেন না। যেভাবেই পড়ুন, পরিণাম একই: যাকে ঢিল দেওয়া হয়, ঢিলটা তারই বিপক্ষে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Rope Let Out",
          "bn": "ঢিল দেওয়া রশি"
        },
        "p": [
          {
            "en": "Al-Qurtubi is the one who spells out how a mercy-shaped word can carry a threat. The Merciful extends him an extension, he writes, so that his delusion lengthens, and that becomes more severe for his punishment. The respite is not the sentence lifted; it is the sentence deepened. He reaches for a verse that says the mechanism outright: We only extend to them that they may increase in sin (3:178), and another, We leave them wandering blind in their transgression. The extra time is rope, and the one holding it is walking toward a cliff.",
            "bn": "দয়ার মোড়কে মোড়া একটি শব্দ কীভাবে হুমকি বয়ে আনে, কুরতুবীই তা খুলে বলেন। তিনি লেখেন: রহমান তাকে ঢিল দেন, যাতে তার বিভ্রান্তি আরও দীর্ঘ হয়, আর তাতে তার শাস্তি আরও কঠিন হয়। ঢিল মানে সাজা তুলে নেওয়া নয়, সাজা আরও গভীর হওয়া। এর পক্ষে তিনি এমন আয়াত আনেন, যেখানে কথাটা সরাসরি বলা আছে: আমি তো তাদের ঢিল দিই কেবল এজন্য যেন তারা গুনাহ বাড়িয়ে নেয় (৩:১৭৮)। আরেকটি আয়াত: আমি তাদের ছেড়ে দিই, তারা নিজেদের অবাধ্যতায় অন্ধের মতো ঘুরে বেড়ায়। বাড়তি সময়টাই রশি, আর যে তা ধরে আছে সে হাঁটছে খাদের দিকে।"
          },
          {
            "en": "At-Tabari names the same act more gently and no less gravely: let God prolong him in his error and grant him respite in it, imlaa. Al-Qurtubi draws out the picture — let the man live as long as he likes and widen his own lease on life, for his end is death and the reckoning. Then he calls the whole verse the utmost in threat and warning. What sounds, on the surface, like room to breathe is on their reading the tightening of a case that will not be reopened.",
            "bn": "তাবারী একই কথা বলেন আরও নরম ভাষায়, তবে গুরুত্ব তাতে একটুও কমে না: আল্লাহ তাকে তার ভ্রান্তিতে আরও সময় দিন, তাতে অবকাশ দিন। এরই নাম ইমলা। কুরতুবী ছবিটা আরও ফুটিয়ে তোলেন: লোকটা যত দিন খুশি বাঁচুক, নিজের আয়ু যত ইচ্ছা বাড়িয়ে নিক, শেষে তো তার মৃত্যু আর হিসাব। তারপর তিনি গোটা আয়াতটিকে বলেন হুমকি আর সতর্কবাণীর চূড়ান্ত রূপ। বাইরে থেকে যাকে দম ফেলার সুযোগ মনে হয়, তাঁদের ব্যাখ্যায় তা আসলে মামলার ফাঁস আরও শক্ত হওয়া, যে মামলা আর কখনো খোলা হবে না।"
          },
          {
            "en": "The tradition has a name for this pattern, istidraj — being drawn on, step by step, by the very gifts one misreads as approval. The commentators here do not use the word, but they describe the thing exactly: an ease that is not withheld, precisely so that the loss can grow. That is why the verb the Qur'an chooses for it elsewhere, numli, sits so close to at-Tabari's imlaa. The kindness is real as sound; it is the reading of the kindness that is deadly.",
            "bn": "ইসলামী পরিভাষায় এই ধারার একটা নাম আছে: ইসতিদরাজ। অর্থাৎ যে নিয়ামতকে মানুষ আল্লাহর সন্তুষ্টির চিহ্ন বলে ভুল বোঝে, সেই নিয়ামত দিয়েই তাকে ধাপে ধাপে টেনে নেওয়া। এখানকার তাফসীরকারেরা শব্দটা ব্যবহার করেননি, কিন্তু জিনিসটার হুবহু বর্ণনা দিয়েছেন: সুখ-স্বাচ্ছন্দ্য কেড়ে নেওয়া হয় না, ঠিক এজন্যই যেন ক্ষতিটা বাড়তে থাকে। এ কারণেই কুরআন অন্য জায়গায় এর জন্য যে ক্রিয়া বেছে নিয়েছে, নুমলি, তা তাবারীর 'ইমলা'র এত কাছাকাছি। দয়াটা শুনতে সত্যিকারের দয়াই; প্রাণঘাতী হলো সেই দয়াকে ভুল বোঝা।"
          }
        ]
      },
      {
        "h": {
          "en": "Respite Read as Verdict",
          "bn": "অবকাশ যখন রায়"
        },
        "p": [
          {
            "en": "As-Sa'di sharpens the moral logic. Having laid out the deniers' false proof — the sign of how hard their obstinacy and how deep their misguidance had grown — he says that whoever is in error, in that he has grown content with it and worked at it, God extends him in it and increases him in love of it, as a punishment for choosing it over guidance. The respite is not neutral time; it is a verdict already being carried out. Their own preference is handed back to them, magnified.",
            "bn": "সা'দী বিষয়টার নৈতিক যুক্তি আরও স্পষ্ট করেন। অস্বীকারকারীরা যে মিথ্যা প্রমাণ দাঁড় করিয়েছিল, তা ছিল তাদের গোঁয়ার্তুমি কত শক্ত আর গুমরাহী কত গভীর হয়ে গেছে তারই নিদর্শন। এ কথা বলার পর তিনি লেখেন: যে গুমরাহীতে আছে, মানে তাতেই সন্তুষ্ট হয়ে তার পেছনে খেটেছে, আল্লাহ তাকে তাতেই ঢিল দেন, আর গুমরাহীর প্রতি তার ভালোবাসা বাড়িয়ে দেন। হিদায়াতের বদলে গুমরাহী বেছে নেওয়ার এটাই শাস্তি। তাই অবকাশ নিরপেক্ষ সময় নয়; এ এক রায়, যা কার্যকর হতে শুরু করেছে। তাদের নিজেদের পছন্দই বহুগুণ বড় হয়ে তাদের হাতে ফিরে আসে।"
          },
          {
            "en": "He grounds this in two verses about the same law. When they deviated, God made their hearts deviate (61:5); and, We turn their hearts and their sight away, as they did not believe in it the first time, and leave them wandering blind in their rebellion. On this reading the extension is God ratifying a choice the person made first. It answers a question the verse quietly raises: why would the Merciful lengthen anyone in ruin? Because the ruin was chosen, and the lengthening lets the choice bear its fruit.",
            "bn": "এর ভিত্তি হিসেবে তিনি একই নিয়মের কথা বলা দুটি আয়াত আনেন। তারা যখন বাঁকা পথ ধরল, আল্লাহ তাদের অন্তর বাঁকা করে দিলেন (৬১:৫)। আর: তারা যেমন প্রথমবার এতে ঈমান আনেনি, তেমনি আমি তাদের অন্তর আর দৃষ্টি ঘুরিয়ে দিই, আর তাদের ছেড়ে দিই, তারা নিজেদের অবাধ্যতায় অন্ধের মতো ঘুরে বেড়ায়। এই ব্যাখ্যায় ঢিল দেওয়া মানে, মানুষ আগে নিজে যা বেছে নিয়েছে, আল্লাহ তাতে সিলমোহর দেন। আয়াতটি নীরবে যে প্রশ্ন তোলে, তার জবাবও এখানেই: রহমান কেন কাউকে ধ্বংসের পথে আরও সময় দেবেন? কারণ ধ্বংসটা সে নিজেই বেছে নিয়েছিল, আর এই বাড়তি সময় সেই পছন্দকে ফল পর্যন্ত পৌঁছে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Extended by the Merciful",
          "bn": "রহমানের দেওয়া ঢিল"
        },
        "p": [
          {
            "en": "Read the sentence again and the chosen Name jars. It is ar-Rahman, the Most Merciful, who lets the rope out. Surah Maryam returns to that Name again and again; through the story of Zakariyya, of Maryam, of the prophets who fell prostrate, it has been the surah's steady refrain. Here the same Name governs the respite given to those who deny Him. The mercy is not being suspended for the deniers; the extension itself issues from the Merciful, and that is precisely what makes it so easy to misread.",
            "bn": "বাক্যটা আবার পড়ুন, বেছে নেওয়া নামটা কানে বাধে। রশি ঢিল দিচ্ছেন যিনি, তিনি আর-রহমান, পরম দয়াময়। সূরা মারইয়াম বারবার এই নামে ফিরে আসে; যাকারিয়্যা (আঃ), মারইয়াম আর সিজদায় লুটিয়ে পড়া নবীদের কাহিনি জুড়ে এই নামই সূরার ধুয়া। আর এখানে, যারা তাঁকে অস্বীকার করে, তাদের অবকাশও দেওয়া হচ্ছে সেই নামেই। অস্বীকারকারীদের বেলায় দয়া মুলতবি রাখা হয়নি; ঢিলটা আসছে দয়াময়ের কাছ থেকেই। ঠিক এ কারণেই একে ভুল বোঝা এত সহজ।"
          },
          {
            "en": "So the irony is built into the wording. The word for what He does, extend, is on al-Qurtubi's reading a lengthening toward greater punishment; the One who does it is named for His mercy. A person inside that respite feels only the mercy. The open years, the untouched wealth, and nothing of the case being built against him reaches his ears. That is the danger the verse means to expose. To be handled gently by the Merciful is not, on its own, evidence of anything; the same gentleness covers the guided and the misguided alike, and only the end tells them apart.",
            "bn": "তাই পরিহাসটা শব্দের ভেতরেই গাঁথা। তিনি যা করেন, সেই 'ঢিল দেওয়া' কুরতুবীর ব্যাখ্যায় কঠিনতর শাস্তির দিকে টেনে লম্বা করা; অথচ যিনি তা করেন, তাঁর নাম দয়ার নাম। সেই অবকাশের ভেতরে থাকা মানুষ কেবল দয়াটাই টের পায়। বছরের পর বছর অবাধ সময়, অক্ষত সম্পদ; আর তার বিরুদ্ধে যে মামলা সাজানো হচ্ছে, তার কিছুই তার কানে পৌঁছায় না। আয়াত ঠিক এই বিপদটাই খুলে দেখাতে চায়। দয়াময় কারও সঙ্গে নরম আচরণ করছেন, শুধু এটুকু দিয়ে কিছুই প্রমাণ হয় না। একই নরম আচরণ হেদায়েতপ্রাপ্ত আর গুমরাহ দুজনের ওপরই থাকে; কে কোন দলে, তা বোঝা যায় কেবল শেষে।"
          }
        ]
      },
      {
        "h": {
          "en": "Until the Promise Arrives",
          "bn": "ওয়াদা যতক্ষণ না আসে"
        },
        "p": [
          {
            "en": "The respite has a horizon: until, when they see what they are promised. The commentators split the promise into its two named halves. The first, the punishment, they read as a worldly blow. Al-Qurtubi and al-Baghawi understand it as the believers' victory over them, the sword and captivity; as-Sa'di allows killing or the like. This is punishment that arrives inside history, before death, catching the boast while its makers still stand in the very stations they were bragging about.",
            "bn": "অবকাশের একটা সীমা আছে: যতক্ষণ না তারা দেখবে, যার ওয়াদা তাদের দেওয়া হয়েছে। আয়াতে এই ওয়াদার দুটি অংশের নাম আছে, আর তাফসীরকারেরা দুটিকে আলাদা করে দেখেন। প্রথমটি শাস্তি; একে তাঁরা দুনিয়ার আঘাত বলে বোঝেন। কুরতুবী আর বাগাভীর মতে এ হলো তাদের ওপর মু'মিনদের বিজয়, তলোয়ার আর বন্দিত্ব; সা'দী হত্যা বা এমন কিছুর কথা বলেন। এ শাস্তি আসে ইতিহাসের ভেতরেই, মৃত্যুর আগে। যারা বড়াই করছিল, তারা তখনো সেই মর্যাদার আসনেই দাঁড়িয়ে, যা নিয়ে তাদের এত গর্ব; ঠিক তখনই শাস্তি তাদের ধরে ফেলে।"
          },
          {
            "en": "The second half is the Hour. As-Sa'di calls it the gate of recompense for deeds; al-Qurtubi and al-Baghawi say simply that it comes and they enter the Fire. Either the near thing or the far one will pull the covering off. At-Tabari joins the two into one long sentence: let the Merciful extend him in his error until God's affair reaches him, whether a swift punishment or the meeting with their Lord when the Hour stands. The extension, however long, is bounded on both sides by a day of seeing.",
            "bn": "দ্বিতীয় অংশটি কিয়ামত। সা'দী একে বলেন আমলের প্রতিদানের দরজা; কুরতুবী আর বাগাভী সোজা বলেন, কিয়ামত আসবে আর তারা আগুনে ঢুকবে। কাছেরটা হোক বা দূরেরটা, কোনো একটা এসে পর্দা সরিয়ে দেবেই। তাবারী দুটোকে এক লম্বা বাক্যে জুড়ে দেন: রহমান তাকে তার ভ্রান্তিতে ঢিল দিন, যতক্ষণ না আল্লাহর হুকুম তার কাছে পৌঁছায়, তা দ্রুত কোনো শাস্তিই হোক কিংবা কিয়ামত কায়েম হলে রবের সঙ্গে সাক্ষাৎই হোক। ঢিল যত লম্বাই হোক, দুই দিক থেকেই তা গিয়ে ঠেকে এমন এক দিনে, যেদিন সব চোখের সামনে আসবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Worse in Place, Weaker in Host",
          "bn": "মর্যাদায় নিকৃষ্ট, জনবলে দুর্বল"
        },
        "p": [
          {
            "en": "Then they will know who is worse in position and weaker in host. Every commentator hears this as the deliberate mirror of the taunt in 19:73. They had asked which party is better in station and assembly; the verse hands the same two measures back inverted. Ibn Kathir says it stands in counter to their argument from fine stations and splendid gatherings. Al-Baghawi spells the reversal out: worse in dwelling, fewer in helpers — they, or the believers? — since these end in the Fire and the believers in the Garden.",
            "bn": "তখন তারা জানবে, মর্যাদায় কে নিকৃষ্ট আর জনবলে কে দুর্বল। সব তাফসীরকারই এখানে ১৯:৭৩ আয়াতের টিটকারির সচেতন প্রতিধ্বনি শোনেন। তারা জিজ্ঞেস করেছিল, দুই দলের মধ্যে মর্যাদায় আর মজলিসে কে শ্রেষ্ঠ; আয়াত সেই দুটো মাপকাঠিই উল্টে তাদের হাতে ফিরিয়ে দেয়। ইবন কাসীর বলেন, সুন্দর আসন আর জমকালো মজলিস দিয়ে তারা যে যুক্তি দিয়েছিল, এ তার পাল্টা জবাব। বাগাভী উল্টে যাওয়াটা খুলে বলেন: বাসস্থানে কে নিকৃষ্ট, সাহায্যকারীতে কে কম, তারা নাকি মু'মিনরা? এদের শেষ তো আগুনে, আর মু'মিনদের জান্নাতে।"
          },
          {
            "en": "As-Sa'di presses on to the cruelty of the timing. When they see it, he writes, the falseness of their claim becomes plain to them; it was a claim already dissolving, and they grow certain that they are the people of evil and the weaker host. But, and this is his point, the knowledge will do them no good, because there is no returning to the world to do other than the deeds they first did. The answer to their question comes exactly when it can no longer be acted on.",
            "bn": "সা'দী আরও এগিয়ে সময়টার নির্মমতা দেখান। তিনি লেখেন, তারা যখন তা দেখবে, তখন তাদের দাবি যে মিথ্যা, তা তাদের কাছে স্পষ্ট হয়ে যাবে; সে দাবি আগেই ভেঙে পড়ছিল। তারা নিশ্চিত হবে, তারাই মন্দ লোক, জনবলে তারাই দুর্বল। কিন্তু তাঁর আসল কথা এখানে: এই জানা তাদের কোনো কাজে আসবে না, কারণ দুনিয়ায় ফিরে গিয়ে আগের আমলের বদলে অন্য কিছু করার আর সুযোগ নেই। তাদের প্রশ্নের জবাব আসে ঠিক তখন, যখন সে অনুযায়ী আর কিছুই করা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning It on Yourself",
          "bn": "আঙুল নয়, আয়না"
        },
        "p": [
          {
            "en": "One caution must be stated plainly, in the reading and in the living of it alike. This verse describes a specific people: the deniers of the Prophet's own day who mocked the believers and read their own wealth as proof of God's favour. It licenses nothing against any living person or community. It is not a tool for looking at a comfortable neighbour, a prosperous rival or another faith and pronouncing them the ones being drawn to ruin. The verse gives no one that verdict to pass. Its whole force turns the other way, inward, on the reader's own respite.",
            "bn": "একটা সতর্কতা সোজাসুজি বলা দরকার, পড়ার বেলায়ও, জীবনে মানার বেলায়ও। এই আয়াত এক নির্দিষ্ট দলের কথা বলে: নবীর যুগের সেই অস্বীকারকারীরা, যারা মু'মিনদের বিদ্রূপ করত আর নিজেদের সম্পদকে আল্লাহর অনুগ্রহের প্রমাণ মনে করত। আজকের কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। সচ্ছল প্রতিবেশী, উন্নতি করা প্রতিদ্বন্দ্বী বা অন্য ধর্মের মানুষের দিকে তাকিয়ে 'এদেরই ধ্বংসের দিকে টেনে নেওয়া হচ্ছে' বলে রায় দেওয়ার জন্য এ আয়াত নয়। এমন রায় দেওয়ার অধিকার আয়াত কাউকে দেয়নি। এর পুরো জোর উল্টো দিকে, ভেতরের দিকে: পাঠকের নিজের অবকাশের ওপর।"
          },
          {
            "en": "There is a sound narration that names this very law, though the Prophet attached it to a different verse. Sahih al-Bukhari records that the Messenger صلى الله عليه وسلم said, Allah gives respite to the wrongdoer, but when He seizes him He does not let him go, and then he recited, not this verse, but such is the seizure of your Lord when He seizes the towns while they do wrong (11:102). The word he used for respite, yumli, is the very verb the commentators reached for here. It is a general truth about imlaa, not a report tied to 19:75.",
            "bn": "একটি সহীহ বর্ণনায় ঠিক এই নিয়মের কথাই এসেছে, যদিও নবী صلى الله عليه وسلم তা অন্য একটি আয়াতের সঙ্গে যুক্ত করেছিলেন। সহীহ বুখারীতে আছে, রাসূলুল্লাহ صلى الله عليه وسلم বলেছেন: আল্লাহ জালিমকে ঢিল দেন, কিন্তু যখন পাকড়াও করেন, তখন আর ছাড়েন না। তারপর তিনি এই আয়াত নয়, বরং এটি তিলাওয়াত করেন: তোমার রবের পাকড়াও এমনই, যখন তিনি জুলুমে লিপ্ত জনপদগুলোকে পাকড়াও করেন (১১:১০২)। অবকাশ বোঝাতে তিনি যে শব্দ বলেছেন, ইউমলি, এখানে তাফসীরকারেরাও ঠিক সেই ক্রিয়াই বেছে নিয়েছেন। এটি ইমলা সম্পর্কে একটি সাধারণ সত্য, ১৯:৭৫-এর সঙ্গে সরাসরি যুক্ত কোনো বর্ণনা নয়।"
          },
          {
            "en": "So the honest use of the verse is a mirror, not a pointing finger. If nothing I do seems to cost me, the question is not whether God has approved my life but whether I have mistaken His patience for approval. The frightening possibility is that a lengthening loss can feel, from the inside, exactly like ease. The verse leaves the misguided at their unopened reckoning and, in the line that follows, turns to those who take guidance. But that is the next verse's mercy, and its own to tell.",
            "bn": "তাই এ আয়াতের সৎ ব্যবহার হলো আয়না হিসেবে, অন্যের দিকে আঙুল তোলার জন্য নয়। আমি যা-ই করি, যদি কোনো কিছুরই দাম দিতে না হয়, তবে প্রশ্নটা এই নয় যে আল্লাহ আমার জীবন মেনে নিয়েছেন কিনা; প্রশ্ন হলো, আমি তাঁর ধৈর্যকেই তাঁর সম্মতি ভেবে ভুল করছি কিনা। ভয়ের কথা হলো, ক্রমে বাড়তে থাকা ক্ষতি ভেতর থেকে ঠিক আরামের মতোই লাগতে পারে। আয়াতটি গুমরাহদের ছেড়ে যায় তাদের এখনো না-খোলা হিসাবের সামনে, আর পরের লাইনেই ফিরে তাকায় তাদের দিকে, যারা হেদায়েতের পথ ধরে। তবে সেটা পরের আয়াতের রহমত, সে কথা সেখানেই।"
          }
        ]
      }
    ]
  },
  "19:85-86": {
    "sections": [
      {
        "h": {
          "en": "One Day, Two Processions",
          "bn": "এক দিন, দুই মিছিল"
        },
        "p": [
          {
            "en": "The verses just before this told the Prophet not to be impatient with the deniers, because their days are being counted out to a fixed number (19:83 and 19:84). Here the counting ends and the Day itself arrives. In two short lines the Qur'an lays two processions side by side: the God-fearing gathered to the Most Merciful, and the criminals driven to Hell. Al-Muyassar reads the pair as one scene, one crowd brought as honoured delegations and the other driven to the Fire on foot and thirsty. Everything in the two verses turns on that single contrast.",
            "bn": "এর ঠিক আগের আয়াতগুলোতে নবী ﷺ-কে বলা হয়েছে অস্বীকারকারীদের নিয়ে তাড়াহুড়ো না করতে, কারণ তাদের দিনগুলো নির্দিষ্ট সংখ্যায় গোনা হচ্ছে (১৯:৮৩ ও ১৯:৮৪)। এখানে সেই গোনা শেষ হয়, দিন এসে যায়। মাত্র দুই লাইনে কুরআন পাশাপাশি রাখে দুই মিছিল: মুত্তাকীদের দয়াময়ের কাছে জড়ো করা হচ্ছে, আর অপরাধীদের জাহান্নামের দিকে তাড়িয়ে নেওয়া হচ্ছে। মুয়াসসার দুটোকে একসঙ্গে এক দৃশ্য হিসেবে পড়েন, এক দল আসে সম্মানিত অতিথি হয়ে, আর অন্য দলকে পায়ে হেঁটে, পিপাসার্ত অবস্থায় আগুনের দিকে তাড়ানো হয়। দুই আয়াতের সবকিছু ঘুরছে ওই একটিমাত্র বৈপরীত্যের ওপর।"
          },
          {
            "en": "The weight of each line sits on its last word. The first crowd arrives as a wafd, a delegation; the second is brought wirdan, in thirst. The two words share their sound and almost mirror each other, yet they name opposite fates. As-Sa'di opens his comment by naming exactly this: Allah is telling us the difference between the two parties, the God-fearing and the criminals. The lines do not describe two places so much as two arrivals, and the whole of a life is folded into the question of which arrival it earns.",
            "bn": "প্রতিটি লাইনের ওজন পড়েছে তার শেষ শব্দে। প্রথম দল আসে ওয়াফদ হয়ে, অর্থাৎ অতিথিদল; দ্বিতীয় দলকে আনা হয় ওয়িরদ অবস্থায়, অর্থাৎ পিপাসায়। শব্দ দুটির ধ্বনি প্রায় এক, দেখতেও যেন একে অন্যের প্রতিচ্ছবি, অথচ এরা দুই বিপরীত পরিণতির নাম। সা’দী আয়াতের ব্যাখ্যা শুরুই করেন এই কথা দিয়ে: আল্লাহ এখানে দুই দলের পার্থক্য জানাচ্ছেন, মুত্তাকী আর অপরাধী। লাইন দুটি যতটা না দুই জায়গার বর্ণনা, তার চেয়ে বেশি দুই আগমনের বর্ণনা। আর মানুষের গোটা জীবনের হিসাব এসে দাঁড়ায় একটি প্রশ্নে: সে কোন আগমনের যোগ্য হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "What a Delegation Is",
          "bn": "অতিথিদল যাকে বলে"
        },
        "p": [
          {
            "en": "At-Tabari glosses wafd plainly: it means ar-rukban, the riders. The word is a collective, one in form but many in sense, from wafada, to arrive at someone; a people send a wafd to their commander when they dispatch a party ahead of them. Al-Baghawi reads it as jama'at, groups, the plural of wafid, one who arrives, on the pattern of rakb from rakib. Ibn Kathir fills in the picture: the wafd are those who come riding, and they will come upon noble mounts of light from the steeds of the Hereafter, arriving before the Best of those to whom delegations come.",
            "bn": "তাবারী ওয়াফদ শব্দের সোজা অর্থ দেন: আর-রুকবান, অর্থাৎ সওয়ারিরা। শব্দটি গঠনে একবচন, অর্থে বহুবচন। এসেছে ‘ওয়াফাদা’ থেকে, মানে কারও কাছে এসে পৌঁছানো। কোনো গোষ্ঠী নিজেদের আগে একটি দল পাঠিয়ে দিলে বলা হয়, তারা সেনাপতির কাছে ওয়াফদ পাঠিয়েছে। বাগাভীর মতে এর অর্থ জামাআত, অর্থাৎ দল; এটি ‘ওয়াফিদ’ (যে এসে পৌঁছায়)-এর বহুবচন, যেমন ‘রাকিব’ থেকে ‘রাকব’। ইবন কাসীর ছবিটা পূর্ণ করেন: ওয়াফদ মানে যারা সওয়ার হয়ে আসে। তারা আসবে আখিরাতের নূরের তৈরি সম্মানিত বাহনে চড়ে, আর হাজির হবে তাঁর সামনে, অতিথিদল যাঁদের কাছে যায় তাঁদের মধ্যে যিনি সর্বোত্তম।"
          },
          {
            "en": "Al-Qurtubi draws out what kind of arrival this is. One uses wafada, he says, when a person goes out to a king over a conquest or some grave matter, an envoy granted audience, not a traveller who wandered in. He adds a telling reason for the exact word: the custom of Arab delegations was to arrive bearing good news and then to wait for the ruler's gifts. So the God-fearing come as people with something to announce and a reward to expect. Ma'arif al-Qur'an keeps the same note: wafd is the word for those whom kings and princes receive with respect and honour.",
            "bn": "কুরতুবী খুলে বলেন এ কেমন আগমন। তিনি বলেন, ‘ওয়াফাদা’ শব্দ তখনই ব্যবহার হয়, যখন কেউ কোনো বিজয় বা গুরুতর বিষয়ে রাজার দরবারে হাজির হয়। এ যেন রাজদূত, দরবারে ডাক পাওয়া মানুষ, পথ হারিয়ে ঢুকে পড়া কোনো মুসাফির নয়। ঠিক এই শব্দ কেন, তার একটি অর্থবহ কারণও তিনি দেন: আরব দূতদলের রীতি ছিল সুসংবাদ নিয়ে আসা, তারপর রাজার পুরস্কারের অপেক্ষায় থাকা। তাই মুত্তাকীরা আসে শোনানোর মতো খবর হাতে নিয়ে, পুরস্কারের আশা বুকে নিয়ে। মাআরিফুল কুরআনও একই সুরে বলে: ওয়াফদ সেই শব্দ, রাজা-বাদশারা যাদের সম্মান ও মর্যাদায় বরণ করে নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Received by the Merciful",
          "bn": "দয়াময়ের দরবারে বরণ"
        },
        "p": [
          {
            "en": "Al-Qurtubi notes an omission in the words to the Most Merciful: the sense is to the Paradise of the Most Merciful and the abode of His honour, as when Ibrahim (AS) said, I am going to my Lord, He will guide me (37:99). No one arrives at Allah's very self; they arrive at the home of His generosity. Yet the verse names the destination by a name and not a place, and the name it chooses is ar-Rahman, the Most Merciful. The delegation of the God-fearing is received under the very attribute of mercy.",
            "bn": "কুরতুবী ‘দয়াময়ের কাছে’ কথাটায় একটি উহ্য অংশ দেখান: অর্থ হলো দয়াময়ের জান্নাতের কাছে, তাঁর সম্মানের আবাসের কাছে। যেমন ইবরাহীম (আঃ) বলেছিলেন, আমি আমার রবের দিকে চললাম, তিনি আমাকে পথ দেখাবেন (৩৭:৯৯)। কেউ আল্লাহর সত্তার কাছে গিয়ে পৌঁছায় না; তারা পৌঁছায় তাঁর দানশীলতার ঘরে। তবু আয়াত গন্তব্য বোঝাতে কোনো জায়গার নাম নেয়নি, নিয়েছে একটি নাম, আর সে নাম আর-রহমান, দয়াময়। মুত্তাকীদের অতিথিদলকে বরণ করা হয় তাঁর দয়ার গুণের ছায়াতেই।"
          },
          {
            "en": "As-Sa'di reads the honour into the details. The God-fearing, he says, are gathered honoured, dignified and magnified; their destination is the Most Merciful and their aim is al-Mannan, the Bestower. A delegate, he adds, must carry hope and a good expectation of the host he comes to, and so these come hoping for His mercy and for the winning of His gifts, turning to their Lord reassured and trusting in His grace. This surah has kept returning to the name ar-Rahman throughout; here that mercy becomes the door through which the honoured guests are led.",
            "bn": "সা’দী খুঁটিনাটির ভেতর থেকে সম্মানটা বের করে আনেন। তিনি বলেন, মুত্তাকীদের জড়ো করা হয় সম্মান, মর্যাদা আর গৌরবের সঙ্গে; তাদের গন্তব্য দয়াময়, আর লক্ষ্য আল-মান্নান, মহাদাতা। তিনি আরও বলেন, যে দূত হয়ে আসে, যাঁর কাছে আসছে তাঁর প্রতি তার মনে আশা আর সুধারণা থাকতেই হয়। তাই এরা আসে তাঁর রহমতের আশায়, তাঁর দান লাভের আশায়; রবের দিকে ফেরে প্রশান্ত মনে, তাঁর অনুগ্রহে ভরসা রেখে। এ সূরা বারবার ফিরে এসেছে আর-রহমান নামে; এখানে সেই রহমতই হয়ে ওঠে দরজা, যা দিয়ে সম্মানিত অতিথিদের ভেতরে নিয়ে যাওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Mounts, and What Carries Them",
          "bn": "বাহন, আর যা বহন করে"
        },
        "p": [
          {
            "en": "The early authorities filled in the scene. Ibn Abbas said simply, riding; Abu Hurayra, on camels; Ibn Jurayj, on noble mounts. At-Tabari and Ibn Kathir both carry a fuller word from Ali: by Allah, the delegation is not gathered on their feet, nor are they driven along; rather they are brought she-camels the like of which creation has never seen, their saddles of gold and their reins of chrysolite, and they ride them until they knock at the gates of Paradise. Al-Baghawi's version adds that if the riders wish, the mounts move, and if they wish, they fly.",
            "bn": "প্রথম যুগের আলেমরা দৃশ্যটা আরও স্পষ্ট করে এঁকেছেন। ইবন আব্বাস (রাঃ) সংক্ষেপে বললেন, সওয়ার হয়ে; আবু হুরায়রা (রাঃ), উটের পিঠে; ইবন জুরাইজ, সম্মানিত বাহনে। তাবারী আর ইবন কাসীর দুজনেই আলী (রাঃ) থেকে আরও বিস্তারিত একটি কথা এনেছেন: আল্লাহর কসম, অতিথিদলকে পায়ে হাঁটিয়ে জড়ো করা হবে না, তাড়িয়েও নেওয়া হবে না; বরং তাদের জন্য আনা হবে এমন উটনী, যার মতো সৃষ্টিজগৎ কখনো দেখেনি। সেগুলোর হাওদা সোনার, লাগাম সবুজ যবরজদের। তারা তাতে চড়ে যাবে, শেষে জান্নাতের দরজায় কড়া নাড়বে। বাগাভীর বর্ণনায় আরও আছে, সওয়ারিরা চাইলে বাহন চলবে, চাইলে উড়বে।"
          },
          {
            "en": "A second image runs alongside the first. At-Tabari and al-Qurtubi report from Amr bin Qays that the believer, leaving his grave, meets a beautiful, sweet-smelling form that says, I am your righteous deed; long did you ride me in the world, so ride me now. Ma'arif al-Qur'an notes both readings, the mounts they used in worship, or their good deeds given shape. But the grading must be said. Al-Qurtubi records that Ibn al-Arabi judged this report unsound in its chain, and Ibn Kathir calls the raised form of Ali's narration very strange, holding the version stopped at Ali himself to be nearer the truth.",
            "bn": "প্রথম ছবির পাশেই চলে দ্বিতীয় একটি ছবি। তাবারী আর কুরতুবী আমর ইবন কায়স থেকে বর্ণনা করেন: মুমিন কবর থেকে বেরিয়ে এক সুন্দর, সুগন্ধি অবয়বের দেখা পায়। সে বলে: আমি তোমার নেক আমল; দুনিয়ায় তুমি অনেক দিন আমার পিঠে চড়েছ, আজ আমার পিঠে চড়ো। মাআরিফুল কুরআন দুটি ব্যাখ্যাই উল্লেখ করে: হয় দুনিয়ায় ইবাদতের কাজে ব্যবহৃত বাহন, নয়তো নেক আমলই রূপ ধরে আসবে। তবে বর্ণনাগুলোর মান কী, তাও বলা দরকার। কুরতুবী লেখেন, ইবনুল আরাবী এ বর্ণনাকে সনদের দিক থেকে দুর্বল বলেছেন। আর ইবন কাসীর আলী (রাঃ)-এর বর্ণনার মারফূ‘ রূপটিকে খুবই গরীব বলেন; যে রূপটি আলী (রাঃ)-র নিজের কথা হিসেবে থেমে আছে, সেটিকেই তিনি সত্যের বেশি কাছাকাছি মনে করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Parched, and Driven",
          "bn": "পিপাসার্ত, তাড়িত"
        },
        "p": [
          {
            "en": "The second line turns to the criminals. Where the God-fearing are gathered, these are driven, the verb being sawq, the herding of animals. Ibn Kathir writes that the criminals, who denied the messengers and opposed them, are driven violently to the Fire, and that wirdan means parched and thirsting for drink, a reading he traces to Ata', Ibn Abbas, Mujahid, al-Hasan, Qatada and others. Al-Muyassar renders the whole line to match: driven to the Fire on foot and thirsty. No mounts, no reception, no reins of emerald, only the goad from behind.",
            "bn": "দ্বিতীয় লাইন ফেরে অপরাধীদের দিকে। যেখানে মুত্তাকীদের জড়ো করা হয়, সেখানে এদের তাড়ানো হয়। ক্রিয়াটি ‘সাওক’, পশু হাঁকানোর শব্দ। ইবন কাসীর লেখেন, যে অপরাধীরা রাসূলদের অস্বীকার করেছে ও তাঁদের বিরোধিতা করেছে, তাদের কঠোরভাবে আগুনের দিকে তাড়ানো হবে, আর ‘ওয়িরদ’ মানে তৃষ্ণার্ত, পানির জন্য কাতর। এই ব্যাখ্যা তিনি এনেছেন আতা, ইবন আব্বাস (রাঃ), মুজাহিদ, হাসান, কাতাদা প্রমুখের সূত্রে। মুয়াসসারও গোটা লাইনটার অর্থ করেছে সেভাবেই: পায়ে হেঁটে, পিপাসার্ত অবস্থায় আগুনের দিকে তাড়ানো। কোনো বাহন নেই, বরণ নেই, যবরজদের লাগাম নেই, শুধু পেছন থেকে হাঁকানি।"
          },
          {
            "en": "The word wird belongs to warada, to go down to water; a wird is the drove brought to a watering-place and the drink they come for. So the two words together draw one scene out of the herd: cattle driven, parched, down to a pool. But here the pool is Hell, and there is nothing in it to drink. The thirst the verse names is not relieved at the end of the driving; it is where the driving leads. The honoured guests arrive to be given; the driven arrive already in want, and find only want.",
            "bn": "‘ওয়িরদ’ শব্দ এসেছে ‘ওয়ারাদা’ থেকে, যার মানে পানির ঘাটে নামা; ওয়িরদ মানে পানির দিকে হাঁকিয়ে নেওয়া পশুপাল আর যে পানির জন্য তারা আসে। তাই দুটি শব্দ মিলে একটাই দৃশ্য আঁকে পশুপালের: তৃষ্ণার্ত গরু-বাছুরকে হাঁকিয়ে নেওয়া হচ্ছে জলাশয়ের দিকে। কিন্তু এখানে সেই জলাশয় জাহান্নাম, আর তাতে পান করার কিছু নেই। আয়াত যে তৃষ্ণার কথা বলে, তা হাঁকানির শেষে মেটে না; বরং সেই তৃষ্ণাই হাঁকানির গন্তব্য। সম্মানিত অতিথিরা আসে দান পেতে; আর তাড়িত দল আসে আগে থেকেই অভাব নিয়ে, শেষে অভাবই পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Words, Two Ends",
          "bn": "দুই শব্দ, দুই পরিণতি"
        },
        "p": [
          {
            "en": "Set the two closing words next to each other and the Qur'an's economy shows. Wafd and wird share their consonant frame and their idea, both being a coming, an arrival at a destination, yet one names the highest honour and the other the lowest disgrace. The God-fearing come as envoys to a generous King; the criminals come as thirsting beasts to a dry pool. Two rhyming syllables carry two eternities. Nothing between them is described, because the verse's whole point is the fork itself: one road up, one road down, and no third.",
            "bn": "দুই লাইনের শেষ শব্দ দুটি পাশাপাশি রাখলেই কুরআনের সংক্ষিপ্ততা ধরা পড়ে। ওয়াফদ আর ওয়িরদ, দুটোর ব্যঞ্জনবর্ণের কাঠামো একই, ভাবও একই: দুটোই আগমন, কোনো গন্তব্যে গিয়ে পৌঁছানো। অথচ একটি সর্বোচ্চ সম্মানের নাম, অন্যটি চরম অপমানের। মুত্তাকীরা আসে দয়ালু রাজার দরবারে দূত হয়ে; অপরাধীরা আসে শুকনো জলাশয়ে তৃষ্ণার্ত পশুর মতো। ছন্দ মেলানো দুটি শব্দে ধরা আছে দুটি অনন্ত জীবন। এ দুইয়ের মাঝখানে আর কিছুর বর্ণনা নেই, কারণ আয়াতের পুরো কথাই এই দুই ভাগ হয়ে যাওয়া পথ: একটি পথ ওপরে, একটি নিচে, তৃতীয় কোনো পথ নেই।"
          },
          {
            "en": "Ibn Kathir reads these lines as the answer to a question raised earlier in the surah. When the deniers mocked the believers, they boasted, which of the two parties is better in standing and finer in assembly? (19:73). Here the assembly is shown. The party that seemed lowly in the world is gathered as a delegation to the Most Merciful; the party that boasted of its standing is driven, parched, to the Fire. The comparison the deniers made in pride is made again on that Day, and the verdict is reversed. Their boasted honour comes to nothing; the believers who seemed nothing arrive on mounts of light.",
            "bn": "ইবন কাসীর এ লাইনগুলোকে পড়েন সূরার আগের এক প্রশ্নের জবাব হিসেবে। অস্বীকারকারীরা যখন মুমিনদের নিয়ে ঠাট্টা করত, তখন গর্ব করে বলত: দুই দলের মধ্যে কোনটি মর্যাদায় ভালো আর মজলিসে সুন্দর? (১৯:৭৩)। এখানে সেই মজলিস দেখিয়ে দেওয়া হলো। দুনিয়ায় যে দলকে নিচু মনে হতো, তাদের অতিথিদল করে দয়াময়ের কাছে জড়ো করা হয়; আর যে দল নিজের মর্যাদা নিয়ে গর্ব করত, তাদের তৃষ্ণার্ত অবস্থায় আগুনের দিকে তাড়ানো হয়। অস্বীকারকারীরা অহংকারে যে তুলনা টেনেছিল, সেদিন সেই তুলনাই আবার হয়, আর রায় উল্টে যায়। তাদের গর্বের সম্মান সেদিন কোনো কাজে আসে না; আর যে মুমিনদের তুচ্ছ মনে হতো, তারা আসে নূরের বাহনে চড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Sound Report Says",
          "bn": "সহীহ বর্ণনা যা বলে"
        },
        "p": [
          {
            "en": "Much of the mounted imagery reaches us through reports the commentators themselves flag as weak, so it is worth naming what stands on firm ground. Al-Qurtubi reconciles the mounts with a sound hadith about the gathering itself. Aisha reported that the Messenger of Allah said, the people will be gathered barefoot, naked and uncircumcised; she asked whether men and women would look at one another, and he answered that the matter will be too grave for that to concern them (Sahih al-Bukhari 6527). This is authentic, but it describes the general gathering, not the honoured delegation in particular.",
            "bn": "বাহনে চড়ে আসার এসব ছবির বেশির ভাগই এসেছে এমন বর্ণনার মাধ্যমে, যেগুলোকে তাফসীরকারেরা নিজেরাই দুর্বল বলেছেন। তাই কোনটা মজবুত ভিত্তির ওপর দাঁড়িয়ে, তা বলে রাখা ভালো। কুরতুবী এই বাহনের কথা মেলান হাশর নিয়ে একটি সহীহ হাদিসের সঙ্গে। আয়েশা (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: মানুষকে জড়ো করা হবে খালি পায়ে, বিবস্ত্র, খতনাহীন অবস্থায়। আয়েশা জানতে চাইলেন, নারী-পুরুষ কি তখন একে অন্যের দিকে তাকাবে? জবাবে তিনি বললেন, সেদিনের অবস্থা এত কঠিন হবে যে সেদিকে কারও খেয়ালই থাকবে না (সহীহ বুখারী ৬৫২৭)। হাদিসটি সহীহ, তবে এতে সাধারণ হাশরের কথা বলা হয়েছে, বিশেষ করে সম্মানিত অতিথিদলের কথা নয়।"
          },
          {
            "en": "Al-Qurtubi's reading joins the two: the God-fearing leave their graves barefoot and bare like everyone else, and are given the mounts and the robes at the standing-place, once the reckoning is under way, not before. On the honoured arrival itself, no fully sound hadith is quoted whole; the vivid narrations of she-camels and gold saddles are graded weak, or very strange, by the very scholars who record them. That does not empty the verse, since the wafd and the honour are the Qur'an's own words; but it keeps the picture inside the plain sense and off the unverified detail.",
            "bn": "কুরতুবী দুটোকে এভাবে মেলান: মুত্তাকীরাও সবার মতোই কবর থেকে বের হবে খালি পায়ে, খালি গায়ে; বাহন আর পোশাক তাদের দেওয়া হবে হাশরের ময়দানে, হিসাব শুরু হওয়ার পর, তার আগে নয়। সম্মানিত এই আগমন নিয়ে পুরোপুরি সহীহ কোনো হাদিস পূর্ণাঙ্গ আকারে উদ্ধৃত হয়নি। উটনী আর সোনার হাওদার প্রাণবন্ত বর্ণনাগুলো যাঁরা লিপিবদ্ধ করেছেন, তাঁরাই সেগুলোকে দুর্বল কিংবা খুবই গরীব বলেছেন। এতে আয়াতের কথা ফাঁপা হয়ে যায় না, কারণ ওয়াফদ আর সম্মান তো খোদ কুরআনের শব্দ। তবে ছবিটা আয়াতের সরল অর্থের মধ্যেই রাখতে হয়, যাচাই না হওয়া খুঁটিনাটিতে যাওয়া চলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Crowd, and When",
          "bn": "কোন দল, আর কখন"
        },
        "p": [
          {
            "en": "One thing must be said plainly. This verse sorts humankind on the Day of Resurrection into the God-fearing and the criminals, and describes what each group meets there. It licenses nothing against any living person or community. It names no one now, appoints no one to Hell in this life, and hands no reader the right to place another person in the driven crowd. The criminals here are those who, on that Day, are shown to have denied and opposed the messengers; who ends where is Allah's judgement, not a label anyone may pin on a neighbour today.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। এ আয়াত কিয়ামতের দিন মানুষকে দুই ভাগে ভাগ করে, মুত্তাকী আর অপরাধী, আর বলে সেখানে কোন দল কী পাবে। আজকের কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। এখানে এখনকার কারও নাম নেই; এ জীবনে কাউকে জাহান্নামি সাব্যস্ত করা হয়নি; আর কোনো পাঠককে এ অধিকার দেওয়া হয়নি যে সে অন্য কাউকে তাড়িত দলে ঢুকিয়ে দেবে। এখানে অপরাধী তারা, সেদিন যাদের সম্পর্কে প্রমাণ হবে যে তারা রাসূলদের অস্বীকার ও বিরোধিতা করেছিল। কার শেষ ঠিকানা কোথায়, সেটা আল্লাহর ফয়সালা; আজ কেউ প্রতিবেশীর গায়ে সেই তকমা সেঁটে দিতে পারে না।"
          },
          {
            "en": "What the verse hands the living is not a verdict but a question. Two arrivals are set out, and the only thing that separates them is what a person carried before the Day, taqwa kept, or messengers denied. The number of one's days is being counted down quietly, as the line before this said, and the mount for the honoured arrival is being saddled now, in each duty kept and each wrong left behind. The next verse will turn to who may speak for whom on that Day; this one asks only which of the two crowds today's living is joining.",
            "bn": "জীবিতদের হাতে আয়াত কোনো রায় দেয় না, একটা প্রশ্ন তুলে দেয়। দুটি আগমন সাজিয়ে রাখা হলো, আর এদের আলাদা করে কেবল একটা জিনিস: সেই দিনের আগে মানুষ কী সঙ্গে নিয়ে এসেছে, তাকওয়া ধরে রেখেছে, নাকি রাসূলদের অস্বীকার করেছে। আগের আয়াতে যেমন বলা হয়েছে, মানুষের দিনগুলো চুপচাপ গোনা হচ্ছে, কমে আসছে। আর সম্মানিত সেই আগমনের বাহন সাজানো হচ্ছে এখনই, প্রতিটি দায়িত্ব পালনে, প্রতিটি অন্যায় ছেড়ে দেওয়ায়। পরের আয়াত বলবে সেদিন কে কার হয়ে কথা বলতে পারবে; এ আয়াত শুধু জিজ্ঞেস করে, আজকের জীবিত মানুষ দুই দলের কোনটিতে গিয়ে মিশছে।"
          }
        ]
      }
    ]
  },
  "19:96": {
    "sections": [
      {
        "h": {
          "en": "The Gift Ending Surah Maryam",
          "bn": "সূরা মারইয়ামের শেষ উপহার"
        },
        "p": [
          {
            "en": "Surah Maryam is a gallery of Allah's tenderness: an old man given Yahya (AS) in 19:7, a lonely mother given Isa (AS), Ibrahim (AS) pleading gently with a hostile father. Near its end the surah turns severe, refuting in 19:88-92 the claim that ar-Rahman has taken a son. Then, before closing, it lays down one more gift: those who believe and do righteous deeds — ar-Rahman will appoint for them wudd, love.",
            "bn": "সূরা মারইয়াম যেন আল্লাহর কোমলতার এক চিত্রশালা। ১৯:৭ আয়াতে এক বৃদ্ধকে দেওয়া হয় ইয়াহইয়া (আঃ)-কে, এক নিঃসঙ্গ মাকে দেওয়া হয় ঈসা (আঃ)-কে, আর ইবরাহীম (আঃ) বিরূপ পিতাকে নরম সুরে বোঝান। শেষের দিকে এসে সূরাটি কঠোর হয়ে ওঠে: ১৯:৮৮-৯২ আয়াতে খণ্ডন করে সেই দাবি, আর-রহমান নাকি সন্তান গ্রহণ করেছেন। তারপর শেষ করার আগে সূরা আরও একটি উপহার রেখে যায়: যারা ঈমান আনে ও নেক আমল করে, আর-রহমান তাদের জন্য সৃষ্টি করবেন ওয়াদ্দ, অর্থাৎ ভালোবাসা।"
          },
          {
            "en": "Every word of the promise is chosen. The verb sayaj'alu carries the future prefix: this love is something He will place, a promise standing ahead of its fulfillment. The name used is ar-Rahman, the name this surah keeps returning to. And the thing promised is wudd — not bare tolerance but warm, settled affection, from the same root as His own name al-Wadud, a name the Quran gives in 11:90 and again in 85:14 among His names. The Most Merciful promises to make His faithful servants beloved.",
            "bn": "প্রতিশ্রুতির প্রতিটি শব্দ বেছে নেওয়া। সাইয়াজআলু ক্রিয়ার শুরুতে আছে ভবিষ্যৎকালের চিহ্ন: এই ভালোবাসা তিনি পরে দেবেন, প্রতিশ্রুতিটা আগে, পূরণ পরে। নামটি আর-রহমান, যে নামে এই সূরা বারবার ফিরে আসে। আর যার প্রতিশ্রুতি, তা ওয়াদ্দ: নিছক সহ্য করা নয়, উষ্ণ ও স্থায়ী মমতা। শব্দটি এসেছে তাঁর নিজের নাম আল-ওয়াদূদের মূল থেকেই; কুরআন ১১:৯০ আয়াতে, আবার ৮৫:১৪ আয়াতে তাঁর নামগুলোর মধ্যে এ নাম উল্লেখ করেছে। পরম দয়াময় প্রতিশ্রুতি দিচ্ছেন, তাঁর বিশ্বস্ত বান্দাদের তিনি প্রিয়পাত্র করে তুলবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Love That Is Appointed",
          "bn": "ওপর থেকে দেওয়া ভালোবাসা"
        },
        "p": [
          {
            "en": "The verb ja'ala treats love as something assigned from above, not manufactured from below. People spend fortunes and reputations trying to be loved — managing impressions, purchasing approval, polishing an image. The verse quietly closes that workshop. Hearts are vessels in Allah's hand, and the affection of hearts is His to distribute. What is asked of the servant is not popularity but the two conditions actually named: iman, and deeds that are righteous. The reception is His department, not ours.",
            "bn": "জাআলা ক্রিয়াটি বোঝায়, ভালোবাসা ওপর থেকে বরাদ্দ হয়; নিচে বসে বানানো যায় না। ভালোবাসা পেতে মানুষ টাকা-পয়সা আর সুনাম দুটোই খরচ করে: লোকে কী ভাববে তা সামলায়, প্রশংসা কেনে, নিজের ভাবমূর্তি ঘষেমেজে চকচকে করে। আয়াতটি নিঃশব্দে সেই কারখানায় তালা দিয়ে দেয়। হৃদয়গুলো আল্লাহর হাতের পাত্র; হৃদয়ের টান কাকে কতটা দেবেন, সে এখতিয়ার তাঁর। বান্দার কাছে চাওয়া হয়েছে জনপ্রিয়তা নয়, আয়াতে নাম ধরে বলা দুটি শর্ত: ঈমান আর নেক আমল। মানুষ কতটা গ্রহণ করবে, সেটা তাঁর দেখার বিষয়, আমাদের নয়।"
          },
          {
            "en": "The proof that love can simply be placed comes from elsewhere in the Quran. Speaking to Musa (AS) about his infancy in the house of his enemy, Allah says in 20:39 that He cast upon him love from Himself — Pharaoh's household cherished the very child sent to end Pharaoh's tyranny. No campaign produced that affection; it was placed. The same hand that put love for a baby in hostile hearts is the one making the promise of this verse.",
            "bn": "ভালোবাসা যে স্রেফ রেখে দেওয়া যায়, তার প্রমাণ কুরআনের অন্য জায়গায় আছে। শত্রুর ঘরে মূসা (আঃ)-এর শৈশবের কথা তাঁকে মনে করিয়ে দিয়ে আল্লাহ ২০:৩৯ আয়াতে বলেন, তিনি নিজের পক্ষ থেকে তাঁর ওপর ভালোবাসা ঢেলে দিয়েছিলেন। ফেরাউনের পরিবার আদরে বড় করেছিল সেই শিশুকেই, যাকে পাঠানো হয়েছিল ফেরাউনের জুলুম শেষ করতে। কোনো প্রচারণায় সেই মমতা তৈরি হয়নি; আল্লাহ তা রেখে দিয়েছিলেন। শত্রুভাবাপন্ন হৃদয়ে এক শিশুর জন্য যিনি ভালোবাসা রেখেছিলেন, এ আয়াতের প্রতিশ্রুতিও সেই একই হাতের।"
          }
        ]
      },
      {
        "h": {
          "en": "The Call from Heaven",
          "bn": "আসমান থেকে ঘোষণা"
        },
        "p": [
          {
            "en": "The mufassirun set beside this verse a hadith that maps the mechanism. Al-Bukhari relates from Abu Hurayrah (RA): when Allah loves a servant, He calls Jibril (AS) — I love so-and-so, therefore love him — and Jibril loves him and announces it to the inhabitants of heaven, and they love him, and then acceptance is laid down for him in the earth. Muslim relates it too, adding the counterpart of the one with whom Allah is angry.",
            "bn": "মুফাসসিরগণ এই আয়াতের পাশে একটি হাদিস রাখেন, যাতে দেখা যায় ব্যাপারটা কীভাবে ঘটে। বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন: আল্লাহ যখন কোনো বান্দাকে ভালোবাসেন, জিবরীল (আঃ)-কে ডেকে বলেন, আমি অমুককে ভালোবাসি, তুমিও তাকে ভালোবাসো। তখন জিবরীল তাকে ভালোবাসেন এবং আসমানবাসীদের মধ্যে তা ঘোষণা করে দেন। তারাও তাকে ভালোবাসে, তারপর পৃথিবীতে তার জন্য গ্রহণযোগ্যতা রেখে দেওয়া হয়। মুসলিমও এটি বর্ণনা করেছেন, সঙ্গে আছে উল্টো চিত্রও: আল্লাহ যার ওপর রাগান্বিত হন, তার কথা।"
          },
          {
            "en": "The order in the hadith matters: heaven first, earth second. Acceptance on earth is the shadow of a standing in heaven, not a substitute for it. Ibn Kathir cites this report in explaining our verse, because the two texts interlock — the verse states the promise, the hadith describes its route. And both make the decisive audience invisible: long before any human notices a righteous person, that person has been named, by name, above the sky.",
            "bn": "হাদিসের ক্রমটা খেয়াল করার মতো: আগে আসমান, পরে যমীন। পৃথিবীর গ্রহণযোগ্যতা আসমানের মর্যাদার ছায়া, তার বদলি নয়। ইবনে কাসীর আমাদের এ আয়াতের ব্যাখ্যায় বর্ণনাটি এনেছেন, কারণ দুটো পাঠ একে অন্যের সঙ্গে খাপে খাপে মিলে যায়: আয়াত দেয় প্রতিশ্রুতি, হাদিস দেখায় তা কোন পথে আসে। আর দুটোতেই আসল দর্শকেরা চোখের আড়ালে: কোনো মানুষ একজন নেককার ব্যক্তিকে লক্ষ করার অনেক আগেই আকাশের ওপরে তার নাম ধরে ঘোষণা হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Failed Alternative",
          "bn": "ব্যর্থ বিকল্পটি"
        },
        "p": [
          {
            "en": "The surah has already displayed the other strategy. In 19:81 people take gods besides Allah so that those gods may be a source of honor and strength for them, and 19:82 answers: no — the worshipped things will disclaim their worship and turn into opponents against them. Whatever standing is extracted from false sources does not merely fade; it reverses. Set against that, 19:96 describes standing that cannot reverse, because it is granted by the One whose gifts are not loans.",
            "bn": "অন্য পথটা সূরা আগেই দেখিয়েছে। ১৯:৮১ আয়াতে মানুষ আল্লাহ ছাড়া অন্য ইলাহ গ্রহণ করে, যাতে সেগুলো তাদের সম্মান ও শক্তির উৎস হয়। ১৯:৮২ আয়াত জবাব দেয়: কখনো নয়; উপাস্যরাই তাদের ইবাদত অস্বীকার করবে এবং তাদের বিপক্ষে দাঁড়াবে। মিথ্যা উৎস থেকে আদায় করা মর্যাদা শুধু ফিকে হয়ে যায় না, উল্টো দিকে ঘুরে যায়। এর বিপরীতে ১৯:৯৬ আয়াত এমন মর্যাদার কথা বলে, যা কখনো উল্টে যায় না, কারণ তা দিয়েছেন তিনি, যাঁর দান ধার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Promise Does Not Say",
          "bn": "প্রতিশ্রুতি যা বলে না"
        },
        "p": [
          {
            "en": "Honesty requires marking the promise's edges. It does not say every heart will love the believer; 25:31 states that every prophet was given enemies, and no one was more beloved to Allah than His prophets. Faith can draw hostility from some hearts at the very moment it draws love from others. What the verse promises is love in the hearts that matter — heaven's inhabitants and, on earth, an acceptance among the people of truth that no publicity could ever have bought.",
            "bn": "সততার খাতিরে প্রতিশ্রুতির সীমাটাও দেখিয়ে দেওয়া দরকার। আয়াত বলে না যে সব হৃদয়ই মুমিনকে ভালোবাসবে। ২৫:৩১ আয়াত জানায়, প্রত্যেক নবীর জন্যই শত্রু ঠিক করে রাখা হয়েছিল, অথচ আল্লাহর কাছে তাঁর নবীদের চেয়ে প্রিয় আর কেউ ছিল না। ঈমান যখন কিছু হৃদয়ে ভালোবাসা জাগায়, ঠিক তখনই অন্য কিছু হৃদয়ে শত্রুতাও জাগাতে পারে। আয়াত প্রতিশ্রুতি দেয় সেই হৃদয়গুলোর ভালোবাসার, যাদের ভালোবাসার মূল্য আছে: আসমানবাসীদের ভালোবাসা, আর দুনিয়াতে সত্যপন্থীদের মধ্যে এমন গ্রহণযোগ্যতা, যা কোনো প্রচার দিয়ে কখনো কেনা যেত না।"
          },
          {
            "en": "The promise also carries a tense. Sayaj'alu, He will appoint — revealed in Makkah to believers who were, at that hour, despised by their own city. The love was real but ahead of them, the way dawn is real at night. Reading it now, whoever serves Allah in obscurity stands where those first believers stood: the notice of people is simply late, and the register that matters was signed first.",
            "bn": "এ প্রতিশ্রুতির একটা কালও আছে। সাইয়াজআলু, অর্থাৎ তিনি সৃষ্টি করবেন। আয়াতটি নাজিল হয়েছিল মক্কায়, এমন মুমিনদের উদ্দেশে, যারা তখন নিজেদের শহরেই ঘৃণিত। ভালোবাসাটা সত্যিই ছিল, তবে তখনো সামনে অপেক্ষা করছিল, যেমন রাতের বেলাতেও ভোর সত্য। আজ যে-ই লোকচক্ষুর আড়ালে আল্লাহর ইবাদত করে, এ আয়াত পড়ে সে দেখবে, সে দাঁড়িয়ে আছে সেই প্রথম মুমিনদের জায়গাতেই: মানুষের নজর আসে শুধু একটু দেরিতে, আর যে খাতাটা আসল, তাতে সই হয়ে গেছে আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Working for the Right Audience",
          "bn": "আসল দর্শকের জন্য আমল"
        },
        "p": [
          {
            "en": "The verse converts directly into a redirection of effort. The energy once spent curating how we appear can be spent on the two named conditions, belief and righteous action, with the outcome consciously left to ar-Rahman. This is not indifference to people; it is the only reliable way to reach them, since the road to hearts runs through their Owner. Seek to be loved and you may miss it; seek Allah, and the verse says love will come looking for you.",
            "bn": "এ আয়াত সরাসরি আমাদের চেষ্টার দিক বদলে দেয়। নিজেদের কেমন দেখায় তা সাজাতে যে শক্তি খরচ হতো, তা এখন খরচ করা যায় আয়াতে বলা দুই শর্তে, ঈমান আর নেক আমলে; আর ফলাফল জেনে-বুঝে ছেড়ে দেওয়া যায় আর-রহমানের হাতে। এটা মানুষের প্রতি উদাসীনতা নয়; বরং মানুষের কাছে পৌঁছানোর একমাত্র নির্ভরযোগ্য পথ এটাই, কারণ হৃদয়ে পৌঁছানোর রাস্তা যায় হৃদয়ের মালিকের কাছ দিয়ে। ভালোবাসা খুঁজলে হয়তো তা হাতছাড়া হবে; আল্লাহকে খুঁজুন, আয়াত বলছে, ভালোবাসা নিজেই আপনাকে খুঁজে নেবে।"
          }
        ]
      }
    ]
  }
});
